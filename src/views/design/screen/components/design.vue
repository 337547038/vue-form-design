<template>
  <div ref="designBoxEl" class="design-box" @scroll="designScroll">
    <a-ruler
      :scale="state.scale"
      :scroll="state.scroll"
      :show-ruler="state.ruler"
      size="1920px"
    />
    <a-ruler
      :scale="state.scale"
      :scroll="state.scroll"
      :show-ruler="state.ruler"
      direction="v"
      size="1080px"
    />
    <div
      :class="{ preview: preview }"
      :style="canvasStyle"
      class="design-canvas"
      @contextmenu="contextmenu"
      @mousedown.left="onmousedown"
    >
      <draggable
        v-bind="{
          group: 'form',
          animation: 200,
          handle: '.none'
        }"
        :list="data.list"
        class="drag"
        itemKey="id"
        name="fade"
        @add="draggableAdd"
      >
        <template #item="{ element, index }">
          <ak-screen
            v-if="getScreenShowHide(element)"
            :current="state.activeIndex === index"
            :data="element"
            :scale="state.scale"
            :type="0"
            @contextmenu="contextmenuScreen"
            @change-event="changeEvent(index, $event, state.tempRectIndex)"
            @click.stop="itemClick(element, index)"
          />
        </template>
      </draggable>
      <div :style="state.rect" class="draw-react"></div>
    </div>
    <div v-if="!data.list.length" class="no-date">
      请从左则组件栏拖动组件到设计区域
    </div>
  </div>
  <div class="design-footer">
    <i class="icon-menu icon" @click="toggle('left')"></i>
    <div class="control-tip">{{ controlTip }}</div>
    <div class="center">
      <div class="item">
        <label class="label">标尺</label>
        <el-switch v-model="state.ruler" size="small" />
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
        <el-button link type="primary" @click="defaultScaleClick('auto')"
          >自适应
        </el-button>
        <el-button link type="primary" @click="defaultScaleClick('100')"
          >100%
        </el-button>
      </div>
    </div>
    <i class="icon-menu icon" @click="toggle('right')"></i>
  </div>
</template>
<script lang="ts" setup>
  import {
    computed,
    ref,
    reactive,
    nextTick,
    onMounted,
    onBeforeUnmount
  } from 'vue'
  import Draggable from 'vuedraggable-es'
  import AkScreen from './screen.vue'
  import {
    addUnit,
    cannotDragResize,
    canRectSelect,
    removeUnit
  } from '../utils'
  import type {
    ScreenData,
    UpdatePosition,
    Contextmenu2,
    Contextmenu
  } from '../types'
  import ARuler from './ruler.vue'
  import { useDesignStore } from '@/store/design'
  import { getRandom } from '@/utils'

  const props = withDefaults(
    defineProps<{
      preview: boolean
      data: any
      updatePosition: (
        index: number,
        data: UpdatePosition,
        tempRectIndex: number[]
      ) => void
      screenContextmenu: (data: Contextmenu2) => void
    }>(),
    {
      data: () => {
        return {}
      }
    }
  )

  const emits = defineEmits<{
    (e: 'draggableAdd'): void
  }>()

  const designStore = useDesignStore()
  const designBoxEl = ref()
  const controlTip = ref('')
  const state = reactive({
    scale: 100,
    autoScale: 100,
    activeTool: 'mouse',
    activeIndex: -1,
    scroll: [0, 0], // 滚动条位置
    ruler: true,
    offset: [0, 0],
    rect: {
      left: '0px',
      top: '0px',
      width: '0px',
      height: '0px',
      display: 'none'
    },
    tempRectIndex: [], // 临时选中的index
    ctrlPress: false //ctrl键是否按住
  })

  const canvasStyle = computed(() => {
    const { width, height, background, primary } = props.data.config
    const scale = state.scale / 100
    return {
      width: width,
      height: height,
      background: background,
      transform: `scale(${scale})`,
      color: primary,
      cursor: state.activeTool === 'mouse' ? 'default' : 'pointer'
    }
  })
  /**
   * 记录滚动条位置
   */
  const designScroll = () => {
    const scrollTop = designBoxEl.value.scrollTop
    const scrollLeft = designBoxEl.value.scrollLeft
    state.scroll = [scrollLeft, scrollTop]
  }

  //临时矩形根据条件显示
  const getScreenShowHide = (list: ScreenData) => {
    if (list.type === 'tempRect') {
      return !!state.tempRectIndex.length
    }
    return true
  }
  const draggableAdd = (evt: any) => {
    const newIndex = evt.newIndex
    const obj: any = props.data.list[newIndex]
    delete obj.label
    delete obj.icon
    const { pageX, pageY } = evt.originalEvent
    if (!obj.position) {
      obj.position = {}
    }
    if (!obj.config) {
      obj.config = {}
    }
    obj.position.left = addUnit(pageX - state.offset[0] + state.scroll[0])
    obj.position.top = addUnit(pageY - state.offset[1] + state.scroll[1])
    state.activeIndex = newIndex
    setCurrentConfig(obj)
    emits('draggableAdd')
  }

  /**
   * 根据条件添加临时选区
   * @param position
   */
  const tempRectAdd = (position: any) => {
    const dataList = props.data.list
    let hasIndex = -1
    dataList.forEach((item: ScreenData, index: number) => {
      if (item.type === 'tempRect') {
        hasIndex = index
        // 存在时设置为可见
        item.position = position
        state.activeIndex = index
      }
    })
    if (hasIndex === -1) {
      dataList.push({
        type: 'tempRect',
        position: position
      })
      state.activeIndex = dataList.length - 1
    }
  }
  // 设置选区及合并组宽高及坐标点
  const getRectPosition = () => {
    const autoRect = { left: 0, top: 0, ex: 0, ey: 0 }
    for (let i = 0; i < state.tempRectIndex.length; i++) {
      const list = props.data.list[state.tempRectIndex[i]]
      const { left, top, width, height } = list.position
      const intLeft = parseInt(left)
      const intTop = parseInt(top)
      const intWidth = parseInt(width)
      const intHeight = parseInt(height)
      autoRect.left = getMin(autoRect.left, intLeft)
      autoRect.top = getMin(autoRect.top, intTop)
      autoRect.ex = Math.max(autoRect.ex, intWidth + intLeft) // 结束坐标点
      autoRect.ey = Math.max(autoRect.ey, intHeight + intTop)
    }
    return {
      left: autoRect.left,
      top: autoRect.top,
      width: Math.abs(autoRect.ex - autoRect.left),
      height: Math.abs(autoRect.ey - autoRect.top)
    }

    function getMin(num1: number, num2: number) {
      if (num1 === 0) {
        return num2
      } else {
        return Math.min(num1, num2)
      }
    }
  }
  /***
   * 查找当前矩形中所有组件并选中
   */
  const findComponentsInRect = () => {
    // 因存在宽高为其他单位以及支持right和top定位，计算重叠比较复杂。这里简单化排除那些不符合规则的
    props.data.list.forEach((item: ScreenData, index: number) => {
      // 已经组合的组件不能再次被选中，锁定隐藏的也不能选中
      if (
        !cannotDragResize(item.position) &&
        isRectOverlap(item.position) &&
        canRectSelect(item)
      ) {
        if (!state.tempRectIndex.includes(index)) {
          // 防意外重复push
          state.tempRectIndex.push(index)
        }
      }
    })
    // 如果有选中组件时，根据所选中的组件重新设置选区大小
    if (state.tempRectIndex.length > 1) {
      controlTip.value = `当前选区选中 ${state.tempRectIndex.length} 个组件目标，可使用键盘方向键调整位置`
      const { left, top, width, height } = getRectPosition()
      state.rect = {
        left: left + 'px',
        top: top + 'px',
        width: width + 'px',
        height: height + 'px',
        display: 'none'
      }
      return true
    } else {
      // 选区中只有一个或没有组件时，隐藏
      state.rect.display = 'none'
      return false
    }

    function isRectOverlap(rect1: any) {
      // 计算两个矩形的左上角和右下角坐标
      const rect1Left = removeUnit(rect1.left)
      const rect1Top = removeUnit(rect1.top)
      const rect1Right = rect1Left + removeUnit(rect1.width)
      const rect1Bottom = rect1Top + removeUnit(rect1.height)
      const rect2Left = removeUnit(state.rect.left)
      const rect2Top = removeUnit(state.rect.top)
      const rect2Right = rect2Left + removeUnit(state.rect.width)
      const rect2Bottom = rect2Top + removeUnit(state.rect.height)

      // 判断两个矩形是否水平方向和垂直方向都有重叠
      const isOverlapX = rect1Left < rect2Right && rect2Left < rect1Right
      const isOverlapY = rect1Top < rect2Bottom && rect2Top < rect1Bottom
      return isOverlapX && isOverlapY
    }
  }
  /**
   * 设计区域鼠标事件，框选矩形、搭配键盘键拖动移动滚动条功能
   * @param evt
   */
  const onmousedown = (evt: MouseEvent) => {
    canvasClick() // 先清空当前选中的
    state.moveFlag = true
    const scrollTop = designBoxEl.value.scrollTop
    const scrollLeft = designBoxEl.value.scrollLeft
    const x = evt.pageX + scrollLeft
    const y = evt.pageY + scrollTop
    const rx =
      (evt.pageX - state.offset[0] - 20 + state.scroll[0]) / (state.scale / 100)
    const ry =
      (evt.pageY - state.offset[1] - 20 + state.scroll[1]) / (state.scale / 100)
    if (state.activeTool === 'mouse') {
      // 矩形选择工具，初始点击位置
      state.rect = {
        left: rx + 'px',
        top: ry + 'px',
        width: '0px',
        height: '0px',
        display: ''
      }
    }
    document.onmousemove = (evt: MouseEvent) => {
      if (!state.moveFlag) {
        return
      }
      if (state.activeTool === 'mouse') {
        // 矩形选择工具，选中当前区域所有组件
        const rxE =
          (evt.pageX - state.offset[0] - 20 + state.scroll[0]) /
          (state.scale / 100) // 移动当前实时位置
        const ryE =
          (evt.pageY - state.offset[1] - 20 + state.scroll[1]) /
          (state.scale / 100)
        const sx = rx > rxE ? rxE : rx // 矩形起始位置，使用两个坐标位置小的作为开始点
        const sy = ry > ryE ? ryE : ry
        state.rect = {
          left: sx + 'px',
          top: sy + 'px',
          width: Math.abs(rx - rxE) + 'px',
          height: Math.abs(ry - ryE) + 'px',
          display: ''
        }
      } else {
        const xx = x - evt.pageX
        const yy = y - evt.pageY
        // 可拖动状态
        designBoxEl.value.scrollTo(xx, yy)
      }
    }
    document.onmouseup = function () {
      if (!state.moveFlag) {
        return
      }
      const { width, height } = state.rect
      state.rect.display = 'none'
      if (parseInt(width) > 10 && parseInt(height) > 10) {
        const hasFind = findComponentsInRect()
        if (hasFind) {
          //查找到有符合条件的数据 添加一条临时编辑矩形数据
          const position = Object.assign({}, state.rect, { display: false }) //设置为可见
          tempRectAdd(position)
        }
      }
      state.moveFlag = false
      document.onmousemove = null
    }
  }
  const canvasClick = () => {
    state.tempRectIndex = []
    state.activeIndex = -1
    setCurrentConfig({})
    const tips = ['可按住Alt拖动设计区域', '可按住Ctrl键选中多个']
    const index = getRandom(0, 1)
    controlTip.value = tips[index]
  }
  /**
   * 禁用设计区域右键默认菜单
   * @param evt
   */
  const contextmenu = (evt: MouseEvent) => {
    evt.preventDefault()
  }
  const itemClick = (data: ScreenData, index: number) => {
    if (state.ctrlPress) {
      state.tempRectIndex.push(index)
      state.activeIndex = index
      controlTip.value = '可按住Ctrl键选中多个'
      if (state.tempRectIndex.length > 1) {
        const rect = getRectPosition()
        tempRectAdd(rect)
      }
    } else {
      if (data.type !== 'tempRect') {
        state.tempRectIndex = []
        state.activeIndex = index
        setCurrentConfig(data)
      }
      controlTip.value = '可使用键盘方向键调整位置'
    }
  }
  const changeEvent = (
    index: number,
    obj: UpdatePosition,
    tempRectIndex: number[]
  ) => {
    if (obj.type === 'moveTip') {
      controlTip.value = `当前位置：${obj.left}:${obj.top}`
    }
    props.updatePosition(index, obj, tempRectIndex)
  }
  const setCurrentConfig = (obj: ScreenData | {}) => {
    designStore.setScreenControlAttr(obj)
  }

  //*****************底部工具栏相关****************//
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
    const val = designStore.getDataScreen(type) || false
    // 展开收起有过渡动画时间
    setTimeout(() => {
      getInit()
    }, 500)
    // 这个方法的data为空时是取值，这里要设值
    designStore.setDataScreen(type, !val)
  }

  const defaultScaleClick = (scale: string) => {
    // 将滚动条移回0,0位置
    designBoxEl.value.scrollTo(0, 0)
    if (scale === 'auto') {
      state.scale = state.autoScale
    } else {
      state.scale = 100
    }
    designStore.setDataScreen('scale', state.scale)
  }
  const sliderChange = (val: number) => {
    designStore.setDataScreen('scale', val)
  }
  //*****************底部工具栏相关****************//
  /**
   * 键盘按下事件 支持键盘控制调整位置
   * @param event
   */
  const controlMoveByKeydown = (event: KeyboardEvent) => {
    //console.log(event)
    // 按住ctrl键
    if (event.key === 'Control') {
      // 先取消当前所有选中的。加个判断要不按住时会一直触发当前事件
      if (!state.ctrlPress) {
        state.tempRectIndex = []
      }
      state.ctrlPress = true
    }
    if (event.key === 'Alt') {
      state.activeTool = 'process'
    }
    const eventKey = ['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp']
    if (state.activeIndex !== -1 && eventKey.includes(event.key)) {
      const dataList = props.data.list[state.activeIndex]
      const canDrag = cannotDragResize(dataList?.position, true)
      const obj = { type: 'keydown', eventKey: event.key }
      if (!canDrag) {
        props.updatePosition(state.activeIndex, obj, state.tempRectIndex)
      }
      // 这里会导致在选中时当前页面没办法使用光标键
      event.preventDefault()
    }
  }
  /**
   * 键盘弹起事件
   */
  const onkeyup = () => {
    // 恢复
    if (state.activeTool !== 'mouse') {
      state.activeTool = 'mouse'
    }
    state.ctrlPress = false
  }

  const contextmenuScreen = (data: Contextmenu) => {
    const params = Object.assign({}, data, {
      activeIndex: state.activeIndex,
      tempRectIndex: state.tempRectIndex,
      callback: (type: string, data: any) => {
        switch (type) {
          case 'canvasClick':
            canvasClick()
            break
          case 'merge':
            // 合并组时，选中合并后的组，清空临时选中
            canvasClick()
            state.activeIndex = data?.index
            setCurrentConfig(props.data.list[data.index])
            break
        }
      }
    })
    props.screenContextmenu(params as Contextmenu2)
  }
  //初始
  const getInit = () => {
    nextTick(() => {
      const boxWidth = designBoxEl.value.offsetWidth
      const screenWidth = parseInt(props.data.config?.width)
      if (boxWidth && screenWidth) {
        const scale = parseInt(`${(boxWidth / screenWidth) * 100}`)
        const storage = designStore.getDataScreen('scale')
        state.autoScale = scale
        state.scale = parseInt(storage) || scale
      }
      // 获取偏移距离
      const componentRect: DOMRect = designBoxEl.value.getBoundingClientRect()
      state.offset[1] =
        componentRect.top +
        document.documentElement.scrollTop -
        (document.documentElement.clientTop || 0)
      state.offset[0] =
        componentRect.left +
        document.documentElement.scrollLeft -
        (document.documentElement.clientLeft || 0)
    })
  }
  onMounted(() => {
    getInit()
    document.addEventListener('keydown', controlMoveByKeydown)
    document.addEventListener('keyup', onkeyup)
  })
  onBeforeUnmount(() => {
    document.removeEventListener('keydown', controlMoveByKeydown)
    document.removeEventListener('keyup', onkeyup)
  })
</script>
