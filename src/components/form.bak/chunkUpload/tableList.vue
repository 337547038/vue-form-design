<!-- Created by 337547038 weixin:337547038 -->
<template>
  <template v-if="tableData.length">
    <div v-if="listType === 'table'" class="list-table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="文件名">
          <template v-slot="scope">
            <el-checkbox
              v-if="limit > 1"
              :disabled="checkboxDisabled(scope.row.fileUrl)"
              :model-value="checkedListCheckbox.includes(scope.row.fileUrl)"
              :value="scope.row.fileUrl"
              @change="checkboxChange(scope.row)"
              >{{ scope.row.fileName }}</el-checkbox
            >
            <el-radio
              v-else
              :model-value="checkedListCheckbox[0]"
              :label="scope.row.fileUrl"
              @change="radioChange(scope.row)"
              >{{ scope.row.fileName }}
            </el-radio>
          </template>
        </el-table-column>
        <el-table-column label="上传时间" prop="createTime" width="170" />
      </el-table>
    </div>
    <div v-if="listType === 'grid'" class="list-grid">
      <ul>
        <li
          v-for="item in tableData"
          :key="item.id"
          @click="gridCheckClick(item)"
        >
          <i
            class="icon-checkbox"
            v-if="checkedListCheckbox.includes(item.fileUrl)"
          ></i>
          <img v-if="fileIsImg(item.fileUrl)" :src="item.fileUrl" alt="" />
          <i v-else class="other icon-help">无预览</i>
          <span :title="item.fileName">{{ item.fileName }}</span>
        </li>
      </ul>
    </div>
  </template>
  <div class="empty" v-else><i class="icon-empty"></i>暂无数据</div>
  <div class="pages" v-if="total > pageSize">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      v-model:page-size="pageSize"
      v-model:current-page="pageNum"
      @current-change="getList"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, watch, computed, onBeforeUnmount } from 'vue'
  import type { FileList } from './types'
  import { getRequest } from '@/api'

  const props = withDefaults(
    defineProps<{
      listType: string
      modelValue: FileList[]
      limit: number
      groupId: String | Number
    }>(),
    {
      modelValue: () => {
        return []
      },
      limit: 0
    }
  )
  const emits = defineEmits<{
    (e: 'checkedChange', val: any): void
    (e: 'update:modelValue', val: any): void
  }>()

  const tableData = ref([])
  const checkedList = ref([])
  const pageSize = ref(20)
  const pageNum = ref(1)
  const total = ref(0)

  const unWatch = watch(
    () => props.modelValue,
    (val: FileList[]) => {
      checkedList.value = val
    },
    { deep: true, immediate: true }
  )

  const checkedListCheckbox = computed(() => {
    return checkedList.value.map((item: { fileUrl: any }) => item.fileUrl)
  })
  // 表格勾选
  const radioChange = (row: any) => {
    checkedList.value = [row]
    emits('update:modelValue', [row])
  }
  const checkboxChange = (row: FileList) => {
    const index = checkedListCheckbox.value.indexOf(row.fileUrl)
    if (index === -1) {
      checkedList.value.push(row)
    } else {
      checkedList.value.splice(index, 1)
    }
    emits('update:modelValue', checkedList.value)
  }
  const checkboxDisabled = (fileUrl: string) => {
    if (checkedList.value.length >= props.limit) {
      return !checkedListCheckbox.value.includes(fileUrl)
    }
    return false
  }
  const gridCheckClick = (row: FileList) => {
    if (props.limit > 1) {
      if (checkboxDisabled(row.fileUrl)) {
        return
      } else {
        checkboxChange(row)
      }
    } else {
      radioChange(row)
    }
  }
  const fileIsImg = (url: string) => {
    const extension = url.split('.')?.pop()?.toLowerCase()
    return ['jpg', 'gif', 'png', 'jpeg', 'webp'].includes(extension as string)
  }
  const getList = () => {
    getRequest('chunkUploadFileList', { groupId: props.groupId }).then(
      (res: { data: any }) => {
        tableData.value = res.data
      }
    )
  }
  getList()
  onBeforeUnmount(() => {
    unWatch()
  })
  defineExpose({ getList })
</script>
