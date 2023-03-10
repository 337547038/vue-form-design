<!-- Created by 337547038 工作流程设计-->
<template>
  <div class="flow-container">
    <div class="flow-group">
      <div class="flow-row">
        <div class="flow-item">flow-row</div>
      </div>
    </div>
    <flow-group
      v-for="(item, index) in nodeList"
      :key="index"
      :data="item"
      :index="index"
      :data-list="nodeList"
    />
    <div class="flow-end"> 结束 </div>
  </div>
  <!--  <el-drawer-->
  <!--    v-model:visible="drawerVisible"-->
  <!--    class="flow-attr-drawer"-->
  <!--    title="编辑支付节点"-->
  <!--    placement="right"-->
  <!--    width="440px"-->
  <!--  >-->
  <!--    <h3>节点名称</h3>-->
  <!--  </el-drawer>-->
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import flowGroup from './components/flowGroup.vue'
  const props = withDefaults(
    defineProps<{
      direction?: 'horizontal' | 'vertical'
      type?: number
    }>(),
    {
      direction: 'vertical'
    }
  )
  const drawerVisible = ref(false)
  const nodeList = ref([
    { id: '', nodeType: 1, content: '1' },
    {
      nodeType: 4,
      children: [
        { nodeType: 5 },
        { nodeType: 5 }
        // { nodeType: 5 },
        // { nodeType: 5 },
        // { nodeType: 5 },
        // { nodeType: 5 },
        // { nodeType: 5 },
        // { nodeType: 5 }
      ]
    }
  ])
</script>
