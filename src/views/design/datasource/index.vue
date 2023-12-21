<template>
  <div>
    <ak-list
      ref="tableListEl"
      request-url="sourceList"
      delete-url="sourceDelete"
      :search-data="searchData"
      :data="tableData"
    />
    <el-dialog
      v-model="dialog.visible"
      :title="dialog.title"
      width="800px"
      destroy-on-close
    >
      <ak-form
        ref="formEl"
        :data="formData"
        :type="dialog.type"
        submit-url="sourceCreat"
        edit-url="sourceEdit"
        request-url="sourceById"
        :before-submit="beforeSubmit"
        :after-submit="afterSubmit"
        :after-response="afterResponse"
        :params="{ id: dialog.id }"
        @btn-click="cancelClick"
      />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
  import { useRouter, useRoute } from 'vue-router'
  import { ref, reactive, nextTick, onMounted } from 'vue'
  import { ElMessage } from 'element-plus'

  const route = useRoute()
  const router = useRouter()
  const tableListEl = ref()
  const formEl = ref()
  const dialog = reactive({
    visible: false,
    title: '',
    type: 1,
    id: ''
  })
  const openEdit = (id: number) => {
    dialog.visible = true
    dialog.title = '修改数据源'
    dialog.type = 2
    dialog.id = id
    nextTick(() => {
      formEl.value.getData({ id: id })
    })
  }
  const tableData = ref({
    columns: [
      { label: '勾选', type: 'selection', prop: 'selection' },
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
          dictKey: 'sys-source' // 匹配字典
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
          dictKey: 'sys-status'
        }
      },
      { prop: 'creatUser', label: '创建人' },
      {
        prop: 'updateDate',
        label: '修改时间',
        config: { formatter: '{y}-{m}-{d} {h}:{i}:{s}' },
        width: 170
      },
      { label: '操作', prop: '__control', width: '200px' }
    ],
    controlBtn: [
      {
        label: '新增',
        type: 'primary',
        click: () => {
          dialog.visible = true
          dialog.title = '创建数据源'
          dialog.type = 1
          dialog.id = ''
        }
      },
      { label: '删除', key: 'del', type: 'danger' }
    ],
    operateBtn: [
      {
        label: '编辑',
        click: (row: any) => {
          openEdit(row.id)
        }
      },
      { label: '删除', key: 'del' },
      {
        label: '一键创建表单',
        click: (row: any) => {
          router.push({ path: '/design/form', query: { source: row.id } })
        }
      }
    ],
    config: {
      expand: true,
      searchJump: true
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
        name: 'name',
        formItem: {
          label: '名称'
        }
      },
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入数据库表名'
        },
        name: 'tableName',
        formItem: {
          label: '数据表名'
        }
      }
    ],
    config: {
      submitCancel: true
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
        formItem: {
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
          disabledEdit: true
        },
        name: 'tableName',
        formItem: {
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
          optionsFun: 'sys-source' // 使用字典选项，字典key为source
        },
        name: 'category',
        formItem: {
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
          disabledEdit: true
        },
        name: 'remark',
        formItem: {
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
        formItem: {
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
            config: { disabledEdit: true },
            name: 'label',
            formItem: {
              label: '标题'
            }
          },
          {
            type: 'input',
            control: {
              modelValue: '',
              size: 'small',
              placeholder: '数据库字段名称'
            },
            config: { disabledEdit: true },
            name: 'name',
            formItem: {
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
              optionsType: 0,
              disabledEdit: true
            },
            name: 'type',
            formItem: {
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
            config: { disabledEdit: true },
            name: 'length',
            formItem: {
              label: '长度/值'
            }
          },
          {
            type: 'input',
            control: {
              modelValue: '',
              size: 'small'
            },
            config: { disabledEdit: true },
            name: 'default',
            formItem: {
              label: '默认'
            }
          },
          {
            type: 'switch',
            control: {
              modelValue: false,
              size: 'small'
            },
            config: { disabledEdit: true },
            name: 'empty',
            formItem: {
              label: '空'
            }
          },
          {
            type: 'input',
            control: {
              modelValue: '',
              size: 'small'
            },
            config: {
              disabledEdit: true
            },
            name: 'remark',
            formItem: {
              label: '注释'
            }
          },
          {
            type: 'switch',
            control: {
              modelValue: true,
              size: 'small'
            },
            config: {
              disabledEdit: true
            },
            name: 'enterable',
            formItem: {
              label: '可录入'
            }
          }
        ],
        tableData: [],
        control: {
          border: true
        },
        config: {
          disabledEdit: false,
          addBtnText: '添加一行',
          delBtnText: '删除',
          span: 24
        },
        name: 'tableData'
      },
      {
        type: 'txt',
        control: {
          modelValue: '提示：默认会添加id自增主键'
        },
        config: { span: 24 }
      }
    ],
    form: {
      labelWidth: '100px',
      class: 'form-row-2',
      size: 'default',
      name: 'source'
    },
    config: {
      submitCancel: true,
      submitUrl: 'sourceCreat',
      editUrl: 'sourceEdit',
      requestUrl: 'sourceById'
    }
  })
  const afterResponse = (type: string, params: any) => {
    console.log(params)
    params.tableData = JSON.parse(params.tableData)
    return params
  }
  // 提交表单前校验
  const beforeSubmit = (params: any) => {
    if (dialog.type === 1) {
      console.log(params)
      const tableData = JSON.parse(params.tableData)
      if (!tableData?.length) {
        ElMessage.error('数据库表字段内容不能为空')
        return false
      }
      const errorTip: string[] = []
      const temp: string[] = []
      tableData.forEach((item: any) => {
        if (['INT', 'VARCHAR'].includes(item.type) && !item.length) {
          errorTip.push(`名字列${item.name}的长度值不能为空`)
        }
        if (temp.includes(item.name)) {
          errorTip.push(`表名字${item.name}有重复`)
        } else {
          temp.push(item.name)
        }
      })
      if (errorTip.length) {
        ElMessage.error(errorTip[0])
        return false
      }
    }
    //if (dialog.type === 2) {
    // 添加编辑提交参数
    //params.id = dialog.id
    //}
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
  onMounted(() => {
    if (route.query.source) {
      openEdit(route.query.source)
    }
  })
</script>
