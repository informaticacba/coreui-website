(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Ggzb:function(o,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return h})),t.d(e,"default",(function(){return p}));var n=t("Fcif"),c=t("+I+c"),i=t("mXGw"),a=t("/FXl"),d=t("BIGe"),s=t("ZFoC"),r=t("bzer"),l=(t("aD51"),["components"]),h={};void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/4.0/components/CAccordion.mdx"}});var b={_frontmatter:h},u=d.a;function p(o){var e,t,p=o.components,y=Object(c.a)(o,l);return Object(a.b)(u,Object(n.a)({},b,y,{components:p,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("p",null,"Click the accordions below to expand/collapse the accordion content."),Object(a.b)(s.c,{__position:0,__code:"() => {\n  const [activeKey, setActiveKey] = useState(0)\n  return (\n    <CAccordion>\n      <CAccordionItem>\n        <CAccordionHeader>\n          <CAccordionButton\n            collapsed={activeKey !== 1}\n            onClick={() =>\n              activeKey === 1 ? setActiveKey(0) : setActiveKey(1)\n            }\n          >\n            Accordion Item #1\n          </CAccordionButton>\n        </CAccordionHeader>\n        <CAccordionCollapse visible={activeKey === 1}>\n          <CAccordionBody>\n            <strong>This is the first item's accordion body.</strong> It is\n            hidden by default, until the collapse plugin adds the appropriate\n            classes that we use to style each element. These classes control\n            the overall appearance, as well as the showing and hiding via CSS\n            transitions. You can modify any of this with custom CSS or\n            overriding our default variables. It's also worth noting that just\n            about any HTML can go within the <code>.accordion-body</code>,\n            though the transition does limit overflow.\n          </CAccordionBody>\n        </CAccordionCollapse>\n      </CAccordionItem>\n      <CAccordionItem>\n        <CAccordionHeader>\n          <CAccordionButton\n            collapsed={activeKey !== 2}\n            onClick={() =>\n              activeKey === 2 ? setActiveKey(0) : setActiveKey(2)\n            }\n          >\n            Accordion Item #2\n          </CAccordionButton>\n        </CAccordionHeader>\n        <CAccordionCollapse visible={activeKey === 2}>\n          <CAccordionBody>\n            <strong>This is the second item's accordion body.</strong> It is\n            hidden by default, until the collapse plugin adds the appropriate\n            classes that we use to style each element. These classes control\n            the overall appearance, as well as the showing and hiding via CSS\n            transitions. You can modify any of this with custom CSS or\n            overriding our default variables. It's also worth noting that just\n            about any HTML can go within the <code>.accordion-body</code>,\n            though the transition does limit overflow.\n          </CAccordionBody>\n        </CAccordionCollapse>\n      </CAccordionItem>\n      <CAccordionItem>\n        <CAccordionHeader>\n          <CAccordionButton\n            collapsed={activeKey !== 3}\n            onClick={() =>\n              activeKey === 3 ? setActiveKey(0) : setActiveKey(3)\n            }\n          >\n            Accordion Item #3\n          </CAccordionButton>\n        </CAccordionHeader>\n        <CAccordionCollapse visible={activeKey === 3}>\n          <CAccordionBody>\n            <strong>This is the third item's accordion body.</strong> It is\n            hidden by default, until the collapse plugin adds the appropriate\n            classes that we use to style each element. These classes control\n            the overall appearance, as well as the showing and hiding via CSS\n            transitions. You can modify any of this with custom CSS or\n            overriding our default variables. It's also worth noting that just\n            about any HTML can go within the <code>.accordion-body</code>,\n            though the transition does limit overflow.\n          </CAccordionBody>\n        </CAccordionCollapse>\n      </CAccordionItem>\n    </CAccordion>\n  )\n}",__scope:(e={props:y,DefaultLayout:d.a,Playground:s.c,Props:s.d,useState:i.useState,CAccordion:r.a,CAccordionBody:r.b,CAccordionButton:r.c,CAccordionCollapse:r.d,CAccordionHeader:r.e,CAccordionItem:r.f},e.DefaultLayout=d.a,e._frontmatter=h,e),mdxType:"Playground"},(function(){var o=Object(i.useState)(0),e=o[0],t=o[1];return Object(a.b)(r.a,{mdxType:"CAccordion"},Object(a.b)(r.f,{mdxType:"CAccordionItem"},Object(a.b)(r.e,{mdxType:"CAccordionHeader"},Object(a.b)(r.c,{collapsed:1!==e,onClick:function(){return t(1===e?0:1)},mdxType:"CAccordionButton"},"Accordion Item #1")),Object(a.b)(r.d,{visible:1===e,mdxType:"CAccordionCollapse"},Object(a.b)(r.b,{mdxType:"CAccordionBody"},Object(a.b)("strong",null,"This is the first item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(a.b)("code",null,".accordion-body"),", though the transition does limit overflow."))),Object(a.b)(r.f,{mdxType:"CAccordionItem"},Object(a.b)(r.e,{mdxType:"CAccordionHeader"},Object(a.b)(r.c,{collapsed:2!==e,onClick:function(){return t(2===e?0:2)},mdxType:"CAccordionButton"},"Accordion Item #2")),Object(a.b)(r.d,{visible:2===e,mdxType:"CAccordionCollapse"},Object(a.b)(r.b,{mdxType:"CAccordionBody"},Object(a.b)("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(a.b)("code",null,".accordion-body"),", though the transition does limit overflow."))),Object(a.b)(r.f,{mdxType:"CAccordionItem"},Object(a.b)(r.e,{mdxType:"CAccordionHeader"},Object(a.b)(r.c,{collapsed:3!==e,onClick:function(){return t(3===e?0:3)},mdxType:"CAccordionButton"},"Accordion Item #3")),Object(a.b)(r.d,{visible:3===e,mdxType:"CAccordionCollapse"},Object(a.b)(r.b,{mdxType:"CAccordionBody"},Object(a.b)("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(a.b)("code",null,".accordion-body"),", though the transition does limit overflow."))))})),Object(a.b)("h3",{id:"flush"},"Flush"),Object(a.b)("p",null,"Add ",Object(a.b)("inlineCode",{parentName:"p"},"flush")," to remove the default ",Object(a.b)("inlineCode",{parentName:"p"},"background-color"),", some borders, and some rounded corners to render accordions edge-to-edge with their parent container."),Object(a.b)(s.c,{__position:1,__code:"() => {\n  const [activeKey, setActiveKey] = useState(0)\n  return (\n    <CAccordion flush>\n      <CAccordionItem>\n        <CAccordionHeader>\n          <CAccordionButton\n            collapsed={activeKey !== 1}\n            onClick={() =>\n              activeKey === 1 ? setActiveKey(0) : setActiveKey(1)\n            }\n          >\n            Accordion Item #1\n          </CAccordionButton>\n        </CAccordionHeader>\n        <CAccordionCollapse visible={activeKey === 1}>\n          <CAccordionBody>\n            <strong>This is the first item's accordion body.</strong> It is\n            hidden by default, until the collapse plugin adds the appropriate\n            classes that we use to style each element. These classes control\n            the overall appearance, as well as the showing and hiding via CSS\n            transitions. You can modify any of this with custom CSS or\n            overriding our default variables. It's also worth noting that just\n            about any HTML can go within the <code>.accordion-body</code>,\n            though the transition does limit overflow.\n          </CAccordionBody>\n        </CAccordionCollapse>\n      </CAccordionItem>\n      <CAccordionItem>\n        <CAccordionHeader>\n          <CAccordionButton\n            collapsed={activeKey !== 2}\n            onClick={() =>\n              activeKey === 2 ? setActiveKey(0) : setActiveKey(2)\n            }\n          >\n            Accordion Item #2\n          </CAccordionButton>\n        </CAccordionHeader>\n        <CAccordionCollapse visible={activeKey === 2}>\n          <CAccordionBody>\n            <strong>This is the second item's accordion body.</strong> It is\n            hidden by default, until the collapse plugin adds the appropriate\n            classes that we use to style each element. These classes control\n            the overall appearance, as well as the showing and hiding via CSS\n            transitions. You can modify any of this with custom CSS or\n            overriding our default variables. It's also worth noting that just\n            about any HTML can go within the <code>.accordion-body</code>,\n            though the transition does limit overflow.\n          </CAccordionBody>\n        </CAccordionCollapse>\n      </CAccordionItem>\n      <CAccordionItem>\n        <CAccordionHeader>\n          <CAccordionButton\n            collapsed={activeKey !== 3}\n            onClick={() =>\n              activeKey === 3 ? setActiveKey(0) : setActiveKey(3)\n            }\n          >\n            Accordion Item #3\n          </CAccordionButton>\n        </CAccordionHeader>\n        <CAccordionCollapse visible={activeKey === 3}>\n          <CAccordionBody>\n            <strong>This is the third item's accordion body.</strong> It is\n            hidden by default, until the collapse plugin adds the appropriate\n            classes that we use to style each element. These classes control\n            the overall appearance, as well as the showing and hiding via CSS\n            transitions. You can modify any of this with custom CSS or\n            overriding our default variables. It's also worth noting that just\n            about any HTML can go within the <code>.accordion-body</code>,\n            though the transition does limit overflow.\n          </CAccordionBody>\n        </CAccordionCollapse>\n      </CAccordionItem>\n    </CAccordion>\n  )\n}",__scope:(t={props:y,DefaultLayout:d.a,Playground:s.c,Props:s.d,useState:i.useState,CAccordion:r.a,CAccordionBody:r.b,CAccordionButton:r.c,CAccordionCollapse:r.d,CAccordionHeader:r.e,CAccordionItem:r.f},t.DefaultLayout=d.a,t._frontmatter=h,t),mdxType:"Playground"},(function(){var o=Object(i.useState)(0),e=o[0],t=o[1];return Object(a.b)(r.a,{flush:!0,mdxType:"CAccordion"},Object(a.b)(r.f,{mdxType:"CAccordionItem"},Object(a.b)(r.e,{mdxType:"CAccordionHeader"},Object(a.b)(r.c,{collapsed:1!==e,onClick:function(){return t(1===e?0:1)},mdxType:"CAccordionButton"},"Accordion Item #1")),Object(a.b)(r.d,{visible:1===e,mdxType:"CAccordionCollapse"},Object(a.b)(r.b,{mdxType:"CAccordionBody"},Object(a.b)("strong",null,"This is the first item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(a.b)("code",null,".accordion-body"),", though the transition does limit overflow."))),Object(a.b)(r.f,{mdxType:"CAccordionItem"},Object(a.b)(r.e,{mdxType:"CAccordionHeader"},Object(a.b)(r.c,{collapsed:2!==e,onClick:function(){return t(2===e?0:2)},mdxType:"CAccordionButton"},"Accordion Item #2")),Object(a.b)(r.d,{visible:2===e,mdxType:"CAccordionCollapse"},Object(a.b)(r.b,{mdxType:"CAccordionBody"},Object(a.b)("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(a.b)("code",null,".accordion-body"),", though the transition does limit overflow."))),Object(a.b)(r.f,{mdxType:"CAccordionItem"},Object(a.b)(r.e,{mdxType:"CAccordionHeader"},Object(a.b)(r.c,{collapsed:3!==e,onClick:function(){return t(3===e?0:3)},mdxType:"CAccordionButton"},"Accordion Item #3")),Object(a.b)(r.d,{visible:3===e,mdxType:"CAccordionCollapse"},Object(a.b)(r.b,{mdxType:"CAccordionBody"},Object(a.b)("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(a.b)("code",null,".accordion-body"),", though the transition does limit overflow."))))})),Object(a.b)("h2",{id:"api"},"API"),Object(a.b)("h3",{id:"caccordion"},"CAccordion"),Object(a.b)(s.d,{of:r.a,mdxType:"Props"}),Object(a.b)("h3",{id:"caccordionbody"},"CAccordionBody"),Object(a.b)(s.d,{of:r.b,mdxType:"Props"}),Object(a.b)("h3",{id:"caccordionbutton"},"CAccordionButton"),Object(a.b)(s.d,{of:r.c,mdxType:"Props"}),Object(a.b)("h3",{id:"caccordioncollapse"},"CAccordionCollapse"),Object(a.b)(s.d,{of:r.d,mdxType:"Props"}),Object(a.b)("h3",{id:"caccordionheader"},"CAccordionHeader"),Object(a.b)(s.d,{of:r.e,mdxType:"Props"}),Object(a.b)("h3",{id:"caccordionitem"},"CAccordionItem"),Object(a.b)(s.d,{of:r.f,mdxType:"Props"}))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/4.0/components/CAccordion.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-4-0-components-c-accordion-mdx-1f52ce9bae9c6cf9b8b9.js.map