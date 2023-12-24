<!-- Created by 337547038 on 2021/9/25. -->
<template>
  <div v-loading="loading">
    <el-form
      v-bind="data.form"
      ref="ruleForm"
      :model="model as any"
      :disabled="disabled || type === 3"
      class="add-form"
      :class="{
        'design-form': type === 5,
        'detail-form': type === 3 || type === 4
      }"
    >
      <form-group :data="data.list" />
      <slot></slot>
      <div class="group group-btn" v-if="defaultBtnList.length">
        <el-button
          v-for="item in defaultBtnList"
          :key="item.key"
          v-bind="item"
          @click="defaultBtnClick(item)"
          >{{ item.label }}
        </el-button>
      </div>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
  import {
    computed,
    ref,
    watch,
    onUnmounted,
    onMounted,
    nextTick,
    provide
  } from 'vue'
  import FormGroup from './formGroup.vue'
  import type { FormData, FormList } from '@/types/form'
  import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router'
  import { ElMessage } from 'element-plus'
  import {
    constGetControlByName,
    constSetFormOptions,
    constFormBtnEvent,
    constControlChange,
    constFormProps,
    appendOrRemoveStyle,
    jsonParseStringify
  } from '@/utils/design'
  import formChangeValue from '@/utils/formChangeValue'
  import { getStorage } from '@/utils'
  import { requestResponse, getRequestEvent } from '@/utils/requestResponse.ts'

  const props = withDefaults(
    defineProps<{
      data: FormData
      type?: number // 1新增；2修改；3查看（表单模式） ；4查看； 5设计
      disabled?: boolean // 禁用表单提交
      requestUrl?: string // 编辑数据请求url
      beforeFetch?: Function // 请求编辑数据前参数处理方法，可对请求参数处理
      afterFetch?: Function | string // 请求数据加载完成后数据处理方法，可对返回数据处理
      submitUrl?: string // 表单数据新增提交保存url
      editUrl?: string // 表单数据修改保存提交url
      beforeSubmit?: Function | string // 表单提交前数据处理，可对提交数据处理，新增和保存都会触发
      afterSubmit?: Function // 表单提交后，默认提示提交结果，可return false阻止提示
      dict?: { [key: string]: any } // 固定匹配的字典
      btnClick?: (key: string) => boolean | void // 按钮点击事件
      isSearch?: boolean // 列表里作为筛选使用
      query?: { [key: string]: any } // 一些附加的请求参数。也可在`beforeFetch`处添加
      params?: { [key: string]: any } // 提交表单一些附加参数，如在提交修改时可添加id等信息。而不需要在提交前拦截处理
    }>(),
    {
      type: 1, // 1新增；2修改；3查看（表单模式） ；4查看； 5设计
      data: () => {
        return {
          list: [],
          form: {},
          config: {}
        }
      },
      dict: () => {
        return {}
      },
      isSearch: false,
      query: () => {
        return {}
      },
      params: () => {
        return {}
      }
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

  // 快速添加的提交按钮
  const defaultBtnList = computed(() => {
    const submitBtn = props.data.config?.submitCancel
    if (
      submitBtn === true ||
      (typeof submitBtn === 'object' && submitBtn?.length)
    ) {
      let submit = ''
      let cancel = ''
      if (typeof submitBtn === 'object') {
        submit = submitBtn[0]
        if (submitBtn.length > 1) {
          cancel = submitBtn[1]
        }
      }
      if (props.isSearch) {
        return [
          {
            label: submit || '查询',
            type: 'primary',
            key: 'submit',
            icon: 'Search'
          },
          {
            label: cancel || '清空',
            key: 'reset',
            icon: 'RefreshLeft'
          }
        ]
      } else {
        // 1新增；2修改；3查看（表单模式） ；4查看； 5设计
        if ([1, 2, 5].includes(props.type)) {
          return [
            { label: cancel || '取消', key: 'reset' },
            {
              label: submit || '确定',
              type: 'primary',
              key: 'submit'
            }
          ]
        } else {
          return [{ label: submit || '取消返回', key: 'cancel' }]
        }
      }
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
    if (props.btnClick) {
      // 可以return false阻止事件
      const result = props.btnClick(obj.key)
      if (result === false) {
        return
      }
    }
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
  }
  // 注册window事件
  const setWindowEvent = (bool?: boolean) => {
    if (props.data.list?.length > 0) {
      const formName = props.data.form?.name
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
          return getNameForEach(props.data.list, name)
        }
        // 根据name获取当前项的值
        // @ts-ignore
        window[getValueEvent] = (name: string) => {
          return model.value[name]
        }
      }
    }
  }
  const unWatch1 = watch(
    () => props.data.config,
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
  const model = ref({})
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
  const dictForm = computed(() => {
    const storage = getStorage('akAllDict', true)
    // 全局的、当前表单配置的以及接口返回的
    return Object.assign({}, storage || {}, props.dict, resultDict.value)
  })
  // 表单参数
  const formProps = computed(() => {
    return {
      model: model.value,
      type: props.type,
      hideField: props.data.config?.hideField as [],
      showColon: props.data.form?.showColon,
      dict: dictForm.value
    }
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
    } catch (e) {
      /* empty */
    }
  }
  //provide相关
  // 表单组件值改变事件 tProp为子表格相关
  provide(constControlChange, ({ key, value, data, tProp, label }: any) => {
    if (key) {
      if (!tProp) {
        // 表格和弹性布局不是这里更新，只触change
        model.value[key] = value
      }
      // 支持在线方式数据处理，如A组件值改变时，可自动修改B组件的值，可参考请假流程自动时长计算
      const onFormChange = props.data.events?.change
      if (typeof onFormChange === 'function') {
        const returnVal = onFormChange(key, model.value)
        if (returnVal && typeof returnVal === 'string') {
          model.value = formChangeValue(key, model.value, returnVal)
        } else if (typeof returnVal === 'object') {
          model.value = returnVal
        }
      }
      // 当表格和弹性内的字段和外面字段冲突时，可通过tProps区分
      emits('change', { key, value, model: model.value, data, tProp, label })
    }
  })
  // 一些表单相关参数
  provide(constFormProps, formProps)
  /**
   * 根据组件的name获取当前控件的相关信息
   * @param name
   */
  const getControlByName = (name: string) => {
    return getNameForEach(props.data.list, name)
  }
  provide(constGetControlByName, getControlByName)
  // 对表单选择项快速设置 defineExpose方法
  const setFormOptions = ref({})
  provide(constSetFormOptions, setFormOptions)
  const setOptions = (obj: { [key: string]: string[] }) => {
    setFormOptions.value = obj
  }
  // 表单设计中按钮组件的点击事件
  provide(constFormBtnEvent, defaultBtnClick)
  /**
   * 编辑时获取表单数据，外部调用并传入请求参数
   * @param params 一般情况下只需传一个id即可{id:xx}
   */
  const getData = (params = {}) => {
    const requestUrl = props.data.config?.requestUrl || props.requestUrl
    if (props.type === 5 || !requestUrl || props.isSearch) {
      console.error('执行了获取数据方法，但配置有误！')
      return
    }
    loading.value = true
    const newParams: any = Object.assign({}, params, props.query)
    // 同时可使用props或是events里的事件，根据使用使用其中一种即可
    requestResponse({
      requestUrl: requestUrl,
      params: newParams,
      beforeFetch: getRequestEvent(props, 'beforeFetch'),
      afterFetch: getRequestEvent(props, 'afterFetch'),
      route: route
    })
      .then((res: any) => {
        loading.value = false
        const result = res.data
        if (result) {
          const formatRes: any = result.result || result || {} //兼容两种返回格式
          // 这里尝试将string转obj以恢复提交保存时的转换
          const temp: any = {}
          for (const key in formatRes) {
            try {
              temp[key] = JSON.parse(formatRes[key])
            } catch (e) {
              temp[key] = formatRes[key]
            }
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
    const { submitUrl = props.submitUrl, editUrl = props.editUrl } =
      props.data.config || {}
    const apiUrl = props.type === 1 ? submitUrl : editUrl
    if (props.isSearch || !apiUrl || loading.value) {
      if (!props.isSearch && !apiUrl) {
        console.error(new Error('请配置表单提交submitUrl'))
      }
      // isSearch列表里作为筛选时，不提交表单
      return
    }
    validate((valid: boolean, fields: any) => {
      if (valid) {
        loading.value = true
        // 处理数据格式，将多选表格之类的转为字符串形式提交
        const temp: any = {}
        for (const key in fields) {
          if (typeof fields[key] === 'object') {
            temp[key] = JSON.stringify(fields[key])
          } else {
            temp[key] = fields[key]
          }
        }
        // 提交保存表单
        requestResponse({
          requestUrl: apiUrl,
          params: Object.assign({}, temp, params, props.params),
          beforeFetch: getRequestEvent(props, 'beforeSubmit'),
          afterFetch: getRequestEvent(props, 'afterSubmit')
        })
          .then((res: any) => {
            loading.value = false
            ElMessage.success(res.message || '保存成功！')
          })
          .catch(res => {
            //接口返回code!=1时已统一提示异常，这里不重复提示
            //接口返回正常，处理程序错误时，这里需提示下。这种情况没有code
            if (res.code === undefined) {
              ElMessage.error(res.message || '处理异常！')
            }
            loading.value = false
          })
      } else {
        // 没通过校验，这里单独处理，返回校验结果通知
        loading.value = false
        const submitEvent = getRequestEvent(props, 'afterSubmit')
        if (typeof submitEvent === 'function') {
          submitEvent('validate', fields)
        }
      }
    })
  }
  // ------------------------数据处理结束------------------------
  // 重置表单方法
  const resetFields = () => {
    ruleForm.value.resetFields()
  }
  onBeforeRouteLeave(() => {
    unWatch1() //销毁监听器
    unWatch2() //销毁监听器
  })

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
