<template>
  <div class="gantt-date-time-line">
    <div
      class="date"
      v-for="(item, index) in getDatesInLastHalfMonth()"
      :key="item.getTime()"
    >
      <span class="month">{{ getMonth(item, index) }}</span>
      <div class="day-date">
        <span>{{ dict.day[item.getDay()] }}</span
        >{{ item.getDate().toString().padStart(2, '0') }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { computed } from 'vue'

  const dict = {
    day: { 0: '日', 1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六' },
    month: {
      1: '一',
      2: '二',
      3: '三',
      4: '四',
      5: '五',
      6: '六',
      7: '七',
      8: '八',
      9: '九',
      10: '十',
      11: '十一',
      12: '十二'
    }
  }
  const getDatesInLastHalfMonth = () => {
    const dates = []
    const currentDate = new Date()
    const start = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - 15
    )
    const end = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 15
    )

    const date = start
    while (date <= end) {
      dates.push(new Date(date))
      date.setDate(date.getDate() + 1)
    }

    return dates
  }
  const getMonth = (date: Date, index: number) => {
    if (index === 0 || date.getDate() === 1) {
      return dict.month[date.getMonth() + 1] + '月'
    }
  }
</script>
<style scoped lang="scss">
  .gantt-date-time-line {
    display: flex;
    .date {
      width: 46px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .month {
        white-space: nowrap;
      }
    }
    .day-date {
      display: flex;
    }
  }
</style>
