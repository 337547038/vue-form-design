<!-- Created by 337547038 -->
<template>
  <div
    class="group"
    :class="{
      ['group-' + data.type]: true,
      [data.config?.class]: data.config?.class
    }"
    :style="positionStyle"
    @mousedown="stopPropagation"
  >
    <div
      class="resize-box"
      @mousedown.left="moveMousedown"
      v-if="type === 0 && !data.config?.lock"
      v-show="current"
      @contextmenu="contextmenu"
    >
      <span
        v-for="item in 8"
        :key="item"
        :class="`rs${item}`"
        @mousedown.stop="resizeDotMouseDown($event, item)"
      ></span>
      <div class="position">{{ JSON.stringify(props.data.position) }}</div>
    </div>
    <div
      v-if="['text', 'border'].includes(data.type)"
      :style="getConfigStyle"
      v-html="newValue || config.text"
    ></div>
    <div v-if="data.type === 'sText'" :style="getConfigStyle">
      <my-marquee
        :width="`${data.position.width}px`"
        :height="`${data.position.height}px`"
        :speed="config.speed"
        :direction="config.direction"
        :step="config.step"
      >
        {{ newValue || config.text }}
      </my-marquee>
    </div>
    <img
      class="default-img"
      v-if="data.type === 'image'"
      :src="config.src"
      :style="getConfigStyle"
      alt="请选择或上传图片"
    />
    <div
      class="default-bg"
      v-if="data.type === 'background'"
      :style="getBackground"
    >
      <span v-if="!config.src">请选择或上传图片</span>
    </div>
    <div v-if="data.type === 'table'" ref="tableEl">
      <el-table
        v-bind="config.props"
        :data="tableData"
        style="width: 100%"
        :height="`${props.data.position.height}`"
      >
        <el-table-column
          v-bind="col"
          v-for="col in data.columns"
          :key="col.prop"
        />
      </el-table>
    </div>
    <now-time
      :style="getConfigStyle"
      v-if="data.type === 'clock'"
      :config="config"
    />
    <component
      v-if="['component'].includes(data.type)"
      :is="config.component"
      v-bind="config"
    />
    <echarts-init
      :option="newValue || data.option"
      :height="data.position.height"
      width="100%"
      v-if="['line', 'bar', 'pie', 'echarts'].includes(data.type)"
    />
  </div>
</template>

<script setup lang="ts">
  import {
    ref,
    computed,
    onMounted,
    nextTick,
    watch,
    inject,
    reactive
  } from 'vue'
  import NowTime from './nowTime.vue'
  import MyMarquee from './marquee.vue'
  import EchartsInit from '../../components/echartsInt.vue'
  import type { ScreenData } from '../types'
  import { getRequest } from '@/api'
  import formatScreen from '@/utils/formatScreen'
  import { ElMessage } from 'element-plus'
  import { debounce } from '@/utils'
  import { canControlRect } from '../utils.ts'

  const props = withDefaults(
    defineProps<{
      data: ScreenData
      type?: number
      current?: boolean // 当前激活的项index
      scale: number
    }>(),
    {
      type: 1
    }
  )
  const emits = defineEmits<{
    (e: 'controlClick', type: string): void
    (
      e: 'contextmenu',
      { x, y, type }: { x: number; y: number; type: number }
    ): void
  }>()
  const state = reactive({
    left: '',
    top: '',
    width: '',
    height: ''
  })
  const newValue = ref()
  const config = computed(() => {
    return props.data.config || {}
  })
  const isNumber = (val: any) => {
    try {
      return /^\d+(\.\d+)?$/.test(val.toString())
    } catch (e) {
      return false
    }
  }
  // 位置信息
  const transformUnit = (val: any) => {
    if (isNumber(val)) {
      return val + 'px'
    } else {
      return val
    }
  }
  // 组件自定配置编辑的样式+定位时的宽高
  const getConfigStyle = computed(() => {
    //const { width, height } = props.data.position
    return Object.assign(
      {},
      { width: '100%', height: '100%' },
      config.value.style || {}
    )
  })
  const getBackground = computed(() => {
    let src = {}
    if (config.value.src) {
      src = { backgroundImage: `url(${config.value.src})` }
    }
    return Object.assign(config.value.style || {}, src)
  })
  // 定位位置样式
  const positionStyle = computed(() => {
    if (!props.data.position) {
      return {}
    }
    const { left, top, height, width, zIndex, display, right, bottom } =
      props.data.position
    // 设置了right时left为auto，设置了bottom时top为auto
    let left2 = state.left || transformUnit(left)
    if (right || right === 0) {
      left2 = 'auto'
    }
    let top2 = state.top || transformUnit(top)
    if (bottom || bottom === 0) {
      top2 = 'auto'
    }
    return {
      left: left2,
      right: transformUnit(right),
      bottom: transformUnit(bottom),
      top: top2,
      width: state.width || transformUnit(width),
      height: state.height || transformUnit(height),
      zIndex: zIndex || 1,
      display: display ? 'none' : ''
    }
  })
  const stopPropagation = (evt: MouseEvent) => {
    // 当前图层锁定时允许，要不没办法拖动主设计区域
    if (!config.value.lock) {
      evt.preventDefault()
      evt.stopPropagation()
    }
  }
  const resizeDotMouseDown = (evt: MouseEvent, index: number) => {
    // 组缩放目前布局不易实现，如往右边拉宽20px，并不是组内的所有标签都往右拉宽20px，而是需按比例拉宽
    // 可行方案：合并组后使用嵌套方式将组内标签放在一个div里，并转换为百分比单位基于组元素定位，在缩放时无需处理组内标签
    // 目前不支持组缩放
    if (props.data.type === 'group') {
      return
    }
    let flag = true
    if (flag) {
      const x = evt.pageX
      const y = evt.pageY
      const { width, height, left, top } = props.data.position
      if (!canControlRect(props.data.position)) {
        moveTips('使用非px单位宽高和right或bottom定位时不能拖动缩放')
        return
      }
      const widthNum = parseInt(`${width}`)
      const heightNum = parseInt(`${height}`)
      document.onmousemove = (ev: MouseEvent) => {
        const mx = ev.pageX - x // 移动的位置
        const my = ev.pageY - y
        let mWidth = width // 移动后的宽
        let mHeight = height
        let mLeft = left
        let mTop = top
        switch (index) {
          case 1:
            // 左上
            mWidth = widthNum - mx
            mHeight = heightNum - my
            mTop = top + my
            mLeft = left + mx
            break
          case 4:
            // 向左
            mWidth = widthNum - mx
            mLeft = left + mx
            break
          case 6:
            // 左下
            mWidth = widthNum - mx
            mLeft = left + mx
            mHeight = heightNum + my
            break
          case 2: // 上中
            mHeight = heightNum - my
            mTop = top + my
            break
          case 7: // 下中
            mHeight = heightNum + my
            break
          case 3: // 右上
            mWidth = widthNum + mx
            mHeight = heightNum - my
            mTop = top + my
            break
          case 5: // 右中
            mWidth = widthNum + mx
            break
          case 8: // 右下
            mWidth = widthNum + mx
            mHeight = heightNum + my
            break
        }
        // 重新设置值
        // 限制最小选择范围
        if (mWidth < 50 || mHeight < 30) {
          return
        }
        Object.assign(props.data.position, {
          width: mWidth,
          height: mHeight,
          left: mLeft,
          top: mTop
        })
      }
      document.onmouseup = function () {
        document.onmousemove = null
        document.onmouseup = null
        flag = false
      }
    }
    evt.stopPropagation()
  }
  // 移动
  const moveMousedown = (evt: MouseEvent) => {
    // 暂不处理组标签移动
    if (props.data.type === 'group') {
      return
    }
    // 设置了right或bottom时不能拖动
    const { left, top } = props.data.position
    let moveFlag = true
    const startX = evt.pageX
    const startY = evt.pageY
    let mx = left // 移动后的位置
    let my = top
    let mxd = 0 // 移动的距离
    let myd = 0

    document.onmousemove = (evt: MouseEvent) => {
      if (!canControlRect(props.data.position)) {
        moveTips('使用right或bottom定位时不能拖动')
        return
      }
      if (!moveFlag) {
        return
      }
      const scale = props.scale / 100
      mxd = (evt.pageX - startX) / scale
      myd = (evt.pageY - startY) / scale
      mx = mxd + parseInt(`${left}`) || 0
      my = myd + parseInt(`${top}`) || 0
      state.left = mx + 'px'
      state.top = my + 'px'
    }
    document.onmouseup = function () {
      Object.assign(props.data.position, {
        left: parseInt(`${mx}`),
        top: parseInt(`${my}`)
      })
      state.left = ''
      state.top = ''
      moveFlag = false
      document.onmousemove = null
    }
  }
  // 缩放或移动提示
  const moveTips = debounce(
    (text: string) => {
      ElMessage.error(text)
    },
    3000,
    true
  )
  // 表格相关
  const tableData = computed(() => {
    // 如果开启了轮播时，复制一份数据追加到最后
    const option = newValue.value || props.data.option
    if (config.value.carousel) {
      return [...option, ...option]
    }
    return option
  })
  // 设置表格滚动
  const tableEl = ref()
  const setTableCarousel = () => {
    if (
      !config.value.carousel ||
      !tableEl.value ||
      props.data.type !== 'table'
    ) {
      return
    }
    const divData = tableEl.value.querySelector('.el-scrollbar__wrap')

    function marquee() {
      divData.scrollTop += 1
      if (divData.clientHeight + divData.scrollTop === divData.scrollHeight) {
        divData.scrollTop = divData.scrollTop - divData.scrollHeight / 2
      }
    }

    let clear = setInterval(marquee, config.value.speed || 30)
    tableEl.value.onmouseenter = function () {
      clearInterval(clear)
    }
    tableEl.value.onmouseleave = function () {
      clear = setInterval(marquee, config.value.speed || 30)
    }
  }
  watch(
    () => props.data.option,
    () => {
      nextTick(() => {
        setTableCarousel()
      })
    },
    { immediate: true }
  )
  // 设置表格滚动结束
  // 获取动态数据相关
  const getDataByType = computed(() => {
    // 根据类型返回对应值
    switch (props.data.type) {
      case 'text':
      case 'sText':
        return config.value.text
      case 'line':
      case 'bar':
      case 'pie':
      case 'echarts':
      case 'table':
        return props.data.option
    }
    return ''
  })
  const globalScreen = inject('globalScreen', {})
  const getUrlData = () => {
    if (['image', 'background', 'border', 'clock'].includes(props.data.type)) {
      return // 不支持动态数据获取的return
    }
    const { optionsType, requestUrl, method = 'post' } = config.value
    const {
      beforeRequest = '',
      afterResponse = '',
      getGlobal
    } = props.data.events || {}
    if (optionsType === 2 && typeof getGlobal === 'function') {
      // 从全局加载的数据中提取
      newValue.value = getGlobal(getDataByType.value, globalScreen.value || {})
      return
    }
    if (optionsType !== 1 || !requestUrl) {
      return
    }
    let params = {}
    if (beforeRequest && typeof beforeRequest === 'function') {
      params = beforeRequest({})
    }
    getRequest(requestUrl, params, { method: method })
      .then((res: any) => {
        const result = res.data
        newValue.value = result
        if (afterResponse) {
          if (typeof afterResponse === 'function') {
            newValue.value = afterResponse(
              result,
              getDataByType.value,
              globalScreen.value || {}
            )
          } else {
            newValue.value = formatScreen(
              afterResponse,
              result,
              getDataByType.value,
              globalScreen.value || {}
            )
          }
        }
      })
      .catch((res: any) => {
        console.log(res)
      })
  }
  // 获取动态数据相关结束
  // 鼠标右键事件
  const contextmenu = (evt: MouseEvent) => {
    const type = props.data.type === 'group' ? 1 : 2
    emits('contextmenu', { x: evt.pageX, y: evt.pageY, type: type })
    evt.preventDefault()
  }
  onMounted(() => {
    getUrlData() // 从接口获取动态数据
  })
</script>
