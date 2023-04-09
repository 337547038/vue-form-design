<template>
  <template v-for="(item, index) in data" :key="index">
    <el-sub-menu v-if="item.children" :index="item.path || item.name">
      <template #title>
        <el-icon v-if="item.elIcon"><component :is="item.elIcon" /></el-icon>
        <i v-if="item.icon" :class="`icon ${item.icon}`"></i>
        <span>{{ item.name }}</span>
      </template>
      <menu-item :data="item.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="item.path || item.name">
      <el-icon v-if="item.elIcon"><component :is="item.elIcon" /></el-icon>
      <i v-if="item.icon" :class="`icon ${item.icon}`"></i>
      <span>{{ item.name }}</span>
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
