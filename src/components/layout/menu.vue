<template>
  <el-menu
    :collapse="collapse"
    active-text-color="#ffd04b"
    background-color="rgb(48 65 86)"
    text-color="#fff"
    @select="select"
  >
    <menu-item :data="navList as any" />
  </el-menu>
</template>

<script setup lang="ts">
  import MenuItem from './menuItem.vue'
  import { computed } from 'vue'
  import { getStorage } from '@/utils'

  withDefaults(
    defineProps<{
      collapse: boolean
    }>(),
    {}
  )
  const navList = computed(() => {
    return getStorage('formMenuList', true)
  })
  const select = () => {
    // console.log('select')
  }
</script>
