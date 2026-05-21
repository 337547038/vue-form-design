<!-- Created by weiXin:337547038 -->
<template>
  <div>
    <ak-form
      ref="formRef"
      :data="formData"
      :operate-type="formType"
      request-url=""
      submit-url=""
      :before="before"
      :params="params"
      :after="after"
    />
  </div>
</template>
<script setup lang="ts">
  import {ref, computed} from 'vue'

  const formData = ref({
    list: [
      {
        type: "inputSlot",
        control:
          {
            modelValue: "",
            teleported: true,
            filterable: true,
            remote: false
          },
        options: [{label:'label',value:'value'}],
        formItem:
          {
            label: "下拉选择框"
          },
        name: "inputSlot1779265329663",
        optionsType: 1,
        method: "post",
        optionsFun: "demo/dict"
      },
      {
        type: "select",
        control:
          {
            modelValue: "",
            teleported: true,
            filterable: true,
            remote: true
          },
        options: [{label:'label',value:'value'}],
        formItem:
          {
            label: "下拉选择框"
          },
        name: "select1779265385774",
        addAll: "全部",
        method: "post",
        optionsType: 1,
        optionsFun: "demo/dict"
      },
      {
        type: "input",
        control:
          {
            modelValue: ""
          },
        formItem:
          {
            label: "单行文本"
          },
        name: "input1",
        prepend: "key:inputSlot1779265329663"
      }],
    config:
      {
        submitCancel: true,
        style:'body{color:blue}'
      }
  })
  // 表单提交时可附加的参数
  const params = ref({})
  // 表单操作类型，如没有设置添加和编辑页的禁用隐藏等设置可不传
  const formType = computed(() => {
    return 'add'
  })

  // 获取表单数据值或是提交表单前事件，可使用return false阻止操作．type可选fetch/submit
  const before = (params: Record<string, any>, type: string) => {
    console.log('before', params, type)
    return params
  }
  // 获取表单数据或提交表单请求后事件,type可选fetch/submit
  const after = (res: any, success: boolean, type: string) => {
    if (success && type === 'submit') {
      console.log('after', res, success, type)
    }
  }
</script>
