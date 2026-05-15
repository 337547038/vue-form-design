<template>
  <echarts-init
    v-if="['line', 'bar', 'pie', 'echarts'].includes(data.type)"
    :option="getReplaceGlobal"
    :style="getConfigStyle"
  />
  <div
    v-if="['text', 'border'].includes(data.type)"
    :style="getConfigStyle"
    v-html="getReplaceGlobal"
  />
  <scroll-text
    :data="data"
    :style="getConfigStyle"
    v-if="['sText'].includes(data.type)">{{ getReplaceGlobal }}
  </scroll-text>
  <img
    v-if="data.type === 'image'"
    :src="data.src"
    :style="getConfigStyle"
    alt="请选择或输入图片url地址"
    class="default-img"
  >
  <div
    v-if="data.type === 'background'"
    :style="getConfigStyle"
    class="default-bg"
  >
<!--    <span v-if="!data.src">请选择或输入图片url地址</span>-->
  </div>
  <data-time
    :formatType="data.dateTime"
    :style="getConfigStyle"
    v-if="data.type==='clock'"/>
  <component
    v-bind="data.props"
    :is="data.component"
    v-if="['component'].includes(data.type)"
  />
  <table-com
    :height="data.height"
    :speed="data.speed"
    :carousel="data.carousel"
    :data="getReplaceGlobal"
    v-if="data.type==='table'"
    :style="getConfigStyle">
  </table-com>
</template>
<script setup lang="ts">
  import {computed, onMounted, onUnmounted, ref} from 'vue'
  import type {Component} from '@/types/screen'
  import EchartsInit from './widgets/echartsInt.vue'
  import ScrollText from './widgets/scrollText.vue'
  import DataTime from './widgets/datetime.vue'
  import TableCom from './widgets/table.vue'
  import {objToStringify, stringToObj} from "@/utils/design";
  import {useScreenStore} from "@/store/screen"
  import {getComponentData, getDataByType} from "@/components/screen/getData";

  const store = useScreenStore();

  const props = withDefaults(
    defineProps<{
      data: Component
    }>(),
    {}
  )

  const getConfigStyle = computed(() => {
    const {fontSize, color, style, border, background, src} = props.data;
    return {
      width: '100%',
      height: '100%',
      fontSize: fontSize,
      color: color,
      border: border,
      backgroundColor: background,
      backgroundImage: src ? `url(${src})` : '',
      ...style
    }
  })
  // 接口获取的组件数据，即经过after方法后替换了接口数据的option
  const componentData = ref({})
  // 接口数据
  const componentResult = ref({})

  const getReplaceGlobal = computed(() => {
    const data = {
      getScreenGlobal: store.getScreenGlobal, // 全局数据
      getScreenComp: componentResult.value　//　当前组件的动态接口数据
    }
    const newData = objToStringify(Object.keys(componentData.value).length ? componentData.value : getDataByType(props.data))
    /*const newStr = newData.replace(/{{([\w.]+)}}/g, (_: any, keyPath: string) => {
      return keyPath.split('.').reduce((target: any, key) => target?.[key], data)
    })*/
    // 处理 纯变量 场景："{{xxx}}" → 直接替换成真实类型（数组/数字/布尔）
    const newStr = newData.replace(/"{{([\w.]+)}}"/g, (_: any, key: string) => {
      const val = key.split('.').reduce((o: any, k: string) => o?.[k], data);
      return JSON.stringify(val);
    }).replace(/{{([\w.]+)}}/g, (_: any, key: string) => {
      //处理 混合文本 场景：xxx{{xxx}}xxx → 替换成文本
      const val = key.split('.').reduce((o: any, k: string) => o?.[k], data);
      return val ?? ''; // 纯文本拼接
    });
    return stringToObj(newStr)
  })
  // 获取组件的动态数据
  const getData = () => {
    getComponentData(props.data)
      .then((data: any) => {
        componentData.value = data.option || {}
        componentResult.value = data.res || {}
      })
  }
  onMounted(() => {
    getData()
  })
  onUnmounted(() => {
    componentData.value = {}
    componentResult.value = {}
  })
</script>