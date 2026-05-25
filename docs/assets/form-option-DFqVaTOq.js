import{U as e,_ as t,bt as n,d as r,f as i,ft as a,m as o,nt as s,v as c,y as l,z as u}from"./runtime-core.esm-bundler-DxlV0Puh.js";import{t as d}from"./component-CNiqdUll.js";var f={__name:`form-option.md.Virtualb90a1da5`,setup(t){let n=a({list:[{type:`inputSlot`,control:{modelValue:``,teleported:!0,style:{width:`100px`}},options:[{label:`选项1`,value:`1`}],config:{optionsType:0,optionsFun:``},name:`select1`,formItem:{label:`下拉选择框`}},{type:`input`,control:{modelValue:``},config:{prepend:``,append:`key:select1`},name:`input1724465076902`,formItem:{label:`单行文本`}}],form:{size:`default`},config:{submitCancel:!1}});return(t,r)=>{let a=e(`ak-form`);return u(),i(a,{data:n.value},null,8,[`data`])}}},p={__name:`form-option.md.Virtual57374397`,setup(t){let n=a({list:[{type:`input`,control:{modelValue:``,placeholder:`值发生改变时，下拉选择框会重新发起请求`},config:{},name:`name1`,formItem:{label:`单行文本`}},{type:`select`,control:{modelValue:``,teleported:!0,remote:!1,filterable:!1},options:[],config:{optionsType:1,optionsFun:`demo/options`,method:`get`,linkage:`name1`,before:(e,{type:t,route:n,model:r})=>(console.log(t),e),after:(e,t,n)=>(console.log(n,e),e)},name:`select1`,formItem:{label:`下拉选择框`}}],form:{size:`default`},config:{submitCancel:!1}});return(t,r)=>{let a=e(`ak-form`);return u(),i(a,{data:n.value},null,8,[`data`])}}},m={__name:`form-option.md.Virtuale3af3e96`,setup(t){let n=a({list:[{type:`input`,control:{modelValue:``},config:{},name:`password`,formItem:{label:`密码`},customRules:[{type:`required`,message:`必填项`,trigger:`blur`}]},{type:`input`,control:{modelValue:``},config:{},name:`password2`,formItem:{label:`确认密码`,rules:[{validator:(e,t,n)=>{t===``?n(Error(`请输入确认密码`)):(getform1ValueByName(`password`)===t&&n(),n(Error(`两次密码输入不一致`)))},trigger:`blur`}]},customRules:[{type:`required`,message:`必填项`,trigger:`blur`}]}],form:{size:`default`,name:`form1`},config:{submitCancel:!0}});return(t,r)=>{let a=e(`ak-form`);return u(),i(a,{data:n.value},null,8,[`data`])}}},h={class:`marked-body`},g={__name:`form-option`,setup(e){return(e,i)=>(u(),o(`div`,h,[i[3]||=t(`<h1 id="ak-form 配置手册"><a name="ak-form-" class="anchor" href="#ak-form-"><span class="header-link"></span></a> ak-form 配置手册 </h1><p>配置数据由表单设计器通过拖拽添加相应组件及填写对应字段配置自动生成。脱离表单设计器时可按此数据格式要求，直接使用<code>ak-form</code>表单，即<code>ak-form</code>表单组件可不依懒于表单设计器工作。</p><h2 id="表单配置"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> 表单配置 </h2><h3 id="- 表单名称"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> - 表单名称 </h3><p><code>config.name</code></p><p>用于保存的表单设计显示的名称</p><h3 id="- 数据源"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> - 数据源 </h3><p><code>config.soucrceId</code></p><p>指定当前表单数据的对应的数据库表，即当前表单数据保存对应的数据库id。若没有配置数据源，则需在下面的接口数据事件中配置增删查改相关的url</p><h3 id="- 表单标识"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> - 表单标识 </h3><p><code>form.name</code></p><p>当前表单的名称，可根据此标识使用<code>get[formName]ControlByName</code>获得当前其他选项数据</p><h3 id="- 表单标签宽度"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> - 表单标签宽度 </h3><p><code>form.labelWidth</code></p><p><code>el-form</code>的表单属性，设置表单label的宽度</p><h3 id="- 表单样式名称"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> - 表单样式名称 </h3><p><code>form.class</code></p><p>自定义的表单样式名称，可快速选择内置好的表单布局类名，或自定义类名</p><h3 id="- 字段名后添加冒号"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> - 字段名后添加冒号 </h3><p><code>form.showColon</code></p><p>统一设置表单label是否添加冒号</p><h3 id="- 组件尺寸"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> - 组件尺寸 </h3><p><code>form.size</code></p><p><code>el-form</code>的表单属性</p><h3 id="- 快速添加确定取消按钮"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> - 快速添加确定取消按钮 </h3><p><code>config.submitCancel</code></p><ul><li>类型：boolean/string[]</li></ul><p>快速添加表单提交和取消按钮。设置为<code>true</code>可快速显示<code>确定</code>和<code>取消</code>两个按钮，如其他可自定义，格式为</p><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> submitCancel = [
  {
    <span class="hljs-attr">label</span>:<span class="hljs-string">&#39;确定&#39;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;submit&#39;</span>, <span class="hljs-comment">// 添加此属性相当于快速设置的确定，可选submit/reset/cancel</span>
    <span class="hljs-comment">// 其他属性详见el-button</span>
  },
  {
    <span class="hljs-attr">label</span>:<span class="hljs-string">&#39;取消&#39;</span>
  }
]</code></pre><h3 id="- 将object转string提交"><a name="-object-string-" class="anchor" href="#-object-string-"><span class="header-link"></span></a> - 将object转string提交 </h3><p><code>config.transformData</code></p><ul><li>类型：boolean</li></ul><p>统一数据提交格式，开启后会尝试将<code>object</code>类型的数据使用<code>JSON.stringify</code>转换后提交保存。根据id查询详情时再尝试使用<code>JSON.parse</code>恢复。</p><h3 id="- 编辑表单样式"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> - 编辑表单样式 </h3><p><code>config.style</code></p><p>编写有样式时会在当前页面head中插入style脚本，作用范围为当前页面。相当于.vue文件中的style scoped中的样式。</p><h3 id="- 新增修改数据保存url"><a name="-url" class="anchor" href="#-url"><span class="header-link"></span></a> - 新增修改数据保存url </h3><p><code>config.submit</code></p><p>点击表单提交按钮后数据保存的url接口地址，如当前表单设定了数据源，提交时则保存到对应的数据库表中，此时可不设置</p><p>同add</p><h3 id="- 获取表单数据url"><a name="-url" class="anchor" href="#-url"><span class="header-link"></span></a> - 获取表单数据url </h3><p><code>config.requestUrl</code></p><p>编辑时获取表单初始值接口url，用法同add</p><h3 id="- before事件"><a name="-before-" class="anchor" href="#-before-"><span class="header-link"></span></a> - before事件 </h3><p><code>events.before</code></p><ul><li>类型：before?: string | ((params: any, obj: any) =&gt; any)</li></ul><p>请求列表数据，编辑和删除等接口事件发送请求前执行事件，这里可对发送的数据进行拦截处理。</p><ul><li>params请求的参数，可对此参数进行修改，然后return回去</li><li>obj.type支持的类型，表单数据<code>get | add | edit</code>，选项数据<code>linkage | remote | edit | default</code>用于表示接口事件类型</li><li>obj.route当前页面路由信息</li><li>obj.model当前表单值</li></ul><p>同时支持string字符串类型，这个需要自定义开发，适用于处理一些比较复杂的逻辑处理时，根据设置的字符将处理逻辑写入本地文件。可查看<code>/src/utils/beforeAfter.ts</code>根据提示完成</p><h3 id="- after事件"><a name="-after-" class="anchor" href="#-after-"><span class="header-link"></span></a> - after事件 </h3><p><code>events.after</code></p><ul><li>类型：after?: string | ((res: any, success: boolean, type?: string) =&gt; any)</li></ul><p>类似于前面的<code>before</code>。最后需要将处理后的结果 return res</p><h3 id="- change事件"><a name="-change-" class="anchor" href="#-change-"><span class="header-link"></span></a> - change事件 </h3><p><code>events.change</code></p><ul><li>类型：change?: string | ({ name, value, prop, options }) =&gt; any)</li></ul><p>表单组件改变事件，可修改model后返回。即可实现当组件a改变时，修改b组件的值</p><ul><li>key 当前组件的name值</li><li>model 当前表单的值</li></ul><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> opt={
  <span class="hljs-attr">events</span>:{
    <span class="hljs-attr">change</span>:<span class="hljs-function">(<span class="hljs-params">{ name, value, prop, options }</span>)=&gt;</span>{
      <span class="hljs-comment">// 当名为name1的组件值改变时，设置表单xxx的值</span>
      <span class="hljs-keyword">if</span>(key===<span class="hljs-string">&#39;name1&#39;</span>){
        model.<span class="hljs-property">xxxx</span>=<span class="hljs-string">&#39;xx&#39;</span>
      }
      <span class="hljs-keyword">return</span> model
    }
  }
}</code></pre><h2 id="字段配置"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> 字段配置 </h2><p>支持的组件类型<code>input、textarea、radio、checkbox、select、inputSlot、datePicker、timePicker、colorPicker、switch、inputNumber、cascader、rate、slider、treeSelect、txt、title、tabs、flex、card、divider、button、table、component、upload、tinymce、grid、div……</code></p><p>对不同的组件类型有不一样的属性，部分是组件原来的prop，为了方便配置选择了部分些常用的prop用于可视化设计，其他的可通过<code>编辑属性</code>或<code>生成预览脚本</code>窗口进行编写。当然也可以自定义开发你所需要的prop</p><h3 id="通用属性"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> 通用属性 </h3><h4 id="- 设为Input输入框的前/后缀"><a name="-input-" class="anchor" href="#-input-"><span class="header-link"></span></a> - 设为Input输入框的前/后缀 </h4><p>设置为<code>true</code>即当前组件的<code>type=inputSlot</code>，将可在input组件的前后缀使用，使用方法同<code>select</code>。 使用时设置input的前缀或后缀为当前组件name值即可，格式为<code>key:name</code></p>`,65),l(n(d),{code:`%0A%3Ctemplate%3E%0A%20%20%3Cak-form%20%3Adata%3D%22formData%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0A%0A%20%20const%20formData%20%3D%20ref(%7B%0A%20%20%20%20list%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22inputSlot%22%2C%0A%20%20%20%20%20%20%20%20control%3A%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20modelValue%3A%20%22%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20teleported%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3A%20%7B%20width%3A%20%22100px%22%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E9%80%89%E9%A1%B91%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20%221%22%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20config%3A%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20optionsType%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20optionsFun%3A%20%22%22%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20name%3A%20%22select1%22%2C%0A%20%20%20%20%20%20%20%20formItem%3A%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E4%B8%8B%E6%8B%89%E9%80%89%E6%8B%A9%E6%A1%86%22%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22input%22%2C%0A%20%20%20%20%20%20%20%20control%3A%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20modelValue%3A%20%22%22%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20config%3A%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20prepend%3A%20%22%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20append%3A%20%22key%3Aselect1%22%20%2F%2F%20%E8%BF%99%E9%87%8C%E6%98%AF%E9%87%8D%E7%82%B9%EF%BC%9A%E5%B0%86name%3Dselect1%E7%9A%84%E7%BB%84%E4%BB%B6%E4%BD%9C%E4%B8%BA%E5%BD%93%E5%89%8D%E7%BB%84%E4%BB%B6%E7%9A%84%E5%90%8E%E7%BC%80%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20name%3A%20%22input1724465076902%22%2C%0A%20%20%20%20%20%20%20%20formItem%3A%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E5%8D%95%E8%A1%8C%E6%96%87%E6%9C%AC%22%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%5D%2C%0A%20%20%20%20form%3A%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20size%3A%20%22default%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20config%3A%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20submitCancel%3A%20false%0A%20%20%20%20%20%20%7D%0A%20%20%7D)%3B%0A%3C%2Fscript%3E`},{code:s(()=>[...i[0]||=[r(`pre`,{class:`language-xml`},[r(`code`,{class:`hljs`},[c(`
`),r(`span`,{class:`hljs-tag`},[c(`<`),r(`span`,{class:`hljs-name`},`template`),c(`>`)]),c(`
  `),r(`span`,{class:`hljs-tag`},[c(`<`),r(`span`,{class:`hljs-name`},`ak-form`),c(),r(`span`,{class:`hljs-attr`},`:data`),c(`=`),r(`span`,{class:`hljs-string`},`"formData"`),c(` />`)]),c(`
`),r(`span`,{class:`hljs-tag`},[c(`</`),r(`span`,{class:`hljs-name`},`template`),c(`>`)]),c(`
`),r(`span`,{class:`hljs-tag`},[c(`<`),r(`span`,{class:`hljs-name`},`script`),c(),r(`span`,{class:`hljs-attr`},`setup`),c(`>`)]),r(`span`,{class:`language-javascript`},[c(`
  `),r(`span`,{class:`hljs-keyword`},`import`),c(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),c(),r(`span`,{class:`hljs-string`},`"vue"`),c(`;

  `),r(`span`,{class:`hljs-keyword`},`const`),c(` formData = `),r(`span`,{class:`hljs-title function_`},`ref`),c(`({
    `),r(`span`,{class:`hljs-attr`},`list`),c(`: [
      {
        `),r(`span`,{class:`hljs-attr`},`type`),c(`: `),r(`span`,{class:`hljs-string`},`"inputSlot"`),c(`,
        `),r(`span`,{class:`hljs-attr`},`control`),c(`:
          {
            `),r(`span`,{class:`hljs-attr`},`modelValue`),c(`: `),r(`span`,{class:`hljs-string`},`""`),c(`,
            `),r(`span`,{class:`hljs-attr`},`teleported`),c(`: `),r(`span`,{class:`hljs-literal`},`true`),c(`,
            `),r(`span`,{class:`hljs-attr`},`style`),c(`: { `),r(`span`,{class:`hljs-attr`},`width`),c(`: `),r(`span`,{class:`hljs-string`},`"100px"`),c(` }
          },
        `),r(`span`,{class:`hljs-attr`},`options`),c(`: [
          {
            `),r(`span`,{class:`hljs-attr`},`label`),c(`: `),r(`span`,{class:`hljs-string`},`"选项1"`),c(`,
            `),r(`span`,{class:`hljs-attr`},`value`),c(`: `),r(`span`,{class:`hljs-string`},`"1"`),c(`
          }
        ],
        `),r(`span`,{class:`hljs-attr`},`config`),c(`:
          {
            `),r(`span`,{class:`hljs-attr`},`optionsType`),c(`: `),r(`span`,{class:`hljs-number`},`0`),c(`,
            `),r(`span`,{class:`hljs-attr`},`optionsFun`),c(`: `),r(`span`,{class:`hljs-string`},`""`),c(`
          },
        `),r(`span`,{class:`hljs-attr`},`name`),c(`: `),r(`span`,{class:`hljs-string`},`"select1"`),c(`,
        `),r(`span`,{class:`hljs-attr`},`formItem`),c(`:
          {
            `),r(`span`,{class:`hljs-attr`},`label`),c(`: `),r(`span`,{class:`hljs-string`},`"下拉选择框"`),c(`
          }
      },
      {
        `),r(`span`,{class:`hljs-attr`},`type`),c(`: `),r(`span`,{class:`hljs-string`},`"input"`),c(`,
        `),r(`span`,{class:`hljs-attr`},`control`),c(`:
          {
            `),r(`span`,{class:`hljs-attr`},`modelValue`),c(`: `),r(`span`,{class:`hljs-string`},`""`),c(`
          },
        `),r(`span`,{class:`hljs-attr`},`config`),c(`:
          {
            `),r(`span`,{class:`hljs-attr`},`prepend`),c(`: `),r(`span`,{class:`hljs-string`},`""`),c(`,
            `),r(`span`,{class:`hljs-attr`},`append`),c(`: `),r(`span`,{class:`hljs-string`},`"key:select1"`),c(),r(`span`,{class:`hljs-comment`},`// 这里是重点：将name=select1的组件作为当前组件的后缀`),c(`
          },
        `),r(`span`,{class:`hljs-attr`},`name`),c(`: `),r(`span`,{class:`hljs-string`},`"input1724465076902"`),c(`,
        `),r(`span`,{class:`hljs-attr`},`formItem`),c(`:
          {
            `),r(`span`,{class:`hljs-attr`},`label`),c(`: `),r(`span`,{class:`hljs-string`},`"单行文本"`),c(`
          }
      }],
    `),r(`span`,{class:`hljs-attr`},`form`),c(`:
      {
        `),r(`span`,{class:`hljs-attr`},`size`),c(`: `),r(`span`,{class:`hljs-string`},`"default"`),c(`
      },
    `),r(`span`,{class:`hljs-attr`},`config`),c(`:
      {
        `),r(`span`,{class:`hljs-attr`},`submitCancel`),c(`: `),r(`span`,{class:`hljs-literal`},`false`),c(`
      }
  });
`)]),r(`span`,{class:`hljs-tag`},[c(`</`),r(`span`,{class:`hljs-name`},`script`),c(`>`)])])],-1)]]),default:s(()=>[l(f)]),_:1}),i[4]||=t(`<p>其他通用属性大部分都是当前组件的一些属性，比较容易理解，这里就不一一介绍了。</p><h3 id="选项配置"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> 选项配置 </h3><p> 支持组件<code>radio、select、checkbox、cascader、treeSelect</code>配置选项数据</p><h4 id="- 选项数据源"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> - 选项数据源 </h4><p><code>config.optionsType</code></p><ul><li>类型：number 可选值0固定数据；1接口数据；2字典数据</li></ul><h4 id="- 选项数据源接口URL"><a name="-url" class="anchor" href="#-url"><span class="header-link"></span></a> - 选项数据源接口URL </h4><p><code>config.optionsFun</code></p><ul><li>类型：string</li></ul><ul><li>当config.optionsType===1时，为接口url</li><li>当config.optionsType===2时，为字典标识</li></ul><h4 id="- 远程数据参数字段名"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> - 远程数据参数字段名 </h4><p><code>config.queryName</code></p><ul><li>类型：string default:&#39;name&#39;</li></ul><p>当开启了<code>Remote</code>远程数据时有效，作为参数请求接口，如<code>{name:&#39;xxx&#39;}</code></p><h4 id="- 开启远程数据Remote"><a name="-remote" class="anchor" href="#-remote"><span class="header-link"></span></a> - 开启远程数据Remote </h4><p><code>config.remote</code></p><ul><li>类型：boolean</li></ul><p>用于从接口数据中提取指定的字段作为下拉选项的label值，默认为<code>label</code>。如接口返回没有<code>label</code>和<code>value</code>字段，则需设置。当值发生变化时，将根据输入的参数从配置的<code>config. optionsFun</code>接口地址获取选项数据，参数key可通过<code>config.queryName</code>设置。</p><p><strong>远程数据编辑回显问题</strong></p><p>当<code>label</code>和<code>value</code>不相同时，接口服务端保存的一般为<code>value</code>值，由于是远程搜索在编辑时只能显示<code>value</code>的值。 为方便回显目前暂定在搜索时根据<code>value</code>的值请求，接口需要能够根据value id查找出初始默认值</p><h4 id="- 指定label属性值"><a name="-label-" class="anchor" href="#-label-"><span class="header-link"></span></a> - 指定label属性值 </h4><p><code>config.label</code></p><ul><li>当config.optionsType===1时有效</li></ul><p>用于从接口数据中提取指定的字段作为下拉选项的label值，默认为<code>label</code>。如接口返回没有<code>label</code>和<code>value</code>字段，则需设置</p><pre class="language-javascript"><code class="hljs"><span class="hljs-comment">// 接口返回数据为name和id,则此时需要设置label=&#39;name&#39;,valule=&#39;id&#39;</span>
<span class="hljs-keyword">const</span> res=[
  {
    <span class="hljs-attr">name</span>:<span class="hljs-string">&#39;选项1&#39;</span>,
    <span class="hljs-attr">id</span>:<span class="hljs-string">&#39;1&#39;</span>
  },
  {
    <span class="hljs-attr">name</span>:<span class="hljs-string">&#39;选项2&#39;</span>,
    <span class="hljs-attr">id</span>:<span class="hljs-string">&#39;2&#39;</span>
  }
]</code></pre><h4 id="- 指定value属性值"><a name="-value-" class="anchor" href="#-value-"><span class="header-link"></span></a> - 指定value属性值 </h4><p><code>config.value</code></p><p>同上面label</p><h4 id="- 缓存数据结果"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> - 缓存数据结果 </h4><p><code>config.cache</code></p><ul><li><p>类型：boolean</p></li><li><p>当config.optionsType===1时有效</p></li></ul><p>将接口返回的数据存在sessionStorage，减少重复请求</p><h4 id="- 尝试转换value值为"><a name="-value-" class="anchor" href="#-value-"><span class="header-link"></span></a> - 尝试转换value值为 </h4><p><code>config.transformData</code></p><ul><li>可选值 none、number、string</li></ul><p>对组件的数字值进行转换，Number型数字和String型数字互转。实际场景：</p><pre class="language-javascript"><code class="hljs"><span class="hljs-comment">// 接口返回的value为String类型时</span>
<span class="hljs-keyword">const</span> result = {<span class="hljs-attr">value</span>:<span class="hljs-string">&#39;1&#39;</span>}
<span class="hljs-comment">// 接口返回选项数据如：</span>
<span class="hljs-keyword">const</span> options=[
  {
    <span class="hljs-attr">label</span>:<span class="hljs-string">&#39;选项1&#39;</span>,
    <span class="hljs-attr">value</span>:<span class="hljs-number">1</span>
  }
]

<span class="hljs-comment">// 此时无法回显正常的值，&lt;el-select v-model=result.value/&gt;</span></code></pre><h4 id="- 联动关联"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> - 联动关联 </h4><p><code>config.linkage</code></p><ul><li>类型：string</li></ul><p>实现如省市联动的效果，当关联的name发生改变时，当前组件会重新根据name对应组件值发起请求。可查看示例控制面板输出</p>`,41),l(n(d),{code:`%3Ctemplate%3E%0A%20%20%3Cak-form%20%3Adata%3D%22formData%22%3E%3C%2Fak-form%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7Bref%7D%20from%20'vue'%0A%20%20%0Aconst%20formData%20%3D%20ref(%7B%0A%20%20list%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20%22input%22%2C%0A%20%20%20%20%20%20control%3A%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20modelValue%3A%20%22%22%2C%0A%20%20%20%20%20%20%20%20%20%20placeholder%3A'%E5%80%BC%E5%8F%91%E7%94%9F%E6%94%B9%E5%8F%98%E6%97%B6%EF%BC%8C%E4%B8%8B%E6%8B%89%E9%80%89%E6%8B%A9%E6%A1%86%E4%BC%9A%E9%87%8D%E6%96%B0%E5%8F%91%E8%B5%B7%E8%AF%B7%E6%B1%82'%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20config%3A%0A%20%20%20%20%20%20%20%20%7B%7D%2C%0A%20%20%20%20%20%20name%3A%20%22name1%22%2C%0A%20%20%20%20%20%20formItem%3A%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E5%8D%95%E8%A1%8C%E6%96%87%E6%9C%AC%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20type%3A%20%22select%22%2C%0A%20%20%20%20%20%20control%3A%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20modelValue%3A%20%22%22%2C%0A%20%20%20%20%20%20%20%20%20%20teleported%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20remote%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20filterable%3A%20false%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20options%3A%20%5B%5D%2C%0A%20%20%20%20%20%20config%3A%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20optionsType%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20optionsFun%3A%20%22demo%2Foptions%22%2C%0A%20%20%20%20%20%20%20%20%20%20method%3A%20%22get%22%2C%0A%20%20%20%20%20%20%20%20%20%20linkage%3A%20%22name1%22%2C%20%2F%2F%20%E5%85%B3%E8%81%94%E5%89%8D%E9%9D%A2%E7%9A%84%E5%8D%95%E8%A1%8C%E6%96%87%E6%9C%ACname%3Dinput1%E7%9A%84%E7%BB%84%E4%BB%B6%0A%20%20%20%20%20%20%20%20%20%20before%3A%20(params%2C%20%7Btype%2C%20route%2Cmodel%7D)%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E5%BD%93%E7%94%B1name1%E5%8F%91%E7%94%9F%E6%94%B9%E5%8F%98%E8%A7%A6%E5%8F%91%E7%9A%84%E8%AF%B7%E6%B1%82%E6%97%B6%EF%BC%8C%E6%AD%A4%E6%97%B6type%3Dlinkage%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log(type)%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20params%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20after%3A%20(res%2C%20success%2C%20type)%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20res%E6%8E%A5%E5%8F%A3%E8%BF%94%E5%9B%9E%E7%BB%93%E6%9E%9C%EF%BC%8Ctype%E5%BD%93%E5%89%8D%E4%BA%8B%E4%BB%B6%E7%B1%BB%E5%9E%8B%EF%BC%8Csuccess%E6%98%AF%E5%90%A6%E6%88%90%E5%8A%9F%EF%BC%9B%E5%AF%B9%E7%BB%93%E6%9E%9C%E4%BF%AE%E6%94%B9%E5%90%8E%E8%BF%94%E5%9B%9E%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log(type%2C%20res)%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20res%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20name%3A%20%22select1%22%2C%0A%20%20%20%20%20%20formItem%3A%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E4%B8%8B%E6%8B%89%E9%80%89%E6%8B%A9%E6%A1%86%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%5D%2C%0A%20%20form%3A%0A%20%20%20%20%7B%0A%20%20%20%20%20%20size%3A%20%22default%22%0A%20%20%20%20%7D%2C%0A%20%20config%3A%0A%20%20%20%20%7B%0A%20%20%20%20%20%20submitCancel%3A%20false%0A%20%20%20%20%7D%0A%7D)%0A%3C%2Fscript%3E`},{code:s(()=>[...i[1]||=[r(`pre`,{class:`language-xml`},[r(`code`,{class:`hljs`},[r(`span`,{class:`hljs-tag`},[c(`<`),r(`span`,{class:`hljs-name`},`template`),c(`>`)]),c(`
  `),r(`span`,{class:`hljs-tag`},[c(`<`),r(`span`,{class:`hljs-name`},`ak-form`),c(),r(`span`,{class:`hljs-attr`},`:data`),c(`=`),r(`span`,{class:`hljs-string`},`"formData"`),c(`>`)]),r(`span`,{class:`hljs-tag`},[c(`</`),r(`span`,{class:`hljs-name`},`ak-form`),c(`>`)]),c(`
`),r(`span`,{class:`hljs-tag`},[c(`</`),r(`span`,{class:`hljs-name`},`template`),c(`>`)]),c(`
`),r(`span`,{class:`hljs-tag`},[c(`<`),r(`span`,{class:`hljs-name`},`script`),c(),r(`span`,{class:`hljs-attr`},`setup`),c(`>`)]),r(`span`,{class:`language-javascript`},[c(`
  `),r(`span`,{class:`hljs-keyword`},`import`),c(` {ref} `),r(`span`,{class:`hljs-keyword`},`from`),c(),r(`span`,{class:`hljs-string`},`'vue'`),c(`
  
`),r(`span`,{class:`hljs-keyword`},`const`),c(` formData = `),r(`span`,{class:`hljs-title function_`},`ref`),c(`({
  `),r(`span`,{class:`hljs-attr`},`list`),c(`: [
    {
      `),r(`span`,{class:`hljs-attr`},`type`),c(`: `),r(`span`,{class:`hljs-string`},`"input"`),c(`,
      `),r(`span`,{class:`hljs-attr`},`control`),c(`:
        {
          `),r(`span`,{class:`hljs-attr`},`modelValue`),c(`: `),r(`span`,{class:`hljs-string`},`""`),c(`,
          `),r(`span`,{class:`hljs-attr`},`placeholder`),c(`:`),r(`span`,{class:`hljs-string`},`'值发生改变时，下拉选择框会重新发起请求'`),c(`
        },
      `),r(`span`,{class:`hljs-attr`},`config`),c(`:
        {},
      `),r(`span`,{class:`hljs-attr`},`name`),c(`: `),r(`span`,{class:`hljs-string`},`"name1"`),c(`,
      `),r(`span`,{class:`hljs-attr`},`formItem`),c(`:
        {
          `),r(`span`,{class:`hljs-attr`},`label`),c(`: `),r(`span`,{class:`hljs-string`},`"单行文本"`),c(`
        }
    },
    {
      `),r(`span`,{class:`hljs-attr`},`type`),c(`: `),r(`span`,{class:`hljs-string`},`"select"`),c(`,
      `),r(`span`,{class:`hljs-attr`},`control`),c(`:
        {
          `),r(`span`,{class:`hljs-attr`},`modelValue`),c(`: `),r(`span`,{class:`hljs-string`},`""`),c(`,
          `),r(`span`,{class:`hljs-attr`},`teleported`),c(`: `),r(`span`,{class:`hljs-literal`},`true`),c(`,
          `),r(`span`,{class:`hljs-attr`},`remote`),c(`: `),r(`span`,{class:`hljs-literal`},`false`),c(`,
          `),r(`span`,{class:`hljs-attr`},`filterable`),c(`: `),r(`span`,{class:`hljs-literal`},`false`),c(`,
        },
      `),r(`span`,{class:`hljs-attr`},`options`),c(`: [],
      `),r(`span`,{class:`hljs-attr`},`config`),c(`:
        {
          `),r(`span`,{class:`hljs-attr`},`optionsType`),c(`: `),r(`span`,{class:`hljs-number`},`1`),c(`,
          `),r(`span`,{class:`hljs-attr`},`optionsFun`),c(`: `),r(`span`,{class:`hljs-string`},`"demo/options"`),c(`,
          `),r(`span`,{class:`hljs-attr`},`method`),c(`: `),r(`span`,{class:`hljs-string`},`"get"`),c(`,
          `),r(`span`,{class:`hljs-attr`},`linkage`),c(`: `),r(`span`,{class:`hljs-string`},`"name1"`),c(`, `),r(`span`,{class:`hljs-comment`},`// 关联前面的单行文本name=input1的组件`),c(`
          `),r(`span`,{class:`hljs-attr`},`before`),c(`: `),r(`span`,{class:`hljs-function`},[c(`(`),r(`span`,{class:`hljs-params`},`params, {type, route,model}`),c(`) =>`)]),c(`
          {
            `),r(`span`,{class:`hljs-comment`},`// 当由name1发生改变触发的请求时，此时type=linkage`),c(`
            `),r(`span`,{class:`hljs-variable language_`},`console`),c(`.`),r(`span`,{class:`hljs-title function_`},`log`),c(`(type)
            `),r(`span`,{class:`hljs-keyword`},`return`),c(` params
          },
          `),r(`span`,{class:`hljs-attr`},`after`),c(`: `),r(`span`,{class:`hljs-function`},[c(`(`),r(`span`,{class:`hljs-params`},`res, success, type`),c(`) =>`)]),c(`
          {
            `),r(`span`,{class:`hljs-comment`},`// res接口返回结果，type当前事件类型，success是否成功；对结果修改后返回`),c(`
            `),r(`span`,{class:`hljs-variable language_`},`console`),c(`.`),r(`span`,{class:`hljs-title function_`},`log`),c(`(type, res)
            `),r(`span`,{class:`hljs-keyword`},`return`),c(` res
          }
        },
      `),r(`span`,{class:`hljs-attr`},`name`),c(`: `),r(`span`,{class:`hljs-string`},`"select1"`),c(`,
      `),r(`span`,{class:`hljs-attr`},`formItem`),c(`:
        {
          `),r(`span`,{class:`hljs-attr`},`label`),c(`: `),r(`span`,{class:`hljs-string`},`"下拉选择框"`),c(`
        }
    }],
  `),r(`span`,{class:`hljs-attr`},`form`),c(`:
    {
      `),r(`span`,{class:`hljs-attr`},`size`),c(`: `),r(`span`,{class:`hljs-string`},`"default"`),c(`
    },
  `),r(`span`,{class:`hljs-attr`},`config`),c(`:
    {
      `),r(`span`,{class:`hljs-attr`},`submitCancel`),c(`: `),r(`span`,{class:`hljs-literal`},`false`),c(`
    }
})
`)]),r(`span`,{class:`hljs-tag`},[c(`</`),r(`span`,{class:`hljs-name`},`script`),c(`>`)])])],-1)]]),default:s(()=>[l(p)]),_:1}),i[5]||=r(`h3`,{id:`校验设置`},[r(`a`,{name:`-`,class:`anchor`,href:`#-`},[r(`span`,{class:`header-link`})]),c(` 校验设置 `)],-1),i[6]||=r(`ul`,null,[r(`li`,null,[c(`对于input输入框，我们提供了丰富的校验规则，你只需选择校验的正确类型和输入提示语即可。如还不满足使用，可通过`),r(`code`,null,`编写校验规则`),c(`弹窗编写规则，如`)])],-1),l(n(d),{code:`%3Ctemplate%3E%0A%20%20%3Cak-form%20%3Adata%3D%22formData%22%3E%3C%2Fak-form%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7Bref%7D%20from%20'vue'%0A%20%20const%20formData%3Dref(%7B%0A%20%20%20%20list%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22input%22%2C%0A%20%20%20%20%20%20%20%20control%3A%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20modelValue%3A%20%22%22%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20config%3A%0A%20%20%20%20%20%20%20%20%20%20%7B%7D%2C%0A%20%20%20%20%20%20%20%20name%3A%20%22password%22%2C%0A%20%20%20%20%20%20%20%20formItem%3A%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E5%AF%86%E7%A0%81%22%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20customRules%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22required%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20message%3A%20%22%E5%BF%85%E5%A1%AB%E9%A1%B9%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20trigger%3A%20%22blur%22%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22input%22%2C%0A%20%20%20%20%20%20%20%20control%3A%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20modelValue%3A%20%22%22%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20config%3A%0A%20%20%20%20%20%20%20%20%20%20%7B%7D%2C%0A%20%20%20%20%20%20%20%20name%3A%20%22password2%22%2C%0A%20%20%20%20%20%20%20%20formItem%3A%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E7%A1%AE%E8%AE%A4%E5%AF%86%E7%A0%81%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20rules%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20validator%3A%20(rule%2C%20value%2C%20callback)%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(value%20%3D%3D%3D%20'')%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20callback(new%20Error('%E8%AF%B7%E8%BE%93%E5%85%A5%E7%A1%AE%E8%AE%A4%E5%AF%86%E7%A0%81'))%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E5%81%87%E5%A6%82%E5%BD%93%E5%89%8D%E8%A1%A8%E5%8D%95%E5%90%8D%E4%B8%BAform1%E3%80%82%E8%8E%B7%E5%8F%96%E7%BB%84%E4%BB%B6password%E7%9A%84%E5%80%BC%E5%92%8C%E5%BD%93%E5%89%8D%E5%80%BC%E5%AF%B9%E6%AF%94%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20password%20%3D%20getform1ValueByName('password')%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(password%20%3D%3D%3D%20value)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20callback()%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20callback(new%20Error('%E4%B8%A4%E6%AC%A1%E5%AF%86%E7%A0%81%E8%BE%93%E5%85%A5%E4%B8%8D%E4%B8%80%E8%87%B4'))%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20trigger%3A%20%22blur%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20customRules%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22required%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20message%3A%20%22%E5%BF%85%E5%A1%AB%E9%A1%B9%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20trigger%3A%20%22blur%22%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%20%20%7D%5D%2C%0A%20%20%20%20form%3A%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20size%3A%20%22default%22%2C%0A%20%20%20%20%20%20%20%20name%3A%20%22form1%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20config%3A%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20submitCancel%3A%20true%0A%20%20%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E`},{code:s(()=>[...i[2]||=[r(`pre`,{class:`language-xml`},[r(`code`,{class:`hljs`},[r(`span`,{class:`hljs-tag`},[c(`<`),r(`span`,{class:`hljs-name`},`template`),c(`>`)]),c(`
  `),r(`span`,{class:`hljs-tag`},[c(`<`),r(`span`,{class:`hljs-name`},`ak-form`),c(),r(`span`,{class:`hljs-attr`},`:data`),c(`=`),r(`span`,{class:`hljs-string`},`"formData"`),c(`>`)]),r(`span`,{class:`hljs-tag`},[c(`</`),r(`span`,{class:`hljs-name`},`ak-form`),c(`>`)]),c(`
`),r(`span`,{class:`hljs-tag`},[c(`</`),r(`span`,{class:`hljs-name`},`template`),c(`>`)]),c(`
`),r(`span`,{class:`hljs-tag`},[c(`<`),r(`span`,{class:`hljs-name`},`script`),c(),r(`span`,{class:`hljs-attr`},`setup`),c(`>`)]),r(`span`,{class:`language-javascript`},[c(`
  `),r(`span`,{class:`hljs-keyword`},`import`),c(` {ref} `),r(`span`,{class:`hljs-keyword`},`from`),c(),r(`span`,{class:`hljs-string`},`'vue'`),c(`
  `),r(`span`,{class:`hljs-keyword`},`const`),c(` formData=`),r(`span`,{class:`hljs-title function_`},`ref`),c(`({
    `),r(`span`,{class:`hljs-attr`},`list`),c(`: [
      {
        `),r(`span`,{class:`hljs-attr`},`type`),c(`: `),r(`span`,{class:`hljs-string`},`"input"`),c(`,
        `),r(`span`,{class:`hljs-attr`},`control`),c(`:
          {
            `),r(`span`,{class:`hljs-attr`},`modelValue`),c(`: `),r(`span`,{class:`hljs-string`},`""`),c(`
          },
        `),r(`span`,{class:`hljs-attr`},`config`),c(`:
          {},
        `),r(`span`,{class:`hljs-attr`},`name`),c(`: `),r(`span`,{class:`hljs-string`},`"password"`),c(`,
        `),r(`span`,{class:`hljs-attr`},`formItem`),c(`:
          {
            `),r(`span`,{class:`hljs-attr`},`label`),c(`: `),r(`span`,{class:`hljs-string`},`"密码"`),c(`
          },
        `),r(`span`,{class:`hljs-attr`},`customRules`),c(`: [
          {
            `),r(`span`,{class:`hljs-attr`},`type`),c(`: `),r(`span`,{class:`hljs-string`},`"required"`),c(`,
            `),r(`span`,{class:`hljs-attr`},`message`),c(`: `),r(`span`,{class:`hljs-string`},`"必填项"`),c(`,
            `),r(`span`,{class:`hljs-attr`},`trigger`),c(`: `),r(`span`,{class:`hljs-string`},`"blur"`),c(`
          }]
      },
      {
        `),r(`span`,{class:`hljs-attr`},`type`),c(`: `),r(`span`,{class:`hljs-string`},`"input"`),c(`,
        `),r(`span`,{class:`hljs-attr`},`control`),c(`:
          {
            `),r(`span`,{class:`hljs-attr`},`modelValue`),c(`: `),r(`span`,{class:`hljs-string`},`""`),c(`
          },
        `),r(`span`,{class:`hljs-attr`},`config`),c(`:
          {},
        `),r(`span`,{class:`hljs-attr`},`name`),c(`: `),r(`span`,{class:`hljs-string`},`"password2"`),c(`,
        `),r(`span`,{class:`hljs-attr`},`formItem`),c(`:
          {
            `),r(`span`,{class:`hljs-attr`},`label`),c(`: `),r(`span`,{class:`hljs-string`},`"确认密码"`),c(`,
            `),r(`span`,{class:`hljs-attr`},`rules`),c(`: [
              {
                `),r(`span`,{class:`hljs-attr`},`validator`),c(`: `),r(`span`,{class:`hljs-function`},[c(`(`),r(`span`,{class:`hljs-params`},`rule, value, callback`),c(`) =>`)]),c(`
                {
                  `),r(`span`,{class:`hljs-keyword`},`if`),c(` (value === `),r(`span`,{class:`hljs-string`},`''`),c(`)
                  {
                    `),r(`span`,{class:`hljs-title function_`},`callback`),c(`(`),r(`span`,{class:`hljs-keyword`},`new`),c(),r(`span`,{class:`hljs-title class_`},`Error`),c(`(`),r(`span`,{class:`hljs-string`},`'请输入确认密码'`),c(`))
                  }
                  `),r(`span`,{class:`hljs-keyword`},`else`),c(`
                  {
                    `),r(`span`,{class:`hljs-comment`},`// 假如当前表单名为form1。获取组件password的值和当前值对比`),c(`
                    `),r(`span`,{class:`hljs-keyword`},`const`),c(` password = `),r(`span`,{class:`hljs-title function_`},`getform1ValueByName`),c(`(`),r(`span`,{class:`hljs-string`},`'password'`),c(`)
                    `),r(`span`,{class:`hljs-keyword`},`if`),c(` (password === value)
                    {
                      `),r(`span`,{class:`hljs-title function_`},`callback`),c(`()
                    }
                    `),r(`span`,{class:`hljs-title function_`},`callback`),c(`(`),r(`span`,{class:`hljs-keyword`},`new`),c(),r(`span`,{class:`hljs-title class_`},`Error`),c(`(`),r(`span`,{class:`hljs-string`},`'两次密码输入不一致'`),c(`))
                  }
                },
                `),r(`span`,{class:`hljs-attr`},`trigger`),c(`: `),r(`span`,{class:`hljs-string`},`"blur"`),c(`
              }]
          },
        `),r(`span`,{class:`hljs-attr`},`customRules`),c(`: [
          {
            `),r(`span`,{class:`hljs-attr`},`type`),c(`: `),r(`span`,{class:`hljs-string`},`"required"`),c(`,
            `),r(`span`,{class:`hljs-attr`},`message`),c(`: `),r(`span`,{class:`hljs-string`},`"必填项"`),c(`,
            `),r(`span`,{class:`hljs-attr`},`trigger`),c(`: `),r(`span`,{class:`hljs-string`},`"blur"`),c(`
          }]
      }],
    `),r(`span`,{class:`hljs-attr`},`form`),c(`:
      {
        `),r(`span`,{class:`hljs-attr`},`size`),c(`: `),r(`span`,{class:`hljs-string`},`"default"`),c(`,
        `),r(`span`,{class:`hljs-attr`},`name`),c(`: `),r(`span`,{class:`hljs-string`},`"form1"`),c(`
      },
    `),r(`span`,{class:`hljs-attr`},`config`),c(`:
      {
        `),r(`span`,{class:`hljs-attr`},`submitCancel`),c(`: `),r(`span`,{class:`hljs-literal`},`true`),c(`
      }
  })
`)]),r(`span`,{class:`hljs-tag`},[c(`</`),r(`span`,{class:`hljs-name`},`script`),c(`>`)])])],-1)]]),default:s(()=>[l(m)]),_:1}),i[7]||=t(`<ul><li><p>除系统内置的校验规则，还可通过可<code>@/components/form/validate.ts</code>扩展，添加常用校验规则</p></li><li><p>对于选择类的如select、checkbox类的可以校验是否为空</p></li></ul><h3 id="其他属性"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> 其他属性 </h3><p>可通过其他属性弹窗编写当前组件的prop，详见ui官网</p><h2 id="表单方法"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> 表单方法 </h2><h3 id="- get[formName]ControlByName"><a name="-get-formname-controlbyname" class="anchor" href="#-get-formname-controlbyname"><span class="header-link"></span></a> - get[formName]ControlByName </h3><ul><li>类型：function(name)</li></ul><p>表单页全局方法，用于根据组件<code>form.name</code>值获取当前的数据项。</p><p>注意：<code>formName</code>值为表单唯一标识，即<code>form.name</code></p><p>使用方法见上面<code>校验设置</code>示例里的确认密码，当确认密码改变时，先通过此方法获取密码输入框的值，再和当前输入的比较是否一致</p><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> control = <span class="hljs-title function_">getformNameControlByName</span>(<span class="hljs-string">&#39;name&#39;</span>)
<span class="hljs-comment">//　注意：通过\`导出vue文件\`方法使用时，直接使用可能会报错，可添加window,如</span>
<span class="hljs-keyword">const</span> control = <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">getformNameControlByName</span>(<span class="hljs-string">&#39;name&#39;</span>)</code></pre><h3 id="- get[formName]ValueByName"><a name="-get-formname-valuebyname" class="anchor" href="#-get-formname-valuebyname"><span class="header-link"></span></a> - get[formName]ValueByName </h3><ul><li>类型：function(name)</li></ul><p>同get[formName]ControlByName。返回值不一样</p>`,13)]))}};export{g as default};