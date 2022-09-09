<template>
  <div class="form-list-page">
    <ak-list
      ref="tableListEl"
      :requestUrl="requestUrl"
      :searchData="searchData"
      :tableData="tableData"
    >
      <!--<template #__control="scope">
        <el-button link @click="btnClick(scope.row.id,'show')">查看</el-button>
        <el-button link @click="btnClick(scope.row.id,'edit')">编辑</el-button>
        <el-button link @click="btnClick(scope.row.id,'del')">删除</el-button>
      </template>-->
    </ak-list>
  </div>
</template>

<script setup>
  // import {useRoute, useRouter} from 'vue-router'
  import { ref } from 'vue'
  // const route = useRoute()
  // const router = useRouter()
  // const tableListEl = ref()
  const tableData = ref({
    tableProps: {},
    columns: [
      { label: '勾选', prop: '__selection', type: 'selection' },
      { prop: 'text', label: '文本框', help: '' },
      {
        prop: 'radio',
        label: '单选框组',
        help: '',
        config: { dictKey: 'radio' }
      },
      { label: '操作', prop: '__control', width: '100px' },
      {
        prop: 'datePicker',
        label: '日期选择器',
        help: '',
        config: { formatter: '{y}-{m}-{d} {h}:{i}:{s}' }
      }
    ],
    controlBtn: [
      {
        label: '新增',
        key: 'add',
        type: 'primary',
        size: 'small',
        hide: false
      },
      { label: '删除', key: 'del', size: 'small' }
    ]
  })
  const searchData = ref({}) // 筛选表单
  const requestUrl = ref('')
  /*const btnClick = (id, type) => {
    switch (type) {
      case 'show':
        break
      case 'edit':
        break
      case 'del':
        // tableListEl.value.getListData() // 调用组件内部方法重新拉数据
        break
    }
  }*/
</script>
