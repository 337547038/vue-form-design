<template>
  <div class="flow-container-0">
    <div class="flow-group">000</div>
    <div class="flow-group flow-branch" style="display: flex">
      <div class="flow-row">
        <div class="flow-item" v-for="item in 20" :key="item">
          <div style="width: 150px; border: 1px solid #67c23a; height: 50px">{{
            item
          }}</div>
        </div></div
      >
    </div>
  </div>
  <div class="container">
    <div class="flex">
      <div class="item" v-for="item in 3"
        ><div>{{ item }}</div></div
      >
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
  .flow-row-0 {
    display: flex;
  }
  .container {
    display: flex;
    margin: 0 auto;
    border: 1px solid #eee;
    width: 80%;
    .flex {
      display: flex;
      margin: 0 auto;
    }
    .item {
      width: 150px;
      height: 50px;
      border: 1px solid #409eff;
      div {
        width: 150px;
      }
    }
  }
</style>
