"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83054],{55228:(e,t,a)=>{a.d(t,{Z:()=>p});a(27378);var s=a(40624),n=a(95682),l=a(58357),r=a(36641),i=a(99213),o=a(14299);const c={sidebar:"sidebar_CLW8",sidebarItemTitle:"sidebarItemTitle_DQfJ",sidebarItemList:"sidebarItemList_rvuc",sidebarItem:"sidebarItem__RMN",sidebarItemLink:"sidebarItemLink_Ony9",sidebarItemLinkActive:"sidebarItemLinkActive_MJ75"};var d=a(24246);function m(e){let{sidebar:t}=e;const a=(0,o.c)(t.items);return(0,d.jsx)("aside",{className:"col col--3",children:(0,d.jsxs)("nav",{className:(0,s.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,d.jsx)("div",{className:(0,s.Z)(c.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,d.jsx)("ul",{className:(0,s.Z)(c.sidebarItemList,"clean-list"),children:a.map((e=>(0,d.jsx)("li",{className:c.sidebarItem,children:(0,d.jsx)(r.default,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var u=a(63471);function h(e){let{sidebar:t}=e;const a=(0,o.c)(t.items);return(0,d.jsx)("ul",{className:"menu__list",children:a.map((e=>(0,d.jsx)("li",{className:"menu__list-item",children:(0,d.jsx)(r.default,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function g(e){return(0,d.jsx)(u.Zo,{component:h,props:e})}function x(e){let{sidebar:t}=e;const a=(0,l.i)();return t?.items.length?"mobile"===a?(0,d.jsx)(g,{sidebar:t}):(0,d.jsx)(m,{sidebar:t}):null}function p(e){const{sidebar:t,toc:a,children:l,...r}=e,i=t&&t.items.length>0;return(0,d.jsx)(n.Z,{...r,children:(0,d.jsx)("div",{className:"container margin-vert--lg",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)(x,{sidebar:t}),(0,d.jsx)("main",{className:(0,s.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),children:l}),a&&(0,d.jsx)("div",{className:"col col--2",children:a})]})})})}},23952:(e,t,a)=>{a.d(t,{Z:()=>A});a(27378);var s=a(40624),n=a(70412),l=a(24246);function r(e){let{children:t,className:a}=e;return(0,l.jsx)("article",{className:a,children:t})}var i=a(36641);const o={title:"title_Kdtz"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:r}=(0,n.C)(),{permalink:c,title:d}=a,m=r?"h1":"h2";return(0,l.jsx)(m,{className:(0,s.Z)(o.title,t),children:r?d:(0,l.jsx)(i.default,{to:c,children:d})})}var d=a(99213),m=a(40689),u=a(70925);const h={container:"container_iZB2"};function g(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,m.c)();return t=>{const a=Math.ceil(t);return e(a,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,l.jsx)(l.Fragment,{children:a(t)})}function x(e){let{date:t,formattedDate:a}=e;return(0,l.jsx)("time",{dateTime:t,children:a})}function p(){return(0,l.jsx)(l.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,n.C)(),{date:r,readingTime:i}=a,o=(0,u.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,l.jsxs)("div",{className:(0,s.Z)(h.container,"margin-vert--md",t),children:[(0,l.jsx)(x,{date:r,formattedDate:(c=r,o.format(new Date(c)))}),void 0!==i&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{}),(0,l.jsx)(g,{readingTime:i})]})]});var c}function f(e){return e.href?(0,l.jsx)(i.default,{...e}):(0,l.jsx)(l.Fragment,{children:e.children})}function b(e){let{author:t,className:a}=e;const{name:n,title:r,url:i,imageURL:o,email:c}=t,d=i||c&&`mailto:${c}`||void 0;return(0,l.jsxs)("div",{className:(0,s.Z)("avatar margin-bottom--sm",a),children:[o&&(0,l.jsx)(f,{href:d,className:"avatar__photo-link",children:(0,l.jsx)("img",{className:"avatar__photo",src:o,alt:n})}),n&&(0,l.jsxs)("div",{className:"avatar__intro",children:[(0,l.jsx)("div",{className:"avatar__name",children:(0,l.jsx)(f,{href:d,children:(0,l.jsx)("span",{children:n})})}),r&&(0,l.jsx)("small",{className:"avatar__subtitle",children:r})]})]})}const v={authorCol:"authorCol_v1VX",imageOnlyAuthorRow:"imageOnlyAuthorRow_RxZ1",imageOnlyAuthorCol:"imageOnlyAuthorCol_iWtj"};function N(e){let{className:t}=e;const{metadata:{authors:a},assets:r}=(0,n.C)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t}));return(0,l.jsx)("div",{className:(0,s.Z)("margin-top--md margin-bottom--sm",i?v.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,l.jsx)("div",{className:(0,s.Z)(!i&&"col col--6",i?v.imageOnlyAuthorCol:v.authorCol),children:(0,l.jsx)(b,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})},t)))})}function Z(){return(0,l.jsxs)("header",{children:[(0,l.jsx)(c,{}),(0,l.jsx)(j,{}),(0,l.jsx)(N,{})]})}var _=a(51721),U=a(40450);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:r}=(0,n.C)();return(0,l.jsx)("div",{id:r?_.blogPostContainerID:void 0,className:(0,s.Z)("markdown",a),children:(0,l.jsx)(U.default,{children:t})})}var k=a(75484),y=a(54709),P=a(28349);function T(){return(0,l.jsx)("b",{children:(0,l.jsx)(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function C(e){const{blogPostTitle:t,...a}=e;return(0,l.jsx)(i.default,{"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,l.jsx)(T,{})})}function I(){const{metadata:e,isBlogPostPage:t}=(0,n.C)(),{tags:a,title:r,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&o,u=a.length>0;if(!(u||m||i))return null;if(t){const e=!!(i||d||c);return(0,l.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,l.jsx)("div",{className:(0,s.Z)("row","margin-top--sm",k.k.blog.blogFooterEditMetaRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(P.Z,{tags:a})})}),e&&(0,l.jsx)(y.Z,{className:(0,s.Z)("margin-top--sm",k.k.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,l.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,l.jsx)("div",{className:(0,s.Z)("col",{"col--9":m}),children:(0,l.jsx)(P.Z,{tags:a})}),m&&(0,l.jsx)("div",{className:(0,s.Z)("col text--right",{"col--3":u}),children:(0,l.jsx)(C,{blogPostTitle:r,to:e.permalink})})]})}function A(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,n.C)();return e?void 0:"margin-bottom--xl"}();return(0,l.jsxs)(r,{className:(0,s.Z)(i,a),children:[(0,l.jsx)(Z,{}),(0,l.jsx)(w,{children:t}),(0,l.jsx)(I,{})]})}},54709:(e,t,a)=>{a.d(t,{Z:()=>p});a(27378);var s=a(40624),n=a(99213),l=a(75484),r=a(36641);const i={iconEdit:"iconEdit_bHB7"};var o=a(24246);function c(e){let{className:t,...a}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i.iconEdit,t),"aria-hidden":"true",...a,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,o.jsxs)(r.default,{to:t,className:l.k.common.editThisPage,children:[(0,o.jsx)(c,{}),(0,o.jsx)(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var m=a(70925);function u(e){let{lastUpdatedAt:t}=e;const a=new Date(t),s=(0,m.P)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(a);return(0,o.jsx)(n.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,o.jsx)("b",{children:(0,o.jsx)("time",{dateTime:a.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function h(e){let{lastUpdatedBy:t}=e;return(0,o.jsx)(n.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,o.jsx)("b",{children:t})},children:" by {user}"})}function g(e){let{lastUpdatedAt:t,lastUpdatedBy:a}=e;return(0,o.jsxs)("span",{className:l.k.common.lastUpdated,children:[(0,o.jsx)(n.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,o.jsx)(u,{lastUpdatedAt:t}):"",byUser:a?(0,o.jsx)(h,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const x={lastUpdated:"lastUpdated_ydrU"};function p(e){let{className:t,editUrl:a,lastUpdatedAt:n,lastUpdatedBy:l}=e;return(0,o.jsxs)("div",{className:(0,s.Z)("row",t),children:[(0,o.jsx)("div",{className:"col",children:a&&(0,o.jsx)(d,{editUrl:a})}),(0,o.jsx)("div",{className:(0,s.Z)("col",x.lastUpdated),children:(n||l)&&(0,o.jsx)(g,{lastUpdatedAt:n,lastUpdatedBy:l})})]})}},40450:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});a(27378);var s=a(71670),n=a(22964),l=a(24246);function r(e){let{children:t}=e;return(0,l.jsx)(s.Z,{components:n.default,children:t})}},51478:(e,t,a)=>{a.d(t,{Z:()=>i});a(27378);var s=a(40624),n=a(36641);const l={tag:"tag_otG2",tagRegular:"tagRegular_s0E1",tagWithCount:"tagWithCount_PGyn"};var r=a(24246);function i(e){let{permalink:t,label:a,count:i,description:o}=e;return(0,r.jsxs)(n.default,{href:t,title:o,className:(0,s.Z)(l.tag,i?l.tagWithCount:l.tagRegular),children:[a,i&&(0,r.jsx)("span",{children:i})]})}},28349:(e,t,a)=>{a.d(t,{Z:()=>o});a(27378);var s=a(40624),n=a(99213),l=a(51478);const r={tags:"tags_Ow0B",tag:"tag_DFxh"};var i=a(24246);function o(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,s.Z)(r.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:r.tag,children:(0,i.jsx)(l.Z,{...e})},e.permalink)))})]})}},70412:(e,t,a)=>{a.d(t,{C:()=>o,n:()=>i});var s=a(27378),n=a(41763),l=a(24246);const r=s.createContext(null);function i(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return(0,l.jsx)(r.Provider,{value:i,children:t})}function o(){const e=(0,s.useContext)(r);if(null===e)throw new n.i6("BlogPostProvider");return e}},14299:(e,t,a)=>{a.d(t,{c:()=>r});var s=a(27378),n=a(3620),l=a(8862);function r(e){const{pathname:t}=(0,n.TH)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,l.Mg)(e.permalink,t))}(e,t)))),[e,t])}},40689:(e,t,a)=>{a.d(t,{c:()=>c});var s=a(27378),n=a(50353);const l=["zero","one","two","few","many","other"];function r(e){return l.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:r(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.default)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:r(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const s=e.split("|");if(1===s.length)return s[0];s.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const n=a.select(t),l=a.pluralForms.indexOf(n);return s[Math.min(l,s.length-1)]}(a,t,e)}}}}]);