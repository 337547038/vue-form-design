<!-- Created by 337547038 on 2018/8/15 0015. -->
<template>
  <div :class="{className,[prefixCls+'-form-item-error']:error,[prefixCls+'-form-item']:true}" @click="_itemClick">
    <label v-if="label || $slots.label" :class="{'required':isRequired,[prefixCls+'-form-label']:true}"
           :style="labelStyle">
      <slot name="label">{{label}}</slot>
    </label>
    <div :class="`${prefixCls}-form-box`">
      <slot></slot>
      <div :class="`${prefixCls}-form-tips ${iconType}`" v-text="errorTips" v-if="showMessage&&errorTips"></div>
      <div :class="`${prefixCls}-form-tips ${iconType}`" v-else-if="showMessage&&error===false"></div>
    </div>
  </div>
</template>

<script>
import {prefixCls} from '../prefix'
import Validate from './validate'
// import emitter from '../mixins/emitter'

export default {
  name: `${prefixCls}FormItem`,
  componentName: 'formItem',
  data() {
    return {
      prefixCls: prefixCls,
      rules: {},
      errorTips: '',
      error: '', // 验证错误添加样式
      showMessage: true,
      trigger: '',
      iconType: '', // 提示类型，
      controlValue: '' // 组件的值，改变事件时
    }
  },
  // mixins: [emitter],
  props: {
    className: String,
    label: String,
    prop: String,
    required: {
      type: Boolean,
      default: true
    },
    verify: { // 用于快速验证，formItem带验证规则时，使用默认提示
      type: String
      /* default: '',
      validator: value => {
        return ['required', 'mobile', 'tel', 'mail', 'digits', 'number'].indexOf(value) !== -1
      } */
    },
    itemRules: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  components: {},
  methods: {
    _onFieldChange(value, event) {
      // 改变表单元素统一返回格式,value当前值 event当前元素
      // console.log('_onFieldChange')
      // console.log(value)
      this.controlValue = value // 暂存组件的值
      // console.log(event.target.tagName)
      // 表单元素改变事件
      // 如果选择了blur时，change时不再触发
      let controlType = ''
      if (event && event.target) {
        controlType = event.target.tagName
      }
      if (this.trigger === 'blur' && controlType === 'INPUT') {
      } else {
        this.validate('', value)
      }
      // this.dispatch('formItem', `${prefixCls}.form.focus`, [e])
      if (this.form.value[this.prop] !== undefined) {
        this.form.value[this.prop] = value
      }
    },
    _onFieldBlur(event) {
      // 失去焦点时
      if (this.trigger === 'blur') {
        this.validate()
      }
      this._focusTips(event)
    },
    // 获取焦点提示事件，仅对输入框
    _onFieldFocus(event) {
      if (event.target.tagName === 'INPUT' && event.target.value === '') {
        this._focusTips()
        this.iconType = 'tips'
      }
    },
    _focusTips(event) {
      let rule = this.form.rules[this.prop]
      if (!rule) {
        return
      }
      for (let i = 0, len = rule.length; i < len; i++) {
        if (rule[i].type === 'tips') {
          // 如果有提示
          if (event) {
            // 失去焦点后重置，有值失去焦点有可能存在其它提示
            if (event.target.value === '') {
              this.errorTips = ''
              this.error = ''
            }
          } else {
            this.errorTips = rule[i].msg
            this.error = true
          }
          break
        }
      }
    },
    validate(callback, value) {
      // 两个参数 1回调 2当前值(按钮提交时value为空)，
      // 验证
      // console.log(value)
      // console.log(this.form.value)
      let rule = []
      let value2 = value

      if (this.verify) {
        if (!value2) {
          value2 = this.controlValue
        }
        const temRule = this.verify.split(',')
        temRule.forEach(item => {
          const msg = item.replace('required', '必填字段')
            .replace('mobile', '手机号格式不正确')
            .replace('tel', '电话号码不正确')
            .replace('mail', '请输入正确邮箱')
            .replace('digits', '必须为正整数')
            .replace('number', '必须为数字')
          rule.push({
            type: item,
            msg: msg
          })
        })
      } else {
        if (value === 'undefined' || value === undefined) {
          value2 = this.form.value[this.prop]
        }
        if (value === 'undefined' || value === undefined) {
          value2 = this.controlValue
        }
        rule = this.form.rules[this.prop]
        if (this.itemRules.length > 0) {
          rule = this.itemRules
        }
      }
      if (rule) {
        const result = Validate(value2, rule)
        // console.log(result)
        if (this.showMessage) {
          if (result === true) {
            // 通过
            this.errorTips = ''
            this.error = false
            this.iconType = 'success'
          } else {
            this.errorTips = result
            this.error = true
            this.iconType = 'failure'
          }
        }
        if (callback) {
          callback(result, this.prop)
        }
      }
    },
    resetField() {
      // 表单重置
      // 移除错误提示
      this.errorTips = ''
      this.error = false
    },
    // 直接设置提示信息
    setTips(iconType, tipsText) {
      this.iconType = iconType
      this.error = true
      this.showMessage = true
      this.errorTips = tipsText
    },
    _itemClick(e) {
      this.$emit('click', e)
    }
  },
  computed: {
    isRequired() {
      // 是否根据验证规则自动生成必填样式名
      let bool = false
      if (this.required && (this.rules || this.itemRules.length > 0)) {
        let rule = this.rules[this.prop]
        if (this.itemRules.length > 0) {
          rule = this.itemRules
        }
        if (rule) {
          rule.forEach(item => {
            if (item.type === 'required') {
              bool = true
              return false
            }
          })
        }
      }
      // 通过formItem写的verify也要添加
      if (this.required && this.verify && this.verify.indexOf('required') !== -1) {
        bool = true
      }
      return bool
    },
    form() {
      // 查找form父组件
      let parent = this.$parent
      let parentName = parent.$options.componentName
      if (parent) {
        while (parentName !== `${prefixCls}Form` && parent.$parent) {
          parent = parent.$parent
          parentName = parent.$options.componentName
        }
      }
      return parent
    },
    // 如果form组件设置了label的宽
    labelStyle() {
      if (this.form.labelWidth) {
        return {
          width: this.form.labelWidth
        }
      } else {
        return null
      }
    }
  },
  created() {
  },
  mounted() {
    this.$nextTick(() => {
      this.rules = this.form.rules || []
      if (this.itemRules.length > 0) {
        this.rules = this.itemRules
      }
      this.showMessage = this.form.showMessage
      this.trigger = this.form.trigger
      if ((this.form.rules && this.form.rules[this.prop]) || this.verify || this.rules.length > 0) {
        // 监听表单元素改变事件
        this.$on(`${prefixCls}.form.change`, this._onFieldChange)
        this.$on(`${prefixCls}.form.blur`, this._onFieldBlur)
        this.$on(`${prefixCls}.form.focus`, this._onFieldFocus) // 仅对input
        // 将需要验证的字段保存至form
        // 考虑到formItem父组件不一定是form，有可能是祖先组件。这里不能使用$parent
        // this.$parent.fields.push(this)
        // this.dispatch('AKForm', 'ak.form.addField', [this])
        this.form.fields.push(this)
      }
    })
  },
  beforeDestroy() {
  }
}
</script>
