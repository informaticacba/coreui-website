(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{TplS:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return d})),n.d(t,"default",(function(){return x}));var a=n("Fcif"),l=n("+I+c"),o=n("mXGw"),u=n("/FXl"),s=n("BIGe"),c=n("ZFoC"),r=n("bzer"),i=(n("aD51"),["components"]),d={};void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/4.0/components/CMultiSelect.mdx"}});var p={_frontmatter:d},b=s.a;function x(e){var t,n,x,v,j,_=e.components,y=Object(l.a)(e,i);return Object(u.b)(b,Object(a.a)({},p,y,{components:_,mdxType:"MDXLayout"}),Object(u.b)("h2",{id:"basic-example"},"Basic example"),Object(u.b)(c.c,{__position:0,__code:"() => {\n  const options = [\n    {\n      value: 0,\n      text: 'Angular',\n    },\n    {\n      value: 1,\n      text: 'Bootstrap',\n    },\n    {\n      value: 2,\n      text: 'React.js',\n    },\n    {\n      value: 3,\n      text: 'Vue.js',\n    },\n    {\n      label: 'backend',\n      options: [\n        {\n          value: 4,\n          text: 'Django',\n        },\n        {\n          value: 5,\n          text: 'Laravel',\n        },\n        {\n          value: 6,\n          text: 'Node.js',\n        },\n      ],\n    },\n  ]\n  return <CMultiSelect options={options} />\n}",__scope:(t={props:y,DefaultLayout:s.a,Playground:c.c,Props:c.d,useState:o.useState,CMultiSelect:r.zb},t.DefaultLayout=s.a,t._frontmatter=d,t),mdxType:"Playground"},(function(){return Object(u.b)(r.zb,{options:[{value:0,text:"Angular"},{value:1,text:"Bootstrap"},{value:2,text:"React.js"},{value:3,text:"Vue.js"},{label:"backend",options:[{value:4,text:"Django"},{value:5,text:"Laravel"},{value:6,text:"Node.js"}]}],mdxType:"CMultiSelect"})})),Object(u.b)(c.c,{__position:1,__code:"() => {\n  const options = [\n    {\n      value: 0,\n      text: 'Angular',\n      selected: true,\n    },\n    {\n      value: 1,\n      text: 'Bootstrap',\n      selected: true,\n      disabled: true,\n    },\n    {\n      value: 2,\n      text: 'React.js',\n    },\n    {\n      value: 3,\n      text: 'Vue.js',\n    },\n    {\n      label: 'backend',\n      options: [\n        {\n          value: 4,\n          text: 'Django',\n        },\n        {\n          value: 5,\n          text: 'Laravel',\n          selected: true,\n        },\n        {\n          value: 6,\n          text: 'Node.js',\n        },\n      ],\n    },\n  ]\n  return <CMultiSelect options={options} />\n}",__scope:(n={props:y,DefaultLayout:s.a,Playground:c.c,Props:c.d,useState:o.useState,CMultiSelect:r.zb},n.DefaultLayout=s.a,n._frontmatter=d,n),mdxType:"Playground"},(function(){return Object(u.b)(r.zb,{options:[{value:0,text:"Angular",selected:!0},{value:1,text:"Bootstrap",selected:!0,disabled:!0},{value:2,text:"React.js"},{value:3,text:"Vue.js"},{label:"backend",options:[{value:4,text:"Django"},{value:5,text:"Laravel",selected:!0},{value:6,text:"Node.js"}]}],mdxType:"CMultiSelect"})})),Object(u.b)("h2",{id:"selection-types"},"Selection types"),Object(u.b)("h3",{id:"counter"},"Counter"),Object(u.b)(c.c,{__position:2,__code:"() => {\n  const options = [\n    {\n      value: 0,\n      text: 'Angular',\n      selected: true,\n    },\n    {\n      value: 1,\n      text: 'Bootstrap',\n      selected: true,\n      disabled: true,\n    },\n    {\n      value: 2,\n      text: 'React.js',\n    },\n    {\n      value: 3,\n      text: 'Vue.js',\n    },\n    {\n      label: 'backend',\n      options: [\n        {\n          value: 4,\n          text: 'Django',\n        },\n        {\n          value: 5,\n          text: 'Laravel',\n          selected: true,\n        },\n        {\n          value: 6,\n          text: 'Node.js',\n        },\n      ],\n    },\n  ]\n  return <CMultiSelect options={options} selectionType=\"counter\" />\n}",__scope:(x={props:y,DefaultLayout:s.a,Playground:c.c,Props:c.d,useState:o.useState,CMultiSelect:r.zb},x.DefaultLayout=s.a,x._frontmatter=d,x),mdxType:"Playground"},(function(){return Object(u.b)(r.zb,{options:[{value:0,text:"Angular",selected:!0},{value:1,text:"Bootstrap",selected:!0,disabled:!0},{value:2,text:"React.js"},{value:3,text:"Vue.js"},{label:"backend",options:[{value:4,text:"Django"},{value:5,text:"Laravel",selected:!0},{value:6,text:"Node.js"}]}],selectionType:"counter",mdxType:"CMultiSelect"})})),Object(u.b)("h3",{id:"tags"},"Tags"),Object(u.b)(c.c,{__position:3,__code:"() => {\n  const options = [\n    {\n      value: 0,\n      text: 'Angular',\n      selected: true,\n    },\n    {\n      value: 1,\n      text: 'Bootstrap',\n      selected: true,\n      disabled: true,\n    },\n    {\n      value: 2,\n      text: 'React.js',\n    },\n    {\n      value: 3,\n      text: 'Vue.js',\n    },\n    {\n      label: 'backend',\n      options: [\n        {\n          value: 4,\n          text: 'Django',\n        },\n        {\n          value: 5,\n          text: 'Laravel',\n          selected: true,\n        },\n        {\n          value: 6,\n          text: 'Node.js',\n        },\n      ],\n    },\n  ]\n  return <CMultiSelect options={options} selectionType=\"tags\" />\n}",__scope:(v={props:y,DefaultLayout:s.a,Playground:c.c,Props:c.d,useState:o.useState,CMultiSelect:r.zb},v.DefaultLayout=s.a,v._frontmatter=d,v),mdxType:"Playground"},(function(){return Object(u.b)(r.zb,{options:[{value:0,text:"Angular",selected:!0},{value:1,text:"Bootstrap",selected:!0,disabled:!0},{value:2,text:"React.js"},{value:3,text:"Vue.js"},{label:"backend",options:[{value:4,text:"Django"},{value:5,text:"Laravel",selected:!0},{value:6,text:"Node.js"}]}],selectionType:"tags",mdxType:"CMultiSelect"})})),Object(u.b)("h3",{id:"text"},"Text"),Object(u.b)(c.c,{__position:4,__code:"() => {\n  const options = [\n    {\n      value: 0,\n      text: 'Angular',\n      selected: true,\n    },\n    {\n      value: 1,\n      text: 'Bootstrap',\n      selected: true,\n      disabled: true,\n    },\n    {\n      value: 2,\n      text: 'React.js',\n    },\n    {\n      value: 3,\n      text: 'Vue.js',\n    },\n    {\n      label: 'backend',\n      options: [\n        {\n          value: 4,\n          text: 'Django',\n        },\n        {\n          value: 5,\n          text: 'Laravel',\n          selected: true,\n        },\n        {\n          value: 6,\n          text: 'Node.js',\n        },\n      ],\n    },\n  ]\n  return <CMultiSelect options={options} selectionType=\"text\" />\n}",__scope:(j={props:y,DefaultLayout:s.a,Playground:c.c,Props:c.d,useState:o.useState,CMultiSelect:r.zb},j.DefaultLayout=s.a,j._frontmatter=d,j),mdxType:"Playground"},(function(){return Object(u.b)(r.zb,{options:[{value:0,text:"Angular",selected:!0},{value:1,text:"Bootstrap",selected:!0,disabled:!0},{value:2,text:"React.js"},{value:3,text:"Vue.js"},{label:"backend",options:[{value:4,text:"Django"},{value:5,text:"Laravel",selected:!0},{value:6,text:"Node.js"}]}],selectionType:"text",mdxType:"CMultiSelect"})})),Object(u.b)("h2",{id:"api"},"API"),Object(u.b)("h3",{id:"cmultiselect"},"CMultiSelect"),Object(u.b)(c.d,{of:r.zb,mdxType:"Props"}))}void 0!==x&&x&&x===Object(x)&&Object.isExtensible(x)&&!x.hasOwnProperty("__filemeta")&&Object.defineProperty(x,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/4.0/components/CMultiSelect.mdx"}}),x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-4-0-components-c-multi-select-mdx-cc145dc922aafc996084.js.map