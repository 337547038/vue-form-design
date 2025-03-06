<template>
  <div>
    <ak-list
      ref="tableListEl"
      :api-key="{list:'postList'}"
      :search-data="searchData"
      :data="tableData"
      @btn-click="listBtnClick"
    />
    <el-dialog
      v-model="dialog.visible"
      :title="dialog.type==='add'?'添加职位':'修改'"
      width="400px"
      destroy-on-close
    >
      <ak-form
        ref="formEl"
        :data="dialog.formData"
        :operate-type="dialog.type"
        :submit-url="dialog.type==='add'?'postSave':'postEdit'"
        :after="afterSubmit"
        @btn-click="cancelClick"
      />
    </el-dialog>
  </div>
</template>

<script setup>
  import { ref, reactive, nextTick } from 'vue'

  const searchData = ref({})
  const formEl = ref(null)
  const tableListEl = ref()
  const tableData = ref({
    columns: [
      { label: '多选', type: 'selection' },
      { label: '序号', type: 'index', width: 100 },
      { label: '岗位名称', prop: 'name' },
      {
        label: '操作', prop: '__control', render: 'buttons', buttons: [{
          label: '编辑',
          key: 'edit'
        },
          {
            label: '删除',
            key: 'del'
          }]
      }
    ],
    config: { expand: true, columnsSetting: true },
    controlBtn: [
      {
        label: '添加',
        key: 'add',
        type: 'primary',
        size: 'small',
        icon: 'plus'
      },
      {
        label: '批量删除',
        key: 'del',
        type: 'danger',
        size: 'small',
        icon: 'delete'
      }
    ]
  })

  const dialog = reactive({
    visible: false,
    type: 'add',
    formData: {
      list: [{
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入职位名称'
        },
        config: {},
        name: 'name',
        formItem: {
          label: '职位名称'
        },
        customRules: [
          {
            type: 'required',
            message: '请输入职位名称',
            trigger: 'blur'
          }]
      }],
      form: {
        labelWidth: '',
        size: 'default'
      },
      config: { submitCancel: true }
    }
  })
  const listBtnClick = (key, row) => {
    dialog.visible = true
    if (key === 'edit') {
      dialog.type = 'edit'
      nextTick(() => {
        formEl.value.setValue({
          name: row.name,
          id: row.id
        })
      })
    }
  }
  const afterSubmit = () => {
    dialog.visible = false
    tableListEl.value.getListData() // 重新拉数据
  }
  const cancelClick = (type) => {
    if (type === 'reset') {
      dialog.visible = false
    }
  }
</script>
