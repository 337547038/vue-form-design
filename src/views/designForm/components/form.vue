<!-- Created by 337547038 on 2021/9/25. -->
<template>
  <el-form
    v-bind="formData.form"
    ref="ruleForm"
    :model="model"
    :disabled="disabled || type === 2"
    class="add-form"
    :class="{
      'design-form': type === 4,
      'detail-form': type === 3 || type === 2
    }"
    ><!--eslint-disable-next-line vue/no-mutating-props-->
    <form-group v-model:data="formData.list" />
    <slot></slot>
  </el-form>
</template>
<script lang="ts" setup>
  import formGroup from './formGroup.vue'
  import {
    provide,
    computed,
    ref,
    watch,
    onUnmounted,
    onMounted,
    nextTick
  } from 'vue'
  import type { FormData, FormList } from '../types'
  import { SetFormOptions, SetFormValue } from '../constants'
  import { useDesignFormStore } from '@/store/designForm'

  const props = withDefaults(
    defineProps<{
      formData: FormData
      type?: number // 1新增；2查看（表单模式） ；3查看； 4设计
      isEdit?: boolean // 编辑状态，type=1新增模式下有编辑状态，主要用于控制编辑模式下某些字段的禁用状态，即可新增但不能修改
      disabled?: boolean // 可用于在提交表单是禁用，防重复提交
    }>(),
    {
      type: 1, // 1新增；2查看（表单模式） ；3查看； 4设计
      isEdit: false,
      formData: () => {
        return {
          list: [],
          form: {}
        }
      }
    }
  )
  const storeForm = useDesignFormStore()

  let timer = 0
  let eventName = ''
  const setWindowEvent = (bool?: boolean) => {
    if (props.formData.list.length > 0) {
      const formName = props.formData.form.name
      eventName = `get${formName}ControlByName`
      if (formName && (!window[eventName as any] || !bool)) {
        // @ts-ignore
        window[eventName] = (name: string) => {
          for (let i = 0; i < props.formData.list.length; i++) {
            if (props.formData.list[i].name === name) {
              return props.formData.list[i]
            }
          }
        }
      }
    }
  }
  watch(
    () => props.formData,
    () => {
      if (timer < 2) {
        setWindowEvent() // 简单判断下，这里不是每次都更新
      }
      timer++
      appendRemoveStyle(true) // 更新样式
    },
    { deep: true }
  )
  setWindowEvent()
  // 设置全局事件结束
  const model = computed(() => {
    const obj = {}
    if (props.formData.list.length > 0) {
      forEachGetFormModel(props.formData.list, obj)
    }
    return obj
  })
  // 从表单数据里提取表单所需的model
  const forEachGetFormModel = (list: FormList[], obj: any) => {
    list.forEach((item: any) => {
      if (item.type === 'table') {
        obj[item.name] = item.tableData
      } else if (item.type === 'grid' || item.type === 'tabs') {
        item.columns.forEach((col: any) => {
          forEachGetFormModel(col.list, obj)
        })
      } else if (item.type === 'card') {
        forEachGetFormModel(item.list, obj)
      } else {
        const excludeType = ['title']
        if (excludeType.indexOf(item.type) === -1) {
          obj[item.name] = item.control.modelValue
        }
      }
    })
  }
  // 子组件formGroup为递归组件
  storeForm.$patch((state) => {
    state.type = props.type
    state.isEdit = props.isEdit
    state.model = model
    state.rulesComm = props.formData.rulesComm as []
    state.hideField = props.formData.hideField as []
  })
  // 表单检验方法
  const ruleForm = ref()
  const validate = (callback: any) => {
    ruleForm.value.validate((valid: boolean, fields: any) => {
      callback(valid, fields)
    })
  }
  // 提供一个取值的方法
  const getValue = (bool?: boolean) => {
    // bool=true时只返回不为空的值
    if (bool) {
      const obj: any = {}
      for (const key in model.value) {
        if (model.value.hasOwnProperty(key)) {
          const val = (model.value as any)[key]
          if (val !== '' && val && val.length > 0) {
            obj[key] = val
          }
        }
      }
      return obj
    } else {
      return model.value
    }
  }
  // 对表单设置初始值，使用ref形式调用
  const setValueObj = ref()
  provide(SetFormValue, setValueObj)
  const setValue = (obj: { [key: string]: any }) => {
    setValueObj.value = obj
  }
  // 对表单选择项快速设置，使用ref形式调用
  const setOptionsObj = ref()
  provide(SetFormOptions, setOptionsObj)
  const setOptions = (obj: { [key: string]: string[] }) => {
    setOptionsObj.value = obj
  }
  // 追加移除style样式
  const appendRemoveStyle = (type?: boolean) => {
    const { form = {}, style } = props.formData
    const styleId: any = document.getElementById(form.name + 'Style')
    if (styleId && type) {
      // 存在时直接修改，不用多次插入
      styleId.innerText = style
      return
    }
    if (style && type) {
      const styleEl = document.createElement('style')
      styleEl.id = form && form.name + 'Style'
      styleEl.appendChild(document.createTextNode(style))
      document.head.appendChild(styleEl)
    }
    if (!type) {
      // 移除
      styleId && styleId.parentNode.removeChild(styleId)
    }
  }
  onMounted(() => {
    nextTick(() => {
      appendRemoveStyle(true)
    })
  })
  onUnmounted(() => {
    if (eventName) {
      // @ts-ignore
      window[eventName] = ''
    }
    appendRemoveStyle()
  })
  defineExpose({
    setOptions,
    setValue,
    getValue,
    validate
  })
</script>
