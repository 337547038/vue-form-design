<!-- Created by 337547038 表单提交 -->
<template>
  <ak-form
    :rules="rules"
    v-model="model"
    ref="form"
    class="add-form"
    :showMessage="config.showMessage"
    :trigger="config.trigger"
    :class="config.className"
    :labelWidth="config.labelWidth">
    <template v-for="(list,index) in dataList">
      <template v-if="list.type==='grid'">
        <div :class="[list.className]" class="form-row" :key="`${list.name+index}`">
          <div
            v-for="(col,colIndex) in list.columns"
            :key="colIndex"
            :class="`span-${[col.span]}`"
            class="form-col">
            <template v-for="colList in col.list">
              <form-item
                :readOnly="readOnly"
                :class="col.className"
                :item="colList"
                v-model="colList.control.value"
                :key="colList.name">
              </form-item>
            </template>
          </div>
        </div>
      </template>
      <template v-else-if="list.type==='childTable'">
        <div :key="list.name" class="child-table">
          <ak-table :data="list.tableData" :key="list.name">
            <template v-for="(t,index) in list.list">
              <ak-column :label="t.item.label" :key="index" :className="t.className">
                <template slot-scope="scope">
                  <form-item
                    :readOnly="readOnly"
                    ref="formItemEl"
                    :itemRules="t.rules"
                    v-model="scope.row[t.name]"
                    :item="t"
                    :key="index">
                  </form-item>
                </template>
              </ak-column>
            </template>
            <ak-column label="操作" v-if="!readOnly">
              <template slot-scope="scope">
                <i class="icon-del" @click="_delRow(list.tableData,scope.index)" title="删除"></i>
              </template>
            </ak-column>
          </ak-table>
          <ak-button @click="_addTableRow(list)" icon="icon-plus" v-if="!readOnly">添加</ak-button>
        </div>
      </template>
      <template v-else>
        <form-item
          :readOnly="readOnly"
          :class="list.className"
          :item="list"
          v-model="list.control.value"
          :key="list.name">
        </form-item>
      </template>
    </template>
  </ak-form>
</template>

<script>
import FormItem from '../../design/components/formItem'
import bus from '@/utils/bus'

export default {
  name: 'form1',
  data() {
    return {
      rules: {},
      model: {}
    }
  },
  props: {
    remoteFunc: Object,
    data: Object,
    readOnly: Boolean
  },
  components: {FormItem},
  created() {
    this._getRulesModel()
  },
  watch: {
    remoteFunc: {
      handler: function (v) {
        this._setRemoteFunc(v)
      },
      deep: true
    }
  },
  methods: {
    _setRemoteFunc(v) {
      bus.$emit('setRemoteFunc', v)
    },
    _addTableRow(obj) {
      let temp = {}
      obj.list.forEach(li => {
        temp[li.name] = ''
      })
      obj.tableData.push(temp)
    },
    _delRow(list, index) {
      list.splice(index - 1, 1)
    },
    validate() {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate()
          .then(res => {
            console.log(res)
            console.log('----====')
            const vt = this.validateTable()
            if (vt.length === 0) {
              resolve(Object.assign({}, res, this._getTableData())) // 验证通过
            } else {
              reject(res, vt)
            }
          })
          .catch(res => {
            reject(res)
          })
      })
    },
    _getTableData() {
      let temp = {}
      this.data.list.forEach(item => {
        if (item.type === 'childTable') {
          temp[item.name] = item.tableData
        }
      })
      return temp
    },
    validateTable() {
      console.log('validateTable')
      const tableItem = this.$refs.formItemEl
      let error = []
      tableItem && tableItem.forEach(item => {
        if (item.validate().length > 0) {
          error.push(item.validate())
        }
      })
      return error
    },
    _getRulesModel() {
      this.$nextTick(() => {
        this._getRules(this.data.list)
        this.$emit('input', this.model)
      })
    },
    _getRules(data) {
      data.forEach(item => {
        if (item.type === 'childTable') {
          // todo
        } else if (item.type === 'grid') {
          item.columns.forEach(col => {
            this._getRules(col.list)
          })
        } else {
          let name = item.name
          this.model[name] = item.control.value
          this.rules[name] = item.rules
        }
      })
      this.$emit('input', this.model)
    },
    setValue(obj) {
      // console.log(obj)
      this.data.list.forEach(item => {
        if (item.type === 'grid') {
          item.columns.forEach(col => {
            col.list.forEach(li => {
              li.control.value = obj[li.name]
            })
          })
        } else if (item.type === 'childTable') {
          item.tableData = obj[item.name]
        } else {
          item.control.value = obj[item.name]
        }
      })
    }
  },
  computed: {
    config() {
      const obj = {
        showMessage: true,
        trigger: 'change'
      }
      if (this.data) {
        return Object.assign({}, this.data.config, obj)
      }
      return obj
    },
    dataList() {
      /* const event = ['change', 'click']
      this.data.list.forEach(item => {
        for (let key in item.control) {
          if (event.indexOf(key) !== -1) {
            const v = item.control[key]
            item.control[key] = v
          }
        }
        // item.control.change = 'eval(item.control.change)'
      }) */
      return this.data.list
    }
  },
  mounted() {
    this._setRemoteFunc(this.remoteFunc)
  }
}
</script>
