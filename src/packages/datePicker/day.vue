<!-- Created by 337547038 on 2018/12/24 0024. -->
<!--日期面板-->
<template>
  <div class="calendar-days">
    <div class="calendar-week clearfix">
      <a>日</a>
      <a>一</a>
      <a>二</a>
      <a>三</a>
      <a>四</a>
      <a>五</a>
      <a>六</a>
    </div>
    <div class="calendar-list clearfix">
      <a v-for="(item,index) in days" :class="[_dayClass(item)]" @click="_selectDay(item,$event)" :key="index">{{item.d}}
        <span v-text="_innerHTML(item)" v-if="_innerHTML(item)"></span>
      </a>
    </div>
    <div class="calendar-time clearfix" v-if="type==='datetime'">
      <div class="calendar-time-input">
        <input type="text" v-model="hours" maxlength="2" oninput="value=value.replace(/[^\d]/g,'')" onfocus="this.select()">:
        <input type="text" v-model="minutes" maxlength="2" oninput="value=value.replace(/[^\d]/g,'')" onfocus="this.select()">:
        <input type="text" v-model="seconds" maxlength="2" oninput="value=value.replace(/[^\d]/g,'')" onfocus="this.select()">
      </div>
      <a class="btn-time" @click="_selectConfirm">确定</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'day',
  data () {
    return {
      selectValue: this.bodyValue,
      hours: this.value.getHours(),
      minutes: this.value.getMinutes(),
      seconds: this.value.getSeconds()
    }
  },
  props: {
    value: null,
    bodyValue: null,
    type: String // 日期类型
  },
  components: {},
  methods: {
    _dayClass (item) {
      // 添加相对应样式，今天、禁用
      let time = new Date(item.y, item.m, item.d)
      let time2 = this.selectValue.toDateString()// 这里用初始值，否则选了上下年月，会一直选中一天
      return {
        'calendar-date-out': item.p || item.n, // 非当前月
        'calendar-date-today': time.toDateString() === new Date().toDateString(), // 今天的
        'calendar-date-select': time.toDateString() === time2, // 选中的
        'calendar-date-disabled': this.$parent.disabledDate(time)// 不能选择的
      }
    },
    _selectDay (item, e) {
      console.log(item)
      let disabled = e.target.className
      if (disabled.indexOf('calendar-date-disabled') === -1) {
        const date = new Date(item.y, item.m, item.d)
        if (this.type === 'datetime') {
          // 有时分秒选择时不关闭，保存选中值
          this.selectValue = date
        } else {
          this.$emit('click', date.toDateString())
        }
      }
    },
    _selectConfirm () {
      this.hours = this.hours > 23 ? 23 : this.hours
      this.minutes = this.minutes > 59 ? 59 : this.minutes
      this.seconds = this.seconds > 59 ? 59 : this.seconds
      this.selectValue.setHours(this.hours)
      this.selectValue.setMinutes(this.minutes)
      this.selectValue.setSeconds(this.seconds)
      this.$emit('click', this.selectValue)
    },
    _innerHTML (item) {
      let time = new Date(item.y, item.m, item.d)
      return this.$parent.innerHTML && this.$parent.innerHTML(time)
    }
  },
  computed: {
    days () {
      let days = []
      const year = this.value.getFullYear()
      const month = this.value.getMonth()
      const time = new Date(year, month, 1)
      // 计算上个月剩多少天
      time.setDate(0)// 切换到上个月的最后一天
      let lastDay = time.getDate()// 当月天数
      const week = time.getDay()// 星期几，前面已切换为上月最后一天，这里表示上个月最后一天是星期几
      let count = week + 1// 星期天开始
      while (count > 0) {
        days.push({
          d: lastDay - count + 1,
          y: month > 0 ? year : year - 1, // 0为1月，即上一年
          m: month > 0 ? month - 1 : 11,
          p: true
        })
        count--
      }
      // 当前月
      time.setMonth(time.getMonth() + 2, 0)// 切换到当前月份的最后一天，+2是个月了，0再切换到上个月，即当前月
      lastDay = time.getDate()// 当月天数
      for (let i = 1; i <= lastDay; i++) {
        days.push({
          d: i,
          y: year,
          m: month
        })
      }
      // 下个月
      for (let i = 1; days.length < 42; i++) {
        days.push({
          d: i,
          y: month < 11 ? year : year + 1,
          m: month < 11 ? month + 1 : 0,
          n: true
        })
      }
      return days
    }
  },
  mounted () {
  }
}
</script>
