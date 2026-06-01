<!-- Created by 337547038 weixin:337547038 -->
<template>
  <el-dialog
    v-model="visible"
    :append-to-body="true"
    :before-close="beforeClose"
    :destroy-on-close="true"
    title="选择上传文件"
    class="select-upload-dialog"
    width="1000px"
  >
    <div class="upload-content">
      <group-list @change-group="changeGroup" />
      <div class="upload-list">
        <my-upload
          v-if="showUploadList"
          :accept="config.accept"
          :auto="config.auto"
          :group-id="currentGroupId"
        />
        <div
          v-else
          class="upload-header"
        >
          <div class="control">
            <div class="btn">
              <el-button
                type="primary"
                @click="showUploadList = true"
              >
                本地上传
              </el-button>
            </div>
            <div class="search">
              <el-input
                v-model="searchKeyword"
                class="input-with-select"
                placeholder="请输入名称"
              >
                <template #append>
                  <el-button
                    icon="search"
                    @click="getFileList"
                  />
                </template>
              </el-input>
            </div>
            <div class="grid-type">
              <i
                :class="{ active: listType === 'table' }"
                class="icon-list"
                @click="listType = 'table'"
              />
              <i
                :class="{ active: listType === 'grid' }"
                class="icon-grid"
                @click="listType = 'grid'"
              />
            </div>
          </div>
          <table-list
            ref="tableListEl"
            v-model="checkList"
            :limit="configLimit"
            :list-type="listType"
            :group-id="currentGroupId"
          />
        </div>
      </div>
      <checked-list
        v-if="configLimit > 1 && !showUploadList"
        v-model="checkList"
        :limit="configLimit"
      />
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button
          v-if="showUploadList"
          type="primary"
          @click="backListClick"
        >
          返回列表
        </el-button>
        <template v-else>
          <el-button @click="cancelClick">
            取 消
          </el-button>
          <el-button
            type="primary"
            @click="confirmClick"
          >
            确 定
          </el-button>
        </template>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import { ref, watch, onBeforeUnmount, computed } from 'vue'
  import GroupList from './group.vue'
  import MyUpload from './upload.vue'
  import TableList from './tableList.vue'
  import CheckedList from './checkedList.vue'
  import type { FileList } from './types'

  const props = withDefaults(
    defineProps<{
      config?: { [key: string]: any }
      defaultValue?: FileList[]
    }>(),
    {
      config: () => {
        return {}
      },
      defaultValue: () => {
        return []
      }
    }
  )

  const emits = defineEmits<{
    (e: 'confirm', val: FileList): void
  }>()

  const tableListEl = ref()
  const currentGroupId = ref('')
  const visible = ref(false)
  const searchKeyword = ref('')
  const checkList = ref([]) // 勾选列表
  const showUploadList = ref(false) // 显示上传列表
  const listType = ref('table') // 已上传文件显示列表类型 table grid

  const unWatch = watch(
    () => props.defaultValue,
    (val: FileList[]) => {
      checkList.value = val
    },
    { deep: true, immediate: true }
  )
  const configLimit = computed(() => {
    if (props.config.limit) {
      return parseInt(props.config.limit)
    }
    return 1
  })
  const getFileList = () => {
    tableListEl.value.getList({
      id: currentGroupId.value,
      keyword: searchKeyword.value
    })
  }
  const beforeClose = () => {
    cancelClick()
  }
  const backListClick = () => {
    showUploadList.value = false
    getFileList()
  }
  const cancelClick = () => {
    visible.value = false
  }
  const confirmClick = () => {
    cancelClick()
    emits('confirm', checkList.value)
  }

  const open = () => {
    visible.value = true
    // 重置
    listType.value = 'table'
  }
  const changeGroup = (id: string | number) => {
    if (showUploadList.value) {
      return false
    }
    currentGroupId.value = id
    getFileList()
  }
  onBeforeUnmount(() => {
    unWatch()
  })
  defineExpose({ open })
</script>
