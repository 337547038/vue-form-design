<template>
  <div>
    <el-table :data="tableData" style="margin-bottom: 10px">
      <el-table-column
        v-for="item in columns"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
      />
      <el-table-column width="120px">
        <template #default="{ row, $index }">
          <el-button link @click="rowEditClick(row, $index)">编辑</el-button>
          <el-button link @click="rowDelClick(row, $index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="showFormClick" size="small">添加一行</el-button>
    <div v-show="showForm">
      <ak-form ref="formEl" :data="formData">
        <el-button @click="addRowSubmit">保存</el-button>
      </ak-form>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, computed, watch } from 'vue'
  import { ElMessage } from 'element-plus'

  interface TableList {
    label: string
    name: string
    type: string
    length?: string
    default?: string
    remark?: string
    empty?: string
    search?: string
    filedType?: string
  }
  const props = withDefaults(
    defineProps<{
      modelValue?: TableList[] // 当前数据
    }>(),
    {
      modelValue: () => {
        return []
      }
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', data: TableList[]): void
  }>()
  const formEl = ref()
  const type = ref(2) //1新增
  const editRowIndex = ref()
  const defaultData = ref([]) //设置编辑时的默认值,只提取name
  const tableData = ref([])
  watch(
    () => props.modelValue,
    (val: TableList[]) => {
      if (defaultData.value.length === 0 && val?.length) {
        //只设置一次
        defaultData.value = val.map(item => item.name)
      }
      tableData.value = val
    },
    { deep: true, immediate: true }
  )
  const showForm = ref(false)
  const formData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: '',
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
          appendToBody: true
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
          modelValue: ''
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
          modelValue: ''
        },
        config: { disabledEdit: true },
        name: 'default',
        formItem: {
          label: '默认'
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
          modelValue: false
        },
        config: { disabledEdit: true },
        name: 'empty',
        formItem: {
          label: '是否为空'
        }
      },
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '中文标题名称'
        },
        config: {},
        name: 'label',
        formItem: {
          label: '标题'
        }
      },
      {
        type: 'select',
        control: {
          modelValue: '',
          appendToBody: true
        },
        options: [
          {
            label: '单行文本',
            value: 'text'
          },
          {
            label: '单选框组',
            value: 'radio'
          },
          {
            label: '多选框组',
            value: 'checkbox'
          },
          {
            label: '开关',
            value: 'switch'
          },
          {
            label: '下拉选择框',
            value: 'select'
          },
          {
            label: '日期选择框',
            value: 'datePicker'
          },
          {
            label: '计数器',
            value: 'inputNumber'
          },
          {
            label: '级联选择器',
            value: 'cascader'
          },
          {
            label: '滑块',
            value: 'slider'
          },
          {
            label: '图片/文件',
            value: 'upload'
          },
          {
            label: '富文本',
            value: 'tinymce'
          }
        ],
        config: {
          optionsType: 0,
          disabledEdit: true
        },
        name: 'filedType',
        formItem: {
          label: '组件类型'
        }
      },
      {
        type: 'switch',
        control: {
          modelValue: false
        },
        config: {
          disabledEdit: true
        },
        name: 'search',
        formItem: {
          label: '模糊搜索'
        }
      }
      /*{
        type: 'txt',
        control: {
          modelValue: '提示：默认会添加id自增主键'
        },
        config: { span: 24 }
      }*/
    ],
    form: {
      labelWidth: '60px',
      class: 'form-row-3',
      size: 'small',
      name: 'source'
    },
    config: {
      //submitCancel: true
    }
  })
  const columns = computed(() => {
    const temp = []
    formData.value.list.forEach((item: TableList) => {
      temp.push({
        label: item.formItem?.label,
        prop: item.name
      })
    })
    return temp
  })
  const rowEditClick = (row: TableList, index: number) => {
    showForm.value = true
    formEl.value.setValue(row)
    editRowIndex.value = index
  }
  const rowDelClick = (row: TableList, index: number) => {
    if (type.value === 2) {
      //编辑状态，在编辑状态下新添加的才允许删，以前的不能删
      //如果要删除的name存在于defaultData中，说明是以前的数据不能删
      if (defaultData.value.includes(row.name)) {
        ElMessage.error(`新添加的才能删`)
      }
      return
    }
    tableData.value.splice(index, 1)
  }
  const showFormClick = () => {
    formEl.value.resetFields() //先清空上一次的
    showForm.value = true
  }
  /**
   * 添加行
   */
  const addRowSubmit = () => {
    if (editRowIndex.value !== undefined) {
      //修改后会直接更新到当前数据
      const newRow = formEl.value.getValue()
      tableData.value.splice(editRowIndex.value, 1, newRow)
      editRowIndex.value = undefined
      showForm.value = false
    } else {
      formEl.value.validate((valid: boolean, fieldValue: TableList) => {
        if (valid) {
          //判断表名字重复
          let hasFiled = false
          tableData.value.forEach((item: TableList) => {
            if (item.name === fieldValue.name) {
              //重复了
              hasFiled = true
            }
          })
          if (hasFiled) {
            ElMessage.error(`数据表名字${fieldValue.name}已存在`)
          } else {
            tableData.value.push(fieldValue)
            showForm.value = false
          }
        }
      })
    }
    emits('emits', tableData.value)
  }
</script>
