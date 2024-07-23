"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[30065],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),b=a,g=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},26902:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const o={title:"\u7531Redis\u6545\u969c\u573a\u666f\uff0c\u8bf4\u8bf4ChaosBlade\u8d21\u732e\u7684\u4e8c\u4e09\u4e8b",authors:"Yuaninga",tags:["chaosblade"],description:"\u7531Redis\u6545\u969c\u573a\u666f\u8d21\u732e\u793a\u4f8b\uff0c\u4ecb\u7ecdChaosBlade\u8d21\u732e\u5165\u95e8\u3002",hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/2023/07/10/chaosblade-contribution-by-redis",editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/blog/2023-07-10-chaosblade-contribution-by-redis.md",source:"@site/blog/2023-07-10-chaosblade-contribution-by-redis.md",title:"\u7531Redis\u6545\u969c\u573a\u666f\uff0c\u8bf4\u8bf4ChaosBlade\u8d21\u732e\u7684\u4e8c\u4e09\u4e8b",description:"\u7531Redis\u6545\u969c\u573a\u666f\u8d21\u732e\u793a\u4f8b\uff0c\u4ecb\u7ecdChaosBlade\u8d21\u732e\u5165\u95e8\u3002",date:"2023-07-10T00:00:00.000Z",formattedDate:"2023\u5e747\u670810\u65e5",tags:[{label:"chaosblade",permalink:"/blog/tags/chaosblade"}],readingTime:5.91,hasTruncateMarker:!0,authors:[{name:"\u6641\u5143\u5b81\uff08@Yuaninga\uff09",title:"Reviewer of ChaosBlade",url:"https://github.com/Yuaninga",imageURL:"https://avatars.githubusercontent.com/u/64267484?v=4",key:"Yuaninga"}],frontMatter:{title:"\u7531Redis\u6545\u969c\u573a\u666f\uff0c\u8bf4\u8bf4ChaosBlade\u8d21\u732e\u7684\u4e8c\u4e09\u4e8b",authors:"Yuaninga",tags:["chaosblade"],description:"\u7531Redis\u6545\u969c\u573a\u666f\u8d21\u732e\u793a\u4f8b\uff0c\u4ecb\u7ecdChaosBlade\u8d21\u732e\u5165\u95e8\u3002",hide_table_of_contents:!1},prevItem:{title:"ChaosBlade Maintainer \u664b\u5347\u901a\u544a -- \u6641\u5143\u5b81",permalink:"/blog/2023/07/20/maintainer-yuanning"},nextItem:{title:"ChaosBlade Reviewer \u664b\u5347\u901a\u544a -- \u6641\u5143\u5b81",permalink:"/blog/2023/01/09/reviewer-yuanning"}},s={authorsImageUrls:[void 0]},c=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u539f\u5b50\u4e8b\u4ef6\u8d21\u732e\u6d41\u7a0b\u56fe\u5982\u4e0b\uff1a",id:"\u539f\u5b50\u4e8b\u4ef6\u8d21\u732e\u6d41\u7a0b\u56fe\u5982\u4e0b",level:4}],u={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.yg)(d,(0,n.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.yg)("p",null,"\u672c\u6587\u4ee52\u4e2a\u65b0\u589eRedis\u539f\u5b50\u4e8b\u4ef6\u4e3a\u4f8b\uff0c\u5e2e\u52a9\u521a\u63a5\u89e6ChaosBlade\u7684\u793e\u533a\u540c\u5b66\u5feb\u901f\u5165\u95e8\u5f00\u6e90\u8d21\u732e\u3002"),(0,a.yg)("p",null,"\u5f00\u6e90\u8d21\u732e\u524d\u63d0\uff1a\u4e86\u89e3\u6df7\u6c8c\u5de5\u7a0b\u548c\u638c\u63e1Golang\u5f00\u53d1\u3002"),(0,a.yg)("h4",{id:"\u539f\u5b50\u4e8b\u4ef6\u8d21\u732e\u6d41\u7a0b\u56fe\u5982\u4e0b"},"\u539f\u5b50\u4e8b\u4ef6\u8d21\u732e\u6d41\u7a0b\u56fe\u5982\u4e0b\uff1a"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"contribution_process.png",src:r(50793).A,width:"745",height:"1326"})))}p.isMDXComponent=!0},50793:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/contribution_process-ee6b68d7f1b973d601271433fd2f5daa.png"}}]);