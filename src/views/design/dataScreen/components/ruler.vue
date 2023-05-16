<!-- Created by 337547038 -->
<template>
  <div
    class="screen-ruler"
    :class="`ruler-${direction}`"
    :style="rulerStyle"
    v-show="showRuler"
  >
    <div
      class="ruler-box"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
      @mousedown="mousedown"
    >
      <span v-for="item in rulerLen" :key="item">{{ getScaleText(item) }}</span>
    </div>
  </div>
  <div v-show="showLine">
    <div
      class="ruler-line dotted"
      :style="lineStyle"
      :class="`line-${direction}`"
    >
      <span>{{ getScaleText(state.leftTop - 20) }}</span>
    </div>
    <div
      class="ruler-line"
      :class="`line-${direction}`"
      v-for="(item, index) in state.line"
      :key="item"
      :style="getStyle(item)"
      @mousedown="lineMousedown(index as number, item, $event)"
    >
      <span>{{ getScaleText(item - 20) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, reactive } from 'vue'

  const props = withDefaults(
    defineProps<{
      direction?: string
      scale: number
      offset: number[]
      showRuler: boolean
      showLine: boolean
      size: string
      scroll: number[]
    }>(),
    {
      direction: 'h'
    }
  )
  const state = reactive({
    leftTop: 0,
    moveFlag: false,
    moveLine: false,
    line: []
  })
  const rulerStyle = computed(() => {
    let left = {}
    if (props.direction === 'v' && props.scroll[0] > 0) {
      // 垂直方向
      left = { left: props.scroll[0] + 20 + 'px' }
    }
    return {
      width: props.size,
      ...left
    }
  })
  const lineStyle = computed(() => {
    let leftTop
    if (props.direction === 'h') {
      leftTop = { left: state.leftTop + 'px' }
    } else {
      leftTop = { top: state.leftTop + 'px' }
    }
    return {
      display: state.moveFlag ? 'block' : 'none',
      ...leftTop
    }
  })
  const rulerLen = computed(() => {
    const len = props.direction === 'h' ? 1920 : 1080
    const temp = []
    for (let i = 0; i < len; i = i + 100) {
      temp.push(i)
    }
    return temp
  })
  const getScaleText = (text: number) => {
    return parseInt(`${(text / props.scale) * 100}`)
  }
  const mouseenter = () => {
    state.moveFlag = true
    document.onmousemove = (evt: MouseEvent) => {
      if (!state.moveFlag) {
        return
      }
      const left = parseInt(`${evt.pageX - props.offset[0] + props.scroll[0]}`)
      const top = parseInt(`${evt.pageY - props.offset[1] + props.scroll[1]}`)
      state.leftTop = props.direction === 'h' ? left : top
    }
    document.onmouseup = function () {
      mouseleave()
    }
  }
  const mousedown = () => {
    if (!state.moveFlag) {
      return
    }
    if (!state.line.includes(state.leftTop)) {
      state.line.push(state.leftTop)
    }
  }
  const mouseleave = () => {
    state.moveFlag = false
    document.onmousemove = null
    document.onmouseup = null
  }
  const getStyle = (num: number) => {
    if (props.direction === 'h') {
      return { left: num + 'px' }
    } else {
      return { top: num + 'px' }
    }
  }
  // 移动线
  const lineMousedown = (index: number, offset: number, evt: MouseEvent) => {
    state.moveLine = true
    const x = evt.pageX - offset
    const y = evt.pageY - offset

    document.onmousemove = (evt2: MouseEvent) => {
      if (!state.moveLine) {
        return
      }
      const left = parseInt(`${evt2.pageX - x}`)
      const top = parseInt(`${evt2.pageY - y}`)
      const newVal = props.direction === 'h' ? left : top
      if (newVal < 30) {
        state.line.splice(index, 1)
        state.moveLine = false
      } else {
        state.line[index] = newVal
      }
    }
    document.onmouseup = function () {
      state.moveLine = false
      mouseleave()
    }
  }
</script>
<style lang="scss">
  .screen-ruler {
    overflow: hidden;
    cursor: col-resize;
    position: sticky;
    top: 0;
    height: 20px;
    background: rgb(48, 65, 86) url(../../../../assets/img/ruler.png) repeat-x
      left top;
    z-index: 11;
    .ruler-box {
      height: 20px;
      position: absolute;
      width: 2200px;
      display: flex;
      span {
        width: 100px;
        font-size: 12px;
        color: #999;
        transform-origin: left top;
        padding-left: 3px;
        user-select: none;
      }
    }
    &.ruler-v {
      position: absolute;
      cursor: row-resize;
      transform: rotate(90deg);
      transform-origin: left top;
      top: 20px;
    }
  }
  .ruler-line {
    position: absolute;
    z-index: 10;
    cursor: col-resize;
    height: 100%;
    width: 5px;
    top: 20px;
    &:after {
      content: '';
      width: 0;
      border-left: 1px solid #409eff;
      position: absolute;
      left: 2px;
      height: 1080px;
    }
    span {
      position: absolute;
      left: 10px;
      top: 0;
      color: #fff;
      background: #409eff;
      padding: 2px 3px;
      border-radius: 3px;
      font-size: 12px;
    }
    &.dotted {
      &:after {
        border-left: 1px dotted #409eff;
      }
    }
    &.line-v {
      width: 1920px;
      height: 5px;
      cursor: row-resize;
      &:after {
        width: 100%;
        height: 5px;
        left: auto;
        top: 2px;
        border-left: 0;
        border-top: 1px solid #409eff;
      }
      &.dotted {
        &:after {
          border-top: 1px dotted #409eff;
        }
      }
    }
  }
</style>
