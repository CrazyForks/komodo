"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[636],{2612:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=s(4848),t=s(8453);const i={},r="Docker Compose",c={id:"docker-compose",title:"Docker Compose",description:"Komodo can deploy docker compose projects through the Stack resource.",source:"@site/docs/docker-compose.md",sourceDirName:".",slug:"/docker-compose",permalink:"/docs/docker-compose",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docker-compose.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Container Management",permalink:"/docs/deploy-containers/lifetime-management"},next:{title:"Sync Resources",permalink:"/docs/sync-resources"}},a={},l=[{value:"Define the compose file/s",id:"define-the-compose-files",level:2},{value:"Importing Existing Compose projects",id:"importing-existing-compose-projects",level:2},{value:"Pass Environment Variables",id:"pass-environment-variables",level:2},{value:"Using bind mounts",id:"using-bind-mounts",level:2}];function d(e){const o={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"docker-compose",children:"Docker Compose"})}),"\n",(0,n.jsxs)(o.p,{children:["Komodo can deploy docker compose projects through the ",(0,n.jsx)(o.code,{children:"Stack"})," resource."]}),"\n",(0,n.jsx)(o.h2,{id:"define-the-compose-files",children:"Define the compose file/s"}),"\n",(0,n.jsx)(o.p,{children:"Komodo supports 3 ways of defining the compose files:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Write them in the UI"}),", and Komodo will write them to your host at deploy-time."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Store them in a git repo"}),", and have Komodo clone it on the host to deploy."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Store the files anywhere on the host"}),", and Komodo will just run the compose commands on the existing files."]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"The recommended way to deploy Stacks is using compose files located in a git repo."}),"\n",(0,n.jsx)(o.p,{children:"If you manage your compose files in git repos:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"All your files, across all servers, are available locally to edit in your favorite text editor."}),"\n",(0,n.jsx)(o.li,{children:"All of your changes are tracked, and can be reverted."}),"\n",(0,n.jsxs)(o.li,{children:["You can use the git webhooks to do other automations when you change the compose file contents. Redeploying will be as easy as just ",(0,n.jsx)(o.code,{children:"git push"}),"."]}),"\n"]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsx)(o.p,{children:"Many Komodo resources need access to git repos. There is an in-built token management system (managed in UI or in config file) to give resources access to credentials.\nAll resources which depend on git repos are able to use these credentials to access private repos."})}),"\n",(0,n.jsx)(o.h2,{id:"importing-existing-compose-projects",children:"Importing Existing Compose projects"}),"\n",(0,n.jsx)(o.p,{children:"First create the Stack in Komodo, and ensure it has access to the compose files using one\nof the three methods above. Make sure to attach the server you wish to deploy on."}),"\n",(0,n.jsxs)(o.p,{children:['In order for Komodo to pick up a running project, it has to know the compose "project name".\nYou can find the project name by running ',(0,n.jsx)(o.code,{children:"docker compose ls"})," on the host."]}),"\n",(0,n.jsx)(o.p,{children:'By default, Komodo will assume the Stack name is the compose project name.\nIf this is different than the project name on the host, you can configure a custom "Project Name" in the config.'}),"\n",(0,n.jsx)(o.h2,{id:"pass-environment-variables",children:"Pass Environment Variables"}),"\n",(0,n.jsx)(o.p,{children:"Komodo is able to pass custom environment variables to the docker compose process.\nThis works by:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsx)(o.li,{children:'Write the variables to a ".env" file on the host at deploy-time.'}),"\n",(0,n.jsxs)(o.li,{children:["Pass the file to docker compose using the ",(0,n.jsx)(o.code,{children:"--env-file"})," flag."]}),"\n"]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["Just like all other resources with Environments (Deployments, Repos, Builds),\nStack Environments support ",(0,n.jsx)(o.strong,{children:"Variable and Secret interpolation"}),". Define global variables\nin the UI and share the values across environments."]})}),"\n",(0,n.jsx)(o.h2,{id:"using-bind-mounts",children:"Using bind mounts"}),"\n",(0,n.jsxs)(o.p,{children:["Repo-based stacks must delete the stack folder before it is able to reclone for the latest repo contents.\nBecause of this, users should ",(0,n.jsx)(o.strong,{children:"avoid using relative file paths that are placed inside the repo directory"}),".\nOr better yet, make things simple and use ",(0,n.jsx)(o.strong,{children:"absolute file paths"})," or ",(0,n.jsx)(o.strong,{children:"docker volumes"})," instead."]})]})}function h(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,o,s)=>{s.d(o,{R:()=>r,x:()=>c});var n=s(6540);const t={},i=n.createContext(t);function r(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);