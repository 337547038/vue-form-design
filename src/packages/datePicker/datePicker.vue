<!--Created by 337547038 on 2018/9/5.-->
<template>
  <transition name="slide-toggle">
    <div :class="`${prefixCls}-date-picker clearfix`" v-if="showHide" :style="pickerStyle" @click="_stopPropagation">
      <div class="calendar">
        <div class="calendar-head">
          <a class="calendar-prev-year" @click="_yearClick(0)">«</a>
          <a class="calendar-prev-month" @click="_monthClick(0)" v-if="showMonthControl&&activePanel!='Year'">‹</a>
          <a class="calendar-year-select" @click="activePanel='Year'">{{year}}年</a>
          <a class="calendar-year-month" @click="activePanel='Month'" v-if="showMonth">{{month}}月</a>
          <a class="calendar-next-month" @click="_monthClick(1)" v-if="showMonthControl&&activePanel!='Year'">›</a>
          <a class="calendar-next-year" @click="_yearClick(1)">»</a>
        </div>
        <div class="calendar-body">
          <component
            v-model="activeValue"
            :is="activePanel"
            :bodyValue="bodyValue"
            :type="type"
            @click="_click">
          </component>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import Year from './year'
import Month from './month'
import Day from './day'
import {prefixCls} from '../prefix'

export default {
  name: 'datePicker',
  data () {
    return {
      prefixCls: prefixCls,
      activeValue: '', // 当前显示的值，即日历表头显示的日间值。在选择了年或月时改变
      bodyValue: '', // 用于在下拉面板内容区展示的值，根据上下年月点击而改变
      showHide: true,
      activePanel: '' // 当前显示的面板
    }
  },
  watch: {},
  props: {
    value: [Date, String, Number],
    disabledDate: {
      type: Function,
      default: function () {
        return false
      }
    },
    type: {
      type: String,
      default: 'date',
      validator: function (value) {
        // 四种类型，年/年月/年月日/年月日时分秒
        return ['year', 'month', 'date', 'datetime'].indexOf(value) !== -1
      }
    },
    offset: Object, // 坐标信息
    input: Function, // 选择回调
    innerHTML: Function,
    downStyle: Object, // 下拉面板样式
    positionTop: Boolean
  },
  components: {Year, Month, Day},
  created () {
    this.activeValue = this._getTime(this.value) // 判断检查日期合法，并设置初始默认值
    this.bodyValue = this._getTime(this.value)
    this._setActivePanel() // 根据参数展开默认面板
  },
  methods: {
    _yearClick (type) {
      // 前后年切换点击
      // type=0表示减，1表示加
      // 仅在年面板时，+－10，其它时间+-1
      let num = 1
      if (this.activePanel === 'Year') {
        num = 10
      }
      if (type === 0) {
        num = -num
      }
      // 在年面板选择时，点击上下年时，不需要更新头部显示，其他面板时实时更新
      if (this.activePanel === 'Year') {
        this.bodyValue = new Date(this.bodyValue.setYear(this.bodyValue.getFullYear() + num))
      } else {
        this.activeValue = new Date(this.activeValue.setYear(this.activeValue.getFullYear() + num))
      }
    },
    _monthClick (type) {
      // 前后月切换点击，只有在日期面板时显示，年或年月面板不显示
      // type=0表示减，1表示加
      let num = 1
      if (type === 0) {
        num = -num
      }
      this.activeValue = new Date(this.activeValue.setMonth(this.activeValue.getMonth() + num))
    },
    _getTime (date) {
      // 判断初始日期转为标准格式
      let time
      if (date) {
        time = new Date(date.toString())
        if (time.toString() === 'Invalid Date') {
          // 日期不合法
          time = new Date()
        }
      } else {
        // 空
        time = new Date()
      }
      return time
    },
    close () {
      this.showHide = false
    },
    _stopPropagation (e) {
      e.stopPropagation()
    },
    _click (value) {
      // 下拉日期时间点击回调事件
      console.log('click')
      console.log(value)
      if (this.activePanel === 'Year') {
        // value为string 如 2019
        // 年面板点击时
        if (this.type === 'year') {
          // 如果当前类型为年选择，则直接关闭下拉，返回当前选中值
          this.input(value)
          this.close()
        } else {
          // 其它情况下跳转到月选择面板
          // 更新activeValue的当前选中年，并显示月选择面板
          this.activeValue = new Date(this.activeValue.setYear(value))
          this.activePanel = 'Month'
        }
      } else if (this.activePanel === 'Month') {
        // value为 string Wed May 01 2019
        // 月面板点击时
        // 当前类型为年月时，则关闭下拉，返回当前值
        if (this.type === 'month') {
          this.input(value)
          this.close()
        } else {
          // 转到日期选择面板
          const month = new Date(value).getMonth()
          this.activeValue = new Date(this.activeValue.setMonth(month))
          this.activePanel = 'Day'
        }
      } else {
        // 日期面板
        this.input(value)
        this.close()
      }
    },
    _setActivePanel () {
      // 根据参数展开默认面板
      if (this.type === 'year') {
        // 年或年月选择时，默认显示年
        this.activePanel = 'Year'
      } else if (this.type === 'month') {
        this.activePanel = 'Month'
      } else {
        this.activePanel = 'Day'
      }
    }
  },
  computed: {
    year () {
      return new Date(this.activeValue).getFullYear()
    },
    month () {
      return new Date(this.activeValue).getMonth() + 1
    },
    pickerStyle () {
      // 下拉日期位置
      let style = null
      if (this.offset) {
        style = {
          left: this.offset.left + 'px',
          top: this.offset.top + this.offset.height + 'px'
        }
        if (this.positionTop) {
          style = {
            left: this.offset.left + 'px',
            bottom: this.offset.top + this.offset.height + 'px'
          }
        }
      }
      if (this.downStyle) {
        style = Object.assign({}, style, this.downStyle)
      }
      return style
    },
    showMonthControl () {
      // 显示月份上下切换。只有年月日类型时才显示
      // return this.type.length > 2
      return this.type === 'date' || this.type === 'datetime'
    },
    showMonth () {
      // 头部显示月份，仅在type='y'时不显示
      return this.type !== 'year'
    }
  },
  mounted () {
    // document.body.appendChild(this.$el)
  },
  destroyed () {
    // this.$el.parentNode.removeChild(this.$el)
  },
  filters: {}
}
</script>
