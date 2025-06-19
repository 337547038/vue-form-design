import{c as t,o as a,af as n}from"./index-eyjXCVj4.js";const l={class:"marked-body"},c={__name:"list",setup(p){return(r,s)=>(a(),t("div",l,s[0]||(s[0]=[n(`<h1 id="aklist-内容列表">AKList 内容列表</h1><pre class="language-html"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">ak-list</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-list</span>&gt;</span></code></pre><h2 id="api">API</h2><h3 id="props">Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>data</td><td>object</td><td>通过设计器拖拽生成的表格配置数据</td></tr><tr><td>data.columns</td><td>array</td><td>用于渲染el-columns-table列，所有参数绑定于当前组件</td></tr><tr><td>data.tableProps</td><td>object</td><td>el-table所有props</td></tr><tr><td>data.apiKey</td><td>object</td><td>同props.apiKey，此处优先级更高</td></tr><tr><td>data.events</td><td>object</td><td>事件</td></tr><tr><td>data.controlBtn</td><td>array</td><td>表格上方按钮组设置，见如何设置一个btn</td></tr><tr><td>searchData</td><td>object</td><td>列表页条件筛选表单数据，同表单的<code>formData</code></td></tr><tr><td>apiKey</td><td>object</td><td>数据请求交互api</td></tr><tr><td>before</td><td>function(params,type,obj)/string</td><td>请求列表前参数处理方法，可对请求参数处理，type操作类型，可fetch(获取列表数据)/del(删除)/submit(修改提交switch)/export(导出)</td></tr><tr><td>after</td><td>function(res,success,type)/string</td><td>请求完成后列表数据处理方法</td></tr><tr><td>fixedBottomScroll</td><td>boolean</td><td>横向滚动条固定在浏览器底部 ，默认为true</td></tr><tr><td>autoLoad</td><td>boolean</td><td>初始时是否自动请求加载数据，默认为true</td></tr><tr><td>treeData</td><td>object</td><td>列表左侧栏树数据</td></tr><tr><td>pk</td><td>string</td><td>主键</td></tr><tr><td>query</td><td>object</td><td>一些附加的请求参数。也可在<code>before</code>处处理</td></tr></tbody></table><h3 id="event">event</h3><table><thead><tr><th>事件</th><th>说明</th></tr></thead><tbody><tr><td>btnClick</td><td>列表上方及右侧按钮点击事件，function(key:string,row?:any)</td></tr></tbody></table><h3 id="propsdatacolumns">props.data.columns</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>help</td><td>string</td><td>表头tooltip提示信息</td></tr><tr><td>render</td><td>string</td><td>渲染类型，可选<code>switch、image、tag、link、datetime、date、buttons、text</code></td></tr><tr><td>config</td><td>object</td><td>当前render类型的附加属性，详见当前组件的props。</td></tr><tr><td>replaceValue</td><td>object</td><td>仅当<code>render=tag/text</code>时,{ &#39;1&#39;: &#39;启用&#39;, &#39;0&#39;: &#39;禁用&#39; }</td></tr><tr><td>custom</td><td>object</td><td>仅当<code>render=tag/text</code>时,{ &#39;1&#39;: &#39;success&#39;, &#39;0&#39;: &#39;danger&#39; }</td></tr><tr><td>timeFormat</td><td>string</td><td>仅当<code>render=datetime、date</code>时，对日期格式化，如YYYY年MM月dd日</td></tr><tr><td>buttons</td><td>array</td><td>仅当<code>render=buttons</code>时，表格行右侧边按钮，详情见<code>自定义表格行右侧边按钮</code></td></tr><tr><td>renderFormatter</td><td>function(val,row)</td><td>使用了 render 属性时,渲染前对字段值的预处理方法，需返回新值</td></tr><tr><td>－</td><td>－</td><td>所有<code>el-table-column</code>属性</td></tr></tbody></table><h3 id="propsapikey">props.apiKey</h3><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>list</td><td>列表数据接口</td></tr><tr><td>edit</td><td>列表使用了switch时用于修改状态</td></tr><tr><td>del</td><td>删除接口</td></tr><tr><td>export</td><td>导出接口</td></tr></tbody></table><h3 id="methods">Methods</h3><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>getListData</td><td>列表请求方法，可手动调用</td></tr><tr><td>delClick</td><td>数据删除，delClick(id)</td></tr><tr><td>table</td><td>表格方法，使用$refs方式获取</td></tr><tr><td>setSearchFormValue</td><td>设置查询条件表单初始值。可根据url参数先设置查询表单初始值再加载列表请求方法</td></tr><tr><td>getSearchFormValue</td><td>获取查询条件表单的值</td></tr></tbody></table><h3 id="slot">Slot</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>位于筛选表单和表格列表间，可用于存放添加删除数据的按钮或其他操作</td></tr><tr><td>controlBtn</td><td>位于筛列表可配置新增删除按钮后面</td></tr><tr><td>searchForm</td><td>位于条件筛选表单内部</td></tr><tr><td>-</td><td>columns对应的props</td></tr></tbody></table><h3 id="tree">tree</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>show</td><td>boolean</td><td>是否显示</td></tr><tr><td>name</td><td>string</td><td>唯一标识，查询条件参数值</td></tr><tr><td>method</td><td>string</td><td>数据接口请求方式，get/post默认post</td></tr><tr><td>requestUrl</td><td>string</td><td>数据接口请求地址，必填</td></tr><tr><td>before</td><td>Function(params,type,obj)</td><td>接口请求前数据参数处理方式</td></tr><tr><td>after</td><td>Function(res,success,type)/string</td><td>接口请求后数据参数处理方式</td></tr><tr><td>treeProps</td><td>object</td><td>组件tree对应props</td></tr></tbody></table><h3 id="自定义表格行右侧边及列表上方按钮">自定义表格行右侧边及列表上方按钮</h3><p>我们内置了常见的增加、编辑、查看、删除、导出按钮，只需按约定的key值设置即可快速设置</p><pre class="language-js"><code class="hljs"><span class="hljs-keyword">const</span> btn={
   <span class="hljs-attr">render</span>: <span class="hljs-string">&quot;buttons&quot;</span>,
   <span class="hljs-attr">buttons</span>: [
       {
           <span class="hljs-attr">key</span>:<span class="hljs-string">&quot;edit&quot;</span>
           <span class="hljs-comment">//其他值属性可继续设置</span>
       },
       {
           <span class="hljs-attr">key</span>:<span class="hljs-string">&quot;detail&quot;</span>
       },
       {
           <span class="hljs-attr">key</span>:<span class="hljs-string">&quot;del&quot;</span>
       },
       {
           <span class="hljs-attr">key</span>:<span class="hljs-string">&quot;export&quot;</span>
      }
   ]
};
<span class="hljs-comment">//自定义一个新的按钮</span>
<span class="hljs-keyword">const</span> newBtn={
    <span class="hljs-attr">render</span>:<span class="hljs-string">&quot;buttons&quot;</span>,
    <span class="hljs-attr">buttos</span>:[
        {
            <span class="hljs-attr">key</span>:<span class="hljs-string">&quot;edit&quot;</span>
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
    ]
};</code></pre><h3 id="深度使用表格完整配置设置">深度使用表格(完整配置设置)</h3><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> opt = {
  <span class="hljs-attr">tableProps</span>: {}, <span class="hljs-comment">// 支持el-table所有prop设置</span>
  <span class="hljs-attr">columns</span>: [ <span class="hljs-comment">//表头设置</span>
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;多选&quot;</span>,
      <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;selection&quot;</span>
    },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;序号&quot;</span>,
      <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;index&quot;</span>,
      <span class="hljs-attr">width</span>: <span class="hljs-string">&quot;70px&quot;</span>
    },
    {
    <span class="hljs-attr">prop</span>: <span class="hljs-string">&quot;name&quot;</span>,
    <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;状态&quot;</span>,
    <span class="hljs-attr">render</span>: <span class="hljs-string">&quot;switch&quot;</span>, <span class="hljs-comment">// 渲染类型</span>
    <span class="hljs-attr">config</span>: <span class="hljs-comment">// 对应render类型的配置</span>
    {
      <span class="hljs-attr">inlinePrompt</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">activeText</span>: <span class="hljs-string">&quot;1&quot;</span>,
      <span class="hljs-attr">inactiveText</span>: <span class="hljs-string">&quot;2&quot;</span>,
      <span class="hljs-attr">activeValue</span>: <span class="hljs-string">&quot;on&quot;</span>,
      <span class="hljs-attr">inactiveValue</span>: <span class="hljs-string">&quot;off&quot;</span>
    }
  },
  {
    <span class="hljs-attr">prop</span>: <span class="hljs-string">&quot;sex&quot;</span>,
    <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;性别&quot;</span>,
    <span class="hljs-attr">render</span>: <span class="hljs-string">&quot;tag&quot;</span>,
    <span class="hljs-attr">config</span>: {},
    <span class="hljs-attr">custom</span>: <span class="hljs-comment">// render=tag/text时，显示的type。表示当前值为1时tag的type=primary</span>
    {
      <span class="hljs-number">1</span>: <span class="hljs-string">&quot;primary&quot;</span>,
      <span class="hljs-number">2</span>: <span class="hljs-string">&quot;success&quot;</span>
    },
    <span class="hljs-attr">replaceValue</span>: <span class="hljs-comment">// render=tag/text时，即将接口返回值为1替换成女显示</span>
    {
      <span class="hljs-number">1</span>: <span class="hljs-string">&quot;女&quot;</span>
    }
  },
  {
    <span class="hljs-attr">prop</span>: <span class="hljs-string">&quot;img&quot;</span>,
    <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;图片&quot;</span>,
    <span class="hljs-attr">render</span>: <span class="hljs-string">&quot;image&quot;</span>,
    <span class="hljs-attr">config</span>:
    { <span class="hljs-comment">// 图片的宽高及其他el-image所有prop</span>
      <span class="hljs-attr">width</span>: <span class="hljs-string">&quot;100&quot;</span>,
      <span class="hljs-attr">height</span>: <span class="hljs-string">&quot;100&quot;</span>
    }
  },
  {
    <span class="hljs-attr">prop</span>: <span class="hljs-string">&quot;link&quot;</span>,
    <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;链接&quot;</span>,
    <span class="hljs-attr">render</span>: <span class="hljs-string">&quot;link&quot;</span>,
    <span class="hljs-attr">config</span>:
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;primary&quot;</span>,
      <span class="hljs-attr">underline</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">target</span>: <span class="hljs-string">&quot;_blank&quot;</span>
    }
  },
    {
      <span class="hljs-attr">prop</span>: <span class="hljs-string">&quot;datetime&quot;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;时间&quot;</span>,
      <span class="hljs-attr">render</span>: <span class="hljs-string">&quot;datetime&quot;</span>,
      <span class="hljs-attr">config</span>: {},
      <span class="hljs-attr">timeFormat</span>: <span class="hljs-string">&quot;{yyyy}-{mm}-{dd}&quot;</span> <span class="hljs-comment">// 时间显示类型</span>
    },
  {
    <span class="hljs-attr">prop</span>: <span class="hljs-string">&quot;other&quot;</span>,
    <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;操作&quot;</span>,
    <span class="hljs-attr">render</span>: <span class="hljs-string">&quot;buttons&quot;</span>,
    <span class="hljs-attr">config</span>: {},
    <span class="hljs-attr">buttons</span>: [ <span class="hljs-comment">// 操作按钮设置，见如何自定一个按钮</span>
    {
      <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;edit&quot;</span>
    },
    {
      <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;del&quot;</span>,
      <span class="hljs-attr">popConfirm</span>:
      {
        <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;确认删除该记录吗？&quot;</span>,
        <span class="hljs-attr">confirmButtonText</span>: <span class="hljs-string">&quot;确认&quot;</span>,
        <span class="hljs-attr">cancelButtonText</span>: <span class="hljs-string">&quot;取消&quot;</span>,
        <span class="hljs-attr">confirmButtonType</span>: <span class="hljs-string">&quot;danger&quot;</span>
      }
    }]
  }],
  <span class="hljs-attr">config</span>:
  {
    <span class="hljs-attr">formId</span>: <span class="hljs-number">1</span>, <span class="hljs-comment">// 当前列表对应的表单id</span>
    <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// 当前设计列表保存的名称</span>
    <span class="hljs-attr">openType</span>: <span class="hljs-string">&quot;dialog&quot;</span>, <span class="hljs-comment">// 点击编辑和新增时显示方式。dialog/page两个方式</span>
    <span class="hljs-attr">dialogWidth</span>: <span class="hljs-string">&quot;500&quot;</span>, <span class="hljs-comment">// openType=dialog时窗口宽度</span>
    <span class="hljs-attr">fixedBottomScroll</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// 出现横向滚动条时，是否固定在浏览器底部</span>
    <span class="hljs-attr">columnsSetting</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// 是否表格表头列显示与隐藏设置</span>
    <span class="hljs-attr">expand</span>: <span class="hljs-literal">true</span>,<span class="hljs-comment">// 可折叠查询表单，即可显示隐藏条件筛选表单</span>
    <span class="hljs-attr">searchJump</span>: <span class="hljs-literal">true</span>,<span class="hljs-comment">//跳转条件查询时是否跳转页面，即将查询参数写在url上</span>
    <span class="hljs-attr">operateDropdown</span>: <span class="hljs-string">&quot;5&quot;</span>, <span class="hljs-comment">// 一般为表格右侧操作按钮，当按钮个数大于当前设定时，其余的则以下拉菜单的形式展示</span>
    <span class="hljs-attr">pageSize</span>: <span class="hljs-string">&quot;20&quot;</span>, <span class="hljs-comment">// 每页显示多少条</span>
    <span class="hljs-attr">orderSort</span>: <span class="hljs-string">&quot;id desc&quot;</span> <span class="hljs-comment">// 作为扩展参数传接口</span>
  },
  <span class="hljs-attr">apiKey</span>:
  {
    <span class="hljs-attr">list</span>: <span class="hljs-string">&quot;list&quot;</span>, <span class="hljs-comment">// 列表数据请求接口</span>
    <span class="hljs-attr">del</span>: <span class="hljs-string">&quot;del&quot;</span>, <span class="hljs-comment">// 删除数据请求接口</span>
    <span class="hljs-attr">edit</span>: <span class="hljs-string">&quot;edit&quot;</span>, <span class="hljs-comment">// 编辑接口</span>
    <span class="hljs-attr">export</span>: <span class="hljs-string">&quot;export&quot;</span> <span class="hljs-comment">// 导出接口</span>
  },
  <span class="hljs-attr">controlBtn</span>: [ <span class="hljs-comment">// 一般显示在表格左上方的操作按钮</span>
  {
    <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;add&quot;</span>
  },
  {
    <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;edit&quot;</span>
  },
  {
    <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;del&quot;</span>,
    <span class="hljs-attr">popConfirm</span>:
    {
      <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;确认删除该记录吗？&quot;</span>,
      <span class="hljs-attr">confirmButtonText</span>: <span class="hljs-string">&quot;确认&quot;</span>,
      <span class="hljs-attr">cancelButtonText</span>: <span class="hljs-string">&quot;取消&quot;</span>,
      <span class="hljs-attr">confirmButtonType</span>: <span class="hljs-string">&quot;danger&quot;</span>
    }
  },
  {
    <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;export&quot;</span>
  }
  ],
  <span class="hljs-attr">treeData</span>:<span class="hljs-comment">//侧栏树相关配置</span>
  {
    <span class="hljs-attr">show</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">before</span>: <span class="hljs-function">(<span class="hljs-params">params, type, obj</span>) =&gt;</span>
    {
      <span class="hljs-comment">// params请求的参数，可根据type作判断，对params作修改后return回去</span>
      <span class="hljs-comment">// 需要将params参数return</span>
      <span class="hljs-keyword">return</span> params
    },
    <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;name&quot;</span>,
    <span class="hljs-attr">requestUrl</span>: <span class="hljs-string">&quot;gettree&quot;</span>,
    <span class="hljs-attr">after</span>: <span class="hljs-function">(<span class="hljs-params">res, success, type</span>) =&gt;</span>
    {
      <span class="hljs-comment">// res接口返回结果，type当前事件类型，success是否成功；对结果修改后返回</span>
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(type, res)
      <span class="hljs-keyword">return</span> res
    }
  },
  <span class="hljs-attr">events</span>:<span class="hljs-comment">// 事件</span>
  { <span class="hljs-comment">//type 事件类型； </span>
    <span class="hljs-attr">before</span>: <span class="hljs-function">(<span class="hljs-params">params, type, obj</span>) =&gt;</span>
    {
      <span class="hljs-comment">// params请求的参数，可根据type作判断，对params作修改后return回去</span>
      <span class="hljs-comment">// 需要将params参数return</span>
      <span class="hljs-keyword">return</span> params
    },
    <span class="hljs-attr">after</span>: <span class="hljs-function">(<span class="hljs-params">res, success, type </span>) =&gt;</span>
    {
      <span class="hljs-comment">// res接口返回结果，type当前事件类型，success是否成功；对结果修改后返回</span>
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(type, res)
      <span class="hljs-keyword">return</span> res
    }
  },
  <span class="hljs-attr">pk</span>: <span class="hljs-string">&quot;id&quot;</span> <span class="hljs-comment">//主键，用于删除或编辑</span>
}</code></pre>`,22)])))}};export{c as default};
