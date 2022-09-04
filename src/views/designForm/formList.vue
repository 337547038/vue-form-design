<template>
  <div class="form-list-page">
    <table-list
      :searchData="state.searchData"
      :tableData="state.tableData"
      :requestUrl="state.requestUrl"
      :dict="state.dict"
      ref="tableListEl"
    >
      <template #control="scope">
        <el-button size="small" link @click="changeStatus(scope.row)">{{
          scope.row.status ? '禁用' : '启用'
        }}</el-button>
        <el-button
          size="small"
          link
          v-for="item in state.btnGroup"
          :key="item.type"
          :title="item.title"
          @click="btnClick(item.type, scope.row)"
          :disabled="getShow(item, scope.row)"
        >
          {{ item.label }}
        </el-button>
        <el-popconfirm
          title="确定删除该记录?"
          confirm-button-text="确认"
          cancel-button-text="取消"
          @confirm="btnClick(6, scope.row)"
        >
          <template #reference>
            <el-button size="small" link>删除</el-button>
          </template>
        </el-popconfirm>
      </template>
      <div>
        <el-button type="primary" @click="openDialogClick">新增表单 </el-button>
        <el-button
          type="success"
          @click="
            $router.push({
              path: '/designform/table',
              query: { type: 'table' }
            })
          "
          >新增数据列表<el-tooltip
            content="直接创建数据列表，适用于部分数据是不需要通过表单的形式录入"
            placement="top"
          >
            <span
              ><el-icon> <QuestionFilled /> </el-icon
            ></span>
          </el-tooltip>
        </el-button>
      </div>
    </table-list>
  </div>
  <el-dialog
    v-model="dialog.visible"
    title="选择数据源"
    width="600px"
    custom-class="source-dialog"
    :append-to-body="true"
    :before-close="dialogClose"
  >
    <div style="text-align: right; margin-bottom: 5px">
      <el-button type="primary" @click="dialogClick()">无数据源创建</el-button>
    </div>
    <el-table
      :data="dialog.tableData"
      border
      style="width: 100%"
      v-loading="dialog.loading"
    >
      <el-table-column prop="name" label="数据源名称" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button
            size="small"
            @click="dialogClick(scope.row.id)"
            type="primary"
            >创建表单
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-dialog>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { getRequest } from '@/api'
  import { useRouter } from 'vue-router'
  import { ElMessage } from 'element-plus'
  import TableList from './components/list.vue'
  import { useLayoutStore } from '@/store/layout'

  const layoutStore = useLayoutStore()
  layoutStore.changeBreadcrumb([{ label: '系统工具' }, { label: '表单管理' }])

  const tableListEl = ref()
  const router = useRouter()
  const state = reactive({
    pageIndex: 1,
    total: 0,
    pageSize: 20,
    tableData: {
      columns: [
        { label: '序号', prop: '__index', type: 'index', width: '60px' },
        { prop: 'name', label: '表单名称' },
        { prop: 'formId', label: '数据源id' },
        {
          label: '状态',
          prop: 'status',
          config: {
            tagList: { '1': 'success', '0': 'info' },
            dictKey: 'status'
          }
        },
        {
          label: '类型',
          prop: 'type',
          config: {
            tagList: { 1: 'success', 2: 'info' },
            dictKey: 'type'
          }
        },
        {
          label: '添加时间',
          prop: 'creatDate',
          width: '170px',
          config: { formatter: '{y}-{m}-{d} {h}:{i}:{s}' }
        },
        {
          label: '更新时间',
          prop: 'updateDate',
          width: '170px',
          config: { formatter: '{y}-{m}-{d} {h}:{i}:{s}' }
        },
        { label: '操作', prop: 'control', width: '320px' }
      ],
      dict: { type: { 1: '表单', 2: '表格' } }
    },
    requestUrl: 'getFormList',
    btnGroup: [
      { label: '修改', type: 1 },
      { label: '搜索', type: 2, title: '搜索设置' },
      { label: '列表', type: 3, title: '列表设置' },
      { label: '新增', type: 4, title: '添加数据' },
      { label: '查看', type: 5 }
    ],
    searchData: {
      list: [
        {
          name: 'name',
          type: 'input',
          control: {
            modelValue: '',
            placeholder: '表单名称'
          },
          config: {},
          item: {
            label: '表单名称',
            showLabel: false
          }
        },
        {
          name: 'status',
          type: 'select',
          control: {
            modelValue: '',
            appendToBody: true,
            placeholder: '请选择状态'
          },
          options: [],
          config: {
            addAll: true,
            type: 'async',
            source: 2,
            request: 'get',
            sourceFun: ''
          },
          item: {
            label: '状态',
            showLabel: false
          }
        },
        {
          name: 'type',
          type: 'select',
          control: {
            modelValue: '',
            placeholder: '请选择类型'
          },
          options: [
            { label: 'form', value: 1 },
            { label: 'table', value: 2 }
          ],
          config: {
            addAll: true
          },
          item: {
            label: '类型',
            showLabel: false
          }
        }
      ],
      form: {
        labelWidth: '',
        class: '',
        size: 'small',
        name: 'form1660211919743'
      }
    }
  })
  const btnClick = (type: number, row: any) => {
    const query = { formId: row.formId, id: row.id }
    switch (type) {
      case 1:
        router.push({
          path: '/designform',
          query: query
        })
        break
      case 2:
        router.push({
          path: '/designform',
          query: Object.assign({}, query, { type: 'search' })
        })
        break
      case 3: // 列表设置
        const type = row.type === 2 ? 'table' : ''
        router.push({
          path: '/designform/table',
          query: Object.assign({}, query, { type: type })
        })
        break
      case 4: // 添加数据
        router.push({
          path: '/designform/form',
          query: { tid: row.id, formId: row.formId }
        })
        break
      case 5: // 查看
        router.push({
          path: '/designform/list',
          query: { tid: row.id, formId: row.formId }
        })
        break
      case 6:
        // del
        getRequest('delForm', { id: row.id })
          .then((res) => {
            if (res.data.code === 200) {
              ElMessage.success(res.data.message || '删除成功')
              tableListEl.value?.getListData() // 重新拉数据
            }
          })
          .catch((res: any) => {
            ElMessage.error(res.data.message || '删除失败')
          })
        break
    }
  }
  const getShow = (item: any, row: any) => {
    let val = false
    // 无数据源或是禁用状态的不能添加数据和查看
    if (!row.formId || !row.status) {
      val = [4, 5].includes(item.type)
    }
    // 表格类型的不能添加数据和修改
    if (row.type === 2) {
      val = [1, 4].includes(item.type)
    }
    return val
  }
  // 改变记录状态
  const changeStatus = (row: any) => {
    console.log(row)
    const status = row.status === 1 ? 0 : 1
    getRequest('changeStatus', { id: row.id, status: status })
      .then((res) => {
        if (res.data.code === 200) {
          ElMessage.success(res.data.message || '操作成功')
          tableListEl.value.getListData() // 重新拉数据
        }
      })
      .catch((res: any) => {
        ElMessage.error(res.data.message || '操作失败')
      })
  }
  //////////////新增弹窗相关////////////////
  const dialog = ref({
    visible: false,
    loading: true,
    tableData: []
  })
  const openDialogClick = () => {
    dialog.value.visible = true
    dialog.value.loading = true
    getDialogData()
  }
  const dialogClick = (id?: string) => {
    router.push({ path: '/designform', query: { formId: id } })
  }
  const getDialogData = () => {
    getRequest('datasource').then((res: any) => {
      dialog.value.loading = false
      dialog.value.tableData = res.data.data
    })
  }
  const dialogClose = () => {
    dialog.value.visible = false
  }
</script>
