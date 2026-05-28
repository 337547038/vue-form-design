<template>
  <el-upload
    class="upload-style"
    :http-request="httpRequest"
    v-bind="data.control"
    :file-list="fileList"
    :name="data.control.file || 'file'"
    :disabled="disabled"
    :class="{
      limit: data.control.limit <= fileList.length
    }"
    :on-error="uploadError"
    :on-success="uploadSuccess"
    :on-remove="uploadRemove"
    :headers="headers"
  >
    <el-button
      v-if="data.btnText"
      type="primary"
    >
      {{ data.btnText }}
    </el-button>
    <i
      v-else
      class="icon-plus"
    />
    <template
      v-if="data.tip"
      #tip
    >
      <div class="el-upload__tip">
        {{ data.tip }}
      </div>
    </template>
  </el-upload>
</template>

<script setup lang="ts">
  import {computed, ref} from 'vue'
  import {getRequest} from '@/api'
  import type {Component} from "@/types/form";

  const props = withDefaults(
    defineProps<{
      data: Component
      disabled: boolean
    }>(),
    {
      /* control: () => {
        return {}
      } */
    }
  )
  const modelValue = defineModel<any>()

  const httpRequest = (file: any) => {
    const params = new FormData()
    params.append(props.data.control.file || 'file', file.file)
    const apiKey = props.data.control.action || 'upload'
    return getRequest(apiKey, params, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
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

  const uploadError = (err: any, file: any, fileList: any) => {
    props.control?.onError(err, file, fileList)
  }
  const uploadSuccess = (response: any, uploadFile: any, uploadFiles: any) => {
    const oldList = []
    fileList.value.forEach((item: any) => {
      oldList.push(item.url)
    })
    oldList.push(response.path)
    modelValue.value = oldList.join(',')
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
    modelValue.value = oldList.join(',')

    props.control.onRemove && props.control.onRemove(uploadFile, uploadFiles)
    // todo 需从服务端删除已上传图片时，这里需要发删除请求接口
  }
</script>
