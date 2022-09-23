<!-- Created by 337547038 on 2021/10/29. -->
<template>
  <div class="layout-docs">
    <div class="sidebar">
      <ul>
        <li v-for="item in menu" :key="item.title">
          <span>{{ item.title }}</span>
          <ul>
            <li v-for="(ch, index) in item.children" :key="index">
              <router-link :to="ch.to" v-if="ch.to.indexOf('#') === -1">{{
                ch.title
              }}</router-link>
              <a :href="ch.to" v-else>{{ ch.title }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="left-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
  import '../scss/style.scss'
  import 'vite-plugin-vuedoc/style.css'
  import { ref } from 'vue'

  const menu = ref([
    {
      title: '开发指南',
      children: [
        { title: '目录结构', to: '/docs' },
        { title: '快速上手', to: '/docs' }
      ]
    },
    {
      title: '组件Props',
      children: [
        { title: 'form', to: '/docs/form' },
        { title: 'list', to: '/docs/list' }
      ]
    },
    {
      title: '示例展示',
      children: [
        { title: 'form demo', to: '/docs/formDemo' },
        { title: 'list demo', to: '/docs/listDemo' }
      ]
    },
    {
      title: '接口文档',
      children: [{ title: '文档说明', to: '/docs/api' }]
    },
    {
      title: '使用手册',
      children: [
        { title: '页面介绍', to: '/docs/useInfo' },
        { title: '表单属性', to: '/docs/useFormAttr' },
        { title: '字段属性', to: '/docs/useFieldAttr' },
        { title: '使用模板', to: '/docs/useTemplate' }
      ]
    }
  ])
</script>
