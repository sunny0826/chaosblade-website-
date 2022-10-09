"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[7624],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return k}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},i=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,i=r(e,["components","mdxType","originalType","parentName"]),u=s(t),k=l,c=u["".concat(d,".").concat(k)]||u[k]||m[k]||o;return t?a.createElement(c,p(p({ref:n},i),{},{components:t})):a.createElement(c,p({ref:n},i))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,p=new Array(o);p[0]=u;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r.mdxType="string"==typeof e?e:l,p[1]=r;for(var s=2;s<o;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8064:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return s}});var a=t(7462),l=(t(7294),t(3905));const o={authors:"guoxudong",title:"ChaosBlade\uff1a\u4ece\u96f6\u5f00\u59cb\u7684\u6df7\u6c8c\u5de5\u7a0b\uff08\u4e09\uff09",tags:["chaosblade"],hide_table_of_contents:!1},p=void 0,r={permalink:"/blog/2020/06/15/chaosblade-start-3",editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/website/blog/blog/2020-06-15-chaosblade-start-3.md",source:"@site/blog/2020-06-15-chaosblade-start-3.md",title:"ChaosBlade\uff1a\u4ece\u96f6\u5f00\u59cb\u7684\u6df7\u6c8c\u5de5\u7a0b\uff08\u4e09\uff09",description:"\u524d\u8a00",date:"2020-06-15T00:00:00.000Z",formattedDate:"2020\u5e746\u670815\u65e5",tags:[{label:"chaosblade",permalink:"/blog/tags/chaosblade"}],readingTime:11.045,hasTruncateMarker:!0,authors:[{name:"\u90ed\u65ed\u4e1c\uff08@sunny0826\uff09",title:"Maintainer of ChaosBlade",url:"https://github.com/sunny0826",imageURL:"https://avatars.githubusercontent.com/u/24563928?v=4",key:"guoxudong"}],frontMatter:{authors:"guoxudong",title:"ChaosBlade\uff1a\u4ece\u96f6\u5f00\u59cb\u7684\u6df7\u6c8c\u5de5\u7a0b\uff08\u4e09\uff09",tags:["chaosblade"],hide_table_of_contents:!1},prevItem:{title:"ChaosBlade\uff1a\u4ece\u96f6\u5f00\u59cb\u7684\u6df7\u6c8c\u5de5\u7a0b\uff08\u56db\uff09",permalink:"/blog/2020/07/22/chaosblade-start-4"},nextItem:{title:"ChaosBlade\uff1a\u4ece\u96f6\u5f00\u59cb\u7684\u6df7\u6c8c\u5de5\u7a0b\uff08\u4e8c\uff09",permalink:"/blog/2020/06/09/chaosblade-start-2"}},d={authorsImageUrls:[void 0]},s=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u5b9e\u9a8c\u5bf9\u8c61\uff1aPod",id:"\u5b9e\u9a8c\u5bf9\u8c61pod",level:2},{value:"Pod \u5b9e\u9a8c\u573a\u666f",id:"pod-\u5b9e\u9a8c\u573a\u666f",level:2},{value:"\u5220\u9664 Pod \u573a\u666f",id:"\u5220\u9664-pod-\u573a\u666f",level:3},{value:"Pod \u7f51\u7edc\u5ef6\u8fdf\u573a\u666f",id:"pod-\u7f51\u7edc\u5ef6\u8fdf\u573a\u666f",level:3},{value:"Pod \u7f51\u7edc\u4e22\u5305\u573a\u666f",id:"pod-\u7f51\u7edc\u4e22\u5305\u573a\u666f",level:3},{value:"Pod \u57df\u540d\u8bbf\u95ee\u5f02\u5e38\u573a\u666f",id:"pod-\u57df\u540d\u8bbf\u95ee\u5f02\u5e38\u573a\u666f",level:3},{value:"Pod \u6587\u4ef6\u7cfb\u7edf I/O \u6545\u969c\u573a\u666f",id:"pod-\u6587\u4ef6\u7cfb\u7edf-io-\u6545\u969c\u573a\u666f",level:3},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2}],i={toc:s};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"\u5728\u4e0a\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u4e86\u5982\u4f55\u5b89\u88c5 ",(0,l.kt)("strong",{parentName:"p"},"ChaosBlade Operator"),"\uff0c\u5e76\u8fdb\u884c\u4e86\u7b80\u5355\u7684\u4f7f\u7528\u3002\u4ece\u672c\u7ae0\u5f00\u59cb\uff0c\u6240\u6709\u7684\u5b9e\u8df5\u7ae0\u8282\uff0c\u90fd\u4f1a\u6709\u914d\u5957\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://katacoda.com/"},"katacode")," \u4ea4\u4e92\u5f0f\u6559\u7a0b\uff0c\u8bfb\u8005\u53ef\u7528\u901a\u8fc7 katacode\uff0c\u5728\u6d4f\u89c8\u5668\u4e0a\u64cd\u4f5c\u771f\u5b9e\u7684 Kubernetes \u548c ChaosBlade\u3002"),(0,l.kt)("h2",{id:"\u5b9e\u9a8c\u5bf9\u8c61pod"},"\u5b9e\u9a8c\u5bf9\u8c61\uff1aPod"),(0,l.kt)("p",null,"Pod \u662f Kubernetes \u5e94\u7528\u7a0b\u5e8f\u7684\u57fa\u672c\u6267\u884c\u5355\u5143\uff0c\u5373\u5b83\u662f Kubernetes \u5bf9\u8c61\u6a21\u578b\u4e2d\u521b\u5efa\u6216\u90e8\u7f72\u7684\u6700\u5c0f\u548c\u6700\u7b80\u5355\u7684\u5355\u5143\u3002Pod \u8868\u793a\u5728 \u96c6\u7fa4 \u4e0a\u8fd0\u884c\u7684\u8fdb\u7a0b\u3002"),(0,l.kt)("p",null,"Pod \u5c01\u88c5\u4e86\u5e94\u7528\u7a0b\u5e8f\u5bb9\u5668\uff08\u6216\u8005\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u5c01\u88c5\u591a\u4e2a\u5bb9\u5668\uff09\u3001\u5b58\u50a8\u8d44\u6e90\u3001\u552f\u4e00\u7f51\u7edc IP \u4ee5\u53ca\u63a7\u5236\u5bb9\u5668\u5e94\u8be5\u5982\u4f55\u8fd0\u884c\u7684\u9009\u9879\u3002 Pod \u8868\u793a\u90e8\u7f72\u5355\u5143\uff1aKubernetes \u4e2d\u5e94\u7528\u7a0b\u5e8f\u7684\u5355\u4e2a\u5b9e\u4f8b\uff0c\u5b83\u53ef\u80fd\u7531\u5355\u4e2a \u5bb9\u5668 \u6216\u5c11\u91cf\u7d27\u5bc6\u8026\u5408\u5e76\u5171\u4eab\u8d44\u6e90\u7684\u5bb9\u5668\u7ec4\u6210\u3002"),(0,l.kt)("h2",{id:"pod-\u5b9e\u9a8c\u573a\u666f"},"Pod \u5b9e\u9a8c\u573a\u666f"),(0,l.kt)("p",null,"Pod \u4f5c\u4e3a Kubernetes \u6700\u57fa\u672c\u7684\u6267\u884c\u5355\u5143\uff0c\u5bf9\u4e8e Kubernetes \u96c6\u7fa4\u6765\u8bf4\u5341\u5206\u91cd\u8981\u3002\u90a3\u4e48\u5bf9\u4e8e\u6df7\u6c8c\u5de5\u7a0b\uff0c\u4ece Pod \u5165\u624b\u5b9e\u8df5\u5c31\u518d\u5408\u9002\u4e0d\u8fc7\u4e86\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u7bc7\u9ed8\u8ba4\u5df2\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/cloudnativeapp/guestbook?spm=5176.2020520152.0.0.7c5f16ddH8myx6"},"guestbook")," \u5e94\u7528\u548c ChaosBlade Operator\u3002")),(0,l.kt)("h3",{id:"\u5220\u9664-pod-\u573a\u666f"},"\u5220\u9664 Pod \u573a\u666f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u76ee\u6807"),"\uff1a\u5220\u9664 ",(0,l.kt)("inlineCode",{parentName:"p"},"chaosblade")," \u547d\u540d\u7a7a\u95f4\u4e0b\u6807\u7b7e\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"role=master")," \u7684 pod\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6267\u884c\u89c2\u6d4b")),(0,l.kt)("p",null,"\u5f00\u59cb\u89c2\u5bdf\u9700\u8981\u5220\u9664\u7684 pod\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get pod -l "role=master" -n chaosblade -w\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5f00\u59cb\u5b9e\u9a8c")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"delete_pod_by_labels.yaml")," \u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaosblade.io/v1alpha1\nkind: ChaosBlade\nmetadata:\n  name: delete-two-pod-by-labels\nspec:\n  experiments:\n  - scope: pod\n    target: pod\n    action: delete\n    desc: "delete pod by labels"\n    matchers:\n    - name: labels\n      value:\n      - "role=master"\n    - name: namespace\n      value:\n      - "chaosblade"\n    - name: evict-count\n      value:\n      - "2"\n')),(0,l.kt)("p",null,"\u65b0\u5efa\u7ec8\u7aef\uff0c\u5e76\u5f00\u59cb\u5b9e\u9a8c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f delete_pod_by_labels.yaml\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u67e5\u770b\u5b9e\u9a8c\u72b6\u6001")),(0,l.kt)("p",null,"\u6267\u884c\u547d\u4ee4\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get blade delete-two-pod-by-labels -o json"),"\uff0c\u67e5\u770b\u5b9e\u9a8c\u72b6\u6001\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u67e5\u770b\u5b9e\u9a8c\u7ed3\u679c")),(0,l.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u89c2\u6d4b\u547d\u4ee4\uff0c\u53ef\u4ee5\u770b\u5230 pod \u88ab\u5220\u9664\u5e76\u91cd\u542f\uff0c\u7ed3\u679c\u7b26\u5408\u9884\u671f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://tva2.sinaimg.cn/large/ad5fbf65ly1gft22n0pnpg20pg06qhdt.gif",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u505c\u6b62\u5b9e\u9a8c")),(0,l.kt)("p",null,"\u6267\u884c\u547d\u4ee4\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl delete -f delete_pod_by_labels.yaml")),(0,l.kt)("p",null,"\u6216\u8005\u76f4\u63a5\u5220\u9664 blade \u8d44\u6e90\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl delete blade delete-two-pod-by-labels")),(0,l.kt)("h3",{id:"pod-\u7f51\u7edc\u5ef6\u8fdf\u573a\u666f"},"Pod \u7f51\u7edc\u5ef6\u8fdf\u573a\u666f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u76ee\u6807"),"\uff1a\u5728 chaosblade \u547d\u540d\u7a7a\u95f4\u4e2d\uff0c\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"redis-master-68857cd57c-dzbs9")," Pod \u7684\u672c\u5730 6379 \u7aef\u53e3\u6dfb\u52a0 3000 \u6beb\u79d2\u8bbf\u95ee\u5ef6\u8fdf\uff0c\u5ef6\u8fdf\u65f6\u95f4\u4e0a\u4e0b\u6d6e\u52a8 1000 \u6beb\u79d2\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5f00\u59cb\u5b9e\u9a8c")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"delay_pod_network_by_names.yaml")," \u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaosblade.io/v1alpha1\nkind: ChaosBlade\nmetadata:\n  name: delay-pod-network-by-names\nspec:\n  experiments:\n  - scope: pod\n    target: network\n    action: delay\n    desc: "delay pod network by names"\n    matchers:\n    - name: names\n      value:\n      - "redis-master-68857cd57c-dzbs9"\n    - name: namespace\n      value:\n      - "chaosblade"\n    - name: local-port\n      value: ["6379"]\n    - name: interface\n      value: ["eth0"]\n    - name: time\n      value: ["3000"]\n    - name: offset\n      value: ["1000"]\n')),(0,l.kt)("p",null,"\u83b7\u53d6 Pod \u540d\u79f0\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod -l app=redis,role=master -o jsonpath={.items..metadata.name}\n")),(0,l.kt)("p",null,"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"delay_pod_network_by_names.yaml")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," \u5b57\u6bb5\u7684\u503c\u3002"),(0,l.kt)("p",null,"\u6267\u884c\u547d\u4ee4\uff0c\u5f00\u59cb\u5b9e\u9a8c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f delay_pod_network_by_names.yaml\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u67e5\u770b\u5b9e\u9a8c\u72b6\u6001")),(0,l.kt)("p",null,"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get blade delay-pod-network-by-names -o json")," \u547d\u4ee4\uff0c\u67e5\u770b\u5b9e\u9a8c\u72b6\u6001\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u89c2\u6d4b\u7ed3\u679c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u83b7\u53d6\u5b9e\u9a8c pod ip\n$ kubectl get pod -l app=redis,role=master -o jsonpath={.items..status.podIP}\n10.42.69.44\n# \u8fdb\u5165\u89c2\u6d4b pod\n$ kubectl exec -it redis-slave-6dd975d4c8-2zrkb bash\n# \u5728 pod \u4e2d\u5b89\u88c5 telnet\n$ apt-get update && apt-get install -y telnet\n# \u6d4b\u8bd5\u65f6\u95f4\n$ time echo \"\" | telnet 10.42.69.44 6379\nTrying 10.42.69.44...\nConnected to 10.42.69.44.\nEscape character is '^]'.\nConnection closed by foreign host.\n\nreal    0m3.790s\nuser    0m0.007s\nsys     0m0.001s\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u8bbf\u95ee\u5b9e\u9a8c pod 6379 \u7aef\u53e3\u7684\u5ef6\u8fdf\u4e3a 3s \u5de6\u53f3\uff0c\u7ed3\u679c\u7b26\u5408\u9884\u671f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://tva4.sinaimg.cn/large/ad5fbf65ly1gft27x90skg20p606c1kx.gif",alt:"delay-pod-network"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u505c\u6b62\u5b9e\u9a8c")),(0,l.kt)("p",null,"\u6267\u884c\u547d\u4ee4\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl delete -f delay_pod_network_by_names.yaml")),(0,l.kt)("p",null,"\u6216\u8005\u76f4\u63a5\u5220\u9664 blade \u8d44\u6e90\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl delete blade delay-pod-network-by-names")),(0,l.kt)("h3",{id:"pod-\u7f51\u7edc\u4e22\u5305\u573a\u666f"},"Pod \u7f51\u7edc\u4e22\u5305\u573a\u666f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u76ee\u6807"),"\uff1a\u5728 chaosblade \u547d\u540d\u7a7a\u95f4\u4e2d\uff0c\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"redis-master-68857cd57c-dzbs9")," Pod \u6ce8\u5165\u4e22\u5305\u7387 100% \u7684\u6545\u969c\uff0c\u53ea\u9488\u5bf9 IP \u4e3a 10.42.69.42 \u7684 pod \u751f\u6548\uff0c\u4e5f\u5c31\u662f\u9664 10.42.69.42 \u4ee5\u5916\u7684 pod \u90fd\u80fd\u6b63\u5e38\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"p"},"redis-master-68857cd57c-dzbs9"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5f00\u59cb\u5b9e\u9a8c")),(0,l.kt)("p",null,"\u83b7\u53d6 pod \u540d\u79f0\u5185\u5bb9\u540c\u4e0a\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"loss_pod_network_by_names.yaml")," \u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaosblade.io/v1alpha1\nkind: ChaosBlade\nmetadata:\n  name: loss-pod-network-by-names\nspec:\n  experiments:\n  - scope: pod\n    target: network\n    action: loss\n    desc: "loss pod network by names"\n    matchers:\n    - name: names\n      value:\n      - "redis-master-68857cd57c-dzbs9"\n    - name: namespace\n      value:\n      - "chaosblade"\n    - name: interface\n      value: ["eth0"]\n    - name: percent\n      value: ["100"]\n    - name: timeout\n      value: ["60"]\n    - name: destination-ip\n      value: ["10.42.69.42"]\n')),(0,l.kt)("p",null,"\u6267\u884c\u547d\u4ee4\uff0c\u5f00\u59cb\u5b9e\u9a8c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f loss_pod_network_by_names.yaml\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u67e5\u770b\u5b9e\u9a8c\u72b6\u6001")),(0,l.kt)("p",null,"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get blade loss-pod-network-by-names -o json")," \u547d\u4ee4\uff0c\u67e5\u770b\u5b9e\u9a8c\u72b6\u6001\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u89c2\u6d4b\u7ed3\u679c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u83b7\u53d6\u5b9e\u9a8c pod ip\n$ kubectl get pod -l app=redis,role=master -o jsonpath={.items..status.podIP}\n10.42.69.44\n# \u8fdb\u5165\u89c2\u6d4b pod\uff0cIP\u4e3a\uff1a10.42.69.42\uff08\u88ab\u8bbe\u7f6e\u4e22\u5305\u7387 100%\uff09\n$ kubectl exec -it redis-slave-6dd975d4c8-lm8jz bash\n# Ping \u5b9e\u9a8cPod ip\n$ ping 10.42.69.44\nPING 10.42.69.44 (10.42.69.44) 56(84) bytes of data.\n# \u65e0\u54cd\u5e94\n\n# \u8fdb\u5165\u89c2\u6d4b pod\uff0c\u8be5 pod \u672a\u88ab\u6307\u5b9a\u4e22\u5305\n$ kubectl exec -it redis-slave-6dd975d4c8-2zrkb bash\n# Ping \u5b9e\u9a8cPod ip\n$ ping 10.42.69.44\nPING 10.42.69.44 (10.42.69.44) 56(84) bytes of data.\n64 bytes from 10.42.69.44: icmp_seq=1 ttl=63 time=0.128 ms\n64 bytes from 10.42.69.44: icmp_seq=2 ttl=63 time=0.128 ms\n64 bytes from 10.42.69.44: icmp_seq=3 ttl=63 time=0.092 ms\n...\n# \u54cd\u5e94\u6b63\u5e38\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u89c2\u6d4b pod \u8bbf\u95ee\u5b9e\u9a8c pod \u4e22\u5305\u7387 100%\uff08\u65e0\u6cd5\u8bbf\u95ee\uff09\uff0c\u800c\u5176\u4ed6 pod \u4e0d\u53d7\u5f71\u54cd\uff0c\u7ed3\u679c\u7b26\u5408\u9884\u671f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://tvax2.sinaimg.cn/large/ad5fbf65ly1gft2c288oqg20p607i7wi.gif",alt:"loss-pod-network"})),(0,l.kt)("p",null,"\u8fd9\u91cc\u5728\u914d\u7f6e\u4e2d\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"timeout")," \u8bbe\u7f6e\u4e3a 60 \u79d2\uff0c60 \u79d2\u540e 100% \u4e22\u5305\u7684\u60c5\u51b5\u5c06\u4f1a\u6d88\u5931\uff0c\u8fd9\u4e2a\u914d\u7f6e\u662f\u4e3a\u4e86\u9632\u6b62\u56e0\u4e22\u5305\u7387\u8bbe\u7f6e\u592a\u9ad8\uff0c\u9020\u6210\u673a\u5668\u65e0\u6cd5\u8fde\u63a5\u7684\u60c5\u51b5\u3002\u4e0e\u5176\u6709\u76f8\u4f3c\u529f\u80fd\u7684\u8fd8\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"exclude-port"),"\uff0c\u8be5\u914d\u7f6e\u6307\u5b9a\u4e00\u4e9b\u7aef\u53e3\u4e0d\u4f1a\u4e22\u5305\uff0c\u4ee5\u514d\u8be5 pod \u5931\u8054\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u505c\u6b62\u5b9e\u9a8c")),(0,l.kt)("p",null,"\u6267\u884c\u547d\u4ee4\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl delete -f loss_pod_network_by_names.yaml")),(0,l.kt)("p",null,"\u6216\u8005\u76f4\u63a5\u5220\u9664 blade \u8d44\u6e90\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl delete blade loss-pod-network-by-names"),")"),(0,l.kt)("h3",{id:"pod-\u57df\u540d\u8bbf\u95ee\u5f02\u5e38\u573a\u666f"},"Pod \u57df\u540d\u8bbf\u95ee\u5f02\u5e38\u573a\u666f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u76ee\u6807"),"\uff1aPod \u5185\u8bbf\u95ee\u6307\u5b9a\u57df\u540d\u5f02\u5e38\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5f00\u59cb\u5b9e\u9a8c")),(0,l.kt)("p",null,"\u83b7\u53d6 pod \u540d\u79f0\u5185\u5bb9\u540c\u4e0a\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dns_pod_network_by_names.yaml")," \u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaosblade.io/v1alpha1\nkind: ChaosBlade\nmetadata:\n  name: dns-pod-network-by-names\nspec:\n  experiments:\n  - scope: pod\n    target: network\n    action: dns\n    desc: "dns pod network by names"\n    matchers:\n    - name: names\n      value:\n      - "redis-slave-6dd975d4c8-lm8jz"\n    - name: namespace\n      value:\n      - "chaosblade"\n    - name: domain\n      value: ["www.baidu.com"]\n    - name: ip\n      value: ["10.0.0.1"]\n')),(0,l.kt)("p",null,"\u6267\u884c\u547d\u4ee4\uff0c\u5f00\u59cb\u5b9e\u9a8c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f dns_pod_network_by_names.yaml\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u67e5\u770b\u5b9e\u9a8c\u72b6\u6001")),(0,l.kt)("p",null,"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get blade dns-pod-network-by-names -o json ")," \u547d\u4ee4\uff0c\u67e5\u770b\u5b9e\u9a8c\u72b6\u6001\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u89c2\u6d4b\u7ed3\u679c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8fdb\u5165\u5b9e\u9a8c pod\n$ kubectl exec -it redis-slave-6dd975d4c8-lm8jz bash\n# Ping www.baidu.com\n$ ping www.baidu.com\n# \u65e0\u54cd\u5e94\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u8bbf\u95ee\u6307\u5b9a\u57df\u540d ",(0,l.kt)("inlineCode",{parentName:"p"},"www.baidu.com")," \u5f02\u5e38\uff0c\u7ed3\u679c\u7b26\u5408\u9884\u671f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://tvax1.sinaimg.cn/large/ad5fbf65ly1gft2hti44bg20p607i4nj.gif",alt:"dns-pod-network"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u505c\u6b62\u5b9e\u9a8c")),(0,l.kt)("p",null,"\u6267\u884c\u547d\u4ee4\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl delete -f dns_pod_network_by_names.yaml")),(0,l.kt)("p",null,"\u6216\u8005\u76f4\u63a5\u5220\u9664 blade \u8d44\u6e90\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl delete blade dns-pod-network-by-names")),(0,l.kt)("h3",{id:"pod-\u6587\u4ef6\u7cfb\u7edf-io-\u6545\u969c\u573a\u666f"},"Pod \u6587\u4ef6\u7cfb\u7edf I/O \u6545\u969c\u573a\u666f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u76ee\u6807"),"\uff1a\u7ed9 kubernetes \u7684 pod \u6ce8\u5165\u6587\u4ef6\u7cfb\u7edfI/O\u6545\u969c\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u6b64\u573a\u666f\u9700\u8981\u6fc0\u6d3b ",(0,l.kt)("inlineCode",{parentName:"p"},"--webhook-enable")," \u53c2\u6570\uff0c\u5982\u9700\u4f7f\u7528\u6b64\u529f\u80fd\uff0c\u8bf7\u5728 chaosblade-operator \u53c2\u6570\u4e2d\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"--webhook-enable"),"\uff0c\u6216\u8005\u5728\u5b89\u88c5\u65f6\u6307\u5b9a\uff1a\u4f8b\u5982 helm \u5b89\u88c5\u65f6\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"--set webhook.enable=true")," \u6307\u5b9a\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u524d\u63d0\u6761\u4ef6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u4e2d\u90e8\u7f72\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"chaosblade-admission-webhook")),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"volume")," \u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"mountPropagation")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"HostToContainer")),(0,l.kt)("li",{parentName:"ul"},"pod\u4e0a\u9762\u6dfb\u52a0\u4e86\u5982\u4e0bannotations:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'chaosblade/inject-volume: "data" //\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684volume name\nchaosblade/inject-volume-subpath: "conf" //volume\u6302\u8f7d\u7684\u5b50\u76ee\u5f55\n')))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u90e8\u7f72\u6d4b\u8bd5 pod")),(0,l.kt)("p",null,"chaosblade webhook \u4f1a\u6839\u636e pod \u7684 annotation\uff0c\u6ce8\u5165 fuse \u7684 sidecar \u5bb9\u5668\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"chaosblade/inject-volume")," \u6307\u660e\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 volume name\uff0c\u6bd4\u5982\u4f8b\u5b50\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"data"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"chaosblade/inject-volume-subpath")," \u6307\u660e volume \u6302\u8f7d\u8def\u5f84\u7684\u5b50\u76ee\u5f55\u3002\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0cvolume \u7684\u6302\u8f7d\u8def\u5f84\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"/data"),",\u5b50\u76ee\u5f55\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"conf"),"\uff0c\u5219\u5728 pod \u5185\uff0c\u6ce8\u5165I/O\u5f02\u5e38\u7684\u76ee\u5f55\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"/data/conf"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6307\u5b9a\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 volume \u9700\u8981\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"li"},"mountPropagation\uff1aHostToContainer"),"\uff0c\u8fd9\u4e2a\u5b57\u6bb5\u7684\u542b\u4e49\u53ef\u4ee5\u53c2\u8003\u5b98\u65b9\u6587\u6863 ",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/volumes/#mount-propagation"},"Volumes"),"\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u90e8\u7f72\u6d4b\u8bd5 pod\n$ kubectl apply -f io-test-pod.yaml\n# \u67e5\u770b sidecar \u662f\u5426\u6ce8\u5165\u6210\u529f\n$ kubectl get pod test-7c9fc6fd88-7lx6b -n chaosblade\nNAME                    READY   STATUS    RESTARTS   AGE\ntest-7c9fc6fd88-7lx6b   2/2     Running   0          4m8s\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5f00\u59cb\u5b9e\u9a8c")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pod_io.yaml")," \u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaosblade.io/v1alpha1\nkind: ChaosBlade\nmetadata:\n  name: inject-pod-by-labels\nspec:\n  experiments:\n  - scope: pod\n    target: pod\n    action: IO\n    desc: "Pod IO Exception by labels"\n    matchers:\n    - name: labels\n      value:\n      - "app=test"\n    - name: namespace\n      value:\n      - "chaosblade"\n    - name: method\n      value:\n      - "read"\n    - name: delay\n      value:\n      - "1000"\n    - name: path\n      value:\n      - ""\n    - name: percent\n      value:\n      - "60"\n    - name: errno\n      value:\n      - "28"\n')),(0,l.kt)("p",null,"\u6267\u884c\u547d\u4ee4\uff0c\u5f00\u59cb\u5b9e\u9a8c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f pod_io.yaml\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u67e5\u770b\u5b9e\u9a8c\u72b6\u6001")),(0,l.kt)("p",null,"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get blade inject-pod-by-labels -o json ")," \u547d\u4ee4\uff0c\u67e5\u770b\u5b9e\u9a8c\u72b6\u6001\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u89c2\u6d4b\u7ed3\u679c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8fdb\u5165\u5b9e\u9a8c pod\n$ kubectl exec -it test-7c9fc6fd88-7lx6b bash\n# \u5728 pod \u5185\u8bfb\u53d6\u6307\u5b9a\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\uff0c\u5982\u679c\u6ca1\u6709\u53ef\u4ee5\u65b0\u5efa\u4e00\u4e2a\n$ time cat /data/conf/test.yaml\ncat: read error: No space left on device\n\nreal    0m3.007s\nuser    0m0.002s\nsys     0m0.002s\n# \u56e0\u4e3a\u6709\u91cd\u8bd5\uff0c\u663e\u793a\u6709 3s \u7684\u5ef6\u8fdf\n# \u56e0\u4e3a\u8bbe\u7f6e\u4e86 60% \u7684\u5f02\u5e38\uff0c\u6240\u6709\u8fd8\u662f\u6709\u6210\u529f\u7684\u60c5\u51b5\n$ time cat /data/conf/test.yaml\n123\n\nreal    0m0.004s\nuser    0m0.002s\nsys     0m0.000s\n")),(0,l.kt)("p",null,"\u6587\u4ef6\u8bfb\u53d6\u5f02\u5e38\uff0c\u7ed3\u679c\u7b26\u5408\u9884\u671f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://tvax4.sinaimg.cn/large/ad5fbf65ly1gft2pqli3ug20p607i7nk.gif",alt:"io-pod-read"})),(0,l.kt)("p",null,"\u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u5bf9 read \u64cd\u4f5c\u6ce8\u5165\u4e24\u79cd\u5f02\u5e38\uff0c\u5f02\u5e38\u7387\u4e3a\u767e\u5206\u4e4b60:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"li"},"read")," \u64cd\u4f5c\u589e\u52a0 1s \u7684\u5ef6\u8fdf\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"li"},"read")," \u64cd\u4f5c\u8fd4\u56de\u9519\u8bef ",(0,l.kt)("inlineCode",{parentName:"li"},"28"),"\u3002")),(0,l.kt)("p",null,"\u8fd9\u91cc\u53ea\u662f\u505a\u4e86\u4e00\u79cd\u7c7b\u578b\u7684\u5b9e\u9a8c\uff0c\u66f4\u591a\u7684\u5b9e\u9a8c\u7c7b\u578b\u8be6\u89c1",(0,l.kt)("a",{parentName:"p",href:"https://chaosblade-io.gitbook.io/chaosblade-help-zh-cn/blade-create-k8s/blade-create-k8s-pod-io"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u505c\u6b62\u5b9e\u9a8c")),(0,l.kt)("p",null,"\u6267\u884c\u547d\u4ee4\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl delete -f pod_io.yaml")),(0,l.kt)("p",null,"\u6216\u8005\u76f4\u63a5\u5220\u9664 blade \u8d44\u6e90\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl delete blade inject-pod-by-labels")),(0,l.kt)("p",null,"\u5220\u9664\u6d4b\u8bd5 pod\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl delete -f io-test-pod.yaml")),(0,l.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,l.kt)("p",null,"\u672c\u7bc7\u6211\u4eec\u4f7f\u7528 ChaosBlade Operator \u5bf9 Kubernetes Pod \u8d44\u6e90\u8fdb\u884c\u6df7\u6c8c\u5de5\u7a0b\u5b9e\u9a8c\uff0c\u53ef\u4ee5\u770b\u5230 ChaosBlade \u7684\u64cd\u4f5c\u7b80\u5355\u6613\u61c2\u4e14\u529f\u80fd\u5f3a\u5927\uff0c\u901a\u8fc7\u6a21\u62df\u4e0d\u540c\u7684\u6545\u969c\uff0c\u53ef\u4ee5\u68c0\u9a8c\u6211\u4eec\u7cfb\u7edf\u76d1\u63a7\u62a5\u8b66\u7684\u65f6\u6548\u6027\uff0c\u4e5f\u53ef\u4ee5\u68c0\u9a8c\u6211\u4eec\u7cfb\u7edf\u5728\u9047\u5230\u6545\u969c\u65f6\u7684\u60c5\u51b5\uff0c\u6839\u636e\u8fd9\u4e9b\u60c5\u51b5\u5bf9\u7cfb\u7edf\u8fdb\u884c\u8c03\u6574\uff0c\u4ece\u800c\u5b8c\u5584\u7cfb\u7edf\u67b6\u6784\uff0c\u589e\u52a0\u53ef\u7528\u6027\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u53ea\u662f\u5bf9\u4e8e\u6bcf\u79cd\u573a\u666f\u8fdb\u884c\u4e86\u7b80\u5355\u7684\u5b9e\u9a8c\uff0c\u800c\u6bcf\u4e2a\u573a\u666f\u4e0d\u6b62\u6709\u4e00\u79cd\u5b9e\u9a8c\u65b9\u5f0f\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8c03\u6574\u53c2\u6570\u8fdb\u884c\u4e0d\u540c\u7684\u5b9e\u9a8c\u3002"))}m.isMDXComponent=!0}}]);