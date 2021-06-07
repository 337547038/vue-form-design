<!--Created by 337547038 on 2018/9/5.-->
<template>
  <div :class="{[prefixCls+'-date-picker-input']:true,'date-picker-clear':value&&showClear,top:positionTop}">
    <v-input
      :placeholder="placeholder"
      :class="{'disabled':disabled}"
      ref="input"
      :value="showValue||value"
      :readonly="readonly"
      :disabled="disabled"
      :clear="showClear&&!disabled"
      @input="_input"
      @blur="_blur">
    </v-input>
    <i class="icon-date" v-if="!disabled"></i>
  </div>
</template>
<script>
import vInput from '../input'
import Vue from 'vue'
import dom from '../mixins/dom'
import {prefixCls} from '../prefix'
import emitter from '../mixins/emitter'
import DatePicker from './datePicker'

const Picker = Vue.extend(DatePicker)
export default {
  name: `${prefixCls}DatePicker`,
  mixins: [dom, emitter],
  data () {
    return {
      prefixCls: prefixCls,
      component: '', // 挂载的组件
      offset: {}, // 当前input位置坐标
      status: false, // 防止多次挂裁
      showValue: '', // 显示在输入框的值
      positionTop: false
    }
  },
  watch: {
    value () {
      this._getShowValue()
    }
  },
  props: {
    value: [Number, String, Date],
    placeholder: String,
    showClear: {// 显示清空
      type: Boolean,
      default: true
    },
    disabledDate: {
      type: Function,
      default: function () {
        return false
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'date',
      validator: function (value) {
        // 下拉面板类型 四种类型，年/年月/年月日/年月日时分秒
        return ['year', 'month', 'date', 'datetime'].indexOf(value) !== -1
      }
    },
    format: String, // 显示于输入框的值
    valueFormat: String, // 实际值，即v-model
    innerHTML: Function,
    appendToBody: {
      // 将日期面板插入到body中
      type: Boolean,
      default: false
    },
    downStyle: Object, // 下拉面板样式
    readonly: { // 日期输入框只读
      type: Boolean,
      default: true
    },
    maxHeight: Number // 距离浏览底部高度，当小于这个高度时将向上弹出
  },
  components: {vInput},
  methods: {
    _getShowValue (date) {
      // 当value变化时，返回指定的输出格式
      let dateValue = date || this.value
      if (!dateValue) {
        return
      }
      let type = ''
      switch (this.type) {
        case 'year':
          type = 'y'
          break
        case 'month':
          type = 'y-MM'
          break
        case 'date':
          type = 'y-MM-dd'
          break
        case 'datetime':
          type = 'y-MM-dd hh:mm:ss'
          break
      }
      if (this.format) {
        // 指定了显示的格式时，按指定的返回
        type = this.format
      }
      this.showValue = this._parseDate(dateValue, type)
      // 更新v-model
      const vModel = this._parseDate(dateValue, this.valueFormat || type)
      date && this._emit(vModel)
    },
    // 格式化时间
    _parseDate (date, formatType) {
      let dateTime = new Date(date)
      if (dateTime.toString() === 'Invalid Date') {
        // 日期不合法
        dateTime = ''
        throw new Error('日期不合法')
        // return date
      }
      if (formatType === 'timestamp') {
        return dateTime.getTime() // 时间戳直接返回
      }
      const m = dateTime.getMonth() + 1
      const d = dateTime.getDate()
      const h = dateTime.getHours()
      const mi = dateTime.getMinutes()
      const s = dateTime.getSeconds()
      const formatObj = {
        y: dateTime.getFullYear(),
        M: m,
        MM: m > 9 ? m : '0' + m,
        d: d,
        dd: d > 9 ? d : '0' + d,
        h: h,
        hh: h > 9 ? h : '0' + h,
        m: mi,
        mm: mi > 9 ? mi : '0' + mi,
        s: s,
        ss: s > 9 ? s : '0' + s,
        w: dateTime.getDay()
      }
      return formatType.replace(/(y|MM|M|dd|d|hh|h|mm|m|ss|s|w)/g, result => {
        let value = formatObj[result]
        if (result === 'w') return ['日', '一', '二', '三', '四', '五', '六'][value]
        return value
      })
    },
    _emit (date) {
      this.$emit('input', date)// 返回父组件更新
      // 通知表单组件
      this.dispatch('formItem', `${prefixCls}.form.change`, [date, ''])
      this.$emit('change', date)
    },
    _open (e) {
      // 判断当前点击元素在组件里即展开，即属于组件子节点，不在关闭
      if (this.$el.contains(e.target) && !this.disabled && !this.status) {
        this.offset = this.getOffset(this.$refs.input.$el)
        if (!this.appendToBody) {
          // 将插入位置改为0
          this.offset.left = 0
          this.offset.top = 0
        }
        this.positionTop = this._setPosition(e)
        const props = {
          positionTop: this.positionTop,
          downStyle: this.downStyle,
          offset: this.offset,
          value: this.value,
          input: (time) => {
            console.log(time)
            console.log('=-=-=-=-=-=-=-=-=')
            this._getShowValue(time)
            this.status = false
            // 这里更新下value
          },
          disabledDate: (time) => { // 不能选的日期
            return this.disabledDate && this.disabledDate(time)
          },
          type: this.type,
          innerHTML: (time) => {
            return this.innerHTML && this.innerHTML(time)
          }
        }
        const propsData = Object.assign({}, props)
        this.component = new Picker({propsData}).$mount()
        if (this.appendToBody) {
          document.body.appendChild(this.component.$el)
        } else {
          this.$el.appendChild(this.component.$el)
        }
        this.status = true
      } else {
        if (this.component) {
          this.component.close()
          this.status = false
        }
      }
    },

    _input (val) {
      // readonly=false时，用户输入事件。清空事件
      this.showValue = val
      if (val === '') {
        this._emit('')
      }
    },
    // 当只读模式为false，有失焦事件，对日期进行检验
    _blur (e) {
      /* console.log('ok')
      const value = e.target.value
      if (!value) {
        return
      }
      let dateTime = new Date(value.toString())
      if (dateTime.toString() === 'Invalid Date') {
        // 日期不合法
        dateTime = ''
      }
      this._emit(dateTime) */
    },
    _setPosition (e) {
      let top = false
      if (this.maxHeight) {
        // 设有距浏览器底部高度时
        const wh = document.documentElement.clientHeight || document.body.clientHeight
        const clientY = e.clientY // 当鼠标事件发生时，鼠标相对于浏览器（这里说的是浏览器的有效区域）y轴的位置；
        if (this.maxHeight > wh - clientY) {
          top = true
        }
      }
      return top
    }
  },
  computed: {},
  mounted () {
    document.addEventListener('click', this._open)
    this._getShowValue()
  },
  beforeDestroy () {
    document.removeEventListener('click', this._open)
  },
  destroyed () {
    console.log('destroyed')
    // if appendToBody is true, remove DOM node after destroy
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  filters: {}
}
</script>
