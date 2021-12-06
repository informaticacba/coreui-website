"use strict";(self.webpackChunkcoreui_angular_dev=self.webpackChunkcoreui_angular_dev||[]).push([[952],{9952:(T,i,l)=>{l.r(i),l.d(i,{TooltipDocsModule:()=>D});var c=l(8583),u=l(6715),s=l(9744),d=l(2349),r=l(1280),o=l(639),g=l(4217),a=l(5954);let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["docs-tooltip01"]],decls:8,vars:1,consts:[[1,"text-medium-emphasis"],["cTooltip","Tooltip text",3,"cTooltipVisible","routerLink"],["cTooltip","Tooltip text",3,"routerLink"]],template:function(e,p){1&e&&(o.TgZ(0,"p",0),o._uU(1," Tight pants next level keffiyeh "),o.TgZ(2,"a",1),o._uU(3," you probably "),o.qZA(),o._uU(4," haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. "),o.TgZ(5,"a",2),o._uU(6,"Twitter handle"),o.qZA(),o._uU(7," freegan cred raw denim single-origin coffee viral.\n"),o.qZA()),2&e&&(o.xp6(2),o.Q6J("cTooltipVisible",!0))},directives:[r.yS,a.i],encapsulation:2}),t})();var m=l(3463);let v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["docs-tooltip02"]],decls:8,vars:0,consts:[["cButton","","cTooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","cTooltipPlacement","top","color","secondary",1,"me-1"],["cButton","","cTooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","cTooltipPlacement","right","color","secondary",1,"me-1"],["cButton","","cTooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","cTooltipPlacement","bottom","color","secondary",1,"me-1"],["cButton","","cTooltip","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","cTooltipPlacement","left","color","secondary",1,"me-1"]],template:function(e,p){1&e&&(o.TgZ(0,"button",0),o._uU(1,"Tooltip on top\n"),o.qZA(),o.TgZ(2,"button",1),o._uU(3,"Tooltip on right\n"),o.qZA(),o.TgZ(4,"button",2),o._uU(5,"Tooltip on bottom\n"),o.qZA(),o.TgZ(6,"button",3),o._uU(7,"Tooltip on left\n"),o.qZA())},directives:[m.H,a.i],encapsulation:2}),t})();var Z=l(707);function h(t,n){1&t&&(o._uU(0," Vivamus "),o.TgZ(1,"span",2),o._uU(2,"sagittis"),o.qZA(),o._uU(3," lacus vel augue laoreet rutrum "),o.TgZ(4,"i",3),o._uU(5,"faucibus"),o.qZA(),o._uU(6,". "))}let U=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["docs-tooltip03"]],decls:4,vars:1,consts:[["cButton","","cTooltipPlacement","right","cTooltipTrigger","click","color","secondary",1,"me-1",3,"cTooltip"],["tooltipContent",""],["cTextColor","success"],["cTextColor","warning"]],template:function(e,p){if(1&e&&(o.TgZ(0,"button",0),o._uU(1," Template Tooltip "),o.YNc(2,h,7,0,"ng-template",null,1,o.W1O),o.qZA()),2&e){const w=o.MAs(3);o.Q6J("cTooltip",w)}},directives:[m.H,a.i,Z.g],encapsulation:2}),t})();const C=function(){return["components/tooltip/examples/tooltip01.component.html"]},x=function(){return["components/tooltip/examples/tooltip02.component.html"]},_=function(){return["components/tooltip/examples/tooltip03.component.html"]},M=[{path:"",component:(()=>{class t{constructor(){this.usage=l(9701).Z}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["docs-tooltip"]],decls:24,vars:7,consts:[["id","getting-started"],[1,"docs-lead","fs-4","fw-light"],[3,"files"],[1,"table-responsive"],["markdown","",1,"table","table","table-striped","table-api"]],template:function(e,p){1&e&&(o.TgZ(0,"h1",0),o._uU(1,"Angular Tooltip Directive"),o.qZA(),o.TgZ(2,"p",1),o._uU(3,"Documentation and examples for adding Angular Tooltips."),o.qZA(),o.TgZ(4,"markdown"),o._uU(5,"\n  Use CoreUI Angular tooltip directive to create beautiful tooltips and present hint or information regarding the element on\n  hover. Tutorials and examples for adding custom CoreUI Angular tooltips.\n\n  ## Examples\n\n  ### Base tooltips\n  - Hover over the links below to see tooltips:\n"),o.qZA(),o.TgZ(6,"docs-example",2),o._UZ(7,"docs-tooltip01"),o.qZA(),o.TgZ(8,"markdown"),o._uU(9,"\n  ### Directions\n\n  - Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. Directions are\n  mirrored when using CoreUI in RTL.\n"),o.qZA(),o.TgZ(10,"docs-example",2),o._UZ(11,"docs-tooltip02"),o.qZA(),o.TgZ(12,"markdown"),o._uU(13,"\n  ### Html content\n  - Use `ng-template` to render html content and / or non default triggers (click).\n"),o.qZA(),o.TgZ(14,"docs-example",2),o._UZ(15,"docs-tooltip03"),o.qZA(),o.TgZ(16,"markdown"),o._uU(17),o.TgZ(18,"div",3),o._uU(19,"\n    "),o.TgZ(20,"table",4),o._uU(21,"\n\n  |prop|description|type|default|notes|\n  |:---|:---|:---|:---:|---|\n  |`cTooltip` | Content of a tooltip. | `string`, `TemplateRef` | - | _required_\n  |`cTooltipOptions` | Optional popper Options object, takes precedence over cPopoverPlacement. | `Options` | - |\n  |`cTooltipPlacement` | Placement of a tooltip. | `top`, `bottom`, `left`, `right` | `top` | _string_\n  |`cTooltipTrigger` | Sets event handlers to toggle tooltip. Specify one trigger or an array of them. | `Triggers`, `Triggers[]` | `hover` | _string_, _string[]_\n  |`cTooltipVisible` | Toggle the visibility of tooltip component. | `boolean` | `false` |\n\n    "),o.qZA(),o._uU(22,"\n  "),o.qZA(),o._uU(23,"\n"),o.qZA()),2&e&&(o.xp6(6),o.Q6J("files",o.DdM(4,C)),o.xp6(4),o.Q6J("files",o.DdM(5,x)),o.xp6(4),o.Q6J("files",o.DdM(6,_)),o.xp6(3),o.hij("\n  ---\n\n  ## API reference\n\n\n  ### Tooltip\n\n  ",p.usage,"\n\n  ---\n\n  ### Props\n\n  ##### Inputs\n\n  "))},directives:[u.lF,g.U,f,v,U],encapsulation:2,changeDetection:0}),t})()}];let P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[r.Bz.forChild(M)],r.Bz]}),t})(),D=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[c.ez,d.B,s.hJ1,s.z8t,P,s.gzQ,u.JP.forChild()]]}),t})()},9701:(T,i,l)=>{l.d(i,{Z:()=>c});const c="```typescript\nimport { TooltipModule } from '@coreui/angular';\n\n@NgModule({\n    imports: [TooltipModule,]\n})\nexport class AppModule() { }\n```\n"}}]);