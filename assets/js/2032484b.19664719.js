"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[25692],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3514:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(96540),a=r(20053),i=r(81754),c=r(75489),o=r(16654),l=r(21312);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return n.createElement(c.A,{href:t,className:(0,a.A)("card padding--lg",s.cardContainer)},r)}function m(e){let{href:t,icon:r,title:i,description:c}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,a.A)("text--truncate",s.cardTitle),title:i},r," ",i),c&&n.createElement("p",{className:(0,a.A)("text--truncate",s.cardDescription),title:c},c))}function d(e){let{item:t}=e;const r=(0,i._o)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const r=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.cC)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(u,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,i.$S)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const c=(0,i.d1)(t);return n.createElement("section",{className:(0,a.A)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},95905:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=r(58168),a=(r(96540),r(15680)),i=r(3514);const c={title:"Jvm \u76f8\u5173\u573a\u666f",sidebar_position:1},o=void 0,l={unversionedId:"experiment-types/application/jvm/jvm",id:"version-1.7.4/experiment-types/application/jvm/jvm",title:"Jvm \u76f8\u5173\u573a\u666f",description:"\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7.4/experiment-types/application/jvm/jvm.md",sourceDirName:"experiment-types/application/jvm",slug:"/experiment-types/application/jvm/",permalink:"/docs/experiment-types/application/jvm/",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.4/experiment-types/application/jvm/jvm.md",tags:[],version:"1.7.4",sidebarPosition:1,frontMatter:{title:"Jvm \u76f8\u5173\u573a\u666f",sidebar_position:1},sidebar:"myAutogeneratedSidebar",previous:{title:"Application",permalink:"/docs/experiment-types/application/"},next:{title:"\u6302\u8f7d Java Agent",permalink:"/docs/experiment-types/application/jvm/blade_prepare_jvm"}},s={},p=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...c}=e;return(0,a.yg)(d,(0,n.A)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.yg)("p",null,"jvm \u672c\u8eab\u76f8\u5173\u573a\u666f\uff0c\u4ee5\u53ca\u53ef\u4ee5\u6307\u5b9a\u7c7b\uff0c\u65b9\u6cd5\u6ce8\u5165\u5ef6\u8fdf\u3001\u8fd4\u56de\u503c\u3001\u5f02\u5e38\u6545\u969c\u573a\u666f\uff0c\u4e5f\u53ef\u4ee5\u7f16\u5199 groovy \u548c java \u811a\u672c\u6765\u5b9e\u73b0\u590d\u6742\u7684\u573a\u666f\u3002\u76ee\u524d\u652f\u6301\u7684\u573a\u666f\u5982\u4e0b"),(0,a.yg)(i.A,{mdxType:"DocCardList"}),(0,a.yg)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.yg)("p",null,"\u6b64\u5904\u5217\u4e3e jvm \u652f\u6301\u7684\u901a\u7528\u53c2\u6570\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"--pid string         \u6307\u5b9a java \u8fdb\u7a0b\u53f7\n--process string     \u6307\u5b9a java \u8fdb\u7a0b\u540d\uff0c\u5982\u679c\u540c\u65f6\u586b\u5199\n--timeout string     \u8bbe\u5b9a\u8fd0\u884c\u65f6\u957f\uff0c\u5355\u4f4d\u662f\u79d2\uff0c\u901a\u7528\u53c2\u6570\n")),(0,a.yg)("p",null,"JVM \u65b9\u6cd5\u7ea7\u522b\u7684\u6545\u969c\u573a\u666f\u901a\u7528\u53c2\u6570\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"--classname string        \u6307\u5b9a\u7c7b\u540d\uff0c\u5fc5\u987b\u662f\u5b9e\u73b0\u7c7b\uff0c\u5e26\u5168\u5305\u540d\uff0c\u4f8b\u5982 com.xxx.xxx.XController (\u5fc5\u586b\u9879)\n--methodname string       \u6307\u5b9a\u65b9\u6cd5\u540d\uff0c\u6ce8\u610f\u76f8\u540c\u65b9\u6cd5\u540d\u7684\u65b9\u6cd5\u90fd\u4f1a\u88ab\u6ce8\u5165\u76f8\u540c\u6545\u969c (\u5fc5\u586b\u9879)\n--after                   \u65b9\u6cd5\u6267\u884c\u5b8c\u6210\u8fd4\u56de\u524d\u6ce8\u5165\u6545\u969c\uff0c\u6bd4\u5982\u4fee\u6539\u590d\u6742\u7684\u8fd4\u56de\u5bf9\u8c61\n--effect-count string     \u9650\u5236\u5f71\u54cd\u6570\u91cf\n--effect-percent string   \u9650\u5236\u5f71\u54cd\u767e\u5206\u6bd4\n")),(0,a.yg)("p",null,"\u5404\u573a\u666f\u8fd8\u6709\u81ea\u8eab\u6240\u72ec\u6709\u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u5728\u6bcf\u4e2a\u573a\u666f\u6587\u6863\u4e2d\u67e5\u770b"),(0,a.yg)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,a.yg)("p",null,"\u6b64\u5904\u4e3e\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff1a\u5f53\u524d Java \u8fdb\u7a0b CPU \u4f7f\u7528\u7387\u6ee1\u8f7d"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'# \u5148\u6267\u884c prepare \u64cd\u4f5c\nblade prepare jvm --process tomcat\n{"code":200,"success":true,"result":"af9ec083eaf32e26"}\n\n# \u6267\u884c\u8fdb\u7a0b\u5185 CPU \u6ee1\u8f7d\nblade create jvm cpufullload --process tomcat\n{"code":200,"success":true,"result":"2a97b8c2fe9d7c01"}\n')),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"-w461",src:r(1747).A,width:"922",height:"684"})),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"# \u505c\u6b62\u5b9e\u9a8c\nblade destroy 2a97b8c2fe9d7c01\n\n# \u5378\u8f7d agent\nblade revoke af9ec083eaf32e26\n")))}u.isMDXComponent=!0},1747:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/15758721082138-5b791089981f14176ff263c569853794.jpg"}}]);