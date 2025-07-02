<template>
  <div class="upload-group">
    <div
      v-loading="loading"
      class="group-list"
    >
      <ul>
        <li
          :class="{ active: groupId === '' }"
          @click="groupClick({ id: '' })"
        >
          <i class="icon-folder" />
          <span class="group-name">全部</span>
        </li>
        <li
          v-for="(item, index) in groupList"
          :key="item.id"
          :class="{ active: groupId === item.id }"
        >
          <i class="icon-folder" />
          <template v-if="item.__isEdit">
            <input
              v-model="item.__newName"
              class="group-name"
              @keyup="groupNameKeyUp(item, $event)"
            >
            <i
              class="icon-save"
              title="保存"
              @click.stop="groupSave(item)"
            />
          </template>
          <template v-else>
            <span
              :title="item.name"
              class="group-name"
              @click="groupClick(item)"
            >{{ item.name }}</span>
            <i
              class="icon-edit"
              title="编辑"
              @click.stop="groupEdit(item)"
            />
          </template>
          <el-popconfirm
            title="确定删除该分组?"
            cancel-button-text="取消"
            confirm-button-text="确认"
            @confirm="groupDel(item.id, index)"
          >
            <template #reference>
              <i
                class="icon-del"
                title="删除"
              />
            </template>
          </el-popconfirm>
        </li>
      </ul>
    </div>
    <div class="group-btn">
      <div
        v-if="isAddGroup"
        class="add-group"
      >
        <el-input
          v-model="groupName"
          placeholder="分组名称"
          size="small"
        />
        <el-button
          size="small"
          type="primary"
          @click="addGroupClick"
        >
          提交
        </el-button>
      </div>
      <div
        v-else
        class="btn"
      >
        <el-button
          size="small"
          @click="showAddGroup"
        >
          添加分组
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { getRequest } from '@/api'

const emits = defineEmits<{
  (e: 'changeGroup', id: string | number): void
}>()

const isAddGroup = ref(false)
const loading = ref(false)
const groupName = ref('')
const groupList = ref([])
const groupId = ref('')

const groupClick = (obj: any) => {
  groupId.value = obj.id
  emits('changeGroup', obj.id)
  console.log('groupClick', obj.id)
}
const showAddGroup = () => {
  isAddGroup.value = true
  groupName.value = ''
}
const addGroupClick = () => {
  if (!groupName.value) {
    ElMessage({ type: 'error', message: '请输入分组名称' })
  } else {
    getRequest('chunkUploadAddGroup', { name: groupName.value })
        .then(() => {
          ElMessage({ type: 'success', message: '添加成功' })
          isAddGroup.value = false
          getList()
        })
        .catch((res: { message: any }) => {
          ElMessage({ type: 'error', message: res.message })
        })
  }
}
const groupSave = (obj: { [key: string]: any }) => {
  getRequest('chunkUploadEditGroup', { id: obj.id, name: obj.__newName })
      .then(() => {
        ElMessage({ type: 'success', message: '修改成功' })
        getList()
      })
      .catch((res: { message: any }) => {
        ElMessage({ type: 'error', message: res.message })
      })
}
const groupDel = (id: string | number, index: number) => {
  getRequest('chunkUploadDelGroup', { id: id })
      .then(() => {
        ElMessage({ type: 'success', message: '删除成功' })
        groupList.value.splice(index, 1) // 直接在数据中删除，暂不从接口刷新数据
      })
      .catch((res: { message: string }) => {
        ElMessage({ type: 'error', message: res.message })
      })
}
const groupEdit = (obj: { [key: string]: any }) => {
  obj.__isEdit = true
  obj.__newName = obj.name
}
const groupNameKeyUp = (obj: { [key: string]: any }, evt: KeyboardEvent) => {
  if (evt.key === 'Escape') {
    delete obj.__isEdit
    delete obj.__newName
  }
}
const getList = () => {
  // 每次打开弹窗都会请求，可根据实际情况做缓存
  getRequest('chunkUploadGroupList', {}).then((res: { data: any }) => {
    groupList.value = res.data?.list || []
  })
}
getList()
</script>
