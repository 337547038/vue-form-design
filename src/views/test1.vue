<template>
  <div :style="screenStyle" class="design-canvas">
    <ak-screen
      v-for="(element, index) in screenData.list"
      :key="index"
      :data="element"
    />
  </div>
</template>
<route>
{meta:{
permissions:false,
layout:'hidden'}}
</route>
<script setup lang="ts">
  import { ref, computed, provide } from 'vue'
  import akScreen from './design/screen/components/screen.vue'

  const loading = ref(true)
  const screenData = ref({
    list: [
      {
        type: 'bar',
        position: { width: 400, height: 300, left: '86px', top: '104px' },
        option: {
          xAxis: {
            type: 'category',
            data: []
          },
          yAxis: { type: 'value' },
          grid: { left: 0, top: 0, right: 0, bottom: 30 },
          series: [{ data: [], type: 'bar' }]
        },
        config: {
          optionsType: 1,
          method: 'get',
          requestUrl: 'test.json'
        },
        events: {
          beforeFetch: (data, route) => {
            // data请求参数，route当前路由信息
            console.log('beforeFetch', data)
            return data
          },
          afterFetch: (res, data) => {
            // res响应数据, 当前组件数据data
            console.log('当前组件数据', data)
            console.log('接口响应数据', res)
            //下面两行是重点，将接口返回的数据赋值级当前组件
            data.xAxis.data = res.xAxis
            data.series[0].data = res.series
            return data //返回新的图表数据
          }
        }
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
