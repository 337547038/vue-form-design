<template>
  <div
    ref="designBoxEl"
    class="design-box"
  >
    <a-ruler
      :scale="state.scale"
      :show-ruler="state.ruler"
      :size="canvasStyle.width"
    />
    <a-ruler
      :scale="state.scale"
      :show-ruler="state.ruler"
      direction="v"
      :size="canvasStyle.height"
    />
    <div
      :class="{ preview: preview }"
      :style="canvasStyle"
      class="design-canvas"
      @mousedown.left="canvasOnmousedown"
    >
      <screen-group
        v-model="screenData.list"
        @item-click="setShowRect"
      />
    </div>
    <div
      v-if="!screenData.list.length"
      class="no-date"
    >
      请从左则组件栏拖动组件到设计区域
    </div>
  </div>
  <div class="design-footer">
    <i
      class="icon-menu icon"
      @click="toggle('left')"
    />
    <div class="control-tip">
      {{ controlTip }}
    </div>
    <div class="center">
      <div class="item">
        <label class="label">标尺</label>
        <el-switch
          v-model="state.ruler"
          size="small"
        />
      </div>
      <div class="item slider">
        <label class="label">缩放比例</label>
        <el-slider
          v-model="state.scale"
          :marks="marks"
          :max="200"
          :min="state.autoScale - 30"
          show-stops
          size="small"
          @change="sliderChange"
        />
      </div>
      <div class="item">
        <el-button
          link
          type="primary"
          @click="defaultScaleClick('auto')"
        >
          自适应
        </el-button>
        <el-button
          link
          type="primary"
          @click="defaultScaleClick('100')"
        >
          100%
        </el-button>
      </div>
    </div>
    <i
      class="icon-menu icon"
      @click="toggle('right')"
    />
  </div>
  <right-menu ref="rightMenuEl" />
</template>
<script lang="ts" setup>
  import {
    computed,
    ref,
    reactive,
    nextTick,
    onMounted,
    onBeforeUnmount,
    inject,
    provide
  } from 'vue'
  import ScreenGroup from './screenGroup.vue'
  import ARuler from './ruler.vue'
  import { useScreenStore } from '@/store/screen'
  import { useEventListener } from '@/utils/useEvent'
  import { CSSProperties, ScreenData } from '../types.ts'
  import { cannotDragResize, canRectSelect, removeUnit } from '../utils'
  import RightMenu from './rightMenu.vue'

  withDefaults(
    defineProps<{
      preview: boolean
    }>(),
    {}
  )

  const screenData = inject('screenData')
  const screenStore = useScreenStore()
  const designBoxEl = ref()
  const controlTip = computed(() => {
    return screenStore.controlTip
  })
  const state = reactive({
    scale: 100,
    autoScale: 100,
    ruler: true,
    offset: [0, 0],
    moveFlag: false,
    ctrlPress: false // ctrl键是否按住
  })
  provide('stateData', state)
  const canvasStyle = computed(() => {
    const { width, height, background, primary } = screenData.value.config
    const scale = state.scale / 100
    return {
      width: width,
      height: height,
      background: background,
      transform: `scale(${scale})`,
      color: primary
    }
  })
  const canvasOnmousedown = (evt: MouseEvent) => {
    clearCanvasClick() // 先清空当前选中的
    state.moveFlag = true
    const x = evt.offsetX
    const y = evt.offsetY
    let width = 0
    let height = 0
    let sx = 0 // 矩形结束或开始位置
    let sy = 0
    document.onmousemove = (evt: MouseEvent) => {
      if (!state.moveFlag) {
        return
      }
      // 矩形选择工具，选中当前区域所有组件
      const x2 = (evt.pageX - state.offset[0]) / (state.scale / 100)
      const y2 = (evt.pageY - state.offset[1]) / (state.scale / 100)
      sx = Math.min(x, x2) // 矩形起始位置，使用两个坐标位置小的作为开始点
      sy = Math.min(y, y2)
      width = Math.abs(x - x2)
      height = Math.abs(y - y2)
      let display = true
      if (width > 10 && height > 10) {
        display = false
      }
      setTempRectPosition({
        left: sx + 'px',
        top: sy + 'px',
        width: width + 'px',
        height: height + 'px',
        display: display
      })
    }
    document.onmouseup = function () {
      if (!state.moveFlag) {
        return
      }
      // 查找在矩形范围内的不包含type=div的元素
      if (width > 10 && height > 10) {
        findComponentsInRect({
          left: sx,
          top: sy,
          width: width,
          height: height
        })

        // 如果有选中组件时，根据所选中的组件重新设置选区大小
        const activeLen = screenStore.tempActiveId?.length
        if (activeLen > 1) {
          screenStore.setControlTip(
            `当前选区选中 ${activeLen} 个组件目标，可使用键盘方向键调整位置`
          )
          // 重新计算矩形位置，并设置当前选中项为矩形
          setShowRect()
          screenStore.setActiveId('rect')
        } else {
          // 选区中只有一个或没有组件时，隐藏
          setTempRectPosition({ display: true })
          if (activeLen === 1) {
            // 设置当前项为选中项
            const id = screenStore.tempActiveId[0]
            screenStore.setActiveId(id)
            // 设置右则属性
            const obj = screenData.value.list.filter(
              (item: ScreenData) => item.id === id
            )
            screenStore.setControlAttr(obj[0])
          }
        }
      }
      state.moveFlag = false
      document.onmousemove = null
    }
  }
  // 右键菜单
  const rightMenuEl = ref()
  const openRightMenuDialog = (obj: any) => {
    rightMenuEl.value.open(obj)
  }
  provide('openRightMenu', openRightMenuDialog)
  const clearCanvasClick = () => {
    screenStore.setControlAttr({})
    screenStore.setActiveId('')
    screenStore.setTempActiveId([])
    screenStore.setControlTip('可按住Ctrl键选中多个')
    // 这里同时隐藏临时显示的矩形
    setTempRectPosition({ display: true })
    // 关闭右键菜单
    rightMenuEl.value.close()
  }
  /***
   * 查找当前矩形中所有组件并选中
   */
  const findComponentsInRect = (rect2: CSSProperties) => {
    // 因存在宽高为其他单位以及支持right和top定位，计算重叠比较复杂。这里简单化排除那些不符合规则的
    screenStore.setTempActiveId([])
    screenData.value.list.forEach((item: ScreenData) => {
      // 已经组合的组件不能再次被选中，锁定隐藏的也不能选中
      if (
        !cannotDragResize(item.position)
        && isRectOverlap(item.position, rect2)
        && canRectSelect(item)
      ) {
        screenStore.setTempActiveId(item.id)
      }
    })
    function isRectOverlap(rect1: CSSProperties, rect2: CSSProperties) {
      // 计算两个矩形的左上角和右下角坐标
      const rect1Left = removeUnit(rect1.left)
      const rect1Top = removeUnit(rect1.top)
      const rect1Right = rect1Left + removeUnit(rect1.width)
      const rect1Bottom = rect1Top + removeUnit(rect1.height)
      const rect2Left = removeUnit(rect2.left)
      const rect2Top = removeUnit(rect2.top)
      const rect2Right = rect2Left + removeUnit(rect2.width)
      const rect2Bottom = rect2Top + removeUnit(rect2.height)

      // 判断两个矩形是否水平方向和垂直方向都有重叠
      const isOverlapX = rect1Left < rect2Right && rect2Left < rect1Right
      const isOverlapY = rect1Top < rect2Bottom && rect2Top < rect1Bottom
      return isOverlapX && isOverlapY
    }
  }

  //* ****************底部工具栏相关****************//
  const marks = ref({
    100: {
      style: {}
    }
  })
  /**
   * 左右两边展开收起
   * @param type
   */
  const toggle = (type: string) => {
    const val = screenStore.getScreenConfig(type) || false
    // 展开收起有过渡动画时间
    setTimeout(() => {
      getInit()
    }, 500)
    // 这个方法的data为空时是取值，这里要设值
    screenStore.setScreenConfig(type, !val)
  }

  const defaultScaleClick = (scale: string) => {
    // 将滚动条移回0,0位置
    designBoxEl.value.scrollTo(0, 0)
    if (scale === 'auto') {
      state.scale = state.autoScale
    } else {
      state.scale = 100
    }
    screenStore.setScreenConfig('scale', state.scale)
  }
  const sliderChange = (val: number) => {
    screenStore.setScreenConfig('scale', val)
  }
  //* ****************底部工具栏相关****************//
  /**
   * 键盘按下事件 支持键盘控制调整位置
   * @param event
   */
  useEventListener(document, 'keydown', (event: KeyboardEvent) => {
    // 按住ctrl键
    if (event.key === 'Control') {
      // 先清空以前选中的，否则可能会出现原来选中的是合并组内的。这种选中时不能选中组内的单个元素
      if (!state.ctrlPress) {
        screenStore.setTempActiveId([])
        screenStore.setActiveId('')
        setTempRectPosition({ display: true })
      }
      state.ctrlPress = true
    }
    const eventKey = ['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp']
    if (screenStore.activeId && eventKey.includes(event.key)) {
      // 这里会导致在选中时当前页面没办法使用光标键
      const current = screenData.value.list.filter(
        (item: ScreenData) => item.id === screenStore.activeId
      )
      if (current?.length) {
        keydownMove(current[0], event.key)
      }
      if (screenStore.activeId === 'rect') {
        // 移动的是临时矩形
        screenData.value.list.forEach((item: ScreenData) => {
          keydownMove(item, event.key)
        })
      }
      event.preventDefault()
    }
  })

  const keydownMove = (current: ScreenData, eventKey: string) => {
    const position = current.position
    const leftNum = removeUnit(position.left)
    const topNum = removeUnit(position.top)
    switch (eventKey) {
      case 'ArrowRight':
        position.left = leftNum + 1
        break
      case 'ArrowLeft':
        position.left = leftNum - 1
        break
      case 'ArrowDown':
        position.top = topNum + 1
        break
      case 'ArrowUp':
        position.top = topNum - 1
        break
    }
  }
  /**
   * 键盘弹起事件
   */
  useEventListener(document, 'keyup', () => {
    state.ctrlPress = false
  })

  // 初始
  const getInit = () => {
    nextTick(() => {
      const boxWidth = designBoxEl.value.offsetWidth
      const screenWidth = parseInt(screenData.value.config?.width)
      if (boxWidth && screenWidth) {
        const scale = parseInt(`${(boxWidth / screenWidth) * 100}`)
        const storage = screenStore.getScreenConfig('scale')
        state.autoScale = scale
        state.scale = parseInt(storage) || scale
      }
      const componentRect: DOMRect = designBoxEl.value.getBoundingClientRect()
      state.offset[0] = componentRect.left + 20
      state.offset[1] = componentRect.top + 20
    })
  }
  const setTempRectPosition = (position: CSSProperties) => {
    const tempRect = screenData.value.list.filter(
      (item: ScreenData) => item.id === 'rect'
    )
    // 兼容下以前的，没有先添加
    /* if (!tempRect?.length) {
      screenData.value.list.push(rectList)
    } */
    tempRect[0].position = position
  }
  // 显示临时选区并设置位置信息
  const setShowRect = () => {
    const autoRect = { left: 0, top: 0, ex: 0, ey: 0, zIndex: 1 }
    screenData.value.list.forEach((item: ScreenData) => {
      if (screenStore.tempActiveId.includes(item.id)) {
        const { left, top, width, height, zIndex } = item.position
        const intLeft = parseInt(left)
        const intTop = parseInt(top)
        const intWidth = parseInt(width)
        const intHeight = parseInt(height)
        autoRect.left = getMin(autoRect.left, intLeft)
        autoRect.top = getMin(autoRect.top, intTop)
        autoRect.ex = Math.max(autoRect.ex, intWidth + intLeft) // 结束坐标点
        autoRect.ey = Math.max(autoRect.ey, intHeight + intTop)
        autoRect.zIndex = Math.max(autoRect.zIndex, zIndex || 1)
      }
    })
    setTempRectPosition({
      left: autoRect.left,
      top: autoRect.top,
      width: Math.abs(autoRect.ex - autoRect.left),
      height: Math.abs(autoRect.ey - autoRect.top),
      display: false,
      zIndex: autoRect.zIndex + 1 // 要保证在所选元素的最顶层，即选中后不让单独再选里面的
    })
    function getMin(num1: number, num2: number) {
      if (num1 === 0) {
        return num2
      } else {
        return Math.min(num1, num2)
      }
    }
  }
  onMounted(() => {
    getInit()
  })
  onBeforeUnmount(() => {})
</script>
