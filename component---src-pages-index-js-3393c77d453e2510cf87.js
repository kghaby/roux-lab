"use strict";(self.webpackChunkroux_lab=self.webpackChunkroux_lab||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,n=/[\p{Ll}]/u,a=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,r=/[_.\- ]+/,s=new RegExp("^"+r.source),l=new RegExp(r.source+i.source,"gu"),o=new RegExp("\\d+"+i.source,"gu"),c=(e,i)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(i={pascalCase:!1,preserveConsecutiveUppercase:!1,...i},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const r=!1===i.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i.locale),c=!1===i.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(i.locale);if(1===e.length)return i.pascalCase?c(e):r(e);return e!==r(e)&&(e=((e,a,i)=>{let r=!1,s=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];r&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),r=!1,l=s,s=!0,o++):s&&l&&n.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=s,s=!1,r=!0):(r=a(c)===c&&i(c)!==c,l=s,s=i(c)===c&&a(c)!==c)}return e})(e,r,c)),e=e.replace(s,""),e=i.preserveConsecutiveUppercase?((e,t)=>(a.lastIndex=0,e.replace(a,(e=>t(e)))))(e,r):r(e),i.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,n)=>t(n))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,n){n.d(t,{G:function(){return z},L:function(){return g},M:function(){return L},P:function(){return x},_:function(){return l},a:function(){return s},b:function(){return p},c:function(){return c},g:function(){return h},h:function(){return o}});var a=n(7294),i=(n(3204),n(5697)),r=n.n(i);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t.indexOf(n=r[a])>=0||(i[n]=e[n]);return i}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,n;return Boolean(null==e||null==(t=e.images)||null==(n=t.fallback)?void 0:n.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,n){const a={};let i="gatsby-image-wrapper";return"fixed"===n?(a.width=e,a.height=t):"constrained"===n&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:a}}function p(e,t,n,a,i){return void 0===i&&(i={}),s({},n,{loading:a,shouldLoad:e,"data-main-image":"",style:s({},i,{opacity:t?1:0})})}function h(e,t,n,a,i,r,l,o){const c={};r&&(c.backgroundColor=r,"fixed"===n?(c.width=a,c.height=i,c.backgroundColor=r,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],m=function(e){let{layout:t,width:n,height:i}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/n*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:n,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${i}'%20width='${n}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,n=l(e,u);return a.createElement(a.Fragment,null,a.createElement(m,s({},n)),t,null)},E=["src","srcSet","loading","alt","shouldLoad"],v=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:n,loading:i,alt:r="",shouldLoad:o}=e,c=l(e,E);return a.createElement("img",s({},c,{decoding:"async",loading:i,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?n:void 0,"data-srcset":o?void 0:n,alt:r}))},y=function(e){let{fallback:t,sources:n=[],shouldLoad:i=!0}=e,r=l(e,v);const o=r.sizes||(null==t?void 0:t.sizes),c=a.createElement(f,s({},r,t,{sizes:o,shouldLoad:i}));return n.length?a.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:r}=e;return a.createElement("source",{key:`${t}-${r}-${n}`,type:r,media:t,srcSet:i?n:void 0,"data-srcset":i?void 0:n,sizes:o})})),c):c};var w;f.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},y.displayName="Picture",y.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const b=["fallback"],x=function(e){let{fallback:t}=e,n=l(e,b);return t?a.createElement(y,s({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",s({},n))};x.displayName="Placeholder",x.propTypes={fallback:i.string,sources:null==(w=y.propTypes)?void 0:w.sources,alt:function(e,t,n){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${n}\`. Validation failed.`):null}};const L=function(e){return a.createElement(a.Fragment,null,a.createElement(y,s({},e)),a.createElement("noscript",null,a.createElement(y,s({},e,{shouldLoad:!0}))))};L.displayName="MainImage",L.propTypes=y.propTypes;const A=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],M=e=>e.replace(/\n/g,""),N=function(e,t,n){for(var a=arguments.length,i=new Array(a>3?a-3:0),s=3;s<a;s++)i[s-3]=arguments[s];return e.alt||""===e.alt?r().string.apply(r(),[e,t,n].concat(i)):new Error(`The "alt" prop is required in ${n}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},P={image:r().object.isRequired,alt:N},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],C=["style","className"],I=new Set;let T,O;const $=function(e){let{as:t="div",image:i,style:r,backgroundColor:c,className:p,class:h,onStartLoad:u,onLoad:m,onError:g}=e,E=l(e,S);const{width:v,height:f,layout:y}=i,w=d(v,f,y),{style:b,className:x}=w,L=l(w,C),A=(0,a.useRef)(),k=(0,a.useMemo)((()=>JSON.stringify(i.images)),[i.images]);h&&(p=h);const M=function(e,t,n){let a="";return"fullWidth"===e&&(a=`<div aria-hidden="true" style="padding-top: ${n/t*100}%;"></div>`),"constrained"===e&&(a=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),a}(y,v,f);return(0,a.useEffect)((()=>{T||(T=n.e(731).then(n.bind(n,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=A.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==u||u({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(k);if(O&&I.has(k))return;let t,a;return T.then((e=>{let{renderImageToString:n,swapPlaceholderImage:l}=e;A.current&&(A.current.innerHTML=n(s({isLoading:!0,isLoaded:I.has(k),image:i},E)),I.has(k)||(t=requestAnimationFrame((()=>{A.current&&(a=l(A.current,k,I,r,u,m,g))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[i]),(0,a.useLayoutEffect)((()=>{I.has(k)&&O&&(A.current.innerHTML=O(s({isLoading:I.has(k),isLoaded:I.has(k),image:i},E)),null==u||u({wasCached:!0}),null==m||m({wasCached:!0}))}),[i]),(0,a.createElement)(t,s({},L,{style:s({},b,r,{backgroundColor:c}),className:`${x}${p?` ${p}`:""}`,ref:A,dangerouslySetInnerHTML:{__html:M},suppressHydrationWarning:!0}))},z=(0,a.memo)((function(e){return e.image?(0,a.createElement)($,e):null}));z.propTypes=P,z.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function Y(e){return function(t){let{src:n,__imageData:i,__error:r}=t,o=l(t,R);return r&&console.warn(r),i?a.createElement(e,s({image:i},o)):(console.warn("Image not loaded",n),null)}}const X=Y((function(e){let{as:t="div",className:n,class:i,style:r,image:o,loading:c="lazy",imgClassName:u,imgStyle:m,backgroundColor:E,objectFit:v,objectPosition:f}=e,y=l(e,A);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;i&&(n=i),m=s({objectFit:v,objectPosition:f,backgroundColor:E},m);const{width:w,height:b,layout:N,images:P,placeholder:S,backgroundColor:C}=o,I=d(w,b,N),{style:T,className:O}=I,$=l(I,k),z={fallback:void 0,sources:[]};return P.fallback&&(z.fallback=s({},P.fallback,{srcSet:P.fallback.srcSet?M(P.fallback.srcSet):void 0})),P.sources&&(z.sources=P.sources.map((e=>s({},e,{srcSet:M(e.srcSet)})))),a.createElement(t,s({},$,{style:s({},T,r,{backgroundColor:E}),className:`${O}${n?` ${n}`:""}`}),a.createElement(g,{layout:N,width:w,height:b},a.createElement(x,s({},h(S,!1,N,w,b,C,v,f))),a.createElement(L,s({"data-gatsby-image-ssr":"",className:u},y,p("eager"===c,!1,z,c,m)))))})),F=function(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?r().number.apply(r(),[e,t].concat(a)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},W=new Set(["fixed","fullWidth","constrained"]),D={src:r().string.isRequired,alt:N,width:F,height:F,sizes:r().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};X.displayName="StaticImage",X.propTypes=D;const q=Y(z);q.displayName="StaticImage",q.propTypes=D},2870:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),i=n(1883),r=n(7896);var s=(0,a.forwardRef)(((e,t)=>{let{className:n}=e;const s=(0,r.useLocation)();return a.createElement("nav",{className:n,ref:t},a.createElement("ul",{className:"nav-list"},a.createElement("li",{className:"/"===s.pathname?"active-link":""},a.createElement(i.Link,{to:"/"},a.createElement("span",{className:"text-content"},"Home"))),a.createElement("li",{className:"/members/"===s.pathname?"active-link":""},a.createElement(i.Link,{to:"/members"},a.createElement("span",{className:"text-content"},"Members"))),a.createElement("li",{className:"/research/"===s.pathname?"active-link":""},a.createElement(i.Link,{to:"/research"},a.createElement("span",{className:"text-content"},"Research"))),a.createElement("li",{className:"/methods/"===s.pathname?"active-link":""},a.createElement(i.Link,{to:"/methods"},a.createElement("span",{className:"text-content"},"Methods"))),a.createElement("li",{className:"/publications/"===s.pathname?"active-link":""},a.createElement(i.Link,{to:"/publications"},a.createElement("span",{className:"text-content"},"Publications"))),a.createElement("li",{className:"/openings/"===s.pathname?"active-link":""},a.createElement(i.Link,{to:"/openings"},a.createElement("span",{className:"text-content"},"Openings"))),a.createElement("li",{className:"/gallery/"===s.pathname?"active-link":""},a.createElement(i.Link,{to:"/gallery"},a.createElement("span",{className:"text-content"},"Gallery"))),a.createElement("li",{className:"/tools/"===s.pathname?"active-link":""},a.createElement(i.Link,{to:"/tools"},a.createElement("span",{className:"text-content"},"Tools"))),a.createElement("li",{className:"/useful-links/"===s.pathname?"active-link":""},a.createElement(i.Link,{to:"/useful-links"},a.createElement("span",{className:"text-content"},"Useful Links"))),a.createElement("li",{className:"/contacts/"===s.pathname?"active-link":""},a.createElement(i.Link,{to:"/contacts"},a.createElement("span",{className:"text-content"},"Contacts")))))}));var l=e=>{let{siteTitle:t}=e;const{0:n,1:r}=(0,a.useState)(!1),{0:l,1:o}=(0,a.useState)(!1),c=(0,a.useRef)(null);(0,a.useEffect)((()=>{const e=()=>{const e=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--max-navheader-width"));o(window.innerWidth<=e*parseFloat(getComputedStyle(document.documentElement).fontSize))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const d=()=>{var e,t;window.scrollY>50?null===(e=c.current)||void 0===e||e.classList.add("scrolled"):null===(t=c.current)||void 0===t||t.classList.remove("scrolled")};return(0,a.useEffect)((()=>(window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d))),[]),a.createElement(a.Fragment,null,a.createElement("header",{className:"header",ref:c},a.createElement("div",{className:"container"},a.createElement("div",{className:"logo"},a.createElement(i.Link,{to:"/",className:"site-title"},t)),l?a.createElement("div",{className:"menu-toggle",onClick:()=>r(!n),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||r(!n)},role:"button",tabIndex:0,"aria-label":"Toggle menu","aria-expanded":n},n?">":"<"):a.createElement(s,{className:"nav-header"}))),l&&a.createElement(s,{className:"nav-side "+(n?"open":"")}))};var o=e=>{var t;let{children:n}=e;const r=(0,i.useStaticQuery)("3649515864");return(0,a.useEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")}))}));return document.querySelectorAll(".hidden").forEach((t=>e.observe(t))),()=>{e.disconnect()}}),[]),a.createElement("div",{className:"site-wrapper"},a.createElement(l,{siteTitle:(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),a.createElement("main",{className:"main-content"},n),a.createElement("footer",{className:"footer"},a.createElement("p",null,"© ",(new Date).getFullYear()," Roux Lab | University of Chicago")))}},9357:function(e,t,n){var a=n(7294),i=n(1883);t.Z=function(e){var t,n;let{description:r,title:s,children:l}=e;const{site:o}=(0,i.useStaticQuery)("63159454"),c=r||o.siteMetadata.description,d=null===(t=o.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,d?`${s} | ${d}`:s),a.createElement("meta",{name:"description",content:c}),a.createElement("meta",{property:"og:title",content:s}),a.createElement("meta",{property:"og:description",content:c}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=o.siteMetadata)||void 0===n?void 0:n.author)||""}),a.createElement("meta",{name:"twitter:title",content:s}),a.createElement("meta",{name:"twitter:description",content:c}),l)}},4073:function(e,t,n){n.r(t),n.d(t,{Head:function(){return y},default:function(){return w}});var a=n(7294),i=n(8032);"function"==typeof SuppressedError&&SuppressedError;const r=(e,t,n,a)=>{e.style.transition=`${t} ${n}ms ${a}`},s=(e,t,n)=>Math.min(Math.max(e,t),n);class l{constructor(e,t){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=e=>{const{width:t,height:n}=e,a=Math.sqrt(Math.pow(t,2)+Math.pow(n,2));return{width:a,height:a}},this.setSize=e=>{const t=this.calculateGlareSize(e);this.glareEl.style.width=`${t.width}px`,this.glareEl.style.height=`${t.height}px`},this.update=(e,t,n,a)=>{this.updateAngle(e,t.glareReverse),this.updateOpacity(e,t,n,a)},this.updateAngle=(e,t)=>{const{xPercentage:n,yPercentage:a}=e,i=180/Math.PI,r=n?Math.atan2(a,-n)*i:0;this.glareAngle=r-(t?180:0)},this.updateOpacity=(e,t,n,a)=>{const{xPercentage:i,yPercentage:r}=e,{glarePosition:l,glareReverse:o,glareMaxOpacity:c}=t,d=n?-1:1,p=a?-1:1,h=o?-1:1;let u=0;switch(l){case"top":u=-i*d*h;break;case"right":u=r*p*h;break;case"bottom":case void 0:u=i*d*h;break;case"left":u=-r*p*h;break;case"all":u=Math.hypot(i,r)}const m=s(u,0,100);this.glareOpacity=m*c/100},this.render=e=>{const{glareColor:t}=e;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const n={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},a=this.calculateGlareSize(e),i={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${a.width}px`,height:`${a.height}px`};Object.assign(this.glareWrapperEl.style,n),Object.assign(this.glareEl.style,i)}}class o{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,t)=>{this.updateTilt(e,t),this.updateTiltManualInput(e,t),this.updateTiltReverse(t),this.updateTiltLimits(t)},this.updateTilt=(e,t)=>{const{xPercentage:n,yPercentage:a}=e,{tiltMaxAngleX:i,tiltMaxAngleY:r}=t;this.tiltAngleX=n*i/100,this.tiltAngleY=a*r/100*-1},this.updateTiltManualInput=(e,t)=>{const{tiltAngleXManual:n,tiltAngleYManual:a,tiltMaxAngleX:i,tiltMaxAngleY:r}=t;(null!==n||null!==a)&&(this.tiltAngleX=null!==n?n:0,this.tiltAngleY=null!==a?a:0,e.xPercentage=100*this.tiltAngleX/i,e.yPercentage=100*this.tiltAngleY/r)},this.updateTiltReverse=e=>{const t=e.tiltReverse?-1:1;this.tiltAngleX=t*this.tiltAngleX,this.tiltAngleY=t*this.tiltAngleY},this.updateTiltLimits=e=>{const{tiltAxis:t}=e;this.tiltAngleX=s(this.tiltAngleX,-90,90),this.tiltAngleY=s(this.tiltAngleY,-90,90),t&&(this.tiltAngleX="x"===t?this.tiltAngleX:0,this.tiltAngleY="y"===t?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{const{tiltMaxAngleX:t,tiltMaxAngleY:n}=e;this.tiltAngleXPercentage=this.tiltAngleX/t*100,this.tiltAngleYPercentage=this.tiltAngleY/n*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const c=Object.assign(Object.assign({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"});class d extends a.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=()=>function(e,t,n,a){return new(n||(n=Promise))((function(i,r){function s(e){try{o(a.next(e))}catch(e){r(e)}}function l(e){try{o(a.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}o((a=a.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){if(!window.DeviceOrientationEvent)return;const e=DeviceOrientationEvent.requestPermission;"function"==typeof e?"granted"===(yield e())&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)})),this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{const{onEnter:t}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),t&&t(e.type)},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{const{onLeave:t}=this.props;if(this.setTransitions(),t&&t(e.type),this.props.reset){const e=new CustomEvent("autoreset");this.onMove(e)}},this.processInput=e=>{const{scale:t}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=t;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=t;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=t;break;case"autoreset":const{tiltAngleXInitial:n,tiltAngleYInitial:a,tiltMaxAngleX:i,tiltMaxAngleY:r}=this.props,l=a/r*100;this.wrapperEl.clientPosition.xPercentage=s(n/i*100,-100,100),this.wrapperEl.clientPosition.yPercentage=s(l,-100,100),this.wrapperEl.scale=1}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:t,tiltMaxAngleY:n}=this.props,a=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/t*100,this.wrapperEl.clientPosition.yPercentage=a/n*100,this.wrapperEl.clientPosition.xPercentage=s(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=s(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{const{tiltEnable:t,flipVertically:n,flipHorizontally:a}=this.props;"autoreset"!==e&&"deviceorientation"!==e&&"propChange"!==e&&this.updateClientInput(),t&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,n,a)},this.updateClientInput=()=>{const{trackOnWindow:e}=this.props;let t,n;if(e){const{x:e,y:a}=this.wrapperEl.clientPosition;t=a/window.innerHeight*200-100,n=e/window.innerWidth*200-100}else{const{size:{width:e,height:a,left:i,top:r},clientPosition:{x:s,y:l}}=this.wrapperEl;t=(l-r)/a*200-100,n=(s-i)/e*200-100}this.wrapperEl.clientPosition.xPercentage=s(t,-100,100),this.wrapperEl.clientPosition.yPercentage=s(n,-100,100)},this.updateFlip=()=>{const{flipVertically:e,flipHorizontally:t}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),t&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new o,this.initGlare(),this.addEventListeners(),"undefined"==typeof CustomEvent)return;const e=new CustomEvent("autoreset");this.mainLoop(e);const t=new CustomEvent("initial");this.emitOnMove(t)}componentWillUnmount(){null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),t&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),t&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){const{glareEnable:e,glareBorderRadius:t}=this.props;e&&(this.glare=new l(this.wrapperEl.size,t),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){const{onMove:t}=this.props;if(!t)return;let n=0,a=0;this.glare&&(n=this.glare.glareAngle,a=this.glare.glareOpacity),t({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:n,glareOpacity:a,eventType:e.type})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){const{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){const{transitionSpeed:e,transitionEasing:t}=this.props;r(this.wrapperEl.node,"all",e,t),this.glare&&r(this.glare.glareEl,"opacity",e,t)}render(){const{children:e,className:t,style:n}=this.props;return a.createElement("div",{ref:e=>this.wrapperEl.node=e,onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t,style:n},e)}}d.defaultProps=c;var p=n(2870),h=n(9357);var u=e=>{let{D:t,F:n,T:i,dt:r,particleDensity:s}=e;const l=(0,a.useRef)(null),{0:o,1:c}=(0,a.useState)(!1),{0:d,1:p}=(0,a.useState)({x:-1,y:-1}),{0:h,1:u}=(0,a.useState)([]),m=(0,a.useRef)(null);(0,a.useEffect)((()=>{const e=l.current;e.width=window.innerWidth,e.height=window.innerHeight}),[]),(0,a.useEffect)((()=>{const e=l.current,t=Math.ceil(Math.sqrt(Math.floor(e.width*e.height)/1e4)*s);console.log("numParticles:",t);const n=Array.from({length:t},(()=>({x:Math.random()*e.width,y:Math.random()*e.height,opacity:.2*Math.random()+.3})));u(n)}),[s]);(0,a.useEffect)((()=>{const e=l.current,a=e.getContext("2d"),i=parseFloat(getComputedStyle(document.documentElement).fontSize),s=(.5*i)**2,c=()=>{a.clearRect(0,0,e.width,e.height),h.forEach((l=>{if(!o){let a=0,i=0;if(d.x>=0&&d.y>=0){const{dx:t,dy:r}=((e,t,n,a,i)=>{const r=n+2*i,s=a+2*i;return e>r/2&&(e-=r),e<-r/2&&(e+=r),t>s/2&&(t-=s),t<-s/2&&(t+=s),{dx:e,dy:t}})(d.x-l.x,d.y-l.y,e.width,e.height,s),o=t*t+r*r,c=(e=>Math.exp(-e/2e4))(o)*n;a=t/Math.sqrt(o)*c,i=r/Math.sqrt(o)*c}l.x+=2*(Math.random()-.5)*Math.sqrt(2*t*r)+a*r,l.y+=2*(Math.random()-.5)*Math.sqrt(2*t*r)+i*r,l.x>e.width+s&&(l.x=-s),l.x<-s&&(l.x=e.width+s),l.y>e.height+s&&(l.y=-s),l.y<-s&&(l.y=e.height+s)}a.beginPath(),a.arc(l.x,l.y,(l.opacity*i)**2,0,2*Math.PI),a.fillStyle=`rgba(118, 30, 30, ${l.opacity})`,a.fill()})),m.current=requestAnimationFrame(c)};return c(),()=>{cancelAnimationFrame(m.current)}}),[o,t,n,i,r,h,d]),(0,a.useEffect)((()=>{const e=l.current;let t=0;const n=n=>{const a=Date.now();if(a-t>50){t=a;const i=e.getBoundingClientRect();p({x:n.clientX-i.left,y:n.clientY-i.top})}},a=()=>{p({x:-1,y:-1})};return e.addEventListener("mousemove",n),e.addEventListener("mouseleave",a),()=>{e.removeEventListener("mousemove",n),e.removeEventListener("mouseleave",a)}}),[]),(0,a.useEffect)((()=>{const e=()=>{const e=l.current;e.width=window.innerWidth,e.height=window.innerHeight};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);return a.createElement("canvas",{ref:l,onClick:()=>{c(!o)},style:{position:"fixed",top:0,left:0,zIndex:.1,width:"100%",height:"100%",opacity:0},className:"brownian"})},m="index-module--groupPhoto--d0a75",g="index-module--imageOverlay--10779",E="index-module--imageText--66589",v="index-module--intro--0b876",f="index-module--link--b5806";const y=()=>a.createElement(h.Z,{title:"Home"});var w=e=>{let{data:t}=e;const{0:n,1:r}=(0,a.useState)(!0);(0,a.useEffect)((()=>{n&&(window.scrollTo(0,0),r(!1))}),[n]);const s=t.allFile.nodes.map((e=>({...e,year:parseInt(e.name.split("_")[1],10)}))).sort(((e,t)=>t.year-e.year)),l=s.find((e=>e.name.includes("_main")))||s[0],o=s.filter((e=>e.name!==l.name)),c={tiltReverse:!1,tiltMaxAngleX:4,tiltMaxAngleY:4,perspective:900,scale:1,transitionSpeed:500,reset:!0,gyroscope:!0,className:"parallaxTilt curvedCorners"},{0:h,1:y}=(0,a.useState)(10),{0:w,1:b}=(0,a.useState)(5),{0:x,1:L}=(0,a.useState)(300),{0:A,1:k}=(0,a.useState)(.1),{0:M,1:N}=(0,a.useState)(4),{0:P,1:S}=(0,a.useState)(!1);return(0,a.useEffect)((()=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js",e.async=!0,document.head.appendChild(e),e.onload=()=>{S(!1),window.MathJax.typeset()},e.onerror=()=>{S(!0)}}),[]),a.createElement(p.Z,null,a.createElement(u,{D:h,F:w,T:x,dt:A,particleDensity:M}),a.createElement("div",{className:"centeredContent disableClick"},a.createElement("div",{className:"index-module--firstScreen--a9d4f"},a.createElement("div",{className:"index-module--introContainer--47a3c fadeInBG enableClick glass"},a.createElement("p",{className:`${v} fadeIn1`},"Welcome to the laboratory of Benoît Roux, in the",a.createElement("a",{href:"https://biochem.uchicago.edu",className:f}," Department of Biochemistry and Molecular Biology")," at ",a.createElement("a",{href:"http://www.uchicago.edu",className:f}," The University of Chicago"),"."),a.createElement("p",{className:`${v} fadeIn2`},"Here, you will find information on our research, our publications, current and past group members, and various computational tools for theoretical biophysics.")),a.createElement("div",{className:"index-module--mainImageWrapper--62a1d fadeIn3 enableClick"},a.createElement(d,c,a.createElement("div",{style:{willChange:"transform"}},a.createElement(i.G,{image:(0,i.c)(l),className:m,alt:`Main Group Photo (${l.year})`,imgStyle:{borderRadius:"0.75rem"}}),a.createElement("div",{className:g})),a.createElement("div",{className:E},l.year)))),a.createElement("div",{className:"index-module--imageScrollContainer--5b186"},o.map(((e,t)=>a.createElement("div",{key:t,className:"index-module--imageWrapper--ef7fe hidden enableClick"},a.createElement(d,c,a.createElement("div",{style:{willChange:"transform"}},a.createElement(i.G,{image:(0,i.c)(e),className:m,alt:`Group Photo ${e.year}`,imgStyle:{borderRadius:"0.75rem"}}),a.createElement("div",{className:g})),a.createElement("div",{className:E},e.year)))))),a.createElement("div",{className:"blankPage"},a.createElement("div",{className:"glass enableClick"},a.createElement("div",{className:"index-module--equation--9aec0"},P?a.createElement("span",null,"x(t + dt) = x(t) + (DF(x(t))k_B T)dt + g"):a.createElement("span",null,"$$x(t + \\Delta t) = x(t) + \\left(\\frac{DF(x(t))}{k_B T}\\right)\\Delta t + g$$")),a.createElement("div",{className:"index-module--slidersContainer--defc3"},a.createElement("label",{htmlFor:"diffusion"},"D"),a.createElement("input",{id:"diffusion",type:"range",min:"0.1",max:"500.0",step:"1",value:h,onChange:e=>y(parseFloat(e.target.value))}),a.createElement("label",{htmlFor:"force"},"F"),a.createElement("input",{id:"force",type:"range",min:"0.0",max:"20.0",step:"0.1",value:w,onChange:e=>b(parseFloat(e.target.value))}))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-3393c77d453e2510cf87.js.map