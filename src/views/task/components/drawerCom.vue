<!-- Created by weiXin:337547038 -->
<template>
  <el-drawer
    v-model="state.visible"
    destroy-on-close
    :with-header="false"
    size="1200px"
  >
    <flow-tabs
      ref="flowTabsEl"
      :pane="state.pane"
    />
  </el-drawer>
</template>

<script setup lang="ts">
  import { ref, nextTick, reactive, onMounted } from 'vue'
  import FlowTabs from './tabs.vue'

  const flowTabsEl = ref()
  const state = reactive({
    visible: false,
    pane: ''
  })
  const open = (obj: any, pane: string) => {
    state.visible = true
    state.pane = pane
    nextTick(() => {
      flowTabsEl.value.initFlowForm(obj, () => {
        state.visible = false
      })
    })
  }
  onMounted(() => {
  })
  defineExpose({ open })
</script>
<style lang="scss">

</style>
