module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){t.exports=require("react")},function(t,e){t.exports=require("prop-types")},function(t,e){t.exports=require("@trbl/react-window-info")},function(t,e){t.exports=require("@trbl/react-scroll-info")},function(t,e,n){"use strict";(function(t){var n=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return(function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}())}(),r="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,i=void 0!==t&&t.Math===Math?t:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),o="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var c=["top","right","bottom","left","width","height","size","weight"],s="undefined"!=typeof MutationObserver,u=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function c(){n&&(n=!1,t()),r&&u()}function s(){o(c)}function u(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(s,e);i=t}return u}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){r&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),s?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;c.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),a=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},f=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||i},h=y(0,0,0,0);function l(t){return parseFloat(t)||0}function p(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+l(t["border-"+n+"-width"])}),0)}function d(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return h;var r=f(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=l(o)}return e}(r),o=i.left+i.right,c=i.top+i.bottom,s=l(r.width),u=l(r.height);if("border-box"===r.boxSizing&&(Math.round(s+o)!==e&&(s-=p(r,"left","right")+o),Math.round(u+c)!==n&&(u-=p(r,"top","bottom")+c)),!function(t){return t===f(t).document.documentElement}(t)){var a=Math.round(s+o)-e,d=Math.round(u+c)-n;1!==Math.abs(a)&&(s-=a),1!==Math.abs(d)&&(u-=d)}return y(i.left,i.top,s,u)}var b="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof f(t).SVGGraphicsElement}:function(t){return t instanceof f(t).SVGElement&&"function"==typeof t.getBBox};function v(t){return r?b(t)?function(t){var e=t.getBBox();return y(0,0,e.width,e.height)}(t):d(t):h}function y(t,e,n,r){return{x:t,y:e,width:n,height:r}}var g=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=v(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),O=function(t,e){var n,r,i,o,c,s,u,f=(r=(n=e).x,i=n.y,o=n.width,c=n.height,s="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,u=Object.create(s.prototype),a(u,{x:r,y:i,width:o,height:c,top:i,right:r+o,bottom:c+i,left:r}),u);a(this,{target:t,contentRect:f})},m=function(){function t(t,e,r){if(this.activeObservations_=[],this.observations_=new n,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=r}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new g(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new O(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),w="undefined"!=typeof WeakMap?new WeakMap:new n,_=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=u.getInstance(),r=new m(e,n,this);w.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){_.prototype[t]=function(){var e;return(e=w.get(this))[t].apply(e,arguments)}}));var E=void 0!==i.ResizeObserver?i.ResizeObserver:_;e.a=E}).call(this,n(5))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),o=n(1),c=n.n(o),s=n(2),u=n(3),a=n(4),f=i.a.createContext({});function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t=function(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?v(t):e}(this,b(e).call(this)),g(v(t),"handleResizeEvent",(function(e){var n=e[0].contentRect,r=n.width,i=n.height;t.setState((function(t){return{documentInfo:{width:r,height:i,eventsFired:t.eventsFired+1}}}))})),t.resizeObserver=null,t.state={documentInfo:{width:0,height:0,eventsFired:0},canUseResizeObserver:!1,canUseIntersectionObserver:!1},t}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(e,t),n=e,(r=[{key:"componentDidMount",value:function(){var t="ResizeObserver"in window,e="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype;t&&(this.resizeObserver=new a.a(this.handleResizeEvent),this.resizeObserver.observe(document.documentElement,{box:"border-box"})),this.setState({canUseResizeObserver:t,canUseIntersectionObserver:e})}},{key:"componentWillUnmount",value:function(){this.state.canUseResizeObserver&&this.resizeObserver.unobserve(document.documentElement)}},{key:"render",value:function(){var t=this.props.children;return i.a.createElement(s.WindowInfoProvider,null,i.a.createElement(u.ScrollInfoProvider,null,i.a.createElement(f.Provider,{value:p({},this.state)},t&&t)))}}])&&d(n.prototype,r),o&&d(n,o),e}(r.Component);O.defaultProps={children:void 0},O.propTypes={children:c.a.node};var m=O;function w(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var c,s=t[Symbol.iterator]();!(r=(c=s.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var P={},R={clippingMask:{width:0,height:0,top:0,right:0,bottom:0,left:0},nodeRect:{width:0,height:0,top:0,right:0,bottom:0,left:0},intersectionRect:{width:0,height:0},isVisible:!1,xVisibility:0,yVisibility:0,visibility:0,xPlaneVisibility:0,yPlaneVisibility:0,isVisibleInPlaneX:!1,isVisibleInPlaneY:!1,xDisplacement:0,yDisplacement:0,displacement:0,totalOffsetLeft:0,totalOffsetTop:0},S=function(t){var e=Object(r.useRef)();return Object(r.useEffect)((function(){e.current=t})),e.current},x=function(t){var e=t.current.getBoundingClientRect();return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left}},M=function(t,e){console.log("DISPATCH_REDUCER");var n=e.clippingMask,r=e.nodeRect,i=e.visibilityStatus,o=n||t.clippingMask,c=r||t.nodeRect;return E({clippingMask:o,nodeRect:c},function(t,e,n){var r={width:0,height:0},i=function(e){return e>=t.left&&e<=t.right},o=i(e.right)&&i(e.left),c=e.left<t.left&&e.right>t.right,s=i(e.right)&&e.left<=t.left,u=i(e.left)&&e.right>=t.right;o&&(r.width=e.width),s&&(r.width=e.right),u&&(r.width=t.right-e.left),c&&(r.width=t.width);var a=function(e){return e>=t.top&&e<=t.bottom},f=a(e.top)&&a(e.bottom),h=e.top<t.top&&e.bottom>t.bottom,l=a(e.bottom)&&e.top<=t.top,p=a(e.top)&&e.bottom>=t.bottom;f&&(r.height=e.height),l&&(r.height=e.bottom),p&&(r.height=t.height-e.top),h&&(r.height=t.height);var d=r.height/e.height||0,b=r.width/e.width||0,v=d>0,y=b>0,g=void 0!==n?n:v&&y,O=g?d:0,m=g?b:0,w=g?(O+m)/2:0;return{intersectionRect:{width:g?r.width:0,height:g?r.height:0},isVisible:g,xVisibility:O,yVisibility:m,visibility:w,xPlaneVisibility:d,yPlaneVisibility:b,isVisibleInPlaneX:v,isVisibleInPlaneY:y}}(o,c,i),{},function(t,e){var n=t.width+e.width,r=(e.right-t.left)/n||0,i=t.height+e.height,o=(e.bottom-t.top)/i||0;return{xDisplacement:r,yDisplacement:o,displacement:(r+o)/2}}(o,c),{},{totalOffsetLeft:0,totalOffsetTop:0})},D=function(t,e){var n=w(Object(r.useReducer)(M,R),2),i=n[0],o=n[1],c=Object(r.useRef)(E({},P,{},e));Object(r.useEffect)((function(){console.log("REF_EVENT"),o({nodeRect:x(t)})}),[t]);var a=Object(r.useRef)(),h=Object(r.useContext)(f),l=h.documentInfo,p=h.canUseIntersectionObserver,d=Object(r.useCallback)((function(){var t=!("always"===c.current.reportScrollEvents||"whenVisible"===c.current.reportScrollEvents);a.current=new IntersectionObserver((function(t){var e=w(t,1)[0],n=e.rootBounds,r=e.boundingClientRect,i=e.isIntersecting;console.log("INTERSECTION_EVENT"),o({clippingMask:n,nodeRect:r,isVisible:i})}),{root:null,rootMargin:"0px",threshold:t?c.current.intersectionThreshold:0})}),[c]);Object(r.useEffect)((function(){var e=a.current,n=t.current;return p&&!e&&(d(),a.current.observe(n)),function(){p&&!e&&e.unobserve(n)}}),[p,t,d]);var b=Object(s.useWindowInfo)(),v=S(b.eventsFired);Object(r.useEffect)((function(){b.eventsFired>v&&(console.log("WINDOW_EVENT"),o({clippingMask:{width:b.width,height:b.height,top:0,right:b.width,bottom:b.height,left:0},nodeRect:x(t)}))}),[b,v,t]);var y=Object(u.useScrollInfo)(),g=S(y.eventsFired);return Object(r.useEffect)((function(){if(y.eventsFired>g&&(!l.canUseIntersectionObserver||"always"===c.current.reportScrollEvents||!c.current.isVisible&&"whenInvisible"===c.current.reportScrollEvents||c.current.isVisible&&"whenVisible"===c.current.reportScrollEvents)){console.log("SCROLL");var t=i.nodeRect;o({nodeRect:{width:t.width,height:t.height,top:t.top-y.yDifference,right:t.right-y.xDifference,bottom:t.bottom-y.yDifference,left:t.left-y.xDifference}})}}),[y,l,c,g,i]),i};D.defaultProps={ref:void 0},D.propTypes={ref:c.a.func};var T=D;function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function V(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var A=function(t){return function(e){var n=Object(r.useRef)(),o=T(n);return i.a.createElement(t,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(Object(n),!0).forEach((function(e){V(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e,{ref:n,nodePosition:o}))}};n.d(e,"NodePositionProvider",(function(){return m})),n.d(e,"useNodePosition",(function(){return T})),n.d(e,"withNodePosition",(function(){return A}))}]);
//# sourceMappingURL=build.bundle.js.map