"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[2013],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,b=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return t?a.createElement(b,d(d({ref:n},s),{},{components:t})):a.createElement(b,d({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,d=new Array(l);d[0]=c;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,d[1]=o;for(var p=2;p<l;p++)d[p]=t[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},87877:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p}});var a=t(87462),r=(t(67294),t(3905));const l={title:"\u6a21\u62df Pod \u4e0d\u53ef\u7528"},d=void 0,o={unversionedId:"experiment-types/k8s/pod/blade_create_k8s_pod-fail",id:"version-1.7.1/experiment-types/k8s/pod/blade_create_k8s_pod-fail",title:"\u6a21\u62df Pod \u4e0d\u53ef\u7528",description:"\u4ecb\u7ecd",source:"@site/versioned_docs/version-1.7.1/experiment-types/k8s/pod/blade_create_k8s_pod-fail.md",sourceDirName:"experiment-types/k8s/pod",slug:"/experiment-types/k8s/pod/blade_create_k8s_pod-fail",permalink:"/en/docs/1.7.1/experiment-types/k8s/pod/blade_create_k8s_pod-fail",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.1/experiment-types/k8s/pod/blade_create_k8s_pod-fail.md",tags:[],version:"1.7.1",frontMatter:{title:"\u6a21\u62df Pod \u4e0d\u53ef\u7528"},sidebar:"myAutogeneratedSidebar",previous:{title:"\u6a21\u62df Pod \u6587\u4ef6\u7cfb\u7edfI/O\u5f02\u5e38",permalink:"/en/docs/1.7.1/experiment-types/k8s/pod/blade_create_k8s_pod-IO"},next:{title:"\u6a21\u62df Pod \u7f51\u7edc\u76f8\u5173\u573a\u666f",permalink:"/en/docs/1.7.1/experiment-types/k8s/pod/blade_create_k8s_pod-network"}},i={},p=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"kubernetes Pod \u8d44\u6e90\u81ea\u8eab\u573a\u666f, \u6240\u9009\u7684 Pod \u5728\u6307\u5b9a\u7684\u65f6\u95f4\u6bb5\u5185\u5c06\u4e0d\u53ef\u7528"),(0,r.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blade create k8s pod-pod fail -h"))),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"evict-count")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9650\u5236\u5b9e\u9a8c\u751f\u6548\u7684\u6570\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"evict-percent")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9650\u5236\u5b9e\u9a8c\u751f\u6548\u6570\u91cf\u7684\u767e\u5206\u6bd4\uff0c\u4e0d\u5305\u542b %"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"namespace")),(0,r.kt)("td",{parentName:"tr",align:null},"Pod \u6240\u5c5e\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u53ea\u80fd\u586b\u5199\u4e00\u4e2a\u503c\uff0c\u5fc5\u586b\u9879"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f8b:",(0,r.kt)("inlineCode",{parentName:"td"},"default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"labels")),(0,r.kt)("td",{parentName:"tr",align:null},"Pod \u8d44\u6e90\u6807\u7b7e\uff0c\u591a\u4e2a\u6807\u7b7e\u4e4b\u95f4\u662f\u6216\u7684\u5173\u7cfb"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"names")),(0,r.kt)("td",{parentName:"tr",align:null},"Pod \u8d44\u6e90\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kubeconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"kubeconfig \u6587\u4ef6\u5168\u8def\u5f84\uff08\u4ec5\u9650\u4f7f\u7528 blade \u547d\u4ee4\u8c03\u7528\u65f6\u4f7f\u7528\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'\u4f8b: "/root/.kube/config"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"waiting-time")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9e\u9a8c\u7ed3\u679c\u7b49\u5f85\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 20s\uff0c\u53c2\u6570\u503c\u8981\u5305\u542b\u5355\u4f4d\uff0c\u4f8b\u5982 10s\uff0c1m"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,r.kt)("p",null,"\u4f7f\u6307\u5b9a default \u547d\u540d\u7a7a\u95f4\u4e0b\u6807\u7b7e\u662f app=guestbook \u7684 pod \u670d\u52a1\u4e0d\u53ef\u7528"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"yaml \u914d\u7f6e\u65b9\u5f0f\u5982\u4e0b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaosblade.io/v1alpha1\nkind: ChaosBlade\nmetadata:\n  name: fail-pod-by-labels\nspec:\n  experiments:\n    - scope: pod\n      target: pod\n      action: fail\n      desc: "inject fail image to  select pod"\n      matchers:\n        - name: labels\n          value:\n            - "app=guestbook"\n        - name: namespace\n          value:\n            - "default"\n')),(0,r.kt)("p",null,"\u4fdd\u5b58\u6587\u4ef6\u4e3a fail_pod_by_labels.yaml\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply -f fail_pod_by_labels.yaml")," \u547d\u4ee4\u6267\u884c\uff0c\u53ef\u4ee5\u770b\u5230\u6267\u884c\u524d\u540e\uff0c\u6307\u5b9a\u7684 Pod \u65e0\u6cd5\u62c9\u53d6\u955c\u50cf\uff0c\u5220\u9664\u5b9e\u9a8c\u4e4b\u540e\uff0cPod \u53c8\u6062\u590d\u6b63\u5e38"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"frontend-5d944bddbb-8w9ff   1/1     Running   0          45h\nfrontend-5d944bddbb-8w9ff   1/1     Running   0          45h\nfrontend-5d944bddbb-8w9ff   0/1     ErrImagePull   0          45h\nfrontend-5d944bddbb-8w9ff   0/1     ImagePullBackOff   0          45h\nfrontend-5d944bddbb-8w9ff   0/1     ErrImagePull       0          45h\nfrontend-5d944bddbb-8w9ff   0/1     ImagePullBackOff   0          45h\nfrontend-5d944bddbb-8w9ff   0/1     CrashLoopBackOff   0          45h\nfrontend-5d944bddbb-8w9ff   0/1     ErrImagePull       0          45h\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"frontend-5d944bddbb-8w9ff   0/1     Terminating        0          45h\nfrontend-5d944bddbb-8sll8   0/1     Pending            0          0s\nfrontend-5d944bddbb-8sll8   0/1     Pending            0          0s\nfrontend-5d944bddbb-8w9ff   0/1     Terminating        0          45h\nfrontend-5d944bddbb-8sll8   0/1     ContainerCreating   0          0s\nfrontend-5d944bddbb-8sll8   1/1     Running             0          4s\nfrontend-5d944bddbb-8w9ff   0/1     Terminating         0          45h\nfrontend-5d944bddbb-8w9ff   0/1     Terminating         0          45h\n")),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get blade fail-pod-by-labels -o json")," \u53ef\u4ee5\u67e5\u770b\u8be6\u7ec6\u7684\u6267\u884c\u7ed3\u679c(\u4e0b\u53d1\u53ea\u622a\u53d6\u90e8\u5206\u5185\u5bb9)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "apiVersion": "chaosblade.io/v1alpha1",\n  "kind": "ChaosBlade",\n  "metadata": {\n    "creationTimestamp": "2020-07-05T01:18:01Z",\n    "finalizers": ["finalizer.chaosblade.io"],\n    "generation": 1,\n    "name": "fail-pod-by-labels",\n    "resourceVersion": "149831443",\n    "selfLink": "/apis/chaosblade.io/v1alpha1/chaosblades/fail-pod-by-labels",\n    "uid": "5e7c42f8-be5d-11ea-b2c3-00163f003dea"\n  },\n  "spec": {\n    "experiments": [\n      {\n        "action": "fail",\n        "desc": "inject fail image to  select pod",\n        "matchers": [\n          {\n            "name": "labels",\n            "value": ["app=guestbook"]\n          },\n          {\n            "name": "namespace",\n            "value": ["default"]\n          }\n        ],\n        "scope": "pod",\n        "target": "pod"\n      }\n    ]\n  },\n  "status": {\n    "expStatuses": [\n      {\n        "action": "fail",\n        "resStatuses": [\n          {\n            "kind": "pod",\n            "name": "frontend-5d944bddbb-8w9ff",\n            "nodeName": "qa.op.k8s.008120.hz",\n            "state": "Success",\n            "success": true,\n            "uid": "5187a405-be5d-11ea-a750-00163e0dc939"\n          }\n        ],\n        "scope": "pod",\n        "state": "Success",\n        "success": true,\n        "target": "pod"\n      }\n    ],\n    "phase": "Running"\n  }\n}\n')),(0,r.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u505c\u6b62\u5b9e\u9a8c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl delete -f fail_pod_by_labels.yaml\n")),(0,r.kt)("p",null,"\u6216\u8005\u76f4\u63a5\u5220\u9664 blade \u8d44\u6e90\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl delete blade fail-pod-by-labels\n")),(0,r.kt)("p",null,"Pod \u4e0d\u53ef\u7528\u7684\u505c\u6b62\u5b9e\u9a8c\u64cd\u4f5c\uff0cchaosblade \u4f1a\u91cd\u65b0\u62c9\u8d77\u88ab\u5220\u9664\u7684 Pod"))}u.isMDXComponent=!0}}]);