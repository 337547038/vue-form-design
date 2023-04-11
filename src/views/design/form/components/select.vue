<template>
  <el-select
    v-bind="control"
    :disabled="disabled"
    v-model="value"
    :loading="state.loading"
    :remoteMethod="remoteMethod"
  >
    <el-option v-if="config.addAll" value="" label="全部" />
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script setup lang="ts">
  import { reactive, computed, watch } from 'vue'
  const props = withDefaults(
    defineProps<{
      control: any
      modelValue?: null
      disabled?: boolean
      formatNumber: Function
      options: any
      config?: any
      type?: string
      remoteMethod?: Function
    }>(),
    {
      options: () => {
        return []
      }
    }
  )
  const emits = defineEmits<{
    (e: 'change', val: string | number): void
    (e: 'update:modelValue', val: any): void
  }>()
  const value = computed({
    get() {
      return props.modelValue
    },
    set(newVal: any) {
      if (props.type === 'slot') {
        emits('change', newVal)
      } else {
        emits('update:modelValue', newVal)
      }
    }
  })
  // const options1 = [{ label: '11', value: 1 }]
  const state = reactive({
    loading: false // 远程搜索加载状态
  })
  watch(
    () => props.options,
    () => {
      state.loading = false
    }
  )
  // 符合远程搜索
  const isRemote = computed(() => {
    return !!(
      props.control.remote &&
      props.control.filterable &&
      props.config.optionsType === 1 &&
      props.config.optionsFun
    )
  })
  // const change = (val: string | number) => {
  //   if (props.type === 'slot') {
  //     emits('change', val)
  //   } else {
  //     emits('update:modelValue', val)
  //   }
  // }
  // 远程搜索
  const remoteMethod = (name: string) => {
    if (isRemote.value) {
      state.loading = true
      // 请求参数名，可使用config.queryName传进来
      const queryName = props.config.queryName || 'name'
      props.remoteMethod && props.remoteMethod({ [queryName]: name })
      if (props.control.remoteMethod) {
        props.control.remoteMethod(name)
      }
    }
  }
</script>
