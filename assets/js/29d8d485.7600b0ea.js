(self.webpackChunkchaosblade=self.webpackChunkchaosblade||[]).push([[2515],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2669:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),c={title:"\u5feb\u901f\u5f00\u59cb"},i={unversionedId:"getting-started/quick-start",id:"version-1.7.0/getting-started/quick-start",isDocsHomePage:!1,title:"\u5feb\u901f\u5f00\u59cb",description:"\u5feb\u901f\u4f53\u9a8c chaosblade\uff0c\u53ef\u4ee5\u62c9\u53d6 docker \u955c\u50cf\u5e76\u8fd0\u884c\uff0c\u5728\u5bb9\u5668\u5185\u8fdb\u884c\u4f53\u9a8c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7.0/getting-started/quick-start.md",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/docs/getting-started/quick-start",editUrl:"https://github.com/chaosblade-io/chaosblade-website/edit/master/website/versioned_docs/version-1.7.0/getting-started/quick-start.md",version:"1.7.0",frontMatter:{title:"\u5feb\u901f\u5f00\u59cb"},sidebar:"version-1.7.0/docs",previous:{title:"\u4ecb\u7ecd",permalink:"/docs/"},next:{title:"\u8d21\u732e\u6587\u6863",permalink:"/docs/community/docs"}},l=[],s={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5feb\u901f\u4f53\u9a8c chaosblade\uff0c\u53ef\u4ee5\u62c9\u53d6 docker \u955c\u50cf\u5e76\u8fd0\u884c\uff0c\u5728\u5bb9\u5668\u5185\u8fdb\u884c\u4f53\u9a8c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://tvax2.sinaimg.cn/large/ad5fbf65gy1gq593nrinog212i0mqu0y.gif",alt:null})),(0,a.kt)("p",null,"\u4e0b\u8f7d\u955c\u50cf\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull chaosbladeio/chaosblade-demo\n")),(0,a.kt)("p",null,"\u8fd0\u884c demo \u5bb9\u5668\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it --privileged chaosbladeio/chaosblade-demo\n")),(0,a.kt)("p",null,"\u8fdb\u5165\u955c\u50cf\u4e4b\u540e\uff0c\u53ef\u9605\u8bfb ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chaosblade-io/chaosblade/blob/master/README_CN.md"},"README.md")," \u6587\u4ef6\u5b9e\u65bd\u6df7\u6c8c\u5b9e\u9a8c\uff0cEnjoy it\u3002"))}u.isMDXComponent=!0}}]);