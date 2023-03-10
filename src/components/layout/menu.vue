<template>
  <el-menu
    :collapse="collapse"
    active-text-color="#ffd04b"
    background-color="rgb(48 65 86)"
    text-color="#fff"
    @select="select"
    router
  >
    <MenuItem :data="navList" />
  </el-menu>
</template>

<script setup lang="ts">
  import MenuItem from './menuItem.vue'
  import { ref, onMounted } from 'vue'
  // import { useRoute } from 'vue-router'
  // import { useLayoutStore } from '@/store/layout'
  import { getRequest } from '@/api'

  // const router = useRouter()
  // const route = useRoute()
  // const layoutStore = useLayoutStore()

  withDefaults(
    defineProps<{
      collapse: boolean
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'getMenuList', val: any): void
  }>()
  const navList = ref([
    {
      title: '表单设计管理',
      icon: 'form',
      children: []
    },
    {
      title: '列表页设计管理',
      icon: 'list',
      children: []
    },
    {
      title: '数据统计图管理',
      icon: 'line',
      children: []
    },
    {
      title: '数据大屏管理',
      icon: 'data',
      children: []
    },
    {
      title: '流程配置管理',
      icon: 'tree',
      children: []
    },
    {
      title: '系统管理',
      icon: 'sys',
      children: [
        {
          title: '用户管理',
          icon: 'user',
          path: ''
        },
        {
          title: '角色管理',
          icon: 'role',
          path: ''
        },
        {
          title: '菜单管理',
          icon: 'menu',
          path: ''
        },
        {
          title: '部门管理',
          icon: 'tree',
          path: ''
        },
        {
          title: '岗位管理',
          icon: 'post',
          path: ''
        },
        {
          title: '字典管理',
          icon: 'dict',
          path: ''
        },
        {
          title: '登录日志',
          icon: 'log2',
          path: ''
        },
        {
          title: '操作日志',
          icon: 'log',
          path: '/system/log'
        }
      ]
    },
    {
      title: '系统工具',
      icon: 'tool',
      children: [
        {
          title: '新建设计',
          icon: 'creat',
          path: '/design'
        },
        {
          title: '帮助文档',
          icon: 'doc',
          path: '/docs'
        }
      ]
    }
  ])
  const select = () => {
    console.log('select')
  }
  // 获取创建的表单导航，存下storage不用每次刷新请求
  const initForm = () => {
    const sessionList = window.sessionStorage.getItem('formMenuList')
    if (sessionList) {
      navList.value[1].children = JSON.parse(sessionList)
    } else {
      getRequest('getFormList', { status: 1 }).then((res) => {
        //contentForm.value = res.data.data?.list || []
        const result = res.data.data?.list
        let temp: any = []
        if (result) {
          result.forEach((item: any) => {
            if (item.formId && item.status?.toString() === '1') {
              // 有数据源创建的才能添加
              temp.push({
                title: item.name,
                icon: 'List',
                path: '/designform/list?tid=' + item.id
              })
            }
          })
          navList.value[1].children = temp
          window.sessionStorage.setItem('formMenuList', JSON.stringify(temp))
        }
      })
    }
  }
  onMounted(() => {
    // 将导航信息传给tagViews，根据path匹配出显示的title
    emits('getMenuList', navList.value)
    initForm()
  })
</script>
