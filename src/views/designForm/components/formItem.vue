<!-- Created by 337547038 on 2021/9/27. -->
<template>
  <el-form-item
    v-bind="element.item"
    :prop="tProps||element.name"
    :class="element.className"
    :rules="element.rules&&element.rules.length>0?element.rules: undefined "
    :label="getLabel(element)">
    <template #label v-if="element.config.help">
      {{ getLabel(element) }}
      <Tooltip :content="element.config.help"></Tooltip>
    </template>
    <div class="form-value" v-if="type===3" v-html="value"></div>
    <template v-else>
      <el-input
        v-bind="element.control"
        v-model="value"
        :disabled="editDisabled"
        :type="element.type==='password'?'password':''"
        v-if="element.type==='input'||element.type==='password'">
        <template v-slot:[key] v-for="(te,key) in element.slot">
          {{ te }}
        </template>
      </el-input>
      <el-input
        v-bind="element.control"
        v-model="value"
        :disabled="editDisabled"
        type="textarea"
        v-if="element.type==='textarea'">
      </el-input>
      <el-radio-group
        v-bind="element.control"
        :disabled="editDisabled"
        v-model="value"
        v-if="element.type==='radio'">
        <el-radio
          :key="index"
          :label="item.value"
          v-for="(item,index) in element.options">
          {{ item.label }}
        </el-radio>
      </el-radio-group>
      <el-checkbox-group
        v-bind="element.control"
        :disabled="editDisabled"
        v-model="value"
        v-if="element.type==='checkbox'">
        <el-checkbox
          v-for="(item,index) in element.options"
          :key="index"
          :value="item.value"
          :label="item.label">
        </el-checkbox>
      </el-checkbox-group>
      <el-select
        v-if="element.type==='select'"
        v-bind="element.control"
        :disabled="editDisabled"
        v-model="value">
        <el-option
          v-for="item in element.options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-date-picker
        v-if="element.type==='datePicker'"
        v-bind="element.control"
        :disabled="editDisabled"
        v-model="value">
      </el-date-picker>
      <el-switch
        v-if="element.type==='switch'"
        v-bind="element.control"
        :disabled="editDisabled"
        v-model="value">
      </el-switch>
      <el-input-number
        v-if="element.type==='number'"
        v-bind="element.control"
        v-model="value"
        :disabled="editDisabled">
      </el-input-number>
      <el-cascader
        v-if="element.type==='cascader'"
        v-bind="element.control"
        v-model="value"
        :disabled="editDisabled"
        :options="element.options">
      </el-cascader>
      <el-upload
        class="upload-style"
        v-if="element.type==='upload'"
        v-bind="element.control"
        :disabled="editDisabled"
        :class="{limit:element.control.limit<=element.control.modelValue.length}"
        :on-success="uploadSuccess"
        :on-remove="uploadRemove"
        :on-error="uploadError">
        <el-button
          type="primary"
          v-if="element.config.btnText">{{ element.config.btnText }}
        </el-button>
        <i class="icon-plus" v-else></i>
        <template #tip v-if="element.config.tip">
          <div class="el-upload__tip">
            {{ element.config.tip }}
          </div>
        </template>
      </el-upload>
      <component
        :is="element.component"
        v-bind="element.control"
        v-model="value"
        :disabled="editDisabled"
        v-if="element.type==='component'&&type!==4"/>
      <!-- 表单设计模式下显示提示-->
      <div v-if="element.type==='component'&&element.component===''" class="gray">
        请使用provide注入组件如：provide('{{ element.template }}',
        import进来的组件)
      </div>
      <div
        v-bind="element.control"
        v-if="element.type==='txt'"
        v-html="value">
      </div>
    </template>
  </el-form-item>
</template>

<script>
import axios from "@/utils/request"
import {toRefs, inject, onMounted, computed, reactive, watch} from 'vue'
import md5 from 'md5'
import {ElMessage} from 'element-plus'
import Tooltip from './tooltip.vue'

export default {
  name: "item",
  components: {Tooltip},
  props: {
    element: Object,
    modelValue: null,// 子表时值
    tProps: String  // 子表时的form-item的prop值，用于子表校验用
  },
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    const injectData = inject('DFStatusType', {})
    const state = reactive({
      type: injectData.type,
      config: props.element.config,
      value: props.tProps ? props.modelValue : props.element.control.modelValue  // 子表时使用tValue的值
      // getResultFun: 'if(res.data.code===200){callback(res.data.data)}'
    })
    watch(() => props.element.control.modelValue, (val) => {
      state.value = val
    })
    // 使用动态选项方法函数获取options数据项，父级使用provide方法注入
    // props.type===4 为表单设计时不拉取数据
    const config = state.config
    if (config.type === 'async' && config.source === 1 && state.type !== 4 && config.sourceFun) {
      props.element.options = inject(config.sourceFun, [])
    }
    // 处理自定义校验规则，将customRules转换后追加到rules里 ,新增模式才处理，查看和设计模式不处理
    if (props.element.customRules && state.type === 1) {
      const rules = {
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
      props.element.customRules.forEach(item => {
        if (!item.message && item.type !== 'methods') {
          return // 方法时允许提示信息为空
        }
        let hasRule = false
        props.element.rules.forEach(r => {
          if (item.message === r.message && item.trigger === r.trigger) {
            hasRule = true // 以提示语作为判断条件
          }
        })
        if (!hasRule) {
          let obj = {}
          if (item.type === 'required') {
            obj = {required: true}
          } else if (item.type === 'rules') {
            // 自定义表达式
            obj = {pattern: item.rules}
          } else if (item.type === 'methods') {
            // 方法时
            obj = {validator: inject(item.methods, {})}
          } else if (item.type && rules[item.type]) {
            obj = {pattern: rules[item.type]}
          }
          // 这里判断下防某些条件下重复push的可能或存重复校验类型
          let message = {message: item.message}
          if (!item.message) { // 当使用validator校验时，如果存在message字段则不能使用 callback(new Error('xxxxx'));的提示
            message = {}
          }
          props.element.rules.push(Object.assign({
            trigger: item.trigger || 'blur'
          }, obj, message))
        }
      })
    }
    // 从公共校验规则里提取，通过key
    if (props.element.rulesComm && state.type === 1) {
      const rulesComm = inject('DFFormRulesComm', [])
      if (rulesComm && rulesComm.value.length > 0) {
        rulesComm.value.forEach(item => {
          if (props.element.rulesComm.indexOf(item.key) !== -1) {
            // 防重复添加
            let hasRule = false
            props.element.rules.forEach(r => {
              if (item.key === r.key) {
                hasRule = true
              }
            })
            if (!hasRule) {
              props.element.rules.push(item)
            }
          }
        })
      }
    }
    // 返回是否存在当前校验规则
    const hsaRules = key => {
      let has = false
      props.element.rules.forEach(r => {
        if (key === r.key) {
          has = true
        }
      })
      return has
    }
    const getAxiosOptions = () => {
      if (config.type === 'async' && config.source === 0 && state.type !== 4) {
        // 当前控件为动态获取数据
        const key = 'option_fun_' + md5(config.sourceFun)
        const storage = window.sessionStorage.getItem(key)
        if (storage) {
          props.element.options = JSON.parse(storage)
        } else {
          // request.get('url',data)
          axios[config.request](config.sourceFun, '')
            .then(res => {
              // todo 这里接口应该统一返回固定格式
              if (res.data.code === 200) {
                // 请求成功
                props.element.options = res.data.data
                window.sessionStorage.setItem(key, JSON.stringify(res.data.data)) //缓存，例如子表添加时不用每添加一行就请求一次
              }
            })
            .catch(res => {
              console.log(res)
            })
        }
      }
    }
    // 自定义组件注入
    if (props.element.type === 'component' && props.element.template) {
      props.element.component = inject(props.element.template, '')
    }
    const getLabel = ele => {
      if (ele.item) {
        if (ele.item.showLabel) {
          return ''
        } else {
          return ele.item.label
        }
      } else {
        return ''
      }
    }
    // 控制编辑模式下是否可用
    const editDisabled = computed(() => {
      if (injectData.type === 1 && injectData.isEdit && props.element.config && props.element.config.editDisabled) {
        // 新增模式 编辑模式
        return true
      }
      return props.element.control.disabled
    })
    // 为改变事件提供方法
    const changeEvent = inject('DFControlChange', '')
    watch(() => state.value, val => {
      if (props.tProps) {
        emit('update:modelValue', val)
      } else {
        props.element.control.modelValue = val
      }
      changeEvent && changeEvent({key: props.element.name, value: val})
    })
    // 执行表单的setValue方法，对组件设值
    const setValueEvent = inject('DFSetFormValue', '')
    watch(() => setValueEvent.value, () => {
      // !props.tProps 的这里不单独处理
      if (setValueEvent && setValueEvent.value && !props.tProps) {
        state.value = setValueEvent.value[props.element.name]
        // 上传默认值需要使用fileList参数
        if (props.element.type === 'upload') {
          props.element.control.fileList = JSON.parse(JSON.stringify(state.value))
        }
      }
    })
    // 对单选多选select设置options
    const setOptionsEvent = inject('DFSetFormOptions', '')
    watch(() => setOptionsEvent.value, () => {
      // !props.tProps 的这里不单独处理
      if (setOptionsEvent && setOptionsEvent.value && !props.tProps) {
        props.element.options = setOptionsEvent.value[props.element.name]
      }
    })
    // 图片上传
    const uploadSuccess = (response, file, fileList) => {
      console.log(file)
      props.element.control.modelValue.push({
        name: file.fileName,
        url: file.path
      })
      props.element.control.onSuccess && props.element.control.onSuccess(response, file, fileList)
    }
    // 删除上传图片
    const uploadRemove = (file, fileList) => {
      props.element.control.modelValue.forEach((item, index) => {
        if (item.url === file.url) {
          props.element.control.modelValue.splice(index, 1)
        }
      })
      props.element.control.onRemove && props.element.control.onRemove(file, fileList)
    }
    // 上传错误
    const uploadError = (err, file, fileList) => {
      console.log('uploadError')
      ElMessage.error(file.name + '上传失败')
      props.element.control.onError && props.element.control.onError(err, file, fileList)
    }
    onMounted(() => {
      getAxiosOptions()
    })
    return {
      getLabel,
      editDisabled,
      uploadSuccess,
      uploadRemove,
      uploadError,
      ...toRefs(state)
    }
  }
}
</script>
