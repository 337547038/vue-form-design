<template>
  <el-tabs @tab-change="tabClick">
    <el-tab-pane label="表单信息">
      <div
        v-loading="state.loading"
        class="form-info"
      >
        <slot />
        <ak-form
          ref="formEl"
          :data="formData"
          :before="beforeSubmit"
          :after="afterSubmit"
          :disabled="disabledEdit"
          :operate-type="formType"
          :submit-url="formType==='add'?'flowSave':'editFormContent'"
          request-url="getFormContent"
        />
      </div>
    </el-tab-pane>
    <el-tab-pane
      label="流程图"
      name="flow"
      class="flow-box"
    >
      <div class="status">
        <ul>
          <li class="s1">
            ● 已通过
          </li>
          <li class="s4">
            ● 已拒绝
          </li>
          <li class="s2">
            ● 进行中
          </li>
          <li class="s3">
            ● 未进行
          </li>
        </ul>
      </div>
      <ak-flow
        ref="flowEl"
        :type="pane==='start'?2:1"
      />
    </el-tab-pane>
    <el-tab-pane
      v-if="pane!=='start'"
      label="流转记录"
      name="record"
    >
      <ak-list
        ref="tableListEl"
        :auto-load="false"
        :api-key="{list:'flowRecordList'}"
        :data="tableData"
        :query="{flowId:state.obj.id}"
      />
    </el-tab-pane>
  </el-tabs>
</template>
<script setup lang="ts">
  import { ref, reactive, computed } from 'vue'
  import { getRequest } from '@/api'
  import { stringToObj } from '@/utils/design'
  import { getStorage } from '@/utils'
  import { ElMessage } from 'element-plus'

  const props = withDefaults(
      defineProps<{
        pane?: string
      }>(),
      {
        pane: ''
      }
  )
  const tableListEl = ref()
  const formEl = ref()
  const flowEl = ref()
  const state = reactive({
    loading: true,
    obj: {},
    flowName: '',
    formId: '',
    callback: ''
  })
  const formData = ref({
    list: [],
    form: {},
    config: {}
  })
  const userInfo = computed(() => {
    return getStorage('userInfo', true)
  })
  const formType = computed(() => {
    // 除发起流程，其它都为编辑状态
    return props.pane === 'start' ? 'add' : 'edit'
  })
  // 待审核状态允许编辑
  const disabledEdit = computed(() => {
    return !(props.pane === 'start' || (props.pane === 'applyed' && state.obj.status === 0))
  })
  const tabClick = (tabsName: string) => {
    if (tabsName === 'record') {
      tableListEl.value.getListData()
    }
  }
  const tableData = ref({
    columns: [
      {
        label: '处理人',
        prop: 'name',
        render: 'text',
        renderFormatter: (val) => {
          return val ? val : '系统'
        }
      },
      {
        label: '状态',
        prop: 'status',
        render: 'tag',
        replaceValue: { 0: '拒绝', 1: '同意', 2: '流转', 3: '撤回' },
        custom: { 0: 'danger', 1: 'success', 2: 'primary', 3: 'info' },
      },
      {
        label: '处理时间',
        prop: 'datetime',
        render: 'datetime'
      },
      {
        label: '审批意见',
        prop: 'content'
      }
    ],
    config: {
      columnsSetting: false
    }
  })
  const initFlowForm = (obj: any, callback?: any) => {
    state.obj = obj
    state.callback = callback
    const params = {
      id: obj.flowId
    }
    // 获取设计的流程信息
    getRequest('flowFrom', params).then((res: any) => {
      const { flow, form } = res.data
      flowEl.value.setValue(stringToObj(flow.data), obj)
      formData.value = stringToObj(form.data)
      state.loading = false
      state.flowName = flow.name
      state.formId = form.id
      // 获取表单填写的内容
      // 除发起流程外，其它的都需要
      if (props.pane !== 'start') {
        formEl.value.getData({ formId: form.id, id: obj.formId })
      }
    })
  }
  // 发起流程
  const beforeSubmit = (params: any, type: string) => {
    if (type === 'submit') {
      // 验证流程
      if (!flowEl.value.flowValidate(1)) {
        ElMessage({ type: 'error', message: '请选择节点自选审批人' })
        return false
      }
      let newParams: any = {
        form: params,
        flow: {
          flowId: state.obj.flowId,
          formId: state.formId,
          userId: userInfo.value.id, // 当前登录用户id
          title: `${userInfo.value.userName}提交的${state.flowName}申请审批`,
          creatTime: new Date(),
          status: 0,
          nodeApprover: flowEl.value.getDiyNodeApprover()
        }
      }
      // 编辑时
      if (props.pane === 'applyed' && state.obj.status === 0) {
        newParams = params
        newParams.formId = state.formId
      }
      const eventBefore = formData.value.events?.before
      if (typeof eventBefore === 'function') {
        return eventBefore(newParams)
      }
      return newParams
    }
  }
  const afterSubmit = (res: any, success: boolean, type: string) => {
    if (type === 'submit' && success) {
      state.callback && state.callback()
    }
  }
  defineExpose({ initFlowForm })
</script>
<style scoped>
.form-info {
  min-height: 300px
}

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
</style>
