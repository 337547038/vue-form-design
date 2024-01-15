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
  import type { ScreenData } from '@/views/design/screen/types.ts'
  import { objToStringify, stringToObj } from '@/utils/design.ts'

  defineOptions({ name: 'test001' })
  const val = ref(0.25)
  const buttonClick = () => {
    const params = {
      query: {
        type: 1
      },
      extend: {
        // formId: 27,
        pageSize: 20,
        pageNum: 1
      }
    }
    getRequest('design/list', params)
      .then(res => {
        console.log(res)
      })
      .catch(res => {
        console.log('get')
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
      id: '12',
      formId: 55
    }
    getRequest('content/delete', params)
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

  window.obj = {
    data: [1, 2],
    text: { a: 12 },
    title: '标题'
  }
  const str = {
    data: '{{obj.data}}',
    text: '{{obj.text}}',
    title: '标题{{obj.title}}'
  }
  const getReplaceGlobal = data => {
    //转为字符串好替换预定的数据标识
    //即将1. data:"{{getScreenGlobal.line.xAxis}}"转为data:getScreenGlobal.line.xAxis
    //3. text:"标题{{getScreenGlobal.title}}"转为 text:"标题xxx"
    const newStr = objToStringify(data)
      .replace(/"{{.*?}}"/g, function (match) {
        console.log(match)
        return match.slice(3, -3)
      })
      .replace(/{{.*?}}/g, function (match) {
        //2,-2即减去{{和}}，得到括号内的文本，作为函数执行
        return new Function('return ' + match.slice(2, -2))()
      })
    return stringToObj(newStr)
  }
  console.log(getReplaceGlobal(str))
</script>
