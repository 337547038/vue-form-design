<!-- Created by 337547038  -->
<template>
  <div
    class="screen-right-menu"
    v-show="state.visible"
    :style="style"
    @mouseleave="mouseleave"
  >
    <ul>
      <li
        v-for="item in list"
        :key="item.key"
        @click="menuClick(item.key)"
        :class="{ display: item.display }"
      >
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
    (e: 'click', key: string, type: number): void
  }>()
  const state = reactive({
    offsetX: 0,
    offsetY: 0,
    visible: false,
    type: 0 // 临时矩形0 组合1 组件2
  })
  const list = computed(() => {
    //0临时选区组合 1 当前组拆分 2 当前单个组件
    const exclude = {
      0: ['split', 'copy'],
      1: ['merge'],
      2: [
        'merge',
        'split',
        'left',
        'right',
        'top',
        'bottom',
        'horizontally',
        'verticalCenter'
      ]
    }
    return [
      { key: 'merge', label: '组合' },
      { key: 'split', label: '拆分' },
      { key: 'left', label: '左对齐' },
      { key: 'right', label: '右对齐', display: true },
      { key: 'top', label: '顶部对齐', display: true },
      { key: 'bottom', label: '底部对齐', display: true },
      { key: 'horizontally', label: '水平居中', display: true },
      { key: 'verticalCenter', label: '垂直居中', display: true },
      { key: 'copy', label: '复制' },
      { key: 'del', label: '删除' },
      { key: 'lock', label: '锁定' },
      { key: 'display', label: '隐藏' }
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
    emits('click', key, state.type)
    state.visible = false
  }
  const open = ({ x, y, type }: { x: number; y: number; type?: number }) => {
    state.offsetX = x + 10
    state.offsetY = y
    state.type = type || 0
    state.visible = true
  }
  defineExpose({ open })
</script>
