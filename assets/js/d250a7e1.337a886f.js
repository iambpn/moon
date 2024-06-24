"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93177],{68991:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=o(24246),s=o(71670);const r={slug:"proto-v0.37",title:"proto v0.37 - Calver support and self diagnosis",authors:["milesj"],tags:["calver","calendar","version","diagnose","doctor"]},i=void 0,a={permalink:"/blog/proto-v0.37",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2024-06-16_proto-v0.37.mdx",source:"@site/blog/2024-06-16_proto-v0.37.mdx",title:"proto v0.37 - Calver support and self diagnosis",description:"This is a small release, but includes 2 very important features.",date:"2024-06-16T00:00:00.000Z",tags:[{inline:!0,label:"calver",permalink:"/blog/tags/calver"},{inline:!0,label:"calendar",permalink:"/blog/tags/calendar"},{inline:!0,label:"version",permalink:"/blog/tags/version"},{inline:!0,label:"diagnose",permalink:"/blog/tags/diagnose"},{inline:!0,label:"doctor",permalink:"/blog/tags/doctor"}],readingTime:1.805,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"proto-v0.37",title:"proto v0.37 - Calver support and self diagnosis",authors:["milesj"],tags:["calver","calendar","version","diagnose","doctor"]},unlisted:!1,prevItem:{title:"moon v1.26 - New experimental pipeline, trace profiles, and more",permalink:"/blog/moon-v1.26"},nextItem:{title:"proto v0.36 - Static registry, plugin searching, and more",permalink:"/blog/proto-v0.36"}},l={authorsImageUrls:[void 0]},d=[{value:"Calender versioning support",id:"calender-versioning-support",level:2},{value:"New <code>proto diagnose</code> command",id:"new-proto-diagnose-command",level:2},{value:"Other changes",id:"other-changes",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This is a small release, but includes 2 very important features."}),"\n",(0,t.jsx)(n.h2,{id:"calender-versioning-support",children:"Calender versioning support"}),"\n",(0,t.jsxs)(n.p,{children:["For the most part, tools use ",(0,t.jsx)(n.a,{href:"http://semver.org/",children:"semver"})," (semantic versions) for their releases,\nbut every so often you run into a tool that uses another format, ",(0,t.jsx)(n.a,{href:"https://calver.org/",children:"calver"}),"\n(calendar versions). Some examples of calver are ",(0,t.jsx)(n.code,{children:"2024-02"}),", ",(0,t.jsx)(n.code,{children:"2024-10-23"}),", and ",(0,t.jsx)(n.code,{children:"2024-12-9.123"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Calendar based versions were not supported previously as the syntax between semver and calver are\ndifferent enough that they could not be parsed successfully. Well no longer, as we spent the time\nwriting our own custom parser to differentiate between the 2 formats. This process is quite\ncomplicated, and has many restrictions and caveats, so we took the time to document it under the\nname ",(0,t.jsx)(n.a,{href:"/docs/proto/version-spec",children:"version specification"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The biggest difference between semver and calver syntax, is that semver is dot-separated, while\ncalver is dash-separated. The day part (patch) is also optional in calver."}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"We wrote a ton of tests to cover all the formats and edge cases we could think of, but if you run\ninto a tool that fails to parse versions correctly, please report an issue immediately! All of our\nbuilt-in tools have been tested against."})}),"\n",(0,t.jsxs)(n.h2,{id:"new-proto-diagnose-command",children:["New ",(0,t.jsx)(n.code,{children:"proto diagnose"})," command"]}),"\n",(0,t.jsxs)(n.p,{children:["A common issue within the community that we've seen is commands not being available after installing\na tool. Most of the time, this is caused by certain proto paths not existing within ",(0,t.jsx)(n.code,{children:"PATH"}),". To help\nremedy these issues moving forward, we're introducing a new command,\n",(0,t.jsx)(n.a,{href:"/docs/proto/commands/diagnose",children:(0,t.jsx)(n.code,{children:"proto diagnose"})})," (or ",(0,t.jsx)(n.code,{children:"doctor"}),") that will attempt to find all issues\nwith your proto installation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'$ proto diagnose\n\nShell: zsh\nShell profile: ~/.zshrc\n\nErrors\n  Issue: Bin directory (~/.proto/bin) was found BEFORE the shims directory (~/.proto/shims) on PATH\n  Resolution: Ensure the shims path comes before the bin path in your shell\n\nWarnings\n  Issue: Missing PROTO_HOME environment variable (Will default to ~/.proto if not defined)\n  Resolution: Export PROTO_HOME="$HOME/.proto" from your shell\n'})}),"\n",(0,t.jsx)(n.p,{children:"In the future, we'll expand on this command by also bubbling up issues from your installed tools."}),"\n",(0,t.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(n.p,{children:["View the ",(0,t.jsx)(n.a,{href:"https://github.com/moonrepo/proto/releases/tag/v0.37.0",children:"official release"})," for a full list\nof changes."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Improved command execution. May see some slight performance gains."}),"\n",(0,t.jsx)(n.li,{children:"Updated wasmtime to v21 (from v17)."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},71670:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>i});var t=o(27378);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);