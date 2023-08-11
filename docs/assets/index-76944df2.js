/* empty css                                                            */import{o as e,c as s,ai as n}from"./index-b7d7e192.js";const o={class:"marked-body"},c=n(`<h1 id="开发指南">开发指南</h1><p>欢迎有兴趣的同学参与完善文档</p><h2 id="目录结构">目录结构</h2><pre class="language-text"><code class="hljs">nodejs // 模拟后端接口
public
 ├─mock // 模拟数据
 ├─static  // 静态资源
   ├─ iconfont icon图标
   └─ plugins 表单设计编辑器及富文本编辑器相关js
src
 ├─api // 数据请求接口
 ├─assets // scss及图片
 ├─components // 框架布局组件
 ├─docs // 使用说明文档
 └─views // 页面
   ├─design // 表单设计主程序组件
     ├─components // 表单表格设计公共组件
     ├─dataList // 列表设计
     ├─dataScreen // 数据可视化大屏设计
     ├─dataSource // 数据源设计
     ├─form // 表单设计
     └─index.vue 设计首页
   ├─ system 系统管理相关页面</code></pre><h2 id="快速上手">快速上手</h2><p>进入项目安装依赖包</p><pre class="language-text"><code class="hljs">git clone https://github.com/337547038/vue-form-design.git
pnpm install
pnpm run dev</code></pre><h2 id="nodejs模拟接口">nodejs模拟接口</h2><p>体验完整的流程可启动nodejs模拟接口数据，使用mock/json数据只能查看；</p><p>先将<code>/nodejs/akform.sql</code>导入到mysql数据库里，在db.js里修改数据库连接配置</p><p>进入nodejs目录安装依赖</p><pre class="language-text"><code class="hljs">pnpm install
pnpm dev</code></pre><p>浏览器进入 <a href="http://localhost:3000">http://localhost:3000</a> 开始体验</p><h2 id="代码模式">代码模式</h2><p>代码编辑输入框可支持<code>json</code>或<code>javascript</code>两种模式，初始使用时可通过修改<code>/src/utils/form.ts</code>里的<code>EDITTYPE</code>的值</p>`,15),t=[c],r={__name:"index",setup(d){return(a,p)=>(e(),s("div",o,t))}};export{r as default};
