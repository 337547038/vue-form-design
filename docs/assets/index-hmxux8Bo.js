/* empty css                                                            */import{c as e,o as s,af as o}from"./index-D9mad5Az.js";const t={class:"marked-body"},d={__name:"index",setup(c){return(a,n)=>(s(),e("div",t,[...n[0]||(n[0]=[o(`<h1>开发指南</h1><p>欢迎有兴趣的同学参与完善文档</p><h2>目录结构</h2><pre class="language-text"><code class="hljs">nodejs 模拟后端接口
public
 ├─mock json模拟数据
 ├─static 静态资源
   ├─ iconfont icon图标
   └─ plugins 表单设计编辑器及富文本编辑器相关js
src
 ├─api 数据请求接口
 ├─assets scss及图片静态资源
 ├─components 公共组件
 ├─directive 指令
 ├─docs 使用说明文档
 ├─router
 ├─store
 ├─utils 工具类
    ├─ design 设计表单及列表公共方法
    ├─ download 导出excel
    ├─ flatTree 扁平数据及树结构数据相关操作类
    ├─ formatResult 提交表单及请求列表等数据公共方法，用于拦截转换
    ├─ formatScreen 大屏请求数据公共方法，用于拦截转换
    ├─ formChangeValue 表单控件改变事件，可用于监听数据变化修改值等操作
    ├─ index 一些常用方法
    └─ request axios封装的数据请求
 └─views 页面
   ├─design 表单设计主程序组件
     ├─components 表单表格设计公共组件
     ├─list 表格列表设计及数据展示主页面
     ├─screen 数据可视化大屏设计
     ├─datasource 数据源设计
     ├─flow 流程设计
     ├─form 表单设计及数据增加修改主页面
     └─index.vue 设计首页
   ├─ login 系统登陆入口
   ├─ system 系统管理相关页面
   ├─ task 流程管理相关页面</code></pre><h2>快速上手</h2><p>clone并进入项目安装依赖包</p><pre class="language-text"><code class="hljs">git clone https://github.com/337547038/vue-form-design.git
pnpm install
pnpm run dev</code></pre><p>浏览器进入 <a href="http://localhost:3000">http://localhost:3000</a> 开始体验</p><h2>代码模式</h2><p>代码编辑输入框可支持<code>json</code>或<code>javascript</code>两种模式，初始使用时可通过修改<code>/src/utils/design.ts</code>里的<code>EDITTYPE</code>的值</p>`,10)])]))}};export{d as default};
