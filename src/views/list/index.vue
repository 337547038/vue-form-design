<!-- Created by 337547038 on 2021. -->
<template>
  <div style="margin: 20px">
    <ak-button @click="add" type="primary">添加</ak-button>
    <br><br>
    <ak-table :data="dataTable">
      <ak-column
        :order="1"
        v-for="item in tableHead"
        :label="item.label"
        :prop="item.prop"
        :key="item.prop">
      </ak-column>
      <ak-column label="操作" :order="10">
        <template slot-scope="scope">
          <ak-button type="text" @click="edit(scope)">修改</ak-button>
          <ak-button type="text" @click="edit(scope,'detail')">详情</ak-button>
        </template>
      </ak-column>
    </ak-table>
  </div>
</template>

<script>
export default {
  name: 'list',
  data() {
    return {
      dataTable: [],
      tableHead: []
    }
  },
  props: {},
  components: {},
  methods: {
    init() {
      // 从表单数据里提取表头相关的
      const formData = JSON.parse(window.localStorage.getItem('formDesign'))
      formData && formData.list.forEach(item => {
        if (item.type === 'grid') {
          item.columns.forEach(co => {
            co.list.forEach(li => {
              if (li.tableList) {
                this.getTableHead(li)
              }
            })
          })
        } else if (item.type !== 'childTable') {
          if (item.tableList) {
            this.getTableHead(item)
          }
        }
      })
      // 获取列表数据
      this.dataTable = [JSON.parse(window.localStorage.getItem('formData'))]
    },
    getTableHead(item) {
      this.tableHead.push({
        label: item.item.label,
        className: item.control.className,
        prop: item.name
      })
    },
    add() {
      this.$router.push({path: 'form', query: {formId: '11'}})
    },
    edit(row, type) {
      this.$router.push({path: 'form', query: {formId: '11', id: '23', detail: type}})
    }
  },
  computed: {},
  mounted() {
    this.init()
  }
}
</script>
