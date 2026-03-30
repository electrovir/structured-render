const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/src-BApbG1tj.js","assets/chunk-zsgVPwQN.js","assets/preload-helper-D83xqiHd.js","assets/typeof-v3x6qlpQ.js","assets/purify.es-F3iWCZCP.js","assets/html2canvas-R59vLdB2.js","assets/html2canvas-Celz28Md.js","assets/__vite-browser-external-BTBVzKTI.js","assets/__vite-browser-external-BCS1t80C.js","assets/api-BXxBRfOb.js"])))=>i.map(i=>d[i]);
import{o as e,r as t,t as n}from"./chunk-zsgVPwQN.js";import{t as r}from"./preload-helper-D83xqiHd.js";import{t as i}from"./purify.es-F3iWCZCP.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var a;(function(e){e.ElementExample=`element-example`,e.Page=`page`,e.Root=`root`})(a||={});function o(e,t=e=>e){let n=new Map;return e.filter(e=>{let r=t(e);return n.get(r)?!1:(n.set(r,e),!0)})}var s=class{diff(e,t,n={}){let r;typeof n==`function`?(r=n,n={}):`callback`in n&&(r=n.callback);let i=this.castInput(e,n),a=this.castInput(t,n),o=this.removeEmpty(this.tokenize(i,n)),s=this.removeEmpty(this.tokenize(a,n));return this.diffWithOptionsObj(o,s,n,r)}diffWithOptionsObj(e,t,n,r){let i=e=>{if(e=this.postProcess(e,n),r){setTimeout(function(){r(e)},0);return}else return e},a=t.length,o=e.length,s=1,c=a+o;n.maxEditLength!=null&&(c=Math.min(c,n.maxEditLength));let l=n.timeout??1/0,u=Date.now()+l,d=[{oldPos:-1,lastComponent:void 0}],f=this.extractCommon(d[0],t,e,0,n);if(d[0].oldPos+1>=o&&f+1>=a)return i(this.buildValues(d[0].lastComponent,t,e));let p=-1/0,m=1/0,h=()=>{for(let r=Math.max(p,-s);r<=Math.min(m,s);r+=2){let s,c=d[r-1],l=d[r+1];c&&(d[r-1]=void 0);let u=!1;if(l){let e=l.oldPos-r;u=l&&0<=e&&e<a}let h=c&&c.oldPos+1<o;if(!u&&!h){d[r]=void 0;continue}if(s=!h||u&&c.oldPos<l.oldPos?this.addToPath(l,!0,!1,0,n):this.addToPath(c,!1,!0,1,n),f=this.extractCommon(s,t,e,r,n),s.oldPos+1>=o&&f+1>=a)return i(this.buildValues(s.lastComponent,t,e))||!0;d[r]=s,s.oldPos+1>=o&&(m=Math.min(m,r-1)),f+1>=a&&(p=Math.max(p,r+1))}s++};if(r)(function e(){setTimeout(function(){if(s>c||Date.now()>u)return r(void 0);h()||e()},0)})();else for(;s<=c&&Date.now()<=u;){let e=h();if(e)return e}}addToPath(e,t,n,r,i){let a=e.lastComponent;return a&&!i.oneChangePerToken&&a.added===t&&a.removed===n?{oldPos:e.oldPos+r,lastComponent:{count:a.count+1,added:t,removed:n,previousComponent:a.previousComponent}}:{oldPos:e.oldPos+r,lastComponent:{count:1,added:t,removed:n,previousComponent:a}}}extractCommon(e,t,n,r,i){let a=t.length,o=n.length,s=e.oldPos,c=s-r,l=0;for(;c+1<a&&s+1<o&&this.equals(n[s+1],t[c+1],i);)c++,s++,l++,i.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return l&&!i.oneChangePerToken&&(e.lastComponent={count:l,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=s,c}equals(e,t,n){return n.comparator?n.comparator(e,t):e===t||!!n.ignoreCase&&e.toLowerCase()===t.toLowerCase()}removeEmpty(e){let t=[];for(let n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}castInput(e,t){return e}tokenize(e,t){return Array.from(e)}join(e){return e.join(``)}postProcess(e,t){return e}get useLongestToken(){return!1}buildValues(e,t,n){let r=[],i;for(;e;)r.push(e),i=e.previousComponent,delete e.previousComponent,e=i;r.reverse();let a=r.length,o=0,s=0,c=0;for(;o<a;o++){let e=r[o];if(e.removed)e.value=this.join(n.slice(c,c+e.count)),c+=e.count;else{if(!e.added&&this.useLongestToken){let r=t.slice(s,s+e.count);r=r.map(function(e,t){let r=n[c+t];return r.length>e.length?r:e}),e.value=this.join(r)}else e.value=this.join(t.slice(s,s+e.count));s+=e.count,e.added||(c+=e.count)}}return r}};new class extends s{};function c(e,t){let n;for(n=0;n<e.length&&n<t.length;n++)if(e[n]!=t[n])return e.slice(0,n);return e.slice(0,n)}function l(e,t){let n;if(!e||!t||e[e.length-1]!=t[t.length-1])return``;for(n=0;n<e.length&&n<t.length;n++)if(e[e.length-(n+1)]!=t[t.length-(n+1)])return e.slice(-n);return e.slice(-n)}function u(e,t,n){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return n+e.slice(t.length)}function d(e,t,n){if(!t)return e+n;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+n}function f(e,t){return u(e,t,``)}function p(e,t){return d(e,t,``)}function m(e,t){return t.slice(0,h(e,t))}function h(e,t){let n=0;e.length>t.length&&(n=e.length-t.length);let r=t.length;e.length<t.length&&(r=e.length);let i=Array(r),a=0;i[0]=0;for(let e=1;e<r;e++){for(t[e]==t[a]?i[e]=i[a]:i[e]=a;a>0&&t[e]!=t[a];)a=i[a];t[e]==t[a]&&a++}a=0;for(let r=n;r<e.length;r++){for(;a>0&&e[r]!=t[a];)a=i[a];e[r]==t[a]&&a++}return a}function g(e,t){let n=[];for(let r of Array.from(t.segment(e))){let e=r.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(e)?n[n.length-1]+=e:n.push(e)}return n}function ee(e,t){if(t)return te(e,t)[1];let n;for(n=e.length-1;n>=0&&e[n].match(/\s/);n--);return e.substring(n+1)}function _(e,t){if(t)return te(e,t)[0];let n=e.match(/^\s*/);return n?n[0]:``}function te(e,t){if(!t)return[_(e),ee(e)];if(t.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);let n=g(e,t),r=n[0],i=n[n.length-1];return[/\s/.test(r)?r:``,/\s/.test(i)?i:``]}var ne=`a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}`,re=RegExp(`[${ne}]+|\\s+|[^${ne}]`,`ug`),ie=new class extends s{equals(e,t,n){return n.ignoreCase&&(e=e.toLowerCase(),t=t.toLowerCase()),e.trim()===t.trim()}tokenize(e,t={}){let n;if(t.intlSegmenter){let r=t.intlSegmenter;if(r.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);n=g(e,r)}else n=e.match(re)||[];let r=[],i=null;return n.forEach(e=>{/\s/.test(e)?i==null?r.push(e):r.push(r.pop()+e):i!=null&&/\s/.test(i)?r[r.length-1]==i?r.push(r.pop()+e):r.push(i+e):r.push(e),i=e}),r}join(e){return e.map((e,t)=>t==0?e:e.replace(/^\s+/,``)).join(``)}postProcess(e,t){if(!e||t.oneChangePerToken)return e;let n=null,r=null,i=null;return e.forEach(e=>{e.added?r=e:e.removed?i=e:((r||i)&&oe(n,i,r,e,t.intlSegmenter),n=e,r=null,i=null)}),(r||i)&&oe(n,i,r,null,t.intlSegmenter),e}};function ae(e,t,n){return n?.ignoreWhitespace!=null&&!n.ignoreWhitespace?ce(e,t,n):ie.diff(e,t,n)}function oe(e,t,n,r,i){if(t&&n){let[a,o]=te(t.value,i),[s,m]=te(n.value,i);if(e){let r=c(a,s);e.value=d(e.value,s,r),t.value=f(t.value,r),n.value=f(n.value,r)}if(r){let e=l(o,m);r.value=u(r.value,m,e),t.value=p(t.value,e),n.value=p(n.value,e)}}else if(n){if(e){let e=_(n.value,i);n.value=n.value.substring(e.length)}if(r){let e=_(r.value,i);r.value=r.value.substring(e.length)}}else if(e&&r){let n=_(r.value,i),[a,o]=te(t.value,i),s=c(n,a);t.value=f(t.value,s);let m=l(f(n,s),o);t.value=p(t.value,m),r.value=u(r.value,n,m),e.value=d(e.value,n,n.slice(0,n.length-m.length))}else if(r){let e=_(r.value,i),n=m(ee(t.value,i),e);t.value=p(t.value,n)}else if(e){let n=m(ee(e.value,i),_(t.value,i));t.value=f(t.value,n)}}var se=new class extends s{tokenize(e){let t=RegExp(`(\\r?\\n)|[${ne}]+|[^\\S\\n\\r]+|[^${ne}]`,`ug`);return e.match(t)||[]}};function ce(e,t,n){return se.diff(e,t,n)}var le=new class extends s{constructor(){super(...arguments),this.tokenize=de}equals(e,t,n){return n.ignoreWhitespace?((!n.newlineIsToken||!e.includes(`
`))&&(e=e.trim()),(!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(e.endsWith(`
`)&&(e=e.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(e,t,n)}};function ue(e,t,n){return le.diff(e,t,n)}function de(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));let n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let e=0;e<r.length;e++){let i=r[e];e%2&&!t.newlineIsToken?n[n.length-1]+=i:n.push(i)}return n}function fe(e){return e==`.`||e==`!`||e==`?`}new class extends s{tokenize(e){let t=[],n=0;for(let r=0;r<e.length;r++){if(r==e.length-1){t.push(e.slice(n));break}if(fe(e[r])&&e[r+1].match(/\s/)){for(t.push(e.slice(n,r+1)),r=n=r+1;e[r+1]?.match(/\s/);)r++;t.push(e.slice(n,r+1)),n=r+1}}return t}},new class extends s{tokenize(e){return e.split(/([{}:;,]|\s+)/)}},new class extends s{constructor(){super(...arguments),this.tokenize=de}get useLongestToken(){return!0}castInput(e,t){let{undefinedReplacement:n,stringifyReplacer:r=(e,t)=>t===void 0?n:t}=t;return typeof e==`string`?e:JSON.stringify(pe(e,null,null,r),null,`  `)}equals(e,t,n){return super.equals(e.replace(/,([\r\n])/g,`$1`),t.replace(/,([\r\n])/g,`$1`),n)}};function pe(e,t,n,r,i){t||=[],n||=[],r&&(e=r(i===void 0?``:i,e));let a;for(a=0;a<t.length;a+=1)if(t[a]===e)return n[a];let o;if(Object.prototype.toString.call(e)===`[object Array]`){for(t.push(e),o=Array(e.length),n.push(o),a=0;a<e.length;a+=1)o[a]=pe(e[a],t,n,r,String(a));return t.pop(),n.pop(),o}if(e&&e.toJSON&&(e=e.toJSON()),typeof e==`object`&&e){t.push(e),o={},n.push(o);let i=[],s;for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&i.push(s);for(i.sort(),a=0;a<i.length;a+=1)s=i[a],o[s]=pe(e[s],t,n,r,s);t.pop(),n.pop()}else o=e;return o}new class extends s{tokenize(e){return e.slice()}join(e){return e}removeEmpty(e){return e}};function me(e,t){return he(e,new Map,t)}function he(e,t,n){if(e&&typeof e==`object`&&!Array.isArray(e)&&e.constructor===Object){if(t.has(e))return t.get(e);let r={};return t.set(e,r),Object.entries(e).sort((e,t)=>n?n({key:e[0],value:e[1]},{key:t[0],value:t[1]}):e[0].localeCompare(t[0])).forEach(([e,i])=>{r[e]=he(i,t,n)}),r}else return e}var ge=e(n(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):n.JSON5=r()})(e,(function(){function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}var t=e(function(e){var t=e.exports=typeof window<`u`&&window.Math==Math?window:typeof self<`u`&&self.Math==Math?self:Function(`return this`)();typeof __g==`number`&&(__g=t)}),n=e(function(e){var t=e.exports={version:`2.6.5`};typeof __e==`number`&&(__e=t)});n.version;var r=function(e){return typeof e==`object`?e!==null:typeof e==`function`},i=function(e){if(!r(e))throw TypeError(e+` is not an object!`);return e},a=function(e){try{return!!e()}catch{return!0}},o=!a(function(){return Object.defineProperty({},`a`,{get:function(){return 7}}).a!=7}),s=t.document,c=r(s)&&r(s.createElement),l=function(e){return c?s.createElement(e):{}},u=!o&&!a(function(){return Object.defineProperty(l(`div`),`a`,{get:function(){return 7}}).a!=7}),d=function(e,t){if(!r(e))return e;var n,i;if(t&&typeof(n=e.toString)==`function`&&!r(i=n.call(e))||typeof(n=e.valueOf)==`function`&&!r(i=n.call(e))||!t&&typeof(n=e.toString)==`function`&&!r(i=n.call(e)))return i;throw TypeError(`Can't convert object to primitive value`)},f=Object.defineProperty,p={f:o?Object.defineProperty:function(e,t,n){if(i(e),t=d(t,!0),i(n),u)try{return f(e,t,n)}catch{}if(`get`in n||`set`in n)throw TypeError(`Accessors not supported!`);return`value`in n&&(e[t]=n.value),e}},m=function(e,t){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:t}},h=o?function(e,t,n){return p.f(e,t,m(1,n))}:function(e,t,n){return e[t]=n,e},g={}.hasOwnProperty,ee=function(e,t){return g.call(e,t)},_=0,te=Math.random(),ne=function(e){return`Symbol(${e===void 0?``:e})_${(++_+te).toString(36)}`},re=!1,ie=e(function(e){var r=`__core-js_shared__`,i=t[r]||(t[r]={});(e.exports=function(e,t){return i[e]||(i[e]=t===void 0?{}:t)})(`versions`,[]).push({version:n.version,mode:re?`pure`:`global`,copyright:`© 2019 Denis Pushkarev (zloirock.ru)`})})(`native-function-to-string`,Function.toString),ae=e(function(e){var r=ne(`src`),i=`toString`,a=(``+ie).split(i);n.inspectSource=function(e){return ie.call(e)},(e.exports=function(e,n,i,o){var s=typeof i==`function`;s&&(ee(i,`name`)||h(i,`name`,n)),e[n]!==i&&(s&&(ee(i,r)||h(i,r,e[n]?``+e[n]:a.join(String(n)))),e===t?e[n]=i:o?e[n]?e[n]=i:h(e,n,i):(delete e[n],h(e,n,i)))})(Function.prototype,i,function(){return typeof this==`function`&&this[r]||ie.call(this)})}),oe=function(e){if(typeof e!=`function`)throw TypeError(e+` is not a function!`);return e},se=function(e,t,n){if(oe(e),t===void 0)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}},ce=`prototype`,le=function(e,r,i){var a=e&le.F,o=e&le.G,s=e&le.S,c=e&le.P,l=e&le.B,u=o?t:s?t[r]||(t[r]={}):(t[r]||{})[ce],d=o?n:n[r]||(n[r]={}),f=d[ce]||(d[ce]={}),p,m,g,ee;for(p in o&&(i=r),i)m=!a&&u&&u[p]!==void 0,g=(m?u:i)[p],ee=l&&m?se(g,t):c&&typeof g==`function`?se(Function.call,g):g,u&&ae(u,p,g,e&le.U),d[p]!=g&&h(d,p,ee),c&&f[p]!=g&&(f[p]=g)};t.core=n,le.F=1,le.G=2,le.S=4,le.P=8,le.B=16,le.W=32,le.U=64,le.R=128;var ue=le,de=Math.ceil,fe=Math.floor,pe=function(e){return isNaN(e=+e)?0:(e>0?fe:de)(e)},me=function(e){if(e==null)throw TypeError(`Can't call method on  `+e);return e},he=function(e){return function(t,n){var r=String(me(t)),i=pe(n),a=r.length,o,s;return i<0||i>=a?e?``:void 0:(o=r.charCodeAt(i),o<55296||o>56319||i+1===a||(s=r.charCodeAt(i+1))<56320||s>57343?e?r.charAt(i):o:e?r.slice(i,i+2):(o-55296<<10)+(s-56320)+65536)}}(!1);ue(ue.P,`String`,{codePointAt:function(e){return he(this,e)}}),n.String.codePointAt;var ge=Math.max,_e=Math.min,v=function(e,t){return e=pe(e),e<0?ge(e+t,0):_e(e,t)},y=String.fromCharCode,ve=String.fromCodePoint;ue(ue.S+ue.F*(!!ve&&ve.length!=1),`String`,{fromCodePoint:function(e){for(var t=arguments,n=[],r=arguments.length,i=0,a;r>i;){if(a=+t[i++],v(a,1114111)!==a)throw RangeError(a+` is not a valid code point`);n.push(a<65536?y(a):y(((a-=65536)>>10)+55296,a%1024+56320))}return n.join(``)}}),n.String.fromCodePoint;var ye={Space_Separator:/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,ID_Start:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,ID_Continue:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/},b={isSpaceSeparator:function(e){return typeof e==`string`&&ye.Space_Separator.test(e)},isIdStartChar:function(e){return typeof e==`string`&&(e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e===`$`||e===`_`||ye.ID_Start.test(e))},isIdContinueChar:function(e){return typeof e==`string`&&(e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e>=`0`&&e<=`9`||e===`$`||e===`_`||e===`‌`||e===`‍`||ye.ID_Continue.test(e))},isDigit:function(e){return typeof e==`string`&&/[0-9]/.test(e)},isHexDigit:function(e){return typeof e==`string`&&/[0-9A-Fa-f]/.test(e)}},be,x,xe,Se,Ce,we,Te,Ee,De,Oe=function(e,t){be=String(e),x=`start`,xe=[],Se=0,Ce=1,we=0,Te=void 0,Ee=void 0,De=void 0;do Te=Fe(),He[x]();while(Te.type!==`eof`);return typeof t==`function`?ke({"":De},``,t):De};function ke(e,t,n){var r=e[t];if(typeof r==`object`&&r)if(Array.isArray(r))for(var i=0;i<r.length;i++){var a=String(i),o=ke(r,a,n);o===void 0?delete r[a]:Object.defineProperty(r,a,{value:o,writable:!0,enumerable:!0,configurable:!0})}else for(var s in r){var c=ke(r,s,n);c===void 0?delete r[s]:Object.defineProperty(r,s,{value:c,writable:!0,enumerable:!0,configurable:!0})}return n.call(e,t,r)}var Ae,je,Me,Ne,Pe;function Fe(){for(Ae=`default`,je=``,Me=!1,Ne=1;;){Pe=Ie();var e=C[Ae]();if(e)return e}}function Ie(){if(be[Se])return String.fromCodePoint(be.codePointAt(Se))}function S(){var e=Ie();return e===`
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
`),r)}};function vs(e,t){return typeof e==`function`&&typeof t==`function`?!0:null}var ys={strictEquals(e,t,n){if(e!==t)throw typeof e==`object`&&e||typeof t==`object`&&t?new O(`Strict reference equality failed for \n\n${y(t)}\n\n.`,n):new _s(`Not strictly equal.`,e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e==`object`&&e?new O(`Strict reference INequality failed for \n\n${y(t)}\n\n.`,n):new O(`\n\n${y(e)}\n\nstrictly equals\n\n${y(t)}\n\n`,n)},looseEquals(e,t,n){if(e!=t)throw typeof e==`object`&&e||typeof t==`object`&&t?new O(`Loose reference equality failed for \n\n${y(t)}\n\n.`,n):new _s(`Not loosely equal.`,e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e==`object`&&e?new O(`Loose reference INequality failed for \n\n${y(t)}\n\n.`,n):new O(`\n\n${y(e)}\n\nloosely equals\n\n${y(t)}\n\n`,n)},deepEquals(e,t,n){if(!$o(e,t,{comparator:vs}))throw new _s(`Not deeply equal.`,e,t,n)},notDeepEquals(e,t,n){if($o(e,t,{comparator:vs}))throw new O(`\n\n${y(e)}\n\ndeeply equals\n\n${y(t)}\n\n`,n)}},bs=ys.deepEquals,xs={assert:ys,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return $o(e,t,{comparator:vs})},notDeepEquals(e,t){return!$o(e,t,{comparator:vs})}},assertWrap:{strictEquals(e,t,n){if(e===t)return e;throw typeof e==`object`&&e||typeof t==`object`&&t?new O(`Strict reference equality failed for \n\n${y(t)}\n\n.`,n):new _s(`Not strictly equal.`,e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e==`object`&&e?new O(`Strict reference INequality failed for \n\n${y(t)}\n\n.`,n):new O(`\n\n${y(e)}\n\nstrictly equals\n\n${y(t)}\n\n`,n);return e},looseEquals(e,t,n){if(e==t)return e;throw typeof e==`object`&&e||typeof t==`object`&&t?new O(`Loose reference equality failed for \n\n${y(t)}\n\n.`,n):new _s(`Not loosely equal.`,e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e==`object`&&e?new O(`Loose reference INequality failed for \n\n${y(t)}\n\n.`,n):new O(`\n\n${y(e)}\n\nloosely equals\n\n${y(t)}\n\n`,n);return e},deepEquals(e,t,n){if($o(e,t,{comparator:vs}))return e;throw new _s(`Not deeply equal.`,e,t,n)},notDeepEquals(e,t,n){if($o(e,t,{comparator:vs}))throw new O(`\n\n${y(e)}\n\ndeeply equals\n\n${y(t)}\n\n`,n);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if($o(e,t,{comparator:vs}))return e},notDeepEquals(e,t){if(!$o(e,t,{comparator:vs}))return e}},waitUntil:{strictEquals:k(ys.strictEquals),notStrictEquals:k(ys.notStrictEquals),looseEquals:k(ys.looseEquals),notLooseEquals:k(ys.notLooseEquals),deepEquals:k(ys.deepEquals),notDeepEquals:k(ys.notDeepEquals)}};function Ss(e,t){if(typeof e==`string`)return typeof t==`string`&&e.includes(t);let n=!0;try{n=Reflect.ownKeys(e).map(t=>e[t]).includes(t)}catch{return!1}return n}function Cs(e,t){return typeof t==`string`?t.includes(e):Ss(t,e)}var ws={hasValue(e,t,n){if(!Ss(e,t))throw new O(`'${y(e)}' does not have value '${y(t)}'.`,n)},lacksValue(e,t,n){if(Ss(e,t))throw new O(`'${y(e)}' has value '${y(t)}'.`,n)},hasValues(e,t,n){let r=[];if(typeof e==`string`)r=t.filter(t=>!(typeof t==`string`&&e.includes(t)));else try{let n=Reflect.ownKeys(e).map(t=>e[t]);r=t.filter(e=>!n.includes(e))}catch{throw new O(`'${y(e)}' does not have values '${y(t)}'.`,n)}if(r.length)throw new O(`'${y(e)}' does not have values '${y(r)}'.`,n)},lacksValues(e,t,n){let r=[];if(typeof e==`string`)r=t.filter(t=>typeof t==`string`&&e.includes(t));else try{let n=Reflect.ownKeys(e).map(t=>e[t]);r=t.filter(e=>n.includes(e))}catch{}if(r.length)throw new O(`'${y(e)}' has values '${y(r)}'.`,n)},isIn(e,t,n){if(!Cs(e,t))throw new O(`'${y(e)}'\n\nis not in\n\n${y(t)}.`,n)},isNotIn(e,t,n){if(Cs(e,t))throw new O(`'${y(e)}'\n\nis in\n\n${y(t)}.`,n)},isEmpty(e,t){if(typeof e!=`string`&&typeof e!=`object`)throw new O(`'${y(e)}' is not empty.`,t);if(typeof e==`string`&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e==`object`&&!Object.keys(e).length)return;throw new O(`'${y(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!=`string`&&typeof e!=`object`)){if(typeof e==`string`&&!e){if(!e)throw new O(`'${y(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new O(`'${y(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new O(`'${y(e)}' is not empty.`,t)}else if(typeof e==`object`&&!Object.keys(e).length)throw new O(`'${y(e)}' is not empty.`,t)}}},Ts={assert:ws,check:{hasValue(e,t){return Ss(e,t)},lacksValue(e,t){return!Ss(e,t)},hasValues(e,t){return t.every(t=>Ss(e,t))},lacksValues(e,t){return t.every(t=>!Ss(e,t))},isIn(e,t){return Cs(e,t)},isNotIn(e,t){return!Cs(e,t)},isEmpty(e){return typeof e!=`string`&&typeof e!=`object`?!1:typeof e==`string`?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!=`string`&&typeof e!=`object`?!0:typeof e==`string`?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,n){if(!Ss(e,t))throw new O(`'${y(e)}' does not have value '${y(t)}'.`,n);return e},lacksValue(e,t,n){if(Ss(e,t))throw new O(`'${y(e)}' has value '${y(t)}'.`,n);return e},hasValues(e,t,n){let r=[];if(typeof e==`string`)r=t.filter(t=>!(typeof t==`string`&&e.includes(t)));else try{let n=Reflect.ownKeys(e).map(t=>e[t]);r=t.filter(e=>!n.includes(e))}catch{throw new O(`'${y(e)}' does not have values '${y(t)}'.`,n)}if(r.length)throw new O(`'${y(e)}' does not have values '${y(r)}'.`,n);return e},lacksValues(e,t,n){let r=[];if(typeof e==`string`)r=t.filter(t=>typeof t==`string`&&e.includes(t));else try{let n=Reflect.ownKeys(e).map(t=>e[t]);r=t.filter(e=>n.includes(e))}catch{}if(r.length)throw new O(`'${y(e)}' has values '${y(r)}'.`,n);return e},isIn(e,t,n){if(!Cs(e,t))throw new O(`'${y(e)}'\n\nis not in\n\n${y(t)}.`,n);return e},isNotIn(e,t,n){if(Cs(e,t))throw new O(`'${y(e)}'\n\nis in\n\n${y(t)}.`,n);return e},isEmpty(e,t){if(typeof e!=`string`&&typeof e!=`object`)throw new O(`'${y(e)}' is not empty.`,t);if(typeof e==`string`&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e==`object`&&!Object.keys(e).length)return e;throw new O(`'${y(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!=`string`&&typeof e!=`object`)return e;if(typeof e==`string`&&!e){if(!e)throw new O(`'${y(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new O(`'${y(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new O(`'${y(e)}' is empty.`,t)}else if(typeof e==`object`&&!Object.keys(e).length)throw new O(`'${y(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(Ss(e,t))return e},lacksValue(e,t){if(!Ss(e,t))return e},hasValues(e,t){if(t.every(t=>Ss(e,t)))return e},lacksValues(e,t){if(!t.every(t=>Ss(e,t)))return e},isIn(e,t){if(Cs(e,t))return e},isNotIn(e,t){if(!Cs(e,t))return e},isEmpty(e){if(!(typeof e!=`string`&&typeof e!=`object`)){if(typeof e==`string`){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e==`object`&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!=`string`&&typeof e!=`object`)return e;if(typeof e==`string`){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e==`object`&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:k(ws.hasValue),lacksValue:k(ws.lacksValue),hasValues:k(ws.hasValues),lacksValues:k(ws.lacksValues),isIn:k(ws.isIn),isNotIn:k(ws.isNotIn),isEmpty:k(ws.isEmpty),isNotEmpty:k(ws.isNotEmpty)}},Es={isHttpStatus(e,t){if(!Ro(e,S))throw new O(`${y(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,n){if(!Ro(e,S))throw new O(`${y(e)} is not a valid HTTP status.`,n);if(!Cs(e,Le[t]))throw new O(`${y(e)} is not a '${t}' HTTP status.`,n)}},Ds={assert:Es,check:{isHttpStatus(e){return Ro(e,S)},isHttpStatusCategory(e,t){return Ro(e,S)&&Cs(e,Le[t])}},assertWrap:{isHttpStatus(e,t){if(!Ro(e,S))throw new O(`${y(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,n){if(!Ro(e,S))throw new O(`${y(e)} is not a valid HTTP status.`,n);if(!Cs(e,Le[t]))throw new O(`${y(e)} is not a '${t}' HTTP status.`,n);return e}},checkWrap:{isHttpStatus(e){if(Ro(e,S))return e},isHttpStatusCategory(e,t){if(Ro(e,S)&&Cs(e,Le[t]))return e}},waitUntil:{isHttpStatus:k(Es.isHttpStatus),isHttpStatusCategory:k(Es.isHttpStatusCategory)}},Os={instanceOf(e,t,n){if(!(e instanceof t))throw new O(`'${y(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new O(`'${y(e)}' is an instance of '${t.name}'`,n)}},ks={assert:Os,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,n){if(e instanceof t)return e;throw new O(`'${y(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new O(`'${y(e)}' is an instance of '${t.name}'`,n);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:k(Os.instanceOf),notInstanceOf:k(Os.notInstanceOf)}},As=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function js(e,t){return As.some(n=>{try{return n(e,t)}catch{return!1}})}var Ms={isKeyOf(e,t,n){if(!js(t,e))throw new O(`'${String(e)}' is not a key of '${y(t)}'.`,n)},isNotKeyOf(e,t,n){if(js(t,e))throw new O(`'${String(e)}' is a key of '${y(t)}'.`,n)},hasKey(e,t,n){if(!js(e,t))throw new O(`'${y(e)}' does not have key '${String(t)}'.`,n)},lacksKey(e,t,n){if(js(e,t))throw new O(`'${y(e)}' has key '${String(t)}'.`,n)},hasKeys(e,t,n){let r=t.filter(t=>!js(e,t));if(r.length)throw new O(`'${y(e)}' does not have keys '${r.join(`,`)}'.`,n)},lacksKeys(e,t,n){let r=t.filter(t=>js(e,t));if(r.length)throw new O(`'${y(e)}' does not lack keys '${r.join(`,`)}'.`,n)}},Ns={assert:Ms,check:{isKeyOf(e,t){return js(t,e)},isNotKeyOf(e,t){return!js(t,e)},hasKey:js,lacksKey(e,t){return!js(e,t)},hasKeys(e,t){return t.every(t=>js(e,t))},lacksKeys(e,t){return t.every(t=>!js(e,t))}},assertWrap:{isKeyOf(e,t,n){if(!js(t,e))throw new O(`'${String(e)}' is not a key of '${y(t)}'.`,n);return e},isNotKeyOf(e,t,n){if(js(t,e))throw new O(`'${String(e)}' is a key of '${y(t)}'.`,n);return e},hasKey(e,t,n){if(!js(e,t))throw new O(`'${y(e)}' does not have key '${String(t)}'.`,n);return e},lacksKey(e,t,n){if(js(e,t))throw new O(`'${y(e)}' has key '${String(t)}'.`,n);return e},hasKeys(e,t,n){let r=t.filter(t=>!js(e,t));if(r.length)throw new O(`'${y(e)}' does not have keys '${r.join(`,`)}'.`,n);return e},lacksKeys(e,t,n){let r=t.filter(t=>js(e,t));if(r.length)throw new O(`'${y(e)}' does not lack keys '${r.join(`,`)}'.`,n);return e}},checkWrap:{isKeyOf(e,t){if(js(t,e))return e},isNotKeyOf(e,t){if(!js(t,e))return e},hasKey(e,t){if(js(e,t))return e},lacksKey(e,t){if(!js(e,t))return e},hasKeys(e,t){if(t.every(t=>js(e,t)))return e},lacksKeys(e,t){if(t.every(t=>!js(e,t)))return e}},waitUntil:{isKeyOf:k(Ms.isKeyOf),isNotKeyOf:k(Ms.isNotKeyOf),hasKey:k(Ms.hasKey),lacksKey:k(Ms.lacksKey),hasKeys:k(Ms.hasKeys),lacksKeys:k(Ms.lacksKeys)}};function Ps(e,t,n){if((Array.isArray(e)||typeof e==`string`?e.length:De(e).length)<t)throw new O(`Length '${e.length}' is not at least '${t}'.`,n)}function Fs(e,t,n){if((Array.isArray(e)||typeof e==`string`?e.length:De(e).length)!==t)throw new O(`Length '${e.length}' is not exactly '${t}'.`,n)}var Is={isLengthAtLeast:Ps,isLengthExactly:Fs},Ls={assert:Is,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e==`string`?e.length:De(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e==`string`?e.length:De(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,n)=>{if((Array.isArray(e)||typeof e==`string`?e.length:De(e).length)<t)throw new O(`Length '${e.length}' is not at least '${t}'.`,n);return e}),isLengthExactly:((e,t,n)=>{if((Array.isArray(e)||typeof e==`string`?e.length:De(e).length)!==t)throw new O(`Length '${e.length}' is not exactly '${t}'.`,n);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e==`string`?e.length:De(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e==`string`?e.length:De(e).length)===t)return e})},waitUntil:{isLengthAtLeast:k(Is.isLengthAtLeast),isLengthExactly:k(Is.isLengthExactly)}},Rs={assert:{never(e){throw new O(`This code should not have executed.`,e)}},assertWrap:{},check:{},checkWrap:{},waitUntil:{}},zs={isDefined(e,t){if(e==null)throw new O(`'${y(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new O(`'${y(e)}' is not a nullish.`,t)}},Bs={assert:zs,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new O(`'${y(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new O(`'${y(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:k(zs.isDefined),isNullish:k(zs.isNullish)}},Vs={isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new O(`${e} is not within the bounds ${y({min:n,max:t})}`,r)},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new O(`${e} is not outside the bounds ${y({min:t,max:n})}`,r)},isInteger(e,t){if(typeof e!=`number`||isNaN(e)||!Number.isInteger(e))throw new O(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new O(`${e} is an integer.`,t)},isAbove(e,t,n){if(e<=t)throw new O(`${e} is not above ${t}`,n)},isAtLeast(e,t,n){if(e<t)throw new O(`${e} is not at least ${t}`,n)},isBelow(e,t,n){if(e>=t)throw new O(`${e} is not below ${t}`,n)},isAtMost(e,t,n){if(e>t)throw new O(`${e} is not at most ${t}`,n)},isNaN(e,t){if(!isNaN(e))throw new O(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new O(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new O(`${e} is not infinite`,t)},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new O(`${e} is not within ±${n} of ${t}`,r)},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new O(`${e} is within ±${n} of ${t}`,r)}},Hs={assert:Vs,check:{isInBounds(e,{max:t,min:n}){return n<=e&&e<=t},isOutBounds(e,{max:t,min:n}){return e<n||t<e},isInteger(e){return typeof e==`number`&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!=`number`||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,n){return t-n<=e&&e<=t+n},isNotApproximately(e,t,n){return e<t-n||e>t+n}},assertWrap:{isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new O(`${e} is not within the bounds ${y({min:n,max:t})}`,r);return e},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new O(`${e} is not outside the bounds ${y({min:t,max:n})}`,r);return e},isInteger(e,t){if(typeof e!=`number`||isNaN(e)||!Number.isInteger(e))throw new O(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new O(`${e} is an integer.`,t);return e},isAbove(e,t,n){if(e<=t)throw new O(`${e} is not above ${t}`,n);return e},isAtLeast(e,t,n){if(e<t)throw new O(`${e} is not at least ${t}`,n);return e},isBelow(e,t,n){if(e>=t)throw new O(`${e} is not below ${t}`,n);return e},isAtMost(e,t,n){if(e>t)throw new O(`${e} is not at most ${t}`,n);return e},isNaN(e,t){if(!isNaN(e))throw new O(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new O(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new O(`${e} is not infinite`,t);return e},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new O(`${e} is not within ±${n} of ${t}`,r);return e},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new O(`${e} is within ±${n} of ${t}`,r);return e}},checkWrap:{isInBounds(e,{max:t,min:n}){if(n<=e&&e<=t)return e},isOutBounds(e,{max:t,min:n}){if(e<n||t<e)return e},isInteger(e){if(typeof e==`number`&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!=`number`||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,n){if(t-n<=e&&e<=t+n)return e},isNotApproximately(e,t,n){if(e<t-n||e>t+n)return e}},waitUntil:{isInBounds:k(Vs.isInBounds),isOutBounds:k(Vs.isOutBounds),isInteger:k(Vs.isInteger),isNotInteger:k(Vs.isNotInteger),isAbove:k(Vs.isAbove),isAtLeast:k(Vs.isAtLeast),isBelow:k(Vs.isBelow),isAtMost:k(Vs.isAtMost),isNaN:k(Vs.isNaN),isFinite:k(Vs.isFinite),isInfinite:k(Vs.isInfinite),isApproximately:k(Vs.isApproximately),isNotApproximately:k(Vs.isNotApproximately)}};function Us(e,t,n,r,i){return Gs(...Ws(e,t,n,r,i),!1)}function Ws(e,t,n,r,i){let a=Array.isArray(n);return[a?e:bs,a?t:e,a?n:t,a?r:n,a?i:r]}function Gs(e,t,n,r,i,a){let o=t(...n);if(o instanceof Promise)return new Promise(async(n,s)=>{try{let t=await o;e(t,r),a?n(t):n()}catch(e){s(new O(`Output from '${t.name}' did not produce expected output. ${Ne(e)}`,i))}});try{return e(o,r),a?o:void 0}catch(e){throw new O(`Output from '${t.name}' did not produce expected output. ${Ne(e)}`,i)}}function Ks(e,t,n,r,i){try{let a=Gs(...Ws(e,t,n,r,i),!1);return a instanceof Promise?new Promise(async e=>{try{await a,e(!0)}catch{e(!1)}}):!0}catch{return!1}}function qs(e,t,n,r,i){return Gs(...Ws(e,t,n,r,i),!0)}function Js(e,t,n,r,i){try{let a=Gs(...Ws(e,t,n,r,i),!0);return a instanceof Promise?new Promise(async e=>{try{e(await a)}catch{e(void 0)}}):a}catch{return}}var Ys=Symbol(`not set`);async function Xs(e,t,n,r,i,a){let o=Array.isArray(n),s=o?e:bs,c=o?t:e,l=o?n:t,u=o?r:n,d=Oo(o?i:r),f=o?a:i,p=uo(d.timeout,{milliseconds:!0}).milliseconds,m=uo(d.interval,{milliseconds:!0}),h=Ys,g;async function ee(){try{h=await Gs(s,c,l,u,void 0,!0)}catch(e){h=Ys,g=Fe(e)}}let _=Date.now();for(;h===Ys;)if(await ee(),await go(m),Date.now()-_>=p)throw Ie(g,Pe(f,`Timeout of '${p}' milliseconds exceeded waiting for callback value to match expectations`));return h}var Zs={assert:{output:Us},check:{output:Ks},assertWrap:{output:qs},checkWrap:{output:Js},waitUntil:{output:Xs}},Qs={isPropertyKey(e,t){if(typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`)throw new O(`'${y(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e==`string`||typeof e==`number`||typeof e==`symbol`)throw new O(`'${y(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e==`object`||typeof e==`function`))throw new O(`'${y(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!=`object`&&typeof e!=`function`)throw new O(`'${y(e)}' is not a Primitive.`,t)}},$s={assert:Qs,check:{isNotPrimitive(e){return e!==null&&(typeof e==`object`||typeof e==`function`)},isNotPropertyKey(e){return typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`},isPrimitive(e){return e===null||typeof e!=`object`&&typeof e!=`function`},isPropertyKey(e){return typeof e==`string`||typeof e==`number`||typeof e==`symbol`}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!=`object`&&typeof e!=`function`)throw new O(`'${y(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e==`string`||typeof e==`number`||typeof e==`symbol`)throw new O(`'${y(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e==`object`||typeof e==`function`))throw new O(`'${y(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`)throw new O(`'${y(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e==`object`||typeof e==`function`))return e},isNotPropertyKey(e){if(typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`)return e},isPrimitive(e){if(e===null||typeof e!=`object`&&typeof e!=`function`)return e},isPropertyKey(e){if(typeof e==`string`||typeof e==`number`||typeof e==`symbol`)return e}},waitUntil:{isNotPrimitive:k(Qs.isNotPrimitive),isNotPropertyKey:k(Qs.isNotPropertyKey),isPrimitive:k(Qs.isPrimitive),isPropertyKey:k(Qs.isPropertyKey)}},ec={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`))throw new O(`'${y(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`)throw new O(`'${y(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new O(`'${y(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new O(`'${y(e)}' is a Promise.`,t)}},tc={assert:ec,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`)},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`))throw new O(`'${y(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`)throw new O(`'${y(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new O(`'${y(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new O(`'${y(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`)return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:k(ec.isPromiseLike,!0),isNotPromiseLike:k(ec.isNotPromiseLike,!0),isPromise:k(ec.isPromise,!0),isNotPromise:k(ec.isNotPromise,!0)}},nc={matches(e,t,n){if(!t.test(e))throw new O(`'${e}' does not match ${t}`,n)},mismatches(e,t,n){if(t.test(e))throw new O(`'${e}' matches ${t}`,n)}},rc={assert:nc,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,n){if(!t.test(e))throw new O(`'${e}' does not match ${t}`,n);return e},mismatches(e,t,n){if(t.test(e))throw new O(`'${e}' matches ${t}`,n);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:k(nc.matches,!0),mismatches:k(nc.mismatches,!0)}},ic={isArray(e,t){if(!Array.isArray(e))throw new O(`'${y(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!=`bigint`)throw new O(`'${y(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!=`boolean`)throw new O(`'${y(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!=`function`)throw new O(`'${y(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new O(`'${y(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!=`number`||isNaN(e))throw new O(`'${y(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!=`object`||!e)throw new O(`'${y(e)}' is not a non-null object.`,t)},isPlainObject(e,t){let n=Object.getPrototypeOf(e);if(typeof e!=`object`||!e||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new O(`'${y(e)}' is not a plain object.`,t)},isString(e,t){if(typeof e!=`string`)throw new O(`'${y(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!=`symbol`)throw new O(`'${y(e)}' is not a symbol.`,t)},isUndefined(e,t){if(e!==void 0)throw new O(`'${y(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new O(`'${y(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e==`bigint`)throw new O(`'${y(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e==`boolean`)throw new O(`'${y(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e==`function`)throw new O(`'${y(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new O(`'${y(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e==`number`&&!isNaN(e))throw new O(`'${y(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e==`object`&&e)throw new O(`'${y(e)}' is a non-null object.`,t)},isNotPlainObject(e,t){let n=Object.getPrototypeOf(e);if(!(typeof e!=`object`||!e||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new O(`'${y(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e==`string`)throw new O(`'${y(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e==`symbol`)throw new O(`'${y(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(e===void 0)throw new O(`'${y(e)}' is a undefined.`,t)}},ac={assert:ic,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e==`bigint`},isBoolean(e){return typeof e==`boolean`},isFunction(e){return typeof e==`function`},isNull(e){return e===null},isNumber(e){return typeof e==`number`&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e==`object`&&!!e},isPlainObject(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e==`string`},isSymbol(e){return typeof e==`symbol`},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!=`bigint`},isNotBoolean(e){return typeof e!=`boolean`},isNotFunction(e){return typeof e!=`function`},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!=`number`||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!=`object`||!e},isNotPlainObject(e){if(typeof e!=`object`||!e)return!0;let t=Object.getPrototypeOf(e);return!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!=`string`},isNotSymbol(e){return typeof e!=`symbol`},isNotUndefined(e){return e!==void 0}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new O(`'${y(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!=`bigint`)throw new O(`'${y(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!=`boolean`)throw new O(`'${y(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!=`function`)throw new O(`'${y(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new O(`'${y(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!=`number`||isNaN(e))throw new O(`'${y(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!=`object`||!e)throw new O(`'${y(e)}' is not a non-null object.`,t);return e},isPlainObject(e,t){let n=Object.getPrototypeOf(e);if(typeof e!=`object`||!e||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new O(`'${y(e)}' is not a plain object.`,t);return e},isString(e,t){if(typeof e!=`string`)throw new O(`'${y(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!=`symbol`)throw new O(`'${y(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(e!==void 0)throw new O(`'${y(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new O(`'${y(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e==`bigint`)throw new O(`'${y(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e==`boolean`)throw new O(`'${y(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e==`function`)throw new O(`'${y(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new O(`'${y(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e==`number`&&!isNaN(e))throw new O(`'${y(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e==`object`&&e)throw new O(`'${y(e)}' is a non-null object.`,t);return e},isNotPlainObject(e,t){let n=Object.getPrototypeOf(e);if(typeof e!=`object`||!e||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new O(`'${y(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e==`string`)throw new O(`'${y(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e==`symbol`)throw new O(`'${y(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(e===void 0)throw new O(`'${y(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e==`bigint`)return e},isBoolean(e){if(typeof e==`boolean`)return e},isFunction(e){if(typeof e==`function`)return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e==`number`&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e==`object`&&e)return e},isPlainObject(e){if(typeof e!=`object`||!e)return;let t=Object.getPrototypeOf(e);if((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e==`string`)return e},isSymbol(e){if(typeof e==`symbol`)return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!=`bigint`)return e},isNotBoolean(e){if(typeof e!=`boolean`)return e},isNotFunction(e){if(typeof e!=`function`)return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e==`number`&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!=`object`||!e)return e},isNotPlainObject(e){if(typeof e!=`object`||!e)return e;let t=Object.getPrototypeOf(e);if(!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!=`string`)return e},isNotSymbol(e){if(typeof e!=`symbol`)return e}},waitUntil:{isArray:k(ic.isArray),isBigInt:k(ic.isBigInt),isBoolean:k(ic.isBoolean),isFunction:k(ic.isFunction),isNull:k(ic.isNull),isNumber:k(ic.isNumber),isObject:k(ic.isObject),isPlainObject:k(ic.isPlainObject),isString:k(ic.isString),isSymbol:k(ic.isSymbol),isUndefined:k(ic.isUndefined),isNotArray:k(ic.isNotArray),isNotBigInt:k(ic.isNotBigInt),isNotBoolean:k(ic.isNotBoolean),isNotFunction:k(ic.isNotFunction),isNotNull:k(ic.isNotNull),isNotNumber:k(ic.isNotNumber),isNotObject:k(ic.isNotObject),isNotPlainObject:k(ic.isNotPlainObject),isNotString:k(ic.isNotString),isNotSymbol:k(ic.isNotSymbol),isNotUndefined:k(ic.isNotUndefined)}},oc;(function(e){e.Assert=`assert`,e.AssertWrap=`assert-wrap`,e.CheckWrap=`check-wrap`,e.Check=`check`})(oc||={});function sc(e,t,n){lc(e,{noError:`No error.`,notInstance:`'${y(e)}' is not an error instance.`},t,n)}function cc(e,t,n){lc(e,{noError:`No Error was thrown.`,notInstance:`Thrown value '${y(e)}' is not an error instance.`},t,n)}function lc(e,t,n,r){if(!e)throw new O(t.noError,r);if(!(e instanceof Error))throw new O(t.notInstance,r);if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){let t=e.constructor.name;throw new O(`Error constructor '${t}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){let t=Ne(e);if(typeof n.matchMessage==`string`){if(!Co(t,n.matchMessage))throw new O(`Error message\n\n'${t}'\n\ndoes not contain\n\n'${n.matchMessage}'.`,r)}else if(!t.match(n.matchMessage))throw new O(`Error message\n\n'${t}'\n\ndoes not match RegExp\n\n'${n.matchMessage}'.`,r)}}function uc(e,t){if(!e||!(e instanceof Error)||t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){let n=Ne(e);if(typeof t.matchMessage==`string`){if(!Co(n,t.matchMessage))return!1}else if(!n.match(t.matchMessage))return!1}return!0}function dc(e,t,n,r){let i;try{let a=t instanceof Promise?t:t();if(a instanceof Promise)return new Promise(async(t,o)=>{try{await a}catch(e){i=Fe(e)}try{cc(i,n,r),e===oc.Assert?t():e===oc.Check?t(!0):t(i)}catch(n){e===oc.CheckWrap?t(void 0):e===oc.Check?t(!1):o(Fe(n))}})}catch(e){i=Fe(e)}try{return cc(i,n,r),e===oc.Check?!0:e===oc.Assert?void 0:i}catch(t){if(e===oc.CheckWrap)return;if(e===oc.Check)return!1;throw t}}function fc(e,t,n){return dc(oc.Assert,e,t,n)}function pc(e,t){return dc(oc.Check,e,t)}function mc(e,t,n){return dc(oc.AssertWrap,e,t,n)}function hc(e,t,n){return dc(oc.CheckWrap,e,t,n)}var gc=k(sc);function _c(e,t,n,r){let i=typeof e==`function`||e instanceof Promise?void 0:e,a=i?t:e,o=typeof n==`object`?r:n,s=typeof n==`object`?n:t;if(typeof a!=`function`)throw TypeError(`Callback is not a function, got '${y(a)}'`);return gc(i,async()=>{try{await a();return}catch(e){return Fe(e)}},s,o)}var vc={assert:{throws:fc,isError:sc},check:{throws:pc,isError(e,t){return uc(e,t)}},assertWrap:{throws:mc,isError(e,t,n){return lc(e,{noError:`No error.`,notInstance:`'${y(e)}' is not an error instance.`},t,n),e}},checkWrap:{throws:hc,isError(e,t){if(uc(e,t))return e}},waitUntil:{throws:_c,isError:k(sc)}},yc=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,bc={isUuid(e,t){if(!String(e).match(yc))throw new O(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(yc))throw new O(`'${String(e)}' is a UUID.`,t)}},xc={assert:bc,check:{isUuid(e){return!!String(e).match(yc)},isNotUuid(e){return!String(e).match(yc)}},assertWrap:{isUuid(e,t){if(!String(e).match(yc))throw new O(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(yc))throw new O(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(yc))return e},isNotUuid(e){if(!String(e).match(yc))return e}},waitUntil:{isUuid:k(bc.isUuid),isNotUuid:k(bc.isNotUuid)}},Sc={...Rs.assert,...Ao.assert,...Io.assert,...Ho.assert,...Bo.assert,...Ds.assert,...ks.assert,...qo.assert,...Ns.assert,...Ls.assert,...Bs.assert,...Hs.assert,...Zs.assert,...$s.assert,...tc.assert,...rc.assert,...ac.assert,...xs.assert,...vc.assert,...xc.assert,...Ts.assert},Cc=[Ao,Io,Ho,Bo,Ds,ks,qo,Ns,Ls,Rs,Bs,Hs,Zs,$s,tc,rc,ac,xs,vc,xc,Ts],wc=Object.assign({},...Cc.map(e=>e.check)),A=Object.assign(function(e){return!!e},wc);function Tc(e,t,n){return Ec(e,t,n,new Set)}function Ec(e,t,n,r){if(e=Dc(e),t=Dc(t),A.isObject(e)&&A.isObject(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),!Ec(De(e).sort(),De(t).sort(),n,r))return!1;let i=!1,a=De(e).map(a=>{let o=Ec(e[a],t[a],n,r);return A.isPromise(o)&&(i=!0),o});return Oc(i,a)}else if(A.isArray(e)&&A.isArray(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),e.length!==t.length)return!1;let i=!1,a=e.map((e,a)=>{let o=Ec(e,t[a],n,r);return A.isPromise(o)&&(i=!0),o});return Oc(i,a)}else return n(e,t)}function Dc(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function Oc(e,t){return e?new Promise(async(e,n)=>{try{e((await Promise.all(t)).every(A.isTrue))}catch(e){n(Fe(e))}}):t.every(A.isTrue)}var kc=Object.assign({},...Cc.map(e=>e.assertWrap)),Ac=Object.assign(function(e,t){if(!e)throw new O(`Assertion failed.`,t);return e},kc);function jc(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}var Mc={assert:{tsType:jc},assertWrap:{tsType:void 0},check:{tsType:void 0},checkWrap:{tsType:void 0},waitUntil:{tsType:void 0}},Nc={fail:e=>{throw new O(`Failure triggered.`,e)}},Pc={...Mc.assert,...Sc,...Nc},Fc=Object.assign(function(e,t){if(!e)throw new O(`Assertion failed.`,t)},Pc),Ic=Object.assign({},...Cc.map(e=>e.checkWrap)),Lc=Object.assign(function(e){if(e)return e},Ic);function Rc(e,t){return A.hasKey(e,`entryType`)&&e.entryType===t}function zc(e,t){return e.controlType===t}var Bc;(function(e){e.Checkbox=`checkbox`,e.Color=`color`,e.Custom=`custom`,e.Dropdown=`dropdown`,e.Hidden=`hidden`,e.Number=`number`,e.Text=`text`})(Bc||={});var Vc=Symbol(`any-type`),Hc={[Bc.Checkbox]:!1,[Bc.Color]:``,[Bc.Custom]:void 0,[Bc.Dropdown]:``,[Bc.Hidden]:Vc,[Bc.Number]:0,[Bc.Text]:``};function Uc(e,t){if(!e)return[];let n=[];return Object.entries(e).forEach(([e,r])=>{if(r.controlType===Bc.Custom)return;let i=Hc[r.controlType];i!==Vc&&(typeof i!=typeof r.initValue&&n.push(Error(`Control '${e}' in page '${t}' has invalid initValue '${r.initValue}': expected initValue of type ${typeof i} because the control is of type ${r.controlType}.`)),e||n.push(Error(`'${t}' cannot have an empty control name.`)))}),n}function Wc(e,t,n){let r=t;if(e.has(r))return e.get(r);{let t=n();return A.isPromise(t)?new Promise(async(n,i)=>{try{let i=await t;e.set(r,i),n(i)}catch(e){i(Fe(e))}}):(e.set(r,t),t)}}function Gc(e,t,n){if(t in e)return e[t];{let r=n();return A.isPromise(r)?new Promise(async(n,i)=>{try{let i=await r;e[t]=i,n(i)}catch(e){i(Fe(e))}}):(e[t]=r,r)}}function Kc(e){return De(e).map(t=>[t,e[t]])}function qc(e){return Object.fromEntries(e)}function Jc(e,t,n){return e.reduce((e,r,i,a)=>{let o=t(r,i,a);return n(o,r,i,a)&&e.push(o),e},[])}function Yc(e,t,n={}){try{let n=!1,r=e.map((e,r,i)=>{let a=t(e,r,i);if(a instanceof Promise)return n=!0,a;if(a)return[a.key,a.value]}).filter(A.isTruthy);return n?new Promise(async(e,t)=>{try{e(qc(Jc(await Promise.all(r),e=>{if(e)return Array.isArray(e)?e:[e.key,e.value]},A.isTruthy)))}catch(e){t(Fe(e))}}):qc(r)}catch(e){throw Fe(e)}}async function Xc(e,t){return await e.reduce(async(e,n,r,i)=>{let a=await e,o=await t(n,r,i);return a.push(o),a},Promise.resolve([]))}async function Zc(e,t){await Xc(e,t)}function Qc(e,t){let n=[],r=!1;for(let i=0;i<e;i++){let e=t(i);A.isPromise(e)&&(r=!0),n.push(e)}return r?Promise.all(n):n}function $c(e){return Array.isArray(e)?e:[e]}function el({min:e,max:t}){let{min:n,max:r}=Re({min:Math.floor(e),max:Math.floor(t)}),i=r-n+1,a=Math.ceil(Math.ceil(Math.log2(i))/8);if(a>65e3)throw RangeError(`Cannot create a random integer so large. ({min: ${n}, max: ${r}})`);let o=Math.floor(256**a/i)*i,s=new Uint8Array(a),c;do crypto.getRandomValues(s),c=s.reduce((e,t,n)=>e+t*256**n,0);while(c>=o);return n+c%i}var tl=`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`.split(``);function nl(e=16){let t=``;for(let n=0;n<e;n++){let e=el({min:0,max:tl.length-1});t+=tl[e]}return t}function rl(e){return A.isLengthAtLeast(e,1)?e.length===1?e[0]:Error(e.map(e=>Ne(e).trim()).join(`
`)):Error()}function il(e,t={}){try{let n=e();return n instanceof Promise?n.catch(e=>t.handleError?t.handleError(e):A.hasKey(t,`fallbackValue`)?t.fallbackValue:Fe(e)):n}catch(e){return t.handleError?t.handleError(e):A.hasKey(t,`fallbackValue`)?t.fallbackValue:Fe(e)}}function al(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error(`Failed to JSON copy for:`,e),Ie(t,`Failed JSON copy`)}}var ol;(function(e){e.Standard=`stdout`,e.Error=`stderr`})(ol||={});var sl;(function(e){e.Bold=`bold`,e.Debug=`debug`,e.Error=`error`,e.Faint=`faint`,e.Info=`info`,e.Mutate=`mutate`,e.NormalWeight=`normalWeight`,e.Plain=`plain`,e.Reset=`reset`,e.Success=`success`,e.Warning=`warning`})(sl||={});async function cl(){return await xe({async[ye.Node](){let e=(await r(async()=>{let{default:e}=await import(`./ansi-styles-BNQ5W5ta.js`);return{default:e}},[])).default;return{[sl.Bold]:e.bold.open,[sl.Debug]:e.blueBright.open,[sl.Error]:e.red.open,[sl.Faint]:e.gray.open,[sl.Info]:e.cyan.open,[sl.Mutate]:e.magenta.open,[sl.NormalWeight]:`\x1B[22m`,[sl.Plain]:``,[sl.Reset]:e.reset.open,[sl.Success]:e.green.open,[sl.Warning]:e.yellow.open}},[ye.Web](){return Promise.resolve({[sl.Bold]:`font-weight: bold`,[sl.Debug]:`color: blue`,[sl.Error]:`color: red`,[sl.Faint]:`color: grey`,[sl.Info]:`color: teal`,[sl.Mutate]:`color: magenta`,[sl.NormalWeight]:``,[sl.Plain]:``,[sl.Reset]:``,[sl.Success]:`color: green`,[sl.Warning]:`color: orange`})}})}var ll=await cl(),ul={[sl.Bold]:{colors:[ll.bold],logType:ol.Standard},[sl.Debug]:{colors:[ll.debug],logType:ol.Standard},[sl.Faint]:{colors:[ll.faint],logType:ol.Standard},[sl.Info]:{colors:[ll.info],logType:ol.Standard},[sl.Mutate]:{colors:[ll.mutate,ll.bold],logType:ol.Standard},[sl.NormalWeight]:{colors:[ll.normalWeight],logType:ol.Standard},[sl.Plain]:{colors:[],logType:ol.Standard},[sl.Reset]:{colors:[ll.reset],logType:ol.Standard},[sl.Success]:{colors:[ll.success,ll.bold],logType:ol.Standard},[sl.Error]:{colors:[ll.error,ll.bold],logType:ol.Error},[sl.Warning]:{colors:[ll.warning],logType:ol.Error}};function dl({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function fl({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function pl(e,t){try{let n=!1,r=Kc(e).map(([r,i])=>{let a=t(r,i,e);if(a instanceof Promise)return n=!0,a;if(a)return[a.key,a.value]}).filter(A.isTruthy);return n?new Promise(async(e,t)=>{try{e(qc(Jc(await Promise.all(r),e=>{if(e)return Array.isArray(e)?e:[e.key,e.value]},A.isTruthy)))}catch(e){t(Fe(e))}}):qc(r)}catch(e){throw Fe(e)}}function ml(e,t){return pl(e,(n,r)=>{let i=r,a=t(r,e);return a instanceof Promise?a.then(e=>({key:i,value:e})):{key:i,value:a}})}function hl(e,...t){let n={...e};return t.forEach(e=>{e&&Kc(e).forEach(([e,t])=>{t!=null&&(n[e]=t)})}),n}function gl(e,t){return e.match(t)??[]}function _l(e){return vl({value:e,suffix:`px`})}function vl({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function yl({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function bl(){return await xe({async[ye.Node](){let{inspect:e}=await r(async()=>{let{inspect:e}=await import(`node:util`);return{inspect:e}},[]);return({args:t,colorKey:n,options:r})=>{let i=t.map(t=>typeof t==`string`?t:e(t));return{text:[r.omitColors?``:r.colorConfig[n].colors.join(``),i.join(`
`),r.omitColors?``:r.colorConfig[sl.Reset].colors.join(``)].join(``),css:void 0}}},[ye.Web](){return({args:e,colorKey:t,options:n})=>{let r=n.omitColors?void 0:Jc(n.colorConfig[t].colors,e=>yl({value:e,suffix:`;`}),A.isTruthy).join(`; `);return{text:[e.map(e=>typeof e==`string`?e:e instanceof Error?Ne(e):y(e)).join(`
`),n.omitColors?``:n.colorConfig[sl.Reset].colors.join(``)].join(``),css:r}}}})}var xl=await bl(),Sl={colorConfig:ul,omitColors:!1},Cl=wl({[ol.Error](){},[ol.Standard](){}});function wl(e,t){let n=hl(Sl,t);function r(t){e[n.colorConfig[t.colorKey].logType](xl({...t,options:n}))}let i=ml(sl,e=>(...t)=>r({args:t,colorKey:e}));return{...i,if(e){return e?i:Cl}}}var Tl=wl(x(ye.Node)?{[ol.Error]({text:e}){process.stderr.write(e+`
`)},[ol.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[ol.Error]({text:e,css:t}){console.error(dl({value:e,prefix:`%c`}),t)},[ol.Standard]({text:e,css:t}){console.log(dl({value:e,prefix:`%c`}),t)}});function El(e,{digits:t}){if(t==null)return e;let n=10**t,r=e*n;return Number((Math.round(r)/n).toFixed(t))}function Dl({searchIn:e,searchFor:t,caseSensitive:n,includeLength:r}){let i=yo(xo(t,{caseSensitive:n}),`g`),a=[],o=[];return e.replace(i,(...n)=>{let r=n[n.length-2];if(typeof r!=`number`)throw TypeError(`Match index "${r}" is not a number. Searching for "${t}" in "${e}".`);let i=n[0];if(typeof i!=`string`)throw TypeError(`regExpMatch should've been a string but was ${typeof i}!`);o.push({index:r,length:i.length}),a.push(r);let s=n[0];if(typeof s!=`string`)throw TypeError(`Original match when searching for "${t}" in "${e}" at index ${r} is not a string.`);return s}),r?o:a}function Ol(e,t,{caseSensitive:n}){let r=Dl({searchIn:e,searchFor:t,caseSensitive:n,includeLength:!0}),i=xo(t,{caseSensitive:n});return e.split(i).reduce((t,n,i)=>{let a=r[i],o=t.concat(n);if(a){let t=e.slice(a.index,a.index+a.length);return o.concat(t)}else return o},[])}function kl(e,t){return e.split(t)}function Al(e,t){let{min:n,max:r}=Re(t);if(t.takeOverflow){let t=r-n+1,i=(e-n)%t;return i<0?n+t+i:n+i}else return e>r?n:e<n?r:e}function jl(e){return e}function Ml(e,t){let n=!1,r=De(e).reduce((r,i)=>{let a=t(i,e[i],e);return a instanceof Promise&&(n=!0),r[i]=a,r},{});return n?new Promise(async(e,t)=>{try{await Promise.all(De(r).map(async e=>{r[e]=await r[e]})),e(r)}catch(e){t(Fe(e))}}):r}function Nl(e,t){return qc(Kc(e).filter(([n,r])=>t(n,r,e)))}function Pl(e,t){return Nl(e,e=>t.includes(e))}function Fl(e){return De(e).map(t=>e[t])}function Il(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g,` `).replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g,` `)}var Ll;(function(e){e.Upper=`upper`,e.Lower=`lower`})(Ll||={});var Rl={firstLetterCase:Ll.Lower};function zl(e,t){if(!e.length)return``;let n=e[0];return(t===Ll.Upper?n.toUpperCase():n.toLowerCase())+e.slice(1)}function Bl(e,t={}){let n=e.toLowerCase();return n.length?zl(n.replace(/^-+/,``).replace(/-{2,}/g,`-`).replace(/-(?:.|$)/g,e=>{let t=e[1];return t?t.toUpperCase():``}),hl(Rl,t).firstLetterCase):``}function Vl(e,t=`and`){if(e.length<2)return e.join(``);let n=e.length>2?`, `:` `;return`${e.slice(0,-1).join(n)}${n}${t} ${e[e.length-1]}`}function Hl({value:e,wrapper:t}){return dl({value:vl({value:e,suffix:t}),prefix:t})}function Ul(){function e(e){return class extends CustomEvent{static type=e;constructor(t){super(e,t)}}}return e}function Wl(e,t){let n=t??Event;return class extends n{static type=e;constructor(t){super(e,t)}}}var Gl=class{listeners={};universalListeners=new Map;getListenerCount(){return Fl(this.listeners).map(e=>e.size||0).reduce((e,t)=>e+t,0)+this.universalListeners.size}listenToAll(e,t={}){let n=()=>this.universalListeners.delete(e)||!1;function r(r,i){t.once&&n(),e(r,i)}return this.universalListeners.set(e,{listener:r,removeListener:n}),n}removeUniversalListener(e){return!!this.universalListeners.get(e)?.removeListener()}listen(e,t,n={}){let r=A.isString(e)?e:e.type,i=()=>this.listeners[r]?.delete(t)||!1;function a(e,r){n.once&&i(),t(e,r)}return Gc(this.listeners,r,()=>new Map).set(t,{listener:a,removeListener:i}),i}removeListener(e,t){let n=A.isString(e)?e:e.type,r=this.listeners[n];if(!r)return!1;let i=r.get(t);return i?i.removeListener():!1}dispatch(e){let t=this.listeners[e.type];e.target??Object.defineProperty(e,`target`,{writable:!1,value:this});let n=t?.size||0;return t?.forEach(t=>{t.listener(e,t.removeListener)}),this.universalListeners.forEach(t=>{t.listener(e,t.removeListener)}),n+this.universalListeners.size}removeAllListeners(){let e=Fl(this.listeners).reduce((e,t)=>{let n=t.size||0;return t.clear(),e+n},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),e}destroy(){this.removeAllListeners()}},Kl=class extends Gl{};function ql(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function Jl(e,t,n){return ql(globalThis,e,t,n)}function Yl(e,t){let n=Xl(e.title);return e.parent?[...Yl(e.parent,!1),Xl(e.parent.title)].concat(t?[n]:[]):t?[n]:[]}function Xl(e){return Il(e).toLowerCase().replaceAll(/\s/g,`-`)}function Zl({searchFor:e,searchIn:t}){return e.every((e,n)=>t[n]===e)}var Ql=/[/?#&=]/;function $l(e){let t=e.match(Ql);return e.trim()?Xl(e)?t?Error(`Book page title has invalid character '${t[0]}'.`):void 0:Error(`Book page title resolved to empty breadcrumb.`):Error(`Cannot define an element-book page with an empty title.`)}var eu={[a.ElementExample]:()=>[],[a.Page]:e=>[$l(e.title),...Uc(e.controls,e.title)].filter(A.isTruthy),[a.Root]:()=>[]},tu=`_isBookTreeNode`,nu=new Map;function ru(e){return nu.get(e)}function iu(e,t){Wc(nu,e,()=>t)}function au(e,t){return ou(e)&&e.entry.entryType===t}function ou(e){return!!(A.hasKeys(e,[`_isBookTreeNode`,`entry`])&&e._isBookTreeNode)}function su(){return{[tu]:!0,entry:{entryType:a.Root,title:``,parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:``,fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function cu({entries:e,debug:t}){let n=ru(e);if(n)return n;let r=su();e.forEach(e=>uu({tree:r,newEntry:e,debug:t,manuallyAdded:!0}));let i={tree:r,flattenedNodes:fu(r)};return iu(e,i),t&&console.info(`element-book tree:`,r),i}function lu(e,t,n){if(!t.parent)return e;let r=du(t,e);if(r)return r;n&&console.info(`parent of ${t.title} not found in tree; adding it now.`),uu({tree:e,newEntry:t.parent,debug:n,manuallyAdded:!1});let i=du(t,e);if(!i)throw Error(`Failed to find node despite having just added it: ${Yl(t,!1).join(` > `)}`);return i}function uu({tree:e,newEntry:t,debug:n,manuallyAdded:r}){let i=eu[t.entryType](t);t.errors.push(...i);let o=lu(e,t,n),s=Xl(t.title),c=o.children[s];if(c){if(r){if(c.manuallyAdded){c.entry.errors.push(Error(`Cannot create duplicate '${s}'${o.urlBreadcrumb?` in parent '${o.urlBreadcrumb}'.`:``}`));return}c.manuallyAdded=!0}return}let l={[tu]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...o.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:r};o.children[s]=l,Rc(t,a.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(t=>uu({tree:e,newEntry:t,debug:n,manuallyAdded:r}))}function du(e,t){let n=ou(e)?e.fullUrlBreadcrumbs.slice(0,-1):Yl(e,!1);if(n.length)return n.reduce((e,t)=>{if(e)return e.children[t]},t)}function fu(e){return[e,...e.entry.errors.length?[]:Object.values(e.children).map(e=>fu(e))].flat()}function pu(e,t){return mu(e,[``,...t],void 0)}function mu(e,t,n){let r=t.slice(1),i=r[0];!i&&n&&(e.controls=n);let a=e.children[i||``],o=a&&mu(a,r,n);return{...e.controls,...o}}function hu(e,t,n){let r={...e};return mu(r,[``,...t],n),r}function gu(e,t){let n=t?.controls||(au(e,a.Page)?Ml(e.entry.controls,(e,t)=>t.initValue):{});return{children:Ml(e.children,(e,n)=>gu(n,t?.children?.[n.urlBreadcrumb])),controls:n}}function _u(e){let t={...e,entryType:a.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},n=new Set;return e.defineExamples&&e.defineExamples({defineExample(r){let i={...r,isVertical:t.useVerticalExamples,entryType:a.ElementExample,parent:t,descriptionParagraphs:r.descriptionParagraphs??[],errors:[n.has(r.title)&&Error(`Example title '${r.title}' in page '${e.title}' is already taken.`),$l(r.title)].filter(A.isTruthy)};n.add(r.title),t.elementExamples[Xl(i.title)]=i}}),t}var vu;(function(e){e.Search=`search`,e.Book=`book`})(vu||={});function yu(e){return e[0]===vu.Book?``:e[1]?decodeURIComponent(e[1]):``}var bu={hash:void 0,paths:[vu.Book],search:void 0},xu=new class e{static cssPropertyDefinitionSupported=!!(globalThis.CSS&&globalThis.CSS.registerProperty);registry=new Map;constructor(){let t=e.cssPropertyDefinitionSupported?globalThis.CSS.registerProperty.bind(globalThis.CSS):void 0;t&&(globalThis.CSS.registerProperty=e=>(xu.registry.set(e.name,e),t(e)))}canRegisterCssProperty(t){return e.cssPropertyDefinitionSupported&&!this.registry.has(t)}registerProperty(e){if(!this.canRegisterCssProperty(e.name))return!1;try{return globalThis.CSS.registerProperty(e),!0}catch(t){throw Ie(t,`Failed to define CSS var: ${y(e,4)}\n\n`)}}},Su=globalThis,Cu=Su.ShadowRoot&&(Su.ShadyCSS===void 0||Su.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,wu=Symbol(),Tu=new WeakMap,Eu=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==wu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Cu&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Tu.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Tu.set(t,e))}return e}toString(){return this.cssText}},Du=e=>new Eu(typeof e==`string`?e:e+``,void 0,wu),Ou=(e,...t)=>new Eu(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,wu),ku=(e,t)=>{if(Cu)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=Su.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},Au=Cu?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return Du(t)})(e):e,{is:ju,defineProperty:Mu,getOwnPropertyDescriptor:Nu,getOwnPropertyNames:Pu,getOwnPropertySymbols:Fu,getPrototypeOf:Iu}=Object,Lu=globalThis,Ru=Lu.trustedTypes,zu=Ru?Ru.emptyScript:``,Bu=Lu.reactiveElementPolyfillSupport,Vu=(e,t)=>e,Hu={toAttribute(e,t){switch(t){case Boolean:e=e?zu:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Uu=(e,t)=>!ju(e,t),Wu={attribute:!0,type:String,converter:Hu,reflect:!1,useDefault:!1,hasChanged:Uu};Symbol.metadata??=Symbol(`metadata`),Lu.litPropertyMetadata??=new WeakMap;var Gu=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Wu){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Mu(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Nu(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Wu}static _$Ei(){if(this.hasOwnProperty(Vu(`elementProperties`)))return;let e=Iu(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Vu(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Vu(`properties`))){let e=this.properties,t=[...Pu(e),...Fu(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(Au(e))}else e!==void 0&&t.push(Au(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ku(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Hu:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Hu:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Uu)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Gu.elementStyles=[],Gu.shadowRootOptions={mode:`open`},Gu[Vu(`elementProperties`)]=new Map,Gu[Vu(`finalized`)]=new Map,Bu?.({ReactiveElement:Gu}),(Lu.reactiveElementVersions??=[]).push(`2.1.2`);var Ku=globalThis,qu=e=>e,Ju=Ku.trustedTypes,Yu=Ju?Ju.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Xu=`$lit$`,Zu=`lit$${Math.random().toFixed(9).slice(2)}$`,Qu=`?`+Zu,$u=`<${Qu}>`,ed=document,td=()=>ed.createComment(``),nd=e=>e===null||typeof e!=`object`&&typeof e!=`function`,rd=Array.isArray,id=e=>rd(e)||typeof e?.[Symbol.iterator]==`function`,ad=`[ 	
\f\r]`,od=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,sd=/-->/g,cd=/>/g,ld=RegExp(`>|${ad}(?:([^\\s"'>=/]+)(${ad}*=${ad}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ud=/'/g,dd=/"/g,fd=/^(?:script|style|textarea|title)$/i,pd=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),md=Symbol.for(`lit-noChange`),j=Symbol.for(`lit-nothing`),hd=new WeakMap,gd=ed.createTreeWalker(ed,129);function _d(e,t){if(!rd(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Yu===void 0?t:Yu.createHTML(t)}var vd=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=od;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===od?c[1]===`!--`?o=sd:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=ld):(fd.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=ld):o=cd:o===ld?c[0]===`>`?(o=i??od,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?ld:c[3]===`"`?dd:ud):o===dd||o===ud?o=ld:o===sd||o===cd?o=od:(o=ld,i=void 0);let d=o===ld&&e[t+1].startsWith(`/>`)?` `:``;a+=o===od?n+$u:l>=0?(r.push(s),n.slice(0,l)+Xu+n.slice(l)+Zu+d):n+Zu+(l===-2?t:d)}return[_d(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},yd=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=vd(t,n);if(this.el=e.createElement(l,r),gd.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=gd.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Xu)){let t=u[o++],n=i.getAttribute(e).split(Zu),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?wd:r[1]===`?`?Td:r[1]===`@`?Ed:Cd}),i.removeAttribute(e)}else e.startsWith(Zu)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(fd.test(i.tagName)){let e=i.textContent.split(Zu),t=e.length-1;if(t>0){i.textContent=Ju?Ju.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],td()),gd.nextNode(),c.push({type:2,index:++a});i.append(e[t],td())}}}else if(i.nodeType===8)if(i.data===Qu)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Zu,e+1))!==-1;)c.push({type:7,index:a}),e+=Zu.length-1}a++}}static createElement(e,t){let n=ed.createElement(`template`);return n.innerHTML=e,n}};function bd(e,t,n=e,r){if(t===md)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=nd(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=bd(e,i._$AS(e,t.values),i,r)),t}var xd=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??ed).importNode(t,!0);gd.currentNode=r;let i=gd.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Sd(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Dd(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=gd.nextNode(),a++)}return gd.currentNode=ed,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Sd=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=bd(this,e,t),nd(e)?e===j||e==null||e===``?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==md&&this._(e):e._$litType$===void 0?e.nodeType===void 0?id(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==j&&nd(this._$AH)?this._$AA.nextSibling.data=e:this.T(ed.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=yd.createElement(_d(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new xd(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=hd.get(e.strings);return t===void 0&&hd.set(e.strings,t=new yd(e)),t}k(t){rd(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(td()),this.O(td()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=qu(e).nextSibling;qu(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Cd=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=j}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=bd(this,e,t,0),a=!nd(e)||e!==this._$AH&&e!==md,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=bd(this,r[n+o],t,o),s===md&&(s=this._$AH[o]),a||=!nd(s)||s!==this._$AH[o],s===j?e=j:e!==j&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},wd=class extends Cd{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}},Td=class extends Cd{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}},Ed=class extends Cd{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=bd(this,e,t,0)??j)===md)return;let n=this._$AH,r=e===j&&n!==j||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==j&&(n===j||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Dd=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){bd(this,e)}},Od={M:Xu,P:Zu,A:Qu,C:1,L:vd,R:xd,D:id,V:bd,I:Sd,H:Cd,N:Td,U:Ed,B:wd,F:Dd},kd=Ku.litHtmlPolyfillSupport;kd?.(yd,Sd),(Ku.litHtmlVersions??=[]).push(`3.3.2`);var Ad=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Sd(t.insertBefore(td(),e),e,void 0,n??{})}return i._$AI(e),i},jd=globalThis,Md=class extends Gu{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ad(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return md}};Md._$litElement$=!0,Md.finalized=!0,jd.litElementHydrateSupport?.({LitElement:Md});var Nd=jd.litElementPolyfillSupport;Nd?.({LitElement:Md}),(jd.litElementVersions??=[]).push(`4.2.2`);function Pd({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}var Fd;(function(e){e.Url=`<url>`,e.TransformList=`<transform-list>`,e.TransformFunction=`<transform-function>`,e.Time=`<time>`,e.String=`<string>`,e.Resolution=`<resolution>`,e.Percentage=`<percentage>`,e.Number=`<number>`,e.LengthPercentage=`<length-percentage>`,e.Length=`<length>`,e.Integer=`<integer>`,e.Image=`<image>`,e.CustomIdent=`<custom-ident>`,e.Color=`<color>`,e.Angle=`<angle>`,e.Any=`*`})(Fd||={});var Id;(function(e){e.Space=`+`,e.Comma=`#`})(Id||={});function Ld(e){return Ml(e,(e,t)=>{Rd(e);let n=t,r=A.isObject(n)&&!(n instanceof Eu)&&A.lacksKey(n,`name`),i=A.isString(n)||A.isNumber(n)||n instanceof Eu?String(n):String(n.default),a=A.isString(n)||A.isNumber(n)||n instanceof Eu?String(n):String(`initialValue`in n&&n.initialValue||n.default),o=Du(dl({value:e.replace(/^-+/,``),prefix:`--`})),s={name:o,value:Ou`var(${o}, ${Du(i)})`,syntax:A.isString(n)||A.isNumber(n)||n instanceof Eu?Fd.Any:zd(`syntax`in n?n.syntax:void 0),default:i},c=String(s.name);if(!a)throw Error(`Initial value for CSS var ${c} cannot be empty.`);return r&&xu.registerProperty({inherits:!0,name:c,initialValue:a,syntax:s.syntax})&&globalThis.document?.documentElement&&Pd({forCssVar:s,onElement:globalThis.document.documentElement,toValue:i}),s})}function Rd(e){try{if(!A.isString(e))throw TypeError(`Must be string.`);if(!e.includes(`-`))throw Error(`Must have at least one dash (-).`);if(e.toLowerCase()!==e)throw Error(`Must be lowercase.`)}catch(t){throw Error(Pe(`Invalid CSS var name.`,t,`Got '${y(e)}'`))}}function zd(e){return e?A.isString(e)?e:e.union?e.union.map(e=>zd(e)).join(` | `):e.list?`${zd(e.list.values)}${e.list.separator}`:e.raw:Fd.Any}var Bd=Ld({"element-book-nav-hover-background-color":`magenta`,"element-book-nav-hover-foreground-color":`magenta`,"element-book-nav-active-background-color":`magenta`,"element-book-nav-active-foreground-color":`magenta`,"element-book-nav-selected-background-color":`magenta`,"element-book-nav-selected-foreground-color":`magenta`,"element-book-accent-icon-color":`magenta`,"element-book-page-background-color":`magenta`,"element-book-page-background-faint-level-1-color":`magenta`,"element-book-page-background-faint-level-2-color":`magenta`,"element-book-page-foreground-color":`magenta`,"element-book-page-foreground-faint-level-1-color":`magenta`,"element-book-page-foreground-faint-level-2-color":`magenta`}),Vd={nav:{hover:{background:Bd[`element-book-nav-hover-background-color`],foreground:Bd[`element-book-nav-hover-foreground-color`]},active:{background:Bd[`element-book-nav-active-background-color`],foreground:Bd[`element-book-nav-active-foreground-color`]},selected:{background:Bd[`element-book-nav-selected-background-color`],foreground:Bd[`element-book-nav-selected-foreground-color`]}},accent:{icon:Bd[`element-book-accent-icon-color`]},page:{background:Bd[`element-book-page-background-color`],backgroundFaint1:Bd[`element-book-page-background-faint-level-1-color`],backgroundFaint2:Bd[`element-book-page-background-faint-level-2-color`],foreground:Bd[`element-book-page-foreground-color`],foregroundFaint1:Bd[`element-book-page-foreground-faint-level-1-color`],foregroundFaint2:Bd[`element-book-page-foreground-faint-level-2-color`]}};function Hd(e,t){Gd(e,t,Vd)}function Ud(e){return A.hasKey(e,`_$cssResult$`)}function Wd(e){return A.hasKeys(e,[`name`,`value`,`default`])&&A.isString(e.default)&&Ud(e.name)&&Ud(e.value)}function Gd(e,t,n){Object.entries(t).forEach(([t,r])=>{let i=n[t];if(!i)throw Error(`no nestedCssVar at key '${t}'`);if(Ud(r)){if(!Wd(i))throw Error(`got a CSS result at '${t}' but no CSS var`);Pd({forCssVar:i,onElement:e,toValue:String(r)})}else{if(Wd(i))throw Error(`got no CSS result at '${t}' but did find a CSS var`);Gd(e,r,i)}})}function Kd(e,t){let n=e.length,r,i,a=!1,o=!1;Array.isArray(e[0])?r=e:(r=[e],n=r.length,a=!0),Array.isArray(t[0])?i=t:(i=t.length>0?t.map(e=>[e]):[[]],o=!0);let s=i[0].length,c=i[0].map((e,t)=>i.map(e=>e[t])),l=r.map(e=>c.map(t=>{let n=0;if(!Array.isArray(e)){for(let r of t)n+=e*r;return n}for(let r=0;r<e.length;r++)n+=e[r]*(t[r]||0);return n}));return n===1&&a&&(l=l[0]),s===1&&o?n===1&&a?l[0]:l.map(e=>e[0]):l}function qd(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Jd(e,t,n=[0,0,0]){let r=qd(e,t[0]),i=qd(e,t[1]),a=qd(e,t[2]);return n[0]=r,n[1]=i,n[2]=a,n}function Yd(e){return Xd(e)===`string`}function Xd(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||``).toLowerCase()}function Zd(e,{precision:t=16,unit:n}){return Qd(e)?`none`:(e=+ef(e,t),e+(n??``))}function Qd(e){return e===null}function $d(e){return Qd(e)?0:e}function ef(e,t){if(e===0)return 0;let n=~~e,r=0;n&&t&&(r=~~Math.log10(Math.abs(n))+1);let i=10**(t-r);return Math.floor(e*i+.5)/i}function tf(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function nf(e,t,n){return(n-e)/(t-e)}function rf(e,t,n){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(n)||n===null?n:tf(t[0],t[1],nf(e[0],e[1],n))}function af(e,t,n){return Math.max(Math.min(n,t),e)}function of(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function sf(e,t){return of(Math.abs(e)**t,e)}function cf(e,t){return t===0?0:e/t}function lf(e,t,n=0,r=e.length){for(;n<r;){let i=n+r>>1;e[i]<t?n=i+1:r=i}return n}function uf(e,t){if(e instanceof t)return!0;let n=t.name;for(;e;){let t=Object.getPrototypeOf(e),r=t?.constructor?.name;if(r===n)return!0;if(!r||r===`Object`)return!1;e=t}return!1}var df=Object.freeze({__proto__:null,bisectLeft:lf,clamp:af,copySign:of,interpolate:tf,interpolateInv:nf,isInstance:uf,isNone:Qd,isString:Yd,mapRange:rf,multiplyMatrices:Kd,multiply_v3_m3x3:Jd,serializeNumber:Zd,skipNone:$d,spow:sf,toPrecision:ef,type:Xd,zdiv:cf}),ff=new class{add(e,t,n){if(typeof arguments[0]!=`string`){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(e){this[e]=this[e]||[],t&&this[e][n?`unshift`:`push`](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(e){e.call(t&&t.context?t.context:t,t)})}},pf={gamut_mapping:`css`,precision:5,deltaE:`76`,verbose:`production`?.toLowerCase()!==`test`,warn:function(e){this.verbose&&globalThis?.console?.warn?.(e)}},mf=class{type;coordMeta;coordRange;range;constructor(e,t){if(typeof e==`object`&&(this.coordMeta=e),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof e==`string`){let t=e.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!t)throw TypeError(`Cannot parse ${e} as a type definition.`);this.type=t.groups.type;let{min:n,max:r}=t.groups;(n||r)&&(this.range=[+n,+r])}}get computedRange(){return this.range?this.range:this.type===`<percentage>`?this.percentageRange():this.type===`<angle>`?[0,360]:null}get unit(){return this.type===`<percentage>`?`%`:this.type===`<angle>`?`deg`:``}resolve(e){if(this.type===`<angle>`)return e;let t=this.computedRange,n=this.coordRange;return this.type===`<percentage>`&&(n??=this.percentageRange()),rf(t,n,e)}serialize(e,t){let n=this.type===`<percentage>`?this.percentageRange(100):this.computedRange,r=this.unit;return e=rf(this.coordRange,n,e),Zd(e,{unit:r,precision:t})}toString(){let e=this.type;if(this.range){let[t=``,n=``]=this.range;e+=`[${t},${n}]`}return e}percentageRange(e=1){let t;return t=this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?[0,1]:[-1,1],[t[0]*e,t[1]*e]}static get(e,t){return uf(e,this)?e:new this(e,t)}},hf=Symbol(`instance`),gf=class e{type;name;spaceCoords;coords;id;alpha;constructor(e,t=e.space){e[hf]=this,this.type=`function`,this.name=`color`,Object.assign(this,e),this.space=t,this.type!==`custom`&&(this.spaceCoords=Object.values(t.coords),this.coords||=this.spaceCoords.map(e=>{let t=[`<number>`,`<percentage>`];return e.type===`angle`&&t.push(`<angle>`),t}),this.coords=this.coords.map((e,t)=>{let n=this.spaceCoords[t];return typeof e==`string`&&(e=e.trim().split(/\s*\|\s*/)),e.map(e=>mf.get(e,n))}))}serializeCoords(e,t,n){return n=e.map((e,t)=>mf.get(n?.[t]??this.coords[t][0],this.spaceCoords[t])),e.map((e,r)=>n[r].serialize(e,t))}coerceCoords(e,t){return Object.entries(this.space.coords).map(([n,r],i)=>{let a=e[i];if(Qd(a)||isNaN(a))return a;let o=t[i],s=this.coords[i].find(e=>e.type==o);if(!s){let e=r.name||n;throw TypeError(`${o??a?.raw??a} not allowed for ${e} in ${this.name}()`)}return a=s.resolve(a),s.range&&(t[i]=s.toString()),a})}canSerialize(){return this.type===`function`||this.serialize}parse(e){return null}static get(t,...n){return!t||uf(t,this)?t:t[hf]?t[hf]:new e(t,...n)}},_f={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]};function vf(e){return Array.isArray(e)?e:_f[e]}function yf(e,t,n,r={}){if(e=vf(e),t=vf(t),!e||!t)throw TypeError(`Missing white point to convert ${e?``:`from`}${!e&&!t?`/`:``}${t?``:`to`}`);if(e===t)return n;let i={W1:e,W2:t,XYZ:n,options:r};if(ff.run(`chromatic-adaptation-start`,i),i.M||(i.W1===_f.D65&&i.W2===_f.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===_f.D50&&i.W2===_f.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),ff.run(`chromatic-adaptation-end`,i),i.M)return Jd(i.XYZ,i.M);throw TypeError(`Only Bradford CAT with white points D50 and D65 supported for now.`)}function bf(e,t){let n={str:String(e)?.trim(),options:t};if(ff.run(`parse-start`,n),n.color)return n.color;n.parsed=wf(n.str);let r,i=n.options?n.options.parseMeta??n.options.meta:null;if(n.parsed){let t=n.parsed.name,a,o,s=n.parsed.args,c=s.map((e,t)=>n.parsed.argMeta[t]?.type);if(t===`color`){let r=s.shift();c.shift();let i=r.startsWith(`--`)?r.substring(2):`--${r}`,l=[r,i];if(a=N.findFormat({name:t,id:l,type:`function`}),!a){let t,a=r in N.registry?r:i;if(a in N.registry){let n=N.registry[a].formats?.color?.id;n&&(t=`Did you mean ${e.replace(`color(`+r,`color(`+n)}?`)}throw TypeError(`Cannot parse ${n.str}. `+(t??`Missing a plugin?`))}o=a.space,a.id.startsWith(`--`)&&!r.startsWith(`--`)&&pf.warn(`${o.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${a.id}) instead of color(${r}).`),r.startsWith(`--`)&&!a.id.startsWith(`--`)&&pf.warn(`${o.name} is a standard space and supported in the CSS spec. Use color(${a.id}) instead of prefixed color(${r}).`)}else a=N.findFormat({name:t,type:`function`}),o=a.space;i&&Object.assign(i,{format:a,formatId:a.name,types:c,commas:n.parsed.commas});let l=1;n.parsed.lastAlpha&&(l=n.parsed.args.pop(),i&&(i.alphaType=c.pop()));let u=a.coords.length;if(s.length!==u)throw TypeError(`Expected ${u} coordinates for ${o.id} in ${n.str}), got ${s.length}`);s=a.coerceCoords(s,c),r={spaceId:o.id,coords:s,alpha:l}}else spaceloop:for(let e of N.all)for(let t in e.formats){let a=e.formats[t];if(a.type!==`custom`||a.test&&!a.test(n.str))continue;let o=e.getFormat(a),s=o.parse(n.str);if(s){i&&Object.assign(i,{format:o,formatId:t}),r=s;break spaceloop}}if(!r)throw TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return r.alpha=Qd(r.alpha)?r.alpha:r.alpha===void 0?1:af(0,r.alpha,1),r}var xf={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},Sf={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(xf).join(`|`)})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function Cf(e){let t={},n=e.match(Sf.unitValue)?.[0],r=t.raw=e;return n?(t.type=n===`%`?`<percentage>`:`<angle>`,t.unit=n,t.unitless=Number(r.slice(0,-n.length)),r=t.unitless*xf[n]):Sf.number.test(r)?(r=Number(r),t.type=`<number>`):r===`none`?r=null:r===`NaN`||r===`calc(NaN)`?(r=NaN,t.type=`<number>`):t.type=`<ident>`,{value:r,meta:t}}function wf(e){if(!e)return;e=e.trim();let t=e.match(Sf.function);if(t){let e=[],n=[],r=!1,i=t[1].toLowerCase(),a=t[2].replace(Sf.singleArgument,(t,a)=>{let{value:o,meta:s}=Cf(a);return(t.startsWith(`/`)||i!==`color`&&e.length===3)&&(r=!0),e.push(o),n.push(s),``});return{name:i,args:e,argMeta:n,lastAlpha:r,commas:a.includes(`,`),rawName:t[1],rawArgs:t[2]}}}function M(e,t){if(Array.isArray(e))return e.map(e=>M(e,t));if(!e)throw TypeError(`Empty color reference`);Yd(e)&&(e=bf(e,t));let n=e.space||e.spaceId;return typeof n==`string`&&(e.space=N.get(n)),e.alpha===void 0&&(e.alpha=1),e}var Tf=75e-6,N=class e{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?e.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let n=t.coords??this.base.coords;for(let e in n)`name`in n[e]||(n[e].name=e);this.coords=n,this.white=vf(t.white??this.base.white??`D65`),this.formats=t.formats??{};for(let e in this.formats){let t=this.formats[e];t.type||=`function`,t.name||=e}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace===`self`?this:e.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(e,t)=>!0),this.referred=t.referred,Object.defineProperty(this,`path`,{value:Ef(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ff.run(`colorspace-init-end`,this)}inGamut(e,{epsilon:t=Tf}={}){if(!this.equals(this.gamutSpace))return e=this.to(this.gamutSpace,e),this.gamutSpace.inGamut(e,{epsilon:t});let n=Object.values(this.coords);return e.every((e,r)=>{let i=n[r];if(i.type!==`angle`&&i.range){if(Qd(e))return!0;let[n,r]=i.range;return(n===void 0||e>=n-t)&&(r===void 0||e<=r+t)}return!0})}get isUnbounded(){return Object.values(this.coords).every(e=>!(`range`in e))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let e in this.coords)if(this.coords[e].type===`angle`)return!0;return!1}getFormat(e){if(!e)return null;e===`default`?e=Object.values(this.formats)[0]:typeof e==`string`&&(e=this.formats[e]);let t=gf.get(e,this);return t!==e&&e.name in this.formats&&(this.formats[e.name]=t),t}equals(e){return e?this===e||this.id===e||this.id===e.id:!1}to(t,n){if(arguments.length===1){let e=M(t);[t,n]=[e.space,e.coords]}if(t=e.get(t),this.equals(t))return n;n=n.map(e=>Qd(e)?0:e);let r=this.path,i=t.path,a,o;for(let e=0;e<r.length&&r[e].equals(i[e]);e++)a=r[e],o=e;if(!a)throw Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let e=r.length-1;e>o;e--)n=r[e].toBase(n);for(let e=o+1;e<i.length;e++)n=i[e].fromBase(n);return n}from(t,n){if(arguments.length===1){let e=M(t);[t,n]=[e.space,e.coords]}return t=e.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let e=[];for(let t in this.coords){let n=this.coords[t],r=n.range||n.refRange;e.push(r?.min??0)}return e}static registry={};static get all(){return[...new Set(Object.values(e.registry))]}static register(e,t){if(arguments.length===1&&(t=arguments[0],e=t.id),t=this.get(t),this.registry[e]&&this.registry[e]!==t)throw Error(`Duplicate color space registration: '${e}'`);if(this.registry[e]=t,arguments.length===1&&t.aliases)for(let e of t.aliases)this.register(e,t);return t}static get(t,...n){if(!t||uf(t,this))return t;if(Xd(t)===`string`){let n=e.registry[t.toLowerCase()];if(!n)throw TypeError(`No color space found with id = "${t}"`);return n}if(n.length)return e.get(...n);throw TypeError(`${t} is not a valid color space`)}static findFormat(t,n=e.all){if(!t)return null;typeof t==`string`&&(t={name:t});for(let e of n)for(let[n,r]of Object.entries(e.formats)){r.name??=n,r.type??=`function`;let i=(!t.name||r.name===t.name)&&(!t.type||r.type===t.type);if(t.id){let e=r.ids||[r.id],n=Array.isArray(t.id)?t.id:[t.id];i&&=n.some(t=>e.includes(t))}if(i){let t=gf.get(r,e);return t!==r&&(e.formats[r.name]=t),t}}return null}static resolveCoord(t,n){let r=Xd(t),i,a;if(r===`string`?t.includes(`.`)?[i,a]=t.split(`.`):[i,a]=[,t]:Array.isArray(t)?[i,a]=t:(i=t.space,a=t.coordId),i=e.get(i),i||=n,!i)throw TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(r=Xd(a),r===`number`||r===`string`&&a>=0){let e=Object.entries(i.coords)[a];if(e)return{space:i,id:e[0],index:a,...e[1]}}i=e.get(i);let o=a.toLowerCase(),s=0;for(let e in i.coords){let t=i.coords[e];if(e.toLowerCase()===o||t.name?.toLowerCase()===o)return{space:i,id:e,index:s,...t};s++}throw TypeError(`No "${a}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(`, `)}`)}static DEFAULT_FORMAT={type:`functions`,name:`color`}};function Ef(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}var Df=new N({id:`xyz-d65`,name:`XYZ D65`,coords:{x:{refRange:[0,1],name:`X`},y:{refRange:[0,1],name:`Y`},z:{refRange:[0,1],name:`Z`}},white:`D65`,formats:{color:{ids:[`xyz-d65`,`xyz`]}},aliases:[`xyz`]}),Of=class extends N{constructor(e){e.coords||={r:{range:[0,1],name:`Red`},g:{range:[0,1],name:`Green`},b:{range:[0,1],name:`Blue`}},e.base||=Df,e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??=t=>{let n=Jd(t,e.toXYZ_M);return this.white!==this.base.white&&(n=yf(this.white,this.base.white,n)),n},e.fromBase??=t=>(t=yf(this.base.white,this.white,t),Jd(t,e.fromXYZ_M))),e.referred??=`display`,super(e)}};function kf(e,t={}){if(Array.isArray(e))return e.map(e=>kf(e,t));let{cssProperty:n=`background-color`,element:r,...i}=t,a=null;try{return M(e,i)}catch(e){a=e}let{CSS:o,getComputedStyle:s}=globalThis;if(Yd(e)&&r&&o&&s&&o.supports(n,e)){let t=r.style[n];e!==t&&(r.style[n]=e);let o=s(r).getPropertyValue(n);if(e!==t&&(r.style[n]=t),o!==e)try{return M(o,i)}catch(e){a=e}else a={message:`Color value is a valid CSS color, but it could not be resolved :(`}}return t.errorMeta&&(t.errorMeta.error=a),null}function Af(e,t){e=M(e);let n=N.get(t,t?.space),r=t?.precision,i;return i=!n||e.space.equals(n)?e.coords.slice():n.from(e),r===void 0?i:i.map(e=>ef(e,r))}function jf(e,t){if(e=M(e),t===`alpha`)return e.alpha??1;let{space:n,index:r}=N.resolveCoord(t,e.space);return Af(e,n)[r]}function Mf(e,t,n,r){return e=M(e),Array.isArray(t)&&([t,n,r]=[e.space,t,n]),t=N.get(t),e.coords=t===e.space?n.slice():t.to(e.space,n),r!==void 0&&(e.alpha=r),e}Mf.returns=`color`;function Nf(e,t,n){if(e=M(e),arguments.length===2&&Xd(arguments[1])===`object`){let t=arguments[1];for(let n in t)Nf(e,n,t[n])}else if(typeof n==`function`&&(n=n(jf(e,t))),t===`alpha`)e.alpha=n;else{let{space:r,index:i}=N.resolveCoord(t,e.space),a=Af(e,r);a[i]=n,Mf(e,r,a)}return e}Nf.returns=`color`;var Pf=new N({id:`xyz-d50`,name:`XYZ D50`,white:`D50`,base:Df,fromBase:e=>yf(Df.white,`D50`,e),toBase:e=>yf(`D50`,Df.white,e)}),Ff=216/24389,If=24/116,Lf=24389/27,Rf=_f.D50,zf=new N({id:`lab`,name:`Lab`,coords:{l:{refRange:[0,100],name:`Lightness`},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Rf,base:Pf,fromBase(e){let t=e.map((e,t)=>e/Rf[t]).map(e=>e>Ff?Math.cbrt(e):(Lf*e+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let[t,n,r]=e,i=[];return i[1]=(t+16)/116,i[0]=n/500+i[1],i[2]=i[1]-r/200,[i[0]>If?i[0]**3:(116*i[0]-16)/Lf,e[0]>8?((e[0]+16)/116)**3:e[0]/Lf,i[2]>If?i[2]**3:(116*i[2]-16)/Lf].map((e,t)=>e*Rf[t])},formats:{lab:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}});function Bf(e){return typeof e==`number`?(e%360+360)%360:e}function Vf(e,t){let[n,r]=t,i=Qd(n),a=Qd(r);if(i&&a)return[n,r];if(i?n=r:a&&(r=n),e===`raw`)return t;n=Bf(n),r=Bf(r);let o=r-n;return e===`increasing`?o<0&&(r+=360):e===`decreasing`?o>0&&(n+=360):e===`longer`?-180<o&&o<180&&(o>0?n+=360:r+=360):e===`shorter`&&(o>180?n+=360:o<-180&&(r+=360)),[n,r]}var Hf=new N({id:`lch`,name:`LCH`,coords:{l:{refRange:[0,100],name:`Lightness`},c:{refRange:[0,150],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},base:zf,fromBase(e){if(this.ε===void 0){let e=Object.values(this.base.coords)[1].refRange;this.ε=(e[1]-e[0])/1e5}let[t,n,r]=e,i=Math.abs(n)<this.ε&&Math.abs(r)<this.ε,a=i?null:Bf(Math.atan2(r,n)*180/Math.PI);return[t,i?0:Math.sqrt(n**2+r**2),a]},toBase(e){let[t,n,r]=e,i=null,a=null;return Qd(r)||(n=n<0?0:n,i=n*Math.cos(r*Math.PI/180),a=n*Math.sin(r*Math.PI/180)),[t,i,a]},formats:{lch:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <angle>`]}}}),Uf=25**7,Wf=Math.PI,Gf=180/Wf,Kf=Wf/180;function qf(e){let t=e*e;return t*t*t*e}function Jf(e,t,{kL:n=1,kC:r=1,kH:i=1}={}){[e,t]=M([e,t]);let[a,o,s]=zf.from(e),c=Hf.from(zf,[a,o,s])[1],[l,u,d]=zf.from(t),f=Hf.from(zf,[l,u,d])[1];c<0&&(c=0),f<0&&(f=0);let p=qf((c+f)/2),m=.5*(1-Math.sqrt(p/(p+Uf))),h=(1+m)*o,g=(1+m)*u,ee=Math.sqrt(h**2+s**2),_=Math.sqrt(g**2+d**2),te=h===0&&s===0?0:Math.atan2(s,h),ne=g===0&&d===0?0:Math.atan2(d,g);te<0&&(te+=2*Wf),ne<0&&(ne+=2*Wf),te*=Gf,ne*=Gf;let re=l-a,ie=_-ee,ae=ne-te,oe=te+ne,se=Math.abs(ae),ce;ee*_===0?ce=0:se<=180?ce=ae:ae>180?ce=ae-360:ae<-180?ce=ae+360:pf.warn(`the unthinkable has happened`);let le=2*Math.sqrt(_*ee)*Math.sin(ce*Kf/2),ue=(a+l)/2,de=(ee+_)/2,fe=qf(de),pe;pe=ee*_===0?oe:se<=180?oe/2:oe<360?(oe+360)/2:(oe-360)/2;let me=(ue-50)**2,he=1+.015*me/Math.sqrt(20+me),ge=1+.045*de,_e=1;_e-=.17*Math.cos((pe-30)*Kf),_e+=.24*Math.cos(2*pe*Kf),_e+=.32*Math.cos((3*pe+6)*Kf),_e-=.2*Math.cos((4*pe-63)*Kf);let v=1+.015*de*_e,y=30*Math.exp(-1*((pe-275)/25)**2),ve=2*Math.sqrt(fe/(fe+Uf)),ye=-1*Math.sin(2*y*Kf)*ve,b=(re/(n*he))**2;return b+=(ie/(r*ge))**2,b+=(le/(i*v))**2,b+=ye*(ie/(r*ge))*(le/(i*v)),Math.sqrt(b)}var Yf=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Xf=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],Zf=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],Qf=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],$f=new N({id:`oklab`,name:`Oklab`,coords:{l:{refRange:[0,1],name:`Lightness`},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:`D65`,base:Df,fromBase(e){let t=Jd(e,Yf);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),Jd(t,Zf,t)},toBase(e){let t=Jd(e,Qf);return t[0]**=3,t[1]**=3,t[2]**=3,Jd(t,Xf,t)},formats:{oklab:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}});function ep(e,t){[e,t]=M([e,t]);let[n,r,i]=$f.from(e),[a,o,s]=$f.from(t),c=n-a,l=r-o,u=i-s;return Math.sqrt(c**2+l**2+u**2)}var tp=75e-6;function np(e,t,{epsilon:n=tp}={}){e=M(e),t||=e.space,t=N.get(t);let r=e.coords;return t!==e.space&&(r=t.from(e)),t.inGamut(r,{epsilon:n})}function rp(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function ip(e,t,n=`lab`){n=N.get(n);let r=n.from(e),i=n.from(t);return Math.sqrt(r.reduce((e,t,n)=>{let r=i[n];return Qd(t)||Qd(r)?e:e+(r-t)**2},0))}function ap(e,t){return ip(e,t,`lab`)}var op=Math.PI/180;function sp(e,t,{l:n=2,c:r=1}={}){[e,t]=M([e,t]);let[i,a,o]=zf.from(e),[,s,c]=Hf.from(zf,[i,a,o]),[l,u,d]=zf.from(t),f=Hf.from(zf,[l,u,d])[1];s<0&&(s=0),f<0&&(f=0);let p=i-l,m=s-f,h=a-u,g=o-d,ee=h**2+g**2-m**2,_=.511;i>=16&&(_=.040975*i/(1+.01765*i));let te=.0638*s/(1+.0131*s)+.638,ne;Qd(c)&&(c=0),ne=c>=164&&c<=345?.56+Math.abs(.2*Math.cos((c+168)*op)):.36+Math.abs(.4*Math.cos((c+35)*op));let re=s**4,ie=Math.sqrt(re/(re+1900)),ae=te*(ie*ne+1-ie),oe=(p/(n*_))**2;return oe+=(m/(r*te))**2,oe+=ee/ae**2,Math.sqrt(oe)}var cp=203,lp=new N({id:`xyz-abs-d65`,cssId:`--xyz-abs-d65`,name:`Absolute XYZ D65`,coords:{x:{refRange:[0,9504.7],name:`Xa`},y:{refRange:[0,1e4],name:`Ya`},z:{refRange:[0,10888.3],name:`Za`}},base:Df,fromBase(e){return e.map(e=>e*cp)},toBase(e){return e.map(e=>e/cp)}}),up=1.15,dp=.66,fp=2610/2**14,pp=2**14/2610,mp=3424/2**12,hp=2413/2**7,gp=2392/2**7,_p=1.7*2523/2**5,vp=2**5/(1.7*2523),yp=-.56,bp=16295499532821565e-27,xp=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Sp=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Cp=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],wp=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]],Tp=new N({id:`jzazbz`,name:`Jzazbz`,coords:{jz:{refRange:[0,1],name:`Jz`},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:lp,fromBase(e){let[t,n,r]=e,[i,a,o]=Jd(Jd([up*t-(up-1)*r,dp*n-(dp-1)*t,r],xp).map(function(e){return sf((mp+hp*sf(e/1e4,fp))/(1+gp*sf(e/1e4,fp)),_p)}),Cp);return[(1+yp)*i/(1+yp*i)-bp,a,o]},toBase(e){let[t,n,r]=e,[i,a,o]=Jd(Jd([(t+bp)/(1+yp-yp*(t+bp)),n,r],wp).map(function(e){return 1e4*sf((mp-sf(e,vp))/(gp*sf(e,vp)-hp),pp)}),Sp),s=(i+(up-1)*o)/up;return[s,(a+(dp-1)*s)/dp,o]},formats:{jzazbz:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}}),Ep=new N({id:`jzczhz`,name:`JzCzHz`,coords:{jz:{refRange:[0,1],name:`Jz`},cz:{refRange:[0,.26],name:`Chroma`},hz:{refRange:[0,360],type:`angle`,name:`Hue`}},base:Tp,fromBase:Hf.fromBase,toBase:Hf.toBase,formats:{jzczhz:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <angle>`]}}});function Dp(e,t){[e,t]=M([e,t]);let[n,r,i]=Ep.from(e),[a,o,s]=Ep.from(t),c=n-a,l=r-o;Qd(i)&&Qd(s)?(i=0,s=0):Qd(i)?i=s:Qd(s)&&(s=i);let u=i-s,d=2*Math.sqrt(r*o)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(c**2+l**2+d**2)}var Op=3424/4096,kp=2413/128,Ap=2392/128,jp=2610/16384,Mp=2523/32,Np=16384/2610,Pp=32/2523,Fp=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],Ip=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Lp=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],Rp=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]],zp=new N({id:`ictcp`,name:`ICTCP`,coords:{i:{refRange:[0,1],name:`I`},ct:{refRange:[-.5,.5],name:`CT`},cp:{refRange:[-.5,.5],name:`CP`}},base:lp,fromBase(e){return Bp(Jd(e,Fp))},toBase(e){return Jd(Vp(e),Rp)},formats:{ictcp:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}});function Bp(e){return Jd(e.map(function(e){return((Op+kp*(e/1e4)**jp)/(1+Ap*(e/1e4)**jp))**Mp}),Ip)}function Vp(e){return Jd(e,Lp).map(function(e){return 1e4*(Math.max(e**Pp-Op,0)/(kp-Ap*e**Pp))**Np})}function Hp(e,t){[e,t]=M([e,t]);let[n,r,i]=zp.from(e),[a,o,s]=zp.from(t);return 720*Math.sqrt((n-a)**2+.25*(r-o)**2+(i-s)**2)}function Up(e,t){[e,t]=M([e,t]);let[n,r,i]=$f.from(e),[a,o,s]=$f.from(t),c=n-a,l=2*(r-o),u=2*(i-s);return Math.sqrt(c**2+l**2+u**2)}var Wp=_f.D65,Gp=.42,Kp=1/Gp,qp=2*Math.PI,Jp=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],Yp=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],Xp=[[460,451,288],[460,-891,-261],[460,-220,-6300]],Zp={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Qp={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},$p=180/Math.PI,em=Math.PI/180;function tm(e,t){return e.map(e=>{let n=sf(t*Math.abs(e)*.01,Gp);return 400*of(n,e)/(n+27.13)})}function nm(e,t){let n=100/t*27.13**Kp;return e.map(e=>{let t=Math.abs(e);return of(n*sf(t/(400-t),Kp),e)})}function rm(e){let t=Bf(e);t<=Qp.h[0]&&(t+=360);let n=lf(Qp.h,t)-1,[r,i]=Qp.h.slice(n,n+2),[a,o]=Qp.e.slice(n,n+2),s=Qp.H[n],c=(t-r)/a;return s+100*c/(c+(i-t)/o)}function im(e){let t=(e%400+400)%400,n=Math.floor(.01*t);t%=100;let[r,i]=Qp.h.slice(n,n+2),[a,o]=Qp.e.slice(n,n+2);return Bf((t*(o*r-a*i)-100*r*o)/(t*(o-a)-100*o))}function am(e,t,n,r,i){let a={};a.discounting=i,a.refWhite=e,a.surround=r;let o=e.map(e=>e*100);a.la=t,a.yb=n;let s=o[1],c=Jd(o,Jp),l=Zp[a.surround],u=l[0];a.c=l[1],a.nc=l[2];let d=(1/(5*a.la+1))**4;a.fl=d*a.la+.1*(1-d)*(1-d)*Math.cbrt(5*a.la),a.flRoot=a.fl**.25,a.n=a.yb/s,a.z=1.48+Math.sqrt(a.n),a.nbb=.725*a.n**-.2,a.ncb=a.nbb;let f=Math.max(Math.min(u*(1-1/3.6*Math.exp((-a.la-42)/92)),1),0);a.dRgb=c.map(e=>tf(1,s/e,f)),a.dRgbInv=a.dRgb.map(e=>1/e);let p=tm(c.map((e,t)=>e*a.dRgb[t]),a.fl);return a.aW=a.nbb*(2*p[0]+p[1]+.05*p[2]),a}var om=am(Wp,64/Math.PI*.2,20,`average`,!1);function sm(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw Error(`Conversion requires one and only one: 'J' or 'Q'`);if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw Error(`Conversion requires one and only one: 'C', 'M' or 's'`);if(!(e.h!==void 0^e.H!==void 0))throw Error(`Conversion requires one and only one: 'h' or 'H'`);if(e.J===0||e.Q===0)return[0,0,0];let n=0;n=e.h===void 0?im(e.H)*em:Bf(e.h)*em;let r=Math.cos(n),i=Math.sin(n),a=0;e.J===void 0?e.Q!==void 0&&(a=.25*t.c*e.Q/((t.aW+4)*t.flRoot)):a=sf(e.J,1/2)*.1;let o=0;e.C===void 0?e.M===void 0?e.s!==void 0&&(o=4e-4*e.s**2*(t.aW+4)/t.c):o=e.M/t.flRoot/a:o=e.C/a;let s=sf(o*(1.64-.29**t.n)**-.73,10/9),c=.25*(Math.cos(n+2)+3.8),l=t.aW*sf(a,2/t.c/t.z),u=5e4/13*t.nc*t.ncb*c,d=l/t.nbb,f=23*(d+.305)*cf(s,23*u+s*(11*r+108*i));return Jd(nm(Jd([d,f*r,f*i],Xp).map(e=>e*1/1403),t.fl).map((e,n)=>e*t.dRgbInv[n]),Yp).map(e=>e/100)}function cm(e,t){let n=tm(Jd(e.map(e=>e*100),Jp).map((e,n)=>e*t.dRgb[n]),t.fl),r=n[0]+(-12*n[1]+n[2])/11,i=(n[0]+n[1]-2*n[2])/9,a=(Math.atan2(i,r)%qp+qp)%qp,o=.25*(Math.cos(a+2)+3.8),s=sf(5e4/13*t.nc*t.ncb*cf(o*Math.sqrt(r**2+i**2),n[0]+n[1]+1.05*n[2]+.305),.9)*(1.64-.29**t.n)**.73,c=sf(t.nbb*(2*n[0]+n[1]+.05*n[2])/t.aW,.5*t.c*t.z),l=100*sf(c,2),u=4/t.c*c*(t.aW+4)*t.flRoot,d=s*c,f=d*t.flRoot,p=Bf(a*$p),m=rm(p);return{J:l,C:d,h:p,s:50*sf(t.c*s/(t.aW+4),1/2),Q:u,M:f,H:m}}var lm=new N({id:`cam16-jmh`,cssId:`--cam16-jmh`,name:`CAM16-JMh`,coords:{j:{refRange:[0,100],name:`J`},m:{refRange:[0,105],name:`Colorfulness`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},base:Df,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=cm(e,om),n=Math.abs(t.M)<this.ε;return[t.J,n?0:t.M,n?null:t.h]},toBase(e){return sm({J:e[0],M:e[1],h:e[2]},om)}}),um=_f.D65,dm=216/24389,fm=24389/27;function pm(e){return 116*(e>dm?Math.cbrt(e):(fm*e+16)/116)-16}function mm(e){return e>8?((e+16)/116)**3:e/fm}function hm(e,t){let[n,r,i]=e,a=[],o=0;if(i===0)return[0,0,0];let s=mm(i);o=i>0?.00379058511492914*i**2+.608983189401032*i+.9155088574762233:9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;let c=0,l=1/0;for(;c<=15;){a=sm({J:o,C:r,h:n},t);let e=Math.abs(a[1]-s);if(e<l){if(e<=2e-12)return a;l=e}o-=(a[1]-s)*o/(2*a[1]),c+=1}return sm({J:o,C:r,h:n},t)}function gm(e,t){let n=pm(e[1]);if(n===0)return[0,0,0];let r=cm(e,_m);return[Bf(r.h),r.C,n]}var _m=am(um,200/Math.PI*mm(50),mm(50)*100,`average`,!1),vm=new N({id:`hct`,name:`HCT`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},c:{refRange:[0,145],name:`Colorfulness`},t:{refRange:[0,100],name:`Tone`}},base:Df,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=gm(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return hm(e,_m)},formats:{color:{id:`--hct`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),ym=Math.PI/180,bm=[1,.007,.0228];function xm(e){e[1]<0&&(e=vm.fromBase(vm.toBase(e)));let t=Math.log(Math.max(1+bm[2]*e[1]*_m.flRoot,1))/bm[2],n=e[0]*ym,r=t*Math.cos(n),i=t*Math.sin(n);return[e[2],r,i]}function Sm(e,t){[e,t]=M([e,t]);let[n,r,i]=xm(vm.from(e)),[a,o,s]=xm(vm.from(t));return Math.sqrt((n-a)**2+(r-o)**2+(i-s)**2)}var Cm={deltaE76:ap,deltaECMC:sp,deltaE2000:Jf,deltaEJz:Dp,deltaEITP:Hp,deltaEOK:ep,deltaEOK2:Up,deltaEHCT:Sm};function wm(e){return Math.max(parseFloat(`1e${(e?Math.floor(Math.log10(Math.abs(e))):0)-2}`),1e-6)}var Tm={hct:{method:`hct.c`,jnd:2,deltaEMethod:`hct`,blackWhiteClamp:{}},"hct-tonal":{method:`hct.c`,jnd:0,deltaEMethod:`hct`,blackWhiteClamp:{channel:`hct.t`,min:0,max:100}}};function Em(e,{method:t=pf.gamut_mapping,space:n=void 0,deltaEMethod:r=``,jnd:i=2,blackWhiteClamp:a=void 0}={}){if(e=M(e),Yd(arguments[1])?n=arguments[1]:n||=e.space,n=N.get(n),np(e,n,{epsilon:0}))return e;let o;if(t===`css`)o=Om(e,{space:n});else{if(t!==`clip`&&!np(e,n)){Object.prototype.hasOwnProperty.call(Tm,t)&&({method:t,jnd:i,deltaEMethod:r,blackWhiteClamp:a}=Tm[t]);let s=Jf;if(r!==``){for(let e in Cm)if(`deltae`+r.toLowerCase()===e.toLowerCase()){s=Cm[e];break}}i===0&&(i=1e-16);let c=Em(km(e,n),{method:`clip`,space:n});if(s(e,c)>i){if(a&&Object.keys(a).length===3){let t=N.resolveCoord(a.channel),n=jf(km(e,t.space),t.id);if(Qd(n)&&(n=0),n>=a.max)return km({space:`xyz-d65`,coords:_f.D65},e.space);if(n<=a.min)return km({space:`xyz-d65`,coords:[0,0,0]},e.space)}let r=N.resolveCoord(t),c=r.space,l=r.id,u=km(e,c);u.coords.forEach((e,t)=>{Qd(e)&&(u.coords[t]=0)});let d=(r.range||r.refRange)[0],f=wm(i),p=d,m=jf(u,l);for(;m-p>f;){let e=rp(u);e=Em(e,{space:n,method:`clip`}),s(u,e)-i<f?p=jf(u,l):m=jf(u,l),Nf(u,l,(p+m)/2)}o=km(u,n)}else o=c}else o=km(e,n);if(t===`clip`||!np(o,n,{epsilon:0})){let e=Object.values(n.coords).map(e=>e.range||[]);o.coords=o.coords.map((t,n)=>{let[r,i]=e[n];return r!==void 0&&(t=Math.max(r,t)),i!==void 0&&(t=Math.min(t,i)),t})}}return n!==e.space&&(o=km(o,e.space)),e.coords=o.coords,e}Em.returns=`color`;var Dm={WHITE:{space:$f,coords:[1,0,0],alpha:1},BLACK:{space:$f,coords:[0,0,0],alpha:1}};function Om(e,{space:t}={}){let n=.02,r=1e-4;e=M(e),t||=e.space,t=N.get(t);let i=N.get(`oklch`);if(t.isUnbounded)return km(e,t);let a=km(e,i),o=a.coords[0];if(o>=1){let n=km(Dm.WHITE,t);return n.alpha=e.alpha,km(n,t)}if(o<=0){let n=km(Dm.BLACK,t);return n.alpha=e.alpha,km(n,t)}if(np(a,t,{epsilon:0}))return km(a,t);function s(e){let n=km(e,t),r=Object.values(t.coords);return n.coords=n.coords.map((e,t)=>{if(`range`in r[t]){let[n,i]=r[t].range;return af(n,e,i)}return e}),n}let c=0,l=a.coords[1],u=!0,d=rp(a),f=s(d),p=ep(f,d);if(p<n)return f;for(;l-c>r;){let e=(c+l)/2;if(d.coords[1]=e,u&&np(d,t,{epsilon:0}))c=e;else if(f=s(d),p=ep(f,d),p<n){if(n-p<r)break;u=!1,c=e}else l=e}return f}function km(e,t,{inGamut:n}={}){e=M(e),t=N.get(t);let r=t.from(e),i={space:t,coords:r,alpha:e.alpha};return n&&(i=Em(i,n===!0?void 0:n)),i}km.returns=`color`;function Am(e,t={}){let{precision:n=pf.precision,format:r,inGamut:i=!0,coords:a,alpha:o,commas:s}=t,c,l=M(e),u=r,d=l.parseMeta;d&&!r&&(d.format.canSerialize()&&(r=d.format,u=d.formatId),a??=d.types,o??=d.alphaType,s??=d.commas),u&&(r=l.space.getFormat(r)??N.findFormat(u)),r||(r=l.space.getFormat(`default`)??N.DEFAULT_FORMAT,u=r.name),r&&r.space&&r.space!==l.space&&(l=km(l,r.space));let f=l.coords.slice();if(i||=r.toGamut,i&&!np(l)&&(f=Em(rp(l),i===!0?void 0:i).coords),r.type===`custom`)if(r.serialize)c=r.serialize(f,l.alpha,t);else throw TypeError(`format ${u} can only be used to parse colors, not for serialization`);else{let e=r.name||`color`,t=r.serializeCoords(f,n,a);if(e===`color`){let e=r.id||r.ids?.[0]||l.space.cssId||l.space.id;t.unshift(e)}let i=l.alpha;o!==void 0&&typeof o!=`object`&&(o=typeof o==`string`?{type:o}:{include:o});let u=o?.type??`<number>`,d=o?.include===!0||r.alpha===!0||o?.include!==!1&&r.alpha!==!1&&i<1,p=``;if(s??=r.commas,d){if(n!==null){let e;u===`<percentage>`&&(e=`%`,i*=100),i=Zd(i,{precision:n,unit:e})}p=`${s?`,`:` /`} ${i}`}c=`${e}(${t.join(s?`, `:` `)}${p})`}return c}var jm=new Of({id:`rec2020-linear`,cssId:`--rec2020-linear`,name:`Linear REC.2020`,white:`D65`,toXYZ_M:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ_M:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]]}),Mm=new Of({id:`rec2020`,name:`REC.2020`,base:jm,toBase(e){return e.map(function(e){let t=e<0?-1:1;return t*(e*t)**2.4})},fromBase(e){return e.map(function(e){let t=e<0?-1:1;return t*(e*t)**(1/2.4)})}}),Nm=new Of({id:`p3-linear`,cssId:`display-p3-linear`,name:`Linear P3`,white:`D65`,toXYZ_M:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ_M:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]}),Pm=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Fm=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],Im=new Of({id:`srgb-linear`,name:`Linear sRGB`,white:`D65`,toXYZ_M:Pm,fromXYZ_M:Fm}),Lm={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},Rm=[,,,].fill(`<percentage> | <number>[0, 255]`),zm=[,,,].fill(`<number>[0, 255]`),Bm=new Of({id:`srgb`,name:`sRGB`,base:Im,fromBase:e=>e.map(e=>{let t=e<0?-1:1,n=e*t;return n>.0031308?t*(1.055*n**(1/2.4)-.055):12.92*e}),toBase:e=>e.map(e=>{let t=e<0?-1:1,n=e*t;return n<=.04045?e/12.92:t*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Rm},rgb_number:{name:`rgb`,commas:!0,coords:zm,alpha:!1},color:{},rgba:{coords:Rm,commas:!0,alpha:!0},rgba_number:{name:`rgba`,commas:!0,coords:zm},hex:{type:`custom`,toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,`$&$&`));let t=[];return e.replace(/[a-f0-9]{2}/gi,e=>{t.push(parseInt(e,16)/255)}),{spaceId:`srgb`,coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0,alpha:r}={})=>{(r!==!1&&t<1||r===!0)&&e.push(t),e=e.map(e=>Math.round(e*255));let i=n&&e.every(e=>e%17==0);return`#`+e.map(e=>i?(e/17).toString(16):e.toString(16).padStart(2,`0`)).join(``)}},keyword:{type:`custom`,test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:`srgb`,coords:null,alpha:1};if(e===`transparent`?(t.coords=Lm.black,t.alpha=0):t.coords=Lm[e],t.coords)return t}}}}),Vm=new Of({id:`p3`,cssId:`display-p3`,name:`P3`,base:Nm,fromBase:Bm.fromBase,toBase:Bm.toBase});pf.display_space=Bm;var Hm;if(typeof CSS<`u`&&CSS.supports)for(let e of[zf,Mm,Vm]){let t=Am({space:e,coords:e.getMinCoords(),alpha:1});if(CSS.supports(`color`,t)){pf.display_space=e;break}}function Um(e,{space:t=pf.display_space,...n}={}){e=M(e);let r=Am(e,n);if(typeof CSS>`u`||CSS.supports(`color`,r)||!pf.display_space)r=new String(r),r.color=e;else{let i=e;if((e.coords.some(Qd)||Qd(e.alpha))&&!(Hm??=CSS.supports(`color`,`hsl(none 50% 50%)`))&&(i=rp(e),i.coords=i.coords.map($d),i.alpha=$d(i.alpha),r=Am(i,n),CSS.supports(`color`,r)))return r=new String(r),r.color=i,r;i=km(i,t),r=new String(Am(i,n)),r.color=i}return r}function Wm(e,t,{space:n,hue:r=`shorter`}={}){e=M(e),n||=e.space,n=N.get(n);let i=Object.values(n.coords);[e,t]=[e,t].map(e=>km(e,n));let[a,o]=[e,t].map(e=>e.coords),s=a.map((e,t)=>{let n=i[t],a=o[t];return n.type===`angle`&&([e,a]=Vf(r,[e,a])),Gm(e,a)}),c=Gm(e.alpha,t.alpha);return{space:n,coords:s,alpha:c}}function Gm(e,t){return Qd(e)||Qd(t)?e===t?null:0:e-t}function Km(e,t){return e=M(e),t=M(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((e,n)=>e===t.coords[n])}function qm(e){return jf(e,[Df,`y`])}function Jm(e,t){Nf(e,[Df,`y`],t)}function Ym(e){Object.defineProperty(e.prototype,`luminance`,{get(){return qm(this)},set(e){Jm(this,e)}})}var Xm=Object.freeze({__proto__:null,getLuminance:qm,register:Ym,setLuminance:Jm});function Zm(e,t){e=M(e),t=M(t);let n=Math.max(qm(e),0),r=Math.max(qm(t),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}var Qm=.56,$m=.57,eh=.62,th=.65,nh=.022,rh=1.414,ih=.1,ah=5e-4,oh=1.14,sh=.027,ch=1.14;function lh(e){return e>=nh?e:e+(nh-e)**rh}function uh(e){return(e<0?-1:1)*Math.abs(e)**2.4}function dh(e,t){t=M(t),e=M(e);let n,r,i,a,o,s;t=km(t,`srgb`),[a,o,s]=t.coords.map(e=>Qd(e)?0:e);let c=uh(a)*.2126729+uh(o)*.7151522+uh(s)*.072175;e=km(e,`srgb`),[a,o,s]=e.coords.map(e=>Qd(e)?0:e);let l=uh(a)*.2126729+uh(o)*.7151522+uh(s)*.072175,u=lh(c),d=lh(l),f=d>u;return Math.abs(d-u)<ah?r=0:f?(n=d**Qm-u**$m,r=n*oh):(n=d**th-u**eh,r=n*ch),i=Math.abs(r)<ih?0:r>0?r-sh:r+sh,i*100}function fh(e,t){e=M(e),t=M(t);let n=Math.max(qm(e),0),r=Math.max(qm(t),0);r>n&&([n,r]=[r,n]);let i=n+r;return i===0?0:(n-r)/i}var ph=5e4;function mh(e,t){e=M(e),t=M(t);let n=Math.max(qm(e),0),r=Math.max(qm(t),0);return r>n&&([n,r]=[r,n]),r===0?ph:(n-r)/r}function hh(e,t){e=M(e),t=M(t);let n=jf(e,[zf,`l`]),r=jf(t,[zf,`l`]);return Math.abs(n-r)}var gh=216/24389,_h=24/116,vh=24389/27,yh=_f.D65,bh=new N({id:`lab-d65`,name:`Lab D65`,coords:{l:{refRange:[0,100],name:`Lightness`},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:yh,base:Df,fromBase(e){let t=e.map((e,t)=>e/yh[t]).map(e=>e>gh?Math.cbrt(e):(vh*e+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>_h?t[0]**3:(116*t[0]-16)/vh,e[0]>8?((e[0]+16)/116)**3:e[0]/vh,t[2]>_h?t[2]**3:(116*t[2]-16)/vh].map((e,t)=>e*yh[t])},formats:{"lab-d65":{coords:[`<number> | <percentage>`,`<number> | <percentage>`,`<number> | <percentage>`]}}}),xh=5**.5*.5+.5;function Sh(e,t){e=M(e),t=M(t);let n=jf(e,[bh,`l`]),r=jf(t,[bh,`l`]),i=Math.abs(n**+xh-r**+xh)**(1/xh)*Math.SQRT2-40;return i<7.5?0:i}var Ch=Object.freeze({__proto__:null,contrastAPCA:dh,contrastDeltaPhi:Sh,contrastLstar:hh,contrastMichelson:fh,contrastWCAG21:Zm,contrastWeber:mh});function wh(e,t,n){Yd(n)&&(n={algorithm:n});let{algorithm:r,...i}=n||{};if(!r){let e=Object.keys(Ch).map(e=>e.replace(/^contrast/,``)).join(`, `);throw TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${e}`)}e=M(e),t=M(t);for(let n in Ch)if(`contrast`+r.toLowerCase()===n.toLowerCase())return Ch[n](e,t,i);throw TypeError(`Unknown contrast algorithm: ${r}`)}function Th(e){let[t,n,r]=Af(e,Df),i=t+15*n+3*r;return[4*t/i,9*n/i]}function Eh(e){let[t,n,r]=Af(e,Df),i=t+n+r;return[t/i,n/i]}function Dh(e){Object.defineProperty(e.prototype,`uv`,{get(){return Th(this)}}),Object.defineProperty(e.prototype,`xy`,{get(){return Eh(this)}})}var Oh=Object.freeze({__proto__:null,register:Dh,uv:Th,xy:Eh});function kh(e,t,n={}){Yd(n)&&(n={method:n});let{method:r=pf.deltaE,...i}=n;for(let n in Cm)if(`deltae`+r.toLowerCase()===n.toLowerCase())return Cm[n](e,t,i);throw TypeError(`Unknown deltaE method: ${r}`)}function Ah(e,t=.25){return Nf(e,[N.get(`oklch`,`lch`),`l`],e=>e*(1+t))}function jh(e,t=.25){return Nf(e,[N.get(`oklch`,`lch`),`l`],e=>e*(1-t))}Ah.returns=`color`,jh.returns=`color`;var Mh=Object.freeze({__proto__:null,darken:jh,lighten:Ah});function Nh(e,t,n,r={}){return[e,t]=[M(e),M(t)],Xd(n)===`object`&&([n,r]=[.5,n]),Fh(e,t,r)(n??.5)}function Ph(e,t,n={}){let r;Ih(e)&&([r,n]=[e,t],[e,t]=r.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:a,steps:o=2,maxSteps:s=1e3,...c}=n;r||=([e,t]=[M(e),M(t)],Fh(e,t,c));let l=kh(e,t),u=i>0?Math.max(o,Math.ceil(l/i)+1):o,d=[];if(s!==void 0&&(u=Math.min(u,s)),u===1)d=[{p:.5,color:r(.5)}];else{let e=1/(u-1);d=Array.from({length:u},(t,n)=>{let i=n*e;return{p:i,color:r(i)}})}if(i>0){let e=d.reduce((e,t,n)=>{if(n===0)return 0;let r=kh(t.color,d[n-1].color,a);return Math.max(e,r)},0);for(;e>i;){e=0;for(let t=1;t<d.length&&d.length<s;t++){let n=d[t-1],i=d[t],a=(i.p+n.p)/2,o=r(a);e=Math.max(e,kh(o,n.color),kh(o,i.color)),d.splice(t,0,{p:a,color:r(a)}),t++}}}return d=d.map(e=>e.color),d}function Fh(e,t,n={}){if(Ih(e)){let[n,r]=[e,t];return Fh(...n.rangeArgs.colors,{...n.rangeArgs.options,...r})}let{space:r,outputSpace:i,progression:a,premultiplied:o}=n;e=M(e),t=M(t),e=rp(e),t=rp(t);let s={colors:[e,t],options:n};if(r=r?N.get(r):N.registry[pf.interpolationSpace]||e.space,i=i?N.get(i):r,e=km(e,r),t=km(t,r),e=Em(e),t=Em(t),r.coords.h&&r.coords.h.type===`angle`){let i=n.hue=n.hue||`shorter`,a=[r,`h`],[o,s]=[jf(e,a),jf(t,a)];Qd(o)&&!Qd(s)?o=s:Qd(s)&&!Qd(o)&&(s=o),[o,s]=Vf(i,[o,s]),Nf(e,a,o),Nf(t,a,s)}return o&&(e.coords=e.coords.map(t=>t*e.alpha),t.coords=t.coords.map(e=>e*t.alpha)),Object.assign(n=>{n=a?a(n):n;let s=e.coords.map((e,r)=>{let i=t.coords[r];return tf(e,i,n)}),c=tf(e.alpha,t.alpha,n),l={space:r,coords:s,alpha:c};return o&&(l.coords=l.coords.map(e=>e/c)),i!==r&&(l=km(l,i)),l},{rangeArgs:s})}function Ih(e){return Xd(e)===`function`&&!!e.rangeArgs}pf.interpolationSpace=`lab`;function Lh(e){e.defineFunction(`mix`,Nh,{returns:`color`}),e.defineFunction(`range`,Fh,{returns:`function<color>`}),e.defineFunction(`steps`,Ph,{returns:`array<color>`})}var Rh=Object.freeze({__proto__:null,isRange:Ih,mix:Nh,range:Fh,register:Lh,steps:Ph}),zh=new N({id:`hsl`,name:`HSL`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,100],name:`Saturation`},l:{range:[0,100],name:`Lightness`}},base:Bm,fromBase:e=>{let t=Math.max(...e),n=Math.min(...e),[r,i,a]=e,[o,s,c]=[null,0,(n+t)/2],l=t-n;if(l!==0){switch(s=c===0||c===1?0:(t-c)/Math.min(c,1-c),t){case r:o=(i-a)/l+(i<a?6:0);break;case i:o=(a-r)/l+2;break;case a:o=(r-i)/l+4}o*=60}return s<0&&(o+=180,s=Math.abs(s)),o>=360&&(o-=360),[o,s*100,c*100]},toBase:e=>{let[t,n,r]=e;t%=360,t<0&&(t+=360),n/=100,r/=100;function i(e){let i=(e+t/30)%12,a=n*Math.min(r,1-r);return r-a*Math.max(-1,Math.min(i-3,9-i,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]},hsla:{coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`],commas:!0,alpha:!0}}}),Bh=new N({id:`hsv`,name:`HSV`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,100],name:`Saturation`},v:{range:[0,100],name:`Value`}},base:Bm,fromBase(e){let t=Math.max(...e),n=Math.min(...e),[r,i,a]=e,[o,s,c]=[null,0,t],l=t-n;if(l!==0){switch(t){case r:o=(i-a)/l+(i<a?6:0);break;case i:o=(a-r)/l+2;break;case a:o=(r-i)/l+4}o*=60}return c&&(s=l/c),o>=360&&(o-=360),[o,s*100,c*100]},toBase(e){let[t,n,r]=e;t%=360,t<0&&(t+=360),n/=100,r/=100;function i(e){let i=(e+t/60)%6;return r-r*n*Math.max(0,Math.min(i,4-i,1))}return[i(5),i(3),i(1)]},formats:{color:{id:`--hsv`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),Vh=new N({id:`hwb`,name:`HWB`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},w:{range:[0,100],name:`Whiteness`},b:{range:[0,100],name:`Blackness`}},base:Bh,fromBase(e){let[t,n,r]=e;return[t,r*(100-n)/100,100-r]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=n+r;if(i>=1)return[t,0,n/i*100];let a=1-r;return[t,(a===0?0:1-n/a)*100,a*100]},formats:{hwb:{coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),Hh=new Of({id:`a98rgb-linear`,cssId:`--a98-rgb-linear`,name:`Linear Adobe® 98 RGB compatible`,white:`D65`,toXYZ_M:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ_M:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]}),Uh=new Of({id:`a98rgb`,cssId:`a98-rgb`,name:`Adobe® 98 RGB compatible`,base:Hh,toBase:e=>e.map(e=>Math.abs(e)**(563/256)*Math.sign(e)),fromBase:e=>e.map(e=>Math.abs(e)**(256/563)*Math.sign(e))}),Wh=new Of({id:`prophoto-linear`,cssId:`--prophoto-rgb-linear`,name:`Linear ProPhoto`,white:`D50`,base:Pf,toXYZ_M:[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],fromXYZ_M:[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]]}),Gh=1/512,Kh=16/512,qh=new Of({id:`prophoto`,cssId:`prophoto-rgb`,name:`ProPhoto`,base:Wh,toBase(e){return e.map(e=>{let t=e<0?-1:1,n=e*t;return n<Kh?e/16:t*n**1.8})},fromBase(e){return e.map(e=>{let t=e<0?-1:1,n=e*t;return n>=Gh?t*n**(1/1.8):16*e})}}),Jh=1.09929682680944,Yh=.018053968510807,Xh=new Of({id:`--rec2020-oetf`,name:`REC.2020_Scene_Referred`,base:jm,referred:`scene`,toBase(e){return e.map(function(e){let t=e<0?-1:1,n=e*t;return n<Yh*4.5?e/4.5:t*((n+Jh-1)/Jh)**(1/.45)})},fromBase(e){return e.map(function(e){let t=e<0?-1:1,n=e*t;return n>=Yh?t*(Jh*n**.45-(Jh-1)):4.5*e})}}),Zh=new N({id:`oklch`,name:`OkLCh`,coords:{l:{refRange:[0,1],name:`Lightness`},c:{refRange:[0,.4],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},white:`D65`,base:$f,fromBase:Hf.fromBase,toBase:Hf.toBase,formats:{oklch:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <angle>`]}}}),Qh=2*Math.PI,$h=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],eg=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],tg=Number.MAX_VALUE,ng=.206,rg=.03,ig=(1+ng)/(1+rg);function ag(e,t){let n=e.length;if(n!==t.length)throw Error(`Vectors of size ${n} and ${t.length} are not aligned`);let r=0;return e.forEach((e,n)=>{r+=e*t[n]}),r}function og(e){return .5*(ig*e-ng+Math.sqrt((ig*e-ng)*(ig*e-ng)+4*rg*ig*e))}function sg(e){return(e**2+ng*e)/(ig*(e+rg))}function cg(e){let[t,n]=e;return[n/t,n/(1-t)]}function lg(e,t){return[.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))))]}function ug(e,t){let n=Jd(e,Qf);return n[0]**=3,n[1]**=3,n[2]**=3,Jd(n,t,n)}function dg(e,t,n,r){let i=mg(e,t,n,r),a=ug([1,i*e,i*t],n),o=sf(1/Math.max(...a),1/3);return[o,o*i]}function fg(e,t,n,r,i,a,o,s){let c;if(s===void 0&&(s=dg(e,t,a,o)),(n-i)*s[1]-(s[0]-i)*r<=0)c=s[1]*i/(r*s[0]+s[1]*(i-n));else{c=s[1]*(i-1)/(r*(s[0]-1)+s[1]*(i-n));let o=n-i,l=r,u=ag(Qf[0].slice(1),[e,t]),d=ag(Qf[1].slice(1),[e,t]),f=ag(Qf[2].slice(1),[e,t]),p=o+l*u,m=o+l*d,h=o+l*f,g=i*(1-c)+c*n,ee=c*r,_=g+ee*u,te=g+ee*d,ne=g+ee*f,re=_**3,ie=te**3,ae=ne**3,oe=3*p*_**2,se=3*m*te**2,ce=3*h*ne**2,le=6*p**2*_,ue=6*m**2*te,de=6*h**2*ne,fe=ag(a[0],[re,ie,ae])-1,pe=ag(a[0],[oe,se,ce]),me=ag(a[0],[le,ue,de]),he=pe/(pe*pe-.5*fe*me),ge=-fe*he,_e=ag(a[1],[re,ie,ae])-1,v=ag(a[1],[oe,se,ce]),y=ag(a[1],[le,ue,de]),ve=v/(v*v-.5*_e*y),ye=-_e*ve,b=ag(a[2],[re,ie,ae])-1,be=ag(a[2],[oe,se,ce]),x=ag(a[2],[le,ue,de]),xe=be/(be*be-.5*b*x),Se=-b*xe;ge=he>=0?ge:tg,ye=ve>=0?ye:tg,Se=xe>=0?Se:tg,c+=Math.min(ge,Math.min(ye,Se))}return c}function pg(e,t,n){let[r,i,a]=e,o=dg(i,a,t,n),s=fg(i,a,r,1,r,t,n,o),c=cg(o),l=s/Math.min(r*c[0],(1-r)*c[1]),u=lg(i,a),d=r*u[0],f=(1-r)*u[1],p=.9*l*Math.sqrt(Math.sqrt(1/(1/d**4+1/f**4)));return d=r*.4,f=(1-r)*.8,[Math.sqrt(1/(1/d**2+1/f**2)),p,s]}function mg(e,t,n,r){let i,a,o,s,c,l,u,d;ag(r[0][0],[e,t])>1?([i,a,o,s,c]=r[0][1],[l,u,d]=n[0]):ag(r[1][0],[e,t])>1?([i,a,o,s,c]=r[1][1],[l,u,d]=n[1]):([i,a,o,s,c]=r[2][1],[l,u,d]=n[2]);let f=i+a*e+o*t+s*e**2+c*e*t,p=ag(Qf[0].slice(1),[e,t]),m=ag(Qf[1].slice(1),[e,t]),h=ag(Qf[2].slice(1),[e,t]),g=1+f*p,ee=1+f*m,_=1+f*h,te=g**3,ne=ee**3,re=_**3,ie=3*p*g**2,ae=3*m*ee**2,oe=3*h*_**2,se=6*p**2*g,ce=6*m**2*ee,le=6*h**2*_,ue=l*te+u*ne+d*re,de=l*ie+u*ae+d*oe,fe=l*se+u*ce+d*le;return f-=ue*de/(de**2-.5*ue*fe),f}function hg(e,t,n){let[r,i,a]=e,o=sg(a),s=null,c=null;if(r=Bf(r)/360,o!==0&&o!==1&&i!==0){let e=Math.cos(Qh*r),a=Math.sin(Qh*r),[l,u,d]=pg([o,e,a],t,n),f=.8,p,m,h,g;i<f?(p=1.25*i,m=0,h=f*l,g=1-h/u):(p=5*(i-.8),m=u,h=.2*u**2*1.25**2/l,g=1-h/(d-u));let ee=m+p*h/(1-g*p);s=ee*e,c=ee*a}return[o,s,c]}function gg(e,t,n){let r=e[0],i=0,a=og(r),o=Math.sqrt(e[1]**2+e[2]**2),s=.5+Math.atan2(-e[2],-e[1])/Qh;if(a!==0&&a!==1&&o!==0){let[a,s,c]=pg([r,e[1]/o,e[2]/o],t,n),l=.8,u,d,f,p;o<s?(d=l*a,f=1-d/s,p=o/(d+f*o),i=p*l):(u=s,d=.2*s**2*1.25**2/a,f=1-d/(c-s),p=(o-u)/(d+f*(o-u)),i=l+.2*p)}let c=Math.abs(i)<1e-4;return c||a===0||Math.abs(1-a)<1e-7?(s=null,c||(i=0)):s=Bf(s*360),[s,i,a]}var _g=new N({id:`okhsl`,name:`Okhsl`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,1],name:`Saturation`},l:{range:[0,1],name:`Lightness`}},base:$f,gamutSpace:`self`,fromBase(e){return gg(e,$h,eg)},toBase(e){return hg(e,$h,eg)},formats:{color:{id:`--okhsl`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),vg=new N({id:`oklrab`,name:`Oklrab`,coords:{l:{refRange:[0,1],name:`Lightness`},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:`D65`,base:$f,fromBase(e){return[og(e[0]),e[1],e[2]]},toBase(e){return[sg(e[0]),e[1],e[2]]},formats:{color:{coords:[`<percentage> | <number>`,`<number> | <percentage>[-1,1]`,`<number> | <percentage>[-1,1]`]}}}),yg=new N({id:`oklrch`,name:`Oklrch`,coords:{l:{refRange:[0,1],name:`Lightness`},c:{refRange:[0,.4],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},white:`D65`,base:vg,fromBase:Hf.fromBase,toBase:Hf.toBase,formats:{color:{coords:[`<percentage> | <number>`,`<number> | <percentage>[0,1]`,`<number> | <angle>`]}}});function bg(e,t,n){let[r,i,a]=e;r=Bf(r)/360;let o=sg(a),s=null,c=null;if(o!==0&&i!==0){let e=Math.cos(Qh*r),l=Math.sin(Qh*r),[u,d]=cg(dg(e,l,t,n)),f=.5,p=1-f/u,m=1-i*f/(f+d-d*p*i),h=i*d*f/(f+d-d*p*i);o=a*m;let g=a*h,ee=sg(m),_=h*ee/m,te=sg(o);g=g*te/o,o=te;let[ne,re,ie]=ug([ee,e*_,l*_],t),ae=sf(1/Math.max(Math.max(ne,re),Math.max(ie,0)),1/3);o*=ae,g*=ae,s=g*e,c=g*l}return[o,s,c]}function xg(e,t,n){let r=e[0],i=0,a=og(r),o=Math.sqrt(e[1]**2+e[2]**2),s=.5+Math.atan2(-e[2],-e[1])/Qh;if(r!==0&&r!==1&&o!==0){let s=e[1]/o,c=e[2]/o,[l,u]=cg(dg(s,c,t,n)),d=.5,f=1-d/l,p=u/(o+r*u),m=p*r,h=p*o,g=sg(m),ee=h*g/m,[_,te,ne]=ug([g,s*ee,c*ee],t),re=sf(1/Math.max(Math.max(_,te),Math.max(ne,0)),1/3);r/=re,o/=re,o=o*og(r)/r,r=og(r),a=r/m,i=(d+u)*h/(u*d+u*f*h)}return s=Math.abs(i)<1e-4||a===0?null:Bf(s*360),[s,i,a]}var Sg=new N({id:`okhsv`,name:`Okhsv`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,1],name:`Saturation`},v:{range:[0,1],name:`Value`}},base:$f,gamutSpace:`self`,fromBase(e){return xg(e,$h,eg)},toBase(e){return bg(e,$h,eg)},formats:{color:{id:`--okhsv`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),Cg=_f.D65,wg=216/24389,Tg=24389/27,[Eg,Dg]=Th({space:Df,coords:Cg}),Og=new N({id:`luv`,name:`Luv`,coords:{l:{refRange:[0,100],name:`Lightness`},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Cg,base:Df,fromBase(e){let t=[$d(e[0]),$d(e[1]),$d(e[2])],n=t[1],[r,i]=Th({space:Df,coords:t});if(!Number.isFinite(r)||!Number.isFinite(i))return[0,0,0];let a=n<=wg?Tg*n:116*Math.cbrt(n)-16;return[a,13*a*(r-Eg),13*a*(i-Dg)]},toBase(e){let[t,n,r]=e;if(t===0||Qd(t))return[0,0,0];n=$d(n),r=$d(r);let i=n/(13*t)+Eg,a=r/(13*t)+Dg,o=t<=8?t/Tg:((t+16)/116)**3;return[o*(9*i/(4*a)),o,o*((12-3*i-20*a)/(4*a))]},formats:{color:{id:`--luv`,coords:[`<number> | <percentage>`,`<number> | <percentage>`,`<number> | <percentage>`]}}}),kg=new N({id:`lchuv`,name:`LChuv`,coords:{l:{refRange:[0,100],name:`Lightness`},c:{refRange:[0,220],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},base:Og,fromBase:Hf.fromBase,toBase:Hf.toBase,formats:{color:{id:`--lchuv`,coords:[`<number> | <percentage>`,`<number> | <percentage>`,`<number> | <angle>`]}}}),Ag=216/24389,jg=24389/27,Mg=Fm[0][0],Ng=Fm[0][1],Pg=Fm[0][2],Fg=Fm[1][0],Ig=Fm[1][1],Lg=Fm[1][2],Rg=Fm[2][0],zg=Fm[2][1],Bg=Fm[2][2];function Vg(e,t,n){let r=t/(Math.sin(n)-e*Math.cos(n));return r<0?1/0:r}function Hg(e){let t=(e+16)**3/1560896,n=t>Ag?t:e/jg,r=n*(284517*Mg-94839*Pg),i=n*(838422*Pg+769860*Ng+731718*Mg),a=n*(632260*Pg-126452*Ng),o=n*(284517*Fg-94839*Lg),s=n*(838422*Lg+769860*Ig+731718*Fg),c=n*(632260*Lg-126452*Ig),l=n*(284517*Rg-94839*Bg),u=n*(838422*Bg+769860*zg+731718*Rg),d=n*(632260*Bg-126452*zg);return{r0s:r/a,r0i:i*e/a,r1s:r/(a+126452),r1i:(i-769860)*e/(a+126452),g0s:o/c,g0i:s*e/c,g1s:o/(c+126452),g1i:(s-769860)*e/(c+126452),b0s:l/d,b0i:u*e/d,b1s:l/(d+126452),b1i:(u-769860)*e/(d+126452)}}function Ug(e,t){let n=t/360*Math.PI*2,r=Vg(e.r0s,e.r0i,n),i=Vg(e.r1s,e.r1i,n),a=Vg(e.g0s,e.g0i,n),o=Vg(e.g1s,e.g1i,n),s=Vg(e.b0s,e.b0i,n),c=Vg(e.b1s,e.b1i,n);return Math.min(r,i,a,o,s,c)}var Wg=new N({id:`hsluv`,name:`HSLuv`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,100],name:`Saturation`},l:{range:[0,100],name:`Lightness`}},base:kg,gamutSpace:Bm,fromBase(e){let[t,n,r]=[$d(e[0]),$d(e[1]),$d(e[2])],i;return t>99.9999999?(i=0,t=100):t<1e-8?(i=0,t=0):i=n/Ug(Hg(t),r)*100,[r,i,t]},toBase(e){let[t,n,r]=[$d(e[0]),$d(e[1]),$d(e[2])],i;return r>99.9999999?(r=100,i=0):r<1e-8?(r=0,i=0):i=Ug(Hg(r),t)/100*n,[r,i,t]},formats:{color:{id:`--hsluv`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}});Fm[0][0],Fm[0][1],Fm[0][2],Fm[1][0],Fm[1][1],Fm[1][2],Fm[2][0],Fm[2][1],Fm[2][2];function Gg(e,t){return Math.abs(t)/Math.sqrt(e**2+1)}function Kg(e){let t=Gg(e.r0s,e.r0i),n=Gg(e.r1s,e.r1i),r=Gg(e.g0s,e.g0i),i=Gg(e.g1s,e.g1i),a=Gg(e.b0s,e.b0i),o=Gg(e.b1s,e.b1i);return Math.min(t,n,r,i,a,o)}var qg=new N({id:`hpluv`,name:`HPLuv`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,100],name:`Saturation`},l:{range:[0,100],name:`Lightness`}},base:kg,gamutSpace:`self`,fromBase(e){let[t,n,r]=[$d(e[0]),$d(e[1]),$d(e[2])],i;return t>99.9999999?(i=0,t=100):t<1e-8?(i=0,t=0):i=n/Kg(Hg(t))*100,[r,i,t]},toBase(e){let[t,n,r]=[$d(e[0]),$d(e[1]),$d(e[2])],i;return r>99.9999999?(r=100,i=0):r<1e-8?(r=0,i=0):i=Kg(Hg(r))/100*n,[r,i,t]},formats:{color:{id:`--hpluv`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),Jg=new Of({id:`rec2100-linear`,name:`Linear REC.2100`,white:`D65`,toBase:jm.toBase,fromBase:jm.fromBase}),Yg=203,Xg=2610/2**14,Zg=2**14/2610,Qg=2523/2**5,$g=2**5/2523,e_=3424/2**12,t_=2413/2**7,n_=2392/2**7,r_=new Of({id:`rec2100pq`,cssId:`rec2100-pq`,name:`REC.2100-PQ`,base:Jg,toBase(e){return e.map(function(e){return(Math.max(e**$g-e_,0)/(t_-n_*e**$g))**Zg*1e4/Yg})},fromBase(e){return e.map(function(e){let t=Math.max(e*Yg/1e4,0);return((e_+t_*t**Xg)/(1+n_*t**Xg))**Qg})}}),i_=.17883277,a_=.28466892,o_=.55991073,s_=3.7743,c_=new Of({id:`rec2100hlg`,cssId:`rec2100-hlg`,name:`REC.2100-HLG`,referred:`scene`,base:Jg,toBase(e){return e.map(function(e){return e<=.5?e**2/3*s_:(Math.exp((e-o_)/i_)+a_)/12*s_})},fromBase(e){return e.map(function(e){return e/=s_,e<=1/12?sf(3*e,.5):i_*Math.log(12*e-a_)+o_})}}),l_={};ff.add(`chromatic-adaptation-start`,e=>{e.options.method&&(e.M=d_(e.W1,e.W2,e.options.method))}),ff.add(`chromatic-adaptation-end`,e=>{e.M||=d_(e.W1,e.W2,e.options.method)});function u_({id:e,toCone_M:t,fromCone_M:n}){l_[e]=arguments[0]}function d_(e,t,n=`Bradford`){let r=l_[n],[i,a,o]=Kd(r.toCone_M,e),[s,c,l]=Kd(r.toCone_M,t),u=Kd([[s/i,0,0],[0,c/a,0],[0,0,l/o]],r.toCone_M);return Kd(r.fromCone_M,u)}u_({id:`von Kries`,toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]}),u_({id:`Bradford`,toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]}),u_({id:`CAT02`,toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]}),u_({id:`CAT16`,toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]}),Object.assign(_f,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),_f.ACES=[.32168/.33767,1,.34065/.33767];var f_=new Of({id:`acescg`,cssId:`--acescg`,name:`ACEScg`,coords:{r:{range:[0,65504],name:`Red`},g:{range:[0,65504],name:`Green`},b:{range:[0,65504],name:`Blue`}},referred:`scene`,white:_f.ACES,toXYZ_M:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ_M:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]]}),p_=2**-16,m_=-.35828683,h_=(Math.log2(65504)+9.72)/17.52,g_=new Of({id:`acescc`,cssId:`--acescc`,name:`ACEScc`,coords:{r:{range:[m_,h_],name:`Red`},g:{range:[m_,h_],name:`Green`},b:{range:[m_,h_],name:`Blue`}},referred:`scene`,base:f_,toBase(e){return e.map(function(e){return e<=-.3013698630136986?(2**(e*17.52-9.72)-p_)*2:e<h_?2**(e*17.52-9.72):65504})},fromBase(e){return e.map(function(e){return e<=0?(Math.log2(p_)+9.72)/17.52:e<p_?(Math.log2(p_+e*.5)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})}}),__=Object.freeze({__proto__:null,A98RGB:Uh,A98RGB_Linear:Hh,ACEScc:g_,ACEScg:f_,CAM16_JMh:lm,HCT:vm,HPLuv:qg,HSL:zh,HSLuv:Wg,HSV:Bh,HWB:Vh,ICTCP:zp,JzCzHz:Ep,Jzazbz:Tp,LCH:Hf,LCHuv:kg,Lab:zf,Lab_D65:bh,Luv:Og,OKLCH:Zh,OKLab:$f,OKLrCH:yg,OKLrab:vg,Okhsl:_g,Okhsv:Sg,P3:Vm,P3_Linear:Nm,ProPhoto:qh,ProPhoto_Linear:Wh,REC_2020:Mm,REC_2020_Linear:jm,REC_2020_Scene_Referred:Xh,REC_2100_HLG:c_,REC_2100_Linear:Jg,REC_2100_PQ:r_,XYZ_ABS_D65:lp,XYZ_D50:Pf,XYZ_D65:Df,sRGB:Bm,sRGB_Linear:Im}),v_=class e{constructor(...e){let t;if(e.length===1){let n={};typeof e[0]==`object`&&Object.getPrototypeOf(e[0]).constructor===Object&&(e[0]={...e[0]}),t=M(e[0],{parseMeta:n}),n.format&&(this.parseMeta=n)}let n,r,i;t?(n=t.space||t.spaceId,r=t.coords,i=t.alpha):[n,r,i]=e,Object.defineProperty(this,`space`,{value:N.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=r?r.slice():[0,0,0],this.alpha=Qd(i)?i:i===void 0?1:af(0,i,1);for(let e in this.space.coords)Object.defineProperty(this,e,{get:()=>this.get(e),set:t=>this.set(e,t)})}get spaceId(){return this.space.id}clone(){return new e(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=Um(this,...t);return n.color=new e(n.color),n}static get(t,...n){return uf(t,this)?t:new e(t,...n)}static try(t,n){if(uf(t,this))return t;let r=kf(t,n);return r?new e(r):null}static defineFunction(t,n,r=n){let{instance:i=!0,returns:a}=r,o=function(...t){let r=n(...t);if(a===`color`)r=e.get(r);else if(a===`function<color>`){let t=r;r=function(...n){let r=t(...n);return e.get(r)},Object.assign(r,t)}else a===`array<color>`&&(r=r.map(t=>e.get(t)));return r};t in e||(e[t]=o),i&&(e.prototype[t]=function(...e){return o(this,...e)})}static defineFunctions(t){for(let n in t)e.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(e);else for(let n in t)e.defineFunction(n,t[n])}};v_.defineFunctions({get:jf,getAll:Af,set:Nf,setAll:Mf,to:km,equals:Km,inGamut:np,toGamut:Em,distance:ip,deltas:Wm,toString:Am}),Object.assign(v_,{util:df,hooks:ff,WHITES:_f,Space:N,spaces:N.registry,parse:bf,defaults:pf});for(let e of Object.keys(__))N.register(__[e]);for(let e in N.registry)y_(e,N.registry[e]);ff.add(`colorspace-init-end`,e=>{y_(e.id,e),e.aliases?.forEach(t=>{y_(t,e)})});function y_(e,t){let n=e.replace(/-/g,`_`);Object.defineProperty(v_.prototype,n,{get(){let n=this.getAll(e);if(typeof Proxy>`u`)return n;let r=new Proxy(n,{has:(e,n)=>{try{return N.resolveCoord([t,n]),!0}catch{}return Reflect.has(e,n)},get:(e,n,i)=>{if(n&&typeof n!=`symbol`&&!(n in e)&&n in r){let{index:r}=N.resolveCoord([t,n]);if(r>=0)return e[r]}return Reflect.get(e,n,i)},set:(n,r,i,a)=>{if(r&&typeof r!=`symbol`&&!(r in n)||Number(r)>=0){let{index:a}=N.resolveCoord([t,r]);if(a>=0)return n[a]=i,this.setAll(e,n),!0}return Reflect.set(n,r,i,a)}});return r},set(t){this.setAll(e,t)},configurable:!0,enumerable:!0})}v_.extend(Cm),v_.extend({deltaE:kh}),Object.assign(v_,{deltaEMethods:Cm}),v_.extend(Mh),v_.extend({contrast:wh}),v_.extend(Oh),v_.extend(Xm),v_.extend(Rh),v_.extend(Ch);var b_=Symbol(`no update`);function x_(e){return e!==b_}var S_=class extends Ul()(`observable-value-update`){},C_=class extends Ul()(`observable-value-resolve`){},w_=class extends Ul()(`observable-value-error`){},T_=class extends Wl(`observable-destroy`){},E_=class extends Wl(`observable-callback-call`){},D_=class extends Ul()(`observable-params-update`){};Ul()(`observable-interval-run`),Ul()(`observable-interval-skip`),Ul()(`observable-interval-rate-limited`);var O_=class{listenTarget=new Kl;value;equalityCheck;listenerMap=new WeakMap;dispatch(...e){return this.listenTarget.dispatch(...e)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...e){let t=e[0];if(t===b_)return!1;if(!(e.length===2?e[1]:this.equalityCheck)?.(this.value,t)){let e=this.value;return this.value=t,this.listenTarget.dispatch(new S_({detail:[t,e]})),!0}return!1}listen(e,t){let n=e=>t(...e.detail);return this.listenerMap.set(t,n),e&&t(this.value,void 0),this.listenTarget.listen(S_,n)}removeListener(e){let t=this.listenerMap.get(e);return!!t&&this.listenTarget.removeListener(S_,t)}destroy(){this.listenTarget.dispatch(new T_),this.listenTarget.destroy()}listenToEvent(e,t,n){return this.listenTarget.listen(e,t,n)}};function k_(e,t){return Tc(e,t,(e,t)=>A.isFunction(e)&&A.isFunction(t)?!0:A.strictEquals(e,t))}var A_;(function(e){e.Rejected=`rejected`,e.Waiting=`waiting`,e.Resolved=`resolved`})(A_||={});var j_=class extends O_{equalityCheck;waitingForValueDeferredPromise=new ze;lastSetPromise;lastSetId=nl();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(e={}){super(),this.equalityCheck=`equalityCheck`in e?e.equalityCheck:k_,`defaultValue`in e&&this.setValue(e.defaultValue)}setPromise(e){if(e===this.lastSetPromise)return!1;let t=nl();return this.lastSetId=t,this.lastSetPromise=e,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new ze,super.setValue(this.waitingForValueDeferredPromise.promise,A.strictEquals)),e.then(n=>{this.lastSetPromise!==e||this.lastSetId!==t||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==e||this.lastSetId!==t)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});let r=Fe(n);console.error(r),this.rejectValue(r)}),!0}resolveValue(e){return x_(e)||(e=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(e,A.strictEquals):super.setValue(e))?(this.lastResolvedValue=e,this.lastSetId=nl(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(e),this.dispatch(new C_({detail:e})),!0):!1}rejectValue(e){this.waitingForValueDeferredPromise.reject(e),super.setValue(e,A.strictEquals),this.dispatch(new w_({detail:e}))}setValue(e){try{return e instanceof Promise?this.setPromise(e):e instanceof Error?(this.rejectValue(e),!0):x_(e)?this.resolveValue(e):!1}catch(e){return this.rejectValue(Fe(e)),!0}}listen(e,t){return super.listen(e,t)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?A_.Rejected:this.value instanceof Promise?A_.Waiting:A_.Resolved}},M_=class e extends j_{static NotSet=Symbol(`not set`);updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==e.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck=`equalityCheck`in t?t.equalityCheck:k_,this.updateCallback=t.updateCallback,this.internalParams=`defaultParams`in t?t.defaultParams:e.NotSet}updateFromCallback(){if(!this.updateCallback)throw TypeError(`Cannot update value: updateCallback was never set.`);if(this.internalParams===e.NotSet)throw TypeError(`Cannot update value: params were never set.`);try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(e){return this.setValue(Fe(e))}finally{this.dispatch(new E_)}}updateLastParams(t){try{return this.internalParams===e.NotSet||!this.equalityCheck?.(t,this.internalParams)?(this.internalParams=t,this.dispatch(new D_({detail:this.internalParams})),!0):!1}catch(e){return this.setValue(Fe(e)),!1}}update(...[e]){return this.updateLastParams(e)?(this.updateFromCallback(),!0):!1}setParams(e){return this.updateLastParams(e)}forceUpdate(...e){return A.isLengthAtLeast(e,1)&&this.updateLastParams(e[0]),this.updateFromCallback()}};function N_(e){return H_(e)&&!P_(e)&&!K_(e)&&Symbol.asyncIterator in e}function P_(e){return Array.isArray(e)}function F_(e){return typeof e==`bigint`}function I_(e){return typeof e==`boolean`}function L_(e){return e instanceof globalThis.Date}function R_(e){return typeof e==`function`}function z_(e){return H_(e)&&!P_(e)&&!K_(e)&&Symbol.iterator in e}function B_(e){return e===null}function V_(e){return typeof e==`number`}function H_(e){return typeof e==`object`&&!!e}function U_(e){return e instanceof globalThis.RegExp}function W_(e){return typeof e==`string`}function G_(e){return typeof e==`symbol`}function K_(e){return e instanceof globalThis.Uint8Array}function q_(e){return e===void 0}function J_(e){return e.map(e=>$_(e))}function Y_(e){return new Date(e.getTime())}function X_(e){return new Uint8Array(e)}function Z_(e){return new RegExp(e.source,e.flags)}function Q_(e){let t={};for(let n of Object.getOwnPropertyNames(e))t[n]=$_(e[n]);for(let n of Object.getOwnPropertySymbols(e))t[n]=$_(e[n]);return t}function $_(e){return P_(e)?J_(e):L_(e)?Y_(e):K_(e)?X_(e):U_(e)?Z_(e):H_(e)?Q_(e):e}function ev(e){return $_(e)}function tv(e,t){return ev(t===void 0?e:{...t,...e})}function nv(e){return cv(e)&&globalThis.Symbol.asyncIterator in e}function rv(e){return cv(e)&&globalThis.Symbol.iterator in e}function iv(e){return e instanceof globalThis.Promise}function av(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function ov(e){return e instanceof globalThis.Uint8Array}function sv(e,t){return t in e}function cv(e){return typeof e==`object`&&!!e}function lv(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function uv(e){return e===void 0}function dv(e){return e===null}function fv(e){return typeof e==`boolean`}function pv(e){return typeof e==`number`}function mv(e){return globalThis.Number.isInteger(e)}function hv(e){return typeof e==`bigint`}function gv(e){return typeof e==`string`}function _v(e){return typeof e==`function`}function vv(e){return typeof e==`symbol`}function yv(e){return hv(e)||fv(e)||dv(e)||pv(e)||gv(e)||vv(e)||uv(e)}var bv;(function(e){e.InstanceMode=`default`,e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(t,n){return e.ExactOptionalPropertyTypes?n in t:t[n]!==void 0}e.IsExactOptionalProperty=t;function n(t){let n=cv(t);return e.AllowArrayObject?n:n&&!lv(t)}e.IsObjectLike=n;function r(e){return n(e)&&!(e instanceof Date)&&!(e instanceof Uint8Array)}e.IsRecordLike=r;function i(t){return e.AllowNaN?pv(t):Number.isFinite(t)}e.IsNumberLike=i;function a(t){let n=uv(t);return e.AllowNullVoid?n||t===null:n}e.IsVoidLike=a})(bv||={});function xv(e){return globalThis.Object.freeze(e).map(e=>Ev(e))}function Sv(e){return e}function Cv(e){return e}function wv(e){return e}function Tv(e){let t={};for(let n of Object.getOwnPropertyNames(e))t[n]=Ev(e[n]);for(let n of Object.getOwnPropertySymbols(e))t[n]=Ev(e[n]);return globalThis.Object.freeze(t)}function Ev(e){return P_(e)?xv(e):L_(e)?Sv(e):K_(e)?Cv(e):U_(e)?wv(e):H_(e)?Tv(e):e}function P(e,t){let n=t===void 0?e:{...t,...e};switch(bv.InstanceMode){case`freeze`:return Ev(n);case`clone`:return ev(n);default:return n}}var Dv=class extends Error{constructor(e){super(e)}},Ov=Symbol.for(`TypeBox.Transform`),kv=Symbol.for(`TypeBox.Readonly`),Av=Symbol.for(`TypeBox.Optional`),jv=Symbol.for(`TypeBox.Hint`),F=Symbol.for(`TypeBox.Kind`);function Mv(e){return H_(e)&&e[kv]===`Readonly`}function Nv(e){return H_(e)&&e[Av]===`Optional`}function Pv(e){return qv(e,`Any`)}function Fv(e){return qv(e,`Argument`)}function Iv(e){return qv(e,`Array`)}function Lv(e){return qv(e,`AsyncIterator`)}function Rv(e){return qv(e,`BigInt`)}function zv(e){return qv(e,`Boolean`)}function Bv(e){return qv(e,`Computed`)}function Vv(e){return qv(e,`Constructor`)}function Hv(e){return qv(e,`Date`)}function Uv(e){return qv(e,`Function`)}function Wv(e){return qv(e,`Integer`)}function Gv(e){return qv(e,`Intersect`)}function Kv(e){return qv(e,`Iterator`)}function qv(e,t){return H_(e)&&F in e&&e[F]===t}function Jv(e){return I_(e)||V_(e)||W_(e)}function Yv(e){return qv(e,`Literal`)}function Xv(e){return qv(e,`MappedKey`)}function Zv(e){return qv(e,`MappedResult`)}function Qv(e){return qv(e,`Never`)}function $v(e){return qv(e,`Not`)}function ey(e){return qv(e,`Null`)}function ty(e){return qv(e,`Number`)}function ny(e){return qv(e,`Object`)}function ry(e){return qv(e,`Promise`)}function iy(e){return qv(e,`Record`)}function ay(e){return qv(e,`Ref`)}function oy(e){return qv(e,`RegExp`)}function sy(e){return qv(e,`String`)}function cy(e){return qv(e,`Symbol`)}function ly(e){return qv(e,`TemplateLiteral`)}function uy(e){return qv(e,`This`)}function dy(e){return H_(e)&&Ov in e}function fy(e){return qv(e,`Tuple`)}function py(e){return qv(e,`Undefined`)}function my(e){return qv(e,`Union`)}function hy(e){return qv(e,`Uint8Array`)}function gy(e){return qv(e,`Unknown`)}function _y(e){return qv(e,`Unsafe`)}function vy(e){return qv(e,`Void`)}function yy(e){return H_(e)&&F in e&&W_(e[F])}function by(e){return Pv(e)||Fv(e)||Iv(e)||zv(e)||Rv(e)||Lv(e)||Bv(e)||Vv(e)||Hv(e)||Uv(e)||Wv(e)||Gv(e)||Kv(e)||Yv(e)||Xv(e)||Zv(e)||Qv(e)||$v(e)||ey(e)||ty(e)||ny(e)||ry(e)||iy(e)||ay(e)||oy(e)||sy(e)||cy(e)||ly(e)||uy(e)||fy(e)||py(e)||my(e)||hy(e)||gy(e)||_y(e)||vy(e)||yy(e)}var xy=`Argument.Any.Array.AsyncIterator.BigInt.Boolean.Computed.Constructor.Date.Enum.Function.Integer.Intersect.Iterator.Literal.MappedKey.MappedResult.Not.Null.Number.Object.Promise.Record.Ref.RegExp.String.Symbol.TemplateLiteral.This.Tuple.Undefined.Union.Uint8Array.Unknown.Void`.split(`.`);function Sy(e){try{return new RegExp(e),!0}catch{return!1}}function Cy(e){if(!W_(e))return!1;for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(n>=7&&n<=13||n===27||n===127)return!1}return!0}function wy(e){return Dy(e)||Cb(e)}function Ty(e){return q_(e)||F_(e)}function Ey(e){return q_(e)||V_(e)}function Dy(e){return q_(e)||I_(e)}function Oy(e){return q_(e)||W_(e)}function ky(e){return q_(e)||W_(e)&&Cy(e)&&Sy(e)}function Ay(e){return q_(e)||W_(e)&&Cy(e)}function jy(e){return q_(e)||Cb(e)}function My(e){return H_(e)&&e[Av]===`Optional`}function Ny(e){return qy(e,`Any`)&&Oy(e.$id)}function Py(e){return qy(e,`Argument`)&&V_(e.index)}function Fy(e){return qy(e,`Array`)&&e.type===`array`&&Oy(e.$id)&&Cb(e.items)&&Ey(e.minItems)&&Ey(e.maxItems)&&Dy(e.uniqueItems)&&jy(e.contains)&&Ey(e.minContains)&&Ey(e.maxContains)}function Iy(e){return qy(e,`AsyncIterator`)&&e.type===`AsyncIterator`&&Oy(e.$id)&&Cb(e.items)}function Ly(e){return qy(e,`BigInt`)&&e.type===`bigint`&&Oy(e.$id)&&Ty(e.exclusiveMaximum)&&Ty(e.exclusiveMinimum)&&Ty(e.maximum)&&Ty(e.minimum)&&Ty(e.multipleOf)}function Ry(e){return qy(e,`Boolean`)&&e.type===`boolean`&&Oy(e.$id)}function zy(e){return qy(e,`Computed`)&&W_(e.target)&&P_(e.parameters)&&e.parameters.every(e=>Cb(e))}function By(e){return qy(e,`Constructor`)&&e.type===`Constructor`&&Oy(e.$id)&&P_(e.parameters)&&e.parameters.every(e=>Cb(e))&&Cb(e.returns)}function Vy(e){return qy(e,`Date`)&&e.type===`Date`&&Oy(e.$id)&&Ey(e.exclusiveMaximumTimestamp)&&Ey(e.exclusiveMinimumTimestamp)&&Ey(e.maximumTimestamp)&&Ey(e.minimumTimestamp)&&Ey(e.multipleOfTimestamp)}function Hy(e){return qy(e,`Function`)&&e.type===`Function`&&Oy(e.$id)&&P_(e.parameters)&&e.parameters.every(e=>Cb(e))&&Cb(e.returns)}function Uy(e){return qy(e,`Integer`)&&e.type===`integer`&&Oy(e.$id)&&Ey(e.exclusiveMaximum)&&Ey(e.exclusiveMinimum)&&Ey(e.maximum)&&Ey(e.minimum)&&Ey(e.multipleOf)}function Wy(e){return H_(e)&&Object.entries(e).every(([e,t])=>Cy(e)&&Cb(t))}function Gy(e){return qy(e,`Intersect`)&&!(W_(e.type)&&e.type!==`object`)&&P_(e.allOf)&&e.allOf.every(e=>Cb(e)&&!mb(e))&&Oy(e.type)&&(Dy(e.unevaluatedProperties)||jy(e.unevaluatedProperties))&&Oy(e.$id)}function Ky(e){return qy(e,`Iterator`)&&e.type===`Iterator`&&Oy(e.$id)&&Cb(e.items)}function qy(e,t){return H_(e)&&F in e&&e[F]===t}function Jy(e){return Zy(e)&&W_(e.const)}function Yy(e){return Zy(e)&&V_(e.const)}function Xy(e){return Zy(e)&&I_(e.const)}function Zy(e){return qy(e,`Literal`)&&Oy(e.$id)&&Qy(e.const)}function Qy(e){return I_(e)||V_(e)||W_(e)}function $y(e){return qy(e,`MappedKey`)&&P_(e.keys)&&e.keys.every(e=>V_(e)||W_(e))}function eb(e){return qy(e,`MappedResult`)&&Wy(e.properties)}function tb(e){return qy(e,`Never`)&&H_(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function nb(e){return qy(e,`Not`)&&Cb(e.not)}function rb(e){return qy(e,`Null`)&&e.type===`null`&&Oy(e.$id)}function ib(e){return qy(e,`Number`)&&e.type===`number`&&Oy(e.$id)&&Ey(e.exclusiveMaximum)&&Ey(e.exclusiveMinimum)&&Ey(e.maximum)&&Ey(e.minimum)&&Ey(e.multipleOf)}function ab(e){return qy(e,`Object`)&&e.type===`object`&&Oy(e.$id)&&Wy(e.properties)&&wy(e.additionalProperties)&&Ey(e.minProperties)&&Ey(e.maxProperties)}function ob(e){return qy(e,`Promise`)&&e.type===`Promise`&&Oy(e.$id)&&Cb(e.item)}function sb(e){return qy(e,`Record`)&&e.type===`object`&&Oy(e.$id)&&wy(e.additionalProperties)&&H_(e.patternProperties)&&(e=>{let t=Object.getOwnPropertyNames(e.patternProperties);return t.length===1&&Sy(t[0])&&H_(e.patternProperties)&&Cb(e.patternProperties[t[0]])})(e)}function cb(e){return qy(e,`Ref`)&&Oy(e.$id)&&W_(e.$ref)}function lb(e){return qy(e,`RegExp`)&&Oy(e.$id)&&W_(e.source)&&W_(e.flags)&&Ey(e.maxLength)&&Ey(e.minLength)}function ub(e){return qy(e,`String`)&&e.type===`string`&&Oy(e.$id)&&Ey(e.minLength)&&Ey(e.maxLength)&&ky(e.pattern)&&Ay(e.format)}function db(e){return qy(e,`Symbol`)&&e.type===`symbol`&&Oy(e.$id)}function fb(e){return qy(e,`TemplateLiteral`)&&e.type===`string`&&W_(e.pattern)&&e.pattern[0]===`^`&&e.pattern[e.pattern.length-1]===`$`}function pb(e){return qy(e,`This`)&&Oy(e.$id)&&W_(e.$ref)}function mb(e){return H_(e)&&Ov in e}function hb(e){return qy(e,`Tuple`)&&e.type===`array`&&Oy(e.$id)&&V_(e.minItems)&&V_(e.maxItems)&&e.minItems===e.maxItems&&(q_(e.items)&&q_(e.additionalItems)&&e.minItems===0||P_(e.items)&&e.items.every(e=>Cb(e)))}function gb(e){return qy(e,`Undefined`)&&e.type===`undefined`&&Oy(e.$id)}function _b(e){return qy(e,`Union`)&&Oy(e.$id)&&H_(e)&&P_(e.anyOf)&&e.anyOf.every(e=>Cb(e))}function vb(e){return qy(e,`Uint8Array`)&&e.type===`Uint8Array`&&Oy(e.$id)&&Ey(e.minByteLength)&&Ey(e.maxByteLength)}function yb(e){return qy(e,`Unknown`)&&Oy(e.$id)}function bb(e){return qy(e,`Unsafe`)}function xb(e){return qy(e,`Void`)&&e.type===`void`&&Oy(e.$id)}function Sb(e){return H_(e)&&F in e&&W_(e[F])&&!xy.includes(e[F])}function Cb(e){return H_(e)&&(Ny(e)||Py(e)||Fy(e)||Ry(e)||Ly(e)||Iy(e)||zy(e)||By(e)||Vy(e)||Hy(e)||Uy(e)||Gy(e)||Ky(e)||Zy(e)||$y(e)||eb(e)||tb(e)||nb(e)||rb(e)||ib(e)||ab(e)||ob(e)||sb(e)||cb(e)||lb(e)||ub(e)||db(e)||fb(e)||pb(e)||hb(e)||gb(e)||_b(e)||vb(e)||yb(e)||bb(e)||xb(e)||Sb(e))}var wb=`(true|false)`,Tb=`(0|[1-9][0-9]*)`,Eb=`(.*)`,Db=`(?!.*)`;`${wb}`;var Ob=`^${Tb}$`,kb=`^${Eb}$`,Ab=`^${Db}$`,jb=new Map;function Mb(e){return jb.has(e)}function Nb(e){return jb.get(e)}var Pb=new Map;function Fb(e){return Pb.has(e)}function Ib(e,t){Pb.set(e,t)}function Lb(e){return Pb.get(e)}function Rb(e,t){return e.includes(t)}function zb(e){return[...new Set(e)]}function Bb(e,t){return e.filter(e=>t.includes(e))}function Vb(e,t){return e.reduce((e,t)=>Bb(e,t),t)}function Hb(e){return e.length===1?e[0]:e.length>1?Vb(e.slice(1),e[0]):[]}function Ub(e){let t=[];for(let n of e)t.push(...n);return t}function Wb(e){return P({[F]:`Any`},e)}function Gb(e,t){return P({[F]:`Array`,type:`array`,items:e},t)}function Kb(e){return P({[F]:`Argument`,index:e})}function qb(e,t){return P({[F]:`AsyncIterator`,type:`AsyncIterator`,items:e},t)}function Jb(e,t,n){return P({[F]:`Computed`,target:e,parameters:t},n)}function Yb(e,t){let{[t]:n,...r}=e;return r}function Xb(e,t){return t.reduce((e,t)=>Yb(e,t),e)}function Zb(e){return P({[F]:`Never`,not:{}},e)}function Qb(e){return P({[F]:`MappedResult`,properties:e})}function $b(e,t,n){return P({[F]:`Constructor`,type:`Constructor`,parameters:e,returns:t},n)}function ex(e,t,n){return P({[F]:`Function`,type:`Function`,parameters:e,returns:t},n)}function tx(e,t){return P({[F]:`Union`,anyOf:e},t)}function nx(e){return e.some(e=>Nv(e))}function rx(e){return e.map(e=>Nv(e)?ix(e):e)}function ix(e){return Xb(e,[Av])}function ax(e,t){return nx(e)?GS(tx(rx(e),t)):tx(rx(e),t)}function ox(e,t){return e.length===1?P(e[0],t):e.length===0?Zb(t):ax(e,t)}function sx(e,t){return e.length===0?Zb(t):e.length===1?P(e[0],t):tx(e,t)}var cx=class extends Dv{};function lx(e){return e.replace(/\\\$/g,`$`).replace(/\\\*/g,`*`).replace(/\\\^/g,`^`).replace(/\\\|/g,`|`).replace(/\\\(/g,`(`).replace(/\\\)/g,`)`)}function ux(e,t,n){return e[t]===n&&e.charCodeAt(t-1)!==92}function dx(e,t){return ux(e,t,`(`)}function fx(e,t){return ux(e,t,`)`)}function px(e,t){return ux(e,t,`|`)}function mx(e){if(!(dx(e,0)&&fx(e,e.length-1)))return!1;let t=0;for(let n=0;n<e.length;n++)if(dx(e,n)&&(t+=1),fx(e,n)&&--t,t===0&&n!==e.length-1)return!1;return!0}function hx(e){return e.slice(1,e.length-1)}function gx(e){let t=0;for(let n=0;n<e.length;n++)if(dx(e,n)&&(t+=1),fx(e,n)&&--t,px(e,n)&&t===0)return!0;return!1}function _x(e){for(let t=0;t<e.length;t++)if(dx(e,t))return!0;return!1}function vx(e){let[t,n]=[0,0],r=[];for(let i=0;i<e.length;i++)if(dx(e,i)&&(t+=1),fx(e,i)&&--t,px(e,i)&&t===0){let t=e.slice(n,i);t.length>0&&r.push(bx(t)),n=i+1}let i=e.slice(n);return i.length>0&&r.push(bx(i)),r.length===0?{type:`const`,const:``}:r.length===1?r[0]:{type:`or`,expr:r}}function yx(e){function t(e,t){if(!dx(e,t))throw new cx(`TemplateLiteralParser: Index must point to open parens`);let n=0;for(let r=t;r<e.length;r++)if(dx(e,r)&&(n+=1),fx(e,r)&&--n,n===0)return[t,r];throw new cx(`TemplateLiteralParser: Unclosed group parens in expression`)}function n(e,t){for(let n=t;n<e.length;n++)if(dx(e,n))return[t,n];return[t,e.length]}let r=[];for(let i=0;i<e.length;i++)if(dx(e,i)){let[n,a]=t(e,i),o=e.slice(n,a+1);r.push(bx(o)),i=a}else{let[t,a]=n(e,i),o=e.slice(t,a);o.length>0&&r.push(bx(o)),i=a-1}return r.length===0?{type:`const`,const:``}:r.length===1?r[0]:{type:`and`,expr:r}}function bx(e){return mx(e)?bx(hx(e)):gx(e)?vx(e):_x(e)?yx(e):{type:`const`,const:lx(e)}}function xx(e){return bx(e.slice(1,e.length-1))}var Sx=class extends Dv{};function Cx(e){return e.type===`or`&&e.expr.length===2&&e.expr[0].type===`const`&&e.expr[0].const===`0`&&e.expr[1].type===`const`&&e.expr[1].const===`[1-9][0-9]*`}function wx(e){return e.type===`or`&&e.expr.length===2&&e.expr[0].type===`const`&&e.expr[0].const===`true`&&e.expr[1].type===`const`&&e.expr[1].const===`false`}function Tx(e){return e.type===`const`&&e.const===`.*`}function Ex(e){return Cx(e)||Tx(e)?!1:wx(e)?!0:e.type===`and`||e.type===`or`?e.expr.every(e=>Ex(e)):e.type===`const`?!0:(()=>{throw new Sx(`Unknown expression type`)})()}function Dx(e){return Ex(xx(e.pattern))}var Ox=class extends Dv{};function*kx(e){if(e.length===1)return yield*e[0];for(let t of e[0])for(let n of kx(e.slice(1)))yield`${t}${n}`}function*Ax(e){return yield*kx(e.expr.map(e=>[...Nx(e)]))}function*jx(e){for(let t of e.expr)yield*Nx(t)}function*Mx(e){return yield e.const}function*Nx(e){return e.type===`and`?yield*Ax(e):e.type===`or`?yield*jx(e):e.type===`const`?yield*Mx(e):(()=>{throw new Ox(`Unknown expression`)})()}function Px(e){let t=xx(e.pattern);return Ex(t)?[...Nx(t)]:[]}function Fx(e,t){return P({[F]:`Literal`,const:e,type:typeof e},t)}function Ix(e){return P({[F]:`Boolean`,type:`boolean`},e)}function Lx(e){return P({[F]:`BigInt`,type:`bigint`},e)}function Rx(e){return P({[F]:`Number`,type:`number`},e)}function zx(e){return P({[F]:`String`,type:`string`},e)}function*Bx(e){let t=e.trim().replace(/"|'/g,``);return t===`boolean`?yield Ix():t===`number`?yield Rx():t===`bigint`?yield Lx():t===`string`?yield zx():yield(()=>{let e=t.split(`|`).map(e=>Fx(e.trim()));return e.length===0?Zb():e.length===1?e[0]:ox(e)})()}function*Vx(e){if(e[1]!==`{`)return yield*[Fx(`$`),...Hx(e.slice(1))];for(let t=2;t<e.length;t++)if(e[t]===`}`){let n=Bx(e.slice(2,t)),r=Hx(e.slice(t+1));return yield*[...n,...r]}yield Fx(e)}function*Hx(e){for(let t=0;t<e.length;t++)if(e[t]===`$`)return yield*[Fx(e.slice(0,t)),...Vx(e.slice(t))];yield Fx(e)}function Ux(e){return[...Hx(e)]}var Wx=class extends Dv{};function Gx(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function Kx(e,t){return ly(e)?e.pattern.slice(1,e.pattern.length-1):my(e)?`(${e.anyOf.map(e=>Kx(e,t)).join(`|`)})`:ty(e)||Wv(e)||Rv(e)?`${t}${Tb}`:sy(e)?`${t}${Eb}`:Yv(e)?`${t}${Gx(e.const.toString())}`:zv(e)?`${t}${wb}`:(()=>{throw new Wx(`Unexpected Kind '${e[F]}'`)})()}function qx(e){return`^${e.map(e=>Kx(e,``)).join(``)}\$`}function Jx(e){return ox(Px(e).map(e=>Fx(e)))}function Yx(e,t){let n=W_(e)?qx(Ux(e)):qx(e);return P({[F]:`TemplateLiteral`,type:`string`,pattern:n},t)}function Xx(e){return Px(e).map(e=>e.toString())}function Zx(e){let t=[];for(let n of e)t.push(...$x(n));return t}function Qx(e){return[e.toString()]}function $x(e){return[...new Set(ly(e)?Xx(e):my(e)?Zx(e.anyOf):Yv(e)?Qx(e.const):ty(e)||Wv(e)?[`[number]`]:[])]}function eS(e,t,n){let r={};for(let i of Object.getOwnPropertyNames(t))r[i]=mS(e,$x(t[i]),n);return r}function tS(e,t,n){return eS(e,t.properties,n)}function nS(e,t,n){return Qb(tS(e,t,n))}function rS(e,t){return e.map(e=>dS(e,t))}function iS(e){return e.filter(e=>!Qv(e))}function aS(e,t){return eC(iS(rS(e,t)))}function oS(e){return e.some(e=>Qv(e))?[]:e}function sS(e,t){return ox(oS(rS(e,t)))}function cS(e,t){return t in e?e[t]:t===`[number]`?ox(e):Zb()}function lS(e,t){return t===`[number]`?e:Zb()}function uS(e,t){return t in e?e[t]:Zb()}function dS(e,t){return Gv(e)?aS(e.allOf,t):my(e)?sS(e.anyOf,t):fy(e)?cS(e.items??[],t):Iv(e)?lS(e.items,t):ny(e)?uS(e.properties,t):Zb()}function fS(e,t){return t.map(t=>dS(e,t))}function pS(e,t){return ox(fS(e,t))}function mS(e,t,n){if(ay(e)||ay(t)){if(!by(e)||!by(t))throw new Dv(`Index types using Ref parameters require both Type and Key to be of TSchema`);return Jb(`Index`,[e,t])}return Zv(t)?nS(e,t,n):Xv(t)?vS(e,t,n):P(by(t)?pS(e,$x(t)):pS(e,t),n)}function hS(e,t,n){return{[t]:mS(e,[t],ev(n))}}function gS(e,t,n){return t.reduce((t,r)=>({...t,...hS(e,r,n)}),{})}function _S(e,t,n){return gS(e,t.keys,n)}function vS(e,t,n){return Qb(_S(e,t,n))}function yS(e,t){return P({[F]:`Iterator`,type:`Iterator`,items:e},t)}function bS(e){return globalThis.Object.keys(e).filter(t=>!Nv(e[t]))}function xS(e,t){let n=bS(e);return P(n.length>0?{[F]:`Object`,type:`object`,required:n,properties:e}:{[F]:`Object`,type:`object`,properties:e},t)}var SS=xS;function CS(e,t){return P({[F]:`Promise`,type:`Promise`,item:e},t)}function wS(e){return P(Xb(e,[kv]))}function TS(e){return P({...e,[kv]:`Readonly`})}function ES(e,t){return t===!1?wS(e):TS(e)}function DS(e,t){let n=t??!0;return Zv(e)?AS(e,n):ES(e,n)}function OS(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=DS(e[r],t);return n}function kS(e,t){return OS(e.properties,t)}function AS(e,t){return Qb(kS(e,t))}function jS(e,t){return P(e.length>0?{[F]:`Tuple`,type:`array`,items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[F]:`Tuple`,type:`array`,minItems:e.length,maxItems:e.length},t)}function MS(e,t){return e in t?zS(e,t[e]):Qb(t)}function NS(e){return{[e]:Fx(e)}}function PS(e){let t={};for(let n of e)t[n]=Fx(n);return t}function FS(e,t){return Rb(t,e)?NS(e):PS(t)}function IS(e,t){return MS(e,FS(e,t))}function LS(e,t){return t.map(t=>zS(e,t))}function RS(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(t))n[r]=zS(e,t[r]);return n}function zS(e,t){let n={...t};return Nv(t)?GS(zS(e,Xb(t,[Av]))):Mv(t)?DS(zS(e,Xb(t,[kv]))):Zv(t)?MS(e,t.properties):Xv(t)?IS(e,t.keys):Vv(t)?$b(LS(e,t.parameters),zS(e,t.returns),n):Uv(t)?ex(LS(e,t.parameters),zS(e,t.returns),n):Lv(t)?qb(zS(e,t.items),n):Kv(t)?yS(zS(e,t.items),n):Gv(t)?tC(LS(e,t.allOf),n):my(t)?sx(LS(e,t.anyOf),n):fy(t)?jS(LS(e,t.items??[]),n):ny(t)?SS(RS(e,t.properties),n):Iv(t)?Gb(zS(e,t.items),n):ry(t)?CS(zS(e,t.item),n):t}function BS(e,t){let n={};for(let r of e)n[r]=zS(r,t);return n}function VS(e,t,n){let r=by(e)?$x(e):e;return SS(BS(r,t({[F]:`MappedKey`,keys:r})),n)}function HS(e){return P(Xb(e,[Av]))}function US(e){return P({...e,[Av]:`Optional`})}function WS(e,t){return t===!1?HS(e):US(e)}function GS(e,t){let n=t??!0;return Zv(e)?JS(e,n):WS(e,n)}function KS(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=GS(e[r],t);return n}function qS(e,t){return KS(e.properties,t)}function JS(e,t){return Qb(qS(e,t))}function YS(e,t={}){let n=e.every(e=>ny(e)),r=by(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return P(t.unevaluatedProperties===!1||by(t.unevaluatedProperties)||n?{...r,[F]:`Intersect`,type:`object`,allOf:e}:{...r,[F]:`Intersect`,allOf:e},t)}function XS(e){return e.every(e=>Nv(e))}function ZS(e){return Xb(e,[Av])}function QS(e){return e.map(e=>Nv(e)?ZS(e):e)}function $S(e,t){return XS(e)?GS(YS(QS(e),t)):YS(QS(e),t)}function eC(e,t={}){if(e.length===1)return P(e[0],t);if(e.length===0)return Zb(t);if(e.some(e=>dy(e)))throw Error(`Cannot intersect transform types`);return $S(e,t)}function tC(e,t){if(e.length===1)return P(e[0],t);if(e.length===0)return Zb(t);if(e.some(e=>dy(e)))throw Error(`Cannot intersect transform types`);return YS(e,t)}function nC(...e){let[t,n]=typeof e[0]==`string`?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!=`string`)throw new Dv(`Ref: $ref must be a string`);return P({[F]:`Ref`,$ref:t},n)}function rC(e,t){return Jb(`Awaited`,[Jb(e,t)])}function iC(e){return Jb(`Awaited`,[nC(e)])}function aC(e){return tC(cC(e))}function oC(e){return sx(cC(e))}function sC(e){return lC(e)}function cC(e){return e.map(e=>lC(e))}function lC(e,t){return P(Bv(e)?rC(e.target,e.parameters):Gv(e)?aC(e.allOf):my(e)?oC(e.anyOf):ry(e)?sC(e.item):ay(e)?iC(e.$ref):e,t)}function uC(e){let t=[];for(let n of e)t.push(_C(n));return t}function dC(e){return Ub(uC(e))}function fC(e){return Hb(uC(e))}function pC(e){return e.map((e,t)=>t.toString())}function mC(e){return[`[number]`]}function hC(e){return globalThis.Object.getOwnPropertyNames(e)}function gC(e){return vC?globalThis.Object.getOwnPropertyNames(e).map(e=>e[0]===`^`&&e[e.length-1]===`$`?e.slice(1,e.length-1):e):[]}function _C(e){return Gv(e)?dC(e.allOf):my(e)?fC(e.anyOf):fy(e)?pC(e.items??[]):Iv(e)?mC(e.items):ny(e)?hC(e.properties):iy(e)?gC(e.patternProperties):[]}var vC=!1;function yC(e){vC=!0;let t=_C(e);return vC=!1,`^(${t.map(e=>`(${e})`).join(`|`)})$`}function bC(e,t){return Jb(`KeyOf`,[Jb(e,t)])}function xC(e){return Jb(`KeyOf`,[nC(e)])}function SC(e,t){return P(ox(CC(_C(e))),t)}function CC(e){return e.map(e=>e===`[number]`?Rx():Fx(e))}function wC(e,t){return Bv(e)?bC(e.target,e.parameters):ay(e)?xC(e.$ref):Zv(e)?DC(e,t):SC(e,t)}function TC(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=wC(e[r],ev(t));return n}function EC(e,t){return TC(e.properties,t)}function DC(e,t){return Qb(EC(e,t))}function OC(e){let t=_C(e),n=fS(e,t);return t.map((e,r)=>[t[r],n[r]])}function kC(e){let t=[];for(let n of e)t.push(..._C(n));return zb(t)}function AC(e){return e.filter(e=>!Qv(e))}function jC(e,t){let n=[];for(let r of e)n.push(...fS(r,[t]));return AC(n)}function MC(e,t){let n={};for(let r of t)n[r]=eC(jC(e,r));return n}function NC(e,t){return SS(MC(e,kC(e)),t)}function PC(e){return P({[F]:`Date`,type:`Date`},e)}function FC(e){return P({[F]:`Null`,type:`null`},e)}function IC(e){return P({[F]:`Symbol`,type:`symbol`},e)}function LC(e){return P({[F]:`Undefined`,type:`undefined`},e)}function RC(e){return P({[F]:`Uint8Array`,type:`Uint8Array`},e)}function zC(e){return P({[F]:`Unknown`},e)}function BC(e){return e.map(e=>UC(e,!1))}function VC(e){let t={};for(let n of globalThis.Object.getOwnPropertyNames(e))t[n]=DS(UC(e[n],!1));return t}function HC(e,t){return t===!0?e:DS(e)}function UC(e,t){return N_(e)||z_(e)?HC(Wb(),t):P_(e)?DS(jS(BC(e))):K_(e)?RC():L_(e)?PC():H_(e)?HC(SS(VC(e)),t):R_(e)?HC(ex([],zC()),t):q_(e)?LC():B_(e)?FC():G_(e)?IC():F_(e)?Lx():V_(e)||I_(e)||W_(e)?Fx(e):SS({})}function WC(e,t){return P(UC(e,!0),t)}function GC(e,t){return Vv(e)?jS(e.parameters,t):Zb(t)}function KC(e,t){if(q_(e))throw Error(`Enum undefined or empty`);let n=globalThis.Object.getOwnPropertyNames(e).filter(e=>isNaN(e)).map(t=>e[t]);return sx([...new Set(n)].map(e=>Fx(e)),{...t,[jv]:`Enum`})}var qC=class extends Dv{},I;(function(e){e[e.Union=0]=`Union`,e[e.True=1]=`True`,e[e.False=2]=`False`})(I||={});function JC(e){return e===I.False?e:I.True}function YC(e){throw new qC(e)}function XC(e){return tb(e)||Gy(e)||_b(e)||yb(e)||Ny(e)}function ZC(e,t){return tb(t)?hw(e,t):Gy(t)?dw(e,t):_b(t)?Qw(e,t):yb(t)?eT(e,t):Ny(t)?QC(e,t):YC(`StructuralRight`)}function QC(e,t){return I.True}function $C(e,t){return Gy(t)?dw(e,t):_b(t)&&t.anyOf.some(e=>Ny(e)||yb(e))?I.True:_b(t)?I.Union:yb(t)||Ny(t)?I.True:I.Union}function ew(e,t){return yb(e)?I.False:Ny(e)?I.Union:tb(e)?I.True:I.False}function tw(e,t){return ab(t)&&Mw(t)?I.True:XC(t)?ZC(e,t):Fy(t)?JC(iT(e.items,t.items)):I.False}function nw(e,t){return XC(t)?ZC(e,t):Iy(t)?JC(iT(e.items,t.items)):I.False}function rw(e,t){return XC(t)?ZC(e,t):ab(t)?Fw(e,t):sb(t)?Bw(e,t):Ly(t)?I.True:I.False}function iw(e,t){return Xy(e)||Ry(e)?I.True:I.False}function aw(e,t){return XC(t)?ZC(e,t):ab(t)?Fw(e,t):sb(t)?Bw(e,t):Ry(t)?I.True:I.False}function ow(e,t){return XC(t)?ZC(e,t):ab(t)?Fw(e,t):By(t)?e.parameters.length>t.parameters.length?I.False:e.parameters.every((e,n)=>JC(iT(t.parameters[n],e))===I.True)?JC(iT(e.returns,t.returns)):I.False:I.False}function sw(e,t){return XC(t)?ZC(e,t):ab(t)?Fw(e,t):sb(t)?Bw(e,t):Vy(t)?I.True:I.False}function cw(e,t){return XC(t)?ZC(e,t):ab(t)?Fw(e,t):Hy(t)?e.parameters.length>t.parameters.length?I.False:e.parameters.every((e,n)=>JC(iT(t.parameters[n],e))===I.True)?JC(iT(e.returns,t.returns)):I.False:I.False}function lw(e,t){return Zy(e)&&V_(e.const)||ib(e)||Uy(e)?I.True:I.False}function uw(e,t){return Uy(t)||ib(t)?I.True:XC(t)?ZC(e,t):ab(t)?Fw(e,t):sb(t)?Bw(e,t):I.False}function dw(e,t){return t.allOf.every(t=>iT(e,t)===I.True)?I.True:I.False}function fw(e,t){return e.allOf.some(e=>iT(e,t)===I.True)?I.True:I.False}function pw(e,t){return XC(t)?ZC(e,t):Ky(t)?JC(iT(e.items,t.items)):I.False}function mw(e,t){return Zy(t)&&t.const===e.const?I.True:XC(t)?ZC(e,t):ab(t)?Fw(e,t):sb(t)?Bw(e,t):ub(t)?Uw(e,t):ib(t)?bw(e,t):Uy(t)?lw(e,t):Ry(t)?iw(e,t):I.False}function hw(e,t){return I.False}function gw(e,t){return I.True}function _w(e){let[t,n]=[e,0];for(;nb(t);)t=t.not,n+=1;return n%2==0?t:zC()}function vw(e,t){return nb(e)?iT(_w(e),t):nb(t)?iT(e,_w(t)):YC(`Invalid fallthrough for Not`)}function yw(e,t){return XC(t)?ZC(e,t):ab(t)?Fw(e,t):sb(t)?Bw(e,t):rb(t)?I.True:I.False}function bw(e,t){return Yy(e)||ib(e)||Uy(e)?I.True:I.False}function xw(e,t){return XC(t)?ZC(e,t):ab(t)?Fw(e,t):sb(t)?Bw(e,t):Uy(t)||ib(t)?I.True:I.False}function Sw(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function Cw(e){return Mw(e)}function ww(e){return Sw(e,0)||Sw(e,1)&&`description`in e.properties&&_b(e.properties.description)&&e.properties.description.anyOf.length===2&&(ub(e.properties.description.anyOf[0])&&gb(e.properties.description.anyOf[1])||ub(e.properties.description.anyOf[1])&&gb(e.properties.description.anyOf[0]))}function Tw(e){return Sw(e,0)}function Ew(e){return Sw(e,0)}function Dw(e){return Sw(e,0)}function Ow(e){return Sw(e,0)}function kw(e){return Mw(e)}function Aw(e){let t=Rx();return Sw(e,0)||Sw(e,1)&&`length`in e.properties&&JC(iT(e.properties.length,t))===I.True}function jw(e){return Sw(e,0)}function Mw(e){let t=Rx();return Sw(e,0)||Sw(e,1)&&`length`in e.properties&&JC(iT(e.properties.length,t))===I.True}function Nw(e){let t=ex([Wb()],Wb());return Sw(e,0)||Sw(e,1)&&`then`in e.properties&&JC(iT(e.properties.then,t))===I.True}function Pw(e,t){return iT(e,t)===I.False||My(e)&&!My(t)?I.False:I.True}function Fw(e,t){return yb(e)?I.False:Ny(e)?I.Union:tb(e)||Jy(e)&&Cw(t)||Yy(e)&&Tw(t)||Xy(e)&&Ew(t)||db(e)&&ww(t)||Ly(e)&&Dw(t)||ub(e)&&Cw(t)||db(e)&&ww(t)||ib(e)&&Tw(t)||Uy(e)&&Tw(t)||Ry(e)&&Ew(t)||vb(e)&&kw(t)||Vy(e)&&Ow(t)||By(e)&&jw(t)||Hy(e)&&Aw(t)?I.True:sb(e)&&ub(Rw(e))?t[jv]===`Record`?I.True:I.False:sb(e)&&ib(Rw(e))&&Sw(t,0)?I.True:I.False}function Iw(e,t){return XC(t)?ZC(e,t):sb(t)?Bw(e,t):ab(t)?(()=>{for(let n of Object.getOwnPropertyNames(t.properties)){if(!(n in e.properties)&&!My(t.properties[n]))return I.False;if(My(t.properties[n]))return I.True;if(Pw(e.properties[n],t.properties[n])===I.False)return I.False}return I.True})():I.False}function Lw(e,t){return XC(t)?ZC(e,t):ab(t)&&Nw(t)?I.True:ob(t)?JC(iT(e.item,t.item)):I.False}function Rw(e){return Ob in e.patternProperties?Rx():kb in e.patternProperties?zx():YC(`Unknown record key pattern`)}function zw(e){return Ob in e.patternProperties?e.patternProperties[Ob]:kb in e.patternProperties?e.patternProperties[kb]:YC(`Unable to get record value schema`)}function Bw(e,t){let[n,r]=[Rw(t),zw(t)];return Jy(e)&&ib(n)&&JC(iT(e,r))===I.True?I.True:vb(e)&&ib(n)||ub(e)&&ib(n)||Fy(e)&&ib(n)?iT(e,r):ab(e)?(()=>{for(let t of Object.getOwnPropertyNames(e.properties))if(Pw(r,e.properties[t])===I.False)return I.False;return I.True})():I.False}function Vw(e,t){return XC(t)?ZC(e,t):ab(t)?Fw(e,t):sb(t)?iT(zw(e),zw(t)):I.False}function Hw(e,t){return iT(lb(e)?zx():e,lb(t)?zx():t)}function Uw(e,t){return Zy(e)&&W_(e.const)||ub(e)?I.True:I.False}function Ww(e,t){return XC(t)?ZC(e,t):ab(t)?Fw(e,t):sb(t)?Bw(e,t):ub(t)?I.True:I.False}function Gw(e,t){return XC(t)?ZC(e,t):ab(t)?Fw(e,t):sb(t)?Bw(e,t):db(t)?I.True:I.False}function Kw(e,t){return fb(e)?iT(Jx(e),t):fb(t)?iT(e,Jx(t)):YC(`Invalid fallthrough for TemplateLiteral`)}function qw(e,t){return Fy(t)&&e.items!==void 0&&e.items.every(e=>iT(e,t.items)===I.True)}function Jw(e,t){return tb(e)?I.True:yb(e)?I.False:Ny(e)?I.Union:I.False}function Yw(e,t){return XC(t)?ZC(e,t):ab(t)&&Mw(t)||Fy(t)&&qw(e,t)?I.True:hb(t)?q_(e.items)&&!q_(t.items)||!q_(e.items)&&q_(t.items)?I.False:q_(e.items)&&!q_(t.items)||e.items.every((e,n)=>iT(e,t.items[n])===I.True)?I.True:I.False:I.False}function Xw(e,t){return XC(t)?ZC(e,t):ab(t)?Fw(e,t):sb(t)?Bw(e,t):vb(t)?I.True:I.False}function Zw(e,t){return XC(t)?ZC(e,t):ab(t)?Fw(e,t):sb(t)?Bw(e,t):xb(t)?nT(e,t):gb(t)?I.True:I.False}function Qw(e,t){return t.anyOf.some(t=>iT(e,t)===I.True)?I.True:I.False}function $w(e,t){return e.anyOf.every(e=>iT(e,t)===I.True)?I.True:I.False}function eT(e,t){return I.True}function tT(e,t){return tb(t)?hw(e,t):Gy(t)?dw(e,t):_b(t)?Qw(e,t):Ny(t)?QC(e,t):ub(t)?Uw(e,t):ib(t)?bw(e,t):Uy(t)?lw(e,t):Ry(t)?iw(e,t):Fy(t)?ew(e,t):hb(t)?Jw(e,t):ab(t)?Fw(e,t):yb(t)?I.True:I.False}function nT(e,t){return gb(e)||gb(e)?I.True:I.False}function rT(e,t){return Gy(t)?dw(e,t):_b(t)?Qw(e,t):yb(t)?eT(e,t):Ny(t)?QC(e,t):ab(t)?Fw(e,t):xb(t)?I.True:I.False}function iT(e,t){return fb(e)||fb(t)?Kw(e,t):lb(e)||lb(t)?Hw(e,t):nb(e)||nb(t)?vw(e,t):Ny(e)?$C(e,t):Fy(e)?tw(e,t):Ly(e)?rw(e,t):Ry(e)?aw(e,t):Iy(e)?nw(e,t):By(e)?ow(e,t):Vy(e)?sw(e,t):Hy(e)?cw(e,t):Uy(e)?uw(e,t):Gy(e)?fw(e,t):Ky(e)?pw(e,t):Zy(e)?mw(e,t):tb(e)?gw(e,t):rb(e)?yw(e,t):ib(e)?xw(e,t):ab(e)?Iw(e,t):sb(e)?Vw(e,t):ub(e)?Ww(e,t):db(e)?Gw(e,t):hb(e)?Yw(e,t):ob(e)?Lw(e,t):vb(e)?Xw(e,t):gb(e)?Zw(e,t):_b(e)?$w(e,t):yb(e)?tT(e,t):xb(e)?rT(e,t):YC(`Unknown left type operand '${e[F]}'`)}function aT(e,t){return iT(e,t)}function oT(e,t,n,r,i){let a={};for(let o of globalThis.Object.getOwnPropertyNames(e))a[o]=uT(e[o],t,n,r,ev(i));return a}function sT(e,t,n,r,i){return oT(e.properties,t,n,r,i)}function cT(e,t,n,r,i){return Qb(sT(e,t,n,r,i))}function lT(e,t,n,r){let i=aT(e,t);return i===I.Union?sx([n,r]):i===I.True?n:r}function uT(e,t,n,r,i){return Zv(e)?cT(e,t,n,r,i):Xv(e)?P(mT(e,t,n,r,i)):P(lT(e,t,n,r),i)}function dT(e,t,n,r,i){return{[e]:uT(Fx(e),t,n,r,ev(i))}}function fT(e,t,n,r,i){return e.reduce((e,a)=>({...e,...dT(a,t,n,r,i)}),{})}function pT(e,t,n,r,i){return fT(e.keys,t,n,r,i)}function mT(e,t,n,r,i){return Qb(pT(e,t,n,r,i))}function hT(e){return e.allOf.every(e=>vT(e))}function gT(e){return e.anyOf.some(e=>vT(e))}function _T(e){return!vT(e.not)}function vT(e){return e[F]===`Intersect`?hT(e):e[F]===`Union`?gT(e):e[F]===`Not`?_T(e):e[F]===`Undefined`}function yT(e,t){return xT(Jx(e),t)}function bT(e,t){let n=e.filter(e=>aT(e,t)===I.False);return n.length===1?n[0]:sx(n)}function xT(e,t,n={}){return ly(e)?P(yT(e,t),n):Zv(e)?P(wT(e,t),n):P(my(e)?bT(e.anyOf,t):aT(e,t)===I.False?e:Zb(),n)}function ST(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=xT(e[r],t);return n}function CT(e,t){return ST(e.properties,t)}function wT(e,t){return Qb(CT(e,t))}function TT(e,t){return DT(Jx(e),t)}function ET(e,t){let n=e.filter(e=>aT(e,t)!==I.False);return n.length===1?n[0]:sx(n)}function DT(e,t,n){return ly(e)?P(TT(e,t),n):Zv(e)?P(AT(e,t),n):P(my(e)?ET(e.anyOf,t):aT(e,t)===I.False?Zb():e,n)}function OT(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=DT(e[r],t);return n}function kT(e,t){return OT(e.properties,t)}function AT(e,t){return Qb(kT(e,t))}function jT(e,t){return Vv(e)?P(e.returns,t):Zb(t)}function MT(e){return DS(GS(e))}function NT(e,t,n){return P({[F]:`Record`,type:`object`,patternProperties:{[e]:t}},n)}function PT(e,t,n){let r={};for(let n of e)r[n]=t;return SS(r,{...n,[jv]:`Record`})}function FT(e,t,n){return Dx(e)?PT($x(e),t,n):NT(e.pattern,t,n)}function IT(e,t,n){return PT($x(sx(e)),t,n)}function LT(e,t,n){return PT([e.toString()],t,n)}function RT(e,t,n){return NT(e.source,t,n)}function zT(e,t,n){return NT(q_(e.pattern)?kb:e.pattern,t,n)}function BT(e,t,n){return NT(kb,t,n)}function VT(e,t,n){return NT(Ab,t,n)}function HT(e,t,n){return SS({true:t,false:t},n)}function UT(e,t,n){return NT(Ob,t,n)}function WT(e,t,n){return NT(Ob,t,n)}function GT(e,t,n={}){return my(e)?IT(e.anyOf,t,n):ly(e)?FT(e,t,n):Yv(e)?LT(e.const,t,n):zv(e)?HT(e,t,n):Wv(e)?UT(e,t,n):ty(e)?WT(e,t,n):oy(e)?RT(e,t,n):sy(e)?zT(e,t,n):Pv(e)?BT(e,t,n):Qv(e)?VT(e,t,n):Zb(n)}function KT(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function qT(e){let t=KT(e);return t===kb?zx():t===Ob?Rx():zx({pattern:t})}function JT(e){return e.patternProperties[KT(e)]}function YT(e,t){return t.parameters=lE(e,t.parameters),t.returns=uE(e,t.returns),t}function XT(e,t){return t.parameters=lE(e,t.parameters),t.returns=uE(e,t.returns),t}function ZT(e,t){return t.allOf=lE(e,t.allOf),t}function QT(e,t){return t.anyOf=lE(e,t.anyOf),t}function $T(e,t){return q_(t.items)||(t.items=lE(e,t.items)),t}function eE(e,t){return t.items=uE(e,t.items),t}function tE(e,t){return t.items=uE(e,t.items),t}function nE(e,t){return t.items=uE(e,t.items),t}function rE(e,t){return t.item=uE(e,t.item),t}function iE(e,t){let n=cE(e,t.properties);return{...t,...SS(n)}}function aE(e,t){let n=GT(uE(e,qT(t)),uE(e,JT(t)));return{...t,...n}}function oE(e,t){return t.index in e?e[t.index]:zC()}function sE(e,t){let n=Mv(t),r=Nv(t),i=uE(e,t);return n&&r?MT(i):n&&!r?DS(i):!n&&r?GS(i):i}function cE(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((n,r)=>({...n,[r]:sE(e,t[r])}),{})}function lE(e,t){return t.map(t=>uE(e,t))}function uE(e,t){return Vv(t)?YT(e,t):Uv(t)?XT(e,t):Gv(t)?ZT(e,t):my(t)?QT(e,t):fy(t)?$T(e,t):Iv(t)?eE(e,t):Lv(t)?tE(e,t):Kv(t)?nE(e,t):ry(t)?rE(e,t):ny(t)?iE(e,t):iy(t)?aE(e,t):Fv(t)?oE(e,t):t}function dE(e,t){return uE(t,tv(e))}function fE(e){return P({[F]:`Integer`,type:`integer`},e)}function pE(e,t,n){return{[e]:wE(Fx(e),t,ev(n))}}function mE(e,t,n){return e.reduce((e,r)=>({...e,...pE(r,t,n)}),{})}function hE(e,t,n){return mE(e.keys,t,n)}function gE(e,t,n){return Qb(hE(e,t,n))}function _E(e){let[t,n]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),n].join(``)}function vE(e){let[t,n]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),n].join(``)}function yE(e){return e.toUpperCase()}function bE(e){return e.toLowerCase()}function xE(e,t,n){let r=xx(e.pattern);return Ex(r)?Yx([sx(CE([...Nx(r)].map(e=>Fx(e)),t))],n):{...e,pattern:SE(e.pattern,t)}}function SE(e,t){return typeof e==`string`?t===`Uncapitalize`?_E(e):t===`Capitalize`?vE(e):t===`Uppercase`?yE(e):t===`Lowercase`?bE(e):e:e.toString()}function CE(e,t){return e.map(e=>wE(e,t))}function wE(e,t,n={}){return Xv(e)?gE(e,t,n):ly(e)?xE(e,t,n):my(e)?sx(CE(e.anyOf,t),n):Yv(e)?Fx(SE(e.const,t),n):P(e,n)}function TE(e,t={}){return wE(e,`Capitalize`,t)}function EE(e,t={}){return wE(e,`Lowercase`,t)}function DE(e,t={}){return wE(e,`Uncapitalize`,t)}function OE(e,t={}){return wE(e,`Uppercase`,t)}function kE(e,t,n){let r={};for(let i of globalThis.Object.getOwnPropertyNames(e))r[i]=zE(e[i],t,ev(n));return r}function AE(e,t,n){return kE(e.properties,t,n)}function jE(e,t,n){return Qb(AE(e,t,n))}function ME(e,t){return e.map(e=>RE(e,t))}function NE(e,t){return e.map(e=>RE(e,t))}function PE(e,t){let{[t]:n,...r}=e;return r}function FE(e,t){return t.reduce((e,t)=>PE(e,t),e)}function IE(e,t,n){let r=Xb(e,[Ov,`$id`,`required`,`properties`]);return SS(FE(n,t),r)}function LE(e){return sx(e.reduce((e,t)=>Jv(t)?[...e,Fx(t)]:e,[]))}function RE(e,t){return Gv(e)?tC(ME(e.allOf,t)):my(e)?sx(NE(e.anyOf,t)):ny(e)?IE(e,t,e.properties):SS({})}function zE(e,t,n){let r=P_(t)?LE(t):t,i=by(t)?$x(t):t,a=ay(e),o=ay(t);return Zv(e)?jE(e,i,n):Xv(t)?UE(e,t,n):a&&o||!a&&o||a&&!o?Jb(`Omit`,[e,r],n):P({...RE(e,i),...n})}function BE(e,t,n){return{[t]:zE(e,[t],ev(n))}}function VE(e,t,n){return t.reduce((t,r)=>({...t,...BE(e,r,n)}),{})}function HE(e,t,n){return VE(e,t.keys,n)}function UE(e,t,n){return Qb(HE(e,t,n))}function WE(e,t,n){let r={};for(let i of globalThis.Object.getOwnPropertyNames(e))r[i]=$E(e[i],t,ev(n));return r}function GE(e,t,n){return WE(e.properties,t,n)}function KE(e,t,n){return Qb(GE(e,t,n))}function qE(e,t){return e.map(e=>QE(e,t))}function JE(e,t){return e.map(e=>QE(e,t))}function YE(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function XE(e,t,n){let r=Xb(e,[Ov,`$id`,`required`,`properties`]);return SS(YE(n,t),r)}function ZE(e){return sx(e.reduce((e,t)=>Jv(t)?[...e,Fx(t)]:e,[]))}function QE(e,t){return Gv(e)?tC(qE(e.allOf,t)):my(e)?sx(JE(e.anyOf,t)):ny(e)?XE(e,t,e.properties):SS({})}function $E(e,t,n){let r=P_(t)?ZE(t):t,i=by(t)?$x(t):t,a=ay(e),o=ay(t);return Zv(e)?KE(e,i,n):Xv(t)?rD(e,t,n):a&&o||!a&&o||a&&!o?Jb(`Pick`,[e,r],n):P({...QE(e,i),...n})}function eD(e,t,n){return{[t]:$E(e,[t],ev(n))}}function tD(e,t,n){return t.reduce((t,r)=>({...t,...eD(e,r,n)}),{})}function nD(e,t,n){return tD(e,t.keys,n)}function rD(e,t,n){return Qb(nD(e,t,n))}function iD(e,t){return Jb(`Partial`,[Jb(e,t)])}function aD(e){return Jb(`Partial`,[nC(e)])}function oD(e){let t={};for(let n of globalThis.Object.getOwnPropertyNames(e))t[n]=GS(e[n]);return t}function sD(e,t){let n=Xb(e,[Ov,`$id`,`required`,`properties`]);return SS(oD(t),n)}function cD(e){return e.map(e=>lD(e))}function lD(e){return Bv(e)?iD(e.target,e.parameters):ay(e)?aD(e.$ref):Gv(e)?tC(cD(e.allOf)):my(e)?sx(cD(e.anyOf)):ny(e)?sD(e,e.properties):Rv(e)||zv(e)||Wv(e)||Yv(e)||ey(e)||ty(e)||sy(e)||cy(e)||py(e)?e:SS({})}function uD(e,t){return Zv(e)?pD(e,t):P({...lD(e),...t})}function dD(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=uD(e[r],ev(t));return n}function fD(e,t){return dD(e.properties,t)}function pD(e,t){return Qb(fD(e,t))}function mD(e,t){return Jb(`Required`,[Jb(e,t)])}function hD(e){return Jb(`Required`,[nC(e)])}function gD(e){let t={};for(let n of globalThis.Object.getOwnPropertyNames(e))t[n]=Xb(e[n],[Av]);return t}function _D(e,t){let n=Xb(e,[Ov,`$id`,`required`,`properties`]);return SS(gD(t),n)}function vD(e){return e.map(e=>yD(e))}function yD(e){return Bv(e)?mD(e.target,e.parameters):ay(e)?hD(e.$ref):Gv(e)?tC(vD(e.allOf)):my(e)?sx(vD(e.anyOf)):ny(e)?_D(e,e.properties):Rv(e)||zv(e)||Wv(e)||Yv(e)||ey(e)||ty(e)||sy(e)||cy(e)||py(e)?e:SS({})}function bD(e,t){return Zv(e)?CD(e,t):P({...yD(e),...t})}function xD(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=bD(e[r],t);return n}function SD(e,t){return xD(e.properties,t)}function CD(e,t){return Qb(SD(e,t))}function wD(e,t){return t.map(t=>ay(t)?TD(e,t.$ref):KD(e,t))}function TD(e,t){return t in e?ay(e[t])?TD(e,e[t].$ref):KD(e,e[t]):Zb()}function ED(e){return lC(e[0])}function DD(e){return mS(e[0],e[1])}function OD(e){return wC(e[0])}function kD(e){return uD(e[0])}function AD(e){return zE(e[0],e[1])}function jD(e){return $E(e[0],e[1])}function MD(e){return bD(e[0])}function ND(e,t,n){let r=wD(e,n);return t===`Awaited`?ED(r):t===`Index`?DD(r):t===`KeyOf`?OD(r):t===`Partial`?kD(r):t===`Omit`?AD(r):t===`Pick`?jD(r):t===`Required`?MD(r):Zb()}function PD(e,t){return Gb(KD(e,t))}function FD(e,t){return qb(KD(e,t))}function ID(e,t,n){return $b(GD(e,t),KD(e,n))}function LD(e,t,n){return ex(GD(e,t),KD(e,n))}function RD(e,t){return tC(GD(e,t))}function zD(e,t){return yS(KD(e,t))}function BD(e,t){return SS(globalThis.Object.keys(t).reduce((n,r)=>({...n,[r]:KD(e,t[r])}),{}))}function VD(e,t){let[n,r]=[KD(e,JT(t)),KT(t)],i=tv(t);return i.patternProperties[r]=n,i}function HD(e,t){return ay(t)?{...TD(e,t.$ref),[Ov]:t[Ov]}:t}function UD(e,t){return jS(GD(e,t))}function WD(e,t){return sx(GD(e,t))}function GD(e,t){return t.map(t=>KD(e,t))}function KD(e,t){return Nv(t)?P(KD(e,Xb(t,[Av])),t):Mv(t)?P(KD(e,Xb(t,[kv])),t):dy(t)?P(HD(e,t),t):Iv(t)?P(PD(e,t.items),t):Lv(t)?P(FD(e,t.items),t):Bv(t)?P(ND(e,t.target,t.parameters)):Vv(t)?P(ID(e,t.parameters,t.returns),t):Uv(t)?P(LD(e,t.parameters,t.returns),t):Gv(t)?P(RD(e,t.allOf),t):Kv(t)?P(zD(e,t.items),t):ny(t)?P(BD(e,t.properties),t):iy(t)?P(VD(e,t)):fy(t)?P(UD(e,t.items||[]),t):my(t)?P(WD(e,t.anyOf),t):t}function qD(e,t){return t in e?KD(e,e[t]):Zb()}function JD(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,n)=>({...t,[n]:qD(e,n)}),{})}var YD=class{constructor(e){let t=JD(e);this.$defs=this.WithIdentifiers(t)}Import(e,t){let n={...this.$defs,[e]:P(this.$defs[e],t)};return P({[F]:`Import`,$defs:n,$ref:e})}WithIdentifiers(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,n)=>({...t,[n]:{...e[n],$id:n}}),{})}};function XD(e){return new YD(e)}function ZD(e,t){return P({[F]:`Not`,not:e},t)}function QD(e,t){return Uv(e)?jS(e.parameters,t):Zb()}var $D=0;function eO(e,t={}){q_(t.$id)&&(t.$id=`T${$D++}`);let n=tv(e({[F]:`This`,$ref:`${t.$id}`}));return n.$id=t.$id,P({[jv]:`Recursive`,...n},t)}function tO(e,t){let n=W_(e)?new globalThis.RegExp(e):e;return P({[F]:`RegExp`,type:`RegExp`,source:n.source,flags:n.flags},t)}function nO(e){return Gv(e)?e.allOf:my(e)?e.anyOf:fy(e)?e.items??[]:[]}function rO(e){return nO(e)}function iO(e,t){return Uv(e)?P(e.returns,t):Zb(t)}var aO=class{constructor(e){this.schema=e}Decode(e){return new oO(this.schema,e)}},oO=class{constructor(e,t){this.schema=e,this.decode=t}EncodeTransform(e,t){let n={Encode:n=>t[Ov].Encode(e(n)),Decode:e=>this.decode(t[Ov].Decode(e))};return{...t,[Ov]:n}}EncodeSchema(e,t){let n={Decode:this.decode,Encode:e};return{...t,[Ov]:n}}Encode(e){return dy(this.schema)?this.EncodeTransform(e,this.schema):this.EncodeSchema(e,this.schema)}};function sO(e){return new aO(e)}function cO(e={}){return P({[F]:e[F]??`Unsafe`},e)}function lO(e){return P({[F]:`Void`,type:`void`},e)}var uO=t({Any:()=>Wb,Argument:()=>Kb,Array:()=>Gb,AsyncIterator:()=>qb,Awaited:()=>lC,BigInt:()=>Lx,Boolean:()=>Ix,Capitalize:()=>TE,Composite:()=>NC,Const:()=>WC,Constructor:()=>$b,ConstructorParameters:()=>GC,Date:()=>PC,Enum:()=>KC,Exclude:()=>xT,Extends:()=>uT,Extract:()=>DT,Function:()=>ex,Index:()=>mS,InstanceType:()=>jT,Instantiate:()=>dE,Integer:()=>fE,Intersect:()=>tC,Iterator:()=>yS,KeyOf:()=>wC,Literal:()=>Fx,Lowercase:()=>EE,Mapped:()=>VS,Module:()=>XD,Never:()=>Zb,Not:()=>ZD,Null:()=>FC,Number:()=>Rx,Object:()=>SS,Omit:()=>zE,Optional:()=>GS,Parameters:()=>QD,Partial:()=>uD,Pick:()=>$E,Promise:()=>CS,Readonly:()=>DS,ReadonlyOptional:()=>MT,Record:()=>GT,Recursive:()=>eO,Ref:()=>nC,RegExp:()=>tO,Required:()=>bD,Rest:()=>rO,ReturnType:()=>iO,String:()=>zx,Symbol:()=>IC,TemplateLiteral:()=>Yx,Transform:()=>sO,Tuple:()=>jS,Uint8Array:()=>RC,Uncapitalize:()=>DE,Undefined:()=>LC,Union:()=>sx,Unknown:()=>zC,Unsafe:()=>cO,Uppercase:()=>OE,Void:()=>lO});function dO(e){switch(e.errorType){case L.ArrayContains:return`Expected array to contain at least one matching value`;case L.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case L.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case L.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case L.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case L.ArrayUniqueItems:return`Expected array elements to be unique`;case L.Array:return`Expected array`;case L.AsyncIterator:return`Expected AsyncIterator`;case L.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case L.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case L.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case L.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case L.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case L.BigInt:return`Expected bigint`;case L.Boolean:return`Expected boolean`;case L.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case L.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case L.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case L.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case L.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case L.Date:return`Expected Date`;case L.Function:return`Expected function`;case L.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case L.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case L.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case L.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case L.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case L.Integer:return`Expected integer`;case L.IntersectUnevaluatedProperties:return`Unexpected property`;case L.Intersect:return`Expected all values to match`;case L.Iterator:return`Expected Iterator`;case L.Literal:return`Expected ${typeof e.schema.const==`string`?`'${e.schema.const}'`:e.schema.const}`;case L.Never:return`Never`;case L.Not:return`Value should not match`;case L.Null:return`Expected null`;case L.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case L.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case L.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case L.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case L.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case L.Number:return`Expected number`;case L.Object:return`Expected object`;case L.ObjectAdditionalProperties:return`Unexpected property`;case L.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case L.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case L.ObjectRequiredProperty:return`Expected required property`;case L.Promise:return`Expected Promise`;case L.RegExp:return`Expected string to match regular expression`;case L.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case L.StringFormat:return`Expected string to match '${e.schema.format}' format`;case L.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case L.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case L.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case L.String:return`Expected string`;case L.Symbol:return`Expected symbol`;case L.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case L.Tuple:return`Expected tuple`;case L.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case L.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case L.Uint8Array:return`Expected Uint8Array`;case L.Undefined:return`Expected undefined`;case L.Union:return`Expected union value`;case L.Void:return`Expected void`;case L.Kind:return`Expected kind '${e.schema[F]}'`;default:return`Unknown error type`}}var fO=dO;function pO(e){fO=e}function mO(){return fO}var hO=class extends Dv{constructor(e){super(`Unable to dereference schema with $id '${e.$ref}'`),this.schema=e}};function gO(e,t){let n=t.find(t=>t.$id===e.$ref);if(n===void 0)throw new hO(e);return vO(n,t)}function _O(e,t){return!gv(e.$id)||t.some(t=>t.$id===e.$id)||t.push(e),t}function vO(e,t){return e[F]===`This`||e[F]===`Ref`?gO(e,t):e}var yO=class extends Dv{constructor(e){super(`Unable to hash value`),this.value=e}},bO;(function(e){e[e.Undefined=0]=`Undefined`,e[e.Null=1]=`Null`,e[e.Boolean=2]=`Boolean`,e[e.Number=3]=`Number`,e[e.String=4]=`String`,e[e.Object=5]=`Object`,e[e.Array=6]=`Array`,e[e.Date=7]=`Date`,e[e.Uint8Array=8]=`Uint8Array`,e[e.Symbol=9]=`Symbol`,e[e.BigInt=10]=`BigInt`})(bO||={});var xO=BigInt(`14695981039346656037`),[SO,CO]=[BigInt(`1099511628211`),BigInt(`18446744073709551616`)],wO=Array.from({length:256}).map((e,t)=>BigInt(t)),TO=new Float64Array(1),EO=new DataView(TO.buffer),DO=new Uint8Array(TO.buffer);function*OO(e){let t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let n=0;n<t;n++)yield e>>8*(t-1-n)&255}function kO(e){VO(bO.Array);for(let t of e)BO(t)}function AO(e){VO(bO.Boolean),VO(e?1:0)}function jO(e){VO(bO.BigInt),EO.setBigInt64(0,e);for(let e of DO)VO(e)}function MO(e){VO(bO.Date),BO(e.getTime())}function NO(e){VO(bO.Null)}function PO(e){VO(bO.Number),EO.setFloat64(0,e);for(let e of DO)VO(e)}function FO(e){VO(bO.Object);for(let t of globalThis.Object.getOwnPropertyNames(e).sort())BO(t),BO(e[t])}function IO(e){VO(bO.String);for(let t=0;t<e.length;t++)for(let n of OO(e.charCodeAt(t)))VO(n)}function LO(e){VO(bO.Symbol),BO(e.description)}function RO(e){VO(bO.Uint8Array);for(let t=0;t<e.length;t++)VO(e[t])}function zO(e){return VO(bO.Undefined)}function BO(e){if(lv(e))return kO(e);if(fv(e))return AO(e);if(hv(e))return jO(e);if(av(e))return MO(e);if(dv(e))return NO(e);if(pv(e))return PO(e);if(cv(e))return FO(e);if(gv(e))return IO(e);if(vv(e))return LO(e);if(ov(e))return RO(e);if(uv(e))return zO(e);throw new yO(e)}function VO(e){xO^=wO[e],xO=xO*SO%CO}function HO(e){return xO=BigInt(`14695981039346656037`),BO(e),xO}var UO=class extends Dv{constructor(e){super(`Unknown type`),this.schema=e}};function WO(e){return e[F]===`Any`||e[F]===`Unknown`}function GO(e){return e!==void 0}function KO(e,t,n){return!0}function qO(e,t,n){return!0}function JO(e,t,n){if(!lv(n)||GO(e.minItems)&&!(n.length>=e.minItems)||GO(e.maxItems)&&!(n.length<=e.maxItems))return!1;for(let r of n)if(!Ek(e.items,t,r))return!1;if(e.uniqueItems===!0&&!(function(){let e=new Set;for(let t of n){let n=HO(t);if(e.has(n))return!1;e.add(n)}return!0})())return!1;if(!(GO(e.contains)||pv(e.minContains)||pv(e.maxContains)))return!0;let r=GO(e.contains)?e.contains:Zb(),i=n.reduce((e,n)=>Ek(r,t,n)?e+1:e,0);return!(i===0||pv(e.minContains)&&i<e.minContains||pv(e.maxContains)&&i>e.maxContains)}function YO(e,t,n){return nv(n)}function XO(e,t,n){return!(!hv(n)||GO(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||GO(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||GO(e.maximum)&&!(n<=e.maximum)||GO(e.minimum)&&!(n>=e.minimum)||GO(e.multipleOf)&&n%e.multipleOf!==BigInt(0))}function ZO(e,t,n){return fv(n)}function QO(e,t,n){return Ek(e.returns,t,n.prototype)}function $O(e,t,n){return!(!av(n)||GO(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)||GO(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)||GO(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)||GO(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)||GO(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0)}function ek(e,t,n){return _v(n)}function tk(e,t,n){let r=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];return Ek(i,[...t,...r],n)}function nk(e,t,n){return!(!mv(n)||GO(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||GO(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||GO(e.maximum)&&!(n<=e.maximum)||GO(e.minimum)&&!(n>=e.minimum)||GO(e.multipleOf)&&n%e.multipleOf!==0)}function rk(e,t,n){let r=e.allOf.every(e=>Ek(e,t,n));if(e.unevaluatedProperties===!1){let t=new RegExp(yC(e)),i=Object.getOwnPropertyNames(n).every(e=>t.test(e));return r&&i}else if(by(e.unevaluatedProperties)){let i=new RegExp(yC(e)),a=Object.getOwnPropertyNames(n).every(r=>i.test(r)||Ek(e.unevaluatedProperties,t,n[r]));return r&&a}else return r}function ik(e,t,n){return rv(n)}function ak(e,t,n){return n===e.const}function ok(e,t,n){return!1}function sk(e,t,n){return!Ek(e.not,t,n)}function ck(e,t,n){return dv(n)}function lk(e,t,n){return!(!bv.IsNumberLike(n)||GO(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||GO(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||GO(e.minimum)&&!(n>=e.minimum)||GO(e.maximum)&&!(n<=e.maximum)||GO(e.multipleOf)&&n%e.multipleOf!==0)}function uk(e,t,n){if(!bv.IsObjectLike(n)||GO(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||GO(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;let r=Object.getOwnPropertyNames(e.properties);for(let i of r){let r=e.properties[i];if(e.required&&e.required.includes(i)){if(!Ek(r,t,n[i])||(vT(r)||WO(r))&&!(i in n))return!1}else if(bv.IsExactOptionalProperty(n,i)&&!Ek(r,t,n[i]))return!1}if(e.additionalProperties===!1){let t=Object.getOwnPropertyNames(n);return e.required&&e.required.length===r.length&&t.length===r.length?!0:t.every(e=>r.includes(e))}else if(typeof e.additionalProperties==`object`)return Object.getOwnPropertyNames(n).every(i=>r.includes(i)||Ek(e.additionalProperties,t,n[i]));else return!0}function dk(e,t,n){return iv(n)}function fk(e,t,n){if(!bv.IsRecordLike(n)||GO(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||GO(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;let[r,i]=Object.entries(e.patternProperties)[0],a=new RegExp(r),o=Object.entries(n).every(([e,n])=>a.test(e)?Ek(i,t,n):!0),s=typeof e.additionalProperties==`object`?Object.entries(n).every(([n,r])=>a.test(n)?!0:Ek(e.additionalProperties,t,r)):!0,c=e.additionalProperties===!1?Object.getOwnPropertyNames(n).every(e=>a.test(e)):!0;return o&&s&&c}function pk(e,t,n){return Ek(vO(e,t),t,n)}function mk(e,t,n){let r=new RegExp(e.source,e.flags);return GO(e.minLength)&&!(n.length>=e.minLength)||GO(e.maxLength)&&!(n.length<=e.maxLength)?!1:r.test(n)}function hk(e,t,n){return!gv(n)||GO(e.minLength)&&!(n.length>=e.minLength)||GO(e.maxLength)&&!(n.length<=e.maxLength)||GO(e.pattern)&&!new RegExp(e.pattern).test(n)?!1:GO(e.format)?Mb(e.format)?Nb(e.format)(n):!1:!0}function gk(e,t,n){return vv(n)}function _k(e,t,n){return gv(n)&&new RegExp(e.pattern).test(n)}function vk(e,t,n){return Ek(vO(e,t),t,n)}function yk(e,t,n){if(!lv(n)||e.items===void 0&&n.length!==0||n.length!==e.maxItems)return!1;if(!e.items)return!0;for(let r=0;r<e.items.length;r++)if(!Ek(e.items[r],t,n[r]))return!1;return!0}function bk(e,t,n){return uv(n)}function xk(e,t,n){return e.anyOf.some(e=>Ek(e,t,n))}function Sk(e,t,n){return!(!ov(n)||GO(e.maxByteLength)&&!(n.length<=e.maxByteLength)||GO(e.minByteLength)&&!(n.length>=e.minByteLength))}function Ck(e,t,n){return!0}function wk(e,t,n){return bv.IsVoidLike(n)}function Tk(e,t,n){return Fb(e[F])?Lb(e[F])(e,n):!1}function Ek(e,t,n){let r=GO(e.$id)?_O(e,t):t,i=e;switch(i[F]){case`Any`:return KO(i,r,n);case`Argument`:return qO(i,r,n);case`Array`:return JO(i,r,n);case`AsyncIterator`:return YO(i,r,n);case`BigInt`:return XO(i,r,n);case`Boolean`:return ZO(i,r,n);case`Constructor`:return QO(i,r,n);case`Date`:return $O(i,r,n);case`Function`:return ek(i,r,n);case`Import`:return tk(i,r,n);case`Integer`:return nk(i,r,n);case`Intersect`:return rk(i,r,n);case`Iterator`:return ik(i,r,n);case`Literal`:return ak(i,r,n);case`Never`:return ok(i,r,n);case`Not`:return sk(i,r,n);case`Null`:return ck(i,r,n);case`Number`:return lk(i,r,n);case`Object`:return uk(i,r,n);case`Promise`:return dk(i,r,n);case`Record`:return fk(i,r,n);case`Ref`:return pk(i,r,n);case`RegExp`:return mk(i,r,n);case`String`:return hk(i,r,n);case`Symbol`:return gk(i,r,n);case`TemplateLiteral`:return _k(i,r,n);case`This`:return vk(i,r,n);case`Tuple`:return yk(i,r,n);case`Undefined`:return bk(i,r,n);case`Union`:return xk(i,r,n);case`Uint8Array`:return Sk(i,r,n);case`Unknown`:return Ck(i,r,n);case`Void`:return wk(i,r,n);default:if(!Fb(i[F]))throw new UO(i);return Tk(i,r,n)}}function Dk(...e){return e.length===3?Ek(e[0],e[1],e[2]):Ek(e[0],[],e[1])}var L;(function(e){e[e.ArrayContains=0]=`ArrayContains`,e[e.ArrayMaxContains=1]=`ArrayMaxContains`,e[e.ArrayMaxItems=2]=`ArrayMaxItems`,e[e.ArrayMinContains=3]=`ArrayMinContains`,e[e.ArrayMinItems=4]=`ArrayMinItems`,e[e.ArrayUniqueItems=5]=`ArrayUniqueItems`,e[e.Array=6]=`Array`,e[e.AsyncIterator=7]=`AsyncIterator`,e[e.BigIntExclusiveMaximum=8]=`BigIntExclusiveMaximum`,e[e.BigIntExclusiveMinimum=9]=`BigIntExclusiveMinimum`,e[e.BigIntMaximum=10]=`BigIntMaximum`,e[e.BigIntMinimum=11]=`BigIntMinimum`,e[e.BigIntMultipleOf=12]=`BigIntMultipleOf`,e[e.BigInt=13]=`BigInt`,e[e.Boolean=14]=`Boolean`,e[e.DateExclusiveMaximumTimestamp=15]=`DateExclusiveMaximumTimestamp`,e[e.DateExclusiveMinimumTimestamp=16]=`DateExclusiveMinimumTimestamp`,e[e.DateMaximumTimestamp=17]=`DateMaximumTimestamp`,e[e.DateMinimumTimestamp=18]=`DateMinimumTimestamp`,e[e.DateMultipleOfTimestamp=19]=`DateMultipleOfTimestamp`,e[e.Date=20]=`Date`,e[e.Function=21]=`Function`,e[e.IntegerExclusiveMaximum=22]=`IntegerExclusiveMaximum`,e[e.IntegerExclusiveMinimum=23]=`IntegerExclusiveMinimum`,e[e.IntegerMaximum=24]=`IntegerMaximum`,e[e.IntegerMinimum=25]=`IntegerMinimum`,e[e.IntegerMultipleOf=26]=`IntegerMultipleOf`,e[e.Integer=27]=`Integer`,e[e.IntersectUnevaluatedProperties=28]=`IntersectUnevaluatedProperties`,e[e.Intersect=29]=`Intersect`,e[e.Iterator=30]=`Iterator`,e[e.Kind=31]=`Kind`,e[e.Literal=32]=`Literal`,e[e.Never=33]=`Never`,e[e.Not=34]=`Not`,e[e.Null=35]=`Null`,e[e.NumberExclusiveMaximum=36]=`NumberExclusiveMaximum`,e[e.NumberExclusiveMinimum=37]=`NumberExclusiveMinimum`,e[e.NumberMaximum=38]=`NumberMaximum`,e[e.NumberMinimum=39]=`NumberMinimum`,e[e.NumberMultipleOf=40]=`NumberMultipleOf`,e[e.Number=41]=`Number`,e[e.ObjectAdditionalProperties=42]=`ObjectAdditionalProperties`,e[e.ObjectMaxProperties=43]=`ObjectMaxProperties`,e[e.ObjectMinProperties=44]=`ObjectMinProperties`,e[e.ObjectRequiredProperty=45]=`ObjectRequiredProperty`,e[e.Object=46]=`Object`,e[e.Promise=47]=`Promise`,e[e.RegExp=48]=`RegExp`,e[e.StringFormatUnknown=49]=`StringFormatUnknown`,e[e.StringFormat=50]=`StringFormat`,e[e.StringMaxLength=51]=`StringMaxLength`,e[e.StringMinLength=52]=`StringMinLength`,e[e.StringPattern=53]=`StringPattern`,e[e.String=54]=`String`,e[e.Symbol=55]=`Symbol`,e[e.TupleLength=56]=`TupleLength`,e[e.Tuple=57]=`Tuple`,e[e.Uint8ArrayMaxByteLength=58]=`Uint8ArrayMaxByteLength`,e[e.Uint8ArrayMinByteLength=59]=`Uint8ArrayMinByteLength`,e[e.Uint8Array=60]=`Uint8Array`,e[e.Undefined=61]=`Undefined`,e[e.Union=62]=`Union`,e[e.Void=63]=`Void`})(L||={});var Ok=class extends Dv{constructor(e){super(`Unknown type`),this.schema=e}};function kk(e){return e.replace(/~/g,`~0`).replace(/\//g,`~1`)}function Ak(e){return e!==void 0}var jk=class{constructor(e){this.iterator=e}[Symbol.iterator](){return this.iterator}First(){let e=this.iterator.next();return e.done?void 0:e.value}};function R(e,t,n,r,i=[]){return{type:e,schema:t,path:n,value:r,message:mO()({errorType:e,path:n,schema:t,value:r,errors:i}),errors:i}}function*Mk(e,t,n,r){}function*Nk(e,t,n,r){}function*Pk(e,t,n,r){if(!lv(r))return yield R(L.Array,e,n,r);Ak(e.minItems)&&!(r.length>=e.minItems)&&(yield R(L.ArrayMinItems,e,n,r)),Ak(e.maxItems)&&!(r.length<=e.maxItems)&&(yield R(L.ArrayMaxItems,e,n,r));for(let i=0;i<r.length;i++)yield*fA(e.items,t,`${n}/${i}`,r[i]);if(e.uniqueItems===!0&&!(function(){let e=new Set;for(let t of r){let n=HO(t);if(e.has(n))return!1;e.add(n)}return!0})()&&(yield R(L.ArrayUniqueItems,e,n,r)),!(Ak(e.contains)||Ak(e.minContains)||Ak(e.maxContains)))return;let i=Ak(e.contains)?e.contains:Zb(),a=r.reduce((e,r,a)=>fA(i,t,`${n}${a}`,r).next().done===!0?e+1:e,0);a===0&&(yield R(L.ArrayContains,e,n,r)),pv(e.minContains)&&a<e.minContains&&(yield R(L.ArrayMinContains,e,n,r)),pv(e.maxContains)&&a>e.maxContains&&(yield R(L.ArrayMaxContains,e,n,r))}function*Fk(e,t,n,r){nv(r)||(yield R(L.AsyncIterator,e,n,r))}function*Ik(e,t,n,r){if(!hv(r))return yield R(L.BigInt,e,n,r);Ak(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield R(L.BigIntExclusiveMaximum,e,n,r)),Ak(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield R(L.BigIntExclusiveMinimum,e,n,r)),Ak(e.maximum)&&!(r<=e.maximum)&&(yield R(L.BigIntMaximum,e,n,r)),Ak(e.minimum)&&!(r>=e.minimum)&&(yield R(L.BigIntMinimum,e,n,r)),Ak(e.multipleOf)&&r%e.multipleOf!==BigInt(0)&&(yield R(L.BigIntMultipleOf,e,n,r))}function*Lk(e,t,n,r){fv(r)||(yield R(L.Boolean,e,n,r))}function*Rk(e,t,n,r){yield*fA(e.returns,t,n,r.prototype)}function*zk(e,t,n,r){if(!av(r))return yield R(L.Date,e,n,r);Ak(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)&&(yield R(L.DateExclusiveMaximumTimestamp,e,n,r)),Ak(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)&&(yield R(L.DateExclusiveMinimumTimestamp,e,n,r)),Ak(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)&&(yield R(L.DateMaximumTimestamp,e,n,r)),Ak(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)&&(yield R(L.DateMinimumTimestamp,e,n,r)),Ak(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0&&(yield R(L.DateMultipleOfTimestamp,e,n,r))}function*Bk(e,t,n,r){_v(r)||(yield R(L.Function,e,n,r))}function*Vk(e,t,n,r){let i=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref];yield*fA(a,[...t,...i],n,r)}function*Hk(e,t,n,r){if(!mv(r))return yield R(L.Integer,e,n,r);Ak(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield R(L.IntegerExclusiveMaximum,e,n,r)),Ak(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield R(L.IntegerExclusiveMinimum,e,n,r)),Ak(e.maximum)&&!(r<=e.maximum)&&(yield R(L.IntegerMaximum,e,n,r)),Ak(e.minimum)&&!(r>=e.minimum)&&(yield R(L.IntegerMinimum,e,n,r)),Ak(e.multipleOf)&&r%e.multipleOf!==0&&(yield R(L.IntegerMultipleOf,e,n,r))}function*Uk(e,t,n,r){let i=!1;for(let a of e.allOf)for(let e of fA(a,t,n,r))i=!0,yield e;if(i)return yield R(L.Intersect,e,n,r);if(e.unevaluatedProperties===!1){let t=new RegExp(yC(e));for(let i of Object.getOwnPropertyNames(r))t.test(i)||(yield R(L.IntersectUnevaluatedProperties,e,`${n}/${i}`,r))}if(typeof e.unevaluatedProperties==`object`){let i=new RegExp(yC(e));for(let a of Object.getOwnPropertyNames(r))if(!i.test(a)){let i=fA(e.unevaluatedProperties,t,`${n}/${a}`,r[a]).next();i.done||(yield i.value)}}}function*Wk(e,t,n,r){rv(r)||(yield R(L.Iterator,e,n,r))}function*Gk(e,t,n,r){r!==e.const&&(yield R(L.Literal,e,n,r))}function*Kk(e,t,n,r){yield R(L.Never,e,n,r)}function*qk(e,t,n,r){fA(e.not,t,n,r).next().done===!0&&(yield R(L.Not,e,n,r))}function*Jk(e,t,n,r){dv(r)||(yield R(L.Null,e,n,r))}function*Yk(e,t,n,r){if(!bv.IsNumberLike(r))return yield R(L.Number,e,n,r);Ak(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield R(L.NumberExclusiveMaximum,e,n,r)),Ak(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield R(L.NumberExclusiveMinimum,e,n,r)),Ak(e.maximum)&&!(r<=e.maximum)&&(yield R(L.NumberMaximum,e,n,r)),Ak(e.minimum)&&!(r>=e.minimum)&&(yield R(L.NumberMinimum,e,n,r)),Ak(e.multipleOf)&&r%e.multipleOf!==0&&(yield R(L.NumberMultipleOf,e,n,r))}function*Xk(e,t,n,r){if(!bv.IsObjectLike(r))return yield R(L.Object,e,n,r);Ak(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield R(L.ObjectMinProperties,e,n,r)),Ak(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield R(L.ObjectMaxProperties,e,n,r));let i=Array.isArray(e.required)?e.required:[],a=Object.getOwnPropertyNames(e.properties),o=Object.getOwnPropertyNames(r);for(let t of i)o.includes(t)||(yield R(L.ObjectRequiredProperty,e.properties[t],`${n}/${kk(t)}`,void 0));if(e.additionalProperties===!1)for(let t of o)a.includes(t)||(yield R(L.ObjectAdditionalProperties,e,`${n}/${kk(t)}`,r[t]));if(typeof e.additionalProperties==`object`)for(let i of o)a.includes(i)||(yield*fA(e.additionalProperties,t,`${n}/${kk(i)}`,r[i]));for(let i of a){let a=e.properties[i];e.required&&e.required.includes(i)?(yield*fA(a,t,`${n}/${kk(i)}`,r[i]),vT(e)&&!(i in r)&&(yield R(L.ObjectRequiredProperty,a,`${n}/${kk(i)}`,void 0))):bv.IsExactOptionalProperty(r,i)&&(yield*fA(a,t,`${n}/${kk(i)}`,r[i]))}}function*Zk(e,t,n,r){iv(r)||(yield R(L.Promise,e,n,r))}function*Qk(e,t,n,r){if(!bv.IsRecordLike(r))return yield R(L.Object,e,n,r);Ak(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield R(L.ObjectMinProperties,e,n,r)),Ak(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield R(L.ObjectMaxProperties,e,n,r));let[i,a]=Object.entries(e.patternProperties)[0],o=new RegExp(i);for(let[e,i]of Object.entries(r))o.test(e)&&(yield*fA(a,t,`${n}/${kk(e)}`,i));if(typeof e.additionalProperties==`object`)for(let[i,a]of Object.entries(r))o.test(i)||(yield*fA(e.additionalProperties,t,`${n}/${kk(i)}`,a));if(e.additionalProperties===!1){for(let[t,i]of Object.entries(r))if(!o.test(t))return yield R(L.ObjectAdditionalProperties,e,`${n}/${kk(t)}`,i)}}function*$k(e,t,n,r){yield*fA(vO(e,t),t,n,r)}function*eA(e,t,n,r){if(!gv(r))return yield R(L.String,e,n,r);if(Ak(e.minLength)&&!(r.length>=e.minLength)&&(yield R(L.StringMinLength,e,n,r)),Ak(e.maxLength)&&!(r.length<=e.maxLength)&&(yield R(L.StringMaxLength,e,n,r)),!new RegExp(e.source,e.flags).test(r))return yield R(L.RegExp,e,n,r)}function*tA(e,t,n,r){if(!gv(r))return yield R(L.String,e,n,r);Ak(e.minLength)&&!(r.length>=e.minLength)&&(yield R(L.StringMinLength,e,n,r)),Ak(e.maxLength)&&!(r.length<=e.maxLength)&&(yield R(L.StringMaxLength,e,n,r)),gv(e.pattern)&&(new RegExp(e.pattern).test(r)||(yield R(L.StringPattern,e,n,r))),gv(e.format)&&(Mb(e.format)?Nb(e.format)(r)||(yield R(L.StringFormat,e,n,r)):yield R(L.StringFormatUnknown,e,n,r))}function*nA(e,t,n,r){vv(r)||(yield R(L.Symbol,e,n,r))}function*rA(e,t,n,r){if(!gv(r))return yield R(L.String,e,n,r);new RegExp(e.pattern).test(r)||(yield R(L.StringPattern,e,n,r))}function*iA(e,t,n,r){yield*fA(vO(e,t),t,n,r)}function*aA(e,t,n,r){if(!lv(r))return yield R(L.Tuple,e,n,r);if(e.items===void 0&&r.length!==0||r.length!==e.maxItems)return yield R(L.TupleLength,e,n,r);if(e.items)for(let i=0;i<e.items.length;i++)yield*fA(e.items[i],t,`${n}/${i}`,r[i])}function*oA(e,t,n,r){uv(r)||(yield R(L.Undefined,e,n,r))}function*sA(e,t,n,r){if(Dk(e,t,r))return;let i=e.anyOf.map(e=>new jk(fA(e,t,n,r)));yield R(L.Union,e,n,r,i)}function*cA(e,t,n,r){if(!ov(r))return yield R(L.Uint8Array,e,n,r);Ak(e.maxByteLength)&&!(r.length<=e.maxByteLength)&&(yield R(L.Uint8ArrayMaxByteLength,e,n,r)),Ak(e.minByteLength)&&!(r.length>=e.minByteLength)&&(yield R(L.Uint8ArrayMinByteLength,e,n,r))}function*lA(e,t,n,r){}function*uA(e,t,n,r){bv.IsVoidLike(r)||(yield R(L.Void,e,n,r))}function*dA(e,t,n,r){Lb(e[F])(e,r)||(yield R(L.Kind,e,n,r))}function*fA(e,t,n,r){let i=Ak(e.$id)?[...t,e]:t,a=e;switch(a[F]){case`Any`:return yield*Mk(a,i,n,r);case`Argument`:return yield*Nk(a,i,n,r);case`Array`:return yield*Pk(a,i,n,r);case`AsyncIterator`:return yield*Fk(a,i,n,r);case`BigInt`:return yield*Ik(a,i,n,r);case`Boolean`:return yield*Lk(a,i,n,r);case`Constructor`:return yield*Rk(a,i,n,r);case`Date`:return yield*zk(a,i,n,r);case`Function`:return yield*Bk(a,i,n,r);case`Import`:return yield*Vk(a,i,n,r);case`Integer`:return yield*Hk(a,i,n,r);case`Intersect`:return yield*Uk(a,i,n,r);case`Iterator`:return yield*Wk(a,i,n,r);case`Literal`:return yield*Gk(a,i,n,r);case`Never`:return yield*Kk(a,i,n,r);case`Not`:return yield*qk(a,i,n,r);case`Null`:return yield*Jk(a,i,n,r);case`Number`:return yield*Yk(a,i,n,r);case`Object`:return yield*Xk(a,i,n,r);case`Promise`:return yield*Zk(a,i,n,r);case`Record`:return yield*Qk(a,i,n,r);case`Ref`:return yield*$k(a,i,n,r);case`RegExp`:return yield*eA(a,i,n,r);case`String`:return yield*tA(a,i,n,r);case`Symbol`:return yield*nA(a,i,n,r);case`TemplateLiteral`:return yield*rA(a,i,n,r);case`This`:return yield*iA(a,i,n,r);case`Tuple`:return yield*aA(a,i,n,r);case`Undefined`:return yield*oA(a,i,n,r);case`Union`:return yield*sA(a,i,n,r);case`Uint8Array`:return yield*cA(a,i,n,r);case`Unknown`:return yield*lA(a,i,n,r);case`Void`:return yield*uA(a,i,n,r);default:if(!Fb(a[F]))throw new Ok(e);return yield*dA(a,i,n,r)}}function pA(...e){return new jk(e.length===3?fA(e[0],e[1],``,e[2]):fA(e[0],[],``,e[1]))}var mA=class extends Dv{constructor(e,t,n){super(`Unable to decode value as it does not match the expected schema`),this.schema=e,this.value=t,this.error=n}},hA=class extends Dv{constructor(e,t,n,r){super(r instanceof Error?r.message:`Unknown error`),this.schema=e,this.path=t,this.value=n,this.error=r}};function gA(e,t,n){try{return dy(e)?e[Ov].Decode(n):n}catch(r){throw new hA(e,t,n,r)}}function _A(e,t,n,r){return lv(r)?gA(e,n,r.map((r,i)=>DA(e.items,t,`${n}/${i}`,r))):gA(e,n,r)}function vA(e,t,n,r){if(!cv(r)||yv(r))return gA(e,n,r);let i=OC(e),a=i.map(e=>e[0]),o={...r};for(let[e,r]of i)e in o&&(o[e]=DA(r,t,`${n}/${e}`,o[e]));if(!dy(e.unevaluatedProperties))return gA(e,n,o);let s=Object.getOwnPropertyNames(o),c=e.unevaluatedProperties,l={...o};for(let e of s)a.includes(e)||(l[e]=gA(c,`${n}/${e}`,l[e]));return gA(e,n,l)}function yA(e,t,n,r){let i=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref];return gA(e,n,DA(a,[...t,...i],n,r))}function bA(e,t,n,r){return gA(e,n,DA(e.not,t,n,r))}function xA(e,t,n,r){if(!cv(r))return gA(e,n,r);let i=_C(e),a={...r};for(let r of i)sv(a,r)&&(uv(a[r])&&(!py(e.properties[r])||bv.IsExactOptionalProperty(a,r))||(a[r]=DA(e.properties[r],t,`${n}/${r}`,a[r])));if(!by(e.additionalProperties))return gA(e,n,a);let o=Object.getOwnPropertyNames(a),s=e.additionalProperties,c={...a};for(let e of o)i.includes(e)||(c[e]=gA(s,`${n}/${e}`,c[e]));return gA(e,n,c)}function SA(e,t,n,r){if(!cv(r))return gA(e,n,r);let i=Object.getOwnPropertyNames(e.patternProperties)[0],a=new RegExp(i),o={...r};for(let s of Object.getOwnPropertyNames(r))a.test(s)&&(o[s]=DA(e.patternProperties[i],t,`${n}/${s}`,o[s]));if(!by(e.additionalProperties))return gA(e,n,o);let s=Object.getOwnPropertyNames(o),c=e.additionalProperties,l={...o};for(let e of s)a.test(e)||(l[e]=gA(c,`${n}/${e}`,l[e]));return gA(e,n,l)}function CA(e,t,n,r){return gA(e,n,DA(vO(e,t),t,n,r))}function wA(e,t,n,r){return gA(e,n,DA(vO(e,t),t,n,r))}function TA(e,t,n,r){return lv(r)&&lv(e.items)?gA(e,n,e.items.map((e,i)=>DA(e,t,`${n}/${i}`,r[i]))):gA(e,n,r)}function EA(e,t,n,r){for(let i of e.anyOf)if(Dk(i,t,r))return gA(e,n,DA(i,t,n,r));return gA(e,n,r)}function DA(e,t,n,r){let i=_O(e,t),a=e;switch(e[F]){case`Array`:return _A(a,i,n,r);case`Import`:return yA(a,i,n,r);case`Intersect`:return vA(a,i,n,r);case`Not`:return bA(a,i,n,r);case`Object`:return xA(a,i,n,r);case`Record`:return SA(a,i,n,r);case`Ref`:return CA(a,i,n,r);case`Symbol`:return gA(a,n,r);case`This`:return wA(a,i,n,r);case`Tuple`:return TA(a,i,n,r);case`Union`:return EA(a,i,n,r);default:return gA(a,n,r)}}function OA(e,t,n){return DA(e,t,``,n)}var kA=class extends Dv{constructor(e,t,n){super(`The encoded value does not match the expected schema`),this.schema=e,this.value=t,this.error=n}},AA=class extends Dv{constructor(e,t,n,r){super(`${r instanceof Error?r.message:`Unknown error`}`),this.schema=e,this.path=t,this.value=n,this.error=r}};function jA(e,t,n){try{return dy(e)?e[Ov].Encode(n):n}catch(r){throw new AA(e,t,n,r)}}function MA(e,t,n,r){let i=jA(e,n,r);return lv(i)?i.map((r,i)=>HA(e.items,t,`${n}/${i}`,r)):i}function NA(e,t,n,r){let i=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref],o=jA(e,n,r);return HA(a,[...t,...i],n,o)}function PA(e,t,n,r){let i=jA(e,n,r);if(!cv(r)||yv(r))return i;let a=OC(e),o=a.map(e=>e[0]),s={...i};for(let[e,r]of a)e in s&&(s[e]=HA(r,t,`${n}/${e}`,s[e]));if(!dy(e.unevaluatedProperties))return s;let c=Object.getOwnPropertyNames(s),l=e.unevaluatedProperties,u={...s};for(let e of c)o.includes(e)||(u[e]=jA(l,`${n}/${e}`,u[e]));return u}function FA(e,t,n,r){return jA(e.not,n,jA(e,n,r))}function IA(e,t,n,r){let i=jA(e,n,r);if(!cv(i))return i;let a=_C(e),o={...i};for(let r of a)sv(o,r)&&(uv(o[r])&&(!py(e.properties[r])||bv.IsExactOptionalProperty(o,r))||(o[r]=HA(e.properties[r],t,`${n}/${r}`,o[r])));if(!by(e.additionalProperties))return o;let s=Object.getOwnPropertyNames(o),c=e.additionalProperties,l={...o};for(let e of s)a.includes(e)||(l[e]=jA(c,`${n}/${e}`,l[e]));return l}function LA(e,t,n,r){let i=jA(e,n,r);if(!cv(r))return i;let a=Object.getOwnPropertyNames(e.patternProperties)[0],o=new RegExp(a),s={...i};for(let i of Object.getOwnPropertyNames(r))o.test(i)&&(s[i]=HA(e.patternProperties[a],t,`${n}/${i}`,s[i]));if(!by(e.additionalProperties))return s;let c=Object.getOwnPropertyNames(s),l=e.additionalProperties,u={...s};for(let e of c)o.test(e)||(u[e]=jA(l,`${n}/${e}`,u[e]));return u}function RA(e,t,n,r){return jA(e,n,HA(vO(e,t),t,n,r))}function zA(e,t,n,r){return jA(e,n,HA(vO(e,t),t,n,r))}function BA(e,t,n,r){let i=jA(e,n,r);return lv(e.items)?e.items.map((e,r)=>HA(e,t,`${n}/${r}`,i[r])):[]}function VA(e,t,n,r){for(let i of e.anyOf)if(Dk(i,t,r))return jA(e,n,HA(i,t,n,r));for(let i of e.anyOf){let a=HA(i,t,n,r);if(Dk(e,t,a))return jA(e,n,a)}return jA(e,n,r)}function HA(e,t,n,r){let i=_O(e,t),a=e;switch(e[F]){case`Array`:return MA(a,i,n,r);case`Import`:return NA(a,i,n,r);case`Intersect`:return PA(a,i,n,r);case`Not`:return FA(a,i,n,r);case`Object`:return IA(a,i,n,r);case`Record`:return LA(a,i,n,r);case`Ref`:return RA(a,i,n,r);case`This`:return zA(a,i,n,r);case`Tuple`:return BA(a,i,n,r);case`Union`:return VA(a,i,n,r);default:return jA(a,n,r)}}function UA(e,t,n){return HA(e,t,``,n)}function WA(e,t){return dy(e)||aj(e.items,t)}function GA(e,t){return dy(e)||aj(e.items,t)}function KA(e,t){return dy(e)||aj(e.returns,t)||e.parameters.some(e=>aj(e,t))}function qA(e,t){return dy(e)||aj(e.returns,t)||e.parameters.some(e=>aj(e,t))}function JA(e,t){return dy(e)||dy(e.unevaluatedProperties)||e.allOf.some(e=>aj(e,t))}function YA(e,t){let n=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((t,n)=>[...t,e.$defs[n]],[]),r=e.$defs[e.$ref];return dy(e)||aj(r,[...n,...t])}function XA(e,t){return dy(e)||aj(e.items,t)}function ZA(e,t){return dy(e)||aj(e.not,t)}function QA(e,t){return dy(e)||Object.values(e.properties).some(e=>aj(e,t))||by(e.additionalProperties)&&aj(e.additionalProperties,t)}function $A(e,t){return dy(e)||aj(e.item,t)}function ej(e,t){let n=Object.getOwnPropertyNames(e.patternProperties)[0],r=e.patternProperties[n];return dy(e)||aj(r,t)||by(e.additionalProperties)&&dy(e.additionalProperties)}function tj(e,t){return dy(e)?!0:aj(vO(e,t),t)}function nj(e,t){return dy(e)?!0:aj(vO(e,t),t)}function rj(e,t){return dy(e)||!uv(e.items)&&e.items.some(e=>aj(e,t))}function ij(e,t){return dy(e)||e.anyOf.some(e=>aj(e,t))}function aj(e,t){let n=_O(e,t),r=e;if(e.$id&&oj.has(e.$id))return!1;switch(e.$id&&oj.add(e.$id),e[F]){case`Array`:return WA(r,n);case`AsyncIterator`:return GA(r,n);case`Constructor`:return KA(r,n);case`Function`:return qA(r,n);case`Import`:return YA(r,n);case`Intersect`:return JA(r,n);case`Iterator`:return XA(r,n);case`Not`:return ZA(r,n);case`Object`:return QA(r,n);case`Promise`:return $A(r,n);case`Record`:return ej(r,n);case`Ref`:return tj(r,n);case`This`:return nj(r,n);case`Tuple`:return rj(r,n);case`Union`:return ij(r,n);default:return dy(e)}}var oj=new Set;function sj(e,t){return oj.clear(),aj(e,t)}var cj=class{constructor(e,t,n,r){this.schema=e,this.references=t,this.checkFunc=n,this.code=r,this.hasTransform=sj(e,t)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(e){return pA(this.schema,this.references,e)}Check(e){return this.checkFunc(e)}Decode(e){if(!this.checkFunc(e))throw new mA(this.schema,e,this.Errors(e).First());return this.hasTransform?OA(this.schema,this.references,e):e}Encode(e){let t=this.hasTransform?UA(this.schema,this.references,e):e;if(!this.checkFunc(t))throw new kA(this.schema,e,this.Errors(e).First());return t}},lj;(function(e){function t(e){return e===36}e.DollarSign=t;function n(e){return e===95}e.IsUnderscore=n;function r(e){return e>=65&&e<=90||e>=97&&e<=122}e.IsAlpha=r;function i(e){return e>=48&&e<=57}e.IsNumeric=i})(lj||={});var uj;(function(e){function t(e){return e.length===0?!1:lj.IsNumeric(e.charCodeAt(0))}function n(e){if(t(e))return!1;for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(!(lj.IsAlpha(n)||lj.IsNumeric(n)||lj.DollarSign(n)||lj.IsUnderscore(n)))return!1}return!0}function r(e){return e.replace(/'/g,`\\'`)}function i(e,t){return n(t)?`${e}.${t}`:`${e}['${r(t)}']`}e.Encode=i})(uj||={});var dj;(function(e){function t(e){let t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);lj.IsNumeric(r)||lj.IsAlpha(r)?t.push(e.charAt(n)):t.push(`_${r}_`)}return t.join(``).replace(/__/g,`_`)}e.Encode=t})(dj||={});var fj;(function(e){function t(e){return e.replace(/'/g,`\\'`)}e.Escape=t})(fj||={});var pj=class extends Dv{constructor(e){super(`Unknown type`),this.schema=e}},mj=class extends Dv{constructor(e){super(`Preflight validation check failed to guard for the given schema`),this.schema=e}},hj;(function(e){function t(e,t,n){return bv.ExactOptionalPropertyTypes?`('${t}' in ${e} ? ${n} : true)`:`(${uj.Encode(e,t)} !== undefined ? ${n} : true)`}e.IsExactOptionalProperty=t;function n(e){return bv.AllowArrayObject?`(typeof ${e} === 'object' && ${e} !== null)`:`(typeof ${e} === 'object' && ${e} !== null && !Array.isArray(${e}))`}e.IsObjectLike=n;function r(e){return bv.AllowArrayObject?`(typeof ${e} === 'object' && ${e} !== null && !(${e} instanceof Date) && !(${e} instanceof Uint8Array))`:`(typeof ${e} === 'object' && ${e} !== null && !Array.isArray(${e}) && !(${e} instanceof Date) && !(${e} instanceof Uint8Array))`}e.IsRecordLike=r;function i(e){return bv.AllowNaN?`typeof ${e} === 'number'`:`Number.isFinite(${e})`}e.IsNumberLike=i;function a(e){return bv.AllowNullVoid?`(${e} === undefined || ${e} === null)`:`${e} === undefined`}e.IsVoidLike=a})(hj||={});var gj;(function(e){function t(e){return e[F]===`Any`||e[F]===`Unknown`}function*n(e,t,n){yield`true`}function*r(e,t,n){yield`true`}function*i(e,t,n){yield`Array.isArray(${n})`;let[r,i]=[x(`value`,`any`),x(`acc`,`number`)];if(pv(e.maxItems)&&(yield`${n}.length <= ${e.maxItems}`),pv(e.minItems)&&(yield`${n}.length >= ${e.minItems}`),yield`((array) => { for(const ${r} of array) if(!(${ve(e.items,t,`value`)})) { return false }; return true; })(${n})`,Cb(e.contains)||pv(e.minContains)||pv(e.maxContains)){let a=ve(Cb(e.contains)?e.contains:Zb(),t,`value`),o=pv(e.minContains)?[`(count >= ${e.minContains})`]:[],s=pv(e.maxContains)?[`(count <= ${e.maxContains})`]:[];yield`((${r}) => { ${`const count = value.reduce((${i}, ${r}) => ${a} ? acc + 1 : acc, 0)`}; return ${[`(count > 0)`,...o,...s].join(` && `)}})(${n})`}e.uniqueItems===!0&&(yield`((${r}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${n})`)}function*a(e,t,n){yield`(typeof value === 'object' && Symbol.asyncIterator in ${n})`}function*o(e,t,n){yield`(typeof ${n} === 'bigint')`,hv(e.exclusiveMaximum)&&(yield`${n} < BigInt(${e.exclusiveMaximum})`),hv(e.exclusiveMinimum)&&(yield`${n} > BigInt(${e.exclusiveMinimum})`),hv(e.maximum)&&(yield`${n} <= BigInt(${e.maximum})`),hv(e.minimum)&&(yield`${n} >= BigInt(${e.minimum})`),hv(e.multipleOf)&&(yield`(${n} % BigInt(${e.multipleOf})) === 0`)}function*s(e,t,n){yield`(typeof ${n} === 'boolean')`}function*c(e,t,n){yield*v(e.returns,t,`${n}.prototype`)}function*l(e,t,n){yield`(${n} instanceof Date) && Number.isFinite(${n}.getTime())`,pv(e.exclusiveMaximumTimestamp)&&(yield`${n}.getTime() < ${e.exclusiveMaximumTimestamp}`),pv(e.exclusiveMinimumTimestamp)&&(yield`${n}.getTime() > ${e.exclusiveMinimumTimestamp}`),pv(e.maximumTimestamp)&&(yield`${n}.getTime() <= ${e.maximumTimestamp}`),pv(e.minimumTimestamp)&&(yield`${n}.getTime() >= ${e.minimumTimestamp}`),pv(e.multipleOfTimestamp)&&(yield`(${n}.getTime() % ${e.multipleOfTimestamp}) === 0`)}function*u(e,t,n){yield`(typeof ${n} === 'function')`}function*d(e,t,n){let r=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((t,n)=>[...t,e.$defs[n]],[]);yield*v(nC(e.$ref),[...t,...r],n)}function*f(e,t,n){yield`Number.isInteger(${n})`,pv(e.exclusiveMaximum)&&(yield`${n} < ${e.exclusiveMaximum}`),pv(e.exclusiveMinimum)&&(yield`${n} > ${e.exclusiveMinimum}`),pv(e.maximum)&&(yield`${n} <= ${e.maximum}`),pv(e.minimum)&&(yield`${n} >= ${e.minimum}`),pv(e.multipleOf)&&(yield`(${n} % ${e.multipleOf}) === 0`)}function*p(e,t,n){let r=e.allOf.map(e=>ve(e,t,n)).join(` && `);e.unevaluatedProperties===!1?yield`(${r} && ${`Object.getOwnPropertyNames(${n}).every(key => ${b(`${new RegExp(yC(e))};`)}.test(key))`})`:Cb(e.unevaluatedProperties)?yield`(${r} && ${`Object.getOwnPropertyNames(${n}).every(key => ${b(`${new RegExp(yC(e))};`)}.test(key) || ${ve(e.unevaluatedProperties,t,`${n}[key]`)})`})`:yield`(${r})`}function*m(e,t,n){yield`(typeof value === 'object' && Symbol.iterator in ${n})`}function*h(e,t,n){typeof e.const==`number`||typeof e.const==`boolean`?yield`(${n} === ${e.const})`:yield`(${n} === '${fj.Escape(e.const)}')`}function*g(e,t,n){yield`false`}function*ee(e,t,n){yield`(!${ve(e.not,t,n)})`}function*_(e,t,n){yield`(${n} === null)`}function*te(e,t,n){yield hj.IsNumberLike(n),pv(e.exclusiveMaximum)&&(yield`${n} < ${e.exclusiveMaximum}`),pv(e.exclusiveMinimum)&&(yield`${n} > ${e.exclusiveMinimum}`),pv(e.maximum)&&(yield`${n} <= ${e.maximum}`),pv(e.minimum)&&(yield`${n} >= ${e.minimum}`),pv(e.multipleOf)&&(yield`(${n} % ${e.multipleOf}) === 0`)}function*ne(e,n,r){yield hj.IsObjectLike(r),pv(e.minProperties)&&(yield`Object.getOwnPropertyNames(${r}).length >= ${e.minProperties}`),pv(e.maxProperties)&&(yield`Object.getOwnPropertyNames(${r}).length <= ${e.maxProperties}`);let i=Object.getOwnPropertyNames(e.properties);for(let a of i){let i=uj.Encode(r,a),o=e.properties[a];if(e.required&&e.required.includes(a))yield*v(o,n,i),(vT(o)||t(o))&&(yield`('${a}' in ${r})`);else{let e=ve(o,n,i);yield hj.IsExactOptionalProperty(r,a,e)}}if(e.additionalProperties===!1&&(e.required&&e.required.length===i.length?yield`Object.getOwnPropertyNames(${r}).length === ${i.length}`:yield`Object.getOwnPropertyNames(${r}).every(key => ${`[${i.map(e=>`'${e}'`).join(`, `)}]`}.includes(key))`),typeof e.additionalProperties==`object`){let t=ve(e.additionalProperties,n,`${r}[key]`);yield`(Object.getOwnPropertyNames(${r}).every(key => ${`[${i.map(e=>`'${e}'`).join(`, `)}]`}.includes(key) || ${t}))`}}function*re(e,t,n){yield`${n} instanceof Promise`}function*ie(e,t,n){yield hj.IsRecordLike(n),pv(e.minProperties)&&(yield`Object.getOwnPropertyNames(${n}).length >= ${e.minProperties}`),pv(e.maxProperties)&&(yield`Object.getOwnPropertyNames(${n}).length <= ${e.maxProperties}`);let[r,i]=Object.entries(e.patternProperties)[0];yield`(Object.entries(${n}).every(([key, value]) => ${`(${b(`${new RegExp(r)}`)}.test(key) ? ${ve(i,t,`value`)} : ${Cb(e.additionalProperties)?ve(e.additionalProperties,t,n):e.additionalProperties===!1?`false`:`true`})`}))`}function*ae(e,t,n){let r=vO(e,t);if(y.functions.has(e.$ref))return yield`${ye(e.$ref)}(${n})`;yield*v(r,t,n)}function*oe(e,t,n){let r=b(`${new RegExp(e.source,e.flags)};`);yield`(typeof ${n} === 'string')`,pv(e.maxLength)&&(yield`${n}.length <= ${e.maxLength}`),pv(e.minLength)&&(yield`${n}.length >= ${e.minLength}`),yield`${r}.test(${n})`}function*se(e,t,n){yield`(typeof ${n} === 'string')`,pv(e.maxLength)&&(yield`${n}.length <= ${e.maxLength}`),pv(e.minLength)&&(yield`${n}.length >= ${e.minLength}`),e.pattern!==void 0&&(yield`${b(`${new RegExp(e.pattern)};`)}.test(${n})`),e.format!==void 0&&(yield`format('${e.format}', ${n})`)}function*ce(e,t,n){yield`(typeof ${n} === 'symbol')`}function*le(e,t,n){yield`(typeof ${n} === 'string')`,yield`${b(`${new RegExp(e.pattern)};`)}.test(${n})`}function*ue(e,t,n){yield`${ye(e.$ref)}(${n})`}function*de(e,t,n){if(yield`Array.isArray(${n})`,e.items===void 0)return yield`${n}.length === 0`;yield`(${n}.length === ${e.maxItems})`;for(let r=0;r<e.items.length;r++)yield`${ve(e.items[r],t,`${n}[${r}]`)}`}function*fe(e,t,n){yield`${n} === undefined`}function*pe(e,t,n){yield`(${e.anyOf.map(e=>ve(e,t,n)).join(` || `)})`}function*me(e,t,n){yield`${n} instanceof Uint8Array`,pv(e.maxByteLength)&&(yield`(${n}.length <= ${e.maxByteLength})`),pv(e.minByteLength)&&(yield`(${n}.length >= ${e.minByteLength})`)}function*he(e,t,n){yield`true`}function*ge(e,t,n){yield hj.IsVoidLike(n)}function*_e(e,t,n){let r=y.instances.size;y.instances.set(r,e),yield`kind('${e[F]}', ${r}, ${n})`}function*v(e,t,v,ve=!0){let b=gv(e.$id)?[...t,e]:t,x=e;if(ve&&gv(e.$id)){let n=ye(e.$id);if(y.functions.has(n))return yield`${n}(${v})`;{y.functions.set(n,`<deferred>`);let r=be(n,e,t,`value`,!1);return y.functions.set(n,r),yield`${n}(${v})`}}switch(x[F]){case`Any`:return yield*n(x,b,v);case`Argument`:return yield*r(x,b,v);case`Array`:return yield*i(x,b,v);case`AsyncIterator`:return yield*a(x,b,v);case`BigInt`:return yield*o(x,b,v);case`Boolean`:return yield*s(x,b,v);case`Constructor`:return yield*c(x,b,v);case`Date`:return yield*l(x,b,v);case`Function`:return yield*u(x,b,v);case`Import`:return yield*d(x,b,v);case`Integer`:return yield*f(x,b,v);case`Intersect`:return yield*p(x,b,v);case`Iterator`:return yield*m(x,b,v);case`Literal`:return yield*h(x,b,v);case`Never`:return yield*g(x,b,v);case`Not`:return yield*ee(x,b,v);case`Null`:return yield*_(x,b,v);case`Number`:return yield*te(x,b,v);case`Object`:return yield*ne(x,b,v);case`Promise`:return yield*re(x,b,v);case`Record`:return yield*ie(x,b,v);case`Ref`:return yield*ae(x,b,v);case`RegExp`:return yield*oe(x,b,v);case`String`:return yield*se(x,b,v);case`Symbol`:return yield*ce(x,b,v);case`TemplateLiteral`:return yield*le(x,b,v);case`This`:return yield*ue(x,b,v);case`Tuple`:return yield*de(x,b,v);case`Undefined`:return yield*fe(x,b,v);case`Union`:return yield*pe(x,b,v);case`Uint8Array`:return yield*me(x,b,v);case`Unknown`:return yield*he(x,b,v);case`Void`:return yield*ge(x,b,v);default:if(!Fb(x[F]))throw new pj(e);return yield*_e(x,b,v)}}let y={language:`javascript`,functions:new Map,variables:new Map,instances:new Map};function ve(e,t,n,r=!0){return`(${[...v(e,t,n,r)].join(` && `)})`}function ye(e){return`check_${dj.Encode(e)}`}function b(e){let t=`local_${y.variables.size}`;return y.variables.set(t,`const ${t} = ${e}`),t}function be(e,t,n,r,i=!0){let[a,o]=[`
`,e=>``.padStart(e,` `)],s=x(`value`,`any`),c=xe(`boolean`),l=[...v(t,n,r,i)].map(e=>`${o(4)}${e}`).join(` &&${a}`);return`function ${e}(${s})${c} {${a}${o(2)}return (${a}${l}${a}${o(2)})\n}`}function x(e,t){return`${e}${y.language===`typescript`?`: ${t}`:``}`}function xe(e){return y.language===`typescript`?`: ${e}`:``}function Se(e,t,n){let r=be(`check`,e,t,`value`),i=x(`value`,`any`),a=xe(`boolean`),o=[...y.functions.values()],s=[...y.variables.values()],c=gv(e.$id)?`return function check(${i})${a} {\n  return ${ye(e.$id)}(value)\n}`:`return ${r}`;return[...s,...o,c].join(`
`)}function Ce(...e){let t={language:`javascript`},[n,r,i]=e.length===2&&lv(e[1])?[e[0],e[1],t]:e.length===2&&!lv(e[1])?[e[0],[],e[1]]:e.length===3?[e[0],e[1],e[2]]:e.length===1?[e[0],[],t]:[null,[],t];if(y.language=i.language,y.variables.clear(),y.functions.clear(),y.instances.clear(),!Cb(n))throw new mj(n);for(let e of r)if(!Cb(e))throw new mj(e);return Se(n,r,i)}e.Code=Ce;function we(e,t=[]){let n=Ce(e,t,{language:`javascript`}),r=globalThis.Function(`kind`,`format`,`hash`,n),i=new Map(y.instances);function a(e,t,n){return!Fb(e)||!i.has(t)?!1:Lb(e)(i.get(t),n)}function o(e,t){return Mb(e)?Nb(e)(t):!1}function s(e){return HO(e)}return new cj(e,t,r(a,o,s),n)}e.Compile=we})(gj||={});var _j={};function vj(e,t){e in _j||(_j[e]=t)}var yj=!1;function bj(){yj||(yj=!0,pO(e=>(_j[e.schema[F]]||dO)(e)))}var xj=Symbol.for(`object-shape-tester.shape-identifier`);function Sj(e){if(bj(),Cj(e))return e;let t=Ej(e),n=Tj(t,!1),r=Tj(t,!0),i={$_schema:t,$_schemaNoExtraKeys:n,$_schemaExtraKeys:r,default:t.default,$_compiledSchema:gj.Compile(t),$_compiledSchemaNoExtraKeys:gj.Compile(n),$_compiledSchemaExtraKeys:gj.Compile(r)};return Object.defineProperties(i,{runtimeType:{configurable:!1,enumerable:!1,get(){throw Error(`runtimeType cannot be used as a value, it is only for types.`)}},[xj]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),i}function Cj(e){return A.hasKey(e,xj)&&!!e[xj]}function wj(e){return A.hasKey(e,F)}function Tj(e,t){let n={...e};if(Array.isArray(e.anyOf)&&(n.anyOf=e.anyOf.map(e=>Tj(e,t))),Array.isArray(e.allOf)&&(n.allOf=e.allOf.map(e=>Tj(e,t))),wj(e.items)?n.items=Tj(e.items,t):Array.isArray(e.items)&&(n.items=e.items.map(e=>Tj(e,t))),A.isObject(e.properties)){let r={};Object.entries(e.properties).forEach(([e,n])=>{r[e]=Tj(n,t)}),n.properties=r}return n.additionalProperties=t,n}function Ej(e){if(wj(e))return e;if(Cj(e))return e.$_schema;if(A.isFunction(e))return uO.Function([],uO.Any(),{default:e});if(A.isObject(e)){let t={},n={};return Object.entries(e).forEach(([e,r])=>{let i=Ej(r);n[e]=i,t[e]=i.default}),uO.Object(n,{default:t})}else if(A.isArray(e))return uO.Array(uO.Union(e.map(e=>Ej(e))),{default:[]});else if(A.isPrimitive(e)){if(A.isString(e))return uO.String({default:e});if(A.isNumber(e))return uO.Number({default:e});if(A.isBoolean(e))return uO.Boolean({default:e});if(A.isSymbol(e))return uO.Symbol({default:e});if(A.isNull(e))return uO.Null({default:null});if(A.isUndefined(e))return uO.Undefined({default:void 0});if(A.isBigInt(e))return uO.BigInt({default:e});Fc.tsType(e).equals(),Fc.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw Error(`Invalid shape: ${y(e)}`)}function Dj({checkValue:e,default:t,name:n}){return Fb(n)||Ib(n,(t,n)=>e(n)),(e=t)=>Sj(uO.Unsafe({[F]:n,default:e}))}function Oj(e,t){let n=ke(e);if(t!=null&&!n.includes(t))throw TypeError(`enumShape default must be a subset of the given enum.`);return Sj(uO.Union(n.map(e=>uO.Literal(e)),{default:t??n[0]}))}function kj(e){return A.isSymbol(e)?jj(e):Sj(uO.Const(e,{default:e}))}var Aj=`ExactSymbol`;function jj(e){return Fb(`ExactSymbol`)||Ib(Aj,(e,t)=>t===e.symbol),vj(Aj,({schema:e})=>`Expected symbol ${e.symbol?.description?Hl({value:e.symbol.description,wrapper:`'`}):`<unnamed symbol>`}`),Sj(uO.Unsafe({[F]:Aj,symbol:e,default:e}))}function Mj(...e){let t={},n=e.map(e=>{let n=Sj(e);return Object.assign(t,n.default),n.$_schema});return Sj(uO.Composite(n,{default:t}))}function Nj(e,t={}){bv.ExactOptionalPropertyTypes=!0;let n=Sj(e).$_schema,r=t.alsoUndefined?uO.Union([uO.Undefined(),n]):n;return Sj(uO.Optional(r))}function Pj(...e){let t,n=e.map((e,n)=>{let r=Sj(e);return n||(t=r.default),r.$_schema});return Sj(uO.Union(n,{default:t}))}function Fj(e){return Nj(Pj(void 0,null,e))}function Ij(e){let t=Sj(e);return Sj(uO.Partial(t.$_schema,{default:t.default}))}function Lj(e){return Pj(e,``,-1,0n,!1,IC(),null,void 0)}var Rj=class extends TypeError{errors;failureMessage;name=`ShapeMismatchError`;constructor(e,t){let n=Pe(t,`Shape mismatch:\n${So(e.map(e=>Bj(e)).join(`
`),1)}`);super(n),this.errors=e,this.failureMessage=t}};function zj(e){return e.errors.flatMap(e=>Array.from(e))}function Bj(e,t=0){let n=zj(e).map(e=>Bj(e,t+1));return[So([e.path,e.message].filter(A.isTruthy).join(`: `)+(n.length?`:`:``),t),...n].join(`
`)}function Vj(e,t,n={}){return Uj(t,n).Check(e)}function Hj(e,t,n={},r){if(Vj(e,t,n))return;let i=Array.from(Uj(t,n).Errors(e));if(i.length)throw new Rj(i,r)}function Uj(e,t){return e=Wj(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function Wj(e){return Sj(e)}function Gj({exclusiveMax:e,exclusiveMin:t,...n}){let{min:r,max:i}=Re(n),a=n.default??(i-r)/2+r,o=Sj(uO.Number({...t?{exclusiveMinimum:r}:{minimum:r},...e?{exclusiveMaximum:i}:{maximum:i},default:a})),s=il(()=>Hj(a,o));if(s)throw Ie(s,`Default range value is not within range.`);return o}var Kj=`recordShape`;function qj({keys:e,values:t,partial:n,additionalProperties:r}){Jj();let i=Zj(e),a=Sj(t);return Sj(uO.Unsafe({[F]:Kj,keysShape:i,valuesShape:a,isPartial:!!n,additionalProperties:!!r,default:Xj({isPartial:!!n,keysShape:i,valuesShape:a})}))}function Jj(){Fb(`recordShape`)||Ib(Kj,(e,t)=>{if(typeof t!=`object`||!t||Array.isArray(t))return!1;let n=Object.entries(t).every(([t,n])=>{let r=e.additionalProperties?!0:Vj(t,e.keysShape),i=Vj(n,e.valuesShape);return r&&i}),r=e.isPartial?!0:!Yj(e.keysShape,t).length;return n&&r}),vj(Kj,e=>{let t=e.schema,n=e.value;if(typeof n!=`object`||!n||Array.isArray(n))return`Expected an object`;let r=Jc(Object.entries(n),([e])=>e,(e,[n,r])=>!Vj(n,t.keysShape)||!Vj(r,t.valuesShape)),i=Yj(t.keysShape,n);return[r.length?[`Failure at keys`,r.join(`,`)].join(`: `):``,i.length?[`Missing keys`,i.join(`,`)].join(`: `):``].filter(A.isTruthy).join(`
`)})}function Yj(e,t){let n=Qj(e).filter(e=>A.isPropertyKey(e));return n.length?n.filter(e=>!A.hasKey(t,e)):[]}function Xj({keysShape:e,valuesShape:t,isPartial:n}){if(n)return{};{let n=Qj(e),r=t.default;return Object.fromEntries(n.map(e=>[e,r]))}}function Zj(e){return Cj(e)?e:wj(e)?Sj(e):A.isObject(e)?Oj(e):A.isArray(e)&&A.isLengthAtLeast(e,1)?Pj(...e.map(e=>kj(e))):A.isPropertyKey(e)?Sj(e):Sj(uO.Undefined())}function Qj(e){let t=e.$_schema,n=t[F].toLowerCase();return[`const`,`literal`].includes(n)?[t.const]:n===`union`?o(t.anyOf.flatMap(e=>Qj(Sj(e)))):[`undefined`,`number`,`string`,`symbol`].includes(n)?[]:Qj(Zj(e.default))}function $j(e){return Sj(uO.Unknown({default:e}))}var eM=`Africa/Abidjan.Africa/Accra.Africa/Addis_Ababa.Africa/Algiers.Africa/Asmara.Africa/Bamako.Africa/Bangui.Africa/Banjul.Africa/Bissau.Africa/Blantyre.Africa/Brazzaville.Africa/Bujumbura.Africa/Cairo.Africa/Casablanca.Africa/Ceuta.Africa/Conakry.Africa/Dakar.Africa/Dar_es_Salaam.Africa/Djibouti.Africa/Douala.Africa/El_Aaiun.Africa/Freetown.Africa/Gaborone.Africa/Harare.Africa/Johannesburg.Africa/Juba.Africa/Kampala.Africa/Khartoum.Africa/Kigali.Africa/Kinshasa.Africa/Lagos.Africa/Libreville.Africa/Lome.Africa/Luanda.Africa/Lubumbashi.Africa/Lusaka.Africa/Malabo.Africa/Maputo.Africa/Maseru.Africa/Mbabane.Africa/Mogadishu.Africa/Monrovia.Africa/Nairobi.Africa/Ndjamena.Africa/Niamey.Africa/Nouakchott.Africa/Ouagadougou.Africa/Porto-Novo.Africa/Sao_Tome.Africa/Timbuktu.Africa/Tripoli.Africa/Tunis.Africa/Windhoek.America/Adak.America/Anchorage.America/Anguilla.America/Antigua.America/Araguaina.America/Argentina/Buenos_Aires.America/Argentina/Catamarca.America/Argentina/ComodRivadavia.America/Argentina/Cordoba.America/Argentina/Jujuy.America/Argentina/La_Rioja.America/Argentina/Mendoza.America/Argentina/Rio_Gallegos.America/Argentina/Salta.America/Argentina/San_Juan.America/Argentina/San_Luis.America/Argentina/Tucuman.America/Argentina/Ushuaia.America/Aruba.America/Asuncion.America/Atikokan.America/Bahia.America/Bahia_Banderas.America/Barbados.America/Belem.America/Belize.America/Blanc-Sablon.America/Boa_Vista.America/Bogota.America/Boise.America/Cambridge_Bay.America/Campo_Grande.America/Cancun.America/Caracas.America/Cayenne.America/Cayman.America/Chicago.America/Chihuahua.America/Coral_Harbour.America/Costa_Rica.America/Creston.America/Cuiaba.America/Curacao.America/Danmarkshavn.America/Dawson.America/Dawson_Creek.America/Denver.America/Detroit.America/Dominica.America/Edmonton.America/Eirunepe.America/El_Salvador.America/Ensenada.America/Fort_Nelson.America/Fortaleza.America/Glace_Bay.America/Goose_Bay.America/Grand_Turk.America/Grenada.America/Guadeloupe.America/Guatemala.America/Guayaquil.America/Guyana.America/Halifax.America/Havana.America/Hermosillo.America/Indiana/Indianapolis.America/Indiana/Knox.America/Indiana/Marengo.America/Indiana/Petersburg.America/Indiana/Tell_City.America/Indiana/Vevay.America/Indiana/Vincennes.America/Indiana/Winamac.America/Inuvik.America/Iqaluit.America/Jamaica.America/Juneau.America/Kentucky/Louisville.America/Kentucky/Monticello.America/La_Paz.America/Lima.America/Los_Angeles.America/Maceio.America/Managua.America/Manaus.America/Martinique.America/Matamoros.America/Mazatlan.America/Menominee.America/Merida.America/Metlakatla.America/Mexico_City.America/Miquelon.America/Moncton.America/Monterrey.America/Montevideo.America/Montreal.America/Montserrat.America/Nassau.America/New_York.America/Nipigon.America/Nome.America/Noronha.America/North_Dakota/Beulah.America/North_Dakota/Center.America/North_Dakota/New_Salem.America/Nuuk.America/Ojinaga.America/Panama.America/Pangnirtung.America/Paramaribo.America/Phoenix.America/Port-au-Prince.America/Port_of_Spain.America/Porto_Velho.America/Puerto_Rico.America/Punta_Arenas.America/Rainy_River.America/Rankin_Inlet.America/Recife.America/Regina.America/Resolute.America/Rio_Branco.America/Rosario.America/Santarem.America/Santiago.America/Santo_Domingo.America/Sao_Paulo.America/Scoresbysund.America/Sitka.America/St_Johns.America/St_Kitts.America/St_Lucia.America/St_Thomas.America/St_Vincent.America/Swift_Current.America/Tegucigalpa.America/Thule.America/Thunder_Bay.America/Tijuana.America/Toronto.America/Tortola.America/Vancouver.America/Whitehorse.America/Winnipeg.America/Yakutat.America/Yellowknife.Antarctica/Casey.Antarctica/Davis.Antarctica/DumontDUrville.Antarctica/Macquarie.Antarctica/Mawson.Antarctica/McMurdo.Antarctica/Palmer.Antarctica/Rothera.Antarctica/Syowa.Antarctica/Troll.Antarctica/Vostok.Asia/Aden.Asia/Almaty.Asia/Amman.Asia/Anadyr.Asia/Aqtau.Asia/Aqtobe.Asia/Ashgabat.Asia/Atyrau.Asia/Baghdad.Asia/Bahrain.Asia/Baku.Asia/Bangkok.Asia/Barnaul.Asia/Beirut.Asia/Bishkek.Asia/Brunei.Asia/Chita.Asia/Choibalsan.Asia/Chongqing.Asia/Colombo.Asia/Damascus.Asia/Dhaka.Asia/Dili.Asia/Dubai.Asia/Dushanbe.Asia/Famagusta.Asia/Gaza.Asia/Harbin.Asia/Hebron.Asia/Ho_Chi_Minh.Asia/Hong_Kong.Asia/Hovd.Asia/Irkutsk.Asia/Jakarta.Asia/Jayapura.Asia/Jerusalem.Asia/Kabul.Asia/Kamchatka.Asia/Karachi.Asia/Kashgar.Asia/Kathmandu.Asia/Khandyga.Asia/Kolkata.Asia/Krasnoyarsk.Asia/Kuala_Lumpur.Asia/Kuching.Asia/Kuwait.Asia/Macau.Asia/Magadan.Asia/Makassar.Asia/Manila.Asia/Muscat.Asia/Nicosia.Asia/Novokuznetsk.Asia/Novosibirsk.Asia/Omsk.Asia/Oral.Asia/Phnom_Penh.Asia/Pontianak.Asia/Pyongyang.Asia/Qatar.Asia/Qostanay.Asia/Qyzylorda.Asia/Riyadh.Asia/Sakhalin.Asia/Samarkand.Asia/Seoul.Asia/Shanghai.Asia/Singapore.Asia/Srednekolymsk.Asia/Taipei.Asia/Tashkent.Asia/Tbilisi.Asia/Tehran.Asia/Tel_Aviv.Asia/Thimphu.Asia/Tokyo.Asia/Tomsk.Asia/Ulaanbaatar.Asia/Urumqi.Asia/Ust-Nera.Asia/Vientiane.Asia/Vladivostok.Asia/Yakutsk.Asia/Yangon.Asia/Yekaterinburg.Asia/Yerevan.Atlantic/Azores.Atlantic/Bermuda.Atlantic/Canary.Atlantic/Cape_Verde.Atlantic/Faroe.Atlantic/Jan_Mayen.Atlantic/Madeira.Atlantic/Reykjavik.Atlantic/South_Georgia.Atlantic/St_Helena.Atlantic/Stanley.Australia/Adelaide.Australia/Brisbane.Australia/Broken_Hill.Australia/Currie.Australia/Darwin.Australia/Eucla.Australia/Hobart.Australia/Lindeman.Australia/Lord_Howe.Australia/Melbourne.Australia/Perth.Australia/Sydney.CET.CST6CDT.EET.EST.EST5EDT.Etc/GMT+1.Etc/GMT+10.Etc/GMT+11.Etc/GMT+12.Etc/GMT+2.Etc/GMT+3.Etc/GMT+4.Etc/GMT+5.Etc/GMT+6.Etc/GMT+7.Etc/GMT+8.Etc/GMT+9.Etc/GMT-1.Etc/GMT-10.Etc/GMT-11.Etc/GMT-12.Etc/GMT-13.Etc/GMT-14.Etc/GMT-2.Etc/GMT-3.Etc/GMT-4.Etc/GMT-5.Etc/GMT-6.Etc/GMT-7.Etc/GMT-8.Etc/GMT-9.Europe/Amsterdam.Europe/Andorra.Europe/Astrakhan.Europe/Athens.Europe/Belfast.Europe/Belgrade.Europe/Berlin.Europe/Brussels.Europe/Bucharest.Europe/Budapest.Europe/Chisinau.Europe/Copenhagen.Europe/Dublin.Europe/Gibraltar.Europe/Guernsey.Europe/Helsinki.Europe/Isle_of_Man.Europe/Istanbul.Europe/Jersey.Europe/Kaliningrad.Europe/Kirov.Europe/Kyiv.Europe/Lisbon.Europe/Ljubljana.Europe/London.Europe/Luxembourg.Europe/Madrid.Europe/Malta.Europe/Minsk.Europe/Monaco.Europe/Moscow.Europe/Oslo.Europe/Paris.Europe/Prague.Europe/Riga.Europe/Rome.Europe/Samara.Europe/Sarajevo.Europe/Saratov.Europe/Simferopol.Europe/Skopje.Europe/Sofia.Europe/Stockholm.Europe/Tallinn.Europe/Tirane.Europe/Tiraspol.Europe/Ulyanovsk.Europe/Uzhgorod.Europe/Vaduz.Europe/Vienna.Europe/Vilnius.Europe/Volgograd.Europe/Warsaw.Europe/Zagreb.Europe/Zaporozhye.Europe/Zurich.HST.Indian/Antananarivo.Indian/Chagos.Indian/Christmas.Indian/Cocos.Indian/Comoro.Indian/Kerguelen.Indian/Mahe.Indian/Maldives.Indian/Mauritius.Indian/Mayotte.Indian/Reunion.MET.MST.MST7MDT.PST8PDT.Pacific/Apia.Pacific/Auckland.Pacific/Bougainville.Pacific/Chatham.Pacific/Chuuk.Pacific/Easter.Pacific/Efate.Pacific/Enderbury.Pacific/Fakaofo.Pacific/Fiji.Pacific/Funafuti.Pacific/Galapagos.Pacific/Gambier.Pacific/Guadalcanal.Pacific/Guam.Pacific/Honolulu.Pacific/Johnston.Pacific/Kanton.Pacific/Kiritimati.Pacific/Kosrae.Pacific/Kwajalein.Pacific/Majuro.Pacific/Marquesas.Pacific/Midway.Pacific/Nauru.Pacific/Niue.Pacific/Norfolk.Pacific/Noumea.Pacific/Pago_Pago.Pacific/Palau.Pacific/Pitcairn.Pacific/Pohnpei.Pacific/Port_Moresby.Pacific/Rarotonga.Pacific/Saipan.Pacific/Tahiti.Pacific/Tarawa.Pacific/Tongatapu.Pacific/Wake.Pacific/Wallis.UTC.WET`.split(`.`).reduce((e,t)=>(e[t]=t,e),{});yn.defaultZone.name;var tM=eM.UTC,nM=Sj({hour:Gj({...to,default:to.min}),minute:Gj({...no,default:no.min}),second:Gj({...ro,default:ro.min}),millisecond:Gj({...io,default:io.min}),timezone:Oj(eM,tM)});Sj(Mj(Sj({year:2023,month:Gj({...mo,default:mo.min}),day:Gj({...ho,default:ho.min}),timezone:Oj(eM,tM)}),nM)),D.Years,D.Months,D.Weeks,D.Days,D.Hours,D.Minutes,D.Seconds,D.Milliseconds,Sj(Pj({get:kj(E.Month),in:Pj(kj(E.Year))},{get:kj(E.Week),in:Pj(kj(E.Year),kj(E.Month))},{get:kj(E.Day),in:Pj(kj(E.Year),kj(E.Month),kj(E.Week))},{get:kj(E.Hour),in:Pj(kj(E.Year),kj(E.Month),kj(E.Week),kj(E.Day))},{get:kj(E.Minute),in:Pj(kj(E.Year),kj(E.Month),kj(E.Week),kj(E.Day),kj(E.Hour))},{get:kj(E.Second),in:Pj(kj(E.Year),kj(E.Month),kj(E.Week),kj(E.Day),kj(E.Hour),kj(E.Minute))},{get:kj(E.Millisecond),in:Pj(kj(E.Year),kj(E.Month),kj(E.Week),kj(E.Day),kj(E.Hour),kj(E.Minute),kj(E.Second))})),qj({keys:Oj(D),values:-1,partial:!0});var rM;(function(e){e.Date=`date`,e.Time=`time`,e.DateTime=`datetime-local`})(rM||={});var iM;(function(e){e.Hour=`hour`,e.Minute=`minute`,e.Second=`second`,e.Millisecond=`millisecond`})(iM||={});var aM;(function(e){e.Year=`year`,e.Month=`month`,e.Day=`day`})(aM||={}),Pl({year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0},ke(iM)),Dj({default:new Date().toISOString(),name:`UtcIsoString`,checkValue(e){return oM(e)}});function oM(e){return $a.fromISO(e).toUTC().toISO()===e}$a.DATE_SHORT,$a.DATE_MED,$a.DATE_MED_WITH_WEEKDAY,$a.DATE_FULL,$a.DATE_HUGE,$a.TIME_SIMPLE,$a.TIME_WITH_SECONDS,$a.TIME_WITH_SHORT_OFFSET,$a.TIME_WITH_LONG_OFFSET,$a.TIME_24_SIMPLE,$a.TIME_24_WITH_SECONDS,$a.TIME_24_WITH_SHORT_OFFSET,$a.TIME_24_WITH_LONG_OFFSET,$a.DATETIME_SHORT,$a.DATETIME_SHORT_WITH_SECONDS,$a.DATETIME_MED,$a.DATETIME_MED_WITH_SECONDS,$a.DATETIME_MED_WITH_WEEKDAY,$a.DATETIME_FULL,$a.DATETIME_FULL_WITH_SECONDS,$a.DATETIME_HUGE,$a.DATETIME_HUGE_WITH_SECONDS;var sM=Sj({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:$j()});function cM(e){return Vj(e,sM,{allowExtraKeys:!0})}var lM=class extends O_{value;equalityCheck;constructor(e){super(),this.value=e.defaultValue,this.equalityCheck=`equalityCheck`in e?e.equalityCheck:k_}setValue(e){return super.setValue(e)}listen(e,t){return super.listen(e,t)}removeListener(e){return super.removeListener(e)}},{I:uM}=Od,dM=e=>e,fM=()=>document.createComment(``),pM=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new uM(r.insertBefore(fM(),i),r.insertBefore(fM(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=dM(e).nextSibling;dM(r).insertBefore(e,i),e=t}}}return n},mM=(e,t,n=e)=>(e._$AI(t,n),e),hM={},gM=(e,t=hM)=>e._$AH=t,_M=e=>e._$AH,vM=e=>{e._$AR(),e._$AA.remove()},yM={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},bM=e=>(...t)=>({_$litDirective$:e,values:t}),xM=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},SM={attribute:!0,type:String,converter:Hu,reflect:!1,hasChanged:Uu},CM=(e=SM,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function wM(e){return(t,n)=>typeof n==`object`?CM(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}var TM=bM(class extends xM{constructor(e){if(super(e),e.type!==yM.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return md}}),EM=e=>e??j;function*DM(e,t){let n=typeof t==`function`;if(e!==void 0){let r=-1;for(let i of e)r>-1&&(yield n?t(r):t),r++,yield i}}var OM=class extends xM{constructor(e){if(super(e),this.it=j,e.type!==yM.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===j||e==null)return this._t=void 0,this.it=e;if(e===md)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};OM.directiveName=`unsafeHTML`,OM.resultType=1;var kM=bM(OM);function AM(e,t,n){return e?t(e):n?.(e)}var jM=class extends Md{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds};function MM(e,t,n){let r=!t.length&&!n.length,i=e.length?!1:!t.filter(e=>!!e.index).length;if(r||i)return[...e];let a=e.map(e=>[e]);return a.length||(a[0]=[]),n.forEach(t=>{t>=0&&t<e.length&&(a[t]=[])}),t.forEach(e=>{let t=a[e.index];t&&t.splice(0,0,...e.values)}),a.flat()}function NM(e){return A.hasKey(e,`_elementVirIsMinimalDefinitionWithInputs`)&&!!e._elementVirIsMinimalDefinitionWithInputs}function PM(e){return A.hasKey(e,`tagName`)&&!!e.tagName&&typeof e.tagName==`string`}function FM(e){return Jc(e,e=>{if(NM(e))return e.definition;if(PM(e))return e.tagInterpolationKey||e},A.isTruthy)}var IM=new WeakMap;function LM(e,t){return zM(IM,[e,...FM(t)]).value?.template}function RM(e,t,n){return VM(IM,[e,...FM(t)],n)}function zM(e,t,n=0){let{currentTemplateAndNested:r,reason:i}=BM(e,t,n);return r?n===t.length-1?{value:r,reason:`reached end of keys array`}:r.nested?zM(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function BM(e,t,n){let r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};let i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:`key and value exists`}}function VM(e,t,n,r=0){let{currentTemplateAndNested:i,currentKey:a,reason:o}=BM(e,t,r);if(!a)return{result:!1,reason:o};let s=i??{nested:void 0,template:void 0};if(i||e.set(a,s),r===t.length-1)return s.template=n,{result:!0,reason:`set value at end of keys array`};let c=s.nested??new WeakMap;return s.nested||=c,VM(c,t,n,r+1)}function HM(e,t,n){let r=LM(e,t),i=r??n();if(!r){let n=RM(e,t,i);if(!n.result)throw Error(`Failed to set template transform: ${n.reason}`)}let a=i.valuesTransform(t),o=MM(t,a.valueInsertions,a.valueIndexDeletions);return{strings:i.templateStrings,values:o}}function UM(e,t,n,r){let i=[],a=[],o=[],s=[];return e.forEach((c,l)=>{let u=i.length-1,d=i[u],f=l-1,p=t[f];r&&r(c);let m,h=[];if(typeof d==`string`&&(m=n(d,c,p),m)){i[u]=[d,m.replacement].join(``),o.push(f);let e=m.getExtraValues;h=e?e(p):[],h.length&&e?(i[u]+=` `,h.forEach((e,t)=>{t&&i.push(` `)}),s.push(t=>{let n=t[f];return{index:f,values:e(n)}}),i.push(c)):i[u]+=c}m||i.push(c);let g=e.raw[l];m?(a[u]=[a[u],m.replacement,g].join(``),h.length&&h.forEach(()=>{a.push(``)})):a.push(g)}),{templateStrings:Object.assign([],i,{raw:a}),valuesTransform(e){return{valueIndexDeletions:o,valueInsertions:s.flatMap(t=>t(e))}}}}function WM(...[e,t,n]){if(PM(n))return{replacement:n.tagName,getExtraValues:void 0}}function GM(e,t){return UM(e,t,WM)}function z(e,...t){let n=HM(e,t,()=>GM(e,t));return Ou(n.strings,...n.values)}var KM={allowPolymorphicState:!1,errorHandler:void 0};function qM(e,t){let n=e.instanceState;De(t).forEach(r=>{if(n&&r in n)throw Error(`Cannot set input '${String(r)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);`instanceInputs`in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),`instanceInputs`in e&&De(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}var JM=class extends CustomEvent{_type=``;get type(){return this._type}constructor(e,t){super(typeof e==`string`?e:e.type,{detail:t,bubbles:!0,composed:!0})}};function YM(){return e=>class extends JM{static type=e;_type=e;constructor(t){super(e,t)}}}function XM(){return YM()}function ZM(e,t){return t?Object.keys(t).filter(e=>{if(typeof e!=`string`)throw TypeError(`Expected event key of type string but got type '${typeof e}' for key ${String(e)}`);if(e===``)throw Error(`Got empty string for events key.`);return!0}).reduce((t,n)=>(t[n]=YM()([e,n].join(`-`)),t),{}):{}}function QM(e){return e?Ml(e,e=>e):{}}function $M(e,t){t in e||wM()(e,t)}function eN(e,t,n){if(typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`)throw TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function tN(e,t){let n=e;function r(n){t?eN(n,e,e.tagName):$M(e,n)}function i(e,t){return r(t),n[t]}return new Proxy({},{get:i,set(t,i,a){r(i);let o=n[i];function s(e){t[i]=e,n[i]=e}let c=e.observablePropertyListenerMap[i];if(o!==a&&cM(o)&&c&&o.removeListener(c),cM(a))if(c)a.listen(!1,c);else{function t(){e.requestUpdate()}e.observablePropertyListenerMap[i]=t,a.listen(!1,t)}else cM(o)&&(e.observablePropertyListenerMap[i]=void 0);return s(a),!0},ownKeys(e){return Reflect.ownKeys(e)},getOwnPropertyDescriptor(e,t){if(t in e)return{get value(){return i(e,t)},configurable:!0,enumerable:!0}},has(e,t){return Reflect.has(e,t)}})}function nN(e,t){let n=[e,`-`].join(``);Object.keys(t).forEach(t=>{if(!t.startsWith(n))throw Error(`Invalid element string name '${t}' in '${e}': element string names must begin with the element's tag name.`)})}function rN(e,t,n){return n?Yc(n,n=>({key:n,value:[e,t,n].join(`-`)}),{useRequired:!0}):{}}function iN({hostClassNames:e,cssVars:t}){return{hostClasses:Ml(e,(e,t)=>({name:Du(t),selector:Du(`:host(.${t})`)})),cssVars:t}}function aN({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&De(t).forEach(a=>{let o=t[a],s=n[a];typeof o==`function`&&(o({state:r,inputs:i})?e.classList.add(s):e.classList.remove(s))})}function oN({element:e,eventsMap:t,cssVars:n,slotNamesMap:r,testIdsMap:i}){function a(t){De(t).forEach(n=>{let r=t[n];e.instanceState[n]=r})}return{cssVars:n,slotNames:r,testIds:i,dispatch:t=>e.dispatchEvent(t),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:a}}function sN(...e){return Fc.isEmpty(e),e=>{let t=e;if(!A.isObject(t))throw TypeError("Cannot define element with non-object init: ${init}");return cN({...t,options:{...t.options}})}}function cN(e){if(!A.isObject(e))throw TypeError("Cannot define element with non-object init: ${init}");if(!A.isString(e.tagName))throw TypeError(`Missing valid tagName (expected a string).`);if(!e.render||typeof e.render==`string`)throw Error(`Failed to define element '${e.tagName}': render is not a function`);let t={...KM,...e.options},n=ZM(e.tagName,e.events),r=QM(e.hostClasses);e.hostClasses&&nN(e.tagName,e.hostClasses),e.cssVars&&nN(e.tagName,e.cssVars);let i=e.cssVars?Ld(e.cssVars):{},a=rN(e.tagName,`slot`,e.slotNames),o=rN(e.tagName,`test-id`,e.testIds),s=typeof e.styles==`function`?e.styles(iN({hostClassNames:r,cssVars:i})):e.styles||z``,c=e.render;function l(...[e]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:u,inputs:e}}let u=class extends jM{static elementOptions=t;static tagName=e.tagName;static styles=s;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return oN({element:this,eventsMap:n,cssVars:i,slotNamesMap:a,testIdsMap:o})}static assign=l;static events=n;static render=c;static hostClasses=r;static cssVars=i;static init=e;static slotNames=a;static testIds=o;get InstanceType(){throw Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;let t=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;let n=e.state(t);if(n instanceof Promise)throw TypeError(`init cannot be asynchronous`);De(n).forEach(e=>{$M(this,e),this.instanceState[e]=n[e]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(t)instanceof Promise))throw TypeError(`init cannot be asynchronous`);let n=c(t);if(n instanceof Promise)throw TypeError(`render cannot be asynchronous`);return aN({host:t.host,hostClassesInit:e.hostClasses,hostClassNames:r,state:t.state,inputs:t.inputs}),this._lastRenderedProps={inputs:{...t.inputs},state:{...t.state}},n}catch(n){let r=Ie(n,`Failed to render ${e.tagName}`);return console.error(r),this._lastRenderError=r,t.errorHandler?.(r),Ne(r)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;let t=this.createRenderParams();if(e.init(t)instanceof Promise)throw TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(e=>{A.hasKey(e,`destroy`)&&A.isFunction(e.destroy)&&e.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup&&this._stateCalled){let t=this.createRenderParams();if(e.cleanup(t)instanceof Promise)throw TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(e){qM(this,e)}observablePropertyListenerMap={};instanceInputs=tN(this,!1);instanceState=tN(this,!t.allowPolymorphicState);constructor(){super(),this.definition=u}};return Object.defineProperties(u,{name:{value:Bl(e.tagName,{firstLetterCase:Ll.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,u)),u}var lN=class extends M_{isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}};function uN(e){return new lN(e)}var dN=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},fN=bM(class extends xM{constructor(e){if(super(e),e.type!==yM.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=_M(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,d=0,f=i.length-1,p=0,m=a.length-1;for(;d<=f&&p<=m;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(s[d]===o[p])c[p]=mM(i[d],a[p]),d++,p++;else if(s[f]===o[m])c[m]=mM(i[f],a[m]),f--,m--;else if(s[d]===o[m])c[m]=mM(i[d],a[m]),pM(e,c[m+1],i[d]),d++,m--;else if(s[f]===o[p])c[p]=mM(i[f],a[p]),pM(e,i[d],i[f]),f--,p++;else if(l===void 0&&(l=dN(o,p,m),u=dN(s,d,f)),l.has(s[d]))if(l.has(s[f])){let t=u.get(o[p]),n=t===void 0?null:i[t];if(n===null){let t=pM(e,i[d]);mM(t,a[p]),c[p]=t}else c[p]=mM(n,a[p]),pM(e,i[d],n),i[t]=null;p++}else vM(i[f]),f--;else vM(i[d]),d++;for(;p<=m;){let t=pM(e,c[m+1]);mM(t,a[p]),c[p++]=t}for(;d<=f;){let e=i[d++];e!==null&&vM(e)}return this.ut=o,gM(e,c),md}});function pN(e,t){return hN(e,t),e.element}function mN(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function hN(e,t){let n=mN(e),r=n?`: in ${n}`:``;if(e.type!==yM.ELEMENT)throw Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw Error(`${t} directive found no element${r}.`)}function gN(e,t){return bM(class extends xM{element;constructor(t){super(t),this.element=Ac.instanceOf(pN(t,e),HTMLElement)}render(...e){return t({params:e,directive:this,element:this.element}),md}})}var _N=gN(`attributes`,({element:e,params:[t],directive:n})=>{if(!t)return;let r=Gc(n,`allAttributesApplied`,()=>new Set);De(t).forEach(e=>{if(e.toLowerCase()!==e)throw Error(`Cannot assign attribute name with uppercase letters: ${e}`);r.add(e)}),r.forEach(n=>{let r=t[n];r==null||r===!1||r===j?e.removeAttribute(n):r===``||r===!0?e.setAttribute(n,``):e.setAttribute(n,String(r))})});function vN(e){let t=bM(class extends xM{element;constructor(t){super(t),this.element=pN(t,e)}render(t){return this.element.setAttribute(e,t),md}});return{attributeSelector(t){return`[${e}="${t}"]`},attributeDirective(e){return t(e)},attributeName:e}}function B(e,t){return yN(e,t)}var yN=bM(class extends xM{element;lastListenerMetaData;constructor(e){super(e),this.element=pN(e,`listen`)}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:e=>this.lastListenerMetaData?.callback(e)}}render(e,t){let n=typeof e==`string`?e:e.type;if(typeof n!=`string`)throw TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(n)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),md}});function bN(e){return B(`keydown`,async t=>{let n=t.code.toLowerCase();(n.includes(`enter`)||n.includes(`return`)||n===`space`)&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}var xN=`onDomCreated`,SN=bM(class extends xM{element;constructor(e){super(e),hN(e,xN)}update(e,[t]){hN(e,xN);let n=e.element;return n!==this.element&&(window.requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),CN=`onDomRendered`,wN=bM(class extends xM{constructor(e){super(e),hN(e,CN)}update(e,[t]){hN(e,CN);let n=e.element;return window.requestAnimationFrame(()=>t(n)),this.render(t)}render(e){}}),TN=`onResize`,EN=bM(class extends xM{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&DN(this.element,this.callback,e)});callback;constructor(e){super(e),hN(e,TN)}update(e,[t]){hN(e,TN),this.callback=t;let n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function DN(e,t,n){let r=n[0];if(!r)throw console.error(n),Error(`Resize observation triggered but the first entry was empty.`);t({target:r.target,contentRect:r.contentRect},e)}function ON(e,t,n,r,i={}){let a=i.useLastResolvedValue?e.lastResolvedValue:e.value;return a instanceof Error?r?r(a):Ne(a):A.isPromiseLike(a)||i.useLastResolvedValue&&a===void 0?t:n?n(a):a}function kN(e,t,n){return AM(e,()=>t,()=>n)}var{attributeDirective:AN,attributeSelector:jN,attributeName:MN}=vN(`data-test-id`),NN=AN;function PN(e){let{assertInputs:t,transformInputs:n}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(e=>e)};return(...e)=>r=>(t(r),sN(...e)(n(r)))}var FN=!1;function IN(e,t){return t?LN(e,t):LN(void 0,e)}var LN=bM(class extends xM{element;constructor(e){super(e),this.element=pN(e,`assign`)}render(e,t){return qM(this.element,t),md}}),RN={};function zN(e,t){return t.map((t,n)=>{let r=e[n],i=e[n+1];if(r&&i){let{shouldHaveTagNameHere:e}=BN(r,i);if(e&&A.isString(t))return{tagName:t,tagInterpolationKey:Gc(RN,t,()=>({tagName:t}))}}return t})}function BN(e,t){let n=e.trim().endsWith(`<`)&&!!t.match(/^[\s>]/),r=e.trim().endsWith(`</`)&&t.trim().startsWith(`>`);return{isOpeningTag:n,shouldHaveTagNameHere:n||r}}function VN(...[e,t,n]){let r=NM(n)?n.definition:n,{isOpeningTag:i,shouldHaveTagNameHere:a}=BN(e,t),o=PM(r);if(o&&a&&r.tagInterpolationKey)return{replacement:r.tagName,getExtraValues:void 0};if(a&&!o)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:r}),Error(`Got interpolated tag name but found no tag name on the given value: '${r?.tagName||r?.prototype?.constructor?.name||r?.constructor?.name}'`);if(!(!a||!o))return{replacement:r.tagName,getExtraValues(e){let t=NM(e)?e.inputs:void 0;return[i&&t?IN(t):void 0].filter(A.isTruthy)}}}function HN(e){return gl(e,/<\/\s*[^\s><]+\s*>/g).reduce((e,t)=>{let n=Il(t.replace(/\n/g,` `)).replace(/<\/|>/g,``);return n.includes(`-`)?e.concat(n):e},[])}function UN(e){if(FN){let t=HN(e);t.length&&console.error(`Custom element tags must be interpolated from declarative elements: ${t.join(`, `)}`)}}function WN(e){return UM(e.strings,e.values,VN,UN)}function V(e,...t){let n=zN(e,t),r=pd(e,...n),i=HM(e,n,()=>WN(r));return{...r,strings:i.strings,values:i.values}}function GN(e){if(`templateString`in e)return e.templateString;let{strings:t,values:n}=e;if(!t?.length&&!n?.length)return``;let r=[...n||[],``];return Il((t??[``]).map((e,t)=>`${e}${KN(e,r[t])}`).join(``))}function KN(e,t){return t._$litType$!=null||t._$litDirective$!=null?GN(t):Array.isArray(t)?t.map(e=>GN(e)).join(``):e.endsWith(`=`)?`"${t}"`:t}function qN(e){return Ml(e,(e,t)=>t instanceof v_?Du(t.toString({format:`hex`})):qN(t))}var JN=`dodgerblue`;function YN(e){return Math.abs(e.contrast(`white`,`APCA`))>Math.abs(e.contrast(`black`,`APCA`))?`white`:`black`}function XN({background:e,foreground:t}){return{background:e??new v_(YN(t)),foreground:t??new v_(YN(e))}}var ZN;(function(e){e.Dark=`dark`,e.Light=`light`})(ZN||={});function QN(e){return e===`black`?`white`:`black`}var $N={black:{foregroundFaint1:new v_(`#ccc`),foregroundFaint2:new v_(`#eee`)},white:{foregroundFaint1:new v_(`#ccc`),foregroundFaint2:new v_(`#eee`)}},eP={black:{backgroundFaint1:new v_(`#666`),backgroundFaint2:new v_(`#444`)},white:{backgroundFaint1:new v_(`#ccc`),backgroundFaint2:new v_(`#fafafa`)}};function tP({themeColor:e=JN,themeStyle:t=ZN.Light}={}){let n=new v_(e),r=new v_(t===ZN.Dark?`black`:`white`),i=YN(r),a=new v_(i);return qN({nav:{hover:XN({background:n.clone().set({"hsl.l":93})}),active:XN({background:n.clone().set({"hsl.l":90})}),selected:XN({background:n.clone().set({"hsl.l":85})})},accent:{icon:n.clone().set({"hsl.l":40})},page:{background:r,...eP[QN(i)],foreground:a,...$N[i]}})}async function nP(e=1){let t=new ze;function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return n(),t.promise}function rP(e,t){return{element:e,children:iP(e,t??0,0)}}function iP(e,t,n){return aP(e).map(e=>{let r=n+1;return{element:e,children:t&&r>=Math.abs(t)?[]:iP(e,t,r)}})}function aP(e){return[...e.children,...e.shadowRoot?.children??[]]}function oP(e){return e.matches(`:focus`)}function sP(e){if(e instanceof ShadowRoot)return e.host;let t=e.parentNode;if(t)return t instanceof Element?t:sP(t)}function cP(e,t){if(t(e))return e;let n=sP(e);if(n)return cP(n,t)}function lP(e,t,n={}){let r=n.useOriginalTarget?e.target:e.currentTarget;if(!(r instanceof t)){let i=t.name,a=r?.constructor.name,o=n.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${a}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${a}'.`;throw Error(o)}return r}function uP(e){let t=sP(e);return t&&cP(t,e=>globalThis.getComputedStyle(e).overflowY!==`visible`)||document.body}function dP(e){let t=0,n=document.activeElement||void 0;for(;n;){if(e({depth:t,element:n}))return t;n=n.shadowRoot?.activeElement||void 0,n&&++t}return t}function fP({searchQuery:e,searchIn:t}){let n=t.length,r=e.length;if(r>n)return!1;if(r===n)return e===t;let i=t.toLowerCase(),a=e.toLowerCase();outer:for(let e=0,t=0;e<r;e++){let r=a.codePointAt(e);for(;t<n;)if(i.codePointAt(t++)===r)continue outer;return!1}return!0}var pP=nl(32);function mP(e){return e.join(pP)}function hP(e){return e.length?[mP(e),...hP(e.slice(0,-1))]:[]}var gP=[`error`,`errors`];function _P(e){return gP.includes(e)}function vP({flattenedNodes:e,searchQuery:t}){let n={};function r(e){Object.values(e.children).map(e=>(r(e),mP(e.fullUrlBreadcrumbs))).forEach(e=>n[e]=!0)}return e.forEach(e=>{let i=e.entry.errors.length&&_P(t),a=mP(e.fullUrlBreadcrumbs);if(fP({searchIn:[e.entry.title,...e.entry.descriptionParagraphs.map(e=>A.isString(e)?e:GN(e))].join(` `).toLowerCase(),searchQuery:t.toLowerCase()})||i||n[a]){let t=hP(e.fullUrlBreadcrumbs);r(e),t.forEach(e=>n[e]=!0)}else n[a]=!1}),e.filter(e=>{let t=n[mP(e.fullUrlBreadcrumbs)];if(!A.isBoolean(t))throw TypeError(`Failed to find '${e.fullUrlBreadcrumbs.join(` > `)}' in includeInSearchResults.`);return t})}var yP=class extends Error{name=`SpaRouterError`},bP=class extends yP{name=`GlobalUrlEventsConsolidationError`},xP=class extends yP{name=`SanitizationDepthMaxed`};Sj({paths:[``],search:Nj(Pj(void 0,qj({keys:``,values:[``]}))),hash:Nj(Pj(void 0,``))});var SP=Sj({basePath:Nj(``,{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:Nj(1,{alsoUndefined:!0}),disableWarnings:Nj(!1,{alsoUndefined:!0}),isPaused:Nj(!1,{alsoUndefined:!0})}),CP=`://`;function wP(...e){let t=e.join(`/`),[n,r=``]=t.includes(CP)?t.split(CP):[``,t],i=!1,a=r.replace(/\/{2,}/g,`/`).split(`/`).reduce((e,t,n,r)=>{if(i)return e;let a=r[n+1],o=t,s=a?.startsWith(`?`),c=!t.includes(`?`)&&s,l=a===`?`;if(s||c){i=!0;let e=!1,s=r.slice(n+2).reduce((t,n)=>(n.includes(`#`)&&(e=!0),e?t.concat(n):[t,n].join(`&`)),``);o=[t,a,l?fl({value:s,prefix:`&`}):s].join(``)}return e.concat(o)},[]);return[n,n?CP:``,a.join(`/`)].join(``)}var TP;(function(e){e.Encode=`encode`,e.Decode=`decode`,e.None=`none`})(TP||={});var EP;(function(e){e.Clear=`clear`,e.Replace=`replace`,e.Append=`append`})(EP||={});var DP=Sj({encoding:Nj(Pj(void 0,Oj(TP))),searchParamStrategy:Nj(Pj(void 0,Oj(EP)))});function OP(e,t){return e.map(e=>{if(e!=null)return kP(String(e),t)}).filter(e=>e!=null)}function kP(e,t){return t?.encoding===TP.Decode?decodeURIComponent(e):t?.encoding===TP.Encode?encodeURIComponent(e):e}var AP=Sj(qj({keys:``,values:[``]}));function jP(e,t,n){let r=n?.searchParamStrategy===EP.Clear?{}:Ml(e,(e,t)=>$c(t)),i=Ml(t,(e,t)=>{if(n?.searchParamStrategy===EP.Append){let i=r[e],a=A.isArray(i)?i:[i];if(t){let e=A.isArray(t)?t:[t];return OP([...a,...e],n)}else return OP(a,n)}else if(A.isArray(t))return OP(t,n);else if(t)return OP([t],n);else return});return Nl({...r,...i},(e,t)=>!!t)}function MP(e,t){return A.isString(e)&&!e.includes(`?`)?{}:(A.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,``).split(`&`).map(e=>{let[t,...n]=kl(e,`=`);return[t,n.length?n.join(`=`):void 0]}).reduce((e,[n,r])=>{let i=FP({options:t,key:n,value:r}),a=Gc(e,i.key,()=>[]);return r!=null&&a.push(i.value),e},{})}function NP(e){if(e!=null)return A.isArray(e)?[...e]:e===``?[]:[e]}function PP(e,t){let n=Jc(Object.entries(e),([e,n])=>{let r=NP(n);return r?.length?r.map(n=>{let r=FP({options:t,key:e,value:n});return[r.key,r.value].join(`=`)}):[e]},(e,[,t])=>t!=null).flat();return n.length?dl({value:n.join(`&`),prefix:`?`}):``}function FP({options:e,key:t,value:n}){return{key:kP(t,e),value:kP(String(n),e)}}function IP({hash:e,hostname:t,password:n,pathname:r,port:i,protocol:a,search:o,username:s}){return[a?a+`://`:``,s?encodeURIComponent(s)+`:`:``,n?encodeURIComponent(n)+`@`:``,zP({hostname:t,port:i}),RP({hash:e,pathname:r,search:o})].join(``)}function LP({pathname:e}){let t=fl({value:e,prefix:`/`});return t?t.split(`/`):[]}function RP({hash:e,pathname:t,search:n}){return[dl({value:t,prefix:`/`}),n?dl({value:n,prefix:`?`}):``,e?dl({value:e,prefix:`#`}):``].join(``)}function zP({hostname:e,port:t}){return[e,t?`:`+t:``].join(``)}function BP({hostname:e,port:t,protocol:n}){return[n,zP({hostname:e,port:t})].filter(A.isTruthy).join(`://`)}function VP(e,t){let n=A.isString(e)?fl({value:e,prefix:`.`}):e.toString(),r=n.replace(/^[^#]*(?:#|$)/,``),i=r?dl({value:kP(r,t),prefix:`#`}):``,a=n.replace(/#[^#]*$/,``),o=a.replace(/^[^?]*(?:\?|$)/,``),s=o?dl({value:kP(o,t),prefix:`?`}):``,c=a.replace(/\?[^?]*$/,``),l=c.includes(`://`)?c.replace(/:\/\/.*$/,``):``,u=c.replace(/^.*:\/\//,``).replace(/\/\//g,`/`),d=u.replace(/@.*/,``),f=u.replace(/^[^@]*@/,``),[p,...m]=d===f?[]:d.split(`:`).reverse(),h=decodeURIComponent(m.toReversed().join(``).replace(/[/:]/g,``)||``),g=decodeURIComponent(p?.replace(/[/:]/g,``)||``),ee=Ol(f.replace(/\/.*/,``),`:`,{caseSensitive:!0}).toReversed(),_=ee[0]?.endsWith(`]`)?``:ee[1]===`:`&&ee[0]||``,te=f.replace(RegExp(`:${_}($|/)`),`$1`).replace(/\/.*/,``),ne=kP(f.replace(/^[^/]*(\/|$)/,`$1`).replace(/^[^/]*(?:\/|$)/,`/`),t),re=zP({hostname:te,port:_}),ie=BP({hostname:te,port:_,protocol:l}),ae=IP({hash:i,hostname:te,password:g,pathname:ne,port:_,protocol:l,search:s,username:h}),oe=MP(s),se=LP({pathname:ne});return{fullPath:RP({hash:i,pathname:ne,search:s}),hash:i,host:re,hostname:te,href:ae,origin:ie,password:g,pathname:ne,paths:se,port:_,protocol:l,search:s,searchParams:oe,username:h}}Sj({hash:Nj(Pj(void 0,``)),search:Nj(Pj(void 0,``,qj({keys:``,values:Pj(null,void 0,``,-1,!1,0n,[null,void 0,``,-1,!1,0n])}))),hostname:Nj(Pj(void 0,``)),pathname:Nj(Pj(void 0,``)),paths:Nj(Pj(void 0,[``])),protocol:Nj(Pj(void 0,``)),username:Nj(Pj(void 0,``)),password:Nj(Pj(void 0,``)),port:Nj(Pj(void 0,``,-1))});function HP(e,t,n){let r=!!n,i=t==null||Vj(t,DP,{allowExtraKeys:!1}),a=i?VP(``):A.instanceOf(e,URL)||A.isString(e)?VP(e):e,o=i?e:t,s=A.isString(o)&&o.startsWith(`.`),c=A.isString(o)||A.instanceOf(o,URL)?Nl(VP(o),(e,t)=>A.isTruthy(t)):o,l=r?n:i?t:void 0,u=Ml(a,(e,t)=>{if(!A.hasKey(c,e))return t;let n=c[e];return A.isNumber(n)?String(n):A.isString(n)?e===`hash`&&n?dl({value:n,prefix:`#`}):e===`pathname`?dl({value:n,prefix:`/`}):n:t});A.hasKey(c,`paths`)&&c.paths&&(u.pathname=wP(s?a.pathname:``,...c.paths));let d=A.isString(c.search)?MP(dl({value:c.search,prefix:`?`})):al(c.search||{}),f=jP(u.searchParams,d,{...l,encoding:TP.None}),p=PP(f,l);return{...u,searchParams:f,search:p,paths:LP(u),fullPath:RP(u),host:zP(u),origin:BP(u),href:IP({...u,search:p})}}({...Sj({protocol:``,username:``,password:``,host:``,hostname:``,port:``,origin:``,pathname:`/`,paths:[``],search:``,searchParams:AP,hash:``,fullPath:`/`,href:`/`}).default});var UP=0;function WP(e){return!(e.type!==`click`&&e.type!==`mousedown`||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==UP)}var GP=`locationchange`,KP=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;var qP=KP?.pushState;function JP(...e){if(!qP)return;let t=qP.apply(KP,e);return globalThis.dispatchEvent(new Event(GP)),t}var YP=KP?.replaceState;function XP(...e){if(!YP)return;let t=YP.apply(KP,e);return globalThis.dispatchEvent(new Event(GP)),t}function ZP(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!KP)){if(KP.pushState===JP)throw new bP(`The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?`);if(KP.replaceState===XP)throw new bP(`The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?`);globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,KP.pushState=JP,KP.replaceState=XP,globalThis.addEventListener(`popstate`,()=>{globalThis.dispatchEvent(new Event(GP))})}}function QP(e,t){let n=VP(e),r=fl({value:fl({value:n.pathname,prefix:dl({value:t||``,prefix:`/`})}),prefix:`/`});return{paths:r?r.split(`/`):[],search:Object.keys(n.searchParams).length?n.searchParams:void 0,hash:n.hash?fl({value:n.hash,prefix:`#`}):void 0}}var $P=class{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(e){Hj(e,SP),this.params={...e};let t=this.readCurrentRoute();this.innerObservable=new lM({defaultValue:t,equalityCheck:()=>!1}),ZP(),this.removeGlobalListener=ql(globalThis,GP,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new xP(`Looping route sanitization detected; aborting window URL change listener.`);let t=QP(globalThis.location.href,this.params.basePath),n=e.sanitizeRoute(t);A.jsonEquals(t,n)?(this.sanitizationDepth=0,this.innerObservable.setValue(n)):(this.sanitizationDepth++,this.setRoute(n,{replace:!0}),e.disableWarnings||console.warn(`Route sanitized.`,{from:t,to:n}))}),this.setRoute(t,{replace:!0})}routeIncludesBasePath(e){return!e.paths||!this.params.basePath?!1:wP(...e.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(QP(globalThis.location.href,this.params.basePath))}sanitizeRoute(e){return this.params.sanitizeRoute(e)}createRouteUrl(e){let t={...QP(globalThis.location.href,this.params.basePath),...e},n=this.sanitizeRoute(t),r=this.routeIncludesBasePath(QP(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return HP(globalThis.location.href,{paths:r.paths,search:r.search,hash:r.hash?dl({value:r.hash,prefix:`#`}):``},{searchParamStrategy:EP.Clear}).href}setRoute(e,t={}){let{fullPath:n}=VP(this.createRouteUrl(e));return this.params.isPaused||!t.force&&A.jsonEquals(VP(globalThis.location.href).fullPath,n)?!1:t.replace?(globalThis.history.replaceState(void 0,``,n),!0):(globalThis.history.pushState(void 0,``,n),!0)}setRouteOnDirectNavigation(e,t){return WP(t)?(t.preventDefault(),this.setRoute(e)):!1}listen(e,t){let n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new yP(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(e,t),()=>this.removeListener(t)}removeListener(e){return this.innerObservable.removeListener(e)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}};function eF(e){return new $P({basePath:e,sanitizeRoute(e){return{paths:tF(e.paths),hash:void 0,search:void 0}}})}function tF(e){let t=e[0];if(!A.isEnumValue(t,vu))return bu.paths;if(t===vu.Book)return[vu.Book,...e.slice(1)];if(t===vu.Search)return e[1]?[t,e[1]]:[vu.Book,...e.slice(1)];throw Error(`Route path not handled for sanitization: ${e.join(`/`)}`)}var nF=YM()(`element-book-change-route`),H=Ld({"vira-icon-stroke-color":`currentColor`,"vira-icon-fill-color":`none`,"vira-icon-stroke-width":`1.5px`});function U({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}var rF=U({name:`Check24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `});function iF(e){return A.isPrimitive(e)||e instanceof Eu?String(e):e.default}function aF(e,t,n,r){let i=`${n.prefix}-default-fg`,a=`${n.prefix}-default-bg`;if(A.isPrimitive(t)||t instanceof Eu)return t;if(`refDefaultBackground`in t)return`var(--${a}, ${iF(n.background)})`;if(`refDefaultForeground`in t)return`var(--${i}, ${iF(n.foreground)})`;if(`refBackground`in t||`refForeground`in t){let o=A.hasKey(t,`refBackground`)?`refBackground`:A.hasKey(t,`refForeground`)?`refForeground`:void 0,s=o&&A.hasKey(t,o)?t[o]:void 0,c=o===`refBackground`?`background`:`foreground`,l=s&&r[s];if(!l)throw Error(`Color theme ${o} reference '${s}' does not exist. (Referenced from '${e}'.)`);let u=l[c]||(c===`foreground`?aF(i,n.foreground,n,r):aF(a,n.background,n,r));return`var(--${s}-${c===`foreground`?`fg`:`bg`}, ${aF(s,u,n,r)})`}else return t.value}var oF=`theme-default`;function sF(e,t){try{if(`theme-default`in t)throw Error(`Cannot define theme color by name '${oF}', it is used internally.`);let n=`${e.prefix}-default-fg`,r=`${e.prefix}-default-bg`,i=`${e.prefix}-default-inverse-fg`,a=`${e.prefix}-default-inverse-bg`,o=Ld({[n]:aF(n,e.foreground,e,t),[r]:aF(r,e.background,e,t),[i]:aF(i,e.background,e,t),[a]:aF(a,e.foreground,e,t)}),s=Ld(Kc(t).reduce((i,[a,s])=>{let c=cF(a),l=s.foreground?aF([a,`foreground`].join(` `),s.foreground,e,t):`var(${o[n].name}, ${o[n].default})`,u=s.background?aF([a,`background`].join(` `),s.background,e,t):`var(${o[r].name}, ${o[r].default})`;return i[c.foreground]=l,i[c.background]=u,i[c.foregroundInverse]=`var(--${c.background}, ${u})`,i[c.backgroundInverse]=`var(--${c.foreground}, ${l})`,i},{})),c={},l={};Kc(t).forEach(([e,t])=>{Fc.isString(e);let n=cF(e),r=s[n.foreground],i=s[n.background],a=s[n.foregroundInverse],o=s[n.backgroundInverse];Fc.isDefined(r),Fc.isDefined(i),Fc.isDefined(a),Fc.isDefined(o),c[e]={foreground:r,background:i,init:t,name:e},l[e]={foreground:a,background:o,init:t,name:e}});let u={foreground:o[n],background:o[r],init:e,name:oF},d={...u,foreground:o[i],background:o[a]};return{colors:{[oF]:u,...c},inverse:{[oF]:d,...l},init:{colors:t,default:e},prefix:e.prefix}}catch(e){throw globalThis.setTimeout(()=>Tl.error(e)),e}}function cF(e){return{foreground:[e,`fg`].join(`-`),background:[e,`bg`].join(`-`),foregroundInverse:[e,`inverse`,`fg`].join(`-`),backgroundInverse:[e,`inverse`,`bg`].join(`-`)}}var W=Ld({"vira-red-100":`#FFF6F5`,"vira-red-150":`#FFEDEB`,"vira-red-200":`#FFE4E1`,"vira-red-250":`#FFDCD8`,"vira-red-300":`#FFD1CB`,"vira-red-350":`#FFC1B8`,"vira-red-400":`#FFA79B`,"vira-red-450":`#FF8274`,"vira-red-500":`#FF564A`,"vira-red-550":`#F43A32`,"vira-red-600":`#E2322C`,"vira-red-650":`#D02C27`,"vira-red-700":`#BB2520`,"vira-red-750":`#9E231D`,"vira-red-800":`#82211A`,"vira-red-850":`#701A13`,"vira-red-900":`#611710`,"vira-red-950":`#52140D`,"vira-red-1000":`#43130D`,"vira-yellow-100":`#FEF9E4`,"vira-yellow-150":`#FDF2D1`,"vira-yellow-200":`#FDEABF`,"vira-yellow-250":`#FEE2AD`,"vira-yellow-300":`#FDD89B`,"vira-yellow-350":`#FAC986`,"vira-yellow-400":`#EFB669`,"vira-yellow-450":`#E29D34`,"vira-yellow-500":`#CE8800`,"vira-yellow-550":`#BB7B00`,"vira-yellow-600":`#AC7100`,"vira-yellow-650":`#9E6800`,"vira-yellow-700":`#8C5C00`,"vira-yellow-750":`#794D00`,"vira-yellow-800":`#683E00`,"vira-yellow-850":`#5B3301`,"vira-yellow-900":`#502A05`,"vira-yellow-950":`#442308`,"vira-yellow-1000":`#381D0B`,"vira-green-100":`#EBFFEE`,"vira-green-150":`#DDFBE2`,"vira-green-200":`#CDF8D6`,"vira-green-250":`#BFF5CC`,"vira-green-300":`#AFF0C0`,"vira-green-350":`#9AE8B1`,"vira-green-400":`#7FD99C`,"vira-green-450":`#52C87F`,"vira-green-500":`#1BB565`,"vira-green-550":`#04A559`,"vira-green-600":`#009852`,"vira-green-650":`#008C4A`,"vira-green-700":`#007C41`,"vira-green-750":`#016A38`,"vira-green-800":`#095831`,"vira-green-850":`#024B29`,"vira-green-900":`#014024`,"vira-green-950":`#02371F`,"vira-green-1000":`#062D1B`,"vira-teal-100":`#E8FEFD`,"vira-teal-150":`#D9FAF8`,"vira-teal-200":`#C9F6F3`,"vira-teal-250":`#BAF2ED`,"vira-teal-300":`#A9EDE6`,"vira-teal-350":`#95E4DB`,"vira-teal-400":`#79D5CA`,"vira-teal-450":`#47C3B7`,"vira-teal-500":`#00B0A4`,"vira-teal-550":`#00A094`,"vira-teal-600":`#009389`,"vira-teal-650":`#00877D`,"vira-teal-700":`#00786F`,"vira-teal-750":`#00665F`,"vira-teal-800":`#01554F`,"vira-teal-850":`#004843`,"vira-teal-900":`#003E3A`,"vira-teal-950":`#033531`,"vira-teal-1000":`#072B29`,"vira-blue-100":`#F5F9FF`,"vira-blue-150":`#EAF3FF`,"vira-blue-200":`#E0EDFF`,"vira-blue-250":`#D6E7FF`,"vira-blue-300":`#CBDFFF`,"vira-blue-350":`#B9D4FF`,"vira-blue-400":`#9EC3FF`,"vira-blue-450":`#7AADFF`,"vira-blue-500":`#5697FF`,"vira-blue-550":`#4988ED`,"vira-blue-600":`#427DDC`,"vira-blue-650":`#3B72CA`,"vira-blue-700":`#3365B6`,"vira-blue-750":`#2D569A`,"vira-blue-800":`#27487E`,"vira-blue-850":`#203D6C`,"vira-blue-900":`#1B345D`,"vira-blue-950":`#172C4F`,"vira-blue-1000":`#142540`,"vira-accent-100":`#F5F9FF`,"vira-accent-150":`#EAF3FF`,"vira-accent-200":`#E0EDFF`,"vira-accent-250":`#D6E7FF`,"vira-accent-300":`#CBDFFF`,"vira-accent-350":`#B9D4FF`,"vira-accent-400":`#9EC3FF`,"vira-accent-450":`#7AADFF`,"vira-accent-500":`#5697FF`,"vira-accent-550":`#4988ED`,"vira-accent-600":`#427DDC`,"vira-accent-650":`#3B72CA`,"vira-accent-700":`#3365B6`,"vira-accent-750":`#2D569A`,"vira-accent-800":`#27487E`,"vira-accent-850":`#203D6C`,"vira-accent-900":`#1B345D`,"vira-accent-950":`#172C4F`,"vira-accent-1000":`#142540`,"vira-purple-100":`#F9F7FF`,"vira-purple-150":`#F3EFFF`,"vira-purple-200":`#EDE8FF`,"vira-purple-250":`#E6E1FF`,"vira-purple-300":`#DED8FF`,"vira-purple-350":`#D2CBFF`,"vira-purple-400":`#C1B7FF`,"vira-purple-450":`#AD9BFF`,"vira-purple-500":`#9B80FF`,"vira-purple-550":`#8D6EF4`,"vira-purple-600":`#8265E3`,"vira-purple-650":`#775BD1`,"vira-purple-700":`#6A50BB`,"vira-purple-750":`#5A459E`,"vira-purple-800":`#4A3B82`,"vira-purple-850":`#3E3170`,"vira-purple-900":`#352A61`,"vira-purple-950":`#2D2452`,"vira-purple-1000":`#251F43`,"vira-pink-100":`#FEF5FF`,"vira-pink-150":`#FFEAFF`,"vira-pink-200":`#FFE0FC`,"vira-pink-250":`#FFD7F8`,"vira-pink-300":`#FFCBF2`,"vira-pink-350":`#FFB9E9`,"vira-pink-400":`#FF9BDF`,"vira-pink-450":`#FF6DD6`,"vira-pink-500":`#F04AC5`,"vira-pink-550":`#DD3EB4`,"vira-pink-600":`#CC37A7`,"vira-pink-650":`#BC3099`,"vira-pink-700":`#A82988`,"vira-pink-750":`#8F2674`,"vira-pink-800":`#752361`,"vira-pink-850":`#641C53`,"vira-pink-900":`#561848`,"vira-pink-950":`#49153E`,"vira-pink-1000":`#3B1333`,"vira-grey-100":`#F9F9F9`,"vira-grey-150":`#F2F2F2`,"vira-grey-200":`#EBEBEB`,"vira-grey-250":`#E5E5E5`,"vira-grey-300":`#DEDEDE`,"vira-grey-350":`#D2D2D2`,"vira-grey-400":`#C2C2C2`,"vira-grey-450":`#ADADAD`,"vira-grey-500":`#999999`,"vira-grey-550":`#8A8A8A`,"vira-grey-600":`#7F7F7F`,"vira-grey-650":`#747474`,"vira-grey-700":`#676767`,"vira-grey-750":`#585858`,"vira-grey-800":`#494949`,"vira-grey-850":`#3E3E3E`,"vira-grey-900":`#353535`,"vira-grey-950":`#2D2D2D`,"vira-grey-1000":`#252525`});function lF({originalTheme:e,layerKey:t,themeColor:n,override:r,overrideValues:i}){let a=r?.[t];a&&(i[String(n[t].name)]=String(aF(t,a,e.init.default,e.init.colors)))}function uF(e,t,{defaultOverride:n,colorOverrides:r}){let i={};n&&De(n).forEach(t=>{lF({originalTheme:e,layerKey:t,override:n,themeColor:e.colors[oF],overrideValues:i})});let a={};r&&Kc(r).forEach(([t,n])=>{let r=e.colors[t];if(!r)throw Error(`Override color name '${t}' does not exist in the theme being overridden.`);lF({originalTheme:e,layerKey:`foreground`,override:n,themeColor:r,overrideValues:a}),lF({originalTheme:e,layerKey:`background`,override:n,themeColor:r,overrideValues:a})});let o=Ml(e.init.colors,(e,t)=>{let n=r?.[e];return{...t,...n}}),s=sF({...e.init.default,...n},o);return{name:t,overrides:{...i,...a},originalTheme:e,asTheme:s}}var G=sF({foreground:`black`,background:`white`,prefix:`vira`},{"vira-red-foreground-small-body":{foreground:W[`vira-red-1000`]},"vira-red-foreground-body":{foreground:W[`vira-red-750`]},"vira-red-foreground-non-body":{foreground:W[`vira-red-650`]},"vira-red-foreground-header":{foreground:W[`vira-red-500`]},"vira-red-foreground-placeholder":{foreground:W[`vira-red-400`]},"vira-red-foreground-decoration":{foreground:W[`vira-red-350`]},"vira-red-foreground-invisible":{foreground:W[`vira-red-250`]},"vira-red-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-red-1000`]},"vira-red-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-red-700`]},"vira-red-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-red-600`]},"vira-red-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-red-450`]},"vira-red-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-red-400`]},"vira-red-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-red-350`]},"vira-red-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-red-200`]},"vira-red-behind-fg-small-body":{background:W[`vira-red-250`]},"vira-red-behind-fg-body":{background:W[`vira-red-350`]},"vira-red-behind-fg-non-body":{background:W[`vira-red-400`]},"vira-red-behind-fg-header":{background:W[`vira-red-500`]},"vira-red-behind-fg-placeholder":{background:W[`vira-red-650`]},"vira-red-behind-fg-decoration":{background:W[`vira-red-750`]},"vira-red-behind-fg-invisible":{background:W[`vira-red-1000`]},"vira-red-on-self-small-body":{foreground:W[`vira-red-850`],background:W[`vira-red-100`]},"vira-red-on-self-body":{foreground:W[`vira-red-850`],background:W[`vira-red-250`]},"vira-red-on-self-non-body":{foreground:W[`vira-red-850`],background:W[`vira-red-350`]},"vira-red-on-self-header":{foreground:W[`vira-red-850`],background:W[`vira-red-450`]},"vira-red-on-self-placeholder":{foreground:W[`vira-red-850`],background:W[`vira-red-500`]},"vira-red-on-self-decoration":{foreground:W[`vira-red-850`],background:W[`vira-red-650`]},"vira-red-on-self-invisible":{foreground:W[`vira-red-850`],background:W[`vira-red-1000`]},"vira-yellow-foreground-small-body":{foreground:W[`vira-yellow-1000`]},"vira-yellow-foreground-body":{foreground:W[`vira-yellow-750`]},"vira-yellow-foreground-non-body":{foreground:W[`vira-yellow-650`]},"vira-yellow-foreground-header":{foreground:W[`vira-yellow-500`]},"vira-yellow-foreground-placeholder":{foreground:W[`vira-yellow-400`]},"vira-yellow-foreground-decoration":{foreground:W[`vira-yellow-350`]},"vira-yellow-foreground-invisible":{foreground:W[`vira-yellow-250`]},"vira-yellow-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-yellow-1000`]},"vira-yellow-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-yellow-700`]},"vira-yellow-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-yellow-600`]},"vira-yellow-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-yellow-450`]},"vira-yellow-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-yellow-400`]},"vira-yellow-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-yellow-350`]},"vira-yellow-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-yellow-250`]},"vira-yellow-behind-fg-small-body":{background:W[`vira-yellow-250`]},"vira-yellow-behind-fg-body":{background:W[`vira-yellow-350`]},"vira-yellow-behind-fg-non-body":{background:W[`vira-yellow-400`]},"vira-yellow-behind-fg-header":{background:W[`vira-yellow-500`]},"vira-yellow-behind-fg-placeholder":{background:W[`vira-yellow-650`]},"vira-yellow-behind-fg-decoration":{background:W[`vira-yellow-750`]},"vira-yellow-behind-fg-invisible":{background:W[`vira-yellow-1000`]},"vira-yellow-on-self-small-body":{foreground:W[`vira-yellow-850`],background:W[`vira-yellow-100`]},"vira-yellow-on-self-body":{foreground:W[`vira-yellow-850`],background:W[`vira-yellow-300`]},"vira-yellow-on-self-non-body":{foreground:W[`vira-yellow-850`],background:W[`vira-yellow-350`]},"vira-yellow-on-self-header":{foreground:W[`vira-yellow-850`],background:W[`vira-yellow-450`]},"vira-yellow-on-self-placeholder":{foreground:W[`vira-yellow-850`],background:W[`vira-yellow-550`]},"vira-yellow-on-self-decoration":{foreground:W[`vira-yellow-850`],background:W[`vira-yellow-650`]},"vira-yellow-on-self-invisible":{foreground:W[`vira-yellow-850`],background:W[`vira-yellow-1000`]},"vira-green-foreground-small-body":{foreground:W[`vira-green-1000`]},"vira-green-foreground-body":{foreground:W[`vira-green-800`]},"vira-green-foreground-non-body":{foreground:W[`vira-green-650`]},"vira-green-foreground-header":{foreground:W[`vira-green-550`]},"vira-green-foreground-placeholder":{foreground:W[`vira-green-450`]},"vira-green-foreground-decoration":{foreground:W[`vira-green-350`]},"vira-green-foreground-invisible":{foreground:W[`vira-green-250`]},"vira-green-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-green-1000`]},"vira-green-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-green-750`]},"vira-green-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-green-650`]},"vira-green-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-green-500`]},"vira-green-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-green-400`]},"vira-green-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-green-350`]},"vira-green-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-green-250`]},"vira-green-behind-fg-small-body":{background:W[`vira-green-250`]},"vira-green-behind-fg-body":{background:W[`vira-green-350`]},"vira-green-behind-fg-non-body":{background:W[`vira-green-450`]},"vira-green-behind-fg-header":{background:W[`vira-green-550`]},"vira-green-behind-fg-placeholder":{background:W[`vira-green-650`]},"vira-green-behind-fg-decoration":{background:W[`vira-green-800`]},"vira-green-behind-fg-invisible":{background:W[`vira-green-1000`]},"vira-green-on-self-small-body":{foreground:W[`vira-green-850`],background:W[`vira-green-100`]},"vira-green-on-self-body":{foreground:W[`vira-green-850`],background:W[`vira-green-300`]},"vira-green-on-self-non-body":{foreground:W[`vira-green-850`],background:W[`vira-green-400`]},"vira-green-on-self-header":{foreground:W[`vira-green-850`],background:W[`vira-green-450`]},"vira-green-on-self-placeholder":{foreground:W[`vira-green-850`],background:W[`vira-green-550`]},"vira-green-on-self-decoration":{foreground:W[`vira-green-850`],background:W[`vira-green-700`]},"vira-green-on-self-invisible":{foreground:W[`vira-green-850`],background:W[`vira-green-1000`]},"vira-teal-foreground-small-body":{foreground:W[`vira-teal-1000`]},"vira-teal-foreground-body":{foreground:W[`vira-teal-800`]},"vira-teal-foreground-non-body":{foreground:W[`vira-teal-650`]},"vira-teal-foreground-header":{foreground:W[`vira-teal-550`]},"vira-teal-foreground-placeholder":{foreground:W[`vira-teal-450`]},"vira-teal-foreground-decoration":{foreground:W[`vira-teal-350`]},"vira-teal-foreground-invisible":{foreground:W[`vira-teal-250`]},"vira-teal-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-teal-1000`]},"vira-teal-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-teal-750`]},"vira-teal-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-teal-600`]},"vira-teal-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-teal-500`]},"vira-teal-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-teal-400`]},"vira-teal-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-teal-350`]},"vira-teal-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-teal-250`]},"vira-teal-behind-fg-small-body":{background:W[`vira-teal-250`]},"vira-teal-behind-fg-body":{background:W[`vira-teal-350`]},"vira-teal-behind-fg-non-body":{background:W[`vira-teal-450`]},"vira-teal-behind-fg-header":{background:W[`vira-teal-500`]},"vira-teal-behind-fg-placeholder":{background:W[`vira-teal-650`]},"vira-teal-behind-fg-decoration":{background:W[`vira-teal-750`]},"vira-teal-behind-fg-invisible":{background:W[`vira-teal-1000`]},"vira-teal-on-self-small-body":{foreground:W[`vira-teal-850`],background:W[`vira-teal-100`]},"vira-teal-on-self-body":{foreground:W[`vira-teal-850`],background:W[`vira-teal-300`]},"vira-teal-on-self-non-body":{foreground:W[`vira-teal-850`],background:W[`vira-teal-400`]},"vira-teal-on-self-header":{foreground:W[`vira-teal-850`],background:W[`vira-teal-450`]},"vira-teal-on-self-placeholder":{foreground:W[`vira-teal-850`],background:W[`vira-teal-550`]},"vira-teal-on-self-decoration":{foreground:W[`vira-teal-850`],background:W[`vira-teal-700`]},"vira-teal-on-self-invisible":{foreground:W[`vira-teal-850`],background:W[`vira-teal-1000`]},"vira-blue-foreground-small-body":{foreground:W[`vira-blue-1000`]},"vira-blue-foreground-body":{foreground:W[`vira-blue-750`]},"vira-blue-foreground-non-body":{foreground:W[`vira-blue-650`]},"vira-blue-foreground-header":{foreground:W[`vira-blue-500`]},"vira-blue-foreground-placeholder":{foreground:W[`vira-blue-450`]},"vira-blue-foreground-decoration":{foreground:W[`vira-blue-350`]},"vira-blue-foreground-invisible":{foreground:W[`vira-blue-250`]},"vira-blue-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-blue-1000`]},"vira-blue-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-blue-750`]},"vira-blue-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-blue-600`]},"vira-blue-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-blue-450`]},"vira-blue-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-blue-400`]},"vira-blue-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-blue-350`]},"vira-blue-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-blue-250`]},"vira-blue-behind-fg-small-body":{background:W[`vira-blue-250`]},"vira-blue-behind-fg-body":{background:W[`vira-blue-350`]},"vira-blue-behind-fg-non-body":{background:W[`vira-blue-400`]},"vira-blue-behind-fg-header":{background:W[`vira-blue-500`]},"vira-blue-behind-fg-placeholder":{background:W[`vira-blue-650`]},"vira-blue-behind-fg-decoration":{background:W[`vira-blue-750`]},"vira-blue-behind-fg-invisible":{background:W[`vira-blue-1000`]},"vira-blue-on-self-small-body":{foreground:W[`vira-blue-850`],background:W[`vira-blue-100`]},"vira-blue-on-self-body":{foreground:W[`vira-blue-850`],background:W[`vira-blue-300`]},"vira-blue-on-self-non-body":{foreground:W[`vira-blue-850`],background:W[`vira-blue-350`]},"vira-blue-on-self-header":{foreground:W[`vira-blue-850`],background:W[`vira-blue-450`]},"vira-blue-on-self-placeholder":{foreground:W[`vira-blue-850`],background:W[`vira-blue-550`]},"vira-blue-on-self-decoration":{foreground:W[`vira-blue-850`],background:W[`vira-blue-650`]},"vira-blue-on-self-invisible":{foreground:W[`vira-blue-850`],background:W[`vira-blue-1000`]},"vira-accent-foreground-small-body":{foreground:W[`vira-accent-1000`]},"vira-accent-foreground-body":{foreground:W[`vira-accent-750`]},"vira-accent-foreground-non-body":{foreground:W[`vira-accent-650`]},"vira-accent-foreground-header":{foreground:W[`vira-accent-500`]},"vira-accent-foreground-placeholder":{foreground:W[`vira-accent-450`]},"vira-accent-foreground-decoration":{foreground:W[`vira-accent-350`]},"vira-accent-foreground-invisible":{foreground:W[`vira-accent-250`]},"vira-accent-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-accent-1000`]},"vira-accent-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-accent-750`]},"vira-accent-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-accent-600`]},"vira-accent-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-accent-450`]},"vira-accent-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-accent-400`]},"vira-accent-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-accent-350`]},"vira-accent-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-accent-250`]},"vira-accent-behind-fg-small-body":{background:W[`vira-accent-250`]},"vira-accent-behind-fg-body":{background:W[`vira-accent-350`]},"vira-accent-behind-fg-non-body":{background:W[`vira-accent-400`]},"vira-accent-behind-fg-header":{background:W[`vira-accent-500`]},"vira-accent-behind-fg-placeholder":{background:W[`vira-accent-650`]},"vira-accent-behind-fg-decoration":{background:W[`vira-accent-750`]},"vira-accent-behind-fg-invisible":{background:W[`vira-accent-1000`]},"vira-accent-on-self-small-body":{foreground:W[`vira-accent-850`],background:W[`vira-accent-100`]},"vira-accent-on-self-body":{foreground:W[`vira-accent-850`],background:W[`vira-accent-300`]},"vira-accent-on-self-non-body":{foreground:W[`vira-accent-850`],background:W[`vira-accent-350`]},"vira-accent-on-self-header":{foreground:W[`vira-accent-850`],background:W[`vira-accent-450`]},"vira-accent-on-self-placeholder":{foreground:W[`vira-accent-850`],background:W[`vira-accent-550`]},"vira-accent-on-self-decoration":{foreground:W[`vira-accent-850`],background:W[`vira-accent-650`]},"vira-accent-on-self-invisible":{foreground:W[`vira-accent-850`],background:W[`vira-accent-1000`]},"vira-purple-foreground-small-body":{foreground:W[`vira-purple-1000`]},"vira-purple-foreground-body":{foreground:W[`vira-purple-750`]},"vira-purple-foreground-non-body":{foreground:W[`vira-purple-650`]},"vira-purple-foreground-header":{foreground:W[`vira-purple-500`]},"vira-purple-foreground-placeholder":{foreground:W[`vira-purple-400`]},"vira-purple-foreground-decoration":{foreground:W[`vira-purple-350`]},"vira-purple-foreground-invisible":{foreground:W[`vira-purple-250`]},"vira-purple-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-purple-1000`]},"vira-purple-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-purple-700`]},"vira-purple-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-purple-600`]},"vira-purple-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-purple-450`]},"vira-purple-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-purple-400`]},"vira-purple-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-purple-350`]},"vira-purple-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-purple-200`]},"vira-purple-behind-fg-small-body":{background:W[`vira-purple-250`]},"vira-purple-behind-fg-body":{background:W[`vira-purple-350`]},"vira-purple-behind-fg-non-body":{background:W[`vira-purple-400`]},"vira-purple-behind-fg-header":{background:W[`vira-purple-500`]},"vira-purple-behind-fg-placeholder":{background:W[`vira-purple-600`]},"vira-purple-behind-fg-decoration":{background:W[`vira-purple-750`]},"vira-purple-behind-fg-invisible":{background:W[`vira-purple-1000`]},"vira-purple-on-self-small-body":{foreground:W[`vira-purple-850`],background:W[`vira-purple-100`]},"vira-purple-on-self-body":{foreground:W[`vira-purple-850`],background:W[`vira-purple-300`]},"vira-purple-on-self-non-body":{foreground:W[`vira-purple-850`],background:W[`vira-purple-350`]},"vira-purple-on-self-header":{foreground:W[`vira-purple-850`],background:W[`vira-purple-450`]},"vira-purple-on-self-placeholder":{foreground:W[`vira-purple-850`],background:W[`vira-purple-500`]},"vira-purple-on-self-decoration":{foreground:W[`vira-purple-850`],background:W[`vira-purple-650`]},"vira-purple-on-self-invisible":{foreground:W[`vira-purple-850`],background:W[`vira-purple-1000`]},"vira-pink-foreground-small-body":{foreground:W[`vira-pink-1000`]},"vira-pink-foreground-body":{foreground:W[`vira-pink-750`]},"vira-pink-foreground-non-body":{foreground:W[`vira-pink-650`]},"vira-pink-foreground-header":{foreground:W[`vira-pink-500`]},"vira-pink-foreground-placeholder":{foreground:W[`vira-pink-400`]},"vira-pink-foreground-decoration":{foreground:W[`vira-pink-350`]},"vira-pink-foreground-invisible":{foreground:W[`vira-pink-250`]},"vira-pink-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-pink-1000`]},"vira-pink-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-pink-700`]},"vira-pink-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-pink-550`]},"vira-pink-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-pink-450`]},"vira-pink-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-pink-400`]},"vira-pink-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-pink-350`]},"vira-pink-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-pink-200`]},"vira-pink-behind-fg-small-body":{background:W[`vira-pink-200`]},"vira-pink-behind-fg-body":{background:W[`vira-pink-350`]},"vira-pink-behind-fg-non-body":{background:W[`vira-pink-400`]},"vira-pink-behind-fg-header":{background:W[`vira-pink-500`]},"vira-pink-behind-fg-placeholder":{background:W[`vira-pink-600`]},"vira-pink-behind-fg-decoration":{background:W[`vira-pink-750`]},"vira-pink-behind-fg-invisible":{background:W[`vira-pink-1000`]},"vira-pink-on-self-small-body":{foreground:W[`vira-pink-850`],background:W[`vira-pink-100`]},"vira-pink-on-self-body":{foreground:W[`vira-pink-850`],background:W[`vira-pink-250`]},"vira-pink-on-self-non-body":{foreground:W[`vira-pink-850`],background:W[`vira-pink-350`]},"vira-pink-on-self-header":{foreground:W[`vira-pink-850`],background:W[`vira-pink-450`]},"vira-pink-on-self-placeholder":{foreground:W[`vira-pink-850`],background:W[`vira-pink-500`]},"vira-pink-on-self-decoration":{foreground:W[`vira-pink-850`],background:W[`vira-pink-650`]},"vira-pink-on-self-invisible":{foreground:W[`vira-pink-850`],background:W[`vira-pink-1000`]},"vira-grey-foreground-small-body":{foreground:W[`vira-grey-1000`]},"vira-grey-foreground-body":{foreground:W[`vira-grey-750`]},"vira-grey-foreground-non-body":{foreground:W[`vira-grey-650`]},"vira-grey-foreground-header":{foreground:W[`vira-grey-500`]},"vira-grey-foreground-placeholder":{foreground:W[`vira-grey-450`]},"vira-grey-foreground-decoration":{foreground:W[`vira-grey-350`]},"vira-grey-foreground-invisible":{foreground:W[`vira-grey-250`]},"vira-grey-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:W[`vira-grey-1000`]},"vira-grey-behind-bg-body":{foreground:{refDefaultBackground:!0},background:W[`vira-grey-750`]},"vira-grey-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:W[`vira-grey-600`]},"vira-grey-behind-bg-header":{foreground:{refDefaultBackground:!0},background:W[`vira-grey-500`]},"vira-grey-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:W[`vira-grey-400`]},"vira-grey-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:W[`vira-grey-350`]},"vira-grey-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:W[`vira-grey-250`]},"vira-grey-behind-fg-small-body":{background:W[`vira-grey-250`]},"vira-grey-behind-fg-body":{background:W[`vira-grey-350`]},"vira-grey-behind-fg-non-body":{background:W[`vira-grey-400`]},"vira-grey-behind-fg-header":{background:W[`vira-grey-500`]},"vira-grey-behind-fg-placeholder":{background:W[`vira-grey-650`]},"vira-grey-behind-fg-decoration":{background:W[`vira-grey-750`]},"vira-grey-behind-fg-invisible":{background:W[`vira-grey-1000`]},"vira-grey-on-self-small-body":{foreground:W[`vira-grey-850`],background:W[`vira-grey-100`]},"vira-grey-on-self-body":{foreground:W[`vira-grey-850`],background:W[`vira-grey-300`]},"vira-grey-on-self-non-body":{foreground:W[`vira-grey-850`],background:W[`vira-grey-350`]},"vira-grey-on-self-header":{foreground:W[`vira-grey-850`],background:W[`vira-grey-450`]},"vira-grey-on-self-placeholder":{foreground:W[`vira-grey-850`],background:W[`vira-grey-550`]},"vira-grey-on-self-decoration":{foreground:W[`vira-grey-850`],background:W[`vira-grey-650`]},"vira-grey-on-self-invisible":{foreground:W[`vira-grey-850`],background:W[`vira-grey-1000`]}});uF(G,`dark`,{defaultOverride:{foreground:`white`,background:`black`},colorOverrides:{"vira-red-foreground-small-body":{foreground:W[`vira-red-250`]},"vira-red-foreground-body":{foreground:W[`vira-red-350`]},"vira-red-foreground-non-body":{foreground:W[`vira-red-400`]},"vira-red-foreground-header":{foreground:W[`vira-red-450`]},"vira-red-foreground-placeholder":{foreground:W[`vira-red-600`]},"vira-red-foreground-decoration":{foreground:W[`vira-red-750`]},"vira-red-foreground-invisible":{foreground:W[`vira-red-1000`]},"vira-red-behind-bg-small-body":{background:W[`vira-red-250`]},"vira-red-behind-bg-body":{background:W[`vira-red-350`]},"vira-red-behind-bg-non-body":{background:W[`vira-red-400`]},"vira-red-behind-bg-header":{background:W[`vira-red-500`]},"vira-red-behind-bg-placeholder":{background:W[`vira-red-650`]},"vira-red-behind-bg-decoration":{background:W[`vira-red-750`]},"vira-red-behind-bg-invisible":{background:W[`vira-red-1000`]},"vira-red-behind-fg-small-body":{background:W[`vira-red-1000`]},"vira-red-behind-fg-body":{background:W[`vira-red-700`]},"vira-red-behind-fg-non-body":{background:W[`vira-red-600`]},"vira-red-behind-fg-header":{background:W[`vira-red-450`]},"vira-red-behind-fg-placeholder":{background:W[`vira-red-400`]},"vira-red-behind-fg-decoration":{background:W[`vira-red-350`]},"vira-red-behind-fg-invisible":{background:W[`vira-red-200`]},"vira-red-on-self-small-body":{foreground:W[`vira-red-200`],background:W[`vira-red-1000`]},"vira-red-on-self-body":{foreground:W[`vira-red-200`],background:W[`vira-red-950`]},"vira-red-on-self-non-body":{foreground:W[`vira-red-200`],background:W[`vira-red-700`]},"vira-red-on-self-header":{foreground:W[`vira-red-200`],background:W[`vira-red-550`]},"vira-red-on-self-placeholder":{foreground:W[`vira-red-200`],background:W[`vira-red-450`]},"vira-red-on-self-decoration":{foreground:W[`vira-red-200`],background:W[`vira-red-400`]},"vira-red-on-self-invisible":{foreground:W[`vira-red-200`],background:W[`vira-red-350`]},"vira-yellow-foreground-small-body":{foreground:W[`vira-yellow-250`]},"vira-yellow-foreground-body":{foreground:W[`vira-yellow-350`]},"vira-yellow-foreground-non-body":{foreground:W[`vira-yellow-400`]},"vira-yellow-foreground-placeholder":{foreground:W[`vira-yellow-600`]},"vira-yellow-foreground-decoration":{foreground:W[`vira-yellow-750`]},"vira-yellow-foreground-invisible":{foreground:W[`vira-yellow-1000`]},"vira-yellow-behind-bg-small-body":{background:W[`vira-yellow-250`]},"vira-yellow-behind-bg-body":{background:W[`vira-yellow-350`]},"vira-yellow-behind-bg-non-body":{background:W[`vira-yellow-400`]},"vira-yellow-behind-bg-header":{background:W[`vira-yellow-500`]},"vira-yellow-behind-bg-placeholder":{background:W[`vira-yellow-650`]},"vira-yellow-behind-bg-decoration":{background:W[`vira-yellow-750`]},"vira-yellow-behind-bg-invisible":{background:W[`vira-yellow-1000`]},"vira-yellow-behind-fg-small-body":{background:W[`vira-yellow-1000`]},"vira-yellow-behind-fg-body":{background:W[`vira-yellow-700`]},"vira-yellow-behind-fg-non-body":{background:W[`vira-yellow-600`]},"vira-yellow-behind-fg-header":{background:W[`vira-yellow-450`]},"vira-yellow-behind-fg-placeholder":{background:W[`vira-yellow-400`]},"vira-yellow-behind-fg-decoration":{background:W[`vira-yellow-350`]},"vira-yellow-behind-fg-invisible":{background:W[`vira-yellow-250`]},"vira-yellow-on-self-small-body":{foreground:W[`vira-yellow-200`],background:W[`vira-yellow-1000`]},"vira-yellow-on-self-body":{foreground:W[`vira-yellow-200`],background:W[`vira-yellow-900`]},"vira-yellow-on-self-non-body":{foreground:W[`vira-yellow-200`],background:W[`vira-yellow-700`]},"vira-yellow-on-self-header":{foreground:W[`vira-yellow-200`],background:W[`vira-yellow-550`]},"vira-yellow-on-self-placeholder":{foreground:W[`vira-yellow-200`],background:W[`vira-yellow-450`]},"vira-yellow-on-self-decoration":{foreground:W[`vira-yellow-200`],background:W[`vira-yellow-400`]},"vira-yellow-on-self-invisible":{foreground:W[`vira-yellow-200`],background:W[`vira-yellow-350`]},"vira-green-foreground-small-body":{foreground:W[`vira-green-250`]},"vira-green-foreground-body":{foreground:W[`vira-green-350`]},"vira-green-foreground-non-body":{foreground:W[`vira-green-450`]},"vira-green-foreground-header":{foreground:W[`vira-green-500`]},"vira-green-foreground-placeholder":{foreground:W[`vira-green-650`]},"vira-green-foreground-decoration":{foreground:W[`vira-green-750`]},"vira-green-foreground-invisible":{foreground:W[`vira-green-1000`]},"vira-green-behind-bg-small-body":{background:W[`vira-green-250`]},"vira-green-behind-bg-body":{background:W[`vira-green-350`]},"vira-green-behind-bg-non-body":{background:W[`vira-green-450`]},"vira-green-behind-bg-header":{background:W[`vira-green-550`]},"vira-green-behind-bg-placeholder":{background:W[`vira-green-650`]},"vira-green-behind-bg-decoration":{background:W[`vira-green-800`]},"vira-green-behind-bg-invisible":{background:W[`vira-green-1000`]},"vira-green-behind-fg-small-body":{background:W[`vira-green-1000`]},"vira-green-behind-fg-body":{background:W[`vira-green-750`]},"vira-green-behind-fg-non-body":{background:W[`vira-green-650`]},"vira-green-behind-fg-header":{background:W[`vira-green-500`]},"vira-green-behind-fg-placeholder":{background:W[`vira-green-400`]},"vira-green-behind-fg-decoration":{background:W[`vira-green-350`]},"vira-green-behind-fg-invisible":{background:W[`vira-green-250`]},"vira-green-on-self-small-body":{foreground:W[`vira-green-200`],background:W[`vira-green-1000`]},"vira-green-on-self-body":{foreground:W[`vira-green-200`],background:W[`vira-green-900`]},"vira-green-on-self-non-body":{foreground:W[`vira-green-200`],background:W[`vira-green-700`]},"vira-green-on-self-header":{foreground:W[`vira-green-200`],background:W[`vira-green-600`]},"vira-green-on-self-placeholder":{foreground:W[`vira-green-200`],background:W[`vira-green-450`]},"vira-green-on-self-decoration":{foreground:W[`vira-green-200`],background:W[`vira-green-400`]},"vira-green-on-self-invisible":{foreground:W[`vira-green-200`],background:W[`vira-green-350`]},"vira-teal-foreground-small-body":{foreground:W[`vira-teal-250`]},"vira-teal-foreground-body":{foreground:W[`vira-teal-350`]},"vira-teal-foreground-non-body":{foreground:W[`vira-teal-450`]},"vira-teal-foreground-header":{foreground:W[`vira-teal-500`]},"vira-teal-foreground-placeholder":{foreground:W[`vira-teal-650`]},"vira-teal-foreground-decoration":{foreground:W[`vira-teal-750`]},"vira-teal-foreground-invisible":{foreground:W[`vira-teal-1000`]},"vira-teal-behind-bg-small-body":{background:W[`vira-teal-250`]},"vira-teal-behind-bg-body":{background:W[`vira-teal-350`]},"vira-teal-behind-bg-non-body":{background:W[`vira-teal-450`]},"vira-teal-behind-bg-placeholder":{background:W[`vira-teal-650`]},"vira-teal-behind-bg-decoration":{background:W[`vira-teal-750`]},"vira-teal-behind-bg-invisible":{background:W[`vira-teal-1000`]},"vira-teal-behind-fg-small-body":{background:W[`vira-teal-1000`]},"vira-teal-behind-fg-body":{background:W[`vira-teal-750`]},"vira-teal-behind-fg-non-body":{background:W[`vira-teal-600`]},"vira-teal-behind-fg-placeholder":{background:W[`vira-teal-400`]},"vira-teal-behind-fg-decoration":{background:W[`vira-teal-350`]},"vira-teal-behind-fg-invisible":{background:W[`vira-teal-250`]},"vira-teal-on-self-small-body":{foreground:W[`vira-teal-200`],background:W[`vira-teal-1000`]},"vira-teal-on-self-body":{foreground:W[`vira-teal-200`],background:W[`vira-teal-900`]},"vira-teal-on-self-non-body":{foreground:W[`vira-teal-200`],background:W[`vira-teal-700`]},"vira-teal-on-self-header":{foreground:W[`vira-teal-200`],background:W[`vira-teal-600`]},"vira-teal-on-self-placeholder":{foreground:W[`vira-teal-200`],background:W[`vira-teal-450`]},"vira-teal-on-self-decoration":{foreground:W[`vira-teal-200`],background:W[`vira-teal-400`]},"vira-teal-on-self-invisible":{foreground:W[`vira-teal-200`],background:W[`vira-teal-350`]},"vira-blue-foreground-small-body":{foreground:W[`vira-blue-250`]},"vira-blue-foreground-body":{foreground:W[`vira-blue-350`]},"vira-blue-foreground-non-body":{foreground:W[`vira-blue-400`]},"vira-blue-foreground-placeholder":{foreground:W[`vira-blue-600`]},"vira-blue-foreground-decoration":{foreground:W[`vira-blue-750`]},"vira-blue-foreground-invisible":{foreground:W[`vira-blue-1000`]},"vira-blue-behind-bg-small-body":{background:W[`vira-blue-250`]},"vira-blue-behind-bg-body":{background:W[`vira-blue-350`]},"vira-blue-behind-bg-non-body":{background:W[`vira-blue-400`]},"vira-blue-behind-bg-header":{background:W[`vira-blue-500`]},"vira-blue-behind-bg-placeholder":{background:W[`vira-blue-650`]},"vira-blue-behind-bg-decoration":{background:W[`vira-blue-750`]},"vira-blue-behind-bg-invisible":{background:W[`vira-blue-1000`]},"vira-blue-behind-fg-small-body":{background:W[`vira-blue-1000`]},"vira-blue-behind-fg-body":{background:W[`vira-blue-750`]},"vira-blue-behind-fg-non-body":{background:W[`vira-blue-600`]},"vira-blue-behind-fg-header":{background:W[`vira-blue-450`]},"vira-blue-behind-fg-placeholder":{background:W[`vira-blue-400`]},"vira-blue-behind-fg-decoration":{background:W[`vira-blue-350`]},"vira-blue-behind-fg-invisible":{background:W[`vira-blue-250`]},"vira-blue-on-self-small-body":{foreground:W[`vira-blue-200`],background:W[`vira-blue-1000`]},"vira-blue-on-self-body":{foreground:W[`vira-blue-200`],background:W[`vira-blue-900`]},"vira-blue-on-self-non-body":{foreground:W[`vira-blue-200`],background:W[`vira-blue-700`]},"vira-blue-on-self-header":{foreground:W[`vira-blue-200`],background:W[`vira-blue-550`]},"vira-blue-on-self-placeholder":{foreground:W[`vira-blue-200`],background:W[`vira-blue-450`]},"vira-blue-on-self-decoration":{foreground:W[`vira-blue-200`],background:W[`vira-blue-400`]},"vira-blue-on-self-invisible":{foreground:W[`vira-blue-200`],background:W[`vira-blue-350`]},"vira-accent-foreground-small-body":{foreground:W[`vira-accent-250`]},"vira-accent-foreground-body":{foreground:W[`vira-accent-350`]},"vira-accent-foreground-non-body":{foreground:W[`vira-accent-400`]},"vira-accent-foreground-placeholder":{foreground:W[`vira-accent-600`]},"vira-accent-foreground-decoration":{foreground:W[`vira-accent-750`]},"vira-accent-foreground-invisible":{foreground:W[`vira-accent-1000`]},"vira-accent-behind-bg-small-body":{background:W[`vira-accent-250`]},"vira-accent-behind-bg-body":{background:W[`vira-accent-350`]},"vira-accent-behind-bg-non-body":{background:W[`vira-accent-400`]},"vira-accent-behind-bg-header":{background:W[`vira-accent-500`]},"vira-accent-behind-bg-placeholder":{background:W[`vira-accent-650`]},"vira-accent-behind-bg-decoration":{background:W[`vira-accent-750`]},"vira-accent-behind-bg-invisible":{background:W[`vira-accent-1000`]},"vira-accent-behind-fg-small-body":{background:W[`vira-accent-1000`]},"vira-accent-behind-fg-body":{background:W[`vira-accent-750`]},"vira-accent-behind-fg-non-body":{background:W[`vira-accent-600`]},"vira-accent-behind-fg-header":{background:W[`vira-accent-450`]},"vira-accent-behind-fg-placeholder":{background:W[`vira-accent-400`]},"vira-accent-behind-fg-decoration":{background:W[`vira-accent-350`]},"vira-accent-behind-fg-invisible":{background:W[`vira-accent-250`]},"vira-accent-on-self-small-body":{foreground:W[`vira-accent-200`],background:W[`vira-accent-1000`]},"vira-accent-on-self-body":{foreground:W[`vira-accent-200`],background:W[`vira-accent-900`]},"vira-accent-on-self-non-body":{foreground:W[`vira-accent-200`],background:W[`vira-accent-700`]},"vira-accent-on-self-header":{foreground:W[`vira-accent-200`],background:W[`vira-accent-550`]},"vira-accent-on-self-placeholder":{foreground:W[`vira-accent-200`],background:W[`vira-accent-450`]},"vira-accent-on-self-decoration":{foreground:W[`vira-accent-200`],background:W[`vira-accent-400`]},"vira-accent-on-self-invisible":{foreground:W[`vira-accent-200`],background:W[`vira-accent-350`]},"vira-purple-foreground-small-body":{foreground:W[`vira-purple-250`]},"vira-purple-foreground-body":{foreground:W[`vira-purple-350`]},"vira-purple-foreground-non-body":{foreground:W[`vira-purple-400`]},"vira-purple-foreground-header":{foreground:W[`vira-purple-450`]},"vira-purple-foreground-placeholder":{foreground:W[`vira-purple-600`]},"vira-purple-foreground-decoration":{foreground:W[`vira-purple-750`]},"vira-purple-foreground-invisible":{foreground:W[`vira-purple-1000`]},"vira-purple-behind-bg-small-body":{background:W[`vira-purple-250`]},"vira-purple-behind-bg-body":{background:W[`vira-purple-350`]},"vira-purple-behind-bg-non-body":{background:W[`vira-purple-400`]},"vira-purple-behind-bg-header":{background:W[`vira-purple-500`]},"vira-purple-behind-bg-placeholder":{background:W[`vira-purple-600`]},"vira-purple-behind-bg-decoration":{background:W[`vira-purple-750`]},"vira-purple-behind-bg-invisible":{background:W[`vira-purple-1000`]},"vira-purple-behind-fg-small-body":{background:W[`vira-purple-1000`]},"vira-purple-behind-fg-body":{background:W[`vira-purple-700`]},"vira-purple-behind-fg-non-body":{background:W[`vira-purple-600`]},"vira-purple-behind-fg-header":{background:W[`vira-purple-450`]},"vira-purple-behind-fg-placeholder":{background:W[`vira-purple-400`]},"vira-purple-behind-fg-decoration":{background:W[`vira-purple-350`]},"vira-purple-behind-fg-invisible":{background:W[`vira-purple-200`]},"vira-purple-on-self-small-body":{foreground:W[`vira-purple-200`],background:W[`vira-purple-1000`]},"vira-purple-on-self-body":{foreground:W[`vira-purple-200`],background:W[`vira-purple-900`]},"vira-purple-on-self-non-body":{foreground:W[`vira-purple-200`],background:W[`vira-purple-700`]},"vira-purple-on-self-header":{foreground:W[`vira-purple-200`],background:W[`vira-purple-550`]},"vira-purple-on-self-placeholder":{foreground:W[`vira-purple-200`],background:W[`vira-purple-450`]},"vira-purple-on-self-decoration":{foreground:W[`vira-purple-200`],background:W[`vira-purple-400`]},"vira-purple-on-self-invisible":{foreground:W[`vira-purple-200`],background:W[`vira-purple-350`]},"vira-pink-foreground-small-body":{foreground:W[`vira-pink-200`]},"vira-pink-foreground-body":{foreground:W[`vira-pink-350`]},"vira-pink-foreground-non-body":{foreground:W[`vira-pink-400`]},"vira-pink-foreground-header":{foreground:W[`vira-pink-450`]},"vira-pink-foreground-placeholder":{foreground:W[`vira-pink-600`]},"vira-pink-foreground-decoration":{foreground:W[`vira-pink-750`]},"vira-pink-foreground-invisible":{foreground:W[`vira-pink-1000`]},"vira-pink-behind-bg-small-body":{background:W[`vira-pink-200`]},"vira-pink-behind-bg-body":{background:W[`vira-pink-350`]},"vira-pink-behind-bg-non-body":{background:W[`vira-pink-400`]},"vira-pink-behind-bg-header":{background:W[`vira-pink-500`]},"vira-pink-behind-bg-placeholder":{background:W[`vira-pink-600`]},"vira-pink-behind-bg-decoration":{background:W[`vira-pink-750`]},"vira-pink-behind-bg-invisible":{background:W[`vira-pink-1000`]},"vira-pink-behind-fg-small-body":{background:W[`vira-pink-1000`]},"vira-pink-behind-fg-body":{background:W[`vira-pink-700`]},"vira-pink-behind-fg-non-body":{background:W[`vira-pink-550`]},"vira-pink-behind-fg-header":{background:W[`vira-pink-450`]},"vira-pink-behind-fg-placeholder":{background:W[`vira-pink-400`]},"vira-pink-behind-fg-decoration":{background:W[`vira-pink-350`]},"vira-pink-behind-fg-invisible":{background:W[`vira-pink-200`]},"vira-pink-on-self-small-body":{foreground:W[`vira-pink-200`],background:W[`vira-pink-1000`]},"vira-pink-on-self-body":{foreground:W[`vira-pink-200`],background:W[`vira-pink-950`]},"vira-pink-on-self-non-body":{foreground:W[`vira-pink-200`],background:W[`vira-pink-700`]},"vira-pink-on-self-header":{foreground:W[`vira-pink-200`],background:W[`vira-pink-550`]},"vira-pink-on-self-placeholder":{foreground:W[`vira-pink-200`],background:W[`vira-pink-450`]},"vira-pink-on-self-decoration":{foreground:W[`vira-pink-200`],background:W[`vira-pink-400`]},"vira-pink-on-self-invisible":{foreground:W[`vira-pink-200`],background:W[`vira-pink-300`]},"vira-grey-foreground-small-body":{foreground:W[`vira-grey-250`]},"vira-grey-foreground-body":{foreground:W[`vira-grey-350`]},"vira-grey-foreground-non-body":{foreground:W[`vira-grey-400`]},"vira-grey-foreground-placeholder":{foreground:W[`vira-grey-600`]},"vira-grey-foreground-decoration":{foreground:W[`vira-grey-750`]},"vira-grey-foreground-invisible":{foreground:W[`vira-grey-1000`]},"vira-grey-behind-bg-small-body":{background:W[`vira-grey-250`]},"vira-grey-behind-bg-body":{background:W[`vira-grey-350`]},"vira-grey-behind-bg-non-body":{background:W[`vira-grey-400`]},"vira-grey-behind-bg-placeholder":{background:W[`vira-grey-650`]},"vira-grey-behind-bg-decoration":{background:W[`vira-grey-750`]},"vira-grey-behind-bg-invisible":{background:W[`vira-grey-1000`]},"vira-grey-behind-fg-small-body":{background:W[`vira-grey-1000`]},"vira-grey-behind-fg-body":{background:W[`vira-grey-750`]},"vira-grey-behind-fg-non-body":{background:W[`vira-grey-600`]},"vira-grey-behind-fg-placeholder":{background:W[`vira-grey-400`]},"vira-grey-behind-fg-decoration":{background:W[`vira-grey-350`]},"vira-grey-behind-fg-invisible":{background:W[`vira-grey-250`]},"vira-grey-on-self-small-body":{foreground:W[`vira-grey-200`],background:W[`vira-grey-1000`]},"vira-grey-on-self-body":{foreground:W[`vira-grey-200`],background:W[`vira-grey-900`]},"vira-grey-on-self-non-body":{foreground:W[`vira-grey-200`],background:W[`vira-grey-700`]},"vira-grey-on-self-header":{foreground:W[`vira-grey-200`],background:W[`vira-grey-600`]},"vira-grey-on-self-placeholder":{foreground:W[`vira-grey-200`],background:W[`vira-grey-450`]},"vira-grey-on-self-decoration":{foreground:W[`vira-grey-200`],background:W[`vira-grey-400`]},"vira-grey-on-self-invisible":{foreground:W[`vira-grey-200`],background:W[`vira-grey-350`]}}});var dF=`8px`,K=Ld({"vira-form-border-color":G.colors[`vira-grey-foreground-decoration`].foreground.value,"vira-form-placeholder-color":G.colors[`vira-grey-foreground-placeholder`].foreground.value,"vira-form-background-color":G.colors[oF].background.value,"vira-form-foreground-color":G.colors[oF].foreground.value,"vira-form-modal-backdrop-color":`rgba(0, 0, 0, 0.35)`,"vira-form-secondary-body-foreground":G.colors[`vira-grey-foreground-header`].foreground.value,"vira-form-text-selection-color":G.colors[`vira-accent-behind-bg-decoration`].background.value,"vira-form-selection-hover-color":G.colors[`vira-accent-behind-bg-invisible`].background.value,"vira-form-selection-active-color":G.colors[`vira-accent-behind-bg-decoration`].background.value,"vira-form-error-color":G.colors[`vira-red-behind-bg-non-body`].background.value,"vira-form-error-hover-color":G.colors[`vira-red-behind-bg-header`].background.value,"vira-form-error-active-color":G.colors[`vira-red-behind-bg-body`].background.value,"vira-form-warning-color":G.colors[`vira-yellow-behind-bg-non-body`].background.value,"vira-form-warning-hover-color":G.colors[`vira-yellow-behind-bg-header`].background.value,"vira-form-warning-active-color":G.colors[`vira-yellow-behind-bg-body`].background.value,"vira-form-positive-color":G.colors[`vira-green-behind-bg-non-body`].background.value,"vira-form-positive-hover-color":G.colors[`vira-green-behind-bg-header`].background.value,"vira-form-positive-active-color":G.colors[`vira-green-behind-bg-body`].background.value,"vira-form-success-color":G.colors[`vira-green-behind-bg-non-body`].background.value,"vira-form-label-font-weight":`bold`,"vira-form-small-text-size":`14px`,"vira-form-medium-text-size":`16px`,"vira-form-large-text-size":`22px`,"vira-form-radius":dF,"vira-form-wrapper-radius":`16px`,"vira-form-focus-outline-color":G.colors[`vira-accent-foreground-header`].foreground.value,"vira-form-focus-outline-border-radius":z`calc(var(--vira-form-radius, ${Du(dF)}) + 2px)`,"vira-form-plain-color":W[`vira-grey-100`].value,"vira-form-plain-hover-color":G.colors[`vira-grey-foreground-invisible`].foreground.value,"vira-form-plain-active-color":G.colors[`vira-grey-foreground-decoration`].foreground.value,"vira-form-accent-primary-color":G.colors[`vira-accent-behind-bg-non-body`].background.value,"vira-form-accent-primary-hover-color":G.colors[`vira-accent-behind-bg-header`].background.value,"vira-form-accent-primary-active-color":G.colors[`vira-accent-behind-bg-body`].background.value,"vira-form-danger-color":G.colors[`vira-red-behind-bg-non-body`].background.value,"vira-form-danger-hover-color":G.colors[`vira-red-behind-bg-header`].background.value,"vira-form-danger-active-color":G.colors[`vira-red-behind-bg-body`].background.value,"vira-form-filled-background-color":G.colors[`vira-grey-foreground-invisible`].foreground.value,"vira-form-filled-active-background-color":G.colors[`vira-grey-foreground-decoration`].foreground.value}),fF=z`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,pF=Ld({"vira-extended-animation-duration":`1.2s`,"vira-pretty-animation-duration":`300ms`,"vira-interaction-animation-duration":`84ms`});function mF(e){return A.isString(e)?Du(e):e.value}function hF({elementBorderSize:e=`1px`,outlineGap:t=`2px`,outlineWidth:n=`2px`,noNesting:r,outlineColor:i=K[`vira-form-focus-outline-color`],borderRadius:a=K[`vira-form-focus-outline-border-radius`],renderInside:o}={}){let s=z`calc(${mF(t)})`,c=z`calc(${mF(n)} + ${mF(t)} + ${mF(e)})`,l=o?z`
              content: '';
              top: ${s};
              left: ${s};
              position: absolute;
              width: calc(100% - calc(${s} * 2));
              height: calc(100% - calc(${s} * 2));
              box-sizing: border-box;
              pointer-events: none;
              border: ${mF(n)} solid ${mF(i)};
              border-radius: ${mF(a)};
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
              border: ${mF(n)} solid ${mF(i)};
              border-radius: ${mF(a)};
              z-index: 100;
          `;return r?l:z`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${l}
        }
    `}var gF=Ld({"vira-monospace":`monospace`}),_F={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};Ml(_F,e=>e),Object.fromEntries(Object.entries(_F).map(([e,t])=>[t,e]));var vF;(function(e){e.SmallBodyText=`small-body`,e.BodyText=`body`,e.NonBodyText=`non-body`,e.Header=`header`,e.Placeholder=`placeholder`,e.Decoration=`decoration`,e.Invisible=`invisible`})(vF||={}),vF.SmallBodyText,vF.BodyText,vF.NonBodyText,vF.Header,vF.Placeholder,vF.Decoration,vF.Invisible,vF.SmallBodyText,vF.BodyText,vF.NonBodyText,vF.Header,vF.Placeholder,vF.Decoration,vF.Invisible;var yF=[{min:90,name:vF.SmallBodyText,description:`Perfect for all sizes of text, even small body text.`,apcaName:`small body text only`,apcaDescription:`Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color.`},{min:75,name:vF.BodyText,description:`Good for regular body text and anything larger.`,apcaName:`body text okay`,apcaDescription:`The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important.`},{min:60,name:vF.NonBodyText,description:`Good for legible non-body text and anything larger.`,apcaName:`fluent text only`,apcaDescription:`The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast.`},{min:45,name:vF.Header,description:`Okay for large or headline text.`,apcaName:`large & sub-fluent text`,apcaDescription:`The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension.`},{min:30,name:vF.Placeholder,description:`Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.`,apcaName:`spot & non text only`,apcaDescription:`The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.`},{min:15,name:vF.Decoration,description:`Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.`,apcaName:`no text usage`,apcaDescription:`The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site.`},{min:0,name:vF.Invisible,description:`Effectively invisible for users.`,apcaName:`invisible`,apcaDescription:`This should be treated as invisible.`}];Yc(yF,e=>({key:e.min,value:e})),Yc(yF,e=>({key:e.name,value:e}));var bF=ke(vF).sort((e,t)=>Number(t.includes(`-`))-Number(e.includes(`-`))),xF=Yc(o(Jc(Object.keys(G.colors),e=>e.split(`-`)[1],e=>e!==`default`)).filter(A.isTruthy),e=>({key:e,value:e}),{useRequired:!0}),SF=De(G.colors),CF=ml(xF,e=>Yc(o(Jc(SF,t=>bF.reduce((e,t)=>yl({value:e,suffix:`-${t}`}),fl({value:t,prefix:`vira-${e}-`})),(t,n)=>n.startsWith(`vira-${e}-`))),t=>({key:t,value:Yc(ke(vF),n=>{let r=`vira-${e}-${t}-${n}`;if(A.hasKey(G.colors,r))return{key:n,value:G.colors[r]}})}))),q;(function(e){e.Accent=`accent`,e.Plain=`plain`,e.Neutral=`neutral`,e.Danger=`danger`,e.Warning=`warning`,e.Positive=`positive`,e.None=`none`})(q||={});var wF={[q.Accent]:xF.accent,[q.Neutral]:xF.grey,[q.Danger]:xF.red,[q.Warning]:xF.yellow,[q.Positive]:xF.green},TF=[q.Accent,q.Plain,q.Neutral,q.Danger,q.Warning,q.Positive],EF;(function(e){e.Large=`large`,e.Medium=`medium`,e.Small=`small`,e.None=`none`})(EF||={});var DF=[EF.Small,EF.Medium,EF.Large],OF;(function(e){e.Standard=`standard`,e.Subtle=`subtle`,e.None=`none`})(OF||={});var kF=[OF.Standard,OF.Subtle],AF={[EF.Large]:40,[EF.Medium]:32,[EF.Small]:24},jF=z`
    padding: 0;
    margin: 0;
`,MF=z`
    ${jF};
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,NF=Ld({"menu-shadow-color":`#e2e2e2`,"modal-shadow-color":`#4f4f4f`}),PF={menuShadow:z`
        filter: drop-shadow(0px 5px 5px ${NF[`menu-shadow-color`].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:z`
        box-shadow: 0 5px 15px ${NF[`modal-shadow-color`].value};
    `},FF=z`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,IF=`vira-`,LF=PN({assertInputs:e=>{if(!e.tagName.startsWith(IF))throw Error(`Tag name should start with '${IF}' but got '${e.tagName}'`)}}),J=LF()({tagName:`vira-icon`,hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer||!!e.icon?.size},styles:({hostClasses:e})=>z`
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
    `,render({inputs:e,host:t}){if(e.icon)e.icon.size&&(t.style.width=_l(e.icon.size),t.style.height=_l(e.icon.size));else return``;return e.icon.svgTemplate}});function RF(e,t){return e>t}function zF(e,t){return e<t}function BF(e){e.scrollIntoView({behavior:`smooth`,inline:`center`,block:`center`}),e.focus()}var VF;(function(e){e.Up=`up`,e.Down=`down`,e.Left=`left`,e.Right=`right`})(VF||={});var HF;(function(e){e.Enter=`enter`,e.Exit=`exit`,e.Activate=`activate`,e.Focus=`focus`,e.Navigate=`navigate`,e.Pibling=`pibling`})(HF||={});function UF(e){let t={x:-1,y:-1},n;for(;t.y<e.length-1&&!n;){t.y++;let r=e[t.y];for(;r&&t.x<r.length-1&&!n;){t.x++;let e=r[t.x];if(e)if(e.navEntry.navParams.group){let t=UF(e.children);t&&(n=t.node)}else e.navEntry.navParams.disabled||(n=e)}}if(n)return{node:n,coords:t}}function WF(e,t,n,r){if(!t){let t=UF(e.children);return t?(BF(t.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:t.node.element,coords:t.coords,direction:n,navAction:HF.Navigate}):{success:!1,reason:`no default element to focus`,direction:n,navAction:HF.Navigate}}let{nextNode:i,requiresWrapping:a,coords:o}=GF(t.position,n),s=r?!0:!a;return i&&s?(BF(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:a,direction:n,navAction:HF.Navigate,coords:o}):i?s?{success:!1,reason:`no conditions matched`,direction:n,navAction:HF.Navigate}:{success:!1,reason:`wrapping blocked`,direction:n,navAction:HF.Navigate}:{success:!1,reason:`failed to find node to focus`,direction:n,navAction:HF.Navigate}}function GF(e,t){let n=!1,r,i=1,a=Date.now();for(;!n||!r;)if(r=KF(e,t,i),n=!r.nextNode?.navEntry.navParams.disabled,i++,Date.now()-a>1e3)return Tl.warning(`Failed to find next non-disabled node.`),r;return r}function KF(e,t,n){let r=e.ancestorChain[e.ancestorChain.length-1]?.node;Fc.isDefined(r,`missing parent`);let i=Ac.isDefined(r.children[e.nodeCoords.y]),a=r.children.length>1&&(t===VF.Down||t===VF.Up),o=t===VF.Down||t===VF.Right?n:-1*n,s=o<0?RF:zF,c=a?Al(e.nodeCoords.y+o,{min:0,max:r.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=Ac.isDefined(r.children[c]),u=a?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:Al(e.nodeCoords.x+o,{min:0,max:i.length-1,takeOverflow:!0});return{nextNode:r.children[c]?.[u],requiresWrapping:a?s(c,e.nodeCoords.y):s(u,e.nodeCoords.x),coords:{x:u,y:c}}}function qF(e,t,n){let r=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!r)return{success:!1,reason:`no parent to find a pibling from`,direction:t,navAction:HF.Pibling};let{nextNode:i,requiresWrapping:a,coords:o}=GF(r,t),s=i?.navEntry.navParams.group?UF(i.children):{node:i,coords:o},c=n?!0:!a;return!s||!s.node?{success:!1,reason:`no node to navigate to`,direction:t,navAction:HF.Pibling}:c?(BF(s.node.element),{success:!0,defaulted:!1,newElement:s.node.element,wrapped:a,coords:s.coords,direction:t,navAction:HF.Pibling}):{success:!1,reason:`wrapping blocked`,direction:t,navAction:HF.Pibling}}var JF;(function(e){e.Disabled=`disabled`,e.Group=`group`,e.Focused=`focused`,e.Active=`active`})(JF||={});var YF={name:`data-nav`,js(e){return e?`[${YF.name}*="${e}"]`:`[${YF.name}]`},css({baseSelector:e=``,navValue:t}={}){return z`
            ${Du(e)}${Du(YF.js(t))}
        `}},XF=`navEntry`;function ZF(e){return XF in e}function QF(e){if(ZF(e)){let t=e[XF];return Ac.instanceOf(t,eI,`Invalid nav entry`)}else return}function $F(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type===`mousedown`&&!e.navController.options.activateOnMouseUp||t.type===`mouseup`&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type===`mouseup`||t.type===`focus`?t.target===e.element&&e.focus(!0):t.type===`mousemove`?t.target===e.element&&e.navValue!==JF.Active&&e.focus(!0):(t.type===`blur`||t.type===`mouseleave`)&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}var eI=class{element;navParams;navTreeNode;navValue;eventListener=$F(this);constructor(e,t,n){this.element=e,this.navParams=n,this.attachListeners(),this.navController=t}set navController(e){this._navController!==e&&(this._navController?.removeNavEntry(this),this._navController=e,e.addNavEntry(this))}get navController(){return Fc.isDefined(this._navController,`this.navController has not been set in NavEntry constructor yet.`),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(jl(this).navValue=void 0,this.element.setAttribute(YF.name,``),oP(this.element)&&this.element.blur())}focus(e,t){let n=this.navValue,r=e===(n===JF.Focused);if(!(this.navParams.group||this.navController.locked||r||!e&&this.navController.options.alwaysRequireFocused))return e?(this.setNavValue(JF.Focused),oP(this.element)||this.element.focus()):(this.removeNavValue(JF.Focused),oP(this.element)&&this.element.blur()),t||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:e,previousNavValue:n}),this.navController.triggerNavEntry(this,e,HF.Focus)}activate(e){let t=this.navValue,n=e===(t===JF.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(e,!0),e?this.setNavValue(JF.Active):this.setNavValue(JF.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:e,previousNavValue:t}),this.navController.triggerNavEntry(this,e,HF.Activate)}setNavValue(e){jl(this).navValue=e,this.element.setAttribute(YF.name,e)}removeNavValue(e){this.navValue===e&&(jl(this).navValue=void 0,this.element.setAttribute(YF.name,``))}attachListeners(){this.element.addEventListener(`mousemove`,this.eventListener,!0),this.element.addEventListener(`mouseleave`,this.eventListener,!0),this.element.addEventListener(`mousedown`,this.eventListener,!0),this.element.addEventListener(`mouseup`,this.eventListener,!0),this.element.addEventListener(`focus`,this.eventListener,!0),this.element.addEventListener(`blur`,this.eventListener,!0)}};function tI(e,t){if(!t)return{success:!1,reason:`no focused node to enter into`,direction:void 0,navAction:HF.Enter};if(!t.position.node.children.length)return{success:!1,reason:`no children to enter into`,direction:void 0,navAction:HF.Enter};let n=t.position.node.children[0]?.[0];return n?(BF(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:HF.Enter,coords:{x:0,y:0}}):{success:!1,reason:`failed to find first child to enter into`,direction:void 0,navAction:HF.Enter}}function nI(e,t){return rI([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function rI(e,t,n){for(let r=0;r<t.length;r++){let i=t[r];for(let t=0;t<i.length;t++){let a=i[t],o={ancestorChain:e,nodeCoords:{x:t,y:r},node:a};if(n(o))return o;let s=rI(e.concat(o),a.children,n);if(s)return s}}}function iI(e,t){let n=nI(e,({node:e})=>!e.root&&e.navEntry===t);if(!n)throw Error(`Failed to find NavEntry in NavTree.`);return n}function aI(e,t){if(!t)return{success:!1,reason:`no focused node to exit out of`,direction:void 0,navAction:HF.Exit};let n=t.position.ancestorChain.toReversed().find(e=>!e.node.root&&!e.node.navEntry.navParams.group)?.node;if(!n||n.root)return{success:!1,reason:`failed to find ancestor, nothing to exit to`,direction:void 0,navAction:HF.Exit};let{nodeCoords:r}=iI(e,n.navEntry);return BF(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:HF.Exit,coords:r}}var oI=class extends Ul()(`nav-exit`){},sI=class extends Ul()(`nav-activate`){},cI=class extends Ul()(`nav-focus`){},lI=class extends Ul()(`nav-enter`){},uI=class extends Ul()(`nav-navigate`){},dI=class extends Ul()(`nav-navigate-pibling`){};function fI(e){return{root:!0,children:pI(e)?.children||[]}}function pI(e){let t=e.element;if(!(t instanceof HTMLElement))return;let n=QF(t),r=mI(e);if(n?.navParams.group&&r.length||r.length||n)return{root:!1,element:t,navEntry:n,children:r}}function mI(e){let t=[];function n(e){if(e.navEntry?.navParams.group&&!e.children.length)return;if(!e.navEntry){e.children.forEach(e=>e.forEach(e=>n(e)));return}let r=e.navEntry.navParams.x,i=e.navEntry.navParams.y||0,a=Gc(t,i,()=>({noX:[],withX:[],y:i}));r==null?a.noX.push(e):a.withX.push({x:r,node:e})}return e.children.forEach(e=>{let t=pI(e);t&&n(t)}),t.sort((e,t)=>e.y-t.y).map(e=>(e.withX.sort((e,t)=>e.x-t.x),e.withX.forEach(({x:t,node:n})=>{e.noX.splice(t,0,n)}),e.noX)).filter(A.isTruthy)}var hI=class extends Kl{rootElement;options;constructor(e,t={}){super(),this.rootElement=e,this.options=t}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){UF(this.getNavTree().children)?.node.element.focus()}addNavEntry(e){this.navEntries.add(e),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(e){this.navEntries.delete(e),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(e,t,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:`NavController is locked.`};if(!e)return{success:!1,direction:void 0,navAction:n,reason:`No nav entry to operate on.`};let r=iI(this.getNavTree(),e);t?(this.navEntries.forEach(t=>{t!==e&&t.clearNavValue()}),this.currentNavEntry={entry:e,navAction:n,position:r}):this.currentNavEntry?.entry===e&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);let i={success:!0,defaulted:!1,direction:void 0,newElement:e.element,wrapped:!1,navAction:n,coords:r.nodeCoords};return t&&(n===HF.Activate?this.dispatch(new sI({detail:i})):n===HF.Focus&&this.dispatch(new cI({detail:i}))),i}navigate({direction:e,allowWrapping:t}){if(this.locked)return{success:!1,direction:e,navAction:HF.Navigate,reason:`NavController is locked.`};let n=WF(this.getNavTree(),this.currentNavEntry,e,t);return this.dispatch(new uI({detail:n})),n}enterInto({fallbackToActivate:e}={}){if(this.locked)return{success:!1,direction:void 0,navAction:HF.Enter,reason:`NavController is locked.`};let t=tI(this.getNavTree(),this.currentNavEntry);return!t.success&&e?this.activate():(this.dispatch(new lI({detail:t})),t)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:HF.Activate,reason:`NavController is locked.`};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:HF.Activate,reason:`No focused NavEntry to activate.`};let e=this.currentNavEntry.entry.activate(!0);return Fc.isDefined(e,`Cannot activate a group.`),e}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:HF.Exit,reason:`NavController is locked.`};this.currentNavEntry?.navAction===HF.Activate&&this.currentNavEntry.entry.focus(!0);let e=aI(this.getNavTree(),this.currentNavEntry);return this.dispatch(new oI({detail:e})),e}navigatePibling({allowWrapping:e,direction:t}){if(this.locked)return{success:!1,direction:t,navAction:HF.Pibling,reason:`NavController is locked.`};let n=this.getNavTree(),r={...this.currentNavEntry?qF(this.currentNavEntry,t,e):WF(n,void 0,t,e),navAction:HF.Pibling};return this.dispatch(new dI({detail:r})),r}buildNavTree(){let e=fI(rP(this.rootElement));return this.cachedNavTree=e,e}};function gI({open:e,callback:t,popUpManager:n,host:r,options:i}){if(e){let e=n.showPopUp(r,i);t?.(e)}else n.removePopUp(),t?.(void 0)}var _I=globalThis.document,vI=class extends lM{constructor(){if(super({defaultValue:!!_I?.hidden,equalityCheck:A.strictEquals}),!_I)return;globalThis.addEventListener(`visibilitychange`,e=>this.updateVisibility(e,_I));let e=e=>this.updateVisibility(e,_I);globalThis.onpageshow=e,globalThis.onpagehide=e,globalThis.onfocus=e,globalThis.onblur=e}updateVisibility(e,t){let n=bI.includes(e.type),r=yI.includes(e.type),i=n?!0:r?!1:t.hasFocus()||!t.hidden;this.setValue(i)}},yI=[`blur`,`focusout`,`pagehide`],bI=[`focus`,`focusin`,`pageshow`],xI=new vI;function SI(e,t){return xI.listen(e,t)}function CI(e){return e instanceof HTMLInputElement&&(e.type===`text`||e.type===`search`||e.type===`email`||e.type===`url`||e.type===`tel`||e.type===`password`||e.type===`number`)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}var wI={top:0,left:0,right:0,bottom:0},TI=class extends Wl(`hide-pop-up`){},EI=class extends Ul()(`nav-select`){},DI=class{navController;listenTarget=new Kl;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;constructor(e,t){this.navController=e,this.options={...this.options,...t}}attachGlobalListeners(){this.cleanupCallbacks=[SI(!1,e=>{e||this.removePopUp()}),this.navController.listen(sI,e=>{let t=e.composedPath()[0];t instanceof Element&&CI(t)||e.detail.success&&(this.listenTarget.dispatch(new EI({detail:e.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),e.stopImmediatePropagation(),e.preventDefault())}),Jl(`mousedown`,e=>{this.lastRootElement&&e.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Jl(`keydown`,e=>{let t=e.code;if(t===`Escape`)this.removePopUp();else if(this.options.supportNavigation){let n=e.composedPath()[0];if(n instanceof Element&&CI(n))return;t===`ArrowDown`?(e.stopImmediatePropagation(),e.preventDefault(),this.navController.navigate({direction:VF.Down,allowWrapping:!1})):t===`ArrowUp`?(e.stopImmediatePropagation(),e.preventDefault(),this.navController.navigate({direction:VF.Up,allowWrapping:!1})):t===`ArrowLeft`?(e.stopImmediatePropagation(),e.preventDefault(),this.navController.navigate({direction:VF.Left,allowWrapping:!1})):t===`ArrowRight`?(e.stopImmediatePropagation(),e.preventDefault(),this.navController.navigate({direction:VF.Right,allowWrapping:!1})):(t===`Enter`||t===`Return`||t===`Space`)&&this.navController.enterInto({fallbackToActivate:!0}).success&&(e.stopImmediatePropagation(),e.preventDefault())}})]}listen(e,t,n){return this.listenTarget.listen(e,t,n)}removePopUp(){this.cleanupCallbacks.forEach(e=>e()),this.listenTarget.dispatch(new TI)}showPopUp(e,t){this.lastRootElement=e;let n={...this.options,...t},r=uP(e);Fc.instanceOf(r,HTMLElement);let i=e.getBoundingClientRect(),a=r.getBoundingClientRect(),o=r.offsetWidth-r.clientWidth,s=r.offsetHeight-r.clientHeight,c=r===document.body?{top:0,left:0,right:a.width,bottom:a.height}:{top:a.top,left:a.left,right:a.right-o,bottom:a.bottom-s},l=Ml(wI,e=>i[e]),u=Ml(wI,e=>{let t=c[e],n=l[e];return Math.abs(t-n)}),d=u.top>u.bottom+n.verticalDiffThreshold&&u.bottom<n.minDownSpace,f=u.left>u.right+n.horizontalDiffThreshold&&u.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!d,popRight:!f,positions:{container:c,root:l,diff:u}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}},OI;(function(e){e.Left=`left`,e.Right=`right`,e.Both=`both`,e.Auto=`auto`})(OI||={});var kI=LF()({tagName:`vira-pop-up-trigger`,state({host:e}){return{showPopUpResult:void 0,popUpManager:new DI(new hI(e,{activateOnMouseUp:!0}))}},slotNames:[`trigger`,`popUp`],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled,"vira-pop-up-trigger-inside-focus":({inputs:e})=>!!e.useInsideFocus,"vira-pop-up-trigger-outside-focus":({inputs:e})=>!e.useInsideFocus},styles:({hostClasses:e})=>z`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${MF};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;
        }

        ${e[`vira-pop-up-trigger-inside-focus`].selector} .dropdown-wrapper {
            ${hF({renderInside:!0})}
        }
        ${e[`vira-pop-up-trigger-outside-focus`].selector} .dropdown-wrapper {
            ${hF()}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${FF};
        }

        ${e[`vira-pop-up-trigger-disabled`].selector} {
            ${fF}
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
    `,events:{navSelect:XM(),openChange:XM(),init:XM()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:n,inputs:r,dispatch:i,events:a}){e.popUpManager.listen(TI,()=>{if(t({showPopUpResult:void 0}),i(new a.openChange(void 0)),r.focusOnClose&&!r.isDisabled){let e=n.shadowRoot.querySelector(`.dropdown-wrapper`);Fc.instanceOf(e,HTMLButtonElement,`failed to find dropdown wrapper child`),e.focus()}}),e.popUpManager.listen(EI,o=>{r.keepOpenAfterInteraction||gI({open:!1,callback(e){t({showPopUpResult:e})},host:n,popUpManager:e.popUpManager}),i(new a.navSelect(o.detail))}),i(new a.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:n,inputs:r,updateState:i,host:a,slotNames:o}){function s({emitEvent:o,open:s},c){if(n.showPopUpResult&&r.keepOpenAfterInteraction&&c){let e=a.shadowRoot.querySelector(`.dropdown-trigger`);if(e&&!c.composedPath().includes(e))return}gI({open:s,callback(n){i({showPopUpResult:n}),o&&e(new t.openChange(n))},host:a,popUpManager:n.popUpManager})}r.isDisabled?s({open:!1,emitEvent:!1},void 0):r.z_debug_forceOpenState!=null&&(!r.z_debug_forceOpenState&&n.showPopUpResult?s({emitEvent:!1,open:!1},void 0):r.z_debug_forceOpenState&&!n.showPopUpResult&&s({emitEvent:!1,open:!0},void 0));let c=r.horizontalAnchor===OI.Auto||r.horizontalAnchor===void 0?n.showPopUpResult?.popRight?OI.Left:OI.Right:r.horizontalAnchor,l=z`
            ${c===OI.Right&&n.showPopUpResult?r.ignoreMaxWidth?z`
                          left: unset;
                      `:z`
                          left: -${n.showPopUpResult.positions.diff.left}px;
                      `:z`
                      left: ${r.popUpOffset?.left||0}px;
                  `}
            ${n.showPopUpResult&&c===OI.Left?r.ignoreMaxWidth?z`
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
                class="dropdown-wrapper ${TM({open:!!n.showPopUpResult,"open-upwards":!n.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!n.showPopUpResult}
                ${B(`keydown`,e=>{!n.showPopUpResult&&e.code.startsWith(`Arrow`)&&s({emitEvent:!0,open:!0},e)})}
                ${B(`click`,e=>{if(e.detail===0){let t=!1;if(dP(({element:e})=>CI(e)?(t=!0,!0):!1),t)return;d(e)}else if(e.button===0&&n.showPopUpResult){let t=a.shadowRoot.querySelector(`.dropdown-trigger`);t&&!e.composedPath().includes(t)&&s({emitEvent:!0,open:!1},e)}})}
                ${B(`mousedown`,e=>{if(e.button!==0)return;let t=Ac.instanceOf(a.shadowRoot.querySelector(`.dropdown-trigger`),HTMLElement);e.composedPath().includes(t)&&d(e)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${o.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${TM({"right-aligned":c===OI.Right})}"
                    style=${u}
                >
                    ${kN(!!n.showPopUpResult,V`
                            <slot name=${o.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),AI=U({name:`Check16Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="m12 5-6 6-3-3"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),jI=U({name:`ChevronDown16Icon`,svgTemplate:V`
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
    `}),MI=U({name:`ChevronUp16Icon`,svgTemplate:V`
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
    `}),NI=U({name:`Dash16Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 8h8"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                stroke-linecap="round"
            />
        </svg>
    `}),PI=U({name:`Element16Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),FI=U({name:`Upload16Icon`,svgTemplate:V`
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
    `}),II=U({name:`X16Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 4l8 8M12 4l-8 8"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),LI=U({name:`ArrowDown24Icon`,svgTemplate:V`
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
    `}),RI=U({name:`ArrowLeft24Icon`,svgTemplate:V`
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
    `}),zI=U({name:`ArrowRight24Icon`,svgTemplate:V`
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
    `}),BI=U({name:`ArrowUp24Icon`,svgTemplate:V`
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
    `}),VI=U({name:`AutoTheme24Icon`,svgTemplate:V`
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
    `}),HI=U({name:`Bell24Icon`,svgTemplate:V`
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
    `}),UI=U({name:`Chat24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />
        </svg>
    `}),WI=U({name:`ChevronDown24Icon`,svgTemplate:V`
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
    `}),GI=U({name:`ChevronUp24Icon`,svgTemplate:V`
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
    `}),KI=U({name:`CloseX24Icon`,svgTemplate:V`
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
    `}),qI=U({name:`Commit24Icon`,svgTemplate:V`
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
    `}),JI=U({name:`Copy24Icon`,svgTemplate:V`
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
    `}),YI=U({name:`Document24Icon`,svgTemplate:V`
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
    `}),XI=U({name:`DocumentSearch24Icon`,svgTemplate:V`
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
    `}),ZI=U({name:`DoubleChevron24Icon`,svgTemplate:V`
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
    `}),QI=U({name:`Element24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),$I=U({name:`ExternalLink24Icon`,svgTemplate:V`
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
    `}),eL=U({name:`EyeClosed24Icon`,svgTemplate:V`
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
    `}),tL=U({name:`EyeOpen24Icon`,svgTemplate:V`
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
    `}),nL=U({name:`Filter24Icon`,svgTemplate:V`
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
    `}),rL=U({name:`Globe24Icon`,svgTemplate:V`
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
    `}),iL=U({name:`Link24Icon`,svgTemplate:V`
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
    `}),aL=U({name:`Loader24Icon`,svgTemplate:V`
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
    `}),oL=U({name:`LoaderAnimated24Icon`,svgTemplate:V`
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
        animation: ${pF[`vira-extended-animation-duration`].value} linear
            loader-animated-spin infinite;
    }
`}
        </style>
        ${aL.svgTemplate}
    `}),sL=U({name:`Lock24Icon`,svgTemplate:V`
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
    `}),cL=U({name:`MagnifyingGlass24Icon`,svgTemplate:V`
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
    `}),lL=U({name:`Moon24Icon`,svgTemplate:V`
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
    `}),uL=U({name:`Options24Icon`,svgTemplate:V`
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
    `}),dL=U({name:`Pencil24Icon`,svgTemplate:V`
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
    `}),fL=U({name:`Plus24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M12 5v14M5 12h14"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),pL=U({name:`Printer24Icon`,svgTemplate:V`
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
    `}),mL=U({name:`Shield24Icon`,svgTemplate:V`
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
    `}),hL=U({name:`SortAscending24Icon`,svgTemplate:V`
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
    `}),gL=U({name:`SortDescending24Icon`,svgTemplate:V`
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
    `}),_L=U({name:`Sparkle24Icon`,svgTemplate:V`
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
    `}),vL=U({name:`SpeakerLoud24Icon`,svgTemplate:V`
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
    `}),yL=U({name:`SpeakerMedium24Icon`,svgTemplate:V`
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
    `}),bL=U({name:`SpeakerMuted24Icon`,svgTemplate:V`
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
    `}),xL=U({name:`SpeakerQuiet24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
                fill=${H[`vira-icon-fill-color`].value}
            />
        </svg>
    `}),SL=U({name:`Star24Icon`,svgTemplate:V`
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
    `}),CL=U({name:`StatusFailure24Icon`,svgTemplate:V`
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
    `}),wL=U({name:`StatusInProgress24Icon`,svgTemplate:V`
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
    `}),TL=U({name:`StatusSuccess24Icon`,svgTemplate:V`
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
    `}),EL=U({name:`StatusUnknown24Icon`,svgTemplate:V`
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
    `}),DL=U({name:`StatusWarning24Icon`,svgTemplate:V`
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
    `}),OL=U({name:`Sun24Icon`,svgTemplate:V`
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
    `}),kL=U({name:`Upload24Icon`,svgTemplate:V`
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
    `}),AL=U({name:`X24Icon`,svgTemplate:V`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${H[`vira-icon-stroke-color`].value}
                stroke-width=${H[`vira-icon-stroke-width`].value}
            />
        </svg>
    `});function jL(e,t){let n=z`
        ${Du(De(t).map(e=>{if(t[e])return`${H[e].name}: ${String(t[e])};`}).filter(A.isTruthy).join(` `))}
        display: inline-flex;
        vertical-align: middle;
    `;return U({name:e.name,svgTemplate:V`
            <div style=${n}>${e.svgTemplate}</div>
        `})}var ML={ArrowDown24Icon:LI,ArrowLeft24Icon:RI,ArrowRight24Icon:zI,ArrowUp24Icon:BI,AutoTheme24Icon:VI,Bell24Icon:HI,Chat24Icon:UI,Check16Icon:AI,Check24Icon:rF,ChevronDown16Icon:jI,ChevronDown24Icon:WI,ChevronUp16Icon:MI,ChevronUp24Icon:GI,CloseX24Icon:KI,Commit24Icon:qI,Copy24Icon:JI,Dash16Icon:NI,Document24Icon:YI,DocumentSearch24Icon:XI,DoubleChevron24Icon:ZI,Element16Icon:PI,Element24Icon:QI,ExternalLink24Icon:$I,EyeClosed24Icon:eL,EyeOpen24Icon:tL,Filter24Icon:nL,Globe24Icon:rL,Link24Icon:iL,Loader24Icon:aL,LoaderAnimated24Icon:oL,Lock24Icon:sL,MagnifyingGlass24Icon:cL,Moon24Icon:lL,Options24Icon:uL,Pencil24Icon:dL,Plus24Icon:fL,Printer24Icon:pL,Shield24Icon:mL,SortAscending24Icon:hL,SortDescending24Icon:gL,Sparkle24Icon:_L,SpeakerLoud24Icon:vL,SpeakerMedium24Icon:yL,SpeakerMuted24Icon:bL,SpeakerQuiet24Icon:xL,Star24Icon:SL,StatusFailure24Icon:CL,StatusInProgress24Icon:wL,StatusSuccess24Icon:TL,StatusUnknown24Icon:EL,StatusWarning24Icon:DL,Sun24Icon:OL,Upload16Icon:FI,Upload24Icon:kL,X16Icon:II,X24Icon:AL},NL={value:z`transparent`},PL={[q.Plain]:{[OF.Standard]:{idle:{backgroundColor:G.inverse[oF].background,textColor:G.inverse[oF].foreground,borderColor:G.inverse[oF].background},hover:{backgroundColor:G.colors[`vira-grey-behind-bg-non-body`].background,textColor:G.colors[`vira-grey-behind-bg-non-body`].foreground,borderColor:G.inverse[oF].background},active:{backgroundColor:G.colors[`vira-grey-behind-bg-body`].background,textColor:G.colors[`vira-grey-behind-bg-body`].foreground,borderColor:G.inverse[oF].background}},[OF.Subtle]:{idle:{backgroundColor:NL,textColor:G.colors[oF].foreground,borderColor:NL},hover:{backgroundColor:G.colors[`vira-grey-on-self-body`].background,textColor:G.colors[`vira-grey-on-self-body`].foreground,borderColor:G.colors[`vira-grey-on-self-body`].foreground},active:{backgroundColor:G.colors[`vira-grey-on-self-non-body`].background,textColor:G.colors[`vira-grey-on-self-non-body`].foreground,borderColor:G.colors[`vira-grey-on-self-non-body`].foreground}}},[q.Accent]:{[OF.Standard]:{idle:{backgroundColor:G.colors[`vira-accent-behind-bg-non-body`].background,textColor:G.colors[`vira-accent-behind-bg-non-body`].foreground,borderColor:G.colors[`vira-accent-behind-bg-body`].background},hover:{backgroundColor:G.colors[`vira-accent-behind-bg-header`].background,textColor:G.colors[`vira-accent-behind-bg-header`].foreground,borderColor:G.colors[`vira-accent-behind-bg-body`].background},active:{backgroundColor:G.colors[`vira-accent-behind-bg-body`].background,textColor:G.colors[`vira-accent-behind-bg-body`].foreground,borderColor:G.colors[`vira-accent-behind-bg-body`].background}},[OF.Subtle]:{idle:{backgroundColor:NL,textColor:G.colors[`vira-accent-foreground-non-body`].foreground,borderColor:NL},hover:{backgroundColor:G.colors[`vira-accent-on-self-body`].background,textColor:G.colors[`vira-accent-on-self-body`].foreground,borderColor:G.colors[`vira-accent-on-self-body`].foreground},active:{backgroundColor:G.colors[`vira-accent-on-self-non-body`].background,textColor:G.colors[`vira-accent-on-self-non-body`].foreground,borderColor:G.colors[`vira-accent-on-self-non-body`].foreground}}},[q.Neutral]:{[OF.Standard]:{idle:{backgroundColor:G.colors[oF].background,textColor:G.colors[oF].foreground,borderColor:K[`vira-form-border-color`]},hover:{backgroundColor:G.colors[`vira-grey-behind-fg-small-body`].background,textColor:G.colors[`vira-grey-behind-fg-small-body`].foreground,borderColor:K[`vira-form-border-color`]},active:{backgroundColor:G.colors[`vira-grey-behind-fg-body`].background,textColor:G.colors[`vira-grey-behind-fg-body`].foreground,borderColor:K[`vira-form-border-color`]}},[OF.Subtle]:{idle:{backgroundColor:NL,textColor:G.colors[`vira-grey-foreground-non-body`].foreground,borderColor:NL},hover:{backgroundColor:G.colors[`vira-grey-on-self-body`].background,textColor:G.colors[`vira-grey-on-self-body`].foreground,borderColor:G.colors[`vira-grey-on-self-body`].foreground},active:{backgroundColor:G.colors[`vira-grey-on-self-non-body`].background,textColor:G.colors[`vira-grey-on-self-non-body`].foreground,borderColor:G.colors[`vira-grey-on-self-non-body`].foreground}}},[q.Danger]:{[OF.Standard]:{idle:{backgroundColor:G.colors[`vira-red-behind-bg-non-body`].background,textColor:G.colors[`vira-red-behind-bg-non-body`].foreground,borderColor:G.colors[`vira-red-behind-bg-body`].background},hover:{backgroundColor:G.colors[`vira-red-behind-bg-header`].background,textColor:G.colors[`vira-red-behind-bg-header`].foreground,borderColor:G.colors[`vira-red-behind-bg-body`].background},active:{backgroundColor:G.colors[`vira-red-behind-bg-body`].background,textColor:G.colors[`vira-red-behind-bg-body`].foreground,borderColor:G.colors[`vira-red-behind-bg-body`].background}},[OF.Subtle]:{idle:{backgroundColor:NL,textColor:G.colors[`vira-red-foreground-non-body`].foreground,borderColor:NL},hover:{backgroundColor:G.colors[`vira-red-on-self-body`].background,textColor:G.colors[`vira-red-on-self-body`].foreground,borderColor:G.colors[`vira-red-on-self-body`].foreground},active:{backgroundColor:G.colors[`vira-red-on-self-non-body`].background,textColor:G.colors[`vira-red-on-self-non-body`].foreground,borderColor:G.colors[`vira-red-on-self-non-body`].foreground}}},[q.Warning]:{[OF.Standard]:{idle:{backgroundColor:G.colors[`vira-yellow-behind-bg-non-body`].background,textColor:G.colors[`vira-yellow-behind-bg-non-body`].foreground,borderColor:G.colors[`vira-yellow-behind-bg-body`].background},hover:{backgroundColor:G.colors[`vira-yellow-behind-bg-header`].background,textColor:G.colors[`vira-yellow-behind-bg-header`].foreground,borderColor:G.colors[`vira-yellow-behind-bg-body`].background},active:{backgroundColor:G.colors[`vira-yellow-behind-bg-body`].background,textColor:G.colors[`vira-yellow-behind-bg-body`].foreground,borderColor:G.colors[`vira-yellow-behind-bg-body`].background}},[OF.Subtle]:{idle:{backgroundColor:NL,textColor:G.colors[`vira-yellow-foreground-non-body`].foreground,borderColor:NL},hover:{backgroundColor:G.colors[`vira-yellow-on-self-body`].background,textColor:G.colors[`vira-yellow-on-self-body`].foreground,borderColor:G.colors[`vira-yellow-on-self-body`].foreground},active:{backgroundColor:G.colors[`vira-yellow-on-self-non-body`].background,textColor:G.colors[`vira-yellow-on-self-non-body`].foreground,borderColor:G.colors[`vira-yellow-on-self-non-body`].foreground}}},[q.Positive]:{[OF.Standard]:{idle:{backgroundColor:G.colors[`vira-green-behind-bg-non-body`].background,textColor:G.colors[`vira-green-behind-bg-non-body`].foreground,borderColor:G.colors[`vira-green-behind-bg-body`].background},hover:{backgroundColor:G.colors[`vira-green-behind-bg-header`].background,textColor:G.colors[`vira-green-behind-bg-header`].foreground,borderColor:G.colors[`vira-green-behind-bg-body`].background},active:{backgroundColor:G.colors[`vira-green-behind-bg-body`].background,textColor:G.colors[`vira-green-behind-bg-body`].foreground,borderColor:G.colors[`vira-green-behind-bg-body`].background}},[OF.Subtle]:{idle:{backgroundColor:NL,textColor:G.colors[`vira-green-foreground-non-body`].foreground,borderColor:NL},hover:{backgroundColor:G.colors[`vira-green-on-self-body`].background,textColor:G.colors[`vira-green-on-self-body`].foreground,borderColor:G.colors[`vira-green-on-self-body`].foreground},active:{backgroundColor:G.colors[`vira-green-on-self-non-body`].background,textColor:G.colors[`vira-green-on-self-non-body`].foreground,borderColor:G.colors[`vira-green-on-self-non-body`].foreground}}}},FL=LF()({tagName:`vira-button`,hostClasses:{"vira-button-with-menu-caret":({inputs:e})=>!!e.showMenuCaret,"vira-button-size-large":({inputs:e})=>e.buttonSize===EF.Large,"vira-button-size-medium":({inputs:e})=>!e.buttonSize||e.buttonSize===EF.Medium,"vira-button-size-small":({inputs:e})=>e.buttonSize===EF.Small,"vira-button-emphasis-standard":({inputs:e})=>!e.buttonEmphasis||e.buttonEmphasis===OF.Standard,"vira-button-emphasis-subtle":({inputs:e})=>e.buttonEmphasis===OF.Subtle,"vira-button-color-accent":({inputs:e})=>!e.colorVariant||e.colorVariant===q.Accent,"vira-button-color-plain":({inputs:e})=>e.colorVariant===q.Plain,"vira-button-color-neutral":({inputs:e})=>e.colorVariant===q.Neutral,"vira-button-color-danger":({inputs:e})=>e.colorVariant===q.Danger,"vira-button-color-warning":({inputs:e})=>e.colorVariant===q.Warning,"vira-button-color-positive":({inputs:e})=>e.colorVariant===q.Positive,"vira-button-disabled":({inputs:e})=>!!e.isDisabled,"vira-button-icon-only":({inputs:e})=>!e.text&&!!e.icon},cssVars:{"vira-button-text-color":`transparent`,"vira-button-background-color":`transparent`,"vira-button-border-color":`transparent`,"vira-button-hover-text-color":`transparent`,"vira-button-hover-background-color":`transparent`,"vira-button-hover-border-color":`transparent`,"vira-button-active-text-color":`transparent`,"vira-button-active-background-color":`transparent`,"vira-button-active-border-color":`transparent`,"vira-button-disabled-text-color":G.colors[`vira-grey-behind-bg-decoration`].foreground.value,"vira-button-disabled-background-color":G.colors[`vira-grey-behind-bg-decoration`].background.value,"vira-button-disabled-border-color":G.colors[`vira-grey-behind-bg-decoration`].background.value,"vira-button-border-width":`1px`,"vira-button-border-radius":K[`vira-form-radius`].value},styles:({hostClasses:e,cssVars:t})=>{function n(){return Du(kF.flatMap(n=>TF.map(r=>{let i=PL[r][n];return z`
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
`))}function r(){return Du(DF.map(t=>z`
                    ${e[`vira-button-size-${t}`].selector} {
                        font-size: ${K[`vira-form-${t}-text-size`].value};

                        button {
                            min-height: ${AF[t]}px;
                            padding: 2px
                                ${K[`vira-form-${t}-text-size`].value};
                        }

                        &${e[`vira-button-icon-only`].selector} {
                            min-width: ${AF[t]}px;
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
                ${FF};
                ${K[`vira-form-focus-outline-color`].name}: ${K[`vira-form-accent-primary-hover-color`].value}
            }

            ${r()}
            ${n()}

            button {
                ${MF};
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

                ${hF({elementBorderSize:t[`vira-button-border-width`]})}
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
                  <${J.assign({icon:jI})}
                      class="caret-icon"
                  ></${J}>
              `:j;return V`
            <button ?disabled=${e.isDisabled}>
                ${t}${n}${r}
            </button>
        `}}),IL;(function(e){e.Error=`error`,e.Success=`success`})(IL||={});var LL=LF()({tagName:`vira-card`,hostClasses:{"vira-card-error":({inputs:e})=>e.cardState===IL.Error,"vira-card-success":({inputs:e})=>e.cardState===IL.Success},cssVars:{"vira-card-border":z`1px solid ${K[`vira-form-border-color`].value}`,"vira-card-padding":K[`vira-form-wrapper-radius`].value},styles:({hostClasses:e,cssVars:t})=>z`
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
        `}}),RL=LF()({tagName:`vira-checkbox`,hostClasses:{"vira-checkbox-horizontal":({inputs:e})=>!!e.horizontal,"vira-checkbox-filled-checked":({inputs:e})=>!!e.fillWhenChecked,"vira-checkbox-filled-unchecked":({inputs:e})=>!!e.fillWhenUnchecked},styles:({hostClasses:e})=>z`
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

            ${hF({elementBorderSize:`1px`})}

            &.checked {
                & ${J} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${K[`vira-form-error-color`].value};
            }

            &.disabled {
                ${fF};
            }
        }

        ${e[`vira-checkbox-horizontal`].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,events:{valueChange:XM()},render({inputs:e,dispatch:t,events:n}){function r(){e.disabled||t(new n.valueChange(!e.value))}let i=e.label?V`
                  <span
                      class="label-text"
                      ${_N(e.attributePassthrough?.text)}
                      style=${EM(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:j;return V`
            <label
                class=${TM({disabled:!!e.disabled})}
                ${_N(e.attributePassthrough?.label)}
                style=${EM(e.stylePassthrough?.label)}
                ${B(`mousedown`,r)}
            >
                ${i}
                <span
                    class="custom-checkbox ${TM({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${EM(e.label||void 0)}
                    aria-checked=${e.value?`true`:`false`}
                    aria-disabled=${e.disabled?`true`:`false`}
                    tabindex=${e.disabled?`-1`:`0`}
                    ${_N(e.attributePassthrough?.[`custom-checkbox`])}
                    style=${EM(e.stylePassthrough?.[`custom-checkbox`])}
                    ${bN(r)}
                >
                    <${J.assign({icon:rF,fitContainer:!0})}
                        ${_N(e.attributePassthrough?.[J.tagName])}
                        style=${EM(e.stylePassthrough?.[J.tagName])}
                    ></${J}>
                </span>
            </label>
        `}}),zL=LF()({tagName:`vira-collapsible-wrapper`,state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expand-on-print":({inputs:e})=>!!e.expandOnPrint},slotNames:[`header`],styles:({hostClasses:e})=>z`
        :host {
            display: flex;
            flex-direction: column;
            max-width: 100%;
            box-sizing: border-box;
        }

        .header-wrapper {
            ${MF};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${pF[`vira-pretty-animation-duration`].value};
            overflow: hidden;

            &.collapsed {
                ${FF}
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
    `,events:{expandChange:XM()},render({state:e,slotNames:t,updateState:n,dispatch:r,events:i,inputs:a}){let o=a.expanded?z`
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
                class="collapsing-element ${TM({collapsed:!a.expanded})}"
                style=${o}
                disabled="disabled"
            >
                <div
                    ${EN(({contentRect:e})=>{n({contentHeight:e.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),BL=LF()({tagName:`vira-collapsible-card`,testIds:[`openCaret`],events:{expandToggle:XM()},state({inputs:e}){return{isExpanded:!!e.startExpanded}},hostClasses:{"vira-collapsible-card-expanded":({state:e})=>e.isExpanded,"vira-collapsible-card-expansion-blocked":({inputs:e})=>!!e.blockExpansion,"vira-collapsible-card-card-styles":({inputs:e})=>!e.rawCollapsible},cssVars:{"vira-collapsible-card-content-gap":`16px`},styles:({hostClasses:e,cssVars:t})=>z`
        :host {
            display: inline-flex;
            max-width: 100%;
            box-sizing: border-box;
        }

        ${e[`vira-collapsible-card-expanded`].selector} .open-caret {
            transform: rotate(180deg);
        }

        ${zL} {
            flex-grow: 1;
            max-width: 100%;
        }

        ${e[`vira-collapsible-card-card-styles`].selector} {
            & ${zL} {
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
            ${zL} {
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
                                <${J.assign({icon:MI,fitContainer:!0})}
                                    ${NN(i.openCaret)}
                                    class="open-caret"
                                ></${J}>
                            `}
                  </div>
              `;return V`
            <${zL.assign({expanded:n.isExpanded,expandOnPrint:e.expandOnPrint??!1})}
                ${B(zL.events.expandChange,t=>{t.stopImmediatePropagation(),!e.blockExpansion&&(r({isExpanded:t.detail}),a(new o.expandToggle(t.detail)))})}
            >
                <div class="header-wrapper" slot=${zL.slotNames.header}>
                    ${c}
                </div>
                ${s}
            </${zL}>
        `}}),VL;(function(e){e.a98=`a98`,e.cubehelix=`cubehelix`,e.dlab=`dlab`,e.dlch=`dlch`,e.hsi=`hsi`,e.hsl=`hsl`,e.hsv=`hsv`,e.hwb=`hwb`,e.itp=`itp`,e.jab=`jab`,e.jch=`jch`,e.lab=`lab`,e.lab65=`lab65`,e.lch=`lch`,e.lch65=`lch65`,e.lchuv=`lchuv`,e.lrgb=`lrgb`,e.luv=`luv`,e.okhsl=`okhsl`,e.okhsv=`okhsv`,e.oklab=`oklab`,e.oklch=`oklch`,e.p3=`p3`,e.prophoto=`prophoto`,e.rec2020=`rec2020`,e.rgb=`rgb`,e.xyb=`xyb`,e.xyz50=`xyz50`,e.xyz65=`xyz65`,e.yiq=`yiq`})(VL||={});var HL={rgb:{coords:{r:{min:0,max:255,factor:255},g:{min:0,max:255,factor:255},b:{min:0,max:255,factor:255}},colorSpace:`rgb`},hex:{coords:{r:{min:0,max:255,factor:255,radix:16,radixPad:2},g:{min:0,max:255,factor:255,radix:16,radixPad:2},b:{min:0,max:255,factor:255,radix:16,radixPad:2}},conversionFormat:VL.rgb,rawSyntax:`hexString`,colorSpace:`rgb`},hsl:{coords:{h:{min:0,max:360},s:{min:0,max:100,factor:100,digits:1},l:{min:0,max:100,factor:100,digits:1}},colorSpace:`rgb`},hwb:{coords:{h:{min:0,max:360},w:{min:0,max:100,factor:100,digits:1},b:{min:0,max:100,factor:100,digits:1}},colorSpace:`rgb`},lab:{coords:{l:{min:0,max:100,digits:1},a:{min:-128,max:127},b:{min:-128,max:127}},colorSpace:`lab`},lch:{coords:{l:{min:0,max:100,digits:1},c:{min:0,max:230},h:{min:0,max:360}},colorSpace:`lab`},oklab:{coords:{l:{min:0,max:1,digits:3},a:{min:-.5,max:.5,digits:3},b:{min:-.5,max:.5,digits:3}},colorSpace:`oklab`},oklch:{coords:{l:{min:0,max:1,digits:3},c:{min:0,max:.4,digits:3},h:{min:0,max:360,digits:1}},colorSpace:`oklab`}},UL=Ml(HL,e=>e),WL={...UL,name:`name`,hexString:`hexString`},GL=Ml(HL,(e,t)=>{let n=A.isEnumValue(e,VL)&&A.isEnumValue(e,UL)?e:`conversionFormat`in t&&t.conversionFormat&&A.isEnumValue(t.conversionFormat,VL)&&A.isEnumValue(t.conversionFormat,UL)?t.conversionFormat:void 0;return Fc.isTruthy(n,`Invalid conversion format for color format '${e}' ${y(t)}.`),{...t,colorFormat:e,conversionFormat:n,rawSyntax:Ac.isEnumValue(`rawSyntax`in t&&t.rawSyntax?t.rawSyntax:e,WL)}});Yc(Fl(HL),e=>({key:e.colorSpace,value:e.colorSpace}),{useRequired:!0}),Kc(GL).reduce((e,[t,n])=>(Gc(e,n.colorSpace,()=>({}))[t]=n,e),{});function KL(e){return e.startsWith(`rgb`)?WL.rgb:e.startsWith(`hsl`)?WL.hsl:e.startsWith(`hwb`)?WL.hwb:e.startsWith(`oklab`)?WL.oklab:e.startsWith(`oklch`)?WL.oklch:e.startsWith(`lab`)?WL.lab:e.startsWith(`lch`)?WL.lch:e.startsWith(`#`)?WL.hexString:WL.name}var qL={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(let e in qL)Object.freeze(qL[e]);var JL=Object.freeze(qL),YL=Object.keys(JL).reduce((e,t)=>t.length>e.length?t:e),XL=Nl(Ml(JL,(e,t)=>Jc(Object.entries(JL),([e])=>e,(n,[,r])=>n===e?!1:A.deepEquals(r,t))),(e,t)=>!!t.length),ZL=Object.entries(XL).reduce((e,t)=>{let n=[e[0],...e[1]].join(`, `);return[t[0],...t[1]].join(`, `).length>n.length?t:e}).reduce((e,t)=>A.isArray(t)?[...e,...t]:[...e,t],[]),QL=Math.max(YL.length,ZL.length+(ZL.length-1)*2),$L=(e,t)=>{if(typeof e==`number`){if(t===3)return{mode:`rgb`,r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(t===4)return{mode:`rgb`,r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(t===6)return{mode:`rgb`,r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(t===8)return{mode:`rgb`,r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},eR={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tR=e=>$L(eR[e.toLowerCase()],6),nR=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,rR=e=>{let t;return(t=e.match(nR))?$L(parseInt(t[1],16),t[1].length):void 0},iR=`([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)`;`${iR}`;var aR=`${iR}%`;`${iR}`;var oR=`(?:${iR}%|${iR})`,sR=`(?:${iR}%|${iR}|none)`,cR=`(?:${iR}(deg|grad|rad|turn)|${iR})`;`${iR}${iR}`;var lR=`\\s*,\\s*`;RegExp(`^`+sR+`$`);var uR=RegExp(`^rgba?\\(\\s*${iR}${lR}${iR}${lR}${iR}\\s*(?:,\\s*${oR}\\s*)?\\)$`),dR=RegExp(`^rgba?\\(\\s*${aR}${lR}${aR}${lR}${aR}\\s*(?:,\\s*${oR}\\s*)?\\)$`),fR=e=>{let t={mode:`rgb`},n;if(n=e.match(uR))n[1]!==void 0&&(t.r=n[1]/255),n[2]!==void 0&&(t.g=n[2]/255),n[3]!==void 0&&(t.b=n[3]/255);else if(n=e.match(dR))n[1]!==void 0&&(t.r=n[1]/100),n[2]!==void 0&&(t.g=n[2]/100),n[3]!==void 0&&(t.b=n[3]/100);else return;return n[4]===void 0?n[5]!==void 0&&(t.alpha=Math.max(0,Math.min(1,+n[5]))):t.alpha=Math.max(0,Math.min(1,n[4]/100)),t},pR=(e,t)=>e===void 0?void 0:typeof e==`object`?e.mode===void 0?t?{...e,mode:t}:void 0:e:IR(e),mR=(e=`rgb`)=>t=>(t=pR(t,e))===void 0?void 0:t.mode===e?t:hR[t.mode][e]?hR[t.mode][e](t):e===`rgb`?hR[t.mode].rgb(t):hR.rgb[e](hR[t.mode].rgb(t)),hR={},gR={},_R=[],vR={},yR=e=>e,bR=e=>(hR[e.mode]={...hR[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(t=>{hR[t]||(hR[t]={}),hR[t][e.mode]=e.fromMode[t]}),e.ranges||={},e.difference||={},e.channels.forEach(t=>{if(e.ranges[t]===void 0&&(e.ranges[t]=[0,1]),!e.interpolate[t])throw Error(`Missing interpolator for: ${t}`);typeof e.interpolate[t]==`function`&&(e.interpolate[t]={use:e.interpolate[t]}),e.interpolate[t].fixup||(e.interpolate[t].fixup=yR)}),gR[e.mode]=e,(e.parse||[]).forEach(t=>{SR(t,e.mode)}),mR(e.mode)),xR=e=>gR[e],SR=(e,t)=>{if(typeof e==`string`){if(!t)throw Error(`'mode' required when 'parser' is a string`);vR[e]=t}else typeof e==`function`&&_R.indexOf(e)<0&&_R.push(e)},CR=/[^\x00-\x7F]|[a-zA-Z_]/,wR=/[^\x00-\x7F]|[-\w]/,Y={Function:`function`,Ident:`ident`,Number:`number`,Percentage:`percentage`,ParenClose:`)`,None:`none`,Hue:`hue`,Alpha:`alpha`},X=0;function TR(e){let t=e[X],n=e[X+1];return t===`-`||t===`+`?/\d/.test(n)||n===`.`&&/\d/.test(e[X+2]):t===`.`?/\d/.test(n):/\d/.test(t)}function ER(e){if(X>=e.length)return!1;let t=e[X];if(CR.test(t))return!0;if(t===`-`){if(e.length-X<2)return!1;let t=e[X+1];return!!(t===`-`||CR.test(t))}return!1}var DR={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function OR(e){let t=``;if((e[X]===`-`||e[X]===`+`)&&(t+=e[X++]),t+=kR(e),e[X]===`.`&&/\d/.test(e[X+1])&&(t+=e[X++]+kR(e)),(e[X]===`e`||e[X]===`E`)&&((e[X+1]===`-`||e[X+1]===`+`)&&/\d/.test(e[X+2])?t+=e[X++]+e[X++]+kR(e):/\d/.test(e[X+1])&&(t+=e[X++]+kR(e))),ER(e)){let n=AR(e);return n===`deg`||n===`rad`||n===`turn`||n===`grad`?{type:Y.Hue,value:t*DR[n]}:void 0}return e[X]===`%`?(X++,{type:Y.Percentage,value:+t}):{type:Y.Number,value:+t}}function kR(e){let t=``;for(;/\d/.test(e[X]);)t+=e[X++];return t}function AR(e){let t=``;for(;X<e.length&&wR.test(e[X]);)t+=e[X++];return t}function jR(e){let t=AR(e);return e[X]===`(`?(X++,{type:Y.Function,value:t}):t===`none`?{type:Y.None,value:void 0}:{type:Y.Ident,value:t}}function MR(e=``){let t=e.trim(),n=[],r;for(X=0;X<t.length;){if(r=t[X++],r===`
`||r===`	`||r===` `){for(;X<t.length&&(t[X]===`
`||t[X]===`	`||t[X]===` `);)X++;continue}if(r===`,`)return;if(r===`)`){n.push({type:Y.ParenClose});continue}if(r===`+`){if(X--,TR(t)){n.push(OR(t));continue}return}if(r===`-`){if(X--,TR(t)){n.push(OR(t));continue}if(ER(t)){n.push({type:Y.Ident,value:AR(t)});continue}return}if(r===`.`){if(X--,TR(t)){n.push(OR(t));continue}return}if(r===`/`){for(;X<t.length&&(t[X]===`
`||t[X]===`	`||t[X]===` `);)X++;let e;if(TR(t)&&(e=OR(t),e.type!==Y.Hue)){n.push({type:Y.Alpha,value:e});continue}if(ER(t)&&AR(t)===`none`){n.push({type:Y.Alpha,value:{type:Y.None,value:void 0}});continue}return}if(/\d/.test(r)){X--,n.push(OR(t));continue}if(CR.test(r)){X--,n.push(jR(t));continue}return}return n}function NR(e){e._i=0;let t=e[e._i++];if(!t||t.type!==Y.Function||t.value!==`color`||(t=e[e._i++],t.type!==Y.Ident))return;let n=vR[t.value];if(!n)return;let r={mode:n},i=PR(e,!1);if(!i)return;let a=xR(n).channels;for(let e=0,t,n;e<a.length;e++)t=i[e],n=a[e],t.type!==Y.None&&(r[n]=t.type===Y.Number?t.value:t.value/100,n===`alpha`&&(r[n]=Math.max(0,Math.min(1,r[n]))));return r}function PR(e,t){let n=[],r;for(;e._i<e.length;){if(r=e[e._i++],r.type===Y.None||r.type===Y.Number||r.type===Y.Alpha||r.type===Y.Percentage||t&&r.type===Y.Hue){n.push(r);continue}if(r.type===Y.ParenClose){if(e._i<e.length)return;continue}return}if(!(n.length<3||n.length>4)){if(n.length===4){if(n[3].type!==Y.Alpha)return;n[3]=n[3].value}return n.length===3&&n.push({type:Y.None,value:void 0}),n.every(e=>e.type!==Y.Alpha)?n:void 0}}function FR(e,t){e._i=0;let n=e[e._i++];if(!n||n.type!==Y.Function)return;let r=PR(e,t);if(r)return r.unshift(n.value),r}var IR=e=>{if(typeof e!=`string`)return;let t=MR(e),n=t?FR(t,!0):void 0,r,i=0,a=_R.length;for(;i<a;)if((r=_R[i++](e,n))!==void 0)return r;return t?NR(t):void 0};function LR(e,t){if(!t||t[0]!==`rgb`&&t[0]!==`rgba`)return;let n={mode:`rgb`},[,r,i,a,o]=t;if(!(r.type===Y.Hue||i.type===Y.Hue||a.type===Y.Hue))return r.type!==Y.None&&(n.r=r.type===Y.Number?r.value/255:r.value/100),i.type!==Y.None&&(n.g=i.type===Y.Number?i.value/255:i.value/100),a.type!==Y.None&&(n.b=a.type===Y.Number?a.value/255:a.value/100),o.type!==Y.None&&(n.alpha=Math.min(1,Math.max(0,o.type===Y.Number?o.value:o.value/100))),n}var RR=e=>e===`transparent`?{mode:`rgb`,r:0,g:0,b:0,alpha:0}:void 0,zR=(e,t,n)=>e+n*(t-e),BR=e=>{let t=[];for(let n=0;n<e.length-1;n++){let r=e[n],i=e[n+1];r===void 0&&i===void 0?t.push(void 0):r!==void 0&&i!==void 0?t.push([r,i]):t.push(r===void 0?[i,i]:[r,r])}return t},Z=(e=>t=>{let n=BR(t);return t=>{let r=t*n.length,i=t>=1?n.length-1:Math.max(Math.floor(r),0),a=n[i];return a===void 0?void 0:e(a[0],a[1],r-i)}})(zR),VR=e=>{let t=!1,n=e.map(e=>e===void 0?1:(t=!0,e));return t?n:e},HR={mode:`rgb`,channels:[`r`,`g`,`b`,`alpha`],parse:[LR,rR,fR,tR,RR,`srgb`],serialize:`srgb`,interpolate:{r:Z,g:Z,b:Z,alpha:{use:Z,fixup:VR}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},UR=(e=0)=>Math.abs(e)**(563/256)*Math.sign(e),WR=e=>{let t=UR(e.r),n=UR(e.g),r=UR(e.b),i={mode:`xyz65`,x:.5766690429101305*t+.1855582379065463*n+.1882286462349947*r,y:.297344975250536*t+.6273635662554661*n+.0752914584939979*r,z:.0270313613864123*t+.0706888525358272*n+.9913375368376386*r};return e.alpha!==void 0&&(i.alpha=e.alpha),i},GR=e=>Math.abs(e)**(256/563)*Math.sign(e),KR=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`a98`,r:GR(e*2.0415879038107465-t*.5650069742788597-.3447313507783297*n),g:GR(e*-.9692436362808798+t*1.8759675015077206+.0415550574071756*n),b:GR(e*.0134442806320312-t*.1183623922310184+1.0151749943912058*n)};return r!==void 0&&(i.alpha=r),i},qR=(e=0)=>{let t=Math.abs(e);return t<=.04045?e/12.92:(Math.sign(e)||1)*((t+.055)/1.055)**2.4},JR=({r:e,g:t,b:n,alpha:r})=>{let i={mode:`lrgb`,r:qR(e),g:qR(t),b:qR(n)};return r!==void 0&&(i.alpha=r),i},YR=e=>{let{r:t,g:n,b:r,alpha:i}=JR(e),a={mode:`xyz65`,x:.4123907992659593*t+.357584339383878*n+.1804807884018343*r,y:.2126390058715102*t+.715168678767756*n+.0721923153607337*r,z:.0193308187155918*t+.119194779794626*n+.9505321522496607*r};return i!==void 0&&(a.alpha=i),a},XR=(e=0)=>{let t=Math.abs(e);return t>.0031308?(Math.sign(e)||1)*(1.055*t**(1/2.4)-.055):e*12.92},ZR=({r:e,g:t,b:n,alpha:r},i=`rgb`)=>{let a={mode:i,r:XR(e),g:XR(t),b:XR(n)};return r!==void 0&&(a.alpha=r),a},QR=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=ZR({r:e*3.2409699419045226-t*1.537383177570094-.4986107602930034*n,g:e*-.9692436362808796+t*1.8759675015077204+.0415550574071756*n,b:e*.0556300796969936-t*.2039769588889765+1.0569715142428784*n});return r!==void 0&&(i.alpha=r),i},$R={...HR,mode:`a98`,parse:[`a98-rgb`],serialize:`a98-rgb`,fromMode:{rgb:e=>KR(YR(e)),xyz65:KR},toMode:{rgb:e=>QR(WR(e)),xyz65:WR}},ez=e=>(e%=360)<0?e+360:e,tz=(e,t)=>e.map((n,r,i)=>{if(n===void 0)return n;let a=ez(n);return r===0||e[r-1]===void 0?a:t(a-ez(i[r-1]))}).reduce((e,t)=>!e.length||t===void 0||e[e.length-1]===void 0?(e.push(t),e):(e.push(t+e[e.length-1]),e),[]),nz=e=>tz(e,e=>Math.abs(e)<=180?e:e-360*Math.sign(e)),rz=[-.14861,1.78277,-.29227,-.90649,1.97294,0],iz=Math.PI/180,az=180/Math.PI,oz=rz[3]*rz[4],sz=rz[1]*rz[4],cz=rz[1]*rz[2]-rz[0]*rz[3],lz=({r:e,g:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(cz*n+e*oz-t*sz)/(cz+oz-sz),a=n-i,o=(rz[4]*(t-i)-rz[2]*a)/rz[3],s={mode:`cubehelix`,l:i,s:i===0||i===1?void 0:Math.sqrt(a*a+o*o)/(rz[4]*i*(1-i))};return s.s&&(s.h=Math.atan2(o,a)*az-120),r!==void 0&&(s.alpha=r),s},uz=({h:e,s:t,l:n,alpha:r})=>{let i={mode:`rgb`};e=(e===void 0?0:e+120)*iz,n===void 0&&(n=0);let a=t===void 0?0:t*n*(1-n),o=Math.cos(e),s=Math.sin(e);return i.r=n+a*(rz[0]*o+rz[1]*s),i.g=n+a*(rz[2]*o+rz[3]*s),i.b=n+a*(rz[4]*o+rz[5]*s),r!==void 0&&(i.alpha=r),i},dz=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.s||!t.s)return 0;let n=ez(e.h),r=ez(t.h),i=Math.sin((r-n+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*t.s)*i},fz=(e,t)=>{if(e.h===void 0||t.h===void 0)return 0;let n=ez(e.h),r=ez(t.h);return Math.abs(r-n)>180?n-(r-360*Math.sign(r-n)):r-n},pz=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.c||!t.c)return 0;let n=ez(e.h),r=ez(t.h),i=Math.sin((r-n+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*t.c)*i},mz=(e=`rgb`,t=[1,1,1,0])=>{let n=xR(e),r=n.channels,i=n.difference,a=mR(e);return(e,n)=>{let o=a(e),s=a(n);return Math.sqrt(r.reduce((e,n,r)=>{let a=i[n]?i[n](o,s):o[n]-s[n];return e+(t[r]||0)*(isNaN(a)?0:a)**2},0))}},hz=e=>{let t=e.reduce((e,t)=>{if(t!==void 0){let n=t*Math.PI/180;e.sin+=Math.sin(n),e.cos+=Math.cos(n)}return e},{sin:0,cos:0}),n=Math.atan2(t.sin,t.cos)*180/Math.PI;return n<0?360+n:n},gz={mode:`cubehelix`,channels:[`h`,`s`,`l`,`alpha`],parse:[`--cubehelix`],serialize:`--cubehelix`,ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:lz},toMode:{rgb:uz},interpolate:{h:{use:Z,fixup:nz},s:Z,l:Z,alpha:{use:Z,fixup:VR}},difference:{h:dz},average:{h:hz}},_z=({l:e,a:t,b:n,alpha:r},i=`lch`)=>{t===void 0&&(t=0),n===void 0&&(n=0);let a=Math.sqrt(t*t+n*n),o={mode:i,l:e,c:a};return a&&(o.h=ez(Math.atan2(n,t)*180/Math.PI)),r!==void 0&&(o.alpha=r),o},vz=({l:e,c:t,h:n,alpha:r},i=`lab`)=>{n===void 0&&(n=0);let a={mode:i,l:e,a:t?t*Math.cos(n/180*Math.PI):0,b:t?t*Math.sin(n/180*Math.PI):0};return r!==void 0&&(a.alpha=r),a},yz=29**3/3**3,bz=6**3/29**3,xz={X:.3457/.3585,Y:1,Z:.2958/.3585},Sz={X:.3127/.329,Y:1,Z:.3583/.329},Cz=e=>e**3>bz?e**3:(116*e-16)/yz,wz=({l:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(e+16)/116,a=t/500+i,o=i-n/200,s={mode:`xyz65`,x:Cz(a)*Sz.X,y:Cz(i)*Sz.Y,z:Cz(o)*Sz.Z};return r!==void 0&&(s.alpha=r),s},Tz=e=>QR(wz(e)),Ez=e=>e>bz?Math.cbrt(e):(yz*e+16)/116,Dz=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Ez(e/Sz.X),a=Ez(t/Sz.Y),o=Ez(n/Sz.Z),s={mode:`lab65`,l:116*a-16,a:500*(i-a),b:200*(a-o)};return r!==void 0&&(s.alpha=r),s},Oz=e=>{let t=Dz(YR(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},kz=26/180*Math.PI,Az=Math.cos(kz),jz=Math.sin(kz),Mz=100/Math.log(139/100),Nz=({l:e,c:t,h:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`lab65`,l:(Math.exp(e*1/Mz)-1)/.0039},a=(Math.exp(.0435*t*1*1)-1)/.075,o=a*Math.cos(n/180*Math.PI-kz),s=a*Math.sin(n/180*Math.PI-kz);return i.a=o*Az-s/.83*jz,i.b=o*jz+s/.83*Az,r!==void 0&&(i.alpha=r),i},Pz=({l:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=t*Az+n*jz,a=.83*(n*Az-t*jz),o=Math.sqrt(i*i+a*a),s={mode:`dlch`,l:Mz/1*Math.log(1+.0039*e),c:Math.log(1+.075*o)/(.0435*1*1)};return s.c&&(s.h=ez((Math.atan2(a,i)+kz)/Math.PI*180)),r!==void 0&&(s.alpha=r),s},Fz=e=>Nz(_z(e,`dlch`)),Iz=e=>vz(Pz(e),`dlab`),Lz={mode:`dlab`,parse:[`--din99o-lab`],serialize:`--din99o-lab`,toMode:{lab65:Fz,rgb:e=>Tz(Fz(e))},fromMode:{lab65:Iz,rgb:e=>Iz(Oz(e))},channels:[`l`,`a`,`b`,`alpha`],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:Z,a:Z,b:Z,alpha:{use:Z,fixup:VR}}},Rz={mode:`dlch`,parse:[`--din99o-lch`],serialize:`--din99o-lch`,toMode:{lab65:Nz,dlab:e=>vz(e,`dlab`),rgb:e=>Tz(Nz(e))},fromMode:{lab65:Pz,dlab:e=>_z(e,`dlch`),rgb:e=>Pz(Oz(e))},channels:[`l`,`c`,`h`,`alpha`],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:Z,c:Z,h:{use:Z,fixup:nz},alpha:{use:Z,fixup:VR}},difference:{h:pz},average:{h:hz}};function zz({h:e,s:t,i:n,alpha:r}){e=ez(e===void 0?0:e),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.abs(e/60%2-1),a;switch(Math.floor(e/60)){case 0:a={r:n*(1+t*(3/(2-i)-1)),g:n*(1+t*(3*(1-i)/(2-i)-1)),b:n*(1-t)};break;case 1:a={r:n*(1+t*(3*(1-i)/(2-i)-1)),g:n*(1+t*(3/(2-i)-1)),b:n*(1-t)};break;case 2:a={r:n*(1-t),g:n*(1+t*(3/(2-i)-1)),b:n*(1+t*(3*(1-i)/(2-i)-1))};break;case 3:a={r:n*(1-t),g:n*(1+t*(3*(1-i)/(2-i)-1)),b:n*(1+t*(3/(2-i)-1))};break;case 4:a={r:n*(1+t*(3*(1-i)/(2-i)-1)),g:n*(1-t),b:n*(1+t*(3/(2-i)-1))};break;case 5:a={r:n*(1+t*(3/(2-i)-1)),g:n*(1-t),b:n*(1+t*(3*(1-i)/(2-i)-1))};break;default:a={r:n*(1-t),g:n*(1-t),b:n*(1-t)}}return a.mode=`rgb`,r!==void 0&&(a.alpha=r),a}function Bz({r:e,g:t,b:n,alpha:r}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.max(e,t,n),a=Math.min(e,t,n),o={mode:`hsi`,s:e+t+n===0?0:1-3*a/(e+t+n),i:(e+t+n)/3};return i-a!==0&&(o.h=(i===e?(t-n)/(i-a)+(t<n)*6:i===t?(n-e)/(i-a)+2:(e-t)/(i-a)+4)*60),r!==void 0&&(o.alpha=r),o}var Vz={mode:`hsi`,toMode:{rgb:zz},parse:[`--hsi`],serialize:`--hsi`,fromMode:{rgb:Bz},channels:[`h`,`s`,`i`,`alpha`],ranges:{h:[0,360]},gamut:`rgb`,interpolate:{h:{use:Z,fixup:nz},s:Z,i:Z,alpha:{use:Z,fixup:VR}},difference:{h:dz},average:{h:hz}};function Hz({h:e,s:t,l:n,alpha:r}){e=ez(e===void 0?0:e),t===void 0&&(t=0),n===void 0&&(n=0);let i=n+t*(n<.5?n:1-n),a=i-(i-n)*2*Math.abs(e/60%2-1),o;switch(Math.floor(e/60)){case 0:o={r:i,g:a,b:2*n-i};break;case 1:o={r:a,g:i,b:2*n-i};break;case 2:o={r:2*n-i,g:i,b:a};break;case 3:o={r:2*n-i,g:a,b:i};break;case 4:o={r:a,g:2*n-i,b:i};break;case 5:o={r:i,g:2*n-i,b:a};break;default:o={r:2*n-i,g:2*n-i,b:2*n-i}}return o.mode=`rgb`,r!==void 0&&(o.alpha=r),o}function Uz({r:e,g:t,b:n,alpha:r}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.max(e,t,n),a=Math.min(e,t,n),o={mode:`hsl`,s:i===a?0:(i-a)/(1-Math.abs(i+a-1)),l:.5*(i+a)};return i-a!==0&&(o.h=(i===e?(t-n)/(i-a)+(t<n)*6:i===t?(n-e)/(i-a)+2:(e-t)/(i-a)+4)*60),r!==void 0&&(o.alpha=r),o}var Wz=(e,t)=>{switch(t){case`deg`:return+e;case`rad`:return e/Math.PI*180;case`grad`:return e/10*9;case`turn`:return e*360}},Gz=RegExp(`^hsla?\\(\\s*${cR}${lR}${aR}${lR}${aR}\\s*(?:,\\s*${oR}\\s*)?\\)$`),Kz=e=>{let t=e.match(Gz);if(!t)return;let n={mode:`hsl`};return t[3]===void 0?t[1]!==void 0&&t[2]!==void 0&&(n.h=Wz(t[1],t[2])):n.h=+t[3],t[4]!==void 0&&(n.s=Math.min(Math.max(0,t[4]/100),1)),t[5]!==void 0&&(n.l=Math.min(Math.max(0,t[5]/100),1)),t[6]===void 0?t[7]!==void 0&&(n.alpha=Math.max(0,Math.min(1,+t[7]))):n.alpha=Math.max(0,Math.min(1,t[6]/100)),n};function qz(e,t){if(!t||t[0]!==`hsl`&&t[0]!==`hsla`)return;let n={mode:`hsl`},[,r,i,a,o]=t;if(r.type!==Y.None){if(r.type===Y.Percentage)return;n.h=r.value}if(i.type!==Y.None){if(i.type===Y.Hue)return;n.s=i.value/100}if(a.type!==Y.None){if(a.type===Y.Hue)return;n.l=a.value/100}return o.type!==Y.None&&(n.alpha=Math.min(1,Math.max(0,o.type===Y.Number?o.value:o.value/100))),n}var Jz={mode:`hsl`,toMode:{rgb:Hz},fromMode:{rgb:Uz},channels:[`h`,`s`,`l`,`alpha`],ranges:{h:[0,360]},gamut:`rgb`,parse:[qz,Kz],serialize:e=>`hsl(${e.h===void 0?`none`:e.h} ${e.s===void 0?`none`:e.s*100+`%`} ${e.l===void 0?`none`:e.l*100+`%`}${e.alpha<1?` / ${e.alpha}`:``})`,interpolate:{h:{use:Z,fixup:nz},s:Z,l:Z,alpha:{use:Z,fixup:VR}},difference:{h:dz},average:{h:hz}};function Yz({h:e,s:t,v:n,alpha:r}){e=ez(e===void 0?0:e),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.abs(e/60%2-1),a;switch(Math.floor(e/60)){case 0:a={r:n,g:n*(1-t*i),b:n*(1-t)};break;case 1:a={r:n*(1-t*i),g:n,b:n*(1-t)};break;case 2:a={r:n*(1-t),g:n,b:n*(1-t*i)};break;case 3:a={r:n*(1-t),g:n*(1-t*i),b:n};break;case 4:a={r:n*(1-t*i),g:n*(1-t),b:n};break;case 5:a={r:n,g:n*(1-t),b:n*(1-t*i)};break;default:a={r:n*(1-t),g:n*(1-t),b:n*(1-t)}}return a.mode=`rgb`,r!==void 0&&(a.alpha=r),a}function Xz({r:e,g:t,b:n,alpha:r}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.max(e,t,n),a=Math.min(e,t,n),o={mode:`hsv`,s:i===0?0:1-a/i,v:i};return i-a!==0&&(o.h=(i===e?(t-n)/(i-a)+(t<n)*6:i===t?(n-e)/(i-a)+2:(e-t)/(i-a)+4)*60),r!==void 0&&(o.alpha=r),o}var Zz={mode:`hsv`,toMode:{rgb:Yz},parse:[`--hsv`],serialize:`--hsv`,fromMode:{rgb:Xz},channels:[`h`,`s`,`v`,`alpha`],ranges:{h:[0,360]},gamut:`rgb`,interpolate:{h:{use:Z,fixup:nz},s:Z,v:Z,alpha:{use:Z,fixup:VR}},difference:{h:dz},average:{h:hz}};function Qz({h:e,w:t,b:n,alpha:r}){if(t===void 0&&(t=0),n===void 0&&(n=0),t+n>1){let e=t+n;t/=e,n/=e}return Yz({h:e,s:n===1?1:1-t/(1-n),v:1-n,alpha:r})}function $z(e){let t=Xz(e);if(t===void 0)return;let n=t.s===void 0?0:t.s,r=t.v===void 0?0:t.v,i={mode:`hwb`,w:(1-n)*r,b:1-r};return t.h!==void 0&&(i.h=t.h),t.alpha!==void 0&&(i.alpha=t.alpha),i}function eB(e,t){if(!t||t[0]!==`hwb`)return;let n={mode:`hwb`},[,r,i,a,o]=t;if(r.type!==Y.None){if(r.type===Y.Percentage)return;n.h=r.value}if(i.type!==Y.None){if(i.type===Y.Hue)return;n.w=i.value/100}if(a.type!==Y.None){if(a.type===Y.Hue)return;n.b=a.value/100}return o.type!==Y.None&&(n.alpha=Math.min(1,Math.max(0,o.type===Y.Number?o.value:o.value/100))),n}var tB={mode:`hwb`,toMode:{rgb:Qz},fromMode:{rgb:$z},channels:[`h`,`w`,`b`,`alpha`],ranges:{h:[0,360]},gamut:`rgb`,parse:[eB],serialize:e=>`hwb(${e.h===void 0?`none`:e.h} ${e.w===void 0?`none`:e.w*100+`%`} ${e.b===void 0?`none`:e.b*100+`%`}${e.alpha<1?` / ${e.alpha}`:``})`,interpolate:{h:{use:Z,fixup:nz},w:Z,b:Z,alpha:{use:Z,fixup:VR}},difference:{h:fz},average:{h:hz}},nB=.1593017578125,rB=78.84375,iB=.8359375,aB=18.8515625,oB=18.6875;function sB(e){if(e<0)return 0;let t=e**(1/rB);return 1e4*(Math.max(0,t-iB)/(aB-oB*t))**(1/nB)}function cB(e){if(e<0)return 0;let t=(e/1e4)**nB;return((iB+aB*t)/(1+oB*t))**+rB}var lB=e=>Math.max(e/203,0),uB=({i:e,t,p:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=sB(e+.008609037037932761*t+.11102962500302593*n),a=sB(e-.00860903703793275*t-.11102962500302599*n),o=sB(e+.5600313357106791*t-.32062717498731885*n),s={mode:`xyz65`,x:lB(2.070152218389422*i-1.3263473389671556*a+.2066510476294051*o),y:lB(.3647385209748074*i+.680566024947227*a-.0453045459220346*o),z:lB(-.049747207535812*i-.0492609666966138*a+1.1880659249923042*o)};return r!==void 0&&(s.alpha=r),s},dB=(e=0)=>Math.max(e*203,0),fB=({x:e,y:t,z:n,alpha:r})=>{let i=dB(e),a=dB(t),o=dB(n),s=cB(.3592832590121217*i+.6976051147779502*a-.0358915932320289*o),c=cB(-.1920808463704995*i+1.1004767970374323*a+.0753748658519118*o),l=cB(.0070797844607477*i+.0748396662186366*a+.8433265453898765*o),u={mode:`itp`,i:.5*s+.5*c,t:1.61376953125*s-3.323486328125*c+1.709716796875*l,p:4.378173828125*s-4.24560546875*c-.132568359375*l};return r!==void 0&&(u.alpha=r),u},pB={mode:`itp`,channels:[`i`,`t`,`p`,`alpha`],parse:[`--ictcp`],serialize:`--ictcp`,toMode:{xyz65:uB,rgb:e=>QR(uB(e))},fromMode:{xyz65:fB,rgb:e=>fB(YR(e))},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:Z,t:Z,p:Z,alpha:{use:Z,fixup:VR}}},mB=134.03437499999998,hB=16295499532821565e-27,gB=e=>{if(e<0)return 0;let t=(e/1e4)**nB;return((iB+aB*t)/(1+oB*t))**+mB},_B=(e=0)=>Math.max(e*203,0),vB=({x:e,y:t,z:n,alpha:r})=>{e=_B(e),t=_B(t),n=_B(n);let i=1.15*e-.15*n,a=.66*t+.34*e,o=gB(.41478972*i+.579999*a+.014648*n),s=gB(-.20151*i+1.120649*a+.0531008*n),c=gB(-.0166008*i+.2648*a+.6684799*n),l=(o+s)/2,u={mode:`jab`,j:.44*l/(1-.56*l)-hB,a:3.524*o-4.066708*s+.542708*c,b:.199076*o+1.096799*s-1.295875*c};return r!==void 0&&(u.alpha=r),u},yB=134.03437499999998,bB=16295499532821565e-27,xB=e=>{if(e<0)return 0;let t=e**(1/yB);return 1e4*((iB-t)/(oB*t-aB))**(1/nB)},SB=e=>e/203,CB=({j:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(e+bB)/(.44+.56*(e+bB)),a=xB(i+.13860504*t+.058047316*n),o=xB(i-.13860504*t-.058047316*n),s=xB(i-.096019242*t-.8118919*n),c={mode:`xyz65`,x:SB(1.661373024652174*a-.914523081304348*o+.23136208173913045*s),y:SB(-.3250758611844533*a+1.571847026732543*o-.21825383453227928*s),z:SB(-.090982811*a-.31272829*o+1.5227666*s)};return r!==void 0&&(c.alpha=r),c},wB=e=>{let t=vB(YR(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},TB=e=>QR(CB(e)),EB={mode:`jab`,channels:[`j`,`a`,`b`,`alpha`],parse:[`--jzazbz`],serialize:`--jzazbz`,fromMode:{rgb:wB,xyz65:vB},toMode:{rgb:TB,xyz65:CB},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:Z,a:Z,b:Z,alpha:{use:Z,fixup:VR}}},DB=({j:e,a:t,b:n,alpha:r})=>{t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.sqrt(t*t+n*n),a={mode:`jch`,j:e,c:i};return i&&(a.h=ez(Math.atan2(n,t)*180/Math.PI)),r!==void 0&&(a.alpha=r),a},OB=({j:e,c:t,h:n,alpha:r})=>{n===void 0&&(n=0);let i={mode:`jab`,j:e,a:t?t*Math.cos(n/180*Math.PI):0,b:t?t*Math.sin(n/180*Math.PI):0};return r!==void 0&&(i.alpha=r),i},kB={mode:`jch`,parse:[`--jzczhz`],serialize:`--jzczhz`,toMode:{jab:OB,rgb:e=>TB(OB(e))},fromMode:{rgb:e=>DB(wB(e)),jab:DB},channels:[`j`,`c`,`h`,`alpha`],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:Z,fixup:nz},c:Z,j:Z,alpha:{use:Z,fixup:VR}},difference:{h:pz},average:{h:hz}},AB=29**3/3**3,jB=6**3/29**3,MB=e=>e**3>jB?e**3:(116*e-16)/AB,NB=({l:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(e+16)/116,a=t/500+i,o=i-n/200,s={mode:`xyz50`,x:MB(a)*xz.X,y:MB(i)*xz.Y,z:MB(o)*xz.Z};return r!==void 0&&(s.alpha=r),s},PB=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=ZR({r:e*3.1341359569958707-t*1.6173863321612538-.4906619460083532*n,g:e*-.978795502912089+t*1.916254567259524+.03344273116131949*n,b:e*.07195537988411677-t*.2289768264158322+1.405386058324125*n});return r!==void 0&&(i.alpha=r),i},FB=e=>PB(NB(e)),IB=e=>{let{r:t,g:n,b:r,alpha:i}=JR(e),a={mode:`xyz50`,x:.436065742824811*t+.3851514688337912*n+.14307845442264197*r,y:.22249319175623702*t+.7168870538238823*n+.06061979053616537*r,z:.013923904500943465*t+.09708128566574634*n+.7140993584005155*r};return i!==void 0&&(a.alpha=i),a},LB=e=>e>jB?Math.cbrt(e):(AB*e+16)/116,RB=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=LB(e/xz.X),a=LB(t/xz.Y),o=LB(n/xz.Z),s={mode:`lab`,l:116*a-16,a:500*(i-a),b:200*(a-o)};return r!==void 0&&(s.alpha=r),s},zB=e=>{let t=RB(IB(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t};function BB(e,t){if(!t||t[0]!==`lab`)return;let n={mode:`lab`},[,r,i,a,o]=t;if(!(r.type===Y.Hue||i.type===Y.Hue||a.type===Y.Hue))return r.type!==Y.None&&(n.l=Math.min(Math.max(0,r.value),100)),i.type!==Y.None&&(n.a=i.type===Y.Number?i.value:i.value*125/100),a.type!==Y.None&&(n.b=a.type===Y.Number?a.value:a.value*125/100),o.type!==Y.None&&(n.alpha=Math.min(1,Math.max(0,o.type===Y.Number?o.value:o.value/100))),n}var VB={mode:`lab`,toMode:{xyz50:NB,rgb:FB},fromMode:{xyz50:RB,rgb:zB},channels:[`l`,`a`,`b`,`alpha`],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[BB],serialize:e=>`lab(${e.l===void 0?`none`:e.l} ${e.a===void 0?`none`:e.a} ${e.b===void 0?`none`:e.b}${e.alpha<1?` / ${e.alpha}`:``})`,interpolate:{l:Z,a:Z,b:Z,alpha:{use:Z,fixup:VR}}},HB={...VB,mode:`lab65`,parse:[`--lab-d65`],serialize:`--lab-d65`,toMode:{xyz65:wz,rgb:Tz},fromMode:{xyz65:Dz,rgb:Oz},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};function UB(e,t){if(!t||t[0]!==`lch`)return;let n={mode:`lch`},[,r,i,a,o]=t;if(r.type!==Y.None){if(r.type===Y.Hue)return;n.l=Math.min(Math.max(0,r.value),100)}if(i.type!==Y.None&&(n.c=Math.max(0,i.type===Y.Number?i.value:i.value*150/100)),a.type!==Y.None){if(a.type===Y.Percentage)return;n.h=a.value}return o.type!==Y.None&&(n.alpha=Math.min(1,Math.max(0,o.type===Y.Number?o.value:o.value/100))),n}var WB={mode:`lch`,toMode:{lab:vz,rgb:e=>FB(vz(e))},fromMode:{rgb:e=>_z(zB(e)),lab:_z},channels:[`l`,`c`,`h`,`alpha`],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[UB],serialize:e=>`lch(${e.l===void 0?`none`:e.l} ${e.c===void 0?`none`:e.c} ${e.h===void 0?`none`:e.h}${e.alpha<1?` / ${e.alpha}`:``})`,interpolate:{h:{use:Z,fixup:nz},c:Z,l:Z,alpha:{use:Z,fixup:VR}},difference:{h:pz},average:{h:hz}},GB={...WB,mode:`lch65`,parse:[`--lch-d65`],serialize:`--lch-d65`,toMode:{lab65:e=>vz(e,`lab65`),rgb:e=>Tz(vz(e,`lab65`))},fromMode:{rgb:e=>_z(Oz(e),`lch65`),lab65:e=>_z(e,`lch65`)},ranges:{l:[0,100],c:[0,150],h:[0,360]}},KB=({l:e,u:t,v:n,alpha:r})=>{t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.sqrt(t*t+n*n),a={mode:`lchuv`,l:e,c:i};return i&&(a.h=ez(Math.atan2(n,t)*180/Math.PI)),r!==void 0&&(a.alpha=r),a},qB=({l:e,c:t,h:n,alpha:r})=>{n===void 0&&(n=0);let i={mode:`luv`,l:e,u:t?t*Math.cos(n/180*Math.PI):0,v:t?t*Math.sin(n/180*Math.PI):0};return r!==void 0&&(i.alpha=r),i},JB=(e,t,n)=>4*e/(e+15*t+3*n),YB=(e,t,n)=>9*t/(e+15*t+3*n),XB=JB(xz.X,xz.Y,xz.Z),ZB=YB(xz.X,xz.Y,xz.Z),QB=e=>e<=jB?AB*e:116*Math.cbrt(e)-16,$B=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=QB(t/xz.Y),a=JB(e,t,n),o=YB(e,t,n);!isFinite(a)||!isFinite(o)?i=a=o=0:(a=13*i*(a-XB),o=13*i*(o-ZB));let s={mode:`luv`,l:i,u:a,v:o};return r!==void 0&&(s.alpha=r),s},eV=(e,t,n)=>4*e/(e+15*t+3*n),tV=(e,t,n)=>9*t/(e+15*t+3*n),nV=eV(xz.X,xz.Y,xz.Z),rV=tV(xz.X,xz.Y,xz.Z),iV=({l:e,u:t,v:n,alpha:r})=>{if(e===void 0&&(e=0),e===0)return{mode:`xyz50`,x:0,y:0,z:0};t===void 0&&(t=0),n===void 0&&(n=0);let i=t/(13*e)+nV,a=n/(13*e)+rV,o=xz.Y*(e<=8?e/AB:((e+16)/116)**3),s={mode:`xyz50`,x:9*i*o/(4*a),y:o,z:o*(12-3*i-20*a)/(4*a)};return r!==void 0&&(s.alpha=r),s},aV={mode:`lchuv`,toMode:{luv:qB,rgb:e=>PB(iV(qB(e)))},fromMode:{rgb:e=>KB($B(IB(e))),luv:KB},channels:[`l`,`c`,`h`,`alpha`],parse:[`--lchuv`],serialize:`--lchuv`,ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:Z,fixup:nz},c:Z,l:Z,alpha:{use:Z,fixup:VR}},difference:{h:pz},average:{h:hz}},oV={...HR,mode:`lrgb`,toMode:{rgb:ZR},fromMode:{rgb:JR},parse:[`srgb-linear`],serialize:`srgb-linear`},sV={mode:`luv`,toMode:{xyz50:iV,rgb:e=>PB(iV(e))},fromMode:{xyz50:$B,rgb:e=>$B(IB(e))},channels:[`l`,`u`,`v`,`alpha`],parse:[`--luv`],serialize:`--luv`,ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:Z,u:Z,v:Z,alpha:{use:Z,fixup:VR}}},cV=({r:e,g:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.cbrt(.412221469470763*e+.5363325372617348*t+.0514459932675022*n),a=Math.cbrt(.2119034958178252*e+.6806995506452344*t+.1073969535369406*n),o=Math.cbrt(.0883024591900564*e+.2817188391361215*t+.6299787016738222*n),s={mode:`oklab`,l:.210454268309314*i+.7936177747023054*a-.0040720430116193*o,a:1.9779985324311684*i-2.42859224204858*a+.450593709617411*o,b:.0259040424655478*i+.7827717124575296*a-.8086757549230774*o};return r!==void 0&&(s.alpha=r),s},lV=e=>{let t=cV(JR(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},uV=({l:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(e+.3963377773761749*t+.2158037573099136*n)**3,a=(e-.1055613458156586*t-.0638541728258133*n)**3,o=(e-.0894841775298119*t-1.2914855480194092*n)**3,s={mode:`lrgb`,r:4.076741636075957*i-3.3077115392580616*a+.2309699031821044*o,g:-1.2684379732850317*i+2.6097573492876887*a-.3413193760026573*o,b:-.0041960761386756*i-.7034186179359362*a+1.7076146940746117*o};return r!==void 0&&(s.alpha=r),s},dV=e=>ZR(uV(e));function fV(e){let t=.206,n=.03,r=(1+t)/(1+n);return .5*(r*e-t+Math.sqrt((r*e-t)*(r*e-t)+4*n*r*e))}function pV(e){let t=.206,n=.03;return(1+t)/(1+n),(e*e+t*e)/(1.170873786407767*(e+n))}function mV(e,t){let n,r,i,a,o,s,c,l;-1.88170328*e-.80936493*t>1?(n=1.19086277,r=1.76576728,i=.59662641,a=.75515197,o=.56771245,s=4.0767416621,c=-3.3077115913,l=.2309699292):1.81444104*e-1.19445276*t>1?(n=.73956515,r=-.45954404,i=.08285427,a=.1254107,o=.14503204,s=-1.2684380046,c=2.6097574011,l=-.3413193965):(n=1.35733652,r=-.00915799,i=-1.1513021,a=-.50559606,o=.00692167,s=-.0041960863,c=-.7034186147,l=1.707614701);let u=n+r*e+i*t+a*e*e+o*e*t,d=.3963377774*e+.2158037573*t,f=-.1055613458*e-.0638541728*t,p=-.0894841775*e-1.291485548*t;{let e=1+u*d,t=1+u*f,n=1+u*p,r=e*e*e,i=t*t*t,a=n*n*n,o=3*d*e*e,m=3*f*t*t,h=3*p*n*n,g=6*d*d*e,ee=6*f*f*t,_=6*p*p*n,te=s*r+c*i+l*a,ne=s*o+c*m+l*h,re=s*g+c*ee+l*_;u-=te*ne/(ne*ne-.5*te*re)}return u}function hV(e,t){let n=mV(e,t),r=uV({l:1,a:n*e,b:n*t}),i=Math.cbrt(1/Math.max(r.r,r.g,r.b));return[i,i*n]}function gV(e,t,n,r,i,a=null){a||=hV(e,t);let o;if((n-i)*a[1]-(a[0]-i)*r<=0)o=a[1]*i/(r*a[0]+a[1]*(i-n));else{o=a[1]*(i-1)/(r*(a[0]-1)+a[1]*(i-n));{let a=n-i,s=r,c=.3963377774*e+.2158037573*t,l=-.1055613458*e-.0638541728*t,u=-.0894841775*e-1.291485548*t,d=a+s*c,f=a+s*l,p=a+s*u;{let e=i*(1-o)+o*n,t=o*r,a=e+t*c,s=e+t*l,m=e+t*u,h=a*a*a,g=s*s*s,ee=m*m*m,_=3*d*a*a,te=3*f*s*s,ne=3*p*m*m,re=6*d*d*a,ie=6*f*f*s,ae=6*p*p*m,oe=4.0767416621*h-3.3077115913*g+.2309699292*ee-1,se=4.0767416621*_-3.3077115913*te+.2309699292*ne,ce=4.0767416621*re-3.3077115913*ie+.2309699292*ae,le=se/(se*se-.5*oe*ce),ue=-oe*le,de=-1.2684380046*h+2.6097574011*g-.3413193965*ee-1,fe=-1.2684380046*_+2.6097574011*te-.3413193965*ne,pe=-1.2684380046*re+2.6097574011*ie-.3413193965*ae,me=fe/(fe*fe-.5*de*pe),he=-de*me,ge=-.0041960863*h-.7034186147*g+1.707614701*ee-1,_e=-.0041960863*_-.7034186147*te+1.707614701*ne,v=-.0041960863*re-.7034186147*ie+1.707614701*ae,y=_e/(_e*_e-.5*ge*v),ve=-ge*y;ue=le>=0?ue:1e6,he=me>=0?he:1e6,ve=y>=0?ve:1e6,o+=Math.min(ue,Math.min(he,ve))}}}return o}function _V(e,t,n=null){n||=hV(e,t);let r=n[0],i=n[1];return[i/r,i/(1-r)]}function vV(e,t,n){let r=hV(t,n),i=gV(t,n,e,1,e,r),a=_V(t,n,r),o=.11516993+1/(7.4477897+4.1590124*n+t*(-2.19557347+1.75198401*n+t*(-2.13704948-10.02301043*n+t*(-4.24894561+5.38770819*n+4.69891013*t)))),s=.11239642+1/(1.6132032-.68124379*n+t*(.40370612+.90148123*n+t*(-.27087943+.6122399*n+t*(.00299215-.45399568*n-.14661872*t)))),c=i/Math.min(e*a[0],(1-e)*a[1]),l=e*o,u=(1-e)*s,d=.9*c*Math.sqrt(Math.sqrt(1/(1/(l*l*l*l)+1/(u*u*u*u))));return l=e*.4,u=(1-e)*.8,[Math.sqrt(1/(1/(l*l)+1/(u*u))),d,i]}function yV(e){let t=e.l===void 0?0:e.l,n=e.a===void 0?0:e.a,r=e.b===void 0?0:e.b,i={mode:`okhsl`,l:fV(t)};e.alpha!==void 0&&(i.alpha=e.alpha);let a=Math.sqrt(n*n+r*r);if(!a)return i.s=0,i;let[o,s,c]=vV(t,n/a,r/a),l;if(a<s){let e=.8*o,t=1-e/s;l=(a-0)/(e+t*(a-0))*.8}else{let e=s,t=.2*s*s*1.25*1.25/o,n=1-t/(c-s);l=.8+.2*((a-e)/(t+n*(a-e)))}return l&&(i.s=l,i.h=ez(Math.atan2(r,n)*180/Math.PI)),i}function bV(e){let t=e.h===void 0?0:e.h,n=e.s===void 0?0:e.s,r=e.l===void 0?0:e.l,i={mode:`oklab`,l:pV(r)};if(e.alpha!==void 0&&(i.alpha=e.alpha),!n||r===1)return i.a=i.b=0,i;let a=Math.cos(t/180*Math.PI),o=Math.sin(t/180*Math.PI),[s,c,l]=vV(i.l,a,o),u,d,f,p;n<.8?(u=1.25*n,d=0,f=.8*s,p=1-f/c):(u=5*(n-.8),d=c,f=.2*c*c*1.25*1.25/s,p=1-f/(l-c));let m=d+u*f/(1-p*u);return i.a=m*a,i.b=m*o,i}var xV={...Jz,mode:`okhsl`,channels:[`h`,`s`,`l`,`alpha`],parse:[`--okhsl`],serialize:`--okhsl`,fromMode:{oklab:yV,rgb:e=>yV(lV(e))},toMode:{oklab:bV,rgb:e=>dV(bV(e))}};function SV(e){let t=e.l===void 0?0:e.l,n=e.a===void 0?0:e.a,r=e.b===void 0?0:e.b,i=Math.sqrt(n*n+r*r),a=i?n/i:1,o=i?r/i:1,[s,c]=_V(a,o),l=.5,u=1-l/s,d=c/(i+t*c),f=d*t,p=d*i,m=pV(f),h=p*m/f,g=uV({l:m,a:a*h,b:o*h}),ee=Math.cbrt(1/Math.max(g.r,g.g,g.b,0));t/=ee,i=i/ee*fV(t)/t,t=fV(t);let _={mode:`okhsv`,s:i?(l+c)*p/(c*l+c*u*p):0,v:t?t/f:0};return _.s&&(_.h=ez(Math.atan2(r,n)*180/Math.PI)),e.alpha!==void 0&&(_.alpha=e.alpha),_}function CV(e){let t={mode:`oklab`};e.alpha!==void 0&&(t.alpha=e.alpha);let n=e.h===void 0?0:e.h,r=e.s===void 0?0:e.s,i=e.v===void 0?0:e.v,a=Math.cos(n/180*Math.PI),o=Math.sin(n/180*Math.PI),[s,c]=_V(a,o),l=.5,u=1-l/s,d=1-r*l/(l+c-c*u*r),f=r*c*l/(l+c-c*u*r),p=pV(d),m=f*p/d,h=uV({l:p,a:a*m,b:o*m}),g=Math.cbrt(1/Math.max(h.r,h.g,h.b,0)),ee=pV(i*d),_=f*ee/d;return t.l=ee*g,t.a=_*a*g,t.b=_*o*g,t}var wV={...Zz,mode:`okhsv`,channels:[`h`,`s`,`v`,`alpha`],parse:[`--okhsv`],serialize:`--okhsv`,fromMode:{oklab:SV,rgb:e=>SV(lV(e))},toMode:{oklab:CV,rgb:e=>dV(CV(e))}};function TV(e,t){if(!t||t[0]!==`oklab`)return;let n={mode:`oklab`},[,r,i,a,o]=t;if(!(r.type===Y.Hue||i.type===Y.Hue||a.type===Y.Hue))return r.type!==Y.None&&(n.l=Math.min(Math.max(0,r.type===Y.Number?r.value:r.value/100),1)),i.type!==Y.None&&(n.a=i.type===Y.Number?i.value:i.value*.4/100),a.type!==Y.None&&(n.b=a.type===Y.Number?a.value:a.value*.4/100),o.type!==Y.None&&(n.alpha=Math.min(1,Math.max(0,o.type===Y.Number?o.value:o.value/100))),n}var EV={...VB,mode:`oklab`,toMode:{lrgb:uV,rgb:dV},fromMode:{lrgb:cV,rgb:lV},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[TV],serialize:e=>`oklab(${e.l===void 0?`none`:e.l} ${e.a===void 0?`none`:e.a} ${e.b===void 0?`none`:e.b}${e.alpha<1?` / ${e.alpha}`:``})`};function DV(e,t){if(!t||t[0]!==`oklch`)return;let n={mode:`oklch`},[,r,i,a,o]=t;if(r.type!==Y.None){if(r.type===Y.Hue)return;n.l=Math.min(Math.max(0,r.type===Y.Number?r.value:r.value/100),1)}if(i.type!==Y.None&&(n.c=Math.max(0,i.type===Y.Number?i.value:i.value*.4/100)),a.type!==Y.None){if(a.type===Y.Percentage)return;n.h=a.value}return o.type!==Y.None&&(n.alpha=Math.min(1,Math.max(0,o.type===Y.Number?o.value:o.value/100))),n}var OV={...WB,mode:`oklch`,toMode:{oklab:e=>vz(e,`oklab`),rgb:e=>dV(vz(e,`oklab`))},fromMode:{rgb:e=>_z(lV(e),`oklch`),oklab:e=>_z(e,`oklch`)},parse:[DV],serialize:e=>`oklch(${e.l===void 0?`none`:e.l} ${e.c===void 0?`none`:e.c} ${e.h===void 0?`none`:e.h}${e.alpha<1?` / ${e.alpha}`:``})`,ranges:{l:[0,1],c:[0,.4],h:[0,360]}},kV=e=>{let{r:t,g:n,b:r,alpha:i}=JR(e),a={mode:`xyz65`,x:.486570948648216*t+.265667693169093*n+.1982172852343625*r,y:.2289745640697487*t+.6917385218365062*n+.079286914093745*r,z:0*t+.0451133818589026*n+1.043944368900976*r};return i!==void 0&&(a.alpha=i),a},AV=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=ZR({r:e*2.4934969119414263-t*.9313836179191242-.402710784450717*n,g:e*-.8294889695615749+t*1.7626640603183465+.0236246858419436*n,b:e*.0358458302437845-t*.0761723892680418+.9568845240076871*n},`p3`);return r!==void 0&&(i.alpha=r),i},jV={...HR,mode:`p3`,parse:[`display-p3`],serialize:`display-p3`,fromMode:{rgb:e=>AV(YR(e)),xyz65:AV},toMode:{rgb:e=>QR(kV(e)),xyz65:kV}},MV=e=>{let t=Math.abs(e);return t>=1/512?Math.sign(e)*t**(1/1.8):16*e},NV=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`prophoto`,r:MV(e*1.3457868816471585-t*.2555720873797946-.0511018649755453*n),g:MV(e*-.5446307051249019+t*1.5082477428451466+.0205274474364214*n),b:MV(e*0+t*0+1.2119675456389452*n)};return r!==void 0&&(i.alpha=r),i},PV=(e=0)=>{let t=Math.abs(e);return t>=16/512?Math.sign(e)*t**1.8:e/16},FV=e=>{let t=PV(e.r),n=PV(e.g),r=PV(e.b),i={mode:`xyz50`,x:.7977666449006423*t+.1351812974005331*n+.0313477341283922*r,y:.2880748288194013*t+.7118352342418731*n+899369387256e-16*r,z:0*t+0*n+.8251046025104602*r};return e.alpha!==void 0&&(i.alpha=e.alpha),i},IV={...HR,mode:`prophoto`,parse:[`prophoto-rgb`],serialize:`prophoto-rgb`,fromMode:{xyz50:NV,rgb:e=>NV(IB(e))},toMode:{xyz50:FV,rgb:e=>PB(FV(e))}},LV=1.09929682680944,RV=.018053968510807,zV=e=>{let t=Math.abs(e);return t>RV?(Math.sign(e)||1)*(LV*t**.45-(LV-1)):4.5*e},BV=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`rec2020`,r:zV(e*1.7166511879712683-t*.3556707837763925-.2533662813736599*n),g:zV(e*-.6666843518324893+t*1.6164812366349395+.0157685458139111*n),b:zV(e*.0176398574453108-t*.0427706132578085+.9421031212354739*n)};return r!==void 0&&(i.alpha=r),i},VV=1.09929682680944,HV=.018053968510807,UV=(e=0)=>{let t=Math.abs(e);return t<HV*4.5?e/4.5:(Math.sign(e)||1)*((t+VV-1)/VV)**(1/.45)},WV=e=>{let t=UV(e.r),n=UV(e.g),r=UV(e.b),i={mode:`xyz65`,x:.6369580483012911*t+.1446169035862083*n+.1688809751641721*r,y:.262700212011267*t+.6779980715188708*n+.059301716469862*r,z:0*t+.0280726930490874*n+1.0609850577107909*r};return e.alpha!==void 0&&(i.alpha=e.alpha),i},GV={...HR,mode:`rec2020`,fromMode:{xyz65:BV,rgb:e=>BV(YR(e))},toMode:{xyz65:WV,rgb:e=>QR(WV(e))},parse:[`rec2020`],serialize:`rec2020`},KV=.0037930732552754493,qV=Math.cbrt(KV),JV=e=>Math.cbrt(e)-qV,YV=e=>{let{r:t,g:n,b:r,alpha:i}=JR(e),a=JV(.3*t+.622*n+.078*r+KV),o=JV(.23*t+.692*n+.078*r+KV),s=JV(.2434226892454782*t+.2047674442449682*n+.5518098665095535*r+KV),c={mode:`xyb`,x:(a-o)/2,y:(a+o)/2,b:s-(a+o)/2};return i!==void 0&&(c.alpha=i),c},XV=e=>(e+qV)**3,ZV={mode:`xyb`,channels:[`x`,`y`,`b`,`alpha`],parse:[`--xyb`],serialize:`--xyb`,toMode:{rgb:({x:e,y:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=XV(e+t)-KV,a=XV(t-e)-KV,o=XV(n+t)-KV,s=ZR({r:11.031566904639861*i-9.866943908131562*a-.16462299650829934*o,g:-3.2541473810744237*i+4.418770377582723*a-.16462299650829934*o,b:-3.6588512867136815*i+2.7129230459360922*a+1.9459282407775895*o});return r!==void 0&&(s.alpha=r),s}},fromMode:{rgb:YV},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:Z,y:Z,b:Z,alpha:{use:Z,fixup:VR}}},QV={mode:`xyz50`,parse:[`xyz-d50`],serialize:`xyz-d50`,toMode:{rgb:PB,lab:RB},fromMode:{rgb:IB,lab:NB},channels:[`x`,`y`,`z`,`alpha`],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:Z,y:Z,z:Z,alpha:{use:Z,fixup:VR}}},$V={mode:`xyz65`,toMode:{rgb:QR,xyz50:e=>{let{x:t,y:n,z:r,alpha:i}=e;t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0);let a={mode:`xyz50`,x:1.0479298208405488*t+.0229467933410191*n-.0501922295431356*r,y:.0296278156881593*t+.990434484573249*n-.0170738250293851*r,z:-.0092430581525912*t+.0150551448965779*n+.7518742899580008*r};return i!==void 0&&(a.alpha=i),a}},fromMode:{rgb:YR,xyz50:e=>{let{x:t,y:n,z:r,alpha:i}=e;t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0);let a={mode:`xyz65`,x:.9554734527042182*t-.0230985368742614*n+.0632593086610217*r,y:-.0283697069632081*t+1.0099954580058226*n+.021041398966943*r,z:.0123140016883199*t-.0205076964334779*n+1.3303659366080753*r};return i!==void 0&&(a.alpha=i),a}},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:[`x`,`y`,`z`,`alpha`],parse:[`xyz`,`xyz-d65`],serialize:`xyz-d65`,interpolate:{x:Z,y:Z,z:Z,alpha:{use:Z,fixup:VR}}},eH={mode:`yiq`,toMode:{rgb:({y:e,i:t,q:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`rgb`,r:e+.95608445*t+.6208885*n,g:e-.27137664*t-.6486059*n,b:e-1.10561724*t+1.70250126*n};return r!==void 0&&(i.alpha=r),i}},fromMode:{rgb:({r:e,g:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`yiq`,y:.29889531*e+.58662247*t+.11448223*n,i:.59597799*e-.2741761*t-.32180189*n,q:.21147017*e-.52261711*t+.31114694*n};return r!==void 0&&(i.alpha=r),i}},channels:[`y`,`i`,`q`,`alpha`],parse:[`--yiq`],serialize:`--yiq`,ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:Z,i:Z,q:Z,alpha:{use:Z,fixup:VR}}},tH=(e,t)=>Math.round(e*(t=10**t))/t;((e=4)=>t=>typeof t==`number`?tH(t,e):t)(2);var nH=e=>Math.max(0,Math.min(1,e||0)),rH=e=>Math.round(nH(e)*255),iH=mR(`rgb`),aH=e=>{if(e===void 0)return;let t=rH(e.r),n=rH(e.g),r=rH(e.b);return`#`+(1<<24|t<<16|n<<8|r).toString(16).slice(1)},oH=e=>aH(iH(e)),sH=e=>{let t={mode:e.mode,r:Math.max(0,Math.min(e.r===void 0?0:e.r,1)),g:Math.max(0,Math.min(e.g===void 0?0:e.g,1)),b:Math.max(0,Math.min(e.b===void 0?0:e.b,1))};return e.alpha!==void 0&&(t.alpha=e.alpha),t},cH=e=>e!==void 0&&(e.r===void 0||e.r>=0&&e.r<=1)&&(e.g===void 0||e.g>=0&&e.g<=1)&&(e.b===void 0||e.b>=0&&e.b<=1);function lH(e=`rgb`){let{gamut:t}=xR(e);if(!t)return e=>!0;let n=mR(typeof t==`string`?t:e);return e=>cH(n(e))}function uH(e=`rgb`){let{gamut:t}=xR(e);if(!t)return e=>pR(e);let n=typeof t==`string`?t:e,r=mR(n),i=lH(n);return e=>{let t=pR(e);if(!t)return;let n=r(t);if(i(n))return t;let a=sH(n);return t.mode===a.mode?a:mR(t.mode)(a)}}bR($R),bR(gz),bR(Lz),bR(Rz),bR(Vz),bR(Jz),bR(Zz),bR(tB),bR(pB),bR(EB),bR(kB),bR(VB),bR(HB),bR(WB),bR(GB),bR(aV),bR(oV),bR(sV),bR(xV),bR(wV),bR(EV),bR(OV),bR(jV),bR(IV),bR(GV),bR(HR),bR(ZV),bR(QV),bR($V),bR(eH);var dH=mz(`rgb`),fH=class e{constructor(e){this.set(e)}static isValidColorString(t){try{return new e(t),!0}catch{return!1}}static isColor(t){return t instanceof e}static deserialize(t){let n=JSON.parse(t),r=new e(`black`);return Kc(n).forEach(([e,t])=>{e===`originalColorSyntax`?r.originalColorSyntax=Ac.isEnumValue(t,WL,`Cannot deserialize: invalid color syntax.`):r._allColors[e]=t}),r}getRgbDistance(e){return dH(this.#e,e)}getClosestNamedColor(){return De(JL).reduce((e,t)=>{let n=this.getRgbDistance(t);return n<e.distance?{distance:n,name:t}:e},{name:``,distance:1/0}).name}toString(){return this.toCss()[this.originalColorSyntax]}originalColorSyntax=WL.hex;#e=Ac.isDefined(IR(`black`));_allColors={names:[`black`],[WL.name]:`black`,hexString:`#000000`,[WL.hex]:{r:0,g:0,b:0},[WL.rgb]:{r:0,g:0,b:0},[WL.hsl]:{h:0,s:0,l:0},[WL.hwb]:{h:0,w:0,b:0},[WL.lab]:{l:0,a:0,b:0},[WL.lch]:{l:0,c:0,h:0},[WL.oklab]:{l:0,a:0,b:0},[WL.oklch]:{l:0,c:0,h:0}};clone(){return e.deserialize(this.serialize())}setByString(e){let t=IR(e);if(!t)throw Error(`Unable to parse invalid color string: '${e}'`);this.originalColorSyntax=KL(e),this.#e=t,this.pullFromInternalColor()}set(e){if(A.isString(e))return this.setByString(e);if(Fc.isLengthExactly(Object.keys(e),1,`Cannot set multiple color formats at once: got '${Vl(Object.keys(e))}'`),e.hexString||e.name)this.setByString(e.hexString||e.name);else{let[t,n]=Ac.isDefined(Kc(e)[0]),r=GL[t],i=Object.values(Ml(r.coords,e=>{let i=n[e],a=r.coords[Ac.isKeyOf(e,r.coords)],o=i!=null&&i>=a.min&&i<=a.max?n[e]:this[t][e];return Ac.isDefined(o)}));this.setByString(`${r.conversionFormat}(${i.join(` `)})`)}}pullFromInternalColor(){ke(UL).forEach(e=>{let t=GL[e],n=t.conversionFormat,r=A.isKeyOf(this.#e.mode,GL)?GL[this.#e.mode]:void 0,i=uH(t.colorSpace===r?.colorSpace?n:`rgb`)(mR(n)(this.#e));i||Fc.never(`Failed to convert color '${JSON.stringify(this.#e)}' to '${e}'.`),De(this[e]).forEach(n=>{let r=i[n],a=t.coords[Ac.isKeyOf(n,t.coords)];r!=null&&(this._allColors[e][n]=El((r||0)*(a.factor||1),{digits:a.digits||0}))})}),this._allColors.hexString=oH(this.#e),this._allColors.names=pH(this.rgb),this._allColors[WL.name]=this._allColors.names[0]||``}serialize(){return JSON.stringify({...this.allColors,originalColorSyntax:this.originalColorSyntax})}get allColors(){return al(this._allColors)}toFormattedStrings(){return{...Ml(GL,e=>Object.values(this[e]).map(e=>String(e).padStart(6,` `)).join(` `)),names:this.names.join(`, `).padEnd(QL,` `),[WL.name]:(this.names[0]||``).padEnd(QL,` `),[WL.hexString]:this[WL.hexString]}}toCss(){return{...Ml(GL,e=>`${e}(${Object.values(this[e]).join(` `)})`),[WL.hexString]:this[WL.hexString],[WL.name]:this.names[0]||``}}get names(){return al(this._allColors.names)}get name(){return this._allColors.names[0]||``}get hexString(){return this._allColors[WL.hexString]}get hex(){return al(this._allColors[WL.hex])}get rgb(){return al(this._allColors[WL.rgb])}get hsl(){return al(this._allColors[WL.hsl])}get hwb(){return al(this._allColors[WL.hwb])}get lab(){return al(this._allColors[WL.lab])}get lch(){return al(this._allColors[WL.lch])}get oklab(){return al(this._allColors[WL.oklab])}get oklch(){return al(this._allColors[WL.oklch])}};function pH(e){return Jc(Kc(JL),([e])=>e,(t,[,n])=>A.deepEquals(n,[e.r,e.g,e.b]))}function mH(e){return z`
        color: ${e.foreground.value};
        background-color: ${e.background.value};
    `}function hH({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split(``).every(e=>hH({input:e,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function gH({value:e,allowed:t,blocked:n}){let r=String(e),i=t?hH({input:r,matcher:t}):!0,a=n?hH({input:r,matcher:n}):!1;return i&&!a}function _H(e){let t=String(e.value);if(!e.value)return{filtered:t,blocked:``};let{filtered:n,blocked:r}=t.split(``).reduce((t,n)=>(gH({...e,value:n})?t.filtered.push(n):t.blocked.push(n),t),{filtered:[],blocked:[]});return{filtered:n.join(``),blocked:r.join(``)}}function vH({inputs:e,previousValue:t,event:n,inputBlockedCallback:r,newValueCallback:i}){let a=lP(n,HTMLInputElement),o=A.hasKey(n,`data`)&&Lc.isString(n.data)||``;if(o){let{blocked:t}=_H({value:o,allowed:e.allowedInputs,blocked:e.blockedInputs});t.length&&r(t)}let s=_H({value:a.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;a.value!==s&&(a.value=s),t!==s&&i(s)}var yH;(function(e){e.Default=`text`,e.Password=`password`,e.Email=`email`,e.Number=`number`})(yH||={});var bH=LF()({tagName:`vira-input`,cssVars:{"vira-input-padding-horizontal":`10px`,"vira-input-padding-vertical":`6px`},styles:({hostClasses:e,cssVars:t})=>z`
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
                ${MF};
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
                ${FF};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e[`vira-input-clear-button-shown`].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${MF};
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
                ${MF};
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
                ${MF};
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
                    ${hF({elementBorderSize:`1px`,noNesting:!0})}
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
                ${FF};
            }

            button {
                ${MF};
                cursor: pointer;
                display: flex;
                transition: color
                    ${pF[`vira-interaction-animation-duration`].value};
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
                    ${fF};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,events:{valueChange:XM(),inputBlocked:XM()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:nl(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:n,updateState:r,events:i,host:a})=>{let{filtered:o}=_H({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?V`
                  <${J.assign({icon:e.icon})}
                      class="left-side-icon"
                  ></${J}>
              `:j,c=e.fitText?z`
                  width: ${n.forcedInputWidth}px;
              `:j,l=B(`mousedown`,e=>{let t=lP(e,HTMLElement,{useOriginalTarget:!0}),n=Ac.instanceOf(a.shadowRoot.querySelector(`input`),HTMLInputElement);t!==n&&(e.preventDefault(),n.focus())}),u=e.disableBrowserHelps||e.type===yH.Password,d=V`
            <span class="input-wrapper" ${e.label?j:l}>
                ${s}
                ${kN(!!e.fitText,V`
                        <span
                            class="size-span"
                            ${EN(({contentRect:e})=>{r({forcedInputWidth:e.width})})}
                        >
                            <pre>${o||e.placeholder||j}</pre>
                        </span>
                    `)}

                <input
                    id=${EM(e.label?n.randomId:void 0)}
                    aria-label=${EM(e.label||void 0)}
                    autofocus=${!1}
                    type=${xH(e.type,n.showPassword)}
                    style=${c}
                    autocomplete=${EM(u?`off`:void 0)}
                    autocorrect=${EM(u?`off`:void 0)}
                    autocapitalize=${EM(u?`off`:void 0)}
                    spellcheck=${EM(u?`false`:void 0)}
                    ?disabled=${e.disabled}
                    .value=${o}
                    ${B(`input`,n=>{vH({inputs:e,previousValue:o,event:n,inputBlockedCallback(e){t(new i.inputBlocked(e))},newValueCallback(e){t(new i.valueChange(e))}})})}
                    placeholder=${EM(e.placeholder||void 0)}
                    ${_N(e.attributePassthrough)}
                />

                ${kN(!!(e.showClearButton&&e.value),V`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${B(`mousedown`,e=>{e.stopImmediatePropagation(),e.preventDefault()})}
                            ${B(`click`,()=>{e.disabled||t(new i.valueChange(``))})}
                        >
                            <${J.assign({icon:KI})}></${J}>
                        </button>
                    `)}
                ${kN(e.type===yH.Password,V`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${B(`mousedown`,e=>{e.stopImmediatePropagation(),e.preventDefault()})}
                            ${B(`click`,()=>{r({showPassword:!n.showPassword})})}
                        >
                            <${J.assign({icon:n.showPassword?tL:eL})}></${J}>
                        </button>
                    `)}
                ${kN(!!e.suffix,V`
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
            `:d}});function xH(e,t){return e===yH.Password&&t?yH.Default:e||yH.Default}var SH=sN()({tagName:`vir-color-slider`,cssVars:{"vir-color-slider-gradient":`black`},styles:({cssVars:e})=>z`
        :host {
            display: flex;
            align-items: center;
            font-family: ${gF[`vira-monospace`].value};
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

        ${bH} {
            width: 76px;
        }

        .coordinate {
            font-size: 18px;
            margin-top: -4px;
        }
    `,events:{valueChange:XM()},render({inputs:e,events:t,dispatch:n,cssVars:r}){let i=GL[e.colorFormatName],a=i.coords[e.colorCoordinateName];if(!a)throw Error(`Invalid color coordinate '${e.colorCoordinateName}' for color format '${e.colorFormatName}'`);let o=z`linear-gradient(to right, ${Du(Qc(10,t=>{let n=a.min+(a.max-a.min)*(t/10);return new fH({[e.colorFormatName]:{...e.color[e.colorFormatName],[e.colorCoordinateName]:n}}).toCss()[i.conversionFormat]}).join(`,`))})`,s=Ac.isNumber(e.color[e.colorFormatName][e.colorCoordinateName]),c=a.radix?Math.round(s).toString(a.radix).toUpperCase().padStart(a.radixPad||0,`0`):String(s);return V`
            <span class="coordinate">${e.colorCoordinateName.toUpperCase()}</span>
            <input
                type="range"
                style=${z`
                    ${r[`vir-color-slider-gradient`].name}: ${o};
                `}
                step=${10**(a.digits?-a.digits:0)}
                ${wN(e=>{Fc.instanceOf(e,HTMLInputElement),e.min=String(a.min),e.max=String(a.max),e.value=String(s)})}
                ${B(`input`,e=>{let r=lP(e,HTMLInputElement),i=Number(r.value);isNaN(i)||n(new t.valueChange(i))})}
            />
            <${bH.assign({value:c})}
                ${B(bH.events.valueChange,e=>{let r=a.radix?parseInt(e.detail,a.radix):Number(e.detail);isNaN(r)||n(new t.valueChange(r))})}
            ></${bH}>
        `}}),CH=sN()({tagName:`vir-color-format-sliders`,styles:z`
        :host {
            display: flex;
            flex-direction: column;
        }

        h3 {
            ${jF};
        }
    `,events:{colorChange:XM()},render({inputs:e,dispatch:t,events:n}){let r=GL[e.colorFormatName],i=De(r.coords).map(i=>V`
                    <${SH.assign({color:e.color,colorCoordinateName:i,colorFormatName:e.colorFormatName})}
                        ${B(SH.events.valueChange,a=>{let o=e.color.clone();o.set({[e.colorFormatName]:{[i]:a.detail}});let s=o.toCss()[r.conversionFormat];t(new n.colorChange(s))})}
                    ></${SH}>
                `);return V`
            ${e.showFormatName?V`
                      <h3>${e.colorFormatName}</h3>
                  `:j}
            ${i}
        `}}),wH;(function(e){e.Vertical=`vertical`,e.Horizontal=`horizontal`})(wH||={});function TH(e,t,n,r={}){let i=t.map((e,t)=>({cells:n(e,t),data:e}));return r.orientation===wH.Horizontal?{headerRow:void 0,rows:Jc(e,e=>{if(e.disabled)return;let t=r.hideHeaders?[]:[{content:e.content??e.key,key:e.key,data:void 0}],n=Jc(i,({data:t,cells:n})=>{if(n)return{content:n[e.key],key:e.key,data:t}},A.isTruthy);return{cells:[...t,...n],data:void 0}},A.isTruthy),orientation:wH.Horizontal}:{headerRow:r.hideHeaders?[]:Jc(e,e=>{if(!e.disabled)return{content:e.content??e.key,key:e.key,data:void 0}},A.isTruthy),rows:Jc(i,({cells:t,data:n})=>{if(t)return{cells:Jc(e,e=>{if(!e.disabled)return{content:t[e.key],key:e.key,data:n}},A.isTruthy),data:n}},A.isTruthy),orientation:wH.Vertical}}var EH=sN()({tagName:`vir-color-swatch`,styles:z`
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
                    background-color: ${Du(t)};
                    color: ${Du(n)};
                `}
            >
                <slot></slot>
            </div>
        `}});function DH(e){return`groupName`in e}function OH(e,t){return V`
        <option
            ?selected=${e.value===t}
            aria-label=${e.label}
            ?disabled=${e.disabled}
            value=${e.value}
        >
            ${e.label}
        </option>
    `}var kH=LF()({tagName:`vira-select`,state(){return{randomId:nl(32),cleanupListeners:void 0}},events:{valueChange:XM()},cssVars:{"vira-select-padding-horizontal":`10px`,"vira-select-padding-vertical":`6px`,"vira-select-icon-padding":`44px`},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError,"vira-select-not-raw":({inputs:e})=>!e.rawSelect},styles:({hostClasses:e,cssVars:t})=>z`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${K[`vira-form-foreground-color`].value};
        }

        .select-wrapper {
            ${MF};
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
                        ${hF({elementBorderSize:`1px`,noNesting:!0})}
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
                        ${pF[`vira-interaction-animation-duration`].value};
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
                ${fF}
            }
            ${J} {
                ${fF}
            }
            & * {
                cursor: not-allowed;
            }
        }

        :host(.${e[`vira-select-not-raw`].name}.${e[`vira-select-error`].name})
            .wrapper-border {
            border-color: ${K[`vira-form-error-color`].value};
        }
    `,init({state:e,updateState:t,host:n}){e.cleanupListeners?.();function r(){return Ac.instanceOf(n.shadowRoot.querySelector(`select`),HTMLSelectElement)}let i=[ql(n,`mousedown`,e=>{let t=r();e.composedPath().includes(t)||(e.preventDefault(),e.stopPropagation(),t.showPicker&&t.showPicker())}),ql(n,`click`,e=>{let t=r();e.composedPath().includes(t)||(e.preventDefault(),e.stopPropagation(),t.showPicker&&t.showPicker())})];t({cleanupListeners:()=>{i.forEach(e=>e())}})},cleanup({state:e,updateState:t}){e.cleanupListeners?.(),t({cleanupListeners:void 0})},render({inputs:e,state:t,dispatch:n,events:r}){let i=e.value||void 0,a=e.placeholder||i==null?V`
                      <option value="" disabled ?selected=${i==null}>
                          ${e.placeholder}
                      </option>
                  `:j,o=V`
            <span class="select-wrapper">
                <select
                    .value=${EM(i)}
                    class=${TM({placeholder:!i&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${EM(e.label?t.randomId:void 0)}
                    aria-label=${EM(e.label||void 0)}
                    aria-disabled=${EM(e.disabled?`true`:void 0)}
                    ${B(`input`,t=>{let a=lP(t,HTMLSelectElement),o=a.value;a.value!==i&&(a.selectedIndex=e.options.flatMap(e=>DH(e)?[...e.options]:[e]).findIndex(e=>e.value===i)),n(new r.valueChange(o))})}
                    ${_N(e.attributePassthrough?.select)}
                >
                    ${a}
                    ${e.options.map(e=>DH(e)?V`
                                <optgroup label=${e.groupName}>
                                    ${e.options.map(e=>OH(e,i))}
                                </optgroup>
                            `:OH(e,i))}
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
                <${J.assign({icon:MI})}
                    class="trigger-icon"
                ></${J}>
            </span>
        `;return e.label?V`
                <label for=${t.randomId} ${_N(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${o}
                </label>
            `:o}}),AH=class extends Ul()(`local-storage-client-all-values-event`){},jH=new class{shapes;options;listenTarget=new Kl;keyEvents;get AllValuesType(){throw Error(`Cannot use AllValuesType as a runtime value. It is a type only.`)}get ValueType(){throw Error(`Cannot use ValueType as a runtime value. It is a type only.`)}constructor(e,t={}){this.shapes=e,this.options=t,this.storeName=t.storeName||`local-storage-client`,this.keyEvents=Ml(e,e=>class extends Ul()(`local-storage-client-${String(e)}-event`){}),this.get=Ml(this.shapes,e=>(t={})=>this.getAllValues(t)[e]),this.listen=Ml(this.shapes,e=>t=>this.listenTarget.listen(this.keyEvents[e],async e=>{await t(e.detail)})),this.set=Ml(this.shapes,e=>t=>{Hj(t,this.shapes[e],{allowExtraKeys:!0},`LocalStorageClient: Invalid value for key '${String(e)}'.`);let n=this.getAllValues();return n[e]=t,globalThis.localStorage.setItem(this.storeName,JSON.stringify(n)),this.listenTarget.dispatch(new AH({detail:n})),this.listenTarget.dispatch(new this.keyEvents[e]({detail:t})),t}),this.delete=Ml(this.shapes,e=>()=>{let t=this.getAllValues();delete t[e],globalThis.localStorage.setItem(this.storeName,JSON.stringify(t)),this.listenTarget.dispatch(new AH({detail:t})),this.listenTarget.dispatch(new this.keyEvents[e]({detail:void 0}))})}storeName;getAllValues({throwErrorOnFailure:e=!1}={}){return il(()=>pl(JSON.parse(globalThis.localStorage.getItem(this.storeName)||`{}`),(t,n)=>{let r=this.shapes[t];if(r){if(e)Hj(n,r,{allowExtraKeys:!0});else if(!Vj(n,r,{allowExtraKeys:!0}))return;return{key:t,value:n}}}),{handleError:t=>{if(e)throw Ie(t,`LocalStorageClient: store '${this.storeName}' is corrupt and cannot be loaded.`);return{}}})}listenToAllValues(e){return this.listenTarget.listen(AH,async t=>{await e(t.detail)})}listen;get;set;delete;clear(){globalThis.localStorage.removeItem(this.storeName)}destroy(){this.listenTarget.destroy()}}({lastFormat:Oj(UL)}),MH=Fl(UL).map(e=>({value:e,label:e.toUpperCase()})),NH=sN()({tagName:`vir-color-picker`,cssVars:{"vir-color-picker-swatch-width":{default:`100px`,syntax:Fd.Length},"vir-color-picker-swatch-height":{default:`100px`,syntax:Fd.Length}},state(){return{selectedFormatName:jH.get.lastFormat()||UL.rgb,rawInput:void 0}},hostClasses:{"vir-color-picker-always-show":({inputs:e})=>!!e.alwaysShowPicker},styles:({cssVars:e,hostClasses:t})=>z`
        :host {
            display: inline-flex;
        }

        ${t[`vir-color-picker-always-show`].selector} {
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }

        button {
            ${MF}
            cursor: pointer;
            display: flex;
        }

        ${kI} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }

        .swatch-wrapper {
            display: flex;
            flex-direction: column;
            gap: 4px;
            align-items: center;

            & ${EH} {
                width: ${e[`vir-color-picker-swatch-width`].value};
                height: ${e[`vir-color-picker-swatch-height`].value};
                box-sizing: border-box;
            }
        }

        .code-button {
            font-family: ${gF[`vira-monospace`].value};
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
            ${PF.menuShadow}
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

            & ${bH} {
                flex-grow: 1;
                width: unset;
                color: inherit;
                height: 20px;
                border: none;
            }
        }
    `,events:{colorChange:XM()},render({inputs:e,dispatch:t,events:n,state:r,updateState:i}){let a=fH.isColor(e.color)?e.color:new fH(e.color||`black`),o=GL[r.selectedFormatName],s=r.rawInput??a.toCss()[o.rawSyntax],c=V`
            <div class="raw-input-wrapper">
                <${bH.assign({value:s})}
                    ${B(bH.events.valueChange,e=>{let r=e.detail;i({rawInput:r}),fH.isValidColorString(r)&&t(new n.colorChange(r))})}
                ></${bH}>
                <button
                    class="code-button"
                    ${B(`click`,async()=>{await globalThis.navigator.clipboard.writeText(s)})}
                >
                    <${J.assign({icon:JI,fitContainer:!0})}></${J}>
                </button>
            </div>
        `,l=V`
            <button
                class="code-button"
                ${B(`click`,async()=>{await globalThis.navigator.clipboard.writeText(a.hexString)})}
            >
                <span>${a.hexString}</span>
                <${J.assign({icon:JI,fitContainer:!0})}></${J}>
            </button>
        `,u=V`
            <div class="swatch-wrapper">
                <${EH.assign({backgroundColor:a})}></${EH}>
                ${e.showHexValue?l:j}
            </div>
        `,d=V`
            <div class="picker">
                <${kH.assign({options:MH,value:r.selectedFormatName})}
                    ${B(kH.events.valueChange,e=>{let t=Lc.isEnumValue(e.detail,UL);t&&(i({selectedFormatName:t}),jH.set.lastFormat(t))})}
                ></${kH}>
                ${c}
                <${CH.assign({color:a,colorFormatName:r.selectedFormatName,showFormatName:!1})}
                    ${B(CH.events.colorChange,e=>{t(new n.colorChange(e.detail)),i({rawInput:void 0})})}
                ></${CH}>
            </div>
        `;return e.alwaysShowPicker?V`
                ${u} ${d}
            `:V`
                <${kI.assign({keepOpenAfterInteraction:!0})}>
                    <button
                        class="trigger"
                        slot=${kI.slotNames.trigger}
                        ${B(`mousedown`,()=>{let e=jH.get.lastFormat();e&&i({selectedFormatName:e})})}
                    >
                        ${u}
                    </button>
                    <div class="pop-up" slot=${kI.slotNames.popUp}>
                        ${d}
                    </div>
                </${kI}>
            `}}),PH=[`pagehide`,`pageshow`,`popstate`],FH=30,IH=LF()({tagName:`vira-drawer`,events:{drawerClose:XM()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanupListeners:void 0,isDragging:!1,dragStartY:0,dragCurrentY:0}},cleanup({state:e}){e.cleanupListeners?.()},hostClasses:{"vira-drawer-dragging":({state:e})=>e.isDragging},slotNames:[`drawerTitle`],cssVars:{"vira-drawer-backdrop-filter":`blur(3px)`,"vira-drawer-max-height":`80dvh`},styles:({cssVars:e,hostClasses:t})=>z`
        :host {
            display: contents;
        }

        ${t[`vira-drawer-dragging`].selector} {
            ${FF};
        }

        h1 {
            ${jF};
        }

        dialog {
            ${mH(G.colors[oF])}
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
            ${PF.modal}
            transition: transform ${pF[`vira-pretty-animation-duration`].value} ease;

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
                        ${MF};
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
    `,render({inputs:e,state:t,updateState:n,events:r,dispatch:i,slotNames:a}){if(t.dialogElement&&e.open!==t.dialogElement.open&&(e.open?t.dialogElement.showModal():t.dialogElement.close()),t.previousOpenValue!==e.open&&(t.cleanupListeners?.(),n({previousOpenValue:e.open}),e.open)){let e=PH.map(e=>Jl(e,()=>{i(new r.drawerClose)}));n({cleanupListeners:()=>{e.forEach(e=>e())}})}function o(){e.open&&(t.cleanupListeners?.(),i(new r.drawerClose))}if(t.dialogElement)if(t.isDragging){let e=Math.max(0,t.dragCurrentY-t.dragStartY);t.dialogElement.style.transform=`translateY(${String(e)}px)`,t.dialogElement.style.transition=`none`}else t.dialogElement.style.transform=``,t.dialogElement.style.transition=``;return V`
            <dialog
                ${SN(e=>{n({dialogElement:Ac.instanceOf(e,HTMLDialogElement)})})}
                ${B(`close`,()=>{o()})}
                ${B(`mousedown`,e=>{t.contentElement&&!e.composedPath().includes(t.contentElement)&&o()})}
            >
                <div
                    class="drawer-content-wrapper"
                    ${SN(e=>{n({contentElement:Ac.instanceOf(e,HTMLDivElement)})})}
                >
                    <div
                        class="drag-handle-wrapper"
                        ${B(`dblclick`,()=>{o()})}
                        ${B(`pointerdown`,e=>{n({isDragging:!0,dragStartY:e.clientY,dragCurrentY:e.clientY});function r(e){n({dragCurrentY:e.clientY})}function i(e){let r=e.clientY-t.dragStartY;n({isDragging:!1,dragStartY:0,dragCurrentY:0}),r>FH&&o(),a.forEach(e=>e())}let a=[Jl(`pointermove`,r),Jl(`pointerup`,i)]})}
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
                            <${J.assign({icon:AL})}></${J}>
                        </button>
                    </div>
                    ${e.open?V`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:j}
                </div>
            </dialog>
        `}}),LH=LF()({tagName:`vira-error`,cssVars:{"vira-error-font-weight":`bold`},styles:({cssVars:e})=>z`
        :host {
            color: ${K[`vira-form-error-color`].value};
            font-weight: ${e[`vira-error-font-weight`].value};
        }
    `,render(){return V`
            <slot></slot>
        `}}),RH={value:z`transparent`};function zH(e){let t=CF[e][`behind-bg`],n=CF[e][`on-self`];return{[OF.Standard]:{idle:{textColor:t[vF.NonBodyText].foreground,backgroundColor:t[vF.NonBodyText].background,borderColor:t[vF.NonBodyText].background},hover:{textColor:t[vF.Header].foreground,backgroundColor:t[vF.Header].background,borderColor:t[vF.Header].background},active:{textColor:t[vF.NonBodyText].foreground,backgroundColor:t[vF.NonBodyText].background,borderColor:t[vF.NonBodyText].background}},[OF.Subtle]:{idle:{textColor:n[vF.BodyText].foreground,backgroundColor:n[vF.BodyText].background,borderColor:n[vF.BodyText].background},hover:{textColor:n[vF.NonBodyText].foreground,backgroundColor:n[vF.NonBodyText].background,borderColor:n[vF.NonBodyText].background},active:{textColor:n[vF.BodyText].foreground,backgroundColor:n[vF.BodyText].background,borderColor:n[vF.BodyText].background}}}}function BH(e){let t=CF[e][`on-self`][vF.BodyText];return{idle:{textColor:t.foreground,backgroundColor:RH,borderColor:t.background},hover:{textColor:t.foreground,backgroundColor:CF[e][`behind-bg`][vF.Invisible].background,borderColor:t.background},active:{textColor:t.foreground,backgroundColor:CF[e][`behind-bg`][vF.Decoration].background,borderColor:t.background}}}var VH={[q.Plain]:{[OF.Standard]:{idle:{backgroundColor:G.colors[oF].foreground,textColor:G.colors[oF].background,borderColor:G.colors[oF].foreground},hover:{backgroundColor:G.colors[`vira-grey-behind-bg-body`].background,textColor:G.colors[`vira-grey-behind-bg-body`].foreground,borderColor:G.colors[`vira-grey-behind-bg-body`].background},active:{backgroundColor:G.colors[oF].foreground,textColor:G.colors[oF].background,borderColor:G.colors[oF].foreground}},[OF.Subtle]:{idle:{backgroundColor:RH,textColor:G.colors[oF].foreground,borderColor:RH},hover:{backgroundColor:G.colors[`vira-grey-behind-fg-small-body`].background,textColor:G.colors[`vira-grey-behind-fg-small-body`].foreground,borderColor:G.colors[`vira-grey-behind-fg-small-body`].background},active:{backgroundColor:G.colors[`vira-grey-behind-fg-body`].background,textColor:G.colors[`vira-grey-behind-fg-body`].foreground,borderColor:G.colors[`vira-grey-behind-fg-body`].background}}},[q.Accent]:zH(wF[q.Accent]),[q.Neutral]:zH(wF[q.Neutral]),[q.Danger]:zH(wF[q.Danger]),[q.Warning]:zH(wF[q.Warning]),[q.Positive]:zH(wF[q.Positive])},HH={[q.Plain]:{idle:{textColor:G.colors[oF].foreground,backgroundColor:RH,borderColor:G.colors[`vira-grey-on-self-body`].background},hover:{backgroundColor:G.colors[`vira-grey-behind-fg-small-body`].background,textColor:G.colors[`vira-grey-behind-fg-small-body`].foreground,borderColor:G.colors[`vira-grey-on-self-body`].background},active:{backgroundColor:G.colors[`vira-grey-behind-fg-body`].background,textColor:G.colors[`vira-grey-behind-fg-body`].foreground,borderColor:G.colors[`vira-grey-on-self-body`].background}},[q.Accent]:BH(wF[q.Accent]),[q.Neutral]:BH(wF[q.Neutral]),[q.Danger]:BH(wF[q.Danger]),[q.Warning]:BH(wF[q.Warning]),[q.Positive]:BH(wF[q.Positive])},UH=LF()({tagName:`vira-tag`,cssVars:{"vira-tag-text-color":`transparent`,"vira-tag-background-color":`transparent`,"vira-tag-border-color":`transparent`,"vira-tag-hover-text-color":`transparent`,"vira-tag-hover-background-color":`transparent`,"vira-tag-hover-border-color":`transparent`,"vira-tag-active-text-color":`transparent`,"vira-tag-active-background-color":`transparent`,"vira-tag-active-border-color":`transparent`,"vira-tag-disabled-text-color":G.colors[`vira-grey-behind-bg-decoration`].foreground.value,"vira-tag-disabled-background-color":G.colors[`vira-grey-behind-bg-decoration`].background.value,"vira-tag-disabled-border-color":G.colors[`vira-grey-behind-bg-decoration`].background.value,"vira-tag-border-radius":`1000px`,"vira-tag-gap":`6px`,"vira-tag-horizontal-padding":`12px`,"vira-tag-border-width":`2px`},events:{toggle:XM(),cancel:XM()},hostClasses:{"vira-tag-selectable":({inputs:e})=>A.isBoolean(e.isClickable?.selected),"vira-tag-checked":({inputs:e})=>!!e.isClickable?.selected,"vira-tag-not-checked":({inputs:e})=>e.isClickable?.selected===!1,"vira-tag-cancellable":({inputs:e})=>!!e.isClickable?.cancellable,"vira-tag-not-clickable":({inputs:e})=>!e.isClickable,"vira-tag-disabled":({inputs:e})=>!!e.disabled,"vira-tag-size-large":({inputs:e})=>e.size===EF.Large,"vira-tag-size-medium":({inputs:e})=>!e.size||e.size===EF.Medium,"vira-tag-size-small":({inputs:e})=>e.size===EF.Small,"vira-tag-emphasis-standard":({inputs:e})=>!e.emphasis||e.emphasis===OF.Standard,"vira-tag-emphasis-subtle":({inputs:e})=>e.emphasis===OF.Subtle,"vira-tag-color-accent":({inputs:e})=>!e.color||e.color===q.Accent,"vira-tag-color-plain":({inputs:e})=>e.color===q.Plain,"vira-tag-color-neutral":({inputs:e})=>e.color===q.Neutral,"vira-tag-color-danger":({inputs:e})=>e.color===q.Danger,"vira-tag-color-warning":({inputs:e})=>e.color===q.Warning,"vira-tag-color-positive":({inputs:e})=>e.color===q.Positive},styles:({cssVars:e,hostClasses:t})=>{function n(){return Du(kF.flatMap(n=>TF.map(r=>{let i=VH[r][n];return z`
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
`))}function r(){return Du(TF.map(n=>{let r=HH[n],i=t[`vira-tag-color-${n}`].selector,a=t[`vira-tag-not-checked`].selector;return z`
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
`))}function i(){return Du(DF.map(e=>z`
                    ${t[`vira-tag-size-${e}`].selector} button {
                        height: ${AF[e]}px;
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
                ${MF}
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
                ${FF}

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
                <${J.assign({icon:AI})}
                    class="selected-check"
                ></${J}>
                <span class="text">${String(e.text)}</span>
                <${J.assign({icon:II})}
                    class="cancel-x"
                ></${J}>
            </button>
        `}}),WH=PN(),GH=WH()({tagName:`book-route-link`,cssVars:{"book-route-link-anchor-padding":`0px`},styles:({cssVars:e})=>z`
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
                ${B(`click`,n=>{(!e.router||WP(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new nF(e.route)))})}
            >
                <slot></slot>
            </a>
        `});function KH(e,t){return e.entry.entryType===a.Root?!1:e.entry.entryType===a.Page||A.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:A.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}var qH=WH()({tagName:`book-nav`,cssVars:{"book-nav-internal-indent":`0`},styles:({cssVars:e})=>z`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${Bd[`element-book-page-background-faint-level-2-color`].value};
        }

        .title-row:hover {
            background-color: ${Bd[`element-book-nav-hover-background-color`].value};
            color: ${Bd[`element-book-nav-hover-foreground-color`].value};
        }

        .title-row:active {
            background-color: ${Bd[`element-book-nav-active-background-color`].value};
            color: ${Bd[`element-book-nav-active-foreground-color`].value};
        }

        .title-row {
            display: block;
            ${GH.cssVars[`book-route-link-anchor-padding`].name}: 1px 24px 1px calc(calc(16px * ${e[`book-nav-internal-indent`].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${Bd[`element-book-nav-selected-background-color`].value};
            color: ${Bd[`element-book-nav-selected-foreground-color`].value};
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
            color: ${Bd[`element-book-accent-icon-color`].value};
        }
    `,render({inputs:e}){let t=e.flattenedNodes.map(t=>{if(KH(t,e.selectedPath))return V`
                <li style=${z`
                --book-nav-internal-indent: ${t.fullUrlBreadcrumbs.length-1};
            `}>
                    <${GH.assign({router:e.router,route:{paths:[vu.Book,...t.fullUrlBreadcrumbs]}})}
                        class=${TM({"title-row":!0,selected:e.selectedPath?A.jsonEquals(e.selectedPath,t.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${kN(au(t,a.ElementExample),V`
                                    <${J.assign({icon:PI})}></${J}>
                                `)}
                            ${t.entry.title}
                        </div>
                    </${GH}>
                </li>
            `});return V`
            <${GH.assign({route:bu,router:e.router})}>
                <slot>Book</slot>
            </${GH}>
            <ul>
                ${t}
            </ul>
        `}}),JH=WH()({tagName:`book-error`,styles:z`
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
            `)}}),YH=WH()({tagName:`book-page-controls`,events:{controlValueChange:XM()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>z`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${Bd[`element-book-page-foreground-faint-level-1-color`].value};
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

        ${bH}, ${kH} {
            height: 24px;
            max-width: 128px;
        }

        ${J}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:n}){return Object.entries(e.config).length?Object.entries(e.config).map(([r,i],a)=>{if(i.controlType===Bc.Hidden)return``;let o=XH(e.currentValues[r],i,i=>{let a=A.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[r];if(!a)throw Error(`Failed to find breadcrumbs from given control name: '${r}'`);t(new n.controlValueChange({fullUrlBreadcrumbs:a,newValues:{...Object.fromEntries(Object.keys(e.config).map(t=>[t,e.currentValues[t]])),[r]:i}}))});return V`
                    <div class="control-wrapper">
                        ${kN(a===0,V`
                                <${J.assign({icon:uL})}
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
                `}):``}});function XH(e,t,n){return zc(t,Bc.Hidden)?``:zc(t,Bc.Checkbox)?V`
            <${RL.assign({value:!!e})}
                ${B(RL.events.valueChange,e=>{n(e.detail)})}
            ></${RL}>
        `:zc(t,Bc.Color)?V`
            <${NH.assign({color:e})}
                style=${z`
                    ${NH.cssVars[`vir-color-picker-swatch-height`].name}: 24px;
                    ${NH.cssVars[`vir-color-picker-swatch-width`].name}: 24px;
                `}
                ${B(NH.events.colorChange,e=>{n(e.detail)})}
            ></${NH}>
        `:zc(t,Bc.Text)?V`
            <${bH.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${B(bH.events.valueChange,e=>{n(e.detail)})}
            ></${bH}>
        `:zc(t,Bc.Number)?V`
            <${bH.assign({value:e,allowedInputs:/[\d.]/})}
                ${B(bH.events.valueChange,e=>{n(e.detail)})}
            ></${bH}>
        `:zc(t,Bc.Dropdown)?V`
            <${kH.assign({value:e,options:t.options.map(e=>({label:e,value:e}))})}
                ${B(kH.events.valueChange,e=>{n(e.detail)})}
            ></${kH}>
        `:zc(t,Bc.Custom)?t.content:V`
            <p class="error">
                ${t.controlType} controls are not implemented yet.
            </p>
        `}var ZH=WH()({tagName:`book-breadcrumbs`,styles:z`
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
                <${GH.assign({route:{hash:void 0,search:void 0,paths:[vu.Book,...a]},router:e.router})}>
                    ${t}
                </${GH}>
                ${o}
            `}):V`
                &nbsp;
            `}}),QH=WH()({tagName:`book-breadcrumbs-bar`,styles:z`
        :host {
            border-bottom: 1px solid
                ${Bd[`element-book-page-foreground-faint-level-2-color`].value};
            padding: 4px 8px;
            background-color: ${Bd[`element-book-page-background-color`].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return V`
            ${kN(!!e.currentSearch,V`
                    &nbsp;
                `,V`
                    <${ZH.assign({currentRoute:e.currentRoute,router:e.router})}></${ZH}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${B(`input`,async e=>{let n=e.currentTarget;if(!(n instanceof HTMLInputElement))throw TypeError(`Failed to find input element for search.`);let r=n.value;await go({milliseconds:200}),n.value===r&&(n.value?t(new nF({paths:[vu.Search,encodeURIComponent(n.value)]})):t(new nF(bu)))})}
            />
        `}}),$H=WH()({tagName:`book-entry-description`,styles:z`
        :host {
            color: ${Bd[`element-book-page-foreground-faint-level-1-color`].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${Bd[`element-book-page-foreground-color`].value};
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
            `)}}),eU=WH()({tagName:`book-page-wrapper`,styles:z`
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

        ${GH} {
            display: inline-block;
        }
    `,render({inputs:e}){let t=e.isTopLevel?V`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:V`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,n=[vu.Book,...e.pageNode.fullUrlBreadcrumbs],r=e.pageNode.entry.errors.length?rl(e.pageNode.entry.errors):void 0;return r&&console.error(r),V`
            <div class="page-header block-entry">
                <div class="title-group">
                    ${e.blockNavigation?t:V`
                  <${GH.assign({route:{paths:n,hash:void 0,search:void 0},router:e.router})}>
                      ${t}
                  </${GH}>
              `}
                    ${r?V`
                              <${JH.assign({message:r.message})}></${JH}>
                          `:V`
                              <${$H.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${$H}>
                              <${YH.assign({config:e.pageNode.entry.controls,currentValues:pu(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${YH}>
                          `}
                </div>
            </div>
        `}}),tU=WH()({tagName:`book-element-example-title`,styles:z`
        :host {
            display: flex;
            color: ${Bd[`element-book-page-foreground-faint-level-1-color`].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){if(e.blockNavigation)return e.elementExampleNode.entry.title;let t=[vu.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return V`
            <${GH.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${GH}>
        `}}),nU=Symbol(`unset-internal-state`),rU=WH()({tagName:`book-element-example-viewer`,state(){return{isUnset:nU}},render({state:e,inputs:t,updateState:n}){try{if(t.elementExampleNode.entry.errors.length)throw rl(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render==`string`)throw Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===nU&&n({isUnset:void 0,...t.elementExampleNode.entry.state?.()});let r=t.elementExampleNode.entry.render({state:e,updateState:n,controls:t.currentPageControls});if(r instanceof Promise)throw TypeError(`render output cannot be a promise`);return V`
                ${kN(!!t.elementExampleNode.entry.styles,V`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${r}
            `}catch(e){return console.error(`ERROR HERE`,Ne(e)),console.error(e),V`
                <${JH.assign({message:`${t.elementExampleNode.entry.title} failed: ${Ne(e)}`})}></${JH}>
            `}},options:{allowPolymorphicState:!0}}),iU=WH()({tagName:`book-element-example-wrapper`,styles:z`
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

        ${tU} {
            color: ${Bd[`element-book-page-foreground-faint-level-1-color`].value};
        }

        :host(:hover) ${tU} {
            color: ${Bd[`element-book-accent-icon-color`].value};
        }
    `,render({inputs:e}){return V`
            <div class="individual-example-wrapper">
                <${tU.assign({blockNavigation:e.blockNavigation,elementExampleNode:e.elementExampleNode,router:e.router})}></${tU}>
                <${rU.assign(e)}></${rU}>
            </div>
        `}}),aU={milliseconds:10},oU,sU=new Map,cU=new Map;function lU(){return oU||=new IntersectionObserver(e=>{for(let t of e){let e=t.target,n=sU.get(e);if(n)if(t.isIntersecting){if(!cU.has(e)){let t=globalThis.setTimeout(()=>{cU.delete(e),n(),oU?.unobserve(e),sU.delete(e)},uo(aU,{milliseconds:!0}).milliseconds);cU.set(e,t)}}else{let t=cU.get(e);t&&(clearTimeout(t),cU.delete(e))}}},{rootMargin:`100px`}),oU}function uU(e){let t=cU.get(e);t&&(clearTimeout(t),cU.delete(e)),sU.delete(e),oU?.unobserve(e)}var dU=WH()({tagName:`book-lazy-entry`,state(){return{hasRendered:!1,placeholderElement:void 0}},styles:z`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&uU(e.placeholderElement)},render({inputs:e,state:t,updateState:n}){return t.hasRendered?e.content:V`
            <div
                class="placeholder"
                ${SN(e=>{t.placeholderElement&&uU(t.placeholderElement),n({placeholderElement:e}),sU.set(e,()=>{n({hasRendered:!0})}),lU().observe(e)})}
            >
                &nbsp;
            </div>
        `}});function fU(e,t,n,r){let i=du(n,r),o=[];if(i){let n=fU(e,t,i,r);n&&o.push(n)}if(au(n,a.Page)&&!e.includes(n)){let e=pu(t,n.fullUrlBreadcrumbs);o.push({config:n.entry.controls,current:e,breadcrumbs:Ml(e,()=>n.fullUrlBreadcrumbs)})}return o.reduce((e,t)=>({config:{...e.config,...t.config},current:{...e.current,...t.current},breadcrumbs:{...e.breadcrumbs,...t.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function pU({blockNavigation:e,currentNodes:t,isTopLevel:n,router:r,isSearching:i,controls:o,originalTree:s}){if(!t.length&&i)return[V`
                No results
            `];let c=A.isLengthAtLeast(t,1)?fU(t,o,t[0],s):void 0;return[c&&Object.values(c.config).length&&A.isLengthAtLeast(t,1)?V`
                  <${YH.assign({config:c.config,currentValues:c.current,fullUrlBreadcrumbs:c.breadcrumbs})}></${YH}>
              `:j,fN(t,e=>e.fullUrlBreadcrumbs.join(`>`),t=>{if(au(t,a.Page))return V`
                    <${eU.assign({blockNavigation:e,isTopLevel:n,pageNode:t,controls:o,router:r})}
                        class="block-entry"
                    ></${eU}>
                `;if(au(t,a.ElementExample)){let n=pu(o,t.fullUrlBreadcrumbs.slice(0,-1)),i=V`
                    <${iU.assign({blockNavigation:e,elementExampleNode:t,currentPageControls:n,router:r})}></${iU}>
                `;return V`
                    <${dU.assign({content:i})}
                        class="inline-entry ${TM({"block-entry":t.entry.isVertical})}"
                    ></${dU}>
                `}else if(au(t,a.Root))return j;else{let e=V`
                    <${JH.assign({message:`Unknown entry type for rendering: '${t.entry.entryType}'`})}></${JH}>
                `;return V`
                    <${dU.assign({content:e})}
                        class="block-entry"
                    ></${dU}>
                `}})]}var mU=WH()({tagName:`book-entry-display`,state(){return{lastElement:void 0}},styles:z`
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

        ${QH} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${pF[`vira-interaction-animation-duration`].value} forwards;
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
    `,events:{loadingRender:XM()},render:({inputs:e,dispatch:t,events:n,state:r,updateState:i})=>{let a=yu(e.currentRoute.paths),o=pU({blockNavigation:e.blockNavigation,currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!a,controls:e.controls,originalTree:e.originalTree});return V`
            <${QH.assign({currentSearch:a,currentRoute:e.currentRoute,router:e.router})}></${QH}>

            ${kN(e.showLoading,V`
                    <div
                        ${SN(()=>{t(new n.loadingRender(!0))})}
                        class="loading"
                    >
                        <${J.assign({icon:oL})}></${J}>
                    </div>
                    ${kN(!!r.lastElement,V`
                            ${r.lastElement}
                            <slot></slot>
                        `)}
                `,V`
                    <div
                        ${SN(e=>{i({lastElement:e})})}
                        class="all-book-entries-wrapper"
                    >
                        ${o}
                    </div>
                    <slot></slot>
                `)}
        `}});function hU(e,t,n){let r=gU(e,t);return r.length?r:(n(bu),gU(e,bu.paths))}function gU(e,t){return e.filter(e=>Zl({searchFor:t.slice(1),searchIn:e.fullUrlBreadcrumbs}))}var _U=sN()({tagName:`element-book-app`,state(){return{currentRoute:bu,router:void 0,loading:!0,colors:{config:void 0,theme:tP(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:XM()},slotNames:[`footer`,`navHeader`],styles:z`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${Bd[`element-book-page-background-color`].value};
            color: ${Bd[`element-book-page-foreground-color`].value};
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

        ${mU} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${qH} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:n,updateState:r,dispatch:i,events:a,slotNames:o})=>{t._debug&&console.info(`rendering element-book app`);function s(t){return{...e.currentRoute,...t}}function c(t){let n=s(t);return!A.jsonEquals(e.currentRoute,n)}function l(n){t.preventWindowTitleChange||(e.originalWindowTitle||r({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,n].filter(A.isTruthy).join(` - `))}function u(n){if(!c(n))return;let o=s(n);e.router?e.router.setRoute(o):r({currentRoute:{...e.currentRoute,...o}}),t.elementBookRoutePaths&&!A.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new a.pathUpdate(o.paths))}try{if(t.elementBookRoutePaths&&!A.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&u({paths:jl(t.elementBookRoutePaths)}),t.internalRouterConfig?.useInternalRouter&&!e.router){let e=eF(t.internalRouterConfig.basePath);r({router:e}),e.listen(!0,e=>{r({currentRoute:e})})}else !t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();let i={themeColor:t.themeColor};if(!A.jsonEquals(i,e.colors.config)){let e=tP(i);r({colors:{config:i,theme:e}}),Hd(n,e)}let a=t._debug??!1,s=cu({entries:t.pages,debug:a});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info(`regenerating global controls`),r({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:gu(s.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));let d=yu(e.currentRoute.paths),f=(d?vP({flattenedNodes:s.flattenedNodes,searchQuery:d}):void 0)??hU(s.flattenedNodes,e.currentRoute.paths,u);l(f[0]?.entry.title);let p=e.treeBasedControls?.controls;return p?(t._debug&&console.info({currentControls:p}),V`
                <div
                    class="root"
                    ${B(nF,e=>{let t=e.detail;if(c(t)&&(r({loading:!0}),u(t),!(n.shadowRoot.querySelector(qH.tagName)instanceof qH)))throw TypeError(`Failed to find child '${qH.tagName}'`)})}
                    ${B(YH.events.controlValueChange,t=>{if(!e.treeBasedControls)return;let n=hu(p,t.detail.fullUrlBreadcrumbs,t.detail.newValues);r({treeBasedControls:{...e.treeBasedControls,controls:n}})})}
                >
                    ${t.blockNavigation?j:V`
                              <${qH.assign({flattenedNodes:s.flattenedNodes,router:e.router,selectedPath:d?void 0:e.currentRoute.paths.slice(1)})}>
                                  <slot name=${o.navHeader}></slot>
                              </${qH}>
                          `}
                    <${mU.assign({blockNavigation:!!t.blockNavigation,controls:p,currentNodes:f,currentRoute:e.currentRoute,debug:a,originalTree:s.tree,router:e.router,showLoading:e.loading})}
                        ${B(mU.events.loadingRender,async e=>{await nP();let t=n.shadowRoot.querySelector(mU.tagName);t?t.scroll({top:0,behavior:`instant`}):console.error(`Failed to find '${mU.tagName}' for scrolling.`),await nP(),r({loading:!e.detail})})}
                    >
                        <slot name=${o.footer}></slot>
                    </${mU}>
                </div>
            `):V`
                    <${JH.assign({message:`Failed to generate page controls.`})}></${JH}>
                `}catch(e){return console.error(e),V`
                <p class="error">${Ne(e)}</p>
            `}}}),vU=_u({title:`Cards`,parent:void 0,descriptionParagraphs:[`Multiple full cards of structured render data.`]});function yU({newStyles:e,oldStyles:t,shadowRoot:n,maintainFirstStylesheet:r}){if(e!==t){let t=new CSSStyleSheet;return t.replaceSync(e),n.adoptedStyleSheets=[r?Ac.isDefined(n.adoptedStyleSheets[0]):void 0,t].filter(A.isTruthy),!0}return!1}function bU(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var xU=bU();function SU(e){xU=e}var CU={exec:()=>null};function wU(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(EU.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var TU=(()=>{try{return!0}catch{return!1}})(),EU={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,`i`),blockquoteBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}>`)},DU=/^(?:[ \t]*(?:\n|$))+/,OU=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,kU=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,AU=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,jU=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,MU=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,NU=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,PU=wU(NU).replace(/bull/g,MU).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),FU=wU(NU).replace(/bull/g,MU).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),IU=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,LU=/^[^\n]+/,RU=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,zU=wU(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,RU).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),BU=wU(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,MU).getRegex(),VU=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,HU=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,UU=wU(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,HU).replace(`tag`,VU).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),WU=wU(IU).replace(`hr`,AU).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,VU).getRegex(),GU={blockquote:wU(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,WU).getRegex(),code:OU,def:zU,fences:kU,heading:jU,hr:AU,html:UU,lheading:PU,list:BU,newline:DU,paragraph:WU,table:CU,text:LU},KU=wU(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,AU).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,VU).getRegex(),qU={...GU,lheading:FU,table:KU,paragraph:wU(IU).replace(`hr`,AU).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,KU).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,VU).getRegex()},JU={...GU,html:wU(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,HU).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:CU,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:wU(IU).replace(`hr`,AU).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,PU).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},YU=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,XU=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ZU=/^( {2,}|\\)\n(?!\s*$)/,QU=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,$U=/[\p{P}\p{S}]/u,eW=/[\s\p{P}\p{S}]/u,tW=/[^\s\p{P}\p{S}]/u,nW=wU(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,eW).getRegex(),rW=/(?!~)[\p{P}\p{S}]/u,iW=/(?!~)[\s\p{P}\p{S}]/u,aW=/(?:[^\s\p{P}\p{S}]|~)/u,oW=wU(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,TU?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),sW=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,cW=wU(sW,`u`).replace(/punct/g,$U).getRegex(),lW=wU(sW,`u`).replace(/punct/g,rW).getRegex(),uW=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,dW=wU(uW,`gu`).replace(/notPunctSpace/g,tW).replace(/punctSpace/g,eW).replace(/punct/g,$U).getRegex(),fW=wU(uW,`gu`).replace(/notPunctSpace/g,aW).replace(/punctSpace/g,iW).replace(/punct/g,rW).getRegex(),pW=wU(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,tW).replace(/punctSpace/g,eW).replace(/punct/g,$U).getRegex(),mW=wU(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,$U).getRegex(),hW=wU(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,tW).replace(/punctSpace/g,eW).replace(/punct/g,$U).getRegex(),gW=wU(/\\(punct)/,`gu`).replace(/punct/g,$U).getRegex(),_W=wU(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),vW=wU(HU).replace(`(?:-->|$)`,`-->`).getRegex(),yW=wU(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,vW).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),bW=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,xW=wU(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,bW).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),SW=wU(/^!?\[(label)\]\[(ref)\]/).replace(`label`,bW).replace(`ref`,RU).getRegex(),CW=wU(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,RU).getRegex(),wW=wU(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,SW).replace(`nolink`,CW).getRegex(),TW=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,EW={_backpedal:CU,anyPunctuation:gW,autolink:_W,blockSkip:oW,br:ZU,code:XU,del:CU,delLDelim:CU,delRDelim:CU,emStrongLDelim:cW,emStrongRDelimAst:dW,emStrongRDelimUnd:pW,escape:YU,link:xW,nolink:CW,punctuation:nW,reflink:SW,reflinkSearch:wW,tag:yW,text:QU,url:CU},DW={...EW,link:wU(/^!?\[(label)\]\((.*?)\)/).replace(`label`,bW).getRegex(),reflink:wU(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,bW).getRegex()},OW={...EW,emStrongRDelimAst:fW,emStrongLDelim:lW,delLDelim:mW,delRDelim:hW,url:wU(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,TW).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:wU(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,TW).getRegex()},kW={...OW,br:wU(ZU).replace(`{2,}`,`*`).getRegex(),text:wU(OW.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},AW={normal:GU,gfm:qU,pedantic:JU},jW={normal:EW,gfm:OW,breaks:kW,pedantic:DW},MW={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},NW=e=>MW[e];function PW(e,t){if(t){if(EU.escapeTest.test(e))return e.replace(EU.escapeReplace,NW)}else if(EU.escapeTestNoEncode.test(e))return e.replace(EU.escapeReplaceNoEncode,NW);return e}function FW(e){try{e=encodeURI(e).replace(EU.percentDecode,`%`)}catch{return null}return e}function IW(e,t){let n=e.replace(EU.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(EU.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(EU.slashPipe,`|`);return n}function LW(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function RW(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function zW(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function BW(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function VW(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var HW=class{options;rules;lexer;constructor(e){this.options=e||xU}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,``);return{type:`code`,raw:t[0],codeBlockStyle:`indented`,text:this.options.pedantic?e:LW(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=VW(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=LW(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:LW(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=LW(t[0],`
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
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=zW(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),e.task){if(e.text=e.text.replace(this.rules.other.listReplaceTask,``),e.tokens[0]?.type===`text`||e.tokens[0]?.type===`paragraph`){e.tokens[0].raw=e.tokens[0].raw.replace(this.rules.other.listReplaceTask,``),e.tokens[0].text=e.tokens[0].text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}}let t=this.rules.other.listTaskCheckbox.exec(e.raw);if(t){let n={type:`checkbox`,raw:t[0]+` `,checked:t[0]!==`[ ]`};e.checked=n.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=n.raw+e.tokens[0].raw,e.tokens[0].text=n.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(n)):e.tokens.unshift({type:`paragraph`,raw:n.raw,text:n.raw,tokens:[n]}):e.tokens.unshift(n)}}if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:`html`,block:!0,raw:t[0],pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:t[0],href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=IW(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(IW(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:t[0],depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=LW(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=RW(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),BW(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return BW(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},UW=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||xU,this.options.tokenizer=this.options.tokenizer||new HW,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:EU,block:AW.normal,inline:jW.normal};this.options.pedantic?(t.block=AW.pedantic,t.inline=jW.pedantic):this.options.gfm&&(t.block=AW.gfm,this.options.breaks?t.inline=jW.breaks:t.inline=jW.gfm),this.tokenizer.rules=t}static get rules(){return{block:AW,inline:jW}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(EU.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(EU.tabCharGlobal,`    `).replace(EU.spaceLine,``));e;){let r;if(this.options.extensions?.block?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let n=t.at(-1);r.raw.length===1&&n!==void 0?n.raw+=`
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
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``;for(;e;){a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return t}},WW=class{options;parser;constructor(e){this.options=e||xU}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(EU.notSpaceStart)?.[0],i=e.replace(EU.endingNewline,``)+`
`;return r?`<pre><code class="language-`+PW(r)+`">`+(n?i:PW(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:PW(i,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${PW(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=FW(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+PW(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=FW(e);if(i===null)return PW(n);e=i;let a=`<img src="${e}" alt="${PW(n)}"`;return t&&(a+=` title="${PW(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:PW(e.text)}},GW=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},KW=class e{options;renderer;textRenderer;constructor(e){this.options=e||xU,this.options.renderer=this.options.renderer||new WW,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new GW}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},qW=class{options;block;constructor(e){this.options=e||xU}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?UW.lex:UW.lexInline}provideParser(){return this.block?KW.parse:KW.parseInline}},JW=new class{defaults=bU();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=KW;Renderer=WW;TextRenderer=GW;Lexer=UW;Tokenizer=HW;Hooks=qW;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new WW(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new HW(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new qW;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];qW.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&qW.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return UW.lex(e,t??this.defaults)}parser(e,t){return KW.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer():e?UW.lex:UW.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser():e?KW.parse:KW.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer():e?UW.lex:UW.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser():e?KW.parse:KW.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+PW(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function YW(e,t){return JW.parse(e,t)}YW.options=YW.setOptions=function(e){return JW.setOptions(e),YW.defaults=JW.defaults,SU(YW.defaults),YW},YW.getDefaults=bU,YW.defaults=xU,YW.use=function(...e){return JW.use(...e),YW.defaults=JW.defaults,SU(YW.defaults),YW},YW.walkTokens=function(e,t){return JW.walkTokens(e,t)},YW.parseInline=JW.parseInline,YW.Parser=KW,YW.parser=KW.parse,YW.Renderer=WW,YW.TextRenderer=GW,YW.Lexer=UW,YW.lexer=UW.lex,YW.Tokenizer=HW,YW.Hooks=qW,YW.parse=YW,YW.options,YW.setOptions,YW.use,YW.walkTokens,YW.parseInline,KW.parse,UW.lex;var XW=`structured-rendering-markdown-rendering-content-for-screenshot`,ZW=`
.${XW} > *:first-child {
    margin-top: 0;
}
.${XW} > *:last-child {
    margin-bottom: 0;
}
`,QW={accentColor:`dodgerblue`,bodySize:`14px`,h1Size:`22px`,h2Size:`18px`,h3Size:`16px`,h4Size:`15px`,h5Size:`14px`,h6Size:`14px`,bodyGap:`24px`,smallTextSize:`10px`,liSpacing:`4px`,bodyFont:`sans-serif`,codeFont:`monospace`,codeSize:`1em`,codeBackgroundColor:G.colors[`vira-grey-behind-fg-small-body`].background.value,contentSelector:`.${XW}`,tableBorderColor:G.colors[`vira-grey-foreground-decoration`].foreground.value,tableBorderWidth:`1px`,tableHeaderBackgroundColor:G.colors[`vira-grey-behind-bg-invisible`].background.value};function $W(e){return Ml(hl(QW,e),(e,t)=>A.isString(t)?Du(t):t instanceof Eu?t:t.value)}var eG=tG();function tG(e){let t=$W(e);return z`
        ${Du(e?.contentSelector||QW.contentSelector)} {
            display: flex;
            flex-direction: column;
            gap: ${t.bodyGap};
            font-family: ${t.bodyFont};
            font-size: ${t.bodySize};
            align-items: flex-start;

            & * {
                font-family: inherit;
                font-size: inherit;
                ${jF}
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
    `}var nG=sN()({tagName:`vir-markdown`,styles:z`
        :host {
            display: flex;
            flex-direction: column;
        }
    `,state(){return{renderedElement:void 0,sanitizedHtml:uN({async updateCallback(e){let t=await YW.parse(e);return i.sanitize(t)}}),lastStyleString:``}},render({inputs:e,state:t,updateState:n,host:r}){t.sanitizedHtml.update(e.markdownString);let i=String(e.renderStyles||eG);return yU({maintainFirstStylesheet:!0,newStyles:i,oldStyles:t.lastStyleString,shadowRoot:r.shadowRoot})&&n({lastStyleString:i}),ON(t.sanitizedHtml,V`
                <${J.assign({icon:oL})}></${J}>
            `,e=>V`
                    <div
                        class=${XW}
                        ${SN(e=>{e instanceof HTMLElement&&n({renderedElement:e})})}
                    >
                        ${kM(e)}
                    </div>
                `,e=>V`
                    <${LH}>
                        ${Pe(`Failed to parse markdown content.`,e)}
                    </${LH}>
                `)}}),rG={icons:ML,sourceString:`Source`,pluralSourcesString:`Sources`},iG={...rG,styles:eG},aG={...rG,processingString:`Processing`,currentlyExpanded:{},sourceIcon:XI,viewOnPageIcon:tL,processingIcon:oL,expandSourcesOnPrint:!1,hideViewOnPageButtons:!1,isPhoneSize:!1,markdownStyles:eG,createViewOnPageString(e){return`View on page ${e}`},expandAllCards:!1,blockCardExpansion:!1,expandFirstCard:!1,useCardStyles:!1},oG=Sj({x1:-1,y1:-1,x2:-1,y2:-1}),sG=Sj({type:kj(`source`),pageNumbers:Fj([Fj(-1)]),fileName:Fj(``),fileBoundingBoxes:Fj([Fj(oG)]),quote:Fj(``)});function cG(e){return Lc.isLengthAtLeast($c(e).filter(lG),1)}function lG(e){return!!(e&&(e.quote?.trim()||e.fileName||e.pageNumbers?.filter(A.isDefined).length))}var uG=sN()({tagName:`vir-source`,hostClasses:{"vir-source-phone-size":({inputs:e})=>!!e.options?.isPhoneSize},events:{viewOnPageClick:XM()},cssVars:{"vir-source-background-color":G.colors[oF].background.value,"vir-source-borer-radius":K[`vira-form-radius`].value,"vir-source-header-color":G.colors[`vira-grey-foreground-header`].foreground.value,"vir-source-view-on-page-icon-color":K[`vira-form-accent-primary-color`].value,"vir-source-view-on-page-hover-background-color":G.colors[`vira-grey-behind-fg-small-body`].background.value,"vir-source-view-on-page-active-background-color":G.colors[`vira-grey-behind-fg-body`].background.value,"vir-source-font-size":`16px`,"vir-source-phone-font-size":`14px`},styles:({hostClasses:e,cssVars:t})=>z`
        ${LL} {
            background: ${t[`vir-source-background-color`].value};
            border-radius: ${t[`vir-source-borer-radius`].value};
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        p {
            ${jF}
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
                    ${MF};
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
    `,render({inputs:e,dispatch:t,events:n}){let r=cG(e.sources);if(!r)return j;let i=hl(aG,e.options);return V`
            <${LL}>
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
            </${LL}>
        `}}),dG=Sj({type:kj(`icon`),iconKey:``,strokeColor:Fj(``),fillColor:Fj(``),strokeWidth:Fj(Pj(``,-1))});function fG(e,{icons:t}){let n=t[e.iconKey];if(n)return jL(n,{"vira-icon-fill-color":e.fillColor||void 0,"vira-icon-stroke-color":e.strokeColor||void 0,"vira-icon-stroke-width":A.isString(e.strokeWidth)?e.strokeWidth:A.isNumber(e.strokeWidth)?vl({value:e.strokeWidth,suffix:`px`}):void 0})}function pG(e,t){return Sj({type:kj(e),sectionTitle:Fj(``),sources:Fj([Fj(sG)]),...t})}var mG=Sj({type:kj(`empty`)}),hG=pG(`inlineCode`,{code:``}),gG=pG(`tag`,{text:Lj(``),useBigTag:Fj(!1),color:Fj(Pj({custom:Ij({backgroundColor:Fj(``),foregroundColor:Fj(``)})},{variant:Oj(q)}))}),_G=function(e){return e.Faint=`faint`,e.Small=`small`,e.Bold=`bold`,e}({}),vG=pG(`text`,{text:Fj(Lj()),style:Fj(Oj(_G)),icon:Fj(dG)}),yG=pG(`list`,{items:[Sj({content:Fj(Pj(vG,gG,mG)),icon:Fj(dG),sources:Fj([Fj(sG)])})]}),bG=pG(`markdown`,{markdown:``}),xG=Sj({type:kj(`processing`)}),SG=function(e){return e.Left=`left`,e.Right=`right`,e}({}),CG=function(e){return e.Horizontal=`horizontal`,e.Vertical=`vertical`,e}({}),wG=Pj(vG,hG,bG,gG,yG,mG,xG),TG=pG(`table`,{direction:Oj(CG),headers:[{key:``,text:Fj(vG),hidden:Fj(!1)}],entries:[{data:qj({keys:``,values:Pj(Fj(wG),[Fj(wG)])}),sources:Fj([Fj(sG)])}],footerRows:Fj([{alignment:Fj(Oj(SG)),cells:Pj(Fj(wG),[Fj(wG)])}])});function EG(e,t,n,r){return{type:`table`,direction:e,headers:t,entries:n,footerRows:r}}var DG=pG(`codeBlock`,{syntax:Fj(``),code:``}),OG=[DG,hG,mG,yG,bG,gG,xG,sG,TG,vG,dG,pG(`collapsible`,{header:Lj(),content:[Pj(DG,mG,dG,hG,yG,bG,xG,gG,TG,vG)]})];Pj(...OG);var Q=Yc(OG,e=>({key:e.default.type,value:e.default.type}),{useRequired:!0}),kG=YM()(`source-expansion`);function AG(e,t){return NG(e,hl(aG,t),[])}function jG(e){if(e==null)return;if(!A.isString(e))return String(e);let t=e.trim();if(!t)return;let n=t.split(`
`);return n.flatMap((e,t)=>V`
            ${e}${t<n.length-1?V`
                      <br />
                  `:``}
        `)}var MG={icon(e,t){let n=fG(e,t);return n?V`
            <${J.assign({icon:n})}></${J}>
        `:j},codeBlock(e){return V`
            <pre>${e.code}</pre>
        `},collapsible(e,t,n){return V`
            <${BL.assign({rawCollapsible:!0})}>
                <span slot=${BL.slotNames.header}>${String(e.header)}</span>
                ${NG(e.content,t,[...n,`collapsible`])}
            </${BL}>
        `},empty(){},inlineCode(e){return V`
            <code>${e.code}</code>
        `},list(e,t,n){let r=Jc(e.items,(e,r)=>{if(!e.icon&&!e.content)return;let i=[...n,r],a=e.content?NG(e.content,t,[...i,`content`]):void 0,o=V`
                    ${e.icon?NG(e.icon,t,[...i,`icon`]):j}${a}
                `;return V`
                    <li
                        class=${TM({"list-item-with-icon":!!e.icon})}
                    >
                        ${zG(o,t,i,e.sources)}
                    </li>
                `},A.isTruthy);if(r.length)return V`
            <ul>
                ${r}
            </ul>
        `},markdown(e,t){return V`
            <${nG.assign({markdownString:e.markdown,renderStyles:t.markdownStyles})}></${nG}>
        `},tag(e){let t=e.color&&`custom`in e.color&&(e.color.custom.backgroundColor||e.color.custom.foregroundColor)?z`
                      ${e.color.custom.backgroundColor?z`
                                ${UH.cssVars[`vira-tag-background-color`].name}: ${Du(e.color.custom.backgroundColor)};
                            `:z``}
                      ${e.color.custom.foregroundColor?z`
                                ${UH.cssVars[`vira-tag-text-color`].name}: ${Du(e.color.custom.foregroundColor)};
                            `:z``}
                  `:void 0,n=e.color&&`variant`in e.color?e.color.variant:void 0;return V`
            <${UH.assign({text:e.text,color:t?q.None:n,size:e.useBigTag?EF.Medium:EF.Small,emphasis:OF.Subtle})}
                style=${EM(t)}
            ></${UH}>
        `},processing(e,t){return V`
            <${J.assign({icon:t.processingIcon})}></${J}>
            <span>${t.processingString}...</span>
        `},source(e,t){return V`
            <${uG.assign({options:t,sources:e})}></${uG}>
        `},table(e,t,n){if(t.isPhoneSize&&e.direction===CG.Horizontal){let r=Jc(e.headers,(e,r)=>{if(!e.hidden)return{key:e.key,headerIndex:r,renderedContent:e.text?NG(e.text,t,[...n,`headers`,r]):e.key}},A.isTruthy);return V`
                <div class="phone-table-cards">${e.entries.map((e,i)=>{let a=[...n,i],o=Jc(r,n=>{let r=e.data[n.key],i=$c(r).filter(A.isTruthy);if(!i.length)return;let o=Array.from(DM(Jc(i,(e,r)=>NG(e,t,[...a,n.key,r]),A.isTruthy),V`
                                    <br />
                                `));return V`
                            <tr>
                                <th>${n.renderedContent}</th>
                                <td>${o}</td>
                            </tr>
                        `},A.isTruthy),s=cG(e.sources);return V`
                    <${LL} class="phone-table-card">
                        <table class="vertical phone-card-table" cellspacing="0" cellpadding="0">
                            <tbody>${o}</tbody>
                        </table>
                        ${s?.length?zG(V``,t,a,s):j}
                    </${LL}>
                `})}</div>
            `}let{headerRow:r,rows:i}=TH(Jc(e.headers,(e,r)=>{if(!e.hidden)return{key:e.key,content:e.text?NG(e.text,t,[...n,`headers`,r]):e.key}},A.isTruthy),e.entries,(r,i)=>Ml(r.data,(r,a)=>{let o=$c(a).filter(A.isTruthy);if(o.length)return Array.from(DM(Jc(o,(a,o)=>{let s=`sources`in a?{sources:e.direction===CG.Vertical?void 0:a.sources}:{};return NG({...a,...s},t,[...n,i,r,o])},A.isTruthy),V`
                                <br />
                            `))}),{orientation:e.direction===CG.Horizontal?wH.Vertical:wH.Horizontal}),a=i.map(t=>{let n=t.cells.at(-1);return cG([...$c(e.direction===CG.Vertical&&n?$c(n.data?.data[n.key]).filter(A.isTruthy).flatMap(e=>`sources`in e?$c(e.sources):[]):void 0),...$c(t.data?.sources)])}),o=a.some(e=>!!e?.length),s=i[0]?.cells.length||0;return V`
            <table
                cellspacing="0"
                cellpadding="0"
                class=${TM({vertical:e.direction===CG.Vertical,horizontal:e.direction===CG.Horizontal,"wide-table":e.direction===CG.Horizontal&&r?r.length>5:e.direction===CG.Vertical&&i[0]?i[0].cells.length>5:!1})}
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
                    ${i.map((r,i)=>{let s=[...n,i],c=a[i],l=r.cells.map((n,i)=>{let a=i===r.cells.length-1,o=e.direction===CG.Vertical&&i===0?`th`:`td`,l=V`
                                <${o}>${n.content}</${o}>
                            `;return c?.length&&a?V`
                                    ${l}
                                    <td class="source-cell">
                                        ${LG(``,t,s,c)}
                                    </td>
                                `:l}),u=c?.length?V`
                                  <tr class="source-row">
                                      <td colspan=${l.length}>
                                          ${RG(t,s,c)}
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
                              ${e.footerRows.map((e,r)=>{let i=$c(e.cells);if(!i.length)return j;let a=e.alignment===SG.Right?s-i.length+1:0;return V`
                                      <tr>${i.map((e,i)=>{let o=i?0:a,s=o<1?void 0:o,c=e?NG(e,t,[...n,`footers`,r,i]):j;return V`
                                          <td
                                              colspan=${EM(s)}
                                              class=${TM({"right-aligned-footer-cell":!!s})}
                                          >
                                              ${c}
                                          </td>
                                      `})}</tr>
                                  `})}
                          </tfoot>
                      `:j}
            </table>
        `},text(e,t,n){let r=jG(e.text),i=e.style?`text-style-${e.style}`:void 0;if(r)return V`
            ${NG(e.icon,t,[...n,`icon`])}
            <span
                class=${[i,`text-section-text-content`].join(` `)}
            >
                ${r}
            </span>
        `}};function NG(e,t,n){return IG(e,t,n,!1).filter(A.isTruthy)}var PG=ml(Q,e=>[e,`section`].join(`-`)),FG=`structured-render-section`;function IG(e,t,n,r){if(!e)return[];if(A.isArray(e))return e.flatMap((e,i)=>IG(e,t,[...n,i],r));if(`type`in e){let i=`sectionTitle`in e&&n.length>0&&!(r&&n.at(-1)===0)&&e.sectionTitle||void 0,a=MG[e.type](e,t,n),o=`sources`in e&&e.sources||void 0,s=V`
            <div
                class=${TM({"section-wrapper":!0,"top-section-wrapper":r,[PG[e.type]]:!0})}
                ${NN(FG)}
                ${NN(PG[e.type])}
            >
                ${zG(a,t,n,o)}
            </div>
        `;return[i?V`
                      <h3>${i}</h3>
                  `:void 0,s]}else if(`sections`in e){let r=IG(e.sections,t,[...n,`sections`],!0),i=e.cardTitleIcon?NG(e.cardTitleIcon,t,[...n,`cardTitleIcon`]):j;return[V`
                <${BL.assign({expandOnPrint:!0,rawCollapsible:!t.useCardStyles,blockExpansion:t.blockCardExpansion,hideHeader:!e.cardTitle,startExpanded:t.expandAllCards||t.expandFirstCard&&n.at(-1)===0})}
                    class=${TM({"raw-collapsible-card":!t.useCardStyles})}
                >
                    <h2
                        slot=${BL.slotNames.header}
                        class="card-title ${TM({"card-title-with-icon":!!e.cardTitleIcon})}"
                    >
                        ${i}${e.cardTitle}
                    </h2>
                    ${r}
                </${BL}>
            `]}else throw Fc.tsType(e).equals(),Error(`Unexpected structured render type: ${y(e)}`)}function LG(e,t,n,r){let i=cG(r),a=[...n,`source-icon`],o=BG(a),s=!!t.currentlyExpanded[o];return V`
        <div class="source-content-wrapper">${e}${i?V`
              <div class="source-icon-wrapper">
                  <button class="source-icon-button">
                      <${J.assign({icon:t.sourceIcon,fitContainer:!0})}
                          ${B(`click`,e=>{lP(e,HTMLElement).dispatchEvent(new kG({expanded:!s,key:BG(a)}))})}
                      ></${J}>
                  </button>
              </div>
          `:j}</div>
    `}function RG(e,t,n){let r=cG(n);if(!r)return;let i=BG([...t,`source-icon`]),a=!!e.currentlyExpanded[i],o=V`
        <${uG.assign({options:e,sources:r})}></${uG}>
    `;return e.isPhoneSize?V`
            <${IH.assign({open:a,drawerTitle:e.pluralSourcesString})}
                ${B(IH.events.drawerClose,e=>{lP(e,HTMLElement).dispatchEvent(new kG({expanded:!1,key:i}))})}
            >
                ${o}
            </${IH}>
        `:V`
        <${zL.assign({expanded:a,expandOnPrint:e.expandSourcesOnPrint})}
            class="collapsible-source-wrapper ${TM({"expanded-source":a})}"
        >
            <span slot=${zL.slotNames.header}></span>
            ${o}
        </${zL}>
    `}function zG(e,t,n,r){return V`
        ${LG(e,t,n,r)}
        ${RG(t,n,r)}
    `}function BG(e){return[`key`,...e].join(`;`).replaceAll(` `,`_`).replaceAll(/[^\w;]/g,``)}var VG=z`
    .source-content-wrapper {
        display: flex;

        & > *:last-child:not(table) {
            flex-grow: 1;
        }
    }

    .collapsible-source-wrapper {
        border: none;

        &:not(.expanded-source) {
            ${FF}
        }
    }

    .expanded-source {
        margin: 8px 0 !important;
    }

    .source-icon-button {
        ${MF};
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
`,HG=sN()({tagName:`vir-expandable-source`,state(){return{currentlyExpanded:{}}},styles:z`
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

        ${VG}
    `,render({inputs:e,state:t,updateState:n}){let r=hl(aG,{...e.options,currentlyExpanded:{...e.options?.currentlyExpanded,...t.currentlyExpanded}});return V`
            <div
                ${B(kG,e=>{n({currentlyExpanded:{...t.currentlyExpanded,[e.detail.key]:e.detail.expanded}})})}
            >
                ${zG(V`
                        <slot></slot>
                    `,r,[`expandable-source`],e.sources)}
            </div>
        `}}),UG=z`4px`,$=sN()({tagName:`vir-structured-render`,state(){return{currentlyExpanded:{},lastStyleString:``}},cssVars:{"vir-structured-render-h1-font-size":`24px`,"vir-structured-render-h2-font-size":`18px`,"vir-structured-render-h3-font-size":`16px`,"vir-structured-render-small-font-size":`12px`},hostClasses:{"vir-structured-render-phone-size":({inputs:e})=>!!e.options?.isPhoneSize,"vir-structured-render-tablet-size":({inputs:e})=>!!e.options?.isTabletSize},styles:({cssVars:e,hostClasses:t})=>z`
        :host {
            ${mH(G.colors[oF])}
        }

        ${J} {
            flex-shrink: 0;
        }

        :host,
        .${Du(XW)}.${Du(XW)}.${Du(XW)} {
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

            & ${UH} {
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

        .text-style-${Du(_G.Faint)}.text-style-${Du(_G.Faint)}.text-style-${Du(_G.Faint)}.text-style-${Du(_G.Faint)} {
            color: ${G.colors[`vira-grey-foreground-non-body`].foreground.value};
        }
        .text-style-${Du(_G.Bold)}.text-style-${Du(_G.Bold)}.text-style-${Du(_G.Bold)}.text-style-${Du(_G.Bold)} {
            font-weight: bold;
        }
        .text-style-${Du(_G.Small)}.text-style-${Du(_G.Small)}.text-style-${Du(_G.Small)}.text-style-${Du(_G.Small)} {
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

            ${BL.cssVars[`vira-collapsible-card-content-gap`].name}: 8px;
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

        ${VG}

        .${Du(XW)}.${Du(XW)}.${Du(XW)}.${Du(XW)} {
            ul {
                ${jF}
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
                margin-right: ${UG};
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
            margin-right: ${UG};
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
    `,render({inputs:e,state:t,updateState:n,host:r}){let i=String(e.options?.markdownStyles||eG);yU({maintainFirstStylesheet:!0,newStyles:i,oldStyles:t.lastStyleString,shadowRoot:r.shadowRoot})&&n({lastStyleString:i});let a=AG(e.data,{...e.options,currentlyExpanded:{...e.options?.currentlyExpanded,...t.currentlyExpanded}});return V`
            <div
                ${B(kG,e=>{n({currentlyExpanded:{...t.currentlyExpanded,[e.detail.key]:e.detail.expanded}})})}
                class=${XW}
            >
                ${a}
            </div>
        `}});async function WG(){let e=await r(()=>import(`./src-BApbG1tj.js`),__vite__mapDeps([0,1,2,3,4,5]));return e.default||e}function GG(e,t){return eK(e,hl(iG,t)).filter(A.isTruthy).join(`

`)}var KG={[_G.Bold]:`**`};function qG(e,t,n){let r=e.entries.length+1,i=t.map(t=>[t.text?GG(t.text,n):t.key,...e.entries.map(e=>GG(e.data[t.key],n))]);return[Qc(r,()=>``),...i]}function JG(e,t,n){return[t.map(e=>e.text?GG(e.text,n):e.key),...e.entries.map(e=>t.map(t=>GG(e.data[t.key],n)))]}var YG={[CG.Vertical]:qG,[CG.Horizontal]:JG},XG={icon(e,t){let n=fG(e,t);return n?GN(n.svgTemplate):``},collapsible(){return``},codeBlock(e){return`\`\`\`${e.syntax||``}\n${e.code}\n\`\`\``},inlineCode(e){return`\`${e.code}\``},empty(){return``},list(e,t){return Jc(e.items,e=>{let n=GG(e.content,t),r=GG(e.icon,t);if(n){let i=r?`- ${r} ${n}`:`- ${n}`,a=(e.sources||[]).map(e=>GG(e,t)).filter(A.isTruthy).join(`
`);return a?`${i}\n${a}`:i}else return``},A.isTruthy).join(`
`)},markdown(e){return e.markdown},tag(e){return e.text==null?``:String(e.text)},processing(){return``},source(e,t){let n=e.pageNumbers?.filter(A.isDefined),r=n?.length?`p. ${n.join(`, `)}`:``,i=[e.fileName,r].filter(A.isTruthy).join(`, `);return i?`<small>${t.sourceString}: ${i}</small>`:``},table(e,t){let n=e.headers.filter(e=>!e.hidden),r=YG[e.direction](e,n,t),i=ZG(r,r[0].length||0),[a,...o]=r;return[QG(a,i),$G(i),...o.map(e=>QG(e,i))].join(`
`)},text(e,t){if(e.text==null)return``;let n=e.style&&KG[e.style]||``,r=GG(e.icon,t),i=Hl({value:String(e.text),wrapper:n});return r?`${r} ${i}`:i}};function ZG(e,t){return Qc(t,t=>e.reduce((e,n,r)=>Math.max(e,Ac.isDefined(n[t],`No cell at row index ${r}, column index ${t}`).length),3))}function QG(e,t){return`| ${e.map((e,n)=>e.padEnd(t[n]??3)).join(` | `)} |`}function $G(e){return`| ${e.map(e=>`-`.repeat(e)).join(` | `)} |`}function eK(e,t,n=!1){if(!e)return[];if(A.isArray(e))return e.flatMap(e=>GG(e,t));if(`type`in e){let r=`sectionTitle`in e&&!n?e.sectionTitle:void 0,i=`sources`in e&&e.sources||[];return[r?`### ${r}`:void 0,XG[e.type](e,t),...i.map(e=>GG(e,t))]}else if(`sections`in e)return[e.cardTitle&&`## ${e.cardTitle}`,...e.sections.flatMap((e,n)=>eK(e,t,n===0))].filter(A.isTruthy);else throw Fc.tsType(e).equals(),Error(`Unexpected structured render type: ${y(e)}`)}var tK=function(e){return e.ArrayBuffer=`arraybuffer`,e.Blob=`blob`,e.BlobUri=`bloburi`,e.BlobUrl=`bloburl`,e.DataUriString=`datauristring`,e.DataUrlString=`dataurlstring`,e.DataUri=`datauri`,e.DataUrl=`dataurl`,e.DataUrlNewWindow=`dataurlnewwindow`,e.PdfObjectNewWindow=`pdfobjectnewwindow`,e.PdfJsNewWindow=`pdfjsnewwindow`,e.Download=`download`,e}({}),nK=function(e){return e.Img=`img`,e.DataUriString=`datauristring`,e.DataUrlString=`dataurlstring`,e.DataUri=`datauri`,e.DataUrl=`dataurl`,e.Download=`download`,e}({});function rK(e){return{margin:[25,15],filename:e,image:{type:`jpeg`,quality:.98},html2canvas:{scale:2,logging:!1,scrollX:0,scrollY:0,useCORS:!0},jsPDF:{unit:`mm`,format:`a4`,orientation:`portrait`},pagebreak:{mode:[`css`,`legacy`]}}}async function iK(e,{fileName:t,outputType:n,options:r}){if(!x(ye.Web))throw Error(`${uK.name} cannot run outside of a browser.`);let a=hl(iG,r),[o]=await Promise.all([WG(),cK()]),s=await YW.parse(GG(e,a)),c=GN(V`
        <div class=${XW}>${i.sanitize(s)}</div>
    `),l=rK(t),u=await aK(c,String(a.styles),l),d=o().set(l).from(u);if(n.pdf)if(n.pdf===tK.Download){let e=await d.outputPdf(tK.Blob),n=URL.createObjectURL(e),r=globalThis.document.createElement(`a`);r.href=n,r.download=t.endsWith(`.pdf`)?t:`${t}.pdf`,r.style.display=`none`,globalThis.document.body.append(r),r.click(),r.remove(),URL.revokeObjectURL(n);return}else return await d.outputPdf(n.pdf,{filename:t});else if(n.image)return n.image===nK.Download?await d.toImg().save(t):await d.outputImg(n.image);else throw Fc.tsType(n).equals(),Error(`Invalid output type: ${y(n)}`)}async function aK(e,t,n){let r=lK(n.margin),i=210-r[1]-r[3],a=globalThis.document.createElement(`iframe`);a.style.position=`fixed`,a.style.left=`-10000px`,a.style.top=`0`,a.style.width=`${i}mm`,a.style.height=`0`,a.style.border=`none`,a.setAttribute(`aria-hidden`,`true`),a.srcdoc=[`<!DOCTYPE html><html><head><style>`,ZW,t,`</style></head><body style="margin:0;padding:0;">`,e,`</body></html>`].join(``),globalThis.document.body.append(a);try{await new Promise(e=>{a.addEventListener(`load`,()=>{e()},{once:!0})});let e=Ac.isDefined(a.contentDocument);await e.fonts.ready;let t=Ac.isDefined(e.body.firstElementChild);return a.style.height=`${e.body.scrollHeight}px`,await nP(3),await sK()(t,{...n.html2canvas})}finally{a.remove()}}var oK;function sK(){if(!oK)throw Error(`html2canvas has not been loaded yet. Call preloadHtml2Canvas() first.`);return oK}async function cK(){oK||=(await r(async()=>{let{default:t}=await import(`./html2canvas-Celz28Md.js`).then(t=>e(t.default,1));return{default:t}},__vite__mapDeps([6,5,1]))).default}function lK(e){return e==null?[0,0,0,0]:typeof e==`number`?[e,e,e,e]:e.length===2?[e[0],e[1],e[0],e[1]]:[e[0],e[1],e[2],e[3]]}async function uK(t,{saveLocationPath:n,outputType:a,options:o}){if(x(ye.Web))throw Error(`${uK.name} cannot run inside of a browser.`);let s=hl(iG,o),{chromium:c}=await r(async()=>{let{chromium:e}=await import(`playwright`);return{chromium:e}},[]),{readFile:l,writeFile:u,mkdir:d}=await r(async()=>{let{readFile:e,writeFile:t,mkdir:n}=await import(`node:fs/promises`);return{readFile:e,writeFile:t,mkdir:n}},[]),{createRequire:f}=await r(async()=>{let{createRequire:t}=await import(`./__vite-browser-external-BTBVzKTI.js`).then(t=>e(t.default,1));return{createRequire:t}},__vite__mapDeps([7,8,1])),{basename:p,dirname:m}=await r(async()=>{let{basename:e,dirname:t}=await import(`node:path`);return{basename:e,dirname:t}},[]),h=f(import.meta.url),[g,ee]=await Promise.all([l(h.resolve(`html2pdf.js/dist/html2pdf.bundle.min.js`),`utf-8`),l(h.resolve(`dompurify/dist/purify.min.js`),`utf-8`)]),_=await YW.parse(GG(t,s)),te=await c.launch();try{let e=await te.newPage(),t=await dK(_,await e.evaluate(()=>navigator.userAgent)),r=GN(V`
            <style id="styles">
                ${s.styles}
            </style>
        `);await e.setContent(r,{waitUntil:`networkidle`}),await e.addScriptTag({content:g}),await e.addScriptTag({content:ee});let o=rK(p(n));a.image&&(o.image={type:`png`});let c=(await e.evaluate(async({html2pdfOptions:e,outputType:t,dirtyMarkdown:n,wrapperClass:r,outputImageType:a,outputPdfType:o})=>{let s=i.sanitize(n),c=html2pdf().set(e).from(`<div class="${r}">${s}</div>`);if(t.image)return await c.outputImg(a,{filename:e.filename});if(t.pdf)return await c.outputPdf(o,{filename:e.filename});throw Error(`Invalid output type selected.`)},{html2pdfOptions:o,outputType:a,dirtyMarkdown:t,wrapperClass:XW,outputImageType:nK.DataUriString,outputPdfType:tK.DataUriString})).split(`,`)[1];await d(m(n),{recursive:!0}),await u(n,Buffer.from(c,`base64`))}finally{await te.close()}return n}async function dK(t,n){let{JSDOM:i}=await r(async()=>{let{JSDOM:t}=await import(`./api-BXxBRfOb.js`).then(t=>e(t.default,1));return{JSDOM:t}},__vite__mapDeps([9,1,8])),a=new i(t),o=[...a.window.document.querySelectorAll(`img`)].filter(e=>/^https?:\/\//.test(e.src));if(o.length===0)return t;let s=new Map;return await Zc(o,async e=>{if(!s.has(e.src))try{let t=await fetch(e.src,{headers:{"User-Agent":n}});if(!t.ok)return;let r=t.headers.get(`content-type`)||`image/jpeg`,i=await t.arrayBuffer(),a=Buffer.from(i).toString(`base64`);s.set(e.src,`data:${r};base64,${a}`)}catch{return}let t=s.get(e.src);t&&(e.src=t)}),a.window.document.body.innerHTML}async function fK(e,{pdfOutputType:t,...n}){if(!x(ye.Web))throw Error(`${fK.name} cannot run outside of a browser.`);return iK(e,{outputType:{pdf:t||tK.Download},...n})}async function pK(e,t){if(!x(ye.Web))throw Error(`${pK.name} cannot run outside of a browser.`);let n=await iK(e,{outputType:{pdf:tK.Blob},...t}),r=URL.createObjectURL(n),i=navigator.userAgent.toLowerCase(),a=i.includes(`firefox`),o=/iphone|ipad|ipod/.test(i)||i.includes(`macintosh`)&&navigator.maxTouchPoints>1;if(a||o){if(!globalThis.window.open(r))throw URL.revokeObjectURL(r),Error(`Failed to open print window. Check your popup blocker settings.`);return}let s=globalThis.document.createElement(`iframe`);s.style.position=`fixed`,s.style.left=`-10000px`,s.style.top=`0`,s.style.width=`1px`,s.style.height=`1px`,s.style.border=`none`,s.style.opacity=`0`,s.src=r,globalThis.document.body.append(s),await new Promise(e=>{s.addEventListener(`load`,()=>{e()},{once:!0})});let c=s.contentWindow;if(!c){URL.revokeObjectURL(r),s.remove();return}return await nP(3),await go({milliseconds:250}),await nP(3),new Promise(e=>{function t(){URL.revokeObjectURL(r),s.remove(),e()}let n=!1;function i(){n||(n=!0,globalThis.window.removeEventListener(`focus`,a),t())}function a(){i()}c.addEventListener(`afterprint`,()=>{i()},{once:!0}),globalThis.window.addEventListener(`focus`,a,{once:!0}),c.print()})}var mK=[{cardTitle:`Frontend Performance`,cardTitleIcon:{type:Q.icon,iconKey:TL.name,strokeColor:`green`},sections:[{type:Q.text,sectionTitle:`Overview`,text:`Frontend performance metrics collected from the last 30 days of production monitoring.`,sources:[{type:`source`,fileName:`performance-report-2026-02.pdf`,pageNumbers:[1,2],quote:`Metrics aggregated from real user monitoring (RUM) data across all production traffic.`}]},{type:Q.table,sectionTitle:`Core Web Vitals`,direction:CG.Horizontal,sources:[{type:`source`,fileName:`lighthouse-audit.json`,pageNumbers:[3],quote:`Core Web Vitals thresholds based on Chrome UX Report field data.`},{type:`source`,fileName:`web-vitals-spec.md`,quote:`Targets align with Google recommended thresholds for good user experience.`}],headers:[{key:`metric`},{key:`p50`},{key:`p95`},{key:`target`},{key:`status`}],entries:[{data:{metric:{type:Q.text,text:`Largest Contentful Paint`,style:_G.Bold},p50:{type:Q.inlineCode,code:`1.2s`},p95:{type:Q.inlineCode,code:`2.8s`},target:{type:Q.text,text:`< 2.5s`},status:{type:Q.tag,text:`Pass`,color:{variant:q.Positive}}}},{data:{metric:{type:Q.text,text:`First Input Delay`,style:_G.Bold},p50:{type:Q.inlineCode,code:`12ms`},p95:{type:Q.inlineCode,code:`85ms`},target:{type:Q.text,text:`< 100ms`},status:{type:Q.tag,text:`Pass`,color:{variant:q.Positive}}}},{data:{metric:{type:Q.text,text:`Cumulative Layout Shift`,style:_G.Bold},p50:{type:Q.inlineCode,code:`0.18`},p95:{type:Q.inlineCode,code:`0.32`},target:{type:Q.text,text:`< 0.1`},status:{type:Q.tag,text:`Fail`,color:{variant:q.Danger}}},sources:[{type:`source`,fileName:`cls-regression-analysis.pdf`,pageNumbers:[7],quote:`CLS spike correlated with hero image carousel added in v3.12.0.`}]},{data:{metric:{type:Q.text,text:`Time to First Byte`,style:_G.Bold},p50:{type:Q.inlineCode,code:`210ms`},p95:{type:Q.inlineCode,code:`480ms`},target:{type:Q.text,text:`< 600ms`},status:{type:Q.tag,text:`Pass`,color:{variant:q.Positive}}}}]},{type:Q.list,sectionTitle:`Recommendations`,items:[{content:{type:Q.text,text:`Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images.`},icon:{type:Q.icon,iconKey:DL.name,strokeColor:`red`},sources:[{type:`source`,fileName:`frontend-performance-review-2026-q1.pdf`,pageNumbers:[4],quote:`Layout shifts primarily caused by images without explicit dimensions.`},{type:`source`,fileName:`web-vitals-optimization-guide.md`,quote:`Lazy loading below-the-fold content reduces initial page weight and improves LCP.`}]},{icon:{type:Q.icon,iconKey:DL.name,strokeColor:`red`},content:{type:Q.text,text:`Add explicit width and height attributes to all image elements.`,sources:[{type:`source`,fileName:`cls-regression-analysis.pdf`,pageNumbers:[8],quote:`Missing width/height attributes on images are the primary contributor to layout shift.`}]}},{content:{type:Q.text,text:`Consider lazy loading below-the-fold content.`},sources:[{type:`source`,fileName:`frontend-performance-review-2026-q1.pdf`,pageNumbers:[4],quote:`Layout shifts primarily caused by images without explicit dimensions.`},{type:`source`,fileName:`web-vitals-optimization-guide.md`,quote:`Lazy loading below-the-fold content reduces initial page weight and improves LCP.`}]}]},{type:Q.list,sectionTitle:`Action Items`,items:[{content:{type:Q.text,text:`Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions.`},icon:{type:Q.icon,iconKey:DL.name,strokeColor:`orange`}},{content:{type:Q.text,text:`Enable native lazy loading on below-the-fold images.`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`green`}},{content:{type:Q.text,text:`Defer non-critical third-party scripts.`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`green`}}]},EG(CG.Vertical,[{key:`age`,text:{type:Q.text,text:`Age`}},{key:`dateOfBirth`,text:{type:Q.text,text:`DoB`}},{key:`bloodPressure`,text:{type:Q.text,text:`Blood Pressure`}},{key:`bmi`,text:{type:Q.text,text:`BMI`}},{key:`heartRate`,text:{type:Q.text,text:`Heart Rate`}},{key:`oxygenSaturation`,text:{type:Q.text,text:`Oxygen Saturation`}},{key:`pain`,text:{type:Q.text,text:`Pain`}},{key:`language`,text:{type:Q.text,text:`Language`}},{key:`respiratory`,text:{type:Q.text,text:`Respiratory Rate`}},{key:`sex`,text:{type:Q.text,text:`Sex`}},{key:`temperature`,text:{type:Q.text,text:`Temperature`}},{key:`weight`,text:{type:Q.text,text:`Weight`}},{key:`height`,text:{type:Q.text,text:`Height`}},{key:`zipCode`,text:{type:Q.text,text:`Zip Code`}}],[{data:{age:{type:Q.text,text:`72`,sources:[{type:Q.source,fileName:`intake-form.pdf`,pageNumbers:[1],quote:`Age: 72`}]},dateOfBirth:{type:Q.text,text:`01/15/1954`,sources:[{type:Q.source,fileName:`intake-form.pdf`,pageNumbers:[1],quote:`DOB: 01/15/1954`}]},bloodPressure:{type:Q.text,text:`130 / 85`,sources:[{type:Q.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`BP: 130/85 mmHg`}]},bmi:{type:Q.text,text:`27.3`,sources:[{type:Q.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`BMI: 27.3`}]},heartRate:{type:Q.text,text:`78 bpm`,sources:[{type:Q.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`HR: 78 bpm`}]},height:{type:Q.text,text:`170 cm`},oxygenSaturation:{type:Q.text,text:`96%, on room air`,sources:[{type:Q.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`SpO2: 96% on RA`}]},pain:{type:Q.text,text:`4/10`,sources:[{type:Q.source,fileName:`nursing-notes.pdf`,pageNumbers:[3],quote:`Pain score: 4/10`}]},language:{type:Q.text,text:`English`},respiratory:{type:Q.text,text:`18 breaths/min`,sources:[{type:Q.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`RR: 18 breaths/min`}]},sex:{type:Q.text,text:`Male`},temperature:{type:Q.text,text:`98.6 °F`,sources:[{type:Q.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`Temp: 98.6°F`}]},weight:{type:Q.text,text:`185 lbs`,sources:[{type:Q.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`Weight: 185 lbs`}]},zipCode:{type:Q.text,text:`90210`,sources:[{type:Q.source,fileName:`intake-form.pdf`,pageNumbers:[1],quote:`Zip: 90210`}]}}}])]},{cardTitle:`Backend API Health`,sections:[{type:Q.markdown,sectionTitle:`Status Summary`,sources:[{type:`source`,fileName:`uptime-monitor-export.csv`,quote:`Uptime percentages calculated from 5-minute health check intervals.`}],markdown:[`All **12 services** are operational. Average uptime over the past 30 days: **99.97%**.`,``,`| Service | Uptime |`,`|---------|--------|`,`| Auth | 99.99% |`,`| Users | 99.98% |`,`| Notifications | 99.91% |`,`| Billing | 100% |`].join(`
`)},{type:Q.table,sectionTitle:`Endpoint Latency (ms)`,direction:CG.Vertical,headers:[{key:`endpoint`},{key:`getUsers`},{key:`createUser`},{key:`getReport`},{key:`sendNotification`}],entries:[{data:{endpoint:{type:Q.text,text:`p50`},getUsers:{type:Q.inlineCode,code:`45`},createUser:{type:Q.inlineCode,code:`120`},getReport:{type:Q.inlineCode,code:`890`},sendNotification:{type:Q.inlineCode,code:`65`}}},{data:{endpoint:{type:Q.text,text:`p99`},getUsers:{type:Q.inlineCode,code:`180`},createUser:{type:Q.inlineCode,code:`450`},getReport:{type:Q.inlineCode,code:`3200`},sendNotification:{type:Q.inlineCode,code:`210`}}}]},{type:Q.codeBlock,sectionTitle:`Slow Query Sample`,syntax:`sql`,code:[`SELECT r.id, r.title, r.created_at,`,`       u.name AS author_name,`,`       COUNT(c.id) AS comment_count`,`FROM reports r`,`JOIN users u ON u.id = r.author_id`,`LEFT JOIN comments c ON c.report_id = r.id`,`WHERE r.created_at > NOW() - INTERVAL '30 days'`,`GROUP BY r.id, r.title, r.created_at, u.name`,`ORDER BY r.created_at DESC`,`LIMIT 100;`].join(`
`)}]},{cardTitle:`Deployment Pipeline`,sections:[{type:Q.text,sectionTitle:`Current State`,text:`The CI/CD pipeline is fully automated with staging and production environments.`,icon:{type:Q.icon,iconKey:TL.name,strokeColor:`green`}},{type:Q.table,sectionTitle:`Recent Deployments`,direction:CG.Horizontal,sources:[{type:`source`,fileName:`ci-pipeline-logs.txt`,pageNumbers:[12,15,18,22],quote:`Deployment records extracted from CI/CD pipeline execution logs.`}],headers:[{key:`version`},{key:`environment`},{key:`date`},{key:`duration`},{key:`status`}],entries:[{data:{version:{type:Q.inlineCode,code:`v3.14.2`},environment:{type:Q.tag,text:`Production`,color:{variant:q.Positive}},date:{type:Q.text,text:`2026-02-28`},duration:{type:Q.text,text:`4m 22s`},status:{type:Q.tag,text:`Success`,color:{variant:q.Positive}}}},{data:{version:{type:Q.inlineCode,code:`v3.14.1`},environment:{type:Q.tag,text:`Production`,color:{variant:q.Positive}},date:{type:Q.text,text:`2026-02-25`},duration:{type:Q.text,text:`3m 58s`},status:{type:Q.tag,text:`Success`,color:{variant:q.Positive}}}},{data:{version:{type:Q.inlineCode,code:`v3.14.0`},environment:{type:Q.tag,text:`Staging`,color:{variant:q.Warning}},date:{type:Q.text,text:`2026-02-24`},duration:{type:Q.text,text:`5m 01s`},status:{type:Q.tag,text:`Rolled Back`,color:{variant:q.Danger}}}},{data:{version:{type:Q.inlineCode,code:`v3.13.9`},environment:{type:Q.tag,text:`Production`,color:{variant:q.Positive}},date:{type:Q.text,text:`2026-02-20`},duration:{type:Q.text,text:`4m 10s`},status:{type:Q.tag,text:`Success`,color:{variant:q.Positive}}}}]},{type:Q.list,sectionTitle:`Pipeline Steps`,items:[{content:{type:Q.text,text:`Lint and type check.`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`green`}},{content:{type:Q.text,text:`Unit and integration tests.`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`green`}},{content:{type:Q.text,text:`Build production bundle.`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`green`}},{content:{type:Q.text,text:`Deploy to staging.`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`green`}},{content:{type:Q.text,text:`E2E smoke tests.`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`green`}},{content:{type:Q.text,text:`Promote to production.`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`green`}}]},{type:Q.codeBlock,sectionTitle:`Pipeline Config Snippet`,syntax:`yaml`,code:[`stages:`,`  - name: lint`,`    command: npm run lint`,`  - name: test`,`    command: npm test`,`    parallel: true`,`  - name: build`,`    command: npm run build`,`  - name: deploy-staging`,`    command: deploy --env staging`,`  - name: e2e`,`    command: npm run test:e2e`,`  - name: deploy-production`,`    command: deploy --env production`,`    requires: [e2e]`].join(`
`)},{type:Q.collapsible,sectionTitle:`Collapsible Details`,header:`Rollback Procedure`,content:[{type:Q.text,text:`If a deployment fails health checks, the pipeline automatically triggers a rollback to the previous stable version.`},{type:Q.codeBlock,syntax:`bash`,code:[`#!/bin/bash`,`deploy rollback --env production --to-version $LAST_STABLE`,`notify --channel ops --message "Rollback initiated"`].join(`
`)}]},{type:Q.collapsible,header:`Environment Variables`,content:[{type:Q.table,direction:CG.Horizontal,headers:[{key:`variable`},{key:`staging`},{key:`production`}],entries:[{data:{variable:{type:Q.inlineCode,code:`NODE_ENV`},staging:{type:Q.tag,text:`staging`,color:{variant:q.Warning}},production:{type:Q.tag,text:`production`,color:{variant:q.Positive}}}},{data:{variable:{type:Q.inlineCode,code:`LOG_LEVEL`},staging:{type:Q.text,text:`debug`},production:{type:Q.text,text:`warn`}}}]}]},{type:Q.collapsible,header:`Post-Deploy Checklist`,content:[{type:Q.list,items:[{content:{type:Q.text,text:`Verify health check endpoints return 200.`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`green`}},{content:{type:Q.text,text:`Confirm error rate stays below 0.1% threshold.`},icon:{type:Q.icon,iconKey:DL.name,strokeColor:`orange`}},{content:{type:Q.text,text:`Monitor p99 latency for 15 minutes.`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`green`}}]}]}]}],hK=_u({title:`Multi Card`,parent:vU,descriptionParagraphs:[`Multiple cards rendered together to demonstrate complex multi-card layouts.`],defineExamples({defineExample:e}){e({title:`three cards`,styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return V`
                    <${$.assign({data:mK,options:{useCardStyles:!0}})}></${$}>
                `}}),e({title:`three cards phone size`,styles:z`
                :host {
                    max-width: 400px;
                }
            `,render(){return V`
                    <${$.assign({data:mK,options:{useCardStyles:!0,isPhoneSize:!0}})}></${$}>
                `}})}}),gK=_u({title:`Block Expansion`,parent:vU,descriptionParagraphs:[`Cards rendered with blockCardExpansion enabled, which forces all sections expanded and disables toggling.`],defineExamples({defineExample:e}){e({title:`all sections locked open`,styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return V`
                    <${$.assign({data:mK,options:{useCardStyles:!0,blockCardExpansion:!0}})}></${$}>
                `}})}}),_K=_u({title:`Dense Data`,parent:vU,descriptionParagraphs:[`A single card packed with many sections, large tables, lists, code blocks, and markdown to stress-test rendering.`],defineExamples({defineExample:e}){e({title:`comprehensive product analysis`,styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:[{cardTitle:`Comprehensive Product Analysis`,sections:[{type:Q.text,sectionTitle:`Executive Summary`,text:`This analysis covers product adoption, feature usage, customer feedback, technical debt, and roadmap progress across all three product lines.`,style:_G.Bold},{type:Q.markdown,sectionTitle:`Adoption Trends`,markdown:[`### Monthly Active Users`,``,`Growth has been **steady** across all tiers:`,``,`- **Free tier**: 14,200 MAU (+8% MoM)`,`- **Pro tier**: 3,800 MAU (+12% MoM)`,`- **Enterprise tier**: 420 MAU (+3% MoM)`,``,`### Retention`,``,`Day-7 retention: **68%** | Day-30 retention: **41%** | Day-90 retention: **28%**`,``,`> The largest drop-off occurs between day 7 and day 14, suggesting onboarding improvements could have significant impact.`].join(`
`)},{type:Q.table,sectionTitle:`Feature Usage Matrix`,direction:CG.Horizontal,headers:[{key:`feature`},{key:`freeTier`},{key:`proTier`},{key:`enterpriseTier`},{key:`satisfaction`},{key:`trend`}],entries:[{data:{feature:{type:Q.text,text:`Dashboard`,style:_G.Bold},freeTier:{type:Q.text,text:`92%`},proTier:{type:Q.text,text:`97%`},enterpriseTier:{type:Q.text,text:`99%`},satisfaction:{type:Q.tag,text:`4.5 / 5`,color:{variant:q.Positive}},trend:{type:Q.tag,text:`Stable`,color:{variant:q.Positive}}}},{data:{feature:{type:Q.text,text:`Export (PDF/Image)`,style:_G.Bold},freeTier:{type:Q.text,text:`34%`},proTier:{type:Q.text,text:`78%`},enterpriseTier:{type:Q.text,text:`91%`},satisfaction:{type:Q.tag,text:`3.8 / 5`,color:{variant:q.Warning}},trend:{type:Q.tag,text:`Growing`,color:{variant:q.Positive}}}},{data:{feature:{type:Q.text,text:`API Access`,style:_G.Bold},freeTier:{type:Q.text,text:`5%`},proTier:{type:Q.text,text:`42%`},enterpriseTier:{type:Q.text,text:`88%`},satisfaction:{type:Q.tag,text:`4.1 / 5`,color:{variant:q.Positive}},trend:{type:Q.tag,text:`Growing`,color:{variant:q.Positive}}}},{data:{feature:{type:Q.text,text:`Collaboration`,style:_G.Bold},freeTier:{type:Q.text,text:`18%`},proTier:{type:Q.text,text:`61%`},enterpriseTier:{type:Q.text,text:`95%`},satisfaction:{type:Q.tag,text:`4.3 / 5`,color:{variant:q.Positive}},trend:{type:Q.tag,text:`Stable`,color:{variant:q.Positive}}}},{data:{feature:{type:Q.text,text:`Custom Themes`,style:_G.Bold},freeTier:{type:Q.text,text:`0%`},proTier:{type:Q.text,text:`29%`},enterpriseTier:{type:Q.text,text:`67%`},satisfaction:{type:Q.tag,text:`3.2 / 5`,color:{variant:q.Warning}},trend:{type:Q.tag,text:`Declining`,color:{variant:q.Danger}}}},{data:{feature:{type:Q.text,text:`Webhooks`,style:_G.Bold},freeTier:{type:Q.text,text:`0%`},proTier:{type:Q.text,text:`15%`},enterpriseTier:{type:Q.text,text:`72%`},satisfaction:{type:Q.tag,text:`4.0 / 5`,color:{variant:q.Positive}},trend:{type:Q.tag,text:`Growing`,color:{variant:q.Positive}}}}]},{type:Q.list,sectionTitle:`Customer Feedback Themes`,items:[{content:{type:Q.text,text:`Export quality needs improvement (mentioned 47 times).`},icon:{type:Q.icon,iconKey:DL.name,strokeColor:`orange`}},{content:{type:Q.text,text:`Dashboard customization is highly valued (mentioned 82 times).`},icon:{type:Q.icon,iconKey:SL.name,strokeColor:`gold`}},{content:{type:Q.text,text:`API documentation could be more complete (mentioned 31 times).`},icon:{type:Q.icon,iconKey:DL.name,strokeColor:`orange`}},{content:{type:Q.text,text:`Real-time collaboration is a top-requested feature (mentioned 64 times).`},icon:{type:Q.icon,iconKey:SL.name,strokeColor:`gold`}},{content:{type:Q.text,text:`Mobile experience needs significant work (mentioned 28 times).`},icon:{type:Q.icon,iconKey:DL.name,strokeColor:`red`}}]},{type:Q.codeBlock,sectionTitle:`Top API Usage Pattern`,syntax:`typescript`,code:[`import {createClient} from '@product/sdk';`,``,`const client = createClient({`,`    apiKey: process.env.PRODUCT_API_KEY,`,`    baseUrl: 'https://api.product.com/v2',`,`});`,``,`const report = await client.reports.create({`,`    title: 'Weekly Summary',`,`    sections: [`,`        {type: 'chart', dataSource: 'revenue'},`,`        {type: 'table', dataSource: 'transactions'},`,`        {type: 'text', content: 'Generated automatically.'},`,`    ],`,`    format: 'pdf',`,`});`,``,`await client.reports.export(report.id, {`,`    destination: 's3://reports-bucket/weekly/',`,`});`].join(`
`)},{type:Q.table,sectionTitle:`Technical Debt Inventory`,direction:CG.Horizontal,headers:[{key:`item`},{key:`severity`},{key:`age`},{key:`effort`},{key:`impact`}],entries:[{data:{item:{type:Q.text,text:`Legacy auth middleware.`},severity:{type:Q.tag,text:`High`,color:{variant:q.Danger}},age:{type:Q.text,text:`18 months`},effort:{type:Q.text,text:`3 sprints`},impact:{type:Q.text,text:`Blocks SSO integration.`}}},{data:{item:{type:Q.text,text:`Untyped API responses.`},severity:{type:Q.tag,text:`Medium`,color:{variant:q.Warning}},age:{type:Q.text,text:`12 months`},effort:{type:Q.text,text:`2 sprints`},impact:{type:Q.text,text:`Frequent runtime errors.`}}},{data:{item:{type:Q.text,text:`Duplicated validation logic.`},severity:{type:Q.tag,text:`Medium`,color:{variant:q.Warning}},age:{type:Q.text,text:`9 months`},effort:{type:Q.text,text:`1 sprint`},impact:{type:Q.text,text:`Inconsistent error messages.`}}},{data:{item:{type:Q.text,text:`Missing database indexes.`},severity:{type:Q.tag,text:`High`,color:{variant:q.Danger}},age:{type:Q.text,text:`6 months`},effort:{type:Q.text,text:`0.5 sprint`},impact:{type:Q.text,text:`Slow report generation.`}}},{data:{item:{type:Q.text,text:`Outdated test fixtures.`},severity:{type:Q.tag,text:`Low`,color:{custom:{backgroundColor:`#e0e0e0`,foregroundColor:`#333`}}},age:{type:Q.text,text:`4 months`},effort:{type:Q.text,text:`1 sprint`},impact:{type:Q.text,text:`Reduced test reliability.`}}}]},{type:Q.markdown,sectionTitle:`Roadmap Progress`,markdown:[`### Q1 2026 Goals`,``,`| Goal | Status | Completion |`,`|------|--------|------------|`,`| SSO Integration | In Progress | 60% |`,`| Mobile App v1 | In Progress | 35% |`,`| API v3 | Planning | 10% |`,`| Export Overhaul | Complete | 100% |`,`| Webhook Reliability | Complete | 100% |`,``,`### Q2 2026 Planned`,``,`- Real-time collaboration MVP.`,`- Custom theme builder.`,`- Advanced analytics dashboard.`,`- Internationalization (i18n) support.`].join(`
`)},{type:Q.list,sectionTitle:`Key Risks`,items:[{content:{type:Q.text,text:`SSO integration depends on legacy auth refactor completing first.`,style:_G.Bold},icon:{type:Q.icon,iconKey:DL.name,strokeColor:`red`}},{content:{type:Q.text,text:`Mobile app timeline may slip due to design resource constraints.`},icon:{type:Q.icon,iconKey:DL.name,strokeColor:`orange`}},{content:{type:Q.text,text:`API v3 design needs broader stakeholder input before implementation.`}},{content:{type:Q.text,text:`Real-time collaboration requires WebSocket infrastructure not yet provisioned.`},icon:{type:Q.icon,iconKey:DL.name,strokeColor:`orange`}}]},{type:Q.text,sectionTitle:`Prepared By`,text:`Product & Engineering Team, March 2026.`,style:_G.Faint}]}]})}></${$}>
                `}})}}),vK=_u({title:`Expand All`,parent:vU,descriptionParagraphs:[`Cards rendered with expandAllCards enabled, which starts all sections expanded but still allows toggling.`],defineExamples({defineExample:e}){e({title:`all sections start expanded`,styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return V`
                    <${$.assign({data:mK,options:{useCardStyles:!0,expandAllCards:!0}})}></${$}>
                `}})}}),yK=_u({title:`Full Card`,parent:vU,descriptionParagraphs:[`Demos of VirStructuredRender with full StructuredRenderData (card arrays).`],defineExamples({defineExample:e}){e({title:`single card with many sections`,styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:[{cardTitle:`Project Health Report`,sections:[{type:Q.text,sectionTitle:`Summary`,text:`Overall project health is good. Most metrics are within acceptable ranges, though a few areas require attention.`},{type:Q.markdown,sectionTitle:`Key Findings`,markdown:[`### Strengths`,``,`- **Code coverage** has improved from 72% to 89% over the past quarter.`,`- Build times remain under 3 minutes for the full suite.`,`- Zero critical vulnerabilities in the latest dependency audit.`,``,`### Areas for Improvement`,``,`1. Documentation coverage for public APIs is at 64%.`,`2. Integration test flakiness has risen to 4.2%.`,`3. Bundle size has grown 18% since the last review.`].join(`
`)},{type:Q.table,sectionTitle:`Module Metrics`,direction:CG.Horizontal,headers:[{key:`module`},{key:`coverage`},{key:`buildTime`},{key:`status`}],entries:[{data:{module:{type:Q.text,text:`Core`},coverage:{type:Q.inlineCode,code:`94%`},buildTime:{type:Q.text,text:`42s`},status:{type:Q.tag,text:`Healthy`,color:{variant:q.Positive}}}},{data:{module:{type:Q.text,text:`Rendering`},coverage:{type:Q.inlineCode,code:`88%`},buildTime:{type:Q.text,text:`28s`},status:{type:Q.tag,text:`Healthy`,color:{variant:q.Positive}}}},{data:{module:{type:Q.text,text:`Data Layer`},coverage:{type:Q.inlineCode,code:`71%`},buildTime:{type:Q.text,text:`1m 14s`},status:{type:Q.tag,text:`Needs Attention`,color:{variant:q.Warning}}}},{data:{module:{type:Q.text,text:`CLI Tools`},coverage:{type:Q.inlineCode,code:`82%`},buildTime:{type:Q.text,text:`19s`},status:{type:Q.tag,text:`Healthy`,color:{variant:q.Positive}}}}]},{type:Q.codeBlock,sectionTitle:`Sample Config`,syntax:`json`,code:JSON.stringify({project:`structured-render`,coverageThreshold:80,maxBuildTimeSeconds:180,modules:[`core`,`rendering`,`data-layer`,`cli-tools`]},null,4)},{type:Q.list,sectionTitle:`Action Items`,items:[{content:{type:Q.text,text:`Increase data layer test coverage to 80%.`},icon:{type:Q.icon,iconKey:DL.name,strokeColor:`orange`}},{content:{type:Q.text,text:`Investigate and fix flaky integration tests.`},icon:{type:Q.icon,iconKey:DL.name,strokeColor:`orange`}},{content:{type:Q.text,text:`Audit bundle size and remove unused dependencies.`}},{content:{type:Q.text,text:`Add missing JSDoc to public API functions.`}},{content:{type:Q.text,text:`Schedule quarterly security review.`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`green`}}]},{type:Q.text,sectionTitle:`Next Review`,text:`Scheduled for Q3 2026.`,style:_G.Faint}]}]})}></${$}>
                `}})}}),bK=_u({title:`No Card Styles`,parent:vU,descriptionParagraphs:[`Cards rendered without card wrapper styles. Cards stack flush with thin borders between them.`],defineExamples({defineExample:e}){e({title:`flat card list`,styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return V`
                    <${$.assign({data:mK})}></${$}>
                `}})}}),xK=_u({title:`Examples`,parent:void 0,descriptionParagraphs:[`Examples of specific functionality.`]}),SK=_u({title:`Download and Print`,parent:xK,descriptionParagraphs:[`Demonstrates downloading and printing structured render data as a PDF.`],defineExamples({defineExample:e}){e({title:`print`,state(){return{isLoading:!1,isError:!1}},render({state:e,updateState:t}){return V`
                    <${FL.assign({text:`Print`,isDisabled:e.isLoading,icon:e.isError?CL:e.isLoading?oL:void 0})}
                        ${B(`click`,async()=>{t({isLoading:!0});try{await pK(mK,{fileName:`structured-render-print`})}catch(e){Tl.error(`Failed to print PDF`,e),t({isError:!0})}finally{t({isLoading:!1})}})}
                    ></${FL}>
                `}}),e({title:`download`,state(){return{isLoading:!1,isError:!1}},render({state:e,updateState:t}){return V`
                    <${FL.assign({text:`Download`,isDisabled:e.isLoading,icon:e.isError?CL:e.isLoading?oL:void 0})}
                        ${B(`click`,async()=>{t({isLoading:!0});try{await fK(mK,{fileName:`structured-render-download`,pdfOutputType:tK.Download})}catch(e){Tl.error(`Failed to download PDF`,e),t({isError:!0})}finally{t({isLoading:!1})}})}
                    ></${FL}>
                `}})}}),CK=_u({title:`Expandable Source`,parent:xK,descriptionParagraphs:[`Demonstrates VirExpandableSource, a self-contained element that renders a source icon button which expands to reveal source details.`],defineExamples({defineExample:e}){e({title:`single source`,styles:z`
                :host {
                    max-width: 400px;
                }
            `,render(){return V`
                    <${HG.assign({sources:{type:Q.source,fileName:`example.pdf`,pageNumbers:[3],fileBoundingBoxes:null,quote:`This is a quoted passage from the source document.`}})}>
                        <span>Some content with a source</span>
                    </${HG}>
                `}}),e({title:`multiple sources`,styles:z`
                :host {
                    max-width: 400px;
                }
            `,render(){return V`
                    <${HG.assign({sources:[{type:Q.source,fileName:`report.pdf`,pageNumbers:[1,2],fileBoundingBoxes:null,quote:`First source quote.`},{type:Q.source,fileName:`notes.pdf`,pageNumbers:[5],fileBoundingBoxes:null,quote:`Second source quote.`}]})}>
                        <span>Content with multiple sources</span>
                    </${HG}>
                `}}),e({title:`without quote`,styles:z`
                :host {
                    max-width: 400px;
                }
            `,render(){return V`
                    <${HG.assign({sources:{type:Q.source,fileName:`data.csv`,pageNumbers:null,fileBoundingBoxes:null,quote:null}})}>
                        <span>Content with a file-only source</span>
                    </${HG}>
                `}})}}),wK=_u({title:`Sections`,parent:void 0,descriptionParagraphs:[`All structured render section types.`]}),TK=[_u({title:`Code Block`,parent:wK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.codeBlock,sectionTitle:`Code Block Example`,code:`const hello = "world";
console.log(hello);`,syntax:`typescript`}})}></${$}>
                `}}),e({title:`no syntax`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.codeBlock,code:`plain text code block
with multiple lines`,syntax:null}})}></${$}>
                `}})}}),_u({title:`Empty`,parent:wK,defineExamples({defineExample:e}){e({title:`empty`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.empty}})}></${$}>
                `}})}}),_u({title:`Icon`,parent:wK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.icon,iconKey:SL.name}})}></${$}>
                `}}),e({title:`colored stroke`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.icon,iconKey:SL.name,strokeColor:`gold`}})}></${$}>
                `}}),e({title:`colored fill`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.icon,iconKey:TL.name,fillColor:`lime`}})}></${$}>
                `}})}}),_u({title:`Inline Code`,parent:wK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.inlineCode,sectionTitle:`Inline Code Example`,code:`const x = 42;`}})}></${$}>
                `}})}}),_u({title:`List`,parent:wK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.list,sectionTitle:`List Example`,items:[{content:{type:Q.text,text:`First item`}},{content:{type:Q.text,text:`Second item`}},{content:{type:Q.text,text:`Third item`}}]}})}></${$}>
                `}}),e({title:`with icons`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.list,sectionTitle:`List with Icons`,items:[{content:{type:Q.text,text:`Completed task`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`green`}},{content:{type:Q.text,text:`Another completed task`},icon:{type:Q.icon,iconKey:TL.name,strokeColor:`green`}}]}})}></${$}>
                `}}),e({title:`with tags`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.list,sectionTitle:`List with Tags`,items:[{content:{type:Q.tag,text:`Important`,color:{variant:q.Warning}}},{content:{type:Q.tag,text:`Info`}}]}})}></${$}>
                `}})}}),_u({title:`Markdown`,parent:wK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
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
                `}})}}),_u({title:`Processing`,parent:wK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.processing}})}></${$}>
                `}})}}),_u({title:`Source`,parent:wK,defineExamples({defineExample:e}){e({title:`with file name`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.source,fileName:`example.ts`,pageNumbers:null,fileBoundingBoxes:null,quote:null}})}></${$}>
                `}}),e({title:`with quote`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.source,fileName:`document.pdf`,pageNumbers:[1,2],fileBoundingBoxes:null,quote:`This is the relevant quote from the source document.`}})}></${$}>
                `}}),e({title:`with page numbers`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.source,fileName:`report.pdf`,pageNumbers:[5,10,15],fileBoundingBoxes:null,quote:null}})}></${$}>
                `}})}}),_u({title:`Table`,parent:wK,defineExamples({defineExample:e}){e({title:`horizontal`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.table,sectionTitle:`Horizontal Table`,direction:CG.Horizontal,headers:[{key:`name`},{key:`value`}],entries:[{data:{name:{type:Q.text,text:`Alpha`},value:{type:Q.text,text:`100`}}},{data:{name:{type:Q.text,text:`Beta`},value:{type:Q.text,text:`200`}}}]}})}></${$}>
                `}}),e({title:`vertical`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.table,sectionTitle:`Vertical Table`,direction:CG.Vertical,headers:[{key:`feature`},{key:`status`}],entries:[{data:{feature:{type:Q.text,text:`Image Export`},status:{type:Q.tag,text:`Supported`}}},{data:{feature:{type:Q.text,text:`PDF Export`},status:{type:Q.tag,text:`Beta`}}}]}})}></${$}>
                `}}),e({title:`horizontal table with phone size`,render(){return V`
                    <div
                        style=${z`
                            width: 400px;
                        `}
                    >
                        <${$.assign({data:{type:Q.table,sectionTitle:`Horizontal Table (Phone)`,direction:CG.Horizontal,headers:[{key:`name`},{key:`value`},{key:`status`}],entries:[{data:{name:{type:Q.text,text:`Alpha`},value:{type:Q.text,text:`100`},status:{type:Q.tag,text:`Active`,color:{variant:q.Positive}}}},{data:{name:{type:Q.text,text:`Beta`},value:{type:Q.text,text:`200`},status:{type:Q.tag,text:`Inactive`,color:{variant:q.Warning}}}}]},options:{useCardStyles:!0,isPhoneSize:!0}})}></${$}>
                    </div>
                `}}),e({title:`with mixed cell types`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.table,sectionTitle:`Mixed Cell Types`,direction:CG.Horizontal,headers:[{key:`label`},{key:`detail`}],entries:[{data:{label:{type:Q.text,text:`Status`},detail:{type:Q.tag,text:`Active`,color:{variant:q.Positive}}}},{data:{label:{type:Q.text,text:`Version`},detail:{type:Q.inlineCode,code:`v1.0.0`}}}]}})}></${$}>
                `}})}}),_u({title:`Tag`,parent:wK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.tag,sectionTitle:`Tag Example`,text:`Default Tag`}})}></${$}>
                `}}),e({title:`custom colors`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.tag,text:`Custom Colors`,color:{custom:{backgroundColor:`#e74c3c`,foregroundColor:`#ffffff`}}}})}></${$}>
                `}}),e({title:`big tag`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.tag,text:`Big Tag`,useBigTag:!0}})}></${$}>
                `}})}}),_u({title:`Text`,parent:wK,defineExamples({defineExample:e}){e({title:`basic`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.text,sectionTitle:`Text Example`,text:`This is a simple text section.`}})}></${$}>
                `}}),e({title:`bold`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.text,text:`Bold text section.`,style:_G.Bold}})}></${$}>
                `}}),e({title:`small`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.text,text:`Small text section.`,style:_G.Small}})}></${$}>
                `}}),e({title:`faint`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.text,text:`Faint text section.`,style:_G.Faint}})}></${$}>
                `}}),e({title:`with icon`,render(){return V`
                    <${$.assign({options:{useCardStyles:!0},data:{type:Q.text,text:`Text with icon.`,icon:{type:Q.icon,iconKey:SL.name,strokeColor:`gold`}}})}></${$}>
                `}})}}),yK,hK,_K,gK,vK,bK,SK,CK,vU,xK,wK];sN()({tagName:`vir-app`,styles:z`
        :host {
            display: flex;
            flex-grow: 1;
        }

        ${_U} {
            flex-grow: 1;
        }

        p {
            ${jF}
            text-align: center;
            font-size: 32px;
            font-weight: bold;
            padding: 0 8px;
            padding-bottom: 8px;
        }
    `,render(){return V`
            <${_U.assign({pages:TK,internalRouterConfig:{useInternalRouter:!0,basePath:`structured-render/demo`}})}>
                <p slot=${_U.slotNames.navHeader}>Structured<br>Render</p>
            </${_U}>
        `}});