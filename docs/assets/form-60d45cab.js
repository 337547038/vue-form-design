/* empty css                                                            */import{o as s,c as a,ai as t}from"./index-b7d7e192.js";const n={class:"marked-body"},l=t(`<h1 id="akform-表单">AKForm 表单</h1><p>适用于导出vue文件</p><h2 id="使用方式">使用方式</h2><pre class="language-html"><code class="hljs">
<span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-form</span>&gt;</span></code></pre><h2 id="api">API</h2><h3 id="props">Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>formData</td><td>object</td><td>设计的生成表单数据</td></tr><tr><td>type</td><td>number/1</td><td>表单展示模式，1新增；2修改；3查看（表单模式） ；4查看； 5设计</td></tr><tr><td>disabled</td><td>boolean/false</td><td>表单禁用模式，类似于表单模式查看</td></tr><tr><td>requestUrl</td><td>string/boolean</td><td>表单编辑初始数据加载。适用于导出vue文件</td></tr><tr><td>beforeRequest</td><td>function (params,route)</td><td>请求编辑数据前参数处理方法，可对请求参数处理。适用于导出vue文件，<code>return false</code>时不请求</td></tr><tr><td>afterResponse</td><td>function/string</td><td>请求编辑数据完成后数据处理方法。适用于导出vue文件，<code>return false</code>阻止事件运行</td></tr><tr><td>addUrl</td><td>string</td><td>表单数据新增提交保存url</td></tr><tr><td>editUrl</td><td>string</td><td>表单数据修改保存提交url</td></tr><tr><td>beforeSubmit</td><td>function (params,route)/string</td><td>表单提交前数据处理。适用于导出vue文件，<code>return false</code>时不发送请求</td></tr><tr><td>afterSubmit</td><td>function(type,res)</td><td>表单提交后，默认提示提交结果，可return false阻止提示。res接口返回参数,type提交结果类型success/fail/validate。validate表单没通过校验时</td></tr><tr><td>value</td><td>object</td><td>表单初始值，同setValue</td></tr><tr><td>options</td><td>object</td><td>表单选项数据，同setOptions，不管选项配置如何配置，这里设置都会生效</td></tr><tr><td>dict</td><td>object</td><td>用于匹配的字典数据，一般不设置，从接口获取</td></tr></tbody></table><h3 id="events">Events</h3><table><thead><tr><th>事件名</th><th>说明</th></tr></thead><tbody><tr><td>btnClick</td><td>按钮组件点击事件</td></tr><tr><td>change</td><td>表单组件值发生变化事件(key,value,model,data,tProp)。key：组件的name值，value：组件当前的值，model:当前表单的值，tProp:表格内组件才会有值,data当前组件所在的list数据</td></tr></tbody></table><h3 id="methods">Methods</h3><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>validate</td><td>表单校验方法</td></tr><tr><td>getValue</td><td>用于获取表单的值</td></tr><tr><td>setValue</td><td>对表单设置初始值(model,filter:boolean) filter=true时将会过滤掉model中不属于当前表单的字段</td></tr><tr><td>setOptions</td><td>对表单选择项快速设置</td></tr><tr><td>resetFields</td><td>重置表单方法</td></tr><tr><td>getData</td><td>加载表单初始数据(params:any)</td></tr><tr><td>submit</td><td>表单提交</td></tr></tbody></table><p> 两个全局特殊方法</p><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>get[formName]ControlByName</td><td>用于根据name值获取formData中的数据项(name:string)</td></tr><tr><td>get[formName]ValueByName</td><td>用于根据name值获取formData中的数据项的值(name:string)</td></tr></tbody></table><h3 id="slot">Slot</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>-</td></tr></tbody></table><h3 id="formdata">formData</h3><p>代码编辑输入框可支持<code>json</code>或<code>javascript</code>，初始使用时可通过修改<code>/src/utils/form.ts</code>里的<code>EDITTYPE</code>的值</p><pre class="language-javascript"><code class="hljs">formData = {
  <span class="hljs-attr">list</span>: [
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;input1660637151831&quot;</span>, <span class="hljs-comment">// 表单元素唯一标识</span>
      <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;input&quot;</span>, <span class="hljs-comment">// 表单元素类型</span>
      <span class="hljs-attr">control</span>: <span class="hljs-comment">// 当前控件类型的所有\`props\`参数，详见\`element-plus\`对应的\`props\`参数</span>
        {
          <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&quot;&quot;</span>
        },
      <span class="hljs-attr">config</span>: <span class="hljs-comment">// 其他一些扩展配置信息</span>
        {
          <span class="hljs-attr">linkKey</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// 开启联动</span>
          <span class="hljs-attr">linkValue</span>: <span class="hljs-string">&quot;$.name===1&quot;</span>, <span class="hljs-comment">// 联动表达式，即当表单中字段标识为\`name\`的控件值为\`1\`时，当前控件才显示</span>
          <span class="hljs-attr">editDisabled</span>: <span class="hljs-literal">true</span> <span class="hljs-comment">// 编辑状态下禁用，即表单部分字段只能添加，不允许编辑时可使用此设置</span>
        },
      <span class="hljs-attr">customRules</span>: [], <span class="hljs-comment">// 使用快速方法添加的校验规则，会自动合并到\`item.rules\`</span>
      <span class="hljs-attr">item</span>:<span class="hljs-comment">// 组件el-form-item的参数配置</span>
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;单行文本&quot;</span>,
          <span class="hljs-attr">rules</span>: [] <span class="hljs-comment">// 校验规则</span>
        }
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;select1660637154631&quot;</span>,
      <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;select&quot;</span>,
      <span class="hljs-attr">control</span>:
        {
          <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&quot;&quot;</span>,
          <span class="hljs-attr">appendToBody</span>: <span class="hljs-literal">true</span>
        },
      <span class="hljs-attr">options</span>: [<span class="hljs-comment">// 单选多选下拉的\`option\`选项数据</span>
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;标签1&quot;</span>,
          <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;value1&quot;</span>
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;标签2&quot;</span>,
          <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;value2&quot;</span>
        }],
      <span class="hljs-attr">config</span>:
        {
          <span class="hljs-attr">optionsType</span>:<span class="hljs-number">0</span>, <span class="hljs-comment">// 0固定选项　1数据源　2字典</span>
          <span class="hljs-attr">optioinsFun</span>:<span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">//　接口url、方法名、字典key</span>
          <span class="hljs-attr">method</span>: <span class="hljs-string">&quot;get&quot;</span>, <span class="hljs-comment">// optionsType=1时的数据请求方式，默认post</span>
          <span class="hljs-attr">value</span>:<span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// 指定value的属性,仅optionsType＝1有效</span>
          <span class="hljs-attr">label</span>:<span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// 指定label的属性,仅optionsType＝1有效</span>
          <span class="hljs-attr">debug</span>:<span class="hljs-literal">true</span> <span class="hljs-comment">// optionsType＝1时会将请求结束保存在sessionStorage,减少不必要的请求，debug=true时不保存方便调试</span>
        },
      <span class="hljs-attr">item</span>:
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;下拉选择框&quot;</span>
        }
    }],
  <span class="hljs-attr">form</span>:<span class="hljs-comment">// 表单配置信息</span>
    {
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&quot;&quot;</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&quot;&quot;</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&quot;default&quot;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;form1660637148435&quot;</span>
    },
  <span class="hljs-attr">config</span>: {
    <span class="hljs-attr">addUrl</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// 表单提交保存接口url</span>
    <span class="hljs-attr">editUrl</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// 表单修改保存接口url</span>
    <span class="hljs-attr">requestUrl</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// 获取表单初始数据url</span>
    <span class="hljs-attr">style</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// 表单css样式，相当于scope</span>
    <span class="hljs-attr">hideField</span>: [], <span class="hljs-comment">// 使用v-if隐藏的字段，用于交互。仅在导出vue时可通过自定义方法修改，组件需设置name值</span>
    <span class="hljs-attr">addLoad</span>: <span class="hljs-literal">false</span> <span class="hljs-comment">// 新增表单时是否从接口加载默认数据</span>
  },
  <span class="hljs-attr">events</span>: { <span class="hljs-comment">// 同props事件</span>
    <span class="hljs-attr">beforeRequest</span>: <span class="hljs-function">(<span class="hljs-params">data, route</span>) =&gt;</span> {
      <span class="hljs-keyword">return</span> data
    },
    <span class="hljs-attr">afterResponse</span>: <span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {
      <span class="hljs-keyword">return</span> res
    },
    <span class="hljs-comment">// afterResponse:&#39;formatTest&#39;, // 也可以是字符串，将执行/utils/formatResutl里的方法，值为方法里的key</span>
    <span class="hljs-attr">beforeSubmit</span>: <span class="hljs-function">(<span class="hljs-params">data, route</span>) =&gt;</span> {
      <span class="hljs-keyword">return</span> data
    },
    <span class="hljs-attr">afterSubmit</span>: <span class="hljs-function">(<span class="hljs-params">type,res</span>) =&gt;</span> {
      <span class="hljs-comment">// type=success/fail</span>
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(res)
    },
    <span class="hljs-attr">change</span>: <span class="hljs-function">(<span class="hljs-params">name, model</span>) =&gt;</span> {
      <span class="hljs-comment">// name当前组件的name,model当前表单的值</span>
      <span class="hljs-keyword">return</span> model
    }
  }
}</code></pre>`,18),p=[l],h={__name:"form",setup(e){return(r,o)=>(s(),a("div",n,p))}};export{h as default};
