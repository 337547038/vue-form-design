<template>
  <div>
    <ak-list
      ref="tableListEl"
      requestUrl="deptList"
      deleteUrl="deptDelete"
      :searchData="searchData"
      :tableData="tableData"
      :afterResponse="afterResponse"
    />
    <el-dialog
      v-model="dialog.visible"
      :title="dialog.title"
      width="400px"
      destroy-on-close
    >
      <ak-form
        ref="formNameEl"
        :type="dialog.formType"
        :formData="formData"
        addUrl="deptSave"
        editUrl="deptEdit"
        :beforeSubmit="beforeSubmit"
        :afterSubmit="afterSubmit"
        @btn-click="btnClick"
      />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
  // import {useRoute, useRouter} from 'vue-router'
  import { ref, reactive, nextTick } from 'vue'
  const tableListEl = ref()
  const formNameEl = ref()
  const departmentTree = ref([]) // 上级部门
  const searchData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入部门名称'
        },
        config: {},
        name: 'name',
        item: {
          label: '部门名称'
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
          label: '查询',
          key: 'submit',
          type: 'primary'
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
  })
  const tableData = ref({
    tableProps: {
      rowKey: 'id'
    },
    columns: [
      { label: '部门名称', prop: 'name' },
      {
        label: '排序',
        prop: 'sort'
      },
      {
        label: '状态',
        prop: 'status',
        config: { dictKey: 'status', tagList: { 1: 'success', 2: 'info' } }
      },
      { label: '操作', prop: '__control' }
    ],
    controlBtn: [
      {
        label: '新增',
        type: 'primary',
        size: 'small',
        icon: 'plus',
        click: () => {
          dialog.visible = true
          dialog.title = '新增部门'
          dialog.formType = 1
          setParentIdData()
        }
      }
    ],
    operateBtn: [
      {
        label: '新增',
        click: (row: any) => {
          dialog.visible = true
          dialog.title = '新增部门'
          dialog.formType = 1
          nextTick(() => {
            formNameEl.value.setValue({ parentId: row.id })
          })
          setParentIdData()
        }
      },
      {
        label: '编辑',
        click: (row: any) => {
          dialog.visible = true
          dialog.title = '编辑部门'
          dialog.formType = 2
          dialog.editId = row.id
          // 这里有个问题parentId默认treeSelect显示有异常
          if (row.parentId === 0) {
            row.parentId = ''
          }
          nextTick(() => {
            formNameEl.value.setValue(row)
          })
          setParentIdData()
        }
      },
      {
        label: '删除',
        key: 'del'
      }
    ],
    config: {
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
        type: 'treeSelect',
        control: {
          modelValue: '',
          data: [],
          renderAfterExpand: false,
          props: {
            label: 'name'
          },
          checkStrictly: true, // 可选任意级
          placeholder: '请选择上级部门'
        },
        config: {
          optionsType: 0
        },
        name: 'parentId',
        item: { label: '上级部门' }
      },
      {
        type: 'input',
        control: { modelValue: '', placeholder: '请输入部门名称' },
        config: {},
        name: 'name',
        item: { label: '部门名称' },
        customRules: [
          { type: 'required', message: '部门名称不能为空', trigger: 'blur' }
        ]
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
        config: {},
        name: 'remark',
        item: {
          label: '备注'
        }
      },
      {
        type: 'div',
        control: {},
        config: { textAlign: 'center' },
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
  // 处理表格数据，转换为可折叠表格
  const afterResponse = (result: any) => {
    const list = result.list
    const temp: any = []
    transformDataList(list, 0, temp)
    departmentTree.value = temp
    return temp
  }
  const transformDataList = (data: any, parentId: number, temp: any) => {
    data.forEach((item: any) => {
      item.value = item.id // tree组件只能修改label取值，不能指定value，这里添加一个
      if (item.parentId === parentId) {
        const childrenList = data.filter((ch: any) => {
          return ch.parentId === item.id
        })
        if (childrenList?.length) {
          item.children = []
          transformDataList(data, item.id, item.children)
        }
        temp.push(item)
      }
    })
  }
  // 设置部门下拉选择
  const setParentIdData = () => {
    nextTick(() => {
      formNameEl.value.setOptions({ parentId: departmentTree.value })
    })
  }
</script>
