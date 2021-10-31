<!-- Created by 337547038  -->
<template>
  <div class="components-list">
    <div v-for="(list,index) in controlList" :key="index">
      <div class="title">{{ list.title }}</div>
      <draggable
        itemKey="key123"
        tag="ul" v-model="list.children"
        :group="{ name:'form', pull:'clone',put:false}"
        ghost-class="ghost"
        :sort="false">
        <template #item="{element}">
          <li :class="[element.type]">
            <i :class="`icon-${element.icon}`"></i>
            <span>{{ element.label }}</span>
          </li>
        </template>
      </draggable>
    </div>
    <div v-if="searchDesign">
      <div class="title">已有表单字段</div>
      <div class="content">
        <el-checkbox
          v-for="item in formData"
          :key="item.name"
          :checked="getCheckbox(item.name)"
          @change="selectChange(item,$event)">
          {{ item.item.label }}
        </el-checkbox>
      </div>
    </div>
  </div>
</template>
<script>
import controlListData from './controlList'
import Draggable from 'vuedraggable'
import {computed, reactive, toRefs} from 'vue'

export default {
  name: 'formControl',
  props: {
    formData: Object,
    searchData: Object,
    searchDesign: Boolean
  },
  components: {Draggable},
  setup(props) {
    const state = reactive({
      selectValue: []
    })
    const controlList = computed(() => {
      if (props.searchDesign) {
        // 只返回基础字段
        return controlListData.slice(0, 1)
      } else {
        return controlListData
      }
    })
    // 筛选设计时左则勾选已有表单字段
    const selectChange = (obj, val) => {
      if (val) {
        // 勾选时追加
        const newObj = JSON.parse(JSON.stringify(obj))
        newObj.rules = [] // 清空校验规则
        newObj.customRules = []
        props.searchData.list.push(newObj)
      } else {
        props.searchData.list.forEach((item, index) => {
          if (item.name === obj.name) {
            props.searchData.list.splice(index, 1)
          }
        })
      }
    }
    // 筛选设计时初始时返已有表单字段勾选状态
    const getCheckbox = name => {
      let bool = false
      props.searchData.list.forEach(item => {
        if (item.name === name) {
          bool = true
        }
      })
      return bool
    }
    return {
      controlList,
      selectChange,
      getCheckbox,
      ...toRefs(state)
    }
  }
}
</script>
