"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[10065],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>h});var t=a(96540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=t.createContext({}),d=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},c=function(e){var n=d(e.components);return t.createElement(i.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),g=l,h=p["".concat(i,".").concat(g)]||p[g]||u[g]||o;return a?t.createElement(h,r(r({ref:n},c),{},{components:a})):t.createElement(h,r({ref:n},c))}));function h(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=g;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:l,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},42901:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=a(58168),l=(a(96540),a(15680));const o={title:"Tool ChaosBlade Install And Uninstall",sidebar_position:2},r=void 0,s={unversionedId:"getting-started/installation-and-deployment/tool-chaosblade-install-and-uninstall",id:"version-1.7.1/getting-started/installation-and-deployment/tool-chaosblade-install-and-uninstall",title:"Tool ChaosBlade Install And Uninstall",description:"This document describes how to install the Chaos Engineering tool : ChaosBlade",source:"@site/versioned_docs/version-1.7.1/getting-started/installation-and-deployment/tool-chaosblade-install-and-uninstall.md",sourceDirName:"getting-started/installation-and-deployment",slug:"/getting-started/installation-and-deployment/tool-chaosblade-install-and-uninstall",permalink:"/en/docs/1.7.1/getting-started/installation-and-deployment/tool-chaosblade-install-and-uninstall",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.1/getting-started/installation-and-deployment/tool-chaosblade-install-and-uninstall.md",tags:[],version:"1.7.1",sidebarPosition:2,frontMatter:{title:"Tool ChaosBlade Install And Uninstall",sidebar_position:2},sidebar:"myAutogeneratedSidebar",previous:{title:"Platform Box Install And Uninstall",permalink:"/en/docs/1.7.1/getting-started/installation-and-deployment/platform-box-install-and-uninstall"},next:{title:"Agent Install",permalink:"/en/docs/1.7.1/getting-started/installation-and-deployment/agent-install"}},i={},d=[{value:"Install on a host",id:"install-on-a-host",level:2},{value:"Install and download the command line toolkit",id:"install-and-download-the-command-line-toolkit",level:3},{value:"Verify installation",id:"verify-installation",level:3},{value:"Uninstallation and Installation",id:"uninstallation-and-installation",level:3},{value:"Installation in Kubernetes Environment",id:"installation-in-kubernetes-environment",level:2},{value:"Environment Preparation",id:"environment-preparation",level:3},{value:"Install with Helm",id:"install-with-helm",level:3},{value:"First, download the Box Chart package",id:"first-download-the-box-chart-package",level:4},{value:"Second\uff0cPerforming the installation",id:"secondperforming-the-installation",level:4},{value:"Verify installation",id:"verify-installation-1",level:3},{value:"Uninstall ChaosBlade",id:"uninstall-chaosblade",level:3}],c={toc:d},p="wrapper";function u(e){let{components:n,...a}=e;return(0,l.yg)(p,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"This document describes how to install the Chaos Engineering tool : ChaosBlade"),(0,l.yg)("h2",{id:"install-on-a-host"},"Install on a host"),(0,l.yg)("h3",{id:"install-and-download-the-command-line-toolkit"},"Install and download the command line toolkit"),(0,l.yg)("p",null,"ChaosBlade is an end - side command line tool that supports cli commands. So in a host environment, you just need to add ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade/releases"},"Chaosblade Releases")," The binary package can be downloaded to the corresponding folder and decompressed. As ",(0,l.yg)("inlineCode",{parentName:"p"},"1.17.0 amd64"),"example\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"# 1. download tar\nwget https://github.com/chaosblade-io/chaosblade/releases/download/v1.7.0/chaosblade-1.7.0-linux-amd64.tar.gz\n\n# 2. unzip and entry chaosblade directory\ntar -xvf chaosblade-1.7.0-linux-amd64.tar.gz && cd chaosblade-1.7.0/\n")),(0,l.yg)("h3",{id:"verify-installation"},"Verify installation"),(0,l.yg)("p",null,"To check whether the installation is successful, run the following command:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"./blade v\n")),(0,l.yg)("p",null,"Here is the expected output\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"version: 1.7.0\nenv: #1 SMP Thu Mar 17 17:08:06 UTC 2022 x86_64\nbuild-time: Tue Sep  6 07:06:55 UTC 2022\n")),(0,l.yg)("h3",{id:"uninstallation-and-installation"},"Uninstallation and Installation"),(0,l.yg)("p",null,"You only need to delete the downloaded and decompressed toolkit"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"rm -rf chaosblade-1.7.0*\n")),(0,l.yg)("h2",{id:"installation-in-kubernetes-environment"},"Installation in Kubernetes Environment"),(0,l.yg)("h3",{id:"environment-preparation"},"Environment Preparation"),(0,l.yg)("p",null,"For details, see \uff1a","[Prepare the Kubernetes installation  environment]","(/en/docs/1.7.1/getting-started/installation-and-deployment/environment-prepare/#Prepare the kubernetes installation environment)"),(0,l.yg)("h3",{id:"install-with-helm"},"Install with Helm"),(0,l.yg)("h4",{id:"first-download-the-box-chart-package"},"First, download the Box Chart package"),(0,l.yg)("p",null,"See all available for download ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade/releases"},"chaosblade-release"),"\uff0cDownload to local\uff0cas ",(0,l.yg)("inlineCode",{parentName:"p"},"1.7.0 amd64"),"example\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"wget https://github.com/chaosblade-io/chaosblade/releases/download/v1.7.0/chaosblade-operator-1.7.0.tgz\n")),(0,l.yg)("h4",{id:"secondperforming-the-installation"},"Second\uff0cPerforming the installation"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"helm install chaosblade-operator chaosblade-operator-1.7.0.tgz --namespace chaosblade\n")),(0,l.yg)("h3",{id:"verify-installation-1"},"Verify installation"),(0,l.yg)("p",null,"To see how the Box is running, run the following command:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get po -n chaosblade\n")),(0,l.yg)("p",null,"Here is the expected output"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"NAME                                    READY   STATUS    RESTARTS   AGE\nchaosblade-operator-688568959-lcwgb     1/1     Running   0          6s\nchaosblade-tool-c9xjd                   1/1     Running   0          6s\nchaosblade-tool-hvqcv                   1/1     Running   0          6s\nchaosblade-tool-q8jjd                   1/1     Running   0          6s\n")),(0,l.yg)("p",null,"If your actual output matches the expected output, ChaosBlade-Box has been installed successfully."),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u26a0\ufe0fAttention\nIf the actual output ",(0,l.yg)("strong",{parentName:"p"},"STATUS")," is not Running, you need to run the following command to view Pod details, and then troubleshoot the problem according to the error message")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"# as chaosblade-operator example\nkubectl describe po chaosblade-operator-688568959-lcwgb -n chaosblade\n")),(0,l.yg)("h3",{id:"uninstall-chaosblade"},"Uninstall ChaosBlade"),(0,l.yg)("p",null,"To uninstall ChaosBlade, run the following command:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"helm un chaosblade-operator -n chaosblade\n")),(0,l.yg)("p",null,"After the uninstallation, you can check whether crd resources are also deleted:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get crds | grep chaos\n")),(0,l.yg)("p",null,"If blade crd resource still exists, it can be deleted by the following command:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl delete crd chaosblades.chaosblade.io\n")),(0,l.yg)("p",null,"If the crd resource fails to be deleted for a long time, run the following command to delete it:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"blades=$(kubectl get blade | grep -v NAME | awk '{print $1}' | tr '\\n' ' ') && kubectl patch blade $blades --type merge -p '{\"metadata\":{\"finalizers\":[]}}'\n")))}u.isMDXComponent=!0}}]);