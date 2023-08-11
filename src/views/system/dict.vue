<template>
  <div>
    <ak-list
      ref="tableListEl"
      requestUrl="dictList"
      deleteUrl="dictDelete"
      :searchData="searchData"
      :tableData="tableData"
    />
    <el-dialog
      v-model="dialog.visible"
      title="添加字典"
      width="400px"
      destroy-on-close
    >
      <ak-form
        ref="formEl"
        :formData="dialog.formData"
        :type="dialog.type"
        addUrl="dictSave"
        editUrl="dictEdit"
        :beforeSubmit="beforeSubmit"
        :afterSubmit="afterSubmit"
        @btn-click="cancelClick"
      />
    </el-dialog>
    <el-dialog
      v-model="dialog2.visible"
      title="设置字典数据"
      width="400px"
      destroy-on-close
    >
      <ak-form
        ref="formEl2"
        :formData="dialog2.formData"
        :type="2"
        editUrl="dictEdit"
        :beforeSubmit="beforeSubmit2"
        :afterSubmit="afterSubmit"
        @btn-click="cancelClick"
      />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, nextTick } from 'vue'
  // import { useLayoutStore } from '@/store/layout'
  // const layoutStore = useLayoutStore()
  // layoutStore.changeBreadcrumb([{ label: '系统管理' }, { label: '字典管理' }])
  const tableListEl = ref()
  const formEl = ref()
  const formEl2 = ref()
  const dialog = reactive({
    visible: false,
    type: 1,
    editId: '',
    formData: {
      list: [
        {
          type: 'input',
          control: {
            modelValue: '',
            placeholder: '请输入字典名称'
          },
          config: {},
          name: 'name',
          item: {
            label: '字典名称'
          },
          customRules: [
            {
              type: 'required',
              message: '请输入字典名称',
              trigger: 'blur'
            }
          ]
        },
        {
          type: 'input',
          control: {
            modelValue: '',
            placeholder: '请输入字典标识'
          },
          config: {
            editDisabled: true
          },
          name: 'type',
          item: {
            label: '字典标识'
          },
          customRules: [
            {
              type: 'required',
              message: '请输入字典标识',
              trigger: 'blur'
            }
          ]
        },
        {
          type: 'radio',
          control: {
            modelValue: 1
          },
          options: [
            {
              label: '正常',
              value: 1
            },
            {
              label: '停用',
              value: 0
            }
          ],
          config: {
            optionsType: 0
          },
          name: 'status',
          item: {
            label: '状态'
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
            label: '说明描述'
          }
        },
        {
          type: 'button',
          control: {
            label: '保存',
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
      ],
      form: {
        labelWidth: '',
        size: 'default'
      },
      config: {}
    }
  })
  const dialog2 = reactive({
    visible: false,
    editId: '',
    formData: {
      list: [
        {
          type: 'input',
          control: {
            modelValue: '',
            disabled: true,
            placeholder: '请输入字典名称'
          },
          config: {},
          name: 'name',
          item: {
            label: '字典名称'
          }
        },
        {
          type: 'flex',
          list: [
            {
              type: 'input',
              control: {
                modelValue: '',
                placeholder: '显示的标签名称'
              },
              config: {},
              name: 'label',
              item: {
                label: '字典标签'
              }
            },
            {
              type: 'input',
              control: {
                modelValue: ''
              },
              config: {},
              name: 'value',
              item: {
                label: '键值'
              }
            }
          ],
          tableData: [],
          control: {},
          config: {
            addBtnText: '添加一行',
            delBtnText: '删除'
          },
          name: 'children'
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
                label: '保存',
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
        labelWidth: '',
        size: 'default'
      },
      config: {
        style:
          '.flex-item{display:flex}\n.flex-item .el-form-item{ margin-right:10px}'
      }
    }
  })
  const tableData = ref({
    columns: [
      { label: '多选', type: 'selection' },
      { label: '序号', type: 'index', width: '70px' },
      { label: '字典名称', prop: 'name' },
      { label: '字典标识', prop: 'type' },
      {
        label: '状态',
        prop: 'status',
        config: {
          tagList: {
            0: 'info',
            1: 'success'
          },
          dictKey: 'status'
        }
      },
      // { label: '说明', prop: 'remark' },
      {
        label: '更新时间',
        prop: 'updateTime',
        width: 170,
        config: { formatter: '{y}-{m}-{d} {h}:{i}:{s}' }
      },
      { label: '操作', prop: '__control', width: 180 }
    ],
    controlBtn: [
      {
        label: '新增',
        type: 'primary',
        size: 'small',
        icon: 'plus',
        click: () => {
          dialog.visible = true
          dialog.type = 1
          dialog.editId = ''
          nextTick(() => {
            // formEl.value.resetFields()
          })
        }
      },
      {
        label: '批量删除',
        type: 'danger',
        size: 'small',
        icon: 'delete',
        key: 'del'
      }
    ],
    operateBtn: [
      {
        label: '设置',
        click: (row: any) => {
          dialog2.visible = true
          dialog2.type = 1
          dialog2.editId = row.id
          nextTick(() => {
            formEl2.value.setValue({
              name: row.name,
              children: row.children ? JSON.parse(row.children) : []
            })
          })
        }
      },
      {
        label: '编辑',
        icon: 'edit',
        click: (row: any) => {
          dialog.visible = true
          dialog.type = 2
          dialog.editId = row.id
          nextTick(() => {
            formEl.value.setValue(row)
          })
        }
      },
      {
        label: '删除',
        key: 'del',
        icon: 'delete',
        visible: '$.isSystem!==1'
      }
    ],
    config: {
      expand: true,
      searchJump: true
    }
  })
  const searchData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入字典名称'
        },
        config: {},
        name: 'name',
        item: {
          label: '字典名称'
        }
      },
      {
        type: 'select',
        control: {
          modelValue: '',
          appendToBody: true
        },
        options: [
          {
            label: '正常',
            value: '1'
          },
          {
            label: '停用',
            value: '0'
          }
        ],
        config: {
          optionsType: 0
        },
        item: {
          label: '状态'
        }
      },
      {
        type: 'button',
        control: {
          label: '查询',
          type: 'primary',
          key: 'submit',
          icon: 'search'
        },
        config: {}
      },
      {
        type: 'button',
        control: {
          label: '清空',
          key: 'reset'
        },
        config: {}
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default'
    },
    config: {}
  }) // 筛选表单
  const beforeSubmit = (params: any) => {
    params.id = dialog.editId // 添加编辑id
    return params
  }
  const beforeSubmit2 = (params: any) => {
    params.id = dialog2.editId // 添加编辑id
    return params
  }
  const afterSubmit = () => {
    dialog.visible = false
    dialog2.visible = false
    tableListEl.value.getListData() // 重新拉数据
  }
  const cancelClick = (type: string) => {
    if (type === 'reset') {
      dialog.visible = false
      dialog2.visible = false
    }
  }
</script>
