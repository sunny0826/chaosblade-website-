"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[25423],{15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>m});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),c=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},d=function(e){var a=c(e.components);return t.createElement(p.Provider,{value:a},e.children)},u="mdxType",i={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),y=r,m=u["".concat(p,".").concat(y)]||u[y]||i[y]||l;return n?t.createElement(m,s(s({ref:a},d),{},{components:n})):t.createElement(m,s({ref:a},d))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=y;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},89366:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>i,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=n(58168),r=(n(96540),n(15680));const l={id:"blade create k8s"},s="Kubernetes\u5b9e\u9a8c\u573a\u666f",o={unversionedId:"experiment-types/k8s/blade create k8s",id:"version-1.7.0/experiment-types/k8s/blade create k8s",title:"Kubernetes\u5b9e\u9a8c\u573a\u666f",description:"\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7.0/experiment-types/k8s/blade_create_k8s.md",sourceDirName:"experiment-types/k8s",slug:"/experiment-types/k8s/blade create k8s",permalink:"/docs/1.7.0/experiment-types/k8s/blade create k8s",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.0/experiment-types/k8s/blade_create_k8s.md",tags:[],version:"1.7.0",frontMatter:{id:"blade create k8s"},sidebar:"version-1.7.0/docs",previous:{title:"\u6a21\u62df\u7cfb\u7edf\u65f6\u95f4\u504f\u79fb\u5b9e\u9a8c",permalink:"/docs/1.7.0/experiment-types/host/blade create time travel"},next:{title:"\u6a21\u62dfPod\u7f51\u7edc\u76f8\u5173\u573a\u666f",permalink:"/docs/1.7.0/experiment-types/k8s/blade create k8s pod-network"}},p={},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u521b\u5efa\u5b9e\u9a8c",id:"\u521b\u5efa\u5b9e\u9a8c",level:2},{value:"\u4fee\u6539\u5b9e\u9a8c",id:"\u4fee\u6539\u5b9e\u9a8c",level:2},{value:"\u9500\u6bc1\u5b9e\u9a8c",id:"\u9500\u6bc1\u5b9e\u9a8c",level:2},{value:"\u5378\u8f7d",id:"\u5378\u8f7d",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],d={toc:c},u="wrapper";function i(e){let{components:a,...n}=e;return(0,r.yg)(u,(0,t.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"kubernetes\u5b9e\u9a8c\u573a\u666f"},"Kubernetes\u5b9e\u9a8c\u573a\u666f"),(0,r.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.yg)("p",null,"\u521b\u5efa kubernetes \u76f8\u5173\u7684\u5b9e\u9a8c\u573a\u666f\uff0c\u9664\u4e86\u4f7f\u7528 blade \u547d\u4ee4\u521b\u5efa\u573a\u666f\u5916\uff0c\u8fd8\u53ef\u4ee5\u5c06\u5b9e\u9a8c\u4f7f\u7528 yaml \u6587\u4ef6\u63cf\u8ff0\uff0c\u4f7f\u7528 kubectl \u547d\u4ee4\u6267\u884c\u3002\u76ee\u524d\u652f\u6301\u7684\u5b9e\u9a8c\u573a\u666f\u5982\u4e0b\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/1.7.0/experiment-types/k8s/blade%20create%20k8s%20node-cpu"},"blade create k8s node-cpu")," Node \u8282\u70b9 CPU \u8d1f\u8f7d\u573a\u666f"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/1.7.0/experiment-types/k8s/blade%20create%20k8s%20node-network"},"blade create k8s node-network")," Node \u8282\u70b9\u7f51\u7edc\u573a\u666f"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/1.7.0/experiment-types/k8s/blade%20create%20k8s%20node-process"},"blade create k8s node-process")," Node \u8282\u70b9\u8fdb\u7a0b\u573a\u666f"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/1.7.0/experiment-types/k8s/blade%20create%20k8s%20node-disk"},"blade create k8s node-disk")," Node \u8282\u70b9\u78c1\u76d8\u573a\u666f"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/1.7.0/experiment-types/k8s/blade%20create%20k8s%20pod-pod"},"blade create k8s pod-pod")," Pod \u8d44\u6e90\u573a\u666f\uff0c\u6bd4\u5982\u6740 Pod"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/1.7.0/experiment-types/k8s/blade%20create%20k8s%20pod-network"},"blade create k8s pod-network")," Pod \u7f51\u7edc\u8d44\u6e90\u573a\u666f\uff0c\u6bd4\u5982\u7f51\u7edc\u5ef6\u8fdf"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/1.7.0/experiment-types/k8s/blade%20create%20k8s%20pod-IO"},"blade create k8s pod-IO")," Pod IO \u6587\u4ef6\u7cfb\u7edf\u5f02\u5e38\u573a\u666f"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/1.7.0/experiment-types/k8s/blade%20create%20k8s%20pod-fail"},"blade create k8s pod-fail")," Pod \u4e0d\u53ef\u7528\u5f02\u5e38\u573a\u666f"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/1.7.0/experiment-types/k8s/blade%20create%20k8s%20container-container"},"blade create k8s container-container")," Container \u8d44\u6e90\u573a\u666f\uff0c\u6bd4\u5982\u6740\u5bb9\u5668"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/1.7.0/experiment-types/k8s/blade%20create%20k8s%20container-cpu"},"blade create k8s container-cpu")," \u5bb9\u5668\u5185 CPU \u8d1f\u8f7d\u573a\u666f"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/1.7.0/experiment-types/k8s/blade%20create%20k8s%20container-network"},"blade create k8s container-network")," \u5bb9\u5668\u5185\u7f51\u7edc\u573a\u666f"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/1.7.0/experiment-types/k8s/blade%20create%20k8s%20container-process"},"blade create k8s container-process")," \u5bb9\u5668\u5185\u8fdb\u7a0b\u573a\u666f")),(0,r.yg)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,r.yg)("p",null,"\u6267\u884c Kubernetes \u5b9e\u9a8c\u573a\u666f\uff0c\u9700\u8981\u63d0\u524d\u90e8\u7f72 ChaosBlade Operator\uff0cHelm \u5b89\u88c5\u5305\u4e0b\u8f7d\u5730\u5740\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade-operator/releases"},"https://github.com/chaosblade-io/chaosblade-operator/releases")," \u3002\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"helm install --namespace kube-system --name chaosblade-operator chaosblade-operator-<VERSION>.tgz\n")),(0,r.yg)("p",null,"\u4f1a\u5b89\u88c5\u5728 kube-system \u547d\u4ee4\u7a7a\u95f4\u4e0b\u3002ChaosBlade Operator \u542f\u52a8\u540e\u4f1a\u5728\u6bcf\u4e2a\u8282\u70b9\u90e8\u7f72 chaosblade-tool Pod \u548c\u4e00\u4e2a chaosblade-operator Pod.\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u5b89\u88c5\u7ed3\u679c:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"kubectl get pod -n kube-system -o wide | grep chaosblade\n")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3992234/68177275-c4ae3400-ffc2-11e9-9306-77956412242e.png",alt:"install-result"})),(0,r.yg)("p",null,"\u5982\u679c\u663e\u793a chaosblade-operator \u548c chaosblade-tool Pod \u90fd\u5904\u4e8e Running \u72b6\u6001\uff0c\u8bf4\u660e\u90e8\u7f72\u6210\u529f\uff0c\u5982\u679c\u90e8\u7f72\u51fa\u73b0\u95ee\u9898\uff0c\u53ef\u8be6\u89c1\u4e0b\u53d1\u7684QA\u3002"),(0,r.yg)("h2",{id:"\u521b\u5efa\u5b9e\u9a8c"},"\u521b\u5efa\u5b9e\u9a8c"),(0,r.yg)("p",null,"\u6267\u884c\u65b9\u5f0f\u6709\u4e24\u79cd\uff0c\u4e00\u662f\u901a\u8fc7\u914d\u7f6e yaml \u65b9\u5f0f\uff0c\u4f7f\u7528 kubectl \u6267\u884c\uff0c\u53e6\u4e00\u79cd\u662f\u76f4\u63a5\u4f7f\u7528 chaosblade \u5305\u4e2d\u7684 blade \u547d\u4ee4\u6267\u884c\uff0c\u4e0b\u9762\u4ee5\u6307\u5b9a\u4e00\u53f0\u8282\u70b9\uff0c\u505a CPU \u8d1f\u8f7d 80% \u5b9e\u9a8c\u4e3e\u4f8b\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"yaml \u914d\u7f6e\u65b9\u5f0f")," "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaosblade.io/v1alpha1\nkind: ChaosBlade\nmetadata:\n  name: cpu-load\nspec:\n  experiments:\n  - scope: node\n    target: cpu\n    action: fullload\n    desc: "increase node cpu load by names"\n    matchers:\n    - name: names\n      value:\n      - "cn-hangzhou.192.168.0.205"\n    - name: cpu-percent\n      value:\n      - "80"\n')),(0,r.yg)("p",null,"\u4f8b\u5982\u914d\u7f6e\u597d\u6587\u4ef6\u540e\uff0c\u4fdd\u5b58\u4e3a chaosblade_cpu_load.yaml\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6267\u884c\u5b9e\u9a8c\u573a\u666f\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"kubectl apply -f chaosblade_cpu_load.yaml\n")),(0,r.yg)("p",null," \u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u6bcf\u4e2a\u5b9e\u9a8c\u7684\u6267\u884c\u72b6\u6001\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"kubectl get blade cpu-load -o json\n")),(0,r.yg)("p",null,"\u66f4\u591a\u7684\u5b9e\u9a8c\u573a\u666f\u914d\u7f6e\u4e8b\u4f8b\u53ef\u67e5\u770b: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade-operator/tree/master/examples"},"https://github.com/chaosblade-io/chaosblade-operator/tree/master/examples")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"blade \u547d\u4ee4\u6267\u884c\u65b9\u5f0f"),"\n\u4e0b\u8f7d chaosblade \u5de5\u5177\u5305\uff0c\u4e0b\u8f7d\u5730\u5740\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade/releases"},"https://github.com/chaosblade-io/chaosblade/releases")," \uff0c\u89e3\u538b\u5373\u53ef\u4f7f\u7528\u3002\u8fd8\u662f\u4e0a\u8ff0\u4f8b\u5b50\uff0c\u4f7f\u7528 blade \u547d\u4ee4\u6267\u884c\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"blade create k8s node-cpu fullload --names cn-hangzhou.192.168.0.205 --cpu-percent 80 --kubeconfig ~/.kube/config \n")),(0,r.yg)("p",null,"\u4f7f\u7528 blade \u547d\u4ee4\u6267\u884c\uff0c\u5982\u679c\u6267\u884c\u5931\u8d25\uff0c\u4f1a\u8fd4\u56de\u8be6\u7ec6\u7684\u9519\u8bef\u4fe1\u606f\uff1b\u5982\u679c\u6267\u884c\u6210\u529f\uff0c\u4f1a\u8fd4\u56de\u5b9e\u9a8c\u7684 UID\uff0c\u4f7f\u7528\u67e5\u8be2\u547d\u4ee4\u53ef\u4ee5\u67e5\u8be2\u8be6\u7ec6\u7684\u5b9e\u9a8c\u7ed3\u679c\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"blade query k8s create <UID>\n")),(0,r.yg)("h2",{id:"\u4fee\u6539\u5b9e\u9a8c"},"\u4fee\u6539\u5b9e\u9a8c"),(0,r.yg)("p",null,"yaml \u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\u652f\u6301\u573a\u666f\u52a8\u6001\u4fee\u6539\uff0c\u6bd4\u5982\u5c06\u4e0a\u8ff0\u7684 cpu \u8d1f\u8f7d\u8c03\u6574\u4e3a 60%\uff0c\u5219\u53ea\u9700\u5c06\u4e0a\u8ff0 value \u7684\u503c\u4ece 80 \u6539\u4e3a 60 \u5373\u53ef\uff0c\u4f8b\u5982\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaosblade.io/v1alpha1\nkind: ChaosBlade\nmetadata:\n  name: cpu-load\nspec:\n  experiments:\n  - scope: node\n    target: cpu\n    action: fullload\n    desc: "increase node cpu load by names"\n    matchers:\n    - name: names\n      value:\n      - "cn-hangzhou.192.168.0.205"\n    - name: cpu-percent\n      value:\n      - "80"\n')),(0,r.yg)("p",null,"\u7136\u540e\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"kubeclt apply -f chaosblade_cpu_load.yaml")," \u547d\u4ee4\u6267\u884c\u66f4\u65b0\u5373\u53ef\u3002"),(0,r.yg)("h2",{id:"\u9500\u6bc1\u5b9e\u9a8c"},"\u9500\u6bc1\u5b9e\u9a8c"),(0,r.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4e09\u79cd\u65b9\u5f0f\u505c\u6b62\u5b9e\u9a8c\uff1a\n",(0,r.yg)("strong",{parentName:"p"},"\u6839\u636e\u5b9e\u9a8c\u8d44\u6e90\u540d\u505c\u6b62"),"\n\u6bd4\u5982\u4e0a\u8ff0 cpu-load \u573a\u666f\uff0c\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u505c\u6b62\u5b9e\u9a8c"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"kubectl delete chaosblade cpu-load\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u901a\u8fc7 yaml \u914d\u7f6e\u6587\u4ef6\u505c\u6b62"),"\n\u6307\u5b9a\u4e0a\u8ff0\u521b\u5efa\u597d\u7684 yaml \u6587\u4ef6\u8fdb\u884c\u5220\u9664\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"kubectl delete -f chaosblade_cpu_load.yaml\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u901a\u8fc7 blade \u547d\u4ee4\u505c\u6b62"),"\n\u6b64\u65b9\u5f0f\u4ec5\u9650\u4f7f\u7528 blade \u521b\u5efa\u7684\u5b9e\u9a8c\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u505c\u6b62\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"blade destroy <UID>\n")),(0,r.yg)("p",null,"UID \u662f\u6267\u884c blade create \u547d\u4ee4\u8fd4\u56de\u7684\u7ed3\u679c\uff0c\u5982\u679c\u5fd8\u8bb0\uff0c\u53ef\u4f7f\u7528 blade status --type create \u547d\u4ee4\u67e5\u8be2"),(0,r.yg)("h2",{id:"\u5378\u8f7d"},"\u5378\u8f7d"),(0,r.yg)("p",null,"\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"p"},"helm del --purge chaosblade-operator")," \u5378\u8f7d\u5373\u53ef\uff0c\u5c06\u4f1a\u505c\u6b62\u5168\u90e8\u5b9e\u9a8c\uff0c\u5220\u9664\u6240\u6709\u521b\u5efa\u7684\u8d44\u6e90\u3002"),(0,r.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.yg)("p",null,'Q:validation failure list:spec.experiments.matchers.value in body must be of type array: "string"\nA: \u6240\u6709 matchers \u4e2d value \u53c2\u6570\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u4f8b\u5982\uff1a'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'- name: names\n  value: ["cn-hangzhou.192.168.0.205"]\n')),(0,r.yg)("p",null,"\u6216\u8005"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'- name: names\n  value: \n  - "cn-hangzhou.192.168.0.205"\n')),(0,r.yg)("p",null,'Q\uff1a{"code":800,"success":false,"error":"unable to load in-cluster configuration, KUBERNETES_SERVICE_HOST and KUBERNETES_SERVICE_PORT must be defined","result":{"uid":"08dec77bd45c8e55","success":false,"error":"unable to load in-cluster configuration, KUBERNETES_SERVICE_HOST and KUBERNETES_SERVICE_PORT must be defined","statuses":','[{"id":"08dec77bd45c8e55","state":"Error","kind":"","error":"unable to load in-cluster configuration, KUBERNETES_SERVICE_HOST and KUBERNETES_SERVICE_PORT must be defined","success":false}]',"}}\nA\uff1a\u6ca1\u6709\u6307\u5b9a --kubeconfig \u6587\u4ef6\u8def\u5f84"),(0,r.yg)("p",null,'Q: {"code":504,"success":false,"error":"unexpected status, the real value is Error","result":{"uid":"78abb71fb0587c2e","success":false,"error":"unexpected status, the real value is Error","statuses":','[{"state":"Error","kind":"","error":"must specify one flag in evict-count,evict-percent,labels,names","success":false}]',"}}\nA: \u7f3a\u5c11\u5fc5\u8981\u53c2\u6570"))}i.isMDXComponent=!0}}]);