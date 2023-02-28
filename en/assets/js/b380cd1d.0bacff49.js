"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[5888],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52991:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(67294),a=n(86010),i=n(52802),c=n(39960),o=n(13919),l=n(95999),s="cardContainer_fWXF",p="cardTitle_rnsV",u="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return r.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},n)}function d(e){let{href:t,icon:n,title:i,description:c}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:i},n," ",i),c&&r.createElement("p",{className:(0,a.Z)("text--truncate",u),title:c},c))}function f(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function v(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return r.createElement(d,{href:t.href,icon:n,title:t.label,description:null==a?void 0:a.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(v,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return r.createElement(b,e);const c=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}},20879:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=(n(67294),n(3905)),i=n(52991);const c={title:"Jvm \u76f8\u5173\u573a\u666f",sidebar_position:1},o=void 0,l={unversionedId:"experiment-types/application/jvm/jvm",id:"experiment-types/application/jvm/jvm",title:"Jvm \u76f8\u5173\u573a\u666f",description:"\u4ecb\u7ecd",source:"@site/docs/experiment-types/application/jvm/jvm.md",sourceDirName:"experiment-types/application/jvm",slug:"/experiment-types/application/jvm/",permalink:"/en/docs/next/experiment-types/application/jvm/",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/docs/experiment-types/application/jvm/jvm.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Jvm \u76f8\u5173\u573a\u666f",sidebar_position:1},sidebar:"myAutogeneratedSidebar",previous:{title:"Application",permalink:"/en/docs/next/experiment-types/application/"},next:{title:"\u6302\u8f7d Java Agent",permalink:"/en/docs/next/experiment-types/application/jvm/blade_prepare_jvm"}},s={},p=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2}],u={toc:p};function m(e){let{components:t,...c}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"jvm \u672c\u8eab\u76f8\u5173\u573a\u666f\uff0c\u4ee5\u53ca\u53ef\u4ee5\u6307\u5b9a\u7c7b\uff0c\u65b9\u6cd5\u6ce8\u5165\u5ef6\u8fdf\u3001\u8fd4\u56de\u503c\u3001\u5f02\u5e38\u6545\u969c\u573a\u666f\uff0c\u4e5f\u53ef\u4ee5\u7f16\u5199 groovy \u548c java \u811a\u672c\u6765\u5b9e\u73b0\u590d\u6742\u7684\u573a\u666f\u3002\u76ee\u524d\u652f\u6301\u7684\u573a\u666f\u5982\u4e0b"),(0,a.kt)(i.Z,{mdxType:"DocCardList"}),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("p",null,"\u6b64\u5904\u5217\u4e3e jvm \u652f\u6301\u7684\u901a\u7528\u53c2\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--pid string         \u6307\u5b9a java \u8fdb\u7a0b\u53f7\n--process string     \u6307\u5b9a java \u8fdb\u7a0b\u540d\uff0c\u5982\u679c\u540c\u65f6\u586b\u5199\n--timeout string     \u8bbe\u5b9a\u8fd0\u884c\u65f6\u957f\uff0c\u5355\u4f4d\u662f\u79d2\uff0c\u901a\u7528\u53c2\u6570\n")),(0,a.kt)("p",null,"JVM \u65b9\u6cd5\u7ea7\u522b\u7684\u6545\u969c\u573a\u666f\u901a\u7528\u53c2\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--classname string        \u6307\u5b9a\u7c7b\u540d\uff0c\u5fc5\u987b\u662f\u5b9e\u73b0\u7c7b\uff0c\u5e26\u5168\u5305\u540d\uff0c\u4f8b\u5982 com.xxx.xxx.XController (\u5fc5\u586b\u9879)\n--methodname string       \u6307\u5b9a\u65b9\u6cd5\u540d\uff0c\u6ce8\u610f\u76f8\u540c\u65b9\u6cd5\u540d\u7684\u65b9\u6cd5\u90fd\u4f1a\u88ab\u6ce8\u5165\u76f8\u540c\u6545\u969c (\u5fc5\u586b\u9879)\n--after                   \u65b9\u6cd5\u6267\u884c\u5b8c\u6210\u8fd4\u56de\u524d\u6ce8\u5165\u6545\u969c\uff0c\u6bd4\u5982\u4fee\u6539\u590d\u6742\u7684\u8fd4\u56de\u5bf9\u8c61\n--effect-count string     \u9650\u5236\u5f71\u54cd\u6570\u91cf\n--effect-percent string   \u9650\u5236\u5f71\u54cd\u767e\u5206\u6bd4\n")),(0,a.kt)("p",null,"\u5404\u573a\u666f\u8fd8\u6709\u81ea\u8eab\u6240\u72ec\u6709\u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u5728\u6bcf\u4e2a\u573a\u666f\u6587\u6863\u4e2d\u67e5\u770b"),(0,a.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,a.kt)("p",null,"\u6b64\u5904\u4e3e\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff1a\u5f53\u524d Java \u8fdb\u7a0b CPU \u4f7f\u7528\u7387\u6ee1\u8f7d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# \u5148\u6267\u884c prepare \u64cd\u4f5c\nblade prepare jvm --process tomcat\n{"code":200,"success":true,"result":"af9ec083eaf32e26"}\n\n# \u6267\u884c\u8fdb\u7a0b\u5185 CPU \u6ee1\u8f7d\nblade create jvm cpufullload --process tomcat\n{"code":200,"success":true,"result":"2a97b8c2fe9d7c01"}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"-w461",src:n(75441).Z,width:"922",height:"684"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u505c\u6b62\u5b9e\u9a8c\nblade destroy 2a97b8c2fe9d7c01\n\n# \u5378\u8f7d agent\nblade revoke af9ec083eaf32e26\n")))}m.isMDXComponent=!0},75441:function(e,t,n){t.Z=n.p+"assets/images/15758721082138-5b791089981f14176ff263c569853794.jpg"}}]);