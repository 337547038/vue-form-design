<template>
  <el-icon
    v-if="isElIcon"
    :size="size"
    :color="color"
  >
    <component :is="name" />
  </el-icon>
  <i
    v-else
    v-show="name"
    :class="[name]"
    :style="{fontSize:size}"
  />
</template>
<script setup lang="ts">
  import {computed} from 'vue'

  const props = withDefaults(
    defineProps<{
      name: string | any
      size?: string
      color?: string
    }>(),
    {
      size: '',
      color: ''
    }
  )
  // 判断icon类型，以icon或fa开头认为不是elementUi的icon
  const isElIcon = computed(() => {
    if (!props.name) {
      return false
    }
    if (typeof props.name === 'string') {
      const trimmedStr = props.name
      return !(trimmedStr.startsWith('icon') || trimmedStr.startsWith('fa'))
    }
    return true
  })
</script>
<style scoped lang="scss"></style>
