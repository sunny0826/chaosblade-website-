"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[46239],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>p});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,p=u["".concat(s,".").concat(m)]||u[m]||g[m]||o;return t?r.createElement(p,l(l({ref:n},d),{},{components:t})):r.createElement(p,l({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},94408:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const o={title:"Development standard",sidebar_position:2},l=void 0,i={unversionedId:"community/dev-standard",id:"version-1.7.3/community/dev-standard",title:"Development standard",description:"Code Style",source:"@site/versioned_docs/version-1.7.3/community/dev-standard.md",sourceDirName:"community",slug:"/community/dev-standard",permalink:"/en/docs/1.7.3/community/dev-standard",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.3/community/dev-standard.md",tags:[],version:"1.7.3",sidebarPosition:2,frontMatter:{title:"Development standard",sidebar_position:2},sidebar:"myAutogeneratedSidebar",previous:{title:"PR Submission Guidelines",permalink:"/en/docs/1.7.3/community/PR-guide"},next:{title:"OS Scenario Extension Development Documentation",permalink:"/en/docs/1.7.3/community/os-dev-guide"}},s={},c=[{value:"Code Style",id:"code-style",level:2},{value:"Code Style Tools",id:"code-style-tools",level:3},{value:"Code Review Comments",id:"code-review-comments",level:3},{value:"Additional Style Rules",id:"additional-style-rules",level:3},{value:"RULE001 - Add blank line between field&#39;s comments",id:"rule001---add-blank-line-between-fields-comments",level:4},{value:"RULE002 - Add parameter name in interface definition",id:"rule002---add-parameter-name-in-interface-definition",level:4},{value:"RULE003 - Import Packages",id:"rule003---import-packages",level:4},{value:"RULE004 - Variable declaration position",id:"rule004---variable-declaration-position",level:4},{value:"RULE005 - Generation of action failure",id:"rule005---generation-of-action-failure",level:4},{value:"RULE006 - Return fast to indent less",id:"rule006---return-fast-to-indent-less",level:4},{value:"RULE007 - Lowercase log and error",id:"rule007---lowercase-log-and-error",level:4},{value:"RULE008 - Nested errors",id:"rule008---nested-errors",level:4},{value:"RULE009 - Comment correctly",id:"rule009---comment-correctly",level:4},{value:"RULE010 - Always remember DRY",id:"rule010---always-remember-dry",level:4},{value:"RULE011 - Welcome to your addition",id:"rule011---welcome-to-your-addition",level:4},{value:"Reference",id:"reference",level:3}],d={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"code-style"},"Code Style"),(0,a.yg)("p",null,"Code style is a set of rules or guidelines when writing source codes of a software project. Following particular code style will definitely help contributors to read and understand source codes very well. In addition, it will help to avoid introducing errors as well."),(0,a.yg)("h3",{id:"code-style-tools"},"Code Style Tools"),(0,a.yg)("p",null,"Project chaosblade is written in Golang. And currently we use three tools to help conform code styles in this project. These three tools are:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://golang.org/cmd/gofmt"},"gofmt")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://golang.org/cmd/vet/"},"go vet"))),(0,a.yg)("h3",{id:"code-review-comments"},"Code Review Comments"),(0,a.yg)("p",null,"When collaborating in chaosblade project, we follow the style from ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/CodeReviewComments"},"Go Code Review Comments"),". Before contributing, we treat this as a must-read."),(0,a.yg)("h3",{id:"additional-style-rules"},"Additional Style Rules"),(0,a.yg)("p",null,"For a project, existing tools and rules may not be sufficient. To align more in styles, we recommend contributors taking a thorough look at the following additional style rules:"),(0,a.yg)("h4",{id:"rule001---add-blank-line-between-fields-comments"},"RULE001 - Add blank line between field's comments"),(0,a.yg)("p",null,"When constructing a struct, if comments needed for fields in struct, keep a blank line between fields. The encouraged way is as following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-golang"},"// correct example\n// ContainerManager is the default implement of interface ContainerMgr.\ntype ContainerManager struct {\n    // Store stores containers in Backend store.\n    // Element operated in store must has a type of *ContainerMeta.\n    // By default, Store will use local filesystem with json format to store containers.\n    Store *meta.Store\n\n    // Client is used to interact with containerd.\n    Client ctrd.APIClient\n\n    // NameToID stores relations between container's name and ID.\n    // It is used to get container ID via container name.\n    NameToID *collect.SafeMap\n    ......\n}\n")),(0,a.yg)("p",null,"Rather than:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-golang"},"// wrong example\n// ContainerManager is the default implement of interface ContainerMgr.\ntype ContainerManager struct {\n    // Store stores containers in Backend store.\n    // Element operated in store must has a type of *ContainerMeta.\n    // By default, Store will use local filesystem with json format to store containers.\n    Store *meta.Store\n    // Client is used to interact with containerd.\n    Client ctrd.APIClient\n    // NameToID stores relations between container's name and ID.\n    // It is used to get container ID via container name.\n    NameToID *collect.SafeMap\n    ......\n}\n")),(0,a.yg)("h4",{id:"rule002---add-parameter-name-in-interface-definition"},"RULE002 - Add parameter name in interface definition"),(0,a.yg)("p",null,"When defining interface functions, we should always explicitly add formal parameters, and this helps a lot to code readability. For example, the following way are preferred:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-golang"},"// correct example\n// ContainerMgr is an interface to define all operations against container.\ntype ContainerMgr interface {\n    // Start a container.\n    Start(ctx context.Context, id, detachKeys string) error\n\n    // Stop a container.\n    Stop(ctx context.Context, name string, timeout int64) error\n    ......\n}\n")),(0,a.yg)("p",null,"However, missing formal parameter's name would make interface unreadable, since we would never know what the parameter's real meaning unless turning to one implementation of this interface:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-golang"},"// wrong example\ntype ContainerMgr interface {\n    // Start a container.\n    Start(context.Context, string, string) error\n\n    // Stop a container.\n    Stop(context.Context, string, int64) error\n    ......\n}\n\n")),(0,a.yg)("p",null,"In addition, a blank line between function's comments is encouraged to make interface more readable."),(0,a.yg)("h4",{id:"rule003---import-packages"},"RULE003 - Import Packages"),(0,a.yg)("p",null,"When importing packages, to improve readabilities, we should import package by sequence:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Golang's built-in system packages;"),(0,a.yg)("li",{parentName:"ul"},"project's own packages;"),(0,a.yg)("li",{parentName:"ul"},"third-party packages.")),(0,a.yg)("p",null,"And we should keep a blank line among these three kinds of packages like the following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-golang"},'import (\n    "fmt"\n    "strings"\n    "time"\n\n    "github.com/chaosblade-io/chaosblade/data"\n    "github.com/chaosblade-io/chaosblade/util"\n\n    "github.com/sirupsen/logrus"\n    "github.com/spf13/cobra"\n)\n')),(0,a.yg)("h4",{id:"rule004---variable-declaration-position"},"RULE004 - Variable declaration position"),(0,a.yg)("p",null,"Variable object should be declared at the beginning of the go file following package name and importing."),(0,a.yg)("h4",{id:"rule005---generation-of-action-failure"},"RULE005 - Generation of action failure"),(0,a.yg)("p",null,'When generating error in one function execution failure, we should generally use the following way to append string "failed to do something" and the specific err instance to construct a new error:'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-golang"},'fmt.Errorf("failed to do something: %v", err)\n')),(0,a.yg)("p",null,"When an err could be thrown out, please remember to add it in the error construction."),(0,a.yg)("h4",{id:"rule006---return-fast-to-indent-less"},"RULE006 - Return fast to indent less"),(0,a.yg)("p",null,"chaosblade encourages contributors to take advantages of ",(0,a.yg)("inlineCode",{parentName:"p"},"return fast")," to simply source code and indent less. For example, the following codes are discouraged:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-golang"},'// wrong example\nif retry {\n    if t, err := calculateSleepTime(d); err == nil {\n        time.Sleep(t)\n        times++\n        return retryLoad()\n    }\n    return fmt.Errorf("failed to calculate timeout: %v", err)\n}\nreturn nil\n')),(0,a.yg)("p",null,"In code above, there are some indents which can be avoided. The encouraged way is like the following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-golang"},'// correct example\nif !retry {\n    return nil\n}\n\nt, err := calculateSleepTime(d);\nif err != nil {\n    return fmt.Errorf("failed to calculate timeout: %v", err)\n}\n\ntime.Sleep(t)\ntimes++\n\nreturn retryLoad()\n')),(0,a.yg)("h4",{id:"rule007---lowercase-log-and-error"},"RULE007 - Lowercase log and error"),(0,a.yg)("p",null,"No matter log or error, first letter of the message must be lower-case. So, ",(0,a.yg)("inlineCode",{parentName:"p"},'log.Debugf("failed to add list: %v", err)')," is encouraged. And ",(0,a.yg)("inlineCode",{parentName:"p"},'log.Debugf("Failed to add list: %v", err)')," is not perferred."),(0,a.yg)("h4",{id:"rule008---nested-errors"},"RULE008 - Nested errors"),(0,a.yg)("p",null,"When occurring nesting errors, we recommend first considering using package ",(0,a.yg)("inlineCode",{parentName:"p"},"github.com/pkg/errors"),"."),(0,a.yg)("h4",{id:"rule009---comment-correctly"},"RULE009 - Comment correctly"),(0,a.yg)("p",null,"Every comment must begin with ",(0,a.yg)("inlineCode",{parentName:"p"},"//")," plus a whitespace no matter for a variable, struct, function, code block and anything else. Please don't forget the whitespace, and end up all the sentence with a ",(0,a.yg)("inlineCode",{parentName:"p"},"."),". In addition, it is encouraged to use third person singular to polish the majority of function's comments. For example, the following way"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-golang"},"// wrong example\n// ExecContainer execute a process in container.\nfunc (c *Client) ExecContainer(ctx context.Context, process *Process) error {\n    ......\n}\n")),(0,a.yg)("p",null,"could be polished to be ",(0,a.yg)("inlineCode",{parentName:"p"},"executes")," rather than ",(0,a.yg)("inlineCode",{parentName:"p"},"execute"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-golang"},"// correct example\n// ExecContainer executes a process in container.\nfunc (c *Client) ExecContainer(ctx context.Context, process *Process) error {\n    ......\n}\n")),(0,a.yg)("h4",{id:"rule010---always-remember-dry"},"RULE010 - Always remember DRY"),(0,a.yg)("p",null,"We should take ",(0,a.yg)("inlineCode",{parentName:"p"},"DRY(Don't Repeat Yourself)")," into consideration when adding anything."),(0,a.yg)("h4",{id:"rule011---welcome-to-your-addition"},"RULE011 - Welcome to your addition"),(0,a.yg)("p",null,"If you think much more practical code styles should be introduced in chaosblade. Please submit a pull request to make this better."),(0,a.yg)("h3",{id:"reference"},"Reference"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/alibaba/pouch/blob/master/docs/contributions/code_styles.md"},"Pouch Code Style")))}g.isMDXComponent=!0}}]);