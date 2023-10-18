<template>
  <div>
    <ak-list
      v-if="refreshTable"
      ref="tableListEl"
      request-url="menuList"
      delete-url="menuDelete"
      :search-data="searchData"
      :data="tableData"
      :after-response="afterResponse"
      :dict="dict"
    >
      <template #name="{ row }">
        <i :class="row.icon"></i
        ><span style="padding-left: 5px">{{ row.name }}</span>
      </template>
    </ak-list>
    <el-dialog
      v-model="dialog.visible"
      :title="dialog.title"
      width="680px"
      destroy-on-close
    >
      <ak-form
        ref="formNameEl"
        :type="dialog.formType"
        :data="formData"
        submit-url="menuSave"
        edit-url="menuEdit"
        :before-submit="beforeSubmit"
        :after-submit="afterSubmit"
        @btn-click="btnClick"
        :dict="dict"
        @change="formValueChange"
      />
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
  import { nextTick, reactive, ref } from 'vue'
  import { flatToTree } from '@/utils/flatTree'
  const tableListEl = ref()
  const formNameEl = ref()
  const dict = {
    menuType: { 1: '菜单', 2: '按钮', 3: '设计内容' }
  }
  const refreshTable = ref(true)
  const searchData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入菜单名称'
        },
        name: 'name',
        formItem: {
          label: '菜单名称'
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
          optionsFun: 'sys-status'
        },
        name: 'status',
        formItem: {
          label: '状态'
        }
      }
    ],
    config: {
      submitCancel: true
    },
    form: {
      size: 'default'
    }
  })
  const tableData = ref({
    tableProps: {
      rowKey: 'id',
      defaultExpandAll: false
    },
    columns: [
      { label: '菜单名称', prop: 'name' },
      {
        label: '地址',
        prop: 'path'
      },
      {
        label: '排序',
        prop: 'sort',
        width: 60
      },
      {
        label: '类型',
        prop: 'type',
        width: 100,
        config: {
          dictKey: 'menuType',
          tagList: { 1: 'success', 2: 'info', 3: 'warning' }
        }
      },
      {
        label: '状态',
        prop: 'status',
        width: 70,
        config: { dictKey: 'sys-status', tagList: { 1: 'success', 2: 'info' } }
      },
      { label: '操作', prop: '__control', width: 140 }
    ],
    controlBtn: [
      {
        label: '新增',
        type: 'primary',
        icon: 'plus',
        click: () => {
          dialog.visible = true
          dialog.title = '新增菜单'
          dialog.formType = 1
        }
      },
      {
        label: '展开折叠',
        click: () => {
          tableData.value.tableProps.defaultExpandAll =
            !tableData.value.tableProps.defaultExpandAll
          refreshTable.value = false
          nextTick(() => {
            refreshTable.value = true
          })
        }
      }
    ],
    operateBtn: [
      {
        label: '新增',
        click: (row: any) => {
          dialog.visible = true
          dialog.title = '新增菜单'
          dialog.formType = 1
          nextTick(() => {
            formNameEl.value.setValue({ parentId: row.id })
          })
        }
      },
      {
        label: '编辑',
        click: (row: any) => {
          // console.log(row)
          dialog.visible = true
          dialog.title = '编辑菜单'
          dialog.formType = 2
          dialog.editId = row.id
          nextTick(() => {
            formNameEl.value.setValue(row, true)
          })
        }
      },
      {
        label: '删除',
        key: 'del'
        //visible: '$.children?.length>0' // 一级不让删
      }
    ],
    config: {
      pageSize: 100,
      fixedBottomScroll: false
    }
  })
  // 表单
  const dialog = reactive({
    visible: false,
    title: '',
    formType: 1,
    editId: ''
  })
  const formData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: '',
          disabled: true,
          placeholder: '父级ID'
        },
        name: 'parentId',
        formItem: { label: '父级ID' }
      },
      {
        type: 'select',
        control: { modelValue: 1 },
        options: [],
        config: {
          optionsType: 2,
          optionsFun: 'menuType'
        },
        name: 'type',
        formItem: { label: '类型' }
      },
      {
        type: 'select',
        control: { modelValue: '' },
        options: [],
        config: {
          optionsType: 1,
          optionsFun: 'designList',
          method: 'post',
          label: 'name',
          value: 'id',
          query: { type: 2 },
          hidden: '$.type!==3'
        },
        name: 'contentList',
        formItem: { label: '内容列表' }
      },
      {
        type: 'input',
        control: { modelValue: '', placeholder: '请输入菜单名称' },
        config: {},
        name: 'name',
        formItem: { label: '菜单名称' },
        customRules: [
          { type: 'required', message: '菜单名称不能为空', trigger: 'blur' }
        ]
      },
      {
        type: 'input',
        control: { modelValue: '', placeholder: '请输入访问地址/类型标识' },
        config: {
          disabled: '$.type===3'
        },
        name: 'path',
        formItem: { label: '访问地址' }
      },
      {
        type: 'component',
        control: {
          modelValue: ''
        },
        config: {
          // componentName: markRaw(iconfont)
          componentName: 'diyIconfont'
        },
        name: 'icon',
        formItem: {
          label: 'icon图标'
        }
      },
      {
        type: 'inputNumber',
        control: { modelValue: 0, controlsPosition: 'right' },
        config: {},
        name: 'sort',
        formItem: { label: '排序' }
      },
      {
        type: 'radio',
        control: { modelValue: 1 },
        options: [],
        config: {
          optionsType: 2,
          optionsFun: 'sys-status'
        },
        name: 'status',
        formItem: { label: '状态' }
      },
      {
        type: 'textarea',
        control: {
          modelValue: ''
        },
        config: {
          span: 24
        },
        name: 'remark',
        formItem: {
          label: '备注'
        }
      }
    ],
    form: {
      class: 'form-row-2',
      labelWidth: '100px',
      size: 'default'
    },
    config: {
      submitCancel: true
    }
  })
  const beforeSubmit = (params: any) => {
    // 如编辑时添加参数
    if (dialog.formType === 2) {
      params.id = dialog.editId
    }
    delete params.contentList
    return params
  }
  // 表单提交完成事件
  const afterSubmit = (type: string) => {
    dialog.visible = false
    if (type === 'success') {
      // 操作成功才刷新列表数据
      tableListEl.value.getListData()
    }
  }
  // 取消按钮事件
  const btnClick = (type: string) => {
    if (type === 'reset') {
      dialog.visible = false
    }
  }

  const afterResponse = (result: any) => {
    result.list = flatToTree(result.list)
    return result
  }

  const formValueChange = ({
    key,
    label,
    model,
    value
  }: {
    key: string
    label: string
    model: any
    value: string
  }) => {
    if (key === 'contentList') {
      model.path = '/design/list/content/' + value
      model.name = label
    }
  }
</script>
