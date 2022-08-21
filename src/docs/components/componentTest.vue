<template>
  <el-row style="flex-wrap: nowrap">
    <el-input v-model="state.value" />
    <el-button @click="state.visible = true">选择</el-button>
  </el-row>
  <el-dialog v-model="state.visible" title="弹窗示例">
    <template #footer>
      <el-button @click="selectClick" type="primary">确定</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  withDefaults(
    defineProps<{
      modelValue: string
      disabled?: boolean
      options?: any
    }>(),
    {}
  )

  const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()

  const state = reactive({
    value: '',
    visible: false
  })
  const selectClick = () => {
    state.visible = false
    state.value = '测试回填值'
    emits('update:modelValue', state.value)
  }
</script>
