"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[97964],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>x});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(r),y=o,x=u["".concat(s,".").concat(y)]||u[y]||d[y]||a;return r?n.createElement(x,l(l({ref:t},p),{},{components:r})):n.createElement(x,l({ref:t},p))}));function x(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},62910:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(58168),o=(r(96540),r(15680));const a={title:"\u6a21\u62df\u7f51\u7edc\u4e22\u5305\u5b9e\u9a8c"},l=void 0,c={unversionedId:"experiment-types/host/network/blade_create_network_loss",id:"version-1.7.2/experiment-types/host/network/blade_create_network_loss",title:"\u6a21\u62df\u7f51\u7edc\u4e22\u5305\u5b9e\u9a8c",description:"\u4ecb\u7ecd",source:"@site/versioned_docs/version-1.7.2/experiment-types/host/network/blade_create_network_loss.md",sourceDirName:"experiment-types/host/network",slug:"/experiment-types/host/network/blade_create_network_loss",permalink:"/en/docs/1.7.2/experiment-types/host/network/blade_create_network_loss",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.2/experiment-types/host/network/blade_create_network_loss.md",tags:[],version:"1.7.2",frontMatter:{title:"\u6a21\u62df\u7f51\u7edc\u4e22\u5305\u5b9e\u9a8c"},sidebar:"myAutogeneratedSidebar",previous:{title:"\u6a21\u62df\u7f51\u7edc\u5305\u91cd\u590d\u5b9e\u9a8c",permalink:"/en/docs/1.7.2/experiment-types/host/network/blade_create_network_duplicate"},next:{title:"\u6a21\u62df\u7f51\u7edc\u672c\u5730\u7aef\u53e3\u5360\u7528\u5b9e\u9a8c",permalink:"/en/docs/1.7.2/experiment-types/host/network/blade_create_network_occupy"}},s={},i=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],p={toc:i},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,o.yg)("p",null,"\u53ef\u4ee5\u6307\u5b9a\u7f51\u5361\u3001\u672c\u5730\u7aef\u53e3\u3001\u8fdc\u7a0b\u7aef\u53e3\u3001\u76ee\u6807 IP \u4e22\u5305\u3002\u9700\u8981\u7279\u522b\u6ce8\u610f\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u7aef\u53e3\u3001ip \u53c2\u6570\uff0c\u800c\u662f\u6574\u4e2a\u7f51\u5361\u4e22\u5305\uff0c\u5207\u8bb0\u8981\u6dfb\u52a0 --timeout \u53c2\u6570\u6216\u8005 --exclude-port \u53c2\u6570\uff0c\u524d\u8005\u662f\u6307\u5b9a\u8fd0\u884c\u65f6\u95f4\uff0c\u81ea\u52a8\u505c\u6b62\u9500\u6bc1\u5b9e\u9a8c\uff0c\u540e\u8005\u662f\u6307\u5b9a\u6392\u9664\u6389\u7684\u4e22\u5305\u7aef\u53e3\uff0c\u4e24\u8005\u90fd\u662f\u9632\u6b62\u56e0\u4e22\u5305\u7387\u8bbe\u7f6e\u592a\u9ad8\uff0c\u9020\u6210\u673a\u5668\u65e0\u6cd5\u8fde\u63a5\u7684\u60c5\u51b5\uff0c\u5982\u679c\u771f\u5b9e\u53d1\u751f\u6b64\u95ee\u9898\uff0c\u91cd\u542f\u673a\u5668\u5373\u53ef\u6062\u590d\u3002"),(0,o.yg)("p",null,"\u672c\u5730\u7aef\u53e3\u548c\u8fdc\u7a0b\u7aef\u53e3\u4e4b\u95f4\u662f\u6216\u7684\u5173\u7cfb\uff0c\u5373\u8fd9\u4e24\u4e2a\u7aef\u53e3\u90fd\u4f1a\u53d1\u751f\u4e22\u5305\uff0c\u53ea\u8981\u6307\u5b9a\u4e86\u672c\u5730\u7aef\u53e3\u6216\u8005\u8fdc\u7a0b\u7aef\u53e3\uff0c\u65e0\u9700\u6307\u5b9a\u9700\u8981\u6392\u9664\u7684\u7aef\u53e3\u3002\u7aef\u53e3\u4e0e IP \u4e4b\u95f4\u662f\u4e0e\u7684\u5173\u7cfb\uff0c\u5373\u6307\u5b9a\u7684 IP:PORT \u53d1\u751f\u4e22\u5305\u3002"),(0,o.yg)("p",null,"\u7f51\u7edc\u4e22\u5305\u573a\u666f\u4e3b\u8981\u9a8c\u8bc1\u7f51\u7edc\u5f02\u5e38\u7684\u60c5\u51b5\u4e0b\uff0c\u7cfb\u7edf\u7684\u81ea\u6211\u5bb9\u9519\u80fd\u529b\u3002"),(0,o.yg)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-text"},"--destination-ip string   \u76ee\u6807 IP. \u652f\u6301\u901a\u8fc7\u5b50\u7f51\u63a9\u7801\u6765\u6307\u5b9a\u4e00\u4e2a\u7f51\u6bb5\u7684IP\u5730\u5740, \u4f8b\u5982 192.168.1.0/24. \u5219 192.168.1.0~192.168.1.255 \u90fd\u751f\u6548\u3002\u4f60\u4e5f\u53ef\u4ee5\u6307\u5b9a\u56fa\u5b9a\u7684 IP\uff0c\u5982 192.168.1.1 \u6216\u8005 192.168.1.1/32\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u90fd\u53f7\u5206\u9694\u591a\u4e2a\u53c2\u6570\uff0c\u4f8b\u5982 192.168.1.1,192.168.2.1\u3002\n--exclude-port string     \u6392\u9664\u6389\u7684\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4f1a\u5ffd\u7565\u6389\u901a\u4fe1\u7684\u5bf9\u7aef\u7aef\u53e3\uff0c\u76ee\u7684\u662f\u4fdd\u7559\u901a\u4fe1\u53ef\u7528\u3002\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\uff0c\u4f7f\u7528\u9017\u53f7\u5206\u9694\u6216\u8005\u8fde\u63a5\u7b26\u8868\u793a\u8303\u56f4\uff0c\u4f8b\u5982 22,8000 \u6216\u8005 8000-8010\u3002 \u8fd9\u4e2a\u53c2\u6570\u4e0d\u80fd\u4e0e --local-port \u6216\u8005 --remote-port \u53c2\u6570\u4e00\u8d77\u4f7f\u7528\n--exclude-ip string       \u6392\u9664\u53d7\u5f71\u54cd\u7684 IP\uff0c\u652f\u6301\u901a\u8fc7\u5b50\u7f51\u63a9\u7801\u6765\u6307\u5b9a\u4e00\u4e2a\u7f51\u6bb5\u7684IP\u5730\u5740, \u4f8b\u5982 192.168.1.0/24. \u5219 192.168.1.0~192.168.1.255 \u90fd\u751f\u6548\u3002\u4f60\u4e5f\u53ef\u4ee5\u6307\u5b9a\u56fa\u5b9a\u7684 IP\uff0c\u5982 192.168.1.1 \u6216\u8005 192.168.1.1/32\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u90fd\u53f7\u5206\u9694\u591a\u4e2a\u53c2\u6570\uff0c\u4f8b\u5982 192.168.1.1,192.168.2.1\u3002\n--interface string        \u7f51\u5361\u8bbe\u5907\uff0c\u4f8b\u5982 eth0 (\u5fc5\u8981\u53c2\u6570)\n--local-port string       \u672c\u5730\u7aef\u53e3\uff0c\u4e00\u822c\u662f\u672c\u673a\u66b4\u9732\u670d\u52a1\u7684\u7aef\u53e3\u3002\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\uff0c\u4f7f\u7528\u9017\u53f7\u5206\u9694\u6216\u8005\u8fde\u63a5\u7b26\u8868\u793a\u8303\u56f4\uff0c\u4f8b\u5982 80,8000-8080\n--percent string          \u4e22\u5305\u767e\u5206\u6bd4\uff0c\u53d6\u503c\u5728[0, 100]\u7684\u6b63\u6574\u6570 (\u5fc5\u8981\u53c2\u6570)\n--remote-port string      \u8fdc\u7a0b\u7aef\u53e3\uff0c\u4e00\u822c\u662f\u8981\u8bbf\u95ee\u7684\u5916\u90e8\u66b4\u9732\u670d\u52a1\u7684\u7aef\u53e3\u3002\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\uff0c\u4f7f\u7528\u9017\u53f7\u5206\u9694\u6216\u8005\u8fde\u63a5\u7b26\u8868\u793a\u8303\u56f4\uff0c\u4f8b\u5982 80,8000-8080\n--force                   \u5f3a\u5236\u8986\u76d6\u5df2\u6709\u7684 tc \u89c4\u5219\uff0c\u8bf7\u52a1\u5fc5\u5728\u660e\u786e\u4e4b\u524d\u7684\u89c4\u5219\u53ef\u8986\u76d6\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\n--ignore-peer-port        \u9488\u5bf9\u6dfb\u52a0 --exclude-port \u53c2\u6570\uff0c\u62a5 ss \u547d\u4ee4\u627e\u4e0d\u5230\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\uff0c\u5ffd\u7565\u6392\u9664\u7aef\u53e3\n--timeout string          \u8bbe\u5b9a\u8fd0\u884c\u65f6\u957f\uff0c\u5355\u4f4d\u662f\u79d2\uff0c\u901a\u7528\u53c2\u6570\n")),(0,o.yg)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-text"},'# \u8bbf\u95ee\u672c\u673a 8080 \u548c 8081 \u7aef\u53e3\u4e22\u5305\u7387 70%\nblade create network loss --percent 70 --interface eth0 --local-port 8080,8081\n\n{"code":200,"success":true,"result":"b1cea124e2383848"}\n\n# \u53ef\u4ee5\u5728\u53e6\u4e00\u53f0\u76f8\u540c\u7f51\u7edc\u5185\u7684\u673a\u5668\u901a\u8fc7 curl \u547d\u4ee4\u9a8c\u8bc1\uff0c\u5373 curl  xxx.xxx.xxx.xxx:8080\uff0c\u4e0d\u4f7f\u7528 telnet \u7684\u539f\u56e0\u662f telnet \u5185\u90e8\u6709\u91cd\u8bd5\u673a\u5236\uff0c\u5f71\u54cd\u5b9e\u9a8c\u9a8c\u8bc1\u3002\u5982\u679c\u5c06 percent \u7684\u503c\u8bbe\u7f6e\u4e3a 100\uff0c\u53ef\u4ee5\u4f7f\u7528 telnet \u9a8c\u8bc1\u3002\n# \u9500\u6bc1\u5b9e\u9a8c\nblade destroy b1cea124e2383848\n\n# \u672c\u673a\u8bbf\u95ee\u5916\u90e8 14.215.177.39 \u673a\u5668\uff08ping www.baidu.com \u83b7\u53d6\u5230\u7684 IP\uff0980 \u7aef\u53e3\u4e22\u5305\u7387 100%\nblade create network loss --percent 100 --interface eth0 --remote-port 80 --destination-ip 14.215.177.39\n\n# \u53ef\u5728\u672c\u673a\u901a\u8fc7 curl 14.215.177.39 \u547d\u4ee4\u9a8c\u8bc1\uff0c\u4f1a\u53d1\u73b0\u8bbf\u95ee\u4e0d\u901a\u3002\u6267\u884c curl 14.215.177.38 \u662f\u901a\u7684\u3002\n# \u5bf9\u6574\u4e2a\u7f51\u5361 eth0 \u505a 60% \u7684\u4e22\u5305\uff0c\u6392\u9664 22 \u548c 8000\u52308080 \u7aef\u53e3\nblade create network loss --percent 60 --interface eth0 --exclude-port 22,8000-8080\n\n# \u4f1a\u53d1\u73b0 22 \u7aef\u53e3\u548c 8000 \u5230 8080 \u7aef\u53e3\u4e0d\u53d7\u5f71\u54cd\uff0c\u53ef\u5728\u53e6\u4e00\u53f0\u76f8\u540c\u7f51\u7edc\u5185\u7684\u673a\u5668\u901a\u8fc7\u5206\u522b\u6267\u884c\u591a\u6b21 curl xxx.xxx.xxx.xxx:8080 \u548c telnet xxx.xxx.xxx.xxx:8081 \u8fdb\u884c\u6d4b\u8bd5\n\n# \u5b9e\u73b0\u6574\u4e2a\u7f51\u5361\u4e0d\u53ef\u8bbf\u95ee\uff0c\u4e0d\u53ef\u8bbf\u95ee\u65f6\u95f4 20 \u79d2\u3002\u6267\u884c\u5b8c\u6210\u4e0b\u9762\u547d\u4ee4\u540e\uff0c\u5f53\u524d\u7684\u7f51\u7edc\u4f1a\u4e2d\u65ad\u6389\uff0c20 \u79d2\u540e\u6062\u590d\u3002\u5207\u8bb0\uff01\uff01\u52ff\u5fd8 --timeout \u53c2\u6570\nblade create network loss --percent 100 --interface eth0 --timeout 20\n')),(0,o.yg)("h2",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),(0,o.yg)("p",null,"\u5f85\u8865\u5145"),(0,o.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,o.yg)("p",null,'Q: {"code":604,"success":false,"error":"RTNETLINK answers: File exists\\n exit status 2 exit status 1"}\nA\uff1a \u7f51\u7edc\u76f8\u5173\u7684\u573a\u666f\u5b9e\u9a8c\u5df2\u5b58\u5728\uff0c\u9500\u6bc1\u539f\u6709\u7684\u540e\u518d\u6267\u884c\u3002\n\u53ef\u4ee5\u901a\u8fc7 blade status --type create \u547d\u4ee4\u6765\u67e5\u770b\u5df2\u6267\u884c\u7684\u5b9e\u9a8c\uff0c success \u72b6\u6001\u7684\u8868\u793a\u6b63\u5728\u6267\u884c\uff1b\n\u5982\u679c\u67e5\u627e\u4e0d\u5230\u76f8\u5173\u5b9e\u9a8c\uff0c\u6bd4\u5982\u5df2\u7ecf\u5220\u9664\u4e86\u539f\u6709\u7684 chaosblade \u76ee\u5f55\uff0c\u5219\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6062\u590d\u5b9e\u9a8c\uff0c\u6ce8\u610f eth0 \u66ff\u6362\u4e3a\u4f60\u673a\u5668\u7684\u7f51\u5361\u8bbe\u5907\uff1a'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-text"},"tc filter del dev eth0 parent 1: prio 4\ntc qdisc del dev eth0 root\n")),(0,o.yg)("p",null,"\u4e5f\u53ef\u4ee5\u6dfb\u52a0 ",(0,o.yg)("inlineCode",{parentName:"p"},"--force")," \u547d\u4ee4\u5f3a\u5236\u8986\u76d6\u539f\u6709\u89c4\u5219\u3002"))}d.isMDXComponent=!0}}]);