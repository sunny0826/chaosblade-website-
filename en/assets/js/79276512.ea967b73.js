"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[21296],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},74882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(58168),r=(n(96540),n(15680));const a={title:"ChaosBlade-Box Platform Introduction",sidebar_position:2},i=void 0,l={unversionedId:"about-chaosblade/box-introduce",id:"version-1.7.4/about-chaosblade/box-introduce",title:"ChaosBlade-Box Platform Introduction",description:"This document mainly introduces the modules, functions and exercise arrangement of ChaosBlade-Box chaos engineering platform.",source:"@site/versioned_docs/version-1.7.4/about-chaosblade/box-introduce.md",sourceDirName:"about-chaosblade",slug:"/about-chaosblade/box-introduce",permalink:"/en/docs/about-chaosblade/box-introduce",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.4/about-chaosblade/box-introduce.md",tags:[],version:"1.7.4",sidebarPosition:2,frontMatter:{title:"ChaosBlade-Box Platform Introduction",sidebar_position:2},sidebar:"myAutogeneratedSidebar",previous:{title:"About ChaosBlade",permalink:"/en/docs/"},next:{title:"ChaosBlade Execution Tools Introduction",permalink:"/en/docs/about-chaosblade/blade-introduce"}},s={},c=[{value:"Architecture Introduction",id:"architecture-introduction",level:2},{value:"Overview",id:"overview",level:2},{value:"Application Management",id:"application-management",level:2},{value:"Drill Experience And Experience Management",id:"drill-experience-and-experience-management",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Drill Result And Safety Control",id:"drill-result-and-safety-control",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,o.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This document mainly introduces the modules, functions and exercise arrangement of ChaosBlade-Box chaos engineering platform."),(0,r.yg)("h2",{id:"architecture-introduction"},"Architecture Introduction"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(4067).A,width:"2178",height:"1184"})),(0,r.yg)("p",null,"Through the console page, the automated deployment of managed tools such as chaosblade and litmuschaos can be realized. The experimental scene is unified according to the chaos experimental model established by the community. The target resources are divided according to the host, Kubernetes, and application, and controlled through the target manager. , which can realize the target resource selection of white screen. The platform executes the experimental scenarios of different tools by invoking the chaotic experiment execution. With access to prometheus monitoring, you can observe the experimental metric indicators, and provide rich experimental reports later. The deployment of Chaosblade-box is also very simple, you can check the details ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade-box/releases"},"chaosblade-box"),"."),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"ChaosBlade-Box chaos engineering platform supports switching between Chinese and English, provides global namespace switching, and helps enterprises to use one platform for multiple purposes, such as test environment, grayscale environment, online environment, etc."),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(82752).A,width:"4020",height:"1720"})),(0,r.yg)("h2",{id:"application-management"},"Application Management"),(0,r.yg)("p",null,"Displays all applications on the host or Kubernetes cluster where the Agent (probe) is deployed. The Agent (probe) supports Kubernetes and host environment installation. When installed in a Kubernetes cluster, it will actively collect pod-related data in the cluster, and label it according to the label. to determine its application name and application group, so as to intuitively and conveniently perform a drill on an application"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(23115).A,width:"3227",height:"1254"})),(0,r.yg)("h2",{id:"drill-experience-and-experience-management"},"Drill Experience And Experience Management"),(0,r.yg)("p",null,"The walkthrough scenario will show all the scenarios supported by the Chaos Engineering Execution Tool, and display them differently according to different environments. The platform supports precipitation of the choreographed drills into experience, and provides a drill experience database for management, which is convenient for other users to conduct drills directly."),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(97108).A,width:"3204",height:"1347"})),(0,r.yg)("h2",{id:"workflow"},"Workflow"),(0,r.yg)("p",null,'The platform supports two types of process orchestration: "sequential execution" and "staged execution", where "sequential execution" means that multiple failures take effect in sequence, and "staged execution" means that multiple failures take effect at the same time and then recover at the same time.'),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(62122).A,width:"3658",height:"1300"})),(0,r.yg)("h2",{id:"drill-result-and-safety-control"},"Drill Result And Safety Control"),(0,r.yg)("p",null,"On the exercise result page, you can view the overall progress of the exercise, and query the results, error information, execution logs, and parameter configuration of a single machine. In order to ensure that the exercise can be resumed, two methods of automatic stop and manual trigger are provided to terminate the drill. Even if the recovery command cannot be issued, it can be recovered over time to avoid unexpected failures outside the drill caused by system problems."),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(67746).A,width:"3164",height:"1362"})))}u.isMDXComponent=!0},23115:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/en-box-application-c60e22a835b0c9ad6f433e7d4cd506da.png"},97108:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/en-box-experiment-807891edfd5204adcad40594ed2232f5.png"},82752:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/en-box-overview-ead83b37260b93a59db1fd7a9f6651fd.png"},67746:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/en-box-result-ba593194929da5eda3919434e7e4253c.png"},62122:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/en-box-workflow-3d78be3ce9363c16eb2eb2fcc9f9777d.png"},4067:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/en-chaosblade-box-a922c11167e8aa3430835458a0dc5d85.jpg"}}]);