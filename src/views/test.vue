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
  import { flatToTree } from '@/utils/flatTree.ts'
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
  const useStore = useLayoutStore()
  const data = {
    token:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ1c2VyIiwiZXhwIjoxNzAwNTM3NzQ0fQ.x8MRbBmRmtuuVl73qiGjjl2MWh9iM1hfzqyRbv5Sso8'
  }
  //useStore.setLoginInfo(data)

  const list = [
    {
      id: 28,
      parentId: 1,
      name: '客户信息',
      icon: 'icon-user',
      sort: 0,
      path: '/design/list/content/28',
      status: 1,
      remark: '',
      type: 3
    },
    {
      id: 27,
      parentId: 1,
      name: '组件示例',
      icon: 'icon-doc',
      sort: 0,
      path: '/design/list/content/26',
      status: 1,
      remark: '',
      type: 3
    },
    {
      id: 26,
      parentId: 21,
      name: '抄送事项',
      icon: 'icon-cs',
      sort: 8,
      path: '/task/copyer',
      status: 1,
      remark: '',
      type: 1
    },
    {
      id: 25,
      parentId: 21,
      name: '我发起的',
      icon: 'icon-applyed',
      sort: 6,
      path: '/task/applyed',
      status: 1,
      remark: '',
      type: 1
    },
    {
      id: 24,
      parentId: 21,
      name: '已办事项',
      icon: 'icon-done',
      sort: 1,
      path: '/task/done',
      status: 1,
      remark: '',
      type: 1
    },
    {
      id: 23,
      parentId: 21,
      name: '待办任务',
      icon: 'icon-todo',
      sort: 2,
      path: '/task/todo',
      status: 1,
      remark: '',
      type: 1
    },
    {
      id: 22,
      parentId: 21,
      name: '发起流程',
      icon: 'icon-apply',
      sort: 0,
      path: '/task/apply',
      status: 1,
      remark: '',
      type: 1
    },
    {
      id: 21,
      parentId: 0,
      name: '工作台',
      icon: 'icon-work',
      sort: 0,
      path: '',
      status: 1,
      remark: '',
      type: 1
    },
    {
      id: 20,
      parentId: 2,
      name: '流程设计管理',
      icon: 'icon-tree',
      sort: 6,
      path: '/design/flow/list',
      status: 1,
      remark: '',
      type: 1
    },
    {
      id: 19,
      parentId: 2,
      name: '数据大屏管理',
      icon: 'icon-data',
      sort: 8,
      path: '/design/screen/list',
      status: 1,
      remark: '',
      type: 1
    },
    {
      id: 18,
      parentId: 2,
      name: '数据统计图管理',
      icon: 'icon-line',
      sort: 4,
      path: '/design/echarts/list',
      status: 1,
      remark: '',
      type: 1
    },
    {
      id: 17,
      parentId: 2,
      name: '列表页设计管理',
      icon: 'icon-list',
      sort: 2,
      path: '/design/list/list',
      status: 1,
      remark: '',
      type: 1
    },
    {
      id: 16,
      parentId: 2,
      name: '表单设计管理',
      icon: 'icon-form',
      sort: 0,
      path: '/design/form/list',
      status: 1,
      remark: '',
      type: 1
    },
    {
      id: 15,
      parentId: 3,
      name: '操作日志',
      icon: 'icon-log',
      sort: 14,
      path: '/system/log',
      status: 1,
      remark: '',
      type: 1
    },
    {
      id: 14,
      parentId: 3,
      name: '登录日志',
      icon: 'icon-log2',
      sort: 12,
      path: '/system/log',
      status: 1,
      remark: '',
      type: 1
    },
    {
      id: 13,
      parentId: 3,
      name: '字典管理',
      icon: 'icon-dict',
      sort: 10,
      path: '/system/dict',
      status: 1,
      remark: '',
      type: 1
    },
    {
      id: 12,
      parentId: 3,
      name: '岗位管理',
      icon: 'icon-post',
      sort: 8,
      path: '/system/post',
      status: 1,
      remark: '',
      type: 1
    },
    {
      id: 11,
      parentId: 3,
      name: '部门管理',
      icon: 'icon-tree',
      sort: 6,
      path: '/system/dept',
      status: 1,
      remark: '',
      type: 1
    },
    {
      id: 10,
      parentId: 3,
      name: '菜单管理',
      icon: 'icon-menu',
      sort: 4,
      path: '/system/menu',
      status: 1,
      remark: '',
      type: 1
    },
    {
      id: 9,
      parentId: 3,
      name: '角色管理',
      icon: 'icon-role',
      sort: 2,
      path: '/system/role',
      status: 1,
      remark: '',
      type: 1
    }
  ]
  const menuList = list.filter(item => item.type !== 2)
  console.log(menuList)
  const navList = flatToTree(menuList)
  console.log(navList)
</script>
