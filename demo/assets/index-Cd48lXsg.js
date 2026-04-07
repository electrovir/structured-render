const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/es-BML9sJ2L.js","assets/chunk-DseTPa7n.js"])))=>i.map(i=>d[i]);
import{i as e,n as t,t as n}from"./chunk-DseTPa7n.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var r;(function(e){e.ElementExample=`element-example`,e.Page=`page`,e.Root=`root`})(r||={});function i(e,t=e=>e){let n=new Map;return e.filter(e=>{let r=t(e);return n.get(r)?!1:(n.set(r,e),!0)})}var a=class{diff(e,t,n={}){let r;typeof n==`function`?(r=n,n={}):`callback`in n&&(r=n.callback);let i=this.castInput(e,n),a=this.castInput(t,n),o=this.removeEmpty(this.tokenize(i,n)),s=this.removeEmpty(this.tokenize(a,n));return this.diffWithOptionsObj(o,s,n,r)}diffWithOptionsObj(e,t,n,r){let i=e=>{if(e=this.postProcess(e,n),r){setTimeout(function(){r(e)},0);return}else return e},a=t.length,o=e.length,s=1,c=a+o;n.maxEditLength!=null&&(c=Math.min(c,n.maxEditLength));let l=n.timeout??1/0,u=Date.now()+l,d=[{oldPos:-1,lastComponent:void 0}],f=this.extractCommon(d[0],t,e,0,n);if(d[0].oldPos+1>=o&&f+1>=a)return i(this.buildValues(d[0].lastComponent,t,e));let p=-1/0,m=1/0,h=()=>{for(let r=Math.max(p,-s);r<=Math.min(m,s);r+=2){let s,c=d[r-1],l=d[r+1];c&&(d[r-1]=void 0);let u=!1;if(l){let e=l.oldPos-r;u=l&&0<=e&&e<a}let h=c&&c.oldPos+1<o;if(!u&&!h){d[r]=void 0;continue}if(s=!h||u&&c.oldPos<l.oldPos?this.addToPath(l,!0,!1,0,n):this.addToPath(c,!1,!0,1,n),f=this.extractCommon(s,t,e,r,n),s.oldPos+1>=o&&f+1>=a)return i(this.buildValues(s.lastComponent,t,e))||!0;d[r]=s,s.oldPos+1>=o&&(m=Math.min(m,r-1)),f+1>=a&&(p=Math.max(p,r+1))}s++};if(r)(function e(){setTimeout(function(){if(s>c||Date.now()>u)return r(void 0);h()||e()},0)})();else for(;s<=c&&Date.now()<=u;){let e=h();if(e)return e}}addToPath(e,t,n,r,i){let a=e.lastComponent;return a&&!i.oneChangePerToken&&a.added===t&&a.removed===n?{oldPos:e.oldPos+r,lastComponent:{count:a.count+1,added:t,removed:n,previousComponent:a.previousComponent}}:{oldPos:e.oldPos+r,lastComponent:{count:1,added:t,removed:n,previousComponent:a}}}extractCommon(e,t,n,r,i){let a=t.length,o=n.length,s=e.oldPos,c=s-r,l=0;for(;c+1<a&&s+1<o&&this.equals(n[s+1],t[c+1],i);)c++,s++,l++,i.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return l&&!i.oneChangePerToken&&(e.lastComponent={count:l,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=s,c}equals(e,t,n){return n.comparator?n.comparator(e,t):e===t||!!n.ignoreCase&&e.toLowerCase()===t.toLowerCase()}removeEmpty(e){let t=[];for(let n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}castInput(e,t){return e}tokenize(e,t){return Array.from(e)}join(e){return e.join(``)}postProcess(e,t){return e}get useLongestToken(){return!1}buildValues(e,t,n){let r=[],i;for(;e;)r.push(e),i=e.previousComponent,delete e.previousComponent,e=i;r.reverse();let a=r.length,o=0,s=0,c=0;for(;o<a;o++){let e=r[o];if(e.removed)e.value=this.join(n.slice(c,c+e.count)),c+=e.count;else{if(!e.added&&this.useLongestToken){let r=t.slice(s,s+e.count);r=r.map(function(e,t){let r=n[c+t];return r.length>e.length?r:e}),e.value=this.join(r)}else e.value=this.join(t.slice(s,s+e.count));s+=e.count,e.added||(c+=e.count)}}return r}};new class extends a{};function o(e,t){let n;for(n=0;n<e.length&&n<t.length;n++)if(e[n]!=t[n])return e.slice(0,n);return e.slice(0,n)}function s(e,t){let n;if(!e||!t||e[e.length-1]!=t[t.length-1])return``;for(n=0;n<e.length&&n<t.length;n++)if(e[e.length-(n+1)]!=t[t.length-(n+1)])return e.slice(-n);return e.slice(-n)}function c(e,t,n){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return n+e.slice(t.length)}function l(e,t,n){if(!t)return e+n;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+n}function u(e,t){return c(e,t,``)}function d(e,t){return l(e,t,``)}function f(e,t){return t.slice(0,p(e,t))}function p(e,t){let n=0;e.length>t.length&&(n=e.length-t.length);let r=t.length;e.length<t.length&&(r=e.length);let i=Array(r),a=0;i[0]=0;for(let e=1;e<r;e++){for(t[e]==t[a]?i[e]=i[a]:i[e]=a;a>0&&t[e]!=t[a];)a=i[a];t[e]==t[a]&&a++}a=0;for(let r=n;r<e.length;r++){for(;a>0&&e[r]!=t[a];)a=i[a];e[r]==t[a]&&a++}return a}function m(e,t){let n=[];for(let r of Array.from(t.segment(e))){let e=r.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(e)?n[n.length-1]+=e:n.push(e)}return n}function h(e,t){if(t)return ee(e,t)[1];let n;for(n=e.length-1;n>=0&&e[n].match(/\s/);n--);return e.substring(n+1)}function g(e,t){if(t)return ee(e,t)[0];let n=e.match(/^\s*/);return n?n[0]:``}function ee(e,t){if(!t)return[g(e),h(e)];if(t.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);let n=m(e,t),r=n[0],i=n[n.length-1];return[/\s/.test(r)?r:``,/\s/.test(i)?i:``]}var te=`a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}`,ne=RegExp(`[${te}]+|\\s+|[^${te}]`,`ug`),re=new class extends a{equals(e,t,n){return n.ignoreCase&&(e=e.toLowerCase(),t=t.toLowerCase()),e.trim()===t.trim()}tokenize(e,t={}){let n;if(t.intlSegmenter){let r=t.intlSegmenter;if(r.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);n=m(e,r)}else n=e.match(ne)||[];let r=[],i=null;return n.forEach(e=>{/\s/.test(e)?i==null?r.push(e):r.push(r.pop()+e):i!=null&&/\s/.test(i)?r[r.length-1]==i?r.push(r.pop()+e):r.push(i+e):r.push(e),i=e}),r}join(e){return e.map((e,t)=>t==0?e:e.replace(/^\s+/,``)).join(``)}postProcess(e,t){if(!e||t.oneChangePerToken)return e;let n=null,r=null,i=null;return e.forEach(e=>{e.added?r=e:e.removed?i=e:((r||i)&&ae(n,i,r,e,t.intlSegmenter),n=e,r=null,i=null)}),(r||i)&&ae(n,i,r,null,t.intlSegmenter),e}};function ie(e,t,n){return n?.ignoreWhitespace!=null&&!n.ignoreWhitespace?se(e,t,n):re.diff(e,t,n)}function ae(e,t,n,r,i){if(t&&n){let[a,f]=ee(t.value,i),[p,m]=ee(n.value,i);if(e){let r=o(a,p);e.value=l(e.value,p,r),t.value=u(t.value,r),n.value=u(n.value,r)}if(r){let e=s(f,m);r.value=c(r.value,m,e),t.value=d(t.value,e),n.value=d(n.value,e)}}else if(n){if(e){let e=g(n.value,i);n.value=n.value.substring(e.length)}if(r){let e=g(r.value,i);r.value=r.value.substring(e.length)}}else if(e&&r){let n=g(r.value,i),[a,f]=ee(t.value,i),p=o(n,a);t.value=u(t.value,p);let m=s(u(n,p),f);t.value=d(t.value,m),r.value=c(r.value,n,m),e.value=l(e.value,n,n.slice(0,n.length-m.length))}else if(r){let e=g(r.value,i),n=f(h(t.value,i),e);t.value=d(t.value,n)}else if(e){let n=f(h(e.value,i),g(t.value,i));t.value=u(t.value,n)}}var oe=new class extends a{tokenize(e){let t=RegExp(`(\\r?\\n)|[${te}]+|[^\\S\\n\\r]+|[^${te}]`,`ug`);return e.match(t)||[]}};function se(e,t,n){return oe.diff(e,t,n)}var ce=new class extends a{constructor(){super(...arguments),this.tokenize=ue}equals(e,t,n){return n.ignoreWhitespace?((!n.newlineIsToken||!e.includes(`
`))&&(e=e.trim()),(!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(e.endsWith(`
`)&&(e=e.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(e,t,n)}};function le(e,t,n){return ce.diff(e,t,n)}function ue(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));let n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let e=0;e<r.length;e++){let i=r[e];e%2&&!t.newlineIsToken?n[n.length-1]+=i:n.push(i)}return n}function de(e){return e==`.`||e==`!`||e==`?`}new class extends a{tokenize(e){let t=[],n=0;for(let r=0;r<e.length;r++){if(r==e.length-1){t.push(e.slice(n));break}if(de(e[r])&&e[r+1].match(/\s/)){for(t.push(e.slice(n,r+1)),r=n=r+1;e[r+1]?.match(/\s/);)r++;t.push(e.slice(n,r+1)),n=r+1}}return t}},new class extends a{tokenize(e){return e.split(/([{}:;,]|\s+)/)}},new class extends a{constructor(){super(...arguments),this.tokenize=ue}get useLongestToken(){return!0}castInput(e,t){let{undefinedReplacement:n,stringifyReplacer:r=(e,t)=>t===void 0?n:t}=t;return typeof e==`string`?e:JSON.stringify(fe(e,null,null,r),null,`  `)}equals(e,t,n){return super.equals(e.replace(/,([\r\n])/g,`$1`),t.replace(/,([\r\n])/g,`$1`),n)}};function fe(e,t,n,r,i){t||=[],n||=[],r&&(e=r(i===void 0?``:i,e));let a;for(a=0;a<t.length;a+=1)if(t[a]===e)return n[a];let o;if(Object.prototype.toString.call(e)===`[object Array]`){for(t.push(e),o=Array(e.length),n.push(o),a=0;a<e.length;a+=1)o[a]=fe(e[a],t,n,r,String(a));return t.pop(),n.pop(),o}if(e&&e.toJSON&&(e=e.toJSON()),typeof e==`object`&&e){t.push(e),o={},n.push(o);let i=[],s;for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&i.push(s);for(i.sort(),a=0;a<i.length;a+=1)s=i[a],o[s]=fe(e[s],t,n,r,s);t.pop(),n.pop()}else o=e;return o}new class extends a{tokenize(e){return e.slice()}join(e){return e}removeEmpty(e){return e}};function pe(e,t){return me(e,new Map,t)}function me(e,t,n){if(e&&typeof e==`object`&&!Array.isArray(e)&&e.constructor===Object){if(t.has(e))return t.get(e);let r={};return t.set(e,r),Object.entries(e).sort((e,t)=>n?n({key:e[0],value:e[1]},{key:t[0],value:t[1]}):e[0].localeCompare(t[0])).forEach(([e,i])=>{r[e]=me(i,t,n)}),r}else return e}var he=e(n(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):n.JSON5=r()})(e,(function(){function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}var t=e(function(e){var t=e.exports=typeof window<`u`&&window.Math==Math?window:typeof self<`u`&&self.Math==Math?self:Function(`return this`)();typeof __g==`number`&&(__g=t)}),n=e(function(e){var t=e.exports={version:`2.6.5`};typeof __e==`number`&&(__e=t)});n.version;var r=function(e){return typeof e==`object`?e!==null:typeof e==`function`},i=function(e){if(!r(e))throw TypeError(e+` is not an object!`);return e},a=function(e){try{return!!e()}catch{return!0}},o=!a(function(){return Object.defineProperty({},`a`,{get:function(){return 7}}).a!=7}),s=t.document,c=r(s)&&r(s.createElement),l=function(e){return c?s.createElement(e):{}},u=!o&&!a(function(){return Object.defineProperty(l(`div`),`a`,{get:function(){return 7}}).a!=7}),d=function(e,t){if(!r(e))return e;var n,i;if(t&&typeof(n=e.toString)==`function`&&!r(i=n.call(e))||typeof(n=e.valueOf)==`function`&&!r(i=n.call(e))||!t&&typeof(n=e.toString)==`function`&&!r(i=n.call(e)))return i;throw TypeError(`Can't convert object to primitive value`)},f=Object.defineProperty,p={f:o?Object.defineProperty:function(e,t,n){if(i(e),t=d(t,!0),i(n),u)try{return f(e,t,n)}catch{}if(`get`in n||`set`in n)throw TypeError(`Accessors not supported!`);return`value`in n&&(e[t]=n.value),e}},m=function(e,t){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:t}},h=o?function(e,t,n){return p.f(e,t,m(1,n))}:function(e,t,n){return e[t]=n,e},g={}.hasOwnProperty,ee=function(e,t){return g.call(e,t)},te=0,ne=Math.random(),re=function(e){return`Symbol(${e===void 0?``:e})_${(++te+ne).toString(36)}`},ie=!1,ae=e(function(e){var r=`__core-js_shared__`,i=t[r]||(t[r]={});(e.exports=function(e,t){return i[e]||(i[e]=t===void 0?{}:t)})(`versions`,[]).push({version:n.version,mode:ie?`pure`:`global`,copyright:`© 2019 Denis Pushkarev (zloirock.ru)`})})(`native-function-to-string`,Function.toString),oe=e(function(e){var r=re(`src`),i=`toString`,a=(``+ae).split(i);n.inspectSource=function(e){return ae.call(e)},(e.exports=function(e,n,i,o){var s=typeof i==`function`;s&&(ee(i,`name`)||h(i,`name`,n)),e[n]!==i&&(s&&(ee(i,r)||h(i,r,e[n]?``+e[n]:a.join(String(n)))),e===t?e[n]=i:o?e[n]?e[n]=i:h(e,n,i):(delete e[n],h(e,n,i)))})(Function.prototype,i,function(){return typeof this==`function`&&this[r]||ae.call(this)})}),se=function(e){if(typeof e!=`function`)throw TypeError(e+` is not a function!`);return e},ce=function(e,t,n){if(se(e),t===void 0)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}},le=`prototype`,ue=function(e,r,i){var a=e&ue.F,o=e&ue.G,s=e&ue.S,c=e&ue.P,l=e&ue.B,u=o?t:s?t[r]||(t[r]={}):(t[r]||{})[le],d=o?n:n[r]||(n[r]={}),f=d[le]||(d[le]={}),p,m,g,ee;for(p in o&&(i=r),i)m=!a&&u&&u[p]!==void 0,g=(m?u:i)[p],ee=l&&m?ce(g,t):c&&typeof g==`function`?ce(Function.call,g):g,u&&oe(u,p,g,e&ue.U),d[p]!=g&&h(d,p,ee),c&&f[p]!=g&&(f[p]=g)};t.core=n,ue.F=1,ue.G=2,ue.S=4,ue.P=8,ue.B=16,ue.W=32,ue.U=64,ue.R=128;var de=ue,fe=Math.ceil,pe=Math.floor,me=function(e){return isNaN(e=+e)?0:(e>0?pe:fe)(e)},he=function(e){if(e==null)throw TypeError(`Can't call method on  `+e);return e},ge=function(e){return function(t,n){var r=String(he(t)),i=me(n),a=r.length,o,s;return i<0||i>=a?e?``:void 0:(o=r.charCodeAt(i),o<55296||o>56319||i+1===a||(s=r.charCodeAt(i+1))<56320||s>57343?e?r.charAt(i):o:e?r.slice(i,i+2):(o-55296<<10)+(s-56320)+65536)}}(!1);de(de.P,`String`,{codePointAt:function(e){return ge(this,e)}}),n.String.codePointAt;var _e=Math.max,_=Math.min,v=function(e,t){return e=me(e),e<0?_e(e+t,0):_(e,t)},y=String.fromCharCode,ve=String.fromCodePoint;de(de.S+de.F*(!!ve&&ve.length!=1),`String`,{fromCodePoint:function(e){for(var t=arguments,n=[],r=arguments.length,i=0,a;r>i;){if(a=+t[i++],v(a,1114111)!==a)throw RangeError(a+` is not a valid code point`);n.push(a<65536?y(a):y(((a-=65536)>>10)+55296,a%1024+56320))}return n.join(``)}}),n.String.fromCodePoint;var ye={Space_Separator:/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,ID_Start:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,ID_Continue:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/},b={isSpaceSeparator:function(e){return typeof e==`string`&&ye.Space_Separator.test(e)},isIdStartChar:function(e){return typeof e==`string`&&(e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e===`$`||e===`_`||ye.ID_Start.test(e))},isIdContinueChar:function(e){return typeof e==`string`&&(e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e>=`0`&&e<=`9`||e===`$`||e===`_`||e===`‌`||e===`‍`||ye.ID_Continue.test(e))},isDigit:function(e){return typeof e==`string`&&/[0-9]/.test(e)},isHexDigit:function(e){return typeof e==`string`&&/[0-9A-Fa-f]/.test(e)}},be,x,xe,Se,Ce,we,S,Te,Ee,De=function(e,t){be=String(e),x=`start`,xe=[],Se=0,Ce=1,we=0,S=void 0,Te=void 0,Ee=void 0;do S=w(),ze[x]();while(S.type!==`eof`);return typeof t==`function`?Oe({"":Ee},``,t):Ee};function Oe(e,t,n){var r=e[t];if(typeof r==`object`&&r)if(Array.isArray(r))for(var i=0;i<r.length;i++){var a=String(i),o=Oe(r,a,n);o===void 0?delete r[a]:Object.defineProperty(r,a,{value:o,writable:!0,enumerable:!0,configurable:!0})}else for(var s in r){var c=Oe(r,s,n);c===void 0?delete r[s]:Object.defineProperty(r,s,{value:c,writable:!0,enumerable:!0,configurable:!0})}return n.call(e,t,r)}var ke,C,Ae,je,Me;function w(){for(ke=`default`,C=``,Ae=!1,je=1;;){Me=T();var e=Ne[ke]();if(e)return e}}function T(){if(be[Se])return String.fromCodePoint(be.codePointAt(Se))}function E(){var e=T();return e===`
`?(Ce++,we=0):e?we+=e.length:we++,e&&(Se+=e.length),e}var Ne={default:function(){switch(Me){case`	`:case`\v`:case`\f`:case` `:case`\xA0`:case`﻿`:case`
`:case`\r`:case`\u2028`:case`\u2029`:E();return;case`/`:E(),ke=`comment`;return;case void 0:return E(),Pe(`eof`)}if(b.isSpaceSeparator(Me)){E();return}return Ne[x]()},comment:function(){switch(Me){case`*`:E(),ke=`multiLineComment`;return;case`/`:E(),ke=`singleLineComment`;return}throw He(E())},multiLineComment:function(){switch(Me){case`*`:E(),ke=`multiLineCommentAsterisk`;return;case void 0:throw He(E())}E()},multiLineCommentAsterisk:function(){switch(Me){case`*`:E();return;case`/`:E(),ke=`default`;return;case void 0:throw He(E())}E(),ke=`multiLineComment`},singleLineComment:function(){switch(Me){case`
`:case`\r`:case`\u2028`:case`\u2029`:E(),ke=`default`;return;case void 0:return E(),Pe(`eof`)}E()},value:function(){switch(Me){case`{`:case`[`:return Pe(`punctuator`,E());case`n`:return E(),Fe(`ull`),Pe(`null`,null);case`t`:return E(),Fe(`rue`),Pe(`boolean`,!0);case`f`:return E(),Fe(`alse`),Pe(`boolean`,!1);case`-`:case`+`:E()===`-`&&(je=-1),ke=`sign`;return;case`.`:C=E(),ke=`decimalPointLeading`;return;case`0`:C=E(),ke=`zero`;return;case`1`:case`2`:case`3`:case`4`:case`5`:case`6`:case`7`:case`8`:case`9`:C=E(),ke=`decimalInteger`;return;case`I`:return E(),Fe(`nfinity`),Pe(`numeric`,1/0);case`N`:return E(),Fe(`aN`),Pe(`numeric`,NaN);case`"`:case`'`:Ae=E()===`"`,C=``,ke=`string`;return}throw He(E())},identifierNameStartEscape:function(){if(Me!==`u`)throw He(E());E();var e=Re();switch(e){case`$`:case`_`:break;default:if(!b.isIdStartChar(e))throw Ue();break}C+=e,ke=`identifierName`},identifierName:function(){switch(Me){case`$`:case`_`:case`‌`:case`‍`:C+=E();return;case`\\`:E(),ke=`identifierNameEscape`;return}if(b.isIdContinueChar(Me)){C+=E();return}return Pe(`identifier`,C)},identifierNameEscape:function(){if(Me!==`u`)throw He(E());E();var e=Re();switch(e){case`$`:case`_`:case`‌`:case`‍`:break;default:if(!b.isIdContinueChar(e))throw Ue();break}C+=e,ke=`identifierName`},sign:function(){switch(Me){case`.`:C=E(),ke=`decimalPointLeading`;return;case`0`:C=E(),ke=`zero`;return;case`1`:case`2`:case`3`:case`4`:case`5`:case`6`:case`7`:case`8`:case`9`:C=E(),ke=`decimalInteger`;return;case`I`:return E(),Fe(`nfinity`),Pe(`numeric`,je*(1/0));case`N`:return E(),Fe(`aN`),Pe(`numeric`,NaN)}throw He(E())},zero:function(){switch(Me){case`.`:C+=E(),ke=`decimalPoint`;return;case`e`:case`E`:C+=E(),ke=`decimalExponent`;return;case`x`:case`X`:C+=E(),ke=`hexadecimal`;return}return Pe(`numeric`,je*0)},decimalInteger:function(){switch(Me){case`.`:C+=E(),ke=`decimalPoint`;return;case`e`:case`E`:C+=E(),ke=`decimalExponent`;return}if(b.isDigit(Me)){C+=E();return}return Pe(`numeric`,je*Number(C))},decimalPointLeading:function(){if(b.isDigit(Me)){C+=E(),ke=`decimalFraction`;return}throw He(E())},decimalPoint:function(){switch(Me){case`e`:case`E`:C+=E(),ke=`decimalExponent`;return}if(b.isDigit(Me)){C+=E(),ke=`decimalFraction`;return}return Pe(`numeric`,je*Number(C))},decimalFraction:function(){switch(Me){case`e`:case`E`:C+=E(),ke=`decimalExponent`;return}if(b.isDigit(Me)){C+=E();return}return Pe(`numeric`,je*Number(C))},decimalExponent:function(){switch(Me){case`+`:case`-`:C+=E(),ke=`decimalExponentSign`;return}if(b.isDigit(Me)){C+=E(),ke=`decimalExponentInteger`;return}throw He(E())},decimalExponentSign:function(){if(b.isDigit(Me)){C+=E(),ke=`decimalExponentInteger`;return}throw He(E())},decimalExponentInteger:function(){if(b.isDigit(Me)){C+=E();return}return Pe(`numeric`,je*Number(C))},hexadecimal:function(){if(b.isHexDigit(Me)){C+=E(),ke=`hexadecimalInteger`;return}throw He(E())},hexadecimalInteger:function(){if(b.isHexDigit(Me)){C+=E();return}return Pe(`numeric`,je*Number(C))},string:function(){switch(Me){case`\\`:E(),C+=Ie();return;case`"`:if(Ae)return E(),Pe(`string`,C);C+=E();return;case`'`:if(!Ae)return E(),Pe(`string`,C);C+=E();return;case`
`:case`\r`:throw He(E());case`\u2028`:case`\u2029`:We(Me);break;case void 0:throw He(E())}C+=E()},start:function(){switch(Me){case`{`:case`[`:return Pe(`punctuator`,E())}ke=`value`},beforePropertyName:function(){switch(Me){case`$`:case`_`:C=E(),ke=`identifierName`;return;case`\\`:E(),ke=`identifierNameStartEscape`;return;case`}`:return Pe(`punctuator`,E());case`"`:case`'`:Ae=E()===`"`,ke=`string`;return}if(b.isIdStartChar(Me)){C+=E(),ke=`identifierName`;return}throw He(E())},afterPropertyName:function(){if(Me===`:`)return Pe(`punctuator`,E());throw He(E())},beforePropertyValue:function(){ke=`value`},afterPropertyValue:function(){switch(Me){case`,`:case`}`:return Pe(`punctuator`,E())}throw He(E())},beforeArrayValue:function(){if(Me===`]`)return Pe(`punctuator`,E());ke=`value`},afterArrayValue:function(){switch(Me){case`,`:case`]`:return Pe(`punctuator`,E())}throw He(E())},end:function(){throw He(E())}};function Pe(e,t){return{type:e,value:t,line:Ce,column:we}}function Fe(e){for(var t=0,n=e;t<n.length;t+=1){var r=n[t];if(T()!==r)throw He(E());E()}}function Ie(){switch(T()){case`b`:return E(),`\b`;case`f`:return E(),`\f`;case`n`:return E(),`
`;case`r`:return E(),`\r`;case`t`:return E(),`	`;case`v`:return E(),`\v`;case`0`:if(E(),b.isDigit(T()))throw He(E());return`\0`;case`x`:return E(),Le();case`u`:return E(),Re();case`
`:case`\u2028`:case`\u2029`:return E(),``;case`\r`:return E(),T()===`
`&&E(),``;case`1`:case`2`:case`3`:case`4`:case`5`:case`6`:case`7`:case`8`:case`9`:throw He(E());case void 0:throw He(E())}return E()}function Le(){var e=``,t=T();if(!b.isHexDigit(t)||(e+=E(),t=T(),!b.isHexDigit(t)))throw He(E());return e+=E(),String.fromCodePoint(parseInt(e,16))}function Re(){for(var e=``,t=4;t-- >0;){var n=T();if(!b.isHexDigit(n))throw He(E());e+=E()}return String.fromCodePoint(parseInt(e,16))}var ze={start:function(){if(S.type===`eof`)throw D();Be()},beforePropertyName:function(){switch(S.type){case`identifier`:case`string`:Te=S.value,x=`afterPropertyName`;return;case`punctuator`:Ve();return;case`eof`:throw D()}},afterPropertyName:function(){if(S.type===`eof`)throw D();x=`beforePropertyValue`},beforePropertyValue:function(){if(S.type===`eof`)throw D();Be()},beforeArrayValue:function(){if(S.type===`eof`)throw D();if(S.type===`punctuator`&&S.value===`]`){Ve();return}Be()},afterPropertyValue:function(){if(S.type===`eof`)throw D();switch(S.value){case`,`:x=`beforePropertyName`;return;case`}`:Ve()}},afterArrayValue:function(){if(S.type===`eof`)throw D();switch(S.value){case`,`:x=`beforeArrayValue`;return;case`]`:Ve()}},end:function(){}};function Be(){var e;switch(S.type){case`punctuator`:switch(S.value){case`{`:e={};break;case`[`:e=[];break}break;case`null`:case`boolean`:case`numeric`:case`string`:e=S.value;break}if(Ee===void 0)Ee=e;else{var t=xe[xe.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,Te,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(typeof e==`object`&&e)xe.push(e),x=Array.isArray(e)?`beforeArrayValue`:`beforePropertyName`;else{var n=xe[xe.length-1];x=n==null?`end`:Array.isArray(n)?`afterArrayValue`:`afterPropertyValue`}}function Ve(){xe.pop();var e=xe[xe.length-1];x=e==null?`end`:Array.isArray(e)?`afterArrayValue`:`afterPropertyValue`}function He(e){return Ke(e===void 0?`JSON5: invalid end of input at `+Ce+`:`+we:`JSON5: invalid character '`+Ge(e)+`' at `+Ce+`:`+we)}function D(){return Ke(`JSON5: invalid end of input at `+Ce+`:`+we)}function Ue(){return we-=5,Ke(`JSON5: invalid identifier character at `+Ce+`:`+we)}function We(e){console.warn(`JSON5: '`+Ge(e)+`' in strings is not valid ECMAScript; consider escaping`)}function Ge(e){var t={"'":`\\'`,'"':`\\"`,"\\":`\\\\`,"\b":`\\b`,"\f":`\\f`,"\n":`\\n`,"\r":`\\r`,"	":`\\t`,"\v":`\\v`,"\0":`\\0`,"\u2028":`\\u2028`,"\u2029":`\\u2029`};if(t[e])return t[e];if(e<` `){var n=e.charCodeAt(0).toString(16);return`\\x`+(`00`+n).substring(n.length)}return e}function Ke(e){var t=SyntaxError(e);return t.lineNumber=Ce,t.columnNumber=we,t}return{parse:De,stringify:function(e,t,n){var r=[],i=``,a,o,s=``,c;if(typeof t==`object`&&t&&!Array.isArray(t)&&(n=t.space,c=t.quote,t=t.replacer),typeof t==`function`)o=t;else if(Array.isArray(t)){a=[];for(var l=0,u=t;l<u.length;l+=1){var d=u[l],f=void 0;typeof d==`string`?f=d:(typeof d==`number`||d instanceof String||d instanceof Number)&&(f=String(d)),f!==void 0&&a.indexOf(f)<0&&a.push(f)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n==`number`?n>0&&(n=Math.min(10,Math.floor(n)),s=`          `.substr(0,n)):typeof n==`string`&&(s=n.substr(0,10)),p(``,{"":e});function p(e,t){var n=t[e];switch(n!=null&&(typeof n.toJSON5==`function`?n=n.toJSON5(e):typeof n.toJSON==`function`&&(n=n.toJSON(e))),o&&(n=o.call(t,e,n)),n instanceof Number?n=Number(n):n instanceof String?n=String(n):n instanceof Boolean&&(n=n.valueOf()),n){case null:return`null`;case!0:return`true`;case!1:return`false`}if(typeof n==`string`)return m(n,!1);if(typeof n==`number`)return String(n);if(typeof n==`object`)return Array.isArray(n)?ee(n):h(n)}function m(e){for(var t={"'":.1,'"':.2},n={"'":`\\'`,'"':`\\"`,"\\":`\\\\`,"\b":`\\b`,"\f":`\\f`,"\n":`\\n`,"\r":`\\r`,"	":`\\t`,"\v":`\\v`,"\0":`\\0`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},r=``,i=0;i<e.length;i++){var a=e[i];switch(a){case`'`:case`"`:t[a]++,r+=a;continue;case`\0`:if(b.isDigit(e[i+1])){r+=`\\x00`;continue}}if(n[a]){r+=n[a];continue}if(a<` `){var o=a.charCodeAt(0).toString(16);r+=`\\x`+(`00`+o).substring(o.length);continue}r+=a}var s=c||Object.keys(t).reduce(function(e,n){return t[e]<t[n]?e:n});return r=r.replace(new RegExp(s,`g`),n[s]),s+r+s}function h(e){if(r.indexOf(e)>=0)throw TypeError(`Converting circular structure to JSON5`);r.push(e);var t=i;i+=s;for(var n=a||Object.keys(e),o=[],c=0,l=n;c<l.length;c+=1){var u=l[c],d=p(u,e);if(d!==void 0){var f=g(u)+`:`;s!==``&&(f+=` `),f+=d,o.push(f)}}var m;if(o.length===0)m=`{}`;else{var h;if(s===``)h=o.join(`,`),m=`{`+h+`}`;else{var ee=`,
`+i;h=o.join(ee),m=`{
`+i+h+`,
`+t+`}`}}return r.pop(),i=t,m}function g(e){if(e.length===0)return m(e,!0);var t=String.fromCodePoint(e.codePointAt(0));if(!b.isIdStartChar(t))return m(e,!0);for(var n=t.length;n<e.length;n++)if(!b.isIdContinueChar(String.fromCodePoint(e.codePointAt(n))))return m(e,!0);return e}function ee(e){if(r.indexOf(e)>=0)throw TypeError(`Converting circular structure to JSON5`);r.push(e);var t=i;i+=s;for(var n=[],a=0;a<e.length;a++){var o=p(String(a),e);n.push(o===void 0?`null`:o)}var c;if(n.length===0)c=`[]`;else if(s===``)c=`[`+n.join(`,`)+`]`;else{var l=`,
`+i,u=n.join(l);c=`[
`+i+u+`,
`+t+`]`}return r.pop(),i=t,c}}}}))}))(),1),ge=`__@@augment-vir-undefined-sentinel@@__`,_e=RegExp(`['"]${ge}['"]`);function _(e,t){if(typeof e==`string`)return e;try{return he.default.stringify(e,(e,t)=>t===void 0?ge:typeof t==`bigint`?Number(t):t,t||void 0).split(_e).join(`undefined`)}catch{return String(e)}}typeof window<`u`&&window.document;var v=typeof process<`u`&&process.versions!=null&&process.versions.node!=null;typeof self==`object`&&self.constructor&&self.constructor.name,typeof window<`u`&&window.name===`nodejs`||typeof navigator<`u`&&`userAgent`in navigator&&typeof navigator.userAgent==`string`&&(navigator.userAgent.includes(`Node.js`)||navigator.userAgent.includes(`jsdom`)),typeof Deno<`u`&&Deno.version!==void 0&&Deno.version.deno,typeof process<`u`&&process.versions!=null&&process.versions.bun;var y;(function(e){e.Node=`node`,e.Web=`web`})(y||={});function ve(){return v?y.Node:y.Web}var ye=ve();function b(e){return ye===e}function be(e){return e[ye]()}function x(e,t){let n=typeof t==`string`&&typeof e==`string`,r=typeof t!=`string`||typeof e!=`string`,i=Ce(r,(r?le:ie)([n?``:`
`,_(t&&typeof t==`object`&&!Array.isArray(t)?pe(t):t,4),`
`].join(``),[n?``:`
`,_(e&&typeof e==`object`&&!Array.isArray(e)?pe(e):e,4),`
`].join(``))),a=b(y.Node);return[[a?xe.Green:``,` +added (unexpected, added in actual)`,a?xe.Red:``,` -missing (expected, missing from actual)`,a?xe.Reset:``].join(``),n?`

`:`
`,i].join(``)}var xe;(function(e){e.Green=`\x1B[32m`,e.Red=`\x1B[31m`,e.Reset=`\x1B[0m`})(xe||={});var Se;(function(e){e.Added=`+`,e.Removed=`-`})(Se||={});function Ce(e,t){return e?t.flatMap(e=>e.value.split(`
`).map(t=>we(t,e)).join(`
`)).join(``):t.map(e=>we(void 0,e)).join(``)}function we(e,t){if(e!=null&&!e)return``;let n=b(y.Node),r=t.added?Se.Added:t.removed?Se.Removed:e==null?``:` `,i=t.added?xe.Green:t.removed?xe.Red:xe.Reset;return[n?i:``,r,e??t.value,xe.Reset].join(``)}function S(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Te(e){return S(e).filter(e=>isNaN(Number(e)))}function Ee(e){return Te(e).map(t=>e[t])}var De=[`.`,`:`,`;`,`,`,`?`,`!`];RegExp(`[${De.join(``)}]+`);var Oe=RegExp(`[${De.join(``)}]+$`);function ke(e){return e.replace(Oe,``)}function C(e){return e==null||e===``||e===`undefined`||e===`null`?``:typeof e==`string`?e:e instanceof Error?e.message:typeof e==`object`&&`message`in e?String(e.message):_(e)}function Ae(...e){let t=e.map(e=>C(e)).filter(e=>!!ke(e)),n=t[t.length-1]?.endsWith(`.`),r=t.map(e=>ke(C(e)));return(r.length<2?r[0]||``:r.join(`: `))+(n?`.`:``)}function je(e){return e instanceof Error?e:Error(C(e))}function Me(e,t){let n=je(e),r=Ae(t,n.message);try{return n.message=r,n}catch{return Error(r,{cause:e})}}var w;(function(e){e[e.Continue=100]=`Continue`,e[e.SwitchingProtocols=101]=`SwitchingProtocols`,e[e.Processing=102]=`Processing`,e[e.EarlyHints=103]=`EarlyHints`,e[e.Ok=200]=`Ok`,e[e.Created=201]=`Created`,e[e.Accepted=202]=`Accepted`,e[e.NonAuthoritativeInformation=203]=`NonAuthoritativeInformation`,e[e.NoContent=204]=`NoContent`,e[e.ResetContent=205]=`ResetContent`,e[e.PartialContent=206]=`PartialContent`,e[e.MultiStatus=207]=`MultiStatus`,e[e.AlreadyReported=208]=`AlreadyReported`,e[e.ImUsed=226]=`ImUsed`,e[e.MultipleChoices=300]=`MultipleChoices`,e[e.MovedPermanently=301]=`MovedPermanently`,e[e.Found=302]=`Found`,e[e.SeeOther=303]=`SeeOther`,e[e.NotModified=304]=`NotModified`,e[e.UseProxy=305]=`UseProxy`,e[e.Unused=306]=`Unused`,e[e.TemporaryRedirect=307]=`TemporaryRedirect`,e[e.PermanentRedirect=308]=`PermanentRedirect`,e[e.BadRequest=400]=`BadRequest`,e[e.Unauthorized=401]=`Unauthorized`,e[e.PaymentRequired=402]=`PaymentRequired`,e[e.Forbidden=403]=`Forbidden`,e[e.NotFound=404]=`NotFound`,e[e.MethodNotAllowed=405]=`MethodNotAllowed`,e[e.NotAcceptable=406]=`NotAcceptable`,e[e.ProxyAuthenticationRequired=407]=`ProxyAuthenticationRequired`,e[e.RequestTimeout=408]=`RequestTimeout`,e[e.Conflict=409]=`Conflict`,e[e.Gone=410]=`Gone`,e[e.LengthRequired=411]=`LengthRequired`,e[e.PreconditionFailed=412]=`PreconditionFailed`,e[e.PayloadTooLarge=413]=`PayloadTooLarge`,e[e.UriTooLong=414]=`UriTooLong`,e[e.UnsupportedMediaType=415]=`UnsupportedMediaType`,e[e.RangeNotSatisfiable=416]=`RangeNotSatisfiable`,e[e.ExpectationFailed=417]=`ExpectationFailed`,e[e.ImATeapot=418]=`ImATeapot`,e[e.MisdirectedRequest=421]=`MisdirectedRequest`,e[e.UnprocessableContent=422]=`UnprocessableContent`,e[e.Locked=423]=`Locked`,e[e.FailedDependency=424]=`FailedDependency`,e[e.TooEarly=425]=`TooEarly`,e[e.UpgradeRequired=426]=`UpgradeRequired`,e[e.PreconditionRequired=428]=`PreconditionRequired`,e[e.TooManyRequests=429]=`TooManyRequests`,e[e.RequestHeaderFieldsTooLarge=431]=`RequestHeaderFieldsTooLarge`,e[e.UnavailableForLegalReasons=451]=`UnavailableForLegalReasons`,e[e.InternalServerError=500]=`InternalServerError`,e[e.NotImplemented=501]=`NotImplemented`,e[e.BadGateway=502]=`BadGateway`,e[e.ServiceUnavailable=503]=`ServiceUnavailable`,e[e.GatewayTimeout=504]=`GatewayTimeout`,e[e.HttpVersionNotSupported=505]=`HttpVersionNotSupported`,e[e.VariantAlsoNegotiates=506]=`VariantAlsoNegotiates`,e[e.InsufficientStorage=507]=`InsufficientStorage`,e[e.LoopDetected=508]=`LoopDetected`,e[e.NotExtended=510]=`NotExtended`,e[e.NetworkAuthenticationRequired=511]=`NetworkAuthenticationRequired`})(w||={});var T;(function(e){e.Information=`information`,e.Success=`success`,e.Redirect=`redirect`,e.ClientError=`clientError`,e.ServerError=`serverError`})(T||={}),T.ClientError,T.ServerError,w.Continue,T.Information,w.SwitchingProtocols,T.Information,w.Processing,T.Information,w.EarlyHints,T.Information,w.Ok,T.Success,w.Created,T.Success,w.Accepted,T.Success,w.NonAuthoritativeInformation,T.Success,w.NoContent,T.Success,w.ResetContent,T.Success,w.PartialContent,T.Success,w.MultiStatus,T.Success,w.AlreadyReported,T.Success,w.ImUsed,T.Success,w.MultipleChoices,T.Redirect,w.MovedPermanently,T.Redirect,w.Found,T.Redirect,w.SeeOther,T.Redirect,w.NotModified,T.Redirect,w.UseProxy,T.Redirect,w.Unused,T.Redirect,w.TemporaryRedirect,T.Redirect,w.PermanentRedirect,T.Redirect,w.BadRequest,T.ClientError,w.Unauthorized,T.ClientError,w.PaymentRequired,T.ClientError,w.Forbidden,T.ClientError,w.NotFound,T.ClientError,w.MethodNotAllowed,T.ClientError,w.NotAcceptable,T.ClientError,w.ProxyAuthenticationRequired,T.ClientError,w.RequestTimeout,T.ClientError,w.Conflict,T.ClientError,w.Gone,T.ClientError,w.LengthRequired,T.ClientError,w.PreconditionFailed,T.ClientError,w.PayloadTooLarge,T.ClientError,w.UriTooLong,T.ClientError,w.UnsupportedMediaType,T.ClientError,w.RangeNotSatisfiable,T.ClientError,w.ExpectationFailed,T.ClientError,w.ImATeapot,T.ClientError,w.MisdirectedRequest,T.ClientError,w.UnprocessableContent,T.ClientError,w.Locked,T.ClientError,w.FailedDependency,T.ClientError,w.TooEarly,T.ClientError,w.UpgradeRequired,T.ClientError,w.PreconditionRequired,T.ClientError,w.TooManyRequests,T.ClientError,w.RequestHeaderFieldsTooLarge,T.ClientError,w.UnavailableForLegalReasons,T.ClientError,w.InternalServerError,T.ServerError,w.NotImplemented,T.ServerError,w.BadGateway,T.ServerError,w.ServiceUnavailable,T.ServerError,w.GatewayTimeout,T.ServerError,w.HttpVersionNotSupported,T.ServerError,w.VariantAlsoNegotiates,T.ServerError,w.InsufficientStorage,T.ServerError,w.LoopDetected,T.ServerError,w.NotExtended,T.ServerError,w.NetworkAuthenticationRequired,T.ServerError;var E={[T.Information]:[w.Continue,w.SwitchingProtocols,w.Processing,w.EarlyHints],[T.Success]:[w.Ok,w.Created,w.Accepted,w.NonAuthoritativeInformation,w.NoContent,w.ResetContent,w.PartialContent,w.MultiStatus,w.AlreadyReported,w.ImUsed],[T.Redirect]:[w.MultipleChoices,w.MovedPermanently,w.Found,w.SeeOther,w.NotModified,w.UseProxy,w.Unused,w.TemporaryRedirect,w.PermanentRedirect],[T.ClientError]:[w.BadRequest,w.Unauthorized,w.PaymentRequired,w.Forbidden,w.NotFound,w.MethodNotAllowed,w.NotAcceptable,w.ProxyAuthenticationRequired,w.RequestTimeout,w.Conflict,w.Gone,w.LengthRequired,w.PreconditionFailed,w.PayloadTooLarge,w.UriTooLong,w.UnsupportedMediaType,w.RangeNotSatisfiable,w.ExpectationFailed,w.ImATeapot,w.MisdirectedRequest,w.UnprocessableContent,w.Locked,w.FailedDependency,w.TooEarly,w.UpgradeRequired,w.PreconditionRequired,w.TooManyRequests,w.RequestHeaderFieldsTooLarge,w.UnavailableForLegalReasons],[T.ServerError]:[w.InternalServerError,w.NotImplemented,w.BadGateway,w.ServiceUnavailable,w.GatewayTimeout,w.HttpVersionNotSupported,w.VariantAlsoNegotiates,w.InsufficientStorage,w.LoopDetected,w.NotExtended,w.NetworkAuthenticationRequired]};function Ne({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}var Pe=class{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((e,t)=>{this.resolve=t=>(this.isSettled=!0,e(t)),this.reject=e=>{this.isSettled=!0,t(je(e))}})}},Fe=class extends Error{},Ie=class extends Fe{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}},Le=class extends Fe{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}},Re=class extends Fe{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}},ze=class extends Fe{},Be=class extends Fe{constructor(e){super(`Invalid unit ${e}`)}},Ve=class extends Fe{},He=class extends Fe{constructor(){super(`Zone is an abstract class`)}},D=`numeric`,Ue=`short`,We=`long`,Ge={year:D,month:D,day:D},Ke={year:D,month:Ue,day:D},qe={year:D,month:Ue,day:D,weekday:Ue},Je={year:D,month:We,day:D},Ye={year:D,month:We,day:D,weekday:We},Xe={hour:D,minute:D},Ze={hour:D,minute:D,second:D},Qe={hour:D,minute:D,second:D,timeZoneName:Ue},$e={hour:D,minute:D,second:D,timeZoneName:We},et={hour:D,minute:D,hourCycle:`h23`},tt={hour:D,minute:D,second:D,hourCycle:`h23`},nt={hour:D,minute:D,second:D,hourCycle:`h23`,timeZoneName:Ue},rt={hour:D,minute:D,second:D,hourCycle:`h23`,timeZoneName:We},it={year:D,month:D,day:D,hour:D,minute:D},at={year:D,month:D,day:D,hour:D,minute:D,second:D},ot={year:D,month:Ue,day:D,hour:D,minute:D},st={year:D,month:Ue,day:D,hour:D,minute:D,second:D},ct={year:D,month:Ue,day:D,weekday:Ue,hour:D,minute:D},lt={year:D,month:We,day:D,hour:D,minute:D,timeZoneName:Ue},ut={year:D,month:We,day:D,hour:D,minute:D,second:D,timeZoneName:Ue},dt={year:D,month:We,day:D,weekday:We,hour:D,minute:D,timeZoneName:We},ft={year:D,month:We,day:D,weekday:We,hour:D,minute:D,second:D,timeZoneName:We},pt=class{get type(){throw new He}get name(){throw new He}get ianaName(){return this.name}get isUniversal(){throw new He}offsetName(e,t){throw new He}formatOffset(e,t){throw new He}offset(e){throw new He}equals(e){throw new He}get isValid(){throw new He}},mt=null,ht=class e extends pt{static get instance(){return mt===null&&(mt=new e),mt}get type(){return`system`}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:t,locale:n}){return ir(e,t,n)}formatOffset(e,t){return cr(this.offset(e),t)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type===`system`}get isValid(){return!0}},gt=new Map;function _t(e){let t=gt.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(`en-US`,{hour12:!1,timeZone:e,year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`,second:`2-digit`,era:`short`}),gt.set(e,t)),t}var vt={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function yt(e,t){let n=e.format(t).replace(/\u200E/g,``),[,r,i,a,o,s,c,l]=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n);return[a,r,i,o,s,c,l]}function bt(e,t){let n=e.formatToParts(t),r=[];for(let e=0;e<n.length;e++){let{type:t,value:i}=n[e],a=vt[t];t===`era`?r[a]=i:Mn(a)||(r[a]=parseInt(i,10))}return r}var xt=new Map,St=class e extends pt{static create(t){let n=xt.get(t);return n===void 0&&xt.set(t,n=new e(t)),n}static resetCache(){xt.clear(),gt.clear()}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat(`en-US`,{timeZone:e}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=e.isValidZone(t)}get type(){return`iana`}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:t,locale:n}){return ir(e,t,n,this.name)}formatOffset(e,t){return cr(this.offset(e),t)}offset(e){if(!this.valid)return NaN;let t=new Date(e);if(isNaN(t))return NaN;let n=_t(this.name),[r,i,a,o,s,c,l]=n.formatToParts?bt(n,t):yt(n,t);o===`BC`&&(r=-Math.abs(r)+1);let u=er({year:r,month:i,day:a,hour:s===24?0:s,minute:c,second:l,millisecond:0}),d=+t,f=d%1e3;return d-=f>=0?f:1e3+f,(u-d)/(60*1e3)}equals(e){return e.type===`iana`&&e.name===this.name}get isValid(){return this.valid}},Ct={};function wt(e,t={}){let n=JSON.stringify([e,t]),r=Ct[n];return r||(r=new Intl.ListFormat(e,t),Ct[n]=r),r}var Tt=new Map;function Et(e,t={}){let n=JSON.stringify([e,t]),r=Tt.get(n);return r===void 0&&(r=new Intl.DateTimeFormat(e,t),Tt.set(n,r)),r}var Dt=new Map;function Ot(e,t={}){let n=JSON.stringify([e,t]),r=Dt.get(n);return r===void 0&&(r=new Intl.NumberFormat(e,t),Dt.set(n,r)),r}var kt=new Map;function At(e,t={}){let{base:n,...r}=t,i=JSON.stringify([e,r]),a=kt.get(i);return a===void 0&&(a=new Intl.RelativeTimeFormat(e,t),kt.set(i,a)),a}var jt=null;function Mt(){return jt||(jt=new Intl.DateTimeFormat().resolvedOptions().locale,jt)}var Nt=new Map;function Pt(e){let t=Nt.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),Nt.set(e,t)),t}var Ft=new Map;function It(e){let t=Ft.get(e);if(!t){let n=new Intl.Locale(e);t=`getWeekInfo`in n?n.getWeekInfo():n.weekInfo,`minimalDays`in t||(t={...Kt,...t}),Ft.set(e,t)}return t}function Lt(e){let t=e.indexOf(`-x-`);t!==-1&&(e=e.substring(0,t));let n=e.indexOf(`-u-`);if(n===-1)return[e];{let t,r;try{t=Et(e).resolvedOptions(),r=e}catch{let i=e.substring(0,n);t=Et(i).resolvedOptions(),r=i}let{numberingSystem:i,calendar:a}=t;return[r,i,a]}}function Rt(e,t,n){return n||t?(e.includes(`-u-`)||(e+=`-u`),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`),e):e}function zt(e){let t=[];for(let n=1;n<=12;n++){let r=Ya.utc(2009,n,1);t.push(e(r))}return t}function Bt(e){let t=[];for(let n=1;n<=7;n++){let r=Ya.utc(2016,11,13+n);t.push(e(r))}return t}function Vt(e,t,n,r){let i=e.listingMode();return i===`error`?null:i===`en`?n(t):r(t)}function Ht(e){return e.numberingSystem&&e.numberingSystem!==`latn`?!1:e.numberingSystem===`latn`||!e.locale||e.locale.startsWith(`en`)||Pt(e.locale).numberingSystem===`latn`}var Ut=class{constructor(e,t,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;let{padTo:r,floor:i,...a}=n;if(!t||Object.keys(a).length>0){let t={useGrouping:!1,...n};n.padTo>0&&(t.minimumIntegerDigits=n.padTo),this.inf=Ot(e,t)}}format(e){if(this.inf){let t=this.floor?Math.floor(e):e;return this.inf.format(t)}else return Kn(this.floor?Math.floor(e):Xn(e,3),this.padTo)}},Wt=class{constructor(e,t,n){this.opts=n,this.originalZone=void 0;let r;if(this.opts.timeZone)this.dt=e;else if(e.zone.type===`fixed`){let t=-1*(e.offset/60),n=t>=0?`Etc/GMT+${t}`:`Etc/GMT${t}`;e.offset!==0&&St.create(n).valid?(r=n,this.dt=e):(r=`UTC`,this.dt=e.offset===0?e:e.setZone(`UTC`).plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type===`system`?this.dt=e:e.zone.type===`iana`?(this.dt=e,r=e.zone.name):(r=`UTC`,this.dt=e.setZone(`UTC`).plus({minutes:e.offset}),this.originalZone=e.zone);let i={...this.opts};i.timeZone=i.timeZone||r,this.dtf=Et(t,i)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(``):this.dtf.format(this.dt.toJSDate())}formatToParts(){let e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(e=>{if(e.type===`timeZoneName`){let t=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...e,value:t}}else return e}):e}resolvedOptions(){return this.dtf.resolvedOptions()}},Gt=class{constructor(e,t,n){this.opts={style:`long`,...n},!t&&Ln()&&(this.rtf=At(e,n))}format(e,t){return this.rtf?this.rtf.format(e,t):Dr(t,e,this.opts.numeric,this.opts.style!==`long`)}formatToParts(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]}},Kt={firstDay:1,minimalDays:4,weekend:[6,7]},qt=class e{static fromOpts(t){return e.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,i,a=!1){let o=t||mn.defaultLocale;return new e(o||(a?`en-US`:Mt()),n||mn.defaultNumberingSystem,r||mn.defaultOutputCalendar,Un(i)||mn.defaultWeekSettings,o)}static resetCache(){jt=null,Tt.clear(),Dt.clear(),kt.clear(),Nt.clear(),Ft.clear()}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return e.create(t,n,r,i)}constructor(e,t,n,r,i){let[a,o,s]=Lt(e);this.locale=a,this.numberingSystem=t||o||null,this.outputCalendar=n||s||null,this.weekSettings=r,this.intl=Rt(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached??=Ht(this),this.fastNumbersCached}listingMode(){let e=this.isEnglish(),t=(this.numberingSystem===null||this.numberingSystem===`latn`)&&(this.outputCalendar===null||this.outputCalendar===`gregory`);return e&&t?`en`:`intl`}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:e.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Un(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,t=!1){return Vt(this,e,pr,()=>{let n=this.intl===`ja`||this.intl.startsWith(`ja-`);t&=!n;let r=t?{month:e,day:`numeric`}:{month:e},i=t?`format`:`standalone`;if(!this.monthsCache[i][e]){let t=n?e=>this.dtFormatter(e,r).format():e=>this.extract(e,r,`month`);this.monthsCache[i][e]=zt(t)}return this.monthsCache[i][e]})}weekdays(e,t=!1){return Vt(this,e,_r,()=>{let n=t?{weekday:e,year:`numeric`,month:`long`,day:`numeric`}:{weekday:e},r=t?`format`:`standalone`;return this.weekdaysCache[r][e]||(this.weekdaysCache[r][e]=Bt(e=>this.extract(e,n,`weekday`))),this.weekdaysCache[r][e]})}meridiems(){return Vt(this,void 0,()=>vr,()=>{if(!this.meridiemCache){let e={hour:`numeric`,hourCycle:`h12`};this.meridiemCache=[Ya.utc(2016,11,13,9),Ya.utc(2016,11,13,19)].map(t=>this.extract(t,e,`dayperiod`))}return this.meridiemCache})}eras(e){return Vt(this,e,Sr,()=>{let t={era:e};return this.eraCache[e]||(this.eraCache[e]=[Ya.utc(-40,1,1),Ya.utc(2017,1,1)].map(e=>this.extract(e,t,`era`))),this.eraCache[e]})}extract(e,t,n){let r=this.dtFormatter(e,t).formatToParts().find(e=>e.type.toLowerCase()===n);return r?r.value:null}numberFormatter(e={}){return new Ut(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,t={}){return new Wt(e,this.intl,t)}relFormatter(e={}){return new Gt(this.intl,this.isEnglish(),e)}listFormatter(e={}){return wt(this.intl,e)}isEnglish(){return this.locale===`en`||this.locale.toLowerCase()===`en-us`||Pt(this.intl).locale.startsWith(`en-us`)}getWeekSettings(){return this.weekSettings?this.weekSettings:Rn()?It(this.locale):Kt}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}},Jt=null,Yt=class e extends pt{static get utcInstance(){return Jt===null&&(Jt=new e(0)),Jt}static instance(t){return t===0?e.utcInstance:new e(t)}static parseSpecifier(t){if(t){let n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new e(ar(n[1],n[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return`fixed`}get name(){return this.fixed===0?`UTC`:`UTC${cr(this.fixed,`narrow`)}`}get ianaName(){return this.fixed===0?`Etc/UTC`:`Etc/GMT${cr(-this.fixed,`narrow`)}`}offsetName(){return this.name}formatOffset(e,t){return cr(this.fixed,t)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type===`fixed`&&e.fixed===this.fixed}get isValid(){return!0}},Xt=class extends pt{constructor(e){super(),this.zoneName=e}get type(){return`invalid`}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return``}offset(){return NaN}equals(){return!1}get isValid(){return!1}};function Zt(e,t){if(Mn(e)||e===null)return t;if(e instanceof pt)return e;if(Fn(e)){let n=e.toLowerCase();return n===`default`?t:n===`local`||n===`system`?ht.instance:n===`utc`||n===`gmt`?Yt.utcInstance:Yt.parseSpecifier(n)||St.create(e)}else if(Nn(e))return Yt.instance(e);else if(typeof e==`object`&&`offset`in e&&typeof e.offset==`function`)return e;else return new Xt(e)}var Qt={arab:`[٠-٩]`,arabext:`[۰-۹]`,bali:`[᭐-᭙]`,beng:`[০-৯]`,deva:`[०-९]`,fullwide:`[０-９]`,gujr:`[૦-૯]`,hanidec:`[〇|一|二|三|四|五|六|七|八|九]`,khmr:`[០-៩]`,knda:`[೦-೯]`,laoo:`[໐-໙]`,limb:`[᥆-᥏]`,mlym:`[൦-൯]`,mong:`[᠐-᠙]`,mymr:`[၀-၉]`,orya:`[୦-୯]`,tamldec:`[௦-௯]`,telu:`[౦-౯]`,thai:`[๐-๙]`,tibt:`[༠-༩]`,latn:`\\d`},$t={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},en=Qt.hanidec.replace(/[\[|\]]/g,``).split(``);function tn(e){let t=parseInt(e,10);if(isNaN(t)){t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(e[n].search(Qt.hanidec)!==-1)t+=en.indexOf(e[n]);else for(let e in $t){let[n,i]=$t[e];r>=n&&r<=i&&(t+=r-n)}}return parseInt(t,10)}else return t}var nn=new Map;function rn(){nn.clear()}function an({numberingSystem:e},t=``){let n=e||`latn`,r=nn.get(n);r===void 0&&(r=new Map,nn.set(n,r));let i=r.get(t);return i===void 0&&(i=RegExp(`${Qt[n]}${t}`),r.set(t,i)),i}var on=()=>Date.now(),sn=`system`,cn=null,ln=null,un=null,dn=60,fn,pn=null,mn=class{static get now(){return on}static set now(e){on=e}static set defaultZone(e){sn=e}static get defaultZone(){return Zt(sn,ht.instance)}static get defaultLocale(){return cn}static set defaultLocale(e){cn=e}static get defaultNumberingSystem(){return ln}static set defaultNumberingSystem(e){ln=e}static get defaultOutputCalendar(){return un}static set defaultOutputCalendar(e){un=e}static get defaultWeekSettings(){return pn}static set defaultWeekSettings(e){pn=Un(e)}static get twoDigitCutoffYear(){return dn}static set twoDigitCutoffYear(e){dn=e%100}static get throwOnInvalid(){return fn}static set throwOnInvalid(e){fn=e}static resetCaches(){qt.resetCache(),St.resetCache(),Ya.resetCache(),rn()}},hn=class{constructor(e,t){this.reason=e,this.explanation=t}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}},gn=[0,31,59,90,120,151,181,212,243,273,304,334],_n=[0,31,60,91,121,152,182,213,244,274,305,335];function vn(e,t){return new hn(`unit out of range`,`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function yn(e,t,n){let r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);let i=r.getUTCDay();return i===0?7:i}function bn(e,t,n){return n+(Zn(e)?_n:gn)[t-1]}function xn(e,t){let n=Zn(e)?_n:gn,r=n.findIndex(e=>e<t),i=t-n[r];return{month:r+1,day:i}}function Sn(e,t){return(e-t+7)%7+1}function Cn(e,t=4,n=1){let{year:r,month:i,day:a}=e,o=bn(r,i,a),s=Sn(yn(r,i,a),n),c=Math.floor((o-s+14-t)/7),l;return c<1?(l=r-1,c=nr(l,t,n)):c>nr(r,t,n)?(l=r+1,c=1):l=r,{weekYear:l,weekNumber:c,weekday:s,...lr(e)}}function wn(e,t=4,n=1){let{weekYear:r,weekNumber:i,weekday:a}=e,o=Sn(yn(r,1,t),n),s=Qn(r),c=i*7+a-o-7+t,l;c<1?(l=r-1,c+=Qn(l)):c>s?(l=r+1,c-=Qn(r)):l=r;let{month:u,day:d}=xn(l,c);return{year:l,month:u,day:d,...lr(e)}}function Tn(e){let{year:t,month:n,day:r}=e;return{year:t,ordinal:bn(t,n,r),...lr(e)}}function En(e){let{year:t,ordinal:n}=e,{month:r,day:i}=xn(t,n);return{year:t,month:r,day:i,...lr(e)}}function Dn(e,t){if(!Mn(e.localWeekday)||!Mn(e.localWeekNumber)||!Mn(e.localWeekYear)){if(!Mn(e.weekday)||!Mn(e.weekNumber)||!Mn(e.weekYear))throw new ze(`Cannot mix locale-based week fields with ISO-based week fields`);return Mn(e.localWeekday)||(e.weekday=e.localWeekday),Mn(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),Mn(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function On(e,t=4,n=1){let r=Pn(e.weekYear),i=Wn(e.weekNumber,1,nr(e.weekYear,t,n)),a=Wn(e.weekday,1,7);return r?i?a?!1:vn(`weekday`,e.weekday):vn(`week`,e.weekNumber):vn(`weekYear`,e.weekYear)}function kn(e){let t=Pn(e.year),n=Wn(e.ordinal,1,Qn(e.year));return t?n?!1:vn(`ordinal`,e.ordinal):vn(`year`,e.year)}function An(e){let t=Pn(e.year),n=Wn(e.month,1,12),r=Wn(e.day,1,$n(e.year,e.month));return t?n?r?!1:vn(`day`,e.day):vn(`month`,e.month):vn(`year`,e.year)}function jn(e){let{hour:t,minute:n,second:r,millisecond:i}=e,a=Wn(t,0,23)||t===24&&n===0&&r===0&&i===0,o=Wn(n,0,59),s=Wn(r,0,59),c=Wn(i,0,999);return a?o?s?c?!1:vn(`millisecond`,i):vn(`second`,r):vn(`minute`,n):vn(`hour`,t)}function Mn(e){return e===void 0}function Nn(e){return typeof e==`number`}function Pn(e){return typeof e==`number`&&e%1==0}function Fn(e){return typeof e==`string`}function In(e){return Object.prototype.toString.call(e)===`[object Date]`}function Ln(){try{return typeof Intl<`u`&&!!Intl.RelativeTimeFormat}catch{return!1}}function Rn(){try{return typeof Intl<`u`&&!!Intl.Locale&&(`weekInfo`in Intl.Locale.prototype||`getWeekInfo`in Intl.Locale.prototype)}catch{return!1}}function zn(e){return Array.isArray(e)?e:[e]}function Bn(e,t,n){if(e.length!==0)return e.reduce((e,r)=>{let i=[t(r),r];return e&&n(e[0],i[0])===e[0]?e:i},null)[1]}function Vn(e,t){return t.reduce((t,n)=>(t[n]=e[n],t),{})}function Hn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Un(e){if(e==null)return null;if(typeof e!=`object`)throw new Ve(`Week settings must be an object`);if(!Wn(e.firstDay,1,7)||!Wn(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(e=>!Wn(e,1,7)))throw new Ve(`Invalid week settings`);return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Wn(e,t,n){return Pn(e)&&e>=t&&e<=n}function Gn(e,t){return e-t*Math.floor(e/t)}function Kn(e,t=2){let n=e<0,r;return r=n?`-`+(``+-e).padStart(t,`0`):(``+e).padStart(t,`0`),r}function qn(e){if(!(Mn(e)||e===null||e===``))return parseInt(e,10)}function Jn(e){if(!(Mn(e)||e===null||e===``))return parseFloat(e)}function Yn(e){if(!(Mn(e)||e===null||e===``)){let t=parseFloat(`0.`+e)*1e3;return Math.floor(t)}}function Xn(e,t,n=`round`){let r=10**t;switch(n){case`expand`:return e>0?Math.ceil(e*r)/r:Math.floor(e*r)/r;case`trunc`:return Math.trunc(e*r)/r;case`round`:return Math.round(e*r)/r;case`floor`:return Math.floor(e*r)/r;case`ceil`:return Math.ceil(e*r)/r;default:throw RangeError(`Value rounding ${n} is out of range`)}}function Zn(e){return e%4==0&&(e%100!=0||e%400==0)}function Qn(e){return Zn(e)?366:365}function $n(e,t){let n=Gn(t-1,12)+1,r=e+(t-n)/12;return n===2?Zn(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function er(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function tr(e,t,n){return-Sn(yn(e,1,t),n)+t-1}function nr(e,t=4,n=1){let r=tr(e,t,n),i=tr(e+1,t,n);return(Qn(e)-r+i)/7}function rr(e){return e>99?e:e>mn.twoDigitCutoffYear?1900+e:2e3+e}function ir(e,t,n,r=null){let i=new Date(e),a={hourCycle:`h23`,year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`};r&&(a.timeZone=r);let o={timeZoneName:t,...a},s=new Intl.DateTimeFormat(n,o).formatToParts(i).find(e=>e.type.toLowerCase()===`timezonename`);return s?s.value:null}function ar(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);let r=parseInt(t,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}function or(e){let t=Number(e);if(typeof e==`boolean`||e===``||!Number.isFinite(t))throw new Ve(`Invalid unit value ${e}`);return t}function sr(e,t){let n={};for(let r in e)if(Hn(e,r)){let i=e[r];if(i==null)continue;n[t(r)]=or(i)}return n}function cr(e,t){let n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?`+`:`-`;switch(t){case`short`:return`${i}${Kn(n,2)}:${Kn(r,2)}`;case`narrow`:return`${i}${n}${r>0?`:${r}`:``}`;case`techie`:return`${i}${Kn(n,2)}${Kn(r,2)}`;default:throw RangeError(`Value format ${t} is out of range for property format`)}}function lr(e){return Vn(e,[`hour`,`minute`,`second`,`millisecond`])}var ur=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],dr=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],fr=[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`];function pr(e){switch(e){case`narrow`:return[...fr];case`short`:return[...dr];case`long`:return[...ur];case`numeric`:return[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`];case`2-digit`:return[`01`,`02`,`03`,`04`,`05`,`06`,`07`,`08`,`09`,`10`,`11`,`12`];default:return null}}var mr=[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`],hr=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],gr=[`M`,`T`,`W`,`T`,`F`,`S`,`S`];function _r(e){switch(e){case`narrow`:return[...gr];case`short`:return[...hr];case`long`:return[...mr];case`numeric`:return[`1`,`2`,`3`,`4`,`5`,`6`,`7`];default:return null}}var vr=[`AM`,`PM`],yr=[`Before Christ`,`Anno Domini`],br=[`BC`,`AD`],xr=[`B`,`A`];function Sr(e){switch(e){case`narrow`:return[...xr];case`short`:return[...br];case`long`:return[...yr];default:return null}}function Cr(e){return vr[e.hour<12?0:1]}function wr(e,t){return _r(t)[e.weekday-1]}function Tr(e,t){return pr(t)[e.month-1]}function Er(e,t){return Sr(t)[e.year<0?0:1]}function Dr(e,t,n=`always`,r=!1){let i={years:[`year`,`yr.`],quarters:[`quarter`,`qtr.`],months:[`month`,`mo.`],weeks:[`week`,`wk.`],days:[`day`,`day`,`days`],hours:[`hour`,`hr.`],minutes:[`minute`,`min.`],seconds:[`second`,`sec.`]},a=[`hours`,`minutes`,`seconds`].indexOf(e)===-1;if(n===`auto`&&a){let n=e===`days`;switch(t){case 1:return n?`tomorrow`:`next ${i[e][0]}`;case-1:return n?`yesterday`:`last ${i[e][0]}`;case 0:return n?`today`:`this ${i[e][0]}`}}let o=Object.is(t,-0)||t<0,s=Math.abs(t),c=s===1,l=i[e],u=r?c?l[1]:l[2]||l[1]:c?i[e][0]:e;return o?`${s} ${u} ago`:`in ${s} ${u}`}function Or(e,t){let n=``;for(let r of e)r.literal?n+=r.val:n+=t(r.val);return n}var kr={D:Ge,DD:Ke,DDD:Je,DDDD:Ye,t:Xe,tt:Ze,ttt:Qe,tttt:$e,T:et,TT:tt,TTT:nt,TTTT:rt,f:it,ff:ot,fff:lt,ffff:dt,F:at,FF:st,FFF:ut,FFFF:ft},Ar=class e{static create(t,n={}){return new e(t,n)}static parseFormat(e){let t=null,n=``,r=!1,i=[];for(let a=0;a<e.length;a++){let o=e.charAt(a);o===`'`?((n.length>0||r)&&i.push({literal:r||/^\s+$/.test(n),val:n===``?`'`:n}),t=null,n=``,r=!r):r||o===t?n+=o:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=o,t=o)}return n.length>0&&i.push({literal:r||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(e){return kr[e]}constructor(e,t){this.opts=t,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,t){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...t}).format()}dtFormatter(e,t={}){return this.loc.dtFormatter(e,{...this.opts,...t})}formatDateTime(e,t){return this.dtFormatter(e,t).format()}formatDateTimeParts(e,t){return this.dtFormatter(e,t).formatToParts()}formatInterval(e,t){return this.dtFormatter(e.start,t).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,t){return this.dtFormatter(e,t).resolvedOptions()}num(e,t=0,n=void 0){if(this.opts.forceSimple)return Kn(e,t);let r={...this.opts};return t>0&&(r.padTo=t),n&&(r.signDisplay=n),this.loc.numberFormatter(r).format(e)}formatDateTimeFromString(t,n){let r=this.loc.listingMode()===`en`,i=this.loc.outputCalendar&&this.loc.outputCalendar!==`gregory`,a=(e,n)=>this.loc.extract(t,e,n),o=e=>t.isOffsetFixed&&t.offset===0&&e.allowZ?`Z`:t.isValid?t.zone.formatOffset(t.ts,e.format):``,s=()=>r?Cr(t):a({hour:`numeric`,hourCycle:`h12`},`dayperiod`),c=(e,n)=>r?Tr(t,e):a(n?{month:e}:{month:e,day:`numeric`},`month`),l=(e,n)=>r?wr(t,e):a(n?{weekday:e}:{weekday:e,month:`long`,day:`numeric`},`weekday`),u=n=>{let r=e.macroTokenToFormatOpts(n);return r?this.formatWithSystemDefault(t,r):n},d=e=>r?Er(t,e):a({era:e},`era`);return Or(e.parseFormat(n),e=>{switch(e){case`S`:return this.num(t.millisecond);case`u`:case`SSS`:return this.num(t.millisecond,3);case`s`:return this.num(t.second);case`ss`:return this.num(t.second,2);case`uu`:return this.num(Math.floor(t.millisecond/10),2);case`uuu`:return this.num(Math.floor(t.millisecond/100));case`m`:return this.num(t.minute);case`mm`:return this.num(t.minute,2);case`h`:return this.num(t.hour%12==0?12:t.hour%12);case`hh`:return this.num(t.hour%12==0?12:t.hour%12,2);case`H`:return this.num(t.hour);case`HH`:return this.num(t.hour,2);case`Z`:return o({format:`narrow`,allowZ:this.opts.allowZ});case`ZZ`:return o({format:`short`,allowZ:this.opts.allowZ});case`ZZZ`:return o({format:`techie`,allowZ:this.opts.allowZ});case`ZZZZ`:return t.zone.offsetName(t.ts,{format:`short`,locale:this.loc.locale});case`ZZZZZ`:return t.zone.offsetName(t.ts,{format:`long`,locale:this.loc.locale});case`z`:return t.zoneName;case`a`:return s();case`d`:return i?a({day:`numeric`},`day`):this.num(t.day);case`dd`:return i?a({day:`2-digit`},`day`):this.num(t.day,2);case`c`:return this.num(t.weekday);case`ccc`:return l(`short`,!0);case`cccc`:return l(`long`,!0);case`ccccc`:return l(`narrow`,!0);case`E`:return this.num(t.weekday);case`EEE`:return l(`short`,!1);case`EEEE`:return l(`long`,!1);case`EEEEE`:return l(`narrow`,!1);case`L`:return i?a({month:`numeric`,day:`numeric`},`month`):this.num(t.month);case`LL`:return i?a({month:`2-digit`,day:`numeric`},`month`):this.num(t.month,2);case`LLL`:return c(`short`,!0);case`LLLL`:return c(`long`,!0);case`LLLLL`:return c(`narrow`,!0);case`M`:return i?a({month:`numeric`},`month`):this.num(t.month);case`MM`:return i?a({month:`2-digit`},`month`):this.num(t.month,2);case`MMM`:return c(`short`,!1);case`MMMM`:return c(`long`,!1);case`MMMMM`:return c(`narrow`,!1);case`y`:return i?a({year:`numeric`},`year`):this.num(t.year);case`yy`:return i?a({year:`2-digit`},`year`):this.num(t.year.toString().slice(-2),2);case`yyyy`:return i?a({year:`numeric`},`year`):this.num(t.year,4);case`yyyyyy`:return i?a({year:`numeric`},`year`):this.num(t.year,6);case`G`:return d(`short`);case`GG`:return d(`long`);case`GGGGG`:return d(`narrow`);case`kk`:return this.num(t.weekYear.toString().slice(-2),2);case`kkkk`:return this.num(t.weekYear,4);case`W`:return this.num(t.weekNumber);case`WW`:return this.num(t.weekNumber,2);case`n`:return this.num(t.localWeekNumber);case`nn`:return this.num(t.localWeekNumber,2);case`ii`:return this.num(t.localWeekYear.toString().slice(-2),2);case`iiii`:return this.num(t.localWeekYear,4);case`o`:return this.num(t.ordinal);case`ooo`:return this.num(t.ordinal,3);case`q`:return this.num(t.quarter);case`qq`:return this.num(t.quarter,2);case`X`:return this.num(Math.floor(t.ts/1e3));case`x`:return this.num(t.ts);default:return u(e)}})}formatDurationFromString(t,n){let r=this.opts.signMode===`negativeLargestOnly`?-1:1,i=e=>{switch(e[0]){case`S`:return`milliseconds`;case`s`:return`seconds`;case`m`:return`minutes`;case`h`:return`hours`;case`d`:return`days`;case`w`:return`weeks`;case`M`:return`months`;case`y`:return`years`;default:return null}},a=(e,t)=>n=>{let a=i(n);if(a){let i=t.isNegativeDuration&&a!==t.largestUnit?r:1,o;return o=this.opts.signMode===`negativeLargestOnly`&&a!==t.largestUnit?`never`:this.opts.signMode===`all`?`always`:`auto`,this.num(e.get(a)*i,n.length,o)}else return n},o=e.parseFormat(n),s=o.reduce((e,{literal:t,val:n})=>t?e:e.concat(n),[]),c=t.shiftTo(...s.map(i).filter(e=>e));return Or(o,a(c,{isNegativeDuration:c<0,largestUnit:Object.keys(c.values)[0]}))}},jr=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Mr(...e){let t=e.reduce((e,t)=>e+t.source,``);return RegExp(`^${t}$`)}function Nr(...e){return t=>e.reduce(([e,n,r],i)=>{let[a,o,s]=i(t,r);return[{...e,...a},o||n,s]},[{},null,1]).slice(0,2)}function Pr(e,...t){if(e==null)return[null,null];for(let[n,r]of t){let t=n.exec(e);if(t)return r(t)}return[null,null]}function Fr(...e){return(t,n)=>{let r={},i;for(i=0;i<e.length;i++)r[e[i]]=qn(t[n+i]);return[r,null,n+i]}}var Ir=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,Lr=`(?:${Ir.source}?(?:\\[(${jr.source})\\])?)?`,Rr=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,zr=RegExp(`${Rr.source}${Lr}`),Br=RegExp(`(?:[Tt]${zr.source})?`),Vr=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Hr=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Ur=/(\d{4})-?(\d{3})/,Wr=Fr(`weekYear`,`weekNumber`,`weekDay`),Gr=Fr(`year`,`ordinal`),Kr=/(\d{4})-(\d\d)-(\d\d)/,qr=RegExp(`${Rr.source} ?(?:${Ir.source}|(${jr.source}))?`),Jr=RegExp(`(?: ${qr.source})?`);function Yr(e,t,n){let r=e[t];return Mn(r)?n:qn(r)}function Xr(e,t){return[{year:Yr(e,t),month:Yr(e,t+1,1),day:Yr(e,t+2,1)},null,t+3]}function Zr(e,t){return[{hours:Yr(e,t,0),minutes:Yr(e,t+1,0),seconds:Yr(e,t+2,0),milliseconds:Yn(e[t+3])},null,t+4]}function Qr(e,t){let n=!e[t]&&!e[t+1],r=ar(e[t+1],e[t+2]);return[{},n?null:Yt.instance(r),t+3]}function $r(e,t){return[{},e[t]?St.create(e[t]):null,t+1]}var ei=RegExp(`^T?${Rr.source}$`),ti=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function ni(e){let[t,n,r,i,a,o,s,c,l]=e,u=t[0]===`-`,d=c&&c[0]===`-`,f=(e,t=!1)=>e!==void 0&&(t||e&&u)?-e:e;return[{years:f(Jn(n)),months:f(Jn(r)),weeks:f(Jn(i)),days:f(Jn(a)),hours:f(Jn(o)),minutes:f(Jn(s)),seconds:f(Jn(c),c===`-0`),milliseconds:f(Yn(l),d)}]}var ri={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function ii(e,t,n,r,i,a,o){let s={year:t.length===2?rr(qn(t)):qn(t),month:dr.indexOf(n)+1,day:qn(r),hour:qn(i),minute:qn(a)};return o&&(s.second=qn(o)),e&&(s.weekday=e.length>3?mr.indexOf(e)+1:hr.indexOf(e)+1),s}var ai=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function oi(e){let[,t,n,r,i,a,o,s,c,l,u,d]=e,f=ii(t,i,r,n,a,o,s),p;return p=c?ri[c]:l?0:ar(u,d),[f,new Yt(p)]}function si(e){return e.replace(/\([^()]*\)|[\n\t]/g,` `).replace(/(\s\s+)/g,` `).trim()}var ci=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,li=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,ui=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function di(e){let[,t,n,r,i,a,o,s]=e;return[ii(t,i,r,n,a,o,s),Yt.utcInstance]}function fi(e){let[,t,n,r,i,a,o,s]=e;return[ii(t,s,n,r,i,a,o),Yt.utcInstance]}var pi=Mr(Vr,Br),mi=Mr(Hr,Br),hi=Mr(Ur,Br),gi=Mr(zr),_i=Nr(Xr,Zr,Qr,$r),vi=Nr(Wr,Zr,Qr,$r),yi=Nr(Gr,Zr,Qr,$r),bi=Nr(Zr,Qr,$r);function xi(e){return Pr(e,[pi,_i],[mi,vi],[hi,yi],[gi,bi])}function Si(e){return Pr(si(e),[ai,oi])}function Ci(e){return Pr(e,[ci,di],[li,di],[ui,fi])}function wi(e){return Pr(e,[ti,ni])}var Ti=Nr(Zr);function Ei(e){return Pr(e,[ei,Ti])}var Di=Mr(Kr,Jr),Oi=Mr(qr),ki=Nr(Zr,Qr,$r);function Ai(e){return Pr(e,[Di,_i],[Oi,ki])}var ji=`Invalid Duration`,Mi={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Ni={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...Mi},Pi=146097/400,Fi=146097/4800,Ii={years:{quarters:4,months:12,weeks:Pi/7,days:Pi,hours:Pi*24,minutes:Pi*24*60,seconds:Pi*24*60*60,milliseconds:Pi*24*60*60*1e3},quarters:{months:3,weeks:Pi/28,days:Pi/4,hours:Pi*24/4,minutes:Pi*24*60/4,seconds:Pi*24*60*60/4,milliseconds:Pi*24*60*60*1e3/4},months:{weeks:Fi/7,days:Fi,hours:Fi*24,minutes:Fi*24*60,seconds:Fi*24*60*60,milliseconds:Fi*24*60*60*1e3},...Mi},Li=[`years`,`quarters`,`months`,`weeks`,`days`,`hours`,`minutes`,`seconds`,`milliseconds`],Ri=Li.slice(0).reverse();function zi(e,t,n=!1){return new Ui({values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix})}function Bi(e,t){let n=t.milliseconds??0;for(let r of Ri.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function Vi(e,t){let n=Bi(e,t)<0?-1:1;Li.reduceRight((r,i)=>{if(Mn(t[i]))return r;if(r){let a=t[r]*n,o=e[i][r],s=Math.floor(a/o);t[i]+=s*n,t[r]-=s*o*n}return i},null),Li.reduce((n,r)=>{if(Mn(t[r]))return n;if(n){let i=t[n]%1;t[n]-=i,t[r]+=i*e[n][r]}return r},null)}function Hi(e){let t={};for(let[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}var Ui=class e{constructor(e){let t=e.conversionAccuracy===`longterm`||!1,n=t?Ii:Ni;e.matrix&&(n=e.matrix),this.values=e.values,this.loc=e.loc||qt.create(),this.conversionAccuracy=t?`longterm`:`casual`,this.invalid=e.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,n){return e.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(typeof t!=`object`||!t)throw new Ve(`Duration.fromObject: argument expected to be an object, got ${t===null?`null`:typeof t}`);return new e({values:sr(t,e.normalizeUnit),loc:qt.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(Nn(t))return e.fromMillis(t);if(e.isDuration(t))return t;if(typeof t==`object`)return e.fromObject(t);throw new Ve(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){let[r]=wi(t);return r?e.fromObject(r,n):e.invalid(`unparsable`,`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){let[r]=Ei(t);return r?e.fromObject(r,n):e.invalid(`unparsable`,`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new Ve(`need to specify a reason the Duration is invalid`);let r=t instanceof hn?t:new hn(t,n);if(mn.throwOnInvalid)throw new Re(r);return new e({invalid:r})}static normalizeUnit(e){let t={year:`years`,years:`years`,quarter:`quarters`,quarters:`quarters`,month:`months`,months:`months`,week:`weeks`,weeks:`weeks`,day:`days`,days:`days`,hour:`hours`,hours:`hours`,minute:`minutes`,minutes:`minutes`,second:`seconds`,seconds:`seconds`,millisecond:`milliseconds`,milliseconds:`milliseconds`}[e&&e.toLowerCase()];if(!t)throw new Be(e);return t}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,t={}){let n={...t,floor:t.round!==!1&&t.floor!==!1};return this.isValid?Ar.create(this.loc,n).formatDurationFromString(this,e):ji}toHuman(e={}){if(!this.isValid)return ji;let t=e.showZeros!==!1,n=Li.map(n=>{let r=this.values[n];return Mn(r)||r===0&&!t?null:this.loc.numberFormatter({style:`unit`,unitDisplay:`long`,...e,unit:n.slice(0,-1)}).format(r)}).filter(e=>e);return this.loc.listFormatter({type:`conjunction`,style:e.listStyle||`narrow`,...e}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e=`P`;return this.years!==0&&(e+=this.years+`Y`),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+`M`),this.weeks!==0&&(e+=this.weeks+`W`),this.days!==0&&(e+=this.days+`D`),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+=`T`),this.hours!==0&&(e+=this.hours+`H`),this.minutes!==0&&(e+=this.minutes+`M`),(this.seconds!==0||this.milliseconds!==0)&&(e+=Xn(this.seconds+this.milliseconds/1e3,3)+`S`),e===`P`&&(e+=`T0S`),e}toISOTime(e={}){if(!this.isValid)return null;let t=this.toMillis();return t<0||t>=864e5?null:(e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:`extended`,...e,includeOffset:!1},Ya.fromMillis(t,{zone:`UTC`}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for(`nodejs.util.inspect.custom`)](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Bi(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;let n=e.fromDurationLike(t),r={};for(let e of Li)(Hn(n.values,e)||Hn(this.values,e))&&(r[e]=n.get(e)+this.get(e));return zi(this,{values:r},!0)}minus(t){if(!this.isValid)return this;let n=e.fromDurationLike(t);return this.plus(n.negate())}mapUnits(e){if(!this.isValid)return this;let t={};for(let n of Object.keys(this.values))t[n]=or(e(this.values[n],n));return zi(this,{values:t},!0)}get(t){return this[e.normalizeUnit(t)]}set(t){if(!this.isValid)return this;let n={...this.values,...sr(t,e.normalizeUnit)};return zi(this,{values:n})}reconfigure({locale:e,numberingSystem:t,conversionAccuracy:n,matrix:r}={}){let i={loc:this.loc.clone({locale:e,numberingSystem:t}),matrix:r,conversionAccuracy:n};return zi(this,i)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;let e=this.toObject();return Vi(this.matrix,e),zi(this,{values:e},!0)}rescale(){if(!this.isValid)return this;let e=Hi(this.normalize().shiftToAll().toObject());return zi(this,{values:e},!0)}shiftTo(...t){if(!this.isValid||t.length===0)return this;t=t.map(t=>e.normalizeUnit(t));let n={},r={},i=this.toObject(),a;for(let e of Li)if(t.indexOf(e)>=0){a=e;let t=0;for(let n in r)t+=this.matrix[n][e]*r[n],r[n]=0;Nn(i[e])&&(t+=i[e]);let o=Math.trunc(t);n[e]=o,r[e]=(t*1e3-o*1e3)/1e3}else Nn(i[e])&&(r[e]=i[e]);for(let e in r)r[e]!==0&&(n[a]+=e===a?r[e]:r[e]/this.matrix[a][e]);return Vi(this.matrix,n),zi(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo(`years`,`months`,`weeks`,`days`,`hours`,`minutes`,`seconds`,`milliseconds`):this}negate(){if(!this.isValid)return this;let e={};for(let t of Object.keys(this.values))e[t]=this.values[t]===0?0:-this.values[t];return zi(this,{values:e},!0)}removeZeros(){if(!this.isValid)return this;let e=Hi(this.values);return zi(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function t(e,t){return e===void 0||e===0?t===void 0||t===0:e===t}for(let n of Li)if(!t(this.values[n],e.values[n]))return!1;return!0}},Wi=`Invalid Interval`;function Gi(e,t){return!e||!e.isValid?Ki.invalid(`missing or invalid start`):!t||!t.isValid?Ki.invalid(`missing or invalid end`):t<e?Ki.invalid(`end before start`,`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}var Ki=class e{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new Ve(`need to specify a reason the Interval is invalid`);let r=t instanceof hn?t:new hn(t,n);if(mn.throwOnInvalid)throw new Le(r);return new e({invalid:r})}static fromDateTimes(t,n){let r=Xa(t),i=Xa(n);return Gi(r,i)??new e({start:r,end:i})}static after(t,n){let r=Ui.fromDurationLike(n),i=Xa(t);return e.fromDateTimes(i,i.plus(r))}static before(t,n){let r=Ui.fromDurationLike(n),i=Xa(t);return e.fromDateTimes(i.minus(r),i)}static fromISO(t,n){let[r,i]=(t||``).split(`/`,2);if(r&&i){let t,a;try{t=Ya.fromISO(r,n),a=t.isValid}catch{a=!1}let o,s;try{o=Ya.fromISO(i,n),s=o.isValid}catch{s=!1}if(a&&s)return e.fromDateTimes(t,o);if(a){let r=Ui.fromISO(i,n);if(r.isValid)return e.after(t,r)}else if(s){let t=Ui.fromISO(r,n);if(t.isValid)return e.before(o,t)}}return e.invalid(`unparsable`,`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e=`milliseconds`){return this.isValid?this.toDuration(e).get(e):NaN}count(e=`milliseconds`,t){if(!this.isValid)return NaN;let n=this.start.startOf(e,t),r;return r=t?.useLocaleWeeks?this.end.reconfigure({locale:n.locale}):this.end,r=r.startOf(e,t),Math.floor(r.diff(n,e).get(e))+(r.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:t,end:n}={}){return this.isValid?e.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];let n=t.map(Xa).filter(e=>this.contains(e)).sort((e,t)=>e.toMillis()-t.toMillis()),r=[],{s:i}=this,a=0;for(;i<this.e;){let t=n[a]||this.e,o=+t>+this.e?this.e:t;r.push(e.fromDateTimes(i,o)),i=o,a+=1}return r}splitBy(t){let n=Ui.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as(`milliseconds`)===0)return[];let{s:r}=this,i=1,a,o=[];for(;r<this.e;){let t=this.start.plus(n.mapUnits(e=>e*i));a=+t>+this.e?this.e:t,o.push(e.fromDateTimes(r,a)),r=a,i+=1}return o}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(t){if(!this.isValid)return this;let n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:e.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;let n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return e.fromDateTimes(n,r)}static merge(e){let[t,n]=e.sort((e,t)=>e.s-t.s).reduce(([e,t],n)=>t?t.overlaps(n)||t.abutsStart(n)?[e,t.union(n)]:[e.concat([t]),n]:[e,n],[[],null]);return n&&t.push(n),t}static xor(t){let n=null,r=0,i=[],a=t.map(e=>[{time:e.s,type:`s`},{time:e.e,type:`e`}]),o=Array.prototype.concat(...a).sort((e,t)=>e.time-t.time);for(let t of o)r+=t.type===`s`?1:-1,r===1?n=t.time:(n&&+n!=+t.time&&i.push(e.fromDateTimes(n,t.time)),n=null);return e.merge(i)}difference(...t){return e.xor([this].concat(t)).map(e=>this.intersection(e)).filter(e=>e&&!e.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Wi}[Symbol.for(`nodejs.util.inspect.custom`)](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(e=Ge,t={}){return this.isValid?Ar.create(this.s.loc.clone(t),e).formatInterval(this):Wi}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:Wi}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Wi}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:Wi}toFormat(e,{separator:t=` – `}={}){return this.isValid?`${this.s.toFormat(e)}${t}${this.e.toFormat(e)}`:Wi}toDuration(e,t){return this.isValid?this.e.diff(this.s,e,t):Ui.invalid(this.invalidReason)}mapEndpoints(t){return e.fromDateTimes(t(this.s),t(this.e))}},qi=class{static hasDST(e=mn.defaultZone){let t=Ya.now().setZone(e).set({month:12});return!e.isUniversal&&t.offset!==t.set({month:6}).offset}static isValidIANAZone(e){return St.isValidZone(e)}static normalizeZone(e){return Zt(e,mn.defaultZone)}static getStartOfWeek({locale:e=null,locObj:t=null}={}){return(t||qt.create(e)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:e=null,locObj:t=null}={}){return(t||qt.create(e)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:e=null,locObj:t=null}={}){return(t||qt.create(e)).getWeekendDays().slice()}static months(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null,outputCalendar:i=`gregory`}={}){return(r||qt.create(t,n,i)).months(e)}static monthsFormat(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null,outputCalendar:i=`gregory`}={}){return(r||qt.create(t,n,i)).months(e,!0)}static weekdays(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null}={}){return(r||qt.create(t,n,null)).weekdays(e)}static weekdaysFormat(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null}={}){return(r||qt.create(t,n,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return qt.create(e).meridiems()}static eras(e=`short`,{locale:t=null}={}){return qt.create(t,null,`gregory`).eras(e)}static features(){return{relative:Ln(),localeWeek:Rn()}}};function Ji(e,t){let n=e=>e.toUTC(0,{keepLocalTime:!0}).startOf(`day`).valueOf(),r=n(t)-n(e);return Math.floor(Ui.fromMillis(r).as(`days`))}function Yi(e,t,n){let r=[[`years`,(e,t)=>t.year-e.year],[`quarters`,(e,t)=>t.quarter-e.quarter+(t.year-e.year)*4],[`months`,(e,t)=>t.month-e.month+(t.year-e.year)*12],[`weeks`,(e,t)=>{let n=Ji(e,t);return(n-n%7)/7}],[`days`,Ji]],i={},a=e,o,s;for(let[c,l]of r)n.indexOf(c)>=0&&(o=c,i[c]=l(e,t),s=a.plus(i),s>t?(i[c]--,e=a.plus(i),e>t&&(s=e,i[c]--,e=a.plus(i))):e=s);return[e,i,s,o]}function Xi(e,t,n,r){let[i,a,o,s]=Yi(e,t,n),c=t-i,l=n.filter(e=>[`hours`,`minutes`,`seconds`,`milliseconds`].indexOf(e)>=0);l.length===0&&(o<t&&(o=i.plus({[s]:1})),o!==i&&(a[s]=(a[s]||0)+c/(o-i)));let u=Ui.fromObject(a,r);return l.length>0?Ui.fromMillis(c,r).shiftTo(...l).plus(u):u}var Zi=`missing Intl.DateTimeFormat.formatToParts support`;function Qi(e,t=e=>e){return{regex:e,deser:([e])=>t(tn(e))}}var $i=`[ \xA0]`,ea=new RegExp($i,`g`);function ta(e){return e.replace(/\./g,`\\.?`).replace(ea,$i)}function na(e){return e.replace(/\./g,``).replace(ea,` `).toLowerCase()}function ra(e,t){return e===null?null:{regex:RegExp(e.map(ta).join(`|`)),deser:([n])=>e.findIndex(e=>na(n)===na(e))+t}}function ia(e,t){return{regex:e,deser:([,e,t])=>ar(e,t),groups:t}}function aa(e){return{regex:e,deser:([e])=>e}}function oa(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,`\\$&`)}function sa(e,t){let n=an(t),r=an(t,`{2}`),i=an(t,`{3}`),a=an(t,`{4}`),o=an(t,`{6}`),s=an(t,`{1,2}`),c=an(t,`{1,3}`),l=an(t,`{1,6}`),u=an(t,`{1,9}`),d=an(t,`{2,4}`),f=an(t,`{4,6}`),p=e=>({regex:RegExp(oa(e.val)),deser:([e])=>e,literal:!0}),m=(m=>{if(e.literal)return p(m);switch(m.val){case`G`:return ra(t.eras(`short`),0);case`GG`:return ra(t.eras(`long`),0);case`y`:return Qi(l);case`yy`:return Qi(d,rr);case`yyyy`:return Qi(a);case`yyyyy`:return Qi(f);case`yyyyyy`:return Qi(o);case`M`:return Qi(s);case`MM`:return Qi(r);case`MMM`:return ra(t.months(`short`,!0),1);case`MMMM`:return ra(t.months(`long`,!0),1);case`L`:return Qi(s);case`LL`:return Qi(r);case`LLL`:return ra(t.months(`short`,!1),1);case`LLLL`:return ra(t.months(`long`,!1),1);case`d`:return Qi(s);case`dd`:return Qi(r);case`o`:return Qi(c);case`ooo`:return Qi(i);case`HH`:return Qi(r);case`H`:return Qi(s);case`hh`:return Qi(r);case`h`:return Qi(s);case`mm`:return Qi(r);case`m`:return Qi(s);case`q`:return Qi(s);case`qq`:return Qi(r);case`s`:return Qi(s);case`ss`:return Qi(r);case`S`:return Qi(c);case`SSS`:return Qi(i);case`u`:return aa(u);case`uu`:return aa(s);case`uuu`:return Qi(n);case`a`:return ra(t.meridiems(),0);case`kkkk`:return Qi(a);case`kk`:return Qi(d,rr);case`W`:return Qi(s);case`WW`:return Qi(r);case`E`:case`c`:return Qi(n);case`EEE`:return ra(t.weekdays(`short`,!1),1);case`EEEE`:return ra(t.weekdays(`long`,!1),1);case`ccc`:return ra(t.weekdays(`short`,!0),1);case`cccc`:return ra(t.weekdays(`long`,!0),1);case`Z`:case`ZZ`:return ia(RegExp(`([+-]${s.source})(?::(${r.source}))?`),2);case`ZZZ`:return ia(RegExp(`([+-]${s.source})(${r.source})?`),2);case`z`:return aa(/[a-z_+-/]{1,256}?/i);case` `:return aa(/[^\S\n\r]/);default:return p(m)}})(e)||{invalidReason:Zi};return m.token=e,m}var ca={year:{"2-digit":`yy`,numeric:`yyyyy`},month:{numeric:`M`,"2-digit":`MM`,short:`MMM`,long:`MMMM`},day:{numeric:`d`,"2-digit":`dd`},weekday:{short:`EEE`,long:`EEEE`},dayperiod:`a`,dayPeriod:`a`,hour12:{numeric:`h`,"2-digit":`hh`},hour24:{numeric:`H`,"2-digit":`HH`},minute:{numeric:`m`,"2-digit":`mm`},second:{numeric:`s`,"2-digit":`ss`},timeZoneName:{long:`ZZZZZ`,short:`ZZZ`}};function la(e,t,n){let{type:r,value:i}=e;if(r===`literal`){let e=/^\s+$/.test(i);return{literal:!e,val:e?` `:i}}let a=t[r],o=r;r===`hour`&&(o=t.hour12==null?t.hourCycle==null?n.hour12?`hour12`:`hour24`:t.hourCycle===`h11`||t.hourCycle===`h12`?`hour12`:`hour24`:t.hour12?`hour12`:`hour24`);let s=ca[o];if(typeof s==`object`&&(s=s[a]),s)return{literal:!1,val:s}}function ua(e){return[`^${e.map(e=>e.regex).reduce((e,t)=>`${e}(${t.source})`,``)}$`,e]}function da(e,t,n){let r=e.match(t);if(r){let e={},t=1;for(let i in n)if(Hn(n,i)){let a=n[i],o=a.groups?a.groups+1:1;!a.literal&&a.token&&(e[a.token.val[0]]=a.deser(r.slice(t,t+o))),t+=o}return[r,e]}else return[r,{}]}function fa(e){let t=e=>{switch(e){case`S`:return`millisecond`;case`s`:return`second`;case`m`:return`minute`;case`h`:case`H`:return`hour`;case`d`:return`day`;case`o`:return`ordinal`;case`L`:case`M`:return`month`;case`y`:return`year`;case`E`:case`c`:return`weekday`;case`W`:return`weekNumber`;case`k`:return`weekYear`;case`q`:return`quarter`;default:return null}},n=null,r;return Mn(e.z)||(n=St.create(e.z)),Mn(e.Z)||(n||=new Yt(e.Z),r=e.Z),Mn(e.q)||(e.M=(e.q-1)*3+1),Mn(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),Mn(e.u)||(e.S=Yn(e.u)),[Object.keys(e).reduce((n,r)=>{let i=t(r);return i&&(n[i]=e[r]),n},{}),n,r]}var pa=null;function ma(){return pa||=Ya.fromMillis(1555555555555),pa}function ha(e,t){if(e.literal)return e;let n=ba(Ar.macroTokenToFormatOpts(e.val),t);return n==null||n.includes(void 0)?e:n}function ga(e,t){return Array.prototype.concat(...e.map(e=>ha(e,t)))}var _a=class{constructor(e,t){if(this.locale=e,this.format=t,this.tokens=ga(Ar.parseFormat(t),e),this.units=this.tokens.map(t=>sa(t,e)),this.disqualifyingUnit=this.units.find(e=>e.invalidReason),!this.disqualifyingUnit){let[e,t]=ua(this.units);this.regex=RegExp(e,`i`),this.handlers=t}}explainFromTokens(e){if(this.isValid){let[t,n]=da(e,this.regex,this.handlers),[r,i,a]=n?fa(n):[null,null,void 0];if(Hn(n,`a`)&&Hn(n,`H`))throw new ze(`Can't include meridiem when specifying 24-hour format`);return{input:e,tokens:this.tokens,regex:this.regex,rawMatches:t,matches:n,result:r,zone:i,specificOffset:a}}else return{input:e,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}};function va(e,t,n){return new _a(e,n).explainFromTokens(t)}function ya(e,t,n){let{result:r,zone:i,specificOffset:a,invalidReason:o}=va(e,t,n);return[r,i,a,o]}function ba(e,t){if(!e)return null;let n=Ar.create(t,e).dtFormatter(ma()),r=n.formatToParts(),i=n.resolvedOptions();return r.map(t=>la(t,e,i))}var xa=`Invalid DateTime`,Sa=864e13;function Ca(e){return new hn(`unsupported zone`,`the zone "${e.name}" is not supported`)}function wa(e){return e.weekData===null&&(e.weekData=Cn(e.c)),e.weekData}function Ta(e){return e.localWeekData===null&&(e.localWeekData=Cn(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Ea(e,t){let n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new Ya({...n,...t,old:n})}function Da(e,t,n){let r=e-t*60*1e3,i=n.offset(r);if(t===i)return[r,t];r-=(i-t)*60*1e3;let a=n.offset(r);return i===a?[r,i]:[e-Math.min(i,a)*60*1e3,Math.max(i,a)]}function Oa(e,t){e+=t*60*1e3;let n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function ka(e,t,n){return Da(er(e),t,n)}function Aa(e,t){let n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,a={...e.c,year:r,month:i,day:Math.min(e.c.day,$n(r,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},o=Ui.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as(`milliseconds`),[s,c]=Da(er(a),n,e.zone);return o!==0&&(s+=o,c=e.zone.offset(s)),{ts:s,o:c}}function ja(e,t,n,r,i,a){let{setZone:o,zone:s}=n;if(e&&Object.keys(e).length!==0||t){let r=t||s,i=Ya.fromObject(e,{...n,zone:r,specificOffset:a});return o?i:i.setZone(s)}else return Ya.invalid(new hn(`unparsable`,`the input "${i}" can't be parsed as ${r}`))}function Ma(e,t,n=!0){return e.isValid?Ar.create(qt.create(`en-US`),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Na(e,t,n){let r=e.c.year>9999||e.c.year<0,i=``;if(r&&e.c.year>=0&&(i+=`+`),i+=Kn(e.c.year,r?6:4),n===`year`)return i;if(t){if(i+=`-`,i+=Kn(e.c.month),n===`month`)return i;i+=`-`}else if(i+=Kn(e.c.month),n===`month`)return i;return i+=Kn(e.c.day),i}function Pa(e,t,n,r,i,a,o){let s=!n||e.c.millisecond!==0||e.c.second!==0,c=``;switch(o){case`day`:case`month`:case`year`:break;default:if(c+=Kn(e.c.hour),o===`hour`)break;if(t){if(c+=`:`,c+=Kn(e.c.minute),o===`minute`)break;s&&(c+=`:`,c+=Kn(e.c.second))}else{if(c+=Kn(e.c.minute),o===`minute`)break;s&&(c+=Kn(e.c.second))}if(o===`second`)break;s&&(!r||e.c.millisecond!==0)&&(c+=`.`,c+=Kn(e.c.millisecond,3))}return i&&(e.isOffsetFixed&&e.offset===0&&!a?c+=`Z`:e.o<0?(c+=`-`,c+=Kn(Math.trunc(-e.o/60)),c+=`:`,c+=Kn(Math.trunc(-e.o%60))):(c+=`+`,c+=Kn(Math.trunc(e.o/60)),c+=`:`,c+=Kn(Math.trunc(e.o%60)))),a&&(c+=`[`+e.zone.ianaName+`]`),c}var Fa={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Ia={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},La={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Ra=[`year`,`month`,`day`,`hour`,`minute`,`second`,`millisecond`],za=[`weekYear`,`weekNumber`,`weekday`,`hour`,`minute`,`second`,`millisecond`],Ba=[`year`,`ordinal`,`hour`,`minute`,`second`,`millisecond`];function Va(e){let t={year:`year`,years:`year`,month:`month`,months:`month`,day:`day`,days:`day`,hour:`hour`,hours:`hour`,minute:`minute`,minutes:`minute`,quarter:`quarter`,quarters:`quarter`,second:`second`,seconds:`second`,millisecond:`millisecond`,milliseconds:`millisecond`,weekday:`weekday`,weekdays:`weekday`,weeknumber:`weekNumber`,weeksnumber:`weekNumber`,weeknumbers:`weekNumber`,weekyear:`weekYear`,weekyears:`weekYear`,ordinal:`ordinal`}[e.toLowerCase()];if(!t)throw new Be(e);return t}function Ha(e){switch(e.toLowerCase()){case`localweekday`:case`localweekdays`:return`localWeekday`;case`localweeknumber`:case`localweeknumbers`:return`localWeekNumber`;case`localweekyear`:case`localweekyears`:return`localWeekYear`;default:return Va(e)}}function Ua(e){if(qa===void 0&&(qa=mn.now()),e.type!==`iana`)return e.offset(qa);let t=e.name,n=Ja.get(t);return n===void 0&&(n=e.offset(qa),Ja.set(t,n)),n}function Wa(e,t){let n=Zt(t.zone,mn.defaultZone);if(!n.isValid)return Ya.invalid(Ca(n));let r=qt.fromObject(t),i,a;if(Mn(e.year))i=mn.now();else{for(let t of Ra)Mn(e[t])&&(e[t]=Fa[t]);let t=An(e)||jn(e);if(t)return Ya.invalid(t);let r=Ua(n);[i,a]=ka(e,r,n)}return new Ya({ts:i,zone:n,loc:r,o:a})}function Ga(e,t,n){let r=Mn(n.round)?!0:n.round,i=Mn(n.rounding)?`trunc`:n.rounding,a=(e,a)=>(e=Xn(e,r||n.calendary?0:2,n.calendary?`round`:i),t.loc.clone(n).relFormatter(n).format(e,a)),o=r=>n.calendary?t.hasSame(e,r)?0:t.startOf(r).diff(e.startOf(r),r).get(r):t.diff(e,r).get(r);if(n.unit)return a(o(n.unit),n.unit);for(let e of n.units){let t=o(e);if(Math.abs(t)>=1)return a(t,e)}return a(e>t?-0:0,n.units[n.units.length-1])}function Ka(e){let t={},n;return e.length>0&&typeof e[e.length-1]==`object`?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}var qa,Ja=new Map,Ya=class e{constructor(e){let t=e.zone||mn.defaultZone,n=e.invalid||(Number.isNaN(e.ts)?new hn(`invalid input`):null)||(t.isValid?null:Ca(t));this.ts=Mn(e.ts)?mn.now():e.ts;let r=null,i=null;if(!n)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(t))[r,i]=[e.old.c,e.old.o];else{let a=Nn(e.o)&&!e.old?e.o:t.offset(this.ts);r=Oa(this.ts,a),n=Number.isNaN(r.year)?new hn(`invalid input`):null,r=n?null:r,i=n?null:a}this._zone=t,this.loc=e.loc||qt.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=r,this.o=i,this.isLuxonDateTime=!0}static now(){return new e({})}static local(){let[e,t]=Ka(arguments),[n,r,i,a,o,s,c]=t;return Wa({year:n,month:r,day:i,hour:a,minute:o,second:s,millisecond:c},e)}static utc(){let[e,t]=Ka(arguments),[n,r,i,a,o,s,c]=t;return e.zone=Yt.utcInstance,Wa({year:n,month:r,day:i,hour:a,minute:o,second:s,millisecond:c},e)}static fromJSDate(t,n={}){let r=In(t)?t.valueOf():NaN;if(Number.isNaN(r))return e.invalid(`invalid input`);let i=Zt(n.zone,mn.defaultZone);return i.isValid?new e({ts:r,zone:i,loc:qt.fromObject(n)}):e.invalid(Ca(i))}static fromMillis(t,n={}){if(!Nn(t))throw new Ve(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`);return t<-Sa||t>Sa?e.invalid(`Timestamp out of range`):new e({ts:t,zone:Zt(n.zone,mn.defaultZone),loc:qt.fromObject(n)})}static fromSeconds(t,n={}){if(Nn(t))return new e({ts:t*1e3,zone:Zt(n.zone,mn.defaultZone),loc:qt.fromObject(n)});throw new Ve(`fromSeconds requires a numerical input`)}static fromObject(t,n={}){t||={};let r=Zt(n.zone,mn.defaultZone);if(!r.isValid)return e.invalid(Ca(r));let i=qt.fromObject(n),a=sr(t,Ha),{minDaysInFirstWeek:o,startOfWeek:s}=Dn(a,i),c=mn.now(),l=Mn(n.specificOffset)?r.offset(c):n.specificOffset,u=!Mn(a.ordinal),d=!Mn(a.year),f=!Mn(a.month)||!Mn(a.day),p=d||f,m=a.weekYear||a.weekNumber;if((p||u)&&m)throw new ze(`Can't mix weekYear/weekNumber units with year/month/day or ordinals`);if(f&&u)throw new ze(`Can't mix ordinal dates with month/day`);let h=m||a.weekday&&!p,g,ee,te=Oa(c,l);h?(g=za,ee=Ia,te=Cn(te,o,s)):u?(g=Ba,ee=La,te=Tn(te)):(g=Ra,ee=Fa);let ne=!1;for(let e of g){let t=a[e];Mn(t)?ne?a[e]=ee[e]:a[e]=te[e]:ne=!0}let re=(h?On(a,o,s):u?kn(a):An(a))||jn(a);if(re)return e.invalid(re);let[ie,ae]=ka(h?wn(a,o,s):u?En(a):a,l,r),oe=new e({ts:ie,zone:r,o:ae,loc:i});return a.weekday&&p&&t.weekday!==oe.weekday?e.invalid(`mismatched weekday`,`you can't specify both a weekday of ${a.weekday} and a date of ${oe.toISO()}`):oe.isValid?oe:e.invalid(oe.invalid)}static fromISO(e,t={}){let[n,r]=xi(e);return ja(n,r,t,`ISO 8601`,e)}static fromRFC2822(e,t={}){let[n,r]=Si(e);return ja(n,r,t,`RFC 2822`,e)}static fromHTTP(e,t={}){let[n,r]=Ci(e);return ja(n,r,t,`HTTP`,t)}static fromFormat(t,n,r={}){if(Mn(t)||Mn(n))throw new Ve(`fromFormat requires an input string and a format`);let{locale:i=null,numberingSystem:a=null}=r,[o,s,c,l]=ya(qt.fromOpts({locale:i,numberingSystem:a,defaultToEN:!0}),t,n);return l?e.invalid(l):ja(o,s,r,`format ${n}`,t,c)}static fromString(t,n,r={}){return e.fromFormat(t,n,r)}static fromSQL(e,t={}){let[n,r]=Ai(e);return ja(n,r,t,`SQL`,e)}static invalid(t,n=null){if(!t)throw new Ve(`need to specify a reason the DateTime is invalid`);let r=t instanceof hn?t:new hn(t,n);if(mn.throwOnInvalid)throw new Ie(r);return new e({invalid:r})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,t={}){let n=ba(e,qt.fromObject(t));return n?n.map(e=>e?e.val:null).join(``):null}static expandFormat(e,t={}){return ga(Ar.parseFormat(e),qt.fromObject(t)).map(e=>e.val).join(``)}static resetCache(){qa=void 0,Ja.clear()}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?wa(this).weekYear:NaN}get weekNumber(){return this.isValid?wa(this).weekNumber:NaN}get weekday(){return this.isValid?wa(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Ta(this).weekday:NaN}get localWeekNumber(){return this.isValid?Ta(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Ta(this).weekYear:NaN}get ordinal(){return this.isValid?Tn(this.c).ordinal:NaN}get monthShort(){return this.isValid?qi.months(`short`,{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?qi.months(`long`,{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?qi.weekdays(`short`,{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?qi.weekdays(`long`,{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:`short`,locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:`long`,locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let e=864e5,t=6e4,n=er(this.c),r=this.zone.offset(n-e),i=this.zone.offset(n+e),a=this.zone.offset(n-r*t),o=this.zone.offset(n-i*t);if(a===o)return[this];let s=n-a*t,c=n-o*t,l=Oa(s,a),u=Oa(c,o);return l.hour===u.hour&&l.minute===u.minute&&l.second===u.second&&l.millisecond===u.millisecond?[Ea(this,{ts:s}),Ea(this,{ts:c})]:[this]}get isInLeapYear(){return Zn(this.year)}get daysInMonth(){return $n(this.year,this.month)}get daysInYear(){return this.isValid?Qn(this.year):NaN}get weeksInWeekYear(){return this.isValid?nr(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?nr(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(e={}){let{locale:t,numberingSystem:n,calendar:r}=Ar.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:t,numberingSystem:n,outputCalendar:r}}toUTC(e=0,t={}){return this.setZone(Yt.instance(e),t)}toLocal(){return this.setZone(mn.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=Zt(t,mn.defaultZone),t.equals(this.zone))return this;if(t.isValid){let e=this.ts;if(n||r){let n=t.offset(this.ts),r=this.toObject();[e]=ka(r,n,t)}return Ea(this,{ts:e,zone:t})}else return e.invalid(Ca(t))}reconfigure({locale:e,numberingSystem:t,outputCalendar:n}={}){let r=this.loc.clone({locale:e,numberingSystem:t,outputCalendar:n});return Ea(this,{loc:r})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;let t=sr(e,Ha),{minDaysInFirstWeek:n,startOfWeek:r}=Dn(t,this.loc),i=!Mn(t.weekYear)||!Mn(t.weekNumber)||!Mn(t.weekday),a=!Mn(t.ordinal),o=!Mn(t.year),s=!Mn(t.month)||!Mn(t.day),c=o||s,l=t.weekYear||t.weekNumber;if((c||a)&&l)throw new ze(`Can't mix weekYear/weekNumber units with year/month/day or ordinals`);if(s&&a)throw new ze(`Can't mix ordinal dates with month/day`);let u;i?u=wn({...Cn(this.c,n,r),...t},n,r):Mn(t.ordinal)?(u={...this.toObject(),...t},Mn(t.day)&&(u.day=Math.min($n(u.year,u.month),u.day))):u=En({...Tn(this.c),...t});let[d,f]=ka(u,this.o,this.zone);return Ea(this,{ts:d,o:f})}plus(e){if(!this.isValid)return this;let t=Ui.fromDurationLike(e);return Ea(this,Aa(this,t))}minus(e){if(!this.isValid)return this;let t=Ui.fromDurationLike(e).negate();return Ea(this,Aa(this,t))}startOf(e,{useLocaleWeeks:t=!1}={}){if(!this.isValid)return this;let n={},r=Ui.normalizeUnit(e);switch(r){case`years`:n.month=1;case`quarters`:case`months`:n.day=1;case`weeks`:case`days`:n.hour=0;case`hours`:n.minute=0;case`minutes`:n.second=0;case`seconds`:n.millisecond=0;break}if(r===`weeks`)if(t){let e=this.loc.getStartOfWeek(),{weekday:t}=this;t<e&&(n.weekNumber=this.weekNumber-1),n.weekday=e}else n.weekday=1;return r===`quarters`&&(n.month=(Math.ceil(this.month/3)-1)*3+1),this.set(n)}endOf(e,t){return this.isValid?this.plus({[e]:1}).startOf(e,t).minus(1):this}toFormat(e,t={}){return this.isValid?Ar.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):xa}toLocaleString(e=Ge,t={}){return this.isValid?Ar.create(this.loc.clone(t),e).formatDateTime(this):xa}toLocaleParts(e={}){return this.isValid?Ar.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e=`extended`,suppressSeconds:t=!1,suppressMilliseconds:n=!1,includeOffset:r=!0,extendedZone:i=!1,precision:a=`milliseconds`}={}){if(!this.isValid)return null;a=Va(a);let o=e===`extended`,s=Na(this,o,a);return Ra.indexOf(a)>=3&&(s+=`T`),s+=Pa(this,o,t,n,r,i,a),s}toISODate({format:e=`extended`,precision:t=`day`}={}){return this.isValid?Na(this,e===`extended`,Va(t)):null}toISOWeekDate(){return Ma(this,`kkkk-'W'WW-c`)}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:t=!1,includeOffset:n=!0,includePrefix:r=!1,extendedZone:i=!1,format:a=`extended`,precision:o=`milliseconds`}={}){return this.isValid?(o=Va(o),(r&&Ra.indexOf(o)>=3?`T`:``)+Pa(this,a===`extended`,t,e,n,i,o)):null}toRFC2822(){return Ma(this,`EEE, dd LLL yyyy HH:mm:ss ZZZ`,!1)}toHTTP(){return Ma(this.toUTC(),`EEE, dd LLL yyyy HH:mm:ss 'GMT'`)}toSQLDate(){return this.isValid?Na(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:t=!1,includeOffsetSpace:n=!0}={}){let r=`HH:mm:ss.SSS`;return(t||e)&&(n&&(r+=` `),t?r+=`z`:e&&(r+=`ZZ`)),Ma(this,r,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():xa}[Symbol.for(`nodejs.util.inspect.custom`)](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};let t={...this.c};return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,t=`milliseconds`,n={}){if(!this.isValid||!e.isValid)return Ui.invalid(`created by diffing an invalid DateTime`);let r={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=zn(t).map(Ui.normalizeUnit),a=e.valueOf()>this.valueOf(),o=Xi(a?this:e,a?e:this,i,r);return a?o.negate():o}diffNow(t=`milliseconds`,n={}){return this.diff(e.now(),t,n)}until(e){return this.isValid?Ki.fromDateTimes(this,e):this}hasSame(e,t,n){if(!this.isValid)return!1;let r=e.valueOf(),i=this.setZone(e.zone,{keepLocalTime:!0});return i.startOf(t,n)<=r&&r<=i.endOf(t,n)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(t={}){if(!this.isValid)return null;let n=t.base||e.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0,i=[`years`,`months`,`days`,`hours`,`minutes`,`seconds`],a=t.unit;return Array.isArray(t.unit)&&(i=t.unit,a=void 0),Ga(n,this.plus(r),{...t,numeric:`always`,units:i,unit:a})}toRelativeCalendar(t={}){return this.isValid?Ga(t.base||e.fromObject({},{zone:this.zone}),this,{...t,numeric:`auto`,units:[`years`,`months`,`days`],calendary:!0}):null}static min(...t){if(!t.every(e.isDateTime))throw new Ve(`min requires all arguments be DateTimes`);return Bn(t,e=>e.valueOf(),Math.min)}static max(...t){if(!t.every(e.isDateTime))throw new Ve(`max requires all arguments be DateTimes`);return Bn(t,e=>e.valueOf(),Math.max)}static fromFormatExplain(e,t,n={}){let{locale:r=null,numberingSystem:i=null}=n;return va(qt.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0}),e,t)}static fromStringExplain(t,n,r={}){return e.fromFormatExplain(t,n,r)}static buildFormatParser(e,t={}){let{locale:n=null,numberingSystem:r=null}=t;return new _a(qt.fromOpts({locale:n,numberingSystem:r,defaultToEN:!0}),e)}static fromFormatParser(t,n,r={}){if(Mn(t)||Mn(n))throw new Ve(`fromFormatParser requires an input string and a format parser`);let{locale:i=null,numberingSystem:a=null}=r,o=qt.fromOpts({locale:i,numberingSystem:a,defaultToEN:!0});if(!o.equals(n.locale))throw new Ve(`fromFormatParser called with a locale of ${o}, but the format parser was created for ${n.locale}`);let{result:s,zone:c,specificOffset:l,invalidReason:u}=n.explainFromTokens(t);return u?e.invalid(u):ja(s,c,r,`format ${n.format}`,t,l)}static get DATE_SHORT(){return Ge}static get DATE_MED(){return Ke}static get DATE_MED_WITH_WEEKDAY(){return qe}static get DATE_FULL(){return Je}static get DATE_HUGE(){return Ye}static get TIME_SIMPLE(){return Xe}static get TIME_WITH_SECONDS(){return Ze}static get TIME_WITH_SHORT_OFFSET(){return Qe}static get TIME_WITH_LONG_OFFSET(){return $e}static get TIME_24_SIMPLE(){return et}static get TIME_24_WITH_SECONDS(){return tt}static get TIME_24_WITH_SHORT_OFFSET(){return nt}static get TIME_24_WITH_LONG_OFFSET(){return rt}static get DATETIME_SHORT(){return it}static get DATETIME_SHORT_WITH_SECONDS(){return at}static get DATETIME_MED(){return ot}static get DATETIME_MED_WITH_SECONDS(){return st}static get DATETIME_MED_WITH_WEEKDAY(){return ct}static get DATETIME_FULL(){return lt}static get DATETIME_FULL_WITH_SECONDS(){return ut}static get DATETIME_HUGE(){return dt}static get DATETIME_HUGE_WITH_SECONDS(){return ft}};function Xa(e){if(Ya.isDateTime(e))return e;if(e&&e.valueOf&&Nn(e.valueOf()))return Ya.fromJSDate(e);if(e&&typeof e==`object`)return Ya.fromObject(e);throw new Ve(`Unknown datetime argument: ${e}, of type ${typeof e}`)}Intl.DateTimeFormat().resolvedOptions().locale;var O;(function(e){e.Year=`year`,e.Month=`month`,e.Week=`week`,e.Day=`day`,e.Hour=`hour`,e.Minute=`minute`,e.Second=`second`,e.Millisecond=`millisecond`})(O||={}),O.Year,O.Hour,O.Minute,O.Second,O.Millisecond,O.Month,O.Week,O.Day,O.Millisecond,O.Second,O.Minute,O.Hour,O.Day,O.Week,O.Month,O.Year;var Za={min:0,max:23},Qa={min:0,max:59},$a={min:0,max:59},eo={min:0,max:999},to;(function(e){e.Years=`years`,e.Months=`months`,e.Weeks=`weeks`,e.Days=`days`,e.Hours=`hours`,e.Minutes=`minutes`,e.Seconds=`seconds`,e.Milliseconds=`milliseconds`})(to||={});var no=[to.Milliseconds,to.Seconds,to.Minutes,to.Hours,to.Days,to.Weeks,to.Months,to.Years];to.Milliseconds,to.Seconds,to.Minutes,to.Hours,to.Days,to.Weeks,to.Months,to.Years,to.Years,O.Year,to.Months,O.Month,to.Weeks,O.Week,to.Days,O.Day,to.Hours,O.Hour,to.Minutes,O.Minute,to.Seconds,O.Second,to.Milliseconds,O.Millisecond,O.Year,to.Years,O.Month,to.Months,O.Week,to.Weeks,O.Day,to.Days,O.Hour,to.Hours,O.Minute,to.Minutes,O.Second,to.Seconds,O.Millisecond,to.Milliseconds;function ro(e){return no.filter(t=>e[t])}function io(e,{decimalCount:t}){if(t==null)return e;let n=10**t,r=e*n;return Number((Math.round(r)/n).toFixed(t))}function ao(e){return io(Math.max(e-.4,0),{decimalCount:0})}function oo(e){return e===0?0:Math.sign(e)}function so(e,t,n={}){let r={},i={decimalCount:n.decimalCount==null?void 0:Math.round(Math.abs(n.decimalCount))},a=Object.values(e).includes(1/0),o=Object.values(e).includes(-1/0),s=ro(t).reverse();if(a||o)return s.forEach(e=>{r[e]=a?1/0:-1/0}),r;let c=Ui.fromObject(e).as(to.Milliseconds),l=oo(c);return s.forEach((e,t)=>{let n=t===s.length-1;if(e===to.Milliseconds)r.milliseconds=io(c,i);else{let t=Ui.fromObject({milliseconds:c}).as(e),a=Math.sign(t),o=Math.abs(t),s=n?io(o,i):Math.floor(i.decimalCount==null?o:ao(o)),u=s===0?0:s*a;r[e]=u,c-=Ui.fromObject({[e]:u}).as(to.Milliseconds),l!==oo(c)&&(c=0)}}),r}var co;(function(e){e.Sunday=`sunday`,e.Monday=`monday`,e.Tuesday=`tuesday`,e.Wednesday=`wednesday`,e.Thursday=`thursday`,e.Friday=`friday`,e.Saturday=`saturday`})(co||={}),co.Sunday,co.Monday,co.Tuesday,co.Wednesday,co.Thursday,co.Friday,co.Saturday,co.Sunday,co.Monday,co.Tuesday,co.Wednesday,co.Thursday,co.Friday,co.Saturday;var lo;(function(e){e.January=`january`,e.February=`february`,e.March=`march`,e.April=`april`,e.May=`may`,e.June=`june`,e.July=`july`,e.August=`august`,e.September=`september`,e.October=`october`,e.November=`november`,e.December=`december`})(lo||={}),lo.January,lo.February,lo.March,lo.April,lo.May,lo.June,lo.July,lo.August,lo.September,lo.October,lo.November,lo.December;var uo={min:1,max:12},fo={min:1,max:31};function po(e){let t=new Pe,n=Object.values(e).some(e=>e===1/0||e===-1/0)?1/0:so(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}function mo(...e){let t=e.join(``),n=i(Array.from(t));return Array.from(n).join(``)}function ho(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function go(e,t){return _o(e,mo([typeof e==`string`?``:e.flags,t].join(``).toLowerCase()))}function _o(e,t){let n=mo(t);return typeof e==`string`?new RegExp(ho(e),n):new RegExp(e.source,n)}function vo(e,{caseSensitive:t}){let n=typeof e==`string`?``:e.flags.toLowerCase();return _o(e,t?n.replaceAll(`i`,``):mo(n+`i`))}function yo(e,t=1){return e.split(`
`).map(e=>[`    `.repeat(Math.round(t)),e].join(``)).join(`
`)}function bo(e,t){return t?typeof t==`string`?!!new RegExp(ho(t),`i`).exec(e):!!go(t,`i`).exec(e):!1}var k=class extends Error{name=`AssertionError`;constructor(e,t){super(Ae(t,e)||`Assertion failed.`)}},xo={interval:{milliseconds:100},timeout:{seconds:10}},So=Symbol(`not set`);async function Co(e,t,n){let{callback:r,extraAssertionArgs:i,failureMessage:a,options:o}=wo(t),s=so(o.timeout,{milliseconds:!0}).milliseconds,c=so(o.interval,{milliseconds:!0}),l=So,u;async function d(){try{l=n?r():await r(),e(l,...i)}catch(e){l=So,u=je(e)}}let f=Date.now();for(;l===So;)if(await d(),await po(c),Date.now()-f>=s){let e=`${a?`${a}: `:``}Timeout of '${s}' milliseconds exceeded waiting for callback value to match expectations`;throw Me(u,e)}return l}function A(e,t=!1){return((...n)=>Co(e,n,t))}function wo(e){let t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(e=>{if(t.callback)t.extraAssertionArgs.push(e);else if(typeof e==`function`)t.callback=e;else if(typeof e==`string`)t.failureMessage=e;else if(typeof e==`object`)t.options=e;else if(e===void 0)return;else throw TypeError(`Unexpected waitUntil arg: ${JSON.stringify(e)}`)}),!t.callback)throw TypeError(`Missing waitUntil callback.`);return{callback:t.callback,options:To(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function To(e){return{interval:e?.interval||xo.interval,timeout:e?.timeout||xo.timeout}}var Eo={isFalse(e,t){if(e!==!1)throw new k(`'${_(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new k(`'${_(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new k(`'${_(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new k(`'${_(e)}' is not truthy.`,t)}},Do={assert:Eo,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new k(`'${_(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new k(`'${_(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new k(`'${_(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new k(`'${_(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:A(Eo.isFalse),isFalsy:A(Eo.isFalsy),isTrue:A(Eo.isTrue),isTruthy:A(Eo.isTruthy)}};function Oo(e,t,n){if(typeof e==`string`){if(!e.endsWith(t))throw new k(`${_(e)} does not end with ${_(t)}}`,n)}else if(e[e.length-1]!==t)throw new k(`${_(e)} does not end with ${_(t)}}`,n)}function ko(e,t,n){if(typeof e==`string`){if(e.endsWith(t))throw new k(`${_(e)} ends with ${_(t)}}`,n)}else if(e[e.length-1]===t)throw new k(`${_(e)} ends with ${_(t)}}`,n)}function Ao(e,t,n){if(typeof e==`string`){if(!e.startsWith(t))throw new k(`${_(e)} does not start with ${_(t)}}`,n)}else if(e[0]!==t)throw new k(`${_(e)} does not start with ${_(t)}}`,n)}function jo(e,t,n){if(typeof e==`string`){if(e.startsWith(t))throw new k(`${_(e)} starts with ${_(t)}}`,n)}else if(e[0]===t)throw new k(`${_(e)} starts with ${_(t)}}`,n)}var Mo={endsWith:Oo,endsWithout:ko,startsWith:Ao,startsWithout:jo},No={assert:Mo,check:{endsWith:((e,t)=>typeof e==`string`?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e==`string`?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e==`string`?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e==`string`?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,n)=>{if(typeof e==`string`){if(!e.endsWith(t))throw new k(`${_(e)} does not end with ${_(t)}}`,n)}else if(e[e.length-1]!==t)throw new k(`${_(e)} does not end with ${_(t)}}`,n);return e}),endsWithout:((e,t,n)=>{if(typeof e==`string`){if(e.endsWith(t))throw new k(`${_(e)} ends with ${_(t)}}`,n)}else if(e[e.length-1]===t)throw new k(`${_(e)} ends with ${_(t)}}`,n);return e}),startsWith:((e,t,n)=>{if(typeof e==`string`){if(!e.startsWith(t))throw new k(`${_(e)} does not start with ${_(t)}}`,n)}else if(e[0]!==t)throw new k(`${_(e)} does not start with ${_(t)}}`,n);return e}),startsWithout:((e,t,n)=>{if(typeof e==`string`){if(e.startsWith(t))throw new k(`${_(e)} starts with ${_(t)}}`,n)}else if(e[0]===t)throw new k(`${_(e)} starts with ${_(t)}}`,n);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e==`string`)return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e==`string`)return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e==`string`)return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e==`string`)return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:A(Mo.endsWith),endsWithout:A(Mo.endsWithout),startsWith:A(Mo.startsWith),startsWithout:A(Mo.startsWithout)}};function Po(e,t,n){let r=Ee(t);if(!r.includes(e))throw new k(`${String(e)} is not an enum value in '${r.join(`,`)}'.`,n)}function Fo(e,t){return Ee(t).includes(e)}var Io={isEnumValue(e,t,n){Po(e,t,n)},isNotEnumValue(e,t,n){let r=Ee(t);if(r.includes(e))throw new k(`${String(e)} is an enum value in '${r.join(`,`)}'.`,n)}},Lo={assert:Io,check:{isEnumValue:Fo,isNotEnumValue(e,t){return!Ee(t).includes(e)}},assertWrap:{isEnumValue(e,t,n){let r=Ee(t);if(!r.includes(e))throw new k(`${String(e)} is not an enum value in '${r.join(`,`)}'.`,n);return e},isNotEnumValue(e,t,n){let r=Ee(t);if(r.includes(e))throw new k(`${String(e)} is not an enum value in '${r.join(`,`)}'.`,n);return e}},checkWrap:{isEnumValue(e,t){if(Ee(t).includes(e))return e},isNotEnumValue(e,t){if(!Ee(t).includes(e))return e}},waitUntil:{isEnumValue:A(Io.isEnumValue),isNotEnumValue:A(Io.isNotEnumValue)}},Ro={entriesEqual(e,t,n){if(!e||typeof e!=`object`)throw new k(`${_(e)} is not an object.`,n);if(!t||typeof t!=`object`)throw new k(`${_(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(r=>{if(e[r]!==t[r])throw new k(`Entries are not equal at key '${String(r)}'.`,n)})},notEntriesEqual(e,t,n){if(!(!e||typeof e!=`object`||!t||typeof t!=`object`)&&!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>e[n]!==t[n]))throw new k(`Entries are equal.`,n)}},zo={assert:Ro,check:{entriesEqual(e,t){return!e||typeof e!=`object`||!t||typeof t!=`object`?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>e[n]===t[n])},notEntriesEqual(e,t){return!e||typeof e!=`object`||!t||typeof t!=`object`?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>e[n]!==t[n])}},assertWrap:{entriesEqual(e,t,n){if(!e||typeof e!=`object`)throw new k(`${_(e)} is not an object.`,n);if(!t||typeof t!=`object`)throw new k(`${_(t)} is not an object.`,n);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(r=>{if(e[r]!==t[r])throw new k(`Entries are not equal at key '${String(r)}'.`,n)}),e},notEntriesEqual(e,t,n){if(!e||typeof e!=`object`||!t||typeof t!=`object`||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>e[n]!==t[n]))return e;throw new k(`Entries are equal.`,n)}},checkWrap:{entriesEqual(e,t){if(!(!e||typeof e!=`object`||!t||typeof t!=`object`)&&Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>e[n]===t[n]))return e},notEntriesEqual(e,t){if(!e||typeof e!=`object`||!t||typeof t!=`object`||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>e[n]!==t[n]))return e}},waitUntil:{entriesEqual:A(Ro.entriesEqual),notEntriesEqual:A(Ro.notEntriesEqual)}};function Bo(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Vo(e,t){if(!(e===t||Bo(e,t))){if(e!=null&&t!=null&&typeof e==`object`&&typeof t==`object`){let n=Object.keys(e).sort(),r=Object.keys(t).sort();if(n.length!==r.length)throw Error(`Values are not JSON equal.`);if(!Bo(n,r))throw Error(`Values are JSON equal.`);Object.keys(e).forEach(n=>{try{Vo(e[n],t[n])}catch(e){throw Error(`JSON objects are not equal at key '${n}': ${C(e)}`)}})}throw Error(`Values are not JSON equal.`)}}function Ho(e,t){if(e===t||Bo(e,t))return!0;if(e!=null&&t!=null&&typeof e==`object`&&typeof t==`object`){let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length!==r.length||!Bo(n,r)?!1:Object.keys(e).every(n=>Ho(e[n],t[n]))}return!1}var Uo={jsonEquals(e,t,n){try{Vo(e,t)}catch(e){throw new k(C(e),n)}},notJsonEquals(e,t,n){try{Vo(e,t)}catch{return}throw new k(`Values are JSON equal.`,n)}},Wo={assert:Uo,check:{jsonEquals(e,t){return Ho(e,t)},notJsonEquals(e,t){return!Ho(e,t)}},assertWrap:{jsonEquals(e,t,n){try{return Vo(e,t),e}catch(e){throw new k(C(e),n)}},notJsonEquals(e,t,n){try{Vo(e,t)}catch{return e}throw new k(`Values are JSON equal.`,n)}},checkWrap:{jsonEquals(e,t){if(Ho(e,t))return e},notJsonEquals(e,t){if(!Ho(e,t))return e}},waitUntil:{jsonEquals:A(Uo.jsonEquals),notJsonEquals:A(Uo.notJsonEquals)}};function Go(e){if(e===void 0)return`undefined`;if(e===null)return`null`;let t=e[Symbol.toStringTag];return typeof t==`string`?t:Object.prototype.toString.call(e).slice(8,-1)}function Ko(){this._key=`chai/deep-eql__`+Math.random()+Date.now()}Ko.prototype={get:function(e){return e[this._key]},set:function(e,t){Object.isExtensible(e)&&Object.defineProperty(e,this._key,{value:t,configurable:!0})}};var qo=typeof WeakMap==`function`?WeakMap:Ko;function Jo(e,t,n){if(!n||fs(e)||fs(t))return null;var r=n.get(e);if(r){var i=r.get(t);if(typeof i==`boolean`)return i}return null}function Yo(e,t,n,r){if(!(!n||fs(e)||fs(t))){var i=n.get(e);i?i.set(t,r):(i=new qo,i.set(t,r),n.set(e,i))}}var Xo=Zo;function Zo(e,t,n){if(n&&n.comparator)return $o(e,t,n);var r=Qo(e,t);return r===null?$o(e,t,n):r}function Qo(e,t){return e===t?e!==0||1/e==1/t:e!==e&&t!==t?!0:fs(e)||fs(t)?!1:null}function $o(e,t,n){n||={},n.memoize=n.memoize===!1?!1:n.memoize||new qo;var r=n&&n.comparator,i=Jo(e,t,n.memoize);if(i!==null)return i;var a=Jo(t,e,n.memoize);if(a!==null)return a;if(r){var o=r(e,t);if(o===!1||o===!0)return Yo(e,t,n.memoize,o),o;var s=Qo(e,t);if(s!==null)return s}var c=Go(e);if(c!==Go(t))return Yo(e,t,n.memoize,!1),!1;Yo(e,t,n.memoize,!0);var l=es(e,t,c,n);return Yo(e,t,n.memoize,l),l}function es(e,t,n,r){switch(n){case`String`:case`Number`:case`Boolean`:case`Date`:return Zo(e.valueOf(),t.valueOf());case`Promise`:case`Symbol`:case`function`:case`WeakMap`:case`WeakSet`:return e===t;case`Error`:return us(e,t,[`name`,`message`,`code`],r);case`Arguments`:case`Int8Array`:case`Uint8Array`:case`Uint8ClampedArray`:case`Int16Array`:case`Uint16Array`:case`Int32Array`:case`Uint32Array`:case`Float32Array`:case`Float64Array`:case`Array`:return rs(e,t,r);case`RegExp`:return ts(e,t);case`Generator`:return is(e,t,r);case`DataView`:return rs(new Uint8Array(e.buffer),new Uint8Array(t.buffer),r);case`ArrayBuffer`:return rs(new Uint8Array(e),new Uint8Array(t),r);case`Set`:return ns(e,t,r);case`Map`:return ns(e,t,r);case`Temporal.PlainDate`:case`Temporal.PlainTime`:case`Temporal.PlainDateTime`:case`Temporal.Instant`:case`Temporal.ZonedDateTime`:case`Temporal.PlainYearMonth`:case`Temporal.PlainMonthDay`:return e.equals(t);case`Temporal.Duration`:return e.total(`nanoseconds`)===t.total(`nanoseconds`);case`Temporal.TimeZone`:case`Temporal.Calendar`:return e.toString()===t.toString();default:return ds(e,t,r)}}function ts(e,t){return e.toString()===t.toString()}function ns(e,t,n){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var r=[],i=[];return e.forEach(function(e,t){r.push([e,t])}),t.forEach(function(e,t){i.push([e,t])}),rs(r.sort(),i.sort(),n)}function rs(e,t,n){var r=e.length;if(r!==t.length)return!1;if(r===0)return!0;for(var i=-1;++i<r;)if(Zo(e[i],t[i],n)===!1)return!1;return!0}function is(e,t,n){return rs(ss(e),ss(t),n)}function as(e){return typeof Symbol<`u`&&typeof e==`object`&&Symbol.iterator!==void 0&&typeof e[Symbol.iterator]==`function`}function os(e){if(as(e))try{return ss(e[Symbol.iterator]())}catch{return[]}return[]}function ss(e){for(var t=e.next(),n=[t.value];t.done===!1;)t=e.next(),n.push(t.value);return n}function cs(e){var t=[];for(var n in e)t.push(n);return t}function ls(e){for(var t=[],n=Object.getOwnPropertySymbols(e),r=0;r<n.length;r+=1){var i=n[r];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}function us(e,t,n,r){var i=n.length;if(i===0)return!0;for(var a=0;a<i;a+=1)if(Zo(e[n[a]],t[n[a]],r)===!1)return!1;return!0}function ds(e,t,n){var r=cs(e),i=cs(t),a=ls(e),o=ls(t);if(r=r.concat(a),i=i.concat(o),r.length&&r.length===i.length)return rs(ps(r).sort(),ps(i).sort())===!1?!1:us(e,t,r,n);var s=os(e),c=os(t);return s.length&&s.length===c.length?(s.sort(),c.sort(),rs(s,c,n)):r.length===0&&s.length===0&&i.length===0&&c.length===0}function fs(e){return typeof e!=`object`||!e}function ps(e){return e.map(function(e){return typeof e==`symbol`?e.toString():e})}var ms=class extends k{name=`DiffError`;constructor(e,t,n,r){let i=x(t,n);super([e,yo(i)].join(`
`),r)}};function hs(e,t){return typeof e==`function`&&typeof t==`function`?!0:null}var gs={strictEquals(e,t,n){if(e!==t)throw typeof e==`object`&&e||typeof t==`object`&&t?new k(`Strict reference equality failed for \n\n${_(t)}\n\n.`,n):new ms(`Not strictly equal.`,e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e==`object`&&e?new k(`Strict reference INequality failed for \n\n${_(t)}\n\n.`,n):new k(`\n\n${_(e)}\n\nstrictly equals\n\n${_(t)}\n\n`,n)},looseEquals(e,t,n){if(e!=t)throw typeof e==`object`&&e||typeof t==`object`&&t?new k(`Loose reference equality failed for \n\n${_(t)}\n\n.`,n):new ms(`Not loosely equal.`,e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e==`object`&&e?new k(`Loose reference INequality failed for \n\n${_(t)}\n\n.`,n):new k(`\n\n${_(e)}\n\nloosely equals\n\n${_(t)}\n\n`,n)},deepEquals(e,t,n){if(!Xo(e,t,{comparator:hs}))throw new ms(`Not deeply equal.`,e,t,n)},notDeepEquals(e,t,n){if(Xo(e,t,{comparator:hs}))throw new k(`\n\n${_(e)}\n\ndeeply equals\n\n${_(t)}\n\n`,n)}},_s=gs.deepEquals,vs={assert:gs,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return Xo(e,t,{comparator:hs})},notDeepEquals(e,t){return!Xo(e,t,{comparator:hs})}},assertWrap:{strictEquals(e,t,n){if(e===t)return e;throw typeof e==`object`&&e||typeof t==`object`&&t?new k(`Strict reference equality failed for \n\n${_(t)}\n\n.`,n):new ms(`Not strictly equal.`,e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e==`object`&&e?new k(`Strict reference INequality failed for \n\n${_(t)}\n\n.`,n):new k(`\n\n${_(e)}\n\nstrictly equals\n\n${_(t)}\n\n`,n);return e},looseEquals(e,t,n){if(e==t)return e;throw typeof e==`object`&&e||typeof t==`object`&&t?new k(`Loose reference equality failed for \n\n${_(t)}\n\n.`,n):new ms(`Not loosely equal.`,e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e==`object`&&e?new k(`Loose reference INequality failed for \n\n${_(t)}\n\n.`,n):new k(`\n\n${_(e)}\n\nloosely equals\n\n${_(t)}\n\n`,n);return e},deepEquals(e,t,n){if(Xo(e,t,{comparator:hs}))return e;throw new ms(`Not deeply equal.`,e,t,n)},notDeepEquals(e,t,n){if(Xo(e,t,{comparator:hs}))throw new k(`\n\n${_(e)}\n\ndeeply equals\n\n${_(t)}\n\n`,n);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(Xo(e,t,{comparator:hs}))return e},notDeepEquals(e,t){if(!Xo(e,t,{comparator:hs}))return e}},waitUntil:{strictEquals:A(gs.strictEquals),notStrictEquals:A(gs.notStrictEquals),looseEquals:A(gs.looseEquals),notLooseEquals:A(gs.notLooseEquals),deepEquals:A(gs.deepEquals),notDeepEquals:A(gs.notDeepEquals)}};function ys(e,t){if(typeof e==`string`)return typeof t==`string`&&e.includes(t);let n=!0;try{n=Reflect.ownKeys(e).map(t=>e[t]).includes(t)}catch{return!1}return n}function bs(e,t){return typeof t==`string`?t.includes(e):ys(t,e)}var xs={hasValue(e,t,n){if(!ys(e,t))throw new k(`'${_(e)}' does not have value '${_(t)}'.`,n)},lacksValue(e,t,n){if(ys(e,t))throw new k(`'${_(e)}' has value '${_(t)}'.`,n)},hasValues(e,t,n){let r=[];if(typeof e==`string`)r=t.filter(t=>!(typeof t==`string`&&e.includes(t)));else try{let n=Reflect.ownKeys(e).map(t=>e[t]);r=t.filter(e=>!n.includes(e))}catch{throw new k(`'${_(e)}' does not have values '${_(t)}'.`,n)}if(r.length)throw new k(`'${_(e)}' does not have values '${_(r)}'.`,n)},lacksValues(e,t,n){let r=[];if(typeof e==`string`)r=t.filter(t=>typeof t==`string`&&e.includes(t));else try{let n=Reflect.ownKeys(e).map(t=>e[t]);r=t.filter(e=>n.includes(e))}catch{}if(r.length)throw new k(`'${_(e)}' has values '${_(r)}'.`,n)},isIn(e,t,n){if(!bs(e,t))throw new k(`'${_(e)}'\n\nis not in\n\n${_(t)}.`,n)},isNotIn(e,t,n){if(bs(e,t))throw new k(`'${_(e)}'\n\nis in\n\n${_(t)}.`,n)},isEmpty(e,t){if(typeof e!=`string`&&typeof e!=`object`)throw new k(`'${_(e)}' is not empty.`,t);if(typeof e==`string`&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e==`object`&&!Object.keys(e).length)return;throw new k(`'${_(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!=`string`&&typeof e!=`object`)){if(typeof e==`string`&&!e){if(!e)throw new k(`'${_(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new k(`'${_(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new k(`'${_(e)}' is not empty.`,t)}else if(typeof e==`object`&&!Object.keys(e).length)throw new k(`'${_(e)}' is not empty.`,t)}}},Ss={assert:xs,check:{hasValue(e,t){return ys(e,t)},lacksValue(e,t){return!ys(e,t)},hasValues(e,t){return t.every(t=>ys(e,t))},lacksValues(e,t){return t.every(t=>!ys(e,t))},isIn(e,t){return bs(e,t)},isNotIn(e,t){return!bs(e,t)},isEmpty(e){return typeof e!=`string`&&typeof e!=`object`?!1:typeof e==`string`?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!=`string`&&typeof e!=`object`?!0:typeof e==`string`?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,n){if(!ys(e,t))throw new k(`'${_(e)}' does not have value '${_(t)}'.`,n);return e},lacksValue(e,t,n){if(ys(e,t))throw new k(`'${_(e)}' has value '${_(t)}'.`,n);return e},hasValues(e,t,n){let r=[];if(typeof e==`string`)r=t.filter(t=>!(typeof t==`string`&&e.includes(t)));else try{let n=Reflect.ownKeys(e).map(t=>e[t]);r=t.filter(e=>!n.includes(e))}catch{throw new k(`'${_(e)}' does not have values '${_(t)}'.`,n)}if(r.length)throw new k(`'${_(e)}' does not have values '${_(r)}'.`,n);return e},lacksValues(e,t,n){let r=[];if(typeof e==`string`)r=t.filter(t=>typeof t==`string`&&e.includes(t));else try{let n=Reflect.ownKeys(e).map(t=>e[t]);r=t.filter(e=>n.includes(e))}catch{}if(r.length)throw new k(`'${_(e)}' has values '${_(r)}'.`,n);return e},isIn(e,t,n){if(!bs(e,t))throw new k(`'${_(e)}'\n\nis not in\n\n${_(t)}.`,n);return e},isNotIn(e,t,n){if(bs(e,t))throw new k(`'${_(e)}'\n\nis in\n\n${_(t)}.`,n);return e},isEmpty(e,t){if(typeof e!=`string`&&typeof e!=`object`)throw new k(`'${_(e)}' is not empty.`,t);if(typeof e==`string`&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e==`object`&&!Object.keys(e).length)return e;throw new k(`'${_(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!=`string`&&typeof e!=`object`)return e;if(typeof e==`string`&&!e){if(!e)throw new k(`'${_(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new k(`'${_(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new k(`'${_(e)}' is empty.`,t)}else if(typeof e==`object`&&!Object.keys(e).length)throw new k(`'${_(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(ys(e,t))return e},lacksValue(e,t){if(!ys(e,t))return e},hasValues(e,t){if(t.every(t=>ys(e,t)))return e},lacksValues(e,t){if(!t.every(t=>ys(e,t)))return e},isIn(e,t){if(bs(e,t))return e},isNotIn(e,t){if(!bs(e,t))return e},isEmpty(e){if(!(typeof e!=`string`&&typeof e!=`object`)){if(typeof e==`string`){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e==`object`&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!=`string`&&typeof e!=`object`)return e;if(typeof e==`string`){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e==`object`&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:A(xs.hasValue),lacksValue:A(xs.lacksValue),hasValues:A(xs.hasValues),lacksValues:A(xs.lacksValues),isIn:A(xs.isIn),isNotIn:A(xs.isNotIn),isEmpty:A(xs.isEmpty),isNotEmpty:A(xs.isNotEmpty)}},Cs={isHttpStatus(e,t){if(!Fo(e,w))throw new k(`${_(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,n){if(!Fo(e,w))throw new k(`${_(e)} is not a valid HTTP status.`,n);if(!bs(e,E[t]))throw new k(`${_(e)} is not a '${t}' HTTP status.`,n)}},ws={assert:Cs,check:{isHttpStatus(e){return Fo(e,w)},isHttpStatusCategory(e,t){return Fo(e,w)&&bs(e,E[t])}},assertWrap:{isHttpStatus(e,t){if(!Fo(e,w))throw new k(`${_(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,n){if(!Fo(e,w))throw new k(`${_(e)} is not a valid HTTP status.`,n);if(!bs(e,E[t]))throw new k(`${_(e)} is not a '${t}' HTTP status.`,n);return e}},checkWrap:{isHttpStatus(e){if(Fo(e,w))return e},isHttpStatusCategory(e,t){if(Fo(e,w)&&bs(e,E[t]))return e}},waitUntil:{isHttpStatus:A(Cs.isHttpStatus),isHttpStatusCategory:A(Cs.isHttpStatusCategory)}},Ts={instanceOf(e,t,n){if(!(e instanceof t))throw new k(`'${_(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new k(`'${_(e)}' is an instance of '${t.name}'`,n)}},Es={assert:Ts,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,n){if(e instanceof t)return e;throw new k(`'${_(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new k(`'${_(e)}' is an instance of '${t.name}'`,n);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:A(Ts.instanceOf),notInstanceOf:A(Ts.notInstanceOf)}},Ds=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Os(e,t){return Ds.some(n=>{try{return n(e,t)}catch{return!1}})}var ks={isKeyOf(e,t,n){if(!Os(t,e))throw new k(`'${String(e)}' is not a key of '${_(t)}'.`,n)},isNotKeyOf(e,t,n){if(Os(t,e))throw new k(`'${String(e)}' is a key of '${_(t)}'.`,n)},hasKey(e,t,n){if(!Os(e,t))throw new k(`'${_(e)}' does not have key '${String(t)}'.`,n)},lacksKey(e,t,n){if(Os(e,t))throw new k(`'${_(e)}' has key '${String(t)}'.`,n)},hasKeys(e,t,n){let r=t.filter(t=>!Os(e,t));if(r.length)throw new k(`'${_(e)}' does not have keys '${r.join(`,`)}'.`,n)},lacksKeys(e,t,n){let r=t.filter(t=>Os(e,t));if(r.length)throw new k(`'${_(e)}' does not lack keys '${r.join(`,`)}'.`,n)}},As={assert:ks,check:{isKeyOf(e,t){return Os(t,e)},isNotKeyOf(e,t){return!Os(t,e)},hasKey:Os,lacksKey(e,t){return!Os(e,t)},hasKeys(e,t){return t.every(t=>Os(e,t))},lacksKeys(e,t){return t.every(t=>!Os(e,t))}},assertWrap:{isKeyOf(e,t,n){if(!Os(t,e))throw new k(`'${String(e)}' is not a key of '${_(t)}'.`,n);return e},isNotKeyOf(e,t,n){if(Os(t,e))throw new k(`'${String(e)}' is a key of '${_(t)}'.`,n);return e},hasKey(e,t,n){if(!Os(e,t))throw new k(`'${_(e)}' does not have key '${String(t)}'.`,n);return e},lacksKey(e,t,n){if(Os(e,t))throw new k(`'${_(e)}' has key '${String(t)}'.`,n);return e},hasKeys(e,t,n){let r=t.filter(t=>!Os(e,t));if(r.length)throw new k(`'${_(e)}' does not have keys '${r.join(`,`)}'.`,n);return e},lacksKeys(e,t,n){let r=t.filter(t=>Os(e,t));if(r.length)throw new k(`'${_(e)}' does not lack keys '${r.join(`,`)}'.`,n);return e}},checkWrap:{isKeyOf(e,t){if(Os(t,e))return e},isNotKeyOf(e,t){if(!Os(t,e))return e},hasKey(e,t){if(Os(e,t))return e},lacksKey(e,t){if(!Os(e,t))return e},hasKeys(e,t){if(t.every(t=>Os(e,t)))return e},lacksKeys(e,t){if(t.every(t=>!Os(e,t)))return e}},waitUntil:{isKeyOf:A(ks.isKeyOf),isNotKeyOf:A(ks.isNotKeyOf),hasKey:A(ks.hasKey),lacksKey:A(ks.lacksKey),hasKeys:A(ks.hasKeys),lacksKeys:A(ks.lacksKeys)}};function js(e,t,n){if((Array.isArray(e)||typeof e==`string`?e.length:S(e).length)<t)throw new k(`Length '${e.length}' is not at least '${t}'.`,n)}function Ms(e,t,n){if((Array.isArray(e)||typeof e==`string`?e.length:S(e).length)!==t)throw new k(`Length '${e.length}' is not exactly '${t}'.`,n)}var Ns={isLengthAtLeast:js,isLengthExactly:Ms},Ps={assert:Ns,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e==`string`?e.length:S(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e==`string`?e.length:S(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,n)=>{if((Array.isArray(e)||typeof e==`string`?e.length:S(e).length)<t)throw new k(`Length '${e.length}' is not at least '${t}'.`,n);return e}),isLengthExactly:((e,t,n)=>{if((Array.isArray(e)||typeof e==`string`?e.length:S(e).length)!==t)throw new k(`Length '${e.length}' is not exactly '${t}'.`,n);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e==`string`?e.length:S(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e==`string`?e.length:S(e).length)===t)return e})},waitUntil:{isLengthAtLeast:A(Ns.isLengthAtLeast),isLengthExactly:A(Ns.isLengthExactly)}},Fs={assert:{never(e){throw new k(`This code should not have executed.`,e)}},assertWrap:{},check:{},checkWrap:{},waitUntil:{}},Is={isDefined(e,t){if(e==null)throw new k(`'${_(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new k(`'${_(e)}' is not a nullish.`,t)}},Ls={assert:Is,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new k(`'${_(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new k(`'${_(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:A(Is.isDefined),isNullish:A(Is.isNullish)}},Rs={isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new k(`${e} is not within the bounds ${_({min:n,max:t})}`,r)},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new k(`${e} is not outside the bounds ${_({min:t,max:n})}`,r)},isInteger(e,t){if(typeof e!=`number`||isNaN(e)||!Number.isInteger(e))throw new k(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new k(`${e} is an integer.`,t)},isAbove(e,t,n){if(e<=t)throw new k(`${e} is not above ${t}`,n)},isAtLeast(e,t,n){if(e<t)throw new k(`${e} is not at least ${t}`,n)},isBelow(e,t,n){if(e>=t)throw new k(`${e} is not below ${t}`,n)},isAtMost(e,t,n){if(e>t)throw new k(`${e} is not at most ${t}`,n)},isNaN(e,t){if(!isNaN(e))throw new k(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new k(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new k(`${e} is not infinite`,t)},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new k(`${e} is not within ±${n} of ${t}`,r)},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new k(`${e} is within ±${n} of ${t}`,r)}},zs={assert:Rs,check:{isInBounds(e,{max:t,min:n}){return n<=e&&e<=t},isOutBounds(e,{max:t,min:n}){return e<n||t<e},isInteger(e){return typeof e==`number`&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!=`number`||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,n){return t-n<=e&&e<=t+n},isNotApproximately(e,t,n){return e<t-n||e>t+n}},assertWrap:{isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new k(`${e} is not within the bounds ${_({min:n,max:t})}`,r);return e},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new k(`${e} is not outside the bounds ${_({min:t,max:n})}`,r);return e},isInteger(e,t){if(typeof e!=`number`||isNaN(e)||!Number.isInteger(e))throw new k(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new k(`${e} is an integer.`,t);return e},isAbove(e,t,n){if(e<=t)throw new k(`${e} is not above ${t}`,n);return e},isAtLeast(e,t,n){if(e<t)throw new k(`${e} is not at least ${t}`,n);return e},isBelow(e,t,n){if(e>=t)throw new k(`${e} is not below ${t}`,n);return e},isAtMost(e,t,n){if(e>t)throw new k(`${e} is not at most ${t}`,n);return e},isNaN(e,t){if(!isNaN(e))throw new k(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new k(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new k(`${e} is not infinite`,t);return e},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new k(`${e} is not within ±${n} of ${t}`,r);return e},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new k(`${e} is within ±${n} of ${t}`,r);return e}},checkWrap:{isInBounds(e,{max:t,min:n}){if(n<=e&&e<=t)return e},isOutBounds(e,{max:t,min:n}){if(e<n||t<e)return e},isInteger(e){if(typeof e==`number`&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!=`number`||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,n){if(t-n<=e&&e<=t+n)return e},isNotApproximately(e,t,n){if(e<t-n||e>t+n)return e}},waitUntil:{isInBounds:A(Rs.isInBounds),isOutBounds:A(Rs.isOutBounds),isInteger:A(Rs.isInteger),isNotInteger:A(Rs.isNotInteger),isAbove:A(Rs.isAbove),isAtLeast:A(Rs.isAtLeast),isBelow:A(Rs.isBelow),isAtMost:A(Rs.isAtMost),isNaN:A(Rs.isNaN),isFinite:A(Rs.isFinite),isInfinite:A(Rs.isInfinite),isApproximately:A(Rs.isApproximately),isNotApproximately:A(Rs.isNotApproximately)}};function Bs(e,t,n,r,i){return Hs(...Vs(e,t,n,r,i),!1)}function Vs(e,t,n,r,i){let a=Array.isArray(n);return[a?e:_s,a?t:e,a?n:t,a?r:n,a?i:r]}function Hs(e,t,n,r,i,a){let o=t(...n);if(o instanceof Promise)return new Promise(async(n,s)=>{try{let t=await o;e(t,r),a?n(t):n()}catch(e){s(new k(`Output from '${t.name}' did not produce expected output. ${C(e)}`,i))}});try{return e(o,r),a?o:void 0}catch(e){throw new k(`Output from '${t.name}' did not produce expected output. ${C(e)}`,i)}}function Us(e,t,n,r,i){try{let a=Hs(...Vs(e,t,n,r,i),!1);return a instanceof Promise?new Promise(async e=>{try{await a,e(!0)}catch{e(!1)}}):!0}catch{return!1}}function Ws(e,t,n,r,i){return Hs(...Vs(e,t,n,r,i),!0)}function Gs(e,t,n,r,i){try{let a=Hs(...Vs(e,t,n,r,i),!0);return a instanceof Promise?new Promise(async e=>{try{e(await a)}catch{e(void 0)}}):a}catch{return}}var Ks=Symbol(`not set`);async function qs(e,t,n,r,i,a){let o=Array.isArray(n),s=o?e:_s,c=o?t:e,l=o?n:t,u=o?r:n,d=To(o?i:r),f=o?a:i,p=so(d.timeout,{milliseconds:!0}).milliseconds,m=so(d.interval,{milliseconds:!0}),h=Ks,g;async function ee(){try{h=await Hs(s,c,l,u,void 0,!0)}catch(e){h=Ks,g=je(e)}}let te=Date.now();for(;h===Ks;)if(await ee(),await po(m),Date.now()-te>=p)throw Me(g,Ae(f,`Timeout of '${p}' milliseconds exceeded waiting for callback value to match expectations`));return h}var Js={assert:{output:Bs},check:{output:Us},assertWrap:{output:Ws},checkWrap:{output:Gs},waitUntil:{output:qs}},Ys={isPropertyKey(e,t){if(typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`)throw new k(`'${_(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e==`string`||typeof e==`number`||typeof e==`symbol`)throw new k(`'${_(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e==`object`||typeof e==`function`))throw new k(`'${_(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!=`object`&&typeof e!=`function`)throw new k(`'${_(e)}' is not a Primitive.`,t)}},Xs={assert:Ys,check:{isNotPrimitive(e){return e!==null&&(typeof e==`object`||typeof e==`function`)},isNotPropertyKey(e){return typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`},isPrimitive(e){return e===null||typeof e!=`object`&&typeof e!=`function`},isPropertyKey(e){return typeof e==`string`||typeof e==`number`||typeof e==`symbol`}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!=`object`&&typeof e!=`function`)throw new k(`'${_(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e==`string`||typeof e==`number`||typeof e==`symbol`)throw new k(`'${_(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e==`object`||typeof e==`function`))throw new k(`'${_(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`)throw new k(`'${_(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e==`object`||typeof e==`function`))return e},isNotPropertyKey(e){if(typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`)return e},isPrimitive(e){if(e===null||typeof e!=`object`&&typeof e!=`function`)return e},isPropertyKey(e){if(typeof e==`string`||typeof e==`number`||typeof e==`symbol`)return e}},waitUntil:{isNotPrimitive:A(Ys.isNotPrimitive),isNotPropertyKey:A(Ys.isNotPropertyKey),isPrimitive:A(Ys.isPrimitive),isPropertyKey:A(Ys.isPropertyKey)}},Zs={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`))throw new k(`'${_(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`)throw new k(`'${_(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new k(`'${_(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new k(`'${_(e)}' is a Promise.`,t)}},Qs={assert:Zs,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`)},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`))throw new k(`'${_(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`)throw new k(`'${_(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new k(`'${_(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new k(`'${_(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`)return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:A(Zs.isPromiseLike,!0),isNotPromiseLike:A(Zs.isNotPromiseLike,!0),isPromise:A(Zs.isPromise,!0),isNotPromise:A(Zs.isNotPromise,!0)}},$s={matches(e,t,n){if(!t.test(e))throw new k(`'${e}' does not match ${t}`,n)},mismatches(e,t,n){if(t.test(e))throw new k(`'${e}' matches ${t}`,n)}},ec={assert:$s,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,n){if(!t.test(e))throw new k(`'${e}' does not match ${t}`,n);return e},mismatches(e,t,n){if(t.test(e))throw new k(`'${e}' matches ${t}`,n);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:A($s.matches,!0),mismatches:A($s.mismatches,!0)}},tc={isArray(e,t){if(!Array.isArray(e))throw new k(`'${_(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!=`bigint`)throw new k(`'${_(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!=`boolean`)throw new k(`'${_(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!=`function`)throw new k(`'${_(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new k(`'${_(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!=`number`||isNaN(e))throw new k(`'${_(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!=`object`||!e)throw new k(`'${_(e)}' is not a non-null object.`,t)},isPlainObject(e,t){let n=Object.getPrototypeOf(e);if(typeof e!=`object`||!e||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new k(`'${_(e)}' is not a plain object.`,t)},isString(e,t){if(typeof e!=`string`)throw new k(`'${_(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!=`symbol`)throw new k(`'${_(e)}' is not a symbol.`,t)},isUndefined(e,t){if(e!==void 0)throw new k(`'${_(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new k(`'${_(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e==`bigint`)throw new k(`'${_(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e==`boolean`)throw new k(`'${_(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e==`function`)throw new k(`'${_(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new k(`'${_(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e==`number`&&!isNaN(e))throw new k(`'${_(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e==`object`&&e)throw new k(`'${_(e)}' is a non-null object.`,t)},isNotPlainObject(e,t){let n=Object.getPrototypeOf(e);if(!(typeof e!=`object`||!e||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new k(`'${_(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e==`string`)throw new k(`'${_(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e==`symbol`)throw new k(`'${_(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(e===void 0)throw new k(`'${_(e)}' is a undefined.`,t)}},nc={assert:tc,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e==`bigint`},isBoolean(e){return typeof e==`boolean`},isFunction(e){return typeof e==`function`},isNull(e){return e===null},isNumber(e){return typeof e==`number`&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e==`object`&&!!e},isPlainObject(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e==`string`},isSymbol(e){return typeof e==`symbol`},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!=`bigint`},isNotBoolean(e){return typeof e!=`boolean`},isNotFunction(e){return typeof e!=`function`},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!=`number`||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!=`object`||!e},isNotPlainObject(e){if(typeof e!=`object`||!e)return!0;let t=Object.getPrototypeOf(e);return!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!=`string`},isNotSymbol(e){return typeof e!=`symbol`},isNotUndefined(e){return e!==void 0}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new k(`'${_(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!=`bigint`)throw new k(`'${_(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!=`boolean`)throw new k(`'${_(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!=`function`)throw new k(`'${_(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new k(`'${_(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!=`number`||isNaN(e))throw new k(`'${_(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!=`object`||!e)throw new k(`'${_(e)}' is not a non-null object.`,t);return e},isPlainObject(e,t){let n=Object.getPrototypeOf(e);if(typeof e!=`object`||!e||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new k(`'${_(e)}' is not a plain object.`,t);return e},isString(e,t){if(typeof e!=`string`)throw new k(`'${_(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!=`symbol`)throw new k(`'${_(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(e!==void 0)throw new k(`'${_(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new k(`'${_(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e==`bigint`)throw new k(`'${_(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e==`boolean`)throw new k(`'${_(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e==`function`)throw new k(`'${_(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new k(`'${_(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e==`number`&&!isNaN(e))throw new k(`'${_(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e==`object`&&e)throw new k(`'${_(e)}' is a non-null object.`,t);return e},isNotPlainObject(e,t){let n=Object.getPrototypeOf(e);if(typeof e!=`object`||!e||!((n==null||n===Object.prototype||Object.getPrototypeOf(n)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new k(`'${_(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e==`string`)throw new k(`'${_(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e==`symbol`)throw new k(`'${_(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(e===void 0)throw new k(`'${_(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e==`bigint`)return e},isBoolean(e){if(typeof e==`boolean`)return e},isFunction(e){if(typeof e==`function`)return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e==`number`&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e==`object`&&e)return e},isPlainObject(e){if(typeof e!=`object`||!e)return;let t=Object.getPrototypeOf(e);if((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e==`string`)return e},isSymbol(e){if(typeof e==`symbol`)return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!=`bigint`)return e},isNotBoolean(e){if(typeof e!=`boolean`)return e},isNotFunction(e){if(typeof e!=`function`)return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e==`number`&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!=`object`||!e)return e},isNotPlainObject(e){if(typeof e!=`object`||!e)return e;let t=Object.getPrototypeOf(e);if(!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!=`string`)return e},isNotSymbol(e){if(typeof e!=`symbol`)return e}},waitUntil:{isArray:A(tc.isArray),isBigInt:A(tc.isBigInt),isBoolean:A(tc.isBoolean),isFunction:A(tc.isFunction),isNull:A(tc.isNull),isNumber:A(tc.isNumber),isObject:A(tc.isObject),isPlainObject:A(tc.isPlainObject),isString:A(tc.isString),isSymbol:A(tc.isSymbol),isUndefined:A(tc.isUndefined),isNotArray:A(tc.isNotArray),isNotBigInt:A(tc.isNotBigInt),isNotBoolean:A(tc.isNotBoolean),isNotFunction:A(tc.isNotFunction),isNotNull:A(tc.isNotNull),isNotNumber:A(tc.isNotNumber),isNotObject:A(tc.isNotObject),isNotPlainObject:A(tc.isNotPlainObject),isNotString:A(tc.isNotString),isNotSymbol:A(tc.isNotSymbol),isNotUndefined:A(tc.isNotUndefined)}},rc;(function(e){e.Assert=`assert`,e.AssertWrap=`assert-wrap`,e.CheckWrap=`check-wrap`,e.Check=`check`})(rc||={});function ic(e,t,n){oc(e,{noError:`No error.`,notInstance:`'${_(e)}' is not an error instance.`},t,n)}function ac(e,t,n){oc(e,{noError:`No Error was thrown.`,notInstance:`Thrown value '${_(e)}' is not an error instance.`},t,n)}function oc(e,t,n,r){if(!e)throw new k(t.noError,r);if(!(e instanceof Error))throw new k(t.notInstance,r);if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){let t=e.constructor.name;throw new k(`Error constructor '${t}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){let t=C(e);if(typeof n.matchMessage==`string`){if(!bo(t,n.matchMessage))throw new k(`Error message\n\n'${t}'\n\ndoes not contain\n\n'${n.matchMessage}'.`,r)}else if(!t.match(n.matchMessage))throw new k(`Error message\n\n'${t}'\n\ndoes not match RegExp\n\n'${n.matchMessage}'.`,r)}}function sc(e,t){if(!e||!(e instanceof Error)||t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){let n=C(e);if(typeof t.matchMessage==`string`){if(!bo(n,t.matchMessage))return!1}else if(!n.match(t.matchMessage))return!1}return!0}function cc(e,t,n,r){let i;try{let a=t instanceof Promise?t:t();if(a instanceof Promise)return new Promise(async(t,o)=>{try{await a}catch(e){i=je(e)}try{ac(i,n,r),e===rc.Assert?t():e===rc.Check?t(!0):t(i)}catch(n){e===rc.CheckWrap?t(void 0):e===rc.Check?t(!1):o(je(n))}})}catch(e){i=je(e)}try{return ac(i,n,r),e===rc.Check?!0:e===rc.Assert?void 0:i}catch(t){if(e===rc.CheckWrap)return;if(e===rc.Check)return!1;throw t}}function lc(e,t,n){return cc(rc.Assert,e,t,n)}function uc(e,t){return cc(rc.Check,e,t)}function dc(e,t,n){return cc(rc.AssertWrap,e,t,n)}function fc(e,t,n){return cc(rc.CheckWrap,e,t,n)}var pc=A(ic);function mc(e,t,n,r){let i=typeof e==`function`||e instanceof Promise?void 0:e,a=i?t:e,o=typeof n==`object`?r:n,s=typeof n==`object`?n:t;if(typeof a!=`function`)throw TypeError(`Callback is not a function, got '${_(a)}'`);return pc(i,async()=>{try{await a();return}catch(e){return je(e)}},s,o)}var hc={assert:{throws:lc,isError:ic},check:{throws:uc,isError(e,t){return sc(e,t)}},assertWrap:{throws:dc,isError(e,t,n){return oc(e,{noError:`No error.`,notInstance:`'${_(e)}' is not an error instance.`},t,n),e}},checkWrap:{throws:fc,isError(e,t){if(sc(e,t))return e}},waitUntil:{throws:mc,isError:A(ic)}},gc=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,_c={isUuid(e,t){if(!String(e).match(gc))throw new k(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(gc))throw new k(`'${String(e)}' is a UUID.`,t)}},vc={assert:_c,check:{isUuid(e){return!!String(e).match(gc)},isNotUuid(e){return!String(e).match(gc)}},assertWrap:{isUuid(e,t){if(!String(e).match(gc))throw new k(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(gc))throw new k(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(gc))return e},isNotUuid(e){if(!String(e).match(gc))return e}},waitUntil:{isUuid:A(_c.isUuid),isNotUuid:A(_c.isNotUuid)}},yc={...Fs.assert,...Do.assert,...No.assert,...zo.assert,...Lo.assert,...ws.assert,...Es.assert,...Wo.assert,...As.assert,...Ps.assert,...Ls.assert,...zs.assert,...Js.assert,...Xs.assert,...Qs.assert,...ec.assert,...nc.assert,...vs.assert,...hc.assert,...vc.assert,...Ss.assert},bc=[Do,No,zo,Lo,ws,Es,Wo,As,Ps,Fs,Ls,zs,Js,Xs,Qs,ec,nc,vs,hc,vc,Ss],xc=Object.assign({},...bc.map(e=>e.check)),j=Object.assign(function(e){return!!e},xc);function Sc(e,t,n){return Cc(e,t,n,new Set)}function Cc(e,t,n,r){if(e=wc(e),t=wc(t),j.isObject(e)&&j.isObject(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),!Cc(S(e).sort(),S(t).sort(),n,r))return!1;let i=!1,a=S(e).map(a=>{let o=Cc(e[a],t[a],n,r);return j.isPromise(o)&&(i=!0),o});return Tc(i,a)}else if(j.isArray(e)&&j.isArray(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),e.length!==t.length)return!1;let i=!1,a=e.map((e,a)=>{let o=Cc(e,t[a],n,r);return j.isPromise(o)&&(i=!0),o});return Tc(i,a)}else return n(e,t)}function wc(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function Tc(e,t){return e?new Promise(async(e,n)=>{try{e((await Promise.all(t)).every(j.isTrue))}catch(e){n(je(e))}}):t.every(j.isTrue)}var Ec=Object.assign({},...bc.map(e=>e.assertWrap)),Dc=Object.assign(function(e,t){if(!e)throw new k(`Assertion failed.`,t);return e},Ec);function Oc(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}var kc={assert:{tsType:Oc},assertWrap:{tsType:void 0},check:{tsType:void 0},checkWrap:{tsType:void 0},waitUntil:{tsType:void 0}},Ac={fail:e=>{throw new k(`Failure triggered.`,e)}},jc={...kc.assert,...yc,...Ac},Mc=Object.assign(function(e,t){if(!e)throw new k(`Assertion failed.`,t)},jc),Nc=Object.assign({},...bc.map(e=>e.checkWrap)),Pc=Object.assign(function(e){if(e)return e},Nc);function Fc(e,t){return j.hasKey(e,`entryType`)&&e.entryType===t}function Ic(e,t){return e.controlType===t}var Lc;(function(e){e.Checkbox=`checkbox`,e.Color=`color`,e.Custom=`custom`,e.Dropdown=`dropdown`,e.Hidden=`hidden`,e.Number=`number`,e.Text=`text`})(Lc||={});var Rc=Symbol(`any-type`),zc={[Lc.Checkbox]:!1,[Lc.Color]:``,[Lc.Custom]:void 0,[Lc.Dropdown]:``,[Lc.Hidden]:Rc,[Lc.Number]:0,[Lc.Text]:``};function Bc(e,t){if(!e)return[];let n=[];return Object.entries(e).forEach(([e,r])=>{if(r.controlType===Lc.Custom)return;let i=zc[r.controlType];i!==Rc&&(typeof i!=typeof r.initValue&&n.push(Error(`Control '${e}' in page '${t}' has invalid initValue '${r.initValue}': expected initValue of type ${typeof i} because the control is of type ${r.controlType}.`)),e||n.push(Error(`'${t}' cannot have an empty control name.`)))}),n}function Vc(e,t,n){let r=t;if(e.has(r))return e.get(r);{let t=n();return j.isPromise(t)?new Promise(async(n,i)=>{try{let i=await t;e.set(r,i),n(i)}catch(e){i(je(e))}}):(e.set(r,t),t)}}function Hc(e,t,n){if(t in e)return e[t];{let r=n();return j.isPromise(r)?new Promise(async(n,i)=>{try{let i=await r;e[t]=i,n(i)}catch(e){i(je(e))}}):(e[t]=r,r)}}function Uc(e){return S(e).map(t=>[t,e[t]])}function Wc(e){return Object.fromEntries(e)}function Gc(e,t,n){return e.reduce((e,r,i,a)=>{let o=t(r,i,a);return n(o,r,i,a)&&e.push(o),e},[])}function Kc(e,t,n={}){try{let n=!1,r=e.map((e,r,i)=>{let a=t(e,r,i);if(a instanceof Promise)return n=!0,a;if(a)return[a.key,a.value]}).filter(j.isTruthy);return n?new Promise(async(e,t)=>{try{e(Wc(Gc(await Promise.all(r),e=>{if(e)return Array.isArray(e)?e:[e.key,e.value]},j.isTruthy)))}catch(e){t(je(e))}}):Wc(r)}catch(e){throw je(e)}}function qc(e,t){let n=[],r=!1;for(let i=0;i<e;i++){let e=t(i);j.isPromise(e)&&(r=!0),n.push(e)}return r?Promise.all(n):n}function Jc(e){return Array.isArray(e)?e:[e]}function Yc({min:e,max:t}){let{min:n,max:r}=Ne({min:Math.floor(e),max:Math.floor(t)}),i=r-n+1,a=Math.ceil(Math.ceil(Math.log2(i))/8);if(a>65e3)throw RangeError(`Cannot create a random integer so large. ({min: ${n}, max: ${r}})`);let o=Math.floor(256**a/i)*i,s=new Uint8Array(a),c;do crypto.getRandomValues(s),c=s.reduce((e,t,n)=>e+t*256**n,0);while(c>=o);return n+c%i}var Xc=`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`.split(``);function Zc(e=16){let t=``;for(let n=0;n<e;n++){let e=Yc({min:0,max:Xc.length-1});t+=Xc[e]}return t}function Qc(e){return j.isLengthAtLeast(e,1)?e.length===1?e[0]:Error(e.map(e=>C(e).trim()).join(`
`)):Error()}function $c(e,t={}){try{let n=e();return n instanceof Promise?n.catch(e=>t.handleError?t.handleError(e):j.hasKey(t,`fallbackValue`)?t.fallbackValue:je(e)):n}catch(e){return t.handleError?t.handleError(e):j.hasKey(t,`fallbackValue`)?t.fallbackValue:je(e)}}function el(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error(`Failed to JSON copy for:`,e),Me(t,`Failed JSON copy`)}}var tl=`modulepreload`,nl=function(e){return`/structured-render/demo/`+e},rl={},il=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=nl(t,n),t in rl)return;rl[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:tl,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},al;(function(e){e.Standard=`stdout`,e.Error=`stderr`})(al||={});var ol;(function(e){e.Bold=`bold`,e.Debug=`debug`,e.Error=`error`,e.Faint=`faint`,e.Info=`info`,e.Mutate=`mutate`,e.NormalWeight=`normalWeight`,e.Plain=`plain`,e.Reset=`reset`,e.Success=`success`,e.Warning=`warning`})(ol||={});async function sl(){return await be({async[y.Node](){let e=(await il(async()=>{let{default:e}=await import(`./ansi-styles-D8ALQhWg.js`);return{default:e}},[])).default;return{[ol.Bold]:e.bold.open,[ol.Debug]:e.blueBright.open,[ol.Error]:e.red.open,[ol.Faint]:e.gray.open,[ol.Info]:e.cyan.open,[ol.Mutate]:e.magenta.open,[ol.NormalWeight]:`\x1B[22m`,[ol.Plain]:``,[ol.Reset]:e.reset.open,[ol.Success]:e.green.open,[ol.Warning]:e.yellow.open}},[y.Web](){return Promise.resolve({[ol.Bold]:`font-weight: bold`,[ol.Debug]:`color: blue`,[ol.Error]:`color: red`,[ol.Faint]:`color: grey`,[ol.Info]:`color: teal`,[ol.Mutate]:`color: magenta`,[ol.NormalWeight]:``,[ol.Plain]:``,[ol.Reset]:``,[ol.Success]:`color: green`,[ol.Warning]:`color: orange`})}})}var cl=await sl(),ll={[ol.Bold]:{colors:[cl.bold],logType:al.Standard},[ol.Debug]:{colors:[cl.debug],logType:al.Standard},[ol.Faint]:{colors:[cl.faint],logType:al.Standard},[ol.Info]:{colors:[cl.info],logType:al.Standard},[ol.Mutate]:{colors:[cl.mutate,cl.bold],logType:al.Standard},[ol.NormalWeight]:{colors:[cl.normalWeight],logType:al.Standard},[ol.Plain]:{colors:[],logType:al.Standard},[ol.Reset]:{colors:[cl.reset],logType:al.Standard},[ol.Success]:{colors:[cl.success,cl.bold],logType:al.Standard},[ol.Error]:{colors:[cl.error,cl.bold],logType:al.Error},[ol.Warning]:{colors:[cl.warning],logType:al.Error}};function ul({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function dl({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function fl(e,t){try{let n=!1,r=Uc(e).map(([r,i])=>{let a=t(r,i,e);if(a instanceof Promise)return n=!0,a;if(a)return[a.key,a.value]}).filter(j.isTruthy);return n?new Promise(async(e,t)=>{try{e(Wc(Gc(await Promise.all(r),e=>{if(e)return Array.isArray(e)?e:[e.key,e.value]},j.isTruthy)))}catch(e){t(je(e))}}):Wc(r)}catch(e){throw je(e)}}function pl(e,t){return fl(e,(n,r)=>{let i=r,a=t(r,e);return a instanceof Promise?a.then(e=>({key:i,value:e})):{key:i,value:a}})}function ml(e,...t){let n={...e};return t.forEach(e=>{e&&Uc(e).forEach(([e,t])=>{t!=null&&(n[e]=t)})}),n}function hl(e,t){return e.match(t)??[]}function gl(e){return _l({value:e,suffix:`px`})}function _l({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function vl({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function yl(){return await be({async[y.Node](){let{inspect:e}=await il(async()=>{let{inspect:e}=await import(`node:util`);return{inspect:e}},[]);return({args:t,colorKey:n,options:r})=>{let i=t.map(t=>typeof t==`string`?t:e(t));return{text:[r.omitColors?``:r.colorConfig[n].colors.join(``),i.join(`
`),r.omitColors?``:r.colorConfig[ol.Reset].colors.join(``)].join(``),css:void 0}}},[y.Web](){return({args:e,colorKey:t,options:n})=>{let r=n.omitColors?void 0:Gc(n.colorConfig[t].colors,e=>vl({value:e,suffix:`;`}),j.isTruthy).join(`; `);return{text:[e.map(e=>typeof e==`string`?e:e instanceof Error?C(e):_(e)).join(`
`),n.omitColors?``:n.colorConfig[ol.Reset].colors.join(``)].join(``),css:r}}}})}var bl=await yl(),xl={colorConfig:ll,omitColors:!1},Sl=Cl({[al.Error](){},[al.Standard](){}});function Cl(e,t){let n=ml(xl,t);function r(t){e[n.colorConfig[t.colorKey].logType](bl({...t,options:n}))}let i=pl(ol,e=>(...t)=>r({args:t,colorKey:e}));return{...i,if(e){return e?i:Sl}}}var wl=Cl(b(y.Node)?{[al.Error]({text:e}){process.stderr.write(e+`
`)},[al.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[al.Error]({text:e,css:t}){console.error(ul({value:e,prefix:`%c`}),t)},[al.Standard]({text:e,css:t}){console.log(ul({value:e,prefix:`%c`}),t)}});function Tl(e,{digits:t}){if(t==null)return e;let n=10**t,r=e*n;return Number((Math.round(r)/n).toFixed(t))}function El({searchIn:e,searchFor:t,caseSensitive:n,includeLength:r}){let i=go(vo(t,{caseSensitive:n}),`g`),a=[],o=[];return e.replace(i,(...n)=>{let r=n[n.length-2];if(typeof r!=`number`)throw TypeError(`Match index "${r}" is not a number. Searching for "${t}" in "${e}".`);let i=n[0];if(typeof i!=`string`)throw TypeError(`regExpMatch should've been a string but was ${typeof i}!`);o.push({index:r,length:i.length}),a.push(r);let s=n[0];if(typeof s!=`string`)throw TypeError(`Original match when searching for "${t}" in "${e}" at index ${r} is not a string.`);return s}),r?o:a}function Dl(e,t,{caseSensitive:n}){let r=El({searchIn:e,searchFor:t,caseSensitive:n,includeLength:!0}),i=vo(t,{caseSensitive:n});return e.split(i).reduce((t,n,i)=>{let a=r[i],o=t.concat(n);if(a){let t=e.slice(a.index,a.index+a.length);return o.concat(t)}else return o},[])}function Ol(e,t){return e.split(t)}function kl(e,t){let{min:n,max:r}=Ne(t);if(t.takeOverflow){let t=r-n+1,i=(e-n)%t;return i<0?n+t+i:n+i}else return e>r?n:e<n?r:e}function Al(e){return e}function jl(e,t){let n=!1,r=S(e).reduce((r,i)=>{let a=t(i,e[i],e);return a instanceof Promise&&(n=!0),r[i]=a,r},{});return n?new Promise(async(e,t)=>{try{await Promise.all(S(r).map(async e=>{r[e]=await r[e]})),e(r)}catch(e){t(je(e))}}):r}function Ml(e,t){return Wc(Uc(e).filter(([n,r])=>t(n,r,e)))}function Nl(e,t){return Ml(e,e=>t.includes(e))}function Pl(e){return S(e).map(t=>e[t])}function Fl(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g,` `).replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g,` `)}var Il;(function(e){e.Upper=`upper`,e.Lower=`lower`})(Il||={});var Ll={firstLetterCase:Il.Lower};function Rl(e,t){if(!e.length)return``;let n=e[0];return(t===Il.Upper?n.toUpperCase():n.toLowerCase())+e.slice(1)}function zl(e,t={}){let n=e.toLowerCase();return n.length?Rl(n.replace(/^-+/,``).replace(/-{2,}/g,`-`).replace(/-(?:.|$)/g,e=>{let t=e[1];return t?t.toUpperCase():``}),ml(Ll,t).firstLetterCase):``}function Bl(e,t=`and`){if(e.length<2)return e.join(``);let n=e.length>2?`, `:` `;return`${e.slice(0,-1).join(n)}${n}${t} ${e[e.length-1]}`}function Vl({value:e,wrapper:t}){return ul({value:_l({value:e,suffix:t}),prefix:t})}function Hl(){function e(e){return class extends CustomEvent{static type=e;constructor(t){super(e,t)}}}return e}function Ul(e,t){let n=t??Event;return class extends n{static type=e;constructor(t){super(e,t)}}}var Wl=class{listeners={};universalListeners=new Map;getListenerCount(){return Pl(this.listeners).map(e=>e.size||0).reduce((e,t)=>e+t,0)+this.universalListeners.size}listenToAll(e,t={}){let n=()=>this.universalListeners.delete(e)||!1;function r(r,i){t.once&&n(),e(r,i)}return this.universalListeners.set(e,{listener:r,removeListener:n}),n}removeUniversalListener(e){return!!this.universalListeners.get(e)?.removeListener()}listen(e,t,n={}){let r=j.isString(e)?e:e.type,i=()=>this.listeners[r]?.delete(t)||!1;function a(e,r){n.once&&i(),t(e,r)}return Hc(this.listeners,r,()=>new Map).set(t,{listener:a,removeListener:i}),i}removeListener(e,t){let n=j.isString(e)?e:e.type,r=this.listeners[n];if(!r)return!1;let i=r.get(t);return i?i.removeListener():!1}dispatch(e){let t=this.listeners[e.type];e.target??Object.defineProperty(e,`target`,{writable:!1,value:this});let n=t?.size||0;return t?.forEach(t=>{t.listener(e,t.removeListener)}),this.universalListeners.forEach(t=>{t.listener(e,t.removeListener)}),n+this.universalListeners.size}removeAllListeners(){let e=Pl(this.listeners).reduce((e,t)=>{let n=t.size||0;return t.clear(),e+n},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),e}destroy(){this.removeAllListeners()}},Gl=class extends Wl{};function Kl(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function ql(e,t,n){return Kl(globalThis,e,t,n)}function Jl(e,t){let n=Yl(e.title);return e.parent?[...Jl(e.parent,!1),Yl(e.parent.title)].concat(t?[n]:[]):t?[n]:[]}function Yl(e){return Fl(e).toLowerCase().replaceAll(/\s/g,`-`)}function Xl({searchFor:e,searchIn:t}){return e.every((e,n)=>t[n]===e)}var Zl=/[/?#&=]/;function Ql(e){let t=e.match(Zl);return e.trim()?Yl(e)?t?Error(`Book page title has invalid character '${t[0]}'.`):void 0:Error(`Book page title resolved to empty breadcrumb.`):Error(`Cannot define an element-book page with an empty title.`)}var $l={[r.ElementExample]:()=>[],[r.Page]:e=>[Ql(e.title),...Bc(e.controls,e.title)].filter(j.isTruthy),[r.Root]:()=>[]},eu=`_isBookTreeNode`,tu=new Map;function nu(e){return tu.get(e)}function ru(e,t){Vc(tu,e,()=>t)}function iu(e,t){return au(e)&&e.entry.entryType===t}function au(e){return!!(j.hasKeys(e,[`_isBookTreeNode`,`entry`])&&e._isBookTreeNode)}function ou(){return{[eu]:!0,entry:{entryType:r.Root,title:``,parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:``,fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function su({entries:e,debug:t}){let n=nu(e);if(n)return n;let r=ou();e.forEach(e=>lu({tree:r,newEntry:e,debug:t,manuallyAdded:!0}));let i={tree:r,flattenedNodes:du(r)};return ru(e,i),t&&console.info(`element-book tree:`,r),i}function cu(e,t,n){if(!t.parent)return e;let r=uu(t,e);if(r)return r;n&&console.info(`parent of ${t.title} not found in tree; adding it now.`),lu({tree:e,newEntry:t.parent,debug:n,manuallyAdded:!1});let i=uu(t,e);if(!i)throw Error(`Failed to find node despite having just added it: ${Jl(t,!1).join(` > `)}`);return i}function lu({tree:e,newEntry:t,debug:n,manuallyAdded:i}){let a=$l[t.entryType](t);t.errors.push(...a);let o=cu(e,t,n),s=Yl(t.title),c=o.children[s];if(c){if(i){if(c.manuallyAdded){c.entry.errors.push(Error(`Cannot create duplicate '${s}'${o.urlBreadcrumb?` in parent '${o.urlBreadcrumb}'.`:``}`));return}c.manuallyAdded=!0}return}let l={[eu]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...o.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:i};o.children[s]=l,Fc(t,r.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(t=>lu({tree:e,newEntry:t,debug:n,manuallyAdded:i}))}function uu(e,t){let n=au(e)?e.fullUrlBreadcrumbs.slice(0,-1):Jl(e,!1);if(n.length)return n.reduce((e,t)=>{if(e)return e.children[t]},t)}function du(e){return[e,...e.entry.errors.length?[]:Object.values(e.children).map(e=>du(e))].flat()}function fu(e,t){return pu(e,[``,...t],void 0)}function pu(e,t,n){let r=t.slice(1),i=r[0];!i&&n&&(e.controls=n);let a=e.children[i||``],o=a&&pu(a,r,n);return{...e.controls,...o}}function mu(e,t,n){let r={...e};return pu(r,[``,...t],n),r}function hu(e,t){let n=t?.controls||(iu(e,r.Page)?jl(e.entry.controls,(e,t)=>t.initValue):{});return{children:jl(e.children,(e,n)=>hu(n,t?.children?.[n.urlBreadcrumb])),controls:n}}function gu(e){let t={...e,entryType:r.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},n=new Set;return e.defineExamples&&e.defineExamples({defineExample(i){let a={...i,isVertical:t.useVerticalExamples,entryType:r.ElementExample,parent:t,descriptionParagraphs:i.descriptionParagraphs??[],errors:[n.has(i.title)&&Error(`Example title '${i.title}' in page '${e.title}' is already taken.`),Ql(i.title)].filter(j.isTruthy)};n.add(i.title),t.elementExamples[Yl(a.title)]=a}}),t}var _u;(function(e){e.Search=`search`,e.Book=`book`})(_u||={});function vu(e){return e[0]===_u.Book?``:e[1]?decodeURIComponent(e[1]):``}var yu={hash:void 0,paths:[_u.Book],search:void 0},bu=new class e{static cssPropertyDefinitionSupported=!!(globalThis.CSS&&globalThis.CSS.registerProperty);registry=new Map;constructor(){let t=e.cssPropertyDefinitionSupported?globalThis.CSS.registerProperty.bind(globalThis.CSS):void 0;t&&(globalThis.CSS.registerProperty=e=>(bu.registry.set(e.name,e),t(e)))}canRegisterCssProperty(t){return e.cssPropertyDefinitionSupported&&!this.registry.has(t)}registerProperty(e){if(!this.canRegisterCssProperty(e.name))return!1;try{return globalThis.CSS.registerProperty(e),!0}catch(t){throw Me(t,`Failed to define CSS var: ${_(e,4)}\n\n`)}}},xu=globalThis,Su=xu.ShadowRoot&&(xu.ShadyCSS===void 0||xu.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,Cu=Symbol(),wu=new WeakMap,Tu=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Cu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Su&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=wu.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&wu.set(t,e))}return e}toString(){return this.cssText}},Eu=e=>new Tu(typeof e==`string`?e:e+``,void 0,Cu),Du=(e,...t)=>new Tu(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,Cu),Ou=(e,t)=>{if(Su)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=xu.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},ku=Su?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return Eu(t)})(e):e,{is:Au,defineProperty:ju,getOwnPropertyDescriptor:Mu,getOwnPropertyNames:Nu,getOwnPropertySymbols:Pu,getPrototypeOf:Fu}=Object,Iu=globalThis,Lu=Iu.trustedTypes,Ru=Lu?Lu.emptyScript:``,zu=Iu.reactiveElementPolyfillSupport,Bu=(e,t)=>e,Vu={toAttribute(e,t){switch(t){case Boolean:e=e?Ru:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Hu=(e,t)=>!Au(e,t),Uu={attribute:!0,type:String,converter:Vu,reflect:!1,useDefault:!1,hasChanged:Hu};Symbol.metadata??=Symbol(`metadata`),Iu.litPropertyMetadata??=new WeakMap;var Wu=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Uu){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ju(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Mu(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Uu}static _$Ei(){if(this.hasOwnProperty(Bu(`elementProperties`)))return;let e=Fu(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Bu(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Bu(`properties`))){let e=this.properties,t=[...Nu(e),...Pu(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(ku(e))}else e!==void 0&&t.push(ku(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ou(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Vu:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Vu:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Hu)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Wu.elementStyles=[],Wu.shadowRootOptions={mode:`open`},Wu[Bu(`elementProperties`)]=new Map,Wu[Bu(`finalized`)]=new Map,zu?.({ReactiveElement:Wu}),(Iu.reactiveElementVersions??=[]).push(`2.1.2`);var Gu=globalThis,Ku=e=>e,qu=Gu.trustedTypes,Ju=qu?qu.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Yu=`$lit$`,Xu=`lit$${Math.random().toFixed(9).slice(2)}$`,Zu=`?`+Xu,Qu=`<${Zu}>`,$u=document,ed=()=>$u.createComment(``),td=e=>e===null||typeof e!=`object`&&typeof e!=`function`,nd=Array.isArray,rd=e=>nd(e)||typeof e?.[Symbol.iterator]==`function`,id=`[ 	
\f\r]`,ad=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,od=/-->/g,sd=/>/g,cd=RegExp(`>|${id}(?:([^\\s"'>=/]+)(${id}*=${id}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ld=/'/g,ud=/"/g,dd=/^(?:script|style|textarea|title)$/i,fd=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),pd=Symbol.for(`lit-noChange`),M=Symbol.for(`lit-nothing`),md=new WeakMap,hd=$u.createTreeWalker($u,129);function gd(e,t){if(!nd(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Ju===void 0?t:Ju.createHTML(t)}var _d=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=ad;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===ad?c[1]===`!--`?o=od:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=cd):(dd.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=cd):o=sd:o===cd?c[0]===`>`?(o=i??ad,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?cd:c[3]===`"`?ud:ld):o===ud||o===ld?o=cd:o===od||o===sd?o=ad:(o=cd,i=void 0);let d=o===cd&&e[t+1].startsWith(`/>`)?` `:``;a+=o===ad?n+Qu:l>=0?(r.push(s),n.slice(0,l)+Yu+n.slice(l)+Xu+d):n+Xu+(l===-2?t:d)}return[gd(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},vd=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=_d(t,n);if(this.el=e.createElement(l,r),hd.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=hd.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Yu)){let t=u[o++],n=i.getAttribute(e).split(Xu),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Cd:r[1]===`?`?wd:r[1]===`@`?Td:Sd}),i.removeAttribute(e)}else e.startsWith(Xu)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(dd.test(i.tagName)){let e=i.textContent.split(Xu),t=e.length-1;if(t>0){i.textContent=qu?qu.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],ed()),hd.nextNode(),c.push({type:2,index:++a});i.append(e[t],ed())}}}else if(i.nodeType===8)if(i.data===Zu)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Xu,e+1))!==-1;)c.push({type:7,index:a}),e+=Xu.length-1}a++}}static createElement(e,t){let n=$u.createElement(`template`);return n.innerHTML=e,n}};function yd(e,t,n=e,r){if(t===pd)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=td(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=yd(e,i._$AS(e,t.values),i,r)),t}var bd=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??$u).importNode(t,!0);hd.currentNode=r;let i=hd.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new xd(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ed(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=hd.nextNode(),a++)}return hd.currentNode=$u,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},xd=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=yd(this,e,t),td(e)?e===M||e==null||e===``?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==pd&&this._(e):e._$litType$===void 0?e.nodeType===void 0?rd(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==M&&td(this._$AH)?this._$AA.nextSibling.data=e:this.T($u.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=vd.createElement(gd(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new bd(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=md.get(e.strings);return t===void 0&&md.set(e.strings,t=new vd(e)),t}k(t){nd(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(ed()),this.O(ed()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Ku(e).nextSibling;Ku(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Sd=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=M}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=yd(this,e,t,0),a=!td(e)||e!==this._$AH&&e!==pd,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=yd(this,r[n+o],t,o),s===pd&&(s=this._$AH[o]),a||=!td(s)||s!==this._$AH[o],s===M?e=M:e!==M&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Cd=class extends Sd{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}},wd=class extends Sd{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==M)}},Td=class extends Sd{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=yd(this,e,t,0)??M)===pd)return;let n=this._$AH,r=e===M&&n!==M||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==M&&(n===M||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ed=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){yd(this,e)}},Dd={M:Yu,P:Xu,A:Zu,C:1,L:_d,R:bd,D:rd,V:yd,I:xd,H:Sd,N:wd,U:Td,B:Cd,F:Ed},Od=Gu.litHtmlPolyfillSupport;Od?.(vd,xd),(Gu.litHtmlVersions??=[]).push(`3.3.2`);var kd=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new xd(t.insertBefore(ed(),e),e,void 0,n??{})}return i._$AI(e),i},Ad=globalThis,jd=class extends Wu{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=kd(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return pd}};jd._$litElement$=!0,jd.finalized=!0,Ad.litElementHydrateSupport?.({LitElement:jd});var Md=Ad.litElementPolyfillSupport;Md?.({LitElement:jd}),(Ad.litElementVersions??=[]).push(`4.2.2`);function Nd({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}function Pd(e,t=document.head){if(e.match(/\s/))throw Error(`Cannot use a style key with white space in it: '${e}'`);let n=t.querySelector(`style#${e}`);if(n instanceof HTMLStyleElement)return n;{let n=globalThis.document.createElement(`style`);return n.id=e,t.append(n),n}}function Fd(e,t,n=document.head){let r=Pd(t,n);return r.textContent=`:root {\n    ${Uc(e).flatMap(([e,t])=>t==null||t===``?[]:[`    ${ul({value:e,prefix:`--`})}: ${t};`]).join(`
    `)}\n}`,r}var Id;(function(e){e.Url=`<url>`,e.TransformList=`<transform-list>`,e.TransformFunction=`<transform-function>`,e.Time=`<time>`,e.String=`<string>`,e.Resolution=`<resolution>`,e.Percentage=`<percentage>`,e.Number=`<number>`,e.LengthPercentage=`<length-percentage>`,e.Length=`<length>`,e.Integer=`<integer>`,e.Image=`<image>`,e.CustomIdent=`<custom-ident>`,e.Color=`<color>`,e.Angle=`<angle>`,e.Any=`*`})(Id||={});var Ld;(function(e){e.Space=`+`,e.Comma=`#`})(Ld||={});function Rd(e){return jl(e,(e,t)=>{zd(e);let n=t,r=j.isObject(n)&&!(n instanceof Tu)&&j.lacksKey(n,`name`),i=j.isString(n)||j.isNumber(n)||n instanceof Tu?String(n):String(n.default),a=j.isString(n)||j.isNumber(n)||n instanceof Tu?String(n):String(`initialValue`in n&&n.initialValue||n.default),o=Eu(ul({value:e.replace(/^-+/,``),prefix:`--`})),s={name:o,value:Du`var(${o}, ${Eu(i)})`,syntax:j.isString(n)||j.isNumber(n)||n instanceof Tu?Id.Any:Bd(`syntax`in n?n.syntax:void 0),default:i},c=String(s.name);if(!a)throw Error(`Initial value for CSS var ${c} cannot be empty.`);return r&&bu.registerProperty({inherits:!0,name:c,initialValue:a,syntax:s.syntax})&&globalThis.document?.documentElement&&Nd({forCssVar:s,onElement:globalThis.document.documentElement,toValue:i}),s})}function zd(e){try{if(!j.isString(e))throw TypeError(`Must be string.`);if(!e.includes(`-`))throw Error(`Must have at least one dash (-).`);if(e.toLowerCase()!==e)throw Error(`Must be lowercase.`)}catch(t){throw Error(Ae(`Invalid CSS var name.`,t,`Got '${_(e)}'`))}}function Bd(e){return e?j.isString(e)?e:e.union?e.union.map(e=>Bd(e)).join(` | `):e.list?`${Bd(e.list.values)}${e.list.separator}`:e.raw:Id.Any}var Vd=Rd({"element-book-nav-hover-background-color":`magenta`,"element-book-nav-hover-foreground-color":`magenta`,"element-book-nav-active-background-color":`magenta`,"element-book-nav-active-foreground-color":`magenta`,"element-book-nav-selected-background-color":`magenta`,"element-book-nav-selected-foreground-color":`magenta`,"element-book-accent-icon-color":`magenta`}),Hd={nav:{hover:{background:Vd[`element-book-nav-hover-background-color`],foreground:Vd[`element-book-nav-hover-foreground-color`]},active:{background:Vd[`element-book-nav-active-background-color`],foreground:Vd[`element-book-nav-active-foreground-color`]},selected:{background:Vd[`element-book-nav-selected-background-color`],foreground:Vd[`element-book-nav-selected-foreground-color`]}},accent:{icon:Vd[`element-book-accent-icon-color`]}};function Ud(e,t){Kd(e,t,Hd)}function Wd(e){return j.hasKey(e,`_$cssResult$`)}function Gd(e){return j.hasKeys(e,[`name`,`value`,`default`])&&j.isString(e.default)&&Wd(e.name)&&Wd(e.value)}function Kd(e,t,n){Object.entries(t).forEach(([t,r])=>{let i=n[t];if(!i)throw Error(`no nestedCssVar at key '${t}'`);if(Wd(r)){if(!Gd(i))throw Error(`got a CSS result at '${t}' but no CSS var`);Nd({forCssVar:i,onElement:e,toValue:String(r)})}else{if(Gd(i))throw Error(`got no CSS result at '${t}' but did find a CSS var`);Kd(e,r,i)}})}function qd(e,t){let n=e.length,r,i,a=!1,o=!1;Array.isArray(e[0])?r=e:(r=[e],n=r.length,a=!0),Array.isArray(t[0])?i=t:(i=t.length>0?t.map(e=>[e]):[[]],o=!0);let s=i[0].length,c=i[0].map((e,t)=>i.map(e=>e[t])),l=r.map(e=>c.map(t=>{let n=0;if(!Array.isArray(e)){for(let r of t)n+=e*r;return n}for(let r=0;r<e.length;r++)n+=e[r]*(t[r]||0);return n}));return n===1&&a&&(l=l[0]),s===1&&o?n===1&&a?l[0]:l.map(e=>e[0]):l}function Jd(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Yd(e,t,n=[0,0,0]){let r=Jd(e,t[0]),i=Jd(e,t[1]),a=Jd(e,t[2]);return n[0]=r,n[1]=i,n[2]=a,n}function Xd(e){return Zd(e)===`string`}function Zd(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||``).toLowerCase()}function Qd(e,{precision:t=16,unit:n}){return $d(e)?`none`:(e=+tf(e,t),e+(n??``))}function $d(e){return e===null}function ef(e){return $d(e)?0:e}function tf(e,t){if(e===0)return 0;let n=~~e,r=0;n&&t&&(r=~~Math.log10(Math.abs(n))+1);let i=10**(t-r);return Math.floor(e*i+.5)/i}function nf(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function rf(e,t,n){return(n-e)/(t-e)}function af(e,t,n){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(n)||n===null?n:nf(t[0],t[1],rf(e[0],e[1],n))}function of(e,t,n){return Math.max(Math.min(n,t),e)}function sf(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function cf(e,t){return sf(Math.abs(e)**t,e)}function lf(e,t){return t===0?0:e/t}function uf(e,t,n=0,r=e.length){for(;n<r;){let i=n+r>>1;e[i]<t?n=i+1:r=i}return n}function df(e,t){if(e instanceof t)return!0;let n=t.name;for(;e;){let t=Object.getPrototypeOf(e),r=t?.constructor?.name;if(r===n)return!0;if(!r||r===`Object`)return!1;e=t}return!1}var ff=Object.freeze({__proto__:null,bisectLeft:uf,clamp:of,copySign:sf,interpolate:nf,interpolateInv:rf,isInstance:df,isNone:$d,isString:Xd,mapRange:af,multiplyMatrices:qd,multiply_v3_m3x3:Yd,serializeNumber:Qd,skipNone:ef,spow:cf,toPrecision:tf,type:Zd,zdiv:lf}),pf=new class{add(e,t,n){if(typeof arguments[0]!=`string`){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(e){this[e]=this[e]||[],t&&this[e][n?`unshift`:`push`](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(e){e.call(t&&t.context?t.context:t,t)})}},mf={gamut_mapping:`css`,precision:5,deltaE:`76`,verbose:`production`?.toLowerCase()!==`test`,warn:function(e){this.verbose&&globalThis?.console?.warn?.(e)}},hf=class{type;coordMeta;coordRange;range;constructor(e,t){if(typeof e==`object`&&(this.coordMeta=e),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof e==`string`){let t=e.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!t)throw TypeError(`Cannot parse ${e} as a type definition.`);this.type=t.groups.type;let{min:n,max:r}=t.groups;(n||r)&&(this.range=[+n,+r])}}get computedRange(){return this.range?this.range:this.type===`<percentage>`?this.percentageRange():this.type===`<angle>`?[0,360]:null}get unit(){return this.type===`<percentage>`?`%`:this.type===`<angle>`?`deg`:``}resolve(e){if(this.type===`<angle>`)return e;let t=this.computedRange,n=this.coordRange;return this.type===`<percentage>`&&(n??=this.percentageRange()),af(t,n,e)}serialize(e,t){let n=this.type===`<percentage>`?this.percentageRange(100):this.computedRange,r=this.unit;return e=af(this.coordRange,n,e),Qd(e,{unit:r,precision:t})}toString(){let e=this.type;if(this.range){let[t=``,n=``]=this.range;e+=`[${t},${n}]`}return e}percentageRange(e=1){let t;return t=this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?[0,1]:[-1,1],[t[0]*e,t[1]*e]}static get(e,t){return df(e,this)?e:new this(e,t)}},gf=Symbol(`instance`),_f=class e{type;name;spaceCoords;coords;id;alpha;constructor(e,t=e.space){e[gf]=this,this.type=`function`,this.name=`color`,Object.assign(this,e),this.space=t,this.type!==`custom`&&(this.spaceCoords=Object.values(t.coords),this.coords||=this.spaceCoords.map(e=>{let t=[`<number>`,`<percentage>`];return e.type===`angle`&&t.push(`<angle>`),t}),this.coords=this.coords.map((e,t)=>{let n=this.spaceCoords[t];return typeof e==`string`&&(e=e.trim().split(/\s*\|\s*/)),e.map(e=>hf.get(e,n))}))}serializeCoords(e,t,n){return n=e.map((e,t)=>hf.get(n?.[t]??this.coords[t][0],this.spaceCoords[t])),e.map((e,r)=>n[r].serialize(e,t))}coerceCoords(e,t){return Object.entries(this.space.coords).map(([n,r],i)=>{let a=e[i];if($d(a)||isNaN(a))return a;let o=t[i],s=this.coords[i].find(e=>e.type==o);if(!s){let e=r.name||n;throw TypeError(`${o??a?.raw??a} not allowed for ${e} in ${this.name}()`)}return a=s.resolve(a),s.range&&(t[i]=s.toString()),a})}canSerialize(){return this.type===`function`||this.serialize}parse(e){return null}static get(t,...n){return!t||df(t,this)?t:t[gf]?t[gf]:new e(t,...n)}},vf={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]};function yf(e){return Array.isArray(e)?e:vf[e]}function bf(e,t,n,r={}){if(e=yf(e),t=yf(t),!e||!t)throw TypeError(`Missing white point to convert ${e?``:`from`}${!e&&!t?`/`:``}${t?``:`to`}`);if(e===t)return n;let i={W1:e,W2:t,XYZ:n,options:r};if(pf.run(`chromatic-adaptation-start`,i),i.M||(i.W1===vf.D65&&i.W2===vf.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===vf.D50&&i.W2===vf.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),pf.run(`chromatic-adaptation-end`,i),i.M)return Yd(i.XYZ,i.M);throw TypeError(`Only Bradford CAT with white points D50 and D65 supported for now.`)}function xf(e,t){let n={str:String(e)?.trim(),options:t};if(pf.run(`parse-start`,n),n.color)return n.color;n.parsed=Tf(n.str);let r,i=n.options?n.options.parseMeta??n.options.meta:null;if(n.parsed){let t=n.parsed.name,a,o,s=n.parsed.args,c=s.map((e,t)=>n.parsed.argMeta[t]?.type);if(t===`color`){let r=s.shift();c.shift();let i=r.startsWith(`--`)?r.substring(2):`--${r}`,l=[r,i];if(a=N.findFormat({name:t,id:l,type:`function`}),!a){let t,a=r in N.registry?r:i;if(a in N.registry){let n=N.registry[a].formats?.color?.id;n&&(t=`Did you mean ${e.replace(`color(`+r,`color(`+n)}?`)}throw TypeError(`Cannot parse ${n.str}. `+(t??`Missing a plugin?`))}o=a.space,a.id.startsWith(`--`)&&!r.startsWith(`--`)&&mf.warn(`${o.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${a.id}) instead of color(${r}).`),r.startsWith(`--`)&&!a.id.startsWith(`--`)&&mf.warn(`${o.name} is a standard space and supported in the CSS spec. Use color(${a.id}) instead of prefixed color(${r}).`)}else a=N.findFormat({name:t,type:`function`}),o=a.space;i&&Object.assign(i,{format:a,formatId:a.name,types:c,commas:n.parsed.commas});let l=1;n.parsed.lastAlpha&&(l=n.parsed.args.pop(),i&&(i.alphaType=c.pop()));let u=a.coords.length;if(s.length!==u)throw TypeError(`Expected ${u} coordinates for ${o.id} in ${n.str}), got ${s.length}`);s=a.coerceCoords(s,c),r={spaceId:o.id,coords:s,alpha:l}}else spaceloop:for(let e of N.all)for(let t in e.formats){let a=e.formats[t];if(a.type!==`custom`||a.test&&!a.test(n.str))continue;let o=e.getFormat(a),s=o.parse(n.str);if(s){i&&Object.assign(i,{format:o,formatId:t}),r=s;break spaceloop}}if(!r)throw TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return r.alpha=$d(r.alpha)?r.alpha:r.alpha===void 0?1:of(0,r.alpha,1),r}var Sf={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},Cf={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(Sf).join(`|`)})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function wf(e){let t={},n=e.match(Cf.unitValue)?.[0],r=t.raw=e;return n?(t.type=n===`%`?`<percentage>`:`<angle>`,t.unit=n,t.unitless=Number(r.slice(0,-n.length)),r=t.unitless*Sf[n]):Cf.number.test(r)?(r=Number(r),t.type=`<number>`):r===`none`?r=null:r===`NaN`||r===`calc(NaN)`?(r=NaN,t.type=`<number>`):t.type=`<ident>`,{value:r,meta:t}}function Tf(e){if(!e)return;e=e.trim();let t=e.match(Cf.function);if(t){let e=[],n=[],r=!1,i=t[1].toLowerCase(),a=t[2].replace(Cf.singleArgument,(t,a)=>{let{value:o,meta:s}=wf(a);return(t.startsWith(`/`)||i!==`color`&&e.length===3)&&(r=!0),e.push(o),n.push(s),``});return{name:i,args:e,argMeta:n,lastAlpha:r,commas:a.includes(`,`),rawName:t[1],rawArgs:t[2]}}}function Ef(e,t){if(Array.isArray(e))return e.map(e=>Ef(e,t));if(!e)throw TypeError(`Empty color reference`);Xd(e)&&(e=xf(e,t));let n=e.space||e.spaceId;return typeof n==`string`&&(e.space=N.get(n)),e.alpha===void 0&&(e.alpha=1),e}var Df=75e-6,N=class e{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?e.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let n=t.coords??this.base.coords;for(let e in n)`name`in n[e]||(n[e].name=e);this.coords=n,this.white=yf(t.white??this.base.white??`D65`),this.formats=t.formats??{};for(let e in this.formats){let t=this.formats[e];t.type||=`function`,t.name||=e}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace===`self`?this:e.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(e,t)=>!0),this.referred=t.referred,Object.defineProperty(this,`path`,{value:Of(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),pf.run(`colorspace-init-end`,this)}inGamut(e,{epsilon:t=Df}={}){if(!this.equals(this.gamutSpace))return e=this.to(this.gamutSpace,e),this.gamutSpace.inGamut(e,{epsilon:t});let n=Object.values(this.coords);return e.every((e,r)=>{let i=n[r];if(i.type!==`angle`&&i.range){if($d(e))return!0;let[n,r]=i.range;return(n===void 0||e>=n-t)&&(r===void 0||e<=r+t)}return!0})}get isUnbounded(){return Object.values(this.coords).every(e=>!(`range`in e))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let e in this.coords)if(this.coords[e].type===`angle`)return!0;return!1}getFormat(e){if(!e)return null;e===`default`?e=Object.values(this.formats)[0]:typeof e==`string`&&(e=this.formats[e]);let t=_f.get(e,this);return t!==e&&e.name in this.formats&&(this.formats[e.name]=t),t}equals(e){return e?this===e||this.id===e||this.id===e.id:!1}to(t,n){if(arguments.length===1){let e=Ef(t);[t,n]=[e.space,e.coords]}if(t=e.get(t),this.equals(t))return n;n=n.map(e=>$d(e)?0:e);let r=this.path,i=t.path,a,o;for(let e=0;e<r.length&&r[e].equals(i[e]);e++)a=r[e],o=e;if(!a)throw Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let e=r.length-1;e>o;e--)n=r[e].toBase(n);for(let e=o+1;e<i.length;e++)n=i[e].fromBase(n);return n}from(t,n){if(arguments.length===1){let e=Ef(t);[t,n]=[e.space,e.coords]}return t=e.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let e=[];for(let t in this.coords){let n=this.coords[t],r=n.range||n.refRange;e.push(r?.min??0)}return e}static registry={};static get all(){return[...new Set(Object.values(e.registry))]}static register(e,t){if(arguments.length===1&&(t=arguments[0],e=t.id),t=this.get(t),this.registry[e]&&this.registry[e]!==t)throw Error(`Duplicate color space registration: '${e}'`);if(this.registry[e]=t,arguments.length===1&&t.aliases)for(let e of t.aliases)this.register(e,t);return t}static get(t,...n){if(!t||df(t,this))return t;if(Zd(t)===`string`){let n=e.registry[t.toLowerCase()];if(!n)throw TypeError(`No color space found with id = "${t}"`);return n}if(n.length)return e.get(...n);throw TypeError(`${t} is not a valid color space`)}static findFormat(t,n=e.all){if(!t)return null;typeof t==`string`&&(t={name:t});for(let e of n)for(let[n,r]of Object.entries(e.formats)){r.name??=n,r.type??=`function`;let i=(!t.name||r.name===t.name)&&(!t.type||r.type===t.type);if(t.id){let e=r.ids||[r.id],n=Array.isArray(t.id)?t.id:[t.id];i&&=n.some(t=>e.includes(t))}if(i){let t=_f.get(r,e);return t!==r&&(e.formats[r.name]=t),t}}return null}static resolveCoord(t,n){let r=Zd(t),i,a;if(r===`string`?t.includes(`.`)?[i,a]=t.split(`.`):[i,a]=[,t]:Array.isArray(t)?[i,a]=t:(i=t.space,a=t.coordId),i=e.get(i),i||=n,!i)throw TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(r=Zd(a),r===`number`||r===`string`&&a>=0){let e=Object.entries(i.coords)[a];if(e)return{space:i,id:e[0],index:a,...e[1]}}i=e.get(i);let o=a.toLowerCase(),s=0;for(let e in i.coords){let t=i.coords[e];if(e.toLowerCase()===o||t.name?.toLowerCase()===o)return{space:i,id:e,index:s,...t};s++}throw TypeError(`No "${a}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(`, `)}`)}static DEFAULT_FORMAT={type:`functions`,name:`color`}};function Of(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}var kf=new N({id:`xyz-d65`,name:`XYZ D65`,coords:{x:{refRange:[0,1],name:`X`},y:{refRange:[0,1],name:`Y`},z:{refRange:[0,1],name:`Z`}},white:`D65`,formats:{color:{ids:[`xyz-d65`,`xyz`]}},aliases:[`xyz`]}),Af=class extends N{constructor(e){e.coords||={r:{range:[0,1],name:`Red`},g:{range:[0,1],name:`Green`},b:{range:[0,1],name:`Blue`}},e.base||=kf,e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??=t=>{let n=Yd(t,e.toXYZ_M);return this.white!==this.base.white&&(n=bf(this.white,this.base.white,n)),n},e.fromBase??=t=>(t=bf(this.base.white,this.white,t),Yd(t,e.fromXYZ_M))),e.referred??=`display`,super(e)}};function jf(e,t={}){if(Array.isArray(e))return e.map(e=>jf(e,t));let{cssProperty:n=`background-color`,element:r,...i}=t,a=null;try{return Ef(e,i)}catch(e){a=e}let{CSS:o,getComputedStyle:s}=globalThis;if(Xd(e)&&r&&o&&s&&o.supports(n,e)){let t=r.style[n];e!==t&&(r.style[n]=e);let o=s(r).getPropertyValue(n);if(e!==t&&(r.style[n]=t),o!==e)try{return Ef(o,i)}catch(e){a=e}else a={message:`Color value is a valid CSS color, but it could not be resolved :(`}}return t.errorMeta&&(t.errorMeta.error=a),null}function Mf(e,t){e=Ef(e);let n=N.get(t,t?.space),r=t?.precision,i;return i=!n||e.space.equals(n)?e.coords.slice():n.from(e),r===void 0?i:i.map(e=>tf(e,r))}function Nf(e,t){if(e=Ef(e),t===`alpha`)return e.alpha??1;let{space:n,index:r}=N.resolveCoord(t,e.space);return Mf(e,n)[r]}function Pf(e,t,n,r){return e=Ef(e),Array.isArray(t)&&([t,n,r]=[e.space,t,n]),t=N.get(t),e.coords=t===e.space?n.slice():t.to(e.space,n),r!==void 0&&(e.alpha=r),e}Pf.returns=`color`;function Ff(e,t,n){if(e=Ef(e),arguments.length===2&&Zd(arguments[1])===`object`){let t=arguments[1];for(let n in t)Ff(e,n,t[n])}else if(typeof n==`function`&&(n=n(Nf(e,t))),t===`alpha`)e.alpha=n;else{let{space:r,index:i}=N.resolveCoord(t,e.space),a=Mf(e,r);a[i]=n,Pf(e,r,a)}return e}Ff.returns=`color`;var If=new N({id:`xyz-d50`,name:`XYZ D50`,white:`D50`,base:kf,fromBase:e=>bf(kf.white,`D50`,e),toBase:e=>bf(`D50`,kf.white,e)}),Lf=216/24389,Rf=24/116,zf=24389/27,Bf=vf.D50,Vf=new N({id:`lab`,name:`Lab`,coords:{l:{refRange:[0,100],name:`Lightness`},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Bf,base:If,fromBase(e){let t=e.map((e,t)=>e/Bf[t]).map(e=>e>Lf?Math.cbrt(e):(zf*e+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let[t,n,r]=e,i=[];return i[1]=(t+16)/116,i[0]=n/500+i[1],i[2]=i[1]-r/200,[i[0]>Rf?i[0]**3:(116*i[0]-16)/zf,e[0]>8?((e[0]+16)/116)**3:e[0]/zf,i[2]>Rf?i[2]**3:(116*i[2]-16)/zf].map((e,t)=>e*Bf[t])},formats:{lab:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}});function Hf(e){return typeof e==`number`?(e%360+360)%360:e}function Uf(e,t){let[n,r]=t,i=$d(n),a=$d(r);if(i&&a)return[n,r];if(i?n=r:a&&(r=n),e===`raw`)return t;n=Hf(n),r=Hf(r);let o=r-n;return e===`increasing`?o<0&&(r+=360):e===`decreasing`?o>0&&(n+=360):e===`longer`?-180<o&&o<180&&(o>0?n+=360:r+=360):e===`shorter`&&(o>180?n+=360:o<-180&&(r+=360)),[n,r]}var Wf=new N({id:`lch`,name:`LCH`,coords:{l:{refRange:[0,100],name:`Lightness`},c:{refRange:[0,150],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},base:Vf,fromBase(e){if(this.ε===void 0){let e=Object.values(this.base.coords)[1].refRange;this.ε=(e[1]-e[0])/1e5}let[t,n,r]=e,i=Math.abs(n)<this.ε&&Math.abs(r)<this.ε,a=i?null:Hf(Math.atan2(r,n)*180/Math.PI);return[t,i?0:Math.sqrt(n**2+r**2),a]},toBase(e){let[t,n,r]=e,i=null,a=null;return $d(r)||(n=n<0?0:n,i=n*Math.cos(r*Math.PI/180),a=n*Math.sin(r*Math.PI/180)),[t,i,a]},formats:{lch:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <angle>`]}}}),Gf=25**7,Kf=Math.PI,qf=180/Kf,Jf=Kf/180;function Yf(e){let t=e*e;return t*t*t*e}function Xf(e,t,{kL:n=1,kC:r=1,kH:i=1}={}){[e,t]=Ef([e,t]);let[a,o,s]=Vf.from(e),c=Wf.from(Vf,[a,o,s])[1],[l,u,d]=Vf.from(t),f=Wf.from(Vf,[l,u,d])[1];c<0&&(c=0),f<0&&(f=0);let p=Yf((c+f)/2),m=.5*(1-Math.sqrt(p/(p+Gf))),h=(1+m)*o,g=(1+m)*u,ee=Math.sqrt(h**2+s**2),te=Math.sqrt(g**2+d**2),ne=h===0&&s===0?0:Math.atan2(s,h),re=g===0&&d===0?0:Math.atan2(d,g);ne<0&&(ne+=2*Kf),re<0&&(re+=2*Kf),ne*=qf,re*=qf;let ie=l-a,ae=te-ee,oe=re-ne,se=ne+re,ce=Math.abs(oe),le;ee*te===0?le=0:ce<=180?le=oe:oe>180?le=oe-360:oe<-180?le=oe+360:mf.warn(`the unthinkable has happened`);let ue=2*Math.sqrt(te*ee)*Math.sin(le*Jf/2),de=(a+l)/2,fe=(ee+te)/2,pe=Yf(fe),me;me=ee*te===0?se:ce<=180?se/2:se<360?(se+360)/2:(se-360)/2;let he=(de-50)**2,ge=1+.015*he/Math.sqrt(20+he),_e=1+.045*fe,_=1;_-=.17*Math.cos((me-30)*Jf),_+=.24*Math.cos(2*me*Jf),_+=.32*Math.cos((3*me+6)*Jf),_-=.2*Math.cos((4*me-63)*Jf);let v=1+.015*fe*_,y=30*Math.exp(-1*((me-275)/25)**2),ve=2*Math.sqrt(pe/(pe+Gf)),ye=-1*Math.sin(2*y*Jf)*ve,b=(ie/(n*ge))**2;return b+=(ae/(r*_e))**2,b+=(ue/(i*v))**2,b+=ye*(ae/(r*_e))*(ue/(i*v)),Math.sqrt(b)}var Zf=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Qf=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],$f=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],ep=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],tp=new N({id:`oklab`,name:`Oklab`,coords:{l:{refRange:[0,1],name:`Lightness`},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:`D65`,base:kf,fromBase(e){let t=Yd(e,Zf);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),Yd(t,$f,t)},toBase(e){let t=Yd(e,ep);return t[0]**=3,t[1]**=3,t[2]**=3,Yd(t,Qf,t)},formats:{oklab:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}});function np(e,t){[e,t]=Ef([e,t]);let[n,r,i]=tp.from(e),[a,o,s]=tp.from(t),c=n-a,l=r-o,u=i-s;return Math.sqrt(c**2+l**2+u**2)}var rp=75e-6;function ip(e,t,{epsilon:n=rp}={}){e=Ef(e),t||=e.space,t=N.get(t);let r=e.coords;return t!==e.space&&(r=t.from(e)),t.inGamut(r,{epsilon:n})}function ap(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function op(e,t,n=`lab`){n=N.get(n);let r=n.from(e),i=n.from(t);return Math.sqrt(r.reduce((e,t,n)=>{let r=i[n];return $d(t)||$d(r)?e:e+(r-t)**2},0))}function sp(e,t){return op(e,t,`lab`)}var cp=Math.PI/180;function lp(e,t,{l:n=2,c:r=1}={}){[e,t]=Ef([e,t]);let[i,a,o]=Vf.from(e),[,s,c]=Wf.from(Vf,[i,a,o]),[l,u,d]=Vf.from(t),f=Wf.from(Vf,[l,u,d])[1];s<0&&(s=0),f<0&&(f=0);let p=i-l,m=s-f,h=a-u,g=o-d,ee=h**2+g**2-m**2,te=.511;i>=16&&(te=.040975*i/(1+.01765*i));let ne=.0638*s/(1+.0131*s)+.638,re;$d(c)&&(c=0),re=c>=164&&c<=345?.56+Math.abs(.2*Math.cos((c+168)*cp)):.36+Math.abs(.4*Math.cos((c+35)*cp));let ie=s**4,ae=Math.sqrt(ie/(ie+1900)),oe=ne*(ae*re+1-ae),se=(p/(n*te))**2;return se+=(m/(r*ne))**2,se+=ee/oe**2,Math.sqrt(se)}var up=203,dp=new N({id:`xyz-abs-d65`,cssId:`--xyz-abs-d65`,name:`Absolute XYZ D65`,coords:{x:{refRange:[0,9504.7],name:`Xa`},y:{refRange:[0,1e4],name:`Ya`},z:{refRange:[0,10888.3],name:`Za`}},base:kf,fromBase(e){return e.map(e=>e*up)},toBase(e){return e.map(e=>e/up)}}),fp=1.15,pp=.66,mp=2610/2**14,hp=2**14/2610,gp=3424/2**12,_p=2413/2**7,vp=2392/2**7,yp=1.7*2523/2**5,bp=2**5/(1.7*2523),xp=-.56,Sp=16295499532821565e-27,Cp=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],wp=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Tp=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Ep=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]],Dp=new N({id:`jzazbz`,name:`Jzazbz`,coords:{jz:{refRange:[0,1],name:`Jz`},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:dp,fromBase(e){let[t,n,r]=e,[i,a,o]=Yd(Yd([fp*t-(fp-1)*r,pp*n-(pp-1)*t,r],Cp).map(function(e){return cf((gp+_p*cf(e/1e4,mp))/(1+vp*cf(e/1e4,mp)),yp)}),Tp);return[(1+xp)*i/(1+xp*i)-Sp,a,o]},toBase(e){let[t,n,r]=e,[i,a,o]=Yd(Yd([(t+Sp)/(1+xp-xp*(t+Sp)),n,r],Ep).map(function(e){return 1e4*cf((gp-cf(e,bp))/(vp*cf(e,bp)-_p),hp)}),wp),s=(i+(fp-1)*o)/fp;return[s,(a+(pp-1)*s)/pp,o]},formats:{jzazbz:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}}),Op=new N({id:`jzczhz`,name:`JzCzHz`,coords:{jz:{refRange:[0,1],name:`Jz`},cz:{refRange:[0,.26],name:`Chroma`},hz:{refRange:[0,360],type:`angle`,name:`Hue`}},base:Dp,fromBase:Wf.fromBase,toBase:Wf.toBase,formats:{jzczhz:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <angle>`]}}});function kp(e,t){[e,t]=Ef([e,t]);let[n,r,i]=Op.from(e),[a,o,s]=Op.from(t),c=n-a,l=r-o;$d(i)&&$d(s)?(i=0,s=0):$d(i)?i=s:$d(s)&&(s=i);let u=i-s,d=2*Math.sqrt(r*o)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(c**2+l**2+d**2)}var Ap=3424/4096,jp=2413/128,Mp=2392/128,Np=2610/16384,Pp=2523/32,Fp=16384/2610,Ip=32/2523,Lp=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],Rp=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],zp=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],Bp=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]],Vp=new N({id:`ictcp`,name:`ICTCP`,coords:{i:{refRange:[0,1],name:`I`},ct:{refRange:[-.5,.5],name:`CT`},cp:{refRange:[-.5,.5],name:`CP`}},base:dp,fromBase(e){return Hp(Yd(e,Lp))},toBase(e){return Yd(Up(e),Bp)},formats:{ictcp:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}});function Hp(e){return Yd(e.map(function(e){return((Ap+jp*(e/1e4)**Np)/(1+Mp*(e/1e4)**Np))**Pp}),Rp)}function Up(e){return Yd(e,zp).map(function(e){return 1e4*(Math.max(e**Ip-Ap,0)/(jp-Mp*e**Ip))**Fp})}function Wp(e,t){[e,t]=Ef([e,t]);let[n,r,i]=Vp.from(e),[a,o,s]=Vp.from(t);return 720*Math.sqrt((n-a)**2+.25*(r-o)**2+(i-s)**2)}function Gp(e,t){[e,t]=Ef([e,t]);let[n,r,i]=tp.from(e),[a,o,s]=tp.from(t),c=n-a,l=2*(r-o),u=2*(i-s);return Math.sqrt(c**2+l**2+u**2)}var Kp=vf.D65,qp=.42,Jp=1/qp,Yp=2*Math.PI,Xp=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],Zp=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],Qp=[[460,451,288],[460,-891,-261],[460,-220,-6300]],$p={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},em={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},tm=180/Math.PI,nm=Math.PI/180;function rm(e,t){return e.map(e=>{let n=cf(t*Math.abs(e)*.01,qp);return 400*sf(n,e)/(n+27.13)})}function im(e,t){let n=100/t*27.13**Jp;return e.map(e=>{let t=Math.abs(e);return sf(n*cf(t/(400-t),Jp),e)})}function am(e){let t=Hf(e);t<=em.h[0]&&(t+=360);let n=uf(em.h,t)-1,[r,i]=em.h.slice(n,n+2),[a,o]=em.e.slice(n,n+2),s=em.H[n],c=(t-r)/a;return s+100*c/(c+(i-t)/o)}function om(e){let t=(e%400+400)%400,n=Math.floor(.01*t);t%=100;let[r,i]=em.h.slice(n,n+2),[a,o]=em.e.slice(n,n+2);return Hf((t*(o*r-a*i)-100*r*o)/(t*(o-a)-100*o))}function sm(e,t,n,r,i){let a={};a.discounting=i,a.refWhite=e,a.surround=r;let o=e.map(e=>e*100);a.la=t,a.yb=n;let s=o[1],c=Yd(o,Xp),l=$p[a.surround],u=l[0];a.c=l[1],a.nc=l[2];let d=(1/(5*a.la+1))**4;a.fl=d*a.la+.1*(1-d)*(1-d)*Math.cbrt(5*a.la),a.flRoot=a.fl**.25,a.n=a.yb/s,a.z=1.48+Math.sqrt(a.n),a.nbb=.725*a.n**-.2,a.ncb=a.nbb;let f=Math.max(Math.min(u*(1-1/3.6*Math.exp((-a.la-42)/92)),1),0);a.dRgb=c.map(e=>nf(1,s/e,f)),a.dRgbInv=a.dRgb.map(e=>1/e);let p=rm(c.map((e,t)=>e*a.dRgb[t]),a.fl);return a.aW=a.nbb*(2*p[0]+p[1]+.05*p[2]),a}var cm=sm(Kp,64/Math.PI*.2,20,`average`,!1);function lm(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw Error(`Conversion requires one and only one: 'J' or 'Q'`);if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw Error(`Conversion requires one and only one: 'C', 'M' or 's'`);if(!(e.h!==void 0^e.H!==void 0))throw Error(`Conversion requires one and only one: 'h' or 'H'`);if(e.J===0||e.Q===0)return[0,0,0];let n=0;n=e.h===void 0?om(e.H)*nm:Hf(e.h)*nm;let r=Math.cos(n),i=Math.sin(n),a=0;e.J===void 0?e.Q!==void 0&&(a=.25*t.c*e.Q/((t.aW+4)*t.flRoot)):a=cf(e.J,1/2)*.1;let o=0;e.C===void 0?e.M===void 0?e.s!==void 0&&(o=4e-4*e.s**2*(t.aW+4)/t.c):o=e.M/t.flRoot/a:o=e.C/a;let s=cf(o*(1.64-.29**t.n)**-.73,10/9),c=.25*(Math.cos(n+2)+3.8),l=t.aW*cf(a,2/t.c/t.z),u=5e4/13*t.nc*t.ncb*c,d=l/t.nbb,f=23*(d+.305)*lf(s,23*u+s*(11*r+108*i));return Yd(im(Yd([d,f*r,f*i],Qp).map(e=>e*1/1403),t.fl).map((e,n)=>e*t.dRgbInv[n]),Zp).map(e=>e/100)}function um(e,t){let n=rm(Yd(e.map(e=>e*100),Xp).map((e,n)=>e*t.dRgb[n]),t.fl),r=n[0]+(-12*n[1]+n[2])/11,i=(n[0]+n[1]-2*n[2])/9,a=(Math.atan2(i,r)%Yp+Yp)%Yp,o=.25*(Math.cos(a+2)+3.8),s=cf(5e4/13*t.nc*t.ncb*lf(o*Math.sqrt(r**2+i**2),n[0]+n[1]+1.05*n[2]+.305),.9)*(1.64-.29**t.n)**.73,c=cf(t.nbb*(2*n[0]+n[1]+.05*n[2])/t.aW,.5*t.c*t.z),l=100*cf(c,2),u=4/t.c*c*(t.aW+4)*t.flRoot,d=s*c,f=d*t.flRoot,p=Hf(a*tm),m=am(p);return{J:l,C:d,h:p,s:50*cf(t.c*s/(t.aW+4),1/2),Q:u,M:f,H:m}}var dm=new N({id:`cam16-jmh`,cssId:`--cam16-jmh`,name:`CAM16-JMh`,coords:{j:{refRange:[0,100],name:`J`},m:{refRange:[0,105],name:`Colorfulness`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},base:kf,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=um(e,cm),n=Math.abs(t.M)<this.ε;return[t.J,n?0:t.M,n?null:t.h]},toBase(e){return lm({J:e[0],M:e[1],h:e[2]},cm)}}),fm=vf.D65,pm=216/24389,mm=24389/27;function hm(e){return 116*(e>pm?Math.cbrt(e):(mm*e+16)/116)-16}function gm(e){return e>8?((e+16)/116)**3:e/mm}function _m(e,t){let[n,r,i]=e,a=[],o=0;if(i===0)return[0,0,0];let s=gm(i);o=i>0?.00379058511492914*i**2+.608983189401032*i+.9155088574762233:9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;let c=0,l=1/0;for(;c<=15;){a=lm({J:o,C:r,h:n},t);let e=Math.abs(a[1]-s);if(e<l){if(e<=2e-12)return a;l=e}o-=(a[1]-s)*o/(2*a[1]),c+=1}return lm({J:o,C:r,h:n},t)}function vm(e,t){let n=hm(e[1]);if(n===0)return[0,0,0];let r=um(e,ym);return[Hf(r.h),r.C,n]}var ym=sm(fm,200/Math.PI*gm(50),gm(50)*100,`average`,!1),bm=new N({id:`hct`,name:`HCT`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},c:{refRange:[0,145],name:`Colorfulness`},t:{refRange:[0,100],name:`Tone`}},base:kf,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=vm(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return _m(e,ym)},formats:{color:{id:`--hct`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),xm=Math.PI/180,Sm=[1,.007,.0228];function Cm(e){e[1]<0&&(e=bm.fromBase(bm.toBase(e)));let t=Math.log(Math.max(1+Sm[2]*e[1]*ym.flRoot,1))/Sm[2],n=e[0]*xm,r=t*Math.cos(n),i=t*Math.sin(n);return[e[2],r,i]}function wm(e,t){[e,t]=Ef([e,t]);let[n,r,i]=Cm(bm.from(e)),[a,o,s]=Cm(bm.from(t));return Math.sqrt((n-a)**2+(r-o)**2+(i-s)**2)}var Tm={deltaE76:sp,deltaECMC:lp,deltaE2000:Xf,deltaEJz:kp,deltaEITP:Wp,deltaEOK:np,deltaEOK2:Gp,deltaEHCT:wm};function Em(e){return Math.max(parseFloat(`1e${(e?Math.floor(Math.log10(Math.abs(e))):0)-2}`),1e-6)}var Dm={hct:{method:`hct.c`,jnd:2,deltaEMethod:`hct`,blackWhiteClamp:{}},"hct-tonal":{method:`hct.c`,jnd:0,deltaEMethod:`hct`,blackWhiteClamp:{channel:`hct.t`,min:0,max:100}}};function Om(e,{method:t=mf.gamut_mapping,space:n=void 0,deltaEMethod:r=``,jnd:i=2,blackWhiteClamp:a=void 0}={}){if(e=Ef(e),Xd(arguments[1])?n=arguments[1]:n||=e.space,n=N.get(n),ip(e,n,{epsilon:0}))return e;let o;if(t===`css`)o=Am(e,{space:n});else{if(t!==`clip`&&!ip(e,n)){Object.prototype.hasOwnProperty.call(Dm,t)&&({method:t,jnd:i,deltaEMethod:r,blackWhiteClamp:a}=Dm[t]);let s=Xf;if(r!==``){for(let e in Tm)if(`deltae`+r.toLowerCase()===e.toLowerCase()){s=Tm[e];break}}i===0&&(i=1e-16);let c=Om(jm(e,n),{method:`clip`,space:n});if(s(e,c)>i){if(a&&Object.keys(a).length===3){let t=N.resolveCoord(a.channel),n=Nf(jm(e,t.space),t.id);if($d(n)&&(n=0),n>=a.max)return jm({space:`xyz-d65`,coords:vf.D65},e.space);if(n<=a.min)return jm({space:`xyz-d65`,coords:[0,0,0]},e.space)}let r=N.resolveCoord(t),c=r.space,l=r.id,u=jm(e,c);u.coords.forEach((e,t)=>{$d(e)&&(u.coords[t]=0)});let d=(r.range||r.refRange)[0],f=Em(i),p=d,m=Nf(u,l);for(;m-p>f;){let e=ap(u);e=Om(e,{space:n,method:`clip`}),s(u,e)-i<f?p=Nf(u,l):m=Nf(u,l),Ff(u,l,(p+m)/2)}o=jm(u,n)}else o=c}else o=jm(e,n);if(t===`clip`||!ip(o,n,{epsilon:0})){let e=Object.values(n.coords).map(e=>e.range||[]);o.coords=o.coords.map((t,n)=>{let[r,i]=e[n];return r!==void 0&&(t=Math.max(r,t)),i!==void 0&&(t=Math.min(t,i)),t})}}return n!==e.space&&(o=jm(o,e.space)),e.coords=o.coords,e}Om.returns=`color`;var km={WHITE:{space:tp,coords:[1,0,0],alpha:1},BLACK:{space:tp,coords:[0,0,0],alpha:1}};function Am(e,{space:t}={}){let n=.02,r=1e-4;e=Ef(e),t||=e.space,t=N.get(t);let i=N.get(`oklch`);if(t.isUnbounded)return jm(e,t);let a=jm(e,i),o=a.coords[0];if(o>=1){let n=jm(km.WHITE,t);return n.alpha=e.alpha,jm(n,t)}if(o<=0){let n=jm(km.BLACK,t);return n.alpha=e.alpha,jm(n,t)}if(ip(a,t,{epsilon:0}))return jm(a,t);function s(e){let n=jm(e,t),r=Object.values(t.coords);return n.coords=n.coords.map((e,t)=>{if(`range`in r[t]){let[n,i]=r[t].range;return of(n,e,i)}return e}),n}let c=0,l=a.coords[1],u=!0,d=ap(a),f=s(d),p=np(f,d);if(p<n)return f;for(;l-c>r;){let e=(c+l)/2;if(d.coords[1]=e,u&&ip(d,t,{epsilon:0}))c=e;else if(f=s(d),p=np(f,d),p<n){if(n-p<r)break;u=!1,c=e}else l=e}return f}function jm(e,t,{inGamut:n}={}){e=Ef(e),t=N.get(t);let r=t.from(e),i={space:t,coords:r,alpha:e.alpha};return n&&(i=Om(i,n===!0?void 0:n)),i}jm.returns=`color`;function Mm(e,t={}){let{precision:n=mf.precision,format:r,inGamut:i=!0,coords:a,alpha:o,commas:s}=t,c,l=Ef(e),u=r,d=l.parseMeta;d&&!r&&(d.format.canSerialize()&&(r=d.format,u=d.formatId),a??=d.types,o??=d.alphaType,s??=d.commas),u&&(r=l.space.getFormat(r)??N.findFormat(u)),r||(r=l.space.getFormat(`default`)??N.DEFAULT_FORMAT,u=r.name),r&&r.space&&r.space!==l.space&&(l=jm(l,r.space));let f=l.coords.slice();if(i||=r.toGamut,i&&!ip(l)&&(f=Om(ap(l),i===!0?void 0:i).coords),r.type===`custom`)if(r.serialize)c=r.serialize(f,l.alpha,t);else throw TypeError(`format ${u} can only be used to parse colors, not for serialization`);else{let e=r.name||`color`,t=r.serializeCoords(f,n,a);if(e===`color`){let e=r.id||r.ids?.[0]||l.space.cssId||l.space.id;t.unshift(e)}let i=l.alpha;o!==void 0&&typeof o!=`object`&&(o=typeof o==`string`?{type:o}:{include:o});let u=o?.type??`<number>`,d=o?.include===!0||r.alpha===!0||o?.include!==!1&&r.alpha!==!1&&i<1,p=``;if(s??=r.commas,d){if(n!==null){let e;u===`<percentage>`&&(e=`%`,i*=100),i=Qd(i,{precision:n,unit:e})}p=`${s?`,`:` /`} ${i}`}c=`${e}(${t.join(s?`, `:` `)}${p})`}return c}var Nm=new Af({id:`rec2020-linear`,cssId:`--rec2020-linear`,name:`Linear REC.2020`,white:`D65`,toXYZ_M:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ_M:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]]}),Pm=new Af({id:`rec2020`,name:`REC.2020`,base:Nm,toBase(e){return e.map(function(e){let t=e<0?-1:1;return t*(e*t)**2.4})},fromBase(e){return e.map(function(e){let t=e<0?-1:1;return t*(e*t)**(1/2.4)})}}),Fm=new Af({id:`p3-linear`,cssId:`display-p3-linear`,name:`Linear P3`,white:`D65`,toXYZ_M:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ_M:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]}),Im=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Lm=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],Rm=new Af({id:`srgb-linear`,name:`Linear sRGB`,white:`D65`,toXYZ_M:Im,fromXYZ_M:Lm}),zm={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},Bm=[,,,].fill(`<percentage> | <number>[0, 255]`),Vm=[,,,].fill(`<number>[0, 255]`),Hm=new Af({id:`srgb`,name:`sRGB`,base:Rm,fromBase:e=>e.map(e=>{let t=e<0?-1:1,n=e*t;return n>.0031308?t*(1.055*n**(1/2.4)-.055):12.92*e}),toBase:e=>e.map(e=>{let t=e<0?-1:1,n=e*t;return n<=.04045?e/12.92:t*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Bm},rgb_number:{name:`rgb`,commas:!0,coords:Vm,alpha:!1},color:{},rgba:{coords:Bm,commas:!0,alpha:!0},rgba_number:{name:`rgba`,commas:!0,coords:Vm},hex:{type:`custom`,toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,`$&$&`));let t=[];return e.replace(/[a-f0-9]{2}/gi,e=>{t.push(parseInt(e,16)/255)}),{spaceId:`srgb`,coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0,alpha:r}={})=>{(r!==!1&&t<1||r===!0)&&e.push(t),e=e.map(e=>Math.round(e*255));let i=n&&e.every(e=>e%17==0);return`#`+e.map(e=>i?(e/17).toString(16):e.toString(16).padStart(2,`0`)).join(``)}},keyword:{type:`custom`,test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:`srgb`,coords:null,alpha:1};if(e===`transparent`?(t.coords=zm.black,t.alpha=0):t.coords=zm[e],t.coords)return t}}}}),Um=new Af({id:`p3`,cssId:`display-p3`,name:`P3`,base:Fm,fromBase:Hm.fromBase,toBase:Hm.toBase});mf.display_space=Hm;var Wm;if(typeof CSS<`u`&&CSS.supports)for(let e of[Vf,Pm,Um]){let t=Mm({space:e,coords:e.getMinCoords(),alpha:1});if(CSS.supports(`color`,t)){mf.display_space=e;break}}function Gm(e,{space:t=mf.display_space,...n}={}){e=Ef(e);let r=Mm(e,n);if(typeof CSS>`u`||CSS.supports(`color`,r)||!mf.display_space)r=new String(r),r.color=e;else{let i=e;if((e.coords.some($d)||$d(e.alpha))&&!(Wm??=CSS.supports(`color`,`hsl(none 50% 50%)`))&&(i=ap(e),i.coords=i.coords.map(ef),i.alpha=ef(i.alpha),r=Mm(i,n),CSS.supports(`color`,r)))return r=new String(r),r.color=i,r;i=jm(i,t),r=new String(Mm(i,n)),r.color=i}return r}function Km(e,t,{space:n,hue:r=`shorter`}={}){e=Ef(e),n||=e.space,n=N.get(n);let i=Object.values(n.coords);[e,t]=[e,t].map(e=>jm(e,n));let[a,o]=[e,t].map(e=>e.coords),s=a.map((e,t)=>{let n=i[t],a=o[t];return n.type===`angle`&&([e,a]=Uf(r,[e,a])),qm(e,a)}),c=qm(e.alpha,t.alpha);return{space:n,coords:s,alpha:c}}function qm(e,t){return $d(e)||$d(t)?e===t?null:0:e-t}function Jm(e,t){return e=Ef(e),t=Ef(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((e,n)=>e===t.coords[n])}function Ym(e){return Nf(e,[kf,`y`])}function Xm(e,t){Ff(e,[kf,`y`],t)}function Zm(e){Object.defineProperty(e.prototype,`luminance`,{get(){return Ym(this)},set(e){Xm(this,e)}})}var Qm=Object.freeze({__proto__:null,getLuminance:Ym,register:Zm,setLuminance:Xm});function $m(e,t){e=Ef(e),t=Ef(t);let n=Math.max(Ym(e),0),r=Math.max(Ym(t),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}var eh=.56,th=.57,nh=.62,rh=.65,ih=.022,ah=1.414,oh=.1,sh=5e-4,ch=1.14,lh=.027,uh=1.14;function dh(e){return e>=ih?e:e+(ih-e)**ah}function fh(e){return(e<0?-1:1)*Math.abs(e)**2.4}function ph(e,t){t=Ef(t),e=Ef(e);let n,r,i,a,o,s;t=jm(t,`srgb`),[a,o,s]=t.coords.map(e=>$d(e)?0:e);let c=fh(a)*.2126729+fh(o)*.7151522+fh(s)*.072175;e=jm(e,`srgb`),[a,o,s]=e.coords.map(e=>$d(e)?0:e);let l=fh(a)*.2126729+fh(o)*.7151522+fh(s)*.072175,u=dh(c),d=dh(l),f=d>u;return Math.abs(d-u)<sh?r=0:f?(n=d**eh-u**th,r=n*ch):(n=d**rh-u**nh,r=n*uh),i=Math.abs(r)<oh?0:r>0?r-lh:r+lh,i*100}function mh(e,t){e=Ef(e),t=Ef(t);let n=Math.max(Ym(e),0),r=Math.max(Ym(t),0);r>n&&([n,r]=[r,n]);let i=n+r;return i===0?0:(n-r)/i}var hh=5e4;function gh(e,t){e=Ef(e),t=Ef(t);let n=Math.max(Ym(e),0),r=Math.max(Ym(t),0);return r>n&&([n,r]=[r,n]),r===0?hh:(n-r)/r}function _h(e,t){e=Ef(e),t=Ef(t);let n=Nf(e,[Vf,`l`]),r=Nf(t,[Vf,`l`]);return Math.abs(n-r)}var vh=216/24389,yh=24/116,bh=24389/27,xh=vf.D65,Sh=new N({id:`lab-d65`,name:`Lab D65`,coords:{l:{refRange:[0,100],name:`Lightness`},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:xh,base:kf,fromBase(e){let t=e.map((e,t)=>e/xh[t]).map(e=>e>vh?Math.cbrt(e):(bh*e+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>yh?t[0]**3:(116*t[0]-16)/bh,e[0]>8?((e[0]+16)/116)**3:e[0]/bh,t[2]>yh?t[2]**3:(116*t[2]-16)/bh].map((e,t)=>e*xh[t])},formats:{"lab-d65":{coords:[`<number> | <percentage>`,`<number> | <percentage>`,`<number> | <percentage>`]}}}),Ch=5**.5*.5+.5;function wh(e,t){e=Ef(e),t=Ef(t);let n=Nf(e,[Sh,`l`]),r=Nf(t,[Sh,`l`]),i=Math.abs(n**+Ch-r**+Ch)**(1/Ch)*Math.SQRT2-40;return i<7.5?0:i}var Th=Object.freeze({__proto__:null,contrastAPCA:ph,contrastDeltaPhi:wh,contrastLstar:_h,contrastMichelson:mh,contrastWCAG21:$m,contrastWeber:gh});function Eh(e,t,n){Xd(n)&&(n={algorithm:n});let{algorithm:r,...i}=n||{};if(!r){let e=Object.keys(Th).map(e=>e.replace(/^contrast/,``)).join(`, `);throw TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${e}`)}e=Ef(e),t=Ef(t);for(let n in Th)if(`contrast`+r.toLowerCase()===n.toLowerCase())return Th[n](e,t,i);throw TypeError(`Unknown contrast algorithm: ${r}`)}function Dh(e){let[t,n,r]=Mf(e,kf),i=t+15*n+3*r;return[4*t/i,9*n/i]}function Oh(e){let[t,n,r]=Mf(e,kf),i=t+n+r;return[t/i,n/i]}function kh(e){Object.defineProperty(e.prototype,`uv`,{get(){return Dh(this)}}),Object.defineProperty(e.prototype,`xy`,{get(){return Oh(this)}})}var Ah=Object.freeze({__proto__:null,register:kh,uv:Dh,xy:Oh});function jh(e,t,n={}){Xd(n)&&(n={method:n});let{method:r=mf.deltaE,...i}=n;for(let n in Tm)if(`deltae`+r.toLowerCase()===n.toLowerCase())return Tm[n](e,t,i);throw TypeError(`Unknown deltaE method: ${r}`)}function Mh(e,t=.25){return Ff(e,[N.get(`oklch`,`lch`),`l`],e=>e*(1+t))}function Nh(e,t=.25){return Ff(e,[N.get(`oklch`,`lch`),`l`],e=>e*(1-t))}Mh.returns=`color`,Nh.returns=`color`;var Ph=Object.freeze({__proto__:null,darken:Nh,lighten:Mh});function Fh(e,t,n,r={}){return[e,t]=[Ef(e),Ef(t)],Zd(n)===`object`&&([n,r]=[.5,n]),Lh(e,t,r)(n??.5)}function Ih(e,t,n={}){let r;Rh(e)&&([r,n]=[e,t],[e,t]=r.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:a,steps:o=2,maxSteps:s=1e3,...c}=n;r||=([e,t]=[Ef(e),Ef(t)],Lh(e,t,c));let l=jh(e,t),u=i>0?Math.max(o,Math.ceil(l/i)+1):o,d=[];if(s!==void 0&&(u=Math.min(u,s)),u===1)d=[{p:.5,color:r(.5)}];else{let e=1/(u-1);d=Array.from({length:u},(t,n)=>{let i=n*e;return{p:i,color:r(i)}})}if(i>0){let e=d.reduce((e,t,n)=>{if(n===0)return 0;let r=jh(t.color,d[n-1].color,a);return Math.max(e,r)},0);for(;e>i;){e=0;for(let t=1;t<d.length&&d.length<s;t++){let n=d[t-1],i=d[t],a=(i.p+n.p)/2,o=r(a);e=Math.max(e,jh(o,n.color),jh(o,i.color)),d.splice(t,0,{p:a,color:r(a)}),t++}}}return d=d.map(e=>e.color),d}function Lh(e,t,n={}){if(Rh(e)){let[n,r]=[e,t];return Lh(...n.rangeArgs.colors,{...n.rangeArgs.options,...r})}let{space:r,outputSpace:i,progression:a,premultiplied:o}=n;e=Ef(e),t=Ef(t),e=ap(e),t=ap(t);let s={colors:[e,t],options:n};if(r=r?N.get(r):N.registry[mf.interpolationSpace]||e.space,i=i?N.get(i):r,e=jm(e,r),t=jm(t,r),e=Om(e),t=Om(t),r.coords.h&&r.coords.h.type===`angle`){let i=n.hue=n.hue||`shorter`,a=[r,`h`],[o,s]=[Nf(e,a),Nf(t,a)];$d(o)&&!$d(s)?o=s:$d(s)&&!$d(o)&&(s=o),[o,s]=Uf(i,[o,s]),Ff(e,a,o),Ff(t,a,s)}return o&&(e.coords=e.coords.map(t=>t*e.alpha),t.coords=t.coords.map(e=>e*t.alpha)),Object.assign(n=>{n=a?a(n):n;let s=e.coords.map((e,r)=>{let i=t.coords[r];return nf(e,i,n)}),c=nf(e.alpha,t.alpha,n),l={space:r,coords:s,alpha:c};return o&&(l.coords=l.coords.map(e=>e/c)),i!==r&&(l=jm(l,i)),l},{rangeArgs:s})}function Rh(e){return Zd(e)===`function`&&!!e.rangeArgs}mf.interpolationSpace=`lab`;function zh(e){e.defineFunction(`mix`,Fh,{returns:`color`}),e.defineFunction(`range`,Lh,{returns:`function<color>`}),e.defineFunction(`steps`,Ih,{returns:`array<color>`})}var Bh=Object.freeze({__proto__:null,isRange:Rh,mix:Fh,range:Lh,register:zh,steps:Ih}),Vh=new N({id:`hsl`,name:`HSL`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,100],name:`Saturation`},l:{range:[0,100],name:`Lightness`}},base:Hm,fromBase:e=>{let t=Math.max(...e),n=Math.min(...e),[r,i,a]=e,[o,s,c]=[null,0,(n+t)/2],l=t-n;if(l!==0){switch(s=c===0||c===1?0:(t-c)/Math.min(c,1-c),t){case r:o=(i-a)/l+(i<a?6:0);break;case i:o=(a-r)/l+2;break;case a:o=(r-i)/l+4}o*=60}return s<0&&(o+=180,s=Math.abs(s)),o>=360&&(o-=360),[o,s*100,c*100]},toBase:e=>{let[t,n,r]=e;t%=360,t<0&&(t+=360),n/=100,r/=100;function i(e){let i=(e+t/30)%12,a=n*Math.min(r,1-r);return r-a*Math.max(-1,Math.min(i-3,9-i,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]},hsla:{coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`],commas:!0,alpha:!0}}}),Hh=new N({id:`hsv`,name:`HSV`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,100],name:`Saturation`},v:{range:[0,100],name:`Value`}},base:Hm,fromBase(e){let t=Math.max(...e),n=Math.min(...e),[r,i,a]=e,[o,s,c]=[null,0,t],l=t-n;if(l!==0){switch(t){case r:o=(i-a)/l+(i<a?6:0);break;case i:o=(a-r)/l+2;break;case a:o=(r-i)/l+4}o*=60}return c&&(s=l/c),o>=360&&(o-=360),[o,s*100,c*100]},toBase(e){let[t,n,r]=e;t%=360,t<0&&(t+=360),n/=100,r/=100;function i(e){let i=(e+t/60)%6;return r-r*n*Math.max(0,Math.min(i,4-i,1))}return[i(5),i(3),i(1)]},formats:{color:{id:`--hsv`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),Uh=new N({id:`hwb`,name:`HWB`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},w:{range:[0,100],name:`Whiteness`},b:{range:[0,100],name:`Blackness`}},base:Hh,fromBase(e){let[t,n,r]=e;return[t,r*(100-n)/100,100-r]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=n+r;if(i>=1)return[t,0,n/i*100];let a=1-r;return[t,(a===0?0:1-n/a)*100,a*100]},formats:{hwb:{coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),Wh=new Af({id:`a98rgb-linear`,cssId:`--a98-rgb-linear`,name:`Linear Adobe® 98 RGB compatible`,white:`D65`,toXYZ_M:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ_M:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]}),Gh=new Af({id:`a98rgb`,cssId:`a98-rgb`,name:`Adobe® 98 RGB compatible`,base:Wh,toBase:e=>e.map(e=>Math.abs(e)**(563/256)*Math.sign(e)),fromBase:e=>e.map(e=>Math.abs(e)**(256/563)*Math.sign(e))}),Kh=new Af({id:`prophoto-linear`,cssId:`--prophoto-rgb-linear`,name:`Linear ProPhoto`,white:`D50`,base:If,toXYZ_M:[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],fromXYZ_M:[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]]}),qh=1/512,Jh=16/512,Yh=new Af({id:`prophoto`,cssId:`prophoto-rgb`,name:`ProPhoto`,base:Kh,toBase(e){return e.map(e=>{let t=e<0?-1:1,n=e*t;return n<Jh?e/16:t*n**1.8})},fromBase(e){return e.map(e=>{let t=e<0?-1:1,n=e*t;return n>=qh?t*n**(1/1.8):16*e})}}),Xh=1.09929682680944,Zh=.018053968510807,Qh=new Af({id:`--rec2020-oetf`,name:`REC.2020_Scene_Referred`,base:Nm,referred:`scene`,toBase(e){return e.map(function(e){let t=e<0?-1:1,n=e*t;return n<Zh*4.5?e/4.5:t*((n+Xh-1)/Xh)**(1/.45)})},fromBase(e){return e.map(function(e){let t=e<0?-1:1,n=e*t;return n>=Zh?t*(Xh*n**.45-(Xh-1)):4.5*e})}}),$h=new N({id:`oklch`,name:`OkLCh`,coords:{l:{refRange:[0,1],name:`Lightness`},c:{refRange:[0,.4],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},white:`D65`,base:tp,fromBase:Wf.fromBase,toBase:Wf.toBase,formats:{oklch:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <angle>`]}}}),eg=2*Math.PI,tg=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],ng=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],rg=Number.MAX_VALUE,ig=.206,ag=.03,og=(1+ig)/(1+ag);function sg(e,t){let n=e.length;if(n!==t.length)throw Error(`Vectors of size ${n} and ${t.length} are not aligned`);let r=0;return e.forEach((e,n)=>{r+=e*t[n]}),r}function cg(e){return .5*(og*e-ig+Math.sqrt((og*e-ig)*(og*e-ig)+4*ag*og*e))}function lg(e){return(e**2+ig*e)/(og*(e+ag))}function ug(e){let[t,n]=e;return[n/t,n/(1-t)]}function dg(e,t){return[.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))))]}function fg(e,t){let n=Yd(e,ep);return n[0]**=3,n[1]**=3,n[2]**=3,Yd(n,t,n)}function pg(e,t,n,r){let i=gg(e,t,n,r),a=fg([1,i*e,i*t],n),o=cf(1/Math.max(...a),1/3);return[o,o*i]}function mg(e,t,n,r,i,a,o,s){let c;if(s===void 0&&(s=pg(e,t,a,o)),(n-i)*s[1]-(s[0]-i)*r<=0)c=s[1]*i/(r*s[0]+s[1]*(i-n));else{c=s[1]*(i-1)/(r*(s[0]-1)+s[1]*(i-n));let o=n-i,l=r,u=sg(ep[0].slice(1),[e,t]),d=sg(ep[1].slice(1),[e,t]),f=sg(ep[2].slice(1),[e,t]),p=o+l*u,m=o+l*d,h=o+l*f,g=i*(1-c)+c*n,ee=c*r,te=g+ee*u,ne=g+ee*d,re=g+ee*f,ie=te**3,ae=ne**3,oe=re**3,se=3*p*te**2,ce=3*m*ne**2,le=3*h*re**2,ue=6*p**2*te,de=6*m**2*ne,fe=6*h**2*re,pe=sg(a[0],[ie,ae,oe])-1,me=sg(a[0],[se,ce,le]),he=sg(a[0],[ue,de,fe]),ge=me/(me*me-.5*pe*he),_e=-pe*ge,_=sg(a[1],[ie,ae,oe])-1,v=sg(a[1],[se,ce,le]),y=sg(a[1],[ue,de,fe]),ve=v/(v*v-.5*_*y),ye=-_*ve,b=sg(a[2],[ie,ae,oe])-1,be=sg(a[2],[se,ce,le]),x=sg(a[2],[ue,de,fe]),xe=be/(be*be-.5*b*x),Se=-b*xe;_e=ge>=0?_e:rg,ye=ve>=0?ye:rg,Se=xe>=0?Se:rg,c+=Math.min(_e,Math.min(ye,Se))}return c}function hg(e,t,n){let[r,i,a]=e,o=pg(i,a,t,n),s=mg(i,a,r,1,r,t,n,o),c=ug(o),l=s/Math.min(r*c[0],(1-r)*c[1]),u=dg(i,a),d=r*u[0],f=(1-r)*u[1],p=.9*l*Math.sqrt(Math.sqrt(1/(1/d**4+1/f**4)));return d=r*.4,f=(1-r)*.8,[Math.sqrt(1/(1/d**2+1/f**2)),p,s]}function gg(e,t,n,r){let i,a,o,s,c,l,u,d;sg(r[0][0],[e,t])>1?([i,a,o,s,c]=r[0][1],[l,u,d]=n[0]):sg(r[1][0],[e,t])>1?([i,a,o,s,c]=r[1][1],[l,u,d]=n[1]):([i,a,o,s,c]=r[2][1],[l,u,d]=n[2]);let f=i+a*e+o*t+s*e**2+c*e*t,p=sg(ep[0].slice(1),[e,t]),m=sg(ep[1].slice(1),[e,t]),h=sg(ep[2].slice(1),[e,t]),g=1+f*p,ee=1+f*m,te=1+f*h,ne=g**3,re=ee**3,ie=te**3,ae=3*p*g**2,oe=3*m*ee**2,se=3*h*te**2,ce=6*p**2*g,le=6*m**2*ee,ue=6*h**2*te,de=l*ne+u*re+d*ie,fe=l*ae+u*oe+d*se,pe=l*ce+u*le+d*ue;return f-=de*fe/(fe**2-.5*de*pe),f}function _g(e,t,n){let[r,i,a]=e,o=lg(a),s=null,c=null;if(r=Hf(r)/360,o!==0&&o!==1&&i!==0){let e=Math.cos(eg*r),a=Math.sin(eg*r),[l,u,d]=hg([o,e,a],t,n),f=.8,p,m,h,g;i<f?(p=1.25*i,m=0,h=f*l,g=1-h/u):(p=5*(i-.8),m=u,h=.2*u**2*1.25**2/l,g=1-h/(d-u));let ee=m+p*h/(1-g*p);s=ee*e,c=ee*a}return[o,s,c]}function vg(e,t,n){let r=e[0],i=0,a=cg(r),o=Math.sqrt(e[1]**2+e[2]**2),s=.5+Math.atan2(-e[2],-e[1])/eg;if(a!==0&&a!==1&&o!==0){let[a,s,c]=hg([r,e[1]/o,e[2]/o],t,n),l=.8,u,d,f,p;o<s?(d=l*a,f=1-d/s,p=o/(d+f*o),i=p*l):(u=s,d=.2*s**2*1.25**2/a,f=1-d/(c-s),p=(o-u)/(d+f*(o-u)),i=l+.2*p)}let c=Math.abs(i)<1e-4;return c||a===0||Math.abs(1-a)<1e-7?(s=null,c||(i=0)):s=Hf(s*360),[s,i,a]}var yg=new N({id:`okhsl`,name:`Okhsl`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,1],name:`Saturation`},l:{range:[0,1],name:`Lightness`}},base:tp,gamutSpace:`self`,fromBase(e){return vg(e,tg,ng)},toBase(e){return _g(e,tg,ng)},formats:{color:{id:`--okhsl`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),bg=new N({id:`oklrab`,name:`Oklrab`,coords:{l:{refRange:[0,1],name:`Lightness`},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:`D65`,base:tp,fromBase(e){return[cg(e[0]),e[1],e[2]]},toBase(e){return[lg(e[0]),e[1],e[2]]},formats:{color:{coords:[`<percentage> | <number>`,`<number> | <percentage>[-1,1]`,`<number> | <percentage>[-1,1]`]}}}),xg=new N({id:`oklrch`,name:`Oklrch`,coords:{l:{refRange:[0,1],name:`Lightness`},c:{refRange:[0,.4],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},white:`D65`,base:bg,fromBase:Wf.fromBase,toBase:Wf.toBase,formats:{color:{coords:[`<percentage> | <number>`,`<number> | <percentage>[0,1]`,`<number> | <angle>`]}}});function Sg(e,t,n){let[r,i,a]=e;r=Hf(r)/360;let o=lg(a),s=null,c=null;if(o!==0&&i!==0){let e=Math.cos(eg*r),l=Math.sin(eg*r),[u,d]=ug(pg(e,l,t,n)),f=.5,p=1-f/u,m=1-i*f/(f+d-d*p*i),h=i*d*f/(f+d-d*p*i);o=a*m;let g=a*h,ee=lg(m),te=h*ee/m,ne=lg(o);g=g*ne/o,o=ne;let[re,ie,ae]=fg([ee,e*te,l*te],t),oe=cf(1/Math.max(Math.max(re,ie),Math.max(ae,0)),1/3);o*=oe,g*=oe,s=g*e,c=g*l}return[o,s,c]}function Cg(e,t,n){let r=e[0],i=0,a=cg(r),o=Math.sqrt(e[1]**2+e[2]**2),s=.5+Math.atan2(-e[2],-e[1])/eg;if(r!==0&&r!==1&&o!==0){let s=e[1]/o,c=e[2]/o,[l,u]=ug(pg(s,c,t,n)),d=.5,f=1-d/l,p=u/(o+r*u),m=p*r,h=p*o,g=lg(m),ee=h*g/m,[te,ne,re]=fg([g,s*ee,c*ee],t),ie=cf(1/Math.max(Math.max(te,ne),Math.max(re,0)),1/3);r/=ie,o/=ie,o=o*cg(r)/r,r=cg(r),a=r/m,i=(d+u)*h/(u*d+u*f*h)}return s=Math.abs(i)<1e-4||a===0?null:Hf(s*360),[s,i,a]}var wg=new N({id:`okhsv`,name:`Okhsv`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,1],name:`Saturation`},v:{range:[0,1],name:`Value`}},base:tp,gamutSpace:`self`,fromBase(e){return Cg(e,tg,ng)},toBase(e){return Sg(e,tg,ng)},formats:{color:{id:`--okhsv`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),Tg=vf.D65,Eg=216/24389,Dg=24389/27,[Og,kg]=Dh({space:kf,coords:Tg}),Ag=new N({id:`luv`,name:`Luv`,coords:{l:{refRange:[0,100],name:`Lightness`},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Tg,base:kf,fromBase(e){let t=[ef(e[0]),ef(e[1]),ef(e[2])],n=t[1],[r,i]=Dh({space:kf,coords:t});if(!Number.isFinite(r)||!Number.isFinite(i))return[0,0,0];let a=n<=Eg?Dg*n:116*Math.cbrt(n)-16;return[a,13*a*(r-Og),13*a*(i-kg)]},toBase(e){let[t,n,r]=e;if(t===0||$d(t))return[0,0,0];n=ef(n),r=ef(r);let i=n/(13*t)+Og,a=r/(13*t)+kg,o=t<=8?t/Dg:((t+16)/116)**3;return[o*(9*i/(4*a)),o,o*((12-3*i-20*a)/(4*a))]},formats:{color:{id:`--luv`,coords:[`<number> | <percentage>`,`<number> | <percentage>`,`<number> | <percentage>`]}}}),jg=new N({id:`lchuv`,name:`LChuv`,coords:{l:{refRange:[0,100],name:`Lightness`},c:{refRange:[0,220],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},base:Ag,fromBase:Wf.fromBase,toBase:Wf.toBase,formats:{color:{id:`--lchuv`,coords:[`<number> | <percentage>`,`<number> | <percentage>`,`<number> | <angle>`]}}}),Mg=216/24389,Ng=24389/27,Pg=Lm[0][0],Fg=Lm[0][1],Ig=Lm[0][2],Lg=Lm[1][0],Rg=Lm[1][1],zg=Lm[1][2],Bg=Lm[2][0],Vg=Lm[2][1],Hg=Lm[2][2];function Ug(e,t,n){let r=t/(Math.sin(n)-e*Math.cos(n));return r<0?1/0:r}function Wg(e){let t=(e+16)**3/1560896,n=t>Mg?t:e/Ng,r=n*(284517*Pg-94839*Ig),i=n*(838422*Ig+769860*Fg+731718*Pg),a=n*(632260*Ig-126452*Fg),o=n*(284517*Lg-94839*zg),s=n*(838422*zg+769860*Rg+731718*Lg),c=n*(632260*zg-126452*Rg),l=n*(284517*Bg-94839*Hg),u=n*(838422*Hg+769860*Vg+731718*Bg),d=n*(632260*Hg-126452*Vg);return{r0s:r/a,r0i:i*e/a,r1s:r/(a+126452),r1i:(i-769860)*e/(a+126452),g0s:o/c,g0i:s*e/c,g1s:o/(c+126452),g1i:(s-769860)*e/(c+126452),b0s:l/d,b0i:u*e/d,b1s:l/(d+126452),b1i:(u-769860)*e/(d+126452)}}function Gg(e,t){let n=t/360*Math.PI*2,r=Ug(e.r0s,e.r0i,n),i=Ug(e.r1s,e.r1i,n),a=Ug(e.g0s,e.g0i,n),o=Ug(e.g1s,e.g1i,n),s=Ug(e.b0s,e.b0i,n),c=Ug(e.b1s,e.b1i,n);return Math.min(r,i,a,o,s,c)}var Kg=new N({id:`hsluv`,name:`HSLuv`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,100],name:`Saturation`},l:{range:[0,100],name:`Lightness`}},base:jg,gamutSpace:Hm,fromBase(e){let[t,n,r]=[ef(e[0]),ef(e[1]),ef(e[2])],i;return t>99.9999999?(i=0,t=100):t<1e-8?(i=0,t=0):i=n/Gg(Wg(t),r)*100,[r,i,t]},toBase(e){let[t,n,r]=[ef(e[0]),ef(e[1]),ef(e[2])],i;return r>99.9999999?(r=100,i=0):r<1e-8?(r=0,i=0):i=Gg(Wg(r),t)/100*n,[r,i,t]},formats:{color:{id:`--hsluv`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}});Lm[0][0],Lm[0][1],Lm[0][2],Lm[1][0],Lm[1][1],Lm[1][2],Lm[2][0],Lm[2][1],Lm[2][2];function qg(e,t){return Math.abs(t)/Math.sqrt(e**2+1)}function Jg(e){let t=qg(e.r0s,e.r0i),n=qg(e.r1s,e.r1i),r=qg(e.g0s,e.g0i),i=qg(e.g1s,e.g1i),a=qg(e.b0s,e.b0i),o=qg(e.b1s,e.b1i);return Math.min(t,n,r,i,a,o)}var Yg=new N({id:`hpluv`,name:`HPLuv`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,100],name:`Saturation`},l:{range:[0,100],name:`Lightness`}},base:jg,gamutSpace:`self`,fromBase(e){let[t,n,r]=[ef(e[0]),ef(e[1]),ef(e[2])],i;return t>99.9999999?(i=0,t=100):t<1e-8?(i=0,t=0):i=n/Jg(Wg(t))*100,[r,i,t]},toBase(e){let[t,n,r]=[ef(e[0]),ef(e[1]),ef(e[2])],i;return r>99.9999999?(r=100,i=0):r<1e-8?(r=0,i=0):i=Jg(Wg(r))/100*n,[r,i,t]},formats:{color:{id:`--hpluv`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),Xg=new Af({id:`rec2100-linear`,name:`Linear REC.2100`,white:`D65`,toBase:Nm.toBase,fromBase:Nm.fromBase}),Zg=203,Qg=2610/2**14,$g=2**14/2610,e_=2523/2**5,t_=2**5/2523,n_=3424/2**12,r_=2413/2**7,i_=2392/2**7,a_=new Af({id:`rec2100pq`,cssId:`rec2100-pq`,name:`REC.2100-PQ`,base:Xg,toBase(e){return e.map(function(e){return(Math.max(e**t_-n_,0)/(r_-i_*e**t_))**$g*1e4/Zg})},fromBase(e){return e.map(function(e){let t=Math.max(e*Zg/1e4,0);return((n_+r_*t**Qg)/(1+i_*t**Qg))**e_})}}),o_=.17883277,s_=.28466892,c_=.55991073,l_=3.7743,u_=new Af({id:`rec2100hlg`,cssId:`rec2100-hlg`,name:`REC.2100-HLG`,referred:`scene`,base:Xg,toBase(e){return e.map(function(e){return e<=.5?e**2/3*l_:(Math.exp((e-c_)/o_)+s_)/12*l_})},fromBase(e){return e.map(function(e){return e/=l_,e<=1/12?cf(3*e,.5):o_*Math.log(12*e-s_)+c_})}}),d_={};pf.add(`chromatic-adaptation-start`,e=>{e.options.method&&(e.M=p_(e.W1,e.W2,e.options.method))}),pf.add(`chromatic-adaptation-end`,e=>{e.M||=p_(e.W1,e.W2,e.options.method)});function f_({id:e,toCone_M:t,fromCone_M:n}){d_[e]=arguments[0]}function p_(e,t,n=`Bradford`){let r=d_[n],[i,a,o]=qd(r.toCone_M,e),[s,c,l]=qd(r.toCone_M,t),u=qd([[s/i,0,0],[0,c/a,0],[0,0,l/o]],r.toCone_M);return qd(r.fromCone_M,u)}f_({id:`von Kries`,toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]}),f_({id:`Bradford`,toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]}),f_({id:`CAT02`,toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]}),f_({id:`CAT16`,toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]}),Object.assign(vf,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),vf.ACES=[.32168/.33767,1,.34065/.33767];var m_=new Af({id:`acescg`,cssId:`--acescg`,name:`ACEScg`,coords:{r:{range:[0,65504],name:`Red`},g:{range:[0,65504],name:`Green`},b:{range:[0,65504],name:`Blue`}},referred:`scene`,white:vf.ACES,toXYZ_M:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ_M:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]]}),h_=2**-16,g_=-.35828683,__=(Math.log2(65504)+9.72)/17.52,v_=new Af({id:`acescc`,cssId:`--acescc`,name:`ACEScc`,coords:{r:{range:[g_,__],name:`Red`},g:{range:[g_,__],name:`Green`},b:{range:[g_,__],name:`Blue`}},referred:`scene`,base:m_,toBase(e){return e.map(function(e){return e<=-.3013698630136986?(2**(e*17.52-9.72)-h_)*2:e<__?2**(e*17.52-9.72):65504})},fromBase(e){return e.map(function(e){return e<=0?(Math.log2(h_)+9.72)/17.52:e<h_?(Math.log2(h_+e*.5)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})}}),y_=Object.freeze({__proto__:null,A98RGB:Gh,A98RGB_Linear:Wh,ACEScc:v_,ACEScg:m_,CAM16_JMh:dm,HCT:bm,HPLuv:Yg,HSL:Vh,HSLuv:Kg,HSV:Hh,HWB:Uh,ICTCP:Vp,JzCzHz:Op,Jzazbz:Dp,LCH:Wf,LCHuv:jg,Lab:Vf,Lab_D65:Sh,Luv:Ag,OKLCH:$h,OKLab:tp,OKLrCH:xg,OKLrab:bg,Okhsl:yg,Okhsv:wg,P3:Um,P3_Linear:Fm,ProPhoto:Yh,ProPhoto_Linear:Kh,REC_2020:Pm,REC_2020_Linear:Nm,REC_2020_Scene_Referred:Qh,REC_2100_HLG:u_,REC_2100_Linear:Xg,REC_2100_PQ:a_,XYZ_ABS_D65:dp,XYZ_D50:If,XYZ_D65:kf,sRGB:Hm,sRGB_Linear:Rm}),b_=class e{constructor(...e){let t;if(e.length===1){let n={};typeof e[0]==`object`&&Object.getPrototypeOf(e[0]).constructor===Object&&(e[0]={...e[0]}),t=Ef(e[0],{parseMeta:n}),n.format&&(this.parseMeta=n)}let n,r,i;t?(n=t.space||t.spaceId,r=t.coords,i=t.alpha):[n,r,i]=e,Object.defineProperty(this,`space`,{value:N.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=r?r.slice():[0,0,0],this.alpha=$d(i)?i:i===void 0?1:of(0,i,1);for(let e in this.space.coords)Object.defineProperty(this,e,{get:()=>this.get(e),set:t=>this.set(e,t)})}get spaceId(){return this.space.id}clone(){return new e(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=Gm(this,...t);return n.color=new e(n.color),n}static get(t,...n){return df(t,this)?t:new e(t,...n)}static try(t,n){if(df(t,this))return t;let r=jf(t,n);return r?new e(r):null}static defineFunction(t,n,r=n){let{instance:i=!0,returns:a}=r,o=function(...t){let r=n(...t);if(a===`color`)r=e.get(r);else if(a===`function<color>`){let t=r;r=function(...n){let r=t(...n);return e.get(r)},Object.assign(r,t)}else a===`array<color>`&&(r=r.map(t=>e.get(t)));return r};t in e||(e[t]=o),i&&(e.prototype[t]=function(...e){return o(this,...e)})}static defineFunctions(t){for(let n in t)e.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(e);else for(let n in t)e.defineFunction(n,t[n])}};b_.defineFunctions({get:Nf,getAll:Mf,set:Ff,setAll:Pf,to:jm,equals:Jm,inGamut:ip,toGamut:Om,distance:op,deltas:Km,toString:Mm}),Object.assign(b_,{util:ff,hooks:pf,WHITES:vf,Space:N,spaces:N.registry,parse:xf,defaults:mf});for(let e of Object.keys(y_))N.register(y_[e]);for(let e in N.registry)x_(e,N.registry[e]);pf.add(`colorspace-init-end`,e=>{x_(e.id,e),e.aliases?.forEach(t=>{x_(t,e)})});function x_(e,t){let n=e.replace(/-/g,`_`);Object.defineProperty(b_.prototype,n,{get(){let n=this.getAll(e);if(typeof Proxy>`u`)return n;let r=new Proxy(n,{has:(e,n)=>{try{return N.resolveCoord([t,n]),!0}catch{}return Reflect.has(e,n)},get:(e,n,i)=>{if(n&&typeof n!=`symbol`&&!(n in e)&&n in r){let{index:r}=N.resolveCoord([t,n]);if(r>=0)return e[r]}return Reflect.get(e,n,i)},set:(n,r,i,a)=>{if(r&&typeof r!=`symbol`&&!(r in n)||Number(r)>=0){let{index:a}=N.resolveCoord([t,r]);if(a>=0)return n[a]=i,this.setAll(e,n),!0}return Reflect.set(n,r,i,a)}});return r},set(t){this.setAll(e,t)},configurable:!0,enumerable:!0})}b_.extend(Tm),b_.extend({deltaE:jh}),Object.assign(b_,{deltaEMethods:Tm}),b_.extend(Ph),b_.extend({contrast:Eh}),b_.extend(Ah),b_.extend(Qm),b_.extend(Bh),b_.extend(Th);var S_=Symbol(`no update`);function C_(e){return e!==S_}var w_=class extends Hl()(`observable-value-update`){},T_=class extends Hl()(`observable-value-resolve`){},E_=class extends Hl()(`observable-value-error`){},D_=class extends Ul(`observable-destroy`){},O_=class extends Ul(`observable-callback-call`){},k_=class extends Hl()(`observable-params-update`){};Hl()(`observable-interval-run`),Hl()(`observable-interval-skip`),Hl()(`observable-interval-rate-limited`);var A_=class{listenTarget=new Gl;value;equalityCheck;listenerMap=new WeakMap;dispatch(...e){return this.listenTarget.dispatch(...e)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...e){let t=e[0];if(t===S_)return!1;if(!(e.length===2?e[1]:this.equalityCheck)?.(this.value,t)){let e=this.value;return this.value=t,this.listenTarget.dispatch(new w_({detail:[t,e]})),!0}return!1}listen(e,t){let n=e=>t(...e.detail);return this.listenerMap.set(t,n),e&&t(this.value,void 0),this.listenTarget.listen(w_,n)}removeListener(e){let t=this.listenerMap.get(e);return!!t&&this.listenTarget.removeListener(w_,t)}destroy(){this.listenTarget.dispatch(new D_),this.listenTarget.destroy()}listenToEvent(e,t,n){return this.listenTarget.listen(e,t,n)}};function j_(e,t){return Sc(e,t,(e,t)=>j.isFunction(e)&&j.isFunction(t)?!0:j.strictEquals(e,t))}var M_;(function(e){e.Rejected=`rejected`,e.Waiting=`waiting`,e.Resolved=`resolved`})(M_||={});var N_=class extends A_{equalityCheck;waitingForValueDeferredPromise=new Pe;lastSetPromise;lastSetId=Zc();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(e={}){super(),this.equalityCheck=`equalityCheck`in e?e.equalityCheck:j_,`defaultValue`in e&&this.setValue(e.defaultValue)}setPromise(e){if(e===this.lastSetPromise)return!1;let t=Zc();return this.lastSetId=t,this.lastSetPromise=e,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new Pe,super.setValue(this.waitingForValueDeferredPromise.promise,j.strictEquals)),e.then(n=>{this.lastSetPromise!==e||this.lastSetId!==t||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==e||this.lastSetId!==t)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});let r=je(n);console.error(r),this.rejectValue(r)}),!0}resolveValue(e){return C_(e)||(e=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(e,j.strictEquals):super.setValue(e))?(this.lastResolvedValue=e,this.lastSetId=Zc(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(e),this.dispatch(new T_({detail:e})),!0):!1}rejectValue(e){this.waitingForValueDeferredPromise.reject(e),super.setValue(e,j.strictEquals),this.dispatch(new E_({detail:e}))}setValue(e){try{return e instanceof Promise?this.setPromise(e):e instanceof Error?(this.rejectValue(e),!0):C_(e)?this.resolveValue(e):!1}catch(e){return this.rejectValue(je(e)),!0}}listen(e,t){return super.listen(e,t)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?M_.Rejected:this.value instanceof Promise?M_.Waiting:M_.Resolved}},P_=class e extends N_{static NotSet=Symbol(`not set`);updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==e.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck=`equalityCheck`in t?t.equalityCheck:j_,this.updateCallback=t.updateCallback,this.internalParams=`defaultParams`in t?t.defaultParams:e.NotSet}updateFromCallback(){if(!this.updateCallback)throw TypeError(`Cannot update value: updateCallback was never set.`);if(this.internalParams===e.NotSet)throw TypeError(`Cannot update value: params were never set.`);try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(e){return this.setValue(je(e))}finally{this.dispatch(new O_)}}updateLastParams(t){try{return this.internalParams===e.NotSet||!this.equalityCheck?.(t,this.internalParams)?(this.internalParams=t,this.dispatch(new k_({detail:this.internalParams})),!0):!1}catch(e){return this.setValue(je(e)),!1}}update(...[e]){return this.updateLastParams(e)?(this.updateFromCallback(),!0):!1}setParams(e){return this.updateLastParams(e)}forceUpdate(...e){return j.isLengthAtLeast(e,1)&&this.updateLastParams(e[0]),this.updateFromCallback()}};function F_(e){return W_(e)&&!I_(e)&&!J_(e)&&Symbol.asyncIterator in e}function I_(e){return Array.isArray(e)}function L_(e){return typeof e==`bigint`}function R_(e){return typeof e==`boolean`}function z_(e){return e instanceof globalThis.Date}function B_(e){return typeof e==`function`}function V_(e){return W_(e)&&!I_(e)&&!J_(e)&&Symbol.iterator in e}function H_(e){return e===null}function U_(e){return typeof e==`number`}function W_(e){return typeof e==`object`&&!!e}function G_(e){return e instanceof globalThis.RegExp}function K_(e){return typeof e==`string`}function q_(e){return typeof e==`symbol`}function J_(e){return e instanceof globalThis.Uint8Array}function Y_(e){return e===void 0}function X_(e){return e.map(e=>tv(e))}function Z_(e){return new Date(e.getTime())}function Q_(e){return new Uint8Array(e)}function $_(e){return new RegExp(e.source,e.flags)}function ev(e){let t={};for(let n of Object.getOwnPropertyNames(e))t[n]=tv(e[n]);for(let n of Object.getOwnPropertySymbols(e))t[n]=tv(e[n]);return t}function tv(e){return I_(e)?X_(e):z_(e)?Z_(e):J_(e)?Q_(e):G_(e)?$_(e):W_(e)?ev(e):e}function nv(e){return tv(e)}function rv(e,t){return nv(t===void 0?e:{...t,...e})}function iv(e){return uv(e)&&globalThis.Symbol.asyncIterator in e}function av(e){return uv(e)&&globalThis.Symbol.iterator in e}function ov(e){return e instanceof globalThis.Promise}function sv(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function cv(e){return e instanceof globalThis.Uint8Array}function lv(e,t){return t in e}function uv(e){return typeof e==`object`&&!!e}function dv(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function fv(e){return e===void 0}function pv(e){return e===null}function mv(e){return typeof e==`boolean`}function hv(e){return typeof e==`number`}function gv(e){return globalThis.Number.isInteger(e)}function _v(e){return typeof e==`bigint`}function vv(e){return typeof e==`string`}function yv(e){return typeof e==`function`}function bv(e){return typeof e==`symbol`}function xv(e){return _v(e)||mv(e)||pv(e)||hv(e)||vv(e)||bv(e)||fv(e)}var Sv;(function(e){e.InstanceMode=`default`,e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(t,n){return e.ExactOptionalPropertyTypes?n in t:t[n]!==void 0}e.IsExactOptionalProperty=t;function n(t){let n=uv(t);return e.AllowArrayObject?n:n&&!dv(t)}e.IsObjectLike=n;function r(e){return n(e)&&!(e instanceof Date)&&!(e instanceof Uint8Array)}e.IsRecordLike=r;function i(t){return e.AllowNaN?hv(t):Number.isFinite(t)}e.IsNumberLike=i;function a(t){let n=fv(t);return e.AllowNullVoid?n||t===null:n}e.IsVoidLike=a})(Sv||={});function Cv(e){return globalThis.Object.freeze(e).map(e=>Ov(e))}function wv(e){return e}function Tv(e){return e}function Ev(e){return e}function Dv(e){let t={};for(let n of Object.getOwnPropertyNames(e))t[n]=Ov(e[n]);for(let n of Object.getOwnPropertySymbols(e))t[n]=Ov(e[n]);return globalThis.Object.freeze(t)}function Ov(e){return I_(e)?Cv(e):z_(e)?wv(e):J_(e)?Tv(e):G_(e)?Ev(e):W_(e)?Dv(e):e}function P(e,t){let n=t===void 0?e:{...t,...e};switch(Sv.InstanceMode){case`freeze`:return Ov(n);case`clone`:return nv(n);default:return n}}var kv=class extends Error{constructor(e){super(e)}},Av=Symbol.for(`TypeBox.Transform`),jv=Symbol.for(`TypeBox.Readonly`),Mv=Symbol.for(`TypeBox.Optional`),Nv=Symbol.for(`TypeBox.Hint`),F=Symbol.for(`TypeBox.Kind`);function Pv(e){return W_(e)&&e[jv]===`Readonly`}function Fv(e){return W_(e)&&e[Mv]===`Optional`}function Iv(e){return Yv(e,`Any`)}function Lv(e){return Yv(e,`Argument`)}function Rv(e){return Yv(e,`Array`)}function zv(e){return Yv(e,`AsyncIterator`)}function Bv(e){return Yv(e,`BigInt`)}function Vv(e){return Yv(e,`Boolean`)}function Hv(e){return Yv(e,`Computed`)}function Uv(e){return Yv(e,`Constructor`)}function Wv(e){return Yv(e,`Date`)}function Gv(e){return Yv(e,`Function`)}function Kv(e){return Yv(e,`Integer`)}function qv(e){return Yv(e,`Intersect`)}function Jv(e){return Yv(e,`Iterator`)}function Yv(e,t){return W_(e)&&F in e&&e[F]===t}function Xv(e){return R_(e)||U_(e)||K_(e)}function Zv(e){return Yv(e,`Literal`)}function Qv(e){return Yv(e,`MappedKey`)}function $v(e){return Yv(e,`MappedResult`)}function ey(e){return Yv(e,`Never`)}function ty(e){return Yv(e,`Not`)}function ny(e){return Yv(e,`Null`)}function ry(e){return Yv(e,`Number`)}function iy(e){return Yv(e,`Object`)}function ay(e){return Yv(e,`Promise`)}function oy(e){return Yv(e,`Record`)}function sy(e){return Yv(e,`Ref`)}function cy(e){return Yv(e,`RegExp`)}function ly(e){return Yv(e,`String`)}function uy(e){return Yv(e,`Symbol`)}function dy(e){return Yv(e,`TemplateLiteral`)}function fy(e){return Yv(e,`This`)}function py(e){return W_(e)&&Av in e}function my(e){return Yv(e,`Tuple`)}function hy(e){return Yv(e,`Undefined`)}function gy(e){return Yv(e,`Union`)}function _y(e){return Yv(e,`Uint8Array`)}function vy(e){return Yv(e,`Unknown`)}function yy(e){return Yv(e,`Unsafe`)}function by(e){return Yv(e,`Void`)}function xy(e){return W_(e)&&F in e&&K_(e[F])}function Sy(e){return Iv(e)||Lv(e)||Rv(e)||Vv(e)||Bv(e)||zv(e)||Hv(e)||Uv(e)||Wv(e)||Gv(e)||Kv(e)||qv(e)||Jv(e)||Zv(e)||Qv(e)||$v(e)||ey(e)||ty(e)||ny(e)||ry(e)||iy(e)||ay(e)||oy(e)||sy(e)||cy(e)||ly(e)||uy(e)||dy(e)||fy(e)||my(e)||hy(e)||gy(e)||_y(e)||vy(e)||yy(e)||by(e)||xy(e)}var Cy=`Argument.Any.Array.AsyncIterator.BigInt.Boolean.Computed.Constructor.Date.Enum.Function.Integer.Intersect.Iterator.Literal.MappedKey.MappedResult.Not.Null.Number.Object.Promise.Record.Ref.RegExp.String.Symbol.TemplateLiteral.This.Tuple.Undefined.Union.Uint8Array.Unknown.Void`.split(`.`);function wy(e){try{return new RegExp(e),!0}catch{return!1}}function Ty(e){if(!K_(e))return!1;for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(n>=7&&n<=13||n===27||n===127)return!1}return!0}function Ey(e){return ky(e)||Tb(e)}function Dy(e){return Y_(e)||L_(e)}function Oy(e){return Y_(e)||U_(e)}function ky(e){return Y_(e)||R_(e)}function Ay(e){return Y_(e)||K_(e)}function jy(e){return Y_(e)||K_(e)&&Ty(e)&&wy(e)}function My(e){return Y_(e)||K_(e)&&Ty(e)}function Ny(e){return Y_(e)||Tb(e)}function Py(e){return W_(e)&&e[Mv]===`Optional`}function Fy(e){return Yy(e,`Any`)&&Ay(e.$id)}function Iy(e){return Yy(e,`Argument`)&&U_(e.index)}function Ly(e){return Yy(e,`Array`)&&e.type===`array`&&Ay(e.$id)&&Tb(e.items)&&Oy(e.minItems)&&Oy(e.maxItems)&&ky(e.uniqueItems)&&Ny(e.contains)&&Oy(e.minContains)&&Oy(e.maxContains)}function Ry(e){return Yy(e,`AsyncIterator`)&&e.type===`AsyncIterator`&&Ay(e.$id)&&Tb(e.items)}function zy(e){return Yy(e,`BigInt`)&&e.type===`bigint`&&Ay(e.$id)&&Dy(e.exclusiveMaximum)&&Dy(e.exclusiveMinimum)&&Dy(e.maximum)&&Dy(e.minimum)&&Dy(e.multipleOf)}function By(e){return Yy(e,`Boolean`)&&e.type===`boolean`&&Ay(e.$id)}function Vy(e){return Yy(e,`Computed`)&&K_(e.target)&&I_(e.parameters)&&e.parameters.every(e=>Tb(e))}function Hy(e){return Yy(e,`Constructor`)&&e.type===`Constructor`&&Ay(e.$id)&&I_(e.parameters)&&e.parameters.every(e=>Tb(e))&&Tb(e.returns)}function Uy(e){return Yy(e,`Date`)&&e.type===`Date`&&Ay(e.$id)&&Oy(e.exclusiveMaximumTimestamp)&&Oy(e.exclusiveMinimumTimestamp)&&Oy(e.maximumTimestamp)&&Oy(e.minimumTimestamp)&&Oy(e.multipleOfTimestamp)}function Wy(e){return Yy(e,`Function`)&&e.type===`Function`&&Ay(e.$id)&&I_(e.parameters)&&e.parameters.every(e=>Tb(e))&&Tb(e.returns)}function Gy(e){return Yy(e,`Integer`)&&e.type===`integer`&&Ay(e.$id)&&Oy(e.exclusiveMaximum)&&Oy(e.exclusiveMinimum)&&Oy(e.maximum)&&Oy(e.minimum)&&Oy(e.multipleOf)}function Ky(e){return W_(e)&&Object.entries(e).every(([e,t])=>Ty(e)&&Tb(t))}function qy(e){return Yy(e,`Intersect`)&&!(K_(e.type)&&e.type!==`object`)&&I_(e.allOf)&&e.allOf.every(e=>Tb(e)&&!gb(e))&&Ay(e.type)&&(ky(e.unevaluatedProperties)||Ny(e.unevaluatedProperties))&&Ay(e.$id)}function Jy(e){return Yy(e,`Iterator`)&&e.type===`Iterator`&&Ay(e.$id)&&Tb(e.items)}function Yy(e,t){return W_(e)&&F in e&&e[F]===t}function Xy(e){return $y(e)&&K_(e.const)}function Zy(e){return $y(e)&&U_(e.const)}function Qy(e){return $y(e)&&R_(e.const)}function $y(e){return Yy(e,`Literal`)&&Ay(e.$id)&&eb(e.const)}function eb(e){return R_(e)||U_(e)||K_(e)}function tb(e){return Yy(e,`MappedKey`)&&I_(e.keys)&&e.keys.every(e=>U_(e)||K_(e))}function nb(e){return Yy(e,`MappedResult`)&&Ky(e.properties)}function rb(e){return Yy(e,`Never`)&&W_(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function ib(e){return Yy(e,`Not`)&&Tb(e.not)}function ab(e){return Yy(e,`Null`)&&e.type===`null`&&Ay(e.$id)}function ob(e){return Yy(e,`Number`)&&e.type===`number`&&Ay(e.$id)&&Oy(e.exclusiveMaximum)&&Oy(e.exclusiveMinimum)&&Oy(e.maximum)&&Oy(e.minimum)&&Oy(e.multipleOf)}function sb(e){return Yy(e,`Object`)&&e.type===`object`&&Ay(e.$id)&&Ky(e.properties)&&Ey(e.additionalProperties)&&Oy(e.minProperties)&&Oy(e.maxProperties)}function cb(e){return Yy(e,`Promise`)&&e.type===`Promise`&&Ay(e.$id)&&Tb(e.item)}function lb(e){return Yy(e,`Record`)&&e.type===`object`&&Ay(e.$id)&&Ey(e.additionalProperties)&&W_(e.patternProperties)&&(e=>{let t=Object.getOwnPropertyNames(e.patternProperties);return t.length===1&&wy(t[0])&&W_(e.patternProperties)&&Tb(e.patternProperties[t[0]])})(e)}function ub(e){return Yy(e,`Ref`)&&Ay(e.$id)&&K_(e.$ref)}function db(e){return Yy(e,`RegExp`)&&Ay(e.$id)&&K_(e.source)&&K_(e.flags)&&Oy(e.maxLength)&&Oy(e.minLength)}function fb(e){return Yy(e,`String`)&&e.type===`string`&&Ay(e.$id)&&Oy(e.minLength)&&Oy(e.maxLength)&&jy(e.pattern)&&My(e.format)}function pb(e){return Yy(e,`Symbol`)&&e.type===`symbol`&&Ay(e.$id)}function mb(e){return Yy(e,`TemplateLiteral`)&&e.type===`string`&&K_(e.pattern)&&e.pattern[0]===`^`&&e.pattern[e.pattern.length-1]===`$`}function hb(e){return Yy(e,`This`)&&Ay(e.$id)&&K_(e.$ref)}function gb(e){return W_(e)&&Av in e}function _b(e){return Yy(e,`Tuple`)&&e.type===`array`&&Ay(e.$id)&&U_(e.minItems)&&U_(e.maxItems)&&e.minItems===e.maxItems&&(Y_(e.items)&&Y_(e.additionalItems)&&e.minItems===0||I_(e.items)&&e.items.every(e=>Tb(e)))}function vb(e){return Yy(e,`Undefined`)&&e.type===`undefined`&&Ay(e.$id)}function yb(e){return Yy(e,`Union`)&&Ay(e.$id)&&W_(e)&&I_(e.anyOf)&&e.anyOf.every(e=>Tb(e))}function bb(e){return Yy(e,`Uint8Array`)&&e.type===`Uint8Array`&&Ay(e.$id)&&Oy(e.minByteLength)&&Oy(e.maxByteLength)}function xb(e){return Yy(e,`Unknown`)&&Ay(e.$id)}function Sb(e){return Yy(e,`Unsafe`)}function Cb(e){return Yy(e,`Void`)&&e.type===`void`&&Ay(e.$id)}function wb(e){return W_(e)&&F in e&&K_(e[F])&&!Cy.includes(e[F])}function Tb(e){return W_(e)&&(Fy(e)||Iy(e)||Ly(e)||By(e)||zy(e)||Ry(e)||Vy(e)||Hy(e)||Uy(e)||Wy(e)||Gy(e)||qy(e)||Jy(e)||$y(e)||tb(e)||nb(e)||rb(e)||ib(e)||ab(e)||ob(e)||sb(e)||cb(e)||lb(e)||ub(e)||db(e)||fb(e)||pb(e)||mb(e)||hb(e)||_b(e)||vb(e)||yb(e)||bb(e)||xb(e)||Sb(e)||Cb(e)||wb(e))}var Eb=`(true|false)`,Db=`(0|[1-9][0-9]*)`,Ob=`(.*)`,kb=`(?!.*)`;`${Eb}`;var Ab=`^${Db}$`,jb=`^${Ob}$`,Mb=`^${kb}$`,Nb=new Map;function Pb(e){return Nb.has(e)}function Fb(e){return Nb.get(e)}var Ib=new Map;function Lb(e){return Ib.has(e)}function Rb(e,t){Ib.set(e,t)}function zb(e){return Ib.get(e)}function Bb(e,t){return e.includes(t)}function Vb(e){return[...new Set(e)]}function Hb(e,t){return e.filter(e=>t.includes(e))}function Ub(e,t){return e.reduce((e,t)=>Hb(e,t),t)}function Wb(e){return e.length===1?e[0]:e.length>1?Ub(e.slice(1),e[0]):[]}function Gb(e){let t=[];for(let n of e)t.push(...n);return t}function Kb(e){return P({[F]:`Any`},e)}function qb(e,t){return P({[F]:`Array`,type:`array`,items:e},t)}function Jb(e){return P({[F]:`Argument`,index:e})}function Yb(e,t){return P({[F]:`AsyncIterator`,type:`AsyncIterator`,items:e},t)}function Xb(e,t,n){return P({[F]:`Computed`,target:e,parameters:t},n)}function Zb(e,t){let{[t]:n,...r}=e;return r}function Qb(e,t){return t.reduce((e,t)=>Zb(e,t),e)}function $b(e){return P({[F]:`Never`,not:{}},e)}function ex(e){return P({[F]:`MappedResult`,properties:e})}function tx(e,t,n){return P({[F]:`Constructor`,type:`Constructor`,parameters:e,returns:t},n)}function nx(e,t,n){return P({[F]:`Function`,type:`Function`,parameters:e,returns:t},n)}function rx(e,t){return P({[F]:`Union`,anyOf:e},t)}function ix(e){return e.some(e=>Fv(e))}function ax(e){return e.map(e=>Fv(e)?ox(e):e)}function ox(e){return Qb(e,[Mv])}function sx(e,t){return ix(e)?qS(rx(ax(e),t)):rx(ax(e),t)}function cx(e,t){return e.length===1?P(e[0],t):e.length===0?$b(t):sx(e,t)}function lx(e,t){return e.length===0?$b(t):e.length===1?P(e[0],t):rx(e,t)}var ux=class extends kv{};function dx(e){return e.replace(/\\\$/g,`$`).replace(/\\\*/g,`*`).replace(/\\\^/g,`^`).replace(/\\\|/g,`|`).replace(/\\\(/g,`(`).replace(/\\\)/g,`)`)}function fx(e,t,n){return e[t]===n&&e.charCodeAt(t-1)!==92}function px(e,t){return fx(e,t,`(`)}function mx(e,t){return fx(e,t,`)`)}function hx(e,t){return fx(e,t,`|`)}function gx(e){if(!(px(e,0)&&mx(e,e.length-1)))return!1;let t=0;for(let n=0;n<e.length;n++)if(px(e,n)&&(t+=1),mx(e,n)&&--t,t===0&&n!==e.length-1)return!1;return!0}function _x(e){return e.slice(1,e.length-1)}function vx(e){let t=0;for(let n=0;n<e.length;n++)if(px(e,n)&&(t+=1),mx(e,n)&&--t,hx(e,n)&&t===0)return!0;return!1}function yx(e){for(let t=0;t<e.length;t++)if(px(e,t))return!0;return!1}function bx(e){let[t,n]=[0,0],r=[];for(let i=0;i<e.length;i++)if(px(e,i)&&(t+=1),mx(e,i)&&--t,hx(e,i)&&t===0){let t=e.slice(n,i);t.length>0&&r.push(Sx(t)),n=i+1}let i=e.slice(n);return i.length>0&&r.push(Sx(i)),r.length===0?{type:`const`,const:``}:r.length===1?r[0]:{type:`or`,expr:r}}function xx(e){function t(e,t){if(!px(e,t))throw new ux(`TemplateLiteralParser: Index must point to open parens`);let n=0;for(let r=t;r<e.length;r++)if(px(e,r)&&(n+=1),mx(e,r)&&--n,n===0)return[t,r];throw new ux(`TemplateLiteralParser: Unclosed group parens in expression`)}function n(e,t){for(let n=t;n<e.length;n++)if(px(e,n))return[t,n];return[t,e.length]}let r=[];for(let i=0;i<e.length;i++)if(px(e,i)){let[n,a]=t(e,i),o=e.slice(n,a+1);r.push(Sx(o)),i=a}else{let[t,a]=n(e,i),o=e.slice(t,a);o.length>0&&r.push(Sx(o)),i=a-1}return r.length===0?{type:`const`,const:``}:r.length===1?r[0]:{type:`and`,expr:r}}function Sx(e){return gx(e)?Sx(_x(e)):vx(e)?bx(e):yx(e)?xx(e):{type:`const`,const:dx(e)}}function Cx(e){return Sx(e.slice(1,e.length-1))}var wx=class extends kv{};function Tx(e){return e.type===`or`&&e.expr.length===2&&e.expr[0].type===`const`&&e.expr[0].const===`0`&&e.expr[1].type===`const`&&e.expr[1].const===`[1-9][0-9]*`}function Ex(e){return e.type===`or`&&e.expr.length===2&&e.expr[0].type===`const`&&e.expr[0].const===`true`&&e.expr[1].type===`const`&&e.expr[1].const===`false`}function Dx(e){return e.type===`const`&&e.const===`.*`}function Ox(e){return Tx(e)||Dx(e)?!1:Ex(e)?!0:e.type===`and`||e.type===`or`?e.expr.every(e=>Ox(e)):e.type===`const`?!0:(()=>{throw new wx(`Unknown expression type`)})()}function kx(e){return Ox(Cx(e.pattern))}var Ax=class extends kv{};function*jx(e){if(e.length===1)return yield*e[0];for(let t of e[0])for(let n of jx(e.slice(1)))yield`${t}${n}`}function*Mx(e){return yield*jx(e.expr.map(e=>[...Fx(e)]))}function*Nx(e){for(let t of e.expr)yield*Fx(t)}function*Px(e){return yield e.const}function*Fx(e){return e.type===`and`?yield*Mx(e):e.type===`or`?yield*Nx(e):e.type===`const`?yield*Px(e):(()=>{throw new Ax(`Unknown expression`)})()}function Ix(e){let t=Cx(e.pattern);return Ox(t)?[...Fx(t)]:[]}function Lx(e,t){return P({[F]:`Literal`,const:e,type:typeof e},t)}function Rx(e){return P({[F]:`Boolean`,type:`boolean`},e)}function zx(e){return P({[F]:`BigInt`,type:`bigint`},e)}function Bx(e){return P({[F]:`Number`,type:`number`},e)}function Vx(e){return P({[F]:`String`,type:`string`},e)}function*Hx(e){let t=e.trim().replace(/"|'/g,``);return t===`boolean`?yield Rx():t===`number`?yield Bx():t===`bigint`?yield zx():t===`string`?yield Vx():yield(()=>{let e=t.split(`|`).map(e=>Lx(e.trim()));return e.length===0?$b():e.length===1?e[0]:cx(e)})()}function*Ux(e){if(e[1]!==`{`)return yield*[Lx(`$`),...Wx(e.slice(1))];for(let t=2;t<e.length;t++)if(e[t]===`}`){let n=Hx(e.slice(2,t)),r=Wx(e.slice(t+1));return yield*[...n,...r]}yield Lx(e)}function*Wx(e){for(let t=0;t<e.length;t++)if(e[t]===`$`)return yield*[Lx(e.slice(0,t)),...Ux(e.slice(t))];yield Lx(e)}function Gx(e){return[...Wx(e)]}var Kx=class extends kv{};function qx(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function Jx(e,t){return dy(e)?e.pattern.slice(1,e.pattern.length-1):gy(e)?`(${e.anyOf.map(e=>Jx(e,t)).join(`|`)})`:ry(e)||Kv(e)||Bv(e)?`${t}${Db}`:ly(e)?`${t}${Ob}`:Zv(e)?`${t}${qx(e.const.toString())}`:Vv(e)?`${t}${Eb}`:(()=>{throw new Kx(`Unexpected Kind '${e[F]}'`)})()}function Yx(e){return`^${e.map(e=>Jx(e,``)).join(``)}\$`}function Xx(e){return cx(Ix(e).map(e=>Lx(e)))}function Zx(e,t){let n=K_(e)?Yx(Gx(e)):Yx(e);return P({[F]:`TemplateLiteral`,type:`string`,pattern:n},t)}function Qx(e){return Ix(e).map(e=>e.toString())}function $x(e){let t=[];for(let n of e)t.push(...tS(n));return t}function eS(e){return[e.toString()]}function tS(e){return[...new Set(dy(e)?Qx(e):gy(e)?$x(e.anyOf):Zv(e)?eS(e.const):ry(e)||Kv(e)?[`[number]`]:[])]}function nS(e,t,n){let r={};for(let i of Object.getOwnPropertyNames(t))r[i]=gS(e,tS(t[i]),n);return r}function rS(e,t,n){return nS(e,t.properties,n)}function iS(e,t,n){return ex(rS(e,t,n))}function aS(e,t){return e.map(e=>pS(e,t))}function oS(e){return e.filter(e=>!ey(e))}function sS(e,t){return nC(oS(aS(e,t)))}function cS(e){return e.some(e=>ey(e))?[]:e}function lS(e,t){return cx(cS(aS(e,t)))}function uS(e,t){return t in e?e[t]:t===`[number]`?cx(e):$b()}function dS(e,t){return t===`[number]`?e:$b()}function fS(e,t){return t in e?e[t]:$b()}function pS(e,t){return qv(e)?sS(e.allOf,t):gy(e)?lS(e.anyOf,t):my(e)?uS(e.items??[],t):Rv(e)?dS(e.items,t):iy(e)?fS(e.properties,t):$b()}function mS(e,t){return t.map(t=>pS(e,t))}function hS(e,t){return cx(mS(e,t))}function gS(e,t,n){if(sy(e)||sy(t)){if(!Sy(e)||!Sy(t))throw new kv(`Index types using Ref parameters require both Type and Key to be of TSchema`);return Xb(`Index`,[e,t])}return $v(t)?iS(e,t,n):Qv(t)?bS(e,t,n):P(Sy(t)?hS(e,tS(t)):hS(e,t),n)}function _S(e,t,n){return{[t]:gS(e,[t],nv(n))}}function vS(e,t,n){return t.reduce((t,r)=>({...t,..._S(e,r,n)}),{})}function yS(e,t,n){return vS(e,t.keys,n)}function bS(e,t,n){return ex(yS(e,t,n))}function xS(e,t){return P({[F]:`Iterator`,type:`Iterator`,items:e},t)}function SS(e){return globalThis.Object.keys(e).filter(t=>!Fv(e[t]))}function CS(e,t){let n=SS(e);return P(n.length>0?{[F]:`Object`,type:`object`,required:n,properties:e}:{[F]:`Object`,type:`object`,properties:e},t)}var wS=CS;function TS(e,t){return P({[F]:`Promise`,type:`Promise`,item:e},t)}function ES(e){return P(Qb(e,[jv]))}function DS(e){return P({...e,[jv]:`Readonly`})}function OS(e,t){return t===!1?ES(e):DS(e)}function kS(e,t){let n=t??!0;return $v(e)?MS(e,n):OS(e,n)}function AS(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=kS(e[r],t);return n}function jS(e,t){return AS(e.properties,t)}function MS(e,t){return ex(jS(e,t))}function NS(e,t){return P(e.length>0?{[F]:`Tuple`,type:`array`,items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[F]:`Tuple`,type:`array`,minItems:e.length,maxItems:e.length},t)}function PS(e,t){return e in t?VS(e,t[e]):ex(t)}function FS(e){return{[e]:Lx(e)}}function IS(e){let t={};for(let n of e)t[n]=Lx(n);return t}function LS(e,t){return Bb(t,e)?FS(e):IS(t)}function RS(e,t){return PS(e,LS(e,t))}function zS(e,t){return t.map(t=>VS(e,t))}function BS(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(t))n[r]=VS(e,t[r]);return n}function VS(e,t){let n={...t};return Fv(t)?qS(VS(e,Qb(t,[Mv]))):Pv(t)?kS(VS(e,Qb(t,[jv]))):$v(t)?PS(e,t.properties):Qv(t)?RS(e,t.keys):Uv(t)?tx(zS(e,t.parameters),VS(e,t.returns),n):Gv(t)?nx(zS(e,t.parameters),VS(e,t.returns),n):zv(t)?Yb(VS(e,t.items),n):Jv(t)?xS(VS(e,t.items),n):qv(t)?rC(zS(e,t.allOf),n):gy(t)?lx(zS(e,t.anyOf),n):my(t)?NS(zS(e,t.items??[]),n):iy(t)?wS(BS(e,t.properties),n):Rv(t)?qb(VS(e,t.items),n):ay(t)?TS(VS(e,t.item),n):t}function HS(e,t){let n={};for(let r of e)n[r]=VS(r,t);return n}function US(e,t,n){let r=Sy(e)?tS(e):e;return wS(HS(r,t({[F]:`MappedKey`,keys:r})),n)}function WS(e){return P(Qb(e,[Mv]))}function GS(e){return P({...e,[Mv]:`Optional`})}function KS(e,t){return t===!1?WS(e):GS(e)}function qS(e,t){let n=t??!0;return $v(e)?XS(e,n):KS(e,n)}function JS(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=qS(e[r],t);return n}function YS(e,t){return JS(e.properties,t)}function XS(e,t){return ex(YS(e,t))}function ZS(e,t={}){let n=e.every(e=>iy(e)),r=Sy(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return P(t.unevaluatedProperties===!1||Sy(t.unevaluatedProperties)||n?{...r,[F]:`Intersect`,type:`object`,allOf:e}:{...r,[F]:`Intersect`,allOf:e},t)}function QS(e){return e.every(e=>Fv(e))}function $S(e){return Qb(e,[Mv])}function eC(e){return e.map(e=>Fv(e)?$S(e):e)}function tC(e,t){return QS(e)?qS(ZS(eC(e),t)):ZS(eC(e),t)}function nC(e,t={}){if(e.length===1)return P(e[0],t);if(e.length===0)return $b(t);if(e.some(e=>py(e)))throw Error(`Cannot intersect transform types`);return tC(e,t)}function rC(e,t){if(e.length===1)return P(e[0],t);if(e.length===0)return $b(t);if(e.some(e=>py(e)))throw Error(`Cannot intersect transform types`);return ZS(e,t)}function iC(...e){let[t,n]=typeof e[0]==`string`?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!=`string`)throw new kv(`Ref: $ref must be a string`);return P({[F]:`Ref`,$ref:t},n)}function aC(e,t){return Xb(`Awaited`,[Xb(e,t)])}function oC(e){return Xb(`Awaited`,[iC(e)])}function sC(e){return rC(uC(e))}function cC(e){return lx(uC(e))}function lC(e){return dC(e)}function uC(e){return e.map(e=>dC(e))}function dC(e,t){return P(Hv(e)?aC(e.target,e.parameters):qv(e)?sC(e.allOf):gy(e)?cC(e.anyOf):ay(e)?lC(e.item):sy(e)?oC(e.$ref):e,t)}function fC(e){let t=[];for(let n of e)t.push(yC(n));return t}function pC(e){return Gb(fC(e))}function mC(e){return Wb(fC(e))}function hC(e){return e.map((e,t)=>t.toString())}function gC(e){return[`[number]`]}function _C(e){return globalThis.Object.getOwnPropertyNames(e)}function vC(e){return bC?globalThis.Object.getOwnPropertyNames(e).map(e=>e[0]===`^`&&e[e.length-1]===`$`?e.slice(1,e.length-1):e):[]}function yC(e){return qv(e)?pC(e.allOf):gy(e)?mC(e.anyOf):my(e)?hC(e.items??[]):Rv(e)?gC(e.items):iy(e)?_C(e.properties):oy(e)?vC(e.patternProperties):[]}var bC=!1;function xC(e){bC=!0;let t=yC(e);return bC=!1,`^(${t.map(e=>`(${e})`).join(`|`)})$`}function SC(e,t){return Xb(`KeyOf`,[Xb(e,t)])}function CC(e){return Xb(`KeyOf`,[iC(e)])}function wC(e,t){return P(cx(TC(yC(e))),t)}function TC(e){return e.map(e=>e===`[number]`?Bx():Lx(e))}function EC(e,t){return Hv(e)?SC(e.target,e.parameters):sy(e)?CC(e.$ref):$v(e)?kC(e,t):wC(e,t)}function DC(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=EC(e[r],nv(t));return n}function OC(e,t){return DC(e.properties,t)}function kC(e,t){return ex(OC(e,t))}function AC(e){let t=yC(e),n=mS(e,t);return t.map((e,r)=>[t[r],n[r]])}function jC(e){let t=[];for(let n of e)t.push(...yC(n));return Vb(t)}function MC(e){return e.filter(e=>!ey(e))}function NC(e,t){let n=[];for(let r of e)n.push(...mS(r,[t]));return MC(n)}function PC(e,t){let n={};for(let r of t)n[r]=nC(NC(e,r));return n}function FC(e,t){return wS(PC(e,jC(e)),t)}function IC(e){return P({[F]:`Date`,type:`Date`},e)}function LC(e){return P({[F]:`Null`,type:`null`},e)}function RC(e){return P({[F]:`Symbol`,type:`symbol`},e)}function zC(e){return P({[F]:`Undefined`,type:`undefined`},e)}function BC(e){return P({[F]:`Uint8Array`,type:`Uint8Array`},e)}function VC(e){return P({[F]:`Unknown`},e)}function HC(e){return e.map(e=>GC(e,!1))}function UC(e){let t={};for(let n of globalThis.Object.getOwnPropertyNames(e))t[n]=kS(GC(e[n],!1));return t}function WC(e,t){return t===!0?e:kS(e)}function GC(e,t){return F_(e)||V_(e)?WC(Kb(),t):I_(e)?kS(NS(HC(e))):J_(e)?BC():z_(e)?IC():W_(e)?WC(wS(UC(e)),t):B_(e)?WC(nx([],VC()),t):Y_(e)?zC():H_(e)?LC():q_(e)?RC():L_(e)?zx():U_(e)||R_(e)||K_(e)?Lx(e):wS({})}function KC(e,t){return P(GC(e,!0),t)}function qC(e,t){return Uv(e)?NS(e.parameters,t):$b(t)}function JC(e,t){if(Y_(e))throw Error(`Enum undefined or empty`);let n=globalThis.Object.getOwnPropertyNames(e).filter(e=>isNaN(e)).map(t=>e[t]);return lx([...new Set(n)].map(e=>Lx(e)),{...t,[Nv]:`Enum`})}var YC=class extends kv{},I;(function(e){e[e.Union=0]=`Union`,e[e.True=1]=`True`,e[e.False=2]=`False`})(I||={});function XC(e){return e===I.False?e:I.True}function ZC(e){throw new YC(e)}function QC(e){return rb(e)||qy(e)||yb(e)||xb(e)||Fy(e)}function $C(e,t){return rb(t)?_w(e,t):qy(t)?pw(e,t):yb(t)?eT(e,t):xb(t)?nT(e,t):Fy(t)?ew(e,t):ZC(`StructuralRight`)}function ew(e,t){return I.True}function tw(e,t){return qy(t)?pw(e,t):yb(t)&&t.anyOf.some(e=>Fy(e)||xb(e))?I.True:yb(t)?I.Union:xb(t)||Fy(t)?I.True:I.Union}function nw(e,t){return xb(e)?I.False:Fy(e)?I.Union:rb(e)?I.True:I.False}function rw(e,t){return sb(t)&&Pw(t)?I.True:QC(t)?$C(e,t):Ly(t)?XC(oT(e.items,t.items)):I.False}function iw(e,t){return QC(t)?$C(e,t):Ry(t)?XC(oT(e.items,t.items)):I.False}function aw(e,t){return QC(t)?$C(e,t):sb(t)?Lw(e,t):lb(t)?Hw(e,t):zy(t)?I.True:I.False}function ow(e,t){return Qy(e)||By(e)?I.True:I.False}function sw(e,t){return QC(t)?$C(e,t):sb(t)?Lw(e,t):lb(t)?Hw(e,t):By(t)?I.True:I.False}function cw(e,t){return QC(t)?$C(e,t):sb(t)?Lw(e,t):Hy(t)?e.parameters.length>t.parameters.length?I.False:e.parameters.every((e,n)=>XC(oT(t.parameters[n],e))===I.True)?XC(oT(e.returns,t.returns)):I.False:I.False}function lw(e,t){return QC(t)?$C(e,t):sb(t)?Lw(e,t):lb(t)?Hw(e,t):Uy(t)?I.True:I.False}function uw(e,t){return QC(t)?$C(e,t):sb(t)?Lw(e,t):Wy(t)?e.parameters.length>t.parameters.length?I.False:e.parameters.every((e,n)=>XC(oT(t.parameters[n],e))===I.True)?XC(oT(e.returns,t.returns)):I.False:I.False}function dw(e,t){return $y(e)&&U_(e.const)||ob(e)||Gy(e)?I.True:I.False}function fw(e,t){return Gy(t)||ob(t)?I.True:QC(t)?$C(e,t):sb(t)?Lw(e,t):lb(t)?Hw(e,t):I.False}function pw(e,t){return t.allOf.every(t=>oT(e,t)===I.True)?I.True:I.False}function mw(e,t){return e.allOf.some(e=>oT(e,t)===I.True)?I.True:I.False}function hw(e,t){return QC(t)?$C(e,t):Jy(t)?XC(oT(e.items,t.items)):I.False}function gw(e,t){return $y(t)&&t.const===e.const?I.True:QC(t)?$C(e,t):sb(t)?Lw(e,t):lb(t)?Hw(e,t):fb(t)?Gw(e,t):ob(t)?Sw(e,t):Gy(t)?dw(e,t):By(t)?ow(e,t):I.False}function _w(e,t){return I.False}function vw(e,t){return I.True}function yw(e){let[t,n]=[e,0];for(;ib(t);)t=t.not,n+=1;return n%2==0?t:VC()}function bw(e,t){return ib(e)?oT(yw(e),t):ib(t)?oT(e,yw(t)):ZC(`Invalid fallthrough for Not`)}function xw(e,t){return QC(t)?$C(e,t):sb(t)?Lw(e,t):lb(t)?Hw(e,t):ab(t)?I.True:I.False}function Sw(e,t){return Zy(e)||ob(e)||Gy(e)?I.True:I.False}function Cw(e,t){return QC(t)?$C(e,t):sb(t)?Lw(e,t):lb(t)?Hw(e,t):Gy(t)||ob(t)?I.True:I.False}function ww(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function Tw(e){return Pw(e)}function Ew(e){return ww(e,0)||ww(e,1)&&`description`in e.properties&&yb(e.properties.description)&&e.properties.description.anyOf.length===2&&(fb(e.properties.description.anyOf[0])&&vb(e.properties.description.anyOf[1])||fb(e.properties.description.anyOf[1])&&vb(e.properties.description.anyOf[0]))}function Dw(e){return ww(e,0)}function Ow(e){return ww(e,0)}function kw(e){return ww(e,0)}function Aw(e){return ww(e,0)}function jw(e){return Pw(e)}function Mw(e){let t=Bx();return ww(e,0)||ww(e,1)&&`length`in e.properties&&XC(oT(e.properties.length,t))===I.True}function Nw(e){return ww(e,0)}function Pw(e){let t=Bx();return ww(e,0)||ww(e,1)&&`length`in e.properties&&XC(oT(e.properties.length,t))===I.True}function Fw(e){let t=nx([Kb()],Kb());return ww(e,0)||ww(e,1)&&`then`in e.properties&&XC(oT(e.properties.then,t))===I.True}function Iw(e,t){return oT(e,t)===I.False||Py(e)&&!Py(t)?I.False:I.True}function Lw(e,t){return xb(e)?I.False:Fy(e)?I.Union:rb(e)||Xy(e)&&Tw(t)||Zy(e)&&Dw(t)||Qy(e)&&Ow(t)||pb(e)&&Ew(t)||zy(e)&&kw(t)||fb(e)&&Tw(t)||pb(e)&&Ew(t)||ob(e)&&Dw(t)||Gy(e)&&Dw(t)||By(e)&&Ow(t)||bb(e)&&jw(t)||Uy(e)&&Aw(t)||Hy(e)&&Nw(t)||Wy(e)&&Mw(t)?I.True:lb(e)&&fb(Bw(e))?t[Nv]===`Record`?I.True:I.False:lb(e)&&ob(Bw(e))&&ww(t,0)?I.True:I.False}function Rw(e,t){return QC(t)?$C(e,t):lb(t)?Hw(e,t):sb(t)?(()=>{for(let n of Object.getOwnPropertyNames(t.properties)){if(!(n in e.properties)&&!Py(t.properties[n]))return I.False;if(Py(t.properties[n]))return I.True;if(Iw(e.properties[n],t.properties[n])===I.False)return I.False}return I.True})():I.False}function zw(e,t){return QC(t)?$C(e,t):sb(t)&&Fw(t)?I.True:cb(t)?XC(oT(e.item,t.item)):I.False}function Bw(e){return Ab in e.patternProperties?Bx():jb in e.patternProperties?Vx():ZC(`Unknown record key pattern`)}function Vw(e){return Ab in e.patternProperties?e.patternProperties[Ab]:jb in e.patternProperties?e.patternProperties[jb]:ZC(`Unable to get record value schema`)}function Hw(e,t){let[n,r]=[Bw(t),Vw(t)];return Xy(e)&&ob(n)&&XC(oT(e,r))===I.True?I.True:bb(e)&&ob(n)||fb(e)&&ob(n)||Ly(e)&&ob(n)?oT(e,r):sb(e)?(()=>{for(let t of Object.getOwnPropertyNames(e.properties))if(Iw(r,e.properties[t])===I.False)return I.False;return I.True})():I.False}function Uw(e,t){return QC(t)?$C(e,t):sb(t)?Lw(e,t):lb(t)?oT(Vw(e),Vw(t)):I.False}function Ww(e,t){return oT(db(e)?Vx():e,db(t)?Vx():t)}function Gw(e,t){return $y(e)&&K_(e.const)||fb(e)?I.True:I.False}function Kw(e,t){return QC(t)?$C(e,t):sb(t)?Lw(e,t):lb(t)?Hw(e,t):fb(t)?I.True:I.False}function qw(e,t){return QC(t)?$C(e,t):sb(t)?Lw(e,t):lb(t)?Hw(e,t):pb(t)?I.True:I.False}function Jw(e,t){return mb(e)?oT(Xx(e),t):mb(t)?oT(e,Xx(t)):ZC(`Invalid fallthrough for TemplateLiteral`)}function Yw(e,t){return Ly(t)&&e.items!==void 0&&e.items.every(e=>oT(e,t.items)===I.True)}function Xw(e,t){return rb(e)?I.True:xb(e)?I.False:Fy(e)?I.Union:I.False}function Zw(e,t){return QC(t)?$C(e,t):sb(t)&&Pw(t)||Ly(t)&&Yw(e,t)?I.True:_b(t)?Y_(e.items)&&!Y_(t.items)||!Y_(e.items)&&Y_(t.items)?I.False:Y_(e.items)&&!Y_(t.items)||e.items.every((e,n)=>oT(e,t.items[n])===I.True)?I.True:I.False:I.False}function Qw(e,t){return QC(t)?$C(e,t):sb(t)?Lw(e,t):lb(t)?Hw(e,t):bb(t)?I.True:I.False}function $w(e,t){return QC(t)?$C(e,t):sb(t)?Lw(e,t):lb(t)?Hw(e,t):Cb(t)?iT(e,t):vb(t)?I.True:I.False}function eT(e,t){return t.anyOf.some(t=>oT(e,t)===I.True)?I.True:I.False}function tT(e,t){return e.anyOf.every(e=>oT(e,t)===I.True)?I.True:I.False}function nT(e,t){return I.True}function rT(e,t){return rb(t)?_w(e,t):qy(t)?pw(e,t):yb(t)?eT(e,t):Fy(t)?ew(e,t):fb(t)?Gw(e,t):ob(t)?Sw(e,t):Gy(t)?dw(e,t):By(t)?ow(e,t):Ly(t)?nw(e,t):_b(t)?Xw(e,t):sb(t)?Lw(e,t):xb(t)?I.True:I.False}function iT(e,t){return vb(e)||vb(e)?I.True:I.False}function aT(e,t){return qy(t)?pw(e,t):yb(t)?eT(e,t):xb(t)?nT(e,t):Fy(t)?ew(e,t):sb(t)?Lw(e,t):Cb(t)?I.True:I.False}function oT(e,t){return mb(e)||mb(t)?Jw(e,t):db(e)||db(t)?Ww(e,t):ib(e)||ib(t)?bw(e,t):Fy(e)?tw(e,t):Ly(e)?rw(e,t):zy(e)?aw(e,t):By(e)?sw(e,t):Ry(e)?iw(e,t):Hy(e)?cw(e,t):Uy(e)?lw(e,t):Wy(e)?uw(e,t):Gy(e)?fw(e,t):qy(e)?mw(e,t):Jy(e)?hw(e,t):$y(e)?gw(e,t):rb(e)?vw(e,t):ab(e)?xw(e,t):ob(e)?Cw(e,t):sb(e)?Rw(e,t):lb(e)?Uw(e,t):fb(e)?Kw(e,t):pb(e)?qw(e,t):_b(e)?Zw(e,t):cb(e)?zw(e,t):bb(e)?Qw(e,t):vb(e)?$w(e,t):yb(e)?tT(e,t):xb(e)?rT(e,t):Cb(e)?aT(e,t):ZC(`Unknown left type operand '${e[F]}'`)}function sT(e,t){return oT(e,t)}function cT(e,t,n,r,i){let a={};for(let o of globalThis.Object.getOwnPropertyNames(e))a[o]=fT(e[o],t,n,r,nv(i));return a}function lT(e,t,n,r,i){return cT(e.properties,t,n,r,i)}function uT(e,t,n,r,i){return ex(lT(e,t,n,r,i))}function dT(e,t,n,r){let i=sT(e,t);return i===I.Union?lx([n,r]):i===I.True?n:r}function fT(e,t,n,r,i){return $v(e)?uT(e,t,n,r,i):Qv(e)?P(gT(e,t,n,r,i)):P(dT(e,t,n,r),i)}function pT(e,t,n,r,i){return{[e]:fT(Lx(e),t,n,r,nv(i))}}function mT(e,t,n,r,i){return e.reduce((e,a)=>({...e,...pT(a,t,n,r,i)}),{})}function hT(e,t,n,r,i){return mT(e.keys,t,n,r,i)}function gT(e,t,n,r,i){return ex(hT(e,t,n,r,i))}function _T(e){return e.allOf.every(e=>bT(e))}function vT(e){return e.anyOf.some(e=>bT(e))}function yT(e){return!bT(e.not)}function bT(e){return e[F]===`Intersect`?_T(e):e[F]===`Union`?vT(e):e[F]===`Not`?yT(e):e[F]===`Undefined`}function xT(e,t){return CT(Xx(e),t)}function ST(e,t){let n=e.filter(e=>sT(e,t)===I.False);return n.length===1?n[0]:lx(n)}function CT(e,t,n={}){return dy(e)?P(xT(e,t),n):$v(e)?P(ET(e,t),n):P(gy(e)?ST(e.anyOf,t):sT(e,t)===I.False?e:$b(),n)}function wT(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=CT(e[r],t);return n}function TT(e,t){return wT(e.properties,t)}function ET(e,t){return ex(TT(e,t))}function DT(e,t){return kT(Xx(e),t)}function OT(e,t){let n=e.filter(e=>sT(e,t)!==I.False);return n.length===1?n[0]:lx(n)}function kT(e,t,n){return dy(e)?P(DT(e,t),n):$v(e)?P(MT(e,t),n):P(gy(e)?OT(e.anyOf,t):sT(e,t)===I.False?$b():e,n)}function AT(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=kT(e[r],t);return n}function jT(e,t){return AT(e.properties,t)}function MT(e,t){return ex(jT(e,t))}function NT(e,t){return Uv(e)?P(e.returns,t):$b(t)}function PT(e){return kS(qS(e))}function FT(e,t,n){return P({[F]:`Record`,type:`object`,patternProperties:{[e]:t}},n)}function IT(e,t,n){let r={};for(let n of e)r[n]=t;return wS(r,{...n,[Nv]:`Record`})}function LT(e,t,n){return kx(e)?IT(tS(e),t,n):FT(e.pattern,t,n)}function RT(e,t,n){return IT(tS(lx(e)),t,n)}function zT(e,t,n){return IT([e.toString()],t,n)}function BT(e,t,n){return FT(e.source,t,n)}function VT(e,t,n){return FT(Y_(e.pattern)?jb:e.pattern,t,n)}function HT(e,t,n){return FT(jb,t,n)}function UT(e,t,n){return FT(Mb,t,n)}function WT(e,t,n){return wS({true:t,false:t},n)}function GT(e,t,n){return FT(Ab,t,n)}function KT(e,t,n){return FT(Ab,t,n)}function qT(e,t,n={}){return gy(e)?RT(e.anyOf,t,n):dy(e)?LT(e,t,n):Zv(e)?zT(e.const,t,n):Vv(e)?WT(e,t,n):Kv(e)?GT(e,t,n):ry(e)?KT(e,t,n):cy(e)?BT(e,t,n):ly(e)?VT(e,t,n):Iv(e)?HT(e,t,n):ey(e)?UT(e,t,n):$b(n)}function JT(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function YT(e){let t=JT(e);return t===jb?Vx():t===Ab?Bx():Vx({pattern:t})}function XT(e){return e.patternProperties[JT(e)]}function ZT(e,t){return t.parameters=dE(e,t.parameters),t.returns=fE(e,t.returns),t}function QT(e,t){return t.parameters=dE(e,t.parameters),t.returns=fE(e,t.returns),t}function $T(e,t){return t.allOf=dE(e,t.allOf),t}function eE(e,t){return t.anyOf=dE(e,t.anyOf),t}function tE(e,t){return Y_(t.items)||(t.items=dE(e,t.items)),t}function nE(e,t){return t.items=fE(e,t.items),t}function rE(e,t){return t.items=fE(e,t.items),t}function iE(e,t){return t.items=fE(e,t.items),t}function aE(e,t){return t.item=fE(e,t.item),t}function oE(e,t){let n=uE(e,t.properties);return{...t,...wS(n)}}function sE(e,t){let n=qT(fE(e,YT(t)),fE(e,XT(t)));return{...t,...n}}function cE(e,t){return t.index in e?e[t.index]:VC()}function lE(e,t){let n=Pv(t),r=Fv(t),i=fE(e,t);return n&&r?PT(i):n&&!r?kS(i):!n&&r?qS(i):i}function uE(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((n,r)=>({...n,[r]:lE(e,t[r])}),{})}function dE(e,t){return t.map(t=>fE(e,t))}function fE(e,t){return Uv(t)?ZT(e,t):Gv(t)?QT(e,t):qv(t)?$T(e,t):gy(t)?eE(e,t):my(t)?tE(e,t):Rv(t)?nE(e,t):zv(t)?rE(e,t):Jv(t)?iE(e,t):ay(t)?aE(e,t):iy(t)?oE(e,t):oy(t)?sE(e,t):Lv(t)?cE(e,t):t}function pE(e,t){return fE(t,rv(e))}function mE(e){return P({[F]:`Integer`,type:`integer`},e)}function hE(e,t,n){return{[e]:EE(Lx(e),t,nv(n))}}function gE(e,t,n){return e.reduce((e,r)=>({...e,...hE(r,t,n)}),{})}function _E(e,t,n){return gE(e.keys,t,n)}function vE(e,t,n){return ex(_E(e,t,n))}function yE(e){let[t,n]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),n].join(``)}function bE(e){let[t,n]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),n].join(``)}function xE(e){return e.toUpperCase()}function SE(e){return e.toLowerCase()}function CE(e,t,n){let r=Cx(e.pattern);return Ox(r)?Zx([lx(TE([...Fx(r)].map(e=>Lx(e)),t))],n):{...e,pattern:wE(e.pattern,t)}}function wE(e,t){return typeof e==`string`?t===`Uncapitalize`?yE(e):t===`Capitalize`?bE(e):t===`Uppercase`?xE(e):t===`Lowercase`?SE(e):e:e.toString()}function TE(e,t){return e.map(e=>EE(e,t))}function EE(e,t,n={}){return Qv(e)?vE(e,t,n):dy(e)?CE(e,t,n):gy(e)?lx(TE(e.anyOf,t),n):Zv(e)?Lx(wE(e.const,t),n):P(e,n)}function DE(e,t={}){return EE(e,`Capitalize`,t)}function OE(e,t={}){return EE(e,`Lowercase`,t)}function kE(e,t={}){return EE(e,`Uncapitalize`,t)}function AE(e,t={}){return EE(e,`Uppercase`,t)}function jE(e,t,n){let r={};for(let i of globalThis.Object.getOwnPropertyNames(e))r[i]=VE(e[i],t,nv(n));return r}function ME(e,t,n){return jE(e.properties,t,n)}function NE(e,t,n){return ex(ME(e,t,n))}function PE(e,t){return e.map(e=>BE(e,t))}function FE(e,t){return e.map(e=>BE(e,t))}function IE(e,t){let{[t]:n,...r}=e;return r}function LE(e,t){return t.reduce((e,t)=>IE(e,t),e)}function RE(e,t,n){let r=Qb(e,[Av,`$id`,`required`,`properties`]);return wS(LE(n,t),r)}function zE(e){return lx(e.reduce((e,t)=>Xv(t)?[...e,Lx(t)]:e,[]))}function BE(e,t){return qv(e)?rC(PE(e.allOf,t)):gy(e)?lx(FE(e.anyOf,t)):iy(e)?RE(e,t,e.properties):wS({})}function VE(e,t,n){let r=I_(t)?zE(t):t,i=Sy(t)?tS(t):t,a=sy(e),o=sy(t);return $v(e)?NE(e,i,n):Qv(t)?GE(e,t,n):a&&o||!a&&o||a&&!o?Xb(`Omit`,[e,r],n):P({...BE(e,i),...n})}function HE(e,t,n){return{[t]:VE(e,[t],nv(n))}}function UE(e,t,n){return t.reduce((t,r)=>({...t,...HE(e,r,n)}),{})}function WE(e,t,n){return UE(e,t.keys,n)}function GE(e,t,n){return ex(WE(e,t,n))}function KE(e,t,n){let r={};for(let i of globalThis.Object.getOwnPropertyNames(e))r[i]=tD(e[i],t,nv(n));return r}function qE(e,t,n){return KE(e.properties,t,n)}function JE(e,t,n){return ex(qE(e,t,n))}function YE(e,t){return e.map(e=>eD(e,t))}function XE(e,t){return e.map(e=>eD(e,t))}function ZE(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function QE(e,t,n){let r=Qb(e,[Av,`$id`,`required`,`properties`]);return wS(ZE(n,t),r)}function $E(e){return lx(e.reduce((e,t)=>Xv(t)?[...e,Lx(t)]:e,[]))}function eD(e,t){return qv(e)?rC(YE(e.allOf,t)):gy(e)?lx(XE(e.anyOf,t)):iy(e)?QE(e,t,e.properties):wS({})}function tD(e,t,n){let r=I_(t)?$E(t):t,i=Sy(t)?tS(t):t,a=sy(e),o=sy(t);return $v(e)?JE(e,i,n):Qv(t)?aD(e,t,n):a&&o||!a&&o||a&&!o?Xb(`Pick`,[e,r],n):P({...eD(e,i),...n})}function nD(e,t,n){return{[t]:tD(e,[t],nv(n))}}function rD(e,t,n){return t.reduce((t,r)=>({...t,...nD(e,r,n)}),{})}function iD(e,t,n){return rD(e,t.keys,n)}function aD(e,t,n){return ex(iD(e,t,n))}function oD(e,t){return Xb(`Partial`,[Xb(e,t)])}function sD(e){return Xb(`Partial`,[iC(e)])}function cD(e){let t={};for(let n of globalThis.Object.getOwnPropertyNames(e))t[n]=qS(e[n]);return t}function lD(e,t){let n=Qb(e,[Av,`$id`,`required`,`properties`]);return wS(cD(t),n)}function uD(e){return e.map(e=>dD(e))}function dD(e){return Hv(e)?oD(e.target,e.parameters):sy(e)?sD(e.$ref):qv(e)?rC(uD(e.allOf)):gy(e)?lx(uD(e.anyOf)):iy(e)?lD(e,e.properties):Bv(e)||Vv(e)||Kv(e)||Zv(e)||ny(e)||ry(e)||ly(e)||uy(e)||hy(e)?e:wS({})}function fD(e,t){return $v(e)?hD(e,t):P({...dD(e),...t})}function pD(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=fD(e[r],nv(t));return n}function mD(e,t){return pD(e.properties,t)}function hD(e,t){return ex(mD(e,t))}function gD(e,t){return Xb(`Required`,[Xb(e,t)])}function _D(e){return Xb(`Required`,[iC(e)])}function vD(e){let t={};for(let n of globalThis.Object.getOwnPropertyNames(e))t[n]=Qb(e[n],[Mv]);return t}function yD(e,t){let n=Qb(e,[Av,`$id`,`required`,`properties`]);return wS(vD(t),n)}function bD(e){return e.map(e=>xD(e))}function xD(e){return Hv(e)?gD(e.target,e.parameters):sy(e)?_D(e.$ref):qv(e)?rC(bD(e.allOf)):gy(e)?lx(bD(e.anyOf)):iy(e)?yD(e,e.properties):Bv(e)||Vv(e)||Kv(e)||Zv(e)||ny(e)||ry(e)||ly(e)||uy(e)||hy(e)?e:wS({})}function SD(e,t){return $v(e)?TD(e,t):P({...xD(e),...t})}function CD(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=SD(e[r],t);return n}function wD(e,t){return CD(e.properties,t)}function TD(e,t){return ex(wD(e,t))}function ED(e,t){return t.map(t=>sy(t)?DD(e,t.$ref):JD(e,t))}function DD(e,t){return t in e?sy(e[t])?DD(e,e[t].$ref):JD(e,e[t]):$b()}function OD(e){return dC(e[0])}function kD(e){return gS(e[0],e[1])}function AD(e){return EC(e[0])}function jD(e){return fD(e[0])}function MD(e){return VE(e[0],e[1])}function ND(e){return tD(e[0],e[1])}function PD(e){return SD(e[0])}function FD(e,t,n){let r=ED(e,n);return t===`Awaited`?OD(r):t===`Index`?kD(r):t===`KeyOf`?AD(r):t===`Partial`?jD(r):t===`Omit`?MD(r):t===`Pick`?ND(r):t===`Required`?PD(r):$b()}function ID(e,t){return qb(JD(e,t))}function LD(e,t){return Yb(JD(e,t))}function RD(e,t,n){return tx(qD(e,t),JD(e,n))}function zD(e,t,n){return nx(qD(e,t),JD(e,n))}function BD(e,t){return rC(qD(e,t))}function VD(e,t){return xS(JD(e,t))}function HD(e,t){return wS(globalThis.Object.keys(t).reduce((n,r)=>({...n,[r]:JD(e,t[r])}),{}))}function UD(e,t){let[n,r]=[JD(e,XT(t)),JT(t)],i=rv(t);return i.patternProperties[r]=n,i}function WD(e,t){return sy(t)?{...DD(e,t.$ref),[Av]:t[Av]}:t}function GD(e,t){return NS(qD(e,t))}function KD(e,t){return lx(qD(e,t))}function qD(e,t){return t.map(t=>JD(e,t))}function JD(e,t){return Fv(t)?P(JD(e,Qb(t,[Mv])),t):Pv(t)?P(JD(e,Qb(t,[jv])),t):py(t)?P(WD(e,t),t):Rv(t)?P(ID(e,t.items),t):zv(t)?P(LD(e,t.items),t):Hv(t)?P(FD(e,t.target,t.parameters)):Uv(t)?P(RD(e,t.parameters,t.returns),t):Gv(t)?P(zD(e,t.parameters,t.returns),t):qv(t)?P(BD(e,t.allOf),t):Jv(t)?P(VD(e,t.items),t):iy(t)?P(HD(e,t.properties),t):oy(t)?P(UD(e,t)):my(t)?P(GD(e,t.items||[]),t):gy(t)?P(KD(e,t.anyOf),t):t}function YD(e,t){return t in e?JD(e,e[t]):$b()}function XD(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,n)=>({...t,[n]:YD(e,n)}),{})}var ZD=class{constructor(e){let t=XD(e);this.$defs=this.WithIdentifiers(t)}Import(e,t){let n={...this.$defs,[e]:P(this.$defs[e],t)};return P({[F]:`Import`,$defs:n,$ref:e})}WithIdentifiers(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,n)=>({...t,[n]:{...e[n],$id:n}}),{})}};function QD(e){return new ZD(e)}function $D(e,t){return P({[F]:`Not`,not:e},t)}function eO(e,t){return Gv(e)?NS(e.parameters,t):$b()}var tO=0;function nO(e,t={}){Y_(t.$id)&&(t.$id=`T${tO++}`);let n=rv(e({[F]:`This`,$ref:`${t.$id}`}));return n.$id=t.$id,P({[Nv]:`Recursive`,...n},t)}function rO(e,t){let n=K_(e)?new globalThis.RegExp(e):e;return P({[F]:`RegExp`,type:`RegExp`,source:n.source,flags:n.flags},t)}function iO(e){return qv(e)?e.allOf:gy(e)?e.anyOf:my(e)?e.items??[]:[]}function aO(e){return iO(e)}function oO(e,t){return Gv(e)?P(e.returns,t):$b(t)}var sO=class{constructor(e){this.schema=e}Decode(e){return new cO(this.schema,e)}},cO=class{constructor(e,t){this.schema=e,this.decode=t}EncodeTransform(e,t){let n={Encode:n=>t[Av].Encode(e(n)),Decode:e=>this.decode(t[Av].Decode(e))};return{...t,[Av]:n}}EncodeSchema(e,t){let n={Decode:this.decode,Encode:e};return{...t,[Av]:n}}Encode(e){return py(this.schema)?this.EncodeTransform(e,this.schema):this.EncodeSchema(e,this.schema)}};function lO(e){return new sO(e)}function uO(e={}){return P({[F]:e[F]??`Unsafe`},e)}function dO(e){return P({[F]:`Void`,type:`void`},e)}var fO=t({Any:()=>Kb,Argument:()=>Jb,Array:()=>qb,AsyncIterator:()=>Yb,Awaited:()=>dC,BigInt:()=>zx,Boolean:()=>Rx,Capitalize:()=>DE,Composite:()=>FC,Const:()=>KC,Constructor:()=>tx,ConstructorParameters:()=>qC,Date:()=>IC,Enum:()=>JC,Exclude:()=>CT,Extends:()=>fT,Extract:()=>kT,Function:()=>nx,Index:()=>gS,InstanceType:()=>NT,Instantiate:()=>pE,Integer:()=>mE,Intersect:()=>rC,Iterator:()=>xS,KeyOf:()=>EC,Literal:()=>Lx,Lowercase:()=>OE,Mapped:()=>US,Module:()=>QD,Never:()=>$b,Not:()=>$D,Null:()=>LC,Number:()=>Bx,Object:()=>wS,Omit:()=>VE,Optional:()=>qS,Parameters:()=>eO,Partial:()=>fD,Pick:()=>tD,Promise:()=>TS,Readonly:()=>kS,ReadonlyOptional:()=>PT,Record:()=>qT,Recursive:()=>nO,Ref:()=>iC,RegExp:()=>rO,Required:()=>SD,Rest:()=>aO,ReturnType:()=>oO,String:()=>Vx,Symbol:()=>RC,TemplateLiteral:()=>Zx,Transform:()=>lO,Tuple:()=>NS,Uint8Array:()=>BC,Uncapitalize:()=>kE,Undefined:()=>zC,Union:()=>lx,Unknown:()=>VC,Unsafe:()=>uO,Uppercase:()=>AE,Void:()=>dO});function pO(e){switch(e.errorType){case L.ArrayContains:return`Expected array to contain at least one matching value`;case L.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case L.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case L.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case L.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case L.ArrayUniqueItems:return`Expected array elements to be unique`;case L.Array:return`Expected array`;case L.AsyncIterator:return`Expected AsyncIterator`;case L.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case L.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case L.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case L.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case L.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case L.BigInt:return`Expected bigint`;case L.Boolean:return`Expected boolean`;case L.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case L.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case L.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case L.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case L.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case L.Date:return`Expected Date`;case L.Function:return`Expected function`;case L.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case L.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case L.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case L.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case L.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case L.Integer:return`Expected integer`;case L.IntersectUnevaluatedProperties:return`Unexpected property`;case L.Intersect:return`Expected all values to match`;case L.Iterator:return`Expected Iterator`;case L.Literal:return`Expected ${typeof e.schema.const==`string`?`'${e.schema.const}'`:e.schema.const}`;case L.Never:return`Never`;case L.Not:return`Value should not match`;case L.Null:return`Expected null`;case L.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case L.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case L.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case L.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case L.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case L.Number:return`Expected number`;case L.Object:return`Expected object`;case L.ObjectAdditionalProperties:return`Unexpected property`;case L.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case L.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case L.ObjectRequiredProperty:return`Expected required property`;case L.Promise:return`Expected Promise`;case L.RegExp:return`Expected string to match regular expression`;case L.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case L.StringFormat:return`Expected string to match '${e.schema.format}' format`;case L.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case L.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case L.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case L.String:return`Expected string`;case L.Symbol:return`Expected symbol`;case L.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case L.Tuple:return`Expected tuple`;case L.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case L.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case L.Uint8Array:return`Expected Uint8Array`;case L.Undefined:return`Expected undefined`;case L.Union:return`Expected union value`;case L.Void:return`Expected void`;case L.Kind:return`Expected kind '${e.schema[F]}'`;default:return`Unknown error type`}}var mO=pO;function hO(e){mO=e}function gO(){return mO}var _O=class extends kv{constructor(e){super(`Unable to dereference schema with $id '${e.$ref}'`),this.schema=e}};function vO(e,t){let n=t.find(t=>t.$id===e.$ref);if(n===void 0)throw new _O(e);return bO(n,t)}function yO(e,t){return!vv(e.$id)||t.some(t=>t.$id===e.$id)||t.push(e),t}function bO(e,t){return e[F]===`This`||e[F]===`Ref`?vO(e,t):e}var xO=class extends kv{constructor(e){super(`Unable to hash value`),this.value=e}},SO;(function(e){e[e.Undefined=0]=`Undefined`,e[e.Null=1]=`Null`,e[e.Boolean=2]=`Boolean`,e[e.Number=3]=`Number`,e[e.String=4]=`String`,e[e.Object=5]=`Object`,e[e.Array=6]=`Array`,e[e.Date=7]=`Date`,e[e.Uint8Array=8]=`Uint8Array`,e[e.Symbol=9]=`Symbol`,e[e.BigInt=10]=`BigInt`})(SO||={});var CO=BigInt(`14695981039346656037`),[wO,TO]=[BigInt(`1099511628211`),BigInt(`18446744073709551616`)],EO=Array.from({length:256}).map((e,t)=>BigInt(t)),DO=new Float64Array(1),OO=new DataView(DO.buffer),kO=new Uint8Array(DO.buffer);function*AO(e){let t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let n=0;n<t;n++)yield e>>8*(t-1-n)&255}function jO(e){UO(SO.Array);for(let t of e)HO(t)}function MO(e){UO(SO.Boolean),UO(e?1:0)}function NO(e){UO(SO.BigInt),OO.setBigInt64(0,e);for(let e of kO)UO(e)}function PO(e){UO(SO.Date),HO(e.getTime())}function FO(e){UO(SO.Null)}function IO(e){UO(SO.Number),OO.setFloat64(0,e);for(let e of kO)UO(e)}function LO(e){UO(SO.Object);for(let t of globalThis.Object.getOwnPropertyNames(e).sort())HO(t),HO(e[t])}function RO(e){UO(SO.String);for(let t=0;t<e.length;t++)for(let n of AO(e.charCodeAt(t)))UO(n)}function zO(e){UO(SO.Symbol),HO(e.description)}function BO(e){UO(SO.Uint8Array);for(let t=0;t<e.length;t++)UO(e[t])}function VO(e){return UO(SO.Undefined)}function HO(e){if(dv(e))return jO(e);if(mv(e))return MO(e);if(_v(e))return NO(e);if(sv(e))return PO(e);if(pv(e))return FO(e);if(hv(e))return IO(e);if(uv(e))return LO(e);if(vv(e))return RO(e);if(bv(e))return zO(e);if(cv(e))return BO(e);if(fv(e))return VO(e);throw new xO(e)}function UO(e){CO^=EO[e],CO=CO*wO%TO}function WO(e){return CO=BigInt(`14695981039346656037`),HO(e),CO}var GO=class extends kv{constructor(e){super(`Unknown type`),this.schema=e}};function KO(e){return e[F]===`Any`||e[F]===`Unknown`}function qO(e){return e!==void 0}function JO(e,t,n){return!0}function YO(e,t,n){return!0}function XO(e,t,n){if(!dv(n)||qO(e.minItems)&&!(n.length>=e.minItems)||qO(e.maxItems)&&!(n.length<=e.maxItems))return!1;for(let r of n)if(!Ok(e.items,t,r))return!1;if(e.uniqueItems===!0&&!(function(){let e=new Set;for(let t of n){let n=WO(t);if(e.has(n))return!1;e.add(n)}return!0})())return!1;if(!(qO(e.contains)||hv(e.minContains)||hv(e.maxContains)))return!0;let r=qO(e.contains)?e.contains:$b(),i=n.reduce((e,n)=>Ok(r,t,n)?e+1:e,0);return!(i===0||hv(e.minContains)&&i<e.minContains||hv(e.maxContains)&&i>e.maxContains)}function ZO(e,t,n){return iv(n)}function QO(e,t,n){return!(!_v(n)||qO(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||qO(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||qO(e.maximum)&&!(n<=e.maximum)||qO(e.minimum)&&!(n>=e.minimum)||qO(e.multipleOf)&&n%e.multipleOf!==BigInt(0))}function $O(e,t,n){return mv(n)}function ek(e,t,n){return Ok(e.returns,t,n.prototype)}function tk(e,t,n){return!(!sv(n)||qO(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)||qO(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)||qO(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)||qO(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)||qO(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0)}function nk(e,t,n){return yv(n)}function rk(e,t,n){let r=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];return Ok(i,[...t,...r],n)}function ik(e,t,n){return!(!gv(n)||qO(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||qO(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||qO(e.maximum)&&!(n<=e.maximum)||qO(e.minimum)&&!(n>=e.minimum)||qO(e.multipleOf)&&n%e.multipleOf!==0)}function ak(e,t,n){let r=e.allOf.every(e=>Ok(e,t,n));if(e.unevaluatedProperties===!1){let t=new RegExp(xC(e)),i=Object.getOwnPropertyNames(n).every(e=>t.test(e));return r&&i}else if(Sy(e.unevaluatedProperties)){let i=new RegExp(xC(e)),a=Object.getOwnPropertyNames(n).every(r=>i.test(r)||Ok(e.unevaluatedProperties,t,n[r]));return r&&a}else return r}function ok(e,t,n){return av(n)}function sk(e,t,n){return n===e.const}function ck(e,t,n){return!1}function lk(e,t,n){return!Ok(e.not,t,n)}function uk(e,t,n){return pv(n)}function dk(e,t,n){return!(!Sv.IsNumberLike(n)||qO(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||qO(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||qO(e.minimum)&&!(n>=e.minimum)||qO(e.maximum)&&!(n<=e.maximum)||qO(e.multipleOf)&&n%e.multipleOf!==0)}function fk(e,t,n){if(!Sv.IsObjectLike(n)||qO(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||qO(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;let r=Object.getOwnPropertyNames(e.properties);for(let i of r){let r=e.properties[i];if(e.required&&e.required.includes(i)){if(!Ok(r,t,n[i])||(bT(r)||KO(r))&&!(i in n))return!1}else if(Sv.IsExactOptionalProperty(n,i)&&!Ok(r,t,n[i]))return!1}if(e.additionalProperties===!1){let t=Object.getOwnPropertyNames(n);return e.required&&e.required.length===r.length&&t.length===r.length?!0:t.every(e=>r.includes(e))}else if(typeof e.additionalProperties==`object`)return Object.getOwnPropertyNames(n).every(i=>r.includes(i)||Ok(e.additionalProperties,t,n[i]));else return!0}function pk(e,t,n){return ov(n)}function mk(e,t,n){if(!Sv.IsRecordLike(n)||qO(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||qO(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;let[r,i]=Object.entries(e.patternProperties)[0],a=new RegExp(r),o=Object.entries(n).every(([e,n])=>a.test(e)?Ok(i,t,n):!0),s=typeof e.additionalProperties==`object`?Object.entries(n).every(([n,r])=>a.test(n)?!0:Ok(e.additionalProperties,t,r)):!0,c=e.additionalProperties===!1?Object.getOwnPropertyNames(n).every(e=>a.test(e)):!0;return o&&s&&c}function hk(e,t,n){return Ok(bO(e,t),t,n)}function gk(e,t,n){let r=new RegExp(e.source,e.flags);return qO(e.minLength)&&!(n.length>=e.minLength)||qO(e.maxLength)&&!(n.length<=e.maxLength)?!1:r.test(n)}function _k(e,t,n){return!vv(n)||qO(e.minLength)&&!(n.length>=e.minLength)||qO(e.maxLength)&&!(n.length<=e.maxLength)||qO(e.pattern)&&!new RegExp(e.pattern).test(n)?!1:qO(e.format)?Pb(e.format)?Fb(e.format)(n):!1:!0}function vk(e,t,n){return bv(n)}function yk(e,t,n){return vv(n)&&new RegExp(e.pattern).test(n)}function bk(e,t,n){return Ok(bO(e,t),t,n)}function xk(e,t,n){if(!dv(n)||e.items===void 0&&n.length!==0||n.length!==e.maxItems)return!1;if(!e.items)return!0;for(let r=0;r<e.items.length;r++)if(!Ok(e.items[r],t,n[r]))return!1;return!0}function Sk(e,t,n){return fv(n)}function Ck(e,t,n){return e.anyOf.some(e=>Ok(e,t,n))}function wk(e,t,n){return!(!cv(n)||qO(e.maxByteLength)&&!(n.length<=e.maxByteLength)||qO(e.minByteLength)&&!(n.length>=e.minByteLength))}function Tk(e,t,n){return!0}function Ek(e,t,n){return Sv.IsVoidLike(n)}function Dk(e,t,n){return Lb(e[F])?zb(e[F])(e,n):!1}function Ok(e,t,n){let r=qO(e.$id)?yO(e,t):t,i=e;switch(i[F]){case`Any`:return JO(i,r,n);case`Argument`:return YO(i,r,n);case`Array`:return XO(i,r,n);case`AsyncIterator`:return ZO(i,r,n);case`BigInt`:return QO(i,r,n);case`Boolean`:return $O(i,r,n);case`Constructor`:return ek(i,r,n);case`Date`:return tk(i,r,n);case`Function`:return nk(i,r,n);case`Import`:return rk(i,r,n);case`Integer`:return ik(i,r,n);case`Intersect`:return ak(i,r,n);case`Iterator`:return ok(i,r,n);case`Literal`:return sk(i,r,n);case`Never`:return ck(i,r,n);case`Not`:return lk(i,r,n);case`Null`:return uk(i,r,n);case`Number`:return dk(i,r,n);case`Object`:return fk(i,r,n);case`Promise`:return pk(i,r,n);case`Record`:return mk(i,r,n);case`Ref`:return hk(i,r,n);case`RegExp`:return gk(i,r,n);case`String`:return _k(i,r,n);case`Symbol`:return vk(i,r,n);case`TemplateLiteral`:return yk(i,r,n);case`This`:return bk(i,r,n);case`Tuple`:return xk(i,r,n);case`Undefined`:return Sk(i,r,n);case`Union`:return Ck(i,r,n);case`Uint8Array`:return wk(i,r,n);case`Unknown`:return Tk(i,r,n);case`Void`:return Ek(i,r,n);default:if(!Lb(i[F]))throw new GO(i);return Dk(i,r,n)}}function kk(...e){return e.length===3?Ok(e[0],e[1],e[2]):Ok(e[0],[],e[1])}var L;(function(e){e[e.ArrayContains=0]=`ArrayContains`,e[e.ArrayMaxContains=1]=`ArrayMaxContains`,e[e.ArrayMaxItems=2]=`ArrayMaxItems`,e[e.ArrayMinContains=3]=`ArrayMinContains`,e[e.ArrayMinItems=4]=`ArrayMinItems`,e[e.ArrayUniqueItems=5]=`ArrayUniqueItems`,e[e.Array=6]=`Array`,e[e.AsyncIterator=7]=`AsyncIterator`,e[e.BigIntExclusiveMaximum=8]=`BigIntExclusiveMaximum`,e[e.BigIntExclusiveMinimum=9]=`BigIntExclusiveMinimum`,e[e.BigIntMaximum=10]=`BigIntMaximum`,e[e.BigIntMinimum=11]=`BigIntMinimum`,e[e.BigIntMultipleOf=12]=`BigIntMultipleOf`,e[e.BigInt=13]=`BigInt`,e[e.Boolean=14]=`Boolean`,e[e.DateExclusiveMaximumTimestamp=15]=`DateExclusiveMaximumTimestamp`,e[e.DateExclusiveMinimumTimestamp=16]=`DateExclusiveMinimumTimestamp`,e[e.DateMaximumTimestamp=17]=`DateMaximumTimestamp`,e[e.DateMinimumTimestamp=18]=`DateMinimumTimestamp`,e[e.DateMultipleOfTimestamp=19]=`DateMultipleOfTimestamp`,e[e.Date=20]=`Date`,e[e.Function=21]=`Function`,e[e.IntegerExclusiveMaximum=22]=`IntegerExclusiveMaximum`,e[e.IntegerExclusiveMinimum=23]=`IntegerExclusiveMinimum`,e[e.IntegerMaximum=24]=`IntegerMaximum`,e[e.IntegerMinimum=25]=`IntegerMinimum`,e[e.IntegerMultipleOf=26]=`IntegerMultipleOf`,e[e.Integer=27]=`Integer`,e[e.IntersectUnevaluatedProperties=28]=`IntersectUnevaluatedProperties`,e[e.Intersect=29]=`Intersect`,e[e.Iterator=30]=`Iterator`,e[e.Kind=31]=`Kind`,e[e.Literal=32]=`Literal`,e[e.Never=33]=`Never`,e[e.Not=34]=`Not`,e[e.Null=35]=`Null`,e[e.NumberExclusiveMaximum=36]=`NumberExclusiveMaximum`,e[e.NumberExclusiveMinimum=37]=`NumberExclusiveMinimum`,e[e.NumberMaximum=38]=`NumberMaximum`,e[e.NumberMinimum=39]=`NumberMinimum`,e[e.NumberMultipleOf=40]=`NumberMultipleOf`,e[e.Number=41]=`Number`,e[e.ObjectAdditionalProperties=42]=`ObjectAdditionalProperties`,e[e.ObjectMaxProperties=43]=`ObjectMaxProperties`,e[e.ObjectMinProperties=44]=`ObjectMinProperties`,e[e.ObjectRequiredProperty=45]=`ObjectRequiredProperty`,e[e.Object=46]=`Object`,e[e.Promise=47]=`Promise`,e[e.RegExp=48]=`RegExp`,e[e.StringFormatUnknown=49]=`StringFormatUnknown`,e[e.StringFormat=50]=`StringFormat`,e[e.StringMaxLength=51]=`StringMaxLength`,e[e.StringMinLength=52]=`StringMinLength`,e[e.StringPattern=53]=`StringPattern`,e[e.String=54]=`String`,e[e.Symbol=55]=`Symbol`,e[e.TupleLength=56]=`TupleLength`,e[e.Tuple=57]=`Tuple`,e[e.Uint8ArrayMaxByteLength=58]=`Uint8ArrayMaxByteLength`,e[e.Uint8ArrayMinByteLength=59]=`Uint8ArrayMinByteLength`,e[e.Uint8Array=60]=`Uint8Array`,e[e.Undefined=61]=`Undefined`,e[e.Union=62]=`Union`,e[e.Void=63]=`Void`})(L||={});var Ak=class extends kv{constructor(e){super(`Unknown type`),this.schema=e}};function jk(e){return e.replace(/~/g,`~0`).replace(/\//g,`~1`)}function Mk(e){return e!==void 0}var Nk=class{constructor(e){this.iterator=e}[Symbol.iterator](){return this.iterator}First(){let e=this.iterator.next();return e.done?void 0:e.value}};function R(e,t,n,r,i=[]){return{type:e,schema:t,path:n,value:r,message:gO()({errorType:e,path:n,schema:t,value:r,errors:i}),errors:i}}function*Pk(e,t,n,r){}function*Fk(e,t,n,r){}function*Ik(e,t,n,r){if(!dv(r))return yield R(L.Array,e,n,r);Mk(e.minItems)&&!(r.length>=e.minItems)&&(yield R(L.ArrayMinItems,e,n,r)),Mk(e.maxItems)&&!(r.length<=e.maxItems)&&(yield R(L.ArrayMaxItems,e,n,r));for(let i=0;i<r.length;i++)yield*mA(e.items,t,`${n}/${i}`,r[i]);if(e.uniqueItems===!0&&!(function(){let e=new Set;for(let t of r){let n=WO(t);if(e.has(n))return!1;e.add(n)}return!0})()&&(yield R(L.ArrayUniqueItems,e,n,r)),!(Mk(e.contains)||Mk(e.minContains)||Mk(e.maxContains)))return;let i=Mk(e.contains)?e.contains:$b(),a=r.reduce((e,r,a)=>mA(i,t,`${n}${a}`,r).next().done===!0?e+1:e,0);a===0&&(yield R(L.ArrayContains,e,n,r)),hv(e.minContains)&&a<e.minContains&&(yield R(L.ArrayMinContains,e,n,r)),hv(e.maxContains)&&a>e.maxContains&&(yield R(L.ArrayMaxContains,e,n,r))}function*Lk(e,t,n,r){iv(r)||(yield R(L.AsyncIterator,e,n,r))}function*Rk(e,t,n,r){if(!_v(r))return yield R(L.BigInt,e,n,r);Mk(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield R(L.BigIntExclusiveMaximum,e,n,r)),Mk(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield R(L.BigIntExclusiveMinimum,e,n,r)),Mk(e.maximum)&&!(r<=e.maximum)&&(yield R(L.BigIntMaximum,e,n,r)),Mk(e.minimum)&&!(r>=e.minimum)&&(yield R(L.BigIntMinimum,e,n,r)),Mk(e.multipleOf)&&r%e.multipleOf!==BigInt(0)&&(yield R(L.BigIntMultipleOf,e,n,r))}function*zk(e,t,n,r){mv(r)||(yield R(L.Boolean,e,n,r))}function*Bk(e,t,n,r){yield*mA(e.returns,t,n,r.prototype)}function*Vk(e,t,n,r){if(!sv(r))return yield R(L.Date,e,n,r);Mk(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)&&(yield R(L.DateExclusiveMaximumTimestamp,e,n,r)),Mk(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)&&(yield R(L.DateExclusiveMinimumTimestamp,e,n,r)),Mk(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)&&(yield R(L.DateMaximumTimestamp,e,n,r)),Mk(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)&&(yield R(L.DateMinimumTimestamp,e,n,r)),Mk(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0&&(yield R(L.DateMultipleOfTimestamp,e,n,r))}function*Hk(e,t,n,r){yv(r)||(yield R(L.Function,e,n,r))}function*Uk(e,t,n,r){let i=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref];yield*mA(a,[...t,...i],n,r)}function*Wk(e,t,n,r){if(!gv(r))return yield R(L.Integer,e,n,r);Mk(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield R(L.IntegerExclusiveMaximum,e,n,r)),Mk(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield R(L.IntegerExclusiveMinimum,e,n,r)),Mk(e.maximum)&&!(r<=e.maximum)&&(yield R(L.IntegerMaximum,e,n,r)),Mk(e.minimum)&&!(r>=e.minimum)&&(yield R(L.IntegerMinimum,e,n,r)),Mk(e.multipleOf)&&r%e.multipleOf!==0&&(yield R(L.IntegerMultipleOf,e,n,r))}function*Gk(e,t,n,r){let i=!1;for(let a of e.allOf)for(let e of mA(a,t,n,r))i=!0,yield e;if(i)return yield R(L.Intersect,e,n,r);if(e.unevaluatedProperties===!1){let t=new RegExp(xC(e));for(let i of Object.getOwnPropertyNames(r))t.test(i)||(yield R(L.IntersectUnevaluatedProperties,e,`${n}/${i}`,r))}if(typeof e.unevaluatedProperties==`object`){let i=new RegExp(xC(e));for(let a of Object.getOwnPropertyNames(r))if(!i.test(a)){let i=mA(e.unevaluatedProperties,t,`${n}/${a}`,r[a]).next();i.done||(yield i.value)}}}function*Kk(e,t,n,r){av(r)||(yield R(L.Iterator,e,n,r))}function*qk(e,t,n,r){r!==e.const&&(yield R(L.Literal,e,n,r))}function*Jk(e,t,n,r){yield R(L.Never,e,n,r)}function*Yk(e,t,n,r){mA(e.not,t,n,r).next().done===!0&&(yield R(L.Not,e,n,r))}function*Xk(e,t,n,r){pv(r)||(yield R(L.Null,e,n,r))}function*Zk(e,t,n,r){if(!Sv.IsNumberLike(r))return yield R(L.Number,e,n,r);Mk(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield R(L.NumberExclusiveMaximum,e,n,r)),Mk(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield R(L.NumberExclusiveMinimum,e,n,r)),Mk(e.maximum)&&!(r<=e.maximum)&&(yield R(L.NumberMaximum,e,n,r)),Mk(e.minimum)&&!(r>=e.minimum)&&(yield R(L.NumberMinimum,e,n,r)),Mk(e.multipleOf)&&r%e.multipleOf!==0&&(yield R(L.NumberMultipleOf,e,n,r))}function*Qk(e,t,n,r){if(!Sv.IsObjectLike(r))return yield R(L.Object,e,n,r);Mk(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield R(L.ObjectMinProperties,e,n,r)),Mk(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield R(L.ObjectMaxProperties,e,n,r));let i=Array.isArray(e.required)?e.required:[],a=Object.getOwnPropertyNames(e.properties),o=Object.getOwnPropertyNames(r);for(let t of i)o.includes(t)||(yield R(L.ObjectRequiredProperty,e.properties[t],`${n}/${jk(t)}`,void 0));if(e.additionalProperties===!1)for(let t of o)a.includes(t)||(yield R(L.ObjectAdditionalProperties,e,`${n}/${jk(t)}`,r[t]));if(typeof e.additionalProperties==`object`)for(let i of o)a.includes(i)||(yield*mA(e.additionalProperties,t,`${n}/${jk(i)}`,r[i]));for(let i of a){let a=e.properties[i];e.required&&e.required.includes(i)?(yield*mA(a,t,`${n}/${jk(i)}`,r[i]),bT(e)&&!(i in r)&&(yield R(L.ObjectRequiredProperty,a,`${n}/${jk(i)}`,void 0))):Sv.IsExactOptionalProperty(r,i)&&(yield*mA(a,t,`${n}/${jk(i)}`,r[i]))}}function*$k(e,t,n,r){ov(r)||(yield R(L.Promise,e,n,r))}function*eA(e,t,n,r){if(!Sv.IsRecordLike(r))return yield R(L.Object,e,n,r);Mk(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield R(L.ObjectMinProperties,e,n,r)),Mk(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield R(L.ObjectMaxProperties,e,n,r));let[i,a]=Object.entries(e.patternProperties)[0],o=new RegExp(i);for(let[e,i]of Object.entries(r))o.test(e)&&(yield*mA(a,t,`${n}/${jk(e)}`,i));if(typeof e.additionalProperties==`object`)for(let[i,a]of Object.entries(r))o.test(i)||(yield*mA(e.additionalProperties,t,`${n}/${jk(i)}`,a));if(e.additionalProperties===!1){for(let[t,i]of Object.entries(r))if(!o.test(t))return yield R(L.ObjectAdditionalProperties,e,`${n}/${jk(t)}`,i)}}function*tA(e,t,n,r){yield*mA(bO(e,t),t,n,r)}function*nA(e,t,n,r){if(!vv(r))return yield R(L.String,e,n,r);if(Mk(e.minLength)&&!(r.length>=e.minLength)&&(yield R(L.StringMinLength,e,n,r)),Mk(e.maxLength)&&!(r.length<=e.maxLength)&&(yield R(L.StringMaxLength,e,n,r)),!new RegExp(e.source,e.flags).test(r))return yield R(L.RegExp,e,n,r)}function*rA(e,t,n,r){if(!vv(r))return yield R(L.String,e,n,r);Mk(e.minLength)&&!(r.length>=e.minLength)&&(yield R(L.StringMinLength,e,n,r)),Mk(e.maxLength)&&!(r.length<=e.maxLength)&&(yield R(L.StringMaxLength,e,n,r)),vv(e.pattern)&&(new RegExp(e.pattern).test(r)||(yield R(L.StringPattern,e,n,r))),vv(e.format)&&(Pb(e.format)?Fb(e.format)(r)||(yield R(L.StringFormat,e,n,r)):yield R(L.StringFormatUnknown,e,n,r))}function*iA(e,t,n,r){bv(r)||(yield R(L.Symbol,e,n,r))}function*aA(e,t,n,r){if(!vv(r))return yield R(L.String,e,n,r);new RegExp(e.pattern).test(r)||(yield R(L.StringPattern,e,n,r))}function*oA(e,t,n,r){yield*mA(bO(e,t),t,n,r)}function*sA(e,t,n,r){if(!dv(r))return yield R(L.Tuple,e,n,r);if(e.items===void 0&&r.length!==0||r.length!==e.maxItems)return yield R(L.TupleLength,e,n,r);if(e.items)for(let i=0;i<e.items.length;i++)yield*mA(e.items[i],t,`${n}/${i}`,r[i])}function*cA(e,t,n,r){fv(r)||(yield R(L.Undefined,e,n,r))}function*lA(e,t,n,r){if(kk(e,t,r))return;let i=e.anyOf.map(e=>new Nk(mA(e,t,n,r)));yield R(L.Union,e,n,r,i)}function*uA(e,t,n,r){if(!cv(r))return yield R(L.Uint8Array,e,n,r);Mk(e.maxByteLength)&&!(r.length<=e.maxByteLength)&&(yield R(L.Uint8ArrayMaxByteLength,e,n,r)),Mk(e.minByteLength)&&!(r.length>=e.minByteLength)&&(yield R(L.Uint8ArrayMinByteLength,e,n,r))}function*dA(e,t,n,r){}function*fA(e,t,n,r){Sv.IsVoidLike(r)||(yield R(L.Void,e,n,r))}function*pA(e,t,n,r){zb(e[F])(e,r)||(yield R(L.Kind,e,n,r))}function*mA(e,t,n,r){let i=Mk(e.$id)?[...t,e]:t,a=e;switch(a[F]){case`Any`:return yield*Pk(a,i,n,r);case`Argument`:return yield*Fk(a,i,n,r);case`Array`:return yield*Ik(a,i,n,r);case`AsyncIterator`:return yield*Lk(a,i,n,r);case`BigInt`:return yield*Rk(a,i,n,r);case`Boolean`:return yield*zk(a,i,n,r);case`Constructor`:return yield*Bk(a,i,n,r);case`Date`:return yield*Vk(a,i,n,r);case`Function`:return yield*Hk(a,i,n,r);case`Import`:return yield*Uk(a,i,n,r);case`Integer`:return yield*Wk(a,i,n,r);case`Intersect`:return yield*Gk(a,i,n,r);case`Iterator`:return yield*Kk(a,i,n,r);case`Literal`:return yield*qk(a,i,n,r);case`Never`:return yield*Jk(a,i,n,r);case`Not`:return yield*Yk(a,i,n,r);case`Null`:return yield*Xk(a,i,n,r);case`Number`:return yield*Zk(a,i,n,r);case`Object`:return yield*Qk(a,i,n,r);case`Promise`:return yield*$k(a,i,n,r);case`Record`:return yield*eA(a,i,n,r);case`Ref`:return yield*tA(a,i,n,r);case`RegExp`:return yield*nA(a,i,n,r);case`String`:return yield*rA(a,i,n,r);case`Symbol`:return yield*iA(a,i,n,r);case`TemplateLiteral`:return yield*aA(a,i,n,r);case`This`:return yield*oA(a,i,n,r);case`Tuple`:return yield*sA(a,i,n,r);case`Undefined`:return yield*cA(a,i,n,r);case`Union`:return yield*lA(a,i,n,r);case`Uint8Array`:return yield*uA(a,i,n,r);case`Unknown`:return yield*dA(a,i,n,r);case`Void`:return yield*fA(a,i,n,r);default:if(!Lb(a[F]))throw new Ak(e);return yield*pA(a,i,n,r)}}function hA(...e){return new Nk(e.length===3?mA(e[0],e[1],``,e[2]):mA(e[0],[],``,e[1]))}var gA=class extends kv{constructor(e,t,n){super(`Unable to decode value as it does not match the expected schema`),this.schema=e,this.value=t,this.error=n}},_A=class extends kv{constructor(e,t,n,r){super(r instanceof Error?r.message:`Unknown error`),this.schema=e,this.path=t,this.value=n,this.error=r}};function vA(e,t,n){try{return py(e)?e[Av].Decode(n):n}catch(r){throw new _A(e,t,n,r)}}function yA(e,t,n,r){return dv(r)?vA(e,n,r.map((r,i)=>kA(e.items,t,`${n}/${i}`,r))):vA(e,n,r)}function bA(e,t,n,r){if(!uv(r)||xv(r))return vA(e,n,r);let i=AC(e),a=i.map(e=>e[0]),o={...r};for(let[e,r]of i)e in o&&(o[e]=kA(r,t,`${n}/${e}`,o[e]));if(!py(e.unevaluatedProperties))return vA(e,n,o);let s=Object.getOwnPropertyNames(o),c=e.unevaluatedProperties,l={...o};for(let e of s)a.includes(e)||(l[e]=vA(c,`${n}/${e}`,l[e]));return vA(e,n,l)}function xA(e,t,n,r){let i=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref];return vA(e,n,kA(a,[...t,...i],n,r))}function SA(e,t,n,r){return vA(e,n,kA(e.not,t,n,r))}function CA(e,t,n,r){if(!uv(r))return vA(e,n,r);let i=yC(e),a={...r};for(let r of i)lv(a,r)&&(fv(a[r])&&(!hy(e.properties[r])||Sv.IsExactOptionalProperty(a,r))||(a[r]=kA(e.properties[r],t,`${n}/${r}`,a[r])));if(!Sy(e.additionalProperties))return vA(e,n,a);let o=Object.getOwnPropertyNames(a),s=e.additionalProperties,c={...a};for(let e of o)i.includes(e)||(c[e]=vA(s,`${n}/${e}`,c[e]));return vA(e,n,c)}function wA(e,t,n,r){if(!uv(r))return vA(e,n,r);let i=Object.getOwnPropertyNames(e.patternProperties)[0],a=new RegExp(i),o={...r};for(let s of Object.getOwnPropertyNames(r))a.test(s)&&(o[s]=kA(e.patternProperties[i],t,`${n}/${s}`,o[s]));if(!Sy(e.additionalProperties))return vA(e,n,o);let s=Object.getOwnPropertyNames(o),c=e.additionalProperties,l={...o};for(let e of s)a.test(e)||(l[e]=vA(c,`${n}/${e}`,l[e]));return vA(e,n,l)}function TA(e,t,n,r){return vA(e,n,kA(bO(e,t),t,n,r))}function EA(e,t,n,r){return vA(e,n,kA(bO(e,t),t,n,r))}function DA(e,t,n,r){return dv(r)&&dv(e.items)?vA(e,n,e.items.map((e,i)=>kA(e,t,`${n}/${i}`,r[i]))):vA(e,n,r)}function OA(e,t,n,r){for(let i of e.anyOf)if(kk(i,t,r))return vA(e,n,kA(i,t,n,r));return vA(e,n,r)}function kA(e,t,n,r){let i=yO(e,t),a=e;switch(e[F]){case`Array`:return yA(a,i,n,r);case`Import`:return xA(a,i,n,r);case`Intersect`:return bA(a,i,n,r);case`Not`:return SA(a,i,n,r);case`Object`:return CA(a,i,n,r);case`Record`:return wA(a,i,n,r);case`Ref`:return TA(a,i,n,r);case`Symbol`:return vA(a,n,r);case`This`:return EA(a,i,n,r);case`Tuple`:return DA(a,i,n,r);case`Union`:return OA(a,i,n,r);default:return vA(a,n,r)}}function AA(e,t,n){return kA(e,t,``,n)}var jA=class extends kv{constructor(e,t,n){super(`The encoded value does not match the expected schema`),this.schema=e,this.value=t,this.error=n}},MA=class extends kv{constructor(e,t,n,r){super(`${r instanceof Error?r.message:`Unknown error`}`),this.schema=e,this.path=t,this.value=n,this.error=r}};function NA(e,t,n){try{return py(e)?e[Av].Encode(n):n}catch(r){throw new MA(e,t,n,r)}}function PA(e,t,n,r){let i=NA(e,n,r);return dv(i)?i.map((r,i)=>WA(e.items,t,`${n}/${i}`,r)):i}function FA(e,t,n,r){let i=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref],o=NA(e,n,r);return WA(a,[...t,...i],n,o)}function IA(e,t,n,r){let i=NA(e,n,r);if(!uv(r)||xv(r))return i;let a=AC(e),o=a.map(e=>e[0]),s={...i};for(let[e,r]of a)e in s&&(s[e]=WA(r,t,`${n}/${e}`,s[e]));if(!py(e.unevaluatedProperties))return s;let c=Object.getOwnPropertyNames(s),l=e.unevaluatedProperties,u={...s};for(let e of c)o.includes(e)||(u[e]=NA(l,`${n}/${e}`,u[e]));return u}function LA(e,t,n,r){return NA(e.not,n,NA(e,n,r))}function RA(e,t,n,r){let i=NA(e,n,r);if(!uv(i))return i;let a=yC(e),o={...i};for(let r of a)lv(o,r)&&(fv(o[r])&&(!hy(e.properties[r])||Sv.IsExactOptionalProperty(o,r))||(o[r]=WA(e.properties[r],t,`${n}/${r}`,o[r])));if(!Sy(e.additionalProperties))return o;let s=Object.getOwnPropertyNames(o),c=e.additionalProperties,l={...o};for(let e of s)a.includes(e)||(l[e]=NA(c,`${n}/${e}`,l[e]));return l}function zA(e,t,n,r){let i=NA(e,n,r);if(!uv(r))return i;let a=Object.getOwnPropertyNames(e.patternProperties)[0],o=new RegExp(a),s={...i};for(let i of Object.getOwnPropertyNames(r))o.test(i)&&(s[i]=WA(e.patternProperties[a],t,`${n}/${i}`,s[i]));if(!Sy(e.additionalProperties))return s;let c=Object.getOwnPropertyNames(s),l=e.additionalProperties,u={...s};for(let e of c)o.test(e)||(u[e]=NA(l,`${n}/${e}`,u[e]));return u}function BA(e,t,n,r){return NA(e,n,WA(bO(e,t),t,n,r))}function VA(e,t,n,r){return NA(e,n,WA(bO(e,t),t,n,r))}function HA(e,t,n,r){let i=NA(e,n,r);return dv(e.items)?e.items.map((e,r)=>WA(e,t,`${n}/${r}`,i[r])):[]}function UA(e,t,n,r){for(let i of e.anyOf)if(kk(i,t,r))return NA(e,n,WA(i,t,n,r));for(let i of e.anyOf){let a=WA(i,t,n,r);if(kk(e,t,a))return NA(e,n,a)}return NA(e,n,r)}function WA(e,t,n,r){let i=yO(e,t),a=e;switch(e[F]){case`Array`:return PA(a,i,n,r);case`Import`:return FA(a,i,n,r);case`Intersect`:return IA(a,i,n,r);case`Not`:return LA(a,i,n,r);case`Object`:return RA(a,i,n,r);case`Record`:return zA(a,i,n,r);case`Ref`:return BA(a,i,n,r);case`This`:return VA(a,i,n,r);case`Tuple`:return HA(a,i,n,r);case`Union`:return UA(a,i,n,r);default:return NA(a,n,r)}}function GA(e,t,n){return WA(e,t,``,n)}function KA(e,t){return py(e)||sj(e.items,t)}function qA(e,t){return py(e)||sj(e.items,t)}function JA(e,t){return py(e)||sj(e.returns,t)||e.parameters.some(e=>sj(e,t))}function YA(e,t){return py(e)||sj(e.returns,t)||e.parameters.some(e=>sj(e,t))}function XA(e,t){return py(e)||py(e.unevaluatedProperties)||e.allOf.some(e=>sj(e,t))}function ZA(e,t){let n=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((t,n)=>[...t,e.$defs[n]],[]),r=e.$defs[e.$ref];return py(e)||sj(r,[...n,...t])}function QA(e,t){return py(e)||sj(e.items,t)}function $A(e,t){return py(e)||sj(e.not,t)}function ej(e,t){return py(e)||Object.values(e.properties).some(e=>sj(e,t))||Sy(e.additionalProperties)&&sj(e.additionalProperties,t)}function tj(e,t){return py(e)||sj(e.item,t)}function nj(e,t){let n=Object.getOwnPropertyNames(e.patternProperties)[0],r=e.patternProperties[n];return py(e)||sj(r,t)||Sy(e.additionalProperties)&&py(e.additionalProperties)}function rj(e,t){return py(e)?!0:sj(bO(e,t),t)}function ij(e,t){return py(e)?!0:sj(bO(e,t),t)}function aj(e,t){return py(e)||!fv(e.items)&&e.items.some(e=>sj(e,t))}function oj(e,t){return py(e)||e.anyOf.some(e=>sj(e,t))}function sj(e,t){let n=yO(e,t),r=e;if(e.$id&&cj.has(e.$id))return!1;switch(e.$id&&cj.add(e.$id),e[F]){case`Array`:return KA(r,n);case`AsyncIterator`:return qA(r,n);case`Constructor`:return JA(r,n);case`Function`:return YA(r,n);case`Import`:return ZA(r,n);case`Intersect`:return XA(r,n);case`Iterator`:return QA(r,n);case`Not`:return $A(r,n);case`Object`:return ej(r,n);case`Promise`:return tj(r,n);case`Record`:return nj(r,n);case`Ref`:return rj(r,n);case`This`:return ij(r,n);case`Tuple`:return aj(r,n);case`Union`:return oj(r,n);default:return py(e)}}var cj=new Set;function lj(e,t){return cj.clear(),sj(e,t)}var uj=class{constructor(e,t,n,r){this.schema=e,this.references=t,this.checkFunc=n,this.code=r,this.hasTransform=lj(e,t)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(e){return hA(this.schema,this.references,e)}Check(e){return this.checkFunc(e)}Decode(e){if(!this.checkFunc(e))throw new gA(this.schema,e,this.Errors(e).First());return this.hasTransform?AA(this.schema,this.references,e):e}Encode(e){let t=this.hasTransform?GA(this.schema,this.references,e):e;if(!this.checkFunc(t))throw new jA(this.schema,e,this.Errors(e).First());return t}},dj;(function(e){function t(e){return e===36}e.DollarSign=t;function n(e){return e===95}e.IsUnderscore=n;function r(e){return e>=65&&e<=90||e>=97&&e<=122}e.IsAlpha=r;function i(e){return e>=48&&e<=57}e.IsNumeric=i})(dj||={});var fj;(function(e){function t(e){return e.length===0?!1:dj.IsNumeric(e.charCodeAt(0))}function n(e){if(t(e))return!1;for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(!(dj.IsAlpha(n)||dj.IsNumeric(n)||dj.DollarSign(n)||dj.IsUnderscore(n)))return!1}return!0}function r(e){return e.replace(/'/g,`\\'`)}function i(e,t){return n(t)?`${e}.${t}`:`${e}['${r(t)}']`}e.Encode=i})(fj||={});var pj;(function(e){function t(e){let t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);dj.IsNumeric(r)||dj.IsAlpha(r)?t.push(e.charAt(n)):t.push(`_${r}_`)}return t.join(``).replace(/__/g,`_`)}e.Encode=t})(pj||={});var mj;(function(e){function t(e){return e.replace(/'/g,`\\'`)}e.Escape=t})(mj||={});var hj=class extends kv{constructor(e){super(`Unknown type`),this.schema=e}},gj=class extends kv{constructor(e){super(`Preflight validation check failed to guard for the given schema`),this.schema=e}},_j;(function(e){function t(e,t,n){return Sv.ExactOptionalPropertyTypes?`('${t}' in ${e} ? ${n} : true)`:`(${fj.Encode(e,t)} !== undefined ? ${n} : true)`}e.IsExactOptionalProperty=t;function n(e){return Sv.AllowArrayObject?`(typeof ${e} === 'object' && ${e} !== null)`:`(typeof ${e} === 'object' && ${e} !== null && !Array.isArray(${e}))`}e.IsObjectLike=n;function r(e){return Sv.AllowArrayObject?`(typeof ${e} === 'object' && ${e} !== null && !(${e} instanceof Date) && !(${e} instanceof Uint8Array))`:`(typeof ${e} === 'object' && ${e} !== null && !Array.isArray(${e}) && !(${e} instanceof Date) && !(${e} instanceof Uint8Array))`}e.IsRecordLike=r;function i(e){return Sv.AllowNaN?`typeof ${e} === 'number'`:`Number.isFinite(${e})`}e.IsNumberLike=i;function a(e){return Sv.AllowNullVoid?`(${e} === undefined || ${e} === null)`:`${e} === undefined`}e.IsVoidLike=a})(_j||={});var vj;(function(e){function t(e){return e[F]===`Any`||e[F]===`Unknown`}function*n(e,t,n){yield`true`}function*r(e,t,n){yield`true`}function*i(e,t,n){yield`Array.isArray(${n})`;let[r,i]=[x(`value`,`any`),x(`acc`,`number`)];if(hv(e.maxItems)&&(yield`${n}.length <= ${e.maxItems}`),hv(e.minItems)&&(yield`${n}.length >= ${e.minItems}`),yield`((array) => { for(const ${r} of array) if(!(${ve(e.items,t,`value`)})) { return false }; return true; })(${n})`,Tb(e.contains)||hv(e.minContains)||hv(e.maxContains)){let a=ve(Tb(e.contains)?e.contains:$b(),t,`value`),o=hv(e.minContains)?[`(count >= ${e.minContains})`]:[],s=hv(e.maxContains)?[`(count <= ${e.maxContains})`]:[];yield`((${r}) => { ${`const count = value.reduce((${i}, ${r}) => ${a} ? acc + 1 : acc, 0)`}; return ${[`(count > 0)`,...o,...s].join(` && `)}})(${n})`}e.uniqueItems===!0&&(yield`((${r}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${n})`)}function*a(e,t,n){yield`(typeof value === 'object' && Symbol.asyncIterator in ${n})`}function*o(e,t,n){yield`(typeof ${n} === 'bigint')`,_v(e.exclusiveMaximum)&&(yield`${n} < BigInt(${e.exclusiveMaximum})`),_v(e.exclusiveMinimum)&&(yield`${n} > BigInt(${e.exclusiveMinimum})`),_v(e.maximum)&&(yield`${n} <= BigInt(${e.maximum})`),_v(e.minimum)&&(yield`${n} >= BigInt(${e.minimum})`),_v(e.multipleOf)&&(yield`(${n} % BigInt(${e.multipleOf})) === 0`)}function*s(e,t,n){yield`(typeof ${n} === 'boolean')`}function*c(e,t,n){yield*v(e.returns,t,`${n}.prototype`)}function*l(e,t,n){yield`(${n} instanceof Date) && Number.isFinite(${n}.getTime())`,hv(e.exclusiveMaximumTimestamp)&&(yield`${n}.getTime() < ${e.exclusiveMaximumTimestamp}`),hv(e.exclusiveMinimumTimestamp)&&(yield`${n}.getTime() > ${e.exclusiveMinimumTimestamp}`),hv(e.maximumTimestamp)&&(yield`${n}.getTime() <= ${e.maximumTimestamp}`),hv(e.minimumTimestamp)&&(yield`${n}.getTime() >= ${e.minimumTimestamp}`),hv(e.multipleOfTimestamp)&&(yield`(${n}.getTime() % ${e.multipleOfTimestamp}) === 0`)}function*u(e,t,n){yield`(typeof ${n} === 'function')`}function*d(e,t,n){let r=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((t,n)=>[...t,e.$defs[n]],[]);yield*v(iC(e.$ref),[...t,...r],n)}function*f(e,t,n){yield`Number.isInteger(${n})`,hv(e.exclusiveMaximum)&&(yield`${n} < ${e.exclusiveMaximum}`),hv(e.exclusiveMinimum)&&(yield`${n} > ${e.exclusiveMinimum}`),hv(e.maximum)&&(yield`${n} <= ${e.maximum}`),hv(e.minimum)&&(yield`${n} >= ${e.minimum}`),hv(e.multipleOf)&&(yield`(${n} % ${e.multipleOf}) === 0`)}function*p(e,t,n){let r=e.allOf.map(e=>ve(e,t,n)).join(` && `);e.unevaluatedProperties===!1?yield`(${r} && ${`Object.getOwnPropertyNames(${n}).every(key => ${b(`${new RegExp(xC(e))};`)}.test(key))`})`:Tb(e.unevaluatedProperties)?yield`(${r} && ${`Object.getOwnPropertyNames(${n}).every(key => ${b(`${new RegExp(xC(e))};`)}.test(key) || ${ve(e.unevaluatedProperties,t,`${n}[key]`)})`})`:yield`(${r})`}function*m(e,t,n){yield`(typeof value === 'object' && Symbol.iterator in ${n})`}function*h(e,t,n){typeof e.const==`number`||typeof e.const==`boolean`?yield`(${n} === ${e.const})`:yield`(${n} === '${mj.Escape(e.const)}')`}function*g(e,t,n){yield`false`}function*ee(e,t,n){yield`(!${ve(e.not,t,n)})`}function*te(e,t,n){yield`(${n} === null)`}function*ne(e,t,n){yield _j.IsNumberLike(n),hv(e.exclusiveMaximum)&&(yield`${n} < ${e.exclusiveMaximum}`),hv(e.exclusiveMinimum)&&(yield`${n} > ${e.exclusiveMinimum}`),hv(e.maximum)&&(yield`${n} <= ${e.maximum}`),hv(e.minimum)&&(yield`${n} >= ${e.minimum}`),hv(e.multipleOf)&&(yield`(${n} % ${e.multipleOf}) === 0`)}function*re(e,n,r){yield _j.IsObjectLike(r),hv(e.minProperties)&&(yield`Object.getOwnPropertyNames(${r}).length >= ${e.minProperties}`),hv(e.maxProperties)&&(yield`Object.getOwnPropertyNames(${r}).length <= ${e.maxProperties}`);let i=Object.getOwnPropertyNames(e.properties);for(let a of i){let i=fj.Encode(r,a),o=e.properties[a];if(e.required&&e.required.includes(a))yield*v(o,n,i),(bT(o)||t(o))&&(yield`('${a}' in ${r})`);else{let e=ve(o,n,i);yield _j.IsExactOptionalProperty(r,a,e)}}if(e.additionalProperties===!1&&(e.required&&e.required.length===i.length?yield`Object.getOwnPropertyNames(${r}).length === ${i.length}`:yield`Object.getOwnPropertyNames(${r}).every(key => ${`[${i.map(e=>`'${e}'`).join(`, `)}]`}.includes(key))`),typeof e.additionalProperties==`object`){let t=ve(e.additionalProperties,n,`${r}[key]`);yield`(Object.getOwnPropertyNames(${r}).every(key => ${`[${i.map(e=>`'${e}'`).join(`, `)}]`}.includes(key) || ${t}))`}}function*ie(e,t,n){yield`${n} instanceof Promise`}function*ae(e,t,n){yield _j.IsRecordLike(n),hv(e.minProperties)&&(yield`Object.getOwnPropertyNames(${n}).length >= ${e.minProperties}`),hv(e.maxProperties)&&(yield`Object.getOwnPropertyNames(${n}).length <= ${e.maxProperties}`);let[r,i]=Object.entries(e.patternProperties)[0];yield`(Object.entries(${n}).every(([key, value]) => ${`(${b(`${new RegExp(r)}`)}.test(key) ? ${ve(i,t,`value`)} : ${Tb(e.additionalProperties)?ve(e.additionalProperties,t,n):e.additionalProperties===!1?`false`:`true`})`}))`}function*oe(e,t,n){let r=bO(e,t);if(y.functions.has(e.$ref))return yield`${ye(e.$ref)}(${n})`;yield*v(r,t,n)}function*se(e,t,n){let r=b(`${new RegExp(e.source,e.flags)};`);yield`(typeof ${n} === 'string')`,hv(e.maxLength)&&(yield`${n}.length <= ${e.maxLength}`),hv(e.minLength)&&(yield`${n}.length >= ${e.minLength}`),yield`${r}.test(${n})`}function*ce(e,t,n){yield`(typeof ${n} === 'string')`,hv(e.maxLength)&&(yield`${n}.length <= ${e.maxLength}`),hv(e.minLength)&&(yield`${n}.length >= ${e.minLength}`),e.pattern!==void 0&&(yield`${b(`${new RegExp(e.pattern)};`)}.test(${n})`),e.format!==void 0&&(yield`format('${e.format}', ${n})`)}function*le(e,t,n){yield`(typeof ${n} === 'symbol')`}function*ue(e,t,n){yield`(typeof ${n} === 'string')`,yield`${b(`${new RegExp(e.pattern)};`)}.test(${n})`}function*de(e,t,n){yield`${ye(e.$ref)}(${n})`}function*fe(e,t,n){if(yield`Array.isArray(${n})`,e.items===void 0)return yield`${n}.length === 0`;yield`(${n}.length === ${e.maxItems})`;for(let r=0;r<e.items.length;r++)yield`${ve(e.items[r],t,`${n}[${r}]`)}`}function*pe(e,t,n){yield`${n} === undefined`}function*me(e,t,n){yield`(${e.anyOf.map(e=>ve(e,t,n)).join(` || `)})`}function*he(e,t,n){yield`${n} instanceof Uint8Array`,hv(e.maxByteLength)&&(yield`(${n}.length <= ${e.maxByteLength})`),hv(e.minByteLength)&&(yield`(${n}.length >= ${e.minByteLength})`)}function*ge(e,t,n){yield`true`}function*_e(e,t,n){yield _j.IsVoidLike(n)}function*_(e,t,n){let r=y.instances.size;y.instances.set(r,e),yield`kind('${e[F]}', ${r}, ${n})`}function*v(e,t,v,ve=!0){let b=vv(e.$id)?[...t,e]:t,x=e;if(ve&&vv(e.$id)){let n=ye(e.$id);if(y.functions.has(n))return yield`${n}(${v})`;{y.functions.set(n,`<deferred>`);let r=be(n,e,t,`value`,!1);return y.functions.set(n,r),yield`${n}(${v})`}}switch(x[F]){case`Any`:return yield*n(x,b,v);case`Argument`:return yield*r(x,b,v);case`Array`:return yield*i(x,b,v);case`AsyncIterator`:return yield*a(x,b,v);case`BigInt`:return yield*o(x,b,v);case`Boolean`:return yield*s(x,b,v);case`Constructor`:return yield*c(x,b,v);case`Date`:return yield*l(x,b,v);case`Function`:return yield*u(x,b,v);case`Import`:return yield*d(x,b,v);case`Integer`:return yield*f(x,b,v);case`Intersect`:return yield*p(x,b,v);case`Iterator`:return yield*m(x,b,v);case`Literal`:return yield*h(x,b,v);case`Never`:return yield*g(x,b,v);case`Not`:return yield*ee(x,b,v);case`Null`:return yield*te(x,b,v);case`Number`:return yield*ne(x,b,v);case`Object`:return yield*re(x,b,v);case`Promise`:return yield*ie(x,b,v);case`Record`:return yield*ae(x,b,v);case`Ref`:return yield*oe(x,b,v);case`RegExp`:return yield*se(x,b,v);case`String`:return yield*ce(x,b,v);case`Symbol`:return yield*le(x,b,v);case`TemplateLiteral`:return yield*ue(x,b,v);case`This`:return yield*de(x,b,v);case`Tuple`:return yield*fe(x,b,v);case`Undefined`:return yield*pe(x,b,v);case`Union`:return yield*me(x,b,v);case`Uint8Array`:return yield*he(x,b,v);case`Unknown`:return yield*ge(x,b,v);case`Void`:return yield*_e(x,b,v);default:if(!Lb(x[F]))throw new hj(e);return yield*_(x,b,v)}}let y={language:`javascript`,functions:new Map,variables:new Map,instances:new Map};function ve(e,t,n,r=!0){return`(${[...v(e,t,n,r)].join(` && `)})`}function ye(e){return`check_${pj.Encode(e)}`}function b(e){let t=`local_${y.variables.size}`;return y.variables.set(t,`const ${t} = ${e}`),t}function be(e,t,n,r,i=!0){let[a,o]=[`
`,e=>``.padStart(e,` `)],s=x(`value`,`any`),c=xe(`boolean`),l=[...v(t,n,r,i)].map(e=>`${o(4)}${e}`).join(` &&${a}`);return`function ${e}(${s})${c} {${a}${o(2)}return (${a}${l}${a}${o(2)})\n}`}function x(e,t){return`${e}${y.language===`typescript`?`: ${t}`:``}`}function xe(e){return y.language===`typescript`?`: ${e}`:``}function Se(e,t,n){let r=be(`check`,e,t,`value`),i=x(`value`,`any`),a=xe(`boolean`),o=[...y.functions.values()],s=[...y.variables.values()],c=vv(e.$id)?`return function check(${i})${a} {\n  return ${ye(e.$id)}(value)\n}`:`return ${r}`;return[...s,...o,c].join(`
`)}function Ce(...e){let t={language:`javascript`},[n,r,i]=e.length===2&&dv(e[1])?[e[0],e[1],t]:e.length===2&&!dv(e[1])?[e[0],[],e[1]]:e.length===3?[e[0],e[1],e[2]]:e.length===1?[e[0],[],t]:[null,[],t];if(y.language=i.language,y.variables.clear(),y.functions.clear(),y.instances.clear(),!Tb(n))throw new gj(n);for(let e of r)if(!Tb(e))throw new gj(e);return Se(n,r,i)}e.Code=Ce;function we(e,t=[]){let n=Ce(e,t,{language:`javascript`}),r=globalThis.Function(`kind`,`format`,`hash`,n),i=new Map(y.instances);function a(e,t,n){return!Lb(e)||!i.has(t)?!1:zb(e)(i.get(t),n)}function o(e,t){return Pb(e)?Fb(e)(t):!1}function s(e){return WO(e)}return new uj(e,t,r(a,o,s),n)}e.Compile=we})(vj||={});var yj={};function bj(e,t){e in yj||(yj[e]=t)}var xj=!1;function Sj(){xj||(xj=!0,hO(e=>(yj[e.schema[F]]||pO)(e)))}var Cj=Symbol.for(`object-shape-tester.shape-identifier`);function wj(e){if(Sj(),Tj(e))return e;let t=Oj(e),n=Dj(t,!1),r=Dj(t,!0),i={$_schema:t,$_schemaNoExtraKeys:n,$_schemaExtraKeys:r,default:t.default,$_compiledSchema:vj.Compile(t),$_compiledSchemaNoExtraKeys:vj.Compile(n),$_compiledSchemaExtraKeys:vj.Compile(r)};return Object.defineProperties(i,{runtimeType:{configurable:!1,enumerable:!1,get(){throw Error(`runtimeType cannot be used as a value, it is only for types.`)}},[Cj]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),i}function Tj(e){return j.hasKey(e,Cj)&&!!e[Cj]}function Ej(e){return j.hasKey(e,F)}function Dj(e,t){let n={...e};if(Array.isArray(e.anyOf)&&(n.anyOf=e.anyOf.map(e=>Dj(e,t))),Array.isArray(e.allOf)&&(n.allOf=e.allOf.map(e=>Dj(e,t))),Ej(e.items)?n.items=Dj(e.items,t):Array.isArray(e.items)&&(n.items=e.items.map(e=>Dj(e,t))),j.isObject(e.properties)){let r={};Object.entries(e.properties).forEach(([e,n])=>{r[e]=Dj(n,t)}),n.properties=r}return n.additionalProperties=t,n}function Oj(e){if(Ej(e))return e;if(Tj(e))return e.$_schema;if(j.isFunction(e))return fO.Function([],fO.Any(),{default:e});if(j.isObject(e)){let t={},n={};return Object.entries(e).forEach(([e,r])=>{let i=Oj(r);n[e]=i,t[e]=i.default}),fO.Object(n,{default:t})}else if(j.isArray(e))return fO.Array(fO.Union(e.map(e=>Oj(e))),{default:[]});else if(j.isPrimitive(e)){if(j.isString(e))return fO.String({default:e});if(j.isNumber(e))return fO.Number({default:e});if(j.isBoolean(e))return fO.Boolean({default:e});if(j.isSymbol(e))return fO.Symbol({default:e});if(j.isNull(e))return fO.Null({default:null});if(j.isUndefined(e))return fO.Undefined({default:void 0});if(j.isBigInt(e))return fO.BigInt({default:e});Mc.tsType(e).equals(),Mc.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw Error(`Invalid shape: ${_(e)}`)}function kj({checkValue:e,default:t,name:n}){return Lb(n)||Rb(n,(t,n)=>e(n)),(e=t)=>wj(fO.Unsafe({[F]:n,default:e}))}function Aj(e,t){let n=Ee(e);if(t!=null&&!n.includes(t))throw TypeError(`enumShape default must be a subset of the given enum.`);return wj(fO.Union(n.map(e=>fO.Literal(e)),{default:t??n[0]}))}function jj(e){return j.isSymbol(e)?Nj(e):wj(fO.Const(e,{default:e}))}var Mj=`ExactSymbol`;function Nj(e){return Lb(`ExactSymbol`)||Rb(Mj,(e,t)=>t===e.symbol),bj(Mj,({schema:e})=>`Expected symbol ${e.symbol?.description?Vl({value:e.symbol.description,wrapper:`'`}):`<unnamed symbol>`}`),wj(fO.Unsafe({[F]:Mj,symbol:e,default:e}))}function Pj(...e){let t={},n=e.map(e=>{let n=wj(e);return Object.assign(t,n.default),n.$_schema});return wj(fO.Composite(n,{default:t}))}function Fj(e,t={}){Sv.ExactOptionalPropertyTypes=!0;let n=wj(e).$_schema,r=t.alsoUndefined?fO.Union([fO.Undefined(),n]):n;return wj(fO.Optional(r))}function Ij(...e){let t,n=e.map((e,n)=>{let r=wj(e);return n||(t=r.default),r.$_schema});return wj(fO.Union(n,{default:t}))}function Lj(e){return Fj(Ij(void 0,null,e))}function Rj(e){let t=wj(e);return wj(fO.Partial(t.$_schema,{default:t.default}))}function zj(e){return Ij(e,``,-1,0n,!1,RC(),null,void 0)}var Bj=class extends TypeError{errors;failureMessage;name=`ShapeMismatchError`;constructor(e,t){let n=Ae(t,`Shape mismatch:\n${yo(e.map(e=>Hj(e)).join(`
`),1)}`);super(n),this.errors=e,this.failureMessage=t}};function Vj(e){return e.errors.flatMap(e=>Array.from(e))}function Hj(e,t=0){let n=Vj(e).map(e=>Hj(e,t+1));return[yo([e.path,e.message].filter(j.isTruthy).join(`: `)+(n.length?`:`:``),t),...n].join(`
`)}function Uj(e,t,n={}){return Gj(t,n).Check(e)}function Wj(e,t,n={},r){if(Uj(e,t,n))return;let i=Array.from(Gj(t,n).Errors(e));if(i.length)throw new Bj(i,r)}function Gj(e,t){return e=Kj(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function Kj(e){return wj(e)}function qj({exclusiveMax:e,exclusiveMin:t,...n}){let{min:r,max:i}=Ne(n),a=n.default??(i-r)/2+r,o=wj(fO.Number({...t?{exclusiveMinimum:r}:{minimum:r},...e?{exclusiveMaximum:i}:{maximum:i},default:a})),s=$c(()=>Wj(a,o));if(s)throw Me(s,`Default range value is not within range.`);return o}var Jj=`recordShape`;function Yj({keys:e,values:t,partial:n,additionalProperties:r}){Xj();let i=$j(e),a=wj(t);return wj(fO.Unsafe({[F]:Jj,keysShape:i,valuesShape:a,isPartial:!!n,additionalProperties:!!r,default:Qj({isPartial:!!n,keysShape:i,valuesShape:a})}))}function Xj(){Lb(`recordShape`)||Rb(Jj,(e,t)=>{if(typeof t!=`object`||!t||Array.isArray(t))return!1;let n=Object.entries(t).every(([t,n])=>{let r=e.additionalProperties?!0:Uj(t,e.keysShape),i=Uj(n,e.valuesShape);return r&&i}),r=e.isPartial?!0:!Zj(e.keysShape,t).length;return n&&r}),bj(Jj,e=>{let t=e.schema,n=e.value;if(typeof n!=`object`||!n||Array.isArray(n))return`Expected an object`;let r=Gc(Object.entries(n),([e])=>e,(e,[n,r])=>!Uj(n,t.keysShape)||!Uj(r,t.valuesShape)),i=Zj(t.keysShape,n);return[r.length?[`Failure at keys`,r.join(`,`)].join(`: `):``,i.length?[`Missing keys`,i.join(`,`)].join(`: `):``].filter(j.isTruthy).join(`
`)})}function Zj(e,t){let n=eM(e).filter(e=>j.isPropertyKey(e));return n.length?n.filter(e=>!j.hasKey(t,e)):[]}function Qj({keysShape:e,valuesShape:t,isPartial:n}){if(n)return{};{let n=eM(e),r=t.default;return Object.fromEntries(n.map(e=>[e,r]))}}function $j(e){return Tj(e)?e:Ej(e)?wj(e):j.isObject(e)?Aj(e):j.isArray(e)&&j.isLengthAtLeast(e,1)?Ij(...e.map(e=>jj(e))):j.isPropertyKey(e)?wj(e):wj(fO.Undefined())}function eM(e){let t=e.$_schema,n=t[F].toLowerCase();return[`const`,`literal`].includes(n)?[t.const]:n===`union`?i(t.anyOf.flatMap(e=>eM(wj(e)))):[`undefined`,`number`,`string`,`symbol`].includes(n)?[]:eM($j(e.default))}function tM(e){return wj(fO.Unknown({default:e}))}var nM=`Africa/Abidjan.Africa/Accra.Africa/Addis_Ababa.Africa/Algiers.Africa/Asmara.Africa/Bamako.Africa/Bangui.Africa/Banjul.Africa/Bissau.Africa/Blantyre.Africa/Brazzaville.Africa/Bujumbura.Africa/Cairo.Africa/Casablanca.Africa/Ceuta.Africa/Conakry.Africa/Dakar.Africa/Dar_es_Salaam.Africa/Djibouti.Africa/Douala.Africa/El_Aaiun.Africa/Freetown.Africa/Gaborone.Africa/Harare.Africa/Johannesburg.Africa/Juba.Africa/Kampala.Africa/Khartoum.Africa/Kigali.Africa/Kinshasa.Africa/Lagos.Africa/Libreville.Africa/Lome.Africa/Luanda.Africa/Lubumbashi.Africa/Lusaka.Africa/Malabo.Africa/Maputo.Africa/Maseru.Africa/Mbabane.Africa/Mogadishu.Africa/Monrovia.Africa/Nairobi.Africa/Ndjamena.Africa/Niamey.Africa/Nouakchott.Africa/Ouagadougou.Africa/Porto-Novo.Africa/Sao_Tome.Africa/Timbuktu.Africa/Tripoli.Africa/Tunis.Africa/Windhoek.America/Adak.America/Anchorage.America/Anguilla.America/Antigua.America/Araguaina.America/Argentina/Buenos_Aires.America/Argentina/Catamarca.America/Argentina/ComodRivadavia.America/Argentina/Cordoba.America/Argentina/Jujuy.America/Argentina/La_Rioja.America/Argentina/Mendoza.America/Argentina/Rio_Gallegos.America/Argentina/Salta.America/Argentina/San_Juan.America/Argentina/San_Luis.America/Argentina/Tucuman.America/Argentina/Ushuaia.America/Aruba.America/Asuncion.America/Atikokan.America/Bahia.America/Bahia_Banderas.America/Barbados.America/Belem.America/Belize.America/Blanc-Sablon.America/Boa_Vista.America/Bogota.America/Boise.America/Cambridge_Bay.America/Campo_Grande.America/Cancun.America/Caracas.America/Cayenne.America/Cayman.America/Chicago.America/Chihuahua.America/Coral_Harbour.America/Costa_Rica.America/Creston.America/Cuiaba.America/Curacao.America/Danmarkshavn.America/Dawson.America/Dawson_Creek.America/Denver.America/Detroit.America/Dominica.America/Edmonton.America/Eirunepe.America/El_Salvador.America/Ensenada.America/Fort_Nelson.America/Fortaleza.America/Glace_Bay.America/Goose_Bay.America/Grand_Turk.America/Grenada.America/Guadeloupe.America/Guatemala.America/Guayaquil.America/Guyana.America/Halifax.America/Havana.America/Hermosillo.America/Indiana/Indianapolis.America/Indiana/Knox.America/Indiana/Marengo.America/Indiana/Petersburg.America/Indiana/Tell_City.America/Indiana/Vevay.America/Indiana/Vincennes.America/Indiana/Winamac.America/Inuvik.America/Iqaluit.America/Jamaica.America/Juneau.America/Kentucky/Louisville.America/Kentucky/Monticello.America/La_Paz.America/Lima.America/Los_Angeles.America/Maceio.America/Managua.America/Manaus.America/Martinique.America/Matamoros.America/Mazatlan.America/Menominee.America/Merida.America/Metlakatla.America/Mexico_City.America/Miquelon.America/Moncton.America/Monterrey.America/Montevideo.America/Montreal.America/Montserrat.America/Nassau.America/New_York.America/Nipigon.America/Nome.America/Noronha.America/North_Dakota/Beulah.America/North_Dakota/Center.America/North_Dakota/New_Salem.America/Nuuk.America/Ojinaga.America/Panama.America/Pangnirtung.America/Paramaribo.America/Phoenix.America/Port-au-Prince.America/Port_of_Spain.America/Porto_Velho.America/Puerto_Rico.America/Punta_Arenas.America/Rainy_River.America/Rankin_Inlet.America/Recife.America/Regina.America/Resolute.America/Rio_Branco.America/Rosario.America/Santarem.America/Santiago.America/Santo_Domingo.America/Sao_Paulo.America/Scoresbysund.America/Sitka.America/St_Johns.America/St_Kitts.America/St_Lucia.America/St_Thomas.America/St_Vincent.America/Swift_Current.America/Tegucigalpa.America/Thule.America/Thunder_Bay.America/Tijuana.America/Toronto.America/Tortola.America/Vancouver.America/Whitehorse.America/Winnipeg.America/Yakutat.America/Yellowknife.Antarctica/Casey.Antarctica/Davis.Antarctica/DumontDUrville.Antarctica/Macquarie.Antarctica/Mawson.Antarctica/McMurdo.Antarctica/Palmer.Antarctica/Rothera.Antarctica/Syowa.Antarctica/Troll.Antarctica/Vostok.Asia/Aden.Asia/Almaty.Asia/Amman.Asia/Anadyr.Asia/Aqtau.Asia/Aqtobe.Asia/Ashgabat.Asia/Atyrau.Asia/Baghdad.Asia/Bahrain.Asia/Baku.Asia/Bangkok.Asia/Barnaul.Asia/Beirut.Asia/Bishkek.Asia/Brunei.Asia/Chita.Asia/Choibalsan.Asia/Chongqing.Asia/Colombo.Asia/Damascus.Asia/Dhaka.Asia/Dili.Asia/Dubai.Asia/Dushanbe.Asia/Famagusta.Asia/Gaza.Asia/Harbin.Asia/Hebron.Asia/Ho_Chi_Minh.Asia/Hong_Kong.Asia/Hovd.Asia/Irkutsk.Asia/Jakarta.Asia/Jayapura.Asia/Jerusalem.Asia/Kabul.Asia/Kamchatka.Asia/Karachi.Asia/Kashgar.Asia/Kathmandu.Asia/Khandyga.Asia/Kolkata.Asia/Krasnoyarsk.Asia/Kuala_Lumpur.Asia/Kuching.Asia/Kuwait.Asia/Macau.Asia/Magadan.Asia/Makassar.Asia/Manila.Asia/Muscat.Asia/Nicosia.Asia/Novokuznetsk.Asia/Novosibirsk.Asia/Omsk.Asia/Oral.Asia/Phnom_Penh.Asia/Pontianak.Asia/Pyongyang.Asia/Qatar.Asia/Qostanay.Asia/Qyzylorda.Asia/Riyadh.Asia/Sakhalin.Asia/Samarkand.Asia/Seoul.Asia/Shanghai.Asia/Singapore.Asia/Srednekolymsk.Asia/Taipei.Asia/Tashkent.Asia/Tbilisi.Asia/Tehran.Asia/Tel_Aviv.Asia/Thimphu.Asia/Tokyo.Asia/Tomsk.Asia/Ulaanbaatar.Asia/Urumqi.Asia/Ust-Nera.Asia/Vientiane.Asia/Vladivostok.Asia/Yakutsk.Asia/Yangon.Asia/Yekaterinburg.Asia/Yerevan.Atlantic/Azores.Atlantic/Bermuda.Atlantic/Canary.Atlantic/Cape_Verde.Atlantic/Faroe.Atlantic/Jan_Mayen.Atlantic/Madeira.Atlantic/Reykjavik.Atlantic/South_Georgia.Atlantic/St_Helena.Atlantic/Stanley.Australia/Adelaide.Australia/Brisbane.Australia/Broken_Hill.Australia/Currie.Australia/Darwin.Australia/Eucla.Australia/Hobart.Australia/Lindeman.Australia/Lord_Howe.Australia/Melbourne.Australia/Perth.Australia/Sydney.CET.CST6CDT.EET.EST.EST5EDT.Etc/GMT+1.Etc/GMT+10.Etc/GMT+11.Etc/GMT+12.Etc/GMT+2.Etc/GMT+3.Etc/GMT+4.Etc/GMT+5.Etc/GMT+6.Etc/GMT+7.Etc/GMT+8.Etc/GMT+9.Etc/GMT-1.Etc/GMT-10.Etc/GMT-11.Etc/GMT-12.Etc/GMT-13.Etc/GMT-14.Etc/GMT-2.Etc/GMT-3.Etc/GMT-4.Etc/GMT-5.Etc/GMT-6.Etc/GMT-7.Etc/GMT-8.Etc/GMT-9.Europe/Amsterdam.Europe/Andorra.Europe/Astrakhan.Europe/Athens.Europe/Belfast.Europe/Belgrade.Europe/Berlin.Europe/Brussels.Europe/Bucharest.Europe/Budapest.Europe/Chisinau.Europe/Copenhagen.Europe/Dublin.Europe/Gibraltar.Europe/Guernsey.Europe/Helsinki.Europe/Isle_of_Man.Europe/Istanbul.Europe/Jersey.Europe/Kaliningrad.Europe/Kirov.Europe/Kyiv.Europe/Lisbon.Europe/Ljubljana.Europe/London.Europe/Luxembourg.Europe/Madrid.Europe/Malta.Europe/Minsk.Europe/Monaco.Europe/Moscow.Europe/Oslo.Europe/Paris.Europe/Prague.Europe/Riga.Europe/Rome.Europe/Samara.Europe/Sarajevo.Europe/Saratov.Europe/Simferopol.Europe/Skopje.Europe/Sofia.Europe/Stockholm.Europe/Tallinn.Europe/Tirane.Europe/Tiraspol.Europe/Ulyanovsk.Europe/Uzhgorod.Europe/Vaduz.Europe/Vienna.Europe/Vilnius.Europe/Volgograd.Europe/Warsaw.Europe/Zagreb.Europe/Zaporozhye.Europe/Zurich.HST.Indian/Antananarivo.Indian/Chagos.Indian/Christmas.Indian/Cocos.Indian/Comoro.Indian/Kerguelen.Indian/Mahe.Indian/Maldives.Indian/Mauritius.Indian/Mayotte.Indian/Reunion.MET.MST.MST7MDT.PST8PDT.Pacific/Apia.Pacific/Auckland.Pacific/Bougainville.Pacific/Chatham.Pacific/Chuuk.Pacific/Easter.Pacific/Efate.Pacific/Enderbury.Pacific/Fakaofo.Pacific/Fiji.Pacific/Funafuti.Pacific/Galapagos.Pacific/Gambier.Pacific/Guadalcanal.Pacific/Guam.Pacific/Honolulu.Pacific/Johnston.Pacific/Kanton.Pacific/Kiritimati.Pacific/Kosrae.Pacific/Kwajalein.Pacific/Majuro.Pacific/Marquesas.Pacific/Midway.Pacific/Nauru.Pacific/Niue.Pacific/Norfolk.Pacific/Noumea.Pacific/Pago_Pago.Pacific/Palau.Pacific/Pitcairn.Pacific/Pohnpei.Pacific/Port_Moresby.Pacific/Rarotonga.Pacific/Saipan.Pacific/Tahiti.Pacific/Tarawa.Pacific/Tongatapu.Pacific/Wake.Pacific/Wallis.UTC.WET`.split(`.`).reduce((e,t)=>(e[t]=t,e),{});mn.defaultZone.name;var rM=nM.UTC,iM=wj({hour:qj({...Za,default:Za.min}),minute:qj({...Qa,default:Qa.min}),second:qj({...$a,default:$a.min}),millisecond:qj({...eo,default:eo.min}),timezone:Aj(nM,rM)});wj(Pj(wj({year:2023,month:qj({...uo,default:uo.min}),day:qj({...fo,default:fo.min}),timezone:Aj(nM,rM)}),iM)),to.Years,to.Months,to.Weeks,to.Days,to.Hours,to.Minutes,to.Seconds,to.Milliseconds,wj(Ij({get:jj(O.Month),in:Ij(jj(O.Year))},{get:jj(O.Week),in:Ij(jj(O.Year),jj(O.Month))},{get:jj(O.Day),in:Ij(jj(O.Year),jj(O.Month),jj(O.Week))},{get:jj(O.Hour),in:Ij(jj(O.Year),jj(O.Month),jj(O.Week),jj(O.Day))},{get:jj(O.Minute),in:Ij(jj(O.Year),jj(O.Month),jj(O.Week),jj(O.Day),jj(O.Hour))},{get:jj(O.Second),in:Ij(jj(O.Year),jj(O.Month),jj(O.Week),jj(O.Day),jj(O.Hour),jj(O.Minute))},{get:jj(O.Millisecond),in:Ij(jj(O.Year),jj(O.Month),jj(O.Week),jj(O.Day),jj(O.Hour),jj(O.Minute),jj(O.Second))})),Yj({keys:Aj(to),values:-1,partial:!0});var aM;(function(e){e.Date=`date`,e.Time=`time`,e.DateTime=`datetime-local`})(aM||={});var oM;(function(e){e.Hour=`hour`,e.Minute=`minute`,e.Second=`second`,e.Millisecond=`millisecond`})(oM||={});var sM;(function(e){e.Year=`year`,e.Month=`month`,e.Day=`day`})(sM||={}),Nl({year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Ee(oM)),kj({default:new Date().toISOString(),name:`UtcIsoString`,checkValue(e){return cM(e)}});function cM(e){return Ya.fromISO(e).toUTC().toISO()===e}Ya.DATE_SHORT,Ya.DATE_MED,Ya.DATE_MED_WITH_WEEKDAY,Ya.DATE_FULL,Ya.DATE_HUGE,Ya.TIME_SIMPLE,Ya.TIME_WITH_SECONDS,Ya.TIME_WITH_SHORT_OFFSET,Ya.TIME_WITH_LONG_OFFSET,Ya.TIME_24_SIMPLE,Ya.TIME_24_WITH_SECONDS,Ya.TIME_24_WITH_SHORT_OFFSET,Ya.TIME_24_WITH_LONG_OFFSET,Ya.DATETIME_SHORT,Ya.DATETIME_SHORT_WITH_SECONDS,Ya.DATETIME_MED,Ya.DATETIME_MED_WITH_SECONDS,Ya.DATETIME_MED_WITH_WEEKDAY,Ya.DATETIME_FULL,Ya.DATETIME_FULL_WITH_SECONDS,Ya.DATETIME_HUGE,Ya.DATETIME_HUGE_WITH_SECONDS;var lM=wj({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:tM()});function uM(e){return Uj(e,lM,{allowExtraKeys:!0})}var dM=class extends A_{value;equalityCheck;constructor(e){super(),this.value=e.defaultValue,this.equalityCheck=`equalityCheck`in e?e.equalityCheck:j_}setValue(e){return super.setValue(e)}listen(e,t){return super.listen(e,t)}removeListener(e){return super.removeListener(e)}},{I:fM}=Dd,pM=e=>e,mM=()=>document.createComment(``),hM=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new fM(r.insertBefore(mM(),i),r.insertBefore(mM(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=pM(e).nextSibling;pM(r).insertBefore(e,i),e=t}}}return n},gM=(e,t,n=e)=>(e._$AI(t,n),e),_M={},vM=(e,t=_M)=>e._$AH=t,yM=e=>e._$AH,bM=e=>{e._$AR(),e._$AA.remove()},xM={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},SM=e=>(...t)=>({_$litDirective$:e,values:t}),CM=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},wM={attribute:!0,type:String,converter:Vu,reflect:!1,hasChanged:Hu},TM=(e=wM,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function EM(e){return(t,n)=>typeof n==`object`?TM(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}var DM=SM(class extends CM{constructor(e){if(super(e),e.type!==xM.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return pd}}),OM=e=>e??M;function*kM(e,t){let n=typeof t==`function`;if(e!==void 0){let r=-1;for(let i of e)r>-1&&(yield n?t(r):t),r++,yield i}}var AM=class extends CM{constructor(e){if(super(e),this.it=M,e.type!==xM.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===M||e==null)return this._t=void 0,this.it=e;if(e===pd)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};AM.directiveName=`unsafeHTML`,AM.resultType=1;var jM=SM(AM);function MM(e,t,n){return e?t(e):n?.(e)}var NM=class extends jd{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds};function PM(e,t,n){let r=!t.length&&!n.length,i=e.length?!1:!t.filter(e=>!!e.index).length;if(r||i)return[...e];let a=e.map(e=>[e]);return a.length||(a[0]=[]),n.forEach(t=>{t>=0&&t<e.length&&(a[t]=[])}),t.forEach(e=>{let t=a[e.index];t&&t.splice(0,0,...e.values)}),a.flat()}function FM(e){return j.hasKey(e,`_elementVirIsMinimalDefinitionWithInputs`)&&!!e._elementVirIsMinimalDefinitionWithInputs}function IM(e){return j.hasKey(e,`tagName`)&&!!e.tagName&&typeof e.tagName==`string`}function LM(e){return Gc(e,e=>{if(FM(e))return e.definition;if(IM(e))return e.tagInterpolationKey||e},j.isTruthy)}var RM=new WeakMap;function zM(e,t){return VM(RM,[e,...LM(t)]).value?.template}function BM(e,t,n){return UM(RM,[e,...LM(t)],n)}function VM(e,t,n=0){let{currentTemplateAndNested:r,reason:i}=HM(e,t,n);return r?n===t.length-1?{value:r,reason:`reached end of keys array`}:r.nested?VM(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function HM(e,t,n){let r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};let i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:`key and value exists`}}function UM(e,t,n,r=0){let{currentTemplateAndNested:i,currentKey:a,reason:o}=HM(e,t,r);if(!a)return{result:!1,reason:o};let s=i??{nested:void 0,template:void 0};if(i||e.set(a,s),r===t.length-1)return s.template=n,{result:!0,reason:`set value at end of keys array`};let c=s.nested??new WeakMap;return s.nested||=c,UM(c,t,n,r+1)}function WM(e,t,n){let r=zM(e,t),i=r??n();if(!r){let n=BM(e,t,i);if(!n.result)throw Error(`Failed to set template transform: ${n.reason}`)}let a=i.valuesTransform(t),o=PM(t,a.valueInsertions,a.valueIndexDeletions);return{strings:i.templateStrings,values:o}}function GM(e,t,n,r){let i=[],a=[],o=[],s=[];return e.forEach((c,l)=>{let u=i.length-1,d=i[u],f=l-1,p=t[f];r&&r(c);let m,h=[];if(typeof d==`string`&&(m=n(d,c,p),m)){i[u]=[d,m.replacement].join(``),o.push(f);let e=m.getExtraValues;h=e?e(p):[],h.length&&e?(i[u]+=` `,h.forEach((e,t)=>{t&&i.push(` `)}),s.push(t=>{let n=t[f];return{index:f,values:e(n)}}),i.push(c)):i[u]+=c}m||i.push(c);let g=e.raw[l];m?(a[u]=[a[u],m.replacement,g].join(``),h.length&&h.forEach(()=>{a.push(``)})):a.push(g)}),{templateStrings:Object.assign([],i,{raw:a}),valuesTransform(e){return{valueIndexDeletions:o,valueInsertions:s.flatMap(t=>t(e))}}}}function KM(...[e,t,n]){if(IM(n))return{replacement:n.tagName,getExtraValues:void 0}}function qM(e,t){return GM(e,t,KM)}function z(e,...t){let n=WM(e,t,()=>qM(e,t));return Du(n.strings,...n.values)}var JM={allowPolymorphicState:!1,errorHandler:void 0};function YM(e,t){let n=e.instanceState;S(t).forEach(r=>{if(n&&r in n)throw Error(`Cannot set input '${String(r)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);`instanceInputs`in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),`instanceInputs`in e&&S(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}var XM=class extends CustomEvent{_type=``;get type(){return this._type}constructor(e,t){super(typeof e==`string`?e:e.type,{detail:t,bubbles:!0,composed:!0})}};function ZM(){return e=>class extends XM{static type=e;_type=e;constructor(t){super(e,t)}}}function QM(){return ZM()}function $M(e,t){return t?Object.keys(t).filter(e=>{if(typeof e!=`string`)throw TypeError(`Expected event key of type string but got type '${typeof e}' for key ${String(e)}`);if(e===``)throw Error(`Got empty string for events key.`);return!0}).reduce((t,n)=>(t[n]=ZM()([e,n].join(`-`)),t),{}):{}}function eN(e){return e?jl(e,e=>e):{}}function tN(e,t){t in e||EM()(e,t)}function nN(e,t,n){if(typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`)throw TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function rN(e,t){let n=e;function r(n){t?nN(n,e,e.tagName):tN(e,n)}function i(e,t){return r(t),n[t]}return new Proxy({},{get:i,set(t,i,a){r(i);let o=n[i];function s(e){t[i]=e,n[i]=e}let c=e.observablePropertyListenerMap[i];if(o!==a&&uM(o)&&c&&o.removeListener(c),uM(a))if(c)a.listen(!1,c);else{function t(){e.requestUpdate()}e.observablePropertyListenerMap[i]=t,a.listen(!1,t)}else uM(o)&&(e.observablePropertyListenerMap[i]=void 0);return s(a),!0},ownKeys(e){return Reflect.ownKeys(e)},getOwnPropertyDescriptor(e,t){if(t in e)return{get value(){return i(e,t)},configurable:!0,enumerable:!0}},has(e,t){return Reflect.has(e,t)}})}function iN(e,t){let n=[e,`-`].join(``);Object.keys(t).forEach(t=>{if(!t.startsWith(n))throw Error(`Invalid element string name '${t}' in '${e}': element string names must begin with the element's tag name.`)})}function aN(e,t,n){return n?Kc(n,n=>({key:n,value:[e,t,n].join(`-`)}),{useRequired:!0}):{}}function oN({hostClassNames:e,cssVars:t}){return{hostClasses:jl(e,(e,t)=>({name:Eu(t),selector:Eu(`:host(.${t})`)})),cssVars:t}}function sN({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&S(t).forEach(a=>{let o=t[a],s=n[a];typeof o==`function`&&(o({state:r,inputs:i})?e.classList.add(s):e.classList.remove(s))})}function cN({element:e,eventsMap:t,cssVars:n,slotNamesMap:r,testIdsMap:i}){function a(t){S(t).forEach(n=>{let r=t[n];e.instanceState[n]=r})}return{cssVars:n,slotNames:r,testIds:i,dispatch:t=>e.dispatchEvent(t),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:a}}function lN(...e){return Mc.isEmpty(e),e=>{let t=e;if(!j.isObject(t))throw TypeError("Cannot define element with non-object init: ${init}");return uN({...t,options:{...t.options}})}}function uN(e){if(!j.isObject(e))throw TypeError("Cannot define element with non-object init: ${init}");if(!j.isString(e.tagName))throw TypeError(`Missing valid tagName (expected a string).`);if(!e.render||typeof e.render==`string`)throw Error(`Failed to define element '${e.tagName}': render is not a function`);let t={...JM,...e.options},n=$M(e.tagName,e.events),r=eN(e.hostClasses);e.hostClasses&&iN(e.tagName,e.hostClasses),e.cssVars&&iN(e.tagName,e.cssVars);let i=e.cssVars?Rd(e.cssVars):{},a=aN(e.tagName,`slot`,e.slotNames),o=aN(e.tagName,`test-id`,e.testIds),s=typeof e.styles==`function`?e.styles(oN({hostClassNames:r,cssVars:i})):e.styles||z``,c=e.render;function l(...[e]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:u,inputs:e}}let u=class extends NM{static elementOptions=t;static tagName=e.tagName;static styles=s;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return cN({element:this,eventsMap:n,cssVars:i,slotNamesMap:a,testIdsMap:o})}static assign=l;static events=n;static render=c;static hostClasses=r;static cssVars=i;static init=e;static slotNames=a;static testIds=o;get InstanceType(){throw Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;let t=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;let n=e.state(t);if(n instanceof Promise)throw TypeError(`init cannot be asynchronous`);S(n).forEach(e=>{tN(this,e),this.instanceState[e]=n[e]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(t)instanceof Promise))throw TypeError(`init cannot be asynchronous`);let n=c(t);if(n instanceof Promise)throw TypeError(`render cannot be asynchronous`);return sN({host:t.host,hostClassesInit:e.hostClasses,hostClassNames:r,state:t.state,inputs:t.inputs}),this._lastRenderedProps={inputs:{...t.inputs},state:{...t.state}},n}catch(n){let r=Me(n,`Failed to render ${e.tagName}`);return console.error(r),this._lastRenderError=r,t.errorHandler?.(r),C(r)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;let t=this.createRenderParams();if(e.init(t)instanceof Promise)throw TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(e=>{j.hasKey(e,`destroy`)&&j.isFunction(e.destroy)&&e.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup&&this._stateCalled){let t=this.createRenderParams();if(e.cleanup(t)instanceof Promise)throw TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(e){YM(this,e)}observablePropertyListenerMap={};instanceInputs=rN(this,!1);instanceState=rN(this,!t.allowPolymorphicState);constructor(){super(),this.definition=u}};return Object.defineProperties(u,{name:{value:zl(e.tagName,{firstLetterCase:Il.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,u)),u}var dN=class extends P_{isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}};function fN(e){return new dN(e)}var pN=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},mN=SM(class extends CM{constructor(e){if(super(e),e.type!==xM.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=yM(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,d=0,f=i.length-1,p=0,m=a.length-1;for(;d<=f&&p<=m;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(s[d]===o[p])c[p]=gM(i[d],a[p]),d++,p++;else if(s[f]===o[m])c[m]=gM(i[f],a[m]),f--,m--;else if(s[d]===o[m])c[m]=gM(i[d],a[m]),hM(e,c[m+1],i[d]),d++,m--;else if(s[f]===o[p])c[p]=gM(i[f],a[p]),hM(e,i[d],i[f]),f--,p++;else if(l===void 0&&(l=pN(o,p,m),u=pN(s,d,f)),l.has(s[d]))if(l.has(s[f])){let t=u.get(o[p]),n=t===void 0?null:i[t];if(n===null){let t=hM(e,i[d]);gM(t,a[p]),c[p]=t}else c[p]=gM(n,a[p]),hM(e,i[d],n),i[t]=null;p++}else bM(i[f]),f--;else bM(i[d]),d++;for(;p<=m;){let t=hM(e,c[m+1]);gM(t,a[p]),c[p++]=t}for(;d<=f;){let e=i[d++];e!==null&&bM(e)}return this.ut=o,vM(e,c),pd}});function hN(e,t){return _N(e,t),e.element}function gN(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function _N(e,t){let n=gN(e),r=n?`: in ${n}`:``;if(e.type!==xM.ELEMENT)throw Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw Error(`${t} directive found no element${r}.`)}function vN(e,t){return SM(class extends CM{element;constructor(t){super(t),this.element=Dc.instanceOf(hN(t,e),HTMLElement)}render(...e){return t({params:e,directive:this,element:this.element}),pd}})}var yN=vN(`attributes`,({element:e,params:[t],directive:n})=>{if(!t)return;let r=Hc(n,`allAttributesApplied`,()=>new Set);S(t).forEach(e=>{if(e.toLowerCase()!==e)throw Error(`Cannot assign attribute name with uppercase letters: ${e}`);r.add(e)}),r.forEach(n=>{let r=t[n];r==null||r===!1||r===M?e.removeAttribute(n):r===``||r===!0?e.setAttribute(n,``):e.setAttribute(n,String(r))})});function bN(e){let t=SM(class extends CM{element;constructor(t){super(t),this.element=hN(t,e)}render(t){return this.element.setAttribute(e,t),pd}});return{attributeSelector(t){return`[${e}="${t}"]`},attributeDirective(e){return t(e)},attributeName:e}}function xN(e,t){return SN(e,t)}var SN=SM(class extends CM{element;lastListenerMetaData;constructor(e){super(e),this.element=hN(e,`listen`)}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:e=>this.lastListenerMetaData?.callback(e)}}render(e,t){let n=typeof e==`string`?e:e.type;if(typeof n!=`string`)throw TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(n)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),pd}});function CN(e){return xN(`keydown`,async t=>{let n=t.code.toLowerCase();(n.includes(`enter`)||n.includes(`return`)||n===`space`)&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}var wN=`onDomCreated`,TN=SM(class extends CM{element;constructor(e){super(e),_N(e,wN)}update(e,[t]){_N(e,wN);let n=e.element;return n!==this.element&&(window.requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),EN=`onDomRendered`,DN=SM(class extends CM{constructor(e){super(e),_N(e,EN)}update(e,[t]){_N(e,EN);let n=e.element;return window.requestAnimationFrame(()=>t(n)),this.render(t)}render(e){}}),ON=`onResize`,kN=SM(class extends CM{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&AN(this.element,this.callback,e)});callback;constructor(e){super(e),_N(e,ON)}update(e,[t]){_N(e,ON),this.callback=t;let n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function AN(e,t,n){let r=n[0];if(!r)throw console.error(n),Error(`Resize observation triggered but the first entry was empty.`);t({target:r.target,contentRect:r.contentRect},e)}function jN(e,t,n,r,i={}){let a=i.useLastResolvedValue?e.lastResolvedValue:e.value;return a instanceof Error?r?r(a):C(a):j.isPromiseLike(a)||i.useLastResolvedValue&&a===void 0?t:n?n(a):a}function MN(e,t,n){return MM(e,()=>t,()=>n)}var{attributeDirective:NN,attributeSelector:PN,attributeName:FN}=bN(`data-test-id`),IN=NN;function LN(e){let{assertInputs:t,transformInputs:n}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(e=>e)};return(...e)=>r=>(t(r),lN(...e)(n(r)))}var RN=!1;function zN(e,t){return t?BN(e,t):BN(void 0,e)}var BN=SM(class extends CM{element;constructor(e){super(e),this.element=hN(e,`assign`)}render(e,t){return YM(this.element,t),pd}}),VN={};function HN(e,t){return t.map((t,n)=>{let r=e[n],i=e[n+1];if(r&&i){let{shouldHaveTagNameHere:e}=UN(r,i);if(e&&j.isString(t))return{tagName:t,tagInterpolationKey:Hc(VN,t,()=>({tagName:t}))}}return t})}function UN(e,t){let n=e.trim().endsWith(`<`)&&!!t.match(/^[\s>]/),r=e.trim().endsWith(`</`)&&t.trim().startsWith(`>`);return{isOpeningTag:n,shouldHaveTagNameHere:n||r}}function WN(...[e,t,n]){let r=FM(n)?n.definition:n,{isOpeningTag:i,shouldHaveTagNameHere:a}=UN(e,t),o=IM(r);if(o&&a&&r.tagInterpolationKey)return{replacement:r.tagName,getExtraValues:void 0};if(a&&!o)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:r}),Error(`Got interpolated tag name but found no tag name on the given value: '${r?.tagName||r?.prototype?.constructor?.name||r?.constructor?.name}'`);return!a||!o?void 0:{replacement:r.tagName,getExtraValues(e){let t=FM(e)?e.inputs:void 0;return[i&&t?zN(t):void 0].filter(j.isTruthy)}}}function GN(e){return hl(e,/<\/\s*[^\s><]+\s*>/g).reduce((e,t)=>{let n=Fl(t.replace(/\n/g,` `)).replace(/<\/|>/g,``);return n.includes(`-`)?e.concat(n):e},[])}function KN(e){if(RN){let t=GN(e);t.length&&console.error(`Custom element tags must be interpolated from declarative elements: ${t.join(`, `)}`)}}function qN(e){return GM(e.strings,e.values,WN,KN)}function B(e,...t){let n=HN(e,t),r=fd(e,...n),i=WM(e,n,()=>qN(r));return{...r,strings:i.strings,values:i.values}}function JN(e){if(`templateString`in e)return e.templateString;let{strings:t,values:n}=e;if(!t?.length&&!n?.length)return``;let r=[...n||[],``];return Fl((t??[``]).map((e,t)=>`${e}${YN(e,r[t])}`).join(``))}function YN(e,t){return t._$litType$!=null||t._$litDirective$!=null?JN(t):Array.isArray(t)?t.map(e=>JN(e)).join(``):e.endsWith(`=`)?`"${t}"`:t}var V=Rd({"vira-icon-stroke-color":`currentColor`,"vira-icon-fill-color":`none`,"vira-icon-stroke-width":`1.5px`});function H({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}var XN=H({name:`Check24Icon`,svgTemplate:B`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
        </svg>
    `});function ZN(e){return j.isPrimitive(e)||e instanceof Tu?String(e):e.default}function QN(e,t,n,r){let i=`${n.prefix}-default-fg`,a=`${n.prefix}-default-bg`;if(j.isPrimitive(t)||t instanceof Tu)return t;if(`refDefaultBackground`in t)return`var(--${a}, ${ZN(n.background)})`;if(`refDefaultForeground`in t)return`var(--${i}, ${ZN(n.foreground)})`;if(`refBackground`in t||`refForeground`in t){let o=j.hasKey(t,`refBackground`)?`refBackground`:j.hasKey(t,`refForeground`)?`refForeground`:void 0,s=o&&j.hasKey(t,o)?t[o]:void 0,c=o===`refBackground`?`background`:`foreground`,l=s&&r[s];if(!l)throw Error(`Color theme ${o} reference '${s}' does not exist. (Referenced from '${e}'.)`);let u=l[c]||(c===`foreground`?QN(i,n.foreground,n,r):QN(a,n.background,n,r));return`var(--${s}-${c===`foreground`?`fg`:`bg`}, ${QN(s,u,n,r)})`}else return t.value}var $N=`theme-default`;function eP(e,t){try{if(`theme-default`in t)throw Error(`Cannot define theme color by name '${$N}', it is used internally.`);let n=`${e.prefix}-default-fg`,r=`${e.prefix}-default-bg`,i=`${e.prefix}-default-inverse-fg`,a=`${e.prefix}-default-inverse-bg`,o=Rd({[n]:QN(n,e.foreground,e,t),[r]:QN(r,e.background,e,t),[i]:QN(i,e.background,e,t),[a]:QN(a,e.foreground,e,t)}),s=Rd(Uc(t).reduce((i,[a,s])=>{let c=tP(a),l=s.foreground?QN([a,`foreground`].join(` `),s.foreground,e,t):`var(${o[n].name}, ${o[n].default})`,u=s.background?QN([a,`background`].join(` `),s.background,e,t):`var(${o[r].name}, ${o[r].default})`;return i[c.foreground]=l,i[c.background]=u,i[c.foregroundInverse]=`var(--${c.background}, ${u})`,i[c.backgroundInverse]=`var(--${c.foreground}, ${l})`,i},{})),c={},l={};Uc(t).forEach(([e,t])=>{Mc.isString(e);let n=tP(e),r=s[n.foreground],i=s[n.background],a=s[n.foregroundInverse],o=s[n.backgroundInverse];Mc.isDefined(r),Mc.isDefined(i),Mc.isDefined(a),Mc.isDefined(o),c[e]={foreground:r,background:i,init:t,name:e},l[e]={foreground:a,background:o,init:t,name:e}});let u={foreground:o[n],background:o[r],init:e,name:$N},d={...u,foreground:o[i],background:o[a]};return{colors:{[$N]:u,...c},inverse:{[$N]:d,...l},init:{colors:t,default:e},prefix:e.prefix}}catch(e){throw globalThis.setTimeout(()=>wl.error(e)),e}}function tP(e){return{foreground:[e,`fg`].join(`-`),background:[e,`bg`].join(`-`),foregroundInverse:[e,`inverse`,`fg`].join(`-`),backgroundInverse:[e,`inverse`,`bg`].join(`-`)}}var U=Rd({"vira-red-100":`#FFF6F5`,"vira-red-150":`#FFEDEB`,"vira-red-200":`#FFE4E1`,"vira-red-250":`#FFDCD8`,"vira-red-300":`#FFD1CB`,"vira-red-350":`#FFC1B8`,"vira-red-400":`#FFA79B`,"vira-red-450":`#FF8274`,"vira-red-500":`#FF564A`,"vira-red-550":`#F43A32`,"vira-red-600":`#E2322C`,"vira-red-650":`#D02C27`,"vira-red-700":`#BB2520`,"vira-red-750":`#9E231D`,"vira-red-800":`#82211A`,"vira-red-850":`#701A13`,"vira-red-900":`#611710`,"vira-red-950":`#52140D`,"vira-red-1000":`#43130D`,"vira-yellow-100":`#FEF9E4`,"vira-yellow-150":`#FDF2D1`,"vira-yellow-200":`#FDEABF`,"vira-yellow-250":`#FEE2AD`,"vira-yellow-300":`#FDD89B`,"vira-yellow-350":`#FAC986`,"vira-yellow-400":`#EFB669`,"vira-yellow-450":`#E29D34`,"vira-yellow-500":`#CE8800`,"vira-yellow-550":`#BB7B00`,"vira-yellow-600":`#AC7100`,"vira-yellow-650":`#9E6800`,"vira-yellow-700":`#8C5C00`,"vira-yellow-750":`#794D00`,"vira-yellow-800":`#683E00`,"vira-yellow-850":`#5B3301`,"vira-yellow-900":`#502A05`,"vira-yellow-950":`#442308`,"vira-yellow-1000":`#381D0B`,"vira-green-100":`#EBFFEE`,"vira-green-150":`#DDFBE2`,"vira-green-200":`#CDF8D6`,"vira-green-250":`#BFF5CC`,"vira-green-300":`#AFF0C0`,"vira-green-350":`#9AE8B1`,"vira-green-400":`#7FD99C`,"vira-green-450":`#52C87F`,"vira-green-500":`#1BB565`,"vira-green-550":`#04A559`,"vira-green-600":`#009852`,"vira-green-650":`#008C4A`,"vira-green-700":`#007C41`,"vira-green-750":`#016A38`,"vira-green-800":`#095831`,"vira-green-850":`#024B29`,"vira-green-900":`#014024`,"vira-green-950":`#02371F`,"vira-green-1000":`#062D1B`,"vira-teal-100":`#E8FEFD`,"vira-teal-150":`#D9FAF8`,"vira-teal-200":`#C9F6F3`,"vira-teal-250":`#BAF2ED`,"vira-teal-300":`#A9EDE6`,"vira-teal-350":`#95E4DB`,"vira-teal-400":`#79D5CA`,"vira-teal-450":`#47C3B7`,"vira-teal-500":`#00B0A4`,"vira-teal-550":`#00A094`,"vira-teal-600":`#009389`,"vira-teal-650":`#00877D`,"vira-teal-700":`#00786F`,"vira-teal-750":`#00665F`,"vira-teal-800":`#01554F`,"vira-teal-850":`#004843`,"vira-teal-900":`#003E3A`,"vira-teal-950":`#033531`,"vira-teal-1000":`#072B29`,"vira-blue-100":`#F5F9FF`,"vira-blue-150":`#EAF3FF`,"vira-blue-200":`#E0EDFF`,"vira-blue-250":`#D6E7FF`,"vira-blue-300":`#CBDFFF`,"vira-blue-350":`#B9D4FF`,"vira-blue-400":`#9EC3FF`,"vira-blue-450":`#7AADFF`,"vira-blue-500":`#5697FF`,"vira-blue-550":`#4988ED`,"vira-blue-600":`#427DDC`,"vira-blue-650":`#3B72CA`,"vira-blue-700":`#3365B6`,"vira-blue-750":`#2D569A`,"vira-blue-800":`#27487E`,"vira-blue-850":`#203D6C`,"vira-blue-900":`#1B345D`,"vira-blue-950":`#172C4F`,"vira-blue-1000":`#142540`,"vira-accent-100":`#F5F9FF`,"vira-accent-150":`#EAF3FF`,"vira-accent-200":`#E0EDFF`,"vira-accent-250":`#D6E7FF`,"vira-accent-300":`#CBDFFF`,"vira-accent-350":`#B9D4FF`,"vira-accent-400":`#9EC3FF`,"vira-accent-450":`#7AADFF`,"vira-accent-500":`#5697FF`,"vira-accent-550":`#4988ED`,"vira-accent-600":`#427DDC`,"vira-accent-650":`#3B72CA`,"vira-accent-700":`#3365B6`,"vira-accent-750":`#2D569A`,"vira-accent-800":`#27487E`,"vira-accent-850":`#203D6C`,"vira-accent-900":`#1B345D`,"vira-accent-950":`#172C4F`,"vira-accent-1000":`#142540`,"vira-purple-100":`#F9F7FF`,"vira-purple-150":`#F3EFFF`,"vira-purple-200":`#EDE8FF`,"vira-purple-250":`#E6E1FF`,"vira-purple-300":`#DED8FF`,"vira-purple-350":`#D2CBFF`,"vira-purple-400":`#C1B7FF`,"vira-purple-450":`#AD9BFF`,"vira-purple-500":`#9B80FF`,"vira-purple-550":`#8D6EF4`,"vira-purple-600":`#8265E3`,"vira-purple-650":`#775BD1`,"vira-purple-700":`#6A50BB`,"vira-purple-750":`#5A459E`,"vira-purple-800":`#4A3B82`,"vira-purple-850":`#3E3170`,"vira-purple-900":`#352A61`,"vira-purple-950":`#2D2452`,"vira-purple-1000":`#251F43`,"vira-pink-100":`#FEF5FF`,"vira-pink-150":`#FFEAFF`,"vira-pink-200":`#FFE0FC`,"vira-pink-250":`#FFD7F8`,"vira-pink-300":`#FFCBF2`,"vira-pink-350":`#FFB9E9`,"vira-pink-400":`#FF9BDF`,"vira-pink-450":`#FF6DD6`,"vira-pink-500":`#F04AC5`,"vira-pink-550":`#DD3EB4`,"vira-pink-600":`#CC37A7`,"vira-pink-650":`#BC3099`,"vira-pink-700":`#A82988`,"vira-pink-750":`#8F2674`,"vira-pink-800":`#752361`,"vira-pink-850":`#641C53`,"vira-pink-900":`#561848`,"vira-pink-950":`#49153E`,"vira-pink-1000":`#3B1333`,"vira-grey-100":`#F9F9F9`,"vira-grey-150":`#F2F2F2`,"vira-grey-200":`#EBEBEB`,"vira-grey-250":`#E5E5E5`,"vira-grey-300":`#DEDEDE`,"vira-grey-350":`#D2D2D2`,"vira-grey-400":`#C2C2C2`,"vira-grey-450":`#ADADAD`,"vira-grey-500":`#999999`,"vira-grey-550":`#8A8A8A`,"vira-grey-600":`#7F7F7F`,"vira-grey-650":`#747474`,"vira-grey-700":`#676767`,"vira-grey-750":`#585858`,"vira-grey-800":`#494949`,"vira-grey-850":`#3E3E3E`,"vira-grey-900":`#353535`,"vira-grey-950":`#2D2D2D`,"vira-grey-1000":`#252525`});function nP({originalTheme:e,layerKey:t,themeColor:n,override:r,overrideValues:i}){let a=r?.[t];a&&(i[String(n[t].name)]=String(QN(t,a,e.init.default,e.init.colors)))}function rP(e,t,{defaultOverride:n,colorOverrides:r}){let i={};n&&S(n).forEach(t=>{nP({originalTheme:e,layerKey:t,override:n,themeColor:e.colors[$N],overrideValues:i})});let a={};r&&Uc(r).forEach(([t,n])=>{let r=e.colors[t];if(!r)throw Error(`Override color name '${t}' does not exist in the theme being overridden.`);nP({originalTheme:e,layerKey:`foreground`,override:n,themeColor:r,overrideValues:a}),nP({originalTheme:e,layerKey:`background`,override:n,themeColor:r,overrideValues:a})});let o=jl(e.init.colors,(e,t)=>{let n=r?.[e];return{...t,...n}}),s=eP({...e.init.default,...n},o);return{name:t,overrides:{...i,...a},originalTheme:e,asTheme:s}}var W=eP({foreground:`black`,background:`white`,prefix:`vira`},{"vira-red-foreground-highest-contrast":{foreground:U[`vira-red-1000`]},"vira-red-foreground-small-body":{foreground:U[`vira-red-1000`]},"vira-red-foreground-body":{foreground:U[`vira-red-750`]},"vira-red-foreground-non-body":{foreground:U[`vira-red-650`]},"vira-red-foreground-header":{foreground:U[`vira-red-500`]},"vira-red-foreground-placeholder":{foreground:U[`vira-red-400`]},"vira-red-foreground-decoration":{foreground:U[`vira-red-350`]},"vira-red-foreground-invisible":{foreground:U[`vira-red-250`]},"vira-red-foreground-lowest-contrast":{foreground:U[`vira-red-100`]},"vira-red-behind-bg-highest-contrast":{foreground:{refDefaultBackground:!0},background:U[`vira-red-1000`]},"vira-red-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:U[`vira-red-1000`]},"vira-red-behind-bg-body":{foreground:{refDefaultBackground:!0},background:U[`vira-red-700`]},"vira-red-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:U[`vira-red-600`]},"vira-red-behind-bg-header":{foreground:{refDefaultBackground:!0},background:U[`vira-red-450`]},"vira-red-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:U[`vira-red-400`]},"vira-red-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:U[`vira-red-350`]},"vira-red-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:U[`vira-red-200`]},"vira-red-behind-bg-lowest-contrast":{foreground:{refDefaultBackground:!0},background:U[`vira-red-100`]},"vira-red-behind-fg-highest-contrast":{background:U[`vira-red-100`]},"vira-red-behind-fg-small-body":{background:U[`vira-red-250`]},"vira-red-behind-fg-body":{background:U[`vira-red-350`]},"vira-red-behind-fg-non-body":{background:U[`vira-red-400`]},"vira-red-behind-fg-header":{background:U[`vira-red-500`]},"vira-red-behind-fg-placeholder":{background:U[`vira-red-650`]},"vira-red-behind-fg-decoration":{background:U[`vira-red-750`]},"vira-red-behind-fg-invisible":{background:U[`vira-red-1000`]},"vira-red-behind-fg-lowest-contrast":{background:U[`vira-red-1000`]},"vira-red-on-self-highest-contrast":{foreground:U[`vira-red-850`],background:U[`vira-red-100`]},"vira-red-on-self-small-body":{foreground:U[`vira-red-850`],background:U[`vira-red-100`]},"vira-red-on-self-body":{foreground:U[`vira-red-850`],background:U[`vira-red-250`]},"vira-red-on-self-non-body":{foreground:U[`vira-red-850`],background:U[`vira-red-350`]},"vira-red-on-self-header":{foreground:U[`vira-red-850`],background:U[`vira-red-450`]},"vira-red-on-self-placeholder":{foreground:U[`vira-red-850`],background:U[`vira-red-500`]},"vira-red-on-self-decoration":{foreground:U[`vira-red-850`],background:U[`vira-red-650`]},"vira-red-on-self-invisible":{foreground:U[`vira-red-850`],background:U[`vira-red-1000`]},"vira-red-on-self-lowest-contrast":{foreground:U[`vira-red-850`],background:U[`vira-red-1000`]},"vira-yellow-foreground-highest-contrast":{foreground:U[`vira-yellow-1000`]},"vira-yellow-foreground-small-body":{foreground:U[`vira-yellow-1000`]},"vira-yellow-foreground-body":{foreground:U[`vira-yellow-750`]},"vira-yellow-foreground-non-body":{foreground:U[`vira-yellow-650`]},"vira-yellow-foreground-header":{foreground:U[`vira-yellow-500`]},"vira-yellow-foreground-placeholder":{foreground:U[`vira-yellow-400`]},"vira-yellow-foreground-decoration":{foreground:U[`vira-yellow-350`]},"vira-yellow-foreground-invisible":{foreground:U[`vira-yellow-250`]},"vira-yellow-foreground-lowest-contrast":{foreground:U[`vira-yellow-100`]},"vira-yellow-behind-bg-highest-contrast":{foreground:{refDefaultBackground:!0},background:U[`vira-yellow-1000`]},"vira-yellow-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:U[`vira-yellow-1000`]},"vira-yellow-behind-bg-body":{foreground:{refDefaultBackground:!0},background:U[`vira-yellow-700`]},"vira-yellow-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:U[`vira-yellow-600`]},"vira-yellow-behind-bg-header":{foreground:{refDefaultBackground:!0},background:U[`vira-yellow-450`]},"vira-yellow-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:U[`vira-yellow-400`]},"vira-yellow-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:U[`vira-yellow-350`]},"vira-yellow-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:U[`vira-yellow-250`]},"vira-yellow-behind-bg-lowest-contrast":{foreground:{refDefaultBackground:!0},background:U[`vira-yellow-100`]},"vira-yellow-behind-fg-highest-contrast":{background:U[`vira-yellow-100`]},"vira-yellow-behind-fg-small-body":{background:U[`vira-yellow-250`]},"vira-yellow-behind-fg-body":{background:U[`vira-yellow-350`]},"vira-yellow-behind-fg-non-body":{background:U[`vira-yellow-400`]},"vira-yellow-behind-fg-header":{background:U[`vira-yellow-500`]},"vira-yellow-behind-fg-placeholder":{background:U[`vira-yellow-650`]},"vira-yellow-behind-fg-decoration":{background:U[`vira-yellow-750`]},"vira-yellow-behind-fg-invisible":{background:U[`vira-yellow-1000`]},"vira-yellow-behind-fg-lowest-contrast":{background:U[`vira-yellow-1000`]},"vira-yellow-on-self-highest-contrast":{foreground:U[`vira-yellow-850`],background:U[`vira-yellow-100`]},"vira-yellow-on-self-small-body":{foreground:U[`vira-yellow-850`],background:U[`vira-yellow-100`]},"vira-yellow-on-self-body":{foreground:U[`vira-yellow-850`],background:U[`vira-yellow-300`]},"vira-yellow-on-self-non-body":{foreground:U[`vira-yellow-850`],background:U[`vira-yellow-350`]},"vira-yellow-on-self-header":{foreground:U[`vira-yellow-850`],background:U[`vira-yellow-450`]},"vira-yellow-on-self-placeholder":{foreground:U[`vira-yellow-850`],background:U[`vira-yellow-550`]},"vira-yellow-on-self-decoration":{foreground:U[`vira-yellow-850`],background:U[`vira-yellow-650`]},"vira-yellow-on-self-invisible":{foreground:U[`vira-yellow-850`],background:U[`vira-yellow-1000`]},"vira-yellow-on-self-lowest-contrast":{foreground:U[`vira-yellow-850`],background:U[`vira-yellow-1000`]},"vira-green-foreground-highest-contrast":{foreground:U[`vira-green-1000`]},"vira-green-foreground-small-body":{foreground:U[`vira-green-1000`]},"vira-green-foreground-body":{foreground:U[`vira-green-800`]},"vira-green-foreground-non-body":{foreground:U[`vira-green-650`]},"vira-green-foreground-header":{foreground:U[`vira-green-550`]},"vira-green-foreground-placeholder":{foreground:U[`vira-green-450`]},"vira-green-foreground-decoration":{foreground:U[`vira-green-350`]},"vira-green-foreground-invisible":{foreground:U[`vira-green-250`]},"vira-green-foreground-lowest-contrast":{foreground:U[`vira-green-100`]},"vira-green-behind-bg-highest-contrast":{foreground:{refDefaultBackground:!0},background:U[`vira-green-1000`]},"vira-green-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:U[`vira-green-1000`]},"vira-green-behind-bg-body":{foreground:{refDefaultBackground:!0},background:U[`vira-green-750`]},"vira-green-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:U[`vira-green-650`]},"vira-green-behind-bg-header":{foreground:{refDefaultBackground:!0},background:U[`vira-green-500`]},"vira-green-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:U[`vira-green-400`]},"vira-green-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:U[`vira-green-350`]},"vira-green-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:U[`vira-green-250`]},"vira-green-behind-bg-lowest-contrast":{foreground:{refDefaultBackground:!0},background:U[`vira-green-100`]},"vira-green-behind-fg-highest-contrast":{background:U[`vira-green-100`]},"vira-green-behind-fg-small-body":{background:U[`vira-green-250`]},"vira-green-behind-fg-body":{background:U[`vira-green-350`]},"vira-green-behind-fg-non-body":{background:U[`vira-green-450`]},"vira-green-behind-fg-header":{background:U[`vira-green-550`]},"vira-green-behind-fg-placeholder":{background:U[`vira-green-650`]},"vira-green-behind-fg-decoration":{background:U[`vira-green-800`]},"vira-green-behind-fg-invisible":{background:U[`vira-green-1000`]},"vira-green-behind-fg-lowest-contrast":{background:U[`vira-green-1000`]},"vira-green-on-self-highest-contrast":{foreground:U[`vira-green-850`],background:U[`vira-green-100`]},"vira-green-on-self-small-body":{foreground:U[`vira-green-850`],background:U[`vira-green-100`]},"vira-green-on-self-body":{foreground:U[`vira-green-850`],background:U[`vira-green-300`]},"vira-green-on-self-non-body":{foreground:U[`vira-green-850`],background:U[`vira-green-400`]},"vira-green-on-self-header":{foreground:U[`vira-green-850`],background:U[`vira-green-450`]},"vira-green-on-self-placeholder":{foreground:U[`vira-green-850`],background:U[`vira-green-550`]},"vira-green-on-self-decoration":{foreground:U[`vira-green-850`],background:U[`vira-green-700`]},"vira-green-on-self-invisible":{foreground:U[`vira-green-850`],background:U[`vira-green-1000`]},"vira-green-on-self-lowest-contrast":{foreground:U[`vira-green-850`],background:U[`vira-green-1000`]},"vira-teal-foreground-highest-contrast":{foreground:U[`vira-teal-1000`]},"vira-teal-foreground-small-body":{foreground:U[`vira-teal-1000`]},"vira-teal-foreground-body":{foreground:U[`vira-teal-800`]},"vira-teal-foreground-non-body":{foreground:U[`vira-teal-650`]},"vira-teal-foreground-header":{foreground:U[`vira-teal-550`]},"vira-teal-foreground-placeholder":{foreground:U[`vira-teal-450`]},"vira-teal-foreground-decoration":{foreground:U[`vira-teal-350`]},"vira-teal-foreground-invisible":{foreground:U[`vira-teal-250`]},"vira-teal-foreground-lowest-contrast":{foreground:U[`vira-teal-100`]},"vira-teal-behind-bg-highest-contrast":{foreground:{refDefaultBackground:!0},background:U[`vira-teal-1000`]},"vira-teal-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:U[`vira-teal-1000`]},"vira-teal-behind-bg-body":{foreground:{refDefaultBackground:!0},background:U[`vira-teal-750`]},"vira-teal-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:U[`vira-teal-600`]},"vira-teal-behind-bg-header":{foreground:{refDefaultBackground:!0},background:U[`vira-teal-500`]},"vira-teal-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:U[`vira-teal-400`]},"vira-teal-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:U[`vira-teal-350`]},"vira-teal-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:U[`vira-teal-250`]},"vira-teal-behind-bg-lowest-contrast":{foreground:{refDefaultBackground:!0},background:U[`vira-teal-100`]},"vira-teal-behind-fg-highest-contrast":{background:U[`vira-teal-100`]},"vira-teal-behind-fg-small-body":{background:U[`vira-teal-250`]},"vira-teal-behind-fg-body":{background:U[`vira-teal-350`]},"vira-teal-behind-fg-non-body":{background:U[`vira-teal-450`]},"vira-teal-behind-fg-header":{background:U[`vira-teal-500`]},"vira-teal-behind-fg-placeholder":{background:U[`vira-teal-650`]},"vira-teal-behind-fg-decoration":{background:U[`vira-teal-750`]},"vira-teal-behind-fg-invisible":{background:U[`vira-teal-1000`]},"vira-teal-behind-fg-lowest-contrast":{background:U[`vira-teal-1000`]},"vira-teal-on-self-highest-contrast":{foreground:U[`vira-teal-850`],background:U[`vira-teal-100`]},"vira-teal-on-self-small-body":{foreground:U[`vira-teal-850`],background:U[`vira-teal-100`]},"vira-teal-on-self-body":{foreground:U[`vira-teal-850`],background:U[`vira-teal-300`]},"vira-teal-on-self-non-body":{foreground:U[`vira-teal-850`],background:U[`vira-teal-400`]},"vira-teal-on-self-header":{foreground:U[`vira-teal-850`],background:U[`vira-teal-450`]},"vira-teal-on-self-placeholder":{foreground:U[`vira-teal-850`],background:U[`vira-teal-550`]},"vira-teal-on-self-decoration":{foreground:U[`vira-teal-850`],background:U[`vira-teal-700`]},"vira-teal-on-self-invisible":{foreground:U[`vira-teal-850`],background:U[`vira-teal-1000`]},"vira-teal-on-self-lowest-contrast":{foreground:U[`vira-teal-850`],background:U[`vira-teal-1000`]},"vira-blue-foreground-highest-contrast":{foreground:U[`vira-blue-1000`]},"vira-blue-foreground-small-body":{foreground:U[`vira-blue-1000`]},"vira-blue-foreground-body":{foreground:U[`vira-blue-750`]},"vira-blue-foreground-non-body":{foreground:U[`vira-blue-650`]},"vira-blue-foreground-header":{foreground:U[`vira-blue-500`]},"vira-blue-foreground-placeholder":{foreground:U[`vira-blue-450`]},"vira-blue-foreground-decoration":{foreground:U[`vira-blue-350`]},"vira-blue-foreground-invisible":{foreground:U[`vira-blue-250`]},"vira-blue-foreground-lowest-contrast":{foreground:U[`vira-blue-100`]},"vira-blue-behind-bg-highest-contrast":{foreground:{refDefaultBackground:!0},background:U[`vira-blue-1000`]},"vira-blue-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:U[`vira-blue-1000`]},"vira-blue-behind-bg-body":{foreground:{refDefaultBackground:!0},background:U[`vira-blue-750`]},"vira-blue-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:U[`vira-blue-600`]},"vira-blue-behind-bg-header":{foreground:{refDefaultBackground:!0},background:U[`vira-blue-450`]},"vira-blue-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:U[`vira-blue-400`]},"vira-blue-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:U[`vira-blue-350`]},"vira-blue-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:U[`vira-blue-250`]},"vira-blue-behind-bg-lowest-contrast":{foreground:{refDefaultBackground:!0},background:U[`vira-blue-100`]},"vira-blue-behind-fg-highest-contrast":{background:U[`vira-blue-100`]},"vira-blue-behind-fg-small-body":{background:U[`vira-blue-250`]},"vira-blue-behind-fg-body":{background:U[`vira-blue-350`]},"vira-blue-behind-fg-non-body":{background:U[`vira-blue-400`]},"vira-blue-behind-fg-header":{background:U[`vira-blue-500`]},"vira-blue-behind-fg-placeholder":{background:U[`vira-blue-650`]},"vira-blue-behind-fg-decoration":{background:U[`vira-blue-750`]},"vira-blue-behind-fg-invisible":{background:U[`vira-blue-1000`]},"vira-blue-behind-fg-lowest-contrast":{background:U[`vira-blue-1000`]},"vira-blue-on-self-highest-contrast":{foreground:U[`vira-blue-850`],background:U[`vira-blue-100`]},"vira-blue-on-self-small-body":{foreground:U[`vira-blue-850`],background:U[`vira-blue-100`]},"vira-blue-on-self-body":{foreground:U[`vira-blue-850`],background:U[`vira-blue-300`]},"vira-blue-on-self-non-body":{foreground:U[`vira-blue-850`],background:U[`vira-blue-350`]},"vira-blue-on-self-header":{foreground:U[`vira-blue-850`],background:U[`vira-blue-450`]},"vira-blue-on-self-placeholder":{foreground:U[`vira-blue-850`],background:U[`vira-blue-550`]},"vira-blue-on-self-decoration":{foreground:U[`vira-blue-850`],background:U[`vira-blue-650`]},"vira-blue-on-self-invisible":{foreground:U[`vira-blue-850`],background:U[`vira-blue-1000`]},"vira-blue-on-self-lowest-contrast":{foreground:U[`vira-blue-850`],background:U[`vira-blue-1000`]},"vira-accent-foreground-highest-contrast":{foreground:U[`vira-accent-1000`]},"vira-accent-foreground-small-body":{foreground:U[`vira-accent-1000`]},"vira-accent-foreground-body":{foreground:U[`vira-accent-750`]},"vira-accent-foreground-non-body":{foreground:U[`vira-accent-650`]},"vira-accent-foreground-header":{foreground:U[`vira-accent-500`]},"vira-accent-foreground-placeholder":{foreground:U[`vira-accent-450`]},"vira-accent-foreground-decoration":{foreground:U[`vira-accent-350`]},"vira-accent-foreground-invisible":{foreground:U[`vira-accent-250`]},"vira-accent-foreground-lowest-contrast":{foreground:U[`vira-accent-100`]},"vira-accent-behind-bg-highest-contrast":{foreground:{refDefaultBackground:!0},background:U[`vira-accent-1000`]},"vira-accent-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:U[`vira-accent-1000`]},"vira-accent-behind-bg-body":{foreground:{refDefaultBackground:!0},background:U[`vira-accent-750`]},"vira-accent-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:U[`vira-accent-600`]},"vira-accent-behind-bg-header":{foreground:{refDefaultBackground:!0},background:U[`vira-accent-450`]},"vira-accent-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:U[`vira-accent-400`]},"vira-accent-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:U[`vira-accent-350`]},"vira-accent-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:U[`vira-accent-250`]},"vira-accent-behind-bg-lowest-contrast":{foreground:{refDefaultBackground:!0},background:U[`vira-accent-100`]},"vira-accent-behind-fg-highest-contrast":{background:U[`vira-accent-100`]},"vira-accent-behind-fg-small-body":{background:U[`vira-accent-250`]},"vira-accent-behind-fg-body":{background:U[`vira-accent-350`]},"vira-accent-behind-fg-non-body":{background:U[`vira-accent-400`]},"vira-accent-behind-fg-header":{background:U[`vira-accent-500`]},"vira-accent-behind-fg-placeholder":{background:U[`vira-accent-650`]},"vira-accent-behind-fg-decoration":{background:U[`vira-accent-750`]},"vira-accent-behind-fg-invisible":{background:U[`vira-accent-1000`]},"vira-accent-behind-fg-lowest-contrast":{background:U[`vira-accent-1000`]},"vira-accent-on-self-highest-contrast":{foreground:U[`vira-accent-850`],background:U[`vira-accent-100`]},"vira-accent-on-self-small-body":{foreground:U[`vira-accent-850`],background:U[`vira-accent-100`]},"vira-accent-on-self-body":{foreground:U[`vira-accent-850`],background:U[`vira-accent-300`]},"vira-accent-on-self-non-body":{foreground:U[`vira-accent-850`],background:U[`vira-accent-350`]},"vira-accent-on-self-header":{foreground:U[`vira-accent-850`],background:U[`vira-accent-450`]},"vira-accent-on-self-placeholder":{foreground:U[`vira-accent-850`],background:U[`vira-accent-550`]},"vira-accent-on-self-decoration":{foreground:U[`vira-accent-850`],background:U[`vira-accent-650`]},"vira-accent-on-self-invisible":{foreground:U[`vira-accent-850`],background:U[`vira-accent-1000`]},"vira-accent-on-self-lowest-contrast":{foreground:U[`vira-accent-850`],background:U[`vira-accent-1000`]},"vira-purple-foreground-highest-contrast":{foreground:U[`vira-purple-1000`]},"vira-purple-foreground-small-body":{foreground:U[`vira-purple-1000`]},"vira-purple-foreground-body":{foreground:U[`vira-purple-750`]},"vira-purple-foreground-non-body":{foreground:U[`vira-purple-650`]},"vira-purple-foreground-header":{foreground:U[`vira-purple-500`]},"vira-purple-foreground-placeholder":{foreground:U[`vira-purple-400`]},"vira-purple-foreground-decoration":{foreground:U[`vira-purple-350`]},"vira-purple-foreground-invisible":{foreground:U[`vira-purple-250`]},"vira-purple-foreground-lowest-contrast":{foreground:U[`vira-purple-100`]},"vira-purple-behind-bg-highest-contrast":{foreground:{refDefaultBackground:!0},background:U[`vira-purple-1000`]},"vira-purple-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:U[`vira-purple-1000`]},"vira-purple-behind-bg-body":{foreground:{refDefaultBackground:!0},background:U[`vira-purple-700`]},"vira-purple-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:U[`vira-purple-600`]},"vira-purple-behind-bg-header":{foreground:{refDefaultBackground:!0},background:U[`vira-purple-450`]},"vira-purple-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:U[`vira-purple-400`]},"vira-purple-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:U[`vira-purple-350`]},"vira-purple-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:U[`vira-purple-200`]},"vira-purple-behind-bg-lowest-contrast":{foreground:{refDefaultBackground:!0},background:U[`vira-purple-100`]},"vira-purple-behind-fg-highest-contrast":{background:U[`vira-purple-100`]},"vira-purple-behind-fg-small-body":{background:U[`vira-purple-250`]},"vira-purple-behind-fg-body":{background:U[`vira-purple-350`]},"vira-purple-behind-fg-non-body":{background:U[`vira-purple-400`]},"vira-purple-behind-fg-header":{background:U[`vira-purple-500`]},"vira-purple-behind-fg-placeholder":{background:U[`vira-purple-600`]},"vira-purple-behind-fg-decoration":{background:U[`vira-purple-750`]},"vira-purple-behind-fg-invisible":{background:U[`vira-purple-1000`]},"vira-purple-behind-fg-lowest-contrast":{background:U[`vira-purple-1000`]},"vira-purple-on-self-highest-contrast":{foreground:U[`vira-purple-850`],background:U[`vira-purple-100`]},"vira-purple-on-self-small-body":{foreground:U[`vira-purple-850`],background:U[`vira-purple-100`]},"vira-purple-on-self-body":{foreground:U[`vira-purple-850`],background:U[`vira-purple-300`]},"vira-purple-on-self-non-body":{foreground:U[`vira-purple-850`],background:U[`vira-purple-350`]},"vira-purple-on-self-header":{foreground:U[`vira-purple-850`],background:U[`vira-purple-450`]},"vira-purple-on-self-placeholder":{foreground:U[`vira-purple-850`],background:U[`vira-purple-500`]},"vira-purple-on-self-decoration":{foreground:U[`vira-purple-850`],background:U[`vira-purple-650`]},"vira-purple-on-self-invisible":{foreground:U[`vira-purple-850`],background:U[`vira-purple-1000`]},"vira-purple-on-self-lowest-contrast":{foreground:U[`vira-purple-850`],background:U[`vira-purple-1000`]},"vira-pink-foreground-highest-contrast":{foreground:U[`vira-pink-1000`]},"vira-pink-foreground-small-body":{foreground:U[`vira-pink-1000`]},"vira-pink-foreground-body":{foreground:U[`vira-pink-750`]},"vira-pink-foreground-non-body":{foreground:U[`vira-pink-650`]},"vira-pink-foreground-header":{foreground:U[`vira-pink-500`]},"vira-pink-foreground-placeholder":{foreground:U[`vira-pink-400`]},"vira-pink-foreground-decoration":{foreground:U[`vira-pink-350`]},"vira-pink-foreground-invisible":{foreground:U[`vira-pink-250`]},"vira-pink-foreground-lowest-contrast":{foreground:U[`vira-pink-100`]},"vira-pink-behind-bg-highest-contrast":{foreground:{refDefaultBackground:!0},background:U[`vira-pink-1000`]},"vira-pink-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:U[`vira-pink-1000`]},"vira-pink-behind-bg-body":{foreground:{refDefaultBackground:!0},background:U[`vira-pink-700`]},"vira-pink-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:U[`vira-pink-550`]},"vira-pink-behind-bg-header":{foreground:{refDefaultBackground:!0},background:U[`vira-pink-450`]},"vira-pink-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:U[`vira-pink-400`]},"vira-pink-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:U[`vira-pink-350`]},"vira-pink-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:U[`vira-pink-200`]},"vira-pink-behind-bg-lowest-contrast":{foreground:{refDefaultBackground:!0},background:U[`vira-pink-100`]},"vira-pink-behind-fg-highest-contrast":{background:U[`vira-pink-100`]},"vira-pink-behind-fg-small-body":{background:U[`vira-pink-200`]},"vira-pink-behind-fg-body":{background:U[`vira-pink-350`]},"vira-pink-behind-fg-non-body":{background:U[`vira-pink-400`]},"vira-pink-behind-fg-header":{background:U[`vira-pink-500`]},"vira-pink-behind-fg-placeholder":{background:U[`vira-pink-600`]},"vira-pink-behind-fg-decoration":{background:U[`vira-pink-750`]},"vira-pink-behind-fg-invisible":{background:U[`vira-pink-1000`]},"vira-pink-behind-fg-lowest-contrast":{background:U[`vira-pink-1000`]},"vira-pink-on-self-highest-contrast":{foreground:U[`vira-pink-850`],background:U[`vira-pink-100`]},"vira-pink-on-self-small-body":{foreground:U[`vira-pink-850`],background:U[`vira-pink-100`]},"vira-pink-on-self-body":{foreground:U[`vira-pink-850`],background:U[`vira-pink-250`]},"vira-pink-on-self-non-body":{foreground:U[`vira-pink-850`],background:U[`vira-pink-350`]},"vira-pink-on-self-header":{foreground:U[`vira-pink-850`],background:U[`vira-pink-450`]},"vira-pink-on-self-placeholder":{foreground:U[`vira-pink-850`],background:U[`vira-pink-500`]},"vira-pink-on-self-decoration":{foreground:U[`vira-pink-850`],background:U[`vira-pink-650`]},"vira-pink-on-self-invisible":{foreground:U[`vira-pink-850`],background:U[`vira-pink-1000`]},"vira-pink-on-self-lowest-contrast":{foreground:U[`vira-pink-850`],background:U[`vira-pink-1000`]},"vira-grey-foreground-highest-contrast":{foreground:U[`vira-grey-1000`]},"vira-grey-foreground-small-body":{foreground:U[`vira-grey-1000`]},"vira-grey-foreground-body":{foreground:U[`vira-grey-750`]},"vira-grey-foreground-non-body":{foreground:U[`vira-grey-650`]},"vira-grey-foreground-header":{foreground:U[`vira-grey-500`]},"vira-grey-foreground-placeholder":{foreground:U[`vira-grey-450`]},"vira-grey-foreground-decoration":{foreground:U[`vira-grey-350`]},"vira-grey-foreground-invisible":{foreground:U[`vira-grey-250`]},"vira-grey-foreground-lowest-contrast":{foreground:U[`vira-grey-100`]},"vira-grey-behind-bg-highest-contrast":{foreground:{refDefaultBackground:!0},background:U[`vira-grey-1000`]},"vira-grey-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:U[`vira-grey-1000`]},"vira-grey-behind-bg-body":{foreground:{refDefaultBackground:!0},background:U[`vira-grey-750`]},"vira-grey-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:U[`vira-grey-600`]},"vira-grey-behind-bg-header":{foreground:{refDefaultBackground:!0},background:U[`vira-grey-500`]},"vira-grey-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:U[`vira-grey-400`]},"vira-grey-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:U[`vira-grey-350`]},"vira-grey-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:U[`vira-grey-250`]},"vira-grey-behind-bg-lowest-contrast":{foreground:{refDefaultBackground:!0},background:U[`vira-grey-100`]},"vira-grey-behind-fg-highest-contrast":{background:U[`vira-grey-100`]},"vira-grey-behind-fg-small-body":{background:U[`vira-grey-250`]},"vira-grey-behind-fg-body":{background:U[`vira-grey-350`]},"vira-grey-behind-fg-non-body":{background:U[`vira-grey-400`]},"vira-grey-behind-fg-header":{background:U[`vira-grey-500`]},"vira-grey-behind-fg-placeholder":{background:U[`vira-grey-650`]},"vira-grey-behind-fg-decoration":{background:U[`vira-grey-750`]},"vira-grey-behind-fg-invisible":{background:U[`vira-grey-1000`]},"vira-grey-behind-fg-lowest-contrast":{background:U[`vira-grey-1000`]},"vira-grey-on-self-highest-contrast":{foreground:U[`vira-grey-850`],background:U[`vira-grey-100`]},"vira-grey-on-self-small-body":{foreground:U[`vira-grey-850`],background:U[`vira-grey-100`]},"vira-grey-on-self-body":{foreground:U[`vira-grey-850`],background:U[`vira-grey-300`]},"vira-grey-on-self-non-body":{foreground:U[`vira-grey-850`],background:U[`vira-grey-350`]},"vira-grey-on-self-header":{foreground:U[`vira-grey-850`],background:U[`vira-grey-450`]},"vira-grey-on-self-placeholder":{foreground:U[`vira-grey-850`],background:U[`vira-grey-550`]},"vira-grey-on-self-decoration":{foreground:U[`vira-grey-850`],background:U[`vira-grey-650`]},"vira-grey-on-self-invisible":{foreground:U[`vira-grey-850`],background:U[`vira-grey-1000`]},"vira-grey-on-self-lowest-contrast":{foreground:U[`vira-grey-850`],background:U[`vira-grey-1000`]}}),iP=rP(W,`dark`,{defaultOverride:{foreground:`white`,background:`black`},colorOverrides:{"vira-red-foreground-highest-contrast":{foreground:U[`vira-red-100`]},"vira-red-foreground-small-body":{foreground:U[`vira-red-250`]},"vira-red-foreground-body":{foreground:U[`vira-red-350`]},"vira-red-foreground-non-body":{foreground:U[`vira-red-400`]},"vira-red-foreground-header":{foreground:U[`vira-red-450`]},"vira-red-foreground-placeholder":{foreground:U[`vira-red-600`]},"vira-red-foreground-decoration":{foreground:U[`vira-red-750`]},"vira-red-foreground-invisible":{foreground:U[`vira-red-1000`]},"vira-red-foreground-lowest-contrast":{foreground:U[`vira-red-1000`]},"vira-red-behind-bg-highest-contrast":{background:U[`vira-red-100`]},"vira-red-behind-bg-small-body":{background:U[`vira-red-250`]},"vira-red-behind-bg-body":{background:U[`vira-red-350`]},"vira-red-behind-bg-non-body":{background:U[`vira-red-400`]},"vira-red-behind-bg-header":{background:U[`vira-red-500`]},"vira-red-behind-bg-placeholder":{background:U[`vira-red-650`]},"vira-red-behind-bg-decoration":{background:U[`vira-red-750`]},"vira-red-behind-bg-invisible":{background:U[`vira-red-1000`]},"vira-red-behind-bg-lowest-contrast":{background:U[`vira-red-1000`]},"vira-red-behind-fg-highest-contrast":{background:U[`vira-red-1000`]},"vira-red-behind-fg-small-body":{background:U[`vira-red-1000`]},"vira-red-behind-fg-body":{background:U[`vira-red-700`]},"vira-red-behind-fg-non-body":{background:U[`vira-red-600`]},"vira-red-behind-fg-header":{background:U[`vira-red-450`]},"vira-red-behind-fg-placeholder":{background:U[`vira-red-400`]},"vira-red-behind-fg-decoration":{background:U[`vira-red-350`]},"vira-red-behind-fg-invisible":{background:U[`vira-red-200`]},"vira-red-behind-fg-lowest-contrast":{background:U[`vira-red-100`]},"vira-red-on-self-highest-contrast":{foreground:U[`vira-red-200`],background:U[`vira-red-1000`]},"vira-red-on-self-small-body":{foreground:U[`vira-red-200`],background:U[`vira-red-1000`]},"vira-red-on-self-body":{foreground:U[`vira-red-200`],background:U[`vira-red-750`]},"vira-red-on-self-non-body":{foreground:U[`vira-red-200`],background:U[`vira-red-600`]},"vira-red-on-self-header":{foreground:U[`vira-red-200`],background:U[`vira-red-500`]},"vira-red-on-self-placeholder":{foreground:U[`vira-red-200`],background:U[`vira-red-450`]},"vira-red-on-self-decoration":{foreground:U[`vira-red-200`],background:U[`vira-red-400`]},"vira-red-on-self-invisible":{foreground:U[`vira-red-200`],background:U[`vira-red-100`]},"vira-red-on-self-lowest-contrast":{foreground:U[`vira-red-200`],background:U[`vira-red-100`]},"vira-yellow-foreground-highest-contrast":{foreground:U[`vira-yellow-100`]},"vira-yellow-foreground-small-body":{foreground:U[`vira-yellow-250`]},"vira-yellow-foreground-body":{foreground:U[`vira-yellow-350`]},"vira-yellow-foreground-non-body":{foreground:U[`vira-yellow-400`]},"vira-yellow-foreground-placeholder":{foreground:U[`vira-yellow-600`]},"vira-yellow-foreground-decoration":{foreground:U[`vira-yellow-750`]},"vira-yellow-foreground-invisible":{foreground:U[`vira-yellow-1000`]},"vira-yellow-foreground-lowest-contrast":{foreground:U[`vira-yellow-1000`]},"vira-yellow-behind-bg-highest-contrast":{background:U[`vira-yellow-100`]},"vira-yellow-behind-bg-small-body":{background:U[`vira-yellow-250`]},"vira-yellow-behind-bg-body":{background:U[`vira-yellow-350`]},"vira-yellow-behind-bg-non-body":{background:U[`vira-yellow-400`]},"vira-yellow-behind-bg-header":{background:U[`vira-yellow-500`]},"vira-yellow-behind-bg-placeholder":{background:U[`vira-yellow-650`]},"vira-yellow-behind-bg-decoration":{background:U[`vira-yellow-750`]},"vira-yellow-behind-bg-invisible":{background:U[`vira-yellow-1000`]},"vira-yellow-behind-bg-lowest-contrast":{background:U[`vira-yellow-1000`]},"vira-yellow-behind-fg-highest-contrast":{background:U[`vira-yellow-1000`]},"vira-yellow-behind-fg-small-body":{background:U[`vira-yellow-1000`]},"vira-yellow-behind-fg-body":{background:U[`vira-yellow-700`]},"vira-yellow-behind-fg-non-body":{background:U[`vira-yellow-600`]},"vira-yellow-behind-fg-header":{background:U[`vira-yellow-450`]},"vira-yellow-behind-fg-placeholder":{background:U[`vira-yellow-400`]},"vira-yellow-behind-fg-decoration":{background:U[`vira-yellow-350`]},"vira-yellow-behind-fg-invisible":{background:U[`vira-yellow-250`]},"vira-yellow-behind-fg-lowest-contrast":{background:U[`vira-yellow-100`]},"vira-yellow-on-self-highest-contrast":{foreground:U[`vira-yellow-200`],background:U[`vira-yellow-1000`]},"vira-yellow-on-self-small-body":{foreground:U[`vira-yellow-200`],background:U[`vira-yellow-950`]},"vira-yellow-on-self-body":{foreground:U[`vira-yellow-200`],background:U[`vira-yellow-750`]},"vira-yellow-on-self-non-body":{foreground:U[`vira-yellow-200`],background:U[`vira-yellow-600`]},"vira-yellow-on-self-header":{foreground:U[`vira-yellow-200`],background:U[`vira-yellow-500`]},"vira-yellow-on-self-placeholder":{foreground:U[`vira-yellow-200`],background:U[`vira-yellow-450`]},"vira-yellow-on-self-decoration":{foreground:U[`vira-yellow-200`],background:U[`vira-yellow-400`]},"vira-yellow-on-self-invisible":{foreground:U[`vira-yellow-200`],background:U[`vira-yellow-100`]},"vira-yellow-on-self-lowest-contrast":{foreground:U[`vira-yellow-200`],background:U[`vira-yellow-100`]},"vira-green-foreground-highest-contrast":{foreground:U[`vira-green-100`]},"vira-green-foreground-small-body":{foreground:U[`vira-green-250`]},"vira-green-foreground-body":{foreground:U[`vira-green-350`]},"vira-green-foreground-non-body":{foreground:U[`vira-green-450`]},"vira-green-foreground-header":{foreground:U[`vira-green-500`]},"vira-green-foreground-placeholder":{foreground:U[`vira-green-650`]},"vira-green-foreground-decoration":{foreground:U[`vira-green-750`]},"vira-green-foreground-invisible":{foreground:U[`vira-green-1000`]},"vira-green-foreground-lowest-contrast":{foreground:U[`vira-green-1000`]},"vira-green-behind-bg-highest-contrast":{background:U[`vira-green-100`]},"vira-green-behind-bg-small-body":{background:U[`vira-green-250`]},"vira-green-behind-bg-body":{background:U[`vira-green-350`]},"vira-green-behind-bg-non-body":{background:U[`vira-green-450`]},"vira-green-behind-bg-header":{background:U[`vira-green-550`]},"vira-green-behind-bg-placeholder":{background:U[`vira-green-650`]},"vira-green-behind-bg-decoration":{background:U[`vira-green-800`]},"vira-green-behind-bg-invisible":{background:U[`vira-green-1000`]},"vira-green-behind-bg-lowest-contrast":{background:U[`vira-green-1000`]},"vira-green-behind-fg-highest-contrast":{background:U[`vira-green-1000`]},"vira-green-behind-fg-small-body":{background:U[`vira-green-1000`]},"vira-green-behind-fg-body":{background:U[`vira-green-750`]},"vira-green-behind-fg-non-body":{background:U[`vira-green-650`]},"vira-green-behind-fg-header":{background:U[`vira-green-500`]},"vira-green-behind-fg-placeholder":{background:U[`vira-green-400`]},"vira-green-behind-fg-decoration":{background:U[`vira-green-350`]},"vira-green-behind-fg-invisible":{background:U[`vira-green-250`]},"vira-green-behind-fg-lowest-contrast":{background:U[`vira-green-100`]},"vira-green-on-self-highest-contrast":{foreground:U[`vira-green-200`],background:U[`vira-green-1000`]},"vira-green-on-self-small-body":{foreground:U[`vira-green-200`],background:U[`vira-green-950`]},"vira-green-on-self-body":{foreground:U[`vira-green-200`],background:U[`vira-green-750`]},"vira-green-on-self-non-body":{foreground:U[`vira-green-200`],background:U[`vira-green-650`]},"vira-green-on-self-header":{foreground:U[`vira-green-200`],background:U[`vira-green-500`]},"vira-green-on-self-placeholder":{foreground:U[`vira-green-200`],background:U[`vira-green-450`]},"vira-green-on-self-decoration":{foreground:U[`vira-green-200`],background:U[`vira-green-400`]},"vira-green-on-self-invisible":{foreground:U[`vira-green-200`],background:U[`vira-green-100`]},"vira-green-on-self-lowest-contrast":{foreground:U[`vira-green-200`],background:U[`vira-green-100`]},"vira-teal-foreground-highest-contrast":{foreground:U[`vira-teal-100`]},"vira-teal-foreground-small-body":{foreground:U[`vira-teal-250`]},"vira-teal-foreground-body":{foreground:U[`vira-teal-350`]},"vira-teal-foreground-non-body":{foreground:U[`vira-teal-450`]},"vira-teal-foreground-header":{foreground:U[`vira-teal-500`]},"vira-teal-foreground-placeholder":{foreground:U[`vira-teal-650`]},"vira-teal-foreground-decoration":{foreground:U[`vira-teal-750`]},"vira-teal-foreground-invisible":{foreground:U[`vira-teal-1000`]},"vira-teal-foreground-lowest-contrast":{foreground:U[`vira-teal-1000`]},"vira-teal-behind-bg-highest-contrast":{background:U[`vira-teal-100`]},"vira-teal-behind-bg-small-body":{background:U[`vira-teal-250`]},"vira-teal-behind-bg-body":{background:U[`vira-teal-350`]},"vira-teal-behind-bg-non-body":{background:U[`vira-teal-450`]},"vira-teal-behind-bg-placeholder":{background:U[`vira-teal-650`]},"vira-teal-behind-bg-decoration":{background:U[`vira-teal-750`]},"vira-teal-behind-bg-invisible":{background:U[`vira-teal-1000`]},"vira-teal-behind-bg-lowest-contrast":{background:U[`vira-teal-1000`]},"vira-teal-behind-fg-highest-contrast":{background:U[`vira-teal-1000`]},"vira-teal-behind-fg-small-body":{background:U[`vira-teal-1000`]},"vira-teal-behind-fg-body":{background:U[`vira-teal-750`]},"vira-teal-behind-fg-non-body":{background:U[`vira-teal-600`]},"vira-teal-behind-fg-placeholder":{background:U[`vira-teal-400`]},"vira-teal-behind-fg-decoration":{background:U[`vira-teal-350`]},"vira-teal-behind-fg-invisible":{background:U[`vira-teal-250`]},"vira-teal-behind-fg-lowest-contrast":{background:U[`vira-teal-100`]},"vira-teal-on-self-highest-contrast":{foreground:U[`vira-teal-200`],background:U[`vira-teal-1000`]},"vira-teal-on-self-small-body":{foreground:U[`vira-teal-200`],background:U[`vira-teal-950`]},"vira-teal-on-self-body":{foreground:U[`vira-teal-200`],background:U[`vira-teal-750`]},"vira-teal-on-self-non-body":{foreground:U[`vira-teal-200`],background:U[`vira-teal-650`]},"vira-teal-on-self-header":{foreground:U[`vira-teal-200`],background:U[`vira-teal-500`]},"vira-teal-on-self-placeholder":{foreground:U[`vira-teal-200`],background:U[`vira-teal-450`]},"vira-teal-on-self-decoration":{foreground:U[`vira-teal-200`],background:U[`vira-teal-400`]},"vira-teal-on-self-invisible":{foreground:U[`vira-teal-200`],background:U[`vira-teal-100`]},"vira-teal-on-self-lowest-contrast":{foreground:U[`vira-teal-200`],background:U[`vira-teal-100`]},"vira-blue-foreground-highest-contrast":{foreground:U[`vira-blue-100`]},"vira-blue-foreground-small-body":{foreground:U[`vira-blue-250`]},"vira-blue-foreground-body":{foreground:U[`vira-blue-350`]},"vira-blue-foreground-non-body":{foreground:U[`vira-blue-400`]},"vira-blue-foreground-placeholder":{foreground:U[`vira-blue-600`]},"vira-blue-foreground-decoration":{foreground:U[`vira-blue-750`]},"vira-blue-foreground-invisible":{foreground:U[`vira-blue-1000`]},"vira-blue-foreground-lowest-contrast":{foreground:U[`vira-blue-1000`]},"vira-blue-behind-bg-highest-contrast":{background:U[`vira-blue-100`]},"vira-blue-behind-bg-small-body":{background:U[`vira-blue-250`]},"vira-blue-behind-bg-body":{background:U[`vira-blue-350`]},"vira-blue-behind-bg-non-body":{background:U[`vira-blue-400`]},"vira-blue-behind-bg-header":{background:U[`vira-blue-500`]},"vira-blue-behind-bg-placeholder":{background:U[`vira-blue-650`]},"vira-blue-behind-bg-decoration":{background:U[`vira-blue-750`]},"vira-blue-behind-bg-invisible":{background:U[`vira-blue-1000`]},"vira-blue-behind-bg-lowest-contrast":{background:U[`vira-blue-1000`]},"vira-blue-behind-fg-highest-contrast":{background:U[`vira-blue-1000`]},"vira-blue-behind-fg-small-body":{background:U[`vira-blue-1000`]},"vira-blue-behind-fg-body":{background:U[`vira-blue-750`]},"vira-blue-behind-fg-non-body":{background:U[`vira-blue-600`]},"vira-blue-behind-fg-header":{background:U[`vira-blue-450`]},"vira-blue-behind-fg-placeholder":{background:U[`vira-blue-400`]},"vira-blue-behind-fg-decoration":{background:U[`vira-blue-350`]},"vira-blue-behind-fg-invisible":{background:U[`vira-blue-250`]},"vira-blue-behind-fg-lowest-contrast":{background:U[`vira-blue-100`]},"vira-blue-on-self-highest-contrast":{foreground:U[`vira-blue-200`],background:U[`vira-blue-1000`]},"vira-blue-on-self-small-body":{foreground:U[`vira-blue-200`],background:U[`vira-blue-950`]},"vira-blue-on-self-body":{foreground:U[`vira-blue-200`],background:U[`vira-blue-750`]},"vira-blue-on-self-non-body":{foreground:U[`vira-blue-200`],background:U[`vira-blue-600`]},"vira-blue-on-self-header":{foreground:U[`vira-blue-200`],background:U[`vira-blue-500`]},"vira-blue-on-self-placeholder":{foreground:U[`vira-blue-200`],background:U[`vira-blue-450`]},"vira-blue-on-self-decoration":{foreground:U[`vira-blue-200`],background:U[`vira-blue-400`]},"vira-blue-on-self-invisible":{foreground:U[`vira-blue-200`],background:U[`vira-blue-100`]},"vira-blue-on-self-lowest-contrast":{foreground:U[`vira-blue-200`],background:U[`vira-blue-100`]},"vira-accent-foreground-highest-contrast":{foreground:U[`vira-accent-100`]},"vira-accent-foreground-small-body":{foreground:U[`vira-accent-250`]},"vira-accent-foreground-body":{foreground:U[`vira-accent-350`]},"vira-accent-foreground-non-body":{foreground:U[`vira-accent-400`]},"vira-accent-foreground-placeholder":{foreground:U[`vira-accent-600`]},"vira-accent-foreground-decoration":{foreground:U[`vira-accent-750`]},"vira-accent-foreground-invisible":{foreground:U[`vira-accent-1000`]},"vira-accent-foreground-lowest-contrast":{foreground:U[`vira-accent-1000`]},"vira-accent-behind-bg-highest-contrast":{background:U[`vira-accent-100`]},"vira-accent-behind-bg-small-body":{background:U[`vira-accent-250`]},"vira-accent-behind-bg-body":{background:U[`vira-accent-350`]},"vira-accent-behind-bg-non-body":{background:U[`vira-accent-400`]},"vira-accent-behind-bg-header":{background:U[`vira-accent-500`]},"vira-accent-behind-bg-placeholder":{background:U[`vira-accent-650`]},"vira-accent-behind-bg-decoration":{background:U[`vira-accent-750`]},"vira-accent-behind-bg-invisible":{background:U[`vira-accent-1000`]},"vira-accent-behind-bg-lowest-contrast":{background:U[`vira-accent-1000`]},"vira-accent-behind-fg-highest-contrast":{background:U[`vira-accent-1000`]},"vira-accent-behind-fg-small-body":{background:U[`vira-accent-1000`]},"vira-accent-behind-fg-body":{background:U[`vira-accent-750`]},"vira-accent-behind-fg-non-body":{background:U[`vira-accent-600`]},"vira-accent-behind-fg-header":{background:U[`vira-accent-450`]},"vira-accent-behind-fg-placeholder":{background:U[`vira-accent-400`]},"vira-accent-behind-fg-decoration":{background:U[`vira-accent-350`]},"vira-accent-behind-fg-invisible":{background:U[`vira-accent-250`]},"vira-accent-behind-fg-lowest-contrast":{background:U[`vira-accent-100`]},"vira-accent-on-self-highest-contrast":{foreground:U[`vira-accent-200`],background:U[`vira-accent-1000`]},"vira-accent-on-self-small-body":{foreground:U[`vira-accent-200`],background:U[`vira-accent-950`]},"vira-accent-on-self-body":{foreground:U[`vira-accent-200`],background:U[`vira-accent-750`]},"vira-accent-on-self-non-body":{foreground:U[`vira-accent-200`],background:U[`vira-accent-600`]},"vira-accent-on-self-header":{foreground:U[`vira-accent-200`],background:U[`vira-accent-500`]},"vira-accent-on-self-placeholder":{foreground:U[`vira-accent-200`],background:U[`vira-accent-450`]},"vira-accent-on-self-decoration":{foreground:U[`vira-accent-200`],background:U[`vira-accent-400`]},"vira-accent-on-self-invisible":{foreground:U[`vira-accent-200`],background:U[`vira-accent-100`]},"vira-accent-on-self-lowest-contrast":{foreground:U[`vira-accent-200`],background:U[`vira-accent-100`]},"vira-purple-foreground-highest-contrast":{foreground:U[`vira-purple-100`]},"vira-purple-foreground-small-body":{foreground:U[`vira-purple-250`]},"vira-purple-foreground-body":{foreground:U[`vira-purple-350`]},"vira-purple-foreground-non-body":{foreground:U[`vira-purple-400`]},"vira-purple-foreground-header":{foreground:U[`vira-purple-450`]},"vira-purple-foreground-placeholder":{foreground:U[`vira-purple-600`]},"vira-purple-foreground-decoration":{foreground:U[`vira-purple-750`]},"vira-purple-foreground-invisible":{foreground:U[`vira-purple-1000`]},"vira-purple-foreground-lowest-contrast":{foreground:U[`vira-purple-1000`]},"vira-purple-behind-bg-highest-contrast":{background:U[`vira-purple-100`]},"vira-purple-behind-bg-small-body":{background:U[`vira-purple-250`]},"vira-purple-behind-bg-body":{background:U[`vira-purple-350`]},"vira-purple-behind-bg-non-body":{background:U[`vira-purple-400`]},"vira-purple-behind-bg-header":{background:U[`vira-purple-500`]},"vira-purple-behind-bg-placeholder":{background:U[`vira-purple-600`]},"vira-purple-behind-bg-decoration":{background:U[`vira-purple-750`]},"vira-purple-behind-bg-invisible":{background:U[`vira-purple-1000`]},"vira-purple-behind-bg-lowest-contrast":{background:U[`vira-purple-1000`]},"vira-purple-behind-fg-highest-contrast":{background:U[`vira-purple-1000`]},"vira-purple-behind-fg-small-body":{background:U[`vira-purple-1000`]},"vira-purple-behind-fg-body":{background:U[`vira-purple-700`]},"vira-purple-behind-fg-non-body":{background:U[`vira-purple-600`]},"vira-purple-behind-fg-header":{background:U[`vira-purple-450`]},"vira-purple-behind-fg-placeholder":{background:U[`vira-purple-400`]},"vira-purple-behind-fg-decoration":{background:U[`vira-purple-350`]},"vira-purple-behind-fg-invisible":{background:U[`vira-purple-200`]},"vira-purple-behind-fg-lowest-contrast":{background:U[`vira-purple-100`]},"vira-purple-on-self-highest-contrast":{foreground:U[`vira-purple-200`],background:U[`vira-purple-1000`]},"vira-purple-on-self-small-body":{foreground:U[`vira-purple-200`],background:U[`vira-purple-950`]},"vira-purple-on-self-body":{foreground:U[`vira-purple-200`],background:U[`vira-purple-750`]},"vira-purple-on-self-non-body":{foreground:U[`vira-purple-200`],background:U[`vira-purple-600`]},"vira-purple-on-self-header":{foreground:U[`vira-purple-200`],background:U[`vira-purple-500`]},"vira-purple-on-self-placeholder":{foreground:U[`vira-purple-200`],background:U[`vira-purple-450`]},"vira-purple-on-self-decoration":{foreground:U[`vira-purple-200`],background:U[`vira-purple-400`]},"vira-purple-on-self-invisible":{foreground:U[`vira-purple-200`],background:U[`vira-purple-100`]},"vira-purple-on-self-lowest-contrast":{foreground:U[`vira-purple-200`],background:U[`vira-purple-100`]},"vira-pink-foreground-highest-contrast":{foreground:U[`vira-pink-100`]},"vira-pink-foreground-small-body":{foreground:U[`vira-pink-200`]},"vira-pink-foreground-body":{foreground:U[`vira-pink-350`]},"vira-pink-foreground-non-body":{foreground:U[`vira-pink-400`]},"vira-pink-foreground-header":{foreground:U[`vira-pink-450`]},"vira-pink-foreground-placeholder":{foreground:U[`vira-pink-600`]},"vira-pink-foreground-decoration":{foreground:U[`vira-pink-750`]},"vira-pink-foreground-invisible":{foreground:U[`vira-pink-1000`]},"vira-pink-foreground-lowest-contrast":{foreground:U[`vira-pink-1000`]},"vira-pink-behind-bg-highest-contrast":{background:U[`vira-pink-100`]},"vira-pink-behind-bg-small-body":{background:U[`vira-pink-200`]},"vira-pink-behind-bg-body":{background:U[`vira-pink-350`]},"vira-pink-behind-bg-non-body":{background:U[`vira-pink-400`]},"vira-pink-behind-bg-header":{background:U[`vira-pink-500`]},"vira-pink-behind-bg-placeholder":{background:U[`vira-pink-600`]},"vira-pink-behind-bg-decoration":{background:U[`vira-pink-750`]},"vira-pink-behind-bg-invisible":{background:U[`vira-pink-1000`]},"vira-pink-behind-bg-lowest-contrast":{background:U[`vira-pink-1000`]},"vira-pink-behind-fg-highest-contrast":{background:U[`vira-pink-1000`]},"vira-pink-behind-fg-small-body":{background:U[`vira-pink-1000`]},"vira-pink-behind-fg-body":{background:U[`vira-pink-700`]},"vira-pink-behind-fg-non-body":{background:U[`vira-pink-550`]},"vira-pink-behind-fg-header":{background:U[`vira-pink-450`]},"vira-pink-behind-fg-placeholder":{background:U[`vira-pink-400`]},"vira-pink-behind-fg-decoration":{background:U[`vira-pink-350`]},"vira-pink-behind-fg-invisible":{background:U[`vira-pink-200`]},"vira-pink-behind-fg-lowest-contrast":{background:U[`vira-pink-100`]},"vira-pink-on-self-highest-contrast":{foreground:U[`vira-pink-200`],background:U[`vira-pink-1000`]},"vira-pink-on-self-small-body":{foreground:U[`vira-pink-200`],background:U[`vira-pink-1000`]},"vira-pink-on-self-body":{foreground:U[`vira-pink-200`],background:U[`vira-pink-750`]},"vira-pink-on-self-non-body":{foreground:U[`vira-pink-200`],background:U[`vira-pink-600`]},"vira-pink-on-self-header":{foreground:U[`vira-pink-200`],background:U[`vira-pink-500`]},"vira-pink-on-self-placeholder":{foreground:U[`vira-pink-200`],background:U[`vira-pink-450`]},"vira-pink-on-self-decoration":{foreground:U[`vira-pink-200`],background:U[`vira-pink-350`]},"vira-pink-on-self-invisible":{foreground:U[`vira-pink-200`],background:U[`vira-pink-100`]},"vira-pink-on-self-lowest-contrast":{foreground:U[`vira-pink-200`],background:U[`vira-pink-100`]},"vira-grey-foreground-highest-contrast":{foreground:U[`vira-grey-100`]},"vira-grey-foreground-small-body":{foreground:U[`vira-grey-250`]},"vira-grey-foreground-body":{foreground:U[`vira-grey-350`]},"vira-grey-foreground-non-body":{foreground:U[`vira-grey-400`]},"vira-grey-foreground-placeholder":{foreground:U[`vira-grey-600`]},"vira-grey-foreground-decoration":{foreground:U[`vira-grey-750`]},"vira-grey-foreground-invisible":{foreground:U[`vira-grey-1000`]},"vira-grey-foreground-lowest-contrast":{foreground:U[`vira-grey-1000`]},"vira-grey-behind-bg-highest-contrast":{background:U[`vira-grey-100`]},"vira-grey-behind-bg-small-body":{background:U[`vira-grey-250`]},"vira-grey-behind-bg-body":{background:U[`vira-grey-350`]},"vira-grey-behind-bg-non-body":{background:U[`vira-grey-400`]},"vira-grey-behind-bg-placeholder":{background:U[`vira-grey-650`]},"vira-grey-behind-bg-decoration":{background:U[`vira-grey-750`]},"vira-grey-behind-bg-invisible":{background:U[`vira-grey-1000`]},"vira-grey-behind-bg-lowest-contrast":{background:U[`vira-grey-1000`]},"vira-grey-behind-fg-highest-contrast":{background:U[`vira-grey-1000`]},"vira-grey-behind-fg-small-body":{background:U[`vira-grey-1000`]},"vira-grey-behind-fg-body":{background:U[`vira-grey-750`]},"vira-grey-behind-fg-non-body":{background:U[`vira-grey-600`]},"vira-grey-behind-fg-placeholder":{background:U[`vira-grey-400`]},"vira-grey-behind-fg-decoration":{background:U[`vira-grey-350`]},"vira-grey-behind-fg-invisible":{background:U[`vira-grey-250`]},"vira-grey-behind-fg-lowest-contrast":{background:U[`vira-grey-100`]},"vira-grey-on-self-highest-contrast":{foreground:U[`vira-grey-200`],background:U[`vira-grey-1000`]},"vira-grey-on-self-small-body":{foreground:U[`vira-grey-200`],background:U[`vira-grey-950`]},"vira-grey-on-self-body":{foreground:U[`vira-grey-200`],background:U[`vira-grey-750`]},"vira-grey-on-self-non-body":{foreground:U[`vira-grey-200`],background:U[`vira-grey-650`]},"vira-grey-on-self-header":{foreground:U[`vira-grey-200`],background:U[`vira-grey-500`]},"vira-grey-on-self-placeholder":{foreground:U[`vira-grey-200`],background:U[`vira-grey-450`]},"vira-grey-on-self-decoration":{foreground:U[`vira-grey-200`],background:U[`vira-grey-400`]},"vira-grey-on-self-invisible":{foreground:U[`vira-grey-200`],background:U[`vira-grey-100`]},"vira-grey-on-self-lowest-contrast":{foreground:U[`vira-grey-200`],background:U[`vira-grey-100`]}}}),aP=`8px`,G=Rd({"vira-form-border-color":W.colors[`vira-grey-foreground-decoration`].foreground.value,"vira-form-placeholder-color":W.colors[`vira-grey-foreground-placeholder`].foreground.value,"vira-form-background-color":W.colors[$N].background.value,"vira-form-foreground-color":W.colors[$N].foreground.value,"vira-form-modal-backdrop-color":`rgba(0, 0, 0, 0.35)`,"vira-form-secondary-body-foreground":W.colors[`vira-grey-foreground-header`].foreground.value,"vira-form-text-selection-color":W.colors[`vira-accent-behind-bg-decoration`].background.value,"vira-form-selection-hover-color":W.colors[`vira-accent-behind-bg-invisible`].background.value,"vira-form-selection-active-color":W.colors[`vira-accent-behind-bg-decoration`].background.value,"vira-form-error-color":W.colors[`vira-red-behind-bg-non-body`].background.value,"vira-form-error-hover-color":W.colors[`vira-red-behind-bg-header`].background.value,"vira-form-error-active-color":W.colors[`vira-red-behind-bg-body`].background.value,"vira-form-warning-color":W.colors[`vira-yellow-behind-bg-non-body`].background.value,"vira-form-warning-hover-color":W.colors[`vira-yellow-behind-bg-header`].background.value,"vira-form-warning-active-color":W.colors[`vira-yellow-behind-bg-body`].background.value,"vira-form-positive-color":W.colors[`vira-green-behind-bg-non-body`].background.value,"vira-form-positive-hover-color":W.colors[`vira-green-behind-bg-header`].background.value,"vira-form-positive-active-color":W.colors[`vira-green-behind-bg-body`].background.value,"vira-form-success-color":W.colors[`vira-green-behind-bg-non-body`].background.value,"vira-form-label-font-weight":`bold`,"vira-form-small-text-size":`14px`,"vira-form-medium-text-size":`16px`,"vira-form-large-text-size":`22px`,"vira-form-radius":aP,"vira-form-wrapper-radius":`16px`,"vira-form-focus-outline-color":W.colors[`vira-accent-foreground-header`].foreground.value,"vira-form-focus-outline-border-radius":z`calc(var(--vira-form-radius, ${Eu(aP)}) + 2px)`,"vira-form-plain-color":U[`vira-grey-100`].value,"vira-form-plain-hover-color":W.colors[`vira-grey-foreground-invisible`].foreground.value,"vira-form-plain-active-color":W.colors[`vira-grey-foreground-decoration`].foreground.value,"vira-form-accent-primary-color":W.colors[`vira-accent-behind-bg-non-body`].background.value,"vira-form-accent-primary-hover-color":W.colors[`vira-accent-behind-bg-header`].background.value,"vira-form-accent-primary-active-color":W.colors[`vira-accent-behind-bg-body`].background.value,"vira-form-danger-color":W.colors[`vira-red-behind-bg-non-body`].background.value,"vira-form-danger-hover-color":W.colors[`vira-red-behind-bg-header`].background.value,"vira-form-danger-active-color":W.colors[`vira-red-behind-bg-body`].background.value,"vira-form-filled-background-color":W.colors[`vira-grey-foreground-invisible`].foreground.value,"vira-form-filled-active-background-color":W.colors[`vira-grey-foreground-decoration`].foreground.value}),oP=z`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,sP=Rd({"vira-extended-animation-duration":`1.2s`,"vira-pretty-animation-duration":`300ms`,"vira-interaction-animation-duration":`84ms`});function cP(e){return j.isString(e)?Eu(e):e.value}function lP({elementBorderSize:e=`1px`,outlineGap:t=`2px`,outlineWidth:n=`2px`,noNesting:r,outlineColor:i=G[`vira-form-focus-outline-color`],borderRadius:a=G[`vira-form-focus-outline-border-radius`],renderInside:o}={}){let s=z`calc(${cP(t)})`,c=z`calc(${cP(n)} + ${cP(t)} + ${cP(e)})`,l=o?z`
              content: '';
              top: ${s};
              left: ${s};
              position: absolute;
              width: calc(100% - calc(${s} * 2));
              height: calc(100% - calc(${s} * 2));
              box-sizing: border-box;
              pointer-events: none;
              border: ${cP(n)} solid ${cP(i)};
              border-radius: ${cP(a)};
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
              border: ${cP(n)} solid ${cP(i)};
              border-radius: ${cP(a)};
              z-index: 100;
          `;return r?l:z`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${l}
        }
    `}var uP=Rd({"vira-monospace":`monospace`}),dP={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};jl(dP,e=>e),Object.fromEntries(Object.entries(dP).map(([e,t])=>[t,e]));var fP;(function(e){e.SmallBodyText=`small-body`,e.BodyText=`body`,e.NonBodyText=`non-body`,e.Header=`header`,e.Placeholder=`placeholder`,e.Decoration=`decoration`,e.Invisible=`invisible`})(fP||={}),fP.SmallBodyText,fP.BodyText,fP.NonBodyText,fP.Header,fP.Placeholder,fP.Decoration,fP.Invisible,fP.SmallBodyText,fP.BodyText,fP.NonBodyText,fP.Header,fP.Placeholder,fP.Decoration,fP.Invisible;var pP=[{min:90,name:fP.SmallBodyText,description:`Perfect for all sizes of text, even small body text.`,apcaName:`small body text only`,apcaDescription:`Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color.`},{min:75,name:fP.BodyText,description:`Good for regular body text and anything larger.`,apcaName:`body text okay`,apcaDescription:`The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important.`},{min:60,name:fP.NonBodyText,description:`Good for legible non-body text and anything larger.`,apcaName:`fluent text only`,apcaDescription:`The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast.`},{min:45,name:fP.Header,description:`Okay for large or headline text.`,apcaName:`large & sub-fluent text`,apcaDescription:`The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension.`},{min:30,name:fP.Placeholder,description:`Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.`,apcaName:`spot & non text only`,apcaDescription:`The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.`},{min:15,name:fP.Decoration,description:`Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.`,apcaName:`no text usage`,apcaDescription:`The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site.`},{min:0,name:fP.Invisible,description:`Effectively invisible for users.`,apcaName:`invisible`,apcaDescription:`This should be treated as invisible.`}];Kc(pP,e=>({key:e.min,value:e})),Kc(pP,e=>({key:e.name,value:e}));var mP=[`highest-contrast`,`lowest-contrast`,...Ee(fP).sort((e,t)=>Number(t.includes(`-`))-Number(e.includes(`-`)))],hP=Kc(i(Gc(Object.keys(W.colors),e=>e.split(`-`)[1],e=>e!==`default`)).filter(j.isTruthy),e=>({key:e,value:e}),{useRequired:!0}),gP=S(W.colors),_P=pl(hP,e=>Kc(i(Gc(gP,t=>mP.reduce((e,t)=>vl({value:e,suffix:`-${t}`}),dl({value:t,prefix:`vira-${e}-`})),(t,n)=>n.startsWith(`vira-${e}-`))),t=>({key:t,value:Kc(mP,n=>{let r=`vira-${e}-${t}-${n}`;if(j.hasKey(W.colors,r))return{key:n,value:W.colors[r]}})}))),K;(function(e){e.Accent=`accent`,e.Plain=`plain`,e.Neutral=`neutral`,e.Danger=`danger`,e.Warning=`warning`,e.Positive=`positive`,e.None=`none`})(K||={});var vP={[K.Accent]:hP.accent,[K.Neutral]:hP.grey,[K.Danger]:hP.red,[K.Warning]:hP.yellow,[K.Positive]:hP.green},yP=[K.Accent,K.Plain,K.Neutral,K.Danger,K.Warning,K.Positive],bP;(function(e){e.Large=`large`,e.Medium=`medium`,e.Small=`small`,e.None=`none`})(bP||={});var xP=[bP.Small,bP.Medium,bP.Large],SP;(function(e){e.Standard=`standard`,e.Subtle=`subtle`,e.None=`none`})(SP||={});var CP=[SP.Standard,SP.Subtle],wP={[bP.Large]:40,[bP.Medium]:32,[bP.Small]:24},TP=z`
    padding: 0;
    margin: 0;
`,EP=z`
    ${TP};
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,DP=Rd({"menu-shadow-color":`#e2e2e2`,"modal-shadow-color":`#4f4f4f`}),OP={menuShadow:z`
        filter: drop-shadow(0px 5px 5px ${DP[`menu-shadow-color`].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:z`
        box-shadow: 0 5px 15px ${DP[`modal-shadow-color`].value};
    `},kP=z`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,AP=`vira-`,jP=LN({assertInputs:e=>{if(!e.tagName.startsWith(AP))throw Error(`Tag name should start with '${AP}' but got '${e.tagName}'`)}}),q=jP()({tagName:`vira-icon`,hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer||!!e.icon?.size},styles:({hostClasses:e})=>z`
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
    `,render({inputs:e,host:t}){if(e.icon)e.icon.size&&(t.style.width=gl(e.icon.size),t.style.height=gl(e.icon.size));else return``;return e.icon.svgTemplate}});async function MP(e=1){let t=new Pe;function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return n(),t.promise}function NP(e,t){return{element:e,children:PP(e,t??0,0)}}function PP(e,t,n){return FP(e).map(e=>{let r=n+1;return{element:e,children:t&&r>=Math.abs(t)?[]:PP(e,t,r)}})}function FP(e){return[...e.children,...e.shadowRoot?.children??[]]}function IP(e){return e.matches(`:focus`)}function LP(e){if(e instanceof ShadowRoot)return e.host;let t=e.parentNode;if(t)return t instanceof Element?t:LP(t)}function RP(e,t){if(t(e))return e;let n=LP(e);if(n)return RP(n,t)}function zP(e,t,n={}){let r=n.useOriginalTarget?e.target:e.currentTarget;if(!(r instanceof t)){let i=t.name,a=r?.constructor.name,o=n.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${a}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${a}'.`;throw Error(o)}return r}function BP(e){let t=LP(e);return t&&RP(t,e=>globalThis.getComputedStyle(e).overflowY!==`visible`)||document.body}function VP(e){let t=0,n=document.activeElement||void 0;for(;n;){if(e({depth:t,element:n}))return t;n=n.shadowRoot?.activeElement||void 0,n&&++t}return t}function HP(e,t){return e>t}function UP(e,t){return e<t}function WP(e){e.scrollIntoView({behavior:`smooth`,inline:`center`,block:`center`}),e.focus()}var GP;(function(e){e.Up=`up`,e.Down=`down`,e.Left=`left`,e.Right=`right`})(GP||={});var KP;(function(e){e.Enter=`enter`,e.Exit=`exit`,e.Activate=`activate`,e.Focus=`focus`,e.Navigate=`navigate`,e.Pibling=`pibling`})(KP||={});function qP(e){let t={x:-1,y:-1},n;for(;t.y<e.length-1&&!n;){t.y++;let r=e[t.y];for(;r&&t.x<r.length-1&&!n;){t.x++;let e=r[t.x];if(e)if(e.navEntry.navParams.group){let t=qP(e.children);t&&(n=t.node)}else e.navEntry.navParams.disabled||(n=e)}}if(n)return{node:n,coords:t}}function JP(e,t,n,r){if(!t){let t=qP(e.children);return t?(WP(t.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:t.node.element,coords:t.coords,direction:n,navAction:KP.Navigate}):{success:!1,reason:`no default element to focus`,direction:n,navAction:KP.Navigate}}let{nextNode:i,requiresWrapping:a,coords:o}=YP(t.position,n),s=r?!0:!a;return i&&s?(WP(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:a,direction:n,navAction:KP.Navigate,coords:o}):i?s?{success:!1,reason:`no conditions matched`,direction:n,navAction:KP.Navigate}:{success:!1,reason:`wrapping blocked`,direction:n,navAction:KP.Navigate}:{success:!1,reason:`failed to find node to focus`,direction:n,navAction:KP.Navigate}}function YP(e,t){let n=!1,r,i=1,a=Date.now();for(;!n||!r;)if(r=XP(e,t,i),n=!r.nextNode?.navEntry.navParams.disabled,i++,Date.now()-a>1e3)return wl.warning(`Failed to find next non-disabled node.`),r;return r}function XP(e,t,n){let r=e.ancestorChain[e.ancestorChain.length-1]?.node;Mc.isDefined(r,`missing parent`);let i=Dc.isDefined(r.children[e.nodeCoords.y]),a=r.children.length>1&&(t===GP.Down||t===GP.Up),o=t===GP.Down||t===GP.Right?n:-1*n,s=o<0?HP:UP,c=a?kl(e.nodeCoords.y+o,{min:0,max:r.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=Dc.isDefined(r.children[c]),u=a?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:kl(e.nodeCoords.x+o,{min:0,max:i.length-1,takeOverflow:!0});return{nextNode:r.children[c]?.[u],requiresWrapping:a?s(c,e.nodeCoords.y):s(u,e.nodeCoords.x),coords:{x:u,y:c}}}function ZP(e,t,n){let r=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!r)return{success:!1,reason:`no parent to find a pibling from`,direction:t,navAction:KP.Pibling};let{nextNode:i,requiresWrapping:a,coords:o}=YP(r,t),s=i?.navEntry.navParams.group?qP(i.children):{node:i,coords:o},c=n?!0:!a;return!s||!s.node?{success:!1,reason:`no node to navigate to`,direction:t,navAction:KP.Pibling}:c?(WP(s.node.element),{success:!0,defaulted:!1,newElement:s.node.element,wrapped:a,coords:s.coords,direction:t,navAction:KP.Pibling}):{success:!1,reason:`wrapping blocked`,direction:t,navAction:KP.Pibling}}var QP;(function(e){e.Disabled=`disabled`,e.Group=`group`,e.Focused=`focused`,e.Active=`active`})(QP||={});var $P={name:`data-nav`,js(e){return e?`[${$P.name}*="${e}"]`:`[${$P.name}]`},css({baseSelector:e=``,navValue:t}={}){return z`
            ${Eu(e)}${Eu($P.js(t))}
        `}},eF=`navEntry`;function tF(e){return eF in e}function nF(e){if(tF(e)){let t=e[eF];return Dc.instanceOf(t,iF,`Invalid nav entry`)}else return}function rF(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type===`mousedown`&&!e.navController.options.activateOnMouseUp||t.type===`mouseup`&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type===`mouseup`||t.type===`focus`?t.target===e.element&&e.focus(!0):t.type===`mousemove`?t.target===e.element&&e.navValue!==QP.Active&&e.focus(!0):(t.type===`blur`||t.type===`mouseleave`)&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}var iF=class{element;navParams;navTreeNode;navValue;eventListener=rF(this);constructor(e,t,n){this.element=e,this.navParams=n,this.attachListeners(),this.navController=t}set navController(e){this._navController!==e&&(this._navController?.removeNavEntry(this),this._navController=e,e.addNavEntry(this))}get navController(){return Mc.isDefined(this._navController,`this.navController has not been set in NavEntry constructor yet.`),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(Al(this).navValue=void 0,this.element.setAttribute($P.name,``),IP(this.element)&&this.element.blur())}focus(e,t){let n=this.navValue,r=e===(n===QP.Focused);if(!(this.navParams.group||this.navController.locked||r||!e&&this.navController.options.alwaysRequireFocused))return e?(this.setNavValue(QP.Focused),IP(this.element)||this.element.focus()):(this.removeNavValue(QP.Focused),IP(this.element)&&this.element.blur()),t||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:e,previousNavValue:n}),this.navController.triggerNavEntry(this,e,KP.Focus)}activate(e){let t=this.navValue,n=e===(t===QP.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(e,!0),e?this.setNavValue(QP.Active):this.setNavValue(QP.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:e,previousNavValue:t}),this.navController.triggerNavEntry(this,e,KP.Activate)}setNavValue(e){Al(this).navValue=e,this.element.setAttribute($P.name,e)}removeNavValue(e){this.navValue===e&&(Al(this).navValue=void 0,this.element.setAttribute($P.name,``))}attachListeners(){this.element.addEventListener(`mousemove`,this.eventListener,!0),this.element.addEventListener(`mouseleave`,this.eventListener,!0),this.element.addEventListener(`mousedown`,this.eventListener,!0),this.element.addEventListener(`mouseup`,this.eventListener,!0),this.element.addEventListener(`focus`,this.eventListener,!0),this.element.addEventListener(`blur`,this.eventListener,!0)}};function aF(e,t){if(!t)return{success:!1,reason:`no focused node to enter into`,direction:void 0,navAction:KP.Enter};if(!t.position.node.children.length)return{success:!1,reason:`no children to enter into`,direction:void 0,navAction:KP.Enter};let n=t.position.node.children[0]?.[0];return n?(WP(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:KP.Enter,coords:{x:0,y:0}}):{success:!1,reason:`failed to find first child to enter into`,direction:void 0,navAction:KP.Enter}}function oF(e,t){return sF([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function sF(e,t,n){for(let r=0;r<t.length;r++){let i=t[r];for(let t=0;t<i.length;t++){let a=i[t],o={ancestorChain:e,nodeCoords:{x:t,y:r},node:a};if(n(o))return o;let s=sF(e.concat(o),a.children,n);if(s)return s}}}function cF(e,t){let n=oF(e,({node:e})=>!e.root&&e.navEntry===t);if(!n)throw Error(`Failed to find NavEntry in NavTree.`);return n}function lF(e,t){if(!t)return{success:!1,reason:`no focused node to exit out of`,direction:void 0,navAction:KP.Exit};let n=t.position.ancestorChain.toReversed().find(e=>!e.node.root&&!e.node.navEntry.navParams.group)?.node;if(!n||n.root)return{success:!1,reason:`failed to find ancestor, nothing to exit to`,direction:void 0,navAction:KP.Exit};let{nodeCoords:r}=cF(e,n.navEntry);return WP(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:KP.Exit,coords:r}}var uF=class extends Hl()(`nav-exit`){},dF=class extends Hl()(`nav-activate`){},fF=class extends Hl()(`nav-focus`){},pF=class extends Hl()(`nav-enter`){},mF=class extends Hl()(`nav-navigate`){},hF=class extends Hl()(`nav-navigate-pibling`){};function gF(e){return{root:!0,children:_F(e)?.children||[]}}function _F(e){let t=e.element;if(!(t instanceof HTMLElement))return;let n=nF(t),r=vF(e);if(n?.navParams.group&&r.length||r.length||n)return{root:!1,element:t,navEntry:n,children:r}}function vF(e){let t=[];function n(e){if(e.navEntry?.navParams.group&&!e.children.length)return;if(!e.navEntry){e.children.forEach(e=>e.forEach(e=>n(e)));return}let r=e.navEntry.navParams.x,i=e.navEntry.navParams.y||0,a=Hc(t,i,()=>({noX:[],withX:[],y:i}));r==null?a.noX.push(e):a.withX.push({x:r,node:e})}return e.children.forEach(e=>{let t=_F(e);t&&n(t)}),t.sort((e,t)=>e.y-t.y).map(e=>(e.withX.sort((e,t)=>e.x-t.x),e.withX.forEach(({x:t,node:n})=>{e.noX.splice(t,0,n)}),e.noX)).filter(j.isTruthy)}var yF=class extends Gl{rootElement;options;constructor(e,t={}){super(),this.rootElement=e,this.options=t}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){qP(this.getNavTree().children)?.node.element.focus()}addNavEntry(e){this.navEntries.add(e),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(e){this.navEntries.delete(e),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(e,t,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:`NavController is locked.`};if(!e)return{success:!1,direction:void 0,navAction:n,reason:`No nav entry to operate on.`};let r=cF(this.getNavTree(),e);t?(this.navEntries.forEach(t=>{t!==e&&t.clearNavValue()}),this.currentNavEntry={entry:e,navAction:n,position:r}):this.currentNavEntry?.entry===e&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);let i={success:!0,defaulted:!1,direction:void 0,newElement:e.element,wrapped:!1,navAction:n,coords:r.nodeCoords};return t&&(n===KP.Activate?this.dispatch(new dF({detail:i})):n===KP.Focus&&this.dispatch(new fF({detail:i}))),i}navigate({direction:e,allowWrapping:t}){if(this.locked)return{success:!1,direction:e,navAction:KP.Navigate,reason:`NavController is locked.`};let n=JP(this.getNavTree(),this.currentNavEntry,e,t);return this.dispatch(new mF({detail:n})),n}enterInto({fallbackToActivate:e}={}){if(this.locked)return{success:!1,direction:void 0,navAction:KP.Enter,reason:`NavController is locked.`};let t=aF(this.getNavTree(),this.currentNavEntry);return!t.success&&e?this.activate():(this.dispatch(new pF({detail:t})),t)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:KP.Activate,reason:`NavController is locked.`};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:KP.Activate,reason:`No focused NavEntry to activate.`};let e=this.currentNavEntry.entry.activate(!0);return Mc.isDefined(e,`Cannot activate a group.`),e}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:KP.Exit,reason:`NavController is locked.`};this.currentNavEntry?.navAction===KP.Activate&&this.currentNavEntry.entry.focus(!0);let e=lF(this.getNavTree(),this.currentNavEntry);return this.dispatch(new uF({detail:e})),e}navigatePibling({allowWrapping:e,direction:t}){if(this.locked)return{success:!1,direction:t,navAction:KP.Pibling,reason:`NavController is locked.`};let n=this.getNavTree(),r={...this.currentNavEntry?ZP(this.currentNavEntry,t,e):JP(n,void 0,t,e),navAction:KP.Pibling};return this.dispatch(new hF({detail:r})),r}buildNavTree(){let e=gF(NP(this.rootElement));return this.cachedNavTree=e,e}};function bF({open:e,callback:t,popUpManager:n,host:r,options:i}){if(e){let e=n.showPopUp(r,i);t?.(e)}else n.removePopUp(),t?.(void 0)}var xF=globalThis.document,SF=class extends dM{constructor(){if(super({defaultValue:!!xF?.hidden,equalityCheck:j.strictEquals}),!xF)return;globalThis.addEventListener(`visibilitychange`,e=>this.updateVisibility(e,xF));let e=e=>this.updateVisibility(e,xF);globalThis.onpageshow=e,globalThis.onpagehide=e,globalThis.onfocus=e,globalThis.onblur=e}updateVisibility(e,t){let n=wF.includes(e.type),r=CF.includes(e.type),i=n?!0:r?!1:t.hasFocus()||!t.hidden;this.setValue(i)}},CF=[`blur`,`focusout`,`pagehide`],wF=[`focus`,`focusin`,`pageshow`],TF=new SF;function EF(e,t){return TF.listen(e,t)}function DF(e){return e instanceof HTMLInputElement&&(e.type===`text`||e.type===`search`||e.type===`email`||e.type===`url`||e.type===`tel`||e.type===`password`||e.type===`number`)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}var OF={top:0,left:0,right:0,bottom:0},kF=class extends Ul(`hide-pop-up`){},AF=class extends Hl()(`nav-select`){},jF=class{navController;listenTarget=new Gl;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;constructor(e,t){this.navController=e,this.options={...this.options,...t}}attachGlobalListeners(){this.cleanupCallbacks=[EF(!1,e=>{e||this.removePopUp()}),this.navController.listen(dF,e=>{let t=e.composedPath()[0];t instanceof Element&&DF(t)||e.detail.success&&(this.listenTarget.dispatch(new AF({detail:e.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),e.stopImmediatePropagation(),e.preventDefault())}),ql(`mousedown`,e=>{this.lastRootElement&&e.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),ql(`keydown`,e=>{let t=e.code;if(t===`Escape`)this.removePopUp();else if(this.options.supportNavigation){let n=e.composedPath()[0];if(n instanceof Element&&DF(n))return;t===`ArrowDown`?(e.stopImmediatePropagation(),e.preventDefault(),this.navController.navigate({direction:GP.Down,allowWrapping:!1})):t===`ArrowUp`?(e.stopImmediatePropagation(),e.preventDefault(),this.navController.navigate({direction:GP.Up,allowWrapping:!1})):t===`ArrowLeft`?(e.stopImmediatePropagation(),e.preventDefault(),this.navController.navigate({direction:GP.Left,allowWrapping:!1})):t===`ArrowRight`?(e.stopImmediatePropagation(),e.preventDefault(),this.navController.navigate({direction:GP.Right,allowWrapping:!1})):(t===`Enter`||t===`Return`||t===`Space`)&&this.navController.enterInto({fallbackToActivate:!0}).success&&(e.stopImmediatePropagation(),e.preventDefault())}})]}listen(e,t,n){return this.listenTarget.listen(e,t,n)}removePopUp(){this.cleanupCallbacks.forEach(e=>e()),this.listenTarget.dispatch(new kF)}showPopUp(e,t){this.lastRootElement=e;let n={...this.options,...t},r=BP(e);Mc.instanceOf(r,HTMLElement);let i=e.getBoundingClientRect(),a=r.getBoundingClientRect(),o=r.offsetWidth-r.clientWidth,s=r.offsetHeight-r.clientHeight,c=r===document.body?{top:0,left:0,right:a.width,bottom:a.height}:{top:a.top,left:a.left,right:a.right-o,bottom:a.bottom-s},l=jl(OF,e=>i[e]),u=jl(OF,e=>{let t=c[e],n=l[e];return Math.abs(t-n)}),d=u.top>u.bottom+n.verticalDiffThreshold&&u.bottom<n.minDownSpace,f=u.left>u.right+n.horizontalDiffThreshold&&u.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!d,popRight:!f,positions:{container:c,root:l,diff:u}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}},MF;(function(e){e.Left=`left`,e.Right=`right`,e.Both=`both`,e.Auto=`auto`})(MF||={});var NF=jP()({tagName:`vira-pop-up-trigger`,state({host:e}){return{showPopUpResult:void 0,popUpManager:new jF(new yF(e,{activateOnMouseUp:!0}))}},slotNames:[`trigger`,`popUp`],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled,"vira-pop-up-trigger-inside-focus":({inputs:e})=>!!e.useInsideFocus,"vira-pop-up-trigger-outside-focus":({inputs:e})=>!e.useInsideFocus},styles:({hostClasses:e})=>z`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${EP};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;
        }

        ${e[`vira-pop-up-trigger-inside-focus`].selector} .dropdown-wrapper {
            ${lP({renderInside:!0})}
        }
        ${e[`vira-pop-up-trigger-outside-focus`].selector} .dropdown-wrapper {
            ${lP()}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${kP};
        }

        ${e[`vira-pop-up-trigger-disabled`].selector} {
            ${oP}
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
    `,events:{navSelect:QM(),openChange:QM(),init:QM()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:n,inputs:r,dispatch:i,events:a}){e.popUpManager.listen(kF,()=>{if(t({showPopUpResult:void 0}),i(new a.openChange(void 0)),r.focusOnClose&&!r.isDisabled){let e=n.shadowRoot.querySelector(`.dropdown-wrapper`);Mc.instanceOf(e,HTMLButtonElement,`failed to find dropdown wrapper child`),e.focus()}}),e.popUpManager.listen(AF,o=>{r.keepOpenAfterInteraction||bF({open:!1,callback(e){t({showPopUpResult:e})},host:n,popUpManager:e.popUpManager}),i(new a.navSelect(o.detail))}),i(new a.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:n,inputs:r,updateState:i,host:a,slotNames:o}){function s({emitEvent:o,open:s},c){if(n.showPopUpResult&&r.keepOpenAfterInteraction&&c){let e=a.shadowRoot.querySelector(`.dropdown-trigger`);if(e&&!c.composedPath().includes(e))return}bF({open:s,callback(n){i({showPopUpResult:n}),o&&e(new t.openChange(n))},host:a,popUpManager:n.popUpManager})}r.isDisabled?s({open:!1,emitEvent:!1},void 0):r.z_debug_forceOpenState!=null&&(!r.z_debug_forceOpenState&&n.showPopUpResult?s({emitEvent:!1,open:!1},void 0):r.z_debug_forceOpenState&&!n.showPopUpResult&&s({emitEvent:!1,open:!0},void 0));let c=r.horizontalAnchor===MF.Auto||r.horizontalAnchor===void 0?n.showPopUpResult?.popRight?MF.Left:MF.Right:r.horizontalAnchor,l=z`
            ${c===MF.Right&&n.showPopUpResult?r.ignoreMaxWidth?z`
                          left: unset;
                      `:z`
                          left: -${n.showPopUpResult.positions.diff.left}px;
                      `:z`
                      left: ${r.popUpOffset?.left||0}px;
                  `}
            ${n.showPopUpResult&&c===MF.Left?r.ignoreMaxWidth?z`
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
                    `:void 0;function d(e){s({emitEvent:!0,open:!n.showPopUpResult},e)}return B`
            <button
                ?disabled=${!!r.isDisabled}
                class="dropdown-wrapper ${DM({open:!!n.showPopUpResult,"open-upwards":!n.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!n.showPopUpResult}
                ${xN(`keydown`,e=>{!n.showPopUpResult&&e.code.startsWith(`Arrow`)&&s({emitEvent:!0,open:!0},e)})}
                ${xN(`click`,e=>{if(e.detail===0){let t=!1;if(VP(({element:e})=>DF(e)?(t=!0,!0):!1),t)return;d(e)}else if(e.button===0&&n.showPopUpResult){let t=a.shadowRoot.querySelector(`.dropdown-trigger`);t&&!e.composedPath().includes(t)&&s({emitEvent:!0,open:!1},e)}})}
                ${xN(`mousedown`,e=>{if(e.button!==0)return;let t=Dc.instanceOf(a.shadowRoot.querySelector(`.dropdown-trigger`),HTMLElement);e.composedPath().includes(t)&&d(e)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${o.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${DM({"right-aligned":c===MF.Right})}"
                    style=${u}
                >
                    ${MN(!!n.showPopUpResult,B`
                            <slot name=${o.popUp}></slot>
                        `)}
                </div>
            </button>
        `}}),PF=H({name:`Check16Icon`,svgTemplate:B`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="m12 5-6 6-3-3"
                fill="none"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),FF=H({name:`ChevronDown16Icon`,svgTemplate:B`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${V[`vira-icon-stroke-color`].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${V[`vira-icon-stroke-width`].value}
                d="M4 5.5 L8 10 12 5.5"
            />
        </svg>
    `}),IF=H({name:`ChevronUp16Icon`,svgTemplate:B`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${V[`vira-icon-stroke-color`].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${V[`vira-icon-stroke-width`].value}
                d="M4 10 L8 6 12 10"
            />
        </svg>
    `}),LF=H({name:`Dash16Icon`,svgTemplate:B`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 8h8"
                fill="none"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                stroke-linecap="round"
            />
        </svg>
    `}),RF=H({name:`Element16Icon`,svgTemplate:B`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),zF=H({name:`Upload16Icon`,svgTemplate:B`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M3 9v4h10v-4"
                fill=${V[`vira-icon-fill-color`].value}
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M8 9V2m3 3-3-3-3 3"
                fill="none"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    `}),BF=H({name:`X16Icon`,svgTemplate:B`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 4l8 8M12 4l-8 8"
                fill="none"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),VF=H({name:`ArrowDown24Icon`,svgTemplate:B`
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
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),HF=H({name:`ArrowLeft24Icon`,svgTemplate:B`
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
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),UF=H({name:`ArrowRight24Icon`,svgTemplate:B`
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
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),WF=H({name:`ArrowUp24Icon`,svgTemplate:B`
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
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),GF=H({name:`AutoTheme24Icon`,svgTemplate:B`
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
                fill=${V[`vira-icon-stroke-color`].value}
                stroke="none"
                style="fill-rule:nonzero"
            />
            <path
                d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 0v16"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill="none"
            />
        </svg>
    `}),KF=H({name:`Bell24Icon`,svgTemplate:B`
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
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill=${V[`vira-icon-fill-color`].value}
            />
        </svg>
    `}),qF=H({name:`Chat24Icon`,svgTemplate:B`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill=${V[`vira-icon-fill-color`].value}
            />
        </svg>
    `}),JF=H({name:`ChevronDown24Icon`,svgTemplate:B`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${V[`vira-icon-stroke-color`].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${V[`vira-icon-stroke-width`].value}
                d="M6 8 L12 15 18 8"
            />
        </svg>
    `}),YF=H({name:`ChevronUp24Icon`,svgTemplate:B`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${V[`vira-icon-stroke-color`].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${V[`vira-icon-stroke-width`].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),XF=H({name:`CloseX24Icon`,svgTemplate:B`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${V[`vira-icon-fill-color`].value}
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />

            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),ZF=H({name:`Commit24Icon`,svgTemplate:B`
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
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill=${V[`vira-icon-fill-color`].value}
            />

            <path
                d="M12 2v6m0 8v6"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill="none"
            />
        </svg>
    `}),QF=H({name:`Copy24Icon`,svgTemplate:B`
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
                fill=${V[`vira-icon-fill-color`].value}
            />
            <path
                d="M21 11v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8q.2-1.8 2-2h8a2 2 0 0 1 2 2"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill=${V[`vira-icon-fill-color`].value}
            />
            <path
                d="M7 16H6a2 2 0 0 1-2-2V6q.2-1.8 2-2h8a2 2 0 0 1 2 2v1"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill="none"
            />
        </svg>
    `}),$F=H({name:`Document24Icon`,svgTemplate:B`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill=${V[`vira-icon-fill-color`].value}
            />

            <path
                d="M13 3v6h6"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill="none"
            />
        </svg>
    `}),eI=H({name:`DocumentSearch24Icon`,svgTemplate:B`
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
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill=${V[`vira-icon-fill-color`].value}
            />
            <circle
                cx="11.7"
                cy="12.5"
                r="3.5"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill=${V[`vira-icon-fill-color`].value}
            />
            <path
                d="m14.2 15 2.5 2.5"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill=${V[`vira-icon-fill-color`].value}
            />
        </svg>
    `}),tI=H({name:`DoubleChevron24Icon`,svgTemplate:B`
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
                fill=${V[`vira-icon-fill-color`].value}
                stroke-width="none"
                stroke="none"
            />
            <path
                d="m7 15 5 5 5-5M7 9l5-5 5 5"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill="none"
            />
        </svg>
    `}),nI=H({name:`Element24Icon`,svgTemplate:B`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),rI=H({name:`ExternalLink24Icon`,svgTemplate:B`
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
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill=${V[`vira-icon-fill-color`].value}
            />
            <path
                d="M10 14 20 4m-5 0h5v5"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill="none"
            />
        </svg>
    `}),iI=H({name:`EyeClosed24Icon`,svgTemplate:B`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${V[`vira-icon-fill-color`].value}
            stroke=${V[`vira-icon-stroke-color`].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${V[`vira-icon-stroke-width`].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),aI=H({name:`EyeOpen24Icon`,svgTemplate:B`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${V[`vira-icon-fill-color`].value}
            stroke=${V[`vira-icon-stroke-color`].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${V[`vira-icon-stroke-width`].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),oI=H({name:`Filter24Icon`,svgTemplate:B`
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
                fill=${V[`vira-icon-fill-color`].value}
            />
            <path
                d="M3 6h18M6 12h12M9 18h6"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill="none"
                fill-rule="nonzero"
            />
        </svg>
    `}),sI=H({name:`Globe24Icon`,svgTemplate:B`
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
                fill=${V[`vira-icon-fill-color`].value}
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
            <path
                d="M21 12c0 5-4 9-9 9m9-9c0-5-4-9-9-9m9 9H3m9 9c-5 0-9-4-9-9m9 9q3.5-3.9 3.6-9 0-5.1-3.6-9m0 18a14 14 0 0 1-3.6-9q0-5.1 3.6-9m-9 9c0-5 4-9 9-9"
                style="fill-rule:nonzero;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4"
                fill="none"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),cI=H({name:`Link24Icon`,svgTemplate:B`
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
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill=${V[`vira-icon-fill-color`].value}
            />
            <path
                d="M12.4 9.6c.5.1 1 .5 1.5.9a4 4 0 0 1 0 5.7l-4.2 4.2A4 4 0 0 1 4 14.7l3-2.9"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill=${V[`vira-icon-fill-color`].value}
            />
            <path
                d="M11.6 14.4a4 4 0 0 1-1.5-6.6l4.2-4.2A4 4 0 0 1 20 9.3l-3 2.9"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill="none"
            />
        </svg>
    `}),lI=H({name:`Loader24Icon`,svgTemplate:B`
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
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),uI=H({name:`LoaderAnimated24Icon`,svgTemplate:B`
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
        animation: ${sP[`vira-extended-animation-duration`].value} linear
            loader-animated-spin infinite;
    }
`}
        </style>
        ${lI.svgTemplate}
    `}),dI=H({name:`Lock24Icon`,svgTemplate:B`
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
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill=${V[`vira-icon-fill-color`].value}
            />
            <circle
                cx="12"
                cy="14"
                r="1.5"
                fill=${V[`vira-icon-stroke-color`].value}
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width="calc(${V[`vira-icon-stroke-width`].value} - 1px)"
            />
            <path
                d="M12 14v4"
                fill=${V[`vira-icon-stroke-color`].value}
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />

            <path
                d="M17 10V7.5a5 5 0 0 0-10 0V10"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill="none"
            />
        </svg>
    `}),fI=H({name:`MagnifyingGlass24Icon`,svgTemplate:B`
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
                fill=${V[`vira-icon-fill-color`].value}
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),pI=H({name:`Moon24Icon`,svgTemplate:B`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke=${V[`vira-icon-stroke-color`].value}
            stroke-width=${V[`vira-icon-stroke-width`].value}
            fill=${V[`vira-icon-fill-color`].value}
            stroke-linejoin="round"
        >
            <path d="M18.6 17.72A8 8 0 1 1 15 4.26a8 8 0 0 0 3.6 13.46Z" />
        </svg>
    `}),mI=H({name:`Options24Icon`,svgTemplate:B`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${V[`vira-icon-fill-color`].value}
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />

                <circle cx="16.5" cy="12.5" r="2.5" />

                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>

            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),hI=H({name:`Pencil24Icon`,svgTemplate:B`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill=${V[`vira-icon-fill-color`].value}
            />

            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill="none"
            />
        </svg>
    `}),gI=H({name:`Plus24Icon`,svgTemplate:B`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M12 5v14M5 12h14"
                fill="none"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),_I=H({name:`Printer24Icon`,svgTemplate:B`
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
                fill=${V[`vira-icon-fill-color`].value}
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),vI=H({name:`Shield24Icon`,svgTemplate:B`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill=${V[`vira-icon-fill-color`].value}
            />
        </svg>
    `}),yI=H({name:`SortAscending24Icon`,svgTemplate:B`
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
                fill=${V[`vira-icon-fill-color`].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                d="m3 8 4-4 4 4M7 4v16"
            />
            <path
                fill="none"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),bI=H({name:`SortDescending24Icon`,svgTemplate:B`
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
                fill=${V[`vira-icon-fill-color`].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                d="m3 16 4 4 4-4m-4 4V4"
            />
            <path
                fill="none"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),xI=H({name:`Sparkle24Icon`,svgTemplate:B`
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
                fill=${V[`vira-icon-fill-color`].value}
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),SI=H({name:`SpeakerLoud24Icon`,svgTemplate:B`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill=${V[`vira-icon-fill-color`].value}
            />
        </svg>
    `}),CI=H({name:`SpeakerMedium24Icon`,svgTemplate:B`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill=${V[`vira-icon-fill-color`].value}
            />
        </svg>
    `}),wI=H({name:`SpeakerMuted24Icon`,svgTemplate:B`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill=${V[`vira-icon-fill-color`].value}
            />

            <path
                d="M4 20 20 4"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill=${V[`vira-icon-fill-color`].value}
            />
        </svg>
    `}),TI=H({name:`SpeakerQuiet24Icon`,svgTemplate:B`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill=${V[`vira-icon-fill-color`].value}
            />
        </svg>
    `}),EI=H({name:`Star24Icon`,svgTemplate:B`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill=${V[`vira-icon-fill-color`].value}
            />
        </svg>
    `}),DI=H({name:`StatusFailure24Icon`,svgTemplate:B`
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
                fill=${V[`vira-icon-fill-color`].value}
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />

            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),OI=H({name:`StatusInProgress24Icon`,svgTemplate:B`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${V[`vira-icon-fill-color`].value}
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />

            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${V[`vira-icon-stroke-color`].value}
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width="calc(${V[`vira-icon-stroke-width`].value} - 1px)"
            />

            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${V[`vira-icon-stroke-color`].value}
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width="calc(${V[`vira-icon-stroke-width`].value} - 1px)"
            />

            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${V[`vira-icon-stroke-color`].value}
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width="calc(${V[`vira-icon-stroke-width`].value} - 1px)"
            />
        </svg>
    `}),kI=H({name:`StatusSuccess24Icon`,svgTemplate:B`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${V[`vira-icon-fill-color`].value}
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />

            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),AI=H({name:`StatusUnknown24Icon`,svgTemplate:B`
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
                fill=${V[`vira-icon-fill-color`].value}
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${V[`vira-icon-stroke-color`].value}
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width="calc(${V[`vira-icon-stroke-width`].value} - 1px)"
            />
            <path
                d="M12 14c0-.5.09-.87.14-1q.13-.38.37-.7c.19-.24 1.3-1.46 1.46-1.65a3 3 0 0 0 .44-.73q.17-.42.17-.94 0-1.07-.7-1.65a2.7 2.7 0 0 0-1.8-.56q-1.12 0-1.83.7c-.3.29-.66.86-.66 1.53"
                fill="none"
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),jI=H({name:`StatusWarning24Icon`,svgTemplate:B`
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
                fill=${V[`vira-icon-fill-color`].value}
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${V[`vira-icon-stroke-color`].value}
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width="calc(${V[`vira-icon-stroke-width`].value} - 1px)"
            />
            <path
                d="m12 14 .2-7h-.4l.2 7Z"
                fill="none"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),MI=H({name:`Sun24Icon`,svgTemplate:B`
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
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill=${V[`vira-icon-fill-color`].value}
            />
            <path
                d="M12 2v3m0 14v3M4.22 4.22l2.12 2.12m11.32 11.32 2.12 2.12M2 12h3m14 0h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill="none"
            />
        </svg>
    `}),NI=H({name:`Upload24Icon`,svgTemplate:B`
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
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
                fill=${V[`vira-icon-fill-color`].value}
            />
            <path
                d="M12 15V4m4 4-4-4-4 4"
                fill="none"
                style="fill-rule:nonzero"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
        </svg>
    `}),PI=H({name:`X24Icon`,svgTemplate:B`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${V[`vira-icon-stroke-color`].value}
                stroke-width=${V[`vira-icon-stroke-width`].value}
            />
        </svg>
    `});function FI(e,t){let n=z`
        ${Eu(S(t).map(e=>{if(t[e])return`${V[e].name}: ${String(t[e])};`}).filter(j.isTruthy).join(` `))}
        display: inline-flex;
        vertical-align: middle;
    `;return H({name:e.name,svgTemplate:B`
            <div style=${n}>${e.svgTemplate}</div>
        `})}var II={ArrowDown24Icon:VF,ArrowLeft24Icon:HF,ArrowRight24Icon:UF,ArrowUp24Icon:WF,AutoTheme24Icon:GF,Bell24Icon:KF,Chat24Icon:qF,Check16Icon:PF,Check24Icon:XN,ChevronDown16Icon:FF,ChevronDown24Icon:JF,ChevronUp16Icon:IF,ChevronUp24Icon:YF,CloseX24Icon:XF,Commit24Icon:ZF,Copy24Icon:QF,Dash16Icon:LF,Document24Icon:$F,DocumentSearch24Icon:eI,DoubleChevron24Icon:tI,Element16Icon:RF,Element24Icon:nI,ExternalLink24Icon:rI,EyeClosed24Icon:iI,EyeOpen24Icon:aI,Filter24Icon:oI,Globe24Icon:sI,Link24Icon:cI,Loader24Icon:lI,LoaderAnimated24Icon:uI,Lock24Icon:dI,MagnifyingGlass24Icon:fI,Moon24Icon:pI,Options24Icon:mI,Pencil24Icon:hI,Plus24Icon:gI,Printer24Icon:_I,Shield24Icon:vI,SortAscending24Icon:yI,SortDescending24Icon:bI,Sparkle24Icon:xI,SpeakerLoud24Icon:SI,SpeakerMedium24Icon:CI,SpeakerMuted24Icon:wI,SpeakerQuiet24Icon:TI,Star24Icon:EI,StatusFailure24Icon:DI,StatusInProgress24Icon:OI,StatusSuccess24Icon:kI,StatusUnknown24Icon:AI,StatusWarning24Icon:jI,Sun24Icon:MI,Upload16Icon:zF,Upload24Icon:NI,X16Icon:BF,X24Icon:PI},LI={value:z`transparent`},RI={[K.Plain]:{[SP.Standard]:{idle:{backgroundColor:W.inverse[$N].background,textColor:W.inverse[$N].foreground,borderColor:W.inverse[$N].background},hover:{backgroundColor:W.colors[`vira-grey-behind-bg-non-body`].background,textColor:W.colors[`vira-grey-behind-bg-non-body`].foreground,borderColor:W.inverse[$N].background},active:{backgroundColor:W.colors[`vira-grey-behind-bg-body`].background,textColor:W.colors[`vira-grey-behind-bg-body`].foreground,borderColor:W.inverse[$N].background}},[SP.Subtle]:{idle:{backgroundColor:LI,textColor:W.colors[$N].foreground,borderColor:LI},hover:{backgroundColor:W.colors[`vira-grey-on-self-body`].background,textColor:W.colors[`vira-grey-on-self-body`].foreground,borderColor:W.colors[`vira-grey-on-self-body`].foreground},active:{backgroundColor:W.colors[`vira-grey-on-self-non-body`].background,textColor:W.colors[`vira-grey-on-self-non-body`].foreground,borderColor:W.colors[`vira-grey-on-self-non-body`].foreground}}},[K.Accent]:{[SP.Standard]:{idle:{backgroundColor:W.colors[`vira-accent-behind-bg-non-body`].background,textColor:W.colors[`vira-accent-behind-bg-non-body`].foreground,borderColor:W.colors[`vira-accent-behind-bg-body`].background},hover:{backgroundColor:W.colors[`vira-accent-behind-bg-header`].background,textColor:W.colors[`vira-accent-behind-bg-header`].foreground,borderColor:W.colors[`vira-accent-behind-bg-body`].background},active:{backgroundColor:W.colors[`vira-accent-behind-bg-body`].background,textColor:W.colors[`vira-accent-behind-bg-body`].foreground,borderColor:W.colors[`vira-accent-behind-bg-body`].background}},[SP.Subtle]:{idle:{backgroundColor:LI,textColor:W.colors[`vira-accent-foreground-non-body`].foreground,borderColor:LI},hover:{backgroundColor:W.colors[`vira-accent-on-self-body`].background,textColor:W.colors[`vira-accent-on-self-body`].foreground,borderColor:W.colors[`vira-accent-on-self-body`].foreground},active:{backgroundColor:W.colors[`vira-accent-on-self-non-body`].background,textColor:W.colors[`vira-accent-on-self-non-body`].foreground,borderColor:W.colors[`vira-accent-on-self-non-body`].foreground}}},[K.Neutral]:{[SP.Standard]:{idle:{backgroundColor:W.colors[$N].background,textColor:W.colors[$N].foreground,borderColor:G[`vira-form-border-color`]},hover:{backgroundColor:W.colors[`vira-grey-behind-fg-small-body`].background,textColor:W.colors[`vira-grey-behind-fg-small-body`].foreground,borderColor:G[`vira-form-border-color`]},active:{backgroundColor:W.colors[`vira-grey-behind-fg-body`].background,textColor:W.colors[`vira-grey-behind-fg-body`].foreground,borderColor:G[`vira-form-border-color`]}},[SP.Subtle]:{idle:{backgroundColor:LI,textColor:W.colors[`vira-grey-foreground-non-body`].foreground,borderColor:LI},hover:{backgroundColor:W.colors[`vira-grey-on-self-body`].background,textColor:W.colors[`vira-grey-on-self-body`].foreground,borderColor:W.colors[`vira-grey-on-self-body`].foreground},active:{backgroundColor:W.colors[`vira-grey-on-self-non-body`].background,textColor:W.colors[`vira-grey-on-self-non-body`].foreground,borderColor:W.colors[`vira-grey-on-self-non-body`].foreground}}},[K.Danger]:{[SP.Standard]:{idle:{backgroundColor:W.colors[`vira-red-behind-bg-non-body`].background,textColor:W.colors[`vira-red-behind-bg-non-body`].foreground,borderColor:W.colors[`vira-red-behind-bg-body`].background},hover:{backgroundColor:W.colors[`vira-red-behind-bg-header`].background,textColor:W.colors[`vira-red-behind-bg-header`].foreground,borderColor:W.colors[`vira-red-behind-bg-body`].background},active:{backgroundColor:W.colors[`vira-red-behind-bg-body`].background,textColor:W.colors[`vira-red-behind-bg-body`].foreground,borderColor:W.colors[`vira-red-behind-bg-body`].background}},[SP.Subtle]:{idle:{backgroundColor:LI,textColor:W.colors[`vira-red-foreground-non-body`].foreground,borderColor:LI},hover:{backgroundColor:W.colors[`vira-red-on-self-body`].background,textColor:W.colors[`vira-red-on-self-body`].foreground,borderColor:W.colors[`vira-red-on-self-body`].foreground},active:{backgroundColor:W.colors[`vira-red-on-self-non-body`].background,textColor:W.colors[`vira-red-on-self-non-body`].foreground,borderColor:W.colors[`vira-red-on-self-non-body`].foreground}}},[K.Warning]:{[SP.Standard]:{idle:{backgroundColor:W.colors[`vira-yellow-behind-bg-non-body`].background,textColor:W.colors[`vira-yellow-behind-bg-non-body`].foreground,borderColor:W.colors[`vira-yellow-behind-bg-body`].background},hover:{backgroundColor:W.colors[`vira-yellow-behind-bg-header`].background,textColor:W.colors[`vira-yellow-behind-bg-header`].foreground,borderColor:W.colors[`vira-yellow-behind-bg-body`].background},active:{backgroundColor:W.colors[`vira-yellow-behind-bg-body`].background,textColor:W.colors[`vira-yellow-behind-bg-body`].foreground,borderColor:W.colors[`vira-yellow-behind-bg-body`].background}},[SP.Subtle]:{idle:{backgroundColor:LI,textColor:W.colors[`vira-yellow-foreground-non-body`].foreground,borderColor:LI},hover:{backgroundColor:W.colors[`vira-yellow-on-self-body`].background,textColor:W.colors[`vira-yellow-on-self-body`].foreground,borderColor:W.colors[`vira-yellow-on-self-body`].foreground},active:{backgroundColor:W.colors[`vira-yellow-on-self-non-body`].background,textColor:W.colors[`vira-yellow-on-self-non-body`].foreground,borderColor:W.colors[`vira-yellow-on-self-non-body`].foreground}}},[K.Positive]:{[SP.Standard]:{idle:{backgroundColor:W.colors[`vira-green-behind-bg-non-body`].background,textColor:W.colors[`vira-green-behind-bg-non-body`].foreground,borderColor:W.colors[`vira-green-behind-bg-body`].background},hover:{backgroundColor:W.colors[`vira-green-behind-bg-header`].background,textColor:W.colors[`vira-green-behind-bg-header`].foreground,borderColor:W.colors[`vira-green-behind-bg-body`].background},active:{backgroundColor:W.colors[`vira-green-behind-bg-body`].background,textColor:W.colors[`vira-green-behind-bg-body`].foreground,borderColor:W.colors[`vira-green-behind-bg-body`].background}},[SP.Subtle]:{idle:{backgroundColor:LI,textColor:W.colors[`vira-green-foreground-non-body`].foreground,borderColor:LI},hover:{backgroundColor:W.colors[`vira-green-on-self-body`].background,textColor:W.colors[`vira-green-on-self-body`].foreground,borderColor:W.colors[`vira-green-on-self-body`].foreground},active:{backgroundColor:W.colors[`vira-green-on-self-non-body`].background,textColor:W.colors[`vira-green-on-self-non-body`].foreground,borderColor:W.colors[`vira-green-on-self-non-body`].foreground}}}},zI=jP()({tagName:`vira-button`,hostClasses:{"vira-button-with-menu-caret":({inputs:e})=>!!e.showMenuCaret,"vira-button-size-large":({inputs:e})=>e.buttonSize===bP.Large,"vira-button-size-medium":({inputs:e})=>!e.buttonSize||e.buttonSize===bP.Medium,"vira-button-size-small":({inputs:e})=>e.buttonSize===bP.Small,"vira-button-emphasis-standard":({inputs:e})=>!e.buttonEmphasis||e.buttonEmphasis===SP.Standard,"vira-button-emphasis-subtle":({inputs:e})=>e.buttonEmphasis===SP.Subtle,"vira-button-color-accent":({inputs:e})=>!e.colorVariant||e.colorVariant===K.Accent,"vira-button-color-plain":({inputs:e})=>e.colorVariant===K.Plain,"vira-button-color-neutral":({inputs:e})=>e.colorVariant===K.Neutral,"vira-button-color-danger":({inputs:e})=>e.colorVariant===K.Danger,"vira-button-color-warning":({inputs:e})=>e.colorVariant===K.Warning,"vira-button-color-positive":({inputs:e})=>e.colorVariant===K.Positive,"vira-button-disabled":({inputs:e})=>!!e.isDisabled,"vira-button-icon-only":({inputs:e})=>!e.text&&!!e.icon},cssVars:{"vira-button-text-color":`transparent`,"vira-button-background-color":`transparent`,"vira-button-border-color":`transparent`,"vira-button-hover-text-color":`transparent`,"vira-button-hover-background-color":`transparent`,"vira-button-hover-border-color":`transparent`,"vira-button-active-text-color":`transparent`,"vira-button-active-background-color":`transparent`,"vira-button-active-border-color":`transparent`,"vira-button-disabled-text-color":W.colors[`vira-grey-behind-bg-decoration`].foreground.value,"vira-button-disabled-background-color":W.colors[`vira-grey-behind-bg-decoration`].background.value,"vira-button-disabled-border-color":W.colors[`vira-grey-behind-bg-decoration`].background.value,"vira-button-border-width":`1px`,"vira-button-border-radius":G[`vira-form-radius`].value},styles:({hostClasses:e,cssVars:t})=>{function n(){return Eu(CP.flatMap(n=>yP.map(r=>{let i=RI[r][n];return z`
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
`))}function r(){return Eu(xP.map(t=>z`
                    ${e[`vira-button-size-${t}`].selector} {
                        font-size: ${G[`vira-form-${t}-text-size`].value};

                        button {
                            min-height: ${wP[t]}px;
                            padding: 2px
                                ${G[`vira-form-${t}-text-size`].value};
                        }

                        &${e[`vira-button-icon-only`].selector} {
                            min-width: ${wP[t]}px;
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
                ${kP};
                ${G[`vira-form-focus-outline-color`].name}: ${G[`vira-form-accent-primary-hover-color`].value}
            }

            ${r()}
            ${n()}

            button {
                ${EP};
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

                ${lP({elementBorderSize:t[`vira-button-border-width`]})}
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

            button ${q} + .text-template {
                margin-left: 8px;
            }

            ${q} {
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

                &${e[`vira-button-emphasis-subtle`].selector} button {
                    color: ${W.colors[`vira-grey-foreground-decoration`].foreground.value};
                    background-color: transparent;
                    border-color: transparent;
                }
            }

            ${e[`vira-button-icon-only`].selector} {
                button {
                    padding: 0;
                }
            }
        `},render:({inputs:e})=>{let t=e.icon?B`
                  <${q.assign({icon:e.icon})}></${q}>
              `:M,n=e.text?B`
                  <span class="text-template">${e.text}</span>
              `:B`
                  <span class="empty-text">&nbsp;</span>
              `,r=e.showMenuCaret?B`
                  <${q.assign({icon:FF})}
                      class="caret-icon"
                  ></${q}>
              `:M;return B`
            <button ?disabled=${e.isDisabled}>
                ${t}${n}${r}
            </button>
        `}}),BI;(function(e){e.Error=`error`,e.Success=`success`})(BI||={});var VI=jP()({tagName:`vira-card`,hostClasses:{"vira-card-error":({inputs:e})=>e.cardState===BI.Error,"vira-card-success":({inputs:e})=>e.cardState===BI.Success},cssVars:{"vira-card-border":z`1px solid ${G[`vira-form-border-color`].value}`,"vira-card-padding":G[`vira-form-wrapper-radius`].value},styles:({hostClasses:e,cssVars:t})=>z`
        :host {
            display: block;
            border: ${t[`vira-card-border`].value};
            border-radius: ${G[`vira-form-wrapper-radius`].value};
            padding: ${t[`vira-card-padding`].value};
        }

        ${e[`vira-card-error`].selector} {
            border-color: ${G[`vira-form-error-color`].value};
        }
        ${e[`vira-card-success`].selector} {
            border-color: ${G[`vira-form-success-color`].value};
        }
    `,render(){return B`
            <slot></slot>
        `}}),HI=jP()({tagName:`vira-checkbox`,hostClasses:{"vira-checkbox-horizontal":({inputs:e})=>!!e.horizontal,"vira-checkbox-filled-checked":({inputs:e})=>!!e.fillWhenChecked,"vira-checkbox-filled-unchecked":({inputs:e})=>!!e.fillWhenUnchecked},styles:({hostClasses:e})=>z`
        :host {
            display: inline-flex;
        }

        .custom-checkbox {
            height: 24px;
            aspect-ratio: 1;
            box-sizing: border-box;
        }

        ${q} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            ${V[`vira-icon-stroke-width`].name}: 3px;
            opacity: 0;
        }

        ${e[`vira-checkbox-filled-checked`].selector} {
            & .custom-checkbox.checked {
                color: ${G[`vira-form-background-color`].value};
                background-color: ${G[`vira-form-accent-primary-color`].value};
            }

            label {
                &:not(.disabled):hover .custom-checkbox.checked {
                    background-color: ${G[`vira-form-accent-primary-hover-color`].value};
                }

                &:not(.disabled):active .custom-checkbox.checked {
                    background-color: ${G[`vira-form-accent-primary-active-color`].value};
                }
            }
        }
        ${e[`vira-checkbox-filled-unchecked`].selector} {
            & .custom-checkbox:not(.checked) {
                color: ${G[`vira-form-background-color`].value};
                background-color: ${G[`vira-form-error-color`].value};
            }

            label {
                &:not(.disabled):hover .custom-checkbox:not(.checked) {
                    background-color: ${G[`vira-form-error-hover-color`].value};
                }

                &:not(.disabled):active .custom-checkbox:not(.checked) {
                    background-color: ${G[`vira-form-error-active-color`].value};
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
                font-weight: ${G[`vira-form-label-font-weight`].value};
            }

            &:not(.disabled):hover .custom-checkbox {
                background-color: ${G[`vira-form-selection-hover-color`].value};
            }
            &:not(.disabled):active .custom-checkbox {
                background-color: ${G[`vira-form-selection-active-color`].value};
            }
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${G[`vira-form-border-color`].value};
            color: ${G[`vira-form-foreground-color`].value};
            border-radius: ${G[`vira-form-radius`].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${lP({elementBorderSize:`1px`})}

            &.checked {
                & ${q} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${G[`vira-form-error-color`].value};
            }

            &.disabled {
                ${oP};
            }
        }

        ${e[`vira-checkbox-horizontal`].selector} label {
            flex-direction: row-reverse;
            align-items: flex-start;
            gap: 8px;

            & .label-text {
                padding-block: calc((24px - 1em) / 2);
            }
        }
    `,events:{valueChange:QM()},render({inputs:e,dispatch:t,events:n}){function r(){e.disabled||t(new n.valueChange(!e.value))}let i=e.label?B`
                  <span
                      class="label-text"
                      ${yN(e.attributePassthrough?.text)}
                      style=${OM(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:M;return B`
            <label
                class=${DM({disabled:!!e.disabled})}
                ${yN(e.attributePassthrough?.label)}
                style=${OM(e.stylePassthrough?.label)}
                ${xN(`mousedown`,r)}
            >
                ${i}
                <span
                    class="custom-checkbox ${DM({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${OM(e.label||void 0)}
                    aria-checked=${e.value?`true`:`false`}
                    aria-disabled=${e.disabled?`true`:`false`}
                    tabindex=${e.disabled?`-1`:`0`}
                    ${yN(e.attributePassthrough?.[`custom-checkbox`])}
                    style=${OM(e.stylePassthrough?.[`custom-checkbox`])}
                    ${CN(r)}
                >
                    <${q.assign({icon:XN,fitContainer:!0})}
                        ${yN(e.attributePassthrough?.[q.tagName])}
                        style=${OM(e.stylePassthrough?.[q.tagName])}
                    ></${q}>
                </span>
            </label>
        `}}),UI=jP()({tagName:`vira-collapsible-wrapper`,state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expand-on-print":({inputs:e})=>!!e.expandOnPrint},slotNames:[`header`],styles:({hostClasses:e})=>z`
        :host {
            display: flex;
            flex-direction: column;
            max-width: 100%;
            box-sizing: border-box;
        }

        .header-wrapper {
            ${EP};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${sP[`vira-pretty-animation-duration`].value};
            overflow: hidden;

            &.collapsed {
                ${kP}
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
    `,events:{expandChange:QM()},render({state:e,slotNames:t,updateState:n,dispatch:r,events:i,inputs:a}){let o=a.expanded?z`
                  height: ${e.contentHeight}px;
              `:z`
                  height: 0;
              `;return B`
            <button
                class="header-wrapper"
                ${xN(`click`,()=>{r(new i.expandChange(!a.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>

            <div
                class="collapsing-element ${DM({collapsed:!a.expanded})}"
                style=${o}
                disabled="disabled"
            >
                <div
                    ${kN(({contentRect:e})=>{n({contentHeight:e.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),WI=jP()({tagName:`vira-collapsible-card`,testIds:[`openCaret`],events:{expandToggle:QM()},state({inputs:e}){return{isExpanded:!!e.startExpanded}},hostClasses:{"vira-collapsible-card-expanded":({state:e})=>e.isExpanded,"vira-collapsible-card-expansion-blocked":({inputs:e})=>!!e.blockExpansion,"vira-collapsible-card-card-styles":({inputs:e})=>!e.rawCollapsible},cssVars:{"vira-collapsible-card-content-gap":`16px`},styles:({hostClasses:e,cssVars:t})=>z`
        :host {
            display: inline-flex;
            max-width: 100%;
            box-sizing: border-box;
        }

        ${e[`vira-collapsible-card-expanded`].selector} .open-caret {
            transform: rotate(180deg);
        }

        ${UI} {
            flex-grow: 1;
            max-width: 100%;
        }

        ${e[`vira-collapsible-card-card-styles`].selector} {
            & ${UI} {
                border: 1px solid ${G[`vira-form-border-color`].value};
                border-radius: ${G[`vira-form-wrapper-radius`].value};
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
            ${UI} {
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
    `,slotNames:[`header`],render({inputs:e,slotNames:t,state:n,updateState:r,testIds:i,dispatch:a,events:o}){e.blockExpansion&&r({isExpanded:!0});let s=n.isExpanded||e.expandOnPrint?B`
                      <div class="card-content">
                          <slot></slot>
                      </div>
                  `:M,c=e.hideHeader?M:B`
                  <div class="card-header">
                      <slot name=${t.header}><div class="header-filler"></div></slot>

                      ${e.blockExpansion?M:B`
                                <${q.assign({icon:IF,fitContainer:!0})}
                                    ${IN(i.openCaret)}
                                    class="open-caret"
                                ></${q}>
                            `}
                  </div>
              `;return B`
            <${UI.assign({expanded:n.isExpanded,expandOnPrint:e.expandOnPrint??!1})}
                ${xN(UI.events.expandChange,t=>{t.stopImmediatePropagation(),!e.blockExpansion&&(r({isExpanded:t.detail}),a(new o.expandToggle(t.detail)))})}
            >
                <div class="header-wrapper" slot=${UI.slotNames.header}>
                    ${c}
                </div>
                ${s}
            </${UI}>
        `}}),GI;(function(e){e.a98=`a98`,e.cubehelix=`cubehelix`,e.dlab=`dlab`,e.dlch=`dlch`,e.hsi=`hsi`,e.hsl=`hsl`,e.hsv=`hsv`,e.hwb=`hwb`,e.itp=`itp`,e.jab=`jab`,e.jch=`jch`,e.lab=`lab`,e.lab65=`lab65`,e.lch=`lch`,e.lch65=`lch65`,e.lchuv=`lchuv`,e.lrgb=`lrgb`,e.luv=`luv`,e.okhsl=`okhsl`,e.okhsv=`okhsv`,e.oklab=`oklab`,e.oklch=`oklch`,e.p3=`p3`,e.prophoto=`prophoto`,e.rec2020=`rec2020`,e.rgb=`rgb`,e.xyb=`xyb`,e.xyz50=`xyz50`,e.xyz65=`xyz65`,e.yiq=`yiq`})(GI||={});var KI={rgb:{coords:{r:{min:0,max:255,factor:255},g:{min:0,max:255,factor:255},b:{min:0,max:255,factor:255}},colorSpace:`rgb`},hex:{coords:{r:{min:0,max:255,factor:255,radix:16,radixPad:2},g:{min:0,max:255,factor:255,radix:16,radixPad:2},b:{min:0,max:255,factor:255,radix:16,radixPad:2}},conversionFormat:GI.rgb,rawSyntax:`hexString`,colorSpace:`rgb`},hsl:{coords:{h:{min:0,max:360},s:{min:0,max:100,factor:100,digits:1},l:{min:0,max:100,factor:100,digits:1}},colorSpace:`rgb`},hwb:{coords:{h:{min:0,max:360},w:{min:0,max:100,factor:100,digits:1},b:{min:0,max:100,factor:100,digits:1}},colorSpace:`rgb`},lab:{coords:{l:{min:0,max:100,digits:1},a:{min:-128,max:127},b:{min:-128,max:127}},colorSpace:`lab`},lch:{coords:{l:{min:0,max:100,digits:1},c:{min:0,max:230},h:{min:0,max:360}},colorSpace:`lab`},oklab:{coords:{l:{min:0,max:1,digits:3},a:{min:-.5,max:.5,digits:3},b:{min:-.5,max:.5,digits:3}},colorSpace:`oklab`},oklch:{coords:{l:{min:0,max:1,digits:3},c:{min:0,max:.4,digits:3},h:{min:0,max:360,digits:1}},colorSpace:`oklab`}},qI=jl(KI,e=>e),JI={...qI,name:`name`,hexString:`hexString`},YI=jl(KI,(e,t)=>{let n=j.isEnumValue(e,GI)&&j.isEnumValue(e,qI)?e:`conversionFormat`in t&&t.conversionFormat&&j.isEnumValue(t.conversionFormat,GI)&&j.isEnumValue(t.conversionFormat,qI)?t.conversionFormat:void 0;return Mc.isTruthy(n,`Invalid conversion format for color format '${e}' ${_(t)}.`),{...t,colorFormat:e,conversionFormat:n,rawSyntax:Dc.isEnumValue(`rawSyntax`in t&&t.rawSyntax?t.rawSyntax:e,JI)}});Kc(Pl(KI),e=>({key:e.colorSpace,value:e.colorSpace}),{useRequired:!0}),Uc(YI).reduce((e,[t,n])=>(Hc(e,n.colorSpace,()=>({}))[t]=n,e),{});function XI(e){return e.startsWith(`rgb`)?JI.rgb:e.startsWith(`hsl`)?JI.hsl:e.startsWith(`hwb`)?JI.hwb:e.startsWith(`oklab`)?JI.oklab:e.startsWith(`oklch`)?JI.oklch:e.startsWith(`lab`)?JI.lab:e.startsWith(`lch`)?JI.lch:e.startsWith(`#`)?JI.hexString:JI.name}var ZI={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(let e in ZI)Object.freeze(ZI[e]);var QI=Object.freeze(ZI),$I=Object.keys(QI).reduce((e,t)=>t.length>e.length?t:e),eL=Ml(jl(QI,(e,t)=>Gc(Object.entries(QI),([e])=>e,(n,[,r])=>n===e?!1:j.deepEquals(r,t))),(e,t)=>!!t.length),tL=Object.entries(eL).reduce((e,t)=>{let n=[e[0],...e[1]].join(`, `);return[t[0],...t[1]].join(`, `).length>n.length?t:e}).reduce((e,t)=>j.isArray(t)?[...e,...t]:[...e,t],[]),nL=Math.max($I.length,tL.length+(tL.length-1)*2),rL=(e,t)=>{if(typeof e==`number`){if(t===3)return{mode:`rgb`,r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(t===4)return{mode:`rgb`,r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(t===6)return{mode:`rgb`,r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(t===8)return{mode:`rgb`,r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},iL={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},aL=e=>rL(iL[e.toLowerCase()],6),oL=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,sL=e=>{let t;return(t=e.match(oL))?rL(parseInt(t[1],16),t[1].length):void 0},cL=`([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)`;`${cL}`;var lL=`${cL}%`;`${cL}`;var uL=`(?:${cL}%|${cL})`,dL=`(?:${cL}%|${cL}|none)`,fL=`(?:${cL}(deg|grad|rad|turn)|${cL})`;`${cL}${cL}`;var pL=`\\s*,\\s*`;RegExp(`^`+dL+`$`);var mL=RegExp(`^rgba?\\(\\s*${cL}${pL}${cL}${pL}${cL}\\s*(?:,\\s*${uL}\\s*)?\\)$`),hL=RegExp(`^rgba?\\(\\s*${lL}${pL}${lL}${pL}${lL}\\s*(?:,\\s*${uL}\\s*)?\\)$`),gL=e=>{let t={mode:`rgb`},n;if(n=e.match(mL))n[1]!==void 0&&(t.r=n[1]/255),n[2]!==void 0&&(t.g=n[2]/255),n[3]!==void 0&&(t.b=n[3]/255);else if(n=e.match(hL))n[1]!==void 0&&(t.r=n[1]/100),n[2]!==void 0&&(t.g=n[2]/100),n[3]!==void 0&&(t.b=n[3]/100);else return;return n[4]===void 0?n[5]!==void 0&&(t.alpha=Math.max(0,Math.min(1,+n[5]))):t.alpha=Math.max(0,Math.min(1,n[4]/100)),t},_L=(e,t)=>e===void 0?void 0:typeof e==`object`?e.mode===void 0?t?{...e,mode:t}:void 0:e:BL(e),vL=(e=`rgb`)=>t=>(t=_L(t,e))===void 0?void 0:t.mode===e?t:yL[t.mode][e]?yL[t.mode][e](t):e===`rgb`?yL[t.mode].rgb(t):yL.rgb[e](yL[t.mode].rgb(t)),yL={},bL={},xL=[],SL={},CL=e=>e,wL=e=>(yL[e.mode]={...yL[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(t=>{yL[t]||(yL[t]={}),yL[t][e.mode]=e.fromMode[t]}),e.ranges||={},e.difference||={},e.channels.forEach(t=>{if(e.ranges[t]===void 0&&(e.ranges[t]=[0,1]),!e.interpolate[t])throw Error(`Missing interpolator for: ${t}`);typeof e.interpolate[t]==`function`&&(e.interpolate[t]={use:e.interpolate[t]}),e.interpolate[t].fixup||(e.interpolate[t].fixup=CL)}),bL[e.mode]=e,(e.parse||[]).forEach(t=>{EL(t,e.mode)}),vL(e.mode)),TL=e=>bL[e],EL=(e,t)=>{if(typeof e==`string`){if(!t)throw Error(`'mode' required when 'parser' is a string`);SL[e]=t}else typeof e==`function`&&xL.indexOf(e)<0&&xL.push(e)},DL=/[^\x00-\x7F]|[a-zA-Z_]/,OL=/[^\x00-\x7F]|[-\w]/,J={Function:`function`,Ident:`ident`,Number:`number`,Percentage:`percentage`,ParenClose:`)`,None:`none`,Hue:`hue`,Alpha:`alpha`},Y=0;function kL(e){let t=e[Y],n=e[Y+1];return t===`-`||t===`+`?/\d/.test(n)||n===`.`&&/\d/.test(e[Y+2]):t===`.`?/\d/.test(n):/\d/.test(t)}function AL(e){if(Y>=e.length)return!1;let t=e[Y];if(DL.test(t))return!0;if(t===`-`){if(e.length-Y<2)return!1;let t=e[Y+1];return!!(t===`-`||DL.test(t))}return!1}var jL={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function ML(e){let t=``;if((e[Y]===`-`||e[Y]===`+`)&&(t+=e[Y++]),t+=NL(e),e[Y]===`.`&&/\d/.test(e[Y+1])&&(t+=e[Y++]+NL(e)),(e[Y]===`e`||e[Y]===`E`)&&((e[Y+1]===`-`||e[Y+1]===`+`)&&/\d/.test(e[Y+2])?t+=e[Y++]+e[Y++]+NL(e):/\d/.test(e[Y+1])&&(t+=e[Y++]+NL(e))),AL(e)){let n=PL(e);return n===`deg`||n===`rad`||n===`turn`||n===`grad`?{type:J.Hue,value:t*jL[n]}:void 0}return e[Y]===`%`?(Y++,{type:J.Percentage,value:+t}):{type:J.Number,value:+t}}function NL(e){let t=``;for(;/\d/.test(e[Y]);)t+=e[Y++];return t}function PL(e){let t=``;for(;Y<e.length&&OL.test(e[Y]);)t+=e[Y++];return t}function FL(e){let t=PL(e);return e[Y]===`(`?(Y++,{type:J.Function,value:t}):t===`none`?{type:J.None,value:void 0}:{type:J.Ident,value:t}}function IL(e=``){let t=e.trim(),n=[],r;for(Y=0;Y<t.length;){if(r=t[Y++],r===`
`||r===`	`||r===` `){for(;Y<t.length&&(t[Y]===`
`||t[Y]===`	`||t[Y]===` `);)Y++;continue}if(r===`,`)return;if(r===`)`){n.push({type:J.ParenClose});continue}if(r===`+`){if(Y--,kL(t)){n.push(ML(t));continue}return}if(r===`-`){if(Y--,kL(t)){n.push(ML(t));continue}if(AL(t)){n.push({type:J.Ident,value:PL(t)});continue}return}if(r===`.`){if(Y--,kL(t)){n.push(ML(t));continue}return}if(r===`/`){for(;Y<t.length&&(t[Y]===`
`||t[Y]===`	`||t[Y]===` `);)Y++;let e;if(kL(t)&&(e=ML(t),e.type!==J.Hue)){n.push({type:J.Alpha,value:e});continue}if(AL(t)&&PL(t)===`none`){n.push({type:J.Alpha,value:{type:J.None,value:void 0}});continue}return}if(/\d/.test(r)){Y--,n.push(ML(t));continue}if(DL.test(r)){Y--,n.push(FL(t));continue}return}return n}function LL(e){e._i=0;let t=e[e._i++];if(!t||t.type!==J.Function||t.value!==`color`||(t=e[e._i++],t.type!==J.Ident))return;let n=SL[t.value];if(!n)return;let r={mode:n},i=RL(e,!1);if(!i)return;let a=TL(n).channels;for(let e=0,t,n;e<a.length;e++)t=i[e],n=a[e],t.type!==J.None&&(r[n]=t.type===J.Number?t.value:t.value/100,n===`alpha`&&(r[n]=Math.max(0,Math.min(1,r[n]))));return r}function RL(e,t){let n=[],r;for(;e._i<e.length;){if(r=e[e._i++],r.type===J.None||r.type===J.Number||r.type===J.Alpha||r.type===J.Percentage||t&&r.type===J.Hue){n.push(r);continue}if(r.type===J.ParenClose){if(e._i<e.length)return;continue}return}if(!(n.length<3||n.length>4)){if(n.length===4){if(n[3].type!==J.Alpha)return;n[3]=n[3].value}return n.length===3&&n.push({type:J.None,value:void 0}),n.every(e=>e.type!==J.Alpha)?n:void 0}}function zL(e,t){e._i=0;let n=e[e._i++];if(!n||n.type!==J.Function)return;let r=RL(e,t);if(r)return r.unshift(n.value),r}var BL=e=>{if(typeof e!=`string`)return;let t=IL(e),n=t?zL(t,!0):void 0,r,i=0,a=xL.length;for(;i<a;)if((r=xL[i++](e,n))!==void 0)return r;return t?LL(t):void 0};function VL(e,t){if(!t||t[0]!==`rgb`&&t[0]!==`rgba`)return;let n={mode:`rgb`},[,r,i,a,o]=t;if(!(r.type===J.Hue||i.type===J.Hue||a.type===J.Hue))return r.type!==J.None&&(n.r=r.type===J.Number?r.value/255:r.value/100),i.type!==J.None&&(n.g=i.type===J.Number?i.value/255:i.value/100),a.type!==J.None&&(n.b=a.type===J.Number?a.value/255:a.value/100),o.type!==J.None&&(n.alpha=Math.min(1,Math.max(0,o.type===J.Number?o.value:o.value/100))),n}var HL=e=>e===`transparent`?{mode:`rgb`,r:0,g:0,b:0,alpha:0}:void 0,UL=(e,t,n)=>e+n*(t-e),WL=e=>{let t=[];for(let n=0;n<e.length-1;n++){let r=e[n],i=e[n+1];r===void 0&&i===void 0?t.push(void 0):r!==void 0&&i!==void 0?t.push([r,i]):t.push(r===void 0?[i,i]:[r,r])}return t},X=(e=>t=>{let n=WL(t);return t=>{let r=t*n.length,i=t>=1?n.length-1:Math.max(Math.floor(r),0),a=n[i];return a===void 0?void 0:e(a[0],a[1],r-i)}})(UL),GL=e=>{let t=!1,n=e.map(e=>e===void 0?1:(t=!0,e));return t?n:e},KL={mode:`rgb`,channels:[`r`,`g`,`b`,`alpha`],parse:[VL,sL,gL,aL,HL,`srgb`],serialize:`srgb`,interpolate:{r:X,g:X,b:X,alpha:{use:X,fixup:GL}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},qL=(e=0)=>Math.abs(e)**(563/256)*Math.sign(e),JL=e=>{let t=qL(e.r),n=qL(e.g),r=qL(e.b),i={mode:`xyz65`,x:.5766690429101305*t+.1855582379065463*n+.1882286462349947*r,y:.297344975250536*t+.6273635662554661*n+.0752914584939979*r,z:.0270313613864123*t+.0706888525358272*n+.9913375368376386*r};return e.alpha!==void 0&&(i.alpha=e.alpha),i},YL=e=>Math.abs(e)**(256/563)*Math.sign(e),XL=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`a98`,r:YL(e*2.0415879038107465-t*.5650069742788597-.3447313507783297*n),g:YL(e*-.9692436362808798+t*1.8759675015077206+.0415550574071756*n),b:YL(e*.0134442806320312-t*.1183623922310184+1.0151749943912058*n)};return r!==void 0&&(i.alpha=r),i},ZL=(e=0)=>{let t=Math.abs(e);return t<=.04045?e/12.92:(Math.sign(e)||1)*((t+.055)/1.055)**2.4},QL=({r:e,g:t,b:n,alpha:r})=>{let i={mode:`lrgb`,r:ZL(e),g:ZL(t),b:ZL(n)};return r!==void 0&&(i.alpha=r),i},$L=e=>{let{r:t,g:n,b:r,alpha:i}=QL(e),a={mode:`xyz65`,x:.4123907992659593*t+.357584339383878*n+.1804807884018343*r,y:.2126390058715102*t+.715168678767756*n+.0721923153607337*r,z:.0193308187155918*t+.119194779794626*n+.9505321522496607*r};return i!==void 0&&(a.alpha=i),a},eR=(e=0)=>{let t=Math.abs(e);return t>.0031308?(Math.sign(e)||1)*(1.055*t**(1/2.4)-.055):e*12.92},tR=({r:e,g:t,b:n,alpha:r},i=`rgb`)=>{let a={mode:i,r:eR(e),g:eR(t),b:eR(n)};return r!==void 0&&(a.alpha=r),a},nR=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=tR({r:e*3.2409699419045226-t*1.537383177570094-.4986107602930034*n,g:e*-.9692436362808796+t*1.8759675015077204+.0415550574071756*n,b:e*.0556300796969936-t*.2039769588889765+1.0569715142428784*n});return r!==void 0&&(i.alpha=r),i},rR={...KL,mode:`a98`,parse:[`a98-rgb`],serialize:`a98-rgb`,fromMode:{rgb:e=>XL($L(e)),xyz65:XL},toMode:{rgb:e=>nR(JL(e)),xyz65:JL}},iR=e=>(e%=360)<0?e+360:e,aR=(e,t)=>e.map((n,r,i)=>{if(n===void 0)return n;let a=iR(n);return r===0||e[r-1]===void 0?a:t(a-iR(i[r-1]))}).reduce((e,t)=>!e.length||t===void 0||e[e.length-1]===void 0?(e.push(t),e):(e.push(t+e[e.length-1]),e),[]),oR=e=>aR(e,e=>Math.abs(e)<=180?e:e-360*Math.sign(e)),sR=[-.14861,1.78277,-.29227,-.90649,1.97294,0],cR=Math.PI/180,lR=180/Math.PI,uR=sR[3]*sR[4],dR=sR[1]*sR[4],fR=sR[1]*sR[2]-sR[0]*sR[3],pR=({r:e,g:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(fR*n+e*uR-t*dR)/(fR+uR-dR),a=n-i,o=(sR[4]*(t-i)-sR[2]*a)/sR[3],s={mode:`cubehelix`,l:i,s:i===0||i===1?void 0:Math.sqrt(a*a+o*o)/(sR[4]*i*(1-i))};return s.s&&(s.h=Math.atan2(o,a)*lR-120),r!==void 0&&(s.alpha=r),s},mR=({h:e,s:t,l:n,alpha:r})=>{let i={mode:`rgb`};e=(e===void 0?0:e+120)*cR,n===void 0&&(n=0);let a=t===void 0?0:t*n*(1-n),o=Math.cos(e),s=Math.sin(e);return i.r=n+a*(sR[0]*o+sR[1]*s),i.g=n+a*(sR[2]*o+sR[3]*s),i.b=n+a*(sR[4]*o+sR[5]*s),r!==void 0&&(i.alpha=r),i},hR=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.s||!t.s)return 0;let n=iR(e.h),r=iR(t.h),i=Math.sin((r-n+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*t.s)*i},gR=(e,t)=>{if(e.h===void 0||t.h===void 0)return 0;let n=iR(e.h),r=iR(t.h);return Math.abs(r-n)>180?n-(r-360*Math.sign(r-n)):r-n},_R=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.c||!t.c)return 0;let n=iR(e.h),r=iR(t.h),i=Math.sin((r-n+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*t.c)*i},vR=(e=`rgb`,t=[1,1,1,0])=>{let n=TL(e),r=n.channels,i=n.difference,a=vL(e);return(e,n)=>{let o=a(e),s=a(n);return Math.sqrt(r.reduce((e,n,r)=>{let a=i[n]?i[n](o,s):o[n]-s[n];return e+(t[r]||0)*(isNaN(a)?0:a)**2},0))}},yR=e=>{let t=e.reduce((e,t)=>{if(t!==void 0){let n=t*Math.PI/180;e.sin+=Math.sin(n),e.cos+=Math.cos(n)}return e},{sin:0,cos:0}),n=Math.atan2(t.sin,t.cos)*180/Math.PI;return n<0?360+n:n},bR={mode:`cubehelix`,channels:[`h`,`s`,`l`,`alpha`],parse:[`--cubehelix`],serialize:`--cubehelix`,ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:pR},toMode:{rgb:mR},interpolate:{h:{use:X,fixup:oR},s:X,l:X,alpha:{use:X,fixup:GL}},difference:{h:hR},average:{h:yR}},xR=({l:e,a:t,b:n,alpha:r},i=`lch`)=>{t===void 0&&(t=0),n===void 0&&(n=0);let a=Math.sqrt(t*t+n*n),o={mode:i,l:e,c:a};return a&&(o.h=iR(Math.atan2(n,t)*180/Math.PI)),r!==void 0&&(o.alpha=r),o},SR=({l:e,c:t,h:n,alpha:r},i=`lab`)=>{n===void 0&&(n=0);let a={mode:i,l:e,a:t?t*Math.cos(n/180*Math.PI):0,b:t?t*Math.sin(n/180*Math.PI):0};return r!==void 0&&(a.alpha=r),a},CR=29**3/3**3,wR=6**3/29**3,TR={X:.3457/.3585,Y:1,Z:.2958/.3585},ER={X:.3127/.329,Y:1,Z:.3583/.329},DR=e=>e**3>wR?e**3:(116*e-16)/CR,OR=({l:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(e+16)/116,a=t/500+i,o=i-n/200,s={mode:`xyz65`,x:DR(a)*ER.X,y:DR(i)*ER.Y,z:DR(o)*ER.Z};return r!==void 0&&(s.alpha=r),s},kR=e=>nR(OR(e)),AR=e=>e>wR?Math.cbrt(e):(CR*e+16)/116,jR=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=AR(e/ER.X),a=AR(t/ER.Y),o=AR(n/ER.Z),s={mode:`lab65`,l:116*a-16,a:500*(i-a),b:200*(a-o)};return r!==void 0&&(s.alpha=r),s},MR=e=>{let t=jR($L(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},NR=26/180*Math.PI,PR=Math.cos(NR),FR=Math.sin(NR),IR=100/Math.log(139/100),LR=({l:e,c:t,h:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`lab65`,l:(Math.exp(e*1/IR)-1)/.0039},a=(Math.exp(.0435*t*1*1)-1)/.075,o=a*Math.cos(n/180*Math.PI-NR),s=a*Math.sin(n/180*Math.PI-NR);return i.a=o*PR-s/.83*FR,i.b=o*FR+s/.83*PR,r!==void 0&&(i.alpha=r),i},RR=({l:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=t*PR+n*FR,a=.83*(n*PR-t*FR),o=Math.sqrt(i*i+a*a),s={mode:`dlch`,l:IR/1*Math.log(1+.0039*e),c:Math.log(1+.075*o)/(.0435*1*1)};return s.c&&(s.h=iR((Math.atan2(a,i)+NR)/Math.PI*180)),r!==void 0&&(s.alpha=r),s},zR=e=>LR(xR(e,`dlch`)),BR=e=>SR(RR(e),`dlab`),VR={mode:`dlab`,parse:[`--din99o-lab`],serialize:`--din99o-lab`,toMode:{lab65:zR,rgb:e=>kR(zR(e))},fromMode:{lab65:BR,rgb:e=>BR(MR(e))},channels:[`l`,`a`,`b`,`alpha`],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:X,a:X,b:X,alpha:{use:X,fixup:GL}}},HR={mode:`dlch`,parse:[`--din99o-lch`],serialize:`--din99o-lch`,toMode:{lab65:LR,dlab:e=>SR(e,`dlab`),rgb:e=>kR(LR(e))},fromMode:{lab65:RR,dlab:e=>xR(e,`dlch`),rgb:e=>RR(MR(e))},channels:[`l`,`c`,`h`,`alpha`],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:X,c:X,h:{use:X,fixup:oR},alpha:{use:X,fixup:GL}},difference:{h:_R},average:{h:yR}};function UR({h:e,s:t,i:n,alpha:r}){e=iR(e===void 0?0:e),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.abs(e/60%2-1),a;switch(Math.floor(e/60)){case 0:a={r:n*(1+t*(3/(2-i)-1)),g:n*(1+t*(3*(1-i)/(2-i)-1)),b:n*(1-t)};break;case 1:a={r:n*(1+t*(3*(1-i)/(2-i)-1)),g:n*(1+t*(3/(2-i)-1)),b:n*(1-t)};break;case 2:a={r:n*(1-t),g:n*(1+t*(3/(2-i)-1)),b:n*(1+t*(3*(1-i)/(2-i)-1))};break;case 3:a={r:n*(1-t),g:n*(1+t*(3*(1-i)/(2-i)-1)),b:n*(1+t*(3/(2-i)-1))};break;case 4:a={r:n*(1+t*(3*(1-i)/(2-i)-1)),g:n*(1-t),b:n*(1+t*(3/(2-i)-1))};break;case 5:a={r:n*(1+t*(3/(2-i)-1)),g:n*(1-t),b:n*(1+t*(3*(1-i)/(2-i)-1))};break;default:a={r:n*(1-t),g:n*(1-t),b:n*(1-t)}}return a.mode=`rgb`,r!==void 0&&(a.alpha=r),a}function WR({r:e,g:t,b:n,alpha:r}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.max(e,t,n),a=Math.min(e,t,n),o={mode:`hsi`,s:e+t+n===0?0:1-3*a/(e+t+n),i:(e+t+n)/3};return i-a!==0&&(o.h=(i===e?(t-n)/(i-a)+(t<n)*6:i===t?(n-e)/(i-a)+2:(e-t)/(i-a)+4)*60),r!==void 0&&(o.alpha=r),o}var GR={mode:`hsi`,toMode:{rgb:UR},parse:[`--hsi`],serialize:`--hsi`,fromMode:{rgb:WR},channels:[`h`,`s`,`i`,`alpha`],ranges:{h:[0,360]},gamut:`rgb`,interpolate:{h:{use:X,fixup:oR},s:X,i:X,alpha:{use:X,fixup:GL}},difference:{h:hR},average:{h:yR}};function KR({h:e,s:t,l:n,alpha:r}){e=iR(e===void 0?0:e),t===void 0&&(t=0),n===void 0&&(n=0);let i=n+t*(n<.5?n:1-n),a=i-(i-n)*2*Math.abs(e/60%2-1),o;switch(Math.floor(e/60)){case 0:o={r:i,g:a,b:2*n-i};break;case 1:o={r:a,g:i,b:2*n-i};break;case 2:o={r:2*n-i,g:i,b:a};break;case 3:o={r:2*n-i,g:a,b:i};break;case 4:o={r:a,g:2*n-i,b:i};break;case 5:o={r:i,g:2*n-i,b:a};break;default:o={r:2*n-i,g:2*n-i,b:2*n-i}}return o.mode=`rgb`,r!==void 0&&(o.alpha=r),o}function qR({r:e,g:t,b:n,alpha:r}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.max(e,t,n),a=Math.min(e,t,n),o={mode:`hsl`,s:i===a?0:(i-a)/(1-Math.abs(i+a-1)),l:.5*(i+a)};return i-a!==0&&(o.h=(i===e?(t-n)/(i-a)+(t<n)*6:i===t?(n-e)/(i-a)+2:(e-t)/(i-a)+4)*60),r!==void 0&&(o.alpha=r),o}var JR=(e,t)=>{switch(t){case`deg`:return+e;case`rad`:return e/Math.PI*180;case`grad`:return e/10*9;case`turn`:return e*360}},YR=RegExp(`^hsla?\\(\\s*${fL}${pL}${lL}${pL}${lL}\\s*(?:,\\s*${uL}\\s*)?\\)$`),XR=e=>{let t=e.match(YR);if(!t)return;let n={mode:`hsl`};return t[3]===void 0?t[1]!==void 0&&t[2]!==void 0&&(n.h=JR(t[1],t[2])):n.h=+t[3],t[4]!==void 0&&(n.s=Math.min(Math.max(0,t[4]/100),1)),t[5]!==void 0&&(n.l=Math.min(Math.max(0,t[5]/100),1)),t[6]===void 0?t[7]!==void 0&&(n.alpha=Math.max(0,Math.min(1,+t[7]))):n.alpha=Math.max(0,Math.min(1,t[6]/100)),n};function ZR(e,t){if(!t||t[0]!==`hsl`&&t[0]!==`hsla`)return;let n={mode:`hsl`},[,r,i,a,o]=t;if(r.type!==J.None){if(r.type===J.Percentage)return;n.h=r.value}if(i.type!==J.None){if(i.type===J.Hue)return;n.s=i.value/100}if(a.type!==J.None){if(a.type===J.Hue)return;n.l=a.value/100}return o.type!==J.None&&(n.alpha=Math.min(1,Math.max(0,o.type===J.Number?o.value:o.value/100))),n}var QR={mode:`hsl`,toMode:{rgb:KR},fromMode:{rgb:qR},channels:[`h`,`s`,`l`,`alpha`],ranges:{h:[0,360]},gamut:`rgb`,parse:[ZR,XR],serialize:e=>`hsl(${e.h===void 0?`none`:e.h} ${e.s===void 0?`none`:e.s*100+`%`} ${e.l===void 0?`none`:e.l*100+`%`}${e.alpha<1?` / ${e.alpha}`:``})`,interpolate:{h:{use:X,fixup:oR},s:X,l:X,alpha:{use:X,fixup:GL}},difference:{h:hR},average:{h:yR}};function $R({h:e,s:t,v:n,alpha:r}){e=iR(e===void 0?0:e),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.abs(e/60%2-1),a;switch(Math.floor(e/60)){case 0:a={r:n,g:n*(1-t*i),b:n*(1-t)};break;case 1:a={r:n*(1-t*i),g:n,b:n*(1-t)};break;case 2:a={r:n*(1-t),g:n,b:n*(1-t*i)};break;case 3:a={r:n*(1-t),g:n*(1-t*i),b:n};break;case 4:a={r:n*(1-t*i),g:n*(1-t),b:n};break;case 5:a={r:n,g:n*(1-t),b:n*(1-t*i)};break;default:a={r:n*(1-t),g:n*(1-t),b:n*(1-t)}}return a.mode=`rgb`,r!==void 0&&(a.alpha=r),a}function ez({r:e,g:t,b:n,alpha:r}){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.max(e,t,n),a=Math.min(e,t,n),o={mode:`hsv`,s:i===0?0:1-a/i,v:i};return i-a!==0&&(o.h=(i===e?(t-n)/(i-a)+(t<n)*6:i===t?(n-e)/(i-a)+2:(e-t)/(i-a)+4)*60),r!==void 0&&(o.alpha=r),o}var tz={mode:`hsv`,toMode:{rgb:$R},parse:[`--hsv`],serialize:`--hsv`,fromMode:{rgb:ez},channels:[`h`,`s`,`v`,`alpha`],ranges:{h:[0,360]},gamut:`rgb`,interpolate:{h:{use:X,fixup:oR},s:X,v:X,alpha:{use:X,fixup:GL}},difference:{h:hR},average:{h:yR}};function nz({h:e,w:t,b:n,alpha:r}){if(t===void 0&&(t=0),n===void 0&&(n=0),t+n>1){let e=t+n;t/=e,n/=e}return $R({h:e,s:n===1?1:1-t/(1-n),v:1-n,alpha:r})}function rz(e){let t=ez(e);if(t===void 0)return;let n=t.s===void 0?0:t.s,r=t.v===void 0?0:t.v,i={mode:`hwb`,w:(1-n)*r,b:1-r};return t.h!==void 0&&(i.h=t.h),t.alpha!==void 0&&(i.alpha=t.alpha),i}function iz(e,t){if(!t||t[0]!==`hwb`)return;let n={mode:`hwb`},[,r,i,a,o]=t;if(r.type!==J.None){if(r.type===J.Percentage)return;n.h=r.value}if(i.type!==J.None){if(i.type===J.Hue)return;n.w=i.value/100}if(a.type!==J.None){if(a.type===J.Hue)return;n.b=a.value/100}return o.type!==J.None&&(n.alpha=Math.min(1,Math.max(0,o.type===J.Number?o.value:o.value/100))),n}var az={mode:`hwb`,toMode:{rgb:nz},fromMode:{rgb:rz},channels:[`h`,`w`,`b`,`alpha`],ranges:{h:[0,360]},gamut:`rgb`,parse:[iz],serialize:e=>`hwb(${e.h===void 0?`none`:e.h} ${e.w===void 0?`none`:e.w*100+`%`} ${e.b===void 0?`none`:e.b*100+`%`}${e.alpha<1?` / ${e.alpha}`:``})`,interpolate:{h:{use:X,fixup:oR},w:X,b:X,alpha:{use:X,fixup:GL}},difference:{h:gR},average:{h:yR}},oz=.1593017578125,sz=78.84375,cz=.8359375,lz=18.8515625,uz=18.6875;function dz(e){if(e<0)return 0;let t=e**(1/sz);return 1e4*(Math.max(0,t-cz)/(lz-uz*t))**(1/oz)}function fz(e){if(e<0)return 0;let t=(e/1e4)**oz;return((cz+lz*t)/(1+uz*t))**+sz}var pz=e=>Math.max(e/203,0),mz=({i:e,t,p:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=dz(e+.008609037037932761*t+.11102962500302593*n),a=dz(e-.00860903703793275*t-.11102962500302599*n),o=dz(e+.5600313357106791*t-.32062717498731885*n),s={mode:`xyz65`,x:pz(2.070152218389422*i-1.3263473389671556*a+.2066510476294051*o),y:pz(.3647385209748074*i+.680566024947227*a-.0453045459220346*o),z:pz(-.049747207535812*i-.0492609666966138*a+1.1880659249923042*o)};return r!==void 0&&(s.alpha=r),s},hz=(e=0)=>Math.max(e*203,0),gz=({x:e,y:t,z:n,alpha:r})=>{let i=hz(e),a=hz(t),o=hz(n),s=fz(.3592832590121217*i+.6976051147779502*a-.0358915932320289*o),c=fz(-.1920808463704995*i+1.1004767970374323*a+.0753748658519118*o),l=fz(.0070797844607477*i+.0748396662186366*a+.8433265453898765*o),u={mode:`itp`,i:.5*s+.5*c,t:1.61376953125*s-3.323486328125*c+1.709716796875*l,p:4.378173828125*s-4.24560546875*c-.132568359375*l};return r!==void 0&&(u.alpha=r),u},_z={mode:`itp`,channels:[`i`,`t`,`p`,`alpha`],parse:[`--ictcp`],serialize:`--ictcp`,toMode:{xyz65:mz,rgb:e=>nR(mz(e))},fromMode:{xyz65:gz,rgb:e=>gz($L(e))},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:X,t:X,p:X,alpha:{use:X,fixup:GL}}},vz=134.03437499999998,yz=16295499532821565e-27,bz=e=>{if(e<0)return 0;let t=(e/1e4)**oz;return((cz+lz*t)/(1+uz*t))**+vz},xz=(e=0)=>Math.max(e*203,0),Sz=({x:e,y:t,z:n,alpha:r})=>{e=xz(e),t=xz(t),n=xz(n);let i=1.15*e-.15*n,a=.66*t+.34*e,o=bz(.41478972*i+.579999*a+.014648*n),s=bz(-.20151*i+1.120649*a+.0531008*n),c=bz(-.0166008*i+.2648*a+.6684799*n),l=(o+s)/2,u={mode:`jab`,j:.44*l/(1-.56*l)-yz,a:3.524*o-4.066708*s+.542708*c,b:.199076*o+1.096799*s-1.295875*c};return r!==void 0&&(u.alpha=r),u},Cz=134.03437499999998,wz=16295499532821565e-27,Tz=e=>{if(e<0)return 0;let t=e**(1/Cz);return 1e4*((cz-t)/(uz*t-lz))**(1/oz)},Ez=e=>e/203,Dz=({j:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(e+wz)/(.44+.56*(e+wz)),a=Tz(i+.13860504*t+.058047316*n),o=Tz(i-.13860504*t-.058047316*n),s=Tz(i-.096019242*t-.8118919*n),c={mode:`xyz65`,x:Ez(1.661373024652174*a-.914523081304348*o+.23136208173913045*s),y:Ez(-.3250758611844533*a+1.571847026732543*o-.21825383453227928*s),z:Ez(-.090982811*a-.31272829*o+1.5227666*s)};return r!==void 0&&(c.alpha=r),c},Oz=e=>{let t=Sz($L(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},kz=e=>nR(Dz(e)),Az={mode:`jab`,channels:[`j`,`a`,`b`,`alpha`],parse:[`--jzazbz`],serialize:`--jzazbz`,fromMode:{rgb:Oz,xyz65:Sz},toMode:{rgb:kz,xyz65:Dz},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:X,a:X,b:X,alpha:{use:X,fixup:GL}}},jz=({j:e,a:t,b:n,alpha:r})=>{t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.sqrt(t*t+n*n),a={mode:`jch`,j:e,c:i};return i&&(a.h=iR(Math.atan2(n,t)*180/Math.PI)),r!==void 0&&(a.alpha=r),a},Mz=({j:e,c:t,h:n,alpha:r})=>{n===void 0&&(n=0);let i={mode:`jab`,j:e,a:t?t*Math.cos(n/180*Math.PI):0,b:t?t*Math.sin(n/180*Math.PI):0};return r!==void 0&&(i.alpha=r),i},Nz={mode:`jch`,parse:[`--jzczhz`],serialize:`--jzczhz`,toMode:{jab:Mz,rgb:e=>kz(Mz(e))},fromMode:{rgb:e=>jz(Oz(e)),jab:jz},channels:[`j`,`c`,`h`,`alpha`],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:X,fixup:oR},c:X,j:X,alpha:{use:X,fixup:GL}},difference:{h:_R},average:{h:yR}},Pz=29**3/3**3,Fz=6**3/29**3,Iz=e=>e**3>Fz?e**3:(116*e-16)/Pz,Lz=({l:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(e+16)/116,a=t/500+i,o=i-n/200,s={mode:`xyz50`,x:Iz(a)*TR.X,y:Iz(i)*TR.Y,z:Iz(o)*TR.Z};return r!==void 0&&(s.alpha=r),s},Rz=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=tR({r:e*3.1341359569958707-t*1.6173863321612538-.4906619460083532*n,g:e*-.978795502912089+t*1.916254567259524+.03344273116131949*n,b:e*.07195537988411677-t*.2289768264158322+1.405386058324125*n});return r!==void 0&&(i.alpha=r),i},zz=e=>Rz(Lz(e)),Bz=e=>{let{r:t,g:n,b:r,alpha:i}=QL(e),a={mode:`xyz50`,x:.436065742824811*t+.3851514688337912*n+.14307845442264197*r,y:.22249319175623702*t+.7168870538238823*n+.06061979053616537*r,z:.013923904500943465*t+.09708128566574634*n+.7140993584005155*r};return i!==void 0&&(a.alpha=i),a},Vz=e=>e>Fz?Math.cbrt(e):(Pz*e+16)/116,Hz=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Vz(e/TR.X),a=Vz(t/TR.Y),o=Vz(n/TR.Z),s={mode:`lab`,l:116*a-16,a:500*(i-a),b:200*(a-o)};return r!==void 0&&(s.alpha=r),s},Uz=e=>{let t=Hz(Bz(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t};function Wz(e,t){if(!t||t[0]!==`lab`)return;let n={mode:`lab`},[,r,i,a,o]=t;if(!(r.type===J.Hue||i.type===J.Hue||a.type===J.Hue))return r.type!==J.None&&(n.l=Math.min(Math.max(0,r.value),100)),i.type!==J.None&&(n.a=i.type===J.Number?i.value:i.value*125/100),a.type!==J.None&&(n.b=a.type===J.Number?a.value:a.value*125/100),o.type!==J.None&&(n.alpha=Math.min(1,Math.max(0,o.type===J.Number?o.value:o.value/100))),n}var Gz={mode:`lab`,toMode:{xyz50:Lz,rgb:zz},fromMode:{xyz50:Hz,rgb:Uz},channels:[`l`,`a`,`b`,`alpha`],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[Wz],serialize:e=>`lab(${e.l===void 0?`none`:e.l} ${e.a===void 0?`none`:e.a} ${e.b===void 0?`none`:e.b}${e.alpha<1?` / ${e.alpha}`:``})`,interpolate:{l:X,a:X,b:X,alpha:{use:X,fixup:GL}}},Kz={...Gz,mode:`lab65`,parse:[`--lab-d65`],serialize:`--lab-d65`,toMode:{xyz65:OR,rgb:kR},fromMode:{xyz65:jR,rgb:MR},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};function qz(e,t){if(!t||t[0]!==`lch`)return;let n={mode:`lch`},[,r,i,a,o]=t;if(r.type!==J.None){if(r.type===J.Hue)return;n.l=Math.min(Math.max(0,r.value),100)}if(i.type!==J.None&&(n.c=Math.max(0,i.type===J.Number?i.value:i.value*150/100)),a.type!==J.None){if(a.type===J.Percentage)return;n.h=a.value}return o.type!==J.None&&(n.alpha=Math.min(1,Math.max(0,o.type===J.Number?o.value:o.value/100))),n}var Jz={mode:`lch`,toMode:{lab:SR,rgb:e=>zz(SR(e))},fromMode:{rgb:e=>xR(Uz(e)),lab:xR},channels:[`l`,`c`,`h`,`alpha`],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[qz],serialize:e=>`lch(${e.l===void 0?`none`:e.l} ${e.c===void 0?`none`:e.c} ${e.h===void 0?`none`:e.h}${e.alpha<1?` / ${e.alpha}`:``})`,interpolate:{h:{use:X,fixup:oR},c:X,l:X,alpha:{use:X,fixup:GL}},difference:{h:_R},average:{h:yR}},Yz={...Jz,mode:`lch65`,parse:[`--lch-d65`],serialize:`--lch-d65`,toMode:{lab65:e=>SR(e,`lab65`),rgb:e=>kR(SR(e,`lab65`))},fromMode:{rgb:e=>xR(MR(e),`lch65`),lab65:e=>xR(e,`lch65`)},ranges:{l:[0,100],c:[0,150],h:[0,360]}},Xz=({l:e,u:t,v:n,alpha:r})=>{t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.sqrt(t*t+n*n),a={mode:`lchuv`,l:e,c:i};return i&&(a.h=iR(Math.atan2(n,t)*180/Math.PI)),r!==void 0&&(a.alpha=r),a},Zz=({l:e,c:t,h:n,alpha:r})=>{n===void 0&&(n=0);let i={mode:`luv`,l:e,u:t?t*Math.cos(n/180*Math.PI):0,v:t?t*Math.sin(n/180*Math.PI):0};return r!==void 0&&(i.alpha=r),i},Qz=(e,t,n)=>4*e/(e+15*t+3*n),$z=(e,t,n)=>9*t/(e+15*t+3*n),eB=Qz(TR.X,TR.Y,TR.Z),tB=$z(TR.X,TR.Y,TR.Z),nB=e=>e<=Fz?Pz*e:116*Math.cbrt(e)-16,rB=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=nB(t/TR.Y),a=Qz(e,t,n),o=$z(e,t,n);!isFinite(a)||!isFinite(o)?i=a=o=0:(a=13*i*(a-eB),o=13*i*(o-tB));let s={mode:`luv`,l:i,u:a,v:o};return r!==void 0&&(s.alpha=r),s},iB=(e,t,n)=>4*e/(e+15*t+3*n),aB=(e,t,n)=>9*t/(e+15*t+3*n),oB=iB(TR.X,TR.Y,TR.Z),sB=aB(TR.X,TR.Y,TR.Z),cB=({l:e,u:t,v:n,alpha:r})=>{if(e===void 0&&(e=0),e===0)return{mode:`xyz50`,x:0,y:0,z:0};t===void 0&&(t=0),n===void 0&&(n=0);let i=t/(13*e)+oB,a=n/(13*e)+sB,o=TR.Y*(e<=8?e/Pz:((e+16)/116)**3),s={mode:`xyz50`,x:9*i*o/(4*a),y:o,z:o*(12-3*i-20*a)/(4*a)};return r!==void 0&&(s.alpha=r),s},lB={mode:`lchuv`,toMode:{luv:Zz,rgb:e=>Rz(cB(Zz(e)))},fromMode:{rgb:e=>Xz(rB(Bz(e))),luv:Xz},channels:[`l`,`c`,`h`,`alpha`],parse:[`--lchuv`],serialize:`--lchuv`,ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:X,fixup:oR},c:X,l:X,alpha:{use:X,fixup:GL}},difference:{h:_R},average:{h:yR}},uB={...KL,mode:`lrgb`,toMode:{rgb:tR},fromMode:{rgb:QL},parse:[`srgb-linear`],serialize:`srgb-linear`},dB={mode:`luv`,toMode:{xyz50:cB,rgb:e=>Rz(cB(e))},fromMode:{xyz50:rB,rgb:e=>rB(Bz(e))},channels:[`l`,`u`,`v`,`alpha`],parse:[`--luv`],serialize:`--luv`,ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:X,u:X,v:X,alpha:{use:X,fixup:GL}}},fB=({r:e,g:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=Math.cbrt(.412221469470763*e+.5363325372617348*t+.0514459932675022*n),a=Math.cbrt(.2119034958178252*e+.6806995506452344*t+.1073969535369406*n),o=Math.cbrt(.0883024591900564*e+.2817188391361215*t+.6299787016738222*n),s={mode:`oklab`,l:.210454268309314*i+.7936177747023054*a-.0040720430116193*o,a:1.9779985324311684*i-2.42859224204858*a+.450593709617411*o,b:.0259040424655478*i+.7827717124575296*a-.8086757549230774*o};return r!==void 0&&(s.alpha=r),s},pB=e=>{let t=fB(QL(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},mB=({l:e,a:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=(e+.3963377773761749*t+.2158037573099136*n)**3,a=(e-.1055613458156586*t-.0638541728258133*n)**3,o=(e-.0894841775298119*t-1.2914855480194092*n)**3,s={mode:`lrgb`,r:4.076741636075957*i-3.3077115392580616*a+.2309699031821044*o,g:-1.2684379732850317*i+2.6097573492876887*a-.3413193760026573*o,b:-.0041960761386756*i-.7034186179359362*a+1.7076146940746117*o};return r!==void 0&&(s.alpha=r),s},hB=e=>tR(mB(e));function gB(e){let t=.206,n=.03,r=(1+t)/(1+n);return .5*(r*e-t+Math.sqrt((r*e-t)*(r*e-t)+4*n*r*e))}function _B(e){let t=.206,n=.03;return(1+t)/(1+n),(e*e+t*e)/(1.170873786407767*(e+n))}function vB(e,t){let n,r,i,a,o,s,c,l;-1.88170328*e-.80936493*t>1?(n=1.19086277,r=1.76576728,i=.59662641,a=.75515197,o=.56771245,s=4.0767416621,c=-3.3077115913,l=.2309699292):1.81444104*e-1.19445276*t>1?(n=.73956515,r=-.45954404,i=.08285427,a=.1254107,o=.14503204,s=-1.2684380046,c=2.6097574011,l=-.3413193965):(n=1.35733652,r=-.00915799,i=-1.1513021,a=-.50559606,o=.00692167,s=-.0041960863,c=-.7034186147,l=1.707614701);let u=n+r*e+i*t+a*e*e+o*e*t,d=.3963377774*e+.2158037573*t,f=-.1055613458*e-.0638541728*t,p=-.0894841775*e-1.291485548*t;{let e=1+u*d,t=1+u*f,n=1+u*p,r=e*e*e,i=t*t*t,a=n*n*n,o=3*d*e*e,m=3*f*t*t,h=3*p*n*n,g=6*d*d*e,ee=6*f*f*t,te=6*p*p*n,ne=s*r+c*i+l*a,re=s*o+c*m+l*h,ie=s*g+c*ee+l*te;u-=ne*re/(re*re-.5*ne*ie)}return u}function yB(e,t){let n=vB(e,t),r=mB({l:1,a:n*e,b:n*t}),i=Math.cbrt(1/Math.max(r.r,r.g,r.b));return[i,i*n]}function bB(e,t,n,r,i,a=null){a||=yB(e,t);let o;if((n-i)*a[1]-(a[0]-i)*r<=0)o=a[1]*i/(r*a[0]+a[1]*(i-n));else{o=a[1]*(i-1)/(r*(a[0]-1)+a[1]*(i-n));{let a=n-i,s=r,c=.3963377774*e+.2158037573*t,l=-.1055613458*e-.0638541728*t,u=-.0894841775*e-1.291485548*t,d=a+s*c,f=a+s*l,p=a+s*u;{let e=i*(1-o)+o*n,t=o*r,a=e+t*c,s=e+t*l,m=e+t*u,h=a*a*a,g=s*s*s,ee=m*m*m,te=3*d*a*a,ne=3*f*s*s,re=3*p*m*m,ie=6*d*d*a,ae=6*f*f*s,oe=6*p*p*m,se=4.0767416621*h-3.3077115913*g+.2309699292*ee-1,ce=4.0767416621*te-3.3077115913*ne+.2309699292*re,le=4.0767416621*ie-3.3077115913*ae+.2309699292*oe,ue=ce/(ce*ce-.5*se*le),de=-se*ue,fe=-1.2684380046*h+2.6097574011*g-.3413193965*ee-1,pe=-1.2684380046*te+2.6097574011*ne-.3413193965*re,me=-1.2684380046*ie+2.6097574011*ae-.3413193965*oe,he=pe/(pe*pe-.5*fe*me),ge=-fe*he,_e=-.0041960863*h-.7034186147*g+1.707614701*ee-1,_=-.0041960863*te-.7034186147*ne+1.707614701*re,v=-.0041960863*ie-.7034186147*ae+1.707614701*oe,y=_/(_*_-.5*_e*v),ve=-_e*y;de=ue>=0?de:1e6,ge=he>=0?ge:1e6,ve=y>=0?ve:1e6,o+=Math.min(de,Math.min(ge,ve))}}}return o}function xB(e,t,n=null){n||=yB(e,t);let r=n[0],i=n[1];return[i/r,i/(1-r)]}function SB(e,t,n){let r=yB(t,n),i=bB(t,n,e,1,e,r),a=xB(t,n,r),o=.11516993+1/(7.4477897+4.1590124*n+t*(-2.19557347+1.75198401*n+t*(-2.13704948-10.02301043*n+t*(-4.24894561+5.38770819*n+4.69891013*t)))),s=.11239642+1/(1.6132032-.68124379*n+t*(.40370612+.90148123*n+t*(-.27087943+.6122399*n+t*(.00299215-.45399568*n-.14661872*t)))),c=i/Math.min(e*a[0],(1-e)*a[1]),l=e*o,u=(1-e)*s,d=.9*c*Math.sqrt(Math.sqrt(1/(1/(l*l*l*l)+1/(u*u*u*u))));return l=e*.4,u=(1-e)*.8,[Math.sqrt(1/(1/(l*l)+1/(u*u))),d,i]}function CB(e){let t=e.l===void 0?0:e.l,n=e.a===void 0?0:e.a,r=e.b===void 0?0:e.b,i={mode:`okhsl`,l:gB(t)};e.alpha!==void 0&&(i.alpha=e.alpha);let a=Math.sqrt(n*n+r*r);if(!a)return i.s=0,i;let[o,s,c]=SB(t,n/a,r/a),l;if(a<s){let e=.8*o,t=1-e/s;l=(a-0)/(e+t*(a-0))*.8}else{let e=s,t=.2*s*s*1.25*1.25/o,n=1-t/(c-s);l=.8+.2*((a-e)/(t+n*(a-e)))}return l&&(i.s=l,i.h=iR(Math.atan2(r,n)*180/Math.PI)),i}function wB(e){let t=e.h===void 0?0:e.h,n=e.s===void 0?0:e.s,r=e.l===void 0?0:e.l,i={mode:`oklab`,l:_B(r)};if(e.alpha!==void 0&&(i.alpha=e.alpha),!n||r===1)return i.a=i.b=0,i;let a=Math.cos(t/180*Math.PI),o=Math.sin(t/180*Math.PI),[s,c,l]=SB(i.l,a,o),u,d,f,p;n<.8?(u=1.25*n,d=0,f=.8*s,p=1-f/c):(u=5*(n-.8),d=c,f=.2*c*c*1.25*1.25/s,p=1-f/(l-c));let m=d+u*f/(1-p*u);return i.a=m*a,i.b=m*o,i}var TB={...QR,mode:`okhsl`,channels:[`h`,`s`,`l`,`alpha`],parse:[`--okhsl`],serialize:`--okhsl`,fromMode:{oklab:CB,rgb:e=>CB(pB(e))},toMode:{oklab:wB,rgb:e=>hB(wB(e))}};function EB(e){let t=e.l===void 0?0:e.l,n=e.a===void 0?0:e.a,r=e.b===void 0?0:e.b,i=Math.sqrt(n*n+r*r),a=i?n/i:1,o=i?r/i:1,[s,c]=xB(a,o),l=.5,u=1-l/s,d=c/(i+t*c),f=d*t,p=d*i,m=_B(f),h=p*m/f,g=mB({l:m,a:a*h,b:o*h}),ee=Math.cbrt(1/Math.max(g.r,g.g,g.b,0));t/=ee,i=i/ee*gB(t)/t,t=gB(t);let te={mode:`okhsv`,s:i?(l+c)*p/(c*l+c*u*p):0,v:t?t/f:0};return te.s&&(te.h=iR(Math.atan2(r,n)*180/Math.PI)),e.alpha!==void 0&&(te.alpha=e.alpha),te}function DB(e){let t={mode:`oklab`};e.alpha!==void 0&&(t.alpha=e.alpha);let n=e.h===void 0?0:e.h,r=e.s===void 0?0:e.s,i=e.v===void 0?0:e.v,a=Math.cos(n/180*Math.PI),o=Math.sin(n/180*Math.PI),[s,c]=xB(a,o),l=.5,u=1-l/s,d=1-r*l/(l+c-c*u*r),f=r*c*l/(l+c-c*u*r),p=_B(d),m=f*p/d,h=mB({l:p,a:a*m,b:o*m}),g=Math.cbrt(1/Math.max(h.r,h.g,h.b,0)),ee=_B(i*d),te=f*ee/d;return t.l=ee*g,t.a=te*a*g,t.b=te*o*g,t}var OB={...tz,mode:`okhsv`,channels:[`h`,`s`,`v`,`alpha`],parse:[`--okhsv`],serialize:`--okhsv`,fromMode:{oklab:EB,rgb:e=>EB(pB(e))},toMode:{oklab:DB,rgb:e=>hB(DB(e))}};function kB(e,t){if(!t||t[0]!==`oklab`)return;let n={mode:`oklab`},[,r,i,a,o]=t;if(!(r.type===J.Hue||i.type===J.Hue||a.type===J.Hue))return r.type!==J.None&&(n.l=Math.min(Math.max(0,r.type===J.Number?r.value:r.value/100),1)),i.type!==J.None&&(n.a=i.type===J.Number?i.value:i.value*.4/100),a.type!==J.None&&(n.b=a.type===J.Number?a.value:a.value*.4/100),o.type!==J.None&&(n.alpha=Math.min(1,Math.max(0,o.type===J.Number?o.value:o.value/100))),n}var AB={...Gz,mode:`oklab`,toMode:{lrgb:mB,rgb:hB},fromMode:{lrgb:fB,rgb:pB},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[kB],serialize:e=>`oklab(${e.l===void 0?`none`:e.l} ${e.a===void 0?`none`:e.a} ${e.b===void 0?`none`:e.b}${e.alpha<1?` / ${e.alpha}`:``})`};function jB(e,t){if(!t||t[0]!==`oklch`)return;let n={mode:`oklch`},[,r,i,a,o]=t;if(r.type!==J.None){if(r.type===J.Hue)return;n.l=Math.min(Math.max(0,r.type===J.Number?r.value:r.value/100),1)}if(i.type!==J.None&&(n.c=Math.max(0,i.type===J.Number?i.value:i.value*.4/100)),a.type!==J.None){if(a.type===J.Percentage)return;n.h=a.value}return o.type!==J.None&&(n.alpha=Math.min(1,Math.max(0,o.type===J.Number?o.value:o.value/100))),n}var MB={...Jz,mode:`oklch`,toMode:{oklab:e=>SR(e,`oklab`),rgb:e=>hB(SR(e,`oklab`))},fromMode:{rgb:e=>xR(pB(e),`oklch`),oklab:e=>xR(e,`oklch`)},parse:[jB],serialize:e=>`oklch(${e.l===void 0?`none`:e.l} ${e.c===void 0?`none`:e.c} ${e.h===void 0?`none`:e.h}${e.alpha<1?` / ${e.alpha}`:``})`,ranges:{l:[0,1],c:[0,.4],h:[0,360]}},NB=e=>{let{r:t,g:n,b:r,alpha:i}=QL(e),a={mode:`xyz65`,x:.486570948648216*t+.265667693169093*n+.1982172852343625*r,y:.2289745640697487*t+.6917385218365062*n+.079286914093745*r,z:0*t+.0451133818589026*n+1.043944368900976*r};return i!==void 0&&(a.alpha=i),a},PB=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=tR({r:e*2.4934969119414263-t*.9313836179191242-.402710784450717*n,g:e*-.8294889695615749+t*1.7626640603183465+.0236246858419436*n,b:e*.0358458302437845-t*.0761723892680418+.9568845240076871*n},`p3`);return r!==void 0&&(i.alpha=r),i},FB={...KL,mode:`p3`,parse:[`display-p3`],serialize:`display-p3`,fromMode:{rgb:e=>PB($L(e)),xyz65:PB},toMode:{rgb:e=>nR(NB(e)),xyz65:NB}},IB=e=>{let t=Math.abs(e);return t>=1/512?Math.sign(e)*t**(1/1.8):16*e},LB=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`prophoto`,r:IB(e*1.3457868816471585-t*.2555720873797946-.0511018649755453*n),g:IB(e*-.5446307051249019+t*1.5082477428451466+.0205274474364214*n),b:IB(e*0+t*0+1.2119675456389452*n)};return r!==void 0&&(i.alpha=r),i},RB=(e=0)=>{let t=Math.abs(e);return t>=16/512?Math.sign(e)*t**1.8:e/16},zB=e=>{let t=RB(e.r),n=RB(e.g),r=RB(e.b),i={mode:`xyz50`,x:.7977666449006423*t+.1351812974005331*n+.0313477341283922*r,y:.2880748288194013*t+.7118352342418731*n+899369387256e-16*r,z:0*t+0*n+.8251046025104602*r};return e.alpha!==void 0&&(i.alpha=e.alpha),i},BB={...KL,mode:`prophoto`,parse:[`prophoto-rgb`],serialize:`prophoto-rgb`,fromMode:{xyz50:LB,rgb:e=>LB(Bz(e))},toMode:{xyz50:zB,rgb:e=>Rz(zB(e))}},VB=1.09929682680944,HB=.018053968510807,UB=e=>{let t=Math.abs(e);return t>HB?(Math.sign(e)||1)*(VB*t**.45-(VB-1)):4.5*e},WB=({x:e,y:t,z:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`rec2020`,r:UB(e*1.7166511879712683-t*.3556707837763925-.2533662813736599*n),g:UB(e*-.6666843518324893+t*1.6164812366349395+.0157685458139111*n),b:UB(e*.0176398574453108-t*.0427706132578085+.9421031212354739*n)};return r!==void 0&&(i.alpha=r),i},GB=1.09929682680944,KB=.018053968510807,qB=(e=0)=>{let t=Math.abs(e);return t<KB*4.5?e/4.5:(Math.sign(e)||1)*((t+GB-1)/GB)**(1/.45)},JB=e=>{let t=qB(e.r),n=qB(e.g),r=qB(e.b),i={mode:`xyz65`,x:.6369580483012911*t+.1446169035862083*n+.1688809751641721*r,y:.262700212011267*t+.6779980715188708*n+.059301716469862*r,z:0*t+.0280726930490874*n+1.0609850577107909*r};return e.alpha!==void 0&&(i.alpha=e.alpha),i},YB={...KL,mode:`rec2020`,fromMode:{xyz65:WB,rgb:e=>WB($L(e))},toMode:{xyz65:JB,rgb:e=>nR(JB(e))},parse:[`rec2020`],serialize:`rec2020`},XB=.0037930732552754493,ZB=Math.cbrt(XB),QB=e=>Math.cbrt(e)-ZB,$B=e=>{let{r:t,g:n,b:r,alpha:i}=QL(e),a=QB(.3*t+.622*n+.078*r+XB),o=QB(.23*t+.692*n+.078*r+XB),s=QB(.2434226892454782*t+.2047674442449682*n+.5518098665095535*r+XB),c={mode:`xyb`,x:(a-o)/2,y:(a+o)/2,b:s-(a+o)/2};return i!==void 0&&(c.alpha=i),c},eV=e=>(e+ZB)**3,tV={mode:`xyb`,channels:[`x`,`y`,`b`,`alpha`],parse:[`--xyb`],serialize:`--xyb`,toMode:{rgb:({x:e,y:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i=eV(e+t)-XB,a=eV(t-e)-XB,o=eV(n+t)-XB,s=tR({r:11.031566904639861*i-9.866943908131562*a-.16462299650829934*o,g:-3.2541473810744237*i+4.418770377582723*a-.16462299650829934*o,b:-3.6588512867136815*i+2.7129230459360922*a+1.9459282407775895*o});return r!==void 0&&(s.alpha=r),s}},fromMode:{rgb:$B},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:X,y:X,b:X,alpha:{use:X,fixup:GL}}},nV={mode:`xyz50`,parse:[`xyz-d50`],serialize:`xyz-d50`,toMode:{rgb:Rz,lab:Hz},fromMode:{rgb:Bz,lab:Lz},channels:[`x`,`y`,`z`,`alpha`],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:X,y:X,z:X,alpha:{use:X,fixup:GL}}},rV={mode:`xyz65`,toMode:{rgb:nR,xyz50:e=>{let{x:t,y:n,z:r,alpha:i}=e;t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0);let a={mode:`xyz50`,x:1.0479298208405488*t+.0229467933410191*n-.0501922295431356*r,y:.0296278156881593*t+.990434484573249*n-.0170738250293851*r,z:-.0092430581525912*t+.0150551448965779*n+.7518742899580008*r};return i!==void 0&&(a.alpha=i),a}},fromMode:{rgb:$L,xyz50:e=>{let{x:t,y:n,z:r,alpha:i}=e;t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0);let a={mode:`xyz65`,x:.9554734527042182*t-.0230985368742614*n+.0632593086610217*r,y:-.0283697069632081*t+1.0099954580058226*n+.021041398966943*r,z:.0123140016883199*t-.0205076964334779*n+1.3303659366080753*r};return i!==void 0&&(a.alpha=i),a}},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:[`x`,`y`,`z`,`alpha`],parse:[`xyz`,`xyz-d65`],serialize:`xyz-d65`,interpolate:{x:X,y:X,z:X,alpha:{use:X,fixup:GL}}},iV={mode:`yiq`,toMode:{rgb:({y:e,i:t,q:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`rgb`,r:e+.95608445*t+.6208885*n,g:e-.27137664*t-.6486059*n,b:e-1.10561724*t+1.70250126*n};return r!==void 0&&(i.alpha=r),i}},fromMode:{rgb:({r:e,g:t,b:n,alpha:r})=>{e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0);let i={mode:`yiq`,y:.29889531*e+.58662247*t+.11448223*n,i:.59597799*e-.2741761*t-.32180189*n,q:.21147017*e-.52261711*t+.31114694*n};return r!==void 0&&(i.alpha=r),i}},channels:[`y`,`i`,`q`,`alpha`],parse:[`--yiq`],serialize:`--yiq`,ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:X,i:X,q:X,alpha:{use:X,fixup:GL}}},aV=(e,t)=>Math.round(e*(t=10**t))/t;((e=4)=>t=>typeof t==`number`?aV(t,e):t)(2);var oV=e=>Math.max(0,Math.min(1,e||0)),sV=e=>Math.round(oV(e)*255),cV=vL(`rgb`),lV=e=>{if(e===void 0)return;let t=sV(e.r),n=sV(e.g),r=sV(e.b);return`#`+(1<<24|t<<16|n<<8|r).toString(16).slice(1)},uV=e=>lV(cV(e)),dV=e=>{let t={mode:e.mode,r:Math.max(0,Math.min(e.r===void 0?0:e.r,1)),g:Math.max(0,Math.min(e.g===void 0?0:e.g,1)),b:Math.max(0,Math.min(e.b===void 0?0:e.b,1))};return e.alpha!==void 0&&(t.alpha=e.alpha),t},fV=e=>e!==void 0&&(e.r===void 0||e.r>=0&&e.r<=1)&&(e.g===void 0||e.g>=0&&e.g<=1)&&(e.b===void 0||e.b>=0&&e.b<=1);function pV(e=`rgb`){let{gamut:t}=TL(e);if(!t)return e=>!0;let n=vL(typeof t==`string`?t:e);return e=>fV(n(e))}function mV(e=`rgb`){let{gamut:t}=TL(e);if(!t)return e=>_L(e);let n=typeof t==`string`?t:e,r=vL(n),i=pV(n);return e=>{let t=_L(e);if(!t)return;let n=r(t);if(i(n))return t;let a=dV(n);return t.mode===a.mode?a:vL(t.mode)(a)}}wL(rR),wL(bR),wL(VR),wL(HR),wL(GR),wL(QR),wL(tz),wL(az),wL(_z),wL(Az),wL(Nz),wL(Gz),wL(Kz),wL(Jz),wL(Yz),wL(lB),wL(uB),wL(dB),wL(TB),wL(OB),wL(AB),wL(MB),wL(FB),wL(BB),wL(YB),wL(KL),wL(tV),wL(nV),wL(rV),wL(iV);var hV=vR(`rgb`),gV=class e{constructor(e){this.set(e)}static isValidColorString(t){try{return new e(t),!0}catch{return!1}}static isColor(t){return t instanceof e}static deserialize(t){let n=JSON.parse(t),r=new e(`black`);return Uc(n).forEach(([e,t])=>{e===`originalColorSyntax`?r.originalColorSyntax=Dc.isEnumValue(t,JI,`Cannot deserialize: invalid color syntax.`):r._allColors[e]=t}),r}getRgbDistance(e){return hV(this.#e,e)}getClosestNamedColor(){return S(QI).reduce((e,t)=>{let n=this.getRgbDistance(t);return n<e.distance?{distance:n,name:t}:e},{name:``,distance:1/0}).name}toString(){return this.toCss()[this.originalColorSyntax]}originalColorSyntax=JI.hex;#e=Dc.isDefined(BL(`black`));_allColors={names:[`black`],[JI.name]:`black`,hexString:`#000000`,[JI.hex]:{r:0,g:0,b:0},[JI.rgb]:{r:0,g:0,b:0},[JI.hsl]:{h:0,s:0,l:0},[JI.hwb]:{h:0,w:0,b:0},[JI.lab]:{l:0,a:0,b:0},[JI.lch]:{l:0,c:0,h:0},[JI.oklab]:{l:0,a:0,b:0},[JI.oklch]:{l:0,c:0,h:0}};clone(){return e.deserialize(this.serialize())}setByString(e){let t=BL(e);if(!t)throw Error(`Unable to parse invalid color string: '${e}'`);this.originalColorSyntax=XI(e),this.#e=t,this.pullFromInternalColor()}set(e){if(j.isString(e))return this.setByString(e);if(Mc.isLengthExactly(Object.keys(e),1,`Cannot set multiple color formats at once: got '${Bl(Object.keys(e))}'`),e.hexString||e.name)this.setByString(e.hexString||e.name);else{let[t,n]=Dc.isDefined(Uc(e)[0]),r=YI[t],i=Object.values(jl(r.coords,e=>{let i=n[e],a=r.coords[Dc.isKeyOf(e,r.coords)],o=i!=null&&i>=a.min&&i<=a.max?n[e]:this[t][e];return Dc.isDefined(o)}));this.setByString(`${r.conversionFormat}(${i.join(` `)})`)}}pullFromInternalColor(){Ee(qI).forEach(e=>{let t=YI[e],n=t.conversionFormat,r=j.isKeyOf(this.#e.mode,YI)?YI[this.#e.mode]:void 0,i=mV(t.colorSpace===r?.colorSpace?n:`rgb`)(vL(n)(this.#e));i||Mc.never(`Failed to convert color '${JSON.stringify(this.#e)}' to '${e}'.`),S(this[e]).forEach(n=>{let r=i[n],a=t.coords[Dc.isKeyOf(n,t.coords)];r!=null&&(this._allColors[e][n]=Tl((r||0)*(a.factor||1),{digits:a.digits||0}))})}),this._allColors.hexString=uV(this.#e),this._allColors.names=_V(this.rgb),this._allColors[JI.name]=this._allColors.names[0]||``}serialize(){return JSON.stringify({...this.allColors,originalColorSyntax:this.originalColorSyntax})}get allColors(){return el(this._allColors)}toFormattedStrings(){return{...jl(YI,e=>Object.values(this[e]).map(e=>String(e).padStart(6,` `)).join(` `)),names:this.names.join(`, `).padEnd(nL,` `),[JI.name]:(this.names[0]||``).padEnd(nL,` `),[JI.hexString]:this[JI.hexString]}}toCss(){return{...jl(YI,e=>`${e}(${Object.values(this[e]).join(` `)})`),[JI.hexString]:this[JI.hexString],[JI.name]:this.names[0]||``}}get names(){return el(this._allColors.names)}get name(){return this._allColors.names[0]||``}get hexString(){return this._allColors[JI.hexString]}get hex(){return el(this._allColors[JI.hex])}get rgb(){return el(this._allColors[JI.rgb])}get hsl(){return el(this._allColors[JI.hsl])}get hwb(){return el(this._allColors[JI.hwb])}get lab(){return el(this._allColors[JI.lab])}get lch(){return el(this._allColors[JI.lch])}get oklab(){return el(this._allColors[JI.oklab])}get oklch(){return el(this._allColors[JI.oklch])}};function _V(e){return Gc(Uc(QI),([e])=>e,(t,[,n])=>j.deepEquals(n,[e.r,e.g,e.b]))}function vV(e){return z`
        color: ${e.foreground.value};
        background-color: ${e.background.value};
    `}function yV({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split(``).every(e=>yV({input:e,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function bV({value:e,allowed:t,blocked:n}){let r=String(e),i=t?yV({input:r,matcher:t}):!0,a=n?yV({input:r,matcher:n}):!1;return i&&!a}function xV(e){let t=String(e.value);if(!e.value)return{filtered:t,blocked:``};let{filtered:n,blocked:r}=t.split(``).reduce((t,n)=>(bV({...e,value:n})?t.filtered.push(n):t.blocked.push(n),t),{filtered:[],blocked:[]});return{filtered:n.join(``),blocked:r.join(``)}}function SV({inputs:e,previousValue:t,event:n,inputBlockedCallback:r,newValueCallback:i}){let a=zP(n,HTMLInputElement),o=j.hasKey(n,`data`)&&Pc.isString(n.data)||``;if(o){let{blocked:t}=xV({value:o,allowed:e.allowedInputs,blocked:e.blockedInputs});t.length&&r(t)}let s=xV({value:a.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;a.value!==s&&(a.value=s),t!==s&&i(s)}var CV;(function(e){e.Default=`text`,e.Password=`password`,e.Email=`email`,e.Number=`number`})(CV||={});var wV=jP()({tagName:`vira-input`,cssVars:{"vira-input-padding-horizontal":`10px`,"vira-input-padding-vertical":`6px`},styles:({hostClasses:e,cssVars:t})=>z`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${G[`vira-form-foreground-color`].value};
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
                    font-weight: ${G[`vira-form-label-font-weight`].value};
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
                ${EP};
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
                ${kP};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e[`vira-input-clear-button-shown`].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${EP};
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
                border-radius: ${G[`vira-form-radius`].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${G[`vira-form-border-color`].value};
            }

            .input-wrapper {
                ${EP};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t[`vira-input-padding-horizontal`].value};
                border-radius: ${G[`vira-form-radius`].value};
                background-color: ${G[`vira-form-background-color`].value};
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
                ${EP};
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
                    ${lP({elementBorderSize:`1px`,noNesting:!0})}
                }
            }

            ::selection {
                background: ${G[`vira-form-text-selection-color`].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${G[`vira-form-text-selection-color`].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${G[`vira-form-placeholder-color`].value};
            }

            .suffix {
                font-weight: bold;
                ${kP};
            }

            button {
                ${EP};
                cursor: pointer;
                display: flex;
                transition: color
                    ${sP[`vira-interaction-animation-duration`].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${G[`vira-form-placeholder-color`].value};
            }

            .clear-x-button:hover {
                color: ${G[`vira-form-error-color`].value};
            }

            .clear-x-button:active {
                color: ${G[`vira-form-error-active-color`].value};
            }

            .show-password-button:hover {
                color: ${G[`vira-form-accent-primary-color`].value};
            }

            .show-password-button:active {
                color: ${G[`vira-form-accent-primary-active-color`].value};
            }

            ${e[`vira-input-error`].selector} {
                & .wrapper-border {
                    border-color: ${G[`vira-form-error-color`].value};
                }
            }

            ${e[`vira-input-disabled`].selector} {
                cursor: not-allowed;

                & * {
                    cursor: not-allowed;
                }

                & > * {
                    ${oP};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,events:{valueChange:QM(),inputBlocked:QM()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Zc(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:n,updateState:r,events:i,host:a})=>{let{filtered:o}=xV({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?B`
                  <${q.assign({icon:e.icon})}
                      class="left-side-icon"
                  ></${q}>
              `:M,c=e.fitText?z`
                  width: ${n.forcedInputWidth}px;
              `:M,l=xN(`mousedown`,e=>{let t=zP(e,HTMLElement,{useOriginalTarget:!0}),n=Dc.instanceOf(a.shadowRoot.querySelector(`input`),HTMLInputElement);t!==n&&(e.preventDefault(),n.focus())}),u=e.disableBrowserHelps||e.type===CV.Password,d=B`
            <span class="input-wrapper" ${e.label?M:l}>
                ${s}
                ${MN(!!e.fitText,B`
                        <span
                            class="size-span"
                            ${kN(({contentRect:e})=>{r({forcedInputWidth:e.width})})}
                        >
                            <pre>${o||e.placeholder||M}</pre>
                        </span>
                    `)}

                <input
                    id=${OM(e.label?n.randomId:void 0)}
                    aria-label=${OM(e.label||void 0)}
                    autofocus=${!1}
                    type=${TV(e.type,n.showPassword)}
                    style=${c}
                    autocomplete=${OM(u?`off`:void 0)}
                    autocorrect=${OM(u?`off`:void 0)}
                    autocapitalize=${OM(u?`off`:void 0)}
                    spellcheck=${OM(u?`false`:void 0)}
                    ?disabled=${e.disabled}
                    .value=${o}
                    ${xN(`input`,n=>{SV({inputs:e,previousValue:o,event:n,inputBlockedCallback(e){t(new i.inputBlocked(e))},newValueCallback(e){t(new i.valueChange(e))}})})}
                    placeholder=${OM(e.placeholder||void 0)}
                    ${yN(e.attributePassthrough)}
                />

                ${MN(!!(e.showClearButton&&e.value),B`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${xN(`mousedown`,e=>{e.stopImmediatePropagation(),e.preventDefault()})}
                            ${xN(`click`,()=>{e.disabled||t(new i.valueChange(``))})}
                        >
                            <${q.assign({icon:XF})}></${q}>
                        </button>
                    `)}
                ${MN(e.type===CV.Password,B`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${xN(`mousedown`,e=>{e.stopImmediatePropagation(),e.preventDefault()})}
                            ${xN(`click`,()=>{r({showPassword:!n.showPassword})})}
                        >
                            <${q.assign({icon:n.showPassword?aI:iI})}></${q}>
                        </button>
                    `)}
                ${MN(!!e.suffix,B`
                        <div class="suffix">${e.suffix}</div>
                    `)}

                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>
            </span>
        `;return e.label?B`
                <label for=${n.randomId} ${l}>
                    <span class="input-label">${e.label}</span>
                    ${d}
                </label>
            `:d}});function TV(e,t){return e===CV.Password&&t?CV.Default:e||CV.Default}var EV=lN()({tagName:`vir-color-slider`,cssVars:{"vir-color-slider-gradient":`black`},styles:({cssVars:e})=>z`
        :host {
            display: flex;
            align-items: center;
            font-family: ${uP[`vira-monospace`].value};
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

        ${wV} {
            width: 76px;
        }

        .coordinate {
            font-size: 18px;
            margin-top: -4px;
        }
    `,events:{valueChange:QM()},render({inputs:e,events:t,dispatch:n,cssVars:r}){let i=YI[e.colorFormatName],a=i.coords[e.colorCoordinateName];if(!a)throw Error(`Invalid color coordinate '${e.colorCoordinateName}' for color format '${e.colorFormatName}'`);let o=z`linear-gradient(to right, ${Eu(qc(10,t=>{let n=a.min+(a.max-a.min)*(t/10);return new gV({[e.colorFormatName]:{...e.color[e.colorFormatName],[e.colorCoordinateName]:n}}).toCss()[i.conversionFormat]}).join(`,`))})`,s=Dc.isNumber(e.color[e.colorFormatName][e.colorCoordinateName]),c=a.radix?Math.round(s).toString(a.radix).toUpperCase().padStart(a.radixPad||0,`0`):String(s);return B`
            <span class="coordinate">${e.colorCoordinateName.toUpperCase()}</span>
            <input
                type="range"
                style=${z`
                    ${r[`vir-color-slider-gradient`].name}: ${o};
                `}
                step=${10**(a.digits?-a.digits:0)}
                ${DN(e=>{Mc.instanceOf(e,HTMLInputElement),e.min=String(a.min),e.max=String(a.max),e.value=String(s)})}
                ${xN(`input`,e=>{let r=zP(e,HTMLInputElement),i=Number(r.value);isNaN(i)||n(new t.valueChange(i))})}
            />
            <${wV.assign({value:c})}
                ${xN(wV.events.valueChange,e=>{let r=a.radix?parseInt(e.detail,a.radix):Number(e.detail);isNaN(r)||n(new t.valueChange(r))})}
            ></${wV}>
        `}}),DV=lN()({tagName:`vir-color-format-sliders`,styles:z`
        :host {
            display: flex;
            flex-direction: column;
        }

        h3 {
            ${TP};
        }
    `,events:{colorChange:QM()},render({inputs:e,dispatch:t,events:n}){let r=YI[e.colorFormatName],i=S(r.coords).map(i=>B`
                    <${EV.assign({color:e.color,colorCoordinateName:i,colorFormatName:e.colorFormatName})}
                        ${xN(EV.events.valueChange,a=>{let o=e.color.clone();o.set({[e.colorFormatName]:{[i]:a.detail}});let s=o.toCss()[r.conversionFormat];t(new n.colorChange(s))})}
                    ></${EV}>
                `);return B`
            ${e.showFormatName?B`
                      <h3>${e.colorFormatName}</h3>
                  `:M}
            ${i}
        `}}),OV;(function(e){e.Vertical=`vertical`,e.Horizontal=`horizontal`})(OV||={});function kV(e,t,n,r={}){let i=t.map((e,t)=>({cells:n(e,t),data:e}));return r.orientation===OV.Horizontal?{headerRow:void 0,rows:Gc(e,e=>{if(e.disabled)return;let t=r.hideHeaders?[]:[{content:e.content??e.key,key:e.key,data:void 0}],n=Gc(i,({data:t,cells:n})=>{if(n)return{content:n[e.key],key:e.key,data:t}},j.isTruthy);return{cells:[...t,...n],data:void 0}},j.isTruthy),orientation:OV.Horizontal}:{headerRow:r.hideHeaders?[]:Gc(e,e=>{if(!e.disabled)return{content:e.content??e.key,key:e.key,data:void 0}},j.isTruthy),rows:Gc(i,({cells:t,data:n})=>{if(t)return{cells:Gc(e,e=>{if(!e.disabled)return{content:t[e.key],key:e.key,data:n}},j.isTruthy),data:n}},j.isTruthy),orientation:OV.Vertical}}var AV=lN()({tagName:`vir-color-swatch`,styles:z`
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
    `,render({inputs:e}){let t=e.backgroundColor||e.foregroundColor,n=e.foregroundColor||`transparent`;return B`
            <div
                style=${z`
                    background-color: ${Eu(t)};
                    color: ${Eu(n)};
                `}
            >
                <slot></slot>
            </div>
        `}});function jV(e){return`groupName`in e}function MV(e,t){return B`
        <option
            ?selected=${e.value===t}
            aria-label=${e.label}
            ?disabled=${e.disabled}
            value=${e.value}
        >
            ${e.label}
        </option>
    `}var NV=jP()({tagName:`vira-select`,state(){return{randomId:Zc(32),cleanupListeners:void 0}},events:{valueChange:QM()},cssVars:{"vira-select-padding-horizontal":`10px`,"vira-select-padding-vertical":`6px`,"vira-select-icon-padding":`44px`},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError,"vira-select-not-raw":({inputs:e})=>!e.rawSelect},styles:({hostClasses:e,cssVars:t})=>z`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${G[`vira-form-foreground-color`].value};
        }

        .select-wrapper {
            ${EP};
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
                    color: ${G[`vira-form-placeholder-color`].value};
                }

                &.with-icon {
                    padding-left: ${t[`vira-select-icon-padding`].value};
                }
            }

            & ${q} {
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
                border-radius: ${G[`vira-form-radius`].value};
                color: ${G[`vira-form-foreground-color`].value};
                background-color: ${G[`vira-form-background-color`].value};
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
                        ${lP({elementBorderSize:`1px`,noNesting:!0})}
                    }
                }

                & .border-style {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: ${G[`vira-form-radius`].value};
                    z-index: 0;
                    pointer-events: none;
                }

                & .wrapper-border {
                    top: -1px;
                    left: -1px;
                    border: 1px solid ${G[`vira-form-border-color`].value};
                    transition: border
                        ${sP[`vira-interaction-animation-duration`].value};
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
                font-weight: ${G[`vira-form-label-font-weight`].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }

        ${e[`vira-select-disabled`].selector} {
            cursor: not-allowed;

            & select,
            & .wrapper-border {
                ${oP}
            }
            ${q} {
                ${oP}
            }
            & * {
                cursor: not-allowed;
            }
        }

        :host(.${e[`vira-select-not-raw`].name}.${e[`vira-select-error`].name})
            .wrapper-border {
            border-color: ${G[`vira-form-error-color`].value};
        }
    `,init({state:e,updateState:t,host:n}){e.cleanupListeners?.();function r(){return Dc.instanceOf(n.shadowRoot.querySelector(`select`),HTMLSelectElement)}let i=[Kl(n,`mousedown`,e=>{let t=r();e.composedPath().includes(t)||(e.preventDefault(),e.stopPropagation(),t.showPicker&&t.showPicker())}),Kl(n,`click`,e=>{let t=r();e.composedPath().includes(t)||(e.preventDefault(),e.stopPropagation(),t.showPicker&&t.showPicker())})];t({cleanupListeners:()=>{i.forEach(e=>e())}})},cleanup({state:e,updateState:t}){e.cleanupListeners?.(),t({cleanupListeners:void 0})},render({inputs:e,state:t,dispatch:n,events:r}){let i=e.value||void 0,a=e.placeholder||i==null?B`
                      <option value="" disabled ?selected=${i==null}>
                          ${e.placeholder}
                      </option>
                  `:M,o=B`
            <span class="select-wrapper">
                <select
                    .value=${OM(i)}
                    class=${DM({placeholder:!i&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${OM(e.label?t.randomId:void 0)}
                    aria-label=${OM(e.label||void 0)}
                    aria-disabled=${OM(e.disabled?`true`:void 0)}
                    ${xN(`input`,t=>{let a=zP(t,HTMLSelectElement),o=a.value;a.value!==i&&(a.selectedIndex=e.options.flatMap(e=>jV(e)?[...e.options]:[e]).findIndex(e=>e.value===i)),n(new r.valueChange(o))})}
                    ${yN(e.attributePassthrough?.select)}
                >
                    ${a}
                    ${e.options.map(e=>jV(e)?B`
                                <optgroup label=${e.groupName}>
                                    ${e.options.map(e=>MV(e,i))}
                                </optgroup>
                            `:MV(e,i))}
                </select>
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <select> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>

                <${q.assign({icon:e.icon})}
                    class="input-icon"
                ></${q}>
                <${q.assign({icon:IF})}
                    class="trigger-icon"
                ></${q}>
            </span>
        `;return e.label?B`
                <label for=${t.randomId} ${yN(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${o}
                </label>
            `:o}}),PV=class extends Hl()(`local-storage-client-all-values-event`){},FV=new class{shapes;options;listenTarget=new Gl;keyEvents;get AllValuesType(){throw Error(`Cannot use AllValuesType as a runtime value. It is a type only.`)}get ValueType(){throw Error(`Cannot use ValueType as a runtime value. It is a type only.`)}constructor(e,t={}){this.shapes=e,this.options=t,this.storeName=t.storeName||`local-storage-client`,this.keyEvents=jl(e,e=>class extends Hl()(`local-storage-client-${String(e)}-event`){}),this.get=jl(this.shapes,e=>(t={})=>this.getAllValues(t)[e]),this.listen=jl(this.shapes,e=>t=>this.listenTarget.listen(this.keyEvents[e],async e=>{await t(e.detail)})),this.set=jl(this.shapes,e=>t=>{Wj(t,this.shapes[e],{allowExtraKeys:!0},`LocalStorageClient: Invalid value for key '${String(e)}'.`);let n=this.getAllValues();return n[e]=t,globalThis.localStorage.setItem(this.storeName,JSON.stringify(n)),this.listenTarget.dispatch(new PV({detail:n})),this.listenTarget.dispatch(new this.keyEvents[e]({detail:t})),t}),this.delete=jl(this.shapes,e=>()=>{let t=this.getAllValues();delete t[e],globalThis.localStorage.setItem(this.storeName,JSON.stringify(t)),this.listenTarget.dispatch(new PV({detail:t})),this.listenTarget.dispatch(new this.keyEvents[e]({detail:void 0}))})}storeName;getAllValues({throwErrorOnFailure:e=!1}={}){return $c(()=>fl(JSON.parse(globalThis.localStorage.getItem(this.storeName)||`{}`),(t,n)=>{let r=this.shapes[t];if(r){if(e)Wj(n,r,{allowExtraKeys:!0});else if(!Uj(n,r,{allowExtraKeys:!0}))return;return{key:t,value:n}}}),{handleError:t=>{if(e)throw Me(t,`LocalStorageClient: store '${this.storeName}' is corrupt and cannot be loaded.`);return{}}})}listenToAllValues(e){return this.listenTarget.listen(PV,async t=>{await e(t.detail)})}listen;get;set;delete;clear(){globalThis.localStorage.removeItem(this.storeName)}destroy(){this.listenTarget.destroy()}}({lastFormat:Aj(qI)}),IV=Pl(qI).map(e=>({value:e,label:e.toUpperCase()})),LV=lN()({tagName:`vir-color-picker`,cssVars:{"vir-color-picker-swatch-width":{default:`100px`,syntax:Id.Length},"vir-color-picker-swatch-height":{default:`100px`,syntax:Id.Length}},state(){return{selectedFormatName:FV.get.lastFormat()||qI.rgb,rawInput:void 0}},hostClasses:{"vir-color-picker-always-show":({inputs:e})=>!!e.alwaysShowPicker},styles:({cssVars:e,hostClasses:t})=>z`
        :host {
            display: inline-flex;
        }

        ${t[`vir-color-picker-always-show`].selector} {
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }

        button {
            ${EP}
            cursor: pointer;
            display: flex;
        }

        ${NF} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }

        .swatch-wrapper {
            display: flex;
            flex-direction: column;
            gap: 4px;
            align-items: center;

            & ${AV} {
                width: ${e[`vir-color-picker-swatch-width`].value};
                height: ${e[`vir-color-picker-swatch-height`].value};
                box-sizing: border-box;
            }
        }

        .code-button {
            font-family: ${uP[`vira-monospace`].value};
            font-size: 12px;
            color: #666;
            display: flex;
            justify-content: center;
            gap: 2px;
            align-items: center;

            & ${q} {
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
            ${OP.menuShadow}
        }

        .raw-input-wrapper {
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 12px;
            ${G[`vira-form-border-color`].name}: #ddd;
            color: #666;

            & ${wV} {
                flex-grow: 1;
                width: unset;
                color: inherit;
                height: 20px;
                border: none;
            }
        }
    `,events:{colorChange:QM()},render({inputs:e,dispatch:t,events:n,state:r,updateState:i}){let a=gV.isColor(e.color)?e.color:new gV(e.color||`black`),o=YI[r.selectedFormatName],s=r.rawInput??a.toCss()[o.rawSyntax],c=B`
            <div class="raw-input-wrapper">
                <${wV.assign({value:s})}
                    ${xN(wV.events.valueChange,e=>{let r=e.detail;i({rawInput:r}),gV.isValidColorString(r)&&t(new n.colorChange(r))})}
                ></${wV}>
                <button
                    class="code-button"
                    ${xN(`click`,async()=>{await globalThis.navigator.clipboard.writeText(s)})}
                >
                    <${q.assign({icon:QF,fitContainer:!0})}></${q}>
                </button>
            </div>
        `,l=B`
            <button
                class="code-button"
                ${xN(`click`,async()=>{await globalThis.navigator.clipboard.writeText(a.hexString)})}
            >
                <span>${a.hexString}</span>
                <${q.assign({icon:QF,fitContainer:!0})}></${q}>
            </button>
        `,u=B`
            <div class="swatch-wrapper">
                <${AV.assign({backgroundColor:a})}></${AV}>
                ${e.showHexValue?l:M}
            </div>
        `,d=B`
            <div class="picker">
                <${NV.assign({options:IV,value:r.selectedFormatName})}
                    ${xN(NV.events.valueChange,e=>{let t=Pc.isEnumValue(e.detail,qI);t&&(i({selectedFormatName:t}),FV.set.lastFormat(t))})}
                ></${NV}>
                ${c}
                <${DV.assign({color:a,colorFormatName:r.selectedFormatName,showFormatName:!1})}
                    ${xN(DV.events.colorChange,e=>{t(new n.colorChange(e.detail)),i({rawInput:void 0})})}
                ></${DV}>
            </div>
        `;return e.alwaysShowPicker?B`
                ${u} ${d}
            `:B`
                <${NF.assign({keepOpenAfterInteraction:!0})}>
                    <button
                        class="trigger"
                        slot=${NF.slotNames.trigger}
                        ${xN(`mousedown`,()=>{let e=FV.get.lastFormat();e&&i({selectedFormatName:e})})}
                    >
                        ${u}
                    </button>
                    <div class="pop-up" slot=${NF.slotNames.popUp}>
                        ${d}
                    </div>
                </${NF}>
            `}}),RV=[`pagehide`,`pageshow`,`popstate`],zV=30,BV=jP()({tagName:`vira-drawer`,events:{drawerClose:QM()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanupListeners:void 0,isDragging:!1,dragStartY:0,dragCurrentY:0}},cleanup({state:e}){e.cleanupListeners?.()},hostClasses:{"vira-drawer-dragging":({state:e})=>e.isDragging,"vira-drawer-no-content-padding":({inputs:e})=>!!e.noContentPadding},slotNames:[`drawerTitle`],cssVars:{"vira-drawer-backdrop-filter":`blur(3px)`,"vira-drawer-max-height":`80dvh`},styles:({cssVars:e,hostClasses:t})=>z`
        :host {
            display: contents;
        }

        ${t[`vira-drawer-dragging`].selector} {
            ${kP};
        }

        h1 {
            ${TP};
        }

        dialog {
            ${vV(W.colors[$N])}
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
            ${OP.modal}
            transition: transform ${sP[`vira-pretty-animation-duration`].value} ease;

            &[open] {
                display: flex;
                flex-direction: column;
            }

            &::backdrop {
                background: ${G[`vira-form-modal-backdrop-color`].value};
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
                        background-color: ${G[`vira-form-secondary-body-foreground`].value};
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
                        overflow: hidden;

                        & h1 {
                            font-size: 20px;
                        }
                    }

                    & button.close {
                        ${EP};
                        flex-shrink: 0;
                        cursor: pointer;
                        padding: 4px;
                        border-radius: ${G[`vira-form-radius`].value};

                        &:hover {
                            background-color: ${G[`vira-form-selection-hover-color`].value};
                        }

                        & ${q} {
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

        ${t[`vira-drawer-no-content-padding`].selector} {
            & dialog .drawer-content-wrapper .body {
                padding: 0;
            }
        }
    `,render({inputs:e,state:t,updateState:n,events:r,dispatch:i,slotNames:a}){if(t.dialogElement&&e.open!==t.dialogElement.open&&(e.open?t.dialogElement.showModal():t.dialogElement.close()),t.previousOpenValue!==e.open&&(t.cleanupListeners?.(),n({previousOpenValue:e.open}),e.open)){let e=RV.map(e=>ql(e,()=>{i(new r.drawerClose)}));n({cleanupListeners:()=>{e.forEach(e=>e())}})}function o(){e.open&&(t.cleanupListeners?.(),i(new r.drawerClose))}if(t.dialogElement)if(t.isDragging){let e=Math.max(0,t.dragCurrentY-t.dragStartY);t.dialogElement.style.transform=`translateY(${String(e)}px)`,t.dialogElement.style.transition=`none`}else t.dialogElement.style.transform=``,t.dialogElement.style.transition=``;return B`
            <dialog
                ${TN(e=>{n({dialogElement:Dc.instanceOf(e,HTMLDialogElement)})})}
                ${xN(`close`,()=>{o()})}
                ${xN(`mousedown`,e=>{t.contentElement&&!e.composedPath().includes(t.contentElement)&&o()})}
            >
                <div
                    class="drawer-content-wrapper"
                    ${TN(e=>{n({contentElement:Dc.instanceOf(e,HTMLDivElement)})})}
                >
                    <div
                        class="drag-handle-wrapper"
                        ${xN(`dblclick`,()=>{o()})}
                        ${xN(`pointerdown`,e=>{n({isDragging:!0,dragStartY:e.clientY,dragCurrentY:e.clientY});function r(e){n({dragCurrentY:e.clientY})}function i(e){let r=e.clientY-t.dragStartY;n({isDragging:!1,dragStartY:0,dragCurrentY:0}),r>zV&&o(),a.forEach(e=>e())}let a=[ql(`pointermove`,r),ql(`pointerup`,i)]})}
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
                            ${xN(`click`,()=>{t.dialogElement?.close()})}
                        >
                            <${q.assign({icon:PI})}></${q}>
                        </button>
                    </div>
                    ${e.open?B`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:M}
                </div>
            </dialog>
        `}}),VV=jP()({tagName:`vira-error`,cssVars:{"vira-error-font-weight":`bold`},styles:({cssVars:e})=>z`
        :host {
            color: ${G[`vira-form-error-color`].value};
            font-weight: ${e[`vira-error-font-weight`].value};
        }
    `,render(){return B`
            <slot></slot>
        `}}),HV=class extends Error{name=`SpaRouterError`},UV=class extends HV{name=`GlobalUrlEventsConsolidationError`},WV=class extends HV{name=`SanitizationDepthMaxed`};wj({paths:[``],search:Fj(Ij(void 0,Yj({keys:``,values:[``]}))),hash:Fj(Ij(void 0,``))});var GV=wj({basePath:Fj(``,{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:Fj(1,{alsoUndefined:!0}),disableWarnings:Fj(!1,{alsoUndefined:!0}),isPaused:Fj(!1,{alsoUndefined:!0})}),KV=`://`;function qV(...e){let t=e.join(`/`),[n,r=``]=t.includes(KV)?t.split(KV):[``,t],i=!1,a=r.replace(/\/{2,}/g,`/`).split(`/`).reduce((e,t,n,r)=>{if(i)return e;let a=r[n+1],o=t,s=a?.startsWith(`?`),c=!t.includes(`?`)&&s,l=a===`?`;if(s||c){i=!0;let e=!1,s=r.slice(n+2).reduce((t,n)=>(n.includes(`#`)&&(e=!0),e?t.concat(n):[t,n].join(`&`)),``);o=[t,a,l?dl({value:s,prefix:`&`}):s].join(``)}return e.concat(o)},[]);return[n,n?KV:``,a.join(`/`)].join(``)}var JV;(function(e){e.Encode=`encode`,e.Decode=`decode`,e.None=`none`})(JV||={});var YV;(function(e){e.Clear=`clear`,e.Replace=`replace`,e.Append=`append`})(YV||={});var XV=wj({encoding:Fj(Ij(void 0,Aj(JV))),searchParamStrategy:Fj(Ij(void 0,Aj(YV)))});function ZV(e,t){return e.map(e=>{if(e!=null)return QV(String(e),t)}).filter(e=>e!=null)}function QV(e,t){return t?.encoding===JV.Decode?decodeURIComponent(e):t?.encoding===JV.Encode?encodeURIComponent(e):e}var $V=wj(Yj({keys:``,values:[``]}));function eH(e,t,n){let r=n?.searchParamStrategy===YV.Clear?{}:jl(e,(e,t)=>Jc(t)),i=jl(t,(e,t)=>{if(n?.searchParamStrategy===YV.Append){let i=r[e],a=j.isArray(i)?i:[i];if(t){let e=j.isArray(t)?t:[t];return ZV([...a,...e],n)}else return ZV(a,n)}else if(j.isArray(t))return ZV(t,n);else if(t)return ZV([t],n);else return});return Ml({...r,...i},(e,t)=>!!t)}function tH(e,t){return j.isString(e)&&!e.includes(`?`)?{}:(j.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,``).split(`&`).map(e=>{let[t,...n]=Ol(e,`=`);return[t,n.length?n.join(`=`):void 0]}).reduce((e,[n,r])=>{let i=iH({options:t,key:n,value:r}),a=Hc(e,i.key,()=>[]);return r!=null&&a.push(i.value),e},{})}function nH(e){if(e!=null)return j.isArray(e)?[...e]:e===``?[]:[e]}function rH(e,t){let n=Gc(Object.entries(e),([e,n])=>{let r=nH(n);return r?.length?r.map(n=>{let r=iH({options:t,key:e,value:n});return[r.key,r.value].join(`=`)}):[e]},(e,[,t])=>t!=null).flat();return n.length?ul({value:n.join(`&`),prefix:`?`}):``}function iH({options:e,key:t,value:n}){return{key:QV(t,e),value:QV(String(n),e)}}function aH({hash:e,hostname:t,password:n,pathname:r,port:i,protocol:a,search:o,username:s}){return[a?a+`://`:``,s?encodeURIComponent(s)+`:`:``,n?encodeURIComponent(n)+`@`:``,cH({hostname:t,port:i}),sH({hash:e,pathname:r,search:o})].join(``)}function oH({pathname:e}){let t=dl({value:e,prefix:`/`});return t?t.split(`/`):[]}function sH({hash:e,pathname:t,search:n}){return[ul({value:t,prefix:`/`}),n?ul({value:n,prefix:`?`}):``,e?ul({value:e,prefix:`#`}):``].join(``)}function cH({hostname:e,port:t}){return[e,t?`:`+t:``].join(``)}function lH({hostname:e,port:t,protocol:n}){return[n,cH({hostname:e,port:t})].filter(j.isTruthy).join(`://`)}function uH(e,t){let n=j.isString(e)?dl({value:e,prefix:`.`}):e.toString(),r=n.replace(/^[^#]*(?:#|$)/,``),i=r?ul({value:QV(r,t),prefix:`#`}):``,a=n.replace(/#[^#]*$/,``),o=a.replace(/^[^?]*(?:\?|$)/,``),s=o?ul({value:QV(o,t),prefix:`?`}):``,c=a.replace(/\?[^?]*$/,``),l=c.includes(`://`)?c.replace(/:\/\/.*$/,``):``,u=c.replace(/^.*:\/\//,``).replace(/\/\//g,`/`),d=u.replace(/@.*/,``),f=u.replace(/^[^@]*@/,``),[p,...m]=d===f?[]:d.split(`:`).reverse(),h=decodeURIComponent(m.toReversed().join(``).replace(/[/:]/g,``)||``),g=decodeURIComponent(p?.replace(/[/:]/g,``)||``),ee=Dl(f.replace(/\/.*/,``),`:`,{caseSensitive:!0}).toReversed(),te=ee[0]?.endsWith(`]`)?``:ee[1]===`:`&&ee[0]||``,ne=f.replace(RegExp(`:${te}($|/)`),`$1`).replace(/\/.*/,``),re=QV(f.replace(/^[^/]*(\/|$)/,`$1`).replace(/^[^/]*(?:\/|$)/,`/`),t),ie=cH({hostname:ne,port:te}),ae=lH({hostname:ne,port:te,protocol:l}),oe=aH({hash:i,hostname:ne,password:g,pathname:re,port:te,protocol:l,search:s,username:h}),se=tH(s),ce=oH({pathname:re});return{fullPath:sH({hash:i,pathname:re,search:s}),hash:i,host:ie,hostname:ne,href:oe,origin:ae,password:g,pathname:re,paths:ce,port:te,protocol:l,search:s,searchParams:se,username:h}}wj({hash:Fj(Ij(void 0,``)),search:Fj(Ij(void 0,``,Yj({keys:``,values:Ij(null,void 0,``,-1,!1,0n,[null,void 0,``,-1,!1,0n])}))),hostname:Fj(Ij(void 0,``)),pathname:Fj(Ij(void 0,``)),paths:Fj(Ij(void 0,[``])),protocol:Fj(Ij(void 0,``)),username:Fj(Ij(void 0,``)),password:Fj(Ij(void 0,``)),port:Fj(Ij(void 0,``,-1))});function dH(e,t,n){let r=!!n,i=t==null||Uj(t,XV,{allowExtraKeys:!1}),a=i?uH(``):j.instanceOf(e,URL)||j.isString(e)?uH(e):e,o=i?e:t,s=j.isString(o)&&o.startsWith(`.`),c=j.isString(o)||j.instanceOf(o,URL)?Ml(uH(o),(e,t)=>j.isTruthy(t)):o,l=r?n:i?t:void 0,u=jl(a,(e,t)=>{if(!j.hasKey(c,e))return t;let n=c[e];return j.isNumber(n)?String(n):j.isString(n)?e===`hash`&&n?ul({value:n,prefix:`#`}):e===`pathname`?ul({value:n,prefix:`/`}):n:t});j.hasKey(c,`paths`)&&c.paths&&(u.pathname=qV(s?a.pathname:``,...c.paths));let d=j.isString(c.search)?tH(ul({value:c.search,prefix:`?`})):el(c.search||{}),f=eH(u.searchParams,d,{...l,encoding:JV.None}),p=rH(f,l);return{...u,searchParams:f,search:p,paths:oH(u),fullPath:sH(u),host:cH(u),origin:lH(u),href:aH({...u,search:p})}}({...wj({protocol:``,username:``,password:``,host:``,hostname:``,port:``,origin:``,pathname:`/`,paths:[``],search:``,searchParams:$V,hash:``,fullPath:`/`,href:`/`}).default});var fH=0;function pH(e){return!(e.type!==`click`&&e.type!==`mousedown`||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==fH)}var mH=`locationchange`,hH=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;var gH=hH?.pushState;function _H(...e){if(!gH)return;let t=gH.apply(hH,e);return globalThis.dispatchEvent(new Event(mH)),t}var vH=hH?.replaceState;function yH(...e){if(!vH)return;let t=vH.apply(hH,e);return globalThis.dispatchEvent(new Event(mH)),t}function bH(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!hH)){if(hH.pushState===_H)throw new UV(`The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?`);if(hH.replaceState===yH)throw new UV(`The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?`);globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,hH.pushState=_H,hH.replaceState=yH,globalThis.addEventListener(`popstate`,()=>{globalThis.dispatchEvent(new Event(mH))})}}function xH(e,t){let n=uH(e),r=dl({value:dl({value:n.pathname,prefix:ul({value:t||``,prefix:`/`})}),prefix:`/`});return{paths:r?r.split(`/`):[],search:Object.keys(n.searchParams).length?n.searchParams:void 0,hash:n.hash?dl({value:n.hash,prefix:`#`}):void 0}}var SH=class{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(e){Wj(e,GV),this.params={...e};let t=this.readCurrentRoute();this.innerObservable=new dM({defaultValue:t,equalityCheck:()=>!1}),bH(),this.removeGlobalListener=Kl(globalThis,mH,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new WV(`Looping route sanitization detected; aborting window URL change listener.`);let t=xH(globalThis.location.href,this.params.basePath),n=e.sanitizeRoute(t);j.jsonEquals(t,n)?(this.sanitizationDepth=0,this.innerObservable.setValue(n)):(this.sanitizationDepth++,this.setRoute(n,{replace:!0}),e.disableWarnings||console.warn(`Route sanitized.`,{from:t,to:n}))}),this.setRoute(t,{replace:!0})}routeIncludesBasePath(e){return!e.paths||!this.params.basePath?!1:qV(...e.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(xH(globalThis.location.href,this.params.basePath))}sanitizeRoute(e){return this.params.sanitizeRoute(e)}createRouteUrl(e){let t={...xH(globalThis.location.href,this.params.basePath),...e},n=this.sanitizeRoute(t),r=this.routeIncludesBasePath(xH(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return dH(globalThis.location.href,{paths:r.paths,search:r.search,hash:r.hash?ul({value:r.hash,prefix:`#`}):``},{searchParamStrategy:YV.Clear}).href}setRoute(e,t={}){let{fullPath:n}=uH(this.createRouteUrl(e));return this.params.isPaused||!t.force&&j.jsonEquals(uH(globalThis.location.href).fullPath,n)?!1:t.replace?(globalThis.history.replaceState(void 0,``,n),!0):(globalThis.history.pushState(void 0,``,n),!0)}setRouteOnDirectNavigation(e,t){return pH(t)?(t.preventDefault(),this.setRoute(e)):!1}listen(e,t){let n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new HV(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(e,t),()=>this.removeListener(t)}removeListener(e){return this.innerObservable.removeListener(e)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}},CH={value:z`transparent`};function wH(e){let t=_P[e][`behind-bg`],n=_P[e][`on-self`];return{[SP.Standard]:{idle:{textColor:t[fP.NonBodyText].foreground,backgroundColor:t[fP.NonBodyText].background,borderColor:t[fP.NonBodyText].background},hover:{textColor:t[fP.Header].foreground,backgroundColor:t[fP.Header].background,borderColor:t[fP.Header].background},active:{textColor:t[fP.NonBodyText].foreground,backgroundColor:t[fP.NonBodyText].background,borderColor:t[fP.NonBodyText].background}},[SP.Subtle]:{idle:{textColor:n[fP.BodyText].foreground,backgroundColor:n[fP.BodyText].background,borderColor:n[fP.BodyText].background},hover:{textColor:n[fP.NonBodyText].foreground,backgroundColor:n[fP.NonBodyText].background,borderColor:n[fP.NonBodyText].background},active:{textColor:n[fP.BodyText].foreground,backgroundColor:n[fP.BodyText].background,borderColor:n[fP.BodyText].background}}}}function TH(e){let t=_P[e][`on-self`][fP.BodyText];return{idle:{textColor:t.foreground,backgroundColor:CH,borderColor:t.background},hover:{textColor:t.foreground,backgroundColor:_P[e][`behind-bg`][fP.Invisible].background,borderColor:t.background},active:{textColor:t.foreground,backgroundColor:_P[e][`behind-bg`][fP.Decoration].background,borderColor:t.background}}}var EH={[K.Plain]:{[SP.Standard]:{idle:{backgroundColor:W.colors[$N].foreground,textColor:W.colors[$N].background,borderColor:W.colors[$N].foreground},hover:{backgroundColor:W.colors[`vira-grey-behind-bg-body`].background,textColor:W.colors[`vira-grey-behind-bg-body`].foreground,borderColor:W.colors[`vira-grey-behind-bg-body`].background},active:{backgroundColor:W.colors[$N].foreground,textColor:W.colors[$N].background,borderColor:W.colors[$N].foreground}},[SP.Subtle]:{idle:{backgroundColor:CH,textColor:W.colors[$N].foreground,borderColor:CH},hover:{backgroundColor:W.colors[`vira-grey-behind-fg-small-body`].background,textColor:W.colors[`vira-grey-behind-fg-small-body`].foreground,borderColor:W.colors[`vira-grey-behind-fg-small-body`].background},active:{backgroundColor:W.colors[`vira-grey-behind-fg-body`].background,textColor:W.colors[`vira-grey-behind-fg-body`].foreground,borderColor:W.colors[`vira-grey-behind-fg-body`].background}}},[K.Accent]:wH(vP[K.Accent]),[K.Neutral]:wH(vP[K.Neutral]),[K.Danger]:wH(vP[K.Danger]),[K.Warning]:wH(vP[K.Warning]),[K.Positive]:wH(vP[K.Positive])},DH={[K.Plain]:{idle:{textColor:W.colors[$N].foreground,backgroundColor:CH,borderColor:W.colors[`vira-grey-on-self-body`].background},hover:{backgroundColor:W.colors[`vira-grey-behind-fg-small-body`].background,textColor:W.colors[`vira-grey-behind-fg-small-body`].foreground,borderColor:W.colors[`vira-grey-on-self-body`].background},active:{backgroundColor:W.colors[`vira-grey-behind-fg-body`].background,textColor:W.colors[`vira-grey-behind-fg-body`].foreground,borderColor:W.colors[`vira-grey-on-self-body`].background}},[K.Accent]:TH(vP[K.Accent]),[K.Neutral]:TH(vP[K.Neutral]),[K.Danger]:TH(vP[K.Danger]),[K.Warning]:TH(vP[K.Warning]),[K.Positive]:TH(vP[K.Positive])},OH=jP()({tagName:`vira-tag`,cssVars:{"vira-tag-text-color":`transparent`,"vira-tag-background-color":`transparent`,"vira-tag-border-color":`transparent`,"vira-tag-hover-text-color":`transparent`,"vira-tag-hover-background-color":`transparent`,"vira-tag-hover-border-color":`transparent`,"vira-tag-active-text-color":`transparent`,"vira-tag-active-background-color":`transparent`,"vira-tag-active-border-color":`transparent`,"vira-tag-disabled-text-color":W.colors[`vira-grey-behind-bg-decoration`].foreground.value,"vira-tag-disabled-background-color":W.colors[`vira-grey-behind-bg-decoration`].background.value,"vira-tag-disabled-border-color":W.colors[`vira-grey-behind-bg-decoration`].background.value,"vira-tag-border-radius":`1000px`,"vira-tag-gap":`6px`,"vira-tag-horizontal-padding":`12px`,"vira-tag-border-width":`2px`},events:{toggle:QM(),cancel:QM()},hostClasses:{"vira-tag-selectable":({inputs:e})=>j.isBoolean(e.isClickable?.selected),"vira-tag-checked":({inputs:e})=>!!e.isClickable?.selected,"vira-tag-not-checked":({inputs:e})=>e.isClickable?.selected===!1,"vira-tag-cancellable":({inputs:e})=>!!e.isClickable?.cancellable,"vira-tag-not-clickable":({inputs:e})=>!e.isClickable,"vira-tag-disabled":({inputs:e})=>!!e.disabled,"vira-tag-size-large":({inputs:e})=>e.size===bP.Large,"vira-tag-size-medium":({inputs:e})=>!e.size||e.size===bP.Medium,"vira-tag-size-small":({inputs:e})=>e.size===bP.Small,"vira-tag-emphasis-standard":({inputs:e})=>!e.emphasis||e.emphasis===SP.Standard,"vira-tag-emphasis-subtle":({inputs:e})=>e.emphasis===SP.Subtle,"vira-tag-color-accent":({inputs:e})=>!e.color||e.color===K.Accent,"vira-tag-color-plain":({inputs:e})=>e.color===K.Plain,"vira-tag-color-neutral":({inputs:e})=>e.color===K.Neutral,"vira-tag-color-danger":({inputs:e})=>e.color===K.Danger,"vira-tag-color-warning":({inputs:e})=>e.color===K.Warning,"vira-tag-color-positive":({inputs:e})=>e.color===K.Positive},styles:({cssVars:e,hostClasses:t})=>{function n(){return Eu(CP.flatMap(n=>yP.map(r=>{let i=EH[r][n];return z`
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
`))}function r(){return Eu(yP.map(n=>{let r=DH[n],i=t[`vira-tag-color-${n}`].selector,a=t[`vira-tag-not-checked`].selector;return z`
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
`))}function i(){return Eu(xP.map(e=>z`
                    ${t[`vira-tag-size-${e}`].selector} button {
                        height: ${wP[e]}px;
                        font-size: ${G[`vira-form-${e}-text-size`].value};
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
                ${EP}
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

            ${t[`vira-tag-selectable`].selector} {
                & button {
                    padding: 0 calc(${e[`vira-tag-horizontal-padding`].value} + 5px);
                    margin-left: calc(4px + ${e[`vira-tag-gap`].value});
                }
            }
            ${t[`vira-tag-checked`].selector} {
                & button {
                    padding: 0 ${e[`vira-tag-horizontal-padding`].value};
                    margin-left: 0;
                }

                & .selected-check {
                    display: flex;
                    visibility: visible;
                }
            }

            ${t[`vira-tag-cancellable`].selector} .cancel-x {
                display: flex;
            }

            ${t[`vira-tag-size-small`].selector} {
                ${e[`vira-tag-gap`].name}: 4px;
                ${e[`vira-tag-horizontal-padding`].name}: 8px;
            }

            ${t[`vira-tag-size-large`].selector} {
                ${e[`vira-tag-horizontal-padding`].name}: 16px;
            }

            ${t[`vira-tag-disabled`].selector} {
                cursor: not-allowed;
                ${kP}

                & button {
                    color: ${e[`vira-tag-disabled-text-color`].value};
                    background-color: ${e[`vira-tag-disabled-background-color`].value};
                    border-color: ${e[`vira-tag-disabled-border-color`].value};
                }
            }
        `},render({inputs:e,dispatch:t,events:n}){let r=!e.isClickable||!!e.disabled;return B`
            <button
                ?disabled=${r}
                ${xN(`click`,()=>{r||(e.isClickable?.selected==null?e.isClickable?.cancellable&&t(new n.cancel):t(new n.toggle(!e.isClickable.selected)))})}
            >
                <${q.assign({icon:PF})}
                    class="selected-check"
                ></${q}>
                <span class="text">${String(e.text)}</span>
                <${q.assign({icon:BF})}
                    class="cancel-x"
                ></${q}>
            </button>
        `}});function kH(e){return Eu(e.toString({format:`hex`}))}var AH=U[`vira-accent-500`].default;function jH(e){return Math.abs(e.contrast(`white`,`APCA`))>Math.abs(e.contrast(`black`,`APCA`))?`white`:`black`}function MH({background:e,foreground:t}){let n=e??new b_(jH(t)),r=t??new b_(jH(e));return{background:kH(n),foreground:kH(r)}}var NH;(function(e){e.Dark=`dark`,e.Light=`light`})(NH||={});function PH({themeColor:e=AH}={}){let t=new b_(e);return{nav:{hover:MH({background:t.clone().set({"hsl.l":93})}),active:MH({background:t.clone().set({"hsl.l":90})}),selected:MH({background:t.clone().set({"hsl.l":85})})},accent:{icon:kH(t.clone().set({"hsl.l":40}))}}}function FH({searchQuery:e,searchIn:t}){let n=t.length,r=e.length;if(r>n)return!1;if(r===n)return e===t;let i=t.toLowerCase(),a=e.toLowerCase();outer:for(let e=0,t=0;e<r;e++){let r=a.codePointAt(e);for(;t<n;)if(i.codePointAt(t++)===r)continue outer;return!1}return!0}var IH=Zc(32);function LH(e){return e.join(IH)}function RH(e){return e.length?[LH(e),...RH(e.slice(0,-1))]:[]}var zH=[`error`,`errors`];function BH(e){return zH.includes(e)}function VH({flattenedNodes:e,searchQuery:t}){let n={};function r(e){Object.values(e.children).map(e=>(r(e),LH(e.fullUrlBreadcrumbs))).forEach(e=>n[e]=!0)}return e.forEach(e=>{let i=e.entry.errors.length&&BH(t),a=LH(e.fullUrlBreadcrumbs);if(FH({searchIn:[e.entry.title,...e.entry.descriptionParagraphs.map(e=>j.isString(e)?e:JN(e))].join(` `).toLowerCase(),searchQuery:t.toLowerCase()})||i||n[a]){let t=RH(e.fullUrlBreadcrumbs);r(e),t.forEach(e=>n[e]=!0)}else n[a]=!1}),e.filter(e=>{let t=n[LH(e.fullUrlBreadcrumbs)];if(!j.isBoolean(t))throw TypeError(`Failed to find '${e.fullUrlBreadcrumbs.join(` > `)}' in includeInSearchResults.`);return t})}function HH(e){return new SH({basePath:e,sanitizeRoute(e){return{paths:UH(e.paths),hash:void 0,search:void 0}}})}function UH(e){let t=e[0];if(!j.isEnumValue(t,_u))return yu.paths;if(t===_u.Book)return[_u.Book,...e.slice(1)];if(t===_u.Search)return e[1]?[t,e[1]]:[_u.Book,...e.slice(1)];throw Error(`Route path not handled for sanitization: ${e.join(`/`)}`)}var WH=ZM()(`element-book-change-route`),GH=LN(),KH=GH()({tagName:`book-route-link`,cssVars:{"book-route-link-anchor-padding":`0px`},styles:({cssVars:e})=>z`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e[`book-route-link-anchor-padding`].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,render:({inputs:e,dispatch:t})=>B`
            <a
                href=${e.router?.createRouteUrl({...e.route})??`#`}
                ${xN(`click`,n=>{(!e.router||pH(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new WH(e.route)))})}
            >
                <slot></slot>
            </a>
        `});function qH(e,t){return e.entry.entryType===r.Root?!1:e.entry.entryType===r.Page||j.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:j.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}var JH=GH()({tagName:`book-nav`,cssVars:{"book-nav-internal-indent":`0`},styles:({cssVars:e})=>z`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;

            background-color: ${W.colors[`vira-grey-behind-fg-highest-contrast`].background.value};
        }

        .title-row:hover {
            background-color: ${Vd[`element-book-nav-hover-background-color`].value};
            color: ${Vd[`element-book-nav-hover-foreground-color`].value};
        }

        .title-row:active {
            background-color: ${Vd[`element-book-nav-active-background-color`].value};
            color: ${Vd[`element-book-nav-active-foreground-color`].value};
        }

        .title-row {
            display: block;
            ${KH.cssVars[`book-route-link-anchor-padding`].name}: 1px 24px 1px calc(calc(16px * ${e[`book-nav-internal-indent`].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${Vd[`element-book-nav-selected-background-color`].value};
            color: ${Vd[`element-book-nav-selected-foreground-color`].value};
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

        ${q} {
            display: inline-flex;
            color: ${Vd[`element-book-accent-icon-color`].value};
        }
    `,render({inputs:e}){let t=e.flattenedNodes.map(t=>{if(qH(t,e.selectedPath))return B`
                <li style=${z`
                --book-nav-internal-indent: ${t.fullUrlBreadcrumbs.length-1};
            `}>
                    <${KH.assign({router:e.router,route:{paths:[_u.Book,...t.fullUrlBreadcrumbs]}})}
                        class=${DM({"title-row":!0,selected:e.selectedPath?j.jsonEquals(e.selectedPath,t.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${MN(iu(t,r.ElementExample),B`
                                    <${q.assign({icon:RF})}></${q}>
                                `)}
                            ${t.entry.title}
                        </div>
                    </${KH}>
                </li>
            `});return B`
            <${KH.assign({route:yu,router:e.router})}>
                <slot>Book</slot>
            </${KH}>
            <ul>
                ${t}
            </ul>
        `}}),YH=GH()({tagName:`book-page-controls`,events:{controlValueChange:QM()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>z`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${W.colors[`vira-grey-foreground-placeholder`].foreground.value};
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

        ${wV}, ${NV} {
            height: 24px;
            max-width: 128px;
        }

        ${q}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:n}){return Object.entries(e.config).length?Object.entries(e.config).map(([r,i],a)=>{if(i.controlType===Lc.Hidden)return``;let o=XH(e.currentValues[r],i,i=>{let a=j.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[r];if(!a)throw Error(`Failed to find breadcrumbs from given control name: '${r}'`);t(new n.controlValueChange({fullUrlBreadcrumbs:a,newValues:{...Object.fromEntries(Object.keys(e.config).map(t=>[t,e.currentValues[t]])),[r]:i}}))});return B`
                    <div class="control-wrapper">
                        ${MN(a===0,B`
                                <${q.assign({icon:mI})}
                                    class="options-icon"
                                ></${q}>
                            `)}
                        <label class="control-wrapper">
                            <span>
                                ${i.controlType===Lc.Custom?B`
                                          &nbsp;
                                      `:r}
                            </span>
                            ${o}
                        </label>
                    </div>
                `}):``}});function XH(e,t,n){return Ic(t,Lc.Hidden)?``:Ic(t,Lc.Checkbox)?B`
            <${HI.assign({value:!!e})}
                ${xN(HI.events.valueChange,e=>{n(e.detail)})}
            ></${HI}>
        `:Ic(t,Lc.Color)?B`
            <${LV.assign({color:e})}
                style=${z`
                    ${LV.cssVars[`vir-color-picker-swatch-height`].name}: 24px;
                    ${LV.cssVars[`vir-color-picker-swatch-width`].name}: 24px;
                `}
                ${xN(LV.events.colorChange,e=>{n(e.detail)})}
            ></${LV}>
        `:Ic(t,Lc.Text)?B`
            <${wV.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${xN(wV.events.valueChange,e=>{n(e.detail)})}
            ></${wV}>
        `:Ic(t,Lc.Number)?B`
            <${wV.assign({value:e,allowedInputs:/[\d.]/})}
                ${xN(wV.events.valueChange,e=>{n(e.detail)})}
            ></${wV}>
        `:Ic(t,Lc.Dropdown)?B`
            <${NV.assign({value:e,options:t.options.map(e=>({label:e,value:e}))})}
                ${xN(NV.events.valueChange,e=>{n(e.detail)})}
            ></${NV}>
        `:Ic(t,Lc.Custom)?t.content:B`
            <${VV}>
                ${t.controlType} controls are not implemented yet.
            </${VV}>
        `}var ZH=GH()({tagName:`book-breadcrumbs`,styles:z`
        :host {
            display: flex;
            color: ${W.colors[`vira-grey-foreground-header`].foreground.value};
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{let t=e.currentRoute.paths.slice(1);return t.length?t.map((t,n,r)=>{let i=n>=r.length-1,a=r.slice(0,n+1),o=i?``:B`
                      <span class="spacer">&gt;</span>
                  `;return B`
                <${KH.assign({route:{hash:void 0,search:void 0,paths:[_u.Book,...a]},router:e.router})}>
                    ${t}
                </${KH}>
                ${o}
            `}):B`
                &nbsp;
            `}}),QH=GH()({tagName:`book-breadcrumbs-bar`,styles:z`
        :host {
            border-bottom: 1px solid
                ${W.colors[`vira-grey-foreground-placeholder`].foreground.value};
            padding: 4px 8px;
            background-color: ${W.colors[$N].background.value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return B`
            ${MN(!!e.currentSearch,B`
                    &nbsp;
                `,B`
                    <${ZH.assign({currentRoute:e.currentRoute,router:e.router})}></${ZH}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${xN(`input`,async e=>{let n=e.currentTarget;if(!(n instanceof HTMLInputElement))throw TypeError(`Failed to find input element for search.`);let r=n.value;await po({milliseconds:200}),n.value===r&&(n.value?t(new WH({paths:[_u.Search,encodeURIComponent(n.value)]})):t(new WH(yu)))})}
            />
        `}}),$H=GH()({tagName:`book-entry-description`,styles:z`
        :host {
            color: ${W.colors[`vira-grey-foreground-placeholder`].foreground.value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${W.colors[$N].foreground.value};
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
    `,render({inputs:e}){return e.descriptionParagraphs.map(e=>B`
                <p>${e}</p>
            `)}}),eU=GH()({tagName:`book-page-wrapper`,styles:z`
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

        ${KH} {
            display: inline-block;
        }
    `,render({inputs:e}){let t=e.isTopLevel?B`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:B`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,n=[_u.Book,...e.pageNode.fullUrlBreadcrumbs],r=e.pageNode.entry.errors.length?Qc(e.pageNode.entry.errors):void 0;return r&&console.error(r),B`
            <div class="page-header block-entry">
                <div class="title-group">
                    ${e.blockNavigation?t:B`
                  <${KH.assign({route:{paths:n,hash:void 0,search:void 0},router:e.router})}>
                      ${t}
                  </${KH}>
              `}
                    ${r?B`
                              <${VV}>${r.message}</${VV}>
                          `:B`
                              <${$H.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${$H}>
                              <${YH.assign({config:e.pageNode.entry.controls,currentValues:fu(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${YH}>
                          `}
                </div>
            </div>
        `}}),tU=GH()({tagName:`book-element-example-title`,styles:z`
        :host {
            display: flex;
            color: ${W.colors[`vira-grey-foreground-placeholder`].foreground.value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){if(e.blockNavigation)return e.elementExampleNode.entry.title;let t=[_u.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return B`
            <${KH.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${KH}>
        `}}),nU=Symbol(`unset-internal-state`),rU=GH()({tagName:`book-element-example-viewer`,state(){return{isUnset:nU}},render({state:e,inputs:t,updateState:n}){try{if(t.elementExampleNode.entry.errors.length)throw Qc(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render==`string`)throw Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===nU&&n({isUnset:void 0,...t.elementExampleNode.entry.state?.()});let r=t.elementExampleNode.entry.render({state:e,updateState:n,controls:t.currentPageControls});if(r instanceof Promise)throw TypeError(`render output cannot be a promise`);return B`
                ${MN(!!t.elementExampleNode.entry.styles,B`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${r}
            `}catch(e){return console.error(`ERROR HERE`,C(e)),console.error(e),B`
                <${VV}>
                    ${t.elementExampleNode.entry.title} failed: ${C(e)}
                </${VV}>
            `}},options:{allowPolymorphicState:!0}}),iU=GH()({tagName:`book-element-example-wrapper`,styles:z`
        :host {
            display: inline-block;
            max-width: 100%;
        }

        .examples-wrapper {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
            align-items: flex-start;
        }

        ${tU} {
            color: ${W.colors[`vira-grey-foreground-placeholder`].foreground.value};
        }

        :host(:hover) ${tU} {
            color: ${Vd[`element-book-accent-icon-color`].value};
        }
    `,render({inputs:e}){return B`
            <div class="individual-example-wrapper">
                <${tU.assign({blockNavigation:e.blockNavigation,elementExampleNode:e.elementExampleNode,router:e.router})}></${tU}>
                <${rU.assign(e)}></${rU}>
            </div>
        `}}),aU={milliseconds:10},oU,sU=new Map,cU=new Map;function lU(){return oU||=new IntersectionObserver(e=>{for(let t of e){let e=t.target,n=sU.get(e);if(n)if(t.isIntersecting){if(!cU.has(e)){let t=globalThis.setTimeout(()=>{cU.delete(e),n(),oU?.unobserve(e),sU.delete(e)},so(aU,{milliseconds:!0}).milliseconds);cU.set(e,t)}}else{let t=cU.get(e);t&&(clearTimeout(t),cU.delete(e))}}},{rootMargin:`100px`}),oU}function uU(e){let t=cU.get(e);t&&(clearTimeout(t),cU.delete(e)),sU.delete(e),oU?.unobserve(e)}var dU=GH()({tagName:`book-lazy-entry`,state(){return{hasRendered:!1,placeholderElement:void 0}},styles:z`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&uU(e.placeholderElement)},render({inputs:e,state:t,updateState:n}){return t.hasRendered?e.content:B`
            <div
                class="placeholder"
                ${TN(e=>{t.placeholderElement&&uU(t.placeholderElement),n({placeholderElement:e}),sU.set(e,()=>{n({hasRendered:!0})}),lU().observe(e)})}
            >
                &nbsp;
            </div>
        `}});function fU(e,t,n,i){let a=uu(n,i),o=[];if(a){let n=fU(e,t,a,i);n&&o.push(n)}if(iu(n,r.Page)&&!e.includes(n)){let e=fu(t,n.fullUrlBreadcrumbs);o.push({config:n.entry.controls,current:e,breadcrumbs:jl(e,()=>n.fullUrlBreadcrumbs)})}return o.reduce((e,t)=>({config:{...e.config,...t.config},current:{...e.current,...t.current},breadcrumbs:{...e.breadcrumbs,...t.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function pU({blockNavigation:e,currentNodes:t,isTopLevel:n,router:i,isSearching:a,controls:o,originalTree:s}){if(!t.length&&a)return[B`
                No results
            `];let c=j.isLengthAtLeast(t,1)?fU(t,o,t[0],s):void 0;return[c&&Object.values(c.config).length&&j.isLengthAtLeast(t,1)?B`
                  <${YH.assign({config:c.config,currentValues:c.current,fullUrlBreadcrumbs:c.breadcrumbs})}></${YH}>
              `:M,mN(t,e=>e.fullUrlBreadcrumbs.join(`>`),t=>{if(iu(t,r.Page))return B`
                    <${eU.assign({blockNavigation:e,isTopLevel:n,pageNode:t,controls:o,router:i})}
                        class="block-entry"
                    ></${eU}>
                `;if(iu(t,r.ElementExample)){let n=fu(o,t.fullUrlBreadcrumbs.slice(0,-1)),r=B`
                    <${iU.assign({blockNavigation:e,elementExampleNode:t,currentPageControls:n,router:i})}></${iU}>
                `;return B`
                    <${dU.assign({content:r})}
                        class="inline-entry ${DM({"block-entry":t.entry.isVertical})}"
                    ></${dU}>
                `}else if(iu(t,r.Root))return M;else{let e=B`
                    <${VV}>
                        Unknown entry type for rendering: '${t.entry.entryType}'
                    </${VV}>
                `;return B`
                    <${dU.assign({content:e})}
                        class="block-entry"
                    ></${dU}>
                `}})]}var mU=GH()({tagName:`book-entry-display`,state(){return{lastElement:void 0}},styles:z`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .all-book-entries-wrapper {
            background-color: ${W.colors[$N].background.value};
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
            ${vV(W.colors[$N])}
            animation: fade-in linear
                ${sP[`vira-interaction-animation-duration`].value} forwards;
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
    `,events:{loadingRender:QM()},render:({inputs:e,dispatch:t,events:n,state:r,updateState:i})=>{let a=vu(e.currentRoute.paths),o=pU({blockNavigation:e.blockNavigation,currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!a,controls:e.controls,originalTree:e.originalTree});return B`
            <${QH.assign({currentSearch:a,currentRoute:e.currentRoute,router:e.router})}></${QH}>

            ${MN(e.showLoading,B`
                    <div
                        ${TN(()=>{t(new n.loadingRender(!0))})}
                        class="loading"
                    >
                        <${q.assign({icon:uI})}></${q}>
                    </div>
                    ${MN(!!r.lastElement,B`
                            ${r.lastElement}
                            <slot></slot>
                        `)}
                `,B`
                    <div
                        ${TN(e=>{i({lastElement:e})})}
                        class="all-book-entries-wrapper"
                    >
                        ${o}
                    </div>
                    <slot></slot>
                `)}
        `}});function hU(e,t,n){let r=gU(e,t);return r.length?r:(n(yu),gU(e,yu.paths))}function gU(e,t){return e.filter(e=>Xl({searchFor:t.slice(1),searchIn:e.fullUrlBreadcrumbs}))}var _U=lN()({tagName:`element-book-app`,state(){return{currentRoute:yu,router:void 0,loading:!0,colors:{config:void 0,theme:PH(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0,isDarkMode:globalThis.matchMedia(`(prefers-color-scheme: dark)`).matches,darkModeCleanup:void 0}},events:{pathUpdate:QM()},slotNames:[`footer`,`navHeader`],styles:z`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            ${vV(W.colors[$N])}
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

        ${JH} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,cleanup({state:e,updateState:t}){e.router&&e.router.destroy(),e.darkModeCleanup&&e.darkModeCleanup(),t({router:void 0,darkModeCleanup:void 0})},render:({state:e,inputs:t,host:n,updateState:r,dispatch:i,events:a,slotNames:o})=>{t._debug&&console.info(`rendering element-book app`);function s(t){return{...e.currentRoute,...t}}function c(t){let n=s(t);return!j.jsonEquals(e.currentRoute,n)}function l(n){t.preventWindowTitleChange||(e.originalWindowTitle||r({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,n].filter(j.isTruthy).join(` - `))}function u(n){if(!c(n))return;let o=s(n);e.router?e.router.setRoute(o):r({currentRoute:{...e.currentRoute,...o}}),t.elementBookRoutePaths&&!j.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new a.pathUpdate(o.paths))}try{if(t.elementBookRoutePaths&&!j.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&u({paths:Al(t.elementBookRoutePaths)}),t.internalRouterConfig?.useInternalRouter&&!e.router){let e=HH(t.internalRouterConfig.basePath);r({router:e}),e.listen(!0,e=>{r({currentRoute:e})})}else !t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();let i={themeColor:t.themeColor};if(!j.jsonEquals(i,e.colors.config)){let e=PH(i);r({colors:{config:i,theme:e}}),Ud(n,e)}if(!e.darkModeCleanup){let e=globalThis.matchMedia(`(prefers-color-scheme: dark)`),t=e=>{r({isDarkMode:e.matches})};e.addEventListener(`change`,t),r({isDarkMode:e.matches,darkModeCleanup:()=>{e.removeEventListener(`change`,t)}})}Fd(t.darkMode??e.isDarkMode?iP.overrides:{},`element-book-dark-mode`);let a=t._debug??!1,s=su({entries:t.pages,debug:a});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info(`regenerating global controls`),r({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:hu(s.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));let d=vu(e.currentRoute.paths),f=(d?VH({flattenedNodes:s.flattenedNodes,searchQuery:d}):void 0)??hU(s.flattenedNodes,e.currentRoute.paths,u);l(f[0]?.entry.title);let p=e.treeBasedControls?.controls;return p?(t._debug&&console.info({currentControls:p}),B`
                <div
                    class="root"
                    ${xN(WH,e=>{let t=e.detail;if(c(t)&&(r({loading:!0}),u(t),!(n.shadowRoot.querySelector(JH.tagName)instanceof JH)))throw TypeError(`Failed to find child '${JH.tagName}'`)})}
                    ${xN(YH.events.controlValueChange,t=>{if(!e.treeBasedControls)return;let n=mu(p,t.detail.fullUrlBreadcrumbs,t.detail.newValues);r({treeBasedControls:{...e.treeBasedControls,controls:n}})})}
                >
                    ${t.blockNavigation?M:B`
                              <${JH.assign({flattenedNodes:s.flattenedNodes,router:e.router,selectedPath:d?void 0:e.currentRoute.paths.slice(1)})}>
                                  <slot name=${o.navHeader}></slot>
                              </${JH}>
                          `}
                    <${mU.assign({blockNavigation:!!t.blockNavigation,controls:p,currentNodes:f,currentRoute:e.currentRoute,debug:a,originalTree:s.tree,router:e.router,showLoading:e.loading})}
                        ${xN(mU.events.loadingRender,async e=>{await MP();let t=n.shadowRoot.querySelector(mU.tagName);t?t.scroll({top:0,behavior:`instant`}):console.error(`Failed to find '${mU.tagName}' for scrolling.`),await MP(),r({loading:!e.detail})})}
                    >
                        <slot name=${o.footer}></slot>
                    </${mU}>
                </div>
            `):B`
                    <${VV}>Failed to generate page controls.</${VV}>
                `}catch(e){return console.error(e),B`
                <${VV}>${C(e)}</${VV}>
            `}}}),vU=gu({title:`Cards`,parent:void 0,descriptionParagraphs:[`Multiple full cards of structured render data.`]});function yU({newStyles:e,oldStyles:t,shadowRoot:n,maintainFirstStylesheet:r}){if(e!==t){let t=new CSSStyleSheet;return t.replaceSync(e),n.adoptedStyleSheets=[r?Dc.isDefined(n.adoptedStyleSheets[0]):void 0,t].filter(j.isTruthy),!0}return!1}var{entries:bU,setPrototypeOf:xU,isFrozen:SU,getPrototypeOf:CU,getOwnPropertyDescriptor:wU}=Object,{freeze:TU,seal:EU,create:DU}=Object,{apply:OU,construct:kU}=typeof Reflect<`u`&&Reflect;TU||=function(e){return e},EU||=function(e){return e},OU||=function(e,t){var n=[...arguments].slice(2);return e.apply(t,n)},kU||=function(e){return new e(...[...arguments].slice(1))};var AU=WU(Array.prototype.forEach),jU=WU(Array.prototype.lastIndexOf),MU=WU(Array.prototype.pop),NU=WU(Array.prototype.push),PU=WU(Array.prototype.splice),FU=WU(String.prototype.toLowerCase),IU=WU(String.prototype.toString),LU=WU(String.prototype.match),RU=WU(String.prototype.replace),zU=WU(String.prototype.indexOf),BU=WU(String.prototype.trim),VU=WU(Object.prototype.hasOwnProperty),HU=WU(RegExp.prototype.test),UU=GU(TypeError);function WU(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);var n=[...arguments].slice(1);return OU(e,t,n)}}function GU(e){return function(){return kU(e,[...arguments])}}function KU(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:FU;xU&&xU(e,null);let r=t.length;for(;r--;){let i=t[r];if(typeof i==`string`){let e=n(i);e!==i&&(SU(t)||(t[r]=e),i=e)}e[i]=!0}return e}function qU(e){for(let t=0;t<e.length;t++)VU(e,t)||(e[t]=null);return e}function JU(e){let t=DU(null);for(let[n,r]of bU(e))VU(e,n)&&(Array.isArray(r)?t[n]=qU(r):r&&typeof r==`object`&&r.constructor===Object?t[n]=JU(r):t[n]=r);return t}function YU(e,t){for(;e!==null;){let n=wU(e,t);if(n){if(n.get)return WU(n.get);if(typeof n.value==`function`)return WU(n.value)}e=CU(e)}function n(){return null}return n}var XU=TU(`a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(`.`)),ZU=TU(`svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(`.`)),QU=TU([`feBlend`,`feColorMatrix`,`feComponentTransfer`,`feComposite`,`feConvolveMatrix`,`feDiffuseLighting`,`feDisplacementMap`,`feDistantLight`,`feDropShadow`,`feFlood`,`feFuncA`,`feFuncB`,`feFuncG`,`feFuncR`,`feGaussianBlur`,`feImage`,`feMerge`,`feMergeNode`,`feMorphology`,`feOffset`,`fePointLight`,`feSpecularLighting`,`feSpotLight`,`feTile`,`feTurbulence`]),$U=TU([`animate`,`color-profile`,`cursor`,`discard`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`foreignobject`,`hatch`,`hatchpath`,`mesh`,`meshgradient`,`meshpatch`,`meshrow`,`missing-glyph`,`script`,`set`,`solidcolor`,`unknown`,`use`]),eW=TU(`math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(`.`)),tW=TU([`maction`,`maligngroup`,`malignmark`,`mlongdiv`,`mscarries`,`mscarry`,`msgroup`,`mstack`,`msline`,`msrow`,`semantics`,`annotation`,`annotation-xml`,`mprescripts`,`none`]),nW=TU([`#text`]),rW=TU(`accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns.slot`.split(`.`)),iW=TU(`accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(`.`)),aW=TU(`accent.accentunder.align.bevelled.close.columnsalign.columnlines.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lspace.lquote.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(`.`)),oW=TU([`xlink:href`,`xml:id`,`xlink:title`,`xml:space`,`xmlns:xlink`]),sW=EU(/\{\{[\w\W]*|[\w\W]*\}\}/gm),cW=EU(/<%[\w\W]*|[\w\W]*%>/gm),lW=EU(/\$\{[\w\W]*/gm),uW=EU(/^data-[\-\w.\u00B7-\uFFFF]+$/),dW=EU(/^aria-[\-\w]+$/),fW=EU(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),pW=EU(/^(?:\w+script|data):/i),mW=EU(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),hW=EU(/^html$/i),gW=EU(/^[a-z][.\w]*(-[.\w]+)+$/i),_W=Object.freeze({__proto__:null,ARIA_ATTR:dW,ATTR_WHITESPACE:mW,CUSTOM_ELEMENT:gW,DATA_ATTR:uW,DOCTYPE_NAME:hW,ERB_EXPR:cW,IS_ALLOWED_URI:fW,IS_SCRIPT_OR_DATA:pW,MUSTACHE_EXPR:sW,TMPLIT_EXPR:lW}),vW={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},yW=function(){return typeof window>`u`?null:window},bW=function(e,t){if(typeof e!=`object`||typeof e.createPolicy!=`function`)return null;let n=null,r=`data-tt-policy-suffix`;t&&t.hasAttribute(r)&&(n=t.getAttribute(r));let i=`dompurify`+(n?`#`+n:``);try{return e.createPolicy(i,{createHTML(e){return e},createScriptURL(e){return e}})}catch{return console.warn(`TrustedTypes policy `+i+` could not be created.`),null}},xW=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function SW(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:yW(),t=e=>SW(e);if(t.version=`3.3.3`,t.removed=[],!e||!e.document||e.document.nodeType!==vW.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e,r=n,i=r.currentScript,{DocumentFragment:a,HTMLTemplateElement:o,Node:s,Element:c,NodeFilter:l,NamedNodeMap:u=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:d,DOMParser:f,trustedTypes:p}=e,m=c.prototype,h=YU(m,`cloneNode`),g=YU(m,`remove`),ee=YU(m,`nextSibling`),te=YU(m,`childNodes`),ne=YU(m,`parentNode`);if(typeof o==`function`){let e=n.createElement(`template`);e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let re,ie=``,{implementation:ae,createNodeIterator:oe,createDocumentFragment:se,getElementsByTagName:ce}=n,{importNode:le}=r,ue=xW();t.isSupported=typeof bU==`function`&&typeof ne==`function`&&ae&&ae.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:de,ERB_EXPR:fe,TMPLIT_EXPR:pe,DATA_ATTR:me,ARIA_ATTR:he,IS_SCRIPT_OR_DATA:ge,ATTR_WHITESPACE:_e,CUSTOM_ELEMENT:_}=_W,{IS_ALLOWED_URI:v}=_W,y=null,ve=KU({},[...XU,...ZU,...QU,...eW,...nW]),ye=null,b=KU({},[...rW,...iW,...aW,...oW]),be=Object.seal(DU(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),x=null,xe=null,Se=Object.seal(DU(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),Ce=!0,we=!0,S=!1,Te=!0,Ee=!1,De=!0,Oe=!1,ke=!1,C=!1,Ae=!1,je=!1,Me=!1,w=!0,T=!1,E=!0,Ne=!1,Pe={},Fe=null,Ie=KU({},[`annotation-xml`,`audio`,`colgroup`,`desc`,`foreignobject`,`head`,`iframe`,`math`,`mi`,`mn`,`mo`,`ms`,`mtext`,`noembed`,`noframes`,`noscript`,`plaintext`,`script`,`style`,`svg`,`template`,`thead`,`title`,`video`,`xmp`]),Le=null,Re=KU({},[`audio`,`video`,`img`,`source`,`image`,`track`]),ze=null,Be=KU({},[`alt`,`class`,`for`,`id`,`label`,`name`,`pattern`,`placeholder`,`role`,`summary`,`title`,`value`,`style`,`xmlns`]),Ve=`http://www.w3.org/1998/Math/MathML`,He=`http://www.w3.org/2000/svg`,D=`http://www.w3.org/1999/xhtml`,Ue=D,We=!1,Ge=null,Ke=KU({},[Ve,He,D],IU),qe=KU({},[`mi`,`mo`,`mn`,`ms`,`mtext`]),Je=KU({},[`annotation-xml`]),Ye=KU({},[`title`,`style`,`font`,`a`,`script`]),Xe=null,Ze=[`application/xhtml+xml`,`text/html`],Qe=null,$e=null,et=n.createElement(`form`),tt=function(e){return e instanceof RegExp||e instanceof Function},nt=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!($e&&$e===e)){if((!e||typeof e!=`object`)&&(e={}),e=JU(e),Xe=Ze.indexOf(e.PARSER_MEDIA_TYPE)===-1?`text/html`:e.PARSER_MEDIA_TYPE,Qe=Xe===`application/xhtml+xml`?IU:FU,y=VU(e,`ALLOWED_TAGS`)?KU({},e.ALLOWED_TAGS,Qe):ve,ye=VU(e,`ALLOWED_ATTR`)?KU({},e.ALLOWED_ATTR,Qe):b,Ge=VU(e,`ALLOWED_NAMESPACES`)?KU({},e.ALLOWED_NAMESPACES,IU):Ke,ze=VU(e,`ADD_URI_SAFE_ATTR`)?KU(JU(Be),e.ADD_URI_SAFE_ATTR,Qe):Be,Le=VU(e,`ADD_DATA_URI_TAGS`)?KU(JU(Re),e.ADD_DATA_URI_TAGS,Qe):Re,Fe=VU(e,`FORBID_CONTENTS`)?KU({},e.FORBID_CONTENTS,Qe):Ie,x=VU(e,`FORBID_TAGS`)?KU({},e.FORBID_TAGS,Qe):JU({}),xe=VU(e,`FORBID_ATTR`)?KU({},e.FORBID_ATTR,Qe):JU({}),Pe=VU(e,`USE_PROFILES`)?e.USE_PROFILES:!1,Ce=e.ALLOW_ARIA_ATTR!==!1,we=e.ALLOW_DATA_ATTR!==!1,S=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Te=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ee=e.SAFE_FOR_TEMPLATES||!1,De=e.SAFE_FOR_XML!==!1,Oe=e.WHOLE_DOCUMENT||!1,Ae=e.RETURN_DOM||!1,je=e.RETURN_DOM_FRAGMENT||!1,Me=e.RETURN_TRUSTED_TYPE||!1,C=e.FORCE_BODY||!1,w=e.SANITIZE_DOM!==!1,T=e.SANITIZE_NAMED_PROPS||!1,E=e.KEEP_CONTENT!==!1,Ne=e.IN_PLACE||!1,v=e.ALLOWED_URI_REGEXP||fW,Ue=e.NAMESPACE||D,qe=e.MATHML_TEXT_INTEGRATION_POINTS||qe,Je=e.HTML_INTEGRATION_POINTS||Je,be=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&tt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(be.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&tt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(be.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements==`boolean`&&(be.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ee&&(we=!1),je&&(Ae=!0),Pe&&(y=KU({},nW),ye=DU(null),Pe.html===!0&&(KU(y,XU),KU(ye,rW)),Pe.svg===!0&&(KU(y,ZU),KU(ye,iW),KU(ye,oW)),Pe.svgFilters===!0&&(KU(y,QU),KU(ye,iW),KU(ye,oW)),Pe.mathMl===!0&&(KU(y,eW),KU(ye,aW),KU(ye,oW))),VU(e,`ADD_TAGS`)||(Se.tagCheck=null),VU(e,`ADD_ATTR`)||(Se.attributeCheck=null),e.ADD_TAGS&&(typeof e.ADD_TAGS==`function`?Se.tagCheck=e.ADD_TAGS:(y===ve&&(y=JU(y)),KU(y,e.ADD_TAGS,Qe))),e.ADD_ATTR&&(typeof e.ADD_ATTR==`function`?Se.attributeCheck=e.ADD_ATTR:(ye===b&&(ye=JU(ye)),KU(ye,e.ADD_ATTR,Qe))),e.ADD_URI_SAFE_ATTR&&KU(ze,e.ADD_URI_SAFE_ATTR,Qe),e.FORBID_CONTENTS&&(Fe===Ie&&(Fe=JU(Fe)),KU(Fe,e.FORBID_CONTENTS,Qe)),e.ADD_FORBID_CONTENTS&&(Fe===Ie&&(Fe=JU(Fe)),KU(Fe,e.ADD_FORBID_CONTENTS,Qe)),E&&(y[`#text`]=!0),Oe&&KU(y,[`html`,`head`,`body`]),y.table&&(KU(y,[`tbody`]),delete x.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!=`function`)throw UU(`TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`);if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!=`function`)throw UU(`TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`);re=e.TRUSTED_TYPES_POLICY,ie=re.createHTML(``)}else re===void 0&&(re=bW(p,i)),re!==null&&typeof ie==`string`&&(ie=re.createHTML(``));TU&&TU(e),$e=e}},rt=KU({},[...ZU,...QU,...$U]),it=KU({},[...eW,...tW]),at=function(e){let t=ne(e);(!t||!t.tagName)&&(t={namespaceURI:Ue,tagName:`template`});let n=FU(e.tagName),r=FU(t.tagName);return Ge[e.namespaceURI]?e.namespaceURI===He?t.namespaceURI===D?n===`svg`:t.namespaceURI===Ve?n===`svg`&&(r===`annotation-xml`||qe[r]):!!rt[n]:e.namespaceURI===Ve?t.namespaceURI===D?n===`math`:t.namespaceURI===He?n===`math`&&Je[r]:!!it[n]:e.namespaceURI===D?t.namespaceURI===He&&!Je[r]||t.namespaceURI===Ve&&!qe[r]?!1:!it[n]&&(Ye[n]||!rt[n]):!!(Xe===`application/xhtml+xml`&&Ge[e.namespaceURI]):!1},ot=function(e){NU(t.removed,{element:e});try{ne(e).removeChild(e)}catch{g(e)}},st=function(e,n){try{NU(t.removed,{attribute:n.getAttributeNode(e),from:n})}catch{NU(t.removed,{attribute:null,from:n})}if(n.removeAttribute(e),e===`is`)if(Ae||je)try{ot(n)}catch{}else try{n.setAttribute(e,``)}catch{}},ct=function(e){let t=null,r=null;if(C)e=`<remove></remove>`+e;else{let t=LU(e,/^[\r\n\t ]+/);r=t&&t[0]}Xe===`application/xhtml+xml`&&Ue===D&&(e=`<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>`+e+`</body></html>`);let i=re?re.createHTML(e):e;if(Ue===D)try{t=new f().parseFromString(i,Xe)}catch{}if(!t||!t.documentElement){t=ae.createDocument(Ue,`template`,null);try{t.documentElement.innerHTML=We?ie:i}catch{}}let a=t.body||t.documentElement;return e&&r&&a.insertBefore(n.createTextNode(r),a.childNodes[0]||null),Ue===D?ce.call(t,Oe?`html`:`body`)[0]:Oe?t.documentElement:a},lt=function(e){return oe.call(e.ownerDocument||e,e,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},ut=function(e){return e instanceof d&&(typeof e.nodeName!=`string`||typeof e.textContent!=`string`||typeof e.removeChild!=`function`||!(e.attributes instanceof u)||typeof e.removeAttribute!=`function`||typeof e.setAttribute!=`function`||typeof e.namespaceURI!=`string`||typeof e.insertBefore!=`function`||typeof e.hasChildNodes!=`function`)},dt=function(e){return typeof s==`function`&&e instanceof s};function ft(e,n,r){AU(e,e=>{e.call(t,n,r,$e)})}let pt=function(e){let n=null;if(ft(ue.beforeSanitizeElements,e,null),ut(e))return ot(e),!0;let r=Qe(e.nodeName);if(ft(ue.uponSanitizeElement,e,{tagName:r,allowedTags:y}),De&&e.hasChildNodes()&&!dt(e.firstElementChild)&&HU(/<[/\w!]/g,e.innerHTML)&&HU(/<[/\w!]/g,e.textContent)||e.nodeType===vW.progressingInstruction||De&&e.nodeType===vW.comment&&HU(/<[/\w]/g,e.data))return ot(e),!0;if(!(Se.tagCheck instanceof Function&&Se.tagCheck(r))&&(!y[r]||x[r])){if(!x[r]&&ht(r)&&(be.tagNameCheck instanceof RegExp&&HU(be.tagNameCheck,r)||be.tagNameCheck instanceof Function&&be.tagNameCheck(r)))return!1;if(E&&!Fe[r]){let t=ne(e)||e.parentNode,n=te(e)||e.childNodes;if(n&&t){let r=n.length;for(let i=r-1;i>=0;--i){let r=h(n[i],!0);r.__removalCount=(e.__removalCount||0)+1,t.insertBefore(r,ee(e))}}}return ot(e),!0}return e instanceof c&&!at(e)||(r===`noscript`||r===`noembed`||r===`noframes`)&&HU(/<\/no(script|embed|frames)/i,e.innerHTML)?(ot(e),!0):(Ee&&e.nodeType===vW.text&&(n=e.textContent,AU([de,fe,pe],e=>{n=RU(n,e,` `)}),e.textContent!==n&&(NU(t.removed,{element:e.cloneNode()}),e.textContent=n)),ft(ue.afterSanitizeElements,e,null),!1)},mt=function(e,t,r){if(xe[t]||w&&(t===`id`||t===`name`)&&(r in n||r in et))return!1;if(!(we&&!xe[t]&&HU(me,t))&&!(Ce&&HU(he,t))&&!(Se.attributeCheck instanceof Function&&Se.attributeCheck(t,e))){if(!ye[t]||xe[t]){if(!(ht(e)&&(be.tagNameCheck instanceof RegExp&&HU(be.tagNameCheck,e)||be.tagNameCheck instanceof Function&&be.tagNameCheck(e))&&(be.attributeNameCheck instanceof RegExp&&HU(be.attributeNameCheck,t)||be.attributeNameCheck instanceof Function&&be.attributeNameCheck(t,e))||t===`is`&&be.allowCustomizedBuiltInElements&&(be.tagNameCheck instanceof RegExp&&HU(be.tagNameCheck,r)||be.tagNameCheck instanceof Function&&be.tagNameCheck(r))))return!1}else if(!ze[t]&&!HU(v,RU(r,_e,``))&&!((t===`src`||t===`xlink:href`||t===`href`)&&e!==`script`&&zU(r,`data:`)===0&&Le[e])&&!(S&&!HU(ge,RU(r,_e,``)))&&r)return!1}return!0},ht=function(e){return e!==`annotation-xml`&&LU(e,_)},gt=function(e){ft(ue.beforeSanitizeAttributes,e,null);let{attributes:n}=e;if(!n||ut(e))return;let r={attrName:``,attrValue:``,keepAttr:!0,allowedAttributes:ye,forceKeepAttr:void 0},i=n.length;for(;i--;){let{name:a,namespaceURI:o,value:s}=n[i],c=Qe(a),l=s,u=a===`value`?l:BU(l);if(r.attrName=c,r.attrValue=u,r.keepAttr=!0,r.forceKeepAttr=void 0,ft(ue.uponSanitizeAttribute,e,r),u=r.attrValue,T&&(c===`id`||c===`name`)&&(st(a,e),u=`user-content-`+u),De&&HU(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,u)){st(a,e);continue}if(c===`attributename`&&LU(u,`href`)){st(a,e);continue}if(r.forceKeepAttr)continue;if(!r.keepAttr){st(a,e);continue}if(!Te&&HU(/\/>/i,u)){st(a,e);continue}Ee&&AU([de,fe,pe],e=>{u=RU(u,e,` `)});let d=Qe(e.nodeName);if(!mt(d,c,u)){st(a,e);continue}if(re&&typeof p==`object`&&typeof p.getAttributeType==`function`&&!o)switch(p.getAttributeType(d,c)){case`TrustedHTML`:u=re.createHTML(u);break;case`TrustedScriptURL`:u=re.createScriptURL(u);break}if(u!==l)try{o?e.setAttributeNS(o,a,u):e.setAttribute(a,u),ut(e)?ot(e):MU(t.removed)}catch{st(a,e)}}ft(ue.afterSanitizeAttributes,e,null)},_t=function e(t){let n=null,r=lt(t);for(ft(ue.beforeSanitizeShadowDOM,t,null);n=r.nextNode();)ft(ue.uponSanitizeShadowNode,n,null),pt(n),gt(n),n.content instanceof a&&e(n.content);ft(ue.afterSanitizeShadowDOM,t,null)};return t.sanitize=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=null,o=null,c=null,l=null;if(We=!e,We&&(e=`<!-->`),typeof e!=`string`&&!dt(e))if(typeof e.toString==`function`){if(e=e.toString(),typeof e!=`string`)throw UU(`dirty is not a string, aborting`)}else throw UU(`toString is not a function`);if(!t.isSupported)return e;if(ke||nt(n),t.removed=[],typeof e==`string`&&(Ne=!1),Ne){if(e.nodeName){let t=Qe(e.nodeName);if(!y[t]||x[t])throw UU(`root node is forbidden and cannot be sanitized in-place`)}}else if(e instanceof s)i=ct(`<!---->`),o=i.ownerDocument.importNode(e,!0),o.nodeType===vW.element&&o.nodeName===`BODY`||o.nodeName===`HTML`?i=o:i.appendChild(o);else{if(!Ae&&!Ee&&!Oe&&e.indexOf(`<`)===-1)return re&&Me?re.createHTML(e):e;if(i=ct(e),!i)return Ae?null:Me?ie:``}i&&C&&ot(i.firstChild);let u=lt(Ne?e:i);for(;c=u.nextNode();)pt(c),gt(c),c.content instanceof a&&_t(c.content);if(Ne)return e;if(Ae){if(je)for(l=se.call(i.ownerDocument);i.firstChild;)l.appendChild(i.firstChild);else l=i;return(ye.shadowroot||ye.shadowrootmode)&&(l=le.call(r,l,!0)),l}let d=Oe?i.outerHTML:i.innerHTML;return Oe&&y[`!doctype`]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&HU(hW,i.ownerDocument.doctype.name)&&(d=`<!DOCTYPE `+i.ownerDocument.doctype.name+`>
`+d),Ee&&AU([de,fe,pe],e=>{d=RU(d,e,` `)}),re&&Me?re.createHTML(d):d},t.setConfig=function(){nt(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}),ke=!0},t.clearConfig=function(){$e=null,ke=!1},t.isValidAttribute=function(e,t,n){return $e||nt({}),mt(Qe(e),Qe(t),n)},t.addHook=function(e,t){typeof t==`function`&&NU(ue[e],t)},t.removeHook=function(e,t){if(t!==void 0){let n=jU(ue[e],t);return n===-1?void 0:PU(ue[e],n,1)[0]}return MU(ue[e])},t.removeHooks=function(e){ue[e]=[]},t.removeAllHooks=function(){ue=xW()},t}var CW=SW();function wW(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var TW=wW();function EW(e){TW=e}var DW={exec:()=>null};function OW(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(AW.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var kW=(()=>{try{return!0}catch{return!1}})(),AW={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,`i`),blockquoteBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}>`)},jW=/^(?:[ \t]*(?:\n|$))+/,MW=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,NW=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,PW=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,FW=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,IW=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,LW=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,RW=OW(LW).replace(/bull/g,IW).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),zW=OW(LW).replace(/bull/g,IW).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),BW=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,VW=/^[^\n]+/,HW=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,UW=OW(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,HW).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),WW=OW(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,IW).getRegex(),GW=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,KW=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,qW=OW(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,KW).replace(`tag`,GW).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),JW=OW(BW).replace(`hr`,PW).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,GW).getRegex(),YW={blockquote:OW(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,JW).getRegex(),code:MW,def:UW,fences:NW,heading:FW,hr:PW,html:qW,lheading:RW,list:WW,newline:jW,paragraph:JW,table:DW,text:VW},XW=OW(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,PW).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,GW).getRegex(),ZW={...YW,lheading:zW,table:XW,paragraph:OW(BW).replace(`hr`,PW).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,XW).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,GW).getRegex()},QW={...YW,html:OW(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,KW).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:DW,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:OW(BW).replace(`hr`,PW).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,RW).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},$W=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,eG=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,tG=/^( {2,}|\\)\n(?!\s*$)/,nG=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,rG=/[\p{P}\p{S}]/u,iG=/[\s\p{P}\p{S}]/u,aG=/[^\s\p{P}\p{S}]/u,oG=OW(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,iG).getRegex(),sG=/(?!~)[\p{P}\p{S}]/u,cG=/(?!~)[\s\p{P}\p{S}]/u,lG=/(?:[^\s\p{P}\p{S}]|~)/u,uG=OW(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,kW?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),dG=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,fG=OW(dG,`u`).replace(/punct/g,rG).getRegex(),pG=OW(dG,`u`).replace(/punct/g,sG).getRegex(),mG=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,hG=OW(mG,`gu`).replace(/notPunctSpace/g,aG).replace(/punctSpace/g,iG).replace(/punct/g,rG).getRegex(),gG=OW(mG,`gu`).replace(/notPunctSpace/g,lG).replace(/punctSpace/g,cG).replace(/punct/g,sG).getRegex(),_G=OW(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,aG).replace(/punctSpace/g,iG).replace(/punct/g,rG).getRegex(),vG=OW(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,rG).getRegex(),yG=OW(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,aG).replace(/punctSpace/g,iG).replace(/punct/g,rG).getRegex(),bG=OW(/\\(punct)/,`gu`).replace(/punct/g,rG).getRegex(),xG=OW(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),SG=OW(KW).replace(`(?:-->|$)`,`-->`).getRegex(),CG=OW(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,SG).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),wG=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,TG=OW(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,wG).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),EG=OW(/^!?\[(label)\]\[(ref)\]/).replace(`label`,wG).replace(`ref`,HW).getRegex(),DG=OW(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,HW).getRegex(),OG=OW(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,EG).replace(`nolink`,DG).getRegex(),kG=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,AG={_backpedal:DW,anyPunctuation:bG,autolink:xG,blockSkip:uG,br:tG,code:eG,del:DW,delLDelim:DW,delRDelim:DW,emStrongLDelim:fG,emStrongRDelimAst:hG,emStrongRDelimUnd:_G,escape:$W,link:TG,nolink:DG,punctuation:oG,reflink:EG,reflinkSearch:OG,tag:CG,text:nG,url:DW},jG={...AG,link:OW(/^!?\[(label)\]\((.*?)\)/).replace(`label`,wG).getRegex(),reflink:OW(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,wG).getRegex()},MG={...AG,emStrongRDelimAst:gG,emStrongLDelim:pG,delLDelim:vG,delRDelim:yG,url:OW(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,kG).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:OW(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,kG).getRegex()},NG={...MG,br:OW(tG).replace(`{2,}`,`*`).getRegex(),text:OW(MG.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},PG={normal:YW,gfm:ZW,pedantic:QW},FG={normal:AG,gfm:MG,breaks:NG,pedantic:jG},IG={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},LG=e=>IG[e];function RG(e,t){if(t){if(AW.escapeTest.test(e))return e.replace(AW.escapeReplace,LG)}else if(AW.escapeTestNoEncode.test(e))return e.replace(AW.escapeReplaceNoEncode,LG);return e}function zG(e){try{e=encodeURI(e).replace(AW.percentDecode,`%`)}catch{return null}return e}function BG(e,t){let n=e.replace(AW.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(AW.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(AW.slashPipe,`|`);return n}function VG(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function HG(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function UG(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function WG(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function GG(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var KG=class{options;rules;lexer;constructor(e){this.options=e||TW}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,``);return{type:`code`,raw:t[0],codeBlockStyle:`indented`,text:this.options.pedantic?e:VG(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=GG(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=VG(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:VG(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=VG(t[0],`
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
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=UG(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),e.task){if(e.text=e.text.replace(this.rules.other.listReplaceTask,``),e.tokens[0]?.type===`text`||e.tokens[0]?.type===`paragraph`){e.tokens[0].raw=e.tokens[0].raw.replace(this.rules.other.listReplaceTask,``),e.tokens[0].text=e.tokens[0].text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}}let t=this.rules.other.listTaskCheckbox.exec(e.raw);if(t){let n={type:`checkbox`,raw:t[0]+` `,checked:t[0]!==`[ ]`};e.checked=n.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=n.raw+e.tokens[0].raw,e.tokens[0].text=n.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(n)):e.tokens.unshift({type:`paragraph`,raw:n.raw,text:n.raw,tokens:[n]}):e.tokens.unshift(n)}}if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:`html`,block:!0,raw:t[0],pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:t[0],href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=BG(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(BG(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:t[0],depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=VG(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=HG(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),WG(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return WG(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},qG=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||TW,this.options.tokenizer=this.options.tokenizer||new KG,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:AW,block:PG.normal,inline:FG.normal};this.options.pedantic?(t.block=PG.pedantic,t.inline=FG.pedantic):this.options.gfm&&(t.block=PG.gfm,this.options.breaks?t.inline=FG.breaks:t.inline=FG.gfm),this.tokenizer.rules=t}static get rules(){return{block:PG,inline:FG}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(AW.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(AW.tabCharGlobal,`    `).replace(AW.spaceLine,``));e;){let r;if(this.options.extensions?.block?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let n=t.at(-1);r.raw.length===1&&n!==void 0?n.raw+=`
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
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!==null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!==null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!==null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``;for(;e;){a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return t}},JG=class{options;parser;constructor(e){this.options=e||TW}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(AW.notSpaceStart)?.[0],i=e.replace(AW.endingNewline,``)+`
`;return r?`<pre><code class="language-`+RG(r)+`">`+(n?i:RG(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:RG(i,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${RG(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=zG(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+RG(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=zG(e);if(i===null)return RG(n);e=i;let a=`<img src="${e}" alt="${RG(n)}"`;return t&&(a+=` title="${RG(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:RG(e.text)}},YG=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},XG=class e{options;renderer;textRenderer;constructor(e){this.options=e||TW,this.options.renderer=this.options.renderer||new JG,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new YG}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},ZG=class{options;block;constructor(e){this.options=e||TW}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?qG.lex:qG.lexInline}provideParser(e=this.block){return e?XG.parse:XG.parseInline}},QG=new class{defaults=wW();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=XG;Renderer=JG;TextRenderer=YG;Lexer=qG;Tokenizer=KG;Hooks=ZG;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new JG(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new KG(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new ZG;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];ZG.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&ZG.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return qG.lex(e,t??this.defaults)}parser(e,t){return XG.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?qG.lex:qG.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?XG.parse:XG.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?qG.lex:qG.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?XG.parse:XG.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+RG(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function $G(e,t){return QG.parse(e,t)}$G.options=$G.setOptions=function(e){return QG.setOptions(e),$G.defaults=QG.defaults,EW($G.defaults),$G},$G.getDefaults=wW,$G.defaults=TW,$G.use=function(...e){return QG.use(...e),$G.defaults=QG.defaults,EW($G.defaults),$G},$G.walkTokens=function(e,t){return QG.walkTokens(e,t)},$G.parseInline=QG.parseInline,$G.Parser=XG,$G.parser=XG.parse,$G.Renderer=JG,$G.TextRenderer=YG,$G.Lexer=qG,$G.lexer=qG.lex,$G.Tokenizer=KG,$G.Hooks=ZG,$G.parse=$G,$G.options,$G.setOptions,$G.use,$G.walkTokens,$G.parseInline,XG.parse,qG.lex;var eK=`structured-rendering-markdown-rendering-content-for-screenshot`;`${eK}${eK}`;var tK={accentColor:G[`vira-form-accent-primary-color`].value,bodySize:`14px`,h1Size:`22px`,h2Size:`18px`,h3Size:`16px`,h4Size:`15px`,h5Size:`14px`,h6Size:`14px`,bodyGap:`24px`,smallTextSize:`10px`,liSpacing:`4px`,bodyFont:`sans-serif`,codeFont:`monospace`,codeSize:`1em`,codeBackgroundColor:W.colors[`vira-grey-behind-fg-highest-contrast`].background.value,contentSelector:`.${eK}`,tableBorderColor:W.colors[`vira-grey-foreground-decoration`].foreground.value,tableBorderWidth:`1px`,tableHeaderBackgroundColor:W.colors[`vira-grey-behind-fg-highest-contrast`].background.value};function nK(e){return jl(ml(tK,e),(e,t)=>j.isString(t)?Eu(t):t instanceof Tu?t:t.value)}var rK=iK();function iK(e){let t=nK(e);return z`
        ${Eu(e?.contentSelector||tK.contentSelector)} {
            display: flex;
            flex-direction: column;
            gap: ${t.bodyGap};
            font-family: ${t.bodyFont};
            font-size: ${t.bodySize};
            align-items: flex-start;

            & * {
                font-family: inherit;
                font-size: inherit;
                ${TP}
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
    `}var aK=lN()({tagName:`vir-markdown`,styles:z`
        :host {
            display: flex;
            flex-direction: column;
        }
    `,state(){return{renderedElement:void 0,sanitizedHtml:fN({async updateCallback(e){let t=await $G.parse(e);return CW.sanitize(t)}}),lastStyleString:``}},render({inputs:e,state:t,updateState:n,host:r}){t.sanitizedHtml.update(e.markdownString);let i=String(e.renderStyles||rK);return yU({maintainFirstStylesheet:!0,newStyles:i,oldStyles:t.lastStyleString,shadowRoot:r.shadowRoot})&&n({lastStyleString:i}),jN(t.sanitizedHtml,B`
                <${q.assign({icon:uI})}></${q}>
            `,e=>B`
                    <div
                        class=${eK}
                        ${TN(e=>{e instanceof HTMLElement&&n({renderedElement:e})})}
                    >
                        ${jM(e)}
                    </div>
                `,e=>B`
                    <${VV}>
                        ${Ae(`Failed to parse markdown content.`,e)}
                    </${VV}>
                `)}}),oK={icons:II,sourceString:`Source`,pluralSourcesString:`Sources`};({...oK});var sK={...oK,processingString:`Processing`,currentlyExpanded:{},sourceIcon:eI,viewOnPageIcon:aI,processingIcon:uI,expandSourcesOnPrint:!1,hideViewOnPageButtons:!1,isPhoneSize:!1,useDrawerForSources:!1,markdownStyles:rK,createViewOnPageString(e){return`View on page ${e}`},expandAllCards:!1,blockCardExpansion:!1,expandFirstCard:!1,useCardStyles:!1},cK=wj({x1:-1,y1:-1,x2:-1,y2:-1}),lK=wj({type:jj(`source`),pageNumbers:Lj([Lj(-1)]),fileName:Lj(``),fileBoundingBoxes:Lj([Lj(cK)]),quote:Lj(``)});function uK(e){return Pc.isLengthAtLeast(Jc(e).filter(dK),1)}function dK(e){return!!(e&&(e.quote?.trim()||e.fileName||e.pageNumbers?.filter(j.isDefined).length))}var fK=lN()({tagName:`vir-source`,hostClasses:{"vir-source-phone-size":({inputs:e})=>!!e.options?.isPhoneSize},events:{viewOnPageClick:QM()},cssVars:{"vir-source-background-color":W.colors[$N].background.value,"vir-source-borer-radius":G[`vira-form-radius`].value,"vir-source-header-color":W.colors[`vira-grey-foreground-header`].foreground.value,"vir-source-view-on-page-icon-color":G[`vira-form-accent-primary-color`].value,"vir-source-view-on-page-hover-background-color":W.colors[`vira-grey-behind-fg-small-body`].background.value,"vir-source-view-on-page-active-background-color":W.colors[`vira-grey-behind-fg-body`].background.value,"vir-source-font-size":`16px`,"vir-source-phone-font-size":`14px`},styles:({hostClasses:e,cssVars:t})=>z`
        ${VI} {
            background: ${t[`vir-source-background-color`].value};
            border-radius: ${t[`vir-source-borer-radius`].value};
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        p {
            ${TP}
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
                    ${EP};
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

                    & ${q} {
                        width: ${t[`vir-source-font-size`].value};
                        height: ${t[`vir-source-font-size`].value};
                    }
                }
            }
        }

        ${q} {
            width: 20px;
            height: 20px;
        }

        ${e[`vir-source-phone-size`].selector} {
            padding: 4px;
            ${t[`vir-source-phone-font-size`].value}

            gap: 4px;

            & ${q} {
                width: 18px;
                height: 18px;
            }
        }
    `,render({inputs:e,dispatch:t,events:n}){let r=uK(e.sources);if(!r)return M;let i=ml(sK,e.options);return B`
            <${VI}>
                <p class="header">
                    <${q.assign({icon:i.sourceIcon,fitContainer:!0})}></${q}>
                    <span>${i.pluralSourcesString}</span>
                </p>
                <div class="entries">
                    ${r.map(e=>{let r=!i.hideViewOnPageButtons&&e.fileName&&e.pageNumbers?.length?B`
                                      <button
                                          class="view-on-page-button"
                                          title=${e.fileName}
                                          ${xN(`click`,()=>{t(new n.viewOnPageClick(e))})}
                                      >
                                          <${q.assign({icon:i.viewOnPageIcon,fitContainer:!0})}></${q}>
                                          ${i.createViewOnPageString(e.pageNumbers[0]??1)}
                                      </button>
                                  `:void 0,a=e.quote?.trim()||``,o=a?B`
                                  <p class="source-text">"${a}"</p>
                              `:e.fileName?B`
                                    <p class="source-text">${e.fileName}</p>
                                `:void 0;return o||r?B`
                                <div class="entry">${o} ${r}</div>
                            `:M})}
                </div>
            </${VI}>
        `}}),pK=wj({type:jj(`icon`),iconKey:``,strokeColor:Lj(``),fillColor:Lj(``),strokeWidth:Lj(Ij(``,-1))});function mK(e,{icons:t}){let n=t[e.iconKey];if(n)return FI(n,{"vira-icon-fill-color":e.fillColor||void 0,"vira-icon-stroke-color":e.strokeColor||void 0,"vira-icon-stroke-width":j.isString(e.strokeWidth)?e.strokeWidth:j.isNumber(e.strokeWidth)?_l({value:e.strokeWidth,suffix:`px`}):void 0})}function hK(e,t){return wj({type:jj(e),sectionTitle:Lj(``),sources:Lj([Lj(lK)]),...t})}var gK=wj({type:jj(`empty`)}),_K=hK(`inlineCode`,{code:``}),vK=hK(`tag`,{text:zj(``),useBigTag:Lj(!1),color:Lj(Ij({custom:Rj({backgroundColor:Lj(``),foregroundColor:Lj(``)})},{variant:Aj(K)}))}),yK=function(e){return e.Faint=`faint`,e.Small=`small`,e.Bold=`bold`,e}({}),bK=hK(`text`,{text:Lj(zj()),style:Lj(Aj(yK)),icon:Lj(pK)}),xK=hK(`list`,{items:[wj({content:Lj(Ij(bK,vK,gK)),icon:Lj(pK),sources:Lj([Lj(lK)])})]}),SK=hK(`markdown`,{markdown:``}),CK=wj({type:jj(`processing`)}),wK=function(e){return e.Left=`left`,e.Right=`right`,e}({}),TK=function(e){return e.Horizontal=`horizontal`,e.Vertical=`vertical`,e}({}),EK=Ij(bK,_K,SK,vK,xK,gK,CK),DK=hK(`table`,{direction:Aj(TK),headers:[{key:``,text:Lj(bK),hidden:Lj(!1)}],entries:[{data:Yj({keys:``,values:Ij(Lj(EK),[Lj(EK)])}),sources:Lj([Lj(lK)])}],footerRows:Lj([{alignment:Lj(Aj(wK)),cells:Ij(Lj(EK),[Lj(EK)])}])});function OK(e,t,n,r){return{type:`table`,direction:e,headers:t,entries:n,footerRows:r}}var kK=hK(`codeBlock`,{syntax:Lj(``),code:``}),AK=[kK,_K,gK,xK,SK,vK,CK,lK,DK,bK,pK,hK(`collapsible`,{header:zj(),content:[Ij(kK,gK,pK,_K,xK,SK,CK,vK,DK,bK)]})];Ij(...AK);var Z=Kc(AK,e=>({key:e.default.type,value:e.default.type}),{useRequired:!0}),jK=ZM()(`source-expansion`);function MK(e,t){return FK(e,ml(sK,t),[])}function NK(e){if(e==null)return;if(!j.isString(e))return String(e);let t=e.trim();if(!t)return;let n=t.split(`
`);return n.flatMap((e,t)=>B`
            ${e}${t<n.length-1?B`
                      <br />
                  `:``}
        `)}var PK={icon(e,t){let n=mK(e,t);return n?B`
            <${q.assign({icon:n})}></${q}>
        `:M},codeBlock(e){return B`
            <pre>${e.code}</pre>
        `},collapsible(e,t,n){return B`
            <${WI.assign({rawCollapsible:!0})}>
                <span slot=${WI.slotNames.header}>${String(e.header)}</span>
                ${FK(e.content,t,[...n,`collapsible`])}
            </${WI}>
        `},empty(){},inlineCode(e){return B`
            <code>${e.code}</code>
        `},list(e,t,n){let r=Gc(e.items,(e,r)=>{if(!e.icon&&!e.content)return;let i=[...n,r],a=e.content?FK(e.content,t,[...i,`content`]):void 0,o=B`
                    ${e.icon?FK(e.icon,t,[...i,`icon`]):M}${a}
                `;return B`
                    <li
                        class=${DM({"list-item-with-icon":!!e.icon})}
                    >
                        ${VK(o,t,i,e.sources)}
                    </li>
                `},j.isTruthy);if(r.length)return B`
            <ul>
                ${r}
            </ul>
        `},markdown(e,t){return B`
            <${aK.assign({markdownString:e.markdown,renderStyles:t.markdownStyles})}></${aK}>
        `},tag(e){let t=e.color&&`custom`in e.color&&(e.color.custom.backgroundColor||e.color.custom.foregroundColor)?z`
                      ${e.color.custom.backgroundColor?z`
                                ${OH.cssVars[`vira-tag-background-color`].name}: ${Eu(e.color.custom.backgroundColor)};
                            `:z``}
                      ${e.color.custom.foregroundColor?z`
                                ${OH.cssVars[`vira-tag-text-color`].name}: ${Eu(e.color.custom.foregroundColor)};
                            `:z``}
                  `:void 0,n=e.color&&`variant`in e.color?e.color.variant:void 0;return B`
            <${OH.assign({text:e.text,color:t?K.None:n,size:e.useBigTag?bP.Medium:bP.Small,emphasis:SP.Subtle})}
                style=${OM(t)}
            ></${OH}>
        `},processing(e,t){return B`
            <${q.assign({icon:t.processingIcon})}></${q}>
            <span>${t.processingString}...</span>
        `},source(e,t){return B`
            <${fK.assign({options:t,sources:e})}></${fK}>
        `},table(e,t,n){if(t.isPhoneSize&&e.direction===TK.Horizontal){let r=Gc(e.headers,(e,r)=>{if(!e.hidden)return{key:e.key,headerIndex:r,renderedContent:e.text?FK(e.text,t,[...n,`headers`,r]):e.key}},j.isTruthy);return B`
                <div class="phone-table-cards">${e.entries.map((e,i)=>{let a=[...n,i],o=Gc(r,n=>{let r=e.data[n.key],i=Jc(r).filter(j.isTruthy);if(!i.length)return;let o=Array.from(kM(Gc(i,(e,r)=>FK(e,t,[...a,n.key,r]),j.isTruthy),B`
                                    <br />
                                `));return B`
                            <tr>
                                <th>${n.renderedContent}</th>
                                <td>${o}</td>
                            </tr>
                        `},j.isTruthy),s=uK(e.sources);return B`
                    <${VI} class="phone-table-card">
                        <table class="vertical phone-card-table" cellspacing="0" cellpadding="0">
                            <tbody>${o}</tbody>
                        </table>
                        ${s?.length?VK(B``,t,a,s):M}
                    </${VI}>
                `})}</div>
            `}let{headerRow:r,rows:i}=kV(Gc(e.headers,(e,r)=>{if(!e.hidden)return{key:e.key,content:e.text?FK(e.text,t,[...n,`headers`,r]):e.key}},j.isTruthy),e.entries,(r,i)=>jl(r.data,(r,a)=>{let o=Jc(a).filter(j.isTruthy);if(o.length)return Array.from(kM(Gc(o,(a,o)=>{let s=`sources`in a?{sources:e.direction===TK.Vertical?void 0:a.sources}:{};return FK({...a,...s},t,[...n,i,r,o])},j.isTruthy),B`
                                <br />
                            `))}),{orientation:e.direction===TK.Horizontal?OV.Vertical:OV.Horizontal}),a=i.map(t=>{let n=t.cells.at(-1);return uK([...Jc(e.direction===TK.Vertical&&n?Jc(n.data?.data[n.key]).filter(j.isTruthy).flatMap(e=>`sources`in e?Jc(e.sources):[]):void 0),...Jc(t.data?.sources)])}),o=a.some(e=>!!e?.length),s=i[0]?.cells.length||0;return B`
            <table
                cellspacing="0"
                cellpadding="0"
                class=${DM({vertical:e.direction===TK.Vertical,horizontal:e.direction===TK.Horizontal,"wide-table":e.direction===TK.Horizontal&&r?r.length>5:e.direction===TK.Vertical&&i[0]?i[0].cells.length>5:!1})}
            >
                ${r?B`
                          <thead>
                              <tr>
                                  ${r.map(e=>B`
                                          <th>${e.content}</th>
                                      `)}
                                  ${o?B`
                                            <th class="source-cell"></th>
                                        `:M}
                              </tr>
                          </thead>
                      `:M}
                <tbody>
                    ${i.map((r,i)=>{let s=[...n,i],c=a[i],l=r.cells.map((n,i)=>{let a=i===r.cells.length-1,o=e.direction===TK.Vertical&&i===0?`th`:`td`,l=B`
                                <${o}>${n.content}</${o}>
                            `;return c?.length&&a?B`
                                    ${l}
                                    <td class="source-cell">
                                        ${zK(``,t,s,c)}
                                    </td>
                                `:l}),u=c?.length?B`
                                  <tr class="source-row">
                                      <td colspan=${l.length}>
                                          ${BK(t,s,c)}
                                      </td>
                                  </tr>
                              `:M;return B`
                            <tr>
                                ${l}
                                ${o?B`
                                          <td class="source-cell"></td>
                                      `:M}
                            </tr>
                            ${u}
                        `})}
                </tbody>
                ${e.footerRows?.length?B`
                          <tfoot>
                              ${e.footerRows.map((e,r)=>{let i=Jc(e.cells);if(!i.length)return M;let a=e.alignment===wK.Right?s-i.length+1:0;return B`
                                      <tr>${i.map((e,i)=>{let o=i?0:a,s=o<1?void 0:o,c=e?FK(e,t,[...n,`footers`,r,i]):M;return B`
                                          <td
                                              colspan=${OM(s)}
                                              class=${DM({"right-aligned-footer-cell":!!s})}
                                          >
                                              ${c}
                                          </td>
                                      `})}</tr>
                                  `})}
                          </tfoot>
                      `:M}
            </table>
        `},text(e,t,n){let r=NK(e.text),i=e.style?`text-style-${e.style}`:void 0;if(r)return B`
            ${FK(e.icon,t,[...n,`icon`])}
            <span
                class=${[i,`text-section-text-content`].join(` `)}
            >
                ${r}
            </span>
        `}};function FK(e,t,n){return RK(e,t,n,!1).filter(j.isTruthy)}var IK=pl(Z,e=>[e,`section`].join(`-`)),LK=`structured-render-section`;function RK(e,t,n,r){if(!e)return[];if(j.isArray(e))return e.flatMap((e,i)=>RK(e,t,[...n,i],r));if(`type`in e){let i=`sectionTitle`in e&&n.length>0&&!(r&&n.at(-1)===0)&&e.sectionTitle||void 0,a=PK[e.type](e,t,n),o=`sources`in e&&e.sources||void 0,s=B`
            <div
                class=${DM({"section-wrapper":!0,"top-section-wrapper":r,[IK[e.type]]:!0})}
                ${IN(LK)}
                ${IN(IK[e.type])}
            >
                ${VK(a,t,n,o)}
            </div>
        `;return[i?B`
                      <h3>${i}</h3>
                  `:void 0,s]}else if(`sections`in e){let r=RK(e.sections,t,[...n,`sections`],!0),i=e.cardTitleIcon?FK(e.cardTitleIcon,t,[...n,`cardTitleIcon`]):M;return[B`
                <${WI.assign({expandOnPrint:!0,rawCollapsible:!t.useCardStyles,blockExpansion:t.blockCardExpansion,hideHeader:!e.cardTitle,startExpanded:t.expandAllCards||t.expandFirstCard&&n.at(-1)===0})}
                    class=${DM({"raw-collapsible-card":!t.useCardStyles})}
                >
                    <h2
                        slot=${WI.slotNames.header}
                        class="card-title ${DM({"card-title-with-icon":!!e.cardTitleIcon})}"
                    >
                        ${i}${e.cardTitle}
                    </h2>
                    ${r}
                </${WI}>
            `]}else throw Mc.tsType(e).equals(),Error(`Unexpected structured render type: ${_(e)}`)}function zK(e,t,n,r){let i=uK(r),a=[...n,`source-icon`],o=HK(a),s=!!t.currentlyExpanded[o];return B`
        <div class="source-content-wrapper">${e}${i?B`
              <div class="source-icon-wrapper">
                  <button class="source-icon-button">
                      <${q.assign({icon:t.sourceIcon,fitContainer:!0})}
                          ${xN(`click`,e=>{zP(e,HTMLElement).dispatchEvent(new jK({expanded:!s,key:HK(a)}))})}
                      ></${q}>
                  </button>
              </div>
          `:M}</div>
    `}function BK(e,t,n){let r=uK(n);if(!r)return;let i=HK([...t,`source-icon`]),a=!!e.currentlyExpanded[i],o=B`
        <${fK.assign({options:e,sources:r})}></${fK}>
    `;return e.useDrawerForSources?B`
            <${BV.assign({open:a,drawerTitle:e.pluralSourcesString})}
                ${xN(BV.events.drawerClose,e=>{zP(e,HTMLElement).dispatchEvent(new jK({expanded:!1,key:i}))})}
            >
                ${o}
            </${BV}>
        `:B`
        <${UI.assign({expanded:a,expandOnPrint:e.expandSourcesOnPrint})}
            class="collapsible-source-wrapper ${DM({"expanded-source":a})}"
        >
            <span slot=${UI.slotNames.header}></span>
            ${o}
        </${UI}>
    `}function VK(e,t,n,r){return B`
        ${zK(e,t,n,r)}
        ${BK(t,n,r)}
    `}function HK(e){return[`key`,...e].join(`;`).replaceAll(` `,`_`).replaceAll(/[^\w;]/g,``)}var UK=z`
    .source-content-wrapper {
        display: flex;

        & > *:not(table):has(+ .source-icon-wrapper) {
            flex-grow: 1;
        }
    }

    .collapsible-source-wrapper {
        border: none;

        &:not(.expanded-source) {
            ${kP}
        }
    }

    .expanded-source {
        margin: 8px 0 !important;
    }

    .source-icon-button {
        ${EP};
        cursor: pointer;
        color: ${W.colors[`vira-grey-foreground-header`].foreground.value};
        padding: 2px;
        border-radius: 4px;

        & ${q} {
            display: flex;
        }

        &:hover {
            background-color: ${W.colors[`vira-grey-behind-fg-small-body`].background.value};
            color: ${G[`vira-form-accent-primary-color`].value};
        }

        &:active {
            background-color: ${W.colors[`vira-grey-behind-fg-body`].background.value};
            color: ${G[`vira-form-accent-primary-color`].value};
        }
    }

    .source-icon-wrapper.source-icon-wrapper.source-icon-wrapper.source-icon-wrapper.source-icon-wrapper {
        margin-left: auto;
        justify-content: flex-end;
        align-items: center;
        display: flex;
        flex-shrink: 0;
        align-self: top;

        & ${q} {
            width: 20px;
            height: 20px;
        }
    }

    @media print {
        .source-icon-wrapper {
            display: none !important;
        }
    }
`,WK=lN()({tagName:`vir-expandable-source`,state(){return{currentlyExpanded:{}}},styles:z`
        :host {
            display: flex;
            flex-direction: column;
        }

        ${q} {
            flex-shrink: 0;
        }

        *::first-line {
            /* this height must match the icon size */
            line-height: 24px;
        }

        ${UK}
    `,render({inputs:e,state:t,updateState:n}){let r=ml(sK,{...e.options,currentlyExpanded:{...e.options?.currentlyExpanded,...t.currentlyExpanded}});return B`
            <div
                ${xN(jK,e=>{n({currentlyExpanded:{...t.currentlyExpanded,[e.detail.key]:e.detail.expanded}})})}
            >
                ${VK(B`
                        <slot></slot>
                    `,r,[`expandable-source`],e.sources)}
            </div>
        `}}),GK=z`4px`,Q=lN()({tagName:`vir-structured-render`,state(){return{currentlyExpanded:{},lastStyleString:``}},cssVars:{"vir-structured-render-h1-font-size":`24px`,"vir-structured-render-h2-font-size":`18px`,"vir-structured-render-h3-font-size":`16px`,"vir-structured-render-small-font-size":`12px`},hostClasses:{"vir-structured-render-phone-size":({inputs:e})=>!!e.options?.isPhoneSize,"vir-structured-render-tablet-size":({inputs:e})=>!!e.options?.isTabletSize},styles:({cssVars:e,hostClasses:t})=>z`
        :host {
            ${vV(W.colors[$N])}
        }

        ${q} {
            flex-shrink: 0;
        }

        :host,
        .${Eu(eK)}.${Eu(eK)}.${Eu(eK)} {
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

            & ${OH} {
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

        .text-style-${Eu(yK.Faint)}.text-style-${Eu(yK.Faint)}.text-style-${Eu(yK.Faint)}.text-style-${Eu(yK.Faint)} {
            color: ${W.colors[`vira-grey-foreground-non-body`].foreground.value};
        }
        .text-style-${Eu(yK.Bold)}.text-style-${Eu(yK.Bold)}.text-style-${Eu(yK.Bold)}.text-style-${Eu(yK.Bold)} {
            font-weight: bold;
        }
        .text-style-${Eu(yK.Small)}.text-style-${Eu(yK.Small)}.text-style-${Eu(yK.Small)}.text-style-${Eu(yK.Small)} {
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
                ${W.colors[`vira-grey-foreground-decoration`].foreground.value};

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

            ${WI.cssVars[`vira-collapsible-card-content-gap`].name}: 8px;
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

        ${UK}

        .${Eu(eK)}.${Eu(eK)}.${Eu(eK)}.${Eu(eK)} {
            ul {
                ${TP}
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
                margin-right: ${GK};
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
            margin-right: ${GK};
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

            & ${q} {
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
    `,render({inputs:e,state:t,updateState:n,host:r}){let i=String(e.options?.markdownStyles||rK);yU({maintainFirstStylesheet:!0,newStyles:i,oldStyles:t.lastStyleString,shadowRoot:r.shadowRoot})&&n({lastStyleString:i});let a=MK(e.data,{...e.options,currentlyExpanded:{...e.options?.currentlyExpanded,...t.currentlyExpanded}});return B`
            <div
                ${xN(jK,e=>{n({currentlyExpanded:{...t.currentlyExpanded,[e.detail.key]:e.detail.expanded}})})}
                class=${eK}
            >
                ${a}
            </div>
        `}}),KK=2.835,qK={width:210*KK,height:297*KK},JK={top:10*KK,bottom:10*KK,left:12*KK,right:12*KK},$={body:8,h1:15,h2:12,h3:10,small:6,code:7,source:6},YK;async function XK(){if(!YK){let{rgb:e}=await il(async()=>{let{rgb:e}=await import(`./es-BML9sJ2L.js`);return{rgb:e}},__vite__mapDeps([0,1]));YK={black:e(0,0,0),gray:e(.4,.4,.4),lightGray:e(.85,.85,.85),faintGray:e(.5,.5,.5),codeBackground:e(.95,.95,.95),blue:e(0,0,.8),white:e(1,1,1),headerBackground:e(.97,.97,.98),tableBorder:e(.8,.8,.8)}}return YK}var ZK=1.3,QK=class e{pdfDoc;fonts;contentWidth;contentX;currentPage;cursorY;constructor(e,t){this.pdfDoc=e,this.fonts=t,this.contentWidth=qK.width-JK.left-JK.right,this.contentX=JK.left,this.currentPage=this.createNewPage(),this.cursorY=qK.height-JK.top}static async create(){let{PDFDocument:t,StandardFonts:n}=await il(async()=>{let{PDFDocument:e,StandardFonts:t}=await import(`./es-BML9sJ2L.js`);return{PDFDocument:e,StandardFonts:t}},__vite__mapDeps([0,1])),r=await t.create(),[i,a,o,s,c,l]=await Promise.all([r.embedFont(n.Helvetica),r.embedFont(n.HelveticaBold),r.embedFont(n.HelveticaOblique),r.embedFont(n.HelveticaBoldOblique),r.embedFont(n.Courier),r.embedFont(n.CourierBold)]);return new e(r,{regular:i,bold:a,italic:o,boldItalic:s,mono:c,monoBold:l})}getCursorY(){return this.cursorY}getPage(){return this.currentPage}lineHeight(e){return e*ZK}ensureSpace(e){this.cursorY-e<JK.bottom&&this.newPage()}newPage(){this.currentPage=this.createNewPage(),this.cursorY=qK.height-JK.top}advanceCursor(e){this.cursorY-=e}async drawTextLine(e,{font:t,size:n,color:r,x:i,y:a}){let o=await XK();this.currentPage.drawText(tq(e,t),{x:i??this.contentX,y:a??this.cursorY-n,size:n,font:t,color:r??o.black})}async drawWrappedText(e,{font:t,size:n,color:r,x:i,maxWidth:a}){let o=a??this.contentWidth,s=i??this.contentX,c=$K(e,t,n,o),l=this.lineHeight(n),u=c.length*l;u<=qK.height-JK.top-JK.bottom&&this.ensureSpace(u);let d=0;for(let e of c)this.ensureSpace(l),await this.drawTextLine(e,{font:t,size:n,color:r,x:s}),this.advanceCursor(l),d+=l;return d}measureWrappedTextHeight(e,{font:t,size:n,maxWidth:r}){return $K(e,t,n,r??this.contentWidth).length*this.lineHeight(n)}async drawLine(e,t,n,r,{thickness:i,color:a}={}){let o=await XK();this.currentPage.drawLine({start:{x:e,y:t},end:{x:n,y:r},thickness:i??.5,color:a??o.tableBorder})}drawRect(e,t,n,r,{fillColor:i,borderColor:a,borderWidth:o}={}){this.currentPage.drawRectangle({x:e,y:t,width:n,height:r,...i?{color:i}:{},...a?{borderColor:a,borderWidth:o??.5}:{}})}async save(){return await this.pdfDoc.save()}createNewPage(){return this.pdfDoc.addPage([qK.width,qK.height])}};function $K(e,t,n,r){if(!e)return[``];let i=e.split(`
`),a=[];return i.forEach(e=>{if(!e.trim()){a.push(``);return}let i=e.split(/\s+/).filter(j.isTruthy),o=``;i.forEach(e=>{let i=o?`${o} ${e}`:e;eq(i,t,n)>r&&o?(a.push(o),o=e):o=i}),o&&a.push(o)}),a.length?a:[``]}function eq(e,t,n){return t.widthOfTextAtSize(tq(e,t),n)}function tq(e,t){let n=[];for(let r of e)try{t.encodeText(r),n.push(r)}catch{n.push(`?`)}return n.join(``)}async function nq(e,t){await rq($G.lexer(e),t)}async function rq(e,t){for(let n of e)await iq(n,t)}async function iq(e,t){if(e.type===`heading`){let n=e,r=lq(n.depth),i=t.lineHeight(r);t.ensureSpace(i+6),t.advanceCursor(6/2),await sq(await aq(n.tokens,t,{bold:!0}),t,r,t.contentWidth),t.advanceCursor(6/2)}else if(e.type===`paragraph`){let n=await aq(e.tokens,t,{}),r=n.filter(e=>e.isImage);if(r.length>0){for(let e of r)e.imageUrl&&await dq(e.imageUrl,e.text,t);let e=n.filter(e=>!e.isImage);e.length>0&&await sq(e,t,$.body,t.contentWidth)}else await sq(n,t,$.body,t.contentWidth);t.advanceCursor(6/2)}else if(e.type===`code`){let n=e,r=t.measureWrappedTextHeight(n.text,{font:t.fonts.mono,size:$.code,maxWidth:t.contentWidth-16})+16;t.ensureSpace(Math.min(r,t.lineHeight($.code)*3)),t.drawRect(t.contentX,t.getCursorY()-r,t.contentWidth,r,{fillColor:(await XK()).codeBackground});let i=t.getCursorY();t.advanceCursor(8),await t.drawWrappedText(n.text,{font:t.fonts.mono,size:$.code,x:t.contentX+8,maxWidth:t.contentWidth-16});let a=i-t.getCursorY();a<r&&t.advanceCursor(r-a),t.advanceCursor(6/2)}else if(e.type===`blockquote`){let n=e,r=t.contentX,i=t.contentWidth;t.contentX=r+20,t.contentWidth=i-20;let a=t.getCursorY();await rq(n.tokens,t);let o=t.getCursorY(),s=a-o;t.drawRect(r+4,o,3,s,{fillColor:(await XK()).lightGray}),t.contentX=r,t.contentWidth=i,t.advanceCursor(6/2)}else if(e.type===`list`){let n=e;for(let[e,r]of n.items.entries()){let i=n.ordered?`${(n.start||1)+e}.`:`•`,a=t.lineHeight($.body);t.ensureSpace(a),await t.drawTextLine(i,{font:t.fonts.regular,size:$.body}),await sq(await oq(r.tokens,t),t,$.body,t.contentWidth-15,t.contentX+15)}t.advanceCursor(6/2)}else if(e.type===`hr`)t.ensureSpace(6),t.advanceCursor(6/2),await t.drawLine(t.contentX,t.getCursorY(),t.contentX+t.contentWidth,t.getCursorY(),{color:(await XK()).lightGray,thickness:1}),t.advanceCursor(6/2);else if(e.type===`table`)await uq(e,t),t.advanceCursor(6/2);else if(e.type===`html`){let n=e.text.replace(/<[^>]*>/g,``).trim();n&&await t.drawWrappedText(n,{font:t.fonts.regular,size:$.small,color:(await XK()).gray})}else e.type===`space`?t.advanceCursor(6/3):`text`in e&&typeof e.text==`string`&&e.text.trim()&&await t.drawWrappedText(e.text,{font:t.fonts.regular,size:$.body})}async function aq(e,t,n){let r=[],i=await XK();for(let a of e)if(a.type===`text`){let e=a;r.push({text:e.text,font:cq(t,n),color:n.color??i.black}),e.tokens&&r.push(...await aq(e.tokens,t,n))}else if(a.type===`strong`)r.push(...await aq(a.tokens,t,{...n,bold:!0}));else if(a.type===`em`)r.push(...await aq(a.tokens,t,{...n,italic:!0}));else if(a.type===`codespan`)r.push({text:a.text,font:t.fonts.mono,color:n.color??i.black});else if(a.type===`link`)r.push(...await aq(a.tokens,t,{...n,color:i.blue}));else if(a.type===`image`){let e=a;r.push({text:e.text||e.title||`[image]`,font:t.fonts.regular,color:i.black,isImage:!0,imageUrl:e.href})}else a.type===`br`?r.push({text:`
`,font:cq(t,n),color:n.color??i.black}):a.type===`del`?r.push(...await aq(a.tokens,t,{...n,color:i.gray})):`text`in a&&typeof a.text==`string`&&r.push({text:a.text,font:cq(t,n),color:n.color??i.black});return r}async function oq(e,t){let n=[];for(let r of e)if(r.type===`text`||r.type===`paragraph`){let e=r;e.tokens?n.push(...await aq(e.tokens,t,{})):n.push({text:e.text,font:t.fonts.regular,color:(await XK()).black})}else `text`in r&&typeof r.text==`string`&&n.push({text:r.text,font:t.fonts.regular,color:(await XK()).black});return n}async function sq(e,t,n,r,i){let a=i??t.contentX,o=t.lineHeight(n),s=a,c=[];e.forEach(e=>{e.isImage||e.text.split(/(\s+)/).forEach(t=>{t&&c.push({text:t,font:e.font,color:e.color})})});let l=[],u=0;async function d(){if(l.length!==0){t.ensureSpace(o);for(let e of l)await t.drawTextLine(e.text,{font:e.font,size:n,color:e.color,x:e.x});t.advanceCursor(o),l=[],u=0,s=a}}for(let e of c){if(e.text===`
`){await d();continue}let t=eq(e.text,e.font,n);u+t>r&&l.length>0&&e.text.trim()&&await d(),l.push({...e,x:s+u}),u+=t}await d()}function cq(e,t){return t.code?e.fonts.mono:t.bold&&t.italic?e.fonts.boldItalic:t.bold?e.fonts.bold:t.italic?e.fonts.italic:e.fonts.regular}function lq(e){return e===1?$.h1:e===2?$.h2:e===3?$.h3:$.body}async function uq(e,t){let n=t.lineHeight($.body)+4,r=e.header.map((n,r)=>{let i=eq(n.text,t.fonts.bold,$.body);return e.rows.forEach(e=>{let n=e[r];if(n){let e=eq(n.text,t.fonts.regular,$.body);i=Math.max(i,e)}}),i+4}),i=r.reduce((e,t)=>e+t,0),a=i<=t.contentWidth?r.map(e=>e/i*t.contentWidth):r.map(e=>Math.max(30,e/i*t.contentWidth));t.ensureSpace(n);let o=t.getCursorY()-n;t.drawRect(t.contentX,o,t.contentWidth,n,{fillColor:(await XK()).headerBackground});let s=t.contentX;for(let[n,r]of e.header.entries())await t.drawTextLine(r.text,{font:t.fonts.bold,size:$.body,x:s+2,y:o+2}),s+=a[n]??60;await t.drawLine(t.contentX,o,t.contentX+t.contentWidth,o,{color:(await XK()).tableBorder}),t.advanceCursor(n);for(let r of e.rows){t.ensureSpace(n);let e=t.getCursorY()-n,i=t.contentX;for(let[n,o]of r.entries())await t.drawTextLine(o.text,{font:t.fonts.regular,size:$.body,x:i+2,y:e+2}),i+=a[n]??60;await t.drawLine(t.contentX,e,t.contentX+t.contentWidth,e,{color:(await XK()).tableBorder}),t.advanceCursor(n)}}async function dq(e,t,n){try{let r=await fetch(e);if(!r.ok){await n.drawWrappedText(`[${t}]`,{font:n.fonts.italic,size:$.body,color:(await XK()).gray});return}let i=r.headers.get(`content-type`)||``,a=await r.arrayBuffer(),o=new Uint8Array(a),s;if(i.includes(`png`))s=await n.pdfDoc.embedPng(o);else if(i.includes(`jpeg`)||i.includes(`jpg`))s=await n.pdfDoc.embedJpg(o);else try{s=await n.pdfDoc.embedPng(o)}catch{s=await n.pdfDoc.embedJpg(o)}let c=n.contentWidth,l=Math.min(c/s.width,300/s.height,1),u=s.width*l,d=s.height*l;n.ensureSpace(d+6),n.getPage().drawImage(s,{x:n.contentX,y:n.getCursorY()-d,width:u,height:d}),n.advanceCursor(d+6/2)}catch{await n.drawWrappedText(`[${t}]`,{font:n.fonts.italic,size:$.body,color:(await XK()).gray})}}async function fq(e,t,n){let r=gq[e.type];await r(e,t,n)}function pq(e,t){return e?e.type===Z.text?e.text==null?``:String(e.text):e.type===Z.inlineCode?e.code:e.type===Z.tag?e.text==null?``:String(e.text):e.type===Z.markdown?e.markdown:e.type===Z.list?e.items.map(e=>Jc(e.content).map(e=>pq(e,t)).join(` `)).join(`, `):``:``}async function mq(e,t,n){if(!dK(e))return;let r=e.pageNumbers?.filter(j.isDefined),i=r?.length?`p. ${r.join(`, `)}`:``,a=[e.fileName,i].filter(j.isTruthy).join(`, `);if(!a)return;let o=`${n.sourceString}: ${a}`;await t.drawWrappedText(o,{font:t.fonts.regular,size:$.source,color:(await XK()).gray})}async function hq(e,t,n){if(e)for(let r of e)r&&dK(r)&&await mq(r,t,n)}var gq={async text(e,t,n){if(e.text==null)return;let r=String(e.text);if(!r)return;let i=yq(e.icon,t,n),a=await _q(e.style,t);await t.drawWrappedText(r,{font:a.font,size:a.size,color:a.color,x:i?t.contentX+i+4:void 0,maxWidth:i?t.contentWidth-i-4:void 0})},async tag(e,t){if(e.text==null)return;let n=String(e.text);if(!n)return;let r=e.useBigTag?$.body:$.small,i=eq(n,t.fonts.regular,r)+8,a=t.lineHeight(r)+4;t.ensureSpace(a),t.drawRect(t.contentX,t.getCursorY()-a,i,a,{fillColor:(await XK()).lightGray}),await t.drawTextLine(n,{font:t.fonts.regular,size:r,x:t.contentX+4,y:t.getCursorY()-a+4/2}),t.advanceCursor(a+2)},async codeBlock(e,t){if(!e.code)return;let n=t.measureWrappedTextHeight(e.code,{font:t.fonts.mono,size:$.code,maxWidth:t.contentWidth-16})+16;t.ensureSpace(Math.min(n,t.lineHeight($.code)*3)),t.drawRect(t.contentX,t.getCursorY()-n,t.contentWidth,n,{fillColor:(await XK()).codeBackground});let r=t.getCursorY();t.advanceCursor(8),await t.drawWrappedText(e.code,{font:t.fonts.mono,size:$.code,x:t.contentX+8,maxWidth:t.contentWidth-16});let i=r-t.getCursorY();i<n&&t.advanceCursor(n-i)},async inlineCode(e,t){e.code&&await t.drawWrappedText(e.code,{font:t.fonts.mono,size:$.code})},async list(e,t,n){for(let r of e.items){let e=Jc(r.content).filter(j.isTruthy).map(e=>pq(e,n)).filter(j.isTruthy).join(` `);if(!e)continue;let i=t.lineHeight($.body);t.ensureSpace(i),yq(r.icon,t,n)||await t.drawTextLine(`•`,{font:t.fonts.regular,size:$.body}),await t.drawWrappedText(e,{font:t.fonts.regular,size:$.body,x:t.contentX+15,maxWidth:t.contentWidth-15}),await hq(r.sources,t,n)}},async table(e,t,n){let r=e.headers.filter(e=>!e.hidden);r.length===0||e.entries.length===0||(e.direction===TK.Horizontal?await bq(e,r,t,n):await xq(e,r,t,n))},async markdown(e,t){e.markdown&&await nq(e.markdown,t)},async source(e,t,n){await mq(e,t,n)},icon(e,t,n){yq(e,t,n)&&t.advanceCursor(t.lineHeight($.body))},async collapsible(e,t,n){e.header&&(await t.drawWrappedText(String(e.header),{font:t.fonts.bold,size:$.body}),t.advanceCursor(4));let r=Jc(e.content).filter(j.isTruthy);for(let e of r)await fq(e,t,n),t.advanceCursor(6/2)},processing(){},empty(){}};async function _q(e,t){return e===yK.Bold?{font:t.fonts.bold,size:$.body,color:(await XK()).black}:e===yK.Faint?{font:t.fonts.regular,size:$.body,color:(await XK()).faintGray}:e===yK.Small?{font:t.fonts.regular,size:$.small,color:(await XK()).black}:{font:t.fonts.regular,size:$.body,color:(await XK()).black}}var vq=10;function yq(e,t,n){if(!e||!e.iconKey)return 0;let r=mK(e,n);if(!r)return 0;let i=JN(r.svgTemplate),a={"--vira-icon-stroke-color":e.strokeColor||`currentColor`,"--vira-icon-fill-color":e.fillColor||`none`},o=i.replace(/var\(--([^,)]+),\s*([^)]+)\)/g,(e,t,n)=>a[`--${t.trim()}`]||n.trim()),s=t.lineHeight($.body);t.ensureSpace(s);try{return t.getPage().drawSvg(o,{x:t.contentX,y:t.getCursorY(),width:vq,height:vq}),vq}catch{return 0}}async function bq(e,t,n,r){let i=Sq(e,t,n,r,3),a=n.lineHeight($.body)+6;await Cq({cells:t.map(e=>e.text?pq(e.text,r):e.key),columnWidths:i,rowHeight:a,builder:n,cellPadding:3,isHeader:!0});for(let o of e.entries)await Cq({cells:t.map(e=>{let t=o.data[e.key];return Jc(t).filter(j.isTruthy).map(e=>pq(e,r)).filter(j.isTruthy).join(` `)}),columnWidths:i,rowHeight:a,builder:n,cellPadding:3,isHeader:!1}),await hq(o.sources,n,r);if(e.footerRows)for(let t of e.footerRows){let e=Jc(t.cells).filter(j.isTruthy).map(e=>pq(e,r)).filter(j.isTruthy).join(` `);e&&(n.ensureSpace(a),await n.drawWrappedText(e,{font:n.fonts.bold,size:$.body}))}}async function xq(e,t,n,r){let i=n.lineHeight($.body)+6,a=n.contentWidth/(e.entries.length+1),o=qc(e.entries.length+1,()=>a);for(let a of t)await Cq({cells:[a.text?pq(a.text,r):a.key,...e.entries.map(e=>{let t=e.data[a.key];return Jc(t).filter(j.isTruthy).map(e=>pq(e,r)).filter(j.isTruthy).join(` `)})],columnWidths:o,rowHeight:i,builder:n,cellPadding:3,isHeader:!1,boldFirstCell:!0})}function Sq(e,t,n,r,i){let a=t.map(t=>{let a=eq(t.text?pq(t.text,r):t.key,n.fonts.bold,$.body);return e.entries.forEach(e=>{let i=e.data[t.key],o=eq(Jc(i).filter(j.isTruthy).map(e=>pq(e,r)).filter(j.isTruthy).join(` `),n.fonts.regular,$.body);a=Math.max(a,o)}),a+i*2}),o=a.reduce((e,t)=>e+t,0),s=n.contentWidth;if(o<=s){let e=s/o;return a.map(t=>t*e)}return a.map(e=>Math.max(25,e/o*s))}async function Cq({cells:e,columnWidths:t,rowHeight:n,builder:r,cellPadding:i,isHeader:a,boldFirstCell:o}){r.ensureSpace(n);let s=r.getCursorY()-n,c=r.contentX;a&&r.drawRect(r.contentX,s,r.contentWidth,n,{fillColor:(await XK()).headerBackground});for(let[n,l]of e.entries()){let e=t[n]??60,u=a||o&&n===0?r.fonts.bold:r.fonts.regular,d=l,f=e-i*2;if(eq(d,u,$.body)>f){for(;d.length>1&&eq(d+`...`,u,$.body)>f;)d=d.slice(0,-1);d+=`...`}await r.drawTextLine(d,{font:u,size:$.body,x:c+i,y:s+i}),c+=e}await r.drawLine(r.contentX,s,r.contentX+r.contentWidth,s,{color:(await XK()).tableBorder}),r.advanceCursor(n)}async function wq(e,t){let n=ml(oK,t),r=await QK.create();return await Tq(e,r,n),await r.save()}async function Tq(e,t,n){if(e)if(j.isArray(e))for(let[r,i]of e.entries())i&&(r>0&&t.advanceCursor(10),await Tq(i,t,n));else if(`type`in e)await Dq(e,t,n,!1);else if(`sections`in e)await Eq(e,t,n);else throw Mc.tsType(e).equals(),Error(`Unexpected structured render type: ${_(e)}`)}async function Eq(e,t,n){if(e.cardTitle){let n=t.lineHeight($.h2);t.ensureSpace(n+6),await t.drawWrappedText(e.cardTitle,{font:t.fonts.bold,size:$.h2}),t.advanceCursor(6/2),await t.drawLine(t.contentX,t.getCursorY(),t.contentX+t.contentWidth,t.getCursorY(),{color:(await XK()).lightGray,thickness:1}),t.advanceCursor(6/2)}for(let[r,i]of e.sections.entries())i&&(r>0&&t.advanceCursor(6),await Dq(i,t,n,r===0))}async function Dq(e,t,n,r){if(`sectionTitle`in e&&e.sectionTitle&&!r){let n=t.lineHeight($.h3);t.ensureSpace(n+6/2),t.advanceCursor(6/2),await t.drawWrappedText(e.sectionTitle,{font:t.fonts.bold,size:$.h3}),t.advanceCursor(4)}if(await fq(e,t,n),`sources`in e&&e.sources){let r=e.sources.filter(e=>!!e&&dK(e));for(let e of r){let r=e.pageNumbers?.filter(j.isDefined),i=r?.length?`p. ${r.join(`, `)}`:``,a=[e.fileName,i].filter(j.isTruthy).join(`, `);a&&await t.drawWrappedText(`${n.sourceString}: ${a}`,{font:t.fonts.regular,size:$.source,color:(await XK()).gray})}}}async function Oq(e,{fileName:t,options:n}){if(!b(y.Web))throw Error(`${Oq.name} cannot run outside of a browser.`);let r=await wq(e,n),i=new Blob([new Uint8Array(r)],{type:`application/pdf`}),a=URL.createObjectURL(i),o=globalThis.document.createElement(`a`);o.href=a,o.download=t.endsWith(`.pdf`)?t:`${t}.pdf`,o.style.display=`none`,globalThis.document.body.append(o),o.click(),o.remove(),URL.revokeObjectURL(a)}async function kq(e,t){if(!b(y.Web))throw Error(`${kq.name} cannot run outside of a browser.`);let n=await wq(e,t),r=new Blob([new Uint8Array(n)],{type:`application/pdf`}),i=URL.createObjectURL(r),a=navigator.userAgent.toLowerCase(),o=a.includes(`firefox`),s=/iphone|ipad|ipod/.test(a)||a.includes(`macintosh`)&&navigator.maxTouchPoints>1;if(o||s){if(!globalThis.window.open(i))throw URL.revokeObjectURL(i),Error(`Failed to open print window. Check your popup blocker settings.`);return}let c=globalThis.document.createElement(`iframe`);c.style.position=`fixed`,c.style.left=`-10000px`,c.style.top=`0`,c.style.width=`1px`,c.style.height=`1px`,c.style.border=`none`,c.style.opacity=`0`,c.src=i,globalThis.document.body.append(c),await new Promise(e=>{c.addEventListener(`load`,()=>{e()},{once:!0})});let l=c.contentWindow;if(!l){URL.revokeObjectURL(i),c.remove();return}return await MP(3),await po({milliseconds:250}),await MP(3),new Promise(e=>{function t(){URL.revokeObjectURL(i),c.remove(),e()}let n=!1;function r(){n||(n=!0,globalThis.window.removeEventListener(`focus`,a),t())}function a(){r()}l.addEventListener(`afterprint`,()=>{r()},{once:!0}),globalThis.window.addEventListener(`focus`,a,{once:!0}),l.print()})}var Aq=[{cardTitle:`Frontend Performance`,cardTitleIcon:{type:Z.icon,iconKey:kI.name,strokeColor:`green`},sections:[{type:Z.text,sectionTitle:`Overview`,text:`Frontend performance metrics collected from the last 30 days of production monitoring.`,sources:[{type:`source`,fileName:`performance-report-2026-02.pdf`,pageNumbers:[1,2],quote:`Metrics aggregated from real user monitoring (RUM) data across all production traffic.`}]},{type:Z.table,sectionTitle:`Core Web Vitals`,direction:TK.Horizontal,sources:[{type:`source`,fileName:`lighthouse-audit.json`,pageNumbers:[3],quote:`Core Web Vitals thresholds based on Chrome UX Report field data.`},{type:`source`,fileName:`web-vitals-spec.md`,quote:`Targets align with Google recommended thresholds for good user experience.`}],headers:[{key:`metric`},{key:`p50`},{key:`p95`},{key:`target`},{key:`status`}],entries:[{data:{metric:{type:Z.text,text:`Largest Contentful Paint`,style:yK.Bold},p50:{type:Z.inlineCode,code:`1.2s`},p95:{type:Z.inlineCode,code:`2.8s`},target:{type:Z.text,text:`< 2.5s`},status:{type:Z.tag,text:`Pass`,color:{variant:K.Positive}}}},{data:{metric:{type:Z.text,text:`First Input Delay`,style:yK.Bold},p50:{type:Z.inlineCode,code:`12ms`},p95:{type:Z.inlineCode,code:`85ms`},target:{type:Z.text,text:`< 100ms`},status:{type:Z.tag,text:`Pass`,color:{variant:K.Positive}}}},{data:{metric:{type:Z.text,text:`Cumulative Layout Shift`,style:yK.Bold},p50:{type:Z.inlineCode,code:`0.18`},p95:{type:Z.inlineCode,code:`0.32`},target:{type:Z.text,text:`< 0.1`},status:{type:Z.tag,text:`Fail`,color:{variant:K.Danger}}},sources:[{type:`source`,fileName:`cls-regression-analysis.pdf`,pageNumbers:[7],quote:`CLS spike correlated with hero image carousel added in v3.12.0.`}]},{data:{metric:{type:Z.text,text:`Time to First Byte`,style:yK.Bold},p50:{type:Z.inlineCode,code:`210ms`},p95:{type:Z.inlineCode,code:`480ms`},target:{type:Z.text,text:`< 600ms`},status:{type:Z.tag,text:`Pass`,color:{variant:K.Positive}}}}]},{type:Z.list,sectionTitle:`Recommendations`,items:[{content:{type:Z.text,text:`Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images.`},icon:{type:Z.icon,iconKey:jI.name,strokeColor:`red`},sources:[{type:`source`,fileName:`frontend-performance-review-2026-q1.pdf`,pageNumbers:[4],quote:`Layout shifts primarily caused by images without explicit dimensions.`},{type:`source`,fileName:`web-vitals-optimization-guide.md`,quote:`Lazy loading below-the-fold content reduces initial page weight and improves LCP.`}]},{icon:{type:Z.icon,iconKey:jI.name,strokeColor:`red`},content:{type:Z.text,text:`Add explicit width and height attributes to all image elements.`,sources:[{type:`source`,fileName:`cls-regression-analysis.pdf`,pageNumbers:[8],quote:`Missing width/height attributes on images are the primary contributor to layout shift.`}]}},{content:{type:Z.text,text:`Consider lazy loading below-the-fold content.`},sources:[{type:`source`,fileName:`frontend-performance-review-2026-q1.pdf`,pageNumbers:[4],quote:`Layout shifts primarily caused by images without explicit dimensions.`},{type:`source`,fileName:`web-vitals-optimization-guide.md`,quote:`Lazy loading below-the-fold content reduces initial page weight and improves LCP.`}]}]},{type:Z.list,sectionTitle:`Action Items`,items:[{content:{type:Z.text,text:`Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions.`},icon:{type:Z.icon,iconKey:jI.name,strokeColor:`orange`}},{content:{type:Z.text,text:`Enable native lazy loading on below-the-fold images.`},icon:{type:Z.icon,iconKey:kI.name,strokeColor:`green`}},{content:{type:Z.text,text:`Defer non-critical third-party scripts.`},icon:{type:Z.icon,iconKey:kI.name,strokeColor:`green`}}]},OK(TK.Vertical,[{key:`age`,text:{type:Z.text,text:`Age`}},{key:`dateOfBirth`,text:{type:Z.text,text:`DoB`}},{key:`bloodPressure`,text:{type:Z.text,text:`Blood Pressure`}},{key:`bmi`,text:{type:Z.text,text:`BMI`}},{key:`heartRate`,text:{type:Z.text,text:`Heart Rate`}},{key:`oxygenSaturation`,text:{type:Z.text,text:`Oxygen Saturation`}},{key:`pain`,text:{type:Z.text,text:`Pain`}},{key:`language`,text:{type:Z.text,text:`Language`}},{key:`respiratory`,text:{type:Z.text,text:`Respiratory Rate`}},{key:`sex`,text:{type:Z.text,text:`Sex`}},{key:`temperature`,text:{type:Z.text,text:`Temperature`}},{key:`weight`,text:{type:Z.text,text:`Weight`}},{key:`height`,text:{type:Z.text,text:`Height`}},{key:`zipCode`,text:{type:Z.text,text:`Zip Code`}}],[{data:{age:{type:Z.text,text:`72`,sources:[{type:Z.source,fileName:`intake-form.pdf`,pageNumbers:[1],quote:`Age: 72`}]},dateOfBirth:{type:Z.text,text:`01/15/1954`,sources:[{type:Z.source,fileName:`intake-form.pdf`,pageNumbers:[1],quote:`DOB: 01/15/1954`}]},bloodPressure:{type:Z.text,text:`130 / 85`,sources:[{type:Z.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`BP: 130/85 mmHg`}]},bmi:{type:Z.text,text:`27.3`,sources:[{type:Z.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`BMI: 27.3`}]},heartRate:{type:Z.text,text:`78 bpm`,sources:[{type:Z.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`HR: 78 bpm`}]},height:{type:Z.text,text:`170 cm`},oxygenSaturation:{type:Z.text,text:`96%, on room air`,sources:[{type:Z.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`SpO2: 96% on RA`}]},pain:{type:Z.text,text:`4/10`,sources:[{type:Z.source,fileName:`nursing-notes.pdf`,pageNumbers:[3],quote:`Pain score: 4/10`}]},language:{type:Z.text,text:`English`},respiratory:{type:Z.text,text:`18 breaths/min`,sources:[{type:Z.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`RR: 18 breaths/min`}]},sex:{type:Z.text,text:`Male`},temperature:{type:Z.text,text:`98.6 °F`,sources:[{type:Z.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`Temp: 98.6°F`}]},weight:{type:Z.text,text:`185 lbs`,sources:[{type:Z.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`Weight: 185 lbs`}]},zipCode:{type:Z.text,text:`90210`,sources:[{type:Z.source,fileName:`intake-form.pdf`,pageNumbers:[1],quote:`Zip: 90210`}]}}}])]},{cardTitle:`Backend API Health`,sections:[{type:Z.markdown,sectionTitle:`Status Summary`,sources:[{type:`source`,fileName:`uptime-monitor-export.csv`,quote:`Uptime percentages calculated from 5-minute health check intervals.`}],markdown:[`All **12 services** are operational. Average uptime over the past 30 days: **99.97%**.`,``,`| Service | Uptime |`,`|---------|--------|`,`| Auth | 99.99% |`,`| Users | 99.98% |`,`| Notifications | 99.91% |`,`| Billing | 100% |`].join(`
`)},{type:Z.table,sectionTitle:`Endpoint Latency (ms)`,direction:TK.Vertical,headers:[{key:`endpoint`},{key:`getUsers`},{key:`createUser`},{key:`getReport`},{key:`sendNotification`}],entries:[{data:{endpoint:{type:Z.text,text:`p50`},getUsers:{type:Z.inlineCode,code:`45`},createUser:{type:Z.inlineCode,code:`120`},getReport:{type:Z.inlineCode,code:`890`},sendNotification:{type:Z.inlineCode,code:`65`}}},{data:{endpoint:{type:Z.text,text:`p99`},getUsers:{type:Z.inlineCode,code:`180`},createUser:{type:Z.inlineCode,code:`450`},getReport:{type:Z.inlineCode,code:`3200`},sendNotification:{type:Z.inlineCode,code:`210`}}}]},{type:Z.codeBlock,sectionTitle:`Slow Query Sample`,syntax:`sql`,code:[`SELECT r.id, r.title, r.created_at,`,`       u.name AS author_name,`,`       COUNT(c.id) AS comment_count`,`FROM reports r`,`JOIN users u ON u.id = r.author_id`,`LEFT JOIN comments c ON c.report_id = r.id`,`WHERE r.created_at > NOW() - INTERVAL '30 days'`,`GROUP BY r.id, r.title, r.created_at, u.name`,`ORDER BY r.created_at DESC`,`LIMIT 100;`].join(`
`)}]},{cardTitle:`Deployment Pipeline`,sections:[{type:Z.text,sectionTitle:`Current State`,text:`The CI/CD pipeline is fully automated with staging and production environments.`,icon:{type:Z.icon,iconKey:kI.name,strokeColor:`green`}},{type:Z.table,sectionTitle:`Recent Deployments`,direction:TK.Horizontal,sources:[{type:`source`,fileName:`ci-pipeline-logs.txt`,pageNumbers:[12,15,18,22],quote:`Deployment records extracted from CI/CD pipeline execution logs.`}],headers:[{key:`version`},{key:`environment`},{key:`date`},{key:`duration`},{key:`status`}],entries:[{data:{version:{type:Z.inlineCode,code:`v3.14.2`},environment:{type:Z.tag,text:`Production`,color:{variant:K.Positive}},date:{type:Z.text,text:`2026-02-28`},duration:{type:Z.text,text:`4m 22s`},status:{type:Z.tag,text:`Success`,color:{variant:K.Positive}}}},{data:{version:{type:Z.inlineCode,code:`v3.14.1`},environment:{type:Z.tag,text:`Production`,color:{variant:K.Positive}},date:{type:Z.text,text:`2026-02-25`},duration:{type:Z.text,text:`3m 58s`},status:{type:Z.tag,text:`Success`,color:{variant:K.Positive}}}},{data:{version:{type:Z.inlineCode,code:`v3.14.0`},environment:{type:Z.tag,text:`Staging`,color:{variant:K.Warning}},date:{type:Z.text,text:`2026-02-24`},duration:{type:Z.text,text:`5m 01s`},status:{type:Z.tag,text:`Rolled Back`,color:{variant:K.Danger}}}},{data:{version:{type:Z.inlineCode,code:`v3.13.9`},environment:{type:Z.tag,text:`Production`,color:{variant:K.Positive}},date:{type:Z.text,text:`2026-02-20`},duration:{type:Z.text,text:`4m 10s`},status:{type:Z.tag,text:`Success`,color:{variant:K.Positive}}}}]},{type:Z.list,sectionTitle:`Pipeline Steps`,items:[{content:{type:Z.text,text:`Lint and type check.`},icon:{type:Z.icon,iconKey:kI.name,strokeColor:`green`}},{content:{type:Z.text,text:`Unit and integration tests.`},icon:{type:Z.icon,iconKey:kI.name,strokeColor:`green`}},{content:{type:Z.text,text:`Build production bundle.`},icon:{type:Z.icon,iconKey:kI.name,strokeColor:`green`}},{content:{type:Z.text,text:`Deploy to staging.`},icon:{type:Z.icon,iconKey:kI.name,strokeColor:`green`}},{content:{type:Z.text,text:`E2E smoke tests.`},icon:{type:Z.icon,iconKey:kI.name,strokeColor:`green`}},{content:{type:Z.text,text:`Promote to production.`},icon:{type:Z.icon,iconKey:kI.name,strokeColor:`green`}}]},{type:Z.codeBlock,sectionTitle:`Pipeline Config Snippet`,syntax:`yaml`,code:[`stages:`,`  - name: lint`,`    command: npm run lint`,`  - name: test`,`    command: npm test`,`    parallel: true`,`  - name: build`,`    command: npm run build`,`  - name: deploy-staging`,`    command: deploy --env staging`,`  - name: e2e`,`    command: npm run test:e2e`,`  - name: deploy-production`,`    command: deploy --env production`,`    requires: [e2e]`].join(`
`)},{type:Z.collapsible,sectionTitle:`Collapsible Details`,header:`Rollback Procedure`,content:[{type:Z.text,text:`If a deployment fails health checks, the pipeline automatically triggers a rollback to the previous stable version.`},{type:Z.codeBlock,syntax:`bash`,code:[`#!/bin/bash`,`deploy rollback --env production --to-version $LAST_STABLE`,`notify --channel ops --message "Rollback initiated"`].join(`
`)}]},{type:Z.collapsible,header:`Environment Variables`,content:[{type:Z.table,direction:TK.Horizontal,headers:[{key:`variable`},{key:`staging`},{key:`production`}],entries:[{data:{variable:{type:Z.inlineCode,code:`NODE_ENV`},staging:{type:Z.tag,text:`staging`,color:{variant:K.Warning}},production:{type:Z.tag,text:`production`,color:{variant:K.Positive}}}},{data:{variable:{type:Z.inlineCode,code:`LOG_LEVEL`},staging:{type:Z.text,text:`debug`},production:{type:Z.text,text:`warn`}}}]}]},{type:Z.collapsible,header:`Post-Deploy Checklist`,content:[{type:Z.list,items:[{content:{type:Z.text,text:`Verify health check endpoints return 200.`},icon:{type:Z.icon,iconKey:kI.name,strokeColor:`green`}},{content:{type:Z.text,text:`Confirm error rate stays below 0.1% threshold.`},icon:{type:Z.icon,iconKey:jI.name,strokeColor:`orange`}},{content:{type:Z.text,text:`Monitor p99 latency for 15 minutes.`},icon:{type:Z.icon,iconKey:kI.name,strokeColor:`green`}}]}]}]}],jq=gu({title:`Multi Card`,parent:vU,descriptionParagraphs:[`Multiple cards rendered together to demonstrate complex multi-card layouts.`],defineExamples({defineExample:e}){e({title:`three cards`,styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return B`
                    <${Q.assign({data:Aq,options:{useCardStyles:!0}})}></${Q}>
                `}}),e({title:`three cards phone size`,styles:z`
                :host {
                    max-width: 400px;
                }
            `,render(){return B`
                    <${Q.assign({data:Aq,options:{useCardStyles:!0,isPhoneSize:!0,useDrawerForSources:!0}})}></${Q}>
                `}})}}),Mq=gu({title:`Block Expansion`,parent:vU,descriptionParagraphs:[`Cards rendered with blockCardExpansion enabled, which forces all sections expanded and disables toggling.`],defineExamples({defineExample:e}){e({title:`all sections locked open`,styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return B`
                    <${Q.assign({data:Aq,options:{useCardStyles:!0,blockCardExpansion:!0}})}></${Q}>
                `}})}}),Nq=gu({title:`Dense Data`,parent:vU,descriptionParagraphs:[`A single card packed with many sections, large tables, lists, code blocks, and markdown to stress-test rendering.`],defineExamples({defineExample:e}){e({title:`comprehensive product analysis`,styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:[{cardTitle:`Comprehensive Product Analysis`,sections:[{type:Z.text,sectionTitle:`Executive Summary`,text:`This analysis covers product adoption, feature usage, customer feedback, technical debt, and roadmap progress across all three product lines.`,style:yK.Bold},{type:Z.markdown,sectionTitle:`Adoption Trends`,markdown:[`### Monthly Active Users`,``,`Growth has been **steady** across all tiers:`,``,`- **Free tier**: 14,200 MAU (+8% MoM)`,`- **Pro tier**: 3,800 MAU (+12% MoM)`,`- **Enterprise tier**: 420 MAU (+3% MoM)`,``,`### Retention`,``,`Day-7 retention: **68%** | Day-30 retention: **41%** | Day-90 retention: **28%**`,``,`> The largest drop-off occurs between day 7 and day 14, suggesting onboarding improvements could have significant impact.`].join(`
`)},{type:Z.table,sectionTitle:`Feature Usage Matrix`,direction:TK.Horizontal,headers:[{key:`feature`},{key:`freeTier`},{key:`proTier`},{key:`enterpriseTier`},{key:`satisfaction`},{key:`trend`}],entries:[{data:{feature:{type:Z.text,text:`Dashboard`,style:yK.Bold},freeTier:{type:Z.text,text:`92%`},proTier:{type:Z.text,text:`97%`},enterpriseTier:{type:Z.text,text:`99%`},satisfaction:{type:Z.tag,text:`4.5 / 5`,color:{variant:K.Positive}},trend:{type:Z.tag,text:`Stable`,color:{variant:K.Positive}}}},{data:{feature:{type:Z.text,text:`Export (PDF/Image)`,style:yK.Bold},freeTier:{type:Z.text,text:`34%`},proTier:{type:Z.text,text:`78%`},enterpriseTier:{type:Z.text,text:`91%`},satisfaction:{type:Z.tag,text:`3.8 / 5`,color:{variant:K.Warning}},trend:{type:Z.tag,text:`Growing`,color:{variant:K.Positive}}}},{data:{feature:{type:Z.text,text:`API Access`,style:yK.Bold},freeTier:{type:Z.text,text:`5%`},proTier:{type:Z.text,text:`42%`},enterpriseTier:{type:Z.text,text:`88%`},satisfaction:{type:Z.tag,text:`4.1 / 5`,color:{variant:K.Positive}},trend:{type:Z.tag,text:`Growing`,color:{variant:K.Positive}}}},{data:{feature:{type:Z.text,text:`Collaboration`,style:yK.Bold},freeTier:{type:Z.text,text:`18%`},proTier:{type:Z.text,text:`61%`},enterpriseTier:{type:Z.text,text:`95%`},satisfaction:{type:Z.tag,text:`4.3 / 5`,color:{variant:K.Positive}},trend:{type:Z.tag,text:`Stable`,color:{variant:K.Positive}}}},{data:{feature:{type:Z.text,text:`Custom Themes`,style:yK.Bold},freeTier:{type:Z.text,text:`0%`},proTier:{type:Z.text,text:`29%`},enterpriseTier:{type:Z.text,text:`67%`},satisfaction:{type:Z.tag,text:`3.2 / 5`,color:{variant:K.Warning}},trend:{type:Z.tag,text:`Declining`,color:{variant:K.Danger}}}},{data:{feature:{type:Z.text,text:`Webhooks`,style:yK.Bold},freeTier:{type:Z.text,text:`0%`},proTier:{type:Z.text,text:`15%`},enterpriseTier:{type:Z.text,text:`72%`},satisfaction:{type:Z.tag,text:`4.0 / 5`,color:{variant:K.Positive}},trend:{type:Z.tag,text:`Growing`,color:{variant:K.Positive}}}}]},{type:Z.list,sectionTitle:`Customer Feedback Themes`,items:[{content:{type:Z.text,text:`Export quality needs improvement (mentioned 47 times).`},icon:{type:Z.icon,iconKey:jI.name,strokeColor:`orange`}},{content:{type:Z.text,text:`Dashboard customization is highly valued (mentioned 82 times).`},icon:{type:Z.icon,iconKey:EI.name,strokeColor:`gold`}},{content:{type:Z.text,text:`API documentation could be more complete (mentioned 31 times).`},icon:{type:Z.icon,iconKey:jI.name,strokeColor:`orange`}},{content:{type:Z.text,text:`Real-time collaboration is a top-requested feature (mentioned 64 times).`},icon:{type:Z.icon,iconKey:EI.name,strokeColor:`gold`}},{content:{type:Z.text,text:`Mobile experience needs significant work (mentioned 28 times).`},icon:{type:Z.icon,iconKey:jI.name,strokeColor:`red`}}]},{type:Z.codeBlock,sectionTitle:`Top API Usage Pattern`,syntax:`typescript`,code:[`import {createClient} from '@product/sdk';`,``,`const client = createClient({`,`    apiKey: process.env.PRODUCT_API_KEY,`,`    baseUrl: 'https://api.product.com/v2',`,`});`,``,`const report = await client.reports.create({`,`    title: 'Weekly Summary',`,`    sections: [`,`        {type: 'chart', dataSource: 'revenue'},`,`        {type: 'table', dataSource: 'transactions'},`,`        {type: 'text', content: 'Generated automatically.'},`,`    ],`,`    format: 'pdf',`,`});`,``,`await client.reports.export(report.id, {`,`    destination: 's3://reports-bucket/weekly/',`,`});`].join(`
`)},{type:Z.table,sectionTitle:`Technical Debt Inventory`,direction:TK.Horizontal,headers:[{key:`item`},{key:`severity`},{key:`age`},{key:`effort`},{key:`impact`}],entries:[{data:{item:{type:Z.text,text:`Legacy auth middleware.`},severity:{type:Z.tag,text:`High`,color:{variant:K.Danger}},age:{type:Z.text,text:`18 months`},effort:{type:Z.text,text:`3 sprints`},impact:{type:Z.text,text:`Blocks SSO integration.`}}},{data:{item:{type:Z.text,text:`Untyped API responses.`},severity:{type:Z.tag,text:`Medium`,color:{variant:K.Warning}},age:{type:Z.text,text:`12 months`},effort:{type:Z.text,text:`2 sprints`},impact:{type:Z.text,text:`Frequent runtime errors.`}}},{data:{item:{type:Z.text,text:`Duplicated validation logic.`},severity:{type:Z.tag,text:`Medium`,color:{variant:K.Warning}},age:{type:Z.text,text:`9 months`},effort:{type:Z.text,text:`1 sprint`},impact:{type:Z.text,text:`Inconsistent error messages.`}}},{data:{item:{type:Z.text,text:`Missing database indexes.`},severity:{type:Z.tag,text:`High`,color:{variant:K.Danger}},age:{type:Z.text,text:`6 months`},effort:{type:Z.text,text:`0.5 sprint`},impact:{type:Z.text,text:`Slow report generation.`}}},{data:{item:{type:Z.text,text:`Outdated test fixtures.`},severity:{type:Z.tag,text:`Low`,color:{custom:{backgroundColor:`#e0e0e0`,foregroundColor:`#333`}}},age:{type:Z.text,text:`4 months`},effort:{type:Z.text,text:`1 sprint`},impact:{type:Z.text,text:`Reduced test reliability.`}}}]},{type:Z.markdown,sectionTitle:`Roadmap Progress`,markdown:[`### Q1 2026 Goals`,``,`| Goal | Status | Completion |`,`|------|--------|------------|`,`| SSO Integration | In Progress | 60% |`,`| Mobile App v1 | In Progress | 35% |`,`| API v3 | Planning | 10% |`,`| Export Overhaul | Complete | 100% |`,`| Webhook Reliability | Complete | 100% |`,``,`### Q2 2026 Planned`,``,`- Real-time collaboration MVP.`,`- Custom theme builder.`,`- Advanced analytics dashboard.`,`- Internationalization (i18n) support.`].join(`
`)},{type:Z.list,sectionTitle:`Key Risks`,items:[{content:{type:Z.text,text:`SSO integration depends on legacy auth refactor completing first.`,style:yK.Bold},icon:{type:Z.icon,iconKey:jI.name,strokeColor:`red`}},{content:{type:Z.text,text:`Mobile app timeline may slip due to design resource constraints.`},icon:{type:Z.icon,iconKey:jI.name,strokeColor:`orange`}},{content:{type:Z.text,text:`API v3 design needs broader stakeholder input before implementation.`}},{content:{type:Z.text,text:`Real-time collaboration requires WebSocket infrastructure not yet provisioned.`},icon:{type:Z.icon,iconKey:jI.name,strokeColor:`orange`}}]},{type:Z.text,sectionTitle:`Prepared By`,text:`Product & Engineering Team, March 2026.`,style:yK.Faint}]}]})}></${Q}>
                `}})}}),Pq=gu({title:`Expand All`,parent:vU,descriptionParagraphs:[`Cards rendered with expandAllCards enabled, which starts all sections expanded but still allows toggling.`],defineExamples({defineExample:e}){e({title:`all sections start expanded`,styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return B`
                    <${Q.assign({data:Aq,options:{useCardStyles:!0,expandAllCards:!0}})}></${Q}>
                `}})}}),Fq=gu({title:`Full Card`,parent:vU,descriptionParagraphs:[`Demos of VirStructuredRender with full StructuredRenderData (card arrays).`],defineExamples({defineExample:e}){e({title:`single card with many sections`,styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:[{cardTitle:`Project Health Report`,sections:[{type:Z.text,sectionTitle:`Summary`,text:`Overall project health is good. Most metrics are within acceptable ranges, though a few areas require attention.`},{type:Z.markdown,sectionTitle:`Key Findings`,markdown:[`### Strengths`,``,`- **Code coverage** has improved from 72% to 89% over the past quarter.`,`- Build times remain under 3 minutes for the full suite.`,`- Zero critical vulnerabilities in the latest dependency audit.`,``,`### Areas for Improvement`,``,`1. Documentation coverage for public APIs is at 64%.`,`2. Integration test flakiness has risen to 4.2%.`,`3. Bundle size has grown 18% since the last review.`].join(`
`)},{type:Z.table,sectionTitle:`Module Metrics`,direction:TK.Horizontal,headers:[{key:`module`},{key:`coverage`},{key:`buildTime`},{key:`status`}],entries:[{data:{module:{type:Z.text,text:`Core`},coverage:{type:Z.inlineCode,code:`94%`},buildTime:{type:Z.text,text:`42s`},status:{type:Z.tag,text:`Healthy`,color:{variant:K.Positive}}}},{data:{module:{type:Z.text,text:`Rendering`},coverage:{type:Z.inlineCode,code:`88%`},buildTime:{type:Z.text,text:`28s`},status:{type:Z.tag,text:`Healthy`,color:{variant:K.Positive}}}},{data:{module:{type:Z.text,text:`Data Layer`},coverage:{type:Z.inlineCode,code:`71%`},buildTime:{type:Z.text,text:`1m 14s`},status:{type:Z.tag,text:`Needs Attention`,color:{variant:K.Warning}}}},{data:{module:{type:Z.text,text:`CLI Tools`},coverage:{type:Z.inlineCode,code:`82%`},buildTime:{type:Z.text,text:`19s`},status:{type:Z.tag,text:`Healthy`,color:{variant:K.Positive}}}}]},{type:Z.codeBlock,sectionTitle:`Sample Config`,syntax:`json`,code:JSON.stringify({project:`structured-render`,coverageThreshold:80,maxBuildTimeSeconds:180,modules:[`core`,`rendering`,`data-layer`,`cli-tools`]},null,4)},{type:Z.list,sectionTitle:`Action Items`,items:[{content:{type:Z.text,text:`Increase data layer test coverage to 80%.`},icon:{type:Z.icon,iconKey:jI.name,strokeColor:`orange`}},{content:{type:Z.text,text:`Investigate and fix flaky integration tests.`},icon:{type:Z.icon,iconKey:jI.name,strokeColor:`orange`}},{content:{type:Z.text,text:`Audit bundle size and remove unused dependencies.`}},{content:{type:Z.text,text:`Add missing JSDoc to public API functions.`}},{content:{type:Z.text,text:`Schedule quarterly security review.`},icon:{type:Z.icon,iconKey:kI.name,strokeColor:`green`}}]},{type:Z.text,sectionTitle:`Next Review`,text:`Scheduled for Q3 2026.`,style:yK.Faint}]}]})}></${Q}>
                `}})}}),Iq=gu({title:`No Card Styles`,parent:vU,descriptionParagraphs:[`Cards rendered without card wrapper styles. Cards stack flush with thin borders between them.`],defineExamples({defineExample:e}){e({title:`flat card list`,styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return B`
                    <${Q.assign({data:Aq})}></${Q}>
                `}})}}),Lq=gu({title:`Examples`,parent:void 0,descriptionParagraphs:[`Examples of specific functionality.`]}),Rq=gu({title:`Download and Print`,parent:Lq,descriptionParagraphs:[`Demonstrates downloading and printing structured render data as a PDF.`],defineExamples({defineExample:e}){e({title:`print`,state(){return{isLoading:!1,isError:!1}},render({state:e,updateState:t}){return B`
                    <${zI.assign({text:`Print`,isDisabled:e.isLoading,icon:e.isError?DI:e.isLoading?uI:void 0})}
                        ${xN(`click`,async()=>{t({isLoading:!0});try{await kq(Aq)}catch(e){wl.error(`Failed to print PDF`,e),t({isError:!0})}finally{t({isLoading:!1})}})}
                    ></${zI}>
                `}}),e({title:`download`,state(){return{isLoading:!1,isError:!1}},render({state:e,updateState:t}){return B`
                    <${zI.assign({text:`Download`,isDisabled:e.isLoading,icon:e.isError?DI:e.isLoading?uI:void 0})}
                        ${xN(`click`,async()=>{t({isLoading:!0});try{await Oq(Aq,{fileName:`structured-render-download`})}catch(e){wl.error(`Failed to download PDF`,e),t({isError:!0})}finally{t({isLoading:!1})}})}
                    ></${zI}>
                `}})}}),zq=[{cardTitle:`Example Structured Render`,sections:[{type:Z.text,sectionTitle:`Overview`,text:`This is an example of structured render data with multiple section types.`},{type:Z.markdown,sectionTitle:`Features`,markdown:`## Highlights

- **Fast** rendering
- Supports multiple output formats
- Flexible section composition`},{type:Z.codeBlock,sectionTitle:`Code Example`,syntax:`typescript`,code:`import {renderToPdf} from "structured-render";

const pdfBytes = await renderToPdf(data);`},{type:Z.table,sectionTitle:`Comparison`,direction:TK.Horizontal,headers:[{key:`feature`},{key:`status`}],entries:[{data:{feature:{type:Z.text,text:`Image Export`},status:{type:Z.tag,text:`Supported`}}},{data:{feature:{type:Z.text,text:`PDF Export`},status:{type:Z.tag,text:`Supported`}}}]},{type:Z.list,sectionTitle:`Quick Notes`,items:[{content:{type:Z.text,text:`Runs in Node.js`},icon:{type:Z.icon,iconKey:kI.name,strokeColor:`green`}},{content:{type:Z.text,text:`Outputs PNG`,style:yK.Small}}]},{type:Z.icon,iconKey:EI.name,strokeColor:`yellow`}]}],Bq=gu({title:`Example Card Comparison`,parent:Lq,descriptionParagraphs:[`Renders exampleCard for visual comparison against the PDF screenshot test output.`],defineExamples({defineExample:e}){e({title:`exampleCard`,styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return B`
                    <${Q.assign({data:zq})}></${Q}>
                `}})}}),Vq=gu({title:`Expandable Source`,parent:Lq,descriptionParagraphs:[`Demonstrates VirExpandableSource, a self-contained element that renders a source icon button which expands to reveal source details.`],defineExamples({defineExample:e}){e({title:`single source`,styles:z`
                :host {
                    max-width: 400px;
                }
            `,render(){return B`
                    <${WK.assign({sources:{type:Z.source,fileName:`example.pdf`,pageNumbers:[3],fileBoundingBoxes:null,quote:`This is a quoted passage from the source document.`}})}>
                        <span>Some content with a source</span>
                    </${WK}>
                `}}),e({title:`multiple sources`,styles:z`
                :host {
                    max-width: 400px;
                }
            `,render(){return B`
                    <${WK.assign({sources:[{type:Z.source,fileName:`report.pdf`,pageNumbers:[1,2],fileBoundingBoxes:null,quote:`First source quote.`},{type:Z.source,fileName:`notes.pdf`,pageNumbers:[5],fileBoundingBoxes:null,quote:`Second source quote.`}]})}>
                        <span>Content with multiple sources</span>
                    </${WK}>
                `}}),e({title:`without quote`,styles:z`
                :host {
                    max-width: 400px;
                }
            `,render(){return B`
                    <${WK.assign({sources:{type:Z.source,fileName:`data.csv`,pageNumbers:null,fileBoundingBoxes:null,quote:null}})}>
                        <span>Content with a file-only source</span>
                    </${WK}>
                `}})}}),Hq=gu({title:`Sections`,parent:void 0,descriptionParagraphs:[`All structured render section types.`]}),Uq=[gu({title:`Code Block`,parent:Hq,defineExamples({defineExample:e}){e({title:`basic`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.codeBlock,sectionTitle:`Code Block Example`,code:`const hello = "world";
console.log(hello);`,syntax:`typescript`}})}></${Q}>
                `}}),e({title:`no syntax`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.codeBlock,code:`plain text code block
with multiple lines`,syntax:null}})}></${Q}>
                `}})}}),gu({title:`Empty`,parent:Hq,defineExamples({defineExample:e}){e({title:`empty`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.empty}})}></${Q}>
                `}})}}),gu({title:`Icon`,parent:Hq,defineExamples({defineExample:e}){e({title:`basic`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.icon,iconKey:EI.name}})}></${Q}>
                `}}),e({title:`colored stroke`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.icon,iconKey:EI.name,strokeColor:`gold`}})}></${Q}>
                `}}),e({title:`colored fill`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.icon,iconKey:kI.name,fillColor:`lime`}})}></${Q}>
                `}})}}),gu({title:`Inline Code`,parent:Hq,defineExamples({defineExample:e}){e({title:`basic`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.inlineCode,sectionTitle:`Inline Code Example`,code:`const x = 42;`}})}></${Q}>
                `}})}}),gu({title:`List`,parent:Hq,defineExamples({defineExample:e}){e({title:`basic`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.list,sectionTitle:`List Example`,items:[{content:{type:Z.text,text:`First item`}},{content:{type:Z.text,text:`Second item`}},{content:{type:Z.text,text:`Third item`}}]}})}></${Q}>
                `}}),e({title:`with icons`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.list,sectionTitle:`List with Icons`,items:[{content:{type:Z.text,text:`Completed task`},icon:{type:Z.icon,iconKey:kI.name,strokeColor:`green`}},{content:{type:Z.text,text:`Another completed task`},icon:{type:Z.icon,iconKey:kI.name,strokeColor:`green`}}]}})}></${Q}>
                `}}),e({title:`with tags`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.list,sectionTitle:`List with Tags`,items:[{content:{type:Z.tag,text:`Important`,color:{variant:K.Warning}}},{content:{type:Z.tag,text:`Info`}}]}})}></${Q}>
                `}})}}),gu({title:`Markdown`,parent:Hq,defineExamples({defineExample:e}){e({title:`basic`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.markdown,sectionTitle:`Markdown Example`,markdown:`## Hello World

This is **bold** and _italic_ text.

- Item 1
- Item 2
- Item 3`}})}></${Q}>
                `}}),e({title:`with ordered list`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.markdown,sectionTitle:`Ordered List Example`,markdown:`1. **False Positives**: Name and DOB matches may not always indicate the same patient.
2. **Data Currency**: Registry data may lag behind real-time clinical status.
3. **Legal Compliance**: Ensure all data sharing follows applicable regulations.`}})}></${Q}>
                `}}),e({title:`with code`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.markdown,sectionTitle:`Markdown with Code`,markdown:"### Code Example\n\nHere is some `inline code` and a code block:\n\n```typescript\nconst x = 42;\n```"}})}></${Q}>
                `}})}}),gu({title:`Processing`,parent:Hq,defineExamples({defineExample:e}){e({title:`basic`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.processing}})}></${Q}>
                `}})}}),gu({title:`Source`,parent:Hq,defineExamples({defineExample:e}){e({title:`with file name`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.source,fileName:`example.ts`,pageNumbers:null,fileBoundingBoxes:null,quote:null}})}></${Q}>
                `}}),e({title:`with quote`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.source,fileName:`document.pdf`,pageNumbers:[1,2],fileBoundingBoxes:null,quote:`This is the relevant quote from the source document.`}})}></${Q}>
                `}}),e({title:`with page numbers`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.source,fileName:`report.pdf`,pageNumbers:[5,10,15],fileBoundingBoxes:null,quote:null}})}></${Q}>
                `}})}}),gu({title:`Table`,parent:Hq,defineExamples({defineExample:e}){e({title:`horizontal`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.table,sectionTitle:`Horizontal Table`,direction:TK.Horizontal,headers:[{key:`name`},{key:`value`}],entries:[{data:{name:{type:Z.text,text:`Alpha`},value:{type:Z.text,text:`100`}}},{data:{name:{type:Z.text,text:`Beta`},value:{type:Z.text,text:`200`}}}]}})}></${Q}>
                `}}),e({title:`vertical`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.table,sectionTitle:`Vertical Table`,direction:TK.Vertical,headers:[{key:`feature`},{key:`status`}],entries:[{data:{feature:{type:Z.text,text:`Image Export`},status:{type:Z.tag,text:`Supported`}}},{data:{feature:{type:Z.text,text:`PDF Export`},status:{type:Z.tag,text:`Beta`}}}]}})}></${Q}>
                `}}),e({title:`horizontal table with phone size`,render(){return B`
                    <div
                        style=${z`
                            width: 400px;
                        `}
                    >
                        <${Q.assign({data:{type:Z.table,sectionTitle:`Horizontal Table (Phone)`,direction:TK.Horizontal,headers:[{key:`name`},{key:`value`},{key:`status`}],entries:[{data:{name:{type:Z.text,text:`Alpha`},value:{type:Z.text,text:`100`},status:{type:Z.tag,text:`Active`,color:{variant:K.Positive}}}},{data:{name:{type:Z.text,text:`Beta`},value:{type:Z.text,text:`200`},status:{type:Z.tag,text:`Inactive`,color:{variant:K.Warning}}}}]},options:{useCardStyles:!0,isPhoneSize:!0,useDrawerForSources:!0}})}></${Q}>
                    </div>
                `}}),e({title:`with mixed cell types`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.table,sectionTitle:`Mixed Cell Types`,direction:TK.Horizontal,headers:[{key:`label`},{key:`detail`}],entries:[{data:{label:{type:Z.text,text:`Status`},detail:{type:Z.tag,text:`Active`,color:{variant:K.Positive}}}},{data:{label:{type:Z.text,text:`Version`},detail:{type:Z.inlineCode,code:`v1.0.0`}}}]}})}></${Q}>
                `}})}}),gu({title:`Tag`,parent:Hq,defineExamples({defineExample:e}){e({title:`basic`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.tag,sectionTitle:`Tag Example`,text:`Default Tag`}})}></${Q}>
                `}}),e({title:`custom colors`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.tag,text:`Custom Colors`,color:{custom:{backgroundColor:`#e74c3c`,foregroundColor:`#ffffff`}}}})}></${Q}>
                `}}),e({title:`big tag`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.tag,text:`Big Tag`,useBigTag:!0}})}></${Q}>
                `}})}}),gu({title:`Text`,parent:Hq,defineExamples({defineExample:e}){e({title:`basic`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.text,sectionTitle:`Text Example`,text:`This is a simple text section.`}})}></${Q}>
                `}}),e({title:`bold`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.text,text:`Bold text section.`,style:yK.Bold}})}></${Q}>
                `}}),e({title:`small`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.text,text:`Small text section.`,style:yK.Small}})}></${Q}>
                `}}),e({title:`faint`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.text,text:`Faint text section.`,style:yK.Faint}})}></${Q}>
                `}}),e({title:`with icon`,render(){return B`
                    <${Q.assign({options:{useCardStyles:!0},data:{type:Z.text,text:`Text with icon.`,icon:{type:Z.icon,iconKey:EI.name,strokeColor:`gold`}}})}></${Q}>
                `}})}}),Fq,jq,Nq,Mq,Pq,Iq,Rq,Bq,Vq,vU,Lq,Hq];lN()({tagName:`vir-app`,styles:z`
        :host {
            display: flex;
            flex-grow: 1;
        }

        ${_U} {
            flex-grow: 1;
        }

        p {
            ${TP}
            text-align: center;
            font-size: 32px;
            font-weight: bold;
            padding: 0 8px;
            padding-bottom: 8px;
        }
    `,render(){return B`
            <${_U.assign({pages:Uq,internalRouterConfig:{useInternalRouter:!0,basePath:`structured-render/demo`}})}>
                <p slot=${_U.slotNames.navHeader}>Structured<br>Render</p>
            </${_U}>
        `}});