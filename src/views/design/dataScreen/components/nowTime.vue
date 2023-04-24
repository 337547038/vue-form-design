<!-- Created by 337547038 -->
<template>
  <div>{{ nowTime }}</div>
</template>

<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue'
  import { dateFormatting } from '@/utils'

  const props = withDefaults(
    defineProps<{
      config: any
    }>(),
    {}
  )
  const clear = ref()
  const nowTime = ref()
  const getNowTime = () => {
    const formatType = props.config.dateTime
    if (!formatType || (formatType && formatType.indexOf('{i}') !== -1)) {
      // 包括了分钟时格式时才需要定时刷新
      clear.value = setInterval(() => {
        nowTime.value = dateFormatting(new Date(), formatType)
      }, 1000)
    } else {
      nowTime.value = dateFormatting(new Date(), formatType)
    }
  }
  watch(
    () => props.config.dateTime,
    () => {
      clearInterval(clear.value)
      getNowTime()
    },
    { immediate: true }
  )
  onMounted(() => {
    //getNowTime()
  })
</script>
