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
  const designData = ref({{designData}})
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