<!-- Created by 337547038 on 2021/9/27. -->
<template>
  <el-form-item
    v-bind="data.item"
    :prop="tProps || data.name"
    :class="config.className"
    :rules="itemRules"
    :label="getLabel(data.item)"
  >
    <template #label v-if="config.help">
      {{ getLabel(data.item) }}
      <Tooltip :content="config.help" />
    </template>
    <div class="form-value" v-if="type === 3" v-html="value"></div>
    <template v-else>
      <el-input
        v-bind="control"
        v-model="value"
        :disabled="editDisabled"
        :type="data.type === 'password' ? 'password' : ''"
        v-if="['input', 'password'].includes(data.type)"
      >
        <template #prepend v-if="config.prepend">
          <div v-if="getInputSlot(config.prepend, 'vIf')">
            <AKSelect
              :control="getInputSlot(config.prepend, 'control')"
              :disabled="editDisabled"
              :modelValue="getInputSlot(config.prepend, 'value')"
              :options="getInputSlot(config.prepend, 'options')"
              :config="getInputSlot(config.prepend, 'config')"
              :format-number="formatNumber"
              type="slot"
              @change="inputSlotChange"
            />
          </div>
          <span v-else>{{ config.prepend }}</span>
        </template>
        <template #append v-if="config.append">
          <div v-if="getInputSlot(config.append, 'vIf')">
            <AKSelect
              :control="getInputSlot(config.append, 'control')"
              :disabled="editDisabled"
              :modelValue="getInputSlot(config.append, 'value')"
              :options="getInputSlot(config.append, 'options')"
              :config="getInputSlot(config.append, 'config')"
              :format-number="formatNumber"
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
        :disabled="editDisabled"
        type="textarea"
        v-if="data.type === 'textarea'"
      />
      <el-radio-group
        v-bind="control"
        :disabled="editDisabled"
        v-model="value"
        v-if="data.type === 'radio'"
      >
        <el-radio
          :key="index"
          :label="formatNumber(item.value)"
          v-for="(item, index) in options"
        >
          {{ item.label }}
        </el-radio>
      </el-radio-group>
      <el-checkbox-group
        v-bind="control"
        :disabled="editDisabled"
        v-model="value"
        v-if="data.type === 'checkbox'"
      >
        <el-checkbox
          v-for="(item, index) in options"
          :key="index"
          :label="formatNumber(item.value)"
          >{{ item.label }}</el-checkbox
        >
      </el-checkbox-group>
      <AKSelect
        v-if="
          data.type === 'select' || (type === 4 && data.type === 'inputSlot')
        "
        :control="control"
        :disabled="editDisabled"
        v-model="value"
        :options="options"
        :config="config"
        :formatNumber="formatNumber"
      />
      <el-upload
        class="upload-style"
        v-if="data.type === 'upload'"
        v-bind="control"
        :disabled="editDisabled"
        :class="{
          limit: control.limit <= control.modelValue.length
        }"
        :on-success="uploadSuccess"
        :on-remove="uploadRemove"
        :on-error="uploadError"
      >
        <el-button type="primary" v-if="config.btnText"
          >{{ config.btnText }}
        </el-button>
        <i class="icon-plus" v-else></i>
        <template #tip v-if="config.tip">
          <div class="el-upload__tip">
            {{ config.tip }}
          </div>
        </template>
      </el-upload>

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
            'cascader',
            'component'
          ].includes(data.type)
        "
        :is="currentComponent"
        v-bind="control"
        :disabled="editDisabled"
        :options="options"
        v-model="value"
      />
      <template v-if="data.type === 'tinymce'">
        <!--  设计模式时拖动会出现异常，设计模式暂用图片代替-->
        <tinymce-edit
          v-bind="control"
          :config="config"
          :disabled="editDisabled"
          v-model="value"
          v-if="type === 1 || type === 2"
        />
        <img
          alt=""
          src="./tinymce/img.png"
          v-if="type === 4"
          style="max-width: 100%"
        />
      </template>
      <div
        v-bind="data.control"
        v-if="data.type === 'txt'"
        v-html="value"
      ></div>
    </template>
  </el-form-item>
</template>

<script lang="ts" setup>
  import axios from '@/utils/request'
  import { inject, onMounted, computed, watch, ref, onUnmounted } from 'vue'
  import md5 from 'md5'
  import { ElMessage } from 'element-plus'
  import Tooltip from './tooltip.vue'
  import TinymceEdit from './tinymce/index.vue'
  import { FormItem, FormList } from '../types'
  import { formatNumber } from './utils'
  import validate from './validate'
  import {
    constFormDict,
    constControlChange,
    constSetFormOptions,
    constSetFormValue,
    constFormOtherData,
    constGetControlByName
  } from './utils'
  import AKSelect from './select.vue'

  const props = withDefaults(
    defineProps<{
      data: FormList
      modelValue?: null
      tProps?: string // 子表时的form-item的prop值，用于子表校验用
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', val: string): void
  }>()
  // const store = useDesignFormStore()
  const injectData = inject(constFormOtherData, {}) as any
  const type = computed(() => {
    return injectData.type
  })
  // const { config, control, options = ref([]) } = toRefs(props.data)
  const config = ref(props.data.config)
  const control = ref(props.data.control)
  const options = ref(props.data.options)
  const value = ref(props.modelValue)
  watch(
    () => props.modelValue,
    () => {
      value.value = props.modelValue
    }
  )
  watch(
    () => props.data,
    (val: FormList) => {
      config.value = val.config || {}
      control.value = val.control || {}
      options.value = val.options || []
    },
    {
      /*deep: true */
    }
  )
  // 当通用修改属性功能添加新字段时，数组更新但toRefs没更新
  const getControlByName = inject(constGetControlByName) as any
  const sourceFunKey = computed(() => {
    const iReg = new RegExp('(?<=\\${)(.*?)(?=})', 'g')
    //const iReg = new RegExp('\\${.*?}', 'g') // 结果会包含开头和结尾=>${name}
    const apiUrl = config.value.sourceFun
    const replace = apiUrl?.match(iReg)
    return replace && replace[0]
  })
  const getLabel = (ele: FormItem) => {
    if (ele) {
      return ele.showLabel ? '' : ele.label
    } else {
      return ''
    }
  }
  const currentComponent = computed(() => {
    if (props.data.type === 'component') {
      // 自定义组件
      return config.value.componentName
    }
    return `el-${props.data.type}`
  })
  // 控制编辑模式下是否可用
  const editDisabled = computed(() => {
    if (type.value === 2) {
      return true // 查看模式，为不可编辑状态
    }
    if (type.value === 1 && injectData.isEdit && config.value.editDisabled) {
      // 新增模式 编辑模式
      return true
    }
    return control.value.disabled
  })
  // 返回当前item项的校验规则
  const itemRules = computed(() => {
    let temp = undefined
    const itemR: any = props.data.item?.rules || []
    const customR = formatCustomRules()
    // 如果三个都没有设置，则返回undefined
    if (itemR?.length || customR?.length) {
      temp = [...customR, ...itemR]
    }
    return temp
  })
  // 有inject，这方法不能放异步
  const getAxiosOptions = () => {
    if (config.value.type === 'async') {
      let sourceFun = config.value.sourceFun
      if (config.value.source === 1 && sourceFun) {
        // 使用动态选项方法函数获取options数据项，父级使用provide方法注入
        options.value = inject(sourceFun, [])
      }
      if (config.value.source === 0 && sourceFun) {
        // 当前控件为动态获取数据
        const key = 'getOptions_fun_' + md5(sourceFun)
        const storage = window.sessionStorage.getItem(key)
        if (storage) {
          options.value = JSON.parse(storage)
        } else {
          // 从url里提取一个动态值,${name}形式提取name
          if (sourceFunKey.value) {
            const control = getControlByName(sourceFunKey.value)
            const val = control?.control.modelValue
            const string = '${' + sourceFunKey.value + '}'
            sourceFun = sourceFun.replace(string, val)
          }
          // request.get('url',data)
          ;(axios as any)
            [config.value.request](sourceFun, '')
            .then((res: any) => {
              if (res.data.code === 200) {
                // 请求成功
                options.value = res.data.data
                window.sessionStorage.setItem(
                  key,
                  JSON.stringify(res.data.data)
                ) //缓存，例如子表添加时不用每添加一行就请求一次
              }
            })
            .catch((res: any) => {
              console.log(res)
            })
        }
      }
    }
  }
  watch(
    () => injectData.model.value[sourceFunKey.value],
    () => {
      getAxiosOptions()
      // todo 需要优化下，每次改变都会请求一次，但方法内有inject又不能放异步处理
    }
  )
  // 处理自定义校验规则，将customRules转换后追加到rules里
  const formatCustomRules = () => {
    const rulesReg: any = {}
    validate &&
      validate.forEach((item) => {
        rulesReg[item.type] = item.regExp
      })

    // 获取校验方法 父级使用provide方法注入
    const temp: any = []
    props.data.customRules?.forEach((item: any) => {
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
  // 将{key:value}转[{label:'key',value:'value'}]
  const formatData = (obj: any) => {
    if (Object.prototype.toString.call(obj) === '[object Object]') {
      const temp: any = []
      for (const key in obj) {
        temp.push({
          label: obj[key],
          value: key
        })
      }
      return temp
    }
    return obj
  }
  // 为改变事件提供方法
  const changeEvent = inject(constControlChange, '') as any
  watch(
    () => value.value,
    (val: any) => {
      emits('update:modelValue', val)
      // control.value.modelValue = val
      changeEvent &&
        changeEvent({ key: props.data.name, value: val, data: props.data })
    }
  )
  // 执行表单的setValue方法，对组件设值
  const setValueEvent = inject(constSetFormValue, {}) as any
  watch(
    () => setValueEvent.value,
    (val: any) => {
      // console.log(val)
      // !props.tProps 的这里不单独处理
      if (val && !props.tProps && val[props.data.name] !== undefined) {
        value.value = val[props.data.name]
        // 上传默认值需要使用fileList参数
        if (props.data.type === 'upload') {
          control.value.fileList = JSON.parse(
            JSON.stringify(val[props.data.name])
          )
        }
      }
    }
  )
  // 从数据接口获取数据设置options，在表单添加或编辑时数据加载完成
  const formDict = inject(constFormDict, {}) as any
  watch(
    () => formDict.value,
    (val: any) => {
      if (val && config.value.source === 2 && config.value.type === 'async') {
        const opt = val[config.value.sourceFun] || val[props.data.name]
        if (opt !== undefined) {
          options.value = formatData(opt)
        }
      }
    }
  )
  // 对单选多选select设置options
  const formOptions = inject(constSetFormOptions, {}) as any
  watch(
    () => formOptions.value,
    (val: any) => {
      const opt = val[props.data.name]
      // 子表内的需要注意下，只有在子表有记录时才生效
      if (val && opt !== undefined) {
        options.value = formatData(opt)
      }
    }
  )
  // 图片上传
  const uploadSuccess = (response: any, file: any, fileList: any) => {
    // console.log(file)
    control.value.modelValue.push({
      name: file.fileName,
      url: file.path
    })
    control.value.onSuccess && control.value.onSuccess(response, file, fileList)
  }
  // 删除上传图片
  const uploadRemove = (file: any, fileList: any) => {
    control.value.modelValue.forEach((item: any, index: any) => {
      if (item.url === file.url) {
        control.value.modelValue.splice(index, 1)
      }
    })
    control.value.onRemove && control.value.onRemove(file, fileList)
  }
  // 上传错误
  const uploadError = (err: any, file: any, fileList: any) => {
    // console.log('uploadError')
    ElMessage.error(file.name + '上传失败')
    control.value.onError && control.value.onError(err, file, fileList)
  }
  /****input slot处理***/
  let inputSlotControl: any = {}
  const getInputSlot = (slot: string, key: string) => {
    const has = slot.indexOf('key:') === 0
    if (!has) {
      return false
    }
    const slotKey = slot.replace('key:', '')
    const control = getControlByName(slotKey)
    if (!control) {
      return false
    }
    inputSlotControl = control // 暂存
    switch (key) {
      case 'vIf': // 存在slot
        return !!control
      case 'control':
        return control.control
      case 'options':
        return control.options
      case 'config':
        return control.config
      case 'value':
        return control.control.modelValue
    }
  }
  const inputSlotChange = (val: string | number) => {
    inputSlotControl.control.modelValue = val
    changeEvent &&
      changeEvent({
        key: inputSlotControl.name,
        value: val,
        data: inputSlotControl
      })
  }
  /****input slot处理结束***/
  onMounted(() => {
    getAxiosOptions()
  })
  onUnmounted(() => {
    console.log('formItem onUnmounted')
    formOptions.value = ''
    formDict.value = ''
    setValueEvent.value = ''
    getControlByName.value = ''
    config.value = ''
    control.value = ''
    options.value = ''
    injectData.value = ''
  })
</script>
