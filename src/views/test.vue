<template>
  <div>
    <ak-form :data="formData" />
  </div>
</template>
<route>
{meta:{
layout:'hidden'}}
</route>
<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  const formData = ref({
    list: [
      {
        name: 'input1660637151831', // 表单元素唯一标识
        type: 'input', // 表单元素类型
        // 当前控件类型的所有`props`参数，详见`element-plus`对应的`props`参数
        control: {
          modelValue: ''
        },
        // 其他一些扩展配置信息
        config: {
          hidden: '$.name===1', // 联动表达式，即当表单中字段标识为`name`的控件值为`1`时，当前控件隐藏
          disabled: '$.name===1', // 联动表达式，即当表单中字段标识为`name`的控件值为`1`时，当前控件禁用
          disabledEdit: true // 编辑状态下禁用，即表单部分字段只能添加，不允许编辑时可使用此设置
        },
        customRules: [], // 使用快速方法添加的校验规则，会自动合并到`item.rules`
        // 组件el-form-item的参数配置
        formItem: {
          label: '单行文本',
          rules: [] // 校验规则
        }
      }
    ],
    // 表单配置信息
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1660637148435'
    },
    config: {
      submitUrl: '', // 表单提交保存接口url
      editUrl: '', // 表单修改保存接口url
      requestUrl: '', // 获取表单初始数据url
      style: '', // 表单css样式，相当于scope
      hideField: [], // 使用v-if隐藏的字段，用于交互。仅在导出vue时可通过自定义方法修改，组件需设置name值
      addLoad: false // 新增表单时是否从接口加载默认数据
    },
    events: {
      // 同props事件
      before: data => {
        return data
      },
      after: res => {
        return res
      },
      change: (name, model) => {
        // name当前组件的name,model当前表单的值
        return model
      }
    }
  })
</script>
