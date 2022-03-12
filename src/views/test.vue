<!-- Created by 337547038 on 2021/11/18. -->
<template>
  <div style="margin: 50px;">
    <input type="text" v-model="value" v-bind="data"><br><br>
    <input type="text" v-model="value1" v-bind="data1"><br>
    <br>
    <button @click="save">保存</button>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {localStorage} from "../utils"

const value = ref('')
const value1 = ref('')
window.fnTest = () => {
  console.log('fn test')
}

const data = ref({
  name: '123',
  onInput: () => {
    console.log('ok')
    fnTest()
  }
})
const data1 = ref()
data1.value = localStorage().dataList
const save = () => {
  localStorage('dataList', data.value)
}
</script>
