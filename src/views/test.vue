<template>
  <div>
    <ak-form
      :formData="formData"
      ref="formName"
      :requestUrl="requestUrl"
      :submitUrl="submitUrl"
    />
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script setup>
  import { ref, markRaw } from 'vue'
  import Iconfont from '@/components/iconfont.vue'
  import user from '@/components/user.vue'
  const formData = ref({
    list: [
      {
        type: 'component',
        control: { modelValue: ['', ''], colorPicker: true },
        config: { componentName: markRaw(Iconfont), help: '' },
        name: 'component1679711621444',
        item: { label: '自定义组件', showLabel: false },
        customRules: [{ type: 'required', message: '必填项', trigger: 'blur' }]
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1679711618846'
    },
    config: { title: 'form1679711618846', formId: '' }
  })

  // 表单控件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
    console.log(key)
    console.log(value)
  })*/
  const submitUrl = ref(false) // 表单提交url
  const requestUrl = ref(false) // 获取表单初始数据
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
