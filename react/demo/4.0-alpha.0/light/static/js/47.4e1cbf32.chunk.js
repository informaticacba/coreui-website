(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[47],{442:function(e){e.exports=JSON.parse('{"name":"@coreui/coreui-pro-react-admin-template","description":"CoreUI PRO React Admin Template","version":"4.0.0-alpha.0","config":{"coreui_library_short_version":"4.0"},"author":{"name":"CoreUI","url":"https://coreui.io","github":"https://github.com/coreui","twitter":"https://twitter.com/core_ui"},"contributors":[{"name":"CoreUI Team","url":"https://github.com/orgs/coreui/people"}],"homepage":".","copyright":"Copyright 2017-2021 creativeLabs \u0141ukasz Holeczek","license":"MIT","private":true,"repository":{"type":"git","url":"git@github.com:coreui/coreui-pro-react-admin-template.git"},"dependencies":{"@coreui/chartjs":"next","@coreui/coreui-pro":"4.0.0-rc.5","@coreui/icons":"^2.0.1","@coreui/icons-react":"^1.1.0","@coreui/react-pro":"4.0.0-alpha.1","@coreui/react-chartjs":"next","@coreui/utils":"^1.3.1","@fullcalendar/daygrid":"^5.7.0","@fullcalendar/interaction":"^5.7.0","@fullcalendar/react":"^5.7.0","@fullcalendar/timegrid":"^5.7.0","@wojtekmaj/enzyme-adapter-react-17":"^0.6.1","chart.js":"^3.1.0","classnames":"^2.3.1","core-js":"^3.10.1","enzyme":"^3.11.0","prop-types":"^15.7.2","react":"^17.0.2","react-app-polyfill":"^2.0.0","react-dom":"^17.0.2","react-google-maps":"^9.4.5","react-redux":"^7.2.3","react-router-dom":"^5.2.0","redux":"4.0.5"},"devDependencies":{"auto-changelog":"~2.2.1","eslint":"^7.27.0","eslint-config-prettier":"^8.3.0","eslint-plugin-prettier":"^3.3.1","prettier":"2.2.1","react-scripts":"^4.0.3","sass":"^1.34.0"},"scripts":{"start":"react-scripts start","build":"react-scripts build","lint":"eslint \\"src/**/*.js\\"","test":"react-scripts test","test:cov":"npm test -- --coverage --watchAll=false","test:debug":"react-scripts --inspect-brk test --runInBand","eject":"react-scripts eject","changelog":"auto-changelog --starting-version 3.0.0 --commit-limit false --hide-credit"},"bugs":{"url":"https://github.com/coreui/coreui-pro-react-admin-template/issues"},"jest":{"collectCoverageFrom":["src/**/*.{js,jsx}","!**/*index.js","!src/serviceWorker.js","!src/polyfill.js"]},"engines":{"node":">=10","npm":">=6"}}')},443:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return h})),r.d(t,"d",(function(){return j}));var c=r(0),a=r.n(c),o=r(104),s=r(442),i=r(10);const n=e=>{const{href:t,name:r}=e,c="s"===r.slice(-1),a="https://coreui.io/react/docs/".concat(s.config.coreui_library_short_version,"/").concat(t);return Object(i.jsxs)(o.r,{color:"info",className:"bg-white",children:["A React ",r," component ",c?"have":"has"," been created as a native React.js version of Bootstrap ",r,". ",r," ",c?"are":"is"," delivered with some new features, variants, and unique design that matches CoreUI Design System requirements.",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"For more information please visit our official"," ",Object(i.jsx)(o.fb,{href:a,target:"_blank",children:"documentation of CoreUI Components Library for React.js"}),"."]})};var l=a.a.memo(n);const p=e=>{const{href:t,name:r,text:c,...a}=e,s=r?"https://coreui.io/react/docs/components/".concat(r):t;return Object(i.jsx)("div",{className:"float-end",children:Object(i.jsx)(o.fb,{...a,href:s,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(i.jsx)("small",{className:"text-medium-emphasis",children:c||"docs"})})})};var d=a.a.memo(p),m=r(444);const u=e=>{const{children:t,href:r}=e,c="https://coreui.io/react/docs/".concat(s.config.coreui_library_short_version,"/").concat(r);return Object(i.jsxs)("div",{className:"example",children:[Object(i.jsxs)(o.nb,{variant:"underline",children:[Object(i.jsx)(o.ob,{children:Object(i.jsxs)(o.pb,{href:"#",active:!0,children:[Object(i.jsx)(m.a,{name:"cil-media-play",className:"me-2"}),"Preview"]})}),Object(i.jsx)(o.ob,{children:Object(i.jsxs)(o.pb,{href:c,target:"_blank",children:[Object(i.jsx)(m.a,{name:"cil-code",className:"me-2"}),"Code"]})})]}),Object(i.jsx)(o.Cb,{className:"rounded-bottom",children:Object(i.jsx)(o.Db,{className:"p-3 preview",visible:!0,children:t})})]})};var h=a.a.memo(u);const b=e=>{let{children:t,...r}={...e};return Object(i.jsx)(o.k,{href:"https://coreui.io/pro/react/",color:"danger",target:"_blank",rel:"noreferrer noopener",...r,children:t||"CoreUI Pro Component"})};var j=a.a.memo(b)},834:function(e,t,r){"use strict";r.r(t);var c=r(0),a=r.n(c),o=r(104),s=r(591),i=r(443),n=r(10);const l={lat:37.431489,lng:-122.163719},p=[{lat:37.431489,lng:-122.163719,label:"S",draggable:!1,title:"Stanford",www:"https://www.stanford.edu/"},{lat:37.394694,lng:-122.150333,label:"T",draggable:!1,title:"Tesla",www:"https://www.tesla.com/"},{lat:37.331681,lng:-122.0301,label:"A",draggable:!1,title:"Apple",www:"https://www.apple.com/"},{lat:37.484722,lng:-122.148333,label:"F",draggable:!1,title:"Facebook",www:"https://www.facebook.com/"}],d=()=>p.map(((e,t)=>Object(n.jsx)(m,{location:e},t.toString()))),m=({location:e})=>{const[t,r]=a.a.useState(!1);return Object(n.jsx)(s.Marker,{onClick:()=>r(!t),position:e,title:e.title,label:e.label,children:t&&Object(n.jsx)(s.InfoWindow,{onCloseClick:()=>r(!1),children:Object(n.jsx)(o.pb,{href:e.www,target:"_blank",children:e.title})})})},u=Object(s.withScriptjs)(Object(s.withGoogleMap)((()=>Object(n.jsx)(s.GoogleMap,{defaultZoom:11,defaultCenter:l,children:Object(n.jsx)(d,{locations:p})}))));t.default=()=>Object(n.jsxs)(o.s,{children:[Object(n.jsxs)(o.w,{children:["React Google Maps ",Object(n.jsx)(i.d,{})]}),Object(n.jsx)(o.t,{children:Object(n.jsx)(u,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=".concat("AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA"),loadingElement:Object(n.jsx)("div",{style:{height:"100%"}}),containerElement:Object(n.jsx)("div",{style:{height:"400px"}}),mapElement:Object(n.jsx)("div",{style:{height:"100%"}})},"map")})]})}}]);
//# sourceMappingURL=47.4e1cbf32.chunk.js.map