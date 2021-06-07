<template>
  <div style="margin:50px;">
    <ak-button @click="add()" type="primary">添加</ak-button>
    <br><br>
    <ak-table :data="dataList.list">
      <ak-column label="表单名称" prop="title"></ak-column>
      <ak-column label="操作">
        <template slot-scope="scope">
          <ak-button type="text" @click="add(scope.row)">修改</ak-button>
          <ak-button type="text" @click="addList(scope.row)">新增数据</ak-button>
          <ak-button type="text" @click="del(scope.row)">删除</ak-button>
        </template>
      </ak-column>
    </ak-table>
  </div>
</template>
<script>
import {evil} from '@/utils'

export default {
  name: 'Index',
  components: {},
  props: {},
  data() {
    return {
      eventClick: function () {
        console.log('p')
      },
      dataList: {
        list: []
      }
    }
  },
  created() {
    /* const storage = JSON.parse(window.localStorage.getItem('formDesign'))
    if (storage) {
      this.dataList.list.push({
        title: storage.config.name
      })
    } */
    const storage = window.localStorage.getItem('formDesign')
    if (storage) {
      const data = evil(storage)
      this.dataList.list.push({
        title: data.config.name
      })
    }
  },
  computed: {},
  mounted() {

  },
  methods: {
    inputClick() {
      console.log('1212')
    },
    add(row) {
      let query = {}
      if (row) {
        // query = {id: row.title}
        query = {id: 'formDesign'}
      }
      this.$router.push({path: 'design', query: query})
    },
    del() {
      window.localStorage.removeItem('formDesign')
      this.dataList = {list: []}
    },
    addList() {
      const query = {formId: '123'}
      this.$router.push({path: 'form', query: query})
    }
  }
}
</script>
