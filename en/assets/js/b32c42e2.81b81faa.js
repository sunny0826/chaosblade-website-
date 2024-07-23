"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[124],{15680:(e,n,a)=>{a.d(n,{xA:()=>s,yg:()=>m});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),p=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},s=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=p(a),d=r,m=g["".concat(o,".").concat(d)]||g[d]||u[d]||l;return a?t.createElement(m,i(i({ref:n},s),{},{components:a})):t.createElement(m,i({ref:n},s))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c[g]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<l;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},42591:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var t=a(58168),r=(a(96540),a(15680));const l={title:"\u6a21\u578b\u7bc7",sidebar_position:2},i=void 0,c={unversionedId:"community/java-dev-guide/model",id:"version-1.7.2/community/java-dev-guide/model",title:"\u6a21\u578b\u7bc7",description:"\u9075\u5faa\u6b64\u6a21\u578b\uff0c\u53ef\u4ee5\u7b80\u5355\u660e\u4e86\u7684\u6267\u884c\u4e00\u6b21\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u63a7\u5236\u5b9e\u9a8c\u7684\u6700\u5c0f\u7206\u70b8\u534a\u5f84\u3002\u5e76\u4e14\u53ef\u4ee5\u65b9\u4fbf\u5feb\u6377\u7684\u6269\u5c55\u65b0\u7684\u5b9e\u9a8c\u573a\u666f\u6216\u8005\u589e\u5f3a\u73b0\u6709\u573a\u666f\u3002chaosblade \u548c chaosblade-exec-jvm \u5de5\u7a0b\u90fd\u6839\u636e\u6b64\u6a21\u578b\u5b9e\u73b0\u3002",source:"@site/versioned_docs/version-1.7.2/community/java-dev-guide/model.md",sourceDirName:"community/java-dev-guide",slug:"/community/java-dev-guide/model",permalink:"/en/docs/1.7.2/community/java-dev-guide/model",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.2/community/java-dev-guide/model.md",tags:[],version:"1.7.2",sidebarPosition:2,frontMatter:{title:"\u6a21\u578b\u7bc7",sidebar_position:2},sidebar:"myAutogeneratedSidebar",previous:{title:"\u67b6\u6784\u7bc7",permalink:"/en/docs/1.7.2/community/java-dev-guide/architecture"},next:{title:"\u63d2\u4ef6\u7bc7",permalink:"/en/docs/1.7.2/community/java-dev-guide/plugin"}},o={},p=[{value:"\u6a21\u578b\u5b9a\u4e49",id:"\u6a21\u578b\u5b9a\u4e49",level:2},{value:"chaosblade \u6a21\u578b\u5b9e\u73b0",id:"chaosblade-\u6a21\u578b\u5b9e\u73b0",level:2},{value:"chaosblade cli \u8c03\u7528",id:"chaosblade-cli-\u8c03\u7528",level:3},{value:"chaosblade \u6a21\u578b\u7ed3\u6784\u56fe",id:"chaosblade-\u6a21\u578b\u7ed3\u6784\u56fe",level:3},{value:"chaosblade \u6a21\u578b\u5b9a\u4e49",id:"chaosblade-\u6a21\u578b\u5b9a\u4e49",level:3},{value:"chaosblade \u6a21\u578b\u5177\u4f53\u5b9e\u73b0",id:"chaosblade-\u6a21\u578b\u5177\u4f53\u5b9e\u73b0",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],s={toc:p},g="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(g,(0,t.A)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u9075\u5faa\u6b64\u6a21\u578b\uff0c\u53ef\u4ee5\u7b80\u5355\u660e\u4e86\u7684\u6267\u884c\u4e00\u6b21\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u63a7\u5236\u5b9e\u9a8c\u7684\u6700\u5c0f\u7206\u70b8\u534a\u5f84\u3002\u5e76\u4e14\u53ef\u4ee5\u65b9\u4fbf\u5feb\u6377\u7684\u6269\u5c55\u65b0\u7684\u5b9e\u9a8c\u573a\u666f\u6216\u8005\u589e\u5f3a\u73b0\u6709\u573a\u666f\u3002",(0,r.yg)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade"},"chaosblade")," \u548c ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade-exec-jvm"},"chaosblade-exec-jvm")," \u5de5\u7a0b\u90fd\u6839\u636e\u6b64\u6a21\u578b\u5b9e\u73b0\u3002"),(0,r.yg)("h2",{id:"\u6a21\u578b\u5b9a\u4e49"},"\u6a21\u578b\u5b9a\u4e49"),(0,r.yg)("p",null,"\u5728\u7ed9\u51fa\u6a21\u578b\u4e4b\u524d\u5148\u8ba8\u8bba\u5b9e\u65bd\u4e00\u6b21\u6df7\u6c8c\u5b9e\u9a8c\u660e\u786e\u7684\u95ee\u9898\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5bf9\u4ec0\u4e48\u505a\u6df7\u6c8c\u5b9e\u9a8c"),(0,r.yg)("li",{parentName:"ul"},"\u6df7\u6c8c\u5b9e\u9a8c\u5b9e\u65bd\u7684\u8303\u56f4\u662f\u662f\u4ec0\u4e48"),(0,r.yg)("li",{parentName:"ul"},"\u5177\u4f53\u5b9e\u65bd\u4ec0\u4e48\u5b9e\u9a8c "),(0,r.yg)("li",{parentName:"ul"},"\u5b9e\u9a8c\u751f\u6548\u7684\u5339\u914d\u6761\u4ef6\u6709\u54ea\u4e9b")),(0,r.yg)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff1a\u4e00\u53f0 ip \u662f 10.0.0.1 \u673a\u5668\u4e0a\u7684\u5e94\u7528\uff0c\u8c03\u7528 ",(0,r.yg)("a",{parentName:"p",href:"mailto:com.example.HelloService@1.0.0"},"com.example.HelloService@1.0.0")," Dubbo \u670d\u52a1\u5ef6\u8fdf 3s\u3002\u6839\u636e\u4e0a\u8ff0\u7684\u95ee\u9898\u5217\u8868\uff0c\u5148\u660e\u786e\u7684\u662f\u8981\u5bf9 Dubbo \u7ec4\u4ef6\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u5b9e\u65bd\u5b9e\u9a8c\u7684\u8303\u56f4\u662f 10.0.0.1 \u5355\u673a\uff0c\u5bf9\u8c03\u7528 ",(0,r.yg)("a",{parentName:"p",href:"mailto:com.example.HelloService@1.0.0"},"com.example.HelloService@1.0.0")," \u670d\u52a1\u6a21\u62df 3s \u5ef6\u8fdf\u3002 \u660e\u786e\u4ee5\u4e0a\u5185\u5bb9\uff0c\u5c31\u53ef\u4ee5\u7cbe\u51c6\u7684\u5b9e\u65bd\u4e00\u6b21\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u62bd\u8c61\u51fa\u4ee5\u4e0b\u6a21\u578b\uff1a"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3992234/55319674-fd73b100-54a7-11e9-8a8c-15d0fb8f2758.png",alt:"fault-injection model"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Target\uff1a\u5b9e\u9a8c\u9776\u70b9\uff0c\u6307\u5b9e\u9a8c\u53d1\u751f\u7684\u7ec4\u4ef6\uff0c\u4f8b\u5982 \u5bb9\u5668\u3001\u5e94\u7528\u6846\u67b6\uff08Dubbo\u3001Redis\u3001Zookeeper\uff09\u7b49\u3002"),(0,r.yg)("li",{parentName:"ul"},"Scope\uff1a\u5b9e\u9a8c\u5b9e\u65bd\u7684\u8303\u56f4\uff0c\u6307\u5177\u4f53\u89e6\u53d1\u5b9e\u9a8c\u7684\u673a\u5668\u6216\u8005\u96c6\u7fa4\u7b49\u3002"),(0,r.yg)("li",{parentName:"ul"},"Matcher\uff1a\u5b9e\u9a8c\u89c4\u5219\u5339\u914d\u5668\uff0c\u6839\u636e\u6240\u914d\u7f6e\u7684 Target\uff0c\u5b9a\u4e49\u76f8\u5173\u7684\u5b9e\u9a8c\u5339\u914d\u89c4\u5219\uff0c\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a\u3002\u7531\u4e8e\u6bcf\u4e2a Target \u53ef\u80fd\u6709\u5404\u81ea\u7279\u6b8a\u7684\u5339\u914d\u6761\u4ef6\uff0c\u6bd4\u5982 RPC \u9886\u57df\u7684 HSF\u3001Dubbo\uff0c\u53ef\u4ee5\u6839\u636e\u670d\u52a1\u63d0\u4f9b\u8005\u63d0\u4f9b\u7684\u670d\u52a1\u548c\u670d\u52a1\u6d88\u8d39\u8005\u8c03\u7528\u7684\u670d\u52a1\u8fdb\u884c\u5339\u914d\uff0c\u7f13\u5b58\u9886\u57df\u7684 Redis\uff0c\u53ef\u4ee5\u6839\u636e set\u3001get \u64cd\u4f5c\u8fdb\u884c\u5339\u914d\u3002"),(0,r.yg)("li",{parentName:"ul"},"Action\uff1a\u6307\u5b9e\u9a8c\u6a21\u62df\u7684\u5177\u4f53\u573a\u666f\uff0cTarget \u4e0d\u540c\uff0c\u5b9e\u65bd\u7684\u573a\u666f\u4e5f\u4e0d\u4e00\u6837\uff0c\u6bd4\u5982\u78c1\u76d8\uff0c\u53ef\u4ee5\u6f14\u7ec3\u78c1\u76d8\u6ee1\uff0c\u78c1\u76d8 IO \u8bfb\u5199\u9ad8\uff0c\u78c1\u76d8\u786c\u4ef6\u6545\u969c\u7b49\u3002\u5982\u679c\u662f\u5e94\u7528\uff0c\u53ef\u4ee5\u62bd\u8c61\u51fa\u5ef6\u8fdf\u3001\u5f02\u5e38\u3001\u8fd4\u56de\u6307\u5b9a\u503c\uff08\u9519\u8bef\u7801\u3001\u5927\u5bf9\u8c61\u7b49\uff09\u3001\u53c2\u6570\u7be1\u6539\u3001\u91cd\u590d\u8c03\u7528\u7b49\u5b9e\u9a8c\u573a\u666f\u3002")),(0,r.yg)("p",null,"\u56de\u5230\u4e0a\u8ff0\u7684\u4f8b\u5b50\uff0c\u53ef\u4ee5\u53d9\u8ff0\u4e3a\u5bf9 Dubbo \u7ec4\u4ef6\uff08Target\uff09\u8fdb\u884c\u6545\u969c\u6f14\u7ec3\uff0c\u6f14\u7ec3\u7684\u662f 10.0.0.1 \u4e3b\u673a\uff08Scope\uff09\u7684\u5e94\u7528\uff0c\u8c03\u7528 ",(0,r.yg)("a",{parentName:"p",href:"mailto:com.example.HelloService@1.0.0"},"com.example.HelloService@1.0.0")," \uff08Matcher\uff09\u670d\u52a1\u5ef6\u8fdf 3s\uff08Action\uff09\u3002"),(0,r.yg)("p",null,"\u4f2a\u4ee3\u7801\u53ef\u4ee5\u5199\u6210\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'\nToolkit.\n    // \u5b9e\u9a8c\u9776\u70b9\n    dubbo.\n    // \u8303\u56f4\uff0c\u6b64\u5904\u662f\u4e3b\u673a\n    host("1.0.0.1").\n    // \u7ec4\u4ef6\u5339\u914d\u5668\uff0c\u6d88\u8d39\u8005\u8fd8\u662f\u670d\u52a1\u63d0\u4f9b\u8005\n    consumer().\n    // \u7ec4\u4ef6\u5339\u914d\u5668\uff0c\u670d\u52a1\u63a5\u53e3\n    service("com.example.HelloService").\n    // \u7ec4\u4ef6\u5339\u914d\u5668\uff0c1.0.0 \u63a5\u53e3\u7248\u672c\n    version("1.0.0").\n    // \u5b9e\u9a8c\u573a\u666f\uff0c\u5ef6\u8fdf 3s\n    delay(3000);\n')),(0,r.yg)("h2",{id:"chaosblade-\u6a21\u578b\u5b9e\u73b0"},"chaosblade \u6a21\u578b\u5b9e\u73b0"),(0,r.yg)("h3",{id:"chaosblade-cli-\u8c03\u7528"},"chaosblade cli \u8c03\u7528"),(0,r.yg)("p",null,"\u9488\u5bf9\u4e0a\u8ff0\u4f8b\u5b50\uff0cchaosblade \u8c03\u7528\u547d\u4ee4\u662f\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"blade create dubbo delay --time 3000 --consumer --service com.example.HelloService --version 1.0.0\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"dubbo"),": \u6a21\u578b\u4e2d\u7684 target\uff0c\u5bf9 dubbo \u5b9e\u65bd\u5b9e\u9a8c\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"delay"),": \u6a21\u578b\u4e2d\u7684 action\uff0c\u6267\u884c\u5ef6\u8fdf\u6f14\u7ec3\u573a\u666f\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--time"),": \u6a21\u578b\u4e2d action \u53c2\u6570\uff0c\u6307\u5ef6\u8fdf\u65f6\u95f4\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--consumer"),"\u3001",(0,r.yg)("inlineCode",{parentName:"li"},"--service"),"\u3001",(0,r.yg)("inlineCode",{parentName:"li"},"--version"),"\uff1a\u6a21\u578b\u4e2d\u7684 matchers\uff0c\u5b9e\u9a8c\u89c4\u5219\u5339\u914d\u5668\u3002")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6ce8\uff1a")," \u7531\u4e8e chaosblade \u662f\u5728\u5355\u673a\u6267\u884c\u7684\u5de5\u5177\uff0c\u6240\u4ee5\u6df7\u6c8c\u5b9e\u9a8c\u6a21\u578b\u4e2d\u7684 scope \u9ed8\u8ba4\u4e3a\u672c\u673a\uff0c\u4e0d\u518d\u663e\u793a\u58f0\u660e\u3002"),(0,r.yg)("h3",{id:"chaosblade-\u6a21\u578b\u7ed3\u6784\u56fe"},"chaosblade \u6a21\u578b\u7ed3\u6784\u56fe"),(0,r.yg)("p",null,"\u4e3a\u4e86\u6709\u4e2a\u66f4\u52a0\u76f4\u89c2\u7684\u8ba4\u8bc6\uff0c\u6211\u4eec\u5148\u901a\u8fc7\u4e00\u4e0b\u7684\u6a21\u578b\u7ed3\u6784\u56fe\u6765\u5927\u81f4\u770b\u4e00\u4e0b\u6a21\u578b\u4e4b\u95f4\u7684\u5173\u7cfb\u3002\u6838\u5fc3\u63a5\u53e3\u6a21\u578b\u662f\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"ModelSpec"),"\uff0c\u7531\u5b83\u5f15\u7533\u51fa\u6765\u7684\u662f",(0,r.yg)("inlineCode",{parentName:"p"},"FlagSpec"),"\u548c",(0,r.yg)("inlineCode",{parentName:"p"},"ActionSpec"),"\u8fd9\u4e24\u4e2a\u63a5\u53e3\u3002\u5176\u4e2d\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"ModelSpec"),"\u5df2\u6709\u7684\u5177\u4f53\u5b9e\u73b0\u6709\uff1adruid\u3001myql\u3001servlet\u7b49\uff1b\u5219\u662f\u5982myql\u4e0b\u7684dalay\u4e4b\u7c7b\u7684\uff1bFlagSpec\u662f\u5404\u7c7b\u81ea\u5b9a\u4e49\u53c2\u6570\uff0c\u6bd4\u5982--time\u3002\u66f4\u52a0\u8be6\u7ec6\u7684\u6a21\u578b\u5b9a\u4e49\u8bf4\u660e\u8bf7\u89c1\u540e\u7eed\u5c0f\u8282\u3002"),(0,r.yg)("h3",{id:"chaosblade-\u6a21\u578b\u5b9a\u4e49"},"chaosblade \u6a21\u578b\u5b9a\u4e49"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public interface ModelSpec {\n    // \u7ec4\u4ef6\u540d\u79f0\n    String getTarget();\n\n    // \u652f\u6301\u7684\u573a\u666f\u5217\u8868\n    List<ActionSpec> getActionsList<MatcherSpec> getMatchers();\n\n    // ... \u7565\n}\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6ce8\uff1a")," \u4e00\u4e2a\u7ec4\u4ef6\u6df7\u6c8c\u5b9e\u9a8c\u6a21\u578b\u7684\u5b9a\u4e49\uff0c\u5305\u542b\u7ec4\u4ef6\u540d\u79f0\u548c\u6240\u652f\u6301\u7684\u5b9e\u9a8c\u573a\u666f\u5217\u8868\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public interface ActionSpec {\n    // \u6f14\u7ec3\u573a\u666f\u540d\u79f0\n    String getName();\n\n    // \u89c4\u5219\u5339\u914d\u5668\u5217\u8868\n    List<MatcherSpec> getMatchers();\n\n    // Action \u53c2\u6570\u5217\u8868\n    List<FlagSpec> getActionFlags();\n\n    // Action \u6267\u884c\u5668\n    ActionExecutor getActionExecutor();\n\n  // ... \u7565\n}\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6ce8\uff1a")," \u4e00\u4e2a\u5b9e\u9a8c\u573a\u666f action \u7684\u5b9a\u4e49\uff0c\u5305\u542b\u573a\u666f\u540d\u79f0\uff0c\u573a\u666f\u6240\u9700\u53c2\u6570\u548c\u4e00\u4e9b\u5b9e\u9a8c\u89c4\u5219\u5339\u914d\u5668"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public interface FlagSpec {\n        // \u53c2\u6570\u540d\u79f0\n    String getName();\n    \n        //\u53c2\u6570\u63cf\u8ff0\n    String getDesc();\n    \n        //\u662f\u5426\u6709\u503c\n    boolean noArgs();\n    \n        //\u662f\u5426\u5fc5\u586b\n    boolean required();\n}\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6ce8\uff1a")," \u5b9e\u9a8c\u5339\u914d\u5668\u5b9a\u4e49\u3002"),(0,r.yg)("h3",{id:"chaosblade-\u6a21\u578b\u5177\u4f53\u5b9e\u73b0"},"chaosblade \u6a21\u578b\u5177\u4f53\u5b9e\u73b0"),(0,r.yg)("p",null,"\u62ff sevlet \u7ec4\u4ef6\u4e3e\u4f8b\uff0csevlet  \u4f5c\u4e3a\u6df7\u6c8c\u5b9e\u9a8c\u7ec4\u4ef6\uff0c\u76ee\u524d\u5305\u542b\u5ef6\u8fdf\u3001\u81ea\u5b9a\u4e49\u5f02\u5e38\u629b\u51fa\uff0c\u5177\u4f53\u5b9e\u73b0\u4e3a\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'public class ServletModelSpec extends FrameworkModelSpec {\n\n    @Override\n    public String getTarget() {\n        return ServletConstant.TARGET_NAME;\n    }\n\n    @Override\n    public String getShortDesc() {\n        return "java servlet experiment";\n    }\n\n    @Override\n    public String getLongDesc() {\n        return "Java servlet experiment, support path, query string, request method matcher";\n    }\n\n    @Override\n    public String getExample() {\n        return "servlet --requestpath /hello --method post";\n    }\n\n    @Override\n    protected List<MatcherSpec> createNewMatcherSpecs() {\n        ArrayList<MatcherSpec> matcherSpecs = new ArrayList<MatcherSpec>();\n        matcherSpecs.add(new ServletQueryStringMatcherSpec());\n        matcherSpecs.add(new ServletMethodMatcherSpec());\n        matcherSpecs.add(new ServletRequestPathMatcherSpec());\n        return matcherSpecs;\n    }\n}\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"FrameworkModelSpec"),"\u5b9a\u4e49\u4e86 ",(0,r.yg)("inlineCode",{parentName:"p"},"DelayActionSpec"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"ThrowCustomExceptionActionSpec"),"\u4e24\u79cd\u6df7\u6c8c\u5b9e\u9a8c\u573a\u666f\uff0c\u5176\u4e2d ",(0,r.yg)("inlineCode",{parentName:"p"},"DelayActionSpec")," \u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'public class DelayActionSpec extends BaseActionSpec {\n\n    private static TimeFlagSpec timeFlag = new TimeFlagSpec();\n    private static TimeOffsetFlagSpec offsetFlag = new TimeOffsetFlagSpec();\n\n    public DelayActionSpec() {\n        super(new DefaultDelayExecutor(timeFlag, offsetFlag));\n    }\n\n    @Override\n    public String getName() {\n        return "delay";\n    }\n\n    @Override\n    public String[] getAliases() {\n        return new String[0];\n    }\n\n    @Override\n    public String getShortDesc() {\n        return "delay time";\n    }\n\n    @Override\n    public String getLongDesc() {\n        return "delay time...";\n    }\n\n    @Override\n    public List<FlagSpec> getActionFlags() {\n        return Arrays.asList(timeFlag, offsetFlag);\n    }\n\n    @Override\n    public PredicateResult predicate(ActionModel actionModel) {\n        if (StringUtil.isBlank(actionModel.getFlag(timeFlag.getName()))) {\n            return PredicateResult.fail("less time argument");\n        }\n        return PredicateResult.success();\n    }\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"DelayActionSpec")," \u5305\u542b 2 \u4e2a\u573a\u666f\u53c2\u6570\u548c 3\u4e2a\u89c4\u5219\u5339\u914d\u5668\u3002")),(0,r.yg)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.yg)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u4e8b\u4f8b\uff0c\u53ef\u4ee5\u770b\u51fa\u6b64\u6a21\u578b\u7b80\u5355\u3001\u6613\u5b9e\u73b0\uff0c\u5e76\u4e14\u53ef\u4ee5\u8986\u76d6\u76ee\u524d\u5df2\u77e5\u7684\u5b9e\u9a8c\u573a\u666f\u3002\u540e\u7eed\u53ef\u4ee5\u5bf9\u6b64\u6a21\u578b\u8fdb\u884c\u5b8c\u5584\uff0c\u6210\u4e3a\u4e00\u4e2a\u6df7\u6c8c\u5b9e\u9a8c\u6807\u51c6\u3002"))}u.isMDXComponent=!0}}]);