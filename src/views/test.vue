<template>
  <div>
    <ak-form
      ref="formNameEl"
      :type="formType"
      :formData="formData"
      requestUrl=""
      addUrl=""
      editUrl=""
      :beforeSubmit="beforeSubmit"
    />
  </div>
</template>
<script setup lang="ts">
  import { ref, computed, provide } from 'vue'
  const formNameEl = ref()
  const formData = ref({
    list: [
      {
        type: 'upload',
        control: { modelValue: [] },
        config: {},
        name: 'upload',
        item: { label: '图片/文件' }
      }
    ],
    form: {
      size: 'default',
      labelWidth: '120px',
      class: 'form-row-2',
      name: 'components'
    },
    config: {},
    events: {}
  })
  // todo 存在编辑时，可根据路由等参数设置当前表单模式　1新增　2编辑
  const formType = computed(() => {
    return 1
  })

  // 表单提交时参数处理
  const beforeSubmit = (params) => {
    //　如编辑时添加参数
    //  params.id='xxx'
    return params
  }
</script>
