"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[1819],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,d=u["".concat(l,".").concat(f)]||u[f]||h[f]||s;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1152:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={sidebar_position:6},i="3.6 Harvester Algorithm",a={unversionedId:"03consensus/harvester_algorithm",id:"03consensus/harvester_algorithm",title:"3.6 Harvester Algorithm",description:"Approximately every 9.375 seconds, the full node sends a new signage point to the farmer, who sends it to each harvester.",source:"@site/docs/03consensus/harvester_algorithm.md",sourceDirName:"03consensus",slug:"/03consensus/harvester_algorithm",permalink:"/zh/docs/03consensus/harvester_algorithm",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/03consensus/harvester_algorithm.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"3.5 Signage Points and Infusion Points",permalink:"/zh/docs/03consensus/signage_points_and_infusion_points"},next:{title:"3.7 Multiple Blocks",permalink:"/zh/docs/03consensus/multiple_blocks"}},l={},c=[],p={toc:c};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"36-harvester-algorithm"},"3.6 Harvester Algorithm"),(0,o.kt)("p",null,"Approximately every 9.375 seconds, the full node sends a new signage point to the farmer, who sends it to each harvester."),(0,o.kt)("p",null,"The exact protocol message sent for each signage point is the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class PoolDifficulty:\n    difficulty: uint64\n    sub_slot_iters: uint64\n    pool_contract_puzzle_hash: bytes32\n\nclass NewSignagePointHarvester:\n    challenge_hash: bytes32\n    difficulty: uint64\n    sub_slot_iters: uint64\n    signage_point_index: uint8\n    sp_hash: bytes32\n    pool_difficulties: List[PoolDifficulty]\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The harvester receives a signage point, and computes the plot filter:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"plot filter bits = sha256(plot_id + challenge_hash + sp_hash)"),"."),(0,o.kt)("p",null,"If the resulting bits start with 9 zeroes, then the plot passes the filter. This does not require disk access, since the plot_ids are stored in memory. 2. For each of the plots passing the filter, a new thread is started, which performs the quality lookups. Recall that this requires around 7-9 random reads into the plot, one for each table. This is where the majority of the disk activity will be. On average, 1 of every 512 plots will perform this step. 3. required_iterations is computed, as explained in ",(0,o.kt)("a",{parentName:"p",href:"/docs/03consensus/signage_points_and_infusion_points",title:"Section 3.5: Signage Points and Infusion Points"},"Section 3.5"),". If the farmer is currently farming for a pool, then the pool will use custom values for both ",(0,o.kt)("inlineCode",{parentName:"p"},"difficulty")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sub-slot_iterations"),". These values make it more likely that a proof will be found. The reason to use these values is to make it easier for the pool to determine the amount of storage a farmer currently has dedicated.\nIf required_iterations is less than the interval_iterations, this proof of space is good (it has won either a pool partial or a block). Most proofs will not pass this step. 5. For winning proofs, the whole proof is fetched on disk (approximately 64 random reads in the plot). 6. The proof is sent back to the farmer."))}h.isMDXComponent=!0}}]);