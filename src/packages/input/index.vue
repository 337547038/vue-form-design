<!-- Created by 337547038 on 2018/8/15 0015. -->
<!--<Input placeholder="请输入内容" v-model="value"></Input>-->
<template>
  <div :class="`${prefixCls}-form-input`">
    <input v-bind="$attrs" :value="value"
           :type="inputType"
           :class="{'disabled':disabled,[prefixCls+'-input-control']:true,'has-prefix':$slots.prefix||prefixIcon}"
           :disabled="disabled"
           @input="_input"
           @focus="_focus"
           @blur="_blur"
           ref="input"/>
    <span class="prefix-icon" v-if="$slots.prefix||prefixIcon">
      <i :class="[prefixIcon]" v-if="prefixIcon"></i>
      <slot name="prefix"></slot>
    </span>
    <span class="suffix-icon">
      <slot name="suffix"></slot>
       <i :class="[suffixIcon]" v-if="suffixIcon"></i>
       <i class="icon-close"
          v-if="clear&&value"
          @click.stop="_clear"></i>
       <i :class="{'icon-eye-close':eyeShow,'icon-eye':!eyeShow}"
          v-if="value&&showEye && type==='password'"
          @click.stop="eyeShow=!eyeShow"></i>
      </span>
  </div>
</template>
<script>
import {prefixCls} from '../prefix'
import emitter from '../mixins/emitter'

export default {
  name: `${prefixCls}Input`,
  data() {
    return {
      prefixCls: prefixCls,
      inputType: this.type, // 密码框时要切换，所以...
      eyeShow: false
    }
  },
  inheritAttrs: false,
  mixins: [emitter],
  watch: {
    eyeShow(value) {
      // 显示或隐藏密码
      this.inputType = value ? 'text' : 'password'
    },
    value(val) {
      // 通过其他事件修改了输入框值时，
      // console.log(val)
      if (this.validateEvent) {
        this.dispatch('formItem', `${prefixCls}.form.change`, [val, ''])
      }
    }
  },
  props: {
    value: null,
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    clear: {
      type: Boolean,
      default: false
    },
    showEye: {
      // 密码框显示眼睛，可切换为明文密码
      type: Boolean,
      default: false
    },
    change: Function,
    prefixIcon: String, // 前缀icon
    suffixIcon: String // 后缀icon
  },
  components: {},
  methods: {
    _blur(e) {
      // const value = e.target.value
      if (this.validateEvent) {
        this.dispatch('formItem', `${prefixCls}.form.blur`, [e])
      }
      this._emit('blur', e)
    },
    _input(e) {
      const value = e.target.value
      this.$emit('input', value)
      this.change && this.change(e)
      // 使用watch
      /* if (this.validateEvent) {
        this.dispatch('formItem', `${prefixCls}.form.change`, [value, e])
      } */
    },
    _focus(e) {
      this._emit('focus', e)
      if (this.validateEvent) {
        this.dispatch('formItem', `${prefixCls}.form.focus`, [e])
      }
    },
    _clear() {
      this._emit('input', '')
    },
    _emit(type, e) {
      this.$emit(type, e)
      // this[type] && this[type](e)
    },
    focus() {
      this.$refs.input.focus()
    },
    blur() {
      this.$refs.input.blur()
    }
  },
  computed: {},
  mounted() {
  }
}
</script>
