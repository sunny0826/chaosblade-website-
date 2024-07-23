"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[63742],{15680:(t,e,a)=>{a.d(e,{xA:()=>p,yg:()=>c});var n=a(96540);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var g=n.createContext({}),s=function(t){var e=n.useContext(g),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(g.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,g=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=s(a),y=l,c=d["".concat(g,".").concat(y)]||d[y]||m[y]||r;return a?n.createElement(c,o(o({ref:e},p),{},{components:a})):n.createElement(c,o({ref:e},p))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=y;var i={};for(var g in e)hasOwnProperty.call(e,g)&&(i[g]=e[g]);i.originalType=t,i[d]="string"==typeof t?t:l,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},79885:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>g,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(58168),l=(a(96540),a(15680));const r={title:"Agent Install",sidebar_position:3},o=void 0,i={unversionedId:"getting-started/installation-and-deployment/agent-install",id:"getting-started/installation-and-deployment/agent-install",title:"Agent Install",description:"The probe functions as a platform connection, command delivery channel, and data collection. Therefore, if you need to experiment the target cluster or host, install the probe on the target cluster or host so that the expriment can be converted into commands and delivered to the target host.",source:"@site/docs/getting-started/installation-and-deployment/agent-install.md",sourceDirName:"getting-started/installation-and-deployment",slug:"/getting-started/installation-and-deployment/agent-install",permalink:"/en/docs/next/getting-started/installation-and-deployment/agent-install",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/docs/getting-started/installation-and-deployment/agent-install.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Agent Install",sidebar_position:3},sidebar:"myAutogeneratedSidebar",previous:{title:"Tool ChaosBlade Install And Uninstall",permalink:"/en/docs/next/getting-started/installation-and-deployment/tool-chaosblade-install-and-uninstall"},next:{title:"Community",permalink:"/en/docs/next/community/"}},g={},s=[{value:"Install on a host",id:"install-on-a-host",level:2},{value:"Automatic probe installation",id:"automatic-probe-installation",level:3},{value:"Manually install the probe",id:"manually-install-the-probe",level:3},{value:"Kubernetes environment installation",id:"kubernetes-environment-installation",level:2}],p={toc:s},d="wrapper";function m(t){let{components:e,...r}=t;return(0,l.yg)(d,(0,n.A)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"The probe functions as a platform connection, command delivery channel, and data collection. Therefore, if you need to experiment the target cluster or host, install the probe on the target cluster or host so that the expriment can be converted into commands and delivered to the target host."),(0,l.yg)("p",null,"At ",(0,l.yg)("a",{parentName:"p",href:"/en/docs/next/getting-started/installation-and-deployment/platform-box-install-and-uninstall"},"install Box platform")," then \uff0center Box main page\uff0cIn the left navigation bar, select ",(0,l.yg)("strong",{parentName:"p"},"Probe Management"),"\uff0cSelect different probe installation methods based on the end-side environment\n",(0,l.yg)("img",{alt:"image.png",src:a(51364).A,width:"750",height:"229"})),(0,l.yg)("h2",{id:"install-on-a-host"},"Install on a host"),(0,l.yg)("h3",{id:"automatic-probe-installation"},"Automatic probe installation"),(0,l.yg)("p",null,"Take advantage of the automatic installation probes, which need to be available when the Box platform is installed ","[Environment preparation for automatic probe installation]","(/en/docs/next/getting-started/installation-and-deployment/platform-box-install-and-uninstall/#Step 2 Ensure that the environment can automatically install the probe)\uff0cOtherwise, it cannot be used."),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Enter ",(0,l.yg)("strong",{parentName:"li"},"Probe Management")," page\uff0cthen click on the top right corner ",(0,l.yg)("strong",{parentName:"li"},"Automatic probe installation")," button")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"image.png",src:a(92294).A,width:"750",height:"191"})),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"Depending on whether the application name exists\uff0cselect ",(0,l.yg)("strong",{parentName:"li"},"Existing Applications")," and ",(0,l.yg)("strong",{parentName:"li"},"Adding an Application\uff0c"),"And fill in the target host ",(0,l.yg)("strong",{parentName:"li"},"IP address")," And SSH login ",(0,l.yg)("strong",{parentName:"li"},"username")," and ",(0,l.yg)("strong",{parentName:"li"},"password"))),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"image.png",src:a(64362).A,width:"341",height:"233"})),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"Finally, click Install")),(0,l.yg)("h3",{id:"manually-install-the-probe"},"Manually install the probe"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Enter ",(0,l.yg)("strong",{parentName:"li"},"Probe Management")," page \uff0cthen click to the top right ",(0,l.yg)("strong",{parentName:"li"},"Manually install the probe")," buttoon or  on the page ",(0,l.yg)("strong",{parentName:"li"},"Access probe")," \uff0cThe probe installation guide page is displayed,")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"image.png",src:a(87081).A,width:"750",height:"186"})),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"Click ",(0,l.yg)("strong",{parentName:"li"},"host")," \uff0cThe command prompt page for manual host installation is displayed")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"image.png",src:a(93259).A,width:"750",height:"208"})),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"Copy the commands on the command prompt page, replace the required parameters, and run the commands on the target host")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"image.png",src:a(91409).A,width:"750",height:"213"}),"\n",(0,l.yg)("em",{parentName:"p"},"The parameters are described as follows:")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"th"},"Parameter Name")),(0,l.yg)("th",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"th"},"note")),(0,l.yg)("th",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"th"},"default")),(0,l.yg)("th",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"th"},"example")))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"p"),(0,l.yg)("td",{parentName:"tr",align:null},"app-name"),(0,l.yg)("td",{parentName:"tr",align:null},"chaos-default-app"),(0,l.yg)("td",{parentName:"tr",align:null},"my-test")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"g"),(0,l.yg)("td",{parentName:"tr",align:null},"app-group-name"),(0,l.yg)("td",{parentName:"tr",align:null},"chaos-default-app-group"),(0,l.yg)("td",{parentName:"tr",align:null},"my-test-group")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"P"),(0,l.yg)("td",{parentName:"tr",align:null},"agent-port"),(0,l.yg)("td",{parentName:"tr",align:null},"19527"),(0,l.yg)("td",{parentName:"tr",align:null},"19527")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"t"),(0,l.yg)("td",{parentName:"tr",align:null},"chaosblade-box\u7684ip:port"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"172.0.0.1:7001"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("h2",{id:"kubernetes-environment-installation"},"Kubernetes environment installation"),(0,l.yg)("p",null,"In the Kubernetes environment, only manual installation is available"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Enter",(0,l.yg)("strong",{parentName:"li"},"Probe Management"),"After the page, click on the top right corner",(0,l.yg)("strong",{parentName:"li"},"Manually install the probe"),"button or on the page ",(0,l.yg)("strong",{parentName:"li"},"Access probe"),"\uff0cThe probe installation guide page is displayed")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"image.png",src:a(87081).A,width:"750",height:"186"})),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"Click ",(0,l.yg)("strong",{parentName:"li"},"build Kubernetes"),"\uff0cThe command prompt page for manual host installation is displayed")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"image.png",src:a(84308).A,width:"750",height:"192"})),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"Follow the instructions on the installation tips page to download the Chart package first, and then install with Helm")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"image.png",src:a(86963).A,width:"750",height:"322"}),"\n",(0,l.yg)("em",{parentName:"p"},"The parameters are described as follows:")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"th"},"paramas")),(0,l.yg)("th",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"th"},"note")),(0,l.yg)("th",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"th"},"default")),(0,l.yg)("th",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"th"},"example")))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"transport.endpoint"),(0,l.yg)("td",{parentName:"tr",align:null},"chaosblade-box\u7684ip:port"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"127.0.0.1:7001"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"controller.cluster_id"),(0,l.yg)("td",{parentName:"tr",align:null},"the Installed k8s cluster's ID"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"abcdefg123hi")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"controller.cluster_name"),(0,l.yg)("td",{parentName:"tr",align:null},"the Installed k8s cluster's name"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"test-cluster")))),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"If you need to experiment the cluster, install chaosblade-operator. For details, see ChaosBlade-Operator","[chaosblade-operator Installation Guide]","(/en/docs/next/getting-started/installation-and-deployment/tool-chaosblade-install-and-uninstall/# Installation kubernetes Environment)")))}m.isMDXComponent=!0},92294:(t,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/agent-auto-install-973bc689c375ddeb066f90fcee3105aa.png"},64362:(t,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/agent-install-app-7043d611147eea18311465ed0e73c629.png"},86963:(t,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/agent-install-k8s-511b7eed03bc73ce16cc7f6112fc9894.png"},91409:(t,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/agent-install-linux-3dad4bae6731bf0994d96b7a52c793d6.png"},84308:(t,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/agent-install-list-k8s-b5f0b3bce7e58d42477b501dc4829e17.png"},93259:(t,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/agent-install-list-1281d4a5c2e4e62dc68d4549cda7009a.png"},87081:(t,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/agent-install-manual-3b4f72d2d0fe0d8bc8b5a8034b3455a5.png"},51364:(t,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/agent-manager-eb61c2ad46dfda3ecd34551327f7b3b7.png"}}]);