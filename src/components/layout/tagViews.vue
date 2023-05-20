<!--貌似这closable组件有问题，不能对指定项设置不显示关闭-->
<template>
  <div class="tag-tabs">
    <el-tabs v-model="activeName" @tab-change="handleClick">
      <el-tab-pane label="首页" name="/" />
      <el-tab-pane
        v-for="(item, index) in tabsViews"
        :key="item.path"
        :label="item.title"
        :name="item.path"
      >
        <template #label>
          <span class="tabs-label">
            <span>{{ item.title }}</span>
            <el-icon @click="handleTabsRemove(item, index, $event)"
            ><Close
            /></el-icon>
          </span>
        </template>
      </el-tab-pane>
    </el-tabs>
    <el-icon
      @click="clearTag"
      class="clear-tag"
      title="清空全部"
      v-if="tabsViews?.length > 0"
    ><Close
    /></el-icon>
  </div>
</template>

<script lang="ts" setup>
  interface TabsViews {
    title: string
    path: string
    name: string // 路由名称name
  }

  import { ref, computed, onMounted, watch } from 'vue'
  import { useLayoutStore } from '@/store/layout'
  import { useRoute, useRouter } from 'vue-router'

  const store = useLayoutStore()
  const props = withDefaults(
    defineProps<{
      navList: string[]
    }>(),
    {
      navList: () => {
        return []
      }
    }
  )
  /*  const emits = defineEmits<{
    (e: 'update:modelValue', value: string[]): void
  }>()*/

  const route = useRoute()
  const router = useRouter()
  const activeName = ref()
  const tabsViews = computed(() => {
    return store?.tabs || []
  })
  const handleClick = (path: string) => {
    activeName.value = path
    router.push({ path: path })
  }
  // 关闭
  const handleTabsRemove = (obj: TabsViews, index: number, evt: MouseEvent) => {
    const newTabs = tabsViews.value.filter((item: TabsViews) => {
      return item.path !== obj.path
    })
    // 找出当前tab的位置，移除后转到前一个，没有前一个则回首页
    if (index > 0) {
      // 前面还有
      const newTab = (tabsViews.value as any)[index - 1].path
      activeName.value = newTab
      router.push({ path: newTab })
    } else if (index === 0) {
      router.push({ path: '/' })
    }
    store.setTabsViews(newTabs)
    evt.stopPropagation()
  }

  const setTabViews = () => {
    // 当前组件不需要缓存
    if (route.meta?.keepAlive === false) {
      activeName.value = '' // 清空选中状态
      return
    }
    // 根据路由信息匹配，存在时显示为当前，不存在则添加
    const has = tabsViews.value.some((item: TabsViews) => {
      return item.path === route.path
    })
    if (!has && route.path !== '/') {
      let title = ''
      // 从菜单导航中提取当前路径对应的标题名称
      props.navList.forEach((item: any) => {
        if (item.path === route.path) {
          title = item.title
        }
      })

      const oldTab = tabsViews.value
      oldTab.push({
        title: title,
        path: route.path,
        name: route.name // 这个是组件的名称，目前组件和路由name保持一致
      })
      store.setTabsViews(oldTab)
    }
    activeName.value = route.path
  }

  const clearTag = () => {
    router.push({ path: '/' })
    store.setTabsViews([])
  }
  watch(
    () => route.path,
    () => {
      //console.log(route)
      setTabViews()
    }
  )
  onMounted(() => {
    setTabViews()
  })
</script>
