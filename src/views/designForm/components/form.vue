<!-- Created by 337547038 on 2021/9/25. -->
<template>
  <div v-loading="loading">
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
    >
      <form-group :data="formData.list" />
      <slot></slot>
      <template v-if="confirmBtn || cancelBtn">
        <el-button type="primary" v-if="confirmBtn" @click="submit">{{
          confirmBtn
        }}</el-button>
        <el-button v-if="cancelBtn" @click="cancelClick">{{
          cancelBtn
        }}</el-button>
      </template>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
  import FormGroup from './formGroup.vue'
  import {
    computed,
    ref,
    watch,
    onUnmounted,
    onMounted,
    nextTick,
    provide
  } from 'vue'
  import type { FormData, FormList } from '../types'
  import { getRequest } from '@/api'
  import { useRoute, useRouter } from 'vue-router'
  import { ElMessage } from 'element-plus'
  import {
    constFormDict,
    constFormOtherData,
    constGetControlByName,
    constSetFormOptions,
    constSetFormValue
  } from './utils'

  const props = withDefaults(
    defineProps<{
      formData: FormData
      type?: number // 1新增；2查看（表单模式） ；3查看； 4设计
      isEdit?: boolean // 编辑状态，type=1新增模式下有编辑状态，主要用于控制编辑模式下某些字段的禁用状态，即可新增但不能修改
      disabled?: boolean // 可用于在提交表单是禁用，防重复提交
      requestUrl?: string | boolean // 编辑数据请求url
      beforeRequest?: Function //请求编辑数据前参数处理方法，可对请求参数处理，requestUrl为true时
      afterResponse?: Function //请求编辑数据完成后数据处理方法，requestUrl为true时
      submitUrl?: string | boolean // 表单数据提交url
      beforeSubmit?: Function // 表单提交前数据处理，仅在submitUrl&submitBtn为true时
      afterSubmit?: Function // 表单提交后，仅在submitUrl&submitBtn为true时
      value?: { [key: string]: any } // 表单初始值，同setValue
      options?: { [key: string]: any } // 表单组件选项，同setOptions
      dict?: object // 固定匹配的字典
      isSearch?: boolean // 列表里作为筛选使用
    }>(),
    {
      type: 1, // 1新增；2查看（表单模式） ；3查看； 4设计
      isEdit: false,
      formData: () => {
        return {
          list: [],
          form: {}
        }
      },
      dict: () => {
        return {}
      },
      requestUrl: 'getFormContent',
      submitUrl: 'saveFormContent',
      isSearch: false
    }
  )
  const emits = defineEmits<{
    (e: 'click', type: string): void
  }>()
  const route = useRoute()
  const router = useRouter()
  // const storeForm = useDesignFormStore()
  const loading = ref(false)
  const hasLoadData = ref(false) // 用于表示是否已加载过表单数据了
  const transformField = ref([]) // 值需要做转换的
  const confirmBtn = computed(() => {
    return props.formData.config?.confirm
  })
  const cancelBtn = computed(() => {
    return props.formData.config?.cancel
  })
  // 添加数据时是否从接口获取初始数据
  const addLoad = computed(() => {
    return props.formData.config?.addLoad
  })

  let timer = 0
  let eventName = ''
  let getValueEvent = ''
  // 注册window事件
  const setWindowEvent = (bool?: boolean) => {
    if (props.formData.list.length > 0) {
      const formName = props.formData.form.name
      eventName = `get${formName}ControlByName`
      getValueEvent = `get${formName}ValueByName`
      if (formName && (!window[eventName as any] || !bool)) {
        // 根据name获取当前数据项
        // @ts-ignore
        window[eventName] = (name: string) => {
          return getNameForEach(props.formData.list, name)
        }
        // 根据name获取当前项的值
        // @ts-ignore
        window[getValueEvent] = (name: string) => {
          return model.value[name]
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
      if (['table', 'flex'].includes(item.type)) {
        obj[item.name] = item.tableData
        if (
          item.config?.transform &&
          !transformField.value.includes(item.name)
        ) {
          transformField.value.push(item.name)
        }
      } else if (['grid', 'tabs'].includes(item.type)) {
        item.columns.forEach((col: any) => {
          forEachGetFormModel(col.list, obj)
        })
      } else if (['card', 'div'].includes(item.type)) {
        forEachGetFormModel(item.list, obj)
      } else {
        const excludeType = ['title', 'divider', 'txt']
        if (excludeType.indexOf(item.type) === -1) {
          obj[item.name] = item.control.modelValue
          if (
            item.config?.transform &&
            !transformField.value.includes(item.name)
          ) {
            transformField.value.push(item.name)
          }
        }
      }
    })
  }
  // 子组件formGroup为递归组件
  provide(constFormOtherData, {
    type: props.type,
    isEdit: !!route.query.id || props.isEdit, // 有id时默认为编辑模式
    model: model,
    hideField: props.formData.config?.hideField as []
  })
  // 提供一个方法，用于根据name从formData.list里查找数据
  const getNameForEach = (data: any, name: string) => {
    let temp = {}
    for (const key in data) {
      const dataKey = data[key]
      if (dataKey.name === name) {
        return dataKey
      }
      if (['grid', 'tabs'].includes(dataKey.type)) {
        dataKey.columns.forEach((co: any) => {
          temp = getNameForEach(co.list, name)
        })
      }
      if (['card', 'div'].includes(dataKey.type)) {
        temp = getNameForEach(dataKey.list, name)
      }
    }
    return temp
  }
  const getControlByName = (name: string) => {
    return getNameForEach(props.formData.list, name)
  }
  provide(constGetControlByName, getControlByName)
  // 表单检验方法
  const ruleForm = ref()
  const validate = (callback: any) => {
    ruleForm.value.validate((valid: boolean, fields: any) => {
      let fieldValue = fields
      if (valid) {
        // 校验通过，返回当前表单的值
        fieldValue = getValue()
      }
      callback(valid, fieldValue)
    })
  }
  // 提供一个取值的方法
  const getValue = (filter?: boolean) => {
    // 需要将值转换，数组[]=>string,true=>'true',false=>'false'
    if (transformField.value.length) {
      const obj: any = {}
      for (const key in model.value) {
        if (model.value.hasOwnProperty(key)) {
          const val = (model.value as any)[key]
          let newVal = val
          if (transformField.value.includes(key)) {
            if (val && typeof val === 'object') {
              newVal = val.join(',')
              // 表格时转换出来的是这种'[object Object],[object Object]'
              if (newVal.includes('[object Object]')) {
                newVal = JSON.stringify(val)
              }
            } else if (val === true) {
              newVal = 1
            } else if (val === false) {
              newVal = 0
            }
          }
          if (filter) {
            // 过滤掉空值
            if (!/^\s*$/.test(val)) {
              obj[key] = newVal
            }
          } else {
            obj[key] = newVal
          }
        }
      }
      return obj
    } else {
      if (filter) {
        const obj: any = {}
        for (const key in model.value) {
          if (model.value.hasOwnProperty(key)) {
            const val = (model.value as any)[key]
            if (!/^\s*$/.test(val)) {
              obj[key] = val
            }
          }
        }
        return obj
      } else {
        return model.value
      }
    }
  }
  // 对表单设置初始值
  const setValueObj = ref({})
  provide(constSetFormValue, setValueObj)
  const setValue = (obj: { [key: string]: any }) => {
    setValueObj.value = obj || {}
  }
  // 对表单选择项快速设置
  const setFormOptions = ref({})
  provide(constSetFormOptions, setFormOptions)
  const setOptions = (obj: { [key: string]: string[] }) => {
    setFormOptions.value = obj
  }
  // 追加移除style样式
  const appendRemoveStyle = (type?: boolean) => {
    const { form = {}, config = {} } = props.formData
    const styleId: any = document.getElementById(form.name + 'Style')
    if (styleId && type) {
      // 存在时直接修改，不用多次插入
      styleId.innerText = config.style
      return
    }
    if (config.style && type) {
      const styleEl = document.createElement('style')
      styleEl.id = form && form.name + 'Style'
      styleEl.appendChild(document.createTextNode(config.style))
      document.head.appendChild(styleEl)
    }
    if (!type) {
      // 移除
      styleId && styleId.parentNode.removeChild(styleId)
    }
  }
  const resultDict = ref(props.dict)
  watch(
    () => props.dict,
    (v: any) => {
      resultDict.value = v
    },
    { deep: true }
  )
  provide(constFormDict, resultDict)
  // ---------数据处理开始，也可以外部请求到数据使用setValue方式（导出vue文件时）-----------
  // 获取表单初始数据，加载条件还需要是接收到的参数id，即编辑状态
  // 设置了addLoad时，没有id也从接口获取新增时的初始数据或是dict数据
  /*const setFormDict = (obj: { [key: string]: string[] }) => {
    console.log('setFormDict')
    // resultDict.value = obj
  }*/
  const getFormData = () => {
    if (props.type === 4) {
      return
    }
    if (
      props.formData?.list?.length &&
      props.requestUrl !== false &&
      hasLoadData.value === false &&
      (route.query.id || addLoad.value)
    ) {
      loading.value = true
      hasLoadData.value = true
      let prams = {
        formId: route.query.formId,
        id: route.query.id
      }
      // 同时可使用props或是events里的事件，根据使用使用其中一种即可
      if (typeof props.formData.events?.beforeRequest === 'function') {
        prams = props.formData.events.beforeRequest(prams, route)
      }
      if (typeof props.beforeRequest === 'function') {
        prams = props.beforeRequest(prams, route)
      }
      getRequest(props.requestUrl as string, prams)
        .then((res) => {
          // console.log(res)
          let result = res.data.data
          if (result) {
            let value = result.data
            // 比较适用通用表单，保存在服务端
            if (typeof props.formData.events?.afterResponse === 'function') {
              value = props.formData.events.afterResponse(value)
            }
            // 比较适用于导出vue文件
            if (typeof props.afterResponse === 'function') {
              value = props.afterResponse(value)
            }
            setValue(value)
            nextTick(() => {
              // 将dict保存，可用于从接口中设置表单组件options。有设置自定义的则合并
              if (result.dict) {
                resultDict.value = Object.assign(result.dict, props.dict)
              }
            })
          }
          loading.value = false
        })
        .catch((res: any) => {
          loading.value = false
          return ElMessage.error(res.data.message)
        })
    }
  }
  const submit = () => {
    if (props.type === 4) {
      return ElMessage.error('设计模式不能提交表单')
    }
    if (props.isSearch) {
      // 列表里作为筛选时，不提交表单
      emits('click', 'confirm')
      return
    }
    if (
      confirmBtn.value &&
      props.submitUrl !== false &&
      loading.value === false
    )
      validate((valid: boolean, fields: any) => {
        if (valid) {
          loading.value = true
          let params = {
            formId: route.query.formId,
            id: route.query.id,
            ...fields
          }
          if (typeof props.formData.events?.beforeSubmit === 'function') {
            params = props.formData.events.beforeSubmit(params, route)
          }
          if (typeof props.beforeSubmit === 'function') {
            params = props.beforeSubmit(params, route)
          }
          // 提交保存表单
          getRequest(props.submitUrl as string, params)
            .then((res: any) => {
              if (typeof props.formData.events?.afterSubmit === 'function') {
                props.formData.events?.afterSubmit(res)
              } else if (typeof props.afterSubmit === 'function') {
                props.afterSubmit(res)
              } else {
                ElMessage.success(res.data.message || '保存成功')
                router.push({ path: '/designform/list', query: route.query })
              }
              loading.value = false
            })
            .catch((res) => {
              loading.value = false
              ElMessage.error(res.data.message || '保存失败')
            })
        }
      })
  }
  // onMounted时formData不一定有值，这里当监听到变化时，如果没加载过再请求一次
  const cancelClick = () => {
    if (props.type === 4) {
      return ElMessage.error('设计模式不能提交表单')
    }
    if (props.isSearch) {
      // 列表里作为筛选时，不提交表单
      emits('click', 'cancel')
      return
    }
    router.router.go(-1)
  }
  watch(
    () => props.formData,
    () => {
      getFormData()
    }
  )
  // 表单初始值
  watch(
    () => props.value,
    (v: any) => {
      v && setValue(v)
    }
  )
  // 表单options
  watch(
    () => props.options,
    (v: any) => {
      v && setOptions(v)
    }
  )
  // ------------------------数据处理结束------------------------
  // 重置表单方法
  const resetFields = () => {
    ruleForm.value.resetFields()
  }
  onMounted(() => {
    nextTick(() => {
      getFormData()
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
    validate,
    resetFields
  })
</script>
