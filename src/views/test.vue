<template>
  <div>
    <ak-form :formData="formData" ref="formName" :submitUrl="submitUrl" />
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script setup>
  import { ref, provide } from 'vue'
  const formData = ref({
    list: [
      {
        type: 'select',
        control: { modelValue: '', appendToBody: true },
        options: [],
        config: {
          type: 'async',
          source: 1,
          request: 'get',
          sourceFun: 'optionsMethods'
        },
        name: 'select1662441804514',
        item: { label: '下拉选择框', showLabel: false }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1662441802135'
    },
    config: { title: 'form1662441802135', formId: '', addLoad: true }
  })

  // todo 下拉选择框获取选项值
  const select1662441804514Option = ref([{ label: '选项1', value: '1' }])
  provide('optionsMethods', select1662441804514Option)

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
