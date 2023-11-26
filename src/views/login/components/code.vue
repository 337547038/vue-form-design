<!-- Created by weiXin:337547038 -->
<template>
  <div>
    <el-input :placeholder="placeholder" v-model="value" @focus="focusInput" />
    <img :src="src" class="img" alt="" @click="getCaptcha" />
  </div>
</template>

<script setup lang="ts">
  import { ref, watch, onMounted } from 'vue'
  import { getRequest } from '@/api'

  withDefaults(
    defineProps<{
      placeholder?: string
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', obj: any): void
    (e: 'focus', obj: string): void
  }>()
  const value = ref('')
  const src = ref()
  const codeId = ref('')
  watch(
    () => value.value,
    () => {
      emits('update:modelValue', value.value)
    }
  )
  const focusInput = () => {
    emits('focus', codeId.value)
  }
  const getCaptcha = () => {
    getRequest('getCaptcha', {})
      .then(res => {
        const { base64, codeId: a } = res.data
        src.value = 'data:image/png;base64,' + base64
        codeId.value = a
      })
      .catch(() => {})
  }
  onMounted(() => {
    getCaptcha()
  })
</script>
<style scoped lang="scss">
  div {
    display: flex;
  }

  img {
    height: 30px;
    margin-left: 10px;
    cursor: pointer;
  }
</style>
