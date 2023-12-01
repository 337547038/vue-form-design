<template>
  <div>
    <el-button @click="buttonClick">queryByPage</el-button>
    <el-button @click="buttonClickInsert">insert</el-button>
    <el-button @click="buttonClickEdit">edit</el-button>
    <el-button @click="buttonClickDel">del</el-button>
    <el-button @click="buttonClickLogin">login</el-button>
  </div>
</template>
<route>
{meta:{
layout:'hidden'}}
</route>
<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import { useLayoutStore } from '@/store/layout'
  import { getRequest } from '@/api'
  const buttonClick = () => {
    const params = {
      /*query: {
        status: 1,
        other: '没用的字段'
      },
      pageInfo: {
        pageNum: 1,
        pageSize: 10
      }*/
    }
    getRequest('test/list', params).then(res => {
      console.log(res)
    })
  }
  const buttonClickInsert = () => {
    const params = {
      //name: '',
      //content: '12222',
      //phone: '13666',
      other: 'other content',
      status: 1
    }
    getRequest('test/add', params)
  }
  const buttonClickEdit = () => {
    const params = {
      //name: 'name123',
      content: '12222',
      phone: '13666',
      other: 'other content',
      status: 1,
      password: '123456',
      id: 1
    }
    getRequest('test/edit', params)
  }
  const buttonClickDel = () => {
    const params = {
      id: 6,
      batch: true
    }
    getRequest('test/delete', params)
  }
  const buttonClickLogin = () => {
    const params = {
      userName: 'user',
      password: '123456',
      codeId: '8eef4b07c0272a091c39f6b3f3d313ac',
      code: '3pq6',
      refreshToken:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxIiwiZXhwIjoxNzAxMTYxOTgyfQ.ikJzCNORJFNYeOlLF1_eGiknGYcwTSQjxALFdVy6t-A'
    }
    getRequest('system/user/login', params)
  }
</script>
