<template>
  <div class="form-list-page">
    <h3>列表数据</h3>
    <ak-table-list
      ref="tableListEl"
      :searchData="searchData"
      :tableData="tableData"
      :tableList="tableList"
      :requestUrl="requestUrl">
      <template #__control="scope">
        <el-button type="text" @click="btnClick(scope.row.id,'show')">查看</el-button>
        <el-button type="text" @click="btnClick(scope.row.id,'edit')">编辑</el-button>
        <el-button type="text" @click="btnClick(scope.row.id,'del')">删除</el-button>
      </template>
    </ak-table-list>
  </div>
</template>

<script>
import {useRoute, useRouter} from 'vue-router'
import {reactive, toRefs, ref} from 'vue'

export default {
  name: "list",
  props: {},
  components: {},
  setup() {
    const route = useRoute()
    const router = useRouter()
    const tableListEl = ref()
    const state = reactive({
      tableData: {
        "config": {},
        "columns": [{"label": "勾选", "prop": "__selection", "type": "selection"}, {
          "label": "序号",
          "prop": "__index",
          "type": "index"
        }, {"prop": "name", "label": "用户名"}, {"prop": "tel", "label": "手机号"}, {
          "prop": "sex",
          "label": "性别"
        }, {"label": "操作", "prop": "__control"}]
      },
      searchData: {
        "list": [
          {
            "name": "name",
            "type": "input",
            "control": {
              "modelValue": ""
            },
            "slot": {},
            "config": {},
            "item": {
              "label": "用户名",
              "showLabel": false
            },
            "rules": [],
            "customRules": []
          },
          {
            "name": "tel",
            "type": "input",
            "control": {
              "modelValue": ""
            },
            "slot": {},
            "config": {},
            "item": {
              "label": "手机号",
              "showLabel": false
            },
            "rules": [],
            "customRules": []
          }
        ],
        "config": {
          "labelWidth": "",
          "class": "",
          "size": "medium",
          "name": "form1636711196545",
          "rulesComm": []
        }
      }, // 筛选表单
      requestUrl: '', // 数据列表接口
      tableList: [
        {
          name: '张二',
          tel: '13800138000',
          sex: '男'
        },
        {
          name: '李五',
          tel: '13800138000',
          sex: '女'
        }
      ]
    })
    const onSubmit = () => {
      tableListEl.value.searchClick()
    }
    const btnClick = (id, type) => {
      switch (type) {
        case 'show':
          break
        case 'edit':
          break
        case 'del':
          // tableListEl.value.getListData() // 调用组件内部方法重新拉数据
          break
      }
    }
    return {
      ...toRefs(state),
      onSubmit,
      tableListEl,
      btnClick
    }
  }
}
</script>
