<!-- Created by weiXin:337547038 -->
<template>
  <el-drawer
    v-model="visible"
    size="60%"
    :title="title"
    :direction="direction as any"
    class="ace-dialog"
    :append-to-body="true"
    :before-close="drawerBeforeClose"
  >
    <template #header>
      <div v-html="title" />
    </template>
    <div
      v-if="visible"
      :id="id"
    />
    <div class="dialog-footer">
      <el-button
        type="primary"
        @click="dialogConfirm"
      >
        确定
      </el-button>
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
  import { ref, nextTick, watch, onMounted, onUnmounted } from 'vue'
  import { onBeforeRouteLeave } from 'vue-router'
  import { aceEdit } from '@/utils/design'
  const props = withDefaults(
    defineProps<{
      modelValue: boolean
      title?: string
      direction?: 'rtl' | 'ltr'
      content?: string
      id?: string
      codeType?: string
    }>(),
    {
      id: 'editJson',
      content: '',
      direction: 'ltr',
      title: '',
      codeType: ''
    }
  )
  const emits = defineEmits<{
    (e: 'beforeClose'): void
    (e: 'confirm', content: string): void
    (e: 'update:modelValue', val: boolean): void
  }>()
  const editor = ref({})
  const visible = ref(false)
  const unWatch = watch(
    () => props.modelValue,
    (val: boolean) => {
      visible.value = val
      if (val) {
        initEditor()
      }
    }
  )
  const initEditor = () => {
    nextTick(() => {
      editor.value = aceEdit(props.content, props.id, props.codeType)
    })
  }
  const dialogConfirm = () => {
    const editVal = editor.value.getValue()
    emits('confirm', editVal)
  }
  const drawerBeforeClose = () => {
    emits('update:modelValue', false)
    emits('beforeClose')
  }
  onBeforeRouteLeave(() => {
    unWatch() // 销毁监听器
  })
  onMounted(() => {})
  onUnmounted(() => {
    if (Object.keys(editor.value).length !== 0) {
      editor.value.destroy()
      editor.value.container.remove()
    }
  })
</script>
