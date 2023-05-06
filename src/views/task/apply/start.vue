<!-- Created by 337547038 发起流程 -->
<template>
  <div class="container-apply-start" v-loading="loading">
    <el-tabs>
      <el-tab-pane label="表单信息">
        <ak-form
          ref="formEl"
          :formData="formData"
          :beforeSubmit="beforeSubmit"
          :afterSubmit="afterSubmit"
          :type="formType"
          requestUrl="getFormContent"
          addUrl="saveFormContent"
          editUrl="editFormContent"
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

<script setup lang="ts">
  import { ref, onMounted, nextTick, computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { getRequest } from '@/api'
  import { stringToObj } from '@/utils/form'

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
  const formType = computed(() => {
    if (route.query.id) {
      return 2 // 编辑
    }
    return 1
  })
  const formId = ref()
  const getInitData = () => {
    const params = {
      id: route.query.flowId
    }
    // 获取设计的流程信息
    getRequest('designById', params).then((res: any) => {
      flowEl.value.setValue(stringToObj(res.data.data))
      // 获取流程表单结构信息
      formId.value = res.data.source
      getRequest('designById', { id: res.data.source }).then((res: any) => {
        formData.value = stringToObj(res.data.data)
        nextTick(() => {
          loading.value = false
        })
      })
      // 修改时获取表单初始值
      const id = route.query.id
      if (id) {
        formEl.value.getData({ formId: formId.value, id: id })
      }
    })
  }
  // 表单提交
  const beforeSubmit = (params: Record<string, any>) => {
    params.formId = formId.value
    if (route.query.id) {
      params.id = route.query.id
    }
    return params
  }
  const afterSubmit = (type: string, res: any) => {
    if (type === 'success') {
      if (route.query.id) {
        // 修改时直接跳转即可
        router.push({ path: '/task/applyed' })
        return
      }
      // 这里再插入发起的申请记录，这里和提交表单应为同一接口，先拆分处理了
      const params = {
        userId: 0, // 当前操作人用户id
        flowId: route.query.flowId,
        formId: res.data.insertId, // 保存表单信息的id
        title: 'user的请假审批',
        creatTime: new Date()
      }
      getRequest('flowSave', params)
        .then(() => {
          router.push({ path: '/task/applyed' })
        })
        .catch((res: any) => {
          console.log(res)
        })
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
