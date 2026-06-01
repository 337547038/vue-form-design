import{B as e,G as t,St as n,U as r,b as i,f as a,h as o,i as s,it as c,mt as l,p as u,v as d,y as f}from"./runtime-core.esm-bundler-BgH13u1H.js";import{t as p}from"./component--LW9uapU.js";var m={__name:`form-option.md.Virtual1954f7e5`,setup(n){let r=l({list:[{type:`inputSlot`,control:{modelValue:``,teleported:!0,style:{width:`100px`}},options:[{label:`选项1`,value:`1`}],optionsType:0,name:`select1`,formItem:{label:`下拉选择框`}},{type:`input`,control:{modelValue:``},append:`key:select1`,name:`text`,formItem:{label:`单行文本`}}],config:{submitCancel:!1}});return(n,i)=>{let a=t(`ak-form`);return e(),u(a,{data:r.value},null,8,[`data`])}}},h={__name:`form-option.md.Virtualc64f9dc0`,setup(n){let a=l(`1`),d=[{label:`选项1`,value:1}];return(n,l)=>{let f=t(`el-option`),p=t(`el-select`),m=t(`el-form-item`);return e(),u(m,{label:`此时无法正常回显`},{default:c(()=>[i(p,{modelValue:a.value,"onUpdate:modelValue":l[0]||=e=>a.value=e},{default:c(()=>[(e(),o(s,null,r(d,e=>i(f,{value:e.value,label:e.label},null,8,[`value`,`label`])),64))]),_:1},8,[`modelValue`])]),_:1})}}},g={__name:`form-option.md.Virtual03b394f5`,setup(n){let r=l({list:[{type:`input`,control:{modelValue:``,placeholder:`值发生改变时，下拉选择框会重新发起请求`},name:`name1`,formItem:{label:`单行文本`}},{type:`select`,control:{modelValue:``,teleported:!0,remote:!1,filterable:!1},label:`name`,options:[],optionsType:1,optionsFun:`demo/select`,method:`get`,linkage:`name1`,before:(e,{type:t,route:n,model:r})=>(console.log(t),e),after:(e,t,n)=>(console.log(n,e),e),name:`select1`,formItem:{label:`下拉选择框`}}],config:{submitCancel:!1}});return(n,i)=>{let a=t(`ak-form`);return e(),u(a,{data:r.value},null,8,[`data`])}}},_={__name:`form-option.md.Virtualf3356f34`,setup(n){let r=l({list:[{type:`input`,control:{modelValue:``},name:`password`,formItem:{label:`密码`},customRules:[{type:`required`,message:`必填项`,trigger:`blur`}]},{type:`input`,control:{modelValue:``},name:`password2`,formItem:{label:`确认密码`,rules:[{validator:(e,t,n)=>{t===``?n(Error(`请输入确认密码`)):(getform1ValueByName(`password`)===t&&n(),n(Error(`两次密码输入不一致`)))},trigger:`blur`}]},customRules:[{type:`required`,message:`必填项`,trigger:`blur`}]}],config:{submitUrl:`demo/select`,key:`form1`,submitCancel:!0}});return(n,i)=>{let a=t(`ak-form`);return e(),u(a,{data:r.value},null,8,[`data`])}}},v={class:`marked-body`},y={__name:`form-option`,setup(t){return(t,r)=>(e(),o(`div`,v,[r[4]||=d(`<h1 id="ak-form 配置手册"><a name="ak-form-" class="anchor" href="#ak-form-"><span class="header-link"></span></a> ak-form 配置手册 </h1><p>配置数据由表单设计器通过拖拽添加相应组件及填写对应字段配置自动生成。脱离表单设计器时可按此数据格式要求，直接使用<code>ak-form</code> 表单，即<code>ak-form</code>表单组件可不依懒于表单设计器工作。</p><h2 id="一些表单配置说明"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> 一些表单配置说明 </h2><h3 id="- 快速添加确定取消按钮"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> - 快速添加确定取消按钮 </h3><p><code>config.submitCancel</code></p><ul><li>类型：boolean/string[]</li></ul><p>快速添加表单提交和取消按钮。设置为<code>true</code>可快速显示<code>确定</code>和<code>取消</code>两个按钮，如其他可自定义，格式为</p><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> submitCancel = [
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;确定&#39;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;submit&#39;</span>, <span class="hljs-comment">// 添加此属性相当于快速设置的确定，可选submit/reset/cancel</span>
    <span class="hljs-comment">// 其他属性详见el-button</span>
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;取消&#39;</span>
  }
]</code></pre><h3 id="- 将object转string提交"><a name="-object-string-" class="anchor" href="#-object-string-"><span class="header-link"></span></a> - 将object转string提交 </h3><p><code>config.transformData</code></p><ul><li>类型：boolean</li></ul><p>统一数据提交格式，开启后会尝试将<code>object</code>类型的数据使用<code>JSON.stringify</code>转换后提交保存。根据id查询详情时再尝试使用 <code>JSON.parse</code>恢复。 对于子表、flex布局以及checkbox这些数据都为object/array，转为字符串提交保存就很有必要的，要不后端接口就要处理</p><h3 id="- 编辑表单样式"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> - 编辑表单样式 </h3><p><code>config.style</code></p><p>编写有样式时会在当前页面head中插入style脚本，作用范围为当前页面。相当于.vue文件中的style scoped中的样式。</p><h3 id="- 新增修改数据保存url"><a name="-url" class="anchor" href="#-url"><span class="header-link"></span></a> - 新增修改数据保存url </h3><p><code>config.submit</code></p><p>点击表单提交按钮后数据保存的url接口地址，如当前表单设定了数据源，提交时则保存到对应的数据库表中，此时可不设置</p><h3 id="- 获取表单数据url"><a name="-url" class="anchor" href="#-url"><span class="header-link"></span></a> - 获取表单数据url </h3><p><code>config.requestUrl</code></p><p>编辑时获取表单初始值接口url，用法同submit</p><h3 id="- before事件"><a name="-before-" class="anchor" href="#-before-"><span class="header-link"></span></a> - before事件 </h3><p><code>config.before</code></p><ul><li>类型：before?: string | ((params: any, obj: any) =&gt; any)</li></ul><p>请求列表数据，编辑和删除等接口事件发送请求前执行事件，这里可对发送的数据进行拦截处理。</p><ul><li>params请求的参数，可对此参数进行修改，然后return回去</li><li>obj.type支持的类型，表单数据<code>fetch</code>|<code>submit</code>两种，用于表示接口事件类型。表单同时存在获取和请求时需要区分不同事件</li><li>obj.route当前页面路由信息</li><li>obj.model当前表单值</li><li>return false 可阻止事件</li></ul><p>同时支持string字符串类型，这个需要自定义开发，适用于处理一些比较复杂的逻辑处理时，根据设置的字符将处理逻辑写入本地文件。可查看 <code>/src/utils/beforeAfter.ts</code>根据提示完成</p><h3 id="- after事件"><a name="-after-" class="anchor" href="#-after-"><span class="header-link"></span></a> - after事件 </h3><p><code>config.after</code></p><ul><li>类型：after?: string | ((res: any, success: boolean, type?: string) =&gt; any)</li></ul><p>类似于前面的<code>before</code>。最后需要将处理后的结果 return res</p><h3 id="- change事件"><a name="-change-" class="anchor" href="#-change-"><span class="header-link"></span></a> - change事件 </h3><p><code>config.change</code></p><ul><li>类型：change?: string | ({ prop, value, parentProp, options, model }) =&gt; any)</li></ul><p>表单组件改变事件，可修改model后返回。即可实现当组件a改变时，修改b组件的值</p><ul><li>prop 当前组件的name值</li><li>model 当前表单的值</li><li>value 当前组件的值</li><li>parentProp 当前组件为table/flex时的name值</li><li>options 组件为radio/select/checkbox时的下拉选择数据</li></ul><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> opt = {
  <span class="hljs-attr">config</span>: {
    <span class="hljs-attr">change</span>: <span class="hljs-function">(<span class="hljs-params">{ prop, value, parentProp, options, model }</span>) =&gt;</span> {
      <span class="hljs-comment">// 当名为name1的组件值改变时，设置表单xxx的值</span>
      <span class="hljs-keyword">if</span> (prop === <span class="hljs-string">&#39;name1&#39;</span>) {
        model.<span class="hljs-property">xxxx</span> = <span class="hljs-string">&#39;xx&#39;</span>
      }
      <span class="hljs-keyword">return</span> model
    }
  }
}</code></pre><h3 id="- 表单字典"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> - 表单字典 </h3><p>提供给列表使用的字典，使用场景：表单中有一个<code>select</code>组件使用了固定或接口数据的<code>options</code>，通过表单添加数据时此时存在数据库的是<code>value</code>，不是<code>label</code>值时； 当<code>select</code>字段需要在列表中显示时，这里就直接显示了<code>value</code>值，通过使用<code>render=tag/text</code>的方法即可直接使用这里设置的字典值了</p><h2 id="一些字段配置说明"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> 一些字段配置说明 </h2><h3 id="- 设为Input输入框的前/后缀"><a name="-input-" class="anchor" href="#-input-"><span class="header-link"></span></a> - 设为Input输入框的前/后缀 </h3><p>设置为<code>true</code>即当前组件的<code>type=inputSlot</code>，将可在input组件的前后缀使用，使用方法同<code>select</code>。 使用时设置input的前缀或后缀为当前组件name值即可，格式为<code>key:name</code> 注意：此类型不能在table/flex中使用</p>`,42),i(n(p),{code:`%0A%3Ctemplate%3E%0A%20%20%3Cak-form%20%3Adata%3D%22formData%22%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7Bref%7D%20from%20%22vue%22%3B%0A%0A%20%20const%20formData%20%3D%20ref(%7B%0A%20%20%20%20list%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22inputSlot%22%2C%0A%20%20%20%20%20%20%20%20control%3A%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20modelValue%3A%20%22%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20teleported%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3A%20%7Bwidth%3A%20%22100px%22%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E9%80%89%E9%A1%B91%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20%221%22%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20optionsType%3A%200%2C%0A%20%20%20%20%20%20%20%20name%3A%20%22select1%22%2C%0A%20%20%20%20%20%20%20%20formItem%3A%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E4%B8%8B%E6%8B%89%E9%80%89%E6%8B%A9%E6%A1%86%22%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22input%22%2C%0A%20%20%20%20%20%20%20%20control%3A%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20modelValue%3A%20%22%22%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20append%3A%20%22key%3Aselect1%22%2C%20%2F%2F%20%E8%BF%99%E9%87%8C%E6%98%AF%E9%87%8D%E7%82%B9%EF%BC%9A%E5%B0%86name%3Dselect1%E7%9A%84%E7%BB%84%E4%BB%B6%E4%BD%9C%E4%B8%BA%E5%BD%93%E5%89%8D%E7%BB%84%E4%BB%B6%E7%9A%84%E5%90%8E%E7%BC%80%2C%0A%20%20%20%20%20%20%20%20name%3A%20%22text%22%2C%0A%20%20%20%20%20%20%20%20formItem%3A%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E5%8D%95%E8%A1%8C%E6%96%87%E6%9C%AC%22%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%5D%2C%0A%20%20%20%20config%3A%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20submitCancel%3A%20false%0A%20%20%20%20%20%20%7D%0A%20%20%7D)%3B%0A%3C%2Fscript%3E`},{code:c(()=>[...r[0]||=[a(`pre`,{class:`language-xml`},[a(`code`,{class:`hljs`},[f(`
`),a(`span`,{class:`hljs-tag`},[f(`<`),a(`span`,{class:`hljs-name`},`template`),f(`>`)]),f(`
  `),a(`span`,{class:`hljs-tag`},[f(`<`),a(`span`,{class:`hljs-name`},`ak-form`),f(),a(`span`,{class:`hljs-attr`},`:data`),f(`=`),a(`span`,{class:`hljs-string`},`"formData"`),f(`/>`)]),f(`
`),a(`span`,{class:`hljs-tag`},[f(`</`),a(`span`,{class:`hljs-name`},`template`),f(`>`)]),f(`
`),a(`span`,{class:`hljs-tag`},[f(`<`),a(`span`,{class:`hljs-name`},`script`),f(),a(`span`,{class:`hljs-attr`},`setup`),f(`>`)]),a(`span`,{class:`language-javascript`},[f(`
  `),a(`span`,{class:`hljs-keyword`},`import`),f(` {ref} `),a(`span`,{class:`hljs-keyword`},`from`),f(),a(`span`,{class:`hljs-string`},`"vue"`),f(`;

  `),a(`span`,{class:`hljs-keyword`},`const`),f(` formData = `),a(`span`,{class:`hljs-title function_`},`ref`),f(`({
    `),a(`span`,{class:`hljs-attr`},`list`),f(`: [
      {
        `),a(`span`,{class:`hljs-attr`},`type`),f(`: `),a(`span`,{class:`hljs-string`},`"inputSlot"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`control`),f(`:
          {
            `),a(`span`,{class:`hljs-attr`},`modelValue`),f(`: `),a(`span`,{class:`hljs-string`},`""`),f(`,
            `),a(`span`,{class:`hljs-attr`},`teleported`),f(`: `),a(`span`,{class:`hljs-literal`},`true`),f(`,
            `),a(`span`,{class:`hljs-attr`},`style`),f(`: {`),a(`span`,{class:`hljs-attr`},`width`),f(`: `),a(`span`,{class:`hljs-string`},`"100px"`),f(`}
          },
        `),a(`span`,{class:`hljs-attr`},`options`),f(`: [
          {
            `),a(`span`,{class:`hljs-attr`},`label`),f(`: `),a(`span`,{class:`hljs-string`},`"选项1"`),f(`,
            `),a(`span`,{class:`hljs-attr`},`value`),f(`: `),a(`span`,{class:`hljs-string`},`"1"`),f(`
          }
        ],
        `),a(`span`,{class:`hljs-attr`},`optionsType`),f(`: `),a(`span`,{class:`hljs-number`},`0`),f(`,
        `),a(`span`,{class:`hljs-attr`},`name`),f(`: `),a(`span`,{class:`hljs-string`},`"select1"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`formItem`),f(`:
          {
            `),a(`span`,{class:`hljs-attr`},`label`),f(`: `),a(`span`,{class:`hljs-string`},`"下拉选择框"`),f(`
          }
      },
      {
        `),a(`span`,{class:`hljs-attr`},`type`),f(`: `),a(`span`,{class:`hljs-string`},`"input"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`control`),f(`:
          {
            `),a(`span`,{class:`hljs-attr`},`modelValue`),f(`: `),a(`span`,{class:`hljs-string`},`""`),f(`
          },
        `),a(`span`,{class:`hljs-attr`},`append`),f(`: `),a(`span`,{class:`hljs-string`},`"key:select1"`),f(`, `),a(`span`,{class:`hljs-comment`},`// 这里是重点：将name=select1的组件作为当前组件的后缀,`),f(`
        `),a(`span`,{class:`hljs-attr`},`name`),f(`: `),a(`span`,{class:`hljs-string`},`"text"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`formItem`),f(`:
          {
            `),a(`span`,{class:`hljs-attr`},`label`),f(`: `),a(`span`,{class:`hljs-string`},`"单行文本"`),f(`
          }
      }],
    `),a(`span`,{class:`hljs-attr`},`config`),f(`:
      {
        `),a(`span`,{class:`hljs-attr`},`submitCancel`),f(`: `),a(`span`,{class:`hljs-literal`},`false`),f(`
      }
  });
`)]),a(`span`,{class:`hljs-tag`},[f(`</`),a(`span`,{class:`hljs-name`},`script`),f(`>`)])])],-1)]]),default:c(()=>[i(m)]),_:1}),r[5]||=d(`<h3 id="- 远程数据参数字段名"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> - 远程数据参数字段名 </h3><p><code>config.queryName</code></p><ul><li>类型：string default:&#39;name&#39;</li></ul><p>当开启了<code>Remote</code>远程数据时有效，作为参数请求接口，如<code>{name:&#39;xxx&#39;}</code></p><h3 id="- 指定label/value属性值"><a name="-label-value-" class="anchor" href="#-label-value-"><span class="header-link"></span></a> - 指定label/value属性值 </h3><p><code>config.label</code></p><ul><li>当config.optionsType===1时有效</li></ul><p>用于从接口数据中提取指定的字段作为下拉选项的label值，默认为<code>label</code>。如接口返回没有<code>label</code>和<code>value</code>字段，则需设置</p><pre class="language-javascript"><code class="hljs"><span class="hljs-comment">// 接口返回数据为name和id,则此时需要设置label=&#39;name&#39;,valule=&#39;id&#39;</span>
<span class="hljs-keyword">const</span> res = [
  {
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;选项1&#39;</span>,
    <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;1&#39;</span>
  },
  {
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;选项2&#39;</span>,
    <span class="hljs-attr">id</span>: <span class="hljs-string">&#39;2&#39;</span>
  }
]</code></pre><h3 id="- 缓存数据结果"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> - 缓存数据结果 </h3><p><code>config.cache</code></p><ul><li><p>类型：boolean</p></li><li><p>当config.optionsType===1时有效</p></li></ul><p>将接口返回的数据存在sessionStorage，减少重复请求</p><h3 id="- 尝试转换value值为"><a name="-value-" class="anchor" href="#-value-"><span class="header-link"></span></a> - 尝试转换value值为 </h3><p><code>config.transformData</code></p><ul><li>可选值 none、number、string</li></ul><p>对组件的数字值进行转换，Number型数字和String型数字互转。实际场景：</p>`,17),i(n(p),{code:`%0A%3Ctemplate%3E%0A%20%20%3Cel-form-item%20label%3D%22%E6%AD%A4%E6%97%B6%E6%97%A0%E6%B3%95%E6%AD%A3%E5%B8%B8%E5%9B%9E%E6%98%BE%22%3E%0A%20%20%20%20%3Cel-select%20v-model%3D%22value%22%3E%0A%20%20%20%20%20%20%3Cel-option%0A%20%20%20%20%20%20%20%20%3Avalue%3D%22item.value%22%0A%20%20%20%20%20%20%20%20%3Alabel%3D%22item.label%22%0A%20%20%20%20%20%20%20%20v-for%3D%22item%20in%20options%22%3E%0A%20%20%20%20%20%20%3C%2Fel-option%3E%0A%20%20%20%20%3C%2Fel-select%3E%0A%20%20%3C%2Fel-form-item%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7Bref%7D%20from%20'vue'%0A%0A%20%20const%20value%20%3D%20ref('1')%0A%20%20const%20options%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20label%3A%20'%E9%80%89%E9%A1%B91'%2C%0A%20%20%20%20%20%20value%3A%201%0A%20%20%20%20%7D%0A%20%20%5D%0A%3C%2Fscript%3E`},{code:c(()=>[...r[1]||=[a(`pre`,{class:`language-xml`},[a(`code`,{class:`hljs`},[f(`
`),a(`span`,{class:`hljs-tag`},[f(`<`),a(`span`,{class:`hljs-name`},`template`),f(`>`)]),f(`
  `),a(`span`,{class:`hljs-tag`},[f(`<`),a(`span`,{class:`hljs-name`},`el-form-item`),f(),a(`span`,{class:`hljs-attr`},`label`),f(`=`),a(`span`,{class:`hljs-string`},`"此时无法正常回显"`),f(`>`)]),f(`
    `),a(`span`,{class:`hljs-tag`},[f(`<`),a(`span`,{class:`hljs-name`},`el-select`),f(),a(`span`,{class:`hljs-attr`},`v-model`),f(`=`),a(`span`,{class:`hljs-string`},`"value"`),f(`>`)]),f(`
      `),a(`span`,{class:`hljs-tag`},[f(`<`),a(`span`,{class:`hljs-name`},`el-option`),f(`
        `),a(`span`,{class:`hljs-attr`},`:value`),f(`=`),a(`span`,{class:`hljs-string`},`"item.value"`),f(`
        `),a(`span`,{class:`hljs-attr`},`:label`),f(`=`),a(`span`,{class:`hljs-string`},`"item.label"`),f(`
        `),a(`span`,{class:`hljs-attr`},`v-for`),f(`=`),a(`span`,{class:`hljs-string`},`"item in options"`),f(`>`)]),f(`
      `),a(`span`,{class:`hljs-tag`},[f(`</`),a(`span`,{class:`hljs-name`},`el-option`),f(`>`)]),f(`
    `),a(`span`,{class:`hljs-tag`},[f(`</`),a(`span`,{class:`hljs-name`},`el-select`),f(`>`)]),f(`
  `),a(`span`,{class:`hljs-tag`},[f(`</`),a(`span`,{class:`hljs-name`},`el-form-item`),f(`>`)]),f(`
`),a(`span`,{class:`hljs-tag`},[f(`</`),a(`span`,{class:`hljs-name`},`template`),f(`>`)]),f(`
`),a(`span`,{class:`hljs-tag`},[f(`<`),a(`span`,{class:`hljs-name`},`script`),f(),a(`span`,{class:`hljs-attr`},`setup`),f(`>`)]),a(`span`,{class:`language-javascript`},[f(`
  `),a(`span`,{class:`hljs-keyword`},`import`),f(` {ref} `),a(`span`,{class:`hljs-keyword`},`from`),f(),a(`span`,{class:`hljs-string`},`'vue'`),f(`

  `),a(`span`,{class:`hljs-keyword`},`const`),f(` value = `),a(`span`,{class:`hljs-title function_`},`ref`),f(`(`),a(`span`,{class:`hljs-string`},`'1'`),f(`)
  `),a(`span`,{class:`hljs-keyword`},`const`),f(` options = [
    {
      `),a(`span`,{class:`hljs-attr`},`label`),f(`: `),a(`span`,{class:`hljs-string`},`'选项1'`),f(`,
      `),a(`span`,{class:`hljs-attr`},`value`),f(`: `),a(`span`,{class:`hljs-number`},`1`),f(`
    }
  ]
`)]),a(`span`,{class:`hljs-tag`},[f(`</`),a(`span`,{class:`hljs-name`},`script`),f(`>`)])])],-1)]]),default:c(()=>[i(h)]),_:1}),r[6]||=a(`h3`,{id:`- 联动关联`},[a(`a`,{name:`-`,class:`anchor`,href:`#-`},[a(`span`,{class:`header-link`})]),f(` - 联动关联 `)],-1),r[7]||=a(`p`,null,[a(`code`,null,`config.linkage`)],-1),r[8]||=a(`ul`,null,[a(`li`,null,`类型：string`)],-1),r[9]||=a(`p`,null,`实现如省市联动的效果，当关联的name发生改变时，组件会重新发起请求查询options数据，并且会将关联的值作为参数发起请求。 因当前测试接口不支持查询，返回结果为固定的。可查看示例控制面板输出`,-1),i(n(p),{code:`%0A%3Ctemplate%3E%0A%20%20%3Cak-form%20%3Adata%3D%22formData%22%3E%3C%2Fak-form%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7Bref%7D%20from%20'vue'%0A%0A%20%20const%20formData%20%3D%20ref(%7B%0A%20%20%20%20list%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22input%22%2C%0A%20%20%20%20%20%20%20%20control%3A%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20modelValue%3A%20%22%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20placeholder%3A%20'%E5%80%BC%E5%8F%91%E7%94%9F%E6%94%B9%E5%8F%98%E6%97%B6%EF%BC%8C%E4%B8%8B%E6%8B%89%E9%80%89%E6%8B%A9%E6%A1%86%E4%BC%9A%E9%87%8D%E6%96%B0%E5%8F%91%E8%B5%B7%E8%AF%B7%E6%B1%82'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20name%3A%20%22name1%22%2C%0A%20%20%20%20%20%20%20%20formItem%3A%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E5%8D%95%E8%A1%8C%E6%96%87%E6%9C%AC%22%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22select%22%2C%0A%20%20%20%20%20%20%20%20control%3A%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20modelValue%3A%20%22%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20teleported%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20remote%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20filterable%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20label%3A'name'%2C%0A%20%20%20%20%20%20%20%20options%3A%20%5B%5D%2C%0A%20%20%20%20%20%20%20%20optionsType%3A%201%2C%0A%20%20%20%20%20%20%20%20optionsFun%3A%20%22demo%2Fselect%22%2C%0A%20%20%20%20%20%20%20%20method%3A%20%22get%22%2C%0A%20%20%20%20%20%20%20%20linkage%3A%20%22name1%22%2C%20%2F%2F%20%E5%85%B3%E8%81%94%E5%89%8D%E9%9D%A2%E7%9A%84%E5%8D%95%E8%A1%8C%E6%96%87%E6%9C%ACname%3Dinput1%E7%9A%84%E7%BB%84%E4%BB%B6%0A%20%20%20%20%20%20%20%20before%3A%20(params%2C%20%7Btype%2C%20route%2C%20model%7D)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E5%BD%93%E7%94%B1name1%E5%8F%91%E7%94%9F%E6%94%B9%E5%8F%98%E8%A7%A6%E5%8F%91%E7%9A%84%E8%AF%B7%E6%B1%82%E6%97%B6%EF%BC%8C%E6%AD%A4%E6%97%B6type%3Dlinkage%0A%20%20%20%20%20%20%20%20%20%20console.log(type)%0A%20%20%20%20%20%20%20%20%20%20return%20params%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20after%3A%20(res%2C%20success%2C%20type)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20res%E6%8E%A5%E5%8F%A3%E8%BF%94%E5%9B%9E%E7%BB%93%E6%9E%9C%EF%BC%8Ctype%E5%BD%93%E5%89%8D%E4%BA%8B%E4%BB%B6%E7%B1%BB%E5%9E%8B%EF%BC%8Csuccess%E6%98%AF%E5%90%A6%E6%88%90%E5%8A%9F%EF%BC%9B%E5%AF%B9%E7%BB%93%E6%9E%9C%E4%BF%AE%E6%94%B9%E5%90%8E%E8%BF%94%E5%9B%9E%0A%20%20%20%20%20%20%20%20%20%20console.log(type%2C%20res)%0A%20%20%20%20%20%20%20%20%20%20return%20res%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20name%3A%20%22select1%22%2C%0A%20%20%20%20%20%20%20%20formItem%3A%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E4%B8%8B%E6%8B%89%E9%80%89%E6%8B%A9%E6%A1%86%22%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%5D%2C%0A%20%20%20%20config%3A%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20submitCancel%3A%20false%0A%20%20%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E`},{code:c(()=>[...r[2]||=[a(`pre`,{class:`language-xml`},[a(`code`,{class:`hljs`},[f(`
`),a(`span`,{class:`hljs-tag`},[f(`<`),a(`span`,{class:`hljs-name`},`template`),f(`>`)]),f(`
  `),a(`span`,{class:`hljs-tag`},[f(`<`),a(`span`,{class:`hljs-name`},`ak-form`),f(),a(`span`,{class:`hljs-attr`},`:data`),f(`=`),a(`span`,{class:`hljs-string`},`"formData"`),f(`>`)]),a(`span`,{class:`hljs-tag`},[f(`</`),a(`span`,{class:`hljs-name`},`ak-form`),f(`>`)]),f(`
`),a(`span`,{class:`hljs-tag`},[f(`</`),a(`span`,{class:`hljs-name`},`template`),f(`>`)]),f(`
`),a(`span`,{class:`hljs-tag`},[f(`<`),a(`span`,{class:`hljs-name`},`script`),f(),a(`span`,{class:`hljs-attr`},`setup`),f(`>`)]),a(`span`,{class:`language-javascript`},[f(`
  `),a(`span`,{class:`hljs-keyword`},`import`),f(` {ref} `),a(`span`,{class:`hljs-keyword`},`from`),f(),a(`span`,{class:`hljs-string`},`'vue'`),f(`

  `),a(`span`,{class:`hljs-keyword`},`const`),f(` formData = `),a(`span`,{class:`hljs-title function_`},`ref`),f(`({
    `),a(`span`,{class:`hljs-attr`},`list`),f(`: [
      {
        `),a(`span`,{class:`hljs-attr`},`type`),f(`: `),a(`span`,{class:`hljs-string`},`"input"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`control`),f(`:
          {
            `),a(`span`,{class:`hljs-attr`},`modelValue`),f(`: `),a(`span`,{class:`hljs-string`},`""`),f(`,
            `),a(`span`,{class:`hljs-attr`},`placeholder`),f(`: `),a(`span`,{class:`hljs-string`},`'值发生改变时，下拉选择框会重新发起请求'`),f(`
          },
        `),a(`span`,{class:`hljs-attr`},`name`),f(`: `),a(`span`,{class:`hljs-string`},`"name1"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`formItem`),f(`:
          {
            `),a(`span`,{class:`hljs-attr`},`label`),f(`: `),a(`span`,{class:`hljs-string`},`"单行文本"`),f(`
          }
      },
      {
        `),a(`span`,{class:`hljs-attr`},`type`),f(`: `),a(`span`,{class:`hljs-string`},`"select"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`control`),f(`:
          {
            `),a(`span`,{class:`hljs-attr`},`modelValue`),f(`: `),a(`span`,{class:`hljs-string`},`""`),f(`,
            `),a(`span`,{class:`hljs-attr`},`teleported`),f(`: `),a(`span`,{class:`hljs-literal`},`true`),f(`,
            `),a(`span`,{class:`hljs-attr`},`remote`),f(`: `),a(`span`,{class:`hljs-literal`},`false`),f(`,
            `),a(`span`,{class:`hljs-attr`},`filterable`),f(`: `),a(`span`,{class:`hljs-literal`},`false`),f(`,
          },
        `),a(`span`,{class:`hljs-attr`},`label`),f(`:`),a(`span`,{class:`hljs-string`},`'name'`),f(`,
        `),a(`span`,{class:`hljs-attr`},`options`),f(`: [],
        `),a(`span`,{class:`hljs-attr`},`optionsType`),f(`: `),a(`span`,{class:`hljs-number`},`1`),f(`,
        `),a(`span`,{class:`hljs-attr`},`optionsFun`),f(`: `),a(`span`,{class:`hljs-string`},`"demo/select"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`method`),f(`: `),a(`span`,{class:`hljs-string`},`"get"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`linkage`),f(`: `),a(`span`,{class:`hljs-string`},`"name1"`),f(`, `),a(`span`,{class:`hljs-comment`},`// 关联前面的单行文本name=input1的组件`),f(`
        `),a(`span`,{class:`hljs-attr`},`before`),f(`: `),a(`span`,{class:`hljs-function`},[f(`(`),a(`span`,{class:`hljs-params`},`params, {type, route, model}`),f(`) =>`)]),f(` {
          `),a(`span`,{class:`hljs-comment`},`// 当由name1发生改变触发的请求时，此时type=linkage`),f(`
          `),a(`span`,{class:`hljs-variable language_`},`console`),f(`.`),a(`span`,{class:`hljs-title function_`},`log`),f(`(type)
          `),a(`span`,{class:`hljs-keyword`},`return`),f(` params
        },
        `),a(`span`,{class:`hljs-attr`},`after`),f(`: `),a(`span`,{class:`hljs-function`},[f(`(`),a(`span`,{class:`hljs-params`},`res, success, type`),f(`) =>`)]),f(` {
          `),a(`span`,{class:`hljs-comment`},`// res接口返回结果，type当前事件类型，success是否成功；对结果修改后返回`),f(`
          `),a(`span`,{class:`hljs-variable language_`},`console`),f(`.`),a(`span`,{class:`hljs-title function_`},`log`),f(`(type, res)
          `),a(`span`,{class:`hljs-keyword`},`return`),f(` res
        },
        `),a(`span`,{class:`hljs-attr`},`name`),f(`: `),a(`span`,{class:`hljs-string`},`"select1"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`formItem`),f(`:
          {
            `),a(`span`,{class:`hljs-attr`},`label`),f(`: `),a(`span`,{class:`hljs-string`},`"下拉选择框"`),f(`
          }
      }],
    `),a(`span`,{class:`hljs-attr`},`config`),f(`:
      {
        `),a(`span`,{class:`hljs-attr`},`submitCancel`),f(`: `),a(`span`,{class:`hljs-literal`},`false`),f(`
      }
  })
`)]),a(`span`,{class:`hljs-tag`},[f(`</`),a(`span`,{class:`hljs-name`},`script`),f(`>`)])])],-1)]]),default:c(()=>[i(g)]),_:1}),r[10]||=d(`<h3 id="- 保存为列表字典"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> - 保存为列表字典 </h3><p>将当前组件的options选项作为字典保存供列表使用，即<code>表单配置里-&gt;表单字典</code></p><h3 id="- 校验设置"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> - 校验设置 </h3><ul><li>对于input输入框，我们提供了丰富的校验规则，你只需选择校验的正确类型和输入提示语即可。如还不满足使用，可通过<code>编写校验规则</code> 弹窗编写规则，如</li></ul>`,4),i(n(p),{code:`%0A%3Ctemplate%3E%0A%20%20%3Cak-form%20%3Adata%3D%22formData%22%3E%3C%2Fak-form%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7Bref%7D%20from%20'vue'%0A%0A%20%20const%20formData%20%3D%20ref(%7B%0A%20%20%20%20list%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22input%22%2C%0A%20%20%20%20%20%20%20%20control%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20modelValue%3A%20%22%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20name%3A%20%22password%22%2C%0A%20%20%20%20%20%20%20%20formItem%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E5%AF%86%E7%A0%81%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20customRules%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22required%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20message%3A%20%22%E5%BF%85%E5%A1%AB%E9%A1%B9%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20trigger%3A%20%22blur%22%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22input%22%2C%0A%20%20%20%20%20%20%20%20control%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20modelValue%3A%20%22%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20name%3A%20%22password2%22%2C%0A%20%20%20%20%20%20%20%20formItem%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E7%A1%AE%E8%AE%A4%E5%AF%86%E7%A0%81%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20rules%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20validator%3A%20(rule%2C%20value%2C%20callback)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(value%20%3D%3D%3D%20'')%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20callback(new%20Error('%E8%AF%B7%E8%BE%93%E5%85%A5%E7%A1%AE%E8%AE%A4%E5%AF%86%E7%A0%81'))%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E5%81%87%E5%A6%82%E5%BD%93%E5%89%8D%E8%A1%A8%E5%8D%95%E5%90%8D%E4%B8%BAform1%E3%80%82%E8%8E%B7%E5%8F%96%E7%BB%84%E4%BB%B6password%E7%9A%84%E5%80%BC%E5%92%8C%E5%BD%93%E5%89%8D%E5%80%BC%E5%AF%B9%E6%AF%94%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20password%20%3D%20getform1ValueByName('password')%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(password%20%3D%3D%3D%20value)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20callback()%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20callback(new%20Error('%E4%B8%A4%E6%AC%A1%E5%AF%86%E7%A0%81%E8%BE%93%E5%85%A5%E4%B8%8D%E4%B8%80%E8%87%B4'))%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20trigger%3A%20%22blur%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20customRules%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22required%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20message%3A%20%22%E5%BF%85%E5%A1%AB%E9%A1%B9%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20trigger%3A%20%22blur%22%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%20%20%7D%5D%2C%0A%20%20%20%20config%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20submitUrl%3A'demo%2Fselect'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20%22form1%22%2C%20%2F%2F%E8%BF%99%E9%87%8C%E7%9A%84key%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20submitCancel%3A%20true%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E`},{code:c(()=>[...r[3]||=[a(`pre`,{class:`language-xml`},[a(`code`,{class:`hljs`},[f(`
`),a(`span`,{class:`hljs-tag`},[f(`<`),a(`span`,{class:`hljs-name`},`template`),f(`>`)]),f(`
  `),a(`span`,{class:`hljs-tag`},[f(`<`),a(`span`,{class:`hljs-name`},`ak-form`),f(),a(`span`,{class:`hljs-attr`},`:data`),f(`=`),a(`span`,{class:`hljs-string`},`"formData"`),f(`>`)]),a(`span`,{class:`hljs-tag`},[f(`</`),a(`span`,{class:`hljs-name`},`ak-form`),f(`>`)]),f(`
`),a(`span`,{class:`hljs-tag`},[f(`</`),a(`span`,{class:`hljs-name`},`template`),f(`>`)]),f(`
`),a(`span`,{class:`hljs-tag`},[f(`<`),a(`span`,{class:`hljs-name`},`script`),f(),a(`span`,{class:`hljs-attr`},`setup`),f(`>`)]),a(`span`,{class:`language-javascript`},[f(`
  `),a(`span`,{class:`hljs-keyword`},`import`),f(` {ref} `),a(`span`,{class:`hljs-keyword`},`from`),f(),a(`span`,{class:`hljs-string`},`'vue'`),f(`

  `),a(`span`,{class:`hljs-keyword`},`const`),f(` formData = `),a(`span`,{class:`hljs-title function_`},`ref`),f(`({
    `),a(`span`,{class:`hljs-attr`},`list`),f(`: [
      {
        `),a(`span`,{class:`hljs-attr`},`type`),f(`: `),a(`span`,{class:`hljs-string`},`"input"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`control`),f(`:
                {
                  `),a(`span`,{class:`hljs-attr`},`modelValue`),f(`: `),a(`span`,{class:`hljs-string`},`""`),f(`
                },
        `),a(`span`,{class:`hljs-attr`},`name`),f(`: `),a(`span`,{class:`hljs-string`},`"password"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`formItem`),f(`:
                {
                  `),a(`span`,{class:`hljs-attr`},`label`),f(`: `),a(`span`,{class:`hljs-string`},`"密码"`),f(`
                },
        `),a(`span`,{class:`hljs-attr`},`customRules`),f(`: [
          {
            `),a(`span`,{class:`hljs-attr`},`type`),f(`: `),a(`span`,{class:`hljs-string`},`"required"`),f(`,
            `),a(`span`,{class:`hljs-attr`},`message`),f(`: `),a(`span`,{class:`hljs-string`},`"必填项"`),f(`,
            `),a(`span`,{class:`hljs-attr`},`trigger`),f(`: `),a(`span`,{class:`hljs-string`},`"blur"`),f(`
          }]
      },
      {
        `),a(`span`,{class:`hljs-attr`},`type`),f(`: `),a(`span`,{class:`hljs-string`},`"input"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`control`),f(`:
                {
                  `),a(`span`,{class:`hljs-attr`},`modelValue`),f(`: `),a(`span`,{class:`hljs-string`},`""`),f(`
                },
        `),a(`span`,{class:`hljs-attr`},`name`),f(`: `),a(`span`,{class:`hljs-string`},`"password2"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`formItem`),f(`:
                {
                  `),a(`span`,{class:`hljs-attr`},`label`),f(`: `),a(`span`,{class:`hljs-string`},`"确认密码"`),f(`,
                  `),a(`span`,{class:`hljs-attr`},`rules`),f(`: [
                    {
                      `),a(`span`,{class:`hljs-attr`},`validator`),f(`: `),a(`span`,{class:`hljs-function`},[f(`(`),a(`span`,{class:`hljs-params`},`rule, value, callback`),f(`) =>`)]),f(` {
                        `),a(`span`,{class:`hljs-keyword`},`if`),f(` (value === `),a(`span`,{class:`hljs-string`},`''`),f(`) {
                          `),a(`span`,{class:`hljs-title function_`},`callback`),f(`(`),a(`span`,{class:`hljs-keyword`},`new`),f(),a(`span`,{class:`hljs-title class_`},`Error`),f(`(`),a(`span`,{class:`hljs-string`},`'请输入确认密码'`),f(`))
                        } `),a(`span`,{class:`hljs-keyword`},`else`),f(` {
                          `),a(`span`,{class:`hljs-comment`},`// 假如当前表单名为form1。获取组件password的值和当前值对比`),f(`
                          `),a(`span`,{class:`hljs-keyword`},`const`),f(` password = `),a(`span`,{class:`hljs-title function_`},`getform1ValueByName`),f(`(`),a(`span`,{class:`hljs-string`},`'password'`),f(`)
                          `),a(`span`,{class:`hljs-keyword`},`if`),f(` (password === value) {
                            `),a(`span`,{class:`hljs-title function_`},`callback`),f(`()
                          }
                          `),a(`span`,{class:`hljs-title function_`},`callback`),f(`(`),a(`span`,{class:`hljs-keyword`},`new`),f(),a(`span`,{class:`hljs-title class_`},`Error`),f(`(`),a(`span`,{class:`hljs-string`},`'两次密码输入不一致'`),f(`))
                        }
                      },
                      `),a(`span`,{class:`hljs-attr`},`trigger`),f(`: `),a(`span`,{class:`hljs-string`},`"blur"`),f(`
                    }]
                },
        `),a(`span`,{class:`hljs-attr`},`customRules`),f(`: [
          {
            `),a(`span`,{class:`hljs-attr`},`type`),f(`: `),a(`span`,{class:`hljs-string`},`"required"`),f(`,
            `),a(`span`,{class:`hljs-attr`},`message`),f(`: `),a(`span`,{class:`hljs-string`},`"必填项"`),f(`,
            `),a(`span`,{class:`hljs-attr`},`trigger`),f(`: `),a(`span`,{class:`hljs-string`},`"blur"`),f(`
          }]
      }],
    `),a(`span`,{class:`hljs-attr`},`config`),f(`:
            {
              `),a(`span`,{class:`hljs-attr`},`submitUrl`),f(`:`),a(`span`,{class:`hljs-string`},`'demo/select'`),f(`,
              `),a(`span`,{class:`hljs-attr`},`key`),f(`: `),a(`span`,{class:`hljs-string`},`"form1"`),f(`, `),a(`span`,{class:`hljs-comment`},`//这里的key`),f(`
              `),a(`span`,{class:`hljs-attr`},`submitCancel`),f(`: `),a(`span`,{class:`hljs-literal`},`true`),f(`
            }
  })
`)]),a(`span`,{class:`hljs-tag`},[f(`</`),a(`span`,{class:`hljs-name`},`script`),f(`>`)])])],-1)]]),default:c(()=>[i(_)]),_:1}),r[11]||=d(`<ul><li><p>除系统内置的校验规则，还可通过可<code>@/components/form/validate.ts</code>扩展，添加常用校验规则</p></li><li><p>对于选择类的如select、checkbox类的可以校验是否为空</p></li></ul><h3 id="- 表单方法"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> - 表单方法 </h3><h4 id="- get[formName]ControlByName"><a name="-get-formname-controlbyname" class="anchor" href="#-get-formname-controlbyname"><span class="header-link"></span></a> - get[formName]ControlByName </h4><ul><li>类型：function(name)</li></ul><p>表单页全局方法，用于根据组件<code>config.key</code>值获取当前的数据项。</p><p>使用方法见上面<code>校验设置</code>示例里的确认密码，当确认密码改变时，先通过此方法获取密码输入框的值，再和当前输入的比较是否一致</p><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> control = <span class="hljs-title function_">getformNameControlByName</span>(<span class="hljs-string">&#39;key&#39;</span>)
<span class="hljs-comment">//　注意：通过\`导出vue文件\`方法使用时，直接使用可能会报错，可添加window,如</span>
<span class="hljs-keyword">const</span> control = <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">getformNameControlByName</span>(<span class="hljs-string">&#39;key&#39;</span>)</code></pre><h4 id="- get[formName]ValueByName"><a name="-get-formname-valuebyname" class="anchor" href="#-get-formname-valuebyname"><span class="header-link"></span></a> - get[formName]ValueByName </h4><ul><li>类型：function(name)</li></ul><p>同get[formName]ControlByName。返回值不一样</p>`,10)]))}};export{y as default};