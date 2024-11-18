<template>
  <div>
    <ak-list
      ref="tableListEl"
      :api-key="{list:'dictList',del:'dictDelete'}"
      :search-data="searchData"
      :data="tableData"
    />
    <el-dialog
      v-model="dialog.visible"
      :title="dialog.type==='add'?'添加字典':'修改'"
      width="400px"
      destroy-on-close
    >
      <ak-form
        ref="formEl"
        :data="dialog.formData"
        :operate-type="dialog.type"
        :submit-url="dialog.type==='add'?'dictSave':'dictEdit'"
        :before="beforeSubmit"
        :after="afterSubmit"
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
        :data="dialog2.formData"
        operate-type="edit"
        submit-url="dictEdit"
        :before="beforeSubmit2"
        :after="afterSubmit"
        @btn-click="cancelClick"
      />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, nextTick } from 'vue'

  const tableListEl = ref()
  const formEl = ref()
  const formEl2 = ref()
  const dialog = reactive({
    visible: false,
    type: 'add',
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
          formItem: {
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
            disabledEdit: true
          },
          name: 'type',
          formItem: {
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
          formItem: {
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
          formItem: {
            label: '说明描述'
          }
        }
      ],
      form: {
        labelWidth: '',
        size: 'default'
      },
      config: { submitCancel: true }
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
          formItem: {
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
              formItem: {
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
              formItem: {
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
        }
      ],
      form: {
        labelWidth: '',
        size: 'default'
      },
      config: {
        transformData: true,
        submitCancel: true,
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
        render: 'tag',
        replaceValue: 'sys-status',
        custom: {
          0: 'info',
          1: 'success'
        },
        config: {
        }
      },
      {
        label: '更新时间',
        prop: 'updateTime',
        width: 170,
        render: 'datetime',
        config: {}
      },
      { label: '操作', prop: '__control', width: 200, render: 'buttons', buttons: [
          {
            label: '设置',
            type: 'primary',
            click: (row: any) => {
              dialog2.visible = true
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
            type: 'primary',
            click: (row: any) => {
              dialog.visible = true
              dialog.type = 'edit'
              dialog.editId = row.id
              nextTick(() => {
                formEl.value.setValue(row, true)
              })
            }
          },
          {
            label: '删除',
            key: 'del',
            icon: 'delete',
            visible: '$.isSystem!==1'
          }
        ] }
    ],
    controlBtn: [
      {
        label: '新增',
        type: 'primary',
        size: 'small',
        icon: 'plus',
        click: () => {
          dialog.visible = true
          dialog.type = 'add'
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
        formItem: {
          label: '字典名称'
        }
      },
      {
        type: 'select',
        control: {
          modelValue: '',
          appendToBody: true,
          style: { width: '100px' }
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
        name: 'status',
        config: {
          optionsType: 0
          // transformData: 'string'
        },
        formItem: {
          label: '状态'
        }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default'
    },
    config: { submitCancel: true }
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
    console.log('btn click')
  }
</script>
