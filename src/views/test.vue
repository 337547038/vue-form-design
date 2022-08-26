<template>
  <div>
    <ak-form :formData="formData" ref="formName" />
    <el-button type="primary" @click="setOptions">设置options值</el-button>
  </div>
</template>
<script setup>
  import { provide, ref } from 'vue'

  const formData = ref({
    list: [
      {
        name: 'radio',
        type: 'radio',
        control: { modelValue: '' },
        options: [],
        config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
        item: { label: '单选框组', showLabel: false }
      },
      {
        name: 'checkbox',
        type: 'checkbox',
        control: { modelValue: [] },
        options: [],
        config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
        item: { label: '多选框组', showLabel: false }
      },
      {
        name: 'select',
        type: 'select',
        control: { modelValue: '', appendToBody: true },
        options: [],
        config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
        item: { label: '下拉选择框', showLabel: false }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1660790919277'
    }
  })
  const formName = ref()
  const setOptions = () => {
    formName.value.setOptions({
      radio: [{ label: '单选测试', value: 'value3' }],
      checkbox: [{ label: '多选测试', value: 'value3' }],
      select: [
        { label: '下拉测试2', value: 'value3' },
        { label: '下拉测试21', value: 'value31' }
      ]
    })
  }
</script>
