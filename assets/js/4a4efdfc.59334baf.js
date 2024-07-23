"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[15796],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>y});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),p=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return a.createElement(c.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=n,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return t?a.createElement(y,o(o({ref:r},s),{},{components:t})):a.createElement(y,o({ref:r},s))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},32157:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(58168),n=(t(96540),t(15680));const l={title:"\u6a21\u62df\u5185\u5b58\u6ea2\u51fa"},o=void 0,i={unversionedId:"experiment-types/application/jvm/blade_create_jvm_OutOfMemoryError",id:"version-1.7.3/experiment-types/application/jvm/blade_create_jvm_OutOfMemoryError",title:"\u6a21\u62df\u5185\u5b58\u6ea2\u51fa",description:"\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7.3/experiment-types/application/jvm/blade_create_jvm_OutOfMemoryError.md",sourceDirName:"experiment-types/application/jvm",slug:"/experiment-types/application/jvm/blade_create_jvm_OutOfMemoryError",permalink:"/docs/1.7.3/experiment-types/application/jvm/blade_create_jvm_OutOfMemoryError",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.3/experiment-types/application/jvm/blade_create_jvm_OutOfMemoryError.md",tags:[],version:"1.7.3",frontMatter:{title:"\u6a21\u62df\u5185\u5b58\u6ea2\u51fa"},sidebar:"myAutogeneratedSidebar",previous:{title:"\u6a21\u62df\u586b\u5145 Jvm CodeCache",permalink:"/docs/1.7.3/experiment-types/application/jvm/blade_create_jvm_CodeCacheFilling"},next:{title:"\u6a21\u62df Java \u8fdb\u7a0b CPU \u6ee1\u8f7d",permalink:"/docs/1.7.3/experiment-types/application/jvm/blade_create_jvm_cpufullload"}},c={},p=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",level:2},{value:"\u6839\u636e\u4e0d\u540c\u533a\u6ce8\u5165",id:"\u6839\u636e\u4e0d\u540c\u533a\u6ce8\u5165",level:3},{value:"java.lang.OutOfMemoryError: Java heap space",id:"javalangoutofmemoryerror-java-heap-space",level:4},{value:"java.lang.OutOfMemoryError: Metaspace",id:"javalangoutofmemoryerror-metaspace",level:4},{value:"java.lang.OutOfMemoryError: Direct buffer memoryDirectBuffer",id:"javalangoutofmemoryerror-direct-buffer-memorydirectbuffer",level:4},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],s={toc:p},m="wrapper";function u(e){let{components:r,...l}=e;return(0,n.yg)(m,(0,a.A)({},s,l,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,n.yg)("p",null,"\u5185\u5b58\u6ea2\u51fa\u573a\u666f\uff0c\u547d\u4ee4\u53ef\u4ee5\u7b80\u5199\u4e3a\uff1ablade c jvm oom"),(0,n.yg)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,n.yg)("p",null,"\u4ee5\u4e0b\u662f\u6b64\u573a\u666f\u7279\u6709\u53c2\u6570\uff0c\u901a\u7528\u53c2\u6570\u8be6\u89c1\uff1a",(0,n.yg)("a",{parentName:"p",href:"/docs/1.7.3/experiment-types/application/jvm/"},"blade create jvm")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"--area string        JVM \u5185\u5b58\u533a\uff0c\u76ee\u524d\u652f\u6301 [HEAP, NOHEAP, OFFHEAP]\uff0c\u5fc5\u586b\u9879\u3002\u7528Heap\u6765\u8868\u793aEden+Old\uff0c,\u7528NOHEAP\u6765\u8868\u793ametaspace\uff0c\u7528OFFHEAP\u6765\u8868\u793a\u5806\u5916\u5185\u5b58\n--block string       \u6307\u5b9a\u5bf9\u8c61\u5927\u5c0f\uff0c\u4ec5\u652f\u6301 HEAP \u548c OFFHEAP \u533a\uff0c\u5355\u4f4d\u662f MB\n--interval string    \u5355\u4f4dms,\u9ed8\u8ba4500\u4e24\u6b21oom\u5f02\u5e38\u95f4\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u53ea\u6709\u5728\u975e\u66b4\u529b\u6a21\u5f0f\u624d\u751f\u6548\uff0c\u53ef\u4ee5\u51cf\u7f13gc\u7684\u9891\u7387\uff0c\u4e0d\u7528\u62c5\u5fc3\u8fdb\u7a0b\u4f1a\u65e0\u54cd\u5e94\n--wild-mode string   \u9ed8\u8ba4false,\u662f\u5426\u5f00\u542f\u66b4\u529b\u6a21\u5f0f\uff0c\u5982\u679c\u662f\u66b4\u529b\u6a21\u5f0f\uff0c\u5728OOM\u53d1\u751f\u4e4b\u540e\u4e5f\u4e0d\u4f1a\u91ca\u653e\u4e4b\u524d\u521b\u5efa\u7684\u5185\u5b58\uff0c\u53ef\u80fd\u4f1a\u5f15\u8d77\u5e94\u7528\u8fdb\u7a0b\u65e0\u54cd\u5e94\n")),(0,n.yg)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,n.yg)("p",null,"\u5806\u5185\u5b58\u5360\u7528\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'blade c jvm oom --area HEAP --wild-mode true --process tomcat\n\n{"code":200,"success":true,"result":"99b9228b9632e043"}\n')),(0,n.yg)("p",null,"\u6545\u969c\u6ce8\u5165\u4e4b\u524d\uff1a\n",(0,n.yg)("img",{alt:"-w455",src:t(7631).A,width:"910",height:"646"})),(0,n.yg)("p",null,"\u6545\u969c\u6ce8\u5165\u4e4b\u540e\uff1a\n",(0,n.yg)("img",{alt:"-w456",src:t(86967).A,width:"912",height:"640"})),(0,n.yg)("p",null,"\u505c\u6b62 HEAP \u5185\u5b58\u5360\u7528\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"blade d 99b9228b9632e043\n")),(0,n.yg)("p",null,"\u521b\u5efa Metaspace \u533a\u5185\u5b58\u5360\u7528\uff0c\u6ce8\u610f\uff0c\u6267\u884c\u5b8c\u6b64\u573a\u666f\u540e\uff0c\u9700\u8981\u91cd\u542f\u5e94\u7528\uff01\uff01\uff01\uff01\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'blade c jvm oom --area NOHEAP --wild-mode true --process tomcat\n\n{"code":200,"success":true,"result":"93264dd07149cf54"}\n')),(0,n.yg)("p",null,"\u6545\u969c\u6ce8\u5165\u540e\uff1a\n",(0,n.yg)("img",{alt:"-w465",src:t(11605).A,width:"930",height:"668"})),(0,n.yg)("h2",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),(0,n.yg)("h3",{id:"\u6839\u636e\u4e0d\u540c\u533a\u6ce8\u5165"},"\u6839\u636e\u4e0d\u540c\u533a\u6ce8\u5165"),(0,n.yg)("h4",{id:"javalangoutofmemoryerror-java-heap-space"},"java.lang.OutOfMemoryError: Java heap space"),(0,n.yg)("p",null,"\u521b\u5efa\nHeap \u7684\u8bdd\u5206\u4e3a Young\uff0cOld\uff0c\u8fd9\u5757\u533a\u57df\u7684 oom \u662f\u6700\u597d\u91cd\u73b0\uff0c\u53ea\u9700\u8981\u4e0d\u65ad\u7684\u521b\u5efa\u5bf9\u8c61\u5c31\u53ef\u4ee5\uff0c\u5982\u679c\u5185\u5b58\u4f7f\u7528\u8fbe\u5230\u4e86 Xmx \u6216\u8005 Xmn \u6240\u89c4\u5b9a\u7684\u5927\u5c0f\uff0c\u5e76\u4e14 gc \u56de\u6536\u4e0d\u4e86,\u5c31\u4f1a\u89e6\u53d1 oom \u9519\u8bef\u3002"),(0,n.yg)("p",null,"\u68c0\u67e5\n\u2022 \u53ef\u4ee5\u901a\u8fc7 jmap -heap pid \u6765\u67e5\u770b\u5f53\u524d\u5806\u5360\u7528\u60c5\u51b5\u662f\u5426\u5230\u4e86 100%\n\u2022 \u53ef\u4ee5\u901a\u8fc7 jstat -gcutil pid \u6765\u67e5\u770b\u662f\u5426\u53d1\u751f\u4e86 gc,\u56e0\u4e3a\u4f1a\u4e00\u76f4\u521b\u5efa\u65b0\u7684\u5bf9\u8c61\uff0c\u6240\u4ee5\u4f1a\u9891\u7e41\u89e6\u53d1 gc \u64cd\u4f5c"),(0,n.yg)("p",null,"\u6062\u590d\n\u5f53\u6f14\u7ec3\u7ec8\u6b62\u540e\uff0c\u4f1a\u505c\u6b62\u4ea7\u751f\u65b0\u7684\u5bf9\u8c61\uff0c\u4f46\u6b64\u65f6\u4e0d\u4e00\u5b9a heap \u5c31\u6062\u590d\u4e86\uff0c\u56e0\u4e3a\u6062\u590d\u9700\u8981\u89e6\u53d1 gc \u624d\u53ef\u4ee5\u8fdb\u884c\u56de\u6536,\u5f53\u7136\u4e5f\u53ef\u4ee5\u901a\u8fc7\u624b\u52a8\u8c03\u7528 System.gc()\u6765\u5f3a\u884c\u89e6\u53d1 gc\uff0c\u4f46\u662f\u5982\u679c\u4f60\u7684\u542f\u52a8\u53c2\u6570\u91cc\u9762\u6709 -XX:+DisableExplicitGC \u90a3\u4e48\u8fd9\u4e2a\u547d\u4ee4\u5c31\u65e0\u6cd5\u751f\u6548\u4e86."),(0,n.yg)("p",null,"\u6ce8\u610f\n\u89e6\u53d1 OOM \u7684\u65f6\u5019\u53ef\u80fd\u4f1a\u5bfc\u81f4\u8fdb\u7a0b\u88ab\u64cd\u4f5c\u7cfb\u7edf\u6240 kill\uff0c\u8fd9\u4e2a\u539f\u56e0\u662f\u56e0\u4e3a\u4f60\u7684 Xmx \u8bbe\u7f6e\u7684\u4e0d\u5408\u7406\uff0c\u6bd4\u5982\u64cd\u4f5c\u7cfb\u7edf\u5185\u5b58\u53ea\u6709 3G\uff0c\u4f46\u662f\u4f60 Xmx \u4f1a\u8bbe\u7f6e\u4e86 3G \u751a\u81f3\u66f4\u591a\uff0c\u90a3\u4e48\u5c31\u4f1a\u56e0\u4e3a\u7cfb\u7edf\u5185\u5b58\u4e0d\u8db3\uff0c\u800c\u88ab os kill \u6389\u8fdb\u7a0b\uff0c\u6240\u4ee5\u8fd9\u91cc\u52a1\u5fc5\u8981\u6ce8\u610f Xmx \u5927\u5c0f"),(0,n.yg)("h4",{id:"javalangoutofmemoryerror-metaspace"},"java.lang.OutOfMemoryError: Metaspace"),(0,n.yg)("p",null,"\u521b\u5efa\nMetaspace \u53ef\u4ee5\u901a\u8fc7\u4e0d\u65ad\u7684\u52a0\u8f7d\u7c7b\u5bf9\u8c61\u6765\u521b\u5efa\uff0c\u5f53\u5927\u5c0f\u8d85\u8fc7\u4e86 -XX:MaxMetaspaceSize \u5e76\u4e14\u65e0\u6cd5\u8fdb\u884c gc \u56de\u6536\u5c31\u4f1a\u629b\u51fa oom \u9519\u8bef\u4e86"),(0,n.yg)("p",null,"\u68c0\u67e5\n\u2022 \u53ef\u4ee5\u901a\u8fc7 jstat -gcutil pid \u6765\u67e5\u770b M \u533a\u7684\u4f7f\u7528\u60c5\u51b5\u4ee5\u53ca gc \u7684\u6b21\u6570"),(0,n.yg)("p",null,"\u6062\u590d\n\u7c7b\u5bf9\u8c61\u7684\u56de\u6536\u6761\u4ef6\u5728 jvm \u91cc\u9762\u6bd4\u8f83\u82db\u523b\uff0c\u9700\u8981\u6ee1\u8db3\u5f88\u591a\u6761\u4ef6\uff0c\u5c31\u7b97\u6ee1\u8db3\u4e86\u6761\u4ef6\uff0c\u89e6\u53d1 gc \u4e86\u4e5f\u4e0d\u4e00\u5b9a\u56de\u6536,\u53ea\u8981\u6709\u4e0b\u9762\u4efb\u4f55\u4e00\u4e2a\u6761\u4ef6\u5c31\u65e0\u6cd5\u88ab\u56de\u6536.\n\u2022 objects of that class are still reachable.\n\u2022 the Class object representing the class is still reachable\n\u2022 the ClassLoader that loaded the class is still reachable\n\u2022 other classes loaded by the ClassLoader are still reachable\n\u56e0\u6b64\u6700\u597d\u7684\u529e\u6cd5\u5c31\u662f\u91cd\u542f\u5e94\u7528."),(0,n.yg)("h4",{id:"javalangoutofmemoryerror-direct-buffer-memorydirectbuffer"},"java.lang.OutOfMemoryError: Direct buffer memoryDirectBuffer"),(0,n.yg)("p",null,(0,n.yg)("img",{src:t(13314).A,width:"746",height:"322"})),(0,n.yg)("p",null,"\u521b\u5efa\n\u5806\u5916\u5185\u5b58\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ByteBuffer.allocateDirect \u6765\u4ea7\u751f,\u5e76\u4e14\u4f1a\u4e00\u76f4\u6d88\u8017\u7cfb\u7edf\u5185\u5b58."),(0,n.yg)("p",null,"\u68c0\u67e5\n\u2022 \u56e0\u4e3a\u5806\u5916\u5185\u5b58\u4e0d\u5c5e\u4e8e\u5806\u91cc\u9762\uff0c\u6240\u4ee5\u4f60\u901a\u8fc7 jmap \u547d\u4ee4\u5f88\u96be\u53d1\u73b0\uff0c\u4f46\u662f\u53ef\u4ee5\u901a\u8fc7 jstat -gcutil pid \u6765\u67e5\u770b\uff0c\u5982\u679c\u9891\u53d1\u51fa\u53d1\u4e86 fullgc\uff0c\u4f46\u662f e,O,M \u533a\u90fd\u6ca1\u53d1\u751f\u53d8\u5316\uff0c \u90a3\u5c31\u662f\u8fdb\u884c\u5806\u5916\u5185\u5b58\u56de\u6536\n\u2022 \u53ef\u4ee5\u901a\u8fc7 free -m \u67e5\u770b\u5185\u5b58\u4f7f\u7528\u60c5\u51b5"),(0,n.yg)("p",null,"\u6ce8\u610f\n\u540c\u6837\uff0c\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u6700\u5927\u5806\u5916\u5185\u5b58\u5927\u5c0f\uff0c\u540c\u6837\u4f1a\u56e0\u4e3a OS \u7684 memory \u8017\u5c3d\u800c\u5bfc\u81f4\u8fdb\u7a0b\u88ab\u6740\uff0c\u6240\u4ee5\u9700\u8981\u914d\u7f6e\u6bd4\u5982\u4e0b\u9762\u7684\u53c2\u6570:\n-XX:MaxDirectMemorySize=100M"),(0,n.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"))}u.isMDXComponent=!0},7631:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/15758815490937-f698233719a2805e1b8710f68c00f152.jpg"},86967:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/15758816626696-de62585b43463cf7ed30d6f9e319f2a2.jpg"},11605:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/15758818351752-7ea8abff5b651c153e8cb8c9708663d7.jpg"},13314:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/15758829506515-39a6bbabe41ca3fdf065341b9e8315db.jpg"}}]);