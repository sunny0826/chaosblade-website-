(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[4108],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=o,g=m["".concat(s,".").concat(p)]||m[p]||u[p]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3401:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={title:"Development standard"},l={unversionedId:"community/dev-standard",id:"community/dev-standard",isDocsHomePage:!1,title:"Development standard",description:"Code Style",source:"@site/docs/community/dev-standard.md",sourceDirName:"community",slug:"/community/dev-standard",permalink:"/en/docs/next/community/dev-standard",editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/website/docs/community/dev-standard.md",version:"current",frontMatter:{title:"Development standard"},sidebar:"docs",previous:{title:"PR Submission Guidelines",permalink:"/en/docs/next/community/PR-guide"},next:{title:"Issue submission and handling specifications",permalink:"/en/docs/next/community/issue-standard"}},s=[{value:"Code Style",id:"code-style",children:[{value:"Code Style Tools",id:"code-style-tools",children:[]},{value:"Code Review Comments",id:"code-review-comments",children:[]},{value:"Additional Style Rules",id:"additional-style-rules",children:[]},{value:"Reference",id:"reference",children:[]}]}],c={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"code-style"},"Code Style"),(0,a.kt)("p",null,"Code style is a set of rules or guidelines when writing source codes of a software project. Following particular code style will definitely help contributors to read and understand source codes very well. In addition, it will help to avoid introducing errors as well."),(0,a.kt)("h3",{id:"code-style-tools"},"Code Style Tools"),(0,a.kt)("p",null,"Project chaosblade is written in Golang. And currently we use three tools to help conform code styles in this project. These three tools are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://golang.org/cmd/gofmt"},"gofmt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://golang.org/cmd/vet/"},"go vet"))),(0,a.kt)("h3",{id:"code-review-comments"},"Code Review Comments"),(0,a.kt)("p",null,"When collaborating in chaosblade project, we follow the style from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/CodeReviewComments"},"Go Code Review Comments"),". Before contributing, we treat this as a must-read."),(0,a.kt)("h3",{id:"additional-style-rules"},"Additional Style Rules"),(0,a.kt)("p",null,"For a project, existing tools and rules may not be sufficient. To align more in styles, we recommend contributors taking a thorough look at the following additional style rules:"),(0,a.kt)("h4",{id:"rule001---add-blank-line-between-fields-comments"},"RULE001 - Add blank line between field's comments"),(0,a.kt)("p",null,"When constructing a struct, if comments needed for fields in struct, keep a blank line between fields. The encouraged way is as following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"// correct example\n// ContainerManager is the default implement of interface ContainerMgr.\ntype ContainerManager struct {\n    // Store stores containers in Backend store.\n    // Element operated in store must has a type of *ContainerMeta.\n    // By default, Store will use local filesystem with json format to store containers.\n    Store *meta.Store\n\n    // Client is used to interact with containerd.\n    Client ctrd.APIClient\n\n    // NameToID stores relations between container's name and ID.\n    // It is used to get container ID via container name.\n    NameToID *collect.SafeMap\n    ......\n}\n")),(0,a.kt)("p",null,"Rather than:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"// wrong example\n// ContainerManager is the default implement of interface ContainerMgr.\ntype ContainerManager struct {\n    // Store stores containers in Backend store.\n    // Element operated in store must has a type of *ContainerMeta.\n    // By default, Store will use local filesystem with json format to store containers.\n    Store *meta.Store\n    // Client is used to interact with containerd.\n    Client ctrd.APIClient\n    // NameToID stores relations between container's name and ID.\n    // It is used to get container ID via container name.\n    NameToID *collect.SafeMap\n    ......\n}\n")),(0,a.kt)("h4",{id:"rule002---add-parameter-name-in-interface-definition"},"RULE002 - Add parameter name in interface definition"),(0,a.kt)("p",null,"When defining interface functions, we should always explicitly add formal parameters, and this helps a lot to code readability. For example, the following way are preferred:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"// correct example\n// ContainerMgr is an interface to define all operations against container.\ntype ContainerMgr interface {\n    // Start a container.\n    Start(ctx context.Context, id, detachKeys string) error\n\n    // Stop a container.\n    Stop(ctx context.Context, name string, timeout int64) error\n    ......\n}\n")),(0,a.kt)("p",null,"However, missing formal parameter's name would make interface unreadable, since we would never know what the parameter's real meaning unless turning to one implementation of this interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"// wrong example\ntype ContainerMgr interface {\n    // Start a container.\n    Start(context.Context, string, string) error\n\n    // Stop a container.\n    Stop(context.Context, string, int64) error\n    ......\n}\n\n")),(0,a.kt)("p",null,"In addition, a blank line between function's comments is encouraged to make interface more readable."),(0,a.kt)("h4",{id:"rule003---import-packages"},"RULE003 - Import Packages"),(0,a.kt)("p",null,"When importing packages, to improve readabilities, we should import package by sequence:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Golang's built-in system packages;"),(0,a.kt)("li",{parentName:"ul"},"project's own packages;"),(0,a.kt)("li",{parentName:"ul"},"third-party packages.")),(0,a.kt)("p",null,"And we should keep a blank line among these three kinds of packages like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},'import (\n    "fmt"\n    "strings"\n    "time"\n\n    "github.com/chaosblade-io/chaosblade/data"\n    "github.com/chaosblade-io/chaosblade/util"\n\n    "github.com/sirupsen/logrus"\n    "github.com/spf13/cobra"\n)\n')),(0,a.kt)("h4",{id:"rule004---variable-declaration-position"},"RULE004 - Variable declaration position"),(0,a.kt)("p",null,"Variable object should be declared at the beginning of the go file following package name and importing."),(0,a.kt)("h4",{id:"rule005---generation-of-action-failure"},"RULE005 - Generation of action failure"),(0,a.kt)("p",null,'When generating error in one function execution failure, we should generally use the following way to append string "failed to do something" and the specific err instance to construct a new error:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},'fmt.Errorf("failed to do something: %v", err)\n')),(0,a.kt)("p",null,"When an err could be thrown out, please remember to add it in the error construction."),(0,a.kt)("h4",{id:"rule006---return-fast-to-indent-less"},"RULE006 - Return fast to indent less"),(0,a.kt)("p",null,"chaosblade encourages contributors to take advantages of ",(0,a.kt)("inlineCode",{parentName:"p"},"return fast")," to simply source code and indent less. For example, the following codes are discouraged:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},'// wrong example\nif retry {\n    if t, err := calculateSleepTime(d); err == nil {\n        time.Sleep(t)\n        times++\n        return retryLoad()\n    }\n    return fmt.Errorf("failed to calculate timeout: %v", err)\n}\nreturn nil\n')),(0,a.kt)("p",null,"In code above, there are some indents which can be avoided. The encouraged way is like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},'// correct example\nif !retry {\n    return nil\n}\n\nt, err := calculateSleepTime(d);\nif err != nil {\n    return fmt.Errorf("failed to calculate timeout: %v", err)\n}\n\ntime.Sleep(t)\ntimes++\n\nreturn retryLoad()\n')),(0,a.kt)("h4",{id:"rule007---lowercase-log-and-error"},"RULE007 - Lowercase log and error"),(0,a.kt)("p",null,"No matter log or error, first letter of the message must be lower-case. So, ",(0,a.kt)("inlineCode",{parentName:"p"},'log.Debugf("failed to add list: %v", err)')," is encouraged. And ",(0,a.kt)("inlineCode",{parentName:"p"},'log.Debugf("Failed to add list: %v", err)')," is not perferred."),(0,a.kt)("h4",{id:"rule008---nested-errors"},"RULE008 - Nested errors"),(0,a.kt)("p",null,"When occurring nesting errors, we recommend first considering using package ",(0,a.kt)("inlineCode",{parentName:"p"},"github.com/pkg/errors"),"."),(0,a.kt)("h4",{id:"rule009---comment-correctly"},"RULE009 - Comment correctly"),(0,a.kt)("p",null,"Every comment must begin with ",(0,a.kt)("inlineCode",{parentName:"p"},"//")," plus a whitespace no matter for a variable, struct, function, code block and anything else. Please don't forget the whitespace, and end up all the sentence with a ",(0,a.kt)("inlineCode",{parentName:"p"},"."),". In addition, it is encouraged to use third person singular to polish the majority of function's comments. For example, the following way"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"// wrong example\n// ExecContainer execute a process in container.\nfunc (c *Client) ExecContainer(ctx context.Context, process *Process) error {\n    ......\n}\n")),(0,a.kt)("p",null,"could be polished to be ",(0,a.kt)("inlineCode",{parentName:"p"},"executes")," rather than ",(0,a.kt)("inlineCode",{parentName:"p"},"execute"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"// correct example\n// ExecContainer executes a process in container.\nfunc (c *Client) ExecContainer(ctx context.Context, process *Process) error {\n    ......\n}\n")),(0,a.kt)("h4",{id:"rule010---always-remember-dry"},"RULE010 - Always remember DRY"),(0,a.kt)("p",null,"We should take ",(0,a.kt)("inlineCode",{parentName:"p"},"DRY(Don't Repeat Yourself)")," into consideration when adding anything."),(0,a.kt)("h4",{id:"rule011---welcome-to-your-addition"},"RULE011 - Welcome to your addition"),(0,a.kt)("p",null,"If you think much more practical code styles should be introduced in chaosblade. Please submit a pull request to make this better."),(0,a.kt)("h3",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/alibaba/pouch/blob/master/docs/contributions/code_styles.md"},"Pouch Code Style")))}d.isMDXComponent=!0}}]);