<template>
  <div>
    <div><img :src="src" /></div>
    <el-button @click="getListClick">list</el-button>
    <el-button @click="addClick">add</el-button>
    <el-button @click="loginClick">login</el-button>
    <el-button @click="getImgClick">getImg</el-button>
    <el-button @click="checkImgClick">checkImgClick</el-button>
  </div>
</template>
<route>
{meta:{
layout:'hidden'}}
</route>
<script setup>
  import { ref } from 'vue'

  const src = ref()
  import { getRequest } from '@/api'

  const getListClick = () => {
    getRequest('get|test/list', { name: '' }).then(res => {
      console.log(res)
    })
  }

  const addClick = () => {
    getRequest('test/add', {}).then(res => {
      console.log(res)
    })
  }

  const loginClick = () => {
    getRequest('loginSubmit', {
      username: 'user',
      password: '5555',
      code: '455'
    })
  }
  const getImgClick = () => {
    getRequest('captcha/get', {}).then(res => {
      console.log(res)
      src.value = 'data:image/png;base64,' + res.data.base64
    })
  }
  const checkImgClick = () => {
    getRequest('captcha/verify', {
      code: 'ra78',
      codeId: '693f5c884f6c2c1764d36a38fcd1b355'
    })
  }
</script>
