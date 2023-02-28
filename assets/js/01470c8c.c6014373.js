"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[2453],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52991:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(67294),i=n(86010),o=n(52802),c=n(39960),a=n(13919),s=n(95999),l="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return r.createElement(c.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},n)}function d(e){let{href:t,icon:n,title:o,description:c}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:o},n," ",o),c&&r.createElement("p",{className:(0,i.Z)("text--truncate",p),title:c},c))}function f(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return r.createElement(d,{href:t.href,icon:n,title:t.label,description:null==i?void 0:i.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const c=(0,o.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(b,{item:e})))))}},38878:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(87462),i=(n(67294),n(3905)),o=n(52991);const c={title:"\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u9a8c\u7c7b\u578b",sidebar_position:4},a=void 0,s={unversionedId:"experiment-types/index",id:"experiment-types/index",title:"\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u9a8c\u7c7b\u578b",description:"",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/experiment-types/index.md",sourceDirName:"experiment-types",slug:"/experiment-types/",permalink:"/docs/next/experiment-types/",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/docs/experiment-types/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u9a8c\u7c7b\u578b",sidebar_position:4},sidebar:"myAutogeneratedSidebar",previous:{title:"\u5f00\u53d1\u5b9e\u6218",permalink:"/docs/next/community/java-dev-guide/practise"},next:{title:"\u7269\u7406\u4e3b\u673a",permalink:"/docs/next/experiment-types/host/"}},l={},u=[],p={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);