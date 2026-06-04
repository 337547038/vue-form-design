<template>
  <el-select
    v-bind="data.control"
    v-model="modelValue"
    :disabled="disabled"
    :loading="loading"
    :remote-method="getRemoteM"
    @change="selectChange"
    @focus="selectFocus"
    @blur="selectBlur"
  >
    <el-option
      v-if="data?.addAll"
      value="all"
      label="全部"
    />
    <el-option
      v-for="item in newOptions"
      :key="getLabelValue('key',item)"
      :label="getLabelValue('label',item)"
      :value="getLabelValue('value',item)"
    />
  </el-select>
</template>

<script setup lang="ts">
  import {computed, inject, onMounted, onUnmounted, ref, watch} from 'vue'
  import {onBeforeRouteLeave} from 'vue-router'
  import type {Component} from '@/types/form'
  import {getTransformLabelValue, getOptionsList, getRemoteMethod} from "../utils";
  import {storeToRefs} from "pinia";
  import {debounce} from "@/utils";
  import {objectToArray} from "@/utils/design.ts";

  const props = withDefaults(
    defineProps<{
      data: Component
      disabled?: boolean
      options?: { [key: string]: string | number }[]
      type?: 'slot' | undefined // 类型，可选slot
      remoteMethod?: (value: any) => any
    }>(),
    {
      options: () => {
        return []
      },
      type: undefined,
      remoteMethod: null
    }
  )
  const emits = defineEmits<{
    (e: 'focus', val: any): void
    (e: 'blur', val: any): void
  }>()
  const modelValue = defineModel<any>()
  const store = inject('formStore')
  const {formValue} = storeToRefs(store)
  const optionSlot = ref([])
  const newOptions = computed(() => {
    if (props.options?.length) {
      return props.options
    } else {
      return objectToArray(optionSlot.value)
    }
  })
  const selectChange = (val: any) => {
    if (props.type === 'slot') {
      // 这里没有modelValue．这种赋值方式不能放在子表及弹性布局里面，要注意
      formValue.value[props.data.name] = val
    }
  }
  const selectFocus = (val: any) => {
    emits('focus', val)
  }
  const selectBlur = (val: any) => {
    emits('blur', val)
  }
  //监听赋值
  const unWatch = watch(() => formValue.value[props.data.name], (val: any) => {
    modelValue.value = val
    getDefaultOptions(val)
  })
  // 这里数据转换放在选项里处理
  const getLabelValue = (type: string, obj: Record<string, any>) => {
    const {transformData, label, value} = props.data
    return getTransformLabelValue(type, obj, {transformData, label, value})
  }
  const loading = ref(false)
  // 远程搜索
  const getRemoteM = debounce((name: string) => {
    getRemoteMethod(props.data, store, (opt) => {
      props.remoteMethod && props.remoteMethod(opt)
      if (props.type === 'slot') {
        optionSlot.value = opt
      }
      loading.value = false
    }, {'queryName': name}) //默认字段为queryName
  })

  const getDefaultOptions = (val: string | number) => {
    //条件1编辑模式2远程3第一次,4有值
    const {remote, filterable} = props.data.control
    const value = val === 0 ? '0' : val
    if (store.formType === 'edit' && remote && filterable && !optionSlot.value.length&&value) {
      getRemoteMethod(props.data, store, (opt) => {
        optionSlot.value = opt
      },{id:val}) //默认按id查询，可在before事件处理
    }
  }

  // type=inputSlot
  const initSlot = () => {
    const opt = store.formOptions[props.data.name]
    if (opt) {
      optionSlot.value = opt
      return false
    }
    optionSlot.value = props.data.options // 默认等于静态的
    getOptionsList(props.data, store, (opt: Record<string, any>) => {
      optionSlot.value = opt
    })
  }

  onMounted(() => {
    if (props.type === 'slot') {
      initSlot()
    }
  })
  onUnmounted(() => {
    unWatch()
  })
  onBeforeRouteLeave(() => {

  })
</script>
