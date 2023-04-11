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
        type: 'expand-user',
        control: { modelValue: '' },
        config: {},
        name: 'expand-user1681198237593',
        item: { label: '选择用户' }
      }
    ],
    form: { size: 'default' },
    config: {}
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
  // 表单组件值改变事件
  /*provide('AKControlChange', ({key, value}) => {
     console.log(key)
     console.log(value)
  })*/
</script>
