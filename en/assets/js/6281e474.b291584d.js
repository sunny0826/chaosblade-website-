"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[33452],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,d=m["".concat(i,".").concat(g)]||m[g]||u[g]||o;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},82909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={title:"\u6a21\u62df\u6267\u884c\u6307\u5b9a\u811a\u672c"},c=void 0,l={unversionedId:"experiment-types/application/jvm/blade_create_jvm_script",id:"version-1.7.1/experiment-types/application/jvm/blade_create_jvm_script",title:"\u6a21\u62df\u6267\u884c\u6307\u5b9a\u811a\u672c",description:"\u4ecb\u7ecd",source:"@site/versioned_docs/version-1.7.1/experiment-types/application/jvm/blade_create_jvm_script.md",sourceDirName:"experiment-types/application/jvm",slug:"/experiment-types/application/jvm/blade_create_jvm_script",permalink:"/en/docs/1.7.1/experiment-types/application/jvm/blade_create_jvm_script",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.1/experiment-types/application/jvm/blade_create_jvm_script.md",tags:[],version:"1.7.1",frontMatter:{title:"\u6a21\u62df\u6267\u884c\u6307\u5b9a\u811a\u672c"},sidebar:"myAutogeneratedSidebar",previous:{title:"\u6a21\u62df\u6307\u5b9a\u7c7b\u65b9\u6cd5\u8fd4\u56de\u503c",permalink:"/en/docs/1.7.1/experiment-types/application/jvm/blade_create_jvm_return"},next:{title:"\u6a21\u62df\u7c7b\u65b9\u6cd5\u629b\u81ea\u5b9a\u4e49\u5f02\u5e38",permalink:"/en/docs/1.7.1/experiment-types/application/jvm/blade create jvm throwCustomException"}},i={},p=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u811a\u672c\u89c4\u8303",id:"\u811a\u672c\u89c4\u8303",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],s={toc:p},m="wrapper";function u(e){let{components:t,...o}=e;return(0,a.yg)(m,(0,r.A)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.yg)("p",null,"\u7f16\u5199 java \u6216\u8005 groovy \u811a\u672c\u5b9e\u73b0\u590d\u6742\u7684\u6545\u969c\u573a\u666f\uff0c\u6bd4\u5982\u7be1\u6539\u53c2\u6570\u3001\u4fee\u6539\u8fd4\u56de\u503c\u3001\u629b\u81ea\u5b9a\u4e49\u5f02\u5e38\u7b49"),(0,a.yg)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.yg)("p",null,"\u4ee5\u4e0b\u662f\u6b64\u573a\u666f\u7279\u6709\u53c2\u6570\uff0c\u901a\u7528\u53c2\u6570\u8be6\u89c1\uff1a",(0,a.yg)("a",{parentName:"p",href:"/en/docs/1.7.1/experiment-types/application/jvm/blade%20create%20jvm"},"blade create jvm")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"--effect-count string     \u5f71\u54cd\u7684\u8bf7\u6c42\u6761\u6570\n--effect-percent string   \u5f71\u54cd\u7684\u8bf7\u6c42\u767e\u5206\u6bd4\n--script-content string   \u811a\u672c\u5185\u5bb9\uff0c\u662f Base64 \u7f16\u7801\u540e\u7684\u5185\u5bb9\uff0c\u76f8\u5173\u5de5\u5177\u7c7b [Base64Util](https://github.com/chaosblade-io/chaosblade-exec-jvm/blob/master/chaosblade-exec-plugin/chaosblade-exec-plugin-jvm/src/main/java/com/alibaba/chaosblade/exec/plugin/jvm/Base64Util.java)\u3002\u6ce8\u610f\uff0c\u4e0d\u80fd\u548c script-file \u540c\u65f6\u4f7f\u7528\u3002\n--script-file string      \u811a\u672c\u6587\u4ef6\uff0c\u6587\u4ef6\u7edd\u5bf9\u8def\u5f84\n--script-name string      \u811a\u672c\u540d\u79f0\uff0c\u65e5\u5fd7\u8bb0\u5f55\u7528\uff0c\u53ef\u4e0d\u586b\u5199\u3002\n--script-type string      \u811a\u672c\u7c7b\u578b\uff0c\u53d6\u503c\u4e3a java \u6216 groovy\uff0c\u9ed8\u8ba4\u4e3a java\u3002\n")),(0,a.yg)("p",null,"\u4f7f\u7528 script-content \u6307\u5b9a\u6f14\u7ec3\u811a\u672c\u5185\u5bb9\uff0c\u4e0d\u6dfb\u52a0 script-type \u53c2\u6570\uff0c\u9ed8\u8ba4\u4e3a java \u811a\u672c\uff0c\u5c06\u8c03\u7528 java \u5f15\u64ce\u89e3\u6790\u5668\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"blade c jvm script --classname com.example.controller.DubboController --methodname call --script-content aW1wb3J0IGphdmEudXRpbC5NYXA7CgppbXBvcnQgY29tLmV4YW1wbGUuY29udHJvbGxlci5DdXN0b21FeGNlcHRpb247CgovKioKICogQGF1dGhvciBDaGFuZ2p1biBYaWFvCiAqLwpwdWJsaWMgY2xhc3MgRXhjZXB0aW9uU2NyaXB0IHsKICAgIHB1YmxpYyBPYmplY3QgcnVuKE1hcDxTdHJpbmcsIE9iamVjdD4gcGFyYW1zKSB0aHJvd3MgQ3VzdG9tRXhjZXB0aW9uIHsKICAgICAgICBwYXJhbXMucHV0KCIxIiwgMTExTCk7CiAgICAgICAgLy9yZXR1cm4gIk1vY2sgVmFsdWUiOwogICAgICAgIC8vdGhyb3cgbmV3IEN1c3RvbUV4Y2VwdGlvbigiaGVsbG8iKTsKICAgICAgICByZXR1cm4gbnVsbDsKICAgIH0KfQo=  --script-name exception\n")),(0,a.yg)("p",null,"\u4f7f\u7528 script-file \u53c2\u6570\u6307\u5b9a\u6587\u4ef6\u6f14\u7ec3\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"blade c jvm script --classname com.example.controller.DubboController --methodname call --script-file /Users/Shared/IdeaProjects/Workspace_WebApp/dubbodemo/src/main/java/com/example/controller/ExceptionScript.java --script-name exception\n")),(0,a.yg)("p",null,"\u6267\u884c groovy \u811a\u672c\u5b9e\u9a8c\u573a\u666f\uff0c\u53c2\u6570\u540c\u4e0a\uff0c\u4f46\u5fc5\u987b\u6dfb\u52a0 --script-type groovy \u53c2\u6570\u3002\u5982"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"blade c jvm script --classname com.example.controller.DubboController --methodname call --script-file /Users/Shared/IdeaProjects/Workspace_WebApp/dubbodemo/src/main/java/com/example/controller/GroovyScript.groovy --script-name exception --script-type groovy\n")),(0,a.yg)("h2",{id:"\u811a\u672c\u89c4\u8303"},"\u811a\u672c\u89c4\u8303"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5fc5\u987b\u521b\u5efa\u4e00\u4e2a\u7c7b\uff0c\u5bf9\u7c7b\u540d\u548c\u5305\u540d\u6ca1\u6709\u8981\u6c42\uff0c\u5176\u4e2d\u6240\u4f9d\u8d56\u7684\u7c7b\uff0c\u5fc5\u987b\u662f\u76ee\u6807\u5e94\u7528\u6240\u5177\u5907\u7684\u7c7b\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u540c\u5305\u4e0b\u7684\u7c7b\u5f15\u7528\uff0c\u5fc5\u987b\u5199\u5168\u5305\u540d\uff0c\u6bd4\u5982\u6545\u969c\u811a\u672c\u7c7b\u662f com.example.controller.ExceptionScript\uff0c\u7c7b\u4e2d\u5f15\u5165\u4e86\u540c\u5305\u4e0b\u7684 DubboController \u7c7b\uff0c\u5219 DubboController \u5fc5\u987b\u6dfb\u52a0 com.example.controller.DubboController\u3002\u5f15\u5165\u975e\u540c\u5305\u4e0b\u7684\u7c7b\uff0c\u65e0\u9700\u5199\u5168\u5305\u540d\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5fc5\u987b\u6dfb\u52a0 public Object run(Map\\<String, Object",">",' params) \u65b9\u6cd5\uff0c\u5176\u4e2d params \u5bf9\u8c61\u4e2d\u5305\u542b\u76ee\u6807\u65b9\u6cd5\u53c2\u6570\uff0ckey \u662f\u53c2\u6570\u7d22\u5f15\u4e0b\u6807\uff0c\u4ece 0 \u5f00\u59cb\uff0c\u6bd4\u5982\u76ee\u6807\u65b9\u6cd5\u662f public String call(Object obj1, Object obj2){}\uff0c\u5219 params.get("0")\u5219\u8fd4\u56de\u7684\u662f obj1 \u5bf9\u8c61\uff0c\u53ef\u4ee5\u6267\u884c params.put("0", \\<NEW OBJECT',">",") \u6765\u4fee\u6539\u76ee\u6807\u65b9\u6cd5\u53c2\u6570\uff08\u76ee\u6807\u65b9\u6cd5\u53ca --classname \u548c --methodname \u6240\u6307\u5b9a\u7684\u7c7b\u65b9\u6cd5\uff09\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4e0a\u8ff0\u65b9\u6cd5\u8fd4\u56de\u7684\u5bf9\u8c61\u5982\u679c\u4e0d\u4e3a\u7a7a\uff0c\u5219\u4f1a\u6839\u636e\u811a\u672c\u4e2d\u8fd4\u56de\u7684\u5bf9\u8c61\u6765\u4fee\u6539\u76ee\u6807\u65b9\u6cd5\u8fd4\u56de\u503c\uff0c\u6ce8\u610f\u7c7b\u578b\u5fc5\u987b\u548c\u76ee\u6807\u65b9\u6cd5\u8fd4\u56de\u503c\u4e00\u81f4\u3002\u5982\u679c\u4e0a\u8ff0\u65b9\u6cd5\u8fd4\u56de null\uff0c\u5219\u4e0d\u4f1a\u4fee\u6539\u76ee\u6807\u65b9\u6cd5\u8fd4\u56de\u503c\u3002")),(0,a.yg)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,a.yg)("p",null,"\u5bf9\u4ee5\u4e0b\u4e1a\u52a1\u7c7b\u505a\u4fee\u6539\u8fd4\u56de\u503c\u5b9e\u9a8c\u573a\u666f\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/pet")\npublic class PetController {\n\n    @GetMapping("/list")\n    public Result<List<PetVO>> getPets() {\n        Map<Long, Discount> petDiscount = discountManager\n            .getPetDiscounts()\n            .stream()\n            .filter(discount -> discount.getExpired() == 0)\n            .collect(Collectors.toMap(\n                Discount::getPetId,\n                Function.identity()\n            ));\n\n        List<PetVO> pets = petManager\n            .getPets()\n            .stream()\n            .map(pet -> {\n                PetVO petVO = PetVO.from(pet);\n                Discount discount = petDiscount.get(pet.getId());\n\n                if (null != discount && null != discount.getDiscountPrice() && discount.getDiscountPrice() > 0L) {\n                    petVO.setDiscountPrice(discount.getDiscountPrice());\n                }\n\n                return petVO;\n            })\n            .collect(Collectors.toList());\n\n       return Result.success(pets);\n    }\n')),(0,a.yg)("p",null,"\u5219\u7f16\u5199 Java \u811a\u672c\uff0c\u5b9e\u73b0\u5bf9 getPets \u65b9\u6cd5\u505a\u8fd4\u56de\u503c\u4fee\u6539\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'package com.alibaba.csp.monkeyking.controller;\n\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.Map;\n\nimport com.alibaba.csp.monkeyking.demo.model.Pet;\nimport com.alibaba.csp.monkeyking.model.PetVO;\nimport com.alibaba.csp.monkeyking.model.Result;\n\npublic class ChaosController {\n\n    public Object run(Map<String, Object> params) {\n        ArrayList<PetVO> petVOS = new ArrayList<>();\n        for (int i = 0; i < 3; i++) {\n            Pet pet = new Pet();\n            pet.setName("test_" + i);\n            PetVO petVO = PetVO.from(pet);\n            petVOS.add(petVO);\n        }\n        Result<List<PetVO>> results = Result.success(petVOS);\n        return results;\n    }\n}\n')),(0,a.yg)("p",null,"\u4fdd\u5b58\u6587\u4ef6\u540e\uff0c\u901a\u8fc7\u4e0a\u9762 \u4f7f\u7528\u65b9\u5f0f \u90e8\u5206\u7684\u547d\u4ee4\u6765\u8c03\u7528\uff0c\u4e5f\u53ef\u4ee5\u5c06\u5176\u8fdb\u884c Base64 \u7f16\u7801\uff0c\u901a\u8fc7\u6307\u5b9a script-content \u53c2\u6570\u6765\u6307\u5b9a\u7f16\u7801\u540e\u7684\u5185\u5bb9\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"blade c jvm script --classname com.alibaba.csp.monkeyking.controller.PetController --methodname getPets --script-file /Users/Shared/IdeaProjects/Workspace_WebApp/dubbodemo/src/main/java/com/alibaba/csp/monkeyking/controller/ChaosController --script-name specifyReturnObj\n")),(0,a.yg)("p",null,"\u672a\u6267\u884c\u5b9e\u9a8c\u4e4b\u524d\u9875\u9762\uff1a\n",(0,a.yg)("img",{src:n(72357).A,width:"519",height:"530"})),(0,a.yg)("p",null,"\u6267\u884c\u5b9e\u9a8c\u4e4b\u540e\uff1a\n",(0,a.yg)("img",{src:n(93699).A,width:"575",height:"558"})),(0,a.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.yg)("p",null,"Java \u5b9e\u9a8c\u573a\u666f\u7684\u65e5\u5fd7\u5728 \u8fdb\u7a0b\u7528\u6237\u4e0b logs/chaosblade/chaosblade.log \u4e2d\u3002\u6267\u884c\u811a\u672c\u6210\u529f\uff0c\u4f46\u4e0d\u751f\u6548\uff0c\u539f\u56e0\u53ef\u80fd\u662f\u811a\u672c\u7f16\u8bd1\u9519\u8bef\uff08\u56e0\u4e3a\u811a\u672c\u7f16\u8bd1\u65b9\u6cd5\u8c03\u7528\u65f6\u89e6\u53d1\uff0c\u6240\u4ee5\u4e0b\u53d1\u811a\u672c\uff0c\u4e0d\u4f1a\u8fdb\u884c\u7f16\u8bd1\uff09\uff0c\u53ef\u67e5\u770b\u6b64\u65e5\u5fd7\u8fdb\u884c\u6392\u67e5\u3002"))}u.isMDXComponent=!0},72357:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/15758787601720-ef3e994f94ad74484b7d369eee6f196a.jpg"},93699:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/15758787719162-3f9db287d9c75d88688fb5af06dae8c0.jpg"}}]);