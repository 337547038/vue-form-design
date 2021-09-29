<!-- Created by 337547038 on 2021/9/8. -->
<template>
  <draggable
    itemKey="key-form"
    v-model="data.list"
    name="fade"
    class="drag"
    v-bind="{group:'form', ghostClass: 'ghost',animation: 200, handle: '.drag-move'}"
    @add="draggableAdd">
    <template #item="{element,index}">
      <div
        class="group"
        :class="{['group-'+element.type]:true,active:activeKey===element.name}"
        :style="getFormItemStyle(element)"
        @click.stop="groupClick(element)">
        <template v-if="element.type==='tabs'">
          <div class="form-tabs">
            <el-tabs v-bind="element.control" :class="[element.className]">
              <el-tab-pane
                v-for="(item,index) in element.columns"
                :label="item.label"
                :key="index">
                <form-group
                  :data="item"
                  data-type="not-nested"
                  :type="type"></form-group>
              </el-tab-pane>
            </el-tabs>
          </div>
        </template>
        <template v-else-if="element.type==='title'">
          <div
            class="title"
            :class="[element.className]"
            v-bind="element.control"
            v-html="element.control.modelValue">
          </div>
        </template>
        <template v-else-if="element.type==='table'">
          <div class="form-table" v-if="type===2">
            <form-group
              :data="element"
              data-type="not-nested"
              :type="type">
            </form-group>
          </div>
          <form-table v-else :data="element"/>
        </template>
        <template v-else-if="element.type==='grid'">
          <el-row class="form-row" :class="[element.className]">
            <el-col
              class="form-col"
              :class="{'active-col':activeKey===col.name,[col.className]:col.className}"
              v-bind="col.attr"
              v-for="(col,index) in element.columns"
              :key="index"
              @click.stop="groupClick(col,'gridChild')">
              <form-group
                :data="col"
                data-type="not-nested"
                :type="type">
              </form-group>
              <div class="drag-control">
                <div class="item-control">
                  <i class="icon-del" @click.stop="click('delGridChild',index,element.columns)"></i>
                </div>
              </div>
            </el-col>
          </el-row>
        </template>
        <template v-else-if="element.type==='card'">
          <el-collapse model-value="1">
            <el-collapse-item :title="element.item.label" name="1">
              <template #title v-if="element.help">
                {{ element.item.label }}
                <el-tooltip placement="top">
                  <template #content>
                    <span v-html="element.help"></span>
                  </template>
                  <i class="icon-help"></i>
                </el-tooltip>
              </template>
              <form-group :data="element" :type="type"></form-group>
            </el-collapse-item>
          </el-collapse>
        </template>
        <template v-else>
          <form-item :element="element" :type="type"></form-item>
        </template>
        <div class="drag-control" v-if="type===2">
          <div class="item-control">
            <i class="icon-plus" @click.stop="click('gridAdd',index,element)" v-if="gridAdd" title="添加列"></i>
            <i class="icon-clone" @click.stop="click('clone',index,element)" v-if="clone" title="克隆"></i>
            <i class="icon-del" @click.stop="click('del',index)"></i>
          </div>
          <div class="drag-move icon-move"></div>
        </div>
        <div class="tooltip" v-if="type===2">{{ element.name }}</div>
      </div>
    </template>
  </draggable>
</template>

<script>
import {reactive, toRefs, computed} from 'vue'
import {useStore} from 'vuex'
import Draggable from 'vuedraggable'
import FormItem from './item.vue'
import FormTable from './formTable.vue'

export default {
  name: "formGroup",
  components: {Draggable, FormItem, FormTable},
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    type: Number // 1新增；2设计；3查看
  },
  setup(props) {
    const store = useStore()
    const state = reactive({
      clone: true,
      gridAdd: false
    })
    const activeKey = computed(() => {
      return store.state.form.activeKey
    })
    const indexType = type => {
      const controlType = ['grid', 'table', 'tabs']
      return controlType.indexOf(type) === -1
    }
    // 删除或复制
    const click = (type, index, item) => {
      if (type === 'clone') {
        console.log(item)
        const key = item.type + new Date().getTime().toString()
        const newItem = JSON.parse(JSON.stringify(item))
        props.data.list.splice(index, 0, Object.assign(newItem, {name: key}))
      } else if (type === 'del') {
        props.data.list.splice(index, 1)
        // 清空右侧栏信息
        store.commit('setActiveKey', '')
        store.commit('setControlAttr', {})
      } else if (type === 'gridAdd') {
        item.columns.push({
          list: [],
          attr: {span: 12}
        })
      } else if (type === 'delGridChild') {
        item.splice(index, 1)
      }
    }
    const draggableAdd = evt => {
      const newIndex = evt.newIndex
      const key = new Date().getTime().toString()
      const dataList = props.data.list
      const obj = JSON.parse(JSON.stringify(dataList[newIndex]))
      const isNested = evt.target && evt.target.getAttribute('data-type') // 不能嵌套
      if (isNested === 'not-nested' && !indexType(obj.type)) {
        dataList.splice(newIndex, 1)
        return
      }
      if (!obj) {
        return
      }
      const label = obj.label
      delete obj.label
      delete obj.icon
      let objectOther = {}
      if (!indexType(obj.type)) {
        // 不显示复制
        objectOther = {}
      } else {
        // 除了以上类型时
        objectOther = {
          item: {
            label: label,
            showLabel: false
          },
          rules: []
        }
      }
      dataList[newIndex] = Object.assign({
        name: obj.type + key,
      }, obj, objectOther)
      store.commit('setActiveKey', obj.type + key)
      store.commit('setControlAttr', dataList[newIndex])
      // grid时显示添加列按钮
      state.gridAdd = obj.type === 'grid'
      state.clone = indexType(obj.type)
    }
    // 点击激活当前
    const groupClick = (item, type) => {
      if (type === 'gridChild') {
        if (!item.name) {
          item.name = 'gridChild' + new Date().getTime().toString()
        }
        item.type = type
      }
      store.commit('setActiveKey', item.name)
      store.commit('setControlAttr', item)
      state.gridAdd = item.type === 'grid'
      state.clone = indexType(item.type)
    }
    const getFormItemStyle = ele => {
      if (ele.item && ele.item.span) {
        return {width: ele.item.span / 24 * 100 + '%'}
      }
    }
    return {
      click,
      draggableAdd,
      ...toRefs(state),
      groupClick,
      activeKey,
      getFormItemStyle
    }
  }
}
</script>
