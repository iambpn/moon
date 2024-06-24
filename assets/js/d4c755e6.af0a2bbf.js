"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87387],{6951:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>t});var l=s(24246),i=s(71670);const o={title:"setup"},r=void 0,c={id:"proto/commands/setup",title:"setup",description:"The proto setup command will setup proto in your current shell by modifying an applicable profile",source:"@site/docs/proto/commands/setup.mdx",sourceDirName:"proto/commands",slug:"/proto/commands/setup",permalink:"/docs/proto/commands/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/commands/setup.mdx",tags:[],version:"current",frontMatter:{title:"setup"},sidebar:"proto",previous:{title:"run",permalink:"/docs/proto/commands/run"},next:{title:"status",permalink:"/docs/proto/commands/status"}},d={},t=[{value:"Windows support",id:"windows-support",level:3},{value:"Options",id:"options",level:3}];function h(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"proto setup"})," command will setup proto in your current shell by modifying an applicable profile\nfile and appending proto's bin directory to ",(0,l.jsx)(n.code,{children:"PATH"}),". If a shell could not be detected, you'll be\nprompted to select one."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ proto setup\n"})}),"\n",(0,l.jsx)(n.p,{children:"During setup, the following profiles will be searched or prompted for."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Bash","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"~/.bash_profile"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"~/.bashrc"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"~/.profile"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Elvish","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"~/.elvish/rc.elv"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"~/.config/elvish/rc.elv"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Fish","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"~/.config/fish/config.fish"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Ion","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"~/.config/ion/initrc"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Nu","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"~/.config/nushell/env.nu"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"~/.config/nushell/config.nu"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["PowerShell","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Windows","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"~\\Documents\\PowerShell\\Microsoft.PowerShell_profile.ps1"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"~\\Documents\\PowerShell\\Profile.ps1"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Unix","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"~/.config/powershell/Microsoft.PowerShell_profile.ps1"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"~/.config/powershell/profile.ps1"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Xonsh","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"~/.config/xonsh/rc.xsh"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"~/.xonshrc"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Zsh","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"~/.zprofile"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"~/.zshenv"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"~/.zshrc"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"windows-support",children:"Windows support"}),"\n",(0,l.jsxs)(n.p,{children:["In addition to updating a shell profile file (most likely PowerShell), we'll also modify the ",(0,l.jsx)(n.code,{children:"PATH"}),"\n(or ",(0,l.jsx)(n.code,{children:"Path"}),") system environment variable, by prepending the ",(0,l.jsx)(n.code,{children:"~/.proto/shims"})," and ",(0,l.jsx)(n.code,{children:"~/.proto/bin"}),"\npaths."]}),"\n",(0,l.jsxs)(n.p,{children:["If you would like to opt-out of this behavior, pass the ",(0,l.jsx)(n.code,{children:"--no-modify-path"})," flag."]}),"\n",(0,l.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"--shell"})," - Shell to explicitly setup for."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"--no-modify-profile"})," - Don't update a shell profile file."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"--no-modify-path"})," - Don't update the system ",(0,l.jsx)(n.code,{children:"PATH"})," environment variable (Windows only)."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"--yes"})," - Avoid interactive prompts and use defaults."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var l=s(27378);const i={},o=l.createContext(i);function r(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);