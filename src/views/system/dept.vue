<template>
  <div>
    <ak-list
      ref="tableListEl"
      :api-key="{list:'deptList',del:'deptDelete'}"
      :search-data="searchData"
      :data="tableData"
      :after="afterFetch"
    />
    <el-dialog
      v-model="dialog.visible"
      :title="dialog.title"
      width="400px"
      destroy-on-close
    >
      <ak-form
        ref="formNameEl"
        :type="dialog.formType"
        :data="formData"
        :submit-url="dialog.formType==='add'?'deptSave':'deptEdit'"
        :before="beforeSubmit"
        :after="afterSubmit"
        @btn-click="btnClick"
      />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, nextTick } from 'vue'
  import { flatToTree } from '@/utils/flatTree'

  const tableListEl = ref()
  const formNameEl = ref()
  const departmentTree = ref([]) // 上级部门
  const searchData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入部门名称'
        },
        config: {},
        name: 'name',
        formItem: {
          label: '部门名称'
        }
      },
      {
        type: 'select',
        control: {
          modelValue: '',
          style: { width: '100px' }
        },
        options: [],
        config: {
          optionsType: 2,
          optionsFun: 'sys-status'
        },
        name: 'status',
        formItem: {
          label: '状态'
        }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default'
    },
    config: { submitCancel: true }
  })
  const tableData = ref({
    tableProps: {
      rowKey: 'id'
    },
    columns: [
      { label: '部门名称', prop: 'name' },
      {
        label: '排序',
        prop: 'sort'
      },
      {
        label: '状态',
        prop: 'status',
        render: 'tag',
        custom: { 1: 'success', 2: 'info' },
        replaceValue: 'sys-status',
        config: {}
      },
      {
        label: '操作', prop: '__control', render: 'buttons', buttons: [
          {
            label: '新增',
            click: (row: any) => {
              dialog.visible = true
              dialog.title = '新增部门'
              dialog.formType = 'add'
              nextTick(() => {
                formNameEl.value.setValue({ parentId: row.id })
              })
              setParentIdData()
            }
          },
          {
            label: '编辑',
            click: (row: any) => {
              dialog.visible = true
              dialog.title = '编辑部门'
              dialog.formType = 'edit'
              dialog.editId = row.id
              // 这里有个问题parentId默认treeSelect显示有异常
              if (row.parentId === 0) {
                row.parentId = ''
              }
              nextTick(() => {
                formNameEl.value.setValue(row)
              })
              setParentIdData()
            }
          },
          {
            label: '删除',
            key: 'del'
          }
        ]
      }
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
          dialog.formType = 'add'
          setParentIdData()
        }
      }
    ],
    config: {
      fixedBottomScroll: false
    }
  })
  // 表单
  const dialog = reactive({
    visible: false,
    title: '',
    formType: 'add',
    editId: ''
  })
  const formData = ref({
    list: [
      {
        type: 'treeSelect',
        control: {
          modelValue: '',
          data: [],
          renderAfterExpand: false,
          props: {
            label: 'name',
            value: 'id'
          },
          checkStrictly: true, // 可选任意级
          placeholder: '请选择上级部门'
        },
        config: {
          optionsType: 0
        },
        name: 'parentId',
        formItem: { label: '上级部门' }
      },
      {
        type: 'input',
        control: { modelValue: '', placeholder: '请输入部门名称' },
        config: {},
        name: 'name',
        formItem: { label: '部门名称' },
        customRules: [
          { type: 'required', message: '部门名称不能为空', trigger: 'blur' }
        ]
      },
      {
        type: 'inputNumber',
        control: { modelValue: 0, controlsPosition: 'right' },
        config: {},
        name: 'sort',
        formItem: { label: '排序' }
      },
      {
        type: 'radio',
        control: { modelValue: 1 },
        options: [],
        config: {
          optionsType: 2,
          optionsFun: 'sys-status'
          // transformData: 'string'
        },
        name: 'status',
        formItem: { label: '状态' }
      },
      {
        type: 'textarea',
        control: {
          modelValue: ''
        },
        config: {},
        name: 'remark',
        formItem: {
          label: '备注'
        }
      }
    ],
    form: {
      labelWidth: '100px',
      size: 'default'
    },
    config: { submitCancel: true }
  })
  const beforeSubmit = (params: any) => {
    // 如编辑时添加参数
    if (dialog.formType === 'edit') {
      params.id = dialog.editId
      delete params.children
    }
    return params
  }
  // 表单提交完成事件
  const afterSubmit = (res: any, success: boolean) => {
    dialog.visible = false
    if (success) {
      // 操作成功才刷新列表数据
      tableListEl.value.getListData()
    }
  }
  // 取消按钮事件
  const btnClick = (type: string) => {
    if (type === 'reset') {
      dialog.visible = false
    }
  }
  // 处理表格数据，转换为可折叠表格
  const afterFetch = (result: any, success: boolean, type: string) => {
    if (type === 'fetch') {
      const list = result.list
      const treeList = flatToTree(list)
      departmentTree.value = treeList
      return flatToTree(treeList)
    }
  }
  // 设置部门下拉选择
  const setParentIdData = () => {
    nextTick(() => {
      formNameEl.value.setOptions({ parentId: departmentTree.value })
    })
  }
</script>
