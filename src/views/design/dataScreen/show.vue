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
  import { ref, onMounted, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { getRequest } from '@/api'
  const route = useRoute()
  import AScreen from './components/screen.vue'
  import { stringToObj } from '@/utils/form'
  import { ElMessage } from 'element-plus'
  import { appendOrRemoveStyle } from '../utils'

  const loading = ref(true)
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
  const getInitData = () => {
    const params = {
      id: route.params.id
    }
    getRequest('designById', params)
      .then((res: any) => {
        const result = res.data
        screenData.value = stringToObj(result.data)
        loading.value = false
        if (screenData.value.config.style) {
          appendOrRemoveStyle(
            'screenStyle',
            screenData.value.config.style,
            true
          )
        }
      })
      .catch((res: any) => {
        // console.log(res)
        ElMessage.error(res.message || '加载异常')
        loading.value = false
      })
  }
  onMounted(() => {
    getInitData()
  })
</script>
