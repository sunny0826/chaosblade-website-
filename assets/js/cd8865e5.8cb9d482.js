"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[38407],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(t),u=o,y=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return t?a.createElement(y,l(l({ref:n},d),{},{components:t})):a.createElement(y,l({ref:n},d))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},34208:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=t(58168),o=(t(96540),t(15680));const r={title:"\u6a21\u62df Pod \u6587\u4ef6\u7cfb\u7edfI/O\u5f02\u5e38"},l=void 0,i={unversionedId:"experiment-types/k8s/pod/blade_create_k8s_pod-IO",id:"version-1.7.3/experiment-types/k8s/pod/blade_create_k8s_pod-IO",title:"\u6a21\u62df Pod \u6587\u4ef6\u7cfb\u7edfI/O\u5f02\u5e38",description:"\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7.3/experiment-types/k8s/pod/blade_create_k8s_pod-IO.md",sourceDirName:"experiment-types/k8s/pod",slug:"/experiment-types/k8s/pod/blade_create_k8s_pod-IO",permalink:"/docs/1.7.3/experiment-types/k8s/pod/blade_create_k8s_pod-IO",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.3/experiment-types/k8s/pod/blade_create_k8s_pod-IO.md",tags:[],version:"1.7.3",frontMatter:{title:"\u6a21\u62df Pod \u6587\u4ef6\u7cfb\u7edfI/O\u5f02\u5e38"},sidebar:"myAutogeneratedSidebar",previous:{title:"Pod",permalink:"/docs/1.7.3/experiment-types/k8s/pod/"},next:{title:"\u6a21\u62df Pod \u4e0d\u53ef\u7528",permalink:"/docs/1.7.3/experiment-types/k8s/pod/blade_create_k8s_pod-fail"}},s={},p=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2}],d={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,o.yg)("p",null,"k8s pod \u6587\u4ef6\u7cfb\u7edf I/O \u5f02\u5e38\u573a\u666f\uff0c\u53ef\u4ee5\u6a21\u62df\u5bf9\u6307\u5b9a\u8def\u5f84\u4e0a\u7684\u6587\u4ef6\u8bfb\u5199\u5f02\u5e38\uff0c\u5305\u62ec\u5ef6\u8fdf\uff0c\u9519\u8bef\u7b49."),(0,o.yg)("p",null,"\u6ce8\u610f\uff01\uff01\uff01\u6b64\u573a\u666f\u9700\u8981\u6fc0\u6d3b",(0,o.yg)("inlineCode",{parentName:"p"},"--webhook-enable"),"\u53c2\u6570\uff0c\u5982\u9700\u4f7f\u7528\u6b64\u529f\u80fd\uff0c\u8bf7\u5728 chaosblade-operator \u53c2\u6570\u4e2d\u6dfb\u52a0 ",(0,o.yg)("inlineCode",{parentName:"p"},"--webhook-enable"),"\uff0c\u6216\u8005\u5728\u5b89\u88c5\u65f6\u6307\u5b9a\uff0c\u4f8b\u5982 helm \u5b89\u88c5\u65f6\uff1a\n",(0,o.yg)("inlineCode",{parentName:"p"},"--set webhook.enable=true")," \u6307\u5b9a\u3002"),(0,o.yg)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u96c6\u7fa4\u4e2d\u90e8\u7f72\u4e86 chaosblade-admission-webhook"),(0,o.yg)("li",{parentName:"ul"},"\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 volume \u8bbe\u7f6e mountPropagation \u4e3a HostToContainer"),(0,o.yg)("li",{parentName:"ul"},"pod \u4e0a\u9762\u6dfb\u52a0\u4e86\u5982\u4e0b annotations:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'chaosblade/inject-volume: "data" #\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684volume name\nchaosblade/inject-volume-subpath: "conf" #volume\u6302\u8f7d\u7684\u5b50\u76ee\u5f55\n')),(0,o.yg)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,o.yg)("p",null,"blade create k8s pod-pod IO"),(0,o.yg)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.yg)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u57fa\u7840\u573a\u666f\u5404\u81ea\u6240\u9700\u7684\u53c2\u6570\u5916\uff0c\u5728 kubernetes \u73af\u5883\u4e0b\uff0c\u8fd8\u652f\u6301\u7684\u53c2\u6570\u5982\u4e0b\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"--namespace string       Pod \u6240\u5c5e\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u53ea\u80fd\u586b\u5199\u4e00\u4e2a\u503c\uff0c\u5fc5\u586b\u9879\n--evict-count string     \u9650\u5236\u5b9e\u9a8c\u751f\u6548\u7684\u6570\u91cf\n--evict-percent string   \u9650\u5236\u5b9e\u9a8c\u751f\u6548\u6570\u91cf\u7684\u767e\u5206\u6bd4\uff0c\u4e0d\u5305\u542b %\n--labels string          Pod \u8d44\u6e90\u6807\u7b7e\uff0c\u591a\u4e2a\u6807\u7b7e\u4e4b\u524d\u662f\u6216\u7684\u5173\u7cfb\n--names string           Pod \u8d44\u6e90\u540d\n--kubeconfig string      kubeconfig \u6587\u4ef6\u5168\u8def\u5f84\uff08\u4ec5\u9650\u4f7f\u7528 blade \u547d\u4ee4\u8c03\u7528\u65f6\u4f7f\u7528\uff09\n--waiting-time string    \u5b9e\u9a8c\u7ed3\u679c\u7b49\u5f85\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 20s\uff0c\u53c2\u6570\u503c\u8981\u5305\u542b\u5355\u4f4d\uff0c\u4f8b\u5982 10s\uff0c1m\n--methods string         I/O\u6545\u969c\u65b9\u6cd5\n--delay   string         I/O\u5ef6\u8fdf\u65f6\u95f4\n--errno   string         \u6307\u5b9a\u7279\u6027\u7684I/O\u5f02\u5e38\u9519\u8bef\u7801\n--random  string         \u968f\u673a\u4ea7\u751fI/O\u5f02\u5e38\u9519\u8bef\u7801\n--percent string         I/O\u9519\u8bef\u767e\u5206\u6bd4 [0-100]\n--path    string         I/O\u5f02\u5e38\u7684\u76ee\u5f55\u6216\u8005\u6587\u4ef6\n")),(0,o.yg)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,o.yg)("p",null,"\u9996\u5148\uff0c\u901a\u8fc7 deployment \u90e8\u7f72\u6d4b\u8bd5 pod\uff0c\u5e76\u5728 pod \u7684 annotation \u91cc\u9762\u6307\u5b9a\u9700\u8981\u6ce8\u5165 I/O \u5f02\u5e38\u7684 volume \u4ee5\u53ca\u5b50\u76ee\u5f55\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  labels:\n    app: test\n  name: test\n  namespace: test\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: test\n  template:\n    metadata:\n      annotations:\n        chaosblade/inject-volume: data\n        chaosblade/inject-volume-subpath: conf\n      labels:\n        app: test\n    spec:\n      containers:\n        - command: ["/bin/sh", "-c", "while true; do sleep 10000; done"]\n          image: busybox\n          imagePullPolicy: IfNotPresent\n          name: test\n          volumeMounts:\n            - mountPath: /data\n              mountPropagation: HostToContainer\n              name: data\n      volumes:\n        - hostPath:\n            path: /data/fuse\n          name: data\n')),(0,o.yg)("p",null,"chaosblade webhook \u4f1a\u6839\u636e pod \u7684 annotation\uff0c\u6ce8\u5165 fuse \u7684 sidecar \u5bb9\u5668\uff1a"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"chaosblade/inject-volume"),"\u6307\u660e\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 volume name\uff0c\u6bd4\u5982\u4f8b\u5b50\u4e2d\u7684",(0,o.yg)("inlineCode",{parentName:"li"},"data")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"chaosblade/inject-volume-subpath"),"\u6307\u660e volume \u6302\u8f7d\u8def\u5f84\u7684\u5b50\u76ee\u5f55\u3002\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0cvolume \u7684\u6302\u8f7d\u8def\u5f84\u662f",(0,o.yg)("inlineCode",{parentName:"li"},"/data"),",\u5b50\u76ee\u5f55\u662f",(0,o.yg)("inlineCode",{parentName:"li"},"conf"),"\uff0c\u5219\u5728 pod \u5185\uff0c\u6ce8\u5165 I/O \u5f02\u5e38\u7684\u76ee\u5f55\u662f",(0,o.yg)("inlineCode",{parentName:"li"},"/data/conf"),"\u3002"),(0,o.yg)("li",{parentName:"ol"},"\u6307\u5b9a\u9700\u8981\u6ce8\u5165\u6545\u969c\u7684 volume \u9700\u8981\u6307\u5b9a",(0,o.yg)("inlineCode",{parentName:"li"},"mountPropagation\uff1aHostToContainer"),"\uff0c\u8fd9\u4e2a\u5b57\u6bb5\u7684\u542b\u4e49\u53ef\u4ee5\u53c2\u8003\u5b98\u65b9\u6587\u6863",(0,o.yg)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/volumes/#mount-propagation"},"Volumes"))),(0,o.yg)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684 yaml \u6587\u4ef6\u521b\u5efa deployment \u540e\uff0cchaosblade webhook \u4f1a\u81ea\u52a8\u63d2\u5165 sidecar \u5bb9\u5668\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n test\nNAME                   READY   STATUS    RESTARTS   AGE\ntest-bc7786698-k6tb7   2/2     Running   0          3m40s\n")),(0,o.yg)("p",null,"\u8fd9\u65f6\u867d\u7136\u63d2\u5165\u4e86 sidecar \u5bb9\u5668\uff0c\u4f46\u662f\u8fd8\u6ca1\u6709\u6ce8\u5165 I/O \u5f02\u5e38\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684 yaml \u6ce8\u5165\u76f8\u5173\u7684 I/O \u5f02\u5e38\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: chaosblade.io/v1alpha1\nkind: ChaosBlade\nmetadata:\n  name: inject-pod-by-labels\nspec:\n  experiments:\n    - scope: pod\n      target: pod\n      action: IO\n      desc: "Pod IO Exception by labels"\n      matchers:\n        - name: labels\n          value:\n            - "app=test"\n        - name: namespace\n          value:\n            - "test"\n        - name: method\n          value:\n            - "read"\n        - name: delay\n          value:\n            - "1000"\n        - name: path\n          value:\n            - ""\n        - name: percent\n          value:\n            - "60"\n        - name: errno\n          value:\n            - "28"\n')),(0,o.yg)("p",null,"\u5728\u8fd9\u91cc\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5bf9",(0,o.yg)("inlineCode",{parentName:"p"},"read"),"\u64cd\u4f5c\u6ce8\u5165\u4e24\u79cd\u5f02\u5e38\uff0c\u5f02\u5e38\u7387\u4e3a\u767e\u5206\u4e4b 60:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u5bf9",(0,o.yg)("inlineCode",{parentName:"li"},"read"),"\u64cd\u4f5c\u589e\u52a0 1s \u7684\u5ef6\u8fdf\uff0c\u652f\u6301\u7684\u64cd\u4f5c\u7c7b\u578b\u5305\u62ec\uff1a")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"1. open\n2. read\n3. write\n4. mkdir\n5. rmdir\n6. opendir\n7. fsync\n8. flush\n9. release\n10. truncate\n11. getattr\n12. chown\n13. chmod\n14. utimens\n15. allocate\n16. getlk\n17. setlk\n18. setlkw\n19. statfs\n20. readlink\n21. symlink\n22. create\n23. access\n24. link\n25. mknod\n26. rename\n27. unlink\n28. getxattr\n29. listxattr\n30. removexattr\n31. setxattr\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u5bf9",(0,o.yg)("inlineCode",{parentName:"li"},"read"),"\u64cd\u4f5c\u8fd4\u56de\u9519\u8bef",(0,o.yg)("inlineCode",{parentName:"li"},"28"),"\uff0c\u652f\u6301\u7684\u9519\u8bef\u7801\u5305\u62ec:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"1: Operation not permitted\n2: No such file or directory\n5: I/O error\n6: No such device or address\n12: Out of memory\n16: Device or resource busy\n17: File exists\n20: Not a directory\n22: Invalid argument\n24: Too many open files\n28: No space left on device\n")),(0,o.yg)("p",null,"\u5f53\u7528\u4e0a\u9762\u7684 yaml \u6587\u4ef6\u6ce8\u5165 I/O \u5f02\u5e38\u540e\uff0c\u5728 pod \u5185\u8bfb\u53d6\u6307\u5b9a\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\uff0c\u53d1\u73b0\u8fd4\u56de\u4e86",(0,o.yg)("inlineCode",{parentName:"p"},"No space left on device"),"\uff0c\u56e0\u4e3a\u6709\u91cd\u8bd5\uff0c\u663e\u793a\u6709",(0,o.yg)("inlineCode",{parentName:"p"},"3s"),"\u7684\u5ef6\u8fdf\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl exec  test-bc7786698-k6tb7 -c test -n test time cat /data/conf/file\ncat: read error: No space left on device\nCommand exited with non-zero status 1\nreal    0m 3.00s\nuser    0m 0.00s\nsys     0m 0.00s\n")))}m.isMDXComponent=!0}}]);