<!-- Created by 337547038 on 2018/8/27 0027. -->
<!--<Select placeholder="请选择" :options="options" v-model="value"></Select>-->
<template>
  <div :class="{'open':show,[prefixCls+'-select']:true,top:position}">
    <div :class="{
    'show-clear':clear&&value.length>0,
    [prefixCls+'-select-control']:true}" @click="_selectControlClick">
      <input
        type="text" v-if="filterable"
        :class="{
             [prefixCls+'-input-control']:true,
             'focus':show,
             'placeholder':placeholder&&value.length===0,
             'disabled':disabled}"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="_change"
        @blur="_blur"
        :value="keywords"
        ref="input">
      <div
        :class="{
           [prefixCls+'-input-control']:true,
           'focus':show,
           'disabled':disabled}"
        v-if="!filterable"
        :placeholder="!text?placeholder:''">
        <ul v-if="multiple&&text" class="multiple-text" :placeholder="!text?placeholder:''">
          <li v-for="(item,index) in text.split(',')" :key="index">
            <span v-text="item"></span>
            <i class="icon-error" @click.stop="_deleteText(item,index)"></i>
          </li>
        </ul>
        <span v-else-if="text" v-text="text"></span>
      </div>
      <span class="icon-group">
      <i class="icon-close" v-if="clear&&value.length>0" @click="_clearClick"></i>
        <i :class="{'open':show,'icon-arrow':true}"></i>
      </span>
    </div>
    <div v-if="$slots.default">
      <slot></slot>
    </div>
    <transition :name="transition">
      <div
        :class="{[prefixCls+'-select-down']:true,[downClass]:downClass}"
        v-show="show&&filterOption.length>0"
        :style="showLiNum"
        v-if="!$slots.template"
        ref="selectDown">
        <ul>
          <li v-for="(item,index) in filterOption" @click="_itemClick(item,$event)"
              :class="{'disabled':item.disabled,'active':_getActive(item),[item.className]:item.className}" ref="li"
              :key="index" :title="item.label||item.value">
            {{item.label || item.value}}
          </li>
        </ul>
      </div>
      <div :class="{[prefixCls+'-select-down']:true,[downClass]:downClass}" v-if="$slots.template" v-show="show"
           ref="selectDown" :style="showLiNum">
        <slot name="template"></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import {prefixCls} from '../prefix'
import emitter from '../mixins/emitter'
import dom from '../mixins/dom'

export default {
  name: `${prefixCls}Select`,
  mixins: [emitter, dom],
  data() {
    return {
      transition: 'slide-toggle',
      prefixCls: prefixCls,
      filterOption: this.options,
      show: false,
      liHeight: '', // li高度，用于显示提定的数量
      text: '',
      keywords: '', // 搜索输入框的值
      position: '',
      appendStyle: {}
    }
  },
  props: {
    value: [Array, String, Number], // 通过v-model传进来，分多选和单选
    multiple: {
      // 是否多选
      type: Boolean,
      default: false
    },
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: String, // 默认显示的文本
    showNum: {
      // 显示下拉个数，超出显示滚动条
      type: Number,
      default: 0
    },
    options: {
      type: Array,
      default: function () {
        return []
      }
    }, // 下拉选顶
    change: Function, // 下拉选择后回调
    beforeChange: Function,
    disabled: {
      // 是否禁用
      type: Boolean,
      default: false
    },
    filterable: {
      // 是否可搜索
      type: Boolean,
      default: false
    },
    clear: {
      // 是否可以清空选项
      type: Boolean,
      default: false
    },
    validateEvent: {
      // 给formItem发送改变通知
      type: Boolean,
      default: true
    },
    downStyle: Object, // 下拉面板样式
    downClass: String, // 下拉类名
    maxHeight: Number, // 距离浏览底部高度，当小于这个高度时将向上弹出
    appendToBody: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  mounted() {
    // console.log('ok')
    this._setFirstText()
    if (this.$slots.template) {
      // 自定模板时没办法将值和value对应起来
      this.text = this.value
    }
    /* 注册点击事件 */
    // document.addEventListener('click', this._showHide)
    this.$el.addEventListener('click', this._showHide)
    document.addEventListener('click', this._documentClick)
    if (this.filterable) {
      this.keywords = this.value ? this.text : ''
    }
    // console.log('$slots')
    // console.log(this.$slots)
  },
  watch: {
    show(value) {
      if (this.filterable) {
        if (value) {
          // 聚焦。有时点了不是输入框，而是旁边的方向，这里也让输入框聚焦
          this.$refs.input.focus()
        } else {
          this.$refs.input.blur()
        }
      }
    },
    value(v) {
      // console.log('value watch')
      if (this.$slots.template) {
        // 自定模板时没办法将值和value对应起来
        this.text = v
      }
      this._setFirstText() // 动态改变值时
    },
    // 当数据为异步时
    options(val) {
      // console.log('watch option')
      this.filterOption = val
      this._setFirstText() // 动态改变值时
    }
  },
  methods: {
    _documentClick() {
      this.show = false
    },
    _showHide(e) {
      if (e && this.$el.contains(e.target)) {
        if (!this.disabled) {
          // 非禁用状态下才能点击
          this.show = true
          this._setPosition(e)
        }
        // e.preventDefault();
        // e.stopPropagation();
        this.$nextTick(() => {
          if (this.$refs.li && this.$refs.li[0]) {
            this.liHeight = this.$refs.li[0].offsetHeight
          }
        })
        this._appendToBody()
      } else {
        this.show = false
      }
      e.stopPropagation()
    },
    _itemClick(item, e) {
      if (!item.disabled) {
        if (this.beforeChange && !this.beforeChange(item)) {
          this.show = false
          e.stopPropagation()
          return
        }
        if (this.multiple) {
          // 多选
          let newText = this.text ? this.text.split(',') : [] // label的值，即显示的文字
          if (this.multipleLimit > 0 && this.multipleLimit < newText.length) {
            return false
          }
          let newValue = this.value // value
          let activeValue = item.label || item.value
          let index = newText.indexOf(activeValue)
          if (index !== -1) {
            // 原来选择了，这里取消
            newText.splice(index, 1)
            newValue.splice(index, 1)
          } else {
            // 添加
            newText.push(activeValue)
            newValue.push(item.value)
          }
          this.text = newText.join(',')
          // this.$emit('input', newValue)
          this._emit(newValue, newText, 1)
        } else {
          // 单选
          this.text = item.label || item.value
          this.show = false // 收起下拉
          // this.$emit('input', item.value)
          this._emit(item.value, item, 1)
        }
        // this.$emit('change', item.value)
        this.keywords = this.text
      }
      e.stopPropagation()
    },
    _setFirstText() {
      /* console.log('_setFirstText')
      console.log(this.value)
      console.log(this.filterOption) */
      // 判断当前value是不是存在于列表的value中
      let text = []
      if (this.filterOption && this.filterOption.length > 0) {
        for (let i = 0; i < this.filterOption.length; i++) {
          let item = this.filterOption[i]
          if (this.multiple) {
            // 多选
            if (this.value.indexOf(item.value) !== -1) {
              text.push(item.label || item.value)
            }
          } else {
            // 单选
            if (item.value === this.value) {
              text.push(item.label || item.value) // 没有label时直接取value
              break
            }
          }
        }
        this.text = text.join(',')
      }
    },
    _change(e) {
      // 可搜索时输入框改变事件
      this.keywords = e.target.value
      let newArray = []
      for (let i in this.options) {
        const value = this.options[i].label || this.options[i].value
        if (value.indexOf(e.target.value) > -1) {
          newArray.push(this.options[i])
        }
      }
      this.filterOption = newArray
    },
    _blur(e) {
      // 搜索输入框失焦时，判断输入的值是否符合
      const value = e.target.value
      const filter = this.options.filter((item) => {
        return (item.label || item.value) === value && !item.disabled
      })
      if (filter.length > 0) {
        // 输入框符合要求
        const item = filter[0]
        // this.$emit('input', item.value)
        this._emit(item.value, item, 1)
        this.text = item.label || item.value
      } else {
        // 还原
        this.keywords = this.value ? this.text : ''
      }
      // 还原下拉数据
      setTimeout(() => {
        this.filterOption = this.options
      }, 500)
    },
    _getActive(item) {
      if (this.multiple) {
        return this.value.indexOf(item.value) !== -1
      } else {
        return item.value === this.value
      }
    },
    _clearClick(e) {
      const value = this.multiple ? [] : ''
      // this.$emit('input', value)
      this._emit(value, '', 1)
      this.keywords = ''
      this.text = ''
      e.stopPropagation()
    },
    _emit(value, label, type) {
      // type 0系统触发，1手动触发
      this.$emit('input', value)
      // 手动触发的给组件formItem发送验证广播
      if (type === 1) {
        this.$emit('change', value, label) // 改变事件
        this.change && this.change(value, label)
        if (this.validateEvent) {
          this.dispatch('formItem', `${prefixCls}.form.change`, [value, ''])
        }
      }
    },
    _selectControlClick(e) {
      // 添加一个事件，在展开的时候点击收起
      if (this.show) {
        this.show = false
        e.stopPropagation()
      }
    },
    close() {
      this.$nextTick(() => {
        this.show = false
      })
    },
    // 点击展开时，判断展开的方向
    _setPosition(e) {
      this.transition = 'slide-toggle' // 恢复
      if (this.maxHeight === 0) {
        this.position = 'top'
        this.transition = 'slide-toggle-top'
      } else if (this.maxHeight) {
        // 设有距浏览器底部高度时
        this.position = ''
        const wh = document.documentElement.clientHeight || document.body.clientHeight
        const clientY = e.clientY // 当鼠标事件发生时，鼠标相对于浏览器（这里说的是浏览器的有效区域）y轴的位置；
        if (this.maxHeight > wh - clientY) {
          this.position = 'top'
          this.transition = 'slide-toggle-top'
        }
      }
    },
    _deleteText(item, index) {
      // 多选时删除单个选项
      if (this.multiple) {
        let val = JSON.parse(JSON.stringify(this.value))
        val.splice(index, 1)
        const newText = this.text.replace(item + ',', '').replace(item, '')
        this._emit(val, newText, 1)
      }
    },
    _appendToBody() {
      // 插入到body
      if (this.appendToBody) {
        // 插入到body
        const ww = this.getWindow()
        const offset = this.getOffset(this.$el)
        this.appendStyle = {
          width: offset.width + 'px',
          left: offset.left + 'px',
          top: (offset.top + offset.height) + 'px'
        }
        if (this.position === 'top') {
          this.appendStyle.top = 'auto'
          this.appendStyle.bottom = (ww.height - offset.top) + 'px'
        }
        document.body.appendChild(this.$refs.selectDown)
      }
    }
  },
  computed: {
    showLiNum() {
      let style = {}
      if (this.showNum && this.options.length > this.showNum) {
        style = {
          height: this.liHeight * this.showNum + 'px',
          overflowY: 'auto'
        }
      }
      style = Object.assign({}, this.appendStyle, this.downStyle || {}, style)
      return style
    }
  },
  filters: {},
  beforeDestroy() {
    if (this.appendToBody) {
      console.log(this.$refs.selectDown)
      document.body.removeChild(this.$refs.selectDown)
    }
  },
  destroyed() {
    // document.removeEventListener('click', this._showHide)
    this.$el.addEventListener('click', this._showHide)
    document.addEventListener('click', this._documentClick)
  }
}
</script>
