<template>
  <div>
    <ak-list
      ref="tableListRef"
      :api-key="{list:'designList',del:'designDelete'}"
      :search-data="searchData"
      :data="tableData"
      :query="{ type: 3 }"
      @btn-click="btnListClick"
    >
      <template #source="{ row, dict }">
        <router-link
          :to="`/design/form?id=${row.source}&redirect=/design/list/list`"
        >
          {{ dict.formName && dict.formName[row.source] }}
        </router-link>
      </template>
      <ak-form
        ref="formRef"
        :data="setFormData"
        :before="submitBefore"
        submit-url="designEdit"
        :after="submitAfter"
        @change="formValueChange"
        @btn-click="formBtnClick"
      />
    </ak-list>
  </div>
</template>

<script setup lang="ts">
  import {useRouter} from 'vue-router'
  import {onMounted, provide, ref} from 'vue'
  import {useListDialogForm} from "@/store/list.ts";
  import {getRequest} from "@/api";

  const router = useRouter()
  const searchData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入流程名称'
        },
        name: 'name',
        formItem: {
          label: '流程名称'
        }
      },
      {
        type: 'select',
        control: {
          modelValue: '',
          style: {width: '100px'}
        },
        options: [],
        optionsType: 2,
        optionsFun: 'sys-flow',
        name: 'flow',
        formItem: {
          label: '流程分类'
        }
      }
    ],
    config: {submitCancel: true}
  })
  const tableData = ref({
    columns: [
      {label: '多选', type: 'selection'},
      {label: '流程名称', prop: 'name'},
      {
        label: '表单类型',
        prop: 'formType',
        render: 'tag',
        replaceValue: {0: '在线表单', 1: '本地表单'},
        custom: {0: 'primary', 1: 'warning'}
      },
      {label: '流程表单', prop: 'formId', render: 'text', replaceValue: 'formName'},
      {
        label: '分类',
        prop: 'category',
        render: 'tag',
        replaceValue: 'sys-flow'
      },
      {
        label: '状态',
        prop: 'status',
        render: 'tag',
        replaceValue: 'sys-status',
        custom: {
          0: 'info',
          1: 'success'
        }
      },
      {
        label: "创建人",
        prop: 'creatUserId',
        render: 'text',
        replaceValue: 'creatUser'
      },
      {
        label: '操作', prop: '__control', render: 'buttons', buttons: [
          {
            key: 'edit',
            label: '设置',
            icon: '',
            props: {text: true}
          },
          {
            label: '编辑',
            icon: '',
            props: {text: true},
            click: (row: any) => {
              router.push({path: '/design/flow', query: {id: row.id}})
            }
          },
          {label: '删除', key: 'del', props: {text: true}, icon: ''}
        ]
      },
    ],
    config: {
      tableProps: {
        onCellClick(row: any, {property}: any) {
          if (property === 'formId' && row.formType === 0) {
            //跳转到设计的表单
            router.push({path: '/design/form', query: {id: row.formId}})
          }
        }
      },
      openType: 'dialog',
      controlBtn: [
        {
          label: '新增流程',
          type: 'primary',
          size: 'small',
          icon: 'plus',
          click: () => {
            router.push({path: '/design/flow'})
          }
        },
        {
          label: '批量删除',
          key: 'del',
          type: 'danger',
          size: 'small',
          icon: 'delete'
        }
      ]
    }
  })
  const tableListRef = ref()
  //设置流程表单相关
  const formRef = ref()
  const dialogFormStore = useListDialogForm('set')()
  provide('akListDialogForm', dialogFormStore)
  dialogFormStore.setTitle('设置流程表单')
  dialogFormStore.setWidth('400px')
  const formList = ref([])
  const vueFormList = ref([])
  const formValueChange = ({prop, value, model}: any) => {
    if (prop === 'formType') {
      // 清空已选。使用表单setValue方法时不改变，否则没办法回显
      model.formId = ''
      formRef.value.setOptions({formId: value ? vueFormList.value : formList.value})
    }
  }

  const formBtnClick = (key: string) => {
    if (key === 'addForm') {
      router.push({path: '/design/form', query: {type: 'flow', redirect: '/design/list/list'}})
    }
  }
  const btnListClick = (key: string, row: any) => {
    if (key === 'edit') {
      //设置按钮点击击时
      formRef.value.setValue(row, false, false)
      formRef.value.setOptions({formId: row.formType ? vueFormList.value : formList.value})
    }
  }
  const submitBefore = (params: any) => {
    return params
  }
  const submitAfter = (_: any, success: boolean) => {
    if (success) {
      dialogFormStore.setVisible(false)
      //刷新数据
      tableListRef.value.getListData()
    }
  }
  const getFormList = () => {
    getRequest('designList', {query: {type: 1}})
      .then((res: any) => {
        const result = res.data?.list || []
        formList.value = result.map((item: any) => ({
          label: item.name,
          value: item.id
        }))
      })
  }
  const getVueFrom = () => {
    const modules: any = import.meta.glob('@/components/flow/flowForm/*.vue', {eager: true})
    // console.log(modules)
    const temp = []
    for (const path in modules) {
      const module = modules[path].default
      temp.push({
        label: module.name,
        value: module.__name
      })
    }
    vueFormList.value = temp
  }
  const setFormData = ref({
    list: [
      {
        type: "input",
        control:
          {
            modelValue: ""
          },
        formItem:
          {
            label: "流程名称"
          },
        name: "name",
        customRules: [
          {
            type: "required",
            message: "请输入流程名称",
            trigger: "blur"
          }]
      },
      {
        type: "select",
        control:
          {
            modelValue: "",
            teleported: true
          },
        options: [],
        formItem:
          {
            label: "分类"
          },
        name: "category",
        optionsType: 2,
        optionsFun: "sys-flow"
      },
      {
        type: "switch",
        control:
          {
            modelValue: false,
            activeValue: 1,
            inactiveValue: 0
          },
        formItem:
          {
            label: "状态"
          },
        name: "status",
        optionsType: 2,
        optionsFun: "sys-status"
      },
      {
        type: 'component',
        control: {
          modelValue: '',
          colorPicker: true
        },
        componentName: 'diyIconfont',
        name: 'icon',
        formItem: {
          label: 'icon图标'
        }
      },
      {
        type: "select",
        control:
          {
            modelValue: '',
            teleported: true
          },
        options: [
          {label: '在线创建', value: 0},
          {label: '本地表单', value: 1},
        ],
        formItem:
          {
            label: "表单类型"
          },
        name: "formType"
      },
      {
        className: 'add-button',
        type: 'button',
        control: {
          label: "去创建表单",
          type: "primary",
          key: "addForm"
        },
        conditionalDisplay: "$.formType===1||$.formType===''"
      },
      {
        type: "select",
        control:
          {
            modelValue: "",
            teleported: true
          },
        options: [],
        formItem:
          {
            label: "选择表单"
          },
        name: "formId",
        transformData: "string"
      }],
    config:
      {
        labelWidth: '90px',
        submitCancel: true,
        style: '.add-button{margin:0 0 15px 90px}'
      }
  })

  onMounted(() => {
    //先将窗口下拉数据取回来
    getFormList()
    getVueFrom()
  })
</script>
