# List Demo

# 基础用法

```vue demo
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
    config: {},
    columns: [
      { label: '勾选', prop: '__selection', type: 'selection', width: '100px' },
      { label: '序号', prop: '__index', type: 'index', width: '100px' },
      { prop: 'text', label: '文本框', help: '' },
      { label: '操作', prop: '__control' }
    ],
    controlBtn: [
      { label: '新增', key: 'add', type: 'primary' },
      { label: '删除', key: 'del' }
    ]
  })
  const searchData = ref({}) // 筛选表单
  const requestUrl = ref('getContentList')
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
```

## 筛选表单
使用`searchData`添加列表筛选条件

```vue demo
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
    config: {},
    columns: [
      { label: '勾选', prop: '__selection', type: 'selection', width: '100px' },
      { label: '序号', prop: '__index', type: 'index', width: '100px' },
      { prop: 'text', label: '文本框', help: '' },
      { label: '操作', prop: '__control' }
    ],
    controlBtn: [
      { label: '新增', key: 'add', type: 'primary' },
      { label: '删除', key: 'del' }
    ]
  })
  const searchData = ref({
    list: [
      {
        name: 'name',
        type: 'input',
        control: {
          modelValue: ''
        },
        config: {},
        item: {
          label: '用户名',
          showLabel: false
        }
      }
    ],
    form: {
      labelWidth: '',
      class: '',
      size: '',
      name: 'form1636711196545'
    }
  }) // 筛选表单
  const requestUrl = ref('getContentList')
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

```
## 表格slot

使用prop作为slot的key
```vue demo
<template>
  <div class="form-list-page">
    <ak-list
      ref="tableListEl"
      :requestUrl="requestUrl"
      :searchData="searchData"
      :tableData="tableData"
    >
      <template #__control="scope">
        <el-button link @click="btnClick(scope.row.id, 'show')">查看</el-button>
        <el-button link @click="btnClick(scope.row.id, 'edit')">编辑</el-button>
        <el-button link @click="btnClick(scope.row.id, 'del')">删除</el-button>
      </template>
      <template #text="scope">
        使用prop的值为slot：{{ scope.row.text }}
      </template>
    </ak-list>
  </div>
</template>

<script setup>
  // import {useRoute, useRouter} from 'vue-router'
  import { ref } from 'vue'
  // const route = useRoute()
  // const router = useRouter()
  const tableListEl = ref()
  const tableData = ref({
    config: {},
    columns: [
      { label: '勾选', prop: '__selection', type: 'selection', width: '100px' },
      { label: '序号', prop: '__index', type: 'index', width: '100px' },
      { prop: 'text', label: '文本框', help: '' },
      { label: '操作', prop: '__control' }
    ],
    controlBtn: [
      { label: '新增', key: 'add', type: 'primary' },
      { label: '删除', key: 'del' }
    ]
  })
  const searchData = ref({}) // 筛选表单
  const requestUrl = ref('getContentList')
  const btnClick = (id, type) => {
    switch (type) {
      case 'show':
        break
      case 'edit':
        break
      case 'del':
        tableListEl.value.getListData() // 调用组件内部方法重新拉数据
        break
    }
  }
</script>

```

## 个性化设置

使用表列设置`dictKey`可以匹配接口返回的`dict`字典，还可以设置使用`tag`标签来显示
```vue demo
<template>
  <div class="form-list-page">
    <ak-list
      ref="tableListEl"
      :requestUrl="requestUrl"
      :searchData="searchData"
      :tableData="tableData"
    >
      <template #__control="scope">
        <el-button link @click="btnClick(scope.row.id, 'show')">查看</el-button>
        <el-button link @click="btnClick(scope.row.id, 'edit')">编辑</el-button>
        <el-button link @click="btnClick(scope.row.id, 'del')">删除</el-button>
      </template>
      <template #text="scope">
        使用prop的值为slot：{{ scope.row.text }}
      </template>
    </ak-list>
  </div>
</template>

<script setup>
  // import {useRoute, useRouter} from 'vue-router'
  import { ref } from 'vue'
  // const route = useRoute()
  // const router = useRouter()
  const tableListEl = ref()
  const tableData = ref({
    config: {},
    columns: [
      { label: '勾选', prop: '__selection', type: 'selection', width: '100px' },
      { label: '序号', prop: '__index', type: 'index', width: '100px' },
      { prop: 'text', label: '文本框', help: '' },
      {
        prop: 'radio',
        label: '性别',
        config: {
          tagList: {
            0: 'info',
            1: 'success'
          },
          dictKey: 'select'
        }
      },
      {
        prop: 'status',
        label: '状态',
        config: {
          dictKey: 'select'
        }
      },
      { label: '操作', prop: '__control' }
    ],
    controlBtn: [
      { label: '新增', key: 'add', type: 'primary' },
      { label: '删除', key: 'del' }
    ]
  })
  const searchData = ref({}) // 筛选表单
  const requestUrl = ref('getContentList')
  const btnClick = (id, type) => {
    switch (type) {
      case 'show':
        break
      case 'edit':
        break
      case 'del':
        tableListEl.value.getListData() // 调用组件内部方法重新拉数据
        break
    }
  }
</script>

```

## 左侧栏树选择

```vue demo
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
  import { ref } from 'vue'
  const tableData = ref({
    tableProps: {},
    columns: [
      { label: '勾选', prop: '__selection', type: 'selection', width: '100px' },
      { label: '序号', prop: '__index', type: 'index', width: '100px' },
      { prop: 'text', label: '文本框', help: '' },
      { label: '操作', prop: '__control' }
    ],
    controlBtn: [
      { label: '新增', key: 'add', type: 'primary' },
      { label: '删除', key: 'del' }
    ],
    tree: {
      show: true,
      name: 'tree',
      request: 'get',
      sourceFun: '/getTree',
      beforeRequest: (data, route) => {
        return data
      }
    }
  })
  const searchData = ref({}) // 筛选表单
  const requestUrl = ref('getContentList')
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

```
