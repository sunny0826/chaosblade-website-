"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[55734],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>u});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),d=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=d(e.components);return t.createElement(o.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(a),g=r,u=m["".concat(o,".").concat(g)]||m[g]||c[g]||l;return a?t.createElement(u,i(i({ref:n},p),{},{components:a})):t.createElement(u,i({ref:n},p))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},33781:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var t=a(58168),r=(a(96540),a(15680));const l={title:"\u5b57\u8282\u7801\u7bc7",sidebar_position:4},i=void 0,s={unversionedId:"community/java-dev-guide/bytecode",id:"version-1.7.4/community/java-dev-guide/bytecode",title:"\u5b57\u8282\u7801\u7bc7",description:"\u672c\u7bc7\u4ecb\u7ecd chaosblade-exec-jvm \u5982\u4f55\u7be1\u6539java\u5e94\u7528\u7684\u5b57\u8282\u7801\u6765\u5b9e\u73b0\u6545\u969c\u80fd\u529b\u7684\u6ce8\u5165\u3002",source:"@site/versioned_docs/version-1.7.4/community/java-dev-guide/bytecode.md",sourceDirName:"community/java-dev-guide",slug:"/community/java-dev-guide/bytecode",permalink:"/en/docs/community/java-dev-guide/bytecode",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.4/community/java-dev-guide/bytecode.md",tags:[],version:"1.7.4",sidebarPosition:4,frontMatter:{title:"\u5b57\u8282\u7801\u7bc7",sidebar_position:4},sidebar:"myAutogeneratedSidebar",previous:{title:"\u63d2\u4ef6\u7bc7",permalink:"/en/docs/community/java-dev-guide/plugin"},next:{title:"\u534f\u8bae\u7bc7",permalink:"/en/docs/community/java-dev-guide/protocol"}},o={},d=[{value:"JavaAgent",id:"javaagent",level:2},{value:"ClassFileTransformer",id:"classfiletransformer",level:3},{value:"\u81ea\u5b9a\u4e49 Agent",id:"\u81ea\u5b9a\u4e49-agent",level:3},{value:"Maven \u63d2\u4ef6\u751f\u6210 MANIFEST.MF",id:"maven-\u63d2\u4ef6\u751f\u6210-manifestmf",level:3},{value:"\u7f16\u8bd1\u6253\u5305",id:"\u7f16\u8bd1\u6253\u5305",level:3},{value:"\u542f\u52a8\u5e94\u7528 jar",id:"\u542f\u52a8\u5e94\u7528-jar",level:3},{value:"\u52a0\u8f7d Agent",id:"\u52a0\u8f7d-agent",level:3},{value:"Jvm-SandBox",id:"jvm-sandbox",level:2},{value:"Module",id:"module",level:3},{value:"\u52a0\u8f7d Agent",id:"\u52a0\u8f7d-agent-1",level:3},{value:"chaosblade-exec-jvm",id:"chaosblade-exec-jvm",level:2}],p={toc:d},m="wrapper";function c(e){let{components:n,...l}=e;return(0,r.yg)(m,(0,t.A)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u672c\u7bc7\u4ecb\u7ecd ",(0,r.yg)("inlineCode",{parentName:"p"},"chaosblade-exec-jvm")," \u5982\u4f55\u7be1\u6539",(0,r.yg)("inlineCode",{parentName:"p"},"java\u5e94\u7528"),"\u7684\u5b57\u8282\u7801\u6765\u5b9e\u73b0\u6545\u969c\u80fd\u529b\u7684\u6ce8\u5165\u3002"),(0,r.yg)("h2",{id:"javaagent"},"JavaAgent"),(0,r.yg)("p",null,"\u4f7f\u7528 JavaAgent \u6280\u672f\u53ef\u4ee5\u5728 jvm \u542f\u52a8\u6216\u8005\u8fd0\u884c\u65f6\u52a8\u6001\u7684\u4fee\u6539\u5b57\u8282\u7801\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u542f\u52a8\u65f6\uff1ajava -jar app.jar -javaagent:/temp/instrument-1.0.0.jar")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8fd0\u884c\u65f6\uff08Attach\uff09\uff1aVirtualMachine \u52a0\u8f7d"))),(0,r.yg)("p",null,"\u4e0b\u9762\u4ecb\u7ecd\u4e00\u4e2a JavaAgent \u8fd0\u884c\u65f6\u4fee\u6539\u5b57\u8282\u7801\u7684\u4f8b\u5b50\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"/temp/NumberAdd.jar")," ",(0,r.yg)("inlineCode",{parentName:"p"},"NumberAdd"),"\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"main"),"\u65b9\u6cd5\u5faa\u73af\u751f\u6210\u4e24\u4e2a\u968f\u673a\u6570\u8c03\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"add"),"\u65b9\u6cd5\u505a\u52a0\u6cd5\u64cd\u4f5c\uff0c\u4f7f\u7528 JavaAgent \u5c06\u53d8\u91cf a \u6539\u6210 100\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) throws Exception {\n    while (true) {\n        Random random = new Random();\n        int a = random.nextInt(10);\n        int b = random.nextInt(10);\n        int add = new NumberAdd().add(a, b);\n        System.out.println("a(" + a + ")\\t+\\tb(" + b + ")\\t=" + add);\n        TimeUnit.SECONDS.sleep(3);\n    }\n}\n\npublic int add(int a, int b) {\n    return a + b;\n}\n')),(0,r.yg)("h3",{id:"classfiletransformer"},"ClassFileTransformer"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"java.lang.instrument.ClassFileTransformer"),"\u5b9e\u73b0\u8be5\u63a5\u53e3\uff0c\u7ee7\u627f tranform \u65b9\u6cd5\uff0c\u8fd9\u91cc\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"javassistct"),"\u4fee\u6539\u5b57\u8282\u7801\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},'ctMethod.insertBefore("a = 100;");'),"\u5728\u539f\u65b9\u6cd5\u6267\u884c\u524d\u5c06\u53d8\u91cf a \u4fee\u6539\u6210 100\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"ASM"),"\u7b49\u5176\u4ed6\u7b2c\u4e09\u65b9 Lib\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'public class NumberAddTransform implements ClassFileTransformer {\n\n    @Override\n    public byte[] transform(ClassLoader loader,\n                            String className,\n                            Class<?> classBeingRedefined,\n                            ProtectionDomain protectionDomain,\n                            byte[] classfileBuffer) {\n\n        ClassPool classPool = ClassPool.getDefault();\n        try {\n            if ("com.xx.NumberAdd".replace(".", "/").equals(className)) {\n                CtClass ctClass = classPool\n                  .makeClass(new ByteArrayInputStream(classfileBuffer));\n                CtMethod ctMethod = ctClass.getDeclaredMethod("add");\n                ctMethod.insertBefore("a = 100;");\n                byte[] bytes = ctClass.toBytecode();\n                ctClass.detach();\n                return bytes;\n            }\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n        return null;\n    }\n}\n')),(0,r.yg)("p",null,"\u8fd9\u91cc\u53ef\u4ee5\u5c06",(0,r.yg)("inlineCode",{parentName:"p"},"class byte[]"),"\u5b57\u8282\u6d41\u5199\u5165\u5230\u672c\u5730\u6587\u4ef6",(0,r.yg)("inlineCode",{parentName:"p"},"xx.class"),"\uff0c\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"javap"),"\u53ef\u89c2\u5bdf\u5b57\u8282\u7801\u7684\u53d8\u5316\uff0c\u53d1\u73b0",(0,r.yg)("inlineCode",{parentName:"p"},"add"),"\u65b9\u6cd5\u591a\u4e86",(0,r.yg)("inlineCode",{parentName:"p"},"bipush 100"),"\u548c",(0,r.yg)("inlineCode",{parentName:"p"}," istore_0"),"\u4e24\u6761\u6307\u4ee4\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"bipush 100"),"\u5c06 100",(0,r.yg)("inlineCode",{parentName:"p"},"push"),"\u5230\u64cd\u4f5c\u6570\u6808\u6808\u9876\uff0c",(0,r.yg)("inlineCode",{parentName:"p"}," istore_0"),"\u5c06\u6808\u9876\u5143\u7d20",(0,r.yg)("inlineCode",{parentName:"p"},"store"),"\u5230\u5c40\u90e8\u53d8\u91cf\u8868\u7b2c 0 \u4e2a\u4f4d\u7f6e\uff0c\u8fd9\u65f6\u5019\u5c40\u90e8\u53d8\u91cf\u8868\u539f\u6765\u7684\u503c\u5c31\u88ab\u66ff\u6362\u6389\u4e86\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public static int add(int, int);\n    descriptor: (II)I\n    flags: ACC_PUBLIC, ACC_STATIC\n    Code:\n      stack=2, locals=2, args_size=2\n         0: bipush        100\n         2: istore_0\n         3: iload_0\n         4: iload_1\n         5: iadd\n         6: ireturn\n      LineNumberTable:\n        line 31: 3\n      LocalVariableTable:\n        Start  Length  Slot  Name   Signature\n            0       7     0     a   I\n            0       7     1     b   I\n")),(0,r.yg)("h3",{id:"\u81ea\u5b9a\u4e49-agent"},"\u81ea\u5b9a\u4e49 Agent"),(0,r.yg)("p",null,"JavaAgent \u8fd0\u884c\u65f6\u4fee\u6539\u5b57\u8282\u7801\uff0c\u9700\u8981\u81ea\u5b9a\u4e49\u7c7b\u5e76\u4e14\u65b9\u6cd5\u7b7e\u540d\u5982\u4e0b\u5176\u4e00\uff0c\u4e14\u5b9a\u4e49\u5b9a\u4e49 MANIFEST.MF\uff0c\u6307\u5b9a",(0,r.yg)("inlineCode",{parentName:"p"},"Agent-Class"),"\u4e3a\u81ea\u5b9a\u4e49\u7c7b\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"public static void agentmain(String agentArgs, Instrumentation inst)   ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"public static void agentmain(String agentArgs)"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'public class MainAgent {\n\n    // \u4ee5Attach\u7684\u65b9\u5f0f\u8f7d\u5165\uff0c\u5728Java\u7a0b\u5e8f\u8fd0\u884c\u65f6\u8f7d\u5165\n    public static void agentmain(String agentArgs, Instrumentation inst) throws UnmodifiableClassException {\n        //\u6dfb\u52a0 Transformer\n        inst.addTransformer(new NumberAddTransform(), true);\n        Class[] allLoadedClasses = inst.getAllLoadedClasses();\n        for (Class allLoadedClass : allLoadedClasses) {\n            String simpleName = allLoadedClass.getName();\n            // \u9700\u8981\u8f6c\u6362\u7684\u7c7b\n            if ("com.xx.NumberAdd".equals(allLoadedClass.getName())) {\n                inst.retransformClasses(allLoadedClass);\n            }\n        }\n    }\n\n    // \u5728Java\u7a0b\u5e8f\u542f\u52a8\u65f6\u8f7d\u5165 -javaagent:\n    public static void premain(String agentArgs, Instrumentation inst) {\n\n    }\n}\n')),(0,r.yg)("h3",{id:"maven-\u63d2\u4ef6\u751f\u6210-manifestmf"},"Maven \u63d2\u4ef6\u751f\u6210 MANIFEST.MF"),(0,r.yg)("p",null,"\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"maven-assembly-plugin"),"\u63d2\u4ef6\u751f\u6210 MANIFEST.MF\uff0c\u6307\u5b9a",(0,r.yg)("inlineCode",{parentName:"p"},"Premain-Class"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Agent-Class"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Can-Redefine-Classes"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Can-Retransform-Classes"),"\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<manifestEntries>\n  <Premain-Class>com.xx.MainAgent</Premain-Class>\n  <Agent-Class>com.xx.MainAgent</Agent-Class>\n  <Can-Redefine-Classes>true</Can-Redefine-Classes>\n  <Can-Retransform-Classes>true</Can-Retransform-Classes>\n</manifestEntries>\n")),(0,r.yg)("h3",{id:"\u7f16\u8bd1\u6253\u5305"},"\u7f16\u8bd1\u6253\u5305"),(0,r.yg)("p",null,"\u7f16\u8bd1\u6253\u5305",(0,r.yg)("inlineCode",{parentName:"p"},"Agent jar"),"\uff0c\u590d\u5236\u5230",(0,r.yg)("inlineCode",{parentName:"p"},"/temp/instrument-1.0.0.jar")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"mvn clean package\n")),(0,r.yg)("h3",{id:"\u542f\u52a8\u5e94\u7528-jar"},"\u542f\u52a8\u5e94\u7528 jar"),(0,r.yg)("p",null,"\u6267\u884c\u5e94\u7528\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"jar")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"java -jar NumberAdd.jar\n")),(0,r.yg)("h3",{id:"\u52a0\u8f7d-agent"},"\u52a0\u8f7d Agent"),(0,r.yg)("p",null,"\u4f7f\u7528 VirtualMachine \u52a0\u8f7d Agent\uff0c\u52a0\u8f7d\u6210\u529f\u540e\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"add"),"\u65b9\u6cd5\u7684\u53c2\u6570\u5c31\u88ab\u7be1\u6539\u4e86\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) throws Exception {\n    VirtualMachine virtualMachine = VirtualMachine.attach("53110");\n    virtualMachine.loadAgent("/temp/instrument-1.0.0.jar");\n    virtualMachine.detach();\n}\n')),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(95034).A,width:"2154",height:"1344"})),(0,r.yg)("h2",{id:"jvm-sandbox"},"Jvm-SandBox"),(0,r.yg)("p",null,"\u53ef\u89c1\u4e0a\u8ff0\u4f8b\u5b50\u5355\u7eaf\u7684\u4f7f\u7528 JavaAgent\uff0c\u7f16\u7a0b\u6a21\u578b\u76f8\u5bf9\u590d\u6742\uff0c\u914d\u7f6e\u5ea6\u8f83\u9ad8\uff0c\u8fd8\u9700\u8003\u8651\u7c7b\u9694\u79bb\u3001\u5378\u8f7d\u3001\u591a\u6a21\u5757\u7684\u7ba1\u7406\u7b49\u7b49\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"Jvm-SandBox"),"\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"p"},"Module"),"\u6c99\u7bb1\u9694\u79bb\u673a\u5236\u5f88\u597d\u7684\u5b9e\u73b0\u4e86\u8fd9\u4e9b\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"chaosblade-exec-jvm"),"\u96c6\u6210\u4e86",(0,r.yg)("inlineCode",{parentName:"p"},"Jvm-SandBox"),"\u3002"),(0,r.yg)("h3",{id:"module"},"Module"),(0,r.yg)("p",null,"\u65b0\u5efa\u4e00\u4e2a\u5de5\u7a0b\uff0c\u4f9d\u8d56 Jvm-SandBox"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<parent>\n    <groupId>com.alibaba.jvm.sandbox</groupId>\n    <artifactId>sandbox-module-starter</artifactId>\n    <version>1.2.0</version>\n</parent>\n")),(0,r.yg)("p",null,"\u65b0\u5efa Module\uff0c\u6253\u5305\u6210 jar\uff0c\u53ea\u9700\u8981\u7b80\u5355\u7684\u51e0\u884c\u4ee3\u7801\u5373\u53ef\u5b9e\u73b0\u57fa\u4e8e JavaAgent \u7684\u8fd0\u884c\u65f6\u5b57\u8282\u7801\u4fee\u6539\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'@MetaInfServices(Module.class)\n@Information(id = "NumberAdd")\npublic class NumberAddModule implements Module {\n\n    @Resource\n    private ModuleEventWatcher moduleEventWatcher;\n\n    @Command("add")\n    public void repairCheckState() {\n        new EventWatchBuilder(moduleEventWatcher)\n                .onClass("com.xy.NumberAdd")\n                .onBehavior("add")\n                .onWatch(new AdviceListener() {\n                    @Override\n                    protected void before(Advice advice) throws Throwable {\n                        Object[] parameterArray = advice.getParameterArray();\n                        parameterArray[0] = 100;\n                    }\n                });\n    }\n\n}\n')),(0,r.yg)("h3",{id:"\u52a0\u8f7d-agent-1"},"\u52a0\u8f7d Agent"),(0,r.yg)("p",null,"\u4e0b\u8f7d",(0,r.yg)("a",{parentName:"p",href:"http://ompc.oss-cn-hangzhou.aliyuncs.com/jvm-sandbox/release/sandbox-stable-bin.zip"},"Jvm-SandBox"),"\u89e3\u538b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"cd sandbox\n./install-local.sh\n")),(0,r.yg)("p",null,"\u628a jar \u5305\u62f7\u8d1d\u5230",(0,r.yg)("inlineCode",{parentName:"p"}," 'module/"),"\u7684\u6a21\u5757\u4e0b\u9762\uff0c\u542f\u52a8\u6c99\u7bb1\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"./sandbox.sh -p 24253 -d 'NumberAdd/add'\n")),(0,r.yg)("p",null,"\u542f\u52a8\u6210\u529f\u540e\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"add"),"\u65b9\u6cd5\u7684\u53c2\u6570\u5c31\u88ab\u7be1\u6539\u4e86\u3002"),(0,r.yg)("p",null,"\u5378\u8f7d\u6c99\u7bb1\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"./sandbox.sh -p 24253 -S\n")),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(5366).A,width:"2154",height:"1344"})),(0,r.yg)("h2",{id:"chaosblade-exec-jvm"},"chaosblade-exec-jvm"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"chaosblade-exec-jvm"),"\u96c6\u6210\u4e86",(0,r.yg)("inlineCode",{parentName:"p"},"Jvm-SandBox"),"\uff0c\u5728",(0,r.yg)("inlineCode",{parentName:"p"},"make"),"\u7f16\u8bd1\u4e4b\u540e\uff0c\u4f5c\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"Jvm-SandBox"),"\u7684\u4e00\u4e2a module\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"chaosblade-exec-jvm"),"\u57fa\u4e8e",(0,r.yg)("inlineCode",{parentName:"p"},"Jvm-SandBox"),"\u7684\u4e8b\u4ef6\u76d1\u542c\u673a\u5236\uff0c\u62d3\u5c55\u4e86\u63d2\u4ef6\u7684\u8bbe\u8ba1\u3002"))}c.isMDXComponent=!0},5366:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/agent-jvm-sandbox-3fdc8928210d728487edc64cce054fe3.gif"},95034:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/agent-fbe82cc3035a601fb41bf279fc559925.gif"}}]);