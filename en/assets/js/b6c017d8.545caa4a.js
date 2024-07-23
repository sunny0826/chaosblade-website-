"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[59722],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),g=a,u=s["".concat(p,".").concat(g)]||s[g]||m[g]||i;return n?r.createElement(u,l(l({ref:t},d),{},{components:n})):r.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},56022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const i={title:"Simulating the exit of script function execution"},l=void 0,o={unversionedId:"experiment-types/host/script/blade_create_script_exit",id:"version-1.7.1/experiment-types/host/script/blade_create_script_exit",title:"Simulating the exit of script function execution",description:"Introduction",source:"@site/versioned_docs/version-1.7.1/experiment-types/host/script/blade_create_script_exit.md",sourceDirName:"experiment-types/host/script",slug:"/experiment-types/host/script/blade_create_script_exit",permalink:"/en/docs/1.7.1/experiment-types/host/script/blade_create_script_exit",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.1/experiment-types/host/script/blade_create_script_exit.md",tags:[],version:"1.7.1",frontMatter:{title:"Simulating the exit of script function execution"},sidebar:"myAutogeneratedSidebar",previous:{title:"Simulating the delay of script function execution",permalink:"/en/docs/1.7.1/experiment-types/host/script/blade_create_script_delay"},next:{title:"Time",permalink:"/en/docs/1.7.1/experiment-types/host/time/"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"CLI Command",id:"cli-command",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Case",id:"case",level:2},{value:"Principle",id:"principle",level:2},{value:"Q&amp;A",id:"qa",level:2}],d={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"An experiment that simulates the exit of script function execution will be performed after specifying the script and its function."),(0,a.yg)("h2",{id:"cli-command"},"CLI Command"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"blade create script exit -h"))),(0,a.yg)("h2",{id:"parameter"},"Parameter"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Introduction"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Required"),(0,a.yg)("th",{parentName:"tr",align:null},"Example Value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"exit-code")),(0,a.yg)("td",{parentName:"tr",align:null},"Exit code(Default value: 1)"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"N")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"1"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"exit-message")),(0,a.yg)("td",{parentName:"tr",align:null},"Exit message"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"N")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"this-is-error-message"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"file")),(0,a.yg)("td",{parentName:"tr",align:null},"Path to the script"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"Y")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"test.sh"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"function-name")),(0,a.yg)("td",{parentName:"tr",align:null},"Function name in the script"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"Y")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"start0"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"timeout")),(0,a.yg)("td",{parentName:"tr",align:null},"Running time(s)"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"N")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"20"))))),(0,a.yg)("h2",{id:"case"},"Case"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},'# blade create script exit --exit-code 1 --exit-message this-is-error-message --file test.sh --function-name start0\n{"code":200,"success":true,"result":"d8a016b96380d7f3"}\n\n# The echo and exit commands will be added to the script:\nstart0() {\n    echo this-is-error-message;exit 1\n    ...\n}\n')),(0,a.yg)("h2",{id:"principle"},"Principle"),(0,a.yg)("p",null,"After backing up the original script, the ",(0,a.yg)("inlineCode",{parentName:"p"},"echo")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"exit")," commands will be added to the function by the function name. Finally, the original script will be restored after the experiment is destroyed."),(0,a.yg)("h2",{id:"qa"},"Q&A"),(0,a.yg)("p",null,'Q: {"code":602,"success":false,"error":"get too many lines by the install function name"}'),(0,a.yg)("p",null,"A\uff1aExecution failed because multiple functions were found."))}m.isMDXComponent=!0}}]);