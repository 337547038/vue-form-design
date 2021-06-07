<!--<Pagination :total="50" :current="1"/>-->
<template>
  <div :class="`${prefixCls}-page`" v-show="!hidePage">
    <div :class="`${prefixCls}-page-align`">
      <div class="total" v-if="showTotal">共<span>{{formatValue}}</span>条</div>
      <p-select :options="selectOptions" v-model="selectChange" v-if="pageSizes.length>0"></p-select>
      <div class="page-list">
        <ul class="clearfix">
          <li>
            <a href="javascript:void(0)" title="上一页" class="prev" :class="{'disabled':active===1}"
               @click="_goTo(active-1)">&lt;</a>
          </li>
          <li>
            <a href="javascript:;" title="1" @click="_goTo(1)" :class="{'active':active===1}">1</a>
          </li>

          <li v-if="pageStart>2">
            <a href="javascript:;" :title="`向前${pagerCount}页`" class="jump-prev" @click="_goTo(active-pagerCount)"></a>
          </li>
          <li v-for="(page,index) in pages[0]" :key="index">
            <a href="javascript:;" :title="page" v-text="page" :class="{'active':page===active}"
               @click="_goTo(page)"></a>
          </li>
          <li v-if="pageCount>pageEnd+1">
            <a href="javascript:;" :title="`向后${pagerCount}页`" class="jump-next" @click="_goTo(active+pagerCount)"></a>
          </li>

          <li v-if="pageCount>1">
            <a href="javascript:;" :title="pageCount" @click="_goTo(pageCount)" :class="{'active':active===pageCount}">{{pageCount}}</a>
          </li>
          <li>
            <a href="javascript:;" title="下一页" class="next" :class="{'disabled':pageCount<=active}"
               @click="_goTo(active+1)">&gt;</a>
          </li>
        </ul>
      </div>
      <div class="show-jumper" v-if="showJumper">
        前往
        <p-input v-model.number="goToPage" @blur="_blur" maxlength="5"></p-input>
        页
      </div>
    </div>
  </div>
</template>
<script>
import {prefixCls} from '../prefix'
import pInput from '../input/index'
import pSelect from '../select/select'

export default {
  name: `${prefixCls}Pagination`,
  data() {
    return {
      prefixCls: prefixCls,
      active: this.current, // 当前页
      goToPage: this.current, // 快速跳到第几页
      selectChange: this.pageSize
    }
  },
  created() {

  },
  props: {
    current: {// 当前面码
      type: Number,
      default: 1
    },
    total: {// 数据总数
      type: Number,
      default: 0
    },
    pageSize: {// 每页条数
      type: Number,
      default: 20
    },
    showJumper: {// 显示快速切换到某一页
      type: Boolean,
      default: false
    },
    pagerCount: {// 点击折叠向前或向后跳多少页
      type: Number,
      default: 5
    },
    pageSizes: {
      type: Array,
      default: () => {
        return []
      }
    },
    showTotal: {
      type: Boolean,
      default: false
    },
    change: Function, // 页码改变的回调，返回改变后的页码
    changePageSizes: Function, // 每页显示条数改变事件
    hideSinglePage: { // 当只有一页时，是否隐藏分页
      type: Boolean,
      default: false
    },
    format: { // 总记录数值转成千分制
      type: Boolean,
      default: false
    }
  },
  components: {pInput, pSelect},
  mounted() {
  },
  watch: {
    selectChange(v) {
      // 改变每页显示条数后，更新当前页
      if (this.active > this.pageCount) {
        this.active = this.pageCount
      }
      this.changePageSizes && this.changePageSizes(v)
      this.$emit('changePageSizes', v)
    }
  },
  methods: {
    _goTo(page) {
      let goToPage = page
      if (page > this.pageCount) {
        goToPage = this.pageCount
      }
      if (page < 1) {
        goToPage = 1
      }
      this.active = goToPage
      this.goToPage = goToPage
      this.$emit('update:current', this.active)
      // this.$emit('update:pagerCount', this.selectChange)
      this.change && this.change(this.active) // 同时返回两种绑定
      this.$emit('change', this.active)
    },
    _blur() {
      const toPage = parseInt(this.goToPage)
      this._goTo(toPage)
    }
  },
  computed: {
    hidePage() {
      return this.hideSinglePage && this.pageCount <= 1
    },
    pageCount() {
      // 一共分多少页
      return Math.ceil(this.total / this.selectChange)
    },
    pages() {
      let start = ''
      let end = this.pageCount - 1

      if (this.active + parseInt(this.pagerCount / 2) < this.pageCount) {
        end = this.active + parseInt(this.pagerCount / 2)
      }

      if (this.active >= this.pagerCount) {
        start = this.active - parseInt(this.pagerCount / 2)
      } else {
        // 当前页小于pagerCount时
        end = this.pagerCount > this.pageCount ? this.pageCount : this.pagerCount
      }
      // 接近尾页时
      if (this.pageCount - this.active < this.pagerCount) {
        const fixedStart = this.pageCount - this.pagerCount + 1
        start = fixedStart > start ? start : fixedStart
      }
      if (start < 2) {
        start = 2
      }
      if (end >= this.pageCount - 1) {
        end = this.pageCount - 1
      }
      // 如果只有一页时
      let showPages = []
      let forStart = start
      while (forStart <= end) {
        showPages.push(forStart)
        forStart++
      }
      return [showPages, start, end]
    },
    pageEnd() {
      return this.pages[2]
    },
    pageStart() {
      // 页码循环开始和结束，用来判断前后的三个点链接显示
      return this.pages[1]
    },
    selectOptions() {
      let options = []
      this.pageSizes.forEach(item => {
        options.push({label: `每页${item}条`, value: item})
      })
      return options
    },
    formatValue() {
      let val = this.total
      if (this.format) {
        val = this.total.toString().replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
      }
      return val
    }
  }
}
</script>
