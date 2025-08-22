import{c as a,o as t,af as n}from"./index-DJZwJYaM.js";const l={class:"marked-body"},o={__name:"form",setup(p){return(r,s)=>(t(),a("div",l,s[0]||(s[0]=[n(`<h1 id="akform-表单">AKForm 表单</h1><p>适用于导出vue文件</p><h2 id="akform表单使用方式">AKForm表单使用方式</h2><pre class="language-html"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-form</span>&gt;</span></code></pre><h3 id="props">Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>data</td><td>object</td><td>设计的生成表单数据</td></tr><tr><td>operateType</td><td>string</td><td>表单展示模式，可选<code>add、edit、detail、design、search</code>，默认add</td></tr><tr><td>disabled</td><td>boolean/false</td><td>表单禁用模式，类似于表单模式查看</td></tr><tr><td>submitUrl</td><td>string</td><td>表单提交url</td></tr><tr><td>requestUrl</td><td>string</td><td>用于显示表单数据，请求url</td></tr><tr><td>before</td><td>string / ((params: any, type: string, obj: any) =&gt; any)</td><td>表单接口请求前事件,type当前操作事件类型，可选fetch/submit获取和提交数据</td></tr><tr><td>after</td><td>string / ((res: any, success: Boolean, type: string) =&gt; any)</td><td>表单接口请求事件，success=false即catch事件</td></tr><tr><td>query</td><td>object</td><td>一些附加的请求参数。也可在<code>before</code>处添加</td></tr><tr><td>params</td><td>object</td><td>提交表单一些附加参数，如在提交修改时可添加id等信息。而不需要在提交前拦截处理</td></tr></tbody></table><h3 id="events">Events</h3><table><thead><tr><th>事件名</th><th>说明</th></tr></thead><tbody><tr><td>btnClick</td><td>按钮组件点击事件</td></tr><tr><td>change</td><td>表单组件值发生变化事件{ name: string, value: any, model: any, prop: string, options: any }</td></tr></tbody></table><h3 id="methods">Methods</h3><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>validate</td><td>表单校验方法</td></tr><tr><td>getValue</td><td>用于获取表单的值</td></tr><tr><td>setValue</td><td>对表单设置初始值(model,filter:boolean) filter=true时将会过滤掉model中不属于当前表单的字段</td></tr><tr><td>setOptions</td><td>对表单选择项快速设置</td></tr><tr><td>resetFields</td><td>重置表单方法</td></tr><tr><td>getData</td><td>加载表单初始数据(params:any)</td></tr><tr><td>submit</td><td>表单提交</td></tr></tbody></table><p> 两个全局特殊方法</p><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>get[formName]ControlByName</td><td>用于根据name值获取formData中的数据项(name:string)</td></tr><tr><td>get[formName]ValueByName</td><td>用于根据name值获取formData中的数据项的值(name:string)</td></tr></tbody></table><h3 id="slot">Slot</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>-</td></tr></tbody></table><h3 id="data">data</h3><p>更多数据详细配置可查看<a href="/#/docs/form-option">配置手册</a></p><p>代码编辑输入框可支持<code>json</code>或<code>javascript</code>，初始使用时可通过修改<code>/src/utils/design.ts</code>里的<code>EDITTYPE</code>的值</p><pre class="language-javascript"><code class="hljs">formData = {
  <span class="hljs-attr">list</span>: [
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;input&quot;</span>,
      <span class="hljs-attr">control</span>:
        {
          <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&quot;&quot;</span>
        },
      <span class="hljs-attr">config</span>:
        {},
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;inputText&quot;</span>,
      <span class="hljs-attr">formItem</span>:
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;标题名称&quot;</span>
        },
      <span class="hljs-attr">customRules</span>: [
        {
          <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;required&quot;</span>,
          <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;必填项&quot;</span>,
          <span class="hljs-attr">trigger</span>: <span class="hljs-string">&quot;blur&quot;</span>
        }]
    },
    {
      <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;select&quot;</span>,
      <span class="hljs-attr">control</span>:
        {
          <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&quot;&quot;</span>,
          <span class="hljs-attr">teleported</span>: <span class="hljs-literal">true</span>
        },
      <span class="hljs-attr">options</span>: [],
      <span class="hljs-attr">config</span>:
        {
          <span class="hljs-attr">optionsType</span>: <span class="hljs-number">1</span>,
          <span class="hljs-attr">optionsFun</span>: <span class="hljs-string">&quot;demo/option&quot;</span>,
          <span class="hljs-attr">method</span>: <span class="hljs-string">&quot;get&quot;</span>,
          <span class="hljs-attr">cache</span>: <span class="hljs-literal">true</span>,
          <span class="hljs-attr">before</span>: <span class="hljs-function">(<span class="hljs-params">params, type, obj</span>) =&gt;</span>
          {
            <span class="hljs-comment">// params请求的参数，可根据type作判断，对params作修改后return回去</span>
            <span class="hljs-comment">// type可选&#39;linkage&#39; | &#39;remote&#39; | &#39;edit&#39; | &#39;default&#39;，触发事件类型不同都是获取数据，即fetch</span>
            <span class="hljs-comment">// 需要将params参数return</span>
            <span class="hljs-keyword">return</span> params;
          },
          <span class="hljs-attr">after</span>: <span class="hljs-function">(<span class="hljs-params">res, type, success</span>) =&gt;</span>
          {
            <span class="hljs-comment">// res接口返回结果，type当前事件类型，success是否成功；对结果修改后返回</span>
            <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(type, res);
            <span class="hljs-keyword">return</span> res;
          },
          <span class="hljs-attr">transformData</span>: <span class="hljs-string">&quot;string&quot;</span>,
          <span class="hljs-attr">linkage</span>: <span class="hljs-string">&quot;inputText&quot;</span>,
          <span class="hljs-attr">queryName</span>: <span class="hljs-string">&quot;name&quot;</span>
        },
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;checkbox&quot;</span>,
      <span class="hljs-attr">formItem</span>:
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;多选&quot;</span>
        }
    }],
  <span class="hljs-attr">form</span>:
    {
      <span class="hljs-attr">size</span>: <span class="hljs-string">&quot;default&quot;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;formName&quot;</span>,
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&quot;150px&quot;</span>,
      <span class="hljs-attr">showColon</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&quot;form-row-2&quot;</span>
    },
  <span class="hljs-attr">config</span>:
    {
      <span class="hljs-attr">submitCancel</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;保存的表单名称&quot;</span>,
      <span class="hljs-attr">sourceId</span>: <span class="hljs-number">20</span>,
      <span class="hljs-attr">transformData</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">submitUrl</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// 表单提交保存接口url</span>
      <span class="hljs-attr">requestUrl</span>: <span class="hljs-string">&quot;&quot;</span> <span class="hljs-comment">// 获取表单初始数据url</span>
    },
  <span class="hljs-attr">events</span>:
    {
      <span class="hljs-attr">before</span>: <span class="hljs-function">(<span class="hljs-params">params,type,obj</span>) =&gt;</span>
      {
        <span class="hljs-comment">// params请求的参数，可根据type作判断，对params作修改后return回去</span>
        <span class="hljs-comment">// 需要将params参数return</span>
        <span class="hljs-keyword">return</span> params;
      },
      <span class="hljs-attr">after</span>: <span class="hljs-function">(<span class="hljs-params">res, type, success</span>) =&gt;</span>
      {
        <span class="hljs-comment">// res接口返回结果，type当前事件类型，success是否成功；对结果修改后返回</span>
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(type, res);
        <span class="hljs-keyword">return</span> res;
      },
      <span class="hljs-attr">change</span>: <span class="hljs-function">(<span class="hljs-params">key, model</span>) =&gt;</span>
      {
        <span class="hljs-comment">// key当前改变组件的name值,model表单的值，可修改后返回新值</span>
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&quot;change&quot;</span>, key);
        <span class="hljs-keyword">return</span> model;
      }
    }
}</code></pre>`,18)])))}};export{o as default};
