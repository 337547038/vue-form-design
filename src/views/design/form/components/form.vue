<!-- Created by 337547038 on 2021/9/25. -->
<template>
  <div v-loading="loading">
    <el-form
      v-bind="formData.form"
      ref="ruleForm"
      :model="model as any"
      :disabled="disabled || type === 3"
      class="add-form"
      :class="{
        'design-form': type === 5,
        'detail-form': type === 3 || type === 4
      }"
    >
      <form-group :data="formData.list" />
      <slot></slot>
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
  import type { FormData, FormList } from '../../types'
  import { getRequest } from '@/api'
  import { useRoute, useRouter } from 'vue-router'
  import { ElMessage } from 'element-plus'
  import {
    constGetControlByName,
    constSetFormOptions,
    constFormBtnEvent,
    constControlChange,
    constFormProps,
    appendOrRemoveStyle
  } from '../../utils'
  import formatResult from '@/utils/formatResult'
  import formChangeValue from '@/utils/formChangeValue'
  import { jsonParseStringify } from '@/utils'

  const props = withDefaults(
    defineProps<{
      formData: FormData
      type?: number // 1新增；2修改；3查看（表单模式） ；4查看； 5设计
      disabled?: boolean // 禁用表单提交
      requestUrl?: string // 编辑数据请求url
      beforeRequest?: Function // 请求编辑数据前参数处理方法，可对请求参数处理
      afterResponse?: Function | string // 请求数据加载完成后数据处理方法，可对返回数据处理
      addUrl?: string // 表单数据新增提交保存url
      editUrl?: string // 表单数据修改保存提交url
      beforeSubmit?: Function | string // 表单提交前数据处理，可对提交数据处理，新增和保存都会触发
      afterSubmit?: Function // 表单提交后，默认提示提交结果，可return false阻止提示
      value?: { [key: string]: any } // 表单初始值，同setValue
      options?: { [key: string]: any } // 表单组件选项，同setOptions
      dict?: object // 固定匹配的字典
      isSearch?: boolean // 列表里作为筛选使用
    }>(),
    {
      type: 1, // 1新增；2修改；3查看（表单模式） ；4查看； 5设计
      formData: () => {
        return {
          list: [],
          form: {},
          config: {}
        }
      },
      dict: () => {
        return {}
      },
      isSearch: false
    }
  )
  const emits = defineEmits<{
    (e: 'btnClick', type: string): void
    (e: 'change', val: any): void // 表单组件值发生变化时
  }>()
  const route = useRoute()
  const router = useRouter()

  const loading = ref(false)
  let timer = 0
  let eventName = ''
  let getValueEvent = ''
  // 注册window事件
  const setWindowEvent = (bool?: boolean) => {
    if (props.formData.list.length > 0) {
      const formName = props.formData.form?.name
      if (!formName) {
        // 导出.vue时，name可以没有
        return
      }
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
    () => props.formData.config,
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
  const resultDict = ref({})
  // 处理表单值开始
  const model = ref<any>({})
  // 获取表单初始model值
  const getInitModel = () => {
    const obj = {}
    forEachGetFormModel(props.formData.list, obj)
    model.value = obj
  }
  watch(
    () => props.formData.list,
    () => {
      // formData从接口获取时
      getInitModel()
    }
  )
  // 从表单数据里提取表单所需的model
  const forEachGetFormModel = (list: FormList[], obj: any) => {
    list.forEach((item: any) => {
      if (['table', 'flex'].includes(item.type)) {
        obj[item.name] = jsonParseStringify(item.tableData)
      } else if (['grid', 'tabs'].includes(item.type)) {
        item.columns.forEach((col: any) => {
          forEachGetFormModel(col.list, obj)
        })
      } else if (['card', 'div'].includes(item.type)) {
        forEachGetFormModel(item.list, obj)
      } else {
        const excludeType = ['title', 'divider', 'txt', 'button']
        if (excludeType.indexOf(item.type) === -1) {
          obj[item.name] = jsonParseStringify(item.control.modelValue)
        }
      }
    })
  }

  // 表单组件值改变事件 tProp为子表格相关
  provide(constControlChange, ({ key, value, data, tProp }: any) => {
    if (key) {
      if (!tProp) {
        // 表格和弹性布局不是这里更新，只触change
        model.value[key] = value
      }
      // 支持在线方式数据处理，如A组件值改变时，可自动修改B组件的值，可参考请假流程自动时长计算
      if (props.formData.events?.change) {
        model.value = props.formData.events.change(key, model.value)
      }
      const onFormChange = props.formData.events?.change
      if (onFormChange) {
        if (typeof onFormChange === 'function') {
          model.value = onFormChange(key, model.value)
        } else {
          model.value = formChangeValue(key, model.value, onFormChange)
        }
      }
      // 当表格和弹性内的字段和外面字段冲突时，可通过tProps区分
      emits('change', { key, value, model: model.value, data, tProp })
    }
  })
  const dictForm = computed(() => {
    const storage = window.localStorage.getItem('akFormDict')
    let storageDict = {}
    if (storage) {
      storageDict = JSON.parse(storage)
    }
    // 全局的、当前表单配置的以及接口返回的
    return Object.assign({}, storageDict, props.dict, resultDict.value)
  })
  // 表单参数
  const formProps = computed(() => {
    return {
      model: model.value,
      type: props.type,
      hideField: props.formData.config?.hideField as [],
      showColon: props.formData.form.showColon,
      dict: dictForm.value
    }
  })
  provide(constFormProps, formProps)

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
    if (filter) {
      const obj: any = {}
      for (const key in model.value) {
        // eslint-disable-next-line no-prototype-builtins
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
  // 对表单设置初始值
  const setValue = (obj: { [key: string]: any }, filter?: boolean) => {
    // 分两种，false时将obj所有值合并到model，当obj有某些值不存于表单中，也会合并到model，当提交表单也会提交此值
    // true则过滤没用的值，即存在当前表单的才合并
    if (filter) {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(model.value, key)) {
          model.value[key] = obj[key]
        }
      }
    } else {
      model.value = Object.assign({}, model.value, jsonParseStringify(obj)) // 防止列表直接使用set方法对弹窗表单编辑，当重置表单时当前行数据被清空
    }
  }
  // 对表单选择项快速设置
  const setFormOptions = ref({})
  provide(constSetFormOptions, setFormOptions)
  const setOptions = (obj: { [key: string]: string[] }) => {
    setFormOptions.value = obj
  }
  // 追加移除style样式
  const appendRemoveStyle = (type?: boolean) => {
    try {
      const {
        config: { style }
      } = props.formData
      appendOrRemoveStyle('formStyle', style || '', type)
    } catch (e) {
      /* empty */
    }
  }

  // 按钮组件事件
  provide(constFormBtnEvent, (obj: any) => {
    emits('btnClick', obj.key)
    if ([3, 4, 5].includes(props.type)) {
      return ElMessage.error('当前模式不能提交表单')
    }
    switch (obj.key) {
      case 'submit':
        submit() // 提交
        break
      case 'reset':
        resetFields() // 重置
        break
      case 'cancel': // 取消返回，
        router.go(-1) //这个刷新后可能会失败
        break
    }
  })
  // 获取表单数据，编辑时，外部调用
  const getData = (params = {}) => {
    const requestUrl = props.formData.config?.requestUrl || props.requestUrl
    if (props.type === 5 || !requestUrl || props.isSearch) {
      console.error('执行了获取数据方法，但配置有误！')
      return
    }
    loading.value = true
    const newParams: any = params
    // 同时可使用props或是events里的事件，根据使用使用其中一种即可
    let newParams2
    const beforeRequest = props.formData.events?.beforeRequest
    if (typeof beforeRequest === 'function') {
      newParams2 = beforeRequest(newParams, route)
    }
    if (typeof props.beforeRequest === 'function') {
      newParams2 = props.beforeRequest(newParams, route)
    }
    if (newParams2 === false) {
      // 停止数据请求
      return
    }
    getRequest(requestUrl, newParams2 ?? newParams)
      .then(res => {
        // console.log(res)
        loading.value = false
        const result = res.data
        if (result) {
          let formatRes: any = result
          // 比较适用通用表单，保存在服务端
          const afterResponse = props.formData.events?.afterResponse
          if (typeof afterResponse === 'string' && afterResponse) {
            formatRes = formatResult(result, afterResponse)
          } else if (typeof afterResponse === 'function') {
            formatRes = afterResponse(result) ?? result
          }
          // 比较适用于导出vue文件
          if (typeof props.afterResponse === 'string' && props.afterResponse) {
            formatRes = formatResult(result, props.afterResponse)
          } else if (typeof props.afterResponse === 'function') {
            formatRes = props.afterResponse(result) ?? result
          }
          if (formatRes === false) {
            return
          }
          setValue(formatRes.result || formatRes)
          nextTick(() => {
            // 将dict保存，可用于从接口中设置表单组件options。
            if (formatRes.dict && Object.keys(formatRes.dict).length) {
              resultDict.value = formatRes.dict
            }
          })
        }
      })
      .catch((res: any) => {
        loading.value = false
        return ElMessage.error(res.message)
      })
  }
  const submit = (params = {}) => {
    const addUrl = props.formData.config?.addUrl || props.addUrl
    const editUrl = props.formData.config?.editUrl || props.editUrl
    const apiUrl = props.type === 1 ? addUrl : editUrl
    if (props.isSearch || !apiUrl || loading.value) {
      if (!props.isSearch && !apiUrl) {
        console.error(
          new Error('请在表单设计处配置接口事件url或选择数据源或设置props')
        )
      }
      // 列表里作为筛选时，不提交表单
      return
    }
    validate((valid: boolean, fields: any) => {
      if (valid) {
        const formatParams = Object.assign({}, fields, params)
        let submitParams
        const beforeSubmit = props.formData.events?.beforeSubmit
        if (beforeSubmit) {
          if (typeof beforeSubmit === 'function') {
            submitParams = beforeSubmit(formatParams, route)
          } else {
            submitParams = formatResult(formatParams, beforeSubmit)
          }
        }
        if (props.beforeSubmit && typeof props.beforeSubmit === 'string') {
          submitParams = formatResult(formatParams, props.beforeSubmit)
        } else if (typeof props.beforeSubmit === 'function') {
          submitParams = props.beforeSubmit(formatParams, route)
        }
        if (submitParams === false) {
          return
        }
        loading.value = true
        // 提交保存表单
        getRequest(apiUrl, submitParams ?? formatParams)
          .then((res: any) => {
            afterSubmit('success', res)
          })
          .catch(res => {
            afterSubmit('fail', res)
          })
      } else {
        // 没通过校验
        afterSubmit('validate', fields)
      }
    })
  }
  // 不管成功失败，有事件时都需要执行回调
  const afterSubmit = (type: string, res: any) => {
    const afterSubmit = props.formData.events?.afterSubmit
    let notReturn
    if (typeof afterSubmit === 'function') {
      notReturn = afterSubmit(type, res)
    } else if (typeof props.afterSubmit === 'function') {
      notReturn = props.afterSubmit(type, res)
    }
    loading.value = false
    // 不管结果，重置表单，防再次打开时保留上一次的值
    // resetFields()
    if (notReturn === false) {
      // 有返回false时则不提示
      return
    }
    if (type === 'success') {
      ElMessage.success(res.message || '保存成功！')
    } else if (type === 'fail') {
      ElMessage.error(res.message || '保存失败！')
    }
  }
  // 表单初始值
  watch(
    () => props.value,
    (v: any) => {
      v && setValue(v)
    },
    {
      immediate: true
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
    // setValue(Object.assign(model.value, obj || {})) // 这才能清空组件显示的值
  }
  onMounted(() => {
    getInitModel()
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
    validate,
    resetFields,
    getData,
    submit
  })
</script>
