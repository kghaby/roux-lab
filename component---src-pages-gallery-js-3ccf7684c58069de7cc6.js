(self.webpackChunkroux_lab=self.webpackChunkroux_lab||[]).push([[822],{4121:function(e,t,c){"use strict";c.d(t,{Z:function(){return l}});var a=c(7294),n=c(1883),i=c(9060);var r=e=>{let{density:t=1}=e;const c=(0,a.useRef)(null);return(0,a.useEffect)((()=>{const e=[],a=c.current;a.width=window.innerWidth,a.height=Math.max(window.innerHeight,window.innerWidth);const n=Math.ceil(Math.sqrt(Math.floor(a.width*a.height)/1e4)*t);console.log("numWaters:",n);const i=20*parseFloat(getComputedStyle(document.documentElement).fontSize);function r(){const t=document.createElement("div"),c=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),l=e=>1+4*(1-e),s=e=>.1+.9*(1-e),o=Math.random(),u=l(o),f=s(o),d=.96*u/1.5,m=2*Math.random()*Math.PI,b=m+104.5*Math.PI/180,h=d*Math.cos(m),g=d*Math.sin(m),p=d*Math.cos(b),w=d*Math.sin(b),y=Math.PI/2,_=(Math.random()-.5)*y,v=(Math.random()-.5)*y,E=(e,t,c,a,n,i)=>{const r=Math.cos(a),l=Math.sin(a),s=Math.cos(n),o=Math.sin(n),u=Math.cos(i),f=Math.sin(i);let d=e*u-t*f,m=e*f+t*u,b=c*s-d*o;d=d*s+c*o;let h=m*r-b*l;return b=m*l+b*r,[d,h,b]},[j,x,C]=E(h,g,0,_,v,0),[M,A,K]=E(p,w,0,_,v,0),N=o+.05*C,S=l(N),z=s(N),k=o+.05*K,R=l(k),P=s(k);t.className="molecule",c.className="atom oxygen",n.className="atom hydrogen",r.className="atom hydrogen";const B=[255,255,255],F=[211,211,211],$=[219,0,0].map(((e,t)=>e*f+B[t]*(1-f))),I=F.map(((e,t)=>e*z+B[t]*(1-z))),q=F.map(((e,t)=>e*P+B[t]*(1-P)));c.style.backgroundColor=`rgb(${$.join(",")})`,n.style.backgroundColor=`rgb(${I.join(",")})`,r.style.backgroundColor=`rgb(${q.join(",")})`;const O=.75;c.style.width=u*O+"rem",c.style.height=u*O+"rem",c.style.transform=`translateZ(${10*-o}rem)`,n.style.width=1.2*S/1.5*O+"rem",n.style.height=1.2*S/1.5*O+"rem",n.style.transform=`translate3d(${j}rem, ${x}rem, ${10*-N}rem)`,r.style.width=1.2*R/1.5*O+"rem",r.style.height=1.2*R/1.5*O+"rem",r.style.transform=`translate3d(${M}rem, ${A}rem, ${10*-k}rem)`;const T=98*Math.random()+1,L=Math.random()*(a.height+i);t.style.transform=`translate(${T}vw, ${L}px)`,t.appendChild(c),t.appendChild(n),t.appendChild(r);const Z=.5*(1-o);e.push({element:t,speed:Z,posX:T,posY:L})}for(let t=0;t<n;t++)r();e.sort(((e,t)=>e.speed-t.speed)),e.forEach((e=>{a.appendChild(e.element)}));const l=()=>{const t=window.scrollY;e.forEach((e=>{const{element:c,speed:n,posX:r,posY:l}=e;let s=l-t*n%(a.height+i);s>a.height+i/2&&(s-=a.height+i),s<-i/2&&(s+=a.height+i),c.style.transform=`translate(${r}vw, ${s}px)`}))};return l(),window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l),e.forEach((e=>a.removeChild(e.element))),e.length=0}}),[t]),a.createElement("div",{ref:c,className:"waterBackground"})};var l=e=>{var t;let{children:c}=e;const l=(0,n.useStaticQuery)("3649515864");return(0,a.useEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")}))}));return document.querySelectorAll(".hidden").forEach((t=>e.observe(t))),()=>{e.disconnect()}}),[]),a.createElement("div",{className:"siteWrapper"},a.createElement(r,{density:10}),a.createElement(i.Z,{siteTitle:(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),a.createElement("main",{className:"mainContent"},c),a.createElement("footer",{className:"footer"},a.createElement("p",null,"© ",(new Date).getFullYear()," Roux Lab | University of Chicago")))}},3164:function(e,t,c){"use strict";c.r(t);var a=c(7294),n=c(8032),i=c(7737);const r={title:"4lectrostatics of the KcsA Channel",media:a.createElement(n.S,{src:"../../images/research/science_july99_figure1.jpg",alt:"Cavity",loading:"eager",className:i.Cr,__imageData:c(977)}),description:a.createElement(a.Fragment,null,a.createElement("p",null,'Continuum electrostatics calculations based on the finite-difference Poisson-Boltzman equation are used to show that the cavity and the pore helices of the KcsA channel are "tunccupied by a monovalent cation.'),a.createElement("p",null,'B. Roux and R. MacKinnon, "The cavity and pores helices in the KcsA K+ channel: electrostatic stabilization of monovalent cations",'," ",a.createElement("a",{href:"http://www.sciencemag.org/cgi/content/full/285/5424/100"},a.createElement("i",null,"Science"))," ",a.createElement("b",null," 285"),", 100-102 (1999). [",a.createElement("a",{href:"http://www.ncbi.nlm.nih.gov:80/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=10390357&dopt=Abstract"},"PubMed"),"]"),a.createElement("p",null,"Perspective by Bojan Zagrovic and Richard Aldrich",a.createElement("a",{href:"http://www.sciencemag.org/cgi/content/full/285/5424/59"},'"For the Latest Information, Tune to Channel KcsA" ')))};t.default=r},4676:function(e,t,c){"use strict";c.r(t);var a=c(7294),n=c(8032),i=c(7737);const r={title:"5lectrostatics of the KcsA Channel",media:a.createElement(n.S,{src:"../../images/research/science_july99_figure1.jpg",alt:"Cavity",loading:"lazy",className:i.Cr,__imageData:c(617)}),description:a.createElement(a.Fragment,null,a.createElement("p",null,'Continuum electrostatics calculations based on the finite-difference Poisson-Boltzman equation are used to show that the cavity and the pore helices of the KcsA channel are "tuned" to be preferably occupied by a monovalent cation.'),a.createElement("p",null,'B. Roux and R. MacKinnon, "The cavity and pores helices in the KcsA K+ channel: electrostatic stabilization of monovalent cations",'," ",a.createElement("a",{href:"http://www.sciencemag.org/cgi/content/full/285/5424/100"},a.createElement("i",null,"Science"))," ",a.createElement("b",null," 285"),", 100-102 (1999). [",a.createElement("a",{href:"http://www.ncbi.nlm.nih.gov:80/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=10390357&dopt=Abstract"},"PubMed"),"]"),a.createElement("p",null,"Perspective by Bojan Zagrovic and Richard Aldrich",a.createElement("a",{href:"http://www.sciencemag.org/cgi/content/full/285/5424/59"},'"For the Latest Information, Tune to Channel KcsA" ')))};t.default=r},180:function(e,t,c){"use strict";c.r(t);var a=c(7294),n=c(8032),i=c(7737);const r={title:"7lectrostatics of the KcsA Channel",media:a.createElement(n.S,{src:"../../images/research/science_july99_figure1.jpg",alt:"Cavity",loading:"eager",className:i.Cr,__imageData:c(372)}),description:a.createElement(a.Fragment,null,a.createElement("p",null,'Continuum electrostatics calculations based on the finite-difference Poisson-uned" to be preferably occupied by a monovalent cation.'),a.createElement("p",null,'B. Roux and R. MacKinnon, "The cavity and pores helices in the KcsA K+ channel: electrostatic stabilization of monovalent cations",'," ",a.createElement("a",{href:"http://www.sciencemag.org/cgi/content/full/285/5424/100"},a.createElement("i",null,"Science"))," ",a.createElement("b",null," 285"),", 100-102 (1999). [",a.createElement("a",{href:"http://www.ncbi.nlm.nih.gov:80/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=10390357&dopt=Abstract"},"PubMed"),"]"),a.createElement("p",null,"Perspective by Bojan Zagrovic and Richard Aldrich",a.createElement("a",{href:"http://www.sciencemag.org/cgi/content/full/285/5424/59"},'"For the Latest Information, Tune to Channel KcsA" ')))};t.default=r},6451:function(e,t,c){"use strict";c.r(t);var a=c(7294),n=c(8032),i=c(7737);const r={title:"1Electrostatics of the KcsA Channel",media:a.createElement(n.S,{src:"../../images/research/science_july99_figure1.jpg",alt:"Cavity",loading:"eager",className:i.Cr,__imageData:c(1358)}),description:a.createElement(a.Fragment,null,a.createElement("p",null,'Coum electrostatics calculations based on the finite-difference Poisson-Boltzman equation are used to show that the cavity and the pore helices of the KcsA channel are "tuned" to be preferably occupied by a monovalent cation.'),a.createElement("p",null,'B. Roux and R. MacKinnon, "The cavity and pores helices in the KcsA K+ channel: electrostatic stabilization of monovalent cations",'," ",a.createElement("a",{href:"http://www.sciencemag.org/cgi/content/full/285/5424/100"},a.createElement("i",null,"Science"))," ",a.createElement("b",null," 285"),", 100-102 (1999). [",a.createElement("a",{href:"http://www.ncbi.nlm.nih.gov:80/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=10390357&dopt=Abstract"},"PubMed"),"]"),a.createElement("p",null,"Perspective by Bojan Zagrovic and Richard Aldrich",a.createElement("a",{href:"http://www.sciencemag.org/cgi/content/full/285/5424/59"},'"For the Latest Information, Tune to Channel KcsA" ')))};t.default=r},8445:function(e,t,c){"use strict";c.r(t);var a=c(7294),n=c(8032),i=c(7737);const r={title:"Electrostatics of the KcsA Channel",media:a.createElement(n.S,{src:"../../images/research/science_july99_figure1.jpg",alt:"Cavity",loading:"eager",className:i.Cr,__imageData:c(6854)}),description:a.createElement(a.Fragment,null,a.createElement("p",null,'Continuum electrostatics calculations based on the finite-difference Poisson-Boltzman equation are used to show that the cavity and the pore helices of the KcsA channel are "tuned" to be preferably occupied by a monovalent cation.'),a.createElement("p",null,'B. Roux and R. MacKinnon, "The cavity and pores helices in the KcsA K+ channel: electrostatic stabilization of monovalent cations",'," ",a.createElement("a",{href:"http://www.sciencemag.org/cgi/content/full/285/5424/100"},a.createElement("i",null,"Science"))," ",a.createElement("b",null," 285"),", 100-102 (1999). [",a.createElement("a",{href:"http://www.ncbi.nlm.nih.gov:80/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=10390357&dopt=Abstract"},"PubMed"),"]"),a.createElement("p",null,"Perspective by Bojan Zagrovic and Richard Aldrich",a.createElement("a",{href:"http://www.sciencemag.org/cgi/content/full/285/5424/59"},'"For the Latest Information, Tune to Channel KcsA" ')))};t.default=r},62:function(e,t,c){"use strict";c.r(t);var a=c(7294),n=c(4121),i=c(7737);t.default=()=>{const{0:e,1:t}=(0,a.useState)(null),{0:r,1:l}=(0,a.useState)([]);(0,a.useEffect)((()=>{const e=(()=>{const e=c(8277);return e.keys().map((t=>{const c=e(t).default,a=t.replace("./","").replace(".js","");return{...c,key:a,id:a.replace(/\s+/g,"_").replace(/[^\w-]+/g,"")}})).sort(((e,t)=>e.title.localeCompare(t.title)))})();l(e)}),[]);const s=e=>{t(e)};return a.createElement(n.Z,null,a.createElement("div",{className:i.OR},r.map(((e,t)=>a.createElement("div",{key:e.id,className:i.Q1,onClick:()=>s(t),onKeyDown:e=>((e,t)=>{"Enter"!==e.key&&" "!==e.key||s(t)})(e,t),role:"button",tabIndex:0,"aria-label":`Open ${e.title}`},e.media,a.createElement("h3",null,e.title))))),null!==e&&a.createElement("div",{className:i.Z1},a.createElement("div",{className:i.qz},a.createElement("div",{className:i.IG},r[e].media),a.createElement("div",{className:i.KN},r[e].description)),a.createElement("button",{className:i.Ah,onClick:()=>{t(null)}},"×"),a.createElement("button",{className:i.zU,onClick:()=>{t((e=>(e-1+r.length)%r.length))}},"❮"),a.createElement("button",{className:i.F2,onClick:()=>{t((e=>(e+1)%r.length))}},"❯")))}},7737:function(e,t,c){"use strict";c.d(t,{Ah:function(){return a},Cr:function(){return i},F2:function(){return r},IG:function(){return u},KN:function(){return o},OR:function(){return n},Q1:function(){return d},Z1:function(){return f},qz:function(){return s},zU:function(){return l}});var a="gallery-module--closeButton--7ce20",n="gallery-module--galleryGrid--ab987",i="gallery-module--mediaImage--80521",r="gallery-module--nextButton--792ff",l="gallery-module--prevButton--3125e",s="gallery-module--slideContent--03092",o="gallery-module--slideDescription--434db",u="gallery-module--slideMedia--467d7",f="gallery-module--slideshow--8cde5",d="gallery-module--thumbnail--dc6a2"},8277:function(e,t,c){var a={"./cavity copy 4.js":3164,"./cavity copy 5.js":4676,"./cavity copy 7.js":180,"./cavity copy.js":6451,"./cavity.js":8445};function n(e){var t=i(e);return c(t)}function i(e){if(!c.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=i,e.exports=n,n.id=8277},372:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/6f5a3/science_july99_figure1.jpg","srcSet":"/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/a999d/science_july99_figure1.jpg 177w,\\n/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/cd6c5/science_july99_figure1.jpg 355w,\\n/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/6f5a3/science_july99_figure1.jpg 709w","sizes":"(min-width: 709px) 709px, 100vw"},"sources":[{"srcSet":"/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/8367b/science_july99_figure1.webp 177w,\\n/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/b76c2/science_july99_figure1.webp 355w,\\n/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/1d8b2/science_july99_figure1.webp 709w","type":"image/webp","sizes":"(min-width: 709px) 709px, 100vw"}]},"width":709,"height":825}')},6854:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/6f5a3/science_july99_figure1.jpg","srcSet":"/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/a999d/science_july99_figure1.jpg 177w,\\n/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/cd6c5/science_july99_figure1.jpg 355w,\\n/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/6f5a3/science_july99_figure1.jpg 709w","sizes":"(min-width: 709px) 709px, 100vw"},"sources":[{"srcSet":"/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/8367b/science_july99_figure1.webp 177w,\\n/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/b76c2/science_july99_figure1.webp 355w,\\n/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/1d8b2/science_july99_figure1.webp 709w","type":"image/webp","sizes":"(min-width: 709px) 709px, 100vw"}]},"width":709,"height":825}')},1358:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/6f5a3/science_july99_figure1.jpg","srcSet":"/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/a999d/science_july99_figure1.jpg 177w,\\n/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/cd6c5/science_july99_figure1.jpg 355w,\\n/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/6f5a3/science_july99_figure1.jpg 709w","sizes":"(min-width: 709px) 709px, 100vw"},"sources":[{"srcSet":"/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/8367b/science_july99_figure1.webp 177w,\\n/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/b76c2/science_july99_figure1.webp 355w,\\n/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/1d8b2/science_july99_figure1.webp 709w","type":"image/webp","sizes":"(min-width: 709px) 709px, 100vw"}]},"width":709,"height":825}')},617:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/6f5a3/science_july99_figure1.jpg","srcSet":"/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/a999d/science_july99_figure1.jpg 177w,\\n/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/cd6c5/science_july99_figure1.jpg 355w,\\n/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/6f5a3/science_july99_figure1.jpg 709w","sizes":"(min-width: 709px) 709px, 100vw"},"sources":[{"srcSet":"/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/8367b/science_july99_figure1.webp 177w,\\n/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/b76c2/science_july99_figure1.webp 355w,\\n/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/1d8b2/science_july99_figure1.webp 709w","type":"image/webp","sizes":"(min-width: 709px) 709px, 100vw"}]},"width":709,"height":825}')},977:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/6f5a3/science_july99_figure1.jpg","srcSet":"/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/a999d/science_july99_figure1.jpg 177w,\\n/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/cd6c5/science_july99_figure1.jpg 355w,\\n/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/6f5a3/science_july99_figure1.jpg 709w","sizes":"(min-width: 709px) 709px, 100vw"},"sources":[{"srcSet":"/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/8367b/science_july99_figure1.webp 177w,\\n/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/b76c2/science_july99_figure1.webp 355w,\\n/roux-lab/static/331a8072fe1d4ec0f6398ff4b3eb81c6/1d8b2/science_july99_figure1.webp 709w","type":"image/webp","sizes":"(min-width: 709px) 709px, 100vw"}]},"width":709,"height":825}')}}]);
//# sourceMappingURL=component---src-pages-gallery-js-3ccf7684c58069de7cc6.js.map