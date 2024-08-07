"use strict";(self.webpackChunkroux_lab=self.webpackChunkroux_lab||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,s=new RegExp("^"+l.source),i=new RegExp(l.source+r.source,"gu"),o=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,n,r)=>{let l=!1,s=!1,i=!1;for(let o=0;o<e.length;o++){const c=e[o];l&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),l=!1,i=s,s=!0,o++):s&&i&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),i=s,s=!1,l=!0):(l=n(c)===c&&r(c)!==c,i=s,s=r(c)===c&&n(c)!==c)}return e})(e,l,c)),e=e.replace(s,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,l):l(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,o.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return j},L:function(){return h},M:function(){return k},P:function(){return L},_:function(){return i},a:function(){return s},b:function(){return d},c:function(){return c},g:function(){return m},h:function(){return o}});var n=a(7294),r=(a(3204),a(5697)),l=a.n(r);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t.indexOf(a=l[n])>=0||(r[a]=e[a]);return r}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,r){return void 0===r&&(r={}),s({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},r,{opacity:t?1:0})})}function m(e,t,a,n,r,l,i,o){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const g=["children"],p=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=i(e,g);return n.createElement(n.Fragment,null,n.createElement(p,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],E=function(e){let{src:t,srcSet:a,loading:r,alt:l="",shouldLoad:o}=e,c=i(e,f);return n.createElement("img",s({},c,{decoding:"async",loading:r,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:l}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,l=i(e,y);const o=l.sizes||(null==t?void 0:t.sizes),c=n.createElement(E,s({},l,t,{sizes:o,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return n.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:o})})),c):c};var b;E.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},v.displayName="Picture",v.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const w=["fallback"],L=function(e){let{fallback:t}=e,a=i(e,w);return t?n.createElement(v,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},a))};L.displayName="Placeholder",L.propTypes={fallback:r.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return n.createElement(n.Fragment,null,n.createElement(v,s({},e)),n.createElement("noscript",null,n.createElement(v,s({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=v.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],x=["style","className"],C=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),s=3;s<n;s++)r[s-3]=arguments[s];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},I={image:l().object.isRequired,alt:S},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],R=["style","className"],O=new Set;let M,_;const P=function(e){let{as:t="div",image:r,style:l,backgroundColor:c,className:d,class:m,onStartLoad:g,onLoad:p,onError:h}=e,f=i(e,T);const{width:y,height:E,layout:v}=r,b=u(y,E,v),{style:w,className:L}=b,k=i(b,R),N=(0,n.useRef)(),x=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);m&&(d=m);const C=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,y,E);return(0,n.useEffect)((()=>{M||(M=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void O.add(x);if(_&&O.has(x))return;let t,n;return M.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;N.current&&(N.current.innerHTML=a(s({isLoading:!0,isLoaded:O.has(x),image:r},f)),O.has(x)||(t=requestAnimationFrame((()=>{N.current&&(n=i(N.current,x,O,l,g,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{O.has(x)&&_&&(N.current.innerHTML=_(s({isLoading:O.has(x),isLoaded:O.has(x),image:r},f)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[r]),(0,n.createElement)(t,s({},k,{style:s({},w,l,{backgroundColor:c}),className:L+(d?" "+d:""),ref:N,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},j=(0,n.memo)((function(e){return e.image?(0,n.createElement)(P,e):null}));j.propTypes=I,j.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(t){let{src:a,__imageData:r,__error:l}=t,o=i(t,q);return l&&console.warn(l),r?n.createElement(e,s({image:r},o)):(console.warn("Image not loaded",a),null)}}const W=A((function(e){let{as:t="div",className:a,class:r,style:l,image:o,loading:c="lazy",imgClassName:g,imgStyle:p,backgroundColor:f,objectFit:y,objectPosition:E}=e,v=i(e,N);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),p=s({objectFit:y,objectPosition:E,backgroundColor:f},p);const{width:b,height:w,layout:S,images:I,placeholder:T,backgroundColor:R}=o,O=u(b,w,S),{style:M,className:_}=O,P=i(O,x),j={fallback:void 0,sources:[]};return I.fallback&&(j.fallback=s({},I.fallback,{srcSet:I.fallback.srcSet?C(I.fallback.srcSet):void 0})),I.sources&&(j.sources=I.sources.map((e=>s({},e,{srcSet:C(e.srcSet)})))),n.createElement(t,s({},P,{style:s({},M,l,{backgroundColor:f}),className:_+(a?" "+a:"")}),n.createElement(h,{layout:S,width:b,height:w},n.createElement(L,s({},m(T,!1,S,b,w,R,y,E))),n.createElement(k,s({"data-gatsby-image-ssr":"",className:g},v,d("eager"===c,!1,j,c,p)))))})),F=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),D={src:l().string.isRequired,alt:S,width:F,height:F,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};W.displayName="StaticImage",W.propTypes=D;const H=A(j);H.displayName="StaticImage",H.propTypes=D},2870:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(1883),l=a(7896);var s=(0,n.forwardRef)(((e,t)=>{let{className:a}=e;return n.createElement("nav",{className:a,ref:t},n.createElement("ul",{className:"nav-list"},n.createElement("li",null,n.createElement(r.Link,{to:"/"},"Home")),n.createElement("li",null,n.createElement(r.Link,{to:"/members"},"Members")),n.createElement("li",null,n.createElement(r.Link,{to:"/research"},"Research")),n.createElement("li",null,n.createElement(r.Link,{to:"/methods"},"Methods")),n.createElement("li",null,n.createElement(r.Link,{to:"/publications"},"Publications")),n.createElement("li",null,n.createElement(r.Link,{to:"/openings"},"Openings")),n.createElement("li",null,n.createElement(r.Link,{to:"/gallery"},"Gallery")),n.createElement("li",null,n.createElement(r.Link,{to:"/tools"},"Tools")),n.createElement("li",null,n.createElement(r.Link,{to:"/useful-links"},"Useful Links")),n.createElement("li",null,n.createElement(r.Link,{to:"/contacts"},"Contacts"))))}));var i=e=>{let{siteTitle:t}=e;const{0:a,1:i}=(0,n.useState)(!1),{0:o,1:c}=(0,n.useState)(!1),u=(0,n.useRef)(null),d=((0,l.useLocation)(),()=>{window.scrollY>50?u.current.classList.add("scrolled"):u.current.classList.remove("scrolled")});return(0,n.useEffect)((()=>(window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d))),[]),n.createElement(n.Fragment,null,n.createElement("header",{className:"header",ref:u},n.createElement("div",{className:"container"},n.createElement("div",{className:"logo"},n.createElement(r.Link,{to:"/",className:"site-title"},t)),o?n.createElement("div",{className:"menu-toggle",onClick:()=>i(!a),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||i(!a)},role:"button",tabIndex:0,"aria-label":"Toggle menu","aria-expanded":a},a?">":"<"):n.createElement(s,{className:"nav-header"}))),o&&n.createElement(s,{className:"nav-side "+(a?"open":"")}))};var o=e=>{var t;let{children:a}=e;const l=(0,r.useStaticQuery)("3649515864");return(0,n.useEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")}))}));return document.querySelectorAll(".hidden").forEach((t=>e.observe(t))),()=>{e.disconnect()}}),[]),n.createElement("div",{className:"site-wrapper"},n.createElement(i,{siteTitle:(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),n.createElement("main",{className:"main-content"},a),n.createElement("footer",{className:"footer"},n.createElement("p",null,"© ",(new Date).getFullYear()," Roux Lab | University of Chicago")))}},9357:function(e,t,a){var n=a(7294),r=a(1883);t.Z=function(e){var t,a;let{description:l,title:s,children:i}=e;const{site:o}=(0,r.useStaticQuery)("63159454"),c=l||o.siteMetadata.description,u=null===(t=o.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,u?s+" | "+u:s),n.createElement("meta",{name:"description",content:c}),n.createElement("meta",{property:"og:title",content:s}),n.createElement("meta",{property:"og:description",content:c}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=o.siteMetadata)||void 0===a?void 0:a.author)||""}),n.createElement("meta",{name:"twitter:title",content:s}),n.createElement("meta",{name:"twitter:description",content:c}),i)}},278:function(e,t,a){a.r(t),a.d(t,{Head:function(){return u},default:function(){return d}});var n=a(7294),r=a(8032),l=a(2870),s=a(9357),i="index-module--groupPhoto--d0a75",o="index-module--intro--0b876",c="index-module--link--b5806";const u=()=>n.createElement(s.Z,{title:"Home"});var d=e=>{let{data:t}=e;const a=t.allFile.nodes.map((e=>({...e,year:parseInt(e.name.split("_")[1],10)}))).sort(((e,t)=>t.year-e.year)),s=(()=>{const e=a.filter((e=>e.name.includes("_main")));return e.length?e[0]:a[0]})(),u=a.filter((e=>e.name!==s.name));return n.createElement(l.Z,null,n.createElement("div",{className:"centeredContent"},n.createElement("div",{className:"index-module--firstScreen--a9d4f"},n.createElement("div",{className:"index-module--introContainer--47a3c"},n.createElement("p",{className:o+" fadeIn1"},"Welcome to the laboratory of Benoît Roux, in the",n.createElement("a",{href:"https://biochem.uchicago.edu",className:c}," Department of Biochemistry and Molecular Biology")," at ",n.createElement("a",{href:"http://www.uchicago.edu",className:c}," The University of Chicago"),"."),n.createElement("p",{className:o+" fadeIn2"},"Here, you will find information on our research, our publications, current and past group members, and various computational tools for theoretical biophysics.")),n.createElement("div",{className:"index-module--mainImageWrapper--62a1d fadeIn3"},n.createElement(r.G,{image:(0,r.c)(s),className:i,alt:"Main Group Photo ("+s.year+")"}))),n.createElement("div",{className:"index-module--imageScrollContainer--5b186"},u.map(((e,t)=>n.createElement("div",{key:t,className:"index-module--imageWrapper--ef7fe hidden"},n.createElement(r.G,{image:(0,r.c)(e),className:i,alt:"Group Photo "+e.year}),n.createElement("div",{className:"index-module--imageOverlay--10779"},n.createElement("span",{className:"index-module--imageText--66589"},e.year))))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-7487bfb22f25a999c4a4.js.map