<!-- Created by 337547038 on 2018/12/24 0024. -->
<!--月面板-->
<template>
  <div class="calendar-months clearfix">
    <a v-for="(item,index) in monthList" :class="[_getClass(index)]" v-text="item" :key="index"
       @click="_selectMonth(index,$event)"></a>
  </div>
</template>

<script>
export default {
  name: 'month',
  data () {
    return {}
  },
  props: {
    value: null,
    bodyValue: null
  },
  watch: {},
  components: {},
  methods: {
    _getClass (index) {
      const time = new Date(this.value.getFullYear(), this.value.getMonth()).toDateString()
      const timeSelect = new Date(this.bodyValue.getFullYear(), index).toDateString()
      const disableDate = new Date(this.value.getFullYear(), index)
      return {
        'calendar-date-select': time === timeSelect,
        'calendar-date-disabled': this.$parent.disabledDate(disableDate)// 不能选择的
      }
    },
    _selectMonth (index, e) {
      let disabled = e.target.className
      if (disabled.indexOf('calendar-date-disabled') === -1) {
        const date = new Date(this.value.getFullYear(), index).toDateString()
        this.$emit('click', date)
      }
    }
  },
  computed: {
    monthList () {
      return ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    }
  },
  mounted () {
  }
}
</script>
