<template>
  <div>
    <ak-form :formData="formData" ref="formName" :submitUrl="submitUrl" />
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script setup>
  import { provide, ref } from 'vue'
  const formData = ref({
    list: [
      {
        name: 'radio',
        type: 'radio',
        control: { modelValue: '' },
        options: [
          { label: '男', value: '1' },
          { label: '女', value: '2' }
        ],
        config: { type: 'fixed', source: 0, request: 'get', sourceFun: '' },
        item: { label: '性别', showLabel: false }
      },
      {
        name: 'select',
        type: 'select',
        control: { modelValue: '', appendToBody: true },
        options: [
          { label: '游戏', value: '1' },
          { label: '购物', value: '2' }
        ],
        config: {
          type: 'fixed',
          source: 0,
          request: 'get',
          sourceFun: '',
          linkKey: true,
          linkValue: "$.radio==='1'",
          linkResult: 'disabled'
        },
        item: { label: '兴趣爱好', showLabel: false }
      },
      {
        name: 'inputGame',
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '性别为男性或兴趣爱好为游戏时显示'
        },
        slot: {},
        config: { linkKey: true, linkValue: "$.radio==='1'||$.select==='1'" },
        item: { label: '游戏项目', showLabel: false },
        rules: [],
        customRules: [
          { type: 'required', message: '游戏项目', trigger: 'blur' }
        ]
      },
      {
        name: 'inputShop',
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '性别为女性或兴趣爱好为购物时显示'
        },
        slot: {},
        config: { linkKey: true, linkValue: "$.radio==='2'&&$.select==='2'" },
        item: { label: '购物项目', showLabel: false },
        rules: [],
        customRules: []
      },
      {
        name: 'password',
        type: 'password',
        control: { modelValue: '' },
        config: {},
        item: {
          label: '密码',
          showLabel: false
        },
        customRules: [
          { type: 'required', message: '请输入密码', trigger: 'blur' }
        ]
      },
      {
        name: 'password2',
        type: 'password',
        control: { modelValue: '' },
        config: {},
        item: {
          label: '确认密码',
          showLabel: false,
          rules: [
            {
              validator: (rule, value, callback) => {
                // 获取密码的值
                const val = getform1660728166875ValueByName('password')
                console.log(val)
                const control = getform1660728166875ControlByName('password')
                console.log(control)
                if (value === '') {
                  callback(new Error('请输入密码'))
                } else if (value !== control.control.modelValue) {
                  callback(new Error('两次密码不一样'))
                } else {
                  callback()
                }
              },
              trigger: 'change'
            }
          ]
        }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1660728166875'
    }
  })
  // 表单控件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
    console.log(key)
    console.log(value)
  })*/
  const submitUrl = ref(false) // 表单提交url
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
</script>
