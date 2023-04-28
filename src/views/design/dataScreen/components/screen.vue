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
      @mousedown="resizeMousedown"
      v-if="type === 0 && !data.config?.lock"
      v-show="current"
    >
      <span
        v-for="item in 8"
        :key="item"
        :class="`rs${item}`"
        @mousedown.stop="resizeDotMouseDown($event, item)"
      ></span>
      <i class="icon-del del" @click.stop="delClick"></i>
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
      :width="data.position.width"
      v-if="['line', 'bar', 'pie', 'echarts'].includes(data.type)"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, nextTick, watch } from 'vue'
  import NowTime from './nowTime.vue'
  import MyMarquee from './marquee.vue'
  import EchartsInit from '../../components/echartsInt.vue'
  import type { ScreenData } from '../types'
  import { getRequest } from '@/api'
  import formatScreen from '@/utils/formatScreen'
  const props = withDefaults(
    defineProps<{
      data: ScreenData
      type?: number
      current?: boolean // 当前激活的项index
    }>(),
    {
      type: 1
      // data: () => {
      //   return {
      //     type: '',
      //     position: {},
      //     config: {}
      //   }
      // }
    }
  )
  const emits = defineEmits<{
    (e: 'delClick'): void
  }>()
  const newValue = ref()
  const config = computed(() => {
    return props.data.config || {}
  })
  const transformUnit = (val: any) => {
    /*try {
      const isNumber = /^\d+(\.\d+)?$/.test(val.toString())
      if (isNumber) {
        return val + 'px'
      }
      return val
    } catch (e) {
      return val
    }*/
    return val + 'px'
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
    return {
      left: transformUnit(left),
      right: transformUnit(right),
      bottom: transformUnit(bottom),
      top: transformUnit(top),
      width: transformUnit(width),
      height: transformUnit(height),
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
  // 缩放
  // const isNumberOrPx = (val: any) => {
  //   if (!val) {
  //     return false
  //   }
  //   try {
  //     const isNumber = /^\d+(\.\d+)?$/.test(val.toString().replace('px', ''))
  //     console.log(isNumber)
  //     return isNumber
  //   } catch (e) {
  //     console.log('eeee', e)
  //     return false
  //   }
  // }
  const resizeDotMouseDown = (evt: MouseEvent, index: number) => {
    let flag = true
    if (flag) {
      const x = evt.pageX
      const y = evt.pageY
      let { width, height, left, top } = props.data.position
      // if (!isNumberOrPx(width) || !isNumberOrPx(height)) {
      //   console.error('暂仅单位为px时才允许拖动缩放')
      //   return false
      // }
      // const width2 = parseInt(`${width}`)
      // const height2 = parseInt(`${height}`)
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
            mWidth = width - mx
            mHeight = height - my
            mTop = top + my
            mLeft = left + mx
            break
          case 4:
            // 向左
            mWidth = width - mx
            mLeft = left + mx
            break
          case 6:
            // 左下
            mWidth = width - mx
            mLeft = left + mx
            mHeight = height + my
            break
          case 2: // 上中
            mHeight = height - my
            mTop = top + my
            break
          case 7: //　下中
            mHeight = height + my
            break
          case 3: //　右上
            mWidth = width + mx
            mHeight = height - my
            mTop = top + my
            break
          case 5: //　右中
            mWidth = width + mx
            break
          case 8: //　右下
            mWidth = width + mx
            mHeight = height + my
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
  //　移动
  const resizeMousedown = (evt: MouseEvent) => {
    let moveFlag = true
    const x = evt.pageX - parseInt(`${props.data.position.left}`) || 0
    const y = evt.pageY - parseInt(`${props.data.position.top}`) || 0
    document.onmousemove = (evt: MouseEvent) => {
      if (!moveFlag) {
        return
      }
      Object.assign(props.data.position, {
        left: parseInt(`${evt.pageX - x}`),
        top: parseInt(`${evt.pageY - y}`)
      })
    }
    document.onmouseup = function () {
      moveFlag = false
      document.onmousemove = null
    }
  }
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
  const getUrlData = () => {
    if (
      !['line', 'bar', 'pie', 'echarts', 'text', 'sText', 'table'].includes(
        props.data.type
      )
    ) {
      return // 不支持动态数据获取的return
    }
    const { optionsType, requestUrl, method = 'post' } = config.value
    const { beforeRequest = '', afterResponse = '' } = props.data.events || {}
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
            newValue.value = afterResponse(result, getDataByType.value)
          } else {
            newValue.value = formatScreen(
              afterResponse,
              result,
              getDataByType.value
            )
          }
        }
      })
      .catch((res: any) => {
        console.log(res)
      })
  }
  // 获取动态数据相关结束
  const delClick = () => {
    emits('delClick')
  }
  onMounted(() => {
    getUrlData() // 从接口获取动态数据
  })
</script>
