<!-- Created by weiXin:337547038 -->
<template>
  <div
    v-show="showRuler"
    class="screen-ruler"
    :class="`ruler-${direction}`"
    :style="rulerStyle"
  >
    <div class="ruler-box">
      <span
        v-for="item in rulerLen"
        :key="item"
        :style="{ width: `${scale}px` }"
      >{{ item }}</span>
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
    }>(),
    {
      direction: 'h'
    }
  )
  const rulerStyle = computed(() => {
    return {
      width: (parseInt(props.size) * props.scale) / 100 + 'px'
    }
  })
  const rulerLen = computed(() => {
    // const len = props.direction === 'h' ? 1920 : 1080
    const len = parseInt(props.size) + 100
    const temp = []
    for (let i = 0; i < len; i = i + 100) {
      temp.push(i)
    }
    return temp
  })
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
        flex-shrink: 0;
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
