<!-- Created by 337547038 on 2021/9/27. -->
<template>
  <el-form-item
    v-bind="element.item"
    :prop="element.name"
    :class="element.className"
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
      :type="element.type==='password'?'password':''"
      v-if="element.type==='input'||element.type==='password'">
      <template v-slot:[key] v-for="(te,key) in element.slot">
        {{ te }}
      </template>
    </el-input>
    <el-input
      v-model="element.control.modelValue"
      v-bind="element.control"
      type="textarea"
      v-if="element.type==='textarea'">
    </el-input>
    <el-radio-group
      v-bind="element.control"
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
      v-model="element.control.modelValue">
    </el-date-picker>
    <el-switch
      v-if="element.type==='switch'"
      v-bind="element.control"
      v-model="element.control.modelValue">
    </el-switch>
    <el-input-number
      v-if="element.type==='number'"
      v-model="element.control.modelValue"
      v-bind="element.control">
    </el-input-number>
    <el-cascader
      v-if="element.type==='cascader'"
      v-model="element.control.modelValue"
      v-bind="element.control"
      :options="element.options">
    </el-cascader>
    <el-upload
      v-if="element.type==='upload'"
      class="avatar-uploader">
      <i class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <component
      :is="element.component"
      v-model="element.control.modelValue"
      v-bind="element.control"
      v-if="element.type==='component'" />
    <div
      v-bind="element.control"
      v-if="element.type==='txt'"
      v-html="element.control.modelValue">
    </div>
  </el-form-item>
</template>

<script>
import axios from "@/utils/request"
import {toRefs, inject, onMounted, watch} from 'vue'

export default {
  name: "item",
  components: {},
  props: {
    element: Object,
    type: Number // 1新增；2设计；3查看
  },
  setup(props) {
    // 使用动态选项方法函数获取options数据项，父级使用provide方法注入
    const config = toRefs(props.element.config)
    const getValue = field => {
      return config[field] && config[field].value
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
    onMounted(() => {
      getAxiosOptions()
    })
    // 关联值时，监听值变化抛出事件
    if (props.element.changeLinks) {
      const changeLinks = inject('changeLinks', '')
      watch(() => props.element.control.modelValue, val => {
        changeLinks && changeLinks({name: props.element.name, value: val})
      })
    }
    return {
      getLabel
    }
  }
}
</script>
