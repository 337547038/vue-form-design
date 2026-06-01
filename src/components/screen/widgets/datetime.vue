<!-- Created by weiXin:337547038 -->
<template>
  <div>{{ nowTime }}</div>
</template>

<script setup lang="ts">
  import {ref, onMounted, watch} from 'vue'
  import {dateFormatting} from '@/utils'
  import {onBeforeRouteLeave} from "vue-router";

  const props = withDefaults(
    defineProps<{
      formatType: string
    }>(),
    {}
  )
  const clear = ref()
  const nowTime = ref()
  const getNowTime = () => {
    if (!props.formatType || (props.formatType && props.formatType.indexOf('{i}') !== -1)) {
      // 包括了分钟时格式时才需要定时刷新
      clear.value = setInterval(() => {
        nowTime.value = dateFormatting(new Date(), props.formatType)
      }, 1000)
    } else {
      nowTime.value = dateFormatting(new Date(), props.formatType)
    }
  }
  const unwatch = watch(
    () => props.formatType,
    () => {
      clearInterval(clear.value)
      getNowTime()
    },
    {immediate: true}
  )
  onMounted(() => {
    // getNowTime()
  })
  onBeforeRouteLeave(() => {
    unwatch()
  })
</script>
