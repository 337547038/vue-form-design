<!-- Created by 337547038 工作流程设计-->
<template>
  <div class="design-flow-container">
    <div class="tools">
      <el-button type="primary" @click="saveClick">保存</el-button>
    </div>
    <el-tabs v-model="tabName" class="flow-tabs" @tab-click="tabsClick">
      <el-tab-pane label="基础信息" name="info" class="tabs-info">
        <ak-form
          ref="formEl"
          :formData="formData"
          :type="formType"
          addUrl="designSave"
          editUrl="designEdit"
          requestUrl="designById"
          :beforeSubmit="beforeSubmit"
          :afterSubmit="afterSubmit"
          :afterResponse="afterResponse"
        />
      </el-tab-pane>
      <el-tab-pane label="审批流程" name="flow">
        <flow ref="flowEl" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, nextTick } from 'vue'
  import Flow from './components/flow.vue'
  import { useRoute, useRouter } from 'vue-router'
  //import iconfont from '@/components/iconfont.vue'
  import { objToStringify, stringToObj } from '@/utils/form'
  import { useLayoutStore } from '@/store/layout'
  import { ElMessage } from 'element-plus'
  const layoutStore = useLayoutStore()
  layoutStore.changeBreadcrumb([{ label: '系统工具' }, { label: '流程设计' }])

  const formEl = ref()
  const flowEl = ref()
  const routeQuery = useRoute()
  const router = useRouter()
  //const flowData = ref()
  const tabName = ref(routeQuery.query.tabs || 'info')
  const formData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入流程名称'
        },
        config: {},
        name: 'name',
        item: {
          label: '流程名称'
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
        options: [],
        config: {
          optionsType: 1,
          optionsFun: 'designList',
          method: 'post',
          debug: true,
          label: 'name',
          value: 'id',
          beforeRequest: (data: any) => {
            // data经过处理后返回
            // console.log('beforeRequest', data)
            data.type = 1
            return data
          }
        },
        name: 'source',
        item: {
          label: '流程表单',
          rules: [
            {
              required: true,
              message: '请选择流程表单',
              trigger: 'blur'
            }
          ]
        }
      },
      {
        type: 'switch',
        control: {
          modelValue: 1,
          activeValue: 1,
          inactiveValue: 0
        },
        options: [],
        config: {
          optionsType: 2
        },
        name: 'status',
        item: {
          label: '状态'
        }
      },
      {
        type: 'component',
        control: {
          modelValue: '',
          colorPicker: true
        },
        config: {
          //componentName: markRaw(iconfont)
          componentName: 'DiyIconfont'
        },
        name: 'icon',
        item: {
          label: '流程图标'
        }
      },
      {
        type: 'select',
        control: {
          modelValue: '',
          appendToBody: true
        },
        options: [],
        config: {
          optionsType: 2,
          optionsFun: 'flow'
        },
        name: 'category',
        item: {
          label: '所在分组'
        }
      },
      {
        type: 'select',
        control: {
          modelValue: '',
          appendToBody: true
        },
        options: [],
        config: {
          // debug: true,
          optionsType: 1,
          optionsFun: 'roleList',
          label: 'name',
          value: 'id'
        },
        name: 'roleId',
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
        config: {
          span: 24
        },
        name: 'remark',
        item: {
          label: '备注说明',
          showLabel: false
        }
      }
    ],
    form: {
      class: 'form-row-2',
      labelWidth: '110px',
      size: 'default'
    }
  })
  const id = computed(() => {
    return routeQuery.query.id
  })
  const formType = computed(() => {
    return id.value ? 2 : 1
  })
  const tabsClick = (pane: any) => {
    if (pane.paneName === 'info') {
      //getInitData()
    }
  }
  const saveClick = () => {
    formEl.value.submit()
  }
  const beforeSubmit = (params: any) => {
    if (id.value) {
      params.id = id.value
    }
    if (params.icon) {
      params.icon = params.icon?.join(',')
    }
    params.type = 3
    if (flowEl.value?.getValue) {
      params.data = objToStringify(flowEl.value?.getValue())
      //console.log('flowEl.value.getValue()', flowEl.value.getValue())
    }
    return params
  }
  const afterResponse = (res: any) => {
    if (res.icon) {
      res.icon = res.icon.split(',')
    }
    flowEl.value.setValue(stringToObj(res.data))
    return res
  }
  const afterSubmit = (type: string, res: any) => {
    // 保存成功后，当前为基础信息时，带id跳转到审批流程
    if (type === 'success') {
      if (tabName.value === 'info') {
        tabName.value = 'flow'
        if (!id.value) {
          const id = res.data.insertId
          router.push({ path: '/design/flow', query: { id: id, tabs: 'flow' } })
          nextTick(() => {
            getInitData()
          })
        }
      } else {
        // 到所有流程列表
        router.push({ path: '/design/flow/list' })
      }
    }
    if (type === 'validate' && tabName.value === 'flow') {
      // 校验没通过
      let message
      try {
        for (const key in res) {
          if (!message) {
            message = res[key][0].message
            break
          }
        }
        ElMessage.error(message)
      } catch (e) {}
    }
  }
  const getInitData = () => {
    if (id.value) {
      formEl.value.getData({ id: id.value })
    }
  }
  onMounted(() => {
    getInitData()
  })
</script>
