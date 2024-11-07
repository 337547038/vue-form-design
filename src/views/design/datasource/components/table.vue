<template>
  <div style="width: 100%">
    <el-table
      :data="tableData"
      style="margin-bottom: 10px"
    >
      <el-table-column
        v-for="item in columns"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
      />
      <el-table-column width="110px">
        <template #default="{ row, $index }">
          <el-button
            type="primary"
            link
            @click="rowEditClick(row, $index)"
          >
            编辑
          </el-button>
          <el-button
            v-if="row.isNew"
            type="primary"
            link
            @click="rowDelClick(row, $index)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button
      size="small"
      @click="showFormClick"
    >
      添加一行
    </el-button>
    <div v-show="showForm">
      <ak-form
        ref="formEl"
        :data="formData"
        :operate-type="statusType"
      >
        <el-button
          type="primary"
          @click="addRowSubmit"
        >
          保存
        </el-button>
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
    search?: boolean
    filedType?: string
    isNew?: number
  }
  const props = withDefaults(
    defineProps<{
      modelValue?: TableList[] // 当前数据
      type?: string
    }>(),
    {
      modelValue: () => {
        return []
      },
      type: 'add'
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', data: TableList[]): void
  }>()
  const formEl = ref()
  const editRowIndex = ref()
  const tableData = ref([])
  const statusType = ref(props.type)
  watch(
    () => props.modelValue,
    (val: TableList[]) => {
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
          modelValue: true
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
            value: 'input'
          },
          {
            label: '多行文本',
            value: 'textarea'
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
          optionsType: 0
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
        config: {},
        name: 'search',
        formItem: {
          label: '模糊搜索'
        }
      }
    ],
    form: {
      labelWidth: '60px',
      class: 'form-row-3',
      size: 'small',
      name: 'source'
    },
    config: {}
  })
  const columns = computed(() => {
    const temp: any = []
    formData.value.list.forEach((item: any) => {
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
    statusType.value = props.type
  }
  const rowDelClick = (row: TableList, index: number) => {
    showForm.value = false // 如果已有展开添加行时，则收起
    if (props.type === 2) {
      // 编辑状态，在编辑状态下新添加的才允许删，以前的不能删
      if (row.isNew !== 1) {
        ElMessage.error(`新添加的才能删除`)
        return
      }
    }
    tableData.value.splice(index, 1)
  }
  const showFormClick = () => {
    formEl.value.resetFields() // 先清空上一次的
    showForm.value = true
    editRowIndex.value = undefined
    statusType.value = 1 // 点新增一行，表单都为增加模式
  }
  /**
   * 添加行
   */
  const addRowSubmit = () => {
    if (editRowIndex.value !== undefined) {
      // 修改后会直接更新到当前数据
      const newRow = formEl.value.getValue()
      tableData.value.splice(editRowIndex.value, 1, newRow)
      editRowIndex.value = undefined
      showForm.value = false
    } else {
      formEl.value.validate((valid: boolean, fieldValue: TableList) => {
        if (valid) {
          // 判断表名字重复
          let hasFiled = false
          tableData.value.forEach((item: TableList) => {
            if (item.name === fieldValue.name) {
              // 重复了
              hasFiled = true
            }
          })
          if (
            ['INT', 'VARCHAR'].includes(fieldValue.type)
            && !fieldValue.length
          ) {
            ElMessage.error(`名字列${fieldValue.name}的长度值不能为空`)
            return
          }
          if (hasFiled) {
            ElMessage.error(`数据表名字${fieldValue.name}已存在`)
            return
          }
          fieldValue.isNew = 1 // 添加一个标识，标注为刚新增的
          tableData.value.push(fieldValue)
          showForm.value = false
        }
      })
    }
    emits('update:modelValue', tableData.value)
  }
</script>
