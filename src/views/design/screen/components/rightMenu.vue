<!-- Created by 337547038  -->
<template>
  <div
    class="screen-right-menu"
    v-show="visible"
    :style="style"
    @mouseleave="mouseleave"
  >
    <ul>
      <li v-for="item in list" :key="item.key" @click="menuClick(item.key)">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import type { Contextmenu2 } from '../types'

  const emits = defineEmits<{
    (e: 'click', key: string, type: number): void
  }>()

  const openData = ref({})
  const visible = ref(false)
  const list = computed(() => {
    //tempRect临时选区组合; group 当前组拆分; single 当前单个组件
    let type = openData.value.type // 目前只分三种情况
    if (!['tempRect', 'group'].includes(type)) {
      type = 'single'
    }
    const include: any = {
      tempRect: [
        'merge',
        'left',
        'right',
        'top',
        'bottom',
        'horizontally',
        'verticalCenter',
        'del',
        'lock',
        'display'
      ],
      group: ['copy', 'split', 'del', 'lock', 'display'],
      single: ['copy', 'del', 'lock', 'display']
    }
    return [
      { key: 'merge', label: '组合' },
      { key: 'split', label: '拆分' },
      { key: 'left', label: '左对齐' },
      { key: 'right', label: '右对齐' },
      { key: 'top', label: '顶部对齐' },
      { key: 'bottom', label: '底部对齐' },
      { key: 'horizontally', label: '水平居中' },
      { key: 'verticalCenter', label: '垂直居中' },
      { key: 'copy', label: '复制' },
      { key: 'del', label: '删除' },
      { key: 'lock', label: '锁定' },
      { key: 'display', label: '隐藏' }
    ].filter((item: { key: string; label: string }) => {
      return include[type].includes(item.key)
    })
  })
  const style = computed(() => {
    return {
      left: `${openData.value.x + 10}px`,
      top: `${openData.value.y + 10}px`
    }
  })
  const mouseleave = () => {
    // 隐藏菜单
    setTimeout(() => {
      close()
    }, 1000)
  }
  const menuClick = (key: string) => {
    emits('click', key, openData.value)
    close()
  }
  const close = () => {
    visible.value = false
  }
  const open = (data: Contextmenu2) => {
    openData.value = data
    visible.value = true
  }
  defineExpose({ open, close })
</script>
