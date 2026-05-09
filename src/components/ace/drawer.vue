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
      <div v-html="state.title"/>
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
    const content = state.type === 'json'
      ? string2json(editVal)
      : stringToObj(editVal)

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
    Object.assign(state, obj)
    const content = obj.type === 'json'
      ? json2string(obj.content, true)
      : objToStringify(obj.content, true)

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