"use strict";(self.webpackChunk_coreui_bootstrap_vue_docs=self.webpackChunk_coreui_bootstrap_vue_docs||[]).push([[55],{69030:(a,n,s)=>{s.r(n),s.d(n,{default:()=>j});var t=s(27875);const p=(0,t._)("h2",{id:"examples",tabindex:"-1"},[(0,t.Uk)("Examples "),(0,t._)("a",{class:"anchor-link",href:"#examples","aria-hidden":"true"},"#")],-1),e=(0,t._)("p",null,"Hover over the links below to see tooltips:",-1),o={class:"docs-example border rounded-top p-4"},l={class:"text-medium-emphasis"},c=(0,t.Uk)(" Tight pants next level keffiyeh "),u=(0,t.Uk)(" you probably "),i=(0,t.Uk)(" haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel "),r=(0,t.Uk)(" have a "),k=(0,t.Uk)(" terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney''s cleanse vegan chambray. A really ironic artisan "),g=(0,t.Uk)(" whatever keytar "),d=(0,t.Uk)(" scenester farm-to-table banksy Austin "),m=(0,t.Uk)(" twitter handle "),b=(0,t.Uk)(" freegan cred raw denim single-origin coffee viral. "),v=(0,t.uE)('<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-medium-emphasis<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  Tight pants next level keffiyeh\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CLink</span> <span class="token attr-name">v-c-tooltip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>Tooltip text<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> you probably <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CLink</span><span class="token punctuation">&gt;</span></span>\n    haven&#39;t heard of them.\n  Photo booth beard raw denim letterpress vegan messenger\n  bag stumptown. Farm-to-table seitan, mcsweeney&#39;s fixie\n  sustainable quinoa 8-bit american apparel\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CLink</span> <span class="token attr-name">v-c-tooltip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>Tooltip text<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> have a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CLink</span><span class="token punctuation">&gt;</span></span>\n  terry richardson vinyl chambray. Beard stumptown,\n  cardigans banh mi lomo thundercats. Tofu biodiesel\n  williamsburg marfa, four loko mcsweeney&#39;&#39;s cleanse\n  vegan chambray. A really ironic artisan\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CLink</span> <span class="token attr-name">v-c-tooltip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>Tooltip text<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> whatever keytar <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CLink</span><span class="token punctuation">&gt;</span></span>\n  scenester farm-to-table banksy Austin\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CLink</span> <span class="token attr-name">v-c-tooltip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>Tooltip text<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> twitter handle <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CLink</span><span class="token punctuation">&gt;</span></span>\n  freegan cred raw denim single-origin coffee viral.\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="component" tabindex="-1">Component <a class="anchor-link" href="#component" aria-hidden="true">#</a></h3><p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. Directions are mirrored when using Bootstrap Vue in RTL.</p>',3),h={class:"docs-example border rounded-top p-4"},q=(0,t.Uk)("Tooltip on top"),f=(0,t.Uk)("Tooltip on right"),y=(0,t.Uk)("Tooltip on bottom"),w=(0,t.Uk)("Tooltip on left"),C=(0,t.uE)('<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CTooltip</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#toggler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ on }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Tooltip on top<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CTooltip</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CTooltip</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#toggler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ on }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Tooltip on right<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CTooltip</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CTooltip</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#toggler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ on }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Tooltip on bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CTooltip</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CTooltip</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#toggler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ on }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Tooltip on left<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CTooltip</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="directive" tabindex="-1">Directive <a class="anchor-link" href="#directive" aria-hidden="true">#</a></h3>',2),T={class:"docs-example border rounded-top p-4"},x=(0,t.Uk)("Tooltip on top"),_=(0,t.Uk)("Tooltip on right"),B=(0,t.Uk)("Tooltip on bottom"),V=(0,t.Uk)("Tooltip on left"),U=(0,t.uE)('<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-c-tooltip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{content: <span class="token punctuation">&#39;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.<span class="token punctuation">&#39;</span>, placement: <span class="token punctuation">&#39;</span>top<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Tooltip on top<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-c-tooltip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{content: <span class="token punctuation">&#39;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.<span class="token punctuation">&#39;</span>, placement: <span class="token punctuation">&#39;</span>right<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Tooltip on right<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-c-tooltip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{content: <span class="token punctuation">&#39;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.<span class="token punctuation">&#39;</span>, placement: <span class="token punctuation">&#39;</span>bottom<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Tooltip on bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-c-tooltip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{content: <span class="token punctuation">&#39;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.<span class="token punctuation">&#39;</span>, placement: <span class="token punctuation">&#39;</span>left<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Tooltip on left<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="api" tabindex="-1">API <a class="anchor-link" href="#api" aria-hidden="true">#</a></h2><h3 id="ctooltip" tabindex="-1">CTooltip <a class="anchor-link" href="#ctooltip" aria-hidden="true">#</a></h3><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CTooltip <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@coreui/bootstrap-vue&#39;</span>\n<span class="token comment">// or</span>\n<span class="token keyword">import</span> CTooltip <span class="token keyword">from</span> <span class="token string">&#39;@coreui/bootstrap-vue/src/components/tooltip/CTooltip&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="props" tabindex="-1">Props <a class="anchor-link" href="#props" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><strong>content</strong></td><td>Content for your component. If you want to pass non-string value please use dedicated slot <code>&lt;template #content&gt;...&lt;/template&gt;</code></td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>offset</strong></td><td>Offset of the tooltip relative to its target.</td><td>array</td><td>-</td><td>[0, 0]</td></tr><tr><td><strong>placement</strong></td><td>Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.</td><td>Placement</td><td>-</td><td>&#39;top&#39;</td></tr><tr><td><strong>trigger</strong></td><td>Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.</td><td>string | string[]</td><td><code>&#39;click&#39;</code>, <code>&#39;focus&#39;</code>, <code>&#39;hover&#39;</code></td><td>&#39;hover&#39;</td></tr><tr><td><strong>visible</strong></td><td>Toggle the visibility of tooltip component.</td><td>boolean</td><td>-</td><td></td></tr></tbody></table><h4 id="events" tabindex="-1">Events <a class="anchor-link" href="#events" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Event name</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><strong>hide</strong></td><td>Callback fired when the component requests to be hidden.</td><td></td></tr><tr><td><strong>show</strong></td><td>Callback fired when the component requests to be shown.</td><td></td></tr></tbody></table>',8),D={},j=(0,s(94407).Z)(D,[["render",function(a,n){const s=(0,t.up)("CLink"),D=(0,t.up)("CButton"),j=(0,t.up)("CTooltip"),L=(0,t.Q2)("c-tooltip");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,e,(0,t._)("div",o,[(0,t._)("p",l,[c,(0,t.wy)(((0,t.wg)(),(0,t.j4)(s,null,{default:(0,t.w5)((()=>[u])),_:1})),[[L,"Tooltip text"]]),i,(0,t.wy)(((0,t.wg)(),(0,t.j4)(s,null,{default:(0,t.w5)((()=>[r])),_:1})),[[L,"Tooltip text"]]),k,(0,t.wy)(((0,t.wg)(),(0,t.j4)(s,null,{default:(0,t.w5)((()=>[g])),_:1})),[[L,"Tooltip text"]]),d,(0,t.wy)(((0,t.wg)(),(0,t.j4)(s,null,{default:(0,t.w5)((()=>[m])),_:1})),[[L,"Tooltip text"]]),b])]),v,(0,t._)("div",h,[(0,t.Wm)(j,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus",placement:"top"},{toggler:(0,t.w5)((({on:a})=>[(0,t.Wm)(D,(0,t.dG)({color:"secondary"},(0,t.mx)(a)),{default:(0,t.w5)((()=>[q])),_:2},1040)])),_:1}),(0,t.Wm)(j,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus",placement:"right"},{toggler:(0,t.w5)((({on:a})=>[(0,t.Wm)(D,(0,t.dG)({color:"secondary"},(0,t.mx)(a)),{default:(0,t.w5)((()=>[f])),_:2},1040)])),_:1}),(0,t.Wm)(j,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus",placement:"bottom"},{toggler:(0,t.w5)((({on:a})=>[(0,t.Wm)(D,(0,t.dG)({color:"secondary"},(0,t.mx)(a)),{default:(0,t.w5)((()=>[y])),_:2},1040)])),_:1}),(0,t.Wm)(j,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus",placement:"left"},{toggler:(0,t.w5)((({on:a})=>[(0,t.Wm)(D,(0,t.dG)({color:"secondary"},(0,t.mx)(a)),{default:(0,t.w5)((()=>[w])),_:2},1040)])),_:1})]),C,(0,t._)("div",T,[(0,t.wy)(((0,t.wg)(),(0,t.j4)(D,{color:"secondary"},{default:(0,t.w5)((()=>[x])),_:1})),[[L,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",placement:"top"}]]),(0,t.wy)(((0,t.wg)(),(0,t.j4)(D,{color:"secondary"},{default:(0,t.w5)((()=>[_])),_:1})),[[L,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",placement:"right"}]]),(0,t.wy)(((0,t.wg)(),(0,t.j4)(D,{color:"secondary"},{default:(0,t.w5)((()=>[B])),_:1})),[[L,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",placement:"bottom"}]]),(0,t.wy)(((0,t.wg)(),(0,t.j4)(D,{color:"secondary"},{default:(0,t.w5)((()=>[V])),_:1})),[[L,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",placement:"left"}]])]),U],64)}]])},25018:(a,n,s)=>{s.r(n),s.d(n,{data:()=>t});const t={key:"v-4d4ca1f6",path:"/components/tooltip.html",title:"Tooltip Component and Directive",lang:"en-US",frontmatter:{title:"Tooltip Component and Directive",name:"Bootstrap Vue Tooltip Component and Directive",description:"Documentation and examples for adding Bootstrap Vue Tooltips.",layout:"Docs"},excerpt:"",headers:[{level:2,title:"Examples",slug:"examples",children:[{level:3,title:"Component",slug:"component",children:[]},{level:3,title:"Directive",slug:"directive",children:[]}]},{level:2,title:"API",slug:"api",children:[{level:3,title:"CTooltip",slug:"ctooltip",children:[]}]}],filePathRelative:"components/tooltip.md",git:{updatedTime:null,contributors:[]}}}}]);