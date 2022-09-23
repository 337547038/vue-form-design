<template>
  <div>
    <ak-form :formData="formData" ref="formName" :submitUrl="submitUrl" />
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const uploadError = (err, file, fileList) => {
    console.log('错误异常处理')
    console.log(err, file, fileList)
  }
  const formData = ref({
    list: [
      {
        name: 'upload',
        type: 'upload',
        control: {
          modelValue: [],
          action: 'http://localhost:3001/upload/single',
          listType: 'picture-card',
          limit: 2,
          onError: uploadError
        },
        config: {
          tip: '一些上传提示文案',
          btnText: ''
        },
        item: { label: '图片/文件', showLabel: false }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1660793512027'
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

  setTimeout(() => {
    /*formName.value.setValue({
      upload:
        'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
    })*/
    formName.value.setValue({
      upload: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ]
    })
  }, 1000)
</script>
