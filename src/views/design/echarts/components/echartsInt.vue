<template>
  <div
    class="echarts"
    :style="{ width: width + 'px', height: height + 'px' }"
    ref="echartsEl"
  ></div>
</template>

<script setup lang="ts">
  import { ref, onMounted, nextTick, watch } from 'vue'
  import { debounce } from '@/utils'
  const props = withDefaults(
    defineProps<{
      option: object
      width: number
      height: number
    }>(),
    {
      width: 600,
      height: 400
    }
  )
  const echartsEl = ref()
  const myChart = ref()
  const intEcharts = debounce(() => {
    // @ts-ignore
    myChart.value = echarts.init(echartsEl.value)
    myChart.value.setOption(props.option)
    window.onresize = myChart.value
  }, 100)
  watch(
    () => props,
    () => {
      if (myChart.value) {
        myChart.value.clear()
        myChart.value.dispose()
      }
      intEcharts()
    },
    {
      deep: true
    }
  )
  onMounted(() => {
    nextTick(() => {
      intEcharts()
    })
  })
</script>
