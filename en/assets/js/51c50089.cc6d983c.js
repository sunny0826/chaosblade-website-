"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[81012],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,u=d["".concat(m,".").concat(c)]||d[c]||y[c]||i;return n?a.createElement(u,l(l({ref:t},s),{},{components:n})):a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},67171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const i={id:"blade create time travel"},l="Simulating the system time offset",o={unversionedId:"experiment-types/host/blade create time travel",id:"version-1.7.0/experiment-types/host/blade create time travel",title:"Simulating the system time offset",description:"Introduction",source:"@site/versioned_docs/version-1.7.0/experiment-types/host/blade_create_time_travel.md",sourceDirName:"experiment-types/host",slug:"/experiment-types/host/blade create time travel",permalink:"/en/docs/1.7.0/experiment-types/host/blade create time travel",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.0/experiment-types/host/blade_create_time_travel.md",tags:[],version:"1.7.0",frontMatter:{id:"blade create time travel"},sidebar:"version-1.7.0/docs",previous:{title:"Simulating the exit of script function execution",permalink:"/en/docs/1.7.0/experiment-types/host/blade create script exit"},next:{title:"\u6a21\u62dfKubernetes\u76f8\u5173\u5b9e\u9a8c\u573a\u666f",permalink:"/en/docs/1.7.0/experiment-types/k8s/blade create k8s"}},m={},p=[{value:"Introduction",id:"introduction",level:2},{value:"CLI Command",id:"cli-command",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Case",id:"case",level:2},{value:"Principle",id:"principle",level:2},{value:"Q&amp;A",id:"qa",level:2}],s={toc:p},d="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"simulating-the-system-time-offset"},"Simulating the system time offset"),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"An experiment that simulates the system time offset will be performed after specifying the offset."),(0,r.yg)("h2",{id:"cli-command"},"CLI Command"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"blade create time travel -h"))),(0,r.yg)("h2",{id:"parameter"},"Parameter"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Introduction"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Example Value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"offset")),(0,r.yg)("td",{parentName:"tr",align:null},"The length of time offset."),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"N")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"-2h3m50s"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"disableNtp")),(0,r.yg)("td",{parentName:"tr",align:null},"Disable synchronizing time automatically. Default value is ",(0,r.yg)("inlineCode",{parentName:"td"},"ture"),"."),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"N")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"timeout")),(0,r.yg)("td",{parentName:"tr",align:null},"Running time(s)."),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"N")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"20"))))),(0,r.yg)("h2",{id:"case"},"Case"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},'# Move the system time forward by 5 minutes and 30 seconds.\nblade create time travel --offset 5m30s\n{"code":200,"success":true,"result":"d8a016b96380d7f3"}\n')),(0,r.yg)("h2",{id:"principle"},"Principle"),(0,r.yg)("p",null,"Create the time offset\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Set the target time by the ",(0,r.yg)("inlineCode",{parentName:"li"},"date -s")," command\uff1b"),(0,r.yg)("li",{parentName:"ul"},"Disable synchronizing time automatically by the ",(0,r.yg)("inlineCode",{parentName:"li"},"timedatectl set-ntp false")," command.")),(0,r.yg)("p",null,"Destroy the time offset\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Enable synchronizing time automatically by the ",(0,r.yg)("inlineCode",{parentName:"li"},"timedatectl set-ntp true")," command"),(0,r.yg)("li",{parentName:"ul"},"Copy hardware time to system time by the ",(0,r.yg)("inlineCode",{parentName:"li"},"hwclock --hctosys")," command.")),(0,r.yg)("h2",{id:"qa"},"Q&A"),(0,r.yg)("p",null,'Q: {"code":47000,"success":false,"error":"invalid ',(0,r.yg)("inlineCode",{parentName:"p"},"offset")," parameter value: ",(0,r.yg)("inlineCode",{parentName:"p"},"100"),'. time: missing unit in duration 100"}'),(0,r.yg)("p",null,"A\uff1aExecution failed because the ",(0,r.yg)("inlineCode",{parentName:"p"},"offset")," parameter without unit was invalid."))}y.isMDXComponent=!0}}]);