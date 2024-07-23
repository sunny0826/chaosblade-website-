"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[30299],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),i=p(t),m=r,g=i["".concat(s,".").concat(m)]||i[m]||d[m]||o;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[i]="string"==typeof e?e:r,l[1]=c;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34655:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const o={title:"Chaosblade, \u963f\u91cc\u4e00\u4e2a\u8d85\u7ea7\u725b\u903c\u7684\u6df7\u6c8c\u5b9e\u9a8c\u5b9e\u65bd\u5de5\u5177",tags:["chaosblade"],author:"1\u70b925",author_url:"https://juejin.cn/user/4353721774901806",author_image_url:"https://p3-passport.byteimg.com/img/user-avatar/023f14b3a5377f09b98af09696e3c6ac~180x180.awebp",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/2019/07/03/chaosblade-chaos-engineering-tools",editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/blog/2019-07-03-chaosblade-chaos-engineering-tools.md",source:"@site/blog/2019-07-03-chaosblade-chaos-engineering-tools.md",title:"Chaosblade, \u963f\u91cc\u4e00\u4e2a\u8d85\u7ea7\u725b\u903c\u7684\u6df7\u6c8c\u5b9e\u9a8c\u5b9e\u65bd\u5de5\u5177",description:"\u8f6c\u81ea\uff1ahttps://juejin.cn/post/6844903879814053901",date:"2019-07-03T00:00:00.000Z",formattedDate:"2019\u5e747\u67083\u65e5",tags:[{label:"chaosblade",permalink:"/blog/tags/chaosblade"}],readingTime:13.42,hasTruncateMarker:!0,authors:[{name:"1\u70b925",url:"https://juejin.cn/user/4353721774901806",imageURL:"https://p3-passport.byteimg.com/img/user-avatar/023f14b3a5377f09b98af09696e3c6ac~180x180.awebp"}],frontMatter:{title:"Chaosblade, \u963f\u91cc\u4e00\u4e2a\u8d85\u7ea7\u725b\u903c\u7684\u6df7\u6c8c\u5b9e\u9a8c\u5b9e\u65bd\u5de5\u5177",tags:["chaosblade"],author:"1\u70b925",author_url:"https://juejin.cn/user/4353721774901806",author_image_url:"https://p3-passport.byteimg.com/img/user-avatar/023f14b3a5377f09b98af09696e3c6ac~180x180.awebp",hide_table_of_contents:!1},prevItem:{title:"ChaosBlade\uff1a\u4e91\u539f\u751f\u67b6\u6784\u4e0b\u7684\u6df7\u6c8c\u5de5\u7a0b\u63a2\u7d22\u548c\u5b9e\u8df5",permalink:"/blog/2019/10/17/chaosblade-cloud-native"}},s={authorsImageUrls:[void 0]},p=[{value:"\u573a\u666f\u4e00\uff1a\u670d\u52a1\u5668CPU\u7206\u6ee1",id:"\u573a\u666f\u4e00\u670d\u52a1\u5668cpu\u7206\u6ee1",level:2},{value:"\u573a\u666f\u4e8c\uff1a\u670d\u52a1\u5668\u78c1\u76d8\u7206\u6ee1",id:"\u573a\u666f\u4e8c\u670d\u52a1\u5668\u78c1\u76d8\u7206\u6ee1",level:2},{value:"\u573a\u666f\u4e09\uff1a\u8c03\u7528\u67d0\u4e2aDubbo\u670d\u52a1\u8d85\u65f6",id:"\u573a\u666f\u4e09\u8c03\u7528\u67d0\u4e2adubbo\u670d\u52a1\u8d85\u65f6",level:2},{value:"\u573a\u666f\u56db\uff1aJVM\u4e2d\u67d0\u4e2a\u65b9\u6cd5\u629b\u51fa\u5f02\u5e38\u6216\u8005\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c",id:"\u573a\u666f\u56dbjvm\u4e2d\u67d0\u4e2a\u65b9\u6cd5\u629b\u51fa\u5f02\u5e38\u6216\u8005\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c",level:2},{value:"\u65b9\u6cd5\u629b\u51fa\u5f02\u5e38",id:"\u65b9\u6cd5\u629b\u51fa\u5f02\u5e38",level:3},{value:"\u4fee\u6539\u65b9\u6cd5\u7684\u8fd4\u56de\u503c",id:"\u4fee\u6539\u65b9\u6cd5\u7684\u8fd4\u56de\u503c",level:3},{value:"\u573a\u666f\u4e94\uff1a\u8c03\u7528Mysql\u8d85\u65f6\u6216\u51fa\u73b0\u5f02\u5e38",id:"\u573a\u666f\u4e94\u8c03\u7528mysql\u8d85\u65f6\u6216\u51fa\u73b0\u5f02\u5e38",level:2},{value:"\u8c03\u7528Mysql\u629b\u51fa\u5f02\u5e38",id:"\u8c03\u7528mysql\u629b\u51fa\u5f02\u5e38",level:3},{value:"\u8c03\u7528Mysql\u589e\u52a0\u5ef6\u8fdf",id:"\u8c03\u7528mysql\u589e\u52a0\u5ef6\u8fdf",level:3},{value:"\u573a\u666f\u516d\uff1a\u670d\u52a1\u5668\u7f51\u7edc\u7f13\u6162",id:"\u573a\u666f\u516d\u670d\u52a1\u5668\u7f51\u7edc\u7f13\u6162",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],u={toc:p},i="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(i,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u8f6c\u81ea\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://juejin.cn/post/6844903879814053901"},"https://juejin.cn/post/6844903879814053901"),"\n\u6765\u6e90\uff1a\u7a00\u571f\u6398\u91d1")),(0,r.yg)("h1",{id:"chaosblade\u662f\u4ec0\u4e48"},"Chaosblade\u662f\u4ec0\u4e48\uff1f"),(0,r.yg)("p",null,"Chaosblade\u662f\u9075\u5faa\u6df7\u6c8c\u5de5\u7a0b\uff08Chaos Engineering\uff09\u539f\u7406\u7684\u5b9e\u9a8c\u5de5\u5177\uff0c\u7528\u4e8e\u6a21\u62df\u5e38\u89c1\u7684\u6545\u969c\u573a\u666f\uff0c\u5e2e\u52a9\u63d0\u5347\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u53ef\u6062\u590d\u6027\u548c\u5bf9\u6545\u969c\u7684\u5bb9\u9519\u6027\u3002\nChaosblade\u662f\u5efa\u7acb\u5728\u963f\u91cc\u5df4\u5df4\u8fd1\u5341\u5e74\u6545\u969c\u6d4b\u8bd5\u548c\u6f14\u7ec3\u5b9e\u8df5\u57fa\u7840\u4e0a\uff0c\u7ed3\u5408\u4e86\u96c6\u56e2\u5404\u4e1a\u52a1\u7684\u6700\u4f73\u521b\u610f\u548c\u5b9e\u8df5\u3002\n\u76ee\u524d\u652f\u6301\u7684\u6f14\u7ec3\u573a\u666f\u6709\u64cd\u4f5c\u7cfb\u7edf\u7c7b\u7684 CPU\u3001\u78c1\u76d8\u3001\u8fdb\u7a0b\u3001\u7f51\u7edc\uff0cJava \u5e94\u7528\u7c7b\u7684 Dubbo\u3001MySQL\u3001Servlet \u548c\u81ea\u5b9a\u4e49\u7c7b\u65b9\u6cd5\u5ef6\u8fdf\u6216\u629b\u5f02\u5e38\u7b49\u4ee5\u53ca\u6740\u5bb9\u5668\u3001\u6740 Pod\uff0c\u5177\u4f53\u53ef\u6267\u884c blade create -h \u67e5\u770b\u3002\n\u597d\u4e86\uff0c\u4e0a\u9762\u7684\u4ecb\u7ecd\u662f\u4eceChaosblade\u7684github\u4e3b\u9875\u6284\u7684\u3002\ngithub\u4e3b\u9875\u5730\u5740\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade"},"chaosblade-github"),"\n\u8bf4\u767d\u4e86\uff0cChaosblade\u662f\u4e00\u4e2a\u6545\u969c\u6a21\u62df\u5de5\u5177\uff0c\u53ef\u4ee5\u6a21\u62df\u6bd4\u5982\u670d\u52a1\u5668CPU\u6ee1\u4e86\u3001\u78c1\u76d8\u6ee1\u4e86\u3001\u7f51\u7edc\u6162\u3001Dubbo\u67d0\u4e2a\u670d\u52a1\u54cd\u5e94\u65f6\u95f4\u957f\u3001jvm\u4e2d\u67d0\u4e2a\u65b9\u6cd5\u629b\u51fa\u5f02\u5e38\u3001\u8c03\u7528Mysql\u6162\u7b49\u7b49\u3002\u6240\u4ee5\u8fd9\u4e2a\u5de5\u5177\u5bf9\u4e8e\u5927\u516c\u53f8\u6765\u8bf4\u662f\u975e\u5e38\u975e\u5e38\u6709\u7528\u7684\uff0c\u56e0\u4e3a\u53ef\u4ee5\u63d0\u524d\u6a21\u62df\u51fa\u5404\u79cd\u5404\u6837\u7684\u6545\u969c\uff0c\u4ece\u800c\u4fdd\u8bc1\u7cfb\u7edf\u7684\u9ad8\u53ef\u7528\u4e0e\u7a33\u5b9a\u3002"),(0,r.yg)("h1",{id:"chaosblade\u600e\u4e48\u7528"},"Chaosblade\u600e\u4e48\u7528\uff1f"),(0,r.yg)("p",null,"\u7528\u6cd5\u975e\u5e38\u7b80\u5355\uff0c\u5206\u4e3a\u4e24\u6b65\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u4e0b\u8f7d\u538b\u7f29\u5305\u5e76\u89e3\u538b\uff1agithub.com/chaosblade-\u2026"),(0,r.yg)("li",{parentName:"ol"},"\u89e3\u538b\u4e4b\u540e\u7684\u6587\u4ef6\u4e2d\u6709\u4e00\u4e2ablade\u7684\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u8fd9\u5c31\u662fChaosblade\u63d0\u4f9b\u7684\u5ba2\u6237\u7aef\u5de5\u5177\uff0c\u6211\u4eec\u4e3b\u8981\u4f7f\u7528\u8fd9\u4e2a\u5de5\u5177\u6765\u8fdb\u884c\u6545\u969c\u6a21\u62df\u3002")),(0,r.yg)("p",null,"\u5173\u4e8eblade\u7684\u5404\u79cd\u53c2\u6570\u8be6\u89e3\uff0c\u5927\u5bb6\u8fd8\u662f\u53bbgithub\u4e3b\u9875\u4e0a\u53bb\u770b\u5427\uff0c\u8fd9\u91cc\u4e0d\u4ecb\u7ecd\u4e86\uff0c\u6211\u4e3b\u8981\u60f3\u7ed9\u5927\u5bb6\u770b\u4e00\u4e0b\u6545\u969c\u6a21\u62df\u7684\u5177\u4f53\u4f7f\u7528\u4ee5\u53ca\u6548\u679c\u3002\n\u63a5\u4e0b\u6765\u4f1a\u4ecb\u7ecdChaosblade\u516d\u4e2a\u4f7f\u7528\u573a\u666f\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u6a21\u62df\u670d\u52a1\u5668CPU\u7206\u6ee1"),(0,r.yg)("li",{parentName:"ul"},"\u6a21\u62df\u670d\u52a1\u5668\u78c1\u76d8\u7206\u6ee1"),(0,r.yg)("li",{parentName:"ul"},"\u6a21\u62df\u8c03\u7528\u67d0\u4e2aDubbo\u670d\u52a1\u8d85\u65f6"),(0,r.yg)("li",{parentName:"ul"},"\u6a21\u62dfJVM\u4e2d\u67d0\u4e2a\u65b9\u6cd5\u629b\u51fa\u5f02\u5e38\u6216\u8005\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c"),(0,r.yg)("li",{parentName:"ul"},"\u6a21\u62df\u8c03\u7528Mysql\u8d85\u65f6\u6216\u51fa\u73b0\u5f02\u5e38"),(0,r.yg)("li",{parentName:"ul"},"\u6a21\u62df\u670d\u52a1\u5668\u7f51\u7edc\u7f13\u6162")),(0,r.yg)("h2",{id:"\u573a\u666f\u4e00\u670d\u52a1\u5668cpu\u7206\u6ee1"},"\u573a\u666f\u4e00\uff1a\u670d\u52a1\u5668CPU\u7206\u6ee1"),(0,r.yg)("p",null,"\u6545\u969c\u6f14\u7ec3\u524d\u7cfb\u7edf\u7684cpu\u72b6\u6001\uff0c\u76f4\u63a5\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"top -o CPU")," \u547d\u4ee4\u67e5\u770b\uff1a"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/7/3/16bb7fde31ca7131~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp",alt:"top"}),"\n\u8fdb\u884c\u6545\u969c\u6f14\u7ec3\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'$ ./blade create cpu fullload\n{"code":200,"success":true,"result":"a0682a98d0d7d900"}\n')),(0,r.yg)("p",null,"\u547d\u4ee4\u6267\u884c\u540e\u8fd4\u56de\u6210\u529f\u5219\u8bc1\u660e\u6545\u969c\u6f14\u7ec3\u6210\u529f\uff0c\u518d\u67e5\u770b",(0,r.yg)("inlineCode",{parentName:"p"},"top -o CPU")," \u547d\u4ee4\uff1a\n",(0,r.yg)("img",{parentName:"p",src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/7/3/16bb7fde32271a1d~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp",alt:"top"}),"\n\u6211\u4eec\u901a\u8fc7\u7ed3\u679c\u53ef\u4ee5\u770b\u51fa\u6765Chaosblade\u5e94\u8be5\u5c31\u662f\u8ba9\u81ea\u5df1\u53bb\u5360\u6ee1cpu\u4ece\u800c\u4f7f\u670d\u52a1\u5668\u7684cpu\u7206\u6ee1\u3002"),(0,r.yg)("h2",{id:"\u573a\u666f\u4e8c\u670d\u52a1\u5668\u78c1\u76d8\u7206\u6ee1"},"\u573a\u666f\u4e8c\uff1a\u670d\u52a1\u5668\u78c1\u76d8\u7206\u6ee1"),(0,r.yg)("p",null,"\u5982\u679c\u8981\u6a21\u62df\u78c1\u76d8\u7206\u6ee1\uff0c\u5b9e\u9645\u4e0a\u53ea\u9700\u8981\u5728\u67d0\u4e2a\u6587\u4ef6\u5939\u4e2d\u53bb\u751f\u6210\u4e00\u4e2a\u5f88\u5927\u7684\u6587\u4ef6\u5c31\u884c\u4e86\uff0c\u6240\u4ee5\u6211\u4eec\u8fd9\u91cc\u521b\u5efa\u4e00\u4e2a/bladedisk\u6587\u4ef6\u5939\u3002\n\u8fdb\u884c\u6545\u969c\u6f14\u7ec3\u524d\uff0c/bladedisk\u6587\u4ef6\u5939\u7684\u5927\u5c0f\u4e3a\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ du -sh /bladedisk/\n  0B    /bladedisk/\n")),(0,r.yg)("p",null,"\u8fdb\u884c\u6545\u969c\u6f14\u7ec3\uff0c\u6267\u884c\u4e00\u4e0b\u547d\u4ee4\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"./blade create disk fill -d --mount-point /bladedisk --size 1024\n")),(0,r.yg)("p",null,"\u6b63\u5e38\u60c5\u51b5\u4e0b\u4f1a\u5728/bladedisk\u6587\u4ef6\u5939\u4e0b\u521b\u5efa\u4e00\u4e2achaos_filldisk.log.dat\u6587\u4ef6\u3002\u6b64\u6587\u4ef6\u7684\u5927\u5c0f\u4e3a1024\u4e2a\u5b57\u8282\u3002\n\u6211\u8fd9\u91cc\u4e3a\u4ec0\u4e48\u8bf4\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u56e0\u4e3a\u6211\u7528\u7684\u662fMax OX\u7cfb\u7edf\uff0c\u5728\u6267\u884c\u4e0a\u9762\u7684\u547d\u4ee4\u65f6\u4f1a\u62a5\u9519\u3002\u5177\u4f53\u7684\u9519\u8bef\u5df2\u63d0\u4ea4github issues\uff0c\u611f\u5174\u8da3\u7684\u540c\u5b66\u53ef\u4ee5\u5173\u6ce8\u4e00\u4e0b\uff0cissue\u5730\u5740\u3002"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u5c0f\u82b1\u7d6e\uff1a\u5728\u63d0\u4ea4issue\u65f6\uff0c\u6211\u7528\u7684\u4e2d\u6587\uff0c\u4f46\u662f\u88abchaosblade-bot\u81ea\u52a8\u7ffb\u8bd1\u4e3a\u4e86\u82f1\u6587\uff0c\u5f88\u5389\u5bb3\u3002")),(0,r.yg)("p",null,"\u90a3\u4e48\u5927\u5bb6\u53ef\u4ee5\u5728\u81ea\u5df1\u7684\u7cfb\u7edf\u4e2d\u8bd5\u8bd5\uff0c\u8fd9\u4e2aissue\u89e3\u51b3\u540e\uff0c\u6211\u4f1a\u5bf9\u6587\u7ae0\u8fdb\u884c\u66f4\u65b0\u540e\u8865\u5145\u3002\u5927\u5bb6\u8fd9\u91cc\u53ea\u9700\u8981\u77e5\u9053Chaosblade\u53ef\u4ee5\u6a21\u62df\u8fd9\u79cd\u573a\u666f\u4ee5\u53ca\u5bf9\u5e94\u7684\u539f\u7406\u5c31\u884c\u4e86\u3002"),(0,r.yg)("h2",{id:"\u573a\u666f\u4e09\u8c03\u7528\u67d0\u4e2adubbo\u670d\u52a1\u8d85\u65f6"},"\u573a\u666f\u4e09\uff1a\u8c03\u7528\u67d0\u4e2aDubbo\u670d\u52a1\u8d85\u65f6"),(0,r.yg)("p",null,"\u5b98\u7f51\u7684Demo\u4e2d\u7ed9\u6211\u4eec\u63d0\u4f9b\u4e86\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://link.juejin.cn/?target=https%3A%2F%2Fchaosblade.oss-cn-hangzhou.aliyuncs.com%2Fdemo%2Fdubbo-provider-1.0-SNAPSHOT.jar"},"dubbo-provider")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://link.juejin.cn/?target=https%3A%2F%2Fchaosblade.oss-cn-hangzhou.aliyuncs.com%2Fdemo%2Fdubbo-consumer-1.0-SNAPSHOT.jar"},"dubbo-consumer"))),(0,r.yg)("p",null,"\u5927\u5bb6\u628a\u4e0a\u9762\u7684\u670d\u52a1\u63d0\u4f9b\u8005\u548c\u670d\u52a1\u6d88\u8d39\u8005jar\u5305\u4e0b\u8f7d\u4e0b\u6765\u4e4b\u540e\uff0c\u8fdb\u5230\u4e0b\u8f7d\u76ee\u5f55\uff0c\u7136\u540e\u901a\u8fc7\u4e0b\u9762\u547d\u4ee4\u8fd0\u884c\u8d77\u6765\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"# \u542f\u52a8 dubbo-provider\nnohup java -Djava.net.preferIPv4Stack=true -Dproject.name=dubbo-provider -jar dubbo-provider-1.0-SNAPSHOT.jar > provider.nohup.log 2>&1 &\n# \u7a0d\u7b49 2 \u79d2\uff0c\u7136\u540e\u542f\u52a8 dubbo-consumer\nnohup java -Dserver.port=8080 -Djava.net.preferIPv4Stack=true -Dproject.name=dubbo-consumer -jar dubbo-consumer-1.0-SNAPSHOT.jar > consumer.nohup.log 2>&1 &\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"nohup\u662flinux\u4e2d\u7684\u547d\u4ee4\uff0c\u53ef\u4ee5\u8ba9java\u547d\u4ee4\u540e\u53f0\u8fd0\u884c\u3002")),(0,r.yg)("p",null,"\u8fd0\u884c\u8d77\u6765\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u547d\u4ee4\u6765\u8fdb\u884c\u670d\u52a1\u8c03\u7528\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"http://localhost:8080/hello?msg=world\n")),(0,r.yg)("p",null,"\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u8be5\u8bf7\u6c42\u4f1a\u5f88\u5feb\u7684\u5b8c\u6210\u5e76\u8fd4\u56de\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n"date": "Wed Jul 03 16:33:10 CST 2019",\n"msg": "Dubbo Service: Hello world"\n}\n')),(0,r.yg)("p",null,"\u8fdb\u884c\u6545\u969c\u6f14\u7ec3\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'$ ./blade prepare jvm --process dubbo.consumer\n{"code":200,"success":true,"result":"5cdbc31f46a3d621"}\n$ ./blade create dubbo delay --time 3000 --service com.alibaba.demo.HelloService --methodname hello --consumer --process dubbo.consumer\n{"code":200,"success":true,"result":"3e705e8babe8a86c"}\n')),(0,r.yg)("p",null,"\u4e0a\u9762\u7684\u547d\u4ee4\u4f1a\u4f7fconsumer\u5728\u8c03\u7528com.alibaba.demo.HelloService\u670d\u52a1\u7684hello\u65b9\u6cd5\u65f6\u589e\u52a03\u79d2\u7684\u5ef6\u65f6\u3002\u5f53\u6211\u4eec\u8bbf\u95ee\u4e0a\u9762\u8bbf\u95ee\u7684\u8def\u5f84\u65f6\u4f1a\u6bd4\u4e4b\u524d\u7b49\u5f85\u7684\u66f4\u4e45\u4e00\u70b9\u3002\n\u5728\u5bf9dubbo\u8fdb\u884c\u6545\u969c\u6f14\u7ec3\u65f6\uff0c\u5176\u5b9e\u652f\u6301\u7684\u7ec6\u5206\u573a\u666f\u5f88\u591a\uff0c\u56e0\u4e3a\u5728dubbo\u4e2d\u5206\u4e3aconsumer\u548cprovider\u4e24\u79cd\u89d2\u8272\uff0c\u5f53consumer\u5728\u8c03\u7528provider\u65f6\uff0c\u6211\u4eec\u73b0\u5728\u60f3\u4f7f\u8fd9\u4e2a\u8bf7\u6c42\u589e\u52a0\u5ef6\u65f6\uff0c\u6211\u4eec\u65e2\u53ef\u4ee5\u5728provider\u7aef\u9488\u5bf9\u6307\u5b9a\u7684\u670d\u52a1\u589e\u52a0\u5ef6\u65f6\uff0c\u4e5f\u53ef\u4ee5\u5728consumer\u8c03\u7528\u65f6\u9488\u5bf9\u6307\u5b9a\u7684\u670d\u52a1\u8fdb\u884c\u5ef6\u65f6\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u7a0d\u5fae\u770b\u4e0b\u4e0a\u9762\u7684\u547d\u4ee4\uff0c\u5b83\u5176\u5b9e\u662f\u5728consumer\u8fdb\u884c\u63a7\u5236\u7684\uff0c\u547d\u4ee4\u4e5f\u662f\u652f\u6301\u5728provider\u7aef\u8fdb\u884c\u63a7\u5236\u7684\uff0c\u6211\u4eec\u8fd0\u884c\u4e00\u4e0b\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"blade create dubbo delay --help\n")),(0,r.yg)("p",null,"\u5c06\u770b\u5230\u5e2e\u52a9\u4e2d\u6709\u4e0b\u9762\u7684\u4fe1\u606f\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Flags:\n      --appname string          The consumer or provider application name\n      --consumer                To tag consumer role experiment.\n      --effect-count string     The count of chaos experiment in effect\n      --effect-percent string   The percent of chaos experiment in effect\n  -h, --help                    help for delay\n      --methodname string       The method name\n      --offset string           delay offset for the time\n      --process string          Application process name\n      --provider                To tag provider experiment\n      --service string          The service interface\n      --time string             delay time (required)\n      --timeout string          set timeout for experiment\n      --version string          the service version\n")),(0,r.yg)("p",null,"\u5176\u4e2d\u5c31\u6709",(0,r.yg)("inlineCode",{parentName:"p"},"--consumer")," \u548c",(0,r.yg)("inlineCode",{parentName:"p"},"--provider")," \uff0c\u8868\u793a\u7684\u5c31\u662f\u547d\u4ee4\u4e2d\u53ef\u4ee5\u63a7\u5236\u670d\u52a1\u8c03\u7528\u7684\u4e24\u7aef\u3002\u6240\u4ee5\u5982\u679c\u6211\u4eec\u60f3\u63a7\u5236provider\u7aef\uff0c\u60f3\u8ba9\u67d0\u4e2a\u63a5\u53e3\u88ab\u8c03\u7528\u65f6\u8d85\u65f6\u7684\u8bdd\uff0c\u662f\u5b8c\u5168\u53ef\u4ee5\u8fdb\u884c\u6545\u969c\u6f14\u7ec3\u7684\u3002\n\u90a3\u4e48\u5173\u4e8e\u5e95\u5c42\u539f\u7406\u7684\u8bdd\uff0c\u9700\u8981\u5927\u5bb6\u5bf9Dubbo\u6bd4\u8f83\u4e86\u89e3\uff0cDubbo\u4e2d\u662f\u6709\u52a8\u6001\u914d\u7f6e\u529f\u80fd\u7684\uff0c\u6240\u4ee5Chaosblade\u5e94\u8be5\u4e5f\u662f\u5229\u7528\u4e86dubbo\u7684\u52a8\u6001\u914d\u7f6e\u529f\u80fd\u3002"),(0,r.yg)("h2",{id:"\u573a\u666f\u56dbjvm\u4e2d\u67d0\u4e2a\u65b9\u6cd5\u629b\u51fa\u5f02\u5e38\u6216\u8005\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c"},"\u573a\u666f\u56db\uff1aJVM\u4e2d\u67d0\u4e2a\u65b9\u6cd5\u629b\u51fa\u5f02\u5e38\u6216\u8005\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c"),(0,r.yg)("p",null,"Chaosblade\u652f\u6301\u76f4\u63a5\u64cd\u4f5cjvm\u4e2d\u7684\u65b9\u6cd5\uff0c\u4f7f\u5b83\u629b\u51fa\u5f02\u5e38\u6216\u4fee\u6539\u5176\u8fd4\u56de\u503c\u3002\n\u5148\u51c6\u5907\u4e00\u4e2aMockJvm\u7c7b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'package com;\nimport java.util.concurrent.TimeUnit;\npublic class MockJvm {\n    public String test() {\n        return "test...";\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        MockJvm testJVM = new MockJvm();\n\n        while (true) {\n            try {\n                System.out.println(testJVM.test());\n            } catch (Exception e) {\n                System.out.println(e.getMessage());\n            }\n            TimeUnit.SECONDS.sleep(3);\n        }\n    }\n}\n')),(0,r.yg)("p",null,'\u8fd9\u4e2a\u7c7b\u4f1a\u6bcf\u9694\u4e09\u79d2\u8c03\u7528\u4e00\u4e0btest\u65b9\u6cd5\uff0c\u5e76\u6253\u5370\u51fa\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\uff0c\u5e76\u4e14\u5728\u6355\u83b7test\u65b9\u6cd5\u6240\u629b\u51fa\u7684\u5f02\u5e38\u8fdb\u884c\u6253\u5370\uff0ctest\u65b9\u6cd5\u9ed8\u8ba4\u8fd4\u56de"test"\u3002\u6211\u4eec\u8fd0\u884c\u8fd9\u4e2a\u7c7b\uff0c\u8ba9\u8fd9\u4e2a\u7c7b\u4e00\u76f4\u5728\u8fd0\u884c\u72b6\u6001\uff0c\u6b63\u5e38\u8fd0\u884c\u65f6\uff0c\u63a7\u5236\u53f0\u4f1a\u6253\u5370\u5982\u4e0b\uff1a'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"test...\ntest...\ntest...\ntest...\n")),(0,r.yg)("h3",{id:"\u65b9\u6cd5\u629b\u51fa\u5f02\u5e38"},"\u65b9\u6cd5\u629b\u51fa\u5f02\u5e38"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'$ ./blade prepare jvm --process MockJvm\n{"code":200,"success":true,"result":"5ff98509d2334906"}\n$ ./blade create jvm throwCustomException --process MockJvm --classname com.MockJvm --methodname test --exception java.lang.Exception\n{"code":200,"success":true,"result":"f9052478db2f7ffc"}\n')),(0,r.yg)("p",null,"\u4e0a\u9762\u7684\u547d\u4ee4\u6a21\u62df\u4e86MockJvm\u8fdb\u7a0b\u4e0b\u7684com.MockJvm\u7c7b\u4e2d\u7684test\u65b9\u6cd5\u4f1a\u629b\u51fajava.lang.Exception\u5f02\u5e38\u3002\u4e00\u65e6\u8fd9\u4e2a\u547d\u4ee4\u6267\u884c\u6210\u529f\uff0c\u90a3\u4e48\u6211\u4eec\u4e0a\u9762\u4e00\u76f4\u5728\u8fd0\u884c\u7684\u4ee3\u7801\u63a7\u5236\u53f0\u5c06\u629b\u51fa\u5f02\u5e38\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"test...\ntest...\ntest...\nchaosblade-mock-exception\nchaosblade-mock-exception\n")),(0,r.yg)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u53ef\u4ee5\u64a4\u56de\u521a\u521a\u7684\u573a\u666f\u6a21\u62df\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"./blade destroy f9052478db2f7ffc // f9052478db2f7ffc\u3002\n")),(0,r.yg)("p",null,"\u64a4\u56de\u4e4b\u540e\uff0c\u63a7\u5236\u53f0\u5c06\u6062\u590d\u6b63\u5e38\u7684\u6253\u5370\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"chaosblade-mock-exception\nchaosblade-mock-exception\nchaosblade-mock-exception\nchaosblade-mock-exception\ntest...\ntest...\n")),(0,r.yg)("h3",{id:"\u4fee\u6539\u65b9\u6cd5\u7684\u8fd4\u56de\u503c"},"\u4fee\u6539\u65b9\u6cd5\u7684\u8fd4\u56de\u503c"),(0,r.yg)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u53ef\u4ee5\u4fee\u6539\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'$ ./blade create jvm return --process MockJvm --classname com.MockJvm --methodname test --value hahaha...\n{"code":200,"success":true,"result":"9ffce12b1fdc2580"}\n')),(0,r.yg)("p",null,"\u63a7\u5236\u53f0\u5c06\u6253\u5370\u51fa\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"test...\ntest...\ntest...\nhahaha...\nhahaha...\nhahaha...\n")),(0,r.yg)("p",null,"\u53ef\u4ee5\u770b\u5230\u6210\u529f\u4fee\u6539\u4e86test\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u3002"),(0,r.yg)("h2",{id:"\u573a\u666f\u4e94\u8c03\u7528mysql\u8d85\u65f6\u6216\u51fa\u73b0\u5f02\u5e38"},"\u573a\u666f\u4e94\uff1a\u8c03\u7528Mysql\u8d85\u65f6\u6216\u51fa\u73b0\u5f02\u5e38"),(0,r.yg)("p",null,"Chaosblade\u76ee\u524d\u652f\u6301Mysql\u573a\u666f\u5206\u4e3a\u8c03\u7528Mysql\u8d85\u65f6\u6216\u8005\u6267\u884c\u8bed\u53e5\u65f6\u51fa\u73b0\u5f02\u5e38\u3002\u4f46\u662f\u5b83\u662f\u5728JDBC\u8fd9\u4e00\u5c42\u8fdb\u884c\u63a7\u5236\u7684\uff0c\u5e76\u6ca1\u6709\u771f\u6b63\u7684\u53bb\u63a7\u5236mysql\u670d\u52a1\u7aef\u3002\n\u8fd9\u91cc\u5148\u7528JDBC\u5199\u4e00\u4e2a\u6d4b\u8bd5\u7c7b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'package com;\n\nimport java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.ResultSet;\nimport java.sql.Statement;\nimport java.time.LocalDateTime;\nimport java.util.concurrent.TimeUnit;\n\npublic class JDBCConnection {\n    public static String url_encrypt="jdbc:mysql://127.0.0.1:3306/test?useSSL=false";\n    public static String user="root";\n    public static String password="Nice89163";\n\n    public static void main(String[] args) throws Exception\n    {\n        Class.forName("com.mysql.jdbc.Driver");\n        Connection conn  = DriverManager.getConnection(url_encrypt,user,password);\n        Statement stmt= conn.createStatement();\n\n        while (true) {\n            try {\n                LocalDateTime before = LocalDateTime.now();\n                ResultSet rs = stmt.executeQuery("select * from t_test");\n                LocalDateTime after = LocalDateTime.now();\n                System.out.println("\u6267\u884c\u65f6\u95f4\uff1a" + (after.getSecond() - before.getSecond()));\n            } catch (Exception e) {\n                System.out.println(e.getMessage());\n            }\n            TimeUnit.SECONDS.sleep(3);\n        }\n\n    }\n}\n')),(0,r.yg)("p",null,"\u8fd9\u4e2aJDBCConnection\u7c7b\u76f4\u63a5\u4f7f\u7528JDBC\u6765\u6267\u884csql\uff0c\u4f9d\u8d56mysql-connector-java\u5bf9\u5e94\u7684jar\u3002\u8fd9\u91cc\u6211\u5728\u6d4b\u8bd5\u7684\u65f6\u5019\u53d1\u73b0\uff0c\u5982\u679c\u4f7f\u7528",(0,r.yg)("a",{parentName:"p",href:"mailto:mysql-connector-java@5.1.47"},"mysql-connector-java@5.1.47"),"\u8fd9\u4e2a\u7248\u672c\u53ef\u4ee5\u6b63\u5e38\u7684\u8fdb\u884c\u6545\u969c\u6a21\u62df\uff0c\u5982\u679c\u4f7f\u7528",(0,r.yg)("a",{parentName:"p",href:"mailto:mysql-connector-java@8.0.15"},"mysql-connector-java@8.0.15"),"\u7248\u672c\u5219\u4e0d\u80fd\u8fdb\u884c\u6b63\u5e38\u7684\u6545\u969c\u6a21\u62df\uff0c\u5177\u4f53\u539f\u56e0\u8fd8\u6ca1\u6709\u53bb\u67e5\u3002\n\u8fd9\u4e2a\u6d4b\u8bd5\u7684\u529f\u80fd\u662f\u53bb\u8fdb\u884cselect\u67e5\u8be2\uff0c\u5e76\u4e14\u5982\u679c\u5728select\u7684\u65f6\u5019\u5982\u679c\u629b\u51fa\u5f02\u5e38\u4f1a\u88ab\u6355\u83b7\u5e76\u4e14\u8fdb\u884c\u6253\u5370\uff0c\u5e76\u4e14\u8fd8\u4f1a\u8ba1\u7b97select\u8bed\u53e5\u6267\u884c\u6240\u82b1\u8d39\u7684\u65f6\u95f4\u3002\n\u9996\u5148\u5c06\u4e0a\u9762\u7684\u7c7b\u8fd0\u884c\u8d77\u6765\uff0c\u63a7\u5236\u53f0\u5c06\u4e00\u76f4\u6253\u5370\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\u6267\u884c\u65f6\u95f4\uff1a0\n\u6267\u884c\u65f6\u95f4\uff1a0\n\u6267\u884c\u65f6\u95f4\uff1a0\n")),(0,r.yg)("h3",{id:"\u8c03\u7528mysql\u629b\u51fa\u5f02\u5e38"},"\u8c03\u7528Mysql\u629b\u51fa\u5f02\u5e38"),(0,r.yg)("p",null,"\u8fd0\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u5f00\u59cb\u6545\u969c\u6a21\u62df\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'$ ./blade prepare jvm --process JDBCConnection\n{"code":200,"success":true,"result":"f278e66ddb1b4e11"}\n$ ./blade create mysql throwCustomException --database test --host 127.0.0.1 --port 3306 --process JDBCConnection --sqltype select --table t_test --exception java.lang.Exception\n{"code":200,"success":true,"result":"ddd6799da50f9201"}\n')),(0,r.yg)("p",null,"\u547d\u4ee4\u6267\u884c\u6210\u529f\u540e\uff0c\u63a7\u5236\u53f0\u5c06\u6253\u5370\u51fa\u5f02\u5e38\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\u6267\u884c\u65f6\u95f4\uff1a0\n\u6267\u884c\u65f6\u95f4\uff1a0\n\u6267\u884c\u65f6\u95f4\uff1a0\nUnexpected exception encountered during query.\nUnexpected exception encountered during query.\n")),(0,r.yg)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u53ef\u4ee5\u64a4\u56de\u521a\u521a\u7684\u573a\u666f\u6a21\u62df\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"./blade destroy ddd6799da50f9201 \n")),(0,r.yg)("p",null,"\u64a4\u56de\u4e4b\u540e\uff0c\u63a7\u5236\u53f0\u5c06\u6062\u590d\u6b63\u5e38\u7684\u6253\u5370\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Unexpected exception encountered during query.\nUnexpected exception encountered during query.\nUnexpected exception encountered during query.\n\u6267\u884c\u65f6\u95f4\uff1a0\n\u6267\u884c\u65f6\u95f4\uff1a0\n")),(0,r.yg)("h3",{id:"\u8c03\u7528mysql\u589e\u52a0\u5ef6\u8fdf"},"\u8c03\u7528Mysql\u589e\u52a0\u5ef6\u8fdf"),(0,r.yg)("p",null,"\u76f4\u63a5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5c06\u4f7f\u5f97\u5728\u6267\u884cselect\u65f6\u589e\u52a04\u79d2\u7684\u5ef6\u65f6\uff0c\u6ce8\u610f\u90fd\u662f\u5728JDBC\u5c42\u63a7\u5236\u7684\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'$ ./blade create mysql delay --database test --host 127.0.0.1 --port 3306 --process JDBCConnection --sqltype select --table t_test --time 4000\n{"code":200,"success":true,"result":"8e5b35e76098caab"}\n')),(0,r.yg)("p",null,"\u547d\u4ee4\u6267\u884c\u5b8c\u6210\u540e\uff0c\u63a7\u5236\u53f0\u5c06\u6253\u5370\u51fa\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\u6267\u884c\u65f6\u95f4\uff1a0\n\u6267\u884c\u65f6\u95f4\uff1a0\n\u6267\u884c\u65f6\u95f4\uff1a4\n\u6267\u884c\u65f6\u95f4\uff1a4\n\u6267\u884c\u65f6\u95f4\uff1a4\n")),(0,r.yg)("h2",{id:"\u573a\u666f\u516d\u670d\u52a1\u5668\u7f51\u7edc\u7f13\u6162"},"\u573a\u666f\u516d\uff1a\u670d\u52a1\u5668\u7f51\u7edc\u7f13\u6162"),(0,r.yg)("p",null,"Chaosblade\u4e5f\u53ef\u4ee5\u5bf9\u7f51\u7edc\u8fdb\u884c\u63a7\u5236\uff0c\u6bd4\u5982\u8fd0\u884c\u4e0b\u9762\u547d\u4ee4\u53ef\u4ee5\u9650\u5236\u7ecf\u8fc7eth0\u7f51\u5361\u7684\u7f51\u7edc\u90fd\u4f1a\u5ef6\u8fdf3\u79d2\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"./blade create network delay --interface eth0 --time 3000\n")),(0,r.yg)("p",null,"\u4e0d\u8fc7Mac\u7cfb\u7edf\u8fd8\u4e0d\u652f\u6301\u8fd9\u4e2a\u573a\u666f\uff0c\u56e0\u4e3a\u5b83\u5b9e\u9645\u662f\u5229\u7528\u7684linux\u7cfb\u7edf\u4e0b\u7684tc(Traffic Control)\u547d\u4ee4\uff0c\u6240\u4ee5\u8981\u6a21\u62df\u7684\u8bdd\u5c31\u8981\u4f7f\u7528linux\u7cfb\u7edf\uff0c\u8fd9\u91cc\u6211\u5c31\u4e0d\u53bb\u6a21\u62df\u4e86\u3002"),(0,r.yg)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.yg)("p",null,"\u672c\u6765\uff0c\u6211\u662f\u6253\u7b97\u5199\u4e00\u7bc7\u5173\u4e8eChaosblade\u5b8c\u6574\u4f7f\u7528\u7684\u6587\u7ae0\u7684\uff0c\u4f46\u662f\u76ee\u524d\u770b\u6765\u5b83\u8fd8\u4e0d\u662f\u5f88\u5b8c\u5584\uff0c\u6240\u4ee5\u8fd9\u6b21\u5c31\u5199\u5230\u8fd9\u91cc\uff0c\u6211\u8981\u53bbgithub\u4e0a\u9762\u63d0issue\u53bb\u4e86\u3002\n\u4f46\u662f\uff0c\u6211\u76f8\u4fe1\u901a\u8fc7\u8fd9\u7bc7\u6587\u7ae0\uff0c\u5927\u5bb6\u5e94\u8be5\u5bf9Chaosblade\u7684\u4f5c\u7528\u548c\u529f\u80fd\u90fd\u6709\u6240\u4e86\u89e3\u4e86\uff0c\u4f60\u4eec\u6709\u6536\u83b7\u5c31\u662f\u6211\u7684\u76ee\u7684\u3002"))}d.isMDXComponent=!0}}]);