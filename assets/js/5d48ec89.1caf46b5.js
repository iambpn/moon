"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41303],{50811:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var i=t(24246),a=t(71670),o=t(9619),s=t(88109);const r={slug:"v0.21",title:"moon v0.21 - Tiered language support with initial Go, PHP, Python, Ruby, and Rust",authors:["milesj"],tags:["runner","language","platform","cache","graph"],image:"./img/v0.21.png"},l=void 0,c={permalink:"/blog/v0.21",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2022-12-19_v0.21.mdx",source:"@site/blog/2022-12-19_v0.21.mdx",title:"moon v0.21 - Tiered language support with initial Go, PHP, Python, Ruby, and Rust",description:"Happy Holidays \ud83c\udf84\u2603\ufe0f! With our last release of the year, we're very excited to announce our tiered",date:"2022-12-19T00:00:00.000Z",tags:[{inline:!0,label:"runner",permalink:"/blog/tags/runner"},{inline:!0,label:"language",permalink:"/blog/tags/language"},{inline:!0,label:"platform",permalink:"/blog/tags/platform"},{inline:!0,label:"cache",permalink:"/blog/tags/cache"},{inline:!0,label:"graph",permalink:"/blog/tags/graph"}],readingTime:4.255,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"v0.21",title:"moon v0.21 - Tiered language support with initial Go, PHP, Python, Ruby, and Rust",authors:["milesj"],tags:["runner","language","platform","cache","graph"],image:"./img/v0.21.png"},unlisted:!1,prevItem:{title:"What's in store for 2023",permalink:"/blog/2023-roadmap"},nextItem:{title:"moon v0.20 - Toolchain, caching, and hydration improvements",permalink:"/blog/v0.20"}},d={image:t(25819).Z,authorsImageUrls:[void 0]},h=[{value:"New tiered language support",id:"new-tiered-language-support",level:2},{value:"Basic support for Go, PHP, Python, Ruby, and, Rust",id:"basic-support-for-go-php-python-ruby-and-rust",level:2},{value:"Interactive project and dependency graphs",id:"interactive-project-and-dependency-graphs",level:2},{value:"New <code>--updateCache</code> command line option",id:"new---updatecache-command-line-option",level:2},{value:"New multi-status affected filtering",id:"new-multi-status-affected-filtering",level:2},{value:"Other changes",id:"other-changes",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Happy Holidays \ud83c\udf84\u2603\ufe0f! With our last release of the year, we're very excited to announce our tiered\nlanguage support structure, which lays the foundation for turning moon into a multi-language build\nsystem! On top of this, we've worked heavily on bug fixing, optimizations, and overall quality of\nlife improvements."}),"\n",(0,i.jsx)(n.h2,{id:"new-tiered-language-support",children:"New tiered language support"}),"\n",(0,i.jsx)(n.p,{children:"The most common question we receive is whether we plan to support additional languages besides\nNode.js, with Rust, Deno, and Bun being top of that list. Adding new languages is non-trivial, as we\nneed to build abstractions that support and integrate with the language's ecosystem, primarily\ndependency managers and resolution algorithms."}),"\n",(0,i.jsx)(n.p,{children:"This is a very large upfront cost, with a huge time and resource commitment. To reduce this burden,\nwe're introducing a tiered support structure, so that languages can be incrementally integrated into\nmoon and adopted by consumers."}),"\n",(0,i.jsx)(n.p,{children:"The tiers break down as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\xa0",(0,i.jsx)(o.Z,{text:"Tier 0",variant:"failure"})," \xa0 ",(0,i.jsx)(n.strong,{children:"No direct integration"})," - Tool is not\ndirectly supported in moon, but can still be ran using the\n",(0,i.jsx)(n.a,{href:"../docs/faq#can-we-run-other-languages",children:'"system" task platform'}),", which expects the tool to exist\nin the current environment."]}),"\n",(0,i.jsxs)(n.li,{children:["\xa0",(0,i.jsx)(o.Z,{text:"Tier 1",variant:"warning"})," \xa0 ",(0,i.jsx)(n.strong,{children:"Project categorization"})," - Projects can\nconfigure their primary ",(0,i.jsxs)(n.a,{href:"../docs/config/project#language",children:["language in ",(0,i.jsx)(n.code,{children:"moon.yml"})]}),", and have a\ndedicated Rust crate for metadata."]}),"\n",(0,i.jsxs)(n.li,{children:["\xa0",(0,i.jsx)(o.Z,{text:"Tier 2",variant:"info"})," \xa0 ",(0,i.jsx)(n.strong,{children:"Ecosystem platformization"})," - moon deeply\nintegrates with the language's ecosystem by parsing manifests, lockfiles, and other semantic files\nto infer dependencies, tasks, and other necessary information."]}),"\n",(0,i.jsxs)(n.li,{children:["\xa0",(0,i.jsx)(o.Z,{text:"Tier 3",variant:"success"})," \xa0 ",(0,i.jsx)(n.strong,{children:"Toolchain integration"})," - Language is\ndirectly supported in the toolchain, configured in\n",(0,i.jsx)(n.a,{href:"../docs/config/toolchain",children:(0,i.jsx)(n.code,{children:".moon/toolchain.yml"})}),", and will automatically be downloaded and\ninstalled."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To learn more about our currently supported languages and their tiers,\n",(0,i.jsx)(n.a,{href:"/docs#supported-languages",children:"jump to the official documentation"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["One important facet we'd like to express, is that ",(0,i.jsx)(n.em,{children:"all"})," languages and tools fall into tier 0. Feel\nfree to use anything you'd like as a task command!"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"basic-support-for-go-php-python-ruby-and-rust",children:"Basic support for Go, PHP, Python, Ruby, and, Rust"}),"\n",(0,i.jsxs)(n.p,{children:["As announced above, we now incrementally support new languages, and have integrated the following 5\nlanguages with tier 1 support: Go, PHP, Python, Ruby, and, Rust! Start using these languages today\nby setting the ",(0,i.jsx)(n.a,{href:"../docs/config/project#language",children:(0,i.jsx)(n.code,{children:"language"})})," field in ",(0,i.jsx)(n.code,{children:"moon.yml"}),", or by letting moon\ninfer the language based on files in the project root (for example, ",(0,i.jsx)(n.code,{children:"Cargo.toml"})," is Rust)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="<project>/moon.yml"',children:"language: 'rust'\n\ntasks:\n  build:\n    command: 'cargo build'\n    inputs:\n      - 'src/**/*'\n      - 'Cargo.toml'\n  test:\n    command: 'cargo test'\n    inputs:\n      - 'src/**/*'\n      - 'tests/**/*'\n      - 'Cargo.toml'\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Because these languages are tier 1, moon ",(0,i.jsx)(n.em,{children:"does not"})," install the language automatically, and will\nrequire the command to already exist in the environment. Furthermore, the project language will\nautomatically set all task's ",(0,i.jsx)(n.code,{children:"platform"}),' to "system", at least until it\'s supported directly in the\ntoolchain.']}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"interactive-project-and-dependency-graphs",children:"Interactive project and dependency graphs"}),"\n",(0,i.jsxs)(n.p,{children:["Thanks to the amazing contribution from ",(0,i.jsx)(n.a,{href:"https://github.com/IgnisDa",children:"Diptesh Choudhuri"}),", we now have\ninteractive project and dependency graphs when running the\n",(0,i.jsx)(n.a,{href:"../docs/commands/project-graph",children:(0,i.jsx)(n.code,{children:"moon project-graph"})})," and\n",(0,i.jsx)(n.a,{href:"../docs/commands/action-graph",children:(0,i.jsx)(n.code,{children:"moon dep-graph"})})," commands respectively."]}),"\n",(0,i.jsx)(n.p,{children:"This is only the first iteration of these graphs. Expect more advanced features in the future, like\nfiltering, node/edge inspection, exporting, and more!"}),"\n",(0,i.jsx)(s.Z,{src:t(47153),width:"80%"}),"\n",(0,i.jsxs)(n.h2,{id:"new---updatecache-command-line-option",children:["New ",(0,i.jsx)(n.code,{children:"--updateCache"})," command line option"]}),"\n",(0,i.jsxs)(n.p,{children:["Our caching layer is pretty powerful, as it helps to avoid tasks from running unnecessarily.\nHowever, there are situations where you need to refresh or force update the cache outside of the\n",(0,i.jsx)(n.a,{href:"../docs/config/project#inputs",children:(0,i.jsx)(n.code,{children:"inputs"})})," list. This is currently achieved with the\n",(0,i.jsx)(n.a,{href:"../docs/commands/overview#caching",children:(0,i.jsx)(n.code,{children:"--cache"})})," option, like ",(0,i.jsx)(n.code,{children:"moon --cache off run ..."}),", but this is\nnon-ideal for a few reasons:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["It disables ",(0,i.jsx)(n.em,{children:"all caching"}),", which means dependency installs/dedupes will continually be ran. This\nadds a lot of unwanted overhead."]}),"\n",(0,i.jsxs)(n.li,{children:["It requires you to backspace in the terminal to add the option ",(0,i.jsx)(n.em,{children:"before"})," ",(0,i.jsx)(n.code,{children:"run"})," or ",(0,i.jsx)(n.code,{children:"check"}),", as it's\na global option. A little tedious but important for experience."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["So to work around these limitations, we've added a new ",(0,i.jsx)(n.code,{children:"--updateCache"})," (or ",(0,i.jsx)(n.code,{children:"-u"}),") to both\n",(0,i.jsx)(n.a,{href:"../docs/commands/run",children:(0,i.jsx)(n.code,{children:"moon run"})})," and ",(0,i.jsx)(n.a,{href:"../docs/commands/run",children:(0,i.jsx)(n.code,{children:"moon check"})}),", which will bypass\nreading any existing cache items, but will force update the cache base on the latest run."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ moon run app:build --updateCache\n"})}),"\n",(0,i.jsx)(n.h2,{id:"new-multi-status-affected-filtering",children:"New multi-status affected filtering"}),"\n",(0,i.jsxs)(n.p,{children:["We support running tasks based on affected files using the\n",(0,i.jsx)(n.a,{href:"../docs/commands/run",children:(0,i.jsx)(n.code,{children:"moon run --affected"})}),' command, which is great for reducing the amount of\ntasks being ran, and for applying code quality tooling like Git hooks. However, you were only able\nto apply a single status filter, like "deleted" or "modified", which was non-ideal... but no more!']}),"\n",(0,i.jsxs)(n.p,{children:["You can now apply multiple statuses by passing the ",(0,i.jsx)(n.code,{children:"--status"})," option multiple times."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ moon run :lint --affected --status modified --status added\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This pairs nicely with the recent\n",(0,i.jsxs)(n.a,{href:"../docs/config/project#affectedfiles",children:[(0,i.jsx)(n.code,{children:"affectedFiles"})," task option"]})," changes!"]}),"\n",(0,i.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,i.jsxs)(n.p,{children:["View the\n",(0,i.jsx)(n.a,{href:"https://github.com/moonrepo/moon/releases/tag/%40moonrepo%2Fcli%400.21.0",children:"official release"})," for a\nfull list of changes."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Refactored project and dependency graphs for improved performance."}),"\n",(0,i.jsxs)(n.li,{children:["Added args and env var variants to the ",(0,i.jsx)(n.code,{children:"affectedFiles"})," task option."]}),"\n",(0,i.jsxs)(n.li,{children:["Added ",(0,i.jsx)(n.code,{children:"--minimal"})," to ",(0,i.jsx)(n.code,{children:"moon init"})," for quick scaffolding and prototyping."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,i.jsx)(n.p,{children:"Expect the following in the v0.22 release!"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Generalized hashing for use in any context (improved deps installation)."}),"\n",(0,i.jsx)(n.li,{children:"More work on language integrations."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},88109:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(24246);function a(e){let{src:n,width:t="90%",alt:a="",title:o,align:s="center",padding:r="1rem"}=e;return(0,i.jsx)("div",{style:{marginBottom:r,marginTop:r,textAlign:s},children:(0,i.jsx)("img",{src:n.default,width:t,alt:a,title:o,className:"inline-block"})})}},9619:(e,n,t)=>{t.d(n,{Z:()=>r});var i=t(40624),a=t(31792),o=t(24246);const s={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function r(e){let{className:n,icon:t,text:r,variant:l}=e;return(0,o.jsxs)("span",{className:(0,i.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",l?s[l]:"bg-gray-100 text-gray-800",n),children:[t&&(0,o.jsx)(a.Z,{icon:t,className:"mr-1"}),r]})}},25819:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/v0.21-a2807b8b9cbc5e05fe2d8cb2b78050ed.png"},47153:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});const i=t.p+"assets/images/graph-0007e61b56b4bb9a3930f73c53766755.png"},71670:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(27378);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);