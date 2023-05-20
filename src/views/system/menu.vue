<template>
  <div>
    <ak-list
      v-if="refreshTable"
      ref="tableListEl"
      requestUrl="menuList"
      deleteUrl="menuDelete"
      :searchData="searchData"
      :tableData="tableData"
      afterResponse="transformDataToChild"
      :dict="dict"
    >
      <template #icon="{ row }">
        <i :class="row.icon"></i>
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
        :formData="formData"
        addUrl="menuSave"
        editUrl="menuEdit"
        :beforeSubmit="beforeSubmit"
        :afterSubmit="afterSubmit"
        @btn-click="btnClick"
        :dict="dict"
      />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, nextTick } from 'vue'
  //import iconfont from '@/components/iconfont.vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const tableListEl = ref()
  const formNameEl = ref()
  const dict = {
    menuType: { 1: '菜单', 2: '按钮' }
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
        config: {},
        name: 'name',
        item: {
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
          optionsFun: 'status'
        },
        name: 'status',
        item: {
          label: '状态'
        }
      },
      {
        type: 'button',
        control: {
          label: '搜索',
          key: 'submit',
          type: 'primary'
        },
        config: {}
      },
      {
        type: 'button',
        control: {
          label: '重置',
          key: 'reset'
        },
        config: {}
      }
    ],
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
        label: '图标',
        prop: 'icon',
        width: 60
      },
      {
        label: '排序',
        prop: 'sort',
        width: 60
      },
      {
        label: '类型',
        prop: 'type',
        width: 70,
        config: { dictKey: 'menuType', tagList: { 1: 'success', 2: 'info' } }
      },
      {
        label: '状态',
        prop: 'status',
        width: 70,
        config: { dictKey: 'status', tagList: { 1: 'success', 2: 'info' } }
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
        visible: '$.parentId!==1',
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
        //visible: '$.parentId!==1',
        label: '编辑',
        click: (row: any) => {
          if (row.parentId === 1) {
            router.push({ path: '/design/dataList/list' })
            return
          }
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
        key: 'del',
        visible: '$.parentId!==0&&$.parentId!==1' // 一级不让删
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
          placeholder: '父级'
        },
        config: {},
        name: 'parentId',
        item: { label: '父级ID' }
      },
      {
        type: 'radio',
        control: { modelValue: 1 },
        options: [],
        config: {
          optionsType: 2,
          optionsFun: 'menuType'
        },
        name: 'type',
        item: { label: '类型' }
      },
      {
        type: 'input',
        control: { modelValue: '', placeholder: '请输入菜单名称' },
        config: {},
        name: 'name',
        item: { label: '菜单名称' },
        customRules: [
          { type: 'required', message: '菜单名称不能为空', trigger: 'blur' }
        ]
      },
      {
        type: 'input',
        control: { modelValue: '', placeholder: '请输入访问地址/类型标识' },
        config: {},
        name: 'path',
        item: { label: '访问地址' }
      },
      {
        type: 'component',
        control: {
          modelValue: ''
        },
        config: {
          // componentName: markRaw(iconfont)
          componentName: 'DiyIconfont'
        },
        name: 'icon',
        item: {
          label: 'icon图标'
        }
      },
      {
        type: 'inputNumber',
        control: { modelValue: 0, controlsPosition: 'right' },
        config: {},
        name: 'sort',
        item: { label: '排序' }
      },
      {
        type: 'radio',
        control: { modelValue: 1 },
        options: [],
        config: {
          optionsType: 2,
          optionsFun: 'status'
        },
        name: 'status',
        item: { label: '状态' }
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
        item: {
          label: '备注'
        }
      },
      {
        type: 'div',
        control: {},
        config: { textAlign: 'center', span: 24 },
        list: [
          {
            type: 'button',
            control: { label: '确定', type: 'primary', key: 'submit' },
            config: { span: 0 }
          },
          {
            type: 'button',
            control: { label: '取消', key: 'reset' },
            config: { span: 0 }
          }
        ]
      }
    ],
    form: {
      class: 'form-row-2',
      labelWidth: '100px',
      size: 'default'
    },
    config: {}
  })
  const beforeSubmit = (params: any) => {
    // 如编辑时添加参数
    if (dialog.formType === 2) {
      params.id = dialog.editId
    }
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
</script>
