<!-- Created by 337547038 on 2018/9/7 0007. -->
<template>
  <label :class="{
  'disabled':disabled,
  'checked':checked===value,[prefixCls+'-radio']:true}">
    <input type="radio" v-model="checked" :value="value" @change="_onChange" :disabled="disabled">
    <span class="radio-inner"></span>
    <span class="radio-text" v-if="$slots.default">
      <slot/>
    </span>
    <span class="radio-text" v-if="label" v-html="label"></span>
  </label>
</template>
<script>
import {prefixCls} from '../prefix'
import emitter from '../mixins/emitter'

export default {
  name: `${prefixCls}Radio`,
  data () {
    return {
      prefixCls: prefixCls,
      checked: this.modelValue
    }
  },
  mixins: [emitter],
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Boolean, Number],
      default: true
    },
    modelValue: {},
    label: String
  },
  watch: {
    modelValue (v) {
      this.checked = v
    }
  },
  methods: {
    _onChange (e) {
      let emitValue = e.target.value || true
      this.$emit('input', emitValue)
      this.$emit('change', emitValue)
      this.dispatch('formItem', `${prefixCls}.form.change`, [emitValue, e])
    }
  },
  mounted () {
  },
  computed: {}
}
</script>
