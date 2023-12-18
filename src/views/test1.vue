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
    />
  </div>
</template>
<route>
{meta:{
layout:'hidden'}}
</route>
<script setup lang="ts">
  import { ref, computed, provide } from 'vue'

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
    ],
    form: { size: 'default' },
    config: { submitCancel: true },
    events: {
      beforeRequest: (data, route) => {
        // data经过处理后返回
        console.log('beforeRequest', data)
        return data
      },
      /*beforeSubmit: (data, route) => {
        // data经过处理后返回
        data.yyyyy = 'yyyyy'
        console.log('beforeRequest', data)
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

  // 表单提交时参数处理
  const beforeSubmit = (params: any) => {
    // 如编辑时添加参数
    //  params.id='xxx'
    console.log('beforeRequest', params)
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
