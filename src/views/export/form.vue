<template>
  <div>
    <ak-form :formData="formData" ref="formName" />
    <el-button type="primary" @click="submit">提交</el-button>
    <el-button type="primary" @click="setValue">setValue</el-button>
    <el-button type="primary" @click="setOptions">setOptions</el-button>
  </div>
</template>
<script setup>
  import { provide, ref } from 'vue'

  const formData = ref({
    list: [
      {
        name: 'input1660554846528',
        type: 'input',
        control: {
          modelValue: ''
        },
        config: {},
        item: {
          label: '单行文本',
          showLabel: false
        }
      },
      {
        name: 'select1660548207503',
        type: 'select',
        control: { modelValue: '', appendToBody: true },
        options: [],
        config: {
          type: 'async',
          source: 1,
          request: 'get',
          sourceFun: 'methodOption'
        },
        item: {
          label: '下拉选择框',
          showLabel: false,
          rules: [{ required: true, message: '必填项', trigger: 'change' }]
        }
      },
      {
        name: 'table1660548954617',
        type: 'table',
        list: [
          {
            name: '',
            type: 'index',
            item: { label: '序号' },
            control: { type: 'index', modelValue: undefined },
            config: {}
          },
          {
            name: 'input1660548956498',
            type: 'input',
            control: { type: 'index', modelValue: undefined },
            config: {},
            item: { label: '单行文本', showLabel: false },
            customRules: [
              { type: 'required', message: '必填', trigger: 'blur' }
            ]
          },
          {
            name: 'select1660548960406',
            type: 'select',
            control: { type: 'index', modelValue: undefined },
            options: [{ label: '1', value: '1' }],
            config: {},
            item: {
              label: '下拉选择框',
              showLabel: false,
              rules: [{ required: true, message: '必填项', trigger: 'change' }]
            }
          },
          {
            name: 'select1660548969374',
            type: 'select',
            control: { type: 'index', modelValue: undefined },
            options: [{ label: '1', value: '1' }],
            config: {},
            item: { label: '下拉选择框', showLabel: false }
          }
        ],
        tableData: [],
        control: { border: true },
        config: {}
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1660548035082'
    }
  })
  // 下拉选择框获取选项值
  const select1660548207503Option = ref([{ label: '选项1', value: '1' }])
  provide('methodOption', select1660548207503Option)
  // 表单控件值改变事件
  provide('AKControlChange', ({ key, value }) => {
    console.log(key)
    console.log(value)
  })
  const formName = ref()
  const submit = () => {
    formName.value.validate((valid, fields) => {
      console.log(valid)
      console.log(fields) // 校验通过时返回当前表单的值
      if (valid) {
        alert('submit')
      } else {
        console.log('error submit')
        return false
      }
    })
  }
  const setValue = () => {
    formName.value.setValue({
      input1660554846528: '123',
      select1660548207503: '2',
      table1660548954617: [
        {
          input1660548956498: 'a',
          select1660548960406: '1',
          select1660548969374: '2'
        }
      ]
    })
  }
  const setOptions = () => {
    formName.value.setOptions({
      select1660548207503: [
        {
          label: 'aa',
          value: 'aa'
        },
        {
          label: 'bb',
          value: 'bb'
        }
      ],
      select1660548960406: [
        {
          label: 'taa',
          value: 'taa'
        },
        {
          label: 'tbb',
          value: 'tbb'
        }
      ]
    })
  }
</script>
