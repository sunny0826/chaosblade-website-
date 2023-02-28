"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[9115],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=s(n),f=i,p=m["".concat(u,".").concat(f)]||m[f]||d[f]||o;return n?r.createElement(p,c(c({ref:t},l),{},{components:n})):r.createElement(p,c({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52991:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(67294),i=n(86010),o=n(52802),c=n(39960),a=n(13919),u=n(95999),s="cardContainer_fWXF",l="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return r.createElement(c.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},n)}function f(e){let{href:t,icon:n,title:o,description:c}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",l),title:o},n," ",o),c&&r.createElement("p",{className:(0,i.Z)("text--truncate",d),title:c},c))}function p(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return r.createElement(f,{href:t.href,icon:n,title:t.label,description:null==i?void 0:i.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(g,e);const c=(0,o.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(v,{item:e})))))}},18666:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=n(87462),i=(n(67294),n(3905)),o=n(52991);const c={title:"Java Dev Guide",sidebar_position:5},a=void 0,u={unversionedId:"community/java-dev-guide/index",id:"version-1.7.1/community/java-dev-guide/index",title:"Java Dev Guide",description:"",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7.1/community/java-dev-guide/index.md",sourceDirName:"community/java-dev-guide",slug:"/community/java-dev-guide/",permalink:"/docs/community/java-dev-guide/",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.1/community/java-dev-guide/index.md",tags:[],version:"1.7.1",sidebarPosition:5,frontMatter:{title:"Java Dev Guide",sidebar_position:5},sidebar:"myAutogeneratedSidebar",previous:{title:"Issue\u63d0\u4ea4\u548c\u5904\u7406\u89c4\u8303",permalink:"/docs/community/issue-standard"},next:{title:"\u67b6\u6784\u7bc7",permalink:"/docs/community/java-dev-guide/architecture"}},s={},l=[],d={toc:l};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);