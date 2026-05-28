<template>
  <div>
    <ak-list
      ref="tableListEl"
      :api-key="{list:'dictList',del:'dictDelete'}"
      :search-data="searchData"
      :data="tableData"
      @btn-click="listBtnClick"
    >
      <ak-form
        ref="formRef"
        :data="dialog.formData"
        :operate-type="dialog.type"
        :submit-url="dialog.type==='add'?'dictSave':'dictEdit'"
        :before="beforeSubmit"
        :after="afterSubmit"
        @btn-click="cancelClick"
      />
    </ak-list>
  </div>
</template>

<script setup lang="ts">
  import {ref, reactive, provide} from 'vue'
  import {useLayoutStore} from '@/store/layout'
  import {string2json} from "@/utils/design";
  import {useListDialogForm} from '@/store/list'

  const store = useLayoutStore()
  const formStore = useListDialogForm('dict')()
  provide('akListDialogForm', formStore)

  const tableListEl = ref()
  const formRef = ref()
  const dialog = reactive({
    type: 'add',
    formData: {
      list: [
        {
          type: 'input',
          control: {
            modelValue: '',
            placeholder: '请输入字典名称'
          },
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
          disabledEdit: true,
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
          optionsType: 0,
          name: 'status',
          formItem: {
            label: '状态'
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
              name: 'value',
              formItem: {
                label: '键值'
              }
            }
          ],
          tableData: [],
          control: {},
          addBtnText: '添加一行',
          delBtnText: '删除',
          name: 'children'
        },
        {
          type: 'textarea',
          control: {
            modelValue: ''
          },
          name: 'remark',
          formItem: {
            label: '说明描述'
          }
        }
      ],
      config: {
        transformData: true,
        submitCancel: true,
        style: '.flex-item{display:flex}\n.flex-item .el-form-item{ margin-right:10px;margin-bottom:10px;}'
      }
    },
    closeFn: ''
  })

  const listBtnClick = (key: string, row: any, close: () => void) => {
    dialog.closeFn = close
    dialog.type = key
    if (key === 'edit') {
      const newRow = {...row, children: string2json(row.children)}
      formRef.value.setValue(newRow)
    }
    formStore.setTitle(key === 'add' ? '新增字典' : '编辑字典')
  }
  const tableData = ref({
    columns: [
      {label: '多选', type: 'selection'},
      {label: '序号', type: 'index', width: '70px'},
      {label: '字典名称', prop: 'name'},
      {label: '字典标识', prop: 'type'},
      {
        label: '状态',
        prop: 'status',
        render: 'tag',
        replaceValue: 'sys-status',
        custom: {
          0: 'info',
          1: 'success'
        },
        config: {}
      },
      {
        label: '更新时间',
        prop: 'updateTime',
        width: 170,
        render: 'datetime',
        config: {}
      },
      {
        label: '操作', prop: '__control', width: 200, render: 'buttons', buttons: [
          {
            label: '编辑',
            icon: 'edit',
            type: 'primary',
            key: 'edit'
          },
          {
            label: '删除',
            key: 'del',
            icon: 'delete',
            display: (row: any) => {
              return row.isSystem !== 1
            }
          }
        ]
      }
    ],
    config: {
      controlBtn: [
        {
          label: '新增',
          type: 'primary',
          icon: 'plus',
          key: 'add'
        },
        {
          label: '批量删除',
          type: 'danger',
          icon: 'delete',
          key: 'del'
        }
      ],
      openType: 'dialog',
      dialogWidth: '400px',
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
        name: 'name',
        formItem: {
          label: '字典名称'
        }
      },
      {
        type: 'select',
        control: {
          modelValue: '',
          style: {width: '100px'}
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
        optionsType: 0,
        formItem: {
          label: '状态'
        }
      }
    ],
    config: {submitCancel: true}
  }) // 筛选表单
  const beforeSubmit = (params: any) => {
    return params
  }
  const afterSubmit = () => {
    //dialog.closeFn && dialog.closeFn()
    formStore.setVisible(false)
    tableListEl.value.getListData() // 重新拉数据
    store.getDict(true)// 更新设置时，同时更新保存在本地的dict
  }
  const cancelClick = (type: string) => {
    if (type === 'reset') {
      formStore.setVisible(false)
      //dialog.closeFn && dialog.closeFn()
    }
  }
</script>
