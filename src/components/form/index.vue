<!-- Created by 337547038 on 2021/9/25. -->
<template>
  <el-form
    v-bind="data.form"
    ref="ruleForm"
    v-loading="loading"
    class="ak-form"
    :model="model as any"
    :disabled="disabled || operateType === 'detail'"
    :class="getFormCls"
    :hide-required-asterisk="operateType === 'detail'"
  >
    <form-group :data="data.list" />
    <slot />
    <div
      v-if="defaultBtnList.length"
      class="group group-btn"
    >
      <el-button
        v-for="item in defaultBtnList"
        :key="item.key"
        v-bind="item"
        @click="defaultBtnClick(item)"
      >
        {{ item.label }}
      </el-button>
    </div>
  </el-form>
</template>
<script lang="ts" setup>
  import {
    computed,
    ref,
    watch,
    onUnmounted,
    onMounted,
    nextTick,
    provide,
    reactive
  } from 'vue'
  import FormGroup from './formGroup.vue'
  import { FormData, FormList } from '@/types/form'
  import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router'
  import { ElMessage } from 'element-plus'
  import { appendOrRemoveStyle, jsonParseStringify } from '@/utils/design'
  import formChangeValue from '@/utils/formChangeValue'
  import { getStorage } from '@/utils'
  import { beforeAfter, getRequestEvent } from '@/utils/beforeAfter'

  defineOptions({ name: 'AkForm' })
  const props = withDefaults(
      defineProps<{
        data: FormData
        disabled?: boolean // 禁用表单提交
        before?: string | ((params: any, obj: any) => any) // 请求编辑数据前参数处理方法，可对请求参数处理
        after?: string | ((res: any, obj: any) => any) // 请求数据加载完成后数据处理方法，可对返回数据处理
        query?: { [key: string]: any } // 一些附加的请求参数。也可在`before`处添加
        params?: { [key: string]: any } // 提交表单一些附加参数
        submitUrl?: string // 表单提交url
        requestUrl?: string // 用于回显填充数据请求数据url
        // add/edit用于根据当前类型显示或禁用相关组件操作。design/designSearch设计模式。detail用于详情页查看。search用于列表上方条件筛选
        operateType?: 'add' | 'edit' | 'design' | 'detail' | 'search' | 'designSearch'
      }>(),
      {
       /* data: () => {
          return {
            list: [],
            form: {},
            config: {}
          }
        }, */
        query: () => {
          return {}
        },
        params: () => {
          return {}
        },
        operateType: 'add',
        submitUrl: '',
        requestUrl: '',
        before: () => {
        },
        after: () => {
        }
      }
  )
  const emits = defineEmits<{
    (e: 'btnClick', type: string): void
    (
        e: 'change',
        { name, value, model, prop, options }: { name: string, value: any, model: any, prop: string, options: any }
    ): void // 表单组件值发生变化时
  }>()

  const route = useRoute()
  const router = useRouter()

  const loading = ref(false)
  let eventName = ''
  let getValueEvent = ''

  // 快速添加的提交按钮
  const defaultBtnList = computed(() => {
    const submitBtn = props.data.config?.submitCancel
    if (typeof submitBtn === 'boolean' && submitBtn) {
      if (['designSearch', 'search'].includes(props.operateType)) {
        return [
          {
            label: '查询',
            type: 'primary',
            key: 'submit',
            icon: 'Search'
          },
          {
            label: '清空',
            key: 'reset',
            icon: 'RefreshLeft'
          }
        ]
      } else if (['add', 'edit', 'design'].includes(props.operateType)) {
        return [
          {
            label: '确定',
            type: 'primary',
            key: 'submit'
          },
          { label: '取消', key: 'reset' }
        ]
      } else {
        return [{ label: '取消返回', key: 'cancel' }]
      }
    } else if (typeof submitBtn === 'object' && submitBtn?.length) {
      return submitBtn
    } else {
      return []
    }
  })
  /**
   * 按钮点击事件
   * @param obj
   */
  const defaultBtnClick = (obj: any) => {
    emits('btnClick', obj.key)
    if (!['add', 'edit', 'search'].includes(props.operateType)) {
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
        router.go(-1) // 这个刷新后可能会失败
        break
    }
  }

  // 添加表单类名
  const getFormCls = computed(() => {
    switch (props.operateType) {
      case 'design':
      case 'designSearch':
        return 'ak-form-design'
      case 'search':
        return 'ak-form-search'
      case 'detail':
        return 'ak-form-detail'
      default:
        return ''
    }
  })

  // 注册window事件
  const setWindowEvent = () => {
    if (props.data.list?.length > 0) {
      const formName = props.data.form?.name
      if (!formName) {
        // 导出.vue时，name可以没有
        return
      }
      eventName = `get${formName}ControlByName`
      getValueEvent = `get${formName}ValueByName`
      if (formName) {
        // 根据name获取当前数据项
        window[eventName] = (name: string) => {
          return getNameForEach(props.data.list, name)
        }
        // 根据name获取当前项的值
        window[getValueEvent] = (name: string) => {
          return model.value[name]
        }
      }
    }
  }
  const unWatchEvent = watch(
      () => props.data.form!.name,
      () => {
        setWindowEvent()
      }
  )
  const unWatchStyle = watch(
      () => props.data.config!.style,
      () => {
        appendRemoveStyle(true) // 更新样式
      }
  )
  // 设置全局事件结束

  const resultDict = ref({})
  // 处理表单值开始
  const model = ref({})
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
  // 获取表单初始model值
  const getInitModel = () => {
    const obj = {}
    forEachGetFormModel(props.data.list, obj)
    model.value = obj
  }
  const unWatch2 = watch(
      () => props.data.list,
      () => {
        // data从接口获取时
        getInitModel()
      },
      { immediate: true }
  )

  const dictForm = computed(() => {
    const storage = getStorage('akAllDict')
    // 全局的、当前表单配置的以及接口返回的
    return Object.assign({}, storage || {}, resultDict.value)
  })

  /**
   * 提供一个方法，用于根据name从data.list里查找数据
   * @param data
   * @param name
   */
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
  // 表单检验方法
  const ruleForm = ref()
  /**
   * 表单校验方法，也可以外部使用
   * @param callback
   */
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
  /**
   * 提供一个取值的方法，外部引用
   * @param filter true只返回非空值
   */
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
      return jsonParseStringify(model.value)
    }
  }
  /**
   * 对表单设置初始值，提供外部引用
   * @param obj
   * @param filter 分两种，false时将obj所有值合并到model，当obj有某些值不存于表单中，也会合并到model，当提交表单也会提交此值.true则过滤没用的值，即存在当前表单的才合并
   */
  const setValue = (obj: { [key: string]: any }, filter?: boolean) => {
    if (filter) {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(model.value, key)) {
          model.value[key] = obj[key]
        }
      }
    } else {
      model.value = Object.assign({}, model.value, jsonParseStringify(obj))
    }
  }

  /**
   * 追加移除style样式
   * @param type
   */
  const appendRemoveStyle = (type?: boolean) => {
    try {
      const style = props.data.config?.style || ''
      appendOrRemoveStyle('formStyle', style, type)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      /* empty */
    }
  }
  /**
   * 根据组件的name获取当前控件的相关信息
   * @param name
   */
  const getControlByName = (name: string) => {
    return getNameForEach(props.data.list, name)
  }
  provide('akGetControlByName', getControlByName)

  // provide相关
  /**
   * 表单组件改变事件
   * @param name 当前组件的name，即form-item的prop值
   * @param value 当前值
   * @param prop 子表或flex时的prop，其他情况等于name的值
   * @param options 当type=select时，同时返回当前选项options数据
   */
  provide('akFormValueChange', ({ name, value, prop, options }: any) => {
    // change事件修改调整model的值
    const onFormChange = props.data.events?.change
    if (typeof onFormChange === 'function') {
      const returnVal = onFormChange({
        name,
        value,
        model: model.value,
        prop,
        options
      })
      if (returnVal && typeof returnVal === 'string') {
        model.value = formChangeValue(name, model.value, returnVal)
      } else if (typeof returnVal === 'object') {
        model.value = returnVal
      }
    }
    emits('change', { name, value, model: model.value, prop, options })
  })

  // defineExpose方法，设置表单选项值
  const setFormOptions = ref({})
  provide('akFormSetOptions', setFormOptions)
  const setOptions = (obj: { [key: string]: string[] }) => {
    setFormOptions.value = obj
  }

  /**
   * 编辑时获取表单数据，外部调用并传入请求参数
   * @param params 一般情况下只需传一个id即可{id:xx}
   */
  const getData = (params = {}) => {
    const requestUrl = props.data.requestUrl || props.requestUrl
    if (['design', 'designSearch'].includes(props.operateType)) {
      console.error('设计模式不能提交表单！')
      return
    }
    if (!requestUrl) {
      console.error('请配置获取表单数据接口！')
      return
    }
    loading.value = true
    const newParams: any = Object.assign({}, params, props.query)
    // 同时可使用props或是events里的事件，根据使用使用其中一种即可
    beforeAfter({
      apiKey: requestUrl,
      params: newParams,
      before: getRequestEvent(props, 'before'),
      after: getRequestEvent(props, 'after'),
      route: route,
      type: 'fetch'
    })
        .then((res: any) => {
          loading.value = false
          const result = res.data
          if (result) {
            const formatRes: any = result.result || result || {} // 兼容两种返回格式
            // 这里尝试将string转obj以恢复提交保存时的转换
            let temp: any = {}
            if (props.data.config?.transformData) {
              for (const key in formatRes) {
                try {
                  temp[key] = JSON.parse(formatRes[key])
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                } catch (e) {
                  temp[key] = formatRes[key]
                }
              }
            } else {
              temp = formatRes
            }
            setValue(temp)
            nextTick(() => {
              // 将dict保存，可用于从接口中设置表单组件options。
              if (formatRes.dict && Object.keys(formatRes.dict).length) {
                resultDict.value = formatRes.dict
              }
            })
          }
        })
        .catch(() => {
          loading.value = false
        })
  }
  /**
   * 表单添加和编辑提交
   * @param params
   */
  const submit = (params = {}) => {
    const apiUrl: string | undefined = props.submitUrl || props.data.submitUrl
    if (!['add', 'edit'].includes(props.operateType) || loading.value) {
      return // 只有add/edit允许提交表单，不提交表单
    }
    if (!apiUrl) {
      console.error(new Error('请配置表单提交url'))
      return
    }
    validate((valid: boolean, fields: any) => {
      if (valid) {
        loading.value = true
        // 处理数据格式，将多选表格之类的转为字符串形式提交
        let temp: any = {}
        if (props.data.config?.transformData) {
          for (const key in fields) {
            if (typeof fields[key] === 'object') {
              temp[key] = JSON.stringify(fields[key])
            } else {
              temp[key] = fields[key]
            }
          }
        } else {
          temp = fields
        }
        // 提交保存表单
        beforeAfter({
           apiKey: apiUrl,
          params: Object.assign({}, temp, params, props.params),
          before: getRequestEvent(props, 'before'),
          after: getRequestEvent(props, 'after'),
          type: 'submit',
          route: route,
          formModel: model.value,
        })
            .then((res: any) => {
              loading.value = false
              ElMessage.success(res.message || '保存成功！')
            })
            .catch((res) => {
              // 接口返回code!=1时已统一提示异常，这里不重复提示
              // 接口返回正常，处理程序错误时，这里需提示下。这种情况没有code
              if (res.code === undefined) {
                console.error(res.message)
               // ElMessage.error(res.message || '处理异常！')
              }
              loading.value = false
            })
      } else {
        // 没通过校验，这里单独处理，返回校验结果通知
        loading.value = false
        const submitEvent = getRequestEvent(props, 'after')
        if (typeof submitEvent === 'function') {
          submitEvent('validate', fields)
        }
      }
    })
  }
  // ------------------------数据处理结束------------------------

  // 表单设计中按钮组件的点击事件
  provide('akFormButtonEvent', defaultBtnClick)
  // 一些所需参数
  const akFormProps = reactive({
    operateType: props.operateType,
    model: model,
    hideField: props.data.config?.hideField as [],
    dict: dictForm.value
  })
  provide('akFormProps', akFormProps)
  // 重置表单方法
  const resetFields = () => {
    ruleForm.value.resetFields()
  }
  onBeforeRouteLeave(() => {
    unWatchStyle() // 销毁监听器
    unWatchEvent() // 销毁监听器
    unWatch2() // 销毁监听器
  })

  onMounted(() => {
    // getInitModel()
    nextTick(() => {
      appendRemoveStyle(true)
    })
    setWindowEvent()
  })
  onUnmounted(() => {
    if (eventName) {
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
