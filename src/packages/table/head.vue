<template>
  <thead v-if="showHeader">
  <tr v-for="(tr,index) in tableRow" :key="index" :class="{drag:$parent.drag}">
    <th v-for="(th,thIndex) in _getThead(index)"
        :key="thIndex"
        :rowspan="th.rowspan"
        :colspan="th.colspan"
        :class="[th.fixed,th.className]"
        :style="{textAlign:th.align}"
        :title="$parent.title||th.title?th.label:null"
        @mousemove="$parent._headMouseMove($event,thIndex)">
      <label @click="$parent._handleSelectAll" :class="[selectChecked,prefixCls+'-checkbox']"
             v-if="th.type==='selection'">
        <span :class="`${prefixCls}-checkbox-inner`"></span>
      </label>
      <template v-else-if="th.type==='index'">{{th.label}}</template>
      <template v-else>{{th.label}}
        <span class="caret-wrapper" v-if="th.sortBy">
              <i class="sort-caret asc" @click="$parent._sortClick(th.prop,'asc',$event)"></i>
              <i class="sort-caret desc" @click="$parent._sortClick(th.prop,'desc',$event)"></i>
            </span>
      </template>
      <a
        class="drag-line"
        v-if="$parent.drag&&th.drag"
        @mousedown="$parent._headMouseDown($event,thIndex)"></a>
    </th>
  </tr>
  </thead>
</template>

<script>
import {prefixCls} from '../prefix'

export default {
  name: 'tableHead',
  data () {
    return {
      prefixCls: prefixCls
    }
  },
  props: ['thead', 'showHeader', 'selectChecked'],
  components: {},
  watch: {},
  methods: {
    _getThead (index) {
      return this.addSpanData.filter(item => {
        return item._layer === index
      })
    },
    // 取子级所有列
    _getAllCol (id, len) {
      if (!len) {
        len = 0
      }
      this.thead.forEach(item => {
        if (item._tid === id) {
          if (item._child) {
            len = this._getAllCol(item._id, len)
          } else {
            len++
          }
        }
      })
      return len
    }
  },
  computed: {
    // 对数据进行改造，添加rowspan和colspan两个属性
    addSpanData () {
      let newData = []
      this.thead.forEach(item => {
        if (!item._child) {
          let row = this.tableRow - item._layer
          item.rowspan = row <= 1 ? null : row
        } else {
          let col = this._getAllCol(item._id)
          item.colspan = col <= 1 ? null : col
        }
        newData.push(item)
      })
      return newData
    },
    // 返回表头行数，
    tableRow () {
      let maxLayer = 0
      this.thead.forEach(item => {
        if (item._layer > maxLayer) {
          maxLayer = item._layer
        }
      })
      return maxLayer + 1
    }
  },
  mounted () {
  }
}
</script>
