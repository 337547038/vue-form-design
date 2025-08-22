<template>
  <div>
    <ak-form
      ref="formNameEl"
      :operate-type="formType"
      :data="formData"
      request-url=""
      submit-url=""
    />
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'

const formNameEl = ref()
const formData = ref({
  list: [{
    type: 'radio',
    control: { modelValue: '' },
    options: [{ label: '选项1', value: '1' }, { label: '选项2', value: '2' }, { label: '选项3', value: '3' }],
    config: { optionsType: 0 },
    name: 'radio1755789338673',
    formItem: { label: '单选框组' }
  }], form: { size: 'default' }, config: { submitCancel: true }
})
// todo 存在编辑时，可选add、edit、detail、design、search，默认add
const formType = computed(() => {
  return 'add'
})

</script>
