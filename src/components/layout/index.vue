<template>
  <el-container class="common-layout">
    <el-aside
      :width="isCollapse ? '44px' : '180px'"
      class="common-sidebar"
      v-if="!fullScreen"
    >
      <div class="logo" @click="$router.push({ path: '/' })"
      ><img src="@/assets/logo.png" alt="" />
        <span v-show="!isCollapse">AK低代码快速开发平台</span></div
      >
      <Menu :collapse="isCollapse" @get-menu-list="getMenuList" />
    </el-aside>
    <el-container class="overflow-scroll">
      <el-header class="common-header" v-if="!fullScreen">
        <CommonHeader @click="headClick" :collapse="isCollapse" />
      </el-header>
      <!--      <TagViews :navList="navList" v-if="!fullScreen" />-->
      <el-main class="common-main">
        <!-- todo 引入transition后有时浏览器会出现[Violation] ‘requestAnimationFrame‘ handler took xx ms <transition name="fade-transform" mode="out-in">-->
        <router-view v-slot="{ Component }" v-if="reloadFlag">
          <keep-alive :include="keepAliveInclude">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
    <el-icon
      class="quit-full"
      @click="headClick('fullScreen')"
      title="退出全屏"
      v-if="fullScreen"
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
  import { getSetStorage } from '@/utils'
  const store = useLayoutStore()
  const isCollapse = ref(getSetStorage('collapseMenu') === 'true')
  const fullScreen = ref(false)
  //const reloadFlag = ref<boolean>(true)
  const navList = ref([])
  const reloadFlag = computed({
    get: () => {
      return store.reloadFlag
    },
    set: () => {
      store.setReloadRouter()
    }
  })
  const headClick = (type: string) => {
    if (type === 'collapse') {
      const val = !isCollapse.value
      isCollapse.value = val
      getSetStorage('collapseMenu', val.toString())
    }
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
  const getMenuList = (obj: any) => {
    navList.value = obj
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
  onMounted(() => {
    //isCollapse.value = getSetStorage('collapseMenu') === 'true'
  })
</script>
