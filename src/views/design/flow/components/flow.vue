<!-- Created by 337547038 工作流程设计-->
<template>
  <div class="flow-container" :class="{ [direction]: true, 'type-show': type }">
    <div class="flow-main">
      <flow-group
        v-for="(item, index) in nodeList"
        :key="index"
        :data="item"
        @click-event="clickEvent"
      />
      <div class="flow-end">结束</div>
    </div>
    <drawer ref="drawerEl" v-if="type === 0" />
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, provide } from 'vue'
  import { randomString } from '@/utils'
  import type { NodeList, EmitsEvent } from '../types'
  import FlowGroup from './flowGroup.vue'
  import Drawer from './drawer.vue'
  // import { useRoute } from 'vue-router'

  const props = withDefaults(
    defineProps<{
      direction?: 'horizontal' | 'vertical'
      type?: number
    }>(),
    {
      direction: 'vertical',
      type: 0 // 0设计模式，1显示查看模式
    }
  )
  //const route = useRoute().query
  const drawerEl = ref()
  const openDrawer = (data: NodeList, index: number, length: number) => {
    if (props.type === 1) {
      return
    }
    drawerEl.value.open(data, index, length)
  }
  const flowProps = computed(() => {
    return {
      type: props.type,
      nodeData: nodeData.value,
      openDrawer: openDrawer
    }
  })
  provide('flowProps', flowProps)
  const nodeData = ref([
    { id: 'start', nodeType: 1, parentId: '', content: '发起人' }
  ])
  const nodeList = computed(() => {
    return nodeData.value.filter((i: NodeList) => !i.parentId)
  })
  const clickEvent = (obj: EmitsEvent) => {
    if (props.type === 1) {
      return
    }
    switch (obj.event) {
      case 'del':
        delClick(obj)
        break
      case 'addNode':
        addNodeClick(obj)
        break
      case 'addBranch':
        addBranchClick(obj.id)
        break
    }
  }
  // 添加条件分支
  const addBranchClick = (id: string) => {
    let lastNodeIndex = 0
    nodeData.value.forEach((item: NodeList, index: number) => {
      if (item.parentId === id) {
        lastNodeIndex = index
      }
    })
    nodeData.value.splice(lastNodeIndex, 0, {
      id: randomString(8),
      nodeType: 5,
      parentId: id,
      priority: 1
    })
  }
  // 添加节点
  const addNodeClick = (obj: EmitsEvent) => {
    const id = randomString(8)
    // 添加节点, 当前点击的节点为普通节点时，则添加同级。当前为条件时则添加子级
    const parentId = obj.nodeType === 5 ? obj.id : obj.parentId
    // 查找当前数据的位置，在当前数据的下面添加一条以保证顺序
    nodeData.value.forEach((item: NodeList, index: number) => {
      if (item.id === obj.id) {
        nodeData.value.splice(index + 1, 0, {
          id: id,
          nodeType: obj.addType,
          parentId: parentId
        })
      }
    })
    if (obj.addType === 4) {
      // 添加两个默认条件
      nodeData.value.push({
        id: randomString(8),
        nodeType: 5,
        parentId: id,
        priority: 1
      })
      nodeData.value.push({
        id: randomString(8),
        nodeType: 5,
        parentId: id,
        content: '其他条件进入此流程',
        priority: 0
      })
    }
  }
  // 删除节点
  const delClick = (obj: any) => {
    // 先删除点前点击的那条记录
    const index = nodeData.value.findIndex((item: NodeList) => {
      return item.id === obj.id
    })
    nodeData.value.splice(index, 1)
    // 条件时有可能存在子级，有则删除所有子级
    if (obj.nodeType === 5) {
      const child = nodeData.value.filter((item: NodeList) => {
        return item.parentId === obj.id
      })
      child.forEach((item: NodeList) => {
        delClick({
          id: item.id,
          nodeType: item.nodeType,
          parentId: item.parentId
        })
      })
      // 删除后如果当前条件分支只剩一个时，同时删除
      const hasLen = nodeData.value.filter((item: NodeList) => {
        return item.parentId === obj.parentId
      })
      if (hasLen.length === 1) {
        const { id, nodeType, parentId } = hasLen[0]
        delClick({
          id: id,
          nodeType: nodeType,
          parentId: parentId
        })
        // 删除该条件的nodeType=4的记录
        delClick({ id: parentId })
      }
    }
  }
  // const getData = () => {}
  const getValue = () => {
    return nodeData.value
  }
  const setValue = (obj: any) => {
    if (obj) {
      nodeData.value = obj
    }
  }
  onMounted(() => {
    /*if (route.id) {
      getData()
    }*/
  })
  defineExpose({ getValue, setValue })
</script>
