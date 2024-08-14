"use strict";(self.webpackChunkroux_lab=self.webpackChunkroux_lab||[]).push([[970],{8619:function(e,t,n){n.r(t),n.d(t,{Head:function(){return s}});var a=n(7294),l=n(1883),c=n(2870),r=n(9357);const s=()=>a.createElement(r.Z,{title:"Using TypeScript"});t.default=e=>{let{data:t,location:n}=e;return a.createElement(c.Z,null,a.createElement("h1",null,"Gatsby supports ",a.createElement("b",null,"TypeScript by default")),a.createElement("p",null,"This means that you can create and write ",a.createElement("code",null,".ts/.tsx")," files for your pages, components, and ",a.createElement("code",null,"gatsby-*")," configuration files (for example ",a.createElement("code",null,"gatsby-config.ts"),")."),a.createElement("p",null,"For type checking you'll want to install ",a.createElement("code",null,"typescript")," via npm and run ",a.createElement("code",null,"tsc --init")," to create a ",a.createElement("code",null,"tsconfig")," file."),a.createElement("p",null,"You're currently on the page ",a.createElement("code",null,n.pathname)," which was built on ",t.site.buildTime,"."),a.createElement("p",null,"To learn more, head over to our"," ",a.createElement("a",{href:"https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/"},"documentation about TypeScript"),"."),a.createElement(l.Link,{to:"/"},"Go back to the homepage"))}},2870:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),l=n(1883),c=n(7896);var r=(0,a.forwardRef)(((e,t)=>{let{className:n}=e;const r=(0,c.useLocation)();return a.createElement("nav",{className:n,ref:t},a.createElement("ul",{className:"nav-list"},a.createElement("li",{className:"/"===r.pathname?"active-link":""},a.createElement(l.Link,{to:"/"},a.createElement("span",{className:"text-content"},"Home"))),a.createElement("li",{className:"/members/"===r.pathname?"active-link":""},a.createElement(l.Link,{to:"/members"},a.createElement("span",{className:"text-content"},"Members"))),a.createElement("li",{className:"/research/"===r.pathname?"active-link":""},a.createElement(l.Link,{to:"/research"},a.createElement("span",{className:"text-content"},"Research"))),a.createElement("li",{className:"/methods/"===r.pathname?"active-link":""},a.createElement(l.Link,{to:"/methods"},a.createElement("span",{className:"text-content"},"Methods"))),a.createElement("li",{className:"/publications/"===r.pathname?"active-link":""},a.createElement(l.Link,{to:"/publications"},a.createElement("span",{className:"text-content"},"Publications"))),a.createElement("li",{className:"/openings/"===r.pathname?"active-link":""},a.createElement(l.Link,{to:"/openings"},a.createElement("span",{className:"text-content"},"Openings"))),a.createElement("li",{className:"/gallery/"===r.pathname?"active-link":""},a.createElement(l.Link,{to:"/gallery"},a.createElement("span",{className:"text-content"},"Gallery"))),a.createElement("li",{className:"/tools/"===r.pathname?"active-link":""},a.createElement(l.Link,{to:"/tools"},a.createElement("span",{className:"text-content"},"Tools"))),a.createElement("li",{className:"/useful-links/"===r.pathname?"active-link":""},a.createElement(l.Link,{to:"/useful-links"},a.createElement("span",{className:"text-content"},"Useful Links"))),a.createElement("li",{className:"/contacts/"===r.pathname?"active-link":""},a.createElement(l.Link,{to:"/contacts"},a.createElement("span",{className:"text-content"},"Contacts")))))}));var s=e=>{let{siteTitle:t}=e;const{0:n,1:c}=(0,a.useState)(!1),{0:s,1:o}=(0,a.useState)(!1),i=(0,a.useRef)(null);(0,a.useEffect)((()=>{const e=()=>{const e=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--max-navheader-width"));o(window.innerWidth<=e*parseFloat(getComputedStyle(document.documentElement).fontSize))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const m=()=>{var e,t;window.scrollY>50?null===(e=i.current)||void 0===e||e.classList.add("scrolled"):null===(t=i.current)||void 0===t||t.classList.remove("scrolled")};return(0,a.useEffect)((()=>(window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m))),[]),a.createElement(a.Fragment,null,a.createElement("header",{className:"header",ref:i},a.createElement("div",{className:"container"},a.createElement("div",{className:"logo"},a.createElement(l.Link,{to:"/",className:"site-title"},t)),s?a.createElement("div",{className:"menu-toggle",onClick:()=>c(!n),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||c(!n)},role:"button",tabIndex:0,"aria-label":"Toggle menu","aria-expanded":n},n?">":"<"):a.createElement(r,{className:"nav-header"}))),s&&a.createElement(r,{className:"nav-side "+(n?"open":"")}))};var o=e=>{var t;let{children:n}=e;const c=(0,l.useStaticQuery)("3649515864");return(0,a.useEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")}))}));return document.querySelectorAll(".hidden").forEach((t=>e.observe(t))),()=>{e.disconnect()}}),[]),a.createElement("div",{className:"site-wrapper"},a.createElement(s,{siteTitle:(null===(t=c.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),a.createElement("main",{className:"main-content"},n),a.createElement("footer",{className:"footer"},a.createElement("p",null,"© ",(new Date).getFullYear()," Roux Lab | University of Chicago")))}},9357:function(e,t,n){var a=n(7294),l=n(1883);t.Z=function(e){var t,n;let{description:c,title:r,children:s}=e;const{site:o}=(0,l.useStaticQuery)("63159454"),i=c||o.siteMetadata.description,m=null===(t=o.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,m?`${r} | ${m}`:r),a.createElement("meta",{name:"description",content:i}),a.createElement("meta",{property:"og:title",content:r}),a.createElement("meta",{property:"og:description",content:i}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=o.siteMetadata)||void 0===n?void 0:n.author)||""}),a.createElement("meta",{name:"twitter:title",content:r}),a.createElement("meta",{name:"twitter:description",content:i}),s)}}}]);
//# sourceMappingURL=component---src-pages-using-typescript-tsx-63078050ec0704616ad8.js.map