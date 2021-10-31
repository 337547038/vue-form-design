<!-- Created by 337547038 on 2021/10/29. -->
<template>
  <el-table
    :stripe="true"
    :data="data"
    v-bind="tableData.config"
    ref="tableEl">
    <template v-for="item in tableData.columns" :key="item.prop||item.label">
      <el-table-column v-bind="item">
        <template #header="scope" v-if="item.help">
          {{ scope.column.label }}
          <el-tooltip placement="top">
            <template #content>
              <span v-html="item.help"></span>
            </template>
            <i class="icon-help"></i>
          </el-tooltip>
        </template>
        <template #default="scope" v-if="$slots[item.prop]">
          <slot
            :name="item.prop"
            :row="scope.row"
            :$index="scope.$index">
          </slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
import {reactive, toRefs, onMounted, nextTick, ref, getCurrentInstance} from 'vue'
import Sortable from 'sortablejs'

export default {
  name: "mainTable",
  props: {
    tableData: Object, // 表格配置及cloumns数据
    data: Array,  // 表格列表数据
    isDesign: { // 是否为设计模式，设计模式下才允许拖动表格改变列
      type: Boolean,
      default: false
    }
  },
  components: {},
  emits: ['headerClick'],
  setup(props, {emit}) {
    const state = reactive({})
    const {ctx} = getCurrentInstance()
    // /列拖拽
    const columnDrop = () => {
      // const wrapperTr = document.querySelector('.el-table__header-wrapper tr')
      const wrapperTr = ctx.$el.querySelector('.el-table__header-wrapper tr')
      Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: evt => {
          const oldItem = props.tableData.columns[evt.oldIndex]
          props.tableData.columns.splice(evt.oldIndex, 1)
          props.tableData.columns.splice(evt.newIndex, 0, oldItem)
        }
      })
    }
    onMounted(() => {
      nextTick(() => {
        if (props.isDesign) {
          columnDrop()
        }
      })
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
