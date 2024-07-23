"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[49667],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>v});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,v=d["".concat(i,".").concat(u)]||d[u]||m[u]||p;return t?n.createElement(v,o(o({ref:r},s),{},{components:t})):n.createElement(v,o({ref:r},s))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=u;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<p;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},75579:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var n=t(58168),a=(t(96540),t(15680));const p={title:"\u6302\u8f7d Java Agent",sidebar_position:1},o=void 0,l={unversionedId:"experiment-types/application/jvm/blade_prepare_jvm",id:"version-1.7.2/experiment-types/application/jvm/blade_prepare_jvm",title:"\u6302\u8f7d Java Agent",description:"\u4ecb\u7ecd",source:"@site/versioned_docs/version-1.7.2/experiment-types/application/jvm/blade_prepare_jvm.md",sourceDirName:"experiment-types/application/jvm",slug:"/experiment-types/application/jvm/blade_prepare_jvm",permalink:"/en/docs/1.7.2/experiment-types/application/jvm/blade_prepare_jvm",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.2/experiment-types/application/jvm/blade_prepare_jvm.md",tags:[],version:"1.7.2",sidebarPosition:1,frontMatter:{title:"\u6302\u8f7d Java Agent",sidebar_position:1},sidebar:"myAutogeneratedSidebar",previous:{title:"Jvm \u76f8\u5173\u573a\u666f",permalink:"/en/docs/1.7.2/experiment-types/application/jvm/"},next:{title:"Jvm\u76f8\u5173\u573a\u666f",permalink:"/en/docs/1.7.2/experiment-types/application/jvm/blade create jvm"}},i={},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],s={toc:c},d="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(d,(0,n.A)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.yg)("p",null,"\u6302\u8f7d java agent\uff0c\u6267\u884c java \u5b9e\u9a8c\u573a\u666f\u5fc5\u8981\u6b65\u9aa4"),(0,a.yg)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"-j, --javaHome string   \u6307\u5b9a JAVA_HOME \u8def\u5f84\uff0c\u7528\u4e8e\u6307\u5b9a java bin \u548c tools.jar\uff0c\u5982\u679c\u4e0d\u6dfb\u52a0\u6b64\u53c2\u6570\uff0c\u9ed8\u8ba4\u4f1a\u4f18\u5148\u83b7\u53d6 JAVA_HOME \u73af\u5883\u53d8\u91cf\uff0c\u5982\u679c\u83b7\u53d6\u5931\u8d25\uff0c\u4f1a\u89e3\u6790\u6307\u5b9a\u8fdb\u7a0b\u53c2\u6570\u83b7\u53d6 JAVA_HOME\uff0c\u83b7\u53d6\u5931\u8d25\uff0c\u4f1a\u4f7f\u7528 chaosblade \u81ea\u5e26\u7684 tools.jar\n--pid string        java \u8fdb\u7a0bID\n-P, --port int          java agent \u66b4\u9732\u670d\u52a1\u7684\u672c\u5730\u7aef\u53e3\uff0c\u7528\u4e8e\u4e0b\u53d1\u5b9e\u9a8c\u547d\u4ee4\n-p, --process string    java \u8fdb\u7a0b\u5173\u952e\u8bcd\uff0c\u7528\u4e8e\u5b9a\u4f4d java \u8fdb\u7a0b\n-d, --debug   \u5f00\u542f debug \u6a21\u5f0f\n")),(0,a.yg)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,a.yg)("p",null,"\u6307\u5b9a pid \u6267\u884c java agent \u6302\u8f7d"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"blade prepare jvm --pid 26652\n# \u547d\u4ee4\u4e5f\u53ef\u7b80\u5199\u4e3a\nblade p jvm --pid 26652\n")),(0,a.yg)("p",null,"\u6267\u884c\u6210\u529f\uff0c\u4f1a\u8fd4\u56de\u5b9e\u9a8c\u51c6\u5907\u7684 UID\uff0c\u4f8b\u5982\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{"code":200,"success":true,"result":"2552c05c6066dde5"}\n')),(0,a.yg)("p",null,"2552c05c6066dde5 \u5c31\u662f\u5b9e\u9a8c\u51c6\u5907\u5bf9\u8c61\u7684 UID\uff0c\u6267\u884c\u5378\u8f7d\u64cd\u4f5c\u9700\u8981\u7528\u5230\u6b64 UID\uff0c\u4f8b\u5982"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"blade revoke 2552c05c6066dde5\n# \u547d\u4ee4\u4e5f\u53ef\u7b80\u5199\u4e3a\nblade r 2552c05c6066dde5\n")),(0,a.yg)("p",null,"\u5982\u679c UID \u5fd8\u8bb0\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u8be2"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"blade status --type prepare --target jvm\n# \u547d\u4ee4\u4e5f\u53ef\u7b80\u5199\u4e3a\uff1a\nblade s --type p --target jvm\n")),(0,a.yg)("p",null,"\u6302\u8f7d java agent \u64cd\u4f5c\u662f\u4e2a\u6bd4\u8f83\u8017\u65f6\u7684\u8fc7\u7a0b\uff0c\u5728\u672a\u8fd4\u56de\u7ed3\u679c\u524d\u8bf7\u8010\u5fc3\u7b49\u5f85"),(0,a.yg)("h2",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),(0,a.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.yg)("p",null,'Q: {"code":500,"success":false,"error":"cannot get port from local, please execute prepare command first"}',(0,a.yg)("br",{parentName:"p"}),"\n","A: \u6ca1\u6709\u6302\u8f7d\u6240\u9700\u7684 java agent\uff0c\u6267\u884c prepare jvm \u547d\u4ee4\u6302\u8f7d"),(0,a.yg)("p",null,'Q: {"code":602,"success":false,"error":"less --process or --pid flags"}',(0,a.yg)("br",{parentName:"p"}),"\n","A: \u7f3a\u5c11\u5fc5\u8981\u53c2\u6570\u7528\u4e8e\u6307\u5b9a java \u5e94\u7528\u8fdb\u7a0b"))}m.isMDXComponent=!0}}]);