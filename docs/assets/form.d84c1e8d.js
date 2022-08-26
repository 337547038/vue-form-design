import{V as r,e as p,z as c,W as d,o as h,c as u,X as i}from"./index.7da35abc.js";const l=p({components:{},setup(e){const n=[],s=c({});return{toggleCode:t=>{const a="vdpv_"+t;s[a+"Height"]===0?s[a+"Height"]=(n[t].value?n[t].value.offsetHeight:0)||0:s[a+"Height"]=0},...d(s)}}});l.$vd={matter:{},toc:[{content:"AKForm \u8868\u5355",anchor:"akform-\u8868\u5355",level:1},{content:"API",anchor:"api",level:2},{content:"Props",anchor:"props",level:3},{content:"Methods",anchor:"methods",level:3},{content:"Provide",anchor:"provide",level:3},{content:"Slot",anchor:"slot",level:3},{content:"formData",anchor:"formdata",level:3},{content:"formData \u65B9\u6CD5",anchor:"formdata-\u65B9\u6CD5",level:3}]};const m=l,j={class:"vuedoc"},f=i(`<h1 id="akform-\u8868\u5355" data-source-line="1"><a class="markdownIt-Anchor" href="#akform-\u8868\u5355">#</a> AKForm \u8868\u5355</h1><p data-source-line="3">\u9002\u7528\u4E8E\u5BFC\u51FAvue\u6587\u4EF6</p><h2 id="api" data-source-line="5"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="props" data-source-line="7"><a class="markdownIt-Anchor" href="#props">#</a> Props</h3><table data-source-line="9"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>formData</td><td>object</td><td>\u8BBE\u8BA1\u7684\u751F\u6210\u8868\u5355\u6570\u636E</td></tr><tr><td>type</td><td>number/1</td><td>\u8868\u5355\u5C55\u793A\u6A21\u5F0F\uFF0C1\u65B0\u589E\uFF1B2\u67E5\u770B\uFF08\u8868\u5355\u6A21\u5F0F\uFF09 \uFF1B3\u67E5\u770B\uFF1B 4\u8BBE\u8BA1</td></tr><tr><td>isEdit</td><td>boolean/false</td><td>\u7F16\u8F91\u72B6\u6001\uFF0Ctype=1\u65B0\u589E\u6A21\u5F0F\u4E0B\u6709\u7F16\u8F91\u72B6\u6001\uFF0C\u4E3B\u8981\u7528\u4E8E\u63A7\u5236\u7F16\u8F91\u6A21\u5F0F\u4E0B\u67D0\u4E9B\u5B57\u6BB5\u7684\u7981\u7528\u72B6\u6001\uFF0C\u5373\u53EF\u65B0\u589E\u4F46\u4E0D\u80FD\u4FEE\u6539</td></tr><tr><td>disabled</td><td>boolean/false</td><td>\u8868\u5355\u7981\u7528\u6A21\u5F0F\uFF0C\u7C7B\u4F3C\u4E8E\u8868\u5355\u6A21\u5F0F\u67E5\u770B</td></tr><tr><td>requestUrl</td><td>string/boolean</td><td>\u8868\u5355\u7F16\u8F91\u521D\u59CB\u6570\u636E\u52A0\u8F7D\uFF0C\u9ED8\u8BA4<code>getFormContent</code>\u3002\u9002\u7528\u4E8E\u5BFC\u51FAvue\u6587\u4EF6</td></tr><tr><td>beforeRequest</td><td>function</td><td>\u8BF7\u6C42\u7F16\u8F91\u6570\u636E\u524D\u53C2\u6570\u5904\u7406\u65B9\u6CD5\uFF0C\u53EF\u5BF9\u8BF7\u6C42\u53C2\u6570\u5904\u7406\uFF0C<code>requestUrl</code>\u4E3A<code>true</code>\u65F6\u3002\u9002\u7528\u4E8E\u5BFC\u51FAvue\u6587\u4EF6</td></tr><tr><td>afterResponse</td><td>function</td><td>\u8BF7\u6C42\u7F16\u8F91\u6570\u636E\u5B8C\u6210\u540E\u6570\u636E\u5904\u7406\u65B9\u6CD5\uFF0C<code>requestUrl</code>\u4E3A<code>true</code>\u65F6\u3002\u9002\u7528\u4E8E\u5BFC\u51FAvue\u6587\u4EF6</td></tr><tr><td>submitUrl</td><td>string/boolean</td><td>\u8868\u5355\u63D0\u4EA4\u4FDD\u5B58\u63A5\u53E3\uFF0C\u7C7B\u4F3C\u4E8E<code>requestUrl</code>\uFF0C\u5728\u914D\u7F6E\u6709\u8868\u5355\u63D0\u4EA4\u6309\u94AE\u65F6\u6709\u6548\u3002\u9002\u7528\u4E8E\u5BFC\u51FAvue\u6587\u4EF6</td></tr><tr><td>beforeSubmit</td><td>function</td><td>\u8868\u5355\u63D0\u4EA4\u524D\u6570\u636E\u5904\u7406\uFF0C\u4EC5\u5728<code>submitUrl</code>\u4E3A<code>true</code>\u65F6\u3002\u9002\u7528\u4E8E\u5BFC\u51FAvue\u6587\u4EF6</td></tr><tr><td>afterSubmit</td><td>function</td><td>\u8868\u5355\u63D0\u4EA4\u6210\u529F\u5904\u7406\u65B9\u6CD5\u3002\u9002\u7528\u4E8E\u5BFC\u51FAvue\u6587\u4EF6</td></tr><tr><td>value</td><td>object</td><td>\u8868\u5355\u521D\u59CB\u503C\uFF0C\u540CsetValue</td></tr><tr><td>options</td><td>object</td><td>\u8868\u5355\u9009\u9879\u6570\u636E\uFF0C\u540CsetOptions\uFF0C\u4E0D\u7BA1\u9009\u9879\u914D\u7F6E\u5982\u4F55\u914D\u7F6E\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u90FD\u4F1A\u751F\u6548</td></tr></tbody></table><h3 id="methods" data-source-line="24"><a class="markdownIt-Anchor" href="#methods">#</a> Methods</h3><table data-source-line="26"><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>validate</td><td>\u8868\u5355\u6821\u9A8C\u65B9\u6CD5</td></tr><tr><td>getValue</td><td>\u7528\u4E8E\u83B7\u53D6\u8868\u5355\u7684\u503C</td></tr><tr><td>setValue</td><td>\u5BF9\u8868\u5355\u8BBE\u7F6E\u521D\u59CB\u503C</td></tr><tr><td>setOptions</td><td>\u5BF9\u8868\u5355\u9009\u62E9\u9879\u5FEB\u901F\u8BBE\u7F6E</td></tr><tr><td>resetFields</td><td>\u91CD\u7F6E\u8868\u5355\u65B9\u6CD5</td></tr></tbody></table><h3 id="provide" data-source-line="34"><a class="markdownIt-Anchor" href="#provide">#</a> Provide</h3><table data-source-line="36"><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>AKControlChange</td><td>\u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6\uFF0C\u8FD4\u56DE{key, value, data}</td></tr></tbody></table><h3 id="slot" data-source-line="40"><a class="markdownIt-Anchor" href="#slot">#</a> Slot</h3><table data-source-line="42"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>-</td></tr></tbody></table><h3 id="formdata" data-source-line="46"><a class="markdownIt-Anchor" href="#formdata">#</a> formData</h3><p data-source-line="48">\u4EE3\u7801\u7F16\u8F91\u8F93\u5165\u6846\u53EF\u652F\u6301<code>json</code>\u6216<code>javascript</code>\uFF0C\u521D\u59CB\u4F7F\u7528\u65F6\u53EF\u901A\u8FC7\u4FEE\u6539<code>/src/utils/form.ts</code>\u91CC\u7684<code>EDITTYPE</code>\u7684\u503C</p><h3 id="formdata-\u65B9\u6CD5" data-source-line="50"><a class="markdownIt-Anchor" href="#formdata-\u65B9\u6CD5">#</a> formData \u65B9\u6CD5</h3><p data-source-line="51">get[formName]ControlByName() \u7528\u4E8E\u6839\u636Ename\u503C\u83B7\u53D6formData\u4E2D\u7684\u6570\u636E\u9879\uFF0C\u4F7F\u7528\u65B9\u6CD5\u53EF\u89C1\u8868\u5355\u793A\u4F8B</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-javascript hljs--one-dark"><code>formData = {
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
          <span class="hljs-attr">linkKey</span>: <span class="hljs-string">&quot;radio&quot;</span>, <span class="hljs-comment">// \u8054\u52A8\u6807\u8BC6</span>
          <span class="hljs-attr">linkValue</span>: <span class="hljs-string">&quot;2&quot;</span>, <span class="hljs-comment">// \u8054\u52A8\u503C\uFF0C\u5373\u5F53\u8868\u5355\u4E2D\`name=linkKey\`\u7684\u63A7\u4EF6\u503C\u4E3A\`linkValue\`\u65F6\uFF0C\u5F53\u524D\u63A7\u4EF6\u624D\u663E\u793A</span>
          <span class="hljs-attr">editDisabled</span>: <span class="hljs-literal">true</span> <span class="hljs-comment">// \u7F16\u8F91\u72B6\u6001\u4E0B\u7981\u7528\uFF0C\u5373\u8868\u5355\u90E8\u5206\u5B57\u6BB5\u53EA\u80FD\u6DFB\u52A0\uFF0C\u4E0D\u5141\u8BB8\u7F16\u8F91\u65F6\u53EF\u4F7F\u7528\u6B64\u8BBE\u7F6E</span>
        },
      <span class="hljs-attr">customRules</span>: [], <span class="hljs-comment">// \u4F7F\u7528\u5FEB\u901F\u65B9\u6CD5\u6DFB\u52A0\u7684\u6821\u9A8C\u89C4\u5219\uFF0C\u4F1A\u81EA\u52A8\u5408\u5E76\u5230\`item.rules\`</span>
      <span class="hljs-attr">item</span>:<span class="hljs-comment">// \u7EC4\u4EF6el-form-item\u7684\u53C2\u6570\u914D\u7F6E</span>
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5355\u884C\u6587\u672C&quot;</span>,
          <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span>,
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
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u6807\u7B7E3&quot;</span>,
          <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;value3&quot;</span>
        }],
      <span class="hljs-attr">config</span>:
        {
          <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;async&quot;</span>, <span class="hljs-comment">// \`options\`\u6570\u636E\u6765\u6E90\u65B9\u5F0F\`async\`\u52A8\u6001\u9009\u9879\uFF0C\`fixed\`\u56FA\u5B9A\u9009\u9879</span>
          <span class="hljs-attr">source</span>: <span class="hljs-number">0</span>, <span class="hljs-comment">// \u52A8\u6001\u9009\u9879\u65F6 0\u6570\u636E\u6E90\uFF0C1\u65B9\u6CD5\u51FD\u6570\uFF0C2\u63A5\u53E3\u6570\u636Edict\u5B57\u5178</span>
          <span class="hljs-attr">request</span>: <span class="hljs-string">&quot;get&quot;</span>, <span class="hljs-comment">// source=0\u65F6\u7684\u6570\u636E\u8BF7\u6C42\u65B9\u5F0F</span>
          <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&quot;1&quot;</span> <span class="hljs-comment">// \u65B9\u6CD5\u51FD\u6570\u540D\u6216\u8BF7\u6C42url</span>
        },
      <span class="hljs-attr">item</span>:
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u4E0B\u62C9\u9009\u62E9\u6846&quot;</span>,
          <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span>
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
    <span class="hljs-attr">style</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// \u8868\u5355css\u6837\u5F0F\uFF0C\u76F8\u5F53\u4E8Escope</span>
    <span class="hljs-attr">hideField</span>: [], <span class="hljs-comment">// \u4F7F\u7528v-if\u9690\u85CF\u7684\u5B57\u6BB5\uFF0C\u7528\u4E8E\u4EA4\u4E92</span>
    <span class="hljs-attr">submitBtn</span>: {}, <span class="hljs-comment">// \u8868\u5355\u6309\u94AE</span>
    <span class="hljs-attr">addLoad</span>: <span class="hljs-literal">false</span> <span class="hljs-comment">// \u65B0\u589E\u8868\u5355\u65F6\u662F\u5426\u4ECE\u63A5\u53E3\u52A0\u8F7D\u9ED8\u8BA4\u6570\u636E</span>
  }
}
</code></pre>`,17),q=[f];function g(e,n,s,o,t,a){return h(),u("div",j,q)}const v=r(m,[["render",g]]);export{v as default};
