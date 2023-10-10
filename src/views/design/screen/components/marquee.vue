<!-- Created by 337547038  -->
<template>
  <div
    ref="container"
    :class="`marquess-${direction}`"
    :style="style"
    class="marquee-container"
  >
    <div :style="innerStyle" class="inner-container">
      <div ref="container1" :style="{ display: isLeftOrRight ? 'flex' : '' }">
        <slot></slot>
      </div>
      <div :style="{ display: isLeftOrRight ? 'flex' : '' }">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted, computed, reactive } from 'vue'

  const props = withDefaults(
    defineProps<{
      width: string
      height: string
      speed?: number //每speed毫秒滚动step px，数字越大速度越慢
      direction?: 'left' | 'right' | 'top' | 'bottom'
      step?: number // 每个单位时间滚动的距离
    }>(),
    {
      speed: 30, //每speed毫秒滚动1px，数字越大速度越慢
      direction: 'top',
      step: 1
    }
  )
  const style = computed(() => {
    return {
      width: props.width,
      height: props.height,
      overflow: 'hidden'
    }
  })
  const state = reactive({
    left: 0,
    top: 0,
    duration: 0
  })
  const isLeftOrRight = computed(() => {
    return ['left', 'right'].includes(props.direction)
  })
  const innerStyle = computed(() => {
    const transition = props.step > 1 ? `transform ${state.duration}s` : ''
    if (isLeftOrRight.value) {
      // 左右时保证在同一行
      return {
        display: 'flex',
        width: parseInt(props.width) * 2 + 'px',
        transform: `translateX(${state.left}px)`,
        transition
        //transition: `transform ${state.transition}s`
      }
    }
    return {
      transform: `translateY(${state.top}px)`,
      transition
      //transition: `transform ${state.transition}s`
    }
  })
  const container = ref()
  const container1 = ref()
  const scroll = () => {
    const tab = container.value
    const tab1 = container1.value
    const marquee = () => {
      const width = tab1.offsetWidth
      const height = tab1.offsetHeight
      switch (props.direction) {
        case 'left':
          if (state.left + width <= 0) {
            state.left = 0
            state.duration = 0
          } else {
            state.left = state.left - props.step
            state.duration = 0.3
          }
          break
        case 'right':
          if (state.left >= 0) {
            state.left = -width
            state.duration = 0
          } else {
            state.left = state.left + props.step
            state.duration = 0.3
          }
          break
        case 'bottom':
          if (state.top >= 0) {
            state.top = -height
            state.duration = 0
          } else {
            state.top = state.top + props.step
            state.duration = 0.3
          }
          break
        default:
          if (state.top + height <= 0) {
            state.top = 0
            state.duration = 0
          } else {
            state.top = state.top - props.step
            state.duration = 0.3
          }
      }
    }
    let myMar = setInterval(marquee, props.speed)
    tab.onmouseenter = function () {
      clearInterval(myMar)
    } //鼠标移上时清除定时器达到滚动停止的目的
    tab.onmouseleave = function () {
      myMar = setInterval(marquee, props.speed)
    } //鼠标移开时重设定时器
  }
  onMounted(() => {
    scroll()
  })
</script>
