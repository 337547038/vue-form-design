<template>
  <div>
    <ak-form :formData="formData" ref="formName" :submitUrl="submitUrl">
      <template #slot1660792954637>111111</template>
    </ak-form>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const formData = ref({
    list: [
      {
        name: 'input1660792954637',
        type: 'input',
        control: { modelValue: undefined, appendToBody: true },
        config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
        item: { label: '单行文本', showLabel: false }
      },
      {
        name: 'select1660792958068',
        type: 'select',
        control: { modelValue: undefined, appendToBody: true },
        options: [
          { label: '标签1', value: 'value1' },
          { label: '标签2', value: 'value2' },
          { label: '标签3', value: 'value3' }
        ],
        config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
        item: { label: '下拉选择框', showLabel: false }
      },
      {
        name: 'slot1660792954637',
        type: 'slot',
        control: { modelValue: undefined, appendToBody: true },
        config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
        item: { label: '单行文本', showLabel: false }
      },
      {
        name: 'select1660792958068',
        type: 'select',
        control: { modelValue: undefined, appendToBody: true },
        options: [
          { label: '标签1', value: 'value1' },
          { label: '标签2', value: 'value2' },
          { label: '标签3', value: 'value3' }
        ],
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

  // 表单控件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
    console.log(key)
    console.log(value)
  })*/
  const submitUrl = ref(false) // 表单提交url
  const formName = ref()
  const submit = () => {
    formName.value.validate((valid, fields) => {
      console.log(valid)
      console.log(fields) // 校验通过时返回当前表单的值
      if (valid) {
        alert('submit')
      } else {
        console.log('error submit')
        return false
      }
    })
  }
</script>
