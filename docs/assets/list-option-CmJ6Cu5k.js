/* empty css                                                            */import{o as a,c as e,ag as n}from"./index-BR7JSMnu.js";const t={class:"marked-body"},d={__name:"list-option",setup(p){return(o,s)=>(a(),e("div",t,s[0]||(s[0]=[n(`<h1 id="ak-list-配置手册">ak-list 配置手册</h1><h2 id="数据列表配置">数据列表配置</h2><h3 id="-pk">-pk</h3><p><code>data.pk</code></p><ul><li>类型：string|number</li></ul><p>当前列表数据主键，用于删除和编辑等相关操作</p><h3 id="-当前对应表单id">-当前对应表单id</h3><p><code>data.config.formId</code></p><p>当前列表对应的表单id，设计列表时可从该表单获取可供选择的表头字段名称。获取列表数据时也是从对应的表单数据中获取。</p><h3 id="-设计列表保存的名称">-设计列表保存的名称</h3><p><code>data.config.name</code></p><p>显示于列表页数据管理页面，数据的名称</p><h3 id="-新增编辑显示方式">-新增编辑显示方式</h3><p><code>data.config.openType</code> 可选dialog/page。设计列表页里点击新增或编辑按钮时，对应表单的显示方式，可以为弹窗和新标签页打开两种方式。</p><h3 id="-表单窗口宽度">-表单窗口宽度</h3><p><code>data.config.dialogWidth</code> 打开弹窗的宽度，仅当<code>data.config.openType=dialog</code>时有效</p><h3 id="-固定列表横向滚动条">-固定列表横向滚动条</h3><p><code>data.config.fixedBottomScroll</code></p><ul><li>类型：boolean，默认true。</li></ul><p>当列表出现横向滚动条时，设置为true可固定在浏览器底部。方便在翻页查看列表最右边信息时，无需先滚动纵向滚动条到底部，再滚动横向滚动条到右边才能查看</p><h3 id="-列显示隐藏设置">-列显示隐藏设置</h3><p><code>data.config.columnsSetting</code></p><ul><li>类型：boolean，默认true。</li></ul><p>用于设置表头列的显示与隐藏，即可个性化设置当前列表需要显示或隐藏哪些表头，以方便查看</p><h3 id="-显示与隐藏查询表单">-显示与隐藏查询表单</h3><p><code>data.config.expand</code> 类型：boolean，默认true。有条件查询表单时，可设置展开可收起查询表单。</p><h3 id="-条件查询是否跳转页面">-条件查询是否跳转页面</h3><p><code>data.config.searchJump</code> 类型：boolean，默认false。即列表查询时，点击查询按钮是否带参数跳转页面。此方式有利于分享当前url</p><h3 id="-列表操作按钮下拉设置">-列表操作按钮下拉设置</h3><p><code>data.config.operateDropdown</code> 类型：number。一般为列表右侧的编辑删除等操作按钮，当按钮个大于当前设定时，其余的侧以下拉菜单的形式展示。如设置<code>operateDropdown=2</code>，当操作按钮个数大于2个时，其余的侧以下拉菜单展示。</p><h3 id="-列表分页设置">-列表分页设置</h3><p><code>data.config.pageSize</code> 当前列表每页显示多少条</p><h3 id="-排序设置">-排序设置</h3><p><code>data.config.orderSort</code> 作为扩展参数传接口，用于对列表数据进行排序</p><h2 id="表格prop">表格prop</h2><h3 id="-el-table的prop设置">-el-table的prop设置</h3><p><code>data.tableProps</code> 支持el-table所有prop参数设置，如：</p><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> data={
  <span class="hljs-attr">tableProps</span>:{
    <span class="hljs-attr">height</span>:<span class="hljs-number">500</span>,
    <span class="hljs-attr">border</span>:<span class="hljs-literal">true</span>,
    <span class="hljs-attr">rowKey</span>:<span class="hljs-string">&quot;id&quot;</span>,
    <span class="hljs-attr">emptyText</span>:<span class="hljs-string">&quot;&quot;</span>
  }
}</code></pre><h2 id="表格columns">表格columns</h2><p>同时支持el-table-columns所有属性</p><h3 id="-help">-help</h3><p><code>data.columns.help</code> 显示在表头的帮助信息，鼠标滑过时提示</p><h3 id="-render">-render</h3><p><code>data.columns.render</code> 当前列表渲染模式，支持<code>switch | image | tag | url | datetime | date | buttons</code></p><h3 id="-attr">-attr</h3><p><code>data.columns.attr</code> 附加属性，设置将绑定到对应组件，当<code>render=switch、image、tag、button</code>组件的属性。</p><h3 id="-replacevalue">-replaceValue</h3><p><code>data.columns.replaceValue</code> 类型:{ [key: string | number]: string }</p><p>仅当<code>render=tag/text</code>时,用于根据值替换成其他内容，常见于接口返回如status=0/1之类的，需要将0/1显示为对应的文案，则可使用设置<code>{ &#39;1&#39;: &#39;启用&#39;, &#39;0&#39;: &#39;禁用&#39; }</code></p><h3 id="-custom">-custom</h3><p><code>data.columns.custom</code></p><p>类型：custom?: { [key: string | number]: string }</p><p>仅当<code>render=tag/text</code>时,tag的显示类型属性，如{ &#39;1&#39;: &#39;success&#39;, &#39;0&#39;: &#39;danger&#39; }</p><h3 id="-timeformat">-timeFormat</h3><p><code>data.columns.timeFormat</code></p><p>类型：timeFormat?: string</p><p>仅当<code>render=datetime、date</code>时，对日期格式化，如YYYY年MM月dd日</p><h3 id="-buttons">-buttons</h3><p><code>data.columns.buttons</code></p><p>类型：buttons?: Button[]</p><p>见下方操作按钮配置</p><h3 id="-renderformatter">-renderFormatter</h3><p><code>data.columns.renderFormatter</code></p><ul><li><p>类型：renderFormatter?: (val: any, row: any) =&gt; any</p><p>使用了 <code>render</code> 属性时,渲染前对字段的值进行预处理方法，需返回新值</p></li></ul><h3 id="-prop">-prop</h3><p><code>data.cloumns.prop</code></p><p>类型：prop?: string</p><p>el-table-column的其他所有属性，如prop、label等</p><h2 id="apikey">ApiKey</h2><h3 id="-列表数据请求接口">-列表数据请求接口</h3><p><code>data.apiKey.list</code></p><h3 id="-删除数据请求接口">-删除数据请求接口</h3><p><code>data.apiKey.del</code></p><h3 id="-编辑接口数据请求接口">-编辑接口数据请求接口</h3><p><code>data.apiKey.edit</code></p><h3 id="-导出数据请求接口">-导出数据请求接口</h3><p><code>data.apiKey.export</code></p><h2 id="event事件">Event事件</h2><h3 id="-before">-before</h3><p><code>data.events.before</code> 类型：before?: string | ((type: EventType, params: any, rout: any) =&gt; boolean)</p><p>请求列表数据，编辑和删除等接口事件发送请求前，这里可对发送的数据进行拦截处理。</p><ul><li>type支持的类型<code>switchChange | getData | del | search | export</code>，用于表示的同的接口事件类型</li><li>params请求的参数，可对此参数进行修改，然后return回去</li><li>route当前页面路由信息</li></ul><p>同时支持string字符串类型，这个需要自定义开发，适用于处理一些比较复杂的逻辑处理时，根据设置的字符将处理逻辑写入本地文件</p><h3 id="-after">-after</h3><p><code>data.events.after</code> 类型：after?: string | ((type: EventType, res: any, isSuccess?: boolean) =&gt; any)</p><p>类似于前面的<code>before</code>。最后需要将处理后的结果 return res</p><h2 id="按钮">按钮</h2><h3 id="-操作按钮配置">-操作按钮配置</h3><p>适用于表格左上方及表格列表内右侧按钮</p><p><code>data.controlBtn</code> 为表格左上方，<code>data.columns</code>下<code>render=buttons</code>为列表右侧按钮，如：</p><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> data={
  <span class="hljs-attr">controlBtn</span>:[], <span class="hljs-comment">//为表格左上方按钮配置</span>
  <span class="hljs-attr">columns</span>:[{
    <span class="hljs-attr">render</span>:<span class="hljs-string">&#39;buttons&#39;</span>, <span class="hljs-comment">//为列表右侧按钮</span>
    <span class="hljs-attr">buttons</span>:[]
  }]
}</code></pre><p>详细配置如：</p><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> buttons=[
  {
    <span class="hljs-comment">//我们内置了常见的add、edit、detail、del、export按钮，只需按约定的key值设置即可快速设置</span>
    <span class="hljs-attr">key</span>:<span class="hljs-string">&#39;add&#39;</span>
  },
  {
    <span class="hljs-comment">// 渲染方式:tooltip=带tip的按钮,confirm=带确认框的按钮，空为正常的按钮</span>
    <span class="hljs-attr">render</span>: <span class="hljs-string">&quot;tooltip&quot;</span>,
    <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// 按钮名称</span>
    <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// 鼠标放置时的 title 提示</span>
    <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// 直接在按钮内显示的文字，title 有值时可为空</span>
    <span class="hljs-attr">class</span>: <span class="hljs-string">&quot;&quot;</span>,
    <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;primary&quot;</span>, <span class="hljs-comment">// 按钮类型，请参考 element plus 的按钮类型</span>
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// 按钮 icon</span>
    <span class="hljs-attr">popConfirm</span>: {}, <span class="hljs-comment">//自定popConfirm属性，当render=confirm</span>
    <span class="hljs-comment">// 自定义点击事件</span>
    <span class="hljs-attr">click</span>: <span class="hljs-function">(<span class="hljs-params">row: { [key: string]: any }</span>) =&gt;</span> {

    },
    <span class="hljs-comment">// 按钮是否显示，true显示</span>
    <span class="hljs-attr">display</span>: <span class="hljs-function">(<span class="hljs-params">row: { [key: string]: any }</span>) =&gt;</span>{
      <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    },
    <span class="hljs-comment">// 按钮是否禁用，true禁用</span>
    <span class="hljs-attr">disabled</span>: <span class="hljs-function">(<span class="hljs-params">row: { [key: string]: any }</span>) =&gt;</span> {
      <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
    },
    <span class="hljs-comment">// 自定义el-button属性</span>
    <span class="hljs-attr">attr</span>: {},
    <span class="hljs-attr">permission</span>: <span class="hljs-string">&#39;string&#39;</span> <span class="hljs-comment">//权限校验标识，也可通过display操作</span>
  }
]</code></pre><h2 id="侧边栏树">侧边栏树</h2><h3 id="-show">-show</h3><p><code>data.treeData.show</code> 类型: boolean。是否开启树</p><h3 id="-before-1">-before</h3><p><code>data.treeData.before</code> 类型：before?: Function | string</p><p>同<code>event.before</code></p><h3 id="-after-1">-after</h3><p>类型：after?: Function | string 同<code>event.after</code></p><h3 id="-method">-method</h3><p><code>data.treeData.method</code> 类型: string</p><p>树列表数据的请求方式</p><h3 id="-requesturl">-requestUrl</h3><p><code>data.treeData.requestUrl</code> 类型: string</p><p>树列表数据的请求接口地址</p><h3 id="-name">-name</h3><p><code>data.treeData.name</code> 类型: string</p>`,109)])))}};export{d as default};
