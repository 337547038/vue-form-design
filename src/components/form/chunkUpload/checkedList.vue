<template>
  <div class="upload-checked-list">
    <div class="checked-info">
      <span>已选择{{ modelValue.length }}/{{ limit }}</span>
      <el-button
        type="primary"
        link
        @click="clearClick()"
      >
        清空
      </el-button>
    </div>
    <ul>
      <li
        v-for="(item, index) in modelValue"
        :key="item.path"
      >
        <span>{{ item.fileName || item.fileUrl }}</span>
        <i
          class="icon-del"
          title="删除"
          @click="delClick(index)"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import type { FileList } from './types'

  const props = withDefaults(
    defineProps<{
      limit: number | undefined
      modelValue: FileList[]
    }>(),
    {
      limit: 0,
      modelValue: () => {
        return []
      }
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', val: FileList[]): void
  }>()
  const delClick = (index: number) => {
    const check = props.modelValue
    check.splice(index, 1)
    clearClick(check)
  }
  const clearClick = (list?: any) => {
    emits('update:modelValue', list || [])
  }
</script>
