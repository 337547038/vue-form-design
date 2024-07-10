<!-- Created by weiXin:337547038 -->
<template>
  <div
    class="screen-ruler"
    :class="`ruler-${direction}`"
    :style="rulerStyle"
    v-show="showRuler"
  >
    <div class="ruler-box">
      <span v-for="item in rulerLen" :key="item">{{ getScaleText(item) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  const props = withDefaults(
    defineProps<{
      direction?: string
      scale: number
      showRuler: boolean
      size: string
      scroll: number[]
    }>(),
    {
      direction: 'h'
    }
  )
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
</script>
<style lang="scss">
  .screen-ruler {
    overflow: hidden;
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
</style>
