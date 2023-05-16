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
  // import { useRouter } from 'vue-router'
  // import { useLayoutStore } from '@/store/layout'
  import { getRequest } from '@/api'
  import formatResult from '@/utils/formatResult'

  //const router = useRouter()
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
  const navList = ref([])
  const getNavList = () => {
    const sessionList = window.sessionStorage.getItem('formMenuList')
    if (sessionList) {
      navList.value = JSON.parse(sessionList)
      return
    }
    getRequest('menuList', { status: 1 }).then((res: any) => {
      navList.value = formatResult(res.data, 'transformDataToChild')
      window.sessionStorage.setItem(
        'formMenuList',
        JSON.stringify(navList.value)
      )
    })
  }
  /*
  const navList = computed(() => {
    return [
      {
        title: '内容管理',
        icon: 'doc',
        children: contentList.value
      },
      {
        title: '设计管理',
        icon: 'design',
        children: [
          { title: '表单设计管理', icon: 'form', path: '/design/form/list' },
          {
            title: '列表页设计管理',
            icon: 'list',
            path: '/design/dataList/list'
          },
          {
            title: '数据统计图管理',
            icon: 'line'
          },
          {
            title: '数据大屏管理',
            icon: 'data'
          },
          {
            title: '流程配置管理',
            icon: 'tree'
          }
        ]
      },
      {
        title: '系统管理',
        icon: 'sys',
        children: [
          {
            title: '用户管理',
            icon: 'user',
            path: '/system/user'
          },
          {
            title: '角色管理',
            icon: 'role',
            path: '/system/role'
          },
          {
            title: '菜单管理',
            icon: 'menu',
            path: '/system/menu'
          },
          {
            title: '部门管理',
            icon: 'tree',
            path: '/system/dept'
          },
          {
            title: '岗位管理',
            icon: 'post',
            path: '/system/post'
          },
          {
            title: '字典管理',
            icon: 'dict',
            path: '/system/dict'
          },
          {
            title: '登录日志',
            icon: 'log2',
            path: '/system/log'
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
            title: '表单数据源',
            icon: 'data-source',
            path: '/design/dataSource'
          },
          {
            title: '帮助文档',
            icon: 'doc',
            path: '/docs'
          }
        ]
      }
    ]
  })*/
  const select = () => {
    // console.log('select')
  }
  onMounted(() => {
    // 将导航信息传给tagViews，根据path匹配出显示的title
    emits('getMenuList', navList.value)
    getNavList()
  })
</script>
