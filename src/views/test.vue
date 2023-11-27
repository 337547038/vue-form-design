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
      query: {
        status: 1,
        other: '没用的字段'
      },
      pageInfo: {
        pageNum: 1,
        pageSize: 10
      }
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
      username: 'user',
      password: '123456'
    }
    getRequest('user/login', params)
  }
  const useStore = useLayoutStore()
  const data = {
    token:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ1c2VyIiwiZXhwIjoxNzAwNTM3NzQ0fQ.x8MRbBmRmtuuVl73qiGjjl2MWh9iM1hfzqyRbv5Sso8'
  }
  //useStore.setLoginInfo(data)
</script>
