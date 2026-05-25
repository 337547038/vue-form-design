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
        type: "input",
        control:
          {
            modelValue: ""
          },
        formItem:
          {
            label: "单行文本"
          },
        name: "input1779674360667"
      },
      {
        type: "select",
        control:
          {
            modelValue: "",
            teleported: true
          },
        options: [
          {
            label: "男",
            value: "1"
          },
          {
            label: "女",
            value: "2"
          }],
        formItem:
          {
            label: "下拉选择框"
          },
        name: "select1779674362055",
        optionsType: 0
      },
      {
        type: "button",
        control:
          {
            label: "保存",
            key: "reset"
          }
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
