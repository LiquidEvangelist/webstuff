(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1519],{71210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},48418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(94941).Z;n(45753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(92648).Z,u=n(17273).Z,a=r(n(67294)),f=n(76273),l=n(22725),c=n(63462),i=n(21018),s=n(57190),d=n(71210),p=n(98684),v="undefined"!==typeof a.default.useTransition,y={};function h(e,t,n,o){if(e&&f.isLocalURL(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;y[t+"%"+n+(r?"%"+r:"")]=!0}}var b=a.default.forwardRef((function(e,t){var n,r=e.href,b=e.as,_=e.children,g=e.prefetch,C=e.passHref,L=e.replace,M=e.soft,m=e.shallow,R=e.scroll,E=e.locale,x=e.onClick,j=e.onMouseEnter,O=e.onTouchStart,w=e.legacyBehavior,k=void 0===w?!0!==Boolean(!1):w,P=u(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=_,!k||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var T=!1!==g,I=o(v?a.default.useTransition():[],2)[1],S=a.default.useContext(c.RouterContext),U=a.default.useContext(i.AppRouterContext);U&&(S=U);var N,Z=a.default.useMemo((function(){var e=o(f.resolveHref(S,r,!0),2),t=e[0],n=e[1];return{href:t,as:b?f.resolveHref(S,b):n||t}}),[S,r,b]),A=Z.href,B=Z.as,D=a.default.useRef(A),H=a.default.useRef(B);k&&(N=a.default.Children.only(n));var K=k?N&&"object"===typeof N&&N.ref:t,G=o(s.useIntersection({rootMargin:"200px"}),3),q=G[0],z=G[1],$=G[2],F=a.default.useCallback((function(e){H.current===B&&D.current===A||($(),H.current=B,D.current=A),q(e),K&&("function"===typeof K?K(e):"object"===typeof K&&(K.current=e))}),[B,K,A,$,q]);a.default.useEffect((function(){var e=z&&T&&f.isLocalURL(A),t="undefined"!==typeof E?E:S&&S.locale,n=y[A+"%"+B+(t?"%"+t:"")];e&&!n&&h(S,A,B,{locale:t})}),[B,A,z,E,T,S]);var J={ref:F,onClick:function(e){k||"function"!==typeof x||x(e),k&&N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,u,a,l,c,i){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&f.isLocalURL(n)){e.preventDefault();var s=function(){"softPush"in t&&"softReplace"in t?t[u?r?"softReplace":"softPush":r?"replace":"push"](n):t[r?"replace":"push"](n,o,{shallow:a,locale:c,scroll:l})};i?i(s):s()}}(e,S,A,B,L,M,m,R,E,U?I:void 0)},onMouseEnter:function(e){k||"function"!==typeof j||j(e),k&&N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),f.isLocalURL(A)&&h(S,A,B,{priority:!0})},onTouchStart:function(e){k||"function"!==typeof O||O(e),k&&N.props&&"function"===typeof N.props.onTouchStart&&N.props.onTouchStart(e),f.isLocalURL(A)&&h(S,A,B,{priority:!0})}};if(!k||C||"a"===N.type&&!("href"in N.props)){var Q="undefined"!==typeof E?E:S&&S.locale,V=S&&S.isLocaleDomain&&d.getDomainLocale(B,Q,S.locales,S.domainLocales);J.href=V||p.addBasePath(l.addLocale(B,Q,S&&S.defaultLocale))}return k?a.default.cloneElement(N,J):a.default.createElement("a",Object.assign({},P,J),n)}));t.default=b,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},57190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(94941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,i=r.useRef(),s=o(r.useState(!1),2),d=s[0],p=s[1],v=o(r.useState(null),2),y=v[0],h=v[1];r.useEffect((function(){if(a){if(i.current&&(i.current(),i.current=void 0),c||d)return;return y&&y.tagName&&(i.current=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(o&&(t=f.get(o)))return t;var r=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:r},l.push(n),f.set(n,t),t}(n),r=o.id,u=o.observer,a=o.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),f.delete(r);var t=l.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&l.splice(t,1)}}}(y,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==i.current||i.current(),i.current=void 0}}if(!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[y,c,n,t,d]);var b=r.useCallback((function(){p(!1)}),[]);return[h,d,b]};var r=n(67294),u=n(9311),a="function"===typeof IntersectionObserver;var f=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},21018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(92648).Z)(n(67294)),r=o.default.createContext(null);t.AppRouterContext=r;var u=o.default.createContext(null);t.LayoutRouterContext=u;var a=o.default.createContext(null);t.GlobalLayoutRouterContext=a},41664:function(e,t,n){e.exports=n(48418)},5678:function(e,t,n){"use strict";n.d(t,{Nr:function(){return r},OR:function(){return u},LI:function(){return a},t$:function(){return f}});var o=n(67294);var r=function(e,t){const[n,r]=(0,o.useState)(e);return(0,o.useEffect)((()=>{const n=setTimeout((()=>r(e)),t||500);return()=>{clearTimeout(n)}}),[e,t]),n};var u=function(e,t,n,r){const u=(0,o.useRef)(t);a((()=>{u.current=t}),[t]),(0,o.useEffect)((()=>{var t;const o=null!==(t=null===n||void 0===n?void 0:n.current)&&void 0!==t?t:window;if(!o||!o.addEventListener)return;const a=e=>u.current(e);return o.addEventListener(e,a,r),()=>{o.removeEventListener(e,a,r)}}),[e,n,r])};var a="undefined"!==typeof window?o.useLayoutEffect:o.useEffect;var f=function(e,t,n="mousedown"){u(n,(n=>{const o=null===e||void 0===e?void 0:e.current;o&&!o.contains(n.target)&&t(n)}))}}}]);