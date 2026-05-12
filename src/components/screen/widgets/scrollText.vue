<!-- Created by 337547038 -->
<template>
  <div
    ref="containerRef"
    class="scroll-container"
  >
    <div class="scroll-inner" :style="innerStyle">
      <div class="scroll-content" ref="contentRef">
        <slot/>
      </div>
      <div class="scroll-content">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {ref, onMounted, onUnmounted, computed} from 'vue'
  import type {ScreenData} from "@/types/screen";

  // 定义 props 与默认值
  const props = withDefaults(defineProps<{
    data: ScreenData
  }>(), {})

  // DOM 引用
  const containerRef = ref(null)
  const contentRef = ref(null)

  // 滚动状态
  const scrollPos = ref(0)
  let timer: number | null = null
  const defaultDirection = computed(() => {
    return props.data.direction || 'left'
  })

  // 计算属性
  const isHorizontal = computed(() => ['left', 'right'].includes(defaultDirection.value))

  // 内层滚动样式
  const innerStyle = computed(() => {
    const transform = isHorizontal.value
      ? `translateX(${scrollPos.value}px)`
      : `translateY(${scrollPos.value}px)`

    return {
      display: 'flex',
      flexDirection: isHorizontal.value ? 'row' : 'column',
      transform,
      willChange: 'transform'
    }
  })

  // 核心滚动逻辑
  function startScroll() {
    if (!containerRef.value || !contentRef.value) return

    // 清除旧定时器
    if (timer) clearInterval(timer)
    //每speed毫秒滚动step px，数字越大速度越慢
    const {step = 1, speed = 30} = props.data
    const size = isHorizontal.value
      ? contentRef.value!.offsetWidth
      : contentRef.value!.offsetHeight
    timer = window.setInterval(() => {
      switch (defaultDirection.value) {
        case 'right':
          scrollPos.value += step
          if (scrollPos.value >= 0) scrollPos.value = -size
          break
        case 'bottom':
          scrollPos.value += step
          if (scrollPos.value >= 0) scrollPos.value = -size
          break
        case 'top':
          scrollPos.value -= step
          if (scrollPos.value <= -size) scrollPos.value = 0
          break
        default: // left
          scrollPos.value -= step
          if (scrollPos.value <= -size) scrollPos.value = 0
      }
    }, speed)
  }

  // 停止滚动
  function stopScroll() {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }


  // 生命周期
  onMounted(() => {
    startScroll()
    if (!containerRef.value) return
    containerRef.value.addEventListener('mouseenter', stopScroll)
    containerRef.value.addEventListener('mouseleave', startScroll)
  })

  onUnmounted(() => {
    stopScroll() // 组件销毁清除定时器，防止内存泄漏
  })
</script>

<style scoped>
  .scroll-container {
    width: 100%;
    height: 100%;
    position: relative;
    user-select: none;
    overflow: hidden;
  }

  .scroll-inner {
    width: fit-content;
    height: fit-content;
  }

  .scroll-content {
    flex-shrink: 0;
  }
</style>