<template>
  <div>
    <el-button @click="buttonClick">queryByPage</el-button>
    <el-button @click="buttonClickInsert">insert</el-button>
    <el-button @click="buttonClickEdit">edit</el-button>
    <el-button @click="buttonClickDel">del</el-button>
    <el-button @click="buttonClickLogin">login</el-button>
    <el-button @click="buttonClickById">ById</el-button>
    <el-button @click="buttonClickTest">test</el-button>
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

  defineOptions({ name: 'test001' })
  const val = ref(0.25)
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
      name: 'demotesst',
      tableName: 'demotesst',
      category: '',
      remark: 'remark',
      status: 1,
      id: '',
      tableData:
        '[{"name":"name","type":"VARCHAR","length":"50","label":"title name"}]'
    }

    getRequest('datasource/creat', params)
  }
  const buttonClickEdit = () => {
    const params = {
      name: '调试demo',
      tableName: 'demo_test',
      category: 0,
      remark: '调试demo_test',
      status: 1,
      id: 24,
      creatDate: '2024-01-02T09:54:40.000+00:00',
      updateDate: '2024-01-02T09:54:40.000+00:00',
      creatUserId: 1,
      updateUserId: 'null',
      tableData:
        '[{"name":"name","type":"VARCHAR","length":"50","label":"标题","filedType":"text"}]'
    }
    getRequest('datasource/edit', params)
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
  const buttonClickTest = () => {
    //getRequest('demo/select', {})
    //getRequest('demo/dict', {})
    //getRequest('demo/echarts', {})
    getRequest('test/t', {})
  }
</script>
