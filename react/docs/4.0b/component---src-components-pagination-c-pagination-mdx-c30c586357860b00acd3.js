(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{e0uW:function(a,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return l})),n.d(e,"default",(function(){return c}));var t=n("Fcif"),i=n("+I+c"),o=(n("IFzZ"),n("/FXl")),m=n("BIGe"),b=n("ZFoC"),g=n("rNyM"),r=n("8rsy"),l=(n("aD51"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/pagination/CPagination.mdx"}});var p={_frontmatter:l},P=m.a;function c(a){var e,n,c,s,d,C,u,I=a.components,y=Object(i.a)(a,["components"]);return Object(o.b)(P,Object(t.a)({},p,y,{components:I,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping ",Object(o.b)("inlineCode",{parentName:"p"},"<nav>")," element to identify it as a navigation section to screen readers and other assistive technologies."),Object(o.b)("p",null,"In addition, as pages likely have more than one such navigation section, it's advisable to provide a descriptive ",Object(o.b)("inlineCode",{parentName:"p"},"aria-label")," for the ",Object(o.b)("inlineCode",{parentName:"p"},"<nav>")," to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be ",Object(o.b)("inlineCode",{parentName:"p"},'aria-label="Search results pages"'),"."),Object(o.b)(b.c,{__position:0,__code:'<CPagination aria-label="Page navigation example">\n  <CPaginationItem>Previous</CPaginationItem>\n  <CPaginationItem>1</CPaginationItem>\n  <CPaginationItem>2</CPaginationItem>\n  <CPaginationItem>3</CPaginationItem>\n  <CPaginationItem>Next</CPaginationItem>\n</CPagination>',__scope:(e={props:y,DefaultLayout:m.a,Playground:b.c,Props:b.d,CPagination:g.a,CPaginationItem:r.a},e.DefaultLayout=m.a,e._frontmatter=l,e),mdxType:"Playground"},Object(o.b)(g.a,{"aria-label":"Page navigation example",mdxType:"CPagination"},Object(o.b)(r.a,{mdxType:"CPaginationItem"},"Previous"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"1"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"2"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"3"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"Next"))),Object(o.b)("h2",{id:"working-with-icons"},"Working with icons"),Object(o.b)("p",null,"Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with ",Object(o.b)("inlineCode",{parentName:"p"},"aria")," attributes."),Object(o.b)(b.c,{__position:1,__code:'<CPagination aria-label="Page navigation example">\n  <CPaginationItem aria-label="Previous">\n    <span aria-hidden="true">&laquo;</span>\n  </CPaginationItem>\n  <CPaginationItem>1</CPaginationItem>\n  <CPaginationItem>2</CPaginationItem>\n  <CPaginationItem>3</CPaginationItem>\n  <CPaginationItem aria-label="Next">\n    <span aria-hidden="true">&raquo;</span>\n  </CPaginationItem>\n</CPagination>',__scope:(n={props:y,DefaultLayout:m.a,Playground:b.c,Props:b.d,CPagination:g.a,CPaginationItem:r.a},n.DefaultLayout=m.a,n._frontmatter=l,n),mdxType:"Playground"},Object(o.b)(g.a,{"aria-label":"Page navigation example",mdxType:"CPagination"},Object(o.b)(r.a,{"aria-label":"Previous",mdxType:"CPaginationItem"},Object(o.b)("span",{"aria-hidden":"true"},"«")),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"1"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"2"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"3"),Object(o.b)(r.a,{"aria-label":"Next",mdxType:"CPaginationItem"},Object(o.b)("span",{"aria-hidden":"true"},"»")))),Object(o.b)("h2",{id:"disabled-and-active-states"},"Disabled and active states"),Object(o.b)("p",null,"Pagination links are customizable for different circumstances. Use ",Object(o.b)("inlineCode",{parentName:"p"},"disabled")," for links that appear un-clickable and ",Object(o.b)("inlineCode",{parentName:"p"},".active")," to indicate the current page."),Object(o.b)("p",null,"While the ",Object(o.b)("inlineCode",{parentName:"p"},"disabled")," prop uses ",Object(o.b)("inlineCode",{parentName:"p"},"pointer-events: none")," to ",Object(o.b)("em",{parentName:"p"},"try")," to disable the link functionality of ",Object(o.b)("inlineCode",{parentName:"p"},"<a>"),"s, that CSS property is not yet standardized and doesn't account for keyboard navigation. As such, we always add ",Object(o.b)("inlineCode",{parentName:"p"},'tabindex="-1"')," on disabled links and use custom JavaScript to fully disable their functionality."),Object(o.b)(b.c,{__position:2,__code:'<CPagination aria-label="Page navigation example">\n  <CPaginationItem aria-label="Previous" disabled>\n    <span aria-hidden="true">&laquo;</span>\n  </CPaginationItem>\n  <CPaginationItem active>1</CPaginationItem>\n  <CPaginationItem>2</CPaginationItem>\n  <CPaginationItem>3</CPaginationItem>\n  <CPaginationItem aria-label="Next">\n    <span aria-hidden="true">&raquo;</span>\n  </CPaginationItem>\n</CPagination>',__scope:(c={props:y,DefaultLayout:m.a,Playground:b.c,Props:b.d,CPagination:g.a,CPaginationItem:r.a},c.DefaultLayout=m.a,c._frontmatter=l,c),mdxType:"Playground"},Object(o.b)(g.a,{"aria-label":"Page navigation example",mdxType:"CPagination"},Object(o.b)(r.a,{"aria-label":"Previous",disabled:!0,mdxType:"CPaginationItem"},Object(o.b)("span",{"aria-hidden":"true"},"«")),Object(o.b)(r.a,{active:!0,mdxType:"CPaginationItem"},"1"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"2"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"3"),Object(o.b)(r.a,{"aria-label":"Next",mdxType:"CPaginationItem"},Object(o.b)("span",{"aria-hidden":"true"},"»")))),Object(o.b)("h2",{id:"sizing"},"Sizing"),Object(o.b)("p",null,"Fancy larger or smaller pagination? Add ",Object(o.b)("inlineCode",{parentName:"p"},'size="lg"')," or ",Object(o.b)("inlineCode",{parentName:"p"},'size="sm"')," for additional sizes."),Object(o.b)(b.c,{__position:3,__code:'<CPagination size="lg" aria-label="Page navigation example">\n  <CPaginationItem>Previous</CPaginationItem>\n  <CPaginationItem>1</CPaginationItem>\n  <CPaginationItem>2</CPaginationItem>\n  <CPaginationItem>3</CPaginationItem>\n  <CPaginationItem>Next</CPaginationItem>\n</CPagination>',__scope:(s={props:y,DefaultLayout:m.a,Playground:b.c,Props:b.d,CPagination:g.a,CPaginationItem:r.a},s.DefaultLayout=m.a,s._frontmatter=l,s),mdxType:"Playground"},Object(o.b)(g.a,{size:"lg","aria-label":"Page navigation example",mdxType:"CPagination"},Object(o.b)(r.a,{mdxType:"CPaginationItem"},"Previous"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"1"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"2"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"3"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"Next"))),Object(o.b)(b.c,{__position:4,__code:'<CPagination size="sm" aria-label="Page navigation example">\n  <CPaginationItem>Previous</CPaginationItem>\n  <CPaginationItem>1</CPaginationItem>\n  <CPaginationItem>2</CPaginationItem>\n  <CPaginationItem>3</CPaginationItem>\n  <CPaginationItem>Next</CPaginationItem>\n</CPagination>',__scope:(d={props:y,DefaultLayout:m.a,Playground:b.c,Props:b.d,CPagination:g.a,CPaginationItem:r.a},d.DefaultLayout=m.a,d._frontmatter=l,d),mdxType:"Playground"},Object(o.b)(g.a,{size:"sm","aria-label":"Page navigation example",mdxType:"CPagination"},Object(o.b)(r.a,{mdxType:"CPaginationItem"},"Previous"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"1"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"2"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"3"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"Next"))),Object(o.b)("h2",{id:"alignment"},"Alignment"),Object(o.b)("p",null,"Change the alignment of pagination components with ",Object(o.b)("a",{parentName:"p",href:"https://coreui.io/docs/utilities/flex/"},"flexbox utilities"),"."),Object(o.b)(b.c,{__position:5,__code:'<CPagination\n  className="justify-content-center"\n  aria-label="Page navigation example"\n>\n  <CPaginationItem disabled>Previous</CPaginationItem>\n  <CPaginationItem>1</CPaginationItem>\n  <CPaginationItem>2</CPaginationItem>\n  <CPaginationItem>3</CPaginationItem>\n  <CPaginationItem>Next</CPaginationItem>\n</CPagination>',__scope:(C={props:y,DefaultLayout:m.a,Playground:b.c,Props:b.d,CPagination:g.a,CPaginationItem:r.a},C.DefaultLayout=m.a,C._frontmatter=l,C),mdxType:"Playground"},Object(o.b)(g.a,{className:"justify-content-center","aria-label":"Page navigation example",mdxType:"CPagination"},Object(o.b)(r.a,{disabled:!0,mdxType:"CPaginationItem"},"Previous"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"1"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"2"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"3"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"Next"))),Object(o.b)(b.c,{__position:6,__code:'<CPagination\n  className="justify-content-end"\n  aria-label="Page navigation example"\n>\n  <CPaginationItem disabled>Previous</CPaginationItem>\n  <CPaginationItem>1</CPaginationItem>\n  <CPaginationItem>2</CPaginationItem>\n  <CPaginationItem>3</CPaginationItem>\n  <CPaginationItem>Next</CPaginationItem>\n</CPagination>',__scope:(u={props:y,DefaultLayout:m.a,Playground:b.c,Props:b.d,CPagination:g.a,CPaginationItem:r.a},u.DefaultLayout=m.a,u._frontmatter=l,u),mdxType:"Playground"},Object(o.b)(g.a,{className:"justify-content-end","aria-label":"Page navigation example",mdxType:"CPagination"},Object(o.b)(r.a,{disabled:!0,mdxType:"CPaginationItem"},"Previous"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"1"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"2"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"3"),Object(o.b)(r.a,{mdxType:"CPaginationItem"},"Next"))),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("h3",{id:"cpagination"},"CPagination"),Object(o.b)(b.d,{of:g.a,mdxType:"Props"}),Object(o.b)("h3",{id:"cpaginationitem"},"CPaginationItem"),Object(o.b)(b.d,{of:r.a,mdxType:"Props"}))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/pagination/CPagination.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-pagination-c-pagination-mdx-c30c586357860b00acd3.js.map