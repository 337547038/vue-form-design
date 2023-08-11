/* empty css                                                            */import{o as s,c as a,ai as n}from"./index-b7d7e192.js";const p=""+new URL("use-form4-3c4c3b8a.png",import.meta.url).href,t=""+new URL("use-form3-566535e7.png",import.meta.url).href,e=""+new URL("use-form1-08d01fcf.png",import.meta.url).href,l=""+new URL("use-form2-c95c310f.png",import.meta.url).href,o={class:"marked-body"},r=n(`<h1 id="表单设计">表单设计</h1><h2 id="基础字段">基础字段</h2><p>表单设计基本常用组件，直接拖动设计区域，设置好相应的属性配置即可，各组件使用见系统管理各栏目</p><p><strong>•树形控件</strong></p><p>使用方法详见<a href="/#/design/dataSource">系统管理部门管理</a> 新增弹窗</p><h2 id="高级字段">高级字段</h2><p><strong>•子表：</strong></p><p>使用方法详见<a href="/#/design/dataSource">新增表单数据源</a></p><p><strong>•自定义组件</strong></p><p>自定义组件需全局注册，<code>导出vue文件</code>使用可使用当前页面导入的。组件需要v-model才级实现更新</p><p>引入当前页面组件时建议使用markRaw，如：</p><pre class="language-javascript"><code class="hljs"><span class="hljs-comment">// import component from &#39;xxx.vue&#39;</span>
<span class="hljs-attr">config</span>: {
  <span class="hljs-attr">componentName</span>: <span class="hljs-title function_">markRaw</span>(component)
}</code></pre><p>使用方法详见：</p><p><a href="/#/design/dataList/list">列表页设计管理</a> 设置弹窗</p><p><a href="/#/system/role">系统管理-角色管理</a> 新增编辑角色菜单权限</p><p><img src="`+p+'" alt=""></p><h2 id="布局字段">布局字段</h2><p><strong>•弹性布局</strong></p><p>使用方法详见<a href="/#/system/dict">字典管理</a></p><p><img src="'+t+`" alt=""></p><h2 id="使用模板">使用模板</h2><p>可通用使用模板快速创建表单</p><p><strong>创建新模板</strong></p><p>src/views/design/form/template目录下新建ts文件，将设计生成的json/javascript代码复制保存即可新增模板，格式如下：</p><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> imgPath = <span class="hljs-string">&#39;demo.png&#39;</span> <span class="hljs-comment">// 预览图</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> title = <span class="hljs-string">&#39;标题&#39;</span> <span class="hljs-comment">// 标题</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> formData = {} <span class="hljs-comment">// 生成的代码</span></code></pre><h2 id="预览">预览</h2><p>可快速查看当前设计的表单，样式和实际可能存在差异。</p><h2 id="生成脚本预览">生成脚本预览</h2><p>除了预览，同时可以修改编辑，支持更多参数</p><pre class="language-text"><code class="hljs">{
  list:[
    type:&#39;input&#39;,
    control:{
    // 这里对应的当前组件所有props参数，可见elementUi组件
  }
  ]
}</code></pre><h2 id="导出vue文件">导出vue文件</h2><p>支持更多个性化设置，可导出vue文件到本地目录，配置好路由即可。此方法更灵活。更多用法详见系统管理下所有栏目使用</p><h2 id="保存">保存</h2><p>将设计生成的表单保存到服务端，也可通过<code>导出vue文件</code>单独使用</p><h2 id="字段配置">字段配置</h2><h3 id="通用属性">通用属性</h3><p><strong>•字段标识</strong></p><p>表单控件唯一标识，即表单控件元素的name值。在提交表单时根据此标识提交。如用户名标识为name，则提交表单为{name:&#39;xx&#39;}。其中get[formName]ControlByName(name) 中的name即为此标识，可快速根据此标识查找到当前组件。若不需提交表单和查找等，可为空</p><p><strong>•帮助信息</strong></p><p>用于对当前字段加以说明提示的帮助信息，会在label后面显示一个小问号，鼠标滑过提示。</p><p><strong>•设为Input输入框的前/后缀</strong></p><p>此功能可将select输入框作为input组件的前后缀使用。步骤：</p><p>1.选择select组件 =&gt; 设为Input输入框前/后缀为true =&gt; 复制当前字段标识，如下图</p><p><img src="`+e+'" alt=""></p><p>2.选择文本输入框设置前后缀为<code>key:粘贴前面复制的字段标识</code>，如下图</p><p><img src="'+l+`" alt=""></p><p><strong>•联动条件</strong></p><p>编写联动条件表达式，可使用&amp;&amp;和||等运算符，当满足条件时可将该组件设置为显示/隐藏或者是启用/禁用。其中<code>$</code> 表示当前表单的值。例如表单中有name=sex的单选值及name=age的文本输入，即当sex选中了1和age输入框的值大于20时条件成立</p><pre class="language-text"><code class="hljs">$.sex===1&amp;&amp;$.age&gt;20</code></pre><h3 id="选项配置">选项配置</h3><p><strong>1.固定选项</strong></p><p>即可选择的值为固定值，由前端页面在设计时固定，不能修改。点击<code>新增</code>按钮，输入标签和值即可，可添加多个</p><p><strong>2.数据源</strong></p><p>当前组件选项通过指定的URL来获取。URL可以为完整的地址，也可以是api里设定的key</p><p><strong>指定label/value属性值</strong></p><p>选项数据需要的数据格式为label/value值形式，很多时候接口返回的数据并不是我们想要的，如:</p><pre class="language-javascript"><code class="hljs"><span class="hljs-comment">// 接口返回为name/id形式时，可设置label=&quot;name&quot;,value=&quot;id&quot;</span>
<span class="hljs-keyword">const</span> result =[{<span class="hljs-attr">name</span>:<span class="hljs-string">&#39;name&#39;</span>,<span class="hljs-attr">id</span>:<span class="hljs-string">&#39;1&#39;</span>}]
<span class="hljs-comment">// 转换后的数据</span>
<span class="hljs-keyword">const</span> format =[{<span class="hljs-attr">label</span>:<span class="hljs-string">&#39;name&#39;</span>,<span class="hljs-attr">value</span>:<span class="hljs-string">&#39;1&#39;</span>}]</code></pre><p>注意：设置了<code>afterResponse</code>时这三个参数无效</p><p><strong>尝试转换value数据类型</strong></p><p>当表单组件对应的值的数字时，这里回显则会异常，这时可以尝试将value转为string或number形式</p><p>可通过配置<code>beforeRequest</code>来添加指定请求参数配置，同时可使用<code>afterResponse</code>事件编辑方法对获取到的数据进行处理，最后再return回去。这两方法同表单配置的<code>beforeRequest</code> 和<code>afterResponse</code>。</p><pre class="language-javascript"><code class="hljs"><span class="hljs-comment">//　beforeRequest</span>
opt = <span class="hljs-function">(<span class="hljs-params">data, route, form</span>) =&gt;</span> {
  <span class="hljs-comment">// data表求的数据　route 页面路由信息　form当前表单值</span>
  <span class="hljs-keyword">return</span> data
}</code></pre><p>当选择为数据源时，数据源接口URL optionsFun可带一个动态参数，如/api?id=\${key}，key可以是当前表单任意name=key的组件，并且当该组件值发生改变时会重新请求；可实现联动功能，如：</p><pre class="language-javascript"><code class="hljs">[
  {
    <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;select&quot;</span>,
    <span class="hljs-attr">control</span>:
      {
        <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&quot;&quot;</span>,
        <span class="hljs-attr">appendToBody</span>: <span class="hljs-literal">true</span>
      },
    <span class="hljs-attr">options</span>: [],
    <span class="hljs-attr">config</span>:
      {
        <span class="hljs-attr">optionsType</span>: <span class="hljs-number">0</span>
      },
    <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;province&quot;</span>,
    <span class="hljs-attr">item</span>:
      {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;省份&quot;</span>
      }
  },
  {
    <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;select&quot;</span>,
    <span class="hljs-attr">control</span>:
      {
        <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&quot;&quot;</span>,
        <span class="hljs-attr">appendToBody</span>: <span class="hljs-literal">true</span>
      },
    <span class="hljs-attr">options</span>: [],
    <span class="hljs-attr">config</span>:
      {
        <span class="hljs-attr">optionsType</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">optionsFun</span>: <span class="hljs-string">&quot;/api/getCity?id=\${province}&quot;</span>, <span class="hljs-comment">// 当province组件改变时，重新请求。返回数据必须为[{label:&#39;x&#39;,value:&#39;xx&#39;}]格式，否则需进行转换</span>
        <span class="hljs-attr">method</span>: <span class="hljs-string">&quot;get&quot;</span>
      },
    <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;city&quot;</span>,
    <span class="hljs-attr">item</span>:
      {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;城市&quot;</span>
      }
  }]</code></pre><p>使用可见表单设计或列表设计页的权限角色<a href="/#/design/dataList/list">权限角色</a></p><p><strong>3.方法函数</strong></p><p>该方法适合于将当前表单<code>导出为vue文件</code>格式，通过在页面中编写代码将选项值传给当前组件。也可使用<a href="/#/docs/form">setOptions</a>方法设置。在导出时会自动生成示例代码，如：</p><pre class="language-javascript"><code class="hljs"><span class="hljs-title function_">provide</span>(<span class="hljs-string">&#39;methodsName&#39;</span>, {<span class="hljs-attr">label</span>: <span class="hljs-string">&#39;x&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;xx&#39;</span>})</code></pre><p><strong>4.接口字典</strong></p><p>当复杂表单中存在大量需要配置选项的组件时，每个组件都从指定URL获取，这是不太现实的，一大堆的请求会让你怀疑人生不说，还浪费服务器资源。对此可以设计表单时预设一些固定的选项值或者在接口里返回。可以<code>表单配置-设置字典数据</code>配置</p><h3 id="校验设置">校验设置</h3><p><strong>1.快速添加：</strong></p><p>1.可快速选择添加多个校验规则，输入对应提示语即可，非常简单方便。</p><p>2.自定义正则：则需要填写正则表达式</p><p>3.自定义方法：仅支持<code>导出vue文件</code>模式，如方法名称为myFn，在导出文件时则会生成示例代码，如:</p><pre class="language-javascript"><code class="hljs"><span class="hljs-title function_">provide</span>(<span class="hljs-string">&quot;myFn&quot;</span>, <span class="hljs-function">(<span class="hljs-params">rule, value, callback</span>) =&gt;</span> {
  <span class="hljs-keyword">if</span> (value === <span class="hljs-string">&#39;&#39;</span>) {
    <span class="hljs-title function_">callback</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Error</span>(<span class="hljs-string">&#39;Please input the password again&#39;</span>))
  } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (value !== <span class="hljs-string">&#39;abc&#39;</span>) {
    <span class="hljs-title function_">callback</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Error</span>(<span class="hljs-string">&quot;Two inputs don&#39;t match!&quot;</span>))
  } <span class="hljs-keyword">else</span> {
    <span class="hljs-title function_">callback</span>()
  }
})</code></pre><p>4.除系统内置的校验规则，还可通过可./design/form/components/validate.ts扩展，添加常用校验规则</p><p><strong>2.编写校验规则：</strong> 除了快速选择之外，还可以在弹出的窗口里通过编辑校验规则来实现，详情可参考UI组件的校验规则。可在弹出框输入代码，如：</p><pre class="language-javascript"><code class="hljs">opt = [
  {<span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;age is required&#39;</span>},
  {<span class="hljs-attr">type</span>: <span class="hljs-string">&#39;number&#39;</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;age must be a number&#39;</span>}
]</code></pre><p>*除input文本输入框外，其他可输入组件如select、checkbox只有必选项，输入对应提示语即可</p><h3 id="其他属性">其他属性</h3><p>字段属性里只是列了一些比较常用的prop，如还需要其他属性，可通过添加属性窗口来编写，每个组件都有不同的prop，可参考UI当前组件prop</p><h2 id="表单配置">表单配置</h2><p><strong>•表单名称</strong>：保存时的名称</p><p><strong>•数据源</strong>：</p><p>注意：此接口数据会缓存本地，防频繁请求加载</p><p>设计的表单提交数据保存时，默认根据选择的数据源保存在对应的mysql数据表中；可选择已有数据源，也可通过配置接口数据事件url，提交到指定的url；数据源创建可见 <a href="/#/docs/use-dataSource">使用手册－数据源</a></p><p><strong>•表单标识：</strong></p><p>当前表单唯一标识，get[formName]ControlByName和get[formName]ValueByName中的formName值，根据此标识查找。若都没使用以上方法则可留空</p><p><strong>•表单标签宽度：</strong></p><p>即FormItem的属性label-width</p><p><strong>•表单样式名称：</strong></p><p>为当前表单额外添加的css样式名，可用于个性化调整。对应样式可以是全局的，或者在编辑表单样式中输入</p><p><strong>•添加时获取请求：</strong></p><p>当表单添加新数据内容时可请求接口url，获取新增初始值以及所需字典数据等等</p><p><strong>•编辑表单样式：</strong></p><p>编写有样式时会在当前页面head中插入style脚本，作用范围为当前页面。类似于.vue文件中的style scoped中的样式。在弹出编辑框中可编写css样式</p><p><strong>•设置数据字典：</strong></p><p>当前表单的数据字典，可为单选多选和checkbox等提供初始选项。此类组件在选项配置时，只需设计 <code>动态选项－接口字典</code> 输入对应的key即可。字典配置格式如下：</p><pre class="language-json"><code class="hljs"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;sex&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;0&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;男&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;1&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;女&quot;</span>
  <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;status&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;1&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;启用&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;0&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;禁用&quot;</span>
  <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span></code></pre><h3 id="接口数据事件">接口数据事件</h3><p><strong>1.新增数据保存url：</strong></p><p>默认会根据所选数据源提交到对应的url，某些特殊情况或是作为<code>导出vue文件</code>单独使用时可设置，同props.addUrl。<strong>这里设置优先于数据源</strong>。</p><p><strong>2.修改数据保存url：</strong></p><p>同理于新增url，同props.editUrl</p><p><strong>3.获取表单数据url：</strong></p><p>同理于新增url，同props.requestUrl</p><p><strong>4.beforeRequest：</strong></p><p>在请求获取表单数据前事件，同props.beforeRequest，如：</p><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeRequest</span> = (<span class="hljs-params">params, route</span>) =&gt; {
  <span class="hljs-comment">// 此处可对请求参数params进行修改处理后返回，route为当前路由信息</span>
  <span class="hljs-comment">// 如当路由参数name为true时，添加id参数</span>
  <span class="hljs-keyword">if</span> (route.<span class="hljs-property">query</span>.<span class="hljs-property">name</span>) {
    params.<span class="hljs-property">id</span> = route.<span class="hljs-property">query</span>.<span class="hljs-property">name</span>
  }
  <span class="hljs-keyword">return</span> params　<span class="hljs-comment">//　return false时将发不请求</span>
}</code></pre><p><strong>5.afterResponse：</strong></p><p>同props.afterResponse，即<code>requestUrl</code>请求结果返回时。可对返回的数据进行处理，如</p><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> <span class="hljs-title function_">afterResponse</span> = (<span class="hljs-params">result</span>) =&gt; {
  <span class="hljs-comment">//　这里是处理逻辑</span>
  <span class="hljs-keyword">return</span> result <span class="hljs-comment">// return false时不处理请求结果</span>
}</code></pre><p>当处理逻辑比较复杂时，通过在线编辑器编辑<code>afterResponse</code>处理逻辑明显是不适合的，此时可设置为字符串格式，即设置一个key。则会自执行本地<code>/utils/formatResult</code>方法，如：</p><pre class="language-javascript"><code class="hljs"><span class="hljs-comment">// const afterResponse = &#39;formatTest&#39;</span>
<span class="hljs-keyword">const</span> <span class="hljs-title function_">formatResult</span> = (<span class="hljs-params">res: any, key: string</span>) =&gt; {
  <span class="hljs-comment">// key即为formatTest，可根据设置的key设置不同的处理方法</span>
  <span class="hljs-keyword">return</span> res
}</code></pre><p>使用实例可见用户管理部门侧栏等</p><p><strong>6.beforeSubmit：</strong></p><p>同props.beforeSubmit。表单提交前处理事件，方法跟beforeRequest一样</p><p><strong>7.afterSubmit：</strong></p><p>同props.afterSubmit。表单提交后返回处理事件，方法跟afterResponse一样</p><p><strong>8.表单组件改变事件change:</strong></p><p>同props.change，类似于其他事件也支持本地<code>/utils/formChangeValue</code>方法</p><pre class="language-javascript"><code class="hljs">opt=<span class="hljs-function">(<span class="hljs-params">key,model</span>) =&gt;</span> {
  <span class="hljs-comment">// name当前改变组件的值,model表单的值</span>
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;onChange&#39;</span>,key)
  <span class="hljs-keyword">return</span> model
}</code></pre><h3 id="全局方法">全局方法</h3><p><strong>get[formName]ControlByName</strong></p><p>　formName　为设计表单时表单配置-表单标识。注意：使用此方法必须设置表单标识</p><p>　根据name值获取formData中的数据项(name:string)</p><p><strong>get[formName]ValueByName</strong></p><p>根据name值获取当前表单对应的值</p><p>实例可参考<a href="/#/system/user">系统工具-用户管理密码校验</a></p>`,130),c=[r],m={__name:"use-form",setup(h){return(u,i)=>(s(),a("div",o,c))}};export{m as default};
