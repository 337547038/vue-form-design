<template>
  <el-drawer
    v-model="visible"
    size="60%"
    :title="state.title"
    :direction="state.direction as any"
    class="ace-dialog"
    :append-to-body="true"
    :before-close="drawerBeforeClose"
  >
    <template #header>
      <div v-html="state.title" />
    </template>
    <div
      v-if="visible"
      id="editJson"
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
  import {nextTick, onMounted, onUnmounted, reactive, ref} from 'vue'
  import {aceEdit, json2string, objToStringify, string2json, stringToObj} from "@/utils/design";
  import type {AceDrawerT} from "@/components/ace/type"
  import {getAceContent, getAceTitle} from "./tooltip";

  const emits = defineEmits<{
    (e: 'beforeClose'): void
    (e: 'confirm', content: string, key: string): void
  }>()

  const editor = ref({})
  const visible = ref(false)
  const state = reactive({
    title: '',
    direction: 'ltr',
    callback: null,
    key: '',
  })
  const dialogConfirm = () => {
    const editVal = editor.value.getValue()
    let content = editVal //默认返回javascript
    switch (state.type) {
      case 'json':
        content = string2json(content)
        break
      case undefined: //没传时默认为javascript
      case 'javascript':
        content = stringToObj(editVal)
        break
      default:
    }
    state.callback && state.callback(content)
    emits('confirm', editVal, state.key) // 传多个参数方便在confirm时判断来源
    visible.value = false
  }
  const drawerBeforeClose = () => {
    emits('beforeClose')
    visible.value = false
  }
  const open = (obj: AceDrawerT) => {
    visible.value = true
    let content = obj.content
    switch (obj.type) {
      case 'json':
        content = json2string(obj.content, true)
        break
      case undefined: //没传时默认为javascript
      case 'javascript':
        content = objToStringify(obj.content, true)
        break
      default:
    }

    // 当传入内容为空，同时传入key时，则根据key配置初始值
    if (obj.key && !obj.content) {
      content = getAceContent(obj.key, obj.tip) || ''
    }
    // 当标题为空，则根据key配置标题
    if (obj.key && !obj.title) {
      obj.title = (getAceTitle as any)[obj.key] || ''
    }
    Object.assign(state, obj)
    nextTick(() => {
      editor.value = aceEdit({content: content, type: obj.type})
    })
  }

  onMounted(() => {

  })
  onUnmounted(() => {
    if (Object.keys(editor.value).length !== 0) {
      editor.value.destroy()
      editor.value.container.remove()
    }
    state.callback = null
    state.direction = 'ltr'
  })
  defineExpose({open})
</script>