"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[383],{766:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=n(4848),r=n(8453);const i={},s="Monitor Core Setup",c={id:"core-setup",title:"Monitor Core Setup",description:"To run Monitor Core, you will need Docker. See the docker install docs.",source:"@site/docs/core-setup.md",sourceDirName:".",slug:"/core-setup",permalink:"/docs/core-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/core-setup.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Resources",permalink:"/docs/resources"},next:{title:"Connecting Servers",permalink:"/docs/connecting-servers"}},l={},a=[{value:"Deploy Monitor Core with Docker Compose",id:"deploy-monitor-core-with-docker-compose",level:3},{value:"Configuration",id:"configuration",level:3},{value:"First login",id:"first-login",level:3},{value:"Tls",id:"tls",level:3},{value:"Deploy with Docker cli",id:"deploy-with-docker-cli",level:2},{value:"1. Start Mongo",id:"1-start-mongo",level:3},{value:"2. Start Monitor core",id:"2-start-monitor-core",level:3}];function d(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"monitor-core-setup",children:"Monitor Core Setup"}),"\n",(0,t.jsxs)(o.p,{children:["To run Monitor Core, you will need Docker. See ",(0,t.jsx)(o.a,{href:"https://docs.docker.com/engine/install/",children:"the docker install docs"}),"."]}),"\n",(0,t.jsxs)(o.admonition,{type:"info",children:[(0,t.jsxs)(o.p,{children:["Monitor Core itself can really only run remote builds.\nYou also have to ",(0,t.jsx)(o.a,{href:"/docs/connecting-servers",children:(0,t.jsx)(o.strong,{children:"install the Monitor Periphery agent"})})," on your hosts and connect them as ",(0,t.jsx)(o.strong,{children:"Servers"}),"\nin order to alert / deploy etc."]}),(0,t.jsxs)(o.p,{children:["You can currently and always will be able to ",(0,t.jsx)(o.strong,{children:"connect as many servers an you like"})," using the Periphery agent."]})]}),"\n",(0,t.jsx)(o.h3,{id:"deploy-monitor-core-with-docker-compose",children:"Deploy Monitor Core with Docker Compose"}),"\n",(0,t.jsxs)(o.p,{children:["There is an example compose file here: ",(0,t.jsx)(o.a,{href:"https://github.com/mbecker20/monitor/blob/main/config_example/core.compose.yaml",children:"https://github.com/mbecker20/monitor/blob/main/config_example/core.compose.yaml"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["Copy the contents to a ",(0,t.jsx)(o.code,{children:"compose.yaml"}),", and deploy it with ",(0,t.jsx)(o.code,{children:"docker compose up -d"}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(o.p,{children:"You can configure Monitor with environment variables, or using a config file."}),"\n",(0,t.jsxs)(o.p,{children:["The example config file in the Monitor repo documents all the configuration options, along with the corresponding environment variables.\nIt can be found here: ",(0,t.jsx)(o.a,{href:"https://github.com/mbecker20/monitor/blob/main/config_example/core.config.example.toml",children:"https://github.com/mbecker20/monitor/blob/main/config_example/core.config.example.toml"}),"."]}),"\n",(0,t.jsx)(o.p,{children:"Note that configuration passed in environment variables will take precedent over what is given in the file."}),"\n",(0,t.jsx)(o.admonition,{type:"note",children:(0,t.jsxs)(o.p,{children:["To enable OAuth2 login, you must create a client on the respective OAuth provider,\nfor example ",(0,t.jsx)(o.a,{href:"https://developers.google.com/identity/protocols/oauth2",children:"google"}),"\nor ",(0,t.jsx)(o.a,{href:"https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps",children:"github"}),".\nMonitor uses the ",(0,t.jsx)(o.code,{children:"web application"})," login flow.\nThe redirect uri is ",(0,t.jsx)(o.code,{children:"<base_url>/auth/google/callback"})," for google and ",(0,t.jsx)(o.code,{children:"<base_url>/auth/github/callback"})," for github."]})}),"\n",(0,t.jsx)(o.h3,{id:"first-login",children:"First login"}),"\n",(0,t.jsxs)(o.p,{children:["Core should now be accessible on the specified port, so navigating to ",(0,t.jsx)(o.code,{children:"http://<address>:<port>"})," will display the login page."]}),"\n",(0,t.jsx)(o.p,{children:"The first user to log in will be auto enabled and made an admin. Any additional users to create accounts will be disabled by default, and must be enabled by an admin."}),"\n",(0,t.jsx)(o.h3,{id:"tls",children:"Tls"}),"\n",(0,t.jsxs)(o.p,{children:["Core itself only supports http, so a reverse proxy like ",(0,t.jsx)(o.a,{href:"https://caddyserver.com/",children:"caddy"})," should be used for https."]}),"\n",(0,t.jsx)(o.h2,{id:"deploy-with-docker-cli",children:"Deploy with Docker cli"}),"\n",(0,t.jsx)(o.h3,{id:"1-start-mongo",children:"1. Start Mongo"}),"\n",(0,t.jsx)(o.p,{children:"Mongo can be run locally using the docker cli:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-sh",children:'docker run --name monitor-mongo \\\n\t--network host \\\n\t-v /local/storage/path:/data/db \\\n\t-e MONGO_INITDB_ROOT_USERNAME="admin" \\\n\t-e MONGO_INITDB_ROOT_PASSWORD="admin" \\\n\tmongo:latest\n'})}),"\n",(0,t.jsxs)(o.p,{children:["You should replace the username and password with your own.\nSee ",(0,t.jsx)(o.a,{href:"https://hub.docker.com/_/mongo",children:"the image docs"})," for more details."]}),"\n",(0,t.jsxs)(o.p,{children:['Note that this uses "host" networking, which will allow core to connect over localhost.\nMany users will prefer the default "bridge" network, and to use port mapping with ',(0,t.jsx)(o.code,{children:"-p 27017:27017"}),"."]}),"\n",(0,t.jsx)(o.admonition,{type:"note",children:(0,t.jsxs)(o.p,{children:["The disk space requirements of Monitor are dominated by the storage of system stats.\nThis depends on the number of connected servers (more system stats being produces / stored), stats collection frequency, and your stats pruning configuration.\nIf you need to save on space, you can configure these fields in your core config: - Stats poll frequency can be reduced using, for example, ",(0,t.jsx)(o.code,{children:'monitoring_interval = "15-sec"'})," - Pruning can be tuned more aggresively using, for example, ",(0,t.jsx)(o.code,{children:"keep_stats_for_days = 7"}),"."]})}),"\n",(0,t.jsx)(o.h3,{id:"2-start-monitor-core",children:"2. Start Monitor core"}),"\n",(0,t.jsxs)(o.p,{children:["Monitor core is distributed via Github Container Registry under the package ",(0,t.jsx)(o.a,{href:"https://github.com/mbecker20/monitor/pkgs/container/monitor",children:"mbecker20/monitor"}),"."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-sh",children:"docker run -d --name monitor-core \\\n\t--network host \\\n\t-v $HOME/.monitor/core.config.toml:/config/config.toml \\\n\tghcr.io/mbecker20/monitor:latest\n"})}),"\n",(0,t.jsxs)(o.p,{children:['Note that this uses "host" networking, which will allow it to connect to a local periphery agent on localhost.\nMany users will prefer the default "bridge" network, and to use port mapping with ',(0,t.jsx)(o.code,{children:"-p 9120:9120"}),"."]})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>c});var t=n(6540);const r={},i=t.createContext(r);function s(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);