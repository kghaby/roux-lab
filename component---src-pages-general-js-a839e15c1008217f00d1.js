"use strict";(self.webpackChunkroux_lab=self.webpackChunkroux_lab||[]).push([[862],{2870:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(1883),c=a(7896);var r=(0,n.forwardRef)(((e,t)=>{let{className:a}=e;const r=(0,c.useLocation)();return console.log(r),n.createElement("nav",{className:a,ref:t},n.createElement("ul",{className:"nav-list"},n.createElement("li",{className:"/"===r.pathname?"active-link":""},n.createElement(l.Link,{to:"/"},n.createElement("span",{className:"text-content"},"Home"))),n.createElement("li",{className:"/members/"===r.pathname?"active-link":""},n.createElement(l.Link,{to:"/members"},n.createElement("span",{className:"text-content"},"Members"))),n.createElement("li",{className:"/research/"===r.pathname?"active-link":""},n.createElement(l.Link,{to:"/research"},n.createElement("span",{className:"text-content"},"Research"))),n.createElement("li",{className:"/methods/"===r.pathname?"active-link":""},n.createElement(l.Link,{to:"/methods"},n.createElement("span",{className:"text-content"},"Methods"))),n.createElement("li",{className:"/publications/"===r.pathname?"active-link":""},n.createElement(l.Link,{to:"/publications"},n.createElement("span",{className:"text-content"},"Publications"))),n.createElement("li",{className:"/openings/"===r.pathname?"active-link":""},n.createElement(l.Link,{to:"/openings"},n.createElement("span",{className:"text-content"},"Openings"))),n.createElement("li",{className:"/gallery/"===r.pathname?"active-link":""},n.createElement(l.Link,{to:"/gallery"},n.createElement("span",{className:"text-content"},"Gallery"))),n.createElement("li",{className:"/tools/"===r.pathname?"active-link":""},n.createElement(l.Link,{to:"/tools"},n.createElement("span",{className:"text-content"},"Tools"))),n.createElement("li",{className:"/useful-links/"===r.pathname?"active-link":""},n.createElement(l.Link,{to:"/useful-links"},n.createElement("span",{className:"text-content"},"Useful Links"))),n.createElement("li",{className:"/contacts/"===r.pathname?"active-link":""},n.createElement(l.Link,{to:"/contacts"},n.createElement("span",{className:"text-content"},"Contacts")))))}));var s=e=>{let{siteTitle:t}=e;const{0:a,1:c}=(0,n.useState)(!1),{0:s,1:i}=(0,n.useState)(!1),o=(0,n.useRef)(null);(0,n.useEffect)((()=>{const e=()=>{const e=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--max-navheader-width"));i(window.innerWidth<=e*parseFloat(getComputedStyle(document.documentElement).fontSize))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const m=()=>{var e,t;window.scrollY>50?null===(e=o.current)||void 0===e||e.classList.add("scrolled"):null===(t=o.current)||void 0===t||t.classList.remove("scrolled")};return(0,n.useEffect)((()=>(window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m))),[]),n.createElement(n.Fragment,null,n.createElement("header",{className:"header",ref:o},n.createElement("div",{className:"container"},n.createElement("div",{className:"logo"},n.createElement(l.Link,{to:"/",className:"site-title"},t)),s?n.createElement("div",{className:"menu-toggle",onClick:()=>c(!a),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||c(!a)},role:"button",tabIndex:0,"aria-label":"Toggle menu","aria-expanded":a},a?">":"<"):n.createElement(r,{className:"nav-header"}))),s&&n.createElement(r,{className:"nav-side "+(a?"open":"")}))};var i=e=>{var t;let{children:a}=e;const c=(0,l.useStaticQuery)("3649515864");return(0,n.useEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")}))}));return document.querySelectorAll(".hidden").forEach((t=>e.observe(t))),()=>{e.disconnect()}}),[]),n.createElement("div",{className:"siteWrapper"},n.createElement(s,{siteTitle:(null===(t=c.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),n.createElement("main",{className:"mainContent"},a),n.createElement("footer",{className:"footer"},n.createElement("p",null,"© ",(new Date).getFullYear()," Roux Lab | University of Chicago")))}},9357:function(e,t,a){var n=a(7294),l=a(1883);t.Z=function(e){var t,a;let{description:c,title:r,children:s}=e;const{site:i}=(0,l.useStaticQuery)("63159454"),o=c||i.siteMetadata.description,m=null===(t=i.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,m?`${r} | ${m}`:r),n.createElement("meta",{name:"description",content:o}),n.createElement("meta",{property:"og:title",content:r}),n.createElement("meta",{property:"og:description",content:o}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=i.siteMetadata)||void 0===a?void 0:a.author)||""}),n.createElement("meta",{name:"twitter:title",content:r}),n.createElement("meta",{name:"twitter:description",content:o}),s)}},1638:function(e,t,a){a.r(t),a.d(t,{Head:function(){return s}});var n=a(7294),l=a(2870),c=a(9357),r=a(7083);const s=()=>n.createElement(c.Z,{title:"Research"});t.default=()=>n.createElement(l.Z,null,n.createElement("div",{className:r.x7}))},7083:function(e,t,a){a.d(t,{U0:function(){return r},me:function(){return c},x7:function(){return n},y1:function(){return l}});var n="research-module--researchPage--f3029",l="research-module--researchSection--472d6",c="research-module--sectionImage--8f54a",r="research-module--sectionInfo--92907"}}]);
//# sourceMappingURL=component---src-pages-general-js-a839e15c1008217f00d1.js.map