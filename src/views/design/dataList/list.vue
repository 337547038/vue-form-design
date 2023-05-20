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
        <router-link :to="`/design/form?id=${row.source}`"
          >{{ row.sourceName }}/{{ row.source }}</router-link
        >
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
  // import { ElMessage } from 'element-plus'
  // import iconfont from '@/components/iconfont.vue'
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
      /*{ prop: 'source', label: '表单ID', width: '110px' },*/
      { prop: 'sourceName', label: '表单名称/ID', width: 150 },
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
      // {
      //   prop: 'updateDate',
      //   label: '修改时间',
      //   width: 200,
      //   config: { formatter: '{y}-{m}-{d} {h}:{i}:{s}' }
      // },
      // { prop: 'editName', label: '最后修改' },
      { label: '操作', prop: '__control', width: '110px', fixed: 'right' }
    ],
    controlBtn: [
      {
        label: '新增列表',
        icon: 'plus',
        type: 'primary',
        size: 'small',
        click: () => {
          toFormDesign({})
        }
      },
      {
        label: '删除',
        key: 'del',
        size: 'small',
        type: 'danger',
        icon: 'delete'
      }
    ],
    operateBtn: [
      {
        label: '编辑',
        click: (row: any) => {
          // 跳转到表单设计编辑页
          toFormDesign(row)
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
          router.push({
            path: '/design/dataList/content',
            query: { id: row.id }
          })
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
          modelValue: '',
          placeholder: '请输入列表名称'
        },
        config: {},
        name: 'name',
        item: {
          label: '名称'
        }
      },
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入表单名称'
        },
        config: {},
        name: 'sourceName',
        item: {
          label: '表单名称'
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
          optionsFun: 'list'
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
        type: 'component',
        control: {
          modelValue: ''
        },
        config: {
          // componentName: markRaw(iconfont)
          componentName: 'DiyIconfont'
        },
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
        type: 'switch',
        control: {
          modelValue: 1,
          activeValue: 1,
          inactiveValue: 0
        },
        config: {},
        name: 'showMenu',
        item: {
          label: '是否在菜单中显示'
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
    params.type = 2 // 列表类型为2
    return params
  }
</script>
