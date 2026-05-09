<template>
  <div>787979</div>
</template>
<script setup lang="ts">
  import {computed,ref} from 'vue'
  import type {ScreenData} from '@/types/screen'
  const props = withDefaults(
    defineProps<{
      data: ScreenData
    }>(),
    {
    }
  )
  /*const positionStyle = computed(() => {
    if (!props.data.position) {
      return {}
    }
    const { left, top, height, width, zIndex, display, right, bottom }
      = props.data.position
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
  })*/
</script>