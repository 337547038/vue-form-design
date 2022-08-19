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
        <template #prepend v-if="config.prepend"
          >{{ config.prepend }}
        </template>
        <template #append v-if="config.append">{{ config.append }}</template>
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
          :label="item.value"
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
          :value="item.value"
          :label="item.label"
        />
      </el-checkbox-group>
      <el-select
        v-if="data.type === 'select'"
        v-bind="control"
        :disabled="editDisabled"
        v-model="value"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
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
          src="./tinymce/img.png"
          v-if="type === 4"
          style="max-width: 100%"
        />
      </template>
      <div v-bind="data.control" v-if="data.type === 'txt'" v-html="value">
      </div>
    </template>
  </el-form-item>
</template>

<script lang="ts" setup>
  import axios from '@/utils/request'
  import { inject, onMounted, computed, watch, toRefs, ref, toRef } from 'vue'
  import md5 from 'md5'
  import { ElMessage } from 'element-plus'
  import Tooltip from './tooltip.vue'
  import TinymceEdit from './tinymce/index.vue'
  import { useDesignFormStore } from '@/store/designForm'
  import { FormItem, FormList, RulesComm } from '../types'

  const props = withDefaults(
    defineProps<{
      data: FormList
      modelValue?: null // 子表时值
      tProps?: string // 子表时的form-item的prop值，用于子表校验用
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', val: string): void
  }>()
  const store = useDesignFormStore()
  const type = computed(() => {
    return store.type
  })
  const { config, control, options = ref([]) } = toRefs(props.data)
  const value = props.tProps
    ? ref(props.modelValue)
    : toRef(props.data.control, 'modelValue')
  // 当通用修改属性功能添加新字段时，数组更新但toRefs没更新
  watch(
    () => props.data,
    (val) => {
      config.value = val.config || {}
      control.value = val.control || {}
      options.value = val.options || []
      if (props.tProps) {
        value.value = props.modelValue
      } else {
        value.value = val.control.modelValue
      }
    },
    { deep: true }
  )
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
    if (store.type === 2) {
      return true // 查看模式，为不可编辑状态
    }
    if (store.type === 1 && store.isEdit && config.value.editDisabled) {
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
    const commR = formatRulesComm()
    // 如果三个都没有设置，则返回undefined
    if (itemR?.length || customR?.length || commR?.length) {
      temp = [...customR, ...commR, ...itemR]
    }
    return temp
  })
  const getAxiosOptions = () => {
    if (config.value.type === 'async') {
      if (config.value.source === 0) {
        // 当前控件为动态获取数据
        const key = 'getOptions_fun_' + md5(config.value.sourceFun)
        const storage = window.sessionStorage.getItem(key)
        if (storage) {
          options.value = JSON.parse(storage)
        } else {
          // request.get('url',data)
          ;(axios as any)
            [config.value.request](config.value.sourceFun, '')
            .then((res: any) => {
              // todo 这里接口应该统一返回固定格式
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
      if (config.value.source === 1 && config.value.sourceFun) {
        // 使用动态选项方法函数获取options数据项，父级使用provide方法注入
        options.value = inject(config.value.sourceFun, [])
      }
    }
  }
  // 处理自定义校验规则，将customRules转换后追加到rules里
  const formatCustomRules = () => {
    const rulesReg: any = {
      mobile: /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/, // 手机
      tel: /^0\d{2,3}-\d{7,8}$/, // 电话
      phone: /^((0\d{2,3}(-?)\d{7,8})|(1[3456789]\d{9}))$/, // 固话和手机
      email: /^[a-z0-9A-Z._%-]+@([a-z0-9A-Z-]+\.)+[a-zA-Z]{2,4}$/, //邮箱
      int: /^[0-9]*[1-9][0-9]*$/, // 正整数
      number: /^\d+(\.\d+)?$/, //数字带小数
      card: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/ // 身份证
    }
    // 获取校验方法 父级使用provide方法注入
    // const validatorMethods = inject('validatorMethods', {})
    const temp: any = []
    props.data.customRules?.forEach((item: RulesComm) => {
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
        // 当使用validator校验时，如果存在message字段则不能使用 callback(new Error('xxxxx'));的提示
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
  // 从公共校验规则里提取，通过key
  const formatRulesComm = () => {
    if (store.rulesComm?.length > 0) {
      const rules = props.data.rulesComm || []
      return store.rulesComm.filter((item: RulesComm) =>
        rules.includes(item.key)
      )
    }
    return []
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
  const changeEvent = inject('AKControlChange', '') as any
  watch(
    () => value.value,
    (val) => {
      if (props.tProps) {
        emits('update:modelValue', val)
      } else {
        control.value.modelValue = val
      }
      changeEvent && changeEvent({ key: props.data.name, value: val })
    }
  )
  // 执行表单的setValue方法，对组件设值
  watch(
    () => store.formValue,
    (val: any) => {
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
  watch(
    () => store.formOptionsDict,
    (val: any) => {
      if (val && config.value.source === 2) {
        const opt = val[config.value.sourceFun] || val[props.data.name]
        if (opt !== undefined) {
          options.value = formatData(opt)
        }
      }
    }
  )
  // 对单选多选select设置options
  watch(
    () => store.formOptions,
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
  onMounted(() => {
    getAxiosOptions()
  })
</script>
