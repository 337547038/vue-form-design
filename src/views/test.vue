<template>
  <div class="container" ref="tableEl">
    <el-table :data="tableData" class="table" height="300">
      <el-table-column prop="date" label="日期" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="address" label="地址" />
    </el-table>
  </div>
</template>

<script setup>
  import { ref, onMounted, nextTick, computed } from 'vue'
  const tableData1 = ref([
    {
      date: '1',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    },
    {
      date: '2',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    },
    {
      date: '3',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    },
    {
      date: '4',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    },
    {
      date: '5',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    },
    {
      date: '6',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    },
    {
      date: '7',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    },
    {
      date: '8',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    },
    {
      date: '9',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    },
    {
      date: '10',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    },
    {
      date: '11',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    },
    {
      date: '12',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }
  ])
  const tableData = computed(() => {
    return [...tableData1.value, ...tableData1.value]
  })
  const tableEl = ref()
  const startScroll = () => {
    const divData = tableEl.value.querySelector('.el-scrollbar__wrap')
    /*setInterval(() => {
      divData.scrollTop += 1
      if (divData.clientHeight + divData.scrollTop === divData.scrollHeight) {
        //divData.scrollTop = 0
        console.log(divData.scrollTop, divData.scrollHeight)
        divData.scrollTop = divData.scrollTop - divData.scrollHeight / 2
        console.log(divData.scrollTop)
      }
    }, 10)*/
  }
  onMounted(() => {
    nextTick(() => {
      startScroll()
    })
  })
  /*export default {
    data() {
      return {
        tableData: [
          {
            date: '1',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '3',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '4',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '5',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '6',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '7',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '8',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '9',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '10',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '11',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '12',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ],
        timeId: null
      }
    },
    created() {
      this.$nextTick(() => {
        this.startScroll() //轮播
      })
    },
    unmounted() {
      clearInterval(this.timeId)
    },
    methods: {
      startScroll() {
        const table = this.$refs.table
        const divData = table.querySelector('.el-scrollbar__wrap')
        this.timeId = setInterval(() => {
          divData.scrollTop += 1
          if (
            divData.clientHeight + divData.scrollTop ==
            divData.scrollHeight
          ) {
            divData.scrollTop = 0
          }
        }, 100)
      },
      mouseEnter() {
        //鼠标移入清除定时器（暂停轮播）
        clearInterval(this.timeId)
      },
      mouseLeave() {
        //鼠标移出继续执行轮播
        //this.startScroll()
      }
    }
  }*/
</script>

<style scoped>
  .container {
    width: 700px;
    height: 300px;
  }
  .table {
    height: 100%;
  }
</style>
