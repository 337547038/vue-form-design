<template>
  <el-select
    v-bind="data.control"
    :disabled="disabled"
    v-model="value"
    :loading="state.loading"
    :remoteMethod="getRemoteMethod"
  >
    <el-option v-if="data.config?.addAll" value="" label="全部" />
    <el-option
      v-for="item in optionsList"
      :key="item[valueKey]"
      :label="item[labelKey]"
      :value="item[valueKey]"
    />
  </el-select>
</template>

<script setup lang="ts">
  import { reactive, computed, onMounted, inject, watch, ref } from 'vue'
  import { onBeforeRouteLeave } from 'vue-router'
  import type { FormList } from '@/types/form'
  import { objectToArray } from '@/utils/design'
  import { getOptionsData } from './request'
  const props = withDefaults(
    defineProps<{
      data: FormList
      modelValue?: null
      disabled?: boolean
      options?: { [key: string]: string | number }
      remoteMethod?: (name: string, callback: () => void) => void
      type?: 'slot' // 类型，可选slot
    }>(),
    {
      options: () => {
        return []
      }
    }
  )
  const queryName = computed(() => {
    return props.data.config?.queryName || 'name'
  })
  const labelKey = computed(() => {
    return props.data.config?.label || 'label'
  })
  const valueKey = computed(() => {
    return props.data.config?.value || 'value'
  })
  const value = defineModel()
  const state = reactive({
    loading: false // 远程搜索加载状态
  })
  // 符合远程搜索
  const isRemote = computed(() => {
    const { optionsType, optionsFun } = props.data.config
    const { remote, filterable } = props.data.control
    return !!(remote && filterable && optionsType === 1 && optionsFun)
  })
  // 远程搜索
  const getRemoteMethod = (name: string) => {
    if (props.type === 'slot') {
      getSlotRemoteMethod(name)
    } else if (isRemote.value) {
      state.loading = true
      // 请求参数名，可使用config.queryName传进来
      props.remoteMethod &&
        props.remoteMethod(name, () => {
          state.loading = false
        })
      if (props.data.control.remoteMethod) {
        props.data.control.remoteMethod(name)
      }
    }
  }

  // 当作为slot使用时，要处理option的数据问题
  const formOptions = inject('akFormSetOptions', {}) as any
  const optionsSlot = ref([])
  const formProps = inject('akFormProps', {}) as any
  const optionsList = computed(() => {
    // 使用了setOptions时，从set方法里取
    if (props.type === 'slot') {
      if (formOptions.value[props.data.name]) {
        return objectToArray(formOptions.value[props.data.name])
      } else {
        return optionsSlot.value
      }
    } else {
      return props.options
    }
  })
  const linkage = computed(() => {
    return props.data.config?.linkage
  })
  const unWatch1 = linkage.value
    ? watch(
        () => formProps.model[linkage.value],
        val => {
          getOptions({ [queryName.value]: val }, 'linkage')
        }
      )
    : null
  const unWatch2 = watch(
    () => formProps.model,
    val => {
      if (props.type === 'slot') {
        value.value = val[props.data.name]
      }
    }
  )
  const getSlotRemoteMethod = (name: string) => {
    if (isRemote.value) {
      state.loading = true
      getOptions({ [queryName.value]: name }, 'remote')
    }
  }
  const getOptions = (data = {}, type: string) => {
    if (props.type === 'slot') {
      getOptionsData(props.data.config, formProps.model, type, {}, data).then(
        res => {
          optionsSlot.value = res
          state.loading = false
        }
      )
    }
  }
  const initGetOptions = () => {
    const { optionsType, optionsFun } = props.data.config
    const { filterable, remote, modelValue } = props.data.control
    value.value = modelValue
    if (optionsType === 2 && optionsFun) {
      // 从字典获取
      const dictVal = formProps.value.dict
      if (dictVal) {
        const opt = dictVal[optionsFun]
        if (opt !== undefined) {
          optionsSlot.value = objectToArray(opt)
        }
      }
    } else if (optionsType === 1 && optionsFun) {
      // 从接口获取
      if (filterable && remote) {
        // 远程搜索时，初始不需要请求。编辑时需要回显
        if (formProps.operateType === 'edit') {
          // 暂统一按照id从接口获取数据作为回显
          getOptions({ id: value.value }, 'edit')
        }
      } else {
        let data = {}
        // 有联动条件的带上联动的参数
        if (linkage.value) {
          data = {
            [queryName.value]: formProps.model[linkage.value]
          }
        }
        getOptions(data, 'default')
      }
    }
  }
  // 处理slot结束
  onMounted(() => {
    if (props.type === 'slot') {
      initGetOptions()
    }
  })
  onBeforeRouteLeave(() => {
    unWatch2()
    unWatch1 && unWatch1()
  })
</script>
