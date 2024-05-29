"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[912],{8456:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=i(4848),t=i(8453);const s={},o="Setup Monitor Periphery",c={id:"connecting-servers/setup-periphery",title:"Setup Monitor Periphery",description:"The easiest way to setup periphery is to use the setup script:",source:"@site/docs/connecting-servers/setup-periphery.md",sourceDirName:"connecting-servers",slug:"/connecting-servers/setup-periphery",permalink:"/docs/connecting-servers/setup-periphery",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/connecting-servers/setup-periphery.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Connecting Servers",permalink:"/docs/connecting-servers"},next:{title:"Adding Servers to Monitor",permalink:"/docs/connecting-servers/add-server"}},l={},a=[{value:"Manual install steps",id:"manual-install-steps",level:3},{value:"Example periphery start command",id:"example-periphery-start-command",level:3},{value:"Passing config files",id:"passing-config-files",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"setup-monitor-periphery",children:"Setup Monitor Periphery"}),"\n",(0,r.jsx)(n.p,{children:"The easiest way to setup periphery is to use the setup script:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"curl -sSL https://raw.githubusercontent.com/mbecker20/monitor/main/scripts/setup-periphery.py | python3\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can find more information (and view the script) in the ",(0,r.jsx)(n.a,{href:"https://github.com/mbecker20/monitor/tree/main/scripts",children:"readme"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"manual-install-steps",children:"Manual install steps"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Download the periphery binary from the latest ",(0,r.jsx)(n.a,{href:"https://github.com/mbecker20/monitor/releases",children:"release"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create and edit your config files, following the ",(0,r.jsx)(n.a,{href:"https://github.com/mbecker20/monitor/blob/main/config_example/periphery.config.example.toml",children:"config example"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"https://docs.rs/monitor_client/latest/monitor_client/entities/config/periphery/index.html",children:"periphery config docs"}),"\nfor more information on configuring periphery."]})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Ensure that inbound connectivity is allowed on the port specified in periphery.config.toml (default 8120)."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Install docker. See the ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"docker install docs"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Ensure that the user which periphery is run as has access to the docker group without sudo."})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsx)(n.li,{children:"Start the periphery binary with your preferred process manager, like systemd."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"example-periphery-start-command",children:"Example periphery start command"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"periphery \\\n\t--config-path /path/to/periphery.config.base.toml \\\n\t--config-path /other_path/to/overide-periphery-config-directory \\\n\t--config-keyword periphery \\\n\t--config-keyword config \\\n\t--merge-nested-config true\n"})}),"\n",(0,r.jsx)(n.h3,{id:"passing-config-files",children:"Passing config files"}),"\n",(0,r.jsxs)(n.p,{children:["Either file paths or directory paths can be passed to ",(0,r.jsx)(n.code,{children:"--config-path"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["When using directories, the file entries can be filtered by name with the ",(0,r.jsx)(n.code,{children:"--config-keyword"})," argument, which can be passed multiple times to add more keywords. If passed, then only config files with file names that contain all keywords will be merged."]}),"\n",(0,r.jsxs)(n.p,{children:["When passing multiple config files, later --config-path given in the command will always overide previous ones. Directory config files are merged in alphabetical order by name, so ",(0,r.jsx)(n.code,{children:"config_b.toml"})," will overide ",(0,r.jsx)(n.code,{children:"config_a.toml"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["There are two ways to merge config files. The default behavior is to completely replace any base fields with whatever fields are present in the overide config. So if you pass ",(0,r.jsx)(n.code,{children:"allowed_ips = []"})," in your overide config, the final allowed_ips will be an empty list as well."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"--merge-nested-config true"})," will merge config fields recursively and extend config array fields."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, with ",(0,r.jsx)(n.code,{children:"--merge-nested-config true"})," you can specify an allowed ip in the base config, and another in the overide config, they will both be present in the final config."]}),"\n",(0,r.jsx)(n.p,{children:"Similarly, you can specify a base docker / github account pair, and extend them with additional accounts in the overide config."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var r=i(6540);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);