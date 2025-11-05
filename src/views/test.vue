<template>
  <div>
    <ak-form
      ref="formNameEl"
      :operate-type="formType"
      :data="formData"
      request-url=""
      submit-url=""
      :before="beforeSubmit"
    />
  </div>
</template>
<script setup lang="ts">
  import {ref, computed, provide} from 'vue'

  const formNameEl = ref()
  const formData = ref({
    list: [{
      type: "expand-user",
      control: {modelValue: ""},
      config: {},
      name: "expand-user1757547166458",
      formItem: {label: "选择用户"}
    }], form: {size: "default"}, config: {submitCancel: true}
  })
  // todo 存在编辑时，可选add、edit、detail、design、search，默认add
  const formType = computed(() => {
    return 'add'
  })


  // 表单提交时参数处理
  const beforeSubmit = (params, type, obj) => {
    // params请求的参数，可根据type作判断，对params作修改后return回去
    // 需要将params参数return
    return params;
  }
</script>