<!-- Created by 337547038 -->
<template>
  <el-drawer
    v-model="state.visible"
    destroy-on-close
    :with-header="false"
    size="1200px"
  >
    <div class="flow-detail-drawer">
      <div class="header">
        <div class="face"><i class="icon-user"></i></div>
        <div>
          <div class="name">张三总</div>
          <el-tag>总裁助理审批中</el-tag>
        </div>
        <div class="button">
          <el-button type="success">同意</el-button>
          <el-button type="danger">拒绝</el-button>
          <el-button type="primary">流转</el-button>
        </div>
      </div>
      <el-tabs>
        <el-tab-pane label="表单信息">
          <div class="form-info" v-loading="state.loading">
            <ak-form
              ref="formEl"
              :formData="formData"
              :beforeSubmit="beforeSubmit"
              :afterSubmit="afterSubmit"
              :type="2"
              requestUrl="getFormContent"
              editUrl="editFormContent"
            />
            <ak-form
              ref="formOptionsEl"
              :formData="flowOptionsForm"
              :type="1"
              @change="formChange"
            />
            <div class="flow-list"></div>
          </div>
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
        <el-tab-pane label="流转记录">
          <ak-list ref="tableListEl" :tableData="tableData" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
  import { ref, nextTick, reactive } from 'vue'
  import { getRequest } from '@/api'
  import { stringToObj } from '@/utils/form'

  // const props = withDefaults(
  //   defineProps<{
  //     type: 'todo' | 'apply' | 'done'
  //   }>(),
  //   {}
  // )

  // const emits = defineEmits<{
  //   (e: 'update:modelValue', value: string): void
  // }>()
  const state = reactive({
    visible: false,
    formId: '',
    id: '',
    loading: true
  })
  const open = (obj: any) => {
    state.visible = true
    state.id = obj.formId // 流程提交表单保存的id，用于获取提交的表单内容及修改流程表单信息
    nextTick(() => {
      getInitData(obj)
    })
  }
  // 表单流程相关
  const flowEl = ref()
  const formEl = ref()
  const formData = ref({
    list: [],
    form: {}
  })
  // 修改提交的流程表单信息
  const beforeSubmit = (params: Record<string, any>) => {
    params.formId = state.formId
    params.id = state.id
    return params
  }
  const afterSubmit = () => {}
  const getInitData = (obj: any) => {
    const params = {
      id: obj.flowId
    }
    // 获取设计的流程信息
    getRequest('designById', params).then((res: any) => {
      flowEl.value.setValue(stringToObj(res.data.data))
      // 获取流程表单信息，修改表单需要使用的id
      state.formId = res.data.source
      getRequest('designById', { id: res.data.source }).then((res: any) => {
        formData.value = stringToObj(res.data.data)
        nextTick(() => {
          state.loading = false
        })
      })
      // 获取表单填写的内容
      formEl.value.getData({ formId: state.formId, id: state.id })
    })
  }
  // 表单相关结束
  // 审批意见表单，这里其实可以跟流程表单合在一起的
  const formOptionsEl = ref()
  const flowOptionsForm = ref({
    list: [
      {
        type: 'divider',
        control: {},
        config: {},
        item: {
          label: '审批意见'
        }
      },
      {
        type: 'select',
        control: {
          modelValue: '',
          appendToBody: true,
          placeholder: '请选择常用审批意见'
        },
        options: [
          {
            label: '同意',
            value: 1
          },
          {
            label: '不同意',
            value: 2
          }
        ],
        config: {
          optionsType: 0,
          span: 8
        },
        name: 'type',
        item: {
          label: '快选审批意见'
        }
      },
      {
        type: 'textarea',
        control: {
          modelValue: ''
        },
        config: {},
        name: 'remark',
        item: {
          label: '审批意见',
          rules: [
            {
              required: true,
              message: '请输入审批意见',
              trigger: 'change'
            }
          ]
        }
      }
    ],
    form: {
      size: 'default'
    },
    config: {}
  })
  const formChange = ({ key, value }: { key: string; value: any }) => {
    if (key === 'type') {
      formOptionsEl.value.setValue({ remark: value === 1 ? '同意' : '不同意' })
    }
  }
  // 流转记录
  const tableData = ref({
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
  defineExpose({ open })
</script>
<style lang="scss">
  .flow-detail-drawer {
    .header {
      padding: 16px 24px;
      border-bottom: 1px solid #f0f0f0;
      margin-bottom: 20px;
      display: flex;
      .face {
        background: #f0f0f0;
        width: 40px;
        height: 40px;
        display: flex;
        border-radius: 50%;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        margin-right: 10px;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .name {
        margin-bottom: 5px;
      }
      .button {
        flex: 2;
        text-align: center;
      }
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
  }
</style>
