<template>
  <div>
    <ak-list
      ref="tableListEl"
      requestUrl="designList"
      deleteUrl="designDelete"
      :searchData="searchData"
      :tableData="tableData"
      :beforeRequest="beforeRequest"
    >
      <template #sourceName="{ row }">
        <div>{{ row.sourceName }}/{{ row.source }}</div>
      </template>
    </ak-list>
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
  import { nextTick, reactive, ref } from 'vue'
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
      { prop: 'name', label: '表单名称', width: '150px' },
      /*{ prop: 'source', label: '数据源ID', width: '90px' },*/
      { prop: 'sourceName', label: '数据源名称/ID', width: '150px' },
      { prop: 'category', label: '分类', config: { dictKey: 'form' } },
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
      // {
      //   prop: 'updateDate',
      //   label: '修改时间',
      //   width: 200,
      //   config: { formatter: '{y}-{m}-{d} {h}:{i}:{s}' }
      // },
      // { prop: 'editName', label: '最后修改' },
      { label: '操作', prop: '__control', width: '220px', fixed: 'right' }
    ],
    controlBtn: [
      {
        label: '新增',
        type: 'primary',
        size: 'small',
        click: () => {
          toFormDesign({})
        }
      },
      { label: '删除', key: 'del', size: 'small' }
    ],
    operateBtn: [
      // {
      //   label: '启用',
      //   key: 'status',
      //   visible: '$.status===0',
      //   click: (row: any) => {
      //     changeStatus(row, 1)
      //   }
      // },
      // {
      //   label: '禁用',
      //   key: 'status',
      //   visible: '$.status===1',
      //   click: (row: any) => {
      //     changeStatus(row, 0)
      //   }
      // },
      {
        label: '设置',
        key: 'set',
        click: (row: any) => {
          dialog.visible = true
          nextTick(() => {
            dialog.row = row
            formEl.value.setValue(row)
          })
        }
      },
      {
        label: '创建列表',
        click: (row: any) => {
          router.push({ path: '/design/dataList', query: { form: row.id } })
        }
      },
      {
        label: '编辑',
        click: (row: any) => {
          // 跳转到表单设计编辑页
          toFormDesign(row)
        }
      },
      {
        label: '删除',
        key: 'del'
      }
    ],
    config: {
      expand: true
    }
  })
  const toFormDesign = (row: any) => {
    router.push({
      path: '/design/form',
      query: { id: row.id } // 根据id获取已设计的数据
    })
  }
  const searchData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入表单名称'
        },
        config: {},
        name: 'name',
        item: {
          label: '表单名称'
        }
      },
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入数据源名称'
        },
        config: {},
        name: 'sourceName',
        item: {
          label: '数据源名称'
        }
      },
      {
        type: 'select',
        control: {
          modelValue: '',
          placeholder: '请选择表单分类'
        },
        config: {
          optionsType: 2,
          optionsFun: 'form'
        },
        name: 'category',
        item: {
          label: '分类'
        }
      },
      {
        type: 'button',
        control: {
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
    },
    config: {}
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
          label: '表单名称'
        },
        customRules: [
          {
            type: 'required',
            message: '请输入表单名称',
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
          optionsType: 2,
          optionsFun: 'form'
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
    params.type = 1 // 表单类型为1
    return params
  }
</script>
