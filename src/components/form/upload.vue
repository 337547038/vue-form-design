<template>
  <el-upload
    class="upload-style"
    :action="uploadUrl"
    :http-request="httpRequest"
    v-bind="control"
    :file-list="fileList"
    :name="control.file || 'file'"
    :disabled="disabled"
    :class="{
      limit: control.limit <= fileList.length
    }"
    :on-error="uploadError"
    :on-success="uploadSuccess"
    :on-remove="uploadRemove"
    :headers="headers"
  >
    <el-button
      v-if="config?.btnText"
      type="primary"
    >
      {{ config?.btnText }}
    </el-button>
    <i
      v-else
      class="icon-plus"
    />
    <template
      v-if="config?.tip"
      #tip
    >
      <div class="el-upload__tip">
        {{ config?.tip }}
      </div>
    </template>
  </el-upload>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { getRequest, uploadUrl } from '@/api'
  import { ElMessage } from 'element-plus'
  const props = withDefaults(
    defineProps<{
      control: any
      disabled: boolean
      config: any
      modelValue: any
    }>(),
    {
      control: () => {
        return {}
      }
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', val: any): void
  }>()

  const httpRequest = (file: any) => {
    const params = new FormData()
    params.append(props.control.file || 'file', file.file)
    return getRequest('upload', params, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
  }
  const headers = ref({})
  const fileList = computed(() => {
    // const imgVal = formProps.value.model[props.data.name]
    const imgVal = props.modelValue
    if (imgVal && typeof imgVal === 'string') {
      const temp: any = []
      imgVal.split(',').forEach((item: string) => {
        temp.push({
          name: item,
          url: item
        })
      })
      return temp
    }
    return imgVal || [] // 这样可支持默认值为array([name:'',url:''这种形式])
  })
  const updateModel = (val: any) => {
    emits('update:modelValue', val)
  }
  const uploadError = (err: any, file: any, fileList: any) => {
    // console.log('uploadError')
    ElMessage.error(file.name + '上传失败')
    props.control?.onError(err, file, fileList)
  }
  const uploadSuccess = (response: any, uploadFile: any, uploadFiles: any) => {
    const oldList = []
    fileList.value.forEach((item: any) => {
      oldList.push(item.url)
    })
    oldList.push(response.path)
    updateModel(oldList.join(','))
    props.control.onSuccess
    && props.control.onSuccess(response, uploadFile, uploadFiles)
  }
  // 从列表移除
  const uploadRemove = (uploadFile: any, uploadFiles: any) => {
    const oldList: any = []
    fileList.value.forEach((item: any) => {
      if (item.url !== uploadFile.url) {
        oldList.push(item.url)
      }
    })
    updateModel(oldList.join(','))

    props.control.onRemove && props.control.onRemove(uploadFile, uploadFiles)
    // todo 需从服务端删除已上传图片时，这里需要发删除请求接口
  }
</script>
