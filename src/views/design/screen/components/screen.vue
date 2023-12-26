<!-- Created by weiXin:337547038 -->
<template>
  <div
    :class="{
      ['group-' + data.type]: true,
      [data.config?.class]: data.config?.class
    }"
    :style="positionStyle"
    class="group"
    @mousedown="stopPropagation"
  >
    <div
      v-if="type === 0 && !data.config?.lock"
      v-show="current"
      class="resize-box"
      @contextmenu="contextmenu"
      @mousedown.left.stop="moveMousedown"
    >
      <span
        v-show="data.type !== 'tempRect'"
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
        :direction="config.direction"
        :height="`${data.position.height}px`"
        :speed="config.speed"
        :step="config.step"
        :width="`${data.position.width}px`"
      >
        {{ newValue || config.text }}
      </my-marquee>
    </div>
    <img
      v-if="data.type === 'image'"
      :src="config.src"
      :style="getConfigStyle"
      alt="请选择或上传图片"
      class="default-img"
    />
    <div
      v-if="data.type === 'background'"
      :style="getBackground"
      class="default-bg"
    >
      <span v-if="!config.src">请选择或上传图片</span>
    </div>
    <div v-if="data.type === 'table'" ref="tableEl" class="screen-table">
      <el-table
        v-bind="config.props"
        :data="tableData"
        :height="`${props.data.position.height}`"
        style="width: 100%"
      >
        <el-table-column
          v-bind="col"
          v-for="col in data.tableData?.columns"
          :key="col.prop"
        />
      </el-table>
    </div>
    <now-time
      v-if="data.type === 'clock'"
      :config="config"
      :style="getConfigStyle"
    />
    <component
      :is="config.component"
      v-bind="config"
      v-if="['component'].includes(data.type)"
    />
    <echarts-init
      v-if="['line', 'bar', 'pie', 'echarts'].includes(data.type)"
      :height="data.position.height"
      :option="(newValue || data.option) as any"
      :width="data.position.width || '100%'"
    />
  </div>
</template>

<script lang="ts" setup>
  import {
    ref,
    computed,
    onMounted,
    nextTick,
    watch,
    inject,
    reactive,
    onBeforeUnmount
  } from 'vue'
  import { onBeforeRouteLeave } from 'vue-router'
  import NowTime from './nowTime.vue'
  import MyMarquee from './marquee.vue'
  import EchartsInit from '../../components/echartsInt.vue'
  import type { ScreenData, UpdatePosition, Contextmenu } from '../types'
  import formatScreen from '@/utils/formatScreen'
  import { cannotDragResize, addUnit, removeUnit } from '../utils'
  import { requestResponse } from '@/utils/requestResponse.ts'

  const props = withDefaults(
    defineProps<{
      data: ScreenData
      type?: number
      current?: boolean // 当前激活的项index
      scale?: number
    }>(),
    {
      type: 1,
      scale: 100
    }
  )
  const emits = defineEmits<{
    (e: 'contextmenu', data: Contextmenu): void
    (e: 'changeEvent', data: UpdatePosition): void
  }>()
  const state = reactive({
    left: 0, //移动时实时位置，移动结束才更新
    top: 0,
    width: 0,
    height: 0,
    moveFlag: false
  })
  const config = computed(() => {
    return props.data.config || {}
  })
  // 组件自定配置编辑的样式+定位时的宽高
  const getConfigStyle = computed(() => {
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
    const right2 = addUnit(right)
    const bottom2 = addUnit(bottom)
    return {
      left: addUnit(state.left) || (right ? '' : addUnit(left)),
      right: right2,
      bottom: bottom2,
      top: addUnit(state.top) || (bottom ? '' : addUnit(top)),
      width: addUnit(state.width || width),
      height: addUnit(state.height || height),
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
    if (props.data.type === 'group') {
      return
    }
    let flag = true
    const x = evt.pageX
    const y = evt.pageY
    const { width, height, left, top } = props.data.position
    if (cannotDragResize(props.data.position, true)) {
      return
    }
    const widthNum = removeUnit(width)
    const heightNum = removeUnit(height)
    const letNum = removeUnit(left)
    const topNum = removeUnit(top)

    document.onmousemove = (ev: MouseEvent) => {
      if (!flag) {
        return
      }
      const mx = ev.pageX - x // 移动的位置
      const my = ev.pageY - y
      let mWidth = widthNum // 移动后的宽
      let mHeight = heightNum
      let mLeft = letNum
      let mTop = topNum
      switch (index) {
        case 1:
          // 左上
          mWidth = widthNum - mx
          mHeight = heightNum - my
          mTop = topNum + my
          mLeft = letNum + mx
          break
        case 4:
          // 向左
          mWidth = widthNum - mx
          mLeft = letNum + mx
          break
        case 6:
          // 左下
          mWidth = widthNum - mx
          mLeft = letNum + mx
          mHeight = heightNum + my
          break
        case 2: // 上中
          mHeight = heightNum - my
          mTop = topNum + my
          break
        case 7: // 下中
          mHeight = heightNum + my
          break
        case 3: // 右上
          mWidth = widthNum + mx
          mHeight = heightNum - my
          mTop = topNum + my
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
      emits('changeEvent', {
        type: 'resize',
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
    state.moveFlag = true
    const startX = evt.pageX
    const startY = evt.pageY
    const leftNum = removeUnit(left)
    const topNum = removeUnit(top)
    let mxd = 0 // 移动的距离
    let myd = 0
    if (cannotDragResize(props.data.position, true)) {
      //不能拖动
      console.log('不能拖动')
      state.moveFlag = false
    } else {
      state.left = leftNum
      state.top = topNum
    }
    document.onmousemove = (evt: MouseEvent) => {
      if (!state.moveFlag) {
        return
      }
      const scale = props.scale / 100
      mxd = removeUnit((evt.pageX - startX) / scale)
      myd = removeUnit((evt.pageY - startY) / scale)
      state.left = removeUnit(mxd + leftNum)
      state.top = removeUnit(myd + topNum)
      emits('changeEvent', {
        type: 'moveTip',
        left: state.left,
        top: state.top
      })
    }
    document.onmouseup = function () {
      if (!state.moveFlag) {
        return
      }
      emits('changeEvent', {
        type: 'move',
        moveX: mxd, //移动的距离
        moveY: myd,
        left: state.left, //移动的实时位置
        top: state.top
      })
      state.left = 0
      state.top = 0
      state.moveFlag = false
      document.onmousemove = null
    }
  }
  // 表格相关
  const tableData = computed(() => {
    // 如果开启了轮播时，复制一份数据追加到最后
    const option = newValue.value || props.data.tableData?.list
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
  const unWatch = watch(
    () => props.data.tableData,
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
        return props.data.tableData
    }
    return ''
  })
  const globalScreen = inject('globalScreen', {})
  const requestResult = ref()
  const newValue = computed(() => {
    const { getGlobal, afterFetch } = props.data.events || {}
    const type = config.value.optionsType
    if (typeof getGlobal === 'function' && type === 2) {
      // 从全局接口获取
      return getGlobal(getDataByType.value, globalScreen.value)
    }
    if (type === 1 && requestResult.value && afterFetch) {
      return requestResult.value
    }
    return false
  })

  const getUrlData = () => {
    if (['image', 'background', 'border', 'clock'].includes(props.data.type)) {
      return // 不支持动态数据获取的return
    }
    const { optionsType, requestUrl, method = 'post' } = config.value
    const { beforeFetch, afterFetch } = props.data.events || {}
    if (optionsType === 1 && requestUrl) {
      requestResponse({
        requestUrl,
        params: {},
        beforeFetch,
        //afterFetch,这里不能传after事件，这个要特殊处理。回调的参数不一样
        options: { method: method }
        //route
      })
        .then((res: any) => {
          const resultData = res.data
          if (typeof afterFetch === 'function') {
            requestResult.value = afterFetch(
              resultData,
              getDataByType.value,
              globalScreen.value || {}
            )
          } else {
            requestResult.value = formatScreen(
              afterFetch,
              resultData,
              getDataByType.value,
              globalScreen.value || {}
            )
          }
        })
        .catch((res: any) => {
          console.log(res)
        })
    }
  }
  // 获取动态数据相关结束
  // 鼠标右键事件
  const contextmenu = (evt: MouseEvent) => {
    emits('contextmenu', { x: evt.pageX, y: evt.pageY, type: props.data.type })
    evt.preventDefault()
  }
  onBeforeRouteLeave(() => {
    unWatch()
  })
  onMounted(() => {
    getUrlData() // 从接口获取动态数据
  })
  onBeforeUnmount(() => {})
</script>
