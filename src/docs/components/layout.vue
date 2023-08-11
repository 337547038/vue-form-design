<!-- Created by 337547038 on 2021/10/29. -->
<template>
  <div class="layout-docs">
    <div class="sidebar" :class="{ show: titleList?.length }">
      <a
        style="cursor: pointer"
        v-for="(anchor, index) in titleList"
        :style="{ paddingLeft: `${(anchor.indent - 2) * 15}px` }"
        @click="rollTo(anchor)"
        :key="index"
        >{{ anchor.title }}</a
      >
    </div>

    <el-menu
      :default-active="activeIndex"
      class="nav"
      mode="horizontal"
      router
      active-color="#409eff"
      :ellipsis="false"
      @select="handleSelect"
    >
      <template v-for="(item, index) in menu" :key="index">
        <el-sub-menu
          v-if="item.children?.length"
          :index="item.to || item.title"
        >
          <template #title>{{ item.title }}</template>
          <el-menu-item
            :index="ch.to"
            v-for="(ch, i) in item.children"
            :key="i"
            >{{ ch.title }}</el-menu-item
          >
        </el-sub-menu>
        <el-menu-item :index="item.to" v-else>{{ item.title }}</el-menu-item>
      </template>
    </el-menu>
    <div class="main-content" ref="articleEl">
      <router-view v-slot="{ Component }">
        <transition name="left-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
  import '../scss/style.scss'
  import 'vite-plugin-doc-preview/style/style.css'
  import { ref, nextTick, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const articleEl = ref()
  const titleList = ref([])

  router.afterEach(() => {
    getTitleList()
  })
  const getTitleList = () => {
    nextTick(() => {
      setTimeout(() => {
        if (articleEl.value) {
          const anchors = articleEl.value.querySelectorAll('h2,h3')
          // 删除标题头尾的空格
          const titles = Array.from(anchors).filter(
            (title: any) => !!title.innerText.trim()
          )
          // 当文章h标签为空时，直接返回
          if (!titles.length) {
            titleList.value = []
          }
          titleList.value = titles.map((el: any) => ({
            title: el.id, // 标题内容
            //lineIndex: el.getAttribute('data-source-line'), // 标签line id
            indent: parseInt(el.tagName.replace(/h/gi, '')) // 标签层级
            //height: el.offsetTop // 标签距离顶部距离
          }))
        }
      }, 500)
    })
  }
  const rollTo = (item: any) => {
    /*const heading = document.querySelector(
      `[data-source-line="${item.lineIndex}"]`
    )*/
    const heading = document.getElementById(item.title)
    // 页面跳转
    if (heading) {
      heading.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const menu = ref([
    {
      title: '开发指南',
      to: '/docs'
    },
    {
      title: '组件',
      children: [
        { title: 'ak-form', to: '/docs/form' },
        { title: 'ak-list', to: '/docs/list' }
      ]
    },
    {
      title: '接口文档',
      to: '/docs/api',
      children: [
        { title: '数据源设计', to: '/docs/api' },
        { title: '表单设计', to: '/docs/api' },
        { title: '列表页设计', to: '/docs/api' },
        { title: '数据统计', to: '/docs/api' },
        { title: '数据大屏', to: '/docs/api' },
        { title: '流程设计', to: '/docs/api' }
      ]
    },
    {
      title: '使用手册',
      to: '/docs/use',
      children: [
        { title: '快速开始', to: '/docs/use-start' },
        { title: '数据源', to: '/docs/use-dataSource' },
        { title: 'ak-form', to: '/docs/use-form' },
        { title: 'ak-list', to: '/docs/use-list' },
        { title: '可视化数据大屏', to: '/docs/use-screen' }
      ]
    }
  ])
  const activeIndex = ref('/docs')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
    // activeIndex.value = key
  }
  onMounted(() => {
    getTitleList()
  })
</script>
