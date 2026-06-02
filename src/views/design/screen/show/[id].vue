<template>
  <div
    v-loading="loading"
    class="container"
    :style="style"
  >
    <screen-show :data="designData.list" />
  </div>
</template>
<route>
{meta:{layout:'hidden',permissions:false}}
</route>
<script setup lang="ts">
  import {computed, onMounted, ref} from 'vue'
  //import ScreenShow from '@/components/screen/show.vue'
  import ScreenShow from '@/components/libs/show.es'
  import {useRoute} from "vue-router";
  import {getInitData, loadConfigResource} from "@/components/screen/getData";
  import {getStorage} from "@/utils";

  const route = useRoute();

  const loading = ref(false)
  const designData = ref({list: [], config: {}})
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
  const getData = () => {
    const id = route.params.id
    if (id === 'preview') {
      designData.value = getStorage('screenPreviewData')
      // 加载全局接口配置数据
      loadConfigResource(designData.value.config)
      return
    }
    getInitData(id)
      .then((res: any) => {
        loading.value = false
        designData.value = res
      })
      .catch(() => {
        loading.value = false
      })
  }
  onMounted(() => {
    getData()
  })
</script>