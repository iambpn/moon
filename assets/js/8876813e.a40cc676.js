"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2615],{72150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var i=t(24246),r=t(71670),s=t(27378),o=t(26675);function a(){const e=(0,s.useRef)(null);return(0,s.useEffect)((()=>{e.current&&(0,o.A)(e.current,{edges:[{data:{source:"app-client",target:"lib-components"}},{data:{source:"app-client",target:"lib-utils"}},{data:{source:"app-client",target:"lib-intl"}},{data:{source:"app-server",target:"lib-utils"}},{data:{source:"app-server",target:"lib-intl"}},{data:{source:"lib-components",target:"lib-intl"}},{data:{source:"lib-components",target:"lib-theme"}},{data:{source:"lib-components",target:"lib-utils"}}],nodes:[{data:{id:"app-client",label:"Client app",type:"xl"}},{data:{id:"app-server",label:"Server app",type:"xl"}},{data:{id:"lib-components",label:"Components",type:"lg"}},{data:{id:"lib-utils",label:"Utils",type:"lg"}},{data:{id:"lib-theme",label:"Theme",type:"lg"}},{data:{id:"lib-intl",label:"Intl",type:"lg"}}]})}),[]),(0,i.jsx)("div",{id:"project-graph",ref:e,className:"p-1 mb-2 rounded bg-slate-800",style:{height:"450px",width:"100%"}})}const l={title:"Project graph"},c=void 0,d={id:"how-it-works/project-graph",title:"Project graph",description:"The project graph is a representation of all configured",source:"@site/docs/how-it-works/project-graph.mdx",sourceDirName:"how-it-works",slug:"/how-it-works/project-graph",permalink:"/docs/how-it-works/project-graph",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/how-it-works/project-graph.mdx",tags:[],version:"current",frontMatter:{title:"Project graph"},sidebar:"docs",previous:{title:"Languages",permalink:"/docs/how-it-works/languages"},next:{title:"Action graph",permalink:"/docs/how-it-works/action-graph"}},p={},h=[{value:"Relationships",id:"relationships",level:2},{value:"Explicit",id:"explicit",level:3},{value:"Implicit",id:"implicit",level:3},{value:"Scopes",id:"scopes",level:3},{value:"What is the graph used for?",id:"what-is-the-graph-used-for",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The project graph is a representation of all configured\n",(0,i.jsx)(n.a,{href:"../config/workspace#projects",children:"projects in the workspace"})," and their relationships between each\nother, and is represented internally as a directed acyclic graph (DAG). Below is a visual\nrepresentation of a project graph, composed of multiple applications and libraries, where both\nproject types depend on libraries."]}),"\n",(0,i.jsx)(a,{}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"../commands/project-graph",children:(0,i.jsx)(n.code,{children:"moon project-graph"})})," command can be used to view the structure of\nyour workspace."]})}),"\n",(0,i.jsx)(n.h2,{id:"relationships",children:"Relationships"}),"\n",(0,i.jsx)(n.p,{children:"A relationship is between a dependent (the parent project) and a dependency/requirement (a child\nproject). Relationships are derived from source code and configuration files within the repository,\nand fall into 1 of 2 categories:"}),"\n",(0,i.jsx)(n.h3,{id:"explicit",children:"Explicit"}),"\n",(0,i.jsxs)(n.p,{children:["These are dependencies that are explicitly defined in a project's ",(0,i.jsx)(n.a,{href:"../config/project",children:(0,i.jsx)(n.code,{children:"moon.yml"})}),"\nconfig file, using the ",(0,i.jsx)(n.a,{href:"../config/project#dependson",children:(0,i.jsx)(n.code,{children:"dependsOn"})})," setting."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="moon.yml"',children:"dependsOn:\n  - 'components'\n  - id: 'utils'\n    scope: 'peer'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"implicit",children:"Implicit"}),"\n",(0,i.jsxs)(n.p,{children:["These are dependencies that are implicitly discovered by moon when scanning the repository. How an\nimplicit dependency is discovered is based on a\n",(0,i.jsx)(n.a,{href:"./languages#tier-2--platform",children:"language's platform integration"}),", and how that language's ecosystem\nfunctions."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  // ...\n  "dependencies": {\n    "@company/components": "workspace:*"\n  },\n  "peerDependencies": {\n    "@company/utils": "workspace:*"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["If a language is not officially supported by moon, then implicit dependencies will ",(0,i.jsx)(n.em,{children:"not"})," be\nresolved. For unsupported languages, you must explicitly configure dependencies."]})}),"\n",(0,i.jsx)(n.h3,{id:"scopes",children:"Scopes"}),"\n",(0,i.jsxs)(n.p,{children:["Every relationship is categorized into a scope that describes the type of relationship between the\nparent and child. Scopes are currently used for ",(0,i.jsx)(n.a,{href:"../commands/sync",children:"project syncing"})," and deep Docker\nintegration."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Production"})," - Dependency is required in production, ",(0,i.jsx)(n.em,{children:"will not be"})," pruned in production\nenvironments, and will sync as a production dependency."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Development"})," - Dependency is required in development and production, ",(0,i.jsx)(n.em,{children:"will be"})," pruned from\nproduction environments, and will sync as a development-only dependency."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Build"})," - Dependency is required for building only, and will sync as a build dependency."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Peer"})," - Dependency is a peer requirement, with language specific semantics. Will sync as a peer\ndependency when applicable."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"what-is-the-graph-used-for",children:"What is the graph used for?"}),"\n",(0,i.jsx)(n.p,{children:"Great question, the project graph is used throughout the codebase to accomplish a variety of\nfunctions, but mainly:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Is fed into the ",(0,i.jsx)(n.a,{href:"./action-graph",children:"action graph"})," to determine relationships of tasks between other\ntasks, and across projects."]}),"\n",(0,i.jsxs)(n.li,{children:["Powers our ",(0,i.jsx)(n.a,{href:"../guides/docker",children:"Docker"})," layer caching and scaffolding implementations."]}),"\n",(0,i.jsxs)(n.li,{children:["Utilized for ",(0,i.jsx)(n.a,{href:"../commands/sync",children:"project syncing"})," to ensure a healthy repository state."]}),"\n",(0,i.jsxs)(n.li,{children:["Determines affected projects in ",(0,i.jsx)(n.a,{href:"../guides/ci",children:"continuous integration"})," workflows."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},26675:(e,n,t)=>{t.d(n,{A:()=>o});var i=t(76573),r=t(58406),s=t.n(r);function o(e,n){return(0,i.Z)({container:e,elements:n,layout:{fit:!0,name:"dagre",nodeDimensionsIncludeLabels:!0,spacingFactor:1},style:[{selector:"edges",style:{"arrow-scale":2,"curve-style":"straight","line-cap":"round","line-color":"#c9eef6","line-opacity":.25,"overlay-color":"#c9eef6","target-arrow-color":"#c9eef6","target-arrow-shape":"tee",width:3}},{selector:"node",style:{"background-fill":"linear-gradient","background-gradient-direction":"to-bottom-right","background-gradient-stop-colors":"#d7dfe9 #bdc9db #97a1af",color:"#fff",height:60,label:"data(label)","overlay-color":"#99aab7","overlay-shape":"ellipse",padding:0,shape:"ellipse","text-halign":"center","text-margin-y":6,"text-valign":"bottom","underlay-shape":"ellipse",width:60}},{selector:'node[type="run-task"], node[type="sm"]',style:{"background-gradient-stop-colors":"#6e58d1 #4a2ec6 #3b259e"}},{selector:'node[type="run-target"], node[type="sm"]',style:{"background-gradient-stop-colors":"#6e58d1 #4a2ec6 #3b259e"}},{selector:'node[type="sync-project"], node[type="md"]',style:{"background-gradient-stop-colors":"#ffafff #ff79ff #cc61cc",height:80,width:80}},{selector:'node[type="install-deps"], node[type="lg"]',style:{"background-gradient-stop-colors":"#afe6f2 #79d5e9 #61aaba",height:100,width:100}},{selector:'node[type="setup-toolchain"], node[type="xl"]',style:{"background-gradient-stop-colors":"#ff9da6 #ff5b6b #cc4956",height:120,width:120}},{selector:'node[id="sync-workspace"]',style:{"background-gradient-stop-colors":"#b7a9f9 #9a87f7 #8c75f5",height:120,width:120}}]})}i.Z.use(s())}}]);