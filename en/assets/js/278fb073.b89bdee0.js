"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[37264],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(r),b=n,f=u["".concat(s,".").concat(b)]||u[b]||d[b]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:n,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},93483:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var a=r(58168),n=(r(96540),r(15680));const o={title:"ChaosBlade\uff1a\u4e91\u539f\u751f\u67b6\u6784\u4e0b\u7684\u6df7\u6c8c\u5de5\u7a0b\u63a2\u7d22\u548c\u5b9e\u8df5",authors:"xcaspar",tags:["chaosblade"],description:"\u672c\u6587\u4f1a\u7740\u91cd\u4ecb\u7ecd\u4ec0\u4e48\u662f\u6df7\u6c8c\u5de5\u7a0b\u5728\u4e91\u539f\u751f\u67b6\u6784\u4e0b\u7684\u843d\u5730\u4e0e\u5b9e\u8df5",hide_table_of_contents:!1},l=void 0,c={permalink:"/en/blog/2019/10/17/chaosblade-cloud-native",editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/blog/2019-10-17-chaosblade-cloud-native.md",source:"@site/blog/2019-10-17-chaosblade-cloud-native.md",title:"ChaosBlade\uff1a\u4e91\u539f\u751f\u67b6\u6784\u4e0b\u7684\u6df7\u6c8c\u5de5\u7a0b\u63a2\u7d22\u548c\u5b9e\u8df5",description:"\u672c\u6587\u4f1a\u7740\u91cd\u4ecb\u7ecd\u4ec0\u4e48\u662f\u6df7\u6c8c\u5de5\u7a0b\u5728\u4e91\u539f\u751f\u67b6\u6784\u4e0b\u7684\u843d\u5730\u4e0e\u5b9e\u8df5",date:"2019-10-17T00:00:00.000Z",formattedDate:"October 17, 2019",tags:[{label:"chaosblade",permalink:"/en/blog/tags/chaosblade"}],readingTime:32.59,hasTruncateMarker:!0,authors:[{name:"\u8096\u957f\u519b\uff08\u7a79\u8c37\uff0c@xcaspar\uff09",title:"Co-creator of ChaosBlade",url:"https://github.com/xcaspar",imageURL:"https://avatars.githubusercontent.com/u/3992234?s=64&v=4",key:"xcaspar"}],frontMatter:{title:"ChaosBlade\uff1a\u4e91\u539f\u751f\u67b6\u6784\u4e0b\u7684\u6df7\u6c8c\u5de5\u7a0b\u63a2\u7d22\u548c\u5b9e\u8df5",authors:"xcaspar",tags:["chaosblade"],description:"\u672c\u6587\u4f1a\u7740\u91cd\u4ecb\u7ecd\u4ec0\u4e48\u662f\u6df7\u6c8c\u5de5\u7a0b\u5728\u4e91\u539f\u751f\u67b6\u6784\u4e0b\u7684\u843d\u5730\u4e0e\u5b9e\u8df5",hide_table_of_contents:!1},prevItem:{title:"ChaosBlade\uff1a\u4ece\u96f6\u5f00\u59cb\u7684\u6df7\u6c8c\u5de5\u7a0b\uff08\u4e00\uff09",permalink:"/en/blog/2020/06/04/chaosblade-start-1"},nextItem:{title:"Chaosblade, \u963f\u91cc\u4e00\u4e2a\u8d85\u7ea7\u725b\u903c\u7684\u6df7\u6c8c\u5b9e\u9a8c\u5b9e\u65bd\u5de5\u5177",permalink:"/en/blog/2019/07/03/chaosblade-chaos-engineering-tools"}},s={authorsImageUrls:[void 0]},i=[],p={toc:i},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"\u5bfc\u8bfb\uff1a\u968f\u7740\u4e91\u539f\u751f\u6982\u5ff5\u7684\u5174\u8d77\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u7cfb\u7edf\u670d\u52a1\u5728\u5f80\u4e91\u539f\u751f\u6f14\u8fdb\uff0c\u5728\u6f14\u8fdb\u9636\u6bb5\u5982\u4f55\u4fdd\u969c\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\u548c\u9ad8\u53ef\u7528\u6027\uff0c\u662f\u6bcf\u4e2a\u7cfb\u7edf\u8d1f\u8d23\u4eba\u90fd\u8981\u5173\u6ce8\u7684\u95ee\u9898\uff0c\u901a\u8fc7\u6df7\u6c8c\u5de5\u7a0b\u53ef\u4ee5\u5f88\u597d\u7684\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002ChaosBlade \u662f\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u7684\u4e00\u6b3e\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u9a8c\u6267\u884c\u5de5\u5177\uff0c\u5176\u6613\u7528\u6027\u548c\u4e30\u5bcc\u7684\u573a\u666f\u53d7\u5230\u5927\u5bb6\u7684\u5e7f\u6cdb\u5173\u6ce8\u3002\u672c\u6587\u6574\u7406\u81ea\u963f\u91cc\u5df4\u5df4\u6280\u672f\u4e13\u5bb6\u8096\u957f\u519b\uff08\u7a79\u8c37\uff09\u5728 QCon \u5168\u7403\u8f6f\u4ef6\u5f00\u53d1\u5927\u4f1a\uff08\u4e0a\u6d77\u7ad9\uff092019 \u4e0a\u7684\u6f14\u8bb2\uff0c\u4ed6\u56f4\u7ed5\u4e91\u539f\u751f\u67b6\u6784\u4ecb\u7ecd\u4e86 ChaosBlade \u7684\u8bbe\u8ba1\u3001\u7279\u6027\u4e0e\u5b9e\u8df5\uff0c\u4ee5\u53ca\u5982\u4f55\u57fa\u4e8e ChaosBlade \u642d\u5efa\u4e00\u4e2a\u81ea\u52a8\u5316\u7684\u6df7\u6c8c\u5b9e\u9a8c\u5e73\u53f0\u3002")))}d.isMDXComponent=!0}}]);