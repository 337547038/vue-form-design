<!-- Created by weiXin:337547038 -->
<template>
  <div>
    <el-input :placeholder="placeholder" v-model="value" />
    <img src="../../../assets/img/createCode.gif" class="img" alt="" />
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  withDefaults(
    defineProps<{
      placeholder?: string
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', obj: any): void
  }>()
  const value = ref('')
  watch(
    () => value.value,
    () => {
      emits('update:modelValue', value.value)
    }
  )
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
