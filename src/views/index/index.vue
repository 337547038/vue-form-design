<template>
  <div class="index-page">
    <div class="intro">
      <h3>基于 Vue3 的可视化表单设计器</h3>
      <p>使用基于 Vue 2.0 的桌面端组件库 Elemnet-Plus ，使用广泛，扩展方便<br>
        通过可视化的操作，快速完成表单页面的创<br>
        提供功能强大的各种组件，可适用在各种复杂的场景中<br>
        丰富的API接口，方便快速的生成表单，验证和获取表单数据<br>
        利于二次开发
      </p>
    </div>
    <div class="btn">
      <div class="title">
        <h3>开始使用</h3>
        <h4>创建完后通过导出vue文件的方式使用</h4>
      </div>
      <div class="row">
        <router-link to="/design">
          <el-button type="primary">创建表单</el-button>
        </router-link>
        <router-link to="/design?type=search">
          <el-button type="primary">筛选设置</el-button>
        </router-link>
        <router-link to="/designTable">
          <el-button type="primary">列表设置</el-button>
        </router-link>
      </div>
      <div class="title">
        <h4>将设计相关数据保存在服务端</h4>
      </div>
      <div class="row">
        <el-button type="primary" @click="chooseSource">已有数据源创建表单</el-button>
        <router-link to="/formList">
          <el-button type="primary">
            表单列表
          </el-button>
        </router-link>
      </div>
    </div>
    <el-dialog
      v-model="visible"
      title="选择数据源"
      width="600px"
      custom-class="source-dialog"
      :append-to-body="true">
      <el-table :data="tableData" border style="width: 100%" v-loading="loading">
        <el-table-column prop="title" label="名称" />
        <el-table-column prop="name" label="数据表名" />
        <el-table-column label="操作">
          <template #default="scope">
            <router-link :to="{path:'/design',query:{formName:scope.row.name }}">
              <el-button size="small" type="primary">创建表单</el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
import {getList} from '@/api'

export default {
  name: "index",
  setup() {
    const state = reactive({
      visible: false,
      tableData: [],
      loading: false
    })
    const chooseSource = () => {
      state.visible = true
      state.loading = true
      getList('datasource')
        .then(res => {
          if (res.data.code === 200) {
            state.tableData = res.data.data
          }
          state.loading = false
        })
        .catch(res => {
          state.loading = false
          console.log(res)
        })
    }
    const toFormList = () => {

    }
    return {
      chooseSource,
      toFormList,
      ...toRefs(state)
    }
  }
}
</script>
