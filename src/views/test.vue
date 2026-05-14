<template>
  <div class="wrap">
    <button @click="alignCenterH">水平居中(以第一个为基准)</button>
    <button @click="alignCenterV" style="margin-left:10px">垂直居中(以第一个为基准)</button>

    <div class="container">
      <div
        v-for="(item, idx) in list"
        :key="idx"
        class="item"
        :style="{
          left: item.x + 'px',
          top: item.y + 'px',
          width: item.width + 'px',
          height: item.height + 'px'
        }"
      >
        {{ idx + 1 }}
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const list = ref([
    { x: 50, y: 50, width: 120, height: 80 },
    { x: 180, y: 120, width: 100, height: 60 },
    { x: 300, y: 180, width: 150, height: 100 },
  ])

  // 水平居中：以第一个元素中心X为基准
  const alignCenterH = () => {
    const first = list.value[0]
    // 基准中心X
    const centerX = first.x + first.width / 2
    list.value.forEach(item => {
      item.x = centerX - item.width / 2
    })
  }

  // 垂直居中：以第一个元素中心Y为基准
  const alignCenterV = () => {
    const first = list.value[0]
    // 基准中心Y
    const centerY = first.y + first.height / 2
    list.value.forEach(item => {
      item.y = centerY - item.height / 2
    })
  }
</script>

<style scoped>
  .container {
    position: relative;
    width: 800px;
    height: 500px;
    border: 1px solid #ccc;
    margin-top: 20px;
  }
  .item {
    position: absolute;
    border: 1px solid #409eff;
    background: #f0f7ff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    padding: 4px 12px;
    cursor: pointer;
  }
</style>