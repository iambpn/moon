"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[56040],{25707:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=o(24246),s=o(71670);const i={slug:"moon-v1.14",title:"moon v1.14 - Improvements to running targets and toolchain versions",authors:["milesj"],tags:["run","target","toolchain","version","ci","shorthand"],image:"./img/moon/v1.14.png"},r=void 0,a={permalink:"/blog/moon-v1.14",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-09-25_moon-v1.14.mdx",source:"@site/blog/2023-09-25_moon-v1.14.mdx",title:"moon v1.14 - Improvements to running targets and toolchain versions",description:"In this release, we've focused on loosening restrictions to improve the overall developer",date:"2023-09-25T00:00:00.000Z",tags:[{inline:!0,label:"run",permalink:"/blog/tags/run"},{inline:!0,label:"target",permalink:"/blog/tags/target"},{inline:!0,label:"toolchain",permalink:"/blog/tags/toolchain"},{inline:!0,label:"version",permalink:"/blog/tags/version"},{inline:!0,label:"ci",permalink:"/blog/tags/ci"},{inline:!0,label:"shorthand",permalink:"/blog/tags/shorthand"}],readingTime:2.665,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"moon-v1.14",title:"moon v1.14 - Improvements to running targets and toolchain versions",authors:["milesj"],tags:["run","target","toolchain","version","ci","shorthand"],image:"./img/moon/v1.14.png"},unlisted:!1,prevItem:{title:"proto v0.19 - Version pinning and outdated checks",permalink:"/blog/proto-v0.19"},nextItem:{title:"proto v0.18 - List installed tools and configure HTTP client",permalink:"/blog/proto-v0.18"}},l={image:o(60155).Z,authorsImageUrls:[void 0]},c=[{value:"Shorthand for <code>moon run</code>",id:"shorthand-for-moon-run",level:2},{value:"Choose targets for <code>moon ci</code>",id:"choose-targets-for-moon-ci",level:2},{value:"Configure partial toolchain versions",id:"configure-partial-toolchain-versions",level:2},{value:"Other changes",id:"other-changes",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In this release, we've focused on loosening restrictions to improve the overall developer\nexperience."}),"\n",(0,t.jsxs)(n.h2,{id:"shorthand-for-moon-run",children:["Shorthand for ",(0,t.jsx)(n.code,{children:"moon run"})]}),"\n",(0,t.jsxs)(n.p,{children:['This has been a long requested feature and we\'re happy to finally deliver it! You can now omit the\n"run" keyword for the ',(0,t.jsx)(n.a,{href:"/docs/commands/run",children:(0,t.jsx)(n.code,{children:"moon run"})})," command, just so long as the first non-option\nargument is a target (must contain a ",(0,t.jsx)(n.code,{children:":"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# v1.13\n$ moon run app:build\n\n# v1.14+\n$ moon app:build\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"choose-targets-for-moon-ci",children:["Choose targets for ",(0,t.jsx)(n.code,{children:"moon ci"})]}),"\n",(0,t.jsxs)(n.p,{children:["When we initially built ",(0,t.jsx)(n.a,{href:"/docs/commands/ci",children:(0,t.jsx)(n.code,{children:"moon ci"})}),", we wanted a solution that simply ran\neverything in CI that ",(0,t.jsx)(n.em,{children:"should be ran"}),", taking care of all the complicated logic to determine\naffected tasks, comparing Git branches, gathering targets, partitioning across jobs, etc... And it\ndoes just that, and it does it well!"]}),"\n",(0,t.jsxs)(n.p,{children:["However, one major caveat to using ",(0,t.jsx)(n.code,{children:"moon ci"})," is that it runs ",(0,t.jsx)(n.em,{children:"every task"})," in the workspace (assuming\nthey're affected). This has been quite a blocker for adoption as teams may want fine-grained control\nof their CI. For example, running build tasks in one job, lint tasks in another, so on and so forth."]}),"\n",(0,t.jsxs)(n.p,{children:["In this release, we've made the necessary changes to allow these workflows, by supporting a list of\ntargets for ",(0,t.jsx)(n.code,{children:"moon ci"}),", similar to how ",(0,t.jsx)(n.code,{children:"moon run"}),' works. If no targets are provide, the existing "run\neverything" logic will be used.']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# v1.13\n$ moon ci\n\n# v1.14+\n$ moon ci :build :lint :etc\n"})}),"\n",(0,t.jsx)(n.p,{children:"Splitting targets across jobs is demonstrated with the following GitHub Action workflow:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".github/workflows/ci.yml"',children:"name: 'CI'\non:\n  push:\n    branches:\n      - 'master'\n  pull_request:\njobs:\n  build:\n    name: 'Build'\n    runs-on: 'ubuntu-latest'\n    steps:\n      - uses: 'actions/checkout@v4'\n        with:\n          fetch-depth: 0\n      - uses: 'moonrepo/setup-moon-action@v1'\n      - run: 'moon ci :build'\n  format-lint:\n    name: 'Format + Lint'\n    runs-on: 'ubuntu-latest'\n    steps:\n      - uses: 'actions/checkout@v4'\n        with:\n          fetch-depth: 0\n      - uses: 'moonrepo/setup-moon-action@v1'\n      - run: 'moon ci :format :lint'\n  test:\n    name: 'Test'\n    runs-on: 'ubuntu-latest'\n    steps:\n      - uses: 'actions/checkout@v4'\n        with:\n          fetch-depth: 0\n      - uses: 'moonrepo/setup-moon-action@v1'\n      - run: 'moon ci :test'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"configure-partial-toolchain-versions",children:"Configure partial toolchain versions"}),"\n",(0,t.jsxs)(n.p,{children:["Since moon's inception, our ",(0,t.jsx)(n.a,{href:"/docs/concepts/toolchain",children:"integrated toolchain"}),' required fully\nqualified semantic versions (major.minor.patch) for tools. This was by design to ensure that we\ncould provide a consistent, reliable, and deterministic experience for all users. This solved the\nproblem of "Is X using the correct version of Y?".']}),"\n",(0,t.jsxs)(n.p,{children:["However, this also meant that we were unable to support partial versions (major.minor) of tools,\nwhich is a common use case and request for many users. Over the last few months, we've made immense\nprogress in ",(0,t.jsx)(n.a,{href:"/proto",children:"proto"})," on how it parses, resolves, and evaluates versions, known as the\n",(0,t.jsx)(n.a,{href:"https://crates.io/crates/version_spec",children:"version specification"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["We felt the time was right to pull these changes into moon, and as such, all ",(0,t.jsx)(n.code,{children:"version"})," fields in\n",(0,t.jsx)(n.a,{href:"/docs/config/toolchain",children:(0,t.jsx)(n.code,{children:".moon/toolchain.yml"})})," now support partial versions, version\nrequirements/ranges, and even aliases!"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/toolchain.yml"',children:"node:\n  version: '20.7' # ~20.7\n  npm:\n    version: '^9'\n\nrust:\n  version: 'stable'\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Learn more about how this works under the hood in the\n",(0,t.jsx)(n.a,{href:"/docs/concepts/toolchain#version-specification",children:"official version specification documentation"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(n.p,{children:["View the ",(0,t.jsx)(n.a,{href:"https://github.com/moonrepo/moon/releases/tag/v1.14.0",children:"official release"})," for a full list\nof changes."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Added ",(0,t.jsx)(n.code,{children:"packemon"}),", ",(0,t.jsx)(n.code,{children:"sveltekit"}),", ",(0,t.jsx)(n.code,{children:"vite"}),", ",(0,t.jsx)(n.code,{children:"vitest"})," to\n",(0,t.jsx)(n.a,{href:"https://github.com/moonrepo/moon-configs",children:"moonrepo/moon-configs"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Updated ",(0,t.jsx)(n.code,{children:".moon/tasks"})," to support nested folders, for better organization of task files."]}),"\n",(0,t.jsx)(n.li,{children:"Improved handling of certificates and proxies."}),"\n",(0,t.jsx)(n.li,{children:"Updated to proto v0.18."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},60155:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/v1.14-3ce565f42964d96ef37006c8ad92d6d6.png"},71670:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>r});var t=o(27378);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);