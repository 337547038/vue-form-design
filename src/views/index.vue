<template>
  <div class="info">
    <h3>ak-form基于 Vue3 的可视化低代码表单设计器</h3>
    <br />
    <div>
      使用基于 Vue 3.0 的桌面端组件库 Elemnet-Plus ，使用广泛，扩展方便 <br />
      通过可视化的操作，快速完成表单页面、表格列表、列表筛选页面的创建<br />
      表格列表页集成常用的时间格式化、字典匹配、Tag标签显示等等<br />
      提供功能强大的各类组件，可适用在各种复杂的场景中<br />
      丰富的API接口，方便快速的生成表单，验证和获取表单数据<br />
      代码简洁、易于二次开发 用于学习研究，欢迎交流，微信:337547038<br />
      如果项目对你有所帮助，请留个赞，以表支持<br />
      如果你对该项目感兴趣，欢迎加入项目建设中来<br />
      如果你有任何建议，请联系我或在评论区留言
    </div>
    <div><br /></div>
    <div>
      <el-button type="success" @click="$router.push({ path: '/docs' })"
        >使用文档</el-button
      >
      <el-button type="primary" @click="$router.push({ path: '/designform' })"
        >快速开始</el-button
      >
    </div>
    <div>
      <br />
      <p>应网友学习需求简单添加图表演示</p>
      <el-button
        type="primary"
        @click="$router.push({ path: '/echarts/design' })"
        >快速开始</el-button
      >
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onMounted } from 'vue'
  import { getRequest } from '@/api'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const initDict = () => {
    getRequest('dictList', { status: 1 }).then((res: any) => {
      const result = res.data.list
      const temp: any = {}
      if (result) {
        // console.log(result)
        result.forEach((item: any) => {
          const children = item.children
          if (children) {
            const childJson = JSON.parse(children)
            const list: any = {}
            childJson.forEach((ch: any) => {
              list[ch.value] = ch.label
            })
            temp[item.type] = list
          }
        })
      }
      window.localStorage.setItem('akFormDict', JSON.stringify(temp))
    })
  }
  onMounted(() => {
    initDict() // todo 这个应该是每次登录进来就加载一次
    router.push({ path: '/design' })
  })
</script>
<style scoped lang="scss">
  .info {
    padding: 30px !important;
    font-size: 16px;
    line-height: 36px;
    min-height: 500px;
    h3 {
      padding-top: 10px;
    }
  }
</style>
