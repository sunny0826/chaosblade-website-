"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[8264],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=p(t),k=r,m=u["".concat(s,".").concat(k)]||u[k]||i[k]||o;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},17610:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return i},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var a=t(87462),r=(t(67294),t(3905));const o={title:"\u6a21\u62df Pod \u7f51\u7edc\u76f8\u5173\u573a\u666f"},l=void 0,d={unversionedId:"experiment-types/k8s/pod/blade_create_k8s_pod-network",id:"experiment-types/k8s/pod/blade_create_k8s_pod-network",title:"\u6a21\u62df Pod \u7f51\u7edc\u76f8\u5173\u573a\u666f",description:"\u4ecb\u7ecd",source:"@site/docs/experiment-types/k8s/pod/blade_create_k8s_pod-network.md",sourceDirName:"experiment-types/k8s/pod",slug:"/experiment-types/k8s/pod/blade_create_k8s_pod-network",permalink:"/en/docs/next/experiment-types/k8s/pod/blade_create_k8s_pod-network",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/docs/experiment-types/k8s/pod/blade_create_k8s_pod-network.md",tags:[],version:"current",frontMatter:{title:"\u6a21\u62df Pod \u7f51\u7edc\u76f8\u5173\u573a\u666f"},sidebar:"myAutogeneratedSidebar",previous:{title:"\u6a21\u62df Pod \u4e0d\u53ef\u7528",permalink:"/en/docs/next/experiment-types/k8s/pod/blade_create_k8s_pod-fail"},next:{title:"\u6a21\u62df Pod \u8d44\u6e90\u81ea\u8eab\u573a\u666f",permalink:"/en/docs/next/experiment-types/k8s/pod/blade_create_k8s_pod-pod"}},s={},p=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2}],c={toc:p};function i(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"kubernetes Pod \u7f51\u7edc\u76f8\u5173\u573a\u666f\uff0c\u540c\u57fa\u7840\u8d44\u6e90\u7684\u7f51\u7edc\u573a\u666f"),(0,r.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,r.kt)("p",null,"\u652f\u6301\u7684\u7f51\u7edc\u573a\u666f\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blade create k8s pod-network delay")," Pod \u7f51\u7edc\u5ef6\u8fdf\u573a\u666f\uff0c\u540c ","[blade create network delay]","(blade create network delay.md)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blade create k8s pod-network loss")," Pod \u7f51\u7edc\u4e22\u5305\u573a\u666f\uff0c\u540c ","[blade create network loss]","(blade create network loss.md)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blade create k8s pod-network dns")," Pod \u57df\u540d\u8bbf\u95ee\u5f02\u5e38\u573a\u666f\uff0c\u540c ","[blade create network dns]","(blade create network dns.md)")),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u573a\u666f\u5404\u81ea\u6240\u9700\u7684\u53c2\u6570\u5916\uff0c\u5728 kubernetes \u73af\u5883\u4e0b\uff0c\u8fd8\u652f\u6301\u7684\u53c2\u6570\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--namespace string       Pod \u6240\u5c5e\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u53ea\u80fd\u586b\u5199\u4e00\u4e2a\u503c\uff0c\u5fc5\u586b\u9879\n--evict-count string     \u9650\u5236\u5b9e\u9a8c\u751f\u6548\u7684\u6570\u91cf\n--evict-percent string   \u9650\u5236\u5b9e\u9a8c\u751f\u6548\u6570\u91cf\u7684\u767e\u5206\u6bd4\uff0c\u4e0d\u5305\u542b %\n--labels string          Pod \u8d44\u6e90\u6807\u7b7e\uff0c\u591a\u4e2a\u6807\u7b7e\u4e4b\u524d\u662f\u6216\u7684\u5173\u7cfb\n--names string           Pod \u8d44\u6e90\u540d\n--kubeconfig string      kubeconfig \u6587\u4ef6\u5168\u8def\u5f84\uff08\u4ec5\u9650\u4f7f\u7528 blade \u547d\u4ee4\u8c03\u7528\u65f6\u4f7f\u7528\uff09\n--waiting-time string    \u5b9e\u9a8c\u7ed3\u679c\u7b49\u5f85\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 20s\uff0c\u53c2\u6570\u503c\u8981\u5305\u542b\u5355\u4f4d\uff0c\u4f8b\u5982 10s\uff0c1m\n")),(0,r.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,r.kt)("p",null,"\u5bf9 default \u547d\u540d\u7a7a\u95f4\u4e0b\uff0c\u6307\u5b9a\u540d\u4e3a redis-slave-674d68586-jnf7f Pod \u672c\u5730\u7aef\u53e3 6379 \u8bbf\u95ee\u5ef6\u8fdf 3000 \u6beb\u79d2\uff0c\u5ef6\u8fdf\u65f6\u95f4\u4e0a\u4e0b\u6d6e\u52a8 1000 \u6beb\u79d2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"yaml \u914d\u7f6e\u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaosblade.io/v1alpha1\nkind: ChaosBlade\nmetadata:\n  name: delay-pod-network-by-names\nspec:\n  experiments:\n    - scope: pod\n      target: network\n      action: delay\n      desc: "delay pod network by names"\n      matchers:\n        - name: names\n          value:\n            - "redis-slave-674d68586-jnf7f"\n        - name: namespace\n          value:\n            - "default"\n        - name: local-port\n          value: ["6379"]\n        - name: interface\n          value: ["eth0"]\n        - name: time\n          value: ["3000"]\n        - name: offset\n          value: ["1000"]\n')),(0,r.kt)("p",null,"\u4fdd\u5b58\u4e3a yaml \u6587\u4ef6\uff0c\u6bd4\u5982 delay_pod_network_by_names.yaml\uff0c\u4f7f\u7528 kubectl \u547d\u4ee4\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl apply -f delay_pod_network_by_names.yaml\n")),(0,r.kt)("p",null,"\u5b9e\u9a8c\u72b6\u6001\u67e5\u8be2\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get blade delay-pod-network-by-names -o json\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b(\u7701\u7565\u4e86\u4e00\u90e8\u5206)\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "apiVersion": "v1",\n  "items": [\n    {\n      "apiVersion": "chaosblade.io/v1alpha1",\n      "kind": "ChaosBlade",\n      "metadata": {\n        "finalizers": ["finalizer.chaosblade.io"],\n        "generation": 1,\n        "name": "delay-pod-network-by-names",\n        "resourceVersion": "9425766",\n        "selfLink": "/apis/chaosblade.io/v1alpha1/chaosblades/delay-pod-network-by-names",\n        "uid": "cf32327c-ff73-11e9-b3be-00163e136d88"\n      },\n      "status": {\n        "expStatuses": [\n          {\n            "action": "delay",\n            "resStatuses": [\n              {\n                "id": "e28f6e3ae2732a86",\n                "kind": "pod",\n                "name": "chaosblade-tool-vv49t", // \u6b64pod\u4e3asidecar\n                "nodeName": "cn-hangzhou.192.168.0.204",\n                "state": "Success",\n                "success": true,\n                "uid": "4f1a28a1-fee6-11e9-8883-00163e0ad0b3"\n              }\n            ],\n            "scope": "pod",\n            "state": "Success",\n            "success": true,\n            "target": "network"\n          }\n        ],\n        "phase": "Running"\n      }\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"\u53ef\u901a\u8fc7\u8bbf\u95ee\u670d\u52a1\uff0c\u6216\u8005 telnet \u547d\u4ee4\u9a8c\u8bc1\u5b9e\u9a8c\u6548\u679c"),(0,r.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u505c\u6b62\u5b9e\u9a8c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl delete -f delay_pod_network_by_names.yaml\n")),(0,r.kt)("p",null,"\u6216\u8005\u76f4\u63a5\u5220\u9664 blade \u8d44\u6e90\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl delete blade delay-pod-network-by-names\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"blade \u6267\u884c\u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"blade create k8s pod-network delay --time 3000 --offset 1000 --interface eth0 --local-port 6379 --names redis-slave-674d68586-jnf7f --namespace default --kubeconfig config\n")),(0,r.kt)("p",null,"\u5982\u679c\u6267\u884c\u5931\u8d25\uff0c\u4f1a\u8fd4\u56de\u8be6\u7ec6\u7684\u9519\u8bef\u4fe1\u606f\uff1b\u5982\u679c\u6267\u884c\u6210\u529f\uff0c\u4f1a\u8fd4\u56de\u5b9e\u9a8c\u7684 UID\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"code":200,"success":true,"result":"127f1ee0afcd4798"}\n')),(0,r.kt)("p",null,"\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u8be2\u5b9e\u9a8c\u72b6\u6001\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'blade query k8s create 127f1ee0afcd4798 --kubeconfig config\n\n{"code":200,"success":true,"result":{"uid":"127f1ee0afcd4798","success":true,"error":"","statuses":[{"id":"b5a216dddeb3389f","uid":"4f1a28a1-fee6-11e9-8883-00163e0ad0b3","name":"chaosblade-tool-vv49t","state":"Success","kind":"pod","success":true,"nodeName":"cn-hangzhou.192.168.0.204"}]}}\n')),(0,r.kt)("p",null,"\u9500\u6bc1\u5b9e\u9a8c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"blade destroy 127f1ee0afcd4798\n")))}i.isMDXComponent=!0}}]);