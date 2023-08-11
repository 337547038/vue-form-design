/* empty css                                                            */import{o as s,c as a,ai as p}from"./index-b7d7e192.js";const n={class:"marked-body"},e=p(`<h1 id="可视化数据大屏">可视化数据大屏</h1><h2 id="组件">组件</h2><p> 所支持的设计组件 </p><h2 id="图层">图层</h2><p>　 　大屏可视化设计的所有组件图层，可对当前组件进行隐藏、锁定、删除、选中操作</p><h2 id="大屏配置">大屏配置</h2><p>设计大屏宽高背景色及大屏全局样式</p><h3 id="全局数据">全局数据</h3><p>当可视化大屏引用组件比较多时，若每个组件都单独从接口获取数据，这种做法明显不合理，后端同学可能也不会这么提供。因此引入全局数据请求接口，将数据接口处理好提供给每个组件调用。如可在<code>afterResponse</code>中对接口返回数据处理。这里return的res可在每个组件的全局或动态数据方法中获取</p><pre class="language-javascript"><code class="hljs">opt = <span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span>
{
  <span class="hljs-comment">// res接口返回的数据</span>
  <span class="hljs-keyword">return</span> res;
}</code></pre><h2 id="位置属性">位置属性</h2><p>可编辑当前组件的位置图层等信息，可使用<code>left、right、top、bottom</code>定位。</p><p>提示：当使用top或者bottom定位时，对应的left或者top将被修正为auto，并且当前组件不能进行拖动和缩放操作</p><h2 id="数据">数据</h2><h3 id="beforerequest">beforeRequest</h3><p>当前组件数据请求前事件，可对添加请求参数</p><h3 id="afterresponse">afterResponse</h3><p>数据请求结果完成事件，需要此事件对数据进行处理。使用此方法对组件设置，可满足各种图表数据展示，而无需对echarts进行层层封装，可直接从echarts官网将图表配置好，复制过来替换好接口数据即可。减少学习成本</p><pre class="language-javascript"><code class="hljs">opt = <span class="hljs-function">(<span class="hljs-params">data, option, <span class="hljs-variable language_">global</span></span>) =&gt;</span>
{
  <span class="hljs-comment">// data接口返回的数据</span>
  <span class="hljs-comment">// options当前组件所需数据，图表时直接修改option中的数据即可，如</span>
  <span class="hljs-comment">// global大屏全局数据返回的内容</span>
  option.<span class="hljs-property">xAsis</span>.<span class="hljs-property">data</span> = data.<span class="hljs-property">xAsis</span>
  option.<span class="hljs-property">series</span>.<span class="hljs-property">data</span> = data.<span class="hljs-property">series</span>
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;afterResponse&quot;</span>, data, option, <span class="hljs-variable language_">global</span>);
  <span class="hljs-keyword">return</span> option;
}</code></pre>`,19),t=[e],i={__name:"use-screen",setup(o){return(l,r)=>(s(),a("div",n,t))}};export{i as default};
