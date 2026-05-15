<template>
  <div class="container" :style="style" v-loading="loading">
    <screen-show :data="designData.list"></screen-show>
  </div>
</template>
<script setup lang="ts">
  import {computed, onMounted, ref} from 'vue'
  import ScreenShow from '@/components/screen/show.vue'
  import {loadConfigResource} from "@/components/screen/getData";

  definePage({meta: {layout: 'hidden'}})
  const loading = ref(false)
  const designData = ref({
    list: [
      {
        type: "bar",
        id: "bar1",
        width: 400,
        height: 300,
        x: 86,
        y: 104,
        option:
          {
            xAxis:
              {
                type: "category",
                data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
              },
            yAxis:
              {
                type: "value"
              },
            grid:
              {
                left: 0,
                bottom: 30
              },
            series: [
              {
                data: [148, 57, 497, 478, 143, 292, 245, 317, 460, 49, 118, 281],
                type: "bar"
              }]
          },
        config:
          {
            optionsType: 1,
            method: "post",
            requestUrl: "demo/echarts",
            before: (data) => {
              // data请求参数，route当前路由信息
              console.log('beforeFetch', data)
              return data
            },
            after: (res, data) => {
              // res响应数据, 当前组件数据data
              console.log('当前组件数据', data)
              console.log('接口响应数据', res)
              //下面两行是重点，将接口返回的数据赋值级当前组件
              data.xAxis.data = res.bar.xAxis
              data.series[0].data = res.bar.data1
              return data //返回新的图表数据
            }
          }
      },
      {
        type: "bar",
        width: "403.77px",
        height: 300,
        x: 849,
        y: 74,
        option:
          {
            xAxis:
              {
                type: "category",
                data: "{{getScreenGlobal.bar.xAxis}}"
              },
            yAxis:
              {
                type: "value"
              },
            grid:
              {
                left: 0,
                bottom: 30
              },
            series: [
              {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: "bar"
              }]
          },
        config:
          {
            lock: false,
            optionsType: 0
          },
        id: "bar1720868137715"
      }],
    config:
      {
        width: "1920px",
        height: "1080px",
        background: "#000",
        style: "",
        primary: "#409eff",
        method: "post",
        requestUrl: "demo/echarts"
      }
  })
  const style = computed(() => {
    const {width, height, background, primary} = designData.value.config || {}
    return {
      width: width,
      height: height,
      background: background,
      color: primary,
      position: 'relative'
    }
  })
  const initConfig = () => {
    loadConfigResource(designData.value.config)
  }
  onMounted(() => {
    initConfig()
  })
</script>