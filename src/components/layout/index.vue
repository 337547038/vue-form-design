<template>
  <el-container class="common-layout">
    <el-aside
      v-if="!fullScreen"
      :width="isCollapse ? '44px' : '180px'"
      class="common-sidebar"
    >
      <div
        class="logo"
        @click="$router.push({ path: '/' })"
      >
        <img
          src="@/assets/logo.png"
          alt=""
        >
        <span v-show="!isCollapse">AK低代码快速开发平台</span>
      </div>
      <Menu :collapse="isCollapse" />
    </el-aside>
    <el-container class="overflow-scroll">
      <el-header
        v-if="!fullScreen"
        class="common-header"
      >
        <common-header @click="headClick" />
      </el-header>
      <!--      <TagViews v-if="!fullScreen" />-->
      <el-main class="common-main">
        <!-- todo 引入transition后有时浏览器会出现[Violation] ‘requestAnimationFrame‘ handler took xx ms <transition name="fade-transform" mode="out-in">-->
        <router-view
          v-if="reloadFlag"
          v-slot="{ Component }"
        >
          <keep-alive :include="keepAliveInclude">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
    <el-icon
      v-if="fullScreen"
      class="quit-full"
      title="退出全屏"
      @click="headClick('fullScreen')"
    >
      <Close />
    </el-icon>
  </el-container>
</template>

<script lang="ts" setup>
  import { ref, computed, nextTick, onMounted } from 'vue'
  import { useLayoutStore } from '@/store/layout'
  // import TagViews from './tagViews.vue'
  import Menu from './menu.vue'
  import CommonHeader from './header.vue'
  import { getStorage, setStorage } from '@/utils'
  import { getRequest } from '@/api'

  const store = useLayoutStore()
  // const isCollapse = ref(getStorage('collapseMenu') === 'true')
  const isCollapse: boolean = computed(() => {
    return store.collapseMenu
  })
  const fullScreen = ref(false)
  // const reloadFlag = ref<boolean>(true)
  const reloadFlag = computed({
    get: () => {
      return store.reloadFlag
    },
    set: () => {
      store.setReloadRouter()
    }
  })
  const headClick = (type: string) => {
    if (type === 'fullScreen') {
      fullScreen.value = !fullScreen.value
    }
    if (type === 'refresh') {
      reloadFlag.value = false
      nextTick(() => {
        reloadFlag.value = true
      })
    }
  }
  const keepAliveInclude = computed(() => {
    const tag = store?.tabs
    if (tag) {
      const temp: string[] = []
      tag.forEach((item: any) => {
        temp.push(item.name)
      })
      return temp
    }
    return []
  })

  /**
   * 获取字典作供全局使用。刷新页时没有即请求加载
   */
  const dictList = () => {
    // 首次登录加载，开发中途有添加要重新登录，比较麻烦。这里后继再优化todo
    const storageDict = getStorage('akAllDict', true)
    if (!storageDict) {
      getRequest('dictList', { query: { status: 1 } }).then((res: any) => {
        const result = res.data?.list
        const temp: any = {}
        if (result?.length) {
          result.forEach((item: any) => {
            const children = item.children
            if (children) {
              const childJson = JSON.parse(children)
              const list: any = {}
              childJson.forEach((ch: any) => {
                list[ch.value] = ch.label
              })
              temp[item.type] = list
            }
          })
          setStorage('akAllDict', temp, 0)
        }
      })
    }
  }
  onMounted(() => {
    nextTick(() => {
      // 加载一些公共全局资源
      dictList()
    })
  })
</script>
