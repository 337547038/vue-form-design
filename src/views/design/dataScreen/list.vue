<template>
  <div>
    <ak-list
      ref="tableListEl"
      requestUrl="designList"
      deleteUrl="designDelete"
      :searchData="searchData"
      :tableData="tableData"
      :beforeRequest="beforeRequest"
    />
    <el-dialog
      v-model="dialog.visible"
      title="设置"
      width="480px"
      destroy-on-close
    >
      <ak-form
        ref="formEl"
        :formData="dialogFormData"
        :type="2"
        :value="dialog.row"
        editUrl="designChange"
        :afterSubmit="afterSubmit"
        :beforeSubmit="beforeSubmit"
        @btn-click="cancelClick"
      />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { ref, reactive, nextTick } from 'vue'
  const router = useRouter()
  const dialog = reactive({
    visible: false,
    row: {}
  })
  const formEl = ref()
  const tableListEl = ref()
  const tableData = ref({
    columns: [
      { label: '勾选', type: 'selection' },
      { prop: 'id', label: 'ID', width: '60px' },
      { prop: 'name', label: '名称', width: '150px' },
      { prop: 'category', label: '分类', config: { dictKey: 'list' } },
      {
        prop: 'status',
        label: '状态',
        config: {
          dictKey: 'status',
          tagList: {
            0: 'info',
            1: 'success'
          }
        }
      },
      { prop: 'creatName', label: '创建人' },
      {
        prop: 'creatDate',
        label: '创建时间',
        width: 200,
        config: { formatter: '{y}-{m}-{d} {h}:{i}:{s}' }
      },
      { label: '操作', prop: '__control', width: '180px', fixed: 'right' }
    ],
    controlBtn: [
      {
        label: '新增大屏',
        icon: 'plus',
        type: 'primary',
        click: () => {
          toDesign({})
        }
      },
      {
        label: '删除',
        key: 'del',
        type: 'danger',
        icon: 'delete'
      }
    ],
    operateBtn: [
      {
        label: '编辑',
        click: (row: any) => {
          // 跳转到表单设计编辑页
          toDesign(row)
        }
      },
      {
        label: '设置',
        click: (row: any) => {
          dialog.visible = true
          nextTick(() => {
            dialog.row = row
          })
        }
      },
      {
        label: '查看',
        click: (row: any) => {
          const { href } = router.resolve({
            path: '/design/dataScreen/show/' + row.id
          })
          window.open(href)
        }
      },
      {
        label: '删除',
        key: 'del',
        type: 'danger'
      }
    ],
    config: {}
  })
  const toDesign = (row: any) => {
    router.push({
      path: '/design/dataScreen',
      query: { id: row.id }
    })
  }
  const searchData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入大屏名称'
        },
        config: {},
        name: 'name',
        item: {
          label: '名称'
        }
      },
      {
        type: 'button',
        control: {
          icon: 'search',
          label: '查询',
          key: 'submit',
          type: 'primary'
        }
      },
      {
        type: 'button',
        control: {
          label: '重置',
          key: 'reset'
        }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default'
    }
  })
  const dialogFormData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: ''
        },
        config: {},
        name: 'name',
        item: {
          label: '名称'
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
          optionsFun: 'screen'
        },
        name: 'category',
        item: {
          label: '分类'
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
          optionsType: 1,
          optionsFun: 'roleList', // 可以为url也可以为api中的key
          method: 'post',
          label: 'name', // 指定name为label的值
          value: 'id', // 指定id为value的值
          help: '哪些角色可以查看'
        },
        name: 'roleId',
        item: {
          label: '权限角色'
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
          optionsFun: 'status'
        },
        name: 'status',
        item: {
          label: '启用状态'
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
              label: '修改',
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
              key: 'reset'
            },
            config: {
              span: 0
            }
          }
        ]
      }
    ],
    form: {
      labelWidth: '140px',
      class: '',
      size: 'default',
      name: 'formDialog'
    },
    config: {
      source: ''
    }
  })
  const afterSubmit = (type: string) => {
    if (type === 'success') {
      dialog.visible = false
      dialog.row = {}
      tableListEl.value.getListData() // 重新拉数据
    }
  }
  const beforeSubmit = (params: any) => {
    params.id = dialog.row.id
    return params
  }
  const cancelClick = (type: string) => {
    if (type === 'reset') {
      dialog.visible = false
    }
  }

  const beforeRequest = (params: any) => {
    params.type = 4 // 列表类型为4
    return params
  }
</script>
