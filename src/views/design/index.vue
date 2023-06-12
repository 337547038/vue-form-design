<!-- Created by 337547038  -->
<template>
  <div class="bg-none design-index">
    <h2>开始创建一个页面</h2>
    <el-button type="primary" link @click="$router.push({ path: '/docs' })"
      >如何使用？</el-button
    >
    <div class="content">
      <div class="item" @click="$router.push({ path: '/design/form' })">
        <img src="../../assets/img/form.png" alt="" />
        <h3>表单设计</h3>
        <p>快速信息搜集</p>
      </div>
      <div class="item" @click="$router.push({ path: '/design/dataList' })">
        <img src="../../assets/img/form-list.png" alt="" />
        <h3>列表页设计</h3>
        <p>展示管理数据</p>
      </div>
      <div class="item" @click="$router.push({ path: '/design/echarts' })">
        <img src="../../assets/img/echarts.png" alt="" />
        <h3>数据统计</h3>
        <p>展示数据报表</p>
      </div>
      <div class="item" @click="$router.push({ path: '/design/dataScreen' })">
        <img src="../../assets/img/data.png" alt="" />
        <h3>数据大屏</h3>
        <p>业务数据统计展示</p>
      </div>
      <div class="item" @click="$router.push({ path: '/design/flow' })">
        <img src="../../assets/img/flow.png" alt="" />
        <h3>流程设计</h3>
        <p>快速信息搜集</p>
      </div>
    </div>
    <div class="info-box">
      <div class="info">
        <h3>ak-design基于 Vue3 的可视化低代码快速开发平台</h3>
        <br />
        <div>
          • 使用基于 Vue 3.0 的桌面端组件库 Elemnet-Plus ，使用广泛，扩展方便
          <br />
          • 通过可视化的操作，快速完成表单页面、表格列表、列表筛选页面的创建<br />
          • 表格列表页集成常用的时间格式化、字典匹配、Tag标签显示等等<br />
          • 提供功能强大的各类组件，可适用在各种复杂的场景中<br />
          • 丰富的API接口，方便快速的生成表单，验证和获取表单数据<br />
          • 代码简洁、易于二次开发 用于学习研究，欢迎交流，微信：<span
            style="color: red"
            >337547038</span
          ><br />
          • 如果项目对你有所帮助，请留个赞，以表支持<br />
          • 如果你对该项目感兴趣，欢迎加入项目建设中来<br />
          • 如果你有任何建议，请联系我或在评论区留言
        </div>
        <div><br /></div>
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
    }
    .content {
      padding: 40px 100px;
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
    .info-box {
      display: flex;
      justify-content: center;
      background: #fff;
    }
    .info {
      h3 {
        text-align: center;
      }
      text-align: left;
      padding: 20px 0;
      line-height: 30px;
      font-size: 15px;
    }
  }
</style>
