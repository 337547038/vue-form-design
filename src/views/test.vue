<template>
  <div>
    <ak-form :formData="formData" ref="formName" :submitUrl="submitUrl" />
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const formData = ref({
    list: [
      {
        name: 'radio1',
        type: 'radio',
        control: { modelValue: '' },
        options: [
          { label: '标签1', value: '1' },
          { label: '标签2', value: 'value2' },
          { label: '标签3', value: 'value3' }
        ],
        config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
        item: { label: '单选框组', showLabel: false }
      },
      {
        name: 'input1661157240824',
        type: 'input',
        control: { modelValue: '' },
        config: { linkKey: 'radio1', linkValue: '1', linkResult: 'disabled' },
        item: { label: '单行文本', showLabel: false }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1661157238945',
      formId: ''
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
