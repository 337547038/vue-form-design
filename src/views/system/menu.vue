<template>
  <div>
    <ak-list
      v-if="refreshTable"
      ref="tableListEl"
      :api-key="{list:'menuList',del:'menuDelete'}"
      :data="tableData"
      :after="afterFetch"
      :dict="dict"
    >
      <template #name="{ row }">
        <i :class="row.icon" /><span style="padding-left: 5px">{{ row.name }}</span>
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
        :operate-type="dialog.formType"
        :data="formData"
        :submit-url="dialog.formType==='add'?'menuSave':'menuEdit'"
        :before="beforeSubmit"
        :after="afterSubmit"
        :dict="dict"
        @btn-click="btnClick"
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
        render: 'tag',
        replaceValue: 'menuType',
        custom: { 1: 'success', 2: 'info', 3: 'warning' },
        config: {
        }
      },
      {
        label: '状态',
        prop: 'status',
        width: 70,
        render: 'tag',
        replaceValue: 'sys-status',
        custom: { 1: 'success', 2: 'info' },
        config: {}
      },
      { label: '操作', prop: '__control', width: 180, render: 'buttons', buttons: [
          {
            type: 'primary',
            label: '新增',
            click: (row: any) => {
              dialog.visible = true
              dialog.title = '新增菜单'
              dialog.formType = 'add'
              nextTick(() => {
                formNameEl.value.setValue({ parentId: row.id })
              })
            }
          },
          {
            label: '编辑',
            type: 'primary',
            click: (row: any) => {
              // console.log(row)
              dialog.visible = true
              dialog.title = '编辑菜单'
              dialog.formType = 'edit'
              dialog.editId = row.id
              nextTick(() => {
                formNameEl.value.setValue(row, true)
              })
            }
          },
          {
            label: '删除',
            key: 'del'
            // visible: '$.children?.length>0' // 一级不让删
          }
        ] }
    ],
    controlBtn: [
      {
        label: '新增',
        type: 'primary',
        icon: 'plus',
        click: () => {
          dialog.visible = true
          dialog.title = '新增菜单'
          dialog.formType = 'add'
        }
      },
      {
        label: '展开折叠',
        click: () => {
          tableData.value.tableProps.defaultExpandAll
              = !tableData.value.tableProps.defaultExpandAll
          refreshTable.value = false
          nextTick(() => {
            refreshTable.value = true
          })
        }
      }
    ],
    config: {
      pageSize: '100',
      sort: 'sort asc',
      fixedBottomScroll: false
    }
  })
  // 表单
  const dialog = reactive({
    visible: false,
    title: '',
    formType: 'add',
    editId: ''
  })
  const formData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: 0,
          disabled: true,
          placeholder: '父级ID'
        },
        name: 'parentId',
        formItem: { label: '父级ID' }
      },
      {
        type: 'select',
        control: { modelValue: 1 },
        options: dict.menuType,
        config: {
          optionsType: 0
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
          hidden: '$.type!==3',
          debug: true,
          before: (data) => {
            data.query = {
              type: 2
            }
            return data
          }
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
        type: 'radio',
        control: { modelValue: 1 },
        options: [
          {
            label: '显示',
            value: 1
          },
          {
            label: '隐藏',
            value: 0
          }
        ],
        config: {
          optionsType: 0
        },
        name: 'navShow',
        formItem: { label: '导航显示' }
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
    if (dialog.formType === 'edit') {
      params.id = dialog.editId
    } else {
      // 添加时
      // params.parentId = 0
    }
    delete params.contentList
    return params
  }
  // 表单提交完成事件
  const afterSubmit = (res: any, success: boolean, type: string) => {
    if (type == 'submit') {
      dialog.visible = false
      if (success) {
        // 操作成功才刷新列表数据
        tableListEl.value.getListData()
      }
    }
  }
  // 取消按钮事件
  const btnClick = (type: string) => {
    if (type === 'reset') {
      dialog.visible = false
    }
  }

  const afterFetch = (result: any, success: boolean, type: string) => {
    console.log('after2')
     if (success && type === 'fetch') {
      result.list = flatToTree(result.list)
      return result
    }
  }

  const formValueChange = (obj: any) => {
    if (obj.name === 'contentList') {
      obj.model.path = '/design/list/content/' + obj.value
      // obj.model.name = label
    }
  }
</script>
