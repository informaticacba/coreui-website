"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[890],{5890:(h,c,l)=>{l.r(c),l.d(c,{CollapseDocsModule:()=>q});var p=l(6019),r=l(5668),a=l(6784),f=l(522),u=l(2756),e=l(3556),v=l(904),d=l(1738),m=l(7976),g=l(6575),C=l(9506);let Z=(()=>{class n{constructor(){this.visible=!1}toggleCollapse(){this.visible=!this.visible}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["docs-collapse01"]],decls:7,vars:1,consts:[["cButton","","color","primary",1,"me-1",3,"click"],["cCollapse","",1,"mt-3",3,"visible"]],template:function(o,s){1&o&&(e.TgZ(0,"a",0),e.NdJ("click",function(){return s.toggleCollapse()}),e._uU(1,"Link"),e.qZA(),e.TgZ(2,"button",0),e.NdJ("click",function(){return s.toggleCollapse()}),e._uU(3,"Button"),e.qZA(),e.TgZ(4,"c-card",1),e.TgZ(5,"c-card-body"),e._uU(6," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. "),e.qZA(),e.qZA()),2&o&&(e.xp6(4),e.Q6J("visible",s.visible))},directives:[d.H,m.A,g.Y,C.y],styles:[""]}),n})();var b=l(3120),T=l(3487);let A=(()=>{class n{constructor(){this.visible=[!1,!1]}toggleCollapse(o){this.visible[o]=!this.visible[o]}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["docs-collapse02"]],decls:15,vars:4,consts:[["cButton","","color","primary",1,"me-1",3,"click"],[3,"xs"],["cCollapse","",1,"mt-3",3,"visible"]],template:function(o,s){1&o&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return s.toggleCollapse(0)}),e._uU(1,"Toggle first element"),e.qZA(),e.TgZ(2,"button",0),e.NdJ("click",function(){return s.toggleCollapse(1)}),e._uU(3,"Toggle second element"),e.qZA(),e.TgZ(4,"button",0),e.NdJ("click",function(){return s.toggleCollapse(0),s.toggleCollapse(1)}),e._uU(5,"Toggle both"),e.qZA(),e.TgZ(6,"c-row"),e.TgZ(7,"c-col",1),e.TgZ(8,"c-card",2),e.TgZ(9,"c-card-body"),e._uU(10," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"c-col",1),e.TgZ(12,"c-card",2),e.TgZ(13,"c-card-body"),e._uU(14," Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. "),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(7),e.Q6J("xs",6),e.xp6(1),e.Q6J("visible",s.visible[0]),e.xp6(3),e.Q6J("xs",6),e.xp6(1),e.Q6J("visible",s.visible[1]))},directives:[d.H,b.i,T.Y,m.A,g.Y,C.y],styles:[""]}),n})();const J=function(){return["components/collapse/examples/collapse01.component.html","components/collapse/examples/collapse01.component.ts"]},_=function(){return["components/collapse/examples/collapse02.component.html","components/collapse/examples/collapse02.component.ts"]},k=[{path:"",component:(()=>{class n{constructor(){this.usage=l(4282).Z}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["docs-collapse"]],decls:26,vars:5,consts:[["id","getting-started"],[1,"docs-lead","fs-4","fw-light"],[3,"files"],[1,"table-responsive"],["markdown","",1,"table","table","table-striped","table-api"]],template:function(o,s){1&o&&(e.TgZ(0,"h1",0),e._uU(1,"Angular Collpase Directive"),e.qZA(),e.TgZ(2,"p",1),e._uU(3," Angular collapse directive toggles the visibility of content across your project with a few classes and some scripts. Useful for a large amount of content.\n"),e.qZA(),e.TgZ(4,"markdown"),e._uU(5,"\n  ## How it works\n\n  The collapse component is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element will animate the height from its current value to 0. Given how CSS handles animations, you cannot use padding on a .collapse element. Instead, use the class as an independent wrapping element.\n\n  ## Examples\n  You can use it with a link or a button element.\n\n"),e.qZA(),e.TgZ(6,"docs-example",2),e._UZ(7,"docs-collapse01"),e.qZA(),e.TgZ(8,"markdown"),e._uU(9,"\n  ## Multiple targets\n\n  A `c-button` can show and hide multiple elements.\n"),e.qZA(),e.TgZ(10,"docs-example",2),e._UZ(11,"docs-collapse02"),e.qZA(),e.TgZ(12,"markdown"),e._uU(13),e.TgZ(14,"div",3),e._uU(15,"\n    "),e.TgZ(16,"table",4),e._uU(17,"\n\n      |prop|description|type|default|\n      |---|:---|:---|:---|\n      |`visible`|Toggle the visibility of collapsible element|`boolean`|_false_\n      |`navbar`|Add `navbar` prop for grouping and hiding navbar contents by a parent breakpoint|`boolean`|_false_\n\n    "),e.qZA(),e._uU(18,"\n  "),e.qZA(),e._uU(19,"\n\n  ##### Outputs\n  "),e.TgZ(20,"div",3),e._uU(21,"\n    "),e.TgZ(22,"table",4),e._uU(23,"\n\n      |prop|description|type|values|\n      |---|:---|:---|:---|\n      |`collapseChange`|Event emitted on visibility change|`string`|`opening, open, collapsing, collapsed`\n\n    "),e.qZA(),e._uU(24,"\n  "),e.qZA(),e._uU(25,"\n\n\n"),e.qZA()),2&o&&(e.xp6(6),e.Q6J("files",e.DdM(3,J)),e.xp6(4),e.Q6J("files",e.DdM(4,_)),e.xp6(3),e.hij("\n  ---\n\n  ## API reference\n\n  ### Collapse Module\n\n  ",s.usage,"\n\n  ---\n\n  ### cCollapse\n  _directive_\n\n  ##### Inputs\n  "))},directives:[r.lF,v.U,Z,A],encapsulation:2,changeDetection:0}),n})()}];let x=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.Bz.forChild(k)],u.Bz]}),n})(),q=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[a.hJ1,a.dTQ,p.ez,a.fwJ,x,f.B,a.zE6,r.JP.forChild(),a.gzQ]]}),n})()},4282:(h,c,l)=>{l.d(c,{Z:()=>p});const p="```typescript\nimport { CollapseModule } from '@coreui/angular';\n\n@NgModule({\n    imports: [CollapseModule,]\n})\nexport class AppModule() { }\n```\n"}}]);