<!-- Created by 337547038 发起流程 -->
<template>
  <div
    v-loading="loading"
    class="container-apply-start"
  >
    <el-tabs>
      <el-tab-pane label="表单信息">
        <ak-form
          ref="formEl"
          :data="formData"
          :before-submit="beforeSubmit"
          :after-submit="afterSubmit"
          :type="formType"
          :disabled="!!route.query.id"
          request-url="getFormContent"
          submit-url="flowSave"
          edit-url="editFormContent"
        />
      </el-tab-pane>
      <el-tab-pane
        label="流程图"
        name="flow"
        class="flow-box"
      >
        <div class="status">
          <ul>
            <li class="s1">
              ● 已完成
            </li>
            <li class="s2">
              ● 进行中
            </li>
            <li class="s3">
              ● 未进行
            </li>
            <li class="s4">
              ● 已拒绝
            </li>
            <li class="s5">
              ● 跳过
            </li>
          </ul>
        </div>
        <ak-flow
          ref="flowEl"
          :type="1"
        />
      </el-tab-pane>
      <el-tab-pane
        v-if="$route.query.id"
        label="流转记录"
        name="change"
      >
        <ak-list
          ref="tableListEl"
          :data="changeTableData"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<route>
{meta:{permissions:'none'}}
</route>
<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { getRequest } from '@/api'
  import { stringToObj } from '@/utils/design'

  import { useLayoutStore } from '@/store/layout'
  import { getStorage } from '@/utils'

  const route = useRoute()
  const router = useRouter()
  const layoutStore = useLayoutStore()

  layoutStore.changeBreadcrumb([
    { label: '工作台' },
    { label: route.query.id ? '我发起的' : '发起流程' }
  ])

  const flowEl = ref()
  const formEl = ref()
  const formData = ref({
    list: [],
    form: {}
  })
  const loading = ref(true)
  const formId = ref()
  const flowName = ref()
  const formType = computed(() => {
    if (route.query.id) {
      return 2 // 编辑
    }
    return 1
  })
  const userInfo = computed(() => {
    return getStorage('userInfo', true)
  })
  const getInitData = () => {
    const params = {
      id: route.query.flowId
    }
    // 获取设计的流程信息
    getRequest('flowFrom', params).then((res: any) => {
      const { flow, form } = res.data
      flowEl.value.setValue(stringToObj(flow.data))
      formData.value = stringToObj(form.data)
      formId.value = form.id
      flowName.value = flow.name
      loading.value = false
      // 修改时获取表单初始值
      const id = route.query.id
      if (id) {
        formEl.value.getData({ formId: form.id, id: id })
      }
    })
  }
  const beforeSubmit = (params: any) => {
    const newParams = {
      form: params,
      flow: {
        flowId: route.query.flowId,
        formId: formId.value,
        id: route.query.id,
        userId: userInfo.value.id, // 当前登录用户id
        title: `${userInfo.value.userName}提交的${flowName.value}申请审批`,
        creatTime: new Date()
      }
    }
    const eventBefore = formData.value.events?.beforeSubmit
    if (typeof eventBefore === 'function') {
      return eventBefore(newParams)
    }
    return newParams
  }
  const afterSubmit = (type: string) => {
    if (type === 'success') {
      router.push({ path: '/task/applyed' })
    } else {
      console.log('提交失败')
    }
  }

  // 流转记录
  const changeTableData = ref({
    columns: [
      {
        label: '节点名称',
        prop: 'nodeName'
      },
      {
        label: '处理人',
        prop: 'name'
      },
      {
        label: '任务状态', // 发起/已审批/审批中/已拒绝/已撤回/完成
        prop: 'status',
        config: {}
      },
      {
        label: '开始时间',
        prop: 'startTime',
        config: {
          formatter: '{y}-{m}-{d} {h}:{i}:{s}'
        }
      },
      {
        label: '结束时间',
        prop: 'endTime',
        config: {
          formatter: '{y}-{m}-{d} {h}:{i}:{s}'
        }
      },
      {
        label: '审批意见',
        prop: 'remark'
      }
    ],
    config: {
      columnsSetting: false
    }
  })
  onMounted(() => {
    getInitData()
  })
</script>
<style lang="scss">
  .container-apply-start {
    .flow-box {
      position: relative;
    }
    .status {
      position: absolute;
      left: 0;
      top: 0;
      li {
        padding: 5px;
      }
      .s1 {
        color: #20b2aa;
      }
      .s2 {
        color: #1890ff;
      }
      .s3 {
        color: #909399;
      }
      .s4 {
        color: #fc653f;
      }
      .s5 {
        color: #d9db9b;
      }
    }
  }
</style>
