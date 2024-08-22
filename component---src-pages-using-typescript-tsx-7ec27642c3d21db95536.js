(self.webpackChunkroux_lab=self.webpackChunkroux_lab||[]).push([[970],{5928:function(e){e.exports={siteMetadata:{title:"Roux Lab",description:"Benoît Roux's research group at the University of Chicago.",author:"@kghaby",siteUrl:"https://kghaby.github.io/roux-lab/"},pathPrefix:"/roux-lab",plugins:["gatsby-plugin-image",{resolve:"gatsby-source-filesystem",options:{name:"images",path:"//src/images"}},"gatsby-transformer-sharp","gatsby-plugin-sharp","gatsby-plugin-typescript",{resolve:"gatsby-plugin-manifest",options:{name:"Roux Lab",short_name:"RL",start_url:"/",background_color:"#8b7e7e",theme_color:"#760000",display:"minimal-ui",icon:"src/images/protR_whitecircle.png"}}]}},8619:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return o}});var a=n(7294),r=n(1883),l=n(4121),s=n(9357);const o=()=>a.createElement(s.Z,{title:"Using TypeScript"});t.default=e=>{let{data:t,location:n}=e;return a.createElement(l.Z,null,a.createElement("h1",null,"Gatsby supports ",a.createElement("b",null,"TypeScript by default")),a.createElement("p",null,"This means that you can create and write ",a.createElement("code",null,".ts/.tsx")," files for your pages, components, and ",a.createElement("code",null,"gatsby-*")," configuration files (for example ",a.createElement("code",null,"gatsby-config.ts"),")."),a.createElement("p",null,"For type checking you'll want to install ",a.createElement("code",null,"typescript")," via npm and run ",a.createElement("code",null,"tsc --init")," to create a ",a.createElement("code",null,"tsconfig")," file."),a.createElement("p",null,"You're currently on the page ",a.createElement("code",null,n.pathname)," which was built on ",t.site.buildTime,"."),a.createElement("p",null,"To learn more, head over to our"," ",a.createElement("a",{href:"https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/"},"documentation about TypeScript"),"."),a.createElement(r.Link,{to:"/"},"Go back to the homepage"))}},9060:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(7294),r=n(1883),l=n(7896),s=n(5928);const o=n.n(s)().pathPrefix||"";var c=(0,a.forwardRef)(((e,t)=>{let{className:n}=e;const s=(0,l.useLocation)().pathname.replace(new RegExp(`^${o}`),""),c=e=>s.startsWith(e);return a.createElement("nav",{className:n,ref:t},a.createElement("ul",{className:"navList"},a.createElement("li",{className:"/"===s?"activeLink":""},a.createElement(r.Link,{to:"/"},a.createElement("span",{className:"textContent"},"Home"))),a.createElement("li",{className:c("/members")?"activeLink":""},a.createElement(r.Link,{to:"/members"},a.createElement("span",{className:"textContent"},"Members"))),a.createElement("li",{className:c("/research")?"activeLink":""},a.createElement(r.Link,{to:"/research"},a.createElement("span",{className:"textContent"},"Research"))),a.createElement("li",{className:c("/methods")?"activeLink":""},a.createElement(r.Link,{to:"/methods"},a.createElement("span",{className:"textContent"},"Methods"))),a.createElement("li",{className:c("/publications")?"activeLink":""},a.createElement("a",{href:"https://scholar.google.com/citations?hl=en&user=hoGTGlMAAAAJ&view_op=list_works&sortby=pubdate",target:"_blank",rel:"noopener noreferrer"},a.createElement("span",{className:"textContent"},"Publications"))),a.createElement("li",{className:c("/openings")?"activeLink":""},a.createElement(r.Link,{to:"/openings"},a.createElement("span",{className:"textContent"},"Openings"))),a.createElement("li",{className:c("/gallery")?"activeLink":""},a.createElement(r.Link,{to:"/gallery"},a.createElement("span",{className:"textContent"},"Gallery"))),a.createElement("li",{className:c("/ulinks")?"activeLink":""},a.createElement(r.Link,{to:"/ulinks"},a.createElement("span",{className:"textContent"},"Useful Links"))),a.createElement("li",{className:c("/contacts")?"activeLink":""},a.createElement(r.Link,{to:"/contacts"},a.createElement("span",{className:"textContent"},"Contacts")))))}));var i=e=>{let{siteTitle:t}=e;const{0:n,1:l}=(0,a.useState)(!1),{0:s,1:o}=(0,a.useState)(!1),i=(0,a.useRef)(null);(0,a.useEffect)((()=>{const e=()=>{const e=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--max-navheader-width"));o(window.innerWidth<=e*parseFloat(getComputedStyle(document.documentElement).fontSize))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const m=()=>{var e,t;window.scrollY>50?null===(e=i.current)||void 0===e||e.classList.add("scrolled"):null===(t=i.current)||void 0===t||t.classList.remove("scrolled")};return(0,a.useEffect)((()=>(window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m))),[]),a.createElement(a.Fragment,null,a.createElement("header",{className:"header",ref:i},a.createElement("div",{className:"container"},a.createElement("div",{className:"logo"},a.createElement(r.Link,{to:"/",className:"siteTitle"},t)),s?a.createElement("div",{className:"menuToggle",onClick:()=>l(!n),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||l(!n)},role:"button",tabIndex:0,"aria-label":"Toggle menu","aria-expanded":n},n?">":"<"):a.createElement(c,{className:"navHeader"}))),s&&a.createElement(c,{className:"navSide "+(n?"open":"")}))}},4121:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(7294),r=n(1883),l=n(9060);var s=e=>{let{density:t=1}=e;const n=(0,a.useRef)(null);return(0,a.useEffect)((()=>{const e=[],a=n.current;a.width=window.innerWidth,a.height=Math.max(window.innerHeight,window.innerWidth);const r=Math.ceil(Math.sqrt(Math.floor(a.width*a.height)/1e4)*t);console.log("numWaters:",r);const l=20*parseFloat(getComputedStyle(document.documentElement).fontSize);function s(){const t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),s=document.createElement("div"),o=e=>1+4*(1-e),c=e=>.1+.9*(1-e),i=Math.random(),m=o(i),d=c(i),u=.96*m/1.5,h=2*Math.random()*Math.PI,p=h+104.5*Math.PI/180,E=u*Math.cos(h),g=u*Math.sin(h),y=u*Math.cos(p),f=u*Math.sin(p),v=Math.PI/2,w=(Math.random()-.5)*v,b=(Math.random()-.5)*v,k=(e,t,n,a,r,l)=>{const s=Math.cos(a),o=Math.sin(a),c=Math.cos(r),i=Math.sin(r),m=Math.cos(l),d=Math.sin(l);let u=e*m-t*d,h=e*d+t*m,p=n*c-u*i;u=u*c+n*i;let E=h*s-p*o;return p=h*o+p*s,[u,E,p]},[L,N,M]=k(E,g,0,w,b,0),[x,C,$]=k(y,f,0,w,b,0),S=i+.05*M,T=o(S),R=c(S),_=i+.05*$,F=o(_),P=c(_);t.className="molecule",n.className="atom oxygen",r.className="atom hydrogen",s.className="atom hydrogen";const Z=[255,255,255],I=[211,211,211],W=[219,0,0].map(((e,t)=>e*d+Z[t]*(1-d))),Y=I.map(((e,t)=>e*R+Z[t]*(1-R))),A=I.map(((e,t)=>e*P+Z[t]*(1-P)));n.style.backgroundColor=`rgb(${W.join(",")})`,r.style.backgroundColor=`rgb(${Y.join(",")})`,s.style.backgroundColor=`rgb(${A.join(",")})`;const G=.75;n.style.width=m*G+"rem",n.style.height=m*G+"rem",n.style.transform=`translateZ(${10*-i}rem)`,r.style.width=1.2*T/1.5*G+"rem",r.style.height=1.2*T/1.5*G+"rem",r.style.transform=`translate3d(${L}rem, ${N}rem, ${10*-S}rem)`,s.style.width=1.2*F/1.5*G+"rem",s.style.height=1.2*F/1.5*G+"rem",s.style.transform=`translate3d(${x}rem, ${C}rem, ${10*-_}rem)`;const U=98*Math.random()+1,j=Math.random()*(a.height+l);t.style.transform=`translate(${U}vw, ${j}px)`,t.appendChild(n),t.appendChild(r),t.appendChild(s);const z=.5*(1-i);e.push({element:t,speed:z,posX:U,posY:j})}for(let t=0;t<r;t++)s();e.sort(((e,t)=>e.speed-t.speed)),e.forEach((e=>{a.appendChild(e.element)}));const o=()=>{const t=window.scrollY;e.forEach((e=>{const{element:n,speed:r,posX:s,posY:o}=e;let c=o-t*r%(a.height+l);c>a.height+l/2&&(c-=a.height+l),c<-l/2&&(c+=a.height+l),n.style.transform=`translate(${s}vw, ${c}px)`}))};return o(),window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o),e.forEach((e=>a.removeChild(e.element))),e.length=0}}),[t]),a.createElement("div",{ref:n,className:"waterBackground"})};var o=e=>{var t;let{children:n}=e;const o=(0,r.useStaticQuery)("3649515864");return(0,a.useEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")}))}));return document.querySelectorAll(".hidden").forEach((t=>e.observe(t))),()=>{e.disconnect()}}),[]),a.createElement("div",{className:"siteWrapper"},a.createElement(s,{density:10}),a.createElement(l.Z,{siteTitle:(null===(t=o.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),a.createElement("main",{className:"mainContent"},n),a.createElement("footer",{className:"footer"},a.createElement("p",null,"© ",(new Date).getFullYear()," Roux Lab | University of Chicago")))}},9357:function(e,t,n){"use strict";var a=n(7294),r=n(1883);t.Z=function(e){var t,n;let{description:l,title:s,children:o}=e;const{site:c}=(0,r.useStaticQuery)("63159454"),i=l||c.siteMetadata.description,m=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,m?`${s} | ${m}`:s),a.createElement("meta",{name:"description",content:i}),a.createElement("meta",{property:"og:title",content:s}),a.createElement("meta",{property:"og:description",content:i}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=c.siteMetadata)||void 0===n?void 0:n.author)||""}),a.createElement("meta",{name:"twitter:title",content:s}),a.createElement("meta",{name:"twitter:description",content:i}),o)}}}]);
//# sourceMappingURL=component---src-pages-using-typescript-tsx-7ec27642c3d21db95536.js.map