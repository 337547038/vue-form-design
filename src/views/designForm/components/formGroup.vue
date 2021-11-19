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
        @click.stop="groupClick(element)"
        v-show="linksShow(element)">
        <template v-if="element.type==='tabs'">
          <div class="form-tabs">
            <el-tabs v-bind="element.control" :class="[element.className]">
              <el-tab-pane
                v-for="(item,index) in element.columns"
                :label="item.label"
                :key="index">
                <form-group
                  :data="item"
                  data-type="not-nested">
                </form-group>
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
          <div class="form-table" v-if="type===4">
            <form-group
              :data="element"
              data-type="not-nested">
            </form-group>
          </div>
          <child-table v-else :data="element" :type="type" />
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
                data-type="not-nested">
              </form-group>
              <div class="drag-control" v-if="type===4">
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
              <form-group :data="element"></form-group>
            </el-collapse-item>
          </el-collapse>
        </template>
        <template v-else>
          <form-item :element="element"></form-item>
        </template>
        <div class="drag-control" v-if="type===4">
          <div class="item-control">
            <i class="icon-plus" @click.stop="click('gridAdd',index,element)" v-if="gridAdd" title="添加列"></i>
            <i class="icon-clone" @click.stop="click('clone',index,element)" v-if="clone" title="克隆"></i>
            <i class="icon-del" @click.stop="click('del',index)"></i>
          </div>
          <div class="drag-move icon-move"></div>
        </div>
        <div class="tooltip" v-if="type===4">{{ element.name }}</div>
      </div>
    </template>
  </draggable>
</template>

<script>
import {reactive, toRefs, computed, inject} from 'vue'
import {useStore} from 'vuex'
import Draggable from 'vuedraggable'
import FormItem from './formItem.vue'
import ChildTable from './childTable.vue'

export default {
  name: "formGroup",
  components: {Draggable, FormItem, ChildTable},
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup(props) {
    const injectData = inject('DFStatusType', {})
    const store = useStore()
    const state = reactive({
      clone: true,
      gridAdd: false,
      type: injectData.type
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
      if (state.type !== 4) {
        return // 非设计模式
      }
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
      if (state.type !== 4) {
        return // 非设计模式
      }
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
      let isInput = {}
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
        if (obj.type === 'input' || obj.type === 'textarea' || obj.type === 'component') {
          // 单行或多行文本时，添加自定义快速校验字段
          isInput = {
            customRules: [] // 经过转换后追加到rules里
          }
        }
      }
      dataList[newIndex] = Object.assign({
        name: obj.type + key,
      }, obj, objectOther, isInput)
      store.commit('setActiveKey', obj.type + key)
      store.commit('setControlAttr', dataList[newIndex])
      // grid时显示添加列按钮
      state.gridAdd = obj.type === 'grid'
      state.clone = indexType(obj.type)
    }
    // 点击激活当前
    const groupClick = (item, type) => {
      // 设计模式下才执行
      if (state.type !== 4) {
        return
      }
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
    // 返回栅格宽度
    const getFormItemStyle = ele => {
      if (ele.config && ele.config.span) {
        return {width: ele.config.span / 24 * 100 + '%'}
      }
    }
    const linkageValue = inject('DFFormModel', '')
    // 根据关联条件显示隐藏当前项
    const linksShow = el => {
      // 当前项设置了关联条件，当关联主体的值等于当前组件设定的值时
      if (!el.config || !linkageValue) {
        return true
      }
      const key = el.config.linkKey
      const value = el.config.linkValue
      if (key && value && state.type !== 4) {
        /*if (linkageValue.value[el.config.linkKey] !== el.config.linkValue) {
          return false
        }*/
        //　多个条件时key和value分别使用,和&隔开，
        // 带有&分隔时，需要符合所有条件；否则符合其中一个条件即可
        const keySplit = key.split(/,|&/)
        const valueSplit = value.split(/,|&/)
        const hasAndSpit = key.indexOf('&') !== -1 || value.indexOf('&') !== -1// 存在&分隔
        let pass = false
        for (let i = 0; i < keySplit.length; i++) {
          if (hasAndSpit) {
            pass = true
            if (linkageValue.value[keySplit[i]] !== valueSplit[i]) {
              pass = false
              break
            }
          } else {
            if (linkageValue.value[keySplit[i]] === valueSplit[i]) {
              pass = true
              break
            }
          }
        }
        return pass
      }
      return true
    }
    return {
      click,
      draggableAdd,
      ...toRefs(state),
      groupClick,
      activeKey,
      getFormItemStyle,
      linksShow
    }
  }
}
</script>
