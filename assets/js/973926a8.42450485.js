"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[223],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6934:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:2},c="4.2 Conditions",l={unversionedId:"04coin-set-model/conditions",id:"04coin-set-model/conditions",isDocsHomePage:!1,title:"4.2 Conditions",description:"Puzzles in Chia must be valid CLVM programs. These programs are executed by the CLVM interpreter, and they must either fail, or return a list of conditions.  Recall that every spend of a coin must run the puzzle associated with that coin.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/04coin-set-model/conditions.md",sourceDirName:"04coin-set-model",slug:"/04coin-set-model/conditions",permalink:"/docs/04coin-set-model/conditions",editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/04coin-set-model/conditions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"4.1 Coins, Puzzles and Solutions",permalink:"/docs/04coin-set-model/what-is-a-coin"},next:{title:"4.3 Spend Bundles",permalink:"/docs/04coin-set-model/spend_bundles"}},u=[],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"42-conditions"},"4.2 Conditions"),(0,i.kt)("p",null,"Puzzles in Chia must be valid CLVM programs. These programs are executed by the CLVM interpreter, and they must either fail, or return a list of ",(0,i.kt)("strong",{parentName:"p"},"conditions"),".  Recall that every spend of a coin must run the puzzle associated with that coin."),(0,i.kt)("p",null,'CLVM programs have no access to the outside world, or even to blockchain parameters like block height. Therefore, to interact with the outside environment, they return a list of conditions, each of which must be valid in order for the spend itself to be valid. Conditions are split into two categories: "this spend is only valid if X" and "if this spend is valid then X".'),(0,i.kt)("p",null,"For a complete list of conditions, along with their format and behavior, please see ",(0,i.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/coins_spends_and_wallets#conditions",title:"Conditions in Chialisp"},"Chialisp.com"),"."),(0,i.kt)("p",null,"Chialisp.com also contains information on the construction of ",(0,i.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/standard_transaction"},"the standard transaction"),"."))}p.isMDXComponent=!0}}]);