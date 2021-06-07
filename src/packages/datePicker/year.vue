<!-- Created by 337547038 on 2018/12/24 0024. -->
<!--年面板-->
<template>
  <div class="calendar-year clearfix">
    <a v-for="(item,index) in yearList" v-text="item"
       :class="[_getClass(item)]"
       @click="_selectYear(item,$event)" :key="index"></a>
  </div>
</template>

<script>
export default {
  name: 'year',
  data () {
    return {}
  },
  props: {
    value: null,
    bodyValue: null
  },
  components: {},
  methods: {
    _selectYear (item, e) {
      // 点击后直接将所选值交给父组件处理
      // 如果带有样式calendar-date-disabled的，不能点击
      let disabled = e.target.className
      if (disabled.indexOf('calendar-date-disabled') === -1) {
        this.$emit('click', item.toString())
      }
    },
    _getClass (item) {
      let time = new Date(item.toString())
      return {
        'calendar-date-select': item === this.value.getFullYear(),
        'calendar-date-disabled': this.$parent.disabledDate(time)// 不能选择的
      }
    }
  },
  computed: {
    /* getYear () {
      // 主要用于设定最初始的默认选择值
      return this.value.getFullYear()
    }, */
    yearList () {
      // 每次显示十年，显示前面四年，后面7年
      let array = []
      const year = this.bodyValue.getFullYear()
      for (let i = year - 4; i <= year + 7; i++) {
        array.push(i)
      }
      return array
    }
  },
  mounted () {
  }
}
</script>
