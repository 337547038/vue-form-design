<template>
  <div>
    <ak-list
      ref="tableListEl"
      :api-key="{list:'sourceList',del:'sourceDelete'}"
      :search-data="searchData"
      :data="tableData"
    />
    <el-dialog
      v-model="dialog.visible"
      :title="dialog.title"
      width="1000px"
      destroy-on-close
      :before-close="beforeClose"
    >
      <ak-form
        ref="formEl"
        :data="formData"
        :operate-type="dialog.type"
        :submit-url="dialog.type==='add'?'sourceCreat':'sourceEdit'"
        request-url="sourceById"
        :before="beforeSubmit"
        :after="afterFetchSubmit"
        :params="{ id: dialog.id }"
        @btn-click="cancelClick"
      >
        <child-table
          v-model="childTableData"
          :type="dialog.type"
        />
      </ak-form>
      <div class="tips">
        提示：默认会添加id自增主键；其中标题作为表单的label值，组件类型仅用于一健创建表单；模糊搜索用于条件查询时
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
  import { useRouter, useRoute } from 'vue-router'
  import { ref, reactive, nextTick, onMounted } from 'vue'
  import { ElMessage } from 'element-plus'
  import childTable from './components/table.vue'

  const route = useRoute()
  const router = useRouter()
  const tableListEl = ref()
  const formEl = ref()
  const childTableData = ref([])
  const dialog = reactive({
    visible: false,
    title: '',
    type: 'add',
    id: ''
  })
  const openEdit = (id: number) => {
    dialog.visible = true
    dialog.title = '修改数据源'
    dialog.type = 'edit'
    dialog.id = id
    nextTick(() => {
      formEl.value.getData({ id: id })
    })
  }
  const tableData = ref({
    columns: [
      { label: '勾选', type: 'selection', prop: 'selection' },
      { prop: 'id', label: '编号', width: 80 },
      { prop: 'name', label: '名称', width: 150 },
      { prop: 'tableName', label: '数据表名', width: 150 },
      {
        prop: 'category',
        label: '分类',
        render: 'tag',
        replaceValue: 'sys-source',
        custom: { 1: 'success', 2: 'danger' },
        config: {}
      },
      {
        prop: 'status',
        label: '状态',
        render: 'tag',
        replaceValue: 'sys-status',
        custom: { 0: 'info', 1: 'success' }
      },
      { prop: 'creatUser', label: '创建人' },
      {
        prop: 'updateDate',
        label: '修改时间',
        render: 'datetime',
        config: {},
        width: 170
      },
      {
        label: '操作', prop: '__control', width: '250px', render: 'buttons', buttons: [
          {
            type: 'primary',
            label: '编辑',
            click: (row: any) => {
              openEdit(row.id)
            },
            attr: {
              text: true
            }
          },
          {
            label: '删除', key: 'del', type: 'danger', attr: {
              text: true
            }
          },
          {
            type: 'primary',
            label: '一键创建表单',
            click: (row: any) => {
              router.push({ path: '/design/form', query: { source: row.id } })
            },
            attr: {
              text: true
            }
          }
        ]
      },
    ],
    controlBtn: [
      {
        label: '新增',
        type: 'primary',
        click: () => {
          dialog.visible = true
          dialog.title = '创建数据源'
          dialog.type = 'add'
          dialog.id = ''
        }
      },
      { label: '删除', key: 'del', type: 'danger' }
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
    },
    form: {}
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
          modelValue: ''
        },
        options: [],
        config: {
          // transformData: 'string',
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
      }
    ],
    form: {
      labelWidth: '100px',
      class: 'form-row-2',
      size: 'default',
      name: 'source'
    },
    config: {
      submitCancel: true
    }
  })
  const afterFetchSubmit = (res: any, success: boolean, type: string) => {
    if (type === 'fetch') {
      const tableData = JSON.parse(res.tableData)
      // 如果有isNew标识则删除
      tableData.forEach((item: any) => {
        if (item.isNew) {
          delete item.isNew
        }
      })
      childTableData.value = tableData
      return res
    } else {
      // 提交完成事件
      if (success) {
        dialog.visible = false
        tableListEl.value.getListData()
        beforeClose()
      }
    }
  }
  // 提交表单前校验
  const beforeSubmit = (params: any, type: string) => {
    if (type === 'submit') {
      if (dialog.type === 'add') {
        if (!childTableData.value.length) {
          ElMessage.error('数据库表字段内容不能为空')
          return false
        }
      }
      params.tableData = JSON.stringify(childTableData.value)
      return params
    }
  }
  // 添加编辑窗口取消
  const cancelClick = (type?: string) => {
    if (type === 'reset') {
      dialog.visible = false
      beforeClose()
    }
  }
  // 关闭时清空
  const beforeClose = (done?: any) => {
    childTableData.value = []
    if (done) {
      done()
    }
  }
  onMounted(() => {
    if (route.query.source) {
      openEdit(route.query.source)
    }
  })
</script>
