(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[49],{466:function(e,s){!function(e,s){for(var c in s)e[c]=s[c]}(s,function(e){var s={};function c(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}return c.m=e,c.c=s,c.d=function(e,s,t){c.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,s){if(1&s&&(e=c(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var r in e)c.d(t,r,function(s){return e[s]}.bind(null,r));return t},c.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(s,"a",s),s},c.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},c.p="",c(c.s=0)}([function(e,s,c){"use strict";c.r(s),c.d(s,"deepObjectsMerge",(function(){return t})),c.d(s,"getColor",(function(){return l})),c.d(s,"getStyle",(function(){return n})),c.d(s,"hexToRgb",(function(){return j})),c.d(s,"hexToRgba",(function(){return d})),c.d(s,"makeUid",(function(){return b})),c.d(s,"omitByKeys",(function(){return o})),c.d(s,"pickByKeys",(function(){return m})),c.d(s,"rgbToHex",(function(){return x}));var t=function e(s,c){for(var t=0,r=Object.keys(c);t<r.length;t++){var a=r[t];c[a]instanceof Object&&Object.assign(c[a],e(s[a],c[a]))}return Object.assign(s||{},c),s},r=function(){for(var e={},s=document.styleSheets,c="",t=s.length-1;t>-1;t--){for(var r=s[t].cssRules,a=r.length-1;a>-1;a--)if(".ie-custom-properties"===r[a].selectorText){c=r[a].cssText;break}if(c)break}return(c=c.substring(c.lastIndexOf("{")+1,c.lastIndexOf("}"))).split(";").forEach((function(s){if(s){var c=s.split(": ")[0],t=s.split(": ")[1];c&&t&&(e["--".concat(c.trim())]=t.trim())}})),e},a=function(){return Boolean(document.documentMode)&&document.documentMode>=10},i=function(e){return e.match(/^--.*/i)},n=function(e){var s,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(i(e)&&a()){var t=r();s=t[e]}else s=window.getComputedStyle(c,null).getPropertyValue(e).replace(/^\s/,"");return s},l=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,c="--".concat(e),t=n(c,s);return t||e},j=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var s,c,t;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(s=parseInt(e.slice(1,3),16),c=parseInt(e.slice(3,5),16),t=parseInt(e.slice(5,7),16)):(s=parseInt(e.slice(1,2),16),c=parseInt(e.slice(2,3),16),t=parseInt(e.slice(3,5),16)),"rgba(".concat(s,", ").concat(c,", ").concat(t,")")},d=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var c,t,r,a=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!a)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(c=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16)):(c=parseInt(e.slice(1,2),16),t=parseInt(e.slice(2,3),16),r=parseInt(e.slice(3,5),16)),"rgba(".concat(c,", ").concat(t,", ").concat(r,", ").concat(s/100,")")},b=function(){return"uid-"+Math.random().toString(36).substr(2)},o=function(e,s){for(var c={},t=Object.keys(e),r=0;r<t.length;r++)!s.includes(t[r])&&(c[t[r]]=e[t[r]]);return c},m=function(e,s){for(var c={},t=0;t<s.length;t++)c[s[t]]=e[s[t]];return c},x=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var s=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!s)throw new Error("".concat(e," is not a valid rgb color"));var c="0".concat(parseInt(s[1],10).toString(16)),t="0".concat(parseInt(s[2],10).toString(16)),r="0".concat(parseInt(s[3],10).toString(16));return"#".concat(c.slice(-2)).concat(t.slice(-2)).concat(r.slice(-2))},h={deepObjectsMerge:t,getColor:l,getStyle:n,hexToRgb:j,hexToRgba:d,makeUid:b,omitByKeys:o,pickByKeys:m,rgbToHex:x};s.default=h}]))},796:function(e,s,c){"use strict";c.r(s);var t=c(0),r=c(104),a=c(465),i=c(466),n=c(444),l=c(10);const j=Object(t.lazy)((()=>c.e(54).then(c.bind(null,505)))),d=Object(t.lazy)((()=>c.e(53).then(c.bind(null,504))));s.default=()=>{const e=(e,s)=>Math.floor(Math.random()*(s-e+1)+e);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsxs)(r.s,{className:"mb-4",children:[Object(l.jsxs)(r.t,{children:[Object(l.jsxs)(r.vb,{children:[Object(l.jsxs)(r.F,{sm:"5",children:[Object(l.jsx)("h4",{id:"traffic",className:"card-title mb-0",children:"Traffic"}),Object(l.jsx)("div",{className:"small text-medium-emphasis",children:"January - July 2021"})]}),Object(l.jsxs)(r.F,{sm:"7",className:"d-none d-md-block",children:[Object(l.jsx)(r.n,{color:"primary",className:"float-end",children:Object(l.jsx)(n.a,{name:"cil-cloud-download"})}),Object(l.jsx)(r.p,{className:"float-end me-3",children:["Day","Month","Year"].map((e=>Object(l.jsx)(r.n,{color:"outline-secondary",className:"mx-0",active:"Month"===e,children:e},e)))})]})]}),Object(l.jsx)(a.d,{style:{height:"300px",marginTop:"40px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:Object(i.hexToRgba)(Object(i.getStyle)("--cui-info"),10),borderColor:Object(i.getStyle)("--cui-info"),pointHoverBackgroundColor:Object(i.getStyle)("--cui-info"),borderWidth:2,data:[e(50,200),e(50,200),e(50,200),e(50,200),e(50,200),e(50,200),e(50,200)],fill:!0},{label:"My Second dataset",backgroundColor:"transparent",borderColor:Object(i.getStyle)("--cui-success"),pointHoverBackgroundColor:Object(i.getStyle)("--cui-success"),borderWidth:2,data:[e(50,200),e(50,200),e(50,200),e(50,200),e(50,200),e(50,200),e(50,200)]},{label:"My Third dataset",backgroundColor:"transparent",borderColor:Object(i.getStyle)("--cui-danger"),pointHoverBackgroundColor:Object(i.getStyle)("--cui-danger"),borderWidth:1,borderDash:[8,5],data:[65,65,65,65,65,65,65]}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{drawOnChartArea:!1}},y:{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}})]}),Object(l.jsx)(r.u,{children:Object(l.jsxs)(r.vb,{className:"text-center",children:[Object(l.jsxs)(r.F,{md:!0,sm:"12",className:"mb-sm-2 mb-0",children:[Object(l.jsx)("div",{className:"text-medium-emphasis",children:"Visits"}),Object(l.jsx)("strong",{children:"29.703 Users (40%)"}),Object(l.jsx)(r.tb,{className:"mt-2",thin:!0,color:"success-gradient",value:40})]}),Object(l.jsxs)(r.F,{md:!0,sm:"12",className:"mb-sm-2 mb-0",children:[Object(l.jsx)("div",{className:"text-medium-emphasis",children:"Unique"}),Object(l.jsx)("strong",{children:"24.093 Users (20%)"}),Object(l.jsx)(r.tb,{className:"mt-2",thin:!0,color:"info-gradient",value:40})]}),Object(l.jsxs)(r.F,{md:!0,sm:"12",className:"mb-sm-2 mb-0",children:[Object(l.jsx)("div",{className:"text-medium-emphasis",children:"Pageviews"}),Object(l.jsx)("strong",{children:"78.706 Views (60%)"}),Object(l.jsx)(r.tb,{className:"mt-2",thin:!0,color:"warning-gradient",value:40})]}),Object(l.jsxs)(r.F,{md:!0,sm:"12",className:"mb-sm-2 mb-0",children:[Object(l.jsx)("div",{className:"text-medium-emphasis",children:"New Users"}),Object(l.jsx)("strong",{children:"22.123 Users (80%)"}),Object(l.jsx)(r.tb,{className:"mt-2",thin:!0,color:"danger-gradient",value:40})]}),Object(l.jsxs)(r.F,{md:!0,sm:"12",className:"mb-sm-2 mb-0",children:[Object(l.jsx)("div",{className:"text-medium-emphasis",children:"Bounce Rate"}),Object(l.jsx)("strong",{children:"Average Rate (40.15%)"}),Object(l.jsx)(r.tb,{className:"mt-2",thin:!0,value:40})]})]})})]}),Object(l.jsx)(d,{withCharts:!0}),Object(l.jsx)(r.vb,{children:Object(l.jsx)(r.F,{xs:!0,children:Object(l.jsxs)(r.s,{className:"mb-4",children:[Object(l.jsxs)(r.w,{children:["Traffic "," & "," Sales"]}),Object(l.jsxs)(r.t,{children:[Object(l.jsxs)(r.vb,{children:[Object(l.jsxs)(r.F,{xs:"12",md:"6",xl:"6",children:[Object(l.jsxs)(r.vb,{children:[Object(l.jsx)(r.F,{sm:"6",children:Object(l.jsxs)("div",{className:"border-start border-start-4 border-start-info py-1 px-3",children:[Object(l.jsx)("div",{className:"text-medium-emphasis small",children:"New Clients"}),Object(l.jsx)("div",{className:"fs-5 fw-semibold",children:"9,123"})]})}),Object(l.jsx)(r.F,{sm:"6",children:Object(l.jsxs)("div",{className:"border-start border-start-4 border-start-danger py-1 px-3 mb-3",children:[Object(l.jsx)("div",{className:"text-medium-emphasis small",children:"Recurring Clients"}),Object(l.jsx)("div",{className:"fs-5 fw-semibold",children:"22,643"})]})})]}),Object(l.jsx)("hr",{className:"mt-0"}),Object(l.jsxs)("div",{className:"progress-group mb-4",children:[Object(l.jsx)("div",{className:"progress-group-prepend",children:Object(l.jsx)("span",{className:"text-medium-emphasis small",children:"Monday"})}),Object(l.jsxs)("div",{className:"progress-group-bars",children:[Object(l.jsx)(r.tb,{thin:!0,color:"info-gradient",value:34}),Object(l.jsx)(r.tb,{thin:!0,color:"danger-gradient",value:78})]})]}),Object(l.jsxs)("div",{className:"progress-group mb-4",children:[Object(l.jsx)("div",{className:"progress-group-prepend",children:Object(l.jsx)("span",{className:"text-medium-emphasis small",children:"Tuesday"})}),Object(l.jsxs)("div",{className:"progress-group-bars",children:[Object(l.jsx)(r.tb,{thin:!0,color:"info-gradient",value:56}),Object(l.jsx)(r.tb,{thin:!0,color:"danger-gradient",value:94})]})]}),Object(l.jsxs)("div",{className:"progress-group mb-4",children:[Object(l.jsx)("div",{className:"progress-group-prepend",children:Object(l.jsx)("span",{className:"text-medium-emphasis small",children:"Wednesday"})}),Object(l.jsxs)("div",{className:"progress-group-bars",children:[Object(l.jsx)(r.tb,{thin:!0,color:"info-gradient",value:12}),Object(l.jsx)(r.tb,{thin:!0,color:"danger-gradient",value:67})]})]}),Object(l.jsxs)("div",{className:"progress-group mb-4",children:[Object(l.jsx)("div",{className:"progress-group-prepend",children:Object(l.jsx)("span",{className:"text-medium-emphasis small",children:"Thursday"})}),Object(l.jsxs)("div",{className:"progress-group-bars",children:[Object(l.jsx)(r.tb,{thin:!0,color:"info-gradient",value:43}),Object(l.jsx)(r.tb,{thin:!0,color:"danger-gradient",value:91})]})]}),Object(l.jsxs)("div",{className:"progress-group mb-4",children:[Object(l.jsx)("div",{className:"progress-group-prepend",children:Object(l.jsx)("span",{className:"text-medium-emphasis small",children:"Friday"})}),Object(l.jsxs)("div",{className:"progress-group-bars",children:[Object(l.jsx)(r.tb,{thin:!0,color:"info-gradient",value:22}),Object(l.jsx)(r.tb,{thin:!0,color:"danger-gradient",value:73})]})]}),Object(l.jsxs)("div",{className:"progress-group mb-4",children:[Object(l.jsx)("div",{className:"progress-group-prepend",children:Object(l.jsx)("span",{className:"text-medium-emphasis small",children:"Saturday"})}),Object(l.jsxs)("div",{className:"progress-group-bars",children:[Object(l.jsx)(r.tb,{thin:!0,color:"info-gradient",value:53}),Object(l.jsx)(r.tb,{thin:!0,color:"danger-gradient",value:82})]})]}),Object(l.jsxs)("div",{className:"progress-group mb-4",children:[Object(l.jsx)("div",{className:"progress-group-prepend",children:Object(l.jsx)("span",{className:"text-medium-emphasis small",children:"Sunday"})}),Object(l.jsxs)("div",{className:"progress-group-bars",children:[Object(l.jsx)(r.tb,{thin:!0,color:"info-gradient",value:9}),Object(l.jsx)(r.tb,{thin:!0,color:"danger-gradient",value:69})]})]})]}),Object(l.jsxs)(r.F,{xs:"12",md:"6",xl:"6",children:[Object(l.jsxs)(r.vb,{children:[Object(l.jsx)(r.F,{sm:"6",children:Object(l.jsxs)("div",{className:"border-start border-start-4 border-start-warning py-1 px-3 mb-3",children:[Object(l.jsx)("div",{className:"text-medium-emphasis small",children:"Pageviews"}),Object(l.jsx)("div",{className:"fs-5 fw-semibold",children:"78,623"})]})}),Object(l.jsx)(r.F,{sm:"6",children:Object(l.jsxs)("div",{className:"border-start border-start-4 border-start-success py-1 px-3 mb-3",children:[Object(l.jsx)("div",{className:"text-medium-emphasis small",children:"Organic"}),Object(l.jsx)("div",{className:"fs-5 fw-semibold",children:"49,123"})]})})]}),Object(l.jsx)("hr",{className:"mt-0"}),Object(l.jsxs)("div",{className:"progress-group mb-4",children:[Object(l.jsxs)("div",{className:"progress-group-header",children:[Object(l.jsx)(n.a,{className:"icon icon-lg me-2",name:"cil-user"}),Object(l.jsx)("span",{children:"Male"}),Object(l.jsx)("span",{className:"ms-auto font-semibold",children:"43%"})]}),Object(l.jsx)("div",{className:"progress-group-bars",children:Object(l.jsx)(r.tb,{thin:!0,color:"warning-gradient",value:43})})]}),Object(l.jsxs)("div",{className:"progress-group mb-5",children:[Object(l.jsxs)("div",{className:"progress-group-header",children:[Object(l.jsx)(n.a,{className:"icon icon-lg me-2",name:"cil-user-female"}),Object(l.jsx)("span",{children:"Female"}),Object(l.jsx)("span",{className:"ms-auto font-semibold",children:"37%"})]}),Object(l.jsx)("div",{className:"progress-group-bars",children:Object(l.jsx)(r.tb,{thin:!0,color:"warning-gradient",value:37})})]}),Object(l.jsxs)("div",{className:"progress-group",children:[Object(l.jsxs)("div",{className:"progress-group-header",children:[Object(l.jsx)(n.a,{className:"icon icon-lg me-2",name:"cib-google"}),Object(l.jsx)("span",{children:"Organic Search"}),Object(l.jsxs)("span",{className:"ms-auto font-semibold",children:["191,235 ",Object(l.jsx)("span",{className:"text-medium-emphasis small",children:"(56%)"})]})]}),Object(l.jsx)("div",{className:"progress-group-bars",children:Object(l.jsx)(r.tb,{thin:!0,color:"success-gradient",value:56})})]}),Object(l.jsxs)("div",{className:"progress-group",children:[Object(l.jsxs)("div",{className:"progress-group-header",children:[Object(l.jsx)(n.a,{name:"cib-facebook",className:"icon icon-lg me-2"}),Object(l.jsx)("span",{children:"Facebook"}),Object(l.jsxs)("span",{className:"ms-auto font-semibold",children:["51,223 ",Object(l.jsx)("span",{className:"text-medium-emphasis small",children:"(15%)"})]})]}),Object(l.jsx)("div",{className:"progress-group-bars",children:Object(l.jsx)(r.tb,{thin:!0,color:"success-gradient",value:15})})]}),Object(l.jsxs)("div",{className:"progress-group",children:[Object(l.jsxs)("div",{className:"progress-group-header",children:[Object(l.jsx)(n.a,{name:"cib-twitter",className:"icon icon-lg me-2"}),Object(l.jsx)("span",{children:"Twitter"}),Object(l.jsxs)("span",{className:"ms-auto font-semibold",children:["37,564 ",Object(l.jsx)("span",{className:"text-medium-emphasis small",children:"(11%)"})]})]}),Object(l.jsx)("div",{className:"progress-group-bars",children:Object(l.jsx)(r.tb,{thin:!0,color:"success-gradient",value:11})})]}),Object(l.jsxs)("div",{className:"progress-group",children:[Object(l.jsxs)("div",{className:"progress-group-header",children:[Object(l.jsx)(n.a,{name:"cib-linkedin",className:"icon icon-lg me-2"}),Object(l.jsx)("span",{children:"LinkedIn"}),Object(l.jsxs)("span",{className:"ms-auto font-semibold",children:["27,319 ",Object(l.jsx)("span",{className:"text-medium-emphasis small",children:"(8%)"})]})]}),Object(l.jsx)("div",{className:"progress-group-bars",children:Object(l.jsx)(r.tb,{thin:!0,color:"success-gradient",value:8})})]})]})]}),Object(l.jsx)("br",{}),Object(l.jsxs)(r.Eb,{hover:!0,responsive:!0,align:"middle",className:"mb-0 border",children:[Object(l.jsx)(r.Ib,{color:"light",children:Object(l.jsxs)(r.Kb,{children:[Object(l.jsx)(r.Jb,{className:"text-center",children:Object(l.jsx)(n.a,{name:"cil-people"})}),Object(l.jsx)(r.Jb,{children:"User"}),Object(l.jsx)(r.Jb,{className:"text-center",children:"Country"}),Object(l.jsx)(r.Jb,{children:"Usage"}),Object(l.jsx)(r.Jb,{className:"text-center",children:"Payment Method"}),Object(l.jsx)(r.Jb,{children:"Activity"})]})}),Object(l.jsxs)(r.Fb,{children:[Object(l.jsxs)(r.Kb,{children:[Object(l.jsx)(r.Hb,{className:"text-center",children:Object(l.jsx)(r.j,{size:"md",src:"avatars/1.jpg",status:"success"})}),Object(l.jsxs)(r.Hb,{children:[Object(l.jsx)("div",{children:"Yiorgos Avraamu"}),Object(l.jsxs)("div",{className:"small text-medium-emphasis",children:[Object(l.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(l.jsx)(r.Hb,{className:"text-center",children:Object(l.jsx)(n.a,{size:"xl",name:"cif-us",title:"us",id:"us"})}),Object(l.jsxs)(r.Hb,{children:[Object(l.jsxs)("div",{className:"clearfix",children:[Object(l.jsx)("div",{className:"float-start",children:Object(l.jsx)("strong",{children:"50%"})}),Object(l.jsx)("div",{className:"float-end",children:Object(l.jsx)("small",{className:"text-medium-emphasis",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(l.jsx)(r.tb,{thin:!0,color:"success-gradient",value:50})]}),Object(l.jsx)(r.Hb,{className:"text-center",children:Object(l.jsx)(n.a,{size:"xl",name:"cib-cc-mastercard"})}),Object(l.jsxs)(r.Hb,{children:[Object(l.jsx)("div",{className:"small text-medium-emphasis",children:"Last login"}),Object(l.jsx)("strong",{children:"10 sec ago"})]})]}),Object(l.jsxs)(r.Kb,{children:[Object(l.jsx)(r.Hb,{className:"text-center",children:Object(l.jsx)(r.j,{size:"md",src:"avatars/2.jpg",status:"danger"})}),Object(l.jsxs)(r.Hb,{children:[Object(l.jsx)("div",{children:"Avram Tarasios"}),Object(l.jsxs)("div",{className:"small text-medium-emphasis",children:[Object(l.jsx)("span",{children:"Recurring"})," | Registered: Jan 1, 2015"]})]}),Object(l.jsx)(r.Hb,{className:"text-center",children:Object(l.jsx)(n.a,{size:"xl",name:"cif-br",title:"br",id:"br"})}),Object(l.jsxs)(r.Hb,{children:[Object(l.jsxs)("div",{className:"clearfix",children:[Object(l.jsx)("div",{className:"float-start",children:Object(l.jsx)("strong",{children:"10%"})}),Object(l.jsx)("div",{className:"float-end",children:Object(l.jsx)("small",{className:"text-medium-emphasis",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(l.jsx)(r.tb,{thin:!0,color:"info-gradient",value:10})]}),Object(l.jsx)(r.Hb,{className:"text-center",children:Object(l.jsx)(n.a,{size:"xl",name:"cib-cc-visa"})}),Object(l.jsxs)(r.Hb,{children:[Object(l.jsx)("div",{className:"small text-medium-emphasis",children:"Last login"}),Object(l.jsx)("strong",{children:"5 minutes ago"})]})]}),Object(l.jsxs)(r.Kb,{children:[Object(l.jsx)(r.Hb,{className:"text-center",children:Object(l.jsx)(r.j,{size:"md",src:"avatars/3.jpg",status:"warning"})}),Object(l.jsxs)(r.Hb,{children:[Object(l.jsx)("div",{children:"Quintin Ed"}),Object(l.jsxs)("div",{className:"small text-medium-emphasis",children:[Object(l.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(l.jsx)(r.Hb,{className:"text-center",children:Object(l.jsx)(n.a,{size:"xl",name:"cif-in",title:"in",id:"in"})}),Object(l.jsxs)(r.Hb,{children:[Object(l.jsxs)("div",{className:"clearfix",children:[Object(l.jsx)("div",{className:"float-start",children:Object(l.jsx)("strong",{children:"74%"})}),Object(l.jsx)("div",{className:"float-end",children:Object(l.jsx)("small",{className:"text-medium-emphasis",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(l.jsx)(r.tb,{thin:!0,color:"warning-gradient",value:74})]}),Object(l.jsx)(r.Hb,{className:"text-center",children:Object(l.jsx)(n.a,{size:"xl",name:"cib-cc-stripe"})}),Object(l.jsxs)(r.Hb,{children:[Object(l.jsx)("div",{className:"small text-medium-emphasis",children:"Last login"}),Object(l.jsx)("strong",{children:"1 hour ago"})]})]}),Object(l.jsxs)(r.Kb,{children:[Object(l.jsx)(r.Hb,{className:"text-center",children:Object(l.jsx)(r.j,{size:"md",src:"avatars/4.jpg",status:"secondary"})}),Object(l.jsxs)(r.Hb,{children:[Object(l.jsx)("div",{children:"En\xe9as Kwadwo"}),Object(l.jsxs)("div",{className:"small text-medium-emphasis",children:[Object(l.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(l.jsx)(r.Hb,{className:"text-center",children:Object(l.jsx)(n.a,{size:"xl",name:"cif-fr",title:"fr",id:"fr"})}),Object(l.jsxs)(r.Hb,{children:[Object(l.jsxs)("div",{className:"clearfix",children:[Object(l.jsx)("div",{className:"float-start",children:Object(l.jsx)("strong",{children:"98%"})}),Object(l.jsx)("div",{className:"float-end",children:Object(l.jsx)("small",{className:"text-medium-emphasis",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(l.jsx)(r.tb,{thin:!0,color:"danger-gradient",value:98})]}),Object(l.jsx)(r.Hb,{className:"text-center",children:Object(l.jsx)(n.a,{size:"xl",name:"cib-cc-paypal"})}),Object(l.jsxs)(r.Hb,{children:[Object(l.jsx)("div",{className:"small text-medium-emphasis",children:"Last login"}),Object(l.jsx)("strong",{children:"Last month"})]})]}),Object(l.jsxs)(r.Kb,{children:[Object(l.jsx)(r.Hb,{className:"text-center",children:Object(l.jsx)(r.j,{size:"md",src:"avatars/5.jpg",status:"success"})}),Object(l.jsxs)(r.Hb,{children:[Object(l.jsx)("div",{children:"Agapetus Tade\xe1\u0161"}),Object(l.jsxs)("div",{className:"small text-medium-emphasis",children:[Object(l.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(l.jsx)(r.Hb,{className:"text-center",children:Object(l.jsx)(n.a,{size:"xl",name:"cif-es",title:"es",id:"es"})}),Object(l.jsxs)(r.Hb,{children:[Object(l.jsxs)("div",{className:"clearfix",children:[Object(l.jsx)("div",{className:"float-start",children:Object(l.jsx)("strong",{children:"22%"})}),Object(l.jsx)("div",{className:"float-end",children:Object(l.jsx)("small",{className:"text-medium-emphasis",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(l.jsx)(r.tb,{thin:!0,color:"info-gradient",value:22})]}),Object(l.jsx)(r.Hb,{className:"text-center",children:Object(l.jsx)(n.a,{size:"xl",name:"cib-cc-apple-pay"})}),Object(l.jsxs)(r.Hb,{children:[Object(l.jsx)("div",{className:"small text-medium-emphasis",children:"Last login"}),Object(l.jsx)("strong",{children:"Last week"})]})]}),Object(l.jsxs)(r.Kb,{children:[Object(l.jsx)(r.Hb,{className:"text-center",children:Object(l.jsx)(r.j,{size:"md",src:"avatars/6.jpg",status:"danger"})}),Object(l.jsxs)(r.Hb,{children:[Object(l.jsx)("div",{children:"Friderik D\xe1vid"}),Object(l.jsxs)("div",{className:"small text-medium-emphasis",children:[Object(l.jsx)("span",{children:"New"})," | Registered: Jan 1, 2015"]})]}),Object(l.jsx)(r.Hb,{className:"text-center",children:Object(l.jsx)(n.a,{size:"xl",name:"cif-pl",title:"pl",id:"pl"})}),Object(l.jsxs)(r.Hb,{children:[Object(l.jsxs)("div",{className:"clearfix",children:[Object(l.jsx)("div",{className:"float-start",children:Object(l.jsx)("strong",{children:"43%"})}),Object(l.jsx)("div",{className:"float-end",children:Object(l.jsx)("small",{className:"text-medium-emphasis",children:"Jun 11, 2015 - Jul 10, 2015"})})]}),Object(l.jsx)(r.tb,{thin:!0,color:"success-gradient",value:43})]}),Object(l.jsx)(r.Hb,{className:"text-center",children:Object(l.jsx)(n.a,{size:"xl",name:"cib-cc-amex"})}),Object(l.jsxs)(r.Hb,{children:[Object(l.jsx)("div",{className:"small text-medium-emphasis",children:"Last login"}),Object(l.jsx)("strong",{children:"Yesterday"})]})]})]})]})]})]})})})]})}}}]);
//# sourceMappingURL=49.624d2012.chunk.js.map