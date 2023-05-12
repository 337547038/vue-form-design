import{a1 as d,d as r,I as l,N as i,a as p,c as h,ai as u}from"./index-ea7eee8a.js";const a=r({components:{},setup(t){const s=[],e=l({});return{toggleCode:n=>{const o="vdpv_"+n;e[o+"Height"]===0?e[o+"Height"]=(s[n].value?s[n].value.offsetHeight:0)||0:e[o+"Height"]=0},...i(e)}}});a.$vd={matter:{},toc:[{content:"开发指南",anchor:"开发指南",level:1},{content:"目录结构",anchor:"目录结构",level:2},{content:"快速上手",anchor:"快速上手",level:2},{content:"nodejs模拟接口",anchor:"nodejs模拟接口",level:2},{content:"代码模式",anchor:"代码模式",level:2}]};const f=a,j={class:"vuedoc"},m=u(`<h1 id="开发指南" data-source-line="1"><a class="markdownIt-Anchor" href="#开发指南">#</a> 开发指南</h1><p data-source-line="3">欢迎有兴趣的同学参与完善文档</p><h2 id="目录结构" data-source-line="5"><a class="markdownIt-Anchor" href="#目录结构">#</a> 目录结构</h2><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-text hljs--one-dark"><code>nodejs // 模拟后端接口
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
   ├─ system 系统管理相关页面
</code></pre><h2 id="快速上手" data-source-line="30"><a class="markdownIt-Anchor" href="#快速上手">#</a> 快速上手</h2><p data-source-line="32">进入项目安装依赖包</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-text hljs--one-dark"><code>git clone https://github.com/337547038/vue-form-design.git
yarn install
yarn run dev
</code></pre><h2 id="nodejs模拟接口" data-source-line="40"><a class="markdownIt-Anchor" href="#nodejs模拟接口">#</a> nodejs模拟接口</h2><p data-source-line="42">体验完整的流程可启动nodejs模拟接口数据，使用mock/json数据只能查看；</p><p data-source-line="44">先将<code>/nodejs/akform.sql</code>导入到mysql数据库里，在db.js里修改数据库连接配置</p><p data-source-line="46">进入nodejs目录安装依赖</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-text hljs--one-dark"><code>yarn install
yarn dev
</code></pre><p data-source-line="53">浏览器进入 <a href="http://localhost:3000">http://localhost:3000</a> 开始体验</p><h2 id="代码模式" data-source-line="55"><a class="markdownIt-Anchor" href="#代码模式">#</a> 代码模式</h2><p data-source-line="57">代码编辑输入框可支持<code>json</code>或<code>javascript</code>两种模式，初始使用时可通过修改<code>/src/utils/form.ts</code>里的<code>EDITTYPE</code>的值</p>`,18),v=[m];function _(t,s,e,c,n,o){return p(),h("div",j,v)}const k=d(f,[["render",_]]);export{k as default};
