<template>
  <template v-for="(item, index) in data" :key="index">
    <el-sub-menu v-if="item.children" :index="item.path || item.title">
      <template #title>
        <el-icon><component :is="item.icon" /></el-icon>
        <span>{{ item.title }}</span>
      </template>
      <menu-item :data="item.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="item.path || item.title">
      <el-icon><component :is="item.icon" /></el-icon>
      <span>{{ item.title }}</span>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      data: string[]
    }>(),
    {
      data: () => {
        return []
      }
    }
  )
</script>
