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
import { ref, computed } from 'vue'

const formNameEl = ref()
const formData = ref({
  list: [

      {
    type: 'inputSlot',
    control: { modelValue: '', teleported: true, style: { width: '200px' } },
    options: [{ label: '选项1', value: '1' }, { label: '选项2', value: '2' }],
    config: { optionsType: 0 },
    name: 'pre',
    formItem: { label: '下拉选择框' }
  }, {
    type: 'input',
    control: { modelValue: '' },
    config: { append: 'key:pre' },
    name: 'input1750320588429',
    formItem: { label: '单行文本' }
  }], form: { size: 'default' }, config: { submitCancel: true }
})
// todo 存在编辑时，可选add、edit、detail、design、search，默认add
const formType = computed(() => {
  return 'add'
})

// 表单提交时参数处理
const beforeSubmit = (params, type, obj) => {
  // params请求的参数，可根据type作判断，对params作修改后return回去
  // 需要将params参数return
  return params
}

</script>
