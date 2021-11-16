<!-- Created by 337547038 on 2021/10/29. -->
<template>
  <div class="layout-docs">
    <div class="sidebar">
      <ul>
        <li v-for="item in menu" :key="item.title">
          <span>{{ item.title }}</span>
          <ul>
            <li v-for="(ch,index) in item.children" :key="index">
              <router-link :to="ch.to" v-if="ch.to.indexOf('#')===-1">{{ ch.title }}</router-link>
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

<script>
import 'vite-plugin-vuedoc/style.css'
import {reactive, toRefs} from 'vue'

export default {
  name: "layout",
  props: {},
  components: {},
  setup(props) {
    const state = reactive({
      menu: [
        {
          title: '开发指南',
          children: [
            {title: '介绍', to: '/docs'},
            {title: '目录结构', to: '/docs#目录结构'},
            {title: '快速上手', to: '/docs#快速上手'}
          ]
        },
        {
          title: '组件Props',
          children: [
            {title: 'designForm', to: '/docs/designForm'},
            {title: 'tableList', to: '/docs/tableList'},
          ]
        },
        {
          title: '表单示例',
          children: [
            {title: 'designForm', to: '/docs/designFormDemo'},
            {title: 'tableList', to: '/docs/tableListDemo'},
          ]
        },
        {
          title: '使用手册',
          children: [
            {title: '页面介绍', to: '/docs/useInfo'},
            {title: '数据绑定', to: '/docs/useBind'},
            {title: '表单校验', to: '/docs/useVerify'}
          ]
        }
      ]
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
