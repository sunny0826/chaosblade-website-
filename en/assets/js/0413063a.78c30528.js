"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[64181],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=n(58168),r=(n(96540),n(15680));const a={title:"ChaosBlade Execution Tools Introduction",sidebar_position:3},i=void 0,c={unversionedId:"about-chaosblade/blade-introduce",id:"about-chaosblade/blade-introduce",title:"ChaosBlade Execution Tools Introduction",description:"This document mainly introduces the architectural features, module layering and execution methods of the ChaosBlade chaos engineering exercise execution tool.",source:"@site/docs/about-chaosblade/blade-introduce.md",sourceDirName:"about-chaosblade",slug:"/about-chaosblade/blade-introduce",permalink:"/en/docs/next/about-chaosblade/blade-introduce",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/docs/about-chaosblade/blade-introduce.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"ChaosBlade Execution Tools Introduction",sidebar_position:3},sidebar:"myAutogeneratedSidebar",previous:{title:"ChaosBlade-Box Platform Introduction",permalink:"/en/docs/next/about-chaosblade/box-introduce"},next:{title:"Getting Started",permalink:"/en/docs/next/getting-started/"}},l={},s=[{value:"Architecture Introduction",id:"architecture-introduction",level:2},{value:"Module Layering",id:"module-layering",level:2},{value:"Drill Execution",id:"drill-execution",level:2}],d={toc:s},u="wrapper";function h(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,o.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This document mainly introduces the architectural features, module layering and execution methods of the ChaosBlade chaos engineering exercise execution tool."),(0,r.yg)("h2",{id:"architecture-introduction"},"Architecture Introduction"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(40814).A,width:"2146",height:"1196"})),(0,r.yg)("p",null,"At the beginning of chaosblade design, we considered the ease of use and the convenience of scene expansion, which makes it convenient for everyone to use and expand more experimental scenes according to their own needs. Following the chaos experimental model, it provides unified operations and concise execution tools, and is divided according to domains. The scene realization is encapsulated into a single project to facilitate scene expansion in the field. "),(0,r.yg)("h2",{id:"module-layering"},"Module Layering"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(38708).A,width:"3727",height:"1647"})),(0,r.yg)("p",null,"Based on the domain implementation, chaosblade is packaged into a separate project. Each project is implemented according to best practices in each field. It can not only meet the usage habits of various fields, but also can establish a connection with the chaosblade cli project through the chaos experimental model, which is convenient to use, and uses chaosblade in a unified call. The yaml file based on the chaos experiment model describes the experimental scenes in various fields and is exposed to the upper chaos experiment platform. The Chaos Experiment Platform automatically perceives the changes in the experiment scene according to the changes in the experiment scene description file, without adding new scenes. Perform platform development again to make Chaos Platform more focused on other parts of Chaos Engineering."),(0,r.yg)("h2",{id:"drill-execution"},"Drill Execution"),(0,r.yg)("p",null,"The drill execution supports the following methods, and the specific user manuals for different execution methods can be referred to ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/next/experiment-types/k8s/container/blade_create_k8s_container-cpu"},"k8s-contianer-cpu-fullload"),"\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Cli command line mode: Execute the drill directly through the cli command, which can directly execute the drill on the host environment and Kubernetes environment."),(0,r.yg)("li",{parentName:"ul"},"Yaml file mode: This mode is only used for the Kubernetes cluster exercise, using the yaml configuration file to create the exercise by defining the chaosblade crd resource"),(0,r.yg)("li",{parentName:"ul"},"Server mode: use ",(0,r.yg)("inlineCode",{parentName:"li"},"./blade server start")," to start the ChaosBlade tool as a server, and then issue commands through http remote calls"),(0,r.yg)("li",{parentName:"ul"},"Platform Mode: Create drills directly through the interactive interface directly on the ChaosBlade-Box visualization platform")))}h.isMDXComponent=!0},38708:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/en-blade-models-b5f2f16ce7b58e264e18fbde04c272e5.png"},40814:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/zh-architecture-ca297fb8477957ae3803583a642296d7.jpg"}}]);