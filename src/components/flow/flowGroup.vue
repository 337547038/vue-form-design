<!-- Created by 337547038  -->
<template>
  <div
    class="flow-group"
    :class="{ 'flow-branch': isBranch }"
  >
    <div
      v-if="isBranch && !type"
      class="flow-branch-btn"
    >
      <el-button
        size="small"
        type="primary"
        plain
        round
        @click="addBranchClick"
      >
        添加条件
      </el-button>
    </div>
    <div class="flow-row">
      <div
        v-for="(item, i) in flowBranch"
        :key="i"
        class="flow-col"
      >
        <span
          v-if="i === 0 && isBranch"
          class="mask-left"
        />
        <span
          v-if="i === flowBranch.length - 1 && isBranch"
          class="mask-right"
        />
        <div
          :class="getStatusCls(item)"
          class="flow-item"
          @click="itemClick(item, i as number, flowBranch.length)"
        >
          <div
            class="title"
            :class="`bg-${item.nodeType}`"
          >
            <i :class="getIcon(item)" />
            <span>{{
              nodeTypeName[item.nodeType]
            }}<span v-if="item.nodeType === 5">{{ i + 1 }}</span></span>
            <i
              v-if="
                item.nodeType !== 1 &&
                  !type &&
                  !(i === flowBranch.length - 1 && isBranch)
              "
              class="icon-close close"
              @click.stop="delClick(item)"
            />
          </div>
          <div
            class="text"
            :title="getContent(item)"
          >
            <div>{{ getContent(item) }}</div>
          </div>
        </div>
        <popover
          v-if="!type"
          @click="addNodeClick($event, item)"
        />
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
    <popover
      v-if="isBranch && !type"
      @click="addNodeClick($event, data)"
    />
  </div>
</template>

<script setup lang="ts">
  import { computed, inject } from 'vue'
  import type { NodeList, EmitsEvent } from './types'
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
  const nodeApprover = computed(() => {
    return flowProps.value.nodeApprover || {}
  })
  const getContent = (obj: NodeList) => {
    switch (obj.nodeType) {
      case 1: // 发起人
        return obj.content
      case 2: // 审批人
      case 3: // 抄送人
          const type = obj.nodeType === 2 ? '审批人' : '抄送人'
        if (obj.content) {
          if (obj.userType === '1') {
            return '指定成员：' + obj.content
          } else if (obj.userType === '3') {
            // 发起人自选时,没有选择具体人员时显示和选择了人员时d
            const userObj = nodeApprover.value[obj.id]
            if (userObj && Object.keys(userObj).length) {
              return `自选${type}：${userObj.name}`
            }
            return obj.content
          } else {
            return obj.content
          }
        } else {
          return `请设置${type}`
        }
      case 5: // 条件
        return obj.content || '请设置审批条件'
    }

    /* let userType = ''
    if (obj.userType) {
      userType = (userTypeList as any)[obj.userType] + ':'
    }
    // 不是选了具体人员时
    if (['2', '3', '4'].includes(obj.userType as string)) {
      // return userType
    }
    if (obj.content) {
      return userType + obj.content
    } */
    /* if (obj.nodeType === 5) {
      return '修改审批条件'
    } else if (obj.nodeType === 3) {
      return '指定抄送人'
    } else {
      return '指定审批人'
    } */
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
        data.nodeType === 1
        || (data.nodeType === 5 && index === flowBranch.value.length - 1)
    ) {
      // 发起人节点和条件最后一个节点不能设置
    } else {
      if (flowProps.value.openDrawer) {
        flowProps.value.openDrawer(data, index, length)
      }
    }
  }

  const getStatusCls = (node: NodeList) => {
    if (!flowProps.value.nodeStatus || Object.keys(flowProps.value.nodeStatus).length === 0) {
      return ''
    }
    const status = flowProps.value.nodeStatus[node.id]
    if (node.nodeType === 1) {
      // 发起人节点，标记为
      return 'status-pass'
    } else if ([2, 3].includes(node.nodeType)) {
      // 抄送人，审批人节点
      if (node.id === flowProps.value.currentNode) {
        // 当前节点
        return 'status-active'
      }
      if (status === 0) {
        // 拒绝
        return 'status-refuse'
      } else if (status === 1) {
        // 通过
        return 'status-pass'
      } else {
        // 待处理
        return 'status-wait'
      }
    } else if (node.nodeType === 5) {
      // 条件分支，符合条件的在nodeStatus有记录，并且值为4
      if (status === 4) {
        return 'status-pass'
      }
    }
    return ''
  }
  // const drawerConfirm = (obj: any) => {
  //   console.log(obj.userType)
  // }
</script>
