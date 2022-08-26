<template>
  <el-select
    v-bind="control"
    :disabled="disabled"
    :modelValue="modelValue"
    @change="change"
  >
    <el-option v-if="config.addAll" value="" label="全部" />
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="formatNumber(item.value)"
    />
  </el-select>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      control: any
      modelValue?: null
      disabled?: boolean
      formatNumber: Function
      options: any
      config?: any
      type?: string
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'change', val: string | number): void
    (e: 'update:modelValue', val: string | number): void
  }>()
  const change = (val: string | number) => {
    if (props.type === 'slot') {
      emits('change', val)
    } else {
      emits('update:modelValue', val)
    }
  }
</script>
