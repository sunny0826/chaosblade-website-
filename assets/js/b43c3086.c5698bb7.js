"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[69312],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>b});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),i=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(n),g=a,b=u["".concat(d,".").concat(g)]||u[g]||p[g]||s;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=g;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var i=2;i<s;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},41498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var r=n(58168),a=(n(96540),n(15680));const s={title:"blade status"},o=void 0,l={unversionedId:"getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-status",id:"version-1.7.3/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-status",title:"blade status",description:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecdblade status\u547d\u4ee4\u4f7f\u7528",source:"@site/versioned_docs/version-1.7.3/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-status.md",sourceDirName:"getting-started/chaosblade-tool-quick-start/cli-mode-user-guide",slug:"/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-status",permalink:"/docs/1.7.3/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-status",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.3/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-status.md",tags:[],version:"1.7.3",frontMatter:{title:"blade status"},sidebar:"myAutogeneratedSidebar",previous:{title:"blade revoke",permalink:"/docs/1.7.3/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-revoke"},next:{title:"blade version",permalink:"/docs/1.7.3/getting-started/chaosblade-tool-quick-start/cli-mode-user-guide/blade-version"}},d={},i=[{value:"Usage",id:"usage",level:2},{value:"Exec",id:"exec",level:2},{value:"Examples",id:"examples",level:2},{value:"Q&amp;A",id:"qa",level:2}],c={toc:i},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd",(0,a.yg)("inlineCode",{parentName:"p"},"blade status"),"\u547d\u4ee4\u4f7f\u7528"),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)("p",null,"\u67e5\u8be2\u6df7\u6c8c\u5b9e\u9a8c\u548c\u6df7\u6c8c\u5b9e\u9a8c\u73af\u5883\u72b6\u6001\uff0c\u53ef\u901a\u8fc7\u521b\u5efa\u7684\u6df7\u6c8c\u5b9e\u9a8c\u7684 uid \u6216\u547d\u4ee4\u7c7b\u578b\u6765\u67e5\u8be2\u6df7\u6c8c\u5b9e\u9a8c\u3002 status \u53ef\u4ee5\u7b80\u5199\u4e3a s\uff0c\u5373 ",(0,a.yg)("inlineCode",{parentName:"p"},"blade status")," \u53ef\u4ee5\u7b80\u5199\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"blade s"),"\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Usage:\n  blade status\n\nAliases:\n  status, s\n\nblade status [flags]\n")),(0,a.yg)("h2",{id:"exec"},"Exec"),(0,a.yg)("p",null,"\u8fdb\u5165\u89e3\u538b\u5305\u672c\u5730\u6240\u653e\u7f6e\u7684\u8def\u5f84\uff0c\u53ef\u901a\u8fc7",(0,a.yg)("inlineCode",{parentName:"p"},"blade status -h"),"\u67e5\u770b\u652f\u6301\u547d\u4ee4\u548c\u53c2\u6570\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"  --asc bool        \u9ed8\u8ba4\u503c\u4e3a false\uff0c\u6309 CreateTime \u8fdb\u884c\u964d\u5e8f\u6392\u5e8f\n  --limit string    \u67e5\u8be2\u5b9e\u9a8c\u6570\u76ee\u9650\u5236\uff0c\u652f\u6301 OFFSET \u5b50\u53e5\uff0c\u4f8b\u5982\uff1alimit 4,3 \u5c31\u8868\u793a\u4ece\u4f4d\u7f6e5\u5f00\u59cb\uff0c\u8fd4\u56de\u540e3\u9879\n  --status string   \u5b9e\u9a8c\u72b6\u6001\uff0ccreate \u7c7b\u578b\u652f\u6301 Created|Success|Error|Destroyed \u72b6\u6001\uff0cprepare \u7c7b\u578b\u652f\u6301 Created|Running|Error|Revoked \u72b6\u6001\n  --target string   \u5b9e\u9a8c\u76ee\u6807\uff0c\u4f8b\u5982\uff1adubbo\n  --type string     \u547d\u4ee4\u7c7b\u578b\uff0cattach|create|destroy|detach\n  --uid string      prepare \u6216 experiment \u7684 uid\n  -h, --help        \u67e5\u770b create \u547d\u4ee4\u5e2e\u52a9\n\n# \u53ef\u4f7f\u7528\u7684\u7236\u547d\u4ee4\u53c2\u6570\n  -d, --debug   \u8bbe\u7f6e DEBUG \u6267\u884c\u6a21\u5f0f\n")),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'# \u67e5\u770b status \u547d\u4ee4\u5e2e\u52a9\u6587\u6863\nblade status -h\n\n# \u67e5\u8be2 uid \u4e3a 4c6b4a3fc313e1d4 \u7684\u5b9e\u9a8c\u4fe1\u606f\nblade status 4c6b4a3fc313e1d4\n{\n        "code": 200,\n        "success": true,\n        "result": {\n            "Uid": "4c6b4a3fc313e1d4",\n            "Command": "cpu",\n            "SubCommand": "fullload",\n            "Flag": " --cpu-percent=60",\n            "Status": "Destroyed",\n            "Error": "",\n            "CreateTime": "2020-01-14T14:09:49.152708+08:00",\n            "UpdateTime": "2020-01-14T14:10:45.605888+08:00"\n        }\n}\n\n# \u67e5\u8be2 create \u7c7b\u578b\u547d\u4ee4\u7684\u5b9e\u9a8c\u4fe1\u606f\nblade status --type create\n{\n        "code": 200,\n        "success": true,\n        "result": [\n            {\n                "Uid": "4c6b4a3fc313e1d4",\n                "Command": "cpu",\n                "SubCommand": "fullload",\n                "Flag": " --cpu-percent=60",\n                "Status": "Destroyed",\n                "Error": "",\n                "CreateTime": "2020-01-14T14:09:49.152708+08:00",\n                "UpdateTime": "2020-01-14T14:10:45.605888+08:00"\n            }\n        ]\n}\n\n# \u67e5\u8be2 prepare \u7c7b\u578b\u547d\u4ee4\u7684\u5b9e\u9a8c\u4fe1\u606f\nblade status --type prepare\n{\n        "code": 200,\n        "success": true,\n        "result": [\n                {\n                        "Uid": "e669d57f079a00cc",\n                        "ProgramType": "jvm",\n                        "Process": "dubbo.consumer",\n                        "Port": "59688",\n                        "Status": "Running",\n                        "Error": "",\n                        "CreateTime": "2019-03-29T16:19:37.284579975+08:00",\n                        "UpdateTime": "2019-03-29T17:05:14.183382945+08:00"\n                }\n        ]\n}\n')),(0,a.yg)("h2",{id:"qa"},"Q&A"),(0,a.yg)("p",null,'Q:{"code":406,"success":false,"error":"data not found"}\nA:\u67e5\u8be2\u7684\u5b9e\u9a8c\u4e0d\u5b58\u5728\uff0c\u53ef\u80fd\u662f\u6570\u636e\u6587\u4ef6 chaosblade.dat \u4e22\u5931\uff0c\u8fd9\u65f6\u5982\u679c\u9700\u8981\u505c\u6b62\u5b9e\u9a8c\uff0c\u9700\u8981\u624b\u5de5\u505c\u6b62 blade \u8fdb\u7a0b'))}p.isMDXComponent=!0}}]);