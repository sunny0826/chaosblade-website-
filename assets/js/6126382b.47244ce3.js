"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[74977],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),i=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=i(r),m=a,y=s["".concat(o,".").concat(m)]||s[m]||d[m]||l;return r?n.createElement(y,c(c({ref:t},u),{},{components:r})):n.createElement(y,c({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,c=new Array(l);c[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:a,c[1]=p;for(var i=2;i<l;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7305:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var n=r(58168),a=(r(96540),r(15680));const l={title:"\u6a21\u62df Java \u8fdb\u7a0b CPU \u6ee1\u8f7d"},c=void 0,p={unversionedId:"experiment-types/application/jvm/blade_create_jvm_cpufullload",id:"experiment-types/application/jvm/blade_create_jvm_cpufullload",title:"\u6a21\u62df Java \u8fdb\u7a0b CPU \u6ee1\u8f7d",description:"\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/experiment-types/application/jvm/blade_create_jvm_cpufullload.md",sourceDirName:"experiment-types/application/jvm",slug:"/experiment-types/application/jvm/blade_create_jvm_cpufullload",permalink:"/docs/next/experiment-types/application/jvm/blade_create_jvm_cpufullload",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/docs/experiment-types/application/jvm/blade_create_jvm_cpufullload.md",tags:[],version:"current",frontMatter:{title:"\u6a21\u62df Java \u8fdb\u7a0b CPU \u6ee1\u8f7d"},sidebar:"myAutogeneratedSidebar",previous:{title:"\u6a21\u62df\u5185\u5b58\u6ea2\u51fa",permalink:"/docs/next/experiment-types/application/jvm/blade_create_jvm_OutOfMemoryError"},next:{title:"\u6a21\u62df\u7c7b\u65b9\u6cd5\u8c03\u7528\u5ef6\u8fdf",permalink:"/docs/next/experiment-types/application/jvm/blade_create_jvm_delay"}},o={},i=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],u={toc:i},s="wrapper";function d(e){let{components:t,...l}=e;return(0,a.yg)(s,(0,n.A)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.yg)("p",null,"\u6307\u5b9a java \u8fdb\u7a0b CPU \u6ee1\u8f7d\uff0c\u53ef\u4ee5\u7b80\u5199\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"blade c jvm cfl")),(0,a.yg)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.yg)("p",null,"\u4ee5\u4e0b\u662f\u6b64\u573a\u666f\u7279\u6709\u53c2\u6570\uff0c\u901a\u7528\u53c2\u6570\u8be6\u89c1\uff1a",(0,a.yg)("a",{parentName:"p",href:"/docs/next/experiment-types/application/jvm/"},"blade create jvm")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"--cpu-count string   \u7ed1\u5b9a\u7684 CPU \u6838\u6570\uff0c\u5373\u6307\u5b9a\u51e0\u4e2a\u6838\u6ee1\u8f7d\n")),(0,a.yg)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,a.yg)("p",null,"\u6307\u5b9a\u5168\u90e8\u6838\u6ee1\u8f7d"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'blade c jvm cfl --process tomcat\n\n{"code":200,"success":true,"result":"48d70f01e65f68f7"}\n')),(0,a.yg)("p",null,"\u67e5\u770b\u8be5\u8fdb\u7a0b CPU \u4f7f\u7528\u7387\uff1a\n",(0,a.yg)("img",{alt:"-w454",src:r(64704).A,width:"908",height:"646"})),(0,a.yg)("p",null,"\u505c\u6b62\u5b9e\u9a8c\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"blade d 48d70f01e65f68f7\n")),(0,a.yg)("p",null,"\u6307\u5b9a\u4e24\u4e2a\u6838\u6ee1\u8f7d\uff08\u6d4b\u8bd5\u673a\u5668\u662f 8 \u4e2a\u6838\uff09"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'blade c jvm cfl --cpu-count 2 --process tomcat\n\n{"code":200,"success":true,"result":"a929157644688b15"}\n')),(0,a.yg)("p",null,"\u67e5\u770b\u8fdb\u7a0b CPU \u4f7f\u7528\u7387\u662f\u6ee1\u6838\u7684\u56db\u5206\u4e4b\u4e00\uff1a\n",(0,a.yg)("img",{alt:"-w454",src:r(25095).A,width:"908",height:"626"})),(0,a.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"))}d.isMDXComponent=!0},64704:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/15758809321295-ca77eb2101cb34b73170f7ecbac11e02.jpg"},25095:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/15758810411559-74d7bf0861c6e9731469fa3bdc54f7d7.jpg"}}]);