"use strict";(self.webpackChunkroux_lab=self.webpackChunkroux_lab||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,n=/[\p{Ll}]/u,i=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,r=/[_.\- ]+/,s=new RegExp("^"+r.source),l=new RegExp(r.source+a.source,"gu"),o=new RegExp("\\d+"+a.source,"gu"),c=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const r=!1===a.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(a.locale),c=!1===a.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(a.locale);if(1===e.length)return a.pascalCase?c(e):r(e);return e!==r(e)&&(e=((e,i,a)=>{let r=!1,s=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];r&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),r=!1,l=s,s=!0,o++):s&&l&&n.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=s,s=!1,r=!0):(r=i(c)===c&&a(c)!==c,l=s,s=a(c)===c&&i(c)!==c)}return e})(e,r,c)),e=e.replace(s,""),e=a.preserveConsecutiveUppercase?((e,t)=>(i.lastIndex=0,e.replace(i,(e=>t(e)))))(e,r):r(e),a.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,n)=>t(n))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,n){n.d(t,{G:function(){return z},L:function(){return g},M:function(){return L},P:function(){return x},_:function(){return l},a:function(){return s},b:function(){return p},c:function(){return c},g:function(){return u},h:function(){return o}});var i=n(7294),a=(n(3204),n(5697)),r=n.n(a);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t.indexOf(n=r[i])>=0||(a[n]=e[n]);return a}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,n;return Boolean(null==e||null==(t=e.images)||null==(n=t.fallback)?void 0:n.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,n){const i={};let a="gatsby-image-wrapper";return"fixed"===n?(i.width=e,i.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:i}}function p(e,t,n,i,a){return void 0===a&&(a={}),s({},n,{loading:i,shouldLoad:e,"data-main-image":"",style:s({},a,{opacity:t?1:0})})}function u(e,t,n,i,a,r,l,o){const c={};r&&(c.backgroundColor=r,"fixed"===n?(c.width=i,c.height=a,c.backgroundColor=r,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const h=["children"],m=function(e){let{layout:t,width:n,height:a}=e;return"fullWidth"===t?i.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?i.createElement("div",{style:{maxWidth:n,display:"block"}},i.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${n}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,n=l(e,h);return i.createElement(i.Fragment,null,i.createElement(m,s({},n)),t,null)},E=["src","srcSet","loading","alt","shouldLoad"],v=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:n,loading:a,alt:r="",shouldLoad:o}=e,c=l(e,E);return i.createElement("img",s({},c,{decoding:"async",loading:a,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?n:void 0,"data-srcset":o?void 0:n,alt:r}))},f=function(e){let{fallback:t,sources:n=[],shouldLoad:a=!0}=e,r=l(e,v);const o=r.sizes||(null==t?void 0:t.sizes),c=i.createElement(y,s({},r,t,{sizes:o,shouldLoad:a}));return n.length?i.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:r}=e;return i.createElement("source",{key:`${t}-${r}-${n}`,type:r,media:t,srcSet:a?n:void 0,"data-srcset":a?void 0:n,sizes:o})})),c):c};var w;y.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},f.displayName="Picture",f.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const b=["fallback"],x=function(e){let{fallback:t}=e,n=l(e,b);return t?i.createElement(f,s({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):i.createElement("div",s({},n))};x.displayName="Placeholder",x.propTypes={fallback:a.string,sources:null==(w=f.propTypes)?void 0:w.sources,alt:function(e,t,n){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${n}\`. Validation failed.`):null}};const L=function(e){return i.createElement(i.Fragment,null,i.createElement(f,s({},e)),i.createElement("noscript",null,i.createElement(f,s({},e,{shouldLoad:!0}))))};L.displayName="MainImage",L.propTypes=f.propTypes;const A=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],M=["style","className"],P=e=>e.replace(/\n/g,""),k=function(e,t,n){for(var i=arguments.length,a=new Array(i>3?i-3:0),s=3;s<i;s++)a[s-3]=arguments[s];return e.alt||""===e.alt?r().string.apply(r(),[e,t,n].concat(a)):new Error(`The "alt" prop is required in ${n}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},C={image:r().object.isRequired,alt:k},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],I=new Set;let T,O;const $=function(e){let{as:t="div",image:a,style:r,backgroundColor:c,className:p,class:u,onStartLoad:h,onLoad:m,onError:g}=e,E=l(e,S);const{width:v,height:y,layout:f}=a,w=d(v,y,f),{style:b,className:x}=w,L=l(w,N),A=(0,i.useRef)(),M=(0,i.useMemo)((()=>JSON.stringify(a.images)),[a.images]);u&&(p=u);const P=function(e,t,n){let i="";return"fullWidth"===e&&(i=`<div aria-hidden="true" style="padding-top: ${n/t*100}%;"></div>`),"constrained"===e&&(i=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),i}(f,v,y);return(0,i.useEffect)((()=>{T||(T=n.e(731).then(n.bind(n,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=A.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==h||h({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==h||h({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(M);if(O&&I.has(M))return;let t,i;return T.then((e=>{let{renderImageToString:n,swapPlaceholderImage:l}=e;A.current&&(A.current.innerHTML=n(s({isLoading:!0,isLoaded:I.has(M),image:a},E)),I.has(M)||(t=requestAnimationFrame((()=>{A.current&&(i=l(A.current,M,I,r,h,m,g))}))))})),()=>{t&&cancelAnimationFrame(t),i&&i()}}),[a]),(0,i.useLayoutEffect)((()=>{I.has(M)&&O&&(A.current.innerHTML=O(s({isLoading:I.has(M),isLoaded:I.has(M),image:a},E)),null==h||h({wasCached:!0}),null==m||m({wasCached:!0}))}),[a]),(0,i.createElement)(t,s({},L,{style:s({},b,r,{backgroundColor:c}),className:`${x}${p?` ${p}`:""}`,ref:A,dangerouslySetInnerHTML:{__html:P},suppressHydrationWarning:!0}))},z=(0,i.memo)((function(e){return e.image?(0,i.createElement)($,e):null}));z.propTypes=C,z.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function Y(e){return function(t){let{src:n,__imageData:a,__error:r}=t,o=l(t,R);return r&&console.warn(r),a?i.createElement(e,s({image:a},o)):(console.warn("Image not loaded",n),null)}}const X=Y((function(e){let{as:t="div",className:n,class:a,style:r,image:o,loading:c="lazy",imgClassName:h,imgStyle:m,backgroundColor:E,objectFit:v,objectPosition:y}=e,f=l(e,A);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;a&&(n=a),m=s({objectFit:v,objectPosition:y,backgroundColor:E},m);const{width:w,height:b,layout:k,images:C,placeholder:S,backgroundColor:N}=o,I=d(w,b,k),{style:T,className:O}=I,$=l(I,M),z={fallback:void 0,sources:[]};return C.fallback&&(z.fallback=s({},C.fallback,{srcSet:C.fallback.srcSet?P(C.fallback.srcSet):void 0})),C.sources&&(z.sources=C.sources.map((e=>s({},e,{srcSet:P(e.srcSet)})))),i.createElement(t,s({},$,{style:s({},T,r,{backgroundColor:E}),className:`${O}${n?` ${n}`:""}`}),i.createElement(g,{layout:k,width:w,height:b},i.createElement(x,s({},u(S,!1,k,w,b,N,v,y))),i.createElement(L,s({"data-gatsby-image-ssr":"",className:h},f,p("eager"===c,!1,z,c,m)))))})),F=function(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?r().number.apply(r(),[e,t].concat(i)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},W=new Set(["fixed","fullWidth","constrained"]),D={src:r().string.isRequired,alt:k,width:F,height:F,sizes:r().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};X.displayName="StaticImage",X.propTypes=D;const q=Y(z);q.displayName="StaticImage",q.propTypes=D},2870:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(7294),a=n(1883);var r=(0,i.forwardRef)(((e,t)=>{let{className:n}=e;return i.createElement("nav",{className:n,ref:t},i.createElement("ul",{className:"nav-list"},i.createElement("li",null,i.createElement(a.Link,{to:"/"},"Home")),i.createElement("li",null,i.createElement(a.Link,{to:"/members"},"Members")),i.createElement("li",null,i.createElement(a.Link,{to:"/research"},"Research")),i.createElement("li",null,i.createElement(a.Link,{to:"/methods"},"Methods")),i.createElement("li",null,i.createElement(a.Link,{to:"/publications"},"Publications")),i.createElement("li",null,i.createElement(a.Link,{to:"/openings"},"Openings")),i.createElement("li",null,i.createElement(a.Link,{to:"/gallery"},"Gallery")),i.createElement("li",null,i.createElement(a.Link,{to:"/tools"},"Tools")),i.createElement("li",null,i.createElement(a.Link,{to:"/useful-links"},"Useful Links")),i.createElement("li",null,i.createElement(a.Link,{to:"/contacts"},"Contacts"))))}));var s=e=>{let{siteTitle:t}=e;const{0:n,1:s}=(0,i.useState)(!1),{0:l,1:o}=(0,i.useState)(!1),c=(0,i.useRef)(null);(0,i.useEffect)((()=>{const e=()=>{const e=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--max-navheader-width"));o(window.innerWidth<=e*parseFloat(getComputedStyle(document.documentElement).fontSize))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const d=()=>{var e,t;window.scrollY>50?null===(e=c.current)||void 0===e||e.classList.add("scrolled"):null===(t=c.current)||void 0===t||t.classList.remove("scrolled")};return(0,i.useEffect)((()=>(window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d))),[]),i.createElement(i.Fragment,null,i.createElement("header",{className:"header",ref:c},i.createElement("div",{className:"container"},i.createElement("div",{className:"logo"},i.createElement(a.Link,{to:"/",className:"site-title"},t)),l?i.createElement("div",{className:"menu-toggle",onClick:()=>s(!n),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||s(!n)},role:"button",tabIndex:0,"aria-label":"Toggle menu","aria-expanded":n},n?">":"<"):i.createElement(r,{className:"nav-header"}))),l&&i.createElement(r,{className:"nav-side "+(n?"open":"")}))};var l=e=>{var t;let{children:n}=e;const r=(0,a.useStaticQuery)("3649515864");return(0,i.useEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")}))}));return document.querySelectorAll(".hidden").forEach((t=>e.observe(t))),()=>{e.disconnect()}}),[]),i.createElement("div",{className:"site-wrapper"},i.createElement(s,{siteTitle:(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),i.createElement("main",{className:"main-content"},n),i.createElement("footer",{className:"footer"},i.createElement("p",null,"© ",(new Date).getFullYear()," Roux Lab | University of Chicago")))}},9357:function(e,t,n){var i=n(7294),a=n(1883);t.Z=function(e){var t,n;let{description:r,title:s,children:l}=e;const{site:o}=(0,a.useStaticQuery)("63159454"),c=r||o.siteMetadata.description,d=null===(t=o.siteMetadata)||void 0===t?void 0:t.title;return i.createElement(i.Fragment,null,i.createElement("title",null,d?`${s} | ${d}`:s),i.createElement("meta",{name:"description",content:c}),i.createElement("meta",{property:"og:title",content:s}),i.createElement("meta",{property:"og:description",content:c}),i.createElement("meta",{property:"og:type",content:"website"}),i.createElement("meta",{name:"twitter:card",content:"summary"}),i.createElement("meta",{name:"twitter:creator",content:(null===(n=o.siteMetadata)||void 0===n?void 0:n.author)||""}),i.createElement("meta",{name:"twitter:title",content:s}),i.createElement("meta",{name:"twitter:description",content:c}),l)}},4073:function(e,t,n){n.r(t),n.d(t,{Head:function(){return f},default:function(){return w}});var i=n(7294),a=n(8032);"function"==typeof SuppressedError&&SuppressedError;const r=(e,t,n,i)=>{e.style.transition=`${t} ${n}ms ${i}`},s=(e,t,n)=>Math.min(Math.max(e,t),n);class l{constructor(e,t){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=e=>{const{width:t,height:n}=e,i=Math.sqrt(Math.pow(t,2)+Math.pow(n,2));return{width:i,height:i}},this.setSize=e=>{const t=this.calculateGlareSize(e);this.glareEl.style.width=`${t.width}px`,this.glareEl.style.height=`${t.height}px`},this.update=(e,t,n,i)=>{this.updateAngle(e,t.glareReverse),this.updateOpacity(e,t,n,i)},this.updateAngle=(e,t)=>{const{xPercentage:n,yPercentage:i}=e,a=180/Math.PI,r=n?Math.atan2(i,-n)*a:0;this.glareAngle=r-(t?180:0)},this.updateOpacity=(e,t,n,i)=>{const{xPercentage:a,yPercentage:r}=e,{glarePosition:l,glareReverse:o,glareMaxOpacity:c}=t,d=n?-1:1,p=i?-1:1,u=o?-1:1;let h=0;switch(l){case"top":h=-a*d*u;break;case"right":h=r*p*u;break;case"bottom":case void 0:h=a*d*u;break;case"left":h=-r*p*u;break;case"all":h=Math.hypot(a,r)}const m=s(h,0,100);this.glareOpacity=m*c/100},this.render=e=>{const{glareColor:t}=e;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const n={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},i=this.calculateGlareSize(e),a={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${i.width}px`,height:`${i.height}px`};Object.assign(this.glareWrapperEl.style,n),Object.assign(this.glareEl.style,a)}}class o{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,t)=>{this.updateTilt(e,t),this.updateTiltManualInput(e,t),this.updateTiltReverse(t),this.updateTiltLimits(t)},this.updateTilt=(e,t)=>{const{xPercentage:n,yPercentage:i}=e,{tiltMaxAngleX:a,tiltMaxAngleY:r}=t;this.tiltAngleX=n*a/100,this.tiltAngleY=i*r/100*-1},this.updateTiltManualInput=(e,t)=>{const{tiltAngleXManual:n,tiltAngleYManual:i,tiltMaxAngleX:a,tiltMaxAngleY:r}=t;(null!==n||null!==i)&&(this.tiltAngleX=null!==n?n:0,this.tiltAngleY=null!==i?i:0,e.xPercentage=100*this.tiltAngleX/a,e.yPercentage=100*this.tiltAngleY/r)},this.updateTiltReverse=e=>{const t=e.tiltReverse?-1:1;this.tiltAngleX=t*this.tiltAngleX,this.tiltAngleY=t*this.tiltAngleY},this.updateTiltLimits=e=>{const{tiltAxis:t}=e;this.tiltAngleX=s(this.tiltAngleX,-90,90),this.tiltAngleY=s(this.tiltAngleY,-90,90),t&&(this.tiltAngleX="x"===t?this.tiltAngleX:0,this.tiltAngleY="y"===t?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{const{tiltMaxAngleX:t,tiltMaxAngleY:n}=e;this.tiltAngleXPercentage=this.tiltAngleX/t*100,this.tiltAngleYPercentage=this.tiltAngleY/n*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const c=Object.assign(Object.assign({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"});class d extends i.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=()=>function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function s(e){try{o(i.next(e))}catch(e){r(e)}}function l(e){try{o(i.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}o((i=i.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){if(!window.DeviceOrientationEvent)return;const e=DeviceOrientationEvent.requestPermission;"function"==typeof e?"granted"===(yield e())&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)})),this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{const{onEnter:t}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),t&&t(e.type)},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{const{onLeave:t}=this.props;if(this.setTransitions(),t&&t(e.type),this.props.reset){const e=new CustomEvent("autoreset");this.onMove(e)}},this.processInput=e=>{const{scale:t}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=t;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=t;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=t;break;case"autoreset":const{tiltAngleXInitial:n,tiltAngleYInitial:i,tiltMaxAngleX:a,tiltMaxAngleY:r}=this.props,l=i/r*100;this.wrapperEl.clientPosition.xPercentage=s(n/a*100,-100,100),this.wrapperEl.clientPosition.yPercentage=s(l,-100,100),this.wrapperEl.scale=1}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:t,tiltMaxAngleY:n}=this.props,i=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/t*100,this.wrapperEl.clientPosition.yPercentage=i/n*100,this.wrapperEl.clientPosition.xPercentage=s(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=s(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{const{tiltEnable:t,flipVertically:n,flipHorizontally:i}=this.props;"autoreset"!==e&&"deviceorientation"!==e&&"propChange"!==e&&this.updateClientInput(),t&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,n,i)},this.updateClientInput=()=>{const{trackOnWindow:e}=this.props;let t,n;if(e){const{x:e,y:i}=this.wrapperEl.clientPosition;t=i/window.innerHeight*200-100,n=e/window.innerWidth*200-100}else{const{size:{width:e,height:i,left:a,top:r},clientPosition:{x:s,y:l}}=this.wrapperEl;t=(l-r)/i*200-100,n=(s-a)/e*200-100}this.wrapperEl.clientPosition.xPercentage=s(t,-100,100),this.wrapperEl.clientPosition.yPercentage=s(n,-100,100)},this.updateFlip=()=>{const{flipVertically:e,flipHorizontally:t}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),t&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new o,this.initGlare(),this.addEventListeners(),"undefined"==typeof CustomEvent)return;const e=new CustomEvent("autoreset");this.mainLoop(e);const t=new CustomEvent("initial");this.emitOnMove(t)}componentWillUnmount(){null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),t&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),t&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){const{glareEnable:e,glareBorderRadius:t}=this.props;e&&(this.glare=new l(this.wrapperEl.size,t),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){const{onMove:t}=this.props;if(!t)return;let n=0,i=0;this.glare&&(n=this.glare.glareAngle,i=this.glare.glareOpacity),t({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:n,glareOpacity:i,eventType:e.type})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){const{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){const{transitionSpeed:e,transitionEasing:t}=this.props;r(this.wrapperEl.node,"all",e,t),this.glare&&r(this.glare.glareEl,"opacity",e,t)}render(){const{children:e,className:t,style:n}=this.props;return i.createElement("div",{ref:e=>this.wrapperEl.node=e,onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t,style:n},e)}}d.defaultProps=c;var p=n(2870),u=n(9357);var h=e=>{let{D:t,F:n,T:a,dt:r,particleDensity:s}=e;const l=(0,i.useRef)(null),{0:o,1:c}=(0,i.useState)(!1),{0:d,1:p}=(0,i.useState)({x:-1,y:-1}),{0:u,1:h}=(0,i.useState)([]),m=(0,i.useRef)(null);(0,i.useEffect)((()=>{const e=l.current;e.width=window.innerWidth,e.height=window.innerHeight}),[]),(0,i.useEffect)((()=>{const e=l.current,t=Math.ceil(Math.sqrt(Math.floor(e.width*e.height)/1e4)*s);console.log("numParticles:",t);const n=Array.from({length:t},(()=>({x:Math.random()*e.width,y:Math.random()*e.height,opacity:.2*Math.random()+.3})));h(n)}),[s]);(0,i.useEffect)((()=>{const e=l.current,i=e.getContext("2d"),a=parseFloat(getComputedStyle(document.documentElement).fontSize),s=(.5*a)**2,c=()=>{i.clearRect(0,0,e.width,e.height),u.forEach((l=>{if(!o){let i=0,a=0;if(d.x>=0&&d.y>=0){const{dx:t,dy:r}=((e,t,n,i,a)=>{const r=n+2*a,s=i+2*a;return e>r/2&&(e-=r),e<-r/2&&(e+=r),t>s/2&&(t-=s),t<-s/2&&(t+=s),{dx:e,dy:t}})(d.x-l.x,d.y-l.y,e.width,e.height,s),o=t*t+r*r,c=(e=>Math.exp(-e/2e4))(o)*n;i=t/Math.sqrt(o)*c,a=r/Math.sqrt(o)*c}l.x+=2*(Math.random()-.5)*Math.sqrt(2*t*r)+i*r,l.y+=2*(Math.random()-.5)*Math.sqrt(2*t*r)+a*r,l.x>e.width+s&&(l.x=-s),l.x<-s&&(l.x=e.width+s),l.y>e.height+s&&(l.y=-s),l.y<-s&&(l.y=e.height+s)}i.beginPath(),i.arc(l.x,l.y,(l.opacity*a)**2,0,2*Math.PI),i.fillStyle=`rgba(118, 30, 30, ${l.opacity})`,i.fill()})),m.current=requestAnimationFrame(c)};return c(),()=>{cancelAnimationFrame(m.current)}}),[o,t,n,a,r,u,d]),(0,i.useEffect)((()=>{const e=l.current;let t=0;const n=n=>{const i=Date.now();if(i-t>50){t=i;const a=e.getBoundingClientRect();p({x:n.clientX-a.left,y:n.clientY-a.top})}},i=()=>{p({x:-1,y:-1})};return e.addEventListener("mousemove",n),e.addEventListener("mouseleave",i),()=>{e.removeEventListener("mousemove",n),e.removeEventListener("mouseleave",i)}}),[]),(0,i.useEffect)((()=>{const e=()=>{const e=l.current;e.width=window.innerWidth,e.height=window.innerHeight};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);return i.createElement("canvas",{ref:l,onClick:()=>{c(!o)},style:{position:"fixed",top:0,left:0,zIndex:.1,width:"100%",height:"100%",opacity:0},className:"brownian"})},m="index-module--groupPhoto--d0a75",g="index-module--imageOverlay--10779",E="index-module--imageText--66589",v="index-module--intro--0b876",y="index-module--link--b5806";const f=()=>i.createElement(u.Z,{title:"Home"});var w=e=>{let{data:t}=e;const n=t.allFile.nodes.map((e=>({...e,year:parseInt(e.name.split("_")[1],10)}))).sort(((e,t)=>t.year-e.year)),r=n.find((e=>e.name.includes("_main")))||n[0],s=n.filter((e=>e.name!==r.name)),l={tiltReverse:!1,tiltMaxAngleX:4,tiltMaxAngleY:4,perspective:900,scale:1,transitionSpeed:500,reset:!0,gyroscope:!0,className:"parallaxTilt curvedCorners"},{0:o,1:c}=(0,i.useState)(10),{0:u,1:f}=(0,i.useState)(5),{0:w,1:b}=(0,i.useState)(300),{0:x,1:L}=(0,i.useState)(.1),{0:A,1:M}=(0,i.useState)(4),{0:P,1:k}=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js",e.async=!0,document.head.appendChild(e),e.onload=()=>{k(!1),window.MathJax.typeset()},e.onerror=()=>{k(!0)}}),[]),i.createElement(p.Z,null,i.createElement(h,{D:o,F:u,T:w,dt:x,particleDensity:A}),i.createElement("div",{className:"centeredContent disableClick"},i.createElement("div",{className:"index-module--firstScreen--a9d4f"},i.createElement("li",{className:"index-module--introContainer--47a3c fadeInBG enableClick glass"},i.createElement("p",{className:`${v} fadeIn1`},"Welcome to the laboratory of Benoît Roux, in the",i.createElement("a",{href:"https://biochem.uchicago.edu",className:y}," Department of Biochemistry and Molecular Biology")," at ",i.createElement("a",{href:"http://www.uchicago.edu",className:y}," The University of Chicago"),"."),i.createElement("p",{className:`${v} fadeIn2`},"Here, you will find information on our research, our publications, current and past group members, and various computational tools for theoretical biophysics.")),i.createElement("div",{className:"index-module--mainImageWrapper--62a1d fadeIn3 enableClick"},i.createElement(d,l,i.createElement("div",{style:{willChange:"transform"}},i.createElement(a.G,{image:(0,a.c)(r),className:m,alt:`Main Group Photo (${r.year})`,imgStyle:{borderRadius:"0.75rem"}}),i.createElement("div",{className:g})),i.createElement("div",{className:E},r.year)))),i.createElement("div",{className:"index-module--imageScrollContainer--5b186"},s.map(((e,t)=>i.createElement("div",{key:t,className:"index-module--imageWrapper--ef7fe hidden enableClick"},i.createElement(d,l,i.createElement("div",{style:{willChange:"transform"}},i.createElement(a.G,{image:(0,a.c)(e),className:m,alt:`Group Photo ${e.year}`,imgStyle:{borderRadius:"0.75rem"}}),i.createElement("div",{className:g})),i.createElement("div",{className:E},e.year)))))),i.createElement("div",{className:"blankPage"},i.createElement("div",{className:"glass enableClick"},i.createElement("div",{className:"index-module--equation--9aec0"},P?i.createElement("span",null,"x(t + dt) = x(t) + (DF(x(t))k_B T)dt + g"):i.createElement("span",null,"$$x(t + \\Delta t) = x(t) + \\left(\\frac{DF(x(t))}{k_B T}\\right)\\Delta t + g$$")),i.createElement("div",{className:"index-module--slidersContainer--defc3"},i.createElement("label",{htmlFor:"diffusion"},"D"),i.createElement("input",{id:"diffusion",type:"range",min:"0.1",max:"500.0",step:"1",value:o,onChange:e=>c(parseFloat(e.target.value))}),i.createElement("label",{htmlFor:"force"},"F"),i.createElement("input",{id:"force",type:"range",min:"0.0",max:"20.0",step:"0.1",value:u,onChange:e=>f(parseFloat(e.target.value))}))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-c0a9453bb09c5b054458.js.map