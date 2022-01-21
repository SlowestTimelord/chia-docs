"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[8853],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return n?o.createElement(f,s(s({ref:t},h),{},{components:n})):o.createElement(f,s({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3464:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return u}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],r={sidebar_position:11},l="3.11 Epoch and Difficulty Adjustment",c={unversionedId:"03consensus/epochs",id:"03consensus/epochs",isDocsHomePage:!1,title:"3.11 Epoch and Difficulty Adjustment",description:"Sub-epoch: Sub-epoch N starts when sub-epoch N-1 ends (except for 0th sub-epoch), and it ends at the end of the first slot where 384 * (N+1) blocks have been included since genesis.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/03consensus/epochs.md",sourceDirName:"03consensus",slug:"/03consensus/epochs",permalink:"/zh/docs/03consensus/epochs",editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/03consensus/epochs.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"3.10 Foliage",permalink:"/zh/docs/03consensus/foliage"},next:{title:"3.12 Light Clients",permalink:"/zh/docs/03consensus/light_clients"}},h=[{value:"Sub epochs",id:"sub-epochs",children:[]}],p={toc:h};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"311-epoch-and-difficulty-adjustment"},"3.11 Epoch and Difficulty Adjustment"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sub-epoch"),": Sub-epoch N starts when sub-epoch N-1 ends (except for 0th sub-epoch), and it ends at the end of the first slot where 384 * (N+1) blocks have been included since genesis."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Epoch"),": Epoch N starts when epoch N-1 ends (except for 0th epoch), and it ends at the end of the first slot where 4608 * (N + 1) blocks have been included since genesis."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Difficulty"),": A constant that scales the number of iterations for a given proof of space. Iterations are computed as difficulty / quality."),(0,i.kt)("p",null,"Every 4608 blocks, the difficulty adjustment is automatically performed. This modifies two parameters: The slot_iterations parameter, and the difficulty parameter."),(0,i.kt)("p",null,"The sub_slot_iterations parameter is reset so a 300-second slot requires close to slot_iterations many iterations. The reset is done using the values from the last epoch to approximate the iterations-per-second ratio, concretely."),(0,i.kt)("p",null,"We'll define ",(0,i.kt)("inlineCode",{parentName:"p"},"epoch$")," as the period beginning with the last block that was infused ",(0,i.kt)("em",{parentName:"p"},"prior")," to the current epoch, and ending with the last block that was infused ",(0,i.kt)("em",{parentName:"p"},"in")," the current epoch. Thus, ",(0,i.kt)("inlineCode",{parentName:"p"},"epoch$")," is a slightly shifted period that occurs for each epoch."),(0,i.kt)("p",null,"The values ",(0,i.kt)("inlineCode",{parentName:"p"},"t1"),",",(0,i.kt)("inlineCode",{parentName:"p"},"i1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"w1")," denote the timestamp, iterations (since genesis), and weight (since genesis) at the beginning of ",(0,i.kt)("inlineCode",{parentName:"p"},"epoch$"),". Along the same lines, ",(0,i.kt)("inlineCode",{parentName:"p"},"(t2,i2,w2)")," are the values at the end of ",(0,i.kt)("inlineCode",{parentName:"p"},"epoch$"),"."),(0,i.kt)("p",null,"Here's how we calculate iterations per second:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"iterations per second = floor(num iterations in last epoch / duration of last epoch) \n                      = floor(i2 - i1 / t2 - t1) \n")),(0,i.kt)("p",null,"That is, the delta in total iterations from the start to the end of the epoch, divided by the delta in timestamps."),(0,i.kt)("p",null,"Sub-slot iterations is the total number of iterations per ten-minute sub-slot. Signage point interval iterations is sub-slot iterations divided by 64 (the number of signage points per sub-slot)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"sub slot iterations = iterations per second * 300\nsp interval iterations = floor(sub slot iterations / 64)\n")),(0,i.kt)("p",null,"Note that we don\u2019t take the iterations and time exactly at the end of an epoch, but at the last infusion point of a block in an epoch (aka ",(0,i.kt)("inlineCode",{parentName:"p"},"epoch$"),"), the reason being simply that we only have timestamps available when blocks are infused."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"weight/sec of last epoch = (new weight - old weight) / duration of last epoch\n                         = (w2 - w1) / (t2 - t1)\n\nnew difficulty = (weight/sec * target seconds) / target number of blocks\n               = ((w2 - w1) / (t2 - t1) * (4608/64) * 300) / 4608\n")),(0,i.kt)("p",null,"This can be rearranged to use only one floor division:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"new difficulty = floor(75 * (w2 - w1) / (16 * (t2 - t1)))\n")),(0,i.kt)("p",null,"The sub-slot iterations are adjusted such that each slot lasts around 600 seconds. The difficulty is adjusted such that every challenge gets 32 blocks on average with fewer iterations than slot_iterations."),(0,i.kt)("p",null,"It is important to note that the VDF iterations per slot is not material to the weight. That is, if there were two identical worlds where VDF speeds were equal and space was equal, but the sub-slot iterations parameter was twice as high in one world, then the blockchain with the higher sub-slot iterations would get twice as many blocks included per slot, but each slot would take twice as long. The weight per second added to the chain would be the same in both cases."),(0,i.kt)("p",null,"Another way to look at it is that increasing sub-slot iterations increases the number of blocks per slot, but it also makes slots last longer, and thus has no effect on weight per second."),(0,i.kt)("h2",{id:"sub-epochs"},"Sub epochs"),(0,i.kt)("p",null,"As described in ",(0,i.kt)("a",{parentName:"p",href:"/docs/03consensus/three_vdf_chains",title:"Section 3.8: Three VDF Chains"},"Section 3.8"),", the challenge chain is completely separate and does not refer to anything in the rewards chain. If these chains stayed separate forever, an attacker with a faster VDF would be able to look into the far future and predict challenges. The attacker could create one block per slot, with limited space, thus creating a whole challenge chain. This would allow them to create plots and instantly create proofs of space for these plots that will win in the future, and then delete the plots (a long range replotting attack). This would enable them to fill their reward chain and increase their weight."),(0,i.kt)("p",null,"The solution to this is to periodically (every 384 blocks, which is an average of 2 hours) infuse the reward chain into the challenge chain. This means that the attacker can only perform the replotting attack for a few hours into the future. Plotting takes some time, but even if the attacker could replot instantly, the cost of a replotting attack will outweigh the benefits. This is because we do not infuse the ",(0,i.kt)("em",{parentName:"p"},"current")," reward chain output; instead we infuse the ",(0,i.kt)("em",{parentName:"p"},"previous")," sub-epoch's reward chain output (two hours in the past)."),(0,i.kt)("p",null,"The cost of creating a plot includes the electricity to calculate all of the tables, the RAM necessary while creating this plot, and the fixed infrastructure costs (space, power, cooling, etc). Assuming the worst case scenario of a super fast VDF, and instant ASIC plotting - the benefits would be equivalent to the benefits of storing that plot on a HDD for a few hours. Note that this would not guarantee a winning plot; it would be the equivalent of storing a normal plot."),(0,i.kt)("p",null,"It is clear that this attack is not worthwhile, and that storing the plots is much cheaper. This is discussed in further detail in ",(0,i.kt)("a",{parentName:"p",href:"/docs/03consensus/attacks_and_countermeasures#short-range-replotting-attack",title:"Section 3.14: Short Range Replotting Attack"},"Section 3.14"),"."),(0,i.kt)("p",null,"The above explains why the sub-epoch interval should be kept relatively low. But why can\u2019t we further reduce it to lower than 2 hours to further disincentivize replotting attacks? The reason is that whenever non-canonical data is infused into the challenge chain (which the reward chain contains, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/03consensus/foliage",title:"Section 3.10: Foliage"},"Section 3.10")," for more info), an opportunity for grinding occurs. This means an attacker can possibly choose to include or exclude blocks to manipulate what the challenge will be 2 hours into the future. If this time is too short, they can gain a small space advantage by doing this more often."),(0,i.kt)("p",null,"The second (and completely separate) purpose for sub-epochs is to act as checkpoints in a Flyclient-like protocol explained in ",(0,i.kt)("a",{parentName:"p",href:"/docs/03consensus/light_clients",title:"Section 3.12: Light Clients"},"Section 3.12"),", to increase the efficiency of light clients."))}u.isMDXComponent=!0}}]);