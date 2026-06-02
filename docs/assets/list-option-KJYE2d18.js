import{B as e,G as t,L as n,St as r,b as i,f as a,h as o,it as s,j as c,mt as l,v as u,x as d,y as f}from"./runtime-core.esm-bundler-BgH13u1H.js";import{t as p}from"./component-B5oEiCFp.js";var m=d({__name:`list-option.md.Virtual1ff52e8c`,setup(r){let a=l(),u=l(),d=l(),f=l(`add`),p=l({columns:[{label:`多选`,type:`selection`,prop:`selection`},{prop:`text`,label:`文本`,help:``},{prop:`checkbox`,label:`性别`,help:``},{label:`操作`,prop:`operate`,render:`buttons`,buttons:[{key:`edit`,props:{size:`small`}},{key:`del`,props:{size:`small`}}]}],config:{controlBtn:[{key:`add`},{key:`del`}],openType:`dialog`,dialogWidth:`600`}}),m=l({list:[{type:`input`,control:{modelValue:``},name:`text`,formItem:{label:`文本`}},{type:`radio`,control:{modelValue:``},name:`checkbox`,formItem:{label:`性别`},options:[{label:`男`,value:`1`},{label:`女`,value:`2`}],optionsType:0}],config:{submitCancel:!0}}),h=l({list:[{type:`input`,control:{modelValue:``},name:`text`,formItem:{label:`文本`}},{type:`radio`,control:{modelValue:``},name:`checkbox`,formItem:{label:`性别`},options:[{label:`男`,value:`男`},{label:`女`,value:`女`}],optionsType:0}],config:{submitCancel:!0}}),g=(e,t,n)=>{d.value=n,e===`edit`&&(f.value=e,c(()=>{a.value.setValue(t)}))},_=()=>{d.value&&d.value()},v=(e,t,n)=>{n===`submit`&&t&&(u.value.getListData(),_())},y=e=>{(e===`reset`||e===`cancel`)&&_()};return n(()=>{u.value.setTableData([{text:`张三`,checkbox:`男`},{text:`李四`,checkbox:`女`}])}),(n,r)=>{let c=t(`ak-form`),l=t(`ak-list`);return e(),o(`div`,null,[i(l,{ref_key:`tableListRef`,ref:u,"api-key":{},"search-data":m.value,data:p.value,onBtnClick:g},{default:s(()=>[i(c,{ref_key:`formRef`,ref:a,data:h.value,"operate-type":f.value,"submit-url":``,after:v,onBtnClick:y},null,8,[`data`,`operate-type`])]),_:1},8,[`search-data`,`data`])])}}}),h={class:`marked-body`},g={__name:`list-option`,setup(t){return(t,n)=>(e(),o(`div`,h,[n[1]||=u(`<h1 id="ak-list 配置手册"><a name="ak-list-" class="anchor" href="#ak-list-"><span class="header-link"></span></a> ak-list 配置手册 </h1><h2 id="一些数据列表配置"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> 一些数据列表配置 </h2><h3 id="-pk"><a name="-pk" class="anchor" href="#-pk"><span class="header-link"></span></a> -pk </h3><p><code>data.pk</code></p><ul><li>类型：string|number</li></ul><p>当前列表数据主键，用于删除和编辑等相关操作</p><h3 id="-新增编辑显示方式"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> -新增编辑显示方式 </h3><p><code>data.config.openType</code> 可选dialog/page。设计列表页里点击新增或编辑按钮时，对应表单的显示方式，可以为弹窗和新标签页打开两种方式。</p><h3 id="-固定列表横向滚动条"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> -固定列表横向滚动条 </h3><p><code>data.config.fixedBottomScroll</code></p><ul><li>类型：boolean，默认true。</li></ul><p>当列表出现横向滚动条时，设置为true可将滚动条固定在浏览器底部。方便在翻页查看列表最右边信息时，无需先滚动纵向滚动条到底部，再滚动横向滚动条到右边才能查看</p><h3 id="-列显示隐藏设置"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> -列显示隐藏设置 </h3><p><code>data.config.columnsSetting</code></p><ul><li>类型：boolean，默认true。</li></ul><p>用于设置表头列的显示与隐藏，即可个性化设置当前列表需要显示或隐藏哪些表头，以方便查看</p><h3 id="-条件查询是否跳转页面"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> -条件查询是否跳转页面 </h3><p><code>data.config.searchJump</code> 类型：boolean，默认false。即列表查询时，点击查询按钮是否带参数跳转页面。此方式有利于分享当前url</p><h3 id="-列表操作按钮下拉设置"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> -列表操作按钮下拉设置 </h3><p><code>data.config.operateDropdown</code> 类型：number。一般为列表右侧的编辑删除等操作按钮，当按钮个大于当前设定时，其余的侧以下拉菜单的形式展示。如设置<code>operateDropdown=2</code>，当操作按钮个数大于2个时，其余的侧以下拉菜单展示。</p><h2 id="一些字段属性配置说明"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> 一些字段属性配置说明 </h2><h3 id="-help"><a name="-help" class="anchor" href="#-help"><span class="header-link"></span></a> -help </h3><p><code>data.columns.help</code> 显示在表头的帮助信息，鼠标滑过时提示</p><h3 id="-replaceValue"><a name="-replacevalue" class="anchor" href="#-replacevalue"><span class="header-link"></span></a> -replaceValue </h3><p><code>data.columns.replaceValue</code> 类型:{ [key: string | number]: string }</p><p>仅当<code>render=tag/text</code>时,用于根据值替换成其他内容，常见于接口返回如status=0/1之类的，需要将0/1显示为对应的文案，则可使用设置<code>{ &#39;1&#39;: &#39;启用&#39;, &#39;0&#39;: &#39;禁用&#39; }</code></p><h3 id="-custom"><a name="-custom" class="anchor" href="#-custom"><span class="header-link"></span></a> -custom </h3><p><code>data.columns.custom</code></p><p>类型：custom?: { [key: string | number]: string }</p><p>仅当<code>render=tag/text</code>时,tag的显示类型属性，如{ &#39;1&#39;: &#39;success&#39;, &#39;0&#39;: &#39;danger&#39; }</p><h3 id="-renderFormatter"><a name="-renderformatter" class="anchor" href="#-renderformatter"><span class="header-link"></span></a> -renderFormatter </h3><p><code>data.columns.renderFormatter</code></p><ul><li><p>类型：renderFormatter?: (val: any, row: any) =&gt; any</p><p>使用了 <code>render</code> 属性时,渲染前对字段的值进行预处理方法，需返回新值</p></li></ul><h3 id="-操作按钮配置"><a name="-" class="anchor" href="#-"><span class="header-link"></span></a> -操作按钮配置 </h3><p>适用于表格左上方及表格列表内右侧按钮</p><p><code>data.config.controlBtn</code> 为表格左上方，<code>data.columns</code>下<code>render=buttons</code>为列表右侧按钮，如：</p><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> data={
  <span class="hljs-attr">config</span>:{
    <span class="hljs-attr">controlBtn</span>:[], <span class="hljs-comment">//为表格左上方按钮配置</span>
  },
  <span class="hljs-attr">columns</span>:[{
    <span class="hljs-attr">render</span>:<span class="hljs-string">&#39;buttons&#39;</span>, <span class="hljs-comment">//为列表右侧按钮</span>
    <span class="hljs-attr">buttons</span>:[]
  }]
}</code></pre><p>对于按钮key=add/edit/del作了系统内置事件，在使用时可通过使用return false阻止或者key设置为空或不填 在默认下如果设置了<code>config.openType=dailog</code>，并且组件下有default slot，在点击<code>key=add/edit</code>时会将slot作为弹窗打开</p>`,38),i(r(p),{code:`%3C!--%20created%20by%20weiXin%3A337547038%20--%3E%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-list%0A%20%20%20%20%20%20%20%20%20%20%20%20ref%3D%22tableListRef%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Aapi-key%3D%22%7B%7D%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Asearch-data%3D%22searchData%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Adata%3D%22tableData%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%40btn-click%3D%22listBtnClick%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cak-form%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20ref%3D%22formRef%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Adata%3D%22formData%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Aoperate-type%3D%22operateType%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20submit-url%3D%22%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Aafter%3D%22afterSubmit%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%40btn-click%3D%22formBtnClick%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fak-list%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7BnextTick%2C%20ref%2ConMounted%7D%20from%20'vue'%0A%0A%20%20const%20formRef%20%3D%20ref()%0A%20%20const%20tableListRef%20%3D%20ref()%0A%20%20const%20closeFormFn%20%3D%20ref()%0A%20%20const%20operateType%20%3D%20ref('add')%0A%0A%20%20const%20tableData%20%3D%20ref(%7B%0A%20%20%20%20columns%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20%22%E5%A4%9A%E9%80%89%22%2C%0A%20%20%20%20%20%20%20%20type%3A%20%22selection%22%2C%0A%20%20%20%20%20%20%20%20prop%3A%20%22selection%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20prop%3A%20%22text%22%2C%0A%20%20%20%20%20%20%20%20label%3A%20%22%E6%96%87%E6%9C%AC%22%2C%0A%20%20%20%20%20%20%20%20help%3A%20%22%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20prop%3A%20%22checkbox%22%2C%0A%20%20%20%20%20%20%20%20label%3A%20%22%E6%80%A7%E5%88%AB%22%2C%0A%20%20%20%20%20%20%20%20help%3A%20%22%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20%22%E6%93%8D%E4%BD%9C%22%2C%0A%20%20%20%20%20%20%20%20prop%3A%20%22operate%22%2C%0A%20%20%20%20%20%20%20%20render%3A%20%22buttons%22%2C%0A%20%20%20%20%20%20%20%20buttons%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20%22edit%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20props%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%20%22small%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20%22del%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20props%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%20%22small%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%20%20%7D%5D%2C%0A%20%20%20%20config%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20controlBtn%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20%22add%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3A%20%22del%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20openType%3A%20%22dialog%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20dialogWidth%3A%20%22600%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%7D)%0A%0A%20%20const%20searchData%20%3D%20ref(%7B%0A%20%20%20%20list%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22input%22%2C%0A%20%20%20%20%20%20%20%20control%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20modelValue%3A%20%22%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20name%3A%20%22text%22%2C%0A%20%20%20%20%20%20%20%20formItem%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E6%96%87%E6%9C%AC%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22radio%22%2C%0A%20%20%20%20%20%20%20%20control%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20modelValue%3A%20%22%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20name%3A%20%22checkbox%22%2C%0A%20%20%20%20%20%20%20%20formItem%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E6%80%A7%E5%88%AB%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E7%94%B7%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20%221%22%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E5%A5%B3%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20%222%22%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%2C%0A%20%20%20%20%20%20%20%20optionsType%3A%200%0A%20%20%20%20%20%20%7D%5D%2C%0A%20%20%20%20config%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20submitCancel%3A%20true%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%7D)%0A%0A%20%20const%20formData%20%3D%20ref(%7B%0A%20%20%20%20list%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22input%22%2C%0A%20%20%20%20%20%20%20%20control%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20modelValue%3A%20%22%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20name%3A%20%22text%22%2C%0A%20%20%20%20%20%20%20%20formItem%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E6%96%87%E6%9C%AC%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22radio%22%2C%0A%20%20%20%20%20%20%20%20control%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20modelValue%3A%20%22%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20name%3A%20%22checkbox%22%2C%0A%20%20%20%20%20%20%20%20formItem%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E6%80%A7%E5%88%AB%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E7%94%B7%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20%22%E7%94%B7%22%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%22%E5%A5%B3%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3A%20%22%E5%A5%B3%22%0A%20%20%20%20%20%20%20%20%20%20%7D%5D%2C%0A%20%20%20%20%20%20%20%20optionsType%3A%200%0A%20%20%20%20%20%20%7D%5D%2C%0A%20%20%20%20config%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20submitCancel%3A%20true%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%7D)%0A%0A%20%20%2F**%0A%20%20%20*%20%E5%88%97%E8%A1%A8%E6%8C%89%E9%92%AE%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6%0A%20%20%20*%20%40param%20key%20%E6%8C%89%E9%92%AE%E6%A0%87%E8%AF%86%0A%20%20%20*%20%40param%20row%20%E5%88%97%E8%A1%A8%E5%8F%B3%E5%88%99%E6%93%8D%E4%BD%9C%E6%8C%89%E9%92%AE%E4%BA%8B%E4%BB%B6%E6%97%B6%E4%B8%BA%E5%BD%93%E5%89%8D%E8%A1%8C%E6%95%B0%E6%8D%AE%EF%BC%9B%E5%88%97%E8%A1%A8%E5%8F%B3%E4%B8%8A%E6%96%B9%E6%8C%89%E9%92%AE%E6%97%B6%E4%B8%BA%E5%BD%93%E5%89%8D%E6%89%80%E5%8B%BE%E9%80%89%E7%9A%84%E8%A1%8Cid%0A%20%20%20*%20%40param%20close%20%E7%94%A8%E4%BA%8E%E5%85%B3%E9%97%AD%E5%BC%B9%E7%9A%84%E6%96%B9%E6%B3%95%0A%20%20%20*%2F%0A%20%20const%20listBtnClick%20%3D%20(key%3A%20string%2C%20row%3A%20any%2C%20close%3A%20any)%20%3D%3E%20%7B%0A%20%20%20%20closeFormFn.value%20%3D%20close%0A%20%20%20%20if%20(key%20%3D%3D%3D%20'edit')%20%7B%0A%20%20%20%20%20%20operateType.value%20%3D%20key%0A%20%20%20%20%20%20nextTick(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20formRef.value.setValue(row)%0A%20%20%20%20%20%20%7D)%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%2F%2F%20%E5%85%B3%E9%97%AD%E5%BC%B9%E7%AA%97%0A%20%20const%20closeForm%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20closeFormFn.value%20%26%26%20closeFormFn.value()%0A%20%20%7D%0A%20%20const%20afterSubmit%20%3D%20(_%3A%20any%2C%20success%3A%20boolean%2C%20type%3A%20string)%20%3D%3E%20%7B%0A%20%20%20%20if%20(type%20%3D%3D%3D%20'submit')%20%7B%0A%20%20%20%20%20%20if%20(success)%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20%E6%B7%BB%E5%8A%A0%E6%88%90%E5%8A%9F%EF%BC%8C%E5%88%B7%E6%96%B0%E5%88%97%E8%A1%A8%E6%95%B0%E6%8D%AE%E5%B9%B6%E5%85%B3%E9%97%AD%E5%BC%B9%E7%AA%97%0A%20%20%20%20%20%20%20%20tableListRef.value.getListData()%0A%20%20%20%20%20%20%20%20closeForm()%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20const%20formBtnClick%20%3D%20(type%3A%20string)%20%3D%3E%20%7B%0A%20%20%20%20if%20(type%20%3D%3D%3D%20'reset'%20%7C%7C%20type%20%3D%3D%3D%20'cancel')%20%7B%0A%20%20%20%20%20%20closeForm()%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20onMounted(()%3D%3E%7B%0A%20%20%20%20%2F%2F%E6%8F%90%E4%BE%9B%E4%BA%9B%E6%BC%94%E7%A4%BA%E6%95%B0%E6%8D%AE%0A%20%20%20%20tableListRef.value.setTableData(%5B%0A%20%20%20%20%20%20%7Btext%3A'%E5%BC%A0%E4%B8%89'%2Ccheckbox%3A'%E7%94%B7'%7D%2C%0A%20%20%20%20%20%20%7Btext%3A'%E6%9D%8E%E5%9B%9B'%2Ccheckbox%3A'%E5%A5%B3'%7D%2C%0A%20%20%20%20%5D)%0A%20%20%7D)%0A%3C%2Fscript%3E%0A`},{code:s(()=>[...n[0]||=[a(`pre`,{class:`language-xml`},[a(`code`,{class:`hljs`},[a(`span`,{class:`hljs-comment`},`<!-- created by weiXin:337547038 -->`),f(`
`),a(`span`,{class:`hljs-tag`},[f(`<`),a(`span`,{class:`hljs-name`},`template`),f(`>`)]),f(`
  `),a(`span`,{class:`hljs-tag`},[f(`<`),a(`span`,{class:`hljs-name`},`div`),f(`>`)]),f(`
    `),a(`span`,{class:`hljs-tag`},[f(`<`),a(`span`,{class:`hljs-name`},`ak-list`),f(`
            `),a(`span`,{class:`hljs-attr`},`ref`),f(`=`),a(`span`,{class:`hljs-string`},`"tableListRef"`),f(`
            `),a(`span`,{class:`hljs-attr`},`:api-key`),f(`=`),a(`span`,{class:`hljs-string`},`"{}"`),f(`
            `),a(`span`,{class:`hljs-attr`},`:search-data`),f(`=`),a(`span`,{class:`hljs-string`},`"searchData"`),f(`
            `),a(`span`,{class:`hljs-attr`},`:data`),f(`=`),a(`span`,{class:`hljs-string`},`"tableData"`),f(`
            @`),a(`span`,{class:`hljs-attr`},`btn-click`),f(`=`),a(`span`,{class:`hljs-string`},`"listBtnClick"`),f(`
    >`)]),f(`
      `),a(`span`,{class:`hljs-tag`},[f(`<`),a(`span`,{class:`hljs-name`},`ak-form`),f(`
              `),a(`span`,{class:`hljs-attr`},`ref`),f(`=`),a(`span`,{class:`hljs-string`},`"formRef"`),f(`
              `),a(`span`,{class:`hljs-attr`},`:data`),f(`=`),a(`span`,{class:`hljs-string`},`"formData"`),f(`
              `),a(`span`,{class:`hljs-attr`},`:operate-type`),f(`=`),a(`span`,{class:`hljs-string`},`"operateType"`),f(`
              `),a(`span`,{class:`hljs-attr`},`submit-url`),f(`=`),a(`span`,{class:`hljs-string`},`""`),f(`
              `),a(`span`,{class:`hljs-attr`},`:after`),f(`=`),a(`span`,{class:`hljs-string`},`"afterSubmit"`),f(`
              @`),a(`span`,{class:`hljs-attr`},`btn-click`),f(`=`),a(`span`,{class:`hljs-string`},`"formBtnClick"`),f(`
      />`)]),f(`
    `),a(`span`,{class:`hljs-tag`},[f(`</`),a(`span`,{class:`hljs-name`},`ak-list`),f(`>`)]),f(`
  `),a(`span`,{class:`hljs-tag`},[f(`</`),a(`span`,{class:`hljs-name`},`div`),f(`>`)]),f(`
`),a(`span`,{class:`hljs-tag`},[f(`</`),a(`span`,{class:`hljs-name`},`template`),f(`>`)]),f(`

`),a(`span`,{class:`hljs-tag`},[f(`<`),a(`span`,{class:`hljs-name`},`script`),f(),a(`span`,{class:`hljs-attr`},`setup`),f(),a(`span`,{class:`hljs-attr`},`lang`),f(`=`),a(`span`,{class:`hljs-string`},`"ts"`),f(`>`)]),a(`span`,{class:`language-javascript`},[f(`
  `),a(`span`,{class:`hljs-keyword`},`import`),f(` {nextTick, ref,onMounted} `),a(`span`,{class:`hljs-keyword`},`from`),f(),a(`span`,{class:`hljs-string`},`'vue'`),f(`

  `),a(`span`,{class:`hljs-keyword`},`const`),f(` formRef = `),a(`span`,{class:`hljs-title function_`},`ref`),f(`()
  `),a(`span`,{class:`hljs-keyword`},`const`),f(` tableListRef = `),a(`span`,{class:`hljs-title function_`},`ref`),f(`()
  `),a(`span`,{class:`hljs-keyword`},`const`),f(` closeFormFn = `),a(`span`,{class:`hljs-title function_`},`ref`),f(`()
  `),a(`span`,{class:`hljs-keyword`},`const`),f(` operateType = `),a(`span`,{class:`hljs-title function_`},`ref`),f(`(`),a(`span`,{class:`hljs-string`},`'add'`),f(`)

  `),a(`span`,{class:`hljs-keyword`},`const`),f(` tableData = `),a(`span`,{class:`hljs-title function_`},`ref`),f(`({
    `),a(`span`,{class:`hljs-attr`},`columns`),f(`: [
      {
        `),a(`span`,{class:`hljs-attr`},`label`),f(`: `),a(`span`,{class:`hljs-string`},`"多选"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`type`),f(`: `),a(`span`,{class:`hljs-string`},`"selection"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`prop`),f(`: `),a(`span`,{class:`hljs-string`},`"selection"`),f(`
      },
      {
        `),a(`span`,{class:`hljs-attr`},`prop`),f(`: `),a(`span`,{class:`hljs-string`},`"text"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`label`),f(`: `),a(`span`,{class:`hljs-string`},`"文本"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`help`),f(`: `),a(`span`,{class:`hljs-string`},`""`),f(`
      },
      {
        `),a(`span`,{class:`hljs-attr`},`prop`),f(`: `),a(`span`,{class:`hljs-string`},`"checkbox"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`label`),f(`: `),a(`span`,{class:`hljs-string`},`"性别"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`help`),f(`: `),a(`span`,{class:`hljs-string`},`""`),f(`
      },
      {
        `),a(`span`,{class:`hljs-attr`},`label`),f(`: `),a(`span`,{class:`hljs-string`},`"操作"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`prop`),f(`: `),a(`span`,{class:`hljs-string`},`"operate"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`render`),f(`: `),a(`span`,{class:`hljs-string`},`"buttons"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`buttons`),f(`: [
          {
            `),a(`span`,{class:`hljs-attr`},`key`),f(`: `),a(`span`,{class:`hljs-string`},`"edit"`),f(`,
            `),a(`span`,{class:`hljs-attr`},`props`),f(`:
                    {
                      `),a(`span`,{class:`hljs-attr`},`size`),f(`: `),a(`span`,{class:`hljs-string`},`"small"`),f(`
                    }
          },
          {
            `),a(`span`,{class:`hljs-attr`},`key`),f(`: `),a(`span`,{class:`hljs-string`},`"del"`),f(`,
            `),a(`span`,{class:`hljs-attr`},`props`),f(`:
                    {
                      `),a(`span`,{class:`hljs-attr`},`size`),f(`: `),a(`span`,{class:`hljs-string`},`"small"`),f(`
                    }
          }]
      }],
    `),a(`span`,{class:`hljs-attr`},`config`),f(`:
            {
              `),a(`span`,{class:`hljs-attr`},`controlBtn`),f(`: [
                {
                  `),a(`span`,{class:`hljs-attr`},`key`),f(`: `),a(`span`,{class:`hljs-string`},`"add"`),f(`
                },
                {
                  `),a(`span`,{class:`hljs-attr`},`key`),f(`: `),a(`span`,{class:`hljs-string`},`"del"`),f(`
                }],
              `),a(`span`,{class:`hljs-attr`},`openType`),f(`: `),a(`span`,{class:`hljs-string`},`"dialog"`),f(`,
              `),a(`span`,{class:`hljs-attr`},`dialogWidth`),f(`: `),a(`span`,{class:`hljs-string`},`"600"`),f(`
            }
  })

  `),a(`span`,{class:`hljs-keyword`},`const`),f(` searchData = `),a(`span`,{class:`hljs-title function_`},`ref`),f(`({
    `),a(`span`,{class:`hljs-attr`},`list`),f(`: [
      {
        `),a(`span`,{class:`hljs-attr`},`type`),f(`: `),a(`span`,{class:`hljs-string`},`"input"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`control`),f(`:
                {
                  `),a(`span`,{class:`hljs-attr`},`modelValue`),f(`: `),a(`span`,{class:`hljs-string`},`""`),f(`
                },
        `),a(`span`,{class:`hljs-attr`},`name`),f(`: `),a(`span`,{class:`hljs-string`},`"text"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`formItem`),f(`:
                {
                  `),a(`span`,{class:`hljs-attr`},`label`),f(`: `),a(`span`,{class:`hljs-string`},`"文本"`),f(`
                }
      },
      {
        `),a(`span`,{class:`hljs-attr`},`type`),f(`: `),a(`span`,{class:`hljs-string`},`"radio"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`control`),f(`:
                {
                  `),a(`span`,{class:`hljs-attr`},`modelValue`),f(`: `),a(`span`,{class:`hljs-string`},`""`),f(`
                },
        `),a(`span`,{class:`hljs-attr`},`name`),f(`: `),a(`span`,{class:`hljs-string`},`"checkbox"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`formItem`),f(`:
                {
                  `),a(`span`,{class:`hljs-attr`},`label`),f(`: `),a(`span`,{class:`hljs-string`},`"性别"`),f(`
                },
        `),a(`span`,{class:`hljs-attr`},`options`),f(`: [
          {
            `),a(`span`,{class:`hljs-attr`},`label`),f(`: `),a(`span`,{class:`hljs-string`},`"男"`),f(`,
            `),a(`span`,{class:`hljs-attr`},`value`),f(`: `),a(`span`,{class:`hljs-string`},`"1"`),f(`
          },
          {
            `),a(`span`,{class:`hljs-attr`},`label`),f(`: `),a(`span`,{class:`hljs-string`},`"女"`),f(`,
            `),a(`span`,{class:`hljs-attr`},`value`),f(`: `),a(`span`,{class:`hljs-string`},`"2"`),f(`
          }],
        `),a(`span`,{class:`hljs-attr`},`optionsType`),f(`: `),a(`span`,{class:`hljs-number`},`0`),f(`
      }],
    `),a(`span`,{class:`hljs-attr`},`config`),f(`:
            {
              `),a(`span`,{class:`hljs-attr`},`submitCancel`),f(`: `),a(`span`,{class:`hljs-literal`},`true`),f(`
            }
  })

  `),a(`span`,{class:`hljs-keyword`},`const`),f(` formData = `),a(`span`,{class:`hljs-title function_`},`ref`),f(`({
    `),a(`span`,{class:`hljs-attr`},`list`),f(`: [
      {
        `),a(`span`,{class:`hljs-attr`},`type`),f(`: `),a(`span`,{class:`hljs-string`},`"input"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`control`),f(`:
                {
                  `),a(`span`,{class:`hljs-attr`},`modelValue`),f(`: `),a(`span`,{class:`hljs-string`},`""`),f(`
                },
        `),a(`span`,{class:`hljs-attr`},`name`),f(`: `),a(`span`,{class:`hljs-string`},`"text"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`formItem`),f(`:
                {
                  `),a(`span`,{class:`hljs-attr`},`label`),f(`: `),a(`span`,{class:`hljs-string`},`"文本"`),f(`
                }
      },
      {
        `),a(`span`,{class:`hljs-attr`},`type`),f(`: `),a(`span`,{class:`hljs-string`},`"radio"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`control`),f(`:
                {
                  `),a(`span`,{class:`hljs-attr`},`modelValue`),f(`: `),a(`span`,{class:`hljs-string`},`""`),f(`
                },
        `),a(`span`,{class:`hljs-attr`},`name`),f(`: `),a(`span`,{class:`hljs-string`},`"checkbox"`),f(`,
        `),a(`span`,{class:`hljs-attr`},`formItem`),f(`:
                {
                  `),a(`span`,{class:`hljs-attr`},`label`),f(`: `),a(`span`,{class:`hljs-string`},`"性别"`),f(`
                },
        `),a(`span`,{class:`hljs-attr`},`options`),f(`: [
          {
            `),a(`span`,{class:`hljs-attr`},`label`),f(`: `),a(`span`,{class:`hljs-string`},`"男"`),f(`,
            `),a(`span`,{class:`hljs-attr`},`value`),f(`: `),a(`span`,{class:`hljs-string`},`"男"`),f(`
          },
          {
            `),a(`span`,{class:`hljs-attr`},`label`),f(`: `),a(`span`,{class:`hljs-string`},`"女"`),f(`,
            `),a(`span`,{class:`hljs-attr`},`value`),f(`: `),a(`span`,{class:`hljs-string`},`"女"`),f(`
          }],
        `),a(`span`,{class:`hljs-attr`},`optionsType`),f(`: `),a(`span`,{class:`hljs-number`},`0`),f(`
      }],
    `),a(`span`,{class:`hljs-attr`},`config`),f(`:
            {
              `),a(`span`,{class:`hljs-attr`},`submitCancel`),f(`: `),a(`span`,{class:`hljs-literal`},`true`),f(`
            }
  })

  `),a(`span`,{class:`hljs-comment`},[f(`/**
   * 列表按钮点击事件
   * `),a(`span`,{class:`hljs-doctag`},`@param`),f(` key 按钮标识
   * `),a(`span`,{class:`hljs-doctag`},`@param`),f(` row 列表右则操作按钮事件时为当前行数据；列表右上方按钮时为当前所勾选的行id
   * `),a(`span`,{class:`hljs-doctag`},`@param`),f(` close 用于关闭弹的方法
   */`)]),f(`
  `),a(`span`,{class:`hljs-keyword`},`const`),f(),a(`span`,{class:`hljs-title function_`},`listBtnClick`),f(` = (`),a(`span`,{class:`hljs-params`},`key: string, row: any, close: any`),f(`) => {
    closeFormFn.`),a(`span`,{class:`hljs-property`},`value`),f(` = close
    `),a(`span`,{class:`hljs-keyword`},`if`),f(` (key === `),a(`span`,{class:`hljs-string`},`'edit'`),f(`) {
      operateType.`),a(`span`,{class:`hljs-property`},`value`),f(` = key
      `),a(`span`,{class:`hljs-title function_`},`nextTick`),f(`(`),a(`span`,{class:`hljs-function`},`() =>`),f(` {
        formRef.`),a(`span`,{class:`hljs-property`},`value`),f(`.`),a(`span`,{class:`hljs-title function_`},`setValue`),f(`(row)
      })
    }
  }
  `),a(`span`,{class:`hljs-comment`},`// 关闭弹窗`),f(`
  `),a(`span`,{class:`hljs-keyword`},`const`),f(),a(`span`,{class:`hljs-title function_`},`closeForm`),f(` = (`),a(`span`,{class:`hljs-params`}),f(`) => {
    closeFormFn.`),a(`span`,{class:`hljs-property`},`value`),f(` && closeFormFn.`),a(`span`,{class:`hljs-title function_`},`value`),f(`()
  }
  `),a(`span`,{class:`hljs-keyword`},`const`),f(),a(`span`,{class:`hljs-title function_`},`afterSubmit`),f(` = (`),a(`span`,{class:`hljs-params`},`_: any, success: boolean, type: string`),f(`) => {
    `),a(`span`,{class:`hljs-keyword`},`if`),f(` (type === `),a(`span`,{class:`hljs-string`},`'submit'`),f(`) {
      `),a(`span`,{class:`hljs-keyword`},`if`),f(` (success) {
        `),a(`span`,{class:`hljs-comment`},`// 添加成功，刷新列表数据并关闭弹窗`),f(`
        tableListRef.`),a(`span`,{class:`hljs-property`},`value`),f(`.`),a(`span`,{class:`hljs-title function_`},`getListData`),f(`()
        `),a(`span`,{class:`hljs-title function_`},`closeForm`),f(`()
      }
    }
  }

  `),a(`span`,{class:`hljs-keyword`},`const`),f(),a(`span`,{class:`hljs-title function_`},`formBtnClick`),f(` = (`),a(`span`,{class:`hljs-params`},`type: string`),f(`) => {
    `),a(`span`,{class:`hljs-keyword`},`if`),f(` (type === `),a(`span`,{class:`hljs-string`},`'reset'`),f(` || type === `),a(`span`,{class:`hljs-string`},`'cancel'`),f(`) {
      `),a(`span`,{class:`hljs-title function_`},`closeForm`),f(`()
    }
  }

  `),a(`span`,{class:`hljs-title function_`},`onMounted`),f(`(`),a(`span`,{class:`hljs-function`},`()=>`),f(`{
    `),a(`span`,{class:`hljs-comment`},`//提供些演示数据`),f(`
    tableListRef.`),a(`span`,{class:`hljs-property`},`value`),f(`.`),a(`span`,{class:`hljs-title function_`},`setTableData`),f(`([
      {`),a(`span`,{class:`hljs-attr`},`text`),f(`:`),a(`span`,{class:`hljs-string`},`'张三'`),f(`,`),a(`span`,{class:`hljs-attr`},`checkbox`),f(`:`),a(`span`,{class:`hljs-string`},`'男'`),f(`},
      {`),a(`span`,{class:`hljs-attr`},`text`),f(`:`),a(`span`,{class:`hljs-string`},`'李四'`),f(`,`),a(`span`,{class:`hljs-attr`},`checkbox`),f(`:`),a(`span`,{class:`hljs-string`},`'女'`),f(`},
    ])
  })
`)]),a(`span`,{class:`hljs-tag`},[f(`</`),a(`span`,{class:`hljs-name`},`script`),f(`>`)]),f(`
`)])],-1)]]),default:s(()=>[i(m)]),_:1}),n[2]||=u(`<p>在点击按钮弹出对话框时，同时带有关闭弹窗的方法</p><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> <span class="hljs-title function_">listBtnClick</span> = (<span class="hljs-params">key: string, row: any, close: any</span>) =&gt; {
    <span class="hljs-comment">// 这里close为关闭弹窗的方法，如</span>
    <span class="hljs-comment">// closeFn.value=close</span>
    <span class="hljs-comment">// 在需要关闭弹窗时使用closeFn.value&amp;&amp;closeFn.value()即可关闭</span>
  }</code></pre><p>为了更方便对弹窗作设置，还可以通过<code>pinia</code>对弹窗作设置及关闭</p><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">import</span> {useListDialogForm} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@/store/list&#39;</span>
<span class="hljs-keyword">import</span> {getCurrentInstance} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">const</span> instance = <span class="hljs-title function_">getCurrentInstance</span>()
<span class="hljs-keyword">const</span> formStore = <span class="hljs-title function_">useListDialogForm</span>(instance.<span class="hljs-property">uid</span>)() <span class="hljs-comment">// 这里需传下唯一的id，自定或手动设置都可以</span>
<span class="hljs-title function_">provide</span>(<span class="hljs-string">&#39;akListDialogForm&#39;</span>, formStore)
<span class="hljs-comment">// 完成上面配置即可使用</span>
formStore.<span class="hljs-title function_">setTitle</span>(<span class="hljs-string">&#39;弹窗窗口标题&#39;</span>)
formStore.<span class="hljs-title function_">setVisible</span>(<span class="hljs-literal">false</span>) <span class="hljs-comment">//关闭弹窗</span>
formStore.<span class="hljs-title function_">setWidth</span>(<span class="hljs-string">&#39;800px&#39;</span>) <span class="hljs-comment">//设置弹窗宽度</span></code></pre><p>详细配置如：</p><pre class="language-javascript"><code class="hljs"><span class="hljs-keyword">const</span> buttons=[
  {
    <span class="hljs-comment">//我们内置了常见的add、edit、detail、del、export按钮，只需按约定的key值设置即可快速设置</span>
    <span class="hljs-attr">key</span>:<span class="hljs-string">&#39;add&#39;</span>
  },
  {
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
      <span class="hljs-comment">//可使用return false阻止自定义按钮事件</span>
    },
    <span class="hljs-comment">// 按钮是否显示，true隐藏 false显示</span>
    <span class="hljs-attr">display</span>: <span class="hljs-function">(<span class="hljs-params">row: { [key: string]: any }</span>) =&gt;</span>{
      <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    },
    <span class="hljs-comment">// 按钮是否禁用，true禁用</span>
    <span class="hljs-attr">disabled</span>: <span class="hljs-function">(<span class="hljs-params">row: { [key: string]: any }</span>) =&gt;</span> {
      <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
    },
    <span class="hljs-comment">// 自定义el-button属性</span>
    <span class="hljs-attr">props</span>: {}
  }
]</code></pre>`,6)]))}};export{g as default};