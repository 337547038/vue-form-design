<!-- Created by 337547038 发起流程 -->
<template>
  <div class="container-apply-start" v-loading="loading">
    <el-tabs>
      <el-tab-pane label="表单信息">
        <ak-form
          ref="formEl"
          :data="formData"
          :after-submit="afterSubmit"
          :type="formType"
          :disabled="!!route.query.id"
          :params="submitParams"
          request-url="getFormContent"
          submit-url="flowSave"
          edit-url="editFormContent"
        />
      </el-tab-pane>
      <el-tab-pane label="流程图" name="flow" class="flow-box">
        <div class="status">
          <ul>
            <li class="s1">● 已完成</li>
            <li class="s2">● 进行中</li>
            <li class="s3">● 未进行</li>
            <li class="s4">● 已拒绝</li>
            <li class="s5">● 跳过</li>
          </ul>
        </div>
        <ak-flow :type="1" ref="flowEl" />
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
  const layoutStore = useLayoutStore()
  layoutStore.changeBreadcrumb([{ label: '工作台' }, { label: '发起流程' }])

  const route = useRoute()
  const router = useRouter()
  const flowEl = ref()
  const formEl = ref()
  const formData = ref({
    list: [],
    form: {}
  })
  const loading = ref(true)
  const sourceId = ref()
  const flowName = ref()
  const submitParams = computed(() => {
    return {
      flow: {
        flowId: route.query.flowId,
        sourceId: sourceId.value,
        id: route.query.id,
        userId: '', // 当前登录用户id
        title: `user提交的${flowName.value}审批`,
        creatTime: new Date()
      }
    }
  })
  const formType = computed(() => {
    if (route.query.id) {
      return 2 // 编辑
    }
    return 1
  })
  const getInitData = () => {
    const params = {
      id: route.query.flowId
    }
    // 获取设计的流程信息
    getRequest('flowById', params).then((res: any) => {
      const { flow, form } = res.data
      flowEl.value.setValue(stringToObj(flow.data))
      formData.value = stringToObj(form.data)
      sourceId.value = form.source
      flowName.value = flow.name
      loading.value = false
      // 修改时获取表单初始值
      const id = route.query.id
      if (id) {
        formEl.value.getData({ formId: form.id, id: id })
      }
    })
  }
  // 表单提交
  /*const beforeSubmit = (params: Record<string, any>) => {
    // return Object.assign({}, params, submitParams.value)
    return params
  }*/
  const afterSubmit = (type: string) => {
    if (type === 'success') {
      router.push({ path: '/task/applyed' })
    } else {
      console.log('提交失败')
    }
  }
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
