(self.webpackChunkroux_lab=self.webpackChunkroux_lab||[]).push([[883],{5928:function(e){e.exports={siteMetadata:{title:"Roux Lab",description:"Benoît Roux's research group at the University of Chicago.",author:"@kghaby",siteUrl:"https://kghaby.github.io/roux-lab/"},pathPrefix:"/roux-lab",plugins:["gatsby-plugin-image",{resolve:"gatsby-source-filesystem",options:{name:"images",path:"//src/images"}},"gatsby-transformer-sharp","gatsby-plugin-sharp","gatsby-plugin-typescript",{resolve:"gatsby-plugin-manifest",options:{name:"Roux Lab",short_name:"RL",start_url:"/",background_color:"#8b7e7e",theme_color:"#760000",display:"minimal-ui",icon:"src/images/protR_whitecircle.png"}}]}},5101:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var n=a(7294),s=a(1883),l=a(7896),r=a(5928);const c=a.n(r)().pathPrefix||"";var i=(0,n.forwardRef)(((e,t)=>{let{className:a}=e;const r=(0,l.useLocation)().pathname.replace(new RegExp(`^${c}`),""),i=e=>r.startsWith(e);return n.createElement("nav",{className:a,ref:t},n.createElement("ul",{className:"navList"},n.createElement("li",{className:"/"===r?"activeLink":""},n.createElement(s.Link,{to:"/"},n.createElement("span",{className:"textContent"},"Home"))),n.createElement("li",{className:i("/members/")?"activeLink":""},n.createElement(s.Link,{to:"/members"},n.createElement("span",{className:"textContent"},"Members"))),n.createElement("li",{className:i("/research/")?"activeLink":""},n.createElement(s.Link,{to:"/research"},n.createElement("span",{className:"textContent"},"Research"))),n.createElement("li",{className:i("/methods/")?"activeLink":""},n.createElement(s.Link,{to:"/methods"},n.createElement("span",{className:"textContent"},"Methods"))),n.createElement("li",{className:i("/publications/")?"activeLink":""},n.createElement(s.Link,{to:"/publications"},n.createElement("span",{className:"textContent"},"Publications"))),n.createElement("li",{className:i("/openings/")?"activeLink":""},n.createElement(s.Link,{to:"/openings"},n.createElement("span",{className:"textContent"},"Openings"))),n.createElement("li",{className:i("/gallery/")?"activeLink":""},n.createElement(s.Link,{to:"/gallery"},n.createElement("span",{className:"textContent"},"Gallery"))),n.createElement("li",{className:i("/tools/")?"activeLink":""},n.createElement(s.Link,{to:"/tools"},n.createElement("span",{className:"textContent"},"Tools"))),n.createElement("li",{className:i("/useful-links/")?"activeLink":""},n.createElement(s.Link,{to:"/useful-links"},n.createElement("span",{className:"textContent"},"Useful Links"))),n.createElement("li",{className:i("/contacts/")?"activeLink":""},n.createElement(s.Link,{to:"/contacts"},n.createElement("span",{className:"textContent"},"Contacts")))))}));var o=e=>{let{siteTitle:t}=e;const{0:a,1:l}=(0,n.useState)(!1),{0:r,1:c}=(0,n.useState)(!1),o=(0,n.useRef)(null);(0,n.useEffect)((()=>{const e=()=>{const e=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--max-navheader-width"));c(window.innerWidth<=e*parseFloat(getComputedStyle(document.documentElement).fontSize))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const m=()=>{var e,t;window.scrollY>50?null===(e=o.current)||void 0===e||e.classList.add("scrolled"):null===(t=o.current)||void 0===t||t.classList.remove("scrolled")};return(0,n.useEffect)((()=>(window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m))),[]),n.createElement(n.Fragment,null,n.createElement("header",{className:"header",ref:o},n.createElement("div",{className:"container"},n.createElement("div",{className:"logo"},n.createElement(s.Link,{to:"/",className:"siteTitle"},t)),r?n.createElement("div",{className:"menuToggle",onClick:()=>l(!a),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||l(!a)},role:"button",tabIndex:0,"aria-label":"Toggle menu","aria-expanded":a},a?">":"<"):n.createElement(i,{className:"navHeader"}))),r&&n.createElement(i,{className:"navSide "+(a?"open":"")}))};var m=e=>{var t;let{children:a}=e;const l=(0,s.useStaticQuery)("3649515864");return(0,n.useEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")}))}));return document.querySelectorAll(".hidden").forEach((t=>e.observe(t))),()=>{e.disconnect()}}),[]),n.createElement("div",{className:"siteWrapper"},n.createElement(o,{siteTitle:(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),n.createElement("main",{className:"mainContent"},a),n.createElement("footer",{className:"footer"},n.createElement("p",null,"© ",(new Date).getFullYear()," Roux Lab | University of Chicago")))}},9357:function(e,t,a){"use strict";var n=a(7294),s=a(1883);t.Z=function(e){var t,a;let{description:l,title:r,children:c}=e;const{site:i}=(0,s.useStaticQuery)("63159454"),o=l||i.siteMetadata.description,m=null===(t=i.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,m?`${r} | ${m}`:r),n.createElement("meta",{name:"description",content:o}),n.createElement("meta",{property:"og:title",content:r}),n.createElement("meta",{property:"og:description",content:o}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=i.siteMetadata)||void 0===a?void 0:a.author)||""}),n.createElement("meta",{name:"twitter:title",content:r}),n.createElement("meta",{name:"twitter:description",content:o}),c)}},429:function(e,t,a){"use strict";a.r(t),a.d(t,{Head:function(){return r}});var n=a(7294),s=a(5101),l=a(9357);const r=()=>n.createElement(l.Z,{title:"404: Not Found"});t.default=()=>n.createElement(s.Z,null,n.createElement("h1",null,"404: Not Found"),n.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}}]);
//# sourceMappingURL=component---src-pages-404-js-63bbc3ba90b7b25f2a17.js.map