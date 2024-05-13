"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[848],{7662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(4848),i=n(8453),s=n(5871);const o={slug:"/build-images"},c="building images",l={id:"build-images/index",title:"building images",description:"Monitor builds docker images by cloning the source repository from Github, running docker build,",source:"@site/docs/build-images/index.mdx",sourceDirName:"build-images",slug:"/build-images",permalink:"/docs/build-images",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/build-images/index.mdx",tags:[],version:"current",frontMatter:{slug:"/build-images"},sidebar:"docs",previous:{title:"adding servers to monitor",permalink:"/docs/connecting-servers/add-server"},next:{title:"configuration",permalink:"/docs/build-images/configuration"}},a={},u=[];function d(e){const t={a:"a",code:"code",h1:"h1",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"building-images",children:"building images"}),"\n",(0,r.jsxs)(t.p,{children:["Monitor builds docker images by cloning the source repository from Github, running ",(0,r.jsx)(t.code,{children:"docker build"}),",\nand pushing the resulting image to docker hub. Any repo containing a ",(0,r.jsx)(t.code,{children:"Dockerfile"})," is buildable using this method."]}),"\n",(0,r.jsxs)(t.p,{children:["Build configuration involves passing file / directory paths,\nfor more details about passing file paths, see the ",(0,r.jsx)(t.a,{href:"/docs/file-paths",children:"file paths doc"}),"."]}),"\n","\n",(0,r.jsx)(s.A,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5871:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(6540),i=n(4164),s=n(1754),o=n(8774),c=n(4586);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,c.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function m(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),s=n.pluralForms.indexOf(i);return r[Math.min(s,r.length-1)]}(n,t,e)}}var h=n(6654),g=n(1312),p=n(1107);const f={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(4848);function b(e){let{href:t,children:n}=e;return(0,x.jsx)(o.A,{href:t,className:(0,i.A)("card padding--lg",f.cardContainer),children:n})}function j(e){let{href:t,icon:n,title:r,description:s}=e;return(0,x.jsxs)(b,{href:t,children:[(0,x.jsxs)(p.A,{as:"h2",className:(0,i.A)("text--truncate",f.cardTitle),title:r,children:[n," ",r]}),s&&(0,x.jsx)("p",{className:(0,i.A)("text--truncate",f.cardDescription),title:s,children:s})]})}function k(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=m();return t=>e(t,(0,g.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,x.jsx)(j,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function y(e){let{item:t}=e;const n=(0,h.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,x.jsx)(j,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(y,{item:t});case"category":return(0,x.jsx)(k,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function w(e){let{className:t}=e;const n=(0,s.$S)();return(0,x.jsx)(A,{items:n.items,className:t})}function A(e){const{items:t,className:n}=e;if(!t)return(0,x.jsx)(w,{...e});const r=(0,s.d1)(t);return(0,x.jsx)("section",{className:(0,i.A)("row",n),children:r.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(v,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(6540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);