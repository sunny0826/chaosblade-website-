"use strict";(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[1726],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=a,f=u["".concat(p,".").concat(g)]||u[g]||m[g]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16477:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var r=n(87462),a=(n(67294),n(3905));const i={title:"Platform Box Quick Start",sidebar_position:2},o=void 0,l={unversionedId:"getting-started/platform-box-quick-start",id:"version-1.7.1/getting-started/platform-box-quick-start",title:"Platform Box Quick Start",description:"To verify the fault tolerance and recoverability of the system, you can inject appropriate faults into the system and observe the system performance to identify possible problems and rectify them in time. This paper uses the CPU full load experiment as an example to describe how to use the Box platform for fault injection.",source:"@site/versioned_docs/version-1.7.1/getting-started/platform-box-quick-start.md",sourceDirName:"getting-started",slug:"/getting-started/platform-box-quick-start",permalink:"/en/docs/1.7.1/getting-started/platform-box-quick-start",draft:!1,editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/versioned_docs/version-1.7.1/getting-started/platform-box-quick-start.md",tags:[],version:"1.7.1",sidebarPosition:2,frontMatter:{title:"Platform Box Quick Start",sidebar_position:2},sidebar:"myAutogeneratedSidebar",previous:{title:"Yaml \u6a21\u5f0f\u4f7f\u7528\u7b80\u4ecb",permalink:"/en/docs/1.7.1/getting-started/chaosblade-tool-quick-start/yaml-mode-user-guaid"},next:{title:"Installation And Deployment",permalink:"/en/docs/1.7.1/getting-started/installation-and-deployment/"}},p={},s=[{value:"Step 1: Install the probe",id:"step-1-install-the-probe",level:2},{value:"Step 2: Creating an experiment",id:"step-2-creating-an-experiment",level:2},{value:"Step 3\uff1aExecuting an experiment",id:"step-3executing-an-experiment",level:2},{value:"Step 4\uff1aStopping an experiment",id:"step-4stopping-an-experiment",level:2},{value:"Viewing experiment Information",id:"viewing-experiment-information",level:2}],c={toc:s};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To verify the fault tolerance and recoverability of the system, you can inject appropriate faults into the system and observe the system performance to identify possible problems and rectify them in time. This paper uses the CPU full load experiment as an example to describe how to use the Box platform for fault injection."),(0,a.kt)("h2",{id:"step-1-install-the-probe"},"Step 1: Install the probe"),(0,a.kt)("p",null,"Probes are primarily a command channel and data collection, so they need to be installed on the machine or cluster they are ",(0,a.kt)("strong",{parentName:"p"},"running on"),"\nGo to the Box main screen, select ",(0,a.kt)("strong",{parentName:"p"},"Overview")," in the left navigation bar, and click ",(0,a.kt)("strong",{parentName:"p"},"Install a experiment Probe")," in the Welcome ",(0,a.kt)("strong",{parentName:"p"},"Failure experiment")," section. For details, see ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/1.7.1/getting-started/installation-and-deployment/agent-install"},"Probe Installation Guide")),(0,a.kt)("h2",{id:"step-2-creating-an-experiment"},"Step 2: Creating an experiment"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the left navigation bar of the AHAS console.Select ",(0,a.kt)("strong",{parentName:"li"},"My Space")),(0,a.kt)("li",{parentName:"ol"},"On the top left corner of the ",(0,a.kt)("strong",{parentName:"li"},"My Space")," page click ",(0,a.kt)("strong",{parentName:"li"},"New experiment"),", then click  ",(0,a.kt)("strong",{parentName:"li"},"New Blank experiment"),"."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"experiment Configuration")," page, fill in the ",(0,a.kt)("strong",{parentName:"li"},"experiment Name"),", ",(0,a.kt)("strong",{parentName:"li"},"experiment description"),", and ",(0,a.kt)("strong",{parentName:"li"},"experiment label"),"."),(0,a.kt)("li",{parentName:"ol"},"Do the following configuration in the ",(0,a.kt)("strong",{parentName:"li"},"Experiment Object")," section of the ",(0,a.kt)("strong",{parentName:"li"},"Configuration TAB")," ",(0,a.kt)("img",{alt:"image.png",src:n(13061).Z,width:"1451",height:"748"}),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"experiment object")," page,set the group name\u3001resource type, and machine list.",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note")," ",(0,a.kt)("strong",{parentName:"p"},"the machine list"),"  You can select one or more machines."))),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"+ Adding an experiment"),"\uff0cthen select ",(0,a.kt)("strong",{parentName:"li"},"The CPU on the host is fully loaded"),"\uff0cthen click ",(0,a.kt)("strong",{parentName:"li"},"confirm"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"save"),"\uff0cthen click ",(0,a.kt)("strong",{parentName:"li"},"next"),"."))),(0,a.kt)("li",{parentName:"ol"},"At ",(0,a.kt)("strong",{parentName:"li"},"Global Configuration")," complete the following configuration.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Experiment Process")," for ",(0,a.kt)("strong",{parentName:"li"},"Execution in sequence"),"."),(0,a.kt)("li",{parentName:"ol"},"At ",(0,a.kt)("strong",{parentName:"li"},"Recovery Policy")," Area ",(0,a.kt)("strong",{parentName:"li"},"+ Adding a Policy\uff0c")," select ",(0,a.kt)("strong",{parentName:"li"},"CPU Specifications"),"\uff0cthen click ",(0,a.kt)("strong",{parentName:"li"},"confirm"),"."),(0,a.kt)("li",{parentName:"ol"},"Set the automatic recovery time to 30 minutes."))),(0,a.kt)("li",{parentName:"ol"},"click ",(0,a.kt)("strong",{parentName:"li"},"Next"),".")),(0,a.kt)("h2",{id:"step-3executing-an-experiment"},"Step 3\uff1aExecuting an experiment"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Choose from the navigation bar on the left ",(0,a.kt)("strong",{parentName:"li"},"chaos experiment > my space"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"At ",(0,a.kt)("strong",{parentName:"li"},"my space")," Click on the right of the target experiment task ",(0,a.kt)("strong",{parentName:"li"},"experiment of the operation column"),"\uff0cthen at ",(0,a.kt)("strong",{parentName:"li"},"Start performing the experiment")," Click in the dialog box ",(0,a.kt)("strong",{parentName:"li"},"confirm"),".After the fault is injected, the CPU indicator of the target machine increases, indicating that the fault has taken effect.",(0,a.kt)("img",{alt:"image.png",src:n(63810).Z,width:"1666",height:"727"}))),(0,a.kt)("h2",{id:"step-4stopping-an-experiment"},"Step 4\uff1aStopping an experiment"),(0,a.kt)("p",null,"You can stop the experiment in the following two ways."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Automatic stop: If the experiment time exceeds the automatic recovery time, the experiment stops automatically.Available on the experiment page ",(0,a.kt)("strong",{parentName:"li"},"Protection Policy")," Area View the automatic recovery time\uff0cIn this example, 30 minutes.",(0,a.kt)("img",{alt:"image.png",src:n(75514).Z,width:"876",height:"125"})),(0,a.kt)("li",{parentName:"ul"},"Manual stop\uff1aIn practice ",(0,a.kt)("strong",{parentName:"li"},"Status of Execution")," Area Click ",(0,a.kt)("strong",{parentName:"li"},"Log"),". If the current step is complete, wait for user confirmation is displayed in the log\uff0cthen click  ",(0,a.kt)("strong",{parentName:"li"},"Create a CPU load in script mode")," The Continue icon on the right resumes the experiment. To stop the experiment directly, click the Stop icon\u3002",(0,a.kt)("img",{alt:"image.png",src:n(5963).Z,width:"1666",height:"727"}))),(0,a.kt)("h2",{id:"viewing-experiment-information"},"Viewing experiment Information"),(0,a.kt)("p",null,"After the experiment is complete, you can view the experiment duration, CPU indicator curve, experiment parameters, and experiment logs on the experiment details page.\n",(0,a.kt)("img",{alt:"image.png",src:n(2051).Z,width:"1675",height:"838"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Slide the mouse to ",(0,a.kt)("strong",{parentName:"li"},"CPU Specifications")," Time sequence curve\uff0cYou can view specific CPU indicators of the experiment machine at a certain point in time."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Information of machine")," Of the region ",(0,a.kt)("strong",{parentName:"li"},"parameter"),"\uff0cYou can view the execution parameters of a fully-loaded CPU node."),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Information of machine")," Of the region ",(0,a.kt)("strong",{parentName:"li"},"log"),"\uff0cYou can view logs about the experiment process."),(0,a.kt)("li",{parentName:"ul"},"Click Top right corner of the page ",(0,a.kt)("strong",{parentName:"li"},"View Details"),"\uff0cYou can view the configuration and experiment logs of the experiment task.")))}m.isMDXComponent=!0},63810:function(e,t,n){t.Z=n.p+"assets/images/box-drill-result-e4c84515c7687b82abb4358c20c5bc3e.png"},2051:function(e,t,n){t.Z=n.p+"assets/images/drill-information-adb7ca8eddb9fcf4141082c04ef9209d.png"},75514:function(e,t,n){t.Z=n.p+"assets/images/drill-recovery-195897bae540c833090f691bf5427c78.png"},5963:function(e,t,n){t.Z=n.p+"assets/images/drill-stop-f11dd74b65c8b36b3e0b519ae5801972.png"},13061:function(e,t,n){t.Z=n.p+"assets/images/drill-target-4fb2e2e27e0f84e46cf5aaf5056ea9b2.png"}}]);