"use strict";(self.webpackChunkroux_lab=self.webpackChunkroux_lab||[]).push([[970],{8619:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o}});var l=n(7294),a=n(1883),r=n(2870),c=n(9357);const o=()=>l.createElement(c.Z,{title:"Using TypeScript"});t.default=e=>{let{data:t,location:n}=e;return l.createElement(r.Z,null,l.createElement("h1",null,"Gatsby supports ",l.createElement("b",null,"TypeScript by default")),l.createElement("p",null,"This means that you can create and write ",l.createElement("code",null,".ts/.tsx")," files for your pages, components, and ",l.createElement("code",null,"gatsby-*")," configuration files (for example ",l.createElement("code",null,"gatsby-config.ts"),")."),l.createElement("p",null,"For type checking you'll want to install ",l.createElement("code",null,"typescript")," via npm and run ",l.createElement("code",null,"tsc --init")," to create a ",l.createElement("code",null,"tsconfig")," file."),l.createElement("p",null,"You're currently on the page ",l.createElement("code",null,n.pathname)," which was built on ",t.site.buildTime,"."),l.createElement("p",null,"To learn more, head over to our"," ",l.createElement("a",{href:"https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/"},"documentation about TypeScript"),"."),l.createElement(a.Link,{to:"/"},"Go back to the homepage"))}},2870:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(7294),a=n(1883),r=n(7896);var c=(0,l.forwardRef)(((e,t)=>{let{className:n}=e;return l.createElement("nav",{className:n,ref:t},l.createElement("ul",{className:"nav-list"},l.createElement("li",null,l.createElement(a.Link,{to:"/"},"Home")),l.createElement("li",null,l.createElement(a.Link,{to:"/members"},"Members")),l.createElement("li",null,l.createElement(a.Link,{to:"/research"},"Research")),l.createElement("li",null,l.createElement(a.Link,{to:"/methods"},"Methods")),l.createElement("li",null,l.createElement(a.Link,{to:"/publications"},"Publications")),l.createElement("li",null,l.createElement(a.Link,{to:"/openings"},"Openings")),l.createElement("li",null,l.createElement(a.Link,{to:"/gallery"},"Gallery")),l.createElement("li",null,l.createElement(a.Link,{to:"/tools"},"Tools")),l.createElement("li",null,l.createElement(a.Link,{to:"/useful-links"},"Useful Links")),l.createElement("li",null,l.createElement(a.Link,{to:"/contacts"},"Contacts"))))}));var o=e=>{let{siteTitle:t}=e;const{0:n,1:o}=(0,l.useState)(!1),{0:i,1:s}=(0,l.useState)(!1),m=(0,l.useRef)(null),u=((0,r.useLocation)(),()=>{window.scrollY>50?m.current.classList.add("scrolled"):m.current.classList.remove("scrolled")});return(0,l.useEffect)((()=>(window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u))),[]),l.createElement(l.Fragment,null,l.createElement("header",{className:"header",ref:m},l.createElement("div",{className:"container"},l.createElement("div",{className:"logo"},l.createElement(a.Link,{to:"/",className:"site-title"},t)),i?l.createElement("div",{className:"menu-toggle",onClick:()=>o(!n),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||o(!n)},role:"button",tabIndex:0,"aria-label":"Toggle menu","aria-expanded":n},n?">":"<"):l.createElement(c,{className:"nav-header"}))),i&&l.createElement(c,{className:"nav-side "+(n?"open":"")}))};var i=e=>{var t;let{children:n}=e;const r=(0,a.useStaticQuery)("3649515864");return(0,l.useEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")}))}));return document.querySelectorAll(".hidden").forEach((t=>e.observe(t))),()=>{e.disconnect()}}),[]),l.createElement("div",{className:"site-wrapper"},l.createElement(o,{siteTitle:(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),l.createElement("main",{className:"main-content"},n),l.createElement("footer",{className:"footer"},l.createElement("p",null,"© ",(new Date).getFullYear()," Roux Lab | University of Chicago")))}},9357:function(e,t,n){var l=n(7294),a=n(1883);t.Z=function(e){var t,n;let{description:r,title:c,children:o}=e;const{site:i}=(0,a.useStaticQuery)("63159454"),s=r||i.siteMetadata.description,m=null===(t=i.siteMetadata)||void 0===t?void 0:t.title;return l.createElement(l.Fragment,null,l.createElement("title",null,m?c+" | "+m:c),l.createElement("meta",{name:"description",content:s}),l.createElement("meta",{property:"og:title",content:c}),l.createElement("meta",{property:"og:description",content:s}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:creator",content:(null===(n=i.siteMetadata)||void 0===n?void 0:n.author)||""}),l.createElement("meta",{name:"twitter:title",content:c}),l.createElement("meta",{name:"twitter:description",content:s}),o)}}}]);
//# sourceMappingURL=component---src-pages-using-typescript-tsx-48f45cf07a64ee407d18.js.map