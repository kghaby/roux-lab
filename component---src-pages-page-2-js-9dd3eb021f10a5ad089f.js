"use strict";(self.webpackChunkroux_lab=self.webpackChunkroux_lab||[]).push([[617],{2870:function(e,t,n){n.d(t,{Z:function(){return o}});var l=n(7294),a=n(1883);var r=(0,l.forwardRef)(((e,t)=>{let{className:n}=e;return l.createElement("nav",{className:n,ref:t},l.createElement("ul",{className:"nav-list"},l.createElement("li",null,l.createElement(a.Link,{to:"/"},"Home")),l.createElement("li",null,l.createElement(a.Link,{to:"/members"},"Members")),l.createElement("li",null,l.createElement(a.Link,{to:"/research"},"Research")),l.createElement("li",null,l.createElement(a.Link,{to:"/methods"},"Methods")),l.createElement("li",null,l.createElement(a.Link,{to:"/publications"},"Publications")),l.createElement("li",null,l.createElement(a.Link,{to:"/openings"},"Openings")),l.createElement("li",null,l.createElement(a.Link,{to:"/gallery"},"Gallery")),l.createElement("li",null,l.createElement(a.Link,{to:"/tools"},"Tools")),l.createElement("li",null,l.createElement(a.Link,{to:"/useful-links"},"Useful Links")),l.createElement("li",null,l.createElement(a.Link,{to:"/contacts"},"Contacts"))))}));var c=e=>{let{siteTitle:t}=e;const{0:n,1:c}=(0,l.useState)(!1),{0:o,1:i}=(0,l.useState)(!1),s=(0,l.useRef)(null),m=()=>{window.scrollY>50?s.current.classList.add("scrolled"):s.current.classList.remove("scrolled")};(0,l.useEffect)((()=>(window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m))),[]),(0,l.useEffect)((()=>{const e=()=>{const e=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--max-navheader-width"));i(window.innerWidth<=e*parseFloat(getComputedStyle(document.documentElement).fontSize))};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]);return l.createElement(l.Fragment,null,l.createElement("header",{className:"header ",ref:s},l.createElement("div",{className:"container"},l.createElement("div",{className:"logo"},l.createElement(a.Link,{to:"/",className:"site-title"},t)),o?l.createElement("div",{className:"menu-toggle",onClick:()=>c(!n),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||c(!n)},role:"button",tabIndex:0,"aria-label":"Toggle menu","aria-expanded":n},n?">":"<"):l.createElement(r,{className:"nav-header"}))),o&&l.createElement(r,{className:"nav-side "+(n?"open":"")}))};var o=e=>{var t;let{children:n}=e;const r=(0,a.useStaticQuery)("3649515864");return(0,l.useEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")}))}));return document.querySelectorAll(".hidden").forEach((t=>e.observe(t))),()=>{e.disconnect()}}),[]),l.createElement("div",{className:"site-wrapper"},l.createElement(c,{siteTitle:(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),l.createElement("main",{className:"main-content"},n),l.createElement("footer",{className:"footer"},l.createElement("p",null,"© ",(new Date).getFullYear()," Roux Lab | University of Chicago")))}},9357:function(e,t,n){var l=n(7294),a=n(1883);t.Z=function(e){var t,n;let{description:r,title:c,children:o}=e;const{site:i}=(0,a.useStaticQuery)("63159454"),s=r||i.siteMetadata.description,m=null===(t=i.siteMetadata)||void 0===t?void 0:t.title;return l.createElement(l.Fragment,null,l.createElement("title",null,m?`${c} | ${m}`:c),l.createElement("meta",{name:"description",content:s}),l.createElement("meta",{property:"og:title",content:c}),l.createElement("meta",{property:"og:description",content:s}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:creator",content:(null===(n=i.siteMetadata)||void 0===n?void 0:n.author)||""}),l.createElement("meta",{name:"twitter:title",content:c}),l.createElement("meta",{name:"twitter:description",content:s}),o)}},4948:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o}});var l=n(7294),a=n(1883),r=n(2870),c=n(9357);const o=()=>l.createElement(c.Z,{title:"Page two"});t.default=()=>l.createElement(r.Z,null,l.createElement("h1",null,"Hi from the second page"),l.createElement("p",null,"Welcome to page 2"),l.createElement(a.Link,{to:"/"},"Go back to the homepage"))}}]);
//# sourceMappingURL=component---src-pages-page-2-js-9dd3eb021f10a5ad089f.js.map