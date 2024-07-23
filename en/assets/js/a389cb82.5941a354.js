"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[3419],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return t?a.createElement(g,l(l({ref:n},d),{},{components:t})):a.createElement(g,l({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56313:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const i={title:"blade create"},l=void 0,o={unversionedId:"getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-create",id:"version-1.7.2/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-create",title:"blade create",description:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecdblade create\u547d\u4ee4\u4f7f\u7528",source:"@site/versioned_docs/version-1.7.2/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-create.md",sourceDirName:"getting-started/chaosblade-tool-quick-start/cli-mode-user-guide",slug:"/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-create",permalink:"/en/docs/1.7.2/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-create",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.2/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-create.md",tags:[],version:"1.7.2",frontMatter:{title:"blade create"},sidebar:"myAutogeneratedSidebar",previous:{title:"blade check",permalink:"/en/docs/1.7.2/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-check"},next:{title:"blade destroy",permalink:"/en/docs/1.7.2/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-destroy"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Exec",id:"exec",level:2},{value:"Examples",id:"examples",level:2},{value:"\u4e3b\u673a\u573a\u666f",id:"\u4e3b\u673a\u573a\u666f",level:3},{value:"K8S \u573a\u666f",id:"k8s-\u573a\u666f",level:3}],d={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd",(0,r.yg)("inlineCode",{parentName:"p"},"blade create"),"\u547d\u4ee4\u4f7f\u7528"),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("p",null,"\u521b\u5efa\u6df7\u6c8c\u5de5\u7a0b\u6f14\u7ec3\u5b9e\u9a8c\u3002\u6bcf\u4e2a\u5b9e\u9a8c\u5bf9\u5e94\u4e00\u4e2a ",(0,r.yg)("inlineCode",{parentName:"p"},"uid"),"\uff0c\u540e\u7eed\u7684\u67e5\u8be2\u3001\u9500\u6bc1\u5b9e\u9a8c\u90fd\u8981\u7528\u5230\u6b64 ",(0,r.yg)("inlineCode",{parentName:"p"},"uid"),"\uff0c\u5982\u679c\u9057\u5fd8\u4e86 ",(0,r.yg)("inlineCode",{parentName:"p"},"uid"),"\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"blade status --type create")," \u547d\u4ee4\u8fdb\u884c\u67e5\u8be2\u3002 ",(0,r.yg)("inlineCode",{parentName:"p"},"create")," \u53ef\u4ee5\u7b80\u5199\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"c"),"\uff0c\u5373 ",(0,r.yg)("inlineCode",{parentName:"p"},"blade create")," \u53ef\u4ee5\u7b80\u5199\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"blade c"),"\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"Usage:\n  blade create [command]\n\nAliases:\n  create, c\n\nblade create [target] [action] [flags]\n")),(0,r.yg)("h2",{id:"exec"},"Exec"),(0,r.yg)("p",null,"\u8fdb\u5165\u89e3\u538b\u5305\u672c\u5730\u6240\u653e\u7f6e\u7684\u8def\u5f84\uff0c\u53ef\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"p"},"blade create -h"),"\u67e5\u770b\u6240\u6709\u652f\u6301\u7684\u6f14\u7ec3\u573a\u666f\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"target"),"\uff0c\u5177\u4f53\u8be5",(0,r.yg)("inlineCode",{parentName:"p"},"target"),"\u4e0b\u652f\u6301\u90a3\u4e9b",(0,r.yg)("inlineCode",{parentName:"p"},"action"),"\u548c",(0,r.yg)("inlineCode",{parentName:"p"},"flags"),"\uff0c\u53ef\u901a\u8fc7\u5728\u547d\u4ee4\u540e\u9762\u52a0",(0,r.yg)("inlineCode",{parentName:"p"},"-h"),"\u6765\u8fdb\u884c\u67e5\u770b\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'[root@test chaosblade]# ./blade c -h\nCreate a chaos engineering experiment\n\nUsage:\n  blade create [command]\n\nAliases:\n  create, c\n\nExamples:\nblade create cpu load --cpu-percent 60\n\nAvailable Commands:\n  cplus       C++ chaos experiments\n  cpu         Cpu experiment\n  cri         CRI experiment\n  disk        Disk experiment\n  druid       Experiment with the Druid\n  dubbo       Experiment with the Dubbo\n  es          ElasticSearch experiment!\n  feign       feign experiment\n  file        File experiment\n  gateway     gateway experiment!\n  hbase       hbase experiment!\n  hsf         Hsf experiment\n  jedis       jedis experiment\n  jvm         Experiment with the JVM\n  k8s         Kubernetes experiment\n  kafka       kafka experiment\n  lettuce     redis client lettuce experiment\n  log         log experiment\n  mem         Mem experiment\n  mysql       mysql experiment\n  network     Network experiment\n  notify      notify send or receive message error\n  process     Process experiment\n  psql        Postgrelsql experiment\n  redisson    redisson experiment\n  rocketmq    Rocketmq experiment,can make message send or pull delay and exception\n  script      Script chaos experiment\n  sentinel    Sentinel experiment\n  servlet     java servlet experiment\n  shutdown    Support shutdown, halt or reboot experiment.\n  strace      strace experiment\n  stressng    stressng experiment\n  systemd     Systemd experiment\n  tair        Tair experiment\n  tars        tars experiment\n  tddl        Tddl experiment\n  time        Time experiment\n  zuul        Zuul experiment\n\nFlags:\n  -a, --async             whether to create asynchronously, default is false\n  -e, --endpoint string   the create result reporting address. It takes effect only when the async value is true and the value is not empty\n  -h, --help              help for create\n  -n, --nohup             used to internal async create, no need to config\n      --uid string        Set Uid for the experiment, adapt to docker and cri\n\nGlobal Flags:\n  -d, --debug   Set client to DEBUG mode\n\nUse "blade create [command] --help" for more information about a command.\n')),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("h3",{id:"\u4e3b\u673a\u573a\u666f"},"\u4e3b\u673a\u573a\u666f"),(0,r.yg)("p",null,"\u5728",(0,r.yg)("inlineCode",{parentName:"p"},"Host"),"\u8fdb\u884c cpu \u6ee1\u8f7d\u7684\u6f14\u7ec3\uff0c\u5177\u4f53\u652f\u6301\u53c2\u6570\uff0c\u53ef\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"p"},"./blade c cpu fullload -h"),"\u8fdb\u884c\u67e5\u770b\uff0c\u91cc\u9762\u4f1a\u6709\u5177\u4f53\u53c2\u6570\u89e3\u6790"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'# \u67e5\u770b create \u547d\u4ee4\u5e2e\u52a9\u6587\u6863\nblade create -h\n\n# \u67e5\u770b\u5982\u4f55\u521b\u5efa cpu \u6df7\u6c8c\u5b9e\u9a8c\nblade create cpu -h\n\n# \u67e5\u770b\u5982\u4f55\u521b\u5efa cpu \u6ee1\u8f7d\u5b9e\u9a8c\nblade create cpu fullload -h\n\n# \u521b\u5efa cpu \u6ee1\u8f7d\u5b9e\u9a8c\nblade create cpu fullload --cpu-count 1\n\n# \u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\n{"code":200,"success":true,"result":"6fa04946baf42920"}\n\n# code \u7684\u503c\u7b49\u4e8e 200 \u8bf4\u660e\u6267\u884c\u6210\u529f\uff0c\u5176\u4e2d result \u7684\u503c\u5c31\u662f uid\u3002\u4f7f\u7528 top \u547d\u4ee4\u9a8c\u8bc1\u5b9e\u9a8c\u6548\u679c\n%Cpu0  :100.0 us,  0.0 sy,  0.0 ni,  0.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st\n\n# \u9500\u6bc1\u4e0a\u8ff0\u5b9e\u9a8c\nblade destroy 6fa04946baf42920\n\n# \u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\n{"code":200,"success":true,"result":"command: cpu fullload --cpu-count 2 --debug false --help false"}\n\n# \u8fd4\u56de\u503c\u4f1a\u6253\u5370\u6b64\u6b21\u5b9e\u9a8c\u7684\u547d\u4ee4\u3002\u518d\u6b21\u4f7f\u7528 top \u547d\u4ee4\u9a8c\u8bc1\u5b9e\u9a8c\u6548\u679c\n%Cpu0  :  0.3 us,  0.3 sy,  0.0 ni, 99.3 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u5176\u4e2d\u4e0a\u8ff0\u7ed3\u679c\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"6fa04946baf42920"),"\u5c31\u662f\u8be5\u6b21\u6f14\u7ec3\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"uid"))),(0,r.yg)("h3",{id:"k8s-\u573a\u666f"},"K8S \u573a\u666f"),(0,r.yg)("p",null,"\u5728",(0,r.yg)("inlineCode",{parentName:"p"},"Kubernetes"),"\u5bf9\u96c6\u7fa4\u4e2d ",(0,r.yg)("inlineCode",{parentName:"p"},"default")," namespace \u4e2d\u7684\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"nginx-swer23kj-12345")," pod \u8fdb\u884c cpu \u6ee1\u8f7d\u6f14\u7ec3"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'# \u67e5\u770b\u5982\u4f55\u521b\u5efa k8s \u6df7\u6c8c\u5b9e\u9a8c\nblade create k8s -h\n\n# \u67e5\u770b\u5982\u4f55\u521b\u5efa k8s\u4e0bpod cpu \u6ee1\u8f7d\u5b9e\u9a8c\nblade create k8s pod-cpu fullload -h\n\n# \u521b\u5efa cpu \u6ee1\u8f7d\u5b9e\u9a8c\nblade c k8s pod-cpu fullload --cpu-percent 100 --names nginx-swer23kj-12345 --namespace default --kubeconfig ~/.kube/config\n\n# \u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\n{"code":200,"success":true,"result":"6fa04946baf42920"}\n\n# \u9500\u6bc1\u4e0a\u8ff0\u5b9e\u9a8c\nblade destroy 6fa04946baf42920\n')),(0,r.yg)("p",null,"\u53ef\u901a ",(0,r.yg)("inlineCode",{parentName:"p"},"kubectl top"),"\u547d\u4ee4\u9a8c\u8bc1\u5b9e\u9a8c\u6548\u679c\uff0c\u5e76\u548c pod \u4e2d resource limit \u8fdb\u884c\u6bd4\u8f83"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"kubectl top pod nginx-swer23kj-12345 -n default\n")))}u.isMDXComponent=!0}}]);