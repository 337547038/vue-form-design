import{J as r,i as o,M as c,P as d,c as h,d as u,L as m}from"./index.b4d3cd99.js";const l=o({components:{},setup(e){const n=[],s=c({});return{toggleCode:a=>{const t="vdpv_"+a;s[t+"Height"]===0?s[t+"Height"]=(n[a].value?n[a].value.offsetHeight:0)||0:s[t+"Height"]=0},...d(s)}}});l.$vd={matter:{},toc:[{content:"AKForm \u8868\u5355",anchor:"akform-\u8868\u5355",level:1},{content:"\u4F7F\u7528\u65B9\u5F0F",anchor:"\u4F7F\u7528\u65B9\u5F0F",level:2},{content:"API",anchor:"api",level:2},{content:"Props",anchor:"props",level:3},{content:"Events",anchor:"events",level:3},{content:"Methods",anchor:"methods",level:3},{content:"Slot",anchor:"slot",level:3},{content:"formData",anchor:"formdata",level:3}]};const i=l,j={class:"vuedoc"},f=m(`<h1 id="akform-\u8868\u5355" data-source-line="1"><a class="markdownIt-Anchor" href="#akform-\u8868\u5355">#</a> AKForm \u8868\u5355</h1><p data-source-line="3">\u9002\u7528\u4E8E\u5BFC\u51FAvue\u6587\u4EF6</p><h2 id="\u4F7F\u7528\u65B9\u5F0F" data-source-line="5"><a class="markdownIt-Anchor" href="#\u4F7F\u7528\u65B9\u5F0F">#</a> \u4F7F\u7528\u65B9\u5F0F</h2><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-html hljs--one-dark"><code>
<span class="hljs-tag">&lt;<span class="hljs-name">ak-form</span> <span class="hljs-attr">:formData</span>=<span class="hljs-string">&quot;formData&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ak-form</span>&gt;</span>
</code></pre><h2 id="api" data-source-line="12"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="props" data-source-line="14"><a class="markdownIt-Anchor" href="#props">#</a> Props</h3><table data-source-line="16"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>formData</td><td>object</td><td>\u8BBE\u8BA1\u7684\u751F\u6210\u8868\u5355\u6570\u636E</td></tr><tr><td>type</td><td>number/1</td><td>\u8868\u5355\u5C55\u793A\u6A21\u5F0F\uFF0C1\u65B0\u589E\uFF1B2\u4FEE\u6539\uFF1B3\u67E5\u770B\uFF08\u8868\u5355\u6A21\u5F0F\uFF09 \uFF1B4\u67E5\u770B\uFF1B 5\u8BBE\u8BA1</td></tr><tr><td>disabled</td><td>boolean/false</td><td>\u8868\u5355\u7981\u7528\u6A21\u5F0F\uFF0C\u7C7B\u4F3C\u4E8E\u8868\u5355\u6A21\u5F0F\u67E5\u770B</td></tr><tr><td>requestUrl</td><td>string/boolean</td><td>\u8868\u5355\u7F16\u8F91\u521D\u59CB\u6570\u636E\u52A0\u8F7D\u3002\u9002\u7528\u4E8E\u5BFC\u51FAvue\u6587\u4EF6</td></tr><tr><td>beforeRequest</td><td>function (params,route)</td><td>\u8BF7\u6C42\u7F16\u8F91\u6570\u636E\u524D\u53C2\u6570\u5904\u7406\u65B9\u6CD5\uFF0C\u53EF\u5BF9\u8BF7\u6C42\u53C2\u6570\u5904\u7406\u3002\u9002\u7528\u4E8E\u5BFC\u51FAvue\u6587\u4EF6\uFF0C<code>return false</code>\u65F6\u4E0D\u8BF7\u6C42</td></tr><tr><td>afterResponse</td><td>function/string</td><td>\u8BF7\u6C42\u7F16\u8F91\u6570\u636E\u5B8C\u6210\u540E\u6570\u636E\u5904\u7406\u65B9\u6CD5\u3002\u9002\u7528\u4E8E\u5BFC\u51FAvue\u6587\u4EF6\uFF0C<code>return false</code>\u963B\u6B62\u4E8B\u4EF6\u8FD0\u884C</td></tr><tr><td>addUrl</td><td>string</td><td>\u8868\u5355\u6570\u636E\u65B0\u589E\u63D0\u4EA4\u4FDD\u5B58url</td></tr><tr><td>editUrl</td><td>string</td><td>\u8868\u5355\u6570\u636E\u4FEE\u6539\u4FDD\u5B58\u63D0\u4EA4url</td></tr><tr><td>beforeSubmit</td><td>function (params,route)/string</td><td>\u8868\u5355\u63D0\u4EA4\u524D\u6570\u636E\u5904\u7406\u3002\u9002\u7528\u4E8E\u5BFC\u51FAvue\u6587\u4EF6\uFF0C<code>return false</code>\u65F6\u4E0D\u53D1\u9001\u8BF7\u6C42</td></tr><tr><td>afterSubmit</td><td>function(type,res)</td><td>\u8868\u5355\u63D0\u4EA4\u540E\uFF0C\u9ED8\u8BA4\u63D0\u793A\u63D0\u4EA4\u7ED3\u679C\uFF0C\u53EFreturn false\u963B\u6B62\u63D0\u793A\u3002res\u63A5\u53E3\u8FD4\u56DE\u53C2\u6570,type\u63D0\u4EA4\u7ED3\u679C\u7C7B\u578Bsuccess/fail</td></tr><tr><td>value</td><td>object</td><td>\u8868\u5355\u521D\u59CB\u503C\uFF0C\u540CsetValue</td></tr><tr><td>options</td><td>object</td><td>\u8868\u5355\u9009\u9879\u6570\u636E\uFF0C\u540CsetOptions\uFF0C\u4E0D\u7BA1\u9009\u9879\u914D\u7F6E\u5982\u4F55\u914D\u7F6E\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u90FD\u4F1A\u751F\u6548</td></tr><tr><td>dict</td><td>object</td><td>\u7528\u4E8E\u5339\u914D\u7684\u5B57\u5178\u6570\u636E\uFF0C\u4E00\u822C\u4E0D\u8BBE\u7F6E\uFF0C\u4ECE\u63A5\u53E3\u83B7\u53D6</td></tr></tbody></table><h3 id="events" data-source-line="31"><a class="markdownIt-Anchor" href="#events">#</a> Events</h3><table data-source-line="32"><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>btnClick</td><td>\u6309\u94AE\u7EC4\u4EF6\u70B9\u51FB\u4E8B\u4EF6</td></tr><tr><td>change</td><td>\u8868\u5355\u7EC4\u4EF6\u503C\u53D1\u751F\u53D8\u5316\u4E8B\u4EF6(key,value,model,data,tProp)\u3002key\uFF1A\u7EC4\u4EF6\u7684name\u503C\uFF0Cvalue\uFF1A\u7EC4\u4EF6\u5F53\u524D\u7684\u503C\uFF0Cmodel:\u5F53\u524D\u8868\u5355\u7684\u503C\uFF0CtProp:\u8868\u683C\u5185\u7EC4\u4EF6\u624D\u4F1A\u6709\u503C,data\u5F53\u524D\u7EC4\u4EF6\u6240\u5728\u7684list\u6570\u636E</td></tr></tbody></table><h3 id="methods" data-source-line="36"><a class="markdownIt-Anchor" href="#methods">#</a> Methods</h3><table data-source-line="38"><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>validate</td><td>\u8868\u5355\u6821\u9A8C\u65B9\u6CD5</td></tr><tr><td>getValue</td><td>\u7528\u4E8E\u83B7\u53D6\u8868\u5355\u7684\u503C</td></tr><tr><td>setValue</td><td>\u5BF9\u8868\u5355\u8BBE\u7F6E\u521D\u59CB\u503C(model,filter:boolean) filter=true\u65F6\u5C06\u4F1A\u8FC7\u6EE4\u6389model\u4E2D\u4E0D\u5C5E\u4E8E\u5F53\u524D\u8868\u5355\u7684\u5B57\u6BB5</td></tr><tr><td>setOptions</td><td>\u5BF9\u8868\u5355\u9009\u62E9\u9879\u5FEB\u901F\u8BBE\u7F6E</td></tr><tr><td>resetFields</td><td>\u91CD\u7F6E\u8868\u5355\u65B9\u6CD5</td></tr><tr><td>getData</td><td>\u52A0\u8F7D\u8868\u5355\u521D\u59CB\u6570\u636E(params:any)</td></tr><tr><td>submit</td><td>\u8868\u5355\u63D0\u4EA4</td></tr></tbody></table><p data-source-line="48">\u4E24\u4E2A\u5168\u5C40\u7279\u6B8A\u65B9\u6CD5</p><table data-source-line="50"><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>get[formName]ControlByName</td><td>\u7528\u4E8E\u6839\u636Ename\u503C\u83B7\u53D6formData\u4E2D\u7684\u6570\u636E\u9879(name:string)</td></tr><tr><td>get[formName]ValueByName</td><td>\u7528\u4E8E\u6839\u636Ename\u503C\u83B7\u53D6formData\u4E2D\u7684\u6570\u636E\u9879\u7684\u503C(name:string)</td></tr></tbody></table><h3 id="slot" data-source-line="56"><a class="markdownIt-Anchor" href="#slot">#</a> Slot</h3><table data-source-line="58"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>-</td></tr></tbody></table><h3 id="formdata" data-source-line="63"><a class="markdownIt-Anchor" href="#formdata">#</a> formData</h3><p data-source-line="65">\u4EE3\u7801\u7F16\u8F91\u8F93\u5165\u6846\u53EF\u652F\u6301<code>json</code>\u6216<code>javascript</code>\uFF0C\u521D\u59CB\u4F7F\u7528\u65F6\u53EF\u901A\u8FC7\u4FEE\u6539<code>/src/utils/form.ts</code>\u91CC\u7684<code>EDITTYPE</code>\u7684\u503C</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-javascript hljs--one-dark"><code>formData = {
  <span class="hljs-attr">list</span>: [
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;input1660637151831&quot;</span>, <span class="hljs-comment">// \u8868\u5355\u5143\u7D20\u552F\u4E00\u6807\u8BC6</span>
      <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;input&quot;</span>, <span class="hljs-comment">// \u8868\u5355\u5143\u7D20\u7C7B\u578B</span>
      <span class="hljs-attr">control</span>: <span class="hljs-comment">// \u5F53\u524D\u63A7\u4EF6\u7C7B\u578B\u7684\u6240\u6709\`props\`\u53C2\u6570\uFF0C\u8BE6\u89C1\`element-plus\`\u5BF9\u5E94\u7684\`props\`\u53C2\u6570</span>
        {
          <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&quot;&quot;</span>
        },
      <span class="hljs-attr">config</span>: <span class="hljs-comment">// \u5176\u4ED6\u4E00\u4E9B\u6269\u5C55\u914D\u7F6E\u4FE1\u606F</span>
        {
          <span class="hljs-attr">linkKey</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// \u5F00\u542F\u8054\u52A8</span>
          <span class="hljs-attr">linkValue</span>: <span class="hljs-string">&quot;$.name===1&quot;</span>, <span class="hljs-comment">// \u8054\u52A8\u8868\u8FBE\u5F0F\uFF0C\u5373\u5F53\u8868\u5355\u4E2D\u5B57\u6BB5\u6807\u8BC6\u4E3A\`name\`\u7684\u63A7\u4EF6\u503C\u4E3A\`1\`\u65F6\uFF0C\u5F53\u524D\u63A7\u4EF6\u624D\u663E\u793A</span>
          <span class="hljs-attr">editDisabled</span>: <span class="hljs-literal">true</span> <span class="hljs-comment">// \u7F16\u8F91\u72B6\u6001\u4E0B\u7981\u7528\uFF0C\u5373\u8868\u5355\u90E8\u5206\u5B57\u6BB5\u53EA\u80FD\u6DFB\u52A0\uFF0C\u4E0D\u5141\u8BB8\u7F16\u8F91\u65F6\u53EF\u4F7F\u7528\u6B64\u8BBE\u7F6E</span>
        },
      <span class="hljs-attr">customRules</span>: [], <span class="hljs-comment">// \u4F7F\u7528\u5FEB\u901F\u65B9\u6CD5\u6DFB\u52A0\u7684\u6821\u9A8C\u89C4\u5219\uFF0C\u4F1A\u81EA\u52A8\u5408\u5E76\u5230\`item.rules\`</span>
      <span class="hljs-attr">item</span>:<span class="hljs-comment">// \u7EC4\u4EF6el-form-item\u7684\u53C2\u6570\u914D\u7F6E</span>
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5355\u884C\u6587\u672C&quot;</span>,
          <span class="hljs-attr">rules</span>: [] <span class="hljs-comment">// \u6821\u9A8C\u89C4\u5219</span>
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
      <span class="hljs-attr">options</span>: [<span class="hljs-comment">// \u5355\u9009\u591A\u9009\u4E0B\u62C9\u7684\`option\`\u9009\u9879\u6570\u636E</span>
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u6807\u7B7E1&quot;</span>,
          <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;value1&quot;</span>
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u6807\u7B7E2&quot;</span>,
          <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;value2&quot;</span>
        }],
      <span class="hljs-attr">config</span>:
        {
          <span class="hljs-attr">optionsType</span>:<span class="hljs-number">0</span>, <span class="hljs-comment">// 0\u56FA\u5B9A\u9009\u9879\u30001\u6570\u636E\u6E90\u30002\u5B57\u5178</span>
          <span class="hljs-attr">optioinsFun</span>:<span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">//\u3000\u63A5\u53E3url\u3001\u65B9\u6CD5\u540D\u3001\u5B57\u5178key</span>
          <span class="hljs-attr">method</span>: <span class="hljs-string">&quot;get&quot;</span>, <span class="hljs-comment">// optionsType=1\u65F6\u7684\u6570\u636E\u8BF7\u6C42\u65B9\u5F0F\uFF0C\u9ED8\u8BA4post</span>
          <span class="hljs-attr">value</span>:<span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// \u6307\u5B9Avalue\u7684\u5C5E\u6027,\u4EC5optionsType\uFF1D1\u6709\u6548</span>
          <span class="hljs-attr">label</span>:<span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// \u6307\u5B9Alabel\u7684\u5C5E\u6027,\u4EC5optionsType\uFF1D1\u6709\u6548</span>
          <span class="hljs-attr">debug</span>:<span class="hljs-literal">true</span> <span class="hljs-comment">// optionsType\uFF1D1\u65F6\u4F1A\u5C06\u8BF7\u6C42\u7ED3\u675F\u4FDD\u5B58\u5728sessionStorage,\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u8BF7\u6C42\uFF0Cdebug=true\u65F6\u4E0D\u4FDD\u5B58\u65B9\u4FBF\u8C03\u8BD5</span>
        },
      <span class="hljs-attr">item</span>:
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u4E0B\u62C9\u9009\u62E9\u6846&quot;</span>
        }
    }],
  <span class="hljs-attr">form</span>:<span class="hljs-comment">// \u8868\u5355\u914D\u7F6E\u4FE1\u606F</span>
    {
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&quot;&quot;</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&quot;&quot;</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&quot;default&quot;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;form1660637148435&quot;</span>
    },
  <span class="hljs-attr">config</span>: {
    <span class="hljs-attr">addUrl</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// \u8868\u5355\u63D0\u4EA4\u4FDD\u5B58\u63A5\u53E3url</span>
    <span class="hljs-attr">editUrl</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// \u8868\u5355\u4FEE\u6539\u4FDD\u5B58\u63A5\u53E3url</span>
    <span class="hljs-attr">requestUrl</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// \u83B7\u53D6\u8868\u5355\u521D\u59CB\u6570\u636Eurl</span>
    <span class="hljs-attr">style</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// \u8868\u5355css\u6837\u5F0F\uFF0C\u76F8\u5F53\u4E8Escope</span>
    <span class="hljs-attr">hideField</span>: [], <span class="hljs-comment">// \u4F7F\u7528v-if\u9690\u85CF\u7684\u5B57\u6BB5\uFF0C\u7528\u4E8E\u4EA4\u4E92\u3002\u4EC5\u5728\u5BFC\u51FAvue\u65F6\u53EF\u901A\u8FC7\u81EA\u5B9A\u4E49\u65B9\u6CD5\u4FEE\u6539\uFF0C\u7EC4\u4EF6\u9700\u8BBE\u7F6Ename\u503C</span>
    <span class="hljs-attr">addLoad</span>: <span class="hljs-literal">false</span> <span class="hljs-comment">// \u65B0\u589E\u8868\u5355\u65F6\u662F\u5426\u4ECE\u63A5\u53E3\u52A0\u8F7D\u9ED8\u8BA4\u6570\u636E</span>
  },
  <span class="hljs-attr">events</span>: { <span class="hljs-comment">// \u540Cprops\u4E8B\u4EF6</span>
    <span class="hljs-attr">beforeRequest</span>: <span class="hljs-function">(<span class="hljs-params">data, route</span>) =&gt;</span> {
      <span class="hljs-keyword">return</span> data
    },
    <span class="hljs-attr">afterResponse</span>: <span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {
      <span class="hljs-keyword">return</span> res
    },
    <span class="hljs-comment">// afterResponse:&#39;formatTest&#39;, // \u4E5F\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\uFF0C\u5C06\u6267\u884C/utils/formatResutl\u91CC\u7684\u65B9\u6CD5\uFF0C\u503C\u4E3A\u65B9\u6CD5\u91CC\u7684key</span>
    <span class="hljs-attr">beforeSubmit</span>: <span class="hljs-function">(<span class="hljs-params">data, route</span>) =&gt;</span> {
      <span class="hljs-keyword">return</span> data
    },
    <span class="hljs-attr">afterSubmit</span>: <span class="hljs-function">(<span class="hljs-params">type,res</span>) =&gt;</span> {
      <span class="hljs-comment">// type=success/fail</span>
      <span class="hljs-built_in">console</span>.log(res)
    },
    <span class="hljs-attr">change</span>: <span class="hljs-function">(<span class="hljs-params">name, model</span>) =&gt;</span> {
      <span class="hljs-comment">// name\u5F53\u524D\u7EC4\u4EF6\u7684name,model\u5F53\u524D\u8868\u5355\u7684\u503C</span>
      <span class="hljs-keyword">return</span> model
    }
  }
}
</code></pre>`,20),g=[f];function b(e,n,s,p,a,t){return h(),u("div",j,g)}const v=r(i,[["render",b]]);export{v as default};
