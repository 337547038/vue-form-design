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
      name: '示例测试',
      tableName: 'demo-test',
      category: 0,
      remark: '',
      status: 1,
      id: 19,
      creatDate: '2023-12-06T08:29:34.000+00:00',
      updateDate: '2023-12-10T05:07:49.000+00:00',
      creatUserId: 1,
      updateUserId: 1,
      tableData: JSON.stringify([
        {
          label: '名称标题',
          name: 'name2',
          type: 'VARCHAR',
          length: '50',
          default: '',
          empty: false,
          remark: '',
          enterable: true,
          isNew: true
        },
        {
          label: '内容',
          name: 'content2',
          type: 'VARCHAR',
          length: '50',
          default: '',
          empty: true,
          remark: '',
          enterable: true,
          isNew: true
        },
        {
          label: '时间',
          name: 'dateTime2',
          type: 'DATETIME',
          length: '',
          default: '',
          empty: true,
          remark: '',
          enterable: true
        }
      ])
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
    getRequest('demo/echarts', {})
  }
  const bbb = () => {
    return {
      name: 123
    }
  }
  const aaa = '123'
  window.getGlobal = key => {
    const global = {
      line: '12',
      label: 'label',
      list: {
        x: [1, 2, 3],
        data: [4, 5, 6]
      }
    }
    return key ? global[key] : global
  }
  const opt2 = `opt={
    name: '123',
    callback: () => {
      return 'abc'
    },
    list: [{ name: 1}],
    obj: { name: 2 },
    const:getGlobal("list.data")
  }`
  window.aaab = '12'
  const opt3 = {
    name: '123',
    callback: () => {
      return 'abc'
    },
    list: [{ name: 1 }],
    obj: { name: 2 },
    const: aaab
  }

  const optResult = evil(opt2)

  console.log(optResult)
  // console.log(evil(opt2))

  function evil(fn: any) {
    return new Function('return ' + fn)()
  }
</script>
