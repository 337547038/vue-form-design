<!-- Created by 337547038 选择上传图片 -->
<template>
  <el-dialog v-model="visible" width="800px" title="选择上传图片">
    <el-upload
      :action="uploadUrl"
      :on-success="uploadSuccess"
      :show-file-list="false"
    >
      <el-button type="primary">上传</el-button>
    </el-upload>
    <el-tabs v-model="tabsName">
      <el-tab-pane
        v-for="item in tabsList"
        :label="item"
        :name="item"
        :key="item"
      />
      <el-tab-pane label="上传" name="upload" />
    </el-tabs>
    <div class="img-list">
      <ul>
        <li v-for="item in imgList" :key="item" @click="selectImg(item)">
          <img :src="path + item" alt="" />
        </li>
      </ul>
      <p v-if="!imgList?.length">暂无相关素材资源</p>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
  import { ref, onMounted, nextTick, computed } from 'vue'
  import { uploadUrl } from '@/api'
  import fileJson from './fileJson.json'
  const emits = defineEmits<{
    (e: 'click', val: string, key?: string): void
  }>()
  const visible = ref(false)
  const openKey = ref()
  const tabsName = ref('bg')

  const tabsList = computed(() => {
    if (!fileJson) {
      return []
    }
    const temp = []
    for (const key in fileJson) {
      temp.push(key)
    }
    return temp
  })
  const imgList = computed(() => {
    // 上传选择卡的应为接口返回才行
    if (tabsName.value.name === 'upload') {
      return []
    } else {
      if (!fileJson) {
        return []
      }
      return (fileJson as any)[tabsName.value]
    }
  })
  const path = computed(() => {
    return `./static/screen/${tabsName.value}/`
  })
  const selectImg = (src: string) => {
    visible.value = false
    emits('click', path.value + src, openKey.value)
  }
  const uploadSuccess = (response: any) => {
    // 将新上传图片插入到上传tab，可根据实际上传情况作处理
    tabsName.value = 'upload'
    nextTick(() => {
      imgList.value.unshift(response.path)
    })
  }
  const open = (tabName?: string, key?: string) => {
    visible.value = true
    openKey.value = key
    if (tabName) {
      // 转到对应的选项卡，没有时默认第一个
      tabsName.value = tabName
    } else {
      tabsName.value = tabsList.value[0]
    }
  }
  defineExpose({
    open
  })
  onMounted(() => {})
</script>
<style lang="scss" scoped>
  .img-list {
    ul {
      display: flex;
      flex-wrap: wrap;
      max-height: 500px;
      overflow-y: auto;
    }
    li {
      width: 115px;
      height: 88px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #e0e0e0;
      border-radius: 3px;
      overflow: hidden;
      margin: 5px;
      img {
        display: block;
        cursor: pointer;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
</style>
