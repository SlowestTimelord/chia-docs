"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[5149],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),h=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=h(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=h(n),f=o,d=u["".concat(l,".").concat(f)]||u[f]||c[f]||a;return n?i.createElement(d,s(s({ref:t},p),{},{components:n})):i.createElement(d,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var h=2;h<a;h++)s[h]=n[h];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6512:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return p},default:function(){return u}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],r={sidebar_position:5},l="3.5 Signage Points and Infusion Points",h={unversionedId:"03consensus/signage_points_and_infusion_points",id:"03consensus/signage_points_and_infusion_points",isDocsHomePage:!1,title:"3.5 Signage Points and Infusion Points",description:"Each sub-slot in both the challenge chain and the reward chain is divided into 64 smaller VDFs. Between each of these smaller VDFs is a point called a signage point. Timelords publish the VDF output and proof when they reach each signage point.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/03consensus/signage_points_and_infusion_points.md",sourceDirName:"03consensus",slug:"/03consensus/signage_points_and_infusion_points",permalink:"/zh/docs/03consensus/signage_points_and_infusion_points",editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/03consensus/signage_points_and_infusion_points.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"3.4 Challenges",permalink:"/zh/docs/03consensus/challenges"},next:{title:"3.6 Harvester Algorithm",permalink:"/zh/docs/03consensus/harvester_algorith"}},p=[{value:"Definitions",id:"definitions",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"35-signage-points-and-infusion-points"},"3.5 Signage Points and Infusion Points"),(0,a.kt)("p",null,"Each sub-slot in both the challenge chain and the reward chain is divided into 64 smaller VDFs. Between each of these smaller VDFs is a point called a ",(0,a.kt)("strong",{parentName:"p"},"signage point"),". Timelords publish the VDF output and proof when they reach each signage point."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The challenge and reward chains both have signage points. The infused challenge chain, however, does not.")),(0,a.kt)("p",null,"The signage points occur every 9.375 seconds (64 signage points per 600-second sub-slot). The number of iterations between each signage point is ",(0,a.kt)("strong",{parentName:"p"},"sp_interval_iterations"),", which is equal to sub-slot_iterations / 64."),(0,a.kt)("p",null,"The challenge at the start of the sub-slot is also a valid signage point. As each of the 64 signage points in the sub-slot is reached, those points are broadcast, starting from the fastest timelord's full node, and propagating to every other full node on the network."),(0,a.kt)("p",null,"Farmers receive these signage points and compute a hash for each plot, at each signage point. If the hash starts with nine zeros, the plot passes the filter for that signage point, and can proceed. This disqualifies around 511/512 of all plot files in the network, for that signage point. The formula to compute the filter hash is:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"plot filter bits = sha256(plot id + sub slot challenge + cc signage point)")),(0,a.kt)("p",null,"The proof of space challenge is computed as the hash of the plot filter bits:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PoSpace challenge = sha256(plot filter bits)")),(0,a.kt)("p",null,"Using this challenge, the farmers fetch quality strings for each plot that made it past the filter. Recall that this process requires around seven random disk seeks, which takes around 70 ms on a slow HDD. The quality string is a hash derived from part of the proof of space (but the whole proof of space has yet to be retrieved)."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For both of our ",(0,a.kt)("a",{parentName:"p",href:"/docs/03consensus/challenges",title:"Section 3.4: Challenges"},"previous example"),", as well as the next example, we'll use the following values:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"sub-slot_iterations = 100,000,000"),(0,a.kt)("li",{parentName:"ul"},"sp_interval_iterations = ",(0,a.kt)("inlineCode",{parentName:"li"},"sub-slot_iterations")," / 64 = 1,562,500"))),(0,a.kt)("p",null,"The farmer computes the ",(0,a.kt)("strong",{parentName:"p"},"required_iterations")," for each proof of space. If the required_iterations < sp_interval_iterations, the proof of space is eligible for inclusion into the blockchain. At this point, the farmer fetches the entire proof of space from disk (which requires 64 disk seeks, or 640 ms on a slow HDD), creates an unfinished block, and broadcasts it to the network."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For the vast majority of eligible plots, required_iterations will be far too high, since on average 32 will qualify for the whole network for each 10-minute sub-slot. This is a random process so it's possible (though unlikely) for a large number of proofs to qualify. The signage_point_iterations is the number of iterations from the start of the sub-slot to the signage point. Any plot that does meet the required_iterations for a signage point will qualify as there is no rivalry between winning plots.")),(0,a.kt)("p",null,"The exact method for required_iterations is the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'sp_quality_string = sha256(quality_string + cc_signage_point)\nrequired_iterations = (difficulty\n    * difficulty_constant_factor\n    * int.from_bytes(sp_quality_string, "big", signed=False)\n    // pow(2, 256) * expected_plot_size(size))\n')),(0,a.kt)("p",null,"The difficulty constant factor is based on the initial constants of the blockchain. For Chia, it is ",(0,a.kt)("inlineCode",{parentName:"p"},"2^67"),". The difficulty varies per epoch, as explained in ",(0,a.kt)("a",{parentName:"p",href:"/docs/03consensus/epochs",title:"Section 3.11: Epochs and Difficulty Adjustment"},"Section 3.11"),". As you can see, the ",(0,a.kt)("strong",{parentName:"p"},"sp_quality_string")," is converted into a random number between 0 and 1, by dividing it by ",(0,a.kt)("inlineCode",{parentName:"p"},"2^256"),", and then multiplied by the plot size."),(0,a.kt)("p",null,"For consensus purposes, the ",(0,a.kt)("inlineCode",{parentName:"p"},"expected_plot_size")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"((2 * k) + 1) * (2 ** (k - 1))."),", where k>=32<50. The actual plot size is that value times a constant factor, in bytes. This is because each entry in the plot is around ",(0,a.kt)("inlineCode",{parentName:"p"},"k+0.5")," bits, and there are around ",(0,a.kt)("inlineCode",{parentName:"p"},"2^(k)")," entries."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"infusion_iterations")," is the number of iterations from the start of the sub-slot at which the block with at least the required quality can be included into the blockchain. This is calculated as:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\ninfusion_iterations = ( signage_point_iterations + 3 * sp_interval_iterations + required_iterations)  %  sub-slot_iterations")),(0,a.kt)("p",null,"Therefore, infusion_iterations will be between 3 and 4 signage points after the current signage point. Farmers must submit their proofs and blocks before the infusion point is reached. The modulus is there to allow overflows into the next sub-slot, if the signage point is near the end of the sub-slot. This is expanded on in ",(0,a.kt)("a",{parentName:"p",href:"/docs/03consensus/overflow_blocks",title:"Section 3.9: Overflow Blocks and Weight"},"Section 3.9"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"More information on infusion points is available in ",(0,a.kt)("a",{parentName:"p",href:"/docs/03consensus/vdfs#infusion",title:"Section 3.3: VDFs"},"Section 3.3"),".")),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/signage_points.png",alt:"drawing"}),(0,a.kt)("figcaption",null,"Figure 5: timelords create proofs for both the signage point and the infusion point. But they only infuse (change the VDF classgroup) for the latter. Squares symbolize infusions, where a new VDF is started.")),(0,a.kt)("p",null,"Figure 5 shows the infusion point as a green square marked ",(0,a.kt)("inlineCode",{parentName:"p"},"b1"),". The first and last blocks of the sub-slot are marked ",(0,a.kt)("inlineCode",{parentName:"p"},"r1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"r2"),", respectively. For this example, the farmer will create the block at the time of the signage point marked with a red arrow, which we'll call ",(0,a.kt)("inlineCode",{parentName:"p"},"b1'"),"."),(0,a.kt)("p",null,"At ",(0,a.kt)("inlineCode",{parentName:"p"},"b1"),", the farmer's block gets combined with the VDF output for that point. This creates a new input for the VDF from that point on, i.e. we infuse the farmer\u2019s block into the VDF. ",(0,a.kt)("inlineCode",{parentName:"p"},"b1")," is only fully valid after two events have occurred:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"infusion_iterations has been reached, and"),(0,a.kt)("li",{parentName:"ol"},"Two VDF proofs have been included: one from ",(0,a.kt)("inlineCode",{parentName:"li"},"r1")," to the signage point and one from ",(0,a.kt)("inlineCode",{parentName:"li"},"r1")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"b1"),". (Actually it\u2019s more since there are three VDF chains, explained in ",(0,a.kt)("a",{parentName:"li",href:"/docs/03consensus/three_vdf_chains",title:"Section 3.8: Three VDF Chains"},"Section 3.8"),").")),(0,a.kt)("p",null,"In Figure 5, the farmer creates the block at the time of the signage point, ",(0,a.kt)("inlineCode",{parentName:"p"},"b1\u2019"),". However, ",(0,a.kt)("inlineCode",{parentName:"p"},"b1\u2019")," is not finished yet, since it needs the infusion point VDF. Once the infusion_iterations VDF has been released, it is added to ",(0,a.kt)("inlineCode",{parentName:"p"},"b1\u2019")," to form the finished block at ",(0,a.kt)("inlineCode",{parentName:"p"},"b1"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Recall that in this example,"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"sub-slot_iterations = 100M"),(0,a.kt)("li",{parentName:"ul"},"sp_interval_iterations is 1.5625M. Furthermore, let\u2019s say a farmer has a total of 1000 plots."))),(0,a.kt)("p",null,"For each of the 64 signage points, as they are released to the network every 9.375 seconds, or every 1.5625M iterations, the farmer computes the plot filter and sees how many plots pass. For each passing plot, the farmer calculates required_iterations."),(0,a.kt)("p",null,"Let's say the farmer calculates required_iterations < 1.5625M once in the sub-slot. (We'll assume the exact required_iterations = 0.7828M in this instance.) Figure 5 shows this happening at the 20th signage point."),(0,a.kt)("p",null,"infusion_iterations is then computed as:"),(0,a.kt)("p",null,"infusion_iterations = signage_point_iterations + (3 * sp_interval_iterations) + required_iterations"),(0,a.kt)("p",null,"= (signage_point ",(0,a.kt)("em",{parentName:"p"}," sp_interval_iterations) + (3 ")," sp_interval_iterations) + required_iterations"),(0,a.kt)("p",null,"= (20",(0,a.kt)("em",{parentName:"p"},"1.5625M) + (3 ")," 1.5626M) + 0.7827M"),(0,a.kt)("p",null,"= 36.7223M"),(0,a.kt)("p",null,"After realizing they have won (at the 20th infusion point), the farmer fetches the whole proof of space, makes a block (optionally including transactions), and broadcasts this to the network. The block has until infusion_iterations (typically a few seconds) to reach timelords, who will infuse the block, creating the infusion point VDFs. With these VDFs, the block can be finished and added to the blockchain by full nodes."),(0,a.kt)("h2",{id:"definitions"},"Definitions"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Quality string"),": A small part of the proof of space, 2 ",(0,a.kt)("em",{parentName:"p"},"x values")," out of the total 64 ",(0,a.kt)("em",{parentName:"p"},"x values"),", which can be retrieved efficiently from disk, and which values_to_fetch is determined by the signage point."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sp_quality_string"),': A hash of the quality string concatenated with the challenge chain\'s signage point. This hash is what ultimately decides the "luck" of a certain proof, using the size of required_iterations.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sp_interval_iterations"),": Defined as floor(sub-slot_iterations / 64)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signage points"),": 64 intermediary points in time within a sub-slot in both the challenge and reward chains, for which VDFs are periodically released. At each signage point, a VDF output is created and broadcast through the network. The first signage point in the sub-slot is the challenge itself. Each block has a signage point such that the proof of space in the block must be eligible for that signage point."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"required_iterations"),": A number computed using the quality string, used to choose proofs of space which are eligible to make blocks. The vast majority of proofs of space will have required_iterations which are too high, and thus not eligible for inclusion into the chain. This number is used to compute the infusion point."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Infusion point"),": the point in time at infusion_iterations from the challenge point, for a proof of space with a certain challenge and infusion_iterations. At this point, the farmer\u2019s block gets infused into the reward chain VDF. The infusion point of a block is always between 3 and 4 signage points after the signage point of that block. Computed as signage_point_iterations + 3 * sp_interval_iterations + required_iterations."),(0,a.kt)("p",null,"The delay between the signage point and infusion point has many benefits, including defense against orphaning and selfish farming, decreased forks, and no VDF pauses. This delay of around 28 seconds is given so that farmers have enough time to sign without delaying the slot VDF. Well-behaving farmers sign only one signage point with each proof of space, meaning that attackers cannot easily reorg the chain."))}u.isMDXComponent=!0}}]);