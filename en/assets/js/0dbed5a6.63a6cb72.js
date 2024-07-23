"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[45004],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(r),y=a,g=c["".concat(s,".").concat(y)]||c[y]||p[y]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},46025:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(58168),a=(r(96540),r(15680));const o={title:"blade query"},i=void 0,l={unversionedId:"getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-query",id:"version-1.7.2/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-query",title:"blade query",description:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecdblade query\u547d\u4ee4\u4f7f\u7528",source:"@site/versioned_docs/version-1.7.2/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-query.md",sourceDirName:"getting-started/chaosblade-tool-quick-start/cli-mode-user-guide",slug:"/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-query",permalink:"/en/docs/1.7.2/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-query",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.2/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-query.md",tags:[],version:"1.7.2",frontMatter:{title:"blade query"},sidebar:"myAutogeneratedSidebar",previous:{title:"blade prepare",permalink:"/en/docs/1.7.2/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-prepare"},next:{title:"blade revoke",permalink:"/en/docs/1.7.2/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-revoke"}},s={},d=[{value:"Usage",id:"usage",level:2},{value:"Exec",id:"exec",level:2},{value:"Examples",id:"examples",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd",(0,a.yg)("inlineCode",{parentName:"p"},"blade query"),"\u547d\u4ee4\u4f7f\u7528"),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)("p",null,"\u67e5\u8be2\u548c\u5b9e\u9a8c\u76f8\u5173\u6307\u6807\u5982\u78c1\u76d8\u5360\u7528\u3001java \u8fdb\u7a0b\u6545\u969c\u547d\u4e2d\u6b21\u6570\u7b49\u3002 ",(0,a.yg)("inlineCode",{parentName:"p"},"query")," \u53ef\u4ee5\u7b80\u5199\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"q"),"\uff0c\u5373 ",(0,a.yg)("inlineCode",{parentName:"p"},"blade query")," \u53ef\u4ee5\u7b80\u5199\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"blade q"),"\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Query the parameter values required for chaos experiments\n\nUsage:\n  blade query TARGET TYPE\n  blade query [command]\n\nAliases:\n  query, q\n\nExamples:\nquery network interface\n")),(0,a.yg)("h2",{id:"exec"},"Exec"),(0,a.yg)("p",null,"\u8fdb\u5165\u89e3\u538b\u5305\u672c\u5730\u6240\u653e\u7f6e\u7684\u8def\u5f84\uff0c\u53ef\u901a\u8fc7",(0,a.yg)("inlineCode",{parentName:"p"},"blade query -h"),"\u67e5\u770b\u652f\u6301\u54ea\u4e9b\u67e5\u8be2"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Available Commands:\n  disk        Query disk information\n  jvm         Query hit counts of the specify experiment\n  k8s         Query status of the specify experiment by uid\n  network     Query network information\n")),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'# \u67e5\u770b\u5f53\u524d\u673a\u5668\u7f51\u7edc\u63a5\u53e3\nblade query network interface\n\n# \u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\n{"code":200,"success":true,"result":["lo","eth0","cni-podman0","veth00000de"]}\n')))}p.isMDXComponent=!0}}]);