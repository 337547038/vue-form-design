import{c as a,o as n,af as e}from"./index-BMqeUH7Y.js";const l={class:"marked-body"},t={__name:"screen",setup(p){return(c,s)=>(n(),a("div",l,s[0]||(s[0]=[e(`<h1 id="可视化数据大屏">可视化数据大屏</h1><p>数据可视化大屏使用<code>position</code>和<code>let</code>和<code>top</code>定位布局。</p><p>注意：当使用了<code>right、top</code>或其他非<code>px</code>单位布局时，当前组件将不能进拖动缩放及合并等操作</p><h2 id="大屏配置">大屏配置</h2><p>包括一些基本的属性配置项，设计大屏宽高背景色及大屏全局样式</p><p>其中<code>编辑样式</code>可进行css样式编辑</p><h3 id="全局数据">全局数据</h3><p>当可视化大屏引用组件比较多时，若每个组件都单独从接口获取数据，这种做法明显不合理，后端同学可能也不会这么提供。 因此引入全局数据请求接口，将数据接口处理好提供给每个组件调用。如可在<code>after</code>中对接口返回数据处理。 这里return的res可在每个组件的全局或动态数据方法中获取</p><h4 id="before">before</h4><p>获取数据发送接口请求前方法，可用于对请求的数据进行处理转换等操作，以提交符合接口的数据要求</p><pre class="language-javascript"><code class="hljs">opt=<span class="hljs-function">(<span class="hljs-params">data</span>) =&gt;</span> {
  <span class="hljs-comment">// data请求参数</span>
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;before&#39;</span>,data)
  <span class="hljs-keyword">return</span> data <span class="hljs-comment">// 这里需将处理后请求数据返回</span>
}</code></pre><h4 id="after">after</h4><p>发送数据请求响应事件，这里可对接收到的数据进行处理，以符合使用需要</p><pre class="language-javascript"><code class="hljs">opt=<span class="hljs-function">(<span class="hljs-params">res,success</span>) =&gt;</span> {
  <span class="hljs-comment">// res响应数据，保存在window.getScreenGlobal</span>
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(res)
  <span class="hljs-keyword">return</span> res <span class="hljs-comment">// 返回需要保存的数据</span>
}</code></pre><p>这里返回的数据在当前页面可使用<code>getScreenGlobal</code>方法获取</p><pre class="language-javascript"><code class="hljs"><span class="hljs-comment">//假如返回的数据为global这种形式</span>
<span class="hljs-keyword">const</span> <span class="hljs-variable language_">global</span> = {<span class="hljs-attr">list</span>:[<span class="hljs-number">1</span>],<span class="hljs-attr">data</span>:[],<span class="hljs-attr">name</span>:<span class="hljs-string">&#39;&#39;</span>}
<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(getScreenGlobal.<span class="hljs-property">list</span>) <span class="hljs-comment">//输出 1</span></code></pre><h2 id="属性配置">属性配置</h2><p>可编辑当前组件的位置图层等信息，可使用<code>left、right、top、bottom</code>定位。</p><p>提示：当使用<code>top</code>或者<code>bottom</code>定位时，对应的<code>left</code>或者<code>top</code>将被修正为<code>auto</code>，并且当前组件不能进行拖动和缩放操作</p><h3 id="自定义组件">自定义组件</h3><p>当使用自定义组件时，组件名称应为全局注册的组件名。</p><p>作为导出vue使用时，可以为当前<code>import</code>的组件，如</p><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">import</span> { markRaw } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> myComponents <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;xxxx&#39;</span>;
<span class="hljs-attr">config</span>:{
  <span class="hljs-attr">componentName</span>: <span class="hljs-title function_">markRaw</span>(myComponents)
}</code></pre><h3 id="数据">数据</h3><p>数据类型：</p><ul><li>1.静态/全局：对于图表即为option部分，这里可使用<code>getScreenGlobal</code>从全局数据中获取相应数据，在此处使用时需按约定使用特殊标识包起来，如</li></ul><pre class="language-javascript"><code class="hljs">{
  <span class="hljs-attr">data</span>: <span class="hljs-string">&quot;{{getScreenGlobal.xxxx}}&quot;</span>
}</code></pre><ul><li>2.动态：从<code>url</code>获取，同时在当前<code>after</code>事件中也可取到全局的数据</li></ul><h4 id="after-1">after</h4><p>数据请求结果完成事件，需要此事件对数据进行处理。 使用此方法对组件设置，可满足各种图表数据展示，而无需对<code>echarts</code>进行层层封装，可直接从<code>echarts</code>官网将图表配置好， 复制过来替换好接口数据即可。减少学习成本</p><pre class="language-javascript"><code class="hljs">opt=<span class="hljs-function">(<span class="hljs-params">res, data</span>) =&gt;</span> {
    <span class="hljs-comment">// res响应数据, 当前组件数据data</span>
    <span class="hljs-comment">// 这里可直接使用getScreenGlobal取得全局的数据</span>
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;afterScreen&#39;</span>,data)
  　<span class="hljs-comment">//如对当前组件进行赋值</span>
  　<span class="hljs-comment">//data.xAxis.data = res.line.xAxis</span>
  　<span class="hljs-comment">//data.series[0].data = res.line.data</span>
  　<span class="hljs-comment">//data.series[1].data = res.line.data1</span>
    <span class="hljs-keyword">return</span> data <span class="hljs-comment">//返回新的图表数据</span>
}</code></pre>`,31)])))}};export{t as default};
