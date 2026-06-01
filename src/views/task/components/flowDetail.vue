<template>
  <div>
    <el-tabs
      model-value="form"
      @tab-change="tabChange"
    >
      <el-tab-pane
        label="表单"
        name="form"
      >
        <component
          :is="component"
          ref="flowFormRef"
          :disabled="detail"
          :data="akFormData"
          operate-type="flow"
          @submit="formSubmit"
          @btn-click="formBtnSubmit"
        />
        <slot />
      </el-tab-pane>
      <el-tab-pane
        label="流程图"
        name="flow"
      >
        <flow-design
          ref="flowDesignEl"
          :is-silent-mode="true"
          :source-apply="!detail"
        />
      </el-tab-pane>
      <el-tab-pane
        v-if="detail"
        label="审批记录"
        name="recoder"
      >
        <RecordList ref="recoderListEl" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
  import {ref, onMounted, markRaw, nextTick} from 'vue'
  import {getRequest} from '@/api'
  import flowDesign from "@/components/flow/index";
  import RecordList from './record.vue'
  import {ElMessage} from "element-plus";
  import {stringToObj} from "@/utils/design.ts";

  const props = withDefaults(
    defineProps<{
      detail?: boolean // 除了发起流程页为表单信息录入状态，其他均为展示状态true
    }>(),
    {
      detail: true
    }
  )
  const emits = defineEmits<{
    (e: 'submit', value: string, approver: string): void
  }>()
  const flowDesignEl = ref();
  const flowFormRef = ref();
  const formType = ref()
  const component = ref()
  const flowId = ref()
  const nodeStatus = ref({})
  const akFormData = ref({list: [], config: {}})

  // 获取流程图数据
  const getFlowData = async (id: string) => {
    flowId.value = id
    getRequest('getFlowById', {id: id})
      .then(async (res: any) => {
        const data = res.data
        nodeStatus.value = data.nodeStatus
        await getFlowDesignDetail(data.flowId, data.approver)
        // 恢复表单填写的值
        flowFormRef.value.setValue(JSON.parse(data.formContent))
      })
  }
  const getFlowDesignDetail = async (flowId: number, approver?: string) => {
    try {
      await getRequest('designById', {id: flowId})
        .then(async (res: any) => {
          const result = res.data
          // 如果有自选审批人的，则将自选的合并进去,以恢复显示
          const designFlowData = JSON.parse(result.data)
          if (approver) {
            const jsonApprover = JSON.parse(approver)
            designFlowData.nodes.forEach((item: any) => {
              const key = jsonApprover[item.id]
              if (key && item.properties.userType === '4') {
                item.properties.joinName = key.name
                item.properties.joinUserId = key.id
              }
            })
          }
          flowDesignEl.value.render(designFlowData)
          await getFormComponent(result)
        })
    } catch (err) {
      console.error('接口请求失败：', err)
      return null
    }
  }

  // 根据表单类型，回显展示表单
  const getFormComponent = async (data: any) => {
    try {
      formType.value = data.formType
      if (data.formType === 1) {
        // 本地表单组件
        const module = await import(`@/components/flow/flowForm/${data.formId}.vue`)
        component.value = markRaw(module.default)
      } else {
        await getRequest('designById', {id: data.formId})
          .then((res: any) => {
            component.value = 'ak-form'
            akFormData.value = stringToObj(res.data.data)
          })
      }
    } catch (err) {
      console.error('获取本地表单组件失败：', err)
      return null
    }
  }
  //在线表单提交
  const formBtnSubmit = (key: string, model: Record<string, any>) => {
    if (key === 'submit') {
      flowFormRef.value.validate((valid: boolean) => {
        if (valid) {
          //通过
          formSubmit(model)
        } else {
          //没通过校验
        }
      })
    }
  }
  // 本地表单提交事件
  const formSubmit = (val: { [key: string]: any }) => {
    // 检查流程图是否存在自选人的情况
    const flowData = flowDesignEl.value.getDesignFlowData()
    const temp: any = []
    const approver: any = {} // 审批信息
    flowData.nodes?.forEach((item: any) => {
      if (['userTask', 'sysTask'].includes(item.type)) {
        const {userType, joinUserId, nodeName, joinName} = item.properties || {}
        if (userType === '4' && !joinUserId) {
          // 发起人自选,没有选择用户时
          temp.push(`审批节点：${nodeName}需要选择审批人`)
        }
        if (userType === '4' && joinUserId) {
          approver[item.id] = {id: joinUserId, name: joinName}
        }
      }
    })
    if (temp.length > 0) {
      ElMessage({
        message: temp[0],
        type: 'error',
      })
    } else {
      emits("submit", JSON.stringify(val), JSON.stringify(approver))
    }
  }
  const recoderListEl = ref()
  /**
   * 切换到流程图时，加载并显示节点状态信息
   * @param name
   */
  const tabChange = (name: string) => {
    nextTick(() => {
      if (name === 'flow' && props.detail) {
        flowDesignEl.value.setStatus(nodeStatus.value)
      } else if (name === "recoder") {
        // 加载记录详情
        recoderListEl.value.getData(flowId.value)
      }
    })
  }

  defineExpose({getFlowData, getFlowDesignDetail})
  onMounted(() => {
    let pageType = ''
    if (props.detail) {
      pageType = 'detail'
    }
    window.sessionStorage.setItem("pageType", pageType)
  })

</script>