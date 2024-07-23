"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[60462],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>b});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),g=n,b=u["".concat(i,".").concat(g)]||u[g]||p[g]||o;return a?r.createElement(b,l(l({ref:t},d),{},{components:a})):r.createElement(b,l({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},76819:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(58168),n=(a(96540),a(15680));const o={title:"ChaosBlade\u5de5\u5177\u4f7f\u7528\u5feb\u901f\u5165\u95e8"},l=void 0,s={unversionedId:"getting-started/chaosblade-tool-quick-start/chaosblade-tool-quick-start",id:"version-1.7.0/getting-started/chaosblade-tool-quick-start/chaosblade-tool-quick-start",title:"ChaosBlade\u5de5\u5177\u4f7f\u7528\u5feb\u901f\u5165\u95e8",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u76f4\u63a5\u901a\u8fc7\u7aef\u4fa7\u5de5\u5177ChaosBlade\u8fd0\u884c\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u9a8c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7.0/getting-started/chaosblade-tool-quick-start/chaosblade-tool-quick-start.md",sourceDirName:"getting-started/chaosblade-tool-quick-start",slug:"/getting-started/chaosblade-tool-quick-start/",permalink:"/docs/1.7.0/getting-started/chaosblade-tool-quick-start/",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.0/getting-started/chaosblade-tool-quick-start/chaosblade-tool-quick-start.md",tags:[],version:"1.7.0",frontMatter:{title:"ChaosBlade\u5de5\u5177\u4f7f\u7528\u5feb\u901f\u5165\u95e8"},sidebar:"version-1.7.0/docs",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/1.7.0/getting-started/quick-start"},next:{title:"Server\u6a21\u5f0f\u4f7f\u7528\u7b80\u4ecb",permalink:"/docs/1.7.0/getting-started/chaosblade-tool-quick-start/server-mode-user-guaid"}},i={},c=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5b9e\u9a8c\u51c6\u5907",id:"\u5b9e\u9a8c\u51c6\u5907",level:2},{value:"\u7b2c\u4e00\u6b65\uff0c\u5de5\u5177\u5305\u4e0b\u8f7d",id:"\u7b2c\u4e00\u6b65\u5de5\u5177\u5305\u4e0b\u8f7d",level:3},{value:"\u7b2c\u4e8c\u6b65\uff0c\u5de5\u5177\u89e3\u538b",id:"\u7b2c\u4e8c\u6b65\u5de5\u5177\u89e3\u538b",level:3},{value:"\u51c6\u5907\u9a8c\u8bc1",id:"\u51c6\u5907\u9a8c\u8bc1",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.yg)(u,(0,r.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u76f4\u63a5\u901a\u8fc7\u7aef\u4fa7\u5de5\u5177ChaosBlade\u8fd0\u884c\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u9a8c"),(0,n.yg)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,n.yg)("p",null,"\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u9a8c\u9664\u4e86\u53ef\u4ee5\u901a\u8fc7\u53ef\u89c6\u5316\u754c\u9762\uff0c\u76f4\u63a5\u8fdb\u884c\u7f16\u6392\u548c\u6ce8\u5165\uff0cChaosBlade\u6df7\u6c8c\u5de5\u7a0b\u7aef\u4fa7\u5de5\u5177\u672c\u8eab\u4e5f\u53ef\u76f4\u63a5\u6267\u884c\uff0c\u5176\u672c\u8eab\u652f\u6301\u4ee5\u4e0b\u591a\u79cd\u65b9\u5f0f\u8fd0\u884c\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Cli\u547d\u4ee4\u884c\u6a21\u5f0f\uff1a\u76f4\u63a5\u901a\u8fc7\u547d\u4ee4\u884c\u65b9\u5f0f\u6267\u884c\u6f14\u7ec3\uff0c\u53ef\u76f4\u63a5\u6267\u884c\u4e3b\u673a\u73af\u5883\u548cKubernetes\u73af\u5883\u4e0b\u8fd0\u884c"),(0,n.yg)("li",{parentName:"ul"},"Yaml\u6587\u4ef6\u6a21\u5f0f\uff1a\u8be5\u65b9\u5f0f\u53ea\u5bf9Kubernetes\u96c6\u7fa4\u8fdb\u884c\u6f14\u7ec3\u65f6\u4f7f\u7528\uff0c\u4f7f\u7528yaml\u914d\u7f6e\u6587\u4ef6\u521b\u5efa\u6f14\u7ec3 \u901a\u8fc7\u5b9a\u4e49chaosblade crd\u8d44\u6e90\u7684\u65b9\u5f0f"),(0,n.yg)("li",{parentName:"ul"},"Server\u6a21\u5f0f\uff1a\u5373\u5229\u7528./blade server start \u5c06ChaosBlade\u5de5\u5177\u4f5c\u4e3a\u4e00\u4e2aserver\u542f\u52a8\uff0c\u7136\u540e\u518d\u901a\u8fc7http\u8fdc\u7a0b\u8c03\u7528\u7684\u65b9\u5f0f\u4e0b\u53d1\u547d\u4ee4")),(0,n.yg)("h2",{id:"\u5b9e\u9a8c\u51c6\u5907"},"\u5b9e\u9a8c\u51c6\u5907"),(0,n.yg)("h3",{id:"\u7b2c\u4e00\u6b65\u5de5\u5177\u5305\u4e0b\u8f7d"},"\u7b2c\u4e00\u6b65\uff0c\u5de5\u5177\u5305\u4e0b\u8f7d"),(0,n.yg)("p",null,"\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u5de5\u5177\u5305 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade/releases/download/v1.7.0/chaosblade-1.7.0-linux-amd64.tar.gz"},"chaosblade-1.7.0-linux-amd64.tar.gz")," "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"wget https://github.com/chaosblade-io/chaosblade/releases/download/v1.7.0/chaosblade-1.7.0-linux-amd64.tar.gz\n\n")),(0,n.yg)("h3",{id:"\u7b2c\u4e8c\u6b65\u5de5\u5177\u89e3\u538b"},"\u7b2c\u4e8c\u6b65\uff0c\u5de5\u5177\u89e3\u538b"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"tar -xvf chaosblade-1.7.0-linux-amd64.tar.gz -C /opt/\nln -s /opt/chaosblade-1.7.0 /opt/chaosblade\n")),(0,n.yg)("h2",{id:"\u51c6\u5907\u9a8c\u8bc1"},"\u51c6\u5907\u9a8c\u8bc1"),(0,n.yg)("p",null,"\u8fdb\u5165\u89e3\u538b\u5305\u672c\u5730\u6240\u653e\u7f6e\u7684\u8def\u5f84\uff0c\u901a\u8fc7",(0,n.yg)("inlineCode",{parentName:"p"},"./blade version"),"\u6216",(0,n.yg)("inlineCode",{parentName:"p"},"./blade v"),"\u6765\u67e5\u770b\u662f\u5426\u53ef\u7528\uff0c\u9884\u671f\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"[root@test chaosblade]# cd /opt/chaosblade\n[root@test chaosblade]# ./blade version\nversion: 1.7.0\nenv: #1 SMP Tue May 26 11:42:35 UTC 2020 x86_64\nbuild-time: Thu Oct 20 02:18:52 UTC 2022\n")))}p.isMDXComponent=!0}}]);