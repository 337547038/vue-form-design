<!-- Created by 337547038 on 2021/9/27. -->
<template>
  <el-form-item
    v-bind="element.item"
    :prop="element.name"
    :class="element.className"
    :rules="element.rules&&element.rules.length>0?element.rules:{}"
    :label="getLabel(element)">
    <template #label v-if="element.help">
      {{ getLabel(element) }}
      <el-tooltip placement="top">
        <template #content>
          <span v-html="element.help"></span>
        </template>
        <i class="icon-help"></i>
      </el-tooltip>
    </template>
    <el-input
      v-model="element.control.modelValue"
      v-bind="element.control"
      :disabled="editDisabled"
      :type="element.type==='password'?'password':''"
      v-if="element.type==='input'||element.type==='password'">
      <template v-slot:[key] v-for="(te,key) in element.slot">
        {{ te }}
      </template>
    </el-input>
    <el-input
      v-model="element.control.modelValue"
      v-bind="element.control"
      :disabled="editDisabled"
      type="textarea"
      v-if="element.type==='textarea'">
    </el-input>
    <el-radio-group
      v-bind="element.control"
      :disabled="editDisabled"
      v-model="element.control.modelValue"
      v-if="element.type==='radio'">
      <el-radio
        :key="index"
        :label="item.value"
        v-for="(item,index) in element.options">
        {{ item.label }}
      </el-radio>
    </el-radio-group>
    <el-checkbox-group
      v-bind="element.control"
      :disabled="editDisabled"
      v-model="element.control.modelValue"
      v-if="element.type==='checkbox'">
      <el-checkbox
        v-for="(item,index) in element.options"
        :key="index"
        :value="item.value"
        :label="item.label">
      </el-checkbox>
    </el-checkbox-group>
    <el-select
      v-if="element.type==='select'"
      v-bind="element.control"
      :disabled="editDisabled"
      v-model="element.control.modelValue">
      <el-option
        v-for="item in element.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-date-picker
      v-if="element.type==='datePicker'"
      v-bind="element.control"
      :disabled="editDisabled"
      v-model="element.control.modelValue">
    </el-date-picker>
    <el-switch
      v-if="element.type==='switch'"
      v-bind="element.control"
      :disabled="editDisabled"
      v-model="element.control.modelValue">
    </el-switch>
    <el-input-number
      v-if="element.type==='number'"
      v-model="element.control.modelValue"
      v-bind="element.control"
      :disabled="editDisabled">
    </el-input-number>
    <el-cascader
      v-if="element.type==='cascader'"
      v-model="element.control.modelValue"
      v-bind="element.control"
      :disabled="editDisabled"
      :options="element.options">
    </el-cascader>
    <el-upload
      v-if="element.type==='upload'"
      v-bind="element.control"
      :disabled="editDisabled"
      class="avatar-uploader">
      <i class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <component
      :is="element.component"
      v-model="element.control.modelValue"
      v-bind="element.control"
      :disabled="editDisabled"
      v-if="element.type==='component'&&type!==2" />
    <!-- 表单设计模式下显示提示-->
    <div v-if="element.type==='component'&&type===2" class="gray">请使用provide注入组件如：provide('{{ element.template }}',
      import进来的组件)
    </div>
    <div
      v-bind="element.control"
      v-if="element.type==='txt'"
      v-html="element.control.modelValue">
    </div>
  </el-form-item>
</template>

<script>
import axios from "@/utils/request"
import {toRefs, inject, onMounted, computed, reactive, watch} from 'vue'

export default {
  name: "item",
  components: {},
  props: {
    element: Object
  },
  setup(props) {
    const injectData = inject('statusType', {})
    const state = reactive({
      type: injectData.type
    })
    // 使用动态选项方法函数获取options数据项，父级使用provide方法注入
    const config = props.element.config && toRefs(props.element.config)
    const getValue = field => {
      return config && config[field] && config[field].value
    }
    // props.type===1 为表单添加页时才拉取动态或方法数据
    if (getValue('type') === 'async' && getValue('source') === 1 && props.type === 1 && getValue('sourceFun')) {
      props.element.options = inject(getValue('sourceFun'), [])
    }
    // 使用动态选项ajax请求获取options数据项
    const getAxiosOptions = () => {
      if (getValue('type') === 'async' && getValue('source') === 0 && props.type === 1) {
        // 当前控件为动态获取数据
        // request.get('url',data)
        axios[getValue('request')](getValue('sourceFun'), '')
          .then(res => {
            if (res.data.code === 200) {
              // 请求成功
              props.element.options = res.data.data
            }
          })
          .catch(res => {
            console.log(res)
          })
      }
    }
    // 自定义组件注入
    if (props.element.type === 'component' && props.element.template) {
      props.element.component = inject(props.element.template, '')
    }
    const getLabel = ele => {
      if (ele.item) {
        if (ele.item.showLabel) {
          return ''
        } else {
          return ele.item.label
        }
      } else {
        return ''
      }
    }
    // 控制编辑模式下是否可用
    const editDisabled = computed(() => {
      if (injectData.type === 1 && injectData.isEdit && props.element.config && props.element.config.editDisabled) {
        // 新增模式 编辑模式
        return true
      }
      return props.element.control.disabled
    })
    // 为改变事件提供方法
    const changeEvent = inject('controlChange', '')
    watch(() => props.element.control.modelValue, val => {
      changeEvent && changeEvent({key: props.element.name, value: val})
    })
    onMounted(() => {
      getAxiosOptions()
    })
    return {
      getLabel,
      editDisabled,
      ...toRefs(state)
    }
  }
}
</script>
