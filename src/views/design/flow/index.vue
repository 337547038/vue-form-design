<!-- Created by 337547038 工作流程设计-->
<template>
  <flow-design
    ref="flowDesignRef"
    :is-silent-mode="isSilentMode"
    @submit-click="submitFlow"
  />
</template>
<route>
{meta:{permissions:'/design/flow/list'}}
</route>
<script setup lang="ts">
  import {ref, computed, onMounted} from 'vue'
  import {useRoute, useRouter} from "vue-router";
  import flowDesign from '@/components/flow/index'
  import {getRequest} from '@/api'
  import {ElMessage, ElMessageBox} from "element-plus";
  import {useLayoutStore} from "@/store/layout.ts";

  const layoutStore = useLayoutStore()
  layoutStore.changeBreadcrumb([
    {label: '设计管理'},
    {label: '流程设计'}
  ])

  const route = useRoute();
  const router = useRouter();

  const isSilentMode = computed(() => {
    return route.query.type === 'detail'
  })

  const flowDesignRef = ref()

  const flowId = computed(() => {
    return route.query.id
  })
  // 获取流程图数据
  const getFlowData = () => {
    if (flowId.value) {
      getRequest('designById', {id: flowId.value})
        .then((res: { [key: string]: any }) => {
          flowDesignRef.value.render(JSON.parse(res.data.data))
        })
    }
  }

  const submitFlow = (data: string) => {
    const {errors, errorsIds} = validateFlow(data)
    if (errors?.length > 0) {
      flowDesignRef.value.setStatus({danger:errorsIds})
      ElMessageBox.alert(errors.join('<br>'), '流程校验异常', {
        dangerouslyUseHTMLString: true,
        callback: (action) => {
        },
      })
      return
    }

    let params: any = {
      data: data,
      type: 3 // 1表单 2列表 3流程
    }
    let apiKey = 'designSave'
    if (flowId.value) {
      apiKey = "designEdit"
      params.id = flowId.value
    } else {
      params.name = '未命名流程'
      params.status = 0
    }
    getRequest(apiKey, params)
      .then(() => {
        ElMessage({
          message: '保存成功',
          type: 'success',
        })
        router.push({path: '/design/flow/list'})
      })
  }

  /**
   * DFS 查找从startId出发能到达的所有节点id
   */
  function getAllReachableNodeIds(
    startId: string,
    edges: any
  ): Set<string> {
    const visited = new Set<string>();
    const stack: string[] = [startId];

    while (stack.length > 0) {
      const nodeId = stack.pop()!;
      if (visited.has(nodeId)) continue;
      visited.add(nodeId);
      // 获取当前节点所有下游节点
      const nextNodes = edges
        .filter(e => e.sourceNodeId === nodeId)
        .map(e => e.targetNodeId);
      stack.push(...nextNodes);
    }
    return visited;
  }

  const validateFlow = (data: string) => {
    const {nodes = [], edges = []} = JSON.parse(data) || {}
    const errors: string[] = [];
    const errorsIds: string[] = [];

    // 基础节点存在校验：开始、结束节点
    const startNodes = nodes.filter(n => n.type === 'start');
    const endNodes = nodes.filter(n => n.type === 'end');
    const endNodeIds = new Set(endNodes.map(n => n.id));

    if (startNodes.length === 0) {
      errors.push('流程缺少【开始节点】');
    }
    if (endNodes.length === 0) {
      errors.push('流程缺少【结束节点】');
    }
    //遍历所有节点，做属性校验
    nodes.forEach(node => {
      const {type, properties, text, id} = node;
      const nodeName = text?.value || '未命名节点';
      const outEdges = edges.filter(e => e.sourceNodeId === id);
      const inEdges = edges.filter(e => e.targetNodeId === node.id);

      // 审批节点：校验审批人
      if (type === 'userTask') {
        if (!properties?.userType) {
          errors.push(`【${nodeName}】审批节点未设置审批人`);
          errorsIds.push(id)
        }
      }
      //抄送节点
      if (type === 'sysTask') {
        if (!properties?.userType) {
          errors.push(`【${nodeName}】抄送节点未设置抄送人`);
          errorsIds.push(id)
        }
      }

      // 开始节点必须有出线
      if (type === 'start' && outEdges.length === 0) {
        errors.push(`【${nodeName}】开始节点没有流出连线`);
        errorsIds.push(id)
      }
      // 结束节点不能有出线
      if (type === 'end' && outEdges.length > 0) {
        errors.push(`【${nodeName}】结束节点不能连接下游节点`);
        errorsIds.push(id)
      }
      //条件节点：至少2条出边，并且每条分支边上必须配置条件
      if (type === 'condition') {
        if (outEdges.length < 2) {
          errors.push(`【${nodeName}】条件节点至少需要2条分支连线`);
          errorsIds.push(id)
        }
        const defaultBranches = outEdges.filter(edge => !edge.properties?.expr);
        // 规则：只能有1条默认分支
        if (defaultBranches.length !== 1) {
          errors.push(`【${nodeName}】条件节点必须配置一条默认分支（条件留空）,并且其他分支条件不能为空`);
          errorsIds.push(id)
        }
      }
      //**孤立节点校验**：节点无入边、无出边，孤立悬浮
      if (inEdges.length === 0 && outEdges.length === 0) {
        errors.push(`【${node.text?.value || node.id}】存在孤立节点，未接入流程`);
        errorsIds.push(id)
      }
    })
    //可达性校验：所有分支必须能走到结束节点
    if (startNodes.length > 0 && endNodes.length > 0) {
      startNodes.forEach(startNode => {
        const reachableIds = getAllReachableNodeIds(startNode.id, edges);
        // 遍历所有可达节点，检查该节点的出边是否全部可以走到结束
        reachableIds.forEach(nodeId => {
          const node = nodes.find(n => n.id === nodeId);
          if (!node) return;
          const outEdges = edges.filter(e => e.sourceNodeId === nodeId);
          // 如果当前节点是结束节点，跳过
          if (node.type === 'end') return;

          outEdges.forEach(edge => {
            // 从这条边的目标节点出发，看能不能到达任意结束节点
            const subReachable = getAllReachableNodeIds(edge.targetNodeId, edges);
            const hasEnd = [...subReachable].some(nid => endNodeIds.has(nid));
            if (!hasEnd) {
              const targetNode = nodes.find(n => n.id === edge.targetNodeId);
              const targetName = targetNode?.text?.value || '未知节点';
              errors.push(`分支【${edge.text?.value || edge.sourceNodeId}】通往【${targetName}】，无法到达结束节点`);
              errorsIds.push(...[nodeId, edge.id])
            }
          });
        });
      });
    }
    return {errors, errorsIds}
  }

  onMounted(() => {
    getFlowData()
    window.sessionStorage.setItem("pageType", "")
  })
</script>
