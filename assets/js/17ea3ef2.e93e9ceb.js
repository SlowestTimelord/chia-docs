"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6109],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,d=u["".concat(l,".").concat(f)]||u[f]||h[f]||a;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7575:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={sidebar_position:2},l="10.2 Harvester Protocol",p={unversionedId:"10protocol/harvester_protocol",id:"10protocol/harvester_protocol",isDocsHomePage:!1,title:"10.2 Harvester Protocol",description:"The harvester protocol defines the messages sent between a farmer service and a harvester service. These tend to be on the same machine for small farmers, but for medium or large farmers they can be in multiple machines.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/10protocol/harvester_protocol.md",sourceDirName:"10protocol",slug:"/10protocol/harvester_protocol",permalink:"/docs/10protocol/harvester_protocol",editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/10protocol/harvester_protocol.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"10.1 Chia Protocol",permalink:"/docs/10protocol/protocol"},next:{title:"10.3 Full Node Protocol",permalink:"/docs/10protocol/full_node_protocol"}},c=[{value:"harvester_handshake",id:"harvester_handshake",children:[]},{value:"new_signage_point_harvester",id:"new_signage_point_harvester",children:[]},{value:"new_proof_of_space",id:"new_proof_of_space",children:[]},{value:"request_signatures",id:"request_signatures",children:[]},{value:"respond_signatures",id:"respond_signatures",children:[]},{value:"request_plots",id:"request_plots",children:[]},{value:"respond_plots",id:"respond_plots",children:[]}],h={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"102-harvester-protocol"},"10.2 Harvester Protocol"),(0,a.kt)("p",null,"The harvester protocol defines the messages sent between a farmer service and a harvester service. These tend to be on the same machine for small farmers, but for medium or large farmers they can be in multiple machines."),(0,a.kt)("h2",{id:"harvester_handshake"},"harvester_handshake"),(0,a.kt)("p",null,"The handshake between farmer and harvester. A farmer sends this message to harvesters, to initialize them and tell them which pool public keys and farmer public keys are acceptable to use."),(0,a.kt)("p",null,"A farmer can be connected to multiple harvesters, but a harvester should only have one farmer connection. The harvester can start using plots which have these keys associated with them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class HarvesterHandshake(Streamable):\n    farmer_public_keys: List[G1Element]\n    pool_public_keys: List[G1Element]\n")),(0,a.kt)("h2",{id:"new_signage_point_harvester"},"new_signage_point_harvester"),(0,a.kt)("p",null,"This message is a notification from the farmer to the harvester of a new challenge. The harvester first checks which plots pass the plot filter (see section 3.6), and for those that do, fetches the quality. This requires around 7 random reads (and thus disk seeks) for each quality. Each plot is expected to have one proof of space (and therefore one quality) on average, so for 50 plots, a harvester would have around 50 qualities. For those qualities that are sufficiently good to win a block or a pool partial, the whole proof is fetched (64 random reads in the plot), and then ",(0,a.kt)("inlineCode",{parentName:"p"},"new_proof_of_space")," is sent to the farmer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class NewSignagePointHarvester(Streamable):\n    challenge_hash: bytes32     # The challenge hash for the sub slot in which the signage point lies\n    difficulty: uint64          # The current blockchain difficulty\n    sub_slot_iters: uint64      # The current blockchain sub-slot iters\n    signage_point_index: uint8  # The signage point's index, from 0 to 63. 0 for an end of sub slot signage point\n    sp_hash: bytes32            # The hash of the signage point, this is == challenge_hash iff the index is 0\n    pool_difficulties: List[PoolDifficulty]    # List of each pool the farmer is in, and what the difficulty is for that pool\n\n\nclass PoolDifficulty(Streamable):\n    difficulty: uint64                  # The current difficulty that is set for plots belonging to this pool contract\n    sub_slot_iters: uint64              # The pool sub slot iters, which is static for each network (mainnet, testnet)\n    pool_contract_puzzle_hash: bytes32  # The pool contract puzzle hash which can be in many plots\n")),(0,a.kt)("h2",{id:"new_proof_of_space"},"new_proof_of_space"),(0,a.kt)("p",null,"A successful proof of space that is sent to the farmer. The ",(0,a.kt)("inlineCode",{parentName:"p"},"challenge_hash"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sp_hash"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"signage_point_index")," correspond to the ones sent in ",(0,a.kt)("inlineCode",{parentName:"p"},"new_signage_point_harvester"),". Many proofs can be submitted for each signage point."),(0,a.kt)("p",null,"The plot is a string chosen by the harvester to represent the winning plot (and proof index) in future communications between the farmer and harvester. This can be, for example, the filename of the plot with an additional byte for the index. This is relevant, because a certain plot can potentially have more than one proof for each signage point, and we want communications for each proof to be separate and not conflict (specifically to fetch signatures from the harvester)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class NewProofOfSpace(Streamable):\n    challenge_hash: bytes32\n    sp_hash: bytes32\n    plot_identifier: str\n    proof: ProofOfSpace         # The actual proof of space which contains more data, shown below\n    signage_point_index: uint8\n\nclass ProofOfSpace(Streamable):\n    challenge: bytes32                              # This is the challenge for the pospace, explained in section 3.5\n    pool_public_key: Optional[G1Element]            # Only one of these two should be present\n    pool_contract_puzzle_hash: Optional[bytes32]    # Present only for pooled plots\n    plot_public_key: G1Element                      # Explained in the keys section \n    size: uint8                                     # k size, usually 32 but can vary\n    proof: bytes                                    # proof bytes, 64 k bit values, total size 8k bytes\n")),(0,a.kt)("h2",{id:"request_signatures"},"request_signatures"),(0,a.kt)("p",null,"This is a request from the farmer to the harvester for a signature from the plot key, for a specific plot (using the plot identifier from ",(0,a.kt)("inlineCode",{parentName:"p"},"new_proof_of_space"),"). The farmer can request signatures from multiple messages."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RequestSignatures(Streamable):\n    plot_identifier: str\n    challenge_hash: bytes32\n    sp_hash: bytes32\n    messages: List[bytes32]\n")),(0,a.kt)("h2",{id:"respond_signatures"},"respond_signatures"),(0,a.kt)("p",null,"This is a response to ",(0,a.kt)("inlineCode",{parentName:"p"},"request_signatures"),". The local public key is the public key corresponding to the secret key in the plot. To see more about the keys for plots, look at ",(0,a.kt)("a",{parentName:"p",href:"/docs/09keys/keys-and-signatures"},"section 9"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RespondSignatures(Streamable):\n    plot_identifier: str\n    challenge_hash: bytes32\n    sp_hash: bytes32\n    local_pk: G1Element   # Key in the plot\n    farmer_pk: G1Element  # Key controlled by farmer\n    message_signatures: List[Tuple[bytes32, G2Element]]\n")),(0,a.kt)("h2",{id:"request_plots"},"request_plots"),(0,a.kt)("p",null,"A request from the farmer to the harvester for the list of all plots being farmed by the harvester."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RequestPlots(Streamable):\n    pass\n")),(0,a.kt)("h2",{id:"respond_plots"},"respond_plots"),(0,a.kt)("p",null,"A response to ",(0,a.kt)("inlineCode",{parentName:"p"},"request_plots")," request. This message is also sent whenever a new plot is loaded."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RespondPlots(Streamable):\n    plots: List[Plot]\n    failed_to_open_filenames: List[str]  # Filenames for files which cannot be opened\n    no_key_filenames: List[str]          # Filenames for files which cannot be farmed by this farmer\n\nclass Plot(Streamable):\n    filename: str\n    size: uint8\n    plot_id: bytes32\n    pool_public_key: Optional[G1Element]\n    pool_contract_puzzle_hash: Optional[bytes32]\n    plot_public_key: G1Element\n    file_size: uint64\n    time_modified: uint64\n")))}u.isMDXComponent=!0}}]);