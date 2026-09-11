import{B as e,G as t,L as n,St as r,b as i,f as a,h as o,it as s,mt as c,v as l,x as u,y as d}from"./runtime-core.esm-bundler-cHfltBS4.js";import{t as f}from"./component-BlYMMrll.js";var p=u({__name:`list.md.Virtual6af9d324`,setup(r){let a=c(),s=c({columns:[{label:`名称`,prop:`name`},{label:`操作`,prop:`operate`,render:`buttons`,config:{},buttons:[{key:`edit`},{key:`del`}]}],config:{}}),l=c([]);return n(()=>{a.value.setTableData([{name:`姓名`}])}),(n,r)=>{let c=t(`ak-list`);return e(),o(`div`,null,[i(c,{ref_key:`tableRef`,ref:a,"api-key":{},"search-data":l.value,data:s.value},null,8,[`search-data`,`data`])])}}}),m={class:`marked-body`},h={__name:`list`,setup(t){return(t,n)=>(e(),o(`div`,m,[n[1]||=l(`<h1 id="AKList 内容列表"><a name="aklist-" class="anchor" href="#aklist-"><span class="header-link"></span></a> AKList 内容列表 </h1><pre class="language-html"><code class="hljs">
<span class="hljs-tag">&lt;<span class="hljs-name">ak-list</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;tableData&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-list</span>&gt;</span></code></pre><h2 id="基本表格"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> 基本表格 </h2>`,3),i(r(f),{code:`%3C!--%20Created%20by%20weiXin%3A337547038%20--%3E%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-list%0A%20%20%20%20%20%20ref%3D%22tableRef%22%0A%20%20%20%20%20%20%3Aapi-key%3D'%7B%7D'%0A%20%20%20%20%20%20%3Asearch-data%3D%22searchData%22%0A%20%20%20%20%20%20%3Adata%3D%22tableData%22%0A%20%20%20%20%3E%0A%20%20%20%20%3C%2Fak-list%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7Bref%2C%20onMounted%7D%20from%20'vue'%0A%0A%20%20const%20tableRef%20%3D%20ref()%0A%20%20const%20tableData%20%3D%20ref(%7B%0A%20%20%20%20columns%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20%22%E5%90%8D%E7%A7%B0%22%2C%0A%20%20%20%20%20%20%20%20prop%3A%20%22name%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20%22%E6%93%8D%E4%BD%9C%22%2C%0A%20%20%20%20%20%20%20%20prop%3A%20%22operate%22%2C%0A%20%20%20%20%20%20%20%20render%3A%20%22buttons%22%2C%0A%20%20%20%20%20%20%20%20config%3A%0A%20%20%20%20%20%20%20%20%20%20%7B%7D%2C%0A%20%20%20%20%20%20%20%20buttons%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20%22edit%22%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20%22del%22%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%20%20%7D%5D%2C%0A%20%20%20%20config%3A%0A%20%20%20%20%20%20%7B%7D%0A%20%20%7D)%0A%20%20const%20searchData%20%3D%20ref(%5B%5D)%0A%0A%20%20%2F%2F%E6%B7%BB%E5%8A%A0%E4%B8%80%E6%9D%A1%E6%BC%94%E7%A4%BA%E6%95%B0%E6%8D%AE%0A%20%20onMounted(()%20%3D%3E%20%7B%0A%20%20%20%20tableRef.value.setTableData(%5B%7Bname%3A%20'%E5%A7%93%E5%90%8D'%7D%5D)%0A%20%20%7D)%0A%0A%3C%2Fscript%3E%0A`},{code:s(()=>[...n[0]||=[a(`pre`,{class:`language-xml`},[a(`code`,{class:`hljs`},[a(`span`,{class:`hljs-comment`},`<!-- Created by weiXin:337547038 -->`),d(`
`),a(`span`,{class:`hljs-tag`},[d(`<`),a(`span`,{class:`hljs-name`},`template`),d(`>`)]),d(`
  `),a(`span`,{class:`hljs-tag`},[d(`<`),a(`span`,{class:`hljs-name`},`div`),d(`>`)]),d(`
    `),a(`span`,{class:`hljs-tag`},[d(`<`),a(`span`,{class:`hljs-name`},`ak-list`),d(`
      `),a(`span`,{class:`hljs-attr`},`ref`),d(`=`),a(`span`,{class:`hljs-string`},`"tableRef"`),d(`
      `),a(`span`,{class:`hljs-attr`},`:api-key`),d(`=`),a(`span`,{class:`hljs-string`},`'{}'`),d(`
      `),a(`span`,{class:`hljs-attr`},`:search-data`),d(`=`),a(`span`,{class:`hljs-string`},`"searchData"`),d(`
      `),a(`span`,{class:`hljs-attr`},`:data`),d(`=`),a(`span`,{class:`hljs-string`},`"tableData"`),d(`
    >`)]),d(`
    `),a(`span`,{class:`hljs-tag`},[d(`</`),a(`span`,{class:`hljs-name`},`ak-list`),d(`>`)]),d(`
  `),a(`span`,{class:`hljs-tag`},[d(`</`),a(`span`,{class:`hljs-name`},`div`),d(`>`)]),d(`
`),a(`span`,{class:`hljs-tag`},[d(`</`),a(`span`,{class:`hljs-name`},`template`),d(`>`)]),d(`

`),a(`span`,{class:`hljs-tag`},[d(`<`),a(`span`,{class:`hljs-name`},`script`),d(),a(`span`,{class:`hljs-attr`},`setup`),d(),a(`span`,{class:`hljs-attr`},`lang`),d(`=`),a(`span`,{class:`hljs-string`},`"ts"`),d(`>`)]),a(`span`,{class:`language-javascript`},[d(`
  `),a(`span`,{class:`hljs-keyword`},`import`),d(` {ref, onMounted} `),a(`span`,{class:`hljs-keyword`},`from`),d(),a(`span`,{class:`hljs-string`},`'vue'`),d(`

  `),a(`span`,{class:`hljs-keyword`},`const`),d(` tableRef = `),a(`span`,{class:`hljs-title function_`},`ref`),d(`()
  `),a(`span`,{class:`hljs-keyword`},`const`),d(` tableData = `),a(`span`,{class:`hljs-title function_`},`ref`),d(`({
    `),a(`span`,{class:`hljs-attr`},`columns`),d(`: [
      {
        `),a(`span`,{class:`hljs-attr`},`label`),d(`: `),a(`span`,{class:`hljs-string`},`"名称"`),d(`,
        `),a(`span`,{class:`hljs-attr`},`prop`),d(`: `),a(`span`,{class:`hljs-string`},`"name"`),d(`
      },
      {
        `),a(`span`,{class:`hljs-attr`},`label`),d(`: `),a(`span`,{class:`hljs-string`},`"操作"`),d(`,
        `),a(`span`,{class:`hljs-attr`},`prop`),d(`: `),a(`span`,{class:`hljs-string`},`"operate"`),d(`,
        `),a(`span`,{class:`hljs-attr`},`render`),d(`: `),a(`span`,{class:`hljs-string`},`"buttons"`),d(`,
        `),a(`span`,{class:`hljs-attr`},`config`),d(`:
          {},
        `),a(`span`,{class:`hljs-attr`},`buttons`),d(`: [
          {
            `),a(`span`,{class:`hljs-attr`},`key`),d(`: `),a(`span`,{class:`hljs-string`},`"edit"`),d(`
          },
          {
            `),a(`span`,{class:`hljs-attr`},`key`),d(`: `),a(`span`,{class:`hljs-string`},`"del"`),d(`
          }]
      }],
    `),a(`span`,{class:`hljs-attr`},`config`),d(`:
      {}
  })
  `),a(`span`,{class:`hljs-keyword`},`const`),d(` searchData = `),a(`span`,{class:`hljs-title function_`},`ref`),d(`([])

  `),a(`span`,{class:`hljs-comment`},`//添加一条演示数据`),d(`
  `),a(`span`,{class:`hljs-title function_`},`onMounted`),d(`(`),a(`span`,{class:`hljs-function`},`() =>`),d(` {
    tableRef.`),a(`span`,{class:`hljs-property`},`value`),d(`.`),a(`span`,{class:`hljs-title function_`},`setTableData`),d(`([{`),a(`span`,{class:`hljs-attr`},`name`),d(`: `),a(`span`,{class:`hljs-string`},`'姓名'`),d(`}])
  })

`)]),a(`span`,{class:`hljs-tag`},[d(`</`),a(`span`,{class:`hljs-name`},`script`),d(`>`)]),d(`
`)])],-1)]]),default:s(()=>[i(p)]),_:1}),n[2]||=l(`<h2 id="API"><a name="api" class="anchor" href="#api"><span class="header-link"></span></a> API </h2><h3 id="Props"><a name="props" class="anchor" href="#props"><span class="header-link"></span></a> Props </h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>data</td><td>object</td><td>通过设计器拖拽生成的表格配置数据</td></tr><tr><td>data.columns</td><td>array</td><td>用于渲染el-columns-table列，所有参数绑定于当前组件</td></tr><tr><td>data.config</td><td>object</td><td>表格配置数据</td></tr><tr><td>searchData</td><td>object</td><td>列表页条件筛选表单数据，同表单的<code>formData</code></td></tr><tr><td>apiKey</td><td>object</td><td>数据请求交互api</td></tr><tr><td>before</td><td>function(params,otherObj)</td><td>请求列表前参数处理方法，可对请求参数处理，type操作类型，可fetch(获取列表数据)/del(删除)/submit(修改提交switch)/export(导出)</td></tr><tr><td>after</td><td>function(res,success,type)</td><td>请求完成后列表数据处理方法</td></tr><tr><td>fixedBottomScroll</td><td>boolean</td><td>横向滚动条固定在浏览器底部 ，默认为true</td></tr><tr><td>autoLoad</td><td>boolean</td><td>初始时是否自动请求加载数据，默认为true</td></tr><tr><td>pk</td><td>string</td><td>主键</td></tr><tr><td>query</td><td>object</td><td>一些附加的请求参数。也可在<code>before</code>处处理</td></tr><tr><td>pagination</td><td>object</td><td>分页信息{ pageSize: number, current: number }</td></tr><tr><td>dict</td><td>object</td><td>字典信息</td></tr></tbody></table><h3 id="event"><a name="event" class="anchor" href="#event"><span class="header-link"></span></a> event </h3><table><thead><tr><th>事件</th><th>说明</th></tr></thead><tbody><tr><td>btnClick</td><td>列表上方及右侧按钮点击事件，function(key:string,row?:any,close?:any)</td></tr></tbody></table><h3 id="props.data.columns"><a name="props-data-columns" class="anchor" href="#props-data-columns"><span class="header-link"></span></a> props.data.columns </h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>help</td><td>string</td><td>表头tooltip提示信息</td></tr><tr><td>render</td><td>string</td><td>渲染类型，可选<code>switch、image、tag、link、datetime、date、buttons、text、url</code></td></tr><tr><td>config</td><td>object</td><td>当前render类型的附加属性，详见当前组件的props。</td></tr><tr><td>replaceValue</td><td>object</td><td>仅当<code>render=tag/text</code>时,{ &#39;1&#39;: &#39;启用&#39;, &#39;0&#39;: &#39;禁用&#39; }</td></tr><tr><td>custom</td><td>object</td><td>仅当<code>render=tag/text</code>时,{ &#39;1&#39;: &#39;success&#39;, &#39;0&#39;: &#39;danger&#39; }</td></tr><tr><td>timeFormat</td><td>string</td><td>仅当<code>render=datetime、date</code>时，对日期格式化，如YYYY年MM月dd日</td></tr><tr><td>buttons</td><td>array</td><td>仅当<code>render=buttons</code>时，表格行右侧边按钮，详情见<code>自定义表格行右侧边按钮</code></td></tr><tr><td>renderFormatter</td><td>function(val,row)</td><td>使用了 render 属性时,渲染前对字段值的预处理方法，需返回新值</td></tr><tr><td>－</td><td>－</td><td>所有<code>el-table-column</code>属性</td></tr></tbody></table><h3 id="props.apiKey"><a name="props-apikey" class="anchor" href="#props-apikey"><span class="header-link"></span></a> props.apiKey </h3><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>list</td><td>列表数据接口</td></tr><tr><td>edit</td><td>列表使用了switch时用于修改状态</td></tr><tr><td>del</td><td>删除接口</td></tr><tr><td>export</td><td>导出接口</td></tr></tbody></table><h3 id="Methods"><a name="methods" class="anchor" href="#methods"><span class="header-link"></span></a> Methods </h3><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>getListData</td><td>列表请求方法，可手动调用</td></tr><tr><td>delClick</td><td>数据删除，delClick(id)</td></tr><tr><td>table</td><td>表格方法，使用$refs方式获取</td></tr><tr><td>setSearchFormValue</td><td>设置查询条件表单初始值。可根据url参数先设置查询表单初始值再加载列表请求方法</td></tr><tr><td>getSearchFormValue</td><td>获取查询条件表单的值</td></tr></tbody></table><h3 id="Slot"><a name="slot" class="anchor" href="#slot"><span class="header-link"></span></a> Slot </h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>用于弹窗显示添加编辑表单，设计config.openType=dialog时，点击按钮key=add/edit时会弹出对话</td></tr><tr><td>controlBtn</td><td>位于筛列表可配置新增删除按钮后面</td></tr><tr><td>searchForm</td><td>位于条件筛选表单内部</td></tr><tr><td>-</td><td>columns对应的props；{index:number,name:string,row:Record&lt;string,any&gt;,dict:Record&lt;string,any&gt;,value:any}</td></tr></tbody></table><h3 id="tree"><a name="tree" class="anchor" href="#tree"><span class="header-link"></span></a> tree </h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>show</td><td>boolean</td><td>是否显示</td></tr><tr><td>name</td><td>string</td><td>唯一标识，查询条件参数值</td></tr><tr><td>method</td><td>string</td><td>数据接口请求方式，get/post默认post</td></tr><tr><td>requestUrl</td><td>string</td><td>数据接口请求地址，必填</td></tr><tr><td>before</td><td>Function(params,obj)</td><td>接口请求前数据参数处理方式</td></tr><tr><td>after</td><td>Function(res,success)</td><td>接口请求后数据参数处理方式</td></tr><tr><td>treeProps</td><td>object</td><td>组件tree对应props</td></tr></tbody></table><h3 id="自定义表格行右侧边及列表上方按钮"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> 自定义表格行右侧边及列表上方按钮 </h3><p>我们内置了常见的增加、编辑、查看、删除、导出按钮，只需按约定的key值设置即可快速设置</p><pre class="language-js"><code class="hljs"><span class="hljs-keyword">const</span> btn = {
  <span class="hljs-attr">render</span>: <span class="hljs-string">&quot;buttons&quot;</span>,
  <span class="hljs-attr">buttons</span>: [
    {
      <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;edit&quot;</span>
      <span class="hljs-comment">//其他值属性可继续设置</span>
    },
    {
      <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;detail&quot;</span>
    },
    {
      <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;del&quot;</span>
    },
    {
      <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;export&quot;</span>
    }
  ]
};
<span class="hljs-comment">//自定义一个新的按钮，使用简单的配置在显示时会自动合并系统设定的默认配置</span>
<span class="hljs-keyword">const</span> newBtn = {
  <span class="hljs-attr">render</span>: <span class="hljs-string">&quot;buttons&quot;</span>,
  <span class="hljs-attr">buttos</span>: [
    {
      <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;edit&quot;</span>
    },
    {
      <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;del&#39;</span>,
      <span class="hljs-comment">// 渲染方式:tooltip=带tip的按钮,confirm=带确认框的按钮，空为正常的按钮</span>
      <span class="hljs-attr">render</span>: <span class="hljs-string">&quot;tooltip&quot;</span>,
      <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// 鼠标放置时的 title 提示</span>
      <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// 直接在按钮内显示的文字，title 有值时可为空</span>
      <span class="hljs-attr">class</span>: <span class="hljs-string">&quot;&quot;</span>,
      <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;primary&quot;</span>, <span class="hljs-comment">// 按钮类型，请参考 element plus 的按钮类型</span>
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// 按钮 icon</span>
      <span class="hljs-attr">popConfirm</span>: {}, <span class="hljs-comment">//自定popConfirm属性，当render=confirm</span>
      <span class="hljs-comment">// 自定义点击事件</span>
      <span class="hljs-attr">click</span>: <span class="hljs-function">(<span class="hljs-params">row: { [key: string]: any }</span>) =&gt;</span> {
        <span class="hljs-comment">//当使用了系统内置的key时，这里可以使用return false阻止系统事件</span>
      },
      <span class="hljs-comment">// 按钮是否显示，true隐藏</span>
      <span class="hljs-attr">display</span>: <span class="hljs-function">(<span class="hljs-params">row: { [key: string]: any }</span>) =&gt;</span> {
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
      },
      <span class="hljs-comment">// 按钮是否禁用，true禁用</span>
      <span class="hljs-attr">disabled</span>: <span class="hljs-function">(<span class="hljs-params">row: { [key: string]: any }</span>) =&gt;</span> {
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
      },
      <span class="hljs-comment">// 自定义el-button属性</span>
      <span class="hljs-attr">props</span>: {}
    }
  ]
};</code></pre><h3 id="深度使用表格(完整配置设置)"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> 深度使用表格(完整配置设置) </h3><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> opt = {
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
        <span class="hljs-attr">tableProps</span>: {}, <span class="hljs-comment">// 支持el-table所有prop设置</span>
        <span class="hljs-attr">formId</span>: <span class="hljs-number">1</span>, <span class="hljs-comment">// 当前列表对应的表单id</span>
        <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// 当前设计列表保存的名称</span>
        <span class="hljs-attr">openType</span>: <span class="hljs-string">&quot;dialog&quot;</span>, <span class="hljs-comment">// 点击编辑和新增时显示方式。dialog/page两个方式</span>
        <span class="hljs-attr">dialogWidth</span>: <span class="hljs-string">&quot;500&quot;</span>, <span class="hljs-comment">// openType=dialog时窗口宽度</span>
        <span class="hljs-attr">fixedBottomScroll</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// 出现横向滚动条时，是否固定在浏览器底部</span>
        <span class="hljs-attr">columnsSetting</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// 是否表格表头列显示与隐藏设置</span>
        <span class="hljs-attr">expand</span>: <span class="hljs-literal">true</span>,<span class="hljs-comment">// 可折叠查询表单，即可显示隐藏条件筛选表单</span>
        <span class="hljs-attr">searchJump</span>: <span class="hljs-literal">true</span>,<span class="hljs-comment">//跳转条件查询时是否跳转页面，即将查询参数写在url上</span>
        <span class="hljs-attr">operateDropdown</span>: <span class="hljs-string">&quot;5&quot;</span>, <span class="hljs-comment">// 一般为表格右侧操作按钮，当按钮个数大于当前设定时，其余的则以下拉菜单的形式展示</span>
        <span class="hljs-attr">pageSize</span>: <span class="hljs-string">&quot;20&quot;</span>, <span class="hljs-comment">// 每页显示多少条</span>
        <span class="hljs-attr">orderSort</span>: <span class="hljs-string">&quot;id desc&quot;</span>, <span class="hljs-comment">// 作为扩展参数传接口</span>
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
              <span class="hljs-attr">before</span>: <span class="hljs-function">(<span class="hljs-params">params, type, obj</span>) =&gt;</span> {
                <span class="hljs-comment">// params请求的参数，可根据type作判断，对params作修改后return回去</span>
                <span class="hljs-comment">// 需要将params参数return</span>
                <span class="hljs-keyword">return</span> params
              },
              <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;name&quot;</span>,
              <span class="hljs-attr">requestUrl</span>: <span class="hljs-string">&quot;gettree&quot;</span>,
              <span class="hljs-attr">after</span>: <span class="hljs-function">(<span class="hljs-params">res, success, type</span>) =&gt;</span> {
                <span class="hljs-comment">// res接口返回结果，type当前事件类型，success是否成功；对结果修改后返回</span>
                <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(type, res)
                <span class="hljs-keyword">return</span> res
              }
            },
        <span class="hljs-attr">before</span>: <span class="hljs-function">(<span class="hljs-params">params, type, obj</span>) =&gt;</span> {
          <span class="hljs-comment">// params请求的参数，可根据type作判断，对params作修改后return回去</span>
          <span class="hljs-comment">// 需要将params参数return</span>
          <span class="hljs-keyword">return</span> params
        },
        <span class="hljs-attr">after</span>: <span class="hljs-function">(<span class="hljs-params">res, success, type</span>) =&gt;</span> {
          <span class="hljs-comment">// res接口返回结果，type当前事件类型，success是否成功；对结果修改后返回</span>
          <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(type, res)
          <span class="hljs-keyword">return</span> res
        },
        <span class="hljs-attr">pk</span>: <span class="hljs-string">&quot;id&quot;</span> <span class="hljs-comment">//主键，用于删除或编辑</span>
      }
}</code></pre>`,20)]))}};export{h as default};