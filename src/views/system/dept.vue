<template>
  <div>
    <ak-list
      ref="tableListEl"
      requestUrl=""
      deleteUrl=""
      :searchData="searchData"
      :tableData="tableData"
    />
    <el-dialog v-model="dialog.visible" :title="dialog.title" width="400px">
      <ak-form
        ref="formNameEl"
        :type="dialog.formType"
        :formData="formData"
        requestUrl=""
        addUrl=""
        editUrl=""
        :beforeSubmit="beforeSubmit"
      />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
  // import {useRoute, useRouter} from 'vue-router'
  import { ref, computed, reactive } from 'vue'
  const tableListEl = ref()
  const searchData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入部门名称'
        },
        config: {
          className: 'a'
        },
        name: 'name',
        item: {
          label: '部门名称'
        }
      },
      {
        type: 'select',
        control: {
          modelValue: ''
        },
        options: [],
        config: {
          type: 'async',
          source: 2,
          request: 'get',
          sourceFun: 'status'
        },
        name: 'status',
        item: {
          label: '状态'
        }
      },
      {
        type: 'button',
        control: {
          label: '查询',
          key: 'submit',
          type: 'primary'
        },
        config: {}
      },
      {
        type: 'button',
        control: {
          label: '清空',
          key: 'reset'
        },
        config: {}
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default'
    },
    config: {
      style: '.a{color:red}'
    }
  })
  const tableData = ref({
    tableProps: {},
    columns: [
      { label: '部门名称', prop: 'name' },
      { label: '状态', prop: 'ip' },
      {
        label: '排序',
        prop: 'order'
      },
      {
        label: '状态',
        prop: 'status',
        config: { dictKey: 'status', tagList: { 1: 'success', 2: 'info' } }
      },
      { label: '操作', prop: '__control' }
    ],
    controlBtn: [
      {
        label: '新增',
        type: 'primary',
        size: 'small',
        icon: 'plus',
        click: () => {
          dialog.visible = true
          dialog.title = '新增部门'
          dialog.formType = 1
        }
      }
    ],
    operateBtn: [
      {
        label: '新增',
        click: (row) => {}
      },
      {
        label: '编辑',
        key: 'edit'
      },
      {
        label: '删除',
        key: 'del'
      }
    ],
    config: {}
  })
  // 表单
  const dialog = reactive({
    visible: false,
    title: '',
    formType: 1
  })
  const formNameEl = ref()
  const formData = ref({
    list: [
      {
        type: 'select',
        control: {
          modelValue: '',
          appendToBody: true,
          placeholder: '请选择上级部门'
        },
        options: [],
        config: {
          type: 'fixed',
          source: 0,
          request: 'get',
          sourceFun: ''
        },
        name: 'parentId',
        item: { label: '上级部门' }
      },
      {
        type: 'input',
        control: { modelValue: '' },
        config: {},
        name: 'name',
        item: { label: '部门名称' },
        customRules: [
          { type: 'required', message: '部门名称不能为空', trigger: 'blur' }
        ]
      },
      {
        type: 'inputNumber',
        control: { modelValue: 0, controlsPosition: 'right' },
        config: {},
        name: 'order',
        item: { label: '排序' }
      },
      {
        type: 'radio',
        control: { modelValue: 1 },
        options: [],
        config: {
          type: 'async',
          source: 2,
          request: 'get',
          sourceFun: 'status'
        },
        name: 'status',
        item: { label: '状态' }
      },
      {
        type: 'div',
        control: {},
        config: { textAlign: 'center' },
        list: [
          {
            type: 'button',
            control: { label: '确定', type: 'primary', key: 'submit' },
            config: { span: 0 }
          },
          {
            type: 'button',
            control: { label: '取消', key: 'reset' },
            config: { span: 0 }
          }
        ]
      }
    ],
    form: {
      labelWidth: '100px',
      class: '',
      size: 'default',
      name: 'form1'
    },
    config: {}
  })
  const formType = computed(() => {
    return 1
  })
  const beforeSubmit = (params) => {
    //　如编辑时添加参数
    //  params.id='xxx'
    return params
  }
</script>
