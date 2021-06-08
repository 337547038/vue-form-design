<!-- Created by 337547038 on. -->
<template>
  <ak-form
    :rules="rules"
    v-model="model"
    ref="form"
    :class="data.config.className"
    :labelWidth="data.config.labelWidth">
    <draggable
      v-model="data.list"
      v-bind="{group:'form', ghostClass: 'ghost',animation: 200, handle: '.drag-move'}"
      @end="_draggableEnd"
      @add="_draggableAdd">
      <transition-group name="fade" tag="div" class="form-list">
        <template v-for="(item, index) in data.list">
          <template v-if="item.type==='childTable'">
            <div
              class="child-table"
              :key="index"
              :class="{active:activeKey===item.name,[item.className]:item.className}"
              @click="_formItemClick(item,index)">
              <draggable
                v-model="item.list"
                :no-transition-on-drag="true"
                v-bind="{group:'form', ghostClass: 'ghost',animation: 200, handle: '.drag-move'}"
                @end="_draggableEnd"
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
                      @click="_formItemClick(colList,listIndex,item.list,$event,'child')">
                    </form-item>
                  </template>
                </transition-group>
              </draggable>
              <drag-control
                v-show="activeKey===item.name"
                @click="_formItemClick('',index,data.list,$event)">
              </drag-control>
            </div>
          </template>
          <template v-else-if="item.type === 'grid'">
            <div class="form-row"
                 :key="index"
                 :class="{active:activeKey===item.name,[item.className]:item.className}"
                 @click="_formItemClick(item,index)">
              <div
                class="form-col"
                v-for="(col,colIndex) in item.columns"
                :class="`span-${[col.span]}`"
                :key="colIndex">
                <draggable
                  v-model="col.list"
                  :no-transition-on-drag="true"
                  v-bind="{group:'form', ghostClass: 'ghost',animation: 200, handle: '.drag-move'}"
                  @end="_draggableEnd"
                  @add="_draggableColAdd(item, colIndex, $event)">
                  <transition-group name="fade" tag="div" class="form-col-list">
                    <template v-for="(colList, listIndex) in col.list">
                      <form-item
                        :showControl="true"
                        :class="colList.className"
                        :activeKey="activeKey"
                        :item="colList"
                        v-model="colList.control.value"
                        :key="listIndex"
                        @click="_formItemClick(colList,listIndex,col.list,$event)">
                      </form-item>
                    </template>
                  </transition-group>
                </draggable>
              </div>
              <drag-control
                v-show="activeKey===item.name"
                @click="_formItemClick('',index,data.list,$event)"></drag-control>
            </div>
          </template>
          <template v-else>
            <form-item
              :showControl="true"
              :class="item.className"
              :activeKey="activeKey"
              :item="item"
              v-model="item.control.value"
              :key="index"
              @click="_formItemClick(item,index,data.list,$event)">
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

export default {
  name: 'formDrag',
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
    }
  },
  watch: {},
  created() {
  },
  methods: {
    _formItemClick(item, index, dataList, type, controlType) {
      console.log(item)
      if (type === 'clone') {
        const newItem = JSON.parse(JSON.stringify(item))
        const key = newItem.type + new Date().getTime().toString()
        dataList.splice(index, 0, Object.assign(newItem, {name: key}))
      } else if (type === 'del') {
        dataList.splice(index, 1)
        this._setControlAttr({}, controlType)
      } else {
        type && type.stopPropagation()
        this.activeKey = item.name
        this._setControlAttr(item, controlType)
      }
    },
    _draggableAdd(evt, item, isChildTable) {
      // console.log('add', evt)
      // console.log(item)
      const newIndex = evt.newIndex
      const key = new Date().getTime().toString()
      const dataList = item || this.data.list
      const obj = JSON.parse(JSON.stringify(dataList[newIndex]))
      if (!obj) {
        return
      }
      if (obj.type === 'grid' || obj.type === 'childTable') {
        this.$set(dataList, newIndex, Object.assign({
          name: obj.type + key
        }, JSON.parse(JSON.stringify(obj))))
      } else {
        this.$set(dataList, newIndex, Object.assign({
          name: obj.type + key,
          item: {
            label: obj.label
          },
          rules: []
        }, obj))
      }
      this.activeKey = obj.type + key
      this._setControlAttr(dataList[newIndex], isChildTable)
    },
    _draggableEnd() {

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
    }
  },
  computed: {},
  mounted() {
  }
}
</script>
