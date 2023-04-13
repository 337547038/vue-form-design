<template>
  <div>
    <ak-list
      ref="tableListEl"
      requestUrl="sourceList"
      deleteUrl="sourceDelete"
      :searchData="searchData"
      :tableData="tableData"
    />
    <el-dialog
      v-model="dialog.visible"
      :title="dialog.title"
      width="800px"
      destroy-on-close
    >
      <ak-form
        ref="formEl"
        :formData="formData"
        :type="dialog.type"
        addUrl="sourceCreat"
        editUrl="sourceEdit"
        requestUrl="sourceById"
        :beforeSubmit="beforeSubmit"
        :afterSubmit="afterSubmit"
        @btn-click="cancelClick"
      />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { ref, reactive, nextTick } from 'vue'
  import { ElMessage } from 'element-plus'
  const router = useRouter()
  const tableListEl = ref()
  const formEl = ref()
  const dialog = reactive({
    visible: false,
    title: '',
    type: 1,
    id: ''
  })
  const tableData = ref({
    columns: [
      { label: '勾选', type: 'selection' },
      { prop: 'id', label: '编号' },
      { prop: 'name', label: '名称', width: 150 },
      { prop: 'tableName', label: '数据表名', width: 150 },
      {
        prop: 'category',
        label: '分类',
        config: {
          tagList: {
            0: 'success'
          },
          dictKey: 'source' // 匹配字典
        }
      },
      {
        prop: 'status',
        label: '状态',
        config: {
          tagList: {
            0: 'info',
            1: 'success'
          },
          dictKey: 'status'
        }
      },
      { prop: 'creatName', label: '创建人' },
      {
        prop: 'updateDate',
        label: '修改时间',
        config: { formatter: '{y}-{m}-{d} {h}:{i}:{s}' },
        width: 170
      },
      { label: '操作', prop: '__control', width: '160px' }
    ],
    controlBtn: [
      {
        label: '新增',
        type: 'primary',
        size: 'small',
        click: () => {
          dialog.visible = true
          dialog.title = '创建数据源'
          dialog.type = 1
          dialog.id = ''
        }
      },
      { label: '删除', key: 'del', size: 'small' }
    ],
    operateBtn: [
      {
        label: '编辑',
        click: (row: any) => {
          dialog.visible = true
          dialog.title = '修改数据源'
          dialog.type = 2
          dialog.id = row.id
          nextTick(() => {
            formEl.value.getData({ id: row.id })
          })
        }
      },
      { label: '删除', key: 'del' },
      {
        label: '创建表单',
        click: (row: any) => {
          router.push({ path: '/design/form', query: { source: row.id } })
        }
      }
    ],
    config: {
      expand: true
    }
  })
  // 筛选表单
  const searchData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入名称'
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
          placeholder: '请输入数据库表名'
        },
        config: {},
        name: 'tableName',
        item: {
          label: '数据表名'
        }
      },
      {
        type: 'button',
        control: {
          label: '查询',
          type: 'primary',
          key: 'submit'
        },
        config: {},
        name: ''
      },
      {
        type: 'button',
        config: {},
        name: '',
        control: {
          label: '清空',
          key: 'reset'
        }
      }
    ],
    form: {
      size: 'small'
    }
  })
  const formData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入数据源名称'
        },
        config: {},
        name: 'name',
        item: {
          label: '名称'
        },
        customRules: [
          {
            type: 'required',
            message: '请输入数据源名称',
            trigger: 'blur'
          }
        ]
      },
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入数据表名'
        },
        config: {
          editDisabled: true
        },
        name: 'tableName',
        item: {
          label: '数据表名'
        },
        customRules: [
          {
            type: 'required',
            message: '请输入创建生成的数据表名',
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
          optionsFun: 'source' // 使用字典选项，字典key为source
        },
        name: 'category',
        item: {
          label: '分类'
        }
      },
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '数据库表注释'
        },
        config: {
          editDisabled: true
        },
        name: 'remark',
        item: {
          label: '表注释'
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
        name: 'status',
        item: {
          label: '状态'
        }
      },
      {
        type: 'title',
        control: {
          modelValue: '数据库表字段'
        },
        config: {
          span: 24
        },
        name: 'title'
      },
      {
        type: 'table',
        list: [
          {
            type: 'input',
            control: {
              modelValue: '',
              size: 'small',
              placeholder: '中文标题名称'
            },
            config: {},
            name: 'label',
            item: {
              label: '标题'
            }
          },
          {
            type: 'input',
            control: {
              modelValue: '',
              size: 'small'
            },
            config: {},
            name: 'name',
            item: {
              label: '表名字'
            },
            customRules: [
              {
                type: 'required',
                message: '名字不能为空',
                trigger: 'blur'
              },
              {
                type: 'numberLetter',
                message: '只能为字母数字',
                trigger: 'blur'
              }
            ]
          },
          {
            type: 'select',
            control: {
              modelValue: '',
              appendToBody: true,
              size: 'small'
            },
            options: [
              {
                label: 'INT',
                value: 'INT'
              },
              {
                label: 'VARCHAR',
                value: 'VARCHAR'
              },
              {
                label: 'TEXT',
                value: 'TEXT'
              },
              {
                label: 'DATETIME',
                value: 'DATETIME'
              },
              {
                label: 'FLOAT',
                value: 'FLOAT'
              },
              {
                label: 'BOOLEAN',
                value: 'BOOLEAN'
              }
            ],
            config: {
              optionsType: 0
            },
            name: 'type',
            item: {
              label: '类型'
            },
            customRules: [
              {
                type: 'required',
                message: '类型不能为空',
                trigger: 'change'
              }
            ]
          },
          {
            type: 'input',
            control: {
              modelValue: '',
              size: 'small'
            },
            config: {},
            name: 'length',
            item: {
              label: '长度/值'
            }
          },
          {
            type: 'input',
            control: {
              modelValue: '',
              size: 'small'
            },
            config: {},
            name: 'default',
            item: {
              label: '默认'
            }
          },
          {
            type: 'switch',
            control: {
              modelValue: false,
              size: 'small'
            },
            config: {},
            name: 'empty',
            item: {
              label: '空'
            }
          },
          {
            type: 'input',
            control: {
              modelValue: '',
              size: 'small'
            },
            config: {},
            name: 'remark',
            item: {
              label: '注释'
            }
          },
          {
            type: 'switch',
            control: {
              modelValue: true,
              size: 'small'
            },
            config: {},
            name: 'enterable',
            item: {
              label: '可录入'
            }
          }
        ],
        tableData: [],
        control: {
          border: true
        },
        config: {
          editDisabled: true,
          addBtnText: '添加一行',
          delBtnText: '删除',
          span: 24
        },
        name: 'tableData'
      },
      {
        type: 'txt',
        control: {
          modelValue:
            '提示：默认会添加id自增主键；可录入表示要在表单里作入录入字段，如更新时间这类字段一般为不可录入，其他字段对应数据库字段'
        },
        config: { span: 24 }
      },
      {
        type: 'div',
        control: {},
        config: {
          span: 24,
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
      labelWidth: '80px',
      class: 'form-row-2',
      size: 'default',
      name: 'source'
    },
    config: {
      addUrl: 'sourceCreat',
      editUrl: 'sourceEdit',
      requestUrl: 'sourceById'
    }
  })
  // 提交表单前校验
  const beforeSubmit = (params: any) => {
    if (dialog.type === 1) {
      if (!params.tableData.length) {
        ElMessage.error('数据库表字段内容不能为空')
        return false
      }
      let errorTip: string[] = []
      params.tableData.forEach((item: any) => {
        if (['INT', 'VARCHAR'].includes(item.type) && !item.length) {
          errorTip.push(`名字列${item.name}的长度值不能为空`)
        }
      })
      if (errorTip.length) {
        ElMessage.error(errorTip.join(','))
        return false
      }
    }
    if (dialog.type === 2) {
      // 添加编辑提交参数
      params.id = dialog.id
    }
    return params
  }
  // 提交完成事件
  const afterSubmit = (type: string) => {
    if (type === 'success') {
      dialog.visible = false
      tableListEl.value.getListData()
    }
  }
  // 添加编辑窗口取消
  const cancelClick = (type?: string) => {
    if (type === 'reset') {
      dialog.visible = false
    }
  }
</script>
