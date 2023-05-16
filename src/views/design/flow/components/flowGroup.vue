<!-- Created by 337547038  -->
<template>
  <div class="flow-group" :class="{ 'flow-branch': isBranch }">
    <div class="flow-branch-btn" v-if="isBranch && !type">
      <el-button size="small" type="primary" plain round @click="addBranchClick"
        >添加条件
      </el-button>
    </div>
    <div class="flow-row">
      <div class="flow-col" v-for="(item, i) in flowBranch" :key="i">
        <span class="mask-left" v-if="i === 0 && isBranch"></span>
        <span
          class="mask-right"
          v-if="i === flowBranch.length - 1 && isBranch"
        ></span>
        <div
          class="flow-item"
          @click="itemClick(item, i as number, flowBranch.length)"
        >
          <div class="title" :class="`bg-${item.nodeType}`">
            <i :class="getIcon(item)"></i>
            <span
              >{{ nodeTypeName[item.nodeType]
              }}<span v-if="item.nodeType === 5">{{ i + 1 }}</span></span
            >
            <i
              class="icon-close close"
              @click.stop="delClick(item)"
              v-if="
                item.nodeType !== 1 &&
                !type &&
                !(i === flowBranch.length - 1 && isBranch)
              "
            ></i>
          </div>
          <div class="text" :title="getContent(item)">
            <div>{{ getContent(item) }}</div>
          </div>
        </div>
        <popover @click="addNodeClick($event, item)" v-if="!type" />
        <flow-group
          v-for="(group, j) in getChildrenNode(item)"
          :key="j"
          :data="group"
          :data-list="dataList"
          :type="type"
          @click-event="clickEvent"
        />
      </div>
    </div>
    <popover v-if="isBranch && !type" @click="addNodeClick($event, data)" />
  </div>
</template>

<script setup lang="ts">
  import { computed, inject } from 'vue'
  import type { NodeList, EmitsEvent } from '../types'
  import Popover from './popover.vue'
  import { nodeTypeName, userTypeList } from './dict'

  const props = withDefaults(
    defineProps<{
      data: any // 当前数据
    }>(),
    {
      data: () => {
        return []
      }
    }
  )
  const emits = defineEmits<{
    (e: 'clickEvent', data: EmitsEvent): void
  }>()
  const flowProps = inject('flowProps') as any
  const dataList = computed(() => {
    return flowProps.value.nodeData
  })
  const type = computed(() => {
    return flowProps.value.type
  })
  const getIcon = (obj: NodeList) => {
    switch (obj.nodeType) {
      case 1:
      case 2:
        return 'icon-user'
      case 4:
        return 'icon-cs'
    }
    return ''
  }
  const getContent = (obj: NodeList) => {
    let userType = ''
    if (obj.userType) {
      userType = (userTypeList as any)[obj.userType] + ':'
    }
    // 不是选了具体人员时
    if (['2', '3', '4'].includes(obj.userType as string)) {
      return userType
    }
    if (obj.content) {
      return userType + obj.content
    }
    if (obj.nodeType === 5) {
      return '修改审批条件'
    } else if (obj.nodeType === 3) {
      return '指定抄送人'
    } else {
      return '指定审批人'
    }
  }
  const flowBranch = computed(() => {
    if (isBranch.value) {
      return dataList.value
        .filter((i: NodeList) => i.parentId === props.data.id)
        .sort((a: any, b: any) => {
          return b.priority - a.priority
        })
    } else {
      return [props.data]
    }
  })
  const isBranch = computed(() => {
    return props.data.nodeType === 4
  })
  const getChildrenNode = (obj: NodeList) => {
    return dataList.value.filter((i: NodeList) => i.parentId === obj.id)
  }
  // 添加条件分支
  const addBranchClick = () => {
    emits('clickEvent', { event: 'addBranch', id: props.data.id })
  }
  // 添加节点
  const addNodeClick = (nodeType: number, obj: NodeList) => {
    emits('clickEvent', {
      event: 'addNode',
      id: obj.id,
      parentId: obj.parentId,
      nodeType: obj.nodeType,
      addType: nodeType // 新增节点类型
    })
  }
  // 删除节点
  const delClick = (obj: NodeList) => {
    emits('clickEvent', {
      event: 'del',
      id: obj.id,
      nodeType: obj.nodeType,
      parentId: obj.parentId
    })
  }
  const clickEvent = (data: EmitsEvent) => {
    emits('clickEvent', data)
  }
  const itemClick = (data: NodeList, index: number, length: number) => {
    if (
      data.nodeType === 1 ||
      (data.nodeType === 5 && index === flowBranch.value.length - 1)
    ) {
      // 发起人节点和条件最后一个节点不能设置
    } else {
      flowProps.value.openDrawer &&
        flowProps.value.openDrawer(data, index, length)
    }
  }
  // const drawerConfirm = (obj: any) => {
  //   console.log(obj.userType)
  // }
</script>
