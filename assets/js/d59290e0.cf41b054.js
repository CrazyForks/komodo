"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[383],{7683:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=n(4848),i=n(8453);const r={},s="Core Setup",c={id:"core-setup",title:"Core Setup",description:"To run Monitor Core, you will need:",source:"@site/docs/core-setup.md",sourceDirName:".",slug:"/core-setup",permalink:"/docs/core-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/core-setup.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"What is Monitor?",permalink:"/docs/intro"},next:{title:"Connecting Servers",permalink:"/docs/connecting-servers"}},l={},a=[{value:"1. Create the configuration file",id:"1-create-the-configuration-file",level:2},{value:"2. Start monitor core",id:"2-start-monitor-core",level:2},{value:"First login",id:"first-login",level:2},{value:"Tls",id:"tls",level:2}];function d(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"core-setup",children:"Core Setup"}),"\n",(0,t.jsx)(o.p,{children:"To run Monitor Core, you will need:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"A valid configuration file."}),"\n",(0,t.jsx)(o.li,{children:"An instance of MongoDB to which Core can connect."}),"\n",(0,t.jsx)(o.li,{children:"Docker must be installed on the host."}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"1-create-the-configuration-file",children:"1. Create the configuration file"}),"\n",(0,t.jsxs)(o.p,{children:["Create a configuration file on the system, for example at ",(0,t.jsx)(o.code,{children:"~/.config/monitor/core.config.toml"}),", and copy the ",(0,t.jsx)(o.a,{href:"https://github.com/mbecker20/monitor/blob/main/config_example/core.config.example.toml",children:"example config"}),". Fill in all the necessary information before continuing."]}),"\n",(0,t.jsx)(o.admonition,{type:"note",children:(0,t.jsxs)(o.p,{children:["To enable OAuth2 login, you must create a client on the respective OAuth provider,\nfor example ",(0,t.jsx)(o.a,{href:"https://developers.google.com/identity/protocols/oauth2",children:"google"}),"\nor ",(0,t.jsx)(o.a,{href:"https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps",children:"github"}),".\nMonitor uses the ",(0,t.jsx)(o.code,{children:"web application"})," login flow.\nThe redirect uri is ",(0,t.jsx)(o.code,{children:"<base_url>/auth/google/callback"})," for google and ",(0,t.jsx)(o.code,{children:"<base_url>/auth/github/callback"})," for github."]})}),"\n",(0,t.jsx)(o.admonition,{type:"note",children:(0,t.jsxs)(o.p,{children:["Most configuration can additionally be passed using environment variables, which override the value in the config file.\nSee ",(0,t.jsx)(o.a,{href:"https://docs.rs/monitor_client/latest/monitor_client/entities/config/core/index.html",children:"config docs"}),"."]})}),"\n",(0,t.jsx)(o.h2,{id:"2-start-monitor-core",children:"2. Start monitor core"}),"\n",(0,t.jsxs)(o.p,{children:["Monitor core is distributed via dockerhub under the public repo ",(0,t.jsx)(o.a,{href:"https://hub.docker.com/r/mbecker2020/monitor_core",children:"mbecker2020/monitor_core"}),"."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-sh",children:"docker run -d --name monitor-core \\\n\t-v $HOME/.monitor/core.config.toml:/config/config.toml \\\n\t-p 9000:9000 \\\n\tmbecker2020/monitor_core\n"})}),"\n",(0,t.jsx)(o.h2,{id:"first-login",children:"First login"}),"\n",(0,t.jsxs)(o.p,{children:["Core should now be accessible on the specified port, so navigating to ",(0,t.jsx)(o.code,{children:"http://<address>:<port>"})," will display the login page."]}),"\n",(0,t.jsx)(o.p,{children:"The first user to log in will be auto enabled and made admin. any additional users to create accounts will be disabled by default."}),"\n",(0,t.jsx)(o.h2,{id:"tls",children:"Tls"}),"\n",(0,t.jsxs)(o.p,{children:["Core itself only supports http, so a reverse proxy like ",(0,t.jsx)(o.a,{href:"https://caddyserver.com/",children:"caddy"})," should be used for https."]})]})}function h(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>c});var t=n(6540);const i={},r=t.createContext(i);function s(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);