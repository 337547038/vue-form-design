<!-- Created by 337547038  -->
<template>
  <div
    class="screen-right-menu"
    v-show="modelValue"
    :style="style"
    @mouseleave="mouseleave"
  >
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        @click="menuClick(index)"
      >{{ item }}</li
      >
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
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
    (e: 'click', key: number, index: number): void
  }>()
  const list = ref(['复制', '删除', '锁定', '隐藏'])
  const style = computed(() => {
    return { left: props.offset.x + 'px', top: props.offset.y + 'px' }
  })
  const mouseleave = () => {
    // 隐藏菜单
    setTimeout(() => {
      emits('update:modelValue', false)
    }, 1000)
  }
  const menuClick = (index: number) => {
    emits('click', index, props.offset.index)
  }
</script>
