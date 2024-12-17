<!-- Created by 337547038 工作流程设计-->
<template>
  <div
    class="flow-container"
    :class="{ [direction]: true, 'type-show': type }"
  >
    <div class="flow-main">
      <flow-group
        v-for="(item, index) in nodeList"
        :key="index"
        :data="item"
        @click-event="clickEvent"
      />
      <div class="flow-end">
        {{ flowStatus }}
      </div>
    </div>
    <drawer
      v-if="type === 0"
      ref="drawerEl"
      @user-select="userSelect"
    />
    <user-dialog
      ref="userDialogEl"
      v-model="user.userId"
      v-model:user-name="user.userName"
      @change="userSelectChange"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, provide, reactive, nextTick } from 'vue'
  import { randomString } from '@/utils'
  import type { NodeList, EmitsEvent } from './types'
  import FlowGroup from './flowGroup.vue'
  import Drawer from './drawer.vue'
  // import { useRoute } from 'vue-router'
  defineOptions({ name: 'AKFlow' })
  const props = withDefaults(
      defineProps<{
        direction?: 'horizontal' | 'vertical'
        type?: number
      }>(),
      {
        direction: 'vertical',
        type: 0 // 0设计模式，1显示查看模式,2发起模式
      }
  )
  const nodeApprover = ref({})
  const userDialogEl = ref()
  const user = reactive({
    userId: '',
    userName: '',
    callback: '',
    nodeId: ''
  })
  const userSelect = (obj: any, callback: any) => {
    user.userId = obj.checkedUserId
    user.userName = obj.content
    user.callback = callback
    nextTick(() => {
      userDialogEl.value.open()
    })
  }
  const userSelectChange = () => {
    user.callback && user.callback({ userId: user.userId, userName: user.userName })
    if (props.type === 2) {
      nodeApprover.value[user.nodeId] = { id: user.userId, name: user.userName }
    }
  }
  // const route = useRoute().query
  const drawerEl = ref()
  const openDrawer = (data: NodeList, index: number, length: number) => {
    if (props.type === 2 && data.userType === '3') {
      // 发起人自选时
      user.nodeId = data.id
      user.userId = data.checkedUserId
      user.content = ''
      if (data.content) {
        const split = data.content.split('：')
        if (split?.length > 1) {
          user.content = split[1]
        }
      }
      user.callback = ''
      userDialogEl.value.open()
    }
    if (props.type === 0) {
      drawerEl.value.open(data, index, length)
    }
  }
  const nodeStatus = ref()
  const currentNode = ref()
  const flowProps = computed(() => {
    return {
      type: props.type,
      nodeData: nodeData.value,
      openDrawer: openDrawer,
      nodeStatus: nodeStatus.value,
      currentNode: currentNode.value,
      nodeApprover: nodeApprover.value
    }
  })
  // nodeType 1:发起人，2审批人，3抄送人，4条件分支节点，5条件分支子级
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
      id: randomString(12),
      nodeType: 5,
      parentId: id,
      priority: 1
    })
  }
  // 添加节点
  const addNodeClick = (obj: EmitsEvent) => {
    const id = randomString(12)
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
        id: randomString(12),
        nodeType: 5,
        parentId: id,
        priority: 1
      })
      nodeData.value.push({
        id: randomString(12),
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
  // 获取节点自选审批人信息
  const getDiyNodeApprover = () => {
    return JSON.stringify(nodeApprover.value)
  }
  const flowStatus = ref('结束') // 流程最终状态3通过4拒绝
  const setValue = (obj: any, flow?: any) => {
    if (obj) {
      nodeData.value = obj
      if (flow) {
        nodeStatus.value = JSON.parse(flow?.nodeStatus || '{}')
        if (flow?.status === 3) {
          flowStatus.value = '通过'
        } else if (flow?.status === 4) {
          flowStatus.value = '拒绝'
        }
        currentNode.value = flow?.currentNode
        nodeApprover.value = JSON.parse(flow?.nodeApprover || '{}')
      }
    }
  }
  // 验证设计是否合理
  const flowValidate = (type: number) => {
    // 0验证设计时批定成员有没选择了成员 1验证发起人自选在提交审批时是否有选择
    const error: string[] = []
    nodeData.value.forEach((item: NodeList) => {
      if ([2, 3].includes(item.nodeType)) {
        // 审批人抄送人
        if ((!item.userType || item.userType === '1') && !item.checkedUserId && type === 0) {
          // 指定成员时当前节点需要有用户信息
          error.push(item.id)
        }
        if (item.userType === '3' && type === 1) {
          // 发起人自选
          if (!nodeApprover.value[item.id]) {
            error.push(item.id)
          }
        }
      }
    })
    return error?.length <= 0
  }
  onMounted(() => {
    /* if (route.id) {
      getData()
    } */
  })
  defineExpose({ getValue, setValue, getDiyNodeApprover, flowValidate })
</script>
