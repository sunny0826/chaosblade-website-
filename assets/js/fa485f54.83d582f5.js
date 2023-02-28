"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[1835],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(d,".").concat(m)]||u[m]||s[m]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94622:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var a=n(87462),r=(n(67294),n(3905));const o={title:"\u534f\u8bae\u7bc7",sidebar_position:5},i=void 0,l={unversionedId:"community/java-dev-guide/protocol",id:"version-1.7.1/community/java-dev-guide/protocol",title:"\u534f\u8bae\u7bc7",description:"\u672c\u7bc7\u4ecb\u7ecd chaosblade \u4e0e chaosblade-exec-jvm \u4e4b\u95f4\u901a\u4fe1\u63a5\u53e3 API\uff0c\u6b64 API \u9075\u5faa\u300a\u6df7\u6c8c\u5b9e\u9a8c\u6a21\u578b\u300b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7.1/community/java-dev-guide/protocol.md",sourceDirName:"community/java-dev-guide",slug:"/community/java-dev-guide/protocol",permalink:"/docs/community/java-dev-guide/protocol",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.1/community/java-dev-guide/protocol.md",tags:[],version:"1.7.1",sidebarPosition:5,frontMatter:{title:"\u534f\u8bae\u7bc7",sidebar_position:5},sidebar:"myAutogeneratedSidebar",previous:{title:"\u5b57\u8282\u7801\u7bc7",permalink:"/docs/community/java-dev-guide/bytecode"},next:{title:"\u5f00\u53d1\u5b9e\u6218",permalink:"/docs/community/java-dev-guide/practise"}},d={},c=[{value:"create \u547d\u4ee4",id:"create-\u547d\u4ee4",level:2},{value:"destroy \u547d\u4ee4",id:"destroy-\u547d\u4ee4",level:2},{value:"\u5df2\u7ecf\u5728\u4f7f\u7528 <code>jvm-sandbox</code>\uff0c\u60f3\u5355\u72ec\u4f7f\u7528 <code>chaosblade-exec-jvm</code> \u63d0\u4f9b\u7684\u6545\u969c\u6ce8\u5165\u7684\u80fd\u529b",id:"\u5df2\u7ecf\u5728\u4f7f\u7528-jvm-sandbox\u60f3\u5355\u72ec\u4f7f\u7528-chaosblade-exec-jvm-\u63d0\u4f9b\u7684\u6545\u969c\u6ce8\u5165\u7684\u80fd\u529b",level:2},{value:"\u60f3\u57fa\u4e8e <code>chaosblade</code> \u6269\u5c55\u5176\u4ed6\u8bed\u8a00\u5e94\u7528\u6545\u969c\u6ce8\u5165\u7684\u80fd\u529b",id:"\u60f3\u57fa\u4e8e-chaosblade-\u6269\u5c55\u5176\u4ed6\u8bed\u8a00\u5e94\u7528\u6545\u969c\u6ce8\u5165\u7684\u80fd\u529b",level:2}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u7bc7\u4ecb\u7ecd ",(0,r.kt)("inlineCode",{parentName:"p"},"chaosblade")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"chaosblade-exec-jvm")," \u4e4b\u95f4\u901a\u4fe1\u63a5\u53e3 API\uff0c\u6b64 API \u9075\u5faa\u300a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade/wiki/%E6%B7%B7%E6%B2%8C%E5%AE%9E%E9%AA%8C%E6%A8%A1%E5%9E%8B"},"\u6df7\u6c8c\u5b9e\u9a8c\u6a21\u578b"),"\u300b\u3002"),(0,r.kt)("h1",{id:"\u63a5\u53e3\u5b9a\u4e49"},"\u63a5\u53e3\u5b9a\u4e49"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"chaosblade-exec-jvm")," \u5b9e\u73b0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"destroy")," \u4e24\u4e2a\u63a5\u53e3\uff0c\u5206\u522b\u662f\u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c\u4ee5\u53ca\u9500\u6bc1\u505c\u6b62\u5b9e\u9a8c\uff0c\u4ee5\u4e0b\u6211\u4eec\u62ff dubbo \u5e94\u7528\u4e3e\u4f8b\uff0c\u5b9e\u65bd\u670d\u52a1\u8c03\u7528\u65b9\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"com.example.HelloService@1.0.0")," \u670d\u52a1\u5ef6\u8fdf 3s \u5b9e\u9a8c\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"chaosblade-exec-jvm")," \u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"jvm-sandbox")," \u5185\u7f6e\u7684 jetty server \u5b9e\u73b0\u8bf7\u6c42\u5904\u7406\u3002"),(0,r.kt)("h2",{id:"create-\u547d\u4ee4"},"create \u547d\u4ee4"),(0,r.kt)("p",null,"\u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c\uff0cchaosblade \u5de5\u5177\u6267\u884c\u547d\u4ee4\u662f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"blade create dubbo delay --time 3000 --service com.example.HelloService --version 1.0.0 --consumer\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"url \u8bf7\u6c42\uff1a")," ",(0,r.kt)("inlineCode",{parentName:"p"},"chaosblade/create?suid=su378dsn137s53bs8adcn&target=dubbo&action=delay&time=3000&service=com.example.HelloService&version=1.0.0&consumer=true")),(0,r.kt)("p",null,"\u5176\u4e2d\u8bf7\u6c42\u53c2\u6570\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "suid": "su378dsn137s53bs8adcn",\n  "target": "dubbo",\n  "action": "delay",\n  "time": "3000",\n  "service": "com.example.HelloService",\n  "version": "1.0.0",\n  "consumer": "true"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"create"),": \u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c\u8bf7\u6c42"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"suid"),": \u8bf7\u6c42\u53c2\u6570\uff0c\u5b9e\u9a8c\u7684 ID\uff0c\u540e\u7eed\u505c\u6b62\u5b9e\u9a8c\u4f1a\u7528\u5230\u6b64 ID"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"target"),": \u8bf7\u6c42\u53c2\u6570\uff0c\u5b9e\u9a8c\u7684\u7ec4\u4ef6\u76ee\u6807\uff0cdubbo"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"action"),": \u8bf7\u6c42\u53c2\u6570\uff0c\u6267\u884c\u5b9e\u9a8c\u7684\u573a\u666f\uff0cdelay"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"time"),": \u8bf7\u6c42\u53c2\u6570\uff0caction \u6267\u884c\u5668\u6240\u9700\u53c2\u6570\uff0c\u6b64\u5904\u662f\u5ef6\u8fdf\u7684\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"service"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"version"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"consumer"),": \u8bf7\u6c42\u53c2\u6570\uff0c\u5b9e\u9a8c\u5339\u914d\u5668\uff0c\u5206\u522b\u5339\u914d\u670d\u52a1\u540d\uff0c\u670d\u52a1\u7248\u672c\uff0c\u670d\u52a1\u8c03\u7528\u8005")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"suid"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"target"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"action")," \u662f create \u8bf7\u6c42\u7684\u5fc5\u8981\u53c2\u6570\uff0c ",(0,r.kt)("inlineCode",{parentName:"li"},"time"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"service"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"version"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"consumer")," \u53c2\u6570\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"li"},"target")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"action")," \u7684\u4e0d\u540c\u800c\u4e0d\u540c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u63a5\u6536\u5230\u8bf7\u6c42\uff0c\u4f1a\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"li"},"target")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"action")," \u8c03\u7528\u53c2\u6570\u6821\u9a8c\u5668\uff0c\u9a8c\u8bc1\u53c2\u6570\u503c\u662f\u5426\u5408\u6cd5\uff0c\u5982\u679c\u5408\u6cd5\uff0c\u5219\u8bb0\u5f55\u6b64\u6b21\u8bd5\u9a8c\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u5e94\u7ec4\u4ef6\u57cb\u70b9\u89e6\u53d1\u65f6\uff0c\u5982\u679c\u67e5\u8be2\u5230\u6709\u6b64\u7ec4\u4ef6\u7684\u5b9e\u9a8c\uff0c\u5219\u83b7\u53d6\u5339\u914d\u5668\u6240\u9700\u53c2\u6570\uff0c\u548c\u4e0b\u53d1\u7684\u5b9e\u9a8c\u89c4\u5219\u8fdb\u884c\u5339\u914d\uff0c\u5339\u914d\u6210\u529f\uff0c\u5219\u8c03\u7528\u573a\u666f\u6267\u884c\u5668\u89e6\u53d1\u5b9e\u9a8c\u3002")),(0,r.kt)("h2",{id:"destroy-\u547d\u4ee4"},"destroy \u547d\u4ee4"),(0,r.kt)("p",null,"\u9500\u6bc1\u6df7\u6c8c\u5b9e\u9a8c\uff0cchaosblade \u5de5\u5177\u6267\u884c\u547d\u4ee4\u662f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"blade destroy su378dsn137s53bs8adcn\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"url \u8bf7\u6c42\uff1a")," ",(0,r.kt)("inlineCode",{parentName:"p"},"chaosblade/destroy?suid=su378dsn137s53bs8adcn")),(0,r.kt)("p",null,"\u5176\u4e2d\u8bf7\u6c42\u53c2\u6570\u662f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "suid": "su378dsn137s53bs8adcn"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"suid"),": \u8bf7\u6c42\u53c2\u6570\uff0c\u4e4b\u524d\u521b\u5efa\u5b9e\u9a8c\u8fd4\u56de\u7684 UID")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\uff1a")," \u63a5\u6536\u5230 destroy \u8bf7\u6c42\u540e\uff0c\u4f1a\u5220\u9664\u4e0e UID \u76f8\u5bf9\u5e94\u7684\u6df7\u6c8c\u5b9e\u9a8c\u89c4\u5219\u3002"),(0,r.kt)("h1",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,r.kt)("h2",{id:"\u5df2\u7ecf\u5728\u4f7f\u7528-jvm-sandbox\u60f3\u5355\u72ec\u4f7f\u7528-chaosblade-exec-jvm-\u63d0\u4f9b\u7684\u6545\u969c\u6ce8\u5165\u7684\u80fd\u529b"},"\u5df2\u7ecf\u5728\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h2"},"jvm-sandbox"),"\uff0c\u60f3\u5355\u72ec\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h2"},"chaosblade-exec-jvm")," \u63d0\u4f9b\u7684\u6545\u969c\u6ce8\u5165\u7684\u80fd\u529b"),(0,r.kt)("p",null,"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"chaosblade-exec-jvm")," \u7f16\u8bd1\u597d\u7684 jar \u5305\u653e\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"jvm-sandbox")," user_module \u76ee\u5f55\u4e0b\uff0c\u6267\u884c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# \u5237\u65b0 sandbox module\nsh sandbox.sh -p PID -F\n\n# \u6fc0\u6d3b chaosblade java agent\nsh sandbox.sh -p PID -a chaosblade\n")),(0,r.kt)("p",null,"\u7136\u540e\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"destroy")," url \u8bf7\u6c42\u6765\u521b\u5efa\u3001\u9500\u6bc1\u5b9e\u9a8c\u3002\u5982\u679c\u60f3\u4e86\u89e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"chaosblade java agent")," \u652f\u6301\u54ea\u4e9b\u5b9e\u9a8c\u573a\u666f\uff0c\u53ef\u4ee5\u67e5\u770b\u7f16\u8bd1\u540e ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins/jvm.spec.yaml")," \u6587\u4ef6\u3002"),(0,r.kt)("h2",{id:"\u60f3\u57fa\u4e8e-chaosblade-\u6269\u5c55\u5176\u4ed6\u8bed\u8a00\u5e94\u7528\u6545\u969c\u6ce8\u5165\u7684\u80fd\u529b"},"\u60f3\u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"h2"},"chaosblade")," \u6269\u5c55\u5176\u4ed6\u8bed\u8a00\u5e94\u7528\u6545\u969c\u6ce8\u5165\u7684\u80fd\u529b"),(0,r.kt)("p",null,"\u8981\u9075\u5faa\u300a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade/wiki/%E6%B7%B7%E6%B2%8C%E5%AE%9E%E9%AA%8C%E6%A8%A1%E5%9E%8B"},"\u6df7\u6c8c\u5b9e\u9a8c\u6a21\u578b"),"\u300b \u5b9e\u73b0\uff0c\u5e76\u4e14\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"destory")," \u4e24\u4e2a\u5b9e\u9a8c\u64cd\u4f5c\u3002"))}s.isMDXComponent=!0}}]);