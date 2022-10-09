"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[5872],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,b=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(b,c(c({ref:t},u),{},{components:r})):n.createElement(b,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3535:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var n=r(7462),a=(r(7294),r(3905));const o={title:"ChaosBlade\uff1a\u4e91\u539f\u751f\u67b6\u6784\u4e0b\u7684\u6df7\u6c8c\u5de5\u7a0b\u63a2\u7d22\u548c\u5b9e\u8df5",authors:"xcaspar",tags:["chaosblade"],description:"\u672c\u6587\u4f1a\u7740\u91cd\u4ecb\u7ecd\u4ec0\u4e48\u662f\u6df7\u6c8c\u5de5\u7a0b\u5728\u4e91\u539f\u751f\u67b6\u6784\u4e0b\u7684\u843d\u5730\u4e0e\u5b9e\u8df5",hide_table_of_contents:!1},c=void 0,l={permalink:"/en/blog/2019/10/17/chaosblade-cloud-native",editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/website/blog/blog/2019-10-17-chaosblade-cloud-native.md",source:"@site/blog/2019-10-17-chaosblade-cloud-native.md",title:"ChaosBlade\uff1a\u4e91\u539f\u751f\u67b6\u6784\u4e0b\u7684\u6df7\u6c8c\u5de5\u7a0b\u63a2\u7d22\u548c\u5b9e\u8df5",description:"\u672c\u6587\u4f1a\u7740\u91cd\u4ecb\u7ecd\u4ec0\u4e48\u662f\u6df7\u6c8c\u5de5\u7a0b\u5728\u4e91\u539f\u751f\u67b6\u6784\u4e0b\u7684\u843d\u5730\u4e0e\u5b9e\u8df5",date:"2019-10-17T00:00:00.000Z",formattedDate:"October 17, 2019",tags:[{label:"chaosblade",permalink:"/en/blog/tags/chaosblade"}],readingTime:32.59,hasTruncateMarker:!0,authors:[{name:"\u8096\u957f\u519b\uff08\u7a79\u8c37\uff0c@xcaspar\uff09",title:"Co-creator of ChaosBlade",url:"https://github.com/xcaspar",imageURL:"https://avatars.githubusercontent.com/u/3992234?s=64&v=4",key:"xcaspar"}],frontMatter:{title:"ChaosBlade\uff1a\u4e91\u539f\u751f\u67b6\u6784\u4e0b\u7684\u6df7\u6c8c\u5de5\u7a0b\u63a2\u7d22\u548c\u5b9e\u8df5",authors:"xcaspar",tags:["chaosblade"],description:"\u672c\u6587\u4f1a\u7740\u91cd\u4ecb\u7ecd\u4ec0\u4e48\u662f\u6df7\u6c8c\u5de5\u7a0b\u5728\u4e91\u539f\u751f\u67b6\u6784\u4e0b\u7684\u843d\u5730\u4e0e\u5b9e\u8df5",hide_table_of_contents:!1},prevItem:{title:"ChaosBlade\uff1a\u4ece\u96f6\u5f00\u59cb\u7684\u6df7\u6c8c\u5de5\u7a0b\uff08\u4e00\uff09",permalink:"/en/blog/2020/06/04/chaosblade-start-1"},nextItem:{title:"Chaosblade, \u963f\u91cc\u4e00\u4e2a\u8d85\u7ea7\u725b\u903c\u7684\u6df7\u6c8c\u5b9e\u9a8c\u5b9e\u65bd\u5de5\u5177",permalink:"/en/blog/2019/07/03/chaosblade-chaos-engineering-tools"}},i={authorsImageUrls:[void 0]},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5bfc\u8bfb\uff1a\u968f\u7740\u4e91\u539f\u751f\u6982\u5ff5\u7684\u5174\u8d77\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u7cfb\u7edf\u670d\u52a1\u5728\u5f80\u4e91\u539f\u751f\u6f14\u8fdb\uff0c\u5728\u6f14\u8fdb\u9636\u6bb5\u5982\u4f55\u4fdd\u969c\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\u548c\u9ad8\u53ef\u7528\u6027\uff0c\u662f\u6bcf\u4e2a\u7cfb\u7edf\u8d1f\u8d23\u4eba\u90fd\u8981\u5173\u6ce8\u7684\u95ee\u9898\uff0c\u901a\u8fc7\u6df7\u6c8c\u5de5\u7a0b\u53ef\u4ee5\u5f88\u597d\u7684\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002ChaosBlade \u662f\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u7684\u4e00\u6b3e\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u9a8c\u6267\u884c\u5de5\u5177\uff0c\u5176\u6613\u7528\u6027\u548c\u4e30\u5bcc\u7684\u573a\u666f\u53d7\u5230\u5927\u5bb6\u7684\u5e7f\u6cdb\u5173\u6ce8\u3002\u672c\u6587\u6574\u7406\u81ea\u963f\u91cc\u5df4\u5df4\u6280\u672f\u4e13\u5bb6\u8096\u957f\u519b\uff08\u7a79\u8c37\uff09\u5728 QCon \u5168\u7403\u8f6f\u4ef6\u5f00\u53d1\u5927\u4f1a\uff08\u4e0a\u6d77\u7ad9\uff092019 \u4e0a\u7684\u6f14\u8bb2\uff0c\u4ed6\u56f4\u7ed5\u4e91\u539f\u751f\u67b6\u6784\u4ecb\u7ecd\u4e86 ChaosBlade \u7684\u8bbe\u8ba1\u3001\u7279\u6027\u4e0e\u5b9e\u8df5\uff0c\u4ee5\u53ca\u5982\u4f55\u57fa\u4e8e ChaosBlade \u642d\u5efa\u4e00\u4e2a\u81ea\u52a8\u5316\u7684\u6df7\u6c8c\u5b9e\u9a8c\u5e73\u53f0\u3002")))}p.isMDXComponent=!0}}]);