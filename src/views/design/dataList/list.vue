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
    <el-dialog v-model="dialog.visible" title="设置" width="480px">
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
  // import { getRequest } from '@/api'
  import { ElMessage } from 'element-plus'
  // const route = useRoute()
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
      { prop: 'id', label: 'ID' },
      { prop: 'name', label: '名称', width: '150px' },
      { prop: 'source', label: '表单ID', width: '110px' },
      { prop: 'sourceName', label: '表单名称' },
      { prop: 'category', label: '分类', config: { dictKey: 'category' } },
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
      {
        prop: 'updateDate',
        label: '修改时间',
        width: 200,
        config: { formatter: '{y}-{m}-{d} {h}:{i}:{s}' }
      },
      { prop: 'editName', label: '最后修改' },
      { label: '操作', prop: '__control', width: '110px', fixed: 'right' }
    ],
    controlBtn: [
      {
        label: '新增',
        key: 'add',
        type: 'primary',
        size: 'small',
        click: () => {
          toFormDesign({})
          return false
        }
      },
      { label: '删除', key: 'del', size: 'small' }
    ],
    operateBtn: [
      {
        label: '编辑',
        key: 'edit',
        click: (row: any) => {
          // 跳转到表单设计编辑页
          toFormDesign(row)
          return false
        }
      },
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
        click: (row: any) => {
          // todo 弹窗没完善
          dialog.visible = true
          nextTick(() => {
            dialog.row = row
          })
        }
      },
      {
        label: '搜索设置',
        click: (row: any) => {
          router.push({
            path: '/design/form',
            query: {
              type: 'search',
              id: row.id,
              redirect: `/design/dataList/list`
            }
          })
        }
      },
      {
        label: '查看',
        click: (row: any) => {
          router.push({ path: '/design/form/content/' + row.id })
        }
      },
      {
        label: '删除',
        key: 'del'
      }
    ],
    config: {
      operateDropdown: true
    }
  })
  const toFormDesign = (row: any) => {
    router.push({
      path: '/design/dataList',
      query: { id: row.id }
    })
  }
  const searchData = ref({
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
        options: [
          // todo
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
        options: [
          // todo
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
        name: 'role',
        item: {
          label: '权限角色'
        }
      },
      {
        type: 'input',
        control: {
          modelValue: ''
        },
        config: {},
        name: 'icon',
        item: {
          label: 'icon图标'
        }
      },
      {
        type: 'select',
        control: {
          modelValue: '',
          appendToBody: true
        },
        options: [
          // todo
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
          label: '启用状态'
        }
      },
      {
        type: 'switch',
        control: {
          modelValue: false
        },
        config: {},
        name: 'menuShow',
        item: {
          label: '是否在菜单中显示'
        }
      },
      {
        type: 'div',
        control: {},
        config: {
          textAlign: 'center',
          inline: true
        },
        list: [
          {
            type: 'button',
            control: {
              label: '修改',
              type: 'primary'
            },
            config: {
              event: '0'
            }
          },
          {
            type: 'button',
            control: {
              label: '取消'
            },
            config: {
              event: '1'
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
  const afterSubmit = (res: any, type: string) => {
    console.log(res, type)
    if (type === 'success') {
      dialog.visible = false
      dialog.row = {}
      ElMessage.success(res.message || '修改成功')
      tableListEl.value.getListData() // 重新拉数据
    } else {
      ElMessage.error(res.message || '操作失败')
    }
  }
  const beforeSubmit = (params: any) => {
    params.id = dialog.row.id
  }
  const cancelClick = (type: string) => {
    if (type === '1') {
      dialog.visible = false
    }
  }

  const beforeRequest = (params: any) => {
    params.type = 2 // 列表类型为2
    return params
  }
</script>
