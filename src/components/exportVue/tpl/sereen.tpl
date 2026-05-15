<template>
  <div :style="screenStyle" class="design-canvas">
    <AKScreen
      v-for="(element, index) in screenData.list"
      :key="index"
      :data="element"
    ></AKScreen>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, provide } from 'vue'

  import AKScreen from '@/views/design/screen/components/screen.vue' //可根据需求是否全局注册

  const designData = {{designData}}
  const screenStyle = computed(() => {
    const { width, height, background, primary } = designData.value.config
    return {
      width: width,
      height: height,
      background: background,
      color: primary,
      position: 'relative'
    }
  })
</script>
{{style}}
