<template>
  <div class="echarts" :style="style" ref="echartsEl"></div>
</template>

<script setup lang="ts">
  import { ref, onMounted, nextTick, watch, computed } from 'vue'
  import { debounce } from '@/utils'
  const props = withDefaults(
    defineProps<{
      option: object
      width: string | number
      height: string | number
    }>(),
    {
      width: '600px',
      height: '400px'
    }
  )
  const echartsEl = ref()
  const myChart = ref()
  const isNumber = (val: any): boolean => {
    try {
      return /^\d+(\.\d+)?$/.test(val.toString())
    } catch (e) {
      return false
    }
  }
  const style = computed(() => {
    const numberWidth = isNumber(props.width)
    const numberHeight = isNumber(props.height)
    return {
      width: numberWidth ? props.width + 'px' : props.width,
      height: numberHeight ? props.height + 'px' : props.height
    }
  })
  const intEcharts = debounce(() => {
    if (!echartsEl.value) {
      return
    }
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
