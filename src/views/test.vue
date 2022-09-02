<template>
  <div>
    {{ val }}
    <el-time-picker v-model="value1" placeholder="Arbitrary time" />
  </div>
</template>
<script setup>
  import { ref, computed } from 'vue'
  const value1 = ref()
  const val = computed(() => {
    return JSON.stringify(value1.value)
  })

  /*const a = ['2', '3']
  const b = a.join(',')
  console.log(b)
  const c = b.split(',')
  console.log(c)*/
  //const a = '[{"a":"b"}]'
  //const b = '[{"a":"b"},{"a":"c"}]'
  /*let temp = []
  try {
    temp = JSON.parse(a)
  } catch {
    temp = a.split(',')
  }
  console.log(temp)
  console.log(a.split(','))*/
  /*let table1 = [
    {
      table3: '1',
      table2: 'value2'
    }
  ]
  if (table1 && typeof table1 === 'object') {
    table1 = table1.join(',')
    // 表格时转换出来的是这种'[object Object],[object Object]'
    console.log(table1)
    console.log(typeof table1)
    if (table1.includes('[object Object]')) {
      console.log('ppp')
      table1 = JSON.stringify(table1)
    }
  }
  console.log(table1)*/
</script>
