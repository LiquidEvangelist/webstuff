(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7042],{61928:function(t,e,n){"use strict";n.d(e,{ll:function(){return X},YF:function(){return Y}});var o=n(60882);function i(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function r(t){if(null==t)return window;if(!i(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function l(t){return r(t).getComputedStyle(t)}function a(t){return i(t)?"":t?(t.nodeName||"").toLowerCase():""}function c(){const t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((t=>t.brand+"/"+t.version)).join(" "):navigator.userAgent}function s(t){return t instanceof r(t).HTMLElement}function u(t){return t instanceof r(t).Element}function f(t){return"undefined"!=typeof ShadowRoot&&(t instanceof r(t).ShadowRoot||t instanceof ShadowRoot)}function d(t){const{overflow:e,overflowX:n,overflowY:o}=l(t);return/auto|scroll|overlay|hidden/.test(e+o+n)}function m(t){return["table","td","th"].includes(a(t))}function g(t){const e=/firefox/i.test(c()),n=l(t);return"none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||["transform","perspective"].includes(n.willChange)||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter}function h(){return!/^((?!chrome|android).)*safari/i.test(c())}const p=Math.min,y=Math.max,v=Math.round;function w(t,e,n){var o,i,l,a;void 0===e&&(e=!1),void 0===n&&(n=!1);const c=t.getBoundingClientRect();let f=1,d=1;e&&s(t)&&(f=t.offsetWidth>0&&v(c.width)/t.offsetWidth||1,d=t.offsetHeight>0&&v(c.height)/t.offsetHeight||1);const m=u(t)?r(t):window,g=!h()&&n,p=(c.left+(g&&null!=(o=null==(i=m.visualViewport)?void 0:i.offsetLeft)?o:0))/f,y=(c.top+(g&&null!=(l=null==(a=m.visualViewport)?void 0:a.offsetTop)?l:0))/d,w=c.width/f,b=c.height/d;return{width:w,height:b,top:y,right:p+w,bottom:y+b,left:p,x:p,y:y}}function b(t){return(e=t,(e instanceof r(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function x(t){return u(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function R(t){return w(b(t)).left+x(t).scrollLeft}function A(t,e,n){const o=s(e),i=b(e),r=w(t,o&&function(t){const e=w(t);return v(e.width)!==t.offsetWidth||v(e.height)!==t.offsetHeight}(e),"fixed"===n);let l={scrollLeft:0,scrollTop:0};const c={x:0,y:0};if(o||!o&&"fixed"!==n)if(("body"!==a(e)||d(i))&&(l=x(e)),s(e)){const t=w(e,!0);c.x=t.x+e.clientLeft,c.y=t.y+e.clientTop}else i&&(c.x=R(i));return{x:r.left+l.scrollLeft-c.x,y:r.top+l.scrollTop-c.y,width:r.width,height:r.height}}function S(t){return"html"===a(t)?t:t.assignedSlot||t.parentNode||(f(t)?t.host:null)||b(t)}function E(t){return s(t)&&"fixed"!==l(t).position?t.offsetParent:null}function L(t){const e=r(t);let n=E(t);for(;n&&m(n)&&"static"===l(n).position;)n=E(n);return n&&("html"===a(n)||"body"===a(n)&&"static"===l(n).position&&!g(n))?e:n||function(t){let e=S(t);for(f(e)&&(e=e.host);s(e)&&!["html","body"].includes(a(e));){if(g(e))return e;{const t=e.parentNode;e=f(t)?t.host:t}}return null}(t)||e}function z(t){if(s(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=w(t);return{width:e.width,height:e.height}}function k(t){const e=S(t);return["html","body","#document"].includes(a(e))?t.ownerDocument.body:s(e)&&d(e)?e:k(e)}function C(t,e){var n;void 0===e&&(e=[]);const o=k(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),l=r(o),a=i?[l].concat(l.visualViewport||[],d(o)?o:[]):o,c=e.concat(a);return i?c:c.concat(C(a))}function P(t,e,n){return"viewport"===e?(0,o.JB)(function(t,e){const n=r(t),o=b(t),i=n.visualViewport;let l=o.clientWidth,a=o.clientHeight,c=0,s=0;if(i){l=i.width,a=i.height;const t=h();(t||!t&&"fixed"===e)&&(c=i.offsetLeft,s=i.offsetTop)}return{width:l,height:a,x:c,y:s}}(t,n)):u(e)?function(t,e){const n=w(t,!1,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft;return{top:o,left:i,x:i,y:o,right:i+t.clientWidth,bottom:o+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(e,n):(0,o.JB)(function(t){var e;const n=b(t),o=x(t),i=null==(e=t.ownerDocument)?void 0:e.body,r=y(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),a=y(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);let c=-o.scrollLeft+R(t);const s=-o.scrollTop;return"rtl"===l(i||n).direction&&(c+=y(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:a,x:c,y:s}}(b(t)))}function T(t){const e=C(t),n=["absolute","fixed"].includes(l(t).position)&&s(t)?L(t):t;return u(n)?e.filter((t=>u(t)&&function(t,e){const n=null==e.getRootNode?void 0:e.getRootNode();if(t.contains(e))return!0;if(n&&f(n)){let n=e;do{if(n&&t===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(t,n)&&"body"!==a(t))):[]}const j={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[..."clippingAncestors"===n?T(e):[].concat(n),o],l=r[0],a=r.reduce(((t,n)=>{const o=P(e,n,i);return t.top=y(o.top,t.top),t.right=p(o.right,t.right),t.bottom=p(o.bottom,t.bottom),t.left=y(o.left,t.left),t}),P(e,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=s(n),r=b(n);if(n===r)return e;let l={scrollLeft:0,scrollTop:0};const c={x:0,y:0};if((i||!i&&"fixed"!==o)&&(("body"!==a(n)||d(r))&&(l=x(n)),s(n))){const t=w(n,!0);c.x=t.x+n.clientLeft,c.y=t.y+n.clientTop}return{...e,x:e.x-l.scrollLeft+c.x,y:e.y-l.scrollTop+c.y}},isElement:u,getDimensions:z,getOffsetParent:L,getDocumentElement:b,getElementRects:t=>{let{reference:e,floating:n,strategy:o}=t;return{reference:A(e,L(n),o),floating:{...z(n),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===l(t).direction};var O=n(67294),I=n.t(O,2),M=n(73935),D="undefined"!==typeof document?O.useLayoutEffect:O.useEffect;function W(t,e){if(t===e)return!0;if(typeof t!==typeof e)return!1;if("function"===typeof t&&t.toString()===e.toString())return!0;let n,o,i;if(t&&e&&"object"==typeof t){if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(o=n;0!==o--;)if(!W(t[o],e[o]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(o=n;0!==o--;)if(!Object.prototype.hasOwnProperty.call(e,i[o]))return!1;for(o=n;0!==o--;){const n=i[o];if(("_owner"!==n||!t.$$typeof)&&!W(t[n],e[n]))return!1}return!0}return t!==t&&e!==e}function N(t){let{middleware:e,placement:n="bottom",strategy:i="absolute",whileElementsMounted:r}=void 0===t?{}:t;const[l,a]=O.useState({x:null,y:null,strategy:i,placement:n,middlewareData:{}}),[c,s]=O.useState(e);W(null==c?void 0:c.map((t=>{let{name:e,options:n}=t;return{name:e,options:n}})),null==e?void 0:e.map((t=>{let{name:e,options:n}=t;return{name:e,options:n}})))||s(e);const u=O.useRef(null),f=O.useRef(null),d=O.useRef(null),m=O.useRef(l),g=function(t){const e=O.useRef(t);return D((()=>{e.current=t})),e}(r),h=O.useCallback((()=>{u.current&&f.current&&((t,e,n)=>(0,o.oo)(t,e,{platform:j,...n}))(u.current,f.current,{middleware:c,placement:n,strategy:i}).then((t=>{p.current&&!W(m.current,t)&&(m.current=t,M.flushSync((()=>{a(t)})))}))}),[c,n,i]);D((()=>{p.current&&h()}),[h]);const p=O.useRef(!1);D((()=>(p.current=!0,()=>{p.current=!1})),[]);const y=O.useCallback((()=>{if("function"===typeof d.current&&(d.current(),d.current=null),u.current&&f.current)if(g.current){const t=g.current(u.current,f.current,h);d.current=t}else h()}),[h,g]),v=O.useCallback((t=>{u.current=t,y()}),[y]),w=O.useCallback((t=>{f.current=t,y()}),[y]),b=O.useMemo((()=>({reference:u,floating:f})),[]);return O.useMemo((()=>({...l,update:h,refs:b,reference:v,floating:w})),[l,h,b,v,w])}var B="undefined"!==typeof document?O.useLayoutEffect:O.useEffect;function _(){const t=new Map;return{emit(e,n){var o;null==(o=t.get(e))||o.forEach((t=>t(n)))},on(e,n){t.set(e,[...t.get(e)||[],n])},off(e,n){t.set(e,(t.get(e)||[]).filter((t=>t!==n)))}}}I["useId".toString()];const V=O.createContext(null),H=()=>O.useContext(V);function q(t){var e;return null!=(e=null==t?void 0:t.ownerDocument)?e:document}function F(t){var e;return null!=(e=q(t).defaultView)?e:window}function Z(t){return!!t&&t instanceof F(t).Element}const U=I["useInsertionEffect".toString()];function J(t){const e=O.useRef((()=>{0}));return U?U((()=>{e.current=t})):e.current=t,O.useCallback((function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return null==e.current?void 0:e.current(...n)}),[])}function Y(t){let{open:e=!1,onOpenChange:n,whileElementsMounted:o,placement:i,middleware:r,strategy:l,nodeId:a}=void 0===t?{}:t;const[c,s]=O.useState(null),u=H(),f=O.useRef(null),d=O.useRef({}),m=O.useState((()=>_()))[0],g=N({placement:i,middleware:r,strategy:l,whileElementsMounted:o}),h=J(n),p=O.useMemo((()=>({...g.refs,domReference:f})),[g.refs]),y=O.useMemo((()=>({...g,refs:p,dataRef:d,nodeId:a,events:m,open:e,onOpenChange:h,_:{domReference:c}})),[g,a,m,e,h,p,c]);B((()=>{const t=null==u?void 0:u.nodesRef.current.find((t=>t.id===a));t&&(t.context=y)}));const{reference:v}=g,w=O.useCallback((t=>{(Z(t)||null===t)&&(y.refs.domReference.current=t,s(t)),v(t)}),[v,y.refs]);return O.useMemo((()=>({...g,context:y,refs:p,reference:w})),[g,p,y,w])}const G="floating-ui-root",X=t=>{let{children:e,id:n=G,root:o=null}=t;const i=function(t){let{id:e=G,enabled:n=!0}=void 0===t?{}:t;const[o,i]=O.useState(null);return B((()=>{if(!n)return;const t=document.getElementById(e);if(t)i(t);else{const t=document.createElement("div");t.id=e,i(t),document.body.contains(t)||document.body.appendChild(t)}}),[e,n]),o}({id:n,enabled:!o});return o?(0,M.createPortal)(e,o):i?(0,M.createPortal)(e,i):null}},79361:function(t,e){"use strict";e.Z=function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}},28045:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(79361).Z,i=n(94941).Z,r=n(53929).Z;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.src,n=t.sizes,a=t.unoptimized,c=void 0!==a&&a,h=t.priority,p=void 0!==h&&h,x=t.loading,L=t.lazyRoot,k=void 0===L?null:L,C=t.lazyBoundary,P=t.className,T=t.quality,j=t.width,O=t.height,I=t.style,M=t.objectFit,D=t.objectPosition,W=t.onLoadingComplete,N=t.placeholder,B=void 0===N?"empty":N,_=t.blurDataURL,V=s(t,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),H=u.useContext(g.ImageConfigContext),q=u.useMemo((function(){var t=v||H||d.imageConfigDefault,e=r(t.deviceSizes).concat(r(t.imageSizes)).sort((function(t,e){return t-e})),n=t.deviceSizes.sort((function(t,e){return t-e}));return l({},t,{allSizes:e,deviceSizes:n})}),[H]),F=V,Z=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(Z=F.layout),delete F.layout);var U=E;if("loader"in F){if(F.loader){var J=F.loader;U=function(t){t.config;var e=s(t,["config"]);return J(e)}}delete F.loader}var Y="";if(function(t){return"object"===typeof t&&(R(t)||function(t){return void 0!==t.src}(t))}(e)){var G=R(e)?e.default:e;if(!G.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(G)));if(_=_||G.blurDataURL,Y=G.src,(!Z||"fill"!==Z)&&(O=O||G.height,j=j||G.width,!G.height||!G.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(G)))}var X=!p&&("lazy"===x||"undefined"===typeof x);((e="string"===typeof e?e:Y).startsWith("data:")||e.startsWith("blob:"))&&(c=!0,X=!1);w.has(e)&&(X=!1);y&&(c=!0);var $,Q=i(u.useState(!1),2),K=Q[0],tt=Q[1],et=i(m.useIntersection({rootRef:k,rootMargin:C||"200px",disabled:!X}),3),nt=et[0],ot=et[1],it=et[2],rt=!X||ot,lt={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},at={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ct=!1,st={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:D},ut=S(j),ft=S(O),dt=S(T);0;var mt=Object.assign({},I,st),gt="blur"!==B||K?{}:{backgroundSize:M||"cover",backgroundPosition:D||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(_,'")')};if("fill"===Z)lt.display="block",lt.position="absolute",lt.top=0,lt.left=0,lt.bottom=0,lt.right=0;else if("undefined"!==typeof ut&&"undefined"!==typeof ft){var ht=ft/ut,pt=isNaN(ht)?"100%":"".concat(100*ht,"%");"responsive"===Z?(lt.display="block",lt.position="relative",ct=!0,at.paddingTop=pt):"intrinsic"===Z?(lt.display="inline-block",lt.position="relative",lt.maxWidth="100%",ct=!0,at.maxWidth="100%",$="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ut,"%27%20height=%27").concat(ft,"%27/%3e")):"fixed"===Z&&(lt.display="inline-block",lt.position="relative",lt.width=ut,lt.height=ft)}else 0;var yt={src:b,srcSet:void 0,sizes:void 0};rt&&(yt=A({config:q,src:e,unoptimized:c,layout:Z,width:ut,quality:dt,sizes:n,loader:U}));var vt=e;0;var wt;0;var bt=(o(wt={},"imagesrcset",yt.srcSet),o(wt,"imagesizes",yt.sizes),wt),xt=u.default.useLayoutEffect,Rt=u.useRef(W),At=u.useRef(e);u.useEffect((function(){Rt.current=W}),[W]),xt((function(){At.current!==e&&(it(),At.current=e)}),[it,e]);var St=l({isLazy:X,imgAttributes:yt,heightInt:ft,widthInt:ut,qualityInt:dt,layout:Z,className:P,imgStyle:mt,blurStyle:gt,loading:x,config:q,unoptimized:c,placeholder:B,loader:U,srcString:vt,onLoadingCompleteRef:Rt,setBlurComplete:tt,setIntersection:nt,isVisible:rt,noscriptSizes:n},F);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:lt},ct?u.default.createElement("span",{style:at},$?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:$}):null):null,u.default.createElement(z,Object.assign({},St))),p?u.default.createElement(f.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+yt.src+yt.srcSet+yt.sizes,rel:"preload",as:"image",href:yt.srcSet?void 0:yt.src},bt))):null)};var l=n(6495).Z,a=n(92648).Z,c=n(91598).Z,s=n(17273).Z,u=c(n(67294)),f=a(n(5443)),d=n(99309),m=n(57190),g=n(59977),h=(n(63794),n(82392));var p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1}||{},y=p.experimentalUnoptimized,v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1},w=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var x=new Map([["default",function(t){var e=t.config,n=t.src,o=t.width,i=t.quality;0;if(n.endsWith(".svg")&&!e.dangerouslyAllowSVG)return n;return"".concat(h.normalizePathTrailingSlash(e.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(o,"&q=").concat(i||75)}],["imgix",function(t){var e=t.config,n=t.src,o=t.width,i=t.quality,r=new URL("".concat(e.path).concat(k(n))),l=r.searchParams;l.set("auto",l.getAll("auto").join(",")||"format"),l.set("fit",l.get("fit")||"max"),l.set("w",l.get("w")||o.toString()),i&&l.set("q",i.toString());return r.href}],["cloudinary",function(t){var e=t.config,n=t.src,o=t.width,i=t.quality,r=["f_auto","c_limit","w_"+o,"q_"+(i||"auto")].join(",")+"/";return"".concat(e.path).concat(r).concat(k(n))}],["akamai",function(t){var e=t.config,n=t.src,o=t.width;return"".concat(e.path).concat(k(n),"?imwidth=").concat(o)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function R(t){return void 0!==t.default}function A(t){var e=t.config,n=t.src,o=t.unoptimized,i=t.layout,l=t.width,a=t.quality,c=t.sizes,s=t.loader;if(o)return{src:n,srcSet:void 0,sizes:void 0};var u=function(t,e,n,o){var i=t.deviceSizes,l=t.allSizes;if(o&&("fill"===n||"responsive"===n)){for(var a,c=/(^|\s)(1?\d?\d)vw/g,s=[];a=c.exec(o);a)s.push(parseInt(a[2]));if(s.length){var u,f=.01*(u=Math).min.apply(u,r(s));return{widths:l.filter((function(t){return t>=i[0]*f})),kind:"w"}}return{widths:l,kind:"w"}}return"number"!==typeof e||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:r(new Set([e,2*e].map((function(t){return l.find((function(e){return e>=t}))||l[l.length-1]})))),kind:"x"}}(e,l,i,c),f=u.widths,d=u.kind,m=f.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:f.map((function(t,o){return"".concat(s({config:e,src:n,quality:a,width:t})," ").concat("w"===d?t:o+1).concat(d)})).join(", "),src:s({config:e,src:n,quality:a,width:f[m]})}}function S(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function E(t){var e,n=(null==(e=t.config)?void 0:e.loader)||"default",o=x.get(n);if(o)return o(t);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(n))}function L(t,e,n,o,i,r){t&&t.src!==b&&t["data-loaded-src"]!==e&&(t["data-loaded-src"]=e,("decode"in t?t.decode():Promise.resolve()).catch((function(){})).then((function(){if(t.parentNode&&(w.add(e),"blur"===o&&r(!0),null==i?void 0:i.current)){var n=t.naturalWidth,l=t.naturalHeight;i.current({naturalWidth:n,naturalHeight:l})}})))}var z=function(t){var e=t.imgAttributes,n=(t.heightInt,t.widthInt),o=t.qualityInt,i=t.layout,r=t.className,a=t.imgStyle,c=t.blurStyle,f=t.isLazy,d=t.placeholder,m=t.loading,g=t.srcString,h=t.config,p=t.unoptimized,y=t.loader,v=t.onLoadingCompleteRef,w=t.setBlurComplete,b=t.setIntersection,x=t.onLoad,R=t.onError,S=(t.isVisible,t.noscriptSizes),E=s(t,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return m=f?"lazy":m,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},E,e,{decoding:"async","data-nimg":i,className:r,style:l({},a,c),ref:u.useCallback((function(t){b(t),(null==t?void 0:t.complete)&&L(t,g,0,d,v,w)}),[b,g,i,d,v,w]),onLoad:function(t){L(t.currentTarget,g,0,d,v,w),x&&x(t)},onError:function(t){"blur"===d&&w(!0),R&&R(t)}})),(f||"blur"===d)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},E,A({config:h,src:g,unoptimized:p,layout:i,width:n,quality:o,sizes:S,loader:y}),{decoding:"async","data-nimg":i,style:a,className:r,loading:m}))))};function k(t){return"/"===t[0]?t.slice(1):t}("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&"undefined"===typeof e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},25675:function(t,e,n){t.exports=n(28045)},88301:function(t,e,n){"use strict";function o(t){return t.split("-")[0]}function i(t){return t.split("-")[1]}function r(t){return["top","bottom"].includes(o(t))?"x":"y"}function l(t){return"y"===t?"height":"width"}n.d(e,{JB:function(){return c},RR:function(){return w},cv:function(){return b},uY:function(){return R}});function a(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function c(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function s(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:l,elements:s,strategy:u}=t,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:m="floating",altBoundary:g=!1,padding:h=0}=e,p=a(h),y=s[g?"floating"===m?"reference":"floating":m],v=c(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(y)))||n?y:y.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(s.floating)),boundary:f,rootBoundary:d,strategy:u})),w=c(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:"floating"===m?{...l.floating,x:o,y:i}:l.reference,offsetParent:await(null==r.getOffsetParent?void 0:r.getOffsetParent(s.floating)),strategy:u}):l[m]);return{top:v.top-w.top+p.top,bottom:w.bottom-v.bottom+p.bottom,left:v.left-w.left+p.left,right:w.right-v.right+p.right}}const u=Math.min,f=Math.max;function d(t,e,n){return f(t,u(e,n))}const m={left:"right",right:"left",bottom:"top",top:"bottom"};function g(t){return t.replace(/left|right|bottom|top/g,(t=>m[t]))}function h(t,e,n){void 0===n&&(n=!1);const o=i(t),a=r(t),c=l(a);let s="x"===a?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[c]>e.floating[c]&&(s=g(s)),{main:s,cross:g(s)}}const p={start:"end",end:"start"};function y(t){return t.replace(/start|end/g,(t=>p[t]))}const v=["top","right","bottom","left"],w=(v.reduce(((t,e)=>t.concat(e,e+"-start",e+"-end")),[]),function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:i,middlewareData:r,rects:l,initialPlacement:a,platform:c,elements:u}=e,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:p="bestFit",flipAlignment:v=!0,...w}=t,b=o(i),x=m||(b!==a&&v?function(t){const e=g(t);return[y(t),e,y(e)]}(a):[g(a)]),R=[a,...x],A=await s(e,w),S=[];let E=(null==(n=r.flip)?void 0:n.overflows)||[];if(f&&S.push(A[b]),d){const{main:t,cross:e}=h(i,l,await(null==c.isRTL?void 0:c.isRTL(u.floating)));S.push(A[t],A[e])}if(E=[...E,{placement:i,overflows:S}],!S.every((t=>t<=0))){var L,z;const t=(null!=(L=null==(z=r.flip)?void 0:z.index)?L:0)+1,e=R[t];if(e)return{data:{index:t,overflows:E},reset:{placement:e}};let n="bottom";switch(p){case"bestFit":{var k;const t=null==(k=E.map((t=>[t,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:k[0].placement;t&&(n=t);break}case"initialPlacement":n=a}if(i!==n)return{reset:{placement:n}}}return{}}}});const b=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:l}=e,a=await async function(t,e){const{placement:n,platform:l,elements:a}=t,c=await(null==l.isRTL?void 0:l.isRTL(a.floating)),s=o(n),u=i(n),f="x"===r(n),d=["left","top"].includes(s)?-1:1,m=c&&f?-1:1,g="function"==typeof e?e(t):e;let{mainAxis:h,crossAxis:p,alignmentAxis:y}="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return u&&"number"==typeof y&&(p="end"===u?-1*y:y),f?{x:p*m,y:h*d}:{x:h*d,y:p*m}}(e,t);return{x:n+a.x,y:l+a.y,data:a}}}};function x(t){return"x"===t?"y":"x"}const R=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:l}=e,{mainAxis:a=!0,crossAxis:c=!1,limiter:u={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...f}=t,m={x:n,y:i},g=await s(e,f),h=r(o(l)),p=x(h);let y=m[h],v=m[p];if(a){const t="y"===h?"bottom":"right";y=d(y+g["y"===h?"top":"left"],y,y-g[t])}if(c){const t="y"===p?"bottom":"right";v=d(v+g["y"===p?"top":"left"],v,v-g[t])}const w=u.fn({...e,[h]:y,[p]:v});return{...w,data:{x:w.x-n,y:w.y-i}}}}}},55863:function(t,e,n){"use strict";n.d(e,{Me:function(){return w}});n(88301);function o(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function i(t){if(null==t)return window;if(!o(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function r(t){return i(t).getComputedStyle(t)}function l(t){return o(t)?"":t?(t.nodeName||"").toLowerCase():""}function a(){const t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((t=>t.brand+"/"+t.version)).join(" "):navigator.userAgent}function c(t){return t instanceof i(t).HTMLElement}function s(t){return t instanceof i(t).Element}function u(t){return"undefined"!=typeof ShadowRoot&&(t instanceof i(t).ShadowRoot||t instanceof ShadowRoot)}function f(t){const{overflow:e,overflowX:n,overflowY:o}=r(t);return/auto|scroll|overlay|hidden/.test(e+o+n)}function d(){return!/^((?!chrome|android).)*safari/i.test(a())}Math.min,Math.max;const m=Math.round;function g(t,e,n){var o,r,l,a;void 0===e&&(e=!1),void 0===n&&(n=!1);const u=t.getBoundingClientRect();let f=1,g=1;e&&c(t)&&(f=t.offsetWidth>0&&m(u.width)/t.offsetWidth||1,g=t.offsetHeight>0&&m(u.height)/t.offsetHeight||1);const h=s(t)?i(t):window,p=!d()&&n,y=(u.left+(p&&null!=(o=null==(r=h.visualViewport)?void 0:r.offsetLeft)?o:0))/f,v=(u.top+(p&&null!=(l=null==(a=h.visualViewport)?void 0:a.offsetTop)?l:0))/g,w=u.width/f,b=u.height/g;return{width:w,height:b,top:v,right:y+w,bottom:v+b,left:y,x:y,y:v}}function h(t){return(e=t,(e instanceof i(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function p(t){return"html"===l(t)?t:t.assignedSlot||t.parentNode||(u(t)?t.host:null)||h(t)}function y(t){const e=p(t);return["html","body","#document"].includes(l(e))?t.ownerDocument.body:c(e)&&f(e)?e:y(e)}function v(t,e){var n;void 0===e&&(e=[]);const o=y(t),r=o===(null==(n=t.ownerDocument)?void 0:n.body),l=i(o),a=r?[l].concat(l.visualViewport||[],f(o)?o:[]):o,c=e.concat(a);return r?c:c.concat(v(a))}function w(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l=!0,animationFrame:a=!1}=o,c=i&&!a,u=r&&!a,f=c||u?[...s(t)?v(t):[],...v(e)]:[];f.forEach((t=>{c&&t.addEventListener("scroll",n,{passive:!0}),u&&t.addEventListener("resize",n)}));let d,m=null;if(l){let o=!0;m=new ResizeObserver((()=>{o||n(),o=!1})),s(t)&&!a&&m.observe(t),m.observe(e)}let h=a?g(t):null;return a&&function e(){const o=g(t);!h||o.x===h.x&&o.y===h.y&&o.width===h.width&&o.height===h.height||n(),h=o,d=requestAnimationFrame(e)}(),n(),()=>{var t;f.forEach((t=>{c&&t.removeEventListener("scroll",n),u&&t.removeEventListener("resize",n)})),null==(t=m)||t.disconnect(),m=null,a&&cancelAnimationFrame(d)}}},60882:function(t,e,n){"use strict";function o(t){return t.split("-")[0]}function i(t){return t.split("-")[1]}function r(t){return["top","bottom"].includes(o(t))?"x":"y"}function l(t){return"y"===t?"height":"width"}function a(t,e,n){let{reference:a,floating:c}=t;const s=a.x+a.width/2-c.width/2,u=a.y+a.height/2-c.height/2,f=r(e),d=l(f),m=a[d]/2-c[d]/2,g="x"===f;let h;switch(o(e)){case"top":h={x:s,y:a.y-c.height};break;case"bottom":h={x:s,y:a.y+a.height};break;case"right":h={x:a.x+a.width,y:u};break;case"left":h={x:a.x-c.width,y:u};break;default:h={x:a.x,y:a.y}}switch(i(e)){case"start":h[f]-=m*(n&&g?-1:1);break;case"end":h[f]+=m*(n&&g?-1:1)}return h}n.d(e,{JB:function(){return u},RR:function(){return x},cv:function(){return R},oo:function(){return c},uY:function(){return S}});const c=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=n,c=await(null==l.isRTL?void 0:l.isRTL(e));let s=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:f}=a(s,o,c),d=o,m={},g=0;for(let h=0;h<r.length;h++){const{name:n,fn:p}=r[h],{x:y,y:v,data:w,reset:b}=await p({x:u,y:f,initialPlacement:o,placement:d,strategy:i,middlewareData:m,rects:s,platform:l,elements:{reference:t,floating:e}});u=null!=y?y:u,f=null!=v?v:f,m={...m,[n]:{...m[n],...w}},b&&g<=50&&(g++,"object"==typeof b&&(b.placement&&(d=b.placement),b.rects&&(s=!0===b.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):b.rects),({x:u,y:f}=a(s,d,c))),h=-1)}return{x:u,y:f,placement:d,strategy:i,middlewareData:m}};function s(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function u(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function f(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:l,elements:a,strategy:c}=t,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:m="floating",altBoundary:g=!1,padding:h=0}=e,p=s(h),y=a[g?"floating"===m?"reference":"floating":m],v=u(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(y)))||n?y:y.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(a.floating)),boundary:f,rootBoundary:d,strategy:c})),w=u(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:"floating"===m?{...l.floating,x:o,y:i}:l.reference,offsetParent:await(null==r.getOffsetParent?void 0:r.getOffsetParent(a.floating)),strategy:c}):l[m]);return{top:v.top-w.top+p.top,bottom:w.bottom-v.bottom+p.bottom,left:v.left-w.left+p.left,right:w.right-v.right+p.right}}const d=Math.min,m=Math.max;function g(t,e,n){return m(t,d(e,n))}const h={left:"right",right:"left",bottom:"top",top:"bottom"};function p(t){return t.replace(/left|right|bottom|top/g,(t=>h[t]))}function y(t,e,n){void 0===n&&(n=!1);const o=i(t),a=r(t),c=l(a);let s="x"===a?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[c]>e.floating[c]&&(s=p(s)),{main:s,cross:p(s)}}const v={start:"end",end:"start"};function w(t){return t.replace(/start|end/g,(t=>v[t]))}const b=["top","right","bottom","left"],x=(b.reduce(((t,e)=>t.concat(e,e+"-start",e+"-end")),[]),function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:i,middlewareData:r,rects:l,initialPlacement:a,platform:c,elements:s}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:g="bestFit",flipAlignment:h=!0,...v}=t,b=o(i),x=m||(b!==a&&h?function(t){const e=p(t);return[w(t),e,w(e)]}(a):[p(a)]),R=[a,...x],A=await f(e,v),S=[];let E=(null==(n=r.flip)?void 0:n.overflows)||[];if(u&&S.push(A[b]),d){const{main:t,cross:e}=y(i,l,await(null==c.isRTL?void 0:c.isRTL(s.floating)));S.push(A[t],A[e])}if(E=[...E,{placement:i,overflows:S}],!S.every((t=>t<=0))){var L,z;const t=(null!=(L=null==(z=r.flip)?void 0:z.index)?L:0)+1,e=R[t];if(e)return{data:{index:t,overflows:E},reset:{placement:e}};let n="bottom";switch(g){case"bestFit":{var k;const t=null==(k=E.map((t=>[t,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:k[0].placement;t&&(n=t);break}case"initialPlacement":n=a}if(i!==n)return{reset:{placement:n}}}return{}}}});const R=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:l}=e,a=await async function(t,e){const{placement:n,platform:l,elements:a}=t,c=await(null==l.isRTL?void 0:l.isRTL(a.floating)),s=o(n),u=i(n),f="x"===r(n),d=["left","top"].includes(s)?-1:1,m=c&&f?-1:1,g="function"==typeof e?e(t):e;let{mainAxis:h,crossAxis:p,alignmentAxis:y}="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return u&&"number"==typeof y&&(p="end"===u?-1*y:y),f?{x:p*m,y:h*d}:{x:h*d,y:p*m}}(e,t);return{x:n+a.x,y:l+a.y,data:a}}}};function A(t){return"x"===t?"y":"x"}const S=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:l}=e,{mainAxis:a=!0,crossAxis:c=!1,limiter:s={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...u}=t,d={x:n,y:i},m=await f(e,u),h=r(o(l)),p=A(h);let y=d[h],v=d[p];if(a){const t="y"===h?"bottom":"right";y=g(y+m["y"===h?"top":"left"],y,y-m[t])}if(c){const t="y"===p?"bottom":"right";v=g(v+m["y"===p?"top":"left"],v,v-m[t])}const w=s.fn({...e,[h]:y,[p]:v});return{...w,data:{x:w.x-n,y:w.y-i}}}}}},82222:function(t,e,n){"use strict";function o(t){return t&&t.constructor===Symbol?"symbol":typeof t}n.d(e,{Z:function(){return o}})}}]);