"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[32997],{15680:(t,e,a)=>{a.d(e,{xA:()=>s,yg:()=>u});var n=a(96540);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},d="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=p(a),m=l,u=d["".concat(o,".").concat(m)]||d[m]||y[m]||r;return a?n.createElement(u,g(g({ref:e},s),{},{components:a})):n.createElement(u,g({ref:e},s))}));function u(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,g=new Array(r);g[0]=m;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[d]="string"==typeof t?t:l,g[1]=i;for(var p=2;p<r;p++)g[p]=a[p];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22788:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>g,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(58168),l=(a(96540),a(15680));const r={title:"\u63a2\u9488(Agent)\u5b89\u88c5"},g=void 0,i={unversionedId:"getting-started/installation-and-deployment/agent-install",id:"version-1.7.0/getting-started/installation-and-deployment/agent-install",title:"\u63a2\u9488(Agent)\u5b89\u88c5",description:"\u63a2\u9488\u4e3b\u8981\u4f5c\u4e3a\u5e73\u53f0\u7aef\u5efa\u8054\u3001\u547d\u4ee4\u4e0b\u53d1\u901a\u9053\u548c\u6570\u636e\u6536\u96c6\u7b49\u529f\u80fd\uff0c\u6240\u4ee5\u5982\u679c\u9700\u8981\u5bf9\u76ee\u6807\u96c6\u7fa4\u6216\u4e3b\u673a\u8fdb\u884c\u6f14\u7ec3\uff0c\u9700\u8981\u5728\u7aef\u4fa7\u7684\u76ee\u6807\u96c6\u7fa4\u6216\u4e3b\u673a\u4e0a\u5b89\u88c5\u63a2\u9488\uff0c\u4ee5\u4fbf\u5c06\u5e73\u53f0\u7f16\u6392\u597d\u7684\u6f14\u7ec3\u8f6c\u5316\u6210\u547d\u4ee4\uff0c\u4e0b\u53d1\u5230\u76ee\u6807\u673a\u5668\u4e0a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7.0/getting-started/installation-and-deployment/agent-install.md",sourceDirName:"getting-started/installation-and-deployment",slug:"/getting-started/installation-and-deployment/agent-install",permalink:"/docs/1.7.0/getting-started/installation-and-deployment/agent-install",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.0/getting-started/installation-and-deployment/agent-install.md",tags:[],version:"1.7.0",frontMatter:{title:"\u63a2\u9488(Agent)\u5b89\u88c5"},sidebar:"version-1.7.0/docs",previous:{title:"\u6df7\u6c8c\u5de5\u7a0b\u5de5\u5177ChaosBlade\u5b89\u88c5\u4e0e\u5378\u8f7d",permalink:"/docs/1.7.0/getting-started/installation-and-deployment/tool-chaosblade-install-and-uninstall"},next:{title:"\u73af\u5883\u51c6\u5907",permalink:"/docs/1.7.0/getting-started/installation-and-deployment/environment-prepare"}},o={},p=[{value:"\u4e3b\u673a\u73af\u5883\u4e0b\u5b89\u88c5",id:"\u4e3b\u673a\u73af\u5883\u4e0b\u5b89\u88c5",level:2},{value:"\u81ea\u52a8\u5b89\u88c5\u63a2\u9488",id:"\u81ea\u52a8\u5b89\u88c5\u63a2\u9488",level:3},{value:"\u624b\u52a8\u5b89\u88c5\u63a2\u9488",id:"\u624b\u52a8\u5b89\u88c5\u63a2\u9488",level:3},{value:"Kubernetes\u73af\u5883\u4e0b\u5b89\u88c5",id:"kubernetes\u73af\u5883\u4e0b\u5b89\u88c5",level:2}],s={toc:p},d="wrapper";function y(t){let{components:e,...r}=t;return(0,l.yg)(d,(0,n.A)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"\u63a2\u9488\u4e3b\u8981\u4f5c\u4e3a\u5e73\u53f0\u7aef\u5efa\u8054\u3001\u547d\u4ee4\u4e0b\u53d1\u901a\u9053\u548c\u6570\u636e\u6536\u96c6\u7b49\u529f\u80fd\uff0c\u6240\u4ee5\u5982\u679c\u9700\u8981\u5bf9\u76ee\u6807\u96c6\u7fa4\u6216\u4e3b\u673a\u8fdb\u884c\u6f14\u7ec3\uff0c\u9700\u8981\u5728\u7aef\u4fa7\u7684\u76ee\u6807\u96c6\u7fa4\u6216\u4e3b\u673a\u4e0a\u5b89\u88c5\u63a2\u9488\uff0c\u4ee5\u4fbf\u5c06\u5e73\u53f0\u7f16\u6392\u597d\u7684\u6f14\u7ec3\u8f6c\u5316\u6210\u547d\u4ee4\uff0c\u4e0b\u53d1\u5230\u76ee\u6807\u673a\u5668\u4e0a\u3002"),(0,l.yg)("p",null,"\u5728 ",(0,l.yg)("a",{parentName:"p",href:"/docs/1.7.0/getting-started/installation-and-deployment/platform-box-install-and-uninstall"},"\u5b89\u88c5Box\u5e73\u53f0")," \u540e\uff0c\u8fdb\u5165Box\u4e3b\u9875\uff0c\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u9009\u62e9",(0,l.yg)("strong",{parentName:"p"},"\u63a2\u9488\u7ba1\u7406"),"\uff0c\u6839\u636e\u7aef\u4fa7\u73af\u5883\u9009\u62e9\u4e0d\u540c\u7684\u63a2\u9488\u5b89\u88c5\u65b9\u5f0f\n",(0,l.yg)("img",{alt:"image.png",src:a(51364).A,width:"750",height:"229"})),(0,l.yg)("h2",{id:"\u4e3b\u673a\u73af\u5883\u4e0b\u5b89\u88c5"},"\u4e3b\u673a\u73af\u5883\u4e0b\u5b89\u88c5"),(0,l.yg)("h3",{id:"\u81ea\u52a8\u5b89\u88c5\u63a2\u9488"},"\u81ea\u52a8\u5b89\u88c5\u63a2\u9488"),(0,l.yg)("p",null,"\u5229\u7528\u81ea\u52a8\u5b89\u88c5\u63a2\u9488\uff0c\u9700\u8981\u5728\u5b89\u88c5Box\u5e73\u53f0\u65f6\u5df2\u6709",(0,l.yg)("a",{parentName:"p",href:"/docs/1.7.0/getting-started/installation-and-deployment/platform-box-install-and-uninstall/#%E7%AC%AC%E4%BA%8C%E6%AD%A5%E7%A1%AE%E4%BF%9D%E7%8E%AF%E5%A2%83%E8%83%BD%E8%87%AA%E5%8A%A8%E5%AE%89%E8%A3%85%E6%8E%A2%E9%92%88"},"\u81ea\u52a8\u5b89\u88c5\u63a2\u9488\u73af\u5883\u51c6\u5907"),"\uff0c\u5426\u5219\u65e0\u6cd5\u4f7f\u7528"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u8fdb\u5165",(0,l.yg)("strong",{parentName:"li"},"\u63a2\u9488\u7ba1\u7406"),"\u9875\u9762\u540e\uff0c\u70b9\u9009\u53f3\u4e0a\u89d2\u7684",(0,l.yg)("strong",{parentName:"li"},"\u81ea\u52a8\u5b89\u88c5\u63a2\u9488"),"\u6309\u94ae")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"image.png",src:a(92294).A,width:"750",height:"191"})),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"\u6839\u636e\u662f\u5426\u5df2\u6709\u5e94\u7528\u540d\uff0c\u9009\u62e9",(0,l.yg)("strong",{parentName:"li"},"\u5df2\u6709\u5e94\u7528"),"\u548c",(0,l.yg)("strong",{parentName:"li"},"\u65b0\u589e\u5e94\u7528\uff0c"),"\u5e76\u586b\u5199\u76ee\u6807\u4e3b\u673a\u7684",(0,l.yg)("strong",{parentName:"li"},"IP\u5730\u5740"),"\u53caSSH\u767b\u9646\u7684",(0,l.yg)("strong",{parentName:"li"},"\u7528\u6237"),"\u548c",(0,l.yg)("strong",{parentName:"li"},"\u5bc6\u7801"))),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"image.png",src:a(64362).A,width:"341",height:"233"})),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u6700\u540e\u70b9\u51fb\u5b89\u88c5\u5373\u53ef")),(0,l.yg)("h3",{id:"\u624b\u52a8\u5b89\u88c5\u63a2\u9488"},"\u624b\u52a8\u5b89\u88c5\u63a2\u9488"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u8fdb\u5165",(0,l.yg)("strong",{parentName:"li"},"\u63a2\u9488\u7ba1\u7406"),"\u9875\u9762\u540e\uff0c\u70b9\u9009\u53f3\u4e0a\u89d2\u7684",(0,l.yg)("strong",{parentName:"li"},"\u624b\u52a8\u5b89\u88c5\u63a2\u9488"),"\u6309\u94ae \u6216 \u9875\u9762\u4e2d\u7684",(0,l.yg)("strong",{parentName:"li"},"\u63a5\u5165\u63a2\u9488"),"\uff0c\u8fdb\u5165\u63a2\u9488\u5b89\u88c5\u6307\u5f15\u9875\u9762")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"image.png",src:a(87081).A,width:"750",height:"186"})),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"\u70b9\u51fb",(0,l.yg)("strong",{parentName:"li"},"\u4e3b\u673a"),"\uff0c\u8fdb\u5165\u4e3b\u673a\u624b\u52a8\u5b89\u88c5\u7684\u547d\u4ee4\u63d0\u793a\u9875\u9762")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"image.png",src:a(93259).A,width:"750",height:"208"})),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u590d\u5236\u547d\u4ee4\u63d0\u793a\u9875\u9762\u7684\u547d\u4ee4\uff0c\u5e76\u5c06\u5fc5\u8981\u53c2\u6570\u8fdb\u884c\u66ff\u6362\u540e\uff0c\u5728\u76ee\u6807\u4e3b\u673a\u4e0a\u6267\u884c\u5373\u53ef")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"image.png",src:a(91409).A,width:"750",height:"213"}),"\n",(0,l.yg)("em",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"th"},"\u53c2\u6570\u540d")),(0,l.yg)("th",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"th"},"\u5907\u6ce8")),(0,l.yg)("th",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"th"},"default")),(0,l.yg)("th",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"th"},"\u793a\u4f8b")))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"p"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5e94\u7528\u540d"),(0,l.yg)("td",{parentName:"tr",align:null},"chaos-default-app"),(0,l.yg)("td",{parentName:"tr",align:null},"my-test")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"g"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5e94\u7528\u5206\u7ec4\u540d"),(0,l.yg)("td",{parentName:"tr",align:null},"chaos-default-app-group"),(0,l.yg)("td",{parentName:"tr",align:null},"my-test-group")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"P"),(0,l.yg)("td",{parentName:"tr",align:null},"agent\u7aef\u53e3\u53f7"),(0,l.yg)("td",{parentName:"tr",align:null},"19527"),(0,l.yg)("td",{parentName:"tr",align:null},"19527")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"t"),(0,l.yg)("td",{parentName:"tr",align:null},"chaosblade-box\u7684ip:port"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"172.0.0.1:7001"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("h2",{id:"kubernetes\u73af\u5883\u4e0b\u5b89\u88c5"},"Kubernetes\u73af\u5883\u4e0b\u5b89\u88c5"),(0,l.yg)("p",null,"Kubernetes\u73af\u5883\u4e0b\u53ea\u63d0\u4f9b\u624b\u52a8\u5b89\u88c5\u65b9\u5f0f"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u8fdb\u5165",(0,l.yg)("strong",{parentName:"li"},"\u63a2\u9488\u7ba1\u7406"),"\u9875\u9762\u540e\uff0c\u70b9\u9009\u53f3\u4e0a\u89d2\u7684",(0,l.yg)("strong",{parentName:"li"},"\u624b\u52a8\u5b89\u88c5\u63a2\u9488"),"\u6309\u94ae \u6216 \u9875\u9762\u4e2d\u7684",(0,l.yg)("strong",{parentName:"li"},"\u63a5\u5165\u63a2\u9488"),"\uff0c\u8fdb\u5165\u63a2\u9488\u5b89\u88c5\u6307\u5f15\u9875\u9762")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"image.png",src:a(87081).A,width:"750",height:"186"})),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"\u70b9\u51fb",(0,l.yg)("strong",{parentName:"li"},"\u81ea\u5efaKubernetes"),"\uff0c\u8fdb\u5165\u4e3b\u673a\u624b\u52a8\u5b89\u88c5\u7684\u547d\u4ee4\u63d0\u793a\u9875\u9762")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"image.png",src:a(84308).A,width:"750",height:"192"})),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u6839\u636e\u5b89\u88c5\u63d0\u793a\u9875\u9762\u4e0a\u7684\u6307\u5f15\uff0c\u5148\u4e0b\u8f7dChart\u5305\uff0c\u7136\u540e\u5229\u7528Helm\u8fdb\u884c\u5b89\u88c5")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"image.png",src:a(86963).A,width:"750",height:"322"}),"\n",(0,l.yg)("em",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"th"},"\u53c2\u6570\u540d")),(0,l.yg)("th",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"th"},"\u5907\u6ce8")),(0,l.yg)("th",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"th"},"default")),(0,l.yg)("th",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"th"},"\u793a\u4f8b")))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"transport.endpoint"),(0,l.yg)("td",{parentName:"tr",align:null},"chaosblade-box\u7684ip:port"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"127.0.0.1:7001"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"controller.cluster_id"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5b89\u88c5k8s\u96c6\u7fa4\u7684ID"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"abcdefg123hi")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"controller.cluster_name"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5b89\u88c5k8s\u96c6\u7fa4\u7684name"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"test-cluster")))),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"\u5982\u679c\u9700\u8981\u5bf9\u8be5\u96c6\u7fa4\u8fdb\u884c\u6f14\u7ec3\uff0c\u5219\u9700\u8981\u518d\u5b89\u88c5chaosblade-operator\uff0c\u5177\u4f53\u53ef\u53c2\u8003",(0,l.yg)("a",{parentName:"li",href:"/docs/1.7.0/getting-started/installation-and-deployment/tool-chaosblade-install-and-uninstall/#kubernetes%E7%8E%AF%E5%A2%83%E4%B8%8B%E5%AE%89%E8%A3%85"},"chaosblade-operator\u5b89\u88c5\u6307\u5f15"))))}y.isMDXComponent=!0},92294:(t,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/agent-auto-install-973bc689c375ddeb066f90fcee3105aa.png"},64362:(t,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/agent-install-app-7043d611147eea18311465ed0e73c629.png"},86963:(t,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/agent-install-k8s-511b7eed03bc73ce16cc7f6112fc9894.png"},91409:(t,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/agent-install-linux-3dad4bae6731bf0994d96b7a52c793d6.png"},84308:(t,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/agent-install-list-k8s-b5f0b3bce7e58d42477b501dc4829e17.png"},93259:(t,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/agent-install-list-1281d4a5c2e4e62dc68d4549cda7009a.png"},87081:(t,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/agent-install-manual-3b4f72d2d0fe0d8bc8b5a8034b3455a5.png"},51364:(t,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/agent-manager-eb61c2ad46dfda3ecd34551327f7b3b7.png"}}]);