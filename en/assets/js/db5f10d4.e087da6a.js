"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[1217],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},22127:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var n=r(87462),a=(r(67294),r(3905));const o={title:"blade destroy"},l=void 0,d={unversionedId:"getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-destroy",id:"version-1.7.2/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-destroy",title:"blade destroy",description:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecdblade destroy\u547d\u4ee4\u4f7f\u7528",source:"@site/versioned_docs/version-1.7.2/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-destroy.md",sourceDirName:"getting-started/chaosblade-tool-quick-start/cli-mode-user-guide",slug:"/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-destroy",permalink:"/en/docs/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-destroy",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.2/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-destroy.md",tags:[],version:"1.7.2",frontMatter:{title:"blade destroy"},sidebar:"myAutogeneratedSidebar",previous:{title:"blade create",permalink:"/en/docs/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-create"},next:{title:"blade prepare",permalink:"/en/docs/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-prepare"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Exec",id:"exec",level:2},{value:"Examples",id:"examples",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd",(0,a.kt)("inlineCode",{parentName:"p"},"blade destroy"),"\u547d\u4ee4\u4f7f\u7528"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"\u9500\u6bc1\u6df7\u6c8c\u5de5\u7a0b\u6f14\u7ec3\u5b9e\u9a8c\u3002\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"uid"),"\u5bf9\u5b9e\u9a8c\u8fdb\u884c\u9500\u6bc1\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u65b9\u5f0f\u5bf9\u5b9e\u9a8c\u8fdb\u884c\u9500\u6bc1\u3002\u7ed3\u679c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"blade status --type create")," \u547d\u4ee4\u8fdb\u884c\u67e5\u8be2\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"destroy")," \u53ef\u4ee5\u7b80\u5199\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"d"),"\uff0c\u5373 ",(0,a.kt)("inlineCode",{parentName:"p"},"blade destroy")," \u53ef\u4ee5\u7b80\u5199\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"blade d"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Destroy a chaos experiment by experiment uid which you can run status command to query\n\nUsage:\n  blade destroy UID\n  blade destroy [command]\n\nAliases:\n  destroy, d\n\nExamples:\nblade destroy 47cc0744f1bb\n\nblade check [target] [action] [flags]\n")),(0,a.kt)("h2",{id:"exec"},"Exec"),(0,a.kt)("p",null,"\u8fdb\u5165\u89e3\u538b\u5305\u672c\u5730\u6240\u653e\u7f6e\u7684\u8def\u5f84\uff0c\u53ef\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"blade destroy -h"),"\u67e5\u770b\u5982\u4f55\u9500\u6bc1\u6f14\u7ec3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"blade destroy UID\nblade destroy [command]\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# \u901a\u8fc7 UID \u9500\u6bc1 create \u7684\u5b9e\u9a8c\nblade destroy 6fa04946baf42920\n\n# \u901a\u8fc7 command \u9500\u6bc1 create \u7684\u5b9e\u9a8c\nblade destroy cpu fullload --cpu-count 1\n\n# \u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\n{"code":200,"success":true,"result":"command: cpu fullload --cpu-count 2 --debug false --help false"}\n')))}u.isMDXComponent=!0}}]);