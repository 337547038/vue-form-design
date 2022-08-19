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
      <!--eslint-disable-next-line vue/no-mutating-props-->
      <form-group v-model:data="formData.list" />
      <slot></slot>
      <div v-if="confirmBtn || cancelBtn" style="height: auto">
        <el-button type="primary" v-if="confirmBtn" @click="submit">{{
          confirmBtn
        }}</el-button>
        <el-button v-if="cancelBtn" @click="$router.go(-1)">{{
          cancelBtn
        }}</el-button>
      </div>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
  import FormGroup from './formGroup.vue'
  import { computed, ref, watch, onUnmounted, onMounted, nextTick } from 'vue'
  import type { FormData, FormList } from '../types'
  import { useDesignFormStore } from '@/store/designForm'
  import { getRequest } from '@/api'
  import { useRoute, useRouter } from 'vue-router'
  import { ElMessage } from 'element-plus'

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
      requestUrl: 'getFormContent',
      submitUrl: 'saveFormContent'
    }
  )
  const route = useRoute()
  const router = useRouter()
  const storeForm = useDesignFormStore()
  const loading = ref(false)
  const hasLoadData = ref(false) // 用于表示是否已加载过表单数据了
  const confirmBtn = computed(() => {
    return props.formData.config?.submitBtn?.confirm
  })
  const cancelBtn = computed(() => {
    return props.formData.config?.submitBtn?.cancel
  })
  // 添加数据时是否从接口获取初始数据
  const addLoad = computed(() => {
    return props.formData.config?.addLoad
  })

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
    state.rulesComm = props.formData.config?.rulesComm as []
    state.hideField = props.formData.config?.hideField as []
  })
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
  // 对表单设置初始值
  const setValue = (obj: { [key: string]: any }) => {
    storeForm.setFormValue(obj)
  }
  // 对表单选择项快速设置
  const setOptions = (obj: { [key: string]: string[] }) => {
    storeForm.setFormOptions(obj)
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
  // ---------数据处理开始，也可以外部请求到数据使用setValue方式（导出vue文件时）-----------
  // 获取表单初始数据，加载条件还需要是接收到的参数id，即编辑状态
  // 设置了addLoad时，没有id也从接口获取新增时的初始数据或是dict数据
  const getFormData = () => {
    if (
      props.formData?.list?.length &&
      props.requestUrl !== false &&
      hasLoadData.value === false &&
      (route.query.id || addLoad.value)
    ) {
      loading.value = true
      hasLoadData.value = true
      let prams = {
        tid: route.query.tid,
        id: route.query.id
      }
      if (typeof props.beforeRequest === 'function') {
        prams = props.beforeRequest(prams)
      }
      getRequest(props.requestUrl as string, prams).then((res) => {
        // console.log(res)
        let result = res.data.data
        if (result) {
          let value = result.data
          if (typeof props.afterResponse === 'function') {
            value = props.afterResponse(result.data)
          }
          setValue(value)
          // 将dict保存
          storeForm.setFormDict(result.dict)
        }
        loading.value = false
      })
    }
  }
  const submit = () => {
    if (
      confirmBtn.value &&
      props.submitUrl !== false &&
      loading.value === false
    )
      validate((valid: boolean, fields: any) => {
        // console.log(fields)
        if (valid) {
          loading.value = true
          let params = {
            tid: route.query.tid,
            id: route.query.id,
            // ...formEl.value.getValue()
            fields
          }
          if (typeof props.beforeSubmit === 'function') {
            params = props.beforeSubmit(params)
          }
          // 提交保存表单
          getRequest(props.submitUrl as string, params)
            .then((res: any) => {
              if (typeof props.afterSubmit === 'function') {
                props.afterSubmit(res)
              } else {
                ElMessage.success(res.data || '保存成功')
                router.push({ path: '/designform/list' })
              }
              loading.value = false
            })
            .catch((res) => {
              loading.value = false
              ElMessage.error(res.data || '保存失败')
            })
        }
      })
  }
  // onMounted时formData不一定有值，这里当监听到变化时，如果没加载过再请求一次
  watch(
    () => props.formData,
    () => {
      getFormData()
    }
  )
  // 表单初始值
  watch(
    () => props.value,
    (v) => {
      v && setValue(v)
    }
  )
  // 表单options
  watch(
    () => props.options,
    (v) => {
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
