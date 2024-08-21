<template>
  <div>
    <ak-list
      ref="tableListEl"
      :apiKey="{ list: 'designList', del: 'designDelete' }"
      :search-data="searchData"
      :data="tableData"
      :query="{ type: 1 }"
    >
      <template #sourceName="{ row }">
        <router-link
          :to="`/design/datasource?source=${row.source}`"
          v-if="row.source"
          >{{ row.sourceName }}</router-link
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
        :data="dialogFormData"
        :type="2"
        edit-url="designEdit"
        :after-submit="afterSubmit"
        :btn-click="btnClick"
      />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { nextTick, reactive, ref } from 'vue'
  const router = useRouter()
  const dialog = reactive({
    visible: false
  })
  const formEl = ref()
  const tableListEl = ref()
  const tableData = ref({
    columns: [
      { label: '勾选', type: 'selection' },
      { prop: 'id', label: 'ID', width: '60px' },
      { prop: 'name', label: '表单名称', width: '150px' },
      {
        prop: 'source',
        label: '数据源名称',
        width: '150px',
        render: 'text',
        replaceValue: 'source',
        config: {}
      },
      {
        prop: 'category',
        label: '分类',
        config: {},
        render: 'tag',
        replaceValue: 'sys-form'
      },
      {
        prop: 'status',
        label: '状态',
        render: 'switch',
        config: {
          inlinePrompt: true,
          activeText: '启用',
          inactiveText: '禁用',
          activeValue: '1',
          inactiveValue: '0'
        },
        renderFormatter: (val: any) => {
          return val && val.toString()
        }
      },
      {
        prop: 'creatUserId',
        label: '创建人',
        render: 'text',
        replaceValue: 'creatUser',
        config: {}
      },
      {
        prop: 'updateDate',
        label: '更新时间',
        width: 200,
        config: {},
        timeFormat: '{yyyy}-{mm}-{dd}'
      },
      {
        label: '操作',
        prop: 'control',
        width: '320px',
        fixed: 'right',
        render: 'buttons',
        buttons: [
          {
            label: '设置',
            type: 'primary',
            click: (row: any) => {
              dialog.visible = true
              nextTick(() => {
                formEl.value.setValue({
                  name: row.name,
                  id: row.id,
                  category: row.category,
                  status: row.status
                })
              })
            }
          },
          {
            label: '编辑',
            key: 'edit',
            click: (row: any) => {
              // 跳转到表单设计编辑页
              toFormDesign(row)
            }
          },
          {
            label: '删除',
            key: 'del'
          },
          {
            label: '一键创建列表',
            type: 'primary',
            click: (row: any) => {
              router.push({ path: '/design/list', query: { form: row.id } })
            }
          }
        ]
      }
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
        formItem: {
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
        formItem: {
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
          optionsFun: 'sys-form'
        },
        name: 'category',
        formItem: {
          label: '分类'
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
          modelValue: ''
        },
        config: {},
        name: 'name',
        formItem: {
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
          optionsFun: 'sys-form'
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
    config: { submitCancel: true }
  })
  const afterSubmit = (type: string) => {
    if (type === 'success') {
      dialog.visible = false
      tableListEl.value.getListData() // 重新拉数据
    }
  }
  const btnClick = (type: string) => {
    if (type === 'reset') {
      dialog.visible = false
    }
  }
</script>
