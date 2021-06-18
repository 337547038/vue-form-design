<!-- Created by 337547038. -->
<template>
  <ak-form-item
    ref="itemform"
    :itemRules="itemRules"
    :label="item.item&&item.item.label"
    :prop="item.name||item.key"
    :class="{[item.item&&item.item.className]:item.item&&item.item.className,active:activeKey===item.name}"
    :required="item.item&&item.item.required"
    @click="_click">
    <template v-if="readOnly">
      {{getText(item.control.value)}}
    </template>
    <template v-else>
      <ak-input
        v-model="vModel"
        v-bind="item.control"
        :type="item.type"
        v-if="item.type==='input'||item.type==='password'" />
      <ak-radio-group
        v-model="vModel"
        v-bind="item.control"
        v-if="item.type==='radio'"></ak-radio-group>
      <ak-checkbox-group
        v-model="item.control.value"
        v-bind="item.control"
        v-if="item.type==='checkbox'"></ak-checkbox-group>
      <ak-date-picker
        v-model="vModel"
        v-bind="item.control"
        v-if="item.type==='datePicker'"></ak-date-picker>
      <ak-select
        v-model="vModel"
        v-bind="item.control"
        v-if="item.type==='select'"></ak-select>
      <ak-switch
        v-model="vModel"
        v-bind="item.control"
        v-if="item.type==='switch'"></ak-switch>
      <ak-textarea
        v-model="vModel"
        v-bind="item.control"
        v-if="item.type==='textarea'"></ak-textarea>
      <div
        v-bind="item.control"
        v-if="item.type==='txt'"
        v-html="vModel"></div>
      <div class="item-tips" v-if="item.other" v-html="item.other.value" @click="item.other.click(item)"></div>
    </template>
    <template slot="other">
      <div class="tips-unit" v-if="item.tipsUnit">{{item.tipsUnit}}</div>
      <drag-control
        :clone="true"
        @click="_controlClick"
        v-show="activeKey===item.name"
        v-if="showControl">
      </drag-control>
      <div class="tag-table" v-if="showControl&&item.tableList" title="在列表表头中显示该字段">TH</div>
    </template>
  </ak-form-item>
</template>

<script>
import DragControl from './dragControl'
import bus from '@/utils/bus'

export default {
  name: 'formItem1',
  data() {
    return {
      vModel: this.value
    }
  },
  props: {
    itemRules: Array,
    value: null,
    showControl: Boolean,
    activeKey: String,
    item: Object,
    readOnly: Boolean
  },
  components: {DragControl},
  created() {
  },
  watch: {
    vModel(v) {
      this.$emit('input', v)
    },
    value(v) {
      this.vModel = v
    }
  },
  methods: {
    setRemoteFunc(obj) {
      /* console.log('setRemoteFunc')
      console.log(obj)
      console.log(this.item)
      if (this.item.isFun && obj[this.item.func]) {
        obj[this.item.func](res => {
          if (this.item.type === 'select') {
            this.item.control.options = res
          } else {
            this.item.control.data = res
          }
        })
      } */
    },
    _click(evt) {
      this.$emit('checkClick', evt)
      evt && evt.stopPropagation()
    },
    _controlClick(type) {
      this.$emit('click', type)
    },
    validate() {
      let temp = []
      this.$refs.itemform.validate(res => {
        console.log(res)
        if (res !== true) {
          temp.push(res)
        }
      })
      return temp
    },
    getText(text) {
      if (typeof text === 'string') {
        return text
      } else {
        return text && text.toString()
      }
    },
    _setValue() {
      // 修改后提交表格检验时存在问题，这里更新下
      if (this.$refs.itemform && this.value !== undefined) {
        this.$refs.itemform.controlValue = this.value
      }
    }
  },
  computed: {},
  mounted() {
    // this.setRemoteFunc()
    // bus.$on('setRemoteFunc', this.setRemoteFunc) // 检索事件监听
    bus.$on('setValue', this._setValue)
  }
}
</script>
