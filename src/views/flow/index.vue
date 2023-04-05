<!-- Created by 337547038 工作流程设计-->
<template>
  <div class="design-flow-container">
    <div class="tools">
      <el-button type="primary" @click="saveClick">保存</el-button>
    </div>
    <el-tabs v-model="tabName" class="flow-tabs">
      <el-tab-pane label="基础信息" name="info">
        <ak-form :formData="formData" />
      </el-tab-pane>
      <el-tab-pane label="审批流程" name="flow">
        <flow />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import Flow from './components/flow.vue'
  import { useRoute, useRouter } from 'vue-router'
  const routeQuery = useRoute().query
  const router = useRouter()
  const tabName = ref(routeQuery.tabs || 'info')
  const formData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: ''
        },
        config: {},
        name: 'input1679749921564',
        item: {
          label: '流程名称',
          showLabel: false
        },
        customRules: [
          {
            type: 'required',
            message: '请输入流程名称',
            trigger: 'blur'
          }
        ]
      },
      {
        type: 'select',
        control: {
          modelValue: '',
          appendToBody: true
        },
        options: [
          {
            label: '标签1',
            value: 'value1'
          },
          {
            label: '标签2',
            value: 'value2'
          },
          {
            label: '标签3',
            value: 'value3'
          }
        ],
        config: {
          type: 'fixed',
          source: 0,
          request: 'get',
          sourceFun: ''
        },
        name: 'select1679750228669',
        item: {
          label: '流程表单',
          showLabel: false,
          rules: [
            {
              required: true,
              message: '必填项',
              trigger: 'change'
            }
          ]
        }
      },
      {
        type: 'select',
        control: {
          modelValue: '',
          appendToBody: true
        },
        options: [
          {
            label: '标签1',
            value: 'value1'
          },
          {
            label: '标签2',
            value: 'value2'
          },
          {
            label: '标签3',
            value: 'value3'
          }
        ],
        config: {
          type: 'fixed',
          source: 0,
          request: 'get',
          sourceFun: ''
        },
        name: 'status',
        item: {
          label: '状态'
        }
      },
      {
        type: 'component',
        control: {
          modelValue: ''
        },
        config: {},
        name: 'component1679749975848',
        item: {
          label: '流程图标',
          showLabel: false
        }
      },
      {
        type: 'select',
        control: {
          modelValue: '',
          appendToBody: true
        },
        options: [
          {
            label: '标签1',
            value: 'value1'
          },
          {
            label: '标签2',
            value: 'value2'
          },
          {
            label: '标签3',
            value: 'value3'
          }
        ],
        config: {
          type: 'fixed',
          source: 0,
          request: 'get',
          sourceFun: ''
        },
        name: 'select1679749959675',
        item: {
          label: '所在分组',
          showLabel: false
        }
      },
      {
        type: 'select',
        control: {
          modelValue: '',
          appendToBody: true
        },
        options: [
          {
            label: '标签1',
            value: 'value1'
          },
          {
            label: '标签2',
            value: 'value2'
          },
          {
            label: '标签3',
            value: 'value3'
          }
        ],
        config: {
          type: 'fixed',
          source: 0,
          request: 'get',
          sourceFun: ''
        },
        name: 'select1679750006572',
        item: {
          label: '角色权限',
          showLabel: false
        }
      },
      {
        type: 'textarea',
        control: {
          modelValue: ''
        },
        config: {},
        name: 'textarea1679750029874',
        item: {
          label: '备注说明',
          showLabel: false
        }
      }
    ],
    form: {
      labelWidth: '80px',
      class: '',
      size: 'default',
      name: 'form1679749919739'
    },
    config: {
      title: 'form1679749919739',
      formId: ''
    }
  })
  const saveClick = () => {
    // 保存成功后，当前为基础信息时，带id跳转到审批流程
    router.push({ path: '/design/flow', query: { id: 'id', tabs: 'flow' } })
  }
</script>
