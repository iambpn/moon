"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16319],{82832:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=t(24246),s=t(71670);const o={slug:"moon-v1.19",title:"moon v1.19 - Improvements to task dependencies, codegen, and more",authors:["milesj"],tags:["task","deps","args","env","codegen","templates","experiments"],image:"./img/moon/v1.19.png"},a=void 0,r={permalink:"/blog/moon-v1.19",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2024-01-01_moon-v1.19.mdx",source:"@site/blog/2024-01-01_moon-v1.19.mdx",title:"moon v1.19 - Improvements to task dependencies, codegen, and more",description:"In this release, we're introducing some long-awaited and requested improvements.",date:"2024-01-01T00:00:00.000Z",tags:[{inline:!0,label:"task",permalink:"/blog/tags/task"},{inline:!0,label:"deps",permalink:"/blog/tags/deps"},{inline:!0,label:"args",permalink:"/blog/tags/args"},{inline:!0,label:"env",permalink:"/blog/tags/env"},{inline:!0,label:"codegen",permalink:"/blog/tags/codegen"},{inline:!0,label:"templates",permalink:"/blog/tags/templates"},{inline:!0,label:"experiments",permalink:"/blog/tags/experiments"}],readingTime:4.055,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"moon-v1.19",title:"moon v1.19 - Improvements to task dependencies, codegen, and more",authors:["milesj"],tags:["task","deps","args","env","codegen","templates","experiments"],image:"./img/moon/v1.19.png"},unlisted:!1,prevItem:{title:"proto v0.27 - PowerShell profiles, shim regeneration, and more",permalink:"/blog/proto-v0.27"},nextItem:{title:"proto v0.26 - New native shim implementation",permalink:"/blog/proto-v0.26"}},d={image:t(99015).Z,authorsImageUrls:[void 0]},l=[{value:"Configure args and env vars for task dependencies",id:"configure-args-and-env-vars-for-task-dependencies",level:2},{value:"Codegen improvements",id:"codegen-improvements",level:2},{value:"Extend other templates",id:"extend-other-templates",level:3},{value:"Configure a default destination",id:"configure-a-default-destination",level:3},{value:"Resolved long-standing experiments",id:"resolved-long-standing-experiments",level:2},{value:"Other changes",id:"other-changes",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In this release, we're introducing some long-awaited and requested improvements."}),"\n",(0,i.jsx)(n.h2,{id:"configure-args-and-env-vars-for-task-dependencies",children:"Configure args and env vars for task dependencies"}),"\n",(0,i.jsxs)(n.p,{children:["This has been a long standing request from the community, and we're happy to finally deliver it.\nStarting with v1.19, you can now configure optional command line arguments and environment variables\nfor each task ",(0,i.jsx)(n.a,{href:"/docs/config/project#deps",children:(0,i.jsx)(n.code,{children:"deps"})})," entry. These values will be passed to the task\nwhen it is executed."]}),"\n",(0,i.jsxs)(n.p,{children:["Here's an example of what both patterns look like. The ",(0,i.jsx)(n.code,{children:"target"})," field is required when configuring\nan object, and both the ",(0,i.jsx)(n.code,{children:"args"})," and ",(0,i.jsx)(n.code,{children:"env"})," fields can be mixed and matched."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="moon.yml"',children:"tasks:\n  build:\n    command: 'vite build'\n    deps:\n      # Just a target\n      - '^:build'\n\n      # With args (string)\n      - target: '^:build'\n        args: '--mode production'\n\n      # With env vars\n      - target: '^:build'\n        env:\n          NODE_ENV: 'production'\n\n      # With args (array) and env vars\n      - target: '^:build'\n        args:\n          - '--mode'\n          - 'production'\n        env:\n          NODE_ENV: 'production'\n"})}),"\n",(0,i.jsx)(n.p,{children:"When using this functionality, there are a few things to understand about its implementation, and\nhow it affects the rest of the pipeline:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["When extending or inheriting a task and a merger is required, and this task has a dependency with\na colliding target, the ",(0,i.jsx)(n.code,{children:"args"})," and ",(0,i.jsx)(n.code,{children:"env"})," fields will ",(0,i.jsx)(n.em,{children:"NOT"})," be deeply merged. Whichever task is\ninherited last will have its ",(0,i.jsx)(n.code,{children:"deps"})," used."]}),"\n",(0,i.jsx)(n.li,{children:"When multiple dependencies of the same target are ran in the action pipeline, but with differing\nargs or env vars, only 1 will run at a time. We try to avoid running them in parallel to avoid\ncollisions and corrupting outputs."}),"\n",(0,i.jsxs)(n.li,{children:["Arguments and environment variables do ",(0,i.jsx)(n.em,{children:"NOT"})," support tokens."]}),"\n",(0,i.jsx)(n.li,{children:"If dependencies all write to the same output, cleaning the output is your responsibility, not\nmoon's."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"codegen-improvements",children:"Codegen improvements"}),"\n",(0,i.jsx)(n.p,{children:"Code generation is one of moon's oldest features, and hasn't been improved in quite a while. We felt\nthe time was right to give it a little love."}),"\n",(0,i.jsx)(n.h3,{id:"extend-other-templates",children:"Extend other templates"}),"\n",(0,i.jsxs)(n.p,{children:["This has been a ",(0,i.jsx)(n.a,{href:"https://github.com/moonrepo/moon/issues/434",children:"request for over a year"}),", and we\nfinally found the time to put it on the roadmap. Starting with this release, you can now extend\nother templates using the ",(0,i.jsx)(n.a,{href:"/docs/config/template#extends",children:(0,i.jsx)(n.code,{children:"extends"})})," setting in\n",(0,i.jsx)(n.a,{href:"/docs/config/template",children:(0,i.jsx)(n.code,{children:"template.yml"})}),", which supports a list of template names."]}),"\n",(0,i.jsx)(n.p,{children:"Templates will be recursively extended from top to bottom, and all files and variables will be\ninherited and merged at the top-level."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="template.yml"',children:"title: 'npm package'\nextends: ['node-common']\n"})}),"\n",(0,i.jsx)(n.h3,{id:"configure-a-default-destination",children:"Configure a default destination"}),"\n",(0,i.jsxs)(n.p,{children:["When you call ",(0,i.jsx)(n.a,{href:"/docs/commands/generate",children:(0,i.jsx)(n.code,{children:"moon generate"})})," you must provide a destination directory\nfor the generated files, or we'll prompt you to provide one. But what if you wanted to standardize\nthe destination? For example, a package scaffolding template should go to ",(0,i.jsx)(n.code,{children:"packages/"}),". This is now\npossible with the optional ",(0,i.jsx)(n.a,{href:"/docs/config/template#destination",children:(0,i.jsx)(n.code,{children:"destination"})})," setting in\n",(0,i.jsx)(n.a,{href:"/docs/config/template",children:(0,i.jsx)(n.code,{children:"template.yml"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If no destination is provided to ",(0,i.jsx)(n.code,{children:"moon generate"}),", we'll use this default destination."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="template.yml"',children:"title: 'npm package'\ndestination: 'packages/[name | kebab_case]'\nvariables:\n  name:\n    type: 'string'\n    default: ''\n    required: true\n    prompt: 'Package name?'\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["For better interoperability, this setting can also reference variables using ",(0,i.jsx)(n.code,{children:"[var]"})," syntax, and can\nalso use Tera filters. Learn more about this in the\n",(0,i.jsx)(n.a,{href:"/docs/guides/codegen#interpolation",children:"code generation documentation"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"resolved-long-standing-experiments",children:"Resolved long-standing experiments"}),"\n",(0,i.jsxs)(n.p,{children:["moon has a concept of ",(0,i.jsx)(n.a,{href:"/docs/config/workspace#experiments",children:"experiments"}),", where certain features are\ngated behind a flag. This allows us to support new and old functionality in parallel, and also allow\nusers to gradually upgrade when encountering a breaking change. For many months now, we've had 2\nexperiments running, and have decided on a path forward."]}),"\n",(0,i.jsxs)(n.p,{children:["The first is ",(0,i.jsx)(n.code,{children:"experiments.interweavedTaskInheritance"}),", which would inherit global and local tasks in\norder, interweaved within each other. The old implementation would inherit global first, then local\nsecond, distinctly grouping them. Since this experiment was introduced, we have not received a\nsingle bug report or issue. This is a good sign that the new behavior is working as expected, and as\nsuch, have decided ",(0,i.jsx)(n.em,{children:"to move forward"})," with this experiment and make it the new implementation. The\nold implementation has been removed entirely."]}),"\n",(0,i.jsxs)(n.p,{children:["The second is ",(0,i.jsx)(n.code,{children:"experiments.taskOutputBoundaries"}),", which was rather controversial when introduced.\nThis experiment would trigger an error anytime a ",(0,i.jsxs)(n.a,{href:"/docs/config/project#outputs",children:["task's ",(0,i.jsx)(n.code,{children:"outputs"})]})," overlapped within\nanother ",(0,i.jsxs)(n.a,{href:"/docs/config/project#outputs",children:["task's ",(0,i.jsx)(n.code,{children:"outputs"})]}),'. The reason for this change, is that multiple tasks writing to\nthe same output location could "corrupt" the expected state, and trigger unexpected results when\nhydrating from the cache. However in practice, this restriction has caused more headache and\nintroduced a steeper learning curve then expected. It also caused problems with\n',(0,i.jsx)(n.a,{href:"/docs/config/project#extends",children:"tasks that extend"})," from another, resulting in the same outputs being\nused. Because of this, we've decided ",(0,i.jsxs)(n.em,{children:["to ",(0,i.jsx)(n.strong,{children:"not"})," move forward"]})," with this experiment, and allow\nwhatever task outputs you wish (we trust you're smart enough to not shoot yourself in the foot)."]}),"\n",(0,i.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,i.jsxs)(n.p,{children:["View the ",(0,i.jsx)(n.a,{href:"https://github.com/moonrepo/moon/releases/tag/v1.19.0",children:"official release"})," for a full list\nof changes."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Updated proto to v0.26 (from v0.25), which includes a new shims implementation."}),"\n",(0,i.jsx)(n.li,{children:"Updated VS Code extension to support multiple VS Code workspace folders."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},99015:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/v1.19-8d5c4b963a6a8bbfd8990736ff5e5d39.png"},71670:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(27378);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);