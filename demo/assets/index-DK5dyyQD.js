const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/src-tolp6nSh.js","assets/chunk-DECur_0Z.js","assets/preload-helper-D83xqiHd.js","assets/typeof-v3x6qlpQ.js","assets/purify.es-F3iWCZCP.js","assets/html2canvas-Tl70eTUd.js","assets/html2canvas-DcbCcm1Y.js","assets/__vite-browser-external-C2HJ6kSE.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,t as n}from"./chunk-DECur_0Z.js";import{t as r}from"./preload-helper-D83xqiHd.js";import{t as i}from"./purify.es-F3iWCZCP.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var a;(function(e){e.ElementExample=`element-example`,e.Page=`page`,e.Root=`root`})(a||={});function o(e,t=e=>e){let n=new Map;return e.filter(e=>{let r=t(e);return n.get(r)?!1:(n.set(r,e),!0)})}var s=class{diff(e,t,n={}){let r;typeof n==`function`?(r=n,n={}):`callback`in n&&(r=n.callback);let i=this.castInput(e,n),a=this.castInput(t,n),o=this.removeEmpty(this.tokenize(i,n)),s=this.removeEmpty(this.tokenize(a,n));return this.diffWithOptionsObj(o,s,n,r)}diffWithOptionsObj(e,t,n,r){let i=e=>{if(e=this.postProcess(e,n),r){setTimeout(function(){r(e)},0);return}else return e},a=t.length,o=e.length,s=1,c=a+o;n.maxEditLength!=null&&(c=Math.min(c,n.maxEditLength));let l=n.timeout??1/0,u=Date.now()+l,d=[{oldPos:-1,lastComponent:void 0}],f=this.extractCommon(d[0],t,e,0,n);if(d[0].oldPos+1>=o&&f+1>=a)return i(this.buildValues(d[0].lastComponent,t,e));let p=-1/0,m=1/0,h=()=>{for(let r=Math.max(p,-s);r<=Math.min(m,s);r+=2){let s,c=d[r-1],l=d[r+1];c&&(d[r-1]=void 0);let u=!1;if(l){let e=l.oldPos-r;u=l&&0<=e&&e<a}let h=c&&c.oldPos+1<o;if(!u&&!h){d[r]=void 0;continue}if(s=!h||u&&c.oldPos<l.oldPos?this.addToPath(l,!0,!1,0,n):this.addToPath(c,!1,!0,1,n),f=this.extractCommon(s,t,e,r,n),s.oldPos+1>=o&&f+1>=a)return i(this.buildValues(s.lastComponent,t,e))||!0;d[r]=s,s.oldPos+1>=o&&(m=Math.min(m,r-1)),f+1>=a&&(p=Math.max(p,r+1))}s++};if(r)(function e(){setTimeout(function(){if(s>c||Date.now()>u)return r(void 0);h()||e()},0)})();else for(;s<=c&&Date.now()<=u;){let e=h();if(e)return e}}addToPath(e,t,n,r,i){let a=e.lastComponent;return a&&!i.oneChangePerToken&&a.added===t&&a.removed===n?{oldPos:e.oldPos+r,lastComponent:{count:a.count+1,added:t,removed:n,previousComponent:a.previousComponent}}:{oldPos:e.oldPos+r,lastComponent:{count:1,added:t,removed:n,previousComponent:a}}}extractCommon(e,t,n,r,i){let a=t.length,o=n.length,s=e.oldPos,c=s-r,l=0;for(;c+1<a&&s+1<o&&this.equals(n[s+1],t[c+1],i);)c++,s++,l++,i.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return l&&!i.oneChangePerToken&&(e.lastComponent={count:l,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=s,c}equals(e,t,n){return n.comparator?n.comparator(e,t):e===t||!!n.ignoreCase&&e.toLowerCase()===t.toLowerCase()}removeEmpty(e){let t=[];for(let n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}castInput(e,t){return e}tokenize(e,t){return Array.from(e)}join(e){return e.join(``)}postProcess(e,t){return e}get useLongestToken(){return!1}buildValues(e,t,n){let r=[],i;for(;e;)r.push(e),i=e.previousComponent,delete e.previousComponent,e=i;r.reverse();let a=r.length,o=0,s=0,c=0;for(;o<a;o++){let e=r[o];if(e.removed)e.value=this.join(n.slice(c,c+e.count)),c+=e.count;else{if(!e.added&&this.useLongestToken){let r=t.slice(s,s+e.count);r=r.map(function(e,t){let r=n[c+t];return r.length>e.length?r:e}),e.value=this.join(r)}else e.value=this.join(t.slice(s,s+e.count));s+=e.count,e.added||(c+=e.count)}}return r}};new class extends s{};function c(e,t){let n;for(n=0;n<e.length&&n<t.length;n++)if(e[n]!=t[n])return e.slice(0,n);return e.slice(0,n)}function l(e,t){let n;if(!e||!t||e[e.length-1]!=t[t.length-1])return``;for(n=0;n<e.length&&n<t.length;n++)if(e[e.length-(n+1)]!=t[t.length-(n+1)])return e.slice(-n);return e.slice(-n)}function u(e,t,n){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return n+e.slice(t.length)}function d(e,t,n){if(!t)return e+n;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+n}function f(e,t){return u(e,t,``)}function p(e,t){return d(e,t,``)}function m(e,t){return t.slice(0,h(e,t))}function h(e,t){let n=0;e.length>t.length&&(n=e.length-t.length);let r=t.length;e.length<t.length&&(r=e.length);let i=Array(r),a=0;i[0]=0;for(let e=1;e<r;e++){for(t[e]==t[a]?i[e]=i[a]:i[e]=a;a>0&&t[e]!=t[a];)a=i[a];t[e]==t[a]&&a++}a=0;for(let r=n;r<e.length;r++){for(;a>0&&e[r]!=t[a];)a=i[a];e[r]==t[a]&&a++}return a}function g(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function _(e){let t=e.match(/^\s*/);return t?t[0]:``}var ee=`a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}`,te=RegExp(`[${ee}]+|\\s+|[^${ee}]`,`ug`),ne=new class extends s{equals(e,t,n){return n.ignoreCase&&(e=e.toLowerCase(),t=t.toLowerCase()),e.trim()===t.trim()}tokenize(e,t={}){let n;if(t.intlSegmenter){let r=t.intlSegmenter;if(r.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);n=[];for(let t of Array.from(r.segment(e))){let e=t.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(e)?n[n.length-1]+=e:n.push(e)}}else n=e.match(te)||[];let r=[],i=null;return n.forEach(e=>{/\s/.test(e)?i==null?r.push(e):r.push(r.pop()+e):i!=null&&/\s/.test(i)?r[r.length-1]==i?r.push(r.pop()+e):r.push(i+e):r.push(e),i=e}),r}join(e){return e.map((e,t)=>t==0?e:e.replace(/^\s+/,``)).join(``)}postProcess(e,t){if(!e||t.oneChangePerToken)return e;let n=null,r=null,i=null;return e.forEach(e=>{e.added?r=e:e.removed?i=e:((r||i)&&ie(n,i,r,e),n=e,r=null,i=null)}),(r||i)&&ie(n,i,r,null),e}};function re(e,t,n){return n?.ignoreWhitespace!=null&&!n.ignoreWhitespace?oe(e,t,n):ne.diff(e,t,n)}function ie(e,t,n,r){if(t&&n){let i=_(t.value),a=g(t.value),o=_(n.value),s=g(n.value);if(e){let r=c(i,o);e.value=d(e.value,o,r),t.value=f(t.value,r),n.value=f(n.value,r)}if(r){let e=l(a,s);r.value=u(r.value,s,e),t.value=p(t.value,e),n.value=p(n.value,e)}}else if(n){if(e){let e=_(n.value);n.value=n.value.substring(e.length)}if(r){let e=_(r.value);r.value=r.value.substring(e.length)}}else if(e&&r){let n=_(r.value),i=_(t.value),a=g(t.value),o=c(n,i);t.value=f(t.value,o);let s=l(f(n,o),a);t.value=p(t.value,s),r.value=u(r.value,n,s),e.value=d(e.value,n,n.slice(0,n.length-s.length))}else if(r){let e=_(r.value),n=m(g(t.value),e);t.value=p(t.value,n)}else if(e){let n=m(g(e.value),_(t.value));t.value=f(t.value,n)}}var ae=new class extends s{tokenize(e){let t=RegExp(`(\\r?\\n)|[${ee}]+|[^\\S\\n\\r]+|[^${ee}]`,`ug`);return e.match(t)||[]}};function oe(e,t,n){return ae.diff(e,t,n)}var se=new class extends s{constructor(){super(...arguments),this.tokenize=le}equals(e,t,n){return n.ignoreWhitespace?((!n.newlineIsToken||!e.includes(`
`))&&(e=e.trim()),(!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(e.endsWith(`
`)&&(e=e.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(e,t,n)}};function ce(e,t,n){return se.diff(e,t,n)}function le(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));let n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let e=0;e<r.length;e++){let i=r[e];e%2&&!t.newlineIsToken?n[n.length-1]+=i:n.push(i)}return n}function ue(e){return e==`.`||e==`!`||e==`?`}new class extends s{tokenize(e){let t=[],n=0;for(let r=0;r<e.length;r++){if(r==e.length-1){t.push(e.slice(n));break}if(ue(e[r])&&e[r+1].match(/\s/)){for(t.push(e.slice(n,r+1)),r=n=r+1;e[r+1]?.match(/\s/);)r++;t.push(e.slice(n,r+1)),n=r+1}}return t}},new class extends s{tokenize(e){return e.split(/([{}:;,]|\s+)/)}},new class extends s{constructor(){super(...arguments),this.tokenize=le}get useLongestToken(){return!0}castInput(e,t){let{undefinedReplacement:n,stringifyReplacer:r=(e,t)=>t===void 0?n:t}=t;return typeof e==`string`?e:JSON.stringify(de(e,null,null,r),null,`  `)}equals(e,t,n){return super.equals(e.replace(/,([\r\n])/g,`$1`),t.replace(/,([\r\n])/g,`$1`),n)}};function de(e,t,n,r,i){t||=[],n||=[],r&&(e=r(i===void 0?``:i,e));let a;for(a=0;a<t.length;a+=1)if(t[a]===e)return n[a];let o;if(Object.prototype.toString.call(e)===`[object Array]`){for(t.push(e),o=Array(e.length),n.push(o),a=0;a<e.length;a+=1)o[a]=de(e[a],t,n,r,String(a));return t.pop(),n.pop(),o}if(e&&e.toJSON&&(e=e.toJSON()),typeof e==`object`&&e){t.push(e),o={},n.push(o);let i=[],s;for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&i.push(s);for(i.sort(),a=0;a<i.length;a+=1)s=i[a],o[s]=de(e[s],t,n,r,s);t.pop(),n.pop()}else o=e;return o}new class extends s{tokenize(e){return e.slice()}join(e){return e}removeEmpty(e){return e}};function fe(e,t){return pe(e,new Map,t)}function pe(e,t,n){if(e&&typeof e==`object`&&!Array.isArray(e)&&e.constructor===Object){if(t.has(e))return t.get(e);let r={};return t.set(e,r),Object.entries(e).sort((e,t)=>n?n({key:e[0],value:e[1]},{key:t[0],value:t[1]}):e[0].localeCompare(t[0])).forEach(([e,i])=>{r[e]=pe(i,t,n)}),r}else return e}var me=t(n(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):n.JSON5=r()})(e,(function(){function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}var t=e(function(e){var t=e.exports=typeof window<`u`&&window.Math==Math?window:typeof self<`u`&&self.Math==Math?self:Function(`return this`)();typeof __g==`number`&&(__g=t)}),n=e(function(e){var t=e.exports={version:`2.6.5`};typeof __e==`number`&&(__e=t)});n.version;var r=function(e){return typeof e==`object`?e!==null:typeof e==`function`},i=function(e){if(!r(e))throw TypeError(e+` is not an object!`);return e},a=function(e){try{return!!e()}catch{return!0}},o=!a(function(){return Object.defineProperty({},`a`,{get:function(){return 7}}).a!=7}),s=t.document,c=r(s)&&r(s.createElement),l=function(e){return c?s.createElement(e):{}},u=!o&&!a(function(){return Object.defineProperty(l(`div`),`a`,{get:function(){return 7}}).a!=7}),d=function(e,t){if(!r(e))return e;var n,i;if(t&&typeof(n=e.toString)==`function`&&!r(i=n.call(e))||typeof(n=e.valueOf)==`function`&&!r(i=n.call(e))||!t&&typeof(n=e.toString)==`function`&&!r(i=n.call(e)))return i;throw TypeError(`Can't convert object to primitive value`)},f=Object.defineProperty,p={f:o?Object.defineProperty:function(e,t,n){if(i(e),t=d(t,!0),i(n),u)try{return f(e,t,n)}catch{}if(`get`in n||`set`in n)throw TypeError(`Accessors not supported!`);return`value`in n&&(e[t]=n.value),e}},m=function(e,t){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:t}},h=o?function(e,t,n){return p.f(e,t,m(1,n))}:function(e,t,n){return e[t]=n,e},g={}.hasOwnProperty,_=function(e,t){return g.call(e,t)},ee=0,te=Math.random(),ne=function(e){return`Symbol(${e===void 0?``:e})_${(++ee+te).toString(36)}`},re=!1,ie=e(function(e){var r=`__core-js_shared__`,i=t[r]||(t[r]={});(e.exports=function(e,t){return i[e]||(i[e]=t===void 0?{}:t)})(`versions`,[]).push({version:n.version,mode:re?`pure`:`global`,copyright:`© 2019 Denis Pushkarev (zloirock.ru)`})})(`native-function-to-string`,Function.toString),ae=e(function(e){var r=ne(`src`),i=`toString`,a=(``+ie).split(i);n.inspectSource=function(e){return ie.call(e)},(e.exports=function(e,n,i,o){var s=typeof i==`function`;s&&(_(i,`name`)||h(i,`name`,n)),e[n]!==i&&(s&&(_(i,r)||h(i,r,e[n]?``+e[n]:a.join(String(n)))),e===t?e[n]=i:o?e[n]?e[n]=i:h(e,n,i):(delete e[n],h(e,n,i)))})(Function.prototype,i,function(){return typeof this==`function`&&this[r]||ie.call(this)})}),oe=function(e){if(typeof e!=`function`)throw TypeError(e+` is not a function!`);return e},se=function(e,t,n){if(oe(e),t===void 0)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}},ce=`prototype`,le=function(e,r,i){var a=e&le.F,o=e&le.G,s=e&le.S,c=e&le.P,l=e&le.B,u=o?t:s?t[r]||(t[r]={}):(t[r]||{})[ce],d=o?n:n[r]||(n[r]={}),f=d[ce]||(d[ce]={}),p,m,g,_;for(p in o&&(i=r),i)m=!a&&u&&u[p]!==void 0,g=(m?u:i)[p],_=l&&m?se(g,t):c&&typeof g==`function`?se(Function.call,g):g,u&&ae(u,p,g,e&le.U),d[p]!=g&&h(d,p,_),c&&f[p]!=g&&(f[p]=g)};t.core=n,le.F=1,le.G=2,le.S=4,le.P=8,le.B=16,le.W=32,le.U=64,le.R=128;var ue=le,de=Math.ceil,fe=Math.floor,pe=function(e){return isNaN(e=+e)?0:(e>0?fe:de)(e)},me=function(e){if(e==null)throw TypeError(`Can't call method on  `+e);return e},he=function(e){return function(t,n){var r=String(me(t)),i=pe(n),a=r.length,o,s;return i<0||i>=a?e?``:void 0:(o=r.charCodeAt(i),o<55296||o>56319||i+1===a||(s=r.charCodeAt(i+1))<56320||s>57343?e?r.charAt(i):o:e?r.slice(i,i+2):(o-55296<<10)+(s-56320)+65536)}}(!1);ue(ue.P,`String`,{codePointAt:function(e){return he(this,e)}}),n.String.codePointAt;var ge=Math.max,v=Math.min,y=function(e,t){return e=pe(e),e<0?ge(e+t,0):v(e,t)},_e=String.fromCharCode,ve=String.fromCodePoint;ue(ue.S+ue.F*(!!ve&&ve.length!=1),`String`,{fromCodePoint:function(e){for(var t=arguments,n=[],r=arguments.length,i=0,a;r>i;){if(a=+t[i++],y(a,1114111)!==a)throw RangeError(a+` is not a valid code point`);n.push(a<65536?_e(a):_e(((a-=65536)>>10)+55296,a%1024+56320))}return n.join(``)}}),n.String.fromCodePoint;var ye={Space_Separator:/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,ID_Start:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,ID_Continue:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/},b={isSpaceSeparator:function(e){return typeof e==`string`&&ye.Space_Separator.test(e)},isIdStartChar:function(e){return typeof e==`string`&&(e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e===`$`||e===`_`||ye.ID_Start.test(e))},isIdContinueChar:function(e){return typeof e==`string`&&(e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e>=`0`&&e<=`9`||e===`$`||e===`_`||e===`‌`||e===`‍`||ye.ID_Continue.test(e))},isDigit:function(e){return typeof e==`string`&&/[0-9]/.test(e)},isHexDigit:function(e){return typeof e==`string`&&/[0-9A-Fa-f]/.test(e)}},be,x,xe,Se,Ce,we,Te,Ee,De,Oe=function(e,t){be=String(e),x=`start`,xe=[],Se=0,Ce=1,we=0,Te=void 0,Ee=void 0,De=void 0;do Te=C(),Be[x]();while(Te.type!==`eof`);return typeof t==`function`?ke({"":De},``,t):De};function ke(e,t,n){var r=e[t];if(typeof r==`object`&&r)if(Array.isArray(r))for(var i=0;i<r.length;i++){var a=String(i),o=ke(r,a,n);o===void 0?delete r[a]:Object.defineProperty(r,a,{value:o,writable:!0,enumerable:!0,configurable:!0})}else for(var s in r){var c=ke(r,s,n);c===void 0?delete r[s]:Object.defineProperty(r,s,{value:c,writable:!0,enumerable:!0,configurable:!0})}return n.call(e,t,r)}var Ae,S,je,Me,Ne;function C(){for(Ae=`default`,S=``,je=!1,Me=1;;){Ne=w();var e=Pe[Ae]();if(e)return e}}function w(){if(be[Se])return String.fromCodePoint(be.codePointAt(Se))}function T(){var e=w();return e===`
`?(Ce++,we=0):e?we+=e.length:we++,e&&(Se+=e.length),e}var Pe={default:function(){switch(Ne){case`	`:case`\v`:case`\f`:case` `:case`\xA0`:case`﻿`:case`
`:case`\r`:case`\u2028`:case`\u2029`:T();return;case`/`:T(),Ae=`comment`;return;case void 0:return T(),Fe(`eof`)}if(b.isSpaceSeparator(Ne)){T();return}return Pe[x]()},comment:function(){switch(Ne){case`*`:T(),Ae=`multiLineComment`;return;case`/`:T(),Ae=`singleLineComment`;return}throw Ue(T())},multiLineComment:function(){switch(Ne){case`*`:T(),Ae=`multiLineCommentAsterisk`;return;case void 0:throw Ue(T())}T()},multiLineCommentAsterisk:function(){switch(Ne){case`*`:T();return;case`/`:T(),Ae=`default`;return;case void 0:throw Ue(T())}T(),Ae=`multiLineComment`},singleLineComment:function(){switch(Ne){case`
`:case`\r`:case`\u2028`:case`\u2029`:T(),Ae=`default`;return;case void 0:return T(),Fe(`eof`)}T()},value:function(){switch(Ne){case`{`:case`[`:return Fe(`punctuator`,T());case`n`:return T(),Ie(`ull`),Fe(`null`,null);case`t`:return T(),Ie(`rue`),Fe(`boolean`,!0);case`f`:return T(),Ie(`alse`),Fe(`boolean`,!1);case`-`:case`+`:T()===`-`&&(Me=-1),Ae=`sign`;return;case`.`:S=T(),Ae=`decimalPointLeading`;return;case`0`:S=T(),Ae=`zero`;return;case`1`:case`2`:case`3`:case`4`:case`5`:case`6`:case`7`:case`8`:case`9`:S=T(),Ae=`decimalInteger`;return;case`I`:return T(),Ie(`nfinity`),Fe(`numeric`,1/0);case`N`:return T(),Ie(`aN`),Fe(`numeric`,NaN);case`"`:case`'`:je=T()===`"`,S=``,Ae=`string`;return}throw Ue(T())},identifierNameStartEscape:function(){if(Ne!==`u`)throw Ue(T());T();var e=ze();switch(e){case`$`:case`_`:break;default:if(!b.isIdStartChar(e))throw We();break}S+=e,Ae=`identifierName`},identifierName:function(){switch(Ne){case`$`:case`_`:case`‌`:case`‍`:S+=T();return;case`\\`:T(),Ae=`identifierNameEscape`;return}if(b.isIdContinueChar(Ne)){S+=T();return}return Fe(`identifier`,S)},identifierNameEscape:function(){if(Ne!==`u`)throw Ue(T());T();var e=ze();switch(e){case`$`:case`_`:case`‌`:case`‍`:break;default:if(!b.isIdContinueChar(e))throw We();break}S+=e,Ae=`identifierName`},sign:function(){switch(Ne){case`.`:S=T(),Ae=`decimalPointLeading`;return;case`0`:S=T(),Ae=`zero`;return;case`1`:case`2`:case`3`:case`4`:case`5`:case`6`:case`7`:case`8`:case`9`:S=T(),Ae=`decimalInteger`;return;case`I`:return T(),Ie(`nfinity`),Fe(`numeric`,Me*(1/0));case`N`:return T(),Ie(`aN`),Fe(`numeric`,NaN)}throw Ue(T())},zero:function(){switch(Ne){case`.`:S+=T(),Ae=`decimalPoint`;return;case`e`:case`E`:S+=T(),Ae=`decimalExponent`;return;case`x`:case`X`:S+=T(),Ae=`hexadecimal`;return}return Fe(`numeric`,Me*0)},decimalInteger:function(){switch(Ne){case`.`:S+=T(),Ae=`decimalPoint`;return;case`e`:case`E`:S+=T(),Ae=`decimalExponent`;return}if(b.isDigit(Ne)){S+=T();return}return Fe(`numeric`,Me*Number(S))},decimalPointLeading:function(){if(b.isDigit(Ne)){S+=T(),Ae=`decimalFraction`;return}throw Ue(T())},decimalPoint:function(){switch(Ne){case`e`:case`E`:S+=T(),Ae=`decimalExponent`;return}if(b.isDigit(Ne)){S+=T(),Ae=`decimalFraction`;return}return Fe(`numeric`,Me*Number(S))},decimalFraction:function(){switch(Ne){case`e`:case`E`:S+=T(),Ae=`decimalExponent`;return}if(b.isDigit(Ne)){S+=T();return}return Fe(`numeric`,Me*Number(S))},decimalExponent:function(){switch(Ne){case`+`:case`-`:S+=T(),Ae=`decimalExponentSign`;return}if(b.isDigit(Ne)){S+=T(),Ae=`decimalExponentInteger`;return}throw Ue(T())},decimalExponentSign:function(){if(b.isDigit(Ne)){S+=T(),Ae=`decimalExponentInteger`;return}throw Ue(T())},decimalExponentInteger:function(){if(b.isDigit(Ne)){S+=T();return}return Fe(`numeric`,Me*Number(S))},hexadecimal:function(){if(b.isHexDigit(Ne)){S+=T(),Ae=`hexadecimalInteger`;return}throw Ue(T())},hexadecimalInteger:function(){if(b.isHexDigit(Ne)){S+=T();return}return Fe(`numeric`,Me*Number(S))},string:function(){switch(Ne){case`\\`:T(),S+=Le();return;case`"`:if(je)return T(),Fe(`string`,S);S+=T();return;case`'`:if(!je)return T(),Fe(`string`,S);S+=T();return;case`
`:case`\r`:throw Ue(T());case`\u2028`:case`\u2029`:Ge(Ne);break;case void 0:throw Ue(T())}S+=T()},start:function(){switch(Ne){case`{`:case`[`:return Fe(`punctuator`,T())}Ae=`value`},beforePropertyName:function(){switch(Ne){case`$`:case`_`:S=T(),Ae=`identifierName`;return;case`\\`:T(),Ae=`identifierNameStartEscape`;return;case`}`:return Fe(`punctuator`,T());case`"`:case`'`:je=T()===`"`,Ae=`string`;return}if(b.isIdStartChar(Ne)){S+=T(),Ae=`identifierName`;return}throw Ue(T())},afterPropertyName:function(){if(Ne===`:`)return Fe(`punctuator`,T());throw Ue(T())},beforePropertyValue:function(){Ae=`value`},afterPropertyValue:function(){switch(Ne){case`,`:case`}`:return Fe(`punctuator`,T())}throw Ue(T())},beforeArrayValue:function(){if(Ne===`]`)return Fe(`punctuator`,T());Ae=`value`},afterArrayValue:function(){switch(Ne){case`,`:case`]`:return Fe(`punctuator`,T())}throw Ue(T())},end:function(){throw Ue(T())}};function Fe(e,t){return{type:e,value:t,line:Ce,column:we}}function Ie(e){for(var t=0,n=e;t<n.length;t+=1){var r=n[t];if(w()!==r)throw Ue(T());T()}}function Le(){switch(w()){case`b`:return T(),`\b`;case`f`:return T(),`\f`;case`n`:return T(),`
`;case`r`:return T(),`\r`;case`t`:return T(),`	`;case`v`:return T(),`\v`;case`0`:if(T(),b.isDigit(w()))throw Ue(T());return`\0`;case`x`:return T(),Re();case`u`:return T(),ze();case`
`:case`\u2028`:case`\u2029`:return T(),``;case`\r`:return T(),w()===`
`&&T(),``;case`1`:case`2`:case`3`:case`4`:case`5`:case`6`:case`7`:case`8`:case`9`:throw Ue(T());case void 0:throw Ue(T())}return T()}function Re(){var e=``,t=w();if(!b.isHexDigit(t)||(e+=T(),t=w(),!b.isHexDigit(t)))throw Ue(T());return e+=T(),String.fromCodePoint(parseInt(e,16))}function ze(){for(var e=``,t=4;t-- >0;){var n=w();if(!b.isHexDigit(n))throw Ue(T());e+=T()}return String.fromCodePoint(parseInt(e,16))}var Be={start:function(){if(Te.type===`eof`)throw E();Ve()},beforePropertyName:function(){switch(Te.type){case`identifier`:case`string`:Ee=Te.value,x=`afterPropertyName`;return;case`punctuator`:He();return;case`eof`:throw E()}},afterPropertyName:function(){if(Te.type===`eof`)throw E();x=`beforePropertyValue`},beforePropertyValue:function(){if(Te.type===`eof`)throw E();Ve()},beforeArrayValue:function(){if(Te.type===`eof`)throw E();if(Te.type===`punctuator`&&Te.value===`]`){He();return}Ve()},afterPropertyValue:function(){if(Te.type===`eof`)throw E();switch(Te.value){case`,`:x=`beforePropertyName`;return;case`}`:He()}},afterArrayValue:function(){if(Te.type===`eof`)throw E();switch(Te.value){case`,`:x=`beforeArrayValue`;return;case`]`:He()}},end:function(){}};function Ve(){var e;switch(Te.type){case`punctuator`:switch(Te.value){case`{`:e={};break;case`[`:e=[];break}break;case`null`:case`boolean`:case`numeric`:case`string`:e=Te.value;break}if(De===void 0)De=e;else{var t=xe[xe.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,Ee,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(typeof e==`object`&&e)xe.push(e),x=Array.isArray(e)?`beforeArrayValue`:`beforePropertyName`;else{var n=xe[xe.length-1];x=n==null?`end`:Array.isArray(n)?`afterArrayValue`:`afterPropertyValue`}}function He(){xe.pop();var e=xe[xe.length-1];x=e==null?`end`:Array.isArray(e)?`afterArrayValue`:`afterPropertyValue`}function Ue(e){return qe(e===void 0?`JSON5: invalid end of input at `+Ce+`:`+we:`JSON5: invalid character '`+Ke(e)+`' at `+Ce+`:`+we)}function E(){return qe(`JSON5: invalid end of input at `+Ce+`:`+we)}function We(){return we-=5,qe(`JSON5: invalid identifier character at `+Ce+`:`+we)}function Ge(e){console.warn(`JSON5: '`+Ke(e)+`' in strings is not valid ECMAScript; consider escaping`)}function Ke(e){var t={"'":`\\'`,'"':`\\"`,"\\":`\\\\`,"\b":`\\b`,"\f":`\\f`,"\n":`\\n`,"\r":`\\r`,"	":`\\t`,"\v":`\\v`,"\0":`\\0`,"\u2028":`\\u2028`,"\u2029":`\\u2029`};if(t[e])return t[e];if(e<` `){var n=e.charCodeAt(0).toString(16);return`\\x`+(`00`+n).substring(n.length)}return e}function qe(e){var t=SyntaxError(e);return t.lineNumber=Ce,t.columnNumber=we,t}return{parse:Oe,stringify:function(e,t,n){var r=[],i=``,a,o,s=``,c;if(typeof t==`object`&&t&&!Array.isArray(t)&&(n=t.space,c=t.quote,t=t.replacer),typeof t==`function`)o=t;else if(Array.isArray(t)){a=[];for(var l=0,u=t;l<u.length;l+=1){var d=u[l],f=void 0;typeof d==`string`?f=d:(typeof d==`number`||d instanceof String||d instanceof Number)&&(f=String(d)),f!==void 0&&a.indexOf(f)<0&&a.push(f)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n==`number`?n>0&&(n=Math.min(10,Math.floor(n)),s=`          `.substr(0,n)):typeof n==`string`&&(s=n.substr(0,10)),p(``,{"":e});function p(e,t){var n=t[e];switch(n!=null&&(typeof n.toJSON5==`function`?n=n.toJSON5(e):typeof n.toJSON==`function`&&(n=n.toJSON(e))),o&&(n=o.call(t,e,n)),n instanceof Number?n=Number(n):n instanceof String?n=String(n):n instanceof Boolean&&(n=n.valueOf()),n){case null:return`null`;case!0:return`true`;case!1:return`false`}if(typeof n==`string`)return m(n,!1);if(typeof n==`number`)return String(n);if(typeof n==`object`)return Array.isArray(n)?_(n):h(n)}function m(e){for(var t={"'":.1,'"':.2},n={"'":`\\'`,'"':`\\"`,"\\":`\\\\`,"\b":`\\b`,"\f":`\\f`,"\n":`\\n`,"\r":`\\r`,"	":`\\t`,"\v":`\\v`,"\0":`\\0`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},r=``,i=0;i<e.length;i++){var a=e[i];switch(a){case`'`:case`"`:t[a]++,r+=a;continue;case`\0`:if(b.isDigit(e[i+1])){r+=`\\x00`;continue}}if(n[a]){r+=n[a];continue}if(a<` `){var o=a.charCodeAt(0).toString(16);r+=`\\x`+(`00`+o).substring(o.length);continue}r+=a}var s=c||Object.keys(t).reduce(function(e,n){return t[e]<t[n]?e:n});return r=r.replace(new RegExp(s,`g`),n[s]),s+r+s}function h(e){if(r.indexOf(e)>=0)throw TypeError(`Converting circular structure to JSON5`);r.push(e);var t=i;i+=s;for(var n=a||Object.keys(e),o=[],c=0,l=n;c<l.length;c+=1){var u=l[c],d=p(u,e);if(d!==void 0){var f=g(u)+`:`;s!==``&&(f+=` `),f+=d,o.push(f)}}var m;if(o.length===0)m=`{}`;else{var h;if(s===``)h=o.join(`,`),m=`{`+h+`}`;else{var _=`,
`+i;h=o.join(_),m=`{
`+i+h+`,
`+t+`}`}}return r.pop(),i=t,m}function g(e){if(e.length===0)return m(e,!0);var t=String.fromCodePoint(e.codePointAt(0));if(!b.isIdStartChar(t))return m(e,!0);for(var n=t.length;n<e.length;n++)if(!b.isIdContinueChar(String.fromCodePoint(e.codePointAt(n))))return m(e,!0);return e}function _(e){if(r.indexOf(e)>=0)throw TypeError(`Converting circular structure to JSON5`);r.push(e);var t=i;i+=s;for(var n=[],a=0;a<e.length;a++){var o=p(String(a),e);n.push(o===void 0?`null`:o)}var c;if(n.length===0)c=`[]`;else if(s===``)c=`[`+n.join(`,`)+`]`;else{var l=`,
`+i,u=n.join(l);c=`[
`+i+u+`,
`+t+`]`}return r.pop(),i=t,c}}}}))}))(),1),he=`__@@augment-vir-undefined-sentinel@@__`,ge=RegExp(`['"]${he}['"]`);function v(e,t){if(typeof e==`string`)return e;try{return me.default.stringify(e,(e,t)=>t===void 0?he:typeof t==`bigint`?Number(t):t,t||void 0).split(ge).join(`undefined`)}catch{return String(e)}}typeof window<`u`&&window.document;var y=typeof process<`u`&&process.versions!=null&&process.versions.node!=null;typeof self==`object`&&self.constructor&&self.constructor.name,typeof window<`u`&&window.name===`nodejs`||typeof navigator<`u`&&`userAgent`in navigator&&typeof navigator.userAgent==`string`&&(navigator.userAgent.includes(`Node.js`)||navigator.userAgent.includes(`jsdom`)),typeof Deno<`u`&&Deno.version!==void 0&&Deno.version.deno,typeof process<`u`&&process.versions!=null&&process.versions.bun;var _e;(function(e){e.Node=`node`,e.Web=`web`})(_e||={});function ve(){return y?_e.Node:_e.Web}var ye=ve();function b(e){return ye===e}function be(e){return e[ye]()}function x(e,t){let n=typeof t==`string`&&typeof e==`string`,r=typeof t!=`string`||typeof e!=`string`,i=Ce(r,(r?ce:re)([n?``:`
`,v(t&&typeof t==`object`&&!Array.isArray(t)?fe(t):t,4),`
`].join(``),[n?``:`
`,v(e&&typeof e==`object`&&!Array.isArray(e)?fe(e):e,4),`
`].join(``))),a=b(_e.Node);return[[a?xe.Green:``,` +added (unexpected, added in actual)`,a?xe.Red:``,` -missing (expected, missing from actual)`,a?xe.Reset:``].join(``),n?`

`:`
`,i].join(``)}var xe;(function(e){e.Green=`\x1B[32m`,e.Red=`\x1B[31m`,e.Reset=`\x1B[0m`})(xe||={});var Se;(function(e){e.Added=`+`,e.Removed=`-`})(Se||={});function Ce(e,t){return e?t.flatMap(e=>e.value.split(`
`).map(t=>we(t,e)).join(`
`)).join(``):t.map(e=>we(void 0,e)).join(``)}function we(e,t){if(e!=null&&!e)return``;let n=b(_e.Node),r=t.added?Se.Added:t.removed?Se.Removed:e==null?``:` `,i=t.added?xe.Green:t.removed?xe.Red:xe.Reset;return[n?i:``,r,e??t.value,xe.Reset].join(``)}function Te(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ee(e){return Te(e).filter(e=>isNaN(Number(e)))}function De(e){return Ee(e).map(t=>e[t])}var Oe=[`.`,`:`,`;`,`,`,`?`,`!`];RegExp(`[${Oe.join(``)}]+`);var ke=RegExp(`[${Oe.join(``)}]+$`);function Ae(e){return e.replace(ke,``)}function S(e){return e==null||e===``||e===`undefined`||e===`null`?``:typeof e==`string`?e:e instanceof Error?e.message:typeof e==`object`&&`message`in e?String(e.message):v(e)}function je(...e){let t=e.map(e=>S(e)).filter(e=>!!Ae(e)),n=t[t.length-1]?.endsWith(`.`),r=t.map(e=>Ae(S(e)));return(r.length<2?r[0]||``:r.join(`: `))+(n?`.`:``)}function Me(e){return e instanceof Error?e:Error(S(e))}function Ne(e,t){let n=Me(e),r=je(t,n.message);try{return n.message=r,n}catch{return Error(r,{cause:e})}}var C;(function(e){e[e.Continue=100]=`Continue`,e[e.SwitchingProtocols=101]=`SwitchingProtocols`,e[e.Processing=102]=`Processing`,e[e.EarlyHints=103]=`EarlyHints`,e[e.Ok=200]=`Ok`,e[e.Created=201]=`Created`,e[e.Accepted=202]=`Accepted`,e[e.NonAuthoritativeInformation=203]=`NonAuthoritativeInformation`,e[e.NoContent=204]=`NoContent`,e[e.ResetContent=205]=`ResetContent`,e[e.PartialContent=206]=`PartialContent`,e[e.MultiStatus=207]=`MultiStatus`,e[e.AlreadyReported=208]=`AlreadyReported`,e[e.ImUsed=226]=`ImUsed`,e[e.MultipleChoices=300]=`MultipleChoices`,e[e.MovedPermanently=301]=`MovedPermanently`,e[e.Found=302]=`Found`,e[e.SeeOther=303]=`SeeOther`,e[e.NotModified=304]=`NotModified`,e[e.UseProxy=305]=`UseProxy`,e[e.Unused=306]=`Unused`,e[e.TemporaryRedirect=307]=`TemporaryRedirect`,e[e.PermanentRedirect=308]=`PermanentRedirect`,e[e.BadRequest=400]=`BadRequest`,e[e.Unauthorized=401]=`Unauthorized`,e[e.PaymentRequired=402]=`PaymentRequired`,e[e.Forbidden=403]=`Forbidden`,e[e.NotFound=404]=`NotFound`,e[e.MethodNotAllowed=405]=`MethodNotAllowed`,e[e.NotAcceptable=406]=`NotAcceptable`,e[e.ProxyAuthenticationRequired=407]=`ProxyAuthenticationRequired`,e[e.RequestTimeout=408]=`RequestTimeout`,e[e.Conflict=409]=`Conflict`,e[e.Gone=410]=`Gone`,e[e.LengthRequired=411]=`LengthRequired`,e[e.PreconditionFailed=412]=`PreconditionFailed`,e[e.PayloadTooLarge=413]=`PayloadTooLarge`,e[e.UriTooLong=414]=`UriTooLong`,e[e.UnsupportedMediaType=415]=`UnsupportedMediaType`,e[e.RangeNotSatisfiable=416]=`RangeNotSatisfiable`,e[e.ExpectationFailed=417]=`ExpectationFailed`,e[e.ImATeapot=418]=`ImATeapot`,e[e.MisdirectedRequest=421]=`MisdirectedRequest`,e[e.UnprocessableContent=422]=`UnprocessableContent`,e[e.Locked=423]=`Locked`,e[e.FailedDependency=424]=`FailedDependency`,e[e.TooEarly=425]=`TooEarly`,e[e.UpgradeRequired=426]=`UpgradeRequired`,e[e.PreconditionRequired=428]=`PreconditionRequired`,e[e.TooManyRequests=429]=`TooManyRequests`,e[e.RequestHeaderFieldsTooLarge=431]=`RequestHeaderFieldsTooLarge`,e[e.UnavailableForLegalReasons=451]=`UnavailableForLegalReasons`,e[e.InternalServerError=500]=`InternalServerError`,e[e.NotImplemented=501]=`NotImplemented`,e[e.BadGateway=502]=`BadGateway`,e[e.ServiceUnavailable=503]=`ServiceUnavailable`,e[e.GatewayTimeout=504]=`GatewayTimeout`,e[e.HttpVersionNotSupported=505]=`HttpVersionNotSupported`,e[e.VariantAlsoNegotiates=506]=`VariantAlsoNegotiates`,e[e.InsufficientStorage=507]=`InsufficientStorage`,e[e.LoopDetected=508]=`LoopDetected`,e[e.NotExtended=510]=`NotExtended`,e[e.NetworkAuthenticationRequired=511]=`NetworkAuthenticationRequired`})(C||={});var w;(function(e){e.Information=`information`,e.Success=`success`,e.Redirect=`redirect`,e.ClientError=`clientError`,e.ServerError=`serverError`})(w||={}),w.ClientError,w.ServerError,C.Continue,w.Information,C.SwitchingProtocols,w.Information,C.Processing,w.Information,C.EarlyHints,w.Information,C.Ok,w.Success,C.Created,w.Success,C.Accepted,w.Success,C.NonAuthoritativeInformation,w.Success,C.NoContent,w.Success,C.ResetContent,w.Success,C.PartialContent,w.Success,C.MultiStatus,w.Success,C.AlreadyReported,w.Success,C.ImUsed,w.Success,C.MultipleChoices,w.Redirect,C.MovedPermanently,w.Redirect,C.Found,w.Redirect,C.SeeOther,w.Redirect,C.NotModified,w.Redirect,C.UseProxy,w.Redirect,C.Unused,w.Redirect,C.TemporaryRedirect,w.Redirect,C.PermanentRedirect,w.Redirect,C.BadRequest,w.ClientError,C.Unauthorized,w.ClientError,C.PaymentRequired,w.ClientError,C.Forbidden,w.ClientError,C.NotFound,w.ClientError,C.MethodNotAllowed,w.ClientError,C.NotAcceptable,w.ClientError,C.ProxyAuthenticationRequired,w.ClientError,C.RequestTimeout,w.ClientError,C.Conflict,w.ClientError,C.Gone,w.ClientError,C.LengthRequired,w.ClientError,C.PreconditionFailed,w.ClientError,C.PayloadTooLarge,w.ClientError,C.UriTooLong,w.ClientError,C.UnsupportedMediaType,w.ClientError,C.RangeNotSatisfiable,w.ClientError,C.ExpectationFailed,w.ClientError,C.ImATeapot,w.ClientError,C.MisdirectedRequest,w.ClientError,C.UnprocessableContent,w.ClientError,C.Locked,w.ClientError,C.FailedDependency,w.ClientError,C.TooEarly,w.ClientError,C.UpgradeRequired,w.ClientError,C.PreconditionRequired,w.ClientError,C.TooManyRequests,w.ClientError,C.RequestHeaderFieldsTooLarge,w.ClientError,C.UnavailableForLegalReasons,w.ClientError,C.InternalServerError,w.ServerError,C.NotImplemented,w.ServerError,C.BadGateway,w.ServerError,C.ServiceUnavailable,w.ServerError,C.GatewayTimeout,w.ServerError,C.HttpVersionNotSupported,w.ServerError,C.VariantAlsoNegotiates,w.ServerError,C.InsufficientStorage,w.ServerError,C.LoopDetected,w.ServerError,C.NotExtended,w.ServerError,C.NetworkAuthenticationRequired,w.ServerError;var T={[w.Information]:[C.Continue,C.SwitchingProtocols,C.Processing,C.EarlyHints],[w.Success]:[C.Ok,C.Created,C.Accepted,C.NonAuthoritativeInformation,C.NoContent,C.ResetContent,C.PartialContent,C.MultiStatus,C.AlreadyReported,C.ImUsed],[w.Redirect]:[C.MultipleChoices,C.MovedPermanently,C.Found,C.SeeOther,C.NotModified,C.UseProxy,C.Unused,C.TemporaryRedirect,C.PermanentRedirect],[w.ClientError]:[C.BadRequest,C.Unauthorized,C.PaymentRequired,C.Forbidden,C.NotFound,C.MethodNotAllowed,C.NotAcceptable,C.ProxyAuthenticationRequired,C.RequestTimeout,C.Conflict,C.Gone,C.LengthRequired,C.PreconditionFailed,C.PayloadTooLarge,C.UriTooLong,C.UnsupportedMediaType,C.RangeNotSatisfiable,C.ExpectationFailed,C.ImATeapot,C.MisdirectedRequest,C.UnprocessableContent,C.Locked,C.FailedDependency,C.TooEarly,C.UpgradeRequired,C.PreconditionRequired,C.TooManyRequests,C.RequestHeaderFieldsTooLarge,C.UnavailableForLegalReasons],[w.ServerError]:[C.InternalServerError,C.NotImplemented,C.BadGateway,C.ServiceUnavailable,C.GatewayTimeout,C.HttpVersionNotSupported,C.VariantAlsoNegotiates,C.InsufficientStorage,C.LoopDetected,C.NotExtended,C.NetworkAuthenticationRequired]};function Pe({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}var Fe=class{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((e,t)=>{this.resolve=t=>(this.isSettled=!0,e(t)),this.reject=e=>{this.isSettled=!0,t(Me(e))}})}},Ie=class extends Error{},Le=class extends Ie{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}},Re=class extends Ie{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}},ze=class extends Ie{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}},Be=class extends Ie{},Ve=class extends Ie{constructor(e){super(`Invalid unit ${e}`)}},He=class extends Ie{},Ue=class extends Ie{constructor(){super(`Zone is an abstract class`)}},E=`numeric`,We=`short`,Ge=`long`,Ke={year:E,month:E,day:E},qe={year:E,month:We,day:E},Je={year:E,month:We,day:E,weekday:We},Ye={year:E,month:Ge,day:E},Xe={year:E,month:Ge,day:E,weekday:Ge},Ze={hour:E,minute:E},Qe={hour:E,minute:E,second:E},$e={hour:E,minute:E,second:E,timeZoneName:We},et={hour:E,minute:E,second:E,timeZoneName:Ge},tt={hour:E,minute:E,hourCycle:`h23`},nt={hour:E,minute:E,second:E,hourCycle:`h23`},rt={hour:E,minute:E,second:E,hourCycle:`h23`,timeZoneName:We},it={hour:E,minute:E,second:E,hourCycle:`h23`,timeZoneName:Ge},at={year:E,month:E,day:E,hour:E,minute:E},ot={year:E,month:E,day:E,hour:E,minute:E,second:E},st={year:E,month:We,day:E,hour:E,minute:E},ct={year:E,month:We,day:E,hour:E,minute:E,second:E},lt={year:E,month:We,day:E,weekday:We,hour:E,minute:E},ut={year:E,month:Ge,day:E,hour:E,minute:E,timeZoneName:We},dt={year:E,month:Ge,day:E,hour:E,minute:E,second:E,timeZoneName:We},ft={year:E,month:Ge,day:E,weekday:Ge,hour:E,minute:E,timeZoneName:Ge},pt={year:E,month:Ge,day:E,weekday:Ge,hour:E,minute:E,second:E,timeZoneName:Ge},mt=class{get type(){throw new Ue}get name(){throw new Ue}get ianaName(){return this.name}get isUniversal(){throw new Ue}offsetName(e,t){throw new Ue}formatOffset(e,t){throw new Ue}offset(e){throw new Ue}equals(e){throw new Ue}get isValid(){throw new Ue}},ht=null,gt=class e extends mt{static get instance(){return ht===null&&(ht=new e),ht}get type(){return`system`}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:t,locale:n}){return ir(e,t,n)}formatOffset(e,t){return cr(this.offset(e),t)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type===`system`}get isValid(){return!0}},_t=new Map;function vt(e){let t=_t.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(`en-US`,{hour12:!1,timeZone:e,year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`,second:`2-digit`,era:`short`}),_t.set(e,t)),t}var yt={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function bt(e,t){let n=e.format(t).replace(/\u200E/g,``),[,r,i,a,o,s,c,l]=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n);return[a,r,i,o,s,c,l]}function xt(e,t){let n=e.formatToParts(t),r=[];for(let e=0;e<n.length;e++){let{type:t,value:i}=n[e],a=yt[t];t===`era`?r[a]=i:D(a)||(r[a]=parseInt(i,10))}return r}var St=new Map,Ct=class e extends mt{static create(t){let n=St.get(t);return n===void 0&&St.set(t,n=new e(t)),n}static resetCache(){St.clear(),_t.clear()}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat(`en-US`,{timeZone:e}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=e.isValidZone(t)}get type(){return`iana`}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:t,locale:n}){return ir(e,t,n,this.name)}formatOffset(e,t){return cr(this.offset(e),t)}offset(e){if(!this.valid)return NaN;let t=new Date(e);if(isNaN(t))return NaN;let n=vt(this.name),[r,i,a,o,s,c,l]=n.formatToParts?xt(n,t):bt(n,t);o===`BC`&&(r=-Math.abs(r)+1);let u=er({year:r,month:i,day:a,hour:s===24?0:s,minute:c,second:l,millisecond:0}),d=+t,f=d%1e3;return d-=f>=0?f:1e3+f,(u-d)/(60*1e3)}equals(e){return e.type===`iana`&&e.name===this.name}get isValid(){return this.valid}},wt={};function Tt(e,t={}){let n=JSON.stringify([e,t]),r=wt[n];return r||(r=new Intl.ListFormat(e,t),wt[n]=r),r}var Et=new Map;function Dt(e,t={}){let n=JSON.stringify([e,t]),r=Et.get(n);return r===void 0&&(r=new Intl.DateTimeFormat(e,t),Et.set(n,r)),r}var Ot=new Map;function kt(e,t={}){let n=JSON.stringify([e,t]),r=Ot.get(n);return r===void 0&&(r=new Intl.NumberFormat(e,t),Ot.set(n,r)),r}var At=new Map;function jt(e,t={}){let{base:n,...r}=t,i=JSON.stringify([e,r]),a=At.get(i);return a===void 0&&(a=new Intl.RelativeTimeFormat(e,t),At.set(i,a)),a}var Mt=null;function Nt(){return Mt||(Mt=new Intl.DateTimeFormat().resolvedOptions().locale,Mt)}var Pt=new Map;function Ft(e){let t=Pt.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),Pt.set(e,t)),t}var It=new Map;function Lt(e){let t=It.get(e);if(!t){let n=new Intl.Locale(e);t=`getWeekInfo`in n?n.getWeekInfo():n.weekInfo,`minimalDays`in t||(t={...qt,...t}),It.set(e,t)}return t}function Rt(e){let t=e.indexOf(`-x-`);t!==-1&&(e=e.substring(0,t));let n=e.indexOf(`-u-`);if(n===-1)return[e];{let t,r;try{t=Dt(e).resolvedOptions(),r=e}catch{let i=e.substring(0,n);t=Dt(i).resolvedOptions(),r=i}let{numberingSystem:i,calendar:a}=t;return[r,i,a]}}function zt(e,t,n){return n||t?(e.includes(`-u-`)||(e+=`-u`),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`),e):e}function Bt(e){let t=[];for(let n=1;n<=12;n++){let r=Ya.utc(2009,n,1);t.push(e(r))}return t}function Vt(e){let t=[];for(let n=1;n<=7;n++){let r=Ya.utc(2016,11,13+n);t.push(e(r))}return t}function Ht(e,t,n,r){let i=e.listingMode();return i===`error`?null:i===`en`?n(t):r(t)}function Ut(e){return e.numberingSystem&&e.numberingSystem!==`latn`?!1:e.numberingSystem===`latn`||!e.locale||e.locale.startsWith(`en`)||Ft(e.locale).numberingSystem===`latn`}var Wt=class{constructor(e,t,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;let{padTo:r,floor:i,...a}=n;if(!t||Object.keys(a).length>0){let t={useGrouping:!1,...n};n.padTo>0&&(t.minimumIntegerDigits=n.padTo),this.inf=kt(e,t)}}format(e){if(this.inf){let t=this.floor?Math.floor(e):e;return this.inf.format(t)}else return Kn(this.floor?Math.floor(e):Xn(e,3),this.padTo)}},Gt=class{constructor(e,t,n){this.opts=n,this.originalZone=void 0;let r;if(this.opts.timeZone)this.dt=e;else if(e.zone.type===`fixed`){let t=-1*(e.offset/60),n=t>=0?`Etc/GMT+${t}`:`Etc/GMT${t}`;e.offset!==0&&Ct.create(n).valid?(r=n,this.dt=e):(r=`UTC`,this.dt=e.offset===0?e:e.setZone(`UTC`).plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type===`system`?this.dt=e:e.zone.type===`iana`?(this.dt=e,r=e.zone.name):(r=`UTC`,this.dt=e.setZone(`UTC`).plus({minutes:e.offset}),this.originalZone=e.zone);let i={...this.opts};i.timeZone=i.timeZone||r,this.dtf=Dt(t,i)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(``):this.dtf.format(this.dt.toJSDate())}formatToParts(){let e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(e=>{if(e.type===`timeZoneName`){let t=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...e,value:t}}else return e}):e}resolvedOptions(){return this.dtf.resolvedOptions()}},Kt=class{constructor(e,t,n){this.opts={style:`long`,...n},!t&&Ln()&&(this.rtf=jt(e,n))}format(e,t){return this.rtf?this.rtf.format(e,t):Dr(t,e,this.opts.numeric,this.opts.style!==`long`)}formatToParts(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]}},qt={firstDay:1,minimalDays:4,weekend:[6,7]},Jt=class e{static fromOpts(t){return e.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,i,a=!1){let o=t||hn.defaultLocale;return new e(o||(a?`en-US`:Nt()),n||hn.defaultNumberingSystem,r||hn.defaultOutputCalendar,Un(i)||hn.defaultWeekSettings,o)}static resetCache(){Mt=null,Et.clear(),Ot.clear(),At.clear(),Pt.clear(),It.clear()}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return e.create(t,n,r,i)}constructor(e,t,n,r,i){let[a,o,s]=Rt(e);this.locale=a,this.numberingSystem=t||o||null,this.outputCalendar=n||s||null,this.weekSettings=r,this.intl=zt(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached??=Ut(this),this.fastNumbersCached}listingMode(){let e=this.isEnglish(),t=(this.numberingSystem===null||this.numberingSystem===`latn`)&&(this.outputCalendar===null||this.outputCalendar===`gregory`);return e&&t?`en`:`intl`}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:e.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Un(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,t=!1){return Ht(this,e,pr,()=>{let n=this.intl===`ja`||this.intl.startsWith(`ja-`);t&=!n;let r=t?{month:e,day:`numeric`}:{month:e},i=t?`format`:`standalone`;if(!this.monthsCache[i][e]){let t=n?e=>this.dtFormatter(e,r).format():e=>this.extract(e,r,`month`);this.monthsCache[i][e]=Bt(t)}return this.monthsCache[i][e]})}weekdays(e,t=!1){return Ht(this,e,_r,()=>{let n=t?{weekday:e,year:`numeric`,month:`long`,day:`numeric`}:{weekday:e},r=t?`format`:`standalone`;return this.weekdaysCache[r][e]||(this.weekdaysCache[r][e]=Vt(e=>this.extract(e,n,`weekday`))),this.weekdaysCache[r][e]})}meridiems(){return Ht(this,void 0,()=>vr,()=>{if(!this.meridiemCache){let e={hour:`numeric`,hourCycle:`h12`};this.meridiemCache=[Ya.utc(2016,11,13,9),Ya.utc(2016,11,13,19)].map(t=>this.extract(t,e,`dayperiod`))}return this.meridiemCache})}eras(e){return Ht(this,e,Sr,()=>{let t={era:e};return this.eraCache[e]||(this.eraCache[e]=[Ya.utc(-40,1,1),Ya.utc(2017,1,1)].map(e=>this.extract(e,t,`era`))),this.eraCache[e]})}extract(e,t,n){let r=this.dtFormatter(e,t).formatToParts().find(e=>e.type.toLowerCase()===n);return r?r.value:null}numberFormatter(e={}){return new Wt(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,t={}){return new Gt(e,this.intl,t)}relFormatter(e={}){return new Kt(this.intl,this.isEnglish(),e)}listFormatter(e={}){return Tt(this.intl,e)}isEnglish(){return this.locale===`en`||this.locale.toLowerCase()===`en-us`||Ft(this.intl).locale.startsWith(`en-us`)}getWeekSettings(){return this.weekSettings?this.weekSettings:Rn()?Lt(this.locale):qt}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}},Yt=null,Xt=class e extends mt{static get utcInstance(){return Yt===null&&(Yt=new e(0)),Yt}static instance(t){return t===0?e.utcInstance:new e(t)}static parseSpecifier(t){if(t){let n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new e(ar(n[1],n[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return`fixed`}get name(){return this.fixed===0?`UTC`:`UTC${cr(this.fixed,`narrow`)}`}get ianaName(){return this.fixed===0?`Etc/UTC`:`Etc/GMT${cr(-this.fixed,`narrow`)}`}offsetName(){return this.name}formatOffset(e,t){return cr(this.fixed,t)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type===`fixed`&&e.fixed===this.fixed}get isValid(){return!0}},Zt=class extends mt{constructor(e){super(),this.zoneName=e}get type(){return`invalid`}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return``}offset(){return NaN}equals(){return!1}get isValid(){return!1}};function Qt(e,t){if(D(e)||e===null)return t;if(e instanceof mt)return e;if(Fn(e)){let n=e.toLowerCase();return n===`default`?t:n===`local`||n===`system`?gt.instance:n===`utc`||n===`gmt`?Xt.utcInstance:Xt.parseSpecifier(n)||Ct.create(e)}else if(Nn(e))return Xt.instance(e);else if(typeof e==`object`&&`offset`in e&&typeof e.offset==`function`)return e;else return new Zt(e)}var $t={arab:`[٠-٩]`,arabext:`[۰-۹]`,bali:`[᭐-᭙]`,beng:`[০-৯]`,deva:`[०-९]`,fullwide:`[０-９]`,gujr:`[૦-૯]`,hanidec:`[〇|一|二|三|四|五|六|七|八|九]`,khmr:`[០-៩]`,knda:`[೦-೯]`,laoo:`[໐-໙]`,limb:`[᥆-᥏]`,mlym:`[൦-൯]`,mong:`[᠐-᠙]`,mymr:`[၀-၉]`,orya:`[୦-୯]`,tamldec:`[௦-௯]`,telu:`[౦-౯]`,thai:`[๐-๙]`,tibt:`[༠-༩]`,latn:`\\d`},en={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},tn=$t.hanidec.replace(/[\[|\]]/g,``).split(``);function nn(e){let t=parseInt(e,10);if(isNaN(t)){t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(e[n].search($t.hanidec)!==-1)t+=tn.indexOf(e[n]);else for(let e in en){let[n,i]=en[e];r>=n&&r<=i&&(t+=r-n)}}return parseInt(t,10)}else return t}var rn=new Map;function an(){rn.clear()}function on({numberingSystem:e},t=``){let n=e||`latn`,r=rn.get(n);r===void 0&&(r=new Map,rn.set(n,r));let i=r.get(t);return i===void 0&&(i=RegExp(`${$t[n]}${t}`),r.set(t,i)),i}var sn=()=>Date.now(),cn=`system`,ln=null,un=null,dn=null,fn=60,pn,mn=null,hn=class{static get now(){return sn}static set now(e){sn=e}static set defaultZone(e){cn=e}static get defaultZone(){return Qt(cn,gt.instance)}static get defaultLocale(){return ln}static set defaultLocale(e){ln=e}static get defaultNumberingSystem(){return un}static set defaultNumberingSystem(e){un=e}static get defaultOutputCalendar(){return dn}static set defaultOutputCalendar(e){dn=e}static get defaultWeekSettings(){return mn}static set defaultWeekSettings(e){mn=Un(e)}static get twoDigitCutoffYear(){return fn}static set twoDigitCutoffYear(e){fn=e%100}static get throwOnInvalid(){return pn}static set throwOnInvalid(e){pn=e}static resetCaches(){Jt.resetCache(),Ct.resetCache(),Ya.resetCache(),an()}},gn=class{constructor(e,t){this.reason=e,this.explanation=t}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}},_n=[0,31,59,90,120,151,181,212,243,273,304,334],vn=[0,31,60,91,121,152,182,213,244,274,305,335];function yn(e,t){return new gn(`unit out of range`,`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function bn(e,t,n){let r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);let i=r.getUTCDay();return i===0?7:i}function xn(e,t,n){return n+(Zn(e)?vn:_n)[t-1]}function Sn(e,t){let n=Zn(e)?vn:_n,r=n.findIndex(e=>e<t),i=t-n[r];return{month:r+1,day:i}}function Cn(e,t){return(e-t+7)%7+1}function wn(e,t=4,n=1){let{year:r,month:i,day:a}=e,o=xn(r,i,a),s=Cn(bn(r,i,a),n),c=Math.floor((o-s+14-t)/7),l;return c<1?(l=r-1,c=nr(l,t,n)):c>nr(r,t,n)?(l=r+1,c=1):l=r,{weekYear:l,weekNumber:c,weekday:s,...lr(e)}}function Tn(e,t=4,n=1){let{weekYear:r,weekNumber:i,weekday:a}=e,o=Cn(bn(r,1,t),n),s=Qn(r),c=i*7+a-o-7+t,l;c<1?(l=r-1,c+=Qn(l)):c>s?(l=r+1,c-=Qn(r)):l=r;let{month:u,day:d}=Sn(l,c);return{year:l,month:u,day:d,...lr(e)}}function En(e){let{year:t,month:n,day:r}=e;return{year:t,ordinal:xn(t,n,r),...lr(e)}}function Dn(e){let{year:t,ordinal:n}=e,{month:r,day:i}=Sn(t,n);return{year:t,month:r,day:i,...lr(e)}}function On(e,t){if(!D(e.localWeekday)||!D(e.localWeekNumber)||!D(e.localWeekYear)){if(!D(e.weekday)||!D(e.weekNumber)||!D(e.weekYear))throw new Be(`Cannot mix locale-based week fields with ISO-based week fields`);return D(e.localWeekday)||(e.weekday=e.localWeekday),D(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),D(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function kn(e,t=4,n=1){let r=Pn(e.weekYear),i=Wn(e.weekNumber,1,nr(e.weekYear,t,n)),a=Wn(e.weekday,1,7);return r?i?a?!1:yn(`weekday`,e.weekday):yn(`week`,e.weekNumber):yn(`weekYear`,e.weekYear)}function An(e){let t=Pn(e.year),n=Wn(e.ordinal,1,Qn(e.year));return t?n?!1:yn(`ordinal`,e.ordinal):yn(`year`,e.year)}function jn(e){let t=Pn(e.year),n=Wn(e.month,1,12),r=Wn(e.day,1,$n(e.year,e.month));return t?n?r?!1:yn(`day`,e.day):yn(`month`,e.month):yn(`year`,e.year)}function Mn(e){let{hour:t,minute:n,second:r,millisecond:i}=e,a=Wn(t,0,23)||t===24&&n===0&&r===0&&i===0,o=Wn(n,0,59),s=Wn(r,0,59),c=Wn(i,0,999);return a?o?s?c?!1:yn(`millisecond`,i):yn(`second`,r):yn(`minute`,n):yn(`hour`,t)}function D(e){return e===void 0}function Nn(e){return typeof e==`number`}function Pn(e){return typeof e==`number`&&e%1==0}function Fn(e){return typeof e==`string`}function In(e){return Object.prototype.toString.call(e)===`[object Date]`}function Ln(){try{return typeof Intl<`u`&&!!Intl.RelativeTimeFormat}catch{return!1}}function Rn(){try{return typeof Intl<`u`&&!!Intl.Locale&&(`weekInfo`in Intl.Locale.prototype||`getWeekInfo`in Intl.Locale.prototype)}catch{return!1}}function zn(e){return Array.isArray(e)?e:[e]}function Bn(e,t,n){if(e.length!==0)return e.reduce((e,r)=>{let i=[t(r),r];return e&&n(e[0],i[0])===e[0]?e:i},null)[1]}function Vn(e,t){return t.reduce((t,n)=>(t[n]=e[n],t),{})}function Hn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Un(e){if(e==null)return null;if(typeof e!=`object`)throw new He(`Week settings must be an object`);if(!Wn(e.firstDay,1,7)||!Wn(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(e=>!Wn(e,1,7)))throw new He(`Invalid week settings`);return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Wn(e,t,n){return Pn(e)&&e>=t&&e<=n}function Gn(e,t){return e-t*Math.floor(e/t)}function Kn(e,t=2){let n=e<0,r;return r=n?`-`+(``+-e).padStart(t,`0`):(``+e).padStart(t,`0`),r}function qn(e){if(!(D(e)||e===null||e===``))return parseInt(e,10)}function Jn(e){if(!(D(e)||e===null||e===``))return parseFloat(e)}function Yn(e){if(!(D(e)||e===null||e===``)){let t=parseFloat(`0.`+e)*1e3;return Math.floor(t)}}function Xn(e,t,n=`round`){let r=10**t;switch(n){case`expand`:return e>0?Math.ceil(e*r)/r:Math.floor(e*r)/r;case`trunc`:return Math.trunc(e*r)/r;case`round`:return Math.round(e*r)/r;case`floor`:return Math.floor(e*r)/r;case`ceil`:return Math.ceil(e*r)/r;default:throw RangeError(`Value rounding ${n} is out of range`)}}function Zn(e){return e%4==0&&(e%100!=0||e%400==0)}function Qn(e){return Zn(e)?366:365}function $n(e,t){let n=Gn(t-1,12)+1,r=e+(t-n)/12;return n===2?Zn(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function er(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function tr(e,t,n){return-Cn(bn(e,1,t),n)+t-1}function nr(e,t=4,n=1){let r=tr(e,t,n),i=tr(e+1,t,n);return(Qn(e)-r+i)/7}function rr(e){return e>99?e:e>hn.twoDigitCutoffYear?1900+e:2e3+e}function ir(e,t,n,r=null){let i=new Date(e),a={hourCycle:`h23`,year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`};r&&(a.timeZone=r);let o={timeZoneName:t,...a},s=new Intl.DateTimeFormat(n,o).formatToParts(i).find(e=>e.type.toLowerCase()===`timezonename`);return s?s.value:null}function ar(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);let r=parseInt(t,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}function or(e){let t=Number(e);if(typeof e==`boolean`||e===``||!Number.isFinite(t))throw new He(`Invalid unit value ${e}`);return t}function sr(e,t){let n={};for(let r in e)if(Hn(e,r)){let i=e[r];if(i==null)continue;n[t(r)]=or(i)}return n}function cr(e,t){let n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?`+`:`-`;switch(t){case`short`:return`${i}${Kn(n,2)}:${Kn(r,2)}`;case`narrow`:return`${i}${n}${r>0?`:${r}`:``}`;case`techie`:return`${i}${Kn(n,2)}${Kn(r,2)}`;default:throw RangeError(`Value format ${t} is out of range for property format`)}}function lr(e){return Vn(e,[`hour`,`minute`,`second`,`millisecond`])}var ur=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],dr=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],fr=[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`];function pr(e){switch(e){case`narrow`:return[...fr];case`short`:return[...dr];case`long`:return[...ur];case`numeric`:return[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`];case`2-digit`:return[`01`,`02`,`03`,`04`,`05`,`06`,`07`,`08`,`09`,`10`,`11`,`12`];default:return null}}var mr=[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`],hr=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],gr=[`M`,`T`,`W`,`T`,`F`,`S`,`S`];function _r(e){switch(e){case`narrow`:return[...gr];case`short`:return[...hr];case`long`:return[...mr];case`numeric`:return[`1`,`2`,`3`,`4`,`5`,`6`,`7`];default:return null}}var vr=[`AM`,`PM`],yr=[`Before Christ`,`Anno Domini`],br=[`BC`,`AD`],xr=[`B`,`A`];function Sr(e){switch(e){case`narrow`:return[...xr];case`short`:return[...br];case`long`:return[...yr];default:return null}}function Cr(e){return vr[e.hour<12?0:1]}function wr(e,t){return _r(t)[e.weekday-1]}function Tr(e,t){return pr(t)[e.month-1]}function Er(e,t){return Sr(t)[e.year<0?0:1]}function Dr(e,t,n=`always`,r=!1){let i={years:[`year`,`yr.`],quarters:[`quarter`,`qtr.`],months:[`month`,`mo.`],weeks:[`week`,`wk.`],days:[`day`,`day`,`days`],hours:[`hour`,`hr.`],minutes:[`minute`,`min.`],seconds:[`second`,`sec.`]},a=[`hours`,`minutes`,`seconds`].indexOf(e)===-1;if(n===`auto`&&a){let n=e===`days`;switch(t){case 1:return n?`tomorrow`:`next ${i[e][0]}`;case-1:return n?`yesterday`:`last ${i[e][0]}`;case 0:return n?`today`:`this ${i[e][0]}`}}let o=Object.is(t,-0)||t<0,s=Math.abs(t),c=s===1,l=i[e],u=r?c?l[1]:l[2]||l[1]:c?i[e][0]:e;return o?`${s} ${u} ago`:`in ${s} ${u}`}function Or(e,t){let n=``;for(let r of e)r.literal?n+=r.val:n+=t(r.val);return n}var kr={D:Ke,DD:qe,DDD:Ye,DDDD:Xe,t:Ze,tt:Qe,ttt:$e,tttt:et,T:tt,TT:nt,TTT:rt,TTTT:it,f:at,ff:st,fff:ut,ffff:ft,F:ot,FF:ct,FFF:dt,FFFF:pt},Ar=class e{static create(t,n={}){return new e(t,n)}static parseFormat(e){let t=null,n=``,r=!1,i=[];for(let a=0;a<e.length;a++){let o=e.charAt(a);o===`'`?((n.length>0||r)&&i.push({literal:r||/^\s+$/.test(n),val:n===``?`'`:n}),t=null,n=``,r=!r):r||o===t?n+=o:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=o,t=o)}return n.length>0&&i.push({literal:r||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(e){return kr[e]}constructor(e,t){this.opts=t,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,t){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...t}).format()}dtFormatter(e,t={}){return this.loc.dtFormatter(e,{...this.opts,...t})}formatDateTime(e,t){return this.dtFormatter(e,t).format()}formatDateTimeParts(e,t){return this.dtFormatter(e,t).formatToParts()}formatInterval(e,t){return this.dtFormatter(e.start,t).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,t){return this.dtFormatter(e,t).resolvedOptions()}num(e,t=0,n=void 0){if(this.opts.forceSimple)return Kn(e,t);let r={...this.opts};return t>0&&(r.padTo=t),n&&(r.signDisplay=n),this.loc.numberFormatter(r).format(e)}formatDateTimeFromString(t,n){let r=this.loc.listingMode()===`en`,i=this.loc.outputCalendar&&this.loc.outputCalendar!==`gregory`,a=(e,n)=>this.loc.extract(t,e,n),o=e=>t.isOffsetFixed&&t.offset===0&&e.allowZ?`Z`:t.isValid?t.zone.formatOffset(t.ts,e.format):``,s=()=>r?Cr(t):a({hour:`numeric`,hourCycle:`h12`},`dayperiod`),c=(e,n)=>r?Tr(t,e):a(n?{month:e}:{month:e,day:`numeric`},`month`),l=(e,n)=>r?wr(t,e):a(n?{weekday:e}:{weekday:e,month:`long`,day:`numeric`},`weekday`),u=n=>{let r=e.macroTokenToFormatOpts(n);return r?this.formatWithSystemDefault(t,r):n},d=e=>r?Er(t,e):a({era:e},`era`);return Or(e.parseFormat(n),e=>{switch(e){case`S`:return this.num(t.millisecond);case`u`:case`SSS`:return this.num(t.millisecond,3);case`s`:return this.num(t.second);case`ss`:return this.num(t.second,2);case`uu`:return this.num(Math.floor(t.millisecond/10),2);case`uuu`:return this.num(Math.floor(t.millisecond/100));case`m`:return this.num(t.minute);case`mm`:return this.num(t.minute,2);case`h`:return this.num(t.hour%12==0?12:t.hour%12);case`hh`:return this.num(t.hour%12==0?12:t.hour%12,2);case`H`:return this.num(t.hour);case`HH`:return this.num(t.hour,2);case`Z`:return o({format:`narrow`,allowZ:this.opts.allowZ});case`ZZ`:return o({format:`short`,allowZ:this.opts.allowZ});case`ZZZ`:return o({format:`techie`,allowZ:this.opts.allowZ});case`ZZZZ`:return t.zone.offsetName(t.ts,{format:`short`,locale:this.loc.locale});case`ZZZZZ`:return t.zone.offsetName(t.ts,{format:`long`,locale:this.loc.locale});case`z`:return t.zoneName;case`a`:return s();case`d`:return i?a({day:`numeric`},`day`):this.num(t.day);case`dd`:return i?a({day:`2-digit`},`day`):this.num(t.day,2);case`c`:return this.num(t.weekday);case`ccc`:return l(`short`,!0);case`cccc`:return l(`long`,!0);case`ccccc`:return l(`narrow`,!0);case`E`:return this.num(t.weekday);case`EEE`:return l(`short`,!1);case`EEEE`:return l(`long`,!1);case`EEEEE`:return l(`narrow`,!1);case`L`:return i?a({month:`numeric`,day:`numeric`},`month`):this.num(t.month);case`LL`:return i?a({month:`2-digit`,day:`numeric`},`month`):this.num(t.month,2);case`LLL`:return c(`short`,!0);case`LLLL`:return c(`long`,!0);case`LLLLL`:return c(`narrow`,!0);case`M`:return i?a({month:`numeric`},`month`):this.num(t.month);case`MM`:return i?a({month:`2-digit`},`month`):this.num(t.month,2);case`MMM`:return c(`short`,!1);case`MMMM`:return c(`long`,!1);case`MMMMM`:return c(`narrow`,!1);case`y`:return i?a({year:`numeric`},`year`):this.num(t.year);case`yy`:return i?a({year:`2-digit`},`year`):this.num(t.year.toString().slice(-2),2);case`yyyy`:return i?a({year:`numeric`},`year`):this.num(t.year,4);case`yyyyyy`:return i?a({year:`numeric`},`year`):this.num(t.year,6);case`G`:return d(`short`);case`GG`:return d(`long`);case`GGGGG`:return d(`narrow`);case`kk`:return this.num(t.weekYear.toString().slice(-2),2);case`kkkk`:return this.num(t.weekYear,4);case`W`:return this.num(t.weekNumber);case`WW`:return this.num(t.weekNumber,2);case`n`:return this.num(t.localWeekNumber);case`nn`:return this.num(t.localWeekNumber,2);case`ii`:return this.num(t.localWeekYear.toString().slice(-2),2);case`iiii`:return this.num(t.localWeekYear,4);case`o`:return this.num(t.ordinal);case`ooo`:return this.num(t.ordinal,3);case`q`:return this.num(t.quarter);case`qq`:return this.num(t.quarter,2);case`X`:return this.num(Math.floor(t.ts/1e3));case`x`:return this.num(t.ts);default:return u(e)}})}formatDurationFromString(t,n){let r=this.opts.signMode===`negativeLargestOnly`?-1:1,i=e=>{switch(e[0]){case`S`:return`milliseconds`;case`s`:return`seconds`;case`m`:return`minutes`;case`h`:return`hours`;case`d`:return`days`;case`w`:return`weeks`;case`M`:return`months`;case`y`:return`years`;default:return null}},a=(e,t)=>n=>{let a=i(n);if(a){let i=t.isNegativeDuration&&a!==t.largestUnit?r:1,o;return o=this.opts.signMode===`negativeLargestOnly`&&a!==t.largestUnit?`never`:this.opts.signMode===`all`?`always`:`auto`,this.num(e.get(a)*i,n.length,o)}else return n},o=e.parseFormat(n),s=o.reduce((e,{literal:t,val:n})=>t?e:e.concat(n),[]),c=t.shiftTo(...s.map(i).filter(e=>e));return Or(o,a(c,{isNegativeDuration:c<0,largestUnit:Object.keys(c.values)[0]}))}},jr=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Mr(...e){let t=e.reduce((e,t)=>e+t.source,``);return RegExp(`^${t}$`)}function Nr(...e){return t=>e.reduce(([e,n,r],i)=>{let[a,o,s]=i(t,r);return[{...e,...a},o||n,s]},[{},null,1]).slice(0,2)}function Pr(e,...t){if(e==null)return[null,null];for(let[n,r]of t){let t=n.exec(e);if(t)return r(t)}return[null,null]}function Fr(...e){return(t,n)=>{let r={},i;for(i=0;i<e.length;i++)r[e[i]]=qn(t[n+i]);return[r,null,n+i]}}var Ir=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,Lr=`(?:${Ir.source}?(?:\\[(${jr.source})\\])?)?`,Rr=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,zr=RegExp(`${Rr.source}${Lr}`),Br=RegExp(`(?:[Tt]${zr.source})?`),Vr=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Hr=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Ur=/(\d{4})-?(\d{3})/,Wr=Fr(`weekYear`,`weekNumber`,`weekDay`),Gr=Fr(`year`,`ordinal`),Kr=/(\d{4})-(\d\d)-(\d\d)/,qr=RegExp(`${Rr.source} ?(?:${Ir.source}|(${jr.source}))?`),Jr=RegExp(`(?: ${qr.source})?`);function Yr(e,t,n){let r=e[t];return D(r)?n:qn(r)}function Xr(e,t){return[{year:Yr(e,t),month:Yr(e,t+1,1),day:Yr(e,t+2,1)},null,t+3]}function Zr(e,t){return[{hours:Yr(e,t,0),minutes:Yr(e,t+1,0),seconds:Yr(e,t+2,0),milliseconds:Yn(e[t+3])},null,t+4]}function Qr(e,t){let n=!e[t]&&!e[t+1],r=ar(e[t+1],e[t+2]);return[{},n?null:Xt.instance(r),t+3]}function $r(e,t){return[{},e[t]?Ct.create(e[t]):null,t+1]}var ei=RegExp(`^T?${Rr.source}$`),ti=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function ni(e){let[t,n,r,i,a,o,s,c,l]=e,u=t[0]===`-`,d=c&&c[0]===`-`,f=(e,t=!1)=>e!==void 0&&(t||e&&u)?-e:e;return[{years:f(Jn(n)),months:f(Jn(r)),weeks:f(Jn(i)),days:f(Jn(a)),hours:f(Jn(o)),minutes:f(Jn(s)),seconds:f(Jn(c),c===`-0`),milliseconds:f(Yn(l),d)}]}var ri={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function ii(e,t,n,r,i,a,o){let s={year:t.length===2?rr(qn(t)):qn(t),month:dr.indexOf(n)+1,day:qn(r),hour:qn(i),minute:qn(a)};return o&&(s.second=qn(o)),e&&(s.weekday=e.length>3?mr.indexOf(e)+1:hr.indexOf(e)+1),s}var ai=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function oi(e){let[,t,n,r,i,a,o,s,c,l,u,d]=e,f=ii(t,i,r,n,a,o,s),p;return p=c?ri[c]:l?0:ar(u,d),[f,new Xt(p)]}function si(e){return e.replace(/\([^()]*\)|[\n\t]/g,` `).replace(/(\s\s+)/g,` `).trim()}var ci=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,li=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,ui=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function di(e){let[,t,n,r,i,a,o,s]=e;return[ii(t,i,r,n,a,o,s),Xt.utcInstance]}function fi(e){let[,t,n,r,i,a,o,s]=e;return[ii(t,s,n,r,i,a,o),Xt.utcInstance]}var pi=Mr(Vr,Br),mi=Mr(Hr,Br),hi=Mr(Ur,Br),gi=Mr(zr),_i=Nr(Xr,Zr,Qr,$r),vi=Nr(Wr,Zr,Qr,$r),yi=Nr(Gr,Zr,Qr,$r),bi=Nr(Zr,Qr,$r);function xi(e){return Pr(e,[pi,_i],[mi,vi],[hi,yi],[gi,bi])}function Si(e){return Pr(si(e),[ai,oi])}function Ci(e){return Pr(e,[ci,di],[li,di],[ui,fi])}function wi(e){return Pr(e,[ti,ni])}var Ti=Nr(Zr);function Ei(e){return Pr(e,[ei,Ti])}var Di=Mr(Kr,Jr),Oi=Mr(qr),ki=Nr(Zr,Qr,$r);function Ai(e){return Pr(e,[Di,_i],[Oi,ki])}var ji=`Invalid Duration`,Mi={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Ni={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...Mi},Pi=146097/400,Fi=146097/4800,Ii={years:{quarters:4,months:12,weeks:Pi/7,days:Pi,hours:Pi*24,minutes:Pi*24*60,seconds:Pi*24*60*60,milliseconds:Pi*24*60*60*1e3},quarters:{months:3,weeks:Pi/28,days:Pi/4,hours:Pi*24/4,minutes:Pi*24*60/4,seconds:Pi*24*60*60/4,milliseconds:Pi*24*60*60*1e3/4},months:{weeks:Fi/7,days:Fi,hours:Fi*24,minutes:Fi*24*60,seconds:Fi*24*60*60,milliseconds:Fi*24*60*60*1e3},...Mi},Li=[`years`,`quarters`,`months`,`weeks`,`days`,`hours`,`minutes`,`seconds`,`milliseconds`],Ri=Li.slice(0).reverse();function zi(e,t,n=!1){return new Ui({values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix})}function Bi(e,t){let n=t.milliseconds??0;for(let r of Ri.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function Vi(e,t){let n=Bi(e,t)<0?-1:1;Li.reduceRight((r,i)=>{if(D(t[i]))return r;if(r){let a=t[r]*n,o=e[i][r],s=Math.floor(a/o);t[i]+=s*n,t[r]-=s*o*n}return i},null),Li.reduce((n,r)=>{if(D(t[r]))return n;if(n){let i=t[n]%1;t[n]-=i,t[r]+=i*e[n][r]}return r},null)}function Hi(e){let t={};for(let[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}var Ui=class e{constructor(e){let t=e.conversionAccuracy===`longterm`||!1,n=t?Ii:Ni;e.matrix&&(n=e.matrix),this.values=e.values,this.loc=e.loc||Jt.create(),this.conversionAccuracy=t?`longterm`:`casual`,this.invalid=e.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,n){return e.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(typeof t!=`object`||!t)throw new He(`Duration.fromObject: argument expected to be an object, got ${t===null?`null`:typeof t}`);return new e({values:sr(t,e.normalizeUnit),loc:Jt.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(Nn(t))return e.fromMillis(t);if(e.isDuration(t))return t;if(typeof t==`object`)return e.fromObject(t);throw new He(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){let[r]=wi(t);return r?e.fromObject(r,n):e.invalid(`unparsable`,`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){let[r]=Ei(t);return r?e.fromObject(r,n):e.invalid(`unparsable`,`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new He(`need to specify a reason the Duration is invalid`);let r=t instanceof gn?t:new gn(t,n);if(hn.throwOnInvalid)throw new ze(r);return new e({invalid:r})}static normalizeUnit(e){let t={year:`years`,years:`years`,quarter:`quarters`,quarters:`quarters`,month:`months`,months:`months`,week:`weeks`,weeks:`weeks`,day:`days`,days:`days`,hour:`hours`,hours:`hours`,minute:`minutes`,minutes:`minutes`,second:`seconds`,seconds:`seconds`,millisecond:`milliseconds`,milliseconds:`milliseconds`}[e&&e.toLowerCase()];if(!t)throw new Ve(e);return t}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,t={}){let n={...t,floor:t.round!==!1&&t.floor!==!1};return this.isValid?Ar.create(this.loc,n).formatDurationFromString(this,e):ji}toHuman(e={}){if(!this.isValid)return ji;let t=e.showZeros!==!1,n=Li.map(n=>{let r=this.values[n];return D(r)||r===0&&!t?null:this.loc.numberFormatter({style:`unit`,unitDisplay:`long`,...e,unit:n.slice(0,-1)}).format(r)}).filter(e=>e);return this.loc.listFormatter({type:`conjunction`,style:e.listStyle||`narrow`,...e}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e=`P`;return this.years!==0&&(e+=this.years+`Y`),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+`M`),this.weeks!==0&&(e+=this.weeks+`W`),this.days!==0&&(e+=this.days+`D`),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+=`T`),this.hours!==0&&(e+=this.hours+`H`),this.minutes!==0&&(e+=this.minutes+`M`),(this.seconds!==0||this.milliseconds!==0)&&(e+=Xn(this.seconds+this.milliseconds/1e3,3)+`S`),e===`P`&&(e+=`T0S`),e}toISOTime(e={}){if(!this.isValid)return null;let t=this.toMillis();return t<0||t>=864e5?null:(e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:`extended`,...e,includeOffset:!1},Ya.fromMillis(t,{zone:`UTC`}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for(`nodejs.util.inspect.custom`)](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Bi(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;let n=e.fromDurationLike(t),r={};for(let e of Li)(Hn(n.values,e)||Hn(this.values,e))&&(r[e]=n.get(e)+this.get(e));return zi(this,{values:r},!0)}minus(t){if(!this.isValid)return this;let n=e.fromDurationLike(t);return this.plus(n.negate())}mapUnits(e){if(!this.isValid)return this;let t={};for(let n of Object.keys(this.values))t[n]=or(e(this.values[n],n));return zi(this,{values:t},!0)}get(t){return this[e.normalizeUnit(t)]}set(t){if(!this.isValid)return this;let n={...this.values,...sr(t,e.normalizeUnit)};return zi(this,{values:n})}reconfigure({locale:e,numberingSystem:t,conversionAccuracy:n,matrix:r}={}){let i={loc:this.loc.clone({locale:e,numberingSystem:t}),matrix:r,conversionAccuracy:n};return zi(this,i)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;let e=this.toObject();return Vi(this.matrix,e),zi(this,{values:e},!0)}rescale(){if(!this.isValid)return this;let e=Hi(this.normalize().shiftToAll().toObject());return zi(this,{values:e},!0)}shiftTo(...t){if(!this.isValid||t.length===0)return this;t=t.map(t=>e.normalizeUnit(t));let n={},r={},i=this.toObject(),a;for(let e of Li)if(t.indexOf(e)>=0){a=e;let t=0;for(let n in r)t+=this.matrix[n][e]*r[n],r[n]=0;Nn(i[e])&&(t+=i[e]);let o=Math.trunc(t);n[e]=o,r[e]=(t*1e3-o*1e3)/1e3}else Nn(i[e])&&(r[e]=i[e]);for(let e in r)r[e]!==0&&(n[a]+=e===a?r[e]:r[e]/this.matrix[a][e]);return Vi(this.matrix,n),zi(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo(`years`,`months`,`weeks`,`days`,`hours`,`minutes`,`seconds`,`milliseconds`):this}negate(){if(!this.isValid)return this;let e={};for(let t of Object.keys(this.values))e[t]=this.values[t]===0?0:-this.values[t];return zi(this,{values:e},!0)}removeZeros(){if(!this.isValid)return this;let e=Hi(this.values);return zi(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function t(e,t){return e===void 0||e===0?t===void 0||t===0:e===t}for(let n of Li)if(!t(this.values[n],e.values[n]))return!1;return!0}},Wi=`Invalid Interval`;function Gi(e,t){return!e||!e.isValid?Ki.invalid(`missing or invalid start`):!t||!t.isValid?Ki.invalid(`missing or invalid end`):t<e?Ki.invalid(`end before start`,`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}var Ki=class e{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new He(`need to specify a reason the Interval is invalid`);let r=t instanceof gn?t:new gn(t,n);if(hn.throwOnInvalid)throw new Re(r);return new e({invalid:r})}static fromDateTimes(t,n){let r=Xa(t),i=Xa(n);return Gi(r,i)??new e({start:r,end:i})}static after(t,n){let r=Ui.fromDurationLike(n),i=Xa(t);return e.fromDateTimes(i,i.plus(r))}static before(t,n){let r=Ui.fromDurationLike(n),i=Xa(t);return e.fromDateTimes(i.minus(r),i)}static fromISO(t,n){let[r,i]=(t||``).split(`/`,2);if(r&&i){let t,a;try{t=Ya.fromISO(r,n),a=t.isValid}catch{a=!1}let o,s;try{o=Ya.fromISO(i,n),s=o.isValid}catch{s=!1}if(a&&s)return e.fromDateTimes(t,o);if(a){let r=Ui.fromISO(i,n);if(r.isValid)return e.after(t,r)}else if(s){let t=Ui.fromISO(r,n);if(t.isValid)return e.before(o,t)}}return e.invalid(`unparsable`,`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e=`milliseconds`){return this.isValid?this.toDuration(e).get(e):NaN}count(e=`milliseconds`,t){if(!this.isValid)return NaN;let n=this.start.startOf(e,t),r;return r=t?.useLocaleWeeks?this.end.reconfigure({locale:n.locale}):this.end,r=r.startOf(e,t),Math.floor(r.diff(n,e).get(e))+(r.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:t,end:n}={}){return this.isValid?e.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];let n=t.map(Xa).filter(e=>this.contains(e)).sort((e,t)=>e.toMillis()-t.toMillis()),r=[],{s:i}=this,a=0;for(;i<this.e;){let t=n[a]||this.e,o=+t>+this.e?this.e:t;r.push(e.fromDateTimes(i,o)),i=o,a+=1}return r}splitBy(t){let n=Ui.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as(`milliseconds`)===0)return[];let{s:r}=this,i=1,a,o=[];for(;r<this.e;){let t=this.start.plus(n.mapUnits(e=>e*i));a=+t>+this.e?this.e:t,o.push(e.fromDateTimes(r,a)),r=a,i+=1}return o}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(t){if(!this.isValid)return this;let n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:e.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;let n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return e.fromDateTimes(n,r)}static merge(e){let[t,n]=e.sort((e,t)=>e.s-t.s).reduce(([e,t],n)=>t?t.overlaps(n)||t.abutsStart(n)?[e,t.union(n)]:[e.concat([t]),n]:[e,n],[[],null]);return n&&t.push(n),t}static xor(t){let n=null,r=0,i=[],a=t.map(e=>[{time:e.s,type:`s`},{time:e.e,type:`e`}]),o=Array.prototype.concat(...a).sort((e,t)=>e.time-t.time);for(let t of o)r+=t.type===`s`?1:-1,r===1?n=t.time:(n&&+n!=+t.time&&i.push(e.fromDateTimes(n,t.time)),n=null);return e.merge(i)}difference(...t){return e.xor([this].concat(t)).map(e=>this.intersection(e)).filter(e=>e&&!e.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Wi}[Symbol.for(`nodejs.util.inspect.custom`)](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(e=Ke,t={}){return this.isValid?Ar.create(this.s.loc.clone(t),e).formatInterval(this):Wi}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:Wi}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Wi}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:Wi}toFormat(e,{separator:t=` – `}={}){return this.isValid?`${this.s.toFormat(e)}${t}${this.e.toFormat(e)}`:Wi}toDuration(e,t){return this.isValid?this.e.diff(this.s,e,t):Ui.invalid(this.invalidReason)}mapEndpoints(t){return e.fromDateTimes(t(this.s),t(this.e))}},qi=class{static hasDST(e=hn.defaultZone){let t=Ya.now().setZone(e).set({month:12});return!e.isUniversal&&t.offset!==t.set({month:6}).offset}static isValidIANAZone(e){return Ct.isValidZone(e)}static normalizeZone(e){return Qt(e,hn.defaultZone)}static getStartOfWeek({locale:e=null,locObj:t=null}={}){return(t||Jt.create(e)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:e=null,locObj:t=null}={}){return(t||Jt.create(e)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:e=null,locObj:t=null}={}){return(t||Jt.create(e)).getWeekendDays().slice()}static months(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null,outputCalendar:i=`gregory`}={}){return(r||Jt.create(t,n,i)).months(e)}static monthsFormat(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null,outputCalendar:i=`gregory`}={}){return(r||Jt.create(t,n,i)).months(e,!0)}static weekdays(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null}={}){return(r||Jt.create(t,n,null)).weekdays(e)}static weekdaysFormat(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null}={}){return(r||Jt.create(t,n,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return Jt.create(e).meridiems()}static eras(e=`short`,{locale:t=null}={}){return Jt.create(t,null,`gregory`).eras(e)}static features(){return{relative:Ln(),localeWeek:Rn()}}};function Ji(e,t){let n=e=>e.toUTC(0,{keepLocalTime:!0}).startOf(`day`).valueOf(),r=n(t)-n(e);return Math.floor(Ui.fromMillis(r).as(`days`))}function Yi(e,t,n){let r=[[`years`,(e,t)=>t.year-e.year],[`quarters`,(e,t)=>t.quarter-e.quarter+(t.year-e.year)*4],[`months`,(e,t)=>t.month-e.month+(t.year-e.year)*12],[`weeks`,(e,t)=>{let n=Ji(e,t);return(n-n%7)/7}],[`days`,Ji]],i={},a=e,o,s;for(let[c,l]of r)n.indexOf(c)>=0&&(o=c,i[c]=l(e,t),s=a.plus(i),s>t?(i[c]--,e=a.plus(i),e>t&&(s=e,i[c]--,e=a.plus(i))):e=s);return[e,i,s,o]}function Xi(e,t,n,r){let[i,a,o,s]=Yi(e,t,n),c=t-i,l=n.filter(e=>[`hours`,`minutes`,`seconds`,`milliseconds`].indexOf(e)>=0);l.length===0&&(o<t&&(o=i.plus({[s]:1})),o!==i&&(a[s]=(a[s]||0)+c/(o-i)));let u=Ui.fromObject(a,r);return l.length>0?Ui.fromMillis(c,r).shiftTo(...l).plus(u):u}var Zi=`missing Intl.DateTimeFormat.formatToParts support`;function Qi(e,t=e=>e){return{regex:e,deser:([e])=>t(nn(e))}}var $i=`[ \xA0]`,ea=new RegExp($i,`g`);function ta(e){return e.replace(/\./g,`\\.?`).replace(ea,$i)}function na(e){return e.replace(/\./g,``).replace(ea,` `).toLowerCase()}function ra(e,t){return e===null?null:{regex:RegExp(e.map(ta).join(`|`)),deser:([n])=>e.findIndex(e=>na(n)===na(e))+t}}function ia(e,t){return{regex:e,deser:([,e,t])=>ar(e,t),groups:t}}function aa(e){return{regex:e,deser:([e])=>e}}function oa(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,`\\$&`)}function sa(e,t){let n=on(t),r=on(t,`{2}`),i=on(t,`{3}`),a=on(t,`{4}`),o=on(t,`{6}`),s=on(t,`{1,2}`),c=on(t,`{1,3}`),l=on(t,`{1,6}`),u=on(t,`{1,9}`),d=on(t,`{2,4}`),f=on(t,`{4,6}`),p=e=>({regex:RegExp(oa(e.val)),deser:([e])=>e,literal:!0}),m=(m=>{if(e.literal)return p(m);switch(m.val){case`G`:return ra(t.eras(`short`),0);case`GG`:return ra(t.eras(`long`),0);case`y`:return Qi(l);case`yy`:return Qi(d,rr);case`yyyy`:return Qi(a);case`yyyyy`:return Qi(f);case`yyyyyy`:return Qi(o);case`M`:return Qi(s);case`MM`:return Qi(r);case`MMM`:return ra(t.months(`short`,!0),1);case`MMMM`:return ra(t.months(`long`,!0),1);case`L`:return Qi(s);case`LL`:return Qi(r);case`LLL`:return ra(t.months(`short`,!1),1);case`LLLL`:return ra(t.months(`long`,!1),1);case`d`:return Qi(s);case`dd`:return Qi(r);case`o`:return Qi(c);case`ooo`:return Qi(i);case`HH`:return Qi(r);case`H`:return Qi(s);case`hh`:return Qi(r);case`h`:return Qi(s);case`mm`:return Qi(r);case`m`:return Qi(s);case`q`:return Qi(s);case`qq`:return Qi(r);case`s`:return Qi(s);case`ss`:return Qi(r);case`S`:return Qi(c);case`SSS`:return Qi(i);case`u`:return aa(u);case`uu`:return aa(s);case`uuu`:return Qi(n);case`a`:return ra(t.meridiems(),0);case`kkkk`:return Qi(a);case`kk`:return Qi(d,rr);case`W`:return Qi(s);case`WW`:return Qi(r);case`E`:case`c`:return Qi(n);case`EEE`:return ra(t.weekdays(`short`,!1),1);case`EEEE`:return ra(t.weekdays(`long`,!1),1);case`ccc`:return ra(t.weekdays(`short`,!0),1);case`cccc`:return ra(t.weekdays(`long`,!0),1);case`Z`:case`ZZ`:return ia(RegExp(`([+-]${s.source})(?::(${r.source}))?`),2);case`ZZZ`:return ia(RegExp(`([+-]${s.source})(${r.source})?`),2);case`z`:return aa(/[a-z_+-/]{1,256}?/i);case` `:return aa(/[^\S\n\r]/);default:return p(m)}})(e)||{invalidReason:Zi};return m.token=e,m}var ca={year:{"2-digit":`yy`,numeric:`yyyyy`},month:{numeric:`M`,"2-digit":`MM`,short:`MMM`,long:`MMMM`},day:{numeric:`d`,"2-digit":`dd`},weekday:{short:`EEE`,long:`EEEE`},dayperiod:`a`,dayPeriod:`a`,hour12:{numeric:`h`,"2-digit":`hh`},hour24:{numeric:`H`,"2-digit":`HH`},minute:{numeric:`m`,"2-digit":`mm`},second:{numeric:`s`,"2-digit":`ss`},timeZoneName:{long:`ZZZZZ`,short:`ZZZ`}};function la(e,t,n){let{type:r,value:i}=e;if(r===`literal`){let e=/^\s+$/.test(i);return{literal:!e,val:e?` `:i}}let a=t[r],o=r;r===`hour`&&(o=t.hour12==null?t.hourCycle==null?n.hour12?`hour12`:`hour24`:t.hourCycle===`h11`||t.hourCycle===`h12`?`hour12`:`hour24`:t.hour12?`hour12`:`hour24`);let s=ca[o];if(typeof s==`object`&&(s=s[a]),s)return{literal:!1,val:s}}function ua(e){return[`^${e.map(e=>e.regex).reduce((e,t)=>`${e}(${t.source})`,``)}$`,e]}function da(e,t,n){let r=e.match(t);if(r){let e={},t=1;for(let i in n)if(Hn(n,i)){let a=n[i],o=a.groups?a.groups+1:1;!a.literal&&a.token&&(e[a.token.val[0]]=a.deser(r.slice(t,t+o))),t+=o}return[r,e]}else return[r,{}]}function fa(e){let t=e=>{switch(e){case`S`:return`millisecond`;case`s`:return`second`;case`m`:return`minute`;case`h`:case`H`:return`hour`;case`d`:return`day`;case`o`:return`ordinal`;case`L`:case`M`:return`month`;case`y`:return`year`;case`E`:case`c`:return`weekday`;case`W`:return`weekNumber`;case`k`:return`weekYear`;case`q`:return`quarter`;default:return null}},n=null,r;return D(e.z)||(n=Ct.create(e.z)),D(e.Z)||(n||=new Xt(e.Z),r=e.Z),D(e.q)||(e.M=(e.q-1)*3+1),D(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),D(e.u)||(e.S=Yn(e.u)),[Object.keys(e).reduce((n,r)=>{let i=t(r);return i&&(n[i]=e[r]),n},{}),n,r]}var pa=null;function ma(){return pa||=Ya.fromMillis(1555555555555),pa}function ha(e,t){if(e.literal)return e;let n=ba(Ar.macroTokenToFormatOpts(e.val),t);return n==null||n.includes(void 0)?e:n}function ga(e,t){return Array.prototype.concat(...e.map(e=>ha(e,t)))}var _a=class{constructor(e,t){if(this.locale=e,this.format=t,this.tokens=ga(Ar.parseFormat(t),e),this.units=this.tokens.map(t=>sa(t,e)),this.disqualifyingUnit=this.units.find(e=>e.invalidReason),!this.disqualifyingUnit){let[e,t]=ua(this.units);this.regex=RegExp(e,`i`),this.handlers=t}}explainFromTokens(e){if(this.isValid){let[t,n]=da(e,this.regex,this.handlers),[r,i,a]=n?fa(n):[null,null,void 0];if(Hn(n,`a`)&&Hn(n,`H`))throw new Be(`Can't include meridiem when specifying 24-hour format`);return{input:e,tokens:this.tokens,regex:this.regex,rawMatches:t,matches:n,result:r,zone:i,specificOffset:a}}else return{input:e,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}};function va(e,t,n){return new _a(e,n).explainFromTokens(t)}function ya(e,t,n){let{result:r,zone:i,specificOffset:a,invalidReason:o}=va(e,t,n);return[r,i,a,o]}function ba(e,t){if(!e)return null;let n=Ar.create(t,e).dtFormatter(ma()),r=n.formatToParts(),i=n.resolvedOptions();return r.map(t=>la(t,e,i))}var xa=`Invalid DateTime`,Sa=864e13;function Ca(e){return new gn(`unsupported zone`,`the zone "${e.name}" is not supported`)}function wa(e){return e.weekData===null&&(e.weekData=wn(e.c)),e.weekData}function Ta(e){return e.localWeekData===null&&(e.localWeekData=wn(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Ea(e,t){let n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new Ya({...n,...t,old:n})}function Da(e,t,n){let r=e-t*60*1e3,i=n.offset(r);if(t===i)return[r,t];r-=(i-t)*60*1e3;let a=n.offset(r);return i===a?[r,i]:[e-Math.min(i,a)*60*1e3,Math.max(i,a)]}function Oa(e,t){e+=t*60*1e3;let n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function ka(e,t,n){return Da(er(e),t,n)}function Aa(e,t){let n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,a={...e.c,year:r,month:i,day:Math.min(e.c.day,$n(r,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},o=Ui.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as(`milliseconds`),[s,c]=Da(er(a),n,e.zone);return o!==0&&(s+=o,c=e.zone.offset(s)),{ts:s,o:c}}function ja(e,t,n,r,i,a){let{setZone:o,zone:s}=n;if(e&&Object.keys(e).length!==0||t){let r=t||s,i=Ya.fromObject(e,{...n,zone:r,specificOffset:a});return o?i:i.setZone(s)}else return Ya.invalid(new gn(`unparsable`,`the input "${i}" can't be parsed as ${r}`))}function Ma(e,t,n=!0){return e.isValid?Ar.create(Jt.create(`en-US`),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Na(e,t,n){let r=e.c.year>9999||e.c.year<0,i=``;if(r&&e.c.year>=0&&(i+=`+`),i+=Kn(e.c.year,r?6:4),n===`year`)return i;if(t){if(i+=`-`,i+=Kn(e.c.month),n===`month`)return i;i+=`-`}else if(i+=Kn(e.c.month),n===`month`)return i;return i+=Kn(e.c.day),i}function Pa(e,t,n,r,i,a,o){let s=!n||e.c.millisecond!==0||e.c.second!==0,c=``;switch(o){case`day`:case`month`:case`year`:break;default:if(c+=Kn(e.c.hour),o===`hour`)break;if(t){if(c+=`:`,c+=Kn(e.c.minute),o===`minute`)break;s&&(c+=`:`,c+=Kn(e.c.second))}else{if(c+=Kn(e.c.minute),o===`minute`)break;s&&(c+=Kn(e.c.second))}if(o===`second`)break;s&&(!r||e.c.millisecond!==0)&&(c+=`.`,c+=Kn(e.c.millisecond,3))}return i&&(e.isOffsetFixed&&e.offset===0&&!a?c+=`Z`:e.o<0?(c+=`-`,c+=Kn(Math.trunc(-e.o/60)),c+=`:`,c+=Kn(Math.trunc(-e.o%60))):(c+=`+`,c+=Kn(Math.trunc(e.o/60)),c+=`:`,c+=Kn(Math.trunc(e.o%60)))),a&&(c+=`[`+e.zone.ianaName+`]`),c}var Fa={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Ia={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},La={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Ra=[`year`,`month`,`day`,`hour`,`minute`,`second`,`millisecond`],za=[`weekYear`,`weekNumber`,`weekday`,`hour`,`minute`,`second`,`millisecond`],Ba=[`year`,`ordinal`,`hour`,`minute`,`second`,`millisecond`];function Va(e){let t={year:`year`,years:`year`,month:`month`,months:`month`,day:`day`,days:`day`,hour:`hour`,hours:`hour`,minute:`minute`,minutes:`minute`,quarter:`quarter`,quarters:`quarter`,second:`second`,seconds:`second`,millisecond:`millisecond`,milliseconds:`millisecond`,weekday:`weekday`,weekdays:`weekday`,weeknumber:`weekNumber`,weeksnumber:`weekNumber`,weeknumbers:`weekNumber`,weekyear:`weekYear`,weekyears:`weekYear`,ordinal:`ordinal`}[e.toLowerCase()];if(!t)throw new Ve(e);return t}function Ha(e){switch(e.toLowerCase()){case`localweekday`:case`localweekdays`:return`localWeekday`;case`localweeknumber`:case`localweeknumbers`:return`localWeekNumber`;case`localweekyear`:case`localweekyears`:return`localWeekYear`;default:return Va(e)}}function Ua(e){if(qa===void 0&&(qa=hn.now()),e.type!==`iana`)return e.offset(qa);let t=e.name,n=Ja.get(t);return n===void 0&&(n=e.offset(qa),Ja.set(t,n)),n}function Wa(e,t){let n=Qt(t.zone,hn.defaultZone);if(!n.isValid)return Ya.invalid(Ca(n));let r=Jt.fromObject(t),i,a;if(D(e.year))i=hn.now();else{for(let t of Ra)D(e[t])&&(e[t]=Fa[t]);let t=jn(e)||Mn(e);if(t)return Ya.invalid(t);let r=Ua(n);[i,a]=ka(e,r,n)}return new Ya({ts:i,zone:n,loc:r,o:a})}function Ga(e,t,n){let r=D(n.round)?!0:n.round,i=D(n.rounding)?`trunc`:n.rounding,a=(e,a)=>(e=Xn(e,r||n.calendary?0:2,n.calendary?`round`:i),t.loc.clone(n).relFormatter(n).format(e,a)),o=r=>n.calendary?t.hasSame(e,r)?0:t.startOf(r).diff(e.startOf(r),r).get(r):t.diff(e,r).get(r);if(n.unit)return a(o(n.unit),n.unit);for(let e of n.units){let t=o(e);if(Math.abs(t)>=1)return a(t,e)}return a(e>t?-0:0,n.units[n.units.length-1])}function Ka(e){let t={},n;return e.length>0&&typeof e[e.length-1]==`object`?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}var qa,Ja=new Map,Ya=class e{constructor(e){let t=e.zone||hn.defaultZone,n=e.invalid||(Number.isNaN(e.ts)?new gn(`invalid input`):null)||(t.isValid?null:Ca(t));this.ts=D(e.ts)?hn.now():e.ts;let r=null,i=null;if(!n)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(t))[r,i]=[e.old.c,e.old.o];else{let a=Nn(e.o)&&!e.old?e.o:t.offset(this.ts);r=Oa(this.ts,a),n=Number.isNaN(r.year)?new gn(`invalid input`):null,r=n?null:r,i=n?null:a}this._zone=t,this.loc=e.loc||Jt.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=r,this.o=i,this.isLuxonDateTime=!0}static now(){return new e({})}static local(){let[e,t]=Ka(arguments),[n,r,i,a,o,s,c]=t;return Wa({year:n,month:r,day:i,hour:a,minute:o,second:s,millisecond:c},e)}static utc(){let[e,t]=Ka(arguments),[n,r,i,a,o,s,c]=t;return e.zone=Xt.utcInstance,Wa({year:n,month:r,day:i,hour:a,minute:o,second:s,millisecond:c},e)}static fromJSDate(t,n={}){let r=In(t)?t.valueOf():NaN;if(Number.isNaN(r))return e.invalid(`invalid input`);let i=Qt(n.zone,hn.defaultZone);return i.isValid?new e({ts:r,zone:i,loc:Jt.fromObject(n)}):e.invalid(Ca(i))}static fromMillis(t,n={}){if(!Nn(t))throw new He(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`);return t<-Sa||t>Sa?e.invalid(`Timestamp out of range`):new e({ts:t,zone:Qt(n.zone,hn.defaultZone),loc:Jt.fromObject(n)})}static fromSeconds(t,n={}){if(Nn(t))return new e({ts:t*1e3,zone:Qt(n.zone,hn.defaultZone),loc:Jt.fromObject(n)});throw new He(`fromSeconds requires a numerical input`)}static fromObject(t,n={}){t||={};let r=Qt(n.zone,hn.defaultZone);if(!r.isValid)return e.invalid(Ca(r));let i=Jt.fromObject(n),a=sr(t,Ha),{minDaysInFirstWeek:o,startOfWeek:s}=On(a,i),c=hn.now(),l=D(n.specificOffset)?r.offset(c):n.specificOffset,u=!D(a.ordinal),d=!D(a.year),f=!D(a.month)||!D(a.day),p=d||f,m=a.weekYear||a.weekNumber;if((p||u)&&m)throw new Be(`Can't mix weekYear/weekNumber units with year/month/day or ordinals`);if(f&&u)throw new Be(`Can't mix ordinal dates with month/day`);let h=m||a.weekday&&!p,g,_,ee=Oa(c,l);h?(g=za,_=Ia,ee=wn(ee,o,s)):u?(g=Ba,_=La,ee=En(ee)):(g=Ra,_=Fa);let te=!1;for(let e of g){let t=a[e];D(t)?te?a[e]=_[e]:a[e]=ee[e]:te=!0}let ne=(h?kn(a,o,s):u?An(a):jn(a))||Mn(a);if(ne)return e.invalid(ne);let[re,ie]=ka(h?Tn(a,o,s):u?Dn(a):a,l,r),ae=new e({ts:re,zone:r,o:ie,loc:i});return a.weekday&&p&&t.weekday!==ae.weekday?e.invalid(`mismatched weekday`,`you can't specify both a weekday of ${a.weekday} and a date of ${ae.toISO()}`):ae.isValid?ae:e.invalid(ae.invalid)}static fromISO(e,t={}){let[n,r]=xi(e);return ja(n,r,t,`ISO 8601`,e)}static fromRFC2822(e,t={}){let[n,r]=Si(e);return ja(n,r,t,`RFC 2822`,e)}static fromHTTP(e,t={}){let[n,r]=Ci(e);return ja(n,r,t,`HTTP`,t)}static fromFormat(t,n,r={}){if(D(t)||D(n))throw new He(`fromFormat requires an input string and a format`);let{locale:i=null,numberingSystem:a=null}=r,[o,s,c,l]=ya(Jt.fromOpts({locale:i,numberingSystem:a,defaultToEN:!0}),t,n);return l?e.invalid(l):ja(o,s,r,`format ${n}`,t,c)}static fromString(t,n,r={}){return e.fromFormat(t,n,r)}static fromSQL(e,t={}){let[n,r]=Ai(e);return ja(n,r,t,`SQL`,e)}static invalid(t,n=null){if(!t)throw new He(`need to specify a reason the DateTime is invalid`);let r=t instanceof gn?t:new gn(t,n);if(hn.throwOnInvalid)throw new Le(r);return new e({invalid:r})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,t={}){let n=ba(e,Jt.fromObject(t));return n?n.map(e=>e?e.val:null).join(``):null}static expandFormat(e,t={}){return ga(Ar.parseFormat(e),Jt.fromObject(t)).map(e=>e.val).join(``)}static resetCache(){qa=void 0,Ja.clear()}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?wa(this).weekYear:NaN}get weekNumber(){return this.isValid?wa(this).weekNumber:NaN}get weekday(){return this.isValid?wa(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Ta(this).weekday:NaN}get localWeekNumber(){return this.isValid?Ta(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Ta(this).weekYear:NaN}get ordinal(){return this.isValid?En(this.c).ordinal:NaN}get monthShort(){return this.isValid?qi.months(`short`,{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?qi.months(`long`,{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?qi.weekdays(`short`,{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?qi.weekdays(`long`,{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:`short`,locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:`long`,locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let e=864e5,t=6e4,n=er(this.c),r=this.zone.offset(n-e),i=this.zone.offset(n+e),a=this.zone.offset(n-r*t),o=this.zone.offset(n-i*t);if(a===o)return[this];let s=n-a*t,c=n-o*t,l=Oa(s,a),u=Oa(c,o);return l.hour===u.hour&&l.minute===u.minute&&l.second===u.second&&l.millisecond===u.millisecond?[Ea(this,{ts:s}),Ea(this,{ts:c})]:[this]}get isInLeapYear(){return Zn(this.year)}get daysInMonth(){return $n(this.year,this.month)}get daysInYear(){return this.isValid?Qn(this.year):NaN}get weeksInWeekYear(){return this.isValid?nr(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?nr(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(e={}){let{locale:t,numberingSystem:n,calendar:r}=Ar.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:t,numberingSystem:n,outputCalendar:r}}toUTC(e=0,t={}){return this.setZone(Xt.instance(e),t)}toLocal(){return this.setZone(hn.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=Qt(t,hn.defaultZone),t.equals(this.zone))return this;if(t.isValid){let e=this.ts;if(n||r){let n=t.offset(this.ts),r=this.toObject();[e]=ka(r,n,t)}return Ea(this,{ts:e,zone:t})}else return e.invalid(Ca(t))}reconfigure({locale:e,numberingSystem:t,outputCalendar:n}={}){let r=this.loc.clone({locale:e,numberingSystem:t,outputCalendar:n});return Ea(this,{loc:r})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;let t=sr(e,Ha),{minDaysInFirstWeek:n,startOfWeek:r}=On(t,this.loc),i=!D(t.weekYear)||!D(t.weekNumber)||!D(t.weekday),a=!D(t.ordinal),o=!D(t.year),s=!D(t.month)||!D(t.day),c=o||s,l=t.weekYear||t.weekNumber;if((c||a)&&l)throw new Be(`Can't mix weekYear/weekNumber units with year/month/day or ordinals`);if(s&&a)throw new Be(`Can't mix ordinal dates with month/day`);let u;i?u=Tn({...wn(this.c,n,r),...t},n,r):D(t.ordinal)?(u={...this.toObject(),...t},D(t.day)&&(u.day=Math.min($n(u.year,u.month),u.day))):u=Dn({...En(this.c),...t});let[d,f]=ka(u,this.o,this.zone);return Ea(this,{ts:d,o:f})}plus(e){if(!this.isValid)return this;let t=Ui.fromDurationLike(e);return Ea(this,Aa(this,t))}minus(e){if(!this.isValid)return this;let t=Ui.fromDurationLike(e).negate();return Ea(this,Aa(this,t))}startOf(e,{useLocaleWeeks:t=!1}={}){if(!this.isValid)return this;let n={},r=Ui.normalizeUnit(e);switch(r){case`years`:n.month=1;case`quarters`:case`months`:n.day=1;case`weeks`:case`days`:n.hour=0;case`hours`:n.minute=0;case`minutes`:n.second=0;case`seconds`:n.millisecond=0;break}if(r===`weeks`)if(t){let e=this.loc.getStartOfWeek(),{weekday:t}=this;t<e&&(n.weekNumber=this.weekNumber-1),n.weekday=e}else n.weekday=1;return r===`quarters`&&(n.month=(Math.ceil(this.month/3)-1)*3+1),this.set(n)}endOf(e,t){return this.isValid?this.plus({[e]:1}).startOf(e,t).minus(1):this}toFormat(e,t={}){return this.isValid?Ar.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):xa}toLocaleString(e=Ke,t={}){return this.isValid?Ar.create(this.loc.clone(t),e).formatDateTime(this):xa}toLocaleParts(e={}){return this.isValid?Ar.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e=`extended`,suppressSeconds:t=!1,suppressMilliseconds:n=!1,includeOffset:r=!0,extendedZone:i=!1,precision:a=`milliseconds`}={}){if(!this.isValid)return null;a=Va(a);let o=e===`extended`,s=Na(this,o,a);return Ra.indexOf(a)>=3&&(s+=`T`),s+=Pa(this,o,t,n,r,i,a),s}toISODate({format:e=`extended`,precision:t=`day`}={}){return this.isValid?Na(this,e===`extended`,Va(t)):null}toISOWeekDate(){return Ma(this,`kkkk-'W'WW-c`)}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:t=!1,includeOffset:n=!0,includePrefix:r=!1,extendedZone:i=!1,format:a=`extended`,precision:o=`milliseconds`}={}){return this.isValid?(o=Va(o),(r&&Ra.indexOf(o)>=3?`T`:``)+Pa(this,a===`extended`,t,e,n,i,o)):null}toRFC2822(){return Ma(this,`EEE, dd LLL yyyy HH:mm:ss ZZZ`,!1)}toHTTP(){return Ma(this.toUTC(),`EEE, dd LLL yyyy HH:mm:ss 'GMT'`)}toSQLDate(){return this.isValid?Na(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:t=!1,includeOffsetSpace:n=!0}={}){let r=`HH:mm:ss.SSS`;return(t||e)&&(n&&(r+=` `),t?r+=`z`:e&&(r+=`ZZ`)),Ma(this,r,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():xa}[Symbol.for(`nodejs.util.inspect.custom`)](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};let t={...this.c};return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,t=`milliseconds`,n={}){if(!this.isValid||!e.isValid)return Ui.invalid(`created by diffing an invalid DateTime`);let r={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=zn(t).map(Ui.normalizeUnit),a=e.valueOf()>this.valueOf(),o=Xi(a?this:e,a?e:this,i,r);return a?o.negate():o}diffNow(t=`milliseconds`,n={}){return this.diff(e.now(),t,n)}until(e){return this.isValid?Ki.fromDateTimes(this,e):this}hasSame(e,t,n){if(!this.isValid)return!1;let r=e.valueOf(),i=this.setZone(e.zone,{keepLocalTime:!0});return i.startOf(t,n)<=r&&r<=i.endOf(t,n)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(t={}){if(!this.isValid)return null;let n=t.base||e.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0,i=[`years`,`months`,`days`,`hours`,`minutes`,`seconds`],a=t.unit;return Array.isArray(t.unit)&&(i=t.unit,a=void 0),Ga(n,this.plus(r),{...t,numeric:`always`,units:i,unit:a})}toRelativeCalendar(t={}){return this.isValid?Ga(t.base||e.fromObject({},{zone:this.zone}),this,{...t,numeric:`auto`,units:[`years`,`months`,`days`],calendary:!0}):null}static min(...t){if(!t.every(e.isDateTime))throw new He(`min requires all arguments be DateTimes`);return Bn(t,e=>e.valueOf(),Math.min)}static max(...t){if(!t.every(e.isDateTime))throw new He(`max requires all arguments be DateTimes`);return Bn(t,e=>e.valueOf(),Math.max)}static fromFormatExplain(e,t,n={}){let{locale:r=null,numberingSystem:i=null}=n;return va(Jt.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0}),e,t)}static fromStringExplain(t,n,r={}){return e.fromFormatExplain(t,n,r)}static buildFormatParser(e,t={}){let{locale:n=null,numberingSystem:r=null}=t;return new _a(Jt.fromOpts({locale:n,numberingSystem:r,defaultToEN:!0}),e)}static fromFormatParser(t,n,r={}){if(D(t)||D(n))throw new He(`fromFormatParser requires an input string and a format parser`);let{locale:i=null,numberingSystem:a=null}=r,o=Jt.fromOpts({locale:i,numberingSystem:a,defaultToEN:!0});if(!o.equals(n.locale))throw new He(`fromFormatParser called with a locale of ${o}, but the format parser was created for ${n.locale}`);let{result:s,zone:c,specificOffset:l,invalidReason:u}=n.explainFromTokens(t);return u?e.invalid(u):ja(s,c,r,`format ${n.format}`,t,l)}static get DATE_SHORT(){return Ke}static get DATE_MED(){return qe}static get DATE_MED_WITH_WEEKDAY(){return Je}static get DATE_FULL(){return Ye}static get DATE_HUGE(){return Xe}static get TIME_SIMPLE(){return Ze}static get TIME_WITH_SECONDS(){return Qe}static get TIME_WITH_SHORT_OFFSET(){return $e}static get TIME_WITH_LONG_OFFSET(){return et}static get TIME_24_SIMPLE(){return tt}static get TIME_24_WITH_SECONDS(){return nt}static get TIME_24_WITH_SHORT_OFFSET(){return rt}static get TIME_24_WITH_LONG_OFFSET(){return it}static get DATETIME_SHORT(){return at}static get DATETIME_SHORT_WITH_SECONDS(){return ot}static get DATETIME_MED(){return st}static get DATETIME_MED_WITH_SECONDS(){return ct}static get DATETIME_MED_WITH_WEEKDAY(){return lt}static get DATETIME_FULL(){return ut}static get DATETIME_FULL_WITH_SECONDS(){return dt}static get DATETIME_HUGE(){return ft}static get DATETIME_HUGE_WITH_SECONDS(){return pt}};function Xa(e){if(Ya.isDateTime(e))return e;if(e&&e.valueOf&&Nn(e.valueOf()))return Ya.fromJSDate(e);if(e&&typeof e==`object`)return Ya.fromObject(e);throw new He(`Unknown datetime argument: ${e}, of type ${typeof e}`)}Intl.DateTimeFormat().resolvedOptions().locale;var O;(function(e){e.Year=`year`,e.Month=`month`,e.Week=`week`,e.Day=`day`,e.Hour=`hour`,e.Minute=`minute`,e.Second=`second`,e.Millisecond=`millisecond`})(O||={}),O.Year,O.Hour,O.Minute,O.Second,O.Millisecond,O.Month,O.Week,O.Day,O.Millisecond,O.Second,O.Minute,O.Hour,O.Day,O.Week,O.Month,O.Year;var Za={min:0,max:23},Qa={min:0,max:59},$a={min:0,max:59},eo={min:0,max:999},to;(function(e){e.Years=`years`,e.Months=`months`,e.Weeks=`weeks`,e.Days=`days`,e.Hours=`hours`,e.Minutes=`minutes`,e.Seconds=`seconds`,e.Milliseconds=`milliseconds`})(to||={});var no=[to.Milliseconds,to.Seconds,to.Minutes,to.Hours,to.Days,to.Weeks,to.Months,to.Years];to.Milliseconds,to.Seconds,to.Minutes,to.Hours,to.Days,to.Weeks,to.Months,to.Years,to.Years,O.Year,to.Months,O.Month,to.Weeks,O.Week,to.Days,O.Day,to.Hours,O.Hour,to.Minutes,O.Minute,to.Seconds,O.Second,to.Milliseconds,O.Millisecond,O.Year,to.Years,O.Month,to.Months,O.Week,to.Weeks,O.Day,to.Days,O.Hour,to.Hours,O.Minute,to.Minutes,O.Second,to.Seconds,O.Millisecond,to.Milliseconds;function ro(e){return no.filter(t=>e[t])}function io(e,{decimalCount:t}){if(t==null)return e;let n=10**t,r=e*n;return Number((Math.round(r)/n).toFixed(t))}function ao(e){return io(Math.max(e-.4,0),{decimalCount:0})}function oo(e){return e===0?0:Math.sign(e)}function so(e,t,n={}){let r={},i={decimalCount:n.decimalCount==null?void 0:Math.round(Math.abs(n.decimalCount))},a=Object.values(e).includes(1/0),o=Object.values(e).includes(-1/0),s=ro(t).reverse();if(a||o)return s.forEach(e=>{r[e]=a?1/0:-1/0}),r;let c=Ui.fromObject(e).as(to.Milliseconds),l=oo(c);return s.forEach((e,t)=>{let n=t===s.length-1;if(e===to.Milliseconds)r.milliseconds=io(c,i);else{let t=Ui.fromObject({milliseconds:c}).as(e),a=Math.sign(t),o=Math.abs(t),s=n?io(o,i):Math.floor(i.decimalCount==null?o:ao(o)),u=s===0?0:s*a;r[e]=u,c-=Ui.fromObject({[e]:u}).as(to.Milliseconds),l!==oo(c)&&(c=0)}}),r}var co;(function(e){e.Sunday=`sunday`,e.Monday=`monday`,e.Tuesday=`tuesday`,e.Wednesday=`wednesday`,e.Thursday=`thursday`,e.Friday=`friday`,e.Saturday=`saturday`})(co||={}),co.Sunday,co.Monday,co.Tuesday,co.Wednesday,co.Thursday,co.Friday,co.Saturday,co.Sunday,co.Monday,co.Tuesday,co.Wednesday,co.Thursday,co.Friday,co.Saturday;var lo;(function(e){e.January=`january`,e.February=`february`,e.March=`march`,e.April=`april`,e.May=`may`,e.June=`june`,e.July=`july`,e.August=`august`,e.September=`september`,e.October=`october`,e.November=`november`,e.December=`december`})(lo||={}),lo.January,lo.February,lo.March,lo.April,lo.May,lo.June,lo.July,lo.August,lo.September,lo.October,lo.November,lo.December;var uo={min:1,max:12},fo={min:1,max:31};function po(e){let t=new Fe,n=Object.values(e).some(e=>e===1/0||e===-1/0)?1/0:so(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}function mo(...e){let t=e.join(``),n=o(Array.from(t));return Array.from(n).join(``)}function ho(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function go(e,t){return _o(e,mo([typeof e==`string`?``:e.flags,t].join(``).toLowerCase()))}function _o(e,t){let n=mo(t);return typeof e==`string`?new RegExp(ho(e),n):new RegExp(e.source,n)}function vo(e,{caseSensitive:t}){let n=typeof e==`string`?``:e.flags.toLowerCase();return _o(e,t?n.replaceAll(`i`,``):mo(n+`i`))}function yo(e,t=1){return e.split(`
`).map(e=>[`    `.repeat(Math.round(t)),e].join(``)).join(`
`)}function bo(e,t){return t?typeof t==`string`?!!new RegExp(ho(t),`i`).exec(e):!!go(t,`i`).exec(e):!1}var k=class extends Error{name=`AssertionError`;constructor(e,t){super(je(t,e)||`Assertion failed.`)}},xo={interval:{milliseconds:100},timeout:{seconds:10}},So=Symbol(`not set`);async function Co(e,t,n){let{callback:r,extraAssertionArgs:i,failureMessage:a,options:o}=wo(t),s=so(o.timeout,{milliseconds:!0}).milliseconds,c=so(o.interval,{milliseconds:!0}),l=So,u;async function d(){try{l=n?r():await r(),e(l,...i)}catch(e){l=So,u=Me(e)}}let f=Date.now();for(;l===So;)if(await d(),await po(c),Date.now()-f>=s){let e=`${a?`${a}: `:``}Timeout of '${s}' milliseconds exceeded waiting for callback value to match expectations`;throw Ne(u,e)}return l}function A(e,t=!1){return((...n)=>Co(e,n,t))}function wo(e){let t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(e=>{if(t.callback)t.extraAssertionArgs.push(e);else if(typeof e==`function`)t.callback=e;else if(typeof e==`string`)t.failureMessage=e;else if(typeof e==`object`)t.options=e;else if(e===void 0)return;else throw TypeError(`Unexpected waitUntil arg: ${JSON.stringify(e)}`)}),!t.callback)throw TypeError(`Missing waitUntil callback.`);return{callback:t.callback,options:To(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function To(e){return{interval:e?.interval||xo.interval,timeout:e?.timeout||xo.timeout}}var Eo={isFalse(e,t){if(e!==!1)throw new k(`'${v(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new k(`'${v(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new k(`'${v(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new k(`'${v(e)}' is not truthy.`,t)}},Do={assert:Eo,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new k(`'${v(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new k(`'${v(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new k(`'${v(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new k(`'${v(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:A(Eo.isFalse),isFalsy:A(Eo.isFalsy),isTrue:A(Eo.isTrue),isTruthy:A(Eo.isTruthy)}};function Oo(e,t,n){if(typeof e==`string`){if(!e.endsWith(t))throw new k(`${v(e)} does not end with ${v(t)}}`,n)}else if(e[e.length-1]!==t)throw new k(`${v(e)} does not end with ${v(t)}}`,n)}function ko(e,t,n){if(typeof e==`string`){if(e.endsWith(t))throw new k(`${v(e)} ends with ${v(t)}}`,n)}else if(e[e.length-1]===t)throw new k(`${v(e)} ends with ${v(t)}}`,n)}function Ao(e,t,n){if(typeof e==`string`){if(!e.startsWith(t))throw new k(`${v(e)} does not start with ${v(t)}}`,n)}else if(e[0]!==t)throw new k(`${v(e)} does not start with ${v(t)}}`,n)}function jo(e,t,n){if(typeof e==`string`){if(e.startsWith(t))throw new k(`${v(e)} starts with ${v(t)}}`,n)}else if(e[0]===t)throw new k(`${v(e)} starts with ${v(t)}}`,n)}var Mo={endsWith:Oo,endsWithout:ko,startsWith:Ao,startsWithout:jo},No={assert:Mo,check:{endsWith:((e,t)=>typeof e==`string`?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e==`string`?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e==`string`?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e==`string`?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,n)=>{if(typeof e==`string`){if(!e.endsWith(t))throw new k(`${v(e)} does not end with ${v(t)}}`,n)}else if(e[e.length-1]!==t)throw new k(`${v(e)} does not end with ${v(t)}}`,n);return e}),endsWithout:((e,t,n)=>{if(typeof e==`string`){if(e.endsWith(t))throw new k(`${v(e)} ends with ${v(t)}}`,n)}else if(e[e.length-1]===t)throw new k(`${v(e)} ends with ${v(t)}}`,n);return e}),startsWith:((e,t,n)=>{if(typeof e==`string`){if(!e.startsWith(t))throw new k(`${v(e)} does not start with ${v(t)}}`,n)}else if(e[0]!==t)throw new k(`${v(e)} does not start with ${v(t)}}`,n);return e}),startsWithout:((e,t,n)=>{if(typeof e==`string`){if(e.startsWith(t))throw new k(`${v(e)} starts with ${v(t)}}`,n)}else if(e[0]===t)throw new k(`${v(e)} starts with ${v(t)}}`,n);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e==`string`)return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e==`string`)return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e==`string`)return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e==`string`)return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:A(Mo.endsWith),endsWithout:A(Mo.endsWithout),startsWith:A(Mo.startsWith),startsWithout:A(Mo.startsWithout)}};function Po(e,t,n){let r=De(t);if(!r.includes(e))throw new k(`${String(e)} is not an enum value in '${r.join(`,`)}'.`,n)}function Fo(e,t){return De(t).includes(e)}var Io={isEnumValue(e,t,n){Po(e,t,n)},isNotEnumValue(e,t,n){let r=De(t);if(r.includes(e))throw new k(`${String(e)} is an enum value in '${r.join(`,`)}'.`,n)}},Lo={assert:Io,check:{isEnumValue:Fo,isNotEnumValue(e,t){return!De(t).includes(e)}},assertWrap:{isEnumValue(e,t,n){let r=De(t);if(!r.includes(e))throw new k(`${String(e)} is not an enum value in '${r.join(`,`)}'.`,n);return e},isNotEnumValue(e,t,n){let r=De(t);if(r.includes(e))throw new k(`${String(e)} is not an enum value in '${r.join(`,`)}'.`,n);return e}},checkWrap:{isEnumValue(e,t){if(De(t).includes(e))return e},isNotEnumValue(e,t){if(!De(t).includes(e))return e}},waitUntil:{isEnumValue:A(Io.isEnumValue),isNotEnumValue:A(Io.isNotEnumValue)}},Ro={entriesEqual(e,t,n){if(!e||typeof e!=`object`)throw new k(`${v(e)} is not an object.`,n);if(!t||typeof t!=`object`)throw new k(`${v(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(r=>{if(e[r]!==t[r])throw new k(`Entries are not equal at key '${String(r)}'.`,n)})},notEntriesEqual(e,t,n){if(!(!e||typeof e!=`object`||!t||typeof t!=`object`)&&!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>e[n]!==t[n]))throw new k(`Entries are equal.`,n)}},zo={assert:Ro,check:{entriesEqual(e,t){return!e||typeof e!=`object`||!t||typeof t!=`object`?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>e[n]===t[n])},notEntriesEqual(e,t){return!e||typeof e!=`object`||!t||typeof t!=`object`?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>e[n]!==t[n])}},assertWrap:{entriesEqual(e,t,n){if(!e||typeof e!=`object`)throw new k(`${v(e)} is not an object.`,n);if(!t||typeof t!=`object`)throw new k(`${v(t)} is not an object.`,n);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(r=>{if(e[r]!==t[r])throw new k(`Entries are not equal at key '${String(r)}'.`,n)}),e},notEntriesEqual(e,t,n){if(!e||typeof e!=`object`||!t||typeof t!=`object`||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>e[n]!==t[n]))return e;throw new k(`Entries are equal.`,n)}},checkWrap:{entriesEqual(e,t){if(!(!e||typeof e!=`object`||!t||typeof t!=`object`)&&Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>e[n]===t[n]))return e},notEntriesEqual(e,t){if(!e||typeof e!=`object`||!t||typeof t!=`object`||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>e[n]!==t[n]))return e}},waitUntil:{entriesEqual:A(Ro.entriesEqual),notEntriesEqual:A(Ro.notEntriesEqual)}};function Bo(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Vo(e,t){if(!(e===t||Bo(e,t))){if(e!=null&&t!=null&&typeof e==`object`&&typeof t==`object`){let n=Object.keys(e).sort(),r=Object.keys(t).sort();if(n.length!==r.length)throw Error(`Values are not JSON equal.`);if(!Bo(n,r))throw Error(`Values are JSON equal.`);Object.keys(e).forEach(n=>{try{Vo(e[n],t[n])}catch(e){throw Error(`JSON objects are not equal at key '${n}': ${S(e)}`)}})}throw Error(`Values are not JSON equal.`)}}function Ho(e,t){if(e===t||Bo(e,t))return!0;if(e!=null&&t!=null&&typeof e==`object`&&typeof t==`object`){let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length!==r.length||!Bo(n,r)?!1:Object.keys(e).every(n=>Ho(e[n],t[n]))}return!1}var Uo={jsonEquals(e,t,n){try{Vo(e,t)}catch(e){throw new k(S(e),n)}},notJsonEquals(e,t,n){try{Vo(e,t)}catch{return}throw new k(`Values are JSON equal.`,n)}},Wo={assert:Uo,check:{jsonEquals(e,t){return Ho(e,t)},notJsonEquals(e,t){return!Ho(e,t)}},assertWrap:{jsonEquals(e,t,n){try{return Vo(e,t),e}catch(e){throw new k(S(e),n)}},notJsonEquals(e,t,n){try{Vo(e,t)}catch{return e}throw new k(`Values are JSON equal.`,n)}},checkWrap:{jsonEquals(e,t){if(Ho(e,t))return e},notJsonEquals(e,t){if(!Ho(e,t))return e}},waitUntil:{jsonEquals:A(Uo.jsonEquals),notJsonEquals:A(Uo.notJsonEquals)}};function Go(e){if(e===void 0)return`undefined`;if(e===null)return`null`;let t=e[Symbol.toStringTag];return typeof t==`string`?t:Object.prototype.toString.call(e).slice(8,-1)}function Ko(){this._key=`chai/deep-eql__`+Math.random()+Date.now()}Ko.prototype={get:function(e){return e[this._key]},set:function(e,t){Object.isExtensible(e)&&Object.defineProperty(e,this._key,{value:t,configurable:!0})}};var qo=typeof WeakMap==`function`?WeakMap:Ko;function Jo(e,t,n){if(!n||fs(e)||fs(t))return null;var r=n.get(e);if(r){var i=r.get(t);if(typeof i==`boolean`)return i}return null}function Yo(e,t,n,r){if(!(!n||fs(e)||fs(t))){var i=n.get(e);i?i.set(t,r):(i=new qo,i.set(t,r),n.set(e,i))}}var Xo=Zo;function Zo(e,t,n){if(n&&n.comparator)return $o(e,t,n);var r=Qo(e,t);return r===null?$o(e,t,n):r}function Qo(e,t){return e===t?e!==0||1/e==1/t:e!==e&&t!==t?!0:fs(e)||fs(t)?!1:null}function $o(e,t,n){n||={},n.memoize=n.memoize===!1?!1:n.memoize||new qo;var r=n&&n.comparator,i=Jo(e,t,n.memoize);if(i!==null)return i;var a=Jo(t,e,n.memoize);if(a!==null)return a;if(r){var o=r(e,t);if(o===!1||o===!0)return Yo(e,t,n.memoize,o),o;var s=Qo(e,t);if(s!==null)return s}var c=Go(e);if(c!==Go(t))return Yo(e,t,n.memoize,!1),!1;Yo(e,t,n.memoize,!0);var l=es(e,t,c,n);return Yo(e,t,n.memoize,l),l}function es(e,t,n,r){switch(n){case`String`:case`Number`:case`Boolean`:case`Date`:return Zo(e.valueOf(),t.valueOf());case`Promise`:case`Symbol`:case`function`:case`WeakMap`:case`WeakSet`:return e===t;case`Error`:return us(e,t,[`name`,`message`,`code`],r);case`Arguments`:case`Int8Array`:case`Uint8Array`:case`Uint8ClampedArray`:case`Int16Array`:case`Uint16Array`:case`Int32Array`:case`Uint32Array`:case`Float32Array`:case`Float64Array`:case`Array`:return rs(e,t,r);case`RegExp`:return ts(e,t);case`Generator`:return is(e,t,r);case`DataView`:return rs(new Uint8Array(e.buffer),new Uint8Array(t.buffer),r);case`ArrayBuffer`:return rs(new Uint8Array(e),new Uint8Array(t),r);case`Set`:return ns(e,t,r);case`Map`:return ns(e,t,r);case`Temporal.PlainDate`:case`Temporal.PlainTime`:case`Temporal.PlainDateTime`:case`Temporal.Instant`:case`Temporal.ZonedDateTime`:case`Temporal.PlainYearMonth`:case`Temporal.PlainMonthDay`:return e.equals(t);case`Temporal.Duration`:return e.total(`nanoseconds`)===t.total(`nanoseconds`);case`Temporal.TimeZone`:case`Temporal.Calendar`:return e.toString()===t.toString();default:return ds(e,t,r)}}function ts(e,t){return e.toString()===t.toString()}function ns(e,t,n){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var r=[],i=[];return e.forEach(function(e,t){r.push([e,t])}),t.forEach(function(e,t){i.push([e,t])}),rs(r.sort(),i.sort(),n)}function rs(e,t,n){var r=e.length;if(r!==t.length)return!1;if(r===0)return!0;for(var i=-1;++i<r;)if(Zo(e[i],t[i],n)===!1)return!1;return!0}function is(e,t,n){return rs(ss(e),ss(t),n)}function as(e){return typeof Symbol<`u`&&typeof e==`object`&&Symbol.iterator!==void 0&&typeof e[Symbol.iterator]==`function`}function os(e){if(as(e))try{return ss(e[Symbol.iterator]())}catch{return[]}return[]}function ss(e){for(var t=e.next(),n=[t.value];t.done===!1;)t=e.next(),n.push(t.value);return n}function cs(e){var t=[];for(var n in e)t.push(n);return t}function ls(e){for(var t=[],n=Object.getOwnPropertySymbols(e),r=0;r<n.length;r+=1){var i=n[r];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}function us(e,t,n,r){var i=n.length;if(i===0)return!0;for(var a=0;a<i;a+=1)if(Zo(e[n[a]],t[n[a]],r)===!1)return!1;return!0}function ds(e,t,n){var r=cs(e),i=cs(t),a=ls(e),o=ls(t);if(r=r.concat(a),i=i.concat(o),r.length&&r.length===i.length)return rs(ps(r).sort(),ps(i).sort())===!1?!1:us(e,t,r,n);var s=os(e),c=os(t);return s.length&&s.length===c.length?(s.sort(),c.sort(),rs(s,c,n)):r.length===0&&s.length===0&&i.length===0&&c.length===0}function fs(e){return typeof e!=`object`||!e}function ps(e){return e.map(function(e){return typeof e==`symbol`?e.toString():e})}var ms=class extends k{name=`DiffError`;constructor(e,t,n,r){let i=x(t,n);super([e,yo(i)].join(`
`),r)}};function hs(e,t){return typeof e==`function`&&typeof t==`function`?!0:null}var gs={strictEquals(e,t,n){if(e!==t)throw typeof e==`object`&&e||typeof t==`object`&&t?new k(`Strict reference equality failed for \n\n${v(t)}\n\n.`,n):new ms(`Not strictly equal.`,e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e==`object`&&e?new k(`Strict reference INequality failed for \n\n${v(t)}\n\n.`,n):new k(`\n\n${v(e)}\n\nstrictly equals\n\n${v(t)}\n\n`,n)},looseEquals(e,t,n){if(e!=t)throw typeof e==`object`&&e||typeof t==`object`&&t?new k(`Loose reference equality failed for \n\n${v(t)}\n\n.`,n):new ms(`Not loosely equal.`,e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e==`object`&&e?new k(`Loose reference INequality failed for \n\n${v(t)}\n\n.`,n):new k(`\n\n${v(e)}\n\nloosely equals\n\n${v(t)}\n\n`,n)},deepEquals(e,t,n){if(!Xo(e,t,{comparator:hs}))throw new ms(`Not deeply equal.`,e,t,n)},notDeepEquals(e,t,n){if(Xo(e,t,{comparator:hs}))throw new k(`\n\n${v(e)}\n\ndeeply equals\n\n${v(t)}\n\n`,n)}},_s=gs.deepEquals,vs={assert:gs,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return Xo(e,t,{comparator:hs})},notDeepEquals(e,t){return!Xo(e,t,{comparator:hs})}},assertWrap:{strictEquals(e,t,n){if(e===t)return e;throw typeof e==`object`&&e||typeof t==`object`&&t?new k(`Strict reference equality failed for \n\n${v(t)}\n\n.`,n):new ms(`Not strictly equal.`,e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e==`object`&&e?new k(`Strict reference INequality failed for \n\n${v(t)}\n\n.`,n):new k(`\n\n${v(e)}\n\nstrictly equals\n\n${v(t)}\n\n`,n);return e},looseEquals(e,t,n){if(e==t)return e;throw typeof e==`object`&&e||typeof t==`object`&&t?new k(`Loose reference equality failed for \n\n${v(t)}\n\n.`,n):new ms(`Not loosely equal.`,e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e==`object`&&e?new k(`Loose reference INequality failed for \n\n${v(t)}\n\n.`,n):new k(`\n\n${v(e)}\n\nloosely equals\n\n${v(t)}\n\n`,n);return e},deepEquals(e,t,n){if(Xo(e,t,{comparator:hs}))return e;throw new ms(`Not deeply equal.`,e,t,n)},notDeepEquals(e,t,n){if(Xo(e,t,{comparator:hs}))throw new k(`\n\n${v(e)}\n\ndeeply equals\n\n${v(t)}\n\n`,n);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(Xo(e,t,{comparator:hs}))return e},notDeepEquals(e,t){if(!Xo(e,t,{comparator:hs}))return e}},waitUntil:{strictEquals:A(gs.strictEquals),notStrictEquals:A(gs.notStrictEquals),looseEquals:A(gs.looseEquals),notLooseEquals:A(gs.notLooseEquals),deepEquals:A(gs.deepEquals),notDeepEquals:A(gs.notDeepEquals)}};function ys(e,t){if(typeof e==`string`)return typeof t==`string`&&e.includes(t);let n=!0;try{n=Reflect.ownKeys(e).map(t=>e[t]).includes(t)}catch{return!1}return n}function bs(e,t){return typeof t==`string`?t.includes(e):ys(t,e)}var xs={hasValue(e,t,n){if(!ys(e,t))throw new k(`'${v(e)}' does not have value '${v(t)}'.`,n)},lacksValue(e,t,n){if(ys(e,t))throw new k(`'${v(e)}' has value '${v(t)}'.`,n)},hasValues(e,t,n){let r=[];if(typeof e==`string`)r=t.filter(t=>!(typeof t==`string`&&e.includes(t)));else try{let n=Reflect.ownKeys(e).map(t=>e[t]);r=t.filter(e=>!n.includes(e))}catch{throw new k(`'${v(e)}' does not have values '${v(t)}'.`,n)}if(r.length)throw new k(`'${v(e)}' does not have values '${v(r)}'.`,n)},lacksValues(e,t,n){let r=[];if(typeof e==`string`)r=t.filter(t=>typeof t==`string`&&e.includes(t));else try{let n=Reflect.ownKeys(e).map(t=>e[t]);r=t.filter(e=>n.includes(e))}catch{}if(r.length)throw new k(`'${v(e)}' has values '${v(r)}'.`,n)},isIn(e,t,n){if(!bs(e,t))throw new k(`'${v(e)}'\n\nis not in\n\n${v(t)}.`,n)},isNotIn(e,t,n){if(bs(e,t))throw new k(`'${v(e)}'\n\nis in\n\n${v(t)}.`,n)},isEmpty(e,t){if(typeof e!=`string`&&typeof e!=`object`)throw new k(`'${v(e)}' is not empty.`,t);if(typeof e==`string`&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e==`object`&&!Object.keys(e).length)return;throw new k(`'${v(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!=`string`&&typeof e!=`object`)){if(typeof e==`string`&&!e){if(!e)throw new k(`'${v(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new k(`'${v(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new k(`'${v(e)}' is not empty.`,t)}else if(typeof e==`object`&&!Object.keys(e).length)throw new k(`'${v(e)}' is not empty.`,t)}}},Ss={assert:xs,check:{hasValue(e,t){return ys(e,t)},lacksValue(e,t){return!ys(e,t)},hasValues(e,t){return t.every(t=>ys(e,t))},lacksValues(e,t){return t.every(t=>!ys(e,t))},isIn(e,t){return bs(e,t)},isNotIn(e,t){return!bs(e,t)},isEmpty(e){return typeof e!=`string`&&typeof e!=`object`?!1:typeof e==`string`?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!=`string`&&typeof e!=`object`?!0:typeof e==`string`?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,n){if(!ys(e,t))throw new k(`'${v(e)}' does not have value '${v(t)}'.`,n);return e},lacksValue(e,t,n){if(ys(e,t))throw new k(`'${v(e)}' has value '${v(t)}'.`,n);return e},hasValues(e,t,n){let r=[];if(typeof e==`string`)r=t.filter(t=>!(typeof t==`string`&&e.includes(t)));else try{let n=Reflect.ownKeys(e).map(t=>e[t]);r=t.filter(e=>!n.includes(e))}catch{throw new k(`'${v(e)}' does not have values '${v(t)}'.`,n)}if(r.length)throw new k(`'${v(e)}' does not have values '${v(r)}'.`,n);return e},lacksValues(e,t,n){let r=[];if(typeof e==`string`)r=t.filter(t=>typeof t==`string`&&e.includes(t));else try{let n=Reflect.ownKeys(e).map(t=>e[t]);r=t.filter(e=>n.includes(e))}catch{}if(r.length)throw new k(`'${v(e)}' has values '${v(r)}'.`,n);return e},isIn(e,t,n){if(!bs(e,t))throw new k(`'${v(e)}'\n\nis not in\n\n${v(t)}.`,n);return e},isNotIn(e,t,n){if(bs(e,t))throw new k(`'${v(e)}'\n\nis in\n\n${v(t)}.`,n);return e},isEmpty(e,t){if(typeof e!=`string`&&typeof e!=`object`)throw new k(`'${v(e)}' is not empty.`,t);if(typeof e==`string`&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e==`object`&&!Object.keys(e).length)return e;throw new k(`'${v(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!=`string`&&typeof e!=`object`)return e;if(typeof e==`string`&&!e){if(!e)throw new k(`'${v(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new k(`'${v(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new k(`'${v(e)}' is empty.`,t)}else if(typeof e==`object`&&!Object.keys(e).length)throw new k(`'${v(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(ys(e,t))return e},lacksValue(e,t){if(!ys(e,t))return e},hasValues(e,t){if(t.every(t=>ys(e,t)))return e},lacksValues(e,t){if(!t.every(t=>ys(e,t)))return e},isIn(e,t){if(bs(e,t))return e},isNotIn(e,t){if(!bs(e,t))return e},isEmpty(e){if(!(typeof e!=`string`&&typeof e!=`object`)){if(typeof e==`string`){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e==`object`&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!=`string`&&typeof e!=`object`)return e;if(typeof e==`string`){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e==`object`&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:A(xs.hasValue),lacksValue:A(xs.lacksValue),hasValues:A(xs.hasValues),lacksValues:A(xs.lacksValues),isIn:A(xs.isIn),isNotIn:A(xs.isNotIn),isEmpty:A(xs.isEmpty),isNotEmpty:A(xs.isNotEmpty)}},Cs={isHttpStatus(e,t){if(!Fo(e,C))throw new k(`${v(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,n){if(!Fo(e,C))throw new k(`${v(e)} is not a valid HTTP status.`,n);if(!bs(e,T[t]))throw new k(`${v(e)} is not a '${t}' HTTP status.`,n)}},ws={assert:Cs,check:{isHttpStatus(e){return Fo(e,C)},isHttpStatusCategory(e,t){return Fo(e,C)&&bs(e,T[t])}},assertWrap:{isHttpStatus(e,t){if(!Fo(e,C))throw new k(`${v(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,n){if(!Fo(e,C))throw new k(`${v(e)} is not a valid HTTP status.`,n);if(!bs(e,T[t]))throw new k(`${v(e)} is not a '${t}' HTTP status.`,n);return e}},checkWrap:{isHttpStatus(e){if(Fo(e,C))return e},isHttpStatusCategory(e,t){if(Fo(e,C)&&bs(e,T[t]))return e}},waitUntil:{isHttpStatus:A(Cs.isHttpStatus),isHttpStatusCategory:A(Cs.isHttpStatusCategory)}},Ts={instanceOf(e,t,n){if(!(e instanceof t))throw new k(`'${v(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new k(`'${v(e)}' is an instance of '${t.name}'`,n)}},Es={assert:Ts,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,n){if(e instanceof t)return e;throw new k(`'${v(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new k(`'${v(e)}' is an instance of '${t.name}'`,n);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:A(Ts.instanceOf),notInstanceOf:A(Ts.notInstanceOf)}},Ds=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Os(e,t){return Ds.some(n=>{try{return n(e,t)}catch{return!1}})}var ks={isKeyOf(e,t,n){if(!Os(t,e))throw new k(`'${String(e)}' is not a key of '${v(t)}'.`,n)},isNotKeyOf(e,t,n){if(Os(t,e))throw new k(`'${String(e)}' is a key of '${v(t)}'.`,n)},hasKey(e,t,n){if(!Os(e,t))throw new k(`'${v(e)}' does not have key '${String(t)}'.`,n)},lacksKey(e,t,n){if(Os(e,t))throw new k(`'${v(e)}' has key '${String(t)}'.`,n)},hasKeys(e,t,n){let r=t.filter(t=>!Os(e,t));if(r.length)throw new k(`'${v(e)}' does not have keys '${r.join(`,`)}'.`,n)},lacksKeys(e,t,n){let r=t.filter(t=>Os(e,t));if(r.length)throw new k(`'${v(e)}' does not lack keys '${r.join(`,`)}'.`,n)}},As={assert:ks,check:{isKeyOf(e,t){return Os(t,e)},isNotKeyOf(e,t){return!Os(t,e)},hasKey:Os,lacksKey(e,t){return!Os(e,t)},hasKeys(e,t){return t.every(t=>Os(e,t))},lacksKeys(e,t){return t.every(t=>!Os(e,t))}},assertWrap:{isKeyOf(e,t,n){if(!Os(t,e))throw new k(`'${String(e)}' is not a key of '${v(t)}'.`,n);return e},isNotKeyOf(e,t,n){if(Os(t,e))throw new k(`'${String(e)}' is a key of '${v(t)}'.`,n);return e},hasKey(e,t,n){if(!Os(e,t))throw new k(`'${v(e)}' does not have key '${String(t)}'.`,n);return e},lacksKey(e,t,n){if(Os(e,t))throw new k(`'${v(e)}' has key '${String(t)}'.`,n);return e},hasKeys(e,t,n){let r=t.filter(t=>!Os(e,t));if(r.length)throw new k(`'${v(e)}' does not have keys '${r.join(`,`)}'.`,n);return e},lacksKeys(e,t,n){let r=t.filter(t=>Os(e,t));if(r.length)throw new k(`'${v(e)}' does not lack keys '${r.join(`,`)}'.`,n);return e}},checkWrap:{isKeyOf(e,t){if(Os(t,e))return e},isNotKeyOf(e,t){if(!Os(t,e))return e},hasKey(e,t){if(Os(e,t))return e},lacksKey(e,t){if(!Os(e,t))return e},hasKeys(e,t){if(t.every(t=>Os(e,t)))return e},lacksKeys(e,t){if(t.every(t=>!Os(e,t)))return e}},waitUntil:{isKeyOf:A(ks.isKeyOf),isNotKeyOf:A(ks.isNotKeyOf),hasKey:A(ks.hasKey),lacksKey:A(ks.lacksKey),hasKeys:A(ks.hasKeys),lacksKeys:A(ks.lacksKeys)}};function js(e,t,n){if((Array.isArray(e)||typeof e==`string`?e.length:Te(e).length)<t)throw new k(`Length '${e.length}' is not at least '${t}'.`,n)}function Ms(e,t,n){if((Array.isArray(e)||typeof e==`string`?e.length:Te(e).length)!==t)throw new k(`Length '${e.length}' is not exactly '${t}'.`,n)}var Ns={isLengthAtLeast:js,isLengthExactly:Ms},Ps={assert:Ns,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e==`string`?e.length:Te(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e==`string`?e.length:Te(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,n)=>{if((Array.isArray(e)||typeof e==`string`?e.length:Te(e).length)<t)throw new k(`Length '${e.length}' is not at least '${t}'.`,n);return e}),isLengthExactly:((e,t,n)=>{if((Array.isArray(e)||typeof e==`string`?e.length:Te(e).length)!==t)throw new k(`Length '${e.length}' is not exactly '${t}'.`,n);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e==`string`?e.length:Te(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e==`string`?e.length:Te(e).length)===t)return e})},waitUntil:{isLengthAtLeast:A(Ns.isLengthAtLeast),isLengthExactly:A(Ns.isLengthExactly)}},Fs={assert:{never(e){throw new k(`This code should not have executed.`,e)}},assertWrap:{},check:{},checkWrap:{},waitUntil:{}},Is={isDefined(e,t){if(e==null)throw new k(`'${v(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new k(`'${v(e)}' is not a nullish.`,t)}},Ls={assert:Is,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new k(`'${v(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new k(`'${v(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:A(Is.isDefined),isNullish:A(Is.isNullish)}},Rs={isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new k(`${e} is not within the bounds ${v({min:n,max:t})}`,r)},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new k(`${e} is not outside the bounds ${v({min:t,max:n})}`,r)},isInteger(e,t){if(typeof e!=`number`||isNaN(e)||!Number.isInteger(e))throw new k(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new k(`${e} is an integer.`,t)},isAbove(e,t,n){if(e<=t)throw new k(`${e} is not above ${t}`,n)},isAtLeast(e,t,n){if(e<t)throw new k(`${e} is not at least ${t}`,n)},isBelow(e,t,n){if(e>=t)throw new k(`${e} is not below ${t}`,n)},isAtMost(e,t,n){if(e>t)throw new k(`${e} is not at most ${t}`,n)},isNaN(e,t){if(!isNaN(e))throw new k(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new k(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new k(`${e} is not infinite`,t)},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new k(`${e} is not within ±${n} of ${t}`,r)},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new k(`${e} is within ±${n} of ${t}`,r)}},zs={assert:Rs,check:{isInBounds(e,{max:t,min:n}){return n<=e&&e<=t},isOutBounds(e,{max:t,min:n}){return e<n||t<e},isInteger(e){return typeof e==`number`&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!=`number`||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,n){return t-n<=e&&e<=t+n},isNotApproximately(e,t,n){return e<t-n||e>t+n}},assertWrap:{isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new k(`${e} is not within the bounds ${v({min:n,max:t})}`,r);return e},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new k(`${e} is not outside the bounds ${v({min:t,max:n})}`,r);return e},isInteger(e,t){if(typeof e!=`number`||isNaN(e)||!Number.isInteger(e))throw new k(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new k(`${e} is an integer.`,t);return e},isAbove(e,t,n){if(e<=t)throw new k(`${e} is not above ${t}`,n);return e},isAtLeast(e,t,n){if(e<t)throw new k(`${e} is not at least ${t}`,n);return e},isBelow(e,t,n){if(e>=t)throw new k(`${e} is not below ${t}`,n);return e},isAtMost(e,t,n){if(e>t)throw new k(`${e} is not at most ${t}`,n);return e},isNaN(e,t){if(!isNaN(e))throw new k(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new k(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new k(`${e} is not infinite`,t);return e},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new k(`${e} is not within ±${n} of ${t}`,r);return e},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new k(`${e} is within ±${n} of ${t}`,r);return e}},checkWrap:{isInBounds(e,{max:t,min:n}){if(n<=e&&e<=t)return e},isOutBounds(e,{max:t,min:n}){if(e<n||t<e)return e},isInteger(e){if(typeof e==`number`&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!=`number`||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,n){if(t-n<=e&&e<=t+n)return e},isNotApproximately(e,t,n){if(e<t-n||e>t+n)return e}},waitUntil:{isInBounds:A(Rs.isInBounds),isOutBounds:A(Rs.isOutBounds),isInteger:A(Rs.isInteger),isNotInteger:A(Rs.isNotInteger),isAbove:A(Rs.isAbove),isAtLeast:A(Rs.isAtLeast),isBelow:A(Rs.isBelow),isAtMost:A(Rs.isAtMost),isNaN:A(Rs.isNaN),isFinite:A(Rs.isFinite),isInfinite:A(Rs.isInfinite),isApproximately:A(Rs.isApproximately),isNotApproximately:A(Rs.isNotApproximately)}};function Bs(e,t,n,r,i){return Hs(...Vs(e,t,n,r,i),!1)}function Vs(e,t,n,r,i){let a=Array.isArray(n);return[a?e:_s,a?t:e,a?n:t,a?r:n,a?i:r]}function Hs(e,t,n,r,i,a){let o=t(...n);if(o instanceof Promise)return new Promise(async(n,s)=>{try{let t=await o;e(t,r),a?n(t):n()}catch(e){s(new k(`Output from '${t.name}' did not produce expected output. ${S(e)}`,i))}});try{return e(o,r),a?o:void 0}catch(e){throw new k(`Output from '${t.name}' did not produce expected output. ${S(e)}`,i)}}function Us(e,t,n,r,i){try{let a=Hs(...Vs(e,t,n,r,i),!1);return a instanceof Promise?new Promise(async e=>{try{await a,e(!0)}catch{e(!1)}}):!0}catch{return!1}}function Ws(e,t,n,r,i){return Hs(...Vs(e,t,n,r,i),!0)}function Gs(e,t,n,r,i){try{let a=Hs(...Vs(e,t,n,r,i),!0);return a instanceof Promise?new Promise(async e=>{try{e(await a)}catch{e(void 0)}}):a}catch{return}}var Ks=Symbol(`not set`);async function qs(e,t,n,r,i,a){let o=Array.isArray(n),s=o?e:_s,c=o?t:e,l=o?n:t,u=o?r:n,d=To(o?i:r),f=o?a:i,p=so(d.timeout,{milliseconds:!0}).milliseconds,m=so(d.interval,{milliseconds:!0}),h=Ks,g;async function _(){try{h=await Hs(s,c,l,u,void 0,!0)}catch(e){h=Ks,g=Me(e)}}let ee=Date.now();for(;h===Ks;)if(await _(),await po(m),Date.now()-ee>=p)throw Ne(g,je(f,`Timeout of '${p}' milliseconds exceeded waiting for callback value to match expectations`));return h}var Js={assert:{output:Bs},check:{output:Us},assertWrap:{output:Ws},checkWrap:{output:Gs},waitUntil:{output:qs}},Ys={isPropertyKey(e,t){if(typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`)throw new k(`'${v(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e==`string`||typeof e==`number`||typeof e==`symbol`)throw new k(`'${v(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e==`object`||typeof e==`function`))throw new k(`'${v(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!=`object`&&typeof e!=`function`)throw new k(`'${v(e)}' is not a Primitive.`,t)}},Xs={assert:Ys,check:{isNotPrimitive(e){return e!==null&&(typeof e==`object`||typeof e==`function`)},isNotPropertyKey(e){return typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`},isPrimitive(e){return e===null||typeof e!=`object`&&typeof e!=`function`},isPropertyKey(e){return typeof e==`string`||typeof e==`number`||typeof e==`symbol`}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!=`object`&&typeof e!=`function`)throw new k(`'${v(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e==`string`||typeof e==`number`||typeof e==`symbol`)throw new k(`'${v(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e==`object`||typeof e==`function`))throw new k(`'${v(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`)throw new k(`'${v(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e==`object`||typeof e==`function`))return e},isNotPropertyKey(e){if(typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`)return e},isPrimitive(e){if(e===null||typeof e!=`object`&&typeof e!=`function`)return e},isPropertyKey(e){if(typeof e==`string`||typeof e==`number`||typeof e==`symbol`)return e}},waitUntil:{isNotPrimitive:A(Ys.isNotPrimitive),isNotPropertyKey:A(Ys.isNotPropertyKey),isPrimitive:A(Ys.isPrimitive),isPropertyKey:A(Ys.isPropertyKey)}},Zs={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`))throw new k(`'${v(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`)throw new k(`'${v(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new k(`'${v(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new k(`'${v(e)}' is a Promise.`,t)}},Qs={assert:Zs,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`)},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`))throw new k(`'${v(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`)throw new k(`'${v(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new k(`'${v(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new k(`'${v(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`)return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:A(Zs.isPromiseLike,!0),isNotPromiseLike:A(Zs.isNotPromiseLike,!0),isPromise:A(Zs.isPromise,!0),isNotPromise:A(Zs.isNotPromise,!0)}},$s={matches(e,t,n){if(!t.test(e))throw new k(`'${e}' does not match ${t}`,n)},mismatches(e,t,n){if(t.test(e))throw new k(`'${e}' matches ${t}`,n)}},ec={assert:$s,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,n){if(!t.test(e))throw new k(`'${e}' does not match ${t}`,n);return e},mismatches(e,t,n){if(t.test(e))throw new k(`'${e}' matches ${t}`,n);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:A($s.matches,!0),mismatches:A($s.mismatches,!0)}},tc={isArray(e,t){if(!Array.isArray(e))throw new k(`'${v(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!=`bigint`)throw new k(`'${v(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!=`boolean`)throw new k(`'${v(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!=`function`)throw new k(`'${v(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new k(`'${v(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!=`number`||isNaN(e))throw new k(`'${v(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!=`object`||!e)throw new k(`'${v(e)}' is not a non-null object.`,t)},isPlainObject(e,t){let n=Object.getPrototypeOf(e);if(typeof e!=`object`||!e||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new k(`'${v(e)}' is not a plain object.`,t)},isString(e,t){if(typeof e!=`string`)throw new k(`'${v(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!=`symbol`)throw new k(`'${v(e)}' is not a symbol.`,t)},isUndefined(e,t){if(e!==void 0)throw new k(`'${v(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new k(`'${v(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e==`bigint`)throw new k(`'${v(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e==`boolean`)throw new k(`'${v(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e==`function`)throw new k(`'${v(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new k(`'${v(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e==`number`&&!isNaN(e))throw new k(`'${v(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e==`object`&&e)throw new k(`'${v(e)}' is a non-null object.`,t)},isNotPlainObject(e,t){let n=Object.getPrototypeOf(e);if(!(typeof e!=`object`||!e||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new k(`'${v(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e==`string`)throw new k(`'${v(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e==`symbol`)throw new k(`'${v(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(e===void 0)throw new k(`'${v(e)}' is a undefined.`,t)}},nc={assert:tc,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e==`bigint`},isBoolean(e){return typeof e==`boolean`},isFunction(e){return typeof e==`function`},isNull(e){return e===null},isNumber(e){return typeof e==`number`&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e==`object`&&!!e},isPlainObject(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e==`string`},isSymbol(e){return typeof e==`symbol`},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!=`bigint`},isNotBoolean(e){return typeof e!=`boolean`},isNotFunction(e){return typeof e!=`function`},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!=`number`||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!=`object`||!e},isNotPlainObject(e){if(typeof e!=`object`||!e)return!0;let t=Object.getPrototypeOf(e);return!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!=`string`},isNotSymbol(e){return typeof e!=`symbol`},isNotUndefined(e){return e!==void 0}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new k(`'${v(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!=`bigint`)throw new k(`'${v(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!=`boolean`)throw new k(`'${v(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!=`function`)throw new k(`'${v(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new k(`'${v(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!=`number`||isNaN(e))throw new k(`'${v(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!=`object`||!e)throw new k(`'${v(e)}' is not a non-null object.`,t);return e},isPlainObject(e,t){let n=Object.getPrototypeOf(e);if(typeof e!=`object`||!e||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new k(`'${v(e)}' is not a plain object.`,t);return e},isString(e,t){if(typeof e!=`string`)throw new k(`'${v(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!=`symbol`)throw new k(`'${v(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(e!==void 0)throw new k(`'${v(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new k(`'${v(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e==`bigint`)throw new k(`'${v(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e==`boolean`)throw new k(`'${v(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e==`function`)throw new k(`'${v(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new k(`'${v(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e==`number`&&!isNaN(e))throw new k(`'${v(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e==`object`&&e)throw new k(`'${v(e)}' is a non-null object.`,t);return e},isNotPlainObject(e,t){let n=Object.getPrototypeOf(e);if(typeof e!=`object`||!e||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new k(`'${v(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e==`string`)throw new k(`'${v(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e==`symbol`)throw new k(`'${v(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(e===void 0)throw new k(`'${v(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e==`bigint`)return e},isBoolean(e){if(typeof e==`boolean`)return e},isFunction(e){if(typeof e==`function`)return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e==`number`&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e==`object`&&e)return e},isPlainObject(e){if(typeof e!=`object`||!e)return;let t=Object.getPrototypeOf(e);if((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e==`string`)return e},isSymbol(e){if(typeof e==`symbol`)return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!=`bigint`)return e},isNotBoolean(e){if(typeof e!=`boolean`)return e},isNotFunction(e){if(typeof e!=`function`)return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e==`number`&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!=`object`||!e)return e},isNotPlainObject(e){if(typeof e!=`object`||!e)return e;let t=Object.getPrototypeOf(e);if(!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!=`string`)return e},isNotSymbol(e){if(typeof e!=`symbol`)return e}},waitUntil:{isArray:A(tc.isArray),isBigInt:A(tc.isBigInt),isBoolean:A(tc.isBoolean),isFunction:A(tc.isFunction),isNull:A(tc.isNull),isNumber:A(tc.isNumber),isObject:A(tc.isObject),isPlainObject:A(tc.isPlainObject),isString:A(tc.isString),isSymbol:A(tc.isSymbol),isUndefined:A(tc.isUndefined),isNotArray:A(tc.isNotArray),isNotBigInt:A(tc.isNotBigInt),isNotBoolean:A(tc.isNotBoolean),isNotFunction:A(tc.isNotFunction),isNotNull:A(tc.isNotNull),isNotNumber:A(tc.isNotNumber),isNotObject:A(tc.isNotObject),isNotPlainObject:A(tc.isNotPlainObject),isNotString:A(tc.isNotString),isNotSymbol:A(tc.isNotSymbol),isNotUndefined:A(tc.isNotUndefined)}},rc;(function(e){e.Assert=`assert`,e.AssertWrap=`assert-wrap`,e.CheckWrap=`check-wrap`,e.Check=`check`})(rc||={});function ic(e,t,n){oc(e,{noError:`No error.`,notInstance:`'${v(e)}' is not an error instance.`},t,n)}function ac(e,t,n){oc(e,{noError:`No Error was thrown.`,notInstance:`Thrown value '${v(e)}' is not an error instance.`},t,n)}function oc(e,t,n,r){if(!e)throw new k(t.noError,r);if(!(e instanceof Error))throw new k(t.notInstance,r);if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){let t=e.constructor.name;throw new k(`Error constructor '${t}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){let t=S(e);if(typeof n.matchMessage==`string`){if(!bo(t,n.matchMessage))throw new k(`Error message\n\n'${t}'\n\ndoes not contain\n\n'${n.matchMessage}'.`,r)}else if(!t.match(n.matchMessage))throw new k(`Error message\n\n'${t}'\n\ndoes not match RegExp\n\n'${n.matchMessage}'.`,r)}}function sc(e,t){if(!e||!(e instanceof Error)||t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){let n=S(e);if(typeof t.matchMessage==`string`){if(!bo(n,t.matchMessage))return!1}else if(!n.match(t.matchMessage))return!1}return!0}function cc(e,t,n,r){let i;try{let a=t instanceof Promise?t:t();if(a instanceof Promise)return new Promise(async(t,o)=>{try{await a}catch(e){i=Me(e)}try{ac(i,n,r),e===rc.Assert?t():e===rc.Check?t(!0):t(i)}catch(n){e===rc.CheckWrap?t(void 0):e===rc.Check?t(!1):o(Me(n))}})}catch(e){i=Me(e)}try{return ac(i,n,r),e===rc.Check?!0:e===rc.Assert?void 0:i}catch(t){if(e===rc.CheckWrap)return;if(e===rc.Check)return!1;throw t}}function lc(e,t,n){return cc(rc.Assert,e,t,n)}function uc(e,t){return cc(rc.Check,e,t)}function dc(e,t,n){return cc(rc.AssertWrap,e,t,n)}function fc(e,t,n){return cc(rc.CheckWrap,e,t,n)}var pc=A(ic);function mc(e,t,n,r){let i=typeof e==`function`||e instanceof Promise?void 0:e,a=i?t:e,o=typeof n==`object`?r:n,s=typeof n==`object`?n:t;if(typeof a!=`function`)throw TypeError(`Callback is not a function, got '${v(a)}'`);return pc(i,async()=>{try{await a();return}catch(e){return Me(e)}},s,o)}var hc={assert:{throws:lc,isError:ic},check:{throws:uc,isError(e,t){return sc(e,t)}},assertWrap:{throws:dc,isError(e,t,n){return oc(e,{noError:`No error.`,notInstance:`'${v(e)}' is not an error instance.`},t,n),e}},checkWrap:{throws:fc,isError(e,t){if(sc(e,t))return e}},waitUntil:{throws:mc,isError:A(ic)}},gc=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,_c={isUuid(e,t){if(!String(e).match(gc))throw new k(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(gc))throw new k(`'${String(e)}' is a UUID.`,t)}},vc={assert:_c,check:{isUuid(e){return!!String(e).match(gc)},isNotUuid(e){return!String(e).match(gc)}},assertWrap:{isUuid(e,t){if(!String(e).match(gc))throw new k(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(gc))throw new k(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(gc))return e},isNotUuid(e){if(!String(e).match(gc))return e}},waitUntil:{isUuid:A(_c.isUuid),isNotUuid:A(_c.isNotUuid)}},yc={...Fs.assert,...Do.assert,...No.assert,...zo.assert,...Lo.assert,...ws.assert,...Es.assert,...Wo.assert,...As.assert,...Ps.assert,...Ls.assert,...zs.assert,...Js.assert,...Xs.assert,...Qs.assert,...ec.assert,...nc.assert,...vs.assert,...hc.assert,...vc.assert,...Ss.assert},bc=[Do,No,zo,Lo,ws,Es,Wo,As,Ps,Fs,Ls,zs,Js,Xs,Qs,ec,nc,vs,hc,vc,Ss],xc=Object.assign({},...bc.map(e=>e.check)),j=Object.assign(function(e){return!!e},xc);function Sc(e,t,n){return Cc(e,t,n,new Set)}function Cc(e,t,n,r){if(e=wc(e),t=wc(t),j.isObject(e)&&j.isObject(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),!Cc(Te(e).sort(),Te(t).sort(),n,r))return!1;let i=!1,a=Te(e).map(a=>{let o=Cc(e[a],t[a],n,r);return j.isPromise(o)&&(i=!0),o});return Tc(i,a)}else if(j.isArray(e)&&j.isArray(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),e.length!==t.length)return!1;let i=!1,a=e.map((e,a)=>{let o=Cc(e,t[a],n,r);return j.isPromise(o)&&(i=!0),o});return Tc(i,a)}else return n(e,t)}function wc(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function Tc(e,t){return e?new Promise(async(e,n)=>{try{e((await Promise.all(t)).every(j.isTrue))}catch(e){n(Me(e))}}):t.every(j.isTrue)}var Ec=Object.assign({},...bc.map(e=>e.assertWrap)),Dc=Object.assign(function(e,t){if(!e)throw new k(`Assertion failed.`,t);return e},Ec);function Oc(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}var kc={assert:{tsType:Oc},assertWrap:{tsType:void 0},check:{tsType:void 0},checkWrap:{tsType:void 0},waitUntil:{tsType:void 0}},Ac={fail:e=>{throw new k(`Failure triggered.`,e)}},jc={...kc.assert,...yc,...Ac},Mc=Object.assign(function(e,t){if(!e)throw new k(`Assertion failed.`,t)},jc),Nc=Object.assign({},...bc.map(e=>e.checkWrap)),Pc=Object.assign(function(e){if(e)return e},Nc);function Fc(e,t){return j.hasKey(e,`entryType`)&&e.entryType===t}function Ic(e,t){return e.controlType===t}var Lc;(function(e){e.Checkbox=`checkbox`,e.Color=`color`,e.Custom=`custom`,e.Dropdown=`dropdown`,e.Hidden=`hidden`,e.Number=`number`,e.Text=`text`})(Lc||={});var Rc=Symbol(`any-type`),zc={[Lc.Checkbox]:!1,[Lc.Color]:``,[Lc.Custom]:void 0,[Lc.Dropdown]:``,[Lc.Hidden]:Rc,[Lc.Number]:0,[Lc.Text]:``};function Bc(e,t){if(!e)return[];let n=[];return Object.entries(e).forEach(([e,r])=>{if(r.controlType===Lc.Custom)return;let i=zc[r.controlType];i!==Rc&&(typeof i!=typeof r.initValue&&n.push(Error(`Control '${e}' in page '${t}' has invalid initValue '${r.initValue}': expected initValue of type ${typeof i} because the control is of type ${r.controlType}.`)),e||n.push(Error(`'${t}' cannot have an empty control name.`)))}),n}function Vc(e,t,n){let r=t;if(e.has(r))return e.get(r);{let t=n();return j.isPromise(t)?new Promise(async(n,i)=>{try{let i=await t;e.set(r,i),n(i)}catch(e){i(Me(e))}}):(e.set(r,t),t)}}function Hc(e,t,n){if(t in e)return e[t];{let r=n();return j.isPromise(r)?new Promise(async(n,i)=>{try{let i=await r;e[t]=i,n(i)}catch(e){i(Me(e))}}):(e[t]=r,r)}}function Uc(e){return Te(e).map(t=>[t,e[t]])}function Wc(e){return Object.fromEntries(e)}function Gc(e,t,n){return e.reduce((e,r,i,a)=>{let o=t(r,i,a);return n(o,r,i,a)&&e.push(o),e},[])}function Kc(e,t,n={}){try{let n=!1,r=e.map((e,r,i)=>{let a=t(e,r,i);if(a instanceof Promise)return n=!0,a;if(a)return[a.key,a.value]}).filter(j.isTruthy);return n?new Promise(async(e,t)=>{try{e(Wc(Gc(await Promise.all(r),e=>{if(e)return Array.isArray(e)?e:[e.key,e.value]},j.isTruthy)))}catch(e){t(Me(e))}}):Wc(r)}catch(e){throw Me(e)}}function qc(e,t){let n=[],r=!1;for(let i=0;i<e;i++){let e=t(i);j.isPromise(e)&&(r=!0),n.push(e)}return r?Promise.all(n):n}function Jc(e){return Array.isArray(e)?e:[e]}function Yc({min:e,max:t}){let{min:n,max:r}=Pe({min:Math.floor(e),max:Math.floor(t)}),i=r-n+1,a=Math.ceil(Math.log2(i)),o=Math.ceil(a/8);if(o>65e3)throw RangeError(`Cannot create a random integer so large. ({min: ${n}, max: ${r}})`);let s=Math.floor(256**o/i)*i,c=new Uint8Array(o),l;do crypto.getRandomValues(c),l=c.reduce((e,t,n)=>e+t*256**n,0);while(l>=s);return n+l%i}var Xc=`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`.split(``);function Zc(e=16){let t=``;for(let n=0;n<e;n++){let e=Yc({min:0,max:Xc.length-1});t+=Xc[e]}return t}function Qc(e){return j.isLengthAtLeast(e,1)?e.length===1?e[0]:Error(e.map(e=>S(e).trim()).join(`
`)):Error()}function $c(e,t={}){try{let n=e();return n instanceof Promise?n.catch(e=>t.handleError?t.handleError(e):j.hasKey(t,`fallbackValue`)?t.fallbackValue:Me(e)):n}catch(e){return t.handleError?t.handleError(e):j.hasKey(t,`fallbackValue`)?t.fallbackValue:Me(e)}}function el(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error(`Failed to JSON copy for:`,e),Ne(t,`Failed JSON copy`)}}var tl;(function(e){e.Standard=`stdout`,e.Error=`stderr`})(tl||={});var nl;(function(e){e.Bold=`bold`,e.Debug=`debug`,e.Error=`error`,e.Faint=`faint`,e.Info=`info`,e.Mutate=`mutate`,e.NormalWeight=`normalWeight`,e.Plain=`plain`,e.Reset=`reset`,e.Success=`success`,e.Warning=`warning`})(nl||={});async function rl(){return await be({async[_e.Node](){let e=(await r(async()=>{let{default:e}=await import(`./ansi-styles-BNQ5W5ta.js`);return{default:e}},[])).default;return{[nl.Bold]:e.bold.open,[nl.Debug]:e.blueBright.open,[nl.Error]:e.red.open,[nl.Faint]:e.gray.open,[nl.Info]:e.cyan.open,[nl.Mutate]:e.magenta.open,[nl.NormalWeight]:`\x1B[22m`,[nl.Plain]:``,[nl.Reset]:e.reset.open,[nl.Success]:e.green.open,[nl.Warning]:e.yellow.open}},[_e.Web](){return Promise.resolve({[nl.Bold]:`font-weight: bold`,[nl.Debug]:`color: blue`,[nl.Error]:`color: red`,[nl.Faint]:`color: grey`,[nl.Info]:`color: teal`,[nl.Mutate]:`color: magenta`,[nl.NormalWeight]:``,[nl.Plain]:``,[nl.Reset]:``,[nl.Success]:`color: green`,[nl.Warning]:`color: orange`})}})}var il=await rl(),al={[nl.Bold]:{colors:[il.bold],logType:tl.Standard},[nl.Debug]:{colors:[il.debug],logType:tl.Standard},[nl.Faint]:{colors:[il.faint],logType:tl.Standard},[nl.Info]:{colors:[il.info],logType:tl.Standard},[nl.Mutate]:{colors:[il.mutate,il.bold],logType:tl.Standard},[nl.NormalWeight]:{colors:[il.normalWeight],logType:tl.Standard},[nl.Plain]:{colors:[],logType:tl.Standard},[nl.Reset]:{colors:[il.reset],logType:tl.Standard},[nl.Success]:{colors:[il.success,il.bold],logType:tl.Standard},[nl.Error]:{colors:[il.error,il.bold],logType:tl.Error},[nl.Warning]:{colors:[il.warning],logType:tl.Error}};function ol({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function sl({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function cl(e,t){try{let n=!1,r=Uc(e).map(([r,i])=>{let a=t(r,i,e);if(a instanceof Promise)return n=!0,a;if(a)return[a.key,a.value]}).filter(j.isTruthy);return n?new Promise(async(e,t)=>{try{e(Wc(Gc(await Promise.all(r),e=>{if(e)return Array.isArray(e)?e:[e.key,e.value]},j.isTruthy)))}catch(e){t(Me(e))}}):Wc(r)}catch(e){throw Me(e)}}function ll(e,t){return cl(e,(n,r)=>{let i=r,a=t(r,e);return a instanceof Promise?a.then(e=>({key:i,value:e})):{key:i,value:a}})}function ul(e,...t){let n={...e};return t.forEach(e=>{e&&Uc(e).forEach(([e,t])=>{t!=null&&(n[e]=t)})}),n}function dl(e,t){return e.match(t)??[]}function fl(e){return pl({value:e,suffix:`px`})}function pl({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function ml({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function hl(){return await be({async[_e.Node](){let{inspect:e}=await r(async()=>{let{inspect:e}=await import(`node:util`);return{inspect:e}},[]);return({args:t,colorKey:n,options:r})=>{let i=t.map(t=>typeof t==`string`?t:e(t));return{text:[r.omitColors?``:r.colorConfig[n].colors.join(``),i.join(`
`),r.omitColors?``:r.colorConfig[nl.Reset].colors.join(``)].join(``),css:void 0}}},[_e.Web](){return({args:e,colorKey:t,options:n})=>{let r=n.omitColors?void 0:Gc(n.colorConfig[t].colors,e=>ml({value:e,suffix:`;`}),j.isTruthy).join(`; `);return{text:[e.map(e=>typeof e==`string`?e:e instanceof Error?S(e):v(e)).join(`
`),n.omitColors?``:n.colorConfig[nl.Reset].colors.join(``)].join(``),css:r}}}})}var gl=await hl(),_l={colorConfig:al,omitColors:!1},vl=yl({[tl.Error](){},[tl.Standard](){}});function yl(e,t){let n=ul(_l,t);function r(t){e[n.colorConfig[t.colorKey].logType](gl({...t,options:n}))}let i=ll(nl,e=>(...t)=>r({args:t,colorKey:e}));return{...i,if(e){return e?i:vl}}}var bl=yl(b(_e.Node)?{[tl.Error]({text:e}){process.stderr.write(e+`
`)},[tl.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[tl.Error]({text:e,css:t}){console.error(ol({value:e,prefix:`%c`}),t)},[tl.Standard]({text:e,css:t}){console.log(ol({value:e,prefix:`%c`}),t)}});function xl(e,{digits:t}){if(t==null)return e;let n=10**t,r=e*n;return Number((Math.round(r)/n).toFixed(t))}function Sl({searchIn:e,searchFor:t,caseSensitive:n,includeLength:r}){let i=go(vo(t,{caseSensitive:n}),`g`),a=[],o=[];return e.replace(i,(...n)=>{let r=n[n.length-2];if(typeof r!=`number`)throw TypeError(`Match index "${r}" is not a number. Searching for "${t}" in "${e}".`);let i=n[0];if(typeof i!=`string`)throw TypeError(`regExpMatch should've been a string but was ${typeof i}!`);o.push({index:r,length:i.length}),a.push(r);let s=n[0];if(typeof s!=`string`)throw TypeError(`Original match when searching for "${t}" in "${e}" at index ${r} is not a string.`);return s}),r?o:a}function Cl(e,t,{caseSensitive:n}){let r=Sl({searchIn:e,searchFor:t,caseSensitive:n,includeLength:!0}),i=vo(t,{caseSensitive:n});return e.split(i).reduce((t,n,i)=>{let a=r[i],o=t.concat(n);if(a){let t=e.slice(a.index,a.index+a.length);return o.concat(t)}else return o},[])}function wl(e,t){return e.split(t)}function Tl(e,t){let{min:n,max:r}=Pe(t);if(t.takeOverflow){let t=r-n+1,i=(e-n)%t;return i<0?n+t+i:n+i}else return e>r?n:e<n?r:e}function El(e){return e}function Dl(e,t){let n=!1,r=Te(e).reduce((r,i)=>{let a=t(i,e[i],e);return a instanceof Promise&&(n=!0),r[i]=a,r},{});return n?new Promise(async(e,t)=>{try{await Promise.all(Te(r).map(async e=>{r[e]=await r[e]})),e(r)}catch(e){t(Me(e))}}):r}function Ol(e,t){return Wc(Uc(e).filter(([n,r])=>t(n,r,e)))}function kl(e,t){return Ol(e,e=>t.includes(e))}function Al(e){return Te(e).map(t=>e[t])}function jl(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g,` `).replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g,` `)}var Ml;(function(e){e.Upper=`upper`,e.Lower=`lower`})(Ml||={});var Nl={firstLetterCase:Ml.Lower};function Pl(e,t){if(!e.length)return``;let n=e[0];return(t===Ml.Upper?n.toUpperCase():n.toLowerCase())+e.slice(1)}function Fl(e,t={}){let n=e.toLowerCase();return n.length?Pl(n.replace(/^-+/,``).replace(/-{2,}/g,`-`).replace(/-(?:.|$)/g,e=>{let t=e[1];return t?t.toUpperCase():``}),ul(Nl,t).firstLetterCase):``}function Il(e,t=`and`){if(e.length<2)return e.join(``);let n=e.length>2?`, `:` `;return`${e.slice(0,-1).join(n)}${n}${t} ${e[e.length-1]}`}function Ll({value:e,wrapper:t}){return ol({value:pl({value:e,suffix:t}),prefix:t})}function Rl(){function e(e){return class extends CustomEvent{static type=e;constructor(t){super(e,t)}}}return e}function zl(e,t){let n=t??Event;return class extends n{static type=e;constructor(t){super(e,t)}}}var Bl=class{listeners={};universalListeners=new Map;getListenerCount(){return Al(this.listeners).map(e=>e.size||0).reduce((e,t)=>e+t,0)+this.universalListeners.size}listenToAll(e,t={}){let n=()=>this.universalListeners.delete(e)||!1;function r(r,i){t.once&&n(),e(r,i)}return this.universalListeners.set(e,{listener:r,removeListener:n}),n}removeUniversalListener(e){return!!this.universalListeners.get(e)?.removeListener()}listen(e,t,n={}){let r=j.isString(e)?e:e.type,i=()=>this.listeners[r]?.delete(t)||!1;function a(e,r){n.once&&i(),t(e,r)}return Hc(this.listeners,r,()=>new Map).set(t,{listener:a,removeListener:i}),i}removeListener(e,t){let n=j.isString(e)?e:e.type,r=this.listeners[n];if(!r)return!1;let i=r.get(t);return i?i.removeListener():!1}dispatch(e){let t=this.listeners[e.type];e.target??Object.defineProperty(e,`target`,{writable:!1,value:this});let n=t?.size||0;return t?.forEach(t=>{t.listener(e,t.removeListener)}),this.universalListeners.forEach(t=>{t.listener(e,t.removeListener)}),n+this.universalListeners.size}removeAllListeners(){let e=Al(this.listeners).reduce((e,t)=>{let n=t.size||0;return t.clear(),e+n},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),e}destroy(){this.removeAllListeners()}},Vl=class extends Bl{};function Hl(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function Ul(e,t,n){return Hl(globalThis,e,t,n)}function Wl(e,t){let n=Gl(e.title);return e.parent?[...Wl(e.parent,!1),Gl(e.parent.title)].concat(t?[n]:[]):t?[n]:[]}function Gl(e){return jl(e).toLowerCase().replaceAll(/\s/g,`-`)}function Kl({searchFor:e,searchIn:t}){return e.every((e,n)=>t[n]===e)}var ql=/[/?#&=]/;function Jl(e){let t=e.match(ql);return e.trim()?Gl(e)?t?Error(`Book page title has invalid character '${t[0]}'.`):void 0:Error(`Book page title resolved to empty breadcrumb.`):Error(`Cannot define an element-book page with an empty title.`)}var Yl={[a.ElementExample]:()=>[],[a.Page]:e=>[Jl(e.title),...Bc(e.controls,e.title)].filter(j.isTruthy),[a.Root]:()=>[]},Xl=`_isBookTreeNode`,Zl=new Map;function Ql(e){return Zl.get(e)}function $l(e,t){Vc(Zl,e,()=>t)}function eu(e,t){return tu(e)&&e.entry.entryType===t}function tu(e){return!!(j.hasKeys(e,[`_isBookTreeNode`,`entry`])&&e._isBookTreeNode)}function nu(){return{[Xl]:!0,entry:{entryType:a.Root,title:``,parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:``,fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function ru({entries:e,debug:t}){let n=Ql(e);if(n)return n;let r=nu();e.forEach(e=>au({tree:r,newEntry:e,debug:t,manuallyAdded:!0}));let i={tree:r,flattenedNodes:su(r)};return $l(e,i),t&&console.info(`element-book tree:`,r),i}function iu(e,t,n){if(!t.parent)return e;let r=ou(t,e);if(r)return r;n&&console.info(`parent of ${t.title} not found in tree; adding it now.`),au({tree:e,newEntry:t.parent,debug:n,manuallyAdded:!1});let i=ou(t,e);if(!i)throw Error(`Failed to find node despite having just added it: ${Wl(t,!1).join(` > `)}`);return i}function au({tree:e,newEntry:t,debug:n,manuallyAdded:r}){let i=Yl[t.entryType](t);t.errors.push(...i);let o=iu(e,t,n),s=Gl(t.title),c=o.children[s];if(c){if(r){if(c.manuallyAdded){c.entry.errors.push(Error(`Cannot create duplicate '${s}'${o.urlBreadcrumb?` in parent '${o.urlBreadcrumb}'.`:``}`));return}c.manuallyAdded=!0}return}let l={[Xl]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...o.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:r};o.children[s]=l,Fc(t,a.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(t=>au({tree:e,newEntry:t,debug:n,manuallyAdded:r}))}function ou(e,t){let n=tu(e)?e.fullUrlBreadcrumbs.slice(0,-1):Wl(e,!1);if(n.length)return n.reduce((e,t)=>{if(e)return e.children[t]},t)}function su(e){return[e,...e.entry.errors.length?[]:Object.values(e.children).map(e=>su(e))].flat()}function cu(e,t){return lu(e,[``,...t],void 0)}function lu(e,t,n){let r=t.slice(1),i=r[0];!i&&n&&(e.controls=n);let a=e.children[i||``],o=a&&lu(a,r,n);return{...e.controls,...o}}function uu(e,t,n){let r={...e};return lu(r,[``,...t],n),r}function du(e,t){let n=t?.controls||(eu(e,a.Page)?Dl(e.entry.controls,(e,t)=>t.initValue):{});return{children:Dl(e.children,(e,n)=>du(n,t?.children?.[n.urlBreadcrumb])),controls:n}}function fu(e){let t={...e,entryType:a.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},n=new Set;return e.defineExamples&&e.defineExamples({defineExample(r){let i={...r,isVertical:t.useVerticalExamples,entryType:a.ElementExample,parent:t,descriptionParagraphs:r.descriptionParagraphs??[],errors:[n.has(r.title)&&Error(`Example title '${r.title}' in page '${e.title}' is already taken.`),Jl(r.title)].filter(j.isTruthy)};n.add(r.title),t.elementExamples[Gl(i.title)]=i}}),t}var pu;(function(e){e.Search=`search`,e.Book=`book`})(pu||={});function mu(e){return e[0]===pu.Book?``:e[1]?decodeURIComponent(e[1]):``}var hu={hash:void 0,paths:[pu.Book],search:void 0},gu=new class e{static cssPropertyDefinitionSupported=!!(globalThis.CSS&&globalThis.CSS.registerProperty);registry=new Map;constructor(){let t=e.cssPropertyDefinitionSupported?globalThis.CSS.registerProperty.bind(globalThis.CSS):void 0;t&&(globalThis.CSS.registerProperty=e=>(gu.registry.set(e.name,e),t(e)))}canRegisterCssProperty(t){return e.cssPropertyDefinitionSupported&&!this.registry.has(t)}registerProperty(e){if(!this.canRegisterCssProperty(e.name))return!1;try{return globalThis.CSS.registerProperty(e),!0}catch(t){throw Ne(t,`Failed to define CSS var: ${v(e,4)}\n\n`)}}},_u=globalThis,vu=_u.ShadowRoot&&(_u.ShadyCSS===void 0||_u.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,yu=Symbol(),bu=new WeakMap,xu=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==yu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(vu&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=bu.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&bu.set(t,e))}return e}toString(){return this.cssText}},Su=e=>new xu(typeof e==`string`?e:e+``,void 0,yu),Cu=(e,...t)=>new xu(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,yu),wu=(e,t)=>{if(vu)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=_u.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},Tu=vu?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return Su(t)})(e):e,{is:Eu,defineProperty:Du,getOwnPropertyDescriptor:Ou,getOwnPropertyNames:ku,getOwnPropertySymbols:Au,getPrototypeOf:ju}=Object,Mu=globalThis,Nu=Mu.trustedTypes,Pu=Nu?Nu.emptyScript:``,Fu=Mu.reactiveElementPolyfillSupport,Iu=(e,t)=>e,Lu={toAttribute(e,t){switch(t){case Boolean:e=e?Pu:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Ru=(e,t)=>!Eu(e,t),zu={attribute:!0,type:String,converter:Lu,reflect:!1,useDefault:!1,hasChanged:Ru};Symbol.metadata??=Symbol(`metadata`),Mu.litPropertyMetadata??=new WeakMap;var Bu=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=zu){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Du(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Ou(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??zu}static _$Ei(){if(this.hasOwnProperty(Iu(`elementProperties`)))return;let e=ju(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Iu(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Iu(`properties`))){let e=this.properties,t=[...ku(e),...Au(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(Tu(e))}else e!==void 0&&t.push(Tu(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wu(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Lu:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Lu:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Ru)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Bu.elementStyles=[],Bu.shadowRootOptions={mode:`open`},Bu[Iu(`elementProperties`)]=new Map,Bu[Iu(`finalized`)]=new Map,Fu?.({ReactiveElement:Bu}),(Mu.reactiveElementVersions??=[]).push(`2.1.2`);var Vu=globalThis,Hu=e=>e,Uu=Vu.trustedTypes,Wu=Uu?Uu.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Gu=`$lit$`,Ku=`lit$${Math.random().toFixed(9).slice(2)}$`,qu=`?`+Ku,Ju=`<${qu}>`,Yu=document,Xu=()=>Yu.createComment(``),Zu=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Qu=Array.isArray,$u=e=>Qu(e)||typeof e?.[Symbol.iterator]==`function`,ed=`[ 	
\f\r]`,td=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nd=/-->/g,rd=/>/g,id=RegExp(`>|${ed}(?:([^\\s"'>=/]+)(${ed}*=${ed}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ad=/'/g,od=/"/g,sd=/^(?:script|style|textarea|title)$/i,cd=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),ld=Symbol.for(`lit-noChange`),M=Symbol.for(`lit-nothing`),ud=new WeakMap,dd=Yu.createTreeWalker(Yu,129);function fd(e,t){if(!Qu(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Wu===void 0?t:Wu.createHTML(t)}var pd=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=td;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===td?c[1]===`!--`?o=nd:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=id):(sd.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=id):o=rd:o===id?c[0]===`>`?(o=i??td,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?id:c[3]===`"`?od:ad):o===od||o===ad?o=id:o===nd||o===rd?o=td:(o=id,i=void 0);let d=o===id&&e[t+1].startsWith(`/>`)?` `:``;a+=o===td?n+Ju:l>=0?(r.push(s),n.slice(0,l)+Gu+n.slice(l)+Ku+d):n+Ku+(l===-2?t:d)}return[fd(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},md=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=pd(t,n);if(this.el=e.createElement(l,r),dd.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=dd.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Gu)){let t=u[o++],n=i.getAttribute(e).split(Ku),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?yd:r[1]===`?`?bd:r[1]===`@`?xd:vd}),i.removeAttribute(e)}else e.startsWith(Ku)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(sd.test(i.tagName)){let e=i.textContent.split(Ku),t=e.length-1;if(t>0){i.textContent=Uu?Uu.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Xu()),dd.nextNode(),c.push({type:2,index:++a});i.append(e[t],Xu())}}}else if(i.nodeType===8)if(i.data===qu)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Ku,e+1))!==-1;)c.push({type:7,index:a}),e+=Ku.length-1}a++}}static createElement(e,t){let n=Yu.createElement(`template`);return n.innerHTML=e,n}};function hd(e,t,n=e,r){if(t===ld)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Zu(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=hd(e,i._$AS(e,t.values),i,r)),t}var gd=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Yu).importNode(t,!0);dd.currentNode=r;let i=dd.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new _d(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Sd(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=dd.nextNode(),a++)}return dd.currentNode=Yu,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},_d=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=hd(this,e,t),Zu(e)?e===M||e==null||e===``?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==ld&&this._(e):e._$litType$===void 0?e.nodeType===void 0?$u(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==M&&Zu(this._$AH)?this._$AA.nextSibling.data=e:this.T(Yu.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=md.createElement(fd(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new gd(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=ud.get(e.strings);return t===void 0&&ud.set(e.strings,t=new md(e)),t}k(t){Qu(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Xu()),this.O(Xu()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Hu(e).nextSibling;Hu(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},vd=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=M}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=hd(this,e,t,0),a=!Zu(e)||e!==this._$AH&&e!==ld,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=hd(this,r[n+o],t,o),s===ld&&(s=this._$AH[o]),a||=!Zu(s)||s!==this._$AH[o],s===M?e=M:e!==M&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},yd=class extends vd{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}},bd=class extends vd{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==M)}},xd=class extends vd{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=hd(this,e,t,0)??M)===ld)return;let n=this._$AH,r=e===M&&n!==M||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==M&&(n===M||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Sd=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){hd(this,e)}},Cd={M:Gu,P:Ku,A:qu,C:1,L:pd,R:gd,D:$u,V:hd,I:_d,H:vd,N:bd,U:xd,B:yd,F:Sd},wd=Vu.litHtmlPolyfillSupport;wd?.(md,_d),(Vu.litHtmlVersions??=[]).push(`3.3.2`);var Td=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new _d(t.insertBefore(Xu(),e),e,void 0,n??{})}return i._$AI(e),i},Ed=globalThis,Dd=class extends Bu{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Td(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ld}};Dd._$litElement$=!0,Dd.finalized=!0,Ed.litElementHydrateSupport?.({LitElement:Dd});var Od=Ed.litElementPolyfillSupport;Od?.({LitElement:Dd}),(Ed.litElementVersions??=[]).push(`4.2.2`);function kd({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}var Ad;(function(e){e.Url=`<url>`,e.TransformList=`<transform-list>`,e.TransformFunction=`<transform-function>`,e.Time=`<time>`,e.String=`<string>`,e.Resolution=`<resolution>`,e.Percentage=`<percentage>`,e.Number=`<number>`,e.LengthPercentage=`<length-percentage>`,e.Length=`<length>`,e.Integer=`<integer>`,e.Image=`<image>`,e.CustomIdent=`<custom-ident>`,e.Color=`<color>`,e.Angle=`<angle>`,e.Any=`*`})(Ad||={});var jd;(function(e){e.Space=`+`,e.Comma=`#`})(jd||={});function Md(e){return Dl(e,(e,t)=>{Nd(e);let n=t,r=j.isObject(n)&&!(n instanceof xu)&&j.lacksKey(n,`name`),i=j.isString(n)||j.isNumber(n)||n instanceof xu?String(n):String(n.default),a=j.isString(n)||j.isNumber(n)||n instanceof xu?String(n):String(`initialValue`in n&&n.initialValue||n.default),o=Su(ol({value:e.replace(/^-+/,``),prefix:`--`})),s={name:o,value:Cu`var(${o}, ${Su(i)})`,syntax:j.isString(n)||j.isNumber(n)||n instanceof xu?Ad.Any:Pd(`syntax`in n?n.syntax:void 0),default:i},c=String(s.name);if(!a)throw Error(`Initial value for CSS var ${c} cannot be empty.`);return r&&gu.registerProperty({inherits:!0,name:c,initialValue:a,syntax:s.syntax})&&globalThis.document?.documentElement&&kd({forCssVar:s,onElement:globalThis.document.documentElement,toValue:i}),s})}function Nd(e){try{if(!j.isString(e))throw TypeError(`Must be string.`);if(!e.includes(`-`))throw Error(`Must have at least one dash (-).`);if(e.toLowerCase()!==e)throw Error(`Must be lowercase.`)}catch(t){throw Error(je(`Invalid CSS var name.`,t,`Got '${v(e)}'`))}}function Pd(e){return e?j.isString(e)?e:e.union?e.union.map(e=>Pd(e)).join(` | `):e.list?`${Pd(e.list.values)}${e.list.separator}`:e.raw:Ad.Any}var Fd=Md({"element-book-nav-hover-background-color":`magenta`,"element-book-nav-hover-foreground-color":`magenta`,"element-book-nav-active-background-color":`magenta`,"element-book-nav-active-foreground-color":`magenta`,"element-book-nav-selected-background-color":`magenta`,"element-book-nav-selected-foreground-color":`magenta`,"element-book-accent-icon-color":`magenta`,"element-book-page-background-color":`magenta`,"element-book-page-background-faint-level-1-color":`magenta`,"element-book-page-background-faint-level-2-color":`magenta`,"element-book-page-foreground-color":`magenta`,"element-book-page-foreground-faint-level-1-color":`magenta`,"element-book-page-foreground-faint-level-2-color":`magenta`}),Id={nav:{hover:{background:Fd[`element-book-nav-hover-background-color`],foreground:Fd[`element-book-nav-hover-foreground-color`]},active:{background:Fd[`element-book-nav-active-background-color`],foreground:Fd[`element-book-nav-active-foreground-color`]},selected:{background:Fd[`element-book-nav-selected-background-color`],foreground:Fd[`element-book-nav-selected-foreground-color`]}},accent:{icon:Fd[`element-book-accent-icon-color`]},page:{background:Fd[`element-book-page-background-color`],backgroundFaint1:Fd[`element-book-page-background-faint-level-1-color`],backgroundFaint2:Fd[`element-book-page-background-faint-level-2-color`],foreground:Fd[`element-book-page-foreground-color`],foregroundFaint1:Fd[`element-book-page-foreground-faint-level-1-color`],foregroundFaint2:Fd[`element-book-page-foreground-faint-level-2-color`]}};function Ld(e,t){Bd(e,t,Id)}function Rd(e){return j.hasKey(e,`_$cssResult$`)}function zd(e){return j.hasKeys(e,[`name`,`value`,`default`])&&j.isString(e.default)&&Rd(e.name)&&Rd(e.value)}function Bd(e,t,n){Object.entries(t).forEach(([t,r])=>{let i=n[t];if(!i)throw Error(`no nestedCssVar at key '${t}'`);if(Rd(r)){if(!zd(i))throw Error(`got a CSS result at '${t}' but no CSS var`);kd({forCssVar:i,onElement:e,toValue:String(r)})}else{if(zd(i))throw Error(`got no CSS result at '${t}' but did find a CSS var`);Bd(e,r,i)}})}function Vd(e,t){let n=e.length,r,i,a=!1,o=!1;Array.isArray(e[0])?r=e:(r=[e],n=r.length,a=!0),Array.isArray(t[0])?i=t:(i=t.length>0?t.map(e=>[e]):[[]],o=!0);let s=i[0].length,c=i[0].map((e,t)=>i.map(e=>e[t])),l=r.map(e=>c.map(t=>{let n=0;if(!Array.isArray(e)){for(let r of t)n+=e*r;return n}for(let r=0;r<e.length;r++)n+=e[r]*(t[r]||0);return n}));return n===1&&a&&(l=l[0]),s===1&&o?n===1&&a?l[0]:l.map(e=>e[0]):l}function Hd(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Ud(e,t,n=[0,0,0]){let r=Hd(e,t[0]),i=Hd(e,t[1]),a=Hd(e,t[2]);return n[0]=r,n[1]=i,n[2]=a,n}function Wd(e){return Gd(e)===`string`}function Gd(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||``).toLowerCase()}function Kd(e,{precision:t=16,unit:n}){return qd(e)?`none`:(e=+Yd(e,t),e+(n??``))}function qd(e){return e===null}function Jd(e){return qd(e)?0:e}function Yd(e,t){if(e===0)return 0;let n=~~e,r=0;n&&t&&(r=~~Math.log10(Math.abs(n))+1);let i=10**(t-r);return Math.floor(e*i+.5)/i}function Xd(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function Zd(e,t,n){return(n-e)/(t-e)}function Qd(e,t,n){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(n)||n===null?n:Xd(t[0],t[1],Zd(e[0],e[1],n))}function $d(e,t,n){return Math.max(Math.min(n,t),e)}function ef(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function tf(e,t){return ef(Math.abs(e)**t,e)}function nf(e,t){return t===0?0:e/t}function rf(e,t,n=0,r=e.length){for(;n<r;){let i=n+r>>1;e[i]<t?n=i+1:r=i}return n}function af(e,t){if(e instanceof t)return!0;let n=t.name;for(;e;){let t=Object.getPrototypeOf(e),r=t?.constructor?.name;if(r===n)return!0;if(!r||r===`Object`)return!1;e=t}return!1}var of=Object.freeze({__proto__:null,bisectLeft:rf,clamp:$d,copySign:ef,interpolate:Xd,interpolateInv:Zd,isInstance:af,isNone:qd,isString:Wd,mapRange:Qd,multiplyMatrices:Vd,multiply_v3_m3x3:Ud,serializeNumber:Kd,skipNone:Jd,spow:tf,toPrecision:Yd,type:Gd,zdiv:nf}),sf=new class{add(e,t,n){if(typeof arguments[0]!=`string`){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(e){this[e]=this[e]||[],t&&this[e][n?`unshift`:`push`](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(e){e.call(t&&t.context?t.context:t,t)})}},cf={gamut_mapping:`css`,precision:5,deltaE:`76`,verbose:`production`?.toLowerCase()!==`test`,warn:function(e){this.verbose&&globalThis?.console?.warn?.(e)}},lf=class{type;coordMeta;coordRange;range;constructor(e,t){if(typeof e==`object`&&(this.coordMeta=e),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof e==`string`){let t=e.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!t)throw TypeError(`Cannot parse ${e} as a type definition.`);this.type=t.groups.type;let{min:n,max:r}=t.groups;(n||r)&&(this.range=[+n,+r])}}get computedRange(){return this.range?this.range:this.type===`<percentage>`?this.percentageRange():this.type===`<angle>`?[0,360]:null}get unit(){return this.type===`<percentage>`?`%`:this.type===`<angle>`?`deg`:``}resolve(e){if(this.type===`<angle>`)return e;let t=this.computedRange,n=this.coordRange;return this.type===`<percentage>`&&(n??=this.percentageRange()),Qd(t,n,e)}serialize(e,t){let n=this.type===`<percentage>`?this.percentageRange(100):this.computedRange,r=this.unit;return e=Qd(this.coordRange,n,e),Kd(e,{unit:r,precision:t})}toString(){let e=this.type;if(this.range){let[t=``,n=``]=this.range;e+=`[${t},${n}]`}return e}percentageRange(e=1){let t;return t=this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?[0,1]:[-1,1],[t[0]*e,t[1]*e]}static get(e,t){return af(e,this)?e:new this(e,t)}},uf=Symbol(`instance`),df=class e{type;name;spaceCoords;coords;id;alpha;constructor(e,t=e.space){e[uf]=this,this.type=`function`,this.name=`color`,Object.assign(this,e),this.space=t,this.type!==`custom`&&(this.spaceCoords=Object.values(t.coords),this.coords||=this.spaceCoords.map(e=>{let t=[`<number>`,`<percentage>`];return e.type===`angle`&&t.push(`<angle>`),t}),this.coords=this.coords.map((e,t)=>{let n=this.spaceCoords[t];return typeof e==`string`&&(e=e.trim().split(/\s*\|\s*/)),e.map(e=>lf.get(e,n))}))}serializeCoords(e,t,n){return n=e.map((e,t)=>lf.get(n?.[t]??this.coords[t][0],this.spaceCoords[t])),e.map((e,r)=>n[r].serialize(e,t))}coerceCoords(e,t){return Object.entries(this.space.coords).map(([n,r],i)=>{let a=e[i];if(qd(a)||isNaN(a))return a;let o=t[i],s=this.coords[i].find(e=>e.type==o);if(!s){let e=r.name||n;throw TypeError(`${o??a?.raw??a} not allowed for ${e} in ${this.name}()`)}return a=s.resolve(a),s.range&&(t[i]=s.toString()),a})}canSerialize(){return this.type===`function`||this.serialize}parse(e){return null}static get(t,...n){return!t||af(t,this)?t:t[uf]?t[uf]:new e(t,...n)}},ff={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]};function pf(e){return Array.isArray(e)?e:ff[e]}function mf(e,t,n,r={}){if(e=pf(e),t=pf(t),!e||!t)throw TypeError(`Missing white point to convert ${e?``:`from`}${!e&&!t?`/`:``}${t?``:`to`}`);if(e===t)return n;let i={W1:e,W2:t,XYZ:n,options:r};if(sf.run(`chromatic-adaptation-start`,i),i.M||(i.W1===ff.D65&&i.W2===ff.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===ff.D50&&i.W2===ff.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),sf.run(`chromatic-adaptation-end`,i),i.M)return Ud(i.XYZ,i.M);throw TypeError(`Only Bradford CAT with white points D50 and D65 supported for now.`)}function hf(e,t){let n={str:String(e)?.trim(),options:t};if(sf.run(`parse-start`,n),n.color)return n.color;n.parsed=yf(n.str);let r,i=n.options?n.options.parseMeta??n.options.meta:null;if(n.parsed){let t=n.parsed.name,a,o,s=n.parsed.args,c=s.map((e,t)=>n.parsed.argMeta[t]?.type);if(t===`color`){let r=s.shift();c.shift();let i=r.startsWith(`--`)?r.substring(2):`--${r}`,l=[r,i];if(a=P.findFormat({name:t,id:l,type:`function`}),!a){let t,a=r in P.registry?r:i;if(a in P.registry){let n=P.registry[a].formats?.color?.id;n&&(t=`Did you mean ${e.replace(`color(`+r,`color(`+n)}?`)}throw TypeError(`Cannot parse ${n.str}. `+(t??`Missing a plugin?`))}o=a.space,a.id.startsWith(`--`)&&!r.startsWith(`--`)&&cf.warn(`${o.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${a.id}) instead of color(${r}).`),r.startsWith(`--`)&&!a.id.startsWith(`--`)&&cf.warn(`${o.name} is a standard space and supported in the CSS spec. Use color(${a.id}) instead of prefixed color(${r}).`)}else a=P.findFormat({name:t,type:`function`}),o=a.space;i&&Object.assign(i,{format:a,formatId:a.name,types:c,commas:n.parsed.commas});let l=1;n.parsed.lastAlpha&&(l=n.parsed.args.pop(),i&&(i.alphaType=c.pop()));let u=a.coords.length;if(s.length!==u)throw TypeError(`Expected ${u} coordinates for ${o.id} in ${n.str}), got ${s.length}`);s=a.coerceCoords(s,c),r={spaceId:o.id,coords:s,alpha:l}}else spaceloop:for(let e of P.all)for(let t in e.formats){let a=e.formats[t];if(a.type!==`custom`||a.test&&!a.test(n.str))continue;let o=e.getFormat(a),s=o.parse(n.str);if(s){i&&Object.assign(i,{format:o,formatId:t}),r=s;break spaceloop}}if(!r)throw TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return r.alpha=qd(r.alpha)?r.alpha:r.alpha===void 0?1:$d(0,r.alpha,1),r}var gf={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},_f={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(gf).join(`|`)})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function vf(e){let t={},n=e.match(_f.unitValue)?.[0],r=t.raw=e;return n?(t.type=n===`%`?`<percentage>`:`<angle>`,t.unit=n,t.unitless=Number(r.slice(0,-n.length)),r=t.unitless*gf[n]):_f.number.test(r)?(r=Number(r),t.type=`<number>`):r===`none`?r=null:r===`NaN`||r===`calc(NaN)`?(r=NaN,t.type=`<number>`):t.type=`<ident>`,{value:r,meta:t}}function yf(e){if(!e)return;e=e.trim();let t=e.match(_f.function);if(t){let e=[],n=[],r=!1,i=t[1].toLowerCase(),a=t[2].replace(_f.singleArgument,(t,a)=>{let{value:o,meta:s}=vf(a);return(t.startsWith(`/`)||i!==`color`&&e.length===3)&&(r=!0),e.push(o),n.push(s),``});return{name:i,args:e,argMeta:n,lastAlpha:r,commas:a.includes(`,`),rawName:t[1],rawArgs:t[2]}}}function N(e,t){if(Array.isArray(e))return e.map(e=>N(e,t));if(!e)throw TypeError(`Empty color reference`);Wd(e)&&(e=hf(e,t));let n=e.space||e.spaceId;return typeof n==`string`&&(e.space=P.get(n)),e.alpha===void 0&&(e.alpha=1),e}var bf=75e-6,P=class e{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?e.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let n=t.coords??this.base.coords;for(let e in n)`name`in n[e]||(n[e].name=e);this.coords=n,this.white=pf(t.white??this.base.white??`D65`),this.formats=t.formats??{};for(let e in this.formats){let t=this.formats[e];t.type||=`function`,t.name||=e}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace===`self`?this:e.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(e,t)=>!0),this.referred=t.referred,Object.defineProperty(this,`path`,{value:xf(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),sf.run(`colorspace-init-end`,this)}inGamut(e,{epsilon:t=bf}={}){if(!this.equals(this.gamutSpace))return e=this.to(this.gamutSpace,e),this.gamutSpace.inGamut(e,{epsilon:t});let n=Object.values(this.coords);return e.every((e,r)=>{let i=n[r];if(i.type!==`angle`&&i.range){if(qd(e))return!0;let[n,r]=i.range;return(n===void 0||e>=n-t)&&(r===void 0||e<=r+t)}return!0})}get isUnbounded(){return Object.values(this.coords).every(e=>!(`range`in e))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let e in this.coords)if(this.coords[e].type===`angle`)return!0;return!1}getFormat(e){if(!e)return null;e===`default`?e=Object.values(this.formats)[0]:typeof e==`string`&&(e=this.formats[e]);let t=df.get(e,this);return t!==e&&e.name in this.formats&&(this.formats[e.name]=t),t}equals(e){return e?this===e||this.id===e||this.id===e.id:!1}to(t,n){if(arguments.length===1){let e=N(t);[t,n]=[e.space,e.coords]}if(t=e.get(t),this.equals(t))return n;n=n.map(e=>qd(e)?0:e);let r=this.path,i=t.path,a,o;for(let e=0;e<r.length&&r[e].equals(i[e]);e++)a=r[e],o=e;if(!a)throw Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let e=r.length-1;e>o;e--)n=r[e].toBase(n);for(let e=o+1;e<i.length;e++)n=i[e].fromBase(n);return n}from(t,n){if(arguments.length===1){let e=N(t);[t,n]=[e.space,e.coords]}return t=e.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let e=[];for(let t in this.coords){let n=this.coords[t],r=n.range||n.refRange;e.push(r?.min??0)}return e}static registry={};static get all(){return[...new Set(Object.values(e.registry))]}static register(e,t){if(arguments.length===1&&(t=arguments[0],e=t.id),t=this.get(t),this.registry[e]&&this.registry[e]!==t)throw Error(`Duplicate color space registration: '${e}'`);if(this.registry[e]=t,arguments.length===1&&t.aliases)for(let e of t.aliases)this.register(e,t);return t}static get(t,...n){if(!t||af(t,this))return t;if(Gd(t)===`string`){let n=e.registry[t.toLowerCase()];if(!n)throw TypeError(`No color space found with id = "${t}"`);return n}if(n.length)return e.get(...n);throw TypeError(`${t} is not a valid color space`)}static findFormat(t,n=e.all){if(!t)return null;typeof t==`string`&&(t={name:t});for(let e of n)for(let[n,r]of Object.entries(e.formats)){r.name??=n,r.type??=`function`;let i=(!t.name||r.name===t.name)&&(!t.type||r.type===t.type);if(t.id){let e=r.ids||[r.id],n=Array.isArray(t.id)?t.id:[t.id];i&&=n.some(t=>e.includes(t))}if(i){let t=df.get(r,e);return t!==r&&(e.formats[r.name]=t),t}}return null}static resolveCoord(t,n){let r=Gd(t),i,a;if(r===`string`?t.includes(`.`)?[i,a]=t.split(`.`):[i,a]=[,t]:Array.isArray(t)?[i,a]=t:(i=t.space,a=t.coordId),i=e.get(i),i||=n,!i)throw TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(r=Gd(a),r===`number`||r===`string`&&a>=0){let e=Object.entries(i.coords)[a];if(e)return{space:i,id:e[0],index:a,...e[1]}}i=e.get(i);let o=a.toLowerCase(),s=0;for(let e in i.coords){let t=i.coords[e];if(e.toLowerCase()===o||t.name?.toLowerCase()===o)return{space:i,id:e,index:s,...t};s++}throw TypeError(`No "${a}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(`, `)}`)}static DEFAULT_FORMAT={type:`functions`,name:`color`}};function xf(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}var Sf=new P({id:`xyz-d65`,name:`XYZ D65`,coords:{x:{refRange:[0,1],name:`X`},y:{refRange:[0,1],name:`Y`},z:{refRange:[0,1],name:`Z`}},white:`D65`,formats:{color:{ids:[`xyz-d65`,`xyz`]}},aliases:[`xyz`]}),Cf=class extends P{constructor(e){e.coords||={r:{range:[0,1],name:`Red`},g:{range:[0,1],name:`Green`},b:{range:[0,1],name:`Blue`}},e.base||=Sf,e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??=t=>{let n=Ud(t,e.toXYZ_M);return this.white!==this.base.white&&(n=mf(this.white,this.base.white,n)),n},e.fromBase??=t=>(t=mf(this.base.white,this.white,t),Ud(t,e.fromXYZ_M))),e.referred??=`display`,super(e)}};function wf(e,t={}){if(Array.isArray(e))return e.map(e=>wf(e,t));let{cssProperty:n=`background-color`,element:r,...i}=t,a=null;try{return N(e,i)}catch(e){a=e}let{CSS:o,getComputedStyle:s}=globalThis;if(Wd(e)&&r&&o&&s&&o.supports(n,e)){let t=r.style[n];e!==t&&(r.style[n]=e);let o=s(r).getPropertyValue(n);if(e!==t&&(r.style[n]=t),o!==e)try{return N(o,i)}catch(e){a=e}else a={message:`Color value is a valid CSS color, but it could not be resolved :(`}}return t.errorMeta&&(t.errorMeta.error=a),null}function Tf(e,t){e=N(e);let n=P.get(t,t?.space),r=t?.precision,i;return i=!n||e.space.equals(n)?e.coords.slice():n.from(e),r===void 0?i:i.map(e=>Yd(e,r))}function Ef(e,t){if(e=N(e),t===`alpha`)return e.alpha??1;let{space:n,index:r}=P.resolveCoord(t,e.space);return Tf(e,n)[r]}function Df(e,t,n,r){return e=N(e),Array.isArray(t)&&([t,n,r]=[e.space,t,n]),t=P.get(t),e.coords=t===e.space?n.slice():t.to(e.space,n),r!==void 0&&(e.alpha=r),e}Df.returns=`color`;function Of(e,t,n){if(e=N(e),arguments.length===2&&Gd(arguments[1])===`object`){let t=arguments[1];for(let n in t)Of(e,n,t[n])}else if(typeof n==`function`&&(n=n(Ef(e,t))),t===`alpha`)e.alpha=n;else{let{space:r,index:i}=P.resolveCoord(t,e.space),a=Tf(e,r);a[i]=n,Df(e,r,a)}return e}Of.returns=`color`;var kf=new P({id:`xyz-d50`,name:`XYZ D50`,white:`D50`,base:Sf,fromBase:e=>mf(Sf.white,`D50`,e),toBase:e=>mf(`D50`,Sf.white,e)}),Af=216/24389,jf=24/116,Mf=24389/27,Nf=ff.D50,Pf=new P({id:`lab`,name:`Lab`,coords:{l:{refRange:[0,100],name:`Lightness`},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Nf,base:kf,fromBase(e){let t=e.map((e,t)=>e/Nf[t]).map(e=>e>Af?Math.cbrt(e):(Mf*e+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let[t,n,r]=e,i=[];return i[1]=(t+16)/116,i[0]=n/500+i[1],i[2]=i[1]-r/200,[i[0]>jf?i[0]**3:(116*i[0]-16)/Mf,e[0]>8?((e[0]+16)/116)**3:e[0]/Mf,i[2]>jf?i[2]**3:(116*i[2]-16)/Mf].map((e,t)=>e*Nf[t])},formats:{lab:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}});function Ff(e){return typeof e==`number`?(e%360+360)%360:e}function If(e,t){let[n,r]=t,i=qd(n),a=qd(r);if(i&&a)return[n,r];if(i?n=r:a&&(r=n),e===`raw`)return t;n=Ff(n),r=Ff(r);let o=r-n;return e===`increasing`?o<0&&(r+=360):e===`decreasing`?o>0&&(n+=360):e===`longer`?-180<o&&o<180&&(o>0?n+=360:r+=360):e===`shorter`&&(o>180?n+=360:o<-180&&(r+=360)),[n,r]}var Lf=new P({id:`lch`,name:`LCH`,coords:{l:{refRange:[0,100],name:`Lightness`},c:{refRange:[0,150],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},base:Pf,fromBase(e){if(this.ε===void 0){let e=Object.values(this.base.coords)[1].refRange;this.ε=(e[1]-e[0])/1e5}let[t,n,r]=e,i=Math.abs(n)<this.ε&&Math.abs(r)<this.ε,a=i?null:Ff(Math.atan2(r,n)*180/Math.PI);return[t,i?0:Math.sqrt(n**2+r**2),a]},toBase(e){let[t,n,r]=e,i=null,a=null;return qd(r)||(n=n<0?0:n,i=n*Math.cos(r*Math.PI/180),a=n*Math.sin(r*Math.PI/180)),[t,i,a]},formats:{lch:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <angle>`]}}}),Rf=25**7,zf=Math.PI,Bf=180/zf,Vf=zf/180;function Hf(e){let t=e*e;return t*t*t*e}function Uf(e,t,{kL:n=1,kC:r=1,kH:i=1}={}){[e,t]=N([e,t]);let[a,o,s]=Pf.from(e),c=Lf.from(Pf,[a,o,s])[1],[l,u,d]=Pf.from(t),f=Lf.from(Pf,[l,u,d])[1];c<0&&(c=0),f<0&&(f=0);let p=Hf((c+f)/2),m=.5*(1-Math.sqrt(p/(p+Rf))),h=(1+m)*o,g=(1+m)*u,_=Math.sqrt(h**2+s**2),ee=Math.sqrt(g**2+d**2),te=h===0&&s===0?0:Math.atan2(s,h),ne=g===0&&d===0?0:Math.atan2(d,g);te<0&&(te+=2*zf),ne<0&&(ne+=2*zf),te*=Bf,ne*=Bf;let re=l-a,ie=ee-_,ae=ne-te,oe=te+ne,se=Math.abs(ae),ce;_*ee===0?ce=0:se<=180?ce=ae:ae>180?ce=ae-360:ae<-180?ce=ae+360:cf.warn(`the unthinkable has happened`);let le=2*Math.sqrt(ee*_)*Math.sin(ce*Vf/2),ue=(a+l)/2,de=(_+ee)/2,fe=Hf(de),pe;pe=_*ee===0?oe:se<=180?oe/2:oe<360?(oe+360)/2:(oe-360)/2;let me=(ue-50)**2,he=1+.015*me/Math.sqrt(20+me),ge=1+.045*de,v=1;v-=.17*Math.cos((pe-30)*Vf),v+=.24*Math.cos(2*pe*Vf),v+=.32*Math.cos((3*pe+6)*Vf),v-=.2*Math.cos((4*pe-63)*Vf);let y=1+.015*de*v,_e=30*Math.exp(-1*((pe-275)/25)**2),ve=2*Math.sqrt(fe/(fe+Rf)),ye=-1*Math.sin(2*_e*Vf)*ve,b=(re/(n*he))**2;return b+=(ie/(r*ge))**2,b+=(le/(i*y))**2,b+=ye*(ie/(r*ge))*(le/(i*y)),Math.sqrt(b)}var Wf=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Gf=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],Kf=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],qf=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],Jf=new P({id:`oklab`,name:`Oklab`,coords:{l:{refRange:[0,1],name:`Lightness`},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:`D65`,base:Sf,fromBase(e){let t=Ud(e,Wf);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),Ud(t,Kf,t)},toBase(e){let t=Ud(e,qf);return t[0]**=3,t[1]**=3,t[2]**=3,Ud(t,Gf,t)},formats:{oklab:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}});function Yf(e,t){[e,t]=N([e,t]);let[n,r,i]=Jf.from(e),[a,o,s]=Jf.from(t),c=n-a,l=r-o,u=i-s;return Math.sqrt(c**2+l**2+u**2)}var Xf=75e-6;function Zf(e,t,{epsilon:n=Xf}={}){e=N(e),t||=e.space,t=P.get(t);let r=e.coords;return t!==e.space&&(r=t.from(e)),t.inGamut(r,{epsilon:n})}function Qf(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function $f(e,t,n=`lab`){n=P.get(n);let r=n.from(e),i=n.from(t);return Math.sqrt(r.reduce((e,t,n)=>{let r=i[n];return qd(t)||qd(r)?e:e+(r-t)**2},0))}function ep(e,t){return $f(e,t,`lab`)}var tp=Math.PI/180;function np(e,t,{l:n=2,c:r=1}={}){[e,t]=N([e,t]);let[i,a,o]=Pf.from(e),[,s,c]=Lf.from(Pf,[i,a,o]),[l,u,d]=Pf.from(t),f=Lf.from(Pf,[l,u,d])[1];s<0&&(s=0),f<0&&(f=0);let p=i-l,m=s-f,h=a-u,g=o-d,_=h**2+g**2-m**2,ee=.511;i>=16&&(ee=.040975*i/(1+.01765*i));let te=.0638*s/(1+.0131*s)+.638,ne;qd(c)&&(c=0),ne=c>=164&&c<=345?.56+Math.abs(.2*Math.cos((c+168)*tp)):.36+Math.abs(.4*Math.cos((c+35)*tp));let re=s**4,ie=Math.sqrt(re/(re+1900)),ae=te*(ie*ne+1-ie),oe=(p/(n*ee))**2;return oe+=(m/(r*te))**2,oe+=_/ae**2,Math.sqrt(oe)}var rp=203,ip=new P({id:`xyz-abs-d65`,cssId:`--xyz-abs-d65`,name:`Absolute XYZ D65`,coords:{x:{refRange:[0,9504.7],name:`Xa`},y:{refRange:[0,1e4],name:`Ya`},z:{refRange:[0,10888.3],name:`Za`}},base:Sf,fromBase(e){return e.map(e=>e*rp)},toBase(e){return e.map(e=>e/rp)}}),ap=1.15,op=.66,sp=2610/2**14,cp=2**14/2610,lp=3424/2**12,up=2413/2**7,dp=2392/2**7,fp=1.7*2523/2**5,pp=2**5/(1.7*2523),mp=-.56,hp=16295499532821565e-27,gp=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],_p=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],vp=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],yp=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]],bp=new P({id:`jzazbz`,name:`Jzazbz`,coords:{jz:{refRange:[0,1],name:`Jz`},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:ip,fromBase(e){let[t,n,r]=e,[i,a,o]=Ud(Ud([ap*t-(ap-1)*r,op*n-(op-1)*t,r],gp).map(function(e){return tf((lp+up*tf(e/1e4,sp))/(1+dp*tf(e/1e4,sp)),fp)}),vp);return[(1+mp)*i/(1+mp*i)-hp,a,o]},toBase(e){let[t,n,r]=e,[i,a,o]=Ud(Ud([(t+hp)/(1+mp-mp*(t+hp)),n,r],yp).map(function(e){return 1e4*tf((lp-tf(e,pp))/(dp*tf(e,pp)-up),cp)}),_p),s=(i+(ap-1)*o)/ap;return[s,(a+(op-1)*s)/op,o]},formats:{jzazbz:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}}),xp=new P({id:`jzczhz`,name:`JzCzHz`,coords:{jz:{refRange:[0,1],name:`Jz`},cz:{refRange:[0,.26],name:`Chroma`},hz:{refRange:[0,360],type:`angle`,name:`Hue`}},base:bp,fromBase:Lf.fromBase,toBase:Lf.toBase,formats:{jzczhz:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <angle>`]}}});function Sp(e,t){[e,t]=N([e,t]);let[n,r,i]=xp.from(e),[a,o,s]=xp.from(t),c=n-a,l=r-o;qd(i)&&qd(s)?(i=0,s=0):qd(i)?i=s:qd(s)&&(s=i);let u=i-s,d=2*Math.sqrt(r*o)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(c**2+l**2+d**2)}var Cp=3424/4096,wp=2413/128,Tp=2392/128,Ep=2610/16384,Dp=2523/32,Op=16384/2610,kp=32/2523,Ap=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],jp=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Mp=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],Np=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]],Pp=new P({id:`ictcp`,name:`ICTCP`,coords:{i:{refRange:[0,1],name:`I`},ct:{refRange:[-.5,.5],name:`CT`},cp:{refRange:[-.5,.5],name:`CP`}},base:ip,fromBase(e){return Fp(Ud(e,Ap))},toBase(e){return Ud(Ip(e),Np)},formats:{ictcp:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}});function Fp(e){return Ud(e.map(function(e){return((Cp+wp*(e/1e4)**Ep)/(1+Tp*(e/1e4)**Ep))**Dp}),jp)}function Ip(e){return Ud(e,Mp).map(function(e){return 1e4*(Math.max(e**kp-Cp,0)/(wp-Tp*e**kp))**Op})}function Lp(e,t){[e,t]=N([e,t]);let[n,r,i]=Pp.from(e),[a,o,s]=Pp.from(t);return 720*Math.sqrt((n-a)**2+.25*(r-o)**2+(i-s)**2)}function Rp(e,t){[e,t]=N([e,t]);let[n,r,i]=Jf.from(e),[a,o,s]=Jf.from(t),c=n-a,l=2*(r-o),u=2*(i-s);return Math.sqrt(c**2+l**2+u**2)}var zp=ff.D65,Bp=.42,Vp=1/Bp,Hp=2*Math.PI,Up=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],Wp=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],Gp=[[460,451,288],[460,-891,-261],[460,-220,-6300]],Kp={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},qp={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},Jp=180/Math.PI,Yp=Math.PI/180;function Xp(e,t){return e.map(e=>{let n=tf(t*Math.abs(e)*.01,Bp);return 400*ef(n,e)/(n+27.13)})}function Zp(e,t){let n=100/t*27.13**Vp;return e.map(e=>{let t=Math.abs(e);return ef(n*tf(t/(400-t),Vp),e)})}function Qp(e){let t=Ff(e);t<=qp.h[0]&&(t+=360);let n=rf(qp.h,t)-1,[r,i]=qp.h.slice(n,n+2),[a,o]=qp.e.slice(n,n+2),s=qp.H[n],c=(t-r)/a;return s+100*c/(c+(i-t)/o)}function $p(e){let t=(e%400+400)%400,n=Math.floor(.01*t);t%=100;let[r,i]=qp.h.slice(n,n+2),[a,o]=qp.e.slice(n,n+2);return Ff((t*(o*r-a*i)-100*r*o)/(t*(o-a)-100*o))}function em(e,t,n,r,i){let a={};a.discounting=i,a.refWhite=e,a.surround=r;let o=e.map(e=>e*100);a.la=t,a.yb=n;let s=o[1],c=Ud(o,Up),l=Kp[a.surround],u=l[0];a.c=l[1],a.nc=l[2];let d=(1/(5*a.la+1))**4;a.fl=d*a.la+.1*(1-d)*(1-d)*Math.cbrt(5*a.la),a.flRoot=a.fl**.25,a.n=a.yb/s,a.z=1.48+Math.sqrt(a.n),a.nbb=.725*a.n**-.2,a.ncb=a.nbb;let f=Math.max(Math.min(u*(1-1/3.6*Math.exp((-a.la-42)/92)),1),0);a.dRgb=c.map(e=>Xd(1,s/e,f)),a.dRgbInv=a.dRgb.map(e=>1/e);let p=Xp(c.map((e,t)=>e*a.dRgb[t]),a.fl);return a.aW=a.nbb*(2*p[0]+p[1]+.05*p[2]),a}var tm=em(zp,64/Math.PI*.2,20,`average`,!1);function nm(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw Error(`Conversion requires one and only one: 'J' or 'Q'`);if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw Error(`Conversion requires one and only one: 'C', 'M' or 's'`);if(!(e.h!==void 0^e.H!==void 0))throw Error(`Conversion requires one and only one: 'h' or 'H'`);if(e.J===0||e.Q===0)return[0,0,0];let n=0;n=e.h===void 0?$p(e.H)*Yp:Ff(e.h)*Yp;let r=Math.cos(n),i=Math.sin(n),a=0;e.J===void 0?e.Q!==void 0&&(a=.25*t.c*e.Q/((t.aW+4)*t.flRoot)):a=tf(e.J,1/2)*.1;let o=0;e.C===void 0?e.M===void 0?e.s!==void 0&&(o=4e-4*e.s**2*(t.aW+4)/t.c):o=e.M/t.flRoot/a:o=e.C/a;let s=tf(o*(1.64-.29**t.n)**-.73,10/9),c=.25*(Math.cos(n+2)+3.8),l=t.aW*tf(a,2/t.c/t.z),u=5e4/13*t.nc*t.ncb*c,d=l/t.nbb,f=23*(d+.305)*nf(s,23*u+s*(11*r+108*i));return Ud(Zp(Ud([d,f*r,f*i],Gp).map(e=>e*1/1403),t.fl).map((e,n)=>e*t.dRgbInv[n]),Wp).map(e=>e/100)}function rm(e,t){let n=Xp(Ud(e.map(e=>e*100),Up).map((e,n)=>e*t.dRgb[n]),t.fl),r=n[0]+(-12*n[1]+n[2])/11,i=(n[0]+n[1]-2*n[2])/9,a=(Math.atan2(i,r)%Hp+Hp)%Hp,o=.25*(Math.cos(a+2)+3.8),s=tf(5e4/13*t.nc*t.ncb*nf(o*Math.sqrt(r**2+i**2),n[0]+n[1]+1.05*n[2]+.305),.9)*(1.64-.29**t.n)**.73,c=tf(t.nbb*(2*n[0]+n[1]+.05*n[2])/t.aW,.5*t.c*t.z),l=100*tf(c,2),u=4/t.c*c*(t.aW+4)*t.flRoot,d=s*c,f=d*t.flRoot,p=Ff(a*Jp),m=Qp(p);return{J:l,C:d,h:p,s:50*tf(t.c*s/(t.aW+4),1/2),Q:u,M:f,H:m}}var im=new P({id:`cam16-jmh`,cssId:`--cam16-jmh`,name:`CAM16-JMh`,coords:{j:{refRange:[0,100],name:`J`},m:{refRange:[0,105],name:`Colorfulness`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},base:Sf,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=rm(e,tm),n=Math.abs(t.M)<this.ε;return[t.J,n?0:t.M,n?null:t.h]},toBase(e){return nm({J:e[0],M:e[1],h:e[2]},tm)}}),am=ff.D65,om=216/24389,sm=24389/27;function cm(e){return 116*(e>om?Math.cbrt(e):(sm*e+16)/116)-16}function lm(e){return e>8?((e+16)/116)**3:e/sm}function um(e,t){let[n,r,i]=e,a=[],o=0;if(i===0)return[0,0,0];let s=lm(i);o=i>0?.00379058511492914*i**2+.608983189401032*i+.9155088574762233:9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;let c=0,l=1/0;for(;c<=15;){a=nm({J:o,C:r,h:n},t);let e=Math.abs(a[1]-s);if(e<l){if(e<=2e-12)return a;l=e}o-=(a[1]-s)*o/(2*a[1]),c+=1}return nm({J:o,C:r,h:n},t)}function dm(e,t){let n=cm(e[1]);if(n===0)return[0,0,0];let r=rm(e,fm);return[Ff(r.h),r.C,n]}var fm=em(am,200/Math.PI*lm(50),lm(50)*100,`average`,!1),pm=new P({id:`hct`,name:`HCT`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},c:{refRange:[0,145],name:`Colorfulness`},t:{refRange:[0,100],name:`Tone`}},base:Sf,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=dm(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return um(e,fm)},formats:{color:{id:`--hct`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),mm=Math.PI/180,hm=[1,.007,.0228];function gm(e){e[1]<0&&(e=pm.fromBase(pm.toBase(e)));let t=Math.log(Math.max(1+hm[2]*e[1]*fm.flRoot,1))/hm[2],n=e[0]*mm,r=t*Math.cos(n),i=t*Math.sin(n);return[e[2],r,i]}function _m(e,t){[e,t]=N([e,t]);let[n,r,i]=gm(pm.from(e)),[a,o,s]=gm(pm.from(t));return Math.sqrt((n-a)**2+(r-o)**2+(i-s)**2)}var vm={deltaE76:ep,deltaECMC:np,deltaE2000:Uf,deltaEJz:Sp,deltaEITP:Lp,deltaEOK:Yf,deltaEOK2:Rp,deltaEHCT:_m};function ym(e){let t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}var bm={hct:{method:`hct.c`,jnd:2,deltaEMethod:`hct`,blackWhiteClamp:{}},"hct-tonal":{method:`hct.c`,jnd:0,deltaEMethod:`hct`,blackWhiteClamp:{channel:`hct.t`,min:0,max:100}}};function xm(e,{method:t=cf.gamut_mapping,space:n=void 0,deltaEMethod:r=``,jnd:i=2,blackWhiteClamp:a=void 0}={}){if(e=N(e),Wd(arguments[1])?n=arguments[1]:n||=e.space,n=P.get(n),Zf(e,n,{epsilon:0}))return e;let o;if(t===`css`)o=Cm(e,{space:n});else{if(t!==`clip`&&!Zf(e,n)){Object.prototype.hasOwnProperty.call(bm,t)&&({method:t,jnd:i,deltaEMethod:r,blackWhiteClamp:a}=bm[t]);let s=Uf;if(r!==``){for(let e in vm)if(`deltae`+r.toLowerCase()===e.toLowerCase()){s=vm[e];break}}i===0&&(i=1e-16);let c=xm(wm(e,n),{method:`clip`,space:n});if(s(e,c)>i){if(a&&Object.keys(a).length===3){let t=P.resolveCoord(a.channel),n=Ef(wm(e,t.space),t.id);if(qd(n)&&(n=0),n>=a.max)return wm({space:`xyz-d65`,coords:ff.D65},e.space);if(n<=a.min)return wm({space:`xyz-d65`,coords:[0,0,0]},e.space)}let r=P.resolveCoord(t),c=r.space,l=r.id,u=wm(e,c);u.coords.forEach((e,t)=>{qd(e)&&(u.coords[t]=0)});let d=(r.range||r.refRange)[0],f=ym(i),p=d,m=Ef(u,l);for(;m-p>f;){let e=Qf(u);e=xm(e,{space:n,method:`clip`}),s(u,e)-i<f?p=Ef(u,l):m=Ef(u,l),Of(u,l,(p+m)/2)}o=wm(u,n)}else o=c}else o=wm(e,n);if(t===`clip`||!Zf(o,n,{epsilon:0})){let e=Object.values(n.coords).map(e=>e.range||[]);o.coords=o.coords.map((t,n)=>{let[r,i]=e[n];return r!==void 0&&(t=Math.max(r,t)),i!==void 0&&(t=Math.min(t,i)),t})}}return n!==e.space&&(o=wm(o,e.space)),e.coords=o.coords,e}xm.returns=`color`;var Sm={WHITE:{space:Jf,coords:[1,0,0],alpha:1},BLACK:{space:Jf,coords:[0,0,0],alpha:1}};function Cm(e,{space:t}={}){let n=.02,r=1e-4;e=N(e),t||=e.space,t=P.get(t);let i=P.get(`oklch`);if(t.isUnbounded)return wm(e,t);let a=wm(e,i),o=a.coords[0];if(o>=1){let n=wm(Sm.WHITE,t);return n.alpha=e.alpha,wm(n,t)}if(o<=0){let n=wm(Sm.BLACK,t);return n.alpha=e.alpha,wm(n,t)}if(Zf(a,t,{epsilon:0}))return wm(a,t);function s(e){let n=wm(e,t),r=Object.values(t.coords);return n.coords=n.coords.map((e,t)=>{if(`range`in r[t]){let[n,i]=r[t].range;return $d(n,e,i)}return e}),n}let c=0,l=a.coords[1],u=!0,d=Qf(a),f=s(d),p=Yf(f,d);if(p<n)return f;for(;l-c>r;){let e=(c+l)/2;if(d.coords[1]=e,u&&Zf(d,t,{epsilon:0}))c=e;else if(f=s(d),p=Yf(f,d),p<n){if(n-p<r)break;u=!1,c=e}else l=e}return f}function wm(e,t,{inGamut:n}={}){e=N(e),t=P.get(t);let r=t.from(e),i={space:t,coords:r,alpha:e.alpha};return n&&(i=xm(i,n===!0?void 0:n)),i}wm.returns=`color`;function Tm(e,t={}){let{precision:n=cf.precision,format:r,inGamut:i=!0,coords:a,alpha:o,commas:s}=t,c,l=N(e),u=r,d=l.parseMeta;d&&!r&&(d.format.canSerialize()&&(r=d.format,u=d.formatId),a??=d.types,o??=d.alphaType,s??=d.commas),u&&(r=l.space.getFormat(r)??P.findFormat(u)),r||(r=l.space.getFormat(`default`)??P.DEFAULT_FORMAT,u=r.name),r&&r.space&&r.space!==l.space&&(l=wm(l,r.space));let f=l.coords.slice();if(i||=r.toGamut,i&&!Zf(l)&&(f=xm(Qf(l),i===!0?void 0:i).coords),r.type===`custom`)if(r.serialize)c=r.serialize(f,l.alpha,t);else throw TypeError(`format ${u} can only be used to parse colors, not for serialization`);else{let e=r.name||`color`,t=r.serializeCoords(f,n,a);if(e===`color`){let e=r.id||r.ids?.[0]||l.space.cssId||l.space.id;t.unshift(e)}let i=l.alpha;o!==void 0&&typeof o!=`object`&&(o=typeof o==`string`?{type:o}:{include:o});let u=o?.type??`<number>`,d=o?.include===!0||r.alpha===!0||o?.include!==!1&&r.alpha!==!1&&i<1,p=``;if(s??=r.commas,d){if(n!==null){let e;u===`<percentage>`&&(e=`%`,i*=100),i=Kd(i,{precision:n,unit:e})}p=`${s?`,`:` /`} ${i}`}c=`${e}(${t.join(s?`, `:` `)}${p})`}return c}var Em=new Cf({id:`rec2020-linear`,cssId:`--rec2020-linear`,name:`Linear REC.2020`,white:`D65`,toXYZ_M:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ_M:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]]}),Dm=new Cf({id:`rec2020`,name:`REC.2020`,base:Em,toBase(e){return e.map(function(e){let t=e<0?-1:1;return t*(e*t)**2.4})},fromBase(e){return e.map(function(e){let t=e<0?-1:1;return t*(e*t)**(1/2.4)})}}),Om=new Cf({id:`p3-linear`,cssId:`display-p3-linear`,name:`Linear P3`,white:`D65`,toXYZ_M:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ_M:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]}),km=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Am=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],jm=new Cf({id:`srgb-linear`,name:`Linear sRGB`,white:`D65`,toXYZ_M:km,fromXYZ_M:Am}),Mm={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},Nm=[,,,].fill(`<percentage> | <number>[0, 255]`),Pm=[,,,].fill(`<number>[0, 255]`),Fm=new Cf({id:`srgb`,name:`sRGB`,base:jm,fromBase:e=>e.map(e=>{let t=e<0?-1:1,n=e*t;return n>.0031308?t*(1.055*n**(1/2.4)-.055):12.92*e}),toBase:e=>e.map(e=>{let t=e<0?-1:1,n=e*t;return n<=.04045?e/12.92:t*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Nm},rgb_number:{name:`rgb`,commas:!0,coords:Pm,alpha:!1},color:{},rgba:{coords:Nm,commas:!0,alpha:!0},rgba_number:{name:`rgba`,commas:!0,coords:Pm},hex:{type:`custom`,toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,`$&$&`));let t=[];return e.replace(/[a-f0-9]{2}/gi,e=>{t.push(parseInt(e,16)/255)}),{spaceId:`srgb`,coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0,alpha:r}={})=>{(r!==!1&&t<1||r===!0)&&e.push(t),e=e.map(e=>Math.round(e*255));let i=n&&e.every(e=>e%17==0);return`#`+e.map(e=>i?(e/17).toString(16):e.toString(16).padStart(2,`0`)).join(``)}},keyword:{type:`custom`,test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:`srgb`,coords:null,alpha:1};if(e===`transparent`?(t.coords=Mm.black,t.alpha=0):t.coords=Mm[e],t.coords)return t}}}}),Im=new Cf({id:`p3`,cssId:`display-p3`,name:`P3`,base:Om,fromBase:Fm.fromBase,toBase:Fm.toBase});cf.display_space=Fm;var Lm;if(typeof CSS<`u`&&CSS.supports)for(let e of[Pf,Dm,Im]){let t=Tm({space:e,coords:e.getMinCoords(),alpha:1});if(CSS.supports(`color`,t)){cf.display_space=e;break}}function Rm(e,{space:t=cf.display_space,...n}={}){e=N(e);let r=Tm(e,n);if(typeof CSS>`u`||CSS.supports(`color`,r)||!cf.display_space)r=new String(r),r.color=e;else{let i=e;if((e.coords.some(qd)||qd(e.alpha))&&!(Lm??=CSS.supports(`color`,`hsl(none 50% 50%)`))&&(i=Qf(e),i.coords=i.coords.map(Jd),i.alpha=Jd(i.alpha),r=Tm(i,n),CSS.supports(`color`,r)))return r=new String(r),r.color=i,r;i=wm(i,t),r=new String(Tm(i,n)),r.color=i}return r}function zm(e,t,{space:n,hue:r=`shorter`}={}){e=N(e),n||=e.space,n=P.get(n);let i=Object.values(n.coords);[e,t]=[e,t].map(e=>wm(e,n));let[a,o]=[e,t].map(e=>e.coords),s=a.map((e,t)=>{let n=i[t],a=o[t];return n.type===`angle`&&([e,a]=If(r,[e,a])),Bm(e,a)}),c=Bm(e.alpha,t.alpha);return{space:n,coords:s,alpha:c}}function Bm(e,t){return qd(e)||qd(t)?e===t?null:0:e-t}function Vm(e,t){return e=N(e),t=N(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((e,n)=>e===t.coords[n])}function Hm(e){return Ef(e,[Sf,`y`])}function Um(e,t){Of(e,[Sf,`y`],t)}function Wm(e){Object.defineProperty(e.prototype,`luminance`,{get(){return Hm(this)},set(e){Um(this,e)}})}var Gm=Object.freeze({__proto__:null,getLuminance:Hm,register:Wm,setLuminance:Um});function Km(e,t){e=N(e),t=N(t);let n=Math.max(Hm(e),0),r=Math.max(Hm(t),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}var qm=.56,Jm=.57,Ym=.62,Xm=.65,Zm=.022,Qm=1.414,$m=.1,eh=5e-4,th=1.14,nh=.027,rh=1.14;function ih(e){return e>=Zm?e:e+(Zm-e)**Qm}function ah(e){return(e<0?-1:1)*Math.abs(e)**2.4}function oh(e,t){t=N(t),e=N(e);let n,r,i,a,o,s;t=wm(t,`srgb`),[a,o,s]=t.coords.map(e=>qd(e)?0:e);let c=ah(a)*.2126729+ah(o)*.7151522+ah(s)*.072175;e=wm(e,`srgb`),[a,o,s]=e.coords.map(e=>qd(e)?0:e);let l=ah(a)*.2126729+ah(o)*.7151522+ah(s)*.072175,u=ih(c),d=ih(l),f=d>u;return Math.abs(d-u)<eh?r=0:f?(n=d**qm-u**Jm,r=n*th):(n=d**Xm-u**Ym,r=n*rh),i=Math.abs(r)<$m?0:r>0?r-nh:r+nh,i*100}function sh(e,t){e=N(e),t=N(t);let n=Math.max(Hm(e),0),r=Math.max(Hm(t),0);r>n&&([n,r]=[r,n]);let i=n+r;return i===0?0:(n-r)/i}var ch=5e4;function lh(e,t){e=N(e),t=N(t);let n=Math.max(Hm(e),0),r=Math.max(Hm(t),0);return r>n&&([n,r]=[r,n]),r===0?ch:(n-r)/r}function uh(e,t){e=N(e),t=N(t);let n=Ef(e,[Pf,`l`]),r=Ef(t,[Pf,`l`]);return Math.abs(n-r)}var dh=216/24389,fh=24/116,ph=24389/27,mh=ff.D65,hh=new P({id:`lab-d65`,name:`Lab D65`,coords:{l:{refRange:[0,100],name:`Lightness`},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:mh,base:Sf,fromBase(e){let t=e.map((e,t)=>e/mh[t]).map(e=>e>dh?Math.cbrt(e):(ph*e+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>fh?t[0]**3:(116*t[0]-16)/ph,e[0]>8?((e[0]+16)/116)**3:e[0]/ph,t[2]>fh?t[2]**3:(116*t[2]-16)/ph].map((e,t)=>e*mh[t])},formats:{"lab-d65":{coords:[`<number> | <percentage>`,`<number> | <percentage>`,`<number> | <percentage>`]}}}),gh=5**.5*.5+.5;function _h(e,t){e=N(e),t=N(t);let n=Ef(e,[hh,`l`]),r=Ef(t,[hh,`l`]),i=Math.abs(n**+gh-r**+gh)**(1/gh)*Math.SQRT2-40;return i<7.5?0:i}var vh=Object.freeze({__proto__:null,contrastAPCA:oh,contrastDeltaPhi:_h,contrastLstar:uh,contrastMichelson:sh,contrastWCAG21:Km,contrastWeber:lh});function yh(e,t,n){Wd(n)&&(n={algorithm:n});let{algorithm:r,...i}=n||{};if(!r){let e=Object.keys(vh).map(e=>e.replace(/^contrast/,``)).join(`, `);throw TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${e}`)}e=N(e),t=N(t);for(let n in vh)if(`contrast`+r.toLowerCase()===n.toLowerCase())return vh[n](e,t,i);throw TypeError(`Unknown contrast algorithm: ${r}`)}function bh(e){let[t,n,r]=Tf(e,Sf),i=t+15*n+3*r;return[4*t/i,9*n/i]}function xh(e){let[t,n,r]=Tf(e,Sf),i=t+n+r;return[t/i,n/i]}function Sh(e){Object.defineProperty(e.prototype,`uv`,{get(){return bh(this)}}),Object.defineProperty(e.prototype,`xy`,{get(){return xh(this)}})}var Ch=Object.freeze({__proto__:null,register:Sh,uv:bh,xy:xh});function wh(e,t,n={}){Wd(n)&&(n={method:n});let{method:r=cf.deltaE,...i}=n;for(let n in vm)if(`deltae`+r.toLowerCase()===n.toLowerCase())return vm[n](e,t,i);throw TypeError(`Unknown deltaE method: ${r}`)}function Th(e,t=.25){return Of(e,[P.get(`oklch`,`lch`),`l`],e=>e*(1+t))}function Eh(e,t=.25){return Of(e,[P.get(`oklch`,`lch`),`l`],e=>e*(1-t))}Th.returns=`color`,Eh.returns=`color`;var Dh=Object.freeze({__proto__:null,darken:Eh,lighten:Th});function Oh(e,t,n,r={}){return[e,t]=[N(e),N(t)],Gd(n)===`object`&&([n,r]=[.5,n]),Ah(e,t,r)(n??.5)}function kh(e,t,n={}){let r;jh(e)&&([r,n]=[e,t],[e,t]=r.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:a,steps:o=2,maxSteps:s=1e3,...c}=n;r||=([e,t]=[N(e),N(t)],Ah(e,t,c));let l=wh(e,t),u=i>0?Math.max(o,Math.ceil(l/i)+1):o,d=[];if(s!==void 0&&(u=Math.min(u,s)),u===1)d=[{p:.5,color:r(.5)}];else{let e=1/(u-1);d=Array.from({length:u},(t,n)=>{let i=n*e;return{p:i,color:r(i)}})}if(i>0){let e=d.reduce((e,t,n)=>{if(n===0)return 0;let r=wh(t.color,d[n-1].color,a);return Math.max(e,r)},0);for(;e>i;){e=0;for(let t=1;t<d.length&&d.length<s;t++){let n=d[t-1],i=d[t],a=(i.p+n.p)/2,o=r(a);e=Math.max(e,wh(o,n.color),wh(o,i.color)),d.splice(t,0,{p:a,color:r(a)}),t++}}}return d=d.map(e=>e.color),d}function Ah(e,t,n={}){if(jh(e)){let[n,r]=[e,t];return Ah(...n.rangeArgs.colors,{...n.rangeArgs.options,...r})}let{space:r,outputSpace:i,progression:a,premultiplied:o}=n;e=N(e),t=N(t),e=Qf(e),t=Qf(t);let s={colors:[e,t],options:n};if(r=r?P.get(r):P.registry[cf.interpolationSpace]||e.space,i=i?P.get(i):r,e=wm(e,r),t=wm(t,r),e=xm(e),t=xm(t),r.coords.h&&r.coords.h.type===`angle`){let i=n.hue=n.hue||`shorter`,a=[r,`h`],[o,s]=[Ef(e,a),Ef(t,a)];qd(o)&&!qd(s)?o=s:qd(s)&&!qd(o)&&(s=o),[o,s]=If(i,[o,s]),Of(e,a,o),Of(t,a,s)}return o&&(e.coords=e.coords.map(t=>t*e.alpha),t.coords=t.coords.map(e=>e*t.alpha)),Object.assign(n=>{n=a?a(n):n;let s=e.coords.map((e,r)=>{let i=t.coords[r];return Xd(e,i,n)}),c=Xd(e.alpha,t.alpha,n),l={space:r,coords:s,alpha:c};return o&&(l.coords=l.coords.map(e=>e/c)),i!==r&&(l=wm(l,i)),l},{rangeArgs:s})}function jh(e){return Gd(e)===`function`&&!!e.rangeArgs}cf.interpolationSpace=`lab`;function Mh(e){e.defineFunction(`mix`,Oh,{returns:`color`}),e.defineFunction(`range`,Ah,{returns:`function<color>`}),e.defineFunction(`steps`,kh,{returns:`array<color>`})}var Nh=Object.freeze({__proto__:null,isRange:jh,mix:Oh,range:Ah,register:Mh,steps:kh}),Ph=new P({id:`hsl`,name:`HSL`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,100],name:`Saturation`},l:{range:[0,100],name:`Lightness`}},base:Fm,fromBase:e=>{let t=Math.max(...e),n=Math.min(...e),[r,i,a]=e,[o,s,c]=[null,0,(n+t)/2],l=t-n;if(l!==0){switch(s=c===0||c===1?0:(t-c)/Math.min(c,1-c),t){case r:o=(i-a)/l+(i<a?6:0);break;case i:o=(a-r)/l+2;break;case a:o=(r-i)/l+4}o*=60}return s<0&&(o+=180,s=Math.abs(s)),o>=360&&(o-=360),[o,s*100,c*100]},toBase:e=>{let[t,n,r]=e;t%=360,t<0&&(t+=360),n/=100,r/=100;function i(e){let i=(e+t/30)%12,a=n*Math.min(r,1-r);return r-a*Math.max(-1,Math.min(i-3,9-i,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]},hsla:{coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`],commas:!0,alpha:!0}}}),Fh=new P({id:`hsv`,name:`HSV`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,100],name:`Saturation`},v:{range:[0,100],name:`Value`}},base:Fm,fromBase(e){let t=Math.max(...e),n=Math.min(...e),[r,i,a]=e,[o,s,c]=[null,0,t],l=t-n;if(l!==0){switch(t){case r:o=(i-a)/l+(i<a?6:0);break;case i:o=(a-r)/l+2;break;case a:o=(r-i)/l+4}o*=60}return c&&(s=l/c),o>=360&&(o-=360),[o,s*100,c*100]},toBase(e){let[t,n,r]=e;t%=360,t<0&&(t+=360),n/=100,r/=100;function i(e){let i=(e+t/60)%6;return r-r*n*Math.max(0,Math.min(i,4-i,1))}return[i(5),i(3),i(1)]},formats:{color:{id:`--hsv`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),Ih=new P({id:`hwb`,name:`HWB`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},w:{range:[0,100],name:`Whiteness`},b:{range:[0,100],name:`Blackness`}},base:Fh,fromBase(e){let[t,n,r]=e;return[t,r*(100-n)/100,100-r]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=n+r;if(i>=1)return[t,0,n/i*100];let a=1-r;return[t,(a===0?0:1-n/a)*100,a*100]},formats:{hwb:{coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),Lh=new Cf({id:`a98rgb-linear`,cssId:`--a98-rgb-linear`,name:`Linear Adobe® 98 RGB compatible`,white:`D65`,toXYZ_M:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ_M:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]}),Rh=new Cf({id:`a98rgb`,cssId:`a98-rgb`,name:`Adobe® 98 RGB compatible`,base:Lh,toBase:e=>e.map(e=>Math.abs(e)**(563/256)*Math.sign(e)),fromBase:e=>e.map(e=>Math.abs(e)**(256/563)*Math.sign(e))}),zh=new Cf({id:`prophoto-linear`,cssId:`--prophoto-rgb-linear`,name:`Linear ProPhoto`,white:`D50`,base:kf,toXYZ_M:[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],fromXYZ_M:[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]]}),Bh=1/512,Vh=16/512,Hh=new Cf({id:`prophoto`,cssId:`prophoto-rgb`,name:`ProPhoto`,base:zh,toBase(e){return e.map(e=>{let t=e<0?-1:1,n=e*t;return n<Vh?e/16:t*n**1.8})},fromBase(e){return e.map(e=>{let t=e<0?-1:1,n=e*t;return n>=Bh?t*n**(1/1.8):16*e})}}),Uh=1.09929682680944,Wh=.018053968510807,Gh=new Cf({id:`--rec2020-oetf`,name:`REC.2020_Scene_Referred`,base:Em,referred:`scene`,toBase(e){return e.map(function(e){let t=e<0?-1:1,n=e*t;return n<Wh*4.5?e/4.5:t*((n+Uh-1)/Uh)**(1/.45)})},fromBase(e){return e.map(function(e){let t=e<0?-1:1,n=e*t;return n>=Wh?t*(Uh*n**.45-(Uh-1)):4.5*e})}}),Kh=new P({id:`oklch`,name:`OkLCh`,coords:{l:{refRange:[0,1],name:`Lightness`},c:{refRange:[0,.4],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},white:`D65`,base:Jf,fromBase:Lf.fromBase,toBase:Lf.toBase,formats:{oklch:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <angle>`]}}}),qh=2*Math.PI,Jh=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],Yh=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],Xh=Number.MAX_VALUE,Zh=.206,Qh=.03,$h=(1+Zh)/(1+Qh);function eg(e,t){let n=e.length;if(n!==t.length)throw Error(`Vectors of size ${n} and ${t.length} are not aligned`);let r=0;return e.forEach((e,n)=>{r+=e*t[n]}),r}function tg(e){return .5*($h*e-Zh+Math.sqrt(($h*e-Zh)*($h*e-Zh)+4*Qh*$h*e))}function ng(e){return(e**2+Zh*e)/($h*(e+Qh))}function rg(e){let[t,n]=e;return[n/t,n/(1-t)]}function ig(e,t){return[.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))))]}function ag(e,t){let n=Ud(e,qf);return n[0]**=3,n[1]**=3,n[2]**=3,Ud(n,t,n)}function og(e,t,n,r){let i=lg(e,t,n,r),a=ag([1,i*e,i*t],n),o=tf(1/Math.max(...a),1/3);return[o,o*i]}function sg(e,t,n,r,i,a,o,s){let c;if(s===void 0&&(s=og(e,t,a,o)),(n-i)*s[1]-(s[0]-i)*r<=0)c=s[1]*i/(r*s[0]+s[1]*(i-n));else{c=s[1]*(i-1)/(r*(s[0]-1)+s[1]*(i-n));let o=n-i,l=r,u=eg(qf[0].slice(1),[e,t]),d=eg(qf[1].slice(1),[e,t]),f=eg(qf[2].slice(1),[e,t]),p=o+l*u,m=o+l*d,h=o+l*f,g=i*(1-c)+c*n,_=c*r,ee=g+_*u,te=g+_*d,ne=g+_*f,re=ee**3,ie=te**3,ae=ne**3,oe=3*p*ee**2,se=3*m*te**2,ce=3*h*ne**2,le=6*p**2*ee,ue=6*m**2*te,de=6*h**2*ne,fe=eg(a[0],[re,ie,ae])-1,pe=eg(a[0],[oe,se,ce]),me=eg(a[0],[le,ue,de]),he=pe/(pe*pe-.5*fe*me),ge=-fe*he,v=eg(a[1],[re,ie,ae])-1,y=eg(a[1],[oe,se,ce]),_e=eg(a[1],[le,ue,de]),ve=y/(y*y-.5*v*_e),ye=-v*ve,b=eg(a[2],[re,ie,ae])-1,be=eg(a[2],[oe,se,ce]),x=eg(a[2],[le,ue,de]),xe=be/(be*be-.5*b*x),Se=-b*xe;ge=he>=0?ge:Xh,ye=ve>=0?ye:Xh,Se=xe>=0?Se:Xh,c+=Math.min(ge,Math.min(ye,Se))}return c}function cg(e,t,n){let[r,i,a]=e,o=og(i,a,t,n),s=sg(i,a,r,1,r,t,n,o),c=rg(o),l=s/Math.min(r*c[0],(1-r)*c[1]),u=ig(i,a),d=r*u[0],f=(1-r)*u[1],p=.9*l*Math.sqrt(Math.sqrt(1/(1/d**4+1/f**4)));return d=r*.4,f=(1-r)*.8,[Math.sqrt(1/(1/d**2+1/f**2)),p,s]}function lg(e,t,n,r){let i,a,o,s,c,l,u,d;eg(r[0][0],[e,t])>1?([i,a,o,s,c]=r[0][1],[l,u,d]=n[0]):eg(r[1][0],[e,t])>1?([i,a,o,s,c]=r[1][1],[l,u,d]=n[1]):([i,a,o,s,c]=r[2][1],[l,u,d]=n[2]);let f=i+a*e+o*t+s*e**2+c*e*t,p=eg(qf[0].slice(1),[e,t]),m=eg(qf[1].slice(1),[e,t]),h=eg(qf[2].slice(1),[e,t]),g=1+f*p,_=1+f*m,ee=1+f*h,te=g**3,ne=_**3,re=ee**3,ie=3*p*g**2,ae=3*m*_**2,oe=3*h*ee**2,se=6*p**2*g,ce=6*m**2*_,le=6*h**2*ee,ue=l*te+u*ne+d*re,de=l*ie+u*ae+d*oe,fe=l*se+u*ce+d*le;return f-=ue*de/(de**2-.5*ue*fe),f}function ug(e,t,n){let[r,i,a]=e,o=ng(a),s=null,c=null;if(r=Ff(r)/360,o!==0&&o!==1&&i!==0){let e=Math.cos(qh*r),a=Math.sin(qh*r),[l,u,d]=cg([o,e,a],t,n),f=.8,p,m,h,g;i<f?(p=1.25*i,m=0,h=f*l,g=1-h/u):(p=5*(i-.8),m=u,h=.2*u**2*1.25**2/l,g=1-h/(d-u));let _=m+p*h/(1-g*p);s=_*e,c=_*a}return[o,s,c]}function dg(e,t,n){let r=e[0],i=0,a=tg(r),o=Math.sqrt(e[1]**2+e[2]**2),s=.5+Math.atan2(-e[2],-e[1])/qh;if(a!==0&&a!==1&&o!==0){let[a,s,c]=cg([r,e[1]/o,e[2]/o],t,n),l=.8,u,d,f,p;o<s?(d=l*a,f=1-d/s,p=o/(d+f*o),i=p*l):(u=s,d=.2*s**2*1.25**2/a,f=1-d/(c-s),p=(o-u)/(d+f*(o-u)),i=l+.2*p)}let c=Math.abs(i)<1e-4;return c||a===0||Math.abs(1-a)<1e-7?(s=null,c||(i=0)):s=Ff(s*360),[s,i,a]}var fg=new P({id:`okhsl`,name:`Okhsl`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,1],name:`Saturation`},l:{range:[0,1],name:`Lightness`}},base:Jf,gamutSpace:`self`,fromBase(e){return dg(e,Jh,Yh)},toBase(e){return ug(e,Jh,Yh)},formats:{color:{id:`--okhsl`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),pg=new P({id:`oklrab`,name:`Oklrab`,coords:{l:{refRange:[0,1],name:`Lightness`},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:`D65`,base:Jf,fromBase(e){return[tg(e[0]),e[1],e[2]]},toBase(e){return[ng(e[0]),e[1],e[2]]},formats:{color:{coords:[`<percentage> | <number>`,`<number> | <percentage>[-1,1]`,`<number> | <percentage>[-1,1]`]}}}),mg=new P({id:`oklrch`,name:`Oklrch`,coords:{l:{refRange:[0,1],name:`Lightness`},c:{refRange:[0,.4],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},white:`D65`,base:pg,fromBase:Lf.fromBase,toBase:Lf.toBase,formats:{color:{coords:[`<percentage> | <number>`,`<number> | <percentage>[0,1]`,`<number> | <angle>`]}}});function hg(e,t,n){let[r,i,a]=e;r=Ff(r)/360;let o=ng(a),s=null,c=null;if(o!==0&&i!==0){let e=Math.cos(qh*r),l=Math.sin(qh*r),[u,d]=rg(og(e,l,t,n)),f=.5,p=1-f/u,m=1-i*f/(f+d-d*p*i),h=i*d*f/(f+d-d*p*i);o=a*m;let g=a*h,_=ng(m),ee=h*_/m,te=ng(o);g=g*te/o,o=te;let[ne,re,ie]=ag([_,e*ee,l*ee],t),ae=tf(1/Math.max(Math.max(ne,re),Math.max(ie,0)),1/3);o*=ae,g*=ae,s=g*e,c=g*l}return[o,s,c]}function gg(e,t,n){let r=e[0],i=0,a=tg(r),o=Math.sqrt(e[1]**2+e[2]**2),s=.5+Math.atan2(-e[2],-e[1])/qh;if(r!==0&&r!==1&&o!==0){let s=e[1]/o,c=e[2]/o,[l,u]=rg(og(s,c,t,n)),d=.5,f=1-d/l,p=u/(o+r*u),m=p*r,h=p*o,g=ng(m),_=h*g/m,[ee,te,ne]=ag([g,s*_,c*_],t),re=tf(1/Math.max(Math.max(ee,te),Math.max(ne,0)),1/3);r/=re,o/=re,o=o*tg(r)/r,r=tg(r),a=r/m,i=(d+u)*h/(u*d+u*f*h)}return s=Math.abs(i)<1e-4||a===0?null:Ff(s*360),[s,i,a]}var _g=new P({id:`okhsv`,name:`Okhsv`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,1],name:`Saturation`},v:{range:[0,1],name:`Value`}},base:Jf,gamutSpace:`self`,fromBase(e){return gg(e,Jh,Yh)},toBase(e){return hg(e,Jh,Yh)},formats:{color:{id:`--okhsv`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),vg=ff.D65,yg=216/24389,bg=24389/27,[xg,Sg]=bh({space:Sf,coords:vg}),Cg=new P({id:`luv`,name:`Luv`,coords:{l:{refRange:[0,100],name:`Lightness`},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:vg,base:Sf,fromBase(e){let t=[Jd(e[0]),Jd(e[1]),Jd(e[2])],n=t[1],[r,i]=bh({space:Sf,coords:t});if(!Number.isFinite(r)||!Number.isFinite(i))return[0,0,0];let a=n<=yg?bg*n:116*Math.cbrt(n)-16;return[a,13*a*(r-xg),13*a*(i-Sg)]},toBase(e){let[t,n,r]=e;if(t===0||qd(t))return[0,0,0];n=Jd(n),r=Jd(r);let i=n/(13*t)+xg,a=r/(13*t)+Sg,o=t<=8?t/bg:((t+16)/116)**3;return[o*(9*i/(4*a)),o,o*((12-3*i-20*a)/(4*a))]},formats:{color:{id:`--luv`,coords:[`<number> | <percentage>`,`<number> | <percentage>`,`<number> | <percentage>`]}}}),wg=new P({id:`lchuv`,name:`LChuv`,coords:{l:{refRange:[0,100],name:`Lightness`},c:{refRange:[0,220],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},base:Cg,fromBase:Lf.fromBase,toBase:Lf.toBase,formats:{color:{id:`--lchuv`,coords:[`<number> | <percentage>`,`<number> | <percentage>`,`<number> | <angle>`]}}}),Tg=216/24389,Eg=24389/27,Dg=Am[0][0],Og=Am[0][1],kg=Am[0][2],Ag=Am[1][0],jg=Am[1][1],Mg=Am[1][2],Ng=Am[2][0],Pg=Am[2][1],Fg=Am[2][2];function Ig(e,t,n){let r=t/(Math.sin(n)-e*Math.cos(n));return r<0?1/0:r}function Lg(e){let t=(e+16)**3/1560896,n=t>Tg?t:e/Eg,r=n*(284517*Dg-94839*kg),i=n*(838422*kg+769860*Og+731718*Dg),a=n*(632260*kg-126452*Og),o=n*(284517*Ag-94839*Mg),s=n*(838422*Mg+769860*jg+731718*Ag),c=n*(632260*Mg-126452*jg),l=n*(284517*Ng-94839*Fg),u=n*(838422*Fg+769860*Pg+731718*Ng),d=n*(632260*Fg-126452*Pg);return{r0s:r/a,r0i:i*e/a,r1s:r/(a+126452),r1i:(i-769860)*e/(a+126452),g0s:o/c,g0i:s*e/c,g1s:o/(c+126452),g1i:(s-769860)*e/(c+126452),b0s:l/d,b0i:u*e/d,b1s:l/(d+126452),b1i:(u-769860)*e/(d+126452)}}function Rg(e,t){let n=t/360*Math.PI*2,r=Ig(e.r0s,e.r0i,n),i=Ig(e.r1s,e.r1i,n),a=Ig(e.g0s,e.g0i,n),o=Ig(e.g1s,e.g1i,n),s=Ig(e.b0s,e.b0i,n),c=Ig(e.b1s,e.b1i,n);return Math.min(r,i,a,o,s,c)}var zg=new P({id:`hsluv`,name:`HSLuv`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,100],name:`Saturation`},l:{range:[0,100],name:`Lightness`}},base:wg,gamutSpace:Fm,fromBase(e){let[t,n,r]=[Jd(e[0]),Jd(e[1]),Jd(e[2])],i;return t>99.9999999?(i=0,t=100):t<1e-8?(i=0,t=0):i=n/Rg(Lg(t),r)*100,[r,i,t]},toBase(e){let[t,n,r]=[Jd(e[0]),Jd(e[1]),Jd(e[2])],i;return r>99.9999999?(r=100,i=0):r<1e-8?(r=0,i=0):i=Rg(Lg(r),t)/100*n,[r,i,t]},formats:{color:{id:`--hsluv`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}});Am[0][0],Am[0][1],Am[0][2],Am[1][0],Am[1][1],Am[1][2],Am[2][0],Am[2][1],Am[2][2];function Bg(e,t){return Math.abs(t)/Math.sqrt(e**2+1)}function Vg(e){let t=Bg(e.r0s,e.r0i),n=Bg(e.r1s,e.r1i),r=Bg(e.g0s,e.g0i),i=Bg(e.g1s,e.g1i),a=Bg(e.b0s,e.b0i),o=Bg(e.b1s,e.b1i);return Math.min(t,n,r,i,a,o)}var Hg=new P({id:`hpluv`,name:`HPLuv`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,100],name:`Saturation`},l:{range:[0,100],name:`Lightness`}},base:wg,gamutSpace:`self`,fromBase(e){let[t,n,r]=[Jd(e[0]),Jd(e[1]),Jd(e[2])],i;return t>99.9999999?(i=0,t=100):t<1e-8?(i=0,t=0):i=n/Vg(Lg(t))*100,[r,i,t]},toBase(e){let[t,n,r]=[Jd(e[0]),Jd(e[1]),Jd(e[2])],i;return r>99.9999999?(r=100,i=0):r<1e-8?(r=0,i=0):i=Vg(Lg(r))/100*n,[r,i,t]},formats:{color:{id:`--hpluv`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),Ug=new Cf({id:`rec2100-linear`,name:`Linear REC.2100`,white:`D65`,toBase:Em.toBase,fromBase:Em.fromBase}),Wg=203,Gg=2610/2**14,Kg=2**14/2610,qg=2523/2**5,Jg=2**5/2523,Yg=3424/2**12,Xg=2413/2**7,Zg=2392/2**7,Qg=new Cf({id:`rec2100pq`,cssId:`rec2100-pq`,name:`REC.2100-PQ`,base:Ug,toBase(e){return e.map(function(e){return(Math.max(e**Jg-Yg,0)/(Xg-Zg*e**Jg))**Kg*1e4/Wg})},fromBase(e){return e.map(function(e){let t=Math.max(e*Wg/1e4,0);return((Yg+Xg*t**Gg)/(1+Zg*t**Gg))**qg})}}),$g=.17883277,e_=.28466892,t_=.55991073,n_=3.7743,r_=new Cf({id:`rec2100hlg`,cssId:`rec2100-hlg`,name:`REC.2100-HLG`,referred:`scene`,base:Ug,toBase(e){return e.map(function(e){return e<=.5?e**2/3*n_:(Math.exp((e-t_)/$g)+e_)/12*n_})},fromBase(e){return e.map(function(e){return e/=n_,e<=1/12?tf(3*e,.5):$g*Math.log(12*e-e_)+t_})}}),i_={};sf.add(`chromatic-adaptation-start`,e=>{e.options.method&&(e.M=o_(e.W1,e.W2,e.options.method))}),sf.add(`chromatic-adaptation-end`,e=>{e.M||=o_(e.W1,e.W2,e.options.method)});function a_({id:e,toCone_M:t,fromCone_M:n}){i_[e]=arguments[0]}function o_(e,t,n=`Bradford`){let r=i_[n],[i,a,o]=Vd(r.toCone_M,e),[s,c,l]=Vd(r.toCone_M,t),u=Vd([[s/i,0,0],[0,c/a,0],[0,0,l/o]],r.toCone_M);return Vd(r.fromCone_M,u)}a_({id:`von Kries`,toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]}),a_({id:`Bradford`,toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]}),a_({id:`CAT02`,toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]}),a_({id:`CAT16`,toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]}),Object.assign(ff,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),ff.ACES=[.32168/.33767,1,.34065/.33767];var s_=new Cf({id:`acescg`,cssId:`--acescg`,name:`ACEScg`,coords:{r:{range:[0,65504],name:`Red`},g:{range:[0,65504],name:`Green`},b:{range:[0,65504],name:`Blue`}},referred:`scene`,white:ff.ACES,toXYZ_M:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ_M:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]]}),c_=2**-16,l_=-.35828683,u_=(Math.log2(65504)+9.72)/17.52,d_=new Cf({id:`acescc`,cssId:`--acescc`,name:`ACEScc`,coords:{r:{range:[l_,u_],name:`Red`},g:{range:[l_,u_],name:`Green`},b:{range:[l_,u_],name:`Blue`}},referred:`scene`,base:s_,toBase(e){return e.map(function(e){return e<=-.3013698630136986?(2**(e*17.52-9.72)-c_)*2:e<u_?2**(e*17.52-9.72):65504})},fromBase(e){return e.map(function(e){return e<=0?(Math.log2(c_)+9.72)/17.52:e<c_?(Math.log2(c_+e*.5)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})}}),f_=Object.freeze({__proto__:null,A98RGB:Rh,A98RGB_Linear:Lh,ACEScc:d_,ACEScg:s_,CAM16_JMh:im,HCT:pm,HPLuv:Hg,HSL:Ph,HSLuv:zg,HSV:Fh,HWB:Ih,ICTCP:Pp,JzCzHz:xp,Jzazbz:bp,LCH:Lf,LCHuv:wg,Lab:Pf,Lab_D65:hh,Luv:Cg,OKLCH:Kh,OKLab:Jf,OKLrCH:mg,OKLrab:pg,Okhsl:fg,Okhsv:_g,P3:Im,P3_Linear:Om,ProPhoto:Hh,ProPhoto_Linear:zh,REC_2020:Dm,REC_2020_Linear:Em,REC_2020_Scene_Referred:Gh,REC_2100_HLG:r_,REC_2100_Linear:Ug,REC_2100_PQ:Qg,XYZ_ABS_D65:ip,XYZ_D50:kf,XYZ_D65:Sf,sRGB:Fm,sRGB_Linear:jm}),p_=class e{constructor(...e){let t;if(e.length===1){let n={};typeof e[0]==`object`&&Object.getPrototypeOf(e[0]).constructor===Object&&(e[0]={...e[0]}),t=N(e[0],{parseMeta:n}),n.format&&(this.parseMeta=n)}let n,r,i;t?(n=t.space||t.spaceId,r=t.coords,i=t.alpha):[n,r,i]=e,Object.defineProperty(this,`space`,{value:P.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=r?r.slice():[0,0,0],this.alpha=qd(i)?i:i===void 0?1:$d(0,i,1);for(let e in this.space.coords)Object.defineProperty(this,e,{get:()=>this.get(e),set:t=>this.set(e,t)})}get spaceId(){return this.space.id}clone(){return new e(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=Rm(this,...t);return n.color=new e(n.color),n}static get(t,...n){return af(t,this)?t:new e(t,...n)}static try(t,n){if(af(t,this))return t;let r=wf(t,n);return r?new e(r):null}static defineFunction(t,n,r=n){let{instance:i=!0,returns:a}=r,o=function(...t){let r=n(...t);if(a===`color`)r=e.get(r);else if(a===`function<color>`){let t=r;r=function(...n){let r=t(...n);return e.get(r)},Object.assign(r,t)}else a===`array<color>`&&(r=r.map(t=>e.get(t)));return r};t in e||(e[t]=o),i&&(e.prototype[t]=function(...e){return o(this,...e)})}static defineFunctions(t){for(let n in t)e.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(e);else for(let n in t)e.defineFunction(n,t[n])}};p_.defineFunctions({get:Ef,getAll:Tf,set:Of,setAll:Df,to:wm,equals:Vm,inGamut:Zf,toGamut:xm,distance:$f,deltas:zm,toString:Tm}),Object.assign(p_,{util:of,hooks:sf,WHITES:ff,Space:P,spaces:P.registry,parse:hf,defaults:cf});for(let e of Object.keys(f_))P.register(f_[e]);for(let e in P.registry)m_(e,P.registry[e]);sf.add(`colorspace-init-end`,e=>{m_(e.id,e),e.aliases?.forEach(t=>{m_(t,e)})});function m_(e,t){let n=e.replace(/-/g,`_`);Object.defineProperty(p_.prototype,n,{get(){let n=this.getAll(e);if(typeof Proxy>`u`)return n;let r=new Proxy(n,{has:(e,n)=>{try{return P.resolveCoord([t,n]),!0}catch{}return Reflect.has(e,n)},get:(e,n,i)=>{if(n&&typeof n!=`symbol`&&!(n in e)&&n in r){let{index:r}=P.resolveCoord([t,n]);if(r>=0)return e[r]}return Reflect.get(e,n,i)},set:(n,r,i,a)=>{if(r&&typeof r!=`symbol`&&!(r in n)||Number(r)>=0){let{index:a}=P.resolveCoord([t,r]);if(a>=0)return n[a]=i,this.setAll(e,n),!0}return Reflect.set(n,r,i,a)}});return r},set(t){this.setAll(e,t)},configurable:!0,enumerable:!0})}p_.extend(vm),p_.extend({deltaE:wh}),Object.assign(p_,{deltaEMethods:vm}),p_.extend(Dh),p_.extend({contrast:yh}),p_.extend(Ch),p_.extend(Gm),p_.extend(Nh),p_.extend(vh);var h_=Symbol(`no update`);function g_(e){return e!==h_}var __=class extends Rl()(`observable-value-update`){},v_=class extends Rl()(`observable-value-resolve`){},y_=class extends Rl()(`observable-value-error`){},b_=class extends zl(`observable-destroy`){},x_=class extends zl(`observable-callback-call`){},S_=class extends Rl()(`observable-params-update`){},C_=class{listenTarget=new Vl;value;equalityCheck;listenerMap=new WeakMap;dispatch(...e){return this.listenTarget.dispatch(...e)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...e){let t=e[0];if(t===h_)return!1;if(!(e.length===2?e[1]:this.equalityCheck)?.(this.value,t)){let e=this.value;return this.value=t,this.listenTarget.dispatch(new __({detail:[t,e]})),!0}return!1}listen(e,t){let n=e=>t(...e.detail);return this.listenerMap.set(t,n),e&&t(this.value,void 0),this.listenTarget.listen(__,n)}removeListener(e){let t=this.listenerMap.get(e);return!!t&&this.listenTarget.removeListener(__,t)}destroy(){this.listenTarget.dispatch(new b_),this.listenTarget.destroy()}listenToEvent(e,t,n){return this.listenTarget.listen(e,t,n)}};function w_(e,t){return Sc(e,t,(e,t)=>j.isFunction(e)&&j.isFunction(t)?!0:j.strictEquals(e,t))}var T_;(function(e){e.Rejected=`rejected`,e.Waiting=`waiting`,e.Resolved=`resolved`})(T_||={});var E_=class extends C_{equalityCheck;waitingForValueDeferredPromise=new Fe;lastSetPromise;lastSetId=Zc();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(e={}){super(),this.equalityCheck=`equalityCheck`in e?e.equalityCheck:w_,`defaultValue`in e&&this.setValue(e.defaultValue)}setPromise(e){if(e===this.lastSetPromise)return!1;let t=Zc();return this.lastSetId=t,this.lastSetPromise=e,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new Fe,super.setValue(this.waitingForValueDeferredPromise.promise,j.strictEquals)),e.then(n=>{this.lastSetPromise!==e||this.lastSetId!==t||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==e||this.lastSetId!==t)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});let r=Me(n);console.error(r),this.rejectValue(r)}),!0}resolveValue(e){return g_(e)||(e=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(e,j.strictEquals):super.setValue(e))?(this.lastResolvedValue=e,this.lastSetId=Zc(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(e),this.dispatch(new v_({detail:e})),!0):!1}rejectValue(e){this.waitingForValueDeferredPromise.reject(e),super.setValue(e,j.strictEquals),this.dispatch(new y_({detail:e}))}setValue(e){try{return e instanceof Promise?this.setPromise(e):e instanceof Error?(this.rejectValue(e),!0):g_(e)?this.resolveValue(e):!1}catch(e){return this.rejectValue(Me(e)),!0}}listen(e,t){return super.listen(e,t)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?T_.Rejected:this.value instanceof Promise?T_.Waiting:T_.Resolved}},D_=class e extends E_{static NotSet=Symbol(`not set`);updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==e.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck=`equalityCheck`in t?t.equalityCheck:w_,this.updateCallback=t.updateCallback,this.internalParams=`defaultParams`in t?t.defaultParams:e.NotSet}updateFromCallback(){if(!this.updateCallback)throw TypeError(`Cannot update value: updateCallback was never set.`);if(this.internalParams===e.NotSet)throw TypeError(`Cannot update value: params were never set.`);try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(e){return this.setValue(Me(e))}finally{this.dispatch(new x_)}}updateLastParams(t){try{return this.internalParams===e.NotSet||!this.equalityCheck?.(t,this.internalParams)?(this.internalParams=t,this.dispatch(new S_({detail:this.internalParams})),!0):!1}catch(e){return this.setValue(Me(e)),!1}}update(...[e]){return this.updateLastParams(e)?(this.updateFromCallback(),!0):!1}setParams(e){return this.updateLastParams(e)}forceUpdate(...e){return j.isLengthAtLeast(e,1)&&this.updateLastParams(e[0]),this.updateFromCallback()}};function O_(e){return L_(e)&&!k_(e)&&!V_(e)&&Symbol.asyncIterator in e}function k_(e){return Array.isArray(e)}function A_(e){return typeof e==`bigint`}function j_(e){return typeof e==`boolean`}function M_(e){return e instanceof globalThis.Date}function N_(e){return typeof e==`function`}function P_(e){return L_(e)&&!k_(e)&&!V_(e)&&Symbol.iterator in e}function F_(e){return e===null}function I_(e){return typeof e==`number`}function L_(e){return typeof e==`object`&&!!e}function R_(e){return e instanceof globalThis.RegExp}function z_(e){return typeof e==`string`}function B_(e){return typeof e==`symbol`}function V_(e){return e instanceof globalThis.Uint8Array}function H_(e){return e===void 0}function U_(e){return e.map(e=>J_(e))}function W_(e){return new Date(e.getTime())}function G_(e){return new Uint8Array(e)}function K_(e){return new RegExp(e.source,e.flags)}function q_(e){let t={};for(let n of Object.getOwnPropertyNames(e))t[n]=J_(e[n]);for(let n of Object.getOwnPropertySymbols(e))t[n]=J_(e[n]);return t}function J_(e){return k_(e)?U_(e):M_(e)?W_(e):V_(e)?G_(e):R_(e)?K_(e):L_(e)?q_(e):e}function Y_(e){return J_(e)}function X_(e,t){return Y_(t===void 0?e:{...t,...e})}function Z_(e){return rv(e)&&globalThis.Symbol.asyncIterator in e}function Q_(e){return rv(e)&&globalThis.Symbol.iterator in e}function $_(e){return e instanceof globalThis.Promise}function ev(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function tv(e){return e instanceof globalThis.Uint8Array}function nv(e,t){return t in e}function rv(e){return typeof e==`object`&&!!e}function iv(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function av(e){return e===void 0}function ov(e){return e===null}function sv(e){return typeof e==`boolean`}function cv(e){return typeof e==`number`}function lv(e){return globalThis.Number.isInteger(e)}function uv(e){return typeof e==`bigint`}function dv(e){return typeof e==`string`}function fv(e){return typeof e==`function`}function pv(e){return typeof e==`symbol`}function mv(e){return uv(e)||sv(e)||ov(e)||cv(e)||dv(e)||pv(e)||av(e)}var hv;(function(e){e.InstanceMode=`default`,e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(t,n){return e.ExactOptionalPropertyTypes?n in t:t[n]!==void 0}e.IsExactOptionalProperty=t;function n(t){let n=rv(t);return e.AllowArrayObject?n:n&&!iv(t)}e.IsObjectLike=n;function r(e){return n(e)&&!(e instanceof Date)&&!(e instanceof Uint8Array)}e.IsRecordLike=r;function i(t){return e.AllowNaN?cv(t):Number.isFinite(t)}e.IsNumberLike=i;function a(t){let n=av(t);return e.AllowNullVoid?n||t===null:n}e.IsVoidLike=a})(hv||={});function gv(e){return globalThis.Object.freeze(e).map(e=>xv(e))}function _v(e){return e}function vv(e){return e}function yv(e){return e}function bv(e){let t={};for(let n of Object.getOwnPropertyNames(e))t[n]=xv(e[n]);for(let n of Object.getOwnPropertySymbols(e))t[n]=xv(e[n]);return globalThis.Object.freeze(t)}function xv(e){return k_(e)?gv(e):M_(e)?_v(e):V_(e)?vv(e):R_(e)?yv(e):L_(e)?bv(e):e}function F(e,t){let n=t===void 0?e:{...t,...e};switch(hv.InstanceMode){case`freeze`:return xv(n);case`clone`:return Y_(n);default:return n}}var Sv=class extends Error{constructor(e){super(e)}},Cv=Symbol.for(`TypeBox.Transform`),wv=Symbol.for(`TypeBox.Readonly`),Tv=Symbol.for(`TypeBox.Optional`),Ev=Symbol.for(`TypeBox.Hint`),I=Symbol.for(`TypeBox.Kind`);function Dv(e){return L_(e)&&e[wv]===`Readonly`}function Ov(e){return L_(e)&&e[Tv]===`Optional`}function kv(e){return Hv(e,`Any`)}function Av(e){return Hv(e,`Argument`)}function jv(e){return Hv(e,`Array`)}function Mv(e){return Hv(e,`AsyncIterator`)}function Nv(e){return Hv(e,`BigInt`)}function Pv(e){return Hv(e,`Boolean`)}function Fv(e){return Hv(e,`Computed`)}function Iv(e){return Hv(e,`Constructor`)}function Lv(e){return Hv(e,`Date`)}function Rv(e){return Hv(e,`Function`)}function zv(e){return Hv(e,`Integer`)}function Bv(e){return Hv(e,`Intersect`)}function Vv(e){return Hv(e,`Iterator`)}function Hv(e,t){return L_(e)&&I in e&&e[I]===t}function Uv(e){return j_(e)||I_(e)||z_(e)}function Wv(e){return Hv(e,`Literal`)}function Gv(e){return Hv(e,`MappedKey`)}function Kv(e){return Hv(e,`MappedResult`)}function qv(e){return Hv(e,`Never`)}function Jv(e){return Hv(e,`Not`)}function Yv(e){return Hv(e,`Null`)}function Xv(e){return Hv(e,`Number`)}function Zv(e){return Hv(e,`Object`)}function Qv(e){return Hv(e,`Promise`)}function $v(e){return Hv(e,`Record`)}function ey(e){return Hv(e,`Ref`)}function ty(e){return Hv(e,`RegExp`)}function ny(e){return Hv(e,`String`)}function ry(e){return Hv(e,`Symbol`)}function iy(e){return Hv(e,`TemplateLiteral`)}function ay(e){return Hv(e,`This`)}function oy(e){return L_(e)&&Cv in e}function sy(e){return Hv(e,`Tuple`)}function cy(e){return Hv(e,`Undefined`)}function ly(e){return Hv(e,`Union`)}function uy(e){return Hv(e,`Uint8Array`)}function dy(e){return Hv(e,`Unknown`)}function fy(e){return Hv(e,`Unsafe`)}function py(e){return Hv(e,`Void`)}function my(e){return L_(e)&&I in e&&z_(e[I])}function hy(e){return kv(e)||Av(e)||jv(e)||Pv(e)||Nv(e)||Mv(e)||Fv(e)||Iv(e)||Lv(e)||Rv(e)||zv(e)||Bv(e)||Vv(e)||Wv(e)||Gv(e)||Kv(e)||qv(e)||Jv(e)||Yv(e)||Xv(e)||Zv(e)||Qv(e)||$v(e)||ey(e)||ty(e)||ny(e)||ry(e)||iy(e)||ay(e)||sy(e)||cy(e)||ly(e)||uy(e)||dy(e)||fy(e)||py(e)||my(e)}var gy=`Argument.Any.Array.AsyncIterator.BigInt.Boolean.Computed.Constructor.Date.Enum.Function.Integer.Intersect.Iterator.Literal.MappedKey.MappedResult.Not.Null.Number.Object.Promise.Record.Ref.RegExp.String.Symbol.TemplateLiteral.This.Tuple.Undefined.Union.Uint8Array.Unknown.Void`.split(`.`);function _y(e){try{return new RegExp(e),!0}catch{return!1}}function vy(e){if(!z_(e))return!1;for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(n>=7&&n<=13||n===27||n===127)return!1}return!0}function yy(e){return Sy(e)||vb(e)}function by(e){return H_(e)||A_(e)}function xy(e){return H_(e)||I_(e)}function Sy(e){return H_(e)||j_(e)}function Cy(e){return H_(e)||z_(e)}function wy(e){return H_(e)||z_(e)&&vy(e)&&_y(e)}function Ty(e){return H_(e)||z_(e)&&vy(e)}function Ey(e){return H_(e)||vb(e)}function Dy(e){return L_(e)&&e[Tv]===`Optional`}function Oy(e){return Hy(e,`Any`)&&Cy(e.$id)}function ky(e){return Hy(e,`Argument`)&&I_(e.index)}function Ay(e){return Hy(e,`Array`)&&e.type===`array`&&Cy(e.$id)&&vb(e.items)&&xy(e.minItems)&&xy(e.maxItems)&&Sy(e.uniqueItems)&&Ey(e.contains)&&xy(e.minContains)&&xy(e.maxContains)}function jy(e){return Hy(e,`AsyncIterator`)&&e.type===`AsyncIterator`&&Cy(e.$id)&&vb(e.items)}function My(e){return Hy(e,`BigInt`)&&e.type===`bigint`&&Cy(e.$id)&&by(e.exclusiveMaximum)&&by(e.exclusiveMinimum)&&by(e.maximum)&&by(e.minimum)&&by(e.multipleOf)}function Ny(e){return Hy(e,`Boolean`)&&e.type===`boolean`&&Cy(e.$id)}function Py(e){return Hy(e,`Computed`)&&z_(e.target)&&k_(e.parameters)&&e.parameters.every(e=>vb(e))}function Fy(e){return Hy(e,`Constructor`)&&e.type===`Constructor`&&Cy(e.$id)&&k_(e.parameters)&&e.parameters.every(e=>vb(e))&&vb(e.returns)}function Iy(e){return Hy(e,`Date`)&&e.type===`Date`&&Cy(e.$id)&&xy(e.exclusiveMaximumTimestamp)&&xy(e.exclusiveMinimumTimestamp)&&xy(e.maximumTimestamp)&&xy(e.minimumTimestamp)&&xy(e.multipleOfTimestamp)}function Ly(e){return Hy(e,`Function`)&&e.type===`Function`&&Cy(e.$id)&&k_(e.parameters)&&e.parameters.every(e=>vb(e))&&vb(e.returns)}function Ry(e){return Hy(e,`Integer`)&&e.type===`integer`&&Cy(e.$id)&&xy(e.exclusiveMaximum)&&xy(e.exclusiveMinimum)&&xy(e.maximum)&&xy(e.minimum)&&xy(e.multipleOf)}function zy(e){return L_(e)&&Object.entries(e).every(([e,t])=>vy(e)&&vb(t))}function By(e){return Hy(e,`Intersect`)&&!(z_(e.type)&&e.type!==`object`)&&k_(e.allOf)&&e.allOf.every(e=>vb(e)&&!lb(e))&&Cy(e.type)&&(Sy(e.unevaluatedProperties)||Ey(e.unevaluatedProperties))&&Cy(e.$id)}function Vy(e){return Hy(e,`Iterator`)&&e.type===`Iterator`&&Cy(e.$id)&&vb(e.items)}function Hy(e,t){return L_(e)&&I in e&&e[I]===t}function Uy(e){return Ky(e)&&z_(e.const)}function Wy(e){return Ky(e)&&I_(e.const)}function Gy(e){return Ky(e)&&j_(e.const)}function Ky(e){return Hy(e,`Literal`)&&Cy(e.$id)&&qy(e.const)}function qy(e){return j_(e)||I_(e)||z_(e)}function Jy(e){return Hy(e,`MappedKey`)&&k_(e.keys)&&e.keys.every(e=>I_(e)||z_(e))}function Yy(e){return Hy(e,`MappedResult`)&&zy(e.properties)}function Xy(e){return Hy(e,`Never`)&&L_(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function Zy(e){return Hy(e,`Not`)&&vb(e.not)}function Qy(e){return Hy(e,`Null`)&&e.type===`null`&&Cy(e.$id)}function $y(e){return Hy(e,`Number`)&&e.type===`number`&&Cy(e.$id)&&xy(e.exclusiveMaximum)&&xy(e.exclusiveMinimum)&&xy(e.maximum)&&xy(e.minimum)&&xy(e.multipleOf)}function eb(e){return Hy(e,`Object`)&&e.type===`object`&&Cy(e.$id)&&zy(e.properties)&&yy(e.additionalProperties)&&xy(e.minProperties)&&xy(e.maxProperties)}function tb(e){return Hy(e,`Promise`)&&e.type===`Promise`&&Cy(e.$id)&&vb(e.item)}function nb(e){return Hy(e,`Record`)&&e.type===`object`&&Cy(e.$id)&&yy(e.additionalProperties)&&L_(e.patternProperties)&&(e=>{let t=Object.getOwnPropertyNames(e.patternProperties);return t.length===1&&_y(t[0])&&L_(e.patternProperties)&&vb(e.patternProperties[t[0]])})(e)}function rb(e){return Hy(e,`Ref`)&&Cy(e.$id)&&z_(e.$ref)}function ib(e){return Hy(e,`RegExp`)&&Cy(e.$id)&&z_(e.source)&&z_(e.flags)&&xy(e.maxLength)&&xy(e.minLength)}function ab(e){return Hy(e,`String`)&&e.type===`string`&&Cy(e.$id)&&xy(e.minLength)&&xy(e.maxLength)&&wy(e.pattern)&&Ty(e.format)}function ob(e){return Hy(e,`Symbol`)&&e.type===`symbol`&&Cy(e.$id)}function sb(e){return Hy(e,`TemplateLiteral`)&&e.type===`string`&&z_(e.pattern)&&e.pattern[0]===`^`&&e.pattern[e.pattern.length-1]===`$`}function cb(e){return Hy(e,`This`)&&Cy(e.$id)&&z_(e.$ref)}function lb(e){return L_(e)&&Cv in e}function ub(e){return Hy(e,`Tuple`)&&e.type===`array`&&Cy(e.$id)&&I_(e.minItems)&&I_(e.maxItems)&&e.minItems===e.maxItems&&(H_(e.items)&&H_(e.additionalItems)&&e.minItems===0||k_(e.items)&&e.items.every(e=>vb(e)))}function db(e){return Hy(e,`Undefined`)&&e.type===`undefined`&&Cy(e.$id)}function fb(e){return Hy(e,`Union`)&&Cy(e.$id)&&L_(e)&&k_(e.anyOf)&&e.anyOf.every(e=>vb(e))}function pb(e){return Hy(e,`Uint8Array`)&&e.type===`Uint8Array`&&Cy(e.$id)&&xy(e.minByteLength)&&xy(e.maxByteLength)}function mb(e){return Hy(e,`Unknown`)&&Cy(e.$id)}function hb(e){return Hy(e,`Unsafe`)}function gb(e){return Hy(e,`Void`)&&e.type===`void`&&Cy(e.$id)}function _b(e){return L_(e)&&I in e&&z_(e[I])&&!gy.includes(e[I])}function vb(e){return L_(e)&&(Oy(e)||ky(e)||Ay(e)||Ny(e)||My(e)||jy(e)||Py(e)||Fy(e)||Iy(e)||Ly(e)||Ry(e)||By(e)||Vy(e)||Ky(e)||Jy(e)||Yy(e)||Xy(e)||Zy(e)||Qy(e)||$y(e)||eb(e)||tb(e)||nb(e)||rb(e)||ib(e)||ab(e)||ob(e)||sb(e)||cb(e)||ub(e)||db(e)||fb(e)||pb(e)||mb(e)||hb(e)||gb(e)||_b(e))}var yb=`(true|false)`,bb=`(0|[1-9][0-9]*)`,xb=`(.*)`,Sb=`(?!.*)`;`${yb}`;var Cb=`^${bb}$`,wb=`^${xb}$`,Tb=`^${Sb}$`,Eb=new Map;function Db(e){return Eb.has(e)}function Ob(e){return Eb.get(e)}var kb=new Map;function Ab(e){return kb.has(e)}function jb(e,t){kb.set(e,t)}function Mb(e){return kb.get(e)}function Nb(e,t){return e.includes(t)}function Pb(e){return[...new Set(e)]}function Fb(e,t){return e.filter(e=>t.includes(e))}function Ib(e,t){return e.reduce((e,t)=>Fb(e,t),t)}function Lb(e){return e.length===1?e[0]:e.length>1?Ib(e.slice(1),e[0]):[]}function Rb(e){let t=[];for(let n of e)t.push(...n);return t}function zb(e){return F({[I]:`Any`},e)}function Bb(e,t){return F({[I]:`Array`,type:`array`,items:e},t)}function Vb(e){return F({[I]:`Argument`,index:e})}function Hb(e,t){return F({[I]:`AsyncIterator`,type:`AsyncIterator`,items:e},t)}function Ub(e,t,n){return F({[I]:`Computed`,target:e,parameters:t},n)}function Wb(e,t){let{[t]:n,...r}=e;return r}function Gb(e,t){return t.reduce((e,t)=>Wb(e,t),e)}function Kb(e){return F({[I]:`Never`,not:{}},e)}function qb(e){return F({[I]:`MappedResult`,properties:e})}function Jb(e,t,n){return F({[I]:`Constructor`,type:`Constructor`,parameters:e,returns:t},n)}function Yb(e,t,n){return F({[I]:`Function`,type:`Function`,parameters:e,returns:t},n)}function Xb(e,t){return F({[I]:`Union`,anyOf:e},t)}function Zb(e){return e.some(e=>Ov(e))}function Qb(e){return e.map(e=>Ov(e)?$b(e):e)}function $b(e){return Gb(e,[Tv])}function ex(e,t){return Zb(e)?BS(Xb(Qb(e),t)):Xb(Qb(e),t)}function tx(e,t){return e.length===1?F(e[0],t):e.length===0?Kb(t):ex(e,t)}function nx(e,t){return e.length===0?Kb(t):e.length===1?F(e[0],t):Xb(e,t)}var rx=class extends Sv{};function ix(e){return e.replace(/\\\$/g,`$`).replace(/\\\*/g,`*`).replace(/\\\^/g,`^`).replace(/\\\|/g,`|`).replace(/\\\(/g,`(`).replace(/\\\)/g,`)`)}function ax(e,t,n){return e[t]===n&&e.charCodeAt(t-1)!==92}function ox(e,t){return ax(e,t,`(`)}function sx(e,t){return ax(e,t,`)`)}function cx(e,t){return ax(e,t,`|`)}function lx(e){if(!(ox(e,0)&&sx(e,e.length-1)))return!1;let t=0;for(let n=0;n<e.length;n++)if(ox(e,n)&&(t+=1),sx(e,n)&&--t,t===0&&n!==e.length-1)return!1;return!0}function ux(e){return e.slice(1,e.length-1)}function dx(e){let t=0;for(let n=0;n<e.length;n++)if(ox(e,n)&&(t+=1),sx(e,n)&&--t,cx(e,n)&&t===0)return!0;return!1}function fx(e){for(let t=0;t<e.length;t++)if(ox(e,t))return!0;return!1}function px(e){let[t,n]=[0,0],r=[];for(let i=0;i<e.length;i++)if(ox(e,i)&&(t+=1),sx(e,i)&&--t,cx(e,i)&&t===0){let t=e.slice(n,i);t.length>0&&r.push(hx(t)),n=i+1}let i=e.slice(n);return i.length>0&&r.push(hx(i)),r.length===0?{type:`const`,const:``}:r.length===1?r[0]:{type:`or`,expr:r}}function mx(e){function t(e,t){if(!ox(e,t))throw new rx(`TemplateLiteralParser: Index must point to open parens`);let n=0;for(let r=t;r<e.length;r++)if(ox(e,r)&&(n+=1),sx(e,r)&&--n,n===0)return[t,r];throw new rx(`TemplateLiteralParser: Unclosed group parens in expression`)}function n(e,t){for(let n=t;n<e.length;n++)if(ox(e,n))return[t,n];return[t,e.length]}let r=[];for(let i=0;i<e.length;i++)if(ox(e,i)){let[n,a]=t(e,i),o=e.slice(n,a+1);r.push(hx(o)),i=a}else{let[t,a]=n(e,i),o=e.slice(t,a);o.length>0&&r.push(hx(o)),i=a-1}return r.length===0?{type:`const`,const:``}:r.length===1?r[0]:{type:`and`,expr:r}}function hx(e){return lx(e)?hx(ux(e)):dx(e)?px(e):fx(e)?mx(e):{type:`const`,const:ix(e)}}function gx(e){return hx(e.slice(1,e.length-1))}var _x=class extends Sv{};function vx(e){return e.type===`or`&&e.expr.length===2&&e.expr[0].type===`const`&&e.expr[0].const===`0`&&e.expr[1].type===`const`&&e.expr[1].const===`[1-9][0-9]*`}function yx(e){return e.type===`or`&&e.expr.length===2&&e.expr[0].type===`const`&&e.expr[0].const===`true`&&e.expr[1].type===`const`&&e.expr[1].const===`false`}function bx(e){return e.type===`const`&&e.const===`.*`}function xx(e){return vx(e)||bx(e)?!1:yx(e)?!0:e.type===`and`||e.type===`or`?e.expr.every(e=>xx(e)):e.type===`const`?!0:(()=>{throw new _x(`Unknown expression type`)})()}function Sx(e){return xx(gx(e.pattern))}var Cx=class extends Sv{};function*wx(e){if(e.length===1)return yield*e[0];for(let t of e[0])for(let n of wx(e.slice(1)))yield`${t}${n}`}function*Tx(e){return yield*wx(e.expr.map(e=>[...Ox(e)]))}function*Ex(e){for(let t of e.expr)yield*Ox(t)}function*Dx(e){return yield e.const}function*Ox(e){return e.type===`and`?yield*Tx(e):e.type===`or`?yield*Ex(e):e.type===`const`?yield*Dx(e):(()=>{throw new Cx(`Unknown expression`)})()}function kx(e){let t=gx(e.pattern);return xx(t)?[...Ox(t)]:[]}function Ax(e,t){return F({[I]:`Literal`,const:e,type:typeof e},t)}function jx(e){return F({[I]:`Boolean`,type:`boolean`},e)}function Mx(e){return F({[I]:`BigInt`,type:`bigint`},e)}function Nx(e){return F({[I]:`Number`,type:`number`},e)}function Px(e){return F({[I]:`String`,type:`string`},e)}function*Fx(e){let t=e.trim().replace(/"|'/g,``);return t===`boolean`?yield jx():t===`number`?yield Nx():t===`bigint`?yield Mx():t===`string`?yield Px():yield(()=>{let e=t.split(`|`).map(e=>Ax(e.trim()));return e.length===0?Kb():e.length===1?e[0]:tx(e)})()}function*Ix(e){if(e[1]!==`{`)return yield*[Ax(`$`),...Lx(e.slice(1))];for(let t=2;t<e.length;t++)if(e[t]===`}`){let n=Fx(e.slice(2,t)),r=Lx(e.slice(t+1));return yield*[...n,...r]}yield Ax(e)}function*Lx(e){for(let t=0;t<e.length;t++)if(e[t]===`$`)return yield*[Ax(e.slice(0,t)),...Ix(e.slice(t))];yield Ax(e)}function Rx(e){return[...Lx(e)]}var zx=class extends Sv{};function Bx(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function Vx(e,t){return iy(e)?e.pattern.slice(1,e.pattern.length-1):ly(e)?`(${e.anyOf.map(e=>Vx(e,t)).join(`|`)})`:Xv(e)||zv(e)||Nv(e)?`${t}${bb}`:ny(e)?`${t}${xb}`:Wv(e)?`${t}${Bx(e.const.toString())}`:Pv(e)?`${t}${yb}`:(()=>{throw new zx(`Unexpected Kind '${e[I]}'`)})()}function Hx(e){return`^${e.map(e=>Vx(e,``)).join(``)}\$`}function Ux(e){return tx(kx(e).map(e=>Ax(e)))}function Wx(e,t){let n=z_(e)?Hx(Rx(e)):Hx(e);return F({[I]:`TemplateLiteral`,type:`string`,pattern:n},t)}function Gx(e){return kx(e).map(e=>e.toString())}function Kx(e){let t=[];for(let n of e)t.push(...Jx(n));return t}function qx(e){return[e.toString()]}function Jx(e){return[...new Set(iy(e)?Gx(e):ly(e)?Kx(e.anyOf):Wv(e)?qx(e.const):Xv(e)||zv(e)?[`[number]`]:[])]}function Yx(e,t,n){let r={};for(let i of Object.getOwnPropertyNames(t))r[i]=lS(e,Jx(t[i]),n);return r}function Xx(e,t,n){return Yx(e,t.properties,n)}function Zx(e,t,n){return qb(Xx(e,t,n))}function Qx(e,t){return e.map(e=>oS(e,t))}function $x(e){return e.filter(e=>!qv(e))}function eS(e,t){return YS($x(Qx(e,t)))}function tS(e){return e.some(e=>qv(e))?[]:e}function nS(e,t){return tx(tS(Qx(e,t)))}function rS(e,t){return t in e?e[t]:t===`[number]`?tx(e):Kb()}function iS(e,t){return t===`[number]`?e:Kb()}function aS(e,t){return t in e?e[t]:Kb()}function oS(e,t){return Bv(e)?eS(e.allOf,t):ly(e)?nS(e.anyOf,t):sy(e)?rS(e.items??[],t):jv(e)?iS(e.items,t):Zv(e)?aS(e.properties,t):Kb()}function sS(e,t){return t.map(t=>oS(e,t))}function cS(e,t){return tx(sS(e,t))}function lS(e,t,n){if(ey(e)||ey(t)){if(!hy(e)||!hy(t))throw new Sv(`Index types using Ref parameters require both Type and Key to be of TSchema`);return Ub(`Index`,[e,t])}return Kv(t)?Zx(e,t,n):Gv(t)?pS(e,t,n):F(hy(t)?cS(e,Jx(t)):cS(e,t),n)}function uS(e,t,n){return{[t]:lS(e,[t],Y_(n))}}function dS(e,t,n){return t.reduce((t,r)=>({...t,...uS(e,r,n)}),{})}function fS(e,t,n){return dS(e,t.keys,n)}function pS(e,t,n){return qb(fS(e,t,n))}function mS(e,t){return F({[I]:`Iterator`,type:`Iterator`,items:e},t)}function hS(e){return globalThis.Object.keys(e).filter(t=>!Ov(e[t]))}function gS(e,t){let n=hS(e);return F(n.length>0?{[I]:`Object`,type:`object`,required:n,properties:e}:{[I]:`Object`,type:`object`,properties:e},t)}var _S=gS;function vS(e,t){return F({[I]:`Promise`,type:`Promise`,item:e},t)}function yS(e){return F(Gb(e,[wv]))}function bS(e){return F({...e,[wv]:`Readonly`})}function xS(e,t){return t===!1?yS(e):bS(e)}function SS(e,t){let n=t??!0;return Kv(e)?TS(e,n):xS(e,n)}function CS(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=SS(e[r],t);return n}function wS(e,t){return CS(e.properties,t)}function TS(e,t){return qb(wS(e,t))}function ES(e,t){return F(e.length>0?{[I]:`Tuple`,type:`array`,items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[I]:`Tuple`,type:`array`,minItems:e.length,maxItems:e.length},t)}function DS(e,t){return e in t?PS(e,t[e]):qb(t)}function OS(e){return{[e]:Ax(e)}}function kS(e){let t={};for(let n of e)t[n]=Ax(n);return t}function AS(e,t){return Nb(t,e)?OS(e):kS(t)}function jS(e,t){return DS(e,AS(e,t))}function MS(e,t){return t.map(t=>PS(e,t))}function NS(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(t))n[r]=PS(e,t[r]);return n}function PS(e,t){let n={...t};return Ov(t)?BS(PS(e,Gb(t,[Tv]))):Dv(t)?SS(PS(e,Gb(t,[wv]))):Kv(t)?DS(e,t.properties):Gv(t)?jS(e,t.keys):Iv(t)?Jb(MS(e,t.parameters),PS(e,t.returns),n):Rv(t)?Yb(MS(e,t.parameters),PS(e,t.returns),n):Mv(t)?Hb(PS(e,t.items),n):Vv(t)?mS(PS(e,t.items),n):Bv(t)?XS(MS(e,t.allOf),n):ly(t)?nx(MS(e,t.anyOf),n):sy(t)?ES(MS(e,t.items??[]),n):Zv(t)?_S(NS(e,t.properties),n):jv(t)?Bb(PS(e,t.items),n):Qv(t)?vS(PS(e,t.item),n):t}function FS(e,t){let n={};for(let r of e)n[r]=PS(r,t);return n}function IS(e,t,n){let r=hy(e)?Jx(e):e;return _S(FS(r,t({[I]:`MappedKey`,keys:r})),n)}function LS(e){return F(Gb(e,[Tv]))}function RS(e){return F({...e,[Tv]:`Optional`})}function zS(e,t){return t===!1?LS(e):RS(e)}function BS(e,t){let n=t??!0;return Kv(e)?US(e,n):zS(e,n)}function VS(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=BS(e[r],t);return n}function HS(e,t){return VS(e.properties,t)}function US(e,t){return qb(HS(e,t))}function WS(e,t={}){let n=e.every(e=>Zv(e)),r=hy(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return F(t.unevaluatedProperties===!1||hy(t.unevaluatedProperties)||n?{...r,[I]:`Intersect`,type:`object`,allOf:e}:{...r,[I]:`Intersect`,allOf:e},t)}function GS(e){return e.every(e=>Ov(e))}function KS(e){return Gb(e,[Tv])}function qS(e){return e.map(e=>Ov(e)?KS(e):e)}function JS(e,t){return GS(e)?BS(WS(qS(e),t)):WS(qS(e),t)}function YS(e,t={}){if(e.length===1)return F(e[0],t);if(e.length===0)return Kb(t);if(e.some(e=>oy(e)))throw Error(`Cannot intersect transform types`);return JS(e,t)}function XS(e,t){if(e.length===1)return F(e[0],t);if(e.length===0)return Kb(t);if(e.some(e=>oy(e)))throw Error(`Cannot intersect transform types`);return WS(e,t)}function ZS(...e){let[t,n]=typeof e[0]==`string`?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!=`string`)throw new Sv(`Ref: $ref must be a string`);return F({[I]:`Ref`,$ref:t},n)}function QS(e,t){return Ub(`Awaited`,[Ub(e,t)])}function $S(e){return Ub(`Awaited`,[ZS(e)])}function eC(e){return XS(rC(e))}function tC(e){return nx(rC(e))}function nC(e){return iC(e)}function rC(e){return e.map(e=>iC(e))}function iC(e,t){return F(Fv(e)?QS(e.target,e.parameters):Bv(e)?eC(e.allOf):ly(e)?tC(e.anyOf):Qv(e)?nC(e.item):ey(e)?$S(e.$ref):e,t)}function aC(e){let t=[];for(let n of e)t.push(fC(n));return t}function oC(e){return Rb(aC(e))}function sC(e){return Lb(aC(e))}function cC(e){return e.map((e,t)=>t.toString())}function lC(e){return[`[number]`]}function uC(e){return globalThis.Object.getOwnPropertyNames(e)}function dC(e){return pC?globalThis.Object.getOwnPropertyNames(e).map(e=>e[0]===`^`&&e[e.length-1]===`$`?e.slice(1,e.length-1):e):[]}function fC(e){return Bv(e)?oC(e.allOf):ly(e)?sC(e.anyOf):sy(e)?cC(e.items??[]):jv(e)?lC(e.items):Zv(e)?uC(e.properties):$v(e)?dC(e.patternProperties):[]}var pC=!1;function mC(e){pC=!0;let t=fC(e);return pC=!1,`^(${t.map(e=>`(${e})`).join(`|`)})$`}function hC(e,t){return Ub(`KeyOf`,[Ub(e,t)])}function gC(e){return Ub(`KeyOf`,[ZS(e)])}function _C(e,t){return F(tx(vC(fC(e))),t)}function vC(e){return e.map(e=>e===`[number]`?Nx():Ax(e))}function yC(e,t){return Fv(e)?hC(e.target,e.parameters):ey(e)?gC(e.$ref):Kv(e)?SC(e,t):_C(e,t)}function bC(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=yC(e[r],Y_(t));return n}function xC(e,t){return bC(e.properties,t)}function SC(e,t){return qb(xC(e,t))}function CC(e){let t=fC(e),n=sS(e,t);return t.map((e,r)=>[t[r],n[r]])}function wC(e){let t=[];for(let n of e)t.push(...fC(n));return Pb(t)}function TC(e){return e.filter(e=>!qv(e))}function EC(e,t){let n=[];for(let r of e)n.push(...sS(r,[t]));return TC(n)}function DC(e,t){let n={};for(let r of t)n[r]=YS(EC(e,r));return n}function OC(e,t){return _S(DC(e,wC(e)),t)}function kC(e){return F({[I]:`Date`,type:`Date`},e)}function AC(e){return F({[I]:`Null`,type:`null`},e)}function jC(e){return F({[I]:`Symbol`,type:`symbol`},e)}function MC(e){return F({[I]:`Undefined`,type:`undefined`},e)}function NC(e){return F({[I]:`Uint8Array`,type:`Uint8Array`},e)}function PC(e){return F({[I]:`Unknown`},e)}function FC(e){return e.map(e=>RC(e,!1))}function IC(e){let t={};for(let n of globalThis.Object.getOwnPropertyNames(e))t[n]=SS(RC(e[n],!1));return t}function LC(e,t){return t===!0?e:SS(e)}function RC(e,t){return O_(e)||P_(e)?LC(zb(),t):k_(e)?SS(ES(FC(e))):V_(e)?NC():M_(e)?kC():L_(e)?LC(_S(IC(e)),t):N_(e)?LC(Yb([],PC()),t):H_(e)?MC():F_(e)?AC():B_(e)?jC():A_(e)?Mx():I_(e)||j_(e)||z_(e)?Ax(e):_S({})}function zC(e,t){return F(RC(e,!0),t)}function BC(e,t){return Iv(e)?ES(e.parameters,t):Kb(t)}function VC(e,t){if(H_(e))throw Error(`Enum undefined or empty`);let n=globalThis.Object.getOwnPropertyNames(e).filter(e=>isNaN(e)).map(t=>e[t]);return nx([...new Set(n)].map(e=>Ax(e)),{...t,[Ev]:`Enum`})}var HC=class extends Sv{},L;(function(e){e[e.Union=0]=`Union`,e[e.True=1]=`True`,e[e.False=2]=`False`})(L||={});function UC(e){return e===L.False?e:L.True}function WC(e){throw new HC(e)}function GC(e){return Xy(e)||By(e)||fb(e)||mb(e)||Oy(e)}function KC(e,t){return Xy(t)?uw(e,t):By(t)?ow(e,t):fb(t)?qw(e,t):mb(t)?Yw(e,t):Oy(t)?qC(e,t):WC(`StructuralRight`)}function qC(e,t){return L.True}function JC(e,t){return By(t)?ow(e,t):fb(t)&&t.anyOf.some(e=>Oy(e)||mb(e))?L.True:fb(t)?L.Union:mb(t)||Oy(t)?L.True:L.Union}function YC(e,t){return mb(e)?L.False:Oy(e)?L.Union:Xy(e)?L.True:L.False}function XC(e,t){return eb(t)&&Dw(t)?L.True:GC(t)?KC(e,t):Ay(t)?UC($w(e.items,t.items)):L.False}function ZC(e,t){return GC(t)?KC(e,t):jy(t)?UC($w(e.items,t.items)):L.False}function QC(e,t){return GC(t)?KC(e,t):eb(t)?Aw(e,t):nb(t)?Fw(e,t):My(t)?L.True:L.False}function $C(e,t){return Gy(e)||Ny(e)?L.True:L.False}function ew(e,t){return GC(t)?KC(e,t):eb(t)?Aw(e,t):nb(t)?Fw(e,t):Ny(t)?L.True:L.False}function tw(e,t){return GC(t)?KC(e,t):eb(t)?Aw(e,t):Fy(t)?e.parameters.length>t.parameters.length?L.False:e.parameters.every((e,n)=>UC($w(t.parameters[n],e))===L.True)?UC($w(e.returns,t.returns)):L.False:L.False}function nw(e,t){return GC(t)?KC(e,t):eb(t)?Aw(e,t):nb(t)?Fw(e,t):Iy(t)?L.True:L.False}function rw(e,t){return GC(t)?KC(e,t):eb(t)?Aw(e,t):Ly(t)?e.parameters.length>t.parameters.length?L.False:e.parameters.every((e,n)=>UC($w(t.parameters[n],e))===L.True)?UC($w(e.returns,t.returns)):L.False:L.False}function iw(e,t){return Ky(e)&&I_(e.const)||$y(e)||Ry(e)?L.True:L.False}function aw(e,t){return Ry(t)||$y(t)?L.True:GC(t)?KC(e,t):eb(t)?Aw(e,t):nb(t)?Fw(e,t):L.False}function ow(e,t){return t.allOf.every(t=>$w(e,t)===L.True)?L.True:L.False}function sw(e,t){return e.allOf.some(e=>$w(e,t)===L.True)?L.True:L.False}function cw(e,t){return GC(t)?KC(e,t):Vy(t)?UC($w(e.items,t.items)):L.False}function lw(e,t){return Ky(t)&&t.const===e.const?L.True:GC(t)?KC(e,t):eb(t)?Aw(e,t):nb(t)?Fw(e,t):ab(t)?Rw(e,t):$y(t)?hw(e,t):Ry(t)?iw(e,t):Ny(t)?$C(e,t):L.False}function uw(e,t){return L.False}function dw(e,t){return L.True}function fw(e){let[t,n]=[e,0];for(;Zy(t);)t=t.not,n+=1;return n%2==0?t:PC()}function pw(e,t){return Zy(e)?$w(fw(e),t):Zy(t)?$w(e,fw(t)):WC(`Invalid fallthrough for Not`)}function mw(e,t){return GC(t)?KC(e,t):eb(t)?Aw(e,t):nb(t)?Fw(e,t):Qy(t)?L.True:L.False}function hw(e,t){return Wy(e)||$y(e)||Ry(e)?L.True:L.False}function gw(e,t){return GC(t)?KC(e,t):eb(t)?Aw(e,t):nb(t)?Fw(e,t):Ry(t)||$y(t)?L.True:L.False}function _w(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function vw(e){return Dw(e)}function yw(e){return _w(e,0)||_w(e,1)&&`description`in e.properties&&fb(e.properties.description)&&e.properties.description.anyOf.length===2&&(ab(e.properties.description.anyOf[0])&&db(e.properties.description.anyOf[1])||ab(e.properties.description.anyOf[1])&&db(e.properties.description.anyOf[0]))}function bw(e){return _w(e,0)}function xw(e){return _w(e,0)}function Sw(e){return _w(e,0)}function Cw(e){return _w(e,0)}function ww(e){return Dw(e)}function Tw(e){let t=Nx();return _w(e,0)||_w(e,1)&&`length`in e.properties&&UC($w(e.properties.length,t))===L.True}function Ew(e){return _w(e,0)}function Dw(e){let t=Nx();return _w(e,0)||_w(e,1)&&`length`in e.properties&&UC($w(e.properties.length,t))===L.True}function Ow(e){let t=Yb([zb()],zb());return _w(e,0)||_w(e,1)&&`then`in e.properties&&UC($w(e.properties.then,t))===L.True}function kw(e,t){return $w(e,t)===L.False||Dy(e)&&!Dy(t)?L.False:L.True}function Aw(e,t){return mb(e)?L.False:Oy(e)?L.Union:Xy(e)||Uy(e)&&vw(t)||Wy(e)&&bw(t)||Gy(e)&&xw(t)||ob(e)&&yw(t)||My(e)&&Sw(t)||ab(e)&&vw(t)||ob(e)&&yw(t)||$y(e)&&bw(t)||Ry(e)&&bw(t)||Ny(e)&&xw(t)||pb(e)&&ww(t)||Iy(e)&&Cw(t)||Fy(e)&&Ew(t)||Ly(e)&&Tw(t)?L.True:nb(e)&&ab(Nw(e))?t[Ev]===`Record`?L.True:L.False:nb(e)&&$y(Nw(e))&&_w(t,0)?L.True:L.False}function jw(e,t){return GC(t)?KC(e,t):nb(t)?Fw(e,t):eb(t)?(()=>{for(let n of Object.getOwnPropertyNames(t.properties)){if(!(n in e.properties)&&!Dy(t.properties[n]))return L.False;if(Dy(t.properties[n]))return L.True;if(kw(e.properties[n],t.properties[n])===L.False)return L.False}return L.True})():L.False}function Mw(e,t){return GC(t)?KC(e,t):eb(t)&&Ow(t)?L.True:tb(t)?UC($w(e.item,t.item)):L.False}function Nw(e){return Cb in e.patternProperties?Nx():wb in e.patternProperties?Px():WC(`Unknown record key pattern`)}function Pw(e){return Cb in e.patternProperties?e.patternProperties[Cb]:wb in e.patternProperties?e.patternProperties[wb]:WC(`Unable to get record value schema`)}function Fw(e,t){let[n,r]=[Nw(t),Pw(t)];return Uy(e)&&$y(n)&&UC($w(e,r))===L.True?L.True:pb(e)&&$y(n)||ab(e)&&$y(n)||Ay(e)&&$y(n)?$w(e,r):eb(e)?(()=>{for(let t of Object.getOwnPropertyNames(e.properties))if(kw(r,e.properties[t])===L.False)return L.False;return L.True})():L.False}function Iw(e,t){return GC(t)?KC(e,t):eb(t)?Aw(e,t):nb(t)?$w(Pw(e),Pw(t)):L.False}function Lw(e,t){return $w(ib(e)?Px():e,ib(t)?Px():t)}function Rw(e,t){return Ky(e)&&z_(e.const)||ab(e)?L.True:L.False}function zw(e,t){return GC(t)?KC(e,t):eb(t)?Aw(e,t):nb(t)?Fw(e,t):ab(t)?L.True:L.False}function Bw(e,t){return GC(t)?KC(e,t):eb(t)?Aw(e,t):nb(t)?Fw(e,t):ob(t)?L.True:L.False}function Vw(e,t){return sb(e)?$w(Ux(e),t):sb(t)?$w(e,Ux(t)):WC(`Invalid fallthrough for TemplateLiteral`)}function Hw(e,t){return Ay(t)&&e.items!==void 0&&e.items.every(e=>$w(e,t.items)===L.True)}function Uw(e,t){return Xy(e)?L.True:mb(e)?L.False:Oy(e)?L.Union:L.False}function Ww(e,t){return GC(t)?KC(e,t):eb(t)&&Dw(t)||Ay(t)&&Hw(e,t)?L.True:ub(t)?H_(e.items)&&!H_(t.items)||!H_(e.items)&&H_(t.items)?L.False:H_(e.items)&&!H_(t.items)||e.items.every((e,n)=>$w(e,t.items[n])===L.True)?L.True:L.False:L.False}function Gw(e,t){return GC(t)?KC(e,t):eb(t)?Aw(e,t):nb(t)?Fw(e,t):pb(t)?L.True:L.False}function Kw(e,t){return GC(t)?KC(e,t):eb(t)?Aw(e,t):nb(t)?Fw(e,t):gb(t)?Zw(e,t):db(t)?L.True:L.False}function qw(e,t){return t.anyOf.some(t=>$w(e,t)===L.True)?L.True:L.False}function Jw(e,t){return e.anyOf.every(e=>$w(e,t)===L.True)?L.True:L.False}function Yw(e,t){return L.True}function Xw(e,t){return Xy(t)?uw(e,t):By(t)?ow(e,t):fb(t)?qw(e,t):Oy(t)?qC(e,t):ab(t)?Rw(e,t):$y(t)?hw(e,t):Ry(t)?iw(e,t):Ny(t)?$C(e,t):Ay(t)?YC(e,t):ub(t)?Uw(e,t):eb(t)?Aw(e,t):mb(t)?L.True:L.False}function Zw(e,t){return db(e)||db(e)?L.True:L.False}function Qw(e,t){return By(t)?ow(e,t):fb(t)?qw(e,t):mb(t)?Yw(e,t):Oy(t)?qC(e,t):eb(t)?Aw(e,t):gb(t)?L.True:L.False}function $w(e,t){return sb(e)||sb(t)?Vw(e,t):ib(e)||ib(t)?Lw(e,t):Zy(e)||Zy(t)?pw(e,t):Oy(e)?JC(e,t):Ay(e)?XC(e,t):My(e)?QC(e,t):Ny(e)?ew(e,t):jy(e)?ZC(e,t):Fy(e)?tw(e,t):Iy(e)?nw(e,t):Ly(e)?rw(e,t):Ry(e)?aw(e,t):By(e)?sw(e,t):Vy(e)?cw(e,t):Ky(e)?lw(e,t):Xy(e)?dw(e,t):Qy(e)?mw(e,t):$y(e)?gw(e,t):eb(e)?jw(e,t):nb(e)?Iw(e,t):ab(e)?zw(e,t):ob(e)?Bw(e,t):ub(e)?Ww(e,t):tb(e)?Mw(e,t):pb(e)?Gw(e,t):db(e)?Kw(e,t):fb(e)?Jw(e,t):mb(e)?Xw(e,t):gb(e)?Qw(e,t):WC(`Unknown left type operand '${e[I]}'`)}function eT(e,t){return $w(e,t)}function tT(e,t,n,r,i){let a={};for(let o of globalThis.Object.getOwnPropertyNames(e))a[o]=aT(e[o],t,n,r,Y_(i));return a}function nT(e,t,n,r,i){return tT(e.properties,t,n,r,i)}function rT(e,t,n,r,i){return qb(nT(e,t,n,r,i))}function iT(e,t,n,r){let i=eT(e,t);return i===L.Union?nx([n,r]):i===L.True?n:r}function aT(e,t,n,r,i){return Kv(e)?rT(e,t,n,r,i):Gv(e)?F(lT(e,t,n,r,i)):F(iT(e,t,n,r),i)}function oT(e,t,n,r,i){return{[e]:aT(Ax(e),t,n,r,Y_(i))}}function sT(e,t,n,r,i){return e.reduce((e,a)=>({...e,...oT(a,t,n,r,i)}),{})}function cT(e,t,n,r,i){return sT(e.keys,t,n,r,i)}function lT(e,t,n,r,i){return qb(cT(e,t,n,r,i))}function uT(e){return e.allOf.every(e=>pT(e))}function dT(e){return e.anyOf.some(e=>pT(e))}function fT(e){return!pT(e.not)}function pT(e){return e[I]===`Intersect`?uT(e):e[I]===`Union`?dT(e):e[I]===`Not`?fT(e):e[I]===`Undefined`}function mT(e,t){return gT(Ux(e),t)}function hT(e,t){let n=e.filter(e=>eT(e,t)===L.False);return n.length===1?n[0]:nx(n)}function gT(e,t,n={}){return iy(e)?F(mT(e,t),n):Kv(e)?F(yT(e,t),n):F(ly(e)?hT(e.anyOf,t):eT(e,t)===L.False?e:Kb(),n)}function _T(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=gT(e[r],t);return n}function vT(e,t){return _T(e.properties,t)}function yT(e,t){return qb(vT(e,t))}function bT(e,t){return ST(Ux(e),t)}function xT(e,t){let n=e.filter(e=>eT(e,t)!==L.False);return n.length===1?n[0]:nx(n)}function ST(e,t,n){return iy(e)?F(bT(e,t),n):Kv(e)?F(TT(e,t),n):F(ly(e)?xT(e.anyOf,t):eT(e,t)===L.False?Kb():e,n)}function CT(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=ST(e[r],t);return n}function wT(e,t){return CT(e.properties,t)}function TT(e,t){return qb(wT(e,t))}function ET(e,t){return Iv(e)?F(e.returns,t):Kb(t)}function DT(e){return SS(BS(e))}function OT(e,t,n){return F({[I]:`Record`,type:`object`,patternProperties:{[e]:t}},n)}function kT(e,t,n){let r={};for(let n of e)r[n]=t;return _S(r,{...n,[Ev]:`Record`})}function AT(e,t,n){return Sx(e)?kT(Jx(e),t,n):OT(e.pattern,t,n)}function jT(e,t,n){return kT(Jx(nx(e)),t,n)}function MT(e,t,n){return kT([e.toString()],t,n)}function NT(e,t,n){return OT(e.source,t,n)}function PT(e,t,n){return OT(H_(e.pattern)?wb:e.pattern,t,n)}function FT(e,t,n){return OT(wb,t,n)}function IT(e,t,n){return OT(Tb,t,n)}function LT(e,t,n){return _S({true:t,false:t},n)}function RT(e,t,n){return OT(Cb,t,n)}function zT(e,t,n){return OT(Cb,t,n)}function BT(e,t,n={}){return ly(e)?jT(e.anyOf,t,n):iy(e)?AT(e,t,n):Wv(e)?MT(e.const,t,n):Pv(e)?LT(e,t,n):zv(e)?RT(e,t,n):Xv(e)?zT(e,t,n):ty(e)?NT(e,t,n):ny(e)?PT(e,t,n):kv(e)?FT(e,t,n):qv(e)?IT(e,t,n):Kb(n)}function VT(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function HT(e){let t=VT(e);return t===wb?Px():t===Cb?Nx():Px({pattern:t})}function UT(e){return e.patternProperties[VT(e)]}function WT(e,t){return t.parameters=iE(e,t.parameters),t.returns=aE(e,t.returns),t}function GT(e,t){return t.parameters=iE(e,t.parameters),t.returns=aE(e,t.returns),t}function KT(e,t){return t.allOf=iE(e,t.allOf),t}function qT(e,t){return t.anyOf=iE(e,t.anyOf),t}function JT(e,t){return H_(t.items)||(t.items=iE(e,t.items)),t}function YT(e,t){return t.items=aE(e,t.items),t}function XT(e,t){return t.items=aE(e,t.items),t}function ZT(e,t){return t.items=aE(e,t.items),t}function QT(e,t){return t.item=aE(e,t.item),t}function $T(e,t){let n=rE(e,t.properties);return{...t,..._S(n)}}function eE(e,t){let n=BT(aE(e,HT(t)),aE(e,UT(t)));return{...t,...n}}function tE(e,t){return t.index in e?e[t.index]:PC()}function nE(e,t){let n=Dv(t),r=Ov(t),i=aE(e,t);return n&&r?DT(i):n&&!r?SS(i):!n&&r?BS(i):i}function rE(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((n,r)=>({...n,[r]:nE(e,t[r])}),{})}function iE(e,t){return t.map(t=>aE(e,t))}function aE(e,t){return Iv(t)?WT(e,t):Rv(t)?GT(e,t):Bv(t)?KT(e,t):ly(t)?qT(e,t):sy(t)?JT(e,t):jv(t)?YT(e,t):Mv(t)?XT(e,t):Vv(t)?ZT(e,t):Qv(t)?QT(e,t):Zv(t)?$T(e,t):$v(t)?eE(e,t):Av(t)?tE(e,t):t}function oE(e,t){return aE(t,X_(e))}function sE(e){return F({[I]:`Integer`,type:`integer`},e)}function cE(e,t,n){return{[e]:yE(Ax(e),t,Y_(n))}}function lE(e,t,n){return e.reduce((e,r)=>({...e,...cE(r,t,n)}),{})}function uE(e,t,n){return lE(e.keys,t,n)}function dE(e,t,n){return qb(uE(e,t,n))}function fE(e){let[t,n]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),n].join(``)}function pE(e){let[t,n]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),n].join(``)}function mE(e){return e.toUpperCase()}function hE(e){return e.toLowerCase()}function gE(e,t,n){let r=gx(e.pattern);return xx(r)?Wx([nx(vE([...Ox(r)].map(e=>Ax(e)),t))],n):{...e,pattern:_E(e.pattern,t)}}function _E(e,t){return typeof e==`string`?t===`Uncapitalize`?fE(e):t===`Capitalize`?pE(e):t===`Uppercase`?mE(e):t===`Lowercase`?hE(e):e:e.toString()}function vE(e,t){return e.map(e=>yE(e,t))}function yE(e,t,n={}){return Gv(e)?dE(e,t,n):iy(e)?gE(e,t,n):ly(e)?nx(vE(e.anyOf,t),n):Wv(e)?Ax(_E(e.const,t),n):F(e,n)}function bE(e,t={}){return yE(e,`Capitalize`,t)}function xE(e,t={}){return yE(e,`Lowercase`,t)}function SE(e,t={}){return yE(e,`Uncapitalize`,t)}function CE(e,t={}){return yE(e,`Uppercase`,t)}function wE(e,t,n){let r={};for(let i of globalThis.Object.getOwnPropertyNames(e))r[i]=PE(e[i],t,Y_(n));return r}function TE(e,t,n){return wE(e.properties,t,n)}function EE(e,t,n){return qb(TE(e,t,n))}function DE(e,t){return e.map(e=>NE(e,t))}function OE(e,t){return e.map(e=>NE(e,t))}function kE(e,t){let{[t]:n,...r}=e;return r}function AE(e,t){return t.reduce((e,t)=>kE(e,t),e)}function jE(e,t,n){let r=Gb(e,[Cv,`$id`,`required`,`properties`]);return _S(AE(n,t),r)}function ME(e){return nx(e.reduce((e,t)=>Uv(t)?[...e,Ax(t)]:e,[]))}function NE(e,t){return Bv(e)?XS(DE(e.allOf,t)):ly(e)?nx(OE(e.anyOf,t)):Zv(e)?jE(e,t,e.properties):_S({})}function PE(e,t,n){let r=k_(t)?ME(t):t,i=hy(t)?Jx(t):t,a=ey(e),o=ey(t);return Kv(e)?EE(e,i,n):Gv(t)?RE(e,t,n):a&&o||!a&&o||a&&!o?Ub(`Omit`,[e,r],n):F({...NE(e,i),...n})}function FE(e,t,n){return{[t]:PE(e,[t],Y_(n))}}function IE(e,t,n){return t.reduce((t,r)=>({...t,...FE(e,r,n)}),{})}function LE(e,t,n){return IE(e,t.keys,n)}function RE(e,t,n){return qb(LE(e,t,n))}function zE(e,t,n){let r={};for(let i of globalThis.Object.getOwnPropertyNames(e))r[i]=JE(e[i],t,Y_(n));return r}function BE(e,t,n){return zE(e.properties,t,n)}function VE(e,t,n){return qb(BE(e,t,n))}function HE(e,t){return e.map(e=>qE(e,t))}function UE(e,t){return e.map(e=>qE(e,t))}function WE(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function GE(e,t,n){let r=Gb(e,[Cv,`$id`,`required`,`properties`]);return _S(WE(n,t),r)}function KE(e){return nx(e.reduce((e,t)=>Uv(t)?[...e,Ax(t)]:e,[]))}function qE(e,t){return Bv(e)?XS(HE(e.allOf,t)):ly(e)?nx(UE(e.anyOf,t)):Zv(e)?GE(e,t,e.properties):_S({})}function JE(e,t,n){let r=k_(t)?KE(t):t,i=hy(t)?Jx(t):t,a=ey(e),o=ey(t);return Kv(e)?VE(e,i,n):Gv(t)?QE(e,t,n):a&&o||!a&&o||a&&!o?Ub(`Pick`,[e,r],n):F({...qE(e,i),...n})}function YE(e,t,n){return{[t]:JE(e,[t],Y_(n))}}function XE(e,t,n){return t.reduce((t,r)=>({...t,...YE(e,r,n)}),{})}function ZE(e,t,n){return XE(e,t.keys,n)}function QE(e,t,n){return qb(ZE(e,t,n))}function $E(e,t){return Ub(`Partial`,[Ub(e,t)])}function eD(e){return Ub(`Partial`,[ZS(e)])}function tD(e){let t={};for(let n of globalThis.Object.getOwnPropertyNames(e))t[n]=BS(e[n]);return t}function nD(e,t){let n=Gb(e,[Cv,`$id`,`required`,`properties`]);return _S(tD(t),n)}function rD(e){return e.map(e=>iD(e))}function iD(e){return Fv(e)?$E(e.target,e.parameters):ey(e)?eD(e.$ref):Bv(e)?XS(rD(e.allOf)):ly(e)?nx(rD(e.anyOf)):Zv(e)?nD(e,e.properties):Nv(e)||Pv(e)||zv(e)||Wv(e)||Yv(e)||Xv(e)||ny(e)||ry(e)||cy(e)?e:_S({})}function aD(e,t){return Kv(e)?cD(e,t):F({...iD(e),...t})}function oD(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=aD(e[r],Y_(t));return n}function sD(e,t){return oD(e.properties,t)}function cD(e,t){return qb(sD(e,t))}function lD(e,t){return Ub(`Required`,[Ub(e,t)])}function uD(e){return Ub(`Required`,[ZS(e)])}function dD(e){let t={};for(let n of globalThis.Object.getOwnPropertyNames(e))t[n]=Gb(e[n],[Tv]);return t}function fD(e,t){let n=Gb(e,[Cv,`$id`,`required`,`properties`]);return _S(dD(t),n)}function pD(e){return e.map(e=>mD(e))}function mD(e){return Fv(e)?lD(e.target,e.parameters):ey(e)?uD(e.$ref):Bv(e)?XS(pD(e.allOf)):ly(e)?nx(pD(e.anyOf)):Zv(e)?fD(e,e.properties):Nv(e)||Pv(e)||zv(e)||Wv(e)||Yv(e)||Xv(e)||ny(e)||ry(e)||cy(e)?e:_S({})}function hD(e,t){return Kv(e)?vD(e,t):F({...mD(e),...t})}function gD(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=hD(e[r],t);return n}function _D(e,t){return gD(e.properties,t)}function vD(e,t){return qb(_D(e,t))}function yD(e,t){return t.map(t=>ey(t)?bD(e,t.$ref):VD(e,t))}function bD(e,t){return t in e?ey(e[t])?bD(e,e[t].$ref):VD(e,e[t]):Kb()}function xD(e){return iC(e[0])}function SD(e){return lS(e[0],e[1])}function CD(e){return yC(e[0])}function wD(e){return aD(e[0])}function TD(e){return PE(e[0],e[1])}function ED(e){return JE(e[0],e[1])}function DD(e){return hD(e[0])}function OD(e,t,n){let r=yD(e,n);return t===`Awaited`?xD(r):t===`Index`?SD(r):t===`KeyOf`?CD(r):t===`Partial`?wD(r):t===`Omit`?TD(r):t===`Pick`?ED(r):t===`Required`?DD(r):Kb()}function kD(e,t){return Bb(VD(e,t))}function AD(e,t){return Hb(VD(e,t))}function jD(e,t,n){return Jb(BD(e,t),VD(e,n))}function MD(e,t,n){return Yb(BD(e,t),VD(e,n))}function ND(e,t){return XS(BD(e,t))}function PD(e,t){return mS(VD(e,t))}function FD(e,t){return _S(globalThis.Object.keys(t).reduce((n,r)=>({...n,[r]:VD(e,t[r])}),{}))}function ID(e,t){let[n,r]=[VD(e,UT(t)),VT(t)],i=X_(t);return i.patternProperties[r]=n,i}function LD(e,t){return ey(t)?{...bD(e,t.$ref),[Cv]:t[Cv]}:t}function RD(e,t){return ES(BD(e,t))}function zD(e,t){return nx(BD(e,t))}function BD(e,t){return t.map(t=>VD(e,t))}function VD(e,t){return Ov(t)?F(VD(e,Gb(t,[Tv])),t):Dv(t)?F(VD(e,Gb(t,[wv])),t):oy(t)?F(LD(e,t),t):jv(t)?F(kD(e,t.items),t):Mv(t)?F(AD(e,t.items),t):Fv(t)?F(OD(e,t.target,t.parameters)):Iv(t)?F(jD(e,t.parameters,t.returns),t):Rv(t)?F(MD(e,t.parameters,t.returns),t):Bv(t)?F(ND(e,t.allOf),t):Vv(t)?F(PD(e,t.items),t):Zv(t)?F(FD(e,t.properties),t):$v(t)?F(ID(e,t)):sy(t)?F(RD(e,t.items||[]),t):ly(t)?F(zD(e,t.anyOf),t):t}function HD(e,t){return t in e?VD(e,e[t]):Kb()}function UD(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,n)=>({...t,[n]:HD(e,n)}),{})}var WD=class{constructor(e){let t=UD(e);this.$defs=this.WithIdentifiers(t)}Import(e,t){let n={...this.$defs,[e]:F(this.$defs[e],t)};return F({[I]:`Import`,$defs:n,$ref:e})}WithIdentifiers(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,n)=>({...t,[n]:{...e[n],$id:n}}),{})}};function GD(e){return new WD(e)}function KD(e,t){return F({[I]:`Not`,not:e},t)}function qD(e,t){return Rv(e)?ES(e.parameters,t):Kb()}var JD=0;function YD(e,t={}){H_(t.$id)&&(t.$id=`T${JD++}`);let n=X_(e({[I]:`This`,$ref:`${t.$id}`}));return n.$id=t.$id,F({[Ev]:`Recursive`,...n},t)}function XD(e,t){let n=z_(e)?new globalThis.RegExp(e):e;return F({[I]:`RegExp`,type:`RegExp`,source:n.source,flags:n.flags},t)}function ZD(e){return Bv(e)?e.allOf:ly(e)?e.anyOf:sy(e)?e.items??[]:[]}function QD(e){return ZD(e)}function $D(e,t){return Rv(e)?F(e.returns,t):Kb(t)}var eO=class{constructor(e){this.schema=e}Decode(e){return new tO(this.schema,e)}},tO=class{constructor(e,t){this.schema=e,this.decode=t}EncodeTransform(e,t){let n={Encode:n=>t[Cv].Encode(e(n)),Decode:e=>this.decode(t[Cv].Decode(e))};return{...t,[Cv]:n}}EncodeSchema(e,t){let n={Decode:this.decode,Encode:e};return{...t,[Cv]:n}}Encode(e){return oy(this.schema)?this.EncodeTransform(e,this.schema):this.EncodeSchema(e,this.schema)}};function nO(e){return new eO(e)}function rO(e={}){return F({[I]:e[I]??`Unsafe`},e)}function iO(e){return F({[I]:`Void`,type:`void`},e)}var aO=e({Any:()=>zb,Argument:()=>Vb,Array:()=>Bb,AsyncIterator:()=>Hb,Awaited:()=>iC,BigInt:()=>Mx,Boolean:()=>jx,Capitalize:()=>bE,Composite:()=>OC,Const:()=>zC,Constructor:()=>Jb,ConstructorParameters:()=>BC,Date:()=>kC,Enum:()=>VC,Exclude:()=>gT,Extends:()=>aT,Extract:()=>ST,Function:()=>Yb,Index:()=>lS,InstanceType:()=>ET,Instantiate:()=>oE,Integer:()=>sE,Intersect:()=>XS,Iterator:()=>mS,KeyOf:()=>yC,Literal:()=>Ax,Lowercase:()=>xE,Mapped:()=>IS,Module:()=>GD,Never:()=>Kb,Not:()=>KD,Null:()=>AC,Number:()=>Nx,Object:()=>_S,Omit:()=>PE,Optional:()=>BS,Parameters:()=>qD,Partial:()=>aD,Pick:()=>JE,Promise:()=>vS,Readonly:()=>SS,ReadonlyOptional:()=>DT,Record:()=>BT,Recursive:()=>YD,Ref:()=>ZS,RegExp:()=>XD,Required:()=>hD,Rest:()=>QD,ReturnType:()=>$D,String:()=>Px,Symbol:()=>jC,TemplateLiteral:()=>Wx,Transform:()=>nO,Tuple:()=>ES,Uint8Array:()=>NC,Uncapitalize:()=>SE,Undefined:()=>MC,Union:()=>nx,Unknown:()=>PC,Unsafe:()=>rO,Uppercase:()=>CE,Void:()=>iO});function oO(e){switch(e.errorType){case R.ArrayContains:return`Expected array to contain at least one matching value`;case R.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case R.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case R.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case R.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case R.ArrayUniqueItems:return`Expected array elements to be unique`;case R.Array:return`Expected array`;case R.AsyncIterator:return`Expected AsyncIterator`;case R.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case R.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case R.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case R.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case R.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case R.BigInt:return`Expected bigint`;case R.Boolean:return`Expected boolean`;case R.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case R.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case R.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case R.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case R.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case R.Date:return`Expected Date`;case R.Function:return`Expected function`;case R.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case R.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case R.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case R.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case R.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case R.Integer:return`Expected integer`;case R.IntersectUnevaluatedProperties:return`Unexpected property`;case R.Intersect:return`Expected all values to match`;case R.Iterator:return`Expected Iterator`;case R.Literal:return`Expected ${typeof e.schema.const==`string`?`'${e.schema.const}'`:e.schema.const}`;case R.Never:return`Never`;case R.Not:return`Value should not match`;case R.Null:return`Expected null`;case R.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case R.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case R.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case R.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case R.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case R.Number:return`Expected number`;case R.Object:return`Expected object`;case R.ObjectAdditionalProperties:return`Unexpected property`;case R.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case R.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case R.ObjectRequiredProperty:return`Expected required property`;case R.Promise:return`Expected Promise`;case R.RegExp:return`Expected string to match regular expression`;case R.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case R.StringFormat:return`Expected string to match '${e.schema.format}' format`;case R.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case R.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case R.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case R.String:return`Expected string`;case R.Symbol:return`Expected symbol`;case R.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case R.Tuple:return`Expected tuple`;case R.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case R.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case R.Uint8Array:return`Expected Uint8Array`;case R.Undefined:return`Expected undefined`;case R.Union:return`Expected union value`;case R.Void:return`Expected void`;case R.Kind:return`Expected kind '${e.schema[I]}'`;default:return`Unknown error type`}}var sO=oO;function cO(e){sO=e}function lO(){return sO}var uO=class extends Sv{constructor(e){super(`Unable to dereference schema with $id '${e.$ref}'`),this.schema=e}};function dO(e,t){let n=t.find(t=>t.$id===e.$ref);if(n===void 0)throw new uO(e);return pO(n,t)}function fO(e,t){return!dv(e.$id)||t.some(t=>t.$id===e.$id)||t.push(e),t}function pO(e,t){return e[I]===`This`||e[I]===`Ref`?dO(e,t):e}var mO=class extends Sv{constructor(e){super(`Unable to hash value`),this.value=e}},hO;(function(e){e[e.Undefined=0]=`Undefined`,e[e.Null=1]=`Null`,e[e.Boolean=2]=`Boolean`,e[e.Number=3]=`Number`,e[e.String=4]=`String`,e[e.Object=5]=`Object`,e[e.Array=6]=`Array`,e[e.Date=7]=`Date`,e[e.Uint8Array=8]=`Uint8Array`,e[e.Symbol=9]=`Symbol`,e[e.BigInt=10]=`BigInt`})(hO||={});var gO=BigInt(`14695981039346656037`),[_O,vO]=[BigInt(`1099511628211`),BigInt(`18446744073709551616`)],yO=Array.from({length:256}).map((e,t)=>BigInt(t)),bO=new Float64Array(1),xO=new DataView(bO.buffer),SO=new Uint8Array(bO.buffer);function*CO(e){let t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let n=0;n<t;n++)yield e>>8*(t-1-n)&255}function wO(e){IO(hO.Array);for(let t of e)FO(t)}function TO(e){IO(hO.Boolean),IO(e?1:0)}function EO(e){IO(hO.BigInt),xO.setBigInt64(0,e);for(let e of SO)IO(e)}function DO(e){IO(hO.Date),FO(e.getTime())}function OO(e){IO(hO.Null)}function kO(e){IO(hO.Number),xO.setFloat64(0,e);for(let e of SO)IO(e)}function AO(e){IO(hO.Object);for(let t of globalThis.Object.getOwnPropertyNames(e).sort())FO(t),FO(e[t])}function jO(e){IO(hO.String);for(let t=0;t<e.length;t++)for(let n of CO(e.charCodeAt(t)))IO(n)}function MO(e){IO(hO.Symbol),FO(e.description)}function NO(e){IO(hO.Uint8Array);for(let t=0;t<e.length;t++)IO(e[t])}function PO(e){return IO(hO.Undefined)}function FO(e){if(iv(e))return wO(e);if(sv(e))return TO(e);if(uv(e))return EO(e);if(ev(e))return DO(e);if(ov(e))return OO(e);if(cv(e))return kO(e);if(rv(e))return AO(e);if(dv(e))return jO(e);if(pv(e))return MO(e);if(tv(e))return NO(e);if(av(e))return PO(e);throw new mO(e)}function IO(e){gO^=yO[e],gO=gO*_O%vO}function LO(e){return gO=BigInt(`14695981039346656037`),FO(e),gO}var RO=class extends Sv{constructor(e){super(`Unknown type`),this.schema=e}};function zO(e){return e[I]===`Any`||e[I]===`Unknown`}function BO(e){return e!==void 0}function VO(e,t,n){return!0}function HO(e,t,n){return!0}function UO(e,t,n){if(!iv(n)||BO(e.minItems)&&!(n.length>=e.minItems)||BO(e.maxItems)&&!(n.length<=e.maxItems))return!1;for(let r of n)if(!xk(e.items,t,r))return!1;if(e.uniqueItems===!0&&!(function(){let e=new Set;for(let t of n){let n=LO(t);if(e.has(n))return!1;e.add(n)}return!0})())return!1;if(!(BO(e.contains)||cv(e.minContains)||cv(e.maxContains)))return!0;let r=BO(e.contains)?e.contains:Kb(),i=n.reduce((e,n)=>xk(r,t,n)?e+1:e,0);return!(i===0||cv(e.minContains)&&i<e.minContains||cv(e.maxContains)&&i>e.maxContains)}function WO(e,t,n){return Z_(n)}function GO(e,t,n){return!(!uv(n)||BO(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||BO(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||BO(e.maximum)&&!(n<=e.maximum)||BO(e.minimum)&&!(n>=e.minimum)||BO(e.multipleOf)&&n%e.multipleOf!==BigInt(0))}function KO(e,t,n){return sv(n)}function qO(e,t,n){return xk(e.returns,t,n.prototype)}function JO(e,t,n){return!(!ev(n)||BO(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)||BO(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)||BO(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)||BO(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)||BO(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0)}function YO(e,t,n){return fv(n)}function XO(e,t,n){let r=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];return xk(i,[...t,...r],n)}function ZO(e,t,n){return!(!lv(n)||BO(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||BO(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||BO(e.maximum)&&!(n<=e.maximum)||BO(e.minimum)&&!(n>=e.minimum)||BO(e.multipleOf)&&n%e.multipleOf!==0)}function QO(e,t,n){let r=e.allOf.every(e=>xk(e,t,n));if(e.unevaluatedProperties===!1){let t=new RegExp(mC(e)),i=Object.getOwnPropertyNames(n).every(e=>t.test(e));return r&&i}else if(hy(e.unevaluatedProperties)){let i=new RegExp(mC(e)),a=Object.getOwnPropertyNames(n).every(r=>i.test(r)||xk(e.unevaluatedProperties,t,n[r]));return r&&a}else return r}function $O(e,t,n){return Q_(n)}function ek(e,t,n){return n===e.const}function tk(e,t,n){return!1}function nk(e,t,n){return!xk(e.not,t,n)}function rk(e,t,n){return ov(n)}function ik(e,t,n){return!(!hv.IsNumberLike(n)||BO(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||BO(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||BO(e.minimum)&&!(n>=e.minimum)||BO(e.maximum)&&!(n<=e.maximum)||BO(e.multipleOf)&&n%e.multipleOf!==0)}function ak(e,t,n){if(!hv.IsObjectLike(n)||BO(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||BO(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;let r=Object.getOwnPropertyNames(e.properties);for(let i of r){let r=e.properties[i];if(e.required&&e.required.includes(i)){if(!xk(r,t,n[i])||(pT(r)||zO(r))&&!(i in n))return!1}else if(hv.IsExactOptionalProperty(n,i)&&!xk(r,t,n[i]))return!1}if(e.additionalProperties===!1){let t=Object.getOwnPropertyNames(n);return e.required&&e.required.length===r.length&&t.length===r.length?!0:t.every(e=>r.includes(e))}else if(typeof e.additionalProperties==`object`)return Object.getOwnPropertyNames(n).every(i=>r.includes(i)||xk(e.additionalProperties,t,n[i]));else return!0}function ok(e,t,n){return $_(n)}function sk(e,t,n){if(!hv.IsRecordLike(n)||BO(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||BO(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;let[r,i]=Object.entries(e.patternProperties)[0],a=new RegExp(r),o=Object.entries(n).every(([e,n])=>a.test(e)?xk(i,t,n):!0),s=typeof e.additionalProperties==`object`?Object.entries(n).every(([n,r])=>a.test(n)?!0:xk(e.additionalProperties,t,r)):!0,c=e.additionalProperties===!1?Object.getOwnPropertyNames(n).every(e=>a.test(e)):!0;return o&&s&&c}function ck(e,t,n){return xk(pO(e,t),t,n)}function lk(e,t,n){let r=new RegExp(e.source,e.flags);return BO(e.minLength)&&!(n.length>=e.minLength)||BO(e.maxLength)&&!(n.length<=e.maxLength)?!1:r.test(n)}function uk(e,t,n){return!dv(n)||BO(e.minLength)&&!(n.length>=e.minLength)||BO(e.maxLength)&&!(n.length<=e.maxLength)||BO(e.pattern)&&!new RegExp(e.pattern).test(n)?!1:BO(e.format)?Db(e.format)?Ob(e.format)(n):!1:!0}function dk(e,t,n){return pv(n)}function fk(e,t,n){return dv(n)&&new RegExp(e.pattern).test(n)}function pk(e,t,n){return xk(pO(e,t),t,n)}function mk(e,t,n){if(!iv(n)||e.items===void 0&&n.length!==0||n.length!==e.maxItems)return!1;if(!e.items)return!0;for(let r=0;r<e.items.length;r++)if(!xk(e.items[r],t,n[r]))return!1;return!0}function hk(e,t,n){return av(n)}function gk(e,t,n){return e.anyOf.some(e=>xk(e,t,n))}function _k(e,t,n){return!(!tv(n)||BO(e.maxByteLength)&&!(n.length<=e.maxByteLength)||BO(e.minByteLength)&&!(n.length>=e.minByteLength))}function vk(e,t,n){return!0}function yk(e,t,n){return hv.IsVoidLike(n)}function bk(e,t,n){return Ab(e[I])?Mb(e[I])(e,n):!1}function xk(e,t,n){let r=BO(e.$id)?fO(e,t):t,i=e;switch(i[I]){case`Any`:return VO(i,r,n);case`Argument`:return HO(i,r,n);case`Array`:return UO(i,r,n);case`AsyncIterator`:return WO(i,r,n);case`BigInt`:return GO(i,r,n);case`Boolean`:return KO(i,r,n);case`Constructor`:return qO(i,r,n);case`Date`:return JO(i,r,n);case`Function`:return YO(i,r,n);case`Import`:return XO(i,r,n);case`Integer`:return ZO(i,r,n);case`Intersect`:return QO(i,r,n);case`Iterator`:return $O(i,r,n);case`Literal`:return ek(i,r,n);case`Never`:return tk(i,r,n);case`Not`:return nk(i,r,n);case`Null`:return rk(i,r,n);case`Number`:return ik(i,r,n);case`Object`:return ak(i,r,n);case`Promise`:return ok(i,r,n);case`Record`:return sk(i,r,n);case`Ref`:return ck(i,r,n);case`RegExp`:return lk(i,r,n);case`String`:return uk(i,r,n);case`Symbol`:return dk(i,r,n);case`TemplateLiteral`:return fk(i,r,n);case`This`:return pk(i,r,n);case`Tuple`:return mk(i,r,n);case`Undefined`:return hk(i,r,n);case`Union`:return gk(i,r,n);case`Uint8Array`:return _k(i,r,n);case`Unknown`:return vk(i,r,n);case`Void`:return yk(i,r,n);default:if(!Ab(i[I]))throw new RO(i);return bk(i,r,n)}}function Sk(...e){return e.length===3?xk(e[0],e[1],e[2]):xk(e[0],[],e[1])}var R;(function(e){e[e.ArrayContains=0]=`ArrayContains`,e[e.ArrayMaxContains=1]=`ArrayMaxContains`,e[e.ArrayMaxItems=2]=`ArrayMaxItems`,e[e.ArrayMinContains=3]=`ArrayMinContains`,e[e.ArrayMinItems=4]=`ArrayMinItems`,e[e.ArrayUniqueItems=5]=`ArrayUniqueItems`,e[e.Array=6]=`Array`,e[e.AsyncIterator=7]=`AsyncIterator`,e[e.BigIntExclusiveMaximum=8]=`BigIntExclusiveMaximum`,e[e.BigIntExclusiveMinimum=9]=`BigIntExclusiveMinimum`,e[e.BigIntMaximum=10]=`BigIntMaximum`,e[e.BigIntMinimum=11]=`BigIntMinimum`,e[e.BigIntMultipleOf=12]=`BigIntMultipleOf`,e[e.BigInt=13]=`BigInt`,e[e.Boolean=14]=`Boolean`,e[e.DateExclusiveMaximumTimestamp=15]=`DateExclusiveMaximumTimestamp`,e[e.DateExclusiveMinimumTimestamp=16]=`DateExclusiveMinimumTimestamp`,e[e.DateMaximumTimestamp=17]=`DateMaximumTimestamp`,e[e.DateMinimumTimestamp=18]=`DateMinimumTimestamp`,e[e.DateMultipleOfTimestamp=19]=`DateMultipleOfTimestamp`,e[e.Date=20]=`Date`,e[e.Function=21]=`Function`,e[e.IntegerExclusiveMaximum=22]=`IntegerExclusiveMaximum`,e[e.IntegerExclusiveMinimum=23]=`IntegerExclusiveMinimum`,e[e.IntegerMaximum=24]=`IntegerMaximum`,e[e.IntegerMinimum=25]=`IntegerMinimum`,e[e.IntegerMultipleOf=26]=`IntegerMultipleOf`,e[e.Integer=27]=`Integer`,e[e.IntersectUnevaluatedProperties=28]=`IntersectUnevaluatedProperties`,e[e.Intersect=29]=`Intersect`,e[e.Iterator=30]=`Iterator`,e[e.Kind=31]=`Kind`,e[e.Literal=32]=`Literal`,e[e.Never=33]=`Never`,e[e.Not=34]=`Not`,e[e.Null=35]=`Null`,e[e.NumberExclusiveMaximum=36]=`NumberExclusiveMaximum`,e[e.NumberExclusiveMinimum=37]=`NumberExclusiveMinimum`,e[e.NumberMaximum=38]=`NumberMaximum`,e[e.NumberMinimum=39]=`NumberMinimum`,e[e.NumberMultipleOf=40]=`NumberMultipleOf`,e[e.Number=41]=`Number`,e[e.ObjectAdditionalProperties=42]=`ObjectAdditionalProperties`,e[e.ObjectMaxProperties=43]=`ObjectMaxProperties`,e[e.ObjectMinProperties=44]=`ObjectMinProperties`,e[e.ObjectRequiredProperty=45]=`ObjectRequiredProperty`,e[e.Object=46]=`Object`,e[e.Promise=47]=`Promise`,e[e.RegExp=48]=`RegExp`,e[e.StringFormatUnknown=49]=`StringFormatUnknown`,e[e.StringFormat=50]=`StringFormat`,e[e.StringMaxLength=51]=`StringMaxLength`,e[e.StringMinLength=52]=`StringMinLength`,e[e.StringPattern=53]=`StringPattern`,e[e.String=54]=`String`,e[e.Symbol=55]=`Symbol`,e[e.TupleLength=56]=`TupleLength`,e[e.Tuple=57]=`Tuple`,e[e.Uint8ArrayMaxByteLength=58]=`Uint8ArrayMaxByteLength`,e[e.Uint8ArrayMinByteLength=59]=`Uint8ArrayMinByteLength`,e[e.Uint8Array=60]=`Uint8Array`,e[e.Undefined=61]=`Undefined`,e[e.Union=62]=`Union`,e[e.Void=63]=`Void`})(R||={});var Ck=class extends Sv{constructor(e){super(`Unknown type`),this.schema=e}};function wk(e){return e.replace(/~/g,`~0`).replace(/\//g,`~1`)}function Tk(e){return e!==void 0}var Ek=class{constructor(e){this.iterator=e}[Symbol.iterator](){return this.iterator}First(){let e=this.iterator.next();return e.done?void 0:e.value}};function z(e,t,n,r,i=[]){return{type:e,schema:t,path:n,value:r,message:lO()({errorType:e,path:n,schema:t,value:r,errors:i}),errors:i}}function*Dk(e,t,n,r){}function*Ok(e,t,n,r){}function*kk(e,t,n,r){if(!iv(r))return yield z(R.Array,e,n,r);Tk(e.minItems)&&!(r.length>=e.minItems)&&(yield z(R.ArrayMinItems,e,n,r)),Tk(e.maxItems)&&!(r.length<=e.maxItems)&&(yield z(R.ArrayMaxItems,e,n,r));for(let i=0;i<r.length;i++)yield*sA(e.items,t,`${n}/${i}`,r[i]);if(e.uniqueItems===!0&&!(function(){let e=new Set;for(let t of r){let n=LO(t);if(e.has(n))return!1;e.add(n)}return!0})()&&(yield z(R.ArrayUniqueItems,e,n,r)),!(Tk(e.contains)||Tk(e.minContains)||Tk(e.maxContains)))return;let i=Tk(e.contains)?e.contains:Kb(),a=r.reduce((e,r,a)=>sA(i,t,`${n}${a}`,r).next().done===!0?e+1:e,0);a===0&&(yield z(R.ArrayContains,e,n,r)),cv(e.minContains)&&a<e.minContains&&(yield z(R.ArrayMinContains,e,n,r)),cv(e.maxContains)&&a>e.maxContains&&(yield z(R.ArrayMaxContains,e,n,r))}function*Ak(e,t,n,r){Z_(r)||(yield z(R.AsyncIterator,e,n,r))}function*jk(e,t,n,r){if(!uv(r))return yield z(R.BigInt,e,n,r);Tk(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield z(R.BigIntExclusiveMaximum,e,n,r)),Tk(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield z(R.BigIntExclusiveMinimum,e,n,r)),Tk(e.maximum)&&!(r<=e.maximum)&&(yield z(R.BigIntMaximum,e,n,r)),Tk(e.minimum)&&!(r>=e.minimum)&&(yield z(R.BigIntMinimum,e,n,r)),Tk(e.multipleOf)&&r%e.multipleOf!==BigInt(0)&&(yield z(R.BigIntMultipleOf,e,n,r))}function*Mk(e,t,n,r){sv(r)||(yield z(R.Boolean,e,n,r))}function*Nk(e,t,n,r){yield*sA(e.returns,t,n,r.prototype)}function*Pk(e,t,n,r){if(!ev(r))return yield z(R.Date,e,n,r);Tk(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)&&(yield z(R.DateExclusiveMaximumTimestamp,e,n,r)),Tk(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)&&(yield z(R.DateExclusiveMinimumTimestamp,e,n,r)),Tk(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)&&(yield z(R.DateMaximumTimestamp,e,n,r)),Tk(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)&&(yield z(R.DateMinimumTimestamp,e,n,r)),Tk(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0&&(yield z(R.DateMultipleOfTimestamp,e,n,r))}function*Fk(e,t,n,r){fv(r)||(yield z(R.Function,e,n,r))}function*Ik(e,t,n,r){let i=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref];yield*sA(a,[...t,...i],n,r)}function*Lk(e,t,n,r){if(!lv(r))return yield z(R.Integer,e,n,r);Tk(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield z(R.IntegerExclusiveMaximum,e,n,r)),Tk(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield z(R.IntegerExclusiveMinimum,e,n,r)),Tk(e.maximum)&&!(r<=e.maximum)&&(yield z(R.IntegerMaximum,e,n,r)),Tk(e.minimum)&&!(r>=e.minimum)&&(yield z(R.IntegerMinimum,e,n,r)),Tk(e.multipleOf)&&r%e.multipleOf!==0&&(yield z(R.IntegerMultipleOf,e,n,r))}function*Rk(e,t,n,r){let i=!1;for(let a of e.allOf)for(let e of sA(a,t,n,r))i=!0,yield e;if(i)return yield z(R.Intersect,e,n,r);if(e.unevaluatedProperties===!1){let t=new RegExp(mC(e));for(let i of Object.getOwnPropertyNames(r))t.test(i)||(yield z(R.IntersectUnevaluatedProperties,e,`${n}/${i}`,r))}if(typeof e.unevaluatedProperties==`object`){let i=new RegExp(mC(e));for(let a of Object.getOwnPropertyNames(r))if(!i.test(a)){let i=sA(e.unevaluatedProperties,t,`${n}/${a}`,r[a]).next();i.done||(yield i.value)}}}function*zk(e,t,n,r){Q_(r)||(yield z(R.Iterator,e,n,r))}function*Bk(e,t,n,r){r!==e.const&&(yield z(R.Literal,e,n,r))}function*Vk(e,t,n,r){yield z(R.Never,e,n,r)}function*Hk(e,t,n,r){sA(e.not,t,n,r).next().done===!0&&(yield z(R.Not,e,n,r))}function*Uk(e,t,n,r){ov(r)||(yield z(R.Null,e,n,r))}function*Wk(e,t,n,r){if(!hv.IsNumberLike(r))return yield z(R.Number,e,n,r);Tk(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield z(R.NumberExclusiveMaximum,e,n,r)),Tk(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield z(R.NumberExclusiveMinimum,e,n,r)),Tk(e.maximum)&&!(r<=e.maximum)&&(yield z(R.NumberMaximum,e,n,r)),Tk(e.minimum)&&!(r>=e.minimum)&&(yield z(R.NumberMinimum,e,n,r)),Tk(e.multipleOf)&&r%e.multipleOf!==0&&(yield z(R.NumberMultipleOf,e,n,r))}function*Gk(e,t,n,r){if(!hv.IsObjectLike(r))return yield z(R.Object,e,n,r);Tk(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield z(R.ObjectMinProperties,e,n,r)),Tk(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield z(R.ObjectMaxProperties,e,n,r));let i=Array.isArray(e.required)?e.required:[],a=Object.getOwnPropertyNames(e.properties),o=Object.getOwnPropertyNames(r);for(let t of i)o.includes(t)||(yield z(R.ObjectRequiredProperty,e.properties[t],`${n}/${wk(t)}`,void 0));if(e.additionalProperties===!1)for(let t of o)a.includes(t)||(yield z(R.ObjectAdditionalProperties,e,`${n}/${wk(t)}`,r[t]));if(typeof e.additionalProperties==`object`)for(let i of o)a.includes(i)||(yield*sA(e.additionalProperties,t,`${n}/${wk(i)}`,r[i]));for(let i of a){let a=e.properties[i];e.required&&e.required.includes(i)?(yield*sA(a,t,`${n}/${wk(i)}`,r[i]),pT(e)&&!(i in r)&&(yield z(R.ObjectRequiredProperty,a,`${n}/${wk(i)}`,void 0))):hv.IsExactOptionalProperty(r,i)&&(yield*sA(a,t,`${n}/${wk(i)}`,r[i]))}}function*Kk(e,t,n,r){$_(r)||(yield z(R.Promise,e,n,r))}function*qk(e,t,n,r){if(!hv.IsRecordLike(r))return yield z(R.Object,e,n,r);Tk(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield z(R.ObjectMinProperties,e,n,r)),Tk(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield z(R.ObjectMaxProperties,e,n,r));let[i,a]=Object.entries(e.patternProperties)[0],o=new RegExp(i);for(let[e,i]of Object.entries(r))o.test(e)&&(yield*sA(a,t,`${n}/${wk(e)}`,i));if(typeof e.additionalProperties==`object`)for(let[i,a]of Object.entries(r))o.test(i)||(yield*sA(e.additionalProperties,t,`${n}/${wk(i)}`,a));if(e.additionalProperties===!1){for(let[t,i]of Object.entries(r))if(!o.test(t))return yield z(R.ObjectAdditionalProperties,e,`${n}/${wk(t)}`,i)}}function*Jk(e,t,n,r){yield*sA(pO(e,t),t,n,r)}function*Yk(e,t,n,r){if(!dv(r))return yield z(R.String,e,n,r);if(Tk(e.minLength)&&!(r.length>=e.minLength)&&(yield z(R.StringMinLength,e,n,r)),Tk(e.maxLength)&&!(r.length<=e.maxLength)&&(yield z(R.StringMaxLength,e,n,r)),!new RegExp(e.source,e.flags).test(r))return yield z(R.RegExp,e,n,r)}function*Xk(e,t,n,r){if(!dv(r))return yield z(R.String,e,n,r);Tk(e.minLength)&&!(r.length>=e.minLength)&&(yield z(R.StringMinLength,e,n,r)),Tk(e.maxLength)&&!(r.length<=e.maxLength)&&(yield z(R.StringMaxLength,e,n,r)),dv(e.pattern)&&(new RegExp(e.pattern).test(r)||(yield z(R.StringPattern,e,n,r))),dv(e.format)&&(Db(e.format)?Ob(e.format)(r)||(yield z(R.StringFormat,e,n,r)):yield z(R.StringFormatUnknown,e,n,r))}function*Zk(e,t,n,r){pv(r)||(yield z(R.Symbol,e,n,r))}function*Qk(e,t,n,r){if(!dv(r))return yield z(R.String,e,n,r);new RegExp(e.pattern).test(r)||(yield z(R.StringPattern,e,n,r))}function*$k(e,t,n,r){yield*sA(pO(e,t),t,n,r)}function*eA(e,t,n,r){if(!iv(r))return yield z(R.Tuple,e,n,r);if(e.items===void 0&&r.length!==0||r.length!==e.maxItems)return yield z(R.TupleLength,e,n,r);if(e.items)for(let i=0;i<e.items.length;i++)yield*sA(e.items[i],t,`${n}/${i}`,r[i])}function*tA(e,t,n,r){av(r)||(yield z(R.Undefined,e,n,r))}function*nA(e,t,n,r){if(Sk(e,t,r))return;let i=e.anyOf.map(e=>new Ek(sA(e,t,n,r)));yield z(R.Union,e,n,r,i)}function*rA(e,t,n,r){if(!tv(r))return yield z(R.Uint8Array,e,n,r);Tk(e.maxByteLength)&&!(r.length<=e.maxByteLength)&&(yield z(R.Uint8ArrayMaxByteLength,e,n,r)),Tk(e.minByteLength)&&!(r.length>=e.minByteLength)&&(yield z(R.Uint8ArrayMinByteLength,e,n,r))}function*iA(e,t,n,r){}function*aA(e,t,n,r){hv.IsVoidLike(r)||(yield z(R.Void,e,n,r))}function*oA(e,t,n,r){Mb(e[I])(e,r)||(yield z(R.Kind,e,n,r))}function*sA(e,t,n,r){let i=Tk(e.$id)?[...t,e]:t,a=e;switch(a[I]){case`Any`:return yield*Dk(a,i,n,r);case`Argument`:return yield*Ok(a,i,n,r);case`Array`:return yield*kk(a,i,n,r);case`AsyncIterator`:return yield*Ak(a,i,n,r);case`BigInt`:return yield*jk(a,i,n,r);case`Boolean`:return yield*Mk(a,i,n,r);case`Constructor`:return yield*Nk(a,i,n,r);case`Date`:return yield*Pk(a,i,n,r);case`Function`:return yield*Fk(a,i,n,r);case`Import`:return yield*Ik(a,i,n,r);case`Integer`:return yield*Lk(a,i,n,r);case`Intersect`:return yield*Rk(a,i,n,r);case`Iterator`:return yield*zk(a,i,n,r);case`Literal`:return yield*Bk(a,i,n,r);case`Never`:return yield*Vk(a,i,n,r);case`Not`:return yield*Hk(a,i,n,r);case`Null`:return yield*Uk(a,i,n,r);case`Number`:return yield*Wk(a,i,n,r);case`Object`:return yield*Gk(a,i,n,r);case`Promise`:return yield*Kk(a,i,n,r);case`Record`:return yield*qk(a,i,n,r);case`Ref`:return yield*Jk(a,i,n,r);case`RegExp`:return yield*Yk(a,i,n,r);case`String`:return yield*Xk(a,i,n,r);case`Symbol`:return yield*Zk(a,i,n,r);case`TemplateLiteral`:return yield*Qk(a,i,n,r);case`This`:return yield*$k(a,i,n,r);case`Tuple`:return yield*eA(a,i,n,r);case`Undefined`:return yield*tA(a,i,n,r);case`Union`:return yield*nA(a,i,n,r);case`Uint8Array`:return yield*rA(a,i,n,r);case`Unknown`:return yield*iA(a,i,n,r);case`Void`:return yield*aA(a,i,n,r);default:if(!Ab(a[I]))throw new Ck(e);return yield*oA(a,i,n,r)}}function cA(...e){return new Ek(e.length===3?sA(e[0],e[1],``,e[2]):sA(e[0],[],``,e[1]))}var lA=class extends Sv{constructor(e,t,n){super(`Unable to decode value as it does not match the expected schema`),this.schema=e,this.value=t,this.error=n}},uA=class extends Sv{constructor(e,t,n,r){super(r instanceof Error?r.message:`Unknown error`),this.schema=e,this.path=t,this.value=n,this.error=r}};function dA(e,t,n){try{return oy(e)?e[Cv].Decode(n):n}catch(r){throw new uA(e,t,n,r)}}function fA(e,t,n,r){return iv(r)?dA(e,n,r.map((r,i)=>SA(e.items,t,`${n}/${i}`,r))):dA(e,n,r)}function pA(e,t,n,r){if(!rv(r)||mv(r))return dA(e,n,r);let i=CC(e),a=i.map(e=>e[0]),o={...r};for(let[e,r]of i)e in o&&(o[e]=SA(r,t,`${n}/${e}`,o[e]));if(!oy(e.unevaluatedProperties))return dA(e,n,o);let s=Object.getOwnPropertyNames(o),c=e.unevaluatedProperties,l={...o};for(let e of s)a.includes(e)||(l[e]=dA(c,`${n}/${e}`,l[e]));return dA(e,n,l)}function mA(e,t,n,r){let i=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref];return dA(e,n,SA(a,[...t,...i],n,r))}function hA(e,t,n,r){return dA(e,n,SA(e.not,t,n,r))}function gA(e,t,n,r){if(!rv(r))return dA(e,n,r);let i=fC(e),a={...r};for(let r of i)nv(a,r)&&(av(a[r])&&(!cy(e.properties[r])||hv.IsExactOptionalProperty(a,r))||(a[r]=SA(e.properties[r],t,`${n}/${r}`,a[r])));if(!hy(e.additionalProperties))return dA(e,n,a);let o=Object.getOwnPropertyNames(a),s=e.additionalProperties,c={...a};for(let e of o)i.includes(e)||(c[e]=dA(s,`${n}/${e}`,c[e]));return dA(e,n,c)}function _A(e,t,n,r){if(!rv(r))return dA(e,n,r);let i=Object.getOwnPropertyNames(e.patternProperties)[0],a=new RegExp(i),o={...r};for(let s of Object.getOwnPropertyNames(r))a.test(s)&&(o[s]=SA(e.patternProperties[i],t,`${n}/${s}`,o[s]));if(!hy(e.additionalProperties))return dA(e,n,o);let s=Object.getOwnPropertyNames(o),c=e.additionalProperties,l={...o};for(let e of s)a.test(e)||(l[e]=dA(c,`${n}/${e}`,l[e]));return dA(e,n,l)}function vA(e,t,n,r){return dA(e,n,SA(pO(e,t),t,n,r))}function yA(e,t,n,r){return dA(e,n,SA(pO(e,t),t,n,r))}function bA(e,t,n,r){return iv(r)&&iv(e.items)?dA(e,n,e.items.map((e,i)=>SA(e,t,`${n}/${i}`,r[i]))):dA(e,n,r)}function xA(e,t,n,r){for(let i of e.anyOf)if(Sk(i,t,r))return dA(e,n,SA(i,t,n,r));return dA(e,n,r)}function SA(e,t,n,r){let i=fO(e,t),a=e;switch(e[I]){case`Array`:return fA(a,i,n,r);case`Import`:return mA(a,i,n,r);case`Intersect`:return pA(a,i,n,r);case`Not`:return hA(a,i,n,r);case`Object`:return gA(a,i,n,r);case`Record`:return _A(a,i,n,r);case`Ref`:return vA(a,i,n,r);case`Symbol`:return dA(a,n,r);case`This`:return yA(a,i,n,r);case`Tuple`:return bA(a,i,n,r);case`Union`:return xA(a,i,n,r);default:return dA(a,n,r)}}function CA(e,t,n){return SA(e,t,``,n)}var wA=class extends Sv{constructor(e,t,n){super(`The encoded value does not match the expected schema`),this.schema=e,this.value=t,this.error=n}},TA=class extends Sv{constructor(e,t,n,r){super(`${r instanceof Error?r.message:`Unknown error`}`),this.schema=e,this.path=t,this.value=n,this.error=r}};function EA(e,t,n){try{return oy(e)?e[Cv].Encode(n):n}catch(r){throw new TA(e,t,n,r)}}function DA(e,t,n,r){let i=EA(e,n,r);return iv(i)?i.map((r,i)=>LA(e.items,t,`${n}/${i}`,r)):i}function OA(e,t,n,r){let i=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref],o=EA(e,n,r);return LA(a,[...t,...i],n,o)}function kA(e,t,n,r){let i=EA(e,n,r);if(!rv(r)||mv(r))return i;let a=CC(e),o=a.map(e=>e[0]),s={...i};for(let[e,r]of a)e in s&&(s[e]=LA(r,t,`${n}/${e}`,s[e]));if(!oy(e.unevaluatedProperties))return s;let c=Object.getOwnPropertyNames(s),l=e.unevaluatedProperties,u={...s};for(let e of c)o.includes(e)||(u[e]=EA(l,`${n}/${e}`,u[e]));return u}function AA(e,t,n,r){return EA(e.not,n,EA(e,n,r))}function jA(e,t,n,r){let i=EA(e,n,r);if(!rv(i))return i;let a=fC(e),o={...i};for(let r of a)nv(o,r)&&(av(o[r])&&(!cy(e.properties[r])||hv.IsExactOptionalProperty(o,r))||(o[r]=LA(e.properties[r],t,`${n}/${r}`,o[r])));if(!hy(e.additionalProperties))return o;let s=Object.getOwnPropertyNames(o),c=e.additionalProperties,l={...o};for(let e of s)a.includes(e)||(l[e]=EA(c,`${n}/${e}`,l[e]));return l}function MA(e,t,n,r){let i=EA(e,n,r);if(!rv(r))return i;let a=Object.getOwnPropertyNames(e.patternProperties)[0],o=new RegExp(a),s={...i};for(let i of Object.getOwnPropertyNames(r))o.test(i)&&(s[i]=LA(e.patternProperties[a],t,`${n}/${i}`,s[i]));if(!hy(e.additionalProperties))return s;let c=Object.getOwnPropertyNames(s),l=e.additionalProperties,u={...s};for(let e of c)o.test(e)||(u[e]=EA(l,`${n}/${e}`,u[e]));return u}function NA(e,t,n,r){return EA(e,n,LA(pO(e,t),t,n,r))}function PA(e,t,n,r){return EA(e,n,LA(pO(e,t),t,n,r))}function FA(e,t,n,r){let i=EA(e,n,r);return iv(e.items)?e.items.map((e,r)=>LA(e,t,`${n}/${r}`,i[r])):[]}function IA(e,t,n,r){for(let i of e.anyOf)if(Sk(i,t,r))return EA(e,n,LA(i,t,n,r));for(let i of e.anyOf){let a=LA(i,t,n,r);if(Sk(e,t,a))return EA(e,n,a)}return EA(e,n,r)}function LA(e,t,n,r){let i=fO(e,t),a=e;switch(e[I]){case`Array`:return DA(a,i,n,r);case`Import`:return OA(a,i,n,r);case`Intersect`:return kA(a,i,n,r);case`Not`:return AA(a,i,n,r);case`Object`:return jA(a,i,n,r);case`Record`:return MA(a,i,n,r);case`Ref`:return NA(a,i,n,r);case`This`:return PA(a,i,n,r);case`Tuple`:return FA(a,i,n,r);case`Union`:return IA(a,i,n,r);default:return EA(a,n,r)}}function RA(e,t,n){return LA(e,t,``,n)}function zA(e,t){return oy(e)||ej(e.items,t)}function BA(e,t){return oy(e)||ej(e.items,t)}function VA(e,t){return oy(e)||ej(e.returns,t)||e.parameters.some(e=>ej(e,t))}function HA(e,t){return oy(e)||ej(e.returns,t)||e.parameters.some(e=>ej(e,t))}function UA(e,t){return oy(e)||oy(e.unevaluatedProperties)||e.allOf.some(e=>ej(e,t))}function WA(e,t){let n=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((t,n)=>[...t,e.$defs[n]],[]),r=e.$defs[e.$ref];return oy(e)||ej(r,[...n,...t])}function GA(e,t){return oy(e)||ej(e.items,t)}function KA(e,t){return oy(e)||ej(e.not,t)}function qA(e,t){return oy(e)||Object.values(e.properties).some(e=>ej(e,t))||hy(e.additionalProperties)&&ej(e.additionalProperties,t)}function JA(e,t){return oy(e)||ej(e.item,t)}function YA(e,t){let n=Object.getOwnPropertyNames(e.patternProperties)[0],r=e.patternProperties[n];return oy(e)||ej(r,t)||hy(e.additionalProperties)&&oy(e.additionalProperties)}function XA(e,t){return oy(e)?!0:ej(pO(e,t),t)}function ZA(e,t){return oy(e)?!0:ej(pO(e,t),t)}function QA(e,t){return oy(e)||!av(e.items)&&e.items.some(e=>ej(e,t))}function $A(e,t){return oy(e)||e.anyOf.some(e=>ej(e,t))}function ej(e,t){let n=fO(e,t),r=e;if(e.$id&&tj.has(e.$id))return!1;switch(e.$id&&tj.add(e.$id),e[I]){case`Array`:return zA(r,n);case`AsyncIterator`:return BA(r,n);case`Constructor`:return VA(r,n);case`Function`:return HA(r,n);case`Import`:return WA(r,n);case`Intersect`:return UA(r,n);case`Iterator`:return GA(r,n);case`Not`:return KA(r,n);case`Object`:return qA(r,n);case`Promise`:return JA(r,n);case`Record`:return YA(r,n);case`Ref`:return XA(r,n);case`This`:return ZA(r,n);case`Tuple`:return QA(r,n);case`Union`:return $A(r,n);default:return oy(e)}}var tj=new Set;function nj(e,t){return tj.clear(),ej(e,t)}var rj=class{constructor(e,t,n,r){this.schema=e,this.references=t,this.checkFunc=n,this.code=r,this.hasTransform=nj(e,t)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(e){return cA(this.schema,this.references,e)}Check(e){return this.checkFunc(e)}Decode(e){if(!this.checkFunc(e))throw new lA(this.schema,e,this.Errors(e).First());return this.hasTransform?CA(this.schema,this.references,e):e}Encode(e){let t=this.hasTransform?RA(this.schema,this.references,e):e;if(!this.checkFunc(t))throw new wA(this.schema,e,this.Errors(e).First());return t}},ij;(function(e){function t(e){return e===36}e.DollarSign=t;function n(e){return e===95}e.IsUnderscore=n;function r(e){return e>=65&&e<=90||e>=97&&e<=122}e.IsAlpha=r;function i(e){return e>=48&&e<=57}e.IsNumeric=i})(ij||={});var aj;(function(e){function t(e){return e.length===0?!1:ij.IsNumeric(e.charCodeAt(0))}function n(e){if(t(e))return!1;for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(!(ij.IsAlpha(n)||ij.IsNumeric(n)||ij.DollarSign(n)||ij.IsUnderscore(n)))return!1}return!0}function r(e){return e.replace(/'/g,`\\'`)}function i(e,t){return n(t)?`${e}.${t}`:`${e}['${r(t)}']`}e.Encode=i})(aj||={});var oj;(function(e){function t(e){let t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);ij.IsNumeric(r)||ij.IsAlpha(r)?t.push(e.charAt(n)):t.push(`_${r}_`)}return t.join(``).replace(/__/g,`_`)}e.Encode=t})(oj||={});var sj;(function(e){function t(e){return e.replace(/'/g,`\\'`)}e.Escape=t})(sj||={});var cj=class extends Sv{constructor(e){super(`Unknown type`),this.schema=e}},lj=class extends Sv{constructor(e){super(`Preflight validation check failed to guard for the given schema`),this.schema=e}},uj;(function(e){function t(e,t,n){return hv.ExactOptionalPropertyTypes?`('${t}' in ${e} ? ${n} : true)`:`(${aj.Encode(e,t)} !== undefined ? ${n} : true)`}e.IsExactOptionalProperty=t;function n(e){return hv.AllowArrayObject?`(typeof ${e} === 'object' && ${e} !== null)`:`(typeof ${e} === 'object' && ${e} !== null && !Array.isArray(${e}))`}e.IsObjectLike=n;function r(e){return hv.AllowArrayObject?`(typeof ${e} === 'object' && ${e} !== null && !(${e} instanceof Date) && !(${e} instanceof Uint8Array))`:`(typeof ${e} === 'object' && ${e} !== null && !Array.isArray(${e}) && !(${e} instanceof Date) && !(${e} instanceof Uint8Array))`}e.IsRecordLike=r;function i(e){return hv.AllowNaN?`typeof ${e} === 'number'`:`Number.isFinite(${e})`}e.IsNumberLike=i;function a(e){return hv.AllowNullVoid?`(${e} === undefined || ${e} === null)`:`${e} === undefined`}e.IsVoidLike=a})(uj||={});var dj;(function(e){function t(e){return e[I]===`Any`||e[I]===`Unknown`}function*n(e,t,n){yield`true`}function*r(e,t,n){yield`true`}function*i(e,t,n){yield`Array.isArray(${n})`;let[r,i]=[x(`value`,`any`),x(`acc`,`number`)];if(cv(e.maxItems)&&(yield`${n}.length <= ${e.maxItems}`),cv(e.minItems)&&(yield`${n}.length >= ${e.minItems}`),yield`((array) => { for(const ${r} of array) if(!(${ve(e.items,t,`value`)})) { return false }; return true; })(${n})`,vb(e.contains)||cv(e.minContains)||cv(e.maxContains)){let a=ve(vb(e.contains)?e.contains:Kb(),t,`value`),o=cv(e.minContains)?[`(count >= ${e.minContains})`]:[],s=cv(e.maxContains)?[`(count <= ${e.maxContains})`]:[];yield`((${r}) => { ${`const count = value.reduce((${i}, ${r}) => ${a} ? acc + 1 : acc, 0)`}; return ${[`(count > 0)`,...o,...s].join(` && `)}})(${n})`}e.uniqueItems===!0&&(yield`((${r}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${n})`)}function*a(e,t,n){yield`(typeof value === 'object' && Symbol.asyncIterator in ${n})`}function*o(e,t,n){yield`(typeof ${n} === 'bigint')`,uv(e.exclusiveMaximum)&&(yield`${n} < BigInt(${e.exclusiveMaximum})`),uv(e.exclusiveMinimum)&&(yield`${n} > BigInt(${e.exclusiveMinimum})`),uv(e.maximum)&&(yield`${n} <= BigInt(${e.maximum})`),uv(e.minimum)&&(yield`${n} >= BigInt(${e.minimum})`),uv(e.multipleOf)&&(yield`(${n} % BigInt(${e.multipleOf})) === 0`)}function*s(e,t,n){yield`(typeof ${n} === 'boolean')`}function*c(e,t,n){yield*y(e.returns,t,`${n}.prototype`)}function*l(e,t,n){yield`(${n} instanceof Date) && Number.isFinite(${n}.getTime())`,cv(e.exclusiveMaximumTimestamp)&&(yield`${n}.getTime() < ${e.exclusiveMaximumTimestamp}`),cv(e.exclusiveMinimumTimestamp)&&(yield`${n}.getTime() > ${e.exclusiveMinimumTimestamp}`),cv(e.maximumTimestamp)&&(yield`${n}.getTime() <= ${e.maximumTimestamp}`),cv(e.minimumTimestamp)&&(yield`${n}.getTime() >= ${e.minimumTimestamp}`),cv(e.multipleOfTimestamp)&&(yield`(${n}.getTime() % ${e.multipleOfTimestamp}) === 0`)}function*u(e,t,n){yield`(typeof ${n} === 'function')`}function*d(e,t,n){let r=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((t,n)=>[...t,e.$defs[n]],[]);yield*y(ZS(e.$ref),[...t,...r],n)}function*f(e,t,n){yield`Number.isInteger(${n})`,cv(e.exclusiveMaximum)&&(yield`${n} < ${e.exclusiveMaximum}`),cv(e.exclusiveMinimum)&&(yield`${n} > ${e.exclusiveMinimum}`),cv(e.maximum)&&(yield`${n} <= ${e.maximum}`),cv(e.minimum)&&(yield`${n} >= ${e.minimum}`),cv(e.multipleOf)&&(yield`(${n} % ${e.multipleOf}) === 0`)}function*p(e,t,n){let r=e.allOf.map(e=>ve(e,t,n)).join(` && `);e.unevaluatedProperties===!1?yield`(${r} && ${`Object.getOwnPropertyNames(${n}).every(key => ${b(`${new RegExp(mC(e))};`)}.test(key))`})`:vb(e.unevaluatedProperties)?yield`(${r} && ${`Object.getOwnPropertyNames(${n}).every(key => ${b(`${new RegExp(mC(e))};`)}.test(key) || ${ve(e.unevaluatedProperties,t,`${n}[key]`)})`})`:yield`(${r})`}function*m(e,t,n){yield`(typeof value === 'object' && Symbol.iterator in ${n})`}function*h(e,t,n){typeof e.const==`number`||typeof e.const==`boolean`?yield`(${n} === ${e.const})`:yield`(${n} === '${sj.Escape(e.const)}')`}function*g(e,t,n){yield`false`}function*_(e,t,n){yield`(!${ve(e.not,t,n)})`}function*ee(e,t,n){yield`(${n} === null)`}function*te(e,t,n){yield uj.IsNumberLike(n),cv(e.exclusiveMaximum)&&(yield`${n} < ${e.exclusiveMaximum}`),cv(e.exclusiveMinimum)&&(yield`${n} > ${e.exclusiveMinimum}`),cv(e.maximum)&&(yield`${n} <= ${e.maximum}`),cv(e.minimum)&&(yield`${n} >= ${e.minimum}`),cv(e.multipleOf)&&(yield`(${n} % ${e.multipleOf}) === 0`)}function*ne(e,n,r){yield uj.IsObjectLike(r),cv(e.minProperties)&&(yield`Object.getOwnPropertyNames(${r}).length >= ${e.minProperties}`),cv(e.maxProperties)&&(yield`Object.getOwnPropertyNames(${r}).length <= ${e.maxProperties}`);let i=Object.getOwnPropertyNames(e.properties);for(let a of i){let i=aj.Encode(r,a),o=e.properties[a];if(e.required&&e.required.includes(a))yield*y(o,n,i),(pT(o)||t(o))&&(yield`('${a}' in ${r})`);else{let e=ve(o,n,i);yield uj.IsExactOptionalProperty(r,a,e)}}if(e.additionalProperties===!1&&(e.required&&e.required.length===i.length?yield`Object.getOwnPropertyNames(${r}).length === ${i.length}`:yield`Object.getOwnPropertyNames(${r}).every(key => ${`[${i.map(e=>`'${e}'`).join(`, `)}]`}.includes(key))`),typeof e.additionalProperties==`object`){let t=ve(e.additionalProperties,n,`${r}[key]`);yield`(Object.getOwnPropertyNames(${r}).every(key => ${`[${i.map(e=>`'${e}'`).join(`, `)}]`}.includes(key) || ${t}))`}}function*re(e,t,n){yield`${n} instanceof Promise`}function*ie(e,t,n){yield uj.IsRecordLike(n),cv(e.minProperties)&&(yield`Object.getOwnPropertyNames(${n}).length >= ${e.minProperties}`),cv(e.maxProperties)&&(yield`Object.getOwnPropertyNames(${n}).length <= ${e.maxProperties}`);let[r,i]=Object.entries(e.patternProperties)[0];yield`(Object.entries(${n}).every(([key, value]) => ${`(${b(`${new RegExp(r)}`)}.test(key) ? ${ve(i,t,`value`)} : ${vb(e.additionalProperties)?ve(e.additionalProperties,t,n):e.additionalProperties===!1?`false`:`true`})`}))`}function*ae(e,t,n){let r=pO(e,t);if(_e.functions.has(e.$ref))return yield`${ye(e.$ref)}(${n})`;yield*y(r,t,n)}function*oe(e,t,n){let r=b(`${new RegExp(e.source,e.flags)};`);yield`(typeof ${n} === 'string')`,cv(e.maxLength)&&(yield`${n}.length <= ${e.maxLength}`),cv(e.minLength)&&(yield`${n}.length >= ${e.minLength}`),yield`${r}.test(${n})`}function*se(e,t,n){yield`(typeof ${n} === 'string')`,cv(e.maxLength)&&(yield`${n}.length <= ${e.maxLength}`),cv(e.minLength)&&(yield`${n}.length >= ${e.minLength}`),e.pattern!==void 0&&(yield`${b(`${new RegExp(e.pattern)};`)}.test(${n})`),e.format!==void 0&&(yield`format('${e.format}', ${n})`)}function*ce(e,t,n){yield`(typeof ${n} === 'symbol')`}function*le(e,t,n){yield`(typeof ${n} === 'string')`,yield`${b(`${new RegExp(e.pattern)};`)}.test(${n})`}function*ue(e,t,n){yield`${ye(e.$ref)}(${n})`}function*de(e,t,n){if(yield`Array.isArray(${n})`,e.items===void 0)return yield`${n}.length === 0`;yield`(${n}.length === ${e.maxItems})`;for(let r=0;r<e.items.length;r++)yield`${ve(e.items[r],t,`${n}[${r}]`)}`}function*fe(e,t,n){yield`${n} === undefined`}function*pe(e,t,n){yield`(${e.anyOf.map(e=>ve(e,t,n)).join(` || `)})`}function*me(e,t,n){yield`${n} instanceof Uint8Array`,cv(e.maxByteLength)&&(yield`(${n}.length <= ${e.maxByteLength})`),cv(e.minByteLength)&&(yield`(${n}.length >= ${e.minByteLength})`)}function*he(e,t,n){yield`true`}function*ge(e,t,n){yield uj.IsVoidLike(n)}function*v(e,t,n){let r=_e.instances.size;_e.instances.set(r,e),yield`kind('${e[I]}', ${r}, ${n})`}function*y(e,t,y,ve=!0){let b=dv(e.$id)?[...t,e]:t,x=e;if(ve&&dv(e.$id)){let n=ye(e.$id);if(_e.functions.has(n))return yield`${n}(${y})`;{_e.functions.set(n,`<deferred>`);let r=be(n,e,t,`value`,!1);return _e.functions.set(n,r),yield`${n}(${y})`}}switch(x[I]){case`Any`:return yield*n(x,b,y);case`Argument`:return yield*r(x,b,y);case`Array`:return yield*i(x,b,y);case`AsyncIterator`:return yield*a(x,b,y);case`BigInt`:return yield*o(x,b,y);case`Boolean`:return yield*s(x,b,y);case`Constructor`:return yield*c(x,b,y);case`Date`:return yield*l(x,b,y);case`Function`:return yield*u(x,b,y);case`Import`:return yield*d(x,b,y);case`Integer`:return yield*f(x,b,y);case`Intersect`:return yield*p(x,b,y);case`Iterator`:return yield*m(x,b,y);case`Literal`:return yield*h(x,b,y);case`Never`:return yield*g(x,b,y);case`Not`:return yield*_(x,b,y);case`Null`:return yield*ee(x,b,y);case`Number`:return yield*te(x,b,y);case`Object`:return yield*ne(x,b,y);case`Promise`:return yield*re(x,b,y);case`Record`:return yield*ie(x,b,y);case`Ref`:return yield*ae(x,b,y);case`RegExp`:return yield*oe(x,b,y);case`String`:return yield*se(x,b,y);case`Symbol`:return yield*ce(x,b,y);case`TemplateLiteral`:return yield*le(x,b,y);case`This`:return yield*ue(x,b,y);case`Tuple`:return yield*de(x,b,y);case`Undefined`:return yield*fe(x,b,y);case`Union`:return yield*pe(x,b,y);case`Uint8Array`:return yield*me(x,b,y);case`Unknown`:return yield*he(x,b,y);case`Void`:return yield*ge(x,b,y);default:if(!Ab(x[I]))throw new cj(e);return yield*v(x,b,y)}}let _e={language:`javascript`,functions:new Map,variables:new Map,instances:new Map};function ve(e,t,n,r=!0){return`(${[...y(e,t,n,r)].join(` && `)})`}function ye(e){return`check_${oj.Encode(e)}`}function b(e){let t=`local_${_e.variables.size}`;return _e.variables.set(t,`const ${t} = ${e}`),t}function be(e,t,n,r,i=!0){let[a,o]=[`
`,e=>``.padStart(e,` `)],s=x(`value`,`any`),c=xe(`boolean`),l=[...y(t,n,r,i)].map(e=>`${o(4)}${e}`).join(` &&${a}`);return`function ${e}(${s})${c} {${a}${o(2)}return (${a}${l}${a}${o(2)})\n}`}function x(e,t){return`${e}${_e.language===`typescript`?`: ${t}`:``}`}function xe(e){return _e.language===`typescript`?`: ${e}`:``}function Se(e,t,n){let r=be(`check`,e,t,`value`),i=x(`value`,`any`),a=xe(`boolean`),o=[..._e.functions.values()],s=[..._e.variables.values()],c=dv(e.$id)?`return function check(${i})${a} {\n  return ${ye(e.$id)}(value)\n}`:`return ${r}`;return[...s,...o,c].join(`
`)}function Ce(...e){let t={language:`javascript`},[n,r,i]=e.length===2&&iv(e[1])?[e[0],e[1],t]:e.length===2&&!iv(e[1])?[e[0],[],e[1]]:e.length===3?[e[0],e[1],e[2]]:e.length===1?[e[0],[],t]:[null,[],t];if(_e.language=i.language,_e.variables.clear(),_e.functions.clear(),_e.instances.clear(),!vb(n))throw new lj(n);for(let e of r)if(!vb(e))throw new lj(e);return Se(n,r,i)}e.Code=Ce;function we(e,t=[]){let n=Ce(e,t,{language:`javascript`}),r=globalThis.Function(`kind`,`format`,`hash`,n),i=new Map(_e.instances);function a(e,t,n){return!Ab(e)||!i.has(t)?!1:Mb(e)(i.get(t),n)}function o(e,t){return Db(e)?Ob(e)(t):!1}function s(e){return LO(e)}return new rj(e,t,r(a,o,s),n)}e.Compile=we})(dj||={});var fj={};function pj(e,t){e in fj||(fj[e]=t)}var mj=!1;function hj(){mj||(mj=!0,cO(e=>(fj[e.schema[I]]||oO)(e)))}var gj=Symbol.for(`object-shape-tester.shape-identifier`);function _j(e){if(hj(),vj(e))return e;let t=xj(e),n=bj(t,!1),r=bj(t,!0),i={$_schema:t,$_schemaNoExtraKeys:n,$_schemaExtraKeys:r,default:t.default,$_compiledSchema:dj.Compile(t),$_compiledSchemaNoExtraKeys:dj.Compile(n),$_compiledSchemaExtraKeys:dj.Compile(r)};return Object.defineProperties(i,{runtimeType:{configurable:!1,enumerable:!1,get(){throw Error(`runtimeType cannot be used as a value, it is only for types.`)}},[gj]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),i}function vj(e){return j.hasKey(e,gj)&&!!e[gj]}function yj(e){return j.hasKey(e,I)}function bj(e,t){let n={...e};if(Array.isArray(e.anyOf)&&(n.anyOf=e.anyOf.map(e=>bj(e,t))),Array.isArray(e.allOf)&&(n.allOf=e.allOf.map(e=>bj(e,t))),yj(e.items)?n.items=bj(e.items,t):Array.isArray(e.items)&&(n.items=e.items.map(e=>bj(e,t))),j.isObject(e.properties)){let r={};Object.entries(e.properties).forEach(([e,n])=>{r[e]=bj(n,t)}),n.properties=r}return n.additionalProperties=t,n}function xj(e){if(yj(e))return e;if(vj(e))return e.$_schema;if(j.isFunction(e))return aO.Function([],aO.Any(),{default:e});if(j.isObject(e)){let t={},n={};return Object.entries(e).forEach(([e,r])=>{let i=xj(r);n[e]=i,t[e]=i.default}),aO.Object(n,{default:t})}else if(j.isArray(e))return aO.Array(aO.Union(e.map(e=>xj(e))),{default:[]});else if(j.isPrimitive(e)){if(j.isString(e))return aO.String({default:e});if(j.isNumber(e))return aO.Number({default:e});if(j.isBoolean(e))return aO.Boolean({default:e});if(j.isSymbol(e))return aO.Symbol({default:e});if(j.isNull(e))return aO.Null({default:null});if(j.isUndefined(e))return aO.Undefined({default:void 0});if(j.isBigInt(e))return aO.BigInt({default:e});Mc.tsType(e).equals(),Mc.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw Error(`Invalid shape: ${v(e)}`)}function Sj({checkValue:e,default:t,name:n}){return Ab(n)||jb(n,(t,n)=>e(n)),(e=t)=>_j(aO.Unsafe({[I]:n,default:e}))}function Cj(e,t){let n=De(e);if(t!=null&&!n.includes(t))throw TypeError(`enumShape default must be a subset of the given enum.`);return _j(aO.Union(n.map(e=>aO.Literal(e)),{default:t??n[0]}))}function wj(e){return j.isSymbol(e)?Ej(e):_j(aO.Const(e,{default:e}))}var Tj=`ExactSymbol`;function Ej(e){return Ab(`ExactSymbol`)||jb(Tj,(e,t)=>t===e.symbol),pj(Tj,({schema:e})=>`Expected symbol ${e.symbol?.description?Ll({value:e.symbol.description,wrapper:`'`}):`<unnamed symbol>`}`),_j(aO.Unsafe({[I]:Tj,symbol:e,default:e}))}function Dj(...e){let t={},n=e.map(e=>{let n=_j(e);return Object.assign(t,n.default),n.$_schema});return _j(aO.Composite(n,{default:t}))}function Oj(e,t={}){hv.ExactOptionalPropertyTypes=!0;let n=_j(e).$_schema,r=t.alsoUndefined?aO.Union([aO.Undefined(),n]):n;return _j(aO.Optional(r))}function kj(...e){let t,n=e.map((e,n)=>{let r=_j(e);return n||(t=r.default),r.$_schema});return _j(aO.Union(n,{default:t}))}function Aj(e){return Oj(kj(void 0,null,e))}function jj(e){let t=_j(e);return _j(aO.Partial(t.$_schema,{default:t.default}))}function Mj(e){return kj(e,``,-1,0n,!1,jC(),null,void 0)}var Nj=class extends TypeError{errors;failureMessage;name=`ShapeMismatchError`;constructor(e,t){let n=je(t,`Shape mismatch:\n${yo(e.map(e=>Fj(e)).join(`
`),1)}`);super(n),this.errors=e,this.failureMessage=t}};function Pj(e){return e.errors.flatMap(e=>Array.from(e))}function Fj(e,t=0){let n=Pj(e).map(e=>Fj(e,t+1));return[yo([e.path,e.message].filter(j.isTruthy).join(`: `)+(n.length?`:`:``),t),...n].join(`
`)}function Ij(e,t,n={}){return Rj(t,n).Check(e)}function Lj(e,t,n={},r){if(Ij(e,t,n))return;let i=Array.from(Rj(t,n).Errors(e));if(i.length)throw new Nj(i,r)}function Rj(e,t){return e=zj(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function zj(e){return _j(e)}function Bj({exclusiveMax:e,exclusiveMin:t,...n}){let{min:r,max:i}=Pe(n),a=n.default??(i-r)/2+r,o=_j(aO.Number({...t?{exclusiveMinimum:r}:{minimum:r},...e?{exclusiveMaximum:i}:{maximum:i},default:a})),s=$c(()=>Lj(a,o));if(s)throw Ne(s,`Default range value is not within range.`);return o}var Vj=`recordShape`;function Hj({keys:e,values:t,partial:n,additionalProperties:r}){Uj();let i=Kj(e),a=_j(t);return _j(aO.Unsafe({[I]:Vj,keysShape:i,valuesShape:a,isPartial:!!n,additionalProperties:!!r,default:Gj({isPartial:!!n,keysShape:i,valuesShape:a})}))}function Uj(){Ab(`recordShape`)||jb(Vj,(e,t)=>{if(typeof t!=`object`||!t||Array.isArray(t))return!1;let n=Object.entries(t).every(([t,n])=>{let r=e.additionalProperties?!0:Ij(t,e.keysShape),i=Ij(n,e.valuesShape);return r&&i}),r=e.isPartial?!0:!Wj(e.keysShape,t).length;return n&&r}),pj(Vj,e=>{let t=e.schema,n=e.value;if(typeof n!=`object`||!n||Array.isArray(n))return`Expected an object`;let r=Gc(Object.entries(n),([e])=>e,(e,[n,r])=>!Ij(n,t.keysShape)||!Ij(r,t.valuesShape)),i=Wj(t.keysShape,n);return[r.length?[`Failure at keys`,r.join(`,`)].join(`: `):``,i.length?[`Missing keys`,i.join(`,`)].join(`: `):``].filter(j.isTruthy).join(`
`)})}function Wj(e,t){let n=qj(e).filter(e=>j.isPropertyKey(e));return n.length?n.filter(e=>!j.hasKey(t,e)):[]}function Gj({keysShape:e,valuesShape:t,isPartial:n}){if(n)return{};{let n=qj(e),r=t.default;return Object.fromEntries(n.map(e=>[e,r]))}}function Kj(e){return vj(e)?e:yj(e)?_j(e):j.isObject(e)?Cj(e):j.isArray(e)&&j.isLengthAtLeast(e,1)?kj(...e.map(e=>wj(e))):j.isPropertyKey(e)?_j(e):_j(aO.Undefined())}function qj(e){let t=e.$_schema,n=t[I].toLowerCase();return[`const`,`literal`].includes(n)?[t.const]:n===`union`?o(t.anyOf.flatMap(e=>qj(_j(e)))):[`undefined`,`number`,`string`,`symbol`].includes(n)?[]:qj(Kj(e.default))}function Jj(e){return _j(aO.Unknown({default:e}))}var Yj=`Africa/Abidjan.Africa/Accra.Africa/Addis_Ababa.Africa/Algiers.Africa/Asmara.Africa/Bamako.Africa/Bangui.Africa/Banjul.Africa/Bissau.Africa/Blantyre.Africa/Brazzaville.Africa/Bujumbura.Africa/Cairo.Africa/Casablanca.Africa/Ceuta.Africa/Conakry.Africa/Dakar.Africa/Dar_es_Salaam.Africa/Djibouti.Africa/Douala.Africa/El_Aaiun.Africa/Freetown.Africa/Gaborone.Africa/Harare.Africa/Johannesburg.Africa/Juba.Africa/Kampala.Africa/Khartoum.Africa/Kigali.Africa/Kinshasa.Africa/Lagos.Africa/Libreville.Africa/Lome.Africa/Luanda.Africa/Lubumbashi.Africa/Lusaka.Africa/Malabo.Africa/Maputo.Africa/Maseru.Africa/Mbabane.Africa/Mogadishu.Africa/Monrovia.Africa/Nairobi.Africa/Ndjamena.Africa/Niamey.Africa/Nouakchott.Africa/Ouagadougou.Africa/Porto-Novo.Africa/Sao_Tome.Africa/Timbuktu.Africa/Tripoli.Africa/Tunis.Africa/Windhoek.America/Adak.America/Anchorage.America/Anguilla.America/Antigua.America/Araguaina.America/Argentina/Buenos_Aires.America/Argentina/Catamarca.America/Argentina/ComodRivadavia.America/Argentina/Cordoba.America/Argentina/Jujuy.America/Argentina/La_Rioja.America/Argentina/Mendoza.America/Argentina/Rio_Gallegos.America/Argentina/Salta.America/Argentina/San_Juan.America/Argentina/San_Luis.America/Argentina/Tucuman.America/Argentina/Ushuaia.America/Aruba.America/Asuncion.America/Atikokan.America/Bahia.America/Bahia_Banderas.America/Barbados.America/Belem.America/Belize.America/Blanc-Sablon.America/Boa_Vista.America/Bogota.America/Boise.America/Cambridge_Bay.America/Campo_Grande.America/Cancun.America/Caracas.America/Cayenne.America/Cayman.America/Chicago.America/Chihuahua.America/Coral_Harbour.America/Costa_Rica.America/Creston.America/Cuiaba.America/Curacao.America/Danmarkshavn.America/Dawson.America/Dawson_Creek.America/Denver.America/Detroit.America/Dominica.America/Edmonton.America/Eirunepe.America/El_Salvador.America/Ensenada.America/Fort_Nelson.America/Fortaleza.America/Glace_Bay.America/Goose_Bay.America/Grand_Turk.America/Grenada.America/Guadeloupe.America/Guatemala.America/Guayaquil.America/Guyana.America/Halifax.America/Havana.America/Hermosillo.America/Indiana/Indianapolis.America/Indiana/Knox.America/Indiana/Marengo.America/Indiana/Petersburg.America/Indiana/Tell_City.America/Indiana/Vevay.America/Indiana/Vincennes.America/Indiana/Winamac.America/Inuvik.America/Iqaluit.America/Jamaica.America/Juneau.America/Kentucky/Louisville.America/Kentucky/Monticello.America/La_Paz.America/Lima.America/Los_Angeles.America/Maceio.America/Managua.America/Manaus.America/Martinique.America/Matamoros.America/Mazatlan.America/Menominee.America/Merida.America/Metlakatla.America/Mexico_City.America/Miquelon.America/Moncton.America/Monterrey.America/Montevideo.America/Montreal.America/Montserrat.America/Nassau.America/New_York.America/Nipigon.America/Nome.America/Noronha.America/North_Dakota/Beulah.America/North_Dakota/Center.America/North_Dakota/New_Salem.America/Nuuk.America/Ojinaga.America/Panama.America/Pangnirtung.America/Paramaribo.America/Phoenix.America/Port-au-Prince.America/Port_of_Spain.America/Porto_Velho.America/Puerto_Rico.America/Punta_Arenas.America/Rainy_River.America/Rankin_Inlet.America/Recife.America/Regina.America/Resolute.America/Rio_Branco.America/Rosario.America/Santarem.America/Santiago.America/Santo_Domingo.America/Sao_Paulo.America/Scoresbysund.America/Sitka.America/St_Johns.America/St_Kitts.America/St_Lucia.America/St_Thomas.America/St_Vincent.America/Swift_Current.America/Tegucigalpa.America/Thule.America/Thunder_Bay.America/Tijuana.America/Toronto.America/Tortola.America/Vancouver.America/Whitehorse.America/Winnipeg.America/Yakutat.America/Yellowknife.Antarctica/Casey.Antarctica/Davis.Antarctica/DumontDUrville.Antarctica/Macquarie.Antarctica/Mawson.Antarctica/McMurdo.Antarctica/Palmer.Antarctica/Rothera.Antarctica/Syowa.Antarctica/Troll.Antarctica/Vostok.Asia/Aden.Asia/Almaty.Asia/Amman.Asia/Anadyr.Asia/Aqtau.Asia/Aqtobe.Asia/Ashgabat.Asia/Atyrau.Asia/Baghdad.Asia/Bahrain.Asia/Baku.Asia/Bangkok.Asia/Barnaul.Asia/Beirut.Asia/Bishkek.Asia/Brunei.Asia/Chita.Asia/Choibalsan.Asia/Chongqing.Asia/Colombo.Asia/Damascus.Asia/Dhaka.Asia/Dili.Asia/Dubai.Asia/Dushanbe.Asia/Famagusta.Asia/Gaza.Asia/Harbin.Asia/Hebron.Asia/Ho_Chi_Minh.Asia/Hong_Kong.Asia/Hovd.Asia/Irkutsk.Asia/Jakarta.Asia/Jayapura.Asia/Jerusalem.Asia/Kabul.Asia/Kamchatka.Asia/Karachi.Asia/Kashgar.Asia/Kathmandu.Asia/Khandyga.Asia/Kolkata.Asia/Krasnoyarsk.Asia/Kuala_Lumpur.Asia/Kuching.Asia/Kuwait.Asia/Macau.Asia/Magadan.Asia/Makassar.Asia/Manila.Asia/Muscat.Asia/Nicosia.Asia/Novokuznetsk.Asia/Novosibirsk.Asia/Omsk.Asia/Oral.Asia/Phnom_Penh.Asia/Pontianak.Asia/Pyongyang.Asia/Qatar.Asia/Qostanay.Asia/Qyzylorda.Asia/Riyadh.Asia/Sakhalin.Asia/Samarkand.Asia/Seoul.Asia/Shanghai.Asia/Singapore.Asia/Srednekolymsk.Asia/Taipei.Asia/Tashkent.Asia/Tbilisi.Asia/Tehran.Asia/Tel_Aviv.Asia/Thimphu.Asia/Tokyo.Asia/Tomsk.Asia/Ulaanbaatar.Asia/Urumqi.Asia/Ust-Nera.Asia/Vientiane.Asia/Vladivostok.Asia/Yakutsk.Asia/Yangon.Asia/Yekaterinburg.Asia/Yerevan.Atlantic/Azores.Atlantic/Bermuda.Atlantic/Canary.Atlantic/Cape_Verde.Atlantic/Faroe.Atlantic/Jan_Mayen.Atlantic/Madeira.Atlantic/Reykjavik.Atlantic/South_Georgia.Atlantic/St_Helena.Atlantic/Stanley.Australia/Adelaide.Australia/Brisbane.Australia/Broken_Hill.Australia/Currie.Australia/Darwin.Australia/Eucla.Australia/Hobart.Australia/Lindeman.Australia/Lord_Howe.Australia/Melbourne.Australia/Perth.Australia/Sydney.CET.CST6CDT.EET.EST.EST5EDT.Etc/GMT+1.Etc/GMT+10.Etc/GMT+11.Etc/GMT+12.Etc/GMT+2.Etc/GMT+3.Etc/GMT+4.Etc/GMT+5.Etc/GMT+6.Etc/GMT+7.Etc/GMT+8.Etc/GMT+9.Etc/GMT-1.Etc/GMT-10.Etc/GMT-11.Etc/GMT-12.Etc/GMT-13.Etc/GMT-14.Etc/GMT-2.Etc/GMT-3.Etc/GMT-4.Etc/GMT-5.Etc/GMT-6.Etc/GMT-7.Etc/GMT-8.Etc/GMT-9.Europe/Amsterdam.Europe/Andorra.Europe/Astrakhan.Europe/Athens.Europe/Belfast.Europe/Belgrade.Europe/Berlin.Europe/Brussels.Europe/Bucharest.Europe/Budapest.Europe/Chisinau.Europe/Copenhagen.Europe/Dublin.Europe/Gibraltar.Europe/Guernsey.Europe/Helsinki.Europe/Isle_of_Man.Europe/Istanbul.Europe/Jersey.Europe/Kaliningrad.Europe/Kirov.Europe/Kyiv.Europe/Lisbon.Europe/Ljubljana.Europe/London.Europe/Luxembourg.Europe/Madrid.Europe/Malta.Europe/Minsk.Europe/Monaco.Europe/Moscow.Europe/Oslo.Europe/Paris.Europe/Prague.Europe/Riga.Europe/Rome.Europe/Samara.Europe/Sarajevo.Europe/Saratov.Europe/Simferopol.Europe/Skopje.Europe/Sofia.Europe/Stockholm.Europe/Tallinn.Europe/Tirane.Europe/Tiraspol.Europe/Ulyanovsk.Europe/Uzhgorod.Europe/Vaduz.Europe/Vienna.Europe/Vilnius.Europe/Volgograd.Europe/Warsaw.Europe/Zagreb.Europe/Zaporozhye.Europe/Zurich.HST.Indian/Antananarivo.Indian/Chagos.Indian/Christmas.Indian/Cocos.Indian/Comoro.Indian/Kerguelen.Indian/Mahe.Indian/Maldives.Indian/Mauritius.Indian/Mayotte.Indian/Reunion.MET.MST.MST7MDT.PST8PDT.Pacific/Apia.Pacific/Auckland.Pacific/Bougainville.Pacific/Chatham.Pacific/Chuuk.Pacific/Easter.Pacific/Efate.Pacific/Enderbury.Pacific/Fakaofo.Pacific/Fiji.Pacific/Funafuti.Pacific/Galapagos.Pacific/Gambier.Pacific/Guadalcanal.Pacific/Guam.Pacific/Honolulu.Pacific/Johnston.Pacific/Kanton.Pacific/Kiritimati.Pacific/Kosrae.Pacific/Kwajalein.Pacific/Majuro.Pacific/Marquesas.Pacific/Midway.Pacific/Nauru.Pacific/Niue.Pacific/Norfolk.Pacific/Noumea.Pacific/Pago_Pago.Pacific/Palau.Pacific/Pitcairn.Pacific/Pohnpei.Pacific/Port_Moresby.Pacific/Rarotonga.Pacific/Saipan.Pacific/Tahiti.Pacific/Tarawa.Pacific/Tongatapu.Pacific/Wake.Pacific/Wallis.UTC.WET`.split(`.`).reduce((e,t)=>(e[t]=t,e),{});hn.defaultZone.name;var Xj=Yj.UTC,Zj=_j({hour:Bj({...Za,default:Za.min}),minute:Bj({...Qa,default:Qa.min}),second:Bj({...$a,default:$a.min}),millisecond:Bj({...eo,default:eo.min}),timezone:Cj(Yj,Xj)});_j(Dj(_j({year:2023,month:Bj({...uo,default:uo.min}),day:Bj({...fo,default:fo.min}),timezone:Cj(Yj,Xj)}),Zj)),to.Years,to.Months,to.Weeks,to.Days,to.Hours,to.Minutes,to.Seconds,to.Milliseconds,_j(kj({get:wj(O.Month),in:kj(wj(O.Year))},{get:wj(O.Week),in:kj(wj(O.Year),wj(O.Month))},{get:wj(O.Day),in:kj(wj(O.Year),wj(O.Month),wj(O.Week))},{get:wj(O.Hour),in:kj(wj(O.Year),wj(O.Month),wj(O.Week),wj(O.Day))},{get:wj(O.Minute),in:kj(wj(O.Year),wj(O.Month),wj(O.Week),wj(O.Day),wj(O.Hour))},{get:wj(O.Second),in:kj(wj(O.Year),wj(O.Month),wj(O.Week),wj(O.Day),wj(O.Hour),wj(O.Minute))},{get:wj(O.Millisecond),in:kj(wj(O.Year),wj(O.Month),wj(O.Week),wj(O.Day),wj(O.Hour),wj(O.Minute),wj(O.Second))})),Hj({keys:Cj(to),values:-1,partial:!0});var Qj;(function(e){e.Date=`date`,e.Time=`time`,e.DateTime=`datetime-local`})(Qj||={});var $j;(function(e){e.Hour=`hour`,e.Minute=`minute`,e.Second=`second`,e.Millisecond=`millisecond`})($j||={});var eM;(function(e){e.Year=`year`,e.Month=`month`,e.Day=`day`})(eM||={}),kl({year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0},De($j)),Sj({default:new Date().toISOString(),name:`UtcIsoString`,checkValue(e){return tM(e)}});function tM(e){return Ya.fromISO(e).toUTC().toISO()===e}Ya.DATE_SHORT,Ya.DATE_MED,Ya.DATE_MED_WITH_WEEKDAY,Ya.DATE_FULL,Ya.DATE_HUGE,Ya.TIME_SIMPLE,Ya.TIME_WITH_SECONDS,Ya.TIME_WITH_SHORT_OFFSET,Ya.TIME_WITH_LONG_OFFSET,Ya.TIME_24_SIMPLE,Ya.TIME_24_WITH_SECONDS,Ya.TIME_24_WITH_SHORT_OFFSET,Ya.TIME_24_WITH_LONG_OFFSET,Ya.DATETIME_SHORT,Ya.DATETIME_SHORT_WITH_SECONDS,Ya.DATETIME_MED,Ya.DATETIME_MED_WITH_SECONDS,Ya.DATETIME_MED_WITH_WEEKDAY,Ya.DATETIME_FULL,Ya.DATETIME_FULL_WITH_SECONDS,Ya.DATETIME_HUGE,Ya.DATETIME_HUGE_WITH_SECONDS;var nM=_j({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:Jj()});function rM(e){return Ij(e,nM,{allowExtraKeys:!0})}var iM=class extends C_{value;equalityCheck;constructor(e){super(),this.value=e.defaultValue,this.equalityCheck=`equalityCheck`in e?e.equalityCheck:w_}setValue(e){return super.setValue(e)}listen(e,t){return super.listen(e,t)}removeListener(e){return super.removeListener(e)}},{I:aM}=Cd,oM=e=>e,sM=()=>document.createComment(``),cM=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new aM(r.insertBefore(sM(),i),r.insertBefore(sM(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=oM(e).nextSibling;oM(r).insertBefore(e,i),e=t}}}return n},lM=(e,t,n=e)=>(e._$AI(t,n),e),uM={},dM=(e,t=uM)=>e._$AH=t,fM=e=>e._$AH,pM=e=>{e._$AR(),e._$AA.remove()},mM={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},hM=e=>(...t)=>({_$litDirective$:e,values:t}),gM=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},_M={attribute:!0,type:String,converter:Lu,reflect:!1,hasChanged:Ru},vM=(e=_M,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function yM(e){return(t,n)=>typeof n==`object`?vM(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}var bM=hM(class extends gM{constructor(e){if(super(e),e.type!==mM.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return ld}}),xM=e=>e??M;function*SM(e,t){let n=typeof t==`function`;if(e!==void 0){let r=-1;for(let i of e)r>-1&&(yield n?t(r):t),r++,yield i}}var CM=class extends gM{constructor(e){if(super(e),this.it=M,e.type!==mM.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===M||e==null)return this._t=void 0,this.it=e;if(e===ld)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};CM.directiveName=`unsafeHTML`,CM.resultType=1;var wM=hM(CM);function TM(e,t,n){return e?t(e):n?.(e)}var EM=class extends Dd{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds};function DM(e,t,n){let r=!t.length&&!n.length,i=e.length?!1:!t.filter(e=>!!e.index).length;if(r||i)return[...e];let a=e.map(e=>[e]);return a.length||(a[0]=[]),n.forEach(t=>{t>=0&&t<e.length&&(a[t]=[])}),t.forEach(e=>{let t=a[e.index];t&&t.splice(0,0,...e.values)}),a.flat()}function OM(e){return j.hasKey(e,`_elementVirIsMinimalDefinitionWithInputs`)&&!!e._elementVirIsMinimalDefinitionWithInputs}function kM(e){return j.hasKey(e,`tagName`)&&!!e.tagName&&typeof e.tagName==`string`}function AM(e){return Gc(e,e=>{if(OM(e))return e.definition;if(kM(e))return e.tagInterpolationKey||e},j.isTruthy)}var jM=new WeakMap;function MM(e,t){return PM(jM,[e,...AM(t)]).value?.template}function NM(e,t,n){return IM(jM,[e,...AM(t)],n)}function PM(e,t,n=0){let{currentTemplateAndNested:r,reason:i}=FM(e,t,n);return r?n===t.length-1?{value:r,reason:`reached end of keys array`}:r.nested?PM(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function FM(e,t,n){let r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};let i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:`key and value exists`}}function IM(e,t,n,r=0){let{currentTemplateAndNested:i,currentKey:a,reason:o}=FM(e,t,r);if(!a)return{result:!1,reason:o};let s=i??{nested:void 0,template:void 0};if(i||e.set(a,s),r===t.length-1)return s.template=n,{result:!0,reason:`set value at end of keys array`};let c=s.nested??new WeakMap;return s.nested||=c,IM(c,t,n,r+1)}function LM(e,t,n){let r=MM(e,t),i=r??n();if(!r){let n=NM(e,t,i);if(!n.result)throw Error(`Failed to set template transform: ${n.reason}`)}let a=i.valuesTransform(t),o=DM(t,a.valueInsertions,a.valueIndexDeletions);return{strings:i.templateStrings,values:o}}function RM(e,t,n,r){let i=[],a=[],o=[],s=[];return e.forEach((c,l)=>{let u=i.length-1,d=i[u],f=l-1,p=t[f];r&&r(c);let m,h=[];if(typeof d==`string`&&(m=n(d,c,p),m)){i[u]=[d,m.replacement].join(``),o.push(f);let e=m.getExtraValues;h=e?e(p):[],h.length&&e?(i[u]+=` `,h.forEach((e,t)=>{t&&i.push(` `)}),s.push(t=>{let n=t[f];return{index:f,values:e(n)}}),i.push(c)):i[u]+=c}m||i.push(c);let g=e.raw[l];m?(a[u]=[a[u],m.replacement,g].join(``),h.length&&h.forEach(()=>{a.push(``)})):a.push(g)}),{templateStrings:Object.assign([],i,{raw:a}),valuesTransform(e){return{valueIndexDeletions:o,valueInsertions:s.flatMap(t=>t(e))}}}}function zM(...[e,t,n]){if(kM(n))return{replacement:n.tagName,getExtraValues:void 0}}function BM(e,t){return RM(e,t,zM)}function B(e,...t){let n=LM(e,t,()=>BM(e,t));return Cu(n.strings,...n.values)}var VM={allowPolymorphicState:!1,errorHandler:void 0};function HM(e,t){let n=e.instanceState;Te(t).forEach(r=>{if(n&&r in n)throw Error(`Cannot set input '${String(r)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);`instanceInputs`in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),`instanceInputs`in e&&Te(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}var UM=class extends CustomEvent{_type=``;get type(){return this._type}constructor(e,t){super(typeof e==`string`?e:e.type,{detail:t,bubbles:!0,composed:!0})}};function WM(){return e=>class extends UM{static type=e;_type=e;constructor(t){super(e,t)}}}function GM(){return WM()}function KM(e,t){return t?Object.keys(t).filter(e=>{if(typeof e!=`string`)throw TypeError(`Expected event key of type string but got type '${typeof e}' for key ${String(e)}`);if(e===``)throw Error(`Got empty string for events key.`);return!0}).reduce((t,n)=>(t[n]=WM()([e,n].join(`-`)),t),{}):{}}function qM(e){return e?Dl(e,e=>e):{}}function JM(e,t){t in e||yM()(e,t)}function YM(e,t,n){if(typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`)throw TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function XM(e,t){let n=e;function r(n){t?YM(n,e,e.tagName):JM(e,n)}function i(e,t){return r(t),n[t]}return new Proxy({},{get:i,set(t,i,a){r(i);let o=n[i];function s(e){t[i]=e,n[i]=e}let c=e.observablePropertyListenerMap[i];if(o!==a&&rM(o)&&c&&o.removeListener(c),rM(a))if(c)a.listen(!1,c);else{function t(){e.requestUpdate()}e.observablePropertyListenerMap[i]=t,a.listen(!1,t)}else rM(o)&&(e.observablePropertyListenerMap[i]=void 0);return s(a),!0},ownKeys(e){return Reflect.ownKeys(e)},getOwnPropertyDescriptor(e,t){if(t in e)return{get value(){return i(e,t)},configurable:!0,enumerable:!0}},has(e,t){return Reflect.has(e,t)}})}function ZM(e,t){let n=[e,`-`].join(``);Object.keys(t).forEach(t=>{if(!t.startsWith(n))throw Error(`Invalid element string name '${t}' in '${e}': element string names must begin with the element's tag name.`)})}function QM(e,t,n){return n?Kc(n,n=>({key:n,value:[e,t,n].join(`-`)}),{useRequired:!0}):{}}function $M({hostClassNames:e,cssVars:t}){return{hostClasses:Dl(e,(e,t)=>({name:Su(t),selector:Su(`:host(.${t})`)})),cssVars:t}}function eN({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&Te(t).forEach(a=>{let o=t[a],s=n[a];typeof o==`function`&&(o({state:r,inputs:i})?e.classList.add(s):e.classList.remove(s))})}function tN({element:e,eventsMap:t,cssVars:n,slotNamesMap:r,testIdsMap:i}){function a(t){Te(t).forEach(n=>{let r=t[n];e.instanceState[n]=r})}return{cssVars:n,slotNames:r,testIds:i,dispatch:t=>e.dispatchEvent(t),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:a}}function nN(...e){return Mc.isEmpty(e),e=>{let t=e;if(!j.isObject(t))throw TypeError("Cannot define element with non-object init: ${init}");return rN({...t,options:{...t.options}})}}function rN(e){if(!j.isObject(e))throw TypeError("Cannot define element with non-object init: ${init}");if(!j.isString(e.tagName))throw TypeError(`Missing valid tagName (expected a string).`);if(!e.render||typeof e.render==`string`)throw Error(`Failed to define element '${e.tagName}': render is not a function`);let t={...VM,...e.options},n=KM(e.tagName,e.events),r=qM(e.hostClasses);e.hostClasses&&ZM(e.tagName,e.hostClasses),e.cssVars&&ZM(e.tagName,e.cssVars);let i=e.cssVars?Md(e.cssVars):{},a=QM(e.tagName,`slot`,e.slotNames),o=QM(e.tagName,`test-id`,e.testIds),s=typeof e.styles==`function`?e.styles($M({hostClassNames:r,cssVars:i})):e.styles||B``,c=e.render;function l(...[e]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:u,inputs:e}}let u=class extends EM{static elementOptions=t;static tagName=e.tagName;static styles=s;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return tN({element:this,eventsMap:n,cssVars:i,slotNamesMap:a,testIdsMap:o})}static assign=l;static events=n;static render=c;static hostClasses=r;static cssVars=i;static init=e;static slotNames=a;static testIds=o;get InstanceType(){throw Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;let t=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;let n=e.state(t);if(n instanceof Promise)throw TypeError(`init cannot be asynchronous`);Te(n).forEach(e=>{JM(this,e),this.instanceState[e]=n[e]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(t)instanceof Promise))throw TypeError(`init cannot be asynchronous`);let n=c(t);if(n instanceof Promise)throw TypeError(`render cannot be asynchronous`);return eN({host:t.host,hostClassesInit:e.hostClasses,hostClassNames:r,state:t.state,inputs:t.inputs}),this._lastRenderedProps={inputs:{...t.inputs},state:{...t.state}},n}catch(n){let r=Ne(n,`Failed to render ${e.tagName}`);return console.error(r),this._lastRenderError=r,t.errorHandler?.(r),S(r)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;let t=this.createRenderParams();if(e.init(t)instanceof Promise)throw TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(e=>{j.hasKey(e,`destroy`)&&j.isFunction(e.destroy)&&e.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup&&this._stateCalled){let t=this.createRenderParams();if(e.cleanup(t)instanceof Promise)throw TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(e){HM(this,e)}observablePropertyListenerMap={};instanceInputs=XM(this,!1);instanceState=XM(this,!t.allowPolymorphicState);constructor(){super(),this.definition=u}};return Object.defineProperties(u,{name:{value:Fl(e.tagName,{firstLetterCase:Ml.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,u)),u}var iN=class extends D_{isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}};function aN(e){return new iN(e)}var oN=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},sN=hM(class extends gM{constructor(e){if(super(e),e.type!==mM.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=fM(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,d=0,f=i.length-1,p=0,m=a.length-1;for(;d<=f&&p<=m;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(s[d]===o[p])c[p]=lM(i[d],a[p]),d++,p++;else if(s[f]===o[m])c[m]=lM(i[f],a[m]),f--,m--;else if(s[d]===o[m])c[m]=lM(i[d],a[m]),cM(e,c[m+1],i[d]),d++,m--;else if(s[f]===o[p])c[p]=lM(i[f],a[p]),cM(e,i[d],i[f]),f--,p++;else if(l===void 0&&(l=oN(o,p,m),u=oN(s,d,f)),l.has(s[d]))if(l.has(s[f])){let t=u.get(o[p]),n=t===void 0?null:i[t];if(n===null){let t=cM(e,i[d]);lM(t,a[p]),c[p]=t}else c[p]=lM(n,a[p]),cM(e,i[d],n),i[t]=null;p++}else pM(i[f]),f--;else pM(i[d]),d++;for(;p<=m;){let t=cM(e,c[m+1]);lM(t,a[p]),c[p++]=t}for(;d<=f;){let e=i[d++];e!==null&&pM(e)}return this.ut=o,dM(e,c),ld}});function cN(e,t){return uN(e,t),e.element}function lN(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function uN(e,t){let n=lN(e),r=n?`: in ${n}`:``;if(e.type!==mM.ELEMENT)throw Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw Error(`${t} directive found no element${r}.`)}function dN(e,t){return hM(class extends gM{element;constructor(t){super(t),this.element=Dc.instanceOf(cN(t,e),HTMLElement)}render(...e){return t({params:e,directive:this,element:this.element}),ld}})}var fN=dN(`attributes`,({element:e,params:[t],directive:n})=>{if(!t)return;let r=Hc(n,`allAttributesApplied`,()=>new Set);Te(t).forEach(e=>{if(e.toLowerCase()!==e)throw Error(`Cannot assign attribute name with uppercase letters: ${e}`);r.add(e)}),r.forEach(n=>{let r=t[n];r==null||r===!1||r===M?e.removeAttribute(n):r===``||r===!0?e.setAttribute(n,``):e.setAttribute(n,String(r))})});function pN(e){let t=hM(class extends gM{element;constructor(t){super(t),this.element=cN(t,e)}render(t){return this.element.setAttribute(e,t),ld}});return{attributeSelector(t){return`[${e}="${t}"]`},attributeDirective(e){return t(e)},attributeName:e}}function mN(e,t){return hN(e,t)}var hN=hM(class extends gM{element;lastListenerMetaData;constructor(e){super(e),this.element=cN(e,`listen`)}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:e=>this.lastListenerMetaData?.callback(e)}}render(e,t){let n=typeof e==`string`?e:e.type;if(typeof n!=`string`)throw TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(n)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),ld}});function gN(e){return mN(`keydown`,async t=>{let n=t.code.toLowerCase();(n.includes(`enter`)||n.includes(`return`)||n===`space`)&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}var _N=`onDomCreated`,vN=hM(class extends gM{element;constructor(e){super(e),uN(e,_N)}update(e,[t]){uN(e,_N);let n=e.element;return n!==this.element&&(window.requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),yN=`onDomRendered`,bN=hM(class extends gM{constructor(e){super(e),uN(e,yN)}update(e,[t]){uN(e,yN);let n=e.element;return window.requestAnimationFrame(()=>t(n)),this.render(t)}render(e){}}),xN=`onResize`,SN=hM(class extends gM{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&CN(this.element,this.callback,e)});callback;constructor(e){super(e),uN(e,xN)}update(e,[t]){uN(e,xN),this.callback=t;let n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function CN(e,t,n){let r=n[0];if(!r)throw console.error(n),Error(`Resize observation triggered but the first entry was empty.`);t({target:r.target,contentRect:r.contentRect},e)}function wN(e,t,n,r,i={}){let a=i.useLastResolvedValue?e.lastResolvedValue:e.value;return a instanceof Error?r?r(a):S(a):j.isPromiseLike(a)||i.useLastResolvedValue&&a===void 0?t:n?n(a):a}function TN(e,t,n){return TM(e,()=>t,()=>n)}var{attributeDirective:EN,attributeSelector:DN,attributeName:ON}=pN(`data-test-id`),kN=EN;function AN(e){let{assertInputs:t,transformInputs:n}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(e=>e)};return(...e)=>r=>(t(r),nN(...e)(n(r)))}var jN=!1;function MN(e,t){return t?NN(e,t):NN(void 0,e)}var NN=hM(class extends gM{element;constructor(e){super(e),this.element=cN(e,`assign`)}render(e,t){return HM(this.element,t),ld}}),PN={};function FN(e,t){return t.map((t,n)=>{let r=e[n],i=e[n+1];if(r&&i){let{shouldHaveTagNameHere:e}=IN(r,i);if(e&&j.isString(t))return{tagName:t,tagInterpolationKey:Hc(PN,t,()=>({tagName:t}))}}return t})}function IN(e,t){let n=e.trim().endsWith(`<`)&&!!t.match(/^[\s>]/),r=e.trim().endsWith(`</`)&&t.trim().startsWith(`>`);return{isOpeningTag:n,shouldHaveTagNameHere:n||r}}function LN(...[e,t,n]){let r=OM(n)?n.definition:n,{isOpeningTag:i,shouldHaveTagNameHere:a}=IN(e,t),o=kM(r);if(o&&a&&r.tagInterpolationKey)return{replacement:r.tagName,getExtraValues:void 0};if(a&&!o)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:r}),Error(`Got interpolated tag name but found no tag name on the given value: '${r?.tagName||r?.prototype?.constructor?.name||r?.constructor?.name}'`);if(!(!a||!o))return{replacement:r.tagName,getExtraValues(e){let t=OM(e)?e.inputs:void 0;return[i&&t?MN(t):void 0].filter(j.isTruthy)}}}function RN(e){return dl(e,/<\/\s*[^\s><]+\s*>/g).reduce((e,t)=>{let n=jl(t.replace(/\n/g,` `)).replace(/<\/|>/g,``);return n.includes(`-`)?e.concat(n):e},[])}function zN(e){if(jN){let t=RN(e);t.length&&console.error(`Custom element tags must be interpolated from declarative elements: ${t.join(`, `)}`)}}function BN(e){return RM(e.strings,e.values,LN,zN)}function V(e,...t){let n=FN(e,t),r=cd(e,...n),i=LM(e,n,()=>BN(r));return{...r,strings:i.strings,values:i.values}}function VN(e){if(`templateString`in e)return e.templateString;let{strings:t,values:n}=e;if(!t?.length&&!n?.length)return``;let r=[...n||[],``];return jl((t??[``]).map((e,t)=>`${e}${HN(e,r[t])}`).join(``))}function HN(e,t){return t._$litType$!=null||t._$litDirective$!=null?VN(t):Array.isArray(t)?t.map(e=>VN(e)).join(``):e.endsWith(`=`)?`"${t}"`:t}function UN(e){return Dl(e,(e,t)=>t instanceof p_?Su(t.toString({format:`hex`})):UN(t))}var WN=`dodgerblue`;function GN(e){return Math.abs(e.contrast(`white`,`APCA`))>Math.abs(e.contrast(`black`,`APCA`))?`white`:`black`}function KN({background:e,foreground:t}){return{background:e??new p_(GN(t)),foreground:t??new p_(GN(e))}}var qN;(function(e){e.Dark=`dark`,e.Light=`light`})(qN||={});function JN(e){return e===`black`?`white`:`black`}var YN={black:{foregroundFaint1:new p_(`#ccc`),foregroundFaint2:new p_(`#eee`)},white:{foregroundFaint1:new p_(`#ccc`),foregroundFaint2:new p_(`#eee`)}},XN={black:{backgroundFaint1:new p_(`#666`),backgroundFaint2:new p_(`#444`)},white:{backgroundFaint1:new p_(`#ccc`),backgroundFaint2:new p_(`#fafafa`)}};function ZN({themeColor:e=WN,themeStyle:t=qN.Light}={}){let n=new p_(e),r=new p_(t===qN.Dark?`black`:`white`),i=GN(r),a=new p_(i);return UN({nav:{hover:KN({background:n.clone().set({"hsl.l":93})}),active:KN({background:n.clone().set({"hsl.l":90})}),selected:KN({background:n.clone().set({"hsl.l":85})})},accent:{icon:n.clone().set({"hsl.l":40})},page:{background:r,...XN[JN(i)],foreground:a,...YN[i]}})}async function QN(e=1){let t=new Fe;function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return n(),t.promise}function $N(e,t){return{element:e,children:eP(e,t??0,0)}}function eP(e,t,n){return tP(e).map(e=>{let r=n+1;return{element:e,children:t&&r>=Math.abs(t)?[]:eP(e,t,r)}})}function tP(e){return[...e.children,...e.shadowRoot?.children??[]]}function nP(e){return e.matches(`:focus`)}function rP(e){if(e instanceof ShadowRoot)return e.host;let t=e.parentNode;if(t)return t instanceof Element?t:rP(t)}function iP(e,t){if(t(e))return e;let n=rP(e);if(n)return iP(n,t)}function aP(e,t,n={}){let r=n.useOriginalTarget?e.target:e.currentTarget;if(!(r instanceof t)){let i=t.name,a=r?.constructor.name,o=n.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${a}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${a}'.`;throw Error(o)}return r}function oP(e){let t=rP(e);return t&&iP(t,e=>globalThis.getComputedStyle(e).overflowY!==`visible`)||document.body}function sP(e){let t=0,n=document.activeElement||void 0;for(;n;){if(e({depth:t,element:n}))return t;n=n.shadowRoot?.activeElement||void 0,n&&++t}return t}function cP({searchQuery:e,searchIn:t}){let n=t.length,r=e.length;if(r>n)return!1;if(r===n)return e===t;let i=t.toLowerCase(),a=e.toLowerCase();outer:for(let e=0,t=0;e<r;e++){let r=a.codePointAt(e);for(;t<n;)if(i.codePointAt(t++)===r)continue outer;return!1}return!0}var lP=Zc(32);function uP(e){return e.join(lP)}function dP(e){return e.length?[uP(e),...dP(e.slice(0,-1))]:[]}var fP=[`error`,`errors`];function pP(e){return fP.includes(e)}function mP({flattenedNodes:e,searchQuery:t}){let n={};function r(e){Object.values(e.children).map(e=>(r(e),uP(e.fullUrlBreadcrumbs))).forEach(e=>n[e]=!0)}return e.forEach(e=>{let i=e.entry.errors.length&&pP(t),a=uP(e.fullUrlBreadcrumbs);if(cP({searchIn:[e.entry.title,...e.entry.descriptionParagraphs.map(e=>j.isString(e)?e:VN(e))].join(` `).toLowerCase(),searchQuery:t.toLowerCase()})||i||n[a]){let t=dP(e.fullUrlBreadcrumbs);r(e),t.forEach(e=>n[e]=!0)}else n[a]=!1}),e.filter(e=>{let t=n[uP(e.fullUrlBreadcrumbs)];if(!j.isBoolean(t))throw TypeError(`Failed to find '${e.fullUrlBreadcrumbs.join(` > `)}' in includeInSearchResults.`);return t})}var hP=class extends Error{name=`SpaRouterError`},gP=class extends hP{name=`GlobalUrlEventsConsolidationError`},_P=class extends hP{name=`SanitizationDepthMaxed`};_j({paths:[``],search:Oj(kj(void 0,Hj({keys:``,values:[``]}))),hash:Oj(kj(void 0,``))});var vP=_j({basePath:Oj(``,{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:Oj(1,{alsoUndefined:!0}),disableWarnings:Oj(!1,{alsoUndefined:!0}),isPaused:Oj(!1,{alsoUndefined:!0})}),yP=`://`;function bP(...e){let t=e.join(`/`),[n,r=``]=t.includes(yP)?t.split(yP):[``,t],i=!1,a=r.replace(/\/{2,}/g,`/`).split(`/`).reduce((e,t,n,r)=>{if(i)return e;let a=r[n+1],o=t,s=a?.startsWith(`?`),c=!t.includes(`?`)&&s,l=a===`?`;if(s||c){i=!0;let e=!1,s=r.slice(n+2).reduce((t,n)=>(n.includes(`#`)&&(e=!0),e?t.concat(n):[t,n].join(`&`)),``);o=[t,a,l?sl({value:s,prefix:`&`}):s].join(``)}return e.concat(o)},[]);return[n,n?yP:``,a.join(`/`)].join(``)}var xP;(function(e){e.Encode=`encode`,e.Decode=`decode`,e.None=`none`})(xP||={});var SP;(function(e){e.Clear=`clear`,e.Replace=`replace`,e.Append=`append`})(SP||={});var CP=_j({encoding:Oj(kj(void 0,Cj(xP))),searchParamStrategy:Oj(kj(void 0,Cj(SP)))});function wP(e,t){return e.map(e=>{if(e!=null)return TP(String(e),t)}).filter(e=>e!=null)}function TP(e,t){return t?.encoding===xP.Decode?decodeURIComponent(e):t?.encoding===xP.Encode?encodeURIComponent(e):e}var EP=_j(Hj({keys:``,values:[``]}));function DP(e,t,n){let r=n?.searchParamStrategy===SP.Clear?{}:Dl(e,(e,t)=>Jc(t)),i=Dl(t,(e,t)=>{if(n?.searchParamStrategy===SP.Append){let i=r[e],a=j.isArray(i)?i:[i];if(t){let e=j.isArray(t)?t:[t];return wP([...a,...e],n)}else return wP(a,n)}else if(j.isArray(t))return wP(t,n);else if(t)return wP([t],n);else return});return Ol({...r,...i},(e,t)=>!!t)}function OP(e,t){return j.isString(e)&&!e.includes(`?`)?{}:(j.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,``).split(`&`).map(e=>{let[t,...n]=wl(e,`=`);return[t,n.length?n.join(`=`):void 0]}).reduce((e,[n,r])=>{let i=jP({options:t,key:n,value:r}),a=Hc(e,i.key,()=>[]);return r!=null&&a.push(i.value),e},{})}function kP(e){if(e!=null)return j.isArray(e)?[...e]:e===``?[]:[e]}function AP(e,t){let n=Gc(Object.entries(e),([e,n])=>{let r=kP(n);return r?.length?r.map(n=>{let r=jP({options:t,key:e,value:n});return[r.key,r.value].join(`=`)}):[e]},(e,[,t])=>t!=null).flat();return n.length?ol({value:n.join(`&`),prefix:`?`}):``}function jP({options:e,key:t,value:n}){return{key:TP(t,e),value:TP(String(n),e)}}function MP({hash:e,hostname:t,password:n,pathname:r,port:i,protocol:a,search:o,username:s}){return[a?a+`://`:``,s?s+`:`:``,n?n+`@`:``,FP({hostname:t,port:i}),PP({hash:e,pathname:r,search:o})].join(``)}function NP({pathname:e}){let t=sl({value:e,prefix:`/`});return t?t.split(`/`):[]}function PP({hash:e,pathname:t,search:n}){return[ol({value:t,prefix:`/`}),n?ol({value:n,prefix:`?`}):``,e?ol({value:e,prefix:`#`}):``].join(``)}function FP({hostname:e,port:t}){return[e,t?`:`+t:``].join(``)}function IP({hostname:e,port:t,protocol:n}){return[n,FP({hostname:e,port:t})].filter(j.isTruthy).join(`://`)}function LP(e,t){let n=j.isString(e)?sl({value:e,prefix:`.`}):e.toString(),r=n.replace(/^[^#]*(?:#|$)/,``),i=r?ol({value:TP(r,t),prefix:`#`}):``,a=n.replace(/#[^#]*$/,``),o=a.replace(/^[^?]*(?:\?|$)/,``),s=o?ol({value:TP(o,t),prefix:`?`}):``,c=a.replace(/\?[^?]*$/,``),l=c.includes(`://`)?c.replace(/:\/\/.*$/,``):``,u=c.replace(/^.*:\/\//,``).replace(/\/\//g,`/`),d=u.replace(/@.*/,``),f=u.replace(/^[^@]*@/,``),[p,...m]=d===f?[]:d.split(`:`).reverse(),h=m.toReversed().join(``).replace(/[/:]/g,``)||``,g=p?.replace(/[/:]/g,``)||``,_=Cl(f.replace(/\/.*/,``),`:`,{caseSensitive:!0}).toReversed(),ee=_[0]?.endsWith(`]`)?``:_[1]===`:`&&_[0]||``,te=f.replace(RegExp(`:${ee}($|/)`),`$1`).replace(/\/.*/,``),ne=TP(f.replace(/^[^/]*(\/|$)/,`$1`).replace(/^[^/]*(?:\/|$)/,`/`),t),re=FP({hostname:te,port:ee}),ie=IP({hostname:te,port:ee,protocol:l}),ae=MP({hash:i,hostname:te,password:g,pathname:ne,port:ee,protocol:l,search:s,username:h}),oe=OP(s),se=NP({pathname:ne});return{fullPath:PP({hash:i,pathname:ne,search:s}),hash:i,host:re,hostname:te,href:ae,origin:ie,password:g,pathname:ne,paths:se,port:ee,protocol:l,search:s,searchParams:oe,username:h}}_j({hash:Oj(kj(void 0,``)),search:Oj(kj(void 0,``,Hj({keys:``,values:kj(null,void 0,``,-1,!1,0n,[null,void 0,``,-1,!1,0n])}))),hostname:Oj(kj(void 0,``)),pathname:Oj(kj(void 0,``)),paths:Oj(kj(void 0,[``])),protocol:Oj(kj(void 0,``)),username:Oj(kj(void 0,``)),password:Oj(kj(void 0,``)),port:Oj(kj(void 0,``,-1))});function RP(e,t,n){let r=!!n,i=t==null||Ij(t,CP,{allowExtraKeys:!1}),a=i?LP(``):j.instanceOf(e,URL)||j.isString(e)?LP(e):e,o=i?e:t,s=j.isString(o)&&o.startsWith(`.`),c=j.isString(o)||j.instanceOf(o,URL)?Ol(LP(o),(e,t)=>j.isTruthy(t)):o,l=r?n:i?t:void 0,u=Dl(a,(e,t)=>{if(!j.hasKey(c,e))return t;let n=c[e];return j.isNumber(n)?String(n):j.isString(n)?e===`hash`&&n?ol({value:n,prefix:`#`}):e===`pathname`?ol({value:n,prefix:`/`}):n:t});j.hasKey(c,`paths`)&&c.paths&&(u.pathname=bP(s?a.pathname:``,...c.paths));let d=j.isString(c.search)?OP(ol({value:c.search,prefix:`?`})):el(c.search||{}),f=DP(u.searchParams,d,{...l,encoding:xP.None}),p=AP(f,l);return{...u,searchParams:f,search:p,paths:NP(u),fullPath:PP(u),host:FP(u),origin:IP(u),href:MP({...u,search:p})}}({..._j({protocol:``,username:``,password:``,host:``,hostname:``,port:``,origin:``,pathname:`/`,paths:[``],search:``,searchParams:EP,hash:``,fullPath:`/`,href:`/`}).default});var zP=0;function BP(e){return!(e.type!==`click`&&e.type!==`mousedown`||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==zP)}var VP=`locationchange`,HP=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;var UP=HP?.pushState;function WP(...e){if(!UP)return;let t=UP.apply(HP,e);return globalThis.dispatchEvent(new Event(VP)),t}var GP=HP?.replaceState;function KP(...e){if(!GP)return;let t=GP.apply(HP,e);return globalThis.dispatchEvent(new Event(VP)),t}function qP(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!HP)){if(HP.pushState===WP)throw new gP(`The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?`);if(HP.replaceState===KP)throw new gP(`The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?`);globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,HP.pushState=WP,HP.replaceState=KP,globalThis.addEventListener(`popstate`,()=>{globalThis.dispatchEvent(new Event(VP))})}}function JP(e,t){let n=LP(e),r=sl({value:sl({value:n.pathname,prefix:ol({value:t||``,prefix:`/`})}),prefix:`/`});return{paths:r?r.split(`/`):[],search:Object.keys(n.searchParams).length?n.searchParams:void 0,hash:n.hash?sl({value:n.hash,prefix:`#`}):void 0}}var YP=class{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(e){Lj(e,vP),this.params={...e};let t=this.readCurrentRoute();this.innerObservable=new iM({defaultValue:t,equalityCheck:()=>!1}),qP(),this.removeGlobalListener=Hl(globalThis,VP,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new _P(`Looping route sanitization detected; aborting window URL change listener.`);let t=JP(globalThis.location.href,this.params.basePath),n=e.sanitizeRoute(t);j.jsonEquals(t,n)?(this.sanitizationDepth=0,this.innerObservable.setValue(n)):(this.sanitizationDepth++,this.setRoute(n,{replace:!0}),e.disableWarnings||console.warn(`Route sanitized.`,{from:t,to:n}))}),this.setRoute(t,{replace:!0})}routeIncludesBasePath(e){return!e.paths||!this.params.basePath?!1:bP(...e.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(JP(globalThis.location.href,this.params.basePath))}sanitizeRoute(e){return this.params.sanitizeRoute(e)}createRouteUrl(e){let t={...JP(globalThis.location.href,this.params.basePath),...e},n=this.sanitizeRoute(t),r=this.routeIncludesBasePath(JP(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return RP(globalThis.location.href,{paths:r.paths,search:r.search,hash:r.hash?ol({value:r.hash,prefix:`#`}):``},{searchParamStrategy:SP.Clear}).href}setRoute(e,t={}){let{fullPath:n}=LP(this.createRouteUrl(e));return this.params.isPaused||!t.force&&j.jsonEquals(LP(globalThis.location.href).fullPath,n)?!1:t.replace?(globalThis.history.replaceState(void 0,``,n),!0):(globalThis.history.pushState(void 0,``,n),!0)}setRouteOnDirectNavigation(e,t){return BP(t)?(t.preventDefault(),this.setRoute(e)):!1}listen(e,t){let n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new hP(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(e,t),()=>this.removeListener(t)}removeListener(e){return this.innerObservable.removeListener(e)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}};function XP(e){return new YP({basePath:e,sanitizeRoute(e){return{paths:ZP(e.paths),hash:void 0,search:void 0}}})}function ZP(e){let t=e[0];if(!j.isEnumValue(t,pu))return hu.paths;if(t===pu.Book)return[pu.Book,...e.slice(1)];if(t===pu.Search)return e[1]?[t,e[1]]:[pu.Book,...e.slice(1)];throw Error(`Route path not handled for sanitization: ${e.join(`/`)}`)}var QP=WM()(`element-book-change-route`),H=Md({"vira-icon-stroke-color":`currentColor`,"vira-icon-fill-color":`none`,"vira-icon-stroke-width":`1.5px`});function U({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}var $P=U({name:`Check24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `});function eF(e){return j.isPrimitive(e)||e instanceof xu?String(e):e.default}function tF(e,t,n,r){let i=`${n.prefix}-default-fg`,a=`${n.prefix}-default-bg`;if(j.isPrimitive(t)||t instanceof xu)return t;if(`refDefaultBackground`in t)return`var(--${a}, ${eF(n.background)})`;if(`refDefaultForeground`in t)return`var(--${i}, ${eF(n.foreground)})`;if(`refBackground`in t||`refForeground`in t){let o=j.hasKey(t,`refBackground`)?`refBackground`:j.hasKey(t,`refForeground`)?`refForeground`:void 0,s=o&&j.hasKey(t,o)?t[o]:void 0,c=o===`refBackground`?`background`:`foreground`,l=s&&r[s];if(!l)throw Error(`Color theme ${o} reference '${s}' does not exist. (Referenced from '${e}'.)`);let u=l[c]||(c===`foreground`?tF(i,n.foreground,n,r):tF(a,n.background,n,r));return`var(--${s}-${c===`foreground`?`fg`:`bg`}, ${tF(s,u,n,r)})`}else return t.value}var nF=`theme-default`;function rF(e,t){try{if(`theme-default`in t)throw Error(`Cannot define theme color by name '${nF}', it is used internally.`);let n=`${e.prefix}-default-fg`,r=`${e.prefix}-default-bg`,i=`${e.prefix}-default-inverse-fg`,a=`${e.prefix}-default-inverse-bg`,o=Md({[n]:tF(n,e.foreground,e,t),[r]:tF(r,e.background,e,t),[i]:tF(i,e.background,e,t),[a]:tF(a,e.foreground,e,t)}),s=Md(Uc(t).reduce((i,[a,s])=>{let c=iF(a),l=s.foreground?tF([a,`foreground`].join(` `),s.foreground,e,t):`var(${o[n].name}, ${o[n].default})`,u=s.background?tF([a,`background`].join(` `),s.background,e,t):`var(${o[r].name}, ${o[r].default})`;return i[c.foreground]=l,i[c.background]=u,i[c.foregroundInverse]=`var(--${c.background}, ${u})`,i[c.backgroundInverse]=`var(--${c.foreground}, ${l})`,i},{})),c={},l={};Uc(t).forEach(([e,t])=>{Mc.isString(e);let n=iF(e),r=s[n.foreground],i=s[n.background],a=s[n.foregroundInverse],o=s[n.backgroundInverse];Mc.isDefined(r),Mc.isDefined(i),Mc.isDefined(a),Mc.isDefined(o),c[e]={foreground:r,background:i,init:t,name:e},l[e]={foreground:a,background:o,init:t,name:e}});let u={foreground:o[n],background:o[r],init:e,name:nF},d={...u,foreground:o[i],background:o[a]};return{colors:{[nF]:u,...c},inverse:{[nF]:d,...l},init:{colors:t,default:e},prefix:e.prefix}}catch(e){throw globalThis.setTimeout(()=>bl.error(e)),e}}function iF(e){return{foreground:[e,`fg`].join(`-`),background:[e,`bg`].join(`-`),foregroundInverse:[e,`inverse`,`fg`].join(`-`),backgroundInverse:[e,`inverse`,`bg`].join(`-`)}}var W=Md({"vira-red-100":`#FFF6F5`,"vira-red-150":`#FFEDEB`,"vira-red-200":`#FFE4E1`,"vira-red-250":`#FFDCD8`,"vira-red-300":`#FFD1CB`,"vira-red-350":`#FFC1B8`,"vira-red-400":`#FFA79B`,"vira-red-450":`#FF8274`,"vira-red-500":`#FF564A`,"vira-red-550":`#F43A32`,"vira-red-600":`#E2322C`,"vira-red-650":`#D02C27`,"vira-red-700":`#BB2520`,"vira-red-750":`#9E231D`,"vira-red-800":`#82211A`,"vira-red-850":`#701A13`,"vira-red-900":`#611710`,"vira-red-950":`#52140D`,"vira-red-1000":`#43130D`,"vira-yellow-100":`#FEF9E4`,"vira-yellow-150":`#FDF2D1`,"vira-yellow-200":`#FDEABF`,"vira-yellow-250":`#FEE2AD`,"vira-yellow-300":`#FDD89B`,"vira-yellow-350":`#FAC986`,"vira-yellow-400":`#EFB669`,"vira-yellow-450":`#E29D34`,"vira-yellow-500":`#CE8800`,"vira-yellow-550":`#BB7B00`,"vira-yellow-600":`#AC7100`,"vira-yellow-650":`#9E6800`,"vira-yellow-700":`#8C5C00`,"vira-yellow-750":`#794D00`,"vira-yellow-800":`#683E00`,"vira-yellow-850":`#5B3301`,"vira-yellow-900":`#502A05`,"vira-yellow-950":`#442308`,"vira-yellow-1000":`#381D0B`,"vira-green-100":`#EBFFEE`,"vira-green-150":`#DDFBE2`,"vira-green-200":`#CDF8D6`,"vira-green-250":`#BFF5CC`,"vira-green-300":`#AFF0C0`,"vira-green-350":`#9AE8B1`,"vira-green-400":`#7FD99C`,"vira-green-450":`#52C87F`,"vira-green-500":`#1BB565`,"vira-green-550":`#04A559`,"vira-green-600":`#009852`,"vira-green-650":`#008C4A`,"vira-green-700":`#007C41`,"vira-green-750":`#016A38`,"vira-green-800":`#095831`,"vira-green-850":`#024B29`,"vira-green-900":`#014024`,"vira-green-950":`#02371F`,"vira-green-1000":`#062D1B`,"vira-teal-100":`#E8FEFD`,"vira-teal-150":`#D9FAF8`,"vira-teal-200":`#C9F6F3`,"vira-teal-250":`#BAF2ED`,"vira-teal-300":`#A9EDE6`,"vira-teal-350":`#95E4DB`,"vira-teal-400":`#79D5CA`,"vira-teal-450":`#47C3B7`,"vira-teal-500":`#00B0A4`,"vira-teal-550":`#00A094`,"vira-teal-600":`#009389`,"vira-teal-650":`#00877D`,"vira-teal-700":`#00786F`,"vira-teal-750":`#00665F`,"vira-teal-800":`#01554F`,"vira-teal-850":`#004843`,"vira-teal-900":`#003E3A`,"vira-teal-950":`#033531`,"vira-teal-1000":`#072B29`,"vira-blue-100":`#F5F9FF`,"vira-blue-150":`#EAF3FF`,"vira-blue-200":`#E0EDFF`,"vira-blue-250":`#D6E7FF`,"vira-blue-300":`#CBDFFF`,"vira-blue-350":`#B9D4FF`,"vira-blue-400":`#9EC3FF`,"vira-blue-450":`#7AADFF`,"vira-blue-500":`#5697FF`,"vira-blue-550":`#4988ED`,"vira-blue-600":`#427DDC`,"vira-blue-650":`#3B72CA`,"vira-blue-700":`#3365B6`,"vira-blue-750":`#2D569A`,"vira-blue-800":`#27487E`,"vira-blue-850":`#203D6C`,"vira-blue-900":`#1B345D`,"vira-blue-950":`#172C4F`,"vira-blue-1000":`#142540`,"vira-accent-100":`#F5F9FF`,"vira-accent-150":`#EAF3FF`,"vira-accent-200":`#E0EDFF`,"vira-accent-250":`#D6E7FF`,"vira-accent-300":`#CBDFFF`,"vira-accent-350":`#B9D4FF`,"vira-accent-400":`#9EC3FF`,"vira-accent-450":`#7AADFF`,"vira-accent-500":`#5697FF`,"vira-accent-550":`#4988ED`,"vira-accent-600":`#427DDC`,"vira-accent-650":`#3B72CA`,"vira-accent-700":`#3365B6`,"vira-accent-750":`#2D569A`,"vira-accent-800":`#27487E`,"vira-accent-850":`#203D6C`,"vira-accent-900":`#1B345D`,"vira-accent-950":`#172C4F`,"vira-accent-1000":`#142540`,"vira-purple-100":`#F9F7FF`,"vira-purple-150":`#F3EFFF`,"vira-purple-200":`#EDE8FF`,"vira-purple-250":`#E6E1FF`,"vira-purple-300":`#DED8FF`,"vira-purple-350":`#D2CBFF`,"vira-purple-400":`#C1B7FF`,"vira-purple-450":`#AD9BFF`,"vira-purple-500":`#9B80FF`,"vira-purple-550":`#8D6EF4`,"vira-purple-600":`#8265E3`,"vira-purple-650":`#775BD1`,"vira-purple-700":`#6A50BB`,"vira-purple-750":`#5A459E`,"vira-purple-800":`#4A3B82`,"vira-purple-850":`#3E3170`,"vira-purple-900":`#352A61`,"vira-purple-950":`#2D2452`,"vira-purple-1000":`#251F43`,"vira-pink-100":`#FEF5FF`,"vira-pink-150":`#FFEAFF`,"vira-pink-200":`#FFE0FC`,"vira-pink-250":`#FFD7F8`,"vira-pink-300":`#FFCBF2`,"vira-pink-350":`#FFB9E9`,"vira-pink-400":`#FF9BDF`,"vira-pink-450":`#FF6DD6`,"vira-pink-500":`#F04AC5`,"vira-pink-550":`#DD3EB4`,"vira-pink-600":`#CC37A7`,"vira-pink-650":`#BC3099`,"vira-pink-700":`#A82988`,"vira-pink-750":`#8F2674`,"vira-pink-800":`#752361`,"vira-pink-850":`#641C53`,"vira-pink-900":`#561848`,"vira-pink-950":`#49153E`,"vira-pink-1000":`#3B1333`,"vira-grey-100":`#F9F9F9`,"vira-grey-150":`#F2F2F2`,"vira-grey-200":`#EBEBEB`,"vira-grey-250":`#E5E5E5`,"vira-grey-300":`#DEDEDE`,"vira-grey-350":`#D2D2D2`,"vira-grey-400":`#C2C2C2`,"vira-grey-450":`#ADADAD`,"vira-grey-500":`#999999`,"vira-grey-550":`#8A8A8A`,"vira-grey-600":`#7F7F7F`,"vira-grey-650":`#747474`,"vira-grey-700":`#676767`,"vira-grey-750":`#585858`,"vira-grey-800":`#494949`,"vira-grey-850":`#3E3E3E`,"vira-grey-900":`#353535`,"vira-grey-950":`#2D2D2D`,"vira-grey-1000":`#252525`});function aF({originalTheme:e,layerKey:t,themeColor:n,override:r,overrideValues:i}){let a=r?.[t];a&&(i[String(n[t].name)]=String(tF(t,a,e.init.default,e.init.colors)))}function oF(e,t,{defaultOverride:n,colorOverrides:r}){let i={};n&&Te(n).forEach(t=>{aF({originalTheme:e,layerKey:t,override:n,themeColor:e.colors[nF],overrideValues:i})});let a={};r&&Uc(r).forEach(([t,n])=>{let r=e.colors[t];if(!r)throw Error(`Override color name '${t}' does not exist in the theme being overridden.`);aF({originalTheme:e,layerKey:`foreground`,override:n,themeColor:r,overrideValues:a}),aF({originalTheme:e,layerKey:`background`,override:n,themeColor:r,overrideValues:a})});let o=Dl(e.init.colors,(e,t)=>{let n=r?.[e];return{...t,...n}}),s=rF({...e.init.default,...n},o);return{name:t,overrides:{...i,...a},originalTheme:e,asTheme:s}}var G=rF({foreground:`black`,background:`white`,prefix:`vira`},{"vira-red-foreground-small-body":{foreground:W[`vira-red-1000`]},"vira-red-foreground-body":{foreground:W[`vira-red-750`]},"vira-red-foreground-non-body":{foreground:W[`vira-red-650`]},"vira-red-foreground-header":{foreground:W[`vira-red-500`]},"vira-red-foreground-placeholder":{foreground:W[`vira-red-400`]},"vira-red-foreground-decoration":{foreground:W[`vira-red-350`]},"vira-red-foreground-invisible":{foreground:W[`vira-red-250`]},"vira-red-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-red-1000`]},"vira-red-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-red-700`]},"vira-red-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-red-600`]},"vira-red-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-red-450`]},"vira-red-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-red-400`]},"vira-red-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-red-350`]},"vira-red-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-red-200`]},"vira-red-behind-fg-small-body":{background:W[`vira-red-250`]},"vira-red-behind-fg-body":{background:W[`vira-red-350`]},"vira-red-behind-fg-non-body":{background:W[`vira-red-400`]},"vira-red-behind-fg-header":{background:W[`vira-red-500`]},"vira-red-behind-fg-placeholder":{background:W[`vira-red-650`]},"vira-red-behind-fg-decoration":{background:W[`vira-red-750`]},"vira-red-behind-fg-invisible":{background:W[`vira-red-1000`]},"vira-red-on-self-small-body":{foreground:W[`vira-red-850`],background:W[`vira-red-100`]},"vira-red-on-self-body":{foreground:W[`vira-red-850`],background:W[`vira-red-250`]},"vira-red-on-self-non-body":{foreground:W[`vira-red-850`],background:W[`vira-red-350`]},"vira-red-on-self-header":{foreground:W[`vira-red-850`],background:W[`vira-red-450`]},"vira-red-on-self-placeholder":{foreground:W[`vira-red-850`],background:W[`vira-red-500`]},"vira-red-on-self-decoration":{foreground:W[`vira-red-850`],background:W[`vira-red-650`]},"vira-red-on-self-invisible":{foreground:W[`vira-red-850`],background:W[`vira-red-1000`]},"vira-yellow-foreground-small-body":{foreground:W[`vira-yellow-1000`]},"vira-yellow-foreground-body":{foreground:W[`vira-yellow-750`]},"vira-yellow-foreground-non-body":{foreground:W[`vira-yellow-650`]},"vira-yellow-foreground-header":{foreground:W[`vira-yellow-500`]},"vira-yellow-foreground-placeholder":{foreground:W[`vira-yellow-400`]},"vira-yellow-foreground-decoration":{foreground:W[`vira-yellow-350`]},"vira-yellow-foreground-invisible":{foreground:W[`vira-yellow-250`]},"vira-yellow-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-yellow-1000`]},"vira-yellow-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-yellow-700`]},"vira-yellow-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-yellow-600`]},"vira-yellow-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-yellow-450`]},"vira-yellow-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-yellow-400`]},"vira-yellow-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-yellow-350`]},"vira-yellow-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-yellow-250`]},"vira-yellow-behind-fg-small-body":{background:W[`vira-yellow-250`]},"vira-yellow-behind-fg-body":{background:W[`vira-yellow-350`]},"vira-yellow-behind-fg-non-body":{background:W[`vira-yellow-400`]},"vira-yellow-behind-fg-header":{background:W[`vira-yellow-500`]},"vira-yellow-behind-fg-placeholder":{background:W[`vira-yellow-650`]},"vira-yellow-behind-fg-decoration":{background:W[`vira-yellow-750`]},"vira-yellow-behind-fg-invisible":{background:W[`vira-yellow-1000`]},"vira-yellow-on-self-small-body":{foreground:W[`vira-yellow-850`],background:W[`vira-yellow-100`]},"vira-yellow-on-self-body":{foreground:W[`vira-yellow-850`],background:W[`vira-yellow-300`]},"vira-yellow-on-self-non-body":{foreground:W[`vira-yellow-850`],background:W[`vira-yellow-350`]},"vira-yellow-on-self-header":{foreground:W[`vira-yellow-850`],background:W[`vira-yellow-450`]},"vira-yellow-on-self-placeholder":{foreground:W[`vira-yellow-850`],background:W[`vira-yellow-550`]},"vira-yellow-on-self-decoration":{foreground:W[`vira-yellow-850`],background:W[`vira-yellow-650`]},"vira-yellow-on-self-invisible":{foreground:W[`vira-yellow-850`],background:W[`vira-yellow-1000`]},"vira-green-foreground-small-body":{foreground:W[`vira-green-1000`]},"vira-green-foreground-body":{foreground:W[`vira-green-800`]},"vira-green-foreground-non-body":{foreground:W[`vira-green-650`]},"vira-green-foreground-header":{foreground:W[`vira-green-550`]},"vira-green-foreground-placeholder":{foreground:W[`vira-green-450`]},"vira-green-foreground-decoration":{foreground:W[`vira-green-350`]},"vira-green-foreground-invisible":{foreground:W[`vira-green-250`]},"vira-green-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-green-1000`]},"vira-green-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-green-750`]},"vira-green-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-green-650`]},"vira-green-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-green-500`]},"vira-green-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-green-400`]},"vira-green-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-green-350`]},"vira-green-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-green-250`]},"vira-green-behind-fg-small-body":{background:W[`vira-green-250`]},"vira-green-behind-fg-body":{background:W[`vira-green-350`]},"vira-green-behind-fg-non-body":{background:W[`vira-green-450`]},"vira-green-behind-fg-header":{background:W[`vira-green-550`]},"vira-green-behind-fg-placeholder":{background:W[`vira-green-650`]},"vira-green-behind-fg-decoration":{background:W[`vira-green-800`]},"vira-green-behind-fg-invisible":{background:W[`vira-green-1000`]},"vira-green-on-self-small-body":{foreground:W[`vira-green-850`],background:W[`vira-green-100`]},"vira-green-on-self-body":{foreground:W[`vira-green-850`],background:W[`vira-green-300`]},"vira-green-on-self-non-body":{foreground:W[`vira-green-850`],background:W[`vira-green-400`]},"vira-green-on-self-header":{foreground:W[`vira-green-850`],background:W[`vira-green-450`]},"vira-green-on-self-placeholder":{foreground:W[`vira-green-850`],background:W[`vira-green-550`]},"vira-green-on-self-decoration":{foreground:W[`vira-green-850`],background:W[`vira-green-700`]},"vira-green-on-self-invisible":{foreground:W[`vira-green-850`],background:W[`vira-green-1000`]},"vira-teal-foreground-small-body":{foreground:W[`vira-teal-1000`]},"vira-teal-foreground-body":{foreground:W[`vira-teal-800`]},"vira-teal-foreground-non-body":{foreground:W[`vira-teal-650`]},"vira-teal-foreground-header":{foreground:W[`vira-teal-550`]},"vira-teal-foreground-placeholder":{foreground:W[`vira-teal-450`]},"vira-teal-foreground-decoration":{foreground:W[`vira-teal-350`]},"vira-teal-foreground-invisible":{foreground:W[`vira-teal-250`]},"vira-teal-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-teal-1000`]},"vira-teal-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-teal-750`]},"vira-teal-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-teal-600`]},"vira-teal-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-teal-500`]},"vira-teal-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-teal-400`]},"vira-teal-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-teal-350`]},"vira-teal-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-teal-250`]},"vira-teal-behind-fg-small-body":{background:W[`vira-teal-250`]},"vira-teal-behind-fg-body":{background:W[`vira-teal-350`]},"vira-teal-behind-fg-non-body":{background:W[`vira-teal-450`]},"vira-teal-behind-fg-header":{background:W[`vira-teal-500`]},"vira-teal-behind-fg-placeholder":{background:W[`vira-teal-650`]},"vira-teal-behind-fg-decoration":{background:W[`vira-teal-750`]},"vira-teal-behind-fg-invisible":{background:W[`vira-teal-1000`]},"vira-teal-on-self-small-body":{foreground:W[`vira-teal-850`],background:W[`vira-teal-100`]},"vira-teal-on-self-body":{foreground:W[`vira-teal-850`],background:W[`vira-teal-300`]},"vira-teal-on-self-non-body":{foreground:W[`vira-teal-850`],background:W[`vira-teal-400`]},"vira-teal-on-self-header":{foreground:W[`vira-teal-850`],background:W[`vira-teal-450`]},"vira-teal-on-self-placeholder":{foreground:W[`vira-teal-850`],background:W[`vira-teal-550`]},"vira-teal-on-self-decoration":{foreground:W[`vira-teal-850`],background:W[`vira-teal-700`]},"vira-teal-on-self-invisible":{foreground:W[`vira-teal-850`],background:W[`vira-teal-1000`]},"vira-blue-foreground-small-body":{foreground:W[`vira-blue-1000`]},"vira-blue-foreground-body":{foreground:W[`vira-blue-750`]},"vira-blue-foreground-non-body":{foreground:W[`vira-blue-650`]},"vira-blue-foreground-header":{foreground:W[`vira-blue-500`]},"vira-blue-foreground-placeholder":{foreground:W[`vira-blue-450`]},"vira-blue-foreground-decoration":{foreground:W[`vira-blue-350`]},"vira-blue-foreground-invisible":{foreground:W[`vira-blue-250`]},"vira-blue-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-blue-1000`]},"vira-blue-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-blue-750`]},"vira-blue-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-blue-600`]},"vira-blue-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-blue-450`]},"vira-blue-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-blue-400`]},"vira-blue-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-blue-350`]},"vira-blue-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-blue-250`]},"vira-blue-behind-fg-small-body":{background:W[`vira-blue-250`]},"vira-blue-behind-fg-body":{background:W[`vira-blue-350`]},"vira-blue-behind-fg-non-body":{background:W[`vira-blue-400`]},"vira-blue-behind-fg-header":{background:W[`vira-blue-500`]},"vira-blue-behind-fg-placeholder":{background:W[`vira-blue-650`]},"vira-blue-behind-fg-decoration":{background:W[`vira-blue-750`]},"vira-blue-behind-fg-invisible":{background:W[`vira-blue-1000`]},"vira-blue-on-self-small-body":{foreground:W[`vira-blue-850`],background:W[`vira-blue-100`]},"vira-blue-on-self-body":{foreground:W[`vira-blue-850`],background:W[`vira-blue-300`]},"vira-blue-on-self-non-body":{foreground:W[`vira-blue-850`],background:W[`vira-blue-350`]},"vira-blue-on-self-header":{foreground:W[`vira-blue-850`],background:W[`vira-blue-450`]},"vira-blue-on-self-placeholder":{foreground:W[`vira-blue-850`],background:W[`vira-blue-550`]},"vira-blue-on-self-decoration":{foreground:W[`vira-blue-850`],background:W[`vira-blue-650`]},"vira-blue-on-self-invisible":{foreground:W[`vira-blue-850`],background:W[`vira-blue-1000`]},"vira-accent-foreground-small-body":{foreground:W[`vira-accent-1000`]},"vira-accent-foreground-body":{foreground:W[`vira-accent-750`]},"vira-accent-foreground-non-body":{foreground:W[`vira-accent-650`]},"vira-accent-foreground-header":{foreground:W[`vira-accent-500`]},"vira-accent-foreground-placeholder":{foreground:W[`vira-accent-450`]},"vira-accent-foreground-decoration":{foreground:W[`vira-accent-350`]},"vira-accent-foreground-invisible":{foreground:W[`vira-accent-250`]},"vira-accent-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-accent-1000`]},"vira-accent-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-accent-750`]},"vira-accent-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-accent-600`]},"vira-accent-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-accent-450`]},"vira-accent-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-accent-400`]},"vira-accent-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-accent-350`]},"vira-accent-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-accent-250`]},"vira-accent-behind-fg-small-body":{background:W[`vira-accent-250`]},"vira-accent-behind-fg-body":{background:W[`vira-accent-350`]},"vira-accent-behind-fg-non-body":{background:W[`vira-accent-400`]},"vira-accent-behind-fg-header":{background:W[`vira-accent-500`]},"vira-accent-behind-fg-placeholder":{background:W[`vira-accent-650`]},"vira-accent-behind-fg-decoration":{background:W[`vira-accent-750`]},"vira-accent-behind-fg-invisible":{background:W[`vira-accent-1000`]},"vira-accent-on-self-small-body":{foreground:W[`vira-accent-850`],background:W[`vira-accent-100`]},"vira-accent-on-self-body":{foreground:W[`vira-accent-850`],background:W[`vira-accent-300`]},"vira-accent-on-self-non-body":{foreground:W[`vira-accent-850`],background:W[`vira-accent-350`]},"vira-accent-on-self-header":{foreground:W[`vira-accent-850`],background:W[`vira-accent-450`]},"vira-accent-on-self-placeholder":{foreground:W[`vira-accent-850`],background:W[`vira-accent-550`]},"vira-accent-on-self-decoration":{foreground:W[`vira-accent-850`],background:W[`vira-accent-650`]},"vira-accent-on-self-invisible":{foreground:W[`vira-accent-850`],background:W[`vira-accent-1000`]},"vira-purple-foreground-small-body":{foreground:W[`vira-purple-1000`]},"vira-purple-foreground-body":{foreground:W[`vira-purple-750`]},"vira-purple-foreground-non-body":{foreground:W[`vira-purple-650`]},"vira-purple-foreground-header":{foreground:W[`vira-purple-500`]},"vira-purple-foreground-placeholder":{foreground:W[`vira-purple-400`]},"vira-purple-foreground-decoration":{foreground:W[`vira-purple-350`]},"vira-purple-foreground-invisible":{foreground:W[`vira-purple-250`]},"vira-purple-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-purple-1000`]},"vira-purple-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-purple-700`]},"vira-purple-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-purple-600`]},"vira-purple-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-purple-450`]},"vira-purple-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-purple-400`]},"vira-purple-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-purple-350`]},"vira-purple-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-purple-200`]},"vira-purple-behind-fg-small-body":{background:W[`vira-purple-250`]},"vira-purple-behind-fg-body":{background:W[`vira-purple-350`]},"vira-purple-behind-fg-non-body":{background:W[`vira-purple-400`]},"vira-purple-behind-fg-header":{background:W[`vira-purple-500`]},"vira-purple-behind-fg-placeholder":{background:W[`vira-purple-600`]},"vira-purple-behind-fg-decoration":{background:W[`vira-purple-750`]},"vira-purple-behind-fg-invisible":{background:W[`vira-purple-1000`]},"vira-purple-on-self-small-body":{foreground:W[`vira-purple-850`],background:W[`vira-purple-100`]},"vira-purple-on-self-body":{foreground:W[`vira-purple-850`],background:W[`vira-purple-300`]},"vira-purple-on-self-non-body":{foreground:W[`vira-purple-850`],background:W[`vira-purple-350`]},"vira-purple-on-self-header":{foreground:W[`vira-purple-850`],background:W[`vira-purple-450`]},"vira-purple-on-self-placeholder":{foreground:W[`vira-purple-850`],background:W[`vira-purple-500`]},"vira-purple-on-self-decoration":{foreground:W[`vira-purple-850`],background:W[`vira-purple-650`]},"vira-purple-on-self-invisible":{foreground:W[`vira-purple-850`],background:W[`vira-purple-1000`]},"vira-pink-foreground-small-body":{foreground:W[`vira-pink-1000`]},"vira-pink-foreground-body":{foreground:W[`vira-pink-750`]},"vira-pink-foreground-non-body":{foreground:W[`vira-pink-650`]},"vira-pink-foreground-header":{foreground:W[`vira-pink-500`]},"vira-pink-foreground-placeholder":{foreground:W[`vira-pink-400`]},"vira-pink-foreground-decoration":{foreground:W[`vira-pink-350`]},"vira-pink-foreground-invisible":{foreground:W[`vira-pink-250`]},"vira-pink-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-pink-1000`]},"vira-pink-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-pink-700`]},"vira-pink-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-pink-550`]},"vira-pink-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-pink-450`]},"vira-pink-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-pink-400`]},"vira-pink-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-pink-350`]},"vira-pink-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-pink-200`]},"vira-pink-behind-fg-small-body":{background:W[`vira-pink-200`]},"vira-pink-behind-fg-body":{background:W[`vira-pink-350`]},"vira-pink-behind-fg-non-body":{background:W[`vira-pink-400`]},"vira-pink-behind-fg-header":{background:W[`vira-pink-500`]},"vira-pink-behind-fg-placeholder":{background:W[`vira-pink-600`]},"vira-pink-behind-fg-decoration":{background:W[`vira-pink-750`]},"vira-pink-behind-fg-invisible":{background:W[`vira-pink-1000`]},"vira-pink-on-self-small-body":{foreground:W[`vira-pink-850`],background:W[`vira-pink-100`]},"vira-pink-on-self-body":{foreground:W[`vira-pink-850`],background:W[`vira-pink-250`]},"vira-pink-on-self-non-body":{foreground:W[`vira-pink-850`],background:W[`vira-pink-350`]},"vira-pink-on-self-header":{foreground:W[`vira-pink-850`],background:W[`vira-pink-450`]},"vira-pink-on-self-placeholder":{foreground:W[`vira-pink-850`],background:W[`vira-pink-500`]},"vira-pink-on-self-decoration":{foreground:W[`vira-pink-850`],background:W[`vira-pink-650`]},"vira-pink-on-self-invisible":{foreground:W[`vira-pink-850`],background:W[`vira-pink-1000`]},"vira-grey-foreground-small-body":{foreground:W[`vira-grey-1000`]},"vira-grey-foreground-body":{foreground:W[`vira-grey-750`]},"vira-grey-foreground-non-body":{foreground:W[`vira-grey-650`]},"vira-grey-foreground-header":{foreground:W[`vira-grey-500`]},"vira-grey-foreground-placeholder":{foreground:W[`vira-grey-450`]},"vira-grey-foreground-decoration":{foreground:W[`vira-grey-350`]},"vira-grey-foreground-invisible":{foreground:W[`vira-grey-250`]},"vira-grey-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-grey-1000`]},"vira-grey-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-grey-750`]},"vira-grey-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-grey-600`]},"vira-grey-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-grey-500`]},"vira-grey-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-grey-400`]},"vira-grey-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-grey-350`]},"vira-grey-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-grey-250`]},"vira-grey-behind-fg-small-body":{background:W[`vira-grey-250`]},"vira-grey-behind-fg-body":{background:W[`vira-grey-350`]},"vira-grey-behind-fg-non-body":{background:W[`vira-grey-400`]},"vira-grey-behind-fg-header":{background:W[`vira-grey-500`]},"vira-grey-behind-fg-placeholder":{background:W[`vira-grey-650`]},"vira-grey-behind-fg-decoration":{background:W[`vira-grey-750`]},"vira-grey-behind-fg-invisible":{background:W[`vira-grey-1000`]},"vira-grey-on-self-small-body":{foreground:W[`vira-grey-850`],background:W[`vira-grey-100`]},"vira-grey-on-self-body":{foreground:W[`vira-grey-850`],background:W[`vira-grey-300`]},"vira-grey-on-self-non-body":{foreground:W[`vira-grey-850`],background:W[`vira-grey-350`]},"vira-grey-on-self-header":{foreground:W[`vira-grey-850`],background:W[`vira-grey-450`]},"vira-grey-on-self-placeholder":{foreground:W[`vira-grey-850`],background:W[`vira-grey-550`]},"vira-grey-on-self-decoration":{foreground:W[`vira-grey-850`],background:W[`vira-grey-650`]},"vira-grey-on-self-invisible":{foreground:W[`vira-grey-850`],background:W[`vira-grey-1000`]}});oF(G,`dark`,{defaultOverride:{foreground:`white`,background:`black`},colorOverrides:{"vira-red-foreground-small-body":{foreground:W[`vira-red-250`]},"vira-red-foreground-body":{foreground:W[`vira-red-350`]},"vira-red-foreground-non-body":{foreground:W[`vira-red-400`]},"vira-red-foreground-header":{foreground:W[`vira-red-450`]},"vira-red-foreground-placeholder":{foreground:W[`vira-red-600`]},"vira-red-foreground-decoration":{foreground:W[`vira-red-750`]},"vira-red-foreground-invisible":{foreground:W[`vira-red-1000`]},"vira-red-behind-bg-small-body":{background:W[`vira-red-250`]},"vira-red-behind-bg-body":{background:W[`vira-red-350`]},"vira-red-behind-bg-non-body":{background:W[`vira-red-400`]},"vira-red-behind-bg-header":{background:W[`vira-red-500`]},"vira-red-behind-bg-placeholder":{background:W[`vira-red-650`]},"vira-red-behind-bg-decoration":{background:W[`vira-red-750`]},"vira-red-behind-bg-invisible":{background:W[`vira-red-1000`]},"vira-red-behind-fg-small-body":{background:W[`vira-red-1000`]},"vira-red-behind-fg-body":{background:W[`vira-red-700`]},"vira-red-behind-fg-non-body":{background:W[`vira-red-600`]},"vira-red-behind-fg-header":{background:W[`vira-red-450`]},"vira-red-behind-fg-placeholder":{background:W[`vira-red-400`]},"vira-red-behind-fg-decoration":{background:W[`vira-red-350`]},"vira-red-behind-fg-invisible":{background:W[`vira-red-200`]},"vira-red-on-self-small-body":{foreground:W[`vira-red-200`],background:W[`vira-red-1000`]},"vira-red-on-self-body":{foreground:W[`vira-red-200`],background:W[`vira-red-950`]},"vira-red-on-self-non-body":{foreground:W[`vira-red-200`],background:W[`vira-red-700`]},"vira-red-on-self-header":{foreground:W[`vira-red-200`],background:W[`vira-red-550`]},"vira-red-on-self-placeholder":{foreground:W[`vira-red-200`],background:W[`vira-red-450`]},"vira-red-on-self-decoration":{foreground:W[`vira-red-200`],background:W[`vira-red-400`]},"vira-red-on-self-invisible":{foreground:W[`vira-red-200`],background:W[`vira-red-350`]},"vira-yellow-foreground-small-body":{foreground:W[`vira-yellow-250`]},"vira-yellow-foreground-body":{foreground:W[`vira-yellow-350`]},"vira-yellow-foreground-non-body":{foreground:W[`vira-yellow-400`]},"vira-yellow-foreground-placeholder":{foreground:W[`vira-yellow-600`]},"vira-yellow-foreground-decoration":{foreground:W[`vira-yellow-750`]},"vira-yellow-foreground-invisible":{foreground:W[`vira-yellow-1000`]},"vira-yellow-behind-bg-small-body":{background:W[`vira-yellow-250`]},"vira-yellow-behind-bg-body":{background:W[`vira-yellow-350`]},"vira-yellow-behind-bg-non-body":{background:W[`vira-yellow-400`]},"vira-yellow-behind-bg-header":{background:W[`vira-yellow-500`]},"vira-yellow-behind-bg-placeholder":{background:W[`vira-yellow-650`]},"vira-yellow-behind-bg-decoration":{background:W[`vira-yellow-750`]},"vira-yellow-behind-bg-invisible":{background:W[`vira-yellow-1000`]},"vira-yellow-behind-fg-small-body":{background:W[`vira-yellow-1000`]},"vira-yellow-behind-fg-body":{background:W[`vira-yellow-700`]},"vira-yellow-behind-fg-non-body":{background:W[`vira-yellow-600`]},"vira-yellow-behind-fg-header":{background:W[`vira-yellow-450`]},"vira-yellow-behind-fg-placeholder":{background:W[`vira-yellow-400`]},"vira-yellow-behind-fg-decoration":{background:W[`vira-yellow-350`]},"vira-yellow-behind-fg-invisible":{background:W[`vira-yellow-250`]},"vira-yellow-on-self-small-body":{foreground:W[`vira-yellow-200`],background:W[`vira-yellow-1000`]},"vira-yellow-on-self-body":{foreground:W[`vira-yellow-200`],background:W[`vira-yellow-900`]},"vira-yellow-on-self-non-body":{foreground:W[`vira-yellow-200`],background:W[`vira-yellow-700`]},"vira-yellow-on-self-header":{foreground:W[`vira-yellow-200`],background:W[`vira-yellow-550`]},"vira-yellow-on-self-placeholder":{foreground:W[`vira-yellow-200`],background:W[`vira-yellow-450`]},"vira-yellow-on-self-decoration":{foreground:W[`vira-yellow-200`],background:W[`vira-yellow-400`]},"vira-yellow-on-self-invisible":{foreground:W[`vira-yellow-200`],background:W[`vira-yellow-350`]},"vira-green-foreground-small-body":{foreground:W[`vira-green-250`]},"vira-green-foreground-body":{foreground:W[`vira-green-350`]},"vira-green-foreground-non-body":{foreground:W[`vira-green-450`]},"vira-green-foreground-header":{foreground:W[`vira-green-500`]},"vira-green-foreground-placeholder":{foreground:W[`vira-green-650`]},"vira-green-foreground-decoration":{foreground:W[`vira-green-750`]},"vira-green-foreground-invisible":{foreground:W[`vira-green-1000`]},"vira-green-behind-bg-small-body":{background:W[`vira-green-250`]},"vira-green-behind-bg-body":{background:W[`vira-green-350`]},"vira-green-behind-bg-non-body":{background:W[`vira-green-450`]},"vira-green-behind-bg-header":{background:W[`vira-green-550`]},"vira-green-behind-bg-placeholder":{background:W[`vira-green-650`]},"vira-green-behind-bg-decoration":{background:W[`vira-green-800`]},"vira-green-behind-bg-invisible":{background:W[`vira-green-1000`]},"vira-green-behind-fg-small-body":{background:W[`vira-green-1000`]},"vira-green-behind-fg-body":{background:W[`vira-green-750`]},"vira-green-behind-fg-non-body":{background:W[`vira-green-650`]},"vira-green-behind-fg-header":{background:W[`vira-green-500`]},"vira-green-behind-fg-placeholder":{background:W[`vira-green-400`]},"vira-green-behind-fg-decoration":{background:W[`vira-green-350`]},"vira-green-behind-fg-invisible":{background:W[`vira-green-250`]},"vira-green-on-self-small-body":{foreground:W[`vira-green-200`],background:W[`vira-green-1000`]},"vira-green-on-self-body":{foreground:W[`vira-green-200`],background:W[`vira-green-900`]},"vira-green-on-self-non-body":{foreground:W[`vira-green-200`],background:W[`vira-green-700`]},"vira-green-on-self-header":{foreground:W[`vira-green-200`],background:W[`vira-green-600`]},"vira-green-on-self-placeholder":{foreground:W[`vira-green-200`],background:W[`vira-green-450`]},"vira-green-on-self-decoration":{foreground:W[`vira-green-200`],background:W[`vira-green-400`]},"vira-green-on-self-invisible":{foreground:W[`vira-green-200`],background:W[`vira-green-350`]},"vira-teal-foreground-small-body":{foreground:W[`vira-teal-250`]},"vira-teal-foreground-body":{foreground:W[`vira-teal-350`]},"vira-teal-foreground-non-body":{foreground:W[`vira-teal-450`]},"vira-teal-foreground-header":{foreground:W[`vira-teal-500`]},"vira-teal-foreground-placeholder":{foreground:W[`vira-teal-650`]},"vira-teal-foreground-decoration":{foreground:W[`vira-teal-750`]},"vira-teal-foreground-invisible":{foreground:W[`vira-teal-1000`]},"vira-teal-behind-bg-small-body":{background:W[`vira-teal-250`]},"vira-teal-behind-bg-body":{background:W[`vira-teal-350`]},"vira-teal-behind-bg-non-body":{background:W[`vira-teal-450`]},"vira-teal-behind-bg-placeholder":{background:W[`vira-teal-650`]},"vira-teal-behind-bg-decoration":{background:W[`vira-teal-750`]},"vira-teal-behind-bg-invisible":{background:W[`vira-teal-1000`]},"vira-teal-behind-fg-small-body":{background:W[`vira-teal-1000`]},"vira-teal-behind-fg-body":{background:W[`vira-teal-750`]},"vira-teal-behind-fg-non-body":{background:W[`vira-teal-600`]},"vira-teal-behind-fg-placeholder":{background:W[`vira-teal-400`]},"vira-teal-behind-fg-decoration":{background:W[`vira-teal-350`]},"vira-teal-behind-fg-invisible":{background:W[`vira-teal-250`]},"vira-teal-on-self-small-body":{foreground:W[`vira-teal-200`],background:W[`vira-teal-1000`]},"vira-teal-on-self-body":{foreground:W[`vira-teal-200`],background:W[`vira-teal-900`]},"vira-teal-on-self-non-body":{foreground:W[`vira-teal-200`],background:W[`vira-teal-700`]},"vira-teal-on-self-header":{foreground:W[`vira-teal-200`],background:W[`vira-teal-600`]},"vira-teal-on-self-placeholder":{foreground:W[`vira-teal-200`],background:W[`vira-teal-450`]},"vira-teal-on-self-decoration":{foreground:W[`vira-teal-200`],background:W[`vira-teal-400`]},"vira-teal-on-self-invisible":{foreground:W[`vira-teal-200`],background:W[`vira-teal-350`]},"vira-blue-foreground-small-body":{foreground:W[`vira-blue-250`]},"vira-blue-foreground-body":{foreground:W[`vira-blue-350`]},"vira-blue-foreground-non-body":{foreground:W[`vira-blue-400`]},"vira-blue-foreground-placeholder":{foreground:W[`vira-blue-600`]},"vira-blue-foreground-decoration":{foreground:W[`vira-blue-750`]},"vira-blue-foreground-invisible":{foreground:W[`vira-blue-1000`]},"vira-blue-behind-bg-small-body":{background:W[`vira-blue-250`]},"vira-blue-behind-bg-body":{background:W[`vira-blue-350`]},"vira-blue-behind-bg-non-body":{background:W[`vira-blue-400`]},"vira-blue-behind-bg-header":{background:W[`vira-blue-500`]},"vira-blue-behind-bg-placeholder":{background:W[`vira-blue-650`]},"vira-blue-behind-bg-decoration":{background:W[`vira-blue-750`]},"vira-blue-behind-bg-invisible":{background:W[`vira-blue-1000`]},"vira-blue-behind-fg-small-body":{background:W[`vira-blue-1000`]},"vira-blue-behind-fg-body":{background:W[`vira-blue-750`]},"vira-blue-behind-fg-non-body":{background:W[`vira-blue-600`]},"vira-blue-behind-fg-header":{background:W[`vira-blue-450`]},"vira-blue-behind-fg-placeholder":{background:W[`vira-blue-400`]},"vira-blue-behind-fg-decoration":{background:W[`vira-blue-350`]},"vira-blue-behind-fg-invisible":{background:W[`vira-blue-250`]},"vira-blue-on-self-small-body":{foreground:W[`vira-blue-200`],background:W[`vira-blue-1000`]},"vira-blue-on-self-body":{foreground:W[`vira-blue-200`],background:W[`vira-blue-900`]},"vira-blue-on-self-non-body":{foreground:W[`vira-blue-200`],background:W[`vira-blue-700`]},"vira-blue-on-self-header":{foreground:W[`vira-blue-200`],background:W[`vira-blue-550`]},"vira-blue-on-self-placeholder":{foreground:W[`vira-blue-200`],background:W[`vira-blue-450`]},"vira-blue-on-self-decoration":{foreground:W[`vira-blue-200`],background:W[`vira-blue-400`]},"vira-blue-on-self-invisible":{foreground:W[`vira-blue-200`],background:W[`vira-blue-350`]},"vira-accent-foreground-small-body":{foreground:W[`vira-accent-250`]},"vira-accent-foreground-body":{foreground:W[`vira-accent-350`]},"vira-accent-foreground-non-body":{foreground:W[`vira-accent-400`]},"vira-accent-foreground-placeholder":{foreground:W[`vira-accent-600`]},"vira-accent-foreground-decoration":{foreground:W[`vira-accent-750`]},"vira-accent-foreground-invisible":{foreground:W[`vira-accent-1000`]},"vira-accent-behind-bg-small-body":{background:W[`vira-accent-250`]},"vira-accent-behind-bg-body":{background:W[`vira-accent-350`]},"vira-accent-behind-bg-non-body":{background:W[`vira-accent-400`]},"vira-accent-behind-bg-header":{background:W[`vira-accent-500`]},"vira-accent-behind-bg-placeholder":{background:W[`vira-accent-650`]},"vira-accent-behind-bg-decoration":{background:W[`vira-accent-750`]},"vira-accent-behind-bg-invisible":{background:W[`vira-accent-1000`]},"vira-accent-behind-fg-small-body":{background:W[`vira-accent-1000`]},"vira-accent-behind-fg-body":{background:W[`vira-accent-750`]},"vira-accent-behind-fg-non-body":{background:W[`vira-accent-600`]},"vira-accent-behind-fg-header":{background:W[`vira-accent-450`]},"vira-accent-behind-fg-placeholder":{background:W[`vira-accent-400`]},"vira-accent-behind-fg-decoration":{background:W[`vira-accent-350`]},"vira-accent-behind-fg-invisible":{background:W[`vira-accent-250`]},"vira-accent-on-self-small-body":{foreground:W[`vira-accent-200`],background:W[`vira-accent-1000`]},"vira-accent-on-self-body":{foreground:W[`vira-accent-200`],background:W[`vira-accent-900`]},"vira-accent-on-self-non-body":{foreground:W[`vira-accent-200`],background:W[`vira-accent-700`]},"vira-accent-on-self-header":{foreground:W[`vira-accent-200`],background:W[`vira-accent-550`]},"vira-accent-on-self-placeholder":{foreground:W[`vira-accent-200`],background:W[`vira-accent-450`]},"vira-accent-on-self-decoration":{foreground:W[`vira-accent-200`],background:W[`vira-accent-400`]},"vira-accent-on-self-invisible":{foreground:W[`vira-accent-200`],background:W[`vira-accent-350`]},"vira-purple-foreground-small-body":{foreground:W[`vira-purple-250`]},"vira-purple-foreground-body":{foreground:W[`vira-purple-350`]},"vira-purple-foreground-non-body":{foreground:W[`vira-purple-400`]},"vira-purple-foreground-header":{foreground:W[`vira-purple-450`]},"vira-purple-foreground-placeholder":{foreground:W[`vira-purple-600`]},"vira-purple-foreground-decoration":{foreground:W[`vira-purple-750`]},"vira-purple-foreground-invisible":{foreground:W[`vira-purple-1000`]},"vira-purple-behind-bg-small-body":{background:W[`vira-purple-250`]},"vira-purple-behind-bg-body":{background:W[`vira-purple-350`]},"vira-purple-behind-bg-non-body":{background:W[`vira-purple-400`]},"vira-purple-behind-bg-header":{background:W[`vira-purple-500`]},"vira-purple-behind-bg-placeholder":{background:W[`vira-purple-600`]},"vira-purple-behind-bg-decoration":{background:W[`vira-purple-750`]},"vira-purple-behind-bg-invisible":{background:W[`vira-purple-1000`]},"vira-purple-behind-fg-small-body":{background:W[`vira-purple-1000`]},"vira-purple-behind-fg-body":{background:W[`vira-purple-700`]},"vira-purple-behind-fg-non-body":{background:W[`vira-purple-600`]},"vira-purple-behind-fg-header":{background:W[`vira-purple-450`]},"vira-purple-behind-fg-placeholder":{background:W[`vira-purple-400`]},"vira-purple-behind-fg-decoration":{background:W[`vira-purple-350`]},"vira-purple-behind-fg-invisible":{background:W[`vira-purple-200`]},"vira-purple-on-self-small-body":{foreground:W[`vira-purple-200`],background:W[`vira-purple-1000`]},"vira-purple-on-self-body":{foreground:W[`vira-purple-200`],background:W[`vira-purple-900`]},"vira-purple-on-self-non-body":{foreground:W[`vira-purple-200`],background:W[`vira-purple-700`]},"vira-purple-on-self-header":{foreground:W[`vira-purple-200`],background:W[`vira-purple-550`]},"vira-purple-on-self-placeholder":{foreground:W[`vira-purple-200`],background:W[`vira-purple-450`]},"vira-purple-on-self-decoration":{foreground:W[`vira-purple-200`],background:W[`vira-purple-400`]},"vira-purple-on-self-invisible":{foreground:W[`vira-purple-200`],background:W[`vira-purple-350`]},"vira-pink-foreground-small-body":{foreground:W[`vira-pink-200`]},"vira-pink-foreground-body":{foreground:W[`vira-pink-350`]},"vira-pink-foreground-non-body":{foreground:W[`vira-pink-400`]},"vira-pink-foreground-header":{foreground:W[`vira-pink-450`]},"vira-pink-foreground-placeholder":{foreground:W[`vira-pink-600`]},"vira-pink-foreground-decoration":{foreground:W[`vira-pink-750`]},"vira-pink-foreground-invisible":{foreground:W[`vira-pink-1000`]},"vira-pink-behind-bg-small-body":{background:W[`vira-pink-200`]},"vira-pink-behind-bg-body":{background:W[`vira-pink-350`]},"vira-pink-behind-bg-non-body":{background:W[`vira-pink-400`]},"vira-pink-behind-bg-header":{background:W[`vira-pink-500`]},"vira-pink-behind-bg-placeholder":{background:W[`vira-pink-600`]},"vira-pink-behind-bg-decoration":{background:W[`vira-pink-750`]},"vira-pink-behind-bg-invisible":{background:W[`vira-pink-1000`]},"vira-pink-behind-fg-small-body":{background:W[`vira-pink-1000`]},"vira-pink-behind-fg-body":{background:W[`vira-pink-700`]},"vira-pink-behind-fg-non-body":{background:W[`vira-pink-550`]},"vira-pink-behind-fg-header":{background:W[`vira-pink-450`]},"vira-pink-behind-fg-placeholder":{background:W[`vira-pink-400`]},"vira-pink-behind-fg-decoration":{background:W[`vira-pink-350`]},"vira-pink-behind-fg-invisible":{background:W[`vira-pink-200`]},"vira-pink-on-self-small-body":{foreground:W[`vira-pink-200`],background:W[`vira-pink-1000`]},"vira-pink-on-self-body":{foreground:W[`vira-pink-200`],background:W[`vira-pink-950`]},"vira-pink-on-self-non-body":{foreground:W[`vira-pink-200`],background:W[`vira-pink-700`]},"vira-pink-on-self-header":{foreground:W[`vira-pink-200`],background:W[`vira-pink-550`]},"vira-pink-on-self-placeholder":{foreground:W[`vira-pink-200`],background:W[`vira-pink-450`]},"vira-pink-on-self-decoration":{foreground:W[`vira-pink-200`],background:W[`vira-pink-400`]},"vira-pink-on-self-invisible":{foreground:W[`vira-pink-200`],background:W[`vira-pink-300`]},"vira-grey-foreground-small-body":{foreground:W[`vira-grey-250`]},"vira-grey-foreground-body":{foreground:W[`vira-grey-350`]},"vira-grey-foreground-non-body":{foreground:W[`vira-grey-400`]},"vira-grey-foreground-placeholder":{foreground:W[`vira-grey-600`]},"vira-grey-foreground-decoration":{foreground:W[`vira-grey-750`]},"vira-grey-foreground-invisible":{foreground:W[`vira-grey-1000`]},"vira-grey-behind-bg-small-body":{background:W[`vira-grey-250`]},"vira-grey-behind-bg-body":{background:W[`vira-grey-350`]},"vira-grey-behind-bg-non-body":{background:W[`vira-grey-400`]},"vira-grey-behind-bg-placeholder":{background:W[`vira-grey-650`]},"vira-grey-behind-bg-decoration":{background:W[`vira-grey-750`]},"vira-grey-behind-bg-invisible":{background:W[`vira-grey-1000`]},"vira-grey-behind-fg-small-body":{background:W[`vira-grey-1000`]},"vira-grey-behind-fg-body":{background:W[`vira-grey-750`]},"vira-grey-behind-fg-non-body":{background:W[`vira-grey-600`]},"vira-grey-behind-fg-placeholder":{background:W[`vira-grey-400`]},"vira-grey-behind-fg-decoration":{background:W[`vira-grey-350`]},"vira-grey-behind-fg-invisible":{background:W[`vira-grey-250`]},"vira-grey-on-self-small-body":{foreground:W[`vira-grey-200`],background:W[`vira-grey-1000`]},"vira-grey-on-self-body":{foreground:W[`vira-grey-200`],background:W[`vira-grey-900`]},"vira-grey-on-self-non-body":{foreground:W[`vira-grey-200`],background:W[`vira-grey-700`]},"vira-grey-on-self-header":{foreground:W[`vira-grey-200`],background:W[`vira-grey-600`]},"vira-grey-on-self-placeholder":{foreground:W[`vira-grey-200`],background:W[`vira-grey-450`]},"vira-grey-on-self-decoration":{foreground:W[`vira-grey-200`],background:W[`vira-grey-400`]},"vira-grey-on-self-invisible":{foreground:W[`vira-grey-200`],background:W[`vira-grey-350`]}}});var sF=`8px`,K=Md({"vira-form-border-color":G.colors[`vira-grey-foreground-decoration`].foreground.value,"vira-form-placeholder-color":G.colors[`vira-grey-foreground-placeholder`].foreground.value,"vira-form-background-color":G.colors[nF].background.value,"vira-form-foreground-color":G.colors[nF].foreground.value,"vira-form-modal-backdrop-color":`rgba(0, 0, 0, 0.35)`,"vira-form-secondary-body-foreground":G.colors[`vira-grey-foreground-header`].foreground.value,"vira-form-text-selection-color":G.colors[`vira-accent-behind-bg-decoration`].background.value,"vira-form-selection-hover-color":G.colors[`vira-accent-behind-bg-invisible`].background.value,"vira-form-selection-active-color":G.colors[`vira-accent-behind-bg-decoration`].background.value,"vira-form-error-color":G.colors[`vira-red-behind-bg-non-body`].background.value,"vira-form-error-hover-color":G.colors[`vira-red-behind-bg-header`].background.value,"vira-form-error-active-color":G.colors[`vira-red-behind-bg-body`].background.value,"vira-form-warning-color":G.colors[`vira-yellow-behind-bg-non-body`].background.value,"vira-form-warning-hover-color":G.colors[`vira-yellow-behind-bg-header`].background.value,"vira-form-warning-active-color":G.colors[`vira-yellow-behind-bg-body`].background.value,"vira-form-positive-color":G.colors[`vira-green-behind-bg-non-body`].background.value,"vira-form-positive-hover-color":G.colors[`vira-green-behind-bg-header`].background.value,"vira-form-positive-active-color":G.colors[`vira-green-behind-bg-body`].background.value,"vira-form-success-color":G.colors[`vira-green-behind-bg-non-body`].background.value,"vira-form-label-font-weight":`bold`,"vira-form-small-text-size":`14px`,"vira-form-medium-text-size":`16px`,"vira-form-large-text-size":`22px`,"vira-form-radius":sF,"vira-form-wrapper-radius":`16px`,"vira-form-focus-outline-color":G.colors[`vira-accent-foreground-header`].foreground.value,"vira-form-focus-outline-border-radius":B`calc(var(--vira-form-radius, ${Su(sF)}) + 2px)`,"vira-form-plain-color":W[`vira-grey-100`].value,"vira-form-plain-hover-color":G.colors[`vira-grey-foreground-invisible`].foreground.value,"vira-form-plain-active-color":G.colors[`vira-grey-foreground-decoration`].foreground.value,"vira-form-accent-primary-color":G.colors[`vira-accent-behind-bg-non-body`].background.value,"vira-form-accent-primary-hover-color":G.colors[`vira-accent-behind-bg-header`].background.value,"vira-form-accent-primary-active-color":G.colors[`vira-accent-behind-bg-body`].background.value,"vira-form-danger-color":G.colors[`vira-red-behind-bg-non-body`].background.value,"vira-form-danger-hover-color":G.colors[`vira-red-behind-bg-header`].background.value,"vira-form-danger-active-color":G.colors[`vira-red-behind-bg-body`].background.value,"vira-form-filled-background-color":G.colors[`vira-grey-foreground-invisible`].foreground.value,"vira-form-filled-active-background-color":G.colors[`vira-grey-foreground-decoration`].foreground.value}),cF=B`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,lF=Md({"vira-extended-animation-duration":`1.2s`,"vira-pretty-animation-duration":`300ms`,"vira-interaction-animation-duration":`84ms`});function uF(e){return j.isString(e)?Su(e):e.value}function dF({elementBorderSize:e=`1px`,outlineGap:t=`2px`,outlineWidth:n=`2px`,noNesting:r,outlineColor:i=K[`vira-form-focus-outline-color`],borderRadius:a=K[`vira-form-focus-outline-border-radius`],renderInside:o}={}){let s=B`calc(${uF(t)})`,c=B`calc(${uF(n)} + ${uF(t)} + ${uF(e)})`,l=o?B`
              content: '';
              top: ${s};
              left: ${s};
              position: absolute;
              width: calc(100% - calc(${s} * 2));
              height: calc(100% - calc(${s} * 2));
              box-sizing: border-box;
              pointer-events: none;
              border: ${uF(n)} solid ${uF(i)};
              border-radius: ${uF(a)};
              z-index: 100;
          `:B`
              content: '';
              top: calc(${c} * -1);
              left: calc(${c} * -1);
              position: absolute;
              width: calc(100% + calc(${c} * 2));
              height: calc(100% + calc(${c} * 2));
              box-sizing: border-box;
              pointer-events: none;
              border: ${uF(n)} solid ${uF(i)};
              border-radius: ${uF(a)};
              z-index: 100;
          `;return r?l:B`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${l}
        }
    `}var fF=Md({"vira-monospace":`monospace`}),pF={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};Dl(pF,e=>e),Object.fromEntries(Object.entries(pF).map(([e,t])=>[t,e]));var mF;(function(e){e.SmallBodyText=`small-body`,e.BodyText=`body`,e.NonBodyText=`non-body`,e.Header=`header`,e.Placeholder=`placeholder`,e.Decoration=`decoration`,e.Invisible=`invisible`})(mF||={}),mF.SmallBodyText,mF.BodyText,mF.NonBodyText,mF.Header,mF.Placeholder,mF.Decoration,mF.Invisible,mF.SmallBodyText,mF.BodyText,mF.NonBodyText,mF.Header,mF.Placeholder,mF.Decoration,mF.Invisible;var hF=[{min:90,name:mF.SmallBodyText,description:`Perfect for all sizes of text, even small body text.`,apcaName:`small body text only`,apcaDescription:`Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color.`},{min:75,name:mF.BodyText,description:`Good for regular body text and anything larger.`,apcaName:`body text okay`,apcaDescription:`The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important.`},{min:60,name:mF.NonBodyText,description:`Good for legible non-body text and anything larger.`,apcaName:`fluent text only`,apcaDescription:`The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast.`},{min:45,name:mF.Header,description:`Okay for large or headline text.`,apcaName:`large & sub-fluent text`,apcaDescription:`The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension.`},{min:30,name:mF.Placeholder,description:`Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.`,apcaName:`spot & non text only`,apcaDescription:`The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.`},{min:15,name:mF.Decoration,description:`Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.`,apcaName:`no text usage`,apcaDescription:`The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site.`},{min:0,name:mF.Invisible,description:`Effectively invisible for users.`,apcaName:`invisible`,apcaDescription:`This should be treated as invisible.`}];Kc(hF,e=>({key:e.min,value:e})),Kc(hF,e=>({key:e.name,value:e}));var gF=De(mF).sort((e,t)=>Number(t.includes(`-`))-Number(e.includes(`-`))),_F=Kc(o(Gc(Object.keys(G.colors),e=>e.split(`-`)[1],e=>e!==`default`)).filter(j.isTruthy),e=>({key:e,value:e}),{useRequired:!0}),vF=Te(G.colors),yF=ll(_F,e=>Kc(o(Gc(vF,t=>gF.reduce((e,t)=>ml({value:e,suffix:`-${t}`}),sl({value:t,prefix:`vira-${e}-`})),(t,n)=>n.startsWith(`vira-${e}-`))),t=>({key:t,value:Kc(De(mF),n=>{let r=`vira-${e}-${t}-${n}`;if(j.hasKey(G.colors,r))return{key:n,value:G.colors[r]}})}))),q;(function(e){e.Accent=`accent`,e.Plain=`plain`,e.Neutral=`neutral`,e.Danger=`danger`,e.Warning=`warning`,e.Positive=`positive`,e.None=`none`})(q||={});var bF={[q.Accent]:_F.blue,[q.Neutral]:_F.grey,[q.Danger]:_F.red,[q.Warning]:_F.yellow,[q.Positive]:_F.green},xF=[q.Accent,q.Plain,q.Neutral,q.Danger,q.Warning,q.Positive],SF;(function(e){e.Large=`large`,e.Medium=`medium`,e.Small=`small`,e.None=`none`})(SF||={});var CF=[SF.Small,SF.Medium,SF.Large],wF;(function(e){e.Standard=`standard`,e.Subtle=`subtle`,e.None=`none`})(wF||={});var TF=[wF.Standard,wF.Subtle],EF={[SF.Large]:40,[SF.Medium]:32,[SF.Small]:24},DF=B`
    padding: 0;
    margin: 0;
`,OF=B`
    ${DF};
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,kF=Md({"menu-shadow-color":`#e2e2e2`,"modal-shadow-color":`#4f4f4f`}),AF={menuShadow:B`
        filter: drop-shadow(0px 5px 5px ${kF[`menu-shadow-color`].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:B`
        box-shadow: 0 5px 15px ${kF[`modal-shadow-color`].value};
    `},jF=B`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,MF=`vira-`,NF=AN({assertInputs:e=>{if(!e.tagName.startsWith(MF))throw Error(`Tag name should start with '${MF}' but got '${e.tagName}'`)}}),J=NF()({tagName:`vira-icon`,hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer||!!e.icon?.size},styles:({hostClasses:e})=>B`
        :host {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        svg * {
            vector-effect: non-scaling-stroke;
        }

        ${e[`vira-icon-fit-container`].selector} {
            > *,
            svg {
                height: 100%;
                width: 100%;
            }
        }
    `,render({inputs:e,host:t}){if(e.icon)e.icon.size&&(t.style.width=fl(e.icon.size),t.style.height=fl(e.icon.size));else return``;return e.icon.svgTemplate}});function PF(e,t){return e>t}function FF(e,t){return e<t}function IF(e){e.scrollIntoView({behavior:`smooth`,inline:`center`,block:`center`}),e.focus()}var LF;(function(e){e.Up=`up`,e.Down=`down`,e.Left=`left`,e.Right=`right`})(LF||={});var RF;(function(e){e.Enter=`enter`,e.Exit=`exit`,e.Activate=`activate`,e.Focus=`focus`,e.Navigate=`navigate`,e.Pibling=`pibling`})(RF||={});function zF(e){let t={x:-1,y:-1},n;for(;t.y<e.length-1&&!n;){t.y++;let r=e[t.y];for(;r&&t.x<r.length-1&&!n;){t.x++;let e=r[t.x];if(e)if(e.navEntry.navParams.group){let t=zF(e.children);t&&(n=t.node)}else e.navEntry.navParams.disabled||(n=e)}}if(n)return{node:n,coords:t}}function BF(e,t,n,r){if(!t){let t=zF(e.children);return t?(IF(t.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:t.node.element,coords:t.coords,direction:n,navAction:RF.Navigate}):{success:!1,reason:`no default element to focus`,direction:n,navAction:RF.Navigate}}let{nextNode:i,requiresWrapping:a,coords:o}=VF(t.position,n),s=r?!0:!a;return i&&s?(IF(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:a,direction:n,navAction:RF.Navigate,coords:o}):i?s?{success:!1,reason:`no conditions matched`,direction:n,navAction:RF.Navigate}:{success:!1,reason:`wrapping blocked`,direction:n,navAction:RF.Navigate}:{success:!1,reason:`failed to find node to focus`,direction:n,navAction:RF.Navigate}}function VF(e,t){let n=!1,r,i=1,a=Date.now();for(;!n||!r;)if(r=HF(e,t,i),n=!r.nextNode?.navEntry.navParams.disabled,i++,Date.now()-a>1e3)return bl.warning(`Failed to find next non-disabled node.`),r;return r}function HF(e,t,n){let r=e.ancestorChain[e.ancestorChain.length-1]?.node;Mc.isDefined(r,`missing parent`);let i=Dc.isDefined(r.children[e.nodeCoords.y]),a=r.children.length>1&&(t===LF.Down||t===LF.Up),o=t===LF.Down||t===LF.Right?n:-1*n,s=o<0?PF:FF,c=a?Tl(e.nodeCoords.y+o,{min:0,max:r.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=Dc.isDefined(r.children[c]),u=a?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:Tl(e.nodeCoords.x+o,{min:0,max:i.length-1,takeOverflow:!0});return{nextNode:r.children[c]?.[u],requiresWrapping:a?s(c,e.nodeCoords.y):s(u,e.nodeCoords.x),coords:{x:u,y:c}}}function UF(e,t,n){let r=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!r)return{success:!1,reason:`no parent to find a pibling from`,direction:t,navAction:RF.Pibling};let{nextNode:i,requiresWrapping:a,coords:o}=VF(r,t),s=i?.navEntry.navParams.group?zF(i.children):{node:i,coords:o},c=n?!0:!a;return!s||!s.node?{success:!1,reason:`no node to navigate to`,direction:t,navAction:RF.Pibling}:c?(IF(s.node.element),{success:!0,defaulted:!1,newElement:s.node.element,wrapped:a,coords:s.coords,direction:t,navAction:RF.Pibling}):{success:!1,reason:`wrapping blocked`,direction:t,navAction:RF.Pibling}}var WF;(function(e){e.Disabled=`disabled`,e.Group=`group`,e.Focused=`focused`,e.Active=`active`})(WF||={});var GF={name:`data-nav`,js(e){return e?`[${GF.name}*="${e}"]`:`[${GF.name}]`},css({baseSelector:e=``,navValue:t}={}){return B`
            ${Su(e)}${Su(GF.js(t))}
        `}},KF=`navEntry`;function qF(e){return KF in e}function JF(e){if(qF(e)){let t=e[KF];return Dc.instanceOf(t,XF,`Invalid nav entry`)}else return}function YF(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type===`mousedown`&&!e.navController.options.activateOnMouseUp||t.type===`mouseup`&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type===`mouseup`||t.type===`focus`?t.target===e.element&&e.focus(!0):t.type===`mousemove`?t.target===e.element&&e.navValue!==WF.Active&&e.focus(!0):(t.type===`blur`||t.type===`mouseleave`)&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}var XF=class{element;navParams;navTreeNode;navValue;eventListener=YF(this);constructor(e,t,n){this.element=e,this.navParams=n,this.attachListeners(),this.navController=t}set navController(e){this._navController!==e&&(this._navController?.removeNavEntry(this),this._navController=e,e.addNavEntry(this))}get navController(){return Mc.isDefined(this._navController,`this.navController has not been set in NavEntry constructor yet.`),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(El(this).navValue=void 0,this.element.setAttribute(GF.name,``),nP(this.element)&&this.element.blur())}focus(e,t){let n=this.navValue,r=e===(n===WF.Focused);if(!(this.navParams.group||this.navController.locked||r||!e&&this.navController.options.alwaysRequireFocused))return e?(this.setNavValue(WF.Focused),nP(this.element)||this.element.focus()):(this.removeNavValue(WF.Focused),nP(this.element)&&this.element.blur()),t||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:e,previousNavValue:n}),this.navController.triggerNavEntry(this,e,RF.Focus)}activate(e){let t=this.navValue,n=e===(t===WF.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(e,!0),e?this.setNavValue(WF.Active):this.setNavValue(WF.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:e,previousNavValue:t}),this.navController.triggerNavEntry(this,e,RF.Activate)}setNavValue(e){El(this).navValue=e,this.element.setAttribute(GF.name,e)}removeNavValue(e){this.navValue===e&&(El(this).navValue=void 0,this.element.setAttribute(GF.name,``))}attachListeners(){this.element.addEventListener(`mousemove`,this.eventListener,!0),this.element.addEventListener(`mouseleave`,this.eventListener,!0),this.element.addEventListener(`mousedown`,this.eventListener,!0),this.element.addEventListener(`mouseup`,this.eventListener,!0),this.element.addEventListener(`focus`,this.eventListener,!0),this.element.addEventListener(`blur`,this.eventListener,!0)}};function ZF(e,t){if(!t)return{success:!1,reason:`no focused node to enter into`,direction:void 0,navAction:RF.Enter};if(!t.position.node.children.length)return{success:!1,reason:`no children to enter into`,direction:void 0,navAction:RF.Enter};let n=t.position.node.children[0]?.[0];return n?(IF(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:RF.Enter,coords:{x:0,y:0}}):{success:!1,reason:`failed to find first child to enter into`,direction:void 0,navAction:RF.Enter}}function QF(e,t){return $F([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function $F(e,t,n){for(let r=0;r<t.length;r++){let i=t[r];for(let t=0;t<i.length;t++){let a=i[t],o={ancestorChain:e,nodeCoords:{x:t,y:r},node:a};if(n(o))return o;let s=$F(e.concat(o),a.children,n);if(s)return s}}}function eI(e,t){let n=QF(e,({node:e})=>!e.root&&e.navEntry===t);if(!n)throw Error(`Failed to find NavEntry in NavTree.`);return n}function tI(e,t){if(!t)return{success:!1,reason:`no focused node to exit out of`,direction:void 0,navAction:RF.Exit};let n=t.position.ancestorChain.toReversed().find(e=>!e.node.root&&!e.node.navEntry.navParams.group)?.node;if(!n||n.root)return{success:!1,reason:`failed to find ancestor, nothing to exit to`,direction:void 0,navAction:RF.Exit};let{nodeCoords:r}=eI(e,n.navEntry);return IF(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:RF.Exit,coords:r}}var nI=class extends Rl()(`nav-exit`){},rI=class extends Rl()(`nav-activate`){},iI=class extends Rl()(`nav-focus`){},aI=class extends Rl()(`nav-enter`){},oI=class extends Rl()(`nav-navigate`){},sI=class extends Rl()(`nav-navigate-pibling`){};function cI(e){return{root:!0,children:lI(e)?.children||[]}}function lI(e){let t=e.element;if(!(t instanceof HTMLElement))return;let n=JF(t),r=uI(e);if(n?.navParams.group&&r.length||r.length||n)return{root:!1,element:t,navEntry:n,children:r}}function uI(e){let t=[];function n(e){if(e.navEntry?.navParams.group&&!e.children.length)return;if(!e.navEntry){e.children.forEach(e=>e.forEach(e=>n(e)));return}let r=e.navEntry.navParams.x,i=e.navEntry.navParams.y||0,a=Hc(t,i,()=>({noX:[],withX:[],y:i}));r==null?a.noX.push(e):a.withX.push({x:r,node:e})}return e.children.forEach(e=>{let t=lI(e);t&&n(t)}),t.sort((e,t)=>e.y-t.y).map(e=>(e.withX.sort((e,t)=>e.x-t.x),e.withX.forEach(({x:t,node:n})=>{e.noX.splice(t,0,n)}),e.noX)).filter(j.isTruthy)}var dI=class extends Vl{rootElement;options;constructor(e,t={}){super(),this.rootElement=e,this.options=t}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){zF(this.getNavTree().children)?.node.element.focus()}addNavEntry(e){this.navEntries.add(e),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(e){this.navEntries.delete(e),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(e,t,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:`NavController is locked.`};if(!e)return{success:!1,direction:void 0,navAction:n,reason:`No nav entry to operate on.`};let r=eI(this.getNavTree(),e);t?(this.navEntries.forEach(t=>{t!==e&&t.clearNavValue()}),this.currentNavEntry={entry:e,navAction:n,position:r}):this.currentNavEntry?.entry===e&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);let i={success:!0,defaulted:!1,direction:void 0,newElement:e.element,wrapped:!1,navAction:n,coords:r.nodeCoords};return t&&(n===RF.Activate?this.dispatch(new rI({detail:i})):n===RF.Focus&&this.dispatch(new iI({detail:i}))),i}navigate({direction:e,allowWrapping:t}){if(this.locked)return{success:!1,direction:e,navAction:RF.Navigate,reason:`NavController is locked.`};let n=BF(this.getNavTree(),this.currentNavEntry,e,t);return this.dispatch(new oI({detail:n})),n}enterInto({fallbackToActivate:e}={}){if(this.locked)return{success:!1,direction:void 0,navAction:RF.Enter,reason:`NavController is locked.`};let t=ZF(this.getNavTree(),this.currentNavEntry);return!t.success&&e?this.activate():(this.dispatch(new aI({detail:t})),t)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:RF.Activate,reason:`NavController is locked.`};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:RF.Activate,reason:`No focused NavEntry to activate.`};let e=this.currentNavEntry.entry.activate(!0);return Mc.isDefined(e,`Cannot activate a group.`),e}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:RF.Exit,reason:`NavController is locked.`};this.currentNavEntry?.navAction===RF.Activate&&this.currentNavEntry.entry.focus(!0);let e=tI(this.getNavTree(),this.currentNavEntry);return this.dispatch(new nI({detail:e})),e}navigatePibling({allowWrapping:e,direction:t}){if(this.locked)return{success:!1,direction:t,navAction:RF.Pibling,reason:`NavController is locked.`};let n=this.getNavTree(),r={...this.currentNavEntry?UF(this.currentNavEntry,t,e):BF(n,void 0,t,e),navAction:RF.Pibling};return this.dispatch(new sI({detail:r})),r}buildNavTree(){let e=cI($N(this.rootElement));return this.cachedNavTree=e,e}};function fI({open:e,callback:t,popUpManager:n,host:r,options:i}){if(e){let e=n.showPopUp(r,i);t?.(e)}else n.removePopUp(),t?.(void 0)}var pI=globalThis.document,mI=class extends iM{constructor(){if(super({defaultValue:!!pI?.hidden,equalityCheck:j.strictEquals}),!pI)return;globalThis.addEventListener(`visibilitychange`,e=>this.updateVisibility(e,pI));let e=e=>this.updateVisibility(e,pI);globalThis.onpageshow=e,globalThis.onpagehide=e,globalThis.onfocus=e,globalThis.onblur=e}updateVisibility(e,t){let n=gI.includes(e.type),r=hI.includes(e.type),i=n?!0:r?!1:t.hasFocus()||!t.hidden;this.setValue(i)}},hI=[`blur`,`focusout`,`pagehide`],gI=[`focus`,`focusin`,`pageshow`],_I=new mI;function vI(e,t){return _I.listen(e,t)}function yI(e){return e instanceof HTMLInputElement&&(e.type===`text`||e.type===`search`||e.type===`email`||e.type===`url`||e.type===`tel`||e.type===`password`||e.type===`number`)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}var bI={top:0,left:0,right:0,bottom:0},xI=class extends zl(`hide-pop-up`){},SI=class extends Rl()(`nav-select`){},CI=class{navController;listenTarget=new Vl;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;constructor(e,t){this.navController=e,this.options={...this.options,...t}}attachGlobalListeners(){this.cleanupCallbacks=[vI(!1,e=>{e||this.removePopUp()}),this.navController.listen(rI,e=>{let t=e.composedPath()[0];t instanceof Element&&yI(t)||e.detail.success&&(this.listenTarget.dispatch(new SI({detail:e.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),e.stopImmediatePropagation(),e.preventDefault())}),Ul(`mousedown`,e=>{this.lastRootElement&&e.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Ul(`keydown`,e=>{let t=e.code;if(t===`Escape`)this.removePopUp();else if(this.options.supportNavigation){let n=e.composedPath()[0];if(n instanceof Element&&yI(n))return;t===`ArrowDown`?(e.stopImmediatePropagation(),e.preventDefault(),this.navController.navigate({direction:LF.Down,allowWrapping:!1})):t===`ArrowUp`?(e.stopImmediatePropagation(),e.preventDefault(),this.navController.navigate({direction:LF.Up,allowWrapping:!1})):t===`ArrowLeft`?(e.stopImmediatePropagation(),e.preventDefault(),this.navController.navigate({direction:LF.Left,allowWrapping:!1})):t===`ArrowRight`?(e.stopImmediatePropagation(),e.preventDefault(),this.navController.navigate({direction:LF.Right,allowWrapping:!1})):(t===`Enter`||t===`Return`||t===`Space`)&&this.navController.enterInto({fallbackToActivate:!0}).success&&(e.stopImmediatePropagation(),e.preventDefault())}})]}listen(e,t,n){return this.listenTarget.listen(e,t,n)}removePopUp(){this.cleanupCallbacks.forEach(e=>e()),this.listenTarget.dispatch(new xI)}showPopUp(e,t){this.lastRootElement=e;let n={...this.options,...t},r=oP(e);Mc.instanceOf(r,HTMLElement);let i=e.getBoundingClientRect(),a=r.getBoundingClientRect(),o=r.offsetWidth-r.clientWidth,s=r.offsetHeight-r.clientHeight,c=r===document.body?{top:0,left:0,right:a.width,bottom:a.height}:{top:a.top,left:a.left,right:a.right-o,bottom:a.bottom-s},l=Dl(bI,e=>i[e]),u=Dl(bI,e=>{let t=c[e],n=l[e];return Math.abs(t-n)}),d=u.top>u.bottom+n.verticalDiffThreshold&&u.bottom<n.minDownSpace,f=u.left>u.right+n.horizontalDiffThreshold&&u.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!d,popRight:!f,positions:{container:c,root:l,diff:u}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}},wI;(function(e){e.Left=`left`,e.Right=`right`,e.Both=`both`,e.Auto=`auto`})(wI||={});var TI=NF()({tagName:`vira-pop-up-trigger`,state({host:e}){return{showPopUpResult:void 0,popUpManager:new CI(new dI(e,{activateOnMouseUp:!0}))}},slotNames:[`trigger`,`popUp`],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled,"vira-pop-up-trigger-inside-focus":({inputs:e})=>!!e.useInsideFocus,"vira-pop-up-trigger-outside-focus":({inputs:e})=>!e.useInsideFocus},styles:({hostClasses:e})=>B`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${OF};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;
        }

        ${e[`vira-pop-up-trigger-inside-focus`].selector} .dropdown-wrapper {
            ${dF({renderInside:!0})}
        }
        ${e[`vira-pop-up-trigger-outside-focus`].selector} .dropdown-wrapper {
            ${dF()}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${jF};
        }

        ${e[`vira-pop-up-trigger-disabled`].selector} {
            ${cF}
            pointer-events: auto;
        }

        ${e[`vira-pop-up-trigger-disabled`].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            box-sizing: border-box;
            flex-direction: column;
            align-items: flex-start;

            /* highest possible z-index */
            z-index: 2147483647;

            & > * {
                pointer-events: auto;
                max-width: 100%;
            }

            &.right-aligned {
                align-items: flex-end;
            }
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
        }
    `,events:{navSelect:GM(),openChange:GM(),init:GM()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:n,inputs:r,dispatch:i,events:a}){e.popUpManager.listen(xI,()=>{if(t({showPopUpResult:void 0}),i(new a.openChange(void 0)),r.focusOnClose&&!r.isDisabled){let e=n.shadowRoot.querySelector(`.dropdown-wrapper`);Mc.instanceOf(e,HTMLButtonElement,`failed to find dropdown wrapper child`),e.focus()}}),e.popUpManager.listen(SI,o=>{r.keepOpenAfterInteraction||fI({open:!1,callback(e){t({showPopUpResult:e})},host:n,popUpManager:e.popUpManager}),i(new a.navSelect(o.detail))}),i(new a.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:n,inputs:r,updateState:i,host:a,slotNames:o}){function s({emitEvent:o,open:s},c){if(n.showPopUpResult&&r.keepOpenAfterInteraction&&c){let e=a.shadowRoot.querySelector(`.dropdown-trigger`);if(e&&!c.composedPath().includes(e))return}fI({open:s,callback(n){i({showPopUpResult:n}),o&&e(new t.openChange(n))},host:a,popUpManager:n.popUpManager})}r.isDisabled?s({open:!1,emitEvent:!1},void 0):r.z_debug_forceOpenState!=null&&(!r.z_debug_forceOpenState&&n.showPopUpResult?s({emitEvent:!1,open:!1},void 0):r.z_debug_forceOpenState&&!n.showPopUpResult&&s({emitEvent:!1,open:!0},void 0));let c=r.horizontalAnchor===wI.Auto||r.horizontalAnchor===void 0?n.showPopUpResult?.popRight?wI.Left:wI.Right:r.horizontalAnchor,l=B`
            ${c===wI.Right&&n.showPopUpResult?r.ignoreMaxWidth?B`
                          left: unset;
                      `:B`
                          left: -${n.showPopUpResult.positions.diff.left}px;
                      `:B`
                      left: ${r.popUpOffset?.left||0}px;
                  `}
            ${n.showPopUpResult&&c===wI.Left?r.ignoreMaxWidth?B`
                          right: unset;
                      `:B`
                          right: -${n.showPopUpResult.positions.diff.right}px;
                      `:B`
                      right: ${r.popUpOffset?.right||0}px;
                  `}
        `,u=n.showPopUpResult?n.showPopUpResult.popDown?r.ignoreMaxHeight?B`
                          bottom: unset;
                          top: calc(100% + ${r.popUpOffset?.vertical||0}px);
                          ${l}
                      `:B`
                          bottom: -${n.showPopUpResult.positions.diff.bottom}px;
                          top: calc(100% + ${r.popUpOffset?.vertical||0}px);
                          ${l}
                      `:r.ignoreMaxHeight?B`
                        top: unset;
                        bottom: calc(100% + ${r.popUpOffset?.vertical||0}px);
                        ${l}
                    `:B`
                        top: -${n.showPopUpResult.positions.diff.top}px;
                        bottom: calc(100% + ${r.popUpOffset?.vertical||0}px);
                        ${l}
                    `:void 0;function d(e){s({emitEvent:!0,open:!n.showPopUpResult},e)}return V`
            <button
                ?disabled=${!!r.isDisabled}
                class="dropdown-wrapper ${bM({open:!!n.showPopUpResult,"open-upwards":!n.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!n.showPopUpResult}
                ${mN(`keydown`,e=>{!n.showPopUpResult&&e.code.startsWith(`Arrow`)&&s({emitEvent:!0,open:!0},e)})}
                ${mN(`click`,e=>{if(e.detail===0){let t=!1;if(sP(({element:e})=>yI(e)?(t=!0,!0):!1),t)return;d(e)}else if(e.button===0&&n.showPopUpResult){let t=a.shadowRoot.querySelector(`.dropdown-trigger`);t&&!e.composedPath().includes(t)&&s({emitEvent:!0,open:!1},e)}})}
                ${mN(`mousedown`,e=>{if(e.button!==0)return;let t=Dc.instanceOf(a.shadowRoot.querySelector(`.dropdown-trigger`),HTMLElement);e.composedPath().includes(t)&&d(e)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${o.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${bM({"right-aligned":c===wI.Right})}"
                    style=${u}
                >
                    ${TN(!!n.showPopUpResult,V`
                            <slot name=${o.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),EI=U({name:`Check16Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="m12 5-6 6-3-3"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),DI=U({name:`ChevronDown16Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${H[`vira-icon-stroke-color`].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${H[`vira-icon-stroke-width`].value}
                d="M4 5.5 L8 10 12 5.5"
            />
        </svg>
    `}),OI=U({name:`ChevronUp16Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${H[`vira-icon-stroke-color`].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${H[`vira-icon-stroke-width`].value}
                d="M4 10 L8 6 12 10"
            />
        </svg>
    `}),kI=U({name:`Dash16Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 8h8"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                stroke-linecap="round"
            />
        </svg>
    `}),AI=U({name:`Element16Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),jI=U({name:`Upload16Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M3 9v4h10v-4"
                fill=${H[`vira-icon-fill-color`].value}
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M8 9V2m3 3-3-3-3 3"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    `}),MI=U({name:`X16Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 4l8 8M12 4l-8 8"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),NI=U({name:`ArrowDown24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M12 5v14m0 0-7-7m7 7 7-7"
                style="fill-rule:nonzero"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),PI=U({name:`ArrowLeft24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M19 12H5m0 0 7-7m-7 7 7 7"
                style="fill-rule:nonzero"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),FI=U({name:`ArrowRight24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M5 12h14m0 0-7-7m7 7-7 7"
                style="fill-rule:nonzero"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),II=U({name:`ArrowUp24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M12 19V5m0 0-7 7m7-7 7 7"
                style="fill-rule:nonzero"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),LI=U({name:`AutoTheme24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 4c4.39 0 8 3.61 8 8s-3.61 8-8 8z"
                fill=${H[`vira-icon-stroke-color`].value}
                stroke="none"
                style="fill-rule:nonzero"
            />
            <path
                d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 0v16"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill="none"
            />
        </svg>
    `}),RI=U({name:`Bell24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M11.3 4c-2.7 0-5 3.5-5 6.4v3.3q0 1.2-.7 2.2l-1 1.1h14.8l-1-1.1q-.7-1-.8-2.2v-3.3c0-3-2.3-6.4-5-6.4zM10 17v1q.2 1.8 2 2a2 2 0 0 0 2-2v-1"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />
        </svg>
    `}),zI=U({name:`Chat24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />
        </svg>
    `}),BI=U({name:`ChevronDown24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${H[`vira-icon-stroke-color`].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${H[`vira-icon-stroke-width`].value}
                d="M6 8 L12 15 18 8"
            />
        </svg>
    `}),VI=U({name:`ChevronUp24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${H[`vira-icon-stroke-color`].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${H[`vira-icon-stroke-width`].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),HI=U({name:`CloseX24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${H[`vira-icon-fill-color`].value}
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />

            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),UI=U({name:`Commit24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:1.5"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="4"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />

            <path
                d="M12 2v6m0 8v6"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill="none"
            />
        </svg>
    `}),WI=U({name:`Copy24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M16 6v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6q.2-1.8 2-2h8a2 2 0 0 1 2 2"
                stroke="none"
                fill=${H[`vira-icon-fill-color`].value}
            />
            <path
                d="M21 11v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8q.2-1.8 2-2h8a2 2 0 0 1 2 2"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />
            <path
                d="M7 16H6a2 2 0 0 1-2-2V6q.2-1.8 2-2h8a2 2 0 0 1 2 2v1"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill="none"
            />
        </svg>
    `}),GI=U({name:`Document24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />

            <path
                d="M13 3v6h6"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill="none"
            />
        </svg>
    `}),KI=U({name:`DocumentSearch24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-miterlimit:100"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill-rule="nonzero"
            stroke-linecap="butt"
            stroke-linejoin="round"
            stroke-miterlimit="2"
        >
            <path
                d="m19 9-6-6H5v18h14z"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />
            <circle
                cx="11.7"
                cy="12.5"
                r="3.5"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />
            <path
                d="m14.2 15 2.5 2.5"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />
        </svg>
    `}),qI=U({name:`DoubleChevron24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:miter;stroke-miterlimit:2"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M16.5 8.5 12 4 7.5 8.5v7L12 20l4.5-4.5z"
                fill-rule="nonzero"
                fill=${H[`vira-icon-fill-color`].value}
                stroke-width="none"
                stroke="none"
            />
            <path
                d="m7 15 5 5 5-5M7 9l5-5 5 5"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill="none"
            />
        </svg>
    `}),JI=U({name:`Element24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),YI=U({name:`ExternalLink24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M11 7H6a2 2 0 0 0-2 2v9q.2 1.8 2 2h9a2 2 0 0 0 2-2v-5"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />
            <path
                d="M10 14 20 4m-5 0h5v5"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill="none"
            />
        </svg>
    `}),XI=U({name:`EyeClosed24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${H[`vira-icon-fill-color`].value}
            stroke=${H[`vira-icon-stroke-color`].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${H[`vira-icon-stroke-width`].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),ZI=U({name:`EyeOpen24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${H[`vira-icon-fill-color`].value}
            stroke=${H[`vira-icon-stroke-color`].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${H[`vira-icon-stroke-width`].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),QI=U({name:`Filter24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M4 6h16l-6 12h-4z"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="0"
                fill=${H[`vira-icon-fill-color`].value}
            />
            <path
                d="M3 6h18M6 12h12M9 18h6"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill="none"
                fill-rule="nonzero"
            />
        </svg>
    `}),$I=U({name:`Globe24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:1"
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                fill=${H[`vira-icon-fill-color`].value}
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
            <path
                d="M21 12c0 5-4 9-9 9m9-9c0-5-4-9-9-9m9 9H3m9 9c-5 0-9-4-9-9m9 9q3.5-3.9 3.6-9 0-5.1-3.6-9m0 18a14 14 0 0 1-3.6-9q0-5.1 3.6-9m-9 9c0-5 4-9 9-9"
                style="fill-rule:nonzero;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),eL=U({name:`Link24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:2"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M11.6 14.4a4 4 0 0 1-1.5-6.6l4.2-4.2A4 4 0 0 1 20 9.3l-3 2.9"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />
            <path
                d="M12.4 9.6c.5.1 1 .5 1.5.9a4 4 0 0 1 0 5.7l-4.2 4.2A4 4 0 0 1 4 14.7l3-2.9"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />
            <path
                d="M11.6 14.4a4 4 0 0 1-1.5-6.6l4.2-4.2A4 4 0 0 1 20 9.3l-3 2.9"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill="none"
            />
        </svg>
    `}),tL=U({name:`Loader24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),nL=U({name:`LoaderAnimated24Icon`,svgTemplate:V`
        <style>
            ${B`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${lF[`vira-extended-animation-duration`].value} linear
            loader-animated-spin infinite;
    }
`}
        </style>
        ${tL.svgTemplate}
    `}),rL=U({name:`Lock24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:2"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M19 11c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v9c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-9Z"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />
            <circle
                cx="12"
                cy="14"
                r="1.5"
                fill=${H[`vira-icon-stroke-color`].value}
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width="calc(${H[`vira-icon-stroke-width`].value} - 1px)"
            />
            <path
                d="M12 14v4"
                fill=${H[`vira-icon-stroke-color`].value}
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />

            <path
                d="M17 10V7.5a5 5 0 0 0-10 0V10"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill="none"
            />
        </svg>
    `}),iL=U({name:`MagnifyingGlass24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round"
            viewBox="0 0 24 24"
        >
            <path
                d="m20 20-4.9-4.9M10.5 4a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Z"
                style="fill-rule:nonzero"
                fill=${H[`vira-icon-fill-color`].value}
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),aL=U({name:`Moon24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke=${H[`vira-icon-stroke-color`].value}
            stroke-width=${H[`vira-icon-stroke-width`].value}
            fill=${H[`vira-icon-fill-color`].value}
            stroke-linejoin="round"
        >
            <path d="M18.6 17.72A8 8 0 1 1 15 4.26a8 8 0 0 0 3.6 13.46Z" />
        </svg>
    `}),oL=U({name:`Options24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${H[`vira-icon-fill-color`].value}
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />

                <circle cx="16.5" cy="12.5" r="2.5" />

                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>

            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),sL=U({name:`Pencil24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />

            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill="none"
            />
        </svg>
    `}),cL=U({name:`Plus24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M12 5v14M5 12h14"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),lL=U({name:`Printer24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M7 9V4h10v5M7 17H5.6C4.7 17 4 16 4 15.2v-4.6Q4.1 9.1 5.6 9h12.8q1.5.1 1.6 1.6v4.6c0 .9-.7 1.8-1.6 1.8H17M7 14h10v6H7z"
                style="fill-rule:nonzero"
                fill=${H[`vira-icon-fill-color`].value}
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),uL=U({name:`Shield24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />
        </svg>
    `}),dL=U({name:`SortAscending24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                fill=${H[`vira-icon-fill-color`].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                d="m3 8 4-4 4 4M7 4v16"
            />
            <path
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),fL=U({name:`SortDescending24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                fill=${H[`vira-icon-fill-color`].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                d="m3 16 4 4 4-4m-4 4V4"
            />
            <path
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),pL=U({name:`Sparkle24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"
            viewBox="0 0 24 24"
        >
            <path
                d="m18.46 8.14-.73-1.62a.5.5 0 0 0-.23-.23l-1.6-.73 1.61-.72q.15-.08.23-.23L18.47 3l.72 1.62q.08.15.23.23l1.6.72-1.6.73a.5.5 0 0 0-.23.23zm0 7.72.73 1.62q.08.16.23.23l1.6.73-1.6.72a.5.5 0 0 0-.24.23L18.46 21l-.73-1.61a.5.5 0 0 0-.23-.24l-1.6-.72 1.6-.73q.16-.06.23-.23zm-7.3-5.97q.06.15.22.23l3.21 1.46a.46.46 0 0 1 0 .84l-3.21 1.46a.5.5 0 0 0-.23.23L9.7 17.32a.5.5 0 0 1-.42.27.5.5 0 0 1-.42-.27L7.4 14.11a.5.5 0 0 0-.23-.23l-3.21-1.46a.46.46 0 0 1 0-.84l3.21-1.46q.16-.08.23-.23l1.46-3.21a.5.5 0 0 1 .42-.27q.29 0 .42.27z"
                fill=${H[`vira-icon-fill-color`].value}
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),mL=U({name:`SpeakerLoud24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />
        </svg>
    `}),hL=U({name:`SpeakerMedium24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />
        </svg>
    `}),gL=U({name:`SpeakerMuted24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />

            <path
                d="M4 20 20 4"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />
        </svg>
    `}),_L=U({name:`SpeakerQuiet24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />
        </svg>
    `}),vL=U({name:`Star24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />
        </svg>
    `}),yL=U({name:`StatusFailure24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5"
        >
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${H[`vira-icon-fill-color`].value}
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />

            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),bL=U({name:`StatusInProgress24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${H[`vira-icon-fill-color`].value}
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />

            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${H[`vira-icon-stroke-color`].value}
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width="calc(${H[`vira-icon-stroke-width`].value} - 1px)"
            />

            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${H[`vira-icon-stroke-color`].value}
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width="calc(${H[`vira-icon-stroke-width`].value} - 1px)"
            />

            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${H[`vira-icon-stroke-color`].value}
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width="calc(${H[`vira-icon-stroke-width`].value} - 1px)"
            />
        </svg>
    `}),xL=U({name:`StatusSuccess24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${H[`vira-icon-fill-color`].value}
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />

            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),SL=U({name:`StatusUnknown24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                fill=${H[`vira-icon-fill-color`].value}
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${H[`vira-icon-stroke-color`].value}
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width="calc(${H[`vira-icon-stroke-width`].value} - 1px)"
            />
            <path
                d="M12 14c0-.5.09-.87.14-1q.13-.38.37-.7c.19-.24 1.3-1.46 1.46-1.65a3 3 0 0 0 .44-.73q.17-.42.17-.94 0-1.07-.7-1.65a2.7 2.7 0 0 0-1.8-.56q-1.12 0-1.83.7c-.3.29-.66.86-.66 1.53"
                fill="none"
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),CL=U({name:`StatusWarning24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                fill=${H[`vira-icon-fill-color`].value}
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${H[`vira-icon-stroke-color`].value}
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width="calc(${H[`vira-icon-stroke-width`].value} - 1px)"
            />
            <path
                d="m12 14 .2-7h-.4l.2 7Z"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),wL=U({name:`Sun24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            style="fill-rule:nonzero;stroke:#000;stroke-width:1px;stroke-linecap:round;clip-rule:evenodd;"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="4"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />
            <path
                d="M12 2v3m0 14v3M4.22 4.22l2.12 2.12m11.32 11.32 2.12 2.12M2 12h3m14 0h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill="none"
            />
        </svg>
    `}),TL=U({name:`Upload24Icon`,svgTemplate:V`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                d="M4 14v6h16v-6"
                style="fill-rule:nonzero;"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />
            <path
                d="M12 15V4m4 4-4-4-4 4"
                fill="none"
                style="fill-rule:nonzero"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),EL=U({name:`X24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `});function DL(e,t){let n=B`
        ${Su(Te(t).map(e=>{if(t[e])return`${H[e].name}: ${String(t[e])};`}).filter(j.isTruthy).join(` `))}
        display: inline-flex;
        vertical-align: middle;
    `;return U({name:e.name,svgTemplate:V`
            <div style=${n}>${e.svgTemplate}</div>
        `})}var OL={ArrowDown24Icon:NI,ArrowLeft24Icon:PI,ArrowRight24Icon:FI,ArrowUp24Icon:II,AutoTheme24Icon:LI,Bell24Icon:RI,Chat24Icon:zI,Check16Icon:EI,Check24Icon:$P,ChevronDown16Icon:DI,ChevronDown24Icon:BI,ChevronUp16Icon:OI,ChevronUp24Icon:VI,CloseX24Icon:HI,Commit24Icon:UI,Copy24Icon:WI,Dash16Icon:kI,Document24Icon:GI,DocumentSearch24Icon:KI,DoubleChevron24Icon:qI,Element16Icon:AI,Element24Icon:JI,ExternalLink24Icon:YI,EyeClosed24Icon:XI,EyeOpen24Icon:ZI,Filter24Icon:QI,Globe24Icon:$I,Link24Icon:eL,Loader24Icon:tL,LoaderAnimated24Icon:nL,Lock24Icon:rL,MagnifyingGlass24Icon:iL,Moon24Icon:aL,Options24Icon:oL,Pencil24Icon:sL,Plus24Icon:cL,Printer24Icon:lL,Shield24Icon:uL,SortAscending24Icon:dL,SortDescending24Icon:fL,Sparkle24Icon:pL,SpeakerLoud24Icon:mL,SpeakerMedium24Icon:hL,SpeakerMuted24Icon:gL,SpeakerQuiet24Icon:_L,Star24Icon:vL,StatusFailure24Icon:yL,StatusInProgress24Icon:bL,StatusSuccess24Icon:xL,StatusUnknown24Icon:SL,StatusWarning24Icon:CL,Sun24Icon:wL,Upload16Icon:jI,Upload24Icon:TL,X16Icon:MI,X24Icon:EL},kL={value:B`transparent`},AL={[q.Plain]:{[wF.Standard]:{idle:{backgroundColor:G.inverse[nF].background,textColor:G.inverse[nF].foreground,borderColor:G.inverse[nF].background},hover:{backgroundColor:G.colors[`vira-grey-behind-bg-non-body`].background,textColor:G.colors[`vira-grey-behind-bg-non-body`].foreground,borderColor:G.inverse[nF].background},active:{backgroundColor:G.colors[`vira-grey-behind-bg-body`].background,textColor:G.colors[`vira-grey-behind-bg-body`].foreground,borderColor:G.inverse[nF].background}},[wF.Subtle]:{idle:{backgroundColor:kL,textColor:G.colors[nF].foreground,borderColor:kL},hover:{backgroundColor:G.colors[`vira-grey-on-self-body`].background,textColor:G.colors[`vira-grey-on-self-body`].foreground,borderColor:G.colors[`vira-grey-on-self-body`].foreground},active:{backgroundColor:G.colors[`vira-grey-on-self-non-body`].background,textColor:G.colors[`vira-grey-on-self-non-body`].foreground,borderColor:G.colors[`vira-grey-on-self-non-body`].foreground}}},[q.Accent]:{[wF.Standard]:{idle:{backgroundColor:G.colors[`vira-accent-behind-bg-non-body`].background,textColor:G.colors[`vira-accent-behind-bg-non-body`].foreground,borderColor:G.colors[`vira-accent-behind-bg-body`].background},hover:{backgroundColor:G.colors[`vira-accent-behind-bg-header`].background,textColor:G.colors[`vira-accent-behind-bg-header`].foreground,borderColor:G.colors[`vira-accent-behind-bg-body`].background},active:{backgroundColor:G.colors[`vira-accent-behind-bg-body`].background,textColor:G.colors[`vira-accent-behind-bg-body`].foreground,borderColor:G.colors[`vira-accent-behind-bg-body`].background}},[wF.Subtle]:{idle:{backgroundColor:kL,textColor:G.colors[`vira-accent-foreground-non-body`].foreground,borderColor:kL},hover:{backgroundColor:G.colors[`vira-accent-on-self-body`].background,textColor:G.colors[`vira-accent-on-self-body`].foreground,borderColor:G.colors[`vira-accent-on-self-body`].foreground},active:{backgroundColor:G.colors[`vira-accent-on-self-non-body`].background,textColor:G.colors[`vira-accent-on-self-non-body`].foreground,borderColor:G.colors[`vira-accent-on-self-non-body`].foreground}}},[q.Neutral]:{[wF.Standard]:{idle:{backgroundColor:G.colors[nF].background,textColor:G.colors[nF].foreground,borderColor:K[`vira-form-border-color`]},hover:{backgroundColor:G.colors[`vira-grey-behind-fg-small-body`].background,textColor:G.colors[`vira-grey-behind-fg-small-body`].foreground,borderColor:K[`vira-form-border-color`]},active:{backgroundColor:G.colors[`vira-grey-behind-fg-body`].background,textColor:G.colors[`vira-grey-behind-fg-body`].foreground,borderColor:K[`vira-form-border-color`]}},[wF.Subtle]:{idle:{backgroundColor:kL,textColor:G.colors[`vira-grey-foreground-non-body`].foreground,borderColor:kL},hover:{backgroundColor:G.colors[`vira-grey-on-self-body`].background,textColor:G.colors[`vira-grey-on-self-body`].foreground,borderColor:G.colors[`vira-grey-on-self-body`].foreground},active:{backgroundColor:G.colors[`vira-grey-on-self-non-body`].background,textColor:G.colors[`vira-grey-on-self-non-body`].foreground,borderColor:G.colors[`vira-grey-on-self-non-body`].foreground}}},[q.Danger]:{[wF.Standard]:{idle:{backgroundColor:G.colors[`vira-red-behind-bg-non-body`].background,textColor:G.colors[`vira-red-behind-bg-non-body`].foreground,borderColor:G.colors[`vira-red-behind-bg-body`].background},hover:{backgroundColor:G.colors[`vira-red-behind-bg-header`].background,textColor:G.colors[`vira-red-behind-bg-header`].foreground,borderColor:G.colors[`vira-red-behind-bg-body`].background},active:{backgroundColor:G.colors[`vira-red-behind-bg-body`].background,textColor:G.colors[`vira-red-behind-bg-body`].foreground,borderColor:G.colors[`vira-red-behind-bg-body`].background}},[wF.Subtle]:{idle:{backgroundColor:kL,textColor:G.colors[`vira-red-foreground-non-body`].foreground,borderColor:kL},hover:{backgroundColor:G.colors[`vira-red-on-self-body`].background,textColor:G.colors[`vira-red-on-self-body`].foreground,borderColor:G.colors[`vira-red-on-self-body`].foreground},active:{backgroundColor:G.colors[`vira-red-on-self-non-body`].background,textColor:G.colors[`vira-red-on-self-non-body`].foreground,borderColor:G.colors[`vira-red-on-self-non-body`].foreground}}},[q.Warning]:{[wF.Standard]:{idle:{backgroundColor:G.colors[`vira-yellow-behind-bg-non-body`].background,textColor:G.colors[`vira-yellow-behind-bg-non-body`].foreground,borderColor:G.colors[`vira-yellow-behind-bg-body`].background},hover:{backgroundColor:G.colors[`vira-yellow-behind-bg-header`].background,textColor:G.colors[`vira-yellow-behind-bg-header`].foreground,borderColor:G.colors[`vira-yellow-behind-bg-body`].background},active:{backgroundColor:G.colors[`vira-yellow-behind-bg-body`].background,textColor:G.colors[`vira-yellow-behind-bg-body`].foreground,borderColor:G.colors[`vira-yellow-behind-bg-body`].background}},[wF.Subtle]:{idle:{backgroundColor:kL,textColor:G.colors[`vira-yellow-foreground-non-body`].foreground,borderColor:kL},hover:{backgroundColor:G.colors[`vira-yellow-on-self-body`].background,textColor:G.colors[`vira-yellow-on-self-body`].foreground,borderColor:G.colors[`vira-yellow-on-self-body`].foreground},active:{backgroundColor:G.colors[`vira-yellow-on-self-non-body`].background,textColor:G.colors[`vira-yellow-on-self-non-body`].foreground,borderColor:G.colors[`vira-yellow-on-self-non-body`].foreground}}},[q.Positive]:{[wF.Standard]:{idle:{backgroundColor:G.colors[`vira-green-behind-bg-non-body`].background,textColor:G.colors[`vira-green-behind-bg-non-body`].foreground,borderColor:G.colors[`vira-green-behind-bg-body`].background},hover:{backgroundColor:G.colors[`vira-green-behind-bg-header`].background,textColor:G.colors[`vira-green-behind-bg-header`].foreground,borderColor:G.colors[`vira-green-behind-bg-body`].background},active:{backgroundColor:G.colors[`vira-green-behind-bg-body`].background,textColor:G.colors[`vira-green-behind-bg-body`].foreground,borderColor:G.colors[`vira-green-behind-bg-body`].background}},[wF.Subtle]:{idle:{backgroundColor:kL,textColor:G.colors[`vira-green-foreground-non-body`].foreground,borderColor:kL},hover:{backgroundColor:G.colors[`vira-green-on-self-body`].background,textColor:G.colors[`vira-green-on-self-body`].foreground,borderColor:G.colors[`vira-green-on-self-body`].foreground},active:{backgroundColor:G.colors[`vira-green-on-self-non-body`].background,textColor:G.colors[`vira-green-on-self-non-body`].foreground,borderColor:G.colors[`vira-green-on-self-non-body`].foreground}}}},jL=NF()({tagName:`vira-button`,hostClasses:{"vira-button-with-menu-caret":({inputs:e})=>!!e.showMenuCaret,"vira-button-size-large":({inputs:e})=>e.buttonSize===SF.Large,"vira-button-size-medium":({inputs:e})=>!e.buttonSize||e.buttonSize===SF.Medium,"vira-button-size-small":({inputs:e})=>e.buttonSize===SF.Small,"vira-button-emphasis-standard":({inputs:e})=>!e.buttonEmphasis||e.buttonEmphasis===wF.Standard,"vira-button-emphasis-subtle":({inputs:e})=>e.buttonEmphasis===wF.Subtle,"vira-button-color-accent":({inputs:e})=>!e.colorVariant||e.colorVariant===q.Accent,"vira-button-color-plain":({inputs:e})=>e.colorVariant===q.Plain,"vira-button-color-neutral":({inputs:e})=>e.colorVariant===q.Neutral,"vira-button-color-danger":({inputs:e})=>e.colorVariant===q.Danger,"vira-button-color-warning":({inputs:e})=>e.colorVariant===q.Warning,"vira-button-color-positive":({inputs:e})=>e.colorVariant===q.Positive,"vira-button-disabled":({inputs:e})=>!!e.isDisabled,"vira-button-icon-only":({inputs:e})=>!e.text&&!!e.icon},cssVars:{"vira-button-text-color":`transparent`,"vira-button-background-color":`transparent`,"vira-button-border-color":`transparent`,"vira-button-hover-text-color":`transparent`,"vira-button-hover-background-color":`transparent`,"vira-button-hover-border-color":`transparent`,"vira-button-active-text-color":`transparent`,"vira-button-active-background-color":`transparent`,"vira-button-active-border-color":`transparent`,"vira-button-disabled-text-color":G.colors[`vira-grey-behind-bg-decoration`].foreground.value,"vira-button-disabled-background-color":G.colors[`vira-grey-behind-bg-decoration`].background.value,"vira-button-disabled-border-color":G.colors[`vira-grey-behind-bg-decoration`].background.value,"vira-button-border-width":`1px`,"vira-button-border-radius":K[`vira-form-radius`].value},styles:({hostClasses:e,cssVars:t})=>{function n(){return Su(TF.flatMap(n=>xF.map(r=>{let i=AL[r][n];return B`
                        ${e[`vira-button-color-${r}`].selector}${e[`vira-button-emphasis-${n}`].selector} {
                            ${t[`vira-button-background-color`].name}: ${i.idle.backgroundColor.value};
                            ${t[`vira-button-text-color`].name}: ${i.idle.textColor.value};
                            ${t[`vira-button-border-color`].name}: ${i.idle.borderColor.value};

                            ${t[`vira-button-hover-background-color`].name}: ${i.hover.backgroundColor.value};
                            ${t[`vira-button-hover-text-color`].name}: ${i.hover.textColor.value};
                            ${t[`vira-button-hover-border-color`].name}: ${i.hover.borderColor.value};

                            ${t[`vira-button-active-background-color`].name}: ${i.active.backgroundColor.value};
                            ${t[`vira-button-active-text-color`].name}: ${i.active.textColor.value};
                            ${t[`vira-button-active-border-color`].name}: ${i.active.borderColor.value};
                        }
                    `})).join(`
`))}function r(){return Su(CF.map(t=>B`
                    ${e[`vira-button-size-${t}`].selector} {
                        font-size: ${K[`vira-form-${t}-text-size`].value};

                        button {
                            min-height: ${EF[t]}px;
                            padding: 2px
                                ${K[`vira-form-${t}-text-size`].value};
                        }

                        &${e[`vira-button-icon-only`].selector} {
                            min-width: ${EF[t]}px;
                        }
                    }
                `).join(`
`))}return B`
            :host {
                cursor: pointer;
                display: inline-flex;
                position: relative;
                vertical-align: middle;
                align-items: center;
                box-sizing: border-box;
                ${jF};
                ${K[`vira-form-focus-outline-color`].name}: ${K[`vira-form-accent-primary-hover-color`].value}
            }

            ${r()}
            ${n()}

            button {
                ${OF};
                flex-shrink: 0;
                position: relative;
                cursor: pointer;

                width: 100%;
                height: 100%;

                border-width: ${t[`vira-button-border-width`].value};
                border-style: solid;
                border-color: ${t[`vira-button-border-color`].value};

                box-sizing: border-box;
                display: inline-flex;
                justify-content: center;
                align-items: center;

                border-radius: ${t[`vira-button-border-radius`].value};

                background-color: ${t[`vira-button-background-color`].value};
                color: ${t[`vira-button-text-color`].value};

                ${dF({elementBorderSize:t[`vira-button-border-width`]})}
            }

            :host(:hover) button,
            & button:hover {
                background-color: ${t[`vira-button-hover-background-color`].value};
                color: ${t[`vira-button-hover-text-color`].value};
                border-color: ${t[`vira-button-hover-border-color`].value};
            }

            :host(:active) button,
            & button:active {
                background-color: ${t[`vira-button-active-background-color`].value};
                color: ${t[`vira-button-active-text-color`].value};
                border-color: ${t[`vira-button-active-border-color`].value};
            }

            .empty-text {
                width: 0;
            }

            button ${J} + .text-template {
                margin-left: 8px;
            }

            ${J} {
                height: 0;
                display: flex;
                align-items: center;
            }

            .caret-icon {
                margin-left: 8px;
            }

            ${e[`vira-button-with-menu-caret`].selector} {
                button {
                    padding-right: 6px;
                }
            }

            ${e[`vira-button-disabled`].selector} {
                cursor: not-allowed;

                & button {
                    pointer-events: none;
                    color: ${t[`vira-button-disabled-text-color`].value};
                    background-color: ${t[`vira-button-disabled-background-color`].value};
                    border-color: ${t[`vira-button-disabled-border-color`].value};
                }
            }

            ${e[`vira-button-icon-only`].selector} {
                button {
                    padding: 0;
                }
            }
        `},render:({inputs:e})=>{let t=e.icon?V`
                  <${J.assign({icon:e.icon})}></${J}>
              `:M,n=e.text?V`
                  <span class="text-template">${e.text}</span>
              `:V`
                  <span class="empty-text">&nbsp;</span>
              `,r=e.showMenuCaret?V`
                  <${J.assign({icon:DI})}
                      class="caret-icon"
                  ></${J}>
              `:M;return V`
            <button ?disabled=${e.isDisabled}>
                ${t}${n}${r}
            </button>
        `}}),ML;(function(e){e.Error=`error`,e.Success=`success`})(ML||={});var NL=NF()({tagName:`vira-card`,hostClasses:{"vira-card-error":({inputs:e})=>e.cardState===ML.Error,"vira-card-success":({inputs:e})=>e.cardState===ML.Success},cssVars:{"vira-card-border":B`1px solid ${K[`vira-form-border-color`].value}`,"vira-card-padding":K[`vira-form-wrapper-radius`].value},styles:({hostClasses:e,cssVars:t})=>B`
        :host {
            display: block;
            border: ${t[`vira-card-border`].value};
            border-radius: ${K[`vira-form-wrapper-radius`].value};
            padding: ${t[`vira-card-padding`].value};
        }

        ${e[`vira-card-error`].selector} {
            border-color: ${K[`vira-form-error-color`].value};
        }
        ${e[`vira-card-success`].selector} {
            border-color: ${K[`vira-form-success-color`].value};
        }
    `,render(){return V`
            <slot></slot>
        `}}),PL=NF()({tagName:`vira-checkbox`,hostClasses:{"vira-checkbox-horizontal":({inputs:e})=>!!e.horizontal,"vira-checkbox-filled-checked":({inputs:e})=>!!e.fillWhenChecked,"vira-checkbox-filled-unchecked":({inputs:e})=>!!e.fillWhenUnchecked},styles:({hostClasses:e})=>B`
        :host {
            display: inline-flex;
        }

        .custom-checkbox {
            height: 24px;
            aspect-ratio: 1;
            box-sizing: border-box;
        }

        ${J} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            ${H[`vira-icon-stroke-width`].name}: 3px;
            opacity: 0;
        }

        ${e[`vira-checkbox-filled-checked`].selector} {
            & .custom-checkbox.checked {
                color: ${K[`vira-form-background-color`].value};
                background-color: ${K[`vira-form-accent-primary-color`].value};
            }

            label {
                &:hover .custom-checkbox.checked {
                    background-color: ${K[`vira-form-accent-primary-hover-color`].value};
                }

                &:active .custom-checkbox.checked {
                    background-color: ${K[`vira-form-accent-primary-active-color`].value};
                }
            }
        }
        ${e[`vira-checkbox-filled-unchecked`].selector} {
            & .custom-checkbox:not(.checked) {
                color: ${K[`vira-form-background-color`].value};
                background-color: ${K[`vira-form-error-color`].value};
            }

            label {
                &:hover .custom-checkbox:not(.checked) {
                    background-color: ${K[`vira-form-error-hover-color`].value};
                }

                &:active .custom-checkbox:not(.checked) {
                    background-color: ${K[`vira-form-error-active-color`].value};
                }
            }
        }

        label {
            display: inline-flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;

            &.disabled {
                cursor: not-allowed;
            }

            & .label-text {
                cursor: pointer;
                font-weight: ${K[`vira-form-label-font-weight`].value};
            }

            &:hover .custom-checkbox {
                background-color: ${K[`vira-form-selection-hover-color`].value};
            }
            &:active .custom-checkbox {
                background-color: ${K[`vira-form-selection-active-color`].value};
            }
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${K[`vira-form-border-color`].value};
            color: ${K[`vira-form-foreground-color`].value};
            border-radius: ${K[`vira-form-radius`].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${dF({elementBorderSize:`1px`})}

            &.checked {
                & ${J} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${K[`vira-form-error-color`].value};
            }

            &.disabled {
                ${cF};
            }
        }

        ${e[`vira-checkbox-horizontal`].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,events:{valueChange:GM()},render({inputs:e,dispatch:t,events:n}){function r(){e.disabled||t(new n.valueChange(!e.value))}let i=e.label?V`
                  <span
                      class="label-text"
                      ${fN(e.attributePassthrough?.text)}
                      style=${xM(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:M;return V`
            <label
                class=${bM({disabled:!!e.disabled})}
                ${fN(e.attributePassthrough?.label)}
                style=${xM(e.stylePassthrough?.label)}
                ${mN(`mousedown`,r)}
            >
                ${i}
                <span
                    class="custom-checkbox ${bM({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${xM(e.label||void 0)}
                    aria-checked=${e.value?`true`:`false`}
                    aria-disabled=${e.disabled?`true`:`false`}
                    tabindex=${e.disabled?`-1`:`0`}
                    ${fN(e.attributePassthrough?.[`custom-checkbox`])}
                    style=${xM(e.stylePassthrough?.[`custom-checkbox`])}
                    ${gN(r)}
                >
                    <${J.assign({icon:$P,fitContainer:!0})}
                        ${fN(e.attributePassthrough?.[J.tagName])}
                        style=${xM(e.stylePassthrough?.[J.tagName])}
                    ></${J}>
                </span>
            </label>
        `}}),FL=NF()({tagName:`vira-collapsible-wrapper`,state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expand-on-print":({inputs:e})=>!!e.expandOnPrint},slotNames:[`header`],styles:({hostClasses:e})=>B`
        :host {
            display: flex;
            flex-direction: column;
            max-width: 100%;
            box-sizing: border-box;
        }

        .header-wrapper {
            ${OF};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${lF[`vira-pretty-animation-duration`].value};
            overflow: hidden;

            &.collapsed {
                ${jF}
            }
        }

        @media print {
            :host(.${e[`vira-collapsible-wrapper-expand-on-print`].name})
                .collapsing-element {
                height: auto !important;
                overflow: visible !important;
                transition: none !important;
            }
        }
    `,events:{expandChange:GM()},render({state:e,slotNames:t,updateState:n,dispatch:r,events:i,inputs:a}){let o=a.expanded?B`
                  height: ${e.contentHeight}px;
              `:B`
                  height: 0;
              `;return V`
            <button
                class="header-wrapper"
                ${mN(`click`,()=>{r(new i.expandChange(!a.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>

            <div
                class="collapsing-element ${bM({collapsed:!a.expanded})}"
                style=${o}
                disabled="disabled"
            >
                <div
                    ${SN(({contentRect:e})=>{n({contentHeight:e.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),IL=NF()({tagName:`vira-collapsible-card`,testIds:[`openCaret`],events:{expandToggle:GM()},state({inputs:e}){return{isExpanded:!!e.startExpanded}},hostClasses:{"vira-collapsible-card-expanded":({state:e})=>e.isExpanded,"vira-collapsible-card-expansion-blocked":({inputs:e})=>!!e.blockExpansion,"vira-collapsible-card-card-styles":({inputs:e})=>!e.rawCollapsible},cssVars:{"vira-collapsible-card-content-gap":`16px`},styles:({hostClasses:e,cssVars:t})=>B`
        :host {
            display: inline-flex;
            max-width: 100%;
            box-sizing: border-box;
        }

        ${e[`vira-collapsible-card-expanded`].selector} .open-caret {
            transform: rotate(180deg);
        }

        ${FL} {
            flex-grow: 1;
            max-width: 100%;
        }

        ${e[`vira-collapsible-card-card-styles`].selector} {
            & ${FL} {
                border: 1px solid ${K[`vira-form-border-color`].value};
                border-radius: ${K[`vira-form-wrapper-radius`].value};
            }

            & .card-header {
                padding: 8px 16px;
            }

            & .card-content {
                padding: 8px 16px 8px 16px;
            }
        }

        ${e[`vira-collapsible-card-expansion-blocked`].selector} {
            & .header-wrapper {
                cursor: default;
            }
        }

        .card-header {
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;

            & .header-filler {
                flex-grow: 1;
            }
        }

        .card-content {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: ${t[`vira-collapsible-card-content-gap`].value};
            overflow-x: auto;
            overflow-y: hidden;
        }

        @media print {
            ${FL} {
                border: none !important;
            }

            .card-header {
                padding: 8px 0 !important;
            }

            .card-content {
                overflow: visible !important;
                padding: 8px 0 16px 0 !important;
            }

            .open-caret {
                display: none;
            }
        }
    `,slotNames:[`header`],render({inputs:e,slotNames:t,state:n,updateState:r,testIds:i,dispatch:a,events:o}){e.blockExpansion&&r({isExpanded:!0});let s=n.isExpanded||e.expandOnPrint?V`
                      <div class="card-content">
                          <slot></slot>
                      </div>
                  `:M,c=e.hideHeader?M:V`
                  <div class="card-header">
                      <slot name=${t.header}><div class="header-filler"></div></slot>

                      ${e.blockExpansion?M:V`
                                <${J.assign({icon:OI,fitContainer:!0})}
                                    ${kN(i.openCaret)}
                                    class="open-caret"
                                ></${J}>
                            `}
                  </div>
              `;return V`
            <${FL.assign({expanded:n.isExpanded,expandOnPrint:e.expandOnPrint??!1})}
                ${mN(FL.events.expandChange,t=>{t.stopImmediatePropagation(),!e.blockExpansion&&(r({isExpanded:t.detail}),a(new o.expandToggle(t.detail)))})}
            >
                <div class="header-wrapper" slot=${FL.slotNames.header}>
                    ${c}
                </div>
                ${s}
            </${FL}>
        `}}),LL=NF()({tagName:`vira-error`,cssVars:{"vira-error-font-weight":`bold`},styles:({cssVars:e})=>B`
        :host {
            color: ${K[`vira-form-error-color`].value};
            font-weight: ${e[`vira-error-font-weight`].value};
        }
    `,render(){return V`
            <slot></slot>
        `}});function RL({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split(``).every(e=>RL({input:e,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function zL({value:e,allowed:t,blocked:n}){let r=String(e),i=t?RL({input:r,matcher:t}):!0,a=n?RL({input:r,matcher:n}):!1;return i&&!a}function BL(e){let t=String(e.value);if(!e.value)return{filtered:t,blocked:``};let{filtered:n,blocked:r}=t.split(``).reduce((t,n)=>(zL({...e,value:n})?t.filtered.push(n):t.blocked.push(n),t),{filtered:[],blocked:[]});return{filtered:n.join(``),blocked:r.join(``)}}function VL({inputs:e,previousValue:t,event:n,inputBlockedCallback:r,newValueCallback:i}){let a=aP(n,HTMLInputElement),o=j.hasKey(n,`data`)&&Pc.isString(n.data)||``;if(o){let{blocked:t}=BL({value:o,allowed:e.allowedInputs,blocked:e.blockedInputs});t.length&&r(t)}let s=BL({value:a.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;a.value!==s&&(a.value=s),t!==s&&i(s)}var HL;(function(e){e.Default=`text`,e.Password=`password`,e.Email=`email`,e.Number=`number`})(HL||={});var UL=NF()({tagName:`vira-input`,cssVars:{"vira-input-padding-horizontal":`10px`,"vira-input-padding-vertical":`6px`},styles:({hostClasses:e,cssVars:t})=>B`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${K[`vira-form-foreground-color`].value};
            }

            label {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                gap: 2px;
                width: 100%;
                max-width: 100%;
                cursor: text;

                & .input-label {
                    font-weight: ${K[`vira-form-label-font-weight`].value};
                    text-align: left;
                    flex-shrink: 0;
                    flex-wrap: wrap;
                }
            }

            ${e[`vira-input-fit-text`].selector} {
                width: unset;
            }
            ${e[`vira-input-fit-text`].selector} input {
                flex-grow: 0;
            }
            ${e[`vira-input-fit-text`].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e[`vira-input-fit-text`].selector} .size-span {
                ${OF};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${jF};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e[`vira-input-clear-button-shown`].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${OF};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${K[`vira-form-radius`].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${K[`vira-form-border-color`].value};
            }

            .input-wrapper {
                ${OF};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t[`vira-input-padding-horizontal`].value};
                border-radius: ${K[`vira-form-radius`].value};
                background-color: ${K[`vira-form-background-color`].value};
                /*
                    Border colors are actually applied via the .wrapper-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            .left-side-icon {
                margin-right: calc(${t[`vira-input-padding-horizontal`].value} - 4px);
            }

            input {
                ${OF};
                cursor: text;
                margin: ${t[`vira-input-padding-vertical`].value} 0;
                flex-grow: 1;
                max-width: 100%;
                text-align: inherit;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
                outline: none;

                &:focus:focus-visible:not([disabled]) ~ .focus-border {
                    ${dF({elementBorderSize:`1px`,noNesting:!0})}
                }
            }

            ::selection {
                background: ${K[`vira-form-text-selection-color`].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${K[`vira-form-text-selection-color`].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${K[`vira-form-placeholder-color`].value};
            }

            .suffix {
                font-weight: bold;
                ${jF};
            }

            button {
                ${OF};
                cursor: pointer;
                display: flex;
                transition: color
                    ${lF[`vira-interaction-animation-duration`].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${K[`vira-form-placeholder-color`].value};
            }

            .clear-x-button:hover {
                color: ${K[`vira-form-error-color`].value};
            }

            .clear-x-button:active {
                color: ${K[`vira-form-error-active-color`].value};
            }

            .show-password-button:hover {
                color: ${K[`vira-form-accent-primary-color`].value};
            }

            .show-password-button:active {
                color: ${K[`vira-form-accent-primary-active-color`].value};
            }

            ${e[`vira-input-error`].selector} {
                & .wrapper-border {
                    border-color: ${K[`vira-form-error-color`].value};
                }
            }

            ${e[`vira-input-disabled`].selector} {
                cursor: not-allowed;

                & * {
                    cursor: not-allowed;
                }

                & > * {
                    ${cF};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,events:{valueChange:GM(),inputBlocked:GM()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Zc(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:n,updateState:r,events:i,host:a})=>{let{filtered:o}=BL({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?V`
                  <${J.assign({icon:e.icon})}
                      class="left-side-icon"
                  ></${J}>
              `:M,c=e.fitText?B`
                  width: ${n.forcedInputWidth}px;
              `:M,l=mN(`mousedown`,e=>{let t=aP(e,HTMLElement,{useOriginalTarget:!0}),n=Dc.instanceOf(a.shadowRoot.querySelector(`input`),HTMLInputElement);t!==n&&(e.preventDefault(),n.focus())}),u=e.disableBrowserHelps||e.type===HL.Password,d=V`
            <span class="input-wrapper" ${e.label?M:l}>
                ${s}
                ${TN(!!e.fitText,V`
                        <span
                            class="size-span"
                            ${SN(({contentRect:e})=>{r({forcedInputWidth:e.width})})}
                        >
                            <pre>${o||e.placeholder||M}</pre>
                        </span>
                    `)}

                <input
                    id=${xM(e.label?n.randomId:void 0)}
                    aria-label=${xM(e.label||void 0)}
                    autofocus=${!1}
                    type=${WL(e.type,n.showPassword)}
                    style=${c}
                    autocomplete=${xM(u?`off`:void 0)}
                    autocorrect=${xM(u?`off`:void 0)}
                    autocapitalize=${xM(u?`off`:void 0)}
                    spellcheck=${xM(u?`false`:void 0)}
                    ?disabled=${e.disabled}
                    .value=${o}
                    ${mN(`input`,n=>{VL({inputs:e,previousValue:o,event:n,inputBlockedCallback(e){t(new i.inputBlocked(e))},newValueCallback(e){t(new i.valueChange(e))}})})}
                    placeholder=${xM(e.placeholder||void 0)}
                    ${fN(e.attributePassthrough)}
                />

                ${TN(!!(e.showClearButton&&e.value),V`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${mN(`mousedown`,e=>{e.stopImmediatePropagation(),e.preventDefault()})}
                            ${mN(`click`,()=>{e.disabled||t(new i.valueChange(``))})}
                        >
                            <${J.assign({icon:HI})}></${J}>
                        </button>
                    `)}
                ${TN(e.type===HL.Password,V`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${mN(`mousedown`,e=>{e.stopImmediatePropagation(),e.preventDefault()})}
                            ${mN(`click`,()=>{r({showPassword:!n.showPassword})})}
                        >
                            <${J.assign({icon:n.showPassword?ZI:XI})}></${J}>
                        </button>
                    `)}
                ${TN(!!e.suffix,V`
                        <div class="suffix">${e.suffix}</div>
                    `)}

                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>
            </span>
        `;return e.label?V`
                <label for=${n.randomId} ${l}>
                    <span class="input-label">${e.label}</span>
                    ${d}
                </label>
            `:d}});function WL(e,t){return e===HL.Password&&t?HL.Default:e||HL.Default}var GL=NF()({tagName:`vira-select`,state(){return{randomId:Zc(32),cleanupListeners:void 0}},events:{valueChange:GM()},cssVars:{"vira-select-padding-horizontal":`10px`,"vira-select-padding-vertical":`6px`,"vira-select-icon-padding":`44px`},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError,"vira-select-not-raw":({inputs:e})=>!e.rawSelect},styles:({hostClasses:e,cssVars:t})=>B`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${K[`vira-form-foreground-color`].value};
        }

        .select-wrapper {
            ${OF};
            max-width: 100%;
            flex-grow: 1;
            display: inline-flex;
            box-sizing: border-box;
            align-items: center;
            position: relative;
            cursor: pointer;

            & select {
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                color: inherit;
                font: inherit;
                outline: none;
                width: 100%;
                border: none;
                background: none;
                border-radius: inherit;
                cursor: pointer;
                /* Prevent the left pixel of text getting cut off. */
                padding-left: 0.5px;
                padding-right: 28px;
                overflow: hidden;
                text-overflow: ellipsis;

                &.placeholder {
                    color: ${K[`vira-form-placeholder-color`].value};
                }

                &.with-icon {
                    padding-left: ${t[`vira-select-icon-padding`].value};
                }
            }

            & ${J} {
                position: absolute;
                pointer-events: none;

                &.trigger-icon {
                    transform: rotate(180deg);
                    right: 3px;
                }

                &.input-icon {
                    left: 10px;
                }
            }
        }

        .trigger-icon {
            width: 24px;
            aspect-ratio: 1;
        }

        ${e[`vira-select-not-raw`].selector} {
            .select-wrapper {
                border-radius: ${K[`vira-form-radius`].value};
                color: ${K[`vira-form-foreground-color`].value};
                background-color: ${K[`vira-form-background-color`].value};
                /*
                    Border colors are actually applied via the .wrapper-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                cursor: pointer;

                & select {
                    padding: ${t[`vira-select-padding-vertical`].value} 31px
                        ${t[`vira-select-padding-vertical`].value}
                        ${t[`vira-select-padding-horizontal`].value};

                    &:focus:focus-visible:not([aria-disabled='true']) ~ .focus-border {
                        ${dF({elementBorderSize:`1px`,noNesting:!0})}
                    }
                }

                & .border-style {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: ${K[`vira-form-radius`].value};
                    z-index: 0;
                    pointer-events: none;
                }

                & .wrapper-border {
                    top: -1px;
                    left: -1px;
                    border: 1px solid ${K[`vira-form-border-color`].value};
                    transition: border
                        ${lF[`vira-interaction-animation-duration`].value};
                }
            }
        }

        label {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 2px;
            width: 100%;
            max-width: 100%;

            & .select-label {
                font-weight: ${K[`vira-form-label-font-weight`].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }

        ${e[`vira-select-disabled`].selector} {
            cursor: not-allowed;

            & select,
            & .wrapper-border {
                ${cF}
            }
            ${J} {
                ${cF}
            }
            & * {
                cursor: not-allowed;
            }
        }

        :host(.${e[`vira-select-not-raw`].name}.${e[`vira-select-error`].name})
            .wrapper-border {
            border-color: ${K[`vira-form-error-color`].value};
        }
    `,init({state:e,updateState:t,host:n}){e.cleanupListeners?.();function r(){return Dc.instanceOf(n.shadowRoot.querySelector(`select`),HTMLSelectElement)}let i=[Hl(n,`mousedown`,e=>{let t=r();e.composedPath().includes(t)||(e.preventDefault(),e.stopPropagation(),t.showPicker&&t.showPicker())}),Hl(n,`click`,e=>{let t=r();e.composedPath().includes(t)||(e.preventDefault(),e.stopPropagation(),t.showPicker&&t.showPicker())})];t({cleanupListeners:()=>{i.forEach(e=>e())}})},cleanup({state:e,updateState:t}){e.cleanupListeners?.(),t({cleanupListeners:void 0})},render({inputs:e,state:t,dispatch:n,events:r}){let i=e.value||void 0,a=e.placeholder||i==null?V`
                      <option value="" disabled ?selected=${i==null}>
                          ${e.placeholder}
                      </option>
                  `:M,o=V`
            <span class="select-wrapper">
                <select
                    .value=${xM(i)}
                    class=${bM({placeholder:!i&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${xM(e.label?t.randomId:void 0)}
                    aria-label=${xM(e.label||void 0)}
                    aria-disabled=${xM(e.disabled?`true`:void 0)}
                    ${mN(`input`,t=>{let a=aP(t,HTMLSelectElement),o=a.value;a.value!==i&&(a.selectedIndex=e.options.findIndex(e=>e.value===i)),n(new r.valueChange(o))})}
                    ${fN(e.attributePassthrough?.select)}
                >
                    ${a}
                    ${e.options.map(e=>V`
                            <option
                                ?selected=${e.value===i}
                                aria-label=${e.label}
                                ?disabled=${e.disabled}
                                value=${e.value}
                            >
                                ${e.label}
                            </option>
                        `)}
                </select>
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <select> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>

                <${J.assign({icon:e.icon})}
                    class="input-icon"
                ></${J}>
                <${J.assign({icon:OI})}
                    class="trigger-icon"
                ></${J}>
            </span>
        `;return e.label?V`
                <label for=${t.randomId} ${fN(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${o}
                </label>
            `:o}}),KL;(function(e){e.a98=`a98`,e.cubehelix=`cubehelix`,e.dlab=`dlab`,e.dlch=`dlch`,e.hsi=`hsi`,e.hsl=`hsl`,e.hsv=`hsv`,e.hwb=`hwb`,e.itp=`itp`,e.jab=`jab`,e.jch=`jch`,e.lab=`lab`,e.lab65=`lab65`,e.lch=`lch`,e.lch65=`lch65`,e.lchuv=`lchuv`,e.lrgb=`lrgb`,e.luv=`luv`,e.okhsl=`okhsl`,e.okhsv=`okhsv`,e.oklab=`oklab`,e.oklch=`oklch`,e.p3=`p3`,e.prophoto=`prophoto`,e.rec2020=`rec2020`,e.rgb=`rgb`,e.xyb=`xyb`,e.xyz50=`xyz50`,e.xyz65=`xyz65`,e.yiq=`yiq`})(KL||={});var qL={rgb:{coords:{r:{min:0,max:255,factor:255},g:{min:0,max:255,factor:255},b:{min:0,max:255,factor:255}},colorSpace:`rgb`},hex:{coords:{r:{min:0,max:255,factor:255,radix:16,radixPad:2},g:{min:0,max:255,factor:255,radix:16,radixPad:2},b:{min:0,max:255,factor:255,radix:16,radixPad:2}},conversionFormat:KL.rgb,rawSyntax:`hexString`,colorSpace:`rgb`},hsl:{coords:{h:{min:0,max:360},s:{min:0,max:100,factor:100,digits:1},l:{min:0,max:100,factor:100,digits:1}},colorSpace:`rgb`},hwb:{coords:{h:{min:0,max:360},w:{min:0,max:100,factor:100,digits:1},b:{min:0,max:100,factor:100,digits:1}},colorSpace:`rgb`},lab:{coords:{l:{min:0,max:100,digits:1},a:{min:-128,max:127},b:{min:-128,max:127}},colorSpace:`lab`},lch:{coords:{l:{min:0,max:100,digits:1},c:{min:0,max:230},h:{min:0,max:360}},colorSpace:`lab`},oklab:{coords:{l:{min:0,max:1,digits:3},a:{min:-.5,max:.5,digits:3},b:{min:-.5,max:.5,digits:3}},colorSpace:`oklab`},oklch:{coords:{l:{min:0,max:1,digits:3},c:{min:0,max:.4,digits:3},h:{min:0,max:360,digits:1}},colorSpace:`oklab`}},JL=Dl(qL,e=>e),YL={...JL,name:`name`,hexString:`hexString`},XL=Dl(qL,(e,t)=>{let n=j.isEnumValue(e,KL)&&j.isEnumValue(e,JL)?e:`conversionFormat`in t&&t.conversionFormat&&j.isEnumValue(t.conversionFormat,KL)&&j.isEnumValue(t.conversionFormat,JL)?t.conversionFormat:void 0;return Mc.isTruthy(n,`Invalid conversion format for color format '${e}' ${v(t)}.`),{...t,colorFormat:e,conversionFormat:n,rawSyntax:Dc.isEnumValue(`rawSyntax`in t&&t.rawSyntax?t.rawSyntax:e,YL)}});Kc(Al(qL),e=>({key:e.colorSpace,value:e.colorSpace}),{useRequired:!0}),Uc(XL).reduce((e,[t,n])=>(Hc(e,n.colorSpace,()=>({}))[t]=n,e),{});function ZL(e){return e.startsWith(`rgb`)?YL.rgb:e.startsWith(`hsl`)?YL.hsl:e.startsWith(`hwb`)?YL.hwb:e.startsWith(`oklab`)?YL.oklab:e.startsWith(`oklch`)?YL.oklch:e.startsWith(`lab`)?YL.lab:e.startsWith(`lch`)?YL.lch:e.startsWith(`#`)?YL.hexString:YL.name}var QL={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(let e in QL)Object.freeze(QL[e]);var $L=Object.freeze(QL),eR=Object.keys($L).reduce((e,t)=>t.length>e.length?t:e),tR=Ol(Dl($L,(e,t)=>Gc(Object.entries($L),([e])=>e,(n,[,r])=>n===e?!1:j.deepEquals(r,t))),(e,t)=>!!t.length),nR=Object.entries(tR).reduce((e,t)=>{let n=[e[0],...e[1]].join(`, `);return[t[0],...t[1]].join(`, `).length>n.length?t:e}).reduce((e,t)=>j.isArray(t)?[...e,...t]:[...e,t],[]),rR=Math.max(eR.length,nR.length+(nR.length-1)*2),iR=(e,t)=>{if(typeof e==`number`){if(t===3)return{mode:`rgb`,r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(t===4)return{mode:`rgb`,r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(t===6)return{mode:`rgb`,r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(t===8)return{mode:`rgb`,r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},aR={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oR=e=>iR(aR[e.toLowerCase()],6),sR=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,cR=e=>{let t;return(t=e.match(sR))?iR(parseInt(t[1],16),t[1].length):void 0},lR=`([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)`;`${lR}`;var uR=`${lR}%`;`${lR}`;var dR=`(?:${lR}%|${lR})`,fR=`(?:${lR}%|${lR}|none)`,pR=`(?:${lR}(deg|grad|rad|turn)|${lR})`;`${lR}${lR}`;var mR=`\\s*,\\s*`;RegExp(`^`+fR+`$`);var hR=RegExp(`^rgba?\\(\\s*${lR}${mR}${lR}${mR}${lR}\\s*(?:,\\s*${dR}\\s*)?\\)$`),gR=RegExp(`^rgba?\\(\\s*${uR}${mR}${uR}${mR}${uR}\\s*(?:,\\s*${dR}\\s*)?\\)$`),_R=e=>{let t={mode:`rgb`},n;if(n=e.match(hR))n[1]!==void 0&&(t.r=n[1]/255),n[2]!==void 0&&(t.g=n[2]/255),n[3]!==void 0&&(t.b=n[3]/255);else if(n=e.match(gR))n[1]!==void 0&&(t.r=n[1]/100),n[2]!==void 0&&(t.g=n[2]/100),n[3]!==void 0&&(t.b=n[3]/100);else return;return n[4]===void 0?n[5]!==void 0&&(t.alpha=Math.max(0,Math.min(1,+n[5]))):t.alpha=Math.max(0,Math.min(1,n[4]/100)),t},vR=(e,t)=>e===void 0?void 0:typeof e==`object`?e.mode===void 0?t?{...e,mode:t}:void 0:e:VR(e),yR=(e=`rgb`)=>t=>(t=vR(t,e))===void 0?void 0:t.mode===e?t:bR[t.mode][e]?bR[t.mode][e](t):e===`rgb`?bR[t.mode].rgb(t):bR.rgb[e](bR[t.mode].rgb(t)),bR={},xR={},SR=[],CR={},wR=e=>e,TR=e=>(bR[e.mode]={...bR[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(t=>{bR[t]||(bR[t]={}),bR[t][e.mode]=e.fromMode[t]}),e.ranges||={},e.difference||={},e.channels.forEach(t=>{if(e.ranges[t]===void 0&&(e.ranges[t]=[0,1]),!e.interpolate[t])throw Error(`Missing interpolator for: ${t}`);typeof e.interpolate[t]==`function`&&(e.interpolate[t]={use:e.interpolate[t]}),e.interpolate[t].fixup||(e.interpolate[t].fixup=wR)}),xR[e.mode]=e,(e.parse||[]).forEach(t=>{DR(t,e.mode)}),yR(e.mode)),ER=e=>xR[e],DR=(e,t)=>{if(typeof e==`string`){if(!t)throw Error(`'mode' required when 'parser' is a string`);CR[e]=t}else typeof e==`function`&&SR.indexOf(e)<0&&SR.push(e)},OR=/[^\x00-\x7F]|[a-zA-Z_]/,kR=/[^\x00-\x7F]|[-\w]/,Y={Function:`function`,Ident:`ident`,Number:`number`,Percentage:`percentage`,ParenClose:`)`,None:`none`,Hue:`hue`,Alpha:`alpha`},X=0;function AR(e){let t=e[X],n=e[X+1];return t===`-`||t===`+`?/\d/.test(n)||n===`.`&&/\d/.test(e[X+2]):t===`.`?/\d/.test(n):/\d/.test(t)}function jR(e){if(X>=e.length)return!1;let t=e[X];if(OR.test(t))return!0;if(t===`-`){if(e.length-X<2)return!1;let t=e[X+1];return!!(t===`-`||OR.test(t))}return!1}var MR={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function NR(e){let t=``;if((e[X]===`-`||e[X]===`+`)&&(t+=e[X++]),t+=PR(e),e[X]===`.`&&/\d/.test(e[X+1])&&(t+=e[X++]+PR(e)),(e[X]===`e`||e[X]===`E`)&&((e[X+1]===`-`||e[X+1]===`+`)&&/\d/.test(e[X+2])?t+=e[X++]+e[X++]+PR(e):/\d/.test(e[X+1])&&(t+=e[X++]+PR(e))),jR(e)){let n=FR(e);return n===`deg`||n===`rad`||n===`turn`||n===`grad`?{type:Y.Hue,value:t*MR[n]}:void 0}return e[X]===`%`?(X++,{type:Y.Percentage,value:+t}):{type:Y.Number,value:+t}}function PR(e){let t=``;for(;/\d/.test(e[X]);)t+=e[X++];return t}function FR(e){let t=``;for(;X<e.length&&kR.test(e[X]);)t+=e[X++];return t}function IR(e){let t=FR(e);return e[X]===`(`?(X++,{type:Y.Function,value:t}):t===`none`?{type:Y.None,value:void 0}:{type:Y.Ident,value:t}}function LR(e=``){let t=e.trim(),n=[],r;for(X=0;X<t.length;){if(r=t[X++],r===`
`||r===`	`||r===` `){for(;X<t.length&&(t[X]===`
`||t[X]===`	`||t[X]===` `);)X++;continue}if(r===`,`)return;if(r===`)`){n.push({type:Y.ParenClose});continue}if(r===`+`){if(X--,AR(t)){n.push(NR(t));continue}return}if(r===`-`){if(X--,AR(t)){n.push(NR(t));continue}if(jR(t)){n.push({type:Y.Ident,value:FR(t)});continue}return}if(r===`.`){if(X--,AR(t)){n.push(NR(t));continue}return}if(r===`/`){for(;X<t.length&&(t[X]===`
`||t[X]===`	`||t[X]===` `);)X++;let e;if(AR(t)&&(e=NR(t),e.type!==Y.Hue)){n.push({type:Y.Alpha,value:e});continue}if(jR(t)&&FR(t)===`none`){n.push({type:Y.Alpha,value:{type:Y.None,value:void 0}});continue}return}if(/\d/.test(r)){X--,n.push(NR(t));continue}if(OR.test(r)){X--,n.push(IR(t));continue}return}return n}function RR(e){e._i=0;let t=e[e._i++];if(!t||t.type!==Y.Function||t.value!==`color`||(t=e[e._i++],t.type!==Y.Ident))return;let n=CR[t.value];if(!n)return;let r={mode:n},i=zR(e,!1);if(!i)return;let a=ER(n).channels;for(let e=0,t,n;e<a.length;e++)t=i[e],n=a[e],t.type!==Y.None&&(r[n]=t.type===Y.Number?t.value:t.value/100,n===`alpha`&&(r[n]=Math.max(0,Math.min(1,r[n]))));return r}function zR(e,t){let n=[],r;for(;e._i<e.length;){if(r=e[e._i++],r.type===Y.None||r.type===Y.Number||r.type===Y.Alpha||r.type===Y.Percentage||t&&r.type===Y.Hue){n.push(r);continue}if(r.type===Y.ParenClose){if(e._i<e.length)return;continue}return}if(!(n.length<3||n.length>4)){if(n.length===4){if(n[3].type!==Y.Alpha)return;n[3]=n[3].value}return n.length===3&&n.push({type:Y.None,value:void 0}),n.every(e=>e.type!==Y.Alpha)?n:void 0}}function BR(e,t){e._i=0;let n=e[e._i++];if(!n||n.type!==Y.Function)return;let r=zR(e,t);if(r)return r.unshift(n.value),r}var VR=e=>{if(typeof e!=`string`)return;let t=LR(e),n=t?BR(t,!0):void 0,r,i=0,a=SR.length;for(;i<a;)if((r=SR[i++](e,n))!==void 0)return r;return t?RR(t):void 0};function HR(e,t){if(!t||t[0]!==`rgb`&&t[0]!==`rgba`)return;let n={mode:`rgb`},[,r,i,a,o]=t;if(!(r.type===Y.Hue||i.type===Y.Hue||a.type===Y.Hue))return r.type!==Y.None&&(n.r=r.type===Y.Number?r.value/255:r.value/100),i.type!==Y.None&&(n.g=i.type===Y.Number?i.value/255:i.value/100),a.type!==Y.None&&(n.b=a.type===Y.Number?a.value/255:a.value/100),o.type!==Y.None&&(n.alpha=Math.min(1,Math.max(0,o.type===Y.Number?o.value:o.value/100))),n}var UR=e=>e===`transparent`?{mode:`rgb`,r:0,g:0,b:0,alpha:0}:void 0,WR=(e,t,n)=>e+n*(t-e),GR=e=>{let t=[];for(let n=0;n<e.length-1;n++){let r=e[n],i=e[n+1];r===void 0&&i===void 0?t.push(void 0):r!==void 0&&i!==void 0?t.push([r,i]):t.push(r===void 0?[i,i]:[r,r])}return t},Z=(e=>t=>{let n=GR(t);return t=>{let r=t*n.length,i=t>=1?n.length-1:Math.max(Math.floor(r),0),a=n[i];return a===void 0?void 0:e(a[0],a[1],r-i)}})(WR),KR=e=>{let t=!1,n=e.map(e=>e===void 0?1:(t=!0,e));return t?n:e},qR={mode:`rgb`,channels:[`r`,`g`,`b`,`alpha`],parse:[HR,cR,_R,oR,UR,`srgb`],serialize:`srgb`,interpolate:{r:Z,g:Z,b:Z,alpha:{use:Z,fixup:KR}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},JR=(e=0)=>Math.abs(e)**(563/256)*Math.sign(e),YR=e=>{let t=JR(e.r),n=JR(e.g),r=JR(e.b),i={mode:`xyz65`,x:.5766690429101305*t+.1855582379065463*n+.1882286462349947*r,y:.297344975250536*t+.6273635662554661*n+.0752914584939979*r,z:.0270313613864123*t+.0706888525358272*n+.9913375368376386*r};return e.alpha!==void 0&&(i.alpha=e.alpha),i},XR=e=>Math.abs(e)**(256/563)*Math.sign(e),ZR=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`a98`,r:XR(e*2.0415879038107465-t*.5650069742788597-.3447313507783297*n),g:XR(e*-.9692436362808798+t*1.8759675015077206+.0415550574071756*n),b:XR(e*.0134442806320312-t*.1183623922310184+1.0151749943912058*n)};return r!==void 0&&(i.alpha=r),i},QR=(e=0)=>{let t=Math.abs(e);return t<=.04045?e/12.92:(Math.sign(e)||1)*((t+.055)/1.055)**2.4},$R=({r:e,g:t,b:n,alpha:r})=>{let i={mode:`lrgb`,r:QR(e),g:QR(t),b:QR(n)};return r!==void 0&&(i.alpha=r),i},ez=e=>{let{r:t,g:n,b:r,alpha:i}=$R(e),a={mode:`xyz65`,x:.4123907992659593*t+.357584339383878*n+.1804807884018343*r,y:.2126390058715102*t+.715168678767756*n+.0721923153607337*r,z:.0193308187155918*t+.119194779794626*n+.9505321522496607*r};return i!==void 0&&(a.alpha=i),a},tz=(e=0)=>{let t=Math.abs(e);return t>.0031308?(Math.sign(e)||1)*(1.055*t**(1/2.4)-.055):e*12.92},nz=({r:e,g:t,b:n,alpha:r},i=`rgb`)=>{let a={mode:i,r:tz(e),g:tz(t),b:tz(n)};return r!==void 0&&(a.alpha=r),a},rz=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=nz({r:e*3.2409699419045226-t*1.537383177570094-.4986107602930034*n,g:e*-.9692436362808796+t*1.8759675015077204+.0415550574071756*n,b:e*.0556300796969936-t*.2039769588889765+1.0569715142428784*n});return r!==void 0&&(i.alpha=r),i},iz={...qR,mode:`a98`,parse:[`a98-rgb`],serialize:`a98-rgb`,fromMode:{rgb:e=>ZR(ez(e)),xyz65:ZR},toMode:{rgb:e=>rz(YR(e)),xyz65:YR}},az=e=>(e%=360)<0?e+360:e,oz=(e,t)=>e.map((n,r,i)=>{if(n===void 0)return n;let a=az(n);return r===0||e[r-1]===void 0?a:t(a-az(i[r-1]))}).reduce((e,t)=>!e.length||t===void 0||e[e.length-1]===void 0?(e.push(t),e):(e.push(t+e[e.length-1]),e),[]),sz=e=>oz(e,e=>Math.abs(e)<=180?e:e-360*Math.sign(e)),cz=[-.14861,1.78277,-.29227,-.90649,1.97294,0],lz=Math.PI/180,uz=180/Math.PI,dz=cz[3]*cz[4],fz=cz[1]*cz[4],pz=cz[1]*cz[2]-cz[0]*cz[3],mz=({r:e,g:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(pz*n+e*dz-t*fz)/(pz+dz-fz),a=n-i,o=(cz[4]*(t-i)-cz[2]*a)/cz[3],s={mode:`cubehelix`,l:i,s:i===0||i===1?void 0:Math.sqrt(a*a+o*o)/(cz[4]*i*(1-i))};return s.s&&(s.h=Math.atan2(o,a)*uz-120),r!==void 0&&(s.alpha=r),s},hz=({h:e,s:t,l:n,alpha:r})=>{let i={mode:`rgb`};e=(e===void 0?0:e+120)*lz,n===void 0&&(n=0);let a=t===void 0?0:t*n*(1-n),o=Math.cos(e),s=Math.sin(e);return i.r=n+a*(cz[0]*o+cz[1]*s),i.g=n+a*(cz[2]*o+cz[3]*s),i.b=n+a*(cz[4]*o+cz[5]*s),r!==void 0&&(i.alpha=r),i},gz=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.s||!t.s)return 0;let n=az(e.h),r=az(t.h),i=Math.sin((r-n+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*t.s)*i},_z=(e,t)=>{if(e.h===void 0||t.h===void 0)return 0;let n=az(e.h),r=az(t.h);return Math.abs(r-n)>180?n-(r-360*Math.sign(r-n)):r-n},vz=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.c||!t.c)return 0;let n=az(e.h),r=az(t.h),i=Math.sin((r-n+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*t.c)*i},yz=(e=`rgb`,t=[1,1,1,0])=>{let n=ER(e),r=n.channels,i=n.difference,a=yR(e);return(e,n)=>{let o=a(e),s=a(n);return Math.sqrt(r.reduce((e,n,r)=>{let a=i[n]?i[n](o,s):o[n]-s[n];return e+(t[r]||0)*(isNaN(a)?0:a)**2},0))}},bz=e=>{let t=e.reduce((e,t)=>{if(t!==void 0){let n=t*Math.PI/180;e.sin+=Math.sin(n),e.cos+=Math.cos(n)}return e},{sin:0,cos:0}),n=Math.atan2(t.sin,t.cos)*180/Math.PI;return n<0?360+n:n},xz={mode:`cubehelix`,channels:[`h`,`s`,`l`,`alpha`],parse:[`--cubehelix`],serialize:`--cubehelix`,ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:mz},toMode:{rgb:hz},interpolate:{h:{use:Z,fixup:sz},s:Z,l:Z,alpha:{use:Z,fixup:KR}},difference:{h:gz},average:{h:bz}},Sz=({l:e,a:t,b:n,alpha:r},i=`lch`)=>{t===void 0&&(t=0),n===void 0&&(n=0);let a=Math.sqrt(t*t+n*n),o={mode:i,l:e,c:a};return a&&(o.h=az(Math.atan2(n,t)*180/Math.PI)),r!==void 0&&(o.alpha=r),o},Cz=({l:e,c:t,h:n,alpha:r},i=`lab`)=>{n===void 0&&(n=0);let a={mode:i,l:e,a:t?t*Math.cos(n/180*Math.PI):0,b:t?t*Math.sin(n/180*Math.PI):0};return r!==void 0&&(a.alpha=r),a},wz=29**3/3**3,Tz=6**3/29**3,Ez={X:.3457/.3585,Y:1,Z:.2958/.3585},Dz={X:.3127/.329,Y:1,Z:.3583/.329},Oz=e=>e**3>Tz?e**3:(116*e-16)/wz,kz=({l:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(e+16)/116,a=t/500+i,o=i-n/200,s={mode:`xyz65`,x:Oz(a)*Dz.X,y:Oz(i)*Dz.Y,z:Oz(o)*Dz.Z};return r!==void 0&&(s.alpha=r),s},Az=e=>rz(kz(e)),jz=e=>e>Tz?Math.cbrt(e):(wz*e+16)/116,Mz=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=jz(e/Dz.X),a=jz(t/Dz.Y),o=jz(n/Dz.Z),s={mode:`lab65`,l:116*a-16,a:500*(i-a),b:200*(a-o)};return r!==void 0&&(s.alpha=r),s},Nz=e=>{let t=Mz(ez(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},Pz=26/180*Math.PI,Fz=Math.cos(Pz),Iz=Math.sin(Pz),Lz=100/Math.log(139/100),Rz=({l:e,c:t,h:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`lab65`,l:(Math.exp(e*1/Lz)-1)/.0039},a=(Math.exp(.0435*t*1*1)-1)/.075,o=a*Math.cos(n/180*Math.PI-Pz),s=a*Math.sin(n/180*Math.PI-Pz);return i.a=o*Fz-s/.83*Iz,i.b=o*Iz+s/.83*Fz,r!==void 0&&(i.alpha=r),i},zz=({l:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=t*Fz+n*Iz,a=.83*(n*Fz-t*Iz),o=Math.sqrt(i*i+a*a),s={mode:`dlch`,l:Lz/1*Math.log(1+.0039*e),c:Math.log(1+.075*o)/(.0435*1*1)};return s.c&&(s.h=az((Math.atan2(a,i)+Pz)/Math.PI*180)),r!==void 0&&(s.alpha=r),s},Bz=e=>Rz(Sz(e,`dlch`)),Vz=e=>Cz(zz(e),`dlab`),Hz={mode:`dlab`,parse:[`--din99o-lab`],serialize:`--din99o-lab`,toMode:{lab65:Bz,rgb:e=>Az(Bz(e))},fromMode:{lab65:Vz,rgb:e=>Vz(Nz(e))},channels:[`l`,`a`,`b`,`alpha`],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:Z,a:Z,b:Z,alpha:{use:Z,fixup:KR}}},Uz={mode:`dlch`,parse:[`--din99o-lch`],serialize:`--din99o-lch`,toMode:{lab65:Rz,dlab:e=>Cz(e,`dlab`),rgb:e=>Az(Rz(e))},fromMode:{lab65:zz,dlab:e=>Sz(e,`dlch`),rgb:e=>zz(Nz(e))},channels:[`l`,`c`,`h`,`alpha`],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:Z,c:Z,h:{use:Z,fixup:sz},alpha:{use:Z,fixup:KR}},difference:{h:vz},average:{h:bz}};function Wz({h:e,s:t,i:n,alpha:r}){e=az(e===void 0?0:e),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.abs(e/60%2-1),a;switch(Math.floor(e/60)){case 0:a={r:n*(1+t*(3/(2-i)-1)),g:n*(1+t*(3*(1-i)/(2-i)-1)),b:n*(1-t)};break;case 1:a={r:n*(1+t*(3*(1-i)/(2-i)-1)),g:n*(1+t*(3/(2-i)-1)),b:n*(1-t)};break;case 2:a={r:n*(1-t),g:n*(1+t*(3/(2-i)-1)),b:n*(1+t*(3*(1-i)/(2-i)-1))};break;case 3:a={r:n*(1-t),g:n*(1+t*(3*(1-i)/(2-i)-1)),b:n*(1+t*(3/(2-i)-1))};break;case 4:a={r:n*(1+t*(3*(1-i)/(2-i)-1)),g:n*(1-t),b:n*(1+t*(3/(2-i)-1))};break;case 5:a={r:n*(1+t*(3/(2-i)-1)),g:n*(1-t),b:n*(1+t*(3*(1-i)/(2-i)-1))};break;default:a={r:n*(1-t),g:n*(1-t),b:n*(1-t)}}return a.mode=`rgb`,r!==void 0&&(a.alpha=r),a}function Gz({r:e,g:t,b:n,alpha:r}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.max(e,t,n),a=Math.min(e,t,n),o={mode:`hsi`,s:e+t+n===0?0:1-3*a/(e+t+n),i:(e+t+n)/3};return i-a!==0&&(o.h=(i===e?(t-n)/(i-a)+(t<n)*6:i===t?(n-e)/(i-a)+2:(e-t)/(i-a)+4)*60),r!==void 0&&(o.alpha=r),o}var Kz={mode:`hsi`,toMode:{rgb:Wz},parse:[`--hsi`],serialize:`--hsi`,fromMode:{rgb:Gz},channels:[`h`,`s`,`i`,`alpha`],ranges:{h:[0,360]},gamut:`rgb`,interpolate:{h:{use:Z,fixup:sz},s:Z,i:Z,alpha:{use:Z,fixup:KR}},difference:{h:gz},average:{h:bz}};function qz({h:e,s:t,l:n,alpha:r}){e=az(e===void 0?0:e),t===void 0&&(t=0),n===void 0&&(n=0);let i=n+t*(n<.5?n:1-n),a=i-(i-n)*2*Math.abs(e/60%2-1),o;switch(Math.floor(e/60)){case 0:o={r:i,g:a,b:2*n-i};break;case 1:o={r:a,g:i,b:2*n-i};break;case 2:o={r:2*n-i,g:i,b:a};break;case 3:o={r:2*n-i,g:a,b:i};break;case 4:o={r:a,g:2*n-i,b:i};break;case 5:o={r:i,g:2*n-i,b:a};break;default:o={r:2*n-i,g:2*n-i,b:2*n-i}}return o.mode=`rgb`,r!==void 0&&(o.alpha=r),o}function Jz({r:e,g:t,b:n,alpha:r}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.max(e,t,n),a=Math.min(e,t,n),o={mode:`hsl`,s:i===a?0:(i-a)/(1-Math.abs(i+a-1)),l:.5*(i+a)};return i-a!==0&&(o.h=(i===e?(t-n)/(i-a)+(t<n)*6:i===t?(n-e)/(i-a)+2:(e-t)/(i-a)+4)*60),r!==void 0&&(o.alpha=r),o}var Yz=(e,t)=>{switch(t){case`deg`:return+e;case`rad`:return e/Math.PI*180;case`grad`:return e/10*9;case`turn`:return e*360}},Xz=RegExp(`^hsla?\\(\\s*${pR}${mR}${uR}${mR}${uR}\\s*(?:,\\s*${dR}\\s*)?\\)$`),Zz=e=>{let t=e.match(Xz);if(!t)return;let n={mode:`hsl`};return t[3]===void 0?t[1]!==void 0&&t[2]!==void 0&&(n.h=Yz(t[1],t[2])):n.h=+t[3],t[4]!==void 0&&(n.s=Math.min(Math.max(0,t[4]/100),1)),t[5]!==void 0&&(n.l=Math.min(Math.max(0,t[5]/100),1)),t[6]===void 0?t[7]!==void 0&&(n.alpha=Math.max(0,Math.min(1,+t[7]))):n.alpha=Math.max(0,Math.min(1,t[6]/100)),n};function Qz(e,t){if(!t||t[0]!==`hsl`&&t[0]!==`hsla`)return;let n={mode:`hsl`},[,r,i,a,o]=t;if(r.type!==Y.None){if(r.type===Y.Percentage)return;n.h=r.value}if(i.type!==Y.None){if(i.type===Y.Hue)return;n.s=i.value/100}if(a.type!==Y.None){if(a.type===Y.Hue)return;n.l=a.value/100}return o.type!==Y.None&&(n.alpha=Math.min(1,Math.max(0,o.type===Y.Number?o.value:o.value/100))),n}var $z={mode:`hsl`,toMode:{rgb:qz},fromMode:{rgb:Jz},channels:[`h`,`s`,`l`,`alpha`],ranges:{h:[0,360]},gamut:`rgb`,parse:[Qz,Zz],serialize:e=>`hsl(${e.h===void 0?`none`:e.h} ${e.s===void 0?`none`:e.s*100+`%`} ${e.l===void 0?`none`:e.l*100+`%`}${e.alpha<1?` / ${e.alpha}`:``})`,interpolate:{h:{use:Z,fixup:sz},s:Z,l:Z,alpha:{use:Z,fixup:KR}},difference:{h:gz},average:{h:bz}};function eB({h:e,s:t,v:n,alpha:r}){e=az(e===void 0?0:e),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.abs(e/60%2-1),a;switch(Math.floor(e/60)){case 0:a={r:n,g:n*(1-t*i),b:n*(1-t)};break;case 1:a={r:n*(1-t*i),g:n,b:n*(1-t)};break;case 2:a={r:n*(1-t),g:n,b:n*(1-t*i)};break;case 3:a={r:n*(1-t),g:n*(1-t*i),b:n};break;case 4:a={r:n*(1-t*i),g:n*(1-t),b:n};break;case 5:a={r:n,g:n*(1-t),b:n*(1-t*i)};break;default:a={r:n*(1-t),g:n*(1-t),b:n*(1-t)}}return a.mode=`rgb`,r!==void 0&&(a.alpha=r),a}function tB({r:e,g:t,b:n,alpha:r}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.max(e,t,n),a=Math.min(e,t,n),o={mode:`hsv`,s:i===0?0:1-a/i,v:i};return i-a!==0&&(o.h=(i===e?(t-n)/(i-a)+(t<n)*6:i===t?(n-e)/(i-a)+2:(e-t)/(i-a)+4)*60),r!==void 0&&(o.alpha=r),o}var nB={mode:`hsv`,toMode:{rgb:eB},parse:[`--hsv`],serialize:`--hsv`,fromMode:{rgb:tB},channels:[`h`,`s`,`v`,`alpha`],ranges:{h:[0,360]},gamut:`rgb`,interpolate:{h:{use:Z,fixup:sz},s:Z,v:Z,alpha:{use:Z,fixup:KR}},difference:{h:gz},average:{h:bz}};function rB({h:e,w:t,b:n,alpha:r}){if(t===void 0&&(t=0),n===void 0&&(n=0),t+n>1){let e=t+n;t/=e,n/=e}return eB({h:e,s:n===1?1:1-t/(1-n),v:1-n,alpha:r})}function iB(e){let t=tB(e);if(t===void 0)return;let n=t.s===void 0?0:t.s,r=t.v===void 0?0:t.v,i={mode:`hwb`,w:(1-n)*r,b:1-r};return t.h!==void 0&&(i.h=t.h),t.alpha!==void 0&&(i.alpha=t.alpha),i}function aB(e,t){if(!t||t[0]!==`hwb`)return;let n={mode:`hwb`},[,r,i,a,o]=t;if(r.type!==Y.None){if(r.type===Y.Percentage)return;n.h=r.value}if(i.type!==Y.None){if(i.type===Y.Hue)return;n.w=i.value/100}if(a.type!==Y.None){if(a.type===Y.Hue)return;n.b=a.value/100}return o.type!==Y.None&&(n.alpha=Math.min(1,Math.max(0,o.type===Y.Number?o.value:o.value/100))),n}var oB={mode:`hwb`,toMode:{rgb:rB},fromMode:{rgb:iB},channels:[`h`,`w`,`b`,`alpha`],ranges:{h:[0,360]},gamut:`rgb`,parse:[aB],serialize:e=>`hwb(${e.h===void 0?`none`:e.h} ${e.w===void 0?`none`:e.w*100+`%`} ${e.b===void 0?`none`:e.b*100+`%`}${e.alpha<1?` / ${e.alpha}`:``})`,interpolate:{h:{use:Z,fixup:sz},w:Z,b:Z,alpha:{use:Z,fixup:KR}},difference:{h:_z},average:{h:bz}},sB=.1593017578125,cB=78.84375,lB=.8359375,uB=18.8515625,dB=18.6875;function fB(e){if(e<0)return 0;let t=e**(1/cB);return 1e4*(Math.max(0,t-lB)/(uB-dB*t))**(1/sB)}function pB(e){if(e<0)return 0;let t=(e/1e4)**sB;return((lB+uB*t)/(1+dB*t))**+cB}var mB=e=>Math.max(e/203,0),hB=({i:e,t,p:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=fB(e+.008609037037932761*t+.11102962500302593*n),a=fB(e-.00860903703793275*t-.11102962500302599*n),o=fB(e+.5600313357106791*t-.32062717498731885*n),s={mode:`xyz65`,x:mB(2.070152218389422*i-1.3263473389671556*a+.2066510476294051*o),y:mB(.3647385209748074*i+.680566024947227*a-.0453045459220346*o),z:mB(-.049747207535812*i-.0492609666966138*a+1.1880659249923042*o)};return r!==void 0&&(s.alpha=r),s},gB=(e=0)=>Math.max(e*203,0),_B=({x:e,y:t,z:n,alpha:r})=>{let i=gB(e),a=gB(t),o=gB(n),s=pB(.3592832590121217*i+.6976051147779502*a-.0358915932320289*o),c=pB(-.1920808463704995*i+1.1004767970374323*a+.0753748658519118*o),l=pB(.0070797844607477*i+.0748396662186366*a+.8433265453898765*o),u={mode:`itp`,i:.5*s+.5*c,t:1.61376953125*s-3.323486328125*c+1.709716796875*l,p:4.378173828125*s-4.24560546875*c-.132568359375*l};return r!==void 0&&(u.alpha=r),u},vB={mode:`itp`,channels:[`i`,`t`,`p`,`alpha`],parse:[`--ictcp`],serialize:`--ictcp`,toMode:{xyz65:hB,rgb:e=>rz(hB(e))},fromMode:{xyz65:_B,rgb:e=>_B(ez(e))},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:Z,t:Z,p:Z,alpha:{use:Z,fixup:KR}}},yB=134.03437499999998,bB=16295499532821565e-27,xB=e=>{if(e<0)return 0;let t=(e/1e4)**sB;return((lB+uB*t)/(1+dB*t))**+yB},SB=(e=0)=>Math.max(e*203,0),CB=({x:e,y:t,z:n,alpha:r})=>{e=SB(e),t=SB(t),n=SB(n);let i=1.15*e-.15*n,a=.66*t+.34*e,o=xB(.41478972*i+.579999*a+.014648*n),s=xB(-.20151*i+1.120649*a+.0531008*n),c=xB(-.0166008*i+.2648*a+.6684799*n),l=(o+s)/2,u={mode:`jab`,j:.44*l/(1-.56*l)-bB,a:3.524*o-4.066708*s+.542708*c,b:.199076*o+1.096799*s-1.295875*c};return r!==void 0&&(u.alpha=r),u},wB=134.03437499999998,TB=16295499532821565e-27,EB=e=>{if(e<0)return 0;let t=e**(1/wB);return 1e4*((lB-t)/(dB*t-uB))**(1/sB)},DB=e=>e/203,OB=({j:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(e+TB)/(.44+.56*(e+TB)),a=EB(i+.13860504*t+.058047316*n),o=EB(i-.13860504*t-.058047316*n),s=EB(i-.096019242*t-.8118919*n),c={mode:`xyz65`,x:DB(1.661373024652174*a-.914523081304348*o+.23136208173913045*s),y:DB(-.3250758611844533*a+1.571847026732543*o-.21825383453227928*s),z:DB(-.090982811*a-.31272829*o+1.5227666*s)};return r!==void 0&&(c.alpha=r),c},kB=e=>{let t=CB(ez(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},AB=e=>rz(OB(e)),jB={mode:`jab`,channels:[`j`,`a`,`b`,`alpha`],parse:[`--jzazbz`],serialize:`--jzazbz`,fromMode:{rgb:kB,xyz65:CB},toMode:{rgb:AB,xyz65:OB},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:Z,a:Z,b:Z,alpha:{use:Z,fixup:KR}}},MB=({j:e,a:t,b:n,alpha:r})=>{t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.sqrt(t*t+n*n),a={mode:`jch`,j:e,c:i};return i&&(a.h=az(Math.atan2(n,t)*180/Math.PI)),r!==void 0&&(a.alpha=r),a},NB=({j:e,c:t,h:n,alpha:r})=>{n===void 0&&(n=0);let i={mode:`jab`,j:e,a:t?t*Math.cos(n/180*Math.PI):0,b:t?t*Math.sin(n/180*Math.PI):0};return r!==void 0&&(i.alpha=r),i},PB={mode:`jch`,parse:[`--jzczhz`],serialize:`--jzczhz`,toMode:{jab:NB,rgb:e=>AB(NB(e))},fromMode:{rgb:e=>MB(kB(e)),jab:MB},channels:[`j`,`c`,`h`,`alpha`],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:Z,fixup:sz},c:Z,j:Z,alpha:{use:Z,fixup:KR}},difference:{h:vz},average:{h:bz}},FB=29**3/3**3,IB=6**3/29**3,LB=e=>e**3>IB?e**3:(116*e-16)/FB,RB=({l:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(e+16)/116,a=t/500+i,o=i-n/200,s={mode:`xyz50`,x:LB(a)*Ez.X,y:LB(i)*Ez.Y,z:LB(o)*Ez.Z};return r!==void 0&&(s.alpha=r),s},zB=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=nz({r:e*3.1341359569958707-t*1.6173863321612538-.4906619460083532*n,g:e*-.978795502912089+t*1.916254567259524+.03344273116131949*n,b:e*.07195537988411677-t*.2289768264158322+1.405386058324125*n});return r!==void 0&&(i.alpha=r),i},BB=e=>zB(RB(e)),VB=e=>{let{r:t,g:n,b:r,alpha:i}=$R(e),a={mode:`xyz50`,x:.436065742824811*t+.3851514688337912*n+.14307845442264197*r,y:.22249319175623702*t+.7168870538238823*n+.06061979053616537*r,z:.013923904500943465*t+.09708128566574634*n+.7140993584005155*r};return i!==void 0&&(a.alpha=i),a},HB=e=>e>IB?Math.cbrt(e):(FB*e+16)/116,UB=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=HB(e/Ez.X),a=HB(t/Ez.Y),o=HB(n/Ez.Z),s={mode:`lab`,l:116*a-16,a:500*(i-a),b:200*(a-o)};return r!==void 0&&(s.alpha=r),s},WB=e=>{let t=UB(VB(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t};function GB(e,t){if(!t||t[0]!==`lab`)return;let n={mode:`lab`},[,r,i,a,o]=t;if(!(r.type===Y.Hue||i.type===Y.Hue||a.type===Y.Hue))return r.type!==Y.None&&(n.l=Math.min(Math.max(0,r.value),100)),i.type!==Y.None&&(n.a=i.type===Y.Number?i.value:i.value*125/100),a.type!==Y.None&&(n.b=a.type===Y.Number?a.value:a.value*125/100),o.type!==Y.None&&(n.alpha=Math.min(1,Math.max(0,o.type===Y.Number?o.value:o.value/100))),n}var KB={mode:`lab`,toMode:{xyz50:RB,rgb:BB},fromMode:{xyz50:UB,rgb:WB},channels:[`l`,`a`,`b`,`alpha`],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[GB],serialize:e=>`lab(${e.l===void 0?`none`:e.l} ${e.a===void 0?`none`:e.a} ${e.b===void 0?`none`:e.b}${e.alpha<1?` / ${e.alpha}`:``})`,interpolate:{l:Z,a:Z,b:Z,alpha:{use:Z,fixup:KR}}},qB={...KB,mode:`lab65`,parse:[`--lab-d65`],serialize:`--lab-d65`,toMode:{xyz65:kz,rgb:Az},fromMode:{xyz65:Mz,rgb:Nz},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};function JB(e,t){if(!t||t[0]!==`lch`)return;let n={mode:`lch`},[,r,i,a,o]=t;if(r.type!==Y.None){if(r.type===Y.Hue)return;n.l=Math.min(Math.max(0,r.value),100)}if(i.type!==Y.None&&(n.c=Math.max(0,i.type===Y.Number?i.value:i.value*150/100)),a.type!==Y.None){if(a.type===Y.Percentage)return;n.h=a.value}return o.type!==Y.None&&(n.alpha=Math.min(1,Math.max(0,o.type===Y.Number?o.value:o.value/100))),n}var YB={mode:`lch`,toMode:{lab:Cz,rgb:e=>BB(Cz(e))},fromMode:{rgb:e=>Sz(WB(e)),lab:Sz},channels:[`l`,`c`,`h`,`alpha`],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[JB],serialize:e=>`lch(${e.l===void 0?`none`:e.l} ${e.c===void 0?`none`:e.c} ${e.h===void 0?`none`:e.h}${e.alpha<1?` / ${e.alpha}`:``})`,interpolate:{h:{use:Z,fixup:sz},c:Z,l:Z,alpha:{use:Z,fixup:KR}},difference:{h:vz},average:{h:bz}},XB={...YB,mode:`lch65`,parse:[`--lch-d65`],serialize:`--lch-d65`,toMode:{lab65:e=>Cz(e,`lab65`),rgb:e=>Az(Cz(e,`lab65`))},fromMode:{rgb:e=>Sz(Nz(e),`lch65`),lab65:e=>Sz(e,`lch65`)},ranges:{l:[0,100],c:[0,150],h:[0,360]}},ZB=({l:e,u:t,v:n,alpha:r})=>{t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.sqrt(t*t+n*n),a={mode:`lchuv`,l:e,c:i};return i&&(a.h=az(Math.atan2(n,t)*180/Math.PI)),r!==void 0&&(a.alpha=r),a},QB=({l:e,c:t,h:n,alpha:r})=>{n===void 0&&(n=0);let i={mode:`luv`,l:e,u:t?t*Math.cos(n/180*Math.PI):0,v:t?t*Math.sin(n/180*Math.PI):0};return r!==void 0&&(i.alpha=r),i},$B=(e,t,n)=>4*e/(e+15*t+3*n),eV=(e,t,n)=>9*t/(e+15*t+3*n),tV=$B(Ez.X,Ez.Y,Ez.Z),nV=eV(Ez.X,Ez.Y,Ez.Z),rV=e=>e<=IB?FB*e:116*Math.cbrt(e)-16,iV=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=rV(t/Ez.Y),a=$B(e,t,n),o=eV(e,t,n);!isFinite(a)||!isFinite(o)?i=a=o=0:(a=13*i*(a-tV),o=13*i*(o-nV));let s={mode:`luv`,l:i,u:a,v:o};return r!==void 0&&(s.alpha=r),s},aV=(e,t,n)=>4*e/(e+15*t+3*n),oV=(e,t,n)=>9*t/(e+15*t+3*n),sV=aV(Ez.X,Ez.Y,Ez.Z),cV=oV(Ez.X,Ez.Y,Ez.Z),lV=({l:e,u:t,v:n,alpha:r})=>{if(e===void 0&&(e=0),e===0)return{mode:`xyz50`,x:0,y:0,z:0};t===void 0&&(t=0),n===void 0&&(n=0);let i=t/(13*e)+sV,a=n/(13*e)+cV,o=Ez.Y*(e<=8?e/FB:((e+16)/116)**3),s={mode:`xyz50`,x:9*i*o/(4*a),y:o,z:o*(12-3*i-20*a)/(4*a)};return r!==void 0&&(s.alpha=r),s},uV={mode:`lchuv`,toMode:{luv:QB,rgb:e=>zB(lV(QB(e)))},fromMode:{rgb:e=>ZB(iV(VB(e))),luv:ZB},channels:[`l`,`c`,`h`,`alpha`],parse:[`--lchuv`],serialize:`--lchuv`,ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:Z,fixup:sz},c:Z,l:Z,alpha:{use:Z,fixup:KR}},difference:{h:vz},average:{h:bz}},dV={...qR,mode:`lrgb`,toMode:{rgb:nz},fromMode:{rgb:$R},parse:[`srgb-linear`],serialize:`srgb-linear`},fV={mode:`luv`,toMode:{xyz50:lV,rgb:e=>zB(lV(e))},fromMode:{xyz50:iV,rgb:e=>iV(VB(e))},channels:[`l`,`u`,`v`,`alpha`],parse:[`--luv`],serialize:`--luv`,ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:Z,u:Z,v:Z,alpha:{use:Z,fixup:KR}}},pV=({r:e,g:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.cbrt(.412221469470763*e+.5363325372617348*t+.0514459932675022*n),a=Math.cbrt(.2119034958178252*e+.6806995506452344*t+.1073969535369406*n),o=Math.cbrt(.0883024591900564*e+.2817188391361215*t+.6299787016738222*n),s={mode:`oklab`,l:.210454268309314*i+.7936177747023054*a-.0040720430116193*o,a:1.9779985324311684*i-2.42859224204858*a+.450593709617411*o,b:.0259040424655478*i+.7827717124575296*a-.8086757549230774*o};return r!==void 0&&(s.alpha=r),s},mV=e=>{let t=pV($R(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},hV=({l:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(e+.3963377773761749*t+.2158037573099136*n)**3,a=(e-.1055613458156586*t-.0638541728258133*n)**3,o=(e-.0894841775298119*t-1.2914855480194092*n)**3,s={mode:`lrgb`,r:4.076741636075957*i-3.3077115392580616*a+.2309699031821044*o,g:-1.2684379732850317*i+2.6097573492876887*a-.3413193760026573*o,b:-.0041960761386756*i-.7034186179359362*a+1.7076146940746117*o};return r!==void 0&&(s.alpha=r),s},gV=e=>nz(hV(e));function _V(e){let t=.206,n=.03,r=(1+t)/(1+n);return .5*(r*e-t+Math.sqrt((r*e-t)*(r*e-t)+4*n*r*e))}function vV(e){let t=.206,n=.03;return(1+t)/(1+n),(e*e+t*e)/(1.170873786407767*(e+n))}function yV(e,t){let n,r,i,a,o,s,c,l;-1.88170328*e-.80936493*t>1?(n=1.19086277,r=1.76576728,i=.59662641,a=.75515197,o=.56771245,s=4.0767416621,c=-3.3077115913,l=.2309699292):1.81444104*e-1.19445276*t>1?(n=.73956515,r=-.45954404,i=.08285427,a=.1254107,o=.14503204,s=-1.2684380046,c=2.6097574011,l=-.3413193965):(n=1.35733652,r=-.00915799,i=-1.1513021,a=-.50559606,o=.00692167,s=-.0041960863,c=-.7034186147,l=1.707614701);let u=n+r*e+i*t+a*e*e+o*e*t,d=.3963377774*e+.2158037573*t,f=-.1055613458*e-.0638541728*t,p=-.0894841775*e-1.291485548*t;{let e=1+u*d,t=1+u*f,n=1+u*p,r=e*e*e,i=t*t*t,a=n*n*n,o=3*d*e*e,m=3*f*t*t,h=3*p*n*n,g=6*d*d*e,_=6*f*f*t,ee=6*p*p*n,te=s*r+c*i+l*a,ne=s*o+c*m+l*h,re=s*g+c*_+l*ee;u-=te*ne/(ne*ne-.5*te*re)}return u}function bV(e,t){let n=yV(e,t),r=hV({l:1,a:n*e,b:n*t}),i=Math.cbrt(1/Math.max(r.r,r.g,r.b));return[i,i*n]}function xV(e,t,n,r,i,a=null){a||=bV(e,t);let o;if((n-i)*a[1]-(a[0]-i)*r<=0)o=a[1]*i/(r*a[0]+a[1]*(i-n));else{o=a[1]*(i-1)/(r*(a[0]-1)+a[1]*(i-n));{let a=n-i,s=r,c=.3963377774*e+.2158037573*t,l=-.1055613458*e-.0638541728*t,u=-.0894841775*e-1.291485548*t,d=a+s*c,f=a+s*l,p=a+s*u;{let e=i*(1-o)+o*n,t=o*r,a=e+t*c,s=e+t*l,m=e+t*u,h=a*a*a,g=s*s*s,_=m*m*m,ee=3*d*a*a,te=3*f*s*s,ne=3*p*m*m,re=6*d*d*a,ie=6*f*f*s,ae=6*p*p*m,oe=4.0767416621*h-3.3077115913*g+.2309699292*_-1,se=4.0767416621*ee-3.3077115913*te+.2309699292*ne,ce=4.0767416621*re-3.3077115913*ie+.2309699292*ae,le=se/(se*se-.5*oe*ce),ue=-oe*le,de=-1.2684380046*h+2.6097574011*g-.3413193965*_-1,fe=-1.2684380046*ee+2.6097574011*te-.3413193965*ne,pe=-1.2684380046*re+2.6097574011*ie-.3413193965*ae,me=fe/(fe*fe-.5*de*pe),he=-de*me,ge=-.0041960863*h-.7034186147*g+1.707614701*_-1,v=-.0041960863*ee-.7034186147*te+1.707614701*ne,y=-.0041960863*re-.7034186147*ie+1.707614701*ae,_e=v/(v*v-.5*ge*y),ve=-ge*_e;ue=le>=0?ue:1e6,he=me>=0?he:1e6,ve=_e>=0?ve:1e6,o+=Math.min(ue,Math.min(he,ve))}}}return o}function SV(e,t,n=null){n||=bV(e,t);let r=n[0],i=n[1];return[i/r,i/(1-r)]}function CV(e,t,n){let r=bV(t,n),i=xV(t,n,e,1,e,r),a=SV(t,n,r),o=.11516993+1/(7.4477897+4.1590124*n+t*(-2.19557347+1.75198401*n+t*(-2.13704948-10.02301043*n+t*(-4.24894561+5.38770819*n+4.69891013*t)))),s=.11239642+1/(1.6132032-.68124379*n+t*(.40370612+.90148123*n+t*(-.27087943+.6122399*n+t*(.00299215-.45399568*n-.14661872*t)))),c=i/Math.min(e*a[0],(1-e)*a[1]),l=e*o,u=(1-e)*s,d=.9*c*Math.sqrt(Math.sqrt(1/(1/(l*l*l*l)+1/(u*u*u*u))));return l=e*.4,u=(1-e)*.8,[Math.sqrt(1/(1/(l*l)+1/(u*u))),d,i]}function wV(e){let t=e.l===void 0?0:e.l,n=e.a===void 0?0:e.a,r=e.b===void 0?0:e.b,i={mode:`okhsl`,l:_V(t)};e.alpha!==void 0&&(i.alpha=e.alpha);let a=Math.sqrt(n*n+r*r);if(!a)return i.s=0,i;let[o,s,c]=CV(t,n/a,r/a),l;if(a<s){let e=.8*o,t=1-e/s;l=(a-0)/(e+t*(a-0))*.8}else{let e=s,t=.2*s*s*1.25*1.25/o,n=1-t/(c-s);l=.8+.2*((a-e)/(t+n*(a-e)))}return l&&(i.s=l,i.h=az(Math.atan2(r,n)*180/Math.PI)),i}function TV(e){let t=e.h===void 0?0:e.h,n=e.s===void 0?0:e.s,r=e.l===void 0?0:e.l,i={mode:`oklab`,l:vV(r)};if(e.alpha!==void 0&&(i.alpha=e.alpha),!n||r===1)return i.a=i.b=0,i;let a=Math.cos(t/180*Math.PI),o=Math.sin(t/180*Math.PI),[s,c,l]=CV(i.l,a,o),u,d,f,p;n<.8?(u=1.25*n,d=0,f=.8*s,p=1-f/c):(u=5*(n-.8),d=c,f=.2*c*c*1.25*1.25/s,p=1-f/(l-c));let m=d+u*f/(1-p*u);return i.a=m*a,i.b=m*o,i}var EV={...$z,mode:`okhsl`,channels:[`h`,`s`,`l`,`alpha`],parse:[`--okhsl`],serialize:`--okhsl`,fromMode:{oklab:wV,rgb:e=>wV(mV(e))},toMode:{oklab:TV,rgb:e=>gV(TV(e))}};function DV(e){let t=e.l===void 0?0:e.l,n=e.a===void 0?0:e.a,r=e.b===void 0?0:e.b,i=Math.sqrt(n*n+r*r),a=i?n/i:1,o=i?r/i:1,[s,c]=SV(a,o),l=.5,u=1-l/s,d=c/(i+t*c),f=d*t,p=d*i,m=vV(f),h=p*m/f,g=hV({l:m,a:a*h,b:o*h}),_=Math.cbrt(1/Math.max(g.r,g.g,g.b,0));t/=_,i=i/_*_V(t)/t,t=_V(t);let ee={mode:`okhsv`,s:i?(l+c)*p/(c*l+c*u*p):0,v:t?t/f:0};return ee.s&&(ee.h=az(Math.atan2(r,n)*180/Math.PI)),e.alpha!==void 0&&(ee.alpha=e.alpha),ee}function OV(e){let t={mode:`oklab`};e.alpha!==void 0&&(t.alpha=e.alpha);let n=e.h===void 0?0:e.h,r=e.s===void 0?0:e.s,i=e.v===void 0?0:e.v,a=Math.cos(n/180*Math.PI),o=Math.sin(n/180*Math.PI),[s,c]=SV(a,o),l=.5,u=1-l/s,d=1-r*l/(l+c-c*u*r),f=r*c*l/(l+c-c*u*r),p=vV(d),m=f*p/d,h=hV({l:p,a:a*m,b:o*m}),g=Math.cbrt(1/Math.max(h.r,h.g,h.b,0)),_=vV(i*d),ee=f*_/d;return t.l=_*g,t.a=ee*a*g,t.b=ee*o*g,t}var kV={...nB,mode:`okhsv`,channels:[`h`,`s`,`v`,`alpha`],parse:[`--okhsv`],serialize:`--okhsv`,fromMode:{oklab:DV,rgb:e=>DV(mV(e))},toMode:{oklab:OV,rgb:e=>gV(OV(e))}};function AV(e,t){if(!t||t[0]!==`oklab`)return;let n={mode:`oklab`},[,r,i,a,o]=t;if(!(r.type===Y.Hue||i.type===Y.Hue||a.type===Y.Hue))return r.type!==Y.None&&(n.l=Math.min(Math.max(0,r.type===Y.Number?r.value:r.value/100),1)),i.type!==Y.None&&(n.a=i.type===Y.Number?i.value:i.value*.4/100),a.type!==Y.None&&(n.b=a.type===Y.Number?a.value:a.value*.4/100),o.type!==Y.None&&(n.alpha=Math.min(1,Math.max(0,o.type===Y.Number?o.value:o.value/100))),n}var jV={...KB,mode:`oklab`,toMode:{lrgb:hV,rgb:gV},fromMode:{lrgb:pV,rgb:mV},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[AV],serialize:e=>`oklab(${e.l===void 0?`none`:e.l} ${e.a===void 0?`none`:e.a} ${e.b===void 0?`none`:e.b}${e.alpha<1?` / ${e.alpha}`:``})`};function MV(e,t){if(!t||t[0]!==`oklch`)return;let n={mode:`oklch`},[,r,i,a,o]=t;if(r.type!==Y.None){if(r.type===Y.Hue)return;n.l=Math.min(Math.max(0,r.type===Y.Number?r.value:r.value/100),1)}if(i.type!==Y.None&&(n.c=Math.max(0,i.type===Y.Number?i.value:i.value*.4/100)),a.type!==Y.None){if(a.type===Y.Percentage)return;n.h=a.value}return o.type!==Y.None&&(n.alpha=Math.min(1,Math.max(0,o.type===Y.Number?o.value:o.value/100))),n}var NV={...YB,mode:`oklch`,toMode:{oklab:e=>Cz(e,`oklab`),rgb:e=>gV(Cz(e,`oklab`))},fromMode:{rgb:e=>Sz(mV(e),`oklch`),oklab:e=>Sz(e,`oklch`)},parse:[MV],serialize:e=>`oklch(${e.l===void 0?`none`:e.l} ${e.c===void 0?`none`:e.c} ${e.h===void 0?`none`:e.h}${e.alpha<1?` / ${e.alpha}`:``})`,ranges:{l:[0,1],c:[0,.4],h:[0,360]}},PV=e=>{let{r:t,g:n,b:r,alpha:i}=$R(e),a={mode:`xyz65`,x:.486570948648216*t+.265667693169093*n+.1982172852343625*r,y:.2289745640697487*t+.6917385218365062*n+.079286914093745*r,z:0*t+.0451133818589026*n+1.043944368900976*r};return i!==void 0&&(a.alpha=i),a},FV=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=nz({r:e*2.4934969119414263-t*.9313836179191242-.402710784450717*n,g:e*-.8294889695615749+t*1.7626640603183465+.0236246858419436*n,b:e*.0358458302437845-t*.0761723892680418+.9568845240076871*n},`p3`);return r!==void 0&&(i.alpha=r),i},IV={...qR,mode:`p3`,parse:[`display-p3`],serialize:`display-p3`,fromMode:{rgb:e=>FV(ez(e)),xyz65:FV},toMode:{rgb:e=>rz(PV(e)),xyz65:PV}},LV=e=>{let t=Math.abs(e);return t>=1/512?Math.sign(e)*t**(1/1.8):16*e},RV=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`prophoto`,r:LV(e*1.3457868816471585-t*.2555720873797946-.0511018649755453*n),g:LV(e*-.5446307051249019+t*1.5082477428451466+.0205274474364214*n),b:LV(e*0+t*0+1.2119675456389452*n)};return r!==void 0&&(i.alpha=r),i},zV=(e=0)=>{let t=Math.abs(e);return t>=16/512?Math.sign(e)*t**1.8:e/16},BV=e=>{let t=zV(e.r),n=zV(e.g),r=zV(e.b),i={mode:`xyz50`,x:.7977666449006423*t+.1351812974005331*n+.0313477341283922*r,y:.2880748288194013*t+.7118352342418731*n+899369387256e-16*r,z:0*t+0*n+.8251046025104602*r};return e.alpha!==void 0&&(i.alpha=e.alpha),i},VV={...qR,mode:`prophoto`,parse:[`prophoto-rgb`],serialize:`prophoto-rgb`,fromMode:{xyz50:RV,rgb:e=>RV(VB(e))},toMode:{xyz50:BV,rgb:e=>zB(BV(e))}},HV=1.09929682680944,UV=.018053968510807,WV=e=>{let t=Math.abs(e);return t>UV?(Math.sign(e)||1)*(HV*t**.45-(HV-1)):4.5*e},GV=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`rec2020`,r:WV(e*1.7166511879712683-t*.3556707837763925-.2533662813736599*n),g:WV(e*-.6666843518324893+t*1.6164812366349395+.0157685458139111*n),b:WV(e*.0176398574453108-t*.0427706132578085+.9421031212354739*n)};return r!==void 0&&(i.alpha=r),i},KV=1.09929682680944,qV=.018053968510807,JV=(e=0)=>{let t=Math.abs(e);return t<qV*4.5?e/4.5:(Math.sign(e)||1)*((t+KV-1)/KV)**(1/.45)},YV=e=>{let t=JV(e.r),n=JV(e.g),r=JV(e.b),i={mode:`xyz65`,x:.6369580483012911*t+.1446169035862083*n+.1688809751641721*r,y:.262700212011267*t+.6779980715188708*n+.059301716469862*r,z:0*t+.0280726930490874*n+1.0609850577107909*r};return e.alpha!==void 0&&(i.alpha=e.alpha),i},XV={...qR,mode:`rec2020`,fromMode:{xyz65:GV,rgb:e=>GV(ez(e))},toMode:{xyz65:YV,rgb:e=>rz(YV(e))},parse:[`rec2020`],serialize:`rec2020`},ZV=.0037930732552754493,QV=Math.cbrt(ZV),$V=e=>Math.cbrt(e)-QV,eH=e=>{let{r:t,g:n,b:r,alpha:i}=$R(e),a=$V(.3*t+.622*n+.078*r+ZV),o=$V(.23*t+.692*n+.078*r+ZV),s=$V(.2434226892454782*t+.2047674442449682*n+.5518098665095535*r+ZV),c={mode:`xyb`,x:(a-o)/2,y:(a+o)/2,b:s-(a+o)/2};return i!==void 0&&(c.alpha=i),c},tH=e=>(e+QV)**3,nH={mode:`xyb`,channels:[`x`,`y`,`b`,`alpha`],parse:[`--xyb`],serialize:`--xyb`,toMode:{rgb:({x:e,y:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=tH(e+t)-ZV,a=tH(t-e)-ZV,o=tH(n+t)-ZV,s=nz({r:11.031566904639861*i-9.866943908131562*a-.16462299650829934*o,g:-3.2541473810744237*i+4.418770377582723*a-.16462299650829934*o,b:-3.6588512867136815*i+2.7129230459360922*a+1.9459282407775895*o});return r!==void 0&&(s.alpha=r),s}},fromMode:{rgb:eH},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:Z,y:Z,b:Z,alpha:{use:Z,fixup:KR}}},rH={mode:`xyz50`,parse:[`xyz-d50`],serialize:`xyz-d50`,toMode:{rgb:zB,lab:UB},fromMode:{rgb:VB,lab:RB},channels:[`x`,`y`,`z`,`alpha`],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:Z,y:Z,z:Z,alpha:{use:Z,fixup:KR}}},iH={mode:`xyz65`,toMode:{rgb:rz,xyz50:e=>{let{x:t,y:n,z:r,alpha:i}=e;t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0);let a={mode:`xyz50`,x:1.0479298208405488*t+.0229467933410191*n-.0501922295431356*r,y:.0296278156881593*t+.990434484573249*n-.0170738250293851*r,z:-.0092430581525912*t+.0150551448965779*n+.7518742899580008*r};return i!==void 0&&(a.alpha=i),a}},fromMode:{rgb:ez,xyz50:e=>{let{x:t,y:n,z:r,alpha:i}=e;t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0);let a={mode:`xyz65`,x:.9554734527042182*t-.0230985368742614*n+.0632593086610217*r,y:-.0283697069632081*t+1.0099954580058226*n+.021041398966943*r,z:.0123140016883199*t-.0205076964334779*n+1.3303659366080753*r};return i!==void 0&&(a.alpha=i),a}},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:[`x`,`y`,`z`,`alpha`],parse:[`xyz`,`xyz-d65`],serialize:`xyz-d65`,interpolate:{x:Z,y:Z,z:Z,alpha:{use:Z,fixup:KR}}},aH={mode:`yiq`,toMode:{rgb:({y:e,i:t,q:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`rgb`,r:e+.95608445*t+.6208885*n,g:e-.27137664*t-.6486059*n,b:e-1.10561724*t+1.70250126*n};return r!==void 0&&(i.alpha=r),i}},fromMode:{rgb:({r:e,g:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`yiq`,y:.29889531*e+.58662247*t+.11448223*n,i:.59597799*e-.2741761*t-.32180189*n,q:.21147017*e-.52261711*t+.31114694*n};return r!==void 0&&(i.alpha=r),i}},channels:[`y`,`i`,`q`,`alpha`],parse:[`--yiq`],serialize:`--yiq`,ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:Z,i:Z,q:Z,alpha:{use:Z,fixup:KR}}},oH=(e,t)=>Math.round(e*(t=10**t))/t;((e=4)=>t=>typeof t==`number`?oH(t,e):t)(2);var sH=e=>Math.max(0,Math.min(1,e||0)),cH=e=>Math.round(sH(e)*255),lH=yR(`rgb`),uH=e=>{if(e===void 0)return;let t=cH(e.r),n=cH(e.g),r=cH(e.b);return`#`+(1<<24|t<<16|n<<8|r).toString(16).slice(1)},dH=e=>uH(lH(e)),fH=e=>{let t={mode:e.mode,r:Math.max(0,Math.min(e.r===void 0?0:e.r,1)),g:Math.max(0,Math.min(e.g===void 0?0:e.g,1)),b:Math.max(0,Math.min(e.b===void 0?0:e.b,1))};return e.alpha!==void 0&&(t.alpha=e.alpha),t},pH=e=>e!==void 0&&(e.r===void 0||e.r>=0&&e.r<=1)&&(e.g===void 0||e.g>=0&&e.g<=1)&&(e.b===void 0||e.b>=0&&e.b<=1);function mH(e=`rgb`){let{gamut:t}=ER(e);if(!t)return e=>!0;let n=yR(typeof t==`string`?t:e);return e=>pH(n(e))}function hH(e=`rgb`){let{gamut:t}=ER(e);if(!t)return e=>vR(e);let n=typeof t==`string`?t:e,r=yR(n),i=mH(n);return e=>{let t=vR(e);if(!t)return;let n=r(t);if(i(n))return t;let a=fH(n);return t.mode===a.mode?a:yR(t.mode)(a)}}TR(iz),TR(xz),TR(Hz),TR(Uz),TR(Kz),TR($z),TR(nB),TR(oB),TR(vB),TR(jB),TR(PB),TR(KB),TR(qB),TR(YB),TR(XB),TR(uV),TR(dV),TR(fV),TR(EV),TR(kV),TR(jV),TR(NV),TR(IV),TR(VV),TR(XV),TR(qR),TR(nH),TR(rH),TR(iH),TR(aH);var gH=yz(`rgb`),_H=class e{constructor(e){this.set(e)}static isValidColorString(t){try{return new e(t),!0}catch{return!1}}static isColor(t){return t instanceof e}static deserialize(t){let n=JSON.parse(t),r=new e(`black`);return Uc(n).forEach(([e,t])=>{e===`originalColorSyntax`?r.originalColorSyntax=Dc.isEnumValue(t,YL,`Cannot deserialize: invalid color syntax.`):r._allColors[e]=t}),r}getRgbDistance(e){return gH(this.#e,e)}getClosestNamedColor(){return Te($L).reduce((e,t)=>{let n=this.getRgbDistance(t);return n<e.distance?{distance:n,name:t}:e},{name:``,distance:1/0}).name}toString(){return this.toCss()[this.originalColorSyntax]}originalColorSyntax=YL.hex;#e=Dc.isDefined(VR(`black`));_allColors={names:[`black`],[YL.name]:`black`,hexString:`#000000`,[YL.hex]:{r:0,g:0,b:0},[YL.rgb]:{r:0,g:0,b:0},[YL.hsl]:{h:0,s:0,l:0},[YL.hwb]:{h:0,w:0,b:0},[YL.lab]:{l:0,a:0,b:0},[YL.lch]:{l:0,c:0,h:0},[YL.oklab]:{l:0,a:0,b:0},[YL.oklch]:{l:0,c:0,h:0}};clone(){return e.deserialize(this.serialize())}setByString(e){let t=VR(e);if(!t)throw Error(`Unable to parse invalid color string: '${e}'`);this.originalColorSyntax=ZL(e),this.#e=t,this.pullFromInternalColor()}set(e){if(j.isString(e))return this.setByString(e);if(Mc.isLengthExactly(Object.keys(e),1,`Cannot set multiple color formats at once: got '${Il(Object.keys(e))}'`),e.hexString||e.name)this.setByString(e.hexString||e.name);else{let[t,n]=Dc.isDefined(Uc(e)[0]),r=XL[t],i=Object.values(Dl(r.coords,e=>{let i=n[e],a=r.coords[Dc.isKeyOf(e,r.coords)],o=i!=null&&i>=a.min&&i<=a.max?n[e]:this[t][e];return Dc.isDefined(o)}));this.setByString(`${r.conversionFormat}(${i.join(` `)})`)}}pullFromInternalColor(){De(JL).forEach(e=>{let t=XL[e],n=t.conversionFormat,r=j.isKeyOf(this.#e.mode,XL)?XL[this.#e.mode]:void 0,i=hH(t.colorSpace===r?.colorSpace?n:`rgb`)(yR(n)(this.#e));i||Mc.never(`Failed to convert color '${JSON.stringify(this.#e)}' to '${e}'.`),Te(this[e]).forEach(n=>{let r=i[n],a=t.coords[Dc.isKeyOf(n,t.coords)];r!=null&&(this._allColors[e][n]=xl((r||0)*(a.factor||1),{digits:a.digits||0}))})}),this._allColors.hexString=dH(this.#e),this._allColors.names=vH(this.rgb),this._allColors[YL.name]=this._allColors.names[0]||``}serialize(){return JSON.stringify({...this.allColors,originalColorSyntax:this.originalColorSyntax})}get allColors(){return el(this._allColors)}toFormattedStrings(){return{...Dl(XL,e=>Object.values(this[e]).map(e=>String(e).padStart(6,` `)).join(` `)),names:this.names.join(`, `).padEnd(rR,` `),[YL.name]:(this.names[0]||``).padEnd(rR,` `),[YL.hexString]:this[YL.hexString]}}toCss(){return{...Dl(XL,e=>`${e}(${Object.values(this[e]).join(` `)})`),[YL.hexString]:this[YL.hexString],[YL.name]:this.names[0]||``}}get names(){return el(this._allColors.names)}get name(){return this._allColors.names[0]||``}get hexString(){return this._allColors[YL.hexString]}get hex(){return el(this._allColors[YL.hex])}get rgb(){return el(this._allColors[YL.rgb])}get hsl(){return el(this._allColors[YL.hsl])}get hwb(){return el(this._allColors[YL.hwb])}get lab(){return el(this._allColors[YL.lab])}get lch(){return el(this._allColors[YL.lch])}get oklab(){return el(this._allColors[YL.oklab])}get oklch(){return el(this._allColors[YL.oklch])}};function vH(e){return Gc(Uc($L),([e])=>e,(t,[,n])=>j.deepEquals(n,[e.r,e.g,e.b]))}function yH(e){return B`
        color: ${e.foreground.value};
        background-color: ${e.background.value};
    `}var bH=nN()({tagName:`vir-color-slider`,cssVars:{"vir-color-slider-gradient":`black`},styles:({cssVars:e})=>B`
        :host {
            display: flex;
            align-items: center;
            font-family: ${fF[`vira-monospace`].value};
            gap: 2px;
        }

        input[type='range'] {
            flex-grow: 1;
            appearance: none;
            background: ${e[`vir-color-slider-gradient`].value};
            height: 9px;
            border-radius: 4px;
            cursor: pointer;
        }

        ${UL} {
            width: 76px;
        }

        .coordinate {
            font-size: 18px;
            margin-top: -4px;
        }
    `,events:{valueChange:GM()},render({inputs:e,events:t,dispatch:n,cssVars:r}){let i=XL[e.colorFormatName],a=i.coords[e.colorCoordinateName];if(!a)throw Error(`Invalid color coordinate '${e.colorCoordinateName}' for color format '${e.colorFormatName}'`);let o=B`linear-gradient(to right, ${Su(qc(10,t=>{let n=a.min+(a.max-a.min)*(t/10);return new _H({[e.colorFormatName]:{...e.color[e.colorFormatName],[e.colorCoordinateName]:n}}).toCss()[i.conversionFormat]}).join(`,`))})`,s=Dc.isNumber(e.color[e.colorFormatName][e.colorCoordinateName]),c=a.radix?Math.round(s).toString(a.radix).toUpperCase().padStart(a.radixPad||0,`0`):String(s);return V`
            <span class="coordinate">${e.colorCoordinateName.toUpperCase()}</span>
            <input
                type="range"
                style=${B`
                    ${r[`vir-color-slider-gradient`].name}: ${o};
                `}
                step=${10**(a.digits?-a.digits:0)}
                ${bN(e=>{Mc.instanceOf(e,HTMLInputElement),e.min=String(a.min),e.max=String(a.max),e.value=String(s)})}
                ${mN(`input`,e=>{let r=aP(e,HTMLInputElement),i=Number(r.value);isNaN(i)||n(new t.valueChange(i))})}
            />
            <${UL.assign({value:c})}
                ${mN(UL.events.valueChange,e=>{let r=a.radix?parseInt(e.detail,a.radix):Number(e.detail);isNaN(r)||n(new t.valueChange(r))})}
            ></${UL}>
        `}}),xH=nN()({tagName:`vir-color-format-sliders`,styles:B`
        :host {
            display: flex;
            flex-direction: column;
        }

        h3 {
            ${DF};
        }
    `,events:{colorChange:GM()},render({inputs:e,dispatch:t,events:n}){let r=XL[e.colorFormatName],i=Te(r.coords).map(i=>V`
                    <${bH.assign({color:e.color,colorCoordinateName:i,colorFormatName:e.colorFormatName})}
                        ${mN(bH.events.valueChange,a=>{let o=e.color.clone();o.set({[e.colorFormatName]:{[i]:a.detail}});let s=o.toCss()[r.conversionFormat];t(new n.colorChange(s))})}
                    ></${bH}>
                `);return V`
            ${e.showFormatName?V`
                      <h3>${e.colorFormatName}</h3>
                  `:M}
            ${i}
        `}}),SH;(function(e){e.Vertical=`vertical`,e.Horizontal=`horizontal`})(SH||={});function CH(e,t,n,r={}){let i=t.map((e,t)=>({cells:n(e,t),data:e}));return r.orientation===SH.Horizontal?{headerRow:void 0,rows:Gc(e,e=>{if(e.disabled)return;let t=r.hideHeaders?[]:[{content:e.content??e.key,key:e.key,data:void 0}],n=Gc(i,({data:t,cells:n})=>{if(n)return{content:n[e.key],key:e.key,data:t}},j.isTruthy);return{cells:[...t,...n],data:void 0}},j.isTruthy),orientation:SH.Horizontal}:{headerRow:r.hideHeaders?[]:Gc(e,e=>{if(!e.disabled)return{content:e.content??e.key,key:e.key,data:void 0}},j.isTruthy),rows:Gc(i,({cells:t,data:n})=>{if(t)return{cells:Gc(e,e=>{if(!e.disabled)return{content:t[e.key],key:e.key,data:n}},j.isTruthy),data:n}},j.isTruthy),orientation:SH.Vertical}}var wH=nN()({tagName:`vir-color-swatch`,styles:B`
        :host {
            display: flex;
            height: 400px;
            width: 400px;
            border: 1px solid black;
            max-height: 100%;
            max-width: 100%;
            container-type: size;
            overflow: hidden;
        }

        div {
            flex-grow: 1;
            height: 100%;
            max-height: 100%;
            width: 100%;
            max-width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `,render({inputs:e}){let t=e.backgroundColor||e.foregroundColor,n=e.foregroundColor||`transparent`;return V`
            <div
                style=${B`
                    background-color: ${Su(t)};
                    color: ${Su(n)};
                `}
            >
                <slot></slot>
            </div>
        `}}),TH=class extends Rl()(`local-storage-client-all-values-event`){},EH=new class{shapes;options;listenTarget=new Vl;keyEvents;get AllValuesType(){throw Error(`Cannot use AllValuesType as a runtime value. It is a type only.`)}get ValueType(){throw Error(`Cannot use ValueType as a runtime value. It is a type only.`)}constructor(e,t={}){this.shapes=e,this.options=t,this.storeName=t.storeName||`local-storage-client`,this.keyEvents=Dl(e,e=>class extends Rl()(`local-storage-client-${String(e)}-event`){}),this.get=Dl(this.shapes,e=>(t={})=>this.getAllValues(t)[e]),this.listen=Dl(this.shapes,e=>t=>this.listenTarget.listen(this.keyEvents[e],async e=>{await t(e.detail)})),this.set=Dl(this.shapes,e=>t=>{Lj(t,this.shapes[e],{allowExtraKeys:!0},`LocalStorageClient: Invalid value for key '${String(e)}'.`);let n=this.getAllValues();return n[e]=t,globalThis.localStorage.setItem(this.storeName,JSON.stringify(n)),this.listenTarget.dispatch(new TH({detail:n})),this.listenTarget.dispatch(new this.keyEvents[e]({detail:t})),t}),this.delete=Dl(this.shapes,e=>()=>{let t=this.getAllValues();delete t[e],globalThis.localStorage.setItem(this.storeName,JSON.stringify(t)),this.listenTarget.dispatch(new TH({detail:t})),this.listenTarget.dispatch(new this.keyEvents[e]({detail:void 0}))})}storeName;getAllValues({throwErrorOnFailure:e=!1}={}){return $c(()=>cl(JSON.parse(globalThis.localStorage.getItem(this.storeName)||`{}`),(t,n)=>{let r=this.shapes[t];if(r){if(e)Lj(n,r,{allowExtraKeys:!0});else if(!Ij(n,r,{allowExtraKeys:!0}))return;return{key:t,value:n}}}),{handleError:t=>{if(e)throw Ne(t,`LocalStorageClient: store '${this.storeName}' is corrupt and cannot be loaded.`);return{}}})}listenToAllValues(e){return this.listenTarget.listen(TH,async t=>{await e(t.detail)})}listen;get;set;delete;clear(){globalThis.localStorage.removeItem(this.storeName)}destroy(){this.listenTarget.destroy()}}({lastFormat:Cj(JL)}),DH=Al(JL).map(e=>({value:e,label:e.toUpperCase()})),OH=nN()({tagName:`vir-color-picker`,cssVars:{"vir-color-picker-swatch-width":{default:`100px`,syntax:Ad.Length},"vir-color-picker-swatch-height":{default:`100px`,syntax:Ad.Length}},state(){return{selectedFormatName:EH.get.lastFormat()||JL.rgb,rawInput:void 0}},hostClasses:{"vir-color-picker-always-show":({inputs:e})=>!!e.alwaysShowPicker},styles:({cssVars:e,hostClasses:t})=>B`
        :host {
            display: inline-flex;
        }

        ${t[`vir-color-picker-always-show`].selector} {
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }

        button {
            ${OF}
            cursor: pointer;
            display: flex;
        }

        ${TI} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }

        .swatch-wrapper {
            display: flex;
            flex-direction: column;
            gap: 4px;
            align-items: center;

            & ${wH} {
                width: ${e[`vir-color-picker-swatch-width`].value};
                height: ${e[`vir-color-picker-swatch-height`].value};
                box-sizing: border-box;
            }
        }

        .code-button {
            font-family: ${fF[`vira-monospace`].value};
            font-size: 12px;
            color: #666;
            display: flex;
            justify-content: center;
            gap: 2px;
            align-items: center;

            & ${J} {
                width: 18px;
                aspect-ratio: 1;
            }

            &:hover {
                color: #000;
            }

            &:active {
                color: dodgerblue;
            }
        }

        .picker {
            display: flex;
            flex-direction: column;
            gap: 4px;
            padding: 16px;
            background: white;
            border: 1px solid #ccc;
            border-radius: 8px;
        }

        .pop-up .picker {
            ${AF.menuShadow}
        }

        .raw-input-wrapper {
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 12px;
            ${K[`vira-form-border-color`].name}: #ddd;
            color: #666;

            & ${UL} {
                flex-grow: 1;
                width: unset;
                color: inherit;
                height: 20px;
                border: none;
            }
        }
    `,events:{colorChange:GM()},render({inputs:e,dispatch:t,events:n,state:r,updateState:i}){let a=_H.isColor(e.color)?e.color:new _H(e.color||`black`),o=XL[r.selectedFormatName],s=r.rawInput??a.toCss()[o.rawSyntax],c=V`
            <div class="raw-input-wrapper">
                <${UL.assign({value:s})}
                    ${mN(UL.events.valueChange,e=>{let r=e.detail;i({rawInput:r}),_H.isValidColorString(r)&&t(new n.colorChange(r))})}
                ></${UL}>
                <button
                    class="code-button"
                    ${mN(`click`,async()=>{await globalThis.navigator.clipboard.writeText(s)})}
                >
                    <${J.assign({icon:WI,fitContainer:!0})}></${J}>
                </button>
            </div>
        `,l=V`
            <button
                class="code-button"
                ${mN(`click`,async()=>{await globalThis.navigator.clipboard.writeText(a.hexString)})}
            >
                <span>${a.hexString}</span>
                <${J.assign({icon:WI,fitContainer:!0})}></${J}>
            </button>
        `,u=V`
            <div class="swatch-wrapper">
                <${wH.assign({backgroundColor:a})}></${wH}>
                ${e.showHexValue?l:M}
            </div>
        `,d=V`
            <div class="picker">
                <${GL.assign({options:DH,value:r.selectedFormatName})}
                    ${mN(GL.events.valueChange,e=>{let t=Pc.isEnumValue(e.detail,JL);t&&(i({selectedFormatName:t}),EH.set.lastFormat(t))})}
                ></${GL}>
                ${c}
                <${xH.assign({color:a,colorFormatName:r.selectedFormatName,showFormatName:!1})}
                    ${mN(xH.events.colorChange,e=>{t(new n.colorChange(e.detail)),i({rawInput:void 0})})}
                ></${xH}>
            </div>
        `;return e.alwaysShowPicker?V`
                ${u} ${d}
            `:V`
                <${TI.assign({keepOpenAfterInteraction:!0})}>
                    <button
                        class="trigger"
                        slot=${TI.slotNames.trigger}
                        ${mN(`mousedown`,()=>{let e=EH.get.lastFormat();e&&i({selectedFormatName:e})})}
                    >
                        ${u}
                    </button>
                    <div class="pop-up" slot=${TI.slotNames.popUp}>
                        ${d}
                    </div>
                </${TI}>
            `}}),kH={value:B`transparent`};function AH(e){let t=yF[e][`behind-bg`],n=yF[e][`on-self`];return{[wF.Standard]:{idle:{textColor:t[mF.NonBodyText].foreground,backgroundColor:t[mF.NonBodyText].background,borderColor:t[mF.NonBodyText].background},hover:{textColor:t[mF.Header].foreground,backgroundColor:t[mF.Header].background,borderColor:t[mF.Header].background},active:{textColor:t[mF.NonBodyText].foreground,backgroundColor:t[mF.NonBodyText].background,borderColor:t[mF.NonBodyText].background}},[wF.Subtle]:{idle:{textColor:n[mF.BodyText].foreground,backgroundColor:n[mF.BodyText].background,borderColor:n[mF.BodyText].background},hover:{textColor:n[mF.NonBodyText].foreground,backgroundColor:n[mF.NonBodyText].background,borderColor:n[mF.NonBodyText].background},active:{textColor:n[mF.BodyText].foreground,backgroundColor:n[mF.BodyText].background,borderColor:n[mF.BodyText].background}}}}function jH(e){let t=yF[e][`on-self`][mF.BodyText];return{idle:{textColor:t.foreground,backgroundColor:kH,borderColor:t.background},hover:{textColor:t.foreground,backgroundColor:yF[e][`behind-bg`][mF.Invisible].background,borderColor:t.background},active:{textColor:t.foreground,backgroundColor:yF[e][`behind-bg`][mF.Decoration].background,borderColor:t.background}}}var MH={[q.Plain]:{[wF.Standard]:{idle:{backgroundColor:G.inverse[nF].background,textColor:G.inverse[nF].foreground,borderColor:G.inverse[nF].background},hover:{backgroundColor:G.colors[`vira-grey-behind-bg-non-body`].background,textColor:G.colors[`vira-grey-behind-bg-non-body`].foreground,borderColor:G.colors[`vira-grey-behind-bg-non-body`].background},active:{backgroundColor:G.inverse[nF].background,textColor:G.inverse[nF].foreground,borderColor:G.inverse[nF].background}},[wF.Subtle]:{idle:{backgroundColor:kH,textColor:G.colors[nF].foreground,borderColor:kH},hover:{backgroundColor:G.colors[`vira-grey-behind-fg-small-body`].background,textColor:G.colors[`vira-grey-behind-fg-small-body`].foreground,borderColor:G.colors[`vira-grey-behind-fg-small-body`].background},active:{backgroundColor:G.colors[`vira-grey-behind-fg-body`].background,textColor:G.colors[`vira-grey-behind-fg-body`].foreground,borderColor:G.colors[`vira-grey-behind-fg-body`].background}}},[q.Accent]:AH(bF[q.Accent]),[q.Neutral]:AH(bF[q.Neutral]),[q.Danger]:AH(bF[q.Danger]),[q.Warning]:AH(bF[q.Warning]),[q.Positive]:AH(bF[q.Positive])},NH={[q.Plain]:{idle:{textColor:G.colors[nF].foreground,backgroundColor:kH,borderColor:kH},hover:{backgroundColor:G.colors[`vira-grey-behind-fg-small-body`].background,textColor:G.colors[`vira-grey-behind-fg-small-body`].foreground,borderColor:G.colors[`vira-grey-behind-fg-small-body`].background},active:{backgroundColor:G.colors[`vira-grey-behind-fg-body`].background,textColor:G.colors[`vira-grey-behind-fg-body`].foreground,borderColor:G.colors[`vira-grey-behind-fg-body`].background}},[q.Accent]:jH(bF[q.Accent]),[q.Neutral]:jH(bF[q.Neutral]),[q.Danger]:jH(bF[q.Danger]),[q.Warning]:jH(bF[q.Warning]),[q.Positive]:jH(bF[q.Positive])},PH=NF()({tagName:`vira-tag`,cssVars:{"vira-tag-text-color":`transparent`,"vira-tag-background-color":`transparent`,"vira-tag-border-color":`transparent`,"vira-tag-hover-text-color":`transparent`,"vira-tag-hover-background-color":`transparent`,"vira-tag-hover-border-color":`transparent`,"vira-tag-active-text-color":`transparent`,"vira-tag-active-background-color":`transparent`,"vira-tag-active-border-color":`transparent`,"vira-tag-disabled-text-color":G.colors[`vira-grey-behind-bg-decoration`].foreground.value,"vira-tag-disabled-background-color":G.colors[`vira-grey-behind-bg-decoration`].background.value,"vira-tag-disabled-border-color":G.colors[`vira-grey-behind-bg-decoration`].background.value,"vira-tag-border-radius":`1000px`,"vira-tag-gap":`6px`,"vira-tag-horizontal-padding":`12px`,"vira-tag-border-width":`2px`},events:{toggle:GM(),cancel:GM()},hostClasses:{"vira-tag-selectable":({inputs:e})=>j.isBoolean(e.isClickable?.selected),"vira-tag-checked":({inputs:e})=>!!e.isClickable?.selected,"vira-tag-not-checked":({inputs:e})=>e.isClickable?.selected===!1,"vira-tag-cancellable":({inputs:e})=>!!e.isClickable?.cancellable,"vira-tag-not-clickable":({inputs:e})=>!e.isClickable,"vira-tag-disabled":({inputs:e})=>!!e.disabled,"vira-tag-size-large":({inputs:e})=>e.size===SF.Large,"vira-tag-size-medium":({inputs:e})=>!e.size||e.size===SF.Medium,"vira-tag-size-small":({inputs:e})=>e.size===SF.Small,"vira-tag-emphasis-standard":({inputs:e})=>!e.emphasis||e.emphasis===wF.Standard,"vira-tag-emphasis-subtle":({inputs:e})=>e.emphasis===wF.Subtle,"vira-tag-color-accent":({inputs:e})=>!e.color||e.color===q.Accent,"vira-tag-color-plain":({inputs:e})=>e.color===q.Plain,"vira-tag-color-neutral":({inputs:e})=>e.color===q.Neutral,"vira-tag-color-danger":({inputs:e})=>e.color===q.Danger,"vira-tag-color-warning":({inputs:e})=>e.color===q.Warning,"vira-tag-color-positive":({inputs:e})=>e.color===q.Positive},styles:({cssVars:e,hostClasses:t})=>{function n(){return Su(TF.flatMap(n=>xF.map(r=>{let i=MH[r][n];return B`
                        ${t[`vira-tag-color-${r}`].selector}${t[`vira-tag-emphasis-${n}`].selector} {
                            ${e[`vira-tag-background-color`].name}: ${i.idle.backgroundColor.value};
                            ${e[`vira-tag-text-color`].name}: ${i.idle.textColor.value};
                            ${e[`vira-tag-border-color`].name}: ${i.idle.borderColor.value};

                            ${e[`vira-tag-hover-background-color`].name}: ${i.hover.backgroundColor.value};
                            ${e[`vira-tag-hover-text-color`].name}: ${i.hover.textColor.value};
                            ${e[`vira-tag-hover-border-color`].name}: ${i.hover.borderColor.value};

                            ${e[`vira-tag-active-background-color`].name}: ${i.active.backgroundColor.value};
                            ${e[`vira-tag-active-text-color`].name}: ${i.active.textColor.value};
                            ${e[`vira-tag-active-border-color`].name}: ${i.active.borderColor.value};
                        }
                    `})).join(`
`))}function r(){return Su(xF.map(n=>{let r=NH[n],i=t[`vira-tag-color-${n}`].selector,a=t[`vira-tag-not-checked`].selector;return B`
                    ${i}${a}${a}${a} {
                        ${e[`vira-tag-background-color`].name}: ${r.idle.backgroundColor.value};
                        ${e[`vira-tag-text-color`].name}: ${r.idle.textColor.value};
                        ${e[`vira-tag-border-color`].name}: ${r.idle.borderColor.value};

                        ${e[`vira-tag-hover-background-color`].name}: ${r.hover.backgroundColor.value};
                        ${e[`vira-tag-hover-text-color`].name}: ${r.hover.textColor.value};
                        ${e[`vira-tag-hover-border-color`].name}: ${r.hover.borderColor.value};

                        ${e[`vira-tag-active-background-color`].name}: ${r.active.backgroundColor.value};
                        ${e[`vira-tag-active-text-color`].name}: ${r.active.textColor.value};
                        ${e[`vira-tag-active-border-color`].name}: ${r.active.borderColor.value};
                    }
                `}).join(`
`))}function i(){return Su(CF.map(e=>B`
                    ${t[`vira-tag-size-${e}`].selector} button {
                        height: ${EF[e]}px;
                        font-size: ${K[`vira-form-${e}-text-size`].value};
                    }
                `).join(`
`))}return B`
            :host {
                display: inline-flex;
            }

            ${i()}
            ${n()}
            ${r()}

            button {
                ${OF}
                flex-shrink: 0;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: ${e[`vira-tag-gap`].value};
                border-radius: ${e[`vira-tag-border-radius`].value};
                border-width: ${e[`vira-tag-border-width`].value};
                border-style: solid;
                border-color: ${e[`vira-tag-border-color`].value};
                color: ${e[`vira-tag-text-color`].value};
                background-color: ${e[`vira-tag-background-color`].value};
                box-sizing: border-box;
                padding: 0 ${e[`vira-tag-horizontal-padding`].value};

                &[disabled] {
                    cursor: default;
                    pointer-events: none;
                }
            }

            button:hover {
                background-color: ${e[`vira-tag-hover-background-color`].value};
                color: ${e[`vira-tag-hover-text-color`].value};
                border-color: ${e[`vira-tag-hover-border-color`].value};
            }

            button:active {
                background-color: ${e[`vira-tag-active-background-color`].value};
                color: ${e[`vira-tag-active-text-color`].value};
                border-color: ${e[`vira-tag-active-border-color`].value};
            }

            .cancel-x,
            .selected-check,
            .text {
                height: 0;
                display: flex;
                align-items: center;
            }

            .cancel-x {
                display: none;
                margin-right: -2px;
            }

            .selected-check {
                margin-left: -2px;
                display: none;
                visibility: hidden;
            }

            ${t[`vira-tag-selectable`].selector} .selected-check {
                display: flex;
            }
            ${t[`vira-tag-checked`].selector} .selected-check {
                visibility: visible;
            }
            ${t[`vira-tag-cancellable`].selector} .cancel-x {
                display: flex;
            }

            ${t[`vira-tag-size-small`].selector} button {
                padding: 0 var(${e[`vira-tag-horizontal-padding`].name}, 8px);
                gap: 4px;
            }

            ${t[`vira-tag-size-large`].selector} button {
                padding: 0 var(${e[`vira-tag-horizontal-padding`].name}, 16px);
            }

            ${t[`vira-tag-disabled`].selector} {
                cursor: not-allowed;
                ${jF}

                & button {
                    color: ${e[`vira-tag-disabled-text-color`].value};
                    background-color: ${e[`vira-tag-disabled-background-color`].value};
                    border-color: ${e[`vira-tag-disabled-border-color`].value};
                }
            }
        `},render({inputs:e,dispatch:t,events:n}){let r=!e.isClickable||!!e.disabled;return V`
            <button
                ?disabled=${r}
                ${mN(`click`,()=>{r||(e.isClickable?.selected==null?e.isClickable?.cancellable&&t(new n.cancel):t(new n.toggle(!e.isClickable.selected)))})}
            >
                <${J.assign({icon:EI})}
                    class="selected-check"
                ></${J}>
                <span class="text">${String(e.text)}</span>
                <${J.assign({icon:MI})}
                    class="cancel-x"
                ></${J}>
            </button>
        `}}),FH=AN(),IH=FH()({tagName:`book-route-link`,cssVars:{"book-route-link-anchor-padding":`0px`},styles:({cssVars:e})=>B`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e[`book-route-link-anchor-padding`].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,render:({inputs:e,dispatch:t})=>V`
            <a
                href=${e.router?.createRouteUrl({...e.route})??`#`}
                ${mN(`click`,n=>{(!e.router||BP(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new QP(e.route)))})}
            >
                <slot></slot>
            </a>
        `});function LH(e,t){return e.entry.entryType===a.Root?!1:e.entry.entryType===a.Page||j.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:j.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}var RH=FH()({tagName:`book-nav`,cssVars:{"book-nav-internal-indent":`0`},styles:({cssVars:e})=>B`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${Fd[`element-book-page-background-faint-level-2-color`].value};
        }

        .title-row:hover {
            background-color: ${Fd[`element-book-nav-hover-background-color`].value};
            color: ${Fd[`element-book-nav-hover-foreground-color`].value};
        }

        .title-row:active {
            background-color: ${Fd[`element-book-nav-active-background-color`].value};
            color: ${Fd[`element-book-nav-active-foreground-color`].value};
        }

        .title-row {
            display: block;
            ${IH.cssVars[`book-route-link-anchor-padding`].name}: 1px 24px 1px calc(calc(16px * ${e[`book-nav-internal-indent`].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${Fd[`element-book-nav-selected-background-color`].value};
            color: ${Fd[`element-book-nav-selected-foreground-color`].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            padding: 1px 0;
            text-overflow: ellipsis;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 16px;
        }

        ${J} {
            display: inline-flex;
            color: ${Fd[`element-book-accent-icon-color`].value};
        }
    `,render({inputs:e}){let t=e.flattenedNodes.map(t=>{if(LH(t,e.selectedPath))return V`
                <li style=${B`
                --book-nav-internal-indent: ${t.fullUrlBreadcrumbs.length-1};
            `}>
                    <${IH.assign({router:e.router,route:{paths:[pu.Book,...t.fullUrlBreadcrumbs]}})}
                        class=${bM({"title-row":!0,selected:e.selectedPath?j.jsonEquals(e.selectedPath,t.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${TN(eu(t,a.ElementExample),V`
                                    <${J.assign({icon:AI})}></${J}>
                                `)}
                            ${t.entry.title}
                        </div>
                    </${IH}>
                </li>
            `});return V`
            <${IH.assign({route:hu,router:e.router})}>
                <slot>Book</slot>
            </${IH}>
            <ul>
                ${t}
            </ul>
        `}}),zH=FH()({tagName:`book-error`,styles:B`
        :host {
            display: flex;
            flex-direction: column;
            color: red;
            font-weight: bold;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,render({inputs:e}){return(j.isArray(e.message)?e.message:[e.message]).map(e=>V`
                <p>${e}</p>
            `)}}),BH=FH()({tagName:`book-page-controls`,events:{controlValueChange:GM()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>B`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${Fd[`element-book-page-foreground-faint-level-1-color`].value};
        }

        ${e[`book-page-controls-has-controls`].selector} {
            margin-top: 8px;
        }

        .control-wrapper {
            position: relative;
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }

        ${UL}, ${GL} {
            height: 24px;
            max-width: 128px;
        }

        ${J}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:n}){return Object.entries(e.config).length?Object.entries(e.config).map(([r,i],a)=>{if(i.controlType===Lc.Hidden)return``;let o=VH(e.currentValues[r],i,i=>{let a=j.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[r];if(!a)throw Error(`Failed to find breadcrumbs from given control name: '${r}'`);t(new n.controlValueChange({fullUrlBreadcrumbs:a,newValues:{...Object.fromEntries(Object.keys(e.config).map(t=>[t,e.currentValues[t]])),[r]:i}}))});return V`
                    <div class="control-wrapper">
                        ${TN(a===0,V`
                                <${J.assign({icon:oL})}
                                    class="options-icon"
                                ></${J}>
                            `)}
                        <label class="control-wrapper">
                            <span>
                                ${i.controlType===Lc.Custom?V`
                                          &nbsp;
                                      `:r}
                            </span>
                            ${o}
                        </label>
                    </div>
                `}):``}});function VH(e,t,n){return Ic(t,Lc.Hidden)?``:Ic(t,Lc.Checkbox)?V`
            <${PL.assign({value:!!e})}
                ${mN(PL.events.valueChange,e=>{n(e.detail)})}
            ></${PL}>
        `:Ic(t,Lc.Color)?V`
            <${OH.assign({color:e})}
                style=${B`
                    ${OH.cssVars[`vir-color-picker-swatch-height`].name}: 24px;
                    ${OH.cssVars[`vir-color-picker-swatch-width`].name}: 24px;
                `}
                ${mN(OH.events.colorChange,e=>{n(e.detail)})}
            ></${OH}>
        `:Ic(t,Lc.Text)?V`
            <${UL.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${mN(UL.events.valueChange,e=>{n(e.detail)})}
            ></${UL}>
        `:Ic(t,Lc.Number)?V`
            <${UL.assign({value:e,allowedInputs:/[\d.]/})}
                ${mN(UL.events.valueChange,e=>{n(e.detail)})}
            ></${UL}>
        `:Ic(t,Lc.Dropdown)?V`
            <${GL.assign({value:e,options:t.options.map(e=>({label:e,value:e}))})}
                ${mN(GL.events.valueChange,e=>{n(e.detail)})}
            ></${GL}>
        `:Ic(t,Lc.Custom)?t.content:V`
            <p class="error">
                ${t.controlType} controls are not implemented yet.
            </p>
        `}var HH=FH()({tagName:`book-breadcrumbs`,styles:B`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{let t=e.currentRoute.paths.slice(1);return t.length?t.map((t,n,r)=>{let i=n>=r.length-1,a=r.slice(0,n+1),o=i?``:V`
                      <span class="spacer">&gt;</span>
                  `;return V`
                <${IH.assign({route:{hash:void 0,search:void 0,paths:[pu.Book,...a]},router:e.router})}>
                    ${t}
                </${IH}>
                ${o}
            `}):V`
                &nbsp;
            `}}),UH=FH()({tagName:`book-breadcrumbs-bar`,styles:B`
        :host {
            border-bottom: 1px solid
                ${Fd[`element-book-page-foreground-faint-level-2-color`].value};
            padding: 4px 8px;
            background-color: ${Fd[`element-book-page-background-color`].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return V`
            ${TN(!!e.currentSearch,V`
                    &nbsp;
                `,V`
                    <${HH.assign({currentRoute:e.currentRoute,router:e.router})}></${HH}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${mN(`input`,async e=>{let n=e.currentTarget;if(!(n instanceof HTMLInputElement))throw TypeError(`Failed to find input element for search.`);let r=n.value;await po({milliseconds:200}),n.value===r&&(n.value?t(new QP({paths:[pu.Search,encodeURIComponent(n.value)]})):t(new QP(hu)))})}
            />
        `}}),WH=FH()({tagName:`book-entry-description`,styles:B`
        :host {
            color: ${Fd[`element-book-page-foreground-faint-level-1-color`].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${Fd[`element-book-page-foreground-color`].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }

        code {
            font-size: 1.2em;
        }
    `,render({inputs:e}){return e.descriptionParagraphs.map(e=>V`
                <p>${e}</p>
            `)}}),GH=FH()({tagName:`book-page-wrapper`,styles:B`
        :host {
            display: block;
        }

        h2,
        h3 {
            margin: 0;
            padding: 0;
            font-size: 1.5em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .page-header .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
        }

        ${IH} {
            display: inline-block;
        }
    `,render({inputs:e}){let t=e.isTopLevel?V`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:V`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,n=[pu.Book,...e.pageNode.fullUrlBreadcrumbs],r=e.pageNode.entry.errors.length?Qc(e.pageNode.entry.errors):void 0;return r&&console.error(r),V`
            <div class="page-header block-entry">
                <div class="title-group">
                    ${e.blockNavigation?t:V`
                  <${IH.assign({route:{paths:n,hash:void 0,search:void 0},router:e.router})}>
                      ${t}
                  </${IH}>
              `}
                    ${r?V`
                              <${zH.assign({message:r.message})}></${zH}>
                          `:V`
                              <${WH.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${WH}>
                              <${BH.assign({config:e.pageNode.entry.controls,currentValues:cu(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${BH}>
                          `}
                </div>
            </div>
        `}}),KH=FH()({tagName:`book-element-example-title`,styles:B`
        :host {
            display: flex;
            color: ${Fd[`element-book-page-foreground-faint-level-1-color`].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){if(e.blockNavigation)return e.elementExampleNode.entry.title;let t=[pu.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return V`
            <${IH.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${IH}>
        `}}),qH=Symbol(`unset-internal-state`),JH=FH()({tagName:`book-element-example-viewer`,state(){return{isUnset:qH}},render({state:e,inputs:t,updateState:n}){try{if(t.elementExampleNode.entry.errors.length)throw Qc(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render==`string`)throw Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===qH&&n({isUnset:void 0,...t.elementExampleNode.entry.state?.()});let r=t.elementExampleNode.entry.render({state:e,updateState:n,controls:t.currentPageControls});if(r instanceof Promise)throw TypeError(`render output cannot be a promise`);return V`
                ${TN(!!t.elementExampleNode.entry.styles,V`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${r}
            `}catch(e){return console.error(`ERROR HERE`,S(e)),console.error(e),V`
                <${zH.assign({message:`${t.elementExampleNode.entry.title} failed: ${S(e)}`})}></${zH}>
            `}},options:{allowPolymorphicState:!0}}),YH=FH()({tagName:`book-element-example-wrapper`,styles:B`
        :host {
            display: inline-block;
            max-width: 100%;
        }

        .examples-wrapper {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .error {
            color: red;
            font-weight: bold;
        }

        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
            align-items: flex-start;
        }

        ${KH} {
            color: ${Fd[`element-book-page-foreground-faint-level-1-color`].value};
        }

        :host(:hover) ${KH} {
            color: ${Fd[`element-book-accent-icon-color`].value};
        }
    `,render({inputs:e}){return V`
            <div class="individual-example-wrapper">
                <${KH.assign({blockNavigation:e.blockNavigation,elementExampleNode:e.elementExampleNode,router:e.router})}></${KH}>
                <${JH.assign(e)}></${JH}>
            </div>
        `}}),XH={milliseconds:10},ZH,QH=new Map,$H=new Map;function eU(){return ZH||=new IntersectionObserver(e=>{for(let t of e){let e=t.target,n=QH.get(e);if(n)if(t.isIntersecting){if(!$H.has(e)){let t=globalThis.setTimeout(()=>{$H.delete(e),n(),ZH?.unobserve(e),QH.delete(e)},so(XH,{milliseconds:!0}).milliseconds);$H.set(e,t)}}else{let t=$H.get(e);t&&(clearTimeout(t),$H.delete(e))}}},{rootMargin:`100px`}),ZH}function tU(e){let t=$H.get(e);t&&(clearTimeout(t),$H.delete(e)),QH.delete(e),ZH?.unobserve(e)}var nU=FH()({tagName:`book-lazy-entry`,state(){return{hasRendered:!1,placeholderElement:void 0}},styles:B`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&tU(e.placeholderElement)},render({inputs:e,state:t,updateState:n}){return t.hasRendered?e.content:V`
            <div
                class="placeholder"
                ${vN(e=>{t.placeholderElement&&tU(t.placeholderElement),n({placeholderElement:e}),QH.set(e,()=>{n({hasRendered:!0})}),eU().observe(e)})}
            >
                &nbsp;
            </div>
        `}});function rU(e,t,n,r){let i=ou(n,r),o=[];if(i){let n=rU(e,t,i,r);n&&o.push(n)}if(eu(n,a.Page)&&!e.includes(n)){let e=cu(t,n.fullUrlBreadcrumbs);o.push({config:n.entry.controls,current:e,breadcrumbs:Dl(e,()=>n.fullUrlBreadcrumbs)})}return o.reduce((e,t)=>({config:{...e.config,...t.config},current:{...e.current,...t.current},breadcrumbs:{...e.breadcrumbs,...t.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function iU({blockNavigation:e,currentNodes:t,isTopLevel:n,router:r,isSearching:i,controls:o,originalTree:s}){if(!t.length&&i)return[V`
                No results
            `];let c=j.isLengthAtLeast(t,1)?rU(t,o,t[0],s):void 0;return[c&&Object.values(c.config).length&&j.isLengthAtLeast(t,1)?V`
                  <${BH.assign({config:c.config,currentValues:c.current,fullUrlBreadcrumbs:c.breadcrumbs})}></${BH}>
              `:M,sN(t,e=>e.fullUrlBreadcrumbs.join(`>`),t=>{if(eu(t,a.Page))return V`
                    <${GH.assign({blockNavigation:e,isTopLevel:n,pageNode:t,controls:o,router:r})}
                        class="block-entry"
                    ></${GH}>
                `;if(eu(t,a.ElementExample)){let n=cu(o,t.fullUrlBreadcrumbs.slice(0,-1)),i=V`
                    <${YH.assign({blockNavigation:e,elementExampleNode:t,currentPageControls:n,router:r})}></${YH}>
                `;return V`
                    <${nU.assign({content:i})}
                        class="inline-entry ${bM({"block-entry":t.entry.isVertical})}"
                    ></${nU}>
                `}else if(eu(t,a.Root))return M;else{let e=V`
                    <${zH.assign({message:`Unknown entry type for rendering: '${t.entry.entryType}'`})}></${zH}>
                `;return V`
                    <${nU.assign({content:e})}
                        class="block-entry"
                    ></${nU}>
                `}})]}var aU=FH()({tagName:`book-entry-display`,state(){return{lastElement:void 0}},styles:B`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .all-book-entries-wrapper {
            flex-grow: 1;
            padding: 32px;
        }

        * + .block-entry {
            margin-top: 32px;
        }

        .block-entry + * {
            margin-top: 32px;
        }

        .inline-entry {
            display: inline-block;
            margin: 8px;

            &.block-entry {
                display: block;
            }
        }

        h1 {
            margin: 0;
            padding: 0;
        }

        ${UH} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${lF[`vira-interaction-animation-duration`].value} forwards;
            z-index: 100;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `,events:{loadingRender:GM()},render:({inputs:e,dispatch:t,events:n,state:r,updateState:i})=>{let a=mu(e.currentRoute.paths),o=iU({blockNavigation:e.blockNavigation,currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!a,controls:e.controls,originalTree:e.originalTree});return V`
            <${UH.assign({currentSearch:a,currentRoute:e.currentRoute,router:e.router})}></${UH}>

            ${TN(e.showLoading,V`
                    <div
                        ${vN(()=>{t(new n.loadingRender(!0))})}
                        class="loading"
                    >
                        <${J.assign({icon:nL})}></${J}>
                    </div>
                    ${TN(!!r.lastElement,V`
                            ${r.lastElement}
                            <slot></slot>
                        `)}
                `,V`
                    <div
                        ${vN(e=>{i({lastElement:e})})}
                        class="all-book-entries-wrapper"
                    >
                        ${o}
                    </div>
                    <slot></slot>
                `)}
        `}});function oU(e,t,n){let r=sU(e,t);return r.length?r:(n(hu),sU(e,hu.paths))}function sU(e,t){return e.filter(e=>Kl({searchFor:t.slice(1),searchIn:e.fullUrlBreadcrumbs}))}var cU=nN()({tagName:`element-book-app`,state(){return{currentRoute:hu,router:void 0,loading:!0,colors:{config:void 0,theme:ZN(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:GM()},slotNames:[`footer`,`navHeader`],styles:B`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${Fd[`element-book-page-background-color`].value};
            color: ${Fd[`element-book-page-foreground-color`].value};
        }

        .error {
            color: red;
        }

        .root {
            flex-grow: 1;
            width: 100%;
            display: flex;
            position: relative;
        }

        ${aU} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${RH} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:n,updateState:r,dispatch:i,events:a,slotNames:o})=>{t._debug&&console.info(`rendering element-book app`);function s(t){return{...e.currentRoute,...t}}function c(t){let n=s(t);return!j.jsonEquals(e.currentRoute,n)}function l(n){t.preventWindowTitleChange||(e.originalWindowTitle||r({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,n].filter(j.isTruthy).join(` - `))}function u(n){if(!c(n))return;let o=s(n);e.router?e.router.setRoute(o):r({currentRoute:{...e.currentRoute,...o}}),t.elementBookRoutePaths&&!j.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new a.pathUpdate(o.paths))}try{if(t.elementBookRoutePaths&&!j.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&u({paths:El(t.elementBookRoutePaths)}),t.internalRouterConfig?.useInternalRouter&&!e.router){let e=XP(t.internalRouterConfig.basePath);r({router:e}),e.listen(!0,e=>{r({currentRoute:e})})}else !t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();let i={themeColor:t.themeColor};if(!j.jsonEquals(i,e.colors.config)){let e=ZN(i);r({colors:{config:i,theme:e}}),Ld(n,e)}let a=t._debug??!1,s=ru({entries:t.pages,debug:a});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info(`regenerating global controls`),r({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:du(s.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));let d=mu(e.currentRoute.paths),f=(d?mP({flattenedNodes:s.flattenedNodes,searchQuery:d}):void 0)??oU(s.flattenedNodes,e.currentRoute.paths,u);l(f[0]?.entry.title);let p=e.treeBasedControls?.controls;return p?(t._debug&&console.info({currentControls:p}),V`
                <div
                    class="root"
                    ${mN(QP,e=>{let t=e.detail;if(c(t)&&(r({loading:!0}),u(t),!(n.shadowRoot.querySelector(RH.tagName)instanceof RH)))throw TypeError(`Failed to find child '${RH.tagName}'`)})}
                    ${mN(BH.events.controlValueChange,t=>{if(!e.treeBasedControls)return;let n=uu(p,t.detail.fullUrlBreadcrumbs,t.detail.newValues);r({treeBasedControls:{...e.treeBasedControls,controls:n}})})}
                >
                    ${t.blockNavigation?M:V`
                              <${RH.assign({flattenedNodes:s.flattenedNodes,router:e.router,selectedPath:d?void 0:e.currentRoute.paths.slice(1)})}>
                                  <slot name=${o.navHeader}></slot>
                              </${RH}>
                          `}
                    <${aU.assign({blockNavigation:!!t.blockNavigation,controls:p,currentNodes:f,currentRoute:e.currentRoute,debug:a,originalTree:s.tree,router:e.router,showLoading:e.loading})}
                        ${mN(aU.events.loadingRender,async e=>{await QN();let t=n.shadowRoot.querySelector(aU.tagName);t?t.scroll({top:0,behavior:`instant`}):console.error(`Failed to find '${aU.tagName}' for scrolling.`),await QN(),r({loading:!e.detail})})}
                    >
                        <slot name=${o.footer}></slot>
                    </${aU}>
                </div>
            `):V`
                    <${zH.assign({message:`Failed to generate page controls.`})}></${zH}>
                `}catch(e){return console.error(e),V`
                <p class="error">${S(e)}</p>
            `}}}),lU=fu({title:`Cards`,parent:void 0,descriptionParagraphs:[`Multiple full cards of structured render data.`]});function uU({newStyles:e,oldStyles:t,shadowRoot:n,maintainFirstStylesheet:r}){if(e!==t){let t=new CSSStyleSheet;return t.replaceSync(e),n.adoptedStyleSheets=[r?Dc.isDefined(n.adoptedStyleSheets[0]):void 0,t].filter(j.isTruthy),!0}return!1}function dU(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var fU=dU();function pU(e){fU=e}var mU={exec:()=>null};function hU(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(_U.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var gU=(()=>{try{return!0}catch{return!1}})(),_U={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,`i`),blockquoteBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}>`)},vU=/^(?:[ \t]*(?:\n|$))+/,yU=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,bU=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,xU=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,SU=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,CU=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,wU=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,TU=hU(wU).replace(/bull/g,CU).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),EU=hU(wU).replace(/bull/g,CU).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),DU=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,OU=/^[^\n]+/,kU=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,AU=hU(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,kU).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),jU=hU(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,CU).getRegex(),MU=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,NU=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,PU=hU(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,NU).replace(`tag`,MU).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),FU=hU(DU).replace(`hr`,xU).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,MU).getRegex(),IU={blockquote:hU(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,FU).getRegex(),code:yU,def:AU,fences:bU,heading:SU,hr:xU,html:PU,lheading:TU,list:jU,newline:vU,paragraph:FU,table:mU,text:OU},LU=hU(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,xU).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,MU).getRegex(),RU={...IU,lheading:EU,table:LU,paragraph:hU(DU).replace(`hr`,xU).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,LU).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,MU).getRegex()},zU={...IU,html:hU(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,NU).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:mU,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:hU(DU).replace(`hr`,xU).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,TU).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},BU=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,VU=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,HU=/^( {2,}|\\)\n(?!\s*$)/,UU=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,WU=/[\p{P}\p{S}]/u,GU=/[\s\p{P}\p{S}]/u,KU=/[^\s\p{P}\p{S}]/u,qU=hU(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,GU).getRegex(),JU=/(?!~)[\p{P}\p{S}]/u,YU=/(?!~)[\s\p{P}\p{S}]/u,XU=/(?:[^\s\p{P}\p{S}]|~)/u,ZU=/(?![*_])[\p{P}\p{S}]/u,QU=/(?![*_])[\s\p{P}\p{S}]/u,$U=/(?:[^\s\p{P}\p{S}]|[*_])/u,eW=hU(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,gU?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),tW=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,nW=hU(tW,`u`).replace(/punct/g,WU).getRegex(),rW=hU(tW,`u`).replace(/punct/g,JU).getRegex(),iW=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,aW=hU(iW,`gu`).replace(/notPunctSpace/g,KU).replace(/punctSpace/g,GU).replace(/punct/g,WU).getRegex(),oW=hU(iW,`gu`).replace(/notPunctSpace/g,XU).replace(/punctSpace/g,YU).replace(/punct/g,JU).getRegex(),sW=hU(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,KU).replace(/punctSpace/g,GU).replace(/punct/g,WU).getRegex(),cW=hU(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,ZU).getRegex(),lW=hU(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,$U).replace(/punctSpace/g,QU).replace(/punct/g,ZU).getRegex(),uW=hU(/\\(punct)/,`gu`).replace(/punct/g,WU).getRegex(),dW=hU(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),fW=hU(NU).replace(`(?:-->|$)`,`-->`).getRegex(),pW=hU(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,fW).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),mW=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,hW=hU(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,mW).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),gW=hU(/^!?\[(label)\]\[(ref)\]/).replace(`label`,mW).replace(`ref`,kU).getRegex(),_W=hU(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,kU).getRegex(),vW=hU(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,gW).replace(`nolink`,_W).getRegex(),yW=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,bW={_backpedal:mU,anyPunctuation:uW,autolink:dW,blockSkip:eW,br:HU,code:VU,del:mU,delLDelim:mU,delRDelim:mU,emStrongLDelim:nW,emStrongRDelimAst:aW,emStrongRDelimUnd:sW,escape:BU,link:hW,nolink:_W,punctuation:qU,reflink:gW,reflinkSearch:vW,tag:pW,text:UU,url:mU},xW={...bW,link:hU(/^!?\[(label)\]\((.*?)\)/).replace(`label`,mW).getRegex(),reflink:hU(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,mW).getRegex()},SW={...bW,emStrongRDelimAst:oW,emStrongLDelim:rW,delLDelim:cW,delRDelim:lW,url:hU(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,yW).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:hU(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,yW).getRegex()},CW={...SW,br:hU(HU).replace(`{2,}`,`*`).getRegex(),text:hU(SW.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},wW={normal:IU,gfm:RU,pedantic:zU},TW={normal:bW,gfm:SW,breaks:CW,pedantic:xW},EW={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},DW=e=>EW[e];function OW(e,t){if(t){if(_U.escapeTest.test(e))return e.replace(_U.escapeReplace,DW)}else if(_U.escapeTestNoEncode.test(e))return e.replace(_U.escapeReplaceNoEncode,DW);return e}function kW(e){try{e=encodeURI(e).replace(_U.percentDecode,`%`)}catch{return null}return e}function AW(e,t){let n=e.replace(_U.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(_U.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(_U.slashPipe,`|`);return n}function jW(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function MW(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function NW(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function PW(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function FW(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var IW=class{options;rules;lexer;constructor(e){this.options=e||fU}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,``);return{type:`code`,raw:t[0],codeBlockStyle:`indented`,text:this.options.pedantic?e:jW(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=FW(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=jW(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:jW(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=jW(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=NW(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),e.task){if(e.text=e.text.replace(this.rules.other.listReplaceTask,``),e.tokens[0]?.type===`text`||e.tokens[0]?.type===`paragraph`){e.tokens[0].raw=e.tokens[0].raw.replace(this.rules.other.listReplaceTask,``),e.tokens[0].text=e.tokens[0].text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}}let t=this.rules.other.listTaskCheckbox.exec(e.raw);if(t){let n={type:`checkbox`,raw:t[0]+` `,checked:t[0]!==`[ ]`};e.checked=n.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=n.raw+e.tokens[0].raw,e.tokens[0].text=n.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(n)):e.tokens.unshift({type:`paragraph`,raw:n.raw,text:n.raw,tokens:[n]}):e.tokens.unshift(n)}}if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:`html`,block:!0,raw:t[0],pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:t[0],href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=AW(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(AW(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:`heading`,raw:t[0],depth:t[2].charAt(0)===`=`?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=jW(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=MW(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),PW(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return PW(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||r[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},LW=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||fU,this.options.tokenizer=this.options.tokenizer||new IW,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:_U,block:wW.normal,inline:TW.normal};this.options.pedantic?(t.block=wW.pedantic,t.inline=TW.pedantic):this.options.gfm&&(t.block=wW.gfm,this.options.breaks?t.inline=TW.breaks:t.inline=TW.gfm),this.tokenizer.rules=t}static get rules(){return{block:wW,inline:TW}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(_U.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.options.pedantic&&(e=e.replace(_U.tabCharGlobal,`    `).replace(_U.spaceLine,``));e;){let r;if(this.options.extensions?.block?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let n=t.at(-1);r.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.text,this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},t.push(r));continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){let a=t.at(-1);n&&a?.type===`paragraph`?(a.raw+=(a.raw.endsWith(`
`)?``:`
`)+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(r),n=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``;for(;e;){a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return t}},RW=class{options;parser;constructor(e){this.options=e||fU}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(_U.notSpaceStart)?.[0],i=e.replace(_U.endingNewline,``)+`
`;return r?`<pre><code class="language-`+OW(r)+`">`+(n?i:OW(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:OW(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${OW(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=kW(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+OW(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=kW(e);if(i===null)return OW(n);e=i;let a=`<img src="${e}" alt="${OW(n)}"`;return t&&(a+=` title="${OW(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:OW(e.text)}},zW=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},BW=class e{options;renderer;textRenderer;constructor(e){this.options=e||fU,this.options.renderer=this.options.renderer||new RW,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new zW}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},VW=class{options;block;constructor(e){this.options=e||fU}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?LW.lex:LW.lexInline}provideParser(){return this.block?BW.parse:BW.parseInline}},HW=new class{defaults=dU();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=BW;Renderer=RW;TextRenderer=zW;Lexer=LW;Tokenizer=IW;Hooks=VW;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new RW(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new IW(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new VW;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];VW.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&VW.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return LW.lex(e,t??this.defaults)}parser(e,t){return BW.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer():e?LW.lex:LW.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser():e?BW.parse:BW.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer():e?LW.lex:LW.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser():e?BW.parse:BW.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+OW(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function UW(e,t){return HW.parse(e,t)}UW.options=UW.setOptions=function(e){return HW.setOptions(e),UW.defaults=HW.defaults,pU(UW.defaults),UW},UW.getDefaults=dU,UW.defaults=fU,UW.use=function(...e){return HW.use(...e),UW.defaults=HW.defaults,pU(UW.defaults),UW},UW.walkTokens=function(e,t){return HW.walkTokens(e,t)},UW.parseInline=HW.parseInline,UW.Parser=BW,UW.parser=BW.parse,UW.Renderer=RW,UW.TextRenderer=zW,UW.Lexer=LW,UW.lexer=LW.lex,UW.Tokenizer=IW,UW.Hooks=VW,UW.parse=UW,UW.options,UW.setOptions,UW.use,UW.walkTokens,UW.parseInline,BW.parse,LW.lex;var WW=`structured-rendering-markdown-rendering-content-for-screenshot`,GW=`
.${WW} > *:first-child {
    margin-top: 0;
}
.${WW} > *:last-child {
    margin-bottom: 0;
}
`,KW={accentColor:`dodgerblue`,bodySize:`14px`,h1Size:`22px`,h2Size:`18px`,h3Size:`16px`,h4Size:`15px`,h5Size:`14px`,h6Size:`14px`,bodyGap:`24px`,smallTextSize:`10px`,liSpacing:`4px`,bodyFont:`sans-serif`,codeFont:`monospace`,codeSize:`1em`,codeBackgroundColor:G.colors[`vira-grey-behind-fg-small-body`].background.value,contentSelector:`.${WW}`,tableBorderColor:G.colors[`vira-grey-foreground-decoration`].foreground.value,tableBorderWidth:`1px`};function qW(e){return Dl(ul(KW,e),(e,t)=>j.isString(t)?Su(t):t instanceof xu?t:t.value)}var JW=YW();function YW(e){let t=qW(e);return B`
        ${Su(e?.contentSelector||KW.contentSelector)} {
            display: flex;
            flex-direction: column;
            gap: ${t.bodyGap};
            font-family: ${t.bodyFont};
            font-size: ${t.bodySize};
            align-items: flex-start;

            & * {
                font-family: inherit;
                font-size: inherit;
                ${DF}
            }

            & h1 {
                font-size: ${t.h1Size};
            }
            & h2 {
                font-size: ${t.h2Size};
            }
            & h3 {
                font-size: ${t.h3Size};
            }
            & h4 {
                font-size: ${t.h4Size};
            }
            & h5 {
                font-size: ${t.h5Size};
            }
            & h6 {
                font-size: ${t.h6Size};
            }
            & ul,
            & ol {
                padding-left: 1.1em;
                & li {
                    margin-bottom: ${t.liSpacing};
                }
            }
            & strong {
                font-weight: bold;
            }
            & em {
                font-style: italic;
            }
            & code {
                background-color: ${t.codeBackgroundColor};
                padding: 2px 6px;
                border-radius: 4px;
                font-family: ${t.codeFont};
                font-size: ${t.codeSize};
            }

            .inlineCode-section {
                display: inline-flex;
            }

            & pre {
                background-color: ${t.codeBackgroundColor};
                padding: 2px 12px 6px;
                border-radius: 6px;
                white-space: pre-wrap;
                overflow-x: auto;
                font-family: ${t.codeFont};
                font-size: ${t.codeSize};

                & code {
                    background-color: transparent;
                    padding: 0;
                }
            }

            & blockquote {
                border-left: 4px solid ${t.accentColor};
                padding-left: 16px;
                margin-left: 0;
                font-style: italic;
            }

            & hr {
                border: none;
                border-top: 1px solid currentColor;
                margin: 20px 0;
            }

            & small {
                font-size: ${t.smallTextSize};
            }

            & th,
            & td {
                border-top: ${t.tableBorderWidth} solid ${t.tableBorderColor};
                border-left: ${t.tableBorderWidth} solid ${t.tableBorderColor};
                padding: 8px 12px;
                text-align: left;
            }

            & thead tr:first-child th,
            & thead tr:first-child td,
            & tbody tr:first-child th,
            & tbody tr:first-child td {
                border-top-color: transparent;
            }

            & thead + tbody tr:first-child {
                & td,
                & th {
                    border-top-color: ${t.tableBorderColor};
                }
            }

            & table {
                border-collapse: collapse;
                max-width: 100%;

                & th:first-child,
                & td:first-child {
                    border-left: none;
                }

                & th {
                    font-weight: bold;
                }
            }

            & a {
                color: ${t.accentColor};
            }

            & img {
                max-width: 100%;
                height: auto;
            }

            & h1,
            & h2,
            & h3,
            & h4,
            & h5,
            & h6 {
                break-after: avoid;
                page-break-after: avoid;
                break-inside: avoid;
                page-break-inside: avoid;
            }

            & h2:not(:first-child) {
                margin-top: 16px;
            }

            & table,
            & pre,
            & blockquote,
            & ul,
            & ol,
            & img {
                break-inside: avoid;
                page-break-inside: avoid;
            }

            & tr {
                break-inside: avoid;
                page-break-inside: avoid;
            }
        }
    `}var XW=nN()({tagName:`vir-markdown`,styles:B`
        :host {
            display: flex;
            flex-direction: column;
        }
    `,state(){return{renderedElement:void 0,sanitizedHtml:aN({async updateCallback(e){let t=await UW.parse(e);return i.sanitize(t)}}),lastStyleString:``}},render({inputs:e,state:t,updateState:n,host:r}){t.sanitizedHtml.update(e.markdownString);let i=String(e.renderStyles||JW);return uU({maintainFirstStylesheet:!0,newStyles:i,oldStyles:t.lastStyleString,shadowRoot:r.shadowRoot})&&n({lastStyleString:i}),wN(t.sanitizedHtml,V`
                <${J.assign({icon:nL})}></${J}>
            `,e=>V`
                    <div
                        class=${WW}
                        ${vN(e=>{e instanceof HTMLElement&&n({renderedElement:e})})}
                    >
                        ${wM(e)}
                    </div>
                `,e=>V`
                    <${LL}>
                        ${je(`Failed to parse markdown content.`,e)}
                    </${LL}>
                `)}}),ZW=_j({x1:-1,y1:-1,x2:-1,y2:-1}),QW=_j({type:wj(`source`),pageNumbers:Aj([Aj(-1)]),fileName:Aj(``),fileBoundingBoxes:Aj([Aj(ZW)]),quote:Aj(``)});function $W(e){return Pc.isLengthAtLeast(Jc(e).filter(eG),1)}function eG(e){return!!(e&&(e.quote?.trim()||e.fileName||e.pageNumbers?.filter(j.isDefined).length))}var tG=nN()({tagName:`vir-source`,hostClasses:{"vir-source-phone-size":({inputs:e})=>e.options.isPhoneSize},events:{viewOnPageClick:GM()},cssVars:{"vir-source-background-color":G.colors[nF].background.value,"vir-source-borer-radius":K[`vira-form-radius`].value,"vir-source-header-color":G.colors[`vira-grey-foreground-header`].foreground.value,"vir-source-view-on-page-icon-color":K[`vira-form-accent-primary-color`].value,"vir-source-view-on-page-hover-background-color":G.colors[`vira-grey-behind-fg-small-body`].background.value,"vir-source-view-on-page-active-background-color":G.colors[`vira-grey-behind-fg-body`].background.value,"vir-source-font-size":`16px`,"vir-source-phone-font-size":`14px`},styles:({hostClasses:e,cssVars:t})=>B`
        ${NL} {
            background: ${t[`vir-source-background-color`].value};
            border-radius: ${t[`vir-source-borer-radius`].value};
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        p {
            ${DF}
        }

        .header {
            display: flex;
            align-items: center;
            gap: 4px;
            color: ${t[`vir-source-header-color`].value};
        }

        .entries {
            display: flex;
            flex-direction: column;
            gap: 16px;

            & .entry {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 2px;

                & .source-text {
                    margin: 0;
                    line-height: 1.5em;
                }

                & .view-on-page-button {
                    ${OF};
                    cursor: pointer;
                    color: ${t[`vir-source-view-on-page-icon-color`].value};
                    display: inline-flex;
                    align-items: center;
                    vertical-align: middle;
                    gap: 4px;
                    padding: 2px 6px;
                    border-radius: 4px;

                    &:hover {
                        background-color: ${t[`vir-source-view-on-page-hover-background-color`].value};
                    }

                    &:active {
                        background-color: ${t[`vir-source-view-on-page-active-background-color`].value};
                    }

                    & ${J} {
                        width: ${t[`vir-source-font-size`].value};
                        height: ${t[`vir-source-font-size`].value};
                    }
                }
            }
        }

        ${J} {
            width: 20px;
            height: 20px;
        }

        ${e[`vir-source-phone-size`].selector} {
            padding: 4px;
            ${t[`vir-source-phone-font-size`].value}

            gap: 4px;

            & ${J} {
                width: 18px;
                height: 18px;
            }
        }
    `,render({inputs:e,dispatch:t,events:n}){let r=$W(e.sources);return r?V`
            <${NL}>
                <p class="header">
                    <${J.assign({icon:e.options.sourceIcon,fitContainer:!0})}></${J}>
                    <span>${e.options.pluralSourcesString}</span>
                </p>
                <div class="entries">
                    ${r.map(r=>{let i=!e.options.hideViewOnPageButtons&&r.fileName&&r.pageNumbers?.length?V`
                                      <button
                                          class="view-on-page-button"
                                          title=${r.fileName}
                                          ${mN(`click`,()=>{t(new n.viewOnPageClick(r))})}
                                      >
                                          <${J.assign({icon:e.options.viewOnPageIcon,fitContainer:!0})}></${J}>
                                          ${e.options.createViewOnPageString(r.pageNumbers[0]??1)}
                                      </button>
                                  `:void 0,a=r.quote?.trim()||``,o=a?V`
                                  <p class="source-text">"${a}"</p>
                              `:void 0;return o||i?V`
                                <div class="entry">${o} ${i}</div>
                            `:M})}
                </div>
            </${NL}>
        `:M}}),nG=_j({type:wj(`icon`),iconKey:``,strokeColor:Aj(``),fillColor:Aj(``),strokeWidth:Aj(kj(``,-1))});function rG(e,{icons:t}){let n=t[e.iconKey];if(n)return DL(n,{"vira-icon-fill-color":e.fillColor||void 0,"vira-icon-stroke-color":e.strokeColor||void 0,"vira-icon-stroke-width":j.isString(e.strokeWidth)?e.strokeWidth:j.isNumber(e.strokeWidth)?pl({value:e.strokeWidth,suffix:`px`}):void 0})}function iG(e,t){return _j({type:wj(e),sectionTitle:Aj(``),sources:Aj([Aj(QW)]),...t})}var aG=_j({type:wj(`empty`)}),oG=iG(`inlineCode`,{code:``}),sG=iG(`tag`,{text:Mj(``),useBigTag:Aj(!1),color:Aj(kj({custom:jj({backgroundColor:Aj(``),foregroundColor:Aj(``)})},{variant:Cj(q)}))}),cG=function(e){return e.Faint=`faint`,e.Small=`small`,e.Bold=`bold`,e}({}),lG=iG(`text`,{text:Aj(Mj()),style:Aj(Cj(cG)),icon:Aj(nG)}),uG=iG(`list`,{items:[_j({content:Aj(kj(lG,sG,aG)),icon:Aj(nG),sources:Aj([Aj(QW)])})]}),dG=iG(`markdown`,{markdown:``}),fG=_j({type:wj(`processing`)}),pG=function(e){return e.Left=`left`,e.Right=`right`,e}({}),mG=function(e){return e.Horizontal=`horizontal`,e.Vertical=`vertical`,e}({}),hG=kj(lG,oG,dG,sG,uG,aG,fG),gG=iG(`table`,{direction:Cj(mG),headers:[{key:``,text:Aj(lG),hidden:Aj(!1)}],entries:[{data:Hj({keys:``,values:kj(Aj(hG),[Aj(hG)])}),sources:Aj([Aj(QW)])}],footerRows:Aj([{alignment:Aj(Cj(pG)),cells:kj(Aj(hG),[Aj(hG)])}])});function _G(e,t,n,r){return{type:`table`,direction:e,headers:t,entries:n,footerRows:r}}var vG=iG(`codeBlock`,{syntax:Aj(``),code:``}),yG=[vG,oG,aG,uG,dG,sG,fG,QW,gG,lG,nG,iG(`collapsible`,{header:Mj(),content:[kj(vG,aG,nG,oG,uG,dG,fG,sG,gG,lG)]})];kj(...yG);var Q=Kc(yG,e=>({key:e.default.type,value:e.default.type}),{useRequired:!0}),bG={icons:OL,sourceString:`Source`,pluralSourcesString:`Sources`},xG={...bG,styles:JW},SG={...bG,processingString:`Processing`,currentlyExpanded:{},sourceIcon:KI,viewOnPageIcon:ZI,processingIcon:nL,expandSourcesOnPrint:!1,hideViewOnPageButtons:!1,isPhoneSize:!1,markdownStyles:JW,createViewOnPageString(e){return`View on page ${e}`},expandAllCards:!1,blockCardExpansion:!1,expandFirstCard:!1};function CG(e,t){return EG(e,ul(SG,t),[])}function wG(e){if(e==null)return;if(!j.isString(e))return String(e);let t=e.trim();if(!t)return;let n=t.split(`
`);return n.flatMap((e,t)=>V`
            ${e}${t<n.length-1?V`
                      <br />
                  `:``}
        `)}var TG={icon(e,t){let n=rG(e,t);return n?V`
            <${J.assign({icon:n})}></${J}>
        `:M},codeBlock(e){return V`
            <pre>${e.code}</pre>
        `},collapsible(e,t,n){return V`
            <${IL.assign({rawCollapsible:!0})}>
                <span slot=${IL.slotNames.header}>${String(e.header)}</span>
                ${EG(e.content,t,[...n,`collapsible`])}
            </${IL}>
        `},empty(){},inlineCode(e){return V`
            <code>${e.code}</code>
        `},list(e,t,n){let r=Gc(e.items,(e,r)=>{if(!e.icon&&!e.content)return;let i=[...n,r],a=e.content?EG(e.content,t,[...i,`content`]):void 0,o=V`
                    ${e.icon?EG(e.icon,t,[...i,`icon`]):M}${a}
                `;return V`
                    <li
                        class=${bM({"list-item-with-icon":!!e.icon})}
                    >
                        ${NG(o,t,i,e.sources)}
                    </li>
                `},j.isTruthy);if(r.length)return V`
            <ul>
                ${r}
            </ul>
        `},markdown(e,t){return V`
            <${XW.assign({markdownString:e.markdown,renderStyles:t.markdownStyles})}></${XW}>
        `},tag(e){let t=e.color&&`custom`in e.color&&(e.color.custom.backgroundColor||e.color.custom.foregroundColor)?B`
                      ${e.color.custom.backgroundColor?B`
                                ${PH.cssVars[`vira-tag-background-color`].name}: ${Su(e.color.custom.backgroundColor)};
                            `:B``}
                      ${e.color.custom.foregroundColor?B`
                                ${PH.cssVars[`vira-tag-text-color`].name}: ${Su(e.color.custom.foregroundColor)};
                            `:B``}
                  `:void 0,n=e.color&&`variant`in e.color?e.color.variant:void 0;return V`
            <${PH.assign({text:e.text,color:t?q.None:n,size:e.useBigTag?SF.Medium:SF.Small,emphasis:wF.Subtle})}
                style=${xM(t)}
            ></${PH}>
        `},processing(e,t){return V`
            <${J.assign({icon:t.processingIcon})}></${J}>
            <span>${t.processingString}...</span>
        `},source(e,t){return V`
            <${tG.assign({options:t,sources:e})}></${tG}>
        `},table(e,t,n){let{headerRow:r,rows:i}=CH(Gc(e.headers,(e,r)=>{if(!e.hidden)return{key:e.key,content:e.text?EG(e.text,t,[...n,`headers`,r]):e.key}},j.isTruthy),e.entries,(r,i)=>Dl(r.data,(r,a)=>{let o=Jc(a).filter(j.isTruthy);if(o.length)return Array.from(SM(Gc(o,(a,o)=>{let s=`sources`in a?{sources:e.direction===mG.Vertical?void 0:a.sources}:{};return EG({...a,...s},t,[...n,i,r,o])},j.isTruthy),V`
                                <br />
                            `))}),{orientation:e.direction===mG.Horizontal?SH.Vertical:SH.Horizontal}),a=i.map(t=>{let n=t.cells.at(-1);return $W([...Jc(e.direction===mG.Vertical&&n?Jc(n.data?.data[n.key]).filter(j.isTruthy).flatMap(e=>`sources`in e?Jc(e.sources):[]):void 0),...Jc(t.data?.sources)])}),o=a.some(e=>!!e?.length),s=i[0]?.cells.length||0;return V`
            <table
                cellspacing="0"
                cellpadding="0"
                class=${bM({vertical:e.direction===mG.Vertical,horizontal:e.direction===mG.Horizontal,"wide-table":e.direction===mG.Horizontal&&r?r.length>5:e.direction===mG.Vertical&&i[0]?i[0].cells.length>5:!1})}
            >
                ${r?V`
                          <thead>
                              <tr>
                                  ${r.map(e=>V`
                                          <th>${e.content}</th>
                                      `)}
                                  ${o?V`
                                            <th class="source-cell"></th>
                                        `:M}
                              </tr>
                          </thead>
                      `:M}
                <tbody>
                    ${i.map((r,i)=>{let s=[...n,i],c=a[i],l=r.cells.map((n,i)=>{let a=i===r.cells.length-1,o=e.direction===mG.Vertical&&i===0?`th`:`td`,l=V`
                                <${o}>${n.content}</${o}>
                            `;return c?.length&&a?V`
                                    ${l}
                                    <td class="source-cell">
                                        ${jG(``,t,s,c)}
                                    </td>
                                `:l}),u=c?.length?V`
                                  <tr class="source-row">
                                      <td colspan=${l.length}>
                                          ${MG(t,s,c)}
                                      </td>
                                  </tr>
                              `:M;return V`
                            <tr>
                                ${l}
                                ${o?V`
                                          <td class="source-cell"></td>
                                      `:M}
                            </tr>
                            ${u}
                        `})}
                </tbody>
                ${e.footerRows?.length?V`
                          <tfoot>
                              ${e.footerRows.map((e,r)=>{let i=Jc(e.cells);if(!i.length)return M;let a=e.alignment===pG.Right?s-i.length+1:0;return V`
                                      <tr>${i.map((e,i)=>{let o=i?0:a,s=o<1?void 0:o,c=e?EG(e,t,[...n,`footers`,r,i]):M;return V`
                                          <td
                                              colspan=${xM(s)}
                                              class=${bM({"right-aligned-footer-cell":!!s})}
                                          >
                                              ${c}
                                          </td>
                                      `})}</tr>
                                  `})}
                          </tfoot>
                      `:M}
            </table>
        `},text(e,t,n){let r=wG(e.text),i=e.style?`text-style-${e.style}`:void 0;if(r)return V`
            ${EG(e.icon,t,[...n,`icon`])}
            <span
                class=${[i,`text-section-text-content`].join(` `)}
            >
                ${r}
            </span>
        `}};function EG(e,t,n){return kG(e,t,n,!1).filter(j.isTruthy)}var DG=ll(Q,e=>[e,`section`].join(`-`)),OG=`structured-render-section`;function kG(e,t,n,r){if(!e)return[];if(j.isArray(e))return e.flatMap((e,i)=>kG(e,t,[...n,i],r));if(`type`in e){let i=`sectionTitle`in e&&n.length>0&&!(r&&n.at(-1)===0)&&e.sectionTitle||void 0,a=TG[e.type](e,t,n),o=`sources`in e&&e.sources||void 0,s=V`
            <div
                class=${bM({"section-wrapper":!0,"top-section-wrapper":r,[DG[e.type]]:!0})}
                ${kN(OG)}
                ${kN(DG[e.type])}
            >
                ${NG(a,t,n,o)}
            </div>
        `;return[i?V`
                      <h3>${i}</h3>
                  `:void 0,s]}else if(`sections`in e){let r=kG(e.sections,t,[...n,`sections`],!0);return[V`
                <${IL.assign({expandOnPrint:!0,blockExpansion:t.blockCardExpansion,hideHeader:!e.cardTitle,startExpanded:t.expandAllCards||t.expandFirstCard&&n.at(-1)===0})}>
                    <h2 slot=${IL.slotNames.header}>${e.cardTitle}</h2>
                    ${r}
                </${IL}>
            `]}else throw Mc.tsType(e).equals(),Error(`Unexpected structured render type: ${v(e)}`)}var AG=WM()(`source-expansion`);function jG(e,t,n,r){let i=$W(r),a=[...n,`source-icon`],o=PG(a),s=!!t.currentlyExpanded[o];return V`
        <div class="source-content-wrapper">${e}${i?V`
              <div class="source-icon-wrapper">
                  <button class="source-icon-button">
                      <${J.assign({icon:t.sourceIcon,fitContainer:!0})}
                          ${mN(`click`,e=>{aP(e,HTMLElement).dispatchEvent(new AG({expanded:!s,key:PG(a)}))})}
                      ></${J}>
                  </button>
              </div>
          `:M}</div>
    `}function MG(e,t,n){let r=$W(n);if(!r)return;let i=PG([...t,`source-icon`]),a=!!e.currentlyExpanded[i];return V`
        <${FL.assign({expanded:a,expandOnPrint:e.expandSourcesOnPrint})}
            class="collapsible-source-wrapper ${bM({"expanded-source":a})}"
        >
            <span slot=${FL.slotNames.header}></span>
            <${tG.assign({options:e,sources:r})}></${tG}>
        </${FL}>
    `}function NG(e,t,n,r){return V`
        ${jG(e,t,n,r)}
        ${MG(t,n,r)}
    `}function PG(e){return[`key`,...e].join(`;`).replaceAll(` `,`_`).replaceAll(/[^\w;]/g,``)}var FG=B`4px`,$=nN()({tagName:`vir-structured-render`,state(){return{currentlyExpanded:{},lastStyleString:``}},cssVars:{"vir-structured-render-h1-font-size":`24px`,"vir-structured-render-h2-font-size":`18px`,"vir-structured-render-h3-font-size":`16px`,"vir-structured-render-small-font-size":`12px`},hostClasses:{"vir-structured-render-phone-size":({inputs:e})=>!!e.options?.isPhoneSize,"vir-structured-render-tablet-size":({inputs:e})=>!!e.options?.isTabletSize},styles:({cssVars:e,hostClasses:t})=>B`
        :host {
            ${yH(G.colors[nF])}
        }

        ${J} {
            flex-shrink: 0;
        }

        :host,
        .${Su(WW)}.${Su(WW)}.${Su(WW)} {
            display: flex;
            flex-direction: column;
            align-items: stretch;
        }

        .view-header {
            display: flex;
            flex-grow: 1;
            justify-content: space-between;

            & .title-wrapper {
                display: flex;
                gap: 32px;
                align-items: center;
                text-align: left;

                & h2 {
                    font-size: ${e[`vir-structured-render-h2-font-size`].value};
                }
            }

            & ${PH} {
                font-size: 14px;
            }

            & .risk-counts {
                display: flex;
                gap: 4px;
            }

            & .header-risk {
                flex-wrap: wrap;
                margin-left: auto;
                display: flex;
                gap: 8px;
            }

            & .risk-count {
                display: flex;
                align-items: center;
                gap: 4px;

                & .risk-count-number {
                    font-size: 16px;
                    font-family: monospace;
                    width: 3ch;
                    text-align: left;
                }
            }
        }

        .text-style-${Su(cG.Faint)}.text-style-${Su(cG.Faint)}.text-style-${Su(cG.Faint)}.text-style-${Su(cG.Faint)} {
            color: ${G.colors[`vira-grey-foreground-non-body`].foreground.value};
        }
        .text-style-${Su(cG.Bold)}.text-style-${Su(cG.Bold)}.text-style-${Su(cG.Bold)}.text-style-${Su(cG.Bold)} {
            font-weight: bold;
        }
        .text-style-${Su(cG.Small)}.text-style-${Su(cG.Small)}.text-style-${Su(cG.Small)}.text-style-${Su(cG.Small)} {
            font-size: ${e[`vir-structured-render-small-font-size`].value};
        }

        table {
            border-collapse: collapse;
            max-width: 100%;

            & th,
            & td {
                padding: 16px;
                padding-left: 24px;

                &:first-child {
                    padding-left: 0;
                }

                &:has(+ .source-cell) {
                    border-right: none;
                    padding-right: 0;
                }

                &.source-cell {
                    border-left: none !important;
                    padding: 0;
                    padding-left: 4px;
                }
            }

            & td {
                word-break: break-word;
            }

            & th {
                text-align: left;
                font-weight: normal;
                white-space: nowrap;
                vertical-align: top;
            }

            &.wide-table {
                font-size: 14px;

                & th,
                & td {
                    padding: 4px;
                    padding-left: 8px;

                    &:first-child {
                        padding-left: 0;
                    }
                }
            }

            &.vertical {
                align-self: flex-start;

                & th {
                    font-weight: bold;
                }
            }

            &.horizontal {
                align-self: flex-start;
            }

            & .source-row td {
                border: none !important;
                padding: 0 !important;
            }

            & tfoot {
                font-size: ${e[`vir-structured-render-h2-font-size`].value};
                font-weight: bold;

                & td {
                    border: none;
                }

                & td.right-aligned-footer-cell {
                    text-align: right;
                    & > .section-wrapper {
                        display: inline-flex;
                    }
                }
            }
        }

        .expanded-source {
            margin: 8px 0 !important;
        }

        *::first-line {
            /* this height must match the icon size */
            line-height: 24px;
        }

        .processing-wrapper {
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .section-wrapper {
            display: flex;
            flex-direction: column;

            & .source-content-wrapper {
                display: flex;
            }

            & .collapsible-source-wrapper {
                border: none;
            }

            & .text-section-text-content {
                flex-grow: 1;
                vertical-align: middle;
            }

            & .source-icon-button {
                ${OF};
                cursor: pointer;
                color: ${G.colors[`vira-grey-foreground-header`].foreground.value};
                padding: 2px;
                border-radius: 4px;

                & ${J} {
                    display: flex;
                }

                &:hover {
                    background-color: ${G.colors[`vira-grey-behind-fg-small-body`].background.value};
                    color: ${K[`vira-form-accent-primary-color`].value};
                }

                &:active {
                    background-color: ${G.colors[`vira-grey-behind-fg-body`].background.value};
                    color: ${K[`vira-form-accent-primary-color`].value};
                }
            }
        }

        .source-icon-wrapper.source-icon-wrapper.source-icon-wrapper.source-icon-wrapper.source-icon-wrapper {
            margin-left: auto;
            justify-content: flex-end;
            align-items: center;
            display: flex;
            flex-shrink: 0;
            align-self: top;

            & ${J} {
                width: 20px;
                height: 20px;
            }
        }

        .${Su(WW)}.${Su(WW)}.${Su(WW)}.${Su(WW)} {
            ul {
                ${DF}
                flex-grow: 1;
                max-width: 100%;
                display: flex;
                flex-direction: column;
                gap: 2px;
            }
        }

        .source-content-wrapper {
            > *:last-child:not(table) {
                flex-grow: 1;
            }
        }

        li {
            display: flex;
            flex-direction: column;

            &:not(.list-item-with-icon) > *:first-child::before {
                content: '•';
                flex-shrink: 0;
                width: 24px;
                margin-right: ${FG};
                line-height: 24px;
                display: flex;
                justify-content: center;
            }
        }

        pre {
            flex-grow: 1;
            font-family: monospace;
        }

        .icon-section {
            display: inline-flex;
            vertical-align: middle;
        }

        .text-section {
            display: inline-flex;
        }

        .icon-section:first-child:has(+ *) {
            margin-right: ${FG};
        }

        .processing-section .source-content-wrapper {
            display: flex;
            gap: 4px;
        }

        .collapsible-section {
            align-items: flex-start;
        }

        .tag-section {
            display: inline-flex;
            vertical-align: middle;
        }
        .processing-section {
            display: inline-flex;
            vertical-align: middle;
            flex-direction: row;
            gap: 4px;
        }

        ${t[`vir-structured-render-phone-size`].selector} {
            font-size: ${e[`vir-structured-render-small-font-size`].value};

            & h2 {
                font-size: ${e[`vir-structured-render-h3-font-size`].value};
            }

            .view-header {
                flex-direction: column;
            }

            & th,
            & td {
                padding: 4px;
            }

            & ul {
                padding-left: 1em;
            }

            & ${J} {
                width: 18px;
                height: 18px;
            }

            & li::marker {
                font-size: 0.7em;
            }
        }

        ${t[`vir-structured-render-tablet-size`].selector} {
            .view-header {
                flex-wrap: wrap;
            }
        }

        @media print {
            .source-icon-wrapper {
                display: none !important;
            }
        }
    `,render({inputs:e,state:t,updateState:n,host:r}){let i=String(e.options?.markdownStyles||JW);uU({maintainFirstStylesheet:!0,newStyles:i,oldStyles:t.lastStyleString,shadowRoot:r.shadowRoot})&&n({lastStyleString:i});let a=CG(e.data,{...e.options,currentlyExpanded:{...e.options?.currentlyExpanded,...t.currentlyExpanded}});return V`
            <div
                ${mN(AG,e=>{n({currentlyExpanded:{...t.currentlyExpanded,[e.detail.key]:e.detail.expanded}})})}
                class=${WW}
            >
                ${a}
            </div>
        `}});async function IG(){let e=await r(()=>import(`./src-tolp6nSh.js`),__vite__mapDeps([0,1,2,3,4,5]));return e.default||e}function LG(e,t){return KG(e,ul(xG,t)).filter(j.isTruthy).join(`

`)}var RG={[cG.Bold]:`**`};function zG(e,t,n){let r=e.entries.length+1,i=t.map(t=>[t.text?LG(t.text,n):t.key,...e.entries.map(e=>LG(e.data[t.key],n))]);return[qc(r,()=>``),...i]}function BG(e,t,n){return[t.map(e=>e.text?LG(e.text,n):e.key),...e.entries.map(e=>t.map(t=>LG(e.data[t.key],n)))]}var VG={[mG.Vertical]:zG,[mG.Horizontal]:BG},HG={icon(e,t){let n=rG(e,t);return n?VN(n.svgTemplate):``},collapsible(){return``},codeBlock(e){return`\`\`\`${e.syntax||``}\n${e.code}\n\`\`\``},inlineCode(e){return`\`${e.code}\``},empty(){return``},list(e,t){return Gc(e.items,e=>{let n=LG(e.content,t),r=LG(e.icon,t);if(n){let i=r?`- ${r} ${n}`:`- ${n}`,a=(e.sources||[]).map(e=>LG(e,t)).filter(j.isTruthy).join(`
`);return a?`${i}\n${a}`:i}else return``},j.isTruthy).join(`
`)},markdown(e){return e.markdown},tag(e){return e.text==null?``:String(e.text)},processing(){return``},source(e,t){let n=e.pageNumbers?.filter(j.isDefined),r=n?.length?`p. ${n.join(`, `)}`:``,i=[e.fileName,r].filter(j.isTruthy).join(`, `);return i?`<small>${t.sourceString}: ${i}</small>`:``},table(e,t){let n=e.headers.filter(e=>!e.hidden),r=VG[e.direction](e,n,t),i=UG(r,r[0].length||0),[a,...o]=r;return[WG(a,i),GG(i),...o.map(e=>WG(e,i))].join(`
`)},text(e,t){if(e.text==null)return``;let n=e.style&&RG[e.style]||``,r=LG(e.icon,t),i=Ll({value:String(e.text),wrapper:n});return r?`${r} ${i}`:i}};function UG(e,t){return qc(t,t=>e.reduce((e,n,r)=>Math.max(e,Dc.isDefined(n[t],`No cell at row index ${r}, column index ${t}`).length),3))}function WG(e,t){return`| ${e.map((e,n)=>e.padEnd(t[n]??3)).join(` | `)} |`}function GG(e){return`| ${e.map(e=>`-`.repeat(e)).join(` | `)} |`}function KG(e,t,n=!1){if(!e)return[];if(j.isArray(e))return e.flatMap(e=>LG(e,t));if(`type`in e){let r=`sectionTitle`in e&&!n?e.sectionTitle:void 0,i=`sources`in e&&e.sources||[];return[r?`### ${r}`:void 0,HG[e.type](e,t),...i.map(e=>LG(e,t))]}else if(`sections`in e)return[e.cardTitle&&`## ${e.cardTitle}`,...e.sections.flatMap((e,n)=>KG(e,t,n===0))].filter(j.isTruthy);else throw Mc.tsType(e).equals(),Error(`Unexpected structured render type: ${v(e)}`)}var qG=function(e){return e.ArrayBuffer=`arraybuffer`,e.Blob=`blob`,e.BlobUri=`bloburi`,e.BlobUrl=`bloburl`,e.DataUriString=`datauristring`,e.DataUrlString=`dataurlstring`,e.DataUri=`datauri`,e.DataUrl=`dataurl`,e.DataUrlNewWindow=`dataurlnewwindow`,e.PdfObjectNewWindow=`pdfobjectnewwindow`,e.PdfJsNewWindow=`pdfjsnewwindow`,e.Download=`download`,e}({}),JG=function(e){return e.Img=`img`,e.DataUriString=`datauristring`,e.DataUrlString=`dataurlstring`,e.DataUri=`datauri`,e.DataUrl=`dataurl`,e.Download=`download`,e}({});function YG(e){return{margin:[25,15],filename:e,image:{type:`jpeg`,quality:.98},html2canvas:{scale:2,logging:!1,scrollX:0,scrollY:0,useCORS:!0},jsPDF:{unit:`mm`,format:`a4`,orientation:`portrait`},pagebreak:{mode:[`css`,`legacy`]}}}async function XG(e,{fileName:t,outputType:n,options:r}){if(!b(_e.Web))throw Error(`${nK.name} cannot run outside of a browser.`);let a=ul(xG,r),[o]=await Promise.all([IG(),eK()]),s=await UW.parse(LG(e,a)),c=VN(V`
        <div class=${WW}>${i.sanitize(s)}</div>
    `),l=YG(t),u=await ZG(c,String(a.styles),l),d=o().set(l).from(u);if(n.pdf)if(n.pdf===qG.Download){let e=await d.outputPdf(qG.Blob),n=URL.createObjectURL(e),r=globalThis.document.createElement(`a`);r.href=n,r.download=t.endsWith(`.pdf`)?t:`${t}.pdf`,r.style.display=`none`,globalThis.document.body.append(r),r.click(),r.remove(),URL.revokeObjectURL(n);return}else return await d.outputPdf(n.pdf,{filename:t});else if(n.image)return n.image===JG.Download?await d.toImg().save(t):await d.outputImg(n.image);else throw Mc.tsType(n).equals(),Error(`Invalid output type: ${v(n)}`)}async function ZG(e,t,n){let r=tK(n.margin),i=210-r[1]-r[3],a=globalThis.document.createElement(`iframe`);a.style.position=`fixed`,a.style.left=`-10000px`,a.style.top=`0`,a.style.width=`${i}mm`,a.style.height=`0`,a.style.border=`none`,a.setAttribute(`aria-hidden`,`true`),a.srcdoc=[`<!DOCTYPE html><html><head><style>`,GW,t,`</style></head><body style="margin:0;padding:0;">`,e,`</body></html>`].join(``),globalThis.document.body.append(a);try{await new Promise(e=>{a.addEventListener(`load`,()=>{e()},{once:!0})});let e=Dc.isDefined(a.contentDocument);await e.fonts.ready;let t=Dc.isDefined(e.body.firstElementChild);return a.style.height=`${e.body.scrollHeight}px`,await QN(3),await $G()(t,{...n.html2canvas})}finally{a.remove()}}var QG;function $G(){if(!QG)throw Error(`html2canvas has not been loaded yet. Call preloadHtml2Canvas() first.`);return QG}async function eK(){QG||=(await r(async()=>{let{default:e}=await import(`./html2canvas-DcbCcm1Y.js`).then(e=>t(e.default,1));return{default:e}},__vite__mapDeps([6,5,1]))).default}function tK(e){return e==null?[0,0,0,0]:typeof e==`number`?[e,e,e,e]:e.length===2?[e[0],e[1],e[0],e[1]]:[e[0],e[1],e[2],e[3]]}async function nK(e,{saveLocationPath:n,outputType:a,options:o}){if(b(_e.Web))throw Error(`${nK.name} cannot run inside of a browser.`);let s=ul(xG,o),{chromium:c}=await r(async()=>{let{chromium:e}=await import(`playwright`);return{chromium:e}},[]),{readFile:l,writeFile:u,mkdir:d}=await r(async()=>{let{readFile:e,writeFile:t,mkdir:n}=await import(`node:fs/promises`);return{readFile:e,writeFile:t,mkdir:n}},[]),{createRequire:f}=await r(async()=>{let{createRequire:e}=await import(`./__vite-browser-external-C2HJ6kSE.js`).then(e=>t(e.default,1));return{createRequire:e}},__vite__mapDeps([7,1])),{basename:p,dirname:m}=await r(async()=>{let{basename:e,dirname:t}=await import(`node:path`);return{basename:e,dirname:t}},[]),h=f(import.meta.url),[g,_]=await Promise.all([l(h.resolve(`html2pdf.js/dist/html2pdf.bundle.min.js`),`utf-8`),l(h.resolve(`dompurify/dist/purify.min.js`),`utf-8`)]),ee=await UW.parse(LG(e,s)),te=VN(V`
        <style id="styles">
            ${s.styles}
        </style>
    `),ne=await c.launch();try{let e=await ne.newPage();await e.setContent(te,{waitUntil:`networkidle`}),await e.addScriptTag({content:g}),await e.addScriptTag({content:_});let t=YG(p(n));a.image&&(t.image={type:`png`});let r=(await e.evaluate(async({html2pdfOptions:e,outputType:t,dirtyMarkdown:n,wrapperClass:r,outputImageType:a,outputPdfType:o})=>{let s=i.sanitize(n),c=html2pdf().set(e).from(`<div class="${r}">${s}</div>`);if(t.image)return await c.outputImg(a,{filename:e.filename});if(t.pdf)return await c.outputPdf(o,{filename:e.filename});throw Error(`Invalid output type selected.`)},{html2pdfOptions:t,outputType:a,dirtyMarkdown:ee,wrapperClass:WW,outputImageType:JG.DataUriString,outputPdfType:qG.DataUriString})).split(`,`)[1];await d(m(n),{recursive:!0}),await u(n,Buffer.from(r,`base64`))}finally{await ne.close()}return n}async function rK(e,{pdfOutputType:t,...n}){if(!b(_e.Web))throw Error(`${rK.name} cannot run outside of a browser.`);return XG(e,{outputType:{pdf:t||qG.Download},...n})}async function iK(e,t){if(!b(_e.Web))throw Error(`${iK.name} cannot run outside of a browser.`);let n=await XG(e,{outputType:{pdf:qG.Blob},...t}),r=URL.createObjectURL(n),i=navigator.userAgent.toLowerCase(),a=i.includes(`firefox`),o=/iphone|ipad|ipod/.test(i)||i.includes(`macintosh`)&&navigator.maxTouchPoints>1;if(a||o){if(!globalThis.window.open(r))throw URL.revokeObjectURL(r),Error(`Failed to open print window. Check your popup blocker settings.`);return}let s=globalThis.document.createElement(`iframe`);s.style.position=`fixed`,s.style.left=`-10000px`,s.style.top=`0`,s.style.width=`1px`,s.style.height=`1px`,s.style.border=`none`,s.style.opacity=`0`,s.src=r,globalThis.document.body.append(s),await new Promise(e=>{s.addEventListener(`load`,()=>{e()},{once:!0})});let c=s.contentWindow;if(!c){URL.revokeObjectURL(r),s.remove();return}return await QN(3),await po({milliseconds:250}),await QN(3),new Promise(e=>{function t(){URL.revokeObjectURL(r),s.remove(),e()}let n=!1;function i(){n||(n=!0,globalThis.window.removeEventListener(`focus`,a),t())}function a(){i()}c.addEventListener(`afterprint`,()=>{i()},{once:!0}),globalThis.window.addEventListener(`focus`,a,{once:!0}),c.print()})}var aK=[{cardTitle:`Frontend Performance`,sections:[{type:Q.text,sectionTitle:`Overview`,text:`Frontend performance metrics collected from the last 30 days of production monitoring.`,sources:[{type:`source`,fileName:`performance-report-2026-02.pdf`,pageNumbers:[1,2],quote:`Metrics aggregated from real user monitoring (RUM) data across all production traffic.`}]},{type:Q.table,sectionTitle:`Core Web Vitals`,direction:mG.Horizontal,sources:[{type:`source`,fileName:`lighthouse-audit.json`,pageNumbers:[3],quote:`Core Web Vitals thresholds based on Chrome UX Report field data.`},{type:`source`,fileName:`web-vitals-spec.md`,quote:`Targets align with Google recommended thresholds for good user experience.`}],headers:[{key:`metric`},{key:`p50`},{key:`p95`},{key:`target`},{key:`status`}],entries:[{data:{metric:{type:Q.text,text:`Largest Contentful Paint`,style:cG.Bold},p50:{type:Q.inlineCode,code:`1.2s`},p95:{type:Q.inlineCode,code:`2.8s`},target:{type:Q.text,text:`< 2.5s`},status:{type:Q.tag,text:`Pass`,color:{variant:q.Positive}}}},{data:{metric:{type:Q.text,text:`First Input Delay`,style:cG.Bold},p50:{type:Q.inlineCode,code:`12ms`},p95:{type:Q.inlineCode,code:`85ms`},target:{type:Q.text,text:`< 100ms`},status:{type:Q.tag,text:`Pass`,color:{variant:q.Positive}}}},{data:{metric:{type:Q.text,text:`Cumulative Layout Shift`,style:cG.Bold},p50:{type:Q.inlineCode,code:`0.18`},p95:{type:Q.inlineCode,code:`0.32`},target:{type:Q.text,text:`< 0.1`},status:{type:Q.tag,text:`Fail`,color:{variant:q.Danger}}},sources:[{type:`source`,fileName:`cls-regression-analysis.pdf`,pageNumbers:[7],quote:`CLS spike correlated with hero image carousel added in v3.12.0.`}]},{data:{metric:{type:Q.text,text:`Time to First Byte`,style:cG.Bold},p50:{type:Q.inlineCode,code:`210ms`},p95:{type:Q.inlineCode,code:`480ms`},target:{type:Q.text,text:`< 600ms`},status:{type:Q.tag,text:`Pass`,color:{variant:q.Positive}}}}]},{type:Q.list,sectionTitle:`Recommendations`,items:[{content:{type:Q.text,text:`Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images.`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`red`},sources:[{type:`source`,fileName:`frontend-performance-review-2026-q1.pdf`,pageNumbers:[4],quote:`Layout shifts primarily caused by images without explicit dimensions.`},{type:`source`,fileName:`web-vitals-optimization-guide.md`,quote:`Lazy loading below-the-fold content reduces initial page weight and improves LCP.`}]},{icon:{type:Q.icon,iconKey:CL.name,strokeColor:`red`},content:{type:Q.text,text:`Add explicit width and height attributes to all image elements.`,sources:[{type:`source`,fileName:`cls-regression-analysis.pdf`,pageNumbers:[8],quote:`Missing width/height attributes on images are the primary contributor to layout shift.`}]}},{content:{type:Q.text,text:`Consider lazy loading below-the-fold content.`},sources:[{type:`source`,fileName:`frontend-performance-review-2026-q1.pdf`,pageNumbers:[4],quote:`Layout shifts primarily caused by images without explicit dimensions.`},{type:`source`,fileName:`web-vitals-optimization-guide.md`,quote:`Lazy loading below-the-fold content reduces initial page weight and improves LCP.`}]}]},{type:Q.list,sectionTitle:`Action Items`,items:[{content:{type:Q.text,text:`Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions.`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`orange`}},{content:{type:Q.text,text:`Enable native lazy loading on below-the-fold images.`},icon:{type:Q.icon,iconKey:xL.name,strokeColor:`green`}},{content:{type:Q.text,text:`Defer non-critical third-party scripts.`},icon:{type:Q.icon,iconKey:xL.name,strokeColor:`green`}}]},_G(mG.Vertical,[{key:`age`,text:{type:Q.text,text:`Age`}},{key:`dateOfBirth`,text:{type:Q.text,text:`DoB`}},{key:`bloodPressure`,text:{type:Q.text,text:`Blood Pressure`}},{key:`bmi`,text:{type:Q.text,text:`BMI`}},{key:`heartRate`,text:{type:Q.text,text:`Heart Rate`}},{key:`oxygenSaturation`,text:{type:Q.text,text:`Oxygen Saturation`}},{key:`pain`,text:{type:Q.text,text:`Pain`}},{key:`language`,text:{type:Q.text,text:`Language`}},{key:`respiratory`,text:{type:Q.text,text:`Respiratory Rate`}},{key:`sex`,text:{type:Q.text,text:`Sex`}},{key:`temperature`,text:{type:Q.text,text:`Temperature`}},{key:`weight`,text:{type:Q.text,text:`Weight`}},{key:`height`,text:{type:Q.text,text:`Height`}},{key:`zipCode`,text:{type:Q.text,text:`Zip Code`}}],[{data:{age:{type:Q.text,text:`72`,sources:[{type:Q.source,fileName:`intake-form.pdf`,pageNumbers:[1],quote:`Age: 72`}]},dateOfBirth:{type:Q.text,text:`01/15/1954`,sources:[{type:Q.source,fileName:`intake-form.pdf`,pageNumbers:[1],quote:`DOB: 01/15/1954`}]},bloodPressure:{type:Q.text,text:`130 / 85`,sources:[{type:Q.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`BP: 130/85 mmHg`}]},bmi:{type:Q.text,text:`27.3`,sources:[{type:Q.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`BMI: 27.3`}]},heartRate:{type:Q.text,text:`78 bpm`,sources:[{type:Q.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`HR: 78 bpm`}]},height:{type:Q.text,text:`170 cm`},oxygenSaturation:{type:Q.text,text:`96%, on room air`,sources:[{type:Q.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`SpO2: 96% on RA`}]},pain:{type:Q.text,text:`4/10`,sources:[{type:Q.source,fileName:`nursing-notes.pdf`,pageNumbers:[3],quote:`Pain score: 4/10`}]},language:{type:Q.text,text:`English`},respiratory:{type:Q.text,text:`18 breaths/min`,sources:[{type:Q.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`RR: 18 breaths/min`}]},sex:{type:Q.text,text:`Male`},temperature:{type:Q.text,text:`98.6 °F`,sources:[{type:Q.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`Temp: 98.6°F`}]},weight:{type:Q.text,text:`185 lbs`,sources:[{type:Q.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`Weight: 185 lbs`}]},zipCode:{type:Q.text,text:`90210`,sources:[{type:Q.source,fileName:`intake-form.pdf`,pageNumbers:[1],quote:`Zip: 90210`}]}}}])]},{cardTitle:`Backend API Health`,sections:[{type:Q.markdown,sectionTitle:`Status Summary`,sources:[{type:`source`,fileName:`uptime-monitor-export.csv`,quote:`Uptime percentages calculated from 5-minute health check intervals.`}],markdown:[`All **12 services** are operational. Average uptime over the past 30 days: **99.97%**.`,``,`| Service | Uptime |`,`|---------|--------|`,`| Auth | 99.99% |`,`| Users | 99.98% |`,`| Notifications | 99.91% |`,`| Billing | 100% |`].join(`
`)},{type:Q.table,sectionTitle:`Endpoint Latency (ms)`,direction:mG.Vertical,headers:[{key:`endpoint`},{key:`getUsers`},{key:`createUser`},{key:`getReport`},{key:`sendNotification`}],entries:[{data:{endpoint:{type:Q.text,text:`p50`},getUsers:{type:Q.inlineCode,code:`45`},createUser:{type:Q.inlineCode,code:`120`},getReport:{type:Q.inlineCode,code:`890`},sendNotification:{type:Q.inlineCode,code:`65`}}},{data:{endpoint:{type:Q.text,text:`p99`},getUsers:{type:Q.inlineCode,code:`180`},createUser:{type:Q.inlineCode,code:`450`},getReport:{type:Q.inlineCode,code:`3200`},sendNotification:{type:Q.inlineCode,code:`210`}}}]},{type:Q.codeBlock,sectionTitle:`Slow Query Sample`,syntax:`sql`,code:[`SELECT r.id, r.title, r.created_at,`,`       u.name AS author_name,`,`       COUNT(c.id) AS comment_count`,`FROM reports r`,`JOIN users u ON u.id = r.author_id`,`LEFT JOIN comments c ON c.report_id = r.id`,`WHERE r.created_at > NOW() - INTERVAL '30 days'`,`GROUP BY r.id, r.title, r.created_at, u.name`,`ORDER BY r.created_at DESC`,`LIMIT 100;`].join(`
`)}]},{cardTitle:`Deployment Pipeline`,sections:[{type:Q.text,sectionTitle:`Current State`,text:`The CI/CD pipeline is fully automated with staging and production environments.`,icon:{type:Q.icon,iconKey:xL.name,strokeColor:`green`}},{type:Q.table,sectionTitle:`Recent Deployments`,direction:mG.Horizontal,sources:[{type:`source`,fileName:`ci-pipeline-logs.txt`,pageNumbers:[12,15,18,22],quote:`Deployment records extracted from CI/CD pipeline execution logs.`}],headers:[{key:`version`},{key:`environment`},{key:`date`},{key:`duration`},{key:`status`}],entries:[{data:{version:{type:Q.inlineCode,code:`v3.14.2`},environment:{type:Q.tag,text:`Production`,color:{variant:q.Positive}},date:{type:Q.text,text:`2026-02-28`},duration:{type:Q.text,text:`4m 22s`},status:{type:Q.tag,text:`Success`,color:{variant:q.Positive}}}},{data:{version:{type:Q.inlineCode,code:`v3.14.1`},environment:{type:Q.tag,text:`Production`,color:{variant:q.Positive}},date:{type:Q.text,text:`2026-02-25`},duration:{type:Q.text,text:`3m 58s`},status:{type:Q.tag,text:`Success`,color:{variant:q.Positive}}}},{data:{version:{type:Q.inlineCode,code:`v3.14.0`},environment:{type:Q.tag,text:`Staging`,color:{variant:q.Warning}},date:{type:Q.text,text:`2026-02-24`},duration:{type:Q.text,text:`5m 01s`},status:{type:Q.tag,text:`Rolled Back`,color:{variant:q.Danger}}}},{data:{version:{type:Q.inlineCode,code:`v3.13.9`},environment:{type:Q.tag,text:`Production`,color:{variant:q.Positive}},date:{type:Q.text,text:`2026-02-20`},duration:{type:Q.text,text:`4m 10s`},status:{type:Q.tag,text:`Success`,color:{variant:q.Positive}}}}]},{type:Q.list,sectionTitle:`Pipeline Steps`,items:[{content:{type:Q.text,text:`Lint and type check.`},icon:{type:Q.icon,iconKey:xL.name,strokeColor:`green`}},{content:{type:Q.text,text:`Unit and integration tests.`},icon:{type:Q.icon,iconKey:xL.name,strokeColor:`green`}},{content:{type:Q.text,text:`Build production bundle.`},icon:{type:Q.icon,iconKey:xL.name,strokeColor:`green`}},{content:{type:Q.text,text:`Deploy to staging.`},icon:{type:Q.icon,iconKey:xL.name,strokeColor:`green`}},{content:{type:Q.text,text:`E2E smoke tests.`},icon:{type:Q.icon,iconKey:xL.name,strokeColor:`green`}},{content:{type:Q.text,text:`Promote to production.`},icon:{type:Q.icon,iconKey:xL.name,strokeColor:`green`}}]},{type:Q.codeBlock,sectionTitle:`Pipeline Config Snippet`,syntax:`yaml`,code:[`stages:`,`  - name: lint`,`    command: npm run lint`,`  - name: test`,`    command: npm test`,`    parallel: true`,`  - name: build`,`    command: npm run build`,`  - name: deploy-staging`,`    command: deploy --env staging`,`  - name: e2e`,`    command: npm run test:e2e`,`  - name: deploy-production`,`    command: deploy --env production`,`    requires: [e2e]`].join(`
`)},{type:Q.collapsible,sectionTitle:`Collapsible Details`,header:`Rollback Procedure`,content:[{type:Q.text,text:`If a deployment fails health checks, the pipeline automatically triggers a rollback to the previous stable version.`},{type:Q.codeBlock,syntax:`bash`,code:[`#!/bin/bash`,`deploy rollback --env production --to-version $LAST_STABLE`,`notify --channel ops --message "Rollback initiated"`].join(`
`)}]},{type:Q.collapsible,header:`Environment Variables`,content:[{type:Q.table,direction:mG.Horizontal,headers:[{key:`variable`},{key:`staging`},{key:`production`}],entries:[{data:{variable:{type:Q.inlineCode,code:`NODE_ENV`},staging:{type:Q.tag,text:`staging`,color:{variant:q.Warning}},production:{type:Q.tag,text:`production`,color:{variant:q.Positive}}}},{data:{variable:{type:Q.inlineCode,code:`LOG_LEVEL`},staging:{type:Q.text,text:`debug`},production:{type:Q.text,text:`warn`}}}]}]},{type:Q.collapsible,header:`Post-Deploy Checklist`,content:[{type:Q.list,items:[{content:{type:Q.text,text:`Verify health check endpoints return 200.`},icon:{type:Q.icon,iconKey:xL.name,strokeColor:`green`}},{content:{type:Q.text,text:`Confirm error rate stays below 0.1% threshold.`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`orange`}},{content:{type:Q.text,text:`Monitor p99 latency for 15 minutes.`},icon:{type:Q.icon,iconKey:xL.name,strokeColor:`green`}}]}]}]}],oK=fu({title:`Multi Card`,parent:lU,descriptionParagraphs:[`Multiple cards rendered together to demonstrate complex multi-card layouts.`],defineExamples({defineExample:e}){e({title:`three cards`,styles:B`
                :host {
                    max-width: 900px;
                }
            `,render(){return V`
                    <${$.assign({data:aK})}></${$}>
                `}})}}),sK=fu({title:`Block Expansion`,parent:lU,descriptionParagraphs:[`Cards rendered with blockCardExpansion enabled, which forces all sections expanded and disables toggling.`],defineExamples({defineExample:e}){e({title:`all sections locked open`,styles:B`
                :host {
                    max-width: 900px;
                }
            `,render(){return V`
                    <${$.assign({data:aK,options:{blockCardExpansion:!0}})}></${$}>
                `}})}}),cK=fu({title:`Dense Data`,parent:lU,descriptionParagraphs:[`A single card packed with many sections, large tables, lists, code blocks, and markdown to stress-test rendering.`],defineExamples({defineExample:e}){e({title:`comprehensive product analysis`,styles:B`
                :host {
                    max-width: 900px;
                }
            `,render(){return V`
                    <${$.assign({data:[{cardTitle:`Comprehensive Product Analysis`,sections:[{type:Q.text,sectionTitle:`Executive Summary`,text:`This analysis covers product adoption, feature usage, customer feedback, technical debt, and roadmap progress across all three product lines.`,style:cG.Bold},{type:Q.markdown,sectionTitle:`Adoption Trends`,markdown:[`### Monthly Active Users`,``,`Growth has been **steady** across all tiers:`,``,`- **Free tier**: 14,200 MAU (+8% MoM)`,`- **Pro tier**: 3,800 MAU (+12% MoM)`,`- **Enterprise tier**: 420 MAU (+3% MoM)`,``,`### Retention`,``,`Day-7 retention: **68%** | Day-30 retention: **41%** | Day-90 retention: **28%**`,``,`> The largest drop-off occurs between day 7 and day 14, suggesting onboarding improvements could have significant impact.`].join(`
`)},{type:Q.table,sectionTitle:`Feature Usage Matrix`,direction:mG.Horizontal,headers:[{key:`feature`},{key:`freeTier`},{key:`proTier`},{key:`enterpriseTier`},{key:`satisfaction`},{key:`trend`}],entries:[{data:{feature:{type:Q.text,text:`Dashboard`,style:cG.Bold},freeTier:{type:Q.text,text:`92%`},proTier:{type:Q.text,text:`97%`},enterpriseTier:{type:Q.text,text:`99%`},satisfaction:{type:Q.tag,text:`4.5 / 5`,color:{variant:q.Positive}},trend:{type:Q.tag,text:`Stable`,color:{variant:q.Positive}}}},{data:{feature:{type:Q.text,text:`Export (PDF/Image)`,style:cG.Bold},freeTier:{type:Q.text,text:`34%`},proTier:{type:Q.text,text:`78%`},enterpriseTier:{type:Q.text,text:`91%`},satisfaction:{type:Q.tag,text:`3.8 / 5`,color:{variant:q.Warning}},trend:{type:Q.tag,text:`Growing`,color:{variant:q.Positive}}}},{data:{feature:{type:Q.text,text:`API Access`,style:cG.Bold},freeTier:{type:Q.text,text:`5%`},proTier:{type:Q.text,text:`42%`},enterpriseTier:{type:Q.text,text:`88%`},satisfaction:{type:Q.tag,text:`4.1 / 5`,color:{variant:q.Positive}},trend:{type:Q.tag,text:`Growing`,color:{variant:q.Positive}}}},{data:{feature:{type:Q.text,text:`Collaboration`,style:cG.Bold},freeTier:{type:Q.text,text:`18%`},proTier:{type:Q.text,text:`61%`},enterpriseTier:{type:Q.text,text:`95%`},satisfaction:{type:Q.tag,text:`4.3 / 5`,color:{variant:q.Positive}},trend:{type:Q.tag,text:`Stable`,color:{variant:q.Positive}}}},{data:{feature:{type:Q.text,text:`Custom Themes`,style:cG.Bold},freeTier:{type:Q.text,text:`0%`},proTier:{type:Q.text,text:`29%`},enterpriseTier:{type:Q.text,text:`67%`},satisfaction:{type:Q.tag,text:`3.2 / 5`,color:{variant:q.Warning}},trend:{type:Q.tag,text:`Declining`,color:{variant:q.Danger}}}},{data:{feature:{type:Q.text,text:`Webhooks`,style:cG.Bold},freeTier:{type:Q.text,text:`0%`},proTier:{type:Q.text,text:`15%`},enterpriseTier:{type:Q.text,text:`72%`},satisfaction:{type:Q.tag,text:`4.0 / 5`,color:{variant:q.Positive}},trend:{type:Q.tag,text:`Growing`,color:{variant:q.Positive}}}}]},{type:Q.list,sectionTitle:`Customer Feedback Themes`,items:[{content:{type:Q.text,text:`Export quality needs improvement (mentioned 47 times).`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`orange`}},{content:{type:Q.text,text:`Dashboard customization is highly valued (mentioned 82 times).`},icon:{type:Q.icon,iconKey:vL.name,strokeColor:`gold`}},{content:{type:Q.text,text:`API documentation could be more complete (mentioned 31 times).`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`orange`}},{content:{type:Q.text,text:`Real-time collaboration is a top-requested feature (mentioned 64 times).`},icon:{type:Q.icon,iconKey:vL.name,strokeColor:`gold`}},{content:{type:Q.text,text:`Mobile experience needs significant work (mentioned 28 times).`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`red`}}]},{type:Q.codeBlock,sectionTitle:`Top API Usage Pattern`,syntax:`typescript`,code:[`import {createClient} from '@product/sdk';`,``,`const client = createClient({`,`    apiKey: process.env.PRODUCT_API_KEY,`,`    baseUrl: 'https://api.product.com/v2',`,`});`,``,`const report = await client.reports.create({`,`    title: 'Weekly Summary',`,`    sections: [`,`        {type: 'chart', dataSource: 'revenue'},`,`        {type: 'table', dataSource: 'transactions'},`,`        {type: 'text', content: 'Generated automatically.'},`,`    ],`,`    format: 'pdf',`,`});`,``,`await client.reports.export(report.id, {`,`    destination: 's3://reports-bucket/weekly/',`,`});`].join(`
`)},{type:Q.table,sectionTitle:`Technical Debt Inventory`,direction:mG.Horizontal,headers:[{key:`item`},{key:`severity`},{key:`age`},{key:`effort`},{key:`impact`}],entries:[{data:{item:{type:Q.text,text:`Legacy auth middleware.`},severity:{type:Q.tag,text:`High`,color:{variant:q.Danger}},age:{type:Q.text,text:`18 months`},effort:{type:Q.text,text:`3 sprints`},impact:{type:Q.text,text:`Blocks SSO integration.`}}},{data:{item:{type:Q.text,text:`Untyped API responses.`},severity:{type:Q.tag,text:`Medium`,color:{variant:q.Warning}},age:{type:Q.text,text:`12 months`},effort:{type:Q.text,text:`2 sprints`},impact:{type:Q.text,text:`Frequent runtime errors.`}}},{data:{item:{type:Q.text,text:`Duplicated validation logic.`},severity:{type:Q.tag,text:`Medium`,color:{variant:q.Warning}},age:{type:Q.text,text:`9 months`},effort:{type:Q.text,text:`1 sprint`},impact:{type:Q.text,text:`Inconsistent error messages.`}}},{data:{item:{type:Q.text,text:`Missing database indexes.`},severity:{type:Q.tag,text:`High`,color:{variant:q.Danger}},age:{type:Q.text,text:`6 months`},effort:{type:Q.text,text:`0.5 sprint`},impact:{type:Q.text,text:`Slow report generation.`}}},{data:{item:{type:Q.text,text:`Outdated test fixtures.`},severity:{type:Q.tag,text:`Low`,color:{custom:{backgroundColor:`#e0e0e0`,foregroundColor:`#333`}}},age:{type:Q.text,text:`4 months`},effort:{type:Q.text,text:`1 sprint`},impact:{type:Q.text,text:`Reduced test reliability.`}}}]},{type:Q.markdown,sectionTitle:`Roadmap Progress`,markdown:[`### Q1 2026 Goals`,``,`| Goal | Status | Completion |`,`|------|--------|------------|`,`| SSO Integration | In Progress | 60% |`,`| Mobile App v1 | In Progress | 35% |`,`| API v3 | Planning | 10% |`,`| Export Overhaul | Complete | 100% |`,`| Webhook Reliability | Complete | 100% |`,``,`### Q2 2026 Planned`,``,`- Real-time collaboration MVP.`,`- Custom theme builder.`,`- Advanced analytics dashboard.`,`- Internationalization (i18n) support.`].join(`
`)},{type:Q.list,sectionTitle:`Key Risks`,items:[{content:{type:Q.text,text:`SSO integration depends on legacy auth refactor completing first.`,style:cG.Bold},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`red`}},{content:{type:Q.text,text:`Mobile app timeline may slip due to design resource constraints.`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`orange`}},{content:{type:Q.text,text:`API v3 design needs broader stakeholder input before implementation.`}},{content:{type:Q.text,text:`Real-time collaboration requires WebSocket infrastructure not yet provisioned.`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`orange`}}]},{type:Q.text,sectionTitle:`Prepared By`,text:`Product & Engineering Team, March 2026.`,style:cG.Faint}]}]})}></${$}>
                `}})}}),lK=fu({title:`Expand All`,parent:lU,descriptionParagraphs:[`Cards rendered with expandAllCards enabled, which starts all sections expanded but still allows toggling.`],defineExamples({defineExample:e}){e({title:`all sections start expanded`,styles:B`
                :host {
                    max-width: 900px;
                }
            `,render(){return V`
                    <${$.assign({data:aK,options:{expandAllCards:!0}})}></${$}>
                `}})}}),uK=fu({title:`Full Card`,parent:lU,descriptionParagraphs:[`Demos of VirStructuredRender with full StructuredRenderData (card arrays).`],defineExamples({defineExample:e}){e({title:`single card with many sections`,styles:B`
                :host {
                    max-width: 900px;
                }
            `,render(){return V`
                    <${$.assign({data:[{cardTitle:`Project Health Report`,sections:[{type:Q.text,sectionTitle:`Summary`,text:`Overall project health is good. Most metrics are within acceptable ranges, though a few areas require attention.`},{type:Q.markdown,sectionTitle:`Key Findings`,markdown:[`### Strengths`,``,`- **Code coverage** has improved from 72% to 89% over the past quarter.`,`- Build times remain under 3 minutes for the full suite.`,`- Zero critical vulnerabilities in the latest dependency audit.`,``,`### Areas for Improvement`,``,`1. Documentation coverage for public APIs is at 64%.`,`2. Integration test flakiness has risen to 4.2%.`,`3. Bundle size has grown 18% since the last review.`].join(`
`)},{type:Q.table,sectionTitle:`Module Metrics`,direction:mG.Horizontal,headers:[{key:`module`},{key:`coverage`},{key:`buildTime`},{key:`status`}],entries:[{data:{module:{type:Q.text,text:`Core`},coverage:{type:Q.inlineCode,code:`94%`},buildTime:{type:Q.text,text:`42s`},status:{type:Q.tag,text:`Healthy`,color:{variant:q.Positive}}}},{data:{module:{type:Q.text,text:`Rendering`},coverage:{type:Q.inlineCode,code:`88%`},buildTime:{type:Q.text,text:`28s`},status:{type:Q.tag,text:`Healthy`,color:{variant:q.Positive}}}},{data:{module:{type:Q.text,text:`Data Layer`},coverage:{type:Q.inlineCode,code:`71%`},buildTime:{type:Q.text,text:`1m 14s`},status:{type:Q.tag,text:`Needs Attention`,color:{variant:q.Warning}}}},{data:{module:{type:Q.text,text:`CLI Tools`},coverage:{type:Q.inlineCode,code:`82%`},buildTime:{type:Q.text,text:`19s`},status:{type:Q.tag,text:`Healthy`,color:{variant:q.Positive}}}}]},{type:Q.codeBlock,sectionTitle:`Sample Config`,syntax:`json`,code:JSON.stringify({project:`structured-render`,coverageThreshold:80,maxBuildTimeSeconds:180,modules:[`core`,`rendering`,`data-layer`,`cli-tools`]},null,4)},{type:Q.list,sectionTitle:`Action Items`,items:[{content:{type:Q.text,text:`Increase data layer test coverage to 80%.`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`orange`}},{content:{type:Q.text,text:`Investigate and fix flaky integration tests.`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`orange`}},{content:{type:Q.text,text:`Audit bundle size and remove unused dependencies.`}},{content:{type:Q.text,text:`Add missing JSDoc to public API functions.`}},{content:{type:Q.text,text:`Schedule quarterly security review.`},icon:{type:Q.icon,iconKey:xL.name,strokeColor:`green`}}]},{type:Q.text,sectionTitle:`Next Review`,text:`Scheduled for Q3 2026.`,style:cG.Faint}]}]})}></${$}>
                `}})}}),dK=fu({title:`Examples`,parent:void 0,descriptionParagraphs:[`Examples of specific functionality.`]}),fK=fu({title:`Download and Print`,parent:dK,descriptionParagraphs:[`Demonstrates downloading and printing structured render data as a PDF.`],defineExamples({defineExample:e}){e({title:`print`,state(){return{isLoading:!1,isError:!1}},render({state:e,updateState:t}){return V`
                    <${jL.assign({text:`Print`,isDisabled:e.isLoading,icon:e.isError?yL:e.isLoading?nL:void 0})}
                        ${mN(`click`,async()=>{t({isLoading:!0});try{await iK(aK,{fileName:`structured-render-print`})}catch(e){bl.error(`Failed to print PDF`,e),t({isError:!0})}finally{t({isLoading:!1})}})}
                    ></${jL}>
                `}}),e({title:`download`,state(){return{isLoading:!1,isError:!1}},render({state:e,updateState:t}){return V`
                    <${jL.assign({text:`Download`,isDisabled:e.isLoading,icon:e.isError?yL:e.isLoading?nL:void 0})}
                        ${mN(`click`,async()=>{t({isLoading:!0});try{await rK(aK,{fileName:`structured-render-download`,pdfOutputType:qG.Download})}catch(e){bl.error(`Failed to download PDF`,e),t({isError:!0})}finally{t({isLoading:!1})}})}
                    ></${jL}>
                `}})}}),pK=fu({title:`Sections`,parent:void 0,descriptionParagraphs:[`All structured render section types.`]}),mK=[fu({title:`Code Block`,parent:pK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({data:{type:Q.codeBlock,sectionTitle:`Code Block Example`,code:`const hello = "world";
console.log(hello);`,syntax:`typescript`}})}></${$}>
                `}}),e({title:`no syntax`,render(){return V`
                    <${$.assign({data:{type:Q.codeBlock,code:`plain text code block
with multiple lines`,syntax:null}})}></${$}>
                `}})}}),fu({title:`Empty`,parent:pK,defineExamples({defineExample:e}){e({title:`empty`,render(){return V`
                    <${$.assign({data:{type:Q.empty}})}></${$}>
                `}})}}),fu({title:`Icon`,parent:pK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({data:{type:Q.icon,iconKey:vL.name}})}></${$}>
                `}}),e({title:`colored stroke`,render(){return V`
                    <${$.assign({data:{type:Q.icon,iconKey:vL.name,strokeColor:`gold`}})}></${$}>
                `}}),e({title:`colored fill`,render(){return V`
                    <${$.assign({data:{type:Q.icon,iconKey:xL.name,fillColor:`lime`}})}></${$}>
                `}})}}),fu({title:`Inline Code`,parent:pK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({data:{type:Q.inlineCode,sectionTitle:`Inline Code Example`,code:`const x = 42;`}})}></${$}>
                `}})}}),fu({title:`List`,parent:pK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({data:{type:Q.list,sectionTitle:`List Example`,items:[{content:{type:Q.text,text:`First item`}},{content:{type:Q.text,text:`Second item`}},{content:{type:Q.text,text:`Third item`}}]}})}></${$}>
                `}}),e({title:`with icons`,render(){return V`
                    <${$.assign({data:{type:Q.list,sectionTitle:`List with Icons`,items:[{content:{type:Q.text,text:`Completed task`},icon:{type:Q.icon,iconKey:xL.name,strokeColor:`green`}},{content:{type:Q.text,text:`Another completed task`},icon:{type:Q.icon,iconKey:xL.name,strokeColor:`green`}}]}})}></${$}>
                `}}),e({title:`with tags`,render(){return V`
                    <${$.assign({data:{type:Q.list,sectionTitle:`List with Tags`,items:[{content:{type:Q.tag,text:`Important`,color:{variant:q.Warning}}},{content:{type:Q.tag,text:`Info`}}]}})}></${$}>
                `}})}}),fu({title:`Markdown`,parent:pK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({data:{type:Q.markdown,sectionTitle:`Markdown Example`,markdown:`## Hello World

This is **bold** and _italic_ text.

- Item 1
- Item 2
- Item 3`}})}></${$}>
                `}}),e({title:`with code`,render(){return V`
                    <${$.assign({data:{type:Q.markdown,sectionTitle:`Markdown with Code`,markdown:"### Code Example\n\nHere is some `inline code` and a code block:\n\n```typescript\nconst x = 42;\n```"}})}></${$}>
                `}})}}),fu({title:`Processing`,parent:pK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({data:{type:Q.processing}})}></${$}>
                `}})}}),fu({title:`Source`,parent:pK,defineExamples({defineExample:e}){e({title:`with file name`,render(){return V`
                    <${$.assign({data:{type:Q.source,fileName:`example.ts`,pageNumbers:null,fileBoundingBoxes:null,quote:null}})}></${$}>
                `}}),e({title:`with quote`,render(){return V`
                    <${$.assign({data:{type:Q.source,fileName:`document.pdf`,pageNumbers:[1,2],fileBoundingBoxes:null,quote:`This is the relevant quote from the source document.`}})}></${$}>
                `}}),e({title:`with page numbers`,render(){return V`
                    <${$.assign({data:{type:Q.source,fileName:`report.pdf`,pageNumbers:[5,10,15],fileBoundingBoxes:null,quote:null}})}></${$}>
                `}})}}),fu({title:`Table`,parent:pK,defineExamples({defineExample:e}){e({title:`horizontal`,render(){return V`
                    <${$.assign({data:{type:Q.table,sectionTitle:`Horizontal Table`,direction:mG.Horizontal,headers:[{key:`name`},{key:`value`}],entries:[{data:{name:{type:Q.text,text:`Alpha`},value:{type:Q.text,text:`100`}}},{data:{name:{type:Q.text,text:`Beta`},value:{type:Q.text,text:`200`}}}]}})}></${$}>
                `}}),e({title:`vertical`,render(){return V`
                    <${$.assign({data:{type:Q.table,sectionTitle:`Vertical Table`,direction:mG.Vertical,headers:[{key:`feature`},{key:`status`}],entries:[{data:{feature:{type:Q.text,text:`Image Export`},status:{type:Q.tag,text:`Supported`}}},{data:{feature:{type:Q.text,text:`PDF Export`},status:{type:Q.tag,text:`Beta`}}}]}})}></${$}>
                `}}),e({title:`with mixed cell types`,render(){return V`
                    <${$.assign({data:{type:Q.table,sectionTitle:`Mixed Cell Types`,direction:mG.Horizontal,headers:[{key:`label`},{key:`detail`}],entries:[{data:{label:{type:Q.text,text:`Status`},detail:{type:Q.tag,text:`Active`,color:{variant:q.Positive}}}},{data:{label:{type:Q.text,text:`Version`},detail:{type:Q.inlineCode,code:`v1.0.0`}}}]}})}></${$}>
                `}})}}),fu({title:`Tag`,parent:pK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({data:{type:Q.tag,sectionTitle:`Tag Example`,text:`Default Tag`}})}></${$}>
                `}}),e({title:`custom colors`,render(){return V`
                    <${$.assign({data:{type:Q.tag,text:`Custom Colors`,color:{custom:{backgroundColor:`#e74c3c`,foregroundColor:`#ffffff`}}}})}></${$}>
                `}}),e({title:`big tag`,render(){return V`
                    <${$.assign({data:{type:Q.tag,text:`Big Tag`,useBigTag:!0}})}></${$}>
                `}})}}),fu({title:`Text`,parent:pK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({data:{type:Q.text,sectionTitle:`Text Example`,text:`This is a simple text section.`}})}></${$}>
                `}}),e({title:`bold`,render(){return V`
                    <${$.assign({data:{type:Q.text,text:`Bold text section.`,style:cG.Bold}})}></${$}>
                `}}),e({title:`small`,render(){return V`
                    <${$.assign({data:{type:Q.text,text:`Small text section.`,style:cG.Small}})}></${$}>
                `}}),e({title:`faint`,render(){return V`
                    <${$.assign({data:{type:Q.text,text:`Faint text section.`,style:cG.Faint}})}></${$}>
                `}}),e({title:`with icon`,render(){return V`
                    <${$.assign({data:{type:Q.text,text:`Text with icon.`,icon:{type:Q.icon,iconKey:vL.name,strokeColor:`gold`}}})}></${$}>
                `}})}}),uK,oK,cK,sK,lK,fK,lU,dK,pK];nN()({tagName:`vir-app`,styles:B`
        :host {
            display: flex;
            flex-grow: 1;
        }

        ${cU} {
            flex-grow: 1;
        }

        p {
            ${DF}
            text-align: center;
            font-size: 32px;
            font-weight: bold;
            padding: 0 8px;
            padding-bottom: 8px;
        }
    `,render(){return V`
            <${cU.assign({pages:mK,internalRouterConfig:{useInternalRouter:!0,basePath:`structured-render/demo`}})}>
                <p slot=${cU.slotNames.navHeader}>Structured<br>Render</p>
            </${cU}>
        `}});