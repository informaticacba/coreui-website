"use strict";(self.webpackChunk_coreui_vue_docs=self.webpackChunk_coreui_vue_docs||[]).push([[2845],{41168:(n,a,s)=>{s.r(a),s.d(a,{default:()=>x});var t=s(27875);const p=(0,t._)("h2",{id:"example",tabindex:"-1"},[(0,t.Uk)("Example "),(0,t._)("a",{class:"anchor-link",href:"#example","aria-hidden":"true"},"#")],-1),e=(0,t._)("h3",{id:"component",tabindex:"-1"},[(0,t.Uk)("Component "),(0,t._)("a",{class:"anchor-link",href:"#component","aria-hidden":"true"},"#")],-1),o={class:"docs-example border rounded-top p-4"},c=(0,t.Uk)("Click to toggle popover"),u=(0,t.uE)('<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CPopover</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Popover title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>And here\\’s some amazing content. It’s very engaging. Right?<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#toggler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ on }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Click to toggle popover<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CPopover</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="directive" tabindex="-1">Directive <a class="anchor-link" href="#directive" aria-hidden="true">#</a></h3>',2),l={class:"docs-example border rounded-top p-4"},r=(0,t.Uk)("Click to toggle popover"),i=(0,t.uE)('<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-c-popover</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{header: <span class="token punctuation">&#39;</span>Popover title<span class="token punctuation">&#39;</span>, content: <span class="token punctuation">&#39;</span>And here\\’s some amazing content. It’s very engaging. Right?<span class="token punctuation">&#39;</span>, placement: <span class="token punctuation">&#39;</span>right<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Click to toggle popover<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="four-directions" tabindex="-1">Four directions <a class="anchor-link" href="#four-directions" aria-hidden="true">#</a></h3><p>Four options are available: top, right, bottom, and left aligned. Directions are mirrored when using CoreUI for Vue in RTL.</p><h4 id="component-1" tabindex="-1">Component <a class="anchor-link" href="#component-1" aria-hidden="true">#</a></h4>',4),k={class:"docs-example border rounded-top p-4"},d=(0,t.Uk)("Popover on top"),g=(0,t.Uk)("Popover on right"),m=(0,t.Uk)("Popover on bottom"),v=(0,t.Uk)("Popover on left"),b=(0,t.uE)('<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CPopover</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#toggler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ on }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Popover on top<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CPopover</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CPopover</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#toggler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ on }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Popover on right<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CPopover</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CPopover</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#toggler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ on }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Popover on bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CPopover</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CPopover</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#toggler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ on }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Popover on left<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CPopover</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h4 id="directive-1" tabindex="-1">Directive <a class="anchor-link" href="#directive-1" aria-hidden="true">#</a></h4>',2),h={class:"docs-example border rounded-top p-4"},q=(0,t.Uk)("Popover on top"),f=(0,t.Uk)("Popover on right"),C=(0,t.Uk)("Popover on bottom"),y=(0,t.Uk)("Popover on left"),P=(0,t.uE)('<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-c-popover</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{content: <span class="token punctuation">&#39;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.<span class="token punctuation">&#39;</span>, placement: <span class="token punctuation">&#39;</span>top<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Popover on top<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-c-popover</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{content: <span class="token punctuation">&#39;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.<span class="token punctuation">&#39;</span>, placement: <span class="token punctuation">&#39;</span>right<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Popover on right<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-c-popover</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{content: <span class="token punctuation">&#39;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.<span class="token punctuation">&#39;</span>, placement: <span class="token punctuation">&#39;</span>bottom<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Popover on bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-c-popover</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{content: <span class="token punctuation">&#39;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.<span class="token punctuation">&#39;</span>, placement: <span class="token punctuation">&#39;</span>left<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Popover on left<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="api" tabindex="-1">API <a class="anchor-link" href="#api" aria-hidden="true">#</a></h2><h3 id="cpopover" tabindex="-1">CPopover <a class="anchor-link" href="#cpopover" aria-hidden="true">#</a></h3><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CPopover <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue&#39;</span>\n<span class="token comment">// or</span>\n<span class="token keyword">import</span> CPopover <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue/src/components/popover/CPopover&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="props" tabindex="-1">Props <a class="anchor-link" href="#props" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><strong>content</strong></td><td>Content for your component. If you want to pass non-string value please use dedicated slot <code>&lt;template #content&gt;...&lt;/template&gt;</code></td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>offset</strong></td><td>Offset of the popover relative to its target.</td><td>array</td><td>-</td><td>[0, 8]</td></tr><tr><td><strong>placement</strong></td><td>Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.</td><td>Placement</td><td>-</td><td>&#39;top&#39;</td></tr><tr><td><strong>title</strong></td><td>Title for your component. If you want to pass non-string value please use dedicated slot <code>&lt;template #title&gt;...&lt;/template&gt;</code></td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>trigger</strong></td><td>Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.</td><td>string | string[]</td><td><code>&#39;click&#39;</code>, <code>&#39;focus&#39;</code>, <code>&#39;hover&#39;</code></td><td>&#39;click&#39;</td></tr><tr><td><strong>visible</strong></td><td>Toggle the visibility of popover component.</td><td>boolean</td><td>-</td><td></td></tr></tbody></table><h4 id="events" tabindex="-1">Events <a class="anchor-link" href="#events" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Event name</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><strong>hide</strong></td><td>Callback fired when the component requests to be hidden.</td><td></td></tr><tr><td><strong>show</strong></td><td>Callback fired when the component requests to be shown.</td><td></td></tr></tbody></table>',8),w={},x=(0,s(94407).Z)(w,[["render",function(n,a){const s=(0,t.up)("CButton"),w=(0,t.up)("CPopover"),x=(0,t.Q2)("c-popover");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,e,(0,t._)("div",o,[(0,t.Wm)(w,{title:"Popover title",content:"And here\\’s some amazing content. It’s very engaging. Right?",placement:"right"},{toggler:(0,t.w5)((({on:n})=>[(0,t.Wm)(s,(0,t.dG)({color:"danger",size:"lg"},(0,t.mx)(n)),{default:(0,t.w5)((()=>[c])),_:2},1040)])),_:1})]),u,(0,t._)("div",l,[(0,t.wy)((0,t.Wm)(s,{color:"danger",size:"lg"},{default:(0,t.w5)((()=>[r])),_:1},512),[[x,{header:"Popover title",content:"And here’s some amazing content. It’s very engaging. Right?",placement:"right"}]])]),i,(0,t._)("div",k,[(0,t.Wm)(w,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus",placement:"top"},{toggler:(0,t.w5)((({on:n})=>[(0,t.Wm)(s,(0,t.dG)({color:"secondary"},(0,t.mx)(n)),{default:(0,t.w5)((()=>[d])),_:2},1040)])),_:1}),(0,t.Wm)(w,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus",placement:"right"},{toggler:(0,t.w5)((({on:n})=>[(0,t.Wm)(s,(0,t.dG)({color:"secondary"},(0,t.mx)(n)),{default:(0,t.w5)((()=>[g])),_:2},1040)])),_:1}),(0,t.Wm)(w,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus",placement:"bottom"},{toggler:(0,t.w5)((({on:n})=>[(0,t.Wm)(s,(0,t.dG)({color:"secondary"},(0,t.mx)(n)),{default:(0,t.w5)((()=>[m])),_:2},1040)])),_:1}),(0,t.Wm)(w,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus",placement:"left"},{toggler:(0,t.w5)((({on:n})=>[(0,t.Wm)(s,(0,t.dG)({color:"secondary"},(0,t.mx)(n)),{default:(0,t.w5)((()=>[v])),_:2},1040)])),_:1})]),b,(0,t._)("div",h,[(0,t.wy)((0,t.Wm)(s,{color:"secondary"},{default:(0,t.w5)((()=>[q])),_:1},512),[[x,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",placement:"top"}]]),(0,t.wy)((0,t.Wm)(s,{color:"secondary"},{default:(0,t.w5)((()=>[f])),_:1},512),[[x,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",placement:"right"}]]),(0,t.wy)((0,t.Wm)(s,{color:"secondary"},{default:(0,t.w5)((()=>[C])),_:1},512),[[x,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",placement:"bottom"}]]),(0,t.wy)((0,t.Wm)(s,{color:"secondary"},{default:(0,t.w5)((()=>[y])),_:1},512),[[x,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",placement:"left"}]])]),P],64)}]])},74280:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-41a02ed8",path:"/components/popover.html",title:"Vue Popover Component and Directive",lang:"en-US",frontmatter:{title:"Vue Popover Component and Directive",name:"Popover",description:"Documentation and examples for adding Vue popovers, like those found in iOS, to any element on your site."},excerpt:"",headers:[{level:2,title:"Example",slug:"example",children:[{level:3,title:"Component",slug:"component",children:[]},{level:3,title:"Directive",slug:"directive",children:[]},{level:3,title:"Four directions",slug:"four-directions",children:[]}]},{level:2,title:"API",slug:"api",children:[{level:3,title:"CPopover",slug:"cpopover",children:[]}]}],filePathRelative:"components/popover.md",git:{updatedTime:1634240773e3,contributors:[{name:"Łukasz Holeczek",email:"lukasz@holeczek.pl",commits:1}]}}}}]);