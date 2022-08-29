<template>
  <el-row style="flex-wrap: nowrap">
    <el-input v-model="value" />
    <el-button @click="state.visible = true">选择</el-button>
  </el-row>
  <el-dialog v-model="state.visible" title="弹窗示例">
    <template #footer>
      <el-button @click="selectClick" type="primary">确定</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import { reactive, toRef } from 'vue'
  const props = withDefaults(
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
  const value = toRef(props, 'modelValue')
  const state = reactive({
    visible: false
  })
  const selectClick = () => {
    state.visible = false
    value.value = '测试回填值'
    emits('update:modelValue', value.value)
  }
</script>
