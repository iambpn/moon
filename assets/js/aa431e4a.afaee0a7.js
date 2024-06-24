"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23512],{4652:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var i=t(24246),o=t(71670),s=t(32189);const r={title:"Nuxt example",sidebar_label:"Nuxt"},l=void 0,a={id:"guides/examples/nuxt",title:"Nuxt example",description:"In this guide, you'll learn how to integrate Nuxt v3, a Vue framework,",source:"@site/docs/guides/examples/nuxt.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/nuxt",permalink:"/docs/guides/examples/nuxt",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/nuxt.mdx",tags:[],version:"current",frontMatter:{title:"Nuxt example",sidebar_label:"Nuxt"},sidebar:"guides",previous:{title:"Next",permalink:"/docs/guides/examples/next"},next:{title:"Packemon",permalink:"/docs/guides/examples/packemon"}},c={},u=[{value:"Setup",id:"setup",level:2},{value:"ESLint integration",id:"eslint-integration",level:3},{value:"TypeScript integration",id:"typescript-integration",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Root-level",id:"root-level",level:3},{value:"Project-level",id:"project-level",level:3},{value:"Testing",id:"testing",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,{to:"https://github.com/moonrepo/examples/tree/master/apps/nuxt-app"}),"\n",(0,i.jsxs)(n.p,{children:["In this guide, you'll learn how to integrate ",(0,i.jsx)(n.a,{href:"https://nuxt.com",children:"Nuxt v3"}),", a ",(0,i.jsx)(n.a,{href:"./vue",children:"Vue"})," framework,\ninto moon."]}),"\n",(0,i.jsx)(n.p,{children:"Begin by creating a new Nuxt project at a specified folder path (this should not be created in the\nworkspace root, unless a polyrepo)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cd apps && npx nuxi init <project>\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["View the ",(0,i.jsx)(n.a,{href:"https://nuxt.com/docs/getting-started/installation",children:"official Nuxt docs"})," for a more\nin-depth guide to getting started!"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(n.p,{children:["Since Nuxt is per-project, the associated moon tasks should be defined in each project's\n",(0,i.jsx)(n.a,{href:"../../config/project",children:(0,i.jsx)(n.code,{children:"moon.yml"})})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="<project>/moon.yml"',children:"fileGroups:\n  nuxt:\n    - 'assets/**/*'\n    - 'components/**/*'\n    - 'composables/**/*'\n    - 'content/**/*'\n    - 'layouts/**/*'\n    - 'middleware/**/*'\n    - 'pages/**/*'\n    - 'plugins/**/*'\n    - 'public/**/*'\n    - 'server/**/*'\n    - 'utils/**/*'\n    - '.nuxtignore'\n    - 'app.config.*'\n    - 'app.vue'\n    - 'nuxt.config.*'\n\ntasks:\n  nuxt:\n    command: 'nuxt'\n    local: true\n\n  # Production build\n  build:\n    command: 'nuxt build'\n    inputs:\n      - '@group(nuxt)'\n    outputs:\n      - '.nuxt'\n      - '.output'\n\n  # Development server\n  dev:\n    command: 'nuxt dev'\n    local: true\n\n  # Preview production build locally\n  preview:\n    command: 'nuxt preview'\n    deps:\n      - '~:build'\n    local: true\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Be sure to keep the ",(0,i.jsx)(n.code,{children:"postinstall"})," script in your project's ",(0,i.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="<project>/package.json"',children:'{\n  // ...\n  "scripts": {\n    "postinstall": "nuxt prepare"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"eslint-integration",children:"ESLint integration"}),"\n",(0,i.jsxs)(n.p,{children:["Refer to our ",(0,i.jsx)(n.a,{href:"./vue#eslint-integration",children:"Vue documentation"})," for more information on linting."]}),"\n",(0,i.jsx)(n.h3,{id:"typescript-integration",children:"TypeScript integration"}),"\n",(0,i.jsxs)(n.p,{children:["Nuxt requires ",(0,i.jsx)(n.code,{children:"vue-tsc"})," for typechecking, so refer to our\n",(0,i.jsx)(n.a,{href:"./vue#typescript-integration",children:"Vue documentation"})," for more information."]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.h3,{id:"root-level",children:"Root-level"}),"\n",(0,i.jsxs)(n.p,{children:["We suggest ",(0,i.jsx)(n.em,{children:"against"})," root-level configuration, as Nuxt should be installed per-project, and the\n",(0,i.jsx)(n.code,{children:"nuxt"})," command expects the configuration to live relative to the project root."]}),"\n",(0,i.jsx)(n.h3,{id:"project-level",children:"Project-level"}),"\n",(0,i.jsxs)(n.p,{children:["When creating a new Nuxt project, a\n",(0,i.jsx)(n.a,{href:"https://v3.nuxtjs.org/api/configuration/nuxt-config",children:(0,i.jsx)(n.code,{children:"nuxt.config.ts"})})," is created, and ",(0,i.jsx)(n.em,{children:"must"})," exist\nin the project root. This allows each project to configure Next.js for their needs."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="<project>/nuxt.config.ts"',children:"export default defineNuxtConfig({});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,i.jsxs)(n.p,{children:["Nuxt supports testing through ",(0,i.jsx)(n.a,{href:"https://jestjs.io/",children:"Jest"})," or ",(0,i.jsx)(n.a,{href:"https://vitest.dev/",children:"Vitest"}),". Refer to\nour ",(0,i.jsx)(n.a,{href:"./jest",children:"Jest documentation"})," or ",(0,i.jsx)(n.a,{href:"./vite",children:"Vitest documentation"})," for more information on testing."]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},32189:(e,n,t)=>{t.d(n,{Z:()=>r});var i=t(83469),o=t(31792),s=t(24246);function r(e){let{to:n}=e;return(0,s.jsx)("a",{href:n,target:"_blank",className:"float-right inline-block",style:{marginTop:"-3em"},children:(0,s.jsx)(o.Z,{icon:i.dT$})})}},71670:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var i=t(27378);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);