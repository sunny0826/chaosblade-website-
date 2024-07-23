"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[27396],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(r),u=o,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3514:(e,t,r)=>{r.d(t,{A:()=>b});var n=r(96540),o=r(20053),i=r(81754),c=r(75489),a=r(16654),s=r(21312);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return n.createElement(c.A,{href:t,className:(0,o.A)("card padding--lg",l.cardContainer)},r)}function d(e){let{href:t,icon:r,title:i,description:c}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,o.A)("text--truncate",l.cardTitle),title:i},r," ",i),c&&n.createElement("p",{className:(0,o.A)("text--truncate",l.cardDescription),title:c},c))}function m(e){let{item:t}=e;const r=(0,i._o)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const r=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.cC)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(u,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,i.$S)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const c=(0,i.d1)(t);return n.createElement("section",{className:(0,o.A)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},5183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var n=r(58168),o=(r(96540),r(15680)),i=r(3514);const c={title:"Pod",sidebar_position:1},a=void 0,s={unversionedId:"experiment-types/k8s/pod/index",id:"version-1.7.2/experiment-types/k8s/pod/index",title:"Pod",description:"",source:"@site/versioned_docs/version-1.7.2/experiment-types/k8s/pod/index.md",sourceDirName:"experiment-types/k8s/pod",slug:"/experiment-types/k8s/pod/",permalink:"/en/docs/1.7.2/experiment-types/k8s/pod/",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.2/experiment-types/k8s/pod/index.md",tags:[],version:"1.7.2",sidebarPosition:1,frontMatter:{title:"Pod",sidebar_position:1},sidebar:"myAutogeneratedSidebar",previous:{title:"Kubernetes",permalink:"/en/docs/1.7.2/experiment-types/k8s/"},next:{title:"\u6a21\u62df Pod \u6587\u4ef6\u7cfb\u7edfI/O\u5f02\u5e38",permalink:"/en/docs/1.7.2/experiment-types/k8s/pod/blade_create_k8s_pod-IO"}},l={},p=[],d={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.yg)(m,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(i.A,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);