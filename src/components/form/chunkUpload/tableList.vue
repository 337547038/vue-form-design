<!-- Created by 337547038 weixin:337547038 -->
<template>
  <template v-if="tableData.length">
    <div
      v-if="listType === 'table'"
      class="list-table"
    >
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column label="文件名">
          <template #default="scope">
            <el-checkbox
              v-if="limit > 1"
              :disabled="checkboxDisabled(scope.row.fileUrl)"
              :model-value="checkedListCheckbox.includes(scope.row.fileUrl)"
              :value="scope.row.fileUrl"
              @change="checkboxChange(scope.row)"
            >
              {{ scope.row.fileName }}
            </el-checkbox>
            <el-radio
              v-else
              :model-value="checkedListCheckbox[0]"
              :label="scope.row.fileUrl"
              @change="radioChange(scope.row)"
            >
              {{ scope.row.fileName }}
            </el-radio>
          </template>
        </el-table-column>
        <el-table-column
          label="上传时间"
          prop="creatTime"
          width="170"
        >
          <template #default="{row}">
            {{ dateFormatting(row.creatTime) }}
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div
      v-if="listType === 'grid'"
      class="list-grid"
    >
      <ul>
        <li
          v-for="item in tableData"
          :key="item.id"
          @click="gridCheckClick(item)"
        >
          <i
            v-if="checkedListCheckbox.includes(item.fileUrl)"
            class="icon-checkbox"
          />
          <img
            v-if="fileIsImg(item.fileUrl)"
            :src="`/api${item.fileUrl}`"
            alt=""
            width="100px"
            height="75px"
          >
          <i
            v-else
            class="other icon-help"
          >无预览</i>
          <span :title="item.fileName">{{ item.fileName }}</span>
        </li>
      </ul>
    </div>
  </template>
  <div
    v-else
    class="empty"
  >
    <i class="icon-empty" />暂无数据
  </div>
  <div
    v-if="total > pageSize"
    class="pages"
  >
    <el-pagination
      v-model:page-size="pageSize"
      v-model:current-page="pageNum"
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="getList"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, watch, computed, onBeforeUnmount } from 'vue'
  import type { FileList } from './types'
  import { getRequest } from '@/api'
  import { dateFormatting } from '@/utils'

  const props = withDefaults(
    defineProps<{
      listType: string
      modelValue?: FileList[]
      limit?: number
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
  const getList = (obj = {}) => {
    getRequest('chunkUploadFileList', { query: { groupId: obj.id } }).then(
      (res: { data: any }) => {
        tableData.value = res.data?.list || []
      }
    )
  }
  getList()
  onBeforeUnmount(() => {
    unWatch()
  })
  defineExpose({ getList })
</script>
