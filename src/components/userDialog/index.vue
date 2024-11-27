!-- Created by 337547038 用户选择扩展组件-->
<template>
  <el-dialog
    v-model="visible"
    title="用户选择"
    :append-to-body="true"
    width="800px"
  >
    <div class="expand-user-dialog">
      <div class="sidebar-tree">
        <el-tree
          ref="treeEl"
          :data="treeData"
          node-key="id"
          :props="{ label: 'name', value: 'id' }"
          highlight-current
          @node-click="handleNodeClick"
        />
      </div>
      <div class="table-list">
        <div class="search">
          <el-input
            v-model="searchUserName"
            placeholder="请输入用户名"
          />
          <el-button
            type="primary"
            @click="searchClick"
          >
            查询
          </el-button>
          <el-button @click="resetClick">
            重置
          </el-button>
        </div>
        <div class="list">
          <el-table
            :data="tableData"
            style="width: 100%"
          >
            <el-table-column
              prop="userName"
              label="用户名"
            />
            <el-table-column
              prop="nickName"
              label="昵称"
            />
            <el-table-column
              label="操作"
              width="60px"
            >
              <template #default="{ row }">
                <el-button
                  circle
                  size="small"
                  @click="tableRowClick(row)"
                >
                  <el-icon><ArrowRight /></el-icon>
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="page">
            <el-pagination
              background
              layout="prev, pager, next"
              small
              hide-on-single-page
              :current-page="page.current"
              :total="page.total"
              :page-size="page.pageSize"
              @current-change="currentChange"
            />
          </div>
        </div>
      </div>
      <div class="has-select">
        <div class="total">
          <div>已选择：{{ checkData.length }}</div>
          <el-button
            type="danger"
            size="small"
            @click="delAllClick"
          >
            全部移除
          </el-button>
        </div>
        <el-table :data="checkData">
          <el-table-column label="用户名">
            <template #default="{ row }">
              {{ row.userName }}
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="60px"
          >
            <template #default="{ $index }">
              <el-button
                size="small"
                type="danger"
                @click="delRowClick($index)"
              >
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <template #footer>
      <div>
        <el-button @click="visible = false">
          取消
        </el-button>
        <el-button
          type="primary"
          @click="confirmClick"
        >
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import { ref, onMounted, reactive, nextTick } from 'vue'
  import { getRequest } from '@/api'
  import { flatToTree } from '@/utils/flatTree'

  const props = withDefaults(
    defineProps<{
      modelValue?: string // 用户id
      userName?: string // 用户名称
    }>(),
    {
      modelValue: '',
      userName: ''
    }
  )

  const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'userName', value: string): void
    (e: 'update:change', obj: any): void
  }>()
  const visible = ref(false)
  // 侧栏处理
  const treeEl = ref()
  const treeData = ref([])
  const department = ref()
  const handleNodeClick = (data: any) => {
    department.value = data.id
    getUserList()
  }
  const getTreeData = () => {
    if (treeData.value.length === 0) {
      getRequest('deptList', {}).then((res: any) => {
        treeData.value = flatToTree(res.data.list)
      })
    }
  }
  // 侧栏处理结束
  // table
  const searchUserName = ref()
  const tableData = ref([])
  const page = reactive({
    total: 0,
    current: 1,
    pageSize: 20
  })
  const searchClick = () => {
    getUserList()
  }
  const resetClick = () => {
    searchUserName.value = ''
    department.value = ''
    treeEl.value.setCurrentKey(null)
    getUserList()
  }
  const getUserList = () => {
    const params = {
      extend: {
        pageNum: page.current,
        pageSize: page.pageSize
      },
      query: {
        name: searchUserName.value,
        department: department.value
      }
    }
    getRequest('userList', params).then((res: any) => {
      tableData.value = res.data.list
    })
  }
  const currentChange = (current: number) => {
    page.current = current
    getUserList()
  }
  const tableRowClick = (row: any) => {
    const has = checkData.value.filter((item: any) => item.id === row.id)
    if (has?.length === 0) {
      // 没有数据
      checkData.value.push(row)
    }
  }
  // 已选
  const checkData = ref([])
  const delRowClick = (index: number) => {
    checkData.value.splice(index, 1)
  }
  const delAllClick = () => {
    checkData.value = []
  }
  // 弹窗处理
  const open = () => {
    visible.value = true
    if (props.modelValue && props.userName) {
      const userName = props.userName.split(',')
      const userId = props.modelValue.split(',')
      if (userName?.length === userId?.length) {
        for (let i = 0; i < userId.length; i++) {
          checkData.value.push({ id: userId[i], userName: userName[i] })
        }
      } else {
        getUserListById()
      }
    } else if (props.modelValue) {
      // 只有id时
      getUserListById()
    } else {
      checkData.value = []
    }
    getTreeData()
    getUserList()
  }
  const getUserListById = () => {
    // 这里要根据id恢复用户名，从接口获取 todo
  }
  // 关闭弹窗
  const confirmClick = () => {
    const userName = checkData.value.map((item) => item.userName).join(',')
    const userId = checkData.value.map((item) => item.id).join(',')
    emits('update:modelValue', userId)
    emits('update:userName', userName)
    emits('change', checkData.value)
    visible.value = false
  }
  defineExpose({ open })
  onMounted(() => {
    nextTick(() => {
      // 可根据实际情况放在点击打开弹窗后加载，会出现loading
      // getTreeData()
      // getUserList()
    })
  })
</script>
<style lang="scss">
  .expand-user-dialog {
    display: flex;
    align-items: flex-start;
    .sidebar-tree {
      width: 180px;
      border: 1px solid #ebeef5;
      border-radius: 3px;
      padding: 10px 0;
      margin-right: 10px;
      max-height: 500px;
      overflow-y: auto;
    }
    .table-list {
      flex: 2;
    }
    .search {
      display: flex;
      margin-bottom: 10px;
      .el-input {
        margin-right: 10px;
      }
    }
    .page {
      padding-top: 20px;
      display: flex;
      justify-content: flex-end;
    }
    .has-select {
      width: 200px;
      margin-left: 20px;
      .total {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 32px;
        margin-bottom: 10px;
      }
    }
  }
</style>
