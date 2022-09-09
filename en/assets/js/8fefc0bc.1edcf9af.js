(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[3635],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return p}});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=i.createContext({}),c=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(n),p=s,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||r;return n?i.createElement(f,o(o({ref:t},l),{},{components:n})):i.createElement(f,o({ref:t},l))}));function p(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5690:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return a},toc:function(){return u},default:function(){return l}});var i=n(2122),s=n(9756),r=(n(7294),n(3905)),o={title:"Issue submission and handling specifications"},a={unversionedId:"community/issue-standard",id:"community/issue-standard",isDocsHomePage:!1,title:"Issue submission and handling specifications",description:"Issue submission specification",source:"@site/docs/community/issue-standard.md",sourceDirName:"community",slug:"/community/issue-standard",permalink:"/en/docs/next/community/issue-standard",editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/website/docs/community/issue-standard.md",version:"current",frontMatter:{title:"Issue submission and handling specifications"},sidebar:"docs",previous:{title:"Development standard",permalink:"/en/docs/next/community/dev-standard"},next:{title:"\u6a21\u62dfCPU\u8d1f\u8f7d\u5b9e\u9a8c",permalink:"/en/docs/next/experiment-types/host/blade create cpu load"}},u=[{value:"Issue submission specification",id:"issue-submission-specification",children:[]},{value:"Issue handling specification",id:"issue-handling-specification",children:[]}],c={toc:u};function l(e){var t=e.components,n=(0,s.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"issue-submission-specification"},"Issue submission specification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Please make good use of the issue search function, and make a full search before submitting an issue, confirm that there is no relevant existing issue, and then submit a new issue"),(0,r.kt)("li",{parentName:"ul"},"When submitting an issue, please provide as detailed information as possible according to the template, so as to facilitate community contributors to reproduce, locate and confirm the problem"),(0,r.kt)("li",{parentName:"ul"},"Issue lists should aim to be readable and retrievable, issue submitters should summarize titles meaningfully and easily retrievable, keeping the content correct and complete"),(0,r.kt)("li",{parentName:"ul"},"Please reply to the issue after the issue is resolved to provide valid information for other developers who view the issue"),(0,r.kt)("li",{parentName:"ul"},"Please pay attention to the issue in time, and look forward to interacting and discussing with you in the process of solving the problem. Issues with no feedback for a long time will be closed regularly"),(0,r.kt)("li",{parentName:"ul"},"In order to ensure the diversity of the community, please use English as much as possible to participate in the communication")),(0,r.kt)("h2",{id:"issue-handling-specification"},"Issue handling specification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Issue rotating committee members should tag new issues with the correct tags and be responsible for assigning community members to follow up on the issue"),(0,r.kt)("li",{parentName:"ul"},"For issues with missing necessary information, the rotating committee members should guide the issue submitter to supplement the complete information before processing"),(0,r.kt)("li",{parentName:"ul"},"Rotating committee members will regularly close issues that have not received feedback for a long time"),(0,r.kt)("li",{parentName:"ul"},"For issues related to code such as bug fixes and feature enhancements, developers please reply under this Issue and inform others about your work content and expected DDL")))}l.isMDXComponent=!0}}]);