<!-- Created by 337547038 -->
<template>
  <div>
    <div
      v-show="showRuler"
      class="screen-ruler"
      :class="`ruler-${direction}`"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
      @mousedown="mousedown"
    >
      <span v-for="item in rulerLen" :key="item">{{ getScaleText(item) }}</span>
    </div>
    <template v-if="showLine">
      <div class="ruler-line" :class="direction" :style="lineStyle">
        <span>{{ getScaleText(state.leftTop - 20) }}</span></div
      >
      <div
        class="ruler-line"
        :class="direction"
        v-for="(item, index) in state.line"
        :key="item"
        :style="getStyle(item)"
        @mousedown="lineMousedown(index, item, $event)"
        ><span>{{ getScaleText(item - 20) }}</span></div
      >
    </template>
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
  const lineStyle = computed(() => {
    if (props.direction === 'h') {
      return {
        borderLeft: '1px dotted #409eff',
        display: state.moveFlag ? 'block' : 'none',
        left: state.leftTop + 'px'
      }
    } else {
      return {
        borderTop: '1px dotted #409eff',
        display: state.moveFlag ? 'block' : 'none',
        top: state.leftTop + 'px'
      }
    }
  })
  const rulerLen = computed(() => {
    const len = props.direction === 'h' ? 1920 : 1080
    let temp = []
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
      const left = parseInt(`${evt.pageX - props.offset[0]}`)
      const top = parseInt(`${evt.pageY - props.offset[1]}`)
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
      if (newVal < 0) {
        state.line.splice(index, 1)
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
  .ruler-line {
    position: absolute;
    z-index: 10;
    span {
      position: absolute;
      left: 10px;
      top: -15px;
      z-index: 12;
      color: #fff;
      background: #409eff;
      padding: 2px 3px;
      border-radius: 3px;
      font-size: 12px;
    }
    &.h {
      cursor: col-resize;
      height: 100%;
      width: 3px;
      top: 20px;
      border-left: 1px solid #409eff;
    }
    &.v {
      cursor: row-resize;
      border-top: 1px solid #409eff;
      height: 3px;
      left: 20px;
      width: 100%;
      span {
        left: 0;
        top: 0;
      }
    }
  }
  .screen-ruler {
    cursor: col-resize;
    position: absolute;
    left: 20px;
    top: 0;
    width: 2200px;
    height: 20px;
    background: url(../../../../assets/img/ruler.png) repeat-x left top;
    display: flex;
    transform-origin: left top;
    overflow: hidden;
    z-index: 1;
    span {
      width: 100px;
      font-size: 12px;
      color: #999;
      transform-origin: left top;
      padding-left: 3px;
      user-select: none;
    }
    &.ruler-v {
      cursor: row-resize;
      transform: rotate(90deg);
      top: 20px;
    }
  }
</style>
