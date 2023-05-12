<!-- Created by 337547038  -->
<template>
  <div
    class="screen-right-menu"
    v-show="state.visible"
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
  import { computed, reactive } from 'vue'
  // interface Offset {
  //   x: number
  //   y: number
  // }
  // const props = withDefaults(
  //   defineProps<{
  //     modelValue: boolean
  //     offset: Offset
  //     type?: number
  //   }>(),
  //   {
  //     type: 0 // 根据类型展示不同的弹出项
  //   }
  // )
  const emits = defineEmits<{
    //(e: 'update:modelValue', value: boolean): void
    (e: 'click', key: string): void
  }>()
  const state = reactive({
    offsetX: 0,
    offsetY: 0,
    visible: false,
    type: 0 // 临时矩形0
  })
  const list = computed(() => {
    const exclude = { 0: ['split', 'copy'] }
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
    ].filter((item: { key: string; label: string }) => {
      return !exclude[state.type].includes(item.key)
    })
  })
  const style = computed(() => {
    return { left: state.offsetX + 'px', top: state.offsetY + 'px' }
  })
  const mouseleave = () => {
    // 隐藏菜单
    setTimeout(() => {
      state.visible = false
    }, 1000)
  }
  const menuClick = (key: string) => {
    emits('click', key)
    state.visible = false
  }
  const open = ({ x, y, type }: { x: number; y: number; type?: number }) => {
    state.offsetX = x - 10
    state.offsetY = y
    state.type = type || 0
    state.visible = true
  }
  defineExpose({ open })
</script>
