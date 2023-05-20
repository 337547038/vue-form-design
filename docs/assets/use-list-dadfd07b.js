import{a1 as o,d as c,I as r,N as h,a as i,c as d,ai as u}from"./index-ea7eee8a.js";const l=c({components:{},setup(e){const t=[],s=r({});return{toggleCode:a=>{const n="vdpv_"+a;s[n+"Height"]===0?s[n+"Height"]=(t[a].value?t[a].value.offsetHeight:0)||0:s[n+"Height"]=0},...h(s)}}});l.$vd={matter:{},toc:[{content:"列表页设计",anchor:"列表页设计",level:1},{content:"添加表格列字段",anchor:"添加表格列字段",level:2},{content:"操作按钮",anchor:"操作按钮",level:2},{content:"列表上方按钮",anchor:"列表上方按钮",level:3},{content:"列表操作按钮",anchor:"列表操作按钮",level:3},{content:"字段属性",anchor:"字段属性",level:2},{content:"数据列表配置",anchor:"数据列表配置",level:2},{content:"接口数据事件",anchor:"接口数据事件",level:3}]};const j=l,g={class:"vuedoc"},q=u(`<h1 id="列表页设计" data-source-line="1"><a class="markdownIt-Anchor" href="#列表页设计">#</a> 列表页设计</h1><p data-source-line="3">使用方法见系统管理各栏目列表</p><h2 id="添加表格列字段" data-source-line="5"><a class="markdownIt-Anchor" href="#添加表格列字段">#</a> 添加表格列字段</h2><p data-source-line="7">如选择了表单数据源，可从这里快速选择当前表单可用字段，其他更多字段可直接点击<code>生成脚本预览</code>编辑。</p><p data-source-line="9">注意：如需使用操作栏内置操作按钮，操作栏的prop必须为<code>__control</code>，如：</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;操作&quot;</span>,
  <span class="hljs-attr">&quot;prop&quot;</span>: <span class="hljs-string">&quot;__control&quot;</span>
}
</code></pre><p data-source-line="18">内置按钮及事件可点击操作下面的设置，在字段属性里编辑事件按钮。其中key=edit/del会执行内置事件</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-javascript hljs--one-dark"><code>opt = [
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;详情&quot;</span>,
    <span class="hljs-attr">click</span>: <span class="hljs-function">(<span class="hljs-params">row</span>) =&gt;</span> {
      <span class="hljs-comment">// 这里是逻辑代码，row当前行数据</span>
    }
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;编辑&quot;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;edit&quot;</span>
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;删除&quot;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;del&quot;</span>
  }]
</code></pre><h2 id="操作按钮" data-source-line="38"><a class="markdownIt-Anchor" href="#操作按钮">#</a> 操作按钮</h2><p data-source-line="40">点击列表页按钮会触发<code>btnClick</code>事件</p><h3 id="列表上方按钮" data-source-line="42"><a class="markdownIt-Anchor" href="#列表上方按钮">#</a> 列表上方按钮</h3><p data-source-line="44">显示于列表左上方的按钮，可以编辑框编辑代码，其中key=add/del会执行内置事件。如：</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-javascript hljs--one-dark"><code>opt = [
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;导出&#39;</span>,
    <span class="hljs-attr">click</span>: <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-comment">// 导出逻辑</span>
    }
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;新增&quot;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;add&quot;</span>, <span class="hljs-comment">// add到新增页</span>
    <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;primary&quot;</span>,
    <span class="hljs-attr">size</span>: <span class="hljs-string">&quot;small&quot;</span>,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;plus&quot;</span>
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;批量删除&quot;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;del&quot;</span>, <span class="hljs-comment">// 执行内置删除事件</span>
    <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;danger&quot;</span>,
    <span class="hljs-attr">size</span>: <span class="hljs-string">&quot;small&quot;</span>,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;delete&quot;</span>,
    <span class="hljs-attr">click</span>: <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-comment">// 添加了add/del时，同时可以作相关逻辑判断。return false可阻止事件</span>
    }
  }]
</code></pre><h3 id="列表操作按钮" data-source-line="73"><a class="markdownIt-Anchor" href="#列表操作按钮">#</a> 列表操作按钮</h3><p data-source-line="75">列表操作列按钮，如编辑、查看、删除等。其中key=edit/del会执行内置事件，方法同列表上方按钮。</p><p data-source-line="77"><strong>visible</strong></p><p data-source-line="79">该属性可用于根据当前行数据决定是否显示，例如当数据status=1时显示按钮为禁用，=0时显示启用。支持运符串，其中$为当前行数据</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-javascript hljs--one-dark"><code>opt = [
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;查看&quot;</span>,
    <span class="hljs-attr">click</span>:<span class="hljs-function">(<span class="hljs-params">row</span>)=&gt;</span>{
      <span class="hljs-comment">// 查看逻辑，row为当前行数据</span>
    },
    <span class="hljs-attr">visible</span>:<span class="hljs-string">&#39;$.status===1&#39;</span> <span class="hljs-comment">// 根据条件是否显示当前行按钮，即行数据status=1时可显示查看</span>
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;编辑&quot;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;edit&quot;</span> <span class="hljs-comment">// 打开编辑页</span>
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;删除&quot;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;del&quot;</span>, <span class="hljs-comment">// 执行删除操作</span>
    <span class="hljs-attr">tip</span>:<span class="hljs-string">&#39;确定删除提示&#39;</span>
  }]
</code></pre><h2 id="字段属性" data-source-line="101"><a class="markdownIt-Anchor" href="#字段属性">#</a> 字段属性</h2><h2 id="数据列表配置" data-source-line="103"><a class="markdownIt-Anchor" href="#数据列表配置">#</a> 数据列表配置</h2><p data-source-line="105"><strong>•所属表单</strong></p><p data-source-line="107">即当前数据列表的数据来源于哪个表单</p><p data-source-line="109"><strong>•横向滚动固定在底部</strong></p><p data-source-line="111">表格为展开行和树形数据与懒加载时，应设置为false</p><p data-source-line="113">效果可参考系统管理各栏目</p><p data-source-line="115"><strong>•可折叠查询表单</strong></p><p data-source-line="117">列表会展示条件查询按钮，可收起或展下查询条件</p><p data-source-line="119"><strong>•操作列按钮下拉</strong></p><p data-source-line="121">操作栏展示更多下拉按钮，详见<a href="/#/design/dataList/list">列表页设计管理</a></p><p data-source-line="123"><strong>•开启侧栏树</strong></p><h3 id="接口数据事件" data-source-line="125"><a class="markdownIt-Anchor" href="#接口数据事件">#</a> 接口数据事件</h3><p data-source-line="127">同表单设计事件，可参考表单设计</p>`,36),m=[q];function k(e,t,s,p,a,n){return i(),d("div",g,m)}const _=o(j,[["render",k]]);export{_ as default};
