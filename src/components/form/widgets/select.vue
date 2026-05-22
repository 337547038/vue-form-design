<template>
  <el-select
    v-bind="data.control"
    v-model="value"
    :disabled="disabled"
    :loading="loading"
    :remote-method="getRemoteM"
    @change="selectChange"
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
  import {computed, onMounted, ref} from 'vue'
  import {onBeforeRouteLeave} from 'vue-router'
  import type {Component} from '@/types/designForm'
  import {getTransformLabelValue, getOptionsList, getRemoteMethod} from "@/components/form/utils";
  import {useFormStore} from "@/store/form.ts";
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
  const store = useFormStore()
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
    formValue.value[props.data.name] = val
  }
  // 这里数据转换放在选项里处理
  const getLabelValue = (type: string, obj: Record<string, any>) => {
    const {transformData, label, value} = props.data
    return getTransformLabelValue(type, obj, {transformData, label, value})
  }
  const queryName = computed(() => {
    return props.data?.queryName || 'name'
  })
  const value = ref()
  const loading = ref(false)
  // 远程搜索
  const getRemoteM = debounce((name: string) => {
    getRemoteMethod(props.data, (opt) => {
      props.remoteMethod && props.remoteMethod(opt)
      if (props.type === 'slot') {
        optionSlot.value = opt
      }
      loading.value = false
    }, {[queryName.value]: name})
  })

  // type=inputSlot
  const initSlot = () => {
    const opt = store.formOptions[props.data.name]
    if (opt) {
      optionSlot.value = opt
      return false
    }
    optionSlot.value = props.data.options // 默认等于静态的
    getOptionsList(props.data, (opt: Record<string, any>) => {
      optionSlot.value = opt
    })
  }

  onMounted(() => {
    if (props.type === 'slot') {
      initSlot()
    }
  })
  onBeforeRouteLeave(() => {

  })
</script>
