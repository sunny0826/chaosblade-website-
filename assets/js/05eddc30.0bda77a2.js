"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[78519],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>y});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(r),u=n,y=s["".concat(i,".").concat(u)]||s[u]||m[u]||o;return r?a.createElement(y,c(c({ref:t},d),{},{components:r})):a.createElement(y,c({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:n,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7973:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const o={title:"\u6a21\u62df\u586b\u5145 Jvm CodeCache"},c=void 0,l={unversionedId:"experiment-types/application/jvm/blade_create_jvm_CodeCacheFilling",id:"version-1.7.3/experiment-types/application/jvm/blade_create_jvm_CodeCacheFilling",title:"\u6a21\u62df\u586b\u5145 Jvm CodeCache",description:"\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7.3/experiment-types/application/jvm/blade_create_jvm_CodeCacheFilling.md",sourceDirName:"experiment-types/application/jvm",slug:"/experiment-types/application/jvm/blade_create_jvm_CodeCacheFilling",permalink:"/docs/1.7.3/experiment-types/application/jvm/blade_create_jvm_CodeCacheFilling",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.3/experiment-types/application/jvm/blade_create_jvm_CodeCacheFilling.md",tags:[],version:"1.7.3",frontMatter:{title:"\u6a21\u62df\u586b\u5145 Jvm CodeCache"},sidebar:"myAutogeneratedSidebar",previous:{title:"\u6302\u8f7d Java Agent",permalink:"/docs/1.7.3/experiment-types/application/jvm/blade_prepare_jvm"},next:{title:"\u6a21\u62df\u5185\u5b58\u6ea2\u51fa",permalink:"/docs/1.7.3/experiment-types/application/jvm/blade_create_jvm_OutOfMemoryError"}},i={},p=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],d={toc:p},s="wrapper";function m(e){let{components:t,...o}=e;return(0,n.yg)(s,(0,a.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,n.yg)("p",null,"CodeCache \u4e3b\u8981\u7528\u4e8e\u5b58\u653e native code\uff0c\u5176\u4e2d\u4e3b\u8981\u662f JIT \u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u3002\u88ab JIT \u7f16\u8bd1\u7684\u4e00\u822c\u90fd\u662f\u201c\u70ed\u4ee3\u7801\u201d\uff0c\u7b80\u5355\u8bf4\u5c31\u662f\u8c03\u7528\u9891\u7387\u6bd4\u8f83\u9ad8\u7684\u4ee3\u7801\uff0cJIT \u7f16\u8bd1\u540e\uff0c\u4ee3\u7801\u7684\u6267\u884c\u6548\u7387\u4f1a\u53d8\u9ad8\uff0cCodeCache \u6ee1\u4f1a\u5bfc\u81f4 JVM \u5173\u95ed JIT \u7f16\u8bd1\u4e14\u4e0d\u53ef\u518d\u5f00\u542f\uff0c\u90a3\u4e48 CodeCache \u6ee1\u4f1a\u5f15\u8d77\u7cfb\u7edf\u8fd0\u884c\u6548\u7387\u964d\u4f4e\uff0c\u5bfc\u81f4\u7cfb\u7edf\u6700\u5927\u8d1f\u8f7d\u4e0b\u964d\uff0c\u5f53\u7cfb\u7edf\u6d41\u91cf\u8f83\u5927\u65f6\uff0c\u53ef\u8868\u73b0\u4e3a RT \u589e\u9ad8\u3001QPS \u4e0b\u964d\u7b49\u3002\n\u547d\u4ee4\u53ef\u4ee5\u7b80\u5199\u4e3a\uff1ablade c jvm ccf"),(0,n.yg)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,n.yg)("p",null,"\u6b64\u573a\u666f\u65e0\u7279\u6709\u53c2\u6570\uff0c\u901a\u7528\u53c2\u6570\u8be6\u89c1\uff1a",(0,n.yg)("a",{parentName:"p",href:"/docs/1.7.3/experiment-types/application/jvm/"},"blade create jvm")),(0,n.yg)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,n.yg)("p",null,"\u6ce8\u5165 CodeCache \u6ee1\u6545\u969c\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'blade c jvm CodeCacheFilling --process tomcat\n\n{"code":200,"success":true,"result":"f0e896f38c704894"}\n')),(0,n.yg)("p",null,(0,n.yg)("img",{src:r(4954).A,width:"903",height:"122"})),(0,n.yg)("h2",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),(0,n.yg)("p",null,"\u7531\u4e8e CodeCache \u4e3b\u8981\u5b58\u653e JIT \u7f16\u8bd1\u7684\u7ed3\u679c\uff0c\u6240\u4ee5\u586b\u5145 CodeCache \u5206\u4e3a\u4e24\u6b65\uff0c\u7b2c\u4e00\u6b65\u662f\u751f\u6210\u7528\u4e8e\u89e6\u53d1 JIT \u7f16\u8bd1\u7684 class\uff0c\u65b9\u5f0f\u662f\u901a\u8fc7\u52a8\u6001\u7f16\u8bd1\u751f\u6210\u5927\u91cf\u7684 class\uff1b\u7b2c\u4e8c\u6b65\u662f\u7f16\u8bd1\u540e\u751f\u6210\u7684 class \u8fdb\u884c\u5b9e\u4f8b\u5316\u548c\u9891\u7e41\u8c03\u7528\uff08\u201c\u52a0\u70ed\u201d\uff09\uff0c\u76f4\u5230\u89e6\u53d1 JIT \u7f16\u8bd1\u540e\u8fdb\u5165 CodeCache \u533a\u3002\u901a\u8fc7\u8fd9\u6837\u65b9\u5f0f\u4e0d\u505c\u7684\u586b\u5145 CodeCache\uff0c\u76f4\u5230 JIT \u7f16\u8bd1\u5173\u95ed"),(0,n.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u7531\u4e8e\u9700\u8981\u7f16\u8bd1\u548c\u201c\u52a0\u70ed\u201d\u4ee3\u7801\uff0c\u6240\u4ee5\u5728\u586b\u5145\u7684\u8fc7\u7a0b\u4e2d CPU \u5360\u7528\u7387\u4f1a\u5f88\u9ad8\uff1b\u5e76\u4e14\u4f1a\u6301\u7eed\u4e00\u6bb5\u65f6\u95f4\uff08\u6d4b\u8bd5\u4e2d\uff0c\u9ed8\u8ba4\u5927\u5c0f\u7684\u60c5\u51b5\u4e0b\uff0c\u4ece\u65e0\u5360\u7528\u5230\u586b\u5145\u6ee1\u7ea6 5 \u5206\u949f\uff0c\u5b9e\u9645\u60c5\u51b5\u4e0b\uff0cCodeCache \u90fd\u4f1a\u6709\u4e00\u5b9a\u7684\u4f7f\u7528\u7387\uff0c\u6240\u4ee5\u65f6\u95f4\u4e0d\u4f1a\u90a3\u4e48\u957f\uff09\uff1b"),(0,n.yg)("li",{parentName:"ol"},"\u7531\u4e8e\u201c\u52a0\u70ed\u201d\u8fc7\u7a0b\u4e2d\u9700\u8981\u5b9e\u4f8b\u5316\u5927\u91cf\u7684 class\uff0c\u4f1a\u6709\u5927\u91cf\u5bf9\u8c61\u4e00\u76f4\u65e0\u6cd5\u88ab GC \u56de\u6536\uff0c\u6709\u6982\u7387\u5bfc\u81f4 Metaspace \u6ee1\u800c\u4ea7\u751f OOM\uff1b"),(0,n.yg)("li",{parentName:"ol"},"\u7531\u4e8e\u65e0\u6cd5\u76f4\u63a5\u5224\u65ad JIT \u7f16\u8bd1\u662f\u5426\u5173\u95ed\uff0c\u6240\u4ee5\u53ea\u80fd\u6839\u636e CodeCache \u5360\u7528\u91cf\u6765\u5224\u65ad\uff0c\u4f46\u662f JIT \u7f16\u8bd1\u5173\u95ed\u65f6\uff0cCodeCache \u5360\u7528\u91cf\u7684\u9608\u503c\u5e76\u4e0d\u80fd\u7cbe\u51c6\u83b7\u53d6\uff0c\u6240\u4ee5\u662f\u901a\u8fc7 CodeCache \u7684\u589e\u957f\u6765\u5224\u65ad\u7684\uff0c\u5982\u679c 5 \u79d2\u5185 CodeCache \u5360\u7528\u91cf\u90fd\u65e0\u53d8\u5316\uff0c\u5373\u5224\u65ad JIT \u7f16\u8bd1\u5173\u95ed\uff08JIT \u7f16\u8bd1\u5173\u95ed\u540e\uff0cCodeCache \u5360\u7528\u91cf\u4e0d\u518d\u53d8\u5316\uff09\uff1b"),(0,n.yg)("li",{parentName:"ol"},"\u76ee\u524d\u662f\u6839\u636e CodeCache \u7684\u9ed8\u8ba4\u5927\u5c0f\u6765\u8bbe\u8ba1\u7684\uff08\u751f\u6210 class \u6570\u91cf\u7b49\uff09\uff0c\u5373 240M\uff08jdk8 64bit\uff09\uff0c\u5982\u679c\u8bbe\u7f6e\u66f4\u5927\u7684 CodeCache\uff08-XX:ReservedCodeCacheSize\uff09\u7684\u8bdd\uff0c\u6301\u7eed\u65f6\u95f4\u4f1a\u66f4\u957f\uff0c\u751a\u81f3\u7531\u4e8e\u52a8\u6001\u4ea7\u751f\u7684 class \u6570\u91cf\u4e0d\u591f\u800c\u5bfc\u81f4\u65e0\u6cd5\u586b\u5145\u6ee1\uff1b"),(0,n.yg)("li",{parentName:"ol"},"\u7531\u4e8e JIT \u7f16\u8bd1\u5173\u95ed\u540e\u4e0d\u53ef\u518d\u624b\u5de5\u5f00\u542f\uff0c\u6240\u4ee5\u8be5\u6545\u969c\u65e0\u6cd5\u76f4\u63a5\u6062\u590d\uff0c\u9700\u8981\u7528\u6237\u624b\u5de5\u91cd\u542f\u5e94\u7528\u7cfb\u7edf\u6765\u6062\u590d\uff1b")))}m.isMDXComponent=!0},4954:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/15758924900062-42f2ced316cbbc032b594b3144c37009.jpg"}}]);