<template>
  <template v-for="(item, index) in data" :key="index">
    <el-sub-menu v-if="item.children" :index="item.path || item.name">
      <template #title>
        <el-icon v-if="item.elIcon">
          <component :is="item.elIcon" />
        </el-icon>
        <i v-if="item.icon" :class="`icon ${item.icon}`"></i>
        <span>{{ item.name }}</span>
      </template>
      <menu-item :data="item.children" v-if="item.children.length" />
    </el-sub-menu>
    <el-menu-item
      v-else
      :index="item.path || item.name"
      @click="menuClick(item.path)"
    >
      <el-icon v-if="item.elIcon">
        <component :is="item.elIcon" />
      </el-icon>
      <i v-if="item.icon" :class="`icon ${item.icon}`"></i>
      <span>{{ item.name }}</span>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'

  interface Data {
    children?: any
    elIcon?: string
    name: string
    path?: string
  }

  withDefaults(
    defineProps<{
      data: Data[]
    }>(),
    {
      data: () => {
        return []
      }
    }
  )

  const router = useRouter()
  const menuClick = (path: string) => {
    //使用菜单route模式时，路径会加上#号跳不出去
    if (path.indexOf('api/swagger') !== -1) {
      window.location.href = path
    } else {
      router.push({ path: path })
    }
  }
</script>
