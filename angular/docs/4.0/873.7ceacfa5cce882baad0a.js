"use strict";(self.webpackChunkcoreui_angular_dev=self.webpackChunkcoreui_angular_dev||[]).push([[873],{5039:(f,v,n)=>{n.d(v,{H:()=>p});var t=n(639);const c=["*"];let p=(()=>{class d{get hostClasses(){return{"nav-item":!0}}}return d.\u0275fac=function(e){return new(e||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["c-nav-item"]],hostVars:2,hostBindings:function(e,o){2&e&&t.Tol(o.hostClasses)},ngContentSelectors:c,decls:1,vars:0,template:function(e,o){1&e&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]{display:list-item;text-align:match-parent;text-align:-webkit-match-parent}"]}),d})()},8359:(f,v,n)=>{n.d(v,{V:()=>p});var t=n(9490),c=n(639);let p=(()=>{class d{constructor(){this._cNavLink=!0,this._disabled=!1}set cNavLink(e){this._cNavLink=(0,t.Ig)(e)}get cNavLink(){return this._cNavLink}get disabled(){return this._disabled}set disabled(e){this._disabled=(0,t.Ig)(e)}get ariaCurrent(){return this.active?"page":null}get isDisabled(){return this.disabled||null}get attrDisabled(){return this.disabled?"":null}get getTabindex(){return this.disabled?"-1":null}get hostClasses(){return{"nav-link":this.cNavLink,disabled:this.disabled,active:this.active}}}return d.\u0275fac=function(e){return new(e||d)},d.\u0275dir=c.lG2({type:d,selectors:[["","cNavLink",""]],hostVars:6,hostBindings:function(e,o){2&e&&(c.uIk("aria-current",o.ariaCurrent)("aria-disabled",o.isDisabled)("disabled",o.attrDisabled)("tabindex",o.getTabindex),c.Tol(o.hostClasses))},inputs:{cNavLink:"cNavLink",active:"active",disabled:"disabled"}}),d})()},137:(f,v,n)=>{n.d(v,{r:()=>p});var t=n(639);const c=["*"];let p=(()=>{class d{get hostClasses(){return{nav:!0,[`nav-${this.layout}`]:!!this.layout,[`nav-${this.variant}`]:!!this.variant}}}return d.\u0275fac=function(e){return new(e||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["c-nav"]],hostVars:2,hostBindings:function(e,o){2&e&&t.Tol(o.hostClasses)},inputs:{layout:"layout",variant:"variant"},ngContentSelectors:c,decls:1,vars:0,template:function(e,o){1&e&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus{outline:0}"]}),d})()},7398:(f,v,n)=>{n.d(v,{h:()=>d});var t=n(9490),c=n(639),p=n(1690);let d=(()=>{class u{constructor(o,i){this.changeDetectorRef=o,this.tabService=i,this._active=!1,this._disabled=!1,this.tabPaneIdx=-1}set active(o){const i=(0,t.Ig)(o);this._active!==i&&(this._active=i,this.changeDetectorRef.detectChanges())}get active(){return this._active}set disabled(o){this._disabled=(0,t.Ig)(o)}get disabled(){var o,i;return this._disabled||this.tabPaneIdx>=(null===(i=null===(o=this.tabContentRef)||void 0===o?void 0:o.panes)||void 0===i?void 0:i.length)}get hostClasses(){return{active:this.active,disabled:this.disabled}}get isDisabled(){return this.disabled||null}get attrDisabled(){return this.disabled?"":null}get getTabindex(){return this.disabled?"-1":null}ngOnChanges(o){var i;(null===(i=o.active)||void 0===i?void 0:i.currentValue)&&this.setActiveTabPane()}toggleOpen(o){o.preventDefault(),this.setActiveTabPane()}setActiveTabPane(){setTimeout(()=>{this.tabPaneIdx<this.tabContentRef.panes.length?(this.active=!0,this.tabService.setActiveTabIdx({tabContent:this.tabContentRef,activeIdx:this.tabPaneIdx})):this.active=!1})}ngOnInit(){this.subscribeTabService()}ngOnDestroy(){this.subscribeTabService(!1)}subscribeTabService(o=!0){o?this.tabServiceSubscription=this.tabService.activeTabPaneIdx$.subscribe(i=>{i.tabContent===this.tabContentRef&&(this.active=i.activeIdx===this.tabPaneIdx)}):this.tabServiceSubscription.unsubscribe()}}return u.\u0275fac=function(o){return new(o||u)(c.Y36(c.sBO),c.Y36(p.p))},u.\u0275dir=c.lG2({type:u,selectors:[["","cTabContent",""]],hostVars:5,hostBindings:function(o,i){1&o&&c.NdJ("click",function(l){return i.toggleOpen(l)}),2&o&&(c.uIk("aria-disabled",i.isDisabled)("disabled",i.attrDisabled)("tabindex",i.getTabindex),c.Tol(i.hostClasses))},inputs:{tabContentRef:["cTabContent","tabContentRef"],active:"active",disabled:"disabled",tabPaneIdx:"tabPaneIdx"},features:[c.TTD]}),u})()},7856:(f,v,n)=>{n.d(v,{C:()=>e});var t=n(639),c=n(9490),p=n(1735),d=n(1690);const u=["*"];let e=(()=>{class o{constructor(s,l){this.changeDetectorRef=s,this.tabService=l,this._activeTabPaneIdx=-1,this.activeTabPaneIdxChange=new t.vpe}set activeTabPaneIdx(s){const l=(0,c.su)(s);this._activeTabPaneIdx!=l&&(this._activeTabPaneIdx=l,this.activeTabPaneIdxChange.emit(l),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())}get activeTabPaneIdx(){return this._activeTabPaneIdx}get hostClasses(){return{"tab-content":!0}}ngAfterContentInit(){this.subscribeTabService()}ngAfterContentChecked(){var s;null===(s=this.panes)||void 0===s||s.forEach((l,T)=>{l.tabContent=this,l.tabPaneIdx=T}),this.refreshTabPaneActive(this.activeTabPaneIdx),this.tabService.setActiveTabIdx({tabContent:this,activeIdx:this.activeTabPaneIdx})}ngOnChanges(s){var l;(null===(l=s.activeTabPaneIdx)||void 0===l?void 0:l.currentValue)&&this.tabService.setActiveTabIdx({tabContent:this,activeIdx:s.activeTabPaneIdx.currentValue})}ngOnDestroy(){this.subscribeTabService(!1)}subscribeTabService(s=!0){s?this.tabServiceSubscription=this.tabService.activeTabPaneIdx$.subscribe(l=>{this===l.tabContent&&(this.activeTabPaneIdx=l.activeIdx)}):this.tabServiceSubscription.unsubscribe()}refreshTabPaneActive(s){var l;null===(l=this.panes)||void 0===l||l.forEach((T,D)=>{T.active=s===D})}}return o.\u0275fac=function(s){return new(s||o)(t.Y36(t.sBO),t.Y36(d.p))},o.\u0275cmp=t.Xpm({type:o,selectors:[["c-tab-content"]],contentQueries:function(s,l,T){if(1&s&&t.Suo(T,p.E,4),2&s){let D;t.iGM(D=t.CRH())&&(l.panes=D)}},hostVars:2,hostBindings:function(s,l){2&s&&t.Tol(l.hostClasses)},inputs:{activeTabPaneIdx:"activeTabPaneIdx"},outputs:{activeTabPaneIdxChange:"activeTabPaneIdxChange"},exportAs:["cTabContent"],features:[t.TTD],ngContentSelectors:u,decls:1,vars:0,template:function(s,l){1&s&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),o})()},1735:(f,v,n)=>{n.d(v,{E:()=>u});var t=n(9490),c=n(639),p=n(1690);const d=["*"];let u=(()=>{class e{constructor(i,s){this.changeDetectorRef=i,this.tabService=s,this._active=!1}set active(i){const s=(0,t.Ig)(i);this._active!==s&&(this._active=s,this.changeDetectorRef.markForCheck())}get active(){return this._active}get hostClasses(){return{"tab-pane":!0,fade:!0,show:this.active,active:this.active}}ngOnInit(){this.subscribeTabService()}ngOnDestroy(){this.subscribeTabService(!1)}subscribeTabService(i=!0){i?this.tabServiceSubscription=this.tabService.activeTabPaneIdx$.subscribe(s=>{s.tabContent===this.tabContent&&(this.active=s.activeIdx===this.tabPaneIdx)}):this.tabServiceSubscription.unsubscribe()}}return e.\u0275fac=function(i){return new(i||e)(c.Y36(c.sBO),c.Y36(p.p))},e.\u0275cmp=c.Xpm({type:e,selectors:[["c-tab-pane"]],hostVars:2,hostBindings:function(i,s){2&i&&c.Tol(s.hostClasses)},exportAs:["cTabPane"],ngContentSelectors:d,decls:1,vars:0,template:function(i,s){1&i&&(c.F$t(),c.Hsn(0))},styles:["[_nghost-%COMP%]{display:block}"]}),e})()},4217:(f,v,n)=>{n.d(v,{U:()=>P});var t=n(639),c=n(8583),p=n(137),d=n(7856),u=n(5039),e=n(8359),o=n(7398),i=n(1735),s=n(6715);const l=["docsExample"];function T(h,b){1&h&&t.GkF(0)}function D(h,b){if(1&h&&(t.TgZ(0,"c-nav-item"),t.TgZ(1,"button",6),t._uU(2),t.qZA(),t.qZA()),2&h){const g=b.$implicit,C=b.index;t.oxw();const x=t.MAs(5);t.xp6(1),t.Q6J("cTabContent",x)("tabPaneIdx",C),t.xp6(1),t.hij(" ",g.split("/").pop()," ")}}function I(h,b){if(1&h&&(t.TgZ(0,"c-tab-pane"),t._UZ(1,"markdown",7),t.qZA()),2&h){const g=b.$implicit;t.xp6(1),t.Q6J("src",g)}}function A(h,b){1&h&&(t.TgZ(0,"div",8),t.Hsn(1),t.qZA())}const Z=["*"];let P=(()=>{class h{}return h.\u0275fac=function(g){return new(g||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["docs-example"]],contentQueries:function(g,C,x){if(1&g&&t.Suo(x,l,5),2&g){let E;t.iGM(E=t.CRH())&&(C.docsExampleTemplateRef=E.first)}},inputs:{files:"files"},ngContentSelectors:Z,decls:9,vars:4,consts:[[4,"ngTemplateOutlet"],[1,"docs-code-group"],[4,"ngFor","ngForOf"],[3,"activeTabPaneIdx"],["tabContent","cTabContent"],["docsExampleDefault",""],["cNavLink","",3,"cTabContent","tabPaneIdx"],["lineNumbers","",3,"src"],[1,"docs-example"]],template:function(g,C){if(1&g&&(t.F$t(),t.YNc(0,T,1,0,"ng-container",0),t.TgZ(1,"div",1),t.TgZ(2,"c-nav"),t.YNc(3,D,3,3,"c-nav-item",2),t.qZA(),t.TgZ(4,"c-tab-content",3,4),t.YNc(6,I,2,1,"c-tab-pane",2),t.qZA(),t.qZA(),t.YNc(7,A,2,0,"ng-template",null,5,t.W1O)),2&g){const x=t.MAs(8);t.Q6J("ngTemplateOutlet",C.docsExampleTemplateRef||x),t.xp6(3),t.Q6J("ngForOf",C.files),t.xp6(1),t.Q6J("activeTabPaneIdx",0),t.xp6(2),t.Q6J("ngForOf",C.files)}},directives:[c.tP,p.r,c.sg,d.C,u.H,e.V,o.h,i.E,s.lF],styles:[".docs-code-group .nav{background-color:#282c34;color:#ccc;padding:10px 0}  .docs-code-group .nav-link{border:0;margin:0 1rem;padding:.5rem .25rem;cursor:pointer;background-color:transparent;font-size:.85em;line-height:1.4;color:#ffffffe6;font-weight:600}  .docs-code-group .nav-link.active{border-bottom:2px solid #cf2f4c}  .docs-code-group markdown>pre{max-height:500px;margin:0 0 1.5rem;border-top-left-radius:0;border-top-right-radius:0}"]}),h})()},2349:(f,v,n)=>{n.d(v,{B:()=>u});var t=n(8583),c=n(6715),p=n(9744),d=n(639);let u=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[t.ez,c.JP.forChild(),p.dGk,p.P4_]]}),e})()},1873:(f,v,n)=>{n.r(v),n.d(v,{HeaderDocsModule:()=>R});var t=n(8583),c=n(6715),p=n(9744),d=n(2349),u=n(1280),e=n(639),o=n(4217),i=n(8311),s=n(4423);const l=["*"];let T=(()=>{class a{constructor(){this.role="button",this.headerBrandClass=!0}}return a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["c-header-brand"]],hostVars:3,hostBindings:function(r,m){2&r&&(e.uIk("role",m.role),e.ekj("header-brand",m.headerBrandClass))},inputs:{role:"role"},ngContentSelectors:l,decls:1,vars:0,template:function(r,m){1&r&&(e.F$t(),e.Hsn(0))},encapsulation:2}),a})();const D=["*"];let I=(()=>{class a{constructor(){this.role="navigation",this.headerNavClass=!0}}return a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["c-header-nav"]],hostVars:3,hostBindings:function(r,m){2&r&&(e.uIk("role",m.role),e.ekj("header-nav",m.headerNavClass))},inputs:{role:"role"},ngContentSelectors:D,decls:1,vars:0,template:function(r,m){1&r&&(e.F$t(),e.Hsn(0))},styles:[""]}),a})();var A=n(5039),Z=n(8359),P=n(1990),h=n(2661),b=n(2854),g=n(5773),C=n(2589);let x=(()=>{class a{constructor(){this.headerDividerClass=!0}}return a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["c-header-divider"],["","cHeaderDivider",""]],hostVars:2,hostBindings:function(r,m){2&r&&e.ekj("header-divider",m.headerDividerClass)},decls:0,vars:0,template:function(r,m){},encapsulation:2}),a})();const E=["*"];let O=(()=>{class a{constructor(){this.headerTextClass=!0}}return a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["c-header-text"],["","cHeaderText",""]],hostVars:2,hostBindings:function(r,m){2&r&&e.ekj("header-text",m.headerTextClass)},ngContentSelectors:E,decls:1,vars:0,template:function(r,m){1&r&&(e.F$t(),e.Hsn(0))},encapsulation:2}),a})(),H=(()=>{class a{constructor(){this.visible=!0}ngOnInit(){}}return a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["docs-header01"]],decls:32,vars:2,consts:[["fluid",""],[3,"routerLink"],[1,"ms-auto"],["cNavLink","",3,"active","routerLink"],["cNavLink","","routerLink","/components/alert"],["cNavLink","","disabled","","routerLink","/components/alert"],["alignment","end"],["cHeaderToggler","","cDropdownToggle","","cNavLink","",3,"caret"],["cDropdownMenu",""],["cDropdownItem","",3,"routerLink"],["cDropdownDivider",""]],template:function(r,m){1&r&&(e.TgZ(0,"c-header"),e.TgZ(1,"c-container",0),e.TgZ(2,"c-header-brand",1),e._uU(3,"Brand"),e.qZA(),e.TgZ(4,"c-header-nav",2),e.TgZ(5,"c-nav-item"),e.TgZ(6,"a",3),e._uU(7,"Home"),e.qZA(),e.qZA(),e.TgZ(8,"c-nav-item"),e.TgZ(9,"a",4),e._uU(10,"Link"),e.qZA(),e.qZA(),e.TgZ(11,"c-nav-item"),e.TgZ(12,"a",5),e._uU(13,"Disabled"),e.qZA(),e.qZA(),e.TgZ(14,"c-dropdown",6),e._UZ(15,"a",7),e.TgZ(16,"ul",8),e.TgZ(17,"li"),e.TgZ(18,"a",9),e._uU(19,"Action"),e.qZA(),e.qZA(),e.TgZ(20,"li"),e.TgZ(21,"a",9),e._uU(22,"Another action"),e.qZA(),e.qZA(),e.TgZ(23,"li"),e._UZ(24,"hr",10),e.qZA(),e.TgZ(25,"li"),e.TgZ(26,"a",9),e._uU(27,"Something else"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(28,"c-header-divider"),e.TgZ(29,"c-container",0),e.TgZ(30,"c-header-text"),e._uU(31,"Additional text"),e.qZA(),e.qZA(),e.qZA()),2&r&&(e.xp6(6),e.Q6J("active",!0),e.xp6(9),e.Q6J("caret",!1))},directives:[i.G,s.e,T,u.rH,I,A.H,u.yS,Z.V,P.J,h.C,P.R,b.b,g.H,C.G,x,O],styles:[".header-toggler-icon[_ngcontent-%COMP%]{min-width:25px}"]}),a})();const B=function(){return["components/header/examples/header01.component.html"]},U=[{path:"",component:(()=>{class a{constructor(){this.usage=n(6982).Z}ngOnInit(){}}return a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["docs-header"]],decls:34,vars:3,consts:[["id","getting-started"],[1,"docs-lead","fs-4","fw-light"],[3,"files"],[1,"table-responsive"],["markdown","",1,"table","table","table-striped","table-api"]],template:function(r,m){1&r&&(e.TgZ(0,"h1",0),e._uU(1,"Angular Header Component"),e.qZA(),e.TgZ(2,"p",1),e._uU(3," Documentation and examples for the Header - a powerful, responsive navigation header. Includes support for branding, links, dropdowns, and more.\n"),e.qZA(),e.TgZ(4,"markdown"),e._uU(5,"\n  ## Supported content\n\n  Headers come with built-in support for a handful of sub-components. Choose from the following as needed:\n\n  - `cHeaderBrand` for your company, product, or project name\n  - `cHeaderNav` for a full-height and lightweight navigation (including support for dropdowns)\n  - `cHeaderToggler` for use with navigation toggling\n  - `cHeaderText` for adding vertically centered strings of text\n  - `cHeaderDivider` to separate subheaders\n  - Flex and spacing utilities for any form controls and actions\n\n  ## Examples\n  Here's an example of all the sub-components included in a responsive light-themed header that automatically collapses at the `lg` (large) breakpoint.\n\n"),e.qZA(),e.TgZ(6,"docs-example",2),e._UZ(7,"docs-header01"),e.qZA(),e.TgZ(8,"markdown"),e._uU(9),e.TgZ(10,"div",3),e._uU(11,"\n    "),e.TgZ(12,"table",4),e._uU(13,"\n\n      |prop|description|type|default|notes|\n      |---|:---|:---|:---|---|\n      |`container`| Defines optional container wrapping children elements | `Container` |_undefined_|`boolean , string`\n      |`position`| Place a footer in non-static positions | `Positions` |_undefined_|`fixes, sticky`\n      |`role`| Default role for a header |`string`|_header_||\n\n    "),e.qZA(),e._uU(14,"\n  "),e.qZA(),e._uU(15,"\n\n  ### c-header-brand\n  _component_\n\n  ##### Inputs\n  "),e.TgZ(16,"div",3),e._uU(17,"\n    "),e.TgZ(18,"table",4),e._uU(19,"\n\n      |prop|description|type|default|notes|\n      |---|:---|:---|:---|---|\n      |`role`| Default role for a header-brand |`string`|_button_||\n\n    "),e.qZA(),e._uU(20,"\n  "),e.qZA(),e._uU(21,"\n\n  ### c-header-nav\n  _component_\n\n  ##### Inputs\n  "),e.TgZ(22,"div",3),e._uU(23,"\n    "),e.TgZ(24,"table",4),e._uU(25,"\n\n      |prop|description|type|default|notes|\n      |---|:---|:---|:---|---|\n      |`role`| Default role for a header-nav |`string`|_navigation_||\n\n    "),e.qZA(),e._uU(26,"\n  "),e.qZA(),e._uU(27,"\n\n  ### cHeaderText\n  _directive_\n\n  ### cHeaderToggler\n  _directive_\n\n  ##### Inputs\n  "),e.TgZ(28,"div",3),e._uU(29,"\n    "),e.TgZ(30,"table",4),e._uU(31,"\n\n      |prop|description|type|default|notes|\n      |---|:---|:---|:---|---|\n      |`type`| Default type for a header-brand |`string`|_button_||\n      |`aria-label`| Default aria-label attr for header-toggler |`string`|_Toggle navigation_||\n\n    "),e.qZA(),e._uU(32,"\n  "),e.qZA(),e._uU(33,"\n\n"),e.qZA()),2&r&&(e.xp6(6),e.Q6J("files",e.DdM(2,B)),e.xp6(3),e.hij("\n  ---\n\n  ## API reference\n\n  ### Header Module\n\n  ",m.usage,"\n\n  ---\n\n  ### c-header\n  _component_\n\n  ##### Inputs\n  "))},directives:[c.lF,o.U,H],encapsulation:2,changeDetection:0}),a})()}];let y=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[u.Bz.forChild(U)],u.Bz]}),a})(),R=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[p.fwJ,t.ez,d.B,p.kWm,p.zE6,p.Opr,y,c.JP.forChild(),p.dGk]]}),a})()},6982:(f,v,n)=>{n.d(v,{Z:()=>t});const t="```typescript\nimport { HeaderModule } from '@coreui/angular';\n\n@NgModule({\nimports: [HeaderModule,]\n})\nexport class AppModule() { }\n```\n"}}]);