<!--Created by 337547038 on 2018/9/7.-->
<!--example
<Switch v-model="checked"></Switch>-->
<template>
    <span @click="_click" :class="{
    [prefixCls+'-switch']:true,
    'switch-checked':status,
    'disabled':disabled}"
          :style="style">
        <i :class="`${prefixCls}-switch-inner`">
            <slot name="open" v-if="status"></slot>
            <slot name="close" v-else></slot>
        </i>
    </span>
</template>
<script>
import {prefixCls} from '../prefix'
import emitter from '../mixins/emitter'

export default {
  name: `${prefixCls}Switch`,
  data() {
    return {
      prefixCls: prefixCls
    }
  },
  mixins: [emitter],
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    change: Function,
    activeColor: String, // 打开时的颜色
    closeColor: String, // 关闭时的颜色
    activeValue: [String, Number, Boolean], // switch 打开时的值
    closeValue: [String, Number, Boolean], // switch 关闭时的值
    validateEvent: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  mounted() {
  },
  methods: {
    _click() {
      if (!this.disabled) {
        // this.checked = !this.checked
        let checked = false
        if (!this.status) {
          if (this.activeValue !== false) {
            checked = this.activeValue
          } else {
            checked = true
          }
        } else {
          if (this.closeValue !== false) {
            checked = this.closeValue
          } else {
            checked = false
          }
        }
        this.$emit('input', checked)
        this.$emit('change', checked)
        this.change && this.change(checked)// 回调
        if (this.validateEvent) {
          this.dispatch('formItem', `${prefixCls}.form.change`, [checked, ''])
        }
      }
    }
  },
  computed: {
    status() {
      if (this.activeValue !== false) {
        // 指定了选中值时
        return this.value === this.activeValue
      } else {
        return this.value
      }
    },
    style() {
      let elStyle = {}
      if (this.value && this.activeColor) {
        // 打开状态，并设置了打开时的颜色
        elStyle = {
          borderColor: this.activeColor,
          backgroundColor: this.activeColor
        }
      }
      if (!this.value && this.closeColor) {
        elStyle = {
          borderColor: this.closeColor,
          backgroundColor: this.closeColor
        }
      }
      return elStyle
    }
  },
  filters: {}
}
</script>
