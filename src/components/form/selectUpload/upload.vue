<!-- Created by 337547038 weixin:337547038 -->
<template>
  <label class="split-upload-file" @dragover="fileDragOver" @drop="fileDrop">
    <input
      ref="inputEl"
      style="display: none"
      type="file"
      multiple="multiple"
      :accept="accept"
      @change="onFileChange"
    />
    <i class="icon-upload"></i>
    <span>将文件拖放到此处以上传或<b>选择文件</b></span>
  </label>
  <div class="split-upload-list">
    <div
      class="split-item"
      v-for="(item, index) in tempFileList"
      :key="item.name"
    >
      <img :src="item.src" v-if="item.src" alt="" />
      <i v-else class="icon-apply"></i>
      <span class="name">{{ item.name }}</span>
      <span class="size">{{ item.size }}</span>
      <span class="progress">{{ getStatusProgress(item) }}</span>
      <span
        class="speed-time"
        v-if="(item.status === 1) & item.speed && item.remainingTime"
        >{{ item.speed }}/s {{ item.remainingTime }}</span
      >
      <i
        class="icon icon-pause"
        v-show="item.status === 1"
        @click="pauseClick(item)"
      ></i>
      <i
        class="icon icon-refresh"
        v-show="item.status === 3"
        @click="startUpload(item)"
      ></i>
      <i
        class="icon icon-play"
        v-show="item.status === 0"
        @click="startUpload(item)"
      ></i>
      <i class="icon icon-del" @click="delUploadClick(index)"></i>
      <span
        class="progress-bar"
        :style="{ width: `${item.progress}%` }"
        :class="[`status-${item.status}`]"
      ></span>
    </div>
    <div class="upload-btn" v-if="!auto && tempFileList.length">
      <el-button type="primary" @click="confirmUpload">确认上传</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import SparkMD5 from 'spark-md5'
  import { getRequest } from '@/api'
  import * as axios from 'axios'
  import { throttle } from '@/utils'
  import type { TempFileList } from './types'

  const props = withDefaults(
    defineProps<{
      auto?: Boolean // 选择文件后自动上传
      accept?: String
      groupId?: String | Number
    }>(),
    {}
  )
  /*const emits = defineEmits<{
    (e: 'update:modelValue', val: any): void
  }>()*/

  const tempFileList = ref<TempFileList[]>([])
  const startTime = ref()
  const chunkSize = 20 * 1024 * 1024 // 每片大小
  const maxParallelUploads = 3 //同时上传并发数

  const getStatusProgress = (obj: TempFileList) => {
    const statusDict = {
      0: '等待上传',
      1: '正在上传',
      2: '上传失败',
      3: '暂停上传',
      4: '上传成功',
      5: '正在处理' //计算md5
    }
    if (obj.status === 1) {
      return obj.progress + '%'
    } else {
      return statusDict[obj.status]
    }
  }
  /**
   * 手动点击确认上传
   */
  const confirmUpload = async () => {
    /*for (let i = 0; i < tempFileList.value.length; i++) {
      const obj = tempFileList.value[i]
      if (obj.status === 0) {
        await axiosUpload(obj)
      }
    }*/
    const queue = tempFileList.value.filter(
      (item: TempFileList) => item.status === 0
    ) // 创建一个文件队列
    const promises = []

    for (const file of queue) {
      // 如果当前运行的任务数达到最大并行上传数，则等待一个任务完成
      while (promises.length >= maxParallelUploads) {
        await Promise.race(promises) // 等待最先完成的一个任务
        promises.shift() // 移除已完成的任务
      }
      // 添加新的上传任务到promises数组
      promises.push(axiosUpload(file))
    }
    // 等待剩余的任务完成
    await Promise.all(promises)
  }
  const onFileChange = async (evt: any, type: string) => {
    let file = evt
    if (type !== 'drag') {
      file = evt.target && evt.target.files
    }
    if (!file || !file?.length) {
      return
    }
    for (let i = 0; i < file.length; i++) {
      const data = file[i]
      let src = ''
      if (/image\/\w+/.test(data.type)) {
        src = getObjectURL(data)
      }
      tempFileList.value.push({
        size: unitFormat(data.size), // 大小
        progress: 0, // 上传进度
        speed: '', // 上传速度
        remainingTime: '', //剩余时间预估
        status: 0, //上传状态
        name: data.name,
        src: src, // 预览用的src
        type: data.type,
        file: data,
        source: null // 用于取消上传
      })
    }
    if (props.auto) {
      await confirmUpload()
    }
  }
  let cancelToken
  const axiosUpload = async (currentFile: TempFileList) => {
    const file: File = currentFile.file
    const chunkCount = Math.ceil(file.size / chunkSize) // 总片数
    currentFile.status = 5 // 计算md5
    const fileMd5 = await getFileMD5(file, chunkSize, chunkCount)
    const source = axios.CancelToken.source()
    cancelToken = source.token
    currentFile.source = source
    startTime.value = Date.now()
    for (let i = 0; i < chunkCount; i++) {
      const { chunk } = getChunkInfo(file, i, chunkSize)
      const params = {
        chunkNumber: i + 1,
        chunkSize: chunkSize, // 每片限制
        currentChunkSize: chunk.size, // 当前分片大小
        totalSize: file.size, // 文件总大小
        identifier: fileMd5, // md5值
        filename: file.name, // 文件名
        totalChunks: chunkCount, // 总片数
        file: chunk, // 每片文件
        groupId: props.groupId //上传到指定分组
      }
      await uploadChunk(params, currentFile)
    }
    const endTime = Date.now()
    console.log(`程序运行时间: ${(endTime - startTime.value) / 1000}秒`)
  }

  const uploadChunk = (params: any, currentFile: TempFileList) => {
    return new Promise((resolve, reject) => {
      const formData = new FormData()
      //formData.append('file', chunk, file.name)
      for (const i in params) {
        formData.append(i, params[i])
      }
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 0, // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
        onUploadProgress: (progressEvent: any) => {
          //这个progressEvent.total!=file.size两者有小偏差。结果存在大于100的可能
          const hasProgress =
            params.chunkSize * (params.chunkNumber - 1) + progressEvent.loaded
          const result = (hasProgress / params.totalSize) * 100
          currentFile.progress = Number(result > 100 ? 100 : result.toFixed(2))
          getSpeedTime(hasProgress, params.totalSize, currentFile)
        },
        cancelToken
      }
      currentFile.status = 1 // 正在上传
      getRequest('selectUpload', formData, config)
        .then(() => {
          resolve()
        })
        .catch(res => {
          switch (res.code) {
            case 2:
              //拦截处设置了只有code=1才正常
              currentFile.status = 4 // 上传成功
              resolve()
              break
            case 'ERR_CANCELED':
              // 手动取消上传
              currentFile.status = 3
              console.log('cancel ..')
              reject(res)
              break
            default:
              currentFile.status = 2
              reject(res)
          }
        })
    })
  }

  const getSpeedTime = throttle(
    (hasProgress: number, totalSize: number, currentFile: TempFileList) => {
      // 上传速度：已上传/时间
      const endTime = Date.now()
      const speed = hasProgress / ((endTime - startTime.value) / 1000)
      currentFile.speed = unitFormat(speed)
      // 剩余时间=没上传的/速度
      const remainingTime = (totalSize - hasProgress) / speed
      const minutes = Math.floor(remainingTime / 60)
      const seconds = Math.floor(remainingTime - minutes * 60)
      currentFile.remainingTime = minutes
        ? minutes + '分'
        : '' + seconds
        ? seconds + '秒'
        : ''
    },
    1000
  )

  const pauseClick = (item: TempFileList) => {
    item.source && item.source.cancel('cancel')
  }
  const startUpload = (item: TempFileList) => {
    item.source = null
    axiosUpload(item)
  }
  const delUploadClick = (index: number) => {
    const source = tempFileList.value[index].source
    if (source) {
      source.cancel('del')
    }
    tempFileList.value.splice(index, 1)
  }
  const fileDragOver = (e: any) => {
    e.preventDefault()
  }
  const fileDrop = (e: any) => {
    e.preventDefault()
    onFileChange(e.dataTransfer.files, 'drag')
  }
  /*******一些转换工具类****************/
  const unitFormat = (size: number) => {
    if (size === 0) return '0B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(size) / Math.log(k))
    return (size / Math.pow(k, i)).toPrecision(3) + sizes[i]
  }
  const getObjectURL = (file: File) => {
    let url = null
    if (window.URL !== undefined) {
      url = window.URL.createObjectURL(file)
    } else if (window.webkitURL !== undefined) {
      url = window.webkitURL.createObjectURL(file)
    }
    return url
  }
  const getChunkInfo = (
    file: File,
    currentChunk: number,
    chunkSize: number
  ) => {
    const start = currentChunk * chunkSize
    const end = Math.min(file.size, start + chunkSize)
    const chunk = file.slice(start, end)
    return { start, end, chunk }
  }

  /**
   * 获取文件md5值
   * @param file 文件
   * @param chunkSize 每块多大
   * @param chunkCount 分多少块
   */
  const getFileMD5 = (file: File, chunkSize: number, chunkCount: number) => {
    return new Promise((resolve, reject) => {
      let currentChunk = 0
      const startTime = new Date().getTime()
      const spark = new SparkMD5.ArrayBuffer()
      const fileReader = new FileReader()
      //fileReader.readAsBinaryString(file)
      loadNextChunk()
      fileReader.onload = function (e) {
        spark.append(e.target.result)
        if (currentChunk < chunkCount) {
          currentChunk++
          loadNextChunk()
        } else {
          const md5 = spark.end()
          console.log(
            `MD5计算完毕：${md5}，耗时：${new Date().getTime() - startTime} ms`
          )
          resolve(md5)
        }
      }
      fileReader.onerror = function () {
        reject('文件读取错误')
      }

      function loadNextChunk() {
        const { chunk } = getChunkInfo(file, currentChunk, chunkSize)
        fileReader.readAsArrayBuffer(chunk)
      }
    })
  }
</script>
