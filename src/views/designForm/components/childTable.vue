<!-- Created by 337547038 on 2021/9/29. -->
<template>
  <div class="form-table form-table-add">
    <el-table
      v-bind="data.control"
      :class="[data.className]"
      :data="data.tableData">
      <el-table-column
        v-for="(item,index) in data.list"
        :key="index"
        :prop="item.name"
        :label="item.item.label"
        :width="item.item.span">
        <template #default="scope">
          <div v-if="type===3||type===2">{{ getText(scope.row[item.name]) }}</div>
          <div v-else>
            <span v-if="item.typeColumn==='index'">{{ scope.$index + 1 }}</span>
            <el-button v-else-if="item.typeColumn==='operate'" type="text" @click="delColumn(scope.$index)">删除
            </el-button>
            <!--            <el-form-item
                          v-else
                          :rules="rules"
                          :prop="`${data.name}.${scope.$index}.${item.name}`">
                          <el-input v-model="scope.row[item.name]"></el-input>
                        </el-form-item>-->
            <form-item
              :tProps="`${data.name}.${scope.$index}.${item.name}`"
              v-model="scope.row[item.name]"
              :element="item"
              v-else>
            </form-item>
          </div>
        </template>
        <template #header="scope" v-if="item.help">
          {{ scope.column.label }}
          <el-tooltip placement="top">
            <template #content>
              <span v-html="item.help"></span>
            </template>
            <i class="icon-help"></i>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <div class="table-btn" v-if="type===1">
      <el-button size="mini" @click="addColumn">增加</el-button>
    </div>
  </div>
</template>

<script>
import FormItem from './formItem.vue'
import {inject, watchEffect} from 'vue'

export default {
  name: "childTable",
  components: {FormItem},
  props: {
    data: Object,
    type: Number
  },
  setup(props) {
    const addColumn = () => {
      const temp = {}
      props.data.list.forEach(item => {
        if (item.name) {
          temp[item.name] = ''
        }
      })
      props.data.tableData.push(JSON.parse(JSON.stringify(temp)))
    }
    const getText = (text) => {
      if (typeof text === 'string') {
        return text
      } else {
        return text && text.toString()
      }
    }
    const delColumn = index => {
      props.data.tableData.splice(index, 1)
    }
    // 执行表单的setValue方法，对组件设值
    const setValueEvent = inject('setFormValue', '')
    watchEffect(() => {
      if (setValueEvent && setValueEvent.value) {
        props.data.tableData = setValueEvent.value[props.data.name]
      }
    })
    return {
      addColumn,
      delColumn,
      getText
    }
  }
}
</script>
