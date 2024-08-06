"use strict";(self.webpackChunkroux_lab=self.webpackChunkroux_lab||[]).push([[476],{2870:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(1883);var l=(0,a.forwardRef)(((e,t)=>{let{className:n}=e;return a.createElement("nav",{className:n,ref:t},a.createElement("ul",{className:"nav-list"},a.createElement("li",null,a.createElement(r.Link,{to:"/"},"Home")),a.createElement("li",null,a.createElement(r.Link,{to:"/members"},"Members")),a.createElement("li",null,a.createElement(r.Link,{to:"/research"},"Research")),a.createElement("li",null,a.createElement(r.Link,{to:"/methods"},"Methods")),a.createElement("li",null,a.createElement(r.Link,{to:"/publications"},"Publications")),a.createElement("li",null,a.createElement(r.Link,{to:"/openings"},"Openings")),a.createElement("li",null,a.createElement(r.Link,{to:"/gallery"},"Gallery")),a.createElement("li",null,a.createElement(r.Link,{to:"/tools"},"Tools")),a.createElement("li",null,a.createElement(r.Link,{to:"/useful-links"},"Useful Links")),a.createElement("li",null,a.createElement(r.Link,{to:"/contacts"},"Contacts"))))}));var o=e=>{let{siteTitle:t}=e;const{0:n,1:o}=(0,a.useState)(!1),{0:i,1:c}=(0,a.useState)(!1),s=(0,a.useRef)(null),m=(0,a.useRef)(null),u=(0,a.useRef)(null);return(0,a.useEffect)((()=>{n&&i?(document.body.classList.add("menu-open"),u.current.querySelectorAll("a").forEach((e=>e.setAttribute("tabindex","0")))):(document.body.classList.remove("menu-open"),u.current&&u.current.querySelectorAll("a").forEach((e=>e.setAttribute("tabindex","-1"))))}),[n,i]),(0,a.useEffect)((()=>{const e=()=>{const e=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--max-navheader-width"));c(window.innerWidth<=e*parseFloat(getComputedStyle(document.documentElement).fontSize))};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]),a.createElement(a.Fragment,null,a.createElement("header",{className:"header",ref:s},a.createElement("div",{className:"container"},a.createElement("div",{className:"logo"},a.createElement(r.Link,{to:"/",className:"site-title"},t)),i?a.createElement("div",{className:"menu-toggle",onClick:()=>o(!n),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||o(!n)},role:"button",tabIndex:0,"aria-label":"Toggle menu","aria-expanded":n},n?">":"<"):a.createElement(l,{className:"nav-header",ref:m}))),i&&a.createElement(l,{className:"nav-side "+(n?"open":""),ref:u}))};var i=e=>{var t;let{children:n}=e;const l=(0,r.useStaticQuery)("3649515864");return a.createElement("div",{className:"site-wrapper"},a.createElement(o,{siteTitle:(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),a.createElement("main",{className:"main-content"},n),a.createElement("footer",{className:"footer"},a.createElement("p",null,"© ",(new Date).getFullYear()," Roux Lab | University of Chicago")))}},9357:function(e,t,n){var a=n(7294),r=n(1883);t.Z=function(e){var t,n;let{description:l,title:o,children:i}=e;const{site:c}=(0,r.useStaticQuery)("63159454"),s=l||c.siteMetadata.description,m=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,m?o+" | "+m:o),a.createElement("meta",{name:"description",content:s}),a.createElement("meta",{property:"og:title",content:o}),a.createElement("meta",{property:"og:description",content:s}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=c.siteMetadata)||void 0===n?void 0:n.author)||""}),a.createElement("meta",{name:"twitter:title",content:o}),a.createElement("meta",{name:"twitter:description",content:s}),i)}},9698:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i}});var a=n(7294),r=n(1883),l=n(2870),o=n(9357);const i=()=>a.createElement(o.Z,{title:"Using SSR"});t.default=e=>{let{serverData:t}=e;return a.createElement(l.Z,null,a.createElement("h1",null,"This page is ",a.createElement("b",null,"rendered server-side")),a.createElement("p",null,"This page is rendered server side every time the page is requested. Reload it to see a(nother) random photo from"," ",a.createElement("code",null,"dog.ceo/api/breed/shiba/images/random"),":"),a.createElement("img",{style:{width:"320px",borderRadius:"var(--border-radius)"},alt:"A random dog",src:t.message}),a.createElement("p",null,"To learn more, head over to our"," ",a.createElement("a",{href:"https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/"},"documentation about Server Side Rendering"),"."),a.createElement(r.Link,{to:"/"},"Go back to the homepage"))}}}]);
//# sourceMappingURL=component---src-pages-using-ssr-js-cd96752ee3c131875d9f.js.map