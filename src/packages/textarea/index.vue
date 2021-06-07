<!-- Created by 337547038 on 2018/9/6 0006. -->
<!--<Textarea v-model="textarea" placeholder="输入些文字回车换行试试"></Textarea>-->
<template>
  <textarea :class="cls" ref="text" :style="style" @input="_change" v-model="textValue"></textarea>
</template>
<script>
import emitter from '../mixins/emitter'
import {prefixCls} from '../prefix'

export default {
  name: `${prefixCls}Textarea`,
  // inheritAttrs: false,
  mixins: [emitter],
  data () {
    return {
      textValue: this.value,
      border: 2
    }
  },
  watch: {
    value (val) {
      this.textValue = val
    },
    textValue (v) {
      this.$emit('input', v)
      if (this.autoHeight) {
        let el = this.$refs.text
        el.style.height = 'auto'
        el.style.height = (el.scrollHeight + this.border) + 'px'
      }
      /* console.log(el.scrollHeight)//不带边框，包括高和padding
       console.log(el.offsetHeight)//带边框和padding
       console.log(el.clientHeight);
       console.log(el.scrollTop); */
    }
  },
  props: {
    value: String,
    autoHeight: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '80px'
    }
  },
  mounted () {
    this._getBorder()
  },
  components: {},
  methods: {
    _getBorder () {
      // 取下边框的高，计算会准确点
      let el = this.$refs.text
      this.border = el.offsetHeight - el.clientHeight
    },
    _change (e) {
      this.$emit('input', e.target.value)
      this.dispatch('formItem', `${prefixCls}.form.change`, [e.target.value, e])
    }
  },
  computed: {
    style () {
      return {
        width: this.width,
        height: this.height,
        minHeight: this.height,
        overflow: this.autoHeight ? 'hidden' : '',
        boxSizing: 'border-box'
      }
    },
    cls () {
      return `${prefixCls}-textarea`
    }
  }
}
</script>
