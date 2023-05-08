"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9917],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=n(25773),o=(n(27378),n(35318)),r=n(76911);const i={slug:"moon-v1.5",title:"moon v1.5 - Rust tier 2 and 3 support",authors:["milesj"],tags:["rust","lang","tier"],image:"./img/moon/v1.5.png"},l=void 0,s={permalink:"/blog/moon-v1.5",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-05-08_moon-v1.5.mdx",source:"@site/blog/2023-05-08_moon-v1.5.mdx",title:"moon v1.5 - Rust tier 2 and 3 support",description:"With this release, we're announcing not just tier 2, but also tier 3 support for the Rust language.",date:"2023-05-08T00:00:00.000Z",formattedDate:"May 8, 2023",tags:[{label:"rust",permalink:"/blog/tags/rust"},{label:"lang",permalink:"/blog/tags/lang"},{label:"tier",permalink:"/blog/tags/tier"}],readingTime:2.765,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"moon-v1.5",title:"moon v1.5 - Rust tier 2 and 3 support",authors:["milesj"],tags:["rust","lang","tier"],image:"./img/moon/v1.5.png"},nextItem:{title:"moon v1.4 - New tag target scope, MQL support for query commands, and more!",permalink:"/blog/moon-v1.4"}},p={image:n(52681).Z,authorsImageUrls:[void 0]},m=[{value:"New <code>rust</code> configurations",id:"new-rust-configurations",level:2},{value:"New <code>rust</code> task platform",id:"new-rust-task-platform",level:2},{value:"Updated <code>moon init</code> command",id:"updated-moon-init-command",level:2},{value:"Updated <code>moon docker</code> commands",id:"updated-moon-docker-commands",level:2},{value:"Other changes",id:"other-changes",level:2}],c={toc:m};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With this release, we're announcing not just tier 2, but also tier 3 support for the Rust language."),(0,o.kt)("p",null,"As big fans of Rust (moon is written in it), we're stoked to finally add full language support, and\nto integrate our first non-JavaScript language! This release is rather massive, and required a ton\nof internal work, most of which we'll skip over."),(0,o.kt)("p",null,"Instead we'll only talk about the key features that you, the consumers, will actually care about. To\nstart, we've started working on a Rust handbook, that outlines how to enable Rust, what kind of\nintegrations we support, and a handful of common questions."),(0,o.kt)("div",{class:"flex justify-center"},(0,o.kt)(r.Z,{label:"View Rust handbook",href:"/docs/guides/rust/handbook",size:"lg",mdxType:"Button"})),(0,o.kt)("h2",{id:"new-rust-configurations"},"New ",(0,o.kt)("inlineCode",{parentName:"h2"},"rust")," configurations"),(0,o.kt)("p",null,"Languages in\n",(0,o.kt)("a",{parentName:"p",href:"/docs/how-it-works/languages#enabling-a-language"},"moon are enabled through configuration")," blocks in\n",(0,o.kt)("a",{parentName:"p",href:"/docs/config/toolchain"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/toolchain.yml")),", and Rust is no different. We now support a\n",(0,o.kt)("a",{parentName:"p",href:"/docs/config/toolchain#rust"},(0,o.kt)("inlineCode",{parentName:"a"},"rust"))," toolchain setting\n(",(0,o.kt)("a",{parentName:"p",href:"/docs/config/toolchain#rust"},"view all available settings"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml"',title:'".moon/toolchain.yml"'},"rust:\n    version: '1.69.0'\n")),(0,o.kt)("p",null,"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"rust")," setting is defined, it will enable the language and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/how-it-works/languages#tier-2--platform"},"deep platform integration"),", and when the ",(0,o.kt)("inlineCode",{parentName:"p"},"version"),"\nfield is defined, it will further enable\n",(0,o.kt)("a",{parentName:"p",href:"/docs/how-it-works/languages#tier-3--toolchain"},"toolchain support"),". Both of these features provide\nheavy automation, improving the overall developer experience."),(0,o.kt)("p",null,"This is fantastic, but what if another Rust project in the monorepo requires a different toolchain\nchannel/version? If so, they can use the new ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/project#rust"},(0,o.kt)("inlineCode",{parentName:"a"},"toolchain.rust"))," setting\nin ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/project"},(0,o.kt)("inlineCode",{parentName:"a"},"moon.yml"))," to define project-level overrides."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"toolchain:\n    rust:\n        version: '1.58.0'\n")),(0,o.kt)("h2",{id:"new-rust-task-platform"},"New ",(0,o.kt)("inlineCode",{parentName:"h2"},"rust")," task platform"),(0,o.kt)("p",null,"The main benefit of Rust language support is that tasks can be ran within the context of our\n",(0,o.kt)("a",{parentName:"p",href:"/docs/how-it-works/languages#tier-2--platform"},"Rust platform integration"),". This can easily be done\nby setting the project's ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/project#language"},(0,o.kt)("inlineCode",{parentName:"a"},"language")),' to "rust" in\n',(0,o.kt)("a",{parentName:"p",href:"/docs/config/project"},(0,o.kt)("inlineCode",{parentName:"a"},"moon.yml")),"."),(0,o.kt)("p",null,"This will set the ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/project#platform-1"},(0,o.kt)("inlineCode",{parentName:"a"},"platform")),' of all tasks within the project to\n"rust", unless they have been explicitly configured to something else.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"language: 'rust'\ntype: 'application'\n")),(0,o.kt)("p",null,"If you're mixing languages within a single project, and can't use the ",(0,o.kt)("inlineCode",{parentName:"p"},"language")," setting above, you\ncan define ",(0,o.kt)("inlineCode",{parentName:"p"},"platform")," on the task directly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"tasks:\n    build:\n        command: 'cargo build'\n        platform: 'rust'\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We also attempt to detect this automatially by comparing command names and checking for the\nexistence of files like ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),".")),(0,o.kt)("h2",{id:"updated-moon-init-command"},"Updated ",(0,o.kt)("inlineCode",{parentName:"h2"},"moon init")," command"),(0,o.kt)("p",null,"As part of this release, we've also updated the ",(0,o.kt)("a",{parentName:"p",href:"/docs/commands/init"},(0,o.kt)("inlineCode",{parentName:"a"},"moon init"))," command to\nsupport initializing Rust. By default, the command will prompt you on whether to install Rust or\nnot, otherwise, when ",(0,o.kt)("inlineCode",{parentName:"p"},"--yes")," is passed, the language will be installed if a ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file is\ndetected in the destination directory."),(0,o.kt)("p",null,"If you already have a moon workspace, you can pass ",(0,o.kt)("inlineCode",{parentName:"p"},"--tool rust")," to install Rust into the workspace."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon init --tool rust\n")),(0,o.kt)("h2",{id:"updated-moon-docker-commands"},"Updated ",(0,o.kt)("inlineCode",{parentName:"h2"},"moon docker")," commands"),(0,o.kt)("p",null,"And lastly, we also want to provide a great ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/docker"},(0,o.kt)("inlineCode",{parentName:"a"},"Dockerfile")," experience")," when\nusing Rust. The ",(0,o.kt)("a",{parentName:"p",href:"/docs/commands/docker/scaffold"},(0,o.kt)("inlineCode",{parentName:"a"},"moon docker scaffold"))," command has been updated to\ncopy ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.lock"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"rust-toolchain.toml"),", and other Rust/Cargo related files. When\nusing Cargo workspaces, nested ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," files are also scaffolded."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"RUN moon docker scaffold rust-app\n")),(0,o.kt)("p",null,"Furthermore, we've also updated the ",(0,o.kt)("a",{parentName:"p",href:"/docs/commands/docker/scaffold"},(0,o.kt)("inlineCode",{parentName:"a"},"moon docker prune"))," command to\nremove the entire ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," directory, greatly reducing the size of the image. Pruning makes the\nassumption that it's being ran ",(0,o.kt)("em",{parentName:"p"},"after")," a release profile has been built."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"RUN moon run rust-app:build-release\nRUN moon docker prune\n")),(0,o.kt)("h2",{id:"other-changes"},"Other changes"),(0,o.kt)("p",null,"View the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/releases/tag/v1.5.0"},"official release")," for a full list of\nchanges."))}u.isMDXComponent=!0},52681:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/v1.5-c0d8c4fbb15e8449bad93fa566d3e9cf.png"}}]);