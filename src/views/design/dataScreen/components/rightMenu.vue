<!-- Created by 337547038  -->
<template>
  <div class="screen-right-menu" v-show="modelValue" :style="style" @mouseleave="mouseleave">
    <ul>
      <li v-for="item in list" :key="item.key" @click="menuClick(item.key)">{{ item.label }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  interface Offset {
    x: number
    y: number
    index: number
  }
  const props = withDefaults(
    defineProps<{
      modelValue: boolean
      offset: Offset
      type: number
    }>(),
    {
      type: 0 // 根据类型展示不同的弹出项
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
    (e: 'click', key: number, index: number): void
  }>()
  const list = computed(() => {
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
      { key: 'hide', label: '隐藏' }
    ]
  })
  const style = computed(() => {
    return { left: props.offset.x + 'px', top: props.offset.y + 'px' }
  })
  const mouseleave = () => {
    // 隐藏菜单
    setTimeout(() => {
      emits('update:modelValue', false)
    }, 1000)
  }
  const menuClick = (key: string) => {
    emits('click', key)
  }
</script>
