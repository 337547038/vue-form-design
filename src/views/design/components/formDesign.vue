<!-- Created by 337547038 on. -->
<template>
  <ak-form
    :rules="rules"
    v-model="model"
    ref="form"
    :class="{[config.className]:true,'add-form':!isDesign}"
    :trigger="config.trigger"
    :labelWidth="config.labelWidth">
    <draggable
      v-model="data.list"
      v-bind="{group:'form', ghostClass: 'ghost',animation: 200, handle: '.drag-move'}"
      @add="_draggableAdd">
      <transition-group name="fade" tag="div" class="form-list">
        <template v-for="(item, index) in data.list">
          <template v-if="item.type==='childTable'">
            <div
              v-if="isDesign"
              class="child-table"
              :key="index"
              :class="{active:activeKey===item.name,[item.className]:item.className}"
              @click="_formItemCheck(item)">
              <draggable
                v-model="item.list"
                :no-transition-on-drag="true"
                v-bind="{group:'form', ghostClass: 'ghost',animation: 200, handle: '.drag-move'}"
                @add="_draggableColAdd(item, 0, $event,'child')">
                <transition-group name="fade" tag="div" class="child-table-list">
                  <template v-for="(colList, listIndex) in item.list">
                    <form-item
                      :showControl="true"
                      :class="colList.className"
                      :activeKey="activeKey"
                      :item="colList"
                      v-model="colList.control.value"
                      :key="listIndex"
                      @click="_formItemControlClick(colList, listIndex, item.list, $event)"
                      @checkClick="_formItemCheck(colList,'child')">
                    </form-item>
                  </template>
                </transition-group>
              </draggable>
              <drag-control
                v-show="activeKey===item.name"
                @click="_formItemControlClick('',index,data.list,$event)">
              </drag-control>
            </div>
            <div v-else :key="index" class="child-table">
              <ak-table :data="item.tableData" :key="item.name">
                <template v-for="(t,index) in item.list">
                  <ak-column :label="t.item.label" :key="index" :className="t.className">
                    <template slot-scope="scope">
                      <div v-if="readOnly">{{_getText(scope.row[t.name])}}</div>
                      <form-item
                        v-else
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
                    <i class="icon-del" @click="_delRow(item.tableData,scope.index)" title="删除"></i>
                  </template>
                </ak-column>
              </ak-table>
              <ak-button @click="_addTableRow(item)" icon="icon-plus" v-if="!readOnly">添加</ak-button>
            </div>
          </template>
          <template v-else-if="item.type === 'grid'">
            <div
              class="form-row"
              :key="index"
              :class="{active:activeKey===item.name,[item.className]:item.className}"
              @click.stop="_formItemCheck(item)">
              <div
                class="form-col"
                v-for="(col,colIndex) in item.columns"
                :class="`span-${[col.span]}`"
                :key="colIndex">
                <draggable
                  v-model="col.list"
                  :no-transition-on-drag="true"
                  v-bind="{group:'form', ghostClass: 'ghost',animation: 200, handle: '.drag-move'}"
                  @add="_draggableColAdd(item, colIndex, $event)">
                  <transition-group name="fade" tag="div" class="form-col-list">
                    <template v-for="(colList, listIndex) in col.list">
                      <form-item
                        :readOnly="readOnly"
                        :showControl="isDesign"
                        :class="colList.className"
                        :activeKey="activeKey"
                        :item="colList"
                        v-model="colList.control.value"
                        :key="listIndex"
                        @click="_formItemControlClick(colList, listIndex, col.list, $event)"
                        @checkClick="_formItemCheck(colList)">
                      </form-item>
                    </template>
                  </transition-group>
                </draggable>
              </div>
              <drag-control
                v-show="isDesign&&activeKey===item.name"
                @click="_formItemControlClick('',index,data.list,$event)"></drag-control>
            </div>
          </template>
          <template v-else>
            <form-item
              :readOnly="readOnly"
              :showControl="isDesign"
              :class="item.className"
              :activeKey="activeKey"
              :item="item"
              v-model="item.control.value"
              :key="index"
              @click="_formItemControlClick(item, index, data.list, $event)"
              @checkClick="_formItemCheck(item)">
            </form-item>
          </template>
        </template>
      </transition-group>
    </draggable>
  </ak-form>
</template>

<script>
import Draggable from 'vuedraggable'
import FormItem from './formItem'
import DragControl from './dragControl'
import bus from '@/utils/bus'

export default {
  name: 'formDesign',
  data() {
    return {
      rules: {},
      model: {},
      activeKey: ''
    }
  },
  components: {Draggable, FormItem, DragControl},
  props: {
    data: {
      type: Object,
      default: () => {
        return []
      }
    },
    remoteFunc: Object,
    readOnly: Boolean,
    isDesign: Boolean
  },
  watch: {
    remoteFunc: {
      handler: function (v) {
        this._setRemoteFunc(v)
      },
      deep: true
    }
  },
  created() {
    if (!this.isDesign) {
      this._getRulesModel()
    }
  },
  methods: {
    _formItemCheck(item, controlType) {
      // console.log('_formItemCheck')
      // console.log(item, controlType)
      this.activeKey = item.name
      this._setControlAttr(item, controlType)
    },
    _formItemControlClick(item, index, dataList, type) {
      // console.log('_formItemControlClick')
      // console.log(item, index, dataList, type)
      if (type === 'clone') {
        const newItem = JSON.parse(JSON.stringify(item))
        const key = newItem.type + new Date().getTime().toString()
        dataList.splice(index, 0, Object.assign(newItem, {name: key}))
      } else if (type === 'del') {
        dataList.splice(index, 1)
        this._setControlAttr({}, '')
      }
    },
    _draggableAdd(evt, item, isChildTable) {
      const newIndex = evt.newIndex
      const key = new Date().getTime().toString()
      const dataList = item || this.data.list
      const obj = JSON.parse(JSON.stringify(dataList[newIndex]))
      if (!obj) {
        return
      }
      const label = obj.label
      delete obj.label
      delete obj.icon
      if (obj.type === 'grid' || obj.type === 'childTable') {
        this.$set(dataList, newIndex, Object.assign({
          name: obj.type + key
        }, obj))
      } else {
        this.$set(dataList, newIndex, Object.assign({
          name: obj.type + key,
          item: {
            label: label
          },
          rules: []
        }, obj))
      }
      this.activeKey = obj.type + key
      this._setControlAttr(dataList[newIndex], isChildTable)
    },
    _draggableColAdd(item, index, evt, isChildTable) {
      const newIndex = evt.newIndex
      const row = evt.item
      let list = []
      if (isChildTable) {
        list = item.list
      } else {
        list = item.columns && item.columns[index].list
      }
      if (row.className === 'grid' || row.className === 'childTable') {
        list.splice(newIndex, 1)
      }
      this._draggableAdd(evt, list, isChildTable)
    },
    _setControlAttr(obj, controlType = '') {
      this.$store.commit('setControlAttr', obj)
      this.$store.commit('setParentType', controlType)
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
    setValue(obj) {
      if (!obj || Object.keys(obj).length === 0) {
        return
      }
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
    },
    _setRemoteFunc(v) {
      if (!this.isDesign) {
        bus.$emit('setRemoteFunc', v)
      }
    },
    validate() {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate()
          .then(res => {
            // console.log(res)
            // console.log('----====')
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
      // console.log('validateTable')
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
    _getText(text) {
      if (typeof text === 'string') {
        return text
      } else {
        return text && text.toString()
      }
    }
  },
  computed: {
    config() {
      const obj = {
        showMessage: true,
        trigger: 'change'
      }
      if (this.data) {
        return Object.assign({}, obj, this.data.config)
      }
      return obj
    }
  },
  mounted() {
    this._setRemoteFunc(this.remoteFunc)
  }
}
</script>
