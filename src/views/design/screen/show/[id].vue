<template>
  <div class="container" :style="style" v-loading="loading">
    <screen-show :data="designData.list"/>
  </div>
</template>
<route>
{meta:{layout:'hidden',permissions:false}}
</route>
<script setup lang="ts">
  import {computed, onMounted, ref} from 'vue'
  import ScreenShow from '@/components/screen/show.vue'
  import {useScreenStore} from "@/store/screen"
  import {useRoute} from "vue-router";
  import {getInitData} from "@/components/screen/getData";

  const route = useRoute();
  const store = useScreenStore()

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
      designData.value = {
        list: store.designFilterData,
        config: store.designConfig
      }
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