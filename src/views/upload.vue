<route>
{meta:{
layout:'hidden'}}
</route>
<template>
  <input ref="inputEl" type="file" @change="onFileChange" />
  <el-button @click="buttonClick">button</el-button>
</template>
<script setup>
  import { getRequest } from '@/api'
  import { ref } from 'vue'

  const val = ref()
  const onFileChange = evt => {
    const file = evt.target.files
    val.value = file[0]
    console.log(file, 'file')
    buttonClick()
  }
  const buttonClick = () => {
    const formData = new FormData()
    formData.append('file', val.value)
    formData.append('otherContent', 'otherContent')
    formData.append('name', 'name')
    getRequest('/upload/single', formData)
  }
</script>
