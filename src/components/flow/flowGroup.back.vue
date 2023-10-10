<!-- Created by 337547038  -->
<template>
  <div class="flow-group" :class="{ 'flow-branch': isBranch }">
    <div class="flow-branch-btn" v-if="isBranch">
      <el-button size="small" type="primary" plain round @click="addBranchClick"
      >添加条件</el-button
      >
    </div>
    <div class="flow-row">
      <div class="flow-col" v-for="(item, i) in flowBranch" :key="i">
        <span class="mask-left" v-if="(i === 0) & isBranch"></span>
        <span
          class="mask-right"
          v-if="(i === flowBranch.length - 1) & isBranch"
        ></span>
        <div class="flow-item">
          <div class="title" :class="`bg-${item.nodeType}`">
            <i :class="getIcon(item)"></i>
            <span
            >{{ title[item.nodeType]
            }}<span v-if="item.nodeType === 3">{{ index }}</span></span
            >
            <i
              class="icon-close close"
              @click="delClick(i)"
              v-if="item.nodeType !== 1"
            ></i>
          </div>
          <div class="text">{{ getContent(item) }}</div>
        </div>
        <popover @click="addNodeClick($event, i)" />
        <flow-group
          v-for="(group, j) in item.children"
          :key="j"
          :data="group"
          :index="j"
          :data-list="item.children"
        />
      </div>
    </div>
    <popover v-if="isBranch" @click="addNodeClick($event, index)" />
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import popover from './popover.vue'
  const props = withDefaults(
    defineProps<{
      data: any
      dataList: any
      index: number
    }>(),
    {
      data: () => {
        return []
      },
      dataList: () => {
        return []
      }
    }
  )
  // const emits = defineEmits<{
  //   //(e: 'addNodeClick', nodeType: number, index: number): void
  // }>()
  const title = {
    1: '发起人',
    2: '审批人',
    3: '抄送人',
    4: '条件组',
    5: '条件分支'
  }
  const getIcon = (obj: any) => {
    switch (obj.nodeType) {
      case 1:
      case 2:
        return 'icon-user'
      case 4:
        return 'icon-cs'
    }
    return ''
  }
  const getContent = (obj: any) => {
    if (obj.content) {
      return obj.content
    }
    if (obj.nodeType === 3) {
      return '修改审批条件'
    } else {
      return '指定审批人'
    }
  }
  const flowBranch = computed(() => {
    // 只有类型3才有分支
    return isBranch.value ? props.data.children : [props.data]
  })
  const isBranch = computed(() => {
    return props.data.nodeType === 4
  })
  // 添加条件分支
  const addBranchClick = () => {
    const children = ref(props.data.children)
    // 添加到最后面的前一个
    const len = children.value?.length
    children.value.splice(len - 1, 0, { nodeType: 5, content: 'a' })
  }
  // 添加节点
  const addNodeClick = (nodeType: number, index: number) => {
    let dataList: any = []
    const newObj: any = { nodeType: nodeType }
    if (nodeType === 4) {
      Object.assign(newObj, {
        children: [{ nodeType: 5 }, { nodeType: 5 }]
      })
    }
    if (props.data.nodeType === 4) {
      // 添加到当前的children里
      dataList = ref(props.data.children[index])
      if (!dataList.value.children) {
        dataList.value.children = [newObj]
      } else {
        dataList.value.children.unshift(newObj)
      }
    } else {
      // 在当前节点后面添加
      dataList = ref(props.dataList)
      dataList.value.splice(index + 1, 0, newObj)
    }
  }
  // 删除节点
  const delClick = (index: number) => {
    if (isBranch.value && props.data.children?.length > 2) {
      // 从children里删除第index个，小于两个时直接整个分支
      const dataList = ref(props.data.children)
      dataList.value.splice(index, 1)
    } else {
      // 从dataList里删除第props.index个
      const dataList = ref(props.dataList)
      dataList.value.splice(props.index, 1)
    }
  }
</script>
