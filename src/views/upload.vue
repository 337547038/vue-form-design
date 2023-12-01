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
  </div>
</template>
<route>
{meta:{
permissions:false,
layout:'hidden'}}
</route>
<script setup lang="ts">
  import { ref, computed, provide } from 'vue'
  const formNameEl = ref()
  const formData = ref({
    list: [
      {
        type: 'upload',
        control: { modelValue: '' },
        config: { btnText: '选择图片', tip: '' },
        name: 'upload1701351094616',
        formItem: { label: '图片/文件' }
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
</script>
