<template>
  <div>
    <ak-list
      ref="tableListEl"
      :api-key="{ list: 'designList', del: 'designDelete',edit:'designEdit' }"
      :search-data="searchData"
      :data="tableData"
      :query="{ type: 2 }"
    >
      <template #sourceName="{ row, dict }">
        <router-link
          :to="`/design/form?id=${row.source}&redirect=/design/list/list`"
        >
          {{ dict.formName && dict.formName[row.source] }}/{{ row.source }}
        </router-link>
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
        :data="dialogFormData"
        operate-type="edit"
        :params="{ id: dialog.id }"
        submit-url="designEdit"
        :after="afterSubmit"
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
    id: null
  })
  const formEl = ref()
  const tableListEl = ref()
  const tableData = ref({
    columns: [
      { label: '勾选', type: 'selection' },
      { prop: 'id', label: 'ID', width: '60px' },
      { prop: 'name', label: '名称', width: '150px' },
      { prop: 'sourceName', label: '表单名称/ID', width: 150 },
      {
        prop: 'category',
        label: '分类',
        render: 'tag',
        replaceValue: 'sys-list',
        custom: { 1: 'success', 2: 'danger' }
      },
      {
        prop: 'status',
        label: '状态',
        render: 'switch',
        config: {
          inlinePrompt: true,
          activeText: '启用',
          inactiveText: '禁用',
          activeValue: 1,
          inactiveValue: 0
        }
      },
      {
        prop: 'creatUserId',
        label: '创建人',
        render: 'text',
        replaceValue: 'creatUser'
      },
      {
        prop: 'updateDate',
        label: '更新时间',
        width: 200,
        render: 'datetime'
      },
      {
        label: '操作',
        render: 'buttons',
        width: '300px',
        fixed: 'right',
        buttons: [
          {
            key: 'edit',
            label: '编辑',
            click: (row: any) => {
              // 跳转到表单设计编辑页
              toFormDesign(row)
            },
            icon: ''
          },
          {
            label: '设置',
            click: (row: any) => {
              dialog.visible = true
              nextTick(() => {
                dialog.id = row.id
                formEl.value.setValue(row, true)
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
                  redirect: `/design/list/list`
                }
              })
            }
          },
          {
            label: '查看',
            click: (row: any) => {
              router.push({
                path: '/design/list/content/' + row.id
              })
            },
            icon: ''
          },
          {
            key: 'del',
            label: '删除',
            icon: ''
          }
        ]
      }
    ],
    controlBtn: [
      {
        label: '新增列表',
        key: 'add',
        size: 'small',
        click: () => {
          toFormDesign({})
        }
      },
      {
        label: '删除',
        key: 'del',
        size: 'small'
      }
    ],
    config: {
      fixedBottomScroll: true,
      columnsSetting: true,
      expand: true
    }
  })
  const toFormDesign = (row: any) => {
    router.push({
      path: '/design/list',
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
        formItem: {
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
        formItem: {
          label: '表单名称'
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
  const dialogFormData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入列表名称'
        },
        name: 'name',
        formItem: {
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
          optionsFun: 'sys-list'
          // transformData: 'string'
        },
        name: 'category',
        formItem: {
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
          optionsType: 2,
          optionsFun: 'sys-status'
          // transformData: 'string'
        },
        name: 'status',
        formItem: {
          label: '启用状态'
        }
      }
    ],
    form: {
      labelWidth: '140px',
      class: '',
      size: 'default',
      name: 'formDialog'
    },
    config: {
      submitCancel: true
    }
  })
  const afterSubmit = () => {
    dialog.visible = false
    tableListEl.value.getListData() // 重新拉数据
  }
  /* const beforeSubmit = (params: any) => {
    return params
  } */
  const cancelClick = (type: string) => {
    if (type === 'reset') {
      dialog.visible = false
    }
  }
</script>
