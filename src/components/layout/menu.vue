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
      title: '首页',
      path: '/',
      icon: 'HomeFilled'
    },
    {
      title: '内容管理',
      icon: 'Document',
      children: []
    },

    {
      title: '导出vue测试',
      icon: 'FolderOpened',
      children: [
        {
          title: '表单测试',
          icon: 'Document',
          path: '/export/form'
        },
        {
          title: '列表测试',
          icon: 'Tickets',
          path: '/export/list'
        }
      ]
    },
    {
      title: '系统工具',
      icon: 'platform',
      children: [
        {
          title: '表单管理',
          icon: 'list',
          path: '/designform/formlist'
        },
        {
          title: '帮助文档',
          icon: 'InfoFilled',
          path: '/docs'
        }
      ]
    }
  ])
  const select = () => {
    //router.push({ path: index })
    // 位置导航处理，如若异常可在当前页面中修改changeBreadcrumb
    /*console.log(index)
    const temp = []
    if (indexItem && indexItem.length) {
      temp.push({ label: indexItem[0] })
      if (indexItem.length === 2) {
        navList.value.forEach((item: any) => {
          item.children &&
            item.children.forEach((ch: any) => {
              if (index === ch.path) {
                temp.push({ label: ch.label })
              }
            })
        })
      }
      store.changeBreadcrumb(temp)
    }*/
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
