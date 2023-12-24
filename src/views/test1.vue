<template>
  <div>
    <ak-form
      ref="formNameEl"
      :type="formType"
      :data="formData"
      request-url=""
      submit-url="test/t"
      edit-url=""
      :before-submit="beforeSubmit"
    >
      <childTable v-model="childList" />
    </ak-form>
  </div>
</template>
<route>
{meta:{
layout:'hidden'}}
</route>
<script setup lang="ts">
  import { ref, computed, provide, markRaw } from 'vue'
  import childTable from './design/datasource/table.vue'

  const formNameEl = ref()
  const formData = ref({
    list: [
      {
        type: 'input',
        control: { modelValue: '' },
        config: {},
        name: 'input1702736142369',
        formItem: { label: '单行文本' }
      }
      /*{
        type: 'component',
        control: {
          modelValue: ''
        },
        config: {
          componentName: markRaw(childTable)
        },
        name: 'component1703137043652',
        formItem: {
          label: '自定义组件',
          hideLabel: true
        }
      }*/
    ],
    form: { size: 'default' },
    config: {
      //submitCancel: true
    },
    events: {
      beforeFetch: (data, route) => {
        // data经过处理后返回
        // console.log('beforeFetch', data)
        return data
      },
      /*beforeSubmit: (data, route) => {
        // data经过处理后返回
        data.yyyyy = 'yyyyy'
        console.log('beforeFetch', data)
        return data
      }*/
      beforeSubmit: (data, route) => {
        return 'beforeSubmitTest'
      },
      afterSubmit: (type, res) => {
        console.log('123456')
        console.log(type, res)
        return false
      },
      change: (key, model) => {
        console.log(key)
      }
    }
  })
  // todo 存在编辑时，可根据路由等参数设置当前表单模式 1新增 2编辑
  const formType = computed(() => {
    return 1
  })
  const childList = ref([{ label: '1', name: '1', type: 'FLOAT' }])
  // 表单提交时参数处理
  const beforeSubmit = (params: any) => {
    // 如编辑时添加参数
    //  params.id='xxx'
    console.log('beforeFetch', params)
    params.xxxx = 'xxxx'
    /*const eventsBeforeSubmit = formData.value.events?.beforeSubmit
    if (typeof eventsBeforeSubmit === 'function') {
      params = eventsBeforeSubmit(params)
    } else if (eventsBeforeSubmit && typeof eventsBeforeSubmit === 'string') {
      return eventsBeforeSubmit
    }*/
    return params
  }
</script>
