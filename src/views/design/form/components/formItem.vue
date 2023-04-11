<!-- Created by 337547038 on 2021/9/27. -->
<template>
  <el-form-item
    v-bind="data.item"
    :prop="tProp || data.name"
    :class="config.className"
    :rules="itemRules"
    :label="getLabel(data.item)"
  >
    <template #label v-if="config.help">
      {{ getLabel(data.item) }}
      <Tooltip :content="config.help" />
    </template>
    <div class="form-value" v-if="type === 4" v-html="value"></div>
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
          >{{ item.label }}
        </el-checkbox>
      </el-checkbox-group>
      <AKSelect
        v-if="
          data.type === 'select' || (type === 5 && data.type === 'inputSlot')
        "
        :control="control"
        :disabled="editDisabled"
        v-model="value"
        :options="options"
        :config="config"
        :remote-method="getAxiosOptions"
        :formatNumber="formatNumber"
      />
      <el-upload
        class="upload-style"
        v-if="data.type === 'upload'"
        :action="uploadUrl"
        v-bind="control"
        :name="control.file || 'file'"
        :disabled="editDisabled"
        v-model:file-list="fileList"
        :class="{
          limit: control.limit <= control.modelValue.length
        }"
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
            'component',
            'treeSelect',
            'expand-user'
          ].includes(data.type)
        "
        :is="currentComponent"
        v-bind="control"
        :disabled="editDisabled"
        :options="options"
        :filter-method="filterMethod"
        v-model="value"
      />
      <template v-if="data.type === 'tinymce'">
        <!--  设计模式时拖动会出现异常，设计模式暂用图片代替-->
        <tinymce-edit
          v-bind="control"
          :config="config"
          :disabled="editDisabled"
          v-model="value"
          v-if="[1, 2, 3].includes(type)"
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
    isRef,
    markRaw
  } from 'vue'
  import md5 from 'md5'
  import { ElMessage } from 'element-plus'
  import Tooltip from '../../components/tooltip.vue'
  import TinymceEdit from './tinymce.vue'
  import { FormItem, FormList } from '../../types'
  import { formatNumber } from '../../utils'
  import validate from './validate'
  import ExpandUser from './expand/user.vue'
  import {
    constControlChange,
    constSetFormOptions,
    constFormProps,
    constGetControlByName
  } from '../../utils'
  import AKSelect from './select.vue'
  import { uploadUrl } from '@/api'
  import { useRoute } from 'vue-router'
  import formatResult from '@/utils/formatResult'
  import { getRequest } from '@/api'

  const props = withDefaults(
    defineProps<{
      data: FormList
      tProp?: string // 子表时的form-item的prop值，用于子表校验用
    }>(),
    {}
  )
  const route = useRoute()
  const formProps = inject(constFormProps, {}) as any
  const type = computed(() => {
    return formProps.value.type
  })
  // const { config, control, options = ref([]) } = toRefs(props.data)
  const config = ref(props.data.config)
  const control = ref(props.data.control)
  const options = ref(props.data.options)
  const changeEvent = inject(constControlChange, '') as any
  const updateModel = (val: any) => {
    changeEvent &&
      changeEvent({
        key: props.data.name,
        value: val,
        data: props.data,
        tProp: props.tProp
      })
  }
  // todo upload需特殊处理
  const value = computed({
    get() {
      return transformValue(formProps.value.model[props.data.name])
    },
    set(newVal: any) {
      updateModel(newVal)
    }
  })
  const fileList = ref([]) // 图片上传列表
  // todo
  // const setFileList = (val: any) => {
  //   // 这里兼容modelValue为字符串和数组两种
  //   if (props.data.type === 'upload') {
  //     if (val && typeof val === 'string') {
  //       const temp: any = []
  //       val.split(',').forEach((item: any) => {
  //         temp.push({
  //           name: '',
  //           url: item
  //         })
  //       })
  //       fileList.value = temp
  //     } else if (typeof val === 'object') {
  //       fileList.value = val
  //     }
  //   }
  // }
  // todo setFileList(props.modelValue)
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
    const apiUrl = config.value.optionsFun
    const replace = apiUrl?.match(iReg)
    return replace && replace[0]
  })
  const getLabel = (ele: FormItem) => {
    const showColon = formProps.value.showColon ? '：' : ''
    if (ele) {
      return ele.showLabel ? '' : ele.label + showColon
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
  const editDisabled = computed(() => {
    if (type.value === 3) {
      return true // 查看模式，为不可编辑状态
    }
    if (type.value === 1 && config.value.addDisabled) {
      return true
    }
    if (type.value === 2 && config.value.editDisabled) {
      return true // 编辑模式
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
  // data 根据条件搜索，select远程搜索里data有值
  const getAxiosOptions = (data?: any) => {
    const {
      optionsType,
      optionsFun,
      method = 'post',
      afterResponse,
      beforeRequest,
      label,
      value
    } = config.value
    if (optionsType !== 0) {
      let sourceFun = optionsFun
      // 接口数据源
      if (optionsType === 1 && sourceFun) {
        // 当前控件为动态获取数据，防多次加载，先从本地取。data=true时直接请求
        const key = 'getOptions_' + props.data.name + md5(sourceFun + data)
        const storage = window.sessionStorage.getItem(key)
        if (storage && !data) {
          const val = JSON.parse(storage)
          if (props.data.type === 'treeSelect') {
            control.value.data = val
          } else {
            options.value = val
          }
        } else {
          // 从url里提取一个动态值,${name}形式提取name
          if (sourceFunKey.value) {
            const control = getControlByName(sourceFunKey.value)
            const val = control?.control.modelValue
            const string = '${' + sourceFunKey.value + '}'
            sourceFun = sourceFun.replace(string, val)
            // 如有需要可从sourceFun里提取url参数放入到newData中
          }
          // 处理请求前的数据
          //let newData = Object.assign({}, data || {}, queryParams)
          let newData = data || {}
          if (typeof beforeRequest === 'function') {
            newData =
              beforeRequest(newData, route, formProps.value.model) ?? data
          }
          if (newData === false) {
            return
          }
          if (method === 'get') {
            newData = { params: newData }
          }
          getRequest(sourceFun, newData, { method: method })
            .then((res: any) => {
              const result = res.data.list || res.data
              let formatRes: any = result
              // 这里做数据转换，很多时候后端并不能提供完全符合且一样的数据
              if (typeof afterResponse === 'string' && afterResponse) {
                formatRes = formatResult(result, afterResponse)
              } else if (typeof afterResponse === 'function') {
                // 没有return时，使用原来的，相当于没处理
                formatRes = afterResponse(result) ?? result
              } else if (label || value) {
                // 没有设置afterResponse时，这里将数据转换为[{label:'',value:''}]形式。只处理一级
                formatRes = []
                // function transformData(val: any) {
                //   const tr = config.value.transformData
                //   if (tr === 'number') {
                //     return formatNumber(val)
                //   }
                //   if (tr === 'string') {
                //     return val && val.toString()
                //   }
                //   return val
                // }
                result.forEach((item: any) => {
                  formatRes.push({
                    label: item[label] || item.label,
                    value: item[value] || item.value
                  })
                })
              }
              if (formatRes === false) {
                return
              }
              console.log('formatRes', formatRes)
              if (props.data.type === 'treeSelect') {
                control.value.data = formatRes
              } else {
                options.value = formatRes
              }
              if (typeof formatRes === 'object') {
                window.sessionStorage.setItem(key, JSON.stringify(formatRes)) //缓存，例如子表添加时不用每添加一行就请求一次
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
  }
  watch(
    () => formProps.value.model[sourceFunKey.value],
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
  // 执行表单的setValue方法，对组件设值
  // value转换，保存时设置了数组转换转换的，这里要做恢复处理。另外对于部分组件v-model必须要是数字类型，这里兼容接口返回或数据转换后格式问题，主要为字符串类型的数字，即转换为对应组件所需的样式
  const transformValue = (val: any) => {
    // if (['radio', 'checkbox', 'select'].includes(props.data.type)) {
    //   // 这些类型需要尝试转为数字
    //   return formatNumber(val)
    // } else {
    //   return val
    // }
    return val
  }
  // 从数据接口获取数据设置options，在表单添加或编辑时数据加载完成
  const setFormDict = (val: any) => {
    if (val && config.value.optionsType === 2) {
      const opt = val[config.value.optionsFun] || val[props.data.name]
      if (opt !== undefined) {
        options.value = formatData(opt)
      }
    }
  }
  watch(
    () => formProps.value.dict,
    (val: any) => {
      setFormDict(val)
    },
    { deep: true }
  )
  // 对单选多选select设置options
  const formOptions = inject(constSetFormOptions, {}) as any
  watch(
    () => formOptions.value,
    (val: any) => {
      const opt = val[props.data.name]
      // 子表内的需要注意下，只有在子表有记录时才生效
      if (val && opt !== undefined) {
        if (props.data.type === 'treeSelect') {
          // 树结构的参数为data
          control.value.data = formatData(opt)
        } else {
          options.value = formatData(opt)
        }
      }
    }
  )
  // 图片上传
  watch(
    () => fileList.value,
    (val: any) => {
      if (val && val.length) {
        let temp: any = []
        val.forEach((item: any) => {
          if (item.response) {
            // 新增数据
            temp.push(item.response?.path)
          } else {
            // 原来
            temp.push(item.url)
          }
        })
        control.value.modelValue = temp.join(',')
      } else {
        control.value.modelValue = ''
      }
    },
    { deep: true }
  )
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
  // treeSelect
  const filterMethod = (val: string) => {
    if (props.data.type === 'treeSelect') {
      // 请求参数名，可使用config.queryName传进来
      const queryName = config.value.queryName || 'name'
      control.value.filterMethod && control.value.filterMethod(val)
      getAxiosOptions({ [queryName]: val })
    }
  }
  onMounted(() => {
    getAxiosOptions()
  })
  onUnmounted(() => {
    // console.log('formItem onUnmounted')
    formOptions.value = ''
    config.value = ''
    control.value = ''
    options.value = ''
  })
</script>
