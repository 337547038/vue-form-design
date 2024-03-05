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
layout:'hidden'}}
</route>
<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  const formNameEl = ref()
  const formData = ref({
    list: [
      {
        type: 'upload',
        control: {
          modelValue: ''
        },
        config: {},
        name: 'upload1696846841462',
        formItem: {
          label: '图片/文件'
        }
      },
      {
        type: 'chunkUpload',
        control: { modelValue: '', disabled: false },
        config: {
          showType: 'input',
          btnText: '',
          limit: 2,
          auto: true
        },
        name: 'selectUpload1',
        formItem: { label: '选择上传' }
      }
    ],
    form: { size: 'default' },
    config: {}
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
  onMounted(() => {
    formNameEl.value.setValue({ selectUpload1: '456.jpg,http://www.jpg' })
  })
</script>
