<template>
  <div>
    <ak-form
      :formData="formData"
      ref="formName"
      :requestUrl="requestUrl"
      :submitUrl="submitUrl"
    />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const formData = ref({
    list: [
      {
        type: 'input',
        control: { modelValue: '' },
        config: { editDisabled: true, disabledEdit: false, disabledAdd: true },
        name: 'text',
        item: { label: '文本框', showLabel: false }
      },
      {
        type: 'textarea',
        control: { modelValue: '' },
        config: {},
        name: 'textarea',
        item: { label: '多行文本', showLabel: false }
      },
      {
        type: 'radio',
        control: { modelValue: '' },
        options: [
          { label: '男', value: '0' },
          { label: '女', value: '1' }
        ],
        config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
        name: 'radio',
        item: { label: '单选框组', showLabel: false }
      },
      {
        type: 'checkbox',
        control: { modelValue: [] },
        options: [
          { label: '学习', value: '1' },
          { label: '游戏', value: '2' },
          { label: '看书', value: '3' }
        ],
        config: {
          type: 'fixed',
          source: 0,
          request: 'get',
          sourceFun: '',
          transform: true
        },
        name: 'checkbox',
        item: { label: '多选框组测试', showLabel: false }
      },
      {
        type: 'select',
        control: { modelValue: '', appendToBody: true },
        options: [],
        config: {
          type: 'async',
          source: 2,
          request: 'get',
          sourceFun: 'select'
        },
        name: 'select1',
        item: { label: '下拉选择', showLabel: false }
      },
      {
        type: 'datePicker',
        control: { modelValue: '', type: 'date' },
        config: {},
        name: 'datePicker',
        item: { label: '日期选择器', showLabel: false }
      },
      {
        type: 'timePicker',
        control: { modelValue: '' },
        config: {},
        name: 'timePicker',
        item: { label: '时间选择器', showLabel: false }
      },
      {
        type: 'colorPicker',
        control: { modelValue: '' },
        config: {},
        name: 'colorPicker',
        item: { label: '取色器', showLabel: false }
      },
      {
        type: 'switch',
        control: { modelValue: false },
        config: { transform: true },
        name: 'switch',
        item: { label: '开关', showLabel: false }
      },
      {
        type: 'inputNumber',
        control: { modelValue: 0 },
        config: {},
        name: 'inputNumber',
        item: { label: '计数器', showLabel: false }
      },
      {
        type: 'cascader',
        control: {
          modelValue: [],
          showAllLevels: false,
          props: { multiple: true }
        },
        options: [
          {
            value: 'disciplines',
            label: 'Disciplines',
            children: [
              { value: 'consistency', label: 'Consistency' },
              { value: 'a', label: 'a' }
            ]
          }
        ],
        config: {
          type: 'fixed',
          source: 0,
          request: 'get',
          sourceFun: '',
          transform: true
        },
        name: 'cascader',
        item: { label: '级联选择器', showLabel: false }
      },
      {
        type: 'rate',
        control: { modelValue: 0 },
        config: {},
        name: 'rate',
        item: { label: '评分', showLabel: false }
      },
      {
        type: 'slider',
        control: { modelValue: [0, 0], range: true },
        config: { transform: true },
        name: 'slider',
        item: { label: '滑块', showLabel: false }
      },
      {
        type: 'component',
        control: { modelValue: '' },
        config: { componentName: 'ComponentTest' },
        name: 'component',
        item: { label: '自定义组件', showLabel: false }
      },
      {
        type: 'upload',
        control: { modelValue: [] },
        config: { transform: true },
        name: 'upload',
        item: { label: '图片文件上专', showLabel: false }
      },
      {
        type: 'table',
        list: [
          {
            type: 'input',
            control: { modelValue: '' },
            config: {},
            name: 'table3',
            item: { label: '子表text', showLabel: false }
          },
          {
            type: 'select',
            control: { modelValue: '', appendToBody: true },
            options: [
              { label: '标签1', value: 'value1' },
              { label: '标签2', value: 'value2' },
              { label: '标签3', value: 'value3' }
            ],
            config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
            name: 'table2',
            item: { label: '子表选择', showLabel: false }
          }
        ],
        tableData: [],
        control: { border: true },
        config: { transform: true },
        name: 'table1'
      },
      {
        type: 'tinymce',
        control: { modelValue: '' },
        config: {},
        name: 'richText',
        item: { label: '富文本', showLabel: false }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1661740770371'
    },
    config: {
      title: '示例表单',
      formId: '1',
      confirm: '提交',
      cancel: '取消',
      addLoad: true
    }
  })

  // 表单控件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
    console.log(key)
    console.log(value)
  })*/
  const submitUrl = ref(false) // 表单提交url
  const requestUrl = ref(false) // 获取表单初始数据
  const formName = ref()
</script>
