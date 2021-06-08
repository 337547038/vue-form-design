<!-- Created by 337547038 on 2021/6/1 0001. -->
<template>
  <div class="sidebar-tools">
    <ak-tabs class="padding">
      <ak-tab-pane label="字段属性">
        <h3>通用属性</h3>
        <ak-form-item label="样式名称">
          <ak-input v-model="dataList.className" placeholder="样式类名"></ak-input>
        </ak-form-item>
        <div v-if="dataList.type&&dataList.type!=='grid'&&dataList.type!=='childTable'">
          <ak-form-item label="字段标识">
            <ak-input v-model="dataList.name" placeholder="字段标识名称，唯一不可重复"></ak-input>
          </ak-form-item>
          <ak-form-item label="标题">
            <ak-input v-model="dataList.item.label" placeholder="显示的label标签名称"></ak-input>
          </ak-form-item>
          <ak-form-item label="占位内容">
            <ak-input v-model="dataList.control.placeholder"></ak-input>
          </ak-form-item>
          <ak-form-item label="默认值">
            <ak-input v-model="dataList.control.value"></ak-input>
          </ak-form-item>
          <ak-form-item label="列表显示" v-if="!parentType">
            <ak-checkbox v-model="dataList.tableList"></ak-checkbox>
          </ak-form-item>
          <div v-if="dataList.type==='datePicker'">
            <ak-form-item label="日期格式">
              <ak-select v-model="dataList.control.type">
                <ak-option value="year" label="year"></ak-option>
                <ak-option value="month" label="month"></ak-option>
                <ak-option value="date" label="date"></ak-option>
                <ak-option value="datetime" label="datetime"></ak-option>
              </ak-select>
            </ak-form-item>
            <ak-form-item label="只能选择">
              <ak-checkbox v-model="dataList.control.readonly"></ak-checkbox>
            </ak-form-item>
          </div>
          <div v-if="dataList.type==='radio'||dataList.type==='checkbox'||dataList.type==='select'"
               class="select-option">
            <div class="select-head">
              <h3>选项配置</h3>
              <ak-tabs :showContent="false" @change="_selectType">
                <ak-tab-pane label="固定选项"></ak-tab-pane>
                <ak-tab-pane label="动态选项"></ak-tab-pane>
              </ak-tabs>
            </div>
            <div v-if="selectTypeName==='tab-1'" class="set-option">
              <div v-for="(opt,index) in selectOptionList" :key="index" class="item">
                <ak-input v-model="opt.label" placeholder="选项标签"></ak-input>
                <ak-input v-model="opt.value" placeholder="选项值"></ak-input>
                <i class="icon-del" @click="_delSelectOption(index)"></i>
              </div>
              <ak-button @click="_addSelect" type="primary">新增</ak-button>
            </div>
            <div v-else class="padding-top">
              <ak-input v-model="dataList.func" placeholder="方法名"></ak-input>
            </div>
          </div>
          <h3>校验设置</h3>
          <div v-if="dataList.type==='input'">
            <div v-for="(item,index) in dataList.rules" :key="index" class="validate">
              <ak-select :options="rulesOptions" v-model="item.type" :maxHeight="0"></ak-select>
              <ak-input v-model="item.msg" placeholder="检验提示信息"></ak-input>
              <i class="icon-del" @click="_delRules(index)"></i>
            </div>
            <ak-button @click="_addRules" type="primary">新增</ak-button>
          </div>
          <div v-else class="required">
            <ak-checkbox v-model="required" @change="_requiredChange">必填</ak-checkbox>
            <ak-input v-model="dataList.rules[0].msg" placeholder="必填检验提示信息"
                      v-if="dataList.rules&&dataList.rules[0]"></ak-input>
          </div>
        </div>
      </ak-tab-pane>
      <ak-tab-pane label="表单属性">
        <div class="padding-top">
          <ak-form-item label="表单名称">
            <ak-input v-model="formConfig.name"></ak-input>
          </ak-form-item>
          <ak-form-item label="表单标签宽度">
            <ak-input v-model="formConfig.labelWidth"></ak-input>
          </ak-form-item>
          <ak-form-item label="表单样式名称">
            <ak-input v-model="formConfig.className"></ak-input>
          </ak-form-item>
        </div>
      </ak-tab-pane>
    </ak-tabs>
  </div>
</template>

<script>
export default {
  name: 'formControlAttr',
  data() {
    return {
      rulesOptions: [
        {label: '必填', value: 'required'},
        {label: '最大字符', value: 'maxLength'},
        {label: '最小字符', value: 'minLength'},
        {label: '手机格式', value: 'mobile'},
        {label: '固话', value: 'tel'},
        {label: '固话或手机', value: 'phone'},
        {label: '邮箱格式', value: 'mail'},
        {label: '正整数', value: 'digits'},
        {label: '数字', value: 'number'},
        {label: '自定义正则', value: 'rule'}
      ],
      required: false,
      selectTypeName: 'tab-1'
    }
  },
  props: {
    formConfig: Object
  },
  components: {},
  methods: {
    _addRules() {
      this.dataList.rules.push({
        type: 'required',
        msg: ''
      })
    },
    _delRules(index) {
      this.dataList.rules.splice(index, 1)
    },
    _requiredChange(val) {
      if (val) {
        this.dataList.rules.push({
          type: 'required',
          msg: '必填项'
        })
      } else {
        this.dataList.rules.splice(0, 1)
      }
    },
    _delSelectOption(index) {
      this.selectOptionList.splice(0, 1)
    },
    _selectType(name) {
      this.selectTypeName = name
      this.dataList.isFun = name === 'tab-2'
    },
    _addSelect() {
      this.selectOptionList.push({
        label: '',
        value: ''
      })
    }
  },
  watch: {
    dataList: {
      handler: function () {
        const type = this.dataList && this.dataList.rules && this.dataList.rules[0] && this.dataList.rules[0].type
        this.required = type === 'required'
      },
      deep: true
    }
  },
  computed: {
    dataList() {
      const val = this.$store.state.form.controlAttr
      if (Object.keys(val).length === 0) {
        return {item: {}, control: {}}
      }
      return val
    },
    selectOptionList() {
      return this.dataList.control.options || this.dataList.control.data
    },
    parentType() {
      return this.$store.state.form.parentType
    }
  },
  mounted() {
    // this.dataList = this.$store.state.form.controlAttr
  }
}
</script>
