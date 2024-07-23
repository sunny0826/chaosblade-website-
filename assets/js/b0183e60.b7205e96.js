"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[38328],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",i={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=p(t),g=r,y=u["".concat(s,".").concat(g)]||u[g]||i[g]||o;return t?a.createElement(y,l(l({ref:n},c),{},{components:t})):a.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=g;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d[u]="string"==typeof e?e:r,l[1]=d;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},90562:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>i,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const o={title:"\u6a21\u62df Pod \u8d44\u6e90\u81ea\u8eab\u573a\u666f"},l=void 0,d={unversionedId:"experiment-types/k8s/pod/blade_create_k8s_pod-pod",id:"experiment-types/k8s/pod/blade_create_k8s_pod-pod",title:"\u6a21\u62df Pod \u8d44\u6e90\u81ea\u8eab\u573a\u666f",description:"\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/experiment-types/k8s/pod/blade_create_k8s_pod-pod.md",sourceDirName:"experiment-types/k8s/pod",slug:"/experiment-types/k8s/pod/blade_create_k8s_pod-pod",permalink:"/docs/next/experiment-types/k8s/pod/blade_create_k8s_pod-pod",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/docs/experiment-types/k8s/pod/blade_create_k8s_pod-pod.md",tags:[],version:"current",frontMatter:{title:"\u6a21\u62df Pod \u8d44\u6e90\u81ea\u8eab\u573a\u666f"},sidebar:"myAutogeneratedSidebar",previous:{title:"\u6a21\u62df Pod \u7f51\u7edc\u76f8\u5173\u573a\u666f",permalink:"/docs/next/experiment-types/k8s/pod/blade_create_k8s_pod-network"},next:{title:"Node",permalink:"/docs/next/experiment-types/k8s/node/"}},s={},p=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2}],c={toc:p},u="wrapper";function i(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.yg)("p",null,"kubernetes Pod \u8d44\u6e90\u81ea\u8eab\u573a\u666f\uff0c\u6bd4\u5982\u5220\u9664 Pod"),(0,r.yg)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,r.yg)("p",null,"\u652f\u6301\u7684\u573a\u666f\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"blade create k8s pod-pod delete")," \u5220\u9664 POD")),(0,r.yg)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.yg)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u57fa\u7840\u573a\u666f\u5404\u81ea\u6240\u9700\u7684\u53c2\u6570\u5916\uff0c\u5728 kubernetes \u73af\u5883\u4e0b\uff0c\u8fd8\u652f\u6301\u7684\u53c2\u6570\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"--namespace string       Pod \u6240\u5c5e\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u53ea\u80fd\u586b\u5199\u4e00\u4e2a\u503c\uff0c\u5fc5\u586b\u9879\n--evict-count string     \u9650\u5236\u5b9e\u9a8c\u751f\u6548\u7684\u6570\u91cf\n--evict-percent string   \u9650\u5236\u5b9e\u9a8c\u751f\u6548\u6570\u91cf\u7684\u767e\u5206\u6bd4\uff0c\u4e0d\u5305\u542b %\n--labels string          Pod \u8d44\u6e90\u6807\u7b7e\uff0c\u591a\u4e2a\u6807\u7b7e\u4e4b\u524d\u662f\u6216\u7684\u5173\u7cfb\n--names string           Pod \u8d44\u6e90\u540d\n--kubeconfig string      kubeconfig \u6587\u4ef6\u5168\u8def\u5f84\uff08\u4ec5\u9650\u4f7f\u7528 blade \u547d\u4ee4\u8c03\u7528\u65f6\u4f7f\u7528\uff09\n--waiting-time string    \u5b9e\u9a8c\u7ed3\u679c\u7b49\u5f85\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 20s\uff0c\u53c2\u6570\u503c\u8981\u5305\u542b\u5355\u4f4d\uff0c\u4f8b\u5982 10s\uff0c1m\n")),(0,r.yg)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,r.yg)("p",null,"\u5220\u9664\u6307\u5b9a default \u547d\u540d\u7a7a\u95f4\u4e0b\u6807\u7b7e\u662f app=guestbook \u7684 pod\uff0c\u5220\u9664"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"yaml \u914d\u7f6e\u65b9\u5f0f\u5982\u4e0b")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaosblade.io/v1alpha1\nkind: ChaosBlade\nmetadata:\n  name: delete-two-pod-by-labels\nspec:\n  experiments:\n    - scope: pod\n      target: pod\n      action: delete\n      desc: "delete pod by labels"\n      matchers:\n        - name: labels\n          value:\n            - "app=guestbook"\n        - name: namespace\n          value:\n            - "default"\n        - name: evict-count\n          value:\n            - "2"\n')),(0,r.yg)("p",null,"\u4fdd\u5b58\u6587\u4ef6\u4e3a delete_pod_by_labels.yaml\uff0c\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"kubectl apply -f delete_pod_by_labels.yaml")," \u547d\u4ee4\u6267\u884c\uff0c\u53ef\u4ee5\u770b\u5230\u6267\u884c\u524d\u540e\uff0c\u6307\u5b9a\u6570\u91cf\u7684 Pod \u88ab\u6740\u6389\u540e\uff0c\u53c8\u88ab\u91cd\u65b0\u62c9\u8d77\n",(0,r.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3992234/68177298-d68fd700-ffc2-11e9-9318-f3769829fac2.png",alt:"before"}),"\n",(0,r.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3992234/68177283-caa41500-ffc2-11e9-80d7-a82f0f04f118.png",alt:"after"})),(0,r.yg)("p",null,"\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"kubectl get blade delete-two-pod-by-labels -o json")," \u53ef\u4ee5\u67e5\u770b\u8be6\u7ec6\u7684\u6267\u884c\u7ed3\u679c(\u4e0b\u53d1\u53ea\u622a\u53d6\u90e8\u5206\u5185\u5bb9)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "apiVersion": "chaosblade.io/v1alpha1",\n  "kind": "ChaosBlade",\n  "metadata": {\n    "finalizers": ["finalizer.chaosblade.io"],\n    "generation": 1,\n    "name": "delete-two-pod-by-labels",\n    "resourceVersion": "9423460",\n    "selfLink": "/apis/chaosblade.io/v1alpha1/chaosblades/delete-two-pod-by-labels",\n    "uid": "f31da567-ff71-11e9-a8e2-00163e08a39b"\n  },\n  "status": {\n    "expStatuses": [\n      {\n        "action": "delete",\n        "resStatuses": [\n          {\n            "kind": "pod",\n            "name": "frontend-d89756ff7-94fj6",\n            "nodeName": "cn-hangzhou.192.168.0.203",\n            "state": "Success",\n            "success": true,\n            "uid": "79cd691c-fe3a-11e9-8883-00163e0ad0b3"\n          },\n          {\n            "kind": "pod",\n            "name": "frontend-d89756ff7-dkgmd",\n            "nodeName": "cn-hangzhou.192.168.0.205",\n            "state": "Success",\n            "success": true,\n            "uid": "79d1f47e-fe3a-11e9-8883-00163e0ad0b3"\n          }\n        ],\n        "scope": "pod",\n        "state": "Success",\n        "success": true,\n        "target": "pod"\n      }\n    ],\n    "phase": "Running"\n  }\n}\n')),(0,r.yg)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u505c\u6b62\u5b9e\u9a8c\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"kubectl delete -f delete_pod_by_labels.yaml\n")),(0,r.yg)("p",null,"\u6216\u8005\u76f4\u63a5\u5220\u9664 blade \u8d44\u6e90\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"kubectl delete blade delete-two-pod-by-labels\n")),(0,r.yg)("p",null,"\u5220\u9664 Pod \u7684\u505c\u6b62\u5b9e\u9a8c\u64cd\u4f5c\uff0cchaosblade \u672c\u8eab\u4e0d\u4f1a\u91cd\u65b0\u62c9\u8d77\u88ab\u5220\u9664\u7684 Pod\uff0c\u53ea\u662f\u53bb\u66f4\u6539\u5b9e\u9a8c\u72b6\u6001\uff01\uff01"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"blade \u6267\u884c\u65b9\u5f0f")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"blade create k8s pod-pod delete --labels app=guestbook --namespace default --evict-count 2 --kubeconfig config\n")),(0,r.yg)("p",null,"\u5982\u679c\u6267\u884c\u5931\u8d25\uff0c\u4f1a\u8fd4\u56de\u8be6\u7ec6\u7684\u9519\u8bef\u4fe1\u606f\uff1b\u5982\u679c\u6267\u884c\u6210\u529f\uff0c\u4f1a\u8fd4\u56de\u5b9e\u9a8c\u7684 UID\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{"code":200,"success":true,"result":"4d3caa0a99c3b2dd"}\n')),(0,r.yg)("p",null,"\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u8be2\u5b9e\u9a8c\u72b6\u6001\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'blade query k8s create 4d3caa0a99c3b2dd --kubeconfig config\n\n{"code":200,"success":true,"result":{"uid":"4d3caa0a99c3b2dd","success":true,"error":"","statuses":[{"uid":"f325d43c-ff71-11e9-8883-00163e0ad0b3","name":"frontend-d89756ff7-5wgg5","state":"Success","kind":"pod","success":true,"nodeName":"cn-hangzhou.192.168.0.203"},{"uid":"28af19dd-f987-11e9-bd30-00163e08a39b","name":"frontend-d89756ff7-dpv7h","state":"Success","kind":"pod","success":true,"nodeName":"cn-hangzhou.192.168.0.205"}]}}\n')),(0,r.yg)("p",null,"\u9500\u6bc1\u5b9e\u9a8c\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"blade destroy 4d3caa0a99c3b2dd\n")),(0,r.yg)("p",null,"\xdf"))}i.isMDXComponent=!0}}]);