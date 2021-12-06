"use strict";(self.webpackChunkcoreui_angular_dev=self.webpackChunkcoreui_angular_dev||[]).push([[592],{8243:(v,d,o)=>{o.d(d,{F:()=>i});var a=o(639);const l=["*"];let i=(()=>{class s{constructor(){}get hostClasses(){var e,t,h,p;const c={"position-absolute":!!this.position,"translate-middle":!!this.position,"top-0":null===(e=this.position)||void 0===e?void 0:e.includes("top"),"top-100":null===(t=this.position)||void 0===t?void 0:t.includes("bottom"),"start-100":null===(h=this.position)||void 0===h?void 0:h.includes("end"),"start-0":null===(p=this.position)||void 0===p?void 0:p.includes("start")};return Object.assign({badge:!0,[`bg-${this.color}`]:!!this.color,[`text-${this.textColor}`]:!!this.textColor,[`badge-${this.size}`]:!!this.size,[`${this.shape}`]:!!this.shape},this.position?c:{})}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=a.Xpm({type:s,selectors:[["c-badge"]],hostVars:2,hostBindings:function(e,t){2&e&&a.Tol(t.hostClasses)},inputs:{color:"color",position:"position",shape:"shape",size:"size",textColor:"textColor"},ngContentSelectors:l,decls:1,vars:0,template:function(e,t){1&e&&(a.F$t(),a.Hsn(0))},styles:[""]}),s})()},2080:(v,d,o)=>{o.d(d,{K:()=>i});var a=o(639);const l=["*"];let i=(()=>{class s{constructor(){this.role="group"}get hostClasses(){return{"btn-group":!this.vertical,"btn-group-vertical":this.vertical,[`btn-group-${this.size}`]:!!this.size}}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=a.Xpm({type:s,selectors:[["c-button-group"]],hostVars:3,hostBindings:function(e,t){2&e&&(a.uIk("role",t.role),a.Tol(t.hostClasses))},inputs:{size:"size",vertical:"vertical",role:"role"},ngContentSelectors:l,decls:1,vars:0,template:function(e,t){1&e&&(a.F$t(),a.Hsn(0))},encapsulation:2}),s})()},1295:(v,d,o)=>{o.d(d,{y:()=>i});var a=o(639);const l=["*"];let i=(()=>{class s{get hostClasses(){return{"card-body":!0}}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=a.Xpm({type:s,selectors:[["c-card-body"],["","c-card-body",""]],hostVars:2,hostBindings:function(e,t){2&e&&a.Tol(t.hostClasses)},ngContentSelectors:l,decls:1,vars:0,template:function(e,t){1&e&&(a.F$t(),a.Hsn(0))},encapsulation:2}),s})()},4543:(v,d,o)=>{o.d(d,{A:()=>i});var a=o(639);const l=["*"];let i=(()=>{class s{constructor(){}get hostClasses(){return{card:!0,[`bg-${this.color}`]:!!this.color,[`text-${this.textColor}`]:!!this.textColor}}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=a.Xpm({type:s,selectors:[["c-card"],["","c-card",""]],hostVars:2,hostBindings:function(e,t){2&e&&a.Tol(t.hostClasses)},inputs:{color:"color",textColor:"textColor"},ngContentSelectors:l,decls:1,vars:0,template:function(e,t){1&e&&(a.F$t(),a.Hsn(0))},encapsulation:2}),s})()},2589:(v,d,o)=>{o.d(d,{G:()=>l});var a=o(639);let l=(()=>{class i{constructor(){}get hostClasses(){return{"dropdown-divider":!0}}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275dir=a.lG2({type:i,selectors:[["","cDropdownDivider",""]],hostVars:2,hostBindings:function(n,e){2&n&&a.Tol(e.hostClasses)}}),i})()},5773:(v,d,o)=>{o.d(d,{H:()=>s});var a=o(639),l=o(9475),i=o(1990);let s=(()=>{class n{constructor(t,h,p,c){this.renderer=t,this.hostElement=h,this.dropdownService=p,this.dropdown=c}get ariaCurrent(){return this.active?"true":null}get hostClasses(){return{"dropdown-item":!0,active:this.active,disabled:this.disabled}}onClick(t){this.dropdownService.toggle({visible:"toggle",dropdown:this.dropdown})}ngAfterContentInit(){this.setAttributes(this.hostElement)}ngOnChanges(t){t.disabled&&this.setAttributes(this.hostElement)}setAttributes(t){this.disabled?(this.renderer.setAttribute(t.nativeElement,"aria-disabled","true"),this.renderer.setAttribute(t.nativeElement,"tabindex","-1")):(this.renderer.removeAttribute(t.nativeElement,"aria-disabled"),this.renderer.removeAttribute(t.nativeElement,"tabindex"))}}return n.\u0275fac=function(t){return new(t||n)(a.Y36(a.Qsj),a.Y36(a.SBq),a.Y36(l.V),a.Y36(i.J,8))},n.\u0275dir=a.lG2({type:n,selectors:[["","cDropdownItem",""]],hostVars:3,hostBindings:function(t,h){1&t&&a.NdJ("click",function(c){return h.onClick(c)}),2&t&&(a.uIk("aria-current",h.ariaCurrent),a.Tol(h.hostClasses))},inputs:{active:"active",disabled:"disabled"},exportAs:["cDropdownItem"],features:[a.TTD]}),n})()},9278:(v,d,o)=>{o.d(d,{y:()=>i});var a=o(9490),l=o(639);let i=(()=>{class s{constructor(e,t){this.renderer=e,this.hostElement=t,this.type="checkbox",this._indeterminate=!1}set indeterminate(e){const t=(0,a.Ig)(e);this._indeterminate!==t&&(this._indeterminate=t,this.renderer.setProperty(this.hostElement.nativeElement,"indeterminate",t))}get indeterminate(){return this._indeterminate}get hostClasses(){return{"form-check-input":!0,"is-valid":!0===this.valid,"is-invalid":!1===this.valid}}get checked(){var e,t;return null===(t=null===(e=this.hostElement)||void 0===e?void 0:e.nativeElement)||void 0===t?void 0:t.checked}}return s.\u0275fac=function(e){return new(e||s)(l.Y36(l.Qsj),l.Y36(l.SBq))},s.\u0275dir=l.lG2({type:s,selectors:[["input","cFormCheckInput",""]],hostVars:2,hostBindings:function(e,t){2&e&&l.Tol(t.hostClasses)},inputs:{type:"type",indeterminate:"indeterminate",valid:"valid"}}),s})()},5507:(v,d,o)=>{o.d(d,{F:()=>n});var a=o(9490),l=o(5314),i=o(639);const s=["*"];let n=(()=>{class e{constructor(){this._inline=!1,this.sizing="",this._switch=!1,this._formCheckClass=!0}set inline(h){this._inline=(0,a.Ig)(h)}get inline(){return this._inline}set switch(h){this._switch=(0,a.Ig)(h)}get switch(){return this._switch}get hostClasses(){return{"form-check":this.formCheckClass,"form-switch":this.switch,[`form-switch-${this.sizing}`]:this.switch&&!!this.sizing,"form-check-inline":this.inline}}get formCheckClass(){return this._formCheckClass}ngAfterContentInit(){this._formCheckClass=!!this.formCheckLabel}}return e.\u0275fac=function(h){return new(h||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["c-form-check"]],contentQueries:function(h,p,c){if(1&h&&i.Suo(c,l.N,5),2&h){let r;i.iGM(r=i.CRH())&&(p.formCheckLabel=r.first)}},hostVars:2,hostBindings:function(h,p){2&h&&i.Tol(p.hostClasses)},inputs:{inline:"inline",sizing:"sizing",switch:"switch"},exportAs:["cFormCheck"],ngContentSelectors:s,decls:1,vars:0,template:function(h,p){1&h&&(i.F$t(),i.Hsn(0))},encapsulation:2}),e})()},458:(v,d,o)=>{o.d(d,{o:()=>i});var a=o(9490),l=o(639);let i=(()=>{class s{constructor(e){this.hostElement=e,this.sizing="",this.type="text",this._plaintext=!1}set plaintext(e){this._plaintext=(0,a.Ig)(e)}get plaintext(){return this._plaintext}get hostClasses(){const e="range"===this.type;return{"form-control":!e&&!this.plaintext,"form-control-plaintext":!e&&this.plaintext,"form-control-color":"color"===this.type,"form-range":e,[`form-control-${this.sizing}`]:!!this.sizing&&!e,"is-valid":!0===this.valid,"is-invalid":!1===this.valid}}get hostTag(){return this.hostElement.nativeElement.tagName}ngOnInit(){const e=this.hostTag.toLowerCase();"input"!==e&&"textarea"!==e&&console.warn(`CoreUI [cFormControl] works with '<input>' and '<texarea>' - not with '<${e}>'`)}}return s.\u0275fac=function(e){return new(e||s)(l.Y36(l.SBq))},s.\u0275dir=l.lG2({type:s,selectors:[["input","cFormControl",""],["textarea","cFormControl",""]],hostVars:3,hostBindings:function(e,t){2&e&&(l.uIk("type",t.type),l.Tol(t.hostClasses))},inputs:{sizing:"sizing",valid:"valid",type:"type",plaintext:"plaintext"}}),s})()},3840:(v,d,o)=>{o.d(d,{$:()=>i});var a=o(9490),l=o(639);let i=(()=>{class s{constructor(){this._validated=!1}set validated(e){this._validated=(0,a.Ig)(e)}get validated(){return this._validated}get hostClasses(){return{"was-validated":this.validated}}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275dir=l.lG2({type:s,selectors:[["form","cForm",""]],hostVars:2,hostBindings:function(e,t){2&e&&l.Tol(t.hostClasses)},inputs:{validated:"validated"}}),s})()},5563:(v,d,o)=>{o.d(d,{j:()=>l});var a=o(639);let l=(()=>{class i{constructor(){}get hostClasses(){return{"input-group-text":!0}}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275dir=a.lG2({type:i,selectors:[["","cInputGroupText",""]],hostVars:2,hostBindings:function(n,e){2&n&&a.Tol(e.hostClasses)}}),i})()},478:(v,d,o)=>{o.d(d,{g:()=>i});var a=o(639);const l=["*"];let i=(()=>{class s{constructor(){this.sizing=""}get hostClasses(){return{"input-group":!0,[`input-group-${this.sizing}`]:!!this.sizing}}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=a.Xpm({type:s,selectors:[["c-input-group"]],hostVars:2,hostBindings:function(e,t){2&e&&a.Tol(t.hostClasses)},inputs:{sizing:"sizing"},ngContentSelectors:l,decls:1,vars:0,template:function(e,t){1&e&&(a.F$t(),a.Hsn(0))},encapsulation:2}),s})()},4423:(v,d,o)=>{o.d(d,{e:()=>s});var a=o(9490),l=o(639);const i=["*"];let s=(()=>{class n{constructor(){this.breakpoint="",this._fluid=!1}set fluid(t){this._fluid=(0,a.Ig)(t)}get fluid(){return this._fluid}get hostClasses(){return{container:!this.fluid&&!this.breakpoint,"container-fluid":this.fluid,[`container-${this.breakpoint}`]:!!this.breakpoint}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=l.Xpm({type:n,selectors:[["c-container"],["","cContainer",""]],hostVars:2,hostBindings:function(t,h){2&t&&l.Tol(h.hostClasses)},inputs:{breakpoint:"breakpoint",fluid:"fluid"},ngContentSelectors:i,decls:1,vars:0,template:function(t,h){1&t&&(l.F$t(),l.Hsn(0))},styles:["[_nghost-%COMP%]{display:block}"]}),n})()},6471:(v,d,o)=>{o.d(d,{A:()=>i});var a=o(8281),l=o(639);let i=(()=>{class s{constructor(){this.gutter={}}get hostClasses(){let e;if("number"==typeof this.gutter)return e=s.getGutterClasses({g:this.gutter}),e;{const{g:t,gx:h,gy:p}=Object.assign({},this.gutter);e=s.getGutterClasses({g:t,gx:h,gy:p})}return Object.keys(a.y).forEach(t=>{const h=this.gutter[t]?Object.assign({},this.gutter[t]):void 0;if(h){const p=s.getGutterClasses(h,t);e=Object.assign(Object.assign({},e),p)}}),e}static getGutterClasses(e,t){const{g:h,gx:p,gy:c}=Object.assign({},e),r=t?`-${t}`:"";return{[`g${r}-${h}`]:"number"==typeof h,[`gx${r}-${p}`]:"number"==typeof p,[`gy${r}-${c}`]:"number"==typeof c}}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275dir=l.lG2({type:s,selectors:[["","gutter",""]],hostVars:2,hostBindings:function(e,t){2&e&&l.Tol(t.hostClasses)},inputs:{gutter:"gutter"}}),s})()},1368:(v,d,o)=>{o.d(d,{O:()=>i});var a=o(9490),l=o(639);let i=(()=>{class s{constructor(e){this.hostElement=e,this._disabled=!1}get disabled(){return this._disabled}set disabled(e){this._disabled=(0,a.Ig)(e)}get isDisabled(){return this.disabled||null}get attrDisabled(){return this.disabled?"":null}get getTabindex(){return this.disabled?"-1":null}get ariaCurrent(){return!!this.active}get hostClasses(){const e=this.hostElement.nativeElement;return{"list-group-item":!0,"list-group-item-action":"A"===e.nodeName||"BUTTON"===e.nodeName,active:!!this.active,disabled:this.isDisabled,[`list-group-item-${this.color}`]:!!this.color}}}return s.\u0275fac=function(e){return new(e||s)(l.Y36(l.SBq))},s.\u0275dir=l.lG2({type:s,selectors:[["","cListGroupItem",""],["c-list-group-item"]],hostVars:6,hostBindings:function(e,t){2&e&&(l.uIk("aria-disabled",t.isDisabled)("disabled",t.attrDisabled)("tabindex",t.getTabindex)("aria-current",t.ariaCurrent),l.Tol(t.hostClasses))},inputs:{active:"active",color:"color",disabled:"disabled"},exportAs:["cListGroupItem"]}),s})()},7026:(v,d,o)=>{o.d(d,{X:()=>i});var a=o(9490),l=o(639);let i=(()=>{class s{constructor(){this._flush=!1}set flush(e){this._flush=(0,a.Ig)(e)}get flush(){return this._flush}get hostClasses(){return{"list-group":!0,"list-group-horizontal":!0===this.horizontal||""===this.horizontal,[`list-group-horizontal-${this.horizontal}`]:!!this.horizontal&&"boolean"!=typeof this.horizontal,"list-group-flush":this.flush}}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275dir=l.lG2({type:s,selectors:[["","cListGroup",""]],hostVars:2,hostBindings:function(e,t){2&e&&l.Tol(t.hostClasses)},inputs:{flush:"flush",horizontal:"horizontal"}}),s})()},6834:(v,d,o)=>{o.d(d,{k:()=>h});var a=o(8583),l=o(9222),i=o(639);const s=["popoverTemplate"],n=function(p){return{"popover-arrow":p}};let e=(()=>{class p{constructor(r){this.renderer=r,this.content="",this.visible=!1,this.role="tooltip"}get hostClasses(){return{popover:!0,fade:!0,show:this.visible,"bs-popover-auto":!0}}ngAfterViewInit(){setTimeout(()=>{this.updateView(this.content)})}ngOnChanges(r){r.content&&setTimeout(()=>{this.updateView(this.content)})}ngOnDestroy(){this.clear()}clear(){var r;null===(r=this.viewContainerRef)||void 0===r||r.clear(),this.textNode&&this.renderer.removeChild(this.textNode.parentNode,this.textNode)}updateView(r){if(this.clear(),r)if(r instanceof i.Rgc)this.viewContainerRef.createEmbeddedView(r);else{this.textNode=this.renderer.createText(r);const u=this.renderer.createElement("div");this.renderer.addClass(u,"popover-body"),this.renderer.appendChild(u,this.textNode),this.renderer.appendChild(this.viewContainerRef.element.nativeElement.parentNode,u)}}}return p.\u0275fac=function(r){return new(r||p)(i.Y36(i.Qsj))},p.\u0275cmp=i.Xpm({type:p,selectors:[["c-popover"]],viewQuery:function(r,u){if(1&r&&i.Gf(s,5,i.s_b),2&r){let m;i.iGM(m=i.CRH())&&(u.viewContainerRef=m.first)}},hostVars:4,hostBindings:function(r,u){2&r&&(i.uIk("id",u.id)("role",u.role),i.Tol(u.hostClasses))},inputs:{content:"content",visible:"visible",id:"id",role:"role"},features:[i.TTD],decls:4,vars:3,consts:[["data-popper-arrow","",3,"ngClass"],["popoverTemplate",""]],template:function(r,u){1&r&&(i.ynx(0),i._UZ(1,"div",0),i.GkF(2,null,1),i.BQk()),2&r&&(i.xp6(1),i.Q6J("ngClass",i.VKq(1,n,!!u.content)))},directives:[a.mk],encapsulation:2}),p})();var t=o(672);let h=(()=>{class p{constructor(r,u,m,g,_,f){this.document=r,this.renderer=u,this.hostElement=m,this.componentFactoryResolver=g,this.viewContainerRef=_,this.listenersService=f,this.content="",this.placement="top",this.trigger="hover",this._visible=!1,this._popperOptions={modifiers:[{name:"offset",options:{offset:[0,8]}}]}}set popperOptions(r){this._popperOptions=Object.assign(Object.assign(Object.assign({},this._popperOptions),{placement:this.placement}),r)}get popperOptions(){return Object.assign({placement:this.placement},this._popperOptions)}set visible(r){this._visible=r}get visible(){return this._visible}ngOnChanges(r){r.visible&&(r.visible.currentValue?this.addPopoverElement():this.removePopoverElement())}get ariaDescribedBy(){return this.popoverId?this.popoverId:null}ngOnDestroy(){this.clearListeners(),this.destroyPopoverElement()}ngOnInit(){this.setListeners()}setListeners(){this.listenersService.setListeners({hostElement:this.hostElement,trigger:this.trigger,callbackToggle:()=>{this.visible=!this.visible,this.visible?this.addPopoverElement():this.removePopoverElement()},callbackOff:()=>{this.visible=!1,this.removePopoverElement()},callbackOn:()=>{this.visible=!0,this.addPopoverElement()}})}clearListeners(){this.listenersService.clearListeners()}getUID(r){let u=null!=r?r:"random-id";do{u=`${r}-${Math.floor(1e6*Math.random()).toString(10)}`}while(this.document.getElementById(u));return u}createPopoverElement(){if(!this.popoverRef){const r=this.componentFactoryResolver.resolveComponentFactory(e);this.popoverRef=r.create(this.viewContainerRef.injector)}}destroyPopoverElement(){var r,u,m;null===(r=this.popover)||void 0===r||r.remove(),null===(u=this.popoverRef)||void 0===u||u.destroy(),this.popoverRef=void 0,null===(m=this.popperInstance)||void 0===m||m.destroy(),this.viewContainerRef.detach(),this.viewContainerRef.clear()}addPopoverElement(){this.popoverRef||this.createPopoverElement(),this.popoverRef.instance.content=this.content,this.popover=this.popoverRef.location.nativeElement,this.renderer.addClass(this.popover,"fade"),setTimeout(()=>{this.popperInstance=(0,l.fi)(this.hostElement.nativeElement,this.popover,Object.assign({},this.popperOptions)),this.viewContainerRef.insert(this.popoverRef.hostView),setTimeout(()=>{this.popoverId=this.getUID("popover"),this.popoverRef.instance.id=this.popoverId,this.popoverRef.instance.visible=this.visible,this.renderer.appendChild(this.document.body,this.popover),this.popperInstance.forceUpdate()},100)})}removePopoverElement(){!this.popoverRef||(this.popoverRef.instance.visible=this.visible,this.popoverRef.instance.id=void 0,setTimeout(()=>{var r;this.viewContainerRef.detach(),null===(r=this.popperInstance)||void 0===r||r.destroy(),this.popoverId=""},300))}}return p.\u0275fac=function(r){return new(r||p)(i.Y36(a.K0),i.Y36(i.Qsj),i.Y36(i.SBq),i.Y36(i._Vd),i.Y36(i.s_b),i.Y36(t.c))},p.\u0275dir=i.lG2({type:p,selectors:[["","cPopover",""]],hostVars:1,hostBindings:function(r,u){2&r&&i.uIk("aria-describedby",u.ariaDescribedBy)},inputs:{content:["cPopover","content"],popperOptions:["cPopoverOptions","popperOptions"],placement:["cPopoverPlacement","placement"],trigger:["cPopoverTrigger","trigger"],visible:["cPopoverVisible","visible"]},exportAs:["cPopover"],features:[i._Bn([t.c]),i.TTD]}),p})()},7683:(v,d,o)=>{o.d(d,{R:()=>s});var a=o(9490),l=o(639);const i=["*"];let s=(()=>{class n{constructor(t,h){this.renderer=t,this.hostElement=h,this._animated=!1,this.precision=0,this._value=0,this.role="progressbar",this.state={percent:0,min:0,max:100}}set animated(t){this._animated=(0,a.Ig)(t)}get animated(){return this._animated}set value(t){this._value=(0,a.su)(t)}get value(){return this._value}get min(){return this.state.min}set min(t){this.state.min=isNaN(t)?0:t}get max(){return this.state.max}set max(t){this.state.max=isNaN(t)||t<=0||t===this.min?100:t}get hostClasses(){return{"progress-bar":!0,"progress-bar-animated":this.animated,[`progress-bar-${this.variant}`]:!!this.variant,[`bg-${this.color}`]:!!this.color}}ngOnInit(){this.setValues()}setPercent(){this.state.percent=+(this.value/(this.max-this.min)*100).toFixed(this.precision)}setValues(){this.setPercent();const t=this.hostElement.nativeElement;this.renderer.setStyle(t,"width",`${this.state.percent}%`),this.renderer.setAttribute(t,"aria-valuenow",String(this.value)),this.renderer.setAttribute(t,"aria-valuemin",String(this.min)),this.renderer.setAttribute(t,"aria-valuemax",String(this.max))}ngOnChanges(t){this.setValues()}}return n.\u0275fac=function(t){return new(t||n)(l.Y36(l.Qsj),l.Y36(l.SBq))},n.\u0275cmp=l.Xpm({type:n,selectors:[["c-progress-bar"]],hostVars:3,hostBindings:function(t,h){2&t&&(l.uIk("role",h.role),l.Tol(h.hostClasses))},inputs:{animated:"animated",color:"color",precision:"precision",value:"value",variant:"variant",role:"role",min:"min",max:"max"},features:[l.TTD],ngContentSelectors:i,decls:1,vars:0,template:function(t,h){1&t&&(l.F$t(),l.Hsn(0))},encapsulation:2}),n})()},8948:(v,d,o)=>{o.d(d,{t:()=>s});var a=o(9490),l=o(639);const i=["*"];let s=(()=>{class n{constructor(){this._height=0,this._thin=!1,this._white=!1}set height(t){this._height=(0,a.su)(t)}get height(){return this._height}set thin(t){this._thin=(0,a.Ig)(t)}get thin(){return this._thin}get white(){return this._white}set white(t){this._white=(0,a.Ig)(t)}get hostClasses(){return{progress:!0,"progress-thin":this.thin,"progress-white":this.white}}get hostStyle(){return this.height?`${this.height}px`:""}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=l.Xpm({type:n,selectors:[["c-progress"]],hostVars:4,hostBindings:function(t,h){2&t&&(l.Tol(h.hostClasses),l.Udp("height",h.hostStyle))},inputs:{height:"height",thin:"thin",white:"white"},ngContentSelectors:i,decls:1,vars:0,template:function(t,h){1&t&&(l.F$t(),l.Hsn(0))},encapsulation:2}),n})()},5954:(v,d,o)=>{o.d(d,{i:()=>t});var a=o(8583),l=o(9222),i=o(639);const s=["tooltipTemplate"];let n=(()=>{class h{constructor(c){this.renderer=c,this.content="",this.visible=!1,this.role="tooltip"}get hostClasses(){return{tooltip:!0,fade:!0,show:this.visible,"bs-tooltip-auto":!0}}ngAfterViewInit(){setTimeout(()=>{this.updateView(this.content)})}ngOnChanges(c){c.content&&setTimeout(()=>{this.updateView(this.content)})}ngOnDestroy(){this.clear()}clear(){var c;null===(c=this.viewContainerRef)||void 0===c||c.clear(),this.textNode&&this.renderer.removeChild(this.textNode.parentNode,this.textNode)}updateView(c){this.clear(),c&&(c instanceof i.Rgc?this.viewContainerRef.createEmbeddedView(c):(this.textNode=this.renderer.createText(c),this.renderer.appendChild(this.viewContainerRef.element.nativeElement.parentNode,this.textNode)))}}return h.\u0275fac=function(c){return new(c||h)(i.Y36(i.Qsj))},h.\u0275cmp=i.Xpm({type:h,selectors:[["c-tooltip"]],viewQuery:function(c,r){if(1&c&&i.Gf(s,5,i.s_b),2&c){let u;i.iGM(u=i.CRH())&&(r.viewContainerRef=u.first)}},hostVars:4,hostBindings:function(c,r){2&c&&(i.uIk("id",r.id)("role",r.role),i.Tol(r.hostClasses))},inputs:{content:"content",visible:"visible",id:"id",role:"role"},features:[i.TTD],decls:4,vars:0,consts:[["data-popper-arrow","",1,"tooltip-arrow"],[1,"tooltip-inner"],["tooltipTemplate",""]],template:function(c,r){1&c&&(i._UZ(0,"div",0),i.TgZ(1,"div",1),i.GkF(2,null,2),i.qZA())},encapsulation:2}),h})();var e=o(672);let t=(()=>{class h{constructor(c,r,u,m,g,_){this.document=c,this.renderer=r,this.hostElement=u,this.componentFactoryResolver=m,this.viewContainerRef=g,this.listenersService=_,this.content="",this.placement="top",this.trigger="hover",this._visible=!1,this._popperOptions={modifiers:[{name:"offset",options:{offset:[0,0]}}]}}set popperOptions(c){this._popperOptions=Object.assign(Object.assign(Object.assign({},this._popperOptions),{placement:this.placement}),c)}get popperOptions(){return Object.assign({placement:this.placement},this._popperOptions)}set visible(c){var r;this._visible=c,c?this.addTooltipElement():this.removeTooltipElement(),null===(r=this.tooltipRef)||void 0===r||r.changeDetectorRef.markForCheck()}get visible(){return this._visible}get ariaDescribedBy(){return this.tooltipId?this.tooltipId:null}ngOnChanges(c){c.visible&&(c.visible.currentValue?this.addTooltipElement():this.removeTooltipElement())}ngOnDestroy(){this.clearListeners(),this.destroyTooltipElement()}ngOnInit(){this.setListeners()}setListeners(){this.listenersService.setListeners({hostElement:this.hostElement,trigger:this.trigger,callbackToggle:()=>{this.visible=!this.visible},callbackOff:()=>{this.visible=!1},callbackOn:()=>{this.visible=!0}})}clearListeners(){this.listenersService.clearListeners()}getUID(c){let r=null!=c?c:"random-id";do{r=`${c}-${Math.floor(1e6*Math.random()).toString(10)}`}while(this.document.getElementById(r));return r}createTooltipElement(){if(!this.tooltipRef){const c=this.componentFactoryResolver.resolveComponentFactory(n);this.tooltipRef=this.viewContainerRef.createComponent(c)}}destroyTooltipElement(){var c,r,u;null===(c=this.tooltip)||void 0===c||c.remove(),null===(r=this.tooltipRef)||void 0===r||r.destroy(),this.tooltipRef=void 0,null===(u=this.popperInstance)||void 0===u||u.destroy(),this.viewContainerRef.detach(),this.viewContainerRef.clear()}addTooltipElement(){this.tooltipRef||this.createTooltipElement(),this.tooltipRef.instance.content=this.content,this.tooltip=this.tooltipRef.location.nativeElement,setTimeout(()=>{this.popperInstance=(0,l.fi)(this.hostElement.nativeElement,this.tooltip,Object.assign({},this.popperOptions)),setTimeout(()=>{this.tooltipId=this.getUID("tooltip"),this.tooltipRef.instance.id=this.tooltipId,this.tooltipRef.instance.visible=this.visible,this.renderer.appendChild(this.document.body,this.tooltip),this.popperInstance.forceUpdate(),this.tooltipRef.changeDetectorRef.markForCheck()},100)})}removeTooltipElement(){!this.tooltipRef||(this.tooltipRef.instance.visible=this.visible,setTimeout(()=>{var c;this.tooltipRef.instance.id=void 0,this.renderer.removeChild(this.document.body,this.tooltip),null===(c=this.popperInstance)||void 0===c||c.destroy(),this.tooltipId=""},300))}}return h.\u0275fac=function(c){return new(c||h)(i.Y36(a.K0),i.Y36(i.Qsj),i.Y36(i.SBq),i.Y36(i._Vd),i.Y36(i.s_b),i.Y36(e.c))},h.\u0275dir=i.lG2({type:h,selectors:[["","cTooltip",""]],hostVars:1,hostBindings:function(c,r){2&c&&i.uIk("aria-describedby",r.ariaDescribedBy)},inputs:{content:["cTooltip","content"],popperOptions:["cTooltipOptions","popperOptions"],placement:["cTooltipPlacement","placement"],trigger:["cTooltipTrigger","trigger"],visible:["cTooltipVisible","visible"]},exportAs:["cTooltip"],features:[i._Bn([e.c]),i.TTD]}),h})()},6056:(v,d,o)=>{o.d(d,{O:()=>l});var a=o(639);let l=(()=>{class i{constructor(){this.border=!0}get hostClasses(){if("boolean"==typeof this.border)return{border:!0};if("number"==typeof this.border||"string"==typeof this.border)return{border:!0,[`border-${this.border}`]:!0};if("object"==typeof this.border){const n=Object.assign({top:void 0,end:void 0,bottom:void 0,start:void 0,color:void 0},this.border),e=Object.keys(n).filter(h=>void 0!==n[h]),t={};return e.forEach(h=>{const p=n[h];"boolean"==typeof p?t[`border-${h}`]=!0:"number"==typeof p||"string"==typeof p?t[`border-${h}-${p}`]=!0:"object"==typeof p&&("color"in p&&(t[`border-${h}-${p.color}`]=!0),"width"in p&&(t[`border-${h}-${p.width}`]=!0))}),0===Object.entries(t).length?{border:!1}:t}}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275dir=a.lG2({type:i,selectors:[["","cBorder",""]],hostVars:2,hostBindings:function(n,e){2&n&&a.Tol(e.hostClasses)},inputs:{border:["cBorder","border"]}}),i})()},8457:(v,d,o)=>{o.d(d,{U:()=>e});var a=o(8583),l=o(6715),i=o(1280),s=o(639);let n=(()=>{class t{}return t.\u0275fac=function(p){return new(p||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[a.ez,i.Bz]]}),t})(),e=(()=>{class t{}return t.\u0275fac=function(p){return new(p||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[a.ez,l.JP,n]]}),t})()},5175:(v,d,o)=>{o.d(d,{m:()=>i});var a=o(8583),l=o(639);let i=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=l.oAB({type:s}),s.\u0275inj=l.cJS({imports:[[a.ez],a.ez]}),s})()}}]);