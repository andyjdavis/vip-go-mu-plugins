!function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=422)}({3:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},389:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},390:function(e,t,n){var r=n(425),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},391:function(e,t,n){var r=n(390).Symbol;e.exports=r},393:function(e,t,n){var r=n(389),o=n(424),i=n(426),u=Math.max,c=Math.min;e.exports=function(e,t,n){var a,s,f,l,p,d,v=0,b=!1,y=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function w(t){var n=a,r=s;return a=s=void 0,v=t,l=e.apply(r,n)}function j(e){return v=e,p=setTimeout(g,t),b?w(e):l}function O(e){var n=e-d;return void 0===d||n>=t||n<0||y&&e-v>=f}function g(){var e=o();if(O(e))return x(e);p=setTimeout(g,function(e){var n=t-(e-d);return y?c(n,f-(e-v)):n}(e))}function x(e){return p=void 0,m&&a?w(e):(a=s=void 0,l)}function _(){var e=o(),n=O(e);if(a=arguments,s=this,d=e,n){if(void 0===p)return j(d);if(y)return clearTimeout(p),p=setTimeout(g,t),w(d)}return void 0===p&&(p=setTimeout(g,t)),l}return t=i(t)||0,r(n)&&(b=!!n.leading,f=(y="maxWait"in n)?u(i(n.maxWait)||0,t):f,m="trailing"in n?!!n.trailing:m),_.cancel=function(){void 0!==p&&clearTimeout(p),v=0,a=d=s=p=void 0},_.flush=function(){return void 0===p?l:x(o())},_}},422:function(e,t,n){n(53),e.exports=n(423)},423:function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),i=n(7),u=n.n(i),c=n(55),a=n.n(c),s=n(393),f=n.n(s),l=n(60),p=n.n(l),d=(n(432),"wp-block-jetpack-mailchimp");function v(e,t){var n=t.value;return t.classList.remove("error"),!!p.a.validate(n)||(t.classList.add("error"),"function"==typeof document.createElement("input").reportValidity&&e.reportValidity(),!1)}var b=function(e,t){return f()((function(){v(e,t)}),1e3)};function y(e,t){var n=e.querySelector("form"),r=e.querySelector("input[name=email]"),i=e.querySelector("."+d+"_processing"),c=e.querySelector("."+d+"_error"),a=e.querySelector("."+d+"_success");r.addEventListener("input",b(n,r)),n.addEventListener("submit",(function(s){s.preventDefault();var f=r.value,l=[].slice.call(n.querySelectorAll("input[type=hidden].mc-submit-param")).reduce((function(e,t){return u()({},e,o()({},t.name,t.value))}),{});v(n,r)&&(e.classList.add("is-processing"),r.removeEventListener("input",b(n,r)),i.classList.add("is-visible"),function(e,t,n){var r="https://public-api.wordpress.com/rest/v1.1/sites/"+encodeURIComponent(e)+"/email_follow/subscribe?email="+encodeURIComponent(t);for(var o in n)r+="&"+encodeURIComponent(o)+"="+encodeURIComponent(n[o]);return new Promise((function(e,t){var n=new XMLHttpRequest;n.open("GET",r),n.onload=function(){if(200===n.status){var r=JSON.parse(n.responseText);e(r)}else{var o=JSON.parse(n.responseText);t(o)}},n.send()}))}(t,f,l).then((function(e){i.classList.remove("is-visible"),e.error&&"member_exists"!==e.error?c.classList.add("is-visible"):a.classList.add("is-visible")}),(function(){i.classList.remove("is-visible"),c.classList.add("is-visible")})))}))}"undefined"!=typeof window&&a()((function(){Array.from(document.querySelectorAll("."+d)).forEach((function(e){if("true"!==e.getAttribute("data-jetpack-block-initialized")){var t=e.getAttribute("data-blog-id");try{y(e,t)}catch(n){0}e.setAttribute("data-jetpack-block-initialized","true")}}))}))},424:function(e,t,n){var r=n(390);e.exports=function(){return r.Date.now()}},425:function(e,t){var n="object"==typeof window&&window&&window.Object===Object&&window;e.exports=n},426:function(e,t,n){var r=n(389),o=n(427),i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=c.test(e);return n||a.test(e)?s(e.slice(2),n?2:8):u.test(e)?NaN:+e}},427:function(e,t,n){var r=n(428),o=n(431);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},428:function(e,t,n){var r=n(391),o=n(429),i=n(430),u=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":u&&u in Object(e)?o(e):i(e)}},429:function(e,t,n){var r=n(391),o=Object.prototype,i=o.hasOwnProperty,u=o.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(a){}var o=u.call(e);return r&&(t?e[c]=n:delete e[c]),o}},430:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},431:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},432:function(e,t,n){},47:function(e,t,n){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&window.Jetpack_Block_Assets_Base_Url.url&&(n.p=window.Jetpack_Block_Assets_Base_Url.url)},53:function(e,t,n){"use strict";n.r(t);n(47)},55:function(e,t){!function(){e.exports=this.wp.domReady}()},60:function(e,t,n){"use strict";var r=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!r.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},7:function(e,t,n){var r=n(3);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}));