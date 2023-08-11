/* empty css                                                            */import{o as s,c as a,ai as n}from"./index-b7d7e192.js";const p={class:"marked-body"},t=n(`<h1 id="列表页设计">列表页设计</h1><p>使用方法见系统管理各栏目列表</p><h2 id="添加表格列字段">添加表格列字段</h2><p>如选择了表单数据源，可从这里快速选择当前表单可用字段，其他更多字段可直接点击<code>生成脚本预览</code>编辑。</p><p>注意：如需使用操作栏内置操作按钮，操作栏的prop必须为<code>__control</code>，如：</p><pre class="language-json"><code class="hljs"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;label&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;操作&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;prop&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;__control&quot;</span>
<span class="hljs-punctuation">}</span></code></pre><p>内置按钮及事件可点击操作下面的设置，在字段属性里编辑事件按钮。其中key=edit/del会执行内置事件</p><pre class="language-javascript"><code class="hljs">opt = [
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
  }]</code></pre><h2 id="操作按钮">操作按钮</h2><p>点击列表页按钮会触发<code>btnClick</code>事件</p><h3 id="列表上方按钮">列表上方按钮</h3><p>显示于列表左上方的按钮，可以编辑框编辑代码，其中key=add/del会执行内置事件。如：</p><pre class="language-javascript"><code class="hljs">opt = [
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
  }]</code></pre><h3 id="列表操作按钮">列表操作按钮</h3><p>列表操作列按钮，如编辑、查看、删除等。其中key=edit/del会执行内置事件，方法同列表上方按钮。</p><p><strong>visible</strong></p><p>该属性可用于根据当前行数据决定是否显示，例如当数据status=1时显示按钮为禁用，=0时显示启用。支持运符串，其中$为当前行数据</p><pre class="language-javascript"><code class="hljs">opt = [
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
  }]</code></pre><h2 id="字段属性">字段属性</h2><h2 id="数据列表配置">数据列表配置</h2><p><strong>•所属表单</strong></p><p>即当前数据列表的数据来源于哪个表单</p><p><strong>•横向滚动固定在底部</strong></p><p>表格为展开行和树形数据与懒加载时，应设置为false</p><p>效果可参考系统管理各栏目</p><p><strong>•可折叠查询表单</strong></p><p>列表会展示条件查询按钮，可收起或展下查询条件</p><p><strong>•操作列按钮下拉</strong></p><p>操作栏展示更多下拉按钮，详见<a href="/#/design/dataList/list">列表页设计管理</a></p><p><strong>•开启侧栏树</strong></p><h3 id="接口数据事件">接口数据事件</h3><p>同表单设计事件，可参考表单设计</p>`,32),l=[t],j={__name:"use-list",setup(c){return(o,r)=>(s(),a("div",p,l))}};export{j as default};
