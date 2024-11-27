<template>
  <div>
    <ak-list
      ref="tableListEl"
      :api-key="{list:'userList',del:'userDelete'}"
      :search-data="searchData"
      :data="tableData"
      :auto-load="false"
      @btn-click="listBtnClick"
    />
    <el-dialog
      v-model="dialog.visible"
      destroy-on-close
      :title="dialog.title"
      width="600px"
    >
      <ak-form
        ref="formEl"
        :data="formData"
        :dict="dialog.dict"
        :operate-type="dialog.formType"
        :submit-url="dialog.formType==='add'?'userSave':'userEdit'"
        :before="beforeSubmit"
        :after="afterSubmit"
        @btn-click="dialogBtnClick"
      />
    </el-dialog>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router'
  import { nextTick, onMounted, reactive, ref } from 'vue'
  import { jsonParseStringify } from '@/utils/design'
  import { flatToTree } from '@/utils/flatTree'

  const route = useRoute()
  const tableListEl = ref()
  const afterFetch = (result) => {
    return flatToTree(result.list || result)
  }
  const searchData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入登录名称'
        },
        config: {},
        name: 'userName',
        formItem: {
          label: '登录名称'
        }
      },
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入昵称'
        },
        config: {},
        name: 'nickName',
        formItem: {
          label: '昵称'
        }
      },
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入手机号码'
        },
        config: {},
        name: 'phone',
        formItem: {
          label: '手机号'
        }
      },
      {
        type: 'select',
        control: {
          modelValue: '',
          style: { width: '100px' }
        },
        options: [],
        config: {
          optionsType: 2,
          optionsFun: 'sys-status'
          // transformData: 'string'
        },
        name: 'status',
        formItem: {
          label: '用户状态'
        }
      },
      {
        type: 'select',
        control: {
          modelValue: [],
          style: { width: '100px' }
        },
        options: [],
        config: {
          optionsType: 1,
          optionsFun: 'roleList', // 可以为url也可以为api中的key
          method: 'post',
          label: 'name', // 指定name为label的值
          value: 'id' // 指定id为value的值
        },
        name: 'roleId',
        formItem: {
          label: '角色'
        }
      }
    ],
    form: {
      size: 'default'
    },
    config: { submitCancel: true }
  })
  const tableData = ref({
    columns: [
      { label: '多选', type: 'selection' },
      { label: '序号', type: 'index', width: '70px' },
      { label: '登录名称', prop: 'userName' },
      { label: '昵称', prop: 'nickName' },
      { label: '手机号码', prop: 'phone' },
      /* { label: '角色', prop: 'roleId' }, */
      {
        label: '状态',
        prop: 'status',
        render: 'tag',
        custom: { 1: 'success', 0: 'info' },
        replaceValue: 'sys-status'
      },
      {
        prop: 'creatTime',
        label: '创建时间',
        render: 'datetime'
      },
      {
        label: '操作', prop: '__control', render: 'buttons', buttons: [
          { label: '编辑', key: 'edit' },
          { label: '删除', key: 'del' }
        ]
      }
    ],
    config: { openType: 'dialog', searchJump: true },
    controlBtn: [
      {
        label: '新增',
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
    ],
    treeData: {
      show: true,
      treeProps: {
        nodeKey: 'id',
        props: {
          label: 'name'
        }
      },
      name: 'department',
      method: 'post',
      requestUrl: 'deptList',
      after: afterFetch
    }
  })
  const formEl = ref()
  const formData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入用户名称'
        },
        config: {},
        name: 'userName',
        formItem: {
          label: '用户名称'
        },
        customRules: [
          {
            type: 'required',
            message: '请输入用户名称',
            trigger: 'blur'
          }
        ]
      },
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入用户昵称'
        },
        config: {},
        name: 'nickName',
        formItem: {
          label: '用户昵称'
        }
      },
      {
        type: 'password',
        control: {
          modelValue: '',
          placeholder: '请输入登录密码'
        },
        config: {},
        name: 'password',
        formItem: {
          label: '登录密码'
        },
        customRules: [
          {
            type: 'required',
            message: '请输入登录密码',
            trigger: 'blur'
          }
        ]
      },
      {
        type: 'password',
        control: { modelValue: '', placeholder: '请输入确认登录密码' },
        config: {},
        name: 'password2',
        formItem: {
          label: '确认密码',
          rules: [
            {
              validator: (rule, value, callback) => {
                // 获取密码的值
                // eslint-disable-next-line no-undef
                const val = getuserFormValueByName('password')
                console.log(val)
                if (value === '') {
                  callback(new Error('请输入密码'))
                } else if (value !== val) {
                  callback(new Error('两次密码不一样'))
                } else {
                  callback()
                }
              },
              trigger: 'change'
            }
          ]
        },
        customRules: [
          {
            type: 'required',
            message: '请输入确认密码',
            trigger: 'blur'
          }
        ]
      },
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入手机号码'
        },
        config: {},
        name: 'phone',
        formItem: {
          label: '手机号码'
        },
        customRules: [
          {
            type: 'mobile',
            message: '请输入手机号码',
            trigger: 'blur'
          }
        ]
      },
      {
        type: 'treeSelect',
        control: {
          modelValue: '',
          data: [],
          renderAfterExpand: false,
          props: {
            label: 'name',
            value: 'id'
          }
        },
        config: {
          optionsType: 1,
          optionsFun: 'deptList',
          method: 'post',
          after: afterFetch
        },
        name: 'departmentId',
        formItem: {
          label: '归属部门'
        }
      },
      {
        type: 'select',
        control: {
          modelValue: ''
        },
        options: [],
        config: {
          optionsType: 0
        },
        name: 'post',
        formItem: {
          label: '岗位'
        }
      },
      {
        type: 'radio',
        control: {
          modelValue: 1
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
      },
      {
        type: 'select',
        control: {
          modelValue: [],
          multiple: true
        },
        options: [],
        config: {
          optionsType: 1,
          optionsFun: 'roleList', // 可以为url也可以为api中的key
          method: 'post',
          label: 'name', // 指定name为label的值
          value: 'id', // 指定id为value的值
          // transformData: 'string'
        },
        name: 'roleId',
        formItem: {
          label: '角色'
        }
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
      }
    ],
    form: {
      size: 'default',
      class: 'form-row-2',
      labelWidth: '100px',
      name: 'userForm'
    },
    config: { submitCancel: true }
  })
  const dialog = reactive({
    visible: false,
    title: '',
    formType: 'add',
    dict: {},
    editId: ''
  })
  const listBtnClick = (key, row) => {
    // 使用弹窗方式打开新增编辑
    if (key === 'add' || key === 'edit') {
      // 打开弹窗
      const newRow = jsonParseStringify(row)
      dialog.visible = true
      dialog.title = key === 'add' ? '新增' : '编辑'
      dialog.formType = key
      dialog.editId = newRow && newRow.id
      // 编辑，根据id加载
      if (key === 'edit') {
        nextTick(() => {
          console.log(newRow)
          // 将角色数据转换下
          if (newRow.roleId) {
            newRow.roleId = newRow.roleId.split(',').map(Number)
          } else {
            newRow.roleId = []
          }
          // 将密码值设给确认密码框
          newRow.password2 = newRow.password
          formEl.value.setValue(newRow)
          // formEl.value.getData({ id: row.id })
        })
      }
    }
  }
  // 提交表单前事件
  const beforeSubmit = (params) => {
    // 将角色转字符串传
    if (params.roleId) {
      params.roleId = params.roleId.join(',')
    }
    if (dialog.formType === 'edit') {
      // 编辑模式下添加参数
      params.id = dialog.editId
    }
    delete params.password2 // 确认密码无需提交
    return params
  }
  // 提交表单后事件
  const afterSubmit = (res, success) => {
    if (success) {
      // 添加成功，刷新列表数据
      closeResetDialog()
      tableListEl.value.getListData()
    }
  }
  // 关闭弹窗并重置表单，否则下次打开会保留上次数据
  const closeResetDialog = () => {
    dialog.visible = false
    dialog.editId = ''
    // formEl.value.resetFields() // 重置表单
  }
  // 点击弹窗取消按钮时
  const dialogBtnClick = (type) => {
    if (type === 'reset') {
      closeResetDialog()
    }
  }
  onMounted(() => {
    if (route.query.roleId) {
      // 根据url参数设置查询表单初始值
      tableListEl.value.setSearchFormValue({ roleId: parseInt(route.query.roleId) })
    }
    // 等查询表单设值完整后，再加载列表数据，这样便可获取到查询条件
    nextTick(() => {
      tableListEl.value.getListData()
    })
  })
</script>
