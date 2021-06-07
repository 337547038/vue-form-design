<!-- Created by 337547038 on 2018/8/15 0015. -->
<template>
  <form :class="cls">
    <slot></slot>
  </form>
</template>

<script>
import {prefixCls} from '../prefix'

export default {
  name: `${prefixCls}Form`,
  componentName: `${prefixCls}Form`,
  data() {
    return {
      fields: [], // 需要验证的字段
      defaultModel: {} // 用于保存所有表单元素初始值
    }
  },
  props: {
    rules: {
      type: Object,
      default: () => {
        return {}
      }
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    value: {
      type: Object,
      default: () => {
        return {}
      }
    },
    trigger: {
      // 触发验证类型，change和blur两种，仅对input
      default: 'change',
      validator: function (value) {
        return ['change', 'blur'].indexOf(value) !== -1
      }
    },
    labelWidth: String
  },
  components: {},
  created() {
    // 接收formItem发送过来需要验证的集合
    /* this.$on('ak.form.addField', (field) => {
      if (field) {
        this.fields.push(field)
      }
    }) */
  },
  methods: {
    validate(props) {
      let fields = this.fields
      if (props && props.length > 0) {
        fields = this.fields.filter((field) => {
          return props.indexOf(field.prop) !== -1
        })
      }
      return new Promise((resolve, reject) => {
        this._validateComm(fields)
          .then(res => {
            resolve(res) // 验证通过
          })
          .catch(res => {
            reject(res)
          })
      })
    },
    _validateComm(fields) {
      let valid = true
      let count = 0
      let errorTips = []
      console.log('validate fields')
      console.log(fields)
      if (fields.length > 0) {
        return new Promise((resolve, reject) => {
          fields.forEach(field => {
            // 引用formItem的validate验证方法
            // console.log(field)
            field.validate((result, field) => {
              if (result !== true) {
                // 错误结果
                valid = false
                errorTips.push(result)
              }
              if (++count === fields.length) {
                if (valid) {
                  errorTips = this.value
                } // 验证通过时返回当前表单值，相当于value
                if (valid) {
                  // 通过验证
                  resolve(errorTips)
                } else {
                  reject(errorTips)
                }
              }
            })
          })
        })
      }
    },
    resetFields() {
      // 重置表单元素值
      this.$emit('input', Object.assign({}, this.defaultModel))
      // 清空错误提示
      this.fields.forEach(field => {
        field.resetField()
      })
    }
  },
  computed: {
    cls() {
      return `${prefixCls}-form`
    }
  },
  mounted() {
    // 保存表单所有元素初始值，用于重置表单
    this.defaultModel = Object.assign({}, this.value)
  }
}
</script>
