"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[3982],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,d=p["".concat(s,".").concat(f)]||p[f]||h[f]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4942:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:4},s="9.4 Architecture",l={unversionedId:"09keys/architecture",id:"09keys/architecture",isDocsHomePage:!1,title:"9.4 Architecture",description:"The following image assumes an architecture where the farmer decides to keep all keys separate.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/09keys/architecture.md",sourceDirName:"09keys",slug:"/09keys/architecture",permalink:"/docs/09keys/architecture",editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/09keys/architecture.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"9.3 Plot Public Keys",permalink:"/docs/09keys/plot_public_keys"},next:{title:"10.1 Chia Protocol",permalink:"/docs/10protocol/protocol"}},u=[],h={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"94-architecture"},"9.4 Architecture"),(0,a.kt)("p",null,"The following image assumes an architecture where the farmer decides to keep all keys separate."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a wallet key that can potentially be cold storage"),(0,a.kt)("li",{parentName:"ul"},"local keys within the harvester machine, which are separated from the farmer"),(0,a.kt)("li",{parentName:"ul"},"a separate pool key")),(0,a.kt)("p",null,"Note that in the simplest configuration, a user can run all of the services (wallet, node, harvester, farmer, pool) in the same machine, and thus the same master key is used for all keys."),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/keys/architecture.png",alt:"drawing"})),(0,a.kt)("p",null,"In this configuration, harvesters only store plot files, and provide the farmer with signatures by the local sk whenever necessary."),(0,a.kt)("p",null,"The farmer machine has its own key, which is used to create signatures of new blocks, and combines them with the local sk signatures. The farmer machine can configure a different wallet address to send the funds to, so the user can keep their spending keys in cold storage."),(0,a.kt)("p",null,"Furthermore, the communication channel between the farmer and harvester is authenticated with TLS certificates, which allows the harvester to know if the farmer is trusted."),(0,a.kt)("p",null,"The farmer can also communicate with a pool, through the pooling protocol. In this case, the farmer would send periodic messages to the pool, to prove space. Recall ",(0,a.kt)("a",{parentName:"p",href:"/docs/02architecture/p2p-system#pools",title:"Section 2.1: Pool architecture"},"from Section 2.1")," that each block is eligible to create two coinbase reward coins: the pool reward, which is 7/8, and the farmer reward, which is 1/8 + transaction fees."),(0,a.kt)("p",null,"After farming a block, the 7/8 coin is absorbed by the pool, and later distributed to pool members. Chia's pool architecture is decentralized, because the farmers run their own node, and pooling does not lead to central control of the system."),(0,a.kt)("p",null,"If using a pool contract puzzle hash, the pool signature is not included in the block."))}p.isMDXComponent=!0}}]);