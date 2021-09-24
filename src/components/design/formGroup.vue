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
                <form-group :data="item" data-type="not-nested"></form-group>
              </el-tab-pane>
            </el-tabs>
          </div>
        </template>
        <template v-else-if="element.type==='title'">
          <div
            class="title"
            :class="[element.className]"
            v-bind="element.control"
            v-html="element.control.value">
          </div>
        </template>
        <template v-else-if="element.type==='table'">
          <div class="form-table">
            <form-group :data="element" data-type="not-nested"></form-group>
          </div>
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
              <form-group :data="col" data-type="not-nested"></form-group>
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
            <el-collapse-item :title="getLabel(element)" name="1">
              <template #title v-if="element.help">
                {{ getLabel(element) }}
                <el-tooltip placement="top">
                  <template #content>
                    <span v-html="element.help"></span>
                  </template>
                  <i class="icon-help"></i>
                </el-tooltip>
              </template>
              <form-group :data="element"></form-group>
            </el-collapse-item>
          </el-collapse>
        </template>
        <template v-else>
          <el-form-item
            v-bind="element.item"
            :prop="element.name"
            :class="element.className"
            :label="getLabel(element)">
            <template #label v-if="element.help">
              {{ getLabel(element) }}
              <el-tooltip placement="top">
                <template #content>
                  <span v-html="element.help"></span>
                </template>
                <i class="icon-help"></i>
              </el-tooltip>
            </template>
            <el-input
              v-model="element.control.value"
              v-bind="element.control"
              :type="element.type==='password'?'password':''"
              v-if="element.type==='input'||element.type==='password'">
              <template v-slot:[key] v-for="(te,key) in element.slot">
                {{ te }}
              </template>
            </el-input>
            <el-input
              v-model="element.control.value"
              v-bind="element.control"
              type="textarea"
              v-if="element.type==='textarea'">
            </el-input>
            <el-radio-group
              v-bind="element.control"
              v-model="element.control.value"
              v-if="element.type==='radio'">
              <el-radio
                :key="index"
                :label="item.value"
                v-for="(item,index) in element.options">
                {{ item.label }}
              </el-radio>
            </el-radio-group>
            <el-checkbox-group
              v-bind="element.control"
              v-model="element.control.value"
              v-if="element.type==='checkbox'">
              <el-checkbox
                v-for="(item,index) in element.options"
                :key="index"
                :label="item.value">
              </el-checkbox>
            </el-checkbox-group>
            <el-select
              v-if="element.type==='select'"
              v-bind="element.control"
              v-model="element.control.value">
              <el-option
                v-for="item in element.options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-date-picker
              v-if="element.type==='datePicker'"
              type="date"
              v-bind="element.control"
              v-model="element.control.value">
            </el-date-picker>
            <el-switch
              v-if="element.type==='switch'"
              v-bind="element.control"
              v-model="element.control.value">
            </el-switch>
            <el-input-number
              v-if="element.type==='number'"
              v-model="element.control.value"
              v-bind="element.control">
            </el-input-number>
            <el-cascader
              v-if="element.type==='cascader'"
              v-model="element.control.value"
              v-bind="element.control"
              :options="element.options">
            </el-cascader>
            <el-upload
              v-if="element.type==='upload'"
              class="avatar-uploader">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <component :is="element" v-if="element.type==='component'" />
            <div v-if="element.type==='component'" v-html="element.template"></div>
            <div
              v-bind="element.control"
              v-if="element.type==='txt'"
              v-html="element.control.value">
            </div>
          </el-form-item>
        </template>
        <div class="drag-control">
          <div class="item-control">
            <i class="icon-plus" @click.stop="click('gridAdd',index,element)" v-if="gridAdd" title="添加列"></i>
            <i class="icon-clone" @click.stop="click('clone',index,element)" v-if="clone" title="克隆"></i>
            <i class="icon-del" @click.stop="click('del',index)"></i>
          </div>
          <div class="drag-move icon-move"></div>
        </div>
        <div class="tooltip">{{ element.name }}</div>
      </div>
    </template>
  </draggable>
</template>

<script>
import {reactive, toRefs, computed} from 'vue'
import {useStore} from 'vuex'
import Draggable from 'vuedraggable'
import Render from './render'

export default {
  name: "formGroup",
  components: {Draggable, Render},
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
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
      const controlType = ['grid', 'table', 'tabs', 'title']
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
      // 输入框时添加前后缀参数
      if (obj.type === 'input') {
        Object.assign(objectOther, {slot: {}})
      }
      dataList[newIndex] = Object.assign({
        name: obj.type + key,
      }, objectOther, obj)
      store.commit('setActiveKey', obj.type + key)
      store.commit('setControlAttr', dataList[newIndex])
      // grid时显示添加列按钮
      state.gridAdd = obj.type === 'grid'
      state.clone = indexType(obj.type)
    }
    // 点击激活当前
    const groupClick = (item, type) => {
      // console.log(item)
      if (type === 'gridChild') {
        if (!item.name) {
          item.name = 'gridChild' + new Date().getTime().toString()
        }
        item.type = type
      }
      // state.activeKey = item.name; // 当前激活
      store.commit('setActiveKey', item.name)
      store.commit('setControlAttr', item)
      state.gridAdd = item.type === 'grid'
      state.clone = indexType(item.type)
    }
    const getLabel = ele => {
      if (ele.item) {
        if (ele.item.showLabel) {
          return ''
        } else {
          return ele.item.label
        }
      } else {
        return ''
      }
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
      getLabel,
      getFormItemStyle
    }
  }
}
</script>
