<template>
  <el-form
    v-bind="formProps"
    ref="formRef"
    v-loading="loading"
    class="ak-form"
    :model="model"
    :disabled="disabled || operateType === 'detail'"
    :class="getFormCls"
    :hide-required-asterisk="operateType === 'detail'"
  >
    <design-form
      v-if="['designForm','designSearch','designFlow'].includes(operateType)"
      :data="data.list"
    />
    <template v-else>
      <component-factory
        v-for="(element,index) in data.list"
        :key="index"
        :element="element"
        @btn-click="defaultBtnClick"
        @change="componentChange"
      />
    </template>
    <slot />
    <div
      v-if="defaultBtnList.length"
      class="submit-btn-group"
    >
      <el-button
        v-for="item in defaultBtnList"
        :key="item.key"
        v-bind="item"
        @click="defaultBtnClick(item.key)"
      >
        {{ item.label }}
      </el-button>
    </div>
  </el-form>
</template>
<script setup lang="ts">
  import type {Component, FormData} from "@/types/designForm";
  import {computed, nextTick, onMounted, onUnmounted, ref, watch} from "vue";
  import {ElMessage} from "element-plus";
  import {useRouter, onBeforeRouteLeave} from 'vue-router'
  import DesignForm from './design.vue'
  import {jsonParseStringify} from "@/utils/design";
  import {useFormStore} from '@/store/form'
  import {getNameForEach} from "./utils";
  import ComponentFactory from "@/components/form/componentFactory.vue";
  import {beforeAfter, getRequestEvent} from "@/utils/beforeAfter.ts";
  import {loadResource, removeResource} from "@/utils";
  import type {FormValueChange} from "@/types/designForm.ts";

  defineOptions({name: 'AkForm'})
  const props = withDefaults(
    defineProps<{
      data: FormData
      disabled?: boolean // 禁用表单提交
      before?: (params: Record<string, any>, obj: any) => any // 请求编辑数据前参数处理方法，可对请求参数处理
      after?: (res: Record<string, any>, success: boolean, type: string) => any // 请求数据加载完成后数据处理方法，可对返回数据处理
      query?: { [key: string]: any } // 一些附加的请求参数。也可在`before`处添加
      params?: { [key: string]: any } // 提交表单一些附加参数
      submitUrl?: string // 表单提交url
      requestUrl?: string // 用于回显填充数据请求数据url
      // add/edit用于根据当前类型显示或禁用相关组件操作。design**设计模式。detail用于详情页查看。search用于列表上方条件筛选
      operateType?: 'add' | 'edit' | 'designForm' | 'detail' | 'search' | 'designSearch' | 'designFlow'
    }>(),
    {
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
      e: 'change', obj: FormValueChange
    ): void
  }>()

  const store = useFormStore()
  const router = useRouter()
  const formRef = ref()
  const formProps = computed(() => {
    const {config = {}} = props.data
    return Object.assign({}, config.props || {}, {size: config.size, labelWidth: config.labelWidth})
  })
  const getFormCls = computed(() => {
    switch (props.operateType) {
      case 'designForm':
        return 'ak-design ak-form-design'
      case 'designFlow':
        return 'ak-design ak-form-flow'
      case 'designSearch':
        return 'ak-design ak-form-search'
    }
    return `ak-form-${props.operateType}`
  })
  const loading = ref(false)
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
      } else if (['add', 'edit', 'designForm'].includes(props.operateType)) {
        return [
          {
            label: '确定',
            type: 'primary',
            key: 'submit'
          },
          {label: '取消', key: 'reset'}
        ]
      } else {
        return [{label: '取消返回', key: 'cancel'}]
      }
    } else if (typeof submitBtn === 'object' && submitBtn?.length) {
      return submitBtn
    } else {
      return []
    }
  })
  const defaultBtnClick = (key: string) => {
    emits('btnClick', key)
    if (!['add', 'edit', 'search'].includes(props.operateType)) {
      return ElMessage.error('当前模式不能提交表单')
    }
    switch (key) {
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
  // 表单组件值改变时
  const componentChange = (obj: FormValueChange) => {
    const {change} = props.data.config
    if (typeof change === 'function') {
      const newValue = change(obj)
      if (newValue && typeof newValue === 'string') {
        console.log('change 钩子返回字符串标识，暂不处理:');
      } else if (typeof newValue === 'object') {
        model.value = newValue
      }
    }
    // 合并修改后的model
    emits('change', Object.assign(obj, model.value))
  }
  const model = ref({})
  // 从表单数据里提取表单所需的model
  const forEachGetFormModel = (list: Component[]) => {
    list.forEach((item: any) => {
      if (['table', 'flex'].includes(item.type)) {
        model.value[item.name] = jsonParseStringify(item.tableData)
      } else if (['grid', 'tabs'].includes(item.type)) {
        item.columns.forEach((col: any) => {
          forEachGetFormModel(col.list)
        })
      } else if (['card', 'div'].includes(item.type)) {
        forEachGetFormModel(item.list)
      } else {
        const excludeType = ['title', 'divider', 'txt', 'button']
        if (excludeType.indexOf(item.type) === -1) {
          model.value[item.name] = jsonParseStringify(item.control.modelValue)
        }
      }
    })
  }
  // 注册window事件
  let eventName = ''
  let getValueEvent = ''
  const setWindowEvent = () => {
    const {list, config} = props.data
    if (list?.length > 0 && config?.key) {
      eventName = `get${config?.key}ControlByName`;
      getValueEvent = `get${config?.key}ValueByName`;
      // 根据name获取当前数据项
      (window as any)[eventName] = (name: string) => {
        return getNameForEach(props.data.list, name)
      }
      // 根据name获取当前项的值
      (window as any)[getValueEvent] = (name: string) => {
        return model.value[name]
      }
    }
  }
  const unWatch = watch(
    () => props.data.list,
    () => {
      console.log('watch list')
      // data从接口获取时
      const {list, config} = props.data
      forEachGetFormModel(list)
      store.setFormValue(model.value)
      if (config.style) {
        loadResource(config.style, 'form-style')
      }
      setWindowEvent()
    },
    {immediate: true}
  )
  //====================提供的方法
  /**
   * 设置表单选项的option值，setOptions({select:[{label:'',value:''}]})
   * @param obj
   */
  const setOptions = (obj: { [key: string]: string[] }) => {
    store.setFormOptions(obj)
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
   * 提供一个取值的方法，外部引用
   * @param filter true只返回非空值
   */
  const getValue = (filter?: boolean) => {
    if (!filter) return jsonParseStringify(model.value);
    return Object.entries(model.value).reduce((acc: any, [key, val]) => {
      // 过滤：null / undefined / 空字符串 / 纯空格
      if (val != null && !(typeof val === 'string' && val.trim() === '')) {
        acc[key] = val;
      }
      return acc;
    }, {});
  }
  /**
   * 表单校验方法，也可以外部使用
   * @param callback
   */
  const validate = (callback: any) => {
    formRef.value.validate((valid: boolean, fields: any) => {
      let fieldValue = fields
      if (valid) {
        // 校验通过，返回当前表单的值
        fieldValue = getValue()
      }
      callback(valid, fieldValue)
    })
  }
  const getData = (params = {}) => {
    const requestUrl = props.data.requestUrl || props.requestUrl
    if (!['add', 'edit', 'detail'].includes(props.operateType)) {
      console.error('当前模式不能请求数据！')
      return
    }
    if (!requestUrl) {
      console.error('请配置获取表单数据接口！')
      return
    }
    loading.value = true
    const newParams: any = Object.assign({}, params, props.query)
    const {config: {before, after, transformData}} = props.data
    beforeAfter({
      apiKey: requestUrl,
      params: newParams,
      before: [props.before, before],
      after: [props.after, after],
      route: {},//后面处理返回路由todo,
      type: 'fetch'
    })
      .then((res: any) => {
        loading.value = false
        const result = res.data
        if (result) {
          const formatRes: any = result.result || result || {} // 兼容两种返回格式
          // 这里尝试将string转obj以恢复提交保存时的转换
          let temp: any = {}
          if (transformData) {
            for (const key in formatRes) {
              try {
                temp[key] = JSON.parse(formatRes[key])
              } catch (e) {
                temp[key] = formatRes[key]
              }
            }
          } else {
            temp = formatRes
          }
          setValue(temp)
        }
      })
      .catch(() => {
        loading.value = false
      })
  }
  const submit = (params = {}) => {
    const apiUrl: string | undefined = props.submitUrl || props.data.submitUrl
    if (!['add', 'edit'].includes(props.operateType) || loading.value) {
      return // 只有add/edit允许提交表单，其他不提交表单
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
        if (props.data.transformData) {
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
        const {config: {before, after}} = props.data
        beforeAfter({
          apiKey: apiUrl,
          params: Object.assign({}, temp, params, props.params),
          before: [props.before, before],
          after: [props.after, after],
          type: 'submit',
          route: {},//后面处理返回路由todo
          formModel: model.value,
        })
          .then((res: any) => {
            loading.value = false
            ElMessage.success(res.message || '操作成功！')
          })
          .catch((res) => {
            console.log('catch', res)
            // 接口返回code!=1时已统一提示异常，这里不重复提示
            loading.value = false
          })
      } else {
        // 没通过校验，这里单独处理，返回校验结果通知
        loading.value = false
        const submitEvent = getRequestEvent(props, 'after')
        if (typeof submitEvent === 'function') {
          submitEvent(fields, false, 'validate')
        }
      }
    })
  }
  const resetFields = () => {
    formRef.value.resetFields()
  }
  onMounted(() => {
    store.setDesignType(props.operateType)
    store.setDesignDataConfig(props.data)
  })
  onUnmounted(() => {
    removeResource('form-style')
  })
  onBeforeRouteLeave(() => {
    unWatch()
    // unWatchEvent()
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
