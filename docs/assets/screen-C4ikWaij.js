import{B as e,h as t,v as n}from"./runtime-core.esm-bundler-BgH13u1H.js";import"./component--LW9uapU.js";var r={class:`marked-body`},i={__name:`screen`,setup(i){return(i,a)=>(e(),t(`div`,r,[...a[0]||=[n(`<h1 id="可视化数据大屏"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> 可视化数据大屏 </h1><p>数据可视化大屏使用<code>position</code>的<code>let</code>和<code>top</code>定位布局。</p><p>注意：当使用了<code>right、top</code>或其他非<code>px</code>单位布局时，当前组件将不能进拖动缩放及合并等操作</p><h2 id="大屏配置"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> 大屏配置 </h2><p>包括一些基本的属性配置项，设计大屏宽高背景色及大屏全局样式</p><p>其中<code>编辑样式</code>可进行css样式编辑</p><h3 id="全局数据"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> 全局数据 </h3><p>当可视化大屏引用组件比较多时，若每个组件都单独从接口获取数据，这种做法明显不合理，后端同学可能也不会这么提供。 因此引入全局数据请求接口，将数据接口处理好提供给每个组件调用。如可在<code>after</code>中对接口返回数据处理。 这里return的res可在每个组件的全局或动态数据方法中获取</p><h4 id="before"><a name="before" class="anchor" href="#before"><span class="header-link"></span></a> before </h4><p>获取数据发送接口请求前方法，可用于对请求的数据进行处理转换等操作，以提交符合接口的数据要求</p><pre class="language-javascript"><code class="hljs">opt=<span class="hljs-function">(<span class="hljs-params">data</span>) =&gt;</span> {
  <span class="hljs-comment">// data请求参数</span>
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;before&#39;</span>,data)
  <span class="hljs-keyword">return</span> data <span class="hljs-comment">// 这里需将处理后请求数据返回</span>
}</code></pre><h4 id="after"><a name="after" class="anchor" href="#after"><span class="header-link"></span></a> after </h4><p>发送数据请求响应事件，这里可对接收到的数据进行处理，以符合使用需要</p><pre class="language-javascript"><code class="hljs">opt=<span class="hljs-function">(<span class="hljs-params">res,success</span>) =&gt;</span> {
  <span class="hljs-comment">// res响应数据，保存在window.getScreenGlobal</span>
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(res)
  <span class="hljs-keyword">return</span> res <span class="hljs-comment">// 返回需要保存的数据</span>
}</code></pre><p>这里返回的数据存放在<code>store</code>里，可在页面组件数据中使用<code>getScreenGlobal</code>文本替换的方法获取．如：</p><pre class="language-javascript"><code class="hljs"><span class="hljs-comment">//假如返回的数据为global这种形式</span>
<span class="hljs-keyword">const</span> res = {
  <span class="hljs-attr">series</span>:[<span class="hljs-number">148</span>, <span class="hljs-number">57</span>, <span class="hljs-number">497</span>, <span class="hljs-number">478</span>, <span class="hljs-number">143</span>, <span class="hljs-number">292</span>, <span class="hljs-number">245</span>, <span class="hljs-number">317</span>, <span class="hljs-number">460</span>, <span class="hljs-number">49</span>, <span class="hljs-number">118</span>, <span class="hljs-number">281</span>],
  <span class="hljs-attr">xAxisData</span>:[<span class="hljs-string">&quot;1月&quot;</span>, <span class="hljs-string">&quot;2月&quot;</span>, <span class="hljs-string">&quot;3月&quot;</span>, <span class="hljs-string">&quot;4月&quot;</span>, <span class="hljs-string">&quot;5月&quot;</span>, <span class="hljs-string">&quot;6月&quot;</span>, <span class="hljs-string">&quot;7月&quot;</span>, <span class="hljs-string">&quot;8月&quot;</span>, <span class="hljs-string">&quot;9月&quot;</span>, <span class="hljs-string">&quot;10月&quot;</span>, <span class="hljs-string">&quot;11月&quot;</span>, <span class="hljs-string">&quot;12月&quot;</span>],
  <span class="hljs-attr">name</span>:<span class="hljs-string">&#39;图表名称&#39;</span>,
  <span class="hljs-attr">pie</span>:[<span class="hljs-number">20</span>,<span class="hljs-number">80</span>]  <span class="hljs-comment">// 需要取20时则使用 getScreenGlobal.pie.0 0表示数组下标</span>
}
<span class="hljs-comment">// 图表的数据</span>
<span class="hljs-keyword">const</span> opt = {
  <span class="hljs-attr">title</span>:
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;{{getScreenGlobal.name}}&quot;</span>,　<span class="hljs-comment">//　=&gt; 图表名称</span>
      },
  <span class="hljs-attr">xAxis</span>:
      {
        <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;category&quot;</span>,
        <span class="hljs-attr">data</span>: <span class="hljs-string">&quot;{{getScreenGlobal.xAxisData}}&quot;</span>
      },
  <span class="hljs-attr">yAxis</span>:
      {
        <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;value&quot;</span>
      },
  <span class="hljs-attr">grid</span>:
      {
        <span class="hljs-attr">left</span>: <span class="hljs-number">0</span>,
        <span class="hljs-attr">bottom</span>: <span class="hljs-number">30</span>
      },
  <span class="hljs-attr">series</span>: [
    {
      <span class="hljs-attr">data</span>: <span class="hljs-string">&quot;{{getScreenGlobal.series}}&quot;</span>,
      <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;bar&quot;</span>
    }]
}</code></pre><h2 id="属性配置"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> 属性配置 </h2><p>可编辑当前组件的位置图层等信息，可使用<code>left、right、top、bottom</code>定位。</p><p>提示：当使用<code>top</code>或者<code>bottom</code>定位时，对应的<code>left</code>或者<code>top</code>将被修正为<code>auto</code>，并且当前组件不能进行拖动和缩放操作</p><h3 id="自定义组件"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> 自定义组件 </h3><p>当使用自定义组件时，组件名称应为全局注册的组件名。</p><p>作为导出vue使用时，可以为当前<code>import</code>的组件，如</p><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">import</span> { markRaw } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> myComponents <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;xxxx&#39;</span>;
{
  <span class="hljs-attr">componentName</span>: <span class="hljs-title function_">markRaw</span>(myComponents)
}</code></pre><h3 id="数据"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> 数据 </h3><p>数据类型：</p><ul><li>1.静态/全局：对于图表即为option部分，这里可使用<code>getScreenGlobal</code>从<code>store</code>数据中获取相应数据，在此处使用时需按约定使用特殊标识包起来，如</li></ul><pre class="language-javascript"><code class="hljs">{
  <span class="hljs-attr">data</span>: <span class="hljs-string">&quot;{{getScreenGlobal.xxxx}}&quot;</span>
}</code></pre><ul><li>2.动态：从<code>url</code>获取，可在<code>after</code>事件里对数据处理后返回，使用<code>getScreenComp</code>方法替换．也可直接在<code>after</code>方法里直接赋值</li></ul><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> opt = {
  <span class="hljs-attr">title</span>:
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;{{getScreenComp.name}}&quot;</span>,　<span class="hljs-comment">//　=&gt; 图表名称</span>
      },
  <span class="hljs-attr">xAxis</span>:
      {
        <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;category&quot;</span>,
        <span class="hljs-attr">data</span>: <span class="hljs-string">&quot;{{getScreenComp.xAxisData}}&quot;</span>
      },
  <span class="hljs-attr">yAxis</span>:
      {
        <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;value&quot;</span>
      },
  <span class="hljs-attr">grid</span>:
      {
        <span class="hljs-attr">left</span>: <span class="hljs-number">0</span>,
        <span class="hljs-attr">bottom</span>: <span class="hljs-number">30</span>
      },
  <span class="hljs-attr">series</span>: [
    {
      <span class="hljs-attr">data</span>: <span class="hljs-string">&quot;{{getScreenComp.series}}&quot;</span>,
      <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;bar&quot;</span>
    }]
}</code></pre><h4 id="after"><a name="after" class="anchor" href="#after"><span class="header-link"></span></a> after </h4><p>数据请求结果完成事件，需要此事件对数据进行处理。 使用此方法对组件设置，可满足各种图表数据展示，而无需对<code>echarts</code>进行层层封装，可直接从<code>echarts</code>官网将图表配置好， 复制过来替换好接口数据即可。减少学习成本</p><pre class="language-javascript"><code class="hljs">opt=<span class="hljs-function">(<span class="hljs-params">res, data</span>) =&gt;</span> {
    <span class="hljs-comment">// res响应数据, 当前组件数据data</span>
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;afterScreen&#39;</span>,data)
  　<span class="hljs-comment">//如对当前组件进行赋值</span>
  　<span class="hljs-comment">//data.xAxis.data = res.line.xAxis</span>
  　<span class="hljs-comment">//data.series[0].data = res.line.data</span>
  　<span class="hljs-comment">//data.series[1].data = res.line.data1</span>
  　<span class="hljs-comment">//同时也可以使用文本替换的方式，使用getScreenComp，即getScreenComp=res</span>
    <span class="hljs-keyword">return</span> data <span class="hljs-comment">//返回新的图表数据</span>
}</code></pre>`,32)]]))}};export{i as default};