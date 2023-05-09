<!-- Created by 337547038  -->
<template>
  <el-dialog
    title="用户选择"
    v-model="visible"
    :append-to-body="true"
    width="800px"
  >
    <div class="expand-user-dialog">
      <div class="sidebar-tree">
        <el-tree
          ref="treeEl"
          :data="treeData"
          node-key="id"
          @node-click="handleNodeClick"
          highlight-current
        />
      </div>
      <div class="table-list">
        <div class="search">
          <el-input placeholder="请输入用户名" v-model="userName" />
          <el-button type="primary" @click="searchClick">查询</el-button>
          <el-button @click="resetClick">重置</el-button>
        </div>
        <div class="list">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="userName" label="用户名" />
            <el-table-column prop="nickName" label="昵称" />
            <el-table-column label="操作" width="60px">
              <template #default="{ row }">
                <el-button circle size="small" @click="tableRowClick(row)"
                ><el-icon><ArrowRight /></el-icon
                ></el-button>
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
          <el-button type="danger" @click="delAllClick" size="small"
          >全部移除</el-button
          >
        </div>
        <el-table :data="checkData">
          <el-table-column label="用户名">
            <template #default="{ row }">{{ row }}</template>
          </el-table-column>
          <el-table-column label="操作" width="60px">
            <template #default="{ row }">
              <el-button size="small" type="danger" @click="delRowClick(row)"
              >移除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <template #footer>
      <div>
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="confirmClick"> 确定 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import { ref, onMounted, reactive, nextTick } from 'vue'
  import { getRequest } from '@/api'
  import formatResult from '@/utils/formatResult'
  const props = withDefaults(
    defineProps<{
      modelValue?: string
    }>(),
    {}
  )

  const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()
  const visible = ref(false)
  // 侧栏处理
  const treeEl = ref()
  const treeData = ref([])
  const department = ref()
  const handleNodeClick = (data: any) => {
    department.value = data.id
  }
  const getTreeData = () => {
    getRequest('deptList', {}).then((res: any) => {
      treeData.value = formatResult(res.data, 'transformDataToChild')
    })
  }
  // 侧栏处理结束
  //　table
  const userName = ref()
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
    userName.value = ''
    department.value = ''
    treeEl.value.setCurrentKey(null)
    getUserList()
  }
  const getUserList = () => {
    const params = {
      pageInfo: {
        pageIndex: page.current,
        pageSize: page.pageSize
      },
      name: userName.value,
      department: department.value
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
    if (!checkData.value.includes(row.userName)) {
      checkData.value.push(row.userName)
    }
  }
  //　已选
  const checkData = ref([])
  const delRowClick = (row: any) => {
    checkData.value.forEach((item: any, index: number) => {
      if (item === row) {
        checkData.value.splice(index, 1)
      }
    })
  }
  const delAllClick = () => {
    checkData.value = []
  }
  // 弹窗处理
  const open = () => {
    visible.value = true
    if (props.modelValue) {
      checkData.value = props.modelValue.split(',')
    } else {
      checkData.value = []
    }
  }
  // 关闭弹窗
  const confirmClick = () => {
    emits('update:modelValue', checkData.value.join(','))
    visible.value = false
  }
  defineExpose({ open })
  onMounted(() => {
    nextTick(() => {
      // 可根据实际情况放在点击打开弹窗后加载，会出现loading
      getTreeData()
      getUserList()
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
