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
        type: 'checkbox',
        control: { modelValue: [] },
        options: [],
        config: {
          type: 'async',
          source: 1,
          request: 'get',
          sourceFun: 'fwfwfwef'
        },
        name: 'checkbox1680498538664',
        item: { label: '多选框组' }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: 'default',
      name: 'form1680492950296'
    },
    config: {}
  })
  // todo 存在编辑时，可根据路由等参数设置当前表单模式　1新增　2编辑
  const formType = computed(() => {
    return 1
  })

  // todo 多选框组设置选项值
  const checkbox1680498538664Option = ref([{ label: '选项1', value: '1' }])
  provide('fwfwfwef', checkbox1680498538664Option)

  // 表单提交时参数处理
  const beforeSubmit = (params: any) => {
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
