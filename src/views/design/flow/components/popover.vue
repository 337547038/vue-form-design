<!-- Created by 337547038 -->
<template>
  <div class="flow-add">
    <el-popover placement="bottom-start" trigger="hover" width="400">
      <template #reference>
        <i class="icon-plus"></i>
      </template>
      <div class="flow-node-down">
        <h3>添加流程节点</h3>
        <div>
          <el-button
            size="small"
            type="primary"
            plain
            @click="btnClick(item.key)"
            v-for="(item, index) in btnList"
            :key="index"
            ><i :class="item.icon"></i> {{ item.label }}</el-button
          >
        </div>
      </div>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
  const emits = defineEmits<{
    (e: 'click', key: number): void
  }>()
  const btnList = [
    { label: '审批人', icon: 'icon-sp', key: 2 },
    { label: '抄送人', icon: 'icon-cs', key: 3 },
    { label: '条件分支', icon: 'icon-branch', key: 4 }
  ]
  const btnClick = (key: number) => {
    emits('click', key)
  }
</script>
