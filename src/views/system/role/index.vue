<template>
  <div>
    <ak-list
      ref="tableListEl"
      requestUrl="roleList"
      deleteUrl="roleDelete"
      :searchData="searchData"
      :tableData="tableData"
      @btn-click="listBtnClick"
    />
    <el-dialog
      destroy-on-close
      v-model="dialog.visible"
      :title="dialog.title"
      width="420px"
    >
      <ak-form
        ref="formEl"
        :formData="formData"
        :dict="dialog.dict"
        :type="dialog.formType"
        addUrl="roleSave"
        editUrl="roleEdit"
        :beforeSubmit="beforeSubmit"
        :afterSubmit="afterSubmit"
        @btn-click="dialogBtnClick"
      />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { ref, nextTick, reactive, markRaw } from 'vue'
  import ContentTree from './components/content.vue'
  // const route = useRoute()
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
        item: {
          label: '角色名称'
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
          addAll: '全部',
          optionsFun: 'status'
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
          type: 'primary',
          key: 'submit'
        },
        config: {}
      },
      {
        type: 'button',
        control: {
          label: '重置',
          key: 'reset'
        },
        config: {}
      }
    ],
    form: {
      size: 'default'
    },
    config: {}
  })
  const tableData = ref({
    columns: [
      { label: '多选', type: 'selection' },
      { label: '序号', type: 'index', width: '70px' },
      { label: '角色名称', prop: 'name' },
      {
        label: '状态',
        prop: 'status',
        config: { dictKey: 'status', tagList: { 1: 'success', 0: 'info' } }
      },
      { label: '操作', prop: '__control' }
    ],
    config: { expand: true, openType: 'dialog' },
    operateBtn: [
      {
        label: '分配用户',
        click: (row: any) => {
          router.push({ path: '/system/user', query: { role: row.id } })
        }
      },
      {
        label: '编辑',
        key: 'edit',
        click: (row: any) => {
          nextTick(() => {
            console.log(row)
            //formEl.value.setValue(row) // 可以这里使用click处理，也可以放listBtnClick里处理
          })
        }
      },
      { label: '删除', key: 'del' }
    ],
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
          modelValue: ''
        },
        config: {},
        name: 'name',
        item: {
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
          optionsFun: 'status'
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
        config: {
          componentName: markRaw(ContentTree)
        },
        name: 'menuId',
        item: {
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
        item: {
          label: '备注'
        }
      },
      {
        type: 'div',
        control: {},
        config: {
          textAlign: 'center'
        },
        list: [
          {
            type: 'button',
            control: {
              label: '确定',
              type: 'primary',
              key: 'submit'
            },
            config: {
              span: 0
            }
          },
          {
            type: 'button',
            control: {
              label: '取消',
              key: 'none'
            },
            config: {
              span: 0
            }
          }
        ]
      }
    ],
    form: {
      labelWidth: 80,
      size: 'default'
    },
    config: {}
  })
  const dialog = reactive({
    visible: false,
    title: '',
    formType: 1,
    dict: {},
    editId: ''
  })
  const listBtnClick = (btn: any, row: any) => {
    // 使用弹窗方式打开新增编辑
    if (btn.key === 'add' || btn.key === 'edit') {
      // 打开弹窗
      dialog.visible = true
      dialog.title = btn.key === 'add' ? '新增' : '编辑'
      dialog.formType = btn.key === 'add' ? 1 : 2
      dialog.editId = row && row.id
      if (btn.key === 'add' && formData.value.config?.addLoad) {
        // 添加时需要加载数据
        nextTick(() => {
          formEl.value.getData()
        })
      }
      // 编辑，根据id加载
      if (btn.key === 'edit') {
        nextTick(() => {
          formEl.value.setValue(row)
          //formEl.value.getData({ id: row.id })
        })
      }
    }
  }
  // 提交表单前事件
  const beforeSubmit = (params: any) => {
    if (dialog.formType === 2) {
      // 编辑模式下添加参数
      params.id = dialog.editId
    }
    return params
  }
  // 提交表单后事件
  const afterSubmit = (type: string) => {
    if (type === 'success') {
      // 添加成功，刷新列表数据
      closeResetDialog()
      tableListEl.value.getListData()
    }
  }
  // 关闭弹窗并重置表单，否则下次打开会保留上次数据
  const closeResetDialog = () => {
    dialog.visible = false
    dialog.editId = ''
    //formEl.value.resetFields() // 重置表单
  }
  // 点击弹窗取消按钮时
  const dialogBtnClick = (type: string) => {
    if (type === 'none') {
      closeResetDialog()
    }
  }
</script>
