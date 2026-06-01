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
        type: "select",
        control:
          {
            modelValue: "",
            teleported: true
          },
        options: [],
        formItem:
          {
            label: "下拉选择框"
          },
        name: "select1780307765399",
        optionsType: 1,
        method: "get",
        optionsFun: "demo/select"
      },
      {
        type: "select",
        control:
          {
            modelValue: "",
            teleported: true
          },
        options: [],
        formItem:
          {
            label: "下拉选择框"
          },
        name: "select1780307783476",
        optionsType: 1,
        method: "post",
        optionsFun: "demo/dict"
      }],
    config:
      {
        submitCancel: true
      }
  })
  // 表单提交时可附加的参数
  const params = ref({})
  // 表单操作类型，如没有设置添加和编辑页的禁用隐藏等设置可不传
  const formType = computed(() => {
    return 'add'
  })

  // 获取表单数据值或是提交表单前事件，可使用return false阻止操作．other.type可选fetch/submit
  const before = (params: Record<string, any>, other: string) => {
    console.log('before', params, other)
    return params
  }
  // 获取表单数据或提交表单请求后事件,type可选fetch/submit
  const after = (res: any, success: boolean, type: string) => {
    if (success && type === 'submit') {
      console.log('after', res, success, type)
    }
  }
</script>
