<!-- Created by 337547038 on 2021/9/29. -->
<template>
  <div class="form-table">
    <el-table
      :class="[data.className]"
      :data="data.tableData"
      v-bind="data.control">
      <el-table-column
        v-for="(item,index) in data.list"
        :key="index"
        :prop="item.name"
        :label="item.item.label"
        :v-bind="item.control"
        :width="item.item.span">
      </el-table-column>
    </el-table>
    <div class="table-btn">
      <el-button size="mini" @click="addColumn">增加</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "formTable",
  props: {
    data: Object
  },
  setup(props) {
    const addColumn = () => {
      const temp = {}
      props.data.list.forEach(item => {
        if (item.name) {
          temp[item.name] = ''
        }
      })
      props.data.tableData.push(temp)
    }
    return {
      addColumn
    }
  }
}
</script>
