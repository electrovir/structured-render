const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/src-D1npM56S.js","assets/chunk-DECur_0Z.js","assets/preload-helper-D83xqiHd.js","assets/typeof-v3x6qlpQ.js","assets/purify.es-F3iWCZCP.js","assets/html2canvas-C8l2szQq.js","assets/html2canvas-D9_eKCYd.js","assets/__vite-browser-external-C2HJ6kSE.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,t as n}from"./chunk-DECur_0Z.js";import{t as r}from"./preload-helper-D83xqiHd.js";import{t as i}from"./purify.es-F3iWCZCP.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var a;(function(e){e.ElementExample=`element-example`,e.Page=`page`,e.Root=`root`})(a||={});function o(e,t=e=>e){let n=new Map;return e.filter(e=>{let r=t(e);return n.get(r)?!1:(n.set(r,e),!0)})}var s=class{diff(e,t,n={}){let r;typeof n==`function`?(r=n,n={}):`callback`in n&&(r=n.callback);let i=this.castInput(e,n),a=this.castInput(t,n),o=this.removeEmpty(this.tokenize(i,n)),s=this.removeEmpty(this.tokenize(a,n));return this.diffWithOptionsObj(o,s,n,r)}diffWithOptionsObj(e,t,n,r){let i=e=>{if(e=this.postProcess(e,n),r){setTimeout(function(){r(e)},0);return}else return e},a=t.length,o=e.length,s=1,c=a+o;n.maxEditLength!=null&&(c=Math.min(c,n.maxEditLength));let l=n.timeout??1/0,u=Date.now()+l,d=[{oldPos:-1,lastComponent:void 0}],f=this.extractCommon(d[0],t,e,0,n);if(d[0].oldPos+1>=o&&f+1>=a)return i(this.buildValues(d[0].lastComponent,t,e));let p=-1/0,m=1/0,h=()=>{for(let r=Math.max(p,-s);r<=Math.min(m,s);r+=2){let s,c=d[r-1],l=d[r+1];c&&(d[r-1]=void 0);let u=!1;if(l){let e=l.oldPos-r;u=l&&0<=e&&e<a}let h=c&&c.oldPos+1<o;if(!u&&!h){d[r]=void 0;continue}if(s=!h||u&&c.oldPos<l.oldPos?this.addToPath(l,!0,!1,0,n):this.addToPath(c,!1,!0,1,n),f=this.extractCommon(s,t,e,r,n),s.oldPos+1>=o&&f+1>=a)return i(this.buildValues(s.lastComponent,t,e))||!0;d[r]=s,s.oldPos+1>=o&&(m=Math.min(m,r-1)),f+1>=a&&(p=Math.max(p,r+1))}s++};if(r)(function e(){setTimeout(function(){if(s>c||Date.now()>u)return r(void 0);h()||e()},0)})();else for(;s<=c&&Date.now()<=u;){let e=h();if(e)return e}}addToPath(e,t,n,r,i){let a=e.lastComponent;return a&&!i.oneChangePerToken&&a.added===t&&a.removed===n?{oldPos:e.oldPos+r,lastComponent:{count:a.count+1,added:t,removed:n,previousComponent:a.previousComponent}}:{oldPos:e.oldPos+r,lastComponent:{count:1,added:t,removed:n,previousComponent:a}}}extractCommon(e,t,n,r,i){let a=t.length,o=n.length,s=e.oldPos,c=s-r,l=0;for(;c+1<a&&s+1<o&&this.equals(n[s+1],t[c+1],i);)c++,s++,l++,i.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return l&&!i.oneChangePerToken&&(e.lastComponent={count:l,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=s,c}equals(e,t,n){return n.comparator?n.comparator(e,t):e===t||!!n.ignoreCase&&e.toLowerCase()===t.toLowerCase()}removeEmpty(e){let t=[];for(let n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}castInput(e,t){return e}tokenize(e,t){return Array.from(e)}join(e){return e.join(``)}postProcess(e,t){return e}get useLongestToken(){return!1}buildValues(e,t,n){let r=[],i;for(;e;)r.push(e),i=e.previousComponent,delete e.previousComponent,e=i;r.reverse();let a=r.length,o=0,s=0,c=0;for(;o<a;o++){let e=r[o];if(e.removed)e.value=this.join(n.slice(c,c+e.count)),c+=e.count;else{if(!e.added&&this.useLongestToken){let r=t.slice(s,s+e.count);r=r.map(function(e,t){let r=n[c+t];return r.length>e.length?r:e}),e.value=this.join(r)}else e.value=this.join(t.slice(s,s+e.count));s+=e.count,e.added||(c+=e.count)}}return r}};new class extends s{};function c(e,t){let n;for(n=0;n<e.length&&n<t.length;n++)if(e[n]!=t[n])return e.slice(0,n);return e.slice(0,n)}function l(e,t){let n;if(!e||!t||e[e.length-1]!=t[t.length-1])return``;for(n=0;n<e.length&&n<t.length;n++)if(e[e.length-(n+1)]!=t[t.length-(n+1)])return e.slice(-n);return e.slice(-n)}function u(e,t,n){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return n+e.slice(t.length)}function d(e,t,n){if(!t)return e+n;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+n}function f(e,t){return u(e,t,``)}function p(e,t){return d(e,t,``)}function m(e,t){return t.slice(0,h(e,t))}function h(e,t){let n=0;e.length>t.length&&(n=e.length-t.length);let r=t.length;e.length<t.length&&(r=e.length);let i=Array(r),a=0;i[0]=0;for(let e=1;e<r;e++){for(t[e]==t[a]?i[e]=i[a]:i[e]=a;a>0&&t[e]!=t[a];)a=i[a];t[e]==t[a]&&a++}a=0;for(let r=n;r<e.length;r++){for(;a>0&&e[r]!=t[a];)a=i[a];e[r]==t[a]&&a++}return a}function g(e,t){let n=[];for(let r of Array.from(t.segment(e))){let e=r.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(e)?n[n.length-1]+=e:n.push(e)}return n}function ee(e,t){if(t)return te(e,t)[1];let n;for(n=e.length-1;n>=0&&e[n].match(/\s/);n--);return e.substring(n+1)}function _(e,t){if(t)return te(e,t)[0];let n=e.match(/^\s*/);return n?n[0]:``}function te(e,t){if(!t)return[_(e),ee(e)];if(t.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);let n=g(e,t),r=n[0],i=n[n.length-1];return[/\s/.test(r)?r:``,/\s/.test(i)?i:``]}var ne=`a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}`,re=RegExp(`[${ne}]+|\\s+|[^${ne}]`,`ug`),ie=new class extends s{equals(e,t,n){return n.ignoreCase&&(e=e.toLowerCase(),t=t.toLowerCase()),e.trim()===t.trim()}tokenize(e,t={}){let n;if(t.intlSegmenter){let r=t.intlSegmenter;if(r.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);n=g(e,r)}else n=e.match(re)||[];let r=[],i=null;return n.forEach(e=>{/\s/.test(e)?i==null?r.push(e):r.push(r.pop()+e):i!=null&&/\s/.test(i)?r[r.length-1]==i?r.push(r.pop()+e):r.push(i+e):r.push(e),i=e}),r}join(e){return e.map((e,t)=>t==0?e:e.replace(/^\s+/,``)).join(``)}postProcess(e,t){if(!e||t.oneChangePerToken)return e;let n=null,r=null,i=null;return e.forEach(e=>{e.added?r=e:e.removed?i=e:((r||i)&&oe(n,i,r,e,t.intlSegmenter),n=e,r=null,i=null)}),(r||i)&&oe(n,i,r,null,t.intlSegmenter),e}};function ae(e,t,n){return n?.ignoreWhitespace!=null&&!n.ignoreWhitespace?ce(e,t,n):ie.diff(e,t,n)}function oe(e,t,n,r,i){if(t&&n){let[a,o]=te(t.value,i),[s,m]=te(n.value,i);if(e){let r=c(a,s);e.value=d(e.value,s,r),t.value=f(t.value,r),n.value=f(n.value,r)}if(r){let e=l(o,m);r.value=u(r.value,m,e),t.value=p(t.value,e),n.value=p(n.value,e)}}else if(n){if(e){let e=_(n.value,i);n.value=n.value.substring(e.length)}if(r){let e=_(r.value,i);r.value=r.value.substring(e.length)}}else if(e&&r){let n=_(r.value,i),[a,o]=te(t.value,i),s=c(n,a);t.value=f(t.value,s);let m=l(f(n,s),o);t.value=p(t.value,m),r.value=u(r.value,n,m),e.value=d(e.value,n,n.slice(0,n.length-m.length))}else if(r){let e=_(r.value,i),n=m(ee(t.value,i),e);t.value=p(t.value,n)}else if(e){let n=m(ee(e.value,i),_(t.value,i));t.value=f(t.value,n)}}var se=new class extends s{tokenize(e){let t=RegExp(`(\\r?\\n)|[${ne}]+|[^\\S\\n\\r]+|[^${ne}]`,`ug`);return e.match(t)||[]}};function ce(e,t,n){return se.diff(e,t,n)}var le=new class extends s{constructor(){super(...arguments),this.tokenize=de}equals(e,t,n){return n.ignoreWhitespace?((!n.newlineIsToken||!e.includes(`
`))&&(e=e.trim()),(!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(e.endsWith(`
`)&&(e=e.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(e,t,n)}};function ue(e,t,n){return le.diff(e,t,n)}function de(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));let n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let e=0;e<r.length;e++){let i=r[e];e%2&&!t.newlineIsToken?n[n.length-1]+=i:n.push(i)}return n}function fe(e){return e==`.`||e==`!`||e==`?`}new class extends s{tokenize(e){let t=[],n=0;for(let r=0;r<e.length;r++){if(r==e.length-1){t.push(e.slice(n));break}if(fe(e[r])&&e[r+1].match(/\s/)){for(t.push(e.slice(n,r+1)),r=n=r+1;e[r+1]?.match(/\s/);)r++;t.push(e.slice(n,r+1)),n=r+1}}return t}},new class extends s{tokenize(e){return e.split(/([{}:;,]|\s+)/)}},new class extends s{constructor(){super(...arguments),this.tokenize=de}get useLongestToken(){return!0}castInput(e,t){let{undefinedReplacement:n,stringifyReplacer:r=(e,t)=>t===void 0?n:t}=t;return typeof e==`string`?e:JSON.stringify(pe(e,null,null,r),null,`  `)}equals(e,t,n){return super.equals(e.replace(/,([\r\n])/g,`$1`),t.replace(/,([\r\n])/g,`$1`),n)}};function pe(e,t,n,r,i){t||=[],n||=[],r&&(e=r(i===void 0?``:i,e));let a;for(a=0;a<t.length;a+=1)if(t[a]===e)return n[a];let o;if(Object.prototype.toString.call(e)===`[object Array]`){for(t.push(e),o=Array(e.length),n.push(o),a=0;a<e.length;a+=1)o[a]=pe(e[a],t,n,r,String(a));return t.pop(),n.pop(),o}if(e&&e.toJSON&&(e=e.toJSON()),typeof e==`object`&&e){t.push(e),o={},n.push(o);let i=[],s;for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&i.push(s);for(i.sort(),a=0;a<i.length;a+=1)s=i[a],o[s]=pe(e[s],t,n,r,s);t.pop(),n.pop()}else o=e;return o}new class extends s{tokenize(e){return e.slice()}join(e){return e}removeEmpty(e){return e}};function me(e,t){return he(e,new Map,t)}function he(e,t,n){if(e&&typeof e==`object`&&!Array.isArray(e)&&e.constructor===Object){if(t.has(e))return t.get(e);let r={};return t.set(e,r),Object.entries(e).sort((e,t)=>n?n({key:e[0],value:e[1]},{key:t[0],value:t[1]}):e[0].localeCompare(t[0])).forEach(([e,i])=>{r[e]=he(i,t,n)}),r}else return e}var ge=t(n(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):n.JSON5=r()})(e,(function(){function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}var t=e(function(e){var t=e.exports=typeof window<`u`&&window.Math==Math?window:typeof self<`u`&&self.Math==Math?self:Function(`return this`)();typeof __g==`number`&&(__g=t)}),n=e(function(e){var t=e.exports={version:`2.6.5`};typeof __e==`number`&&(__e=t)});n.version;var r=function(e){return typeof e==`object`?e!==null:typeof e==`function`},i=function(e){if(!r(e))throw TypeError(e+` is not an object!`);return e},a=function(e){try{return!!e()}catch{return!0}},o=!a(function(){return Object.defineProperty({},`a`,{get:function(){return 7}}).a!=7}),s=t.document,c=r(s)&&r(s.createElement),l=function(e){return c?s.createElement(e):{}},u=!o&&!a(function(){return Object.defineProperty(l(`div`),`a`,{get:function(){return 7}}).a!=7}),d=function(e,t){if(!r(e))return e;var n,i;if(t&&typeof(n=e.toString)==`function`&&!r(i=n.call(e))||typeof(n=e.valueOf)==`function`&&!r(i=n.call(e))||!t&&typeof(n=e.toString)==`function`&&!r(i=n.call(e)))return i;throw TypeError(`Can't convert object to primitive value`)},f=Object.defineProperty,p={f:o?Object.defineProperty:function(e,t,n){if(i(e),t=d(t,!0),i(n),u)try{return f(e,t,n)}catch{}if(`get`in n||`set`in n)throw TypeError(`Accessors not supported!`);return`value`in n&&(e[t]=n.value),e}},m=function(e,t){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:t}},h=o?function(e,t,n){return p.f(e,t,m(1,n))}:function(e,t,n){return e[t]=n,e},g={}.hasOwnProperty,ee=function(e,t){return g.call(e,t)},_=0,te=Math.random(),ne=function(e){return`Symbol(${e===void 0?``:e})_${(++_+te).toString(36)}`},re=!1,ie=e(function(e){var r=`__core-js_shared__`,i=t[r]||(t[r]={});(e.exports=function(e,t){return i[e]||(i[e]=t===void 0?{}:t)})(`versions`,[]).push({version:n.version,mode:re?`pure`:`global`,copyright:`© 2019 Denis Pushkarev (zloirock.ru)`})})(`native-function-to-string`,Function.toString),ae=e(function(e){var r=ne(`src`),i=`toString`,a=(``+ie).split(i);n.inspectSource=function(e){return ie.call(e)},(e.exports=function(e,n,i,o){var s=typeof i==`function`;s&&(ee(i,`name`)||h(i,`name`,n)),e[n]!==i&&(s&&(ee(i,r)||h(i,r,e[n]?``+e[n]:a.join(String(n)))),e===t?e[n]=i:o?e[n]?e[n]=i:h(e,n,i):(delete e[n],h(e,n,i)))})(Function.prototype,i,function(){return typeof this==`function`&&this[r]||ie.call(this)})}),oe=function(e){if(typeof e!=`function`)throw TypeError(e+` is not a function!`);return e},se=function(e,t,n){if(oe(e),t===void 0)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}},ce=`prototype`,le=function(e,r,i){var a=e&le.F,o=e&le.G,s=e&le.S,c=e&le.P,l=e&le.B,u=o?t:s?t[r]||(t[r]={}):(t[r]||{})[ce],d=o?n:n[r]||(n[r]={}),f=d[ce]||(d[ce]={}),p,m,g,ee;for(p in o&&(i=r),i)m=!a&&u&&u[p]!==void 0,g=(m?u:i)[p],ee=l&&m?se(g,t):c&&typeof g==`function`?se(Function.call,g):g,u&&ae(u,p,g,e&le.U),d[p]!=g&&h(d,p,ee),c&&f[p]!=g&&(f[p]=g)};t.core=n,le.F=1,le.G=2,le.S=4,le.P=8,le.B=16,le.W=32,le.U=64,le.R=128;var ue=le,de=Math.ceil,fe=Math.floor,pe=function(e){return isNaN(e=+e)?0:(e>0?fe:de)(e)},me=function(e){if(e==null)throw TypeError(`Can't call method on  `+e);return e},he=function(e){return function(t,n){var r=String(me(t)),i=pe(n),a=r.length,o,s;return i<0||i>=a?e?``:void 0:(o=r.charCodeAt(i),o<55296||o>56319||i+1===a||(s=r.charCodeAt(i+1))<56320||s>57343?e?r.charAt(i):o:e?r.slice(i,i+2):(o-55296<<10)+(s-56320)+65536)}}(!1);ue(ue.P,`String`,{codePointAt:function(e){return he(this,e)}}),n.String.codePointAt;var ge=Math.max,_e=Math.min,v=function(e,t){return e=pe(e),e<0?ge(e+t,0):_e(e,t)},y=String.fromCharCode,ve=String.fromCodePoint;ue(ue.S+ue.F*(!!ve&&ve.length!=1),`String`,{fromCodePoint:function(e){for(var t=arguments,n=[],r=arguments.length,i=0,a;r>i;){if(a=+t[i++],v(a,1114111)!==a)throw RangeError(a+` is not a valid code point`);n.push(a<65536?y(a):y(((a-=65536)>>10)+55296,a%1024+56320))}return n.join(``)}}),n.String.fromCodePoint;var ye={Space_Separator:/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,ID_Start:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,ID_Continue:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/},b={isSpaceSeparator:function(e){return typeof e==`string`&&ye.Space_Separator.test(e)},isIdStartChar:function(e){return typeof e==`string`&&(e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e===`$`||e===`_`||ye.ID_Start.test(e))},isIdContinueChar:function(e){return typeof e==`string`&&(e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e>=`0`&&e<=`9`||e===`$`||e===`_`||e===`‌`||e===`‍`||ye.ID_Continue.test(e))},isDigit:function(e){return typeof e==`string`&&/[0-9]/.test(e)},isHexDigit:function(e){return typeof e==`string`&&/[0-9A-Fa-f]/.test(e)}},be,x,xe,Se,Ce,we,Te,Ee,De,Oe=function(e,t){be=String(e),x=`start`,xe=[],Se=0,Ce=1,we=0,Te=void 0,Ee=void 0,De=void 0;do Te=Fe(),He[x]();while(Te.type!==`eof`);return typeof t==`function`?ke({"":De},``,t):De};function ke(e,t,n){var r=e[t];if(typeof r==`object`&&r)if(Array.isArray(r))for(var i=0;i<r.length;i++){var a=String(i),o=ke(r,a,n);o===void 0?delete r[a]:Object.defineProperty(r,a,{value:o,writable:!0,enumerable:!0,configurable:!0})}else for(var s in r){var c=ke(r,s,n);c===void 0?delete r[s]:Object.defineProperty(r,s,{value:c,writable:!0,enumerable:!0,configurable:!0})}return n.call(e,t,r)}var Ae,je,Me,Ne,Pe;function Fe(){for(Ae=`default`,je=``,Me=!1,Ne=1;;){Pe=Ie();var e=C[Ae]();if(e)return e}}function Ie(){if(be[Se])return String.fromCodePoint(be.codePointAt(Se))}function S(){var e=Ie();return e===`
`?(Ce++,we=0):e?we+=e.length:we++,e&&(Se+=e.length),e}var C={default:function(){switch(Pe){case`	`:case`\v`:case`\f`:case` `:case`\xA0`:case`﻿`:case`
`:case`\r`:case`\u2028`:case`\u2029`:S();return;case`/`:S(),Ae=`comment`;return;case void 0:return S(),Le(`eof`)}if(b.isSpaceSeparator(Pe)){S();return}return C[x]()},comment:function(){switch(Pe){case`*`:S(),Ae=`multiLineComment`;return;case`/`:S(),Ae=`singleLineComment`;return}throw Ge(S())},multiLineComment:function(){switch(Pe){case`*`:S(),Ae=`multiLineCommentAsterisk`;return;case void 0:throw Ge(S())}S()},multiLineCommentAsterisk:function(){switch(Pe){case`*`:S();return;case`/`:S(),Ae=`default`;return;case void 0:throw Ge(S())}S(),Ae=`multiLineComment`},singleLineComment:function(){switch(Pe){case`
`:case`\r`:case`\u2028`:case`\u2029`:S(),Ae=`default`;return;case void 0:return S(),Le(`eof`)}S()},value:function(){switch(Pe){case`{`:case`[`:return Le(`punctuator`,S());case`n`:return S(),Re(`ull`),Le(`null`,null);case`t`:return S(),Re(`rue`),Le(`boolean`,!0);case`f`:return S(),Re(`alse`),Le(`boolean`,!1);case`-`:case`+`:S()===`-`&&(Ne=-1),Ae=`sign`;return;case`.`:je=S(),Ae=`decimalPointLeading`;return;case`0`:je=S(),Ae=`zero`;return;case`1`:case`2`:case`3`:case`4`:case`5`:case`6`:case`7`:case`8`:case`9`:je=S(),Ae=`decimalInteger`;return;case`I`:return S(),Re(`nfinity`),Le(`numeric`,1/0);case`N`:return S(),Re(`aN`),Le(`numeric`,NaN);case`"`:case`'`:Me=S()===`"`,je=``,Ae=`string`;return}throw Ge(S())},identifierNameStartEscape:function(){if(Pe!==`u`)throw Ge(S());S();var e=Ve();switch(e){case`$`:case`_`:break;default:if(!b.isIdStartChar(e))throw qe();break}je+=e,Ae=`identifierName`},identifierName:function(){switch(Pe){case`$`:case`_`:case`‌`:case`‍`:je+=S();return;case`\\`:S(),Ae=`identifierNameEscape`;return}if(b.isIdContinueChar(Pe)){je+=S();return}return Le(`identifier`,je)},identifierNameEscape:function(){if(Pe!==`u`)throw Ge(S());S();var e=Ve();switch(e){case`$`:case`_`:case`‌`:case`‍`:break;default:if(!b.isIdContinueChar(e))throw qe();break}je+=e,Ae=`identifierName`},sign:function(){switch(Pe){case`.`:je=S(),Ae=`decimalPointLeading`;return;case`0`:je=S(),Ae=`zero`;return;case`1`:case`2`:case`3`:case`4`:case`5`:case`6`:case`7`:case`8`:case`9`:je=S(),Ae=`decimalInteger`;return;case`I`:return S(),Re(`nfinity`),Le(`numeric`,Ne*(1/0));case`N`:return S(),Re(`aN`),Le(`numeric`,NaN)}throw Ge(S())},zero:function(){switch(Pe){case`.`:je+=S(),Ae=`decimalPoint`;return;case`e`:case`E`:je+=S(),Ae=`decimalExponent`;return;case`x`:case`X`:je+=S(),Ae=`hexadecimal`;return}return Le(`numeric`,Ne*0)},decimalInteger:function(){switch(Pe){case`.`:je+=S(),Ae=`decimalPoint`;return;case`e`:case`E`:je+=S(),Ae=`decimalExponent`;return}if(b.isDigit(Pe)){je+=S();return}return Le(`numeric`,Ne*Number(je))},decimalPointLeading:function(){if(b.isDigit(Pe)){je+=S(),Ae=`decimalFraction`;return}throw Ge(S())},decimalPoint:function(){switch(Pe){case`e`:case`E`:je+=S(),Ae=`decimalExponent`;return}if(b.isDigit(Pe)){je+=S(),Ae=`decimalFraction`;return}return Le(`numeric`,Ne*Number(je))},decimalFraction:function(){switch(Pe){case`e`:case`E`:je+=S(),Ae=`decimalExponent`;return}if(b.isDigit(Pe)){je+=S();return}return Le(`numeric`,Ne*Number(je))},decimalExponent:function(){switch(Pe){case`+`:case`-`:je+=S(),Ae=`decimalExponentSign`;return}if(b.isDigit(Pe)){je+=S(),Ae=`decimalExponentInteger`;return}throw Ge(S())},decimalExponentSign:function(){if(b.isDigit(Pe)){je+=S(),Ae=`decimalExponentInteger`;return}throw Ge(S())},decimalExponentInteger:function(){if(b.isDigit(Pe)){je+=S();return}return Le(`numeric`,Ne*Number(je))},hexadecimal:function(){if(b.isHexDigit(Pe)){je+=S(),Ae=`hexadecimalInteger`;return}throw Ge(S())},hexadecimalInteger:function(){if(b.isHexDigit(Pe)){je+=S();return}return Le(`numeric`,Ne*Number(je))},string:function(){switch(Pe){case`\\`:S(),je+=ze();return;case`"`:if(Me)return S(),Le(`string`,je);je+=S();return;case`'`:if(!Me)return S(),Le(`string`,je);je+=S();return;case`
`:case`\r`:throw Ge(S());case`\u2028`:case`\u2029`:w(Pe);break;case void 0:throw Ge(S())}je+=S()},start:function(){switch(Pe){case`{`:case`[`:return Le(`punctuator`,S())}Ae=`value`},beforePropertyName:function(){switch(Pe){case`$`:case`_`:je=S(),Ae=`identifierName`;return;case`\\`:S(),Ae=`identifierNameStartEscape`;return;case`}`:return Le(`punctuator`,S());case`"`:case`'`:Me=S()===`"`,Ae=`string`;return}if(b.isIdStartChar(Pe)){je+=S(),Ae=`identifierName`;return}throw Ge(S())},afterPropertyName:function(){if(Pe===`:`)return Le(`punctuator`,S());throw Ge(S())},beforePropertyValue:function(){Ae=`value`},afterPropertyValue:function(){switch(Pe){case`,`:case`}`:return Le(`punctuator`,S())}throw Ge(S())},beforeArrayValue:function(){if(Pe===`]`)return Le(`punctuator`,S());Ae=`value`},afterArrayValue:function(){switch(Pe){case`,`:case`]`:return Le(`punctuator`,S())}throw Ge(S())},end:function(){throw Ge(S())}};function Le(e,t){return{type:e,value:t,line:Ce,column:we}}function Re(e){for(var t=0,n=e;t<n.length;t+=1){var r=n[t];if(Ie()!==r)throw Ge(S());S()}}function ze(){switch(Ie()){case`b`:return S(),`\b`;case`f`:return S(),`\f`;case`n`:return S(),`
`;case`r`:return S(),`\r`;case`t`:return S(),`	`;case`v`:return S(),`\v`;case`0`:if(S(),b.isDigit(Ie()))throw Ge(S());return`\0`;case`x`:return S(),Be();case`u`:return S(),Ve();case`
`:case`\u2028`:case`\u2029`:return S(),``;case`\r`:return S(),Ie()===`
`&&S(),``;case`1`:case`2`:case`3`:case`4`:case`5`:case`6`:case`7`:case`8`:case`9`:throw Ge(S());case void 0:throw Ge(S())}return S()}function Be(){var e=``,t=Ie();if(!b.isHexDigit(t)||(e+=S(),t=Ie(),!b.isHexDigit(t)))throw Ge(S());return e+=S(),String.fromCodePoint(parseInt(e,16))}function Ve(){for(var e=``,t=4;t-- >0;){var n=Ie();if(!b.isHexDigit(n))throw Ge(S());e+=S()}return String.fromCodePoint(parseInt(e,16))}var He={start:function(){if(Te.type===`eof`)throw Ke();Ue()},beforePropertyName:function(){switch(Te.type){case`identifier`:case`string`:Ee=Te.value,x=`afterPropertyName`;return;case`punctuator`:We();return;case`eof`:throw Ke()}},afterPropertyName:function(){if(Te.type===`eof`)throw Ke();x=`beforePropertyValue`},beforePropertyValue:function(){if(Te.type===`eof`)throw Ke();Ue()},beforeArrayValue:function(){if(Te.type===`eof`)throw Ke();if(Te.type===`punctuator`&&Te.value===`]`){We();return}Ue()},afterPropertyValue:function(){if(Te.type===`eof`)throw Ke();switch(Te.value){case`,`:x=`beforePropertyName`;return;case`}`:We()}},afterArrayValue:function(){if(Te.type===`eof`)throw Ke();switch(Te.value){case`,`:x=`beforeArrayValue`;return;case`]`:We()}},end:function(){}};function Ue(){var e;switch(Te.type){case`punctuator`:switch(Te.value){case`{`:e={};break;case`[`:e=[];break}break;case`null`:case`boolean`:case`numeric`:case`string`:e=Te.value;break}if(De===void 0)De=e;else{var t=xe[xe.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,Ee,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(typeof e==`object`&&e)xe.push(e),x=Array.isArray(e)?`beforeArrayValue`:`beforePropertyName`;else{var n=xe[xe.length-1];x=n==null?`end`:Array.isArray(n)?`afterArrayValue`:`afterPropertyValue`}}function We(){xe.pop();var e=xe[xe.length-1];x=e==null?`end`:Array.isArray(e)?`afterArrayValue`:`afterPropertyValue`}function Ge(e){return Ye(e===void 0?`JSON5: invalid end of input at `+Ce+`:`+we:`JSON5: invalid character '`+Je(e)+`' at `+Ce+`:`+we)}function Ke(){return Ye(`JSON5: invalid end of input at `+Ce+`:`+we)}function qe(){return we-=5,Ye(`JSON5: invalid identifier character at `+Ce+`:`+we)}function w(e){console.warn(`JSON5: '`+Je(e)+`' in strings is not valid ECMAScript; consider escaping`)}function Je(e){var t={"'":`\\'`,'"':`\\"`,"\\":`\\\\`,"\b":`\\b`,"\f":`\\f`,"\n":`\\n`,"\r":`\\r`,"	":`\\t`,"\v":`\\v`,"\0":`\\0`,"\u2028":`\\u2028`,"\u2029":`\\u2029`};if(t[e])return t[e];if(e<` `){var n=e.charCodeAt(0).toString(16);return`\\x`+(`00`+n).substring(n.length)}return e}function Ye(e){var t=SyntaxError(e);return t.lineNumber=Ce,t.columnNumber=we,t}return{parse:Oe,stringify:function(e,t,n){var r=[],i=``,a,o,s=``,c;if(typeof t==`object`&&t&&!Array.isArray(t)&&(n=t.space,c=t.quote,t=t.replacer),typeof t==`function`)o=t;else if(Array.isArray(t)){a=[];for(var l=0,u=t;l<u.length;l+=1){var d=u[l],f=void 0;typeof d==`string`?f=d:(typeof d==`number`||d instanceof String||d instanceof Number)&&(f=String(d)),f!==void 0&&a.indexOf(f)<0&&a.push(f)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n==`number`?n>0&&(n=Math.min(10,Math.floor(n)),s=`          `.substr(0,n)):typeof n==`string`&&(s=n.substr(0,10)),p(``,{"":e});function p(e,t){var n=t[e];switch(n!=null&&(typeof n.toJSON5==`function`?n=n.toJSON5(e):typeof n.toJSON==`function`&&(n=n.toJSON(e))),o&&(n=o.call(t,e,n)),n instanceof Number?n=Number(n):n instanceof String?n=String(n):n instanceof Boolean&&(n=n.valueOf()),n){case null:return`null`;case!0:return`true`;case!1:return`false`}if(typeof n==`string`)return m(n,!1);if(typeof n==`number`)return String(n);if(typeof n==`object`)return Array.isArray(n)?ee(n):h(n)}function m(e){for(var t={"'":.1,'"':.2},n={"'":`\\'`,'"':`\\"`,"\\":`\\\\`,"\b":`\\b`,"\f":`\\f`,"\n":`\\n`,"\r":`\\r`,"	":`\\t`,"\v":`\\v`,"\0":`\\0`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},r=``,i=0;i<e.length;i++){var a=e[i];switch(a){case`'`:case`"`:t[a]++,r+=a;continue;case`\0`:if(b.isDigit(e[i+1])){r+=`\\x00`;continue}}if(n[a]){r+=n[a];continue}if(a<` `){var o=a.charCodeAt(0).toString(16);r+=`\\x`+(`00`+o).substring(o.length);continue}r+=a}var s=c||Object.keys(t).reduce(function(e,n){return t[e]<t[n]?e:n});return r=r.replace(new RegExp(s,`g`),n[s]),s+r+s}function h(e){if(r.indexOf(e)>=0)throw TypeError(`Converting circular structure to JSON5`);r.push(e);var t=i;i+=s;for(var n=a||Object.keys(e),o=[],c=0,l=n;c<l.length;c+=1){var u=l[c],d=p(u,e);if(d!==void 0){var f=g(u)+`:`;s!==``&&(f+=` `),f+=d,o.push(f)}}var m;if(o.length===0)m=`{}`;else{var h;if(s===``)h=o.join(`,`),m=`{`+h+`}`;else{var ee=`,
`+i;h=o.join(ee),m=`{
`+i+h+`,
`+t+`}`}}return r.pop(),i=t,m}function g(e){if(e.length===0)return m(e,!0);var t=String.fromCodePoint(e.codePointAt(0));if(!b.isIdStartChar(t))return m(e,!0);for(var n=t.length;n<e.length;n++)if(!b.isIdContinueChar(String.fromCodePoint(e.codePointAt(n))))return m(e,!0);return e}function ee(e){if(r.indexOf(e)>=0)throw TypeError(`Converting circular structure to JSON5`);r.push(e);var t=i;i+=s;for(var n=[],a=0;a<e.length;a++){var o=p(String(a),e);n.push(o===void 0?`null`:o)}var c;if(n.length===0)c=`[]`;else if(s===``)c=`[`+n.join(`,`)+`]`;else{var l=`,
`+i,u=n.join(l);c=`[
`+i+u+`,
`+t+`]`}return r.pop(),i=t,c}}}}))}))(),1),_e=`__@@augment-vir-undefined-sentinel@@__`,v=RegExp(`['"]${_e}['"]`);function y(e,t){if(typeof e==`string`)return e;try{return ge.default.stringify(e,(e,t)=>t===void 0?_e:typeof t==`bigint`?Number(t):t,t||void 0).split(v).join(`undefined`)}catch{return String(e)}}typeof window<`u`&&window.document;var ve=typeof process<`u`&&process.versions!=null&&process.versions.node!=null;typeof self==`object`&&self.constructor&&self.constructor.name,typeof window<`u`&&window.name===`nodejs`||typeof navigator<`u`&&`userAgent`in navigator&&typeof navigator.userAgent==`string`&&(navigator.userAgent.includes(`Node.js`)||navigator.userAgent.includes(`jsdom`)),typeof Deno<`u`&&Deno.version!==void 0&&Deno.version.deno,typeof process<`u`&&process.versions!=null&&process.versions.bun;var ye;(function(e){e.Node=`node`,e.Web=`web`})(ye||={});function b(){return ve?ye.Node:ye.Web}var be=b();function x(e){return be===e}function xe(e){return e[be]()}function Se(e,t){let n=typeof t==`string`&&typeof e==`string`,r=typeof t!=`string`||typeof e!=`string`,i=Te(r,(r?ue:ae)([n?``:`
`,y(t&&typeof t==`object`&&!Array.isArray(t)?me(t):t,4),`
`].join(``),[n?``:`
`,y(e&&typeof e==`object`&&!Array.isArray(e)?me(e):e,4),`
`].join(``))),a=x(ye.Node);return[[a?Ce.Green:``,` +added (unexpected, added in actual)`,a?Ce.Red:``,` -missing (expected, missing from actual)`,a?Ce.Reset:``].join(``),n?`

`:`
`,i].join(``)}var Ce;(function(e){e.Green=`\x1B[32m`,e.Red=`\x1B[31m`,e.Reset=`\x1B[0m`})(Ce||={});var we;(function(e){e.Added=`+`,e.Removed=`-`})(we||={});function Te(e,t){return e?t.flatMap(e=>e.value.split(`
`).map(t=>Ee(t,e)).join(`
`)).join(``):t.map(e=>Ee(void 0,e)).join(``)}function Ee(e,t){if(e!=null&&!e)return``;let n=x(ye.Node),r=t.added?we.Added:t.removed?we.Removed:e==null?``:` `,i=t.added?Ce.Green:t.removed?Ce.Red:Ce.Reset;return[n?i:``,r,e??t.value,Ce.Reset].join(``)}function De(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Oe(e){return De(e).filter(e=>isNaN(Number(e)))}function ke(e){return Oe(e).map(t=>e[t])}var Ae=[`.`,`:`,`;`,`,`,`?`,`!`];RegExp(`[${Ae.join(``)}]+`);var je=RegExp(`[${Ae.join(``)}]+$`);function Me(e){return e.replace(je,``)}function Ne(e){return e==null||e===``||e===`undefined`||e===`null`?``:typeof e==`string`?e:e instanceof Error?e.message:typeof e==`object`&&`message`in e?String(e.message):y(e)}function Pe(...e){let t=e.map(e=>Ne(e)).filter(e=>!!Me(e)),n=t[t.length-1]?.endsWith(`.`),r=t.map(e=>Me(Ne(e)));return(r.length<2?r[0]||``:r.join(`: `))+(n?`.`:``)}function Fe(e){return e instanceof Error?e:Error(Ne(e))}function Ie(e,t){let n=Fe(e),r=Pe(t,n.message);try{return n.message=r,n}catch{return Error(r,{cause:e})}}var S;(function(e){e[e.Continue=100]=`Continue`,e[e.SwitchingProtocols=101]=`SwitchingProtocols`,e[e.Processing=102]=`Processing`,e[e.EarlyHints=103]=`EarlyHints`,e[e.Ok=200]=`Ok`,e[e.Created=201]=`Created`,e[e.Accepted=202]=`Accepted`,e[e.NonAuthoritativeInformation=203]=`NonAuthoritativeInformation`,e[e.NoContent=204]=`NoContent`,e[e.ResetContent=205]=`ResetContent`,e[e.PartialContent=206]=`PartialContent`,e[e.MultiStatus=207]=`MultiStatus`,e[e.AlreadyReported=208]=`AlreadyReported`,e[e.ImUsed=226]=`ImUsed`,e[e.MultipleChoices=300]=`MultipleChoices`,e[e.MovedPermanently=301]=`MovedPermanently`,e[e.Found=302]=`Found`,e[e.SeeOther=303]=`SeeOther`,e[e.NotModified=304]=`NotModified`,e[e.UseProxy=305]=`UseProxy`,e[e.Unused=306]=`Unused`,e[e.TemporaryRedirect=307]=`TemporaryRedirect`,e[e.PermanentRedirect=308]=`PermanentRedirect`,e[e.BadRequest=400]=`BadRequest`,e[e.Unauthorized=401]=`Unauthorized`,e[e.PaymentRequired=402]=`PaymentRequired`,e[e.Forbidden=403]=`Forbidden`,e[e.NotFound=404]=`NotFound`,e[e.MethodNotAllowed=405]=`MethodNotAllowed`,e[e.NotAcceptable=406]=`NotAcceptable`,e[e.ProxyAuthenticationRequired=407]=`ProxyAuthenticationRequired`,e[e.RequestTimeout=408]=`RequestTimeout`,e[e.Conflict=409]=`Conflict`,e[e.Gone=410]=`Gone`,e[e.LengthRequired=411]=`LengthRequired`,e[e.PreconditionFailed=412]=`PreconditionFailed`,e[e.PayloadTooLarge=413]=`PayloadTooLarge`,e[e.UriTooLong=414]=`UriTooLong`,e[e.UnsupportedMediaType=415]=`UnsupportedMediaType`,e[e.RangeNotSatisfiable=416]=`RangeNotSatisfiable`,e[e.ExpectationFailed=417]=`ExpectationFailed`,e[e.ImATeapot=418]=`ImATeapot`,e[e.MisdirectedRequest=421]=`MisdirectedRequest`,e[e.UnprocessableContent=422]=`UnprocessableContent`,e[e.Locked=423]=`Locked`,e[e.FailedDependency=424]=`FailedDependency`,e[e.TooEarly=425]=`TooEarly`,e[e.UpgradeRequired=426]=`UpgradeRequired`,e[e.PreconditionRequired=428]=`PreconditionRequired`,e[e.TooManyRequests=429]=`TooManyRequests`,e[e.RequestHeaderFieldsTooLarge=431]=`RequestHeaderFieldsTooLarge`,e[e.UnavailableForLegalReasons=451]=`UnavailableForLegalReasons`,e[e.InternalServerError=500]=`InternalServerError`,e[e.NotImplemented=501]=`NotImplemented`,e[e.BadGateway=502]=`BadGateway`,e[e.ServiceUnavailable=503]=`ServiceUnavailable`,e[e.GatewayTimeout=504]=`GatewayTimeout`,e[e.HttpVersionNotSupported=505]=`HttpVersionNotSupported`,e[e.VariantAlsoNegotiates=506]=`VariantAlsoNegotiates`,e[e.InsufficientStorage=507]=`InsufficientStorage`,e[e.LoopDetected=508]=`LoopDetected`,e[e.NotExtended=510]=`NotExtended`,e[e.NetworkAuthenticationRequired=511]=`NetworkAuthenticationRequired`})(S||={});var C;(function(e){e.Information=`information`,e.Success=`success`,e.Redirect=`redirect`,e.ClientError=`clientError`,e.ServerError=`serverError`})(C||={}),C.ClientError,C.ServerError,S.Continue,C.Information,S.SwitchingProtocols,C.Information,S.Processing,C.Information,S.EarlyHints,C.Information,S.Ok,C.Success,S.Created,C.Success,S.Accepted,C.Success,S.NonAuthoritativeInformation,C.Success,S.NoContent,C.Success,S.ResetContent,C.Success,S.PartialContent,C.Success,S.MultiStatus,C.Success,S.AlreadyReported,C.Success,S.ImUsed,C.Success,S.MultipleChoices,C.Redirect,S.MovedPermanently,C.Redirect,S.Found,C.Redirect,S.SeeOther,C.Redirect,S.NotModified,C.Redirect,S.UseProxy,C.Redirect,S.Unused,C.Redirect,S.TemporaryRedirect,C.Redirect,S.PermanentRedirect,C.Redirect,S.BadRequest,C.ClientError,S.Unauthorized,C.ClientError,S.PaymentRequired,C.ClientError,S.Forbidden,C.ClientError,S.NotFound,C.ClientError,S.MethodNotAllowed,C.ClientError,S.NotAcceptable,C.ClientError,S.ProxyAuthenticationRequired,C.ClientError,S.RequestTimeout,C.ClientError,S.Conflict,C.ClientError,S.Gone,C.ClientError,S.LengthRequired,C.ClientError,S.PreconditionFailed,C.ClientError,S.PayloadTooLarge,C.ClientError,S.UriTooLong,C.ClientError,S.UnsupportedMediaType,C.ClientError,S.RangeNotSatisfiable,C.ClientError,S.ExpectationFailed,C.ClientError,S.ImATeapot,C.ClientError,S.MisdirectedRequest,C.ClientError,S.UnprocessableContent,C.ClientError,S.Locked,C.ClientError,S.FailedDependency,C.ClientError,S.TooEarly,C.ClientError,S.UpgradeRequired,C.ClientError,S.PreconditionRequired,C.ClientError,S.TooManyRequests,C.ClientError,S.RequestHeaderFieldsTooLarge,C.ClientError,S.UnavailableForLegalReasons,C.ClientError,S.InternalServerError,C.ServerError,S.NotImplemented,C.ServerError,S.BadGateway,C.ServerError,S.ServiceUnavailable,C.ServerError,S.GatewayTimeout,C.ServerError,S.HttpVersionNotSupported,C.ServerError,S.VariantAlsoNegotiates,C.ServerError,S.InsufficientStorage,C.ServerError,S.LoopDetected,C.ServerError,S.NotExtended,C.ServerError,S.NetworkAuthenticationRequired,C.ServerError;var Le={[C.Information]:[S.Continue,S.SwitchingProtocols,S.Processing,S.EarlyHints],[C.Success]:[S.Ok,S.Created,S.Accepted,S.NonAuthoritativeInformation,S.NoContent,S.ResetContent,S.PartialContent,S.MultiStatus,S.AlreadyReported,S.ImUsed],[C.Redirect]:[S.MultipleChoices,S.MovedPermanently,S.Found,S.SeeOther,S.NotModified,S.UseProxy,S.Unused,S.TemporaryRedirect,S.PermanentRedirect],[C.ClientError]:[S.BadRequest,S.Unauthorized,S.PaymentRequired,S.Forbidden,S.NotFound,S.MethodNotAllowed,S.NotAcceptable,S.ProxyAuthenticationRequired,S.RequestTimeout,S.Conflict,S.Gone,S.LengthRequired,S.PreconditionFailed,S.PayloadTooLarge,S.UriTooLong,S.UnsupportedMediaType,S.RangeNotSatisfiable,S.ExpectationFailed,S.ImATeapot,S.MisdirectedRequest,S.UnprocessableContent,S.Locked,S.FailedDependency,S.TooEarly,S.UpgradeRequired,S.PreconditionRequired,S.TooManyRequests,S.RequestHeaderFieldsTooLarge,S.UnavailableForLegalReasons],[C.ServerError]:[S.InternalServerError,S.NotImplemented,S.BadGateway,S.ServiceUnavailable,S.GatewayTimeout,S.HttpVersionNotSupported,S.VariantAlsoNegotiates,S.InsufficientStorage,S.LoopDetected,S.NotExtended,S.NetworkAuthenticationRequired]};function Re({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}var ze=class{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((e,t)=>{this.resolve=t=>(this.isSettled=!0,e(t)),this.reject=e=>{this.isSettled=!0,t(Fe(e))}})}},Be=class extends Error{},Ve=class extends Be{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}},He=class extends Be{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}},Ue=class extends Be{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}},We=class extends Be{},Ge=class extends Be{constructor(e){super(`Invalid unit ${e}`)}},Ke=class extends Be{},qe=class extends Be{constructor(){super(`Zone is an abstract class`)}},w=`numeric`,Je=`short`,Ye=`long`,Xe={year:w,month:w,day:w},Ze={year:w,month:Je,day:w},Qe={year:w,month:Je,day:w,weekday:Je},$e={year:w,month:Ye,day:w},et={year:w,month:Ye,day:w,weekday:Ye},tt={hour:w,minute:w},nt={hour:w,minute:w,second:w},rt={hour:w,minute:w,second:w,timeZoneName:Je},it={hour:w,minute:w,second:w,timeZoneName:Ye},at={hour:w,minute:w,hourCycle:`h23`},ot={hour:w,minute:w,second:w,hourCycle:`h23`},st={hour:w,minute:w,second:w,hourCycle:`h23`,timeZoneName:Je},ct={hour:w,minute:w,second:w,hourCycle:`h23`,timeZoneName:Ye},lt={year:w,month:w,day:w,hour:w,minute:w},ut={year:w,month:w,day:w,hour:w,minute:w,second:w},dt={year:w,month:Je,day:w,hour:w,minute:w},ft={year:w,month:Je,day:w,hour:w,minute:w,second:w},pt={year:w,month:Je,day:w,weekday:Je,hour:w,minute:w},mt={year:w,month:Ye,day:w,hour:w,minute:w,timeZoneName:Je},ht={year:w,month:Ye,day:w,hour:w,minute:w,second:w,timeZoneName:Je},gt={year:w,month:Ye,day:w,weekday:Ye,hour:w,minute:w,timeZoneName:Ye},_t={year:w,month:Ye,day:w,weekday:Ye,hour:w,minute:w,second:w,timeZoneName:Ye},vt=class{get type(){throw new qe}get name(){throw new qe}get ianaName(){return this.name}get isUniversal(){throw new qe}offsetName(e,t){throw new qe}formatOffset(e,t){throw new qe}offset(e){throw new qe}equals(e){throw new qe}get isValid(){throw new qe}},yt=null,bt=class e extends vt{static get instance(){return yt===null&&(yt=new e),yt}get type(){return`system`}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:t,locale:n}){return cr(e,t,n)}formatOffset(e,t){return fr(this.offset(e),t)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type===`system`}get isValid(){return!0}},xt=new Map;function St(e){let t=xt.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(`en-US`,{hour12:!1,timeZone:e,year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`,second:`2-digit`,era:`short`}),xt.set(e,t)),t}var Ct={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function wt(e,t){let n=e.format(t).replace(/\u200E/g,``),[,r,i,a,o,s,c,l]=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n);return[a,r,i,o,s,c,l]}function Tt(e,t){let n=e.formatToParts(t),r=[];for(let e=0;e<n.length;e++){let{type:t,value:i}=n[e],a=Ct[t];t===`era`?r[a]=i:T(a)||(r[a]=parseInt(i,10))}return r}var Et=new Map,Dt=class e extends vt{static create(t){let n=Et.get(t);return n===void 0&&Et.set(t,n=new e(t)),n}static resetCache(){Et.clear(),xt.clear()}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat(`en-US`,{timeZone:e}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=e.isValidZone(t)}get type(){return`iana`}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:t,locale:n}){return cr(e,t,n,this.name)}formatOffset(e,t){return fr(this.offset(e),t)}offset(e){if(!this.valid)return NaN;let t=new Date(e);if(isNaN(t))return NaN;let n=St(this.name),[r,i,a,o,s,c,l]=n.formatToParts?Tt(n,t):wt(n,t);o===`BC`&&(r=-Math.abs(r)+1);let u=ir({year:r,month:i,day:a,hour:s===24?0:s,minute:c,second:l,millisecond:0}),d=+t,f=d%1e3;return d-=f>=0?f:1e3+f,(u-d)/(60*1e3)}equals(e){return e.type===`iana`&&e.name===this.name}get isValid(){return this.valid}},Ot={};function kt(e,t={}){let n=JSON.stringify([e,t]),r=Ot[n];return r||(r=new Intl.ListFormat(e,t),Ot[n]=r),r}var At=new Map;function jt(e,t={}){let n=JSON.stringify([e,t]),r=At.get(n);return r===void 0&&(r=new Intl.DateTimeFormat(e,t),At.set(n,r)),r}var Mt=new Map;function Nt(e,t={}){let n=JSON.stringify([e,t]),r=Mt.get(n);return r===void 0&&(r=new Intl.NumberFormat(e,t),Mt.set(n,r)),r}var Pt=new Map;function Ft(e,t={}){let{base:n,...r}=t,i=JSON.stringify([e,r]),a=Pt.get(i);return a===void 0&&(a=new Intl.RelativeTimeFormat(e,t),Pt.set(i,a)),a}var It=null;function Lt(){return It||(It=new Intl.DateTimeFormat().resolvedOptions().locale,It)}var Rt=new Map;function zt(e){let t=Rt.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),Rt.set(e,t)),t}var Bt=new Map;function Vt(e){let t=Bt.get(e);if(!t){let n=new Intl.Locale(e);t=`getWeekInfo`in n?n.getWeekInfo():n.weekInfo,`minimalDays`in t||(t={...Zt,...t}),Bt.set(e,t)}return t}function Ht(e){let t=e.indexOf(`-x-`);t!==-1&&(e=e.substring(0,t));let n=e.indexOf(`-u-`);if(n===-1)return[e];{let t,r;try{t=jt(e).resolvedOptions(),r=e}catch{let i=e.substring(0,n);t=jt(i).resolvedOptions(),r=i}let{numberingSystem:i,calendar:a}=t;return[r,i,a]}}function Ut(e,t,n){return n||t?(e.includes(`-u-`)||(e+=`-u`),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`),e):e}function Wt(e){let t=[];for(let n=1;n<=12;n++){let r=$a.utc(2009,n,1);t.push(e(r))}return t}function Gt(e){let t=[];for(let n=1;n<=7;n++){let r=$a.utc(2016,11,13+n);t.push(e(r))}return t}function Kt(e,t,n,r){let i=e.listingMode();return i===`error`?null:i===`en`?n(t):r(t)}function qt(e){return e.numberingSystem&&e.numberingSystem!==`latn`?!1:e.numberingSystem===`latn`||!e.locale||e.locale.startsWith(`en`)||zt(e.locale).numberingSystem===`latn`}var Jt=class{constructor(e,t,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;let{padTo:r,floor:i,...a}=n;if(!t||Object.keys(a).length>0){let t={useGrouping:!1,...n};n.padTo>0&&(t.minimumIntegerDigits=n.padTo),this.inf=Nt(e,t)}}format(e){if(this.inf){let t=this.floor?Math.floor(e):e;return this.inf.format(t)}else return Xn(this.floor?Math.floor(e):er(e,3),this.padTo)}},Yt=class{constructor(e,t,n){this.opts=n,this.originalZone=void 0;let r;if(this.opts.timeZone)this.dt=e;else if(e.zone.type===`fixed`){let t=-1*(e.offset/60),n=t>=0?`Etc/GMT+${t}`:`Etc/GMT${t}`;e.offset!==0&&Dt.create(n).valid?(r=n,this.dt=e):(r=`UTC`,this.dt=e.offset===0?e:e.setZone(`UTC`).plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type===`system`?this.dt=e:e.zone.type===`iana`?(this.dt=e,r=e.zone.name):(r=`UTC`,this.dt=e.setZone(`UTC`).plus({minutes:e.offset}),this.originalZone=e.zone);let i={...this.opts};i.timeZone=i.timeZone||r,this.dtf=jt(t,i)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(``):this.dtf.format(this.dt.toJSDate())}formatToParts(){let e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(e=>{if(e.type===`timeZoneName`){let t=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...e,value:t}}else return e}):e}resolvedOptions(){return this.dtf.resolvedOptions()}},Xt=class{constructor(e,t,n){this.opts={style:`long`,...n},!t&&Vn()&&(this.rtf=Ft(e,n))}format(e,t){return this.rtf?this.rtf.format(e,t):jr(t,e,this.opts.numeric,this.opts.style!==`long`)}formatToParts(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]}},Zt={firstDay:1,minimalDays:4,weekend:[6,7]},Qt=class e{static fromOpts(t){return e.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,i,a=!1){let o=t||yn.defaultLocale;return new e(o||(a?`en-US`:Lt()),n||yn.defaultNumberingSystem,r||yn.defaultOutputCalendar,qn(i)||yn.defaultWeekSettings,o)}static resetCache(){It=null,At.clear(),Mt.clear(),Pt.clear(),Rt.clear(),Bt.clear()}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return e.create(t,n,r,i)}constructor(e,t,n,r,i){let[a,o,s]=Ht(e);this.locale=a,this.numberingSystem=t||o||null,this.outputCalendar=n||s||null,this.weekSettings=r,this.intl=Ut(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached??=qt(this),this.fastNumbersCached}listingMode(){let e=this.isEnglish(),t=(this.numberingSystem===null||this.numberingSystem===`latn`)&&(this.outputCalendar===null||this.outputCalendar===`gregory`);return e&&t?`en`:`intl`}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:e.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,qn(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,t=!1){return Kt(this,e,_r,()=>{let n=this.intl===`ja`||this.intl.startsWith(`ja-`);t&=!n;let r=t?{month:e,day:`numeric`}:{month:e},i=t?`format`:`standalone`;if(!this.monthsCache[i][e]){let t=n?e=>this.dtFormatter(e,r).format():e=>this.extract(e,r,`month`);this.monthsCache[i][e]=Wt(t)}return this.monthsCache[i][e]})}weekdays(e,t=!1){return Kt(this,e,xr,()=>{let n=t?{weekday:e,year:`numeric`,month:`long`,day:`numeric`}:{weekday:e},r=t?`format`:`standalone`;return this.weekdaysCache[r][e]||(this.weekdaysCache[r][e]=Gt(e=>this.extract(e,n,`weekday`))),this.weekdaysCache[r][e]})}meridiems(){return Kt(this,void 0,()=>Sr,()=>{if(!this.meridiemCache){let e={hour:`numeric`,hourCycle:`h12`};this.meridiemCache=[$a.utc(2016,11,13,9),$a.utc(2016,11,13,19)].map(t=>this.extract(t,e,`dayperiod`))}return this.meridiemCache})}eras(e){return Kt(this,e,Er,()=>{let t={era:e};return this.eraCache[e]||(this.eraCache[e]=[$a.utc(-40,1,1),$a.utc(2017,1,1)].map(e=>this.extract(e,t,`era`))),this.eraCache[e]})}extract(e,t,n){let r=this.dtFormatter(e,t).formatToParts().find(e=>e.type.toLowerCase()===n);return r?r.value:null}numberFormatter(e={}){return new Jt(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,t={}){return new Yt(e,this.intl,t)}relFormatter(e={}){return new Xt(this.intl,this.isEnglish(),e)}listFormatter(e={}){return kt(this.intl,e)}isEnglish(){return this.locale===`en`||this.locale.toLowerCase()===`en-us`||zt(this.intl).locale.startsWith(`en-us`)}getWeekSettings(){return this.weekSettings?this.weekSettings:Hn()?Vt(this.locale):Zt}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}},$t=null,en=class e extends vt{static get utcInstance(){return $t===null&&($t=new e(0)),$t}static instance(t){return t===0?e.utcInstance:new e(t)}static parseSpecifier(t){if(t){let n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new e(lr(n[1],n[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return`fixed`}get name(){return this.fixed===0?`UTC`:`UTC${fr(this.fixed,`narrow`)}`}get ianaName(){return this.fixed===0?`Etc/UTC`:`Etc/GMT${fr(-this.fixed,`narrow`)}`}offsetName(){return this.name}formatOffset(e,t){return fr(this.fixed,t)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type===`fixed`&&e.fixed===this.fixed}get isValid(){return!0}},tn=class extends vt{constructor(e){super(),this.zoneName=e}get type(){return`invalid`}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return``}offset(){return NaN}equals(){return!1}get isValid(){return!1}};function nn(e,t){if(T(e)||e===null)return t;if(e instanceof vt)return e;if(zn(e)){let n=e.toLowerCase();return n===`default`?t:n===`local`||n===`system`?bt.instance:n===`utc`||n===`gmt`?en.utcInstance:en.parseSpecifier(n)||Dt.create(e)}else if(Ln(e))return en.instance(e);else if(typeof e==`object`&&`offset`in e&&typeof e.offset==`function`)return e;else return new tn(e)}var rn={arab:`[٠-٩]`,arabext:`[۰-۹]`,bali:`[᭐-᭙]`,beng:`[০-৯]`,deva:`[०-९]`,fullwide:`[０-９]`,gujr:`[૦-૯]`,hanidec:`[〇|一|二|三|四|五|六|七|八|九]`,khmr:`[០-៩]`,knda:`[೦-೯]`,laoo:`[໐-໙]`,limb:`[᥆-᥏]`,mlym:`[൦-൯]`,mong:`[᠐-᠙]`,mymr:`[၀-၉]`,orya:`[୦-୯]`,tamldec:`[௦-௯]`,telu:`[౦-౯]`,thai:`[๐-๙]`,tibt:`[༠-༩]`,latn:`\\d`},an={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},on=rn.hanidec.replace(/[\[|\]]/g,``).split(``);function sn(e){let t=parseInt(e,10);if(isNaN(t)){t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(e[n].search(rn.hanidec)!==-1)t+=on.indexOf(e[n]);else for(let e in an){let[n,i]=an[e];r>=n&&r<=i&&(t+=r-n)}}return parseInt(t,10)}else return t}var cn=new Map;function ln(){cn.clear()}function un({numberingSystem:e},t=``){let n=e||`latn`,r=cn.get(n);r===void 0&&(r=new Map,cn.set(n,r));let i=r.get(t);return i===void 0&&(i=RegExp(`${rn[n]}${t}`),r.set(t,i)),i}var dn=()=>Date.now(),fn=`system`,pn=null,mn=null,hn=null,gn=60,_n,vn=null,yn=class{static get now(){return dn}static set now(e){dn=e}static set defaultZone(e){fn=e}static get defaultZone(){return nn(fn,bt.instance)}static get defaultLocale(){return pn}static set defaultLocale(e){pn=e}static get defaultNumberingSystem(){return mn}static set defaultNumberingSystem(e){mn=e}static get defaultOutputCalendar(){return hn}static set defaultOutputCalendar(e){hn=e}static get defaultWeekSettings(){return vn}static set defaultWeekSettings(e){vn=qn(e)}static get twoDigitCutoffYear(){return gn}static set twoDigitCutoffYear(e){gn=e%100}static get throwOnInvalid(){return _n}static set throwOnInvalid(e){_n=e}static resetCaches(){Qt.resetCache(),Dt.resetCache(),$a.resetCache(),ln()}},bn=class{constructor(e,t){this.reason=e,this.explanation=t}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}},xn=[0,31,59,90,120,151,181,212,243,273,304,334],Sn=[0,31,60,91,121,152,182,213,244,274,305,335];function Cn(e,t){return new bn(`unit out of range`,`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function wn(e,t,n){let r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);let i=r.getUTCDay();return i===0?7:i}function Tn(e,t,n){return n+(tr(e)?Sn:xn)[t-1]}function En(e,t){let n=tr(e)?Sn:xn,r=n.findIndex(e=>e<t),i=t-n[r];return{month:r+1,day:i}}function Dn(e,t){return(e-t+7)%7+1}function On(e,t=4,n=1){let{year:r,month:i,day:a}=e,o=Tn(r,i,a),s=Dn(wn(r,i,a),n),c=Math.floor((o-s+14-t)/7),l;return c<1?(l=r-1,c=or(l,t,n)):c>or(r,t,n)?(l=r+1,c=1):l=r,{weekYear:l,weekNumber:c,weekday:s,...pr(e)}}function kn(e,t=4,n=1){let{weekYear:r,weekNumber:i,weekday:a}=e,o=Dn(wn(r,1,t),n),s=nr(r),c=i*7+a-o-7+t,l;c<1?(l=r-1,c+=nr(l)):c>s?(l=r+1,c-=nr(r)):l=r;let{month:u,day:d}=En(l,c);return{year:l,month:u,day:d,...pr(e)}}function An(e){let{year:t,month:n,day:r}=e;return{year:t,ordinal:Tn(t,n,r),...pr(e)}}function jn(e){let{year:t,ordinal:n}=e,{month:r,day:i}=En(t,n);return{year:t,month:r,day:i,...pr(e)}}function Mn(e,t){if(!T(e.localWeekday)||!T(e.localWeekNumber)||!T(e.localWeekYear)){if(!T(e.weekday)||!T(e.weekNumber)||!T(e.weekYear))throw new We(`Cannot mix locale-based week fields with ISO-based week fields`);return T(e.localWeekday)||(e.weekday=e.localWeekday),T(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),T(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Nn(e,t=4,n=1){let r=Rn(e.weekYear),i=Jn(e.weekNumber,1,or(e.weekYear,t,n)),a=Jn(e.weekday,1,7);return r?i?a?!1:Cn(`weekday`,e.weekday):Cn(`week`,e.weekNumber):Cn(`weekYear`,e.weekYear)}function Pn(e){let t=Rn(e.year),n=Jn(e.ordinal,1,nr(e.year));return t?n?!1:Cn(`ordinal`,e.ordinal):Cn(`year`,e.year)}function Fn(e){let t=Rn(e.year),n=Jn(e.month,1,12),r=Jn(e.day,1,rr(e.year,e.month));return t?n?r?!1:Cn(`day`,e.day):Cn(`month`,e.month):Cn(`year`,e.year)}function In(e){let{hour:t,minute:n,second:r,millisecond:i}=e,a=Jn(t,0,23)||t===24&&n===0&&r===0&&i===0,o=Jn(n,0,59),s=Jn(r,0,59),c=Jn(i,0,999);return a?o?s?c?!1:Cn(`millisecond`,i):Cn(`second`,r):Cn(`minute`,n):Cn(`hour`,t)}function T(e){return e===void 0}function Ln(e){return typeof e==`number`}function Rn(e){return typeof e==`number`&&e%1==0}function zn(e){return typeof e==`string`}function Bn(e){return Object.prototype.toString.call(e)===`[object Date]`}function Vn(){try{return typeof Intl<`u`&&!!Intl.RelativeTimeFormat}catch{return!1}}function Hn(){try{return typeof Intl<`u`&&!!Intl.Locale&&(`weekInfo`in Intl.Locale.prototype||`getWeekInfo`in Intl.Locale.prototype)}catch{return!1}}function Un(e){return Array.isArray(e)?e:[e]}function Wn(e,t,n){if(e.length!==0)return e.reduce((e,r)=>{let i=[t(r),r];return e&&n(e[0],i[0])===e[0]?e:i},null)[1]}function Gn(e,t){return t.reduce((t,n)=>(t[n]=e[n],t),{})}function Kn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function qn(e){if(e==null)return null;if(typeof e!=`object`)throw new Ke(`Week settings must be an object`);if(!Jn(e.firstDay,1,7)||!Jn(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(e=>!Jn(e,1,7)))throw new Ke(`Invalid week settings`);return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Jn(e,t,n){return Rn(e)&&e>=t&&e<=n}function Yn(e,t){return e-t*Math.floor(e/t)}function Xn(e,t=2){let n=e<0,r;return r=n?`-`+(``+-e).padStart(t,`0`):(``+e).padStart(t,`0`),r}function Zn(e){if(!(T(e)||e===null||e===``))return parseInt(e,10)}function Qn(e){if(!(T(e)||e===null||e===``))return parseFloat(e)}function $n(e){if(!(T(e)||e===null||e===``)){let t=parseFloat(`0.`+e)*1e3;return Math.floor(t)}}function er(e,t,n=`round`){let r=10**t;switch(n){case`expand`:return e>0?Math.ceil(e*r)/r:Math.floor(e*r)/r;case`trunc`:return Math.trunc(e*r)/r;case`round`:return Math.round(e*r)/r;case`floor`:return Math.floor(e*r)/r;case`ceil`:return Math.ceil(e*r)/r;default:throw RangeError(`Value rounding ${n} is out of range`)}}function tr(e){return e%4==0&&(e%100!=0||e%400==0)}function nr(e){return tr(e)?366:365}function rr(e,t){let n=Yn(t-1,12)+1,r=e+(t-n)/12;return n===2?tr(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function ir(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function ar(e,t,n){return-Dn(wn(e,1,t),n)+t-1}function or(e,t=4,n=1){let r=ar(e,t,n),i=ar(e+1,t,n);return(nr(e)-r+i)/7}function sr(e){return e>99?e:e>yn.twoDigitCutoffYear?1900+e:2e3+e}function cr(e,t,n,r=null){let i=new Date(e),a={hourCycle:`h23`,year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`};r&&(a.timeZone=r);let o={timeZoneName:t,...a},s=new Intl.DateTimeFormat(n,o).formatToParts(i).find(e=>e.type.toLowerCase()===`timezonename`);return s?s.value:null}function lr(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);let r=parseInt(t,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}function ur(e){let t=Number(e);if(typeof e==`boolean`||e===``||!Number.isFinite(t))throw new Ke(`Invalid unit value ${e}`);return t}function dr(e,t){let n={};for(let r in e)if(Kn(e,r)){let i=e[r];if(i==null)continue;n[t(r)]=ur(i)}return n}function fr(e,t){let n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?`+`:`-`;switch(t){case`short`:return`${i}${Xn(n,2)}:${Xn(r,2)}`;case`narrow`:return`${i}${n}${r>0?`:${r}`:``}`;case`techie`:return`${i}${Xn(n,2)}${Xn(r,2)}`;default:throw RangeError(`Value format ${t} is out of range for property format`)}}function pr(e){return Gn(e,[`hour`,`minute`,`second`,`millisecond`])}var mr=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],hr=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],gr=[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`];function _r(e){switch(e){case`narrow`:return[...gr];case`short`:return[...hr];case`long`:return[...mr];case`numeric`:return[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`];case`2-digit`:return[`01`,`02`,`03`,`04`,`05`,`06`,`07`,`08`,`09`,`10`,`11`,`12`];default:return null}}var vr=[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`],yr=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],br=[`M`,`T`,`W`,`T`,`F`,`S`,`S`];function xr(e){switch(e){case`narrow`:return[...br];case`short`:return[...yr];case`long`:return[...vr];case`numeric`:return[`1`,`2`,`3`,`4`,`5`,`6`,`7`];default:return null}}var Sr=[`AM`,`PM`],Cr=[`Before Christ`,`Anno Domini`],wr=[`BC`,`AD`],Tr=[`B`,`A`];function Er(e){switch(e){case`narrow`:return[...Tr];case`short`:return[...wr];case`long`:return[...Cr];default:return null}}function Dr(e){return Sr[e.hour<12?0:1]}function Or(e,t){return xr(t)[e.weekday-1]}function kr(e,t){return _r(t)[e.month-1]}function Ar(e,t){return Er(t)[e.year<0?0:1]}function jr(e,t,n=`always`,r=!1){let i={years:[`year`,`yr.`],quarters:[`quarter`,`qtr.`],months:[`month`,`mo.`],weeks:[`week`,`wk.`],days:[`day`,`day`,`days`],hours:[`hour`,`hr.`],minutes:[`minute`,`min.`],seconds:[`second`,`sec.`]},a=[`hours`,`minutes`,`seconds`].indexOf(e)===-1;if(n===`auto`&&a){let n=e===`days`;switch(t){case 1:return n?`tomorrow`:`next ${i[e][0]}`;case-1:return n?`yesterday`:`last ${i[e][0]}`;case 0:return n?`today`:`this ${i[e][0]}`}}let o=Object.is(t,-0)||t<0,s=Math.abs(t),c=s===1,l=i[e],u=r?c?l[1]:l[2]||l[1]:c?i[e][0]:e;return o?`${s} ${u} ago`:`in ${s} ${u}`}function Mr(e,t){let n=``;for(let r of e)r.literal?n+=r.val:n+=t(r.val);return n}var Nr={D:Xe,DD:Ze,DDD:$e,DDDD:et,t:tt,tt:nt,ttt:rt,tttt:it,T:at,TT:ot,TTT:st,TTTT:ct,f:lt,ff:dt,fff:mt,ffff:gt,F:ut,FF:ft,FFF:ht,FFFF:_t},Pr=class e{static create(t,n={}){return new e(t,n)}static parseFormat(e){let t=null,n=``,r=!1,i=[];for(let a=0;a<e.length;a++){let o=e.charAt(a);o===`'`?((n.length>0||r)&&i.push({literal:r||/^\s+$/.test(n),val:n===``?`'`:n}),t=null,n=``,r=!r):r||o===t?n+=o:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=o,t=o)}return n.length>0&&i.push({literal:r||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(e){return Nr[e]}constructor(e,t){this.opts=t,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,t){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...t}).format()}dtFormatter(e,t={}){return this.loc.dtFormatter(e,{...this.opts,...t})}formatDateTime(e,t){return this.dtFormatter(e,t).format()}formatDateTimeParts(e,t){return this.dtFormatter(e,t).formatToParts()}formatInterval(e,t){return this.dtFormatter(e.start,t).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,t){return this.dtFormatter(e,t).resolvedOptions()}num(e,t=0,n=void 0){if(this.opts.forceSimple)return Xn(e,t);let r={...this.opts};return t>0&&(r.padTo=t),n&&(r.signDisplay=n),this.loc.numberFormatter(r).format(e)}formatDateTimeFromString(t,n){let r=this.loc.listingMode()===`en`,i=this.loc.outputCalendar&&this.loc.outputCalendar!==`gregory`,a=(e,n)=>this.loc.extract(t,e,n),o=e=>t.isOffsetFixed&&t.offset===0&&e.allowZ?`Z`:t.isValid?t.zone.formatOffset(t.ts,e.format):``,s=()=>r?Dr(t):a({hour:`numeric`,hourCycle:`h12`},`dayperiod`),c=(e,n)=>r?kr(t,e):a(n?{month:e}:{month:e,day:`numeric`},`month`),l=(e,n)=>r?Or(t,e):a(n?{weekday:e}:{weekday:e,month:`long`,day:`numeric`},`weekday`),u=n=>{let r=e.macroTokenToFormatOpts(n);return r?this.formatWithSystemDefault(t,r):n},d=e=>r?Ar(t,e):a({era:e},`era`);return Mr(e.parseFormat(n),e=>{switch(e){case`S`:return this.num(t.millisecond);case`u`:case`SSS`:return this.num(t.millisecond,3);case`s`:return this.num(t.second);case`ss`:return this.num(t.second,2);case`uu`:return this.num(Math.floor(t.millisecond/10),2);case`uuu`:return this.num(Math.floor(t.millisecond/100));case`m`:return this.num(t.minute);case`mm`:return this.num(t.minute,2);case`h`:return this.num(t.hour%12==0?12:t.hour%12);case`hh`:return this.num(t.hour%12==0?12:t.hour%12,2);case`H`:return this.num(t.hour);case`HH`:return this.num(t.hour,2);case`Z`:return o({format:`narrow`,allowZ:this.opts.allowZ});case`ZZ`:return o({format:`short`,allowZ:this.opts.allowZ});case`ZZZ`:return o({format:`techie`,allowZ:this.opts.allowZ});case`ZZZZ`:return t.zone.offsetName(t.ts,{format:`short`,locale:this.loc.locale});case`ZZZZZ`:return t.zone.offsetName(t.ts,{format:`long`,locale:this.loc.locale});case`z`:return t.zoneName;case`a`:return s();case`d`:return i?a({day:`numeric`},`day`):this.num(t.day);case`dd`:return i?a({day:`2-digit`},`day`):this.num(t.day,2);case`c`:return this.num(t.weekday);case`ccc`:return l(`short`,!0);case`cccc`:return l(`long`,!0);case`ccccc`:return l(`narrow`,!0);case`E`:return this.num(t.weekday);case`EEE`:return l(`short`,!1);case`EEEE`:return l(`long`,!1);case`EEEEE`:return l(`narrow`,!1);case`L`:return i?a({month:`numeric`,day:`numeric`},`month`):this.num(t.month);case`LL`:return i?a({month:`2-digit`,day:`numeric`},`month`):this.num(t.month,2);case`LLL`:return c(`short`,!0);case`LLLL`:return c(`long`,!0);case`LLLLL`:return c(`narrow`,!0);case`M`:return i?a({month:`numeric`},`month`):this.num(t.month);case`MM`:return i?a({month:`2-digit`},`month`):this.num(t.month,2);case`MMM`:return c(`short`,!1);case`MMMM`:return c(`long`,!1);case`MMMMM`:return c(`narrow`,!1);case`y`:return i?a({year:`numeric`},`year`):this.num(t.year);case`yy`:return i?a({year:`2-digit`},`year`):this.num(t.year.toString().slice(-2),2);case`yyyy`:return i?a({year:`numeric`},`year`):this.num(t.year,4);case`yyyyyy`:return i?a({year:`numeric`},`year`):this.num(t.year,6);case`G`:return d(`short`);case`GG`:return d(`long`);case`GGGGG`:return d(`narrow`);case`kk`:return this.num(t.weekYear.toString().slice(-2),2);case`kkkk`:return this.num(t.weekYear,4);case`W`:return this.num(t.weekNumber);case`WW`:return this.num(t.weekNumber,2);case`n`:return this.num(t.localWeekNumber);case`nn`:return this.num(t.localWeekNumber,2);case`ii`:return this.num(t.localWeekYear.toString().slice(-2),2);case`iiii`:return this.num(t.localWeekYear,4);case`o`:return this.num(t.ordinal);case`ooo`:return this.num(t.ordinal,3);case`q`:return this.num(t.quarter);case`qq`:return this.num(t.quarter,2);case`X`:return this.num(Math.floor(t.ts/1e3));case`x`:return this.num(t.ts);default:return u(e)}})}formatDurationFromString(t,n){let r=this.opts.signMode===`negativeLargestOnly`?-1:1,i=e=>{switch(e[0]){case`S`:return`milliseconds`;case`s`:return`seconds`;case`m`:return`minutes`;case`h`:return`hours`;case`d`:return`days`;case`w`:return`weeks`;case`M`:return`months`;case`y`:return`years`;default:return null}},a=(e,t)=>n=>{let a=i(n);if(a){let i=t.isNegativeDuration&&a!==t.largestUnit?r:1,o;return o=this.opts.signMode===`negativeLargestOnly`&&a!==t.largestUnit?`never`:this.opts.signMode===`all`?`always`:`auto`,this.num(e.get(a)*i,n.length,o)}else return n},o=e.parseFormat(n),s=o.reduce((e,{literal:t,val:n})=>t?e:e.concat(n),[]),c=t.shiftTo(...s.map(i).filter(e=>e));return Mr(o,a(c,{isNegativeDuration:c<0,largestUnit:Object.keys(c.values)[0]}))}},Fr=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Ir(...e){let t=e.reduce((e,t)=>e+t.source,``);return RegExp(`^${t}$`)}function Lr(...e){return t=>e.reduce(([e,n,r],i)=>{let[a,o,s]=i(t,r);return[{...e,...a},o||n,s]},[{},null,1]).slice(0,2)}function Rr(e,...t){if(e==null)return[null,null];for(let[n,r]of t){let t=n.exec(e);if(t)return r(t)}return[null,null]}function zr(...e){return(t,n)=>{let r={},i;for(i=0;i<e.length;i++)r[e[i]]=Zn(t[n+i]);return[r,null,n+i]}}var Br=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,Vr=`(?:${Br.source}?(?:\\[(${Fr.source})\\])?)?`,Hr=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Ur=RegExp(`${Hr.source}${Vr}`),Wr=RegExp(`(?:[Tt]${Ur.source})?`),Gr=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Kr=/(\d{4})-?W(\d\d)(?:-?(\d))?/,qr=/(\d{4})-?(\d{3})/,Jr=zr(`weekYear`,`weekNumber`,`weekDay`),Yr=zr(`year`,`ordinal`),Xr=/(\d{4})-(\d\d)-(\d\d)/,Zr=RegExp(`${Hr.source} ?(?:${Br.source}|(${Fr.source}))?`),Qr=RegExp(`(?: ${Zr.source})?`);function $r(e,t,n){let r=e[t];return T(r)?n:Zn(r)}function ei(e,t){return[{year:$r(e,t),month:$r(e,t+1,1),day:$r(e,t+2,1)},null,t+3]}function ti(e,t){return[{hours:$r(e,t,0),minutes:$r(e,t+1,0),seconds:$r(e,t+2,0),milliseconds:$n(e[t+3])},null,t+4]}function ni(e,t){let n=!e[t]&&!e[t+1],r=lr(e[t+1],e[t+2]);return[{},n?null:en.instance(r),t+3]}function ri(e,t){return[{},e[t]?Dt.create(e[t]):null,t+1]}var ii=RegExp(`^T?${Hr.source}$`),ai=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function oi(e){let[t,n,r,i,a,o,s,c,l]=e,u=t[0]===`-`,d=c&&c[0]===`-`,f=(e,t=!1)=>e!==void 0&&(t||e&&u)?-e:e;return[{years:f(Qn(n)),months:f(Qn(r)),weeks:f(Qn(i)),days:f(Qn(a)),hours:f(Qn(o)),minutes:f(Qn(s)),seconds:f(Qn(c),c===`-0`),milliseconds:f($n(l),d)}]}var si={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function ci(e,t,n,r,i,a,o){let s={year:t.length===2?sr(Zn(t)):Zn(t),month:hr.indexOf(n)+1,day:Zn(r),hour:Zn(i),minute:Zn(a)};return o&&(s.second=Zn(o)),e&&(s.weekday=e.length>3?vr.indexOf(e)+1:yr.indexOf(e)+1),s}var li=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function ui(e){let[,t,n,r,i,a,o,s,c,l,u,d]=e,f=ci(t,i,r,n,a,o,s),p;return p=c?si[c]:l?0:lr(u,d),[f,new en(p)]}function di(e){return e.replace(/\([^()]*\)|[\n\t]/g,` `).replace(/(\s\s+)/g,` `).trim()}var fi=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,pi=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,mi=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function hi(e){let[,t,n,r,i,a,o,s]=e;return[ci(t,i,r,n,a,o,s),en.utcInstance]}function gi(e){let[,t,n,r,i,a,o,s]=e;return[ci(t,s,n,r,i,a,o),en.utcInstance]}var _i=Ir(Gr,Wr),vi=Ir(Kr,Wr),yi=Ir(qr,Wr),bi=Ir(Ur),xi=Lr(ei,ti,ni,ri),Si=Lr(Jr,ti,ni,ri),Ci=Lr(Yr,ti,ni,ri),wi=Lr(ti,ni,ri);function Ti(e){return Rr(e,[_i,xi],[vi,Si],[yi,Ci],[bi,wi])}function Ei(e){return Rr(di(e),[li,ui])}function Di(e){return Rr(e,[fi,hi],[pi,hi],[mi,gi])}function Oi(e){return Rr(e,[ai,oi])}var ki=Lr(ti);function Ai(e){return Rr(e,[ii,ki])}var ji=Ir(Xr,Qr),Mi=Ir(Zr),Ni=Lr(ti,ni,ri);function Pi(e){return Rr(e,[ji,xi],[Mi,Ni])}var Fi=`Invalid Duration`,Ii={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Li={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...Ii},Ri=146097/400,zi=146097/4800,Bi={years:{quarters:4,months:12,weeks:Ri/7,days:Ri,hours:Ri*24,minutes:Ri*24*60,seconds:Ri*24*60*60,milliseconds:Ri*24*60*60*1e3},quarters:{months:3,weeks:Ri/28,days:Ri/4,hours:Ri*24/4,minutes:Ri*24*60/4,seconds:Ri*24*60*60/4,milliseconds:Ri*24*60*60*1e3/4},months:{weeks:zi/7,days:zi,hours:zi*24,minutes:zi*24*60,seconds:zi*24*60*60,milliseconds:zi*24*60*60*1e3},...Ii},Vi=[`years`,`quarters`,`months`,`weeks`,`days`,`hours`,`minutes`,`seconds`,`milliseconds`],Hi=Vi.slice(0).reverse();function Ui(e,t,n=!1){return new qi({values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix})}function Wi(e,t){let n=t.milliseconds??0;for(let r of Hi.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function Gi(e,t){let n=Wi(e,t)<0?-1:1;Vi.reduceRight((r,i)=>{if(T(t[i]))return r;if(r){let a=t[r]*n,o=e[i][r],s=Math.floor(a/o);t[i]+=s*n,t[r]-=s*o*n}return i},null),Vi.reduce((n,r)=>{if(T(t[r]))return n;if(n){let i=t[n]%1;t[n]-=i,t[r]+=i*e[n][r]}return r},null)}function Ki(e){let t={};for(let[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}var qi=class e{constructor(e){let t=e.conversionAccuracy===`longterm`||!1,n=t?Bi:Li;e.matrix&&(n=e.matrix),this.values=e.values,this.loc=e.loc||Qt.create(),this.conversionAccuracy=t?`longterm`:`casual`,this.invalid=e.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,n){return e.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(typeof t!=`object`||!t)throw new Ke(`Duration.fromObject: argument expected to be an object, got ${t===null?`null`:typeof t}`);return new e({values:dr(t,e.normalizeUnit),loc:Qt.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(Ln(t))return e.fromMillis(t);if(e.isDuration(t))return t;if(typeof t==`object`)return e.fromObject(t);throw new Ke(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){let[r]=Oi(t);return r?e.fromObject(r,n):e.invalid(`unparsable`,`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){let[r]=Ai(t);return r?e.fromObject(r,n):e.invalid(`unparsable`,`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new Ke(`need to specify a reason the Duration is invalid`);let r=t instanceof bn?t:new bn(t,n);if(yn.throwOnInvalid)throw new Ue(r);return new e({invalid:r})}static normalizeUnit(e){let t={year:`years`,years:`years`,quarter:`quarters`,quarters:`quarters`,month:`months`,months:`months`,week:`weeks`,weeks:`weeks`,day:`days`,days:`days`,hour:`hours`,hours:`hours`,minute:`minutes`,minutes:`minutes`,second:`seconds`,seconds:`seconds`,millisecond:`milliseconds`,milliseconds:`milliseconds`}[e&&e.toLowerCase()];if(!t)throw new Ge(e);return t}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,t={}){let n={...t,floor:t.round!==!1&&t.floor!==!1};return this.isValid?Pr.create(this.loc,n).formatDurationFromString(this,e):Fi}toHuman(e={}){if(!this.isValid)return Fi;let t=e.showZeros!==!1,n=Vi.map(n=>{let r=this.values[n];return T(r)||r===0&&!t?null:this.loc.numberFormatter({style:`unit`,unitDisplay:`long`,...e,unit:n.slice(0,-1)}).format(r)}).filter(e=>e);return this.loc.listFormatter({type:`conjunction`,style:e.listStyle||`narrow`,...e}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e=`P`;return this.years!==0&&(e+=this.years+`Y`),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+`M`),this.weeks!==0&&(e+=this.weeks+`W`),this.days!==0&&(e+=this.days+`D`),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+=`T`),this.hours!==0&&(e+=this.hours+`H`),this.minutes!==0&&(e+=this.minutes+`M`),(this.seconds!==0||this.milliseconds!==0)&&(e+=er(this.seconds+this.milliseconds/1e3,3)+`S`),e===`P`&&(e+=`T0S`),e}toISOTime(e={}){if(!this.isValid)return null;let t=this.toMillis();return t<0||t>=864e5?null:(e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:`extended`,...e,includeOffset:!1},$a.fromMillis(t,{zone:`UTC`}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for(`nodejs.util.inspect.custom`)](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Wi(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;let n=e.fromDurationLike(t),r={};for(let e of Vi)(Kn(n.values,e)||Kn(this.values,e))&&(r[e]=n.get(e)+this.get(e));return Ui(this,{values:r},!0)}minus(t){if(!this.isValid)return this;let n=e.fromDurationLike(t);return this.plus(n.negate())}mapUnits(e){if(!this.isValid)return this;let t={};for(let n of Object.keys(this.values))t[n]=ur(e(this.values[n],n));return Ui(this,{values:t},!0)}get(t){return this[e.normalizeUnit(t)]}set(t){if(!this.isValid)return this;let n={...this.values,...dr(t,e.normalizeUnit)};return Ui(this,{values:n})}reconfigure({locale:e,numberingSystem:t,conversionAccuracy:n,matrix:r}={}){let i={loc:this.loc.clone({locale:e,numberingSystem:t}),matrix:r,conversionAccuracy:n};return Ui(this,i)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;let e=this.toObject();return Gi(this.matrix,e),Ui(this,{values:e},!0)}rescale(){if(!this.isValid)return this;let e=Ki(this.normalize().shiftToAll().toObject());return Ui(this,{values:e},!0)}shiftTo(...t){if(!this.isValid||t.length===0)return this;t=t.map(t=>e.normalizeUnit(t));let n={},r={},i=this.toObject(),a;for(let e of Vi)if(t.indexOf(e)>=0){a=e;let t=0;for(let n in r)t+=this.matrix[n][e]*r[n],r[n]=0;Ln(i[e])&&(t+=i[e]);let o=Math.trunc(t);n[e]=o,r[e]=(t*1e3-o*1e3)/1e3}else Ln(i[e])&&(r[e]=i[e]);for(let e in r)r[e]!==0&&(n[a]+=e===a?r[e]:r[e]/this.matrix[a][e]);return Gi(this.matrix,n),Ui(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo(`years`,`months`,`weeks`,`days`,`hours`,`minutes`,`seconds`,`milliseconds`):this}negate(){if(!this.isValid)return this;let e={};for(let t of Object.keys(this.values))e[t]=this.values[t]===0?0:-this.values[t];return Ui(this,{values:e},!0)}removeZeros(){if(!this.isValid)return this;let e=Ki(this.values);return Ui(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function t(e,t){return e===void 0||e===0?t===void 0||t===0:e===t}for(let n of Vi)if(!t(this.values[n],e.values[n]))return!1;return!0}},Ji=`Invalid Interval`;function Yi(e,t){return!e||!e.isValid?Xi.invalid(`missing or invalid start`):!t||!t.isValid?Xi.invalid(`missing or invalid end`):t<e?Xi.invalid(`end before start`,`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}var Xi=class e{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new Ke(`need to specify a reason the Interval is invalid`);let r=t instanceof bn?t:new bn(t,n);if(yn.throwOnInvalid)throw new He(r);return new e({invalid:r})}static fromDateTimes(t,n){let r=eo(t),i=eo(n);return Yi(r,i)??new e({start:r,end:i})}static after(t,n){let r=qi.fromDurationLike(n),i=eo(t);return e.fromDateTimes(i,i.plus(r))}static before(t,n){let r=qi.fromDurationLike(n),i=eo(t);return e.fromDateTimes(i.minus(r),i)}static fromISO(t,n){let[r,i]=(t||``).split(`/`,2);if(r&&i){let t,a;try{t=$a.fromISO(r,n),a=t.isValid}catch{a=!1}let o,s;try{o=$a.fromISO(i,n),s=o.isValid}catch{s=!1}if(a&&s)return e.fromDateTimes(t,o);if(a){let r=qi.fromISO(i,n);if(r.isValid)return e.after(t,r)}else if(s){let t=qi.fromISO(r,n);if(t.isValid)return e.before(o,t)}}return e.invalid(`unparsable`,`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e=`milliseconds`){return this.isValid?this.toDuration(e).get(e):NaN}count(e=`milliseconds`,t){if(!this.isValid)return NaN;let n=this.start.startOf(e,t),r;return r=t?.useLocaleWeeks?this.end.reconfigure({locale:n.locale}):this.end,r=r.startOf(e,t),Math.floor(r.diff(n,e).get(e))+(r.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:t,end:n}={}){return this.isValid?e.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];let n=t.map(eo).filter(e=>this.contains(e)).sort((e,t)=>e.toMillis()-t.toMillis()),r=[],{s:i}=this,a=0;for(;i<this.e;){let t=n[a]||this.e,o=+t>+this.e?this.e:t;r.push(e.fromDateTimes(i,o)),i=o,a+=1}return r}splitBy(t){let n=qi.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as(`milliseconds`)===0)return[];let{s:r}=this,i=1,a,o=[];for(;r<this.e;){let t=this.start.plus(n.mapUnits(e=>e*i));a=+t>+this.e?this.e:t,o.push(e.fromDateTimes(r,a)),r=a,i+=1}return o}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(t){if(!this.isValid)return this;let n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:e.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;let n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return e.fromDateTimes(n,r)}static merge(e){let[t,n]=e.sort((e,t)=>e.s-t.s).reduce(([e,t],n)=>t?t.overlaps(n)||t.abutsStart(n)?[e,t.union(n)]:[e.concat([t]),n]:[e,n],[[],null]);return n&&t.push(n),t}static xor(t){let n=null,r=0,i=[],a=t.map(e=>[{time:e.s,type:`s`},{time:e.e,type:`e`}]),o=Array.prototype.concat(...a).sort((e,t)=>e.time-t.time);for(let t of o)r+=t.type===`s`?1:-1,r===1?n=t.time:(n&&+n!=+t.time&&i.push(e.fromDateTimes(n,t.time)),n=null);return e.merge(i)}difference(...t){return e.xor([this].concat(t)).map(e=>this.intersection(e)).filter(e=>e&&!e.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Ji}[Symbol.for(`nodejs.util.inspect.custom`)](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(e=Xe,t={}){return this.isValid?Pr.create(this.s.loc.clone(t),e).formatInterval(this):Ji}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:Ji}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Ji}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:Ji}toFormat(e,{separator:t=` – `}={}){return this.isValid?`${this.s.toFormat(e)}${t}${this.e.toFormat(e)}`:Ji}toDuration(e,t){return this.isValid?this.e.diff(this.s,e,t):qi.invalid(this.invalidReason)}mapEndpoints(t){return e.fromDateTimes(t(this.s),t(this.e))}},Zi=class{static hasDST(e=yn.defaultZone){let t=$a.now().setZone(e).set({month:12});return!e.isUniversal&&t.offset!==t.set({month:6}).offset}static isValidIANAZone(e){return Dt.isValidZone(e)}static normalizeZone(e){return nn(e,yn.defaultZone)}static getStartOfWeek({locale:e=null,locObj:t=null}={}){return(t||Qt.create(e)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:e=null,locObj:t=null}={}){return(t||Qt.create(e)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:e=null,locObj:t=null}={}){return(t||Qt.create(e)).getWeekendDays().slice()}static months(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null,outputCalendar:i=`gregory`}={}){return(r||Qt.create(t,n,i)).months(e)}static monthsFormat(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null,outputCalendar:i=`gregory`}={}){return(r||Qt.create(t,n,i)).months(e,!0)}static weekdays(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null}={}){return(r||Qt.create(t,n,null)).weekdays(e)}static weekdaysFormat(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null}={}){return(r||Qt.create(t,n,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return Qt.create(e).meridiems()}static eras(e=`short`,{locale:t=null}={}){return Qt.create(t,null,`gregory`).eras(e)}static features(){return{relative:Vn(),localeWeek:Hn()}}};function Qi(e,t){let n=e=>e.toUTC(0,{keepLocalTime:!0}).startOf(`day`).valueOf(),r=n(t)-n(e);return Math.floor(qi.fromMillis(r).as(`days`))}function $i(e,t,n){let r=[[`years`,(e,t)=>t.year-e.year],[`quarters`,(e,t)=>t.quarter-e.quarter+(t.year-e.year)*4],[`months`,(e,t)=>t.month-e.month+(t.year-e.year)*12],[`weeks`,(e,t)=>{let n=Qi(e,t);return(n-n%7)/7}],[`days`,Qi]],i={},a=e,o,s;for(let[c,l]of r)n.indexOf(c)>=0&&(o=c,i[c]=l(e,t),s=a.plus(i),s>t?(i[c]--,e=a.plus(i),e>t&&(s=e,i[c]--,e=a.plus(i))):e=s);return[e,i,s,o]}function ea(e,t,n,r){let[i,a,o,s]=$i(e,t,n),c=t-i,l=n.filter(e=>[`hours`,`minutes`,`seconds`,`milliseconds`].indexOf(e)>=0);l.length===0&&(o<t&&(o=i.plus({[s]:1})),o!==i&&(a[s]=(a[s]||0)+c/(o-i)));let u=qi.fromObject(a,r);return l.length>0?qi.fromMillis(c,r).shiftTo(...l).plus(u):u}var ta=`missing Intl.DateTimeFormat.formatToParts support`;function na(e,t=e=>e){return{regex:e,deser:([e])=>t(sn(e))}}var ra=`[ \xA0]`,ia=new RegExp(ra,`g`);function aa(e){return e.replace(/\./g,`\\.?`).replace(ia,ra)}function oa(e){return e.replace(/\./g,``).replace(ia,` `).toLowerCase()}function sa(e,t){return e===null?null:{regex:RegExp(e.map(aa).join(`|`)),deser:([n])=>e.findIndex(e=>oa(n)===oa(e))+t}}function ca(e,t){return{regex:e,deser:([,e,t])=>lr(e,t),groups:t}}function la(e){return{regex:e,deser:([e])=>e}}function ua(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,`\\$&`)}function da(e,t){let n=un(t),r=un(t,`{2}`),i=un(t,`{3}`),a=un(t,`{4}`),o=un(t,`{6}`),s=un(t,`{1,2}`),c=un(t,`{1,3}`),l=un(t,`{1,6}`),u=un(t,`{1,9}`),d=un(t,`{2,4}`),f=un(t,`{4,6}`),p=e=>({regex:RegExp(ua(e.val)),deser:([e])=>e,literal:!0}),m=(m=>{if(e.literal)return p(m);switch(m.val){case`G`:return sa(t.eras(`short`),0);case`GG`:return sa(t.eras(`long`),0);case`y`:return na(l);case`yy`:return na(d,sr);case`yyyy`:return na(a);case`yyyyy`:return na(f);case`yyyyyy`:return na(o);case`M`:return na(s);case`MM`:return na(r);case`MMM`:return sa(t.months(`short`,!0),1);case`MMMM`:return sa(t.months(`long`,!0),1);case`L`:return na(s);case`LL`:return na(r);case`LLL`:return sa(t.months(`short`,!1),1);case`LLLL`:return sa(t.months(`long`,!1),1);case`d`:return na(s);case`dd`:return na(r);case`o`:return na(c);case`ooo`:return na(i);case`HH`:return na(r);case`H`:return na(s);case`hh`:return na(r);case`h`:return na(s);case`mm`:return na(r);case`m`:return na(s);case`q`:return na(s);case`qq`:return na(r);case`s`:return na(s);case`ss`:return na(r);case`S`:return na(c);case`SSS`:return na(i);case`u`:return la(u);case`uu`:return la(s);case`uuu`:return na(n);case`a`:return sa(t.meridiems(),0);case`kkkk`:return na(a);case`kk`:return na(d,sr);case`W`:return na(s);case`WW`:return na(r);case`E`:case`c`:return na(n);case`EEE`:return sa(t.weekdays(`short`,!1),1);case`EEEE`:return sa(t.weekdays(`long`,!1),1);case`ccc`:return sa(t.weekdays(`short`,!0),1);case`cccc`:return sa(t.weekdays(`long`,!0),1);case`Z`:case`ZZ`:return ca(RegExp(`([+-]${s.source})(?::(${r.source}))?`),2);case`ZZZ`:return ca(RegExp(`([+-]${s.source})(${r.source})?`),2);case`z`:return la(/[a-z_+-/]{1,256}?/i);case` `:return la(/[^\S\n\r]/);default:return p(m)}})(e)||{invalidReason:ta};return m.token=e,m}var fa={year:{"2-digit":`yy`,numeric:`yyyyy`},month:{numeric:`M`,"2-digit":`MM`,short:`MMM`,long:`MMMM`},day:{numeric:`d`,"2-digit":`dd`},weekday:{short:`EEE`,long:`EEEE`},dayperiod:`a`,dayPeriod:`a`,hour12:{numeric:`h`,"2-digit":`hh`},hour24:{numeric:`H`,"2-digit":`HH`},minute:{numeric:`m`,"2-digit":`mm`},second:{numeric:`s`,"2-digit":`ss`},timeZoneName:{long:`ZZZZZ`,short:`ZZZ`}};function pa(e,t,n){let{type:r,value:i}=e;if(r===`literal`){let e=/^\s+$/.test(i);return{literal:!e,val:e?` `:i}}let a=t[r],o=r;r===`hour`&&(o=t.hour12==null?t.hourCycle==null?n.hour12?`hour12`:`hour24`:t.hourCycle===`h11`||t.hourCycle===`h12`?`hour12`:`hour24`:t.hour12?`hour12`:`hour24`);let s=fa[o];if(typeof s==`object`&&(s=s[a]),s)return{literal:!1,val:s}}function ma(e){return[`^${e.map(e=>e.regex).reduce((e,t)=>`${e}(${t.source})`,``)}$`,e]}function ha(e,t,n){let r=e.match(t);if(r){let e={},t=1;for(let i in n)if(Kn(n,i)){let a=n[i],o=a.groups?a.groups+1:1;!a.literal&&a.token&&(e[a.token.val[0]]=a.deser(r.slice(t,t+o))),t+=o}return[r,e]}else return[r,{}]}function ga(e){let t=e=>{switch(e){case`S`:return`millisecond`;case`s`:return`second`;case`m`:return`minute`;case`h`:case`H`:return`hour`;case`d`:return`day`;case`o`:return`ordinal`;case`L`:case`M`:return`month`;case`y`:return`year`;case`E`:case`c`:return`weekday`;case`W`:return`weekNumber`;case`k`:return`weekYear`;case`q`:return`quarter`;default:return null}},n=null,r;return T(e.z)||(n=Dt.create(e.z)),T(e.Z)||(n||=new en(e.Z),r=e.Z),T(e.q)||(e.M=(e.q-1)*3+1),T(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),T(e.u)||(e.S=$n(e.u)),[Object.keys(e).reduce((n,r)=>{let i=t(r);return i&&(n[i]=e[r]),n},{}),n,r]}var _a=null;function va(){return _a||=$a.fromMillis(1555555555555),_a}function ya(e,t){if(e.literal)return e;let n=wa(Pr.macroTokenToFormatOpts(e.val),t);return n==null||n.includes(void 0)?e:n}function ba(e,t){return Array.prototype.concat(...e.map(e=>ya(e,t)))}var xa=class{constructor(e,t){if(this.locale=e,this.format=t,this.tokens=ba(Pr.parseFormat(t),e),this.units=this.tokens.map(t=>da(t,e)),this.disqualifyingUnit=this.units.find(e=>e.invalidReason),!this.disqualifyingUnit){let[e,t]=ma(this.units);this.regex=RegExp(e,`i`),this.handlers=t}}explainFromTokens(e){if(this.isValid){let[t,n]=ha(e,this.regex,this.handlers),[r,i,a]=n?ga(n):[null,null,void 0];if(Kn(n,`a`)&&Kn(n,`H`))throw new We(`Can't include meridiem when specifying 24-hour format`);return{input:e,tokens:this.tokens,regex:this.regex,rawMatches:t,matches:n,result:r,zone:i,specificOffset:a}}else return{input:e,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}};function Sa(e,t,n){return new xa(e,n).explainFromTokens(t)}function Ca(e,t,n){let{result:r,zone:i,specificOffset:a,invalidReason:o}=Sa(e,t,n);return[r,i,a,o]}function wa(e,t){if(!e)return null;let n=Pr.create(t,e).dtFormatter(va()),r=n.formatToParts(),i=n.resolvedOptions();return r.map(t=>pa(t,e,i))}var Ta=`Invalid DateTime`,Ea=864e13;function Da(e){return new bn(`unsupported zone`,`the zone "${e.name}" is not supported`)}function Oa(e){return e.weekData===null&&(e.weekData=On(e.c)),e.weekData}function ka(e){return e.localWeekData===null&&(e.localWeekData=On(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Aa(e,t){let n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new $a({...n,...t,old:n})}function ja(e,t,n){let r=e-t*60*1e3,i=n.offset(r);if(t===i)return[r,t];r-=(i-t)*60*1e3;let a=n.offset(r);return i===a?[r,i]:[e-Math.min(i,a)*60*1e3,Math.max(i,a)]}function Ma(e,t){e+=t*60*1e3;let n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Na(e,t,n){return ja(ir(e),t,n)}function Pa(e,t){let n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,a={...e.c,year:r,month:i,day:Math.min(e.c.day,rr(r,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},o=qi.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as(`milliseconds`),[s,c]=ja(ir(a),n,e.zone);return o!==0&&(s+=o,c=e.zone.offset(s)),{ts:s,o:c}}function Fa(e,t,n,r,i,a){let{setZone:o,zone:s}=n;if(e&&Object.keys(e).length!==0||t){let r=t||s,i=$a.fromObject(e,{...n,zone:r,specificOffset:a});return o?i:i.setZone(s)}else return $a.invalid(new bn(`unparsable`,`the input "${i}" can't be parsed as ${r}`))}function Ia(e,t,n=!0){return e.isValid?Pr.create(Qt.create(`en-US`),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function La(e,t,n){let r=e.c.year>9999||e.c.year<0,i=``;if(r&&e.c.year>=0&&(i+=`+`),i+=Xn(e.c.year,r?6:4),n===`year`)return i;if(t){if(i+=`-`,i+=Xn(e.c.month),n===`month`)return i;i+=`-`}else if(i+=Xn(e.c.month),n===`month`)return i;return i+=Xn(e.c.day),i}function Ra(e,t,n,r,i,a,o){let s=!n||e.c.millisecond!==0||e.c.second!==0,c=``;switch(o){case`day`:case`month`:case`year`:break;default:if(c+=Xn(e.c.hour),o===`hour`)break;if(t){if(c+=`:`,c+=Xn(e.c.minute),o===`minute`)break;s&&(c+=`:`,c+=Xn(e.c.second))}else{if(c+=Xn(e.c.minute),o===`minute`)break;s&&(c+=Xn(e.c.second))}if(o===`second`)break;s&&(!r||e.c.millisecond!==0)&&(c+=`.`,c+=Xn(e.c.millisecond,3))}return i&&(e.isOffsetFixed&&e.offset===0&&!a?c+=`Z`:e.o<0?(c+=`-`,c+=Xn(Math.trunc(-e.o/60)),c+=`:`,c+=Xn(Math.trunc(-e.o%60))):(c+=`+`,c+=Xn(Math.trunc(e.o/60)),c+=`:`,c+=Xn(Math.trunc(e.o%60)))),a&&(c+=`[`+e.zone.ianaName+`]`),c}var za={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Ba={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Va={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Ha=[`year`,`month`,`day`,`hour`,`minute`,`second`,`millisecond`],Ua=[`weekYear`,`weekNumber`,`weekday`,`hour`,`minute`,`second`,`millisecond`],Wa=[`year`,`ordinal`,`hour`,`minute`,`second`,`millisecond`];function Ga(e){let t={year:`year`,years:`year`,month:`month`,months:`month`,day:`day`,days:`day`,hour:`hour`,hours:`hour`,minute:`minute`,minutes:`minute`,quarter:`quarter`,quarters:`quarter`,second:`second`,seconds:`second`,millisecond:`millisecond`,milliseconds:`millisecond`,weekday:`weekday`,weekdays:`weekday`,weeknumber:`weekNumber`,weeksnumber:`weekNumber`,weeknumbers:`weekNumber`,weekyear:`weekYear`,weekyears:`weekYear`,ordinal:`ordinal`}[e.toLowerCase()];if(!t)throw new Ge(e);return t}function Ka(e){switch(e.toLowerCase()){case`localweekday`:case`localweekdays`:return`localWeekday`;case`localweeknumber`:case`localweeknumbers`:return`localWeekNumber`;case`localweekyear`:case`localweekyears`:return`localWeekYear`;default:return Ga(e)}}function qa(e){if(Za===void 0&&(Za=yn.now()),e.type!==`iana`)return e.offset(Za);let t=e.name,n=Qa.get(t);return n===void 0&&(n=e.offset(Za),Qa.set(t,n)),n}function Ja(e,t){let n=nn(t.zone,yn.defaultZone);if(!n.isValid)return $a.invalid(Da(n));let r=Qt.fromObject(t),i,a;if(T(e.year))i=yn.now();else{for(let t of Ha)T(e[t])&&(e[t]=za[t]);let t=Fn(e)||In(e);if(t)return $a.invalid(t);let r=qa(n);[i,a]=Na(e,r,n)}return new $a({ts:i,zone:n,loc:r,o:a})}function Ya(e,t,n){let r=T(n.round)?!0:n.round,i=T(n.rounding)?`trunc`:n.rounding,a=(e,a)=>(e=er(e,r||n.calendary?0:2,n.calendary?`round`:i),t.loc.clone(n).relFormatter(n).format(e,a)),o=r=>n.calendary?t.hasSame(e,r)?0:t.startOf(r).diff(e.startOf(r),r).get(r):t.diff(e,r).get(r);if(n.unit)return a(o(n.unit),n.unit);for(let e of n.units){let t=o(e);if(Math.abs(t)>=1)return a(t,e)}return a(e>t?-0:0,n.units[n.units.length-1])}function Xa(e){let t={},n;return e.length>0&&typeof e[e.length-1]==`object`?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}var Za,Qa=new Map,$a=class e{constructor(e){let t=e.zone||yn.defaultZone,n=e.invalid||(Number.isNaN(e.ts)?new bn(`invalid input`):null)||(t.isValid?null:Da(t));this.ts=T(e.ts)?yn.now():e.ts;let r=null,i=null;if(!n)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(t))[r,i]=[e.old.c,e.old.o];else{let a=Ln(e.o)&&!e.old?e.o:t.offset(this.ts);r=Ma(this.ts,a),n=Number.isNaN(r.year)?new bn(`invalid input`):null,r=n?null:r,i=n?null:a}this._zone=t,this.loc=e.loc||Qt.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=r,this.o=i,this.isLuxonDateTime=!0}static now(){return new e({})}static local(){let[e,t]=Xa(arguments),[n,r,i,a,o,s,c]=t;return Ja({year:n,month:r,day:i,hour:a,minute:o,second:s,millisecond:c},e)}static utc(){let[e,t]=Xa(arguments),[n,r,i,a,o,s,c]=t;return e.zone=en.utcInstance,Ja({year:n,month:r,day:i,hour:a,minute:o,second:s,millisecond:c},e)}static fromJSDate(t,n={}){let r=Bn(t)?t.valueOf():NaN;if(Number.isNaN(r))return e.invalid(`invalid input`);let i=nn(n.zone,yn.defaultZone);return i.isValid?new e({ts:r,zone:i,loc:Qt.fromObject(n)}):e.invalid(Da(i))}static fromMillis(t,n={}){if(!Ln(t))throw new Ke(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`);return t<-Ea||t>Ea?e.invalid(`Timestamp out of range`):new e({ts:t,zone:nn(n.zone,yn.defaultZone),loc:Qt.fromObject(n)})}static fromSeconds(t,n={}){if(Ln(t))return new e({ts:t*1e3,zone:nn(n.zone,yn.defaultZone),loc:Qt.fromObject(n)});throw new Ke(`fromSeconds requires a numerical input`)}static fromObject(t,n={}){t||={};let r=nn(n.zone,yn.defaultZone);if(!r.isValid)return e.invalid(Da(r));let i=Qt.fromObject(n),a=dr(t,Ka),{minDaysInFirstWeek:o,startOfWeek:s}=Mn(a,i),c=yn.now(),l=T(n.specificOffset)?r.offset(c):n.specificOffset,u=!T(a.ordinal),d=!T(a.year),f=!T(a.month)||!T(a.day),p=d||f,m=a.weekYear||a.weekNumber;if((p||u)&&m)throw new We(`Can't mix weekYear/weekNumber units with year/month/day or ordinals`);if(f&&u)throw new We(`Can't mix ordinal dates with month/day`);let h=m||a.weekday&&!p,g,ee,_=Ma(c,l);h?(g=Ua,ee=Ba,_=On(_,o,s)):u?(g=Wa,ee=Va,_=An(_)):(g=Ha,ee=za);let te=!1;for(let e of g){let t=a[e];T(t)?te?a[e]=ee[e]:a[e]=_[e]:te=!0}let ne=(h?Nn(a,o,s):u?Pn(a):Fn(a))||In(a);if(ne)return e.invalid(ne);let[re,ie]=Na(h?kn(a,o,s):u?jn(a):a,l,r),ae=new e({ts:re,zone:r,o:ie,loc:i});return a.weekday&&p&&t.weekday!==ae.weekday?e.invalid(`mismatched weekday`,`you can't specify both a weekday of ${a.weekday} and a date of ${ae.toISO()}`):ae.isValid?ae:e.invalid(ae.invalid)}static fromISO(e,t={}){let[n,r]=Ti(e);return Fa(n,r,t,`ISO 8601`,e)}static fromRFC2822(e,t={}){let[n,r]=Ei(e);return Fa(n,r,t,`RFC 2822`,e)}static fromHTTP(e,t={}){let[n,r]=Di(e);return Fa(n,r,t,`HTTP`,t)}static fromFormat(t,n,r={}){if(T(t)||T(n))throw new Ke(`fromFormat requires an input string and a format`);let{locale:i=null,numberingSystem:a=null}=r,[o,s,c,l]=Ca(Qt.fromOpts({locale:i,numberingSystem:a,defaultToEN:!0}),t,n);return l?e.invalid(l):Fa(o,s,r,`format ${n}`,t,c)}static fromString(t,n,r={}){return e.fromFormat(t,n,r)}static fromSQL(e,t={}){let[n,r]=Pi(e);return Fa(n,r,t,`SQL`,e)}static invalid(t,n=null){if(!t)throw new Ke(`need to specify a reason the DateTime is invalid`);let r=t instanceof bn?t:new bn(t,n);if(yn.throwOnInvalid)throw new Ve(r);return new e({invalid:r})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,t={}){let n=wa(e,Qt.fromObject(t));return n?n.map(e=>e?e.val:null).join(``):null}static expandFormat(e,t={}){return ba(Pr.parseFormat(e),Qt.fromObject(t)).map(e=>e.val).join(``)}static resetCache(){Za=void 0,Qa.clear()}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Oa(this).weekYear:NaN}get weekNumber(){return this.isValid?Oa(this).weekNumber:NaN}get weekday(){return this.isValid?Oa(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?ka(this).weekday:NaN}get localWeekNumber(){return this.isValid?ka(this).weekNumber:NaN}get localWeekYear(){return this.isValid?ka(this).weekYear:NaN}get ordinal(){return this.isValid?An(this.c).ordinal:NaN}get monthShort(){return this.isValid?Zi.months(`short`,{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Zi.months(`long`,{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Zi.weekdays(`short`,{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Zi.weekdays(`long`,{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:`short`,locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:`long`,locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let e=864e5,t=6e4,n=ir(this.c),r=this.zone.offset(n-e),i=this.zone.offset(n+e),a=this.zone.offset(n-r*t),o=this.zone.offset(n-i*t);if(a===o)return[this];let s=n-a*t,c=n-o*t,l=Ma(s,a),u=Ma(c,o);return l.hour===u.hour&&l.minute===u.minute&&l.second===u.second&&l.millisecond===u.millisecond?[Aa(this,{ts:s}),Aa(this,{ts:c})]:[this]}get isInLeapYear(){return tr(this.year)}get daysInMonth(){return rr(this.year,this.month)}get daysInYear(){return this.isValid?nr(this.year):NaN}get weeksInWeekYear(){return this.isValid?or(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?or(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(e={}){let{locale:t,numberingSystem:n,calendar:r}=Pr.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:t,numberingSystem:n,outputCalendar:r}}toUTC(e=0,t={}){return this.setZone(en.instance(e),t)}toLocal(){return this.setZone(yn.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=nn(t,yn.defaultZone),t.equals(this.zone))return this;if(t.isValid){let e=this.ts;if(n||r){let n=t.offset(this.ts),r=this.toObject();[e]=Na(r,n,t)}return Aa(this,{ts:e,zone:t})}else return e.invalid(Da(t))}reconfigure({locale:e,numberingSystem:t,outputCalendar:n}={}){let r=this.loc.clone({locale:e,numberingSystem:t,outputCalendar:n});return Aa(this,{loc:r})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;let t=dr(e,Ka),{minDaysInFirstWeek:n,startOfWeek:r}=Mn(t,this.loc),i=!T(t.weekYear)||!T(t.weekNumber)||!T(t.weekday),a=!T(t.ordinal),o=!T(t.year),s=!T(t.month)||!T(t.day),c=o||s,l=t.weekYear||t.weekNumber;if((c||a)&&l)throw new We(`Can't mix weekYear/weekNumber units with year/month/day or ordinals`);if(s&&a)throw new We(`Can't mix ordinal dates with month/day`);let u;i?u=kn({...On(this.c,n,r),...t},n,r):T(t.ordinal)?(u={...this.toObject(),...t},T(t.day)&&(u.day=Math.min(rr(u.year,u.month),u.day))):u=jn({...An(this.c),...t});let[d,f]=Na(u,this.o,this.zone);return Aa(this,{ts:d,o:f})}plus(e){if(!this.isValid)return this;let t=qi.fromDurationLike(e);return Aa(this,Pa(this,t))}minus(e){if(!this.isValid)return this;let t=qi.fromDurationLike(e).negate();return Aa(this,Pa(this,t))}startOf(e,{useLocaleWeeks:t=!1}={}){if(!this.isValid)return this;let n={},r=qi.normalizeUnit(e);switch(r){case`years`:n.month=1;case`quarters`:case`months`:n.day=1;case`weeks`:case`days`:n.hour=0;case`hours`:n.minute=0;case`minutes`:n.second=0;case`seconds`:n.millisecond=0;break}if(r===`weeks`)if(t){let e=this.loc.getStartOfWeek(),{weekday:t}=this;t<e&&(n.weekNumber=this.weekNumber-1),n.weekday=e}else n.weekday=1;return r===`quarters`&&(n.month=(Math.ceil(this.month/3)-1)*3+1),this.set(n)}endOf(e,t){return this.isValid?this.plus({[e]:1}).startOf(e,t).minus(1):this}toFormat(e,t={}){return this.isValid?Pr.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):Ta}toLocaleString(e=Xe,t={}){return this.isValid?Pr.create(this.loc.clone(t),e).formatDateTime(this):Ta}toLocaleParts(e={}){return this.isValid?Pr.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e=`extended`,suppressSeconds:t=!1,suppressMilliseconds:n=!1,includeOffset:r=!0,extendedZone:i=!1,precision:a=`milliseconds`}={}){if(!this.isValid)return null;a=Ga(a);let o=e===`extended`,s=La(this,o,a);return Ha.indexOf(a)>=3&&(s+=`T`),s+=Ra(this,o,t,n,r,i,a),s}toISODate({format:e=`extended`,precision:t=`day`}={}){return this.isValid?La(this,e===`extended`,Ga(t)):null}toISOWeekDate(){return Ia(this,`kkkk-'W'WW-c`)}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:t=!1,includeOffset:n=!0,includePrefix:r=!1,extendedZone:i=!1,format:a=`extended`,precision:o=`milliseconds`}={}){return this.isValid?(o=Ga(o),(r&&Ha.indexOf(o)>=3?`T`:``)+Ra(this,a===`extended`,t,e,n,i,o)):null}toRFC2822(){return Ia(this,`EEE, dd LLL yyyy HH:mm:ss ZZZ`,!1)}toHTTP(){return Ia(this.toUTC(),`EEE, dd LLL yyyy HH:mm:ss 'GMT'`)}toSQLDate(){return this.isValid?La(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:t=!1,includeOffsetSpace:n=!0}={}){let r=`HH:mm:ss.SSS`;return(t||e)&&(n&&(r+=` `),t?r+=`z`:e&&(r+=`ZZ`)),Ia(this,r,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():Ta}[Symbol.for(`nodejs.util.inspect.custom`)](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};let t={...this.c};return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,t=`milliseconds`,n={}){if(!this.isValid||!e.isValid)return qi.invalid(`created by diffing an invalid DateTime`);let r={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=Un(t).map(qi.normalizeUnit),a=e.valueOf()>this.valueOf(),o=ea(a?this:e,a?e:this,i,r);return a?o.negate():o}diffNow(t=`milliseconds`,n={}){return this.diff(e.now(),t,n)}until(e){return this.isValid?Xi.fromDateTimes(this,e):this}hasSame(e,t,n){if(!this.isValid)return!1;let r=e.valueOf(),i=this.setZone(e.zone,{keepLocalTime:!0});return i.startOf(t,n)<=r&&r<=i.endOf(t,n)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(t={}){if(!this.isValid)return null;let n=t.base||e.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0,i=[`years`,`months`,`days`,`hours`,`minutes`,`seconds`],a=t.unit;return Array.isArray(t.unit)&&(i=t.unit,a=void 0),Ya(n,this.plus(r),{...t,numeric:`always`,units:i,unit:a})}toRelativeCalendar(t={}){return this.isValid?Ya(t.base||e.fromObject({},{zone:this.zone}),this,{...t,numeric:`auto`,units:[`years`,`months`,`days`],calendary:!0}):null}static min(...t){if(!t.every(e.isDateTime))throw new Ke(`min requires all arguments be DateTimes`);return Wn(t,e=>e.valueOf(),Math.min)}static max(...t){if(!t.every(e.isDateTime))throw new Ke(`max requires all arguments be DateTimes`);return Wn(t,e=>e.valueOf(),Math.max)}static fromFormatExplain(e,t,n={}){let{locale:r=null,numberingSystem:i=null}=n;return Sa(Qt.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0}),e,t)}static fromStringExplain(t,n,r={}){return e.fromFormatExplain(t,n,r)}static buildFormatParser(e,t={}){let{locale:n=null,numberingSystem:r=null}=t;return new xa(Qt.fromOpts({locale:n,numberingSystem:r,defaultToEN:!0}),e)}static fromFormatParser(t,n,r={}){if(T(t)||T(n))throw new Ke(`fromFormatParser requires an input string and a format parser`);let{locale:i=null,numberingSystem:a=null}=r,o=Qt.fromOpts({locale:i,numberingSystem:a,defaultToEN:!0});if(!o.equals(n.locale))throw new Ke(`fromFormatParser called with a locale of ${o}, but the format parser was created for ${n.locale}`);let{result:s,zone:c,specificOffset:l,invalidReason:u}=n.explainFromTokens(t);return u?e.invalid(u):Fa(s,c,r,`format ${n.format}`,t,l)}static get DATE_SHORT(){return Xe}static get DATE_MED(){return Ze}static get DATE_MED_WITH_WEEKDAY(){return Qe}static get DATE_FULL(){return $e}static get DATE_HUGE(){return et}static get TIME_SIMPLE(){return tt}static get TIME_WITH_SECONDS(){return nt}static get TIME_WITH_SHORT_OFFSET(){return rt}static get TIME_WITH_LONG_OFFSET(){return it}static get TIME_24_SIMPLE(){return at}static get TIME_24_WITH_SECONDS(){return ot}static get TIME_24_WITH_SHORT_OFFSET(){return st}static get TIME_24_WITH_LONG_OFFSET(){return ct}static get DATETIME_SHORT(){return lt}static get DATETIME_SHORT_WITH_SECONDS(){return ut}static get DATETIME_MED(){return dt}static get DATETIME_MED_WITH_SECONDS(){return ft}static get DATETIME_MED_WITH_WEEKDAY(){return pt}static get DATETIME_FULL(){return mt}static get DATETIME_FULL_WITH_SECONDS(){return ht}static get DATETIME_HUGE(){return gt}static get DATETIME_HUGE_WITH_SECONDS(){return _t}};function eo(e){if($a.isDateTime(e))return e;if(e&&e.valueOf&&Ln(e.valueOf()))return $a.fromJSDate(e);if(e&&typeof e==`object`)return $a.fromObject(e);throw new Ke(`Unknown datetime argument: ${e}, of type ${typeof e}`)}Intl.DateTimeFormat().resolvedOptions().locale;var E;(function(e){e.Year=`year`,e.Month=`month`,e.Week=`week`,e.Day=`day`,e.Hour=`hour`,e.Minute=`minute`,e.Second=`second`,e.Millisecond=`millisecond`})(E||={}),E.Year,E.Hour,E.Minute,E.Second,E.Millisecond,E.Month,E.Week,E.Day,E.Millisecond,E.Second,E.Minute,E.Hour,E.Day,E.Week,E.Month,E.Year;var to={min:0,max:23},no={min:0,max:59},ro={min:0,max:59},io={min:0,max:999},D;(function(e){e.Years=`years`,e.Months=`months`,e.Weeks=`weeks`,e.Days=`days`,e.Hours=`hours`,e.Minutes=`minutes`,e.Seconds=`seconds`,e.Milliseconds=`milliseconds`})(D||={});var ao=[D.Milliseconds,D.Seconds,D.Minutes,D.Hours,D.Days,D.Weeks,D.Months,D.Years];D.Milliseconds,D.Seconds,D.Minutes,D.Hours,D.Days,D.Weeks,D.Months,D.Years,D.Years,E.Year,D.Months,E.Month,D.Weeks,E.Week,D.Days,E.Day,D.Hours,E.Hour,D.Minutes,E.Minute,D.Seconds,E.Second,D.Milliseconds,E.Millisecond,E.Year,D.Years,E.Month,D.Months,E.Week,D.Weeks,E.Day,D.Days,E.Hour,D.Hours,E.Minute,D.Minutes,E.Second,D.Seconds,E.Millisecond,D.Milliseconds;function oo(e){return ao.filter(t=>e[t])}function so(e,{decimalCount:t}){if(t==null)return e;let n=10**t,r=e*n;return Number((Math.round(r)/n).toFixed(t))}function co(e){return so(Math.max(e-.4,0),{decimalCount:0})}function lo(e){return e===0?0:Math.sign(e)}function uo(e,t,n={}){let r={},i={decimalCount:n.decimalCount==null?void 0:Math.round(Math.abs(n.decimalCount))},a=Object.values(e).includes(1/0),o=Object.values(e).includes(-1/0),s=oo(t).reverse();if(a||o)return s.forEach(e=>{r[e]=a?1/0:-1/0}),r;let c=qi.fromObject(e).as(D.Milliseconds),l=lo(c);return s.forEach((e,t)=>{let n=t===s.length-1;if(e===D.Milliseconds)r.milliseconds=so(c,i);else{let t=qi.fromObject({milliseconds:c}).as(e),a=Math.sign(t),o=Math.abs(t),s=n?so(o,i):Math.floor(i.decimalCount==null?o:co(o)),u=s===0?0:s*a;r[e]=u,c-=qi.fromObject({[e]:u}).as(D.Milliseconds),l!==lo(c)&&(c=0)}}),r}var fo;(function(e){e.Sunday=`sunday`,e.Monday=`monday`,e.Tuesday=`tuesday`,e.Wednesday=`wednesday`,e.Thursday=`thursday`,e.Friday=`friday`,e.Saturday=`saturday`})(fo||={}),fo.Sunday,fo.Monday,fo.Tuesday,fo.Wednesday,fo.Thursday,fo.Friday,fo.Saturday,fo.Sunday,fo.Monday,fo.Tuesday,fo.Wednesday,fo.Thursday,fo.Friday,fo.Saturday;var po;(function(e){e.January=`january`,e.February=`february`,e.March=`march`,e.April=`april`,e.May=`may`,e.June=`june`,e.July=`july`,e.August=`august`,e.September=`september`,e.October=`october`,e.November=`november`,e.December=`december`})(po||={}),po.January,po.February,po.March,po.April,po.May,po.June,po.July,po.August,po.September,po.October,po.November,po.December;var mo={min:1,max:12},ho={min:1,max:31};function go(e){let t=new ze,n=Object.values(e).some(e=>e===1/0||e===-1/0)?1/0:uo(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}function _o(...e){let t=e.join(``),n=o(Array.from(t));return Array.from(n).join(``)}function vo(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function yo(e,t){return bo(e,_o([typeof e==`string`?``:e.flags,t].join(``).toLowerCase()))}function bo(e,t){let n=_o(t);return typeof e==`string`?new RegExp(vo(e),n):new RegExp(e.source,n)}function xo(e,{caseSensitive:t}){let n=typeof e==`string`?``:e.flags.toLowerCase();return bo(e,t?n.replaceAll(`i`,``):_o(n+`i`))}function So(e,t=1){return e.split(`
`).map(e=>[`    `.repeat(Math.round(t)),e].join(``)).join(`
`)}function Co(e,t){return t?typeof t==`string`?!!new RegExp(vo(t),`i`).exec(e):!!yo(t,`i`).exec(e):!1}var O=class extends Error{name=`AssertionError`;constructor(e,t){super(Pe(t,e)||`Assertion failed.`)}},wo={interval:{milliseconds:100},timeout:{seconds:10}},To=Symbol(`not set`);async function Eo(e,t,n){let{callback:r,extraAssertionArgs:i,failureMessage:a,options:o}=Do(t),s=uo(o.timeout,{milliseconds:!0}).milliseconds,c=uo(o.interval,{milliseconds:!0}),l=To,u;async function d(){try{l=n?r():await r(),e(l,...i)}catch(e){l=To,u=Fe(e)}}let f=Date.now();for(;l===To;)if(await d(),await go(c),Date.now()-f>=s){let e=`${a?`${a}: `:``}Timeout of '${s}' milliseconds exceeded waiting for callback value to match expectations`;throw Ie(u,e)}return l}function k(e,t=!1){return((...n)=>Eo(e,n,t))}function Do(e){let t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(e=>{if(t.callback)t.extraAssertionArgs.push(e);else if(typeof e==`function`)t.callback=e;else if(typeof e==`string`)t.failureMessage=e;else if(typeof e==`object`)t.options=e;else if(e===void 0)return;else throw TypeError(`Unexpected waitUntil arg: ${JSON.stringify(e)}`)}),!t.callback)throw TypeError(`Missing waitUntil callback.`);return{callback:t.callback,options:Oo(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Oo(e){return{interval:e?.interval||wo.interval,timeout:e?.timeout||wo.timeout}}var ko={isFalse(e,t){if(e!==!1)throw new O(`'${y(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new O(`'${y(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new O(`'${y(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new O(`'${y(e)}' is not truthy.`,t)}},Ao={assert:ko,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new O(`'${y(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new O(`'${y(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new O(`'${y(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new O(`'${y(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:k(ko.isFalse),isFalsy:k(ko.isFalsy),isTrue:k(ko.isTrue),isTruthy:k(ko.isTruthy)}};function jo(e,t,n){if(typeof e==`string`){if(!e.endsWith(t))throw new O(`${y(e)} does not end with ${y(t)}}`,n)}else if(e[e.length-1]!==t)throw new O(`${y(e)} does not end with ${y(t)}}`,n)}function Mo(e,t,n){if(typeof e==`string`){if(e.endsWith(t))throw new O(`${y(e)} ends with ${y(t)}}`,n)}else if(e[e.length-1]===t)throw new O(`${y(e)} ends with ${y(t)}}`,n)}function No(e,t,n){if(typeof e==`string`){if(!e.startsWith(t))throw new O(`${y(e)} does not start with ${y(t)}}`,n)}else if(e[0]!==t)throw new O(`${y(e)} does not start with ${y(t)}}`,n)}function Po(e,t,n){if(typeof e==`string`){if(e.startsWith(t))throw new O(`${y(e)} starts with ${y(t)}}`,n)}else if(e[0]===t)throw new O(`${y(e)} starts with ${y(t)}}`,n)}var Fo={endsWith:jo,endsWithout:Mo,startsWith:No,startsWithout:Po},Io={assert:Fo,check:{endsWith:((e,t)=>typeof e==`string`?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e==`string`?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e==`string`?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e==`string`?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,n)=>{if(typeof e==`string`){if(!e.endsWith(t))throw new O(`${y(e)} does not end with ${y(t)}}`,n)}else if(e[e.length-1]!==t)throw new O(`${y(e)} does not end with ${y(t)}}`,n);return e}),endsWithout:((e,t,n)=>{if(typeof e==`string`){if(e.endsWith(t))throw new O(`${y(e)} ends with ${y(t)}}`,n)}else if(e[e.length-1]===t)throw new O(`${y(e)} ends with ${y(t)}}`,n);return e}),startsWith:((e,t,n)=>{if(typeof e==`string`){if(!e.startsWith(t))throw new O(`${y(e)} does not start with ${y(t)}}`,n)}else if(e[0]!==t)throw new O(`${y(e)} does not start with ${y(t)}}`,n);return e}),startsWithout:((e,t,n)=>{if(typeof e==`string`){if(e.startsWith(t))throw new O(`${y(e)} starts with ${y(t)}}`,n)}else if(e[0]===t)throw new O(`${y(e)} starts with ${y(t)}}`,n);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e==`string`)return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e==`string`)return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e==`string`)return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e==`string`)return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:k(Fo.endsWith),endsWithout:k(Fo.endsWithout),startsWith:k(Fo.startsWith),startsWithout:k(Fo.startsWithout)}};function Lo(e,t,n){let r=ke(t);if(!r.includes(e))throw new O(`${String(e)} is not an enum value in '${r.join(`,`)}'.`,n)}function Ro(e,t){return ke(t).includes(e)}var zo={isEnumValue(e,t,n){Lo(e,t,n)},isNotEnumValue(e,t,n){let r=ke(t);if(r.includes(e))throw new O(`${String(e)} is an enum value in '${r.join(`,`)}'.`,n)}},Bo={assert:zo,check:{isEnumValue:Ro,isNotEnumValue(e,t){return!ke(t).includes(e)}},assertWrap:{isEnumValue(e,t,n){let r=ke(t);if(!r.includes(e))throw new O(`${String(e)} is not an enum value in '${r.join(`,`)}'.`,n);return e},isNotEnumValue(e,t,n){let r=ke(t);if(r.includes(e))throw new O(`${String(e)} is not an enum value in '${r.join(`,`)}'.`,n);return e}},checkWrap:{isEnumValue(e,t){if(ke(t).includes(e))return e},isNotEnumValue(e,t){if(!ke(t).includes(e))return e}},waitUntil:{isEnumValue:k(zo.isEnumValue),isNotEnumValue:k(zo.isNotEnumValue)}},Vo={entriesEqual(e,t,n){if(!e||typeof e!=`object`)throw new O(`${y(e)} is not an object.`,n);if(!t||typeof t!=`object`)throw new O(`${y(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(r=>{if(e[r]!==t[r])throw new O(`Entries are not equal at key '${String(r)}'.`,n)})},notEntriesEqual(e,t,n){if(!(!e||typeof e!=`object`||!t||typeof t!=`object`)&&!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>e[n]!==t[n]))throw new O(`Entries are equal.`,n)}},Ho={assert:Vo,check:{entriesEqual(e,t){return!e||typeof e!=`object`||!t||typeof t!=`object`?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>e[n]===t[n])},notEntriesEqual(e,t){return!e||typeof e!=`object`||!t||typeof t!=`object`?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>e[n]!==t[n])}},assertWrap:{entriesEqual(e,t,n){if(!e||typeof e!=`object`)throw new O(`${y(e)} is not an object.`,n);if(!t||typeof t!=`object`)throw new O(`${y(t)} is not an object.`,n);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(r=>{if(e[r]!==t[r])throw new O(`Entries are not equal at key '${String(r)}'.`,n)}),e},notEntriesEqual(e,t,n){if(!e||typeof e!=`object`||!t||typeof t!=`object`||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>e[n]!==t[n]))return e;throw new O(`Entries are equal.`,n)}},checkWrap:{entriesEqual(e,t){if(!(!e||typeof e!=`object`||!t||typeof t!=`object`)&&Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>e[n]===t[n]))return e},notEntriesEqual(e,t){if(!e||typeof e!=`object`||!t||typeof t!=`object`||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>e[n]!==t[n]))return e}},waitUntil:{entriesEqual:k(Vo.entriesEqual),notEntriesEqual:k(Vo.notEntriesEqual)}};function Uo(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Wo(e,t){if(!(e===t||Uo(e,t))){if(e!=null&&t!=null&&typeof e==`object`&&typeof t==`object`){let n=Object.keys(e).sort(),r=Object.keys(t).sort();if(n.length!==r.length)throw Error(`Values are not JSON equal.`);if(!Uo(n,r))throw Error(`Values are JSON equal.`);Object.keys(e).forEach(n=>{try{Wo(e[n],t[n])}catch(e){throw Error(`JSON objects are not equal at key '${n}': ${Ne(e)}`)}})}throw Error(`Values are not JSON equal.`)}}function Go(e,t){if(e===t||Uo(e,t))return!0;if(e!=null&&t!=null&&typeof e==`object`&&typeof t==`object`){let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length!==r.length||!Uo(n,r)?!1:Object.keys(e).every(n=>Go(e[n],t[n]))}return!1}var Ko={jsonEquals(e,t,n){try{Wo(e,t)}catch(e){throw new O(Ne(e),n)}},notJsonEquals(e,t,n){try{Wo(e,t)}catch{return}throw new O(`Values are JSON equal.`,n)}},qo={assert:Ko,check:{jsonEquals(e,t){return Go(e,t)},notJsonEquals(e,t){return!Go(e,t)}},assertWrap:{jsonEquals(e,t,n){try{return Wo(e,t),e}catch(e){throw new O(Ne(e),n)}},notJsonEquals(e,t,n){try{Wo(e,t)}catch{return e}throw new O(`Values are JSON equal.`,n)}},checkWrap:{jsonEquals(e,t){if(Go(e,t))return e},notJsonEquals(e,t){if(!Go(e,t))return e}},waitUntil:{jsonEquals:k(Ko.jsonEquals),notJsonEquals:k(Ko.notJsonEquals)}};function Jo(e){if(e===void 0)return`undefined`;if(e===null)return`null`;let t=e[Symbol.toStringTag];return typeof t==`string`?t:Object.prototype.toString.call(e).slice(8,-1)}function Yo(){this._key=`chai/deep-eql__`+Math.random()+Date.now()}Yo.prototype={get:function(e){return e[this._key]},set:function(e,t){Object.isExtensible(e)&&Object.defineProperty(e,this._key,{value:t,configurable:!0})}};var Xo=typeof WeakMap==`function`?WeakMap:Yo;function Zo(e,t,n){if(!n||hs(e)||hs(t))return null;var r=n.get(e);if(r){var i=r.get(t);if(typeof i==`boolean`)return i}return null}function Qo(e,t,n,r){if(!(!n||hs(e)||hs(t))){var i=n.get(e);i?i.set(t,r):(i=new Xo,i.set(t,r),n.set(e,i))}}var $o=es;function es(e,t,n){if(n&&n.comparator)return ns(e,t,n);var r=ts(e,t);return r===null?ns(e,t,n):r}function ts(e,t){return e===t?e!==0||1/e==1/t:e!==e&&t!==t?!0:hs(e)||hs(t)?!1:null}function ns(e,t,n){n||={},n.memoize=n.memoize===!1?!1:n.memoize||new Xo;var r=n&&n.comparator,i=Zo(e,t,n.memoize);if(i!==null)return i;var a=Zo(t,e,n.memoize);if(a!==null)return a;if(r){var o=r(e,t);if(o===!1||o===!0)return Qo(e,t,n.memoize,o),o;var s=ts(e,t);if(s!==null)return s}var c=Jo(e);if(c!==Jo(t))return Qo(e,t,n.memoize,!1),!1;Qo(e,t,n.memoize,!0);var l=rs(e,t,c,n);return Qo(e,t,n.memoize,l),l}function rs(e,t,n,r){switch(n){case`String`:case`Number`:case`Boolean`:case`Date`:return es(e.valueOf(),t.valueOf());case`Promise`:case`Symbol`:case`function`:case`WeakMap`:case`WeakSet`:return e===t;case`Error`:return ps(e,t,[`name`,`message`,`code`],r);case`Arguments`:case`Int8Array`:case`Uint8Array`:case`Uint8ClampedArray`:case`Int16Array`:case`Uint16Array`:case`Int32Array`:case`Uint32Array`:case`Float32Array`:case`Float64Array`:case`Array`:return os(e,t,r);case`RegExp`:return is(e,t);case`Generator`:return ss(e,t,r);case`DataView`:return os(new Uint8Array(e.buffer),new Uint8Array(t.buffer),r);case`ArrayBuffer`:return os(new Uint8Array(e),new Uint8Array(t),r);case`Set`:return as(e,t,r);case`Map`:return as(e,t,r);case`Temporal.PlainDate`:case`Temporal.PlainTime`:case`Temporal.PlainDateTime`:case`Temporal.Instant`:case`Temporal.ZonedDateTime`:case`Temporal.PlainYearMonth`:case`Temporal.PlainMonthDay`:return e.equals(t);case`Temporal.Duration`:return e.total(`nanoseconds`)===t.total(`nanoseconds`);case`Temporal.TimeZone`:case`Temporal.Calendar`:return e.toString()===t.toString();default:return ms(e,t,r)}}function is(e,t){return e.toString()===t.toString()}function as(e,t,n){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var r=[],i=[];return e.forEach(function(e,t){r.push([e,t])}),t.forEach(function(e,t){i.push([e,t])}),os(r.sort(),i.sort(),n)}function os(e,t,n){var r=e.length;if(r!==t.length)return!1;if(r===0)return!0;for(var i=-1;++i<r;)if(es(e[i],t[i],n)===!1)return!1;return!0}function ss(e,t,n){return os(us(e),us(t),n)}function cs(e){return typeof Symbol<`u`&&typeof e==`object`&&Symbol.iterator!==void 0&&typeof e[Symbol.iterator]==`function`}function ls(e){if(cs(e))try{return us(e[Symbol.iterator]())}catch{return[]}return[]}function us(e){for(var t=e.next(),n=[t.value];t.done===!1;)t=e.next(),n.push(t.value);return n}function ds(e){var t=[];for(var n in e)t.push(n);return t}function fs(e){for(var t=[],n=Object.getOwnPropertySymbols(e),r=0;r<n.length;r+=1){var i=n[r];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}function ps(e,t,n,r){var i=n.length;if(i===0)return!0;for(var a=0;a<i;a+=1)if(es(e[n[a]],t[n[a]],r)===!1)return!1;return!0}function ms(e,t,n){var r=ds(e),i=ds(t),a=fs(e),o=fs(t);if(r=r.concat(a),i=i.concat(o),r.length&&r.length===i.length)return os(gs(r).sort(),gs(i).sort())===!1?!1:ps(e,t,r,n);var s=ls(e),c=ls(t);return s.length&&s.length===c.length?(s.sort(),c.sort(),os(s,c,n)):r.length===0&&s.length===0&&i.length===0&&c.length===0}function hs(e){return typeof e!=`object`||!e}function gs(e){return e.map(function(e){return typeof e==`symbol`?e.toString():e})}var _s=class extends O{name=`DiffError`;constructor(e,t,n,r){let i=Se(t,n);super([e,So(i)].join(`
`),r)}};function vs(e,t){return typeof e==`function`&&typeof t==`function`?!0:null}var ys={strictEquals(e,t,n){if(e!==t)throw typeof e==`object`&&e||typeof t==`object`&&t?new O(`Strict reference equality failed for \n\n${y(t)}\n\n.`,n):new _s(`Not strictly equal.`,e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e==`object`&&e?new O(`Strict reference INequality failed for \n\n${y(t)}\n\n.`,n):new O(`\n\n${y(e)}\n\nstrictly equals\n\n${y(t)}\n\n`,n)},looseEquals(e,t,n){if(e!=t)throw typeof e==`object`&&e||typeof t==`object`&&t?new O(`Loose reference equality failed for \n\n${y(t)}\n\n.`,n):new _s(`Not loosely equal.`,e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e==`object`&&e?new O(`Loose reference INequality failed for \n\n${y(t)}\n\n.`,n):new O(`\n\n${y(e)}\n\nloosely equals\n\n${y(t)}\n\n`,n)},deepEquals(e,t,n){if(!$o(e,t,{comparator:vs}))throw new _s(`Not deeply equal.`,e,t,n)},notDeepEquals(e,t,n){if($o(e,t,{comparator:vs}))throw new O(`\n\n${y(e)}\n\ndeeply equals\n\n${y(t)}\n\n`,n)}},bs=ys.deepEquals,xs={assert:ys,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return $o(e,t,{comparator:vs})},notDeepEquals(e,t){return!$o(e,t,{comparator:vs})}},assertWrap:{strictEquals(e,t,n){if(e===t)return e;throw typeof e==`object`&&e||typeof t==`object`&&t?new O(`Strict reference equality failed for \n\n${y(t)}\n\n.`,n):new _s(`Not strictly equal.`,e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e==`object`&&e?new O(`Strict reference INequality failed for \n\n${y(t)}\n\n.`,n):new O(`\n\n${y(e)}\n\nstrictly equals\n\n${y(t)}\n\n`,n);return e},looseEquals(e,t,n){if(e==t)return e;throw typeof e==`object`&&e||typeof t==`object`&&t?new O(`Loose reference equality failed for \n\n${y(t)}\n\n.`,n):new _s(`Not loosely equal.`,e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e==`object`&&e?new O(`Loose reference INequality failed for \n\n${y(t)}\n\n.`,n):new O(`\n\n${y(e)}\n\nloosely equals\n\n${y(t)}\n\n`,n);return e},deepEquals(e,t,n){if($o(e,t,{comparator:vs}))return e;throw new _s(`Not deeply equal.`,e,t,n)},notDeepEquals(e,t,n){if($o(e,t,{comparator:vs}))throw new O(`\n\n${y(e)}\n\ndeeply equals\n\n${y(t)}\n\n`,n);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if($o(e,t,{comparator:vs}))return e},notDeepEquals(e,t){if(!$o(e,t,{comparator:vs}))return e}},waitUntil:{strictEquals:k(ys.strictEquals),notStrictEquals:k(ys.notStrictEquals),looseEquals:k(ys.looseEquals),notLooseEquals:k(ys.notLooseEquals),deepEquals:k(ys.deepEquals),notDeepEquals:k(ys.notDeepEquals)}};function Ss(e,t){if(typeof e==`string`)return typeof t==`string`&&e.includes(t);let n=!0;try{n=Reflect.ownKeys(e).map(t=>e[t]).includes(t)}catch{return!1}return n}function Cs(e,t){return typeof t==`string`?t.includes(e):Ss(t,e)}var ws={hasValue(e,t,n){if(!Ss(e,t))throw new O(`'${y(e)}' does not have value '${y(t)}'.`,n)},lacksValue(e,t,n){if(Ss(e,t))throw new O(`'${y(e)}' has value '${y(t)}'.`,n)},hasValues(e,t,n){let r=[];if(typeof e==`string`)r=t.filter(t=>!(typeof t==`string`&&e.includes(t)));else try{let n=Reflect.ownKeys(e).map(t=>e[t]);r=t.filter(e=>!n.includes(e))}catch{throw new O(`'${y(e)}' does not have values '${y(t)}'.`,n)}if(r.length)throw new O(`'${y(e)}' does not have values '${y(r)}'.`,n)},lacksValues(e,t,n){let r=[];if(typeof e==`string`)r=t.filter(t=>typeof t==`string`&&e.includes(t));else try{let n=Reflect.ownKeys(e).map(t=>e[t]);r=t.filter(e=>n.includes(e))}catch{}if(r.length)throw new O(`'${y(e)}' has values '${y(r)}'.`,n)},isIn(e,t,n){if(!Cs(e,t))throw new O(`'${y(e)}'\n\nis not in\n\n${y(t)}.`,n)},isNotIn(e,t,n){if(Cs(e,t))throw new O(`'${y(e)}'\n\nis in\n\n${y(t)}.`,n)},isEmpty(e,t){if(typeof e!=`string`&&typeof e!=`object`)throw new O(`'${y(e)}' is not empty.`,t);if(typeof e==`string`&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e==`object`&&!Object.keys(e).length)return;throw new O(`'${y(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!=`string`&&typeof e!=`object`)){if(typeof e==`string`&&!e){if(!e)throw new O(`'${y(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new O(`'${y(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new O(`'${y(e)}' is not empty.`,t)}else if(typeof e==`object`&&!Object.keys(e).length)throw new O(`'${y(e)}' is not empty.`,t)}}},Ts={assert:ws,check:{hasValue(e,t){return Ss(e,t)},lacksValue(e,t){return!Ss(e,t)},hasValues(e,t){return t.every(t=>Ss(e,t))},lacksValues(e,t){return t.every(t=>!Ss(e,t))},isIn(e,t){return Cs(e,t)},isNotIn(e,t){return!Cs(e,t)},isEmpty(e){return typeof e!=`string`&&typeof e!=`object`?!1:typeof e==`string`?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!=`string`&&typeof e!=`object`?!0:typeof e==`string`?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,n){if(!Ss(e,t))throw new O(`'${y(e)}' does not have value '${y(t)}'.`,n);return e},lacksValue(e,t,n){if(Ss(e,t))throw new O(`'${y(e)}' has value '${y(t)}'.`,n);return e},hasValues(e,t,n){let r=[];if(typeof e==`string`)r=t.filter(t=>!(typeof t==`string`&&e.includes(t)));else try{let n=Reflect.ownKeys(e).map(t=>e[t]);r=t.filter(e=>!n.includes(e))}catch{throw new O(`'${y(e)}' does not have values '${y(t)}'.`,n)}if(r.length)throw new O(`'${y(e)}' does not have values '${y(r)}'.`,n);return e},lacksValues(e,t,n){let r=[];if(typeof e==`string`)r=t.filter(t=>typeof t==`string`&&e.includes(t));else try{let n=Reflect.ownKeys(e).map(t=>e[t]);r=t.filter(e=>n.includes(e))}catch{}if(r.length)throw new O(`'${y(e)}' has values '${y(r)}'.`,n);return e},isIn(e,t,n){if(!Cs(e,t))throw new O(`'${y(e)}'\n\nis not in\n\n${y(t)}.`,n);return e},isNotIn(e,t,n){if(Cs(e,t))throw new O(`'${y(e)}'\n\nis in\n\n${y(t)}.`,n);return e},isEmpty(e,t){if(typeof e!=`string`&&typeof e!=`object`)throw new O(`'${y(e)}' is not empty.`,t);if(typeof e==`string`&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e==`object`&&!Object.keys(e).length)return e;throw new O(`'${y(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!=`string`&&typeof e!=`object`)return e;if(typeof e==`string`&&!e){if(!e)throw new O(`'${y(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new O(`'${y(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new O(`'${y(e)}' is empty.`,t)}else if(typeof e==`object`&&!Object.keys(e).length)throw new O(`'${y(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(Ss(e,t))return e},lacksValue(e,t){if(!Ss(e,t))return e},hasValues(e,t){if(t.every(t=>Ss(e,t)))return e},lacksValues(e,t){if(!t.every(t=>Ss(e,t)))return e},isIn(e,t){if(Cs(e,t))return e},isNotIn(e,t){if(!Cs(e,t))return e},isEmpty(e){if(!(typeof e!=`string`&&typeof e!=`object`)){if(typeof e==`string`){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e==`object`&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!=`string`&&typeof e!=`object`)return e;if(typeof e==`string`){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e==`object`&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:k(ws.hasValue),lacksValue:k(ws.lacksValue),hasValues:k(ws.hasValues),lacksValues:k(ws.lacksValues),isIn:k(ws.isIn),isNotIn:k(ws.isNotIn),isEmpty:k(ws.isEmpty),isNotEmpty:k(ws.isNotEmpty)}},Es={isHttpStatus(e,t){if(!Ro(e,S))throw new O(`${y(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,n){if(!Ro(e,S))throw new O(`${y(e)} is not a valid HTTP status.`,n);if(!Cs(e,Le[t]))throw new O(`${y(e)} is not a '${t}' HTTP status.`,n)}},Ds={assert:Es,check:{isHttpStatus(e){return Ro(e,S)},isHttpStatusCategory(e,t){return Ro(e,S)&&Cs(e,Le[t])}},assertWrap:{isHttpStatus(e,t){if(!Ro(e,S))throw new O(`${y(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,n){if(!Ro(e,S))throw new O(`${y(e)} is not a valid HTTP status.`,n);if(!Cs(e,Le[t]))throw new O(`${y(e)} is not a '${t}' HTTP status.`,n);return e}},checkWrap:{isHttpStatus(e){if(Ro(e,S))return e},isHttpStatusCategory(e,t){if(Ro(e,S)&&Cs(e,Le[t]))return e}},waitUntil:{isHttpStatus:k(Es.isHttpStatus),isHttpStatusCategory:k(Es.isHttpStatusCategory)}},Os={instanceOf(e,t,n){if(!(e instanceof t))throw new O(`'${y(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new O(`'${y(e)}' is an instance of '${t.name}'`,n)}},ks={assert:Os,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,n){if(e instanceof t)return e;throw new O(`'${y(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new O(`'${y(e)}' is an instance of '${t.name}'`,n);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:k(Os.instanceOf),notInstanceOf:k(Os.notInstanceOf)}},As=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function js(e,t){return As.some(n=>{try{return n(e,t)}catch{return!1}})}var Ms={isKeyOf(e,t,n){if(!js(t,e))throw new O(`'${String(e)}' is not a key of '${y(t)}'.`,n)},isNotKeyOf(e,t,n){if(js(t,e))throw new O(`'${String(e)}' is a key of '${y(t)}'.`,n)},hasKey(e,t,n){if(!js(e,t))throw new O(`'${y(e)}' does not have key '${String(t)}'.`,n)},lacksKey(e,t,n){if(js(e,t))throw new O(`'${y(e)}' has key '${String(t)}'.`,n)},hasKeys(e,t,n){let r=t.filter(t=>!js(e,t));if(r.length)throw new O(`'${y(e)}' does not have keys '${r.join(`,`)}'.`,n)},lacksKeys(e,t,n){let r=t.filter(t=>js(e,t));if(r.length)throw new O(`'${y(e)}' does not lack keys '${r.join(`,`)}'.`,n)}},Ns={assert:Ms,check:{isKeyOf(e,t){return js(t,e)},isNotKeyOf(e,t){return!js(t,e)},hasKey:js,lacksKey(e,t){return!js(e,t)},hasKeys(e,t){return t.every(t=>js(e,t))},lacksKeys(e,t){return t.every(t=>!js(e,t))}},assertWrap:{isKeyOf(e,t,n){if(!js(t,e))throw new O(`'${String(e)}' is not a key of '${y(t)}'.`,n);return e},isNotKeyOf(e,t,n){if(js(t,e))throw new O(`'${String(e)}' is a key of '${y(t)}'.`,n);return e},hasKey(e,t,n){if(!js(e,t))throw new O(`'${y(e)}' does not have key '${String(t)}'.`,n);return e},lacksKey(e,t,n){if(js(e,t))throw new O(`'${y(e)}' has key '${String(t)}'.`,n);return e},hasKeys(e,t,n){let r=t.filter(t=>!js(e,t));if(r.length)throw new O(`'${y(e)}' does not have keys '${r.join(`,`)}'.`,n);return e},lacksKeys(e,t,n){let r=t.filter(t=>js(e,t));if(r.length)throw new O(`'${y(e)}' does not lack keys '${r.join(`,`)}'.`,n);return e}},checkWrap:{isKeyOf(e,t){if(js(t,e))return e},isNotKeyOf(e,t){if(!js(t,e))return e},hasKey(e,t){if(js(e,t))return e},lacksKey(e,t){if(!js(e,t))return e},hasKeys(e,t){if(t.every(t=>js(e,t)))return e},lacksKeys(e,t){if(t.every(t=>!js(e,t)))return e}},waitUntil:{isKeyOf:k(Ms.isKeyOf),isNotKeyOf:k(Ms.isNotKeyOf),hasKey:k(Ms.hasKey),lacksKey:k(Ms.lacksKey),hasKeys:k(Ms.hasKeys),lacksKeys:k(Ms.lacksKeys)}};function Ps(e,t,n){if((Array.isArray(e)||typeof e==`string`?e.length:De(e).length)<t)throw new O(`Length '${e.length}' is not at least '${t}'.`,n)}function Fs(e,t,n){if((Array.isArray(e)||typeof e==`string`?e.length:De(e).length)!==t)throw new O(`Length '${e.length}' is not exactly '${t}'.`,n)}var Is={isLengthAtLeast:Ps,isLengthExactly:Fs},Ls={assert:Is,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e==`string`?e.length:De(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e==`string`?e.length:De(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,n)=>{if((Array.isArray(e)||typeof e==`string`?e.length:De(e).length)<t)throw new O(`Length '${e.length}' is not at least '${t}'.`,n);return e}),isLengthExactly:((e,t,n)=>{if((Array.isArray(e)||typeof e==`string`?e.length:De(e).length)!==t)throw new O(`Length '${e.length}' is not exactly '${t}'.`,n);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e==`string`?e.length:De(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e==`string`?e.length:De(e).length)===t)return e})},waitUntil:{isLengthAtLeast:k(Is.isLengthAtLeast),isLengthExactly:k(Is.isLengthExactly)}},Rs={assert:{never(e){throw new O(`This code should not have executed.`,e)}},assertWrap:{},check:{},checkWrap:{},waitUntil:{}},zs={isDefined(e,t){if(e==null)throw new O(`'${y(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new O(`'${y(e)}' is not a nullish.`,t)}},Bs={assert:zs,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new O(`'${y(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new O(`'${y(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:k(zs.isDefined),isNullish:k(zs.isNullish)}},Vs={isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new O(`${e} is not within the bounds ${y({min:n,max:t})}`,r)},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new O(`${e} is not outside the bounds ${y({min:t,max:n})}`,r)},isInteger(e,t){if(typeof e!=`number`||isNaN(e)||!Number.isInteger(e))throw new O(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new O(`${e} is an integer.`,t)},isAbove(e,t,n){if(e<=t)throw new O(`${e} is not above ${t}`,n)},isAtLeast(e,t,n){if(e<t)throw new O(`${e} is not at least ${t}`,n)},isBelow(e,t,n){if(e>=t)throw new O(`${e} is not below ${t}`,n)},isAtMost(e,t,n){if(e>t)throw new O(`${e} is not at most ${t}`,n)},isNaN(e,t){if(!isNaN(e))throw new O(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new O(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new O(`${e} is not infinite`,t)},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new O(`${e} is not within ±${n} of ${t}`,r)},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new O(`${e} is within ±${n} of ${t}`,r)}},Hs={assert:Vs,check:{isInBounds(e,{max:t,min:n}){return n<=e&&e<=t},isOutBounds(e,{max:t,min:n}){return e<n||t<e},isInteger(e){return typeof e==`number`&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!=`number`||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,n){return t-n<=e&&e<=t+n},isNotApproximately(e,t,n){return e<t-n||e>t+n}},assertWrap:{isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new O(`${e} is not within the bounds ${y({min:n,max:t})}`,r);return e},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new O(`${e} is not outside the bounds ${y({min:t,max:n})}`,r);return e},isInteger(e,t){if(typeof e!=`number`||isNaN(e)||!Number.isInteger(e))throw new O(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new O(`${e} is an integer.`,t);return e},isAbove(e,t,n){if(e<=t)throw new O(`${e} is not above ${t}`,n);return e},isAtLeast(e,t,n){if(e<t)throw new O(`${e} is not at least ${t}`,n);return e},isBelow(e,t,n){if(e>=t)throw new O(`${e} is not below ${t}`,n);return e},isAtMost(e,t,n){if(e>t)throw new O(`${e} is not at most ${t}`,n);return e},isNaN(e,t){if(!isNaN(e))throw new O(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new O(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new O(`${e} is not infinite`,t);return e},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new O(`${e} is not within ±${n} of ${t}`,r);return e},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new O(`${e} is within ±${n} of ${t}`,r);return e}},checkWrap:{isInBounds(e,{max:t,min:n}){if(n<=e&&e<=t)return e},isOutBounds(e,{max:t,min:n}){if(e<n||t<e)return e},isInteger(e){if(typeof e==`number`&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!=`number`||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,n){if(t-n<=e&&e<=t+n)return e},isNotApproximately(e,t,n){if(e<t-n||e>t+n)return e}},waitUntil:{isInBounds:k(Vs.isInBounds),isOutBounds:k(Vs.isOutBounds),isInteger:k(Vs.isInteger),isNotInteger:k(Vs.isNotInteger),isAbove:k(Vs.isAbove),isAtLeast:k(Vs.isAtLeast),isBelow:k(Vs.isBelow),isAtMost:k(Vs.isAtMost),isNaN:k(Vs.isNaN),isFinite:k(Vs.isFinite),isInfinite:k(Vs.isInfinite),isApproximately:k(Vs.isApproximately),isNotApproximately:k(Vs.isNotApproximately)}};function Us(e,t,n,r,i){return Gs(...Ws(e,t,n,r,i),!1)}function Ws(e,t,n,r,i){let a=Array.isArray(n);return[a?e:bs,a?t:e,a?n:t,a?r:n,a?i:r]}function Gs(e,t,n,r,i,a){let o=t(...n);if(o instanceof Promise)return new Promise(async(n,s)=>{try{let t=await o;e(t,r),a?n(t):n()}catch(e){s(new O(`Output from '${t.name}' did not produce expected output. ${Ne(e)}`,i))}});try{return e(o,r),a?o:void 0}catch(e){throw new O(`Output from '${t.name}' did not produce expected output. ${Ne(e)}`,i)}}function Ks(e,t,n,r,i){try{let a=Gs(...Ws(e,t,n,r,i),!1);return a instanceof Promise?new Promise(async e=>{try{await a,e(!0)}catch{e(!1)}}):!0}catch{return!1}}function qs(e,t,n,r,i){return Gs(...Ws(e,t,n,r,i),!0)}function Js(e,t,n,r,i){try{let a=Gs(...Ws(e,t,n,r,i),!0);return a instanceof Promise?new Promise(async e=>{try{e(await a)}catch{e(void 0)}}):a}catch{return}}var Ys=Symbol(`not set`);async function Xs(e,t,n,r,i,a){let o=Array.isArray(n),s=o?e:bs,c=o?t:e,l=o?n:t,u=o?r:n,d=Oo(o?i:r),f=o?a:i,p=uo(d.timeout,{milliseconds:!0}).milliseconds,m=uo(d.interval,{milliseconds:!0}),h=Ys,g;async function ee(){try{h=await Gs(s,c,l,u,void 0,!0)}catch(e){h=Ys,g=Fe(e)}}let _=Date.now();for(;h===Ys;)if(await ee(),await go(m),Date.now()-_>=p)throw Ie(g,Pe(f,`Timeout of '${p}' milliseconds exceeded waiting for callback value to match expectations`));return h}var Zs={assert:{output:Us},check:{output:Ks},assertWrap:{output:qs},checkWrap:{output:Js},waitUntil:{output:Xs}},Qs={isPropertyKey(e,t){if(typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`)throw new O(`'${y(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e==`string`||typeof e==`number`||typeof e==`symbol`)throw new O(`'${y(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e==`object`||typeof e==`function`))throw new O(`'${y(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!=`object`&&typeof e!=`function`)throw new O(`'${y(e)}' is not a Primitive.`,t)}},$s={assert:Qs,check:{isNotPrimitive(e){return e!==null&&(typeof e==`object`||typeof e==`function`)},isNotPropertyKey(e){return typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`},isPrimitive(e){return e===null||typeof e!=`object`&&typeof e!=`function`},isPropertyKey(e){return typeof e==`string`||typeof e==`number`||typeof e==`symbol`}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!=`object`&&typeof e!=`function`)throw new O(`'${y(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e==`string`||typeof e==`number`||typeof e==`symbol`)throw new O(`'${y(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e==`object`||typeof e==`function`))throw new O(`'${y(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`)throw new O(`'${y(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e==`object`||typeof e==`function`))return e},isNotPropertyKey(e){if(typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`)return e},isPrimitive(e){if(e===null||typeof e!=`object`&&typeof e!=`function`)return e},isPropertyKey(e){if(typeof e==`string`||typeof e==`number`||typeof e==`symbol`)return e}},waitUntil:{isNotPrimitive:k(Qs.isNotPrimitive),isNotPropertyKey:k(Qs.isNotPropertyKey),isPrimitive:k(Qs.isPrimitive),isPropertyKey:k(Qs.isPropertyKey)}},ec={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`))throw new O(`'${y(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`)throw new O(`'${y(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new O(`'${y(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new O(`'${y(e)}' is a Promise.`,t)}},tc={assert:ec,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`)},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`))throw new O(`'${y(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`)throw new O(`'${y(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new O(`'${y(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new O(`'${y(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`)return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:k(ec.isPromiseLike,!0),isNotPromiseLike:k(ec.isNotPromiseLike,!0),isPromise:k(ec.isPromise,!0),isNotPromise:k(ec.isNotPromise,!0)}},nc={matches(e,t,n){if(!t.test(e))throw new O(`'${e}' does not match ${t}`,n)},mismatches(e,t,n){if(t.test(e))throw new O(`'${e}' matches ${t}`,n)}},rc={assert:nc,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,n){if(!t.test(e))throw new O(`'${e}' does not match ${t}`,n);return e},mismatches(e,t,n){if(t.test(e))throw new O(`'${e}' matches ${t}`,n);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:k(nc.matches,!0),mismatches:k(nc.mismatches,!0)}},ic={isArray(e,t){if(!Array.isArray(e))throw new O(`'${y(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!=`bigint`)throw new O(`'${y(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!=`boolean`)throw new O(`'${y(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!=`function`)throw new O(`'${y(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new O(`'${y(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!=`number`||isNaN(e))throw new O(`'${y(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!=`object`||!e)throw new O(`'${y(e)}' is not a non-null object.`,t)},isPlainObject(e,t){let n=Object.getPrototypeOf(e);if(typeof e!=`object`||!e||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new O(`'${y(e)}' is not a plain object.`,t)},isString(e,t){if(typeof e!=`string`)throw new O(`'${y(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!=`symbol`)throw new O(`'${y(e)}' is not a symbol.`,t)},isUndefined(e,t){if(e!==void 0)throw new O(`'${y(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new O(`'${y(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e==`bigint`)throw new O(`'${y(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e==`boolean`)throw new O(`'${y(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e==`function`)throw new O(`'${y(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new O(`'${y(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e==`number`&&!isNaN(e))throw new O(`'${y(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e==`object`&&e)throw new O(`'${y(e)}' is a non-null object.`,t)},isNotPlainObject(e,t){let n=Object.getPrototypeOf(e);if(!(typeof e!=`object`||!e||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new O(`'${y(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e==`string`)throw new O(`'${y(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e==`symbol`)throw new O(`'${y(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(e===void 0)throw new O(`'${y(e)}' is a undefined.`,t)}},ac={assert:ic,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e==`bigint`},isBoolean(e){return typeof e==`boolean`},isFunction(e){return typeof e==`function`},isNull(e){return e===null},isNumber(e){return typeof e==`number`&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e==`object`&&!!e},isPlainObject(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e==`string`},isSymbol(e){return typeof e==`symbol`},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!=`bigint`},isNotBoolean(e){return typeof e!=`boolean`},isNotFunction(e){return typeof e!=`function`},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!=`number`||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!=`object`||!e},isNotPlainObject(e){if(typeof e!=`object`||!e)return!0;let t=Object.getPrototypeOf(e);return!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!=`string`},isNotSymbol(e){return typeof e!=`symbol`},isNotUndefined(e){return e!==void 0}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new O(`'${y(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!=`bigint`)throw new O(`'${y(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!=`boolean`)throw new O(`'${y(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!=`function`)throw new O(`'${y(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new O(`'${y(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!=`number`||isNaN(e))throw new O(`'${y(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!=`object`||!e)throw new O(`'${y(e)}' is not a non-null object.`,t);return e},isPlainObject(e,t){let n=Object.getPrototypeOf(e);if(typeof e!=`object`||!e||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new O(`'${y(e)}' is not a plain object.`,t);return e},isString(e,t){if(typeof e!=`string`)throw new O(`'${y(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!=`symbol`)throw new O(`'${y(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(e!==void 0)throw new O(`'${y(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new O(`'${y(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e==`bigint`)throw new O(`'${y(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e==`boolean`)throw new O(`'${y(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e==`function`)throw new O(`'${y(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new O(`'${y(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e==`number`&&!isNaN(e))throw new O(`'${y(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e==`object`&&e)throw new O(`'${y(e)}' is a non-null object.`,t);return e},isNotPlainObject(e,t){let n=Object.getPrototypeOf(e);if(typeof e!=`object`||!e||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new O(`'${y(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e==`string`)throw new O(`'${y(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e==`symbol`)throw new O(`'${y(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(e===void 0)throw new O(`'${y(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e==`bigint`)return e},isBoolean(e){if(typeof e==`boolean`)return e},isFunction(e){if(typeof e==`function`)return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e==`number`&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e==`object`&&e)return e},isPlainObject(e){if(typeof e!=`object`||!e)return;let t=Object.getPrototypeOf(e);if((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e==`string`)return e},isSymbol(e){if(typeof e==`symbol`)return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!=`bigint`)return e},isNotBoolean(e){if(typeof e!=`boolean`)return e},isNotFunction(e){if(typeof e!=`function`)return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e==`number`&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!=`object`||!e)return e},isNotPlainObject(e){if(typeof e!=`object`||!e)return e;let t=Object.getPrototypeOf(e);if(!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!=`string`)return e},isNotSymbol(e){if(typeof e!=`symbol`)return e}},waitUntil:{isArray:k(ic.isArray),isBigInt:k(ic.isBigInt),isBoolean:k(ic.isBoolean),isFunction:k(ic.isFunction),isNull:k(ic.isNull),isNumber:k(ic.isNumber),isObject:k(ic.isObject),isPlainObject:k(ic.isPlainObject),isString:k(ic.isString),isSymbol:k(ic.isSymbol),isUndefined:k(ic.isUndefined),isNotArray:k(ic.isNotArray),isNotBigInt:k(ic.isNotBigInt),isNotBoolean:k(ic.isNotBoolean),isNotFunction:k(ic.isNotFunction),isNotNull:k(ic.isNotNull),isNotNumber:k(ic.isNotNumber),isNotObject:k(ic.isNotObject),isNotPlainObject:k(ic.isNotPlainObject),isNotString:k(ic.isNotString),isNotSymbol:k(ic.isNotSymbol),isNotUndefined:k(ic.isNotUndefined)}},oc;(function(e){e.Assert=`assert`,e.AssertWrap=`assert-wrap`,e.CheckWrap=`check-wrap`,e.Check=`check`})(oc||={});function sc(e,t,n){lc(e,{noError:`No error.`,notInstance:`'${y(e)}' is not an error instance.`},t,n)}function cc(e,t,n){lc(e,{noError:`No Error was thrown.`,notInstance:`Thrown value '${y(e)}' is not an error instance.`},t,n)}function lc(e,t,n,r){if(!e)throw new O(t.noError,r);if(!(e instanceof Error))throw new O(t.notInstance,r);if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){let t=e.constructor.name;throw new O(`Error constructor '${t}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){let t=Ne(e);if(typeof n.matchMessage==`string`){if(!Co(t,n.matchMessage))throw new O(`Error message\n\n'${t}'\n\ndoes not contain\n\n'${n.matchMessage}'.`,r)}else if(!t.match(n.matchMessage))throw new O(`Error message\n\n'${t}'\n\ndoes not match RegExp\n\n'${n.matchMessage}'.`,r)}}function uc(e,t){if(!e||!(e instanceof Error)||t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){let n=Ne(e);if(typeof t.matchMessage==`string`){if(!Co(n,t.matchMessage))return!1}else if(!n.match(t.matchMessage))return!1}return!0}function dc(e,t,n,r){let i;try{let a=t instanceof Promise?t:t();if(a instanceof Promise)return new Promise(async(t,o)=>{try{await a}catch(e){i=Fe(e)}try{cc(i,n,r),e===oc.Assert?t():e===oc.Check?t(!0):t(i)}catch(n){e===oc.CheckWrap?t(void 0):e===oc.Check?t(!1):o(Fe(n))}})}catch(e){i=Fe(e)}try{return cc(i,n,r),e===oc.Check?!0:e===oc.Assert?void 0:i}catch(t){if(e===oc.CheckWrap)return;if(e===oc.Check)return!1;throw t}}function fc(e,t,n){return dc(oc.Assert,e,t,n)}function pc(e,t){return dc(oc.Check,e,t)}function mc(e,t,n){return dc(oc.AssertWrap,e,t,n)}function hc(e,t,n){return dc(oc.CheckWrap,e,t,n)}var gc=k(sc);function _c(e,t,n,r){let i=typeof e==`function`||e instanceof Promise?void 0:e,a=i?t:e,o=typeof n==`object`?r:n,s=typeof n==`object`?n:t;if(typeof a!=`function`)throw TypeError(`Callback is not a function, got '${y(a)}'`);return gc(i,async()=>{try{await a();return}catch(e){return Fe(e)}},s,o)}var vc={assert:{throws:fc,isError:sc},check:{throws:pc,isError(e,t){return uc(e,t)}},assertWrap:{throws:mc,isError(e,t,n){return lc(e,{noError:`No error.`,notInstance:`'${y(e)}' is not an error instance.`},t,n),e}},checkWrap:{throws:hc,isError(e,t){if(uc(e,t))return e}},waitUntil:{throws:_c,isError:k(sc)}},yc=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,bc={isUuid(e,t){if(!String(e).match(yc))throw new O(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(yc))throw new O(`'${String(e)}' is a UUID.`,t)}},xc={assert:bc,check:{isUuid(e){return!!String(e).match(yc)},isNotUuid(e){return!String(e).match(yc)}},assertWrap:{isUuid(e,t){if(!String(e).match(yc))throw new O(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(yc))throw new O(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(yc))return e},isNotUuid(e){if(!String(e).match(yc))return e}},waitUntil:{isUuid:k(bc.isUuid),isNotUuid:k(bc.isNotUuid)}},Sc={...Rs.assert,...Ao.assert,...Io.assert,...Ho.assert,...Bo.assert,...Ds.assert,...ks.assert,...qo.assert,...Ns.assert,...Ls.assert,...Bs.assert,...Hs.assert,...Zs.assert,...$s.assert,...tc.assert,...rc.assert,...ac.assert,...xs.assert,...vc.assert,...xc.assert,...Ts.assert},Cc=[Ao,Io,Ho,Bo,Ds,ks,qo,Ns,Ls,Rs,Bs,Hs,Zs,$s,tc,rc,ac,xs,vc,xc,Ts],wc=Object.assign({},...Cc.map(e=>e.check)),A=Object.assign(function(e){return!!e},wc);function Tc(e,t,n){return Ec(e,t,n,new Set)}function Ec(e,t,n,r){if(e=Dc(e),t=Dc(t),A.isObject(e)&&A.isObject(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),!Ec(De(e).sort(),De(t).sort(),n,r))return!1;let i=!1,a=De(e).map(a=>{let o=Ec(e[a],t[a],n,r);return A.isPromise(o)&&(i=!0),o});return Oc(i,a)}else if(A.isArray(e)&&A.isArray(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),e.length!==t.length)return!1;let i=!1,a=e.map((e,a)=>{let o=Ec(e,t[a],n,r);return A.isPromise(o)&&(i=!0),o});return Oc(i,a)}else return n(e,t)}function Dc(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function Oc(e,t){return e?new Promise(async(e,n)=>{try{e((await Promise.all(t)).every(A.isTrue))}catch(e){n(Fe(e))}}):t.every(A.isTrue)}var kc=Object.assign({},...Cc.map(e=>e.assertWrap)),Ac=Object.assign(function(e,t){if(!e)throw new O(`Assertion failed.`,t);return e},kc);function jc(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}var Mc={assert:{tsType:jc},assertWrap:{tsType:void 0},check:{tsType:void 0},checkWrap:{tsType:void 0},waitUntil:{tsType:void 0}},Nc={fail:e=>{throw new O(`Failure triggered.`,e)}},Pc={...Mc.assert,...Sc,...Nc},Fc=Object.assign(function(e,t){if(!e)throw new O(`Assertion failed.`,t)},Pc),Ic=Object.assign({},...Cc.map(e=>e.checkWrap)),Lc=Object.assign(function(e){if(e)return e},Ic);function Rc(e,t){return A.hasKey(e,`entryType`)&&e.entryType===t}function zc(e,t){return e.controlType===t}var Bc;(function(e){e.Checkbox=`checkbox`,e.Color=`color`,e.Custom=`custom`,e.Dropdown=`dropdown`,e.Hidden=`hidden`,e.Number=`number`,e.Text=`text`})(Bc||={});var Vc=Symbol(`any-type`),Hc={[Bc.Checkbox]:!1,[Bc.Color]:``,[Bc.Custom]:void 0,[Bc.Dropdown]:``,[Bc.Hidden]:Vc,[Bc.Number]:0,[Bc.Text]:``};function Uc(e,t){if(!e)return[];let n=[];return Object.entries(e).forEach(([e,r])=>{if(r.controlType===Bc.Custom)return;let i=Hc[r.controlType];i!==Vc&&(typeof i!=typeof r.initValue&&n.push(Error(`Control '${e}' in page '${t}' has invalid initValue '${r.initValue}': expected initValue of type ${typeof i} because the control is of type ${r.controlType}.`)),e||n.push(Error(`'${t}' cannot have an empty control name.`)))}),n}function Wc(e,t,n){let r=t;if(e.has(r))return e.get(r);{let t=n();return A.isPromise(t)?new Promise(async(n,i)=>{try{let i=await t;e.set(r,i),n(i)}catch(e){i(Fe(e))}}):(e.set(r,t),t)}}function Gc(e,t,n){if(t in e)return e[t];{let r=n();return A.isPromise(r)?new Promise(async(n,i)=>{try{let i=await r;e[t]=i,n(i)}catch(e){i(Fe(e))}}):(e[t]=r,r)}}function Kc(e){return De(e).map(t=>[t,e[t]])}function qc(e){return Object.fromEntries(e)}function Jc(e,t,n){return e.reduce((e,r,i,a)=>{let o=t(r,i,a);return n(o,r,i,a)&&e.push(o),e},[])}function Yc(e,t,n={}){try{let n=!1,r=e.map((e,r,i)=>{let a=t(e,r,i);if(a instanceof Promise)return n=!0,a;if(a)return[a.key,a.value]}).filter(A.isTruthy);return n?new Promise(async(e,t)=>{try{e(qc(Jc(await Promise.all(r),e=>{if(e)return Array.isArray(e)?e:[e.key,e.value]},A.isTruthy)))}catch(e){t(Fe(e))}}):qc(r)}catch(e){throw Fe(e)}}function Xc(e,t){let n=[],r=!1;for(let i=0;i<e;i++){let e=t(i);A.isPromise(e)&&(r=!0),n.push(e)}return r?Promise.all(n):n}function Zc(e){return Array.isArray(e)?e:[e]}function Qc({min:e,max:t}){let{min:n,max:r}=Re({min:Math.floor(e),max:Math.floor(t)}),i=r-n+1,a=Math.ceil(Math.ceil(Math.log2(i))/8);if(a>65e3)throw RangeError(`Cannot create a random integer so large. ({min: ${n}, max: ${r}})`);let o=Math.floor(256**a/i)*i,s=new Uint8Array(a),c;do crypto.getRandomValues(s),c=s.reduce((e,t,n)=>e+t*256**n,0);while(c>=o);return n+c%i}var $c=`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`.split(``);function el(e=16){let t=``;for(let n=0;n<e;n++){let e=Qc({min:0,max:$c.length-1});t+=$c[e]}return t}function tl(e){return A.isLengthAtLeast(e,1)?e.length===1?e[0]:Error(e.map(e=>Ne(e).trim()).join(`
`)):Error()}function nl(e,t={}){try{let n=e();return n instanceof Promise?n.catch(e=>t.handleError?t.handleError(e):A.hasKey(t,`fallbackValue`)?t.fallbackValue:Fe(e)):n}catch(e){return t.handleError?t.handleError(e):A.hasKey(t,`fallbackValue`)?t.fallbackValue:Fe(e)}}function rl(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error(`Failed to JSON copy for:`,e),Ie(t,`Failed JSON copy`)}}var il;(function(e){e.Standard=`stdout`,e.Error=`stderr`})(il||={});var al;(function(e){e.Bold=`bold`,e.Debug=`debug`,e.Error=`error`,e.Faint=`faint`,e.Info=`info`,e.Mutate=`mutate`,e.NormalWeight=`normalWeight`,e.Plain=`plain`,e.Reset=`reset`,e.Success=`success`,e.Warning=`warning`})(al||={});async function ol(){return await xe({async[ye.Node](){let e=(await r(async()=>{let{default:e}=await import(`./ansi-styles-BNQ5W5ta.js`);return{default:e}},[])).default;return{[al.Bold]:e.bold.open,[al.Debug]:e.blueBright.open,[al.Error]:e.red.open,[al.Faint]:e.gray.open,[al.Info]:e.cyan.open,[al.Mutate]:e.magenta.open,[al.NormalWeight]:`\x1B[22m`,[al.Plain]:``,[al.Reset]:e.reset.open,[al.Success]:e.green.open,[al.Warning]:e.yellow.open}},[ye.Web](){return Promise.resolve({[al.Bold]:`font-weight: bold`,[al.Debug]:`color: blue`,[al.Error]:`color: red`,[al.Faint]:`color: grey`,[al.Info]:`color: teal`,[al.Mutate]:`color: magenta`,[al.NormalWeight]:``,[al.Plain]:``,[al.Reset]:``,[al.Success]:`color: green`,[al.Warning]:`color: orange`})}})}var sl=await ol(),cl={[al.Bold]:{colors:[sl.bold],logType:il.Standard},[al.Debug]:{colors:[sl.debug],logType:il.Standard},[al.Faint]:{colors:[sl.faint],logType:il.Standard},[al.Info]:{colors:[sl.info],logType:il.Standard},[al.Mutate]:{colors:[sl.mutate,sl.bold],logType:il.Standard},[al.NormalWeight]:{colors:[sl.normalWeight],logType:il.Standard},[al.Plain]:{colors:[],logType:il.Standard},[al.Reset]:{colors:[sl.reset],logType:il.Standard},[al.Success]:{colors:[sl.success,sl.bold],logType:il.Standard},[al.Error]:{colors:[sl.error,sl.bold],logType:il.Error},[al.Warning]:{colors:[sl.warning],logType:il.Error}};function ll({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function ul({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function dl(e,t){try{let n=!1,r=Kc(e).map(([r,i])=>{let a=t(r,i,e);if(a instanceof Promise)return n=!0,a;if(a)return[a.key,a.value]}).filter(A.isTruthy);return n?new Promise(async(e,t)=>{try{e(qc(Jc(await Promise.all(r),e=>{if(e)return Array.isArray(e)?e:[e.key,e.value]},A.isTruthy)))}catch(e){t(Fe(e))}}):qc(r)}catch(e){throw Fe(e)}}function fl(e,t){return dl(e,(n,r)=>{let i=r,a=t(r,e);return a instanceof Promise?a.then(e=>({key:i,value:e})):{key:i,value:a}})}function pl(e,...t){let n={...e};return t.forEach(e=>{e&&Kc(e).forEach(([e,t])=>{t!=null&&(n[e]=t)})}),n}function ml(e,t){return e.match(t)??[]}function hl(e){return gl({value:e,suffix:`px`})}function gl({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function _l({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function vl(){return await xe({async[ye.Node](){let{inspect:e}=await r(async()=>{let{inspect:e}=await import(`node:util`);return{inspect:e}},[]);return({args:t,colorKey:n,options:r})=>{let i=t.map(t=>typeof t==`string`?t:e(t));return{text:[r.omitColors?``:r.colorConfig[n].colors.join(``),i.join(`
`),r.omitColors?``:r.colorConfig[al.Reset].colors.join(``)].join(``),css:void 0}}},[ye.Web](){return({args:e,colorKey:t,options:n})=>{let r=n.omitColors?void 0:Jc(n.colorConfig[t].colors,e=>_l({value:e,suffix:`;`}),A.isTruthy).join(`; `);return{text:[e.map(e=>typeof e==`string`?e:e instanceof Error?Ne(e):y(e)).join(`
`),n.omitColors?``:n.colorConfig[al.Reset].colors.join(``)].join(``),css:r}}}})}var yl=await vl(),bl={colorConfig:cl,omitColors:!1},xl=Sl({[il.Error](){},[il.Standard](){}});function Sl(e,t){let n=pl(bl,t);function r(t){e[n.colorConfig[t.colorKey].logType](yl({...t,options:n}))}let i=fl(al,e=>(...t)=>r({args:t,colorKey:e}));return{...i,if(e){return e?i:xl}}}var Cl=Sl(x(ye.Node)?{[il.Error]({text:e}){process.stderr.write(e+`
`)},[il.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[il.Error]({text:e,css:t}){console.error(ll({value:e,prefix:`%c`}),t)},[il.Standard]({text:e,css:t}){console.log(ll({value:e,prefix:`%c`}),t)}});function wl(e,{digits:t}){if(t==null)return e;let n=10**t,r=e*n;return Number((Math.round(r)/n).toFixed(t))}function Tl({searchIn:e,searchFor:t,caseSensitive:n,includeLength:r}){let i=yo(xo(t,{caseSensitive:n}),`g`),a=[],o=[];return e.replace(i,(...n)=>{let r=n[n.length-2];if(typeof r!=`number`)throw TypeError(`Match index "${r}" is not a number. Searching for "${t}" in "${e}".`);let i=n[0];if(typeof i!=`string`)throw TypeError(`regExpMatch should've been a string but was ${typeof i}!`);o.push({index:r,length:i.length}),a.push(r);let s=n[0];if(typeof s!=`string`)throw TypeError(`Original match when searching for "${t}" in "${e}" at index ${r} is not a string.`);return s}),r?o:a}function El(e,t,{caseSensitive:n}){let r=Tl({searchIn:e,searchFor:t,caseSensitive:n,includeLength:!0}),i=xo(t,{caseSensitive:n});return e.split(i).reduce((t,n,i)=>{let a=r[i],o=t.concat(n);if(a){let t=e.slice(a.index,a.index+a.length);return o.concat(t)}else return o},[])}function Dl(e,t){return e.split(t)}function Ol(e,t){let{min:n,max:r}=Re(t);if(t.takeOverflow){let t=r-n+1,i=(e-n)%t;return i<0?n+t+i:n+i}else return e>r?n:e<n?r:e}function kl(e){return e}function Al(e,t){let n=!1,r=De(e).reduce((r,i)=>{let a=t(i,e[i],e);return a instanceof Promise&&(n=!0),r[i]=a,r},{});return n?new Promise(async(e,t)=>{try{await Promise.all(De(r).map(async e=>{r[e]=await r[e]})),e(r)}catch(e){t(Fe(e))}}):r}function jl(e,t){return qc(Kc(e).filter(([n,r])=>t(n,r,e)))}function Ml(e,t){return jl(e,e=>t.includes(e))}function Nl(e){return De(e).map(t=>e[t])}function Pl(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g,` `).replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g,` `)}var Fl;(function(e){e.Upper=`upper`,e.Lower=`lower`})(Fl||={});var Il={firstLetterCase:Fl.Lower};function Ll(e,t){if(!e.length)return``;let n=e[0];return(t===Fl.Upper?n.toUpperCase():n.toLowerCase())+e.slice(1)}function Rl(e,t={}){let n=e.toLowerCase();return n.length?Ll(n.replace(/^-+/,``).replace(/-{2,}/g,`-`).replace(/-(?:.|$)/g,e=>{let t=e[1];return t?t.toUpperCase():``}),pl(Il,t).firstLetterCase):``}function zl(e,t=`and`){if(e.length<2)return e.join(``);let n=e.length>2?`, `:` `;return`${e.slice(0,-1).join(n)}${n}${t} ${e[e.length-1]}`}function Bl({value:e,wrapper:t}){return ll({value:gl({value:e,suffix:t}),prefix:t})}function Vl(){function e(e){return class extends CustomEvent{static type=e;constructor(t){super(e,t)}}}return e}function Hl(e,t){let n=t??Event;return class extends n{static type=e;constructor(t){super(e,t)}}}var Ul=class{listeners={};universalListeners=new Map;getListenerCount(){return Nl(this.listeners).map(e=>e.size||0).reduce((e,t)=>e+t,0)+this.universalListeners.size}listenToAll(e,t={}){let n=()=>this.universalListeners.delete(e)||!1;function r(r,i){t.once&&n(),e(r,i)}return this.universalListeners.set(e,{listener:r,removeListener:n}),n}removeUniversalListener(e){return!!this.universalListeners.get(e)?.removeListener()}listen(e,t,n={}){let r=A.isString(e)?e:e.type,i=()=>this.listeners[r]?.delete(t)||!1;function a(e,r){n.once&&i(),t(e,r)}return Gc(this.listeners,r,()=>new Map).set(t,{listener:a,removeListener:i}),i}removeListener(e,t){let n=A.isString(e)?e:e.type,r=this.listeners[n];if(!r)return!1;let i=r.get(t);return i?i.removeListener():!1}dispatch(e){let t=this.listeners[e.type];e.target??Object.defineProperty(e,`target`,{writable:!1,value:this});let n=t?.size||0;return t?.forEach(t=>{t.listener(e,t.removeListener)}),this.universalListeners.forEach(t=>{t.listener(e,t.removeListener)}),n+this.universalListeners.size}removeAllListeners(){let e=Nl(this.listeners).reduce((e,t)=>{let n=t.size||0;return t.clear(),e+n},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),e}destroy(){this.removeAllListeners()}},Wl=class extends Ul{};function Gl(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function Kl(e,t,n){return Gl(globalThis,e,t,n)}function ql(e,t){let n=Jl(e.title);return e.parent?[...ql(e.parent,!1),Jl(e.parent.title)].concat(t?[n]:[]):t?[n]:[]}function Jl(e){return Pl(e).toLowerCase().replaceAll(/\s/g,`-`)}function Yl({searchFor:e,searchIn:t}){return e.every((e,n)=>t[n]===e)}var Xl=/[/?#&=]/;function Zl(e){let t=e.match(Xl);return e.trim()?Jl(e)?t?Error(`Book page title has invalid character '${t[0]}'.`):void 0:Error(`Book page title resolved to empty breadcrumb.`):Error(`Cannot define an element-book page with an empty title.`)}var Ql={[a.ElementExample]:()=>[],[a.Page]:e=>[Zl(e.title),...Uc(e.controls,e.title)].filter(A.isTruthy),[a.Root]:()=>[]},$l=`_isBookTreeNode`,eu=new Map;function tu(e){return eu.get(e)}function nu(e,t){Wc(eu,e,()=>t)}function ru(e,t){return iu(e)&&e.entry.entryType===t}function iu(e){return!!(A.hasKeys(e,[`_isBookTreeNode`,`entry`])&&e._isBookTreeNode)}function au(){return{[$l]:!0,entry:{entryType:a.Root,title:``,parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:``,fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function ou({entries:e,debug:t}){let n=tu(e);if(n)return n;let r=au();e.forEach(e=>cu({tree:r,newEntry:e,debug:t,manuallyAdded:!0}));let i={tree:r,flattenedNodes:uu(r)};return nu(e,i),t&&console.info(`element-book tree:`,r),i}function su(e,t,n){if(!t.parent)return e;let r=lu(t,e);if(r)return r;n&&console.info(`parent of ${t.title} not found in tree; adding it now.`),cu({tree:e,newEntry:t.parent,debug:n,manuallyAdded:!1});let i=lu(t,e);if(!i)throw Error(`Failed to find node despite having just added it: ${ql(t,!1).join(` > `)}`);return i}function cu({tree:e,newEntry:t,debug:n,manuallyAdded:r}){let i=Ql[t.entryType](t);t.errors.push(...i);let o=su(e,t,n),s=Jl(t.title),c=o.children[s];if(c){if(r){if(c.manuallyAdded){c.entry.errors.push(Error(`Cannot create duplicate '${s}'${o.urlBreadcrumb?` in parent '${o.urlBreadcrumb}'.`:``}`));return}c.manuallyAdded=!0}return}let l={[$l]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...o.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:r};o.children[s]=l,Rc(t,a.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(t=>cu({tree:e,newEntry:t,debug:n,manuallyAdded:r}))}function lu(e,t){let n=iu(e)?e.fullUrlBreadcrumbs.slice(0,-1):ql(e,!1);if(n.length)return n.reduce((e,t)=>{if(e)return e.children[t]},t)}function uu(e){return[e,...e.entry.errors.length?[]:Object.values(e.children).map(e=>uu(e))].flat()}function du(e,t){return fu(e,[``,...t],void 0)}function fu(e,t,n){let r=t.slice(1),i=r[0];!i&&n&&(e.controls=n);let a=e.children[i||``],o=a&&fu(a,r,n);return{...e.controls,...o}}function pu(e,t,n){let r={...e};return fu(r,[``,...t],n),r}function mu(e,t){let n=t?.controls||(ru(e,a.Page)?Al(e.entry.controls,(e,t)=>t.initValue):{});return{children:Al(e.children,(e,n)=>mu(n,t?.children?.[n.urlBreadcrumb])),controls:n}}function hu(e){let t={...e,entryType:a.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},n=new Set;return e.defineExamples&&e.defineExamples({defineExample(r){let i={...r,isVertical:t.useVerticalExamples,entryType:a.ElementExample,parent:t,descriptionParagraphs:r.descriptionParagraphs??[],errors:[n.has(r.title)&&Error(`Example title '${r.title}' in page '${e.title}' is already taken.`),Zl(r.title)].filter(A.isTruthy)};n.add(r.title),t.elementExamples[Jl(i.title)]=i}}),t}var gu;(function(e){e.Search=`search`,e.Book=`book`})(gu||={});function _u(e){return e[0]===gu.Book?``:e[1]?decodeURIComponent(e[1]):``}var vu={hash:void 0,paths:[gu.Book],search:void 0},yu=new class e{static cssPropertyDefinitionSupported=!!(globalThis.CSS&&globalThis.CSS.registerProperty);registry=new Map;constructor(){let t=e.cssPropertyDefinitionSupported?globalThis.CSS.registerProperty.bind(globalThis.CSS):void 0;t&&(globalThis.CSS.registerProperty=e=>(yu.registry.set(e.name,e),t(e)))}canRegisterCssProperty(t){return e.cssPropertyDefinitionSupported&&!this.registry.has(t)}registerProperty(e){if(!this.canRegisterCssProperty(e.name))return!1;try{return globalThis.CSS.registerProperty(e),!0}catch(t){throw Ie(t,`Failed to define CSS var: ${y(e,4)}\n\n`)}}},bu=globalThis,xu=bu.ShadowRoot&&(bu.ShadyCSS===void 0||bu.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,Su=Symbol(),Cu=new WeakMap,wu=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Su)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(xu&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Cu.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Cu.set(t,e))}return e}toString(){return this.cssText}},Tu=e=>new wu(typeof e==`string`?e:e+``,void 0,Su),Eu=(e,...t)=>new wu(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,Su),Du=(e,t)=>{if(xu)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=bu.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},Ou=xu?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return Tu(t)})(e):e,{is:ku,defineProperty:Au,getOwnPropertyDescriptor:ju,getOwnPropertyNames:Mu,getOwnPropertySymbols:Nu,getPrototypeOf:Pu}=Object,Fu=globalThis,Iu=Fu.trustedTypes,Lu=Iu?Iu.emptyScript:``,Ru=Fu.reactiveElementPolyfillSupport,zu=(e,t)=>e,Bu={toAttribute(e,t){switch(t){case Boolean:e=e?Lu:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Vu=(e,t)=>!ku(e,t),Hu={attribute:!0,type:String,converter:Bu,reflect:!1,useDefault:!1,hasChanged:Vu};Symbol.metadata??=Symbol(`metadata`),Fu.litPropertyMetadata??=new WeakMap;var Uu=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Hu){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Au(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ju(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Hu}static _$Ei(){if(this.hasOwnProperty(zu(`elementProperties`)))return;let e=Pu(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(zu(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(zu(`properties`))){let e=this.properties,t=[...Mu(e),...Nu(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(Ou(e))}else e!==void 0&&t.push(Ou(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Du(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Bu:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Bu:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Vu)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Uu.elementStyles=[],Uu.shadowRootOptions={mode:`open`},Uu[zu(`elementProperties`)]=new Map,Uu[zu(`finalized`)]=new Map,Ru?.({ReactiveElement:Uu}),(Fu.reactiveElementVersions??=[]).push(`2.1.2`);var Wu=globalThis,Gu=e=>e,Ku=Wu.trustedTypes,qu=Ku?Ku.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Ju=`$lit$`,Yu=`lit$${Math.random().toFixed(9).slice(2)}$`,Xu=`?`+Yu,Zu=`<${Xu}>`,Qu=document,$u=()=>Qu.createComment(``),ed=e=>e===null||typeof e!=`object`&&typeof e!=`function`,td=Array.isArray,nd=e=>td(e)||typeof e?.[Symbol.iterator]==`function`,rd=`[ 	
\f\r]`,id=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ad=/-->/g,od=/>/g,sd=RegExp(`>|${rd}(?:([^\\s"'>=/]+)(${rd}*=${rd}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),cd=/'/g,ld=/"/g,ud=/^(?:script|style|textarea|title)$/i,dd=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),fd=Symbol.for(`lit-noChange`),j=Symbol.for(`lit-nothing`),pd=new WeakMap,md=Qu.createTreeWalker(Qu,129);function hd(e,t){if(!td(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return qu===void 0?t:qu.createHTML(t)}var gd=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=id;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===id?c[1]===`!--`?o=ad:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=sd):(ud.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=sd):o=od:o===sd?c[0]===`>`?(o=i??id,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?sd:c[3]===`"`?ld:cd):o===ld||o===cd?o=sd:o===ad||o===od?o=id:(o=sd,i=void 0);let d=o===sd&&e[t+1].startsWith(`/>`)?` `:``;a+=o===id?n+Zu:l>=0?(r.push(s),n.slice(0,l)+Ju+n.slice(l)+Yu+d):n+Yu+(l===-2?t:d)}return[hd(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},_d=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=gd(t,n);if(this.el=e.createElement(l,r),md.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=md.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Ju)){let t=u[o++],n=i.getAttribute(e).split(Yu),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Sd:r[1]===`?`?Cd:r[1]===`@`?wd:xd}),i.removeAttribute(e)}else e.startsWith(Yu)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(ud.test(i.tagName)){let e=i.textContent.split(Yu),t=e.length-1;if(t>0){i.textContent=Ku?Ku.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],$u()),md.nextNode(),c.push({type:2,index:++a});i.append(e[t],$u())}}}else if(i.nodeType===8)if(i.data===Xu)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Yu,e+1))!==-1;)c.push({type:7,index:a}),e+=Yu.length-1}a++}}static createElement(e,t){let n=Qu.createElement(`template`);return n.innerHTML=e,n}};function vd(e,t,n=e,r){if(t===fd)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=ed(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=vd(e,i._$AS(e,t.values),i,r)),t}var yd=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Qu).importNode(t,!0);md.currentNode=r;let i=md.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new bd(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Td(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=md.nextNode(),a++)}return md.currentNode=Qu,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},bd=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=vd(this,e,t),ed(e)?e===j||e==null||e===``?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==fd&&this._(e):e._$litType$===void 0?e.nodeType===void 0?nd(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==j&&ed(this._$AH)?this._$AA.nextSibling.data=e:this.T(Qu.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=_d.createElement(hd(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new yd(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=pd.get(e.strings);return t===void 0&&pd.set(e.strings,t=new _d(e)),t}k(t){td(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O($u()),this.O($u()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Gu(e).nextSibling;Gu(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},xd=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=j}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=vd(this,e,t,0),a=!ed(e)||e!==this._$AH&&e!==fd,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=vd(this,r[n+o],t,o),s===fd&&(s=this._$AH[o]),a||=!ed(s)||s!==this._$AH[o],s===j?e=j:e!==j&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Sd=class extends xd{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}},Cd=class extends xd{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}},wd=class extends xd{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=vd(this,e,t,0)??j)===fd)return;let n=this._$AH,r=e===j&&n!==j||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==j&&(n===j||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Td=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){vd(this,e)}},Ed={M:Ju,P:Yu,A:Xu,C:1,L:gd,R:yd,D:nd,V:vd,I:bd,H:xd,N:Cd,U:wd,B:Sd,F:Td},Dd=Wu.litHtmlPolyfillSupport;Dd?.(_d,bd),(Wu.litHtmlVersions??=[]).push(`3.3.2`);var Od=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new bd(t.insertBefore($u(),e),e,void 0,n??{})}return i._$AI(e),i},kd=globalThis,Ad=class extends Uu{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Od(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return fd}};Ad._$litElement$=!0,Ad.finalized=!0,kd.litElementHydrateSupport?.({LitElement:Ad});var jd=kd.litElementPolyfillSupport;jd?.({LitElement:Ad}),(kd.litElementVersions??=[]).push(`4.2.2`);function Md({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}var Nd;(function(e){e.Url=`<url>`,e.TransformList=`<transform-list>`,e.TransformFunction=`<transform-function>`,e.Time=`<time>`,e.String=`<string>`,e.Resolution=`<resolution>`,e.Percentage=`<percentage>`,e.Number=`<number>`,e.LengthPercentage=`<length-percentage>`,e.Length=`<length>`,e.Integer=`<integer>`,e.Image=`<image>`,e.CustomIdent=`<custom-ident>`,e.Color=`<color>`,e.Angle=`<angle>`,e.Any=`*`})(Nd||={});var Pd;(function(e){e.Space=`+`,e.Comma=`#`})(Pd||={});function Fd(e){return Al(e,(e,t)=>{Id(e);let n=t,r=A.isObject(n)&&!(n instanceof wu)&&A.lacksKey(n,`name`),i=A.isString(n)||A.isNumber(n)||n instanceof wu?String(n):String(n.default),a=A.isString(n)||A.isNumber(n)||n instanceof wu?String(n):String(`initialValue`in n&&n.initialValue||n.default),o=Tu(ll({value:e.replace(/^-+/,``),prefix:`--`})),s={name:o,value:Eu`var(${o}, ${Tu(i)})`,syntax:A.isString(n)||A.isNumber(n)||n instanceof wu?Nd.Any:Ld(`syntax`in n?n.syntax:void 0),default:i},c=String(s.name);if(!a)throw Error(`Initial value for CSS var ${c} cannot be empty.`);return r&&yu.registerProperty({inherits:!0,name:c,initialValue:a,syntax:s.syntax})&&globalThis.document?.documentElement&&Md({forCssVar:s,onElement:globalThis.document.documentElement,toValue:i}),s})}function Id(e){try{if(!A.isString(e))throw TypeError(`Must be string.`);if(!e.includes(`-`))throw Error(`Must have at least one dash (-).`);if(e.toLowerCase()!==e)throw Error(`Must be lowercase.`)}catch(t){throw Error(Pe(`Invalid CSS var name.`,t,`Got '${y(e)}'`))}}function Ld(e){return e?A.isString(e)?e:e.union?e.union.map(e=>Ld(e)).join(` | `):e.list?`${Ld(e.list.values)}${e.list.separator}`:e.raw:Nd.Any}var Rd=Fd({"element-book-nav-hover-background-color":`magenta`,"element-book-nav-hover-foreground-color":`magenta`,"element-book-nav-active-background-color":`magenta`,"element-book-nav-active-foreground-color":`magenta`,"element-book-nav-selected-background-color":`magenta`,"element-book-nav-selected-foreground-color":`magenta`,"element-book-accent-icon-color":`magenta`,"element-book-page-background-color":`magenta`,"element-book-page-background-faint-level-1-color":`magenta`,"element-book-page-background-faint-level-2-color":`magenta`,"element-book-page-foreground-color":`magenta`,"element-book-page-foreground-faint-level-1-color":`magenta`,"element-book-page-foreground-faint-level-2-color":`magenta`}),zd={nav:{hover:{background:Rd[`element-book-nav-hover-background-color`],foreground:Rd[`element-book-nav-hover-foreground-color`]},active:{background:Rd[`element-book-nav-active-background-color`],foreground:Rd[`element-book-nav-active-foreground-color`]},selected:{background:Rd[`element-book-nav-selected-background-color`],foreground:Rd[`element-book-nav-selected-foreground-color`]}},accent:{icon:Rd[`element-book-accent-icon-color`]},page:{background:Rd[`element-book-page-background-color`],backgroundFaint1:Rd[`element-book-page-background-faint-level-1-color`],backgroundFaint2:Rd[`element-book-page-background-faint-level-2-color`],foreground:Rd[`element-book-page-foreground-color`],foregroundFaint1:Rd[`element-book-page-foreground-faint-level-1-color`],foregroundFaint2:Rd[`element-book-page-foreground-faint-level-2-color`]}};function Bd(e,t){Ud(e,t,zd)}function Vd(e){return A.hasKey(e,`_$cssResult$`)}function Hd(e){return A.hasKeys(e,[`name`,`value`,`default`])&&A.isString(e.default)&&Vd(e.name)&&Vd(e.value)}function Ud(e,t,n){Object.entries(t).forEach(([t,r])=>{let i=n[t];if(!i)throw Error(`no nestedCssVar at key '${t}'`);if(Vd(r)){if(!Hd(i))throw Error(`got a CSS result at '${t}' but no CSS var`);Md({forCssVar:i,onElement:e,toValue:String(r)})}else{if(Hd(i))throw Error(`got no CSS result at '${t}' but did find a CSS var`);Ud(e,r,i)}})}function Wd(e,t){let n=e.length,r,i,a=!1,o=!1;Array.isArray(e[0])?r=e:(r=[e],n=r.length,a=!0),Array.isArray(t[0])?i=t:(i=t.length>0?t.map(e=>[e]):[[]],o=!0);let s=i[0].length,c=i[0].map((e,t)=>i.map(e=>e[t])),l=r.map(e=>c.map(t=>{let n=0;if(!Array.isArray(e)){for(let r of t)n+=e*r;return n}for(let r=0;r<e.length;r++)n+=e[r]*(t[r]||0);return n}));return n===1&&a&&(l=l[0]),s===1&&o?n===1&&a?l[0]:l.map(e=>e[0]):l}function Gd(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Kd(e,t,n=[0,0,0]){let r=Gd(e,t[0]),i=Gd(e,t[1]),a=Gd(e,t[2]);return n[0]=r,n[1]=i,n[2]=a,n}function qd(e){return Jd(e)===`string`}function Jd(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||``).toLowerCase()}function Yd(e,{precision:t=16,unit:n}){return Xd(e)?`none`:(e=+Qd(e,t),e+(n??``))}function Xd(e){return e===null}function Zd(e){return Xd(e)?0:e}function Qd(e,t){if(e===0)return 0;let n=~~e,r=0;n&&t&&(r=~~Math.log10(Math.abs(n))+1);let i=10**(t-r);return Math.floor(e*i+.5)/i}function $d(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function ef(e,t,n){return(n-e)/(t-e)}function tf(e,t,n){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(n)||n===null?n:$d(t[0],t[1],ef(e[0],e[1],n))}function nf(e,t,n){return Math.max(Math.min(n,t),e)}function rf(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function af(e,t){return rf(Math.abs(e)**t,e)}function of(e,t){return t===0?0:e/t}function sf(e,t,n=0,r=e.length){for(;n<r;){let i=n+r>>1;e[i]<t?n=i+1:r=i}return n}function cf(e,t){if(e instanceof t)return!0;let n=t.name;for(;e;){let t=Object.getPrototypeOf(e),r=t?.constructor?.name;if(r===n)return!0;if(!r||r===`Object`)return!1;e=t}return!1}var lf=Object.freeze({__proto__:null,bisectLeft:sf,clamp:nf,copySign:rf,interpolate:$d,interpolateInv:ef,isInstance:cf,isNone:Xd,isString:qd,mapRange:tf,multiplyMatrices:Wd,multiply_v3_m3x3:Kd,serializeNumber:Yd,skipNone:Zd,spow:af,toPrecision:Qd,type:Jd,zdiv:of}),uf=new class{add(e,t,n){if(typeof arguments[0]!=`string`){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(e){this[e]=this[e]||[],t&&this[e][n?`unshift`:`push`](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(e){e.call(t&&t.context?t.context:t,t)})}},df={gamut_mapping:`css`,precision:5,deltaE:`76`,verbose:`production`?.toLowerCase()!==`test`,warn:function(e){this.verbose&&globalThis?.console?.warn?.(e)}},ff=class{type;coordMeta;coordRange;range;constructor(e,t){if(typeof e==`object`&&(this.coordMeta=e),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof e==`string`){let t=e.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!t)throw TypeError(`Cannot parse ${e} as a type definition.`);this.type=t.groups.type;let{min:n,max:r}=t.groups;(n||r)&&(this.range=[+n,+r])}}get computedRange(){return this.range?this.range:this.type===`<percentage>`?this.percentageRange():this.type===`<angle>`?[0,360]:null}get unit(){return this.type===`<percentage>`?`%`:this.type===`<angle>`?`deg`:``}resolve(e){if(this.type===`<angle>`)return e;let t=this.computedRange,n=this.coordRange;return this.type===`<percentage>`&&(n??=this.percentageRange()),tf(t,n,e)}serialize(e,t){let n=this.type===`<percentage>`?this.percentageRange(100):this.computedRange,r=this.unit;return e=tf(this.coordRange,n,e),Yd(e,{unit:r,precision:t})}toString(){let e=this.type;if(this.range){let[t=``,n=``]=this.range;e+=`[${t},${n}]`}return e}percentageRange(e=1){let t;return t=this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?[0,1]:[-1,1],[t[0]*e,t[1]*e]}static get(e,t){return cf(e,this)?e:new this(e,t)}},pf=Symbol(`instance`),mf=class e{type;name;spaceCoords;coords;id;alpha;constructor(e,t=e.space){e[pf]=this,this.type=`function`,this.name=`color`,Object.assign(this,e),this.space=t,this.type!==`custom`&&(this.spaceCoords=Object.values(t.coords),this.coords||=this.spaceCoords.map(e=>{let t=[`<number>`,`<percentage>`];return e.type===`angle`&&t.push(`<angle>`),t}),this.coords=this.coords.map((e,t)=>{let n=this.spaceCoords[t];return typeof e==`string`&&(e=e.trim().split(/\s*\|\s*/)),e.map(e=>ff.get(e,n))}))}serializeCoords(e,t,n){return n=e.map((e,t)=>ff.get(n?.[t]??this.coords[t][0],this.spaceCoords[t])),e.map((e,r)=>n[r].serialize(e,t))}coerceCoords(e,t){return Object.entries(this.space.coords).map(([n,r],i)=>{let a=e[i];if(Xd(a)||isNaN(a))return a;let o=t[i],s=this.coords[i].find(e=>e.type==o);if(!s){let e=r.name||n;throw TypeError(`${o??a?.raw??a} not allowed for ${e} in ${this.name}()`)}return a=s.resolve(a),s.range&&(t[i]=s.toString()),a})}canSerialize(){return this.type===`function`||this.serialize}parse(e){return null}static get(t,...n){return!t||cf(t,this)?t:t[pf]?t[pf]:new e(t,...n)}},hf={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]};function gf(e){return Array.isArray(e)?e:hf[e]}function _f(e,t,n,r={}){if(e=gf(e),t=gf(t),!e||!t)throw TypeError(`Missing white point to convert ${e?``:`from`}${!e&&!t?`/`:``}${t?``:`to`}`);if(e===t)return n;let i={W1:e,W2:t,XYZ:n,options:r};if(uf.run(`chromatic-adaptation-start`,i),i.M||(i.W1===hf.D65&&i.W2===hf.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===hf.D50&&i.W2===hf.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),uf.run(`chromatic-adaptation-end`,i),i.M)return Kd(i.XYZ,i.M);throw TypeError(`Only Bradford CAT with white points D50 and D65 supported for now.`)}function vf(e,t){let n={str:String(e)?.trim(),options:t};if(uf.run(`parse-start`,n),n.color)return n.color;n.parsed=Sf(n.str);let r,i=n.options?n.options.parseMeta??n.options.meta:null;if(n.parsed){let t=n.parsed.name,a,o,s=n.parsed.args,c=s.map((e,t)=>n.parsed.argMeta[t]?.type);if(t===`color`){let r=s.shift();c.shift();let i=r.startsWith(`--`)?r.substring(2):`--${r}`,l=[r,i];if(a=N.findFormat({name:t,id:l,type:`function`}),!a){let t,a=r in N.registry?r:i;if(a in N.registry){let n=N.registry[a].formats?.color?.id;n&&(t=`Did you mean ${e.replace(`color(`+r,`color(`+n)}?`)}throw TypeError(`Cannot parse ${n.str}. `+(t??`Missing a plugin?`))}o=a.space,a.id.startsWith(`--`)&&!r.startsWith(`--`)&&df.warn(`${o.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${a.id}) instead of color(${r}).`),r.startsWith(`--`)&&!a.id.startsWith(`--`)&&df.warn(`${o.name} is a standard space and supported in the CSS spec. Use color(${a.id}) instead of prefixed color(${r}).`)}else a=N.findFormat({name:t,type:`function`}),o=a.space;i&&Object.assign(i,{format:a,formatId:a.name,types:c,commas:n.parsed.commas});let l=1;n.parsed.lastAlpha&&(l=n.parsed.args.pop(),i&&(i.alphaType=c.pop()));let u=a.coords.length;if(s.length!==u)throw TypeError(`Expected ${u} coordinates for ${o.id} in ${n.str}), got ${s.length}`);s=a.coerceCoords(s,c),r={spaceId:o.id,coords:s,alpha:l}}else spaceloop:for(let e of N.all)for(let t in e.formats){let a=e.formats[t];if(a.type!==`custom`||a.test&&!a.test(n.str))continue;let o=e.getFormat(a),s=o.parse(n.str);if(s){i&&Object.assign(i,{format:o,formatId:t}),r=s;break spaceloop}}if(!r)throw TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return r.alpha=Xd(r.alpha)?r.alpha:r.alpha===void 0?1:nf(0,r.alpha,1),r}var yf={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},bf={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(yf).join(`|`)})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function xf(e){let t={},n=e.match(bf.unitValue)?.[0],r=t.raw=e;return n?(t.type=n===`%`?`<percentage>`:`<angle>`,t.unit=n,t.unitless=Number(r.slice(0,-n.length)),r=t.unitless*yf[n]):bf.number.test(r)?(r=Number(r),t.type=`<number>`):r===`none`?r=null:r===`NaN`||r===`calc(NaN)`?(r=NaN,t.type=`<number>`):t.type=`<ident>`,{value:r,meta:t}}function Sf(e){if(!e)return;e=e.trim();let t=e.match(bf.function);if(t){let e=[],n=[],r=!1,i=t[1].toLowerCase(),a=t[2].replace(bf.singleArgument,(t,a)=>{let{value:o,meta:s}=xf(a);return(t.startsWith(`/`)||i!==`color`&&e.length===3)&&(r=!0),e.push(o),n.push(s),``});return{name:i,args:e,argMeta:n,lastAlpha:r,commas:a.includes(`,`),rawName:t[1],rawArgs:t[2]}}}function M(e,t){if(Array.isArray(e))return e.map(e=>M(e,t));if(!e)throw TypeError(`Empty color reference`);qd(e)&&(e=vf(e,t));let n=e.space||e.spaceId;return typeof n==`string`&&(e.space=N.get(n)),e.alpha===void 0&&(e.alpha=1),e}var Cf=75e-6,N=class e{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?e.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let n=t.coords??this.base.coords;for(let e in n)`name`in n[e]||(n[e].name=e);this.coords=n,this.white=gf(t.white??this.base.white??`D65`),this.formats=t.formats??{};for(let e in this.formats){let t=this.formats[e];t.type||=`function`,t.name||=e}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace===`self`?this:e.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(e,t)=>!0),this.referred=t.referred,Object.defineProperty(this,`path`,{value:wf(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),uf.run(`colorspace-init-end`,this)}inGamut(e,{epsilon:t=Cf}={}){if(!this.equals(this.gamutSpace))return e=this.to(this.gamutSpace,e),this.gamutSpace.inGamut(e,{epsilon:t});let n=Object.values(this.coords);return e.every((e,r)=>{let i=n[r];if(i.type!==`angle`&&i.range){if(Xd(e))return!0;let[n,r]=i.range;return(n===void 0||e>=n-t)&&(r===void 0||e<=r+t)}return!0})}get isUnbounded(){return Object.values(this.coords).every(e=>!(`range`in e))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let e in this.coords)if(this.coords[e].type===`angle`)return!0;return!1}getFormat(e){if(!e)return null;e===`default`?e=Object.values(this.formats)[0]:typeof e==`string`&&(e=this.formats[e]);let t=mf.get(e,this);return t!==e&&e.name in this.formats&&(this.formats[e.name]=t),t}equals(e){return e?this===e||this.id===e||this.id===e.id:!1}to(t,n){if(arguments.length===1){let e=M(t);[t,n]=[e.space,e.coords]}if(t=e.get(t),this.equals(t))return n;n=n.map(e=>Xd(e)?0:e);let r=this.path,i=t.path,a,o;for(let e=0;e<r.length&&r[e].equals(i[e]);e++)a=r[e],o=e;if(!a)throw Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let e=r.length-1;e>o;e--)n=r[e].toBase(n);for(let e=o+1;e<i.length;e++)n=i[e].fromBase(n);return n}from(t,n){if(arguments.length===1){let e=M(t);[t,n]=[e.space,e.coords]}return t=e.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let e=[];for(let t in this.coords){let n=this.coords[t],r=n.range||n.refRange;e.push(r?.min??0)}return e}static registry={};static get all(){return[...new Set(Object.values(e.registry))]}static register(e,t){if(arguments.length===1&&(t=arguments[0],e=t.id),t=this.get(t),this.registry[e]&&this.registry[e]!==t)throw Error(`Duplicate color space registration: '${e}'`);if(this.registry[e]=t,arguments.length===1&&t.aliases)for(let e of t.aliases)this.register(e,t);return t}static get(t,...n){if(!t||cf(t,this))return t;if(Jd(t)===`string`){let n=e.registry[t.toLowerCase()];if(!n)throw TypeError(`No color space found with id = "${t}"`);return n}if(n.length)return e.get(...n);throw TypeError(`${t} is not a valid color space`)}static findFormat(t,n=e.all){if(!t)return null;typeof t==`string`&&(t={name:t});for(let e of n)for(let[n,r]of Object.entries(e.formats)){r.name??=n,r.type??=`function`;let i=(!t.name||r.name===t.name)&&(!t.type||r.type===t.type);if(t.id){let e=r.ids||[r.id],n=Array.isArray(t.id)?t.id:[t.id];i&&=n.some(t=>e.includes(t))}if(i){let t=mf.get(r,e);return t!==r&&(e.formats[r.name]=t),t}}return null}static resolveCoord(t,n){let r=Jd(t),i,a;if(r===`string`?t.includes(`.`)?[i,a]=t.split(`.`):[i,a]=[,t]:Array.isArray(t)?[i,a]=t:(i=t.space,a=t.coordId),i=e.get(i),i||=n,!i)throw TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(r=Jd(a),r===`number`||r===`string`&&a>=0){let e=Object.entries(i.coords)[a];if(e)return{space:i,id:e[0],index:a,...e[1]}}i=e.get(i);let o=a.toLowerCase(),s=0;for(let e in i.coords){let t=i.coords[e];if(e.toLowerCase()===o||t.name?.toLowerCase()===o)return{space:i,id:e,index:s,...t};s++}throw TypeError(`No "${a}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(`, `)}`)}static DEFAULT_FORMAT={type:`functions`,name:`color`}};function wf(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}var Tf=new N({id:`xyz-d65`,name:`XYZ D65`,coords:{x:{refRange:[0,1],name:`X`},y:{refRange:[0,1],name:`Y`},z:{refRange:[0,1],name:`Z`}},white:`D65`,formats:{color:{ids:[`xyz-d65`,`xyz`]}},aliases:[`xyz`]}),Ef=class extends N{constructor(e){e.coords||={r:{range:[0,1],name:`Red`},g:{range:[0,1],name:`Green`},b:{range:[0,1],name:`Blue`}},e.base||=Tf,e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??=t=>{let n=Kd(t,e.toXYZ_M);return this.white!==this.base.white&&(n=_f(this.white,this.base.white,n)),n},e.fromBase??=t=>(t=_f(this.base.white,this.white,t),Kd(t,e.fromXYZ_M))),e.referred??=`display`,super(e)}};function Df(e,t={}){if(Array.isArray(e))return e.map(e=>Df(e,t));let{cssProperty:n=`background-color`,element:r,...i}=t,a=null;try{return M(e,i)}catch(e){a=e}let{CSS:o,getComputedStyle:s}=globalThis;if(qd(e)&&r&&o&&s&&o.supports(n,e)){let t=r.style[n];e!==t&&(r.style[n]=e);let o=s(r).getPropertyValue(n);if(e!==t&&(r.style[n]=t),o!==e)try{return M(o,i)}catch(e){a=e}else a={message:`Color value is a valid CSS color, but it could not be resolved :(`}}return t.errorMeta&&(t.errorMeta.error=a),null}function Of(e,t){e=M(e);let n=N.get(t,t?.space),r=t?.precision,i;return i=!n||e.space.equals(n)?e.coords.slice():n.from(e),r===void 0?i:i.map(e=>Qd(e,r))}function kf(e,t){if(e=M(e),t===`alpha`)return e.alpha??1;let{space:n,index:r}=N.resolveCoord(t,e.space);return Of(e,n)[r]}function Af(e,t,n,r){return e=M(e),Array.isArray(t)&&([t,n,r]=[e.space,t,n]),t=N.get(t),e.coords=t===e.space?n.slice():t.to(e.space,n),r!==void 0&&(e.alpha=r),e}Af.returns=`color`;function jf(e,t,n){if(e=M(e),arguments.length===2&&Jd(arguments[1])===`object`){let t=arguments[1];for(let n in t)jf(e,n,t[n])}else if(typeof n==`function`&&(n=n(kf(e,t))),t===`alpha`)e.alpha=n;else{let{space:r,index:i}=N.resolveCoord(t,e.space),a=Of(e,r);a[i]=n,Af(e,r,a)}return e}jf.returns=`color`;var Mf=new N({id:`xyz-d50`,name:`XYZ D50`,white:`D50`,base:Tf,fromBase:e=>_f(Tf.white,`D50`,e),toBase:e=>_f(`D50`,Tf.white,e)}),Nf=216/24389,Pf=24/116,Ff=24389/27,If=hf.D50,Lf=new N({id:`lab`,name:`Lab`,coords:{l:{refRange:[0,100],name:`Lightness`},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:If,base:Mf,fromBase(e){let t=e.map((e,t)=>e/If[t]).map(e=>e>Nf?Math.cbrt(e):(Ff*e+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let[t,n,r]=e,i=[];return i[1]=(t+16)/116,i[0]=n/500+i[1],i[2]=i[1]-r/200,[i[0]>Pf?i[0]**3:(116*i[0]-16)/Ff,e[0]>8?((e[0]+16)/116)**3:e[0]/Ff,i[2]>Pf?i[2]**3:(116*i[2]-16)/Ff].map((e,t)=>e*If[t])},formats:{lab:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}});function Rf(e){return typeof e==`number`?(e%360+360)%360:e}function zf(e,t){let[n,r]=t,i=Xd(n),a=Xd(r);if(i&&a)return[n,r];if(i?n=r:a&&(r=n),e===`raw`)return t;n=Rf(n),r=Rf(r);let o=r-n;return e===`increasing`?o<0&&(r+=360):e===`decreasing`?o>0&&(n+=360):e===`longer`?-180<o&&o<180&&(o>0?n+=360:r+=360):e===`shorter`&&(o>180?n+=360:o<-180&&(r+=360)),[n,r]}var Bf=new N({id:`lch`,name:`LCH`,coords:{l:{refRange:[0,100],name:`Lightness`},c:{refRange:[0,150],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},base:Lf,fromBase(e){if(this.ε===void 0){let e=Object.values(this.base.coords)[1].refRange;this.ε=(e[1]-e[0])/1e5}let[t,n,r]=e,i=Math.abs(n)<this.ε&&Math.abs(r)<this.ε,a=i?null:Rf(Math.atan2(r,n)*180/Math.PI);return[t,i?0:Math.sqrt(n**2+r**2),a]},toBase(e){let[t,n,r]=e,i=null,a=null;return Xd(r)||(n=n<0?0:n,i=n*Math.cos(r*Math.PI/180),a=n*Math.sin(r*Math.PI/180)),[t,i,a]},formats:{lch:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <angle>`]}}}),Vf=25**7,Hf=Math.PI,Uf=180/Hf,Wf=Hf/180;function Gf(e){let t=e*e;return t*t*t*e}function Kf(e,t,{kL:n=1,kC:r=1,kH:i=1}={}){[e,t]=M([e,t]);let[a,o,s]=Lf.from(e),c=Bf.from(Lf,[a,o,s])[1],[l,u,d]=Lf.from(t),f=Bf.from(Lf,[l,u,d])[1];c<0&&(c=0),f<0&&(f=0);let p=Gf((c+f)/2),m=.5*(1-Math.sqrt(p/(p+Vf))),h=(1+m)*o,g=(1+m)*u,ee=Math.sqrt(h**2+s**2),_=Math.sqrt(g**2+d**2),te=h===0&&s===0?0:Math.atan2(s,h),ne=g===0&&d===0?0:Math.atan2(d,g);te<0&&(te+=2*Hf),ne<0&&(ne+=2*Hf),te*=Uf,ne*=Uf;let re=l-a,ie=_-ee,ae=ne-te,oe=te+ne,se=Math.abs(ae),ce;ee*_===0?ce=0:se<=180?ce=ae:ae>180?ce=ae-360:ae<-180?ce=ae+360:df.warn(`the unthinkable has happened`);let le=2*Math.sqrt(_*ee)*Math.sin(ce*Wf/2),ue=(a+l)/2,de=(ee+_)/2,fe=Gf(de),pe;pe=ee*_===0?oe:se<=180?oe/2:oe<360?(oe+360)/2:(oe-360)/2;let me=(ue-50)**2,he=1+.015*me/Math.sqrt(20+me),ge=1+.045*de,_e=1;_e-=.17*Math.cos((pe-30)*Wf),_e+=.24*Math.cos(2*pe*Wf),_e+=.32*Math.cos((3*pe+6)*Wf),_e-=.2*Math.cos((4*pe-63)*Wf);let v=1+.015*de*_e,y=30*Math.exp(-1*((pe-275)/25)**2),ve=2*Math.sqrt(fe/(fe+Vf)),ye=-1*Math.sin(2*y*Wf)*ve,b=(re/(n*he))**2;return b+=(ie/(r*ge))**2,b+=(le/(i*v))**2,b+=ye*(ie/(r*ge))*(le/(i*v)),Math.sqrt(b)}var qf=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Jf=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],Yf=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],Xf=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],Zf=new N({id:`oklab`,name:`Oklab`,coords:{l:{refRange:[0,1],name:`Lightness`},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:`D65`,base:Tf,fromBase(e){let t=Kd(e,qf);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),Kd(t,Yf,t)},toBase(e){let t=Kd(e,Xf);return t[0]**=3,t[1]**=3,t[2]**=3,Kd(t,Jf,t)},formats:{oklab:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}});function Qf(e,t){[e,t]=M([e,t]);let[n,r,i]=Zf.from(e),[a,o,s]=Zf.from(t),c=n-a,l=r-o,u=i-s;return Math.sqrt(c**2+l**2+u**2)}var $f=75e-6;function ep(e,t,{epsilon:n=$f}={}){e=M(e),t||=e.space,t=N.get(t);let r=e.coords;return t!==e.space&&(r=t.from(e)),t.inGamut(r,{epsilon:n})}function tp(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function np(e,t,n=`lab`){n=N.get(n);let r=n.from(e),i=n.from(t);return Math.sqrt(r.reduce((e,t,n)=>{let r=i[n];return Xd(t)||Xd(r)?e:e+(r-t)**2},0))}function rp(e,t){return np(e,t,`lab`)}var ip=Math.PI/180;function ap(e,t,{l:n=2,c:r=1}={}){[e,t]=M([e,t]);let[i,a,o]=Lf.from(e),[,s,c]=Bf.from(Lf,[i,a,o]),[l,u,d]=Lf.from(t),f=Bf.from(Lf,[l,u,d])[1];s<0&&(s=0),f<0&&(f=0);let p=i-l,m=s-f,h=a-u,g=o-d,ee=h**2+g**2-m**2,_=.511;i>=16&&(_=.040975*i/(1+.01765*i));let te=.0638*s/(1+.0131*s)+.638,ne;Xd(c)&&(c=0),ne=c>=164&&c<=345?.56+Math.abs(.2*Math.cos((c+168)*ip)):.36+Math.abs(.4*Math.cos((c+35)*ip));let re=s**4,ie=Math.sqrt(re/(re+1900)),ae=te*(ie*ne+1-ie),oe=(p/(n*_))**2;return oe+=(m/(r*te))**2,oe+=ee/ae**2,Math.sqrt(oe)}var op=203,sp=new N({id:`xyz-abs-d65`,cssId:`--xyz-abs-d65`,name:`Absolute XYZ D65`,coords:{x:{refRange:[0,9504.7],name:`Xa`},y:{refRange:[0,1e4],name:`Ya`},z:{refRange:[0,10888.3],name:`Za`}},base:Tf,fromBase(e){return e.map(e=>e*op)},toBase(e){return e.map(e=>e/op)}}),cp=1.15,lp=.66,up=2610/2**14,dp=2**14/2610,fp=3424/2**12,pp=2413/2**7,mp=2392/2**7,hp=1.7*2523/2**5,gp=2**5/(1.7*2523),_p=-.56,vp=16295499532821565e-27,yp=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],bp=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],xp=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Sp=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]],Cp=new N({id:`jzazbz`,name:`Jzazbz`,coords:{jz:{refRange:[0,1],name:`Jz`},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:sp,fromBase(e){let[t,n,r]=e,[i,a,o]=Kd(Kd([cp*t-(cp-1)*r,lp*n-(lp-1)*t,r],yp).map(function(e){return af((fp+pp*af(e/1e4,up))/(1+mp*af(e/1e4,up)),hp)}),xp);return[(1+_p)*i/(1+_p*i)-vp,a,o]},toBase(e){let[t,n,r]=e,[i,a,o]=Kd(Kd([(t+vp)/(1+_p-_p*(t+vp)),n,r],Sp).map(function(e){return 1e4*af((fp-af(e,gp))/(mp*af(e,gp)-pp),dp)}),bp),s=(i+(cp-1)*o)/cp;return[s,(a+(lp-1)*s)/lp,o]},formats:{jzazbz:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}}),wp=new N({id:`jzczhz`,name:`JzCzHz`,coords:{jz:{refRange:[0,1],name:`Jz`},cz:{refRange:[0,.26],name:`Chroma`},hz:{refRange:[0,360],type:`angle`,name:`Hue`}},base:Cp,fromBase:Bf.fromBase,toBase:Bf.toBase,formats:{jzczhz:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <angle>`]}}});function Tp(e,t){[e,t]=M([e,t]);let[n,r,i]=wp.from(e),[a,o,s]=wp.from(t),c=n-a,l=r-o;Xd(i)&&Xd(s)?(i=0,s=0):Xd(i)?i=s:Xd(s)&&(s=i);let u=i-s,d=2*Math.sqrt(r*o)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(c**2+l**2+d**2)}var Ep=3424/4096,Dp=2413/128,Op=2392/128,kp=2610/16384,Ap=2523/32,jp=16384/2610,Mp=32/2523,Np=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],Pp=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Fp=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],Ip=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]],Lp=new N({id:`ictcp`,name:`ICTCP`,coords:{i:{refRange:[0,1],name:`I`},ct:{refRange:[-.5,.5],name:`CT`},cp:{refRange:[-.5,.5],name:`CP`}},base:sp,fromBase(e){return Rp(Kd(e,Np))},toBase(e){return Kd(zp(e),Ip)},formats:{ictcp:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}});function Rp(e){return Kd(e.map(function(e){return((Ep+Dp*(e/1e4)**kp)/(1+Op*(e/1e4)**kp))**Ap}),Pp)}function zp(e){return Kd(e,Fp).map(function(e){return 1e4*(Math.max(e**Mp-Ep,0)/(Dp-Op*e**Mp))**jp})}function Bp(e,t){[e,t]=M([e,t]);let[n,r,i]=Lp.from(e),[a,o,s]=Lp.from(t);return 720*Math.sqrt((n-a)**2+.25*(r-o)**2+(i-s)**2)}function Vp(e,t){[e,t]=M([e,t]);let[n,r,i]=Zf.from(e),[a,o,s]=Zf.from(t),c=n-a,l=2*(r-o),u=2*(i-s);return Math.sqrt(c**2+l**2+u**2)}var Hp=hf.D65,Up=.42,Wp=1/Up,Gp=2*Math.PI,Kp=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],qp=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],Jp=[[460,451,288],[460,-891,-261],[460,-220,-6300]],Yp={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Xp={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},Zp=180/Math.PI,Qp=Math.PI/180;function $p(e,t){return e.map(e=>{let n=af(t*Math.abs(e)*.01,Up);return 400*rf(n,e)/(n+27.13)})}function em(e,t){let n=100/t*27.13**Wp;return e.map(e=>{let t=Math.abs(e);return rf(n*af(t/(400-t),Wp),e)})}function tm(e){let t=Rf(e);t<=Xp.h[0]&&(t+=360);let n=sf(Xp.h,t)-1,[r,i]=Xp.h.slice(n,n+2),[a,o]=Xp.e.slice(n,n+2),s=Xp.H[n],c=(t-r)/a;return s+100*c/(c+(i-t)/o)}function nm(e){let t=(e%400+400)%400,n=Math.floor(.01*t);t%=100;let[r,i]=Xp.h.slice(n,n+2),[a,o]=Xp.e.slice(n,n+2);return Rf((t*(o*r-a*i)-100*r*o)/(t*(o-a)-100*o))}function rm(e,t,n,r,i){let a={};a.discounting=i,a.refWhite=e,a.surround=r;let o=e.map(e=>e*100);a.la=t,a.yb=n;let s=o[1],c=Kd(o,Kp),l=Yp[a.surround],u=l[0];a.c=l[1],a.nc=l[2];let d=(1/(5*a.la+1))**4;a.fl=d*a.la+.1*(1-d)*(1-d)*Math.cbrt(5*a.la),a.flRoot=a.fl**.25,a.n=a.yb/s,a.z=1.48+Math.sqrt(a.n),a.nbb=.725*a.n**-.2,a.ncb=a.nbb;let f=Math.max(Math.min(u*(1-1/3.6*Math.exp((-a.la-42)/92)),1),0);a.dRgb=c.map(e=>$d(1,s/e,f)),a.dRgbInv=a.dRgb.map(e=>1/e);let p=$p(c.map((e,t)=>e*a.dRgb[t]),a.fl);return a.aW=a.nbb*(2*p[0]+p[1]+.05*p[2]),a}var im=rm(Hp,64/Math.PI*.2,20,`average`,!1);function am(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw Error(`Conversion requires one and only one: 'J' or 'Q'`);if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw Error(`Conversion requires one and only one: 'C', 'M' or 's'`);if(!(e.h!==void 0^e.H!==void 0))throw Error(`Conversion requires one and only one: 'h' or 'H'`);if(e.J===0||e.Q===0)return[0,0,0];let n=0;n=e.h===void 0?nm(e.H)*Qp:Rf(e.h)*Qp;let r=Math.cos(n),i=Math.sin(n),a=0;e.J===void 0?e.Q!==void 0&&(a=.25*t.c*e.Q/((t.aW+4)*t.flRoot)):a=af(e.J,1/2)*.1;let o=0;e.C===void 0?e.M===void 0?e.s!==void 0&&(o=4e-4*e.s**2*(t.aW+4)/t.c):o=e.M/t.flRoot/a:o=e.C/a;let s=af(o*(1.64-.29**t.n)**-.73,10/9),c=.25*(Math.cos(n+2)+3.8),l=t.aW*af(a,2/t.c/t.z),u=5e4/13*t.nc*t.ncb*c,d=l/t.nbb,f=23*(d+.305)*of(s,23*u+s*(11*r+108*i));return Kd(em(Kd([d,f*r,f*i],Jp).map(e=>e*1/1403),t.fl).map((e,n)=>e*t.dRgbInv[n]),qp).map(e=>e/100)}function om(e,t){let n=$p(Kd(e.map(e=>e*100),Kp).map((e,n)=>e*t.dRgb[n]),t.fl),r=n[0]+(-12*n[1]+n[2])/11,i=(n[0]+n[1]-2*n[2])/9,a=(Math.atan2(i,r)%Gp+Gp)%Gp,o=.25*(Math.cos(a+2)+3.8),s=af(5e4/13*t.nc*t.ncb*of(o*Math.sqrt(r**2+i**2),n[0]+n[1]+1.05*n[2]+.305),.9)*(1.64-.29**t.n)**.73,c=af(t.nbb*(2*n[0]+n[1]+.05*n[2])/t.aW,.5*t.c*t.z),l=100*af(c,2),u=4/t.c*c*(t.aW+4)*t.flRoot,d=s*c,f=d*t.flRoot,p=Rf(a*Zp),m=tm(p);return{J:l,C:d,h:p,s:50*af(t.c*s/(t.aW+4),1/2),Q:u,M:f,H:m}}var sm=new N({id:`cam16-jmh`,cssId:`--cam16-jmh`,name:`CAM16-JMh`,coords:{j:{refRange:[0,100],name:`J`},m:{refRange:[0,105],name:`Colorfulness`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},base:Tf,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=om(e,im),n=Math.abs(t.M)<this.ε;return[t.J,n?0:t.M,n?null:t.h]},toBase(e){return am({J:e[0],M:e[1],h:e[2]},im)}}),cm=hf.D65,lm=216/24389,um=24389/27;function dm(e){return 116*(e>lm?Math.cbrt(e):(um*e+16)/116)-16}function fm(e){return e>8?((e+16)/116)**3:e/um}function pm(e,t){let[n,r,i]=e,a=[],o=0;if(i===0)return[0,0,0];let s=fm(i);o=i>0?.00379058511492914*i**2+.608983189401032*i+.9155088574762233:9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;let c=0,l=1/0;for(;c<=15;){a=am({J:o,C:r,h:n},t);let e=Math.abs(a[1]-s);if(e<l){if(e<=2e-12)return a;l=e}o-=(a[1]-s)*o/(2*a[1]),c+=1}return am({J:o,C:r,h:n},t)}function mm(e,t){let n=dm(e[1]);if(n===0)return[0,0,0];let r=om(e,hm);return[Rf(r.h),r.C,n]}var hm=rm(cm,200/Math.PI*fm(50),fm(50)*100,`average`,!1),gm=new N({id:`hct`,name:`HCT`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},c:{refRange:[0,145],name:`Colorfulness`},t:{refRange:[0,100],name:`Tone`}},base:Tf,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=mm(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return pm(e,hm)},formats:{color:{id:`--hct`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),_m=Math.PI/180,vm=[1,.007,.0228];function ym(e){e[1]<0&&(e=gm.fromBase(gm.toBase(e)));let t=Math.log(Math.max(1+vm[2]*e[1]*hm.flRoot,1))/vm[2],n=e[0]*_m,r=t*Math.cos(n),i=t*Math.sin(n);return[e[2],r,i]}function bm(e,t){[e,t]=M([e,t]);let[n,r,i]=ym(gm.from(e)),[a,o,s]=ym(gm.from(t));return Math.sqrt((n-a)**2+(r-o)**2+(i-s)**2)}var xm={deltaE76:rp,deltaECMC:ap,deltaE2000:Kf,deltaEJz:Tp,deltaEITP:Bp,deltaEOK:Qf,deltaEOK2:Vp,deltaEHCT:bm};function Sm(e){return Math.max(parseFloat(`1e${(e?Math.floor(Math.log10(Math.abs(e))):0)-2}`),1e-6)}var Cm={hct:{method:`hct.c`,jnd:2,deltaEMethod:`hct`,blackWhiteClamp:{}},"hct-tonal":{method:`hct.c`,jnd:0,deltaEMethod:`hct`,blackWhiteClamp:{channel:`hct.t`,min:0,max:100}}};function wm(e,{method:t=df.gamut_mapping,space:n=void 0,deltaEMethod:r=``,jnd:i=2,blackWhiteClamp:a=void 0}={}){if(e=M(e),qd(arguments[1])?n=arguments[1]:n||=e.space,n=N.get(n),ep(e,n,{epsilon:0}))return e;let o;if(t===`css`)o=Em(e,{space:n});else{if(t!==`clip`&&!ep(e,n)){Object.prototype.hasOwnProperty.call(Cm,t)&&({method:t,jnd:i,deltaEMethod:r,blackWhiteClamp:a}=Cm[t]);let s=Kf;if(r!==``){for(let e in xm)if(`deltae`+r.toLowerCase()===e.toLowerCase()){s=xm[e];break}}i===0&&(i=1e-16);let c=wm(Dm(e,n),{method:`clip`,space:n});if(s(e,c)>i){if(a&&Object.keys(a).length===3){let t=N.resolveCoord(a.channel),n=kf(Dm(e,t.space),t.id);if(Xd(n)&&(n=0),n>=a.max)return Dm({space:`xyz-d65`,coords:hf.D65},e.space);if(n<=a.min)return Dm({space:`xyz-d65`,coords:[0,0,0]},e.space)}let r=N.resolveCoord(t),c=r.space,l=r.id,u=Dm(e,c);u.coords.forEach((e,t)=>{Xd(e)&&(u.coords[t]=0)});let d=(r.range||r.refRange)[0],f=Sm(i),p=d,m=kf(u,l);for(;m-p>f;){let e=tp(u);e=wm(e,{space:n,method:`clip`}),s(u,e)-i<f?p=kf(u,l):m=kf(u,l),jf(u,l,(p+m)/2)}o=Dm(u,n)}else o=c}else o=Dm(e,n);if(t===`clip`||!ep(o,n,{epsilon:0})){let e=Object.values(n.coords).map(e=>e.range||[]);o.coords=o.coords.map((t,n)=>{let[r,i]=e[n];return r!==void 0&&(t=Math.max(r,t)),i!==void 0&&(t=Math.min(t,i)),t})}}return n!==e.space&&(o=Dm(o,e.space)),e.coords=o.coords,e}wm.returns=`color`;var Tm={WHITE:{space:Zf,coords:[1,0,0],alpha:1},BLACK:{space:Zf,coords:[0,0,0],alpha:1}};function Em(e,{space:t}={}){let n=.02,r=1e-4;e=M(e),t||=e.space,t=N.get(t);let i=N.get(`oklch`);if(t.isUnbounded)return Dm(e,t);let a=Dm(e,i),o=a.coords[0];if(o>=1){let n=Dm(Tm.WHITE,t);return n.alpha=e.alpha,Dm(n,t)}if(o<=0){let n=Dm(Tm.BLACK,t);return n.alpha=e.alpha,Dm(n,t)}if(ep(a,t,{epsilon:0}))return Dm(a,t);function s(e){let n=Dm(e,t),r=Object.values(t.coords);return n.coords=n.coords.map((e,t)=>{if(`range`in r[t]){let[n,i]=r[t].range;return nf(n,e,i)}return e}),n}let c=0,l=a.coords[1],u=!0,d=tp(a),f=s(d),p=Qf(f,d);if(p<n)return f;for(;l-c>r;){let e=(c+l)/2;if(d.coords[1]=e,u&&ep(d,t,{epsilon:0}))c=e;else if(f=s(d),p=Qf(f,d),p<n){if(n-p<r)break;u=!1,c=e}else l=e}return f}function Dm(e,t,{inGamut:n}={}){e=M(e),t=N.get(t);let r=t.from(e),i={space:t,coords:r,alpha:e.alpha};return n&&(i=wm(i,n===!0?void 0:n)),i}Dm.returns=`color`;function Om(e,t={}){let{precision:n=df.precision,format:r,inGamut:i=!0,coords:a,alpha:o,commas:s}=t,c,l=M(e),u=r,d=l.parseMeta;d&&!r&&(d.format.canSerialize()&&(r=d.format,u=d.formatId),a??=d.types,o??=d.alphaType,s??=d.commas),u&&(r=l.space.getFormat(r)??N.findFormat(u)),r||(r=l.space.getFormat(`default`)??N.DEFAULT_FORMAT,u=r.name),r&&r.space&&r.space!==l.space&&(l=Dm(l,r.space));let f=l.coords.slice();if(i||=r.toGamut,i&&!ep(l)&&(f=wm(tp(l),i===!0?void 0:i).coords),r.type===`custom`)if(r.serialize)c=r.serialize(f,l.alpha,t);else throw TypeError(`format ${u} can only be used to parse colors, not for serialization`);else{let e=r.name||`color`,t=r.serializeCoords(f,n,a);if(e===`color`){let e=r.id||r.ids?.[0]||l.space.cssId||l.space.id;t.unshift(e)}let i=l.alpha;o!==void 0&&typeof o!=`object`&&(o=typeof o==`string`?{type:o}:{include:o});let u=o?.type??`<number>`,d=o?.include===!0||r.alpha===!0||o?.include!==!1&&r.alpha!==!1&&i<1,p=``;if(s??=r.commas,d){if(n!==null){let e;u===`<percentage>`&&(e=`%`,i*=100),i=Yd(i,{precision:n,unit:e})}p=`${s?`,`:` /`} ${i}`}c=`${e}(${t.join(s?`, `:` `)}${p})`}return c}var km=new Ef({id:`rec2020-linear`,cssId:`--rec2020-linear`,name:`Linear REC.2020`,white:`D65`,toXYZ_M:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ_M:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]]}),Am=new Ef({id:`rec2020`,name:`REC.2020`,base:km,toBase(e){return e.map(function(e){let t=e<0?-1:1;return t*(e*t)**2.4})},fromBase(e){return e.map(function(e){let t=e<0?-1:1;return t*(e*t)**(1/2.4)})}}),jm=new Ef({id:`p3-linear`,cssId:`display-p3-linear`,name:`Linear P3`,white:`D65`,toXYZ_M:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ_M:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]}),Mm=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Nm=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],Pm=new Ef({id:`srgb-linear`,name:`Linear sRGB`,white:`D65`,toXYZ_M:Mm,fromXYZ_M:Nm}),Fm={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},Im=[,,,].fill(`<percentage> | <number>[0, 255]`),Lm=[,,,].fill(`<number>[0, 255]`),Rm=new Ef({id:`srgb`,name:`sRGB`,base:Pm,fromBase:e=>e.map(e=>{let t=e<0?-1:1,n=e*t;return n>.0031308?t*(1.055*n**(1/2.4)-.055):12.92*e}),toBase:e=>e.map(e=>{let t=e<0?-1:1,n=e*t;return n<=.04045?e/12.92:t*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Im},rgb_number:{name:`rgb`,commas:!0,coords:Lm,alpha:!1},color:{},rgba:{coords:Im,commas:!0,alpha:!0},rgba_number:{name:`rgba`,commas:!0,coords:Lm},hex:{type:`custom`,toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,`$&$&`));let t=[];return e.replace(/[a-f0-9]{2}/gi,e=>{t.push(parseInt(e,16)/255)}),{spaceId:`srgb`,coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0,alpha:r}={})=>{(r!==!1&&t<1||r===!0)&&e.push(t),e=e.map(e=>Math.round(e*255));let i=n&&e.every(e=>e%17==0);return`#`+e.map(e=>i?(e/17).toString(16):e.toString(16).padStart(2,`0`)).join(``)}},keyword:{type:`custom`,test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:`srgb`,coords:null,alpha:1};if(e===`transparent`?(t.coords=Fm.black,t.alpha=0):t.coords=Fm[e],t.coords)return t}}}}),zm=new Ef({id:`p3`,cssId:`display-p3`,name:`P3`,base:jm,fromBase:Rm.fromBase,toBase:Rm.toBase});df.display_space=Rm;var Bm;if(typeof CSS<`u`&&CSS.supports)for(let e of[Lf,Am,zm]){let t=Om({space:e,coords:e.getMinCoords(),alpha:1});if(CSS.supports(`color`,t)){df.display_space=e;break}}function Vm(e,{space:t=df.display_space,...n}={}){e=M(e);let r=Om(e,n);if(typeof CSS>`u`||CSS.supports(`color`,r)||!df.display_space)r=new String(r),r.color=e;else{let i=e;if((e.coords.some(Xd)||Xd(e.alpha))&&!(Bm??=CSS.supports(`color`,`hsl(none 50% 50%)`))&&(i=tp(e),i.coords=i.coords.map(Zd),i.alpha=Zd(i.alpha),r=Om(i,n),CSS.supports(`color`,r)))return r=new String(r),r.color=i,r;i=Dm(i,t),r=new String(Om(i,n)),r.color=i}return r}function Hm(e,t,{space:n,hue:r=`shorter`}={}){e=M(e),n||=e.space,n=N.get(n);let i=Object.values(n.coords);[e,t]=[e,t].map(e=>Dm(e,n));let[a,o]=[e,t].map(e=>e.coords),s=a.map((e,t)=>{let n=i[t],a=o[t];return n.type===`angle`&&([e,a]=zf(r,[e,a])),Um(e,a)}),c=Um(e.alpha,t.alpha);return{space:n,coords:s,alpha:c}}function Um(e,t){return Xd(e)||Xd(t)?e===t?null:0:e-t}function Wm(e,t){return e=M(e),t=M(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((e,n)=>e===t.coords[n])}function Gm(e){return kf(e,[Tf,`y`])}function Km(e,t){jf(e,[Tf,`y`],t)}function qm(e){Object.defineProperty(e.prototype,`luminance`,{get(){return Gm(this)},set(e){Km(this,e)}})}var Jm=Object.freeze({__proto__:null,getLuminance:Gm,register:qm,setLuminance:Km});function Ym(e,t){e=M(e),t=M(t);let n=Math.max(Gm(e),0),r=Math.max(Gm(t),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}var Xm=.56,Zm=.57,Qm=.62,$m=.65,eh=.022,th=1.414,nh=.1,rh=5e-4,ih=1.14,ah=.027,oh=1.14;function sh(e){return e>=eh?e:e+(eh-e)**th}function ch(e){return(e<0?-1:1)*Math.abs(e)**2.4}function lh(e,t){t=M(t),e=M(e);let n,r,i,a,o,s;t=Dm(t,`srgb`),[a,o,s]=t.coords.map(e=>Xd(e)?0:e);let c=ch(a)*.2126729+ch(o)*.7151522+ch(s)*.072175;e=Dm(e,`srgb`),[a,o,s]=e.coords.map(e=>Xd(e)?0:e);let l=ch(a)*.2126729+ch(o)*.7151522+ch(s)*.072175,u=sh(c),d=sh(l),f=d>u;return Math.abs(d-u)<rh?r=0:f?(n=d**Xm-u**Zm,r=n*ih):(n=d**$m-u**Qm,r=n*oh),i=Math.abs(r)<nh?0:r>0?r-ah:r+ah,i*100}function uh(e,t){e=M(e),t=M(t);let n=Math.max(Gm(e),0),r=Math.max(Gm(t),0);r>n&&([n,r]=[r,n]);let i=n+r;return i===0?0:(n-r)/i}var dh=5e4;function fh(e,t){e=M(e),t=M(t);let n=Math.max(Gm(e),0),r=Math.max(Gm(t),0);return r>n&&([n,r]=[r,n]),r===0?dh:(n-r)/r}function ph(e,t){e=M(e),t=M(t);let n=kf(e,[Lf,`l`]),r=kf(t,[Lf,`l`]);return Math.abs(n-r)}var mh=216/24389,hh=24/116,gh=24389/27,_h=hf.D65,vh=new N({id:`lab-d65`,name:`Lab D65`,coords:{l:{refRange:[0,100],name:`Lightness`},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:_h,base:Tf,fromBase(e){let t=e.map((e,t)=>e/_h[t]).map(e=>e>mh?Math.cbrt(e):(gh*e+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>hh?t[0]**3:(116*t[0]-16)/gh,e[0]>8?((e[0]+16)/116)**3:e[0]/gh,t[2]>hh?t[2]**3:(116*t[2]-16)/gh].map((e,t)=>e*_h[t])},formats:{"lab-d65":{coords:[`<number> | <percentage>`,`<number> | <percentage>`,`<number> | <percentage>`]}}}),yh=5**.5*.5+.5;function bh(e,t){e=M(e),t=M(t);let n=kf(e,[vh,`l`]),r=kf(t,[vh,`l`]),i=Math.abs(n**+yh-r**+yh)**(1/yh)*Math.SQRT2-40;return i<7.5?0:i}var xh=Object.freeze({__proto__:null,contrastAPCA:lh,contrastDeltaPhi:bh,contrastLstar:ph,contrastMichelson:uh,contrastWCAG21:Ym,contrastWeber:fh});function Sh(e,t,n){qd(n)&&(n={algorithm:n});let{algorithm:r,...i}=n||{};if(!r){let e=Object.keys(xh).map(e=>e.replace(/^contrast/,``)).join(`, `);throw TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${e}`)}e=M(e),t=M(t);for(let n in xh)if(`contrast`+r.toLowerCase()===n.toLowerCase())return xh[n](e,t,i);throw TypeError(`Unknown contrast algorithm: ${r}`)}function Ch(e){let[t,n,r]=Of(e,Tf),i=t+15*n+3*r;return[4*t/i,9*n/i]}function wh(e){let[t,n,r]=Of(e,Tf),i=t+n+r;return[t/i,n/i]}function Th(e){Object.defineProperty(e.prototype,`uv`,{get(){return Ch(this)}}),Object.defineProperty(e.prototype,`xy`,{get(){return wh(this)}})}var Eh=Object.freeze({__proto__:null,register:Th,uv:Ch,xy:wh});function Dh(e,t,n={}){qd(n)&&(n={method:n});let{method:r=df.deltaE,...i}=n;for(let n in xm)if(`deltae`+r.toLowerCase()===n.toLowerCase())return xm[n](e,t,i);throw TypeError(`Unknown deltaE method: ${r}`)}function Oh(e,t=.25){return jf(e,[N.get(`oklch`,`lch`),`l`],e=>e*(1+t))}function kh(e,t=.25){return jf(e,[N.get(`oklch`,`lch`),`l`],e=>e*(1-t))}Oh.returns=`color`,kh.returns=`color`;var Ah=Object.freeze({__proto__:null,darken:kh,lighten:Oh});function jh(e,t,n,r={}){return[e,t]=[M(e),M(t)],Jd(n)===`object`&&([n,r]=[.5,n]),Nh(e,t,r)(n??.5)}function Mh(e,t,n={}){let r;Ph(e)&&([r,n]=[e,t],[e,t]=r.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:a,steps:o=2,maxSteps:s=1e3,...c}=n;r||=([e,t]=[M(e),M(t)],Nh(e,t,c));let l=Dh(e,t),u=i>0?Math.max(o,Math.ceil(l/i)+1):o,d=[];if(s!==void 0&&(u=Math.min(u,s)),u===1)d=[{p:.5,color:r(.5)}];else{let e=1/(u-1);d=Array.from({length:u},(t,n)=>{let i=n*e;return{p:i,color:r(i)}})}if(i>0){let e=d.reduce((e,t,n)=>{if(n===0)return 0;let r=Dh(t.color,d[n-1].color,a);return Math.max(e,r)},0);for(;e>i;){e=0;for(let t=1;t<d.length&&d.length<s;t++){let n=d[t-1],i=d[t],a=(i.p+n.p)/2,o=r(a);e=Math.max(e,Dh(o,n.color),Dh(o,i.color)),d.splice(t,0,{p:a,color:r(a)}),t++}}}return d=d.map(e=>e.color),d}function Nh(e,t,n={}){if(Ph(e)){let[n,r]=[e,t];return Nh(...n.rangeArgs.colors,{...n.rangeArgs.options,...r})}let{space:r,outputSpace:i,progression:a,premultiplied:o}=n;e=M(e),t=M(t),e=tp(e),t=tp(t);let s={colors:[e,t],options:n};if(r=r?N.get(r):N.registry[df.interpolationSpace]||e.space,i=i?N.get(i):r,e=Dm(e,r),t=Dm(t,r),e=wm(e),t=wm(t),r.coords.h&&r.coords.h.type===`angle`){let i=n.hue=n.hue||`shorter`,a=[r,`h`],[o,s]=[kf(e,a),kf(t,a)];Xd(o)&&!Xd(s)?o=s:Xd(s)&&!Xd(o)&&(s=o),[o,s]=zf(i,[o,s]),jf(e,a,o),jf(t,a,s)}return o&&(e.coords=e.coords.map(t=>t*e.alpha),t.coords=t.coords.map(e=>e*t.alpha)),Object.assign(n=>{n=a?a(n):n;let s=e.coords.map((e,r)=>{let i=t.coords[r];return $d(e,i,n)}),c=$d(e.alpha,t.alpha,n),l={space:r,coords:s,alpha:c};return o&&(l.coords=l.coords.map(e=>e/c)),i!==r&&(l=Dm(l,i)),l},{rangeArgs:s})}function Ph(e){return Jd(e)===`function`&&!!e.rangeArgs}df.interpolationSpace=`lab`;function Fh(e){e.defineFunction(`mix`,jh,{returns:`color`}),e.defineFunction(`range`,Nh,{returns:`function<color>`}),e.defineFunction(`steps`,Mh,{returns:`array<color>`})}var Ih=Object.freeze({__proto__:null,isRange:Ph,mix:jh,range:Nh,register:Fh,steps:Mh}),Lh=new N({id:`hsl`,name:`HSL`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,100],name:`Saturation`},l:{range:[0,100],name:`Lightness`}},base:Rm,fromBase:e=>{let t=Math.max(...e),n=Math.min(...e),[r,i,a]=e,[o,s,c]=[null,0,(n+t)/2],l=t-n;if(l!==0){switch(s=c===0||c===1?0:(t-c)/Math.min(c,1-c),t){case r:o=(i-a)/l+(i<a?6:0);break;case i:o=(a-r)/l+2;break;case a:o=(r-i)/l+4}o*=60}return s<0&&(o+=180,s=Math.abs(s)),o>=360&&(o-=360),[o,s*100,c*100]},toBase:e=>{let[t,n,r]=e;t%=360,t<0&&(t+=360),n/=100,r/=100;function i(e){let i=(e+t/30)%12,a=n*Math.min(r,1-r);return r-a*Math.max(-1,Math.min(i-3,9-i,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]},hsla:{coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`],commas:!0,alpha:!0}}}),Rh=new N({id:`hsv`,name:`HSV`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,100],name:`Saturation`},v:{range:[0,100],name:`Value`}},base:Rm,fromBase(e){let t=Math.max(...e),n=Math.min(...e),[r,i,a]=e,[o,s,c]=[null,0,t],l=t-n;if(l!==0){switch(t){case r:o=(i-a)/l+(i<a?6:0);break;case i:o=(a-r)/l+2;break;case a:o=(r-i)/l+4}o*=60}return c&&(s=l/c),o>=360&&(o-=360),[o,s*100,c*100]},toBase(e){let[t,n,r]=e;t%=360,t<0&&(t+=360),n/=100,r/=100;function i(e){let i=(e+t/60)%6;return r-r*n*Math.max(0,Math.min(i,4-i,1))}return[i(5),i(3),i(1)]},formats:{color:{id:`--hsv`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),zh=new N({id:`hwb`,name:`HWB`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},w:{range:[0,100],name:`Whiteness`},b:{range:[0,100],name:`Blackness`}},base:Rh,fromBase(e){let[t,n,r]=e;return[t,r*(100-n)/100,100-r]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=n+r;if(i>=1)return[t,0,n/i*100];let a=1-r;return[t,(a===0?0:1-n/a)*100,a*100]},formats:{hwb:{coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),Bh=new Ef({id:`a98rgb-linear`,cssId:`--a98-rgb-linear`,name:`Linear Adobe® 98 RGB compatible`,white:`D65`,toXYZ_M:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ_M:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]}),Vh=new Ef({id:`a98rgb`,cssId:`a98-rgb`,name:`Adobe® 98 RGB compatible`,base:Bh,toBase:e=>e.map(e=>Math.abs(e)**(563/256)*Math.sign(e)),fromBase:e=>e.map(e=>Math.abs(e)**(256/563)*Math.sign(e))}),Hh=new Ef({id:`prophoto-linear`,cssId:`--prophoto-rgb-linear`,name:`Linear ProPhoto`,white:`D50`,base:Mf,toXYZ_M:[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],fromXYZ_M:[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]]}),Uh=1/512,Wh=16/512,Gh=new Ef({id:`prophoto`,cssId:`prophoto-rgb`,name:`ProPhoto`,base:Hh,toBase(e){return e.map(e=>{let t=e<0?-1:1,n=e*t;return n<Wh?e/16:t*n**1.8})},fromBase(e){return e.map(e=>{let t=e<0?-1:1,n=e*t;return n>=Uh?t*n**(1/1.8):16*e})}}),Kh=1.09929682680944,qh=.018053968510807,Jh=new Ef({id:`--rec2020-oetf`,name:`REC.2020_Scene_Referred`,base:km,referred:`scene`,toBase(e){return e.map(function(e){let t=e<0?-1:1,n=e*t;return n<qh*4.5?e/4.5:t*((n+Kh-1)/Kh)**(1/.45)})},fromBase(e){return e.map(function(e){let t=e<0?-1:1,n=e*t;return n>=qh?t*(Kh*n**.45-(Kh-1)):4.5*e})}}),Yh=new N({id:`oklch`,name:`OkLCh`,coords:{l:{refRange:[0,1],name:`Lightness`},c:{refRange:[0,.4],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},white:`D65`,base:Zf,fromBase:Bf.fromBase,toBase:Bf.toBase,formats:{oklch:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <angle>`]}}}),Xh=2*Math.PI,Zh=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],Qh=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],$h=Number.MAX_VALUE,eg=.206,tg=.03,ng=(1+eg)/(1+tg);function rg(e,t){let n=e.length;if(n!==t.length)throw Error(`Vectors of size ${n} and ${t.length} are not aligned`);let r=0;return e.forEach((e,n)=>{r+=e*t[n]}),r}function ig(e){return .5*(ng*e-eg+Math.sqrt((ng*e-eg)*(ng*e-eg)+4*tg*ng*e))}function ag(e){return(e**2+eg*e)/(ng*(e+tg))}function og(e){let[t,n]=e;return[n/t,n/(1-t)]}function sg(e,t){return[.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))))]}function cg(e,t){let n=Kd(e,Xf);return n[0]**=3,n[1]**=3,n[2]**=3,Kd(n,t,n)}function lg(e,t,n,r){let i=fg(e,t,n,r),a=cg([1,i*e,i*t],n),o=af(1/Math.max(...a),1/3);return[o,o*i]}function ug(e,t,n,r,i,a,o,s){let c;if(s===void 0&&(s=lg(e,t,a,o)),(n-i)*s[1]-(s[0]-i)*r<=0)c=s[1]*i/(r*s[0]+s[1]*(i-n));else{c=s[1]*(i-1)/(r*(s[0]-1)+s[1]*(i-n));let o=n-i,l=r,u=rg(Xf[0].slice(1),[e,t]),d=rg(Xf[1].slice(1),[e,t]),f=rg(Xf[2].slice(1),[e,t]),p=o+l*u,m=o+l*d,h=o+l*f,g=i*(1-c)+c*n,ee=c*r,_=g+ee*u,te=g+ee*d,ne=g+ee*f,re=_**3,ie=te**3,ae=ne**3,oe=3*p*_**2,se=3*m*te**2,ce=3*h*ne**2,le=6*p**2*_,ue=6*m**2*te,de=6*h**2*ne,fe=rg(a[0],[re,ie,ae])-1,pe=rg(a[0],[oe,se,ce]),me=rg(a[0],[le,ue,de]),he=pe/(pe*pe-.5*fe*me),ge=-fe*he,_e=rg(a[1],[re,ie,ae])-1,v=rg(a[1],[oe,se,ce]),y=rg(a[1],[le,ue,de]),ve=v/(v*v-.5*_e*y),ye=-_e*ve,b=rg(a[2],[re,ie,ae])-1,be=rg(a[2],[oe,se,ce]),x=rg(a[2],[le,ue,de]),xe=be/(be*be-.5*b*x),Se=-b*xe;ge=he>=0?ge:$h,ye=ve>=0?ye:$h,Se=xe>=0?Se:$h,c+=Math.min(ge,Math.min(ye,Se))}return c}function dg(e,t,n){let[r,i,a]=e,o=lg(i,a,t,n),s=ug(i,a,r,1,r,t,n,o),c=og(o),l=s/Math.min(r*c[0],(1-r)*c[1]),u=sg(i,a),d=r*u[0],f=(1-r)*u[1],p=.9*l*Math.sqrt(Math.sqrt(1/(1/d**4+1/f**4)));return d=r*.4,f=(1-r)*.8,[Math.sqrt(1/(1/d**2+1/f**2)),p,s]}function fg(e,t,n,r){let i,a,o,s,c,l,u,d;rg(r[0][0],[e,t])>1?([i,a,o,s,c]=r[0][1],[l,u,d]=n[0]):rg(r[1][0],[e,t])>1?([i,a,o,s,c]=r[1][1],[l,u,d]=n[1]):([i,a,o,s,c]=r[2][1],[l,u,d]=n[2]);let f=i+a*e+o*t+s*e**2+c*e*t,p=rg(Xf[0].slice(1),[e,t]),m=rg(Xf[1].slice(1),[e,t]),h=rg(Xf[2].slice(1),[e,t]),g=1+f*p,ee=1+f*m,_=1+f*h,te=g**3,ne=ee**3,re=_**3,ie=3*p*g**2,ae=3*m*ee**2,oe=3*h*_**2,se=6*p**2*g,ce=6*m**2*ee,le=6*h**2*_,ue=l*te+u*ne+d*re,de=l*ie+u*ae+d*oe,fe=l*se+u*ce+d*le;return f-=ue*de/(de**2-.5*ue*fe),f}function pg(e,t,n){let[r,i,a]=e,o=ag(a),s=null,c=null;if(r=Rf(r)/360,o!==0&&o!==1&&i!==0){let e=Math.cos(Xh*r),a=Math.sin(Xh*r),[l,u,d]=dg([o,e,a],t,n),f=.8,p,m,h,g;i<f?(p=1.25*i,m=0,h=f*l,g=1-h/u):(p=5*(i-.8),m=u,h=.2*u**2*1.25**2/l,g=1-h/(d-u));let ee=m+p*h/(1-g*p);s=ee*e,c=ee*a}return[o,s,c]}function mg(e,t,n){let r=e[0],i=0,a=ig(r),o=Math.sqrt(e[1]**2+e[2]**2),s=.5+Math.atan2(-e[2],-e[1])/Xh;if(a!==0&&a!==1&&o!==0){let[a,s,c]=dg([r,e[1]/o,e[2]/o],t,n),l=.8,u,d,f,p;o<s?(d=l*a,f=1-d/s,p=o/(d+f*o),i=p*l):(u=s,d=.2*s**2*1.25**2/a,f=1-d/(c-s),p=(o-u)/(d+f*(o-u)),i=l+.2*p)}let c=Math.abs(i)<1e-4;return c||a===0||Math.abs(1-a)<1e-7?(s=null,c||(i=0)):s=Rf(s*360),[s,i,a]}var hg=new N({id:`okhsl`,name:`Okhsl`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,1],name:`Saturation`},l:{range:[0,1],name:`Lightness`}},base:Zf,gamutSpace:`self`,fromBase(e){return mg(e,Zh,Qh)},toBase(e){return pg(e,Zh,Qh)},formats:{color:{id:`--okhsl`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),gg=new N({id:`oklrab`,name:`Oklrab`,coords:{l:{refRange:[0,1],name:`Lightness`},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:`D65`,base:Zf,fromBase(e){return[ig(e[0]),e[1],e[2]]},toBase(e){return[ag(e[0]),e[1],e[2]]},formats:{color:{coords:[`<percentage> | <number>`,`<number> | <percentage>[-1,1]`,`<number> | <percentage>[-1,1]`]}}}),_g=new N({id:`oklrch`,name:`Oklrch`,coords:{l:{refRange:[0,1],name:`Lightness`},c:{refRange:[0,.4],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},white:`D65`,base:gg,fromBase:Bf.fromBase,toBase:Bf.toBase,formats:{color:{coords:[`<percentage> | <number>`,`<number> | <percentage>[0,1]`,`<number> | <angle>`]}}});function vg(e,t,n){let[r,i,a]=e;r=Rf(r)/360;let o=ag(a),s=null,c=null;if(o!==0&&i!==0){let e=Math.cos(Xh*r),l=Math.sin(Xh*r),[u,d]=og(lg(e,l,t,n)),f=.5,p=1-f/u,m=1-i*f/(f+d-d*p*i),h=i*d*f/(f+d-d*p*i);o=a*m;let g=a*h,ee=ag(m),_=h*ee/m,te=ag(o);g=g*te/o,o=te;let[ne,re,ie]=cg([ee,e*_,l*_],t),ae=af(1/Math.max(Math.max(ne,re),Math.max(ie,0)),1/3);o*=ae,g*=ae,s=g*e,c=g*l}return[o,s,c]}function yg(e,t,n){let r=e[0],i=0,a=ig(r),o=Math.sqrt(e[1]**2+e[2]**2),s=.5+Math.atan2(-e[2],-e[1])/Xh;if(r!==0&&r!==1&&o!==0){let s=e[1]/o,c=e[2]/o,[l,u]=og(lg(s,c,t,n)),d=.5,f=1-d/l,p=u/(o+r*u),m=p*r,h=p*o,g=ag(m),ee=h*g/m,[_,te,ne]=cg([g,s*ee,c*ee],t),re=af(1/Math.max(Math.max(_,te),Math.max(ne,0)),1/3);r/=re,o/=re,o=o*ig(r)/r,r=ig(r),a=r/m,i=(d+u)*h/(u*d+u*f*h)}return s=Math.abs(i)<1e-4||a===0?null:Rf(s*360),[s,i,a]}var bg=new N({id:`okhsv`,name:`Okhsv`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,1],name:`Saturation`},v:{range:[0,1],name:`Value`}},base:Zf,gamutSpace:`self`,fromBase(e){return yg(e,Zh,Qh)},toBase(e){return vg(e,Zh,Qh)},formats:{color:{id:`--okhsv`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),xg=hf.D65,Sg=216/24389,Cg=24389/27,[wg,Tg]=Ch({space:Tf,coords:xg}),Eg=new N({id:`luv`,name:`Luv`,coords:{l:{refRange:[0,100],name:`Lightness`},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:xg,base:Tf,fromBase(e){let t=[Zd(e[0]),Zd(e[1]),Zd(e[2])],n=t[1],[r,i]=Ch({space:Tf,coords:t});if(!Number.isFinite(r)||!Number.isFinite(i))return[0,0,0];let a=n<=Sg?Cg*n:116*Math.cbrt(n)-16;return[a,13*a*(r-wg),13*a*(i-Tg)]},toBase(e){let[t,n,r]=e;if(t===0||Xd(t))return[0,0,0];n=Zd(n),r=Zd(r);let i=n/(13*t)+wg,a=r/(13*t)+Tg,o=t<=8?t/Cg:((t+16)/116)**3;return[o*(9*i/(4*a)),o,o*((12-3*i-20*a)/(4*a))]},formats:{color:{id:`--luv`,coords:[`<number> | <percentage>`,`<number> | <percentage>`,`<number> | <percentage>`]}}}),Dg=new N({id:`lchuv`,name:`LChuv`,coords:{l:{refRange:[0,100],name:`Lightness`},c:{refRange:[0,220],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},base:Eg,fromBase:Bf.fromBase,toBase:Bf.toBase,formats:{color:{id:`--lchuv`,coords:[`<number> | <percentage>`,`<number> | <percentage>`,`<number> | <angle>`]}}}),Og=216/24389,kg=24389/27,Ag=Nm[0][0],jg=Nm[0][1],Mg=Nm[0][2],Ng=Nm[1][0],Pg=Nm[1][1],Fg=Nm[1][2],Ig=Nm[2][0],Lg=Nm[2][1],Rg=Nm[2][2];function zg(e,t,n){let r=t/(Math.sin(n)-e*Math.cos(n));return r<0?1/0:r}function Bg(e){let t=(e+16)**3/1560896,n=t>Og?t:e/kg,r=n*(284517*Ag-94839*Mg),i=n*(838422*Mg+769860*jg+731718*Ag),a=n*(632260*Mg-126452*jg),o=n*(284517*Ng-94839*Fg),s=n*(838422*Fg+769860*Pg+731718*Ng),c=n*(632260*Fg-126452*Pg),l=n*(284517*Ig-94839*Rg),u=n*(838422*Rg+769860*Lg+731718*Ig),d=n*(632260*Rg-126452*Lg);return{r0s:r/a,r0i:i*e/a,r1s:r/(a+126452),r1i:(i-769860)*e/(a+126452),g0s:o/c,g0i:s*e/c,g1s:o/(c+126452),g1i:(s-769860)*e/(c+126452),b0s:l/d,b0i:u*e/d,b1s:l/(d+126452),b1i:(u-769860)*e/(d+126452)}}function Vg(e,t){let n=t/360*Math.PI*2,r=zg(e.r0s,e.r0i,n),i=zg(e.r1s,e.r1i,n),a=zg(e.g0s,e.g0i,n),o=zg(e.g1s,e.g1i,n),s=zg(e.b0s,e.b0i,n),c=zg(e.b1s,e.b1i,n);return Math.min(r,i,a,o,s,c)}var Hg=new N({id:`hsluv`,name:`HSLuv`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,100],name:`Saturation`},l:{range:[0,100],name:`Lightness`}},base:Dg,gamutSpace:Rm,fromBase(e){let[t,n,r]=[Zd(e[0]),Zd(e[1]),Zd(e[2])],i;return t>99.9999999?(i=0,t=100):t<1e-8?(i=0,t=0):i=n/Vg(Bg(t),r)*100,[r,i,t]},toBase(e){let[t,n,r]=[Zd(e[0]),Zd(e[1]),Zd(e[2])],i;return r>99.9999999?(r=100,i=0):r<1e-8?(r=0,i=0):i=Vg(Bg(r),t)/100*n,[r,i,t]},formats:{color:{id:`--hsluv`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}});Nm[0][0],Nm[0][1],Nm[0][2],Nm[1][0],Nm[1][1],Nm[1][2],Nm[2][0],Nm[2][1],Nm[2][2];function Ug(e,t){return Math.abs(t)/Math.sqrt(e**2+1)}function Wg(e){let t=Ug(e.r0s,e.r0i),n=Ug(e.r1s,e.r1i),r=Ug(e.g0s,e.g0i),i=Ug(e.g1s,e.g1i),a=Ug(e.b0s,e.b0i),o=Ug(e.b1s,e.b1i);return Math.min(t,n,r,i,a,o)}var Gg=new N({id:`hpluv`,name:`HPLuv`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,100],name:`Saturation`},l:{range:[0,100],name:`Lightness`}},base:Dg,gamutSpace:`self`,fromBase(e){let[t,n,r]=[Zd(e[0]),Zd(e[1]),Zd(e[2])],i;return t>99.9999999?(i=0,t=100):t<1e-8?(i=0,t=0):i=n/Wg(Bg(t))*100,[r,i,t]},toBase(e){let[t,n,r]=[Zd(e[0]),Zd(e[1]),Zd(e[2])],i;return r>99.9999999?(r=100,i=0):r<1e-8?(r=0,i=0):i=Wg(Bg(r))/100*n,[r,i,t]},formats:{color:{id:`--hpluv`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),Kg=new Ef({id:`rec2100-linear`,name:`Linear REC.2100`,white:`D65`,toBase:km.toBase,fromBase:km.fromBase}),qg=203,Jg=2610/2**14,Yg=2**14/2610,Xg=2523/2**5,Zg=2**5/2523,Qg=3424/2**12,$g=2413/2**7,e_=2392/2**7,t_=new Ef({id:`rec2100pq`,cssId:`rec2100-pq`,name:`REC.2100-PQ`,base:Kg,toBase(e){return e.map(function(e){return(Math.max(e**Zg-Qg,0)/($g-e_*e**Zg))**Yg*1e4/qg})},fromBase(e){return e.map(function(e){let t=Math.max(e*qg/1e4,0);return((Qg+$g*t**Jg)/(1+e_*t**Jg))**Xg})}}),n_=.17883277,r_=.28466892,i_=.55991073,a_=3.7743,o_=new Ef({id:`rec2100hlg`,cssId:`rec2100-hlg`,name:`REC.2100-HLG`,referred:`scene`,base:Kg,toBase(e){return e.map(function(e){return e<=.5?e**2/3*a_:(Math.exp((e-i_)/n_)+r_)/12*a_})},fromBase(e){return e.map(function(e){return e/=a_,e<=1/12?af(3*e,.5):n_*Math.log(12*e-r_)+i_})}}),s_={};uf.add(`chromatic-adaptation-start`,e=>{e.options.method&&(e.M=l_(e.W1,e.W2,e.options.method))}),uf.add(`chromatic-adaptation-end`,e=>{e.M||=l_(e.W1,e.W2,e.options.method)});function c_({id:e,toCone_M:t,fromCone_M:n}){s_[e]=arguments[0]}function l_(e,t,n=`Bradford`){let r=s_[n],[i,a,o]=Wd(r.toCone_M,e),[s,c,l]=Wd(r.toCone_M,t),u=Wd([[s/i,0,0],[0,c/a,0],[0,0,l/o]],r.toCone_M);return Wd(r.fromCone_M,u)}c_({id:`von Kries`,toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]}),c_({id:`Bradford`,toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]}),c_({id:`CAT02`,toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]}),c_({id:`CAT16`,toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]}),Object.assign(hf,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),hf.ACES=[.32168/.33767,1,.34065/.33767];var u_=new Ef({id:`acescg`,cssId:`--acescg`,name:`ACEScg`,coords:{r:{range:[0,65504],name:`Red`},g:{range:[0,65504],name:`Green`},b:{range:[0,65504],name:`Blue`}},referred:`scene`,white:hf.ACES,toXYZ_M:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ_M:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]]}),d_=2**-16,f_=-.35828683,p_=(Math.log2(65504)+9.72)/17.52,m_=new Ef({id:`acescc`,cssId:`--acescc`,name:`ACEScc`,coords:{r:{range:[f_,p_],name:`Red`},g:{range:[f_,p_],name:`Green`},b:{range:[f_,p_],name:`Blue`}},referred:`scene`,base:u_,toBase(e){return e.map(function(e){return e<=-.3013698630136986?(2**(e*17.52-9.72)-d_)*2:e<p_?2**(e*17.52-9.72):65504})},fromBase(e){return e.map(function(e){return e<=0?(Math.log2(d_)+9.72)/17.52:e<d_?(Math.log2(d_+e*.5)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})}}),h_=Object.freeze({__proto__:null,A98RGB:Vh,A98RGB_Linear:Bh,ACEScc:m_,ACEScg:u_,CAM16_JMh:sm,HCT:gm,HPLuv:Gg,HSL:Lh,HSLuv:Hg,HSV:Rh,HWB:zh,ICTCP:Lp,JzCzHz:wp,Jzazbz:Cp,LCH:Bf,LCHuv:Dg,Lab:Lf,Lab_D65:vh,Luv:Eg,OKLCH:Yh,OKLab:Zf,OKLrCH:_g,OKLrab:gg,Okhsl:hg,Okhsv:bg,P3:zm,P3_Linear:jm,ProPhoto:Gh,ProPhoto_Linear:Hh,REC_2020:Am,REC_2020_Linear:km,REC_2020_Scene_Referred:Jh,REC_2100_HLG:o_,REC_2100_Linear:Kg,REC_2100_PQ:t_,XYZ_ABS_D65:sp,XYZ_D50:Mf,XYZ_D65:Tf,sRGB:Rm,sRGB_Linear:Pm}),g_=class e{constructor(...e){let t;if(e.length===1){let n={};typeof e[0]==`object`&&Object.getPrototypeOf(e[0]).constructor===Object&&(e[0]={...e[0]}),t=M(e[0],{parseMeta:n}),n.format&&(this.parseMeta=n)}let n,r,i;t?(n=t.space||t.spaceId,r=t.coords,i=t.alpha):[n,r,i]=e,Object.defineProperty(this,`space`,{value:N.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=r?r.slice():[0,0,0],this.alpha=Xd(i)?i:i===void 0?1:nf(0,i,1);for(let e in this.space.coords)Object.defineProperty(this,e,{get:()=>this.get(e),set:t=>this.set(e,t)})}get spaceId(){return this.space.id}clone(){return new e(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=Vm(this,...t);return n.color=new e(n.color),n}static get(t,...n){return cf(t,this)?t:new e(t,...n)}static try(t,n){if(cf(t,this))return t;let r=Df(t,n);return r?new e(r):null}static defineFunction(t,n,r=n){let{instance:i=!0,returns:a}=r,o=function(...t){let r=n(...t);if(a===`color`)r=e.get(r);else if(a===`function<color>`){let t=r;r=function(...n){let r=t(...n);return e.get(r)},Object.assign(r,t)}else a===`array<color>`&&(r=r.map(t=>e.get(t)));return r};t in e||(e[t]=o),i&&(e.prototype[t]=function(...e){return o(this,...e)})}static defineFunctions(t){for(let n in t)e.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(e);else for(let n in t)e.defineFunction(n,t[n])}};g_.defineFunctions({get:kf,getAll:Of,set:jf,setAll:Af,to:Dm,equals:Wm,inGamut:ep,toGamut:wm,distance:np,deltas:Hm,toString:Om}),Object.assign(g_,{util:lf,hooks:uf,WHITES:hf,Space:N,spaces:N.registry,parse:vf,defaults:df});for(let e of Object.keys(h_))N.register(h_[e]);for(let e in N.registry)__(e,N.registry[e]);uf.add(`colorspace-init-end`,e=>{__(e.id,e),e.aliases?.forEach(t=>{__(t,e)})});function __(e,t){let n=e.replace(/-/g,`_`);Object.defineProperty(g_.prototype,n,{get(){let n=this.getAll(e);if(typeof Proxy>`u`)return n;let r=new Proxy(n,{has:(e,n)=>{try{return N.resolveCoord([t,n]),!0}catch{}return Reflect.has(e,n)},get:(e,n,i)=>{if(n&&typeof n!=`symbol`&&!(n in e)&&n in r){let{index:r}=N.resolveCoord([t,n]);if(r>=0)return e[r]}return Reflect.get(e,n,i)},set:(n,r,i,a)=>{if(r&&typeof r!=`symbol`&&!(r in n)||Number(r)>=0){let{index:a}=N.resolveCoord([t,r]);if(a>=0)return n[a]=i,this.setAll(e,n),!0}return Reflect.set(n,r,i,a)}});return r},set(t){this.setAll(e,t)},configurable:!0,enumerable:!0})}g_.extend(xm),g_.extend({deltaE:Dh}),Object.assign(g_,{deltaEMethods:xm}),g_.extend(Ah),g_.extend({contrast:Sh}),g_.extend(Eh),g_.extend(Jm),g_.extend(Ih),g_.extend(xh);var v_=Symbol(`no update`);function y_(e){return e!==v_}var b_=class extends Vl()(`observable-value-update`){},x_=class extends Vl()(`observable-value-resolve`){},S_=class extends Vl()(`observable-value-error`){},C_=class extends Hl(`observable-destroy`){},w_=class extends Hl(`observable-callback-call`){},T_=class extends Vl()(`observable-params-update`){};Vl()(`observable-interval-run`),Vl()(`observable-interval-skip`),Vl()(`observable-interval-rate-limited`);var E_=class{listenTarget=new Wl;value;equalityCheck;listenerMap=new WeakMap;dispatch(...e){return this.listenTarget.dispatch(...e)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...e){let t=e[0];if(t===v_)return!1;if(!(e.length===2?e[1]:this.equalityCheck)?.(this.value,t)){let e=this.value;return this.value=t,this.listenTarget.dispatch(new b_({detail:[t,e]})),!0}return!1}listen(e,t){let n=e=>t(...e.detail);return this.listenerMap.set(t,n),e&&t(this.value,void 0),this.listenTarget.listen(b_,n)}removeListener(e){let t=this.listenerMap.get(e);return!!t&&this.listenTarget.removeListener(b_,t)}destroy(){this.listenTarget.dispatch(new C_),this.listenTarget.destroy()}listenToEvent(e,t,n){return this.listenTarget.listen(e,t,n)}};function D_(e,t){return Tc(e,t,(e,t)=>A.isFunction(e)&&A.isFunction(t)?!0:A.strictEquals(e,t))}var O_;(function(e){e.Rejected=`rejected`,e.Waiting=`waiting`,e.Resolved=`resolved`})(O_||={});var k_=class extends E_{equalityCheck;waitingForValueDeferredPromise=new ze;lastSetPromise;lastSetId=el();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(e={}){super(),this.equalityCheck=`equalityCheck`in e?e.equalityCheck:D_,`defaultValue`in e&&this.setValue(e.defaultValue)}setPromise(e){if(e===this.lastSetPromise)return!1;let t=el();return this.lastSetId=t,this.lastSetPromise=e,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new ze,super.setValue(this.waitingForValueDeferredPromise.promise,A.strictEquals)),e.then(n=>{this.lastSetPromise!==e||this.lastSetId!==t||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==e||this.lastSetId!==t)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});let r=Fe(n);console.error(r),this.rejectValue(r)}),!0}resolveValue(e){return y_(e)||(e=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(e,A.strictEquals):super.setValue(e))?(this.lastResolvedValue=e,this.lastSetId=el(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(e),this.dispatch(new x_({detail:e})),!0):!1}rejectValue(e){this.waitingForValueDeferredPromise.reject(e),super.setValue(e,A.strictEquals),this.dispatch(new S_({detail:e}))}setValue(e){try{return e instanceof Promise?this.setPromise(e):e instanceof Error?(this.rejectValue(e),!0):y_(e)?this.resolveValue(e):!1}catch(e){return this.rejectValue(Fe(e)),!0}}listen(e,t){return super.listen(e,t)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?O_.Rejected:this.value instanceof Promise?O_.Waiting:O_.Resolved}},A_=class e extends k_{static NotSet=Symbol(`not set`);updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==e.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck=`equalityCheck`in t?t.equalityCheck:D_,this.updateCallback=t.updateCallback,this.internalParams=`defaultParams`in t?t.defaultParams:e.NotSet}updateFromCallback(){if(!this.updateCallback)throw TypeError(`Cannot update value: updateCallback was never set.`);if(this.internalParams===e.NotSet)throw TypeError(`Cannot update value: params were never set.`);try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(e){return this.setValue(Fe(e))}finally{this.dispatch(new w_)}}updateLastParams(t){try{return this.internalParams===e.NotSet||!this.equalityCheck?.(t,this.internalParams)?(this.internalParams=t,this.dispatch(new T_({detail:this.internalParams})),!0):!1}catch(e){return this.setValue(Fe(e)),!1}}update(...[e]){return this.updateLastParams(e)?(this.updateFromCallback(),!0):!1}setParams(e){return this.updateLastParams(e)}forceUpdate(...e){return A.isLengthAtLeast(e,1)&&this.updateLastParams(e[0]),this.updateFromCallback()}};function j_(e){return B_(e)&&!M_(e)&&!W_(e)&&Symbol.asyncIterator in e}function M_(e){return Array.isArray(e)}function N_(e){return typeof e==`bigint`}function P_(e){return typeof e==`boolean`}function F_(e){return e instanceof globalThis.Date}function I_(e){return typeof e==`function`}function L_(e){return B_(e)&&!M_(e)&&!W_(e)&&Symbol.iterator in e}function R_(e){return e===null}function z_(e){return typeof e==`number`}function B_(e){return typeof e==`object`&&!!e}function V_(e){return e instanceof globalThis.RegExp}function H_(e){return typeof e==`string`}function U_(e){return typeof e==`symbol`}function W_(e){return e instanceof globalThis.Uint8Array}function G_(e){return e===void 0}function K_(e){return e.map(e=>Z_(e))}function q_(e){return new Date(e.getTime())}function J_(e){return new Uint8Array(e)}function Y_(e){return new RegExp(e.source,e.flags)}function X_(e){let t={};for(let n of Object.getOwnPropertyNames(e))t[n]=Z_(e[n]);for(let n of Object.getOwnPropertySymbols(e))t[n]=Z_(e[n]);return t}function Z_(e){return M_(e)?K_(e):F_(e)?q_(e):W_(e)?J_(e):V_(e)?Y_(e):B_(e)?X_(e):e}function Q_(e){return Z_(e)}function $_(e,t){return Q_(t===void 0?e:{...t,...e})}function ev(e){return ov(e)&&globalThis.Symbol.asyncIterator in e}function tv(e){return ov(e)&&globalThis.Symbol.iterator in e}function nv(e){return e instanceof globalThis.Promise}function rv(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function iv(e){return e instanceof globalThis.Uint8Array}function av(e,t){return t in e}function ov(e){return typeof e==`object`&&!!e}function sv(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function cv(e){return e===void 0}function lv(e){return e===null}function uv(e){return typeof e==`boolean`}function dv(e){return typeof e==`number`}function fv(e){return globalThis.Number.isInteger(e)}function pv(e){return typeof e==`bigint`}function mv(e){return typeof e==`string`}function hv(e){return typeof e==`function`}function gv(e){return typeof e==`symbol`}function _v(e){return pv(e)||uv(e)||lv(e)||dv(e)||mv(e)||gv(e)||cv(e)}var vv;(function(e){e.InstanceMode=`default`,e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(t,n){return e.ExactOptionalPropertyTypes?n in t:t[n]!==void 0}e.IsExactOptionalProperty=t;function n(t){let n=ov(t);return e.AllowArrayObject?n:n&&!sv(t)}e.IsObjectLike=n;function r(e){return n(e)&&!(e instanceof Date)&&!(e instanceof Uint8Array)}e.IsRecordLike=r;function i(t){return e.AllowNaN?dv(t):Number.isFinite(t)}e.IsNumberLike=i;function a(t){let n=cv(t);return e.AllowNullVoid?n||t===null:n}e.IsVoidLike=a})(vv||={});function yv(e){return globalThis.Object.freeze(e).map(e=>wv(e))}function bv(e){return e}function xv(e){return e}function Sv(e){return e}function Cv(e){let t={};for(let n of Object.getOwnPropertyNames(e))t[n]=wv(e[n]);for(let n of Object.getOwnPropertySymbols(e))t[n]=wv(e[n]);return globalThis.Object.freeze(t)}function wv(e){return M_(e)?yv(e):F_(e)?bv(e):W_(e)?xv(e):V_(e)?Sv(e):B_(e)?Cv(e):e}function P(e,t){let n=t===void 0?e:{...t,...e};switch(vv.InstanceMode){case`freeze`:return wv(n);case`clone`:return Q_(n);default:return n}}var Tv=class extends Error{constructor(e){super(e)}},Ev=Symbol.for(`TypeBox.Transform`),Dv=Symbol.for(`TypeBox.Readonly`),Ov=Symbol.for(`TypeBox.Optional`),kv=Symbol.for(`TypeBox.Hint`),F=Symbol.for(`TypeBox.Kind`);function Av(e){return B_(e)&&e[Dv]===`Readonly`}function jv(e){return B_(e)&&e[Ov]===`Optional`}function Mv(e){return Gv(e,`Any`)}function Nv(e){return Gv(e,`Argument`)}function Pv(e){return Gv(e,`Array`)}function Fv(e){return Gv(e,`AsyncIterator`)}function Iv(e){return Gv(e,`BigInt`)}function Lv(e){return Gv(e,`Boolean`)}function Rv(e){return Gv(e,`Computed`)}function zv(e){return Gv(e,`Constructor`)}function Bv(e){return Gv(e,`Date`)}function Vv(e){return Gv(e,`Function`)}function Hv(e){return Gv(e,`Integer`)}function Uv(e){return Gv(e,`Intersect`)}function Wv(e){return Gv(e,`Iterator`)}function Gv(e,t){return B_(e)&&F in e&&e[F]===t}function Kv(e){return P_(e)||z_(e)||H_(e)}function qv(e){return Gv(e,`Literal`)}function Jv(e){return Gv(e,`MappedKey`)}function Yv(e){return Gv(e,`MappedResult`)}function Xv(e){return Gv(e,`Never`)}function Zv(e){return Gv(e,`Not`)}function Qv(e){return Gv(e,`Null`)}function $v(e){return Gv(e,`Number`)}function ey(e){return Gv(e,`Object`)}function ty(e){return Gv(e,`Promise`)}function ny(e){return Gv(e,`Record`)}function ry(e){return Gv(e,`Ref`)}function iy(e){return Gv(e,`RegExp`)}function ay(e){return Gv(e,`String`)}function oy(e){return Gv(e,`Symbol`)}function sy(e){return Gv(e,`TemplateLiteral`)}function cy(e){return Gv(e,`This`)}function ly(e){return B_(e)&&Ev in e}function uy(e){return Gv(e,`Tuple`)}function dy(e){return Gv(e,`Undefined`)}function fy(e){return Gv(e,`Union`)}function py(e){return Gv(e,`Uint8Array`)}function my(e){return Gv(e,`Unknown`)}function hy(e){return Gv(e,`Unsafe`)}function gy(e){return Gv(e,`Void`)}function _y(e){return B_(e)&&F in e&&H_(e[F])}function vy(e){return Mv(e)||Nv(e)||Pv(e)||Lv(e)||Iv(e)||Fv(e)||Rv(e)||zv(e)||Bv(e)||Vv(e)||Hv(e)||Uv(e)||Wv(e)||qv(e)||Jv(e)||Yv(e)||Xv(e)||Zv(e)||Qv(e)||$v(e)||ey(e)||ty(e)||ny(e)||ry(e)||iy(e)||ay(e)||oy(e)||sy(e)||cy(e)||uy(e)||dy(e)||fy(e)||py(e)||my(e)||hy(e)||gy(e)||_y(e)}var yy=`Argument.Any.Array.AsyncIterator.BigInt.Boolean.Computed.Constructor.Date.Enum.Function.Integer.Intersect.Iterator.Literal.MappedKey.MappedResult.Not.Null.Number.Object.Promise.Record.Ref.RegExp.String.Symbol.TemplateLiteral.This.Tuple.Undefined.Union.Uint8Array.Unknown.Void`.split(`.`);function by(e){try{return new RegExp(e),!0}catch{return!1}}function xy(e){if(!H_(e))return!1;for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(n>=7&&n<=13||n===27||n===127)return!1}return!0}function Sy(e){return Ty(e)||xb(e)}function Cy(e){return G_(e)||N_(e)}function wy(e){return G_(e)||z_(e)}function Ty(e){return G_(e)||P_(e)}function Ey(e){return G_(e)||H_(e)}function Dy(e){return G_(e)||H_(e)&&xy(e)&&by(e)}function Oy(e){return G_(e)||H_(e)&&xy(e)}function ky(e){return G_(e)||xb(e)}function Ay(e){return B_(e)&&e[Ov]===`Optional`}function jy(e){return Gy(e,`Any`)&&Ey(e.$id)}function My(e){return Gy(e,`Argument`)&&z_(e.index)}function Ny(e){return Gy(e,`Array`)&&e.type===`array`&&Ey(e.$id)&&xb(e.items)&&wy(e.minItems)&&wy(e.maxItems)&&Ty(e.uniqueItems)&&ky(e.contains)&&wy(e.minContains)&&wy(e.maxContains)}function Py(e){return Gy(e,`AsyncIterator`)&&e.type===`AsyncIterator`&&Ey(e.$id)&&xb(e.items)}function Fy(e){return Gy(e,`BigInt`)&&e.type===`bigint`&&Ey(e.$id)&&Cy(e.exclusiveMaximum)&&Cy(e.exclusiveMinimum)&&Cy(e.maximum)&&Cy(e.minimum)&&Cy(e.multipleOf)}function Iy(e){return Gy(e,`Boolean`)&&e.type===`boolean`&&Ey(e.$id)}function Ly(e){return Gy(e,`Computed`)&&H_(e.target)&&M_(e.parameters)&&e.parameters.every(e=>xb(e))}function Ry(e){return Gy(e,`Constructor`)&&e.type===`Constructor`&&Ey(e.$id)&&M_(e.parameters)&&e.parameters.every(e=>xb(e))&&xb(e.returns)}function zy(e){return Gy(e,`Date`)&&e.type===`Date`&&Ey(e.$id)&&wy(e.exclusiveMaximumTimestamp)&&wy(e.exclusiveMinimumTimestamp)&&wy(e.maximumTimestamp)&&wy(e.minimumTimestamp)&&wy(e.multipleOfTimestamp)}function By(e){return Gy(e,`Function`)&&e.type===`Function`&&Ey(e.$id)&&M_(e.parameters)&&e.parameters.every(e=>xb(e))&&xb(e.returns)}function Vy(e){return Gy(e,`Integer`)&&e.type===`integer`&&Ey(e.$id)&&wy(e.exclusiveMaximum)&&wy(e.exclusiveMinimum)&&wy(e.maximum)&&wy(e.minimum)&&wy(e.multipleOf)}function Hy(e){return B_(e)&&Object.entries(e).every(([e,t])=>xy(e)&&xb(t))}function Uy(e){return Gy(e,`Intersect`)&&!(H_(e.type)&&e.type!==`object`)&&M_(e.allOf)&&e.allOf.every(e=>xb(e)&&!fb(e))&&Ey(e.type)&&(Ty(e.unevaluatedProperties)||ky(e.unevaluatedProperties))&&Ey(e.$id)}function Wy(e){return Gy(e,`Iterator`)&&e.type===`Iterator`&&Ey(e.$id)&&xb(e.items)}function Gy(e,t){return B_(e)&&F in e&&e[F]===t}function Ky(e){return Yy(e)&&H_(e.const)}function qy(e){return Yy(e)&&z_(e.const)}function Jy(e){return Yy(e)&&P_(e.const)}function Yy(e){return Gy(e,`Literal`)&&Ey(e.$id)&&Xy(e.const)}function Xy(e){return P_(e)||z_(e)||H_(e)}function Zy(e){return Gy(e,`MappedKey`)&&M_(e.keys)&&e.keys.every(e=>z_(e)||H_(e))}function Qy(e){return Gy(e,`MappedResult`)&&Hy(e.properties)}function $y(e){return Gy(e,`Never`)&&B_(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function eb(e){return Gy(e,`Not`)&&xb(e.not)}function tb(e){return Gy(e,`Null`)&&e.type===`null`&&Ey(e.$id)}function nb(e){return Gy(e,`Number`)&&e.type===`number`&&Ey(e.$id)&&wy(e.exclusiveMaximum)&&wy(e.exclusiveMinimum)&&wy(e.maximum)&&wy(e.minimum)&&wy(e.multipleOf)}function rb(e){return Gy(e,`Object`)&&e.type===`object`&&Ey(e.$id)&&Hy(e.properties)&&Sy(e.additionalProperties)&&wy(e.minProperties)&&wy(e.maxProperties)}function ib(e){return Gy(e,`Promise`)&&e.type===`Promise`&&Ey(e.$id)&&xb(e.item)}function ab(e){return Gy(e,`Record`)&&e.type===`object`&&Ey(e.$id)&&Sy(e.additionalProperties)&&B_(e.patternProperties)&&(e=>{let t=Object.getOwnPropertyNames(e.patternProperties);return t.length===1&&by(t[0])&&B_(e.patternProperties)&&xb(e.patternProperties[t[0]])})(e)}function ob(e){return Gy(e,`Ref`)&&Ey(e.$id)&&H_(e.$ref)}function sb(e){return Gy(e,`RegExp`)&&Ey(e.$id)&&H_(e.source)&&H_(e.flags)&&wy(e.maxLength)&&wy(e.minLength)}function cb(e){return Gy(e,`String`)&&e.type===`string`&&Ey(e.$id)&&wy(e.minLength)&&wy(e.maxLength)&&Dy(e.pattern)&&Oy(e.format)}function lb(e){return Gy(e,`Symbol`)&&e.type===`symbol`&&Ey(e.$id)}function ub(e){return Gy(e,`TemplateLiteral`)&&e.type===`string`&&H_(e.pattern)&&e.pattern[0]===`^`&&e.pattern[e.pattern.length-1]===`$`}function db(e){return Gy(e,`This`)&&Ey(e.$id)&&H_(e.$ref)}function fb(e){return B_(e)&&Ev in e}function pb(e){return Gy(e,`Tuple`)&&e.type===`array`&&Ey(e.$id)&&z_(e.minItems)&&z_(e.maxItems)&&e.minItems===e.maxItems&&(G_(e.items)&&G_(e.additionalItems)&&e.minItems===0||M_(e.items)&&e.items.every(e=>xb(e)))}function mb(e){return Gy(e,`Undefined`)&&e.type===`undefined`&&Ey(e.$id)}function hb(e){return Gy(e,`Union`)&&Ey(e.$id)&&B_(e)&&M_(e.anyOf)&&e.anyOf.every(e=>xb(e))}function gb(e){return Gy(e,`Uint8Array`)&&e.type===`Uint8Array`&&Ey(e.$id)&&wy(e.minByteLength)&&wy(e.maxByteLength)}function _b(e){return Gy(e,`Unknown`)&&Ey(e.$id)}function vb(e){return Gy(e,`Unsafe`)}function yb(e){return Gy(e,`Void`)&&e.type===`void`&&Ey(e.$id)}function bb(e){return B_(e)&&F in e&&H_(e[F])&&!yy.includes(e[F])}function xb(e){return B_(e)&&(jy(e)||My(e)||Ny(e)||Iy(e)||Fy(e)||Py(e)||Ly(e)||Ry(e)||zy(e)||By(e)||Vy(e)||Uy(e)||Wy(e)||Yy(e)||Zy(e)||Qy(e)||$y(e)||eb(e)||tb(e)||nb(e)||rb(e)||ib(e)||ab(e)||ob(e)||sb(e)||cb(e)||lb(e)||ub(e)||db(e)||pb(e)||mb(e)||hb(e)||gb(e)||_b(e)||vb(e)||yb(e)||bb(e))}var Sb=`(true|false)`,Cb=`(0|[1-9][0-9]*)`,wb=`(.*)`,Tb=`(?!.*)`;`${Sb}`;var Eb=`^${Cb}$`,Db=`^${wb}$`,Ob=`^${Tb}$`,kb=new Map;function Ab(e){return kb.has(e)}function jb(e){return kb.get(e)}var Mb=new Map;function Nb(e){return Mb.has(e)}function Pb(e,t){Mb.set(e,t)}function Fb(e){return Mb.get(e)}function Ib(e,t){return e.includes(t)}function Lb(e){return[...new Set(e)]}function Rb(e,t){return e.filter(e=>t.includes(e))}function zb(e,t){return e.reduce((e,t)=>Rb(e,t),t)}function Bb(e){return e.length===1?e[0]:e.length>1?zb(e.slice(1),e[0]):[]}function Vb(e){let t=[];for(let n of e)t.push(...n);return t}function Hb(e){return P({[F]:`Any`},e)}function Ub(e,t){return P({[F]:`Array`,type:`array`,items:e},t)}function Wb(e){return P({[F]:`Argument`,index:e})}function Gb(e,t){return P({[F]:`AsyncIterator`,type:`AsyncIterator`,items:e},t)}function Kb(e,t,n){return P({[F]:`Computed`,target:e,parameters:t},n)}function qb(e,t){let{[t]:n,...r}=e;return r}function Jb(e,t){return t.reduce((e,t)=>qb(e,t),e)}function Yb(e){return P({[F]:`Never`,not:{}},e)}function Xb(e){return P({[F]:`MappedResult`,properties:e})}function Zb(e,t,n){return P({[F]:`Constructor`,type:`Constructor`,parameters:e,returns:t},n)}function Qb(e,t,n){return P({[F]:`Function`,type:`Function`,parameters:e,returns:t},n)}function $b(e,t){return P({[F]:`Union`,anyOf:e},t)}function ex(e){return e.some(e=>jv(e))}function tx(e){return e.map(e=>jv(e)?nx(e):e)}function nx(e){return Jb(e,[Ov])}function rx(e,t){return ex(e)?US($b(tx(e),t)):$b(tx(e),t)}function ix(e,t){return e.length===1?P(e[0],t):e.length===0?Yb(t):rx(e,t)}function ax(e,t){return e.length===0?Yb(t):e.length===1?P(e[0],t):$b(e,t)}var ox=class extends Tv{};function sx(e){return e.replace(/\\\$/g,`$`).replace(/\\\*/g,`*`).replace(/\\\^/g,`^`).replace(/\\\|/g,`|`).replace(/\\\(/g,`(`).replace(/\\\)/g,`)`)}function cx(e,t,n){return e[t]===n&&e.charCodeAt(t-1)!==92}function lx(e,t){return cx(e,t,`(`)}function ux(e,t){return cx(e,t,`)`)}function dx(e,t){return cx(e,t,`|`)}function fx(e){if(!(lx(e,0)&&ux(e,e.length-1)))return!1;let t=0;for(let n=0;n<e.length;n++)if(lx(e,n)&&(t+=1),ux(e,n)&&--t,t===0&&n!==e.length-1)return!1;return!0}function px(e){return e.slice(1,e.length-1)}function mx(e){let t=0;for(let n=0;n<e.length;n++)if(lx(e,n)&&(t+=1),ux(e,n)&&--t,dx(e,n)&&t===0)return!0;return!1}function hx(e){for(let t=0;t<e.length;t++)if(lx(e,t))return!0;return!1}function gx(e){let[t,n]=[0,0],r=[];for(let i=0;i<e.length;i++)if(lx(e,i)&&(t+=1),ux(e,i)&&--t,dx(e,i)&&t===0){let t=e.slice(n,i);t.length>0&&r.push(vx(t)),n=i+1}let i=e.slice(n);return i.length>0&&r.push(vx(i)),r.length===0?{type:`const`,const:``}:r.length===1?r[0]:{type:`or`,expr:r}}function _x(e){function t(e,t){if(!lx(e,t))throw new ox(`TemplateLiteralParser: Index must point to open parens`);let n=0;for(let r=t;r<e.length;r++)if(lx(e,r)&&(n+=1),ux(e,r)&&--n,n===0)return[t,r];throw new ox(`TemplateLiteralParser: Unclosed group parens in expression`)}function n(e,t){for(let n=t;n<e.length;n++)if(lx(e,n))return[t,n];return[t,e.length]}let r=[];for(let i=0;i<e.length;i++)if(lx(e,i)){let[n,a]=t(e,i),o=e.slice(n,a+1);r.push(vx(o)),i=a}else{let[t,a]=n(e,i),o=e.slice(t,a);o.length>0&&r.push(vx(o)),i=a-1}return r.length===0?{type:`const`,const:``}:r.length===1?r[0]:{type:`and`,expr:r}}function vx(e){return fx(e)?vx(px(e)):mx(e)?gx(e):hx(e)?_x(e):{type:`const`,const:sx(e)}}function yx(e){return vx(e.slice(1,e.length-1))}var bx=class extends Tv{};function xx(e){return e.type===`or`&&e.expr.length===2&&e.expr[0].type===`const`&&e.expr[0].const===`0`&&e.expr[1].type===`const`&&e.expr[1].const===`[1-9][0-9]*`}function Sx(e){return e.type===`or`&&e.expr.length===2&&e.expr[0].type===`const`&&e.expr[0].const===`true`&&e.expr[1].type===`const`&&e.expr[1].const===`false`}function Cx(e){return e.type===`const`&&e.const===`.*`}function wx(e){return xx(e)||Cx(e)?!1:Sx(e)?!0:e.type===`and`||e.type===`or`?e.expr.every(e=>wx(e)):e.type===`const`?!0:(()=>{throw new bx(`Unknown expression type`)})()}function Tx(e){return wx(yx(e.pattern))}var Ex=class extends Tv{};function*Dx(e){if(e.length===1)return yield*e[0];for(let t of e[0])for(let n of Dx(e.slice(1)))yield`${t}${n}`}function*Ox(e){return yield*Dx(e.expr.map(e=>[...jx(e)]))}function*kx(e){for(let t of e.expr)yield*jx(t)}function*Ax(e){return yield e.const}function*jx(e){return e.type===`and`?yield*Ox(e):e.type===`or`?yield*kx(e):e.type===`const`?yield*Ax(e):(()=>{throw new Ex(`Unknown expression`)})()}function Mx(e){let t=yx(e.pattern);return wx(t)?[...jx(t)]:[]}function Nx(e,t){return P({[F]:`Literal`,const:e,type:typeof e},t)}function Px(e){return P({[F]:`Boolean`,type:`boolean`},e)}function Fx(e){return P({[F]:`BigInt`,type:`bigint`},e)}function Ix(e){return P({[F]:`Number`,type:`number`},e)}function Lx(e){return P({[F]:`String`,type:`string`},e)}function*Rx(e){let t=e.trim().replace(/"|'/g,``);return t===`boolean`?yield Px():t===`number`?yield Ix():t===`bigint`?yield Fx():t===`string`?yield Lx():yield(()=>{let e=t.split(`|`).map(e=>Nx(e.trim()));return e.length===0?Yb():e.length===1?e[0]:ix(e)})()}function*zx(e){if(e[1]!==`{`)return yield*[Nx(`$`),...Bx(e.slice(1))];for(let t=2;t<e.length;t++)if(e[t]===`}`){let n=Rx(e.slice(2,t)),r=Bx(e.slice(t+1));return yield*[...n,...r]}yield Nx(e)}function*Bx(e){for(let t=0;t<e.length;t++)if(e[t]===`$`)return yield*[Nx(e.slice(0,t)),...zx(e.slice(t))];yield Nx(e)}function Vx(e){return[...Bx(e)]}var Hx=class extends Tv{};function Ux(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function Wx(e,t){return sy(e)?e.pattern.slice(1,e.pattern.length-1):fy(e)?`(${e.anyOf.map(e=>Wx(e,t)).join(`|`)})`:$v(e)||Hv(e)||Iv(e)?`${t}${Cb}`:ay(e)?`${t}${wb}`:qv(e)?`${t}${Ux(e.const.toString())}`:Lv(e)?`${t}${Sb}`:(()=>{throw new Hx(`Unexpected Kind '${e[F]}'`)})()}function Gx(e){return`^${e.map(e=>Wx(e,``)).join(``)}\$`}function Kx(e){return ix(Mx(e).map(e=>Nx(e)))}function qx(e,t){let n=H_(e)?Gx(Vx(e)):Gx(e);return P({[F]:`TemplateLiteral`,type:`string`,pattern:n},t)}function Jx(e){return Mx(e).map(e=>e.toString())}function Yx(e){let t=[];for(let n of e)t.push(...Zx(n));return t}function Xx(e){return[e.toString()]}function Zx(e){return[...new Set(sy(e)?Jx(e):fy(e)?Yx(e.anyOf):qv(e)?Xx(e.const):$v(e)||Hv(e)?[`[number]`]:[])]}function Qx(e,t,n){let r={};for(let i of Object.getOwnPropertyNames(t))r[i]=fS(e,Zx(t[i]),n);return r}function $x(e,t,n){return Qx(e,t.properties,n)}function eS(e,t,n){return Xb($x(e,t,n))}function tS(e,t){return e.map(e=>lS(e,t))}function nS(e){return e.filter(e=>!Xv(e))}function rS(e,t){return QS(nS(tS(e,t)))}function iS(e){return e.some(e=>Xv(e))?[]:e}function aS(e,t){return ix(iS(tS(e,t)))}function oS(e,t){return t in e?e[t]:t===`[number]`?ix(e):Yb()}function sS(e,t){return t===`[number]`?e:Yb()}function cS(e,t){return t in e?e[t]:Yb()}function lS(e,t){return Uv(e)?rS(e.allOf,t):fy(e)?aS(e.anyOf,t):uy(e)?oS(e.items??[],t):Pv(e)?sS(e.items,t):ey(e)?cS(e.properties,t):Yb()}function uS(e,t){return t.map(t=>lS(e,t))}function dS(e,t){return ix(uS(e,t))}function fS(e,t,n){if(ry(e)||ry(t)){if(!vy(e)||!vy(t))throw new Tv(`Index types using Ref parameters require both Type and Key to be of TSchema`);return Kb(`Index`,[e,t])}return Yv(t)?eS(e,t,n):Jv(t)?gS(e,t,n):P(vy(t)?dS(e,Zx(t)):dS(e,t),n)}function pS(e,t,n){return{[t]:fS(e,[t],Q_(n))}}function mS(e,t,n){return t.reduce((t,r)=>({...t,...pS(e,r,n)}),{})}function hS(e,t,n){return mS(e,t.keys,n)}function gS(e,t,n){return Xb(hS(e,t,n))}function _S(e,t){return P({[F]:`Iterator`,type:`Iterator`,items:e},t)}function vS(e){return globalThis.Object.keys(e).filter(t=>!jv(e[t]))}function yS(e,t){let n=vS(e);return P(n.length>0?{[F]:`Object`,type:`object`,required:n,properties:e}:{[F]:`Object`,type:`object`,properties:e},t)}var bS=yS;function xS(e,t){return P({[F]:`Promise`,type:`Promise`,item:e},t)}function SS(e){return P(Jb(e,[Dv]))}function CS(e){return P({...e,[Dv]:`Readonly`})}function wS(e,t){return t===!1?SS(e):CS(e)}function TS(e,t){let n=t??!0;return Yv(e)?OS(e,n):wS(e,n)}function ES(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=TS(e[r],t);return n}function DS(e,t){return ES(e.properties,t)}function OS(e,t){return Xb(DS(e,t))}function kS(e,t){return P(e.length>0?{[F]:`Tuple`,type:`array`,items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[F]:`Tuple`,type:`array`,minItems:e.length,maxItems:e.length},t)}function AS(e,t){return e in t?LS(e,t[e]):Xb(t)}function jS(e){return{[e]:Nx(e)}}function MS(e){let t={};for(let n of e)t[n]=Nx(n);return t}function NS(e,t){return Ib(t,e)?jS(e):MS(t)}function PS(e,t){return AS(e,NS(e,t))}function FS(e,t){return t.map(t=>LS(e,t))}function IS(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(t))n[r]=LS(e,t[r]);return n}function LS(e,t){let n={...t};return jv(t)?US(LS(e,Jb(t,[Ov]))):Av(t)?TS(LS(e,Jb(t,[Dv]))):Yv(t)?AS(e,t.properties):Jv(t)?PS(e,t.keys):zv(t)?Zb(FS(e,t.parameters),LS(e,t.returns),n):Vv(t)?Qb(FS(e,t.parameters),LS(e,t.returns),n):Fv(t)?Gb(LS(e,t.items),n):Wv(t)?_S(LS(e,t.items),n):Uv(t)?$S(FS(e,t.allOf),n):fy(t)?ax(FS(e,t.anyOf),n):uy(t)?kS(FS(e,t.items??[]),n):ey(t)?bS(IS(e,t.properties),n):Pv(t)?Ub(LS(e,t.items),n):ty(t)?xS(LS(e,t.item),n):t}function RS(e,t){let n={};for(let r of e)n[r]=LS(r,t);return n}function zS(e,t,n){let r=vy(e)?Zx(e):e;return bS(RS(r,t({[F]:`MappedKey`,keys:r})),n)}function BS(e){return P(Jb(e,[Ov]))}function VS(e){return P({...e,[Ov]:`Optional`})}function HS(e,t){return t===!1?BS(e):VS(e)}function US(e,t){let n=t??!0;return Yv(e)?KS(e,n):HS(e,n)}function WS(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=US(e[r],t);return n}function GS(e,t){return WS(e.properties,t)}function KS(e,t){return Xb(GS(e,t))}function qS(e,t={}){let n=e.every(e=>ey(e)),r=vy(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return P(t.unevaluatedProperties===!1||vy(t.unevaluatedProperties)||n?{...r,[F]:`Intersect`,type:`object`,allOf:e}:{...r,[F]:`Intersect`,allOf:e},t)}function JS(e){return e.every(e=>jv(e))}function YS(e){return Jb(e,[Ov])}function XS(e){return e.map(e=>jv(e)?YS(e):e)}function ZS(e,t){return JS(e)?US(qS(XS(e),t)):qS(XS(e),t)}function QS(e,t={}){if(e.length===1)return P(e[0],t);if(e.length===0)return Yb(t);if(e.some(e=>ly(e)))throw Error(`Cannot intersect transform types`);return ZS(e,t)}function $S(e,t){if(e.length===1)return P(e[0],t);if(e.length===0)return Yb(t);if(e.some(e=>ly(e)))throw Error(`Cannot intersect transform types`);return qS(e,t)}function eC(...e){let[t,n]=typeof e[0]==`string`?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!=`string`)throw new Tv(`Ref: $ref must be a string`);return P({[F]:`Ref`,$ref:t},n)}function tC(e,t){return Kb(`Awaited`,[Kb(e,t)])}function nC(e){return Kb(`Awaited`,[eC(e)])}function rC(e){return $S(oC(e))}function iC(e){return ax(oC(e))}function aC(e){return sC(e)}function oC(e){return e.map(e=>sC(e))}function sC(e,t){return P(Rv(e)?tC(e.target,e.parameters):Uv(e)?rC(e.allOf):fy(e)?iC(e.anyOf):ty(e)?aC(e.item):ry(e)?nC(e.$ref):e,t)}function cC(e){let t=[];for(let n of e)t.push(hC(n));return t}function lC(e){return Vb(cC(e))}function uC(e){return Bb(cC(e))}function dC(e){return e.map((e,t)=>t.toString())}function fC(e){return[`[number]`]}function pC(e){return globalThis.Object.getOwnPropertyNames(e)}function mC(e){return gC?globalThis.Object.getOwnPropertyNames(e).map(e=>e[0]===`^`&&e[e.length-1]===`$`?e.slice(1,e.length-1):e):[]}function hC(e){return Uv(e)?lC(e.allOf):fy(e)?uC(e.anyOf):uy(e)?dC(e.items??[]):Pv(e)?fC(e.items):ey(e)?pC(e.properties):ny(e)?mC(e.patternProperties):[]}var gC=!1;function _C(e){gC=!0;let t=hC(e);return gC=!1,`^(${t.map(e=>`(${e})`).join(`|`)})$`}function vC(e,t){return Kb(`KeyOf`,[Kb(e,t)])}function yC(e){return Kb(`KeyOf`,[eC(e)])}function bC(e,t){return P(ix(xC(hC(e))),t)}function xC(e){return e.map(e=>e===`[number]`?Ix():Nx(e))}function SC(e,t){return Rv(e)?vC(e.target,e.parameters):ry(e)?yC(e.$ref):Yv(e)?TC(e,t):bC(e,t)}function CC(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=SC(e[r],Q_(t));return n}function wC(e,t){return CC(e.properties,t)}function TC(e,t){return Xb(wC(e,t))}function EC(e){let t=hC(e),n=uS(e,t);return t.map((e,r)=>[t[r],n[r]])}function DC(e){let t=[];for(let n of e)t.push(...hC(n));return Lb(t)}function OC(e){return e.filter(e=>!Xv(e))}function kC(e,t){let n=[];for(let r of e)n.push(...uS(r,[t]));return OC(n)}function AC(e,t){let n={};for(let r of t)n[r]=QS(kC(e,r));return n}function jC(e,t){return bS(AC(e,DC(e)),t)}function MC(e){return P({[F]:`Date`,type:`Date`},e)}function NC(e){return P({[F]:`Null`,type:`null`},e)}function PC(e){return P({[F]:`Symbol`,type:`symbol`},e)}function FC(e){return P({[F]:`Undefined`,type:`undefined`},e)}function IC(e){return P({[F]:`Uint8Array`,type:`Uint8Array`},e)}function LC(e){return P({[F]:`Unknown`},e)}function RC(e){return e.map(e=>VC(e,!1))}function zC(e){let t={};for(let n of globalThis.Object.getOwnPropertyNames(e))t[n]=TS(VC(e[n],!1));return t}function BC(e,t){return t===!0?e:TS(e)}function VC(e,t){return j_(e)||L_(e)?BC(Hb(),t):M_(e)?TS(kS(RC(e))):W_(e)?IC():F_(e)?MC():B_(e)?BC(bS(zC(e)),t):I_(e)?BC(Qb([],LC()),t):G_(e)?FC():R_(e)?NC():U_(e)?PC():N_(e)?Fx():z_(e)||P_(e)||H_(e)?Nx(e):bS({})}function HC(e,t){return P(VC(e,!0),t)}function UC(e,t){return zv(e)?kS(e.parameters,t):Yb(t)}function WC(e,t){if(G_(e))throw Error(`Enum undefined or empty`);let n=globalThis.Object.getOwnPropertyNames(e).filter(e=>isNaN(e)).map(t=>e[t]);return ax([...new Set(n)].map(e=>Nx(e)),{...t,[kv]:`Enum`})}var GC=class extends Tv{},I;(function(e){e[e.Union=0]=`Union`,e[e.True=1]=`True`,e[e.False=2]=`False`})(I||={});function KC(e){return e===I.False?e:I.True}function qC(e){throw new GC(e)}function JC(e){return $y(e)||Uy(e)||hb(e)||_b(e)||jy(e)}function YC(e,t){return $y(t)?pw(e,t):Uy(t)?lw(e,t):hb(t)?Xw(e,t):_b(t)?Qw(e,t):jy(t)?XC(e,t):qC(`StructuralRight`)}function XC(e,t){return I.True}function ZC(e,t){return Uy(t)?lw(e,t):hb(t)&&t.anyOf.some(e=>jy(e)||_b(e))?I.True:hb(t)?I.Union:_b(t)||jy(t)?I.True:I.Union}function QC(e,t){return _b(e)?I.False:jy(e)?I.Union:$y(e)?I.True:I.False}function $C(e,t){return rb(t)&&Aw(t)?I.True:JC(t)?YC(e,t):Ny(t)?KC(nT(e.items,t.items)):I.False}function ew(e,t){return JC(t)?YC(e,t):Py(t)?KC(nT(e.items,t.items)):I.False}function tw(e,t){return JC(t)?YC(e,t):rb(t)?Nw(e,t):ab(t)?Rw(e,t):Fy(t)?I.True:I.False}function nw(e,t){return Jy(e)||Iy(e)?I.True:I.False}function rw(e,t){return JC(t)?YC(e,t):rb(t)?Nw(e,t):ab(t)?Rw(e,t):Iy(t)?I.True:I.False}function iw(e,t){return JC(t)?YC(e,t):rb(t)?Nw(e,t):Ry(t)?e.parameters.length>t.parameters.length?I.False:e.parameters.every((e,n)=>KC(nT(t.parameters[n],e))===I.True)?KC(nT(e.returns,t.returns)):I.False:I.False}function aw(e,t){return JC(t)?YC(e,t):rb(t)?Nw(e,t):ab(t)?Rw(e,t):zy(t)?I.True:I.False}function ow(e,t){return JC(t)?YC(e,t):rb(t)?Nw(e,t):By(t)?e.parameters.length>t.parameters.length?I.False:e.parameters.every((e,n)=>KC(nT(t.parameters[n],e))===I.True)?KC(nT(e.returns,t.returns)):I.False:I.False}function sw(e,t){return Yy(e)&&z_(e.const)||nb(e)||Vy(e)?I.True:I.False}function cw(e,t){return Vy(t)||nb(t)?I.True:JC(t)?YC(e,t):rb(t)?Nw(e,t):ab(t)?Rw(e,t):I.False}function lw(e,t){return t.allOf.every(t=>nT(e,t)===I.True)?I.True:I.False}function uw(e,t){return e.allOf.some(e=>nT(e,t)===I.True)?I.True:I.False}function dw(e,t){return JC(t)?YC(e,t):Wy(t)?KC(nT(e.items,t.items)):I.False}function fw(e,t){return Yy(t)&&t.const===e.const?I.True:JC(t)?YC(e,t):rb(t)?Nw(e,t):ab(t)?Rw(e,t):cb(t)?Vw(e,t):nb(t)?vw(e,t):Vy(t)?sw(e,t):Iy(t)?nw(e,t):I.False}function pw(e,t){return I.False}function mw(e,t){return I.True}function hw(e){let[t,n]=[e,0];for(;eb(t);)t=t.not,n+=1;return n%2==0?t:LC()}function gw(e,t){return eb(e)?nT(hw(e),t):eb(t)?nT(e,hw(t)):qC(`Invalid fallthrough for Not`)}function _w(e,t){return JC(t)?YC(e,t):rb(t)?Nw(e,t):ab(t)?Rw(e,t):tb(t)?I.True:I.False}function vw(e,t){return qy(e)||nb(e)||Vy(e)?I.True:I.False}function yw(e,t){return JC(t)?YC(e,t):rb(t)?Nw(e,t):ab(t)?Rw(e,t):Vy(t)||nb(t)?I.True:I.False}function bw(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function xw(e){return Aw(e)}function Sw(e){return bw(e,0)||bw(e,1)&&`description`in e.properties&&hb(e.properties.description)&&e.properties.description.anyOf.length===2&&(cb(e.properties.description.anyOf[0])&&mb(e.properties.description.anyOf[1])||cb(e.properties.description.anyOf[1])&&mb(e.properties.description.anyOf[0]))}function Cw(e){return bw(e,0)}function ww(e){return bw(e,0)}function Tw(e){return bw(e,0)}function Ew(e){return bw(e,0)}function Dw(e){return Aw(e)}function Ow(e){let t=Ix();return bw(e,0)||bw(e,1)&&`length`in e.properties&&KC(nT(e.properties.length,t))===I.True}function kw(e){return bw(e,0)}function Aw(e){let t=Ix();return bw(e,0)||bw(e,1)&&`length`in e.properties&&KC(nT(e.properties.length,t))===I.True}function jw(e){let t=Qb([Hb()],Hb());return bw(e,0)||bw(e,1)&&`then`in e.properties&&KC(nT(e.properties.then,t))===I.True}function Mw(e,t){return nT(e,t)===I.False||Ay(e)&&!Ay(t)?I.False:I.True}function Nw(e,t){return _b(e)?I.False:jy(e)?I.Union:$y(e)||Ky(e)&&xw(t)||qy(e)&&Cw(t)||Jy(e)&&ww(t)||lb(e)&&Sw(t)||Fy(e)&&Tw(t)||cb(e)&&xw(t)||lb(e)&&Sw(t)||nb(e)&&Cw(t)||Vy(e)&&Cw(t)||Iy(e)&&ww(t)||gb(e)&&Dw(t)||zy(e)&&Ew(t)||Ry(e)&&kw(t)||By(e)&&Ow(t)?I.True:ab(e)&&cb(Iw(e))?t[kv]===`Record`?I.True:I.False:ab(e)&&nb(Iw(e))&&bw(t,0)?I.True:I.False}function Pw(e,t){return JC(t)?YC(e,t):ab(t)?Rw(e,t):rb(t)?(()=>{for(let n of Object.getOwnPropertyNames(t.properties)){if(!(n in e.properties)&&!Ay(t.properties[n]))return I.False;if(Ay(t.properties[n]))return I.True;if(Mw(e.properties[n],t.properties[n])===I.False)return I.False}return I.True})():I.False}function Fw(e,t){return JC(t)?YC(e,t):rb(t)&&jw(t)?I.True:ib(t)?KC(nT(e.item,t.item)):I.False}function Iw(e){return Eb in e.patternProperties?Ix():Db in e.patternProperties?Lx():qC(`Unknown record key pattern`)}function Lw(e){return Eb in e.patternProperties?e.patternProperties[Eb]:Db in e.patternProperties?e.patternProperties[Db]:qC(`Unable to get record value schema`)}function Rw(e,t){let[n,r]=[Iw(t),Lw(t)];return Ky(e)&&nb(n)&&KC(nT(e,r))===I.True?I.True:gb(e)&&nb(n)||cb(e)&&nb(n)||Ny(e)&&nb(n)?nT(e,r):rb(e)?(()=>{for(let t of Object.getOwnPropertyNames(e.properties))if(Mw(r,e.properties[t])===I.False)return I.False;return I.True})():I.False}function zw(e,t){return JC(t)?YC(e,t):rb(t)?Nw(e,t):ab(t)?nT(Lw(e),Lw(t)):I.False}function Bw(e,t){return nT(sb(e)?Lx():e,sb(t)?Lx():t)}function Vw(e,t){return Yy(e)&&H_(e.const)||cb(e)?I.True:I.False}function Hw(e,t){return JC(t)?YC(e,t):rb(t)?Nw(e,t):ab(t)?Rw(e,t):cb(t)?I.True:I.False}function Uw(e,t){return JC(t)?YC(e,t):rb(t)?Nw(e,t):ab(t)?Rw(e,t):lb(t)?I.True:I.False}function Ww(e,t){return ub(e)?nT(Kx(e),t):ub(t)?nT(e,Kx(t)):qC(`Invalid fallthrough for TemplateLiteral`)}function Gw(e,t){return Ny(t)&&e.items!==void 0&&e.items.every(e=>nT(e,t.items)===I.True)}function Kw(e,t){return $y(e)?I.True:_b(e)?I.False:jy(e)?I.Union:I.False}function qw(e,t){return JC(t)?YC(e,t):rb(t)&&Aw(t)||Ny(t)&&Gw(e,t)?I.True:pb(t)?G_(e.items)&&!G_(t.items)||!G_(e.items)&&G_(t.items)?I.False:G_(e.items)&&!G_(t.items)||e.items.every((e,n)=>nT(e,t.items[n])===I.True)?I.True:I.False:I.False}function Jw(e,t){return JC(t)?YC(e,t):rb(t)?Nw(e,t):ab(t)?Rw(e,t):gb(t)?I.True:I.False}function Yw(e,t){return JC(t)?YC(e,t):rb(t)?Nw(e,t):ab(t)?Rw(e,t):yb(t)?eT(e,t):mb(t)?I.True:I.False}function Xw(e,t){return t.anyOf.some(t=>nT(e,t)===I.True)?I.True:I.False}function Zw(e,t){return e.anyOf.every(e=>nT(e,t)===I.True)?I.True:I.False}function Qw(e,t){return I.True}function $w(e,t){return $y(t)?pw(e,t):Uy(t)?lw(e,t):hb(t)?Xw(e,t):jy(t)?XC(e,t):cb(t)?Vw(e,t):nb(t)?vw(e,t):Vy(t)?sw(e,t):Iy(t)?nw(e,t):Ny(t)?QC(e,t):pb(t)?Kw(e,t):rb(t)?Nw(e,t):_b(t)?I.True:I.False}function eT(e,t){return mb(e)||mb(e)?I.True:I.False}function tT(e,t){return Uy(t)?lw(e,t):hb(t)?Xw(e,t):_b(t)?Qw(e,t):jy(t)?XC(e,t):rb(t)?Nw(e,t):yb(t)?I.True:I.False}function nT(e,t){return ub(e)||ub(t)?Ww(e,t):sb(e)||sb(t)?Bw(e,t):eb(e)||eb(t)?gw(e,t):jy(e)?ZC(e,t):Ny(e)?$C(e,t):Fy(e)?tw(e,t):Iy(e)?rw(e,t):Py(e)?ew(e,t):Ry(e)?iw(e,t):zy(e)?aw(e,t):By(e)?ow(e,t):Vy(e)?cw(e,t):Uy(e)?uw(e,t):Wy(e)?dw(e,t):Yy(e)?fw(e,t):$y(e)?mw(e,t):tb(e)?_w(e,t):nb(e)?yw(e,t):rb(e)?Pw(e,t):ab(e)?zw(e,t):cb(e)?Hw(e,t):lb(e)?Uw(e,t):pb(e)?qw(e,t):ib(e)?Fw(e,t):gb(e)?Jw(e,t):mb(e)?Yw(e,t):hb(e)?Zw(e,t):_b(e)?$w(e,t):yb(e)?tT(e,t):qC(`Unknown left type operand '${e[F]}'`)}function rT(e,t){return nT(e,t)}function iT(e,t,n,r,i){let a={};for(let o of globalThis.Object.getOwnPropertyNames(e))a[o]=cT(e[o],t,n,r,Q_(i));return a}function aT(e,t,n,r,i){return iT(e.properties,t,n,r,i)}function oT(e,t,n,r,i){return Xb(aT(e,t,n,r,i))}function sT(e,t,n,r){let i=rT(e,t);return i===I.Union?ax([n,r]):i===I.True?n:r}function cT(e,t,n,r,i){return Yv(e)?oT(e,t,n,r,i):Jv(e)?P(fT(e,t,n,r,i)):P(sT(e,t,n,r),i)}function lT(e,t,n,r,i){return{[e]:cT(Nx(e),t,n,r,Q_(i))}}function uT(e,t,n,r,i){return e.reduce((e,a)=>({...e,...lT(a,t,n,r,i)}),{})}function dT(e,t,n,r,i){return uT(e.keys,t,n,r,i)}function fT(e,t,n,r,i){return Xb(dT(e,t,n,r,i))}function pT(e){return e.allOf.every(e=>gT(e))}function mT(e){return e.anyOf.some(e=>gT(e))}function hT(e){return!gT(e.not)}function gT(e){return e[F]===`Intersect`?pT(e):e[F]===`Union`?mT(e):e[F]===`Not`?hT(e):e[F]===`Undefined`}function _T(e,t){return yT(Kx(e),t)}function vT(e,t){let n=e.filter(e=>rT(e,t)===I.False);return n.length===1?n[0]:ax(n)}function yT(e,t,n={}){return sy(e)?P(_T(e,t),n):Yv(e)?P(ST(e,t),n):P(fy(e)?vT(e.anyOf,t):rT(e,t)===I.False?e:Yb(),n)}function bT(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=yT(e[r],t);return n}function xT(e,t){return bT(e.properties,t)}function ST(e,t){return Xb(xT(e,t))}function CT(e,t){return TT(Kx(e),t)}function wT(e,t){let n=e.filter(e=>rT(e,t)!==I.False);return n.length===1?n[0]:ax(n)}function TT(e,t,n){return sy(e)?P(CT(e,t),n):Yv(e)?P(OT(e,t),n):P(fy(e)?wT(e.anyOf,t):rT(e,t)===I.False?Yb():e,n)}function ET(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=TT(e[r],t);return n}function DT(e,t){return ET(e.properties,t)}function OT(e,t){return Xb(DT(e,t))}function kT(e,t){return zv(e)?P(e.returns,t):Yb(t)}function AT(e){return TS(US(e))}function jT(e,t,n){return P({[F]:`Record`,type:`object`,patternProperties:{[e]:t}},n)}function MT(e,t,n){let r={};for(let n of e)r[n]=t;return bS(r,{...n,[kv]:`Record`})}function NT(e,t,n){return Tx(e)?MT(Zx(e),t,n):jT(e.pattern,t,n)}function PT(e,t,n){return MT(Zx(ax(e)),t,n)}function FT(e,t,n){return MT([e.toString()],t,n)}function IT(e,t,n){return jT(e.source,t,n)}function LT(e,t,n){return jT(G_(e.pattern)?Db:e.pattern,t,n)}function RT(e,t,n){return jT(Db,t,n)}function zT(e,t,n){return jT(Ob,t,n)}function BT(e,t,n){return bS({true:t,false:t},n)}function VT(e,t,n){return jT(Eb,t,n)}function HT(e,t,n){return jT(Eb,t,n)}function UT(e,t,n={}){return fy(e)?PT(e.anyOf,t,n):sy(e)?NT(e,t,n):qv(e)?FT(e.const,t,n):Lv(e)?BT(e,t,n):Hv(e)?VT(e,t,n):$v(e)?HT(e,t,n):iy(e)?IT(e,t,n):ay(e)?LT(e,t,n):Mv(e)?RT(e,t,n):Xv(e)?zT(e,t,n):Yb(n)}function WT(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function GT(e){let t=WT(e);return t===Db?Lx():t===Eb?Ix():Lx({pattern:t})}function KT(e){return e.patternProperties[WT(e)]}function qT(e,t){return t.parameters=sE(e,t.parameters),t.returns=cE(e,t.returns),t}function JT(e,t){return t.parameters=sE(e,t.parameters),t.returns=cE(e,t.returns),t}function YT(e,t){return t.allOf=sE(e,t.allOf),t}function XT(e,t){return t.anyOf=sE(e,t.anyOf),t}function ZT(e,t){return G_(t.items)||(t.items=sE(e,t.items)),t}function QT(e,t){return t.items=cE(e,t.items),t}function $T(e,t){return t.items=cE(e,t.items),t}function eE(e,t){return t.items=cE(e,t.items),t}function tE(e,t){return t.item=cE(e,t.item),t}function nE(e,t){let n=oE(e,t.properties);return{...t,...bS(n)}}function rE(e,t){let n=UT(cE(e,GT(t)),cE(e,KT(t)));return{...t,...n}}function iE(e,t){return t.index in e?e[t.index]:LC()}function aE(e,t){let n=Av(t),r=jv(t),i=cE(e,t);return n&&r?AT(i):n&&!r?TS(i):!n&&r?US(i):i}function oE(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((n,r)=>({...n,[r]:aE(e,t[r])}),{})}function sE(e,t){return t.map(t=>cE(e,t))}function cE(e,t){return zv(t)?qT(e,t):Vv(t)?JT(e,t):Uv(t)?YT(e,t):fy(t)?XT(e,t):uy(t)?ZT(e,t):Pv(t)?QT(e,t):Fv(t)?$T(e,t):Wv(t)?eE(e,t):ty(t)?tE(e,t):ey(t)?nE(e,t):ny(t)?rE(e,t):Nv(t)?iE(e,t):t}function lE(e,t){return cE(t,$_(e))}function uE(e){return P({[F]:`Integer`,type:`integer`},e)}function dE(e,t,n){return{[e]:SE(Nx(e),t,Q_(n))}}function fE(e,t,n){return e.reduce((e,r)=>({...e,...dE(r,t,n)}),{})}function pE(e,t,n){return fE(e.keys,t,n)}function mE(e,t,n){return Xb(pE(e,t,n))}function hE(e){let[t,n]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),n].join(``)}function gE(e){let[t,n]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),n].join(``)}function _E(e){return e.toUpperCase()}function vE(e){return e.toLowerCase()}function yE(e,t,n){let r=yx(e.pattern);return wx(r)?qx([ax(xE([...jx(r)].map(e=>Nx(e)),t))],n):{...e,pattern:bE(e.pattern,t)}}function bE(e,t){return typeof e==`string`?t===`Uncapitalize`?hE(e):t===`Capitalize`?gE(e):t===`Uppercase`?_E(e):t===`Lowercase`?vE(e):e:e.toString()}function xE(e,t){return e.map(e=>SE(e,t))}function SE(e,t,n={}){return Jv(e)?mE(e,t,n):sy(e)?yE(e,t,n):fy(e)?ax(xE(e.anyOf,t),n):qv(e)?Nx(bE(e.const,t),n):P(e,n)}function CE(e,t={}){return SE(e,`Capitalize`,t)}function wE(e,t={}){return SE(e,`Lowercase`,t)}function TE(e,t={}){return SE(e,`Uncapitalize`,t)}function EE(e,t={}){return SE(e,`Uppercase`,t)}function DE(e,t,n){let r={};for(let i of globalThis.Object.getOwnPropertyNames(e))r[i]=LE(e[i],t,Q_(n));return r}function OE(e,t,n){return DE(e.properties,t,n)}function kE(e,t,n){return Xb(OE(e,t,n))}function AE(e,t){return e.map(e=>IE(e,t))}function jE(e,t){return e.map(e=>IE(e,t))}function ME(e,t){let{[t]:n,...r}=e;return r}function NE(e,t){return t.reduce((e,t)=>ME(e,t),e)}function PE(e,t,n){let r=Jb(e,[Ev,`$id`,`required`,`properties`]);return bS(NE(n,t),r)}function FE(e){return ax(e.reduce((e,t)=>Kv(t)?[...e,Nx(t)]:e,[]))}function IE(e,t){return Uv(e)?$S(AE(e.allOf,t)):fy(e)?ax(jE(e.anyOf,t)):ey(e)?PE(e,t,e.properties):bS({})}function LE(e,t,n){let r=M_(t)?FE(t):t,i=vy(t)?Zx(t):t,a=ry(e),o=ry(t);return Yv(e)?kE(e,i,n):Jv(t)?VE(e,t,n):a&&o||!a&&o||a&&!o?Kb(`Omit`,[e,r],n):P({...IE(e,i),...n})}function RE(e,t,n){return{[t]:LE(e,[t],Q_(n))}}function zE(e,t,n){return t.reduce((t,r)=>({...t,...RE(e,r,n)}),{})}function BE(e,t,n){return zE(e,t.keys,n)}function VE(e,t,n){return Xb(BE(e,t,n))}function HE(e,t,n){let r={};for(let i of globalThis.Object.getOwnPropertyNames(e))r[i]=ZE(e[i],t,Q_(n));return r}function UE(e,t,n){return HE(e.properties,t,n)}function WE(e,t,n){return Xb(UE(e,t,n))}function GE(e,t){return e.map(e=>XE(e,t))}function KE(e,t){return e.map(e=>XE(e,t))}function qE(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function JE(e,t,n){let r=Jb(e,[Ev,`$id`,`required`,`properties`]);return bS(qE(n,t),r)}function YE(e){return ax(e.reduce((e,t)=>Kv(t)?[...e,Nx(t)]:e,[]))}function XE(e,t){return Uv(e)?$S(GE(e.allOf,t)):fy(e)?ax(KE(e.anyOf,t)):ey(e)?JE(e,t,e.properties):bS({})}function ZE(e,t,n){let r=M_(t)?YE(t):t,i=vy(t)?Zx(t):t,a=ry(e),o=ry(t);return Yv(e)?WE(e,i,n):Jv(t)?tD(e,t,n):a&&o||!a&&o||a&&!o?Kb(`Pick`,[e,r],n):P({...XE(e,i),...n})}function QE(e,t,n){return{[t]:ZE(e,[t],Q_(n))}}function $E(e,t,n){return t.reduce((t,r)=>({...t,...QE(e,r,n)}),{})}function eD(e,t,n){return $E(e,t.keys,n)}function tD(e,t,n){return Xb(eD(e,t,n))}function nD(e,t){return Kb(`Partial`,[Kb(e,t)])}function rD(e){return Kb(`Partial`,[eC(e)])}function iD(e){let t={};for(let n of globalThis.Object.getOwnPropertyNames(e))t[n]=US(e[n]);return t}function aD(e,t){let n=Jb(e,[Ev,`$id`,`required`,`properties`]);return bS(iD(t),n)}function oD(e){return e.map(e=>sD(e))}function sD(e){return Rv(e)?nD(e.target,e.parameters):ry(e)?rD(e.$ref):Uv(e)?$S(oD(e.allOf)):fy(e)?ax(oD(e.anyOf)):ey(e)?aD(e,e.properties):Iv(e)||Lv(e)||Hv(e)||qv(e)||Qv(e)||$v(e)||ay(e)||oy(e)||dy(e)?e:bS({})}function cD(e,t){return Yv(e)?dD(e,t):P({...sD(e),...t})}function lD(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=cD(e[r],Q_(t));return n}function uD(e,t){return lD(e.properties,t)}function dD(e,t){return Xb(uD(e,t))}function fD(e,t){return Kb(`Required`,[Kb(e,t)])}function pD(e){return Kb(`Required`,[eC(e)])}function mD(e){let t={};for(let n of globalThis.Object.getOwnPropertyNames(e))t[n]=Jb(e[n],[Ov]);return t}function hD(e,t){let n=Jb(e,[Ev,`$id`,`required`,`properties`]);return bS(mD(t),n)}function gD(e){return e.map(e=>_D(e))}function _D(e){return Rv(e)?fD(e.target,e.parameters):ry(e)?pD(e.$ref):Uv(e)?$S(gD(e.allOf)):fy(e)?ax(gD(e.anyOf)):ey(e)?hD(e,e.properties):Iv(e)||Lv(e)||Hv(e)||qv(e)||Qv(e)||$v(e)||ay(e)||oy(e)||dy(e)?e:bS({})}function vD(e,t){return Yv(e)?xD(e,t):P({..._D(e),...t})}function yD(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=vD(e[r],t);return n}function bD(e,t){return yD(e.properties,t)}function xD(e,t){return Xb(bD(e,t))}function SD(e,t){return t.map(t=>ry(t)?CD(e,t.$ref):WD(e,t))}function CD(e,t){return t in e?ry(e[t])?CD(e,e[t].$ref):WD(e,e[t]):Yb()}function wD(e){return sC(e[0])}function TD(e){return fS(e[0],e[1])}function ED(e){return SC(e[0])}function DD(e){return cD(e[0])}function OD(e){return LE(e[0],e[1])}function kD(e){return ZE(e[0],e[1])}function AD(e){return vD(e[0])}function jD(e,t,n){let r=SD(e,n);return t===`Awaited`?wD(r):t===`Index`?TD(r):t===`KeyOf`?ED(r):t===`Partial`?DD(r):t===`Omit`?OD(r):t===`Pick`?kD(r):t===`Required`?AD(r):Yb()}function MD(e,t){return Ub(WD(e,t))}function ND(e,t){return Gb(WD(e,t))}function PD(e,t,n){return Zb(UD(e,t),WD(e,n))}function FD(e,t,n){return Qb(UD(e,t),WD(e,n))}function ID(e,t){return $S(UD(e,t))}function LD(e,t){return _S(WD(e,t))}function RD(e,t){return bS(globalThis.Object.keys(t).reduce((n,r)=>({...n,[r]:WD(e,t[r])}),{}))}function zD(e,t){let[n,r]=[WD(e,KT(t)),WT(t)],i=$_(t);return i.patternProperties[r]=n,i}function BD(e,t){return ry(t)?{...CD(e,t.$ref),[Ev]:t[Ev]}:t}function VD(e,t){return kS(UD(e,t))}function HD(e,t){return ax(UD(e,t))}function UD(e,t){return t.map(t=>WD(e,t))}function WD(e,t){return jv(t)?P(WD(e,Jb(t,[Ov])),t):Av(t)?P(WD(e,Jb(t,[Dv])),t):ly(t)?P(BD(e,t),t):Pv(t)?P(MD(e,t.items),t):Fv(t)?P(ND(e,t.items),t):Rv(t)?P(jD(e,t.target,t.parameters)):zv(t)?P(PD(e,t.parameters,t.returns),t):Vv(t)?P(FD(e,t.parameters,t.returns),t):Uv(t)?P(ID(e,t.allOf),t):Wv(t)?P(LD(e,t.items),t):ey(t)?P(RD(e,t.properties),t):ny(t)?P(zD(e,t)):uy(t)?P(VD(e,t.items||[]),t):fy(t)?P(HD(e,t.anyOf),t):t}function GD(e,t){return t in e?WD(e,e[t]):Yb()}function KD(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,n)=>({...t,[n]:GD(e,n)}),{})}var qD=class{constructor(e){let t=KD(e);this.$defs=this.WithIdentifiers(t)}Import(e,t){let n={...this.$defs,[e]:P(this.$defs[e],t)};return P({[F]:`Import`,$defs:n,$ref:e})}WithIdentifiers(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,n)=>({...t,[n]:{...e[n],$id:n}}),{})}};function JD(e){return new qD(e)}function YD(e,t){return P({[F]:`Not`,not:e},t)}function XD(e,t){return Vv(e)?kS(e.parameters,t):Yb()}var ZD=0;function QD(e,t={}){G_(t.$id)&&(t.$id=`T${ZD++}`);let n=$_(e({[F]:`This`,$ref:`${t.$id}`}));return n.$id=t.$id,P({[kv]:`Recursive`,...n},t)}function $D(e,t){let n=H_(e)?new globalThis.RegExp(e):e;return P({[F]:`RegExp`,type:`RegExp`,source:n.source,flags:n.flags},t)}function eO(e){return Uv(e)?e.allOf:fy(e)?e.anyOf:uy(e)?e.items??[]:[]}function tO(e){return eO(e)}function nO(e,t){return Vv(e)?P(e.returns,t):Yb(t)}var rO=class{constructor(e){this.schema=e}Decode(e){return new iO(this.schema,e)}},iO=class{constructor(e,t){this.schema=e,this.decode=t}EncodeTransform(e,t){let n={Encode:n=>t[Ev].Encode(e(n)),Decode:e=>this.decode(t[Ev].Decode(e))};return{...t,[Ev]:n}}EncodeSchema(e,t){let n={Decode:this.decode,Encode:e};return{...t,[Ev]:n}}Encode(e){return ly(this.schema)?this.EncodeTransform(e,this.schema):this.EncodeSchema(e,this.schema)}};function aO(e){return new rO(e)}function oO(e={}){return P({[F]:e[F]??`Unsafe`},e)}function sO(e){return P({[F]:`Void`,type:`void`},e)}var cO=e({Any:()=>Hb,Argument:()=>Wb,Array:()=>Ub,AsyncIterator:()=>Gb,Awaited:()=>sC,BigInt:()=>Fx,Boolean:()=>Px,Capitalize:()=>CE,Composite:()=>jC,Const:()=>HC,Constructor:()=>Zb,ConstructorParameters:()=>UC,Date:()=>MC,Enum:()=>WC,Exclude:()=>yT,Extends:()=>cT,Extract:()=>TT,Function:()=>Qb,Index:()=>fS,InstanceType:()=>kT,Instantiate:()=>lE,Integer:()=>uE,Intersect:()=>$S,Iterator:()=>_S,KeyOf:()=>SC,Literal:()=>Nx,Lowercase:()=>wE,Mapped:()=>zS,Module:()=>JD,Never:()=>Yb,Not:()=>YD,Null:()=>NC,Number:()=>Ix,Object:()=>bS,Omit:()=>LE,Optional:()=>US,Parameters:()=>XD,Partial:()=>cD,Pick:()=>ZE,Promise:()=>xS,Readonly:()=>TS,ReadonlyOptional:()=>AT,Record:()=>UT,Recursive:()=>QD,Ref:()=>eC,RegExp:()=>$D,Required:()=>vD,Rest:()=>tO,ReturnType:()=>nO,String:()=>Lx,Symbol:()=>PC,TemplateLiteral:()=>qx,Transform:()=>aO,Tuple:()=>kS,Uint8Array:()=>IC,Uncapitalize:()=>TE,Undefined:()=>FC,Union:()=>ax,Unknown:()=>LC,Unsafe:()=>oO,Uppercase:()=>EE,Void:()=>sO});function lO(e){switch(e.errorType){case L.ArrayContains:return`Expected array to contain at least one matching value`;case L.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case L.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case L.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case L.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case L.ArrayUniqueItems:return`Expected array elements to be unique`;case L.Array:return`Expected array`;case L.AsyncIterator:return`Expected AsyncIterator`;case L.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case L.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case L.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case L.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case L.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case L.BigInt:return`Expected bigint`;case L.Boolean:return`Expected boolean`;case L.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case L.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case L.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case L.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case L.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case L.Date:return`Expected Date`;case L.Function:return`Expected function`;case L.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case L.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case L.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case L.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case L.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case L.Integer:return`Expected integer`;case L.IntersectUnevaluatedProperties:return`Unexpected property`;case L.Intersect:return`Expected all values to match`;case L.Iterator:return`Expected Iterator`;case L.Literal:return`Expected ${typeof e.schema.const==`string`?`'${e.schema.const}'`:e.schema.const}`;case L.Never:return`Never`;case L.Not:return`Value should not match`;case L.Null:return`Expected null`;case L.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case L.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case L.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case L.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case L.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case L.Number:return`Expected number`;case L.Object:return`Expected object`;case L.ObjectAdditionalProperties:return`Unexpected property`;case L.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case L.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case L.ObjectRequiredProperty:return`Expected required property`;case L.Promise:return`Expected Promise`;case L.RegExp:return`Expected string to match regular expression`;case L.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case L.StringFormat:return`Expected string to match '${e.schema.format}' format`;case L.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case L.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case L.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case L.String:return`Expected string`;case L.Symbol:return`Expected symbol`;case L.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case L.Tuple:return`Expected tuple`;case L.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case L.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case L.Uint8Array:return`Expected Uint8Array`;case L.Undefined:return`Expected undefined`;case L.Union:return`Expected union value`;case L.Void:return`Expected void`;case L.Kind:return`Expected kind '${e.schema[F]}'`;default:return`Unknown error type`}}var uO=lO;function dO(e){uO=e}function fO(){return uO}var pO=class extends Tv{constructor(e){super(`Unable to dereference schema with $id '${e.$ref}'`),this.schema=e}};function mO(e,t){let n=t.find(t=>t.$id===e.$ref);if(n===void 0)throw new pO(e);return gO(n,t)}function hO(e,t){return!mv(e.$id)||t.some(t=>t.$id===e.$id)||t.push(e),t}function gO(e,t){return e[F]===`This`||e[F]===`Ref`?mO(e,t):e}var _O=class extends Tv{constructor(e){super(`Unable to hash value`),this.value=e}},vO;(function(e){e[e.Undefined=0]=`Undefined`,e[e.Null=1]=`Null`,e[e.Boolean=2]=`Boolean`,e[e.Number=3]=`Number`,e[e.String=4]=`String`,e[e.Object=5]=`Object`,e[e.Array=6]=`Array`,e[e.Date=7]=`Date`,e[e.Uint8Array=8]=`Uint8Array`,e[e.Symbol=9]=`Symbol`,e[e.BigInt=10]=`BigInt`})(vO||={});var yO=BigInt(`14695981039346656037`),[bO,xO]=[BigInt(`1099511628211`),BigInt(`18446744073709551616`)],SO=Array.from({length:256}).map((e,t)=>BigInt(t)),CO=new Float64Array(1),wO=new DataView(CO.buffer),TO=new Uint8Array(CO.buffer);function*EO(e){let t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let n=0;n<t;n++)yield e>>8*(t-1-n)&255}function DO(e){zO(vO.Array);for(let t of e)RO(t)}function OO(e){zO(vO.Boolean),zO(e?1:0)}function kO(e){zO(vO.BigInt),wO.setBigInt64(0,e);for(let e of TO)zO(e)}function AO(e){zO(vO.Date),RO(e.getTime())}function jO(e){zO(vO.Null)}function MO(e){zO(vO.Number),wO.setFloat64(0,e);for(let e of TO)zO(e)}function NO(e){zO(vO.Object);for(let t of globalThis.Object.getOwnPropertyNames(e).sort())RO(t),RO(e[t])}function PO(e){zO(vO.String);for(let t=0;t<e.length;t++)for(let n of EO(e.charCodeAt(t)))zO(n)}function FO(e){zO(vO.Symbol),RO(e.description)}function IO(e){zO(vO.Uint8Array);for(let t=0;t<e.length;t++)zO(e[t])}function LO(e){return zO(vO.Undefined)}function RO(e){if(sv(e))return DO(e);if(uv(e))return OO(e);if(pv(e))return kO(e);if(rv(e))return AO(e);if(lv(e))return jO(e);if(dv(e))return MO(e);if(ov(e))return NO(e);if(mv(e))return PO(e);if(gv(e))return FO(e);if(iv(e))return IO(e);if(cv(e))return LO(e);throw new _O(e)}function zO(e){yO^=SO[e],yO=yO*bO%xO}function BO(e){return yO=BigInt(`14695981039346656037`),RO(e),yO}var VO=class extends Tv{constructor(e){super(`Unknown type`),this.schema=e}};function HO(e){return e[F]===`Any`||e[F]===`Unknown`}function UO(e){return e!==void 0}function WO(e,t,n){return!0}function GO(e,t,n){return!0}function KO(e,t,n){if(!sv(n)||UO(e.minItems)&&!(n.length>=e.minItems)||UO(e.maxItems)&&!(n.length<=e.maxItems))return!1;for(let r of n)if(!wk(e.items,t,r))return!1;if(e.uniqueItems===!0&&!(function(){let e=new Set;for(let t of n){let n=BO(t);if(e.has(n))return!1;e.add(n)}return!0})())return!1;if(!(UO(e.contains)||dv(e.minContains)||dv(e.maxContains)))return!0;let r=UO(e.contains)?e.contains:Yb(),i=n.reduce((e,n)=>wk(r,t,n)?e+1:e,0);return!(i===0||dv(e.minContains)&&i<e.minContains||dv(e.maxContains)&&i>e.maxContains)}function qO(e,t,n){return ev(n)}function JO(e,t,n){return!(!pv(n)||UO(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||UO(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||UO(e.maximum)&&!(n<=e.maximum)||UO(e.minimum)&&!(n>=e.minimum)||UO(e.multipleOf)&&n%e.multipleOf!==BigInt(0))}function YO(e,t,n){return uv(n)}function XO(e,t,n){return wk(e.returns,t,n.prototype)}function ZO(e,t,n){return!(!rv(n)||UO(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)||UO(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)||UO(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)||UO(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)||UO(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0)}function QO(e,t,n){return hv(n)}function $O(e,t,n){let r=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];return wk(i,[...t,...r],n)}function ek(e,t,n){return!(!fv(n)||UO(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||UO(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||UO(e.maximum)&&!(n<=e.maximum)||UO(e.minimum)&&!(n>=e.minimum)||UO(e.multipleOf)&&n%e.multipleOf!==0)}function tk(e,t,n){let r=e.allOf.every(e=>wk(e,t,n));if(e.unevaluatedProperties===!1){let t=new RegExp(_C(e)),i=Object.getOwnPropertyNames(n).every(e=>t.test(e));return r&&i}else if(vy(e.unevaluatedProperties)){let i=new RegExp(_C(e)),a=Object.getOwnPropertyNames(n).every(r=>i.test(r)||wk(e.unevaluatedProperties,t,n[r]));return r&&a}else return r}function nk(e,t,n){return tv(n)}function rk(e,t,n){return n===e.const}function ik(e,t,n){return!1}function ak(e,t,n){return!wk(e.not,t,n)}function ok(e,t,n){return lv(n)}function sk(e,t,n){return!(!vv.IsNumberLike(n)||UO(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||UO(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||UO(e.minimum)&&!(n>=e.minimum)||UO(e.maximum)&&!(n<=e.maximum)||UO(e.multipleOf)&&n%e.multipleOf!==0)}function ck(e,t,n){if(!vv.IsObjectLike(n)||UO(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||UO(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;let r=Object.getOwnPropertyNames(e.properties);for(let i of r){let r=e.properties[i];if(e.required&&e.required.includes(i)){if(!wk(r,t,n[i])||(gT(r)||HO(r))&&!(i in n))return!1}else if(vv.IsExactOptionalProperty(n,i)&&!wk(r,t,n[i]))return!1}if(e.additionalProperties===!1){let t=Object.getOwnPropertyNames(n);return e.required&&e.required.length===r.length&&t.length===r.length?!0:t.every(e=>r.includes(e))}else if(typeof e.additionalProperties==`object`)return Object.getOwnPropertyNames(n).every(i=>r.includes(i)||wk(e.additionalProperties,t,n[i]));else return!0}function lk(e,t,n){return nv(n)}function uk(e,t,n){if(!vv.IsRecordLike(n)||UO(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||UO(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;let[r,i]=Object.entries(e.patternProperties)[0],a=new RegExp(r),o=Object.entries(n).every(([e,n])=>a.test(e)?wk(i,t,n):!0),s=typeof e.additionalProperties==`object`?Object.entries(n).every(([n,r])=>a.test(n)?!0:wk(e.additionalProperties,t,r)):!0,c=e.additionalProperties===!1?Object.getOwnPropertyNames(n).every(e=>a.test(e)):!0;return o&&s&&c}function dk(e,t,n){return wk(gO(e,t),t,n)}function fk(e,t,n){let r=new RegExp(e.source,e.flags);return UO(e.minLength)&&!(n.length>=e.minLength)||UO(e.maxLength)&&!(n.length<=e.maxLength)?!1:r.test(n)}function pk(e,t,n){return!mv(n)||UO(e.minLength)&&!(n.length>=e.minLength)||UO(e.maxLength)&&!(n.length<=e.maxLength)||UO(e.pattern)&&!new RegExp(e.pattern).test(n)?!1:UO(e.format)?Ab(e.format)?jb(e.format)(n):!1:!0}function mk(e,t,n){return gv(n)}function hk(e,t,n){return mv(n)&&new RegExp(e.pattern).test(n)}function gk(e,t,n){return wk(gO(e,t),t,n)}function _k(e,t,n){if(!sv(n)||e.items===void 0&&n.length!==0||n.length!==e.maxItems)return!1;if(!e.items)return!0;for(let r=0;r<e.items.length;r++)if(!wk(e.items[r],t,n[r]))return!1;return!0}function vk(e,t,n){return cv(n)}function yk(e,t,n){return e.anyOf.some(e=>wk(e,t,n))}function bk(e,t,n){return!(!iv(n)||UO(e.maxByteLength)&&!(n.length<=e.maxByteLength)||UO(e.minByteLength)&&!(n.length>=e.minByteLength))}function xk(e,t,n){return!0}function Sk(e,t,n){return vv.IsVoidLike(n)}function Ck(e,t,n){return Nb(e[F])?Fb(e[F])(e,n):!1}function wk(e,t,n){let r=UO(e.$id)?hO(e,t):t,i=e;switch(i[F]){case`Any`:return WO(i,r,n);case`Argument`:return GO(i,r,n);case`Array`:return KO(i,r,n);case`AsyncIterator`:return qO(i,r,n);case`BigInt`:return JO(i,r,n);case`Boolean`:return YO(i,r,n);case`Constructor`:return XO(i,r,n);case`Date`:return ZO(i,r,n);case`Function`:return QO(i,r,n);case`Import`:return $O(i,r,n);case`Integer`:return ek(i,r,n);case`Intersect`:return tk(i,r,n);case`Iterator`:return nk(i,r,n);case`Literal`:return rk(i,r,n);case`Never`:return ik(i,r,n);case`Not`:return ak(i,r,n);case`Null`:return ok(i,r,n);case`Number`:return sk(i,r,n);case`Object`:return ck(i,r,n);case`Promise`:return lk(i,r,n);case`Record`:return uk(i,r,n);case`Ref`:return dk(i,r,n);case`RegExp`:return fk(i,r,n);case`String`:return pk(i,r,n);case`Symbol`:return mk(i,r,n);case`TemplateLiteral`:return hk(i,r,n);case`This`:return gk(i,r,n);case`Tuple`:return _k(i,r,n);case`Undefined`:return vk(i,r,n);case`Union`:return yk(i,r,n);case`Uint8Array`:return bk(i,r,n);case`Unknown`:return xk(i,r,n);case`Void`:return Sk(i,r,n);default:if(!Nb(i[F]))throw new VO(i);return Ck(i,r,n)}}function Tk(...e){return e.length===3?wk(e[0],e[1],e[2]):wk(e[0],[],e[1])}var L;(function(e){e[e.ArrayContains=0]=`ArrayContains`,e[e.ArrayMaxContains=1]=`ArrayMaxContains`,e[e.ArrayMaxItems=2]=`ArrayMaxItems`,e[e.ArrayMinContains=3]=`ArrayMinContains`,e[e.ArrayMinItems=4]=`ArrayMinItems`,e[e.ArrayUniqueItems=5]=`ArrayUniqueItems`,e[e.Array=6]=`Array`,e[e.AsyncIterator=7]=`AsyncIterator`,e[e.BigIntExclusiveMaximum=8]=`BigIntExclusiveMaximum`,e[e.BigIntExclusiveMinimum=9]=`BigIntExclusiveMinimum`,e[e.BigIntMaximum=10]=`BigIntMaximum`,e[e.BigIntMinimum=11]=`BigIntMinimum`,e[e.BigIntMultipleOf=12]=`BigIntMultipleOf`,e[e.BigInt=13]=`BigInt`,e[e.Boolean=14]=`Boolean`,e[e.DateExclusiveMaximumTimestamp=15]=`DateExclusiveMaximumTimestamp`,e[e.DateExclusiveMinimumTimestamp=16]=`DateExclusiveMinimumTimestamp`,e[e.DateMaximumTimestamp=17]=`DateMaximumTimestamp`,e[e.DateMinimumTimestamp=18]=`DateMinimumTimestamp`,e[e.DateMultipleOfTimestamp=19]=`DateMultipleOfTimestamp`,e[e.Date=20]=`Date`,e[e.Function=21]=`Function`,e[e.IntegerExclusiveMaximum=22]=`IntegerExclusiveMaximum`,e[e.IntegerExclusiveMinimum=23]=`IntegerExclusiveMinimum`,e[e.IntegerMaximum=24]=`IntegerMaximum`,e[e.IntegerMinimum=25]=`IntegerMinimum`,e[e.IntegerMultipleOf=26]=`IntegerMultipleOf`,e[e.Integer=27]=`Integer`,e[e.IntersectUnevaluatedProperties=28]=`IntersectUnevaluatedProperties`,e[e.Intersect=29]=`Intersect`,e[e.Iterator=30]=`Iterator`,e[e.Kind=31]=`Kind`,e[e.Literal=32]=`Literal`,e[e.Never=33]=`Never`,e[e.Not=34]=`Not`,e[e.Null=35]=`Null`,e[e.NumberExclusiveMaximum=36]=`NumberExclusiveMaximum`,e[e.NumberExclusiveMinimum=37]=`NumberExclusiveMinimum`,e[e.NumberMaximum=38]=`NumberMaximum`,e[e.NumberMinimum=39]=`NumberMinimum`,e[e.NumberMultipleOf=40]=`NumberMultipleOf`,e[e.Number=41]=`Number`,e[e.ObjectAdditionalProperties=42]=`ObjectAdditionalProperties`,e[e.ObjectMaxProperties=43]=`ObjectMaxProperties`,e[e.ObjectMinProperties=44]=`ObjectMinProperties`,e[e.ObjectRequiredProperty=45]=`ObjectRequiredProperty`,e[e.Object=46]=`Object`,e[e.Promise=47]=`Promise`,e[e.RegExp=48]=`RegExp`,e[e.StringFormatUnknown=49]=`StringFormatUnknown`,e[e.StringFormat=50]=`StringFormat`,e[e.StringMaxLength=51]=`StringMaxLength`,e[e.StringMinLength=52]=`StringMinLength`,e[e.StringPattern=53]=`StringPattern`,e[e.String=54]=`String`,e[e.Symbol=55]=`Symbol`,e[e.TupleLength=56]=`TupleLength`,e[e.Tuple=57]=`Tuple`,e[e.Uint8ArrayMaxByteLength=58]=`Uint8ArrayMaxByteLength`,e[e.Uint8ArrayMinByteLength=59]=`Uint8ArrayMinByteLength`,e[e.Uint8Array=60]=`Uint8Array`,e[e.Undefined=61]=`Undefined`,e[e.Union=62]=`Union`,e[e.Void=63]=`Void`})(L||={});var Ek=class extends Tv{constructor(e){super(`Unknown type`),this.schema=e}};function Dk(e){return e.replace(/~/g,`~0`).replace(/\//g,`~1`)}function Ok(e){return e!==void 0}var kk=class{constructor(e){this.iterator=e}[Symbol.iterator](){return this.iterator}First(){let e=this.iterator.next();return e.done?void 0:e.value}};function R(e,t,n,r,i=[]){return{type:e,schema:t,path:n,value:r,message:fO()({errorType:e,path:n,schema:t,value:r,errors:i}),errors:i}}function*Ak(e,t,n,r){}function*jk(e,t,n,r){}function*Mk(e,t,n,r){if(!sv(r))return yield R(L.Array,e,n,r);Ok(e.minItems)&&!(r.length>=e.minItems)&&(yield R(L.ArrayMinItems,e,n,r)),Ok(e.maxItems)&&!(r.length<=e.maxItems)&&(yield R(L.ArrayMaxItems,e,n,r));for(let i=0;i<r.length;i++)yield*uA(e.items,t,`${n}/${i}`,r[i]);if(e.uniqueItems===!0&&!(function(){let e=new Set;for(let t of r){let n=BO(t);if(e.has(n))return!1;e.add(n)}return!0})()&&(yield R(L.ArrayUniqueItems,e,n,r)),!(Ok(e.contains)||Ok(e.minContains)||Ok(e.maxContains)))return;let i=Ok(e.contains)?e.contains:Yb(),a=r.reduce((e,r,a)=>uA(i,t,`${n}${a}`,r).next().done===!0?e+1:e,0);a===0&&(yield R(L.ArrayContains,e,n,r)),dv(e.minContains)&&a<e.minContains&&(yield R(L.ArrayMinContains,e,n,r)),dv(e.maxContains)&&a>e.maxContains&&(yield R(L.ArrayMaxContains,e,n,r))}function*Nk(e,t,n,r){ev(r)||(yield R(L.AsyncIterator,e,n,r))}function*Pk(e,t,n,r){if(!pv(r))return yield R(L.BigInt,e,n,r);Ok(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield R(L.BigIntExclusiveMaximum,e,n,r)),Ok(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield R(L.BigIntExclusiveMinimum,e,n,r)),Ok(e.maximum)&&!(r<=e.maximum)&&(yield R(L.BigIntMaximum,e,n,r)),Ok(e.minimum)&&!(r>=e.minimum)&&(yield R(L.BigIntMinimum,e,n,r)),Ok(e.multipleOf)&&r%e.multipleOf!==BigInt(0)&&(yield R(L.BigIntMultipleOf,e,n,r))}function*Fk(e,t,n,r){uv(r)||(yield R(L.Boolean,e,n,r))}function*Ik(e,t,n,r){yield*uA(e.returns,t,n,r.prototype)}function*Lk(e,t,n,r){if(!rv(r))return yield R(L.Date,e,n,r);Ok(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)&&(yield R(L.DateExclusiveMaximumTimestamp,e,n,r)),Ok(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)&&(yield R(L.DateExclusiveMinimumTimestamp,e,n,r)),Ok(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)&&(yield R(L.DateMaximumTimestamp,e,n,r)),Ok(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)&&(yield R(L.DateMinimumTimestamp,e,n,r)),Ok(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0&&(yield R(L.DateMultipleOfTimestamp,e,n,r))}function*Rk(e,t,n,r){hv(r)||(yield R(L.Function,e,n,r))}function*zk(e,t,n,r){let i=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref];yield*uA(a,[...t,...i],n,r)}function*Bk(e,t,n,r){if(!fv(r))return yield R(L.Integer,e,n,r);Ok(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield R(L.IntegerExclusiveMaximum,e,n,r)),Ok(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield R(L.IntegerExclusiveMinimum,e,n,r)),Ok(e.maximum)&&!(r<=e.maximum)&&(yield R(L.IntegerMaximum,e,n,r)),Ok(e.minimum)&&!(r>=e.minimum)&&(yield R(L.IntegerMinimum,e,n,r)),Ok(e.multipleOf)&&r%e.multipleOf!==0&&(yield R(L.IntegerMultipleOf,e,n,r))}function*Vk(e,t,n,r){let i=!1;for(let a of e.allOf)for(let e of uA(a,t,n,r))i=!0,yield e;if(i)return yield R(L.Intersect,e,n,r);if(e.unevaluatedProperties===!1){let t=new RegExp(_C(e));for(let i of Object.getOwnPropertyNames(r))t.test(i)||(yield R(L.IntersectUnevaluatedProperties,e,`${n}/${i}`,r))}if(typeof e.unevaluatedProperties==`object`){let i=new RegExp(_C(e));for(let a of Object.getOwnPropertyNames(r))if(!i.test(a)){let i=uA(e.unevaluatedProperties,t,`${n}/${a}`,r[a]).next();i.done||(yield i.value)}}}function*Hk(e,t,n,r){tv(r)||(yield R(L.Iterator,e,n,r))}function*Uk(e,t,n,r){r!==e.const&&(yield R(L.Literal,e,n,r))}function*Wk(e,t,n,r){yield R(L.Never,e,n,r)}function*Gk(e,t,n,r){uA(e.not,t,n,r).next().done===!0&&(yield R(L.Not,e,n,r))}function*Kk(e,t,n,r){lv(r)||(yield R(L.Null,e,n,r))}function*qk(e,t,n,r){if(!vv.IsNumberLike(r))return yield R(L.Number,e,n,r);Ok(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield R(L.NumberExclusiveMaximum,e,n,r)),Ok(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield R(L.NumberExclusiveMinimum,e,n,r)),Ok(e.maximum)&&!(r<=e.maximum)&&(yield R(L.NumberMaximum,e,n,r)),Ok(e.minimum)&&!(r>=e.minimum)&&(yield R(L.NumberMinimum,e,n,r)),Ok(e.multipleOf)&&r%e.multipleOf!==0&&(yield R(L.NumberMultipleOf,e,n,r))}function*Jk(e,t,n,r){if(!vv.IsObjectLike(r))return yield R(L.Object,e,n,r);Ok(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield R(L.ObjectMinProperties,e,n,r)),Ok(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield R(L.ObjectMaxProperties,e,n,r));let i=Array.isArray(e.required)?e.required:[],a=Object.getOwnPropertyNames(e.properties),o=Object.getOwnPropertyNames(r);for(let t of i)o.includes(t)||(yield R(L.ObjectRequiredProperty,e.properties[t],`${n}/${Dk(t)}`,void 0));if(e.additionalProperties===!1)for(let t of o)a.includes(t)||(yield R(L.ObjectAdditionalProperties,e,`${n}/${Dk(t)}`,r[t]));if(typeof e.additionalProperties==`object`)for(let i of o)a.includes(i)||(yield*uA(e.additionalProperties,t,`${n}/${Dk(i)}`,r[i]));for(let i of a){let a=e.properties[i];e.required&&e.required.includes(i)?(yield*uA(a,t,`${n}/${Dk(i)}`,r[i]),gT(e)&&!(i in r)&&(yield R(L.ObjectRequiredProperty,a,`${n}/${Dk(i)}`,void 0))):vv.IsExactOptionalProperty(r,i)&&(yield*uA(a,t,`${n}/${Dk(i)}`,r[i]))}}function*Yk(e,t,n,r){nv(r)||(yield R(L.Promise,e,n,r))}function*Xk(e,t,n,r){if(!vv.IsRecordLike(r))return yield R(L.Object,e,n,r);Ok(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield R(L.ObjectMinProperties,e,n,r)),Ok(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield R(L.ObjectMaxProperties,e,n,r));let[i,a]=Object.entries(e.patternProperties)[0],o=new RegExp(i);for(let[e,i]of Object.entries(r))o.test(e)&&(yield*uA(a,t,`${n}/${Dk(e)}`,i));if(typeof e.additionalProperties==`object`)for(let[i,a]of Object.entries(r))o.test(i)||(yield*uA(e.additionalProperties,t,`${n}/${Dk(i)}`,a));if(e.additionalProperties===!1){for(let[t,i]of Object.entries(r))if(!o.test(t))return yield R(L.ObjectAdditionalProperties,e,`${n}/${Dk(t)}`,i)}}function*Zk(e,t,n,r){yield*uA(gO(e,t),t,n,r)}function*Qk(e,t,n,r){if(!mv(r))return yield R(L.String,e,n,r);if(Ok(e.minLength)&&!(r.length>=e.minLength)&&(yield R(L.StringMinLength,e,n,r)),Ok(e.maxLength)&&!(r.length<=e.maxLength)&&(yield R(L.StringMaxLength,e,n,r)),!new RegExp(e.source,e.flags).test(r))return yield R(L.RegExp,e,n,r)}function*$k(e,t,n,r){if(!mv(r))return yield R(L.String,e,n,r);Ok(e.minLength)&&!(r.length>=e.minLength)&&(yield R(L.StringMinLength,e,n,r)),Ok(e.maxLength)&&!(r.length<=e.maxLength)&&(yield R(L.StringMaxLength,e,n,r)),mv(e.pattern)&&(new RegExp(e.pattern).test(r)||(yield R(L.StringPattern,e,n,r))),mv(e.format)&&(Ab(e.format)?jb(e.format)(r)||(yield R(L.StringFormat,e,n,r)):yield R(L.StringFormatUnknown,e,n,r))}function*eA(e,t,n,r){gv(r)||(yield R(L.Symbol,e,n,r))}function*tA(e,t,n,r){if(!mv(r))return yield R(L.String,e,n,r);new RegExp(e.pattern).test(r)||(yield R(L.StringPattern,e,n,r))}function*nA(e,t,n,r){yield*uA(gO(e,t),t,n,r)}function*rA(e,t,n,r){if(!sv(r))return yield R(L.Tuple,e,n,r);if(e.items===void 0&&r.length!==0||r.length!==e.maxItems)return yield R(L.TupleLength,e,n,r);if(e.items)for(let i=0;i<e.items.length;i++)yield*uA(e.items[i],t,`${n}/${i}`,r[i])}function*iA(e,t,n,r){cv(r)||(yield R(L.Undefined,e,n,r))}function*aA(e,t,n,r){if(Tk(e,t,r))return;let i=e.anyOf.map(e=>new kk(uA(e,t,n,r)));yield R(L.Union,e,n,r,i)}function*oA(e,t,n,r){if(!iv(r))return yield R(L.Uint8Array,e,n,r);Ok(e.maxByteLength)&&!(r.length<=e.maxByteLength)&&(yield R(L.Uint8ArrayMaxByteLength,e,n,r)),Ok(e.minByteLength)&&!(r.length>=e.minByteLength)&&(yield R(L.Uint8ArrayMinByteLength,e,n,r))}function*sA(e,t,n,r){}function*cA(e,t,n,r){vv.IsVoidLike(r)||(yield R(L.Void,e,n,r))}function*lA(e,t,n,r){Fb(e[F])(e,r)||(yield R(L.Kind,e,n,r))}function*uA(e,t,n,r){let i=Ok(e.$id)?[...t,e]:t,a=e;switch(a[F]){case`Any`:return yield*Ak(a,i,n,r);case`Argument`:return yield*jk(a,i,n,r);case`Array`:return yield*Mk(a,i,n,r);case`AsyncIterator`:return yield*Nk(a,i,n,r);case`BigInt`:return yield*Pk(a,i,n,r);case`Boolean`:return yield*Fk(a,i,n,r);case`Constructor`:return yield*Ik(a,i,n,r);case`Date`:return yield*Lk(a,i,n,r);case`Function`:return yield*Rk(a,i,n,r);case`Import`:return yield*zk(a,i,n,r);case`Integer`:return yield*Bk(a,i,n,r);case`Intersect`:return yield*Vk(a,i,n,r);case`Iterator`:return yield*Hk(a,i,n,r);case`Literal`:return yield*Uk(a,i,n,r);case`Never`:return yield*Wk(a,i,n,r);case`Not`:return yield*Gk(a,i,n,r);case`Null`:return yield*Kk(a,i,n,r);case`Number`:return yield*qk(a,i,n,r);case`Object`:return yield*Jk(a,i,n,r);case`Promise`:return yield*Yk(a,i,n,r);case`Record`:return yield*Xk(a,i,n,r);case`Ref`:return yield*Zk(a,i,n,r);case`RegExp`:return yield*Qk(a,i,n,r);case`String`:return yield*$k(a,i,n,r);case`Symbol`:return yield*eA(a,i,n,r);case`TemplateLiteral`:return yield*tA(a,i,n,r);case`This`:return yield*nA(a,i,n,r);case`Tuple`:return yield*rA(a,i,n,r);case`Undefined`:return yield*iA(a,i,n,r);case`Union`:return yield*aA(a,i,n,r);case`Uint8Array`:return yield*oA(a,i,n,r);case`Unknown`:return yield*sA(a,i,n,r);case`Void`:return yield*cA(a,i,n,r);default:if(!Nb(a[F]))throw new Ek(e);return yield*lA(a,i,n,r)}}function dA(...e){return new kk(e.length===3?uA(e[0],e[1],``,e[2]):uA(e[0],[],``,e[1]))}var fA=class extends Tv{constructor(e,t,n){super(`Unable to decode value as it does not match the expected schema`),this.schema=e,this.value=t,this.error=n}},pA=class extends Tv{constructor(e,t,n,r){super(r instanceof Error?r.message:`Unknown error`),this.schema=e,this.path=t,this.value=n,this.error=r}};function mA(e,t,n){try{return ly(e)?e[Ev].Decode(n):n}catch(r){throw new pA(e,t,n,r)}}function hA(e,t,n,r){return sv(r)?mA(e,n,r.map((r,i)=>TA(e.items,t,`${n}/${i}`,r))):mA(e,n,r)}function gA(e,t,n,r){if(!ov(r)||_v(r))return mA(e,n,r);let i=EC(e),a=i.map(e=>e[0]),o={...r};for(let[e,r]of i)e in o&&(o[e]=TA(r,t,`${n}/${e}`,o[e]));if(!ly(e.unevaluatedProperties))return mA(e,n,o);let s=Object.getOwnPropertyNames(o),c=e.unevaluatedProperties,l={...o};for(let e of s)a.includes(e)||(l[e]=mA(c,`${n}/${e}`,l[e]));return mA(e,n,l)}function _A(e,t,n,r){let i=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref];return mA(e,n,TA(a,[...t,...i],n,r))}function vA(e,t,n,r){return mA(e,n,TA(e.not,t,n,r))}function yA(e,t,n,r){if(!ov(r))return mA(e,n,r);let i=hC(e),a={...r};for(let r of i)av(a,r)&&(cv(a[r])&&(!dy(e.properties[r])||vv.IsExactOptionalProperty(a,r))||(a[r]=TA(e.properties[r],t,`${n}/${r}`,a[r])));if(!vy(e.additionalProperties))return mA(e,n,a);let o=Object.getOwnPropertyNames(a),s=e.additionalProperties,c={...a};for(let e of o)i.includes(e)||(c[e]=mA(s,`${n}/${e}`,c[e]));return mA(e,n,c)}function bA(e,t,n,r){if(!ov(r))return mA(e,n,r);let i=Object.getOwnPropertyNames(e.patternProperties)[0],a=new RegExp(i),o={...r};for(let s of Object.getOwnPropertyNames(r))a.test(s)&&(o[s]=TA(e.patternProperties[i],t,`${n}/${s}`,o[s]));if(!vy(e.additionalProperties))return mA(e,n,o);let s=Object.getOwnPropertyNames(o),c=e.additionalProperties,l={...o};for(let e of s)a.test(e)||(l[e]=mA(c,`${n}/${e}`,l[e]));return mA(e,n,l)}function xA(e,t,n,r){return mA(e,n,TA(gO(e,t),t,n,r))}function SA(e,t,n,r){return mA(e,n,TA(gO(e,t),t,n,r))}function CA(e,t,n,r){return sv(r)&&sv(e.items)?mA(e,n,e.items.map((e,i)=>TA(e,t,`${n}/${i}`,r[i]))):mA(e,n,r)}function wA(e,t,n,r){for(let i of e.anyOf)if(Tk(i,t,r))return mA(e,n,TA(i,t,n,r));return mA(e,n,r)}function TA(e,t,n,r){let i=hO(e,t),a=e;switch(e[F]){case`Array`:return hA(a,i,n,r);case`Import`:return _A(a,i,n,r);case`Intersect`:return gA(a,i,n,r);case`Not`:return vA(a,i,n,r);case`Object`:return yA(a,i,n,r);case`Record`:return bA(a,i,n,r);case`Ref`:return xA(a,i,n,r);case`Symbol`:return mA(a,n,r);case`This`:return SA(a,i,n,r);case`Tuple`:return CA(a,i,n,r);case`Union`:return wA(a,i,n,r);default:return mA(a,n,r)}}function EA(e,t,n){return TA(e,t,``,n)}var DA=class extends Tv{constructor(e,t,n){super(`The encoded value does not match the expected schema`),this.schema=e,this.value=t,this.error=n}},OA=class extends Tv{constructor(e,t,n,r){super(`${r instanceof Error?r.message:`Unknown error`}`),this.schema=e,this.path=t,this.value=n,this.error=r}};function kA(e,t,n){try{return ly(e)?e[Ev].Encode(n):n}catch(r){throw new OA(e,t,n,r)}}function AA(e,t,n,r){let i=kA(e,n,r);return sv(i)?i.map((r,i)=>BA(e.items,t,`${n}/${i}`,r)):i}function jA(e,t,n,r){let i=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref],o=kA(e,n,r);return BA(a,[...t,...i],n,o)}function MA(e,t,n,r){let i=kA(e,n,r);if(!ov(r)||_v(r))return i;let a=EC(e),o=a.map(e=>e[0]),s={...i};for(let[e,r]of a)e in s&&(s[e]=BA(r,t,`${n}/${e}`,s[e]));if(!ly(e.unevaluatedProperties))return s;let c=Object.getOwnPropertyNames(s),l=e.unevaluatedProperties,u={...s};for(let e of c)o.includes(e)||(u[e]=kA(l,`${n}/${e}`,u[e]));return u}function NA(e,t,n,r){return kA(e.not,n,kA(e,n,r))}function PA(e,t,n,r){let i=kA(e,n,r);if(!ov(i))return i;let a=hC(e),o={...i};for(let r of a)av(o,r)&&(cv(o[r])&&(!dy(e.properties[r])||vv.IsExactOptionalProperty(o,r))||(o[r]=BA(e.properties[r],t,`${n}/${r}`,o[r])));if(!vy(e.additionalProperties))return o;let s=Object.getOwnPropertyNames(o),c=e.additionalProperties,l={...o};for(let e of s)a.includes(e)||(l[e]=kA(c,`${n}/${e}`,l[e]));return l}function FA(e,t,n,r){let i=kA(e,n,r);if(!ov(r))return i;let a=Object.getOwnPropertyNames(e.patternProperties)[0],o=new RegExp(a),s={...i};for(let i of Object.getOwnPropertyNames(r))o.test(i)&&(s[i]=BA(e.patternProperties[a],t,`${n}/${i}`,s[i]));if(!vy(e.additionalProperties))return s;let c=Object.getOwnPropertyNames(s),l=e.additionalProperties,u={...s};for(let e of c)o.test(e)||(u[e]=kA(l,`${n}/${e}`,u[e]));return u}function IA(e,t,n,r){return kA(e,n,BA(gO(e,t),t,n,r))}function LA(e,t,n,r){return kA(e,n,BA(gO(e,t),t,n,r))}function RA(e,t,n,r){let i=kA(e,n,r);return sv(e.items)?e.items.map((e,r)=>BA(e,t,`${n}/${r}`,i[r])):[]}function zA(e,t,n,r){for(let i of e.anyOf)if(Tk(i,t,r))return kA(e,n,BA(i,t,n,r));for(let i of e.anyOf){let a=BA(i,t,n,r);if(Tk(e,t,a))return kA(e,n,a)}return kA(e,n,r)}function BA(e,t,n,r){let i=hO(e,t),a=e;switch(e[F]){case`Array`:return AA(a,i,n,r);case`Import`:return jA(a,i,n,r);case`Intersect`:return MA(a,i,n,r);case`Not`:return NA(a,i,n,r);case`Object`:return PA(a,i,n,r);case`Record`:return FA(a,i,n,r);case`Ref`:return IA(a,i,n,r);case`This`:return LA(a,i,n,r);case`Tuple`:return RA(a,i,n,r);case`Union`:return zA(a,i,n,r);default:return kA(a,n,r)}}function VA(e,t,n){return BA(e,t,``,n)}function HA(e,t){return ly(e)||rj(e.items,t)}function UA(e,t){return ly(e)||rj(e.items,t)}function WA(e,t){return ly(e)||rj(e.returns,t)||e.parameters.some(e=>rj(e,t))}function GA(e,t){return ly(e)||rj(e.returns,t)||e.parameters.some(e=>rj(e,t))}function KA(e,t){return ly(e)||ly(e.unevaluatedProperties)||e.allOf.some(e=>rj(e,t))}function qA(e,t){let n=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((t,n)=>[...t,e.$defs[n]],[]),r=e.$defs[e.$ref];return ly(e)||rj(r,[...n,...t])}function JA(e,t){return ly(e)||rj(e.items,t)}function YA(e,t){return ly(e)||rj(e.not,t)}function XA(e,t){return ly(e)||Object.values(e.properties).some(e=>rj(e,t))||vy(e.additionalProperties)&&rj(e.additionalProperties,t)}function ZA(e,t){return ly(e)||rj(e.item,t)}function QA(e,t){let n=Object.getOwnPropertyNames(e.patternProperties)[0],r=e.patternProperties[n];return ly(e)||rj(r,t)||vy(e.additionalProperties)&&ly(e.additionalProperties)}function $A(e,t){return ly(e)?!0:rj(gO(e,t),t)}function ej(e,t){return ly(e)?!0:rj(gO(e,t),t)}function tj(e,t){return ly(e)||!cv(e.items)&&e.items.some(e=>rj(e,t))}function nj(e,t){return ly(e)||e.anyOf.some(e=>rj(e,t))}function rj(e,t){let n=hO(e,t),r=e;if(e.$id&&ij.has(e.$id))return!1;switch(e.$id&&ij.add(e.$id),e[F]){case`Array`:return HA(r,n);case`AsyncIterator`:return UA(r,n);case`Constructor`:return WA(r,n);case`Function`:return GA(r,n);case`Import`:return qA(r,n);case`Intersect`:return KA(r,n);case`Iterator`:return JA(r,n);case`Not`:return YA(r,n);case`Object`:return XA(r,n);case`Promise`:return ZA(r,n);case`Record`:return QA(r,n);case`Ref`:return $A(r,n);case`This`:return ej(r,n);case`Tuple`:return tj(r,n);case`Union`:return nj(r,n);default:return ly(e)}}var ij=new Set;function aj(e,t){return ij.clear(),rj(e,t)}var oj=class{constructor(e,t,n,r){this.schema=e,this.references=t,this.checkFunc=n,this.code=r,this.hasTransform=aj(e,t)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(e){return dA(this.schema,this.references,e)}Check(e){return this.checkFunc(e)}Decode(e){if(!this.checkFunc(e))throw new fA(this.schema,e,this.Errors(e).First());return this.hasTransform?EA(this.schema,this.references,e):e}Encode(e){let t=this.hasTransform?VA(this.schema,this.references,e):e;if(!this.checkFunc(t))throw new DA(this.schema,e,this.Errors(e).First());return t}},sj;(function(e){function t(e){return e===36}e.DollarSign=t;function n(e){return e===95}e.IsUnderscore=n;function r(e){return e>=65&&e<=90||e>=97&&e<=122}e.IsAlpha=r;function i(e){return e>=48&&e<=57}e.IsNumeric=i})(sj||={});var cj;(function(e){function t(e){return e.length===0?!1:sj.IsNumeric(e.charCodeAt(0))}function n(e){if(t(e))return!1;for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(!(sj.IsAlpha(n)||sj.IsNumeric(n)||sj.DollarSign(n)||sj.IsUnderscore(n)))return!1}return!0}function r(e){return e.replace(/'/g,`\\'`)}function i(e,t){return n(t)?`${e}.${t}`:`${e}['${r(t)}']`}e.Encode=i})(cj||={});var lj;(function(e){function t(e){let t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);sj.IsNumeric(r)||sj.IsAlpha(r)?t.push(e.charAt(n)):t.push(`_${r}_`)}return t.join(``).replace(/__/g,`_`)}e.Encode=t})(lj||={});var uj;(function(e){function t(e){return e.replace(/'/g,`\\'`)}e.Escape=t})(uj||={});var dj=class extends Tv{constructor(e){super(`Unknown type`),this.schema=e}},fj=class extends Tv{constructor(e){super(`Preflight validation check failed to guard for the given schema`),this.schema=e}},pj;(function(e){function t(e,t,n){return vv.ExactOptionalPropertyTypes?`('${t}' in ${e} ? ${n} : true)`:`(${cj.Encode(e,t)} !== undefined ? ${n} : true)`}e.IsExactOptionalProperty=t;function n(e){return vv.AllowArrayObject?`(typeof ${e} === 'object' && ${e} !== null)`:`(typeof ${e} === 'object' && ${e} !== null && !Array.isArray(${e}))`}e.IsObjectLike=n;function r(e){return vv.AllowArrayObject?`(typeof ${e} === 'object' && ${e} !== null && !(${e} instanceof Date) && !(${e} instanceof Uint8Array))`:`(typeof ${e} === 'object' && ${e} !== null && !Array.isArray(${e}) && !(${e} instanceof Date) && !(${e} instanceof Uint8Array))`}e.IsRecordLike=r;function i(e){return vv.AllowNaN?`typeof ${e} === 'number'`:`Number.isFinite(${e})`}e.IsNumberLike=i;function a(e){return vv.AllowNullVoid?`(${e} === undefined || ${e} === null)`:`${e} === undefined`}e.IsVoidLike=a})(pj||={});var mj;(function(e){function t(e){return e[F]===`Any`||e[F]===`Unknown`}function*n(e,t,n){yield`true`}function*r(e,t,n){yield`true`}function*i(e,t,n){yield`Array.isArray(${n})`;let[r,i]=[x(`value`,`any`),x(`acc`,`number`)];if(dv(e.maxItems)&&(yield`${n}.length <= ${e.maxItems}`),dv(e.minItems)&&(yield`${n}.length >= ${e.minItems}`),yield`((array) => { for(const ${r} of array) if(!(${ve(e.items,t,`value`)})) { return false }; return true; })(${n})`,xb(e.contains)||dv(e.minContains)||dv(e.maxContains)){let a=ve(xb(e.contains)?e.contains:Yb(),t,`value`),o=dv(e.minContains)?[`(count >= ${e.minContains})`]:[],s=dv(e.maxContains)?[`(count <= ${e.maxContains})`]:[];yield`((${r}) => { ${`const count = value.reduce((${i}, ${r}) => ${a} ? acc + 1 : acc, 0)`}; return ${[`(count > 0)`,...o,...s].join(` && `)}})(${n})`}e.uniqueItems===!0&&(yield`((${r}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${n})`)}function*a(e,t,n){yield`(typeof value === 'object' && Symbol.asyncIterator in ${n})`}function*o(e,t,n){yield`(typeof ${n} === 'bigint')`,pv(e.exclusiveMaximum)&&(yield`${n} < BigInt(${e.exclusiveMaximum})`),pv(e.exclusiveMinimum)&&(yield`${n} > BigInt(${e.exclusiveMinimum})`),pv(e.maximum)&&(yield`${n} <= BigInt(${e.maximum})`),pv(e.minimum)&&(yield`${n} >= BigInt(${e.minimum})`),pv(e.multipleOf)&&(yield`(${n} % BigInt(${e.multipleOf})) === 0`)}function*s(e,t,n){yield`(typeof ${n} === 'boolean')`}function*c(e,t,n){yield*v(e.returns,t,`${n}.prototype`)}function*l(e,t,n){yield`(${n} instanceof Date) && Number.isFinite(${n}.getTime())`,dv(e.exclusiveMaximumTimestamp)&&(yield`${n}.getTime() < ${e.exclusiveMaximumTimestamp}`),dv(e.exclusiveMinimumTimestamp)&&(yield`${n}.getTime() > ${e.exclusiveMinimumTimestamp}`),dv(e.maximumTimestamp)&&(yield`${n}.getTime() <= ${e.maximumTimestamp}`),dv(e.minimumTimestamp)&&(yield`${n}.getTime() >= ${e.minimumTimestamp}`),dv(e.multipleOfTimestamp)&&(yield`(${n}.getTime() % ${e.multipleOfTimestamp}) === 0`)}function*u(e,t,n){yield`(typeof ${n} === 'function')`}function*d(e,t,n){let r=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((t,n)=>[...t,e.$defs[n]],[]);yield*v(eC(e.$ref),[...t,...r],n)}function*f(e,t,n){yield`Number.isInteger(${n})`,dv(e.exclusiveMaximum)&&(yield`${n} < ${e.exclusiveMaximum}`),dv(e.exclusiveMinimum)&&(yield`${n} > ${e.exclusiveMinimum}`),dv(e.maximum)&&(yield`${n} <= ${e.maximum}`),dv(e.minimum)&&(yield`${n} >= ${e.minimum}`),dv(e.multipleOf)&&(yield`(${n} % ${e.multipleOf}) === 0`)}function*p(e,t,n){let r=e.allOf.map(e=>ve(e,t,n)).join(` && `);e.unevaluatedProperties===!1?yield`(${r} && ${`Object.getOwnPropertyNames(${n}).every(key => ${b(`${new RegExp(_C(e))};`)}.test(key))`})`:xb(e.unevaluatedProperties)?yield`(${r} && ${`Object.getOwnPropertyNames(${n}).every(key => ${b(`${new RegExp(_C(e))};`)}.test(key) || ${ve(e.unevaluatedProperties,t,`${n}[key]`)})`})`:yield`(${r})`}function*m(e,t,n){yield`(typeof value === 'object' && Symbol.iterator in ${n})`}function*h(e,t,n){typeof e.const==`number`||typeof e.const==`boolean`?yield`(${n} === ${e.const})`:yield`(${n} === '${uj.Escape(e.const)}')`}function*g(e,t,n){yield`false`}function*ee(e,t,n){yield`(!${ve(e.not,t,n)})`}function*_(e,t,n){yield`(${n} === null)`}function*te(e,t,n){yield pj.IsNumberLike(n),dv(e.exclusiveMaximum)&&(yield`${n} < ${e.exclusiveMaximum}`),dv(e.exclusiveMinimum)&&(yield`${n} > ${e.exclusiveMinimum}`),dv(e.maximum)&&(yield`${n} <= ${e.maximum}`),dv(e.minimum)&&(yield`${n} >= ${e.minimum}`),dv(e.multipleOf)&&(yield`(${n} % ${e.multipleOf}) === 0`)}function*ne(e,n,r){yield pj.IsObjectLike(r),dv(e.minProperties)&&(yield`Object.getOwnPropertyNames(${r}).length >= ${e.minProperties}`),dv(e.maxProperties)&&(yield`Object.getOwnPropertyNames(${r}).length <= ${e.maxProperties}`);let i=Object.getOwnPropertyNames(e.properties);for(let a of i){let i=cj.Encode(r,a),o=e.properties[a];if(e.required&&e.required.includes(a))yield*v(o,n,i),(gT(o)||t(o))&&(yield`('${a}' in ${r})`);else{let e=ve(o,n,i);yield pj.IsExactOptionalProperty(r,a,e)}}if(e.additionalProperties===!1&&(e.required&&e.required.length===i.length?yield`Object.getOwnPropertyNames(${r}).length === ${i.length}`:yield`Object.getOwnPropertyNames(${r}).every(key => ${`[${i.map(e=>`'${e}'`).join(`, `)}]`}.includes(key))`),typeof e.additionalProperties==`object`){let t=ve(e.additionalProperties,n,`${r}[key]`);yield`(Object.getOwnPropertyNames(${r}).every(key => ${`[${i.map(e=>`'${e}'`).join(`, `)}]`}.includes(key) || ${t}))`}}function*re(e,t,n){yield`${n} instanceof Promise`}function*ie(e,t,n){yield pj.IsRecordLike(n),dv(e.minProperties)&&(yield`Object.getOwnPropertyNames(${n}).length >= ${e.minProperties}`),dv(e.maxProperties)&&(yield`Object.getOwnPropertyNames(${n}).length <= ${e.maxProperties}`);let[r,i]=Object.entries(e.patternProperties)[0];yield`(Object.entries(${n}).every(([key, value]) => ${`(${b(`${new RegExp(r)}`)}.test(key) ? ${ve(i,t,`value`)} : ${xb(e.additionalProperties)?ve(e.additionalProperties,t,n):e.additionalProperties===!1?`false`:`true`})`}))`}function*ae(e,t,n){let r=gO(e,t);if(y.functions.has(e.$ref))return yield`${ye(e.$ref)}(${n})`;yield*v(r,t,n)}function*oe(e,t,n){let r=b(`${new RegExp(e.source,e.flags)};`);yield`(typeof ${n} === 'string')`,dv(e.maxLength)&&(yield`${n}.length <= ${e.maxLength}`),dv(e.minLength)&&(yield`${n}.length >= ${e.minLength}`),yield`${r}.test(${n})`}function*se(e,t,n){yield`(typeof ${n} === 'string')`,dv(e.maxLength)&&(yield`${n}.length <= ${e.maxLength}`),dv(e.minLength)&&(yield`${n}.length >= ${e.minLength}`),e.pattern!==void 0&&(yield`${b(`${new RegExp(e.pattern)};`)}.test(${n})`),e.format!==void 0&&(yield`format('${e.format}', ${n})`)}function*ce(e,t,n){yield`(typeof ${n} === 'symbol')`}function*le(e,t,n){yield`(typeof ${n} === 'string')`,yield`${b(`${new RegExp(e.pattern)};`)}.test(${n})`}function*ue(e,t,n){yield`${ye(e.$ref)}(${n})`}function*de(e,t,n){if(yield`Array.isArray(${n})`,e.items===void 0)return yield`${n}.length === 0`;yield`(${n}.length === ${e.maxItems})`;for(let r=0;r<e.items.length;r++)yield`${ve(e.items[r],t,`${n}[${r}]`)}`}function*fe(e,t,n){yield`${n} === undefined`}function*pe(e,t,n){yield`(${e.anyOf.map(e=>ve(e,t,n)).join(` || `)})`}function*me(e,t,n){yield`${n} instanceof Uint8Array`,dv(e.maxByteLength)&&(yield`(${n}.length <= ${e.maxByteLength})`),dv(e.minByteLength)&&(yield`(${n}.length >= ${e.minByteLength})`)}function*he(e,t,n){yield`true`}function*ge(e,t,n){yield pj.IsVoidLike(n)}function*_e(e,t,n){let r=y.instances.size;y.instances.set(r,e),yield`kind('${e[F]}', ${r}, ${n})`}function*v(e,t,v,ve=!0){let b=mv(e.$id)?[...t,e]:t,x=e;if(ve&&mv(e.$id)){let n=ye(e.$id);if(y.functions.has(n))return yield`${n}(${v})`;{y.functions.set(n,`<deferred>`);let r=be(n,e,t,`value`,!1);return y.functions.set(n,r),yield`${n}(${v})`}}switch(x[F]){case`Any`:return yield*n(x,b,v);case`Argument`:return yield*r(x,b,v);case`Array`:return yield*i(x,b,v);case`AsyncIterator`:return yield*a(x,b,v);case`BigInt`:return yield*o(x,b,v);case`Boolean`:return yield*s(x,b,v);case`Constructor`:return yield*c(x,b,v);case`Date`:return yield*l(x,b,v);case`Function`:return yield*u(x,b,v);case`Import`:return yield*d(x,b,v);case`Integer`:return yield*f(x,b,v);case`Intersect`:return yield*p(x,b,v);case`Iterator`:return yield*m(x,b,v);case`Literal`:return yield*h(x,b,v);case`Never`:return yield*g(x,b,v);case`Not`:return yield*ee(x,b,v);case`Null`:return yield*_(x,b,v);case`Number`:return yield*te(x,b,v);case`Object`:return yield*ne(x,b,v);case`Promise`:return yield*re(x,b,v);case`Record`:return yield*ie(x,b,v);case`Ref`:return yield*ae(x,b,v);case`RegExp`:return yield*oe(x,b,v);case`String`:return yield*se(x,b,v);case`Symbol`:return yield*ce(x,b,v);case`TemplateLiteral`:return yield*le(x,b,v);case`This`:return yield*ue(x,b,v);case`Tuple`:return yield*de(x,b,v);case`Undefined`:return yield*fe(x,b,v);case`Union`:return yield*pe(x,b,v);case`Uint8Array`:return yield*me(x,b,v);case`Unknown`:return yield*he(x,b,v);case`Void`:return yield*ge(x,b,v);default:if(!Nb(x[F]))throw new dj(e);return yield*_e(x,b,v)}}let y={language:`javascript`,functions:new Map,variables:new Map,instances:new Map};function ve(e,t,n,r=!0){return`(${[...v(e,t,n,r)].join(` && `)})`}function ye(e){return`check_${lj.Encode(e)}`}function b(e){let t=`local_${y.variables.size}`;return y.variables.set(t,`const ${t} = ${e}`),t}function be(e,t,n,r,i=!0){let[a,o]=[`
`,e=>``.padStart(e,` `)],s=x(`value`,`any`),c=xe(`boolean`),l=[...v(t,n,r,i)].map(e=>`${o(4)}${e}`).join(` &&${a}`);return`function ${e}(${s})${c} {${a}${o(2)}return (${a}${l}${a}${o(2)})\n}`}function x(e,t){return`${e}${y.language===`typescript`?`: ${t}`:``}`}function xe(e){return y.language===`typescript`?`: ${e}`:``}function Se(e,t,n){let r=be(`check`,e,t,`value`),i=x(`value`,`any`),a=xe(`boolean`),o=[...y.functions.values()],s=[...y.variables.values()],c=mv(e.$id)?`return function check(${i})${a} {\n  return ${ye(e.$id)}(value)\n}`:`return ${r}`;return[...s,...o,c].join(`
`)}function Ce(...e){let t={language:`javascript`},[n,r,i]=e.length===2&&sv(e[1])?[e[0],e[1],t]:e.length===2&&!sv(e[1])?[e[0],[],e[1]]:e.length===3?[e[0],e[1],e[2]]:e.length===1?[e[0],[],t]:[null,[],t];if(y.language=i.language,y.variables.clear(),y.functions.clear(),y.instances.clear(),!xb(n))throw new fj(n);for(let e of r)if(!xb(e))throw new fj(e);return Se(n,r,i)}e.Code=Ce;function we(e,t=[]){let n=Ce(e,t,{language:`javascript`}),r=globalThis.Function(`kind`,`format`,`hash`,n),i=new Map(y.instances);function a(e,t,n){return!Nb(e)||!i.has(t)?!1:Fb(e)(i.get(t),n)}function o(e,t){return Ab(e)?jb(e)(t):!1}function s(e){return BO(e)}return new oj(e,t,r(a,o,s),n)}e.Compile=we})(mj||={});var hj={};function gj(e,t){e in hj||(hj[e]=t)}var _j=!1;function vj(){_j||(_j=!0,dO(e=>(hj[e.schema[F]]||lO)(e)))}var yj=Symbol.for(`object-shape-tester.shape-identifier`);function bj(e){if(vj(),xj(e))return e;let t=wj(e),n=Cj(t,!1),r=Cj(t,!0),i={$_schema:t,$_schemaNoExtraKeys:n,$_schemaExtraKeys:r,default:t.default,$_compiledSchema:mj.Compile(t),$_compiledSchemaNoExtraKeys:mj.Compile(n),$_compiledSchemaExtraKeys:mj.Compile(r)};return Object.defineProperties(i,{runtimeType:{configurable:!1,enumerable:!1,get(){throw Error(`runtimeType cannot be used as a value, it is only for types.`)}},[yj]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),i}function xj(e){return A.hasKey(e,yj)&&!!e[yj]}function Sj(e){return A.hasKey(e,F)}function Cj(e,t){let n={...e};if(Array.isArray(e.anyOf)&&(n.anyOf=e.anyOf.map(e=>Cj(e,t))),Array.isArray(e.allOf)&&(n.allOf=e.allOf.map(e=>Cj(e,t))),Sj(e.items)?n.items=Cj(e.items,t):Array.isArray(e.items)&&(n.items=e.items.map(e=>Cj(e,t))),A.isObject(e.properties)){let r={};Object.entries(e.properties).forEach(([e,n])=>{r[e]=Cj(n,t)}),n.properties=r}return n.additionalProperties=t,n}function wj(e){if(Sj(e))return e;if(xj(e))return e.$_schema;if(A.isFunction(e))return cO.Function([],cO.Any(),{default:e});if(A.isObject(e)){let t={},n={};return Object.entries(e).forEach(([e,r])=>{let i=wj(r);n[e]=i,t[e]=i.default}),cO.Object(n,{default:t})}else if(A.isArray(e))return cO.Array(cO.Union(e.map(e=>wj(e))),{default:[]});else if(A.isPrimitive(e)){if(A.isString(e))return cO.String({default:e});if(A.isNumber(e))return cO.Number({default:e});if(A.isBoolean(e))return cO.Boolean({default:e});if(A.isSymbol(e))return cO.Symbol({default:e});if(A.isNull(e))return cO.Null({default:null});if(A.isUndefined(e))return cO.Undefined({default:void 0});if(A.isBigInt(e))return cO.BigInt({default:e});Fc.tsType(e).equals(),Fc.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw Error(`Invalid shape: ${y(e)}`)}function Tj({checkValue:e,default:t,name:n}){return Nb(n)||Pb(n,(t,n)=>e(n)),(e=t)=>bj(cO.Unsafe({[F]:n,default:e}))}function Ej(e,t){let n=ke(e);if(t!=null&&!n.includes(t))throw TypeError(`enumShape default must be a subset of the given enum.`);return bj(cO.Union(n.map(e=>cO.Literal(e)),{default:t??n[0]}))}function Dj(e){return A.isSymbol(e)?kj(e):bj(cO.Const(e,{default:e}))}var Oj=`ExactSymbol`;function kj(e){return Nb(`ExactSymbol`)||Pb(Oj,(e,t)=>t===e.symbol),gj(Oj,({schema:e})=>`Expected symbol ${e.symbol?.description?Bl({value:e.symbol.description,wrapper:`'`}):`<unnamed symbol>`}`),bj(cO.Unsafe({[F]:Oj,symbol:e,default:e}))}function Aj(...e){let t={},n=e.map(e=>{let n=bj(e);return Object.assign(t,n.default),n.$_schema});return bj(cO.Composite(n,{default:t}))}function jj(e,t={}){vv.ExactOptionalPropertyTypes=!0;let n=bj(e).$_schema,r=t.alsoUndefined?cO.Union([cO.Undefined(),n]):n;return bj(cO.Optional(r))}function Mj(...e){let t,n=e.map((e,n)=>{let r=bj(e);return n||(t=r.default),r.$_schema});return bj(cO.Union(n,{default:t}))}function Nj(e){return jj(Mj(void 0,null,e))}function Pj(e){let t=bj(e);return bj(cO.Partial(t.$_schema,{default:t.default}))}function Fj(e){return Mj(e,``,-1,0n,!1,PC(),null,void 0)}var Ij=class extends TypeError{errors;failureMessage;name=`ShapeMismatchError`;constructor(e,t){let n=Pe(t,`Shape mismatch:\n${So(e.map(e=>Rj(e)).join(`
`),1)}`);super(n),this.errors=e,this.failureMessage=t}};function Lj(e){return e.errors.flatMap(e=>Array.from(e))}function Rj(e,t=0){let n=Lj(e).map(e=>Rj(e,t+1));return[So([e.path,e.message].filter(A.isTruthy).join(`: `)+(n.length?`:`:``),t),...n].join(`
`)}function zj(e,t,n={}){return Vj(t,n).Check(e)}function Bj(e,t,n={},r){if(zj(e,t,n))return;let i=Array.from(Vj(t,n).Errors(e));if(i.length)throw new Ij(i,r)}function Vj(e,t){return e=Hj(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function Hj(e){return bj(e)}function Uj({exclusiveMax:e,exclusiveMin:t,...n}){let{min:r,max:i}=Re(n),a=n.default??(i-r)/2+r,o=bj(cO.Number({...t?{exclusiveMinimum:r}:{minimum:r},...e?{exclusiveMaximum:i}:{maximum:i},default:a})),s=nl(()=>Bj(a,o));if(s)throw Ie(s,`Default range value is not within range.`);return o}var Wj=`recordShape`;function Gj({keys:e,values:t,partial:n,additionalProperties:r}){Kj();let i=Yj(e),a=bj(t);return bj(cO.Unsafe({[F]:Wj,keysShape:i,valuesShape:a,isPartial:!!n,additionalProperties:!!r,default:Jj({isPartial:!!n,keysShape:i,valuesShape:a})}))}function Kj(){Nb(`recordShape`)||Pb(Wj,(e,t)=>{if(typeof t!=`object`||!t||Array.isArray(t))return!1;let n=Object.entries(t).every(([t,n])=>{let r=e.additionalProperties?!0:zj(t,e.keysShape),i=zj(n,e.valuesShape);return r&&i}),r=e.isPartial?!0:!qj(e.keysShape,t).length;return n&&r}),gj(Wj,e=>{let t=e.schema,n=e.value;if(typeof n!=`object`||!n||Array.isArray(n))return`Expected an object`;let r=Jc(Object.entries(n),([e])=>e,(e,[n,r])=>!zj(n,t.keysShape)||!zj(r,t.valuesShape)),i=qj(t.keysShape,n);return[r.length?[`Failure at keys`,r.join(`,`)].join(`: `):``,i.length?[`Missing keys`,i.join(`,`)].join(`: `):``].filter(A.isTruthy).join(`
`)})}function qj(e,t){let n=Xj(e).filter(e=>A.isPropertyKey(e));return n.length?n.filter(e=>!A.hasKey(t,e)):[]}function Jj({keysShape:e,valuesShape:t,isPartial:n}){if(n)return{};{let n=Xj(e),r=t.default;return Object.fromEntries(n.map(e=>[e,r]))}}function Yj(e){return xj(e)?e:Sj(e)?bj(e):A.isObject(e)?Ej(e):A.isArray(e)&&A.isLengthAtLeast(e,1)?Mj(...e.map(e=>Dj(e))):A.isPropertyKey(e)?bj(e):bj(cO.Undefined())}function Xj(e){let t=e.$_schema,n=t[F].toLowerCase();return[`const`,`literal`].includes(n)?[t.const]:n===`union`?o(t.anyOf.flatMap(e=>Xj(bj(e)))):[`undefined`,`number`,`string`,`symbol`].includes(n)?[]:Xj(Yj(e.default))}function Zj(e){return bj(cO.Unknown({default:e}))}var Qj=`Africa/Abidjan.Africa/Accra.Africa/Addis_Ababa.Africa/Algiers.Africa/Asmara.Africa/Bamako.Africa/Bangui.Africa/Banjul.Africa/Bissau.Africa/Blantyre.Africa/Brazzaville.Africa/Bujumbura.Africa/Cairo.Africa/Casablanca.Africa/Ceuta.Africa/Conakry.Africa/Dakar.Africa/Dar_es_Salaam.Africa/Djibouti.Africa/Douala.Africa/El_Aaiun.Africa/Freetown.Africa/Gaborone.Africa/Harare.Africa/Johannesburg.Africa/Juba.Africa/Kampala.Africa/Khartoum.Africa/Kigali.Africa/Kinshasa.Africa/Lagos.Africa/Libreville.Africa/Lome.Africa/Luanda.Africa/Lubumbashi.Africa/Lusaka.Africa/Malabo.Africa/Maputo.Africa/Maseru.Africa/Mbabane.Africa/Mogadishu.Africa/Monrovia.Africa/Nairobi.Africa/Ndjamena.Africa/Niamey.Africa/Nouakchott.Africa/Ouagadougou.Africa/Porto-Novo.Africa/Sao_Tome.Africa/Timbuktu.Africa/Tripoli.Africa/Tunis.Africa/Windhoek.America/Adak.America/Anchorage.America/Anguilla.America/Antigua.America/Araguaina.America/Argentina/Buenos_Aires.America/Argentina/Catamarca.America/Argentina/ComodRivadavia.America/Argentina/Cordoba.America/Argentina/Jujuy.America/Argentina/La_Rioja.America/Argentina/Mendoza.America/Argentina/Rio_Gallegos.America/Argentina/Salta.America/Argentina/San_Juan.America/Argentina/San_Luis.America/Argentina/Tucuman.America/Argentina/Ushuaia.America/Aruba.America/Asuncion.America/Atikokan.America/Bahia.America/Bahia_Banderas.America/Barbados.America/Belem.America/Belize.America/Blanc-Sablon.America/Boa_Vista.America/Bogota.America/Boise.America/Cambridge_Bay.America/Campo_Grande.America/Cancun.America/Caracas.America/Cayenne.America/Cayman.America/Chicago.America/Chihuahua.America/Coral_Harbour.America/Costa_Rica.America/Creston.America/Cuiaba.America/Curacao.America/Danmarkshavn.America/Dawson.America/Dawson_Creek.America/Denver.America/Detroit.America/Dominica.America/Edmonton.America/Eirunepe.America/El_Salvador.America/Ensenada.America/Fort_Nelson.America/Fortaleza.America/Glace_Bay.America/Goose_Bay.America/Grand_Turk.America/Grenada.America/Guadeloupe.America/Guatemala.America/Guayaquil.America/Guyana.America/Halifax.America/Havana.America/Hermosillo.America/Indiana/Indianapolis.America/Indiana/Knox.America/Indiana/Marengo.America/Indiana/Petersburg.America/Indiana/Tell_City.America/Indiana/Vevay.America/Indiana/Vincennes.America/Indiana/Winamac.America/Inuvik.America/Iqaluit.America/Jamaica.America/Juneau.America/Kentucky/Louisville.America/Kentucky/Monticello.America/La_Paz.America/Lima.America/Los_Angeles.America/Maceio.America/Managua.America/Manaus.America/Martinique.America/Matamoros.America/Mazatlan.America/Menominee.America/Merida.America/Metlakatla.America/Mexico_City.America/Miquelon.America/Moncton.America/Monterrey.America/Montevideo.America/Montreal.America/Montserrat.America/Nassau.America/New_York.America/Nipigon.America/Nome.America/Noronha.America/North_Dakota/Beulah.America/North_Dakota/Center.America/North_Dakota/New_Salem.America/Nuuk.America/Ojinaga.America/Panama.America/Pangnirtung.America/Paramaribo.America/Phoenix.America/Port-au-Prince.America/Port_of_Spain.America/Porto_Velho.America/Puerto_Rico.America/Punta_Arenas.America/Rainy_River.America/Rankin_Inlet.America/Recife.America/Regina.America/Resolute.America/Rio_Branco.America/Rosario.America/Santarem.America/Santiago.America/Santo_Domingo.America/Sao_Paulo.America/Scoresbysund.America/Sitka.America/St_Johns.America/St_Kitts.America/St_Lucia.America/St_Thomas.America/St_Vincent.America/Swift_Current.America/Tegucigalpa.America/Thule.America/Thunder_Bay.America/Tijuana.America/Toronto.America/Tortola.America/Vancouver.America/Whitehorse.America/Winnipeg.America/Yakutat.America/Yellowknife.Antarctica/Casey.Antarctica/Davis.Antarctica/DumontDUrville.Antarctica/Macquarie.Antarctica/Mawson.Antarctica/McMurdo.Antarctica/Palmer.Antarctica/Rothera.Antarctica/Syowa.Antarctica/Troll.Antarctica/Vostok.Asia/Aden.Asia/Almaty.Asia/Amman.Asia/Anadyr.Asia/Aqtau.Asia/Aqtobe.Asia/Ashgabat.Asia/Atyrau.Asia/Baghdad.Asia/Bahrain.Asia/Baku.Asia/Bangkok.Asia/Barnaul.Asia/Beirut.Asia/Bishkek.Asia/Brunei.Asia/Chita.Asia/Choibalsan.Asia/Chongqing.Asia/Colombo.Asia/Damascus.Asia/Dhaka.Asia/Dili.Asia/Dubai.Asia/Dushanbe.Asia/Famagusta.Asia/Gaza.Asia/Harbin.Asia/Hebron.Asia/Ho_Chi_Minh.Asia/Hong_Kong.Asia/Hovd.Asia/Irkutsk.Asia/Jakarta.Asia/Jayapura.Asia/Jerusalem.Asia/Kabul.Asia/Kamchatka.Asia/Karachi.Asia/Kashgar.Asia/Kathmandu.Asia/Khandyga.Asia/Kolkata.Asia/Krasnoyarsk.Asia/Kuala_Lumpur.Asia/Kuching.Asia/Kuwait.Asia/Macau.Asia/Magadan.Asia/Makassar.Asia/Manila.Asia/Muscat.Asia/Nicosia.Asia/Novokuznetsk.Asia/Novosibirsk.Asia/Omsk.Asia/Oral.Asia/Phnom_Penh.Asia/Pontianak.Asia/Pyongyang.Asia/Qatar.Asia/Qostanay.Asia/Qyzylorda.Asia/Riyadh.Asia/Sakhalin.Asia/Samarkand.Asia/Seoul.Asia/Shanghai.Asia/Singapore.Asia/Srednekolymsk.Asia/Taipei.Asia/Tashkent.Asia/Tbilisi.Asia/Tehran.Asia/Tel_Aviv.Asia/Thimphu.Asia/Tokyo.Asia/Tomsk.Asia/Ulaanbaatar.Asia/Urumqi.Asia/Ust-Nera.Asia/Vientiane.Asia/Vladivostok.Asia/Yakutsk.Asia/Yangon.Asia/Yekaterinburg.Asia/Yerevan.Atlantic/Azores.Atlantic/Bermuda.Atlantic/Canary.Atlantic/Cape_Verde.Atlantic/Faroe.Atlantic/Jan_Mayen.Atlantic/Madeira.Atlantic/Reykjavik.Atlantic/South_Georgia.Atlantic/St_Helena.Atlantic/Stanley.Australia/Adelaide.Australia/Brisbane.Australia/Broken_Hill.Australia/Currie.Australia/Darwin.Australia/Eucla.Australia/Hobart.Australia/Lindeman.Australia/Lord_Howe.Australia/Melbourne.Australia/Perth.Australia/Sydney.CET.CST6CDT.EET.EST.EST5EDT.Etc/GMT+1.Etc/GMT+10.Etc/GMT+11.Etc/GMT+12.Etc/GMT+2.Etc/GMT+3.Etc/GMT+4.Etc/GMT+5.Etc/GMT+6.Etc/GMT+7.Etc/GMT+8.Etc/GMT+9.Etc/GMT-1.Etc/GMT-10.Etc/GMT-11.Etc/GMT-12.Etc/GMT-13.Etc/GMT-14.Etc/GMT-2.Etc/GMT-3.Etc/GMT-4.Etc/GMT-5.Etc/GMT-6.Etc/GMT-7.Etc/GMT-8.Etc/GMT-9.Europe/Amsterdam.Europe/Andorra.Europe/Astrakhan.Europe/Athens.Europe/Belfast.Europe/Belgrade.Europe/Berlin.Europe/Brussels.Europe/Bucharest.Europe/Budapest.Europe/Chisinau.Europe/Copenhagen.Europe/Dublin.Europe/Gibraltar.Europe/Guernsey.Europe/Helsinki.Europe/Isle_of_Man.Europe/Istanbul.Europe/Jersey.Europe/Kaliningrad.Europe/Kirov.Europe/Kyiv.Europe/Lisbon.Europe/Ljubljana.Europe/London.Europe/Luxembourg.Europe/Madrid.Europe/Malta.Europe/Minsk.Europe/Monaco.Europe/Moscow.Europe/Oslo.Europe/Paris.Europe/Prague.Europe/Riga.Europe/Rome.Europe/Samara.Europe/Sarajevo.Europe/Saratov.Europe/Simferopol.Europe/Skopje.Europe/Sofia.Europe/Stockholm.Europe/Tallinn.Europe/Tirane.Europe/Tiraspol.Europe/Ulyanovsk.Europe/Uzhgorod.Europe/Vaduz.Europe/Vienna.Europe/Vilnius.Europe/Volgograd.Europe/Warsaw.Europe/Zagreb.Europe/Zaporozhye.Europe/Zurich.HST.Indian/Antananarivo.Indian/Chagos.Indian/Christmas.Indian/Cocos.Indian/Comoro.Indian/Kerguelen.Indian/Mahe.Indian/Maldives.Indian/Mauritius.Indian/Mayotte.Indian/Reunion.MET.MST.MST7MDT.PST8PDT.Pacific/Apia.Pacific/Auckland.Pacific/Bougainville.Pacific/Chatham.Pacific/Chuuk.Pacific/Easter.Pacific/Efate.Pacific/Enderbury.Pacific/Fakaofo.Pacific/Fiji.Pacific/Funafuti.Pacific/Galapagos.Pacific/Gambier.Pacific/Guadalcanal.Pacific/Guam.Pacific/Honolulu.Pacific/Johnston.Pacific/Kanton.Pacific/Kiritimati.Pacific/Kosrae.Pacific/Kwajalein.Pacific/Majuro.Pacific/Marquesas.Pacific/Midway.Pacific/Nauru.Pacific/Niue.Pacific/Norfolk.Pacific/Noumea.Pacific/Pago_Pago.Pacific/Palau.Pacific/Pitcairn.Pacific/Pohnpei.Pacific/Port_Moresby.Pacific/Rarotonga.Pacific/Saipan.Pacific/Tahiti.Pacific/Tarawa.Pacific/Tongatapu.Pacific/Wake.Pacific/Wallis.UTC.WET`.split(`.`).reduce((e,t)=>(e[t]=t,e),{});yn.defaultZone.name;var $j=Qj.UTC,eM=bj({hour:Uj({...to,default:to.min}),minute:Uj({...no,default:no.min}),second:Uj({...ro,default:ro.min}),millisecond:Uj({...io,default:io.min}),timezone:Ej(Qj,$j)});bj(Aj(bj({year:2023,month:Uj({...mo,default:mo.min}),day:Uj({...ho,default:ho.min}),timezone:Ej(Qj,$j)}),eM)),D.Years,D.Months,D.Weeks,D.Days,D.Hours,D.Minutes,D.Seconds,D.Milliseconds,bj(Mj({get:Dj(E.Month),in:Mj(Dj(E.Year))},{get:Dj(E.Week),in:Mj(Dj(E.Year),Dj(E.Month))},{get:Dj(E.Day),in:Mj(Dj(E.Year),Dj(E.Month),Dj(E.Week))},{get:Dj(E.Hour),in:Mj(Dj(E.Year),Dj(E.Month),Dj(E.Week),Dj(E.Day))},{get:Dj(E.Minute),in:Mj(Dj(E.Year),Dj(E.Month),Dj(E.Week),Dj(E.Day),Dj(E.Hour))},{get:Dj(E.Second),in:Mj(Dj(E.Year),Dj(E.Month),Dj(E.Week),Dj(E.Day),Dj(E.Hour),Dj(E.Minute))},{get:Dj(E.Millisecond),in:Mj(Dj(E.Year),Dj(E.Month),Dj(E.Week),Dj(E.Day),Dj(E.Hour),Dj(E.Minute),Dj(E.Second))})),Gj({keys:Ej(D),values:-1,partial:!0});var tM;(function(e){e.Date=`date`,e.Time=`time`,e.DateTime=`datetime-local`})(tM||={});var nM;(function(e){e.Hour=`hour`,e.Minute=`minute`,e.Second=`second`,e.Millisecond=`millisecond`})(nM||={});var rM;(function(e){e.Year=`year`,e.Month=`month`,e.Day=`day`})(rM||={}),Ml({year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0},ke(nM)),Tj({default:new Date().toISOString(),name:`UtcIsoString`,checkValue(e){return iM(e)}});function iM(e){return $a.fromISO(e).toUTC().toISO()===e}$a.DATE_SHORT,$a.DATE_MED,$a.DATE_MED_WITH_WEEKDAY,$a.DATE_FULL,$a.DATE_HUGE,$a.TIME_SIMPLE,$a.TIME_WITH_SECONDS,$a.TIME_WITH_SHORT_OFFSET,$a.TIME_WITH_LONG_OFFSET,$a.TIME_24_SIMPLE,$a.TIME_24_WITH_SECONDS,$a.TIME_24_WITH_SHORT_OFFSET,$a.TIME_24_WITH_LONG_OFFSET,$a.DATETIME_SHORT,$a.DATETIME_SHORT_WITH_SECONDS,$a.DATETIME_MED,$a.DATETIME_MED_WITH_SECONDS,$a.DATETIME_MED_WITH_WEEKDAY,$a.DATETIME_FULL,$a.DATETIME_FULL_WITH_SECONDS,$a.DATETIME_HUGE,$a.DATETIME_HUGE_WITH_SECONDS;var aM=bj({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:Zj()});function oM(e){return zj(e,aM,{allowExtraKeys:!0})}var sM=class extends E_{value;equalityCheck;constructor(e){super(),this.value=e.defaultValue,this.equalityCheck=`equalityCheck`in e?e.equalityCheck:D_}setValue(e){return super.setValue(e)}listen(e,t){return super.listen(e,t)}removeListener(e){return super.removeListener(e)}},{I:cM}=Ed,lM=e=>e,uM=()=>document.createComment(``),dM=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new cM(r.insertBefore(uM(),i),r.insertBefore(uM(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=lM(e).nextSibling;lM(r).insertBefore(e,i),e=t}}}return n},fM=(e,t,n=e)=>(e._$AI(t,n),e),pM={},mM=(e,t=pM)=>e._$AH=t,hM=e=>e._$AH,gM=e=>{e._$AR(),e._$AA.remove()},_M={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vM=e=>(...t)=>({_$litDirective$:e,values:t}),yM=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},bM={attribute:!0,type:String,converter:Bu,reflect:!1,hasChanged:Vu},xM=(e=bM,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function SM(e){return(t,n)=>typeof n==`object`?xM(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}var CM=vM(class extends yM{constructor(e){if(super(e),e.type!==_M.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return fd}}),wM=e=>e??j;function*TM(e,t){let n=typeof t==`function`;if(e!==void 0){let r=-1;for(let i of e)r>-1&&(yield n?t(r):t),r++,yield i}}var EM=class extends yM{constructor(e){if(super(e),this.it=j,e.type!==_M.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===j||e==null)return this._t=void 0,this.it=e;if(e===fd)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};EM.directiveName=`unsafeHTML`,EM.resultType=1;var DM=vM(EM);function OM(e,t,n){return e?t(e):n?.(e)}var kM=class extends Ad{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds};function AM(e,t,n){let r=!t.length&&!n.length,i=e.length?!1:!t.filter(e=>!!e.index).length;if(r||i)return[...e];let a=e.map(e=>[e]);return a.length||(a[0]=[]),n.forEach(t=>{t>=0&&t<e.length&&(a[t]=[])}),t.forEach(e=>{let t=a[e.index];t&&t.splice(0,0,...e.values)}),a.flat()}function jM(e){return A.hasKey(e,`_elementVirIsMinimalDefinitionWithInputs`)&&!!e._elementVirIsMinimalDefinitionWithInputs}function MM(e){return A.hasKey(e,`tagName`)&&!!e.tagName&&typeof e.tagName==`string`}function NM(e){return Jc(e,e=>{if(jM(e))return e.definition;if(MM(e))return e.tagInterpolationKey||e},A.isTruthy)}var PM=new WeakMap;function FM(e,t){return LM(PM,[e,...NM(t)]).value?.template}function IM(e,t,n){return zM(PM,[e,...NM(t)],n)}function LM(e,t,n=0){let{currentTemplateAndNested:r,reason:i}=RM(e,t,n);return r?n===t.length-1?{value:r,reason:`reached end of keys array`}:r.nested?LM(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function RM(e,t,n){let r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};let i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:`key and value exists`}}function zM(e,t,n,r=0){let{currentTemplateAndNested:i,currentKey:a,reason:o}=RM(e,t,r);if(!a)return{result:!1,reason:o};let s=i??{nested:void 0,template:void 0};if(i||e.set(a,s),r===t.length-1)return s.template=n,{result:!0,reason:`set value at end of keys array`};let c=s.nested??new WeakMap;return s.nested||=c,zM(c,t,n,r+1)}function BM(e,t,n){let r=FM(e,t),i=r??n();if(!r){let n=IM(e,t,i);if(!n.result)throw Error(`Failed to set template transform: ${n.reason}`)}let a=i.valuesTransform(t),o=AM(t,a.valueInsertions,a.valueIndexDeletions);return{strings:i.templateStrings,values:o}}function VM(e,t,n,r){let i=[],a=[],o=[],s=[];return e.forEach((c,l)=>{let u=i.length-1,d=i[u],f=l-1,p=t[f];r&&r(c);let m,h=[];if(typeof d==`string`&&(m=n(d,c,p),m)){i[u]=[d,m.replacement].join(``),o.push(f);let e=m.getExtraValues;h=e?e(p):[],h.length&&e?(i[u]+=` `,h.forEach((e,t)=>{t&&i.push(` `)}),s.push(t=>{let n=t[f];return{index:f,values:e(n)}}),i.push(c)):i[u]+=c}m||i.push(c);let g=e.raw[l];m?(a[u]=[a[u],m.replacement,g].join(``),h.length&&h.forEach(()=>{a.push(``)})):a.push(g)}),{templateStrings:Object.assign([],i,{raw:a}),valuesTransform(e){return{valueIndexDeletions:o,valueInsertions:s.flatMap(t=>t(e))}}}}function HM(...[e,t,n]){if(MM(n))return{replacement:n.tagName,getExtraValues:void 0}}function UM(e,t){return VM(e,t,HM)}function z(e,...t){let n=BM(e,t,()=>UM(e,t));return Eu(n.strings,...n.values)}var WM={allowPolymorphicState:!1,errorHandler:void 0};function GM(e,t){let n=e.instanceState;De(t).forEach(r=>{if(n&&r in n)throw Error(`Cannot set input '${String(r)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);`instanceInputs`in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),`instanceInputs`in e&&De(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}var KM=class extends CustomEvent{_type=``;get type(){return this._type}constructor(e,t){super(typeof e==`string`?e:e.type,{detail:t,bubbles:!0,composed:!0})}};function qM(){return e=>class extends KM{static type=e;_type=e;constructor(t){super(e,t)}}}function JM(){return qM()}function YM(e,t){return t?Object.keys(t).filter(e=>{if(typeof e!=`string`)throw TypeError(`Expected event key of type string but got type '${typeof e}' for key ${String(e)}`);if(e===``)throw Error(`Got empty string for events key.`);return!0}).reduce((t,n)=>(t[n]=qM()([e,n].join(`-`)),t),{}):{}}function XM(e){return e?Al(e,e=>e):{}}function ZM(e,t){t in e||SM()(e,t)}function QM(e,t,n){if(typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`)throw TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function $M(e,t){let n=e;function r(n){t?QM(n,e,e.tagName):ZM(e,n)}function i(e,t){return r(t),n[t]}return new Proxy({},{get:i,set(t,i,a){r(i);let o=n[i];function s(e){t[i]=e,n[i]=e}let c=e.observablePropertyListenerMap[i];if(o!==a&&oM(o)&&c&&o.removeListener(c),oM(a))if(c)a.listen(!1,c);else{function t(){e.requestUpdate()}e.observablePropertyListenerMap[i]=t,a.listen(!1,t)}else oM(o)&&(e.observablePropertyListenerMap[i]=void 0);return s(a),!0},ownKeys(e){return Reflect.ownKeys(e)},getOwnPropertyDescriptor(e,t){if(t in e)return{get value(){return i(e,t)},configurable:!0,enumerable:!0}},has(e,t){return Reflect.has(e,t)}})}function eN(e,t){let n=[e,`-`].join(``);Object.keys(t).forEach(t=>{if(!t.startsWith(n))throw Error(`Invalid element string name '${t}' in '${e}': element string names must begin with the element's tag name.`)})}function tN(e,t,n){return n?Yc(n,n=>({key:n,value:[e,t,n].join(`-`)}),{useRequired:!0}):{}}function nN({hostClassNames:e,cssVars:t}){return{hostClasses:Al(e,(e,t)=>({name:Tu(t),selector:Tu(`:host(.${t})`)})),cssVars:t}}function rN({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&De(t).forEach(a=>{let o=t[a],s=n[a];typeof o==`function`&&(o({state:r,inputs:i})?e.classList.add(s):e.classList.remove(s))})}function iN({element:e,eventsMap:t,cssVars:n,slotNamesMap:r,testIdsMap:i}){function a(t){De(t).forEach(n=>{let r=t[n];e.instanceState[n]=r})}return{cssVars:n,slotNames:r,testIds:i,dispatch:t=>e.dispatchEvent(t),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:a}}function aN(...e){return Fc.isEmpty(e),e=>{let t=e;if(!A.isObject(t))throw TypeError("Cannot define element with non-object init: ${init}");return oN({...t,options:{...t.options}})}}function oN(e){if(!A.isObject(e))throw TypeError("Cannot define element with non-object init: ${init}");if(!A.isString(e.tagName))throw TypeError(`Missing valid tagName (expected a string).`);if(!e.render||typeof e.render==`string`)throw Error(`Failed to define element '${e.tagName}': render is not a function`);let t={...WM,...e.options},n=YM(e.tagName,e.events),r=XM(e.hostClasses);e.hostClasses&&eN(e.tagName,e.hostClasses),e.cssVars&&eN(e.tagName,e.cssVars);let i=e.cssVars?Fd(e.cssVars):{},a=tN(e.tagName,`slot`,e.slotNames),o=tN(e.tagName,`test-id`,e.testIds),s=typeof e.styles==`function`?e.styles(nN({hostClassNames:r,cssVars:i})):e.styles||z``,c=e.render;function l(...[e]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:u,inputs:e}}let u=class extends kM{static elementOptions=t;static tagName=e.tagName;static styles=s;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return iN({element:this,eventsMap:n,cssVars:i,slotNamesMap:a,testIdsMap:o})}static assign=l;static events=n;static render=c;static hostClasses=r;static cssVars=i;static init=e;static slotNames=a;static testIds=o;get InstanceType(){throw Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;let t=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;let n=e.state(t);if(n instanceof Promise)throw TypeError(`init cannot be asynchronous`);De(n).forEach(e=>{ZM(this,e),this.instanceState[e]=n[e]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(t)instanceof Promise))throw TypeError(`init cannot be asynchronous`);let n=c(t);if(n instanceof Promise)throw TypeError(`render cannot be asynchronous`);return rN({host:t.host,hostClassesInit:e.hostClasses,hostClassNames:r,state:t.state,inputs:t.inputs}),this._lastRenderedProps={inputs:{...t.inputs},state:{...t.state}},n}catch(n){let r=Ie(n,`Failed to render ${e.tagName}`);return console.error(r),this._lastRenderError=r,t.errorHandler?.(r),Ne(r)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;let t=this.createRenderParams();if(e.init(t)instanceof Promise)throw TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(e=>{A.hasKey(e,`destroy`)&&A.isFunction(e.destroy)&&e.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup&&this._stateCalled){let t=this.createRenderParams();if(e.cleanup(t)instanceof Promise)throw TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(e){GM(this,e)}observablePropertyListenerMap={};instanceInputs=$M(this,!1);instanceState=$M(this,!t.allowPolymorphicState);constructor(){super(),this.definition=u}};return Object.defineProperties(u,{name:{value:Rl(e.tagName,{firstLetterCase:Fl.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,u)),u}var sN=class extends A_{isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}};function cN(e){return new sN(e)}var lN=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},uN=vM(class extends yM{constructor(e){if(super(e),e.type!==_M.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=hM(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,d=0,f=i.length-1,p=0,m=a.length-1;for(;d<=f&&p<=m;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(s[d]===o[p])c[p]=fM(i[d],a[p]),d++,p++;else if(s[f]===o[m])c[m]=fM(i[f],a[m]),f--,m--;else if(s[d]===o[m])c[m]=fM(i[d],a[m]),dM(e,c[m+1],i[d]),d++,m--;else if(s[f]===o[p])c[p]=fM(i[f],a[p]),dM(e,i[d],i[f]),f--,p++;else if(l===void 0&&(l=lN(o,p,m),u=lN(s,d,f)),l.has(s[d]))if(l.has(s[f])){let t=u.get(o[p]),n=t===void 0?null:i[t];if(n===null){let t=dM(e,i[d]);fM(t,a[p]),c[p]=t}else c[p]=fM(n,a[p]),dM(e,i[d],n),i[t]=null;p++}else gM(i[f]),f--;else gM(i[d]),d++;for(;p<=m;){let t=dM(e,c[m+1]);fM(t,a[p]),c[p++]=t}for(;d<=f;){let e=i[d++];e!==null&&gM(e)}return this.ut=o,mM(e,c),fd}});function dN(e,t){return pN(e,t),e.element}function fN(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function pN(e,t){let n=fN(e),r=n?`: in ${n}`:``;if(e.type!==_M.ELEMENT)throw Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw Error(`${t} directive found no element${r}.`)}function mN(e,t){return vM(class extends yM{element;constructor(t){super(t),this.element=Ac.instanceOf(dN(t,e),HTMLElement)}render(...e){return t({params:e,directive:this,element:this.element}),fd}})}var hN=mN(`attributes`,({element:e,params:[t],directive:n})=>{if(!t)return;let r=Gc(n,`allAttributesApplied`,()=>new Set);De(t).forEach(e=>{if(e.toLowerCase()!==e)throw Error(`Cannot assign attribute name with uppercase letters: ${e}`);r.add(e)}),r.forEach(n=>{let r=t[n];r==null||r===!1||r===j?e.removeAttribute(n):r===``||r===!0?e.setAttribute(n,``):e.setAttribute(n,String(r))})});function gN(e){let t=vM(class extends yM{element;constructor(t){super(t),this.element=dN(t,e)}render(t){return this.element.setAttribute(e,t),fd}});return{attributeSelector(t){return`[${e}="${t}"]`},attributeDirective(e){return t(e)},attributeName:e}}function B(e,t){return _N(e,t)}var _N=vM(class extends yM{element;lastListenerMetaData;constructor(e){super(e),this.element=dN(e,`listen`)}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:e=>this.lastListenerMetaData?.callback(e)}}render(e,t){let n=typeof e==`string`?e:e.type;if(typeof n!=`string`)throw TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(n)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),fd}});function vN(e){return B(`keydown`,async t=>{let n=t.code.toLowerCase();(n.includes(`enter`)||n.includes(`return`)||n===`space`)&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}var yN=`onDomCreated`,bN=vM(class extends yM{element;constructor(e){super(e),pN(e,yN)}update(e,[t]){pN(e,yN);let n=e.element;return n!==this.element&&(window.requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),xN=`onDomRendered`,SN=vM(class extends yM{constructor(e){super(e),pN(e,xN)}update(e,[t]){pN(e,xN);let n=e.element;return window.requestAnimationFrame(()=>t(n)),this.render(t)}render(e){}}),CN=`onResize`,wN=vM(class extends yM{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&TN(this.element,this.callback,e)});callback;constructor(e){super(e),pN(e,CN)}update(e,[t]){pN(e,CN),this.callback=t;let n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function TN(e,t,n){let r=n[0];if(!r)throw console.error(n),Error(`Resize observation triggered but the first entry was empty.`);t({target:r.target,contentRect:r.contentRect},e)}function EN(e,t,n,r,i={}){let a=i.useLastResolvedValue?e.lastResolvedValue:e.value;return a instanceof Error?r?r(a):Ne(a):A.isPromiseLike(a)||i.useLastResolvedValue&&a===void 0?t:n?n(a):a}function DN(e,t,n){return OM(e,()=>t,()=>n)}var{attributeDirective:ON,attributeSelector:kN,attributeName:AN}=gN(`data-test-id`),jN=ON;function MN(e){let{assertInputs:t,transformInputs:n}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(e=>e)};return(...e)=>r=>(t(r),aN(...e)(n(r)))}var NN=!1;function PN(e,t){return t?FN(e,t):FN(void 0,e)}var FN=vM(class extends yM{element;constructor(e){super(e),this.element=dN(e,`assign`)}render(e,t){return GM(this.element,t),fd}}),IN={};function LN(e,t){return t.map((t,n)=>{let r=e[n],i=e[n+1];if(r&&i){let{shouldHaveTagNameHere:e}=RN(r,i);if(e&&A.isString(t))return{tagName:t,tagInterpolationKey:Gc(IN,t,()=>({tagName:t}))}}return t})}function RN(e,t){let n=e.trim().endsWith(`<`)&&!!t.match(/^[\s>]/),r=e.trim().endsWith(`</`)&&t.trim().startsWith(`>`);return{isOpeningTag:n,shouldHaveTagNameHere:n||r}}function zN(...[e,t,n]){let r=jM(n)?n.definition:n,{isOpeningTag:i,shouldHaveTagNameHere:a}=RN(e,t),o=MM(r);if(o&&a&&r.tagInterpolationKey)return{replacement:r.tagName,getExtraValues:void 0};if(a&&!o)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:r}),Error(`Got interpolated tag name but found no tag name on the given value: '${r?.tagName||r?.prototype?.constructor?.name||r?.constructor?.name}'`);if(!(!a||!o))return{replacement:r.tagName,getExtraValues(e){let t=jM(e)?e.inputs:void 0;return[i&&t?PN(t):void 0].filter(A.isTruthy)}}}function BN(e){return ml(e,/<\/\s*[^\s><]+\s*>/g).reduce((e,t)=>{let n=Pl(t.replace(/\n/g,` `)).replace(/<\/|>/g,``);return n.includes(`-`)?e.concat(n):e},[])}function VN(e){if(NN){let t=BN(e);t.length&&console.error(`Custom element tags must be interpolated from declarative elements: ${t.join(`, `)}`)}}function HN(e){return VM(e.strings,e.values,zN,VN)}function V(e,...t){let n=LN(e,t),r=dd(e,...n),i=BM(e,n,()=>HN(r));return{...r,strings:i.strings,values:i.values}}function UN(e){if(`templateString`in e)return e.templateString;let{strings:t,values:n}=e;if(!t?.length&&!n?.length)return``;let r=[...n||[],``];return Pl((t??[``]).map((e,t)=>`${e}${WN(e,r[t])}`).join(``))}function WN(e,t){return t._$litType$!=null||t._$litDirective$!=null?UN(t):Array.isArray(t)?t.map(e=>UN(e)).join(``):e.endsWith(`=`)?`"${t}"`:t}function GN(e){return Al(e,(e,t)=>t instanceof g_?Tu(t.toString({format:`hex`})):GN(t))}var KN=`dodgerblue`;function qN(e){return Math.abs(e.contrast(`white`,`APCA`))>Math.abs(e.contrast(`black`,`APCA`))?`white`:`black`}function JN({background:e,foreground:t}){return{background:e??new g_(qN(t)),foreground:t??new g_(qN(e))}}var YN;(function(e){e.Dark=`dark`,e.Light=`light`})(YN||={});function XN(e){return e===`black`?`white`:`black`}var ZN={black:{foregroundFaint1:new g_(`#ccc`),foregroundFaint2:new g_(`#eee`)},white:{foregroundFaint1:new g_(`#ccc`),foregroundFaint2:new g_(`#eee`)}},QN={black:{backgroundFaint1:new g_(`#666`),backgroundFaint2:new g_(`#444`)},white:{backgroundFaint1:new g_(`#ccc`),backgroundFaint2:new g_(`#fafafa`)}};function $N({themeColor:e=KN,themeStyle:t=YN.Light}={}){let n=new g_(e),r=new g_(t===YN.Dark?`black`:`white`),i=qN(r),a=new g_(i);return GN({nav:{hover:JN({background:n.clone().set({"hsl.l":93})}),active:JN({background:n.clone().set({"hsl.l":90})}),selected:JN({background:n.clone().set({"hsl.l":85})})},accent:{icon:n.clone().set({"hsl.l":40})},page:{background:r,...QN[XN(i)],foreground:a,...ZN[i]}})}async function eP(e=1){let t=new ze;function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return n(),t.promise}function tP(e,t){return{element:e,children:nP(e,t??0,0)}}function nP(e,t,n){return rP(e).map(e=>{let r=n+1;return{element:e,children:t&&r>=Math.abs(t)?[]:nP(e,t,r)}})}function rP(e){return[...e.children,...e.shadowRoot?.children??[]]}function iP(e){return e.matches(`:focus`)}function aP(e){if(e instanceof ShadowRoot)return e.host;let t=e.parentNode;if(t)return t instanceof Element?t:aP(t)}function oP(e,t){if(t(e))return e;let n=aP(e);if(n)return oP(n,t)}function sP(e,t,n={}){let r=n.useOriginalTarget?e.target:e.currentTarget;if(!(r instanceof t)){let i=t.name,a=r?.constructor.name,o=n.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${a}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${a}'.`;throw Error(o)}return r}function cP(e){let t=aP(e);return t&&oP(t,e=>globalThis.getComputedStyle(e).overflowY!==`visible`)||document.body}function lP(e){let t=0,n=document.activeElement||void 0;for(;n;){if(e({depth:t,element:n}))return t;n=n.shadowRoot?.activeElement||void 0,n&&++t}return t}function uP({searchQuery:e,searchIn:t}){let n=t.length,r=e.length;if(r>n)return!1;if(r===n)return e===t;let i=t.toLowerCase(),a=e.toLowerCase();outer:for(let e=0,t=0;e<r;e++){let r=a.codePointAt(e);for(;t<n;)if(i.codePointAt(t++)===r)continue outer;return!1}return!0}var dP=el(32);function fP(e){return e.join(dP)}function pP(e){return e.length?[fP(e),...pP(e.slice(0,-1))]:[]}var mP=[`error`,`errors`];function hP(e){return mP.includes(e)}function gP({flattenedNodes:e,searchQuery:t}){let n={};function r(e){Object.values(e.children).map(e=>(r(e),fP(e.fullUrlBreadcrumbs))).forEach(e=>n[e]=!0)}return e.forEach(e=>{let i=e.entry.errors.length&&hP(t),a=fP(e.fullUrlBreadcrumbs);if(uP({searchIn:[e.entry.title,...e.entry.descriptionParagraphs.map(e=>A.isString(e)?e:UN(e))].join(` `).toLowerCase(),searchQuery:t.toLowerCase()})||i||n[a]){let t=pP(e.fullUrlBreadcrumbs);r(e),t.forEach(e=>n[e]=!0)}else n[a]=!1}),e.filter(e=>{let t=n[fP(e.fullUrlBreadcrumbs)];if(!A.isBoolean(t))throw TypeError(`Failed to find '${e.fullUrlBreadcrumbs.join(` > `)}' in includeInSearchResults.`);return t})}var _P=class extends Error{name=`SpaRouterError`},vP=class extends _P{name=`GlobalUrlEventsConsolidationError`},yP=class extends _P{name=`SanitizationDepthMaxed`};bj({paths:[``],search:jj(Mj(void 0,Gj({keys:``,values:[``]}))),hash:jj(Mj(void 0,``))});var bP=bj({basePath:jj(``,{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:jj(1,{alsoUndefined:!0}),disableWarnings:jj(!1,{alsoUndefined:!0}),isPaused:jj(!1,{alsoUndefined:!0})}),xP=`://`;function SP(...e){let t=e.join(`/`),[n,r=``]=t.includes(xP)?t.split(xP):[``,t],i=!1,a=r.replace(/\/{2,}/g,`/`).split(`/`).reduce((e,t,n,r)=>{if(i)return e;let a=r[n+1],o=t,s=a?.startsWith(`?`),c=!t.includes(`?`)&&s,l=a===`?`;if(s||c){i=!0;let e=!1,s=r.slice(n+2).reduce((t,n)=>(n.includes(`#`)&&(e=!0),e?t.concat(n):[t,n].join(`&`)),``);o=[t,a,l?ul({value:s,prefix:`&`}):s].join(``)}return e.concat(o)},[]);return[n,n?xP:``,a.join(`/`)].join(``)}var CP;(function(e){e.Encode=`encode`,e.Decode=`decode`,e.None=`none`})(CP||={});var wP;(function(e){e.Clear=`clear`,e.Replace=`replace`,e.Append=`append`})(wP||={});var TP=bj({encoding:jj(Mj(void 0,Ej(CP))),searchParamStrategy:jj(Mj(void 0,Ej(wP)))});function EP(e,t){return e.map(e=>{if(e!=null)return DP(String(e),t)}).filter(e=>e!=null)}function DP(e,t){return t?.encoding===CP.Decode?decodeURIComponent(e):t?.encoding===CP.Encode?encodeURIComponent(e):e}var OP=bj(Gj({keys:``,values:[``]}));function kP(e,t,n){let r=n?.searchParamStrategy===wP.Clear?{}:Al(e,(e,t)=>Zc(t)),i=Al(t,(e,t)=>{if(n?.searchParamStrategy===wP.Append){let i=r[e],a=A.isArray(i)?i:[i];if(t){let e=A.isArray(t)?t:[t];return EP([...a,...e],n)}else return EP(a,n)}else if(A.isArray(t))return EP(t,n);else if(t)return EP([t],n);else return});return jl({...r,...i},(e,t)=>!!t)}function AP(e,t){return A.isString(e)&&!e.includes(`?`)?{}:(A.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,``).split(`&`).map(e=>{let[t,...n]=Dl(e,`=`);return[t,n.length?n.join(`=`):void 0]}).reduce((e,[n,r])=>{let i=NP({options:t,key:n,value:r}),a=Gc(e,i.key,()=>[]);return r!=null&&a.push(i.value),e},{})}function jP(e){if(e!=null)return A.isArray(e)?[...e]:e===``?[]:[e]}function MP(e,t){let n=Jc(Object.entries(e),([e,n])=>{let r=jP(n);return r?.length?r.map(n=>{let r=NP({options:t,key:e,value:n});return[r.key,r.value].join(`=`)}):[e]},(e,[,t])=>t!=null).flat();return n.length?ll({value:n.join(`&`),prefix:`?`}):``}function NP({options:e,key:t,value:n}){return{key:DP(t,e),value:DP(String(n),e)}}function PP({hash:e,hostname:t,password:n,pathname:r,port:i,protocol:a,search:o,username:s}){return[a?a+`://`:``,s?encodeURIComponent(s)+`:`:``,n?encodeURIComponent(n)+`@`:``,LP({hostname:t,port:i}),IP({hash:e,pathname:r,search:o})].join(``)}function FP({pathname:e}){let t=ul({value:e,prefix:`/`});return t?t.split(`/`):[]}function IP({hash:e,pathname:t,search:n}){return[ll({value:t,prefix:`/`}),n?ll({value:n,prefix:`?`}):``,e?ll({value:e,prefix:`#`}):``].join(``)}function LP({hostname:e,port:t}){return[e,t?`:`+t:``].join(``)}function RP({hostname:e,port:t,protocol:n}){return[n,LP({hostname:e,port:t})].filter(A.isTruthy).join(`://`)}function zP(e,t){let n=A.isString(e)?ul({value:e,prefix:`.`}):e.toString(),r=n.replace(/^[^#]*(?:#|$)/,``),i=r?ll({value:DP(r,t),prefix:`#`}):``,a=n.replace(/#[^#]*$/,``),o=a.replace(/^[^?]*(?:\?|$)/,``),s=o?ll({value:DP(o,t),prefix:`?`}):``,c=a.replace(/\?[^?]*$/,``),l=c.includes(`://`)?c.replace(/:\/\/.*$/,``):``,u=c.replace(/^.*:\/\//,``).replace(/\/\//g,`/`),d=u.replace(/@.*/,``),f=u.replace(/^[^@]*@/,``),[p,...m]=d===f?[]:d.split(`:`).reverse(),h=decodeURIComponent(m.toReversed().join(``).replace(/[/:]/g,``)||``),g=decodeURIComponent(p?.replace(/[/:]/g,``)||``),ee=El(f.replace(/\/.*/,``),`:`,{caseSensitive:!0}).toReversed(),_=ee[0]?.endsWith(`]`)?``:ee[1]===`:`&&ee[0]||``,te=f.replace(RegExp(`:${_}($|/)`),`$1`).replace(/\/.*/,``),ne=DP(f.replace(/^[^/]*(\/|$)/,`$1`).replace(/^[^/]*(?:\/|$)/,`/`),t),re=LP({hostname:te,port:_}),ie=RP({hostname:te,port:_,protocol:l}),ae=PP({hash:i,hostname:te,password:g,pathname:ne,port:_,protocol:l,search:s,username:h}),oe=AP(s),se=FP({pathname:ne});return{fullPath:IP({hash:i,pathname:ne,search:s}),hash:i,host:re,hostname:te,href:ae,origin:ie,password:g,pathname:ne,paths:se,port:_,protocol:l,search:s,searchParams:oe,username:h}}bj({hash:jj(Mj(void 0,``)),search:jj(Mj(void 0,``,Gj({keys:``,values:Mj(null,void 0,``,-1,!1,0n,[null,void 0,``,-1,!1,0n])}))),hostname:jj(Mj(void 0,``)),pathname:jj(Mj(void 0,``)),paths:jj(Mj(void 0,[``])),protocol:jj(Mj(void 0,``)),username:jj(Mj(void 0,``)),password:jj(Mj(void 0,``)),port:jj(Mj(void 0,``,-1))});function BP(e,t,n){let r=!!n,i=t==null||zj(t,TP,{allowExtraKeys:!1}),a=i?zP(``):A.instanceOf(e,URL)||A.isString(e)?zP(e):e,o=i?e:t,s=A.isString(o)&&o.startsWith(`.`),c=A.isString(o)||A.instanceOf(o,URL)?jl(zP(o),(e,t)=>A.isTruthy(t)):o,l=r?n:i?t:void 0,u=Al(a,(e,t)=>{if(!A.hasKey(c,e))return t;let n=c[e];return A.isNumber(n)?String(n):A.isString(n)?e===`hash`&&n?ll({value:n,prefix:`#`}):e===`pathname`?ll({value:n,prefix:`/`}):n:t});A.hasKey(c,`paths`)&&c.paths&&(u.pathname=SP(s?a.pathname:``,...c.paths));let d=A.isString(c.search)?AP(ll({value:c.search,prefix:`?`})):rl(c.search||{}),f=kP(u.searchParams,d,{...l,encoding:CP.None}),p=MP(f,l);return{...u,searchParams:f,search:p,paths:FP(u),fullPath:IP(u),host:LP(u),origin:RP(u),href:PP({...u,search:p})}}({...bj({protocol:``,username:``,password:``,host:``,hostname:``,port:``,origin:``,pathname:`/`,paths:[``],search:``,searchParams:OP,hash:``,fullPath:`/`,href:`/`}).default});var VP=0;function HP(e){return!(e.type!==`click`&&e.type!==`mousedown`||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==VP)}var UP=`locationchange`,WP=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;var GP=WP?.pushState;function KP(...e){if(!GP)return;let t=GP.apply(WP,e);return globalThis.dispatchEvent(new Event(UP)),t}var qP=WP?.replaceState;function JP(...e){if(!qP)return;let t=qP.apply(WP,e);return globalThis.dispatchEvent(new Event(UP)),t}function YP(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!WP)){if(WP.pushState===KP)throw new vP(`The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?`);if(WP.replaceState===JP)throw new vP(`The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?`);globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,WP.pushState=KP,WP.replaceState=JP,globalThis.addEventListener(`popstate`,()=>{globalThis.dispatchEvent(new Event(UP))})}}function XP(e,t){let n=zP(e),r=ul({value:ul({value:n.pathname,prefix:ll({value:t||``,prefix:`/`})}),prefix:`/`});return{paths:r?r.split(`/`):[],search:Object.keys(n.searchParams).length?n.searchParams:void 0,hash:n.hash?ul({value:n.hash,prefix:`#`}):void 0}}var ZP=class{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(e){Bj(e,bP),this.params={...e};let t=this.readCurrentRoute();this.innerObservable=new sM({defaultValue:t,equalityCheck:()=>!1}),YP(),this.removeGlobalListener=Gl(globalThis,UP,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new yP(`Looping route sanitization detected; aborting window URL change listener.`);let t=XP(globalThis.location.href,this.params.basePath),n=e.sanitizeRoute(t);A.jsonEquals(t,n)?(this.sanitizationDepth=0,this.innerObservable.setValue(n)):(this.sanitizationDepth++,this.setRoute(n,{replace:!0}),e.disableWarnings||console.warn(`Route sanitized.`,{from:t,to:n}))}),this.setRoute(t,{replace:!0})}routeIncludesBasePath(e){return!e.paths||!this.params.basePath?!1:SP(...e.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(XP(globalThis.location.href,this.params.basePath))}sanitizeRoute(e){return this.params.sanitizeRoute(e)}createRouteUrl(e){let t={...XP(globalThis.location.href,this.params.basePath),...e},n=this.sanitizeRoute(t),r=this.routeIncludesBasePath(XP(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return BP(globalThis.location.href,{paths:r.paths,search:r.search,hash:r.hash?ll({value:r.hash,prefix:`#`}):``},{searchParamStrategy:wP.Clear}).href}setRoute(e,t={}){let{fullPath:n}=zP(this.createRouteUrl(e));return this.params.isPaused||!t.force&&A.jsonEquals(zP(globalThis.location.href).fullPath,n)?!1:t.replace?(globalThis.history.replaceState(void 0,``,n),!0):(globalThis.history.pushState(void 0,``,n),!0)}setRouteOnDirectNavigation(e,t){return HP(t)?(t.preventDefault(),this.setRoute(e)):!1}listen(e,t){let n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new _P(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(e,t),()=>this.removeListener(t)}removeListener(e){return this.innerObservable.removeListener(e)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}};function QP(e){return new ZP({basePath:e,sanitizeRoute(e){return{paths:$P(e.paths),hash:void 0,search:void 0}}})}function $P(e){let t=e[0];if(!A.isEnumValue(t,gu))return vu.paths;if(t===gu.Book)return[gu.Book,...e.slice(1)];if(t===gu.Search)return e[1]?[t,e[1]]:[gu.Book,...e.slice(1)];throw Error(`Route path not handled for sanitization: ${e.join(`/`)}`)}var eF=qM()(`element-book-change-route`),H=Fd({"vira-icon-stroke-color":`currentColor`,"vira-icon-fill-color":`none`,"vira-icon-stroke-width":`1.5px`});function U({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}var tF=U({name:`Check24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `});function nF(e){return A.isPrimitive(e)||e instanceof wu?String(e):e.default}function rF(e,t,n,r){let i=`${n.prefix}-default-fg`,a=`${n.prefix}-default-bg`;if(A.isPrimitive(t)||t instanceof wu)return t;if(`refDefaultBackground`in t)return`var(--${a}, ${nF(n.background)})`;if(`refDefaultForeground`in t)return`var(--${i}, ${nF(n.foreground)})`;if(`refBackground`in t||`refForeground`in t){let o=A.hasKey(t,`refBackground`)?`refBackground`:A.hasKey(t,`refForeground`)?`refForeground`:void 0,s=o&&A.hasKey(t,o)?t[o]:void 0,c=o===`refBackground`?`background`:`foreground`,l=s&&r[s];if(!l)throw Error(`Color theme ${o} reference '${s}' does not exist. (Referenced from '${e}'.)`);let u=l[c]||(c===`foreground`?rF(i,n.foreground,n,r):rF(a,n.background,n,r));return`var(--${s}-${c===`foreground`?`fg`:`bg`}, ${rF(s,u,n,r)})`}else return t.value}var iF=`theme-default`;function aF(e,t){try{if(`theme-default`in t)throw Error(`Cannot define theme color by name '${iF}', it is used internally.`);let n=`${e.prefix}-default-fg`,r=`${e.prefix}-default-bg`,i=`${e.prefix}-default-inverse-fg`,a=`${e.prefix}-default-inverse-bg`,o=Fd({[n]:rF(n,e.foreground,e,t),[r]:rF(r,e.background,e,t),[i]:rF(i,e.background,e,t),[a]:rF(a,e.foreground,e,t)}),s=Fd(Kc(t).reduce((i,[a,s])=>{let c=oF(a),l=s.foreground?rF([a,`foreground`].join(` `),s.foreground,e,t):`var(${o[n].name}, ${o[n].default})`,u=s.background?rF([a,`background`].join(` `),s.background,e,t):`var(${o[r].name}, ${o[r].default})`;return i[c.foreground]=l,i[c.background]=u,i[c.foregroundInverse]=`var(--${c.background}, ${u})`,i[c.backgroundInverse]=`var(--${c.foreground}, ${l})`,i},{})),c={},l={};Kc(t).forEach(([e,t])=>{Fc.isString(e);let n=oF(e),r=s[n.foreground],i=s[n.background],a=s[n.foregroundInverse],o=s[n.backgroundInverse];Fc.isDefined(r),Fc.isDefined(i),Fc.isDefined(a),Fc.isDefined(o),c[e]={foreground:r,background:i,init:t,name:e},l[e]={foreground:a,background:o,init:t,name:e}});let u={foreground:o[n],background:o[r],init:e,name:iF},d={...u,foreground:o[i],background:o[a]};return{colors:{[iF]:u,...c},inverse:{[iF]:d,...l},init:{colors:t,default:e},prefix:e.prefix}}catch(e){throw globalThis.setTimeout(()=>Cl.error(e)),e}}function oF(e){return{foreground:[e,`fg`].join(`-`),background:[e,`bg`].join(`-`),foregroundInverse:[e,`inverse`,`fg`].join(`-`),backgroundInverse:[e,`inverse`,`bg`].join(`-`)}}var W=Fd({"vira-red-100":`#FFF6F5`,"vira-red-150":`#FFEDEB`,"vira-red-200":`#FFE4E1`,"vira-red-250":`#FFDCD8`,"vira-red-300":`#FFD1CB`,"vira-red-350":`#FFC1B8`,"vira-red-400":`#FFA79B`,"vira-red-450":`#FF8274`,"vira-red-500":`#FF564A`,"vira-red-550":`#F43A32`,"vira-red-600":`#E2322C`,"vira-red-650":`#D02C27`,"vira-red-700":`#BB2520`,"vira-red-750":`#9E231D`,"vira-red-800":`#82211A`,"vira-red-850":`#701A13`,"vira-red-900":`#611710`,"vira-red-950":`#52140D`,"vira-red-1000":`#43130D`,"vira-yellow-100":`#FEF9E4`,"vira-yellow-150":`#FDF2D1`,"vira-yellow-200":`#FDEABF`,"vira-yellow-250":`#FEE2AD`,"vira-yellow-300":`#FDD89B`,"vira-yellow-350":`#FAC986`,"vira-yellow-400":`#EFB669`,"vira-yellow-450":`#E29D34`,"vira-yellow-500":`#CE8800`,"vira-yellow-550":`#BB7B00`,"vira-yellow-600":`#AC7100`,"vira-yellow-650":`#9E6800`,"vira-yellow-700":`#8C5C00`,"vira-yellow-750":`#794D00`,"vira-yellow-800":`#683E00`,"vira-yellow-850":`#5B3301`,"vira-yellow-900":`#502A05`,"vira-yellow-950":`#442308`,"vira-yellow-1000":`#381D0B`,"vira-green-100":`#EBFFEE`,"vira-green-150":`#DDFBE2`,"vira-green-200":`#CDF8D6`,"vira-green-250":`#BFF5CC`,"vira-green-300":`#AFF0C0`,"vira-green-350":`#9AE8B1`,"vira-green-400":`#7FD99C`,"vira-green-450":`#52C87F`,"vira-green-500":`#1BB565`,"vira-green-550":`#04A559`,"vira-green-600":`#009852`,"vira-green-650":`#008C4A`,"vira-green-700":`#007C41`,"vira-green-750":`#016A38`,"vira-green-800":`#095831`,"vira-green-850":`#024B29`,"vira-green-900":`#014024`,"vira-green-950":`#02371F`,"vira-green-1000":`#062D1B`,"vira-teal-100":`#E8FEFD`,"vira-teal-150":`#D9FAF8`,"vira-teal-200":`#C9F6F3`,"vira-teal-250":`#BAF2ED`,"vira-teal-300":`#A9EDE6`,"vira-teal-350":`#95E4DB`,"vira-teal-400":`#79D5CA`,"vira-teal-450":`#47C3B7`,"vira-teal-500":`#00B0A4`,"vira-teal-550":`#00A094`,"vira-teal-600":`#009389`,"vira-teal-650":`#00877D`,"vira-teal-700":`#00786F`,"vira-teal-750":`#00665F`,"vira-teal-800":`#01554F`,"vira-teal-850":`#004843`,"vira-teal-900":`#003E3A`,"vira-teal-950":`#033531`,"vira-teal-1000":`#072B29`,"vira-blue-100":`#F5F9FF`,"vira-blue-150":`#EAF3FF`,"vira-blue-200":`#E0EDFF`,"vira-blue-250":`#D6E7FF`,"vira-blue-300":`#CBDFFF`,"vira-blue-350":`#B9D4FF`,"vira-blue-400":`#9EC3FF`,"vira-blue-450":`#7AADFF`,"vira-blue-500":`#5697FF`,"vira-blue-550":`#4988ED`,"vira-blue-600":`#427DDC`,"vira-blue-650":`#3B72CA`,"vira-blue-700":`#3365B6`,"vira-blue-750":`#2D569A`,"vira-blue-800":`#27487E`,"vira-blue-850":`#203D6C`,"vira-blue-900":`#1B345D`,"vira-blue-950":`#172C4F`,"vira-blue-1000":`#142540`,"vira-accent-100":`#F5F9FF`,"vira-accent-150":`#EAF3FF`,"vira-accent-200":`#E0EDFF`,"vira-accent-250":`#D6E7FF`,"vira-accent-300":`#CBDFFF`,"vira-accent-350":`#B9D4FF`,"vira-accent-400":`#9EC3FF`,"vira-accent-450":`#7AADFF`,"vira-accent-500":`#5697FF`,"vira-accent-550":`#4988ED`,"vira-accent-600":`#427DDC`,"vira-accent-650":`#3B72CA`,"vira-accent-700":`#3365B6`,"vira-accent-750":`#2D569A`,"vira-accent-800":`#27487E`,"vira-accent-850":`#203D6C`,"vira-accent-900":`#1B345D`,"vira-accent-950":`#172C4F`,"vira-accent-1000":`#142540`,"vira-purple-100":`#F9F7FF`,"vira-purple-150":`#F3EFFF`,"vira-purple-200":`#EDE8FF`,"vira-purple-250":`#E6E1FF`,"vira-purple-300":`#DED8FF`,"vira-purple-350":`#D2CBFF`,"vira-purple-400":`#C1B7FF`,"vira-purple-450":`#AD9BFF`,"vira-purple-500":`#9B80FF`,"vira-purple-550":`#8D6EF4`,"vira-purple-600":`#8265E3`,"vira-purple-650":`#775BD1`,"vira-purple-700":`#6A50BB`,"vira-purple-750":`#5A459E`,"vira-purple-800":`#4A3B82`,"vira-purple-850":`#3E3170`,"vira-purple-900":`#352A61`,"vira-purple-950":`#2D2452`,"vira-purple-1000":`#251F43`,"vira-pink-100":`#FEF5FF`,"vira-pink-150":`#FFEAFF`,"vira-pink-200":`#FFE0FC`,"vira-pink-250":`#FFD7F8`,"vira-pink-300":`#FFCBF2`,"vira-pink-350":`#FFB9E9`,"vira-pink-400":`#FF9BDF`,"vira-pink-450":`#FF6DD6`,"vira-pink-500":`#F04AC5`,"vira-pink-550":`#DD3EB4`,"vira-pink-600":`#CC37A7`,"vira-pink-650":`#BC3099`,"vira-pink-700":`#A82988`,"vira-pink-750":`#8F2674`,"vira-pink-800":`#752361`,"vira-pink-850":`#641C53`,"vira-pink-900":`#561848`,"vira-pink-950":`#49153E`,"vira-pink-1000":`#3B1333`,"vira-grey-100":`#F9F9F9`,"vira-grey-150":`#F2F2F2`,"vira-grey-200":`#EBEBEB`,"vira-grey-250":`#E5E5E5`,"vira-grey-300":`#DEDEDE`,"vira-grey-350":`#D2D2D2`,"vira-grey-400":`#C2C2C2`,"vira-grey-450":`#ADADAD`,"vira-grey-500":`#999999`,"vira-grey-550":`#8A8A8A`,"vira-grey-600":`#7F7F7F`,"vira-grey-650":`#747474`,"vira-grey-700":`#676767`,"vira-grey-750":`#585858`,"vira-grey-800":`#494949`,"vira-grey-850":`#3E3E3E`,"vira-grey-900":`#353535`,"vira-grey-950":`#2D2D2D`,"vira-grey-1000":`#252525`});function sF({originalTheme:e,layerKey:t,themeColor:n,override:r,overrideValues:i}){let a=r?.[t];a&&(i[String(n[t].name)]=String(rF(t,a,e.init.default,e.init.colors)))}function cF(e,t,{defaultOverride:n,colorOverrides:r}){let i={};n&&De(n).forEach(t=>{sF({originalTheme:e,layerKey:t,override:n,themeColor:e.colors[iF],overrideValues:i})});let a={};r&&Kc(r).forEach(([t,n])=>{let r=e.colors[t];if(!r)throw Error(`Override color name '${t}' does not exist in the theme being overridden.`);sF({originalTheme:e,layerKey:`foreground`,override:n,themeColor:r,overrideValues:a}),sF({originalTheme:e,layerKey:`background`,override:n,themeColor:r,overrideValues:a})});let o=Al(e.init.colors,(e,t)=>{let n=r?.[e];return{...t,...n}}),s=aF({...e.init.default,...n},o);return{name:t,overrides:{...i,...a},originalTheme:e,asTheme:s}}var G=aF({foreground:`black`,background:`white`,prefix:`vira`},{"vira-red-foreground-small-body":{foreground:W[`vira-red-1000`]},"vira-red-foreground-body":{foreground:W[`vira-red-750`]},"vira-red-foreground-non-body":{foreground:W[`vira-red-650`]},"vira-red-foreground-header":{foreground:W[`vira-red-500`]},"vira-red-foreground-placeholder":{foreground:W[`vira-red-400`]},"vira-red-foreground-decoration":{foreground:W[`vira-red-350`]},"vira-red-foreground-invisible":{foreground:W[`vira-red-250`]},"vira-red-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-red-1000`]},"vira-red-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-red-700`]},"vira-red-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-red-600`]},"vira-red-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-red-450`]},"vira-red-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-red-400`]},"vira-red-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-red-350`]},"vira-red-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-red-200`]},"vira-red-behind-fg-small-body":{background:W[`vira-red-250`]},"vira-red-behind-fg-body":{background:W[`vira-red-350`]},"vira-red-behind-fg-non-body":{background:W[`vira-red-400`]},"vira-red-behind-fg-header":{background:W[`vira-red-500`]},"vira-red-behind-fg-placeholder":{background:W[`vira-red-650`]},"vira-red-behind-fg-decoration":{background:W[`vira-red-750`]},"vira-red-behind-fg-invisible":{background:W[`vira-red-1000`]},"vira-red-on-self-small-body":{foreground:W[`vira-red-850`],background:W[`vira-red-100`]},"vira-red-on-self-body":{foreground:W[`vira-red-850`],background:W[`vira-red-250`]},"vira-red-on-self-non-body":{foreground:W[`vira-red-850`],background:W[`vira-red-350`]},"vira-red-on-self-header":{foreground:W[`vira-red-850`],background:W[`vira-red-450`]},"vira-red-on-self-placeholder":{foreground:W[`vira-red-850`],background:W[`vira-red-500`]},"vira-red-on-self-decoration":{foreground:W[`vira-red-850`],background:W[`vira-red-650`]},"vira-red-on-self-invisible":{foreground:W[`vira-red-850`],background:W[`vira-red-1000`]},"vira-yellow-foreground-small-body":{foreground:W[`vira-yellow-1000`]},"vira-yellow-foreground-body":{foreground:W[`vira-yellow-750`]},"vira-yellow-foreground-non-body":{foreground:W[`vira-yellow-650`]},"vira-yellow-foreground-header":{foreground:W[`vira-yellow-500`]},"vira-yellow-foreground-placeholder":{foreground:W[`vira-yellow-400`]},"vira-yellow-foreground-decoration":{foreground:W[`vira-yellow-350`]},"vira-yellow-foreground-invisible":{foreground:W[`vira-yellow-250`]},"vira-yellow-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-yellow-1000`]},"vira-yellow-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-yellow-700`]},"vira-yellow-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-yellow-600`]},"vira-yellow-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-yellow-450`]},"vira-yellow-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-yellow-400`]},"vira-yellow-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-yellow-350`]},"vira-yellow-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-yellow-250`]},"vira-yellow-behind-fg-small-body":{background:W[`vira-yellow-250`]},"vira-yellow-behind-fg-body":{background:W[`vira-yellow-350`]},"vira-yellow-behind-fg-non-body":{background:W[`vira-yellow-400`]},"vira-yellow-behind-fg-header":{background:W[`vira-yellow-500`]},"vira-yellow-behind-fg-placeholder":{background:W[`vira-yellow-650`]},"vira-yellow-behind-fg-decoration":{background:W[`vira-yellow-750`]},"vira-yellow-behind-fg-invisible":{background:W[`vira-yellow-1000`]},"vira-yellow-on-self-small-body":{foreground:W[`vira-yellow-850`],background:W[`vira-yellow-100`]},"vira-yellow-on-self-body":{foreground:W[`vira-yellow-850`],background:W[`vira-yellow-300`]},"vira-yellow-on-self-non-body":{foreground:W[`vira-yellow-850`],background:W[`vira-yellow-350`]},"vira-yellow-on-self-header":{foreground:W[`vira-yellow-850`],background:W[`vira-yellow-450`]},"vira-yellow-on-self-placeholder":{foreground:W[`vira-yellow-850`],background:W[`vira-yellow-550`]},"vira-yellow-on-self-decoration":{foreground:W[`vira-yellow-850`],background:W[`vira-yellow-650`]},"vira-yellow-on-self-invisible":{foreground:W[`vira-yellow-850`],background:W[`vira-yellow-1000`]},"vira-green-foreground-small-body":{foreground:W[`vira-green-1000`]},"vira-green-foreground-body":{foreground:W[`vira-green-800`]},"vira-green-foreground-non-body":{foreground:W[`vira-green-650`]},"vira-green-foreground-header":{foreground:W[`vira-green-550`]},"vira-green-foreground-placeholder":{foreground:W[`vira-green-450`]},"vira-green-foreground-decoration":{foreground:W[`vira-green-350`]},"vira-green-foreground-invisible":{foreground:W[`vira-green-250`]},"vira-green-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-green-1000`]},"vira-green-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-green-750`]},"vira-green-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-green-650`]},"vira-green-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-green-500`]},"vira-green-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-green-400`]},"vira-green-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-green-350`]},"vira-green-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-green-250`]},"vira-green-behind-fg-small-body":{background:W[`vira-green-250`]},"vira-green-behind-fg-body":{background:W[`vira-green-350`]},"vira-green-behind-fg-non-body":{background:W[`vira-green-450`]},"vira-green-behind-fg-header":{background:W[`vira-green-550`]},"vira-green-behind-fg-placeholder":{background:W[`vira-green-650`]},"vira-green-behind-fg-decoration":{background:W[`vira-green-800`]},"vira-green-behind-fg-invisible":{background:W[`vira-green-1000`]},"vira-green-on-self-small-body":{foreground:W[`vira-green-850`],background:W[`vira-green-100`]},"vira-green-on-self-body":{foreground:W[`vira-green-850`],background:W[`vira-green-300`]},"vira-green-on-self-non-body":{foreground:W[`vira-green-850`],background:W[`vira-green-400`]},"vira-green-on-self-header":{foreground:W[`vira-green-850`],background:W[`vira-green-450`]},"vira-green-on-self-placeholder":{foreground:W[`vira-green-850`],background:W[`vira-green-550`]},"vira-green-on-self-decoration":{foreground:W[`vira-green-850`],background:W[`vira-green-700`]},"vira-green-on-self-invisible":{foreground:W[`vira-green-850`],background:W[`vira-green-1000`]},"vira-teal-foreground-small-body":{foreground:W[`vira-teal-1000`]},"vira-teal-foreground-body":{foreground:W[`vira-teal-800`]},"vira-teal-foreground-non-body":{foreground:W[`vira-teal-650`]},"vira-teal-foreground-header":{foreground:W[`vira-teal-550`]},"vira-teal-foreground-placeholder":{foreground:W[`vira-teal-450`]},"vira-teal-foreground-decoration":{foreground:W[`vira-teal-350`]},"vira-teal-foreground-invisible":{foreground:W[`vira-teal-250`]},"vira-teal-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-teal-1000`]},"vira-teal-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-teal-750`]},"vira-teal-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-teal-600`]},"vira-teal-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-teal-500`]},"vira-teal-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-teal-400`]},"vira-teal-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-teal-350`]},"vira-teal-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-teal-250`]},"vira-teal-behind-fg-small-body":{background:W[`vira-teal-250`]},"vira-teal-behind-fg-body":{background:W[`vira-teal-350`]},"vira-teal-behind-fg-non-body":{background:W[`vira-teal-450`]},"vira-teal-behind-fg-header":{background:W[`vira-teal-500`]},"vira-teal-behind-fg-placeholder":{background:W[`vira-teal-650`]},"vira-teal-behind-fg-decoration":{background:W[`vira-teal-750`]},"vira-teal-behind-fg-invisible":{background:W[`vira-teal-1000`]},"vira-teal-on-self-small-body":{foreground:W[`vira-teal-850`],background:W[`vira-teal-100`]},"vira-teal-on-self-body":{foreground:W[`vira-teal-850`],background:W[`vira-teal-300`]},"vira-teal-on-self-non-body":{foreground:W[`vira-teal-850`],background:W[`vira-teal-400`]},"vira-teal-on-self-header":{foreground:W[`vira-teal-850`],background:W[`vira-teal-450`]},"vira-teal-on-self-placeholder":{foreground:W[`vira-teal-850`],background:W[`vira-teal-550`]},"vira-teal-on-self-decoration":{foreground:W[`vira-teal-850`],background:W[`vira-teal-700`]},"vira-teal-on-self-invisible":{foreground:W[`vira-teal-850`],background:W[`vira-teal-1000`]},"vira-blue-foreground-small-body":{foreground:W[`vira-blue-1000`]},"vira-blue-foreground-body":{foreground:W[`vira-blue-750`]},"vira-blue-foreground-non-body":{foreground:W[`vira-blue-650`]},"vira-blue-foreground-header":{foreground:W[`vira-blue-500`]},"vira-blue-foreground-placeholder":{foreground:W[`vira-blue-450`]},"vira-blue-foreground-decoration":{foreground:W[`vira-blue-350`]},"vira-blue-foreground-invisible":{foreground:W[`vira-blue-250`]},"vira-blue-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-blue-1000`]},"vira-blue-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-blue-750`]},"vira-blue-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-blue-600`]},"vira-blue-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-blue-450`]},"vira-blue-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-blue-400`]},"vira-blue-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-blue-350`]},"vira-blue-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-blue-250`]},"vira-blue-behind-fg-small-body":{background:W[`vira-blue-250`]},"vira-blue-behind-fg-body":{background:W[`vira-blue-350`]},"vira-blue-behind-fg-non-body":{background:W[`vira-blue-400`]},"vira-blue-behind-fg-header":{background:W[`vira-blue-500`]},"vira-blue-behind-fg-placeholder":{background:W[`vira-blue-650`]},"vira-blue-behind-fg-decoration":{background:W[`vira-blue-750`]},"vira-blue-behind-fg-invisible":{background:W[`vira-blue-1000`]},"vira-blue-on-self-small-body":{foreground:W[`vira-blue-850`],background:W[`vira-blue-100`]},"vira-blue-on-self-body":{foreground:W[`vira-blue-850`],background:W[`vira-blue-300`]},"vira-blue-on-self-non-body":{foreground:W[`vira-blue-850`],background:W[`vira-blue-350`]},"vira-blue-on-self-header":{foreground:W[`vira-blue-850`],background:W[`vira-blue-450`]},"vira-blue-on-self-placeholder":{foreground:W[`vira-blue-850`],background:W[`vira-blue-550`]},"vira-blue-on-self-decoration":{foreground:W[`vira-blue-850`],background:W[`vira-blue-650`]},"vira-blue-on-self-invisible":{foreground:W[`vira-blue-850`],background:W[`vira-blue-1000`]},"vira-accent-foreground-small-body":{foreground:W[`vira-accent-1000`]},"vira-accent-foreground-body":{foreground:W[`vira-accent-750`]},"vira-accent-foreground-non-body":{foreground:W[`vira-accent-650`]},"vira-accent-foreground-header":{foreground:W[`vira-accent-500`]},"vira-accent-foreground-placeholder":{foreground:W[`vira-accent-450`]},"vira-accent-foreground-decoration":{foreground:W[`vira-accent-350`]},"vira-accent-foreground-invisible":{foreground:W[`vira-accent-250`]},"vira-accent-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-accent-1000`]},"vira-accent-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-accent-750`]},"vira-accent-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-accent-600`]},"vira-accent-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-accent-450`]},"vira-accent-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-accent-400`]},"vira-accent-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-accent-350`]},"vira-accent-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-accent-250`]},"vira-accent-behind-fg-small-body":{background:W[`vira-accent-250`]},"vira-accent-behind-fg-body":{background:W[`vira-accent-350`]},"vira-accent-behind-fg-non-body":{background:W[`vira-accent-400`]},"vira-accent-behind-fg-header":{background:W[`vira-accent-500`]},"vira-accent-behind-fg-placeholder":{background:W[`vira-accent-650`]},"vira-accent-behind-fg-decoration":{background:W[`vira-accent-750`]},"vira-accent-behind-fg-invisible":{background:W[`vira-accent-1000`]},"vira-accent-on-self-small-body":{foreground:W[`vira-accent-850`],background:W[`vira-accent-100`]},"vira-accent-on-self-body":{foreground:W[`vira-accent-850`],background:W[`vira-accent-300`]},"vira-accent-on-self-non-body":{foreground:W[`vira-accent-850`],background:W[`vira-accent-350`]},"vira-accent-on-self-header":{foreground:W[`vira-accent-850`],background:W[`vira-accent-450`]},"vira-accent-on-self-placeholder":{foreground:W[`vira-accent-850`],background:W[`vira-accent-550`]},"vira-accent-on-self-decoration":{foreground:W[`vira-accent-850`],background:W[`vira-accent-650`]},"vira-accent-on-self-invisible":{foreground:W[`vira-accent-850`],background:W[`vira-accent-1000`]},"vira-purple-foreground-small-body":{foreground:W[`vira-purple-1000`]},"vira-purple-foreground-body":{foreground:W[`vira-purple-750`]},"vira-purple-foreground-non-body":{foreground:W[`vira-purple-650`]},"vira-purple-foreground-header":{foreground:W[`vira-purple-500`]},"vira-purple-foreground-placeholder":{foreground:W[`vira-purple-400`]},"vira-purple-foreground-decoration":{foreground:W[`vira-purple-350`]},"vira-purple-foreground-invisible":{foreground:W[`vira-purple-250`]},"vira-purple-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-purple-1000`]},"vira-purple-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-purple-700`]},"vira-purple-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-purple-600`]},"vira-purple-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-purple-450`]},"vira-purple-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-purple-400`]},"vira-purple-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-purple-350`]},"vira-purple-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-purple-200`]},"vira-purple-behind-fg-small-body":{background:W[`vira-purple-250`]},"vira-purple-behind-fg-body":{background:W[`vira-purple-350`]},"vira-purple-behind-fg-non-body":{background:W[`vira-purple-400`]},"vira-purple-behind-fg-header":{background:W[`vira-purple-500`]},"vira-purple-behind-fg-placeholder":{background:W[`vira-purple-600`]},"vira-purple-behind-fg-decoration":{background:W[`vira-purple-750`]},"vira-purple-behind-fg-invisible":{background:W[`vira-purple-1000`]},"vira-purple-on-self-small-body":{foreground:W[`vira-purple-850`],background:W[`vira-purple-100`]},"vira-purple-on-self-body":{foreground:W[`vira-purple-850`],background:W[`vira-purple-300`]},"vira-purple-on-self-non-body":{foreground:W[`vira-purple-850`],background:W[`vira-purple-350`]},"vira-purple-on-self-header":{foreground:W[`vira-purple-850`],background:W[`vira-purple-450`]},"vira-purple-on-self-placeholder":{foreground:W[`vira-purple-850`],background:W[`vira-purple-500`]},"vira-purple-on-self-decoration":{foreground:W[`vira-purple-850`],background:W[`vira-purple-650`]},"vira-purple-on-self-invisible":{foreground:W[`vira-purple-850`],background:W[`vira-purple-1000`]},"vira-pink-foreground-small-body":{foreground:W[`vira-pink-1000`]},"vira-pink-foreground-body":{foreground:W[`vira-pink-750`]},"vira-pink-foreground-non-body":{foreground:W[`vira-pink-650`]},"vira-pink-foreground-header":{foreground:W[`vira-pink-500`]},"vira-pink-foreground-placeholder":{foreground:W[`vira-pink-400`]},"vira-pink-foreground-decoration":{foreground:W[`vira-pink-350`]},"vira-pink-foreground-invisible":{foreground:W[`vira-pink-250`]},"vira-pink-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-pink-1000`]},"vira-pink-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-pink-700`]},"vira-pink-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-pink-550`]},"vira-pink-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-pink-450`]},"vira-pink-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-pink-400`]},"vira-pink-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-pink-350`]},"vira-pink-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-pink-200`]},"vira-pink-behind-fg-small-body":{background:W[`vira-pink-200`]},"vira-pink-behind-fg-body":{background:W[`vira-pink-350`]},"vira-pink-behind-fg-non-body":{background:W[`vira-pink-400`]},"vira-pink-behind-fg-header":{background:W[`vira-pink-500`]},"vira-pink-behind-fg-placeholder":{background:W[`vira-pink-600`]},"vira-pink-behind-fg-decoration":{background:W[`vira-pink-750`]},"vira-pink-behind-fg-invisible":{background:W[`vira-pink-1000`]},"vira-pink-on-self-small-body":{foreground:W[`vira-pink-850`],background:W[`vira-pink-100`]},"vira-pink-on-self-body":{foreground:W[`vira-pink-850`],background:W[`vira-pink-250`]},"vira-pink-on-self-non-body":{foreground:W[`vira-pink-850`],background:W[`vira-pink-350`]},"vira-pink-on-self-header":{foreground:W[`vira-pink-850`],background:W[`vira-pink-450`]},"vira-pink-on-self-placeholder":{foreground:W[`vira-pink-850`],background:W[`vira-pink-500`]},"vira-pink-on-self-decoration":{foreground:W[`vira-pink-850`],background:W[`vira-pink-650`]},"vira-pink-on-self-invisible":{foreground:W[`vira-pink-850`],background:W[`vira-pink-1000`]},"vira-grey-foreground-small-body":{foreground:W[`vira-grey-1000`]},"vira-grey-foreground-body":{foreground:W[`vira-grey-750`]},"vira-grey-foreground-non-body":{foreground:W[`vira-grey-650`]},"vira-grey-foreground-header":{foreground:W[`vira-grey-500`]},"vira-grey-foreground-placeholder":{foreground:W[`vira-grey-450`]},"vira-grey-foreground-decoration":{foreground:W[`vira-grey-350`]},"vira-grey-foreground-invisible":{foreground:W[`vira-grey-250`]},"vira-grey-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-grey-1000`]},"vira-grey-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-grey-750`]},"vira-grey-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-grey-600`]},"vira-grey-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-grey-500`]},"vira-grey-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-grey-400`]},"vira-grey-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-grey-350`]},"vira-grey-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-grey-250`]},"vira-grey-behind-fg-small-body":{background:W[`vira-grey-250`]},"vira-grey-behind-fg-body":{background:W[`vira-grey-350`]},"vira-grey-behind-fg-non-body":{background:W[`vira-grey-400`]},"vira-grey-behind-fg-header":{background:W[`vira-grey-500`]},"vira-grey-behind-fg-placeholder":{background:W[`vira-grey-650`]},"vira-grey-behind-fg-decoration":{background:W[`vira-grey-750`]},"vira-grey-behind-fg-invisible":{background:W[`vira-grey-1000`]},"vira-grey-on-self-small-body":{foreground:W[`vira-grey-850`],background:W[`vira-grey-100`]},"vira-grey-on-self-body":{foreground:W[`vira-grey-850`],background:W[`vira-grey-300`]},"vira-grey-on-self-non-body":{foreground:W[`vira-grey-850`],background:W[`vira-grey-350`]},"vira-grey-on-self-header":{foreground:W[`vira-grey-850`],background:W[`vira-grey-450`]},"vira-grey-on-self-placeholder":{foreground:W[`vira-grey-850`],background:W[`vira-grey-550`]},"vira-grey-on-self-decoration":{foreground:W[`vira-grey-850`],background:W[`vira-grey-650`]},"vira-grey-on-self-invisible":{foreground:W[`vira-grey-850`],background:W[`vira-grey-1000`]}});cF(G,`dark`,{defaultOverride:{foreground:`white`,background:`black`},colorOverrides:{"vira-red-foreground-small-body":{foreground:W[`vira-red-250`]},"vira-red-foreground-body":{foreground:W[`vira-red-350`]},"vira-red-foreground-non-body":{foreground:W[`vira-red-400`]},"vira-red-foreground-header":{foreground:W[`vira-red-450`]},"vira-red-foreground-placeholder":{foreground:W[`vira-red-600`]},"vira-red-foreground-decoration":{foreground:W[`vira-red-750`]},"vira-red-foreground-invisible":{foreground:W[`vira-red-1000`]},"vira-red-behind-bg-small-body":{background:W[`vira-red-250`]},"vira-red-behind-bg-body":{background:W[`vira-red-350`]},"vira-red-behind-bg-non-body":{background:W[`vira-red-400`]},"vira-red-behind-bg-header":{background:W[`vira-red-500`]},"vira-red-behind-bg-placeholder":{background:W[`vira-red-650`]},"vira-red-behind-bg-decoration":{background:W[`vira-red-750`]},"vira-red-behind-bg-invisible":{background:W[`vira-red-1000`]},"vira-red-behind-fg-small-body":{background:W[`vira-red-1000`]},"vira-red-behind-fg-body":{background:W[`vira-red-700`]},"vira-red-behind-fg-non-body":{background:W[`vira-red-600`]},"vira-red-behind-fg-header":{background:W[`vira-red-450`]},"vira-red-behind-fg-placeholder":{background:W[`vira-red-400`]},"vira-red-behind-fg-decoration":{background:W[`vira-red-350`]},"vira-red-behind-fg-invisible":{background:W[`vira-red-200`]},"vira-red-on-self-small-body":{foreground:W[`vira-red-200`],background:W[`vira-red-1000`]},"vira-red-on-self-body":{foreground:W[`vira-red-200`],background:W[`vira-red-950`]},"vira-red-on-self-non-body":{foreground:W[`vira-red-200`],background:W[`vira-red-700`]},"vira-red-on-self-header":{foreground:W[`vira-red-200`],background:W[`vira-red-550`]},"vira-red-on-self-placeholder":{foreground:W[`vira-red-200`],background:W[`vira-red-450`]},"vira-red-on-self-decoration":{foreground:W[`vira-red-200`],background:W[`vira-red-400`]},"vira-red-on-self-invisible":{foreground:W[`vira-red-200`],background:W[`vira-red-350`]},"vira-yellow-foreground-small-body":{foreground:W[`vira-yellow-250`]},"vira-yellow-foreground-body":{foreground:W[`vira-yellow-350`]},"vira-yellow-foreground-non-body":{foreground:W[`vira-yellow-400`]},"vira-yellow-foreground-placeholder":{foreground:W[`vira-yellow-600`]},"vira-yellow-foreground-decoration":{foreground:W[`vira-yellow-750`]},"vira-yellow-foreground-invisible":{foreground:W[`vira-yellow-1000`]},"vira-yellow-behind-bg-small-body":{background:W[`vira-yellow-250`]},"vira-yellow-behind-bg-body":{background:W[`vira-yellow-350`]},"vira-yellow-behind-bg-non-body":{background:W[`vira-yellow-400`]},"vira-yellow-behind-bg-header":{background:W[`vira-yellow-500`]},"vira-yellow-behind-bg-placeholder":{background:W[`vira-yellow-650`]},"vira-yellow-behind-bg-decoration":{background:W[`vira-yellow-750`]},"vira-yellow-behind-bg-invisible":{background:W[`vira-yellow-1000`]},"vira-yellow-behind-fg-small-body":{background:W[`vira-yellow-1000`]},"vira-yellow-behind-fg-body":{background:W[`vira-yellow-700`]},"vira-yellow-behind-fg-non-body":{background:W[`vira-yellow-600`]},"vira-yellow-behind-fg-header":{background:W[`vira-yellow-450`]},"vira-yellow-behind-fg-placeholder":{background:W[`vira-yellow-400`]},"vira-yellow-behind-fg-decoration":{background:W[`vira-yellow-350`]},"vira-yellow-behind-fg-invisible":{background:W[`vira-yellow-250`]},"vira-yellow-on-self-small-body":{foreground:W[`vira-yellow-200`],background:W[`vira-yellow-1000`]},"vira-yellow-on-self-body":{foreground:W[`vira-yellow-200`],background:W[`vira-yellow-900`]},"vira-yellow-on-self-non-body":{foreground:W[`vira-yellow-200`],background:W[`vira-yellow-700`]},"vira-yellow-on-self-header":{foreground:W[`vira-yellow-200`],background:W[`vira-yellow-550`]},"vira-yellow-on-self-placeholder":{foreground:W[`vira-yellow-200`],background:W[`vira-yellow-450`]},"vira-yellow-on-self-decoration":{foreground:W[`vira-yellow-200`],background:W[`vira-yellow-400`]},"vira-yellow-on-self-invisible":{foreground:W[`vira-yellow-200`],background:W[`vira-yellow-350`]},"vira-green-foreground-small-body":{foreground:W[`vira-green-250`]},"vira-green-foreground-body":{foreground:W[`vira-green-350`]},"vira-green-foreground-non-body":{foreground:W[`vira-green-450`]},"vira-green-foreground-header":{foreground:W[`vira-green-500`]},"vira-green-foreground-placeholder":{foreground:W[`vira-green-650`]},"vira-green-foreground-decoration":{foreground:W[`vira-green-750`]},"vira-green-foreground-invisible":{foreground:W[`vira-green-1000`]},"vira-green-behind-bg-small-body":{background:W[`vira-green-250`]},"vira-green-behind-bg-body":{background:W[`vira-green-350`]},"vira-green-behind-bg-non-body":{background:W[`vira-green-450`]},"vira-green-behind-bg-header":{background:W[`vira-green-550`]},"vira-green-behind-bg-placeholder":{background:W[`vira-green-650`]},"vira-green-behind-bg-decoration":{background:W[`vira-green-800`]},"vira-green-behind-bg-invisible":{background:W[`vira-green-1000`]},"vira-green-behind-fg-small-body":{background:W[`vira-green-1000`]},"vira-green-behind-fg-body":{background:W[`vira-green-750`]},"vira-green-behind-fg-non-body":{background:W[`vira-green-650`]},"vira-green-behind-fg-header":{background:W[`vira-green-500`]},"vira-green-behind-fg-placeholder":{background:W[`vira-green-400`]},"vira-green-behind-fg-decoration":{background:W[`vira-green-350`]},"vira-green-behind-fg-invisible":{background:W[`vira-green-250`]},"vira-green-on-self-small-body":{foreground:W[`vira-green-200`],background:W[`vira-green-1000`]},"vira-green-on-self-body":{foreground:W[`vira-green-200`],background:W[`vira-green-900`]},"vira-green-on-self-non-body":{foreground:W[`vira-green-200`],background:W[`vira-green-700`]},"vira-green-on-self-header":{foreground:W[`vira-green-200`],background:W[`vira-green-600`]},"vira-green-on-self-placeholder":{foreground:W[`vira-green-200`],background:W[`vira-green-450`]},"vira-green-on-self-decoration":{foreground:W[`vira-green-200`],background:W[`vira-green-400`]},"vira-green-on-self-invisible":{foreground:W[`vira-green-200`],background:W[`vira-green-350`]},"vira-teal-foreground-small-body":{foreground:W[`vira-teal-250`]},"vira-teal-foreground-body":{foreground:W[`vira-teal-350`]},"vira-teal-foreground-non-body":{foreground:W[`vira-teal-450`]},"vira-teal-foreground-header":{foreground:W[`vira-teal-500`]},"vira-teal-foreground-placeholder":{foreground:W[`vira-teal-650`]},"vira-teal-foreground-decoration":{foreground:W[`vira-teal-750`]},"vira-teal-foreground-invisible":{foreground:W[`vira-teal-1000`]},"vira-teal-behind-bg-small-body":{background:W[`vira-teal-250`]},"vira-teal-behind-bg-body":{background:W[`vira-teal-350`]},"vira-teal-behind-bg-non-body":{background:W[`vira-teal-450`]},"vira-teal-behind-bg-placeholder":{background:W[`vira-teal-650`]},"vira-teal-behind-bg-decoration":{background:W[`vira-teal-750`]},"vira-teal-behind-bg-invisible":{background:W[`vira-teal-1000`]},"vira-teal-behind-fg-small-body":{background:W[`vira-teal-1000`]},"vira-teal-behind-fg-body":{background:W[`vira-teal-750`]},"vira-teal-behind-fg-non-body":{background:W[`vira-teal-600`]},"vira-teal-behind-fg-placeholder":{background:W[`vira-teal-400`]},"vira-teal-behind-fg-decoration":{background:W[`vira-teal-350`]},"vira-teal-behind-fg-invisible":{background:W[`vira-teal-250`]},"vira-teal-on-self-small-body":{foreground:W[`vira-teal-200`],background:W[`vira-teal-1000`]},"vira-teal-on-self-body":{foreground:W[`vira-teal-200`],background:W[`vira-teal-900`]},"vira-teal-on-self-non-body":{foreground:W[`vira-teal-200`],background:W[`vira-teal-700`]},"vira-teal-on-self-header":{foreground:W[`vira-teal-200`],background:W[`vira-teal-600`]},"vira-teal-on-self-placeholder":{foreground:W[`vira-teal-200`],background:W[`vira-teal-450`]},"vira-teal-on-self-decoration":{foreground:W[`vira-teal-200`],background:W[`vira-teal-400`]},"vira-teal-on-self-invisible":{foreground:W[`vira-teal-200`],background:W[`vira-teal-350`]},"vira-blue-foreground-small-body":{foreground:W[`vira-blue-250`]},"vira-blue-foreground-body":{foreground:W[`vira-blue-350`]},"vira-blue-foreground-non-body":{foreground:W[`vira-blue-400`]},"vira-blue-foreground-placeholder":{foreground:W[`vira-blue-600`]},"vira-blue-foreground-decoration":{foreground:W[`vira-blue-750`]},"vira-blue-foreground-invisible":{foreground:W[`vira-blue-1000`]},"vira-blue-behind-bg-small-body":{background:W[`vira-blue-250`]},"vira-blue-behind-bg-body":{background:W[`vira-blue-350`]},"vira-blue-behind-bg-non-body":{background:W[`vira-blue-400`]},"vira-blue-behind-bg-header":{background:W[`vira-blue-500`]},"vira-blue-behind-bg-placeholder":{background:W[`vira-blue-650`]},"vira-blue-behind-bg-decoration":{background:W[`vira-blue-750`]},"vira-blue-behind-bg-invisible":{background:W[`vira-blue-1000`]},"vira-blue-behind-fg-small-body":{background:W[`vira-blue-1000`]},"vira-blue-behind-fg-body":{background:W[`vira-blue-750`]},"vira-blue-behind-fg-non-body":{background:W[`vira-blue-600`]},"vira-blue-behind-fg-header":{background:W[`vira-blue-450`]},"vira-blue-behind-fg-placeholder":{background:W[`vira-blue-400`]},"vira-blue-behind-fg-decoration":{background:W[`vira-blue-350`]},"vira-blue-behind-fg-invisible":{background:W[`vira-blue-250`]},"vira-blue-on-self-small-body":{foreground:W[`vira-blue-200`],background:W[`vira-blue-1000`]},"vira-blue-on-self-body":{foreground:W[`vira-blue-200`],background:W[`vira-blue-900`]},"vira-blue-on-self-non-body":{foreground:W[`vira-blue-200`],background:W[`vira-blue-700`]},"vira-blue-on-self-header":{foreground:W[`vira-blue-200`],background:W[`vira-blue-550`]},"vira-blue-on-self-placeholder":{foreground:W[`vira-blue-200`],background:W[`vira-blue-450`]},"vira-blue-on-self-decoration":{foreground:W[`vira-blue-200`],background:W[`vira-blue-400`]},"vira-blue-on-self-invisible":{foreground:W[`vira-blue-200`],background:W[`vira-blue-350`]},"vira-accent-foreground-small-body":{foreground:W[`vira-accent-250`]},"vira-accent-foreground-body":{foreground:W[`vira-accent-350`]},"vira-accent-foreground-non-body":{foreground:W[`vira-accent-400`]},"vira-accent-foreground-placeholder":{foreground:W[`vira-accent-600`]},"vira-accent-foreground-decoration":{foreground:W[`vira-accent-750`]},"vira-accent-foreground-invisible":{foreground:W[`vira-accent-1000`]},"vira-accent-behind-bg-small-body":{background:W[`vira-accent-250`]},"vira-accent-behind-bg-body":{background:W[`vira-accent-350`]},"vira-accent-behind-bg-non-body":{background:W[`vira-accent-400`]},"vira-accent-behind-bg-header":{background:W[`vira-accent-500`]},"vira-accent-behind-bg-placeholder":{background:W[`vira-accent-650`]},"vira-accent-behind-bg-decoration":{background:W[`vira-accent-750`]},"vira-accent-behind-bg-invisible":{background:W[`vira-accent-1000`]},"vira-accent-behind-fg-small-body":{background:W[`vira-accent-1000`]},"vira-accent-behind-fg-body":{background:W[`vira-accent-750`]},"vira-accent-behind-fg-non-body":{background:W[`vira-accent-600`]},"vira-accent-behind-fg-header":{background:W[`vira-accent-450`]},"vira-accent-behind-fg-placeholder":{background:W[`vira-accent-400`]},"vira-accent-behind-fg-decoration":{background:W[`vira-accent-350`]},"vira-accent-behind-fg-invisible":{background:W[`vira-accent-250`]},"vira-accent-on-self-small-body":{foreground:W[`vira-accent-200`],background:W[`vira-accent-1000`]},"vira-accent-on-self-body":{foreground:W[`vira-accent-200`],background:W[`vira-accent-900`]},"vira-accent-on-self-non-body":{foreground:W[`vira-accent-200`],background:W[`vira-accent-700`]},"vira-accent-on-self-header":{foreground:W[`vira-accent-200`],background:W[`vira-accent-550`]},"vira-accent-on-self-placeholder":{foreground:W[`vira-accent-200`],background:W[`vira-accent-450`]},"vira-accent-on-self-decoration":{foreground:W[`vira-accent-200`],background:W[`vira-accent-400`]},"vira-accent-on-self-invisible":{foreground:W[`vira-accent-200`],background:W[`vira-accent-350`]},"vira-purple-foreground-small-body":{foreground:W[`vira-purple-250`]},"vira-purple-foreground-body":{foreground:W[`vira-purple-350`]},"vira-purple-foreground-non-body":{foreground:W[`vira-purple-400`]},"vira-purple-foreground-header":{foreground:W[`vira-purple-450`]},"vira-purple-foreground-placeholder":{foreground:W[`vira-purple-600`]},"vira-purple-foreground-decoration":{foreground:W[`vira-purple-750`]},"vira-purple-foreground-invisible":{foreground:W[`vira-purple-1000`]},"vira-purple-behind-bg-small-body":{background:W[`vira-purple-250`]},"vira-purple-behind-bg-body":{background:W[`vira-purple-350`]},"vira-purple-behind-bg-non-body":{background:W[`vira-purple-400`]},"vira-purple-behind-bg-header":{background:W[`vira-purple-500`]},"vira-purple-behind-bg-placeholder":{background:W[`vira-purple-600`]},"vira-purple-behind-bg-decoration":{background:W[`vira-purple-750`]},"vira-purple-behind-bg-invisible":{background:W[`vira-purple-1000`]},"vira-purple-behind-fg-small-body":{background:W[`vira-purple-1000`]},"vira-purple-behind-fg-body":{background:W[`vira-purple-700`]},"vira-purple-behind-fg-non-body":{background:W[`vira-purple-600`]},"vira-purple-behind-fg-header":{background:W[`vira-purple-450`]},"vira-purple-behind-fg-placeholder":{background:W[`vira-purple-400`]},"vira-purple-behind-fg-decoration":{background:W[`vira-purple-350`]},"vira-purple-behind-fg-invisible":{background:W[`vira-purple-200`]},"vira-purple-on-self-small-body":{foreground:W[`vira-purple-200`],background:W[`vira-purple-1000`]},"vira-purple-on-self-body":{foreground:W[`vira-purple-200`],background:W[`vira-purple-900`]},"vira-purple-on-self-non-body":{foreground:W[`vira-purple-200`],background:W[`vira-purple-700`]},"vira-purple-on-self-header":{foreground:W[`vira-purple-200`],background:W[`vira-purple-550`]},"vira-purple-on-self-placeholder":{foreground:W[`vira-purple-200`],background:W[`vira-purple-450`]},"vira-purple-on-self-decoration":{foreground:W[`vira-purple-200`],background:W[`vira-purple-400`]},"vira-purple-on-self-invisible":{foreground:W[`vira-purple-200`],background:W[`vira-purple-350`]},"vira-pink-foreground-small-body":{foreground:W[`vira-pink-200`]},"vira-pink-foreground-body":{foreground:W[`vira-pink-350`]},"vira-pink-foreground-non-body":{foreground:W[`vira-pink-400`]},"vira-pink-foreground-header":{foreground:W[`vira-pink-450`]},"vira-pink-foreground-placeholder":{foreground:W[`vira-pink-600`]},"vira-pink-foreground-decoration":{foreground:W[`vira-pink-750`]},"vira-pink-foreground-invisible":{foreground:W[`vira-pink-1000`]},"vira-pink-behind-bg-small-body":{background:W[`vira-pink-200`]},"vira-pink-behind-bg-body":{background:W[`vira-pink-350`]},"vira-pink-behind-bg-non-body":{background:W[`vira-pink-400`]},"vira-pink-behind-bg-header":{background:W[`vira-pink-500`]},"vira-pink-behind-bg-placeholder":{background:W[`vira-pink-600`]},"vira-pink-behind-bg-decoration":{background:W[`vira-pink-750`]},"vira-pink-behind-bg-invisible":{background:W[`vira-pink-1000`]},"vira-pink-behind-fg-small-body":{background:W[`vira-pink-1000`]},"vira-pink-behind-fg-body":{background:W[`vira-pink-700`]},"vira-pink-behind-fg-non-body":{background:W[`vira-pink-550`]},"vira-pink-behind-fg-header":{background:W[`vira-pink-450`]},"vira-pink-behind-fg-placeholder":{background:W[`vira-pink-400`]},"vira-pink-behind-fg-decoration":{background:W[`vira-pink-350`]},"vira-pink-behind-fg-invisible":{background:W[`vira-pink-200`]},"vira-pink-on-self-small-body":{foreground:W[`vira-pink-200`],background:W[`vira-pink-1000`]},"vira-pink-on-self-body":{foreground:W[`vira-pink-200`],background:W[`vira-pink-950`]},"vira-pink-on-self-non-body":{foreground:W[`vira-pink-200`],background:W[`vira-pink-700`]},"vira-pink-on-self-header":{foreground:W[`vira-pink-200`],background:W[`vira-pink-550`]},"vira-pink-on-self-placeholder":{foreground:W[`vira-pink-200`],background:W[`vira-pink-450`]},"vira-pink-on-self-decoration":{foreground:W[`vira-pink-200`],background:W[`vira-pink-400`]},"vira-pink-on-self-invisible":{foreground:W[`vira-pink-200`],background:W[`vira-pink-300`]},"vira-grey-foreground-small-body":{foreground:W[`vira-grey-250`]},"vira-grey-foreground-body":{foreground:W[`vira-grey-350`]},"vira-grey-foreground-non-body":{foreground:W[`vira-grey-400`]},"vira-grey-foreground-placeholder":{foreground:W[`vira-grey-600`]},"vira-grey-foreground-decoration":{foreground:W[`vira-grey-750`]},"vira-grey-foreground-invisible":{foreground:W[`vira-grey-1000`]},"vira-grey-behind-bg-small-body":{background:W[`vira-grey-250`]},"vira-grey-behind-bg-body":{background:W[`vira-grey-350`]},"vira-grey-behind-bg-non-body":{background:W[`vira-grey-400`]},"vira-grey-behind-bg-placeholder":{background:W[`vira-grey-650`]},"vira-grey-behind-bg-decoration":{background:W[`vira-grey-750`]},"vira-grey-behind-bg-invisible":{background:W[`vira-grey-1000`]},"vira-grey-behind-fg-small-body":{background:W[`vira-grey-1000`]},"vira-grey-behind-fg-body":{background:W[`vira-grey-750`]},"vira-grey-behind-fg-non-body":{background:W[`vira-grey-600`]},"vira-grey-behind-fg-placeholder":{background:W[`vira-grey-400`]},"vira-grey-behind-fg-decoration":{background:W[`vira-grey-350`]},"vira-grey-behind-fg-invisible":{background:W[`vira-grey-250`]},"vira-grey-on-self-small-body":{foreground:W[`vira-grey-200`],background:W[`vira-grey-1000`]},"vira-grey-on-self-body":{foreground:W[`vira-grey-200`],background:W[`vira-grey-900`]},"vira-grey-on-self-non-body":{foreground:W[`vira-grey-200`],background:W[`vira-grey-700`]},"vira-grey-on-self-header":{foreground:W[`vira-grey-200`],background:W[`vira-grey-600`]},"vira-grey-on-self-placeholder":{foreground:W[`vira-grey-200`],background:W[`vira-grey-450`]},"vira-grey-on-self-decoration":{foreground:W[`vira-grey-200`],background:W[`vira-grey-400`]},"vira-grey-on-self-invisible":{foreground:W[`vira-grey-200`],background:W[`vira-grey-350`]}}});var lF=`8px`,K=Fd({"vira-form-border-color":G.colors[`vira-grey-foreground-decoration`].foreground.value,"vira-form-placeholder-color":G.colors[`vira-grey-foreground-placeholder`].foreground.value,"vira-form-background-color":G.colors[iF].background.value,"vira-form-foreground-color":G.colors[iF].foreground.value,"vira-form-modal-backdrop-color":`rgba(0, 0, 0, 0.35)`,"vira-form-secondary-body-foreground":G.colors[`vira-grey-foreground-header`].foreground.value,"vira-form-text-selection-color":G.colors[`vira-accent-behind-bg-decoration`].background.value,"vira-form-selection-hover-color":G.colors[`vira-accent-behind-bg-invisible`].background.value,"vira-form-selection-active-color":G.colors[`vira-accent-behind-bg-decoration`].background.value,"vira-form-error-color":G.colors[`vira-red-behind-bg-non-body`].background.value,"vira-form-error-hover-color":G.colors[`vira-red-behind-bg-header`].background.value,"vira-form-error-active-color":G.colors[`vira-red-behind-bg-body`].background.value,"vira-form-warning-color":G.colors[`vira-yellow-behind-bg-non-body`].background.value,"vira-form-warning-hover-color":G.colors[`vira-yellow-behind-bg-header`].background.value,"vira-form-warning-active-color":G.colors[`vira-yellow-behind-bg-body`].background.value,"vira-form-positive-color":G.colors[`vira-green-behind-bg-non-body`].background.value,"vira-form-positive-hover-color":G.colors[`vira-green-behind-bg-header`].background.value,"vira-form-positive-active-color":G.colors[`vira-green-behind-bg-body`].background.value,"vira-form-success-color":G.colors[`vira-green-behind-bg-non-body`].background.value,"vira-form-label-font-weight":`bold`,"vira-form-small-text-size":`14px`,"vira-form-medium-text-size":`16px`,"vira-form-large-text-size":`22px`,"vira-form-radius":lF,"vira-form-wrapper-radius":`16px`,"vira-form-focus-outline-color":G.colors[`vira-accent-foreground-header`].foreground.value,"vira-form-focus-outline-border-radius":z`calc(var(--vira-form-radius, ${Tu(lF)}) + 2px)`,"vira-form-plain-color":W[`vira-grey-100`].value,"vira-form-plain-hover-color":G.colors[`vira-grey-foreground-invisible`].foreground.value,"vira-form-plain-active-color":G.colors[`vira-grey-foreground-decoration`].foreground.value,"vira-form-accent-primary-color":G.colors[`vira-accent-behind-bg-non-body`].background.value,"vira-form-accent-primary-hover-color":G.colors[`vira-accent-behind-bg-header`].background.value,"vira-form-accent-primary-active-color":G.colors[`vira-accent-behind-bg-body`].background.value,"vira-form-danger-color":G.colors[`vira-red-behind-bg-non-body`].background.value,"vira-form-danger-hover-color":G.colors[`vira-red-behind-bg-header`].background.value,"vira-form-danger-active-color":G.colors[`vira-red-behind-bg-body`].background.value,"vira-form-filled-background-color":G.colors[`vira-grey-foreground-invisible`].foreground.value,"vira-form-filled-active-background-color":G.colors[`vira-grey-foreground-decoration`].foreground.value}),uF=z`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,dF=Fd({"vira-extended-animation-duration":`1.2s`,"vira-pretty-animation-duration":`300ms`,"vira-interaction-animation-duration":`84ms`});function fF(e){return A.isString(e)?Tu(e):e.value}function pF({elementBorderSize:e=`1px`,outlineGap:t=`2px`,outlineWidth:n=`2px`,noNesting:r,outlineColor:i=K[`vira-form-focus-outline-color`],borderRadius:a=K[`vira-form-focus-outline-border-radius`],renderInside:o}={}){let s=z`calc(${fF(t)})`,c=z`calc(${fF(n)} + ${fF(t)} + ${fF(e)})`,l=o?z`
              content: '';
              top: ${s};
              left: ${s};
              position: absolute;
              width: calc(100% - calc(${s} * 2));
              height: calc(100% - calc(${s} * 2));
              box-sizing: border-box;
              pointer-events: none;
              border: ${fF(n)} solid ${fF(i)};
              border-radius: ${fF(a)};
              z-index: 100;
          `:z`
              content: '';
              top: calc(${c} * -1);
              left: calc(${c} * -1);
              position: absolute;
              width: calc(100% + calc(${c} * 2));
              height: calc(100% + calc(${c} * 2));
              box-sizing: border-box;
              pointer-events: none;
              border: ${fF(n)} solid ${fF(i)};
              border-radius: ${fF(a)};
              z-index: 100;
          `;return r?l:z`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${l}
        }
    `}var mF=Fd({"vira-monospace":`monospace`}),hF={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};Al(hF,e=>e),Object.fromEntries(Object.entries(hF).map(([e,t])=>[t,e]));var gF;(function(e){e.SmallBodyText=`small-body`,e.BodyText=`body`,e.NonBodyText=`non-body`,e.Header=`header`,e.Placeholder=`placeholder`,e.Decoration=`decoration`,e.Invisible=`invisible`})(gF||={}),gF.SmallBodyText,gF.BodyText,gF.NonBodyText,gF.Header,gF.Placeholder,gF.Decoration,gF.Invisible,gF.SmallBodyText,gF.BodyText,gF.NonBodyText,gF.Header,gF.Placeholder,gF.Decoration,gF.Invisible;var _F=[{min:90,name:gF.SmallBodyText,description:`Perfect for all sizes of text, even small body text.`,apcaName:`small body text only`,apcaDescription:`Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color.`},{min:75,name:gF.BodyText,description:`Good for regular body text and anything larger.`,apcaName:`body text okay`,apcaDescription:`The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important.`},{min:60,name:gF.NonBodyText,description:`Good for legible non-body text and anything larger.`,apcaName:`fluent text only`,apcaDescription:`The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast.`},{min:45,name:gF.Header,description:`Okay for large or headline text.`,apcaName:`large & sub-fluent text`,apcaDescription:`The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension.`},{min:30,name:gF.Placeholder,description:`Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.`,apcaName:`spot & non text only`,apcaDescription:`The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.`},{min:15,name:gF.Decoration,description:`Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.`,apcaName:`no text usage`,apcaDescription:`The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site.`},{min:0,name:gF.Invisible,description:`Effectively invisible for users.`,apcaName:`invisible`,apcaDescription:`This should be treated as invisible.`}];Yc(_F,e=>({key:e.min,value:e})),Yc(_F,e=>({key:e.name,value:e}));var vF=ke(gF).sort((e,t)=>Number(t.includes(`-`))-Number(e.includes(`-`))),yF=Yc(o(Jc(Object.keys(G.colors),e=>e.split(`-`)[1],e=>e!==`default`)).filter(A.isTruthy),e=>({key:e,value:e}),{useRequired:!0}),bF=De(G.colors),xF=fl(yF,e=>Yc(o(Jc(bF,t=>vF.reduce((e,t)=>_l({value:e,suffix:`-${t}`}),ul({value:t,prefix:`vira-${e}-`})),(t,n)=>n.startsWith(`vira-${e}-`))),t=>({key:t,value:Yc(ke(gF),n=>{let r=`vira-${e}-${t}-${n}`;if(A.hasKey(G.colors,r))return{key:n,value:G.colors[r]}})}))),q;(function(e){e.Accent=`accent`,e.Plain=`plain`,e.Neutral=`neutral`,e.Danger=`danger`,e.Warning=`warning`,e.Positive=`positive`,e.None=`none`})(q||={});var SF={[q.Accent]:yF.accent,[q.Neutral]:yF.grey,[q.Danger]:yF.red,[q.Warning]:yF.yellow,[q.Positive]:yF.green},CF=[q.Accent,q.Plain,q.Neutral,q.Danger,q.Warning,q.Positive],wF;(function(e){e.Large=`large`,e.Medium=`medium`,e.Small=`small`,e.None=`none`})(wF||={});var TF=[wF.Small,wF.Medium,wF.Large],EF;(function(e){e.Standard=`standard`,e.Subtle=`subtle`,e.None=`none`})(EF||={});var DF=[EF.Standard,EF.Subtle],OF={[wF.Large]:40,[wF.Medium]:32,[wF.Small]:24},kF=z`
    padding: 0;
    margin: 0;
`,AF=z`
    ${kF};
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,jF=Fd({"menu-shadow-color":`#e2e2e2`,"modal-shadow-color":`#4f4f4f`}),MF={menuShadow:z`
        filter: drop-shadow(0px 5px 5px ${jF[`menu-shadow-color`].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:z`
        box-shadow: 0 5px 15px ${jF[`modal-shadow-color`].value};
    `},NF=z`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,PF=`vira-`,FF=MN({assertInputs:e=>{if(!e.tagName.startsWith(PF))throw Error(`Tag name should start with '${PF}' but got '${e.tagName}'`)}}),J=FF()({tagName:`vira-icon`,hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer||!!e.icon?.size},styles:({hostClasses:e})=>z`
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
    `,render({inputs:e,host:t}){if(e.icon)e.icon.size&&(t.style.width=hl(e.icon.size),t.style.height=hl(e.icon.size));else return``;return e.icon.svgTemplate}});function IF(e,t){return e>t}function LF(e,t){return e<t}function RF(e){e.scrollIntoView({behavior:`smooth`,inline:`center`,block:`center`}),e.focus()}var zF;(function(e){e.Up=`up`,e.Down=`down`,e.Left=`left`,e.Right=`right`})(zF||={});var BF;(function(e){e.Enter=`enter`,e.Exit=`exit`,e.Activate=`activate`,e.Focus=`focus`,e.Navigate=`navigate`,e.Pibling=`pibling`})(BF||={});function VF(e){let t={x:-1,y:-1},n;for(;t.y<e.length-1&&!n;){t.y++;let r=e[t.y];for(;r&&t.x<r.length-1&&!n;){t.x++;let e=r[t.x];if(e)if(e.navEntry.navParams.group){let t=VF(e.children);t&&(n=t.node)}else e.navEntry.navParams.disabled||(n=e)}}if(n)return{node:n,coords:t}}function HF(e,t,n,r){if(!t){let t=VF(e.children);return t?(RF(t.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:t.node.element,coords:t.coords,direction:n,navAction:BF.Navigate}):{success:!1,reason:`no default element to focus`,direction:n,navAction:BF.Navigate}}let{nextNode:i,requiresWrapping:a,coords:o}=UF(t.position,n),s=r?!0:!a;return i&&s?(RF(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:a,direction:n,navAction:BF.Navigate,coords:o}):i?s?{success:!1,reason:`no conditions matched`,direction:n,navAction:BF.Navigate}:{success:!1,reason:`wrapping blocked`,direction:n,navAction:BF.Navigate}:{success:!1,reason:`failed to find node to focus`,direction:n,navAction:BF.Navigate}}function UF(e,t){let n=!1,r,i=1,a=Date.now();for(;!n||!r;)if(r=WF(e,t,i),n=!r.nextNode?.navEntry.navParams.disabled,i++,Date.now()-a>1e3)return Cl.warning(`Failed to find next non-disabled node.`),r;return r}function WF(e,t,n){let r=e.ancestorChain[e.ancestorChain.length-1]?.node;Fc.isDefined(r,`missing parent`);let i=Ac.isDefined(r.children[e.nodeCoords.y]),a=r.children.length>1&&(t===zF.Down||t===zF.Up),o=t===zF.Down||t===zF.Right?n:-1*n,s=o<0?IF:LF,c=a?Ol(e.nodeCoords.y+o,{min:0,max:r.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=Ac.isDefined(r.children[c]),u=a?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:Ol(e.nodeCoords.x+o,{min:0,max:i.length-1,takeOverflow:!0});return{nextNode:r.children[c]?.[u],requiresWrapping:a?s(c,e.nodeCoords.y):s(u,e.nodeCoords.x),coords:{x:u,y:c}}}function GF(e,t,n){let r=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!r)return{success:!1,reason:`no parent to find a pibling from`,direction:t,navAction:BF.Pibling};let{nextNode:i,requiresWrapping:a,coords:o}=UF(r,t),s=i?.navEntry.navParams.group?VF(i.children):{node:i,coords:o},c=n?!0:!a;return!s||!s.node?{success:!1,reason:`no node to navigate to`,direction:t,navAction:BF.Pibling}:c?(RF(s.node.element),{success:!0,defaulted:!1,newElement:s.node.element,wrapped:a,coords:s.coords,direction:t,navAction:BF.Pibling}):{success:!1,reason:`wrapping blocked`,direction:t,navAction:BF.Pibling}}var KF;(function(e){e.Disabled=`disabled`,e.Group=`group`,e.Focused=`focused`,e.Active=`active`})(KF||={});var qF={name:`data-nav`,js(e){return e?`[${qF.name}*="${e}"]`:`[${qF.name}]`},css({baseSelector:e=``,navValue:t}={}){return z`
            ${Tu(e)}${Tu(qF.js(t))}
        `}},JF=`navEntry`;function YF(e){return JF in e}function XF(e){if(YF(e)){let t=e[JF];return Ac.instanceOf(t,QF,`Invalid nav entry`)}else return}function ZF(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type===`mousedown`&&!e.navController.options.activateOnMouseUp||t.type===`mouseup`&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type===`mouseup`||t.type===`focus`?t.target===e.element&&e.focus(!0):t.type===`mousemove`?t.target===e.element&&e.navValue!==KF.Active&&e.focus(!0):(t.type===`blur`||t.type===`mouseleave`)&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}var QF=class{element;navParams;navTreeNode;navValue;eventListener=ZF(this);constructor(e,t,n){this.element=e,this.navParams=n,this.attachListeners(),this.navController=t}set navController(e){this._navController!==e&&(this._navController?.removeNavEntry(this),this._navController=e,e.addNavEntry(this))}get navController(){return Fc.isDefined(this._navController,`this.navController has not been set in NavEntry constructor yet.`),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(kl(this).navValue=void 0,this.element.setAttribute(qF.name,``),iP(this.element)&&this.element.blur())}focus(e,t){let n=this.navValue,r=e===(n===KF.Focused);if(!(this.navParams.group||this.navController.locked||r||!e&&this.navController.options.alwaysRequireFocused))return e?(this.setNavValue(KF.Focused),iP(this.element)||this.element.focus()):(this.removeNavValue(KF.Focused),iP(this.element)&&this.element.blur()),t||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:e,previousNavValue:n}),this.navController.triggerNavEntry(this,e,BF.Focus)}activate(e){let t=this.navValue,n=e===(t===KF.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(e,!0),e?this.setNavValue(KF.Active):this.setNavValue(KF.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:e,previousNavValue:t}),this.navController.triggerNavEntry(this,e,BF.Activate)}setNavValue(e){kl(this).navValue=e,this.element.setAttribute(qF.name,e)}removeNavValue(e){this.navValue===e&&(kl(this).navValue=void 0,this.element.setAttribute(qF.name,``))}attachListeners(){this.element.addEventListener(`mousemove`,this.eventListener,!0),this.element.addEventListener(`mouseleave`,this.eventListener,!0),this.element.addEventListener(`mousedown`,this.eventListener,!0),this.element.addEventListener(`mouseup`,this.eventListener,!0),this.element.addEventListener(`focus`,this.eventListener,!0),this.element.addEventListener(`blur`,this.eventListener,!0)}};function $F(e,t){if(!t)return{success:!1,reason:`no focused node to enter into`,direction:void 0,navAction:BF.Enter};if(!t.position.node.children.length)return{success:!1,reason:`no children to enter into`,direction:void 0,navAction:BF.Enter};let n=t.position.node.children[0]?.[0];return n?(RF(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:BF.Enter,coords:{x:0,y:0}}):{success:!1,reason:`failed to find first child to enter into`,direction:void 0,navAction:BF.Enter}}function eI(e,t){return tI([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function tI(e,t,n){for(let r=0;r<t.length;r++){let i=t[r];for(let t=0;t<i.length;t++){let a=i[t],o={ancestorChain:e,nodeCoords:{x:t,y:r},node:a};if(n(o))return o;let s=tI(e.concat(o),a.children,n);if(s)return s}}}function nI(e,t){let n=eI(e,({node:e})=>!e.root&&e.navEntry===t);if(!n)throw Error(`Failed to find NavEntry in NavTree.`);return n}function rI(e,t){if(!t)return{success:!1,reason:`no focused node to exit out of`,direction:void 0,navAction:BF.Exit};let n=t.position.ancestorChain.toReversed().find(e=>!e.node.root&&!e.node.navEntry.navParams.group)?.node;if(!n||n.root)return{success:!1,reason:`failed to find ancestor, nothing to exit to`,direction:void 0,navAction:BF.Exit};let{nodeCoords:r}=nI(e,n.navEntry);return RF(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:BF.Exit,coords:r}}var iI=class extends Vl()(`nav-exit`){},aI=class extends Vl()(`nav-activate`){},oI=class extends Vl()(`nav-focus`){},sI=class extends Vl()(`nav-enter`){},cI=class extends Vl()(`nav-navigate`){},lI=class extends Vl()(`nav-navigate-pibling`){};function uI(e){return{root:!0,children:dI(e)?.children||[]}}function dI(e){let t=e.element;if(!(t instanceof HTMLElement))return;let n=XF(t),r=fI(e);if(n?.navParams.group&&r.length||r.length||n)return{root:!1,element:t,navEntry:n,children:r}}function fI(e){let t=[];function n(e){if(e.navEntry?.navParams.group&&!e.children.length)return;if(!e.navEntry){e.children.forEach(e=>e.forEach(e=>n(e)));return}let r=e.navEntry.navParams.x,i=e.navEntry.navParams.y||0,a=Gc(t,i,()=>({noX:[],withX:[],y:i}));r==null?a.noX.push(e):a.withX.push({x:r,node:e})}return e.children.forEach(e=>{let t=dI(e);t&&n(t)}),t.sort((e,t)=>e.y-t.y).map(e=>(e.withX.sort((e,t)=>e.x-t.x),e.withX.forEach(({x:t,node:n})=>{e.noX.splice(t,0,n)}),e.noX)).filter(A.isTruthy)}var pI=class extends Wl{rootElement;options;constructor(e,t={}){super(),this.rootElement=e,this.options=t}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){VF(this.getNavTree().children)?.node.element.focus()}addNavEntry(e){this.navEntries.add(e),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(e){this.navEntries.delete(e),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(e,t,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:`NavController is locked.`};if(!e)return{success:!1,direction:void 0,navAction:n,reason:`No nav entry to operate on.`};let r=nI(this.getNavTree(),e);t?(this.navEntries.forEach(t=>{t!==e&&t.clearNavValue()}),this.currentNavEntry={entry:e,navAction:n,position:r}):this.currentNavEntry?.entry===e&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);let i={success:!0,defaulted:!1,direction:void 0,newElement:e.element,wrapped:!1,navAction:n,coords:r.nodeCoords};return t&&(n===BF.Activate?this.dispatch(new aI({detail:i})):n===BF.Focus&&this.dispatch(new oI({detail:i}))),i}navigate({direction:e,allowWrapping:t}){if(this.locked)return{success:!1,direction:e,navAction:BF.Navigate,reason:`NavController is locked.`};let n=HF(this.getNavTree(),this.currentNavEntry,e,t);return this.dispatch(new cI({detail:n})),n}enterInto({fallbackToActivate:e}={}){if(this.locked)return{success:!1,direction:void 0,navAction:BF.Enter,reason:`NavController is locked.`};let t=$F(this.getNavTree(),this.currentNavEntry);return!t.success&&e?this.activate():(this.dispatch(new sI({detail:t})),t)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:BF.Activate,reason:`NavController is locked.`};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:BF.Activate,reason:`No focused NavEntry to activate.`};let e=this.currentNavEntry.entry.activate(!0);return Fc.isDefined(e,`Cannot activate a group.`),e}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:BF.Exit,reason:`NavController is locked.`};this.currentNavEntry?.navAction===BF.Activate&&this.currentNavEntry.entry.focus(!0);let e=rI(this.getNavTree(),this.currentNavEntry);return this.dispatch(new iI({detail:e})),e}navigatePibling({allowWrapping:e,direction:t}){if(this.locked)return{success:!1,direction:t,navAction:BF.Pibling,reason:`NavController is locked.`};let n=this.getNavTree(),r={...this.currentNavEntry?GF(this.currentNavEntry,t,e):HF(n,void 0,t,e),navAction:BF.Pibling};return this.dispatch(new lI({detail:r})),r}buildNavTree(){let e=uI(tP(this.rootElement));return this.cachedNavTree=e,e}};function mI({open:e,callback:t,popUpManager:n,host:r,options:i}){if(e){let e=n.showPopUp(r,i);t?.(e)}else n.removePopUp(),t?.(void 0)}var hI=globalThis.document,gI=class extends sM{constructor(){if(super({defaultValue:!!hI?.hidden,equalityCheck:A.strictEquals}),!hI)return;globalThis.addEventListener(`visibilitychange`,e=>this.updateVisibility(e,hI));let e=e=>this.updateVisibility(e,hI);globalThis.onpageshow=e,globalThis.onpagehide=e,globalThis.onfocus=e,globalThis.onblur=e}updateVisibility(e,t){let n=vI.includes(e.type),r=_I.includes(e.type),i=n?!0:r?!1:t.hasFocus()||!t.hidden;this.setValue(i)}},_I=[`blur`,`focusout`,`pagehide`],vI=[`focus`,`focusin`,`pageshow`],yI=new gI;function bI(e,t){return yI.listen(e,t)}function xI(e){return e instanceof HTMLInputElement&&(e.type===`text`||e.type===`search`||e.type===`email`||e.type===`url`||e.type===`tel`||e.type===`password`||e.type===`number`)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}var SI={top:0,left:0,right:0,bottom:0},CI=class extends Hl(`hide-pop-up`){},wI=class extends Vl()(`nav-select`){},TI=class{navController;listenTarget=new Wl;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;constructor(e,t){this.navController=e,this.options={...this.options,...t}}attachGlobalListeners(){this.cleanupCallbacks=[bI(!1,e=>{e||this.removePopUp()}),this.navController.listen(aI,e=>{let t=e.composedPath()[0];t instanceof Element&&xI(t)||e.detail.success&&(this.listenTarget.dispatch(new wI({detail:e.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),e.stopImmediatePropagation(),e.preventDefault())}),Kl(`mousedown`,e=>{this.lastRootElement&&e.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Kl(`keydown`,e=>{let t=e.code;if(t===`Escape`)this.removePopUp();else if(this.options.supportNavigation){let n=e.composedPath()[0];if(n instanceof Element&&xI(n))return;t===`ArrowDown`?(e.stopImmediatePropagation(),e.preventDefault(),this.navController.navigate({direction:zF.Down,allowWrapping:!1})):t===`ArrowUp`?(e.stopImmediatePropagation(),e.preventDefault(),this.navController.navigate({direction:zF.Up,allowWrapping:!1})):t===`ArrowLeft`?(e.stopImmediatePropagation(),e.preventDefault(),this.navController.navigate({direction:zF.Left,allowWrapping:!1})):t===`ArrowRight`?(e.stopImmediatePropagation(),e.preventDefault(),this.navController.navigate({direction:zF.Right,allowWrapping:!1})):(t===`Enter`||t===`Return`||t===`Space`)&&this.navController.enterInto({fallbackToActivate:!0}).success&&(e.stopImmediatePropagation(),e.preventDefault())}})]}listen(e,t,n){return this.listenTarget.listen(e,t,n)}removePopUp(){this.cleanupCallbacks.forEach(e=>e()),this.listenTarget.dispatch(new CI)}showPopUp(e,t){this.lastRootElement=e;let n={...this.options,...t},r=cP(e);Fc.instanceOf(r,HTMLElement);let i=e.getBoundingClientRect(),a=r.getBoundingClientRect(),o=r.offsetWidth-r.clientWidth,s=r.offsetHeight-r.clientHeight,c=r===document.body?{top:0,left:0,right:a.width,bottom:a.height}:{top:a.top,left:a.left,right:a.right-o,bottom:a.bottom-s},l=Al(SI,e=>i[e]),u=Al(SI,e=>{let t=c[e],n=l[e];return Math.abs(t-n)}),d=u.top>u.bottom+n.verticalDiffThreshold&&u.bottom<n.minDownSpace,f=u.left>u.right+n.horizontalDiffThreshold&&u.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!d,popRight:!f,positions:{container:c,root:l,diff:u}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}},EI;(function(e){e.Left=`left`,e.Right=`right`,e.Both=`both`,e.Auto=`auto`})(EI||={});var DI=FF()({tagName:`vira-pop-up-trigger`,state({host:e}){return{showPopUpResult:void 0,popUpManager:new TI(new pI(e,{activateOnMouseUp:!0}))}},slotNames:[`trigger`,`popUp`],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled,"vira-pop-up-trigger-inside-focus":({inputs:e})=>!!e.useInsideFocus,"vira-pop-up-trigger-outside-focus":({inputs:e})=>!e.useInsideFocus},styles:({hostClasses:e})=>z`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${AF};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;
        }

        ${e[`vira-pop-up-trigger-inside-focus`].selector} .dropdown-wrapper {
            ${pF({renderInside:!0})}
        }
        ${e[`vira-pop-up-trigger-outside-focus`].selector} .dropdown-wrapper {
            ${pF()}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${NF};
        }

        ${e[`vira-pop-up-trigger-disabled`].selector} {
            ${uF}
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
    `,events:{navSelect:JM(),openChange:JM(),init:JM()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:n,inputs:r,dispatch:i,events:a}){e.popUpManager.listen(CI,()=>{if(t({showPopUpResult:void 0}),i(new a.openChange(void 0)),r.focusOnClose&&!r.isDisabled){let e=n.shadowRoot.querySelector(`.dropdown-wrapper`);Fc.instanceOf(e,HTMLButtonElement,`failed to find dropdown wrapper child`),e.focus()}}),e.popUpManager.listen(wI,o=>{r.keepOpenAfterInteraction||mI({open:!1,callback(e){t({showPopUpResult:e})},host:n,popUpManager:e.popUpManager}),i(new a.navSelect(o.detail))}),i(new a.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:n,inputs:r,updateState:i,host:a,slotNames:o}){function s({emitEvent:o,open:s},c){if(n.showPopUpResult&&r.keepOpenAfterInteraction&&c){let e=a.shadowRoot.querySelector(`.dropdown-trigger`);if(e&&!c.composedPath().includes(e))return}mI({open:s,callback(n){i({showPopUpResult:n}),o&&e(new t.openChange(n))},host:a,popUpManager:n.popUpManager})}r.isDisabled?s({open:!1,emitEvent:!1},void 0):r.z_debug_forceOpenState!=null&&(!r.z_debug_forceOpenState&&n.showPopUpResult?s({emitEvent:!1,open:!1},void 0):r.z_debug_forceOpenState&&!n.showPopUpResult&&s({emitEvent:!1,open:!0},void 0));let c=r.horizontalAnchor===EI.Auto||r.horizontalAnchor===void 0?n.showPopUpResult?.popRight?EI.Left:EI.Right:r.horizontalAnchor,l=z`
            ${c===EI.Right&&n.showPopUpResult?r.ignoreMaxWidth?z`
                          left: unset;
                      `:z`
                          left: -${n.showPopUpResult.positions.diff.left}px;
                      `:z`
                      left: ${r.popUpOffset?.left||0}px;
                  `}
            ${n.showPopUpResult&&c===EI.Left?r.ignoreMaxWidth?z`
                          right: unset;
                      `:z`
                          right: -${n.showPopUpResult.positions.diff.right}px;
                      `:z`
                      right: ${r.popUpOffset?.right||0}px;
                  `}
        `,u=n.showPopUpResult?n.showPopUpResult.popDown?r.ignoreMaxHeight?z`
                          bottom: unset;
                          top: calc(100% + ${r.popUpOffset?.vertical||0}px);
                          ${l}
                      `:z`
                          bottom: -${n.showPopUpResult.positions.diff.bottom}px;
                          top: calc(100% + ${r.popUpOffset?.vertical||0}px);
                          ${l}
                      `:r.ignoreMaxHeight?z`
                        top: unset;
                        bottom: calc(100% + ${r.popUpOffset?.vertical||0}px);
                        ${l}
                    `:z`
                        top: -${n.showPopUpResult.positions.diff.top}px;
                        bottom: calc(100% + ${r.popUpOffset?.vertical||0}px);
                        ${l}
                    `:void 0;function d(e){s({emitEvent:!0,open:!n.showPopUpResult},e)}return V`
            <button
                ?disabled=${!!r.isDisabled}
                class="dropdown-wrapper ${CM({open:!!n.showPopUpResult,"open-upwards":!n.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!n.showPopUpResult}
                ${B(`keydown`,e=>{!n.showPopUpResult&&e.code.startsWith(`Arrow`)&&s({emitEvent:!0,open:!0},e)})}
                ${B(`click`,e=>{if(e.detail===0){let t=!1;if(lP(({element:e})=>xI(e)?(t=!0,!0):!1),t)return;d(e)}else if(e.button===0&&n.showPopUpResult){let t=a.shadowRoot.querySelector(`.dropdown-trigger`);t&&!e.composedPath().includes(t)&&s({emitEvent:!0,open:!1},e)}})}
                ${B(`mousedown`,e=>{if(e.button!==0)return;let t=Ac.instanceOf(a.shadowRoot.querySelector(`.dropdown-trigger`),HTMLElement);e.composedPath().includes(t)&&d(e)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${o.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${CM({"right-aligned":c===EI.Right})}"
                    style=${u}
                >
                    ${DN(!!n.showPopUpResult,V`
                            <slot name=${o.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),OI=U({name:`Check16Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="m12 5-6 6-3-3"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),kI=U({name:`ChevronDown16Icon`,svgTemplate:V`
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
    `}),AI=U({name:`ChevronUp16Icon`,svgTemplate:V`
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
    `}),jI=U({name:`Dash16Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 8h8"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                stroke-linecap="round"
            />
        </svg>
    `}),MI=U({name:`Element16Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),NI=U({name:`Upload16Icon`,svgTemplate:V`
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
    `}),PI=U({name:`X16Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 4l8 8M12 4l-8 8"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),FI=U({name:`ArrowDown24Icon`,svgTemplate:V`
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
    `}),II=U({name:`ArrowLeft24Icon`,svgTemplate:V`
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
    `}),LI=U({name:`ArrowRight24Icon`,svgTemplate:V`
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
    `}),RI=U({name:`ArrowUp24Icon`,svgTemplate:V`
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
    `}),zI=U({name:`AutoTheme24Icon`,svgTemplate:V`
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
    `}),BI=U({name:`Bell24Icon`,svgTemplate:V`
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
    `}),VI=U({name:`Chat24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />
        </svg>
    `}),HI=U({name:`ChevronDown24Icon`,svgTemplate:V`
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
    `}),UI=U({name:`ChevronUp24Icon`,svgTemplate:V`
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
    `}),WI=U({name:`CloseX24Icon`,svgTemplate:V`
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
    `}),GI=U({name:`Commit24Icon`,svgTemplate:V`
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
    `}),KI=U({name:`Copy24Icon`,svgTemplate:V`
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
    `}),qI=U({name:`Document24Icon`,svgTemplate:V`
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
    `}),JI=U({name:`DocumentSearch24Icon`,svgTemplate:V`
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
    `}),YI=U({name:`DoubleChevron24Icon`,svgTemplate:V`
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
    `}),XI=U({name:`Element24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),ZI=U({name:`ExternalLink24Icon`,svgTemplate:V`
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
    `}),QI=U({name:`EyeClosed24Icon`,svgTemplate:V`
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
    `}),$I=U({name:`EyeOpen24Icon`,svgTemplate:V`
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
    `}),eL=U({name:`Filter24Icon`,svgTemplate:V`
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
    `}),tL=U({name:`Globe24Icon`,svgTemplate:V`
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
    `}),nL=U({name:`Link24Icon`,svgTemplate:V`
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
    `}),rL=U({name:`Loader24Icon`,svgTemplate:V`
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
    `}),iL=U({name:`LoaderAnimated24Icon`,svgTemplate:V`
        <style>
            ${z`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${dF[`vira-extended-animation-duration`].value} linear
            loader-animated-spin infinite;
    }
`}
        </style>
        ${rL.svgTemplate}
    `}),aL=U({name:`Lock24Icon`,svgTemplate:V`
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
    `}),oL=U({name:`MagnifyingGlass24Icon`,svgTemplate:V`
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
    `}),sL=U({name:`Moon24Icon`,svgTemplate:V`
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
    `}),cL=U({name:`Options24Icon`,svgTemplate:V`
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
    `}),lL=U({name:`Pencil24Icon`,svgTemplate:V`
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
    `}),uL=U({name:`Plus24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M12 5v14M5 12h14"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),dL=U({name:`Printer24Icon`,svgTemplate:V`
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
    `}),fL=U({name:`Shield24Icon`,svgTemplate:V`
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
    `}),pL=U({name:`SortAscending24Icon`,svgTemplate:V`
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
    `}),mL=U({name:`SortDescending24Icon`,svgTemplate:V`
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
    `}),hL=U({name:`Sparkle24Icon`,svgTemplate:V`
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
    `}),gL=U({name:`SpeakerLoud24Icon`,svgTemplate:V`
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
    `}),_L=U({name:`SpeakerMedium24Icon`,svgTemplate:V`
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
    `}),vL=U({name:`SpeakerMuted24Icon`,svgTemplate:V`
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
    `}),yL=U({name:`SpeakerQuiet24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />
        </svg>
    `}),bL=U({name:`Star24Icon`,svgTemplate:V`
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
    `}),xL=U({name:`StatusFailure24Icon`,svgTemplate:V`
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
    `}),SL=U({name:`StatusInProgress24Icon`,svgTemplate:V`
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
    `}),CL=U({name:`StatusSuccess24Icon`,svgTemplate:V`
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
    `}),wL=U({name:`StatusUnknown24Icon`,svgTemplate:V`
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
    `}),TL=U({name:`StatusWarning24Icon`,svgTemplate:V`
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
    `}),EL=U({name:`Sun24Icon`,svgTemplate:V`
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
    `}),DL=U({name:`Upload24Icon`,svgTemplate:V`
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
    `}),OL=U({name:`X24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `});function kL(e,t){let n=z`
        ${Tu(De(t).map(e=>{if(t[e])return`${H[e].name}: ${String(t[e])};`}).filter(A.isTruthy).join(` `))}
        display: inline-flex;
        vertical-align: middle;
    `;return U({name:e.name,svgTemplate:V`
            <div style=${n}>${e.svgTemplate}</div>
        `})}var AL={ArrowDown24Icon:FI,ArrowLeft24Icon:II,ArrowRight24Icon:LI,ArrowUp24Icon:RI,AutoTheme24Icon:zI,Bell24Icon:BI,Chat24Icon:VI,Check16Icon:OI,Check24Icon:tF,ChevronDown16Icon:kI,ChevronDown24Icon:HI,ChevronUp16Icon:AI,ChevronUp24Icon:UI,CloseX24Icon:WI,Commit24Icon:GI,Copy24Icon:KI,Dash16Icon:jI,Document24Icon:qI,DocumentSearch24Icon:JI,DoubleChevron24Icon:YI,Element16Icon:MI,Element24Icon:XI,ExternalLink24Icon:ZI,EyeClosed24Icon:QI,EyeOpen24Icon:$I,Filter24Icon:eL,Globe24Icon:tL,Link24Icon:nL,Loader24Icon:rL,LoaderAnimated24Icon:iL,Lock24Icon:aL,MagnifyingGlass24Icon:oL,Moon24Icon:sL,Options24Icon:cL,Pencil24Icon:lL,Plus24Icon:uL,Printer24Icon:dL,Shield24Icon:fL,SortAscending24Icon:pL,SortDescending24Icon:mL,Sparkle24Icon:hL,SpeakerLoud24Icon:gL,SpeakerMedium24Icon:_L,SpeakerMuted24Icon:vL,SpeakerQuiet24Icon:yL,Star24Icon:bL,StatusFailure24Icon:xL,StatusInProgress24Icon:SL,StatusSuccess24Icon:CL,StatusUnknown24Icon:wL,StatusWarning24Icon:TL,Sun24Icon:EL,Upload16Icon:NI,Upload24Icon:DL,X16Icon:PI,X24Icon:OL},jL={value:z`transparent`},ML={[q.Plain]:{[EF.Standard]:{idle:{backgroundColor:G.inverse[iF].background,textColor:G.inverse[iF].foreground,borderColor:G.inverse[iF].background},hover:{backgroundColor:G.colors[`vira-grey-behind-bg-non-body`].background,textColor:G.colors[`vira-grey-behind-bg-non-body`].foreground,borderColor:G.inverse[iF].background},active:{backgroundColor:G.colors[`vira-grey-behind-bg-body`].background,textColor:G.colors[`vira-grey-behind-bg-body`].foreground,borderColor:G.inverse[iF].background}},[EF.Subtle]:{idle:{backgroundColor:jL,textColor:G.colors[iF].foreground,borderColor:jL},hover:{backgroundColor:G.colors[`vira-grey-on-self-body`].background,textColor:G.colors[`vira-grey-on-self-body`].foreground,borderColor:G.colors[`vira-grey-on-self-body`].foreground},active:{backgroundColor:G.colors[`vira-grey-on-self-non-body`].background,textColor:G.colors[`vira-grey-on-self-non-body`].foreground,borderColor:G.colors[`vira-grey-on-self-non-body`].foreground}}},[q.Accent]:{[EF.Standard]:{idle:{backgroundColor:G.colors[`vira-accent-behind-bg-non-body`].background,textColor:G.colors[`vira-accent-behind-bg-non-body`].foreground,borderColor:G.colors[`vira-accent-behind-bg-body`].background},hover:{backgroundColor:G.colors[`vira-accent-behind-bg-header`].background,textColor:G.colors[`vira-accent-behind-bg-header`].foreground,borderColor:G.colors[`vira-accent-behind-bg-body`].background},active:{backgroundColor:G.colors[`vira-accent-behind-bg-body`].background,textColor:G.colors[`vira-accent-behind-bg-body`].foreground,borderColor:G.colors[`vira-accent-behind-bg-body`].background}},[EF.Subtle]:{idle:{backgroundColor:jL,textColor:G.colors[`vira-accent-foreground-non-body`].foreground,borderColor:jL},hover:{backgroundColor:G.colors[`vira-accent-on-self-body`].background,textColor:G.colors[`vira-accent-on-self-body`].foreground,borderColor:G.colors[`vira-accent-on-self-body`].foreground},active:{backgroundColor:G.colors[`vira-accent-on-self-non-body`].background,textColor:G.colors[`vira-accent-on-self-non-body`].foreground,borderColor:G.colors[`vira-accent-on-self-non-body`].foreground}}},[q.Neutral]:{[EF.Standard]:{idle:{backgroundColor:G.colors[iF].background,textColor:G.colors[iF].foreground,borderColor:K[`vira-form-border-color`]},hover:{backgroundColor:G.colors[`vira-grey-behind-fg-small-body`].background,textColor:G.colors[`vira-grey-behind-fg-small-body`].foreground,borderColor:K[`vira-form-border-color`]},active:{backgroundColor:G.colors[`vira-grey-behind-fg-body`].background,textColor:G.colors[`vira-grey-behind-fg-body`].foreground,borderColor:K[`vira-form-border-color`]}},[EF.Subtle]:{idle:{backgroundColor:jL,textColor:G.colors[`vira-grey-foreground-non-body`].foreground,borderColor:jL},hover:{backgroundColor:G.colors[`vira-grey-on-self-body`].background,textColor:G.colors[`vira-grey-on-self-body`].foreground,borderColor:G.colors[`vira-grey-on-self-body`].foreground},active:{backgroundColor:G.colors[`vira-grey-on-self-non-body`].background,textColor:G.colors[`vira-grey-on-self-non-body`].foreground,borderColor:G.colors[`vira-grey-on-self-non-body`].foreground}}},[q.Danger]:{[EF.Standard]:{idle:{backgroundColor:G.colors[`vira-red-behind-bg-non-body`].background,textColor:G.colors[`vira-red-behind-bg-non-body`].foreground,borderColor:G.colors[`vira-red-behind-bg-body`].background},hover:{backgroundColor:G.colors[`vira-red-behind-bg-header`].background,textColor:G.colors[`vira-red-behind-bg-header`].foreground,borderColor:G.colors[`vira-red-behind-bg-body`].background},active:{backgroundColor:G.colors[`vira-red-behind-bg-body`].background,textColor:G.colors[`vira-red-behind-bg-body`].foreground,borderColor:G.colors[`vira-red-behind-bg-body`].background}},[EF.Subtle]:{idle:{backgroundColor:jL,textColor:G.colors[`vira-red-foreground-non-body`].foreground,borderColor:jL},hover:{backgroundColor:G.colors[`vira-red-on-self-body`].background,textColor:G.colors[`vira-red-on-self-body`].foreground,borderColor:G.colors[`vira-red-on-self-body`].foreground},active:{backgroundColor:G.colors[`vira-red-on-self-non-body`].background,textColor:G.colors[`vira-red-on-self-non-body`].foreground,borderColor:G.colors[`vira-red-on-self-non-body`].foreground}}},[q.Warning]:{[EF.Standard]:{idle:{backgroundColor:G.colors[`vira-yellow-behind-bg-non-body`].background,textColor:G.colors[`vira-yellow-behind-bg-non-body`].foreground,borderColor:G.colors[`vira-yellow-behind-bg-body`].background},hover:{backgroundColor:G.colors[`vira-yellow-behind-bg-header`].background,textColor:G.colors[`vira-yellow-behind-bg-header`].foreground,borderColor:G.colors[`vira-yellow-behind-bg-body`].background},active:{backgroundColor:G.colors[`vira-yellow-behind-bg-body`].background,textColor:G.colors[`vira-yellow-behind-bg-body`].foreground,borderColor:G.colors[`vira-yellow-behind-bg-body`].background}},[EF.Subtle]:{idle:{backgroundColor:jL,textColor:G.colors[`vira-yellow-foreground-non-body`].foreground,borderColor:jL},hover:{backgroundColor:G.colors[`vira-yellow-on-self-body`].background,textColor:G.colors[`vira-yellow-on-self-body`].foreground,borderColor:G.colors[`vira-yellow-on-self-body`].foreground},active:{backgroundColor:G.colors[`vira-yellow-on-self-non-body`].background,textColor:G.colors[`vira-yellow-on-self-non-body`].foreground,borderColor:G.colors[`vira-yellow-on-self-non-body`].foreground}}},[q.Positive]:{[EF.Standard]:{idle:{backgroundColor:G.colors[`vira-green-behind-bg-non-body`].background,textColor:G.colors[`vira-green-behind-bg-non-body`].foreground,borderColor:G.colors[`vira-green-behind-bg-body`].background},hover:{backgroundColor:G.colors[`vira-green-behind-bg-header`].background,textColor:G.colors[`vira-green-behind-bg-header`].foreground,borderColor:G.colors[`vira-green-behind-bg-body`].background},active:{backgroundColor:G.colors[`vira-green-behind-bg-body`].background,textColor:G.colors[`vira-green-behind-bg-body`].foreground,borderColor:G.colors[`vira-green-behind-bg-body`].background}},[EF.Subtle]:{idle:{backgroundColor:jL,textColor:G.colors[`vira-green-foreground-non-body`].foreground,borderColor:jL},hover:{backgroundColor:G.colors[`vira-green-on-self-body`].background,textColor:G.colors[`vira-green-on-self-body`].foreground,borderColor:G.colors[`vira-green-on-self-body`].foreground},active:{backgroundColor:G.colors[`vira-green-on-self-non-body`].background,textColor:G.colors[`vira-green-on-self-non-body`].foreground,borderColor:G.colors[`vira-green-on-self-non-body`].foreground}}}},NL=FF()({tagName:`vira-button`,hostClasses:{"vira-button-with-menu-caret":({inputs:e})=>!!e.showMenuCaret,"vira-button-size-large":({inputs:e})=>e.buttonSize===wF.Large,"vira-button-size-medium":({inputs:e})=>!e.buttonSize||e.buttonSize===wF.Medium,"vira-button-size-small":({inputs:e})=>e.buttonSize===wF.Small,"vira-button-emphasis-standard":({inputs:e})=>!e.buttonEmphasis||e.buttonEmphasis===EF.Standard,"vira-button-emphasis-subtle":({inputs:e})=>e.buttonEmphasis===EF.Subtle,"vira-button-color-accent":({inputs:e})=>!e.colorVariant||e.colorVariant===q.Accent,"vira-button-color-plain":({inputs:e})=>e.colorVariant===q.Plain,"vira-button-color-neutral":({inputs:e})=>e.colorVariant===q.Neutral,"vira-button-color-danger":({inputs:e})=>e.colorVariant===q.Danger,"vira-button-color-warning":({inputs:e})=>e.colorVariant===q.Warning,"vira-button-color-positive":({inputs:e})=>e.colorVariant===q.Positive,"vira-button-disabled":({inputs:e})=>!!e.isDisabled,"vira-button-icon-only":({inputs:e})=>!e.text&&!!e.icon},cssVars:{"vira-button-text-color":`transparent`,"vira-button-background-color":`transparent`,"vira-button-border-color":`transparent`,"vira-button-hover-text-color":`transparent`,"vira-button-hover-background-color":`transparent`,"vira-button-hover-border-color":`transparent`,"vira-button-active-text-color":`transparent`,"vira-button-active-background-color":`transparent`,"vira-button-active-border-color":`transparent`,"vira-button-disabled-text-color":G.colors[`vira-grey-behind-bg-decoration`].foreground.value,"vira-button-disabled-background-color":G.colors[`vira-grey-behind-bg-decoration`].background.value,"vira-button-disabled-border-color":G.colors[`vira-grey-behind-bg-decoration`].background.value,"vira-button-border-width":`1px`,"vira-button-border-radius":K[`vira-form-radius`].value},styles:({hostClasses:e,cssVars:t})=>{function n(){return Tu(DF.flatMap(n=>CF.map(r=>{let i=ML[r][n];return z`
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
`))}function r(){return Tu(TF.map(t=>z`
                    ${e[`vira-button-size-${t}`].selector} {
                        font-size: ${K[`vira-form-${t}-text-size`].value};

                        button {
                            min-height: ${OF[t]}px;
                            padding: 2px
                                ${K[`vira-form-${t}-text-size`].value};
                        }

                        &${e[`vira-button-icon-only`].selector} {
                            min-width: ${OF[t]}px;
                        }
                    }
                `).join(`
`))}return z`
            :host {
                cursor: pointer;
                display: inline-flex;
                position: relative;
                vertical-align: middle;
                align-items: center;
                box-sizing: border-box;
                ${NF};
                ${K[`vira-form-focus-outline-color`].name}: ${K[`vira-form-accent-primary-hover-color`].value}
            }

            ${r()}
            ${n()}

            button {
                ${AF};
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

                ${pF({elementBorderSize:t[`vira-button-border-width`]})}
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
              `:j,n=e.text?V`
                  <span class="text-template">${e.text}</span>
              `:V`
                  <span class="empty-text">&nbsp;</span>
              `,r=e.showMenuCaret?V`
                  <${J.assign({icon:kI})}
                      class="caret-icon"
                  ></${J}>
              `:j;return V`
            <button ?disabled=${e.isDisabled}>
                ${t}${n}${r}
            </button>
        `}}),PL;(function(e){e.Error=`error`,e.Success=`success`})(PL||={});var FL=FF()({tagName:`vira-card`,hostClasses:{"vira-card-error":({inputs:e})=>e.cardState===PL.Error,"vira-card-success":({inputs:e})=>e.cardState===PL.Success},cssVars:{"vira-card-border":z`1px solid ${K[`vira-form-border-color`].value}`,"vira-card-padding":K[`vira-form-wrapper-radius`].value},styles:({hostClasses:e,cssVars:t})=>z`
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
        `}}),IL=FF()({tagName:`vira-checkbox`,hostClasses:{"vira-checkbox-horizontal":({inputs:e})=>!!e.horizontal,"vira-checkbox-filled-checked":({inputs:e})=>!!e.fillWhenChecked,"vira-checkbox-filled-unchecked":({inputs:e})=>!!e.fillWhenUnchecked},styles:({hostClasses:e})=>z`
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

            ${pF({elementBorderSize:`1px`})}

            &.checked {
                & ${J} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${K[`vira-form-error-color`].value};
            }

            &.disabled {
                ${uF};
            }
        }

        ${e[`vira-checkbox-horizontal`].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,events:{valueChange:JM()},render({inputs:e,dispatch:t,events:n}){function r(){e.disabled||t(new n.valueChange(!e.value))}let i=e.label?V`
                  <span
                      class="label-text"
                      ${hN(e.attributePassthrough?.text)}
                      style=${wM(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:j;return V`
            <label
                class=${CM({disabled:!!e.disabled})}
                ${hN(e.attributePassthrough?.label)}
                style=${wM(e.stylePassthrough?.label)}
                ${B(`mousedown`,r)}
            >
                ${i}
                <span
                    class="custom-checkbox ${CM({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${wM(e.label||void 0)}
                    aria-checked=${e.value?`true`:`false`}
                    aria-disabled=${e.disabled?`true`:`false`}
                    tabindex=${e.disabled?`-1`:`0`}
                    ${hN(e.attributePassthrough?.[`custom-checkbox`])}
                    style=${wM(e.stylePassthrough?.[`custom-checkbox`])}
                    ${vN(r)}
                >
                    <${J.assign({icon:tF,fitContainer:!0})}
                        ${hN(e.attributePassthrough?.[J.tagName])}
                        style=${wM(e.stylePassthrough?.[J.tagName])}
                    ></${J}>
                </span>
            </label>
        `}}),LL=FF()({tagName:`vira-collapsible-wrapper`,state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expand-on-print":({inputs:e})=>!!e.expandOnPrint},slotNames:[`header`],styles:({hostClasses:e})=>z`
        :host {
            display: flex;
            flex-direction: column;
            max-width: 100%;
            box-sizing: border-box;
        }

        .header-wrapper {
            ${AF};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${dF[`vira-pretty-animation-duration`].value};
            overflow: hidden;

            &.collapsed {
                ${NF}
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
    `,events:{expandChange:JM()},render({state:e,slotNames:t,updateState:n,dispatch:r,events:i,inputs:a}){let o=a.expanded?z`
                  height: ${e.contentHeight}px;
              `:z`
                  height: 0;
              `;return V`
            <button
                class="header-wrapper"
                ${B(`click`,()=>{r(new i.expandChange(!a.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>

            <div
                class="collapsing-element ${CM({collapsed:!a.expanded})}"
                style=${o}
                disabled="disabled"
            >
                <div
                    ${wN(({contentRect:e})=>{n({contentHeight:e.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),RL=FF()({tagName:`vira-collapsible-card`,testIds:[`openCaret`],events:{expandToggle:JM()},state({inputs:e}){return{isExpanded:!!e.startExpanded}},hostClasses:{"vira-collapsible-card-expanded":({state:e})=>e.isExpanded,"vira-collapsible-card-expansion-blocked":({inputs:e})=>!!e.blockExpansion,"vira-collapsible-card-card-styles":({inputs:e})=>!e.rawCollapsible},cssVars:{"vira-collapsible-card-content-gap":`16px`},styles:({hostClasses:e,cssVars:t})=>z`
        :host {
            display: inline-flex;
            max-width: 100%;
            box-sizing: border-box;
        }

        ${e[`vira-collapsible-card-expanded`].selector} .open-caret {
            transform: rotate(180deg);
        }

        ${LL} {
            flex-grow: 1;
            max-width: 100%;
        }

        ${e[`vira-collapsible-card-card-styles`].selector} {
            & ${LL} {
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
            ${LL} {
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
                  `:j,c=e.hideHeader?j:V`
                  <div class="card-header">
                      <slot name=${t.header}><div class="header-filler"></div></slot>

                      ${e.blockExpansion?j:V`
                                <${J.assign({icon:AI,fitContainer:!0})}
                                    ${jN(i.openCaret)}
                                    class="open-caret"
                                ></${J}>
                            `}
                  </div>
              `;return V`
            <${LL.assign({expanded:n.isExpanded,expandOnPrint:e.expandOnPrint??!1})}
                ${B(LL.events.expandChange,t=>{t.stopImmediatePropagation(),!e.blockExpansion&&(r({isExpanded:t.detail}),a(new o.expandToggle(t.detail)))})}
            >
                <div class="header-wrapper" slot=${LL.slotNames.header}>
                    ${c}
                </div>
                ${s}
            </${LL}>
        `}}),zL;(function(e){e.a98=`a98`,e.cubehelix=`cubehelix`,e.dlab=`dlab`,e.dlch=`dlch`,e.hsi=`hsi`,e.hsl=`hsl`,e.hsv=`hsv`,e.hwb=`hwb`,e.itp=`itp`,e.jab=`jab`,e.jch=`jch`,e.lab=`lab`,e.lab65=`lab65`,e.lch=`lch`,e.lch65=`lch65`,e.lchuv=`lchuv`,e.lrgb=`lrgb`,e.luv=`luv`,e.okhsl=`okhsl`,e.okhsv=`okhsv`,e.oklab=`oklab`,e.oklch=`oklch`,e.p3=`p3`,e.prophoto=`prophoto`,e.rec2020=`rec2020`,e.rgb=`rgb`,e.xyb=`xyb`,e.xyz50=`xyz50`,e.xyz65=`xyz65`,e.yiq=`yiq`})(zL||={});var BL={rgb:{coords:{r:{min:0,max:255,factor:255},g:{min:0,max:255,factor:255},b:{min:0,max:255,factor:255}},colorSpace:`rgb`},hex:{coords:{r:{min:0,max:255,factor:255,radix:16,radixPad:2},g:{min:0,max:255,factor:255,radix:16,radixPad:2},b:{min:0,max:255,factor:255,radix:16,radixPad:2}},conversionFormat:zL.rgb,rawSyntax:`hexString`,colorSpace:`rgb`},hsl:{coords:{h:{min:0,max:360},s:{min:0,max:100,factor:100,digits:1},l:{min:0,max:100,factor:100,digits:1}},colorSpace:`rgb`},hwb:{coords:{h:{min:0,max:360},w:{min:0,max:100,factor:100,digits:1},b:{min:0,max:100,factor:100,digits:1}},colorSpace:`rgb`},lab:{coords:{l:{min:0,max:100,digits:1},a:{min:-128,max:127},b:{min:-128,max:127}},colorSpace:`lab`},lch:{coords:{l:{min:0,max:100,digits:1},c:{min:0,max:230},h:{min:0,max:360}},colorSpace:`lab`},oklab:{coords:{l:{min:0,max:1,digits:3},a:{min:-.5,max:.5,digits:3},b:{min:-.5,max:.5,digits:3}},colorSpace:`oklab`},oklch:{coords:{l:{min:0,max:1,digits:3},c:{min:0,max:.4,digits:3},h:{min:0,max:360,digits:1}},colorSpace:`oklab`}},VL=Al(BL,e=>e),HL={...VL,name:`name`,hexString:`hexString`},UL=Al(BL,(e,t)=>{let n=A.isEnumValue(e,zL)&&A.isEnumValue(e,VL)?e:`conversionFormat`in t&&t.conversionFormat&&A.isEnumValue(t.conversionFormat,zL)&&A.isEnumValue(t.conversionFormat,VL)?t.conversionFormat:void 0;return Fc.isTruthy(n,`Invalid conversion format for color format '${e}' ${y(t)}.`),{...t,colorFormat:e,conversionFormat:n,rawSyntax:Ac.isEnumValue(`rawSyntax`in t&&t.rawSyntax?t.rawSyntax:e,HL)}});Yc(Nl(BL),e=>({key:e.colorSpace,value:e.colorSpace}),{useRequired:!0}),Kc(UL).reduce((e,[t,n])=>(Gc(e,n.colorSpace,()=>({}))[t]=n,e),{});function WL(e){return e.startsWith(`rgb`)?HL.rgb:e.startsWith(`hsl`)?HL.hsl:e.startsWith(`hwb`)?HL.hwb:e.startsWith(`oklab`)?HL.oklab:e.startsWith(`oklch`)?HL.oklch:e.startsWith(`lab`)?HL.lab:e.startsWith(`lch`)?HL.lch:e.startsWith(`#`)?HL.hexString:HL.name}var GL={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(let e in GL)Object.freeze(GL[e]);var KL=Object.freeze(GL),qL=Object.keys(KL).reduce((e,t)=>t.length>e.length?t:e),JL=jl(Al(KL,(e,t)=>Jc(Object.entries(KL),([e])=>e,(n,[,r])=>n===e?!1:A.deepEquals(r,t))),(e,t)=>!!t.length),YL=Object.entries(JL).reduce((e,t)=>{let n=[e[0],...e[1]].join(`, `);return[t[0],...t[1]].join(`, `).length>n.length?t:e}).reduce((e,t)=>A.isArray(t)?[...e,...t]:[...e,t],[]),XL=Math.max(qL.length,YL.length+(YL.length-1)*2),ZL=(e,t)=>{if(typeof e==`number`){if(t===3)return{mode:`rgb`,r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(t===4)return{mode:`rgb`,r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(t===6)return{mode:`rgb`,r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(t===8)return{mode:`rgb`,r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},QL={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$L=e=>ZL(QL[e.toLowerCase()],6),eR=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,tR=e=>{let t;return(t=e.match(eR))?ZL(parseInt(t[1],16),t[1].length):void 0},nR=`([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)`;`${nR}`;var rR=`${nR}%`;`${nR}`;var iR=`(?:${nR}%|${nR})`,aR=`(?:${nR}%|${nR}|none)`,oR=`(?:${nR}(deg|grad|rad|turn)|${nR})`;`${nR}${nR}`;var sR=`\\s*,\\s*`;RegExp(`^`+aR+`$`);var cR=RegExp(`^rgba?\\(\\s*${nR}${sR}${nR}${sR}${nR}\\s*(?:,\\s*${iR}\\s*)?\\)$`),lR=RegExp(`^rgba?\\(\\s*${rR}${sR}${rR}${sR}${rR}\\s*(?:,\\s*${iR}\\s*)?\\)$`),uR=e=>{let t={mode:`rgb`},n;if(n=e.match(cR))n[1]!==void 0&&(t.r=n[1]/255),n[2]!==void 0&&(t.g=n[2]/255),n[3]!==void 0&&(t.b=n[3]/255);else if(n=e.match(lR))n[1]!==void 0&&(t.r=n[1]/100),n[2]!==void 0&&(t.g=n[2]/100),n[3]!==void 0&&(t.b=n[3]/100);else return;return n[4]===void 0?n[5]!==void 0&&(t.alpha=Math.max(0,Math.min(1,+n[5]))):t.alpha=Math.max(0,Math.min(1,n[4]/100)),t},dR=(e,t)=>e===void 0?void 0:typeof e==`object`?e.mode===void 0?t?{...e,mode:t}:void 0:e:PR(e),fR=(e=`rgb`)=>t=>(t=dR(t,e))===void 0?void 0:t.mode===e?t:pR[t.mode][e]?pR[t.mode][e](t):e===`rgb`?pR[t.mode].rgb(t):pR.rgb[e](pR[t.mode].rgb(t)),pR={},mR={},hR=[],gR={},_R=e=>e,vR=e=>(pR[e.mode]={...pR[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(t=>{pR[t]||(pR[t]={}),pR[t][e.mode]=e.fromMode[t]}),e.ranges||={},e.difference||={},e.channels.forEach(t=>{if(e.ranges[t]===void 0&&(e.ranges[t]=[0,1]),!e.interpolate[t])throw Error(`Missing interpolator for: ${t}`);typeof e.interpolate[t]==`function`&&(e.interpolate[t]={use:e.interpolate[t]}),e.interpolate[t].fixup||(e.interpolate[t].fixup=_R)}),mR[e.mode]=e,(e.parse||[]).forEach(t=>{bR(t,e.mode)}),fR(e.mode)),yR=e=>mR[e],bR=(e,t)=>{if(typeof e==`string`){if(!t)throw Error(`'mode' required when 'parser' is a string`);gR[e]=t}else typeof e==`function`&&hR.indexOf(e)<0&&hR.push(e)},xR=/[^\x00-\x7F]|[a-zA-Z_]/,SR=/[^\x00-\x7F]|[-\w]/,Y={Function:`function`,Ident:`ident`,Number:`number`,Percentage:`percentage`,ParenClose:`)`,None:`none`,Hue:`hue`,Alpha:`alpha`},X=0;function CR(e){let t=e[X],n=e[X+1];return t===`-`||t===`+`?/\d/.test(n)||n===`.`&&/\d/.test(e[X+2]):t===`.`?/\d/.test(n):/\d/.test(t)}function wR(e){if(X>=e.length)return!1;let t=e[X];if(xR.test(t))return!0;if(t===`-`){if(e.length-X<2)return!1;let t=e[X+1];return!!(t===`-`||xR.test(t))}return!1}var TR={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function ER(e){let t=``;if((e[X]===`-`||e[X]===`+`)&&(t+=e[X++]),t+=DR(e),e[X]===`.`&&/\d/.test(e[X+1])&&(t+=e[X++]+DR(e)),(e[X]===`e`||e[X]===`E`)&&((e[X+1]===`-`||e[X+1]===`+`)&&/\d/.test(e[X+2])?t+=e[X++]+e[X++]+DR(e):/\d/.test(e[X+1])&&(t+=e[X++]+DR(e))),wR(e)){let n=OR(e);return n===`deg`||n===`rad`||n===`turn`||n===`grad`?{type:Y.Hue,value:t*TR[n]}:void 0}return e[X]===`%`?(X++,{type:Y.Percentage,value:+t}):{type:Y.Number,value:+t}}function DR(e){let t=``;for(;/\d/.test(e[X]);)t+=e[X++];return t}function OR(e){let t=``;for(;X<e.length&&SR.test(e[X]);)t+=e[X++];return t}function kR(e){let t=OR(e);return e[X]===`(`?(X++,{type:Y.Function,value:t}):t===`none`?{type:Y.None,value:void 0}:{type:Y.Ident,value:t}}function AR(e=``){let t=e.trim(),n=[],r;for(X=0;X<t.length;){if(r=t[X++],r===`
`||r===`	`||r===` `){for(;X<t.length&&(t[X]===`
`||t[X]===`	`||t[X]===` `);)X++;continue}if(r===`,`)return;if(r===`)`){n.push({type:Y.ParenClose});continue}if(r===`+`){if(X--,CR(t)){n.push(ER(t));continue}return}if(r===`-`){if(X--,CR(t)){n.push(ER(t));continue}if(wR(t)){n.push({type:Y.Ident,value:OR(t)});continue}return}if(r===`.`){if(X--,CR(t)){n.push(ER(t));continue}return}if(r===`/`){for(;X<t.length&&(t[X]===`
`||t[X]===`	`||t[X]===` `);)X++;let e;if(CR(t)&&(e=ER(t),e.type!==Y.Hue)){n.push({type:Y.Alpha,value:e});continue}if(wR(t)&&OR(t)===`none`){n.push({type:Y.Alpha,value:{type:Y.None,value:void 0}});continue}return}if(/\d/.test(r)){X--,n.push(ER(t));continue}if(xR.test(r)){X--,n.push(kR(t));continue}return}return n}function jR(e){e._i=0;let t=e[e._i++];if(!t||t.type!==Y.Function||t.value!==`color`||(t=e[e._i++],t.type!==Y.Ident))return;let n=gR[t.value];if(!n)return;let r={mode:n},i=MR(e,!1);if(!i)return;let a=yR(n).channels;for(let e=0,t,n;e<a.length;e++)t=i[e],n=a[e],t.type!==Y.None&&(r[n]=t.type===Y.Number?t.value:t.value/100,n===`alpha`&&(r[n]=Math.max(0,Math.min(1,r[n]))));return r}function MR(e,t){let n=[],r;for(;e._i<e.length;){if(r=e[e._i++],r.type===Y.None||r.type===Y.Number||r.type===Y.Alpha||r.type===Y.Percentage||t&&r.type===Y.Hue){n.push(r);continue}if(r.type===Y.ParenClose){if(e._i<e.length)return;continue}return}if(!(n.length<3||n.length>4)){if(n.length===4){if(n[3].type!==Y.Alpha)return;n[3]=n[3].value}return n.length===3&&n.push({type:Y.None,value:void 0}),n.every(e=>e.type!==Y.Alpha)?n:void 0}}function NR(e,t){e._i=0;let n=e[e._i++];if(!n||n.type!==Y.Function)return;let r=MR(e,t);if(r)return r.unshift(n.value),r}var PR=e=>{if(typeof e!=`string`)return;let t=AR(e),n=t?NR(t,!0):void 0,r,i=0,a=hR.length;for(;i<a;)if((r=hR[i++](e,n))!==void 0)return r;return t?jR(t):void 0};function FR(e,t){if(!t||t[0]!==`rgb`&&t[0]!==`rgba`)return;let n={mode:`rgb`},[,r,i,a,o]=t;if(!(r.type===Y.Hue||i.type===Y.Hue||a.type===Y.Hue))return r.type!==Y.None&&(n.r=r.type===Y.Number?r.value/255:r.value/100),i.type!==Y.None&&(n.g=i.type===Y.Number?i.value/255:i.value/100),a.type!==Y.None&&(n.b=a.type===Y.Number?a.value/255:a.value/100),o.type!==Y.None&&(n.alpha=Math.min(1,Math.max(0,o.type===Y.Number?o.value:o.value/100))),n}var IR=e=>e===`transparent`?{mode:`rgb`,r:0,g:0,b:0,alpha:0}:void 0,LR=(e,t,n)=>e+n*(t-e),RR=e=>{let t=[];for(let n=0;n<e.length-1;n++){let r=e[n],i=e[n+1];r===void 0&&i===void 0?t.push(void 0):r!==void 0&&i!==void 0?t.push([r,i]):t.push(r===void 0?[i,i]:[r,r])}return t},Z=(e=>t=>{let n=RR(t);return t=>{let r=t*n.length,i=t>=1?n.length-1:Math.max(Math.floor(r),0),a=n[i];return a===void 0?void 0:e(a[0],a[1],r-i)}})(LR),zR=e=>{let t=!1,n=e.map(e=>e===void 0?1:(t=!0,e));return t?n:e},BR={mode:`rgb`,channels:[`r`,`g`,`b`,`alpha`],parse:[FR,tR,uR,$L,IR,`srgb`],serialize:`srgb`,interpolate:{r:Z,g:Z,b:Z,alpha:{use:Z,fixup:zR}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},VR=(e=0)=>Math.abs(e)**(563/256)*Math.sign(e),HR=e=>{let t=VR(e.r),n=VR(e.g),r=VR(e.b),i={mode:`xyz65`,x:.5766690429101305*t+.1855582379065463*n+.1882286462349947*r,y:.297344975250536*t+.6273635662554661*n+.0752914584939979*r,z:.0270313613864123*t+.0706888525358272*n+.9913375368376386*r};return e.alpha!==void 0&&(i.alpha=e.alpha),i},UR=e=>Math.abs(e)**(256/563)*Math.sign(e),WR=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`a98`,r:UR(e*2.0415879038107465-t*.5650069742788597-.3447313507783297*n),g:UR(e*-.9692436362808798+t*1.8759675015077206+.0415550574071756*n),b:UR(e*.0134442806320312-t*.1183623922310184+1.0151749943912058*n)};return r!==void 0&&(i.alpha=r),i},GR=(e=0)=>{let t=Math.abs(e);return t<=.04045?e/12.92:(Math.sign(e)||1)*((t+.055)/1.055)**2.4},KR=({r:e,g:t,b:n,alpha:r})=>{let i={mode:`lrgb`,r:GR(e),g:GR(t),b:GR(n)};return r!==void 0&&(i.alpha=r),i},qR=e=>{let{r:t,g:n,b:r,alpha:i}=KR(e),a={mode:`xyz65`,x:.4123907992659593*t+.357584339383878*n+.1804807884018343*r,y:.2126390058715102*t+.715168678767756*n+.0721923153607337*r,z:.0193308187155918*t+.119194779794626*n+.9505321522496607*r};return i!==void 0&&(a.alpha=i),a},JR=(e=0)=>{let t=Math.abs(e);return t>.0031308?(Math.sign(e)||1)*(1.055*t**(1/2.4)-.055):e*12.92},YR=({r:e,g:t,b:n,alpha:r},i=`rgb`)=>{let a={mode:i,r:JR(e),g:JR(t),b:JR(n)};return r!==void 0&&(a.alpha=r),a},XR=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=YR({r:e*3.2409699419045226-t*1.537383177570094-.4986107602930034*n,g:e*-.9692436362808796+t*1.8759675015077204+.0415550574071756*n,b:e*.0556300796969936-t*.2039769588889765+1.0569715142428784*n});return r!==void 0&&(i.alpha=r),i},ZR={...BR,mode:`a98`,parse:[`a98-rgb`],serialize:`a98-rgb`,fromMode:{rgb:e=>WR(qR(e)),xyz65:WR},toMode:{rgb:e=>XR(HR(e)),xyz65:HR}},QR=e=>(e%=360)<0?e+360:e,$R=(e,t)=>e.map((n,r,i)=>{if(n===void 0)return n;let a=QR(n);return r===0||e[r-1]===void 0?a:t(a-QR(i[r-1]))}).reduce((e,t)=>!e.length||t===void 0||e[e.length-1]===void 0?(e.push(t),e):(e.push(t+e[e.length-1]),e),[]),ez=e=>$R(e,e=>Math.abs(e)<=180?e:e-360*Math.sign(e)),tz=[-.14861,1.78277,-.29227,-.90649,1.97294,0],nz=Math.PI/180,rz=180/Math.PI,iz=tz[3]*tz[4],az=tz[1]*tz[4],oz=tz[1]*tz[2]-tz[0]*tz[3],sz=({r:e,g:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(oz*n+e*iz-t*az)/(oz+iz-az),a=n-i,o=(tz[4]*(t-i)-tz[2]*a)/tz[3],s={mode:`cubehelix`,l:i,s:i===0||i===1?void 0:Math.sqrt(a*a+o*o)/(tz[4]*i*(1-i))};return s.s&&(s.h=Math.atan2(o,a)*rz-120),r!==void 0&&(s.alpha=r),s},cz=({h:e,s:t,l:n,alpha:r})=>{let i={mode:`rgb`};e=(e===void 0?0:e+120)*nz,n===void 0&&(n=0);let a=t===void 0?0:t*n*(1-n),o=Math.cos(e),s=Math.sin(e);return i.r=n+a*(tz[0]*o+tz[1]*s),i.g=n+a*(tz[2]*o+tz[3]*s),i.b=n+a*(tz[4]*o+tz[5]*s),r!==void 0&&(i.alpha=r),i},lz=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.s||!t.s)return 0;let n=QR(e.h),r=QR(t.h),i=Math.sin((r-n+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*t.s)*i},uz=(e,t)=>{if(e.h===void 0||t.h===void 0)return 0;let n=QR(e.h),r=QR(t.h);return Math.abs(r-n)>180?n-(r-360*Math.sign(r-n)):r-n},dz=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.c||!t.c)return 0;let n=QR(e.h),r=QR(t.h),i=Math.sin((r-n+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*t.c)*i},fz=(e=`rgb`,t=[1,1,1,0])=>{let n=yR(e),r=n.channels,i=n.difference,a=fR(e);return(e,n)=>{let o=a(e),s=a(n);return Math.sqrt(r.reduce((e,n,r)=>{let a=i[n]?i[n](o,s):o[n]-s[n];return e+(t[r]||0)*(isNaN(a)?0:a)**2},0))}},pz=e=>{let t=e.reduce((e,t)=>{if(t!==void 0){let n=t*Math.PI/180;e.sin+=Math.sin(n),e.cos+=Math.cos(n)}return e},{sin:0,cos:0}),n=Math.atan2(t.sin,t.cos)*180/Math.PI;return n<0?360+n:n},mz={mode:`cubehelix`,channels:[`h`,`s`,`l`,`alpha`],parse:[`--cubehelix`],serialize:`--cubehelix`,ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:sz},toMode:{rgb:cz},interpolate:{h:{use:Z,fixup:ez},s:Z,l:Z,alpha:{use:Z,fixup:zR}},difference:{h:lz},average:{h:pz}},hz=({l:e,a:t,b:n,alpha:r},i=`lch`)=>{t===void 0&&(t=0),n===void 0&&(n=0);let a=Math.sqrt(t*t+n*n),o={mode:i,l:e,c:a};return a&&(o.h=QR(Math.atan2(n,t)*180/Math.PI)),r!==void 0&&(o.alpha=r),o},gz=({l:e,c:t,h:n,alpha:r},i=`lab`)=>{n===void 0&&(n=0);let a={mode:i,l:e,a:t?t*Math.cos(n/180*Math.PI):0,b:t?t*Math.sin(n/180*Math.PI):0};return r!==void 0&&(a.alpha=r),a},_z=29**3/3**3,vz=6**3/29**3,yz={X:.3457/.3585,Y:1,Z:.2958/.3585},bz={X:.3127/.329,Y:1,Z:.3583/.329},xz=e=>e**3>vz?e**3:(116*e-16)/_z,Sz=({l:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(e+16)/116,a=t/500+i,o=i-n/200,s={mode:`xyz65`,x:xz(a)*bz.X,y:xz(i)*bz.Y,z:xz(o)*bz.Z};return r!==void 0&&(s.alpha=r),s},Cz=e=>XR(Sz(e)),wz=e=>e>vz?Math.cbrt(e):(_z*e+16)/116,Tz=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=wz(e/bz.X),a=wz(t/bz.Y),o=wz(n/bz.Z),s={mode:`lab65`,l:116*a-16,a:500*(i-a),b:200*(a-o)};return r!==void 0&&(s.alpha=r),s},Ez=e=>{let t=Tz(qR(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},Dz=26/180*Math.PI,Oz=Math.cos(Dz),kz=Math.sin(Dz),Az=100/Math.log(139/100),jz=({l:e,c:t,h:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`lab65`,l:(Math.exp(e*1/Az)-1)/.0039},a=(Math.exp(.0435*t*1*1)-1)/.075,o=a*Math.cos(n/180*Math.PI-Dz),s=a*Math.sin(n/180*Math.PI-Dz);return i.a=o*Oz-s/.83*kz,i.b=o*kz+s/.83*Oz,r!==void 0&&(i.alpha=r),i},Mz=({l:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=t*Oz+n*kz,a=.83*(n*Oz-t*kz),o=Math.sqrt(i*i+a*a),s={mode:`dlch`,l:Az/1*Math.log(1+.0039*e),c:Math.log(1+.075*o)/(.0435*1*1)};return s.c&&(s.h=QR((Math.atan2(a,i)+Dz)/Math.PI*180)),r!==void 0&&(s.alpha=r),s},Nz=e=>jz(hz(e,`dlch`)),Pz=e=>gz(Mz(e),`dlab`),Fz={mode:`dlab`,parse:[`--din99o-lab`],serialize:`--din99o-lab`,toMode:{lab65:Nz,rgb:e=>Cz(Nz(e))},fromMode:{lab65:Pz,rgb:e=>Pz(Ez(e))},channels:[`l`,`a`,`b`,`alpha`],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:Z,a:Z,b:Z,alpha:{use:Z,fixup:zR}}},Iz={mode:`dlch`,parse:[`--din99o-lch`],serialize:`--din99o-lch`,toMode:{lab65:jz,dlab:e=>gz(e,`dlab`),rgb:e=>Cz(jz(e))},fromMode:{lab65:Mz,dlab:e=>hz(e,`dlch`),rgb:e=>Mz(Ez(e))},channels:[`l`,`c`,`h`,`alpha`],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:Z,c:Z,h:{use:Z,fixup:ez},alpha:{use:Z,fixup:zR}},difference:{h:dz},average:{h:pz}};function Lz({h:e,s:t,i:n,alpha:r}){e=QR(e===void 0?0:e),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.abs(e/60%2-1),a;switch(Math.floor(e/60)){case 0:a={r:n*(1+t*(3/(2-i)-1)),g:n*(1+t*(3*(1-i)/(2-i)-1)),b:n*(1-t)};break;case 1:a={r:n*(1+t*(3*(1-i)/(2-i)-1)),g:n*(1+t*(3/(2-i)-1)),b:n*(1-t)};break;case 2:a={r:n*(1-t),g:n*(1+t*(3/(2-i)-1)),b:n*(1+t*(3*(1-i)/(2-i)-1))};break;case 3:a={r:n*(1-t),g:n*(1+t*(3*(1-i)/(2-i)-1)),b:n*(1+t*(3/(2-i)-1))};break;case 4:a={r:n*(1+t*(3*(1-i)/(2-i)-1)),g:n*(1-t),b:n*(1+t*(3/(2-i)-1))};break;case 5:a={r:n*(1+t*(3/(2-i)-1)),g:n*(1-t),b:n*(1+t*(3*(1-i)/(2-i)-1))};break;default:a={r:n*(1-t),g:n*(1-t),b:n*(1-t)}}return a.mode=`rgb`,r!==void 0&&(a.alpha=r),a}function Rz({r:e,g:t,b:n,alpha:r}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.max(e,t,n),a=Math.min(e,t,n),o={mode:`hsi`,s:e+t+n===0?0:1-3*a/(e+t+n),i:(e+t+n)/3};return i-a!==0&&(o.h=(i===e?(t-n)/(i-a)+(t<n)*6:i===t?(n-e)/(i-a)+2:(e-t)/(i-a)+4)*60),r!==void 0&&(o.alpha=r),o}var zz={mode:`hsi`,toMode:{rgb:Lz},parse:[`--hsi`],serialize:`--hsi`,fromMode:{rgb:Rz},channels:[`h`,`s`,`i`,`alpha`],ranges:{h:[0,360]},gamut:`rgb`,interpolate:{h:{use:Z,fixup:ez},s:Z,i:Z,alpha:{use:Z,fixup:zR}},difference:{h:lz},average:{h:pz}};function Bz({h:e,s:t,l:n,alpha:r}){e=QR(e===void 0?0:e),t===void 0&&(t=0),n===void 0&&(n=0);let i=n+t*(n<.5?n:1-n),a=i-(i-n)*2*Math.abs(e/60%2-1),o;switch(Math.floor(e/60)){case 0:o={r:i,g:a,b:2*n-i};break;case 1:o={r:a,g:i,b:2*n-i};break;case 2:o={r:2*n-i,g:i,b:a};break;case 3:o={r:2*n-i,g:a,b:i};break;case 4:o={r:a,g:2*n-i,b:i};break;case 5:o={r:i,g:2*n-i,b:a};break;default:o={r:2*n-i,g:2*n-i,b:2*n-i}}return o.mode=`rgb`,r!==void 0&&(o.alpha=r),o}function Vz({r:e,g:t,b:n,alpha:r}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.max(e,t,n),a=Math.min(e,t,n),o={mode:`hsl`,s:i===a?0:(i-a)/(1-Math.abs(i+a-1)),l:.5*(i+a)};return i-a!==0&&(o.h=(i===e?(t-n)/(i-a)+(t<n)*6:i===t?(n-e)/(i-a)+2:(e-t)/(i-a)+4)*60),r!==void 0&&(o.alpha=r),o}var Hz=(e,t)=>{switch(t){case`deg`:return+e;case`rad`:return e/Math.PI*180;case`grad`:return e/10*9;case`turn`:return e*360}},Uz=RegExp(`^hsla?\\(\\s*${oR}${sR}${rR}${sR}${rR}\\s*(?:,\\s*${iR}\\s*)?\\)$`),Wz=e=>{let t=e.match(Uz);if(!t)return;let n={mode:`hsl`};return t[3]===void 0?t[1]!==void 0&&t[2]!==void 0&&(n.h=Hz(t[1],t[2])):n.h=+t[3],t[4]!==void 0&&(n.s=Math.min(Math.max(0,t[4]/100),1)),t[5]!==void 0&&(n.l=Math.min(Math.max(0,t[5]/100),1)),t[6]===void 0?t[7]!==void 0&&(n.alpha=Math.max(0,Math.min(1,+t[7]))):n.alpha=Math.max(0,Math.min(1,t[6]/100)),n};function Gz(e,t){if(!t||t[0]!==`hsl`&&t[0]!==`hsla`)return;let n={mode:`hsl`},[,r,i,a,o]=t;if(r.type!==Y.None){if(r.type===Y.Percentage)return;n.h=r.value}if(i.type!==Y.None){if(i.type===Y.Hue)return;n.s=i.value/100}if(a.type!==Y.None){if(a.type===Y.Hue)return;n.l=a.value/100}return o.type!==Y.None&&(n.alpha=Math.min(1,Math.max(0,o.type===Y.Number?o.value:o.value/100))),n}var Kz={mode:`hsl`,toMode:{rgb:Bz},fromMode:{rgb:Vz},channels:[`h`,`s`,`l`,`alpha`],ranges:{h:[0,360]},gamut:`rgb`,parse:[Gz,Wz],serialize:e=>`hsl(${e.h===void 0?`none`:e.h} ${e.s===void 0?`none`:e.s*100+`%`} ${e.l===void 0?`none`:e.l*100+`%`}${e.alpha<1?` / ${e.alpha}`:``})`,interpolate:{h:{use:Z,fixup:ez},s:Z,l:Z,alpha:{use:Z,fixup:zR}},difference:{h:lz},average:{h:pz}};function qz({h:e,s:t,v:n,alpha:r}){e=QR(e===void 0?0:e),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.abs(e/60%2-1),a;switch(Math.floor(e/60)){case 0:a={r:n,g:n*(1-t*i),b:n*(1-t)};break;case 1:a={r:n*(1-t*i),g:n,b:n*(1-t)};break;case 2:a={r:n*(1-t),g:n,b:n*(1-t*i)};break;case 3:a={r:n*(1-t),g:n*(1-t*i),b:n};break;case 4:a={r:n*(1-t*i),g:n*(1-t),b:n};break;case 5:a={r:n,g:n*(1-t),b:n*(1-t*i)};break;default:a={r:n*(1-t),g:n*(1-t),b:n*(1-t)}}return a.mode=`rgb`,r!==void 0&&(a.alpha=r),a}function Jz({r:e,g:t,b:n,alpha:r}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.max(e,t,n),a=Math.min(e,t,n),o={mode:`hsv`,s:i===0?0:1-a/i,v:i};return i-a!==0&&(o.h=(i===e?(t-n)/(i-a)+(t<n)*6:i===t?(n-e)/(i-a)+2:(e-t)/(i-a)+4)*60),r!==void 0&&(o.alpha=r),o}var Yz={mode:`hsv`,toMode:{rgb:qz},parse:[`--hsv`],serialize:`--hsv`,fromMode:{rgb:Jz},channels:[`h`,`s`,`v`,`alpha`],ranges:{h:[0,360]},gamut:`rgb`,interpolate:{h:{use:Z,fixup:ez},s:Z,v:Z,alpha:{use:Z,fixup:zR}},difference:{h:lz},average:{h:pz}};function Xz({h:e,w:t,b:n,alpha:r}){if(t===void 0&&(t=0),n===void 0&&(n=0),t+n>1){let e=t+n;t/=e,n/=e}return qz({h:e,s:n===1?1:1-t/(1-n),v:1-n,alpha:r})}function Zz(e){let t=Jz(e);if(t===void 0)return;let n=t.s===void 0?0:t.s,r=t.v===void 0?0:t.v,i={mode:`hwb`,w:(1-n)*r,b:1-r};return t.h!==void 0&&(i.h=t.h),t.alpha!==void 0&&(i.alpha=t.alpha),i}function Qz(e,t){if(!t||t[0]!==`hwb`)return;let n={mode:`hwb`},[,r,i,a,o]=t;if(r.type!==Y.None){if(r.type===Y.Percentage)return;n.h=r.value}if(i.type!==Y.None){if(i.type===Y.Hue)return;n.w=i.value/100}if(a.type!==Y.None){if(a.type===Y.Hue)return;n.b=a.value/100}return o.type!==Y.None&&(n.alpha=Math.min(1,Math.max(0,o.type===Y.Number?o.value:o.value/100))),n}var $z={mode:`hwb`,toMode:{rgb:Xz},fromMode:{rgb:Zz},channels:[`h`,`w`,`b`,`alpha`],ranges:{h:[0,360]},gamut:`rgb`,parse:[Qz],serialize:e=>`hwb(${e.h===void 0?`none`:e.h} ${e.w===void 0?`none`:e.w*100+`%`} ${e.b===void 0?`none`:e.b*100+`%`}${e.alpha<1?` / ${e.alpha}`:``})`,interpolate:{h:{use:Z,fixup:ez},w:Z,b:Z,alpha:{use:Z,fixup:zR}},difference:{h:uz},average:{h:pz}},eB=.1593017578125,tB=78.84375,nB=.8359375,rB=18.8515625,iB=18.6875;function aB(e){if(e<0)return 0;let t=e**(1/tB);return 1e4*(Math.max(0,t-nB)/(rB-iB*t))**(1/eB)}function oB(e){if(e<0)return 0;let t=(e/1e4)**eB;return((nB+rB*t)/(1+iB*t))**+tB}var sB=e=>Math.max(e/203,0),cB=({i:e,t,p:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=aB(e+.008609037037932761*t+.11102962500302593*n),a=aB(e-.00860903703793275*t-.11102962500302599*n),o=aB(e+.5600313357106791*t-.32062717498731885*n),s={mode:`xyz65`,x:sB(2.070152218389422*i-1.3263473389671556*a+.2066510476294051*o),y:sB(.3647385209748074*i+.680566024947227*a-.0453045459220346*o),z:sB(-.049747207535812*i-.0492609666966138*a+1.1880659249923042*o)};return r!==void 0&&(s.alpha=r),s},lB=(e=0)=>Math.max(e*203,0),uB=({x:e,y:t,z:n,alpha:r})=>{let i=lB(e),a=lB(t),o=lB(n),s=oB(.3592832590121217*i+.6976051147779502*a-.0358915932320289*o),c=oB(-.1920808463704995*i+1.1004767970374323*a+.0753748658519118*o),l=oB(.0070797844607477*i+.0748396662186366*a+.8433265453898765*o),u={mode:`itp`,i:.5*s+.5*c,t:1.61376953125*s-3.323486328125*c+1.709716796875*l,p:4.378173828125*s-4.24560546875*c-.132568359375*l};return r!==void 0&&(u.alpha=r),u},dB={mode:`itp`,channels:[`i`,`t`,`p`,`alpha`],parse:[`--ictcp`],serialize:`--ictcp`,toMode:{xyz65:cB,rgb:e=>XR(cB(e))},fromMode:{xyz65:uB,rgb:e=>uB(qR(e))},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:Z,t:Z,p:Z,alpha:{use:Z,fixup:zR}}},fB=134.03437499999998,pB=16295499532821565e-27,mB=e=>{if(e<0)return 0;let t=(e/1e4)**eB;return((nB+rB*t)/(1+iB*t))**+fB},hB=(e=0)=>Math.max(e*203,0),gB=({x:e,y:t,z:n,alpha:r})=>{e=hB(e),t=hB(t),n=hB(n);let i=1.15*e-.15*n,a=.66*t+.34*e,o=mB(.41478972*i+.579999*a+.014648*n),s=mB(-.20151*i+1.120649*a+.0531008*n),c=mB(-.0166008*i+.2648*a+.6684799*n),l=(o+s)/2,u={mode:`jab`,j:.44*l/(1-.56*l)-pB,a:3.524*o-4.066708*s+.542708*c,b:.199076*o+1.096799*s-1.295875*c};return r!==void 0&&(u.alpha=r),u},_B=134.03437499999998,vB=16295499532821565e-27,yB=e=>{if(e<0)return 0;let t=e**(1/_B);return 1e4*((nB-t)/(iB*t-rB))**(1/eB)},bB=e=>e/203,xB=({j:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(e+vB)/(.44+.56*(e+vB)),a=yB(i+.13860504*t+.058047316*n),o=yB(i-.13860504*t-.058047316*n),s=yB(i-.096019242*t-.8118919*n),c={mode:`xyz65`,x:bB(1.661373024652174*a-.914523081304348*o+.23136208173913045*s),y:bB(-.3250758611844533*a+1.571847026732543*o-.21825383453227928*s),z:bB(-.090982811*a-.31272829*o+1.5227666*s)};return r!==void 0&&(c.alpha=r),c},SB=e=>{let t=gB(qR(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},CB=e=>XR(xB(e)),wB={mode:`jab`,channels:[`j`,`a`,`b`,`alpha`],parse:[`--jzazbz`],serialize:`--jzazbz`,fromMode:{rgb:SB,xyz65:gB},toMode:{rgb:CB,xyz65:xB},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:Z,a:Z,b:Z,alpha:{use:Z,fixup:zR}}},TB=({j:e,a:t,b:n,alpha:r})=>{t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.sqrt(t*t+n*n),a={mode:`jch`,j:e,c:i};return i&&(a.h=QR(Math.atan2(n,t)*180/Math.PI)),r!==void 0&&(a.alpha=r),a},EB=({j:e,c:t,h:n,alpha:r})=>{n===void 0&&(n=0);let i={mode:`jab`,j:e,a:t?t*Math.cos(n/180*Math.PI):0,b:t?t*Math.sin(n/180*Math.PI):0};return r!==void 0&&(i.alpha=r),i},DB={mode:`jch`,parse:[`--jzczhz`],serialize:`--jzczhz`,toMode:{jab:EB,rgb:e=>CB(EB(e))},fromMode:{rgb:e=>TB(SB(e)),jab:TB},channels:[`j`,`c`,`h`,`alpha`],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:Z,fixup:ez},c:Z,j:Z,alpha:{use:Z,fixup:zR}},difference:{h:dz},average:{h:pz}},OB=29**3/3**3,kB=6**3/29**3,AB=e=>e**3>kB?e**3:(116*e-16)/OB,jB=({l:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(e+16)/116,a=t/500+i,o=i-n/200,s={mode:`xyz50`,x:AB(a)*yz.X,y:AB(i)*yz.Y,z:AB(o)*yz.Z};return r!==void 0&&(s.alpha=r),s},MB=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=YR({r:e*3.1341359569958707-t*1.6173863321612538-.4906619460083532*n,g:e*-.978795502912089+t*1.916254567259524+.03344273116131949*n,b:e*.07195537988411677-t*.2289768264158322+1.405386058324125*n});return r!==void 0&&(i.alpha=r),i},NB=e=>MB(jB(e)),PB=e=>{let{r:t,g:n,b:r,alpha:i}=KR(e),a={mode:`xyz50`,x:.436065742824811*t+.3851514688337912*n+.14307845442264197*r,y:.22249319175623702*t+.7168870538238823*n+.06061979053616537*r,z:.013923904500943465*t+.09708128566574634*n+.7140993584005155*r};return i!==void 0&&(a.alpha=i),a},FB=e=>e>kB?Math.cbrt(e):(OB*e+16)/116,IB=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=FB(e/yz.X),a=FB(t/yz.Y),o=FB(n/yz.Z),s={mode:`lab`,l:116*a-16,a:500*(i-a),b:200*(a-o)};return r!==void 0&&(s.alpha=r),s},LB=e=>{let t=IB(PB(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t};function RB(e,t){if(!t||t[0]!==`lab`)return;let n={mode:`lab`},[,r,i,a,o]=t;if(!(r.type===Y.Hue||i.type===Y.Hue||a.type===Y.Hue))return r.type!==Y.None&&(n.l=Math.min(Math.max(0,r.value),100)),i.type!==Y.None&&(n.a=i.type===Y.Number?i.value:i.value*125/100),a.type!==Y.None&&(n.b=a.type===Y.Number?a.value:a.value*125/100),o.type!==Y.None&&(n.alpha=Math.min(1,Math.max(0,o.type===Y.Number?o.value:o.value/100))),n}var zB={mode:`lab`,toMode:{xyz50:jB,rgb:NB},fromMode:{xyz50:IB,rgb:LB},channels:[`l`,`a`,`b`,`alpha`],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[RB],serialize:e=>`lab(${e.l===void 0?`none`:e.l} ${e.a===void 0?`none`:e.a} ${e.b===void 0?`none`:e.b}${e.alpha<1?` / ${e.alpha}`:``})`,interpolate:{l:Z,a:Z,b:Z,alpha:{use:Z,fixup:zR}}},BB={...zB,mode:`lab65`,parse:[`--lab-d65`],serialize:`--lab-d65`,toMode:{xyz65:Sz,rgb:Cz},fromMode:{xyz65:Tz,rgb:Ez},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};function VB(e,t){if(!t||t[0]!==`lch`)return;let n={mode:`lch`},[,r,i,a,o]=t;if(r.type!==Y.None){if(r.type===Y.Hue)return;n.l=Math.min(Math.max(0,r.value),100)}if(i.type!==Y.None&&(n.c=Math.max(0,i.type===Y.Number?i.value:i.value*150/100)),a.type!==Y.None){if(a.type===Y.Percentage)return;n.h=a.value}return o.type!==Y.None&&(n.alpha=Math.min(1,Math.max(0,o.type===Y.Number?o.value:o.value/100))),n}var HB={mode:`lch`,toMode:{lab:gz,rgb:e=>NB(gz(e))},fromMode:{rgb:e=>hz(LB(e)),lab:hz},channels:[`l`,`c`,`h`,`alpha`],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[VB],serialize:e=>`lch(${e.l===void 0?`none`:e.l} ${e.c===void 0?`none`:e.c} ${e.h===void 0?`none`:e.h}${e.alpha<1?` / ${e.alpha}`:``})`,interpolate:{h:{use:Z,fixup:ez},c:Z,l:Z,alpha:{use:Z,fixup:zR}},difference:{h:dz},average:{h:pz}},UB={...HB,mode:`lch65`,parse:[`--lch-d65`],serialize:`--lch-d65`,toMode:{lab65:e=>gz(e,`lab65`),rgb:e=>Cz(gz(e,`lab65`))},fromMode:{rgb:e=>hz(Ez(e),`lch65`),lab65:e=>hz(e,`lch65`)},ranges:{l:[0,100],c:[0,150],h:[0,360]}},WB=({l:e,u:t,v:n,alpha:r})=>{t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.sqrt(t*t+n*n),a={mode:`lchuv`,l:e,c:i};return i&&(a.h=QR(Math.atan2(n,t)*180/Math.PI)),r!==void 0&&(a.alpha=r),a},GB=({l:e,c:t,h:n,alpha:r})=>{n===void 0&&(n=0);let i={mode:`luv`,l:e,u:t?t*Math.cos(n/180*Math.PI):0,v:t?t*Math.sin(n/180*Math.PI):0};return r!==void 0&&(i.alpha=r),i},KB=(e,t,n)=>4*e/(e+15*t+3*n),qB=(e,t,n)=>9*t/(e+15*t+3*n),JB=KB(yz.X,yz.Y,yz.Z),YB=qB(yz.X,yz.Y,yz.Z),XB=e=>e<=kB?OB*e:116*Math.cbrt(e)-16,ZB=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=XB(t/yz.Y),a=KB(e,t,n),o=qB(e,t,n);!isFinite(a)||!isFinite(o)?i=a=o=0:(a=13*i*(a-JB),o=13*i*(o-YB));let s={mode:`luv`,l:i,u:a,v:o};return r!==void 0&&(s.alpha=r),s},QB=(e,t,n)=>4*e/(e+15*t+3*n),$B=(e,t,n)=>9*t/(e+15*t+3*n),eV=QB(yz.X,yz.Y,yz.Z),tV=$B(yz.X,yz.Y,yz.Z),nV=({l:e,u:t,v:n,alpha:r})=>{if(e===void 0&&(e=0),e===0)return{mode:`xyz50`,x:0,y:0,z:0};t===void 0&&(t=0),n===void 0&&(n=0);let i=t/(13*e)+eV,a=n/(13*e)+tV,o=yz.Y*(e<=8?e/OB:((e+16)/116)**3),s={mode:`xyz50`,x:9*i*o/(4*a),y:o,z:o*(12-3*i-20*a)/(4*a)};return r!==void 0&&(s.alpha=r),s},rV={mode:`lchuv`,toMode:{luv:GB,rgb:e=>MB(nV(GB(e)))},fromMode:{rgb:e=>WB(ZB(PB(e))),luv:WB},channels:[`l`,`c`,`h`,`alpha`],parse:[`--lchuv`],serialize:`--lchuv`,ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:Z,fixup:ez},c:Z,l:Z,alpha:{use:Z,fixup:zR}},difference:{h:dz},average:{h:pz}},iV={...BR,mode:`lrgb`,toMode:{rgb:YR},fromMode:{rgb:KR},parse:[`srgb-linear`],serialize:`srgb-linear`},aV={mode:`luv`,toMode:{xyz50:nV,rgb:e=>MB(nV(e))},fromMode:{xyz50:ZB,rgb:e=>ZB(PB(e))},channels:[`l`,`u`,`v`,`alpha`],parse:[`--luv`],serialize:`--luv`,ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:Z,u:Z,v:Z,alpha:{use:Z,fixup:zR}}},oV=({r:e,g:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.cbrt(.412221469470763*e+.5363325372617348*t+.0514459932675022*n),a=Math.cbrt(.2119034958178252*e+.6806995506452344*t+.1073969535369406*n),o=Math.cbrt(.0883024591900564*e+.2817188391361215*t+.6299787016738222*n),s={mode:`oklab`,l:.210454268309314*i+.7936177747023054*a-.0040720430116193*o,a:1.9779985324311684*i-2.42859224204858*a+.450593709617411*o,b:.0259040424655478*i+.7827717124575296*a-.8086757549230774*o};return r!==void 0&&(s.alpha=r),s},sV=e=>{let t=oV(KR(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},cV=({l:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(e+.3963377773761749*t+.2158037573099136*n)**3,a=(e-.1055613458156586*t-.0638541728258133*n)**3,o=(e-.0894841775298119*t-1.2914855480194092*n)**3,s={mode:`lrgb`,r:4.076741636075957*i-3.3077115392580616*a+.2309699031821044*o,g:-1.2684379732850317*i+2.6097573492876887*a-.3413193760026573*o,b:-.0041960761386756*i-.7034186179359362*a+1.7076146940746117*o};return r!==void 0&&(s.alpha=r),s},lV=e=>YR(cV(e));function uV(e){let t=.206,n=.03,r=(1+t)/(1+n);return .5*(r*e-t+Math.sqrt((r*e-t)*(r*e-t)+4*n*r*e))}function dV(e){let t=.206,n=.03;return(1+t)/(1+n),(e*e+t*e)/(1.170873786407767*(e+n))}function fV(e,t){let n,r,i,a,o,s,c,l;-1.88170328*e-.80936493*t>1?(n=1.19086277,r=1.76576728,i=.59662641,a=.75515197,o=.56771245,s=4.0767416621,c=-3.3077115913,l=.2309699292):1.81444104*e-1.19445276*t>1?(n=.73956515,r=-.45954404,i=.08285427,a=.1254107,o=.14503204,s=-1.2684380046,c=2.6097574011,l=-.3413193965):(n=1.35733652,r=-.00915799,i=-1.1513021,a=-.50559606,o=.00692167,s=-.0041960863,c=-.7034186147,l=1.707614701);let u=n+r*e+i*t+a*e*e+o*e*t,d=.3963377774*e+.2158037573*t,f=-.1055613458*e-.0638541728*t,p=-.0894841775*e-1.291485548*t;{let e=1+u*d,t=1+u*f,n=1+u*p,r=e*e*e,i=t*t*t,a=n*n*n,o=3*d*e*e,m=3*f*t*t,h=3*p*n*n,g=6*d*d*e,ee=6*f*f*t,_=6*p*p*n,te=s*r+c*i+l*a,ne=s*o+c*m+l*h,re=s*g+c*ee+l*_;u-=te*ne/(ne*ne-.5*te*re)}return u}function pV(e,t){let n=fV(e,t),r=cV({l:1,a:n*e,b:n*t}),i=Math.cbrt(1/Math.max(r.r,r.g,r.b));return[i,i*n]}function mV(e,t,n,r,i,a=null){a||=pV(e,t);let o;if((n-i)*a[1]-(a[0]-i)*r<=0)o=a[1]*i/(r*a[0]+a[1]*(i-n));else{o=a[1]*(i-1)/(r*(a[0]-1)+a[1]*(i-n));{let a=n-i,s=r,c=.3963377774*e+.2158037573*t,l=-.1055613458*e-.0638541728*t,u=-.0894841775*e-1.291485548*t,d=a+s*c,f=a+s*l,p=a+s*u;{let e=i*(1-o)+o*n,t=o*r,a=e+t*c,s=e+t*l,m=e+t*u,h=a*a*a,g=s*s*s,ee=m*m*m,_=3*d*a*a,te=3*f*s*s,ne=3*p*m*m,re=6*d*d*a,ie=6*f*f*s,ae=6*p*p*m,oe=4.0767416621*h-3.3077115913*g+.2309699292*ee-1,se=4.0767416621*_-3.3077115913*te+.2309699292*ne,ce=4.0767416621*re-3.3077115913*ie+.2309699292*ae,le=se/(se*se-.5*oe*ce),ue=-oe*le,de=-1.2684380046*h+2.6097574011*g-.3413193965*ee-1,fe=-1.2684380046*_+2.6097574011*te-.3413193965*ne,pe=-1.2684380046*re+2.6097574011*ie-.3413193965*ae,me=fe/(fe*fe-.5*de*pe),he=-de*me,ge=-.0041960863*h-.7034186147*g+1.707614701*ee-1,_e=-.0041960863*_-.7034186147*te+1.707614701*ne,v=-.0041960863*re-.7034186147*ie+1.707614701*ae,y=_e/(_e*_e-.5*ge*v),ve=-ge*y;ue=le>=0?ue:1e6,he=me>=0?he:1e6,ve=y>=0?ve:1e6,o+=Math.min(ue,Math.min(he,ve))}}}return o}function hV(e,t,n=null){n||=pV(e,t);let r=n[0],i=n[1];return[i/r,i/(1-r)]}function gV(e,t,n){let r=pV(t,n),i=mV(t,n,e,1,e,r),a=hV(t,n,r),o=.11516993+1/(7.4477897+4.1590124*n+t*(-2.19557347+1.75198401*n+t*(-2.13704948-10.02301043*n+t*(-4.24894561+5.38770819*n+4.69891013*t)))),s=.11239642+1/(1.6132032-.68124379*n+t*(.40370612+.90148123*n+t*(-.27087943+.6122399*n+t*(.00299215-.45399568*n-.14661872*t)))),c=i/Math.min(e*a[0],(1-e)*a[1]),l=e*o,u=(1-e)*s,d=.9*c*Math.sqrt(Math.sqrt(1/(1/(l*l*l*l)+1/(u*u*u*u))));return l=e*.4,u=(1-e)*.8,[Math.sqrt(1/(1/(l*l)+1/(u*u))),d,i]}function _V(e){let t=e.l===void 0?0:e.l,n=e.a===void 0?0:e.a,r=e.b===void 0?0:e.b,i={mode:`okhsl`,l:uV(t)};e.alpha!==void 0&&(i.alpha=e.alpha);let a=Math.sqrt(n*n+r*r);if(!a)return i.s=0,i;let[o,s,c]=gV(t,n/a,r/a),l;if(a<s){let e=.8*o,t=1-e/s;l=(a-0)/(e+t*(a-0))*.8}else{let e=s,t=.2*s*s*1.25*1.25/o,n=1-t/(c-s);l=.8+.2*((a-e)/(t+n*(a-e)))}return l&&(i.s=l,i.h=QR(Math.atan2(r,n)*180/Math.PI)),i}function vV(e){let t=e.h===void 0?0:e.h,n=e.s===void 0?0:e.s,r=e.l===void 0?0:e.l,i={mode:`oklab`,l:dV(r)};if(e.alpha!==void 0&&(i.alpha=e.alpha),!n||r===1)return i.a=i.b=0,i;let a=Math.cos(t/180*Math.PI),o=Math.sin(t/180*Math.PI),[s,c,l]=gV(i.l,a,o),u,d,f,p;n<.8?(u=1.25*n,d=0,f=.8*s,p=1-f/c):(u=5*(n-.8),d=c,f=.2*c*c*1.25*1.25/s,p=1-f/(l-c));let m=d+u*f/(1-p*u);return i.a=m*a,i.b=m*o,i}var yV={...Kz,mode:`okhsl`,channels:[`h`,`s`,`l`,`alpha`],parse:[`--okhsl`],serialize:`--okhsl`,fromMode:{oklab:_V,rgb:e=>_V(sV(e))},toMode:{oklab:vV,rgb:e=>lV(vV(e))}};function bV(e){let t=e.l===void 0?0:e.l,n=e.a===void 0?0:e.a,r=e.b===void 0?0:e.b,i=Math.sqrt(n*n+r*r),a=i?n/i:1,o=i?r/i:1,[s,c]=hV(a,o),l=.5,u=1-l/s,d=c/(i+t*c),f=d*t,p=d*i,m=dV(f),h=p*m/f,g=cV({l:m,a:a*h,b:o*h}),ee=Math.cbrt(1/Math.max(g.r,g.g,g.b,0));t/=ee,i=i/ee*uV(t)/t,t=uV(t);let _={mode:`okhsv`,s:i?(l+c)*p/(c*l+c*u*p):0,v:t?t/f:0};return _.s&&(_.h=QR(Math.atan2(r,n)*180/Math.PI)),e.alpha!==void 0&&(_.alpha=e.alpha),_}function xV(e){let t={mode:`oklab`};e.alpha!==void 0&&(t.alpha=e.alpha);let n=e.h===void 0?0:e.h,r=e.s===void 0?0:e.s,i=e.v===void 0?0:e.v,a=Math.cos(n/180*Math.PI),o=Math.sin(n/180*Math.PI),[s,c]=hV(a,o),l=.5,u=1-l/s,d=1-r*l/(l+c-c*u*r),f=r*c*l/(l+c-c*u*r),p=dV(d),m=f*p/d,h=cV({l:p,a:a*m,b:o*m}),g=Math.cbrt(1/Math.max(h.r,h.g,h.b,0)),ee=dV(i*d),_=f*ee/d;return t.l=ee*g,t.a=_*a*g,t.b=_*o*g,t}var SV={...Yz,mode:`okhsv`,channels:[`h`,`s`,`v`,`alpha`],parse:[`--okhsv`],serialize:`--okhsv`,fromMode:{oklab:bV,rgb:e=>bV(sV(e))},toMode:{oklab:xV,rgb:e=>lV(xV(e))}};function CV(e,t){if(!t||t[0]!==`oklab`)return;let n={mode:`oklab`},[,r,i,a,o]=t;if(!(r.type===Y.Hue||i.type===Y.Hue||a.type===Y.Hue))return r.type!==Y.None&&(n.l=Math.min(Math.max(0,r.type===Y.Number?r.value:r.value/100),1)),i.type!==Y.None&&(n.a=i.type===Y.Number?i.value:i.value*.4/100),a.type!==Y.None&&(n.b=a.type===Y.Number?a.value:a.value*.4/100),o.type!==Y.None&&(n.alpha=Math.min(1,Math.max(0,o.type===Y.Number?o.value:o.value/100))),n}var wV={...zB,mode:`oklab`,toMode:{lrgb:cV,rgb:lV},fromMode:{lrgb:oV,rgb:sV},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[CV],serialize:e=>`oklab(${e.l===void 0?`none`:e.l} ${e.a===void 0?`none`:e.a} ${e.b===void 0?`none`:e.b}${e.alpha<1?` / ${e.alpha}`:``})`};function TV(e,t){if(!t||t[0]!==`oklch`)return;let n={mode:`oklch`},[,r,i,a,o]=t;if(r.type!==Y.None){if(r.type===Y.Hue)return;n.l=Math.min(Math.max(0,r.type===Y.Number?r.value:r.value/100),1)}if(i.type!==Y.None&&(n.c=Math.max(0,i.type===Y.Number?i.value:i.value*.4/100)),a.type!==Y.None){if(a.type===Y.Percentage)return;n.h=a.value}return o.type!==Y.None&&(n.alpha=Math.min(1,Math.max(0,o.type===Y.Number?o.value:o.value/100))),n}var EV={...HB,mode:`oklch`,toMode:{oklab:e=>gz(e,`oklab`),rgb:e=>lV(gz(e,`oklab`))},fromMode:{rgb:e=>hz(sV(e),`oklch`),oklab:e=>hz(e,`oklch`)},parse:[TV],serialize:e=>`oklch(${e.l===void 0?`none`:e.l} ${e.c===void 0?`none`:e.c} ${e.h===void 0?`none`:e.h}${e.alpha<1?` / ${e.alpha}`:``})`,ranges:{l:[0,1],c:[0,.4],h:[0,360]}},DV=e=>{let{r:t,g:n,b:r,alpha:i}=KR(e),a={mode:`xyz65`,x:.486570948648216*t+.265667693169093*n+.1982172852343625*r,y:.2289745640697487*t+.6917385218365062*n+.079286914093745*r,z:0*t+.0451133818589026*n+1.043944368900976*r};return i!==void 0&&(a.alpha=i),a},OV=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=YR({r:e*2.4934969119414263-t*.9313836179191242-.402710784450717*n,g:e*-.8294889695615749+t*1.7626640603183465+.0236246858419436*n,b:e*.0358458302437845-t*.0761723892680418+.9568845240076871*n},`p3`);return r!==void 0&&(i.alpha=r),i},kV={...BR,mode:`p3`,parse:[`display-p3`],serialize:`display-p3`,fromMode:{rgb:e=>OV(qR(e)),xyz65:OV},toMode:{rgb:e=>XR(DV(e)),xyz65:DV}},AV=e=>{let t=Math.abs(e);return t>=1/512?Math.sign(e)*t**(1/1.8):16*e},jV=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`prophoto`,r:AV(e*1.3457868816471585-t*.2555720873797946-.0511018649755453*n),g:AV(e*-.5446307051249019+t*1.5082477428451466+.0205274474364214*n),b:AV(e*0+t*0+1.2119675456389452*n)};return r!==void 0&&(i.alpha=r),i},MV=(e=0)=>{let t=Math.abs(e);return t>=16/512?Math.sign(e)*t**1.8:e/16},NV=e=>{let t=MV(e.r),n=MV(e.g),r=MV(e.b),i={mode:`xyz50`,x:.7977666449006423*t+.1351812974005331*n+.0313477341283922*r,y:.2880748288194013*t+.7118352342418731*n+899369387256e-16*r,z:0*t+0*n+.8251046025104602*r};return e.alpha!==void 0&&(i.alpha=e.alpha),i},PV={...BR,mode:`prophoto`,parse:[`prophoto-rgb`],serialize:`prophoto-rgb`,fromMode:{xyz50:jV,rgb:e=>jV(PB(e))},toMode:{xyz50:NV,rgb:e=>MB(NV(e))}},FV=1.09929682680944,IV=.018053968510807,LV=e=>{let t=Math.abs(e);return t>IV?(Math.sign(e)||1)*(FV*t**.45-(FV-1)):4.5*e},RV=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`rec2020`,r:LV(e*1.7166511879712683-t*.3556707837763925-.2533662813736599*n),g:LV(e*-.6666843518324893+t*1.6164812366349395+.0157685458139111*n),b:LV(e*.0176398574453108-t*.0427706132578085+.9421031212354739*n)};return r!==void 0&&(i.alpha=r),i},zV=1.09929682680944,BV=.018053968510807,VV=(e=0)=>{let t=Math.abs(e);return t<BV*4.5?e/4.5:(Math.sign(e)||1)*((t+zV-1)/zV)**(1/.45)},HV=e=>{let t=VV(e.r),n=VV(e.g),r=VV(e.b),i={mode:`xyz65`,x:.6369580483012911*t+.1446169035862083*n+.1688809751641721*r,y:.262700212011267*t+.6779980715188708*n+.059301716469862*r,z:0*t+.0280726930490874*n+1.0609850577107909*r};return e.alpha!==void 0&&(i.alpha=e.alpha),i},UV={...BR,mode:`rec2020`,fromMode:{xyz65:RV,rgb:e=>RV(qR(e))},toMode:{xyz65:HV,rgb:e=>XR(HV(e))},parse:[`rec2020`],serialize:`rec2020`},WV=.0037930732552754493,GV=Math.cbrt(WV),KV=e=>Math.cbrt(e)-GV,qV=e=>{let{r:t,g:n,b:r,alpha:i}=KR(e),a=KV(.3*t+.622*n+.078*r+WV),o=KV(.23*t+.692*n+.078*r+WV),s=KV(.2434226892454782*t+.2047674442449682*n+.5518098665095535*r+WV),c={mode:`xyb`,x:(a-o)/2,y:(a+o)/2,b:s-(a+o)/2};return i!==void 0&&(c.alpha=i),c},JV=e=>(e+GV)**3,YV={mode:`xyb`,channels:[`x`,`y`,`b`,`alpha`],parse:[`--xyb`],serialize:`--xyb`,toMode:{rgb:({x:e,y:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=JV(e+t)-WV,a=JV(t-e)-WV,o=JV(n+t)-WV,s=YR({r:11.031566904639861*i-9.866943908131562*a-.16462299650829934*o,g:-3.2541473810744237*i+4.418770377582723*a-.16462299650829934*o,b:-3.6588512867136815*i+2.7129230459360922*a+1.9459282407775895*o});return r!==void 0&&(s.alpha=r),s}},fromMode:{rgb:qV},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:Z,y:Z,b:Z,alpha:{use:Z,fixup:zR}}},XV={mode:`xyz50`,parse:[`xyz-d50`],serialize:`xyz-d50`,toMode:{rgb:MB,lab:IB},fromMode:{rgb:PB,lab:jB},channels:[`x`,`y`,`z`,`alpha`],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:Z,y:Z,z:Z,alpha:{use:Z,fixup:zR}}},ZV={mode:`xyz65`,toMode:{rgb:XR,xyz50:e=>{let{x:t,y:n,z:r,alpha:i}=e;t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0);let a={mode:`xyz50`,x:1.0479298208405488*t+.0229467933410191*n-.0501922295431356*r,y:.0296278156881593*t+.990434484573249*n-.0170738250293851*r,z:-.0092430581525912*t+.0150551448965779*n+.7518742899580008*r};return i!==void 0&&(a.alpha=i),a}},fromMode:{rgb:qR,xyz50:e=>{let{x:t,y:n,z:r,alpha:i}=e;t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0);let a={mode:`xyz65`,x:.9554734527042182*t-.0230985368742614*n+.0632593086610217*r,y:-.0283697069632081*t+1.0099954580058226*n+.021041398966943*r,z:.0123140016883199*t-.0205076964334779*n+1.3303659366080753*r};return i!==void 0&&(a.alpha=i),a}},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:[`x`,`y`,`z`,`alpha`],parse:[`xyz`,`xyz-d65`],serialize:`xyz-d65`,interpolate:{x:Z,y:Z,z:Z,alpha:{use:Z,fixup:zR}}},QV={mode:`yiq`,toMode:{rgb:({y:e,i:t,q:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`rgb`,r:e+.95608445*t+.6208885*n,g:e-.27137664*t-.6486059*n,b:e-1.10561724*t+1.70250126*n};return r!==void 0&&(i.alpha=r),i}},fromMode:{rgb:({r:e,g:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`yiq`,y:.29889531*e+.58662247*t+.11448223*n,i:.59597799*e-.2741761*t-.32180189*n,q:.21147017*e-.52261711*t+.31114694*n};return r!==void 0&&(i.alpha=r),i}},channels:[`y`,`i`,`q`,`alpha`],parse:[`--yiq`],serialize:`--yiq`,ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:Z,i:Z,q:Z,alpha:{use:Z,fixup:zR}}},$V=(e,t)=>Math.round(e*(t=10**t))/t;((e=4)=>t=>typeof t==`number`?$V(t,e):t)(2);var eH=e=>Math.max(0,Math.min(1,e||0)),tH=e=>Math.round(eH(e)*255),nH=fR(`rgb`),rH=e=>{if(e===void 0)return;let t=tH(e.r),n=tH(e.g),r=tH(e.b);return`#`+(1<<24|t<<16|n<<8|r).toString(16).slice(1)},iH=e=>rH(nH(e)),aH=e=>{let t={mode:e.mode,r:Math.max(0,Math.min(e.r===void 0?0:e.r,1)),g:Math.max(0,Math.min(e.g===void 0?0:e.g,1)),b:Math.max(0,Math.min(e.b===void 0?0:e.b,1))};return e.alpha!==void 0&&(t.alpha=e.alpha),t},oH=e=>e!==void 0&&(e.r===void 0||e.r>=0&&e.r<=1)&&(e.g===void 0||e.g>=0&&e.g<=1)&&(e.b===void 0||e.b>=0&&e.b<=1);function sH(e=`rgb`){let{gamut:t}=yR(e);if(!t)return e=>!0;let n=fR(typeof t==`string`?t:e);return e=>oH(n(e))}function cH(e=`rgb`){let{gamut:t}=yR(e);if(!t)return e=>dR(e);let n=typeof t==`string`?t:e,r=fR(n),i=sH(n);return e=>{let t=dR(e);if(!t)return;let n=r(t);if(i(n))return t;let a=aH(n);return t.mode===a.mode?a:fR(t.mode)(a)}}vR(ZR),vR(mz),vR(Fz),vR(Iz),vR(zz),vR(Kz),vR(Yz),vR($z),vR(dB),vR(wB),vR(DB),vR(zB),vR(BB),vR(HB),vR(UB),vR(rV),vR(iV),vR(aV),vR(yV),vR(SV),vR(wV),vR(EV),vR(kV),vR(PV),vR(UV),vR(BR),vR(YV),vR(XV),vR(ZV),vR(QV);var lH=fz(`rgb`),uH=class e{constructor(e){this.set(e)}static isValidColorString(t){try{return new e(t),!0}catch{return!1}}static isColor(t){return t instanceof e}static deserialize(t){let n=JSON.parse(t),r=new e(`black`);return Kc(n).forEach(([e,t])=>{e===`originalColorSyntax`?r.originalColorSyntax=Ac.isEnumValue(t,HL,`Cannot deserialize: invalid color syntax.`):r._allColors[e]=t}),r}getRgbDistance(e){return lH(this.#e,e)}getClosestNamedColor(){return De(KL).reduce((e,t)=>{let n=this.getRgbDistance(t);return n<e.distance?{distance:n,name:t}:e},{name:``,distance:1/0}).name}toString(){return this.toCss()[this.originalColorSyntax]}originalColorSyntax=HL.hex;#e=Ac.isDefined(PR(`black`));_allColors={names:[`black`],[HL.name]:`black`,hexString:`#000000`,[HL.hex]:{r:0,g:0,b:0},[HL.rgb]:{r:0,g:0,b:0},[HL.hsl]:{h:0,s:0,l:0},[HL.hwb]:{h:0,w:0,b:0},[HL.lab]:{l:0,a:0,b:0},[HL.lch]:{l:0,c:0,h:0},[HL.oklab]:{l:0,a:0,b:0},[HL.oklch]:{l:0,c:0,h:0}};clone(){return e.deserialize(this.serialize())}setByString(e){let t=PR(e);if(!t)throw Error(`Unable to parse invalid color string: '${e}'`);this.originalColorSyntax=WL(e),this.#e=t,this.pullFromInternalColor()}set(e){if(A.isString(e))return this.setByString(e);if(Fc.isLengthExactly(Object.keys(e),1,`Cannot set multiple color formats at once: got '${zl(Object.keys(e))}'`),e.hexString||e.name)this.setByString(e.hexString||e.name);else{let[t,n]=Ac.isDefined(Kc(e)[0]),r=UL[t],i=Object.values(Al(r.coords,e=>{let i=n[e],a=r.coords[Ac.isKeyOf(e,r.coords)],o=i!=null&&i>=a.min&&i<=a.max?n[e]:this[t][e];return Ac.isDefined(o)}));this.setByString(`${r.conversionFormat}(${i.join(` `)})`)}}pullFromInternalColor(){ke(VL).forEach(e=>{let t=UL[e],n=t.conversionFormat,r=A.isKeyOf(this.#e.mode,UL)?UL[this.#e.mode]:void 0,i=cH(t.colorSpace===r?.colorSpace?n:`rgb`)(fR(n)(this.#e));i||Fc.never(`Failed to convert color '${JSON.stringify(this.#e)}' to '${e}'.`),De(this[e]).forEach(n=>{let r=i[n],a=t.coords[Ac.isKeyOf(n,t.coords)];r!=null&&(this._allColors[e][n]=wl((r||0)*(a.factor||1),{digits:a.digits||0}))})}),this._allColors.hexString=iH(this.#e),this._allColors.names=dH(this.rgb),this._allColors[HL.name]=this._allColors.names[0]||``}serialize(){return JSON.stringify({...this.allColors,originalColorSyntax:this.originalColorSyntax})}get allColors(){return rl(this._allColors)}toFormattedStrings(){return{...Al(UL,e=>Object.values(this[e]).map(e=>String(e).padStart(6,` `)).join(` `)),names:this.names.join(`, `).padEnd(XL,` `),[HL.name]:(this.names[0]||``).padEnd(XL,` `),[HL.hexString]:this[HL.hexString]}}toCss(){return{...Al(UL,e=>`${e}(${Object.values(this[e]).join(` `)})`),[HL.hexString]:this[HL.hexString],[HL.name]:this.names[0]||``}}get names(){return rl(this._allColors.names)}get name(){return this._allColors.names[0]||``}get hexString(){return this._allColors[HL.hexString]}get hex(){return rl(this._allColors[HL.hex])}get rgb(){return rl(this._allColors[HL.rgb])}get hsl(){return rl(this._allColors[HL.hsl])}get hwb(){return rl(this._allColors[HL.hwb])}get lab(){return rl(this._allColors[HL.lab])}get lch(){return rl(this._allColors[HL.lch])}get oklab(){return rl(this._allColors[HL.oklab])}get oklch(){return rl(this._allColors[HL.oklch])}};function dH(e){return Jc(Kc(KL),([e])=>e,(t,[,n])=>A.deepEquals(n,[e.r,e.g,e.b]))}function fH(e){return z`
        color: ${e.foreground.value};
        background-color: ${e.background.value};
    `}function pH({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split(``).every(e=>pH({input:e,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function mH({value:e,allowed:t,blocked:n}){let r=String(e),i=t?pH({input:r,matcher:t}):!0,a=n?pH({input:r,matcher:n}):!1;return i&&!a}function hH(e){let t=String(e.value);if(!e.value)return{filtered:t,blocked:``};let{filtered:n,blocked:r}=t.split(``).reduce((t,n)=>(mH({...e,value:n})?t.filtered.push(n):t.blocked.push(n),t),{filtered:[],blocked:[]});return{filtered:n.join(``),blocked:r.join(``)}}function gH({inputs:e,previousValue:t,event:n,inputBlockedCallback:r,newValueCallback:i}){let a=sP(n,HTMLInputElement),o=A.hasKey(n,`data`)&&Lc.isString(n.data)||``;if(o){let{blocked:t}=hH({value:o,allowed:e.allowedInputs,blocked:e.blockedInputs});t.length&&r(t)}let s=hH({value:a.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;a.value!==s&&(a.value=s),t!==s&&i(s)}var _H;(function(e){e.Default=`text`,e.Password=`password`,e.Email=`email`,e.Number=`number`})(_H||={});var vH=FF()({tagName:`vira-input`,cssVars:{"vira-input-padding-horizontal":`10px`,"vira-input-padding-vertical":`6px`},styles:({hostClasses:e,cssVars:t})=>z`
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
                ${AF};
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
                ${NF};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e[`vira-input-clear-button-shown`].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${AF};
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
                ${AF};
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
                ${AF};
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
                    ${pF({elementBorderSize:`1px`,noNesting:!0})}
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
                ${NF};
            }

            button {
                ${AF};
                cursor: pointer;
                display: flex;
                transition: color
                    ${dF[`vira-interaction-animation-duration`].value};
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
                    ${uF};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,events:{valueChange:JM(),inputBlocked:JM()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:el(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:n,updateState:r,events:i,host:a})=>{let{filtered:o}=hH({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?V`
                  <${J.assign({icon:e.icon})}
                      class="left-side-icon"
                  ></${J}>
              `:j,c=e.fitText?z`
                  width: ${n.forcedInputWidth}px;
              `:j,l=B(`mousedown`,e=>{let t=sP(e,HTMLElement,{useOriginalTarget:!0}),n=Ac.instanceOf(a.shadowRoot.querySelector(`input`),HTMLInputElement);t!==n&&(e.preventDefault(),n.focus())}),u=e.disableBrowserHelps||e.type===_H.Password,d=V`
            <span class="input-wrapper" ${e.label?j:l}>
                ${s}
                ${DN(!!e.fitText,V`
                        <span
                            class="size-span"
                            ${wN(({contentRect:e})=>{r({forcedInputWidth:e.width})})}
                        >
                            <pre>${o||e.placeholder||j}</pre>
                        </span>
                    `)}

                <input
                    id=${wM(e.label?n.randomId:void 0)}
                    aria-label=${wM(e.label||void 0)}
                    autofocus=${!1}
                    type=${yH(e.type,n.showPassword)}
                    style=${c}
                    autocomplete=${wM(u?`off`:void 0)}
                    autocorrect=${wM(u?`off`:void 0)}
                    autocapitalize=${wM(u?`off`:void 0)}
                    spellcheck=${wM(u?`false`:void 0)}
                    ?disabled=${e.disabled}
                    .value=${o}
                    ${B(`input`,n=>{gH({inputs:e,previousValue:o,event:n,inputBlockedCallback(e){t(new i.inputBlocked(e))},newValueCallback(e){t(new i.valueChange(e))}})})}
                    placeholder=${wM(e.placeholder||void 0)}
                    ${hN(e.attributePassthrough)}
                />

                ${DN(!!(e.showClearButton&&e.value),V`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${B(`mousedown`,e=>{e.stopImmediatePropagation(),e.preventDefault()})}
                            ${B(`click`,()=>{e.disabled||t(new i.valueChange(``))})}
                        >
                            <${J.assign({icon:WI})}></${J}>
                        </button>
                    `)}
                ${DN(e.type===_H.Password,V`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${B(`mousedown`,e=>{e.stopImmediatePropagation(),e.preventDefault()})}
                            ${B(`click`,()=>{r({showPassword:!n.showPassword})})}
                        >
                            <${J.assign({icon:n.showPassword?$I:QI})}></${J}>
                        </button>
                    `)}
                ${DN(!!e.suffix,V`
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
            `:d}});function yH(e,t){return e===_H.Password&&t?_H.Default:e||_H.Default}var bH=aN()({tagName:`vir-color-slider`,cssVars:{"vir-color-slider-gradient":`black`},styles:({cssVars:e})=>z`
        :host {
            display: flex;
            align-items: center;
            font-family: ${mF[`vira-monospace`].value};
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

        ${vH} {
            width: 76px;
        }

        .coordinate {
            font-size: 18px;
            margin-top: -4px;
        }
    `,events:{valueChange:JM()},render({inputs:e,events:t,dispatch:n,cssVars:r}){let i=UL[e.colorFormatName],a=i.coords[e.colorCoordinateName];if(!a)throw Error(`Invalid color coordinate '${e.colorCoordinateName}' for color format '${e.colorFormatName}'`);let o=z`linear-gradient(to right, ${Tu(Xc(10,t=>{let n=a.min+(a.max-a.min)*(t/10);return new uH({[e.colorFormatName]:{...e.color[e.colorFormatName],[e.colorCoordinateName]:n}}).toCss()[i.conversionFormat]}).join(`,`))})`,s=Ac.isNumber(e.color[e.colorFormatName][e.colorCoordinateName]),c=a.radix?Math.round(s).toString(a.radix).toUpperCase().padStart(a.radixPad||0,`0`):String(s);return V`
            <span class="coordinate">${e.colorCoordinateName.toUpperCase()}</span>
            <input
                type="range"
                style=${z`
                    ${r[`vir-color-slider-gradient`].name}: ${o};
                `}
                step=${10**(a.digits?-a.digits:0)}
                ${SN(e=>{Fc.instanceOf(e,HTMLInputElement),e.min=String(a.min),e.max=String(a.max),e.value=String(s)})}
                ${B(`input`,e=>{let r=sP(e,HTMLInputElement),i=Number(r.value);isNaN(i)||n(new t.valueChange(i))})}
            />
            <${vH.assign({value:c})}
                ${B(vH.events.valueChange,e=>{let r=a.radix?parseInt(e.detail,a.radix):Number(e.detail);isNaN(r)||n(new t.valueChange(r))})}
            ></${vH}>
        `}}),xH=aN()({tagName:`vir-color-format-sliders`,styles:z`
        :host {
            display: flex;
            flex-direction: column;
        }

        h3 {
            ${kF};
        }
    `,events:{colorChange:JM()},render({inputs:e,dispatch:t,events:n}){let r=UL[e.colorFormatName],i=De(r.coords).map(i=>V`
                    <${bH.assign({color:e.color,colorCoordinateName:i,colorFormatName:e.colorFormatName})}
                        ${B(bH.events.valueChange,a=>{let o=e.color.clone();o.set({[e.colorFormatName]:{[i]:a.detail}});let s=o.toCss()[r.conversionFormat];t(new n.colorChange(s))})}
                    ></${bH}>
                `);return V`
            ${e.showFormatName?V`
                      <h3>${e.colorFormatName}</h3>
                  `:j}
            ${i}
        `}}),SH;(function(e){e.Vertical=`vertical`,e.Horizontal=`horizontal`})(SH||={});function CH(e,t,n,r={}){let i=t.map((e,t)=>({cells:n(e,t),data:e}));return r.orientation===SH.Horizontal?{headerRow:void 0,rows:Jc(e,e=>{if(e.disabled)return;let t=r.hideHeaders?[]:[{content:e.content??e.key,key:e.key,data:void 0}],n=Jc(i,({data:t,cells:n})=>{if(n)return{content:n[e.key],key:e.key,data:t}},A.isTruthy);return{cells:[...t,...n],data:void 0}},A.isTruthy),orientation:SH.Horizontal}:{headerRow:r.hideHeaders?[]:Jc(e,e=>{if(!e.disabled)return{content:e.content??e.key,key:e.key,data:void 0}},A.isTruthy),rows:Jc(i,({cells:t,data:n})=>{if(t)return{cells:Jc(e,e=>{if(!e.disabled)return{content:t[e.key],key:e.key,data:n}},A.isTruthy),data:n}},A.isTruthy),orientation:SH.Vertical}}var wH=aN()({tagName:`vir-color-swatch`,styles:z`
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
                style=${z`
                    background-color: ${Tu(t)};
                    color: ${Tu(n)};
                `}
            >
                <slot></slot>
            </div>
        `}});function TH(e){return`groupName`in e}function EH(e,t){return V`
        <option
            ?selected=${e.value===t}
            aria-label=${e.label}
            ?disabled=${e.disabled}
            value=${e.value}
        >
            ${e.label}
        </option>
    `}var DH=FF()({tagName:`vira-select`,state(){return{randomId:el(32),cleanupListeners:void 0}},events:{valueChange:JM()},cssVars:{"vira-select-padding-horizontal":`10px`,"vira-select-padding-vertical":`6px`,"vira-select-icon-padding":`44px`},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError,"vira-select-not-raw":({inputs:e})=>!e.rawSelect},styles:({hostClasses:e,cssVars:t})=>z`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${K[`vira-form-foreground-color`].value};
        }

        .select-wrapper {
            ${AF};
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
                        ${pF({elementBorderSize:`1px`,noNesting:!0})}
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
                        ${dF[`vira-interaction-animation-duration`].value};
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
                ${uF}
            }
            ${J} {
                ${uF}
            }
            & * {
                cursor: not-allowed;
            }
        }

        :host(.${e[`vira-select-not-raw`].name}.${e[`vira-select-error`].name})
            .wrapper-border {
            border-color: ${K[`vira-form-error-color`].value};
        }
    `,init({state:e,updateState:t,host:n}){e.cleanupListeners?.();function r(){return Ac.instanceOf(n.shadowRoot.querySelector(`select`),HTMLSelectElement)}let i=[Gl(n,`mousedown`,e=>{let t=r();e.composedPath().includes(t)||(e.preventDefault(),e.stopPropagation(),t.showPicker&&t.showPicker())}),Gl(n,`click`,e=>{let t=r();e.composedPath().includes(t)||(e.preventDefault(),e.stopPropagation(),t.showPicker&&t.showPicker())})];t({cleanupListeners:()=>{i.forEach(e=>e())}})},cleanup({state:e,updateState:t}){e.cleanupListeners?.(),t({cleanupListeners:void 0})},render({inputs:e,state:t,dispatch:n,events:r}){let i=e.value||void 0,a=e.placeholder||i==null?V`
                      <option value="" disabled ?selected=${i==null}>
                          ${e.placeholder}
                      </option>
                  `:j,o=V`
            <span class="select-wrapper">
                <select
                    .value=${wM(i)}
                    class=${CM({placeholder:!i&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${wM(e.label?t.randomId:void 0)}
                    aria-label=${wM(e.label||void 0)}
                    aria-disabled=${wM(e.disabled?`true`:void 0)}
                    ${B(`input`,t=>{let a=sP(t,HTMLSelectElement),o=a.value;a.value!==i&&(a.selectedIndex=e.options.flatMap(e=>TH(e)?[...e.options]:[e]).findIndex(e=>e.value===i)),n(new r.valueChange(o))})}
                    ${hN(e.attributePassthrough?.select)}
                >
                    ${a}
                    ${e.options.map(e=>TH(e)?V`
                                <optgroup label=${e.groupName}>
                                    ${e.options.map(e=>EH(e,i))}
                                </optgroup>
                            `:EH(e,i))}
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
                <${J.assign({icon:AI})}
                    class="trigger-icon"
                ></${J}>
            </span>
        `;return e.label?V`
                <label for=${t.randomId} ${hN(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${o}
                </label>
            `:o}}),OH=class extends Vl()(`local-storage-client-all-values-event`){},kH=new class{shapes;options;listenTarget=new Wl;keyEvents;get AllValuesType(){throw Error(`Cannot use AllValuesType as a runtime value. It is a type only.`)}get ValueType(){throw Error(`Cannot use ValueType as a runtime value. It is a type only.`)}constructor(e,t={}){this.shapes=e,this.options=t,this.storeName=t.storeName||`local-storage-client`,this.keyEvents=Al(e,e=>class extends Vl()(`local-storage-client-${String(e)}-event`){}),this.get=Al(this.shapes,e=>(t={})=>this.getAllValues(t)[e]),this.listen=Al(this.shapes,e=>t=>this.listenTarget.listen(this.keyEvents[e],async e=>{await t(e.detail)})),this.set=Al(this.shapes,e=>t=>{Bj(t,this.shapes[e],{allowExtraKeys:!0},`LocalStorageClient: Invalid value for key '${String(e)}'.`);let n=this.getAllValues();return n[e]=t,globalThis.localStorage.setItem(this.storeName,JSON.stringify(n)),this.listenTarget.dispatch(new OH({detail:n})),this.listenTarget.dispatch(new this.keyEvents[e]({detail:t})),t}),this.delete=Al(this.shapes,e=>()=>{let t=this.getAllValues();delete t[e],globalThis.localStorage.setItem(this.storeName,JSON.stringify(t)),this.listenTarget.dispatch(new OH({detail:t})),this.listenTarget.dispatch(new this.keyEvents[e]({detail:void 0}))})}storeName;getAllValues({throwErrorOnFailure:e=!1}={}){return nl(()=>dl(JSON.parse(globalThis.localStorage.getItem(this.storeName)||`{}`),(t,n)=>{let r=this.shapes[t];if(r){if(e)Bj(n,r,{allowExtraKeys:!0});else if(!zj(n,r,{allowExtraKeys:!0}))return;return{key:t,value:n}}}),{handleError:t=>{if(e)throw Ie(t,`LocalStorageClient: store '${this.storeName}' is corrupt and cannot be loaded.`);return{}}})}listenToAllValues(e){return this.listenTarget.listen(OH,async t=>{await e(t.detail)})}listen;get;set;delete;clear(){globalThis.localStorage.removeItem(this.storeName)}destroy(){this.listenTarget.destroy()}}({lastFormat:Ej(VL)}),AH=Nl(VL).map(e=>({value:e,label:e.toUpperCase()})),jH=aN()({tagName:`vir-color-picker`,cssVars:{"vir-color-picker-swatch-width":{default:`100px`,syntax:Nd.Length},"vir-color-picker-swatch-height":{default:`100px`,syntax:Nd.Length}},state(){return{selectedFormatName:kH.get.lastFormat()||VL.rgb,rawInput:void 0}},hostClasses:{"vir-color-picker-always-show":({inputs:e})=>!!e.alwaysShowPicker},styles:({cssVars:e,hostClasses:t})=>z`
        :host {
            display: inline-flex;
        }

        ${t[`vir-color-picker-always-show`].selector} {
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }

        button {
            ${AF}
            cursor: pointer;
            display: flex;
        }

        ${DI} {
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
            font-family: ${mF[`vira-monospace`].value};
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
            ${MF.menuShadow}
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

            & ${vH} {
                flex-grow: 1;
                width: unset;
                color: inherit;
                height: 20px;
                border: none;
            }
        }
    `,events:{colorChange:JM()},render({inputs:e,dispatch:t,events:n,state:r,updateState:i}){let a=uH.isColor(e.color)?e.color:new uH(e.color||`black`),o=UL[r.selectedFormatName],s=r.rawInput??a.toCss()[o.rawSyntax],c=V`
            <div class="raw-input-wrapper">
                <${vH.assign({value:s})}
                    ${B(vH.events.valueChange,e=>{let r=e.detail;i({rawInput:r}),uH.isValidColorString(r)&&t(new n.colorChange(r))})}
                ></${vH}>
                <button
                    class="code-button"
                    ${B(`click`,async()=>{await globalThis.navigator.clipboard.writeText(s)})}
                >
                    <${J.assign({icon:KI,fitContainer:!0})}></${J}>
                </button>
            </div>
        `,l=V`
            <button
                class="code-button"
                ${B(`click`,async()=>{await globalThis.navigator.clipboard.writeText(a.hexString)})}
            >
                <span>${a.hexString}</span>
                <${J.assign({icon:KI,fitContainer:!0})}></${J}>
            </button>
        `,u=V`
            <div class="swatch-wrapper">
                <${wH.assign({backgroundColor:a})}></${wH}>
                ${e.showHexValue?l:j}
            </div>
        `,d=V`
            <div class="picker">
                <${DH.assign({options:AH,value:r.selectedFormatName})}
                    ${B(DH.events.valueChange,e=>{let t=Lc.isEnumValue(e.detail,VL);t&&(i({selectedFormatName:t}),kH.set.lastFormat(t))})}
                ></${DH}>
                ${c}
                <${xH.assign({color:a,colorFormatName:r.selectedFormatName,showFormatName:!1})}
                    ${B(xH.events.colorChange,e=>{t(new n.colorChange(e.detail)),i({rawInput:void 0})})}
                ></${xH}>
            </div>
        `;return e.alwaysShowPicker?V`
                ${u} ${d}
            `:V`
                <${DI.assign({keepOpenAfterInteraction:!0})}>
                    <button
                        class="trigger"
                        slot=${DI.slotNames.trigger}
                        ${B(`mousedown`,()=>{let e=kH.get.lastFormat();e&&i({selectedFormatName:e})})}
                    >
                        ${u}
                    </button>
                    <div class="pop-up" slot=${DI.slotNames.popUp}>
                        ${d}
                    </div>
                </${DI}>
            `}}),MH=[`pagehide`,`pageshow`,`popstate`],NH=30,PH=FF()({tagName:`vira-drawer`,events:{drawerClose:JM()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanupListeners:void 0,isDragging:!1,dragStartY:0,dragCurrentY:0}},cleanup({state:e}){e.cleanupListeners?.()},hostClasses:{"vira-drawer-dragging":({state:e})=>e.isDragging},slotNames:[`drawerTitle`],cssVars:{"vira-drawer-backdrop-filter":`blur(3px)`,"vira-drawer-max-height":`80dvh`},styles:({cssVars:e,hostClasses:t})=>z`
        :host {
            display: contents;
        }

        ${t[`vira-drawer-dragging`].selector} {
            ${NF};
        }

        h1 {
            ${kF};
        }

        dialog {
            ${fH(G.colors[iF])}
            border: none;
            padding: 0;
            overflow: hidden;
            position: fixed;
            inset: auto 0 0 0;
            margin: 0;
            width: 100%;
            max-width: 100%;
            max-height: ${e[`vira-drawer-max-height`].value};
            border-radius: 16px 16px 0 0;
            ${MF.modal}
            transition: transform ${dF[`vira-pretty-animation-duration`].value} ease;

            &[open] {
                display: flex;
                flex-direction: column;
            }

            &::backdrop {
                background: ${K[`vira-form-modal-backdrop-color`].value};
                backdrop-filter: ${e[`vira-drawer-backdrop-filter`].value};
            }

            & .drawer-content-wrapper {
                overflow: hidden;
                display: flex;
                flex-direction: column;

                & .drag-handle-wrapper {
                    display: flex;
                    justify-content: center;
                    padding: 8px 0 0;
                    cursor: grab;
                    touch-action: none;

                    &:active {
                        cursor: grabbing;
                    }

                    & .drag-handle {
                        width: 36px;
                        height: 4px;
                        border-radius: 2px;
                        background-color: ${K[`vira-form-secondary-body-foreground`].value};
                        opacity: 0.5;
                    }
                }

                & .header {
                    padding: 8px 24px 16px;
                    display: flex;
                    gap: 16px;
                    align-items: flex-start;

                    & .header-text-wrapper {
                        display: flex;
                        flex-direction: column;
                        gap: 4px;
                        align-self: center;
                        flex-grow: 1;

                        & h1 {
                            font-size: 20px;
                        }
                    }

                    & button.close {
                        ${AF};
                        cursor: pointer;
                        padding: 4px;
                        border-radius: ${K[`vira-form-radius`].value};

                        &:hover {
                            background-color: ${K[`vira-form-selection-hover-color`].value};
                        }

                        & ${J} {
                            display: flex;
                        }
                    }
                }

                & .body {
                    padding: 0 24px 24px;
                    overflow: auto;
                    overscroll-behavior: contain;
                }
            }
        }
    `,render({inputs:e,state:t,updateState:n,events:r,dispatch:i,slotNames:a}){if(t.dialogElement&&e.open!==t.dialogElement.open&&(e.open?t.dialogElement.showModal():t.dialogElement.close()),t.previousOpenValue!==e.open&&(t.cleanupListeners?.(),n({previousOpenValue:e.open}),e.open)){let e=MH.map(e=>Kl(e,()=>{i(new r.drawerClose)}));n({cleanupListeners:()=>{e.forEach(e=>e())}})}function o(){e.open&&(t.cleanupListeners?.(),i(new r.drawerClose))}if(t.dialogElement)if(t.isDragging){let e=Math.max(0,t.dragCurrentY-t.dragStartY);t.dialogElement.style.transform=`translateY(${String(e)}px)`,t.dialogElement.style.transition=`none`}else t.dialogElement.style.transform=``,t.dialogElement.style.transition=``;return V`
            <dialog
                ${bN(e=>{n({dialogElement:Ac.instanceOf(e,HTMLDialogElement)})})}
                ${B(`close`,()=>{o()})}
                ${B(`mousedown`,e=>{t.contentElement&&!e.composedPath().includes(t.contentElement)&&o()})}
            >
                <div
                    class="drawer-content-wrapper"
                    ${bN(e=>{n({contentElement:Ac.instanceOf(e,HTMLDivElement)})})}
                >
                    <div
                        class="drag-handle-wrapper"
                        ${B(`dblclick`,()=>{o()})}
                        ${B(`pointerdown`,e=>{n({isDragging:!0,dragStartY:e.clientY,dragCurrentY:e.clientY});function r(e){n({dragCurrentY:e.clientY})}function i(e){let r=e.clientY-t.dragStartY;n({isDragging:!1,dragStartY:0,dragCurrentY:0}),r>NH&&o(),a.forEach(e=>e())}let a=[Kl(`pointermove`,r),Kl(`pointerup`,i)]})}
                    >
                        <div class="drag-handle"></div>
                    </div>
                    <div class="header">
                        <div class="header-text-wrapper">
                            <h1>
                                <slot name=${a.drawerTitle}>${e.drawerTitle}</slot>
                            </h1>
                        </div>
                        <button
                            class="close"
                            aria-label="Close"
                            ${B(`click`,()=>{t.dialogElement?.close()})}
                        >
                            <${J.assign({icon:OL})}></${J}>
                        </button>
                    </div>
                    ${e.open?V`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:j}
                </div>
            </dialog>
        `}}),FH=FF()({tagName:`vira-error`,cssVars:{"vira-error-font-weight":`bold`},styles:({cssVars:e})=>z`
        :host {
            color: ${K[`vira-form-error-color`].value};
            font-weight: ${e[`vira-error-font-weight`].value};
        }
    `,render(){return V`
            <slot></slot>
        `}}),IH={value:z`transparent`};function LH(e){let t=xF[e][`behind-bg`],n=xF[e][`on-self`];return{[EF.Standard]:{idle:{textColor:t[gF.NonBodyText].foreground,backgroundColor:t[gF.NonBodyText].background,borderColor:t[gF.NonBodyText].background},hover:{textColor:t[gF.Header].foreground,backgroundColor:t[gF.Header].background,borderColor:t[gF.Header].background},active:{textColor:t[gF.NonBodyText].foreground,backgroundColor:t[gF.NonBodyText].background,borderColor:t[gF.NonBodyText].background}},[EF.Subtle]:{idle:{textColor:n[gF.BodyText].foreground,backgroundColor:n[gF.BodyText].background,borderColor:n[gF.BodyText].background},hover:{textColor:n[gF.NonBodyText].foreground,backgroundColor:n[gF.NonBodyText].background,borderColor:n[gF.NonBodyText].background},active:{textColor:n[gF.BodyText].foreground,backgroundColor:n[gF.BodyText].background,borderColor:n[gF.BodyText].background}}}}function RH(e){let t=xF[e][`on-self`][gF.BodyText];return{idle:{textColor:t.foreground,backgroundColor:IH,borderColor:t.background},hover:{textColor:t.foreground,backgroundColor:xF[e][`behind-bg`][gF.Invisible].background,borderColor:t.background},active:{textColor:t.foreground,backgroundColor:xF[e][`behind-bg`][gF.Decoration].background,borderColor:t.background}}}var zH={[q.Plain]:{[EF.Standard]:{idle:{backgroundColor:G.colors[iF].foreground,textColor:G.colors[iF].background,borderColor:G.colors[iF].foreground},hover:{backgroundColor:G.colors[`vira-grey-behind-bg-body`].background,textColor:G.colors[`vira-grey-behind-bg-body`].foreground,borderColor:G.colors[`vira-grey-behind-bg-body`].background},active:{backgroundColor:G.colors[iF].foreground,textColor:G.colors[iF].background,borderColor:G.colors[iF].foreground}},[EF.Subtle]:{idle:{backgroundColor:IH,textColor:G.colors[iF].foreground,borderColor:IH},hover:{backgroundColor:G.colors[`vira-grey-behind-fg-small-body`].background,textColor:G.colors[`vira-grey-behind-fg-small-body`].foreground,borderColor:G.colors[`vira-grey-behind-fg-small-body`].background},active:{backgroundColor:G.colors[`vira-grey-behind-fg-body`].background,textColor:G.colors[`vira-grey-behind-fg-body`].foreground,borderColor:G.colors[`vira-grey-behind-fg-body`].background}}},[q.Accent]:LH(SF[q.Accent]),[q.Neutral]:LH(SF[q.Neutral]),[q.Danger]:LH(SF[q.Danger]),[q.Warning]:LH(SF[q.Warning]),[q.Positive]:LH(SF[q.Positive])},BH={[q.Plain]:{idle:{textColor:G.colors[iF].foreground,backgroundColor:IH,borderColor:G.colors[`vira-grey-on-self-body`].background},hover:{backgroundColor:G.colors[`vira-grey-behind-fg-small-body`].background,textColor:G.colors[`vira-grey-behind-fg-small-body`].foreground,borderColor:G.colors[`vira-grey-on-self-body`].background},active:{backgroundColor:G.colors[`vira-grey-behind-fg-body`].background,textColor:G.colors[`vira-grey-behind-fg-body`].foreground,borderColor:G.colors[`vira-grey-on-self-body`].background}},[q.Accent]:RH(SF[q.Accent]),[q.Neutral]:RH(SF[q.Neutral]),[q.Danger]:RH(SF[q.Danger]),[q.Warning]:RH(SF[q.Warning]),[q.Positive]:RH(SF[q.Positive])},VH=FF()({tagName:`vira-tag`,cssVars:{"vira-tag-text-color":`transparent`,"vira-tag-background-color":`transparent`,"vira-tag-border-color":`transparent`,"vira-tag-hover-text-color":`transparent`,"vira-tag-hover-background-color":`transparent`,"vira-tag-hover-border-color":`transparent`,"vira-tag-active-text-color":`transparent`,"vira-tag-active-background-color":`transparent`,"vira-tag-active-border-color":`transparent`,"vira-tag-disabled-text-color":G.colors[`vira-grey-behind-bg-decoration`].foreground.value,"vira-tag-disabled-background-color":G.colors[`vira-grey-behind-bg-decoration`].background.value,"vira-tag-disabled-border-color":G.colors[`vira-grey-behind-bg-decoration`].background.value,"vira-tag-border-radius":`1000px`,"vira-tag-gap":`6px`,"vira-tag-horizontal-padding":`12px`,"vira-tag-border-width":`2px`},events:{toggle:JM(),cancel:JM()},hostClasses:{"vira-tag-selectable":({inputs:e})=>A.isBoolean(e.isClickable?.selected),"vira-tag-checked":({inputs:e})=>!!e.isClickable?.selected,"vira-tag-not-checked":({inputs:e})=>e.isClickable?.selected===!1,"vira-tag-cancellable":({inputs:e})=>!!e.isClickable?.cancellable,"vira-tag-not-clickable":({inputs:e})=>!e.isClickable,"vira-tag-disabled":({inputs:e})=>!!e.disabled,"vira-tag-size-large":({inputs:e})=>e.size===wF.Large,"vira-tag-size-medium":({inputs:e})=>!e.size||e.size===wF.Medium,"vira-tag-size-small":({inputs:e})=>e.size===wF.Small,"vira-tag-emphasis-standard":({inputs:e})=>!e.emphasis||e.emphasis===EF.Standard,"vira-tag-emphasis-subtle":({inputs:e})=>e.emphasis===EF.Subtle,"vira-tag-color-accent":({inputs:e})=>!e.color||e.color===q.Accent,"vira-tag-color-plain":({inputs:e})=>e.color===q.Plain,"vira-tag-color-neutral":({inputs:e})=>e.color===q.Neutral,"vira-tag-color-danger":({inputs:e})=>e.color===q.Danger,"vira-tag-color-warning":({inputs:e})=>e.color===q.Warning,"vira-tag-color-positive":({inputs:e})=>e.color===q.Positive},styles:({cssVars:e,hostClasses:t})=>{function n(){return Tu(DF.flatMap(n=>CF.map(r=>{let i=zH[r][n];return z`
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
`))}function r(){return Tu(CF.map(n=>{let r=BH[n],i=t[`vira-tag-color-${n}`].selector,a=t[`vira-tag-not-checked`].selector;return z`
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
`))}function i(){return Tu(TF.map(e=>z`
                    ${t[`vira-tag-size-${e}`].selector} button {
                        height: ${OF[e]}px;
                        font-size: ${K[`vira-form-${e}-text-size`].value};
                    }
                `).join(`
`))}return z`
            :host {
                display: inline-flex;
            }

            ${i()}
            ${n()}
            ${r()}

            button {
                ${AF}
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
                ${NF}

                & button {
                    color: ${e[`vira-tag-disabled-text-color`].value};
                    background-color: ${e[`vira-tag-disabled-background-color`].value};
                    border-color: ${e[`vira-tag-disabled-border-color`].value};
                }
            }
        `},render({inputs:e,dispatch:t,events:n}){let r=!e.isClickable||!!e.disabled;return V`
            <button
                ?disabled=${r}
                ${B(`click`,()=>{r||(e.isClickable?.selected==null?e.isClickable?.cancellable&&t(new n.cancel):t(new n.toggle(!e.isClickable.selected)))})}
            >
                <${J.assign({icon:OI})}
                    class="selected-check"
                ></${J}>
                <span class="text">${String(e.text)}</span>
                <${J.assign({icon:PI})}
                    class="cancel-x"
                ></${J}>
            </button>
        `}}),HH=MN(),UH=HH()({tagName:`book-route-link`,cssVars:{"book-route-link-anchor-padding":`0px`},styles:({cssVars:e})=>z`
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
                ${B(`click`,n=>{(!e.router||HP(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new eF(e.route)))})}
            >
                <slot></slot>
            </a>
        `});function WH(e,t){return e.entry.entryType===a.Root?!1:e.entry.entryType===a.Page||A.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:A.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}var GH=HH()({tagName:`book-nav`,cssVars:{"book-nav-internal-indent":`0`},styles:({cssVars:e})=>z`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${Rd[`element-book-page-background-faint-level-2-color`].value};
        }

        .title-row:hover {
            background-color: ${Rd[`element-book-nav-hover-background-color`].value};
            color: ${Rd[`element-book-nav-hover-foreground-color`].value};
        }

        .title-row:active {
            background-color: ${Rd[`element-book-nav-active-background-color`].value};
            color: ${Rd[`element-book-nav-active-foreground-color`].value};
        }

        .title-row {
            display: block;
            ${UH.cssVars[`book-route-link-anchor-padding`].name}: 1px 24px 1px calc(calc(16px * ${e[`book-nav-internal-indent`].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${Rd[`element-book-nav-selected-background-color`].value};
            color: ${Rd[`element-book-nav-selected-foreground-color`].value};
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
            color: ${Rd[`element-book-accent-icon-color`].value};
        }
    `,render({inputs:e}){let t=e.flattenedNodes.map(t=>{if(WH(t,e.selectedPath))return V`
                <li style=${z`
                --book-nav-internal-indent: ${t.fullUrlBreadcrumbs.length-1};
            `}>
                    <${UH.assign({router:e.router,route:{paths:[gu.Book,...t.fullUrlBreadcrumbs]}})}
                        class=${CM({"title-row":!0,selected:e.selectedPath?A.jsonEquals(e.selectedPath,t.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${DN(ru(t,a.ElementExample),V`
                                    <${J.assign({icon:MI})}></${J}>
                                `)}
                            ${t.entry.title}
                        </div>
                    </${UH}>
                </li>
            `});return V`
            <${UH.assign({route:vu,router:e.router})}>
                <slot>Book</slot>
            </${UH}>
            <ul>
                ${t}
            </ul>
        `}}),KH=HH()({tagName:`book-error`,styles:z`
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
    `,render({inputs:e}){return(A.isArray(e.message)?e.message:[e.message]).map(e=>V`
                <p>${e}</p>
            `)}}),qH=HH()({tagName:`book-page-controls`,events:{controlValueChange:JM()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>z`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${Rd[`element-book-page-foreground-faint-level-1-color`].value};
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

        ${vH}, ${DH} {
            height: 24px;
            max-width: 128px;
        }

        ${J}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:n}){return Object.entries(e.config).length?Object.entries(e.config).map(([r,i],a)=>{if(i.controlType===Bc.Hidden)return``;let o=JH(e.currentValues[r],i,i=>{let a=A.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[r];if(!a)throw Error(`Failed to find breadcrumbs from given control name: '${r}'`);t(new n.controlValueChange({fullUrlBreadcrumbs:a,newValues:{...Object.fromEntries(Object.keys(e.config).map(t=>[t,e.currentValues[t]])),[r]:i}}))});return V`
                    <div class="control-wrapper">
                        ${DN(a===0,V`
                                <${J.assign({icon:cL})}
                                    class="options-icon"
                                ></${J}>
                            `)}
                        <label class="control-wrapper">
                            <span>
                                ${i.controlType===Bc.Custom?V`
                                          &nbsp;
                                      `:r}
                            </span>
                            ${o}
                        </label>
                    </div>
                `}):``}});function JH(e,t,n){return zc(t,Bc.Hidden)?``:zc(t,Bc.Checkbox)?V`
            <${IL.assign({value:!!e})}
                ${B(IL.events.valueChange,e=>{n(e.detail)})}
            ></${IL}>
        `:zc(t,Bc.Color)?V`
            <${jH.assign({color:e})}
                style=${z`
                    ${jH.cssVars[`vir-color-picker-swatch-height`].name}: 24px;
                    ${jH.cssVars[`vir-color-picker-swatch-width`].name}: 24px;
                `}
                ${B(jH.events.colorChange,e=>{n(e.detail)})}
            ></${jH}>
        `:zc(t,Bc.Text)?V`
            <${vH.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${B(vH.events.valueChange,e=>{n(e.detail)})}
            ></${vH}>
        `:zc(t,Bc.Number)?V`
            <${vH.assign({value:e,allowedInputs:/[\d.]/})}
                ${B(vH.events.valueChange,e=>{n(e.detail)})}
            ></${vH}>
        `:zc(t,Bc.Dropdown)?V`
            <${DH.assign({value:e,options:t.options.map(e=>({label:e,value:e}))})}
                ${B(DH.events.valueChange,e=>{n(e.detail)})}
            ></${DH}>
        `:zc(t,Bc.Custom)?t.content:V`
            <p class="error">
                ${t.controlType} controls are not implemented yet.
            </p>
        `}var YH=HH()({tagName:`book-breadcrumbs`,styles:z`
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
                <${UH.assign({route:{hash:void 0,search:void 0,paths:[gu.Book,...a]},router:e.router})}>
                    ${t}
                </${UH}>
                ${o}
            `}):V`
                &nbsp;
            `}}),XH=HH()({tagName:`book-breadcrumbs-bar`,styles:z`
        :host {
            border-bottom: 1px solid
                ${Rd[`element-book-page-foreground-faint-level-2-color`].value};
            padding: 4px 8px;
            background-color: ${Rd[`element-book-page-background-color`].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return V`
            ${DN(!!e.currentSearch,V`
                    &nbsp;
                `,V`
                    <${YH.assign({currentRoute:e.currentRoute,router:e.router})}></${YH}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${B(`input`,async e=>{let n=e.currentTarget;if(!(n instanceof HTMLInputElement))throw TypeError(`Failed to find input element for search.`);let r=n.value;await go({milliseconds:200}),n.value===r&&(n.value?t(new eF({paths:[gu.Search,encodeURIComponent(n.value)]})):t(new eF(vu)))})}
            />
        `}}),ZH=HH()({tagName:`book-entry-description`,styles:z`
        :host {
            color: ${Rd[`element-book-page-foreground-faint-level-1-color`].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${Rd[`element-book-page-foreground-color`].value};
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
            `)}}),QH=HH()({tagName:`book-page-wrapper`,styles:z`
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

        ${UH} {
            display: inline-block;
        }
    `,render({inputs:e}){let t=e.isTopLevel?V`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:V`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,n=[gu.Book,...e.pageNode.fullUrlBreadcrumbs],r=e.pageNode.entry.errors.length?tl(e.pageNode.entry.errors):void 0;return r&&console.error(r),V`
            <div class="page-header block-entry">
                <div class="title-group">
                    ${e.blockNavigation?t:V`
                  <${UH.assign({route:{paths:n,hash:void 0,search:void 0},router:e.router})}>
                      ${t}
                  </${UH}>
              `}
                    ${r?V`
                              <${KH.assign({message:r.message})}></${KH}>
                          `:V`
                              <${ZH.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${ZH}>
                              <${qH.assign({config:e.pageNode.entry.controls,currentValues:du(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${qH}>
                          `}
                </div>
            </div>
        `}}),$H=HH()({tagName:`book-element-example-title`,styles:z`
        :host {
            display: flex;
            color: ${Rd[`element-book-page-foreground-faint-level-1-color`].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){if(e.blockNavigation)return e.elementExampleNode.entry.title;let t=[gu.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return V`
            <${UH.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${UH}>
        `}}),eU=Symbol(`unset-internal-state`),tU=HH()({tagName:`book-element-example-viewer`,state(){return{isUnset:eU}},render({state:e,inputs:t,updateState:n}){try{if(t.elementExampleNode.entry.errors.length)throw tl(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render==`string`)throw Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===eU&&n({isUnset:void 0,...t.elementExampleNode.entry.state?.()});let r=t.elementExampleNode.entry.render({state:e,updateState:n,controls:t.currentPageControls});if(r instanceof Promise)throw TypeError(`render output cannot be a promise`);return V`
                ${DN(!!t.elementExampleNode.entry.styles,V`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${r}
            `}catch(e){return console.error(`ERROR HERE`,Ne(e)),console.error(e),V`
                <${KH.assign({message:`${t.elementExampleNode.entry.title} failed: ${Ne(e)}`})}></${KH}>
            `}},options:{allowPolymorphicState:!0}}),nU=HH()({tagName:`book-element-example-wrapper`,styles:z`
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

        ${$H} {
            color: ${Rd[`element-book-page-foreground-faint-level-1-color`].value};
        }

        :host(:hover) ${$H} {
            color: ${Rd[`element-book-accent-icon-color`].value};
        }
    `,render({inputs:e}){return V`
            <div class="individual-example-wrapper">
                <${$H.assign({blockNavigation:e.blockNavigation,elementExampleNode:e.elementExampleNode,router:e.router})}></${$H}>
                <${tU.assign(e)}></${tU}>
            </div>
        `}}),rU={milliseconds:10},iU,aU=new Map,oU=new Map;function sU(){return iU||=new IntersectionObserver(e=>{for(let t of e){let e=t.target,n=aU.get(e);if(n)if(t.isIntersecting){if(!oU.has(e)){let t=globalThis.setTimeout(()=>{oU.delete(e),n(),iU?.unobserve(e),aU.delete(e)},uo(rU,{milliseconds:!0}).milliseconds);oU.set(e,t)}}else{let t=oU.get(e);t&&(clearTimeout(t),oU.delete(e))}}},{rootMargin:`100px`}),iU}function cU(e){let t=oU.get(e);t&&(clearTimeout(t),oU.delete(e)),aU.delete(e),iU?.unobserve(e)}var lU=HH()({tagName:`book-lazy-entry`,state(){return{hasRendered:!1,placeholderElement:void 0}},styles:z`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&cU(e.placeholderElement)},render({inputs:e,state:t,updateState:n}){return t.hasRendered?e.content:V`
            <div
                class="placeholder"
                ${bN(e=>{t.placeholderElement&&cU(t.placeholderElement),n({placeholderElement:e}),aU.set(e,()=>{n({hasRendered:!0})}),sU().observe(e)})}
            >
                &nbsp;
            </div>
        `}});function uU(e,t,n,r){let i=lu(n,r),o=[];if(i){let n=uU(e,t,i,r);n&&o.push(n)}if(ru(n,a.Page)&&!e.includes(n)){let e=du(t,n.fullUrlBreadcrumbs);o.push({config:n.entry.controls,current:e,breadcrumbs:Al(e,()=>n.fullUrlBreadcrumbs)})}return o.reduce((e,t)=>({config:{...e.config,...t.config},current:{...e.current,...t.current},breadcrumbs:{...e.breadcrumbs,...t.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function dU({blockNavigation:e,currentNodes:t,isTopLevel:n,router:r,isSearching:i,controls:o,originalTree:s}){if(!t.length&&i)return[V`
                No results
            `];let c=A.isLengthAtLeast(t,1)?uU(t,o,t[0],s):void 0;return[c&&Object.values(c.config).length&&A.isLengthAtLeast(t,1)?V`
                  <${qH.assign({config:c.config,currentValues:c.current,fullUrlBreadcrumbs:c.breadcrumbs})}></${qH}>
              `:j,uN(t,e=>e.fullUrlBreadcrumbs.join(`>`),t=>{if(ru(t,a.Page))return V`
                    <${QH.assign({blockNavigation:e,isTopLevel:n,pageNode:t,controls:o,router:r})}
                        class="block-entry"
                    ></${QH}>
                `;if(ru(t,a.ElementExample)){let n=du(o,t.fullUrlBreadcrumbs.slice(0,-1)),i=V`
                    <${nU.assign({blockNavigation:e,elementExampleNode:t,currentPageControls:n,router:r})}></${nU}>
                `;return V`
                    <${lU.assign({content:i})}
                        class="inline-entry ${CM({"block-entry":t.entry.isVertical})}"
                    ></${lU}>
                `}else if(ru(t,a.Root))return j;else{let e=V`
                    <${KH.assign({message:`Unknown entry type for rendering: '${t.entry.entryType}'`})}></${KH}>
                `;return V`
                    <${lU.assign({content:e})}
                        class="block-entry"
                    ></${lU}>
                `}})]}var fU=HH()({tagName:`book-entry-display`,state(){return{lastElement:void 0}},styles:z`
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

        ${XH} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${dF[`vira-interaction-animation-duration`].value} forwards;
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
    `,events:{loadingRender:JM()},render:({inputs:e,dispatch:t,events:n,state:r,updateState:i})=>{let a=_u(e.currentRoute.paths),o=dU({blockNavigation:e.blockNavigation,currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!a,controls:e.controls,originalTree:e.originalTree});return V`
            <${XH.assign({currentSearch:a,currentRoute:e.currentRoute,router:e.router})}></${XH}>

            ${DN(e.showLoading,V`
                    <div
                        ${bN(()=>{t(new n.loadingRender(!0))})}
                        class="loading"
                    >
                        <${J.assign({icon:iL})}></${J}>
                    </div>
                    ${DN(!!r.lastElement,V`
                            ${r.lastElement}
                            <slot></slot>
                        `)}
                `,V`
                    <div
                        ${bN(e=>{i({lastElement:e})})}
                        class="all-book-entries-wrapper"
                    >
                        ${o}
                    </div>
                    <slot></slot>
                `)}
        `}});function pU(e,t,n){let r=mU(e,t);return r.length?r:(n(vu),mU(e,vu.paths))}function mU(e,t){return e.filter(e=>Yl({searchFor:t.slice(1),searchIn:e.fullUrlBreadcrumbs}))}var hU=aN()({tagName:`element-book-app`,state(){return{currentRoute:vu,router:void 0,loading:!0,colors:{config:void 0,theme:$N(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:JM()},slotNames:[`footer`,`navHeader`],styles:z`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${Rd[`element-book-page-background-color`].value};
            color: ${Rd[`element-book-page-foreground-color`].value};
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

        ${fU} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${GH} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:n,updateState:r,dispatch:i,events:a,slotNames:o})=>{t._debug&&console.info(`rendering element-book app`);function s(t){return{...e.currentRoute,...t}}function c(t){let n=s(t);return!A.jsonEquals(e.currentRoute,n)}function l(n){t.preventWindowTitleChange||(e.originalWindowTitle||r({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,n].filter(A.isTruthy).join(` - `))}function u(n){if(!c(n))return;let o=s(n);e.router?e.router.setRoute(o):r({currentRoute:{...e.currentRoute,...o}}),t.elementBookRoutePaths&&!A.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new a.pathUpdate(o.paths))}try{if(t.elementBookRoutePaths&&!A.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&u({paths:kl(t.elementBookRoutePaths)}),t.internalRouterConfig?.useInternalRouter&&!e.router){let e=QP(t.internalRouterConfig.basePath);r({router:e}),e.listen(!0,e=>{r({currentRoute:e})})}else !t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();let i={themeColor:t.themeColor};if(!A.jsonEquals(i,e.colors.config)){let e=$N(i);r({colors:{config:i,theme:e}}),Bd(n,e)}let a=t._debug??!1,s=ou({entries:t.pages,debug:a});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info(`regenerating global controls`),r({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:mu(s.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));let d=_u(e.currentRoute.paths),f=(d?gP({flattenedNodes:s.flattenedNodes,searchQuery:d}):void 0)??pU(s.flattenedNodes,e.currentRoute.paths,u);l(f[0]?.entry.title);let p=e.treeBasedControls?.controls;return p?(t._debug&&console.info({currentControls:p}),V`
                <div
                    class="root"
                    ${B(eF,e=>{let t=e.detail;if(c(t)&&(r({loading:!0}),u(t),!(n.shadowRoot.querySelector(GH.tagName)instanceof GH)))throw TypeError(`Failed to find child '${GH.tagName}'`)})}
                    ${B(qH.events.controlValueChange,t=>{if(!e.treeBasedControls)return;let n=pu(p,t.detail.fullUrlBreadcrumbs,t.detail.newValues);r({treeBasedControls:{...e.treeBasedControls,controls:n}})})}
                >
                    ${t.blockNavigation?j:V`
                              <${GH.assign({flattenedNodes:s.flattenedNodes,router:e.router,selectedPath:d?void 0:e.currentRoute.paths.slice(1)})}>
                                  <slot name=${o.navHeader}></slot>
                              </${GH}>
                          `}
                    <${fU.assign({blockNavigation:!!t.blockNavigation,controls:p,currentNodes:f,currentRoute:e.currentRoute,debug:a,originalTree:s.tree,router:e.router,showLoading:e.loading})}
                        ${B(fU.events.loadingRender,async e=>{await eP();let t=n.shadowRoot.querySelector(fU.tagName);t?t.scroll({top:0,behavior:`instant`}):console.error(`Failed to find '${fU.tagName}' for scrolling.`),await eP(),r({loading:!e.detail})})}
                    >
                        <slot name=${o.footer}></slot>
                    </${fU}>
                </div>
            `):V`
                    <${KH.assign({message:`Failed to generate page controls.`})}></${KH}>
                `}catch(e){return console.error(e),V`
                <p class="error">${Ne(e)}</p>
            `}}}),gU=hu({title:`Cards`,parent:void 0,descriptionParagraphs:[`Multiple full cards of structured render data.`]});function _U({newStyles:e,oldStyles:t,shadowRoot:n,maintainFirstStylesheet:r}){if(e!==t){let t=new CSSStyleSheet;return t.replaceSync(e),n.adoptedStyleSheets=[r?Ac.isDefined(n.adoptedStyleSheets[0]):void 0,t].filter(A.isTruthy),!0}return!1}function vU(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var yU=vU();function bU(e){yU=e}var xU={exec:()=>null};function SU(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(wU.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var CU=(()=>{try{return!0}catch{return!1}})(),wU={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,`i`),blockquoteBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}>`)},TU=/^(?:[ \t]*(?:\n|$))+/,EU=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,DU=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,OU=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,kU=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,AU=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,jU=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,MU=SU(jU).replace(/bull/g,AU).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),NU=SU(jU).replace(/bull/g,AU).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),PU=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,FU=/^[^\n]+/,IU=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,LU=SU(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,IU).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),RU=SU(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,AU).getRegex(),zU=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,BU=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,VU=SU(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,BU).replace(`tag`,zU).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),HU=SU(PU).replace(`hr`,OU).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,zU).getRegex(),UU={blockquote:SU(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,HU).getRegex(),code:EU,def:LU,fences:DU,heading:kU,hr:OU,html:VU,lheading:MU,list:RU,newline:TU,paragraph:HU,table:xU,text:FU},WU=SU(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,OU).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,zU).getRegex(),GU={...UU,lheading:NU,table:WU,paragraph:SU(PU).replace(`hr`,OU).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,WU).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,zU).getRegex()},KU={...UU,html:SU(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,BU).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:xU,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:SU(PU).replace(`hr`,OU).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,MU).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},qU=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,JU=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,YU=/^( {2,}|\\)\n(?!\s*$)/,XU=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ZU=/[\p{P}\p{S}]/u,QU=/[\s\p{P}\p{S}]/u,$U=/[^\s\p{P}\p{S}]/u,eW=SU(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,QU).getRegex(),tW=/(?!~)[\p{P}\p{S}]/u,nW=/(?!~)[\s\p{P}\p{S}]/u,rW=/(?:[^\s\p{P}\p{S}]|~)/u,iW=SU(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,CU?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),aW=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,oW=SU(aW,`u`).replace(/punct/g,ZU).getRegex(),sW=SU(aW,`u`).replace(/punct/g,tW).getRegex(),cW=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,lW=SU(cW,`gu`).replace(/notPunctSpace/g,$U).replace(/punctSpace/g,QU).replace(/punct/g,ZU).getRegex(),uW=SU(cW,`gu`).replace(/notPunctSpace/g,rW).replace(/punctSpace/g,nW).replace(/punct/g,tW).getRegex(),dW=SU(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,$U).replace(/punctSpace/g,QU).replace(/punct/g,ZU).getRegex(),fW=SU(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,ZU).getRegex(),pW=SU(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,$U).replace(/punctSpace/g,QU).replace(/punct/g,ZU).getRegex(),mW=SU(/\\(punct)/,`gu`).replace(/punct/g,ZU).getRegex(),hW=SU(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),gW=SU(BU).replace(`(?:-->|$)`,`-->`).getRegex(),_W=SU(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,gW).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),vW=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,yW=SU(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,vW).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),bW=SU(/^!?\[(label)\]\[(ref)\]/).replace(`label`,vW).replace(`ref`,IU).getRegex(),xW=SU(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,IU).getRegex(),SW=SU(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,bW).replace(`nolink`,xW).getRegex(),CW=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,wW={_backpedal:xU,anyPunctuation:mW,autolink:hW,blockSkip:iW,br:YU,code:JU,del:xU,delLDelim:xU,delRDelim:xU,emStrongLDelim:oW,emStrongRDelimAst:lW,emStrongRDelimUnd:dW,escape:qU,link:yW,nolink:xW,punctuation:eW,reflink:bW,reflinkSearch:SW,tag:_W,text:XU,url:xU},TW={...wW,link:SU(/^!?\[(label)\]\((.*?)\)/).replace(`label`,vW).getRegex(),reflink:SU(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,vW).getRegex()},EW={...wW,emStrongRDelimAst:uW,emStrongLDelim:sW,delLDelim:fW,delRDelim:pW,url:SU(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,CW).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:SU(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,CW).getRegex()},DW={...EW,br:SU(YU).replace(`{2,}`,`*`).getRegex(),text:SU(EW.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},OW={normal:UU,gfm:GU,pedantic:KU},kW={normal:wW,gfm:EW,breaks:DW,pedantic:TW},AW={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},jW=e=>AW[e];function MW(e,t){if(t){if(wU.escapeTest.test(e))return e.replace(wU.escapeReplace,jW)}else if(wU.escapeTestNoEncode.test(e))return e.replace(wU.escapeReplaceNoEncode,jW);return e}function NW(e){try{e=encodeURI(e).replace(wU.percentDecode,`%`)}catch{return null}return e}function PW(e,t){let n=e.replace(wU.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(wU.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(wU.slashPipe,`|`);return n}function FW(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function IW(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function LW(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function RW(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function zW(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var BW=class{options;rules;lexer;constructor(e){this.options=e||yU}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,``);return{type:`code`,raw:t[0],codeBlockStyle:`indented`,text:this.options.pedantic?e:FW(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=zW(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=FW(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:FW(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=FW(t[0],`
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
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=LW(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),e.task){if(e.text=e.text.replace(this.rules.other.listReplaceTask,``),e.tokens[0]?.type===`text`||e.tokens[0]?.type===`paragraph`){e.tokens[0].raw=e.tokens[0].raw.replace(this.rules.other.listReplaceTask,``),e.tokens[0].text=e.tokens[0].text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}}let t=this.rules.other.listTaskCheckbox.exec(e.raw);if(t){let n={type:`checkbox`,raw:t[0]+` `,checked:t[0]!==`[ ]`};e.checked=n.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=n.raw+e.tokens[0].raw,e.tokens[0].text=n.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(n)):e.tokens.unshift({type:`paragraph`,raw:n.raw,text:n.raw,tokens:[n]}):e.tokens.unshift(n)}}if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:`html`,block:!0,raw:t[0],pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:t[0],href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=PW(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(PW(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:t[0],depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=FW(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=IW(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),RW(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return RW(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},VW=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||yU,this.options.tokenizer=this.options.tokenizer||new BW,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:wU,block:OW.normal,inline:kW.normal};this.options.pedantic?(t.block=OW.pedantic,t.inline=kW.pedantic):this.options.gfm&&(t.block=OW.gfm,this.options.breaks?t.inline=kW.breaks:t.inline=kW.gfm),this.tokenizer.rules=t}static get rules(){return{block:OW,inline:kW}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(wU.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(wU.tabCharGlobal,`    `).replace(wU.spaceLine,``));e;){let r;if(this.options.extensions?.block?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let n=t.at(-1);r.raw.length===1&&n!==void 0?n.raw+=`
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
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``;for(;e;){a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return t}},HW=class{options;parser;constructor(e){this.options=e||yU}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(wU.notSpaceStart)?.[0],i=e.replace(wU.endingNewline,``)+`
`;return r?`<pre><code class="language-`+MW(r)+`">`+(n?i:MW(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:MW(i,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${MW(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=NW(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+MW(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=NW(e);if(i===null)return MW(n);e=i;let a=`<img src="${e}" alt="${MW(n)}"`;return t&&(a+=` title="${MW(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:MW(e.text)}},UW=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},WW=class e{options;renderer;textRenderer;constructor(e){this.options=e||yU,this.options.renderer=this.options.renderer||new HW,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new UW}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},GW=class{options;block;constructor(e){this.options=e||yU}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?VW.lex:VW.lexInline}provideParser(){return this.block?WW.parse:WW.parseInline}},KW=new class{defaults=vU();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=WW;Renderer=HW;TextRenderer=UW;Lexer=VW;Tokenizer=BW;Hooks=GW;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new HW(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new BW(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new GW;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];GW.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&GW.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return VW.lex(e,t??this.defaults)}parser(e,t){return WW.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer():e?VW.lex:VW.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser():e?WW.parse:WW.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer():e?VW.lex:VW.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser():e?WW.parse:WW.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+MW(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function qW(e,t){return KW.parse(e,t)}qW.options=qW.setOptions=function(e){return KW.setOptions(e),qW.defaults=KW.defaults,bU(qW.defaults),qW},qW.getDefaults=vU,qW.defaults=yU,qW.use=function(...e){return KW.use(...e),qW.defaults=KW.defaults,bU(qW.defaults),qW},qW.walkTokens=function(e,t){return KW.walkTokens(e,t)},qW.parseInline=KW.parseInline,qW.Parser=WW,qW.parser=WW.parse,qW.Renderer=HW,qW.TextRenderer=UW,qW.Lexer=VW,qW.lexer=VW.lex,qW.Tokenizer=BW,qW.Hooks=GW,qW.parse=qW,qW.options,qW.setOptions,qW.use,qW.walkTokens,qW.parseInline,WW.parse,VW.lex;var JW=`structured-rendering-markdown-rendering-content-for-screenshot`,YW=`
.${JW} > *:first-child {
    margin-top: 0;
}
.${JW} > *:last-child {
    margin-bottom: 0;
}
`,XW={accentColor:`dodgerblue`,bodySize:`14px`,h1Size:`22px`,h2Size:`18px`,h3Size:`16px`,h4Size:`15px`,h5Size:`14px`,h6Size:`14px`,bodyGap:`24px`,smallTextSize:`10px`,liSpacing:`4px`,bodyFont:`sans-serif`,codeFont:`monospace`,codeSize:`1em`,codeBackgroundColor:G.colors[`vira-grey-behind-fg-small-body`].background.value,contentSelector:`.${JW}`,tableBorderColor:G.colors[`vira-grey-foreground-decoration`].foreground.value,tableBorderWidth:`1px`,tableHeaderBackgroundColor:G.colors[`vira-grey-behind-bg-invisible`].background.value};function ZW(e){return Al(pl(XW,e),(e,t)=>A.isString(t)?Tu(t):t instanceof wu?t:t.value)}var QW=$W();function $W(e){let t=ZW(e);return z`
        ${Tu(e?.contentSelector||XW.contentSelector)} {
            display: flex;
            flex-direction: column;
            gap: ${t.bodyGap};
            font-family: ${t.bodyFont};
            font-size: ${t.bodySize};
            align-items: flex-start;

            & * {
                font-family: inherit;
                font-size: inherit;
                ${kF}
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
            & ol {
                padding-left: 1.5em;
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
                    background-color: ${t.tableHeaderBackgroundColor};
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
    `}var eG=aN()({tagName:`vir-markdown`,styles:z`
        :host {
            display: flex;
            flex-direction: column;
        }
    `,state(){return{renderedElement:void 0,sanitizedHtml:cN({async updateCallback(e){let t=await qW.parse(e);return i.sanitize(t)}}),lastStyleString:``}},render({inputs:e,state:t,updateState:n,host:r}){t.sanitizedHtml.update(e.markdownString);let i=String(e.renderStyles||QW);return _U({maintainFirstStylesheet:!0,newStyles:i,oldStyles:t.lastStyleString,shadowRoot:r.shadowRoot})&&n({lastStyleString:i}),EN(t.sanitizedHtml,V`
                <${J.assign({icon:iL})}></${J}>
            `,e=>V`
                    <div
                        class=${JW}
                        ${bN(e=>{e instanceof HTMLElement&&n({renderedElement:e})})}
                    >
                        ${DM(e)}
                    </div>
                `,e=>V`
                    <${FH}>
                        ${Pe(`Failed to parse markdown content.`,e)}
                    </${FH}>
                `)}}),tG={icons:AL,sourceString:`Source`,pluralSourcesString:`Sources`},nG={...tG,styles:QW},rG={...tG,processingString:`Processing`,currentlyExpanded:{},sourceIcon:JI,viewOnPageIcon:$I,processingIcon:iL,expandSourcesOnPrint:!1,hideViewOnPageButtons:!1,isPhoneSize:!1,markdownStyles:QW,createViewOnPageString(e){return`View on page ${e}`},expandAllCards:!1,blockCardExpansion:!1,expandFirstCard:!1,useCardStyles:!1},iG=bj({x1:-1,y1:-1,x2:-1,y2:-1}),aG=bj({type:Dj(`source`),pageNumbers:Nj([Nj(-1)]),fileName:Nj(``),fileBoundingBoxes:Nj([Nj(iG)]),quote:Nj(``)});function oG(e){return Lc.isLengthAtLeast(Zc(e).filter(sG),1)}function sG(e){return!!(e&&(e.quote?.trim()||e.fileName||e.pageNumbers?.filter(A.isDefined).length))}var cG=aN()({tagName:`vir-source`,hostClasses:{"vir-source-phone-size":({inputs:e})=>!!e.options?.isPhoneSize},events:{viewOnPageClick:JM()},cssVars:{"vir-source-background-color":G.colors[iF].background.value,"vir-source-borer-radius":K[`vira-form-radius`].value,"vir-source-header-color":G.colors[`vira-grey-foreground-header`].foreground.value,"vir-source-view-on-page-icon-color":K[`vira-form-accent-primary-color`].value,"vir-source-view-on-page-hover-background-color":G.colors[`vira-grey-behind-fg-small-body`].background.value,"vir-source-view-on-page-active-background-color":G.colors[`vira-grey-behind-fg-body`].background.value,"vir-source-font-size":`16px`,"vir-source-phone-font-size":`14px`},styles:({hostClasses:e,cssVars:t})=>z`
        ${FL} {
            background: ${t[`vir-source-background-color`].value};
            border-radius: ${t[`vir-source-borer-radius`].value};
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        p {
            ${kF}
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
                    ${AF};
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
    `,render({inputs:e,dispatch:t,events:n}){let r=oG(e.sources);if(!r)return j;let i=pl(rG,e.options);return V`
            <${FL}>
                <p class="header">
                    <${J.assign({icon:i.sourceIcon,fitContainer:!0})}></${J}>
                    <span>${i.pluralSourcesString}</span>
                </p>
                <div class="entries">
                    ${r.map(e=>{let r=!i.hideViewOnPageButtons&&e.fileName&&e.pageNumbers?.length?V`
                                      <button
                                          class="view-on-page-button"
                                          title=${e.fileName}
                                          ${B(`click`,()=>{t(new n.viewOnPageClick(e))})}
                                      >
                                          <${J.assign({icon:i.viewOnPageIcon,fitContainer:!0})}></${J}>
                                          ${i.createViewOnPageString(e.pageNumbers[0]??1)}
                                      </button>
                                  `:void 0,a=e.quote?.trim()||``,o=a?V`
                                  <p class="source-text">"${a}"</p>
                              `:void 0;return o||r?V`
                                <div class="entry">${o} ${r}</div>
                            `:j})}
                </div>
            </${FL}>
        `}}),lG=bj({type:Dj(`icon`),iconKey:``,strokeColor:Nj(``),fillColor:Nj(``),strokeWidth:Nj(Mj(``,-1))});function uG(e,{icons:t}){let n=t[e.iconKey];if(n)return kL(n,{"vira-icon-fill-color":e.fillColor||void 0,"vira-icon-stroke-color":e.strokeColor||void 0,"vira-icon-stroke-width":A.isString(e.strokeWidth)?e.strokeWidth:A.isNumber(e.strokeWidth)?gl({value:e.strokeWidth,suffix:`px`}):void 0})}function dG(e,t){return bj({type:Dj(e),sectionTitle:Nj(``),sources:Nj([Nj(aG)]),...t})}var fG=bj({type:Dj(`empty`)}),pG=dG(`inlineCode`,{code:``}),mG=dG(`tag`,{text:Fj(``),useBigTag:Nj(!1),color:Nj(Mj({custom:Pj({backgroundColor:Nj(``),foregroundColor:Nj(``)})},{variant:Ej(q)}))}),hG=function(e){return e.Faint=`faint`,e.Small=`small`,e.Bold=`bold`,e}({}),gG=dG(`text`,{text:Nj(Fj()),style:Nj(Ej(hG)),icon:Nj(lG)}),_G=dG(`list`,{items:[bj({content:Nj(Mj(gG,mG,fG)),icon:Nj(lG),sources:Nj([Nj(aG)])})]}),vG=dG(`markdown`,{markdown:``}),yG=bj({type:Dj(`processing`)}),bG=function(e){return e.Left=`left`,e.Right=`right`,e}({}),xG=function(e){return e.Horizontal=`horizontal`,e.Vertical=`vertical`,e}({}),SG=Mj(gG,pG,vG,mG,_G,fG,yG),CG=dG(`table`,{direction:Ej(xG),headers:[{key:``,text:Nj(gG),hidden:Nj(!1)}],entries:[{data:Gj({keys:``,values:Mj(Nj(SG),[Nj(SG)])}),sources:Nj([Nj(aG)])}],footerRows:Nj([{alignment:Nj(Ej(bG)),cells:Mj(Nj(SG),[Nj(SG)])}])});function wG(e,t,n,r){return{type:`table`,direction:e,headers:t,entries:n,footerRows:r}}var TG=dG(`codeBlock`,{syntax:Nj(``),code:``}),EG=[TG,pG,fG,_G,vG,mG,yG,aG,CG,gG,lG,dG(`collapsible`,{header:Fj(),content:[Mj(TG,fG,lG,pG,_G,vG,yG,mG,CG,gG)]})];Mj(...EG);var Q=Yc(EG,e=>({key:e.default.type,value:e.default.type}),{useRequired:!0}),DG=qM()(`source-expansion`);function OG(e,t){return jG(e,pl(rG,t),[])}function kG(e){if(e==null)return;if(!A.isString(e))return String(e);let t=e.trim();if(!t)return;let n=t.split(`
`);return n.flatMap((e,t)=>V`
            ${e}${t<n.length-1?V`
                      <br />
                  `:``}
        `)}var AG={icon(e,t){let n=uG(e,t);return n?V`
            <${J.assign({icon:n})}></${J}>
        `:j},codeBlock(e){return V`
            <pre>${e.code}</pre>
        `},collapsible(e,t,n){return V`
            <${RL.assign({rawCollapsible:!0})}>
                <span slot=${RL.slotNames.header}>${String(e.header)}</span>
                ${jG(e.content,t,[...n,`collapsible`])}
            </${RL}>
        `},empty(){},inlineCode(e){return V`
            <code>${e.code}</code>
        `},list(e,t,n){let r=Jc(e.items,(e,r)=>{if(!e.icon&&!e.content)return;let i=[...n,r],a=e.content?jG(e.content,t,[...i,`content`]):void 0,o=V`
                    ${e.icon?jG(e.icon,t,[...i,`icon`]):j}${a}
                `;return V`
                    <li
                        class=${CM({"list-item-with-icon":!!e.icon})}
                    >
                        ${LG(o,t,i,e.sources)}
                    </li>
                `},A.isTruthy);if(r.length)return V`
            <ul>
                ${r}
            </ul>
        `},markdown(e,t){return V`
            <${eG.assign({markdownString:e.markdown,renderStyles:t.markdownStyles})}></${eG}>
        `},tag(e){let t=e.color&&`custom`in e.color&&(e.color.custom.backgroundColor||e.color.custom.foregroundColor)?z`
                      ${e.color.custom.backgroundColor?z`
                                ${VH.cssVars[`vira-tag-background-color`].name}: ${Tu(e.color.custom.backgroundColor)};
                            `:z``}
                      ${e.color.custom.foregroundColor?z`
                                ${VH.cssVars[`vira-tag-text-color`].name}: ${Tu(e.color.custom.foregroundColor)};
                            `:z``}
                  `:void 0,n=e.color&&`variant`in e.color?e.color.variant:void 0;return V`
            <${VH.assign({text:e.text,color:t?q.None:n,size:e.useBigTag?wF.Medium:wF.Small,emphasis:EF.Subtle})}
                style=${wM(t)}
            ></${VH}>
        `},processing(e,t){return V`
            <${J.assign({icon:t.processingIcon})}></${J}>
            <span>${t.processingString}...</span>
        `},source(e,t){return V`
            <${cG.assign({options:t,sources:e})}></${cG}>
        `},table(e,t,n){if(t.isPhoneSize&&e.direction===xG.Horizontal){let r=Jc(e.headers,(e,r)=>{if(!e.hidden)return{key:e.key,headerIndex:r,renderedContent:e.text?jG(e.text,t,[...n,`headers`,r]):e.key}},A.isTruthy);return V`
                <div class="phone-table-cards">${e.entries.map((e,i)=>{let a=[...n,i],o=Jc(r,n=>{let r=e.data[n.key],i=Zc(r).filter(A.isTruthy);if(!i.length)return;let o=Array.from(TM(Jc(i,(e,r)=>jG(e,t,[...a,n.key,r]),A.isTruthy),V`
                                    <br />
                                `));return V`
                            <tr>
                                <th>${n.renderedContent}</th>
                                <td>${o}</td>
                            </tr>
                        `},A.isTruthy),s=oG(e.sources);return V`
                    <${FL} class="phone-table-card">
                        <table class="vertical phone-card-table" cellspacing="0" cellpadding="0">
                            <tbody>${o}</tbody>
                        </table>
                        ${s?.length?LG(V``,t,a,s):j}
                    </${FL}>
                `})}</div>
            `}let{headerRow:r,rows:i}=CH(Jc(e.headers,(e,r)=>{if(!e.hidden)return{key:e.key,content:e.text?jG(e.text,t,[...n,`headers`,r]):e.key}},A.isTruthy),e.entries,(r,i)=>Al(r.data,(r,a)=>{let o=Zc(a).filter(A.isTruthy);if(o.length)return Array.from(TM(Jc(o,(a,o)=>{let s=`sources`in a?{sources:e.direction===xG.Vertical?void 0:a.sources}:{};return jG({...a,...s},t,[...n,i,r,o])},A.isTruthy),V`
                                <br />
                            `))}),{orientation:e.direction===xG.Horizontal?SH.Vertical:SH.Horizontal}),a=i.map(t=>{let n=t.cells.at(-1);return oG([...Zc(e.direction===xG.Vertical&&n?Zc(n.data?.data[n.key]).filter(A.isTruthy).flatMap(e=>`sources`in e?Zc(e.sources):[]):void 0),...Zc(t.data?.sources)])}),o=a.some(e=>!!e?.length),s=i[0]?.cells.length||0;return V`
            <table
                cellspacing="0"
                cellpadding="0"
                class=${CM({vertical:e.direction===xG.Vertical,horizontal:e.direction===xG.Horizontal,"wide-table":e.direction===xG.Horizontal&&r?r.length>5:e.direction===xG.Vertical&&i[0]?i[0].cells.length>5:!1})}
            >
                ${r?V`
                          <thead>
                              <tr>
                                  ${r.map(e=>V`
                                          <th>${e.content}</th>
                                      `)}
                                  ${o?V`
                                            <th class="source-cell"></th>
                                        `:j}
                              </tr>
                          </thead>
                      `:j}
                <tbody>
                    ${i.map((r,i)=>{let s=[...n,i],c=a[i],l=r.cells.map((n,i)=>{let a=i===r.cells.length-1,o=e.direction===xG.Vertical&&i===0?`th`:`td`,l=V`
                                <${o}>${n.content}</${o}>
                            `;return c?.length&&a?V`
                                    ${l}
                                    <td class="source-cell">
                                        ${FG(``,t,s,c)}
                                    </td>
                                `:l}),u=c?.length?V`
                                  <tr class="source-row">
                                      <td colspan=${l.length}>
                                          ${IG(t,s,c)}
                                      </td>
                                  </tr>
                              `:j;return V`
                            <tr>
                                ${l}
                                ${o?V`
                                          <td class="source-cell"></td>
                                      `:j}
                            </tr>
                            ${u}
                        `})}
                </tbody>
                ${e.footerRows?.length?V`
                          <tfoot>
                              ${e.footerRows.map((e,r)=>{let i=Zc(e.cells);if(!i.length)return j;let a=e.alignment===bG.Right?s-i.length+1:0;return V`
                                      <tr>${i.map((e,i)=>{let o=i?0:a,s=o<1?void 0:o,c=e?jG(e,t,[...n,`footers`,r,i]):j;return V`
                                          <td
                                              colspan=${wM(s)}
                                              class=${CM({"right-aligned-footer-cell":!!s})}
                                          >
                                              ${c}
                                          </td>
                                      `})}</tr>
                                  `})}
                          </tfoot>
                      `:j}
            </table>
        `},text(e,t,n){let r=kG(e.text),i=e.style?`text-style-${e.style}`:void 0;if(r)return V`
            ${jG(e.icon,t,[...n,`icon`])}
            <span
                class=${[i,`text-section-text-content`].join(` `)}
            >
                ${r}
            </span>
        `}};function jG(e,t,n){return PG(e,t,n,!1).filter(A.isTruthy)}var MG=fl(Q,e=>[e,`section`].join(`-`)),NG=`structured-render-section`;function PG(e,t,n,r){if(!e)return[];if(A.isArray(e))return e.flatMap((e,i)=>PG(e,t,[...n,i],r));if(`type`in e){let i=`sectionTitle`in e&&n.length>0&&!(r&&n.at(-1)===0)&&e.sectionTitle||void 0,a=AG[e.type](e,t,n),o=`sources`in e&&e.sources||void 0,s=V`
            <div
                class=${CM({"section-wrapper":!0,"top-section-wrapper":r,[MG[e.type]]:!0})}
                ${jN(NG)}
                ${jN(MG[e.type])}
            >
                ${LG(a,t,n,o)}
            </div>
        `;return[i?V`
                      <h3>${i}</h3>
                  `:void 0,s]}else if(`sections`in e){let r=PG(e.sections,t,[...n,`sections`],!0),i=e.cardTitleIcon?jG(e.cardTitleIcon,t,[...n,`cardTitleIcon`]):j;return[V`
                <${RL.assign({expandOnPrint:!0,rawCollapsible:!t.useCardStyles,blockExpansion:t.blockCardExpansion,hideHeader:!e.cardTitle,startExpanded:t.expandAllCards||t.expandFirstCard&&n.at(-1)===0})}
                    class=${CM({"raw-collapsible-card":!t.useCardStyles})}
                >
                    <h2
                        slot=${RL.slotNames.header}
                        class="card-title ${CM({"card-title-with-icon":!!e.cardTitleIcon})}"
                    >
                        ${i}${e.cardTitle}
                    </h2>
                    ${r}
                </${RL}>
            `]}else throw Fc.tsType(e).equals(),Error(`Unexpected structured render type: ${y(e)}`)}function FG(e,t,n,r){let i=oG(r),a=[...n,`source-icon`],o=RG(a),s=!!t.currentlyExpanded[o];return V`
        <div class="source-content-wrapper">${e}${i?V`
              <div class="source-icon-wrapper">
                  <button class="source-icon-button">
                      <${J.assign({icon:t.sourceIcon,fitContainer:!0})}
                          ${B(`click`,e=>{sP(e,HTMLElement).dispatchEvent(new DG({expanded:!s,key:RG(a)}))})}
                      ></${J}>
                  </button>
              </div>
          `:j}</div>
    `}function IG(e,t,n){let r=oG(n);if(!r)return;let i=RG([...t,`source-icon`]),a=!!e.currentlyExpanded[i],o=V`
        <${cG.assign({options:e,sources:r})}></${cG}>
    `;return e.isPhoneSize?V`
            <${PH.assign({open:a,drawerTitle:e.pluralSourcesString})}
                ${B(PH.events.drawerClose,e=>{sP(e,HTMLElement).dispatchEvent(new DG({expanded:!1,key:i}))})}
            >
                ${o}
            </${PH}>
        `:V`
        <${LL.assign({expanded:a,expandOnPrint:e.expandSourcesOnPrint})}
            class="collapsible-source-wrapper ${CM({"expanded-source":a})}"
        >
            <span slot=${LL.slotNames.header}></span>
            ${o}
        </${LL}>
    `}function LG(e,t,n,r){return V`
        ${FG(e,t,n,r)}
        ${IG(t,n,r)}
    `}function RG(e){return[`key`,...e].join(`;`).replaceAll(` `,`_`).replaceAll(/[^\w;]/g,``)}var zG=z`
    .source-content-wrapper {
        display: flex;

        & > *:last-child:not(table) {
            flex-grow: 1;
        }
    }

    .collapsible-source-wrapper {
        border: none;

        &:not(.expanded-source) {
            ${NF}
        }
    }

    .expanded-source {
        margin: 8px 0 !important;
    }

    .source-icon-button {
        ${AF};
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

    @media print {
        .source-icon-wrapper {
            display: none !important;
        }
    }
`,BG=aN()({tagName:`vir-expandable-source`,state(){return{currentlyExpanded:{}}},styles:z`
        :host {
            display: flex;
            flex-direction: column;
        }

        ${J} {
            flex-shrink: 0;
        }

        *::first-line {
            /* this height must match the icon size */
            line-height: 24px;
        }

        ${zG}
    `,render({inputs:e,state:t,updateState:n}){let r=pl(rG,{...e.options,currentlyExpanded:{...e.options?.currentlyExpanded,...t.currentlyExpanded}});return V`
            <div
                ${B(DG,e=>{n({currentlyExpanded:{...t.currentlyExpanded,[e.detail.key]:e.detail.expanded}})})}
            >
                ${LG(V`
                        <slot></slot>
                    `,r,[`expandable-source`],e.sources)}
            </div>
        `}}),VG=z`4px`,$=aN()({tagName:`vir-structured-render`,state(){return{currentlyExpanded:{},lastStyleString:``}},cssVars:{"vir-structured-render-h1-font-size":`24px`,"vir-structured-render-h2-font-size":`18px`,"vir-structured-render-h3-font-size":`16px`,"vir-structured-render-small-font-size":`12px`},hostClasses:{"vir-structured-render-phone-size":({inputs:e})=>!!e.options?.isPhoneSize,"vir-structured-render-tablet-size":({inputs:e})=>!!e.options?.isTabletSize},styles:({cssVars:e,hostClasses:t})=>z`
        :host {
            ${fH(G.colors[iF])}
        }

        ${J} {
            flex-shrink: 0;
        }

        :host,
        .${Tu(JW)}.${Tu(JW)}.${Tu(JW)} {
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

            & ${VH} {
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

        .text-style-${Tu(hG.Faint)}.text-style-${Tu(hG.Faint)}.text-style-${Tu(hG.Faint)}.text-style-${Tu(hG.Faint)} {
            color: ${G.colors[`vira-grey-foreground-non-body`].foreground.value};
        }
        .text-style-${Tu(hG.Bold)}.text-style-${Tu(hG.Bold)}.text-style-${Tu(hG.Bold)}.text-style-${Tu(hG.Bold)} {
            font-weight: bold;
        }
        .text-style-${Tu(hG.Small)}.text-style-${Tu(hG.Small)}.text-style-${Tu(hG.Small)}.text-style-${Tu(hG.Small)} {
            font-size: ${e[`vir-structured-render-small-font-size`].value};
        }

        table {
            border-collapse: collapse;
            max-width: 100%;

            & th,
            & td {
                padding: 16px;
                padding-left: 24px;

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
                background-color: #f8f9fa;
            }

            &.wide-table {
                font-size: 14px;

                & th,
                & td {
                    padding: 4px;
                    padding-left: 8px;
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

        .card-title-with-icon {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .raw-collapsible-card.raw-collapsible-card.raw-collapsible-card.raw-collapsible-card {
            display: flex;
            padding: 0 16px;
            border-top: 1px solid
                ${G.colors[`vira-grey-foreground-decoration`].foreground.value};

            & h2 {
                font-weight: normal;
                padding: 8px 0;
            }

            &:not(:first-child) {
                margin-top: -24px;
            }

            &:first-child {
                border-top: none;
            }

            ${RL.cssVars[`vira-collapsible-card-content-gap`].name}: 8px;
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

            & .text-section-text-content {
                flex-grow: 1;
                vertical-align: middle;
            }
        }

        ${zG}

        .${Tu(JW)}.${Tu(JW)}.${Tu(JW)}.${Tu(JW)} {
            ul {
                ${kF}
                flex-grow: 1;
                max-width: 100%;
                display: flex;
                flex-direction: column;
                gap: 2px;
            }
        }

        li {
            display: flex;
            flex-direction: column;

            &:not(.list-item-with-icon) > *:first-child::before {
                content: '•';
                flex-shrink: 0;
                width: 24px;
                margin-right: ${VG};
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
            margin-right: ${VG};
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

            & .phone-table-cards {
                display: flex;
                flex-direction: column;
                gap: 12px;

                & .phone-table-card {
                    padding: 8px 16px;

                    & th,
                    & td {
                        border: none;
                        background-color: transparent;
                    }
                }
            }
        }

        ${t[`vir-structured-render-tablet-size`].selector} {
            .view-header {
                flex-wrap: wrap;
            }
        }
    `,render({inputs:e,state:t,updateState:n,host:r}){let i=String(e.options?.markdownStyles||QW);_U({maintainFirstStylesheet:!0,newStyles:i,oldStyles:t.lastStyleString,shadowRoot:r.shadowRoot})&&n({lastStyleString:i});let a=OG(e.data,{...e.options,currentlyExpanded:{...e.options?.currentlyExpanded,...t.currentlyExpanded}});return V`
            <div
                ${B(DG,e=>{n({currentlyExpanded:{...t.currentlyExpanded,[e.detail.key]:e.detail.expanded}})})}
                class=${JW}
            >
                ${a}
            </div>
        `}});async function HG(){let e=await r(()=>import(`./src-D1npM56S.js`),__vite__mapDeps([0,1,2,3,4,5]));return e.default||e}function UG(e,t){return QG(e,pl(nG,t)).filter(A.isTruthy).join(`

`)}var WG={[hG.Bold]:`**`};function GG(e,t,n){let r=e.entries.length+1,i=t.map(t=>[t.text?UG(t.text,n):t.key,...e.entries.map(e=>UG(e.data[t.key],n))]);return[Xc(r,()=>``),...i]}function KG(e,t,n){return[t.map(e=>e.text?UG(e.text,n):e.key),...e.entries.map(e=>t.map(t=>UG(e.data[t.key],n)))]}var qG={[xG.Vertical]:GG,[xG.Horizontal]:KG},JG={icon(e,t){let n=uG(e,t);return n?UN(n.svgTemplate):``},collapsible(){return``},codeBlock(e){return`\`\`\`${e.syntax||``}\n${e.code}\n\`\`\``},inlineCode(e){return`\`${e.code}\``},empty(){return``},list(e,t){return Jc(e.items,e=>{let n=UG(e.content,t),r=UG(e.icon,t);if(n){let i=r?`- ${r} ${n}`:`- ${n}`,a=(e.sources||[]).map(e=>UG(e,t)).filter(A.isTruthy).join(`
`);return a?`${i}\n${a}`:i}else return``},A.isTruthy).join(`
`)},markdown(e){return e.markdown},tag(e){return e.text==null?``:String(e.text)},processing(){return``},source(e,t){let n=e.pageNumbers?.filter(A.isDefined),r=n?.length?`p. ${n.join(`, `)}`:``,i=[e.fileName,r].filter(A.isTruthy).join(`, `);return i?`<small>${t.sourceString}: ${i}</small>`:``},table(e,t){let n=e.headers.filter(e=>!e.hidden),r=qG[e.direction](e,n,t),i=YG(r,r[0].length||0),[a,...o]=r;return[XG(a,i),ZG(i),...o.map(e=>XG(e,i))].join(`
`)},text(e,t){if(e.text==null)return``;let n=e.style&&WG[e.style]||``,r=UG(e.icon,t),i=Bl({value:String(e.text),wrapper:n});return r?`${r} ${i}`:i}};function YG(e,t){return Xc(t,t=>e.reduce((e,n,r)=>Math.max(e,Ac.isDefined(n[t],`No cell at row index ${r}, column index ${t}`).length),3))}function XG(e,t){return`| ${e.map((e,n)=>e.padEnd(t[n]??3)).join(` | `)} |`}function ZG(e){return`| ${e.map(e=>`-`.repeat(e)).join(` | `)} |`}function QG(e,t,n=!1){if(!e)return[];if(A.isArray(e))return e.flatMap(e=>UG(e,t));if(`type`in e){let r=`sectionTitle`in e&&!n?e.sectionTitle:void 0,i=`sources`in e&&e.sources||[];return[r?`### ${r}`:void 0,JG[e.type](e,t),...i.map(e=>UG(e,t))]}else if(`sections`in e)return[e.cardTitle&&`## ${e.cardTitle}`,...e.sections.flatMap((e,n)=>QG(e,t,n===0))].filter(A.isTruthy);else throw Fc.tsType(e).equals(),Error(`Unexpected structured render type: ${y(e)}`)}var $G=function(e){return e.ArrayBuffer=`arraybuffer`,e.Blob=`blob`,e.BlobUri=`bloburi`,e.BlobUrl=`bloburl`,e.DataUriString=`datauristring`,e.DataUrlString=`dataurlstring`,e.DataUri=`datauri`,e.DataUrl=`dataurl`,e.DataUrlNewWindow=`dataurlnewwindow`,e.PdfObjectNewWindow=`pdfobjectnewwindow`,e.PdfJsNewWindow=`pdfjsnewwindow`,e.Download=`download`,e}({}),eK=function(e){return e.Img=`img`,e.DataUriString=`datauristring`,e.DataUrlString=`dataurlstring`,e.DataUri=`datauri`,e.DataUrl=`dataurl`,e.Download=`download`,e}({});function tK(e){return{margin:[25,15],filename:e,image:{type:`jpeg`,quality:.98},html2canvas:{scale:2,logging:!1,scrollX:0,scrollY:0,useCORS:!0},jsPDF:{unit:`mm`,format:`a4`,orientation:`portrait`},pagebreak:{mode:[`css`,`legacy`]}}}async function nK(e,{fileName:t,outputType:n,options:r}){if(!x(ye.Web))throw Error(`${cK.name} cannot run outside of a browser.`);let a=pl(nG,r),[o]=await Promise.all([HG(),oK()]),s=await qW.parse(UG(e,a)),c=UN(V`
        <div class=${JW}>${i.sanitize(s)}</div>
    `),l=tK(t),u=await rK(c,String(a.styles),l),d=o().set(l).from(u);if(n.pdf)if(n.pdf===$G.Download){let e=await d.outputPdf($G.Blob),n=URL.createObjectURL(e),r=globalThis.document.createElement(`a`);r.href=n,r.download=t.endsWith(`.pdf`)?t:`${t}.pdf`,r.style.display=`none`,globalThis.document.body.append(r),r.click(),r.remove(),URL.revokeObjectURL(n);return}else return await d.outputPdf(n.pdf,{filename:t});else if(n.image)return n.image===eK.Download?await d.toImg().save(t):await d.outputImg(n.image);else throw Fc.tsType(n).equals(),Error(`Invalid output type: ${y(n)}`)}async function rK(e,t,n){let r=sK(n.margin),i=210-r[1]-r[3],a=globalThis.document.createElement(`iframe`);a.style.position=`fixed`,a.style.left=`-10000px`,a.style.top=`0`,a.style.width=`${i}mm`,a.style.height=`0`,a.style.border=`none`,a.setAttribute(`aria-hidden`,`true`),a.srcdoc=[`<!DOCTYPE html><html><head><style>`,YW,t,`</style></head><body style="margin:0;padding:0;">`,e,`</body></html>`].join(``),globalThis.document.body.append(a);try{await new Promise(e=>{a.addEventListener(`load`,()=>{e()},{once:!0})});let e=Ac.isDefined(a.contentDocument);await e.fonts.ready;let t=Ac.isDefined(e.body.firstElementChild);return a.style.height=`${e.body.scrollHeight}px`,await eP(3),await aK()(t,{...n.html2canvas})}finally{a.remove()}}var iK;function aK(){if(!iK)throw Error(`html2canvas has not been loaded yet. Call preloadHtml2Canvas() first.`);return iK}async function oK(){iK||=(await r(async()=>{let{default:e}=await import(`./html2canvas-D9_eKCYd.js`).then(e=>t(e.default,1));return{default:e}},__vite__mapDeps([6,5,1]))).default}function sK(e){return e==null?[0,0,0,0]:typeof e==`number`?[e,e,e,e]:e.length===2?[e[0],e[1],e[0],e[1]]:[e[0],e[1],e[2],e[3]]}async function cK(e,{saveLocationPath:n,outputType:a,options:o}){if(x(ye.Web))throw Error(`${cK.name} cannot run inside of a browser.`);let s=pl(nG,o),{chromium:c}=await r(async()=>{let{chromium:e}=await import(`playwright`);return{chromium:e}},[]),{readFile:l,writeFile:u,mkdir:d}=await r(async()=>{let{readFile:e,writeFile:t,mkdir:n}=await import(`node:fs/promises`);return{readFile:e,writeFile:t,mkdir:n}},[]),{createRequire:f}=await r(async()=>{let{createRequire:e}=await import(`./__vite-browser-external-C2HJ6kSE.js`).then(e=>t(e.default,1));return{createRequire:e}},__vite__mapDeps([7,1])),{basename:p,dirname:m}=await r(async()=>{let{basename:e,dirname:t}=await import(`node:path`);return{basename:e,dirname:t}},[]),h=f(import.meta.url),[g,ee]=await Promise.all([l(h.resolve(`html2pdf.js/dist/html2pdf.bundle.min.js`),`utf-8`),l(h.resolve(`dompurify/dist/purify.min.js`),`utf-8`)]),_=await qW.parse(UG(e,s)),te=UN(V`
        <style id="styles">
            ${s.styles}
        </style>
    `),ne=await c.launch();try{let e=await ne.newPage();await e.setContent(te,{waitUntil:`networkidle`}),await e.addScriptTag({content:g}),await e.addScriptTag({content:ee});let t=tK(p(n));a.image&&(t.image={type:`png`});let r=(await e.evaluate(async({html2pdfOptions:e,outputType:t,dirtyMarkdown:n,wrapperClass:r,outputImageType:a,outputPdfType:o})=>{let s=i.sanitize(n),c=html2pdf().set(e).from(`<div class="${r}">${s}</div>`);if(t.image)return await c.outputImg(a,{filename:e.filename});if(t.pdf)return await c.outputPdf(o,{filename:e.filename});throw Error(`Invalid output type selected.`)},{html2pdfOptions:t,outputType:a,dirtyMarkdown:_,wrapperClass:JW,outputImageType:eK.DataUriString,outputPdfType:$G.DataUriString})).split(`,`)[1];await d(m(n),{recursive:!0}),await u(n,Buffer.from(r,`base64`))}finally{await ne.close()}return n}async function lK(e,{pdfOutputType:t,...n}){if(!x(ye.Web))throw Error(`${lK.name} cannot run outside of a browser.`);return nK(e,{outputType:{pdf:t||$G.Download},...n})}async function uK(e,t){if(!x(ye.Web))throw Error(`${uK.name} cannot run outside of a browser.`);let n=await nK(e,{outputType:{pdf:$G.Blob},...t}),r=URL.createObjectURL(n),i=navigator.userAgent.toLowerCase(),a=i.includes(`firefox`),o=/iphone|ipad|ipod/.test(i)||i.includes(`macintosh`)&&navigator.maxTouchPoints>1;if(a||o){if(!globalThis.window.open(r))throw URL.revokeObjectURL(r),Error(`Failed to open print window. Check your popup blocker settings.`);return}let s=globalThis.document.createElement(`iframe`);s.style.position=`fixed`,s.style.left=`-10000px`,s.style.top=`0`,s.style.width=`1px`,s.style.height=`1px`,s.style.border=`none`,s.style.opacity=`0`,s.src=r,globalThis.document.body.append(s),await new Promise(e=>{s.addEventListener(`load`,()=>{e()},{once:!0})});let c=s.contentWindow;if(!c){URL.revokeObjectURL(r),s.remove();return}return await eP(3),await go({milliseconds:250}),await eP(3),new Promise(e=>{function t(){URL.revokeObjectURL(r),s.remove(),e()}let n=!1;function i(){n||(n=!0,globalThis.window.removeEventListener(`focus`,a),t())}function a(){i()}c.addEventListener(`afterprint`,()=>{i()},{once:!0}),globalThis.window.addEventListener(`focus`,a,{once:!0}),c.print()})}var dK=[{cardTitle:`Frontend Performance`,cardTitleIcon:{type:Q.icon,iconKey:CL.name,strokeColor:`green`},sections:[{type:Q.text,sectionTitle:`Overview`,text:`Frontend performance metrics collected from the last 30 days of production monitoring.`,sources:[{type:`source`,fileName:`performance-report-2026-02.pdf`,pageNumbers:[1,2],quote:`Metrics aggregated from real user monitoring (RUM) data across all production traffic.`}]},{type:Q.table,sectionTitle:`Core Web Vitals`,direction:xG.Horizontal,sources:[{type:`source`,fileName:`lighthouse-audit.json`,pageNumbers:[3],quote:`Core Web Vitals thresholds based on Chrome UX Report field data.`},{type:`source`,fileName:`web-vitals-spec.md`,quote:`Targets align with Google recommended thresholds for good user experience.`}],headers:[{key:`metric`},{key:`p50`},{key:`p95`},{key:`target`},{key:`status`}],entries:[{data:{metric:{type:Q.text,text:`Largest Contentful Paint`,style:hG.Bold},p50:{type:Q.inlineCode,code:`1.2s`},p95:{type:Q.inlineCode,code:`2.8s`},target:{type:Q.text,text:`< 2.5s`},status:{type:Q.tag,text:`Pass`,color:{variant:q.Positive}}}},{data:{metric:{type:Q.text,text:`First Input Delay`,style:hG.Bold},p50:{type:Q.inlineCode,code:`12ms`},p95:{type:Q.inlineCode,code:`85ms`},target:{type:Q.text,text:`< 100ms`},status:{type:Q.tag,text:`Pass`,color:{variant:q.Positive}}}},{data:{metric:{type:Q.text,text:`Cumulative Layout Shift`,style:hG.Bold},p50:{type:Q.inlineCode,code:`0.18`},p95:{type:Q.inlineCode,code:`0.32`},target:{type:Q.text,text:`< 0.1`},status:{type:Q.tag,text:`Fail`,color:{variant:q.Danger}}},sources:[{type:`source`,fileName:`cls-regression-analysis.pdf`,pageNumbers:[7],quote:`CLS spike correlated with hero image carousel added in v3.12.0.`}]},{data:{metric:{type:Q.text,text:`Time to First Byte`,style:hG.Bold},p50:{type:Q.inlineCode,code:`210ms`},p95:{type:Q.inlineCode,code:`480ms`},target:{type:Q.text,text:`< 600ms`},status:{type:Q.tag,text:`Pass`,color:{variant:q.Positive}}}}]},{type:Q.list,sectionTitle:`Recommendations`,items:[{content:{type:Q.text,text:`Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images.`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`red`},sources:[{type:`source`,fileName:`frontend-performance-review-2026-q1.pdf`,pageNumbers:[4],quote:`Layout shifts primarily caused by images without explicit dimensions.`},{type:`source`,fileName:`web-vitals-optimization-guide.md`,quote:`Lazy loading below-the-fold content reduces initial page weight and improves LCP.`}]},{icon:{type:Q.icon,iconKey:TL.name,strokeColor:`red`},content:{type:Q.text,text:`Add explicit width and height attributes to all image elements.`,sources:[{type:`source`,fileName:`cls-regression-analysis.pdf`,pageNumbers:[8],quote:`Missing width/height attributes on images are the primary contributor to layout shift.`}]}},{content:{type:Q.text,text:`Consider lazy loading below-the-fold content.`},sources:[{type:`source`,fileName:`frontend-performance-review-2026-q1.pdf`,pageNumbers:[4],quote:`Layout shifts primarily caused by images without explicit dimensions.`},{type:`source`,fileName:`web-vitals-optimization-guide.md`,quote:`Lazy loading below-the-fold content reduces initial page weight and improves LCP.`}]}]},{type:Q.list,sectionTitle:`Action Items`,items:[{content:{type:Q.text,text:`Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions.`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`orange`}},{content:{type:Q.text,text:`Enable native lazy loading on below-the-fold images.`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`green`}},{content:{type:Q.text,text:`Defer non-critical third-party scripts.`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`green`}}]},wG(xG.Vertical,[{key:`age`,text:{type:Q.text,text:`Age`}},{key:`dateOfBirth`,text:{type:Q.text,text:`DoB`}},{key:`bloodPressure`,text:{type:Q.text,text:`Blood Pressure`}},{key:`bmi`,text:{type:Q.text,text:`BMI`}},{key:`heartRate`,text:{type:Q.text,text:`Heart Rate`}},{key:`oxygenSaturation`,text:{type:Q.text,text:`Oxygen Saturation`}},{key:`pain`,text:{type:Q.text,text:`Pain`}},{key:`language`,text:{type:Q.text,text:`Language`}},{key:`respiratory`,text:{type:Q.text,text:`Respiratory Rate`}},{key:`sex`,text:{type:Q.text,text:`Sex`}},{key:`temperature`,text:{type:Q.text,text:`Temperature`}},{key:`weight`,text:{type:Q.text,text:`Weight`}},{key:`height`,text:{type:Q.text,text:`Height`}},{key:`zipCode`,text:{type:Q.text,text:`Zip Code`}}],[{data:{age:{type:Q.text,text:`72`,sources:[{type:Q.source,fileName:`intake-form.pdf`,pageNumbers:[1],quote:`Age: 72`}]},dateOfBirth:{type:Q.text,text:`01/15/1954`,sources:[{type:Q.source,fileName:`intake-form.pdf`,pageNumbers:[1],quote:`DOB: 01/15/1954`}]},bloodPressure:{type:Q.text,text:`130 / 85`,sources:[{type:Q.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`BP: 130/85 mmHg`}]},bmi:{type:Q.text,text:`27.3`,sources:[{type:Q.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`BMI: 27.3`}]},heartRate:{type:Q.text,text:`78 bpm`,sources:[{type:Q.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`HR: 78 bpm`}]},height:{type:Q.text,text:`170 cm`},oxygenSaturation:{type:Q.text,text:`96%, on room air`,sources:[{type:Q.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`SpO2: 96% on RA`}]},pain:{type:Q.text,text:`4/10`,sources:[{type:Q.source,fileName:`nursing-notes.pdf`,pageNumbers:[3],quote:`Pain score: 4/10`}]},language:{type:Q.text,text:`English`},respiratory:{type:Q.text,text:`18 breaths/min`,sources:[{type:Q.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`RR: 18 breaths/min`}]},sex:{type:Q.text,text:`Male`},temperature:{type:Q.text,text:`98.6 °F`,sources:[{type:Q.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`Temp: 98.6°F`}]},weight:{type:Q.text,text:`185 lbs`,sources:[{type:Q.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`Weight: 185 lbs`}]},zipCode:{type:Q.text,text:`90210`,sources:[{type:Q.source,fileName:`intake-form.pdf`,pageNumbers:[1],quote:`Zip: 90210`}]}}}])]},{cardTitle:`Backend API Health`,sections:[{type:Q.markdown,sectionTitle:`Status Summary`,sources:[{type:`source`,fileName:`uptime-monitor-export.csv`,quote:`Uptime percentages calculated from 5-minute health check intervals.`}],markdown:[`All **12 services** are operational. Average uptime over the past 30 days: **99.97%**.`,``,`| Service | Uptime |`,`|---------|--------|`,`| Auth | 99.99% |`,`| Users | 99.98% |`,`| Notifications | 99.91% |`,`| Billing | 100% |`].join(`
`)},{type:Q.table,sectionTitle:`Endpoint Latency (ms)`,direction:xG.Vertical,headers:[{key:`endpoint`},{key:`getUsers`},{key:`createUser`},{key:`getReport`},{key:`sendNotification`}],entries:[{data:{endpoint:{type:Q.text,text:`p50`},getUsers:{type:Q.inlineCode,code:`45`},createUser:{type:Q.inlineCode,code:`120`},getReport:{type:Q.inlineCode,code:`890`},sendNotification:{type:Q.inlineCode,code:`65`}}},{data:{endpoint:{type:Q.text,text:`p99`},getUsers:{type:Q.inlineCode,code:`180`},createUser:{type:Q.inlineCode,code:`450`},getReport:{type:Q.inlineCode,code:`3200`},sendNotification:{type:Q.inlineCode,code:`210`}}}]},{type:Q.codeBlock,sectionTitle:`Slow Query Sample`,syntax:`sql`,code:[`SELECT r.id, r.title, r.created_at,`,`       u.name AS author_name,`,`       COUNT(c.id) AS comment_count`,`FROM reports r`,`JOIN users u ON u.id = r.author_id`,`LEFT JOIN comments c ON c.report_id = r.id`,`WHERE r.created_at > NOW() - INTERVAL '30 days'`,`GROUP BY r.id, r.title, r.created_at, u.name`,`ORDER BY r.created_at DESC`,`LIMIT 100;`].join(`
`)}]},{cardTitle:`Deployment Pipeline`,sections:[{type:Q.text,sectionTitle:`Current State`,text:`The CI/CD pipeline is fully automated with staging and production environments.`,icon:{type:Q.icon,iconKey:CL.name,strokeColor:`green`}},{type:Q.table,sectionTitle:`Recent Deployments`,direction:xG.Horizontal,sources:[{type:`source`,fileName:`ci-pipeline-logs.txt`,pageNumbers:[12,15,18,22],quote:`Deployment records extracted from CI/CD pipeline execution logs.`}],headers:[{key:`version`},{key:`environment`},{key:`date`},{key:`duration`},{key:`status`}],entries:[{data:{version:{type:Q.inlineCode,code:`v3.14.2`},environment:{type:Q.tag,text:`Production`,color:{variant:q.Positive}},date:{type:Q.text,text:`2026-02-28`},duration:{type:Q.text,text:`4m 22s`},status:{type:Q.tag,text:`Success`,color:{variant:q.Positive}}}},{data:{version:{type:Q.inlineCode,code:`v3.14.1`},environment:{type:Q.tag,text:`Production`,color:{variant:q.Positive}},date:{type:Q.text,text:`2026-02-25`},duration:{type:Q.text,text:`3m 58s`},status:{type:Q.tag,text:`Success`,color:{variant:q.Positive}}}},{data:{version:{type:Q.inlineCode,code:`v3.14.0`},environment:{type:Q.tag,text:`Staging`,color:{variant:q.Warning}},date:{type:Q.text,text:`2026-02-24`},duration:{type:Q.text,text:`5m 01s`},status:{type:Q.tag,text:`Rolled Back`,color:{variant:q.Danger}}}},{data:{version:{type:Q.inlineCode,code:`v3.13.9`},environment:{type:Q.tag,text:`Production`,color:{variant:q.Positive}},date:{type:Q.text,text:`2026-02-20`},duration:{type:Q.text,text:`4m 10s`},status:{type:Q.tag,text:`Success`,color:{variant:q.Positive}}}}]},{type:Q.list,sectionTitle:`Pipeline Steps`,items:[{content:{type:Q.text,text:`Lint and type check.`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`green`}},{content:{type:Q.text,text:`Unit and integration tests.`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`green`}},{content:{type:Q.text,text:`Build production bundle.`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`green`}},{content:{type:Q.text,text:`Deploy to staging.`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`green`}},{content:{type:Q.text,text:`E2E smoke tests.`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`green`}},{content:{type:Q.text,text:`Promote to production.`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`green`}}]},{type:Q.codeBlock,sectionTitle:`Pipeline Config Snippet`,syntax:`yaml`,code:[`stages:`,`  - name: lint`,`    command: npm run lint`,`  - name: test`,`    command: npm test`,`    parallel: true`,`  - name: build`,`    command: npm run build`,`  - name: deploy-staging`,`    command: deploy --env staging`,`  - name: e2e`,`    command: npm run test:e2e`,`  - name: deploy-production`,`    command: deploy --env production`,`    requires: [e2e]`].join(`
`)},{type:Q.collapsible,sectionTitle:`Collapsible Details`,header:`Rollback Procedure`,content:[{type:Q.text,text:`If a deployment fails health checks, the pipeline automatically triggers a rollback to the previous stable version.`},{type:Q.codeBlock,syntax:`bash`,code:[`#!/bin/bash`,`deploy rollback --env production --to-version $LAST_STABLE`,`notify --channel ops --message "Rollback initiated"`].join(`
`)}]},{type:Q.collapsible,header:`Environment Variables`,content:[{type:Q.table,direction:xG.Horizontal,headers:[{key:`variable`},{key:`staging`},{key:`production`}],entries:[{data:{variable:{type:Q.inlineCode,code:`NODE_ENV`},staging:{type:Q.tag,text:`staging`,color:{variant:q.Warning}},production:{type:Q.tag,text:`production`,color:{variant:q.Positive}}}},{data:{variable:{type:Q.inlineCode,code:`LOG_LEVEL`},staging:{type:Q.text,text:`debug`},production:{type:Q.text,text:`warn`}}}]}]},{type:Q.collapsible,header:`Post-Deploy Checklist`,content:[{type:Q.list,items:[{content:{type:Q.text,text:`Verify health check endpoints return 200.`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`green`}},{content:{type:Q.text,text:`Confirm error rate stays below 0.1% threshold.`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`orange`}},{content:{type:Q.text,text:`Monitor p99 latency for 15 minutes.`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`green`}}]}]}]}],fK=hu({title:`Multi Card`,parent:gU,descriptionParagraphs:[`Multiple cards rendered together to demonstrate complex multi-card layouts.`],defineExamples({defineExample:e}){e({title:`three cards`,styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return V`
                    <${$.assign({data:dK,options:{useCardStyles:!0}})}></${$}>
                `}}),e({title:`three cards phone size`,styles:z`
                :host {
                    max-width: 400px;
                }
            `,render(){return V`
                    <${$.assign({data:dK,options:{useCardStyles:!0,isPhoneSize:!0}})}></${$}>
                `}})}}),pK=hu({title:`Block Expansion`,parent:gU,descriptionParagraphs:[`Cards rendered with blockCardExpansion enabled, which forces all sections expanded and disables toggling.`],defineExamples({defineExample:e}){e({title:`all sections locked open`,styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return V`
                    <${$.assign({data:dK,options:{useCardStyles:!0,blockCardExpansion:!0}})}></${$}>
                `}})}}),mK=hu({title:`Dense Data`,parent:gU,descriptionParagraphs:[`A single card packed with many sections, large tables, lists, code blocks, and markdown to stress-test rendering.`],defineExamples({defineExample:e}){e({title:`comprehensive product analysis`,styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:[{cardTitle:`Comprehensive Product Analysis`,sections:[{type:Q.text,sectionTitle:`Executive Summary`,text:`This analysis covers product adoption, feature usage, customer feedback, technical debt, and roadmap progress across all three product lines.`,style:hG.Bold},{type:Q.markdown,sectionTitle:`Adoption Trends`,markdown:[`### Monthly Active Users`,``,`Growth has been **steady** across all tiers:`,``,`- **Free tier**: 14,200 MAU (+8% MoM)`,`- **Pro tier**: 3,800 MAU (+12% MoM)`,`- **Enterprise tier**: 420 MAU (+3% MoM)`,``,`### Retention`,``,`Day-7 retention: **68%** | Day-30 retention: **41%** | Day-90 retention: **28%**`,``,`> The largest drop-off occurs between day 7 and day 14, suggesting onboarding improvements could have significant impact.`].join(`
`)},{type:Q.table,sectionTitle:`Feature Usage Matrix`,direction:xG.Horizontal,headers:[{key:`feature`},{key:`freeTier`},{key:`proTier`},{key:`enterpriseTier`},{key:`satisfaction`},{key:`trend`}],entries:[{data:{feature:{type:Q.text,text:`Dashboard`,style:hG.Bold},freeTier:{type:Q.text,text:`92%`},proTier:{type:Q.text,text:`97%`},enterpriseTier:{type:Q.text,text:`99%`},satisfaction:{type:Q.tag,text:`4.5 / 5`,color:{variant:q.Positive}},trend:{type:Q.tag,text:`Stable`,color:{variant:q.Positive}}}},{data:{feature:{type:Q.text,text:`Export (PDF/Image)`,style:hG.Bold},freeTier:{type:Q.text,text:`34%`},proTier:{type:Q.text,text:`78%`},enterpriseTier:{type:Q.text,text:`91%`},satisfaction:{type:Q.tag,text:`3.8 / 5`,color:{variant:q.Warning}},trend:{type:Q.tag,text:`Growing`,color:{variant:q.Positive}}}},{data:{feature:{type:Q.text,text:`API Access`,style:hG.Bold},freeTier:{type:Q.text,text:`5%`},proTier:{type:Q.text,text:`42%`},enterpriseTier:{type:Q.text,text:`88%`},satisfaction:{type:Q.tag,text:`4.1 / 5`,color:{variant:q.Positive}},trend:{type:Q.tag,text:`Growing`,color:{variant:q.Positive}}}},{data:{feature:{type:Q.text,text:`Collaboration`,style:hG.Bold},freeTier:{type:Q.text,text:`18%`},proTier:{type:Q.text,text:`61%`},enterpriseTier:{type:Q.text,text:`95%`},satisfaction:{type:Q.tag,text:`4.3 / 5`,color:{variant:q.Positive}},trend:{type:Q.tag,text:`Stable`,color:{variant:q.Positive}}}},{data:{feature:{type:Q.text,text:`Custom Themes`,style:hG.Bold},freeTier:{type:Q.text,text:`0%`},proTier:{type:Q.text,text:`29%`},enterpriseTier:{type:Q.text,text:`67%`},satisfaction:{type:Q.tag,text:`3.2 / 5`,color:{variant:q.Warning}},trend:{type:Q.tag,text:`Declining`,color:{variant:q.Danger}}}},{data:{feature:{type:Q.text,text:`Webhooks`,style:hG.Bold},freeTier:{type:Q.text,text:`0%`},proTier:{type:Q.text,text:`15%`},enterpriseTier:{type:Q.text,text:`72%`},satisfaction:{type:Q.tag,text:`4.0 / 5`,color:{variant:q.Positive}},trend:{type:Q.tag,text:`Growing`,color:{variant:q.Positive}}}}]},{type:Q.list,sectionTitle:`Customer Feedback Themes`,items:[{content:{type:Q.text,text:`Export quality needs improvement (mentioned 47 times).`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`orange`}},{content:{type:Q.text,text:`Dashboard customization is highly valued (mentioned 82 times).`},icon:{type:Q.icon,iconKey:bL.name,strokeColor:`gold`}},{content:{type:Q.text,text:`API documentation could be more complete (mentioned 31 times).`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`orange`}},{content:{type:Q.text,text:`Real-time collaboration is a top-requested feature (mentioned 64 times).`},icon:{type:Q.icon,iconKey:bL.name,strokeColor:`gold`}},{content:{type:Q.text,text:`Mobile experience needs significant work (mentioned 28 times).`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`red`}}]},{type:Q.codeBlock,sectionTitle:`Top API Usage Pattern`,syntax:`typescript`,code:[`import {createClient} from '@product/sdk';`,``,`const client = createClient({`,`    apiKey: process.env.PRODUCT_API_KEY,`,`    baseUrl: 'https://api.product.com/v2',`,`});`,``,`const report = await client.reports.create({`,`    title: 'Weekly Summary',`,`    sections: [`,`        {type: 'chart', dataSource: 'revenue'},`,`        {type: 'table', dataSource: 'transactions'},`,`        {type: 'text', content: 'Generated automatically.'},`,`    ],`,`    format: 'pdf',`,`});`,``,`await client.reports.export(report.id, {`,`    destination: 's3://reports-bucket/weekly/',`,`});`].join(`
`)},{type:Q.table,sectionTitle:`Technical Debt Inventory`,direction:xG.Horizontal,headers:[{key:`item`},{key:`severity`},{key:`age`},{key:`effort`},{key:`impact`}],entries:[{data:{item:{type:Q.text,text:`Legacy auth middleware.`},severity:{type:Q.tag,text:`High`,color:{variant:q.Danger}},age:{type:Q.text,text:`18 months`},effort:{type:Q.text,text:`3 sprints`},impact:{type:Q.text,text:`Blocks SSO integration.`}}},{data:{item:{type:Q.text,text:`Untyped API responses.`},severity:{type:Q.tag,text:`Medium`,color:{variant:q.Warning}},age:{type:Q.text,text:`12 months`},effort:{type:Q.text,text:`2 sprints`},impact:{type:Q.text,text:`Frequent runtime errors.`}}},{data:{item:{type:Q.text,text:`Duplicated validation logic.`},severity:{type:Q.tag,text:`Medium`,color:{variant:q.Warning}},age:{type:Q.text,text:`9 months`},effort:{type:Q.text,text:`1 sprint`},impact:{type:Q.text,text:`Inconsistent error messages.`}}},{data:{item:{type:Q.text,text:`Missing database indexes.`},severity:{type:Q.tag,text:`High`,color:{variant:q.Danger}},age:{type:Q.text,text:`6 months`},effort:{type:Q.text,text:`0.5 sprint`},impact:{type:Q.text,text:`Slow report generation.`}}},{data:{item:{type:Q.text,text:`Outdated test fixtures.`},severity:{type:Q.tag,text:`Low`,color:{custom:{backgroundColor:`#e0e0e0`,foregroundColor:`#333`}}},age:{type:Q.text,text:`4 months`},effort:{type:Q.text,text:`1 sprint`},impact:{type:Q.text,text:`Reduced test reliability.`}}}]},{type:Q.markdown,sectionTitle:`Roadmap Progress`,markdown:[`### Q1 2026 Goals`,``,`| Goal | Status | Completion |`,`|------|--------|------------|`,`| SSO Integration | In Progress | 60% |`,`| Mobile App v1 | In Progress | 35% |`,`| API v3 | Planning | 10% |`,`| Export Overhaul | Complete | 100% |`,`| Webhook Reliability | Complete | 100% |`,``,`### Q2 2026 Planned`,``,`- Real-time collaboration MVP.`,`- Custom theme builder.`,`- Advanced analytics dashboard.`,`- Internationalization (i18n) support.`].join(`
`)},{type:Q.list,sectionTitle:`Key Risks`,items:[{content:{type:Q.text,text:`SSO integration depends on legacy auth refactor completing first.`,style:hG.Bold},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`red`}},{content:{type:Q.text,text:`Mobile app timeline may slip due to design resource constraints.`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`orange`}},{content:{type:Q.text,text:`API v3 design needs broader stakeholder input before implementation.`}},{content:{type:Q.text,text:`Real-time collaboration requires WebSocket infrastructure not yet provisioned.`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`orange`}}]},{type:Q.text,sectionTitle:`Prepared By`,text:`Product & Engineering Team, March 2026.`,style:hG.Faint}]}]})}></${$}>
                `}})}}),hK=hu({title:`Expand All`,parent:gU,descriptionParagraphs:[`Cards rendered with expandAllCards enabled, which starts all sections expanded but still allows toggling.`],defineExamples({defineExample:e}){e({title:`all sections start expanded`,styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return V`
                    <${$.assign({data:dK,options:{useCardStyles:!0,expandAllCards:!0}})}></${$}>
                `}})}}),gK=hu({title:`Full Card`,parent:gU,descriptionParagraphs:[`Demos of VirStructuredRender with full StructuredRenderData (card arrays).`],defineExamples({defineExample:e}){e({title:`single card with many sections`,styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:[{cardTitle:`Project Health Report`,sections:[{type:Q.text,sectionTitle:`Summary`,text:`Overall project health is good. Most metrics are within acceptable ranges, though a few areas require attention.`},{type:Q.markdown,sectionTitle:`Key Findings`,markdown:[`### Strengths`,``,`- **Code coverage** has improved from 72% to 89% over the past quarter.`,`- Build times remain under 3 minutes for the full suite.`,`- Zero critical vulnerabilities in the latest dependency audit.`,``,`### Areas for Improvement`,``,`1. Documentation coverage for public APIs is at 64%.`,`2. Integration test flakiness has risen to 4.2%.`,`3. Bundle size has grown 18% since the last review.`].join(`
`)},{type:Q.table,sectionTitle:`Module Metrics`,direction:xG.Horizontal,headers:[{key:`module`},{key:`coverage`},{key:`buildTime`},{key:`status`}],entries:[{data:{module:{type:Q.text,text:`Core`},coverage:{type:Q.inlineCode,code:`94%`},buildTime:{type:Q.text,text:`42s`},status:{type:Q.tag,text:`Healthy`,color:{variant:q.Positive}}}},{data:{module:{type:Q.text,text:`Rendering`},coverage:{type:Q.inlineCode,code:`88%`},buildTime:{type:Q.text,text:`28s`},status:{type:Q.tag,text:`Healthy`,color:{variant:q.Positive}}}},{data:{module:{type:Q.text,text:`Data Layer`},coverage:{type:Q.inlineCode,code:`71%`},buildTime:{type:Q.text,text:`1m 14s`},status:{type:Q.tag,text:`Needs Attention`,color:{variant:q.Warning}}}},{data:{module:{type:Q.text,text:`CLI Tools`},coverage:{type:Q.inlineCode,code:`82%`},buildTime:{type:Q.text,text:`19s`},status:{type:Q.tag,text:`Healthy`,color:{variant:q.Positive}}}}]},{type:Q.codeBlock,sectionTitle:`Sample Config`,syntax:`json`,code:JSON.stringify({project:`structured-render`,coverageThreshold:80,maxBuildTimeSeconds:180,modules:[`core`,`rendering`,`data-layer`,`cli-tools`]},null,4)},{type:Q.list,sectionTitle:`Action Items`,items:[{content:{type:Q.text,text:`Increase data layer test coverage to 80%.`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`orange`}},{content:{type:Q.text,text:`Investigate and fix flaky integration tests.`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`orange`}},{content:{type:Q.text,text:`Audit bundle size and remove unused dependencies.`}},{content:{type:Q.text,text:`Add missing JSDoc to public API functions.`}},{content:{type:Q.text,text:`Schedule quarterly security review.`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`green`}}]},{type:Q.text,sectionTitle:`Next Review`,text:`Scheduled for Q3 2026.`,style:hG.Faint}]}]})}></${$}>
                `}})}}),_K=hu({title:`No Card Styles`,parent:gU,descriptionParagraphs:[`Cards rendered without card wrapper styles. Cards stack flush with thin borders between them.`],defineExamples({defineExample:e}){e({title:`flat card list`,styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return V`
                    <${$.assign({data:dK})}></${$}>
                `}})}}),vK=hu({title:`Examples`,parent:void 0,descriptionParagraphs:[`Examples of specific functionality.`]}),yK=hu({title:`Download and Print`,parent:vK,descriptionParagraphs:[`Demonstrates downloading and printing structured render data as a PDF.`],defineExamples({defineExample:e}){e({title:`print`,state(){return{isLoading:!1,isError:!1}},render({state:e,updateState:t}){return V`
                    <${NL.assign({text:`Print`,isDisabled:e.isLoading,icon:e.isError?xL:e.isLoading?iL:void 0})}
                        ${B(`click`,async()=>{t({isLoading:!0});try{await uK(dK,{fileName:`structured-render-print`})}catch(e){Cl.error(`Failed to print PDF`,e),t({isError:!0})}finally{t({isLoading:!1})}})}
                    ></${NL}>
                `}}),e({title:`download`,state(){return{isLoading:!1,isError:!1}},render({state:e,updateState:t}){return V`
                    <${NL.assign({text:`Download`,isDisabled:e.isLoading,icon:e.isError?xL:e.isLoading?iL:void 0})}
                        ${B(`click`,async()=>{t({isLoading:!0});try{await lK(dK,{fileName:`structured-render-download`,pdfOutputType:$G.Download})}catch(e){Cl.error(`Failed to download PDF`,e),t({isError:!0})}finally{t({isLoading:!1})}})}
                    ></${NL}>
                `}})}}),bK=hu({title:`Expandable Source`,parent:vK,descriptionParagraphs:[`Demonstrates VirExpandableSource, a self-contained element that renders a source icon button which expands to reveal source details.`],defineExamples({defineExample:e}){e({title:`single source`,styles:z`
                :host {
                    max-width: 400px;
                }
            `,render(){return V`
                    <${BG.assign({sources:{type:Q.source,fileName:`example.pdf`,pageNumbers:[3],fileBoundingBoxes:null,quote:`This is a quoted passage from the source document.`}})}>
                        <span>Some content with a source</span>
                    </${BG}>
                `}}),e({title:`multiple sources`,styles:z`
                :host {
                    max-width: 400px;
                }
            `,render(){return V`
                    <${BG.assign({sources:[{type:Q.source,fileName:`report.pdf`,pageNumbers:[1,2],fileBoundingBoxes:null,quote:`First source quote.`},{type:Q.source,fileName:`notes.pdf`,pageNumbers:[5],fileBoundingBoxes:null,quote:`Second source quote.`}]})}>
                        <span>Content with multiple sources</span>
                    </${BG}>
                `}}),e({title:`without quote`,styles:z`
                :host {
                    max-width: 400px;
                }
            `,render(){return V`
                    <${BG.assign({sources:{type:Q.source,fileName:`data.csv`,pageNumbers:null,fileBoundingBoxes:null,quote:null}})}>
                        <span>Content with a file-only source</span>
                    </${BG}>
                `}})}}),xK=hu({title:`Sections`,parent:void 0,descriptionParagraphs:[`All structured render section types.`]}),SK=[hu({title:`Code Block`,parent:xK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.codeBlock,sectionTitle:`Code Block Example`,code:`const hello = "world";
console.log(hello);`,syntax:`typescript`}})}></${$}>
                `}}),e({title:`no syntax`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.codeBlock,code:`plain text code block
with multiple lines`,syntax:null}})}></${$}>
                `}})}}),hu({title:`Empty`,parent:xK,defineExamples({defineExample:e}){e({title:`empty`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.empty}})}></${$}>
                `}})}}),hu({title:`Icon`,parent:xK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.icon,iconKey:bL.name}})}></${$}>
                `}}),e({title:`colored stroke`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.icon,iconKey:bL.name,strokeColor:`gold`}})}></${$}>
                `}}),e({title:`colored fill`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.icon,iconKey:CL.name,fillColor:`lime`}})}></${$}>
                `}})}}),hu({title:`Inline Code`,parent:xK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.inlineCode,sectionTitle:`Inline Code Example`,code:`const x = 42;`}})}></${$}>
                `}})}}),hu({title:`List`,parent:xK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.list,sectionTitle:`List Example`,items:[{content:{type:Q.text,text:`First item`}},{content:{type:Q.text,text:`Second item`}},{content:{type:Q.text,text:`Third item`}}]}})}></${$}>
                `}}),e({title:`with icons`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.list,sectionTitle:`List with Icons`,items:[{content:{type:Q.text,text:`Completed task`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`green`}},{content:{type:Q.text,text:`Another completed task`},icon:{type:Q.icon,iconKey:CL.name,strokeColor:`green`}}]}})}></${$}>
                `}}),e({title:`with tags`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.list,sectionTitle:`List with Tags`,items:[{content:{type:Q.tag,text:`Important`,color:{variant:q.Warning}}},{content:{type:Q.tag,text:`Info`}}]}})}></${$}>
                `}})}}),hu({title:`Markdown`,parent:xK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.markdown,sectionTitle:`Markdown Example`,markdown:`## Hello World

This is **bold** and _italic_ text.

- Item 1
- Item 2
- Item 3`}})}></${$}>
                `}}),e({title:`with ordered list`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.markdown,sectionTitle:`Ordered List Example`,markdown:`1. **False Positives**: Name and DOB matches may not always indicate the same patient.
2. **Data Currency**: Registry data may lag behind real-time clinical status.
3. **Legal Compliance**: Ensure all data sharing follows applicable regulations.`}})}></${$}>
                `}}),e({title:`with code`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.markdown,sectionTitle:`Markdown with Code`,markdown:"### Code Example\n\nHere is some `inline code` and a code block:\n\n```typescript\nconst x = 42;\n```"}})}></${$}>
                `}})}}),hu({title:`Processing`,parent:xK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.processing}})}></${$}>
                `}})}}),hu({title:`Source`,parent:xK,defineExamples({defineExample:e}){e({title:`with file name`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.source,fileName:`example.ts`,pageNumbers:null,fileBoundingBoxes:null,quote:null}})}></${$}>
                `}}),e({title:`with quote`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.source,fileName:`document.pdf`,pageNumbers:[1,2],fileBoundingBoxes:null,quote:`This is the relevant quote from the source document.`}})}></${$}>
                `}}),e({title:`with page numbers`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.source,fileName:`report.pdf`,pageNumbers:[5,10,15],fileBoundingBoxes:null,quote:null}})}></${$}>
                `}})}}),hu({title:`Table`,parent:xK,defineExamples({defineExample:e}){e({title:`horizontal`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.table,sectionTitle:`Horizontal Table`,direction:xG.Horizontal,headers:[{key:`name`},{key:`value`}],entries:[{data:{name:{type:Q.text,text:`Alpha`},value:{type:Q.text,text:`100`}}},{data:{name:{type:Q.text,text:`Beta`},value:{type:Q.text,text:`200`}}}]}})}></${$}>
                `}}),e({title:`vertical`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.table,sectionTitle:`Vertical Table`,direction:xG.Vertical,headers:[{key:`feature`},{key:`status`}],entries:[{data:{feature:{type:Q.text,text:`Image Export`},status:{type:Q.tag,text:`Supported`}}},{data:{feature:{type:Q.text,text:`PDF Export`},status:{type:Q.tag,text:`Beta`}}}]}})}></${$}>
                `}}),e({title:`horizontal table with phone size`,render(){return V`
                    <div
                        style=${z`
                            width: 400px;
                        `}
                    >
                        <${$.assign({data:{type:Q.table,sectionTitle:`Horizontal Table (Phone)`,direction:xG.Horizontal,headers:[{key:`name`},{key:`value`},{key:`status`}],entries:[{data:{name:{type:Q.text,text:`Alpha`},value:{type:Q.text,text:`100`},status:{type:Q.tag,text:`Active`,color:{variant:q.Positive}}}},{data:{name:{type:Q.text,text:`Beta`},value:{type:Q.text,text:`200`},status:{type:Q.tag,text:`Inactive`,color:{variant:q.Warning}}}}]},options:{useCardStyles:!0,isPhoneSize:!0}})}></${$}>
                    </div>
                `}}),e({title:`with mixed cell types`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.table,sectionTitle:`Mixed Cell Types`,direction:xG.Horizontal,headers:[{key:`label`},{key:`detail`}],entries:[{data:{label:{type:Q.text,text:`Status`},detail:{type:Q.tag,text:`Active`,color:{variant:q.Positive}}}},{data:{label:{type:Q.text,text:`Version`},detail:{type:Q.inlineCode,code:`v1.0.0`}}}]}})}></${$}>
                `}})}}),hu({title:`Tag`,parent:xK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.tag,sectionTitle:`Tag Example`,text:`Default Tag`}})}></${$}>
                `}}),e({title:`custom colors`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.tag,text:`Custom Colors`,color:{custom:{backgroundColor:`#e74c3c`,foregroundColor:`#ffffff`}}}})}></${$}>
                `}}),e({title:`big tag`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.tag,text:`Big Tag`,useBigTag:!0}})}></${$}>
                `}})}}),hu({title:`Text`,parent:xK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.text,sectionTitle:`Text Example`,text:`This is a simple text section.`}})}></${$}>
                `}}),e({title:`bold`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.text,text:`Bold text section.`,style:hG.Bold}})}></${$}>
                `}}),e({title:`small`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.text,text:`Small text section.`,style:hG.Small}})}></${$}>
                `}}),e({title:`faint`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.text,text:`Faint text section.`,style:hG.Faint}})}></${$}>
                `}}),e({title:`with icon`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.text,text:`Text with icon.`,icon:{type:Q.icon,iconKey:bL.name,strokeColor:`gold`}}})}></${$}>
                `}})}}),gK,fK,mK,pK,hK,_K,yK,bK,gU,vK,xK];aN()({tagName:`vir-app`,styles:z`
        :host {
            display: flex;
            flex-grow: 1;
        }

        ${hU} {
            flex-grow: 1;
        }

        p {
            ${kF}
            text-align: center;
            font-size: 32px;
            font-weight: bold;
            padding: 0 8px;
            padding-bottom: 8px;
        }
    `,render(){return V`
            <${hU.assign({pages:SK,internalRouterConfig:{useInternalRouter:!0,basePath:`structured-render/demo`}})}>
                <p slot=${hU.slotNames.navHeader}>Structured<br>Render</p>
            </${hU}>
        `}});