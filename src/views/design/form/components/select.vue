<template>
  <el-select
    v-bind="data.control"
    :disabled="disabled"
    v-model="value"
    :loading="state.loading"
    :remoteMethod="remoteMethod"
  >
    <el-option v-if="data.config?.addAll" value="" label="全部" />
    <el-option
      v-for="item in optionsList"
      :key="item.value"
      :label="item.label"
      :value="transformOption(item.value, data.config?.transformData)"
    />
  </el-select>
</template>

<script setup lang="ts">
  import { reactive, computed, watch, inject, ref } from 'vue'
  import {
    constFormProps,
    constSetFormOptions,
    objectToArray
  } from '../../utils'
  import { FormList } from '../../types'
  const props = withDefaults(
    defineProps<{
      data: FormList
      modelValue?: null
      disabled?: boolean
      transformOption: Function
      options?: any
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
    (e: 'change', val: string | number, name: string): void
    (e: 'update:modelValue', val: any): void
  }>()
  const setOptionsList = ref()
  const formProps = inject(constFormProps, {}) as any
  const optionsList = computed(() => {
    // 如果有使用了setOptions设置时使用setOption的
    if (setOptionsList.value) {
      return setOptionsList.value
    }
    if (props.type === 'slot') {
      // 作为input前后缀使用时，支持固定和字典取值、暂不支持数据源
      // 因formItem层获取不到slot层的相关参数，如需实际可自引入formItem里的getAxiosOptions
      const dictVal = formProps.value.dict
      if (dictVal && props.data.config?.optionsType === 2) {
        const opt = dictVal[props.data.config?.optionsFun]
        if (opt !== undefined) {
          return objectToArray(opt)
        }
      }
      return props.data.options
    } else {
      return props.options
    }
  })
  const formOptions = inject(constSetFormOptions, {}) as any
  watch(
    () => formOptions.value,
    (val: any) => {
      const opt = val[props.data.name]
      if (val && opt !== undefined) {
        setOptionsList.value = objectToArray(opt)
      }
    }
  )
  const value = computed({
    get() {
      if (props.type === 'slot') {
        return formProps.value.model[props.data.name]
      } else {
        return props.modelValue
      }
    },
    set(newVal: any) {
      if (props.type === 'slot') {
        emits('change', newVal, props.data.name)
      } else {
        emits('update:modelValue', newVal)
      }
    }
  })
  const state = reactive({
    loading: false // 远程搜索加载状态
  })
  watch(
    () => props.data.options,
    () => {
      state.loading = false
    }
  )
  // 符合远程搜索
  const isRemote = computed(() => {
    return !!(
      props.data.control?.remote &&
      props.data.control?.filterable &&
      props.data.config?.optionsType === 1 &&
      props.data.config?.optionsFun
    )
  })
  // 远程搜索
  const remoteMethod = (name: string) => {
    if (isRemote.value) {
      state.loading = true
      // 请求参数名，可使用config.queryName传进来
      const queryName = props.data.config?.queryName || 'name'
      props.remoteMethod && props.remoteMethod({ [queryName]: name })
      if (props.data.control.remoteMethod) {
        props.data.control.remoteMethod(name)
      }
    }
  }
</script>
