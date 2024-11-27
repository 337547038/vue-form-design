<template>
  <div>
    <ak-list
      ref="tableListEl"
      :api-key="{ list: 'designList', del: 'designDelete' }"
      :search-data="searchData"
      :data="tableData"
      :query="{ type: 4 }"
    />
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
  import AkForm from '@/components/form/index.vue'

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
      { prop: 'name', label: '名称', width: '150px' },
      {
        prop: 'category',
        label: '分类',
        render: 'tag',
        replaceValue: 'sys-screen'
      },
      {
        prop: 'status',
        label: '状态',
        replaceValue: 'sys-status',
        render: 'tag',
        custom: {
          0: 'info',
          1: 'success'
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
        prop: 'creatDate',
        label: '创建时间',
        width: 200,
        render: 'datetime',
        config: {}
      },
      {
        label: '操作', prop: 'control', width: '240px', fixed: 'right', render: 'buttons', buttons: [
          {
            label: '编辑',
            type: 'primary',
            click: (row: any) => {
              // 跳转到表单设计编辑页
              toDesign(row)
            },
            attr: {
              text: true
            }
          },
          {
            label: '设置',
            type: 'primary',
            click: (row: any) => {
              dialog.visible = true
              nextTick(() => {
                formEl.value.setValue(row)
              })
            },
            attr: {
              text: true
            }
          },
          {
            label: '查看',
            type: 'primary',
            click: (row: any) => {
              const { href } = router.resolve({
                path: '/design/screen/show/' + row.id
              })
              window.open(href)
            },
            attr: {
              text: true
            }
          },
          {
            label: '删除',
            key: 'del',
            type: 'danger',
            icon: '',
            attr: {
              text: true
            }
          }
        ]
      }
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
    config: {}
  })
  const toDesign = (row: any) => {
    router.push({
      path: '/design/screen',
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
        formItem: {
          label: '名称'
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
          label: '名称'
        }
      },
      {
        type: 'select',
        control: {
          modelValue: ''
        },
        options: [],
        config: {
          optionsType: 2,
          optionsFun: 'sys-screen'
        },
        name: 'category',
        formItem: {
          label: '分类'
        }
      },
      {
        type: 'select',
        control: {
          modelValue: ''
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
        formItem: {
          label: '权限角色'
        }
      },
      {
        type: 'select',
        control: {
          modelValue: ''
        },
        options: [],
        config: {
          optionsType: 2,
          // transformData: 'string',
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
    config: {
      source: '',
      submitCancel: true
    }
  })
  const afterSubmit = (res: any, success: boolean) => {
    if (success) {
      dialog.visible = false
      tableListEl.value.getListData() // 重新拉数据
    }
  }
  const cancelClick = (type: string) => {
    if (type === 'reset') {
      dialog.visible = false
    }
  }
</script>
