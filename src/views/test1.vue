<template>
  <div>
    <ak-form
      ref="formNameEl"
      :type="formType"
      :data="formData"
      request-url=""
      submit-url=""
      edit-url=""
      :before-submit="beforeSubmit"
    />
    <el-date-picker v-model="datePicker" value-format="YYYY-MM-DD" />
  </div>
</template>
<script setup lang="ts">
  import { ref, computed, provide } from 'vue'
  const formNameEl = ref()
  const formData = ref({
    list: [
      {
        type: 'input',
        control: { modelValue: '', placeholder: '请输入标题名称' },
        config: {},
        name: 'inputText',
        formItem: { label: '标题名称' },
        customRules: [{ type: 'required', message: '必填项', trigger: 'blur' }]
      },
      {
        type: 'radio',
        control: { modelValue: '0' },
        config: { optionsType: 0, transformData: 'string' },
        name: 'radio',
        formItem: { label: '性别' },
        options: [
          { label: '男', value: '1' },
          { label: '女', value: '0' }
        ]
      },
      {
        type: 'checkbox',
        control: { modelValue: [] },
        options: [],
        config: { optionsType: 2, optionsFun: 'sys-flow' },
        name: 'checkbox',
        formItem: { label: '多选' }
      },
      {
        type: 'select',
        control: { appendToBody: true },
        config: {
          optionsType: 1,
          optionsFun: 'demo/select',
          method: 'get',
          label: 'name',
          value: 'value'
        },
        name: 'select1',
        formItem: { label: '选择框' },
        options: []
      },
      {
        type: 'datePicker',
        control: {
          type: 'date',
          placeholder: '请选择日期',
          format: 'YYYY-MM-DD'
        },
        config: {},
        name: 'dateTime',
        formItem: { label: '日期时间' }
      }
    ],
    form: { size: 'default' },
    config: { submitCancel: true }
  })
  // todo 存在编辑时，可根据路由等参数设置当前表单模式 1新增 2编辑
  const formType = computed(() => {
    return 1
  })

  // 表单提交时参数处理
  const beforeSubmit = params => {
    // 如编辑时添加参数
    //  params.id='xxx'
    return params
  }

  const datePicker = ref()
</script>
