<template>
  <div>
    <el-button @click="buttonClick">queryByPage</el-button>
    <el-button @click="buttonClickInsert">insert</el-button>
    <el-button @click="buttonClickEdit">edit</el-button>
    <el-button @click="buttonClickDel">del</el-button>
    <el-button @click="buttonClickLogin">login</el-button>
    <el-button @click="buttonClickById">ById</el-button>
  </div>
  <Progress />
</template>
<route>
{meta:{
layout:'hidden'}}
</route>
<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import { useLayoutStore } from '@/store/layout'
  import { getRequest } from '@/api'
  import Progress from './progress.vue'

  const buttonClick = () => {
    const params = {
      query: {
        //name: 'name12',
        //status: 1
      },
      extend: {
        formId: 27,
        pageSize: 20,
        pageNum: 1
      }
    }
    getRequest('content/list', params).then(res => {
      console.log(res)
    })
  }
  const buttonClickInsert = () => {
    const params = {
      name: 'name12',
      tableName: '1',
      category: '',
      remark: '',
      status: 1,
      formId: 25,
      tableData:
        '[{"label":"a","name":"a","type":"INT","length":"1","default":"","empty":false,"remark":"","enterable":true}]'
    }

    getRequest('content/save', params)
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
  const buttonClickById = () => {
    const params = {
      formId: '25',
      id: '1'
    }
    getRequest('content/get', params)
  }
</script>
