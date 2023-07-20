"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[4700],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return m}});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),s=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(o.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=s(t),m=l,h=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return t?n.createElement(h,d(d({ref:a},c),{},{components:t})):n.createElement(h,d({ref:a},c))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,d=new Array(i);d[0]=u;var r={};for(var o in a)hasOwnProperty.call(a,o)&&(r[o]=a[o]);r.originalType=e,r.mdxType="string"==typeof e?e:l,d[1]=r;for(var s=2;s<i;s++)d[s]=t[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},67824:function(e,a,t){t.r(a),t.d(a,{assets:function(){return o},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return i},metadata:function(){return r},toc:function(){return s}});var n=t(87462),l=(t(67294),t(3905));const i={title:"\u7531Redis\u6545\u969c\u573a\u666f\uff0c\u8bf4\u8bf4ChaosBlade\u8d21\u732e\u7684\u4e8c\u4e09\u4e8b",authors:"Yuaninga",tags:["chaosblade"],description:"\u7531Redis\u6545\u969c\u573a\u666f\u8d21\u732e\u793a\u4f8b\uff0c\u4ecb\u7ecdChaosBlade\u8d21\u732e\u5165\u95e8\u3002",hide_table_of_contents:!1},d=void 0,r={permalink:"/en/blog/2023/07/10/chaosblade-contribution-by-redis",editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/blog/2023-07-10-chaosblade-contribution-by-redis.md",source:"@site/blog/2023-07-10-chaosblade-contribution-by-redis.md",title:"\u7531Redis\u6545\u969c\u573a\u666f\uff0c\u8bf4\u8bf4ChaosBlade\u8d21\u732e\u7684\u4e8c\u4e09\u4e8b",description:"\u7531Redis\u6545\u969c\u573a\u666f\u8d21\u732e\u793a\u4f8b\uff0c\u4ecb\u7ecdChaosBlade\u8d21\u732e\u5165\u95e8\u3002",date:"2023-07-10T00:00:00.000Z",formattedDate:"July 10, 2023",tags:[{label:"chaosblade",permalink:"/en/blog/tags/chaosblade"}],readingTime:5.91,hasTruncateMarker:!0,authors:[{name:"\u6641\u5143\u5b81\uff08@Yuaninga\uff09",title:"Reviewer of ChaosBlade",url:"https://github.com/Yuaninga",imageURL:"https://avatars.githubusercontent.com/u/64267484?v=4",key:"Yuaninga"}],frontMatter:{title:"\u7531Redis\u6545\u969c\u573a\u666f\uff0c\u8bf4\u8bf4ChaosBlade\u8d21\u732e\u7684\u4e8c\u4e09\u4e8b",authors:"Yuaninga",tags:["chaosblade"],description:"\u7531Redis\u6545\u969c\u573a\u666f\u8d21\u732e\u793a\u4f8b\uff0c\u4ecb\u7ecdChaosBlade\u8d21\u732e\u5165\u95e8\u3002",hide_table_of_contents:!1},prevItem:{title:"ChaosBlade Maintainer \u664b\u5347\u901a\u544a -- \u6641\u5143\u5b81",permalink:"/en/blog/2023/07/20/maintainer-yuanning"},nextItem:{title:"ChaosBlade Reviewer \u664b\u5347\u901a\u544a -- \u6641\u5143\u5b81",permalink:"/en/blog/2023/01/09/reviewer-yuanning"}},o={authorsImageUrls:[void 0]},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u539f\u5b50\u4e8b\u4ef6\u8d21\u732e\u6d41\u7a0b\u56fe\u5982\u4e0b\uff1a",id:"\u539f\u5b50\u4e8b\u4ef6\u8d21\u732e\u6d41\u7a0b\u56fe\u5982\u4e0b",level:4},{value:"\u7b2c\u4e00\u6b65\uff1a\u5206\u6790\u6545\u969c\u6f14\u7ec3\u9700\u6c42\uff0c\u786e\u8ba4\u65b0\u589e\u539f\u5b50\u4e8b\u4ef6",id:"\u7b2c\u4e00\u6b65\u5206\u6790\u6545\u969c\u6f14\u7ec3\u9700\u6c42\u786e\u8ba4\u65b0\u589e\u539f\u5b50\u4e8b\u4ef6",level:2},{value:"\u7b2c\u4e8c\u6b65\uff1aFork\u9879\u76ee&amp;\u672c\u5730\u62c9\u53d6\u4ee3\u7801\u5e76\u521b\u5efadev\u5206\u652f",id:"\u7b2c\u4e8c\u6b65fork\u9879\u76ee\u672c\u5730\u62c9\u53d6\u4ee3\u7801\u5e76\u521b\u5efadev\u5206\u652f",level:2},{value:"\u7b2c\u4e09\u6b65\uff1a\u6b63\u5f0f\u5f00\u59cb\u65b0\u539f\u5b50\u4e8b\u4ef6\u5f00\u53d1",id:"\u7b2c\u4e09\u6b65\u6b63\u5f0f\u5f00\u59cb\u65b0\u539f\u5b50\u4e8b\u4ef6\u5f00\u53d1",level:2},{value:"3.1 \u62c9\u53d6chaosblade-exec-middleware\u9879\u76ee\u4ee3\u7801",id:"31-\u62c9\u53d6chaosblade-exec-middleware\u9879\u76ee\u4ee3\u7801",level:3},{value:"3.2 \u65b0\u5efaredis\u76ee\u5f55",id:"32-\u65b0\u5efaredis\u76ee\u5f55",level:3},{value:"3.3 \u65b0\u5efa redis.go \u6587\u4ef6",id:"33-\u65b0\u5efa-redisgo-\u6587\u4ef6",level:3},{value:"3.4 Redis\u539f\u5b50\u4e8b\u4ef6\u5305\u542b\u5230Model",id:"34-redis\u539f\u5b50\u4e8b\u4ef6\u5305\u542b\u5230model",level:3},{value:"3.5 Redis\u539f\u5b50\u4e8b\u4ef6\u5305\u542b\u5230\u7f16\u8bd1\u6587\u4ef6",id:"35-redis\u539f\u5b50\u4e8b\u4ef6\u5305\u542b\u5230\u7f16\u8bd1\u6587\u4ef6",level:3},{value:"3.6 \u5f00\u53d1\u5177\u4f53\u539f\u5b50\u4e8b\u4ef6",id:"36-\u5f00\u53d1\u5177\u4f53\u539f\u5b50\u4e8b\u4ef6",level:3},{value:"\u7b2c\u56db\u6b65\uff1a\u4f7f\u7528Goland\u672c\u5730\u8c03\u8bd5\uff0c\u6709bug\u6216\u4f18\u5316\u518d\u6b21\u5f00\u53d1\u8c03\u8bd5\u3002",id:"\u7b2c\u56db\u6b65\u4f7f\u7528goland\u672c\u5730\u8c03\u8bd5\u6709bug\u6216\u4f18\u5316\u518d\u6b21\u5f00\u53d1\u8c03\u8bd5",level:2},{value:"4.1 \u642d\u5efa\u51c6\u5907Redis\u670d\u52a1",id:"41-\u642d\u5efa\u51c6\u5907redis\u670d\u52a1",level:3},{value:"4.2 \u4fee\u6539Goland Debug\u914d\u7f6e",id:"42-\u4fee\u6539goland-debug\u914d\u7f6e",level:3},{value:"1.\u6253\u5f00main.go \u70b9\u51fb\u4e09\u89d2\u6309\u94ae\uff0c\u9009\u62e9Modify Run  Configuration...",id:"1\u6253\u5f00maingo-\u70b9\u51fb\u4e09\u89d2\u6309\u94ae\u9009\u62e9modify-run--configuration",level:4},{value:"2.\u4fee\u6539debug\u914d\u7f6e\uff1a\u8be6\u7ec6\u4f7f\u7528\u53ef\u4ee5\u67e5\u770bGoland\u5b98\u65b9\u6587\u6863",id:"2\u4fee\u6539debug\u914d\u7f6e\u8be6\u7ec6\u4f7f\u7528\u53ef\u4ee5\u67e5\u770bgoland\u5b98\u65b9\u6587\u6863",level:4},{value:"3.\u6267\u884cDebug\u64cd\u4f5c\uff1a\u8be6\u7ec6\u4f7f\u7528\u53ef\u4ee5\u67e5\u770bGoland\u5b98\u65b9\u6587\u6863",id:"3\u6267\u884cdebug\u64cd\u4f5c\u8be6\u7ec6\u4f7f\u7528\u53ef\u4ee5\u67e5\u770bgoland\u5b98\u65b9\u6587\u6863",level:4},{value:"\u7b2c\u4e94\u6b65\uff1a\u672c\u5730\u7f16\u8bd1\u5e76\u66ff\u6362\u6d4b\u8bd5\u73af\u5883\u65e7\u7f16\u8bd1\u6587\u4ef6",id:"\u7b2c\u4e94\u6b65\u672c\u5730\u7f16\u8bd1\u5e76\u66ff\u6362\u6d4b\u8bd5\u73af\u5883\u65e7\u7f16\u8bd1\u6587\u4ef6",level:2},{value:"5.1 \u53c2\u8003\u5b98\u65b9\u6587\u6863\u6267\u884c\u7f16\u8bd1",id:"51-\u53c2\u8003\u5b98\u65b9\u6587\u6863\u6267\u884c\u7f16\u8bd1",level:3},{value:"\u5982\u679c\u5728 mac \u7cfb\u7edf\u4e0a\uff0c\u7f16\u8bd1\u5f53\u524d\u7cfb\u7edf\u7684\u7248\u672c\uff0c\u8bf7\u6267\u884c\uff1a",id:"\u5982\u679c\u5728-mac-\u7cfb\u7edf\u4e0a\u7f16\u8bd1\u5f53\u524d\u7cfb\u7edf\u7684\u7248\u672c\u8bf7\u6267\u884c",level:4},{value:"\u5982\u679c\u60f3\u5728 mac \u7cfb\u7edf\u4e0a\uff0c\u7f16\u8bd1 linux \u7cfb\u7edfx86\u67b6\u6784\u7248\u672c\uff0c\u8bf7\u6267\u884c\uff1a",id:"\u5982\u679c\u60f3\u5728-mac-\u7cfb\u7edf\u4e0a\u7f16\u8bd1-linux-\u7cfb\u7edfx86\u67b6\u6784\u7248\u672c\u8bf7\u6267\u884c",level:4},{value:"\u5982\u679c\u60f3\u5728 mac \u7cfb\u7edf\u4e0a\uff0c\u7f16\u8bd1linux \u7cfb\u7edfarm \u67b6\u6784\u7248\u672c\uff0c\u8bf7\u6267\u884c\uff1a",id:"\u5982\u679c\u60f3\u5728-mac-\u7cfb\u7edf\u4e0a\u7f16\u8bd1linux-\u7cfb\u7edfarm-\u67b6\u6784\u7248\u672c\u8bf7\u6267\u884c",level:4},{value:"5.2 \u7f16\u8bd1\u540e\u6587\u4ef6\u5b58\u653e\u5728target\u76ee\u5f55\u4e2d",id:"52-\u7f16\u8bd1\u540e\u6587\u4ef6\u5b58\u653e\u5728target\u76ee\u5f55\u4e2d",level:3},{value:"5.3 \u6d4b\u8bd5\u73af\u5883\u66ff\u6362\u4e3a\u65b0\u7f16\u8bd1\u6587\u4ef6",id:"53-\u6d4b\u8bd5\u73af\u5883\u66ff\u6362\u4e3a\u65b0\u7f16\u8bd1\u6587\u4ef6",level:3},{value:"\u7b2c\u516d\u6b65\uff1a\u6d4b\u8bd5\u73af\u5883\u6d4b\u8bd5\u76f4\u81f3\u901a\u8fc7",id:"\u7b2c\u516d\u6b65\u6d4b\u8bd5\u73af\u5883\u6d4b\u8bd5\u76f4\u81f3\u901a\u8fc7",level:2},{value:"6.1 \u6d4b\u8bd5\u6a21\u62df\u7f13\u5b58\u8fc7\u671f\u5b9e\u9a8c",id:"61-\u6d4b\u8bd5\u6a21\u62df\u7f13\u5b58\u8fc7\u671f\u5b9e\u9a8c",level:3},{value:"\u6267\u884c\u5b9e\u9a8c\uff1a",id:"\u6267\u884c\u5b9e\u9a8c",level:4},{value:"\u9a8c\u8bc1\u5b9e\u9a8c\u7ed3\u679c\uff1a",id:"\u9a8c\u8bc1\u5b9e\u9a8c\u7ed3\u679c",level:4},{value:"6.2 \u6d4b\u8bd5\u6a21\u62df\u7f13\u5b58\u5185\u5b58\u9650\u5236\u5b9e\u9a8c",id:"62-\u6d4b\u8bd5\u6a21\u62df\u7f13\u5b58\u5185\u5b58\u9650\u5236\u5b9e\u9a8c",level:3},{value:"\u6267\u884c\u5b9e\u9a8c\uff1a",id:"\u6267\u884c\u5b9e\u9a8c-1",level:4},{value:"\u9a8c\u8bc1\u5b9e\u9a8c\u7ed3\u679c\uff1a",id:"\u9a8c\u8bc1\u5b9e\u9a8c\u7ed3\u679c-1",level:4},{value:"\u7b2c\u4e03\u6b65\uff1a\u4f7f\u7528dev\u5206\u652f\u521b\u5efa\u548c\u63d0\u4ea4PR",id:"\u7b2c\u4e03\u6b65\u4f7f\u7528dev\u5206\u652f\u521b\u5efa\u548c\u63d0\u4ea4pr",level:2},{value:"7.1 \u63a8\u9001\u672c\u5730dev\u5206\u652fGitHub\u8fdc\u7a0b",id:"71-\u63a8\u9001\u672c\u5730dev\u5206\u652fgithub\u8fdc\u7a0b",level:3},{value:"7.2 \u767b\u5f55GitHub \u4f7f\u7528dev\u5206\u652f\u521b\u5efa\u548c\u63d0\u4ea4PR",id:"72-\u767b\u5f55github-\u4f7f\u7528dev\u5206\u652f\u521b\u5efa\u548c\u63d0\u4ea4pr",level:3},{value:"7.3 \u63d0\u4ea4PR\u540e\u51c6\u5907\u5b98\u7f51ChaosBlade\u6587\u6863\u8d21\u732e",id:"73-\u63d0\u4ea4pr\u540e\u51c6\u5907\u5b98\u7f51chaosblade\u6587\u6863\u8d21\u732e",level:3},{value:"\u7b2c\u516b\u6b65\uff1aPR\u5ba1\u67e5\u76f4\u81f3\u5ba1\u67e5\u901a\u8fc7",id:"\u7b2c\u516b\u6b65pr\u5ba1\u67e5\u76f4\u81f3\u5ba1\u67e5\u901a\u8fc7",level:2},{value:"\u7b2c\u4e5d\u6b65\uff1aPR\u5408\u5e76\u81f3main\uff0c\u65b0\u589e\u539f\u5b50\u4e8b\u4ef6\u8d21\u732e\u6210\u529f\u3002",id:"\u7b2c\u4e5d\u6b65pr\u5408\u5e76\u81f3main\u65b0\u589e\u539f\u5b50\u4e8b\u4ef6\u8d21\u732e\u6210\u529f",level:2}],c={toc:s};function p(e){let{components:a,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,l.kt)("p",null,"\u672c\u6587\u4ee52\u4e2a\u65b0\u589eRedis\u539f\u5b50\u4e8b\u4ef6\u4e3a\u4f8b\uff0c\u5e2e\u52a9\u521a\u63a5\u89e6ChaosBlade\u7684\u793e\u533a\u540c\u5b66\u5feb\u901f\u5165\u95e8\u5f00\u6e90\u8d21\u732e\u3002"),(0,l.kt)("p",null,"\u5f00\u6e90\u8d21\u732e\u524d\u63d0\uff1a\u4e86\u89e3\u6df7\u6c8c\u5de5\u7a0b\u548c\u638c\u63e1Golang\u5f00\u53d1\u3002"),(0,l.kt)("h4",{id:"\u539f\u5b50\u4e8b\u4ef6\u8d21\u732e\u6d41\u7a0b\u56fe\u5982\u4e0b"},"\u539f\u5b50\u4e8b\u4ef6\u8d21\u732e\u6d41\u7a0b\u56fe\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"contribution_process.png",src:t(5514).Z,width:"745",height:"1326"})),(0,l.kt)("h2",{id:"\u7b2c\u4e00\u6b65\u5206\u6790\u6545\u969c\u6f14\u7ec3\u9700\u6c42\u786e\u8ba4\u65b0\u589e\u539f\u5b50\u4e8b\u4ef6"},"\u7b2c\u4e00\u6b65\uff1a\u5206\u6790\u6545\u969c\u6f14\u7ec3\u9700\u6c42\uff0c\u786e\u8ba4\u65b0\u589e\u539f\u5b50\u4e8b\u4ef6"),(0,l.kt)("p",null,"Redis\u5b9e\u9645\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u4f1a\u5b58\u5728\u6545\u969c\u6f14\u7ec3\u9700\u6c42\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6a21\u62dfKey\u8fc7\u671f\u6545\u969c\uff1a\u53ef\u4ee5\u89e6\u53d1\u6240\u6709key\u8fc7\u671f\u7684\u6781\u7aef\u6545\u969c\u573a\u666f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6a21\u62df\u7f13\u5b58\u5185\u5b58\u9650\u5236\u6545\u969c\uff1a\u53ef\u4ee5\u4e3b\u52a8\u89e6\u53d1Redis \u5185\u5b58\u6dd8\u6c70\u7b56\u7565\u91ca\u653e\u5185\u5b58\u573a\u666f\u3002")),(0,l.kt)("p",null,"\u6839\u636e\u6545\u969c\u6f14\u7ec3\u9700\u6c42\u4ef7\u503c\uff0c\u51b3\u5b9a\u662f\u5426\u6709\u5fc5\u8981\u65b0\u589e\u76f8\u5173\u6df7\u6c8c\u5de5\u7a0b\u539f\u5b50\u4e8b\u4ef6\u3002"),(0,l.kt)("h2",{id:"\u7b2c\u4e8c\u6b65fork\u9879\u76ee\u672c\u5730\u62c9\u53d6\u4ee3\u7801\u5e76\u521b\u5efadev\u5206\u652f"},"\u7b2c\u4e8c\u6b65\uff1aFork\u9879\u76ee&\u672c\u5730\u62c9\u53d6\u4ee3\u7801\u5e76\u521b\u5efadev\u5206\u652f"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fork_and_branch.png",src:t(86731).Z,width:"901",height:"467"})),(0,l.kt)("h2",{id:"\u7b2c\u4e09\u6b65\u6b63\u5f0f\u5f00\u59cb\u65b0\u539f\u5b50\u4e8b\u4ef6\u5f00\u53d1"},"\u7b2c\u4e09\u6b65\uff1a\u6b63\u5f0f\u5f00\u59cb\u65b0\u539f\u5b50\u4e8b\u4ef6\u5f00\u53d1"),(0,l.kt)("h3",{id:"31-\u62c9\u53d6chaosblade-exec-middleware\u9879\u76ee\u4ee3\u7801"},"3.1 \u62c9\u53d6chaosblade-exec-middleware\u9879\u76ee\u4ee3\u7801"),(0,l.kt)("p",null,"middleware\u9879\u76ee\uff1a\u5305\u542bNginx\u3001Redis\u7b49\u4e2d\u95f4\u4ef6\u76f8\u5173\u5b9e\u9a8c\u6838\u5fc3\u4ee3\u7801\u3002"),(0,l.kt)("p",null,"\u9879\u76ee\u5730\u5740\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade-exec-middleware"},"https://github.com/chaosblade-io/chaosblade-exec-middleware")),(0,l.kt)("h3",{id:"32-\u65b0\u5efaredis\u76ee\u5f55"},"3.2 \u65b0\u5efaredis\u76ee\u5f55"),(0,l.kt)("p",null,"\u8be5\u76ee\u5f55\u653e\u7f6eRedis\u539f\u5b50\u4e8b\u4ef6\u6838\u5fc3\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir chaosblade-exec-middleware/exec/redis\n")),(0,l.kt)("h3",{id:"33-\u65b0\u5efa-redisgo-\u6587\u4ef6"},"3.3 \u65b0\u5efa redis.go \u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'package redis\n\nimport (\n    "github.com/chaosblade-io/chaosblade-spec-go/spec"\n)\n\ntype RedisCommandSpec struct {\n    spec.BaseExpModelCommandSpec\n}\n\nfunc (*RedisCommandSpec) Name() string {\n    return "redis"\n}\n\nfunc (*RedisCommandSpec) ShortDesc() string {\n    return "Redis experiment"\n}\n\nfunc (*RedisCommandSpec) LongDesc() string {\n    return "Redis experiment"\n}\n\nfunc NewRedisCommandSpec() spec.ExpModelCommandSpec {\n    return &RedisCommandSpec{\n        spec.BaseExpModelCommandSpec{\n            ExpActions: []spec.ExpActionCommandSpec{\n                NewCacheExpireActionSpec(),\n                NewCacheLimitActionSpec(),\n            },\n            ExpFlags: []spec.ExpFlagSpec{},\n        },\n    }\n}\n')),(0,l.kt)("h3",{id:"34-redis\u539f\u5b50\u4e8b\u4ef6\u5305\u542b\u5230model"},"3.4 Redis\u539f\u5b50\u4e8b\u4ef6\u5305\u542b\u5230Model"),(0,l.kt)("p",null,"model\u76ee\u5f55\u4f4d\u7f6e\uff1achaosblade-exec-middleware/exec/model/\u76ee\u5f55"),(0,l.kt)("p",null,"model\u76ee\u5f55\u4e0d\u540c\u6587\u4ef6\u5bf9\u5e94\u4e0d\u540c\u7cfb\u7edf\u652f\u6301\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"model_darwin.go \u652f\u6301Mac\u7cfb\u7edf"),(0,l.kt)("li",{parentName:"ul"},"model_linux.go \u652f\u6301linux\u7cfb\u7edf"),(0,l.kt)("li",{parentName:"ul"},"model_windows.go \u652f\u6301windows\u7cfb\u7edf")),(0,l.kt)("p",null,"model\u5177\u4f53\u4ee3\u7801\uff1a"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade-exec-middleware/tree/main/exec/model"},"chaosblade-exec-middleware/exec/model/")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'\npackage model\n\nimport (\n    "github.com/chaosblade-io/chaosblade-exec-middleware/exec/nginx"\n    "github.com/chaosblade-io/chaosblade-exec-middleware/exec/redis"\n    "github.com/chaosblade-io/chaosblade-spec-go/spec"\n)\n\n// GetAllExpModels returns the experiment model specs in the project.\n// Support for other project about chaosblade\nfunc GetAllExpModels() []spec.ExpModelCommandSpec {\n    return []spec.ExpModelCommandSpec{\n        nginx.NewNginxCommandSpec(),\n        redis.NewRedisCommandSpec(),\n    }\n\n')),(0,l.kt)("h3",{id:"35-redis\u539f\u5b50\u4e8b\u4ef6\u5305\u542b\u5230\u7f16\u8bd1\u6587\u4ef6"},"3.5 Redis\u539f\u5b50\u4e8b\u4ef6\u5305\u542b\u5230\u7f16\u8bd1\u6587\u4ef6"),(0,l.kt)("p",null,"\u5177\u4f53\u6587\u4ef6\uff1a\u6dfb\u52a0Redis\u5230chaosblade-exec-middleware/build/spec.go"),(0,l.kt)("p",null,"\u5177\u4f53\u4ee3\u7801\uff1a"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade-exec-middleware/blob/main/build/spec.go"},"chaosblade-exec-middleware/build/spec.go")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'...\n// getModels returns experiment models in the project\nfunc getModels() *spec.Models {\n    modelCommandSpecs := []spec.ExpModelCommandSpec{\n        nginx.NewNginxCommandSpec(),\n        redis.NewRedisCommandSpec(), // <== Redis\u76f8\u5173 \n    }\n    specModels := make([]*spec.Models, 0)\n    for _, modeSpec := range modelCommandSpecs {\n        flagSpecs := append(modeSpec.Flags(), model.GetSSHExpFlags()...)\n        modeSpec.SetFlags(flagSpecs)\n        specModel := util.ConvertSpecToModels(modeSpec, spec.ExpPrepareModel{}, "host")\n        specModels = append(specModels, specModel)\n    }\n    return util.MergeModels(specModels...)\n}\n...\n\n')),(0,l.kt)("h3",{id:"36-\u5f00\u53d1\u5177\u4f53\u539f\u5b50\u4e8b\u4ef6"},"3.6 \u5f00\u53d1\u5177\u4f53\u539f\u5b50\u4e8b\u4ef6"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7f13\u5b58\u8fc7\u671f\u5b9e\u9a8c\uff1a")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade-exec-middleware/blob/main/exec/redis/redis_cache_expire.go"},"chaosblade-exec-middleware/exec/redis/redis_cache_expire.go")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u7f13\u5b58\u5185\u5b58\u9650\u5236\u5b9e\u9a8c")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade-exec-middleware/blob/main/exec/redis/redis_cache_limit.go"},"chaosblade-exec-middleware/exec/redis/redis_cache_limit.go")),(0,l.kt)("h2",{id:"\u7b2c\u56db\u6b65\u4f7f\u7528goland\u672c\u5730\u8c03\u8bd5\u6709bug\u6216\u4f18\u5316\u518d\u6b21\u5f00\u53d1\u8c03\u8bd5"},"\u7b2c\u56db\u6b65\uff1a\u4f7f\u7528Goland\u672c\u5730\u8c03\u8bd5\uff0c\u6709bug\u6216\u4f18\u5316\u518d\u6b21\u5f00\u53d1\u8c03\u8bd5\u3002"),(0,l.kt)("h3",{id:"41-\u642d\u5efa\u51c6\u5907redis\u670d\u52a1"},"4.1 \u642d\u5efa\u51c6\u5907Redis\u670d\u52a1"),(0,l.kt)("p",null,"\u53c2\u8003\u76f8\u5173\u6587\u6863"),(0,l.kt)("h3",{id:"42-\u4fee\u6539goland-debug\u914d\u7f6e"},"4.2 \u4fee\u6539Goland Debug\u914d\u7f6e"),(0,l.kt)("h4",{id:"1\u6253\u5f00maingo-\u70b9\u51fb\u4e09\u89d2\u6309\u94ae\u9009\u62e9modify-run--configuration"},"1.\u6253\u5f00main.go \u70b9\u51fb\u4e09\u89d2\u6309\u94ae\uff0c\u9009\u62e9Modify Run  Configuration..."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"debug_01.png",src:t(13046).Z,width:"660",height:"402"})),(0,l.kt)("h4",{id:"2\u4fee\u6539debug\u914d\u7f6e\u8be6\u7ec6\u4f7f\u7528\u53ef\u4ee5\u67e5\u770bgoland\u5b98\u65b9\u6587\u6863"},"2.\u4fee\u6539debug\u914d\u7f6e\uff1a\u8be6\u7ec6\u4f7f\u7528\u53ef\u4ee5\u67e5\u770bGoland\u5b98\u65b9\u6587\u6863"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"debug_02.png",src:t(46832).Z,width:"891",height:"594"})),(0,l.kt)("h4",{id:"3\u6267\u884cdebug\u64cd\u4f5c\u8be6\u7ec6\u4f7f\u7528\u53ef\u4ee5\u67e5\u770bgoland\u5b98\u65b9\u6587\u6863"},"3.\u6267\u884cDebug\u64cd\u4f5c\uff1a\u8be6\u7ec6\u4f7f\u7528\u53ef\u4ee5\u67e5\u770bGoland\u5b98\u65b9\u6587\u6863"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"debug_03.png",src:t(24943).Z,width:"689",height:"391"})),(0,l.kt)("h2",{id:"\u7b2c\u4e94\u6b65\u672c\u5730\u7f16\u8bd1\u5e76\u66ff\u6362\u6d4b\u8bd5\u73af\u5883\u65e7\u7f16\u8bd1\u6587\u4ef6"},"\u7b2c\u4e94\u6b65\uff1a\u672c\u5730\u7f16\u8bd1\u5e76\u66ff\u6362\u6d4b\u8bd5\u73af\u5883\u65e7\u7f16\u8bd1\u6587\u4ef6"),(0,l.kt)("h3",{id:"51-\u53c2\u8003\u5b98\u65b9\u6587\u6863\u6267\u884c\u7f16\u8bd1"},"5.1 \u53c2\u8003\u5b98\u65b9\u6587\u6863\u6267\u884c\u7f16\u8bd1"),(0,l.kt)("h4",{id:"\u5982\u679c\u5728-mac-\u7cfb\u7edf\u4e0a\u7f16\u8bd1\u5f53\u524d\u7cfb\u7edf\u7684\u7248\u672c\u8bf7\u6267\u884c"},"\u5982\u679c\u5728 mac \u7cfb\u7edf\u4e0a\uff0c\u7f16\u8bd1\u5f53\u524d\u7cfb\u7edf\u7684\u7248\u672c\uff0c\u8bf7\u6267\u884c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"make build_darwin")),(0,l.kt)("h4",{id:"\u5982\u679c\u60f3\u5728-mac-\u7cfb\u7edf\u4e0a\u7f16\u8bd1-linux-\u7cfb\u7edfx86\u67b6\u6784\u7248\u672c\u8bf7\u6267\u884c"},"\u5982\u679c\u60f3\u5728 mac \u7cfb\u7edf\u4e0a\uff0c\u7f16\u8bd1 linux \u7cfb\u7edfx86\u67b6\u6784\u7248\u672c\uff0c\u8bf7\u6267\u884c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"make build_linux")),(0,l.kt)("h4",{id:"\u5982\u679c\u60f3\u5728-mac-\u7cfb\u7edf\u4e0a\u7f16\u8bd1linux-\u7cfb\u7edfarm-\u67b6\u6784\u7248\u672c\u8bf7\u6267\u884c"},"\u5982\u679c\u60f3\u5728 mac \u7cfb\u7edf\u4e0a\uff0c\u7f16\u8bd1linux \u7cfb\u7edfarm \u67b6\u6784\u7248\u672c\uff0c\u8bf7\u6267\u884c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"make build_linux_arm")),(0,l.kt)("p",null,"\u8bf4\u660e\uff1a\u5176\u4ed6\u7cfb\u7edf\u7f16\u8bd1\u8bf4\u660e\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade/blob/master/README_CN.md"},"\u5b98\u65b9\u6587\u6863")),(0,l.kt)("h3",{id:"52-\u7f16\u8bd1\u540e\u6587\u4ef6\u5b58\u653e\u5728target\u76ee\u5f55\u4e2d"},"5.2 \u7f16\u8bd1\u540e\u6587\u4ef6\u5b58\u653e\u5728target\u76ee\u5f55\u4e2d"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"build_01.png",src:t(36144).Z,width:"439",height:"481"})),(0,l.kt)("h3",{id:"53-\u6d4b\u8bd5\u73af\u5883\u66ff\u6362\u4e3a\u65b0\u7f16\u8bd1\u6587\u4ef6"},"5.3 \u6d4b\u8bd5\u73af\u5883\u66ff\u6362\u4e3a\u65b0\u7f16\u8bd1\u6587\u4ef6"),(0,l.kt)("p",null,"\u5c06\u6d4b\u8bd5\u670d\u52a1\u5668chaosblade\u76ee\u5f55\u4ee5\u4e0b\u6587\u4ef6\u66ff\u6362\u4e3a\u65b0\u7248\u672c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"chaosblade-1.7.2/bin/chaos_middleware"),(0,l.kt)("li",{parentName:"ul"},"chaosblade-1.7.2/yaml/chaosblade-middleware-spec-1.7.2.yaml")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"build_02.png",src:t(37581).Z,width:"322",height:"112"})),(0,l.kt)("h2",{id:"\u7b2c\u516d\u6b65\u6d4b\u8bd5\u73af\u5883\u6d4b\u8bd5\u76f4\u81f3\u901a\u8fc7"},"\u7b2c\u516d\u6b65\uff1a\u6d4b\u8bd5\u73af\u5883\u6d4b\u8bd5\u76f4\u81f3\u901a\u8fc7"),(0,l.kt)("h3",{id:"61-\u6d4b\u8bd5\u6a21\u62df\u7f13\u5b58\u8fc7\u671f\u5b9e\u9a8c"},"6.1 \u6d4b\u8bd5\u6a21\u62df\u7f13\u5b58\u8fc7\u671f\u5b9e\u9a8c"),(0,l.kt)("h4",{id:"\u6267\u884c\u5b9e\u9a8c"},"\u6267\u884c\u5b9e\u9a8c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"#\u793a\u4f8b1\uff1aexpire a key\nblade create redis cache-expire --addr 192.168.56.101:6379 --password 123456 --key test1 --expiry 1m\n#\u793a\u4f8b2\uff1aexpire all keys only when the new expiry is greater than current one\nblade create redis cache-expire --addr 192.168.56.101:6379 --password 123456 --option GT --expiry 1m\n")),(0,l.kt)("h4",{id:"\u9a8c\u8bc1\u5b9e\u9a8c\u7ed3\u679c"},"\u9a8c\u8bc1\u5b9e\u9a8c\u7ed3\u679c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# \u5b9e\u9a8c\u524d\n192.168.56.101:6379> set  test1 test2\nOK\n192.168.56.101:6379> get test1\n"test2"\n192.168.56.101:6379> expire test1 3000\n(integer) 1\n192.168.56.101:6379> ttl test1\n(integer) 2924\n# \u5b9e\u9a8c\u540e\n# blade create redis cache-expire --addr 192.168.56.101:6379 --password 123456 --option GT --expiry 1m\n192.168.56.101:6379> ttl test1\n(integer) 58\n')),(0,l.kt)("h3",{id:"62-\u6d4b\u8bd5\u6a21\u62df\u7f13\u5b58\u5185\u5b58\u9650\u5236\u5b9e\u9a8c"},"6.2 \u6d4b\u8bd5\u6a21\u62df\u7f13\u5b58\u5185\u5b58\u9650\u5236\u5b9e\u9a8c"),(0,l.kt)("h4",{id:"\u6267\u884c\u5b9e\u9a8c-1"},"\u6267\u884c\u5b9e\u9a8c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u793a\u4f8b\uff1a set maxmemory to 256M\nblade create redis cache-limit --addr 192.168.56.101:6379 --password 123456  --size 256M\n")),(0,l.kt)("h4",{id:"\u9a8c\u8bc1\u5b9e\u9a8c\u7ed3\u679c-1"},"\u9a8c\u8bc1\u5b9e\u9a8c\u7ed3\u679c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# \u5b9e\u9a8c\u524d\n192.168.56.101:6379> config get maxmemory\n1) "maxmemory"\n2) "0"\n# \u5b9e\u9a8c\u540e\n# blade create redis cache-limit --addr 192.168.56.101:6379 --password 123456  --size 256M\n192.168.56.101:6379> config get maxmemory\n1) "maxmemory"\n2) "256000000"\n')),(0,l.kt)("p",null,"\u8bf4\u660e\uff1a\u6d4b\u8bd5\u6709bug\u6216\u5f85\u4f18\u5316\uff0c\u91cd\u590d\u5f00\u53d1\u3001\u8c03\u8bd5\u548c\u7f16\u8bd1\u6b65\u9aa4"),(0,l.kt)("h2",{id:"\u7b2c\u4e03\u6b65\u4f7f\u7528dev\u5206\u652f\u521b\u5efa\u548c\u63d0\u4ea4pr"},"\u7b2c\u4e03\u6b65\uff1a\u4f7f\u7528dev\u5206\u652f\u521b\u5efa\u548c\u63d0\u4ea4PR"),(0,l.kt)("h3",{id:"71-\u63a8\u9001\u672c\u5730dev\u5206\u652fgithub\u8fdc\u7a0b"},"7.1 \u63a8\u9001\u672c\u5730dev\u5206\u652fGitHub\u8fdc\u7a0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# commit\ngit commit -s  -m "add 2 redis experiments"\n# push\ngit push origin dev\n')),(0,l.kt)("h3",{id:"72-\u767b\u5f55github-\u4f7f\u7528dev\u5206\u652f\u521b\u5efa\u548c\u63d0\u4ea4pr"},"7.2 \u767b\u5f55GitHub \u4f7f\u7528dev\u5206\u652f\u521b\u5efa\u548c\u63d0\u4ea4PR"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"pr_01.png",src:t(69708).Z,width:"925",height:"865"})),(0,l.kt)("h3",{id:"73-\u63d0\u4ea4pr\u540e\u51c6\u5907\u5b98\u7f51chaosblade\u6587\u6863\u8d21\u732e"},"7.3 \u63d0\u4ea4PR\u540e\u51c6\u5907\u5b98\u7f51ChaosBlade\u6587\u6863\u8d21\u732e"),(0,l.kt)("h2",{id:"\u7b2c\u516b\u6b65pr\u5ba1\u67e5\u76f4\u81f3\u5ba1\u67e5\u901a\u8fc7"},"\u7b2c\u516b\u6b65\uff1aPR\u5ba1\u67e5\u76f4\u81f3\u5ba1\u67e5\u901a\u8fc7"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"pr_02.png",src:t(63949).Z,width:"1668",height:"965"})),(0,l.kt)("h2",{id:"\u7b2c\u4e5d\u6b65pr\u5408\u5e76\u81f3main\u65b0\u589e\u539f\u5b50\u4e8b\u4ef6\u8d21\u732e\u6210\u529f"},"\u7b2c\u4e5d\u6b65\uff1aPR\u5408\u5e76\u81f3main\uff0c\u65b0\u589e\u539f\u5b50\u4e8b\u4ef6\u8d21\u732e\u6210\u529f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"pr_03.png",src:t(59153).Z,width:"934",height:"988"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"ChaosBlade \u5b98\u65b9\u7f51\u5740\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://chaosblade.io/"},"https://chaosblade.io/")),(0,l.kt)("p",{parentName:"blockquote"},"ChaosBlade Github : ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade"},"https://github.com/chaosblade-io/chaosblade")),(0,l.kt)("p",{parentName:"blockquote"},"ChaosBlade \u9489\u9489\u793e\u533a\u4ea4\u6d41\u7fa4:23177705")))}p.isMDXComponent=!0},36144:function(e,a,t){a.Z=t.p+"assets/images/build_01-57a0a72457c2d267c2af8e2ae504d81b.png"},37581:function(e,a,t){a.Z=t.p+"assets/images/build_02-2f5f888e9b3fd13a164967c2d6d5b5a1.png"},5514:function(e,a,t){a.Z=t.p+"assets/images/contribution_process-ee6b68d7f1b973d601271433fd2f5daa.png"},13046:function(e,a,t){a.Z=t.p+"assets/images/debug_01-a05c8c9d30a0a83a429d936480f4046b.png"},46832:function(e,a,t){a.Z=t.p+"assets/images/debug_02-f91b6c311c43b07bef0a1fd26e5e14be.png"},24943:function(e,a,t){a.Z=t.p+"assets/images/debug_03-6a4594f43b7a834861451f6f2b936712.png"},86731:function(e,a,t){a.Z=t.p+"assets/images/fork_and_branch-ff3955072b63dd9d336acb95d599413b.png"},69708:function(e,a,t){a.Z=t.p+"assets/images/pr_01-10a3db5f70fb7eeeae24261e6965da69.png"},63949:function(e,a,t){a.Z=t.p+"assets/images/pr_02-c0fa7c82899a3a33aafd42a7b62f6568.png"},59153:function(e,a,t){a.Z=t.p+"assets/images/pr_03-eb31b2bc906903eca9cda40e4f5503b3.png"}}]);