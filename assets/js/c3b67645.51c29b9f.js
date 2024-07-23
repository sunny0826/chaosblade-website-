"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[59751],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>f});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(r),u=o,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3514:(e,t,r)=>{r.d(t,{A:()=>b});var n=r(96540),o=r(20053),i=r(81754),c=r(75489),a=r(16654),s=r(21312);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return n.createElement(c.A,{href:t,className:(0,o.A)("card padding--lg",l.cardContainer)},r)}function p(e){let{href:t,icon:r,title:i,description:c}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,o.A)("text--truncate",l.cardTitle),title:i},r," ",i),c&&n.createElement("p",{className:(0,o.A)("text--truncate",l.cardDescription),title:c},c))}function m(e){let{item:t}=e;const r=(0,i._o)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const r=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.cC)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(u,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,i.$S)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const c=(0,i.d1)(t);return n.createElement("section",{className:(0,o.A)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},69585:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=r(58168),o=(r(96540),r(15680)),i=r(3514);const c={title:"Node",sidebar_position:2},a=void 0,s={unversionedId:"experiment-types/k8s/node/index",id:"version-1.7.4/experiment-types/k8s/node/index",title:"Node",description:"",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7.4/experiment-types/k8s/node/index.md",sourceDirName:"experiment-types/k8s/node",slug:"/experiment-types/k8s/node/",permalink:"/docs/experiment-types/k8s/node/",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.4/experiment-types/k8s/node/index.md",tags:[],version:"1.7.4",sidebarPosition:2,frontMatter:{title:"Node",sidebar_position:2},sidebar:"myAutogeneratedSidebar",previous:{title:"\u6a21\u62df Pod \u8d44\u6e90\u81ea\u8eab\u573a\u666f",permalink:"/docs/experiment-types/k8s/pod/blade_create_k8s_pod-pod"},next:{title:"\u6a21\u62df\u8282\u70b9 CPU \u8d1f\u8f7d\u5b9e\u9a8c\u573a\u666f",permalink:"/docs/experiment-types/k8s/node/blade_create_k8s_node-cpu"}},l={},d=[],p={toc:d},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.yg)(m,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(i.A,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);