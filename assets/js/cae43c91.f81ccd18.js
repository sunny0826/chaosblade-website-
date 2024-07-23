"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[18804],{15680:(e,l,n)=>{n.d(l,{xA:()=>c,yg:()=>p});var t=n(96540);function a(e,l,n){return l in e?Object.defineProperty(e,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[l]=n,e}function u(e,l){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?u(Object(n),!0).forEach((function(l){a(e,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))}))}return e}function i(e,l){if(null==e)return{};var n,t,a=function(e,l){if(null==e)return{};var n,t,a={},u=Object.keys(e);for(t=0;t<u.length;t++)n=u[t],l.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)n=u[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=t.createContext({}),d=function(e){var l=t.useContext(r),n=l;return e&&(n="function"==typeof e?e(l):o(o({},l),e)),n},c=function(e){var l=d(e.components);return t.createElement(r.Provider,{value:l},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var l=e.children;return t.createElement(t.Fragment,{},l)}},y=t.forwardRef((function(e,l){var n=e.components,a=e.mdxType,u=e.originalType,r=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=d(n),y=a,p=s["".concat(r,".").concat(y)]||s[y]||g[y]||u;return n?t.createElement(p,o(o({ref:l},c),{},{components:n})):t.createElement(p,o({ref:l},c))}));function p(e,l){var n=arguments,a=l&&l.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=y;var i={};for(var r in l)hasOwnProperty.call(l,r)&&(i[r]=l[r]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<u;d++)o[d]=n[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},65148:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>r,contentTitle:()=>o,default:()=>g,frontMatter:()=>u,metadata:()=>i,toc:()=>d});var t=n(58168),a=(n(96540),n(15680));const u={title:"blade check"},o=void 0,i={unversionedId:"getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-check",id:"version-1.7.1/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-check",title:"blade check",description:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecdblade check\u547d\u4ee4\u4f7f\u7528",source:"@site/versioned_docs/version-1.7.1/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-check.md",sourceDirName:"getting-started/chaosblade-tool-quick-start/cli-mode-user-guide",slug:"/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-check",permalink:"/docs/1.7.1/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-check",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.1/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-check.md",tags:[],version:"1.7.1",frontMatter:{title:"blade check"},sidebar:"myAutogeneratedSidebar",previous:{title:"CLI Mode User Guide",permalink:"/docs/1.7.1/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/"},next:{title:"blade create",permalink:"/docs/1.7.1/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-create"}},r={},d=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"Exec",id:"exec",level:2},{value:"Examples",id:"examples",level:2},{value:"\u62a5\u9519\u7ed3\u679c\u548c\u5bf9\u5e94\u5904\u7406\u65b9\u6cd5",id:"\u62a5\u9519\u7ed3\u679c\u548c\u5bf9\u5e94\u5904\u7406\u65b9\u6cd5",level:2}],c={toc:d},s="wrapper";function g(e){let{components:l,...n}=e;return(0,a.yg)(s,(0,t.A)({},c,n,{components:l,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd",(0,a.yg)("inlineCode",{parentName:"p"},"blade check"),"\u547d\u4ee4\u4f7f\u7528"),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)("p",null,"\u8be5\u547d\u4ee4\u4e3b\u8981\u7528\u4e8e",(0,a.yg)("strong",{parentName:"p"},"Linux \u4e3b\u673a"),"\u4e0a\u6f14\u7ec3\u5b9e\u9a8c\u65f6\uff0c\u5bf9\u4e3b\u673a\u73af\u5883\u8fdb\u884c\u6821\u9a8c\uff0c\u5224\u65ad\u5176\u662f\u5426\u6ee1\u8db3 chaosblade \u5b9e\u9a8c\u73af\u5883"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"Usage:\n  blade check\n  blade check [command]\n\nAliases:\n  check, k\n\nblade check [target] [action]\n")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u547d\u4ee4\u76ee\u524d\u652f\u6301\u6821\u9a8c\uff0c Linux \u4e3b\u673a\u7cfb\u7edf\u5c42\u573a\u666f\u548c java \u573a\u666f \u73af\u5883\u6240\u9700\u914d\u7f6e\uff0c\u5982\u76f8\u5173\u7cfb\u7edf\u547d\u4ee4\u5de5\u5177\u6216 java \u4e0d\u5b58\u5728\u65f6\uff0c\u53ef\u5728\u6f14\u7ec3\u6267\u884c\u524d\u8fdb\u884c\u5b89\u88c5\u3002"),(0,a.yg)("h2",{id:"exec"},"Exec"),(0,a.yg)("p",null,"\u8fdb\u5165\u89e3\u538b\u5305\u672c\u5730\u6240\u653e\u7f6e\u7684\u8def\u5f84\uff0c\u53ef\u901a\u8fc7",(0,a.yg)("inlineCode",{parentName:"p"},"./blade check -h"),"\u67e5\u770b\u6240\u6709\u652f\u6301\u7684 target\uff0c\u76ee\u524d\u652f\u6301\u4e24\u79cd"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"OS\uff1a\u9a8c\u8bc1 Linux \u4e3b\u673a\u7cfb\u7edf\u5c42\u573a\u666f\u6240\u9700\u73af\u5883\u662f\u5426\u652f\u6301"),(0,a.yg)("li",{parentName:"ul"},"Java\uff1a\u9a8c\u8bc1 Java \u5e94\u7528\u5c42\u573a\u666f\u6240\u9700\u73af\u5883\u662f\u5426\u652f\u6301")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'[root@test chaosblade]# ./blade check -h\nCheck the environment for chaosblade\n\nUsage:\n  blade check\n  blade check [command]\n\nAliases:\n  check, k\n\nExamples:\ncheck os\n\nAvailable Commands:\n  java        Check the environment of java for chaosblade\n  os          Check the environment of os for chaosblade\n\nFlags:\n  -h, --help   help for check\n\nGlobal Flags:\n  -d, --debug   Set client to DEBUG mode\n\nUse "blade check [command] --help" for more information about a command.\n')),(0,a.yg)("p",null,"\u53ef\u901a\u8fc7",(0,a.yg)("inlineCode",{parentName:"p"},"./blade check os -h"),"\u67e5\u770b\u4e3b\u673a\u7cfb\u7edf\u4e0b\u5177\u4f53\u6f14\u7ec3\u5b9e\u9a8c\u573a\u666f\uff0c\u662f\u5426\u7b26\u5408\u53ef\u4ee5\u6267\u884c\u7684\u6761\u4ef6\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'[root@test chaosblade]# ./blade check os -h\nCheck the environment of os for chaosblade\n\nUsage:\n  blade check os\n  blade check os [command]\n\nExamples:\ncheck os\n\nAvailable Commands:\n  cpu         Cpu experiment\n  disk        Check disk experiment\n  men         Mem experiment\n  network     Network experiment\n\nFlags:\n  -h, --help   help for os\n\nGlobal Flags:\n  -d, --debug   Set client to DEBUG mode\n\nUse "blade check os [command] --help" for more information about a command.\n')),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("p",null,"\u6821\u9a8c\u4e3b\u673a\u662f\u5426\u5177\u5907\u6f14\u7ec3\u7cfb\u7edf\u5c42\u573a\u666f",(0,a.yg)("inlineCode",{parentName:"p"},"cpu fullload"),"\uff08cpu \u6ee1\u8f7d\uff09\u7684\u73af\u5883"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"[root@test chaosblade]# ./blade check os cpu fullload\n")),(0,a.yg)("p",null,"\u6821\u9a8c\u4e3b\u673a\u662f\u5426\u5177\u5907\u6f14\u7ec3\u6240\u6709\u7cfb\u7edf\u5c42\u573a\u666f\u7684\u73af\u5883"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"[root@test chaosblade]# ./blade check os\n")),(0,a.yg)("h2",{id:"\u62a5\u9519\u7ed3\u679c\u548c\u5bf9\u5e94\u5904\u7406\u65b9\u6cd5"},"\u62a5\u9519\u7ed3\u679c\u548c\u5bf9\u5e94\u5904\u7406\u65b9\u6cd5"),(0,a.yg)("table",null,(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("b",null,"\u9519\u8bef\u8fd4\u56de\u4e2d\u7684error\u4fe1\u606f")),(0,a.yg)("td",null,(0,a.yg)("b",null,"\u5bf9\u5e94\u89e3\u91ca")),(0,a.yg)("td",null,(0,a.yg)("b",null,"\u76f8\u5e94\u5904\u7406\u65b9\u6cd5"))),(0,a.yg)("tr",null,(0,a.yg)("td",null,"[failed] cpu fullload, failed! `taskset` command exists "),(0,a.yg)("td",null," taskset \u547d\u4ee4\u4e0d\u5b58\u5728 "),(0,a.yg)("td",null,(0,a.yg)("ul",null,"\u5b89\u88c5taskset\uff0ctaskset\u5de5\u5177\u5728linux\u662f util-linux \u5305\u7684\u4e00\u90e8\u5206:",(0,a.yg)("li",null," Debian\u3001Ubuntu \u6216 Linux Mint "),(0,a.yg)("dl",null,(0,a.yg)("dd",null,"sudo apt-get install util-linux")),(0,a.yg)("li",null," CentOS\u3001Fedora \u6216 RHEL "),(0,a.yg)("dl",null,(0,a.yg)("dd",null,"sudo yum install util-linux"))))),(0,a.yg)("tr",null,(0,a.yg)("td",null,"[failed] men load, failed! `mount` command exists "),(0,a.yg)("td",null," mount \u547d\u4ee4\u4e0d\u5b58\u5728 "),(0,a.yg)("td",null,(0,a.yg)("ul",null,"\u5b89\u88c5mount\uff0cmount\u5de5\u5177\u5728linux\u662f util-linux \u5305\u7684\u4e00\u90e8\u5206:",(0,a.yg)("li",null," Debian\u3001Ubuntu \u6216 Linux Mint "),(0,a.yg)("dl",null,(0,a.yg)("dd",null,"sudo apt-get install util-linux ")),(0,a.yg)("li",null," CentOS\u3001Fedora \u6216 RHEL "),(0,a.yg)("dl",null,(0,a.yg)("dd",null,"sudo yum install util-linux"))))),(0,a.yg)("tr",null,(0,a.yg)("td",null,"[failed] men load, failed! `umount` command exists "),(0,a.yg)("td",null," umount \u547d\u4ee4\u4e0d\u5b58\u5728 "),(0,a.yg)("td",null,(0,a.yg)("ul",null,"\u5b89\u88c5umount\uff0cumount\u5de5\u5177\u5728linux\u662f util-linux \u5305\u7684\u4e00\u90e8\u5206:",(0,a.yg)("li",null," Debian\u3001Ubuntu \u6216 Linux Mint "),(0,a.yg)("dl",null,(0,a.yg)("dd",null,"sudo apt-get install util-linux ")),(0,a.yg)("li",null," CentOS\u3001Fedora \u6216 RHEL "),(0,a.yg)("dl",null,(0,a.yg)("dd",null,"sudo yum install util-linux"))))),(0,a.yg)("tr",null,(0,a.yg)("td",null,"[failed] men load, failed! `tc` command exists "),(0,a.yg)("td",null," tc \u547d\u4ee4\u4e0d\u5b58\u5728 "),(0,a.yg)("td",null,(0,a.yg)("ul",null,"\u5b89\u88c5tc\uff0ctc\u5de5\u5177\u662f\u7ed1\u5b9a\u5728iproute\u800c\u6765\u7684\uff0c\u6240\u4ee5\u5b89\u88c5 iproute\u5373\u53ef",(0,a.yg)("li",null," Debian\u3001Ubuntu \u6216 Linux Mint "),(0,a.yg)("dl",null,(0,a.yg)("dd",null,"sudo apt-get install iproute ")),(0,a.yg)("li",null," CentOS\u3001Fedora \u6216 RHEL "),(0,a.yg)("dl",null,(0,a.yg)("dd",null,"sudo yum install iproute"))))),(0,a.yg)("tr",null,(0,a.yg)("td",null,"[failed] ****, failed! `iptables` command exists "),(0,a.yg)("td",null," iptables \u547d\u4ee4\u4e0d\u5b58\u5728 "),(0,a.yg)("td",null,(0,a.yg)("ul",null,"\u5b89\u88c5iptables:",(0,a.yg)("li",null," Debian\u3001Ubuntu \u6216 Linux Mint "),(0,a.yg)("dl",null,(0,a.yg)("dd",null,"sudo apt-get install iptables ")),(0,a.yg)("li",null," CentOS\u3001Fedora \u6216 RHEL "),(0,a.yg)("dl",null,(0,a.yg)("dd",null,"sudo yum install iptables "))))),(0,a.yg)("tr",null,(0,a.yg)("td",null,"[failed] ****, failed! `ss` command exists "),(0,a.yg)("td",null," ss \u547d\u4ee4\u4e0d\u5b58\u5728 "),(0,a.yg)("td",null,(0,a.yg)("ul",null,"\u5b89\u88c5ss\uff0css\u5de5\u5177\u662f\u7ed1\u5b9a\u5728iproute\u800c\u6765\u7684\uff0c\u6240\u4ee5\u5b89\u88c5iproute\u5373\u53ef",(0,a.yg)("li",null," Debian\u3001Ubuntu \u6216 Linux Mint "),(0,a.yg)("dl",null,(0,a.yg)("dd",null,"sudo apt-get install iproute ")),(0,a.yg)("li",null," CentOS\u3001Fedora \u6216 RHEL "),(0,a.yg)("dl",null,(0,a.yg)("dd",null,"  sudo yum install iproute")))))))}g.isMDXComponent=!0}}]);