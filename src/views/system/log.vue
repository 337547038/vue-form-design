<template>
  <div>
    <ak-list
      ref="tableListEl"
      requestUrl=""
      deleteUrl=""
      :searchData="searchData"
      :tableData="tableData"
    />
  </div>
</template>

<script setup>
  // import {useRoute, useRouter} from 'vue-router'
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
        item: {
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
        item: {
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
        item: {
          label: '登录时间'
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
    columns: [
      { label: '多选', type: 'selection' },
      { label: '序号', type: 'index', width: '70px' },
      { label: '用户名称', prop: 'userName' },
      { label: '登录地址', prop: 'ip' },
      {
        label: '登录状态',
        prop: 'status',
        config: { dictKey: 'status', tagList: { 1: 'success', 2: 'warning' } }
      },
      { label: '操作信息', prop: 'remark' },
      {
        label: '登录时间',
        prop: 'time',
        config: { formatter: '{y}-{m}-{d} {h}:{i}:{s}' }
      }
    ],
    config: {
      columnsSetting: false
    }
  })
</script>
