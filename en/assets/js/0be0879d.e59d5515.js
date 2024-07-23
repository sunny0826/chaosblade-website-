"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[23986],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const i={title:"Environment Prepare",sidebar_position:0},o=void 0,l={unversionedId:"getting-started/installation-and-deployment/environment-prepare",id:"version-1.7.2/getting-started/installation-and-deployment/environment-prepare",title:"Environment Prepare",description:"Installation in Kubernetes Environment",source:"@site/versioned_docs/version-1.7.2/getting-started/installation-and-deployment/environment-prepare.md",sourceDirName:"getting-started/installation-and-deployment",slug:"/getting-started/installation-and-deployment/environment-prepare",permalink:"/en/docs/1.7.2/getting-started/installation-and-deployment/environment-prepare",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.2/getting-started/installation-and-deployment/environment-prepare.md",tags:[],version:"1.7.2",sidebarPosition:0,frontMatter:{title:"Environment Prepare",sidebar_position:0},sidebar:"myAutogeneratedSidebar",previous:{title:"Installation And Deployment",permalink:"/en/docs/1.7.2/getting-started/installation-and-deployment/"},next:{title:"Platform Box Install And Uninstall",permalink:"/en/docs/1.7.2/getting-started/installation-and-deployment/platform-box-install-and-uninstall"}},s={},p=[{value:"Installation in Kubernetes Environment",id:"installation-in-kubernetes-environment",level:2},{value:"First\uff0c Kubernetes cluster prepared",id:"first-kubernetes-cluster-prepared",level:3},{value:"Second\uff0cHelm prepared",id:"secondhelm-prepared",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"installation-in-kubernetes-environment"},"Installation in Kubernetes Environment"),(0,a.yg)("h3",{id:"first-kubernetes-cluster-prepared"},"First\uff0c Kubernetes cluster prepared"),(0,a.yg)("p",null,"Before using it, ensure that the ",(0,a.yg)("strong",{parentName:"p"},"Kubernetes cluster")," is deployed in the environment. If the Kubernetes cluster has not been deployed, you can follow the following links to complete the deployment:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/"},"Kubernetes")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"kind")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/quick-start/"},"K3s")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://microk8s.io/"},"Microk8s"),(0,a.yg)("blockquote",{parentName:"li"},(0,a.yg)("p",{parentName:"blockquote"},"\u26a0\ufe0fAttention\uff1a\nYour Kubernetes server version must be no less than version v1.16. Get version information\uff0cplease enter ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl version"))))),(0,a.yg)("h3",{id:"secondhelm-prepared"},"Second\uff0cHelm prepared"),(0,a.yg)("p",null,"Ensure that it is installed in the environment ",(0,a.yg)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm"),"\u3002\nTo see if Helm is installed, run the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"helm version\n")),(0,a.yg)("p",null,"Here is the expected output:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'version.BuildInfo{Version:"v3.4.2", GitCommit:"23dd3af5e19a02d4f4baa5b2f242645a1a3af629", GitTreeState:"dirty", GoVersion:"go1.15.5"}\n')),(0,a.yg)("p",null,"If your actual output is roughly the same as you expected, the Helm has been installed successfully."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\ufe0fAttention\uff1a\nThe commands in this article will use Helm v3 to manipulate the Chaos Mesh. If the version of Helm in your environment is v2, please refer to",(0,a.yg)("a",{parentName:"p",href:"https://helm.sh/docs/topics/v2_v3_migration/"},"\u5c06 Helm v2  migrate to v3"),"Or change  values in the format of v2.")))}c.isMDXComponent=!0}}]);