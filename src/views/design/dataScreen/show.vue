<!-- Created by 337547038 -->
<template>
  <div :style="screenStyle" class="design-canvas">
    <a-screen
      v-for="(element, index) in screenData.list"
      :key="index"
      :data="element"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, computed, provide } from 'vue'
  import { useRoute } from 'vue-router'
  import AScreen from './components/screen.vue'
  import { getInitData, getGlobalData } from './getData'

  const route = useRoute()
  const loading = ref(true)
  const globalScreen = ref({})
  provide('globalScreen', globalScreen)
  const screenData = ref({ list: [], config: {} })
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
  const getData = () => {
    getInitData(route.params.id)
      .then((res: any) => {
        loading.value = false
        screenData.value = res
        const { requestUrl, afterResponse, beforeRequest, method } =
          screenData.value.config
        if (requestUrl) {
          // 加载处理全局数据
          getGlobalData(requestUrl, afterResponse, beforeRequest, method).then(
            (res: any) => {
              globalScreen.value = res
            }
          )
        }
      })
      .catch(() => {
        loading.value = false
      })
  }
  onMounted(() => {
    getData()
  })
</script>
