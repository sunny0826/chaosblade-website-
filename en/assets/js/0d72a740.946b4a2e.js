"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[7141],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91133:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return u}});var o=n(87462),i=(n(67294),n(3905));const r={title:"PR Submission Guidelines",sidebar_position:1},a=void 0,s={unversionedId:"community/PR-guide",id:"community/PR-guide",title:"PR Submission Guidelines",description:"Preparation",source:"@site/docs/community/PR-guide.md",sourceDirName:"community",slug:"/community/PR-guide",permalink:"/en/docs/next/community/PR-guide",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/docs/community/PR-guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"PR Submission Guidelines",sidebar_position:1},sidebar:"myAutogeneratedSidebar",previous:{title:"Community",permalink:"/en/docs/next/community/"},next:{title:"Development standard",permalink:"/en/docs/next/community/dev-standard"}},l={},u=[{value:"Preparation",id:"preparation",level:2},{value:"Development Process",id:"development-process",level:2},{value:"Submission rules",id:"submission-rules",level:2},{value:"other",id:"other",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"preparation"},"Preparation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Before you are ready to submit code to us, please read the ",(0,i.kt)("a",{parentName:"li",href:"/en/docs/next/community/dev-standard"},"Development Specification")," and strictly follow the code format specified therein"),(0,i.kt)("li",{parentName:"ul"},"Please make sure that there is a corresponding issue for the function you want to fix or enhance. If it is a newly discovered problem or you want to provide a function enhancement that is not in the issue, please create a new issue and set the correct label, and reply under this issue Show that you are working on this issue. For submitting or handling issues, please refer to ",(0,i.kt)("a",{parentName:"li",href:"/en/docs/next/community/issue-standard"},"Issue Submission and Handling Specifications")),(0,i.kt)("li",{parentName:"ul"},"Please set the ",(0,i.kt)("inlineCode",{parentName:"li"},"user.name")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"user.email")," parameters correctly in git, otherwise your id may not be displayed in the contributor list, refer to the command ",(0,i.kt)("inlineCode",{parentName:"li"},'git config -- global user.name "username"'))),(0,i.kt)("h2",{id:"development-process"},"Development Process"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1. Prepare the repository")),(0,i.kt)("p",null,"Go to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade"},"ChaosBlade Github Repo")," fork the repository to your Github account."),(0,i.kt)("p",null,"Clone to local."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/{your-github-id}/chaosblade.git\n")),(0,i.kt)("p",null,"Note: The ChaosBlade project is only taken as an example. ChaosBlade divides the project into many different projects according to scenarios and fields. Please correctly pull the project you want to change and ensure that the project can be compiled."),(0,i.kt)("p",null,"Add ChaosBlade remote repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git remote add upstream https://github.com/{your-github-id}/chaosblade.git\ngit remote -v\n")),(0,i.kt)("p",null,"Execute the compile command ",(0,i.kt)("inlineCode",{parentName:"p"},"make build")," to ensure that the project can be compiled. Here we recommend that you read the MakeFile file in the project. If you clearly understand which part of the project you want to modify, you can selectively execute only the corresponding part of the project make instructions, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'make build_with cli os\n# If it is a mac system, run\nmake build_with cli os_darwin\n# If you want to compile linux system version selectively, execute:\nARGS="cli os" make build_with_linux\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2. Select issue")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select the issue you want to modify, reply to it and indicate that you are currently working on this issue, and set a deadline for yourself when replying."),(0,i.kt)("li",{parentName:"ul"},"There will be a member in the community who will be responsible for following up on the issue. You can also contact the member by email to get relevant suggestions, discussions or guidance.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3. Create a branch")),(0,i.kt)("p",null,"Switch to the pulled fork branch, pull the latest code, and create this working branch based on this branch"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git checkout master\ngit fetch upstream\ngit rebase upstream/master\ngit checkout -b issueNo\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4. Coding Development")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Please follow the development specifications of ",(0,i.kt)("a",{parentName:"li",href:"/en/docs/next/community/dev-standard"},"ChaosBlade")," during the development process. And complete the corresponding checks before preparing to submit a pull request, test the ChaosBlade commands involved in the work."),(0,i.kt)("li",{parentName:"ul"},"Push the modified code to the branch of the fork library.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"5. Submit PR")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Initiate a Pull Request to ChaosBlade's master on the homepage of your fork repository, please include the link of the issue you selected earlier in the PR description to associate the issue with this PR submission."),(0,i.kt)("li",{parentName:"ul"},"Next, the commit will be reviewed by the Reviewer responsible for the issue, who may discuss some implementation details and issues with you in a PR. When Reviewer is satisfied with the commit, the commit will be merged into the development branch."),(0,i.kt)("li",{parentName:"ul"},"Finally, congratulations that you have become a ChaosBlade contributor!")),(0,i.kt)("p",null,"After your branch has been merged, you can delete the remote branch (origin/issueNo) and its associated local branch (issueNo)"),(0,i.kt)("h2",{id:"submission-rules"},"Submission rules"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Commit Message")),(0,i.kt)("p",null,"Commit Message helps Reviewers better understand what the purpose of submitting a PR is. It can also help speed up the code review process. We encourage contributors to use explicit commit messages rather than ambiguous ones. In general, we advocate the following commit message types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"feat: A new feature"),(0,i.kt)("li",{parentName:"ul"},"fix: A bug fix"),(0,i.kt)("li",{parentName:"ul"},"docs: Documentation only changes"),(0,i.kt)("li",{parentName:"ul"},"style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)"),(0,i.kt)("li",{parentName:"ul"},"refactor: A code change that neither fixes a bug or adds a feature"),(0,i.kt)("li",{parentName:"ul"},"perf: A code change that improves performance"),(0,i.kt)("li",{parentName:"ul"},"test: Adding missing or correcting existing tests"),(0,i.kt)("li",{parentName:"ul"},"chore: Changes to the build process or auxiliary tools and libraries such as documentation generation")),(0,i.kt)("p",null,"We discourage developers from submitting Commit Messages similar to the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"fix bugs"),(0,i.kt)("li",{parentName:"ul"},"update"),(0,i.kt)("li",{parentName:"ul"},"add doc")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Commit Content")),(0,i.kt)("p",null,"Commits represent all content changes contained in one commit. We prefer to include content in one submission that can support a full review by Reviewer without the help of any other submissions. In other words, content in one commit can go through CI to avoid code clutter. In short, we need to remember a small rule:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Try to split the design as finely as possible; make small changes and submit multiple times, but the integrity of the submission should be guaranteed.")),(0,i.kt)("h2",{id:"other"},"other"),(0,i.kt)("p",null,"Developers should follow the behaviors of community contributors. For details, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade/blob/master/CODE_OF_CONDUCT.md"},"CONTRIBUTOR COVENANT CODE OF CONDUCT")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sign your commit")),(0,i.kt)("p",null,"Please add your signature to the end of your submission, which will certify that you wrote the patch and have the right to pass it as an open source patch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Developer Certificate of Origin\nVersion 1.1\n\nCopyright (C) 2004, 2006 The Linux Foundation and its contributors.\n660 York Street, Suite 102,\nSan Francisco, CA 94110 USA\n\nEveryone is permitted to copy and distribute verbatim copies of this\nlicense document, but changing it is not allowed.\n\nDeveloper's Certificate of Origin 1.1\n\nBy making a contribution to this project, I certify that:\n\n(a) The contribution was created in whole or in part by me and I\n    have the right to submit it under the open source license\n    indicated in the file; or\n\n(b) The contribution is based upon previous work that, to the best\n    of my knowledge, is covered under an appropriate open source\n    license and I have the right under that license to submit that\n    work with modifications, whether created in whole or in part\n    by me, under the same open source license (unless I am\n    permitted to submit under a different license), as indicated\n    in the file; or\n\n(c) The contribution was provided directly to me by some other\n    person who certified (a), (b) or (c) and I have not modified\n    it.\n\n(d) I understand and agree that this project and the contribution\n    are public and that a record of the contribution (including all\n    personal information I submit with it, including my sign-off) is\n    maintained indefinitely and may be redistributed consistent with\n    this project or the open source license(s) involved.\n")),(0,i.kt)("p",null,"You need to add at the end of each Commit Message"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Signed-off-by: Joe Smith <joe.smith@email.com>\n")),(0,i.kt)("p",null,"Please use your real name (sorry, anonymous or pseudonymous contributions are not accepted at this time)"),(0,i.kt)("p",null,"If you set ",(0,i.kt)("inlineCode",{parentName:"p"},"user.name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"user.email")," in the git parameters, you can sign directly through ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit -s"),", `",(0,i.kt)("inlineCode",{parentName:"p"},"-s` "),"The parameter will automatically add the signature line to the end of the Commit Message"))}m.isMDXComponent=!0}}]);