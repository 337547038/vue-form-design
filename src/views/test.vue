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
  <el-button @click="testClick">
    test
  </el-button>

  <el-button @click="pageTest">
    pageTest
  </el-button>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { getRequest } from '@/api'

const formNameEl = ref()
const formData = ref({
  list: [{
    type: 'chunkUpload',
    control: { modelValue: '' },
    config: {},
    name: 'chunkUpload1750985450130',
    formItem: { label: '选择上传' }
  },
    {
      type: 'upload',
      control:
          {
            modelValue: ''
          },
      config:
          {
            btnText: '文件'
          },
      name: 'upload1751334251035',
      formItem:
          {
            label: '图片/文件'
          }
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

const testClick = () => {
  getRequest('upload/files/delete', { fileHash: 'b24ba6da9c158601889812565f590ce1' })
}
const pageTest = () => {
  getRequest('upload/files/list', { query: { userId: 1 } })
}
</script>
