<template>
  <tbody>
  <template v-for="(row,rowIndex) in data">
    <tr
      :key="rowIndex"
      :class="{'warning':$parent.selectedRows.indexOf(row) !== -1,[`parent-tr-${rowIndex+1}`]:colsExtend.length,[row.trClass]:row.trClass}"
      @click="_rowClick(row, rowIndex)">
      <TableTd
        v-for="(column,indexTd) in colsNoExtend"
        :column="column"
        :row="row"
        :index="rowIndex"
        :columnIndex="indexTd"
        :title="$parent.title"
        :key="indexTd"
        :showHideExtend="showHideExtend"
        :toggle="toggle[rowIndex]===undefined?defaultToggle:toggle[rowIndex]"
        @cellClick="_cellClick">
      </TableTd>
    </tr>
    <!--子级行-->
    <template v-if="hasChild">
      <tr
        v-for="(item,index) in row.children"
        :key="'child'+index"
        v-show="toggle[rowIndex]===undefined?defaultToggle:toggle[rowIndex]"
        :class="{[row.trClass]:row.trClass}"
        class="tr-child"
        @cllick="_rowClick(item, index)">
        <TableTd
          v-for="(child,childIndex) in colsNoExtend"
          :column="child"
          :row="item"
          :index="index"
          :columnIndex="childIndex"
          :title="$parent.title"
          :key="'childTd'+childIndex"
          :parentRow="row"
          @cellClick="_cellClick">
        </TableTd>
      </tr>
    </template>
    <!--扩展列-->
    <tr
      :key="'tr' + rowIndex" v-if="colsExtend.length>0"
      class="extend"
      :class="{'warning':$parent.selectedRows.indexOf(row) !== -1,[`extend-tr-${rowIndex+1}`]:true}"
      v-show="toggle[rowIndex]===undefined?defaultToggle:toggle[rowIndex]"
      @cllick="_rowClick(row, rowIndex)">
      <TableTd
        v-for="(column,indexTd) in colsExtend"
        :column="column"
        :row="row"
        :index="rowIndex"
        :title="$parent.title"
        :key="indexTd"
        :colspan="colsNoExtend.length"
        @cellClick="_cellClick">
      </TableTd>
    </tr>
  </template>
  </tbody>
</template>
<script>
import TableTd from './td'

window.rowspanColspan = ''
export default {
  name: 'TableBody',
  props: {
    data: Array,
    rowColSpan: Function,
    hasChild: Boolean,
    lazyLoad: Function
  },
  components: {TableTd},
  data () {
    return {
      defaultToggle: this.$parent.extendToggle, // 默认展开或收起状态
      toggle: {} // {1: true, 2: false, 0: false} // 对应每行展开或收起状态
    }
  },
  computed: {
    colsExtend () {
      return this.$parent.columns.filter(item => {
        return item.type === 'extend'
      })
    },
    colsNoExtend () {
      // 不带扩展的
      return this.$parent.columns.filter(item => {
        return item.type !== 'extend'
      })
    }
  },
  watch: {},
  methods: {
    // 展开或收起扩展行
    showHideExtend (index, row) {
      // 存在扩展时或有子级时
      if (this.colsExtend.length > 0 || this.hasChild) {
        if (typeof this.toggle[index] === 'undefined') {
          this.$set(this.toggle, index, !this.defaultToggle)
        } else {
          this.toggle[index] = !this.toggle[index]
        }
        // 展开时，如果是懒加载
        if (this.toggle[index] && this.lazyLoad) {
          this.lazyLoad(row, child => {
            row.children = child
          })
        }
      }
    },
    _rowClick (row, index) {
      this.$emit('rowClick', row, index)
    },
    _cellClick (row, column, rowIndex, columnIndex) {
      this.$emit('cellClick', row, column, rowIndex, columnIndex)
    }
  },
  created () {
  },
  mounted () {
  },
  directives: {}
}
</script>
