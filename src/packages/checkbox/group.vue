<!--Created by 337547038 on 2018/9/6.-->
<!--example
<CheckboxGroup :data="groupDate" v-model="group"></CheckboxGroup>
    group: ['a1', 'a3', 'a6'],
    groupDate: [
       {label: '选项1', value: 'a1'},
       {label: '选项2', value: 'a2'},
       {label: '选项3', value: 'a3'},
       {label: '选项4', value: 'a4'},
       {label: '禁用', value: 'a5', disabled: true},
       {label: '勾选禁用', value: 'a6', disabled: true}
    ]
-->
<template>
  <div :class="`${prefixCls}-checkbox-group`">
    <Checkbox v-for="(item,index) in data"
              :key="index"
              :value="item.value"
              :label="item.label||item.value"
              :disabled="disabled||item._disabled||item.disabled"
              :class="item.class"
              v-model="groupValue"
              @change="_change($event,item)">
    </Checkbox>
  </div>
</template>
<script>
import Checkbox from './checkbox'
import {prefixCls} from '../prefix'

export default {
  name: `${prefixCls}CheckboxGroup`,
  data () {
    return {
      prefixCls: prefixCls,
      groupValue: this.value // 初始选中值
    }
  },
  watch: {
    value (v) {
      this.groupValue = v
      this._change(v) // value改变时处理超出最大最小限制时的禁用状态
    }
  },
  updated () {
  },
  props: {
    data: Array,
    value: Array,
    name: String,
    max: Number,
    min: Number,
    change: Function,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {Checkbox},
  methods: {
    _change (value, item) {
      const newLen = this.groupValue.length
      if (newLen >= this.max) {
        // 将所有未勾选的设为禁用状态
        this.data.forEach(item => {
          if (this.groupValue.indexOf(item.value) === -1) {
            this.$set(item, '_disabled', true)
          }
        })
      } else if (newLen <= this.min) {
        // 将所有已勾选的设为禁用状态
        this.data.forEach(item => {
          if (this.groupValue.indexOf(item.value) !== -1) {
            this.$set(item, '_disabled', true)
          }
        })
      } else {
        // 将所有_disabled去掉
        this.data.forEach(item => {
          delete item._disabled
        })
      }
      if (item) { // 监听状态时不用发emit
        this.$emit('input', [...this.groupValue])
        this.change && this.change(value, item)
        this.$emit('change', value, item)
      }
    },
    toggleSelect (boolean) {
      let value = []
      this.data && this.data.forEach(item => {
        if (boolean) {
          // 全选时
          if (item.disabled && this.value.indexOf(item.value) === -1) {
            // 禁用且没有勾选的过滤
          } else {
            value.push(item.value)
          }
        } else {
          // 取消选择时
          if (item.disabled && this.value.indexOf(item.value) !== -1) {
            // 禁用且没有勾选的过滤
            value.push(item.value)
          }
        }
      })
      this.$emit('input', value)
    },
    getValue () {
      return this.data.filter(item => {
        return this.value.indexOf(item.value) !== -1
      })
    }
  },
  computed: {},
  mounted () {
  },
  filters: {}
}
</script>
