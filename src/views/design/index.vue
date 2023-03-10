<!-- Created by 337547038  -->
<template>
  <div class="bg-none design-index">
    <h2>开始创建一个页面</h2>
    <div class="content">
      <div class="item" @click="$router.push({ path: '/form' })">
        <img src="../../assets/img/form.png" alt="" />
        <h3>表单设计</h3>
        <p>快速信息搜集</p>
      </div>
      <div class="item" @click="$router.push({ path: '/design/list' })">
        <img src="../../assets/img/form-list.png" alt="" />
        <h3>列表页设计</h3>
        <p>展示管理数据</p>
      </div>
      <div class="item" @click="$router.push({ path: '/design/data' })">
        <img src="../../assets/img/echarts.png" alt="" />
        <h3>数据统计</h3>
        <p>展示数据报表</p>
      </div>
      <div class="item" @click="$router.push({ path: '/design/screen' })">
        <img src="../../assets/img/data.png" alt="" />
        <h3>数据大屏</h3>
        <p>业务数据统计展示</p>
      </div>
      <div class="item" @click="$router.push({ path: '/flow' })">
        <img src="../../assets/img/flow.png" alt="" />
        <h3>流程设计</h3>
        <p>快速信息搜集</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style lang="scss">
  .design-index {
    text-align: center;
    padding: 40px 0 !important;
    h2 {
      font-size: 16px;
      margin-bottom: 40px;
    }
    .content {
      padding: 0 100px;
      display: flex;
      flex-wrap: wrap;
      .item {
        cursor: pointer;
        background: #fff;
        padding: 10px;
        border-radius: 10px;
        min-width: 240px;
        margin: 0 15px 30px;
      }
      img {
        width: 80px;
        display: block;
        margin: 0 auto 20px;
      }
      h3 {
        font-size: 14px;
        margin-bottom: 5px;
      }
      p {
        font-size: 12px;
        color: #999;
      }
    }
  }
</style>
