<template>
  <div>
    <ak-list
      ref="tableListEl"
      :api-key="{list:'roleList',del:'roleDelete'}"
      :search-data="searchData"
      :data="tableData"
      @btn-click="listBtnClick"
    />
    <el-dialog
      v-model="dialog.visible"
      destroy-on-close
      :title="dialog.title"
      width="420px"
    >
      <ak-form
        ref="formEl"
        :data="formData"
        :dict="dialog.dict"
        :operate-type="dialog.formType"
        :submit-url="dialog.formType==='add'?'roleSave':'roleEdit'"
        :before="beforeSubmit"
        :after="afterSubmit"
        @btn-click="dialogBtnClick"
      />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { ref, nextTick, reactive, markRaw } from 'vue'
  import ContentTree from './components/content.vue'
  const router = useRouter()
  const formEl = ref()
  const tableListEl = ref()
  const searchData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入角色名称'
        },
        config: {},
        name: 'name',
        formItem: {
          label: '角色名称'
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
          addAll: '全部',
          optionsFun: 'sys-status'
        },
        name: 'status',
        formItem: {
          label: '状态'
        }
      }
    ],
    form: {
      size: 'default'
    },
    config: { submitCancel: true }
  })
  const tableData = ref({
    columns: [
      { label: '多选', type: 'selection' },
      { label: '序号', type: 'index', width: '70px' },
      { label: '角色名称', prop: 'name' },
      {
        label: '状态',
        prop: 'status',
        render: 'tag',
        custom: { 1: 'success', 0: 'info' },
        replaceValue: 'sys-status'
      },
      { label: '操作', prop: '__control', render: 'buttons', buttons: [
          {
            label: '已分配用户',
            click: (row: any) => {
              router.push({ path: '/system/user', query: { roleId: row.id } })
            }
          },
          {
            label: '编辑',
            key: 'edit',
            click: (row: any) => {
              nextTick(() => {
                console.log(row)
                // formEl.value.setValue(row) // 可以这里使用click处理，也可以放listBtnClick里处理
              })
            }
          },
          { label: '删除', key: 'del' }
        ] }
    ],
    config: { expand: true, openType: 'dialog' },
    controlBtn: [
      {
        label: '新增',
        key: 'add',
        type: 'primary',
        size: 'small',
        icon: 'plus'
      },
      {
        label: '批量删除',
        key: 'del',
        type: 'danger',
        size: 'small',
        icon: 'delete'
      }
    ]
  })
  const formData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入角色名称'
        },
        config: {},
        name: 'name',
        formItem: {
          label: '角色名称'
        },
        customRules: [
          {
            type: 'required',
            message: '角色名称不能为空',
            trigger: 'blur'
          }
        ]
      },
      {
        type: 'radio',
        control: {
          modelValue: 1
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
      },
      {
        type: 'component',
        control: {
          modelValue: ''
        },
        config: {
          componentName: markRaw(ContentTree)
        },
        name: 'menuId',
        formItem: {
          label: '菜单权限'
        }
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
      labelWidth: 80,
      size: 'default'
    },
    config: { submitCancel: true }
  })
  const dialog = reactive({
    visible: false,
    title: '',
    formType: 'add',
    dict: {},
    editId: ''
  })
  const listBtnClick = (key: string, row: any) => {
    // 使用弹窗方式打开新增编辑
    if (key === 'add' || key === 'edit') {
      // 打开弹窗
      dialog.visible = true
      dialog.title = key === 'add' ? '新增' : '编辑'
      dialog.formType = key
      dialog.editId = row && row.id
      if (key === 'add' && formData.value.config?.addLoad) {
        // 添加时需要加载数据
        nextTick(() => {
          formEl.value.getData()
        })
      }
      // 编辑，根据id加载
      if (key === 'edit') {
        nextTick(() => {
          formEl.value.setValue(row)
          // formEl.value.getData({ id: row.id })
        })
      }
    }
  }
  // 提交表单前事件
  const beforeSubmit = (params: any) => {
    if (dialog.formType === 'edit') {
      // 编辑模式下添加参数
      params.id = dialog.editId
    }
    return params
  }
  // 提交表单后事件
  const afterSubmit = (res: any, success: boolean) => {
    if (success) {
      // 添加成功，刷新列表数据
      closeResetDialog()
      tableListEl.value.getListData()
    }
  }
  // 关闭弹窗并重置表单，否则下次打开会保留上次数据
  const closeResetDialog = () => {
    dialog.visible = false
    dialog.editId = ''
    // formEl.value.resetFields() // 重置表单
  }
  // 点击弹窗取消按钮时
  const dialogBtnClick = (type: string) => {
    if (type === 'reset') {
      closeResetDialog()
    }
  }
</script>
