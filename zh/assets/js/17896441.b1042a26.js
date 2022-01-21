"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[7918],{1264:function(e,t,a){a.r(t),a.d(t,{default:function(){return $}});var n=a(7294),r=a(6010),l=a(3783),i=a(6742),o=a(4973);var s=function(e){var t=e.metadata;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},c=a(2263),d=a(907),m=a(941);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:r},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,a=e.versionMetadata,l=(0,c.Z)().siteConfig.title,i=(0,d.gA)({failfast:!0}).pluginId,o=(0,m.J)(i).savePreferredVersionName,s=(0,d.Jo)(i),u=s.latestDocSuggestion,p=s.latestVersionSuggestion,f=null!=u?u:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:p.label,to:f.path,onClick:function(){return o(p.name)}})))}var f=function(e){var t=e.versionMetadata;return t.banner?n.createElement(p,{versionMetadata:t}):n.createElement(n.Fragment,null)},E=a(1217);function b(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function g(e){var t=e.lastUpdatedBy;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(b,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(g,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(7462),k=a(3366),Z="iconEdit_mS5F",L=["className"],T=function(e){var t=e.className,a=(0,k.Z)(e,L);return n.createElement("svg",(0,N.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(Z,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function U(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(T,null),n.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var y=a(7211),C="tags_NBRY",w="tag_F03v";function A(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(C,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:w},n.createElement(y.Z,{name:t,permalink:a}))}))))}var M="lastUpdated_mt2f";function S(e){return n.createElement("div",{className:(0,r.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(A,e)))}function B(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,r.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(U,{editUrl:t})),n.createElement("div",{className:(0,r.Z)("col",M)},(a||l)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function x(e){var t=e.content.metadata,a=t.editUrl,l=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,o=t.lastUpdatedBy,s=t.tags,c=s.length>0,d=!!(a||l||o);return c||d?n.createElement("footer",{className:(0,r.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(S,{tags:s}),d&&n.createElement(B,{editUrl:a,lastUpdatedAt:l,lastUpdatedBy:o,formattedLastUpdatedAt:i})):n.createElement(n.Fragment,null)}function F(e){var t=e.getBoundingClientRect();return t.top===t.bottom?F(e.parentNode):t}function O(e){var t,a=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((function(e){return F(e).top>=a}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(F(r))?r:null!=(t=n[n.indexOf(r)-1])?t:null:n[n.length-1]}function V(){var e=(0,n.useRef)(0),t=(0,m.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var I=function(e){var t=(0,n.useRef)(void 0),a=V();(0,n.useEffect)((function(){var n=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=O({anchorTopOffset:a.current}),i=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===i)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},R="tableOfContents_vrFS",D="table-of-contents__link",z={linkClassName:D,linkActiveClassName:"table-of-contents__link--active"};function H(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:D,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(H,{isChild:!0,toc:e.children}))}))):null}var q=function(e){var t=e.toc;return I(z),n.createElement("div",{className:(0,r.Z)(R,"thin-scrollbar")},n.createElement(H,{toc:t}))},P="tocCollapsible_aw-L",W="tocCollapsibleButton_zr6a",J="tocCollapsibleContent_0dom",Y="tocCollapsibleExpanded_FSiv";function j(e){var t,a=e.toc,l=e.className,i=(0,m.uR)({initialState:!0}),s=i.collapsed,c=i.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)(P,(t={},t[Y]=!s,t),l)},n.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",W),onClick:c},n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:J,collapsed:s},n.createElement(H,{toc:a})))}var K=a(6159),X="docItemContainer_oiyr",G="docItemCol_zHA2",Q="tocMobile_Tx6Y";function $(e){var t,a=e.content,i=e.versionMetadata,o=a.metadata,c=a.frontMatter,d=c.image,u=c.keywords,v=c.hide_title,h=c.hide_table_of_contents,p=o.description,b=o.title,g=!v&&void 0===a.contentTitle,_=(0,l.Z)(),N=!h&&a.toc&&a.toc.length>0,k=N&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(E.Z,{title:b,description:p,keywords:u,image:d}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",(t={},t[G]=!h,t))},n.createElement(f,{versionMetadata:i}),n.createElement("div",{className:X},n.createElement("article",null,i.badge&&n.createElement("span",{className:(0,r.Z)(m.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",i.label),N&&n.createElement(j,{toc:a.toc,className:(0,r.Z)(m.kM.docs.docTocMobile,Q)}),n.createElement("div",{className:(0,r.Z)(m.kM.docs.docMarkdown,"markdown")},g&&n.createElement(K.N,null,b),n.createElement(a,null)),n.createElement(x,e)),n.createElement(s,{metadata:o}))),k&&n.createElement("div",{className:"col col--3"},n.createElement(q,{toc:a.toc,className:m.kM.docs.docTocDesktop}))))}},6159:function(e,t,a){a.d(t,{N:function(){return u},Z:function(){return v}});var n=a(3366),r=a(7462),l=a(7294),i=a(6010),o=a(4973),s=a(941),c="anchorWithStickyNavbar_y2LR",d="anchorWithHideOnScrollNavbar_3ly5",m=["id"],u=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},v=function(e){return"h1"===e?u:(t=e,function(e){var a,r=e.id,u=(0,n.Z)(e,m),v=(0,s.LU)().navbar.hideOnScroll;return r?l.createElement(t,u,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor","anchor__"+t,(a={},a[d]=v,a[c]=!v,a)),id:r}),u.children,l.createElement("a",{className:"hash-link",href:"#"+r,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,u)});var t}},7211:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=a(6010),l=a(6742),i="tag_WK-t",o="tagRegular_LXbV",s="tagWithCount_S5Zl";var c=function(e){var t,a=e.permalink,c=e.name,d=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(i,(t={},t[o]=!d,t[s]=d,t))},c,d&&n.createElement("span",null,d))}}}]);