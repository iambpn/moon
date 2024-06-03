"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48667],{8029:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var t=a(24246),r=a(71670),l=(a(33337),a(39798),a(27915)),s=a(9634),o=a(36642);const i={title:"Install moon"},c=void 0,d={id:"install",title:"Install moon",description:"The following guide can be used to install moon and integrate it into an existing repository (with",source:"@site/docs/install.mdx",sourceDirName:".",slug:"/install",permalink:"/docs/install",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/install.mdx",tags:[],version:"current",frontMatter:{title:"Install moon"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"How it works",permalink:"/docs/how-it-works"}},u={},h=[{value:"Installing",id:"installing",level:2},{value:"proto",id:"proto",level:3},{value:"Linux, macOS, WSL",id:"linux-macos-wsl",level:3},{value:"Windows",id:"windows",level:3},{value:"npm",id:"npm",level:3},{value:"Other",id:"other",level:3},{value:"Upgrading",id:"upgrading",level:2},{value:"Canary releases",id:"canary-releases",level:2},{value:"Nightly releases",id:"nightly-releases",level:2},{value:"Next steps",id:"next-steps",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.Z,{text:"2 min"}),"\n",(0,t.jsx)(n.p,{children:"The following guide can be used to install moon and integrate it into an existing repository (with\nor without incremental adoption), or to a fresh repository."}),"\n",(0,t.jsx)(n.h2,{id:"installing",children:"Installing"}),"\n",(0,t.jsx)(n.p,{children:"The entirety of moon is packaged and shipped as a single binary. It works on all major operating\nsystems, and does not require any external dependencies. For convenience, we provide the following\nscripts to download and install moon."}),"\n",(0,t.jsx)(n.h3,{id:"proto",children:"proto"}),"\n",(0,t.jsxs)(n.p,{children:["moon can be installed and managed in ",(0,t.jsx)(n.a,{href:"/proto",children:"proto's toolchain"})," using a TOML plugin. This will\ninstall moon to ",(0,t.jsx)(n.code,{children:"~/.proto/tools/moon"})," and make the binary available at ",(0,t.jsx)(n.code,{children:"~/.proto/bin"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'proto plugin add moon "https://raw.githubusercontent.com/moonrepo/moon/master/proto-plugin.toml"\nproto install moon\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Furthermore, the version of moon can be pinned on a per-project basis using the\n",(0,t.jsxs)(n.a,{href:"/docs/proto/config",children:[(0,t.jsx)(n.code,{children:".prototools"})," config file"]}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title=".prototools"',children:'moon = "1.3.0"\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"We suggest using proto to manage moon (and other tools), as it allows for multiple versions to be\ninstalled and used. The other installation options only allow for a single version (typically the\nlast installed)."})}),"\n",(0,t.jsx)(n.h3,{id:"linux-macos-wsl",children:"Linux, macOS, WSL"}),"\n",(0,t.jsx)(n.p,{children:"In a terminal that supports Bash, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"curl -fsSL https://moonrepo.dev/install/moon.sh | bash\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will install moon to ",(0,t.jsx)(n.code,{children:"~/.moon/bin"}),". You'll then need to set ",(0,t.jsx)(n.code,{children:"PATH"})," manually in your shell\nprofile."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'export PATH="$HOME/.moon/bin:$PATH"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,t.jsx)(n.p,{children:"In Powershell or Windows Terminal, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"irm https://moonrepo.dev/install/moon.ps1 | iex\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will install moon to ",(0,t.jsx)(n.code,{children:"~\\.moon\\bin"})," and prepend to the ",(0,t.jsx)(n.code,{children:"PATH"})," environment variable for the\ncurrent session. To persist across sessions, update ",(0,t.jsx)(n.code,{children:"PATH"})," manually in your system environment\nvariables."]}),"\n",(0,t.jsx)(n.h3,{id:"npm",children:"npm"}),"\n",(0,t.jsxs)(n.p,{children:["moon is also packaged and shipped as a single binary through the\n",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@moonrepo/cli",children:(0,t.jsx)(n.code,{children:"@moonrepo/cli"})})," npm package. Begin by installing this\npackage at the root of the repository."]}),"\n",(0,t.jsx)(o.Z,{dep:"@moonrepo/cli",dev:!0}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["When a global ",(0,t.jsx)(n.code,{children:"moon"})," binary is executed, and the ",(0,t.jsx)(n.code,{children:"@moonrepo/cli"})," binary exists within the\nrepository, the npm package version will be executed instead. We do this because the npm package\ndenotes the exact version the repository is pinned it."]})}),"\n",(0,t.jsx)(n.h3,{id:"other",children:"Other"}),"\n",(0,t.jsxs)(n.p,{children:["moon can also be downloaded and installed manually, by downloading an asset from\n",(0,t.jsx)(n.a,{href:"https://github.com/moonrepo/moon/releases",children:"https://github.com/moonrepo/moon/releases"}),". Be sure to\nrename the file after downloading, and apply the executable bit (",(0,t.jsx)(n.code,{children:"chmod +x"}),") on macOS and Linux."]}),"\n",(0,t.jsx)(n.h2,{id:"upgrading",children:"Upgrading"}),"\n",(0,t.jsx)(n.p,{children:"If using proto, moon can be upgraded using the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"proto install moon --pin\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Otherwise, moon can be upgraded with the ",(0,t.jsx)(n.a,{href:"./commands/upgrade",children:(0,t.jsx)(n.code,{children:"moon upgrade"})})," command. However, this\nwill only upgrade moon if it was installed in ",(0,t.jsx)(n.code,{children:"~/.moon/bin"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"moon upgrade\n"})}),"\n",(0,t.jsx)(n.p,{children:"Otherwise, you can re-run the installers above and it will download, install, and overwrite with the\nlatest version."}),"\n",(0,t.jsx)(n.h2,{id:"canary-releases",children:"Canary releases"}),"\n",(0,t.jsx)(n.p,{children:"moon supports canary releases, which are built and published for every commit to our development\nbranches. These releases will include features and functionality that have not yet landed on master.\nWhen using a canary release, you'll need to download and execute the binaries manually:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Using our npm package\n",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@moonrepo/cli?activeTab=versions",children:(0,t.jsx)(n.code,{children:"@moonrepo/cli"})})," under the\n",(0,t.jsx)(n.code,{children:"canary"})," tag. Releases are versioned by date."]}),"\n",(0,t.jsxs)(n.li,{children:["From a ",(0,t.jsx)(n.a,{href:"https://github.com/moonrepo/moon/releases/tag/canary",children:"GitHub prerelease"})," using the\n",(0,t.jsx)(n.code,{children:"canary"})," tag. This tag always represents the latest development release."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"nightly-releases",children:"Nightly releases"}),"\n",(0,t.jsx)(n.p,{children:"moon supports nightly releases, which are built and published once a day from the latest commit on\nmaster. When using a nightly release, you'll need to download and execute the binaries manually."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Using our npm package\n",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@moonrepo/cli?activeTab=versions",children:(0,t.jsx)(n.code,{children:"@moonrepo/cli"})})," under the\n",(0,t.jsx)(n.code,{children:"nightly"})," tag. Releases are versioned by date."]}),"\n",(0,t.jsxs)(n.li,{children:["From a ",(0,t.jsx)(n.a,{href:"https://github.com/moonrepo/moon/releases/tag/nightly",children:"GitHub prerelease"})," using the\n",(0,t.jsx)(n.code,{children:"nightly"})," tag. This tag always represents the latest stable release."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsx)(s.Z,{links:[{icon:"workspace-config",label:"Setup workspace",url:"./setup-workspace"}]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},39798:(e,n,a)=>{a.d(n,{Z:()=>s});a(27378);var t=a(40624);const r={tabItem:"tabItem_wHwb"};var l=a(24246);function s(e){let{children:n,hidden:a,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,s),hidden:a,children:n})}},33337:(e,n,a)=>{a.d(n,{Z:()=>p});var t=a(27378),r=a(40624),l=a(83457),s=a(35595),o=a(76457);const i={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var c=a(24246);function d(e){let{className:n,block:a,selectedValue:t,selectValue:s,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),h=e=>{const n=e.currentTarget,a=d.indexOf(n),r=o[a].value;r!==t&&(u(n),s(r))},p=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;n=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;n=d[a]??d[d.length-1];break}}n?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:l}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:p,onClick:h,...l,className:(0,r.Z)("tabs__item",i.tabItem,l?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function u(e){let{lazy:n,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function h(e){const n=(0,s.Y)(e);return(0,c.jsxs)("div",{className:(0,r.Z)("tabs-container",i.tabList),children:[(0,c.jsx)(d,{...n,...e}),(0,c.jsx)(u,{...n,...e})]})}function p(e){const n=(0,o.Z)();return(0,c.jsx)(h,{...e,children:(0,s.h)(e.children)},String(n))}},35595:(e,n,a)=>{a.d(n,{Y:()=>p,h:()=>c});var t=a(27378),r=a(3620),l=a(9834),s=a(30654),o=a(70784),i=a(71819);function c(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function u(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:a}=e;const l=(0,r.k6)(),o=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,s._X)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(l.location.search);n.set(o,e),l.replace({...l.location,search:n.toString()})}),[o,l])]}function p(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=d(e),[o,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[p,m]=h({queryString:a,groupId:r}),[g,x]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,i.Nk)(a);return[r,(0,t.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=p??g;return u({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),m(e),x(e)}),[m,x,s]),tabValues:s}}},36642:(e,n,a)=>{a.d(n,{Z:()=>u});var t=a(52807),r=a(39798),l=a(33337),s=a(24246);function o(e,n,a){let t=e.package?`yarn workspace ${e.package} add `:"yarn add ";return e.dev?t+="--dev ":e.peer&&(t+="--peer "),a&&n&&!e.package&&(t+="-W "),t+=e.dep,t}function i(e){let n="npm install ";return e.dev?n+="--save-dev ":e.peer&&(n+="--save-peer "),e.package&&(n+=`--workspace ${e.package} `),n+=e.dep,n}function c(e,n){let a="pnpm add ";return e.dev?a+="--save-dev ":e.peer&&(a+="--save-peer "),e.package?a+=`--filter ${e.package} `:n&&(a+="-w "),a+=e.dep,a}function d(e){let n="bun install ";return e.dev?n+="--dev ":e.peer&&(n+="--peer "),n+=e.dep,n}function u(e){let n=o(e,!1,!0),a=c(e,!1);return e.package||(n+="\n\n# If using workspaces\n",a+="\n\n# If using workspaces\n",n+=o(e,!0,!0),a+=c(e,!0)),(0,s.jsxs)(l.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"Bun",value:"bun"}],children:[(0,s.jsx)(r.Z,{value:"yarn",children:(0,s.jsx)(t.default,{language:"shell",children:o(e,!1,!1)})}),(0,s.jsx)(r.Z,{value:"yarn1",children:(0,s.jsx)(t.default,{language:"shell",children:n})}),(0,s.jsx)(r.Z,{value:"npm",children:(0,s.jsx)(t.default,{language:"shell",children:i(e)})}),(0,s.jsx)(r.Z,{value:"pnpm",children:(0,s.jsx)(t.default,{language:"shell",children:a})}),(0,s.jsx)(r.Z,{value:"bun",children:(0,s.jsx)(t.default,{language:"shell",children:d(e)})})]})}},27915:(e,n,a)=>{a.d(n,{Z:()=>s});var t=a(83469),r=a(9619),l=a(24246);function s(e){let{text:n}=e;return(0,l.jsx)(r.Z,{text:n,icon:t.SZw,variant:"success",className:"absolute right-0 top-1.5"})}},9634:(e,n,a)=>{a.d(n,{Z:()=>d});var t=a(36641),r=a(9928),l=a(83469),s=a(31792),o=a(24246);const i={discord:r.omb,github:r.zhw,moon:l.Gp0,"new-project":l.g6h,"new-task":l.EQ8,project:l.pL1,"project-config":l.dhu,"project-config-global":l.YdP,"project-graph":l.Bkj,"run-task":l.sl_,task:l.diR,"task-config":l.o$R,token:l.BwA,toolchain:l.AlB,"toolchain-config":l.eDR,twitter:r.mdU,workspace:l.emM,"workspace-config":l.cRF};function c(e){let{name:n,...a}=e;return(0,o.jsx)(s.Z,{...a,icon:i[n]})}function d(e){let{links:n}=e;return(0,o.jsx)("div",{className:"grid grid-cols-1 gap-2 sm:grid-cols-2",children:n.map((e=>(0,o.jsx)(t.default,{href:e.url,className:"focus:outline-none",children:(0,o.jsxs)("div",{className:"relative rounded-lg px-3 py-3 flex items-center space-x-2 border-solid border border-t-0 border-b-2 bg-gray-50 hover:bg-gray-100/90 border-gray-200/75 dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-900/75",children:[(0,o.jsx)("div",{className:"flex-shrink-0",children:(0,o.jsx)(c,{size:"lg",name:e.icon})}),(0,o.jsx)("div",{className:"flex-1 min-w-0 text-gray-900 dark:text-gray-100",children:e.label})]})},e.url)))})}},9619:(e,n,a)=>{a.d(n,{Z:()=>o});var t=a(40624),r=a(31792),l=a(24246);const s={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function o(e){let{className:n,icon:a,text:o,variant:i}=e;return(0,l.jsxs)("span",{className:(0,t.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",i?s[i]:"bg-gray-100 text-gray-800",n),children:[a&&(0,l.jsx)(r.Z,{icon:a,className:"mr-1"}),o]})}},71670:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>s});var t=a(27378);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);