"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[88818],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>f});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(r),u=i,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3514:(e,t,r)=>{r.d(t,{A:()=>h});var n=r(96540),i=r(20053),o=r(81754),c=r(75489),a=r(16654),s=r(21312);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return n.createElement(c.A,{href:t,className:(0,i.A)("card padding--lg",l.cardContainer)},r)}function p(e){let{href:t,icon:r,title:o,description:c}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,i.A)("text--truncate",l.cardTitle),title:o},r," ",o),c&&n.createElement("p",{className:(0,i.A)("text--truncate",l.cardDescription),title:c},c))}function m(e){let{item:t}=e;const r=(0,o._o)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const r=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.cC)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(u,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,o.$S)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const c=(0,o.d1)(t);return n.createElement("section",{className:(0,i.A)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},71180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=r(58168),i=(r(96540),r(15680)),o=r(3514);const c={title:"Redis",sidebar_position:7},a=void 0,s={unversionedId:"experiment-types/host/redis/index",id:"version-1.7.3/experiment-types/host/redis/index",title:"Redis",description:"",source:"@site/versioned_docs/version-1.7.3/experiment-types/host/redis/index.md",sourceDirName:"experiment-types/host/redis",slug:"/experiment-types/host/redis/",permalink:"/en/docs/1.7.3/experiment-types/host/redis/",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.3/experiment-types/host/redis/index.md",tags:[],version:"1.7.3",sidebarPosition:7,frontMatter:{title:"Redis",sidebar_position:7},sidebar:"myAutogeneratedSidebar",previous:{title:"Simulating the system time offset",permalink:"/en/docs/1.7.3/experiment-types/host/time/blade_create_time_travel"},next:{title:"Simulating expiring the key in redis",permalink:"/en/docs/1.7.3/experiment-types/host/redis/blade_create_redis_cache_expire"}},l={},d=[],p={toc:d},m="wrapper";function u(e){let{components:t,...r}=e;return(0,i.yg)(m,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)(o.A,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);