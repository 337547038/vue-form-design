<!-- Created by 337547038 发起流程 -->
<template>
  <div class="container-apply-start">
    <el-tabs>
      <el-tab-pane label="表单信息">
        <ak-form :formData="formData" :afterSubmit="afterSubmit" />
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
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { getRequest } from '@/api'
  import { stringToObj } from '@/utils/form'

  const route = useRoute()
  const router = useRouter()
  const flowEl = ref()
  const formData = ref({
    list: [],
    form: {}
  })
  const getInitData = () => {
    const params = {
      id: route.query.id
    }
    getRequest('designById', params).then((res: any) => {
      flowEl.value.setValue(stringToObj(res.data.data))
      // 获取对应表单
      getRequest('designById', { id: res.data.source }).then((res: any) => {
        formData.value = stringToObj(res.data.data)
      })
    })
  }
  const afterSubmit = (type: string) => {
    // 这里还要提交流程记录 todo
    if (type === 'success') {
      router.push({ path: '/task/applyed' })
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
