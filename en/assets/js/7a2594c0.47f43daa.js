"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[20570],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),m=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=m(r),y=a,g=s["".concat(d,".").concat(y)]||s[y]||c[y]||i;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=y;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},76637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=r(58168),a=(r(96540),r(15680));const i={title:"Simulating setting the memory limit of redis cache"},l=void 0,o={unversionedId:"experiment-types/host/redis/blade_create_redis_cache_limit",id:"experiment-types/host/redis/blade_create_redis_cache_limit",title:"Simulating setting the memory limit of redis cache",description:"Introduction",source:"@site/docs/experiment-types/host/redis/blade_create_redis_cache_limit.md",sourceDirName:"experiment-types/host/redis",slug:"/experiment-types/host/redis/blade_create_redis_cache_limit",permalink:"/en/docs/next/experiment-types/host/redis/blade_create_redis_cache_limit",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/docs/experiment-types/host/redis/blade_create_redis_cache_limit.md",tags:[],version:"current",frontMatter:{title:"Simulating setting the memory limit of redis cache"},sidebar:"myAutogeneratedSidebar",previous:{title:"Simulating expiring the key in redis",permalink:"/en/docs/next/experiment-types/host/redis/blade_create_redis_cache_expire"},next:{title:"Kubernetes",permalink:"/en/docs/next/experiment-types/k8s/"}},d={},m=[{value:"Introduction",id:"introduction",level:2},{value:"CLI Command",id:"cli-command",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Case",id:"case",level:2},{value:"Principle",id:"principle",level:2},{value:"Q&amp;A",id:"qa",level:2}],p={toc:m},s="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(s,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"An experiment that simulates setting the memory limit of redis cache by modifying the ",(0,a.yg)("inlineCode",{parentName:"p"},"maxmemory")," of redis."),(0,a.yg)("p",null,"Redis triggers the cache elimination policy to release the memory after the memory exceeds the specified ",(0,a.yg)("inlineCode",{parentName:"p"},"maxmemory"),"."),(0,a.yg)("h2",{id:"cli-command"},"CLI Command"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"blade create redis cache-limit -h"))),(0,a.yg)("h2",{id:"parameter"},"Parameter"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Introduction"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Required"),(0,a.yg)("th",{parentName:"tr",align:null},"Example Value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"addr")),(0,a.yg)("td",{parentName:"tr",align:null},"The address of redis server, the format is ",(0,a.yg)("inlineCode",{parentName:"td"},"ip:port"),"."),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"Y")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"192.168.56.101:6379"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"password")),(0,a.yg)("td",{parentName:"tr",align:null},"The password of redis server."),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"Y")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"123456"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"size")),(0,a.yg)("td",{parentName:"tr",align:null},"The size of maxmemory, default does not limit the memory size.The default value is ",(0,a.yg)("inlineCode",{parentName:"td"},"0"),"."),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"N")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"256M"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"percent")),(0,a.yg)("td",{parentName:"tr",align:null},"The percentage of maxmemory."),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"N")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"50"))))),(0,a.yg)("h2",{id:"case"},"Case"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},'# set the maxmemory to 256M\n# blade create redis cache-limit --addr 192.168.56.101:6379 --password 123456  --size 256M\n{"code":200,"success":true,"result":"b6a0f477b7fb1f4c"}\n\n# set the maxmemory to the 50% of the original value.\n# blade create redis cache-limit --addr 192.168.56.101:6379 --password 123456  --percent 50\n{"code":200,"success":true,"result":"b6a0f477b7fb1f4c"}\n')),(0,a.yg)("h2",{id:"principle"},"Principle"),(0,a.yg)("p",null,"Modify the ",(0,a.yg)("inlineCode",{parentName:"p"},"maxmemory")," by using Golang interface in go-redis package."),(0,a.yg)("h2",{id:"qa"},"Q&A"),(0,a.yg)("p",null,'Q: {"code":44000,"success":false,"error":"',(0,a.yg)("inlineCode",{parentName:"p"},"redis set origin max memory error: OOM command not allowed when used memory \\u003e 'maxmemory'."),': action not supported"}'),(0,a.yg)("p",null,"A\uff1aThe ",(0,a.yg)("inlineCode",{parentName:"p"},"size")," parameter was illegal, and it needed to be a parameter similar to ",(0,a.yg)("inlineCode",{parentName:"p"},"256M"),"."))}c.isMDXComponent=!0}}]);