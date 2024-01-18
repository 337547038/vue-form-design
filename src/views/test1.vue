<template>
  <div :style="screenStyle" class="design-canvas">
    <ak-screen
      v-for="(element, index) in screenData.list"
      :key="index"
      :data="element"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, provide } from 'vue'
  import akScreen from './design/screen/components/screen.vue'

  const loading = ref(true)
  const screenData = ref({
    list: [
      {
        type: 'line',
        position: { width: 400, height: 300, left: 232, top: 91 },
        option: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: { type: 'value' },
          grid: { left: 0, top: 0, right: 0, bottom: 30 },
          series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }]
        },
        config: { optionsType: 1, method: 'post', requestUrl: 'getdict' }
      }
    ],
    config: {
      width: '1920px',
      height: '1080px',
      background: '#000',
      style: '',
      primary: '#409eff'
    }
  })
  const screenStyle = computed(() => {
    const { width, height, background, primary } = screenData.value.config
    return {
      width: width,
      height: height,
      background: background,
      color: primary,
      position: 'relative'
    }
  })
</script>
