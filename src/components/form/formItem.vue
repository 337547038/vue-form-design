<!-- Created by 337547038 on 2021/9/27. -->
<template>
  <el-form-item
    v-bind="data.formItem"
    :prop="tProp || data.name"
    :class="config.className"
    :rules="itemRules as any"
    :label="getLabel(data.formItem as FormItem)"
  >
    <template #label v-if="config.help">
      {{ getLabel(data.formItem) }}
      <Tooltip :content="config.help" />
    </template>
    <div class="form-value" v-if="type === 4" v-html="value"></div>
    <template v-else>
      <el-input
        v-bind="control"
        v-model="value"
        :disabled="disabledEdit"
        :type="inputType as any"
        v-if="['input', 'password'].includes(data.type)"
      >
        <template #prepend v-if="config.prepend">
          <div v-if="getInputSlot('p')">
            <AKSelect
              :data="getInputSlot('p')"
              :disabled="disabledEdit"
              :transform-option="transformOption"
              @change="inputSlotChange"
              type="slot"
            />
          </div>
          <span v-else>{{ config.prepend }}</span>
        </template>
        <template #append v-if="config.append">
          <div v-if="getInputSlot()">
            <AKSelect
              :data="getInputSlot()"
              :disabled="disabledEdit"
              :transform-option="transformOption"
              type="slot"
              @change="inputSlotChange"
            />
          </div>
          <span v-else>{{ config.append }}</span></template
        >
      </el-input>
      <el-input
        v-bind="control"
        v-model="value"
        :disabled="disabledEdit"
        type="textarea"
        v-if="data.type === 'textarea'"
      />
      <el-radio-group
        v-bind="control"
        :disabled="disabledEdit"
        v-model="value"
        v-if="data.type === 'radio'"
      >
        <el-radio
          :key="index"
          :label="transformOption(item.value) as string"
          v-for="(item, index) in options"
        >
          {{ item.label }}
        </el-radio>
      </el-radio-group>
      <el-checkbox-group
        v-bind="control"
        :disabled="disabledEdit"
        v-model="value"
        v-if="data.type === 'checkbox'"
      >
        <el-checkbox
          v-for="(item, index) in options"
          :key="index"
          :label="transformOption(item.value)"
          >{{ item.label }}
        </el-checkbox>
      </el-checkbox-group>
      <AKSelect
        v-if="
          data.type === 'select' || (type === 5 && data.type === 'inputSlot')
        "
        :data="data"
        :disabled="disabledEdit"
        v-model="value"
        :options="options"
        :remote-method="getAxiosOptions"
        :transformOption="transformOption"
      />
      <upload-file
        v-model="value"
        v-if="data.type === 'upload'"
        :control="control"
        :disabled="disabledEdit"
        :config="config"
      />
      <chunk-upload
        v-if="data.type === 'chunkUpload'"
        v-model="value"
        :control="control as any"
        :disabled="disabledEdit"
        :config="config as any"
      />
      <component
        v-if="['cascader', 'treeSelect'].includes(data.type)"
        :is="currentComponent"
        v-bind="control"
        :disabled="disabledEdit"
        :options="options"
        v-model="value"
      />
      <component
        v-if="
          [
            'rate',
            'slider',
            'switch',
            'inputNumber',
            'colorPicker',
            'timePicker',
            'datePicker',
            'component',
            'expand-user'
          ].includes(data.type)
        "
        :is="currentComponent"
        v-bind="control"
        :disabled="disabledEdit"
        v-model="value"
      />
      <template v-if="data.type === 'tinymce'">
        <!--  设计模式时拖动会出现异常，设计模式暂用图片代替-->
        <tinymce-edit
          v-bind="control"
          :config="config"
          :disabled="disabledEdit"
          v-model="value"
          v-if="[1, 2, 3].includes(type as number)"
        />
        <img
          alt=""
          src="./tinymce.png"
          v-if="type === 5"
          style="max-width: 100%"
        />
      </template>
    </template>
  </el-form-item>
</template>

<script lang="ts" setup>
  import {
    inject,
    onMounted,
    computed,
    watch,
    ref,
    onUnmounted,
    markRaw
  } from 'vue'
  import { onBeforeRouteLeave } from 'vue-router'
  import SparkMD5 from 'spark-md5'
  import Tooltip from '../tooltip/index.vue'
  import TinymceEdit from './tinymce.vue'
  import { FormItem, FormList } from '@/types/form'
  import {
    formatNumber,
    objectToArray,
    constControlChange,
    constSetFormOptions,
    constFormProps,
    constGetControlByName
  } from '@/utils/design'
  import validate from './validate'
  import ExpandUser from './expand/user.vue'
  import AKSelect from './select.vue'
  import { useRoute } from 'vue-router'
  import { debounce } from '@/utils'
  import { useDesignStore } from '@/store/design'
  import UploadFile from './upload.vue'
  import ChunkUpload from './chunkUpload/index.vue'
  import { requestResponse } from '@/utils/requestResponse.ts'

  const props = withDefaults(
    defineProps<{
      data: FormList
      modelValue?: any // 子表和弹性布局时时有传
      tProp?: string // 子表时的form-item的prop值，用于子表校验用
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', val: any): void
  }>()
  const designStore = useDesignStore()
  const route = useRoute()
  const formProps = inject(constFormProps, {}) as any
  const inputType = computed(() => {
    return props.data.type === 'password' ? 'password' : 'text'
  })
  const type = computed(() => {
    return formProps.value.type
  })
  const config = computed(() => {
    return props.data.config || {}
  })
  // const control = ref(props.data.control)
  const control = computed(() => {
    return props.data.control
  })
  const options = ref(props.data.options)
  const changeEvent = inject(constControlChange, '') as any
  const updateModel = (val: any) => {
    // select时同时返回label的值，暂只处理单选
    let label = {}
    if (props.data.type === 'select') {
      options.value.forEach((item: any) => {
        if (val.toString() === item.value.toString()) {
          label = { label: item.label }
        }
      })
    }
    changeEvent &&
      changeEvent({
        key: props.data.name,
        value: val,
        data: props.data,
        tProp: props.tProp,
        ...label
      })
  }
  const value = computed({
    get() {
      if (props.tProp) {
        // 表格和弹性布局
        return props.modelValue
      } else {
        return formProps.value.model[props.data.name]
      }
    },
    set(newVal: any) {
      if (props.tProp) {
        emits('update:modelValue', newVal)
      }
      updateModel(newVal)
    }
  })
  // 选择数据转换，默认尝试转数字
  const transformOption = (val: string | number, type?: string) => {
    switch (config.value.transformData || type) {
      case 'none':
        return val
      case 'string':
        try {
          return val.toString()
        } catch (e) {
          return val
        }
    }
    return formatNumber(val)
  }

  // 当通用修改属性功能添加新字段时，数组更新但toRefs没更新
  const getControlByName = inject(constGetControlByName) as any
  const sourceFunKey = computed(() => {
    const iReg = new RegExp('(?<=\\${)(.*?)(?=})', 'g')
    //const iReg = new RegExp('\\${.*?}', 'g') // 结果会包含开头和结尾=>${name}
    const apiUrl = config.value.optionsFun
    const replace = apiUrl?.match(iReg)
    if (replace?.length) {
      return replace[0]
    }
    return ''
  })
  const getLabel = (ele: FormItem) => {
    const showColon = formProps.value.showColon ? '：' : ''
    if (ele) {
      return ele.hideLabel ? '' : ele.label + showColon
    } else {
      return ''
    }
  }
  const currentComponent = computed(() => {
    if (props.data.type === 'component') {
      // 自定义组件
      return config.value.componentName
    }
    if (props.data.type === 'expand-user') {
      return markRaw(ExpandUser)
    }
    return `el-${props.data.type}`
  })
  // 控制编辑模式下是否可用
  const disabledEdit: boolean = computed(() => {
    if (type.value === 3) {
      return true // 查看模式，为不可编辑状态
    }
    if (type.value === 2 && config.value.disabledEdit) {
      return true // 编辑模式设置了禁用
    }
    // 使用了禁用条件表达式
    const configDisabled = config.value?.disabled
    if (configDisabled) {
      const Fn = new Function('$', `return (${configDisabled})`)
      const pass = Fn(formProps.value.model) // pass=true满足条件隐藏
      if (pass) {
        return pass
      }
    }
    return control.value.disabled || false
  })
  // 返回当前item项的校验规则
  const itemRules = computed(() => {
    let temp
    const itemR: any = props.data.formItem?.rules || []
    const customR = formatCustomRules()
    // 如果三个都没有设置，则返回undefined
    if (itemR?.length || customR?.length) {
      temp = [...customR, ...itemR]
    }
    return temp
  })
  // data 根据条件搜索，select远程搜索里data有值
  const getAxiosOptions = debounce((data = {}) => {
    const {
      optionsType,
      optionsFun,
      method = 'post',
      afterFetch,
      beforeFetch,
      label,
      value,
      query = {},
      debug // =true可用于调试，不缓存
    } = config.value
    if (optionsType !== 0) {
      let sourceFun = optionsFun
      // 接口数据源
      if (optionsType === 1 && sourceFun) {
        // 当前控件为动态获取数据，防多次加载，先从本地取。data=true时直接请求
        const newData = Object.assign({}, data, query)
        const spark = new SparkMD5()
        spark.append(sourceFun + data)
        const key = spark.end()
        const ajaxCache = designStore.getFormAjaxCache(key)
        if (ajaxCache && !debug) {
          if (props.data.type === 'treeSelect') {
            control.value.data = ajaxCache
          } else {
            options.value = ajaxCache
          }
        } else {
          // 从url里提取一个动态值,${name}形式提取name
          if (sourceFunKey.value) {
            const val = formProps.value.model[sourceFunKey.value]
            const string = '${' + sourceFunKey.value + '}'
            sourceFun = sourceFun.replace(string, val)
          }
          requestResponse({
            requestUrl: sourceFun,
            params: newData,
            beforeFetch: beforeFetch,
            afterFetch: afterFetch,
            options: { method: method },
            route: route,
            formModel: formProps.value.model
          })
            .then((res: any) => {
              const result = res.data.list || res.data
              let formatRes: any = result
              // 这里做数据转换，很多时候后端并不能提供完全符合且一样的数据
              if (!afterFetch && (label || value)) {
                // 没有设置afterFetch时，这里将数据转换为[{label:'',value:''}]形式。只处理一级
                formatRes = []
                result.forEach((item: any) => {
                  formatRes.push({
                    label: item[label] || item.label,
                    value: item[value] || item.value
                  })
                })
              }
              // console.log('formatRes', formatRes)
              if (props.data.type === 'treeSelect') {
                control.value.data = formatRes
              } else {
                options.value = formatRes
              }
              if (typeof formatRes === 'object') {
                designStore.setFormAjaxCache(key, formatRes) //缓存，例如子表添加时不用每添加一行就请求一次
              }
            })
            .catch((res: any) => {
              if (props.data.type === 'treeSelect') {
                control.value.data = []
              } else {
                options.value = []
              }
              console.log(res)
            })
        }
      }
      setFormDict(formProps.value.dict) // 表格里新增时行时需要重新设一次
    }
  })
  const unWatch1 = sourceFunKey.value
    ? watch(
        () => formProps.value.model[sourceFunKey.value],
        () => {
          getAxiosOptions()
        }
      )
    : null
  // 处理自定义校验规则，将customRules转换后追加到rules里
  const formatCustomRules = () => {
    const rulesList = props.data.customRules
    if (!rulesList || rulesList?.length === 0) {
      return []
    }
    const rulesReg: any = {}
    validate &&
      validate.forEach(item => {
        rulesReg[item.type] = item.regExp
      })

    // 获取校验方法 父级使用provide方法注入
    const temp: any = []
    rulesList.forEach((item: any) => {
      if (!item.message && item.type !== 'methods') {
        return // 方法时允许提示信息为空
      }
      let obj = {}
      if (item.type === 'required') {
        obj = { required: true }
      } else if (item.type === 'rules') {
        // 自定义表达式
        obj = { pattern: item.rules }
      } else if (item.type === 'methods') {
        // 方法时
        const methods: any = item.methods
        if (methods) {
          obj = { validator: inject(methods, {}) }
        }
      } else if (item.type) {
        obj = { pattern: rulesReg[item.type as string] }
      }
      // 这里判断下防某些条件下重复push的可能或存重复校验类型
      let message: any = { message: item.message }
      if (!item.message) {
        // 当使用validator校验时，如果存在message字段则不能使用 callback(new Error('x'));的提示
        message = {}
      }
      temp.push(
        Object.assign(
          {
            trigger: item.trigger || 'blur'
          },
          obj,
          message
        )
      )
    })
    return temp
  }
  // 从数据接口获取数据设置options，在表单添加或编辑时数据加载完成
  const setFormDict = (val: any) => {
    if (val && config.value.optionsType === 2) {
      const opt = val[config.value.optionsFun] || val[props.data.name] // 不填写默认为当前字段名
      if (opt !== undefined) {
        options.value = objectToArray(opt)
      }
    }
  }
  // 从接口返回的dict会在这里触发
  const unWatch2 = watch(
    () => formProps.value.dict,
    (val: any) => {
      setFormDict(val)
    },
    {
      deep: true
    }
  )
  // 对单选多选select设置options
  const formOptions = inject(constSetFormOptions, {}) as any
  const unWatch3 = watch(
    () => formOptions.value,
    (val: any) => {
      const opt = val[props.data.name]
      // 子表内的需要注意下，只有在子表有记录时才生效
      if (val && opt !== undefined) {
        if (props.data.type === 'treeSelect') {
          // 树结构的参数为data
          control.value.data = objectToArray(opt)
        } else {
          options.value = objectToArray(opt)
        }
      }
    }
  )

  /****input slot处理***/
  const getInputSlot = (key?: string) => {
    const slot = key === 'p' ? config.value.prepend : config.value.append
    const has = slot.indexOf('key:') === 0
    if (!has) {
      return false
    }
    const slotKey = slot.replace('key:', '')
    const control = getControlByName(slotKey)
    if (!control || Object.keys(control)?.length === 0) {
      return false
    }
    return control
  }
  const inputSlotChange = (val: string | number, name: string) => {
    changeEvent &&
      changeEvent({
        key: name,
        value: val,
        data: {},
        tProp: ''
      })
  }
  onBeforeRouteLeave(() => {
    unWatch1 && unWatch1() //销毁监听器
    unWatch2()
    unWatch3()
  })

  onMounted(() => {
    getAxiosOptions()
  })
  onUnmounted(() => {})
</script>
