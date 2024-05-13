"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[247],{6470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(4848),o=n(8453);const a={},r="container management",s={id:"deploy-containers/lifetime-management",title:"container management",description:"the lifetime of a docker container is more like a virtual machine. They can be created, started, stopped, and destroyed. monitor will display the state of the container and provides an API to manage all your container's lifetimes.",source:"@site/docs/deploy-containers/lifetime-management.md",sourceDirName:"deploy-containers",slug:"/deploy-containers/lifetime-management",permalink:"/docs/deploy-containers/lifetime-management",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/deploy-containers/lifetime-management.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"configuration",permalink:"/docs/deploy-containers/configuration"},next:{title:"permissioning resources",permalink:"/docs/permissioning"}},c={},l=[{value:"stopping a container",id:"stopping-a-container",level:3},{value:"container redeploy",id:"container-redeploy",level:3}];function d(e){const t={em:"em",h1:"h1",h3:"h3",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"container-management",children:"container management"}),"\n",(0,i.jsx)(t.p,{children:"the lifetime of a docker container is more like a virtual machine. They can be created, started, stopped, and destroyed. monitor will display the state of the container and provides an API to manage all your container's lifetimes."}),"\n",(0,i.jsx)(t.p,{children:"this is achieved internally by running the appropriate docker command for the requested action (docker stop, docker start, etc)."}),"\n",(0,i.jsx)(t.h3,{id:"stopping-a-container",children:"stopping a container"}),"\n",(0,i.jsxs)(t.p,{children:["sometimes you want to stop a running application but preserve its logs and configuration, either to be restarted later or to view the logs at a later time. It is more like ",(0,i.jsx)(t.em,{children:"pausing"})," the application with its current config, as no configuration (like environment variable, volume mounts, etc.) will be changed when the container is started again."]}),"\n",(0,i.jsxs)(t.p,{children:["note that in order to restart an application with updated configuration, it must be ",(0,i.jsx)(t.em,{children:"redeployed"}),". stopping and starting a container again will keep all configuration as it was when the container was initially created."]}),"\n",(0,i.jsx)(t.h3,{id:"container-redeploy",children:"container redeploy"}),"\n",(0,i.jsx)(t.p,{children:"redeploying is the action of destroying a container and recreating it. If you update deployment config, these changes will not take effect until the container is redeployed. Just note this will destroy the previous containers logs along with the container itself."})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(6540);const o={},a=i.createContext(o);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);