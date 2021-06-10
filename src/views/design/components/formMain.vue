<!-- Created by 337547038 on 2021/6/10 0010. -->
<template>
  <draggable
    v-model="data.list"
    v-bind="{group:'form', ghostClass: 'ghost',animation: 200, handle: '.drag-move'}"
    @add="_draggableAdd">
    <transition-group name="fade" tag="div" class="form-list">
      <template v-for="(item, index) in data.list">
        <template v-if="item.type==='tabs'">
          <div
            class="form-tabs"
            :class="{active:activeKey===item.name}"
            :key="index"
            @click.stop="_formItemCheck(item)">
            <ak-tabs :class="[item.className]">
              <ak-tab-pane
                v-for="(tab,index) in item.columns"
                :key="`pane${index}`"
                :label="tab.label">
                <formMain
                  tabsForm="true"
                  :key="index"
                  :data="tab"
                  :formType="formType">
                </formMain>
              </ak-tab-pane>
            </ak-tabs>
            <drag-control
              v-if="formType===0"
              v-show="activeKey===item.name"
              @click="_formItemControlClick({item:'',index:index,data:data.list,evt:$event})">
            </drag-control>
            <div class="field-type" v-if="formType===0">{{item.type}}</div>
          </div>
        </template>
        <template v-else-if="item.type==='childTable'">
          <div
            v-if="formType===0"
            class="child-table"
            :key="index"
            :class="{active:activeKey===item.name,[item.className]:item.className}"
            @click.stop="_formItemCheck(item)">
            <drag-item
              @add="_draggableColAdd(item, index, $event,true)"
              @checkClick="_formItemCheck($event,true)"
              @click="_formItemControlClick"
              :data="item"
              :formType="formType"
              :activeKey="activeKey">
            </drag-item>
            <drag-control
              v-show="formType===0&&activeKey===item.name"
              @click="_formItemControlClick({item:'',index:index,data:data.list,evt:$event})">
            </drag-control>
            <div class="field-type">{{item.type}}</div>
          </div>
          <div v-else :key="index" class="child-table">
            <ak-table :data="item.tableData" :key="item.name" v-bind="item.control">
              <template v-for="(t,index) in item.list">
                <ak-column :label="t.item.label" :key="index" :className="t.className">
                  <template slot-scope="scope">
                    <div v-if="formType===2">{{_getText(scope.row[t.name])}}</div>
                    <form-item
                      v-else
                      :readOnly="formType===2"
                      ref="formItemEl"
                      :itemRules="t.rules"
                      v-model="scope.row[t.name]"
                      :item="t"
                      :key="index">
                    </form-item>
                  </template>
                </ak-column>
              </template>
              <ak-column label="操作" v-if="formType!==2">
                <template slot-scope="scope">
                  <i class="icon-del" @click="_delRow(item.tableData,scope.index)" title="删除"></i>
                </template>
              </ak-column>
            </ak-table>
            <ak-button @click="_addTableRow(item)" icon="icon-plus" v-if="formType!==2">添加</ak-button>
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
              <drag-item
                @add="_draggableColAdd(item, colIndex, $event)"
                @checkClick="_formItemCheck($event)"
                @click="_formItemControlClick"
                :data="col"
                :formType="formType"
                :activeKey="activeKey">
              </drag-item>
            </div>
            <drag-control
              v-if="formType===0"
              v-show="activeKey===item.name"
              @click="_formItemControlClick({item:'',index:index,data:data.list,evt:$event})">
            </drag-control>
            <div class="field-type" v-if="formType===0">{{item.type}}</div>
          </div>
        </template>
        <template v-else>
          <form-item
            :readOnly="formType===2"
            :showControl="formType===0"
            :class="item.className"
            :activeKey="activeKey"
            :item="item"
            v-model="item.control.value"
            :key="index"
            @click="_formItemControlClick({item:item, index:index, data:data.list, evt:$event})"
            @checkClick="_formItemCheck(item)">
          </form-item>
        </template>
      </template>
    </transition-group>
  </draggable>
</template>

<script>
import Draggable from 'vuedraggable'
import FormItem from './formItem'
import DragControl from './dragControl'

import DragItem from './dragItem'

export default {
  name: 'formMain',
  data() {
    return {}
  },
  props: {
    tabsForm: String,
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    formType: {
      type: Number,
      default: 1 // 0设计模式，1表单提交模式，2详情预浏模式
    }
  },
  watch: {},
  components: {Draggable, FormItem, DragControl, DragItem},
  methods: {
    _formItemCheck(item, isChildTable) {
      console.log('_formItemCheck')
      console.log(item.name)
      // this.activeKey = item.name
      this.$store.commit('setActiveKey', item.name)
      this._setControlAttr(item, !isChildTable)
    },
    _formItemControlClick(obj) {
      const {item, index, data, evt} = obj
      if (evt === 'clone') {
        const newItem = JSON.parse(JSON.stringify(item))
        const key = newItem.type + new Date().getTime().toString()
        data.splice(index, 0, Object.assign(newItem, {name: key}))
      } else if (evt === 'del') {
        data.splice(index, 1)
        this._setControlAttr({})
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
      if (this.tabsForm) {
        const row = evt.item
        if (row.className === 'tabs') {
          console.log(evt)
          let i = 0
          for (let key in dataList) {
            if (dataList[key].type === 'tabs') {
              dataList.splice(i, 1)
              break
            }
            i++
          }
          // const list = item.columns[index].list
          // list.splice(newIndex, 1)
          return
        }
      }
      const label = obj.label
      delete obj.label
      delete obj.icon
      if (obj.type === 'grid' || obj.type === 'childTable' || obj.type === 'tabs') {
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
      // this.activeKey = obj.type + key
      this.$store.commit('setActiveKey', obj.type + key)
      this._setControlAttr(dataList[newIndex], isChildTable)
    },
    _draggableColAdd(item, index, evt, isChildTable) {
      console.log('_draggableColAdd')
      console.log(item, index, evt, isChildTable)
      const newIndex = evt.newIndex
      const row = evt.item
      let list = []
      if (isChildTable) {
        list = item.list
      } else {
        list = item.columns && item.columns[index].list
      }
      // 不能嵌套
      const include = ['gird', 'childTable', 'tabs']
      if (include.indexOf(row.className) !== -1) {
        list.splice(newIndex, 1)
        return
      }
      /* console.log('coladd')
      console.log(isChildTable) */
      this._draggableAdd(evt, list, !isChildTable)
    },
    _draggableTabsAdd(item, index, evt) {
      // 不能嵌套自己
      console.log('tabs add')
      const newIndex = evt.newIndex
      const row = evt.item
      const list = item.columns && item.columns[index].list
      const include = ['tabs']
      if (include.indexOf(row.className) !== -1) {
        list.splice(newIndex, 1)
        return
      }
      this._draggableAdd(evt, list)
    },
    _setControlAttr(obj, tableHeadCheck = true) {
      /* console.log('setcontrol')
      console.log(tableHeadCheck) */
      this.$store.commit('setControlAttr', obj)
      this.$store.commit('tableHeadCheck', tableHeadCheck)
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
    _getText(text) {
      if (typeof text === 'string') {
        return text
      } else {
        return text && text.toString()
      }
    },
    getTable() {
      return this.$refs.formItemEl
    }
  },
  computed: {
    activeKey() {
      return this.$store.state.form.activeKey
    }
  },
  mounted() {
  }
}
</script>
