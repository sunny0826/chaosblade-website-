(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[4651],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(o,".").concat(m)]||u[m]||p[m]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3773:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return o},default:function(){return c}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i={id:"blade create k8s container-network"},d={unversionedId:"experiment-types/k8s/blade create k8s container-network",id:"version-1.7.0/experiment-types/k8s/blade create k8s container-network",isDocsHomePage:!1,title:"\u6a21\u62df\u5bb9\u5668\u5185\u7f51\u7edc\u5b9e\u9a8c\u573a\u666f",description:"\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7.0/experiment-types/k8s/blade_create_k8s_container-network.md",sourceDirName:"experiment-types/k8s",slug:"/experiment-types/k8s/blade create k8s container-network",permalink:"/docs/experiment-types/k8s/blade create k8s container-network",editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/website/versioned_docs/version-1.7.0/experiment-types/k8s/blade_create_k8s_container-network.md",version:"1.7.0",frontMatter:{id:"blade create k8s container-network"},sidebar:"version-1.7.0/docs",previous:{title:"\u6a21\u62df\u8282\u70b9\u78c1\u76d8\u573a\u666f",permalink:"/docs/experiment-types/k8s/blade create k8s node-disk"},next:{title:"\u6a21\u62df\u5bb9\u5668\u5185CPU\u8d1f\u8f7d\u5b9e\u9a8c\u573a\u666f",permalink:"/docs/experiment-types/k8s/blade create k8s container-cpu"}},o=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[]},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",children:[{value:"yaml \u914d\u7f6e\u65b9\u5f0f",id:"yaml-\u914d\u7f6e\u65b9\u5f0f",children:[]},{value:"blade \u547d\u4ee4\u6267\u884c\u65b9\u5f0f",id:"blade-\u547d\u4ee4\u6267\u884c\u65b9\u5f0f",children:[]}]},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",children:[]}],s={toc:o};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("p",null,"kubernetes \u4e0b \u5bb9\u5668\u5185\u7f51\u7edc\u5b9e\u9a8c\u573a\u666f\uff0c\u540c\u57fa\u7840\u8d44\u6e90\u7f51\u7edc\u573a\u666f\uff0c\u7531\u4e8e\u540c\u4e00\u4e2a Pod \u5185\u7684\u5bb9\u5668\u5171\u4eab Pod \u7f51\u7edc\uff0c\u6240\u4ee5\u6548\u679c\u540c\u5bf9 Pod \u7f51\u7edc\u5b9e\u9a8c"),(0,l.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,l.kt)("p",null,"\u652f\u6301\u7684\u7f51\u7edc\u573a\u666f\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"blade create k8s container-network delay")," container \u7f51\u7edc\u5ef6\u8fdf\u573a\u666f\uff0c\u540c",(0,l.kt)("a",{parentName:"li",href:"/docs/experiment-types/host/blade%20create%20network%20delay"},"blade create network delay")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"blade create k8s container-network loss")," container \u7f51\u7edc\u4e22\u5305\u573a\u666f\uff0c\u540c ",(0,l.kt)("a",{parentName:"li",href:"/docs/experiment-types/host/blade%20create%20network%20loss"},"blade create network loss")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"blade create k8s container-network dns")," container \u57df\u540d\u8bbf\u95ee\u5f02\u5e38\u573a\u666f\uff0c\u540c ",(0,l.kt)("a",{parentName:"li",href:"/docs/experiment-types/host/blade%20create%20network%20dns"},"blade create network dns"))),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"container-ids")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bb9\u5668ID\uff0c\u652f\u6301\u914d\u7f6e\u591a\u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"container-names")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bb9\u5668\u540d\u79f0\uff0c\u652f\u6301\u914d\u7f6e\u591a\u4e2a"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"docker-endpoint ")),(0,l.kt)("td",{parentName:"tr",align:null},"Docker server \u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u4e3a\u672c\u5730\u7684 /var/run/docker.sock")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"namespace")),(0,l.kt)("td",{parentName:"tr",align:null},"Pod \u6240\u5c5e\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u53ea\u80fd\u586b\u5199\u4e00\u4e2a\u503c\uff0c\u5fc5\u586b\u9879"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f8b\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"default"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"evict-count")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9650\u5236\u5b9e\u9a8c\u751f\u6548\u7684\u6570\u91cf"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"evict-percent")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9650\u5236\u5b9e\u9a8c\u751f\u6548\u6570\u91cf\u7684\u767e\u5206\u6bd4\uff0c\u4e0d\u5305\u542b %"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"labels")),(0,l.kt)("td",{parentName:"tr",align:null},"Pod \u8d44\u6e90\u6807\u7b7e\uff0c\u591a\u4e2a\u6807\u7b7e\u4e4b\u95f4\u662f\u6216\u7684\u5173\u7cfb"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"names")),(0,l.kt)("td",{parentName:"tr",align:null},"Pod \u8d44\u6e90\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kubeconfig")),(0,l.kt)("td",{parentName:"tr",align:null},"kubeconfig \u6587\u4ef6\u5168\u8def\u5f84\uff08\u4ec5\u9650\u4f7f\u7528 blade \u547d\u4ee4\u8c03\u7528\u65f6\u4f7f\u7528\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'\u4f8b: "/root/.kube/config"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"waiting-time")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u9a8c\u7ed3\u679c\u7b49\u5f85\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 20s\uff0c\u53c2\u6570\u503c\u8981\u5305\u542b\u5355\u4f4d\uff0c\u4f8b\u5982 10s\uff0c1m"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,l.kt)("p",null,"\u6307\u5b9a default \u547d\u540d\u7a7a\u95f4\u4e0b Pod \u540d\u4e3a frontend-d89756ff7-pbnnc\uff0c\u5bb9\u5668id\u4e3a 2ff814b246f86\uff0c\u505a\u8bbf\u95ee ",(0,l.kt)("a",{parentName:"p",href:"http://www.baidu.com"},"www.baidu.com")," \u57df\u540d\u5f02\u5e38\u5b9e\u9a8c\u4e3e\u4f8b\u3002"),(0,l.kt)("h3",{id:"yaml-\u914d\u7f6e\u65b9\u5f0f"},"yaml \u914d\u7f6e\u65b9\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaosblade.io/v1alpha1\nkind: ChaosBlade\nmetadata:\n  name: tamper-container-dns-by-id\nspec:\n  experiments:\n  - scope: container\n    target: network\n    action: dns\n    desc: "tamper container dns by id"\n    matchers:\n    - name: container-ids\n      value:\n      - "4b25f66580c4"\n    - name: domain\n      value: ["www.baidu.com"]\n    - name: ip\n      value: ["10.0.0.1"]\n      # pod names\n    - name: names\n      value: ["frontend-d89756ff7-trsxf"]\n      # or use pod labels\n')),(0,l.kt)("p",null,"\u4f8b\u5982\u914d\u7f6e\u597d\u6587\u4ef6\u540e\uff0c\u4fdd\u5b58\u4e3a tamper_container_dns_by_id.yaml\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6267\u884c\u5b9e\u9a8c\u573a\u666f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl apply -f tamper_container_dns_by_id.yaml\n")),(0,l.kt)("p",null," \u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u6bcf\u4e2a\u5b9e\u9a8c\u7684\u6267\u884c\u72b6\u6001\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl get blade tamper_container_dns_by_id.yaml -o json\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "apiVersion": "chaosblade.io/v1alpha1",\n   "kind": "ChaosBlade",\n   "metadata": {\n       "finalizers": [\n           "finalizer.chaosblade.io"\n       ],\n       "generation": 1,\n       "name": "tamper-container-dns-by-id",\n       "resourceVersion": "9435600",\n       "selfLink": "/apis/chaosblade.io/v1alpha1/chaosblades/tamper-container-dns-by-id",\n       "uid": "137372c2-ff7c-11e9-8883-00163e0ad0b3"\n   },\n       "status": {\n       "expStatuses": [\n           {\n               "action": "dns",\n               "resStatuses": [\n                   {\n                       "id": "1141530f66869a82",\n                       "kind": "container",\n                       "name": "php-redis",\n                       "nodeName": "cn-hangzhou.192.168.0.203",\n                       "state": "Success",\n                       "success": true,\n                       "uid": "4b25f66580c4dbf465a1b167c4c6967e987773442e5d47f0bee5db0a5e27a12d"\n                   }\n               ],\n               "scope": "container",\n               "state": "Success",\n               "success": true,\n               "target": "network"\n           }\n       ],\n       "phase": "Running"\n   }\n}\n')),(0,l.kt)("p",null," \u53ef\u4ee5\u767b\u5f55\u5bb9\u5668\u8bbf\u95ee ",(0,l.kt)("a",{parentName:"p",href:"http://www.baidu.com"},"www.baidu.com")," \u57df\u540d\u8fdb\u884c\u9a8c\u8bc1"),(0,l.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u505c\u6b62\u5b9e\u9a8c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl delete -f tamper_container_dns_by_id.yaml \n")),(0,l.kt)("h3",{id:"blade-\u547d\u4ee4\u6267\u884c\u65b9\u5f0f"},"blade \u547d\u4ee4\u6267\u884c\u65b9\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"blade create k8s container-network dns --domain www.baidu.com --ip 10.0.0.1 --names frontend-d89756ff7-trsxf --namespace default --container-ids 4b25f66580c4 --kubeconfig config \n")),(0,l.kt)("p",null,"\u5982\u679c\u6267\u884c\u5931\u8d25\uff0c\u4f1a\u8fd4\u56de\u8be6\u7ec6\u7684\u9519\u8bef\u4fe1\u606f\uff1b\u5982\u679c\u6267\u884c\u6210\u529f\uff0c\u4f1a\u8fd4\u56de\u5b9e\u9a8c\u7684 UID\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'{"code":200,"success":true,"result":"6e46a5df94e0b065"}\n')),(0,l.kt)("p",null,"\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u8be2\u5b9e\u9a8c\u72b6\u6001\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'blade query k8s create 6e46a5df94e0b065 --kubeconfig config\n\n{"code":200,"success":true,"result":{"uid":"6e46a5df94e0b065","success":true,"error":"","statuses":[{"id":"90304950e52d679e","uid":"4b25f66580c4dbf465a1b167c4c6967e987773442e5d47f0bee5db0a5e27a12d","name":"php-redis","state":"Success","kind":"container","success":true,"nodeName":"cn-hangzhou.192.168.0.203"}]}}\n')),(0,l.kt)("p",null,"\u9500\u6bc1\u5b9e\u9a8c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"blade destroy 6e46a5df94e0b065\n")),(0,l.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,l.kt)("p",null,'Q: {"code":504,"success":false,"error":"unexpected status, the real value is Error","result":{"uid":"623841684347c05f","success":false,"error":"unexpected status, the real value is Error","statuses":','[{"uid":"4b25f66580c4dbf465a1b167c4c6967e987773442e5d47f0bee5db0a5e27a12d","name":"php-redis","state":"Error","kind":"container","error":"10.0.0.1 www.baidu.com #chaosblade has been exist exit status 1","success":false,"nodeName":"cn-hangzhou.192.168.0.203"}]',"}}\nA: \u6240\u4ee5\u5b9e\u9a8c\u5df2\u7ecf\u5b58\u5728"),(0,l.kt)("p",null,"\u5176\u4ed6\u95ee\u9898\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/docs/experiment-types/k8s/blade%20create%20k8s"},"blade create k8s")," \u5e38\u89c1\u95ee\u9898"))}c.isMDXComponent=!0}}]);