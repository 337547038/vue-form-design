<!-- Created by 337547038 -->
<template>
  <div class="flow-item">
    <div class="flow-box">
      <div class="title" :class="`bg-${data.nodeType}`">
        <i :class="icon"></i>
        <span
          >{{ title[data.nodeType]
          }}<span v-if="data.nodeType === 3">{{ index }}</span></span
        >
        <i
          class="icon-close close"
          @click="delClick"
          v-if="data.nodeType !== 1"
        ></i>
      </div>
      <div class="text">{{ content }}</div>
    </div>
    <popover />
    <flow-group
      v-for="(item, i) in data.children"
      :key="i"
      :data="item"
      :index="i"
    />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import popover from './popover.vue'
  import flowGroup from './flowGroup.vue'
  const props = withDefaults(
    defineProps<{
      data: any
      index: number
    }>(),
    {
      data: () => {
        return []
      }
    }
  )
  const emits = defineEmits<{
    (e: 'addNodeClick', nodeType: number, index: number): void
    (e: 'delClick', index: number): void
  }>()
  //const title = { 1: '发起人', 2: '审批人', 3: '条件', 4: '抄送人' } // todo
  const title = { 1: '1', 2: '2', 3: '3', 4: '4' }
  const icon = computed(() => {
    switch (props.data.nodeType) {
      case 1:
      case 2:
        return 'icon-user'
      case 4:
        return 'icon-cs'
    }
    return ''
  })
  const content = computed(() => {
    if (props.data.content) {
      return props.data.content
    }
    return '' // todo

    // if (props.data.nodeType === 3) {
    //   return '修改审批条件'
    // } else {
    //   return '指定审批人'
    // }
  })
  // 删除，提交到父一级处理
  const delClick = () => {
    emits('delClick', props.index)
  }
</script>
