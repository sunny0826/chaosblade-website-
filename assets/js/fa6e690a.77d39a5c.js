(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[7582],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=i(r),m=c,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:c,l[1]=o;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3582:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return p}});var n=r(2122),c=r(9756),a=(r(7294),r(3905)),l={id:"blade create jvm cpufullload"},o={unversionedId:"experiment-types/jvm/blade create jvm cpufullload",id:"experiment-types/jvm/blade create jvm cpufullload",isDocsHomePage:!1,title:"\u6a21\u62dfJava\u8fdb\u7a0bCPU\u6ee1\u8f7d",description:"\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/experiment-types/jvm/blade_create_jvm_cpufullload.md",sourceDirName:"experiment-types/jvm",slug:"/experiment-types/jvm/blade create jvm cpufullload",permalink:"/docs/next/experiment-types/jvm/blade create jvm cpufullload",editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/website/docs/experiment-types/jvm/blade_create_jvm_cpufullload.md",version:"current",frontMatter:{id:"blade create jvm cpufullload"},sidebar:"docs",previous:{title:"\u6a21\u62df\u6267\u884c\u6307\u5b9a\u811a\u672c",permalink:"/docs/next/experiment-types/jvm/blade create jvm script"},next:{title:"\u6a21\u62df\u5185\u5b58\u6ea2\u51fa",permalink:"/docs/next/experiment-types/jvm/blade create jvm OutOfMemoryError"}},u=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",children:[]},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",children:[]}],i={toc:u};function p(e){var t=e.components,l=(0,c.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},i,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u6307\u5b9a java \u8fdb\u7a0b CPU \u6ee1\u8f7d\uff0c\u53ef\u4ee5\u7b80\u5199\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"blade c jvm cfl")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u6b64\u573a\u666f\u7279\u6709\u53c2\u6570\uff0c\u901a\u7528\u53c2\u6570\u8be6\u89c1\uff1a","[blade create jvm]","(blade create jvm.md)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--cpu-count string   \u7ed1\u5b9a\u7684 CPU \u6838\u6570\uff0c\u5373\u6307\u5b9a\u51e0\u4e2a\u6838\u6ee1\u8f7d\n")),(0,a.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,a.kt)("p",null,"\u6307\u5b9a\u5168\u90e8\u6838\u6ee1\u8f7d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'blade c jvm cfl --process tomcat \n                                                                                      \n{"code":200,"success":true,"result":"48d70f01e65f68f7"}\n')),(0,a.kt)("p",null,"\u67e5\u770b\u8be5\u8fdb\u7a0b CPU \u4f7f\u7528\u7387\uff1a\n",(0,a.kt)("img",{alt:"-w454",src:r(7460).Z})),(0,a.kt)("p",null,"\u505c\u6b62\u5b9e\u9a8c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"blade d 48d70f01e65f68f7\n")),(0,a.kt)("p",null,"\u6307\u5b9a\u4e24\u4e2a\u6838\u6ee1\u8f7d\uff08\u6d4b\u8bd5\u673a\u5668\u662f 8 \u4e2a\u6838\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'blade c jvm cfl --cpu-count 2 --process tomcat\n                                                                         \n{"code":200,"success":true,"result":"a929157644688b15"}\n')),(0,a.kt)("p",null,"\u67e5\u770b\u8fdb\u7a0b CPU \u4f7f\u7528\u7387\u662f\u6ee1\u6838\u7684\u56db\u5206\u4e4b\u4e00\uff1a\n",(0,a.kt)("img",{alt:"-w454",src:r(3502).Z})),(0,a.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"))}p.isMDXComponent=!0},7460:function(e,t,r){"use strict";t.Z=r.p+"assets/images/15758809321295-ca77eb2101cb34b73170f7ecbac11e02.jpg"},3502:function(e,t,r){"use strict";t.Z=r.p+"assets/images/15758810411559-74d7bf0861c6e9731469fa3bdc54f7d7.jpg"}}]);