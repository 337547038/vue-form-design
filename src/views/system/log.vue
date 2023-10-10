<template>
  <div>
    <ak-list
      ref="tableListEl"
      request-url=""
      delete-url=""
      :search-data="searchData"
      :data="tableData"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const tableListEl = ref()
  const searchData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入用户名'
        },
        config: {},
        name: 'userName',
        formItem: {
          label: '用户名'
        }
      },
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入登录ip地址'
        },
        config: {},
        name: 'ip',
        formItem: {
          label: '登录IP'
        }
      },
      {
        type: 'datePicker',
        control: {
          modelValue: '',
          type: 'date',
          placeholder: '请输入登录时间'
        },
        config: {},
        name: 'dateTime',
        formItem: {
          label: '登录时间'
        }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default'
    },
    config: { submitCancel: true }
  })
  const tableData = ref({
    columns: [
      { label: '多选', type: 'selection' },
      { label: '序号', type: 'index', width: '70px' },
      { label: '用户名称', prop: 'userName' },
      { label: '登录地址', prop: 'ip' },
      {
        label: '登录状态',
        prop: 'status',
        config: {
          dictKey: 'sys-status',
          tagList: { 1: 'success', 2: 'warning' }
        }
      },
      { label: '操作信息', prop: 'remark' },
      {
        label: '登录时间',
        prop: 'time',
        config: { formatter: '{y}-{m}-{d} {h}:{i}:{s}' }
      }
    ],
    config: {
      // columnsSetting: false
    }
  })
</script>
