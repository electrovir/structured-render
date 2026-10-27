const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/es-Dplog-HW.js","assets/rolldown-runtime-XKyaHtl9.js","assets/src-BZzKOBl9.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,t as n}from"./rolldown-runtime-XKyaHtl9.js";import{a as r,i,n as a,r as o,t as s}from"./src-BZzKOBl9.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var c;(function(e){e.ElementExample=`element-example`,e.Page=`page`,e.Root=`root`})(c||={});function l(e,t=e=>e){let n=new Map;return e.filter(e=>{let r=t(e);return!n.get(r)&&(n.set(r,e),!0)})}var u=class{diff(e,t,n={}){let r;typeof n==`function`?(r=n,n={}):`callback`in n&&(r=n.callback);let i=this.castInput(e,n),a=this.castInput(t,n),o=this.removeEmpty(this.tokenize(i,n)),s=this.removeEmpty(this.tokenize(a,n));return this.diffWithOptionsObj(o,s,n,r)}diffWithOptionsObj(e,t,n,r){let i=e=>{if(e=this.postProcess(e,n),r)setTimeout(function(){r(e)},0);else return e},a=t.length,o=e.length,s=1,c=a+o;n.maxEditLength!=null&&(c=Math.min(c,n.maxEditLength));let l=n.timeout??1/0,u=Date.now()+l,d=[{oldPos:-1,lastComponent:void 0}],f=this.extractCommon(d[0],t,e,0,n);if(d[0].oldPos+1>=o&&f+1>=a)return i(this.buildValues(d[0].lastComponent,t,e));let p=-1/0,m=1/0,h=()=>{for(let r=Math.max(p,-s);r<=Math.min(m,s);r+=2){let s,c=d[r-1],l=d[r+1];c&&(d[r-1]=void 0);let u=!1;if(l){let e=l.oldPos-r;u=l&&0<=e&&e<a}let h=c&&c.oldPos+1<o;if(!u&&!h)d[r]=void 0;else{if(s=!h||u&&c.oldPos<l.oldPos?this.addToPath(l,!0,!1,0,n):this.addToPath(c,!1,!0,1,n),f=this.extractCommon(s,t,e,r,n),s.oldPos+1>=o&&f+1>=a)return i(this.buildValues(s.lastComponent,t,e))||!0;d[r]=s,s.oldPos+1>=o&&(m=Math.min(m,r-1)),f+1>=a&&(p=Math.max(p,r+1))}}s++};if(r)(function e(){setTimeout(function(){if(s>c||Date.now()>u)return r(void 0);h()||e()},0)})();else for(;s<=c&&Date.now()<=u;){let e=h();if(e)return e}}addToPath(e,t,n,r,i){let a=e.lastComponent;return a&&!i.oneChangePerToken&&a.added===t&&a.removed===n?{oldPos:e.oldPos+r,lastComponent:{count:a.count+1,added:t,removed:n,previousComponent:a.previousComponent}}:{oldPos:e.oldPos+r,lastComponent:{count:1,added:t,removed:n,previousComponent:a}}}extractCommon(e,t,n,r,i){let a=t.length,o=n.length,s=e.oldPos,c=s-r,l=0;for(;c+1<a&&s+1<o&&this.equals(n[s+1],t[c+1],i);)c++,s++,l++,i.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return l&&!i.oneChangePerToken&&(e.lastComponent={count:l,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=s,c}equals(e,t,n){return n.comparator?n.comparator(e,t):e===t||!!n.ignoreCase&&e.toLowerCase()===t.toLowerCase()}removeEmpty(e){let t=[];for(let n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}castInput(e,t){return e}tokenize(e,t){return Array.from(e)}join(e){return e.join(``)}postProcess(e,t){return e}get useLongestToken(){return!1}buildValues(e,t,n){let r=[],i;for(;e;)r.push(e),i=e.previousComponent,delete e.previousComponent,e=i;r.reverse();let a=r.length,o=0,s=0,c=0;for(;o<a;o++){let e=r[o];if(e.removed)e.value=this.join(n.slice(c,c+e.count)),c+=e.count;else{if(!e.added&&this.useLongestToken){let r=t.slice(s,s+e.count);r=r.map(function(e,t){let r=n[c+t];return r.length>e.length?r:e}),e.value=this.join(r)}else e.value=this.join(t.slice(s,s+e.count));s+=e.count,e.added||(c+=e.count)}}return r}};new class extends u{};function d(e,t){let n=0;for(;n<e.length&&n<t.length;n++)if(e[n]!=t[n])return e.slice(0,n);return e.slice(0,n)}function f(e,t){let n;if(!e||!t||e[e.length-1]!=t[t.length-1])return``;for(n=0;n<e.length&&n<t.length;n++)if(e[e.length-(n+1)]!=t[t.length-(n+1)])return e.slice(-n);return e.slice(-n)}function p(e,t,n){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return n+e.slice(t.length)}function m(e,t,n){if(!t)return e+n;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+n}function h(e,t){return p(e,t,``)}function g(e,t){return m(e,t,``)}function _(e,t){return t.slice(0,ee(e,t))}function ee(e,t){let n=0;e.length>t.length&&(n=e.length-t.length);let r=t.length;e.length<t.length&&(r=e.length);let i=Array(r),a=0;i[0]=0;for(let e=1;e<r;e++){for(t[e]==t[a]?i[e]=i[a]:i[e]=a;a>0&&t[e]!=t[a];)a=i[a];t[e]==t[a]&&a++}a=0;for(let r=n;r<e.length;r++){for(;a>0&&e[r]!=t[a];)a=i[a];e[r]==t[a]&&a++}return a}function te(e,t){let n=[];for(let r of Array.from(t.segment(e))){let e=r.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(e)?n[n.length-1]+=e:n.push(e)}return n}function ne(e,t){if(t)return ie(e,t)[1];let n;for(n=e.length-1;n>=0&&e[n].match(/\s/);n--);return e.substring(n+1)}function re(e,t){if(t)return ie(e,t)[0];let n=e.match(/^\s*/);return n?n[0]:``}function ie(e,t){if(!t)return[re(e),ne(e)];if(t.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);let n=te(e,t),r=n[0],i=n[n.length-1];return[/\s/.test(r)?r:``,/\s/.test(i)?i:``]}var ae=`a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}`,oe=RegExp(`[${ae}]+|\\s+|[^${ae}]`,`ug`),se=new class extends u{equals(e,t,n){return n.ignoreCase&&(e=e.toLowerCase(),t=t.toLowerCase()),e.trim()===t.trim()}tokenize(e,t={}){let n;if(t.intlSegmenter){let r=t.intlSegmenter;if(r.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);n=te(e,r)}else n=e.match(oe)||[];let r=[],i=null;return n.forEach(e=>{/\s/.test(e)?i==null?r.push(e):r.push(r.pop()+e):i!=null&&/\s/.test(i)?r[r.length-1]==i?r.push(r.pop()+e):r.push(i+e):r.push(e),i=e}),r}join(e){return e.map((e,t)=>t==0?e:e.replace(/^\s+/,``)).join(``)}postProcess(e,t){if(!e||t.oneChangePerToken)return e;let n=null,r=null,i=null;return e.forEach(e=>{e.added?r=e:e.removed?i=e:((r||i)&&le(n,i,r,e,t.intlSegmenter),n=e,r=null,i=null)}),(r||i)&&le(n,i,r,null,t.intlSegmenter),e}};function ce(e,t,n){return n?.ignoreWhitespace!=null&&!n.ignoreWhitespace?de(e,t,n):se.diff(e,t,n)}function le(e,t,n,r,i){if(t&&n){let[a,o]=ie(t.value,i),[s,c]=ie(n.value,i);if(e){let r=d(a,s);e.value=m(e.value,s,r),t.value=h(t.value,r),n.value=h(n.value,r)}if(r){let e=f(o,c);r.value=p(r.value,c,e),t.value=g(t.value,e),n.value=g(n.value,e)}}else if(n){if(e){let e=re(n.value,i);n.value=n.value.substring(e.length)}if(r){let e=re(r.value,i);r.value=r.value.substring(e.length)}}else if(e&&r){let n=re(r.value,i),[a,o]=ie(t.value,i),s=d(n,a);t.value=h(t.value,s);let c=f(h(n,s),o);t.value=g(t.value,c),r.value=p(r.value,n,c),e.value=m(e.value,n,n.slice(0,n.length-c.length))}else if(r){let e=re(r.value,i),n=_(ne(t.value,i),e);t.value=g(t.value,n)}else if(e){let n=_(ne(e.value,i),re(t.value,i));t.value=h(t.value,n)}}var ue=new class extends u{tokenize(e){let t=RegExp(`(\\r?\\n)|[${ae}]+|[^\\S\\n\\r]+|[^${ae}]`,`ug`);return e.match(t)||[]}};function de(e,t,n){return ue.diff(e,t,n)}var fe=new class extends u{constructor(){super(...arguments),this.tokenize=me}equals(e,t,n){return n.ignoreWhitespace?(n.newlineIsToken&&e.includes(`
`)||(e=e.trim()),n.newlineIsToken&&t.includes(`
`)||(t=t.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(e.endsWith(`
`)&&(e=e.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(e,t,n)}};function pe(e,t,n){return fe.diff(e,t,n)}function me(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));let n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let e=0;e<r.length;e++){let i=r[e];e%2&&!t.newlineIsToken?n[n.length-1]+=i:n.push(i)}return n}function he(e){return e==`.`||e==`!`||e==`?`}new class extends u{tokenize(e){let t=[],n=0;for(let r=0;r<e.length;r++){if(r==e.length-1){t.push(e.slice(n));break}if(he(e[r])&&e[r+1].match(/\s/)){for(t.push(e.slice(n,r+1)),r=n=r+1;e[r+1]?.match(/\s/);)r++;t.push(e.slice(n,r+1)),n=r+1}}return t}},new class extends u{tokenize(e){return e.split(/([{}:;,]|\s+)/)}},new class extends u{constructor(){super(...arguments),this.tokenize=me}get useLongestToken(){return!0}castInput(e,t){let{undefinedReplacement:n,stringifyReplacer:r=(e,t)=>t===void 0?n:t}=t;return typeof e==`string`?e:JSON.stringify(ge(e,null,null,r),null,`  `)}equals(e,t,n){return super.equals(e.replace(/,([\r\n])/g,`$1`),t.replace(/,([\r\n])/g,`$1`),n)}};function ge(e,t,n,r,i){t||=[],n||=[],r&&(e=r(i===void 0?``:i,e));let a=0;for(;a<t.length;a+=1)if(t[a]===e)return n[a];let o;if(Object.prototype.toString.call(e)===`[object Array]`){for(t.push(e),o=Array(e.length),n.push(o),a=0;a<e.length;a+=1)o[a]=ge(e[a],t,n,r,String(a));return t.pop(),n.pop(),o}if(e&&e.toJSON&&(e=e.toJSON()),typeof e==`object`&&e){t.push(e),o={},n.push(o);let i=[],s;for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&i.push(s);for(i.sort(),a=0;a<i.length;a+=1)s=i[a],o[s]=ge(e[s],t,n,r,s);t.pop(),n.pop()}else o=e;return o}new class extends u{tokenize(e){return e.slice()}join(e){return e}removeEmpty(e){return e}};function _e(e,t){return v(e,new Map,t)}function v(e,t,n){if(e&&typeof e==`object`&&!Array.isArray(e)&&e.constructor===Object){if(t.has(e))return t.get(e);let r={};return t.set(e,r),Object.entries(e).sort((e,t)=>n?n({key:e[0],value:e[1]},{key:t[0],value:t[1]}):e[0].localeCompare(t[0])).forEach(([e,i])=>{let a=v(i,t,n);r[e]=a}),r}return e}var ve=t(n(((e,t,n)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):n.JSON5=r()})(n,(function(){function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}var t=e(function(e){var t=e.exports=typeof window<`u`&&window.Math==Math?window:typeof self<`u`&&self.Math==Math?self:Function(`return this`)();typeof __g==`number`&&(__g=t)}),n=e(function(e){var t=e.exports={version:`2.6.5`};typeof __e==`number`&&(__e=t)});n.version;var r=function(e){return typeof e==`object`?e!==null:typeof e==`function`},i=function(e){if(!r(e))throw TypeError(e+` is not an object!`);return e},a=function(e){try{return!!e()}catch{return!0}},o=!a(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7}),s=t.document,c=r(s)&&r(s.createElement),l=function(e){return c?s.createElement(e):{}},u=!o&&!a(function(){return Object.defineProperty(l(`div`),"a",{get:function(){return 7}}).a!=7}),d=function(e,t){if(!r(e))return e;var n,i;if(t&&typeof(n=e.toString)==`function`&&!r(i=n.call(e))||typeof(n=e.valueOf)==`function`&&!r(i=n.call(e))||!t&&typeof(n=e.toString)==`function`&&!r(i=n.call(e)))return i;throw TypeError(`Can't convert object to primitive value`)},f=Object.defineProperty,p={f:o?Object.defineProperty:function(e,t,n){if(i(e),t=d(t,!0),i(n),u)try{return f(e,t,n)}catch{}if(`get`in n||`set`in n)throw TypeError(`Accessors not supported!`);return`value`in n&&(e[t]=n.value),e}},m=function(e,t){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:t}},h=o?function(e,t,n){return p.f(e,t,m(1,n))}:function(e,t,n){return e[t]=n,e},g={}.hasOwnProperty,_=function(e,t){return g.call(e,t)},ee=0,te=Math.random(),ne=function(e){return`Symbol(${e===void 0?``:e})_${(++ee+te).toString(36)}`},re=e(function(e){var r=`__core-js_shared__`,i=t[r]||(t[r]={});(e.exports=function(e,t){return i[e]||(i[e]=t===void 0?{}:t)})(`versions`,[]).push({version:n.version,mode:`global`,copyright:`© 2019 Denis Pushkarev (zloirock.ru)`})})(`native-function-to-string`,Function.toString),ie=e(function(e){var r=ne(`src`),i=`toString`,a=(``+re).split(i);n.inspectSource=function(e){return re.call(e)},(e.exports=function(e,n,i,o){var s=typeof i==`function`;s&&(_(i,`name`)||h(i,`name`,n)),e[n]!==i&&(s&&(_(i,r)||h(i,r,e[n]?``+e[n]:a.join(String(n)))),e===t?e[n]=i:o?e[n]?e[n]=i:h(e,n,i):(delete e[n],h(e,n,i)))})(Function.prototype,i,function(){return typeof this==`function`&&this[r]||re.call(this)})}),ae=function(e){if(typeof e!=`function`)throw TypeError(e+` is not a function!`);return e},oe=function(e,t,n){if(ae(e),t===void 0)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}},se=`prototype`,ce=function(e,r,i){var a=e&ce.F,o=e&ce.G,s=e&ce.S,c=e&ce.P,l=e&ce.B,u=o?t:s?t[r]||(t[r]={}):(t[r]||{})[se],d=o?n:n[r]||(n[r]={}),f=d[se]||(d[se]={}),p,m,g,_;for(p in o&&(i=r),i)m=!a&&u&&u[p]!==void 0,g=(m?u:i)[p],_=l&&m?oe(g,t):c&&typeof g==`function`?oe(Function.call,g):g,u&&ie(u,p,g,e&ce.U),d[p]!=g&&h(d,p,_),c&&f[p]!=g&&(f[p]=g)};t.core=n,ce.F=1,ce.G=2,ce.S=4,ce.P=8,ce.B=16,ce.W=32,ce.U=64,ce.R=128;var le=ce,ue=Math.ceil,de=Math.floor,fe=function(e){return isNaN(e=+e)?0:(e>0?de:ue)(e)},pe=function(e){if(e==null)throw TypeError(`Can't call method on  `+e);return e},me=function(e){return function(e,t){var n=String(pe(e)),r=fe(t),i=n.length,a,o;return r<0||r>=i?void 0:(a=n.charCodeAt(r),a<55296||a>56319||r+1===i||(o=n.charCodeAt(r+1))<56320||o>57343?a:(a-55296<<10)+(o-56320)+65536)}}(!1);le(le.P,`String`,{codePointAt:function(e){return me(this,e)}}),n.String.codePointAt;var he=Math.max,ge=Math.min,_e=function(e,t){return e=fe(e),e<0?he(e+t,0):ge(e,t)},v=String.fromCharCode,ve=String.fromCodePoint;le(le.S+le.F*(!!ve&&ve.length!=1),`String`,{fromCodePoint:function(e){for(var t=arguments,n=[],r=arguments.length,i=0,a;r>i;){if(a=+t[i++],_e(a,1114111)!==a)throw RangeError(a+` is not a valid code point`);n.push(a<65536?v(a):v(((a-=65536)>>10)+55296,a%1024+56320))}return n.join(``)}}),n.String.fromCodePoint;var ye={Space_Separator:/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,ID_Start:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,ID_Continue:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/},be={isSpaceSeparator:function(e){return typeof e==`string`&&ye.Space_Separator.test(e)},isIdStartChar:function(e){return typeof e==`string`&&(e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e===`$`||e===`_`||ye.ID_Start.test(e))},isIdContinueChar:function(e){return typeof e==`string`&&(e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e>=`0`&&e<=`9`||e===`$`||e===`_`||e===`‌`||e===`‍`||ye.ID_Continue.test(e))},isDigit:function(e){return typeof e==`string`&&/[0-9]/.test(e)},isHexDigit:function(e){return typeof e==`string`&&/[0-9A-Fa-f]/.test(e)}},y,xe,b,Se,Ce,we,Te,Ee,De,Oe=function(e,t){y=String(e),xe=`start`,b=[],Se=0,Ce=1,we=0,Te=void 0,Ee=void 0,De=void 0;do Te=Pe(),ze[xe]();while(Te.type!==`eof`);return typeof t==`function`?ke({"":De},``,t):De};function ke(e,t,n){var r=e[t];if(typeof r==`object`&&r){if(Array.isArray(r))for(var i=0;i<r.length;i++){var a=String(i),o=ke(r,a,n);o===void 0?delete r[a]:Object.defineProperty(r,a,{value:o,writable:!0,enumerable:!0,configurable:!0})}else for(var s in r){var c=ke(r,s,n);c===void 0?delete r[s]:Object.defineProperty(r,s,{value:c,writable:!0,enumerable:!0,configurable:!0})}}return n.call(e,t,r)}var Ae,x,je,Me,Ne;function Pe(){for(Ae=`default`,x=``,je=!1,Me=1;;){Ne=Fe();var e=Ie[Ae]();if(e)return e}}function Fe(){if(y[Se])return String.fromCodePoint(y.codePointAt(Se))}function S(){var e=Fe();return e===`
`?(Ce++,we=0):e?we+=e.length:we++,e&&(Se+=e.length),e}var Ie={default:function(){switch(Ne){case`	`:case`\v`:case`\f`:case` `:case`\xA0`:case`﻿`:case`
`:case`\r`:case`\u2028`:case`\u2029`:S();return;case`/`:S(),Ae=`comment`;return;case void 0:return S(),C(`eof`)}if(be.isSpaceSeparator(Ne))S();else return Ie[xe]()},comment:function(){switch(Ne){case`*`:S(),Ae=`multiLineComment`;return;case`/`:S(),Ae=`singleLineComment`;return}throw He(S())},multiLineComment:function(){switch(Ne){case`*`:S(),Ae=`multiLineCommentAsterisk`;return;case void 0:throw He(S())}S()},multiLineCommentAsterisk:function(){switch(Ne){case`*`:S();return;case`/`:S(),Ae=`default`;return;case void 0:throw He(S())}S(),Ae=`multiLineComment`},singleLineComment:function(){switch(Ne){case`
`:case`\r`:case`\u2028`:case`\u2029`:S(),Ae=`default`;return;case void 0:return S(),C(`eof`)}S()},value:function(){switch(Ne){case`{`:case`[`:return C(`punctuator`,S());case`n`:return S(),Le(`ull`),C(`null`,null);case`t`:return S(),Le(`rue`),C(`boolean`,!0);case`f`:return S(),Le(`alse`),C(`boolean`,!1);case`-`:case`+`:S()===`-`&&(Me=-1),Ae=`sign`;return;case`.`:x=S(),Ae=`decimalPointLeading`;return;case`0`:x=S(),Ae=`zero`;return;case`1`:case`2`:case`3`:case`4`:case`5`:case`6`:case`7`:case`8`:case`9`:x=S(),Ae=`decimalInteger`;return;case`I`:return S(),Le(`nfinity`),C(`numeric`,1/0);case`N`:return S(),Le(`aN`),C(`numeric`,NaN);case`"`:case`'`:je=S()===`"`,x=``,Ae=`string`;return}throw He(S())},identifierNameStartEscape:function(){if(Ne!==`u`)throw He(S());S();var e=Re();switch(e){case`$`:case`_`:break;default:if(!be.isIdStartChar(e))throw We()}x+=e,Ae=`identifierName`},identifierName:function(){switch(Ne){case`$`:case`_`:case`‌`:case`‍`:x+=S();return;case`\\`:S(),Ae=`identifierNameEscape`;return}if(be.isIdContinueChar(Ne))x+=S();else return C(`identifier`,x)},identifierNameEscape:function(){if(Ne!==`u`)throw He(S());S();var e=Re();switch(e){case`$`:case`_`:case`‌`:case`‍`:break;default:if(!be.isIdContinueChar(e))throw We()}x+=e,Ae=`identifierName`},sign:function(){switch(Ne){case`.`:x=S(),Ae=`decimalPointLeading`;return;case`0`:x=S(),Ae=`zero`;return;case`1`:case`2`:case`3`:case`4`:case`5`:case`6`:case`7`:case`8`:case`9`:x=S(),Ae=`decimalInteger`;return;case`I`:return S(),Le(`nfinity`),C(`numeric`,Me*(1/0));case`N`:return S(),Le(`aN`),C(`numeric`,NaN)}throw He(S())},zero:function(){switch(Ne){case`.`:x+=S(),Ae=`decimalPoint`;return;case`e`:case`E`:x+=S(),Ae=`decimalExponent`;return;case`x`:case`X`:x+=S(),Ae=`hexadecimal`;return}return C(`numeric`,Me*0)},decimalInteger:function(){switch(Ne){case`.`:x+=S(),Ae=`decimalPoint`;return;case`e`:case`E`:x+=S(),Ae=`decimalExponent`;return}if(be.isDigit(Ne))x+=S();else return C(`numeric`,Me*Number(x))},decimalPointLeading:function(){if(be.isDigit(Ne))x+=S(),Ae=`decimalFraction`;else throw He(S())},decimalPoint:function(){switch(Ne){case`e`:case`E`:x+=S(),Ae=`decimalExponent`;return}if(be.isDigit(Ne))x+=S(),Ae=`decimalFraction`;else return C(`numeric`,Me*Number(x))},decimalFraction:function(){switch(Ne){case`e`:case`E`:x+=S(),Ae=`decimalExponent`;return}if(be.isDigit(Ne))x+=S();else return C(`numeric`,Me*Number(x))},decimalExponent:function(){switch(Ne){case`+`:case`-`:x+=S(),Ae=`decimalExponentSign`;return}if(be.isDigit(Ne))x+=S(),Ae=`decimalExponentInteger`;else throw He(S())},decimalExponentSign:function(){if(be.isDigit(Ne))x+=S(),Ae=`decimalExponentInteger`;else throw He(S())},decimalExponentInteger:function(){if(be.isDigit(Ne))x+=S();else return C(`numeric`,Me*Number(x))},hexadecimal:function(){if(be.isHexDigit(Ne))x+=S(),Ae=`hexadecimalInteger`;else throw He(S())},hexadecimalInteger:function(){if(be.isHexDigit(Ne))x+=S();else return C(`numeric`,Me*Number(x))},string:function(){switch(Ne){case`\\`:S(),x+=w();return;case`"`:if(je)return S(),C(`string`,x);x+=S();return;case`'`:if(!je)return S(),C(`string`,x);x+=S();return;case`
`:case`\r`:throw He(S());case`\u2028`:case`\u2029`:Ge(Ne);break;case void 0:throw He(S())}x+=S()},start:function(){switch(Ne){case`{`:case`[`:return C(`punctuator`,S())}Ae=`value`},beforePropertyName:function(){switch(Ne){case`$`:case`_`:x=S(),Ae=`identifierName`;return;case`\\`:S(),Ae=`identifierNameStartEscape`;return;case`}`:return C(`punctuator`,S());case`"`:case`'`:je=S()===`"`,Ae=`string`;return}if(be.isIdStartChar(Ne))x+=S(),Ae=`identifierName`;else throw He(S())},afterPropertyName:function(){if(Ne===`:`)return C(`punctuator`,S());throw He(S())},beforePropertyValue:function(){Ae=`value`},afterPropertyValue:function(){switch(Ne){case`,`:case`}`:return C(`punctuator`,S())}throw He(S())},beforeArrayValue:function(){if(Ne===`]`)return C(`punctuator`,S());Ae=`value`},afterArrayValue:function(){switch(Ne){case`,`:case`]`:return C(`punctuator`,S())}throw He(S())},end:function(){throw He(S())}};function C(e,t){return{type:e,value:t,line:Ce,column:we}}function Le(e){for(var t=0,n=e;t<n.length;t+=1){var r=n[t];if(Fe()!==r)throw He(S());S()}}function w(){switch(Fe()){case`b`:return S(),`\b`;case`f`:return S(),`\f`;case`n`:return S(),`
`;case`r`:return S(),`\r`;case`t`:return S(),`	`;case`v`:return S(),`\v`;case`0`:if(S(),be.isDigit(Fe()))throw He(S());return`\0`;case`x`:return S(),T();case`u`:return S(),Re();case`
`:case`\u2028`:case`\u2029`:return S(),``;case`\r`:return S(),Fe()===`
`&&S(),``;case`1`:case`2`:case`3`:case`4`:case`5`:case`6`:case`7`:case`8`:case`9`:throw He(S());case void 0:throw He(S())}return S()}function T(){var e=``,t=Fe();if(!be.isHexDigit(t)||(e+=S(),t=Fe(),!be.isHexDigit(t)))throw He(S());return e+=S(),String.fromCodePoint(parseInt(e,16))}function Re(){for(var e=``,t=4;t-->0;){var n=Fe();if(!be.isHexDigit(n))throw He(S());e+=S()}return String.fromCodePoint(parseInt(e,16))}var ze={start:function(){if(Te.type===`eof`)throw Ue();Be()},beforePropertyName:function(){switch(Te.type){case`identifier`:case`string`:Ee=Te.value,xe=`afterPropertyName`;return;case`punctuator`:Ve();return;case`eof`:throw Ue()}},afterPropertyName:function(){if(Te.type===`eof`)throw Ue();xe=`beforePropertyValue`},beforePropertyValue:function(){if(Te.type===`eof`)throw Ue();Be()},beforeArrayValue:function(){if(Te.type===`eof`)throw Ue();Te.type===`punctuator`&&Te.value===`]`?Ve():Be()},afterPropertyValue:function(){if(Te.type===`eof`)throw Ue();switch(Te.value){case`,`:xe=`beforePropertyName`;return;case`}`:Ve()}},afterArrayValue:function(){if(Te.type===`eof`)throw Ue();switch(Te.value){case`,`:xe=`beforeArrayValue`;return;case`]`:Ve()}},end:function(){}};function Be(){var e;switch(Te.type){case`punctuator`:switch(Te.value){case`{`:e={};break;case`[`:e=[]}break;case`null`:case`boolean`:case`numeric`:case`string`:e=Te.value}if(De===void 0)De=e;else{var t=b[b.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,Ee,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(typeof e==`object`&&e)b.push(e),xe=Array.isArray(e)?`beforeArrayValue`:`beforePropertyName`;else{var n=b[b.length-1];xe=n==null?`end`:Array.isArray(n)?`afterArrayValue`:`afterPropertyValue`}}function Ve(){b.pop();var e=b[b.length-1];xe=e==null?`end`:Array.isArray(e)?`afterArrayValue`:`afterPropertyValue`}function He(e){return qe(e===void 0?`JSON5: invalid end of input at `+Ce+`:`+we:`JSON5: invalid character '`+Ke(e)+`' at `+Ce+`:`+we)}function Ue(){return qe(`JSON5: invalid end of input at `+Ce+`:`+we)}function We(){return we-=5,qe(`JSON5: invalid identifier character at `+Ce+`:`+we)}function Ge(e){console.warn(`JSON5: '`+Ke(e)+`' in strings is not valid ECMAScript; consider escaping`)}function Ke(e){var t={"'":`\\'`,'"':`\\"`,"\\":`\\\\`,"\b":`\\b`,"\f":`\\f`,"\n":`\\n`,"\r":`\\r`,"	":`\\t`,"\v":`\\v`,"\0":`\\0`,"\u2028":`\\u2028`,"\u2029":`\\u2029`};if(t[e])return t[e];if(e<` `){var n=e.charCodeAt(0).toString(16);return`\\x`+(`00`+n).substring(n.length)}return e}function qe(e){var t=SyntaxError(e);return t.lineNumber=Ce,t.columnNumber=we,t}return{parse:Oe,stringify:function(e,t,n){var r=[],i=``,a,o,s=``,c;if(typeof t==`object`&&t&&!Array.isArray(t)&&(n=t.space,c=t.quote,t=t.replacer),typeof t==`function`)o=t;else if(Array.isArray(t)){a=[];for(var l=0,u=t;l<u.length;l+=1){var d=u[l],f=void 0;typeof d==`string`?f=d:(typeof d==`number`||d instanceof String||d instanceof Number)&&(f=String(d)),f!==void 0&&a.indexOf(f)<0&&a.push(f)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n==`number`?n>0&&(n=Math.min(10,Math.floor(n)),s=`          `.substr(0,n)):typeof n==`string`&&(s=n.substr(0,10)),p(``,{"":e});function p(e,t){var n=t[e];switch(n!=null&&(typeof n.toJSON5==`function`?n=n.toJSON5(e):typeof n.toJSON==`function`&&(n=n.toJSON(e))),o&&(n=o.call(t,e,n)),n instanceof Number?n=Number(n):n instanceof String?n=String(n):n instanceof Boolean&&(n=n.valueOf()),n){case null:return`null`;case!0:return`true`;case!1:return`false`}if(typeof n==`string`)return m(n,!1);if(typeof n==`number`)return String(n);if(typeof n==`object`)return Array.isArray(n)?_(n):h(n)}function m(e){for(var t={"'":.1,'"':.2},n={"'":`\\'`,'"':`\\"`,"\\":`\\\\`,"\b":`\\b`,"\f":`\\f`,"\n":`\\n`,"\r":`\\r`,"	":`\\t`,"\v":`\\v`,"\0":`\\0`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},r=``,i=0;i<e.length;i++){var a=e[i];switch(a){case`'`:case`"`:t[a]++,r+=a;continue;case`\0`:if(be.isDigit(e[i+1])){r+=`\\x00`;continue}}if(n[a])r+=n[a];else if(a<` `){var o=a.charCodeAt(0).toString(16);r+=`\\x`+(`00`+o).substring(o.length)}else r+=a}var s=c||Object.keys(t).reduce(function(e,n){return t[e]<t[n]?e:n});return r=r.replace(new RegExp(s,`g`),n[s]),s+r+s}function h(e){if(r.indexOf(e)>=0)throw TypeError(`Converting circular structure to JSON5`);r.push(e);var t=i;i+=s;for(var n=a||Object.keys(e),o=[],c=0,l=n;c<l.length;c+=1){var u=l[c],d=p(u,e);if(d!==void 0){var f=g(u)+`:`;s!==``&&(f+=` `),f+=d,o.push(f)}}var m;if(o.length===0)m=`{}`;else{var h;if(s===``)h=o.join(`,`),m=`{`+h+`}`;else{var _=`,
`+i;h=o.join(_),m=`{
`+i+h+`,
`+t+`}`}}return r.pop(),i=t,m}function g(e){if(e.length===0)return m(e,!0);var t=String.fromCodePoint(e.codePointAt(0));if(!be.isIdStartChar(t))return m(e,!0);for(var n=t.length;n<e.length;n++)if(!be.isIdContinueChar(String.fromCodePoint(e.codePointAt(n))))return m(e,!0);return e}function _(e){if(r.indexOf(e)>=0)throw TypeError(`Converting circular structure to JSON5`);r.push(e);var t=i;i+=s;for(var n=[],a=0;a<e.length;a++){var o=p(String(a),e);n.push(o===void 0?`null`:o)}var c;if(n.length===0)c=`[]`;else if(s===``)c=`[`+n.join(`,`)+`]`;else{var l=`,
`+i,u=n.join(l);c=`[
`+i+u+`,
`+t+`]`}return r.pop(),i=t,c}}}}))}))(),1),ye=`__@@augment-vir-undefined-sentinel@@__`,be=RegExp(`['"]${ye}['"]`);function y(e,t){if(typeof e==`string`)return e;try{return ve.default.stringify(e,(e,t)=>t===void 0?ye:typeof t==`bigint`?Number(t):t,t||void 0).split(be).join(`undefined`)}catch{return String(e)}}typeof window<`u`&&window.document;var xe=typeof process<`u`&&process.versions!=null&&process.versions.node!=null;typeof self==`object`&&self.constructor&&self.constructor.name,typeof window<`u`&&window.name===`nodejs`||typeof navigator<`u`&&`userAgent`in navigator&&typeof navigator.userAgent==`string`&&(navigator.userAgent.includes(`Node.js`)||navigator.userAgent.includes(`jsdom`)),typeof Deno<`u`&&Deno.version!==void 0&&Deno.version.deno,typeof process<`u`&&process.versions!=null&&process.versions.bun;var b;(function(e){e.Node=`node`,e.Web=`web`})(b||={});function Se(){return xe?b.Node:b.Web}var Ce=Se();function we(e){return Ce===e}function Te(e){return e[Ce]()}function Ee({actual:e,expected:t}){let n=typeof t==`string`&&typeof e==`string`,r=typeof t!=`string`||typeof e!=`string`,i=ke(r,(r?pe:ce)([n?``:`
`,y(t&&typeof t==`object`&&!Array.isArray(t)?_e(t):t,4),`
`].join(``),[n?``:`
`,y(e&&typeof e==`object`&&!Array.isArray(e)?_e(e):e,4),`
`].join(``))),a=we(b.Node);return[[a?De.Green:``,` +added (unexpected, added in actual)`,a?De.Red:``,` -missing (expected, missing from actual)`,a?De.Reset:``].join(``),n?`

`:`
`,i].join(``)}var De;(function(e){e.Green=`\x1B[32m`,e.Red=`\x1B[31m`,e.Reset=`\x1B[0m`})(De||={});var Oe;(function(e){e.Added=`+`,e.Removed=`-`})(Oe||={});function ke(e,t){return e?t.flatMap(e=>e.value.split(`
`).map(t=>Ae(t,e)).join(`
`)).join(``):t.map(e=>Ae(void 0,e)).join(``)}function Ae(e,t){if(e!=null&&!e)return``;let n=we(b.Node),r=t.added?Oe.Added:t.removed?Oe.Removed:e==null?``:` `,i=t.added?De.Green:t.removed?De.Red:De.Reset;return[n?i:``,r,e??t.value,De.Reset].join(``)}function x(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function je(e){return x(e).filter(e=>isNaN(Number(e)))}function Me(e){return je(e).map(t=>e[t])}var Ne=[`.`,`:`,`;`,`,`,`?`,`!`];RegExp(`[${Ne.join(``)}]+`);var Pe=RegExp(`[${Ne.join(``)}]+$`);function Fe(e){return e.replace(Pe,``)}function S(e){return e==null||e===``||e===`undefined`||e===`null`?``:typeof e==`string`?e:e instanceof Error?e.message:typeof e==`object`&&`message`in e?String(e.message):y(e)}function Ie(...e){let t=e.map(e=>S(e)).filter(e=>!!Fe(e)),n=t[t.length-1]?.endsWith(`.`),r=t.map(e=>Fe(S(e)));return(r.length<2?r[0]||``:r.join(`: `))+(n?`.`:``)}function C(e){return e instanceof Error?e:Error(S(e))}function Le(e,t){let n=C(e),r=Ie(t,n.message);try{return n.message=r,n}catch{return Error(r,{cause:e})}}var w={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511},T;(function(e){e.Information=`information`,e.Success=`success`,e.Redirect=`redirect`,e.ClientError=`clientError`,e.ServerError=`serverError`})(T||={}),T.ClientError,T.ServerError,w.Continue,T.Information,w.SwitchingProtocols,T.Information,w.Processing,T.Information,w.EarlyHints,T.Information,w.Ok,T.Success,w.Created,T.Success,w.Accepted,T.Success,w.NonAuthoritativeInformation,T.Success,w.NoContent,T.Success,w.ResetContent,T.Success,w.PartialContent,T.Success,w.MultiStatus,T.Success,w.AlreadyReported,T.Success,w.ImUsed,T.Success,w.MultipleChoices,T.Redirect,w.MovedPermanently,T.Redirect,w.Found,T.Redirect,w.SeeOther,T.Redirect,w.NotModified,T.Redirect,w.UseProxy,T.Redirect,w.Unused,T.Redirect,w.TemporaryRedirect,T.Redirect,w.PermanentRedirect,T.Redirect,w.BadRequest,T.ClientError,w.Unauthorized,T.ClientError,w.PaymentRequired,T.ClientError,w.Forbidden,T.ClientError,w.NotFound,T.ClientError,w.MethodNotAllowed,T.ClientError,w.NotAcceptable,T.ClientError,w.ProxyAuthenticationRequired,T.ClientError,w.RequestTimeout,T.ClientError,w.Conflict,T.ClientError,w.Gone,T.ClientError,w.LengthRequired,T.ClientError,w.PreconditionFailed,T.ClientError,w.PayloadTooLarge,T.ClientError,w.UriTooLong,T.ClientError,w.UnsupportedMediaType,T.ClientError,w.RangeNotSatisfiable,T.ClientError,w.ExpectationFailed,T.ClientError,w.ImATeapot,T.ClientError,w.MisdirectedRequest,T.ClientError,w.UnprocessableContent,T.ClientError,w.Locked,T.ClientError,w.FailedDependency,T.ClientError,w.TooEarly,T.ClientError,w.UpgradeRequired,T.ClientError,w.PreconditionRequired,T.ClientError,w.TooManyRequests,T.ClientError,w.RequestHeaderFieldsTooLarge,T.ClientError,w.UnavailableForLegalReasons,T.ClientError,w.InternalServerError,T.ServerError,w.NotImplemented,T.ServerError,w.BadGateway,T.ServerError,w.ServiceUnavailable,T.ServerError,w.GatewayTimeout,T.ServerError,w.HttpVersionNotSupported,T.ServerError,w.VariantAlsoNegotiates,T.ServerError,w.InsufficientStorage,T.ServerError,w.LoopDetected,T.ServerError,w.NotExtended,T.ServerError,w.NetworkAuthenticationRequired,T.ServerError;var Re={[T.Information]:[w.Continue,w.SwitchingProtocols,w.Processing,w.EarlyHints],[T.Success]:[w.Ok,w.Created,w.Accepted,w.NonAuthoritativeInformation,w.NoContent,w.ResetContent,w.PartialContent,w.MultiStatus,w.AlreadyReported,w.ImUsed],[T.Redirect]:[w.MultipleChoices,w.MovedPermanently,w.Found,w.SeeOther,w.NotModified,w.UseProxy,w.Unused,w.TemporaryRedirect,w.PermanentRedirect],[T.ClientError]:[w.BadRequest,w.Unauthorized,w.PaymentRequired,w.Forbidden,w.NotFound,w.MethodNotAllowed,w.NotAcceptable,w.ProxyAuthenticationRequired,w.RequestTimeout,w.Conflict,w.Gone,w.LengthRequired,w.PreconditionFailed,w.PayloadTooLarge,w.UriTooLong,w.UnsupportedMediaType,w.RangeNotSatisfiable,w.ExpectationFailed,w.ImATeapot,w.MisdirectedRequest,w.UnprocessableContent,w.Locked,w.FailedDependency,w.TooEarly,w.UpgradeRequired,w.PreconditionRequired,w.TooManyRequests,w.RequestHeaderFieldsTooLarge,w.UnavailableForLegalReasons],[T.ServerError]:[w.InternalServerError,w.NotImplemented,w.BadGateway,w.ServiceUnavailable,w.GatewayTimeout,w.HttpVersionNotSupported,w.VariantAlsoNegotiates,w.InsufficientStorage,w.LoopDetected,w.NotExtended,w.NetworkAuthenticationRequired]};function ze({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function Be(e){return e===null||typeof e!=`object`&&typeof e!=`function`}var Ve=class{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((e,t)=>{this.resolve=t=>(this.isSettled=!0,e(t)),this.reject=e=>{this.isSettled=!0,t(C(e))}})}},He=class extends Error{},Ue=class extends He{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}},We=class extends He{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}},Ge=class extends He{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}},Ke=class extends He{},qe=class extends He{constructor(e){super(`Invalid unit ${e}`)}},Je=class extends He{},Ye=class extends He{constructor(){super(`Zone is an abstract class`)}},E=`numeric`,Xe=`short`,Ze=`long`,Qe={year:E,month:E,day:E},$e={year:E,month:Xe,day:E},et={year:E,month:Xe,day:E,weekday:Xe},tt={year:E,month:Ze,day:E},nt={year:E,month:Ze,day:E,weekday:Ze},rt={hour:E,minute:E},it={hour:E,minute:E,second:E},at={hour:E,minute:E,second:E,timeZoneName:Xe},ot={hour:E,minute:E,second:E,timeZoneName:Ze},st={hour:E,minute:E,hourCycle:`h23`},ct={hour:E,minute:E,second:E,hourCycle:`h23`},lt={hour:E,minute:E,second:E,hourCycle:`h23`,timeZoneName:Xe},ut={hour:E,minute:E,second:E,hourCycle:`h23`,timeZoneName:Ze},dt={year:E,month:E,day:E,hour:E,minute:E},ft={year:E,month:E,day:E,hour:E,minute:E,second:E},pt={year:E,month:Xe,day:E,hour:E,minute:E},mt={year:E,month:Xe,day:E,hour:E,minute:E,second:E},ht={year:E,month:Xe,day:E,weekday:Xe,hour:E,minute:E},gt={year:E,month:Ze,day:E,hour:E,minute:E,timeZoneName:Xe},_t={year:E,month:Ze,day:E,hour:E,minute:E,second:E,timeZoneName:Xe},vt={year:E,month:Ze,day:E,weekday:Ze,hour:E,minute:E,timeZoneName:Ze},yt={year:E,month:Ze,day:E,weekday:Ze,hour:E,minute:E,second:E,timeZoneName:Ze},bt=class{get type(){throw new Ye}get name(){throw new Ye}get ianaName(){return this.name}get isUniversal(){throw new Ye}offsetName(e,t){throw new Ye}formatOffset(e,t){throw new Ye}offset(e){throw new Ye}equals(e){throw new Ye}get isValid(){throw new Ye}},xt=null,St=class e extends bt{static get instance(){return xt===null&&(xt=new e),xt}get type(){return`system`}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:t,locale:n}){return ur(e,t,n)}formatOffset(e,t){return mr(this.offset(e),t)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type===`system`}get isValid(){return!0}},Ct=new Map;function wt(e){let t=Ct.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(`en-US`,{hour12:!1,timeZone:e,year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`,second:`2-digit`,era:`short`}),Ct.set(e,t)),t}var Tt={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Et(e,t){let n=e.format(t).replace(/\u200E/g,``),[,r,i,a,o,s,c,l]=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n);return[a,r,i,o,s,c,l]}function Dt(e,t){let n=e.formatToParts(t),r=[];for(let e=0;e<n.length;e++){let{type:t,value:i}=n[e],a=Tt[t];t===`era`?r[a]=i:D(a)||(r[a]=parseInt(i,10))}return r}var Ot=new Map,kt=class e extends bt{static create(t){let n=Ot.get(t);return n===void 0&&Ot.set(t,n=new e(t)),n}static resetCache(){Ot.clear(),Ct.clear()}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat(`en-US`,{timeZone:e}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=e.isValidZone(t)}get type(){return`iana`}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:t,locale:n}){return ur(e,t,n,this.name)}formatOffset(e,t){return mr(this.offset(e),t)}offset(e){if(!this.valid)return NaN;let t=new Date(e);if(isNaN(t))return NaN;let n=wt(this.name),[r,i,a,o,s,c,l]=n.formatToParts?Dt(n,t):Et(n,t);o===`BC`&&(r=-Math.abs(r)+1);let u=or({year:r,month:i,day:a,hour:s===24?0:s,minute:c,second:l,millisecond:0}),d=+t,f=d%1e3;return d-=f>=0?f:1e3+f,(u-d)/6e4}equals(e){return e.type===`iana`&&e.name===this.name}get isValid(){return this.valid}},At={};function jt(e,t={}){let n=JSON.stringify([e,t]),r=At[n];return r||(r=new Intl.ListFormat(e,t),At[n]=r),r}var Mt=new Map;function Nt(e,t={}){let n=JSON.stringify([e,t]),r=Mt.get(n);return r===void 0&&(r=new Intl.DateTimeFormat(e,t),Mt.set(n,r)),r}var Pt=new Map;function Ft(e,t={}){let n=JSON.stringify([e,t]),r=Pt.get(n);return r===void 0&&(r=new Intl.NumberFormat(e,t),Pt.set(n,r)),r}var It=new Map;function Lt(e,t={}){let{base:n,...r}=t,i=JSON.stringify([e,r]),a=It.get(i);return a===void 0&&(a=new Intl.RelativeTimeFormat(e,t),It.set(i,a)),a}var Rt=null;function zt(){return Rt||(Rt=new Intl.DateTimeFormat().resolvedOptions().locale,Rt)}var Bt=new Map;function Vt(e){let t=Bt.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),Bt.set(e,t)),t}var Ht=new Map;function Ut(e){let t=Ht.get(e);if(!t){let n=new Intl.Locale(e);t=`getWeekInfo`in n?n.getWeekInfo():n.weekInfo,`minimalDays`in t||(t={...$t,...t}),Ht.set(e,t)}return t}function Wt(e){let t=e.indexOf(`-x-`);t!==-1&&(e=e.substring(0,t));let n=e.indexOf(`-u-`);if(n===-1)return[e];{let t,r;try{t=Nt(e).resolvedOptions(),r=e}catch{let i=e.substring(0,n);t=Nt(i).resolvedOptions(),r=i}let{numberingSystem:i,calendar:a}=t;return[r,i,a]}}function Gt(e,t,n){return(n||t)&&(e.includes(`-u-`)||(e+=`-u`),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`)),e}function Kt(e){let t=[];for(let n=1;n<=12;n++){let r=to.utc(2009,n,1);t.push(e(r))}return t}function qt(e){let t=[];for(let n=1;n<=7;n++){let r=to.utc(2016,11,13+n);t.push(e(r))}return t}function Jt(e,t,n,r){let i=e.listingMode();return i===`error`?null:i===`en`?n(t):r(t)}function Yt(e){return e.numberingSystem&&e.numberingSystem!==`latn`?!1:e.numberingSystem===`latn`||!e.locale||e.locale.startsWith(`en`)||Vt(e.locale).numberingSystem===`latn`}var Xt=class{constructor(e,t,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;let{padTo:r,floor:i,...a}=n;if(!t||Object.keys(a).length>0){let t={useGrouping:!1,...n};n.padTo>0&&(t.minimumIntegerDigits=n.padTo),this.inf=Ft(e,t)}}format(e){if(this.inf){let t=this.floor?Math.floor(e):e;return this.inf.format(t)}return Qn(this.floor?Math.floor(e):nr(e,3),this.padTo)}},Zt=class{constructor(e,t,n){this.opts=n,this.originalZone=void 0;let r;if(this.opts.timeZone)this.dt=e;else if(e.zone.type===`fixed`){let t=-1*(e.offset/60),n=t>=0?`Etc/GMT+${t}`:`Etc/GMT${t}`;e.offset!==0&&kt.create(n).valid?(r=n,this.dt=e):(r=`UTC`,this.dt=e.offset===0?e:e.setZone(`UTC`).plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type===`system`?this.dt=e:e.zone.type===`iana`?(this.dt=e,r=e.zone.name):(r=`UTC`,this.dt=e.setZone(`UTC`).plus({minutes:e.offset}),this.originalZone=e.zone);let i={...this.opts};i.timeZone=i.timeZone||r,this.dtf=Nt(t,i)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(``):this.dtf.format(this.dt.toJSDate())}formatToParts(){let e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(e=>{if(e.type===`timeZoneName`){let t=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...e,value:t}}return e}):e}resolvedOptions(){return this.dtf.resolvedOptions()}},Qt=class{constructor(e,t,n){this.opts={style:`long`,...n},!t&&Un()&&(this.rtf=Lt(e,n))}format(e,t){return this.rtf?this.rtf.format(e,t):Nr(t,e,this.opts.numeric,this.opts.style!==`long`)}formatToParts(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]}},$t={firstDay:1,minimalDays:4,weekend:[6,7]},en=class e{static fromOpts(t){return e.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,i,a=!1){let o=t||xn.defaultLocale,s=o||(a?`en-US`:zt()),c=n||xn.defaultNumberingSystem,l=r||xn.defaultOutputCalendar,u=Yn(i)||xn.defaultWeekSettings;return new e(s,c,l,u,o)}static resetCache(){Rt=null,Mt.clear(),Pt.clear(),It.clear(),Bt.clear(),Ht.clear()}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return e.create(t,n,r,i)}constructor(e,t,n,r,i){let[a,o,s]=Wt(e);this.locale=a,this.numberingSystem=t||o||null,this.outputCalendar=n||s||null,this.weekSettings=r,this.intl=Gt(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached??=Yt(this),this.fastNumbersCached}listingMode(){let e=this.isEnglish(),t=(this.numberingSystem===null||this.numberingSystem===`latn`)&&(this.outputCalendar===null||this.outputCalendar===`gregory`);return e&&t?`en`:`intl`}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:e.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Yn(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,t=!1){return Jt(this,e,yr,()=>{let n=this.intl===`ja`||this.intl.startsWith(`ja-`);t&=!n;let r=t?{month:e,day:`numeric`}:{month:e},i=t?`format`:`standalone`;if(!this.monthsCache[i][e]){let t=n?e=>this.dtFormatter(e,r).format():e=>this.extract(e,r,`month`);this.monthsCache[i][e]=Kt(t)}return this.monthsCache[i][e]})}weekdays(e,t=!1){return Jt(this,e,Cr,()=>{let n=t?{weekday:e,year:`numeric`,month:`long`,day:`numeric`}:{weekday:e},r=t?`format`:`standalone`;return this.weekdaysCache[r][e]||(this.weekdaysCache[r][e]=qt(e=>this.extract(e,n,`weekday`))),this.weekdaysCache[r][e]})}meridiems(){return Jt(this,void 0,()=>wr,()=>{if(!this.meridiemCache){let e={hour:`numeric`,hourCycle:`h12`};this.meridiemCache=[to.utc(2016,11,13,9),to.utc(2016,11,13,19)].map(t=>this.extract(t,e,`dayperiod`))}return this.meridiemCache})}eras(e){return Jt(this,e,Or,()=>{let t={era:e};return this.eraCache[e]||(this.eraCache[e]=[to.utc(-40,1,1),to.utc(2017,1,1)].map(e=>this.extract(e,t,`era`))),this.eraCache[e]})}extract(e,t,n){let r=this.dtFormatter(e,t).formatToParts().find(e=>e.type.toLowerCase()===n);return r?r.value:null}numberFormatter(e={}){return new Xt(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,t={}){return new Zt(e,this.intl,t)}relFormatter(e={}){return new Qt(this.intl,this.isEnglish(),e)}listFormatter(e={}){return jt(this.intl,e)}isEnglish(){return this.locale===`en`||this.locale.toLowerCase()===`en-us`||Vt(this.intl).locale.startsWith(`en-us`)}getWeekSettings(){return this.weekSettings?this.weekSettings:Wn()?Ut(this.locale):$t}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}},tn=null,nn=class e extends bt{static get utcInstance(){return tn===null&&(tn=new e(0)),tn}static instance(t){return t===0?e.utcInstance:new e(t)}static parseSpecifier(t){if(t){let n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new e(dr(n[1],n[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return`fixed`}get name(){return this.fixed===0?`UTC`:`UTC${mr(this.fixed,`narrow`)}`}get ianaName(){return this.fixed===0?`Etc/UTC`:`Etc/GMT${mr(-this.fixed,`narrow`)}`}offsetName(){return this.name}formatOffset(e,t){return mr(this.fixed,t)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type===`fixed`&&e.fixed===this.fixed}get isValid(){return!0}},rn=class extends bt{constructor(e){super(),this.zoneName=e}get type(){return`invalid`}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return``}offset(){return NaN}equals(){return!1}get isValid(){return!1}};function an(e,t){if(D(e)||e===null)return t;if(e instanceof bt)return e;if(Vn(e)){let n=e.toLowerCase();return n==="default"?t:n===`local`||n===`system`?St.instance:n===`utc`||n===`gmt`?nn.utcInstance:nn.parseSpecifier(n)||kt.create(e)}return zn(e)?nn.instance(e):typeof e==`object`&&`offset`in e&&typeof e.offset==`function`?e:new rn(e)}var on={arab:`[٠-٩]`,arabext:`[۰-۹]`,bali:`[᭐-᭙]`,beng:`[০-৯]`,deva:`[०-९]`,fullwide:`[０-９]`,gujr:`[૦-૯]`,hanidec:`[〇|一|二|三|四|五|六|七|八|九]`,khmr:`[០-៩]`,knda:`[೦-೯]`,laoo:`[໐-໙]`,limb:`[᥆-᥏]`,mlym:`[൦-൯]`,mong:`[᠐-᠙]`,mymr:`[၀-၉]`,orya:`[୦-୯]`,tamldec:`[௦-௯]`,telu:`[౦-౯]`,thai:`[๐-๙]`,tibt:`[༠-༩]`,latn:`\\d`},sn={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},cn=on.hanidec.replace(/[\[|\]]/g,``).split(``);function ln(e){let t=parseInt(e,10);if(isNaN(t)){t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(e[n].search(on.hanidec)!==-1)t+=cn.indexOf(e[n]);else for(let e in sn){let[n,i]=sn[e];r>=n&&r<=i&&(t+=r-n)}}return parseInt(t,10)}return t}var un=new Map;function dn(){un.clear()}function fn({numberingSystem:e},t=``){let n=e||`latn`,r=un.get(n);r===void 0&&(r=new Map,un.set(n,r));let i=r.get(t);return i===void 0&&(i=RegExp(`${on[n]}${t}`),r.set(t,i)),i}var pn=()=>Date.now(),mn=`system`,hn=null,gn=null,_n=null,vn=60,yn,bn=null,xn=class{static get now(){return pn}static set now(e){pn=e}static set defaultZone(e){mn=e}static get defaultZone(){return an(mn,St.instance)}static get defaultLocale(){return hn}static set defaultLocale(e){hn=e}static get defaultNumberingSystem(){return gn}static set defaultNumberingSystem(e){gn=e}static get defaultOutputCalendar(){return _n}static set defaultOutputCalendar(e){_n=e}static get defaultWeekSettings(){return bn}static set defaultWeekSettings(e){bn=Yn(e)}static get twoDigitCutoffYear(){return vn}static set twoDigitCutoffYear(e){vn=e%100}static get throwOnInvalid(){return yn}static set throwOnInvalid(e){yn=e}static resetCaches(){en.resetCache(),kt.resetCache(),to.resetCache(),dn()}},Sn=class{constructor(e,t){this.reason=e,this.explanation=t}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}},Cn=[0,31,59,90,120,151,181,212,243,273,304,334],wn=[0,31,60,91,121,152,182,213,244,274,305,335];function Tn(e,t){return new Sn(`unit out of range`,`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function En(e,t,n){let r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);let i=r.getUTCDay();return i===0?7:i}function Dn(e,t,n){return n+(rr(e)?wn:Cn)[t-1]}function On(e,t){let n=rr(e)?wn:Cn,r=n.findIndex(e=>e<t),i=t-n[r];return{month:r+1,day:i}}function kn(e,t){return(e-t+7)%7+1}function An(e,t=4,n=1){let{year:r,month:i,day:a}=e,o=Dn(r,i,a),s=kn(En(r,i,a),n),c=Math.floor((o-s+14-t)/7),l;return c<1?(l=r-1,c=cr(l,t,n)):c>cr(r,t,n)?(l=r+1,c=1):l=r,{weekYear:l,weekNumber:c,weekday:s,...hr(e)}}function jn(e,t=4,n=1){let{weekYear:r,weekNumber:i,weekday:a}=e,o=kn(En(r,1,t),n),s=ir(r),c=i*7+a-o-7+t,l;c<1?(l=r-1,c+=ir(l)):c>s?(l=r+1,c-=ir(r)):l=r;let{month:u,day:d}=On(l,c);return{year:l,month:u,day:d,...hr(e)}}function Mn(e){let{year:t,month:n,day:r}=e;return{year:t,ordinal:Dn(t,n,r),...hr(e)}}function Nn(e){let{year:t,ordinal:n}=e,{month:r,day:i}=On(t,n);return{year:t,month:r,day:i,...hr(e)}}function Pn(e,t){if(!D(e.localWeekday)||!D(e.localWeekNumber)||!D(e.localWeekYear)){if(!D(e.weekday)||!D(e.weekNumber)||!D(e.weekYear))throw new Ke(`Cannot mix locale-based week fields with ISO-based week fields`);return D(e.localWeekday)||(e.weekday=e.localWeekday),D(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),D(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}return{minDaysInFirstWeek:4,startOfWeek:1}}function Fn(e,t=4,n=1){let r=Bn(e.weekYear),i=Xn(e.weekNumber,1,cr(e.weekYear,t,n)),a=Xn(e.weekday,1,7);return r?i?!a&&Tn(`weekday`,e.weekday):Tn(`week`,e.weekNumber):Tn(`weekYear`,e.weekYear)}function In(e){let t=Bn(e.year),n=Xn(e.ordinal,1,ir(e.year));return t?!n&&Tn(`ordinal`,e.ordinal):Tn(`year`,e.year)}function Ln(e){let t=Bn(e.year),n=Xn(e.month,1,12),r=Xn(e.day,1,ar(e.year,e.month));return t?n?!r&&Tn(`day`,e.day):Tn(`month`,e.month):Tn(`year`,e.year)}function Rn(e){let{hour:t,minute:n,second:r,millisecond:i}=e,a=Xn(t,0,23)||t===24&&n===0&&r===0&&i===0,o=Xn(n,0,59),s=Xn(r,0,59),c=Xn(i,0,999);return a?o?s?!c&&Tn(`millisecond`,i):Tn(`second`,r):Tn(`minute`,n):Tn(`hour`,t)}function D(e){return e===void 0}function zn(e){return typeof e==`number`}function Bn(e){return typeof e==`number`&&e%1==0}function Vn(e){return typeof e==`string`}function Hn(e){return Object.prototype.toString.call(e)===`[object Date]`}function Un(){try{return typeof Intl<`u`&&!!Intl.RelativeTimeFormat}catch{return!1}}function Wn(){try{return typeof Intl<`u`&&!!Intl.Locale&&(`weekInfo`in Intl.Locale.prototype||`getWeekInfo`in Intl.Locale.prototype)}catch{return!1}}function Gn(e){return Array.isArray(e)?e:[e]}function Kn(e,t,n){if(e.length!==0)return e.reduce((e,r)=>{let i=[t(r),r];return e&&n(e[0],i[0])===e[0]?e:i},null)[1]}function qn(e,t){return t.reduce((t,n)=>(t[n]=e[n],t),{})}function Jn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Yn(e){if(e==null)return null;if(typeof e!=`object`)throw new Je(`Week settings must be an object`);if(!Xn(e.firstDay,1,7)||!Xn(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(e=>!Xn(e,1,7)))throw new Je(`Invalid week settings`);return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Xn(e,t,n){return Bn(e)&&e>=t&&e<=n}function Zn(e,t){return e-t*Math.floor(e/t)}function Qn(e,t=2){let n=e<0,r;return r=n?`-`+(``+-e).padStart(t,`0`):(``+e).padStart(t,`0`),r}function $n(e){if(!(D(e)||e===null||e===``))return parseInt(e,10)}function er(e){if(!(D(e)||e===null||e===``))return parseFloat(e)}function tr(e){if(!(D(e)||e===null||e===``)){let t=parseFloat(`0.`+e)*1e3;return Math.floor(t)}}function nr(e,t,n=`round`){let r=10**t;switch(n){case`expand`:return e>0?Math.ceil(e*r)/r:Math.floor(e*r)/r;case`trunc`:return Math.trunc(e*r)/r;case`round`:return Math.round(e*r)/r;case`floor`:return Math.floor(e*r)/r;case`ceil`:return Math.ceil(e*r)/r;default:throw RangeError(`Value rounding ${n} is out of range`)}}function rr(e){return e%4==0&&(e%100!=0||e%400==0)}function ir(e){return rr(e)?366:365}function ar(e,t){let n=Zn(t-1,12)+1,r=e+(t-n)/12;return n===2?rr(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function or(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function sr(e,t,n){return-kn(En(e,1,t),n)+t-1}function cr(e,t=4,n=1){let r=sr(e,t,n),i=sr(e+1,t,n);return(ir(e)-r+i)/7}function lr(e){return e>99?e:e>xn.twoDigitCutoffYear?1900+e:2e3+e}function ur(e,t,n,r=null){let i=new Date(e),a={hourCycle:`h23`,year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`};r&&(a.timeZone=r);let o={timeZoneName:t,...a},s=new Intl.DateTimeFormat(n,o).formatToParts(i).find(e=>e.type.toLowerCase()===`timezonename`);return s?s.value:null}function dr(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);let r=parseInt(t,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}function fr(e){let t=Number(e);if(typeof e==`boolean`||e===``||!Number.isFinite(t))throw new Je(`Invalid unit value ${e}`);return t}function pr(e,t){let n={};for(let r in e)if(Jn(e,r)){let i=e[r];if(i==null)continue;n[t(r)]=fr(i)}return n}function mr(e,t){let n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?`+`:`-`;switch(t){case`short`:return`${i}${Qn(n,2)}:${Qn(r,2)}`;case`narrow`:return`${i}${n}${r>0?`:${r}`:``}`;case`techie`:return`${i}${Qn(n,2)}${Qn(r,2)}`;default:throw RangeError(`Value format ${t} is out of range for property format`)}}function hr(e){return qn(e,[`hour`,`minute`,`second`,`millisecond`])}var gr=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],_r=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],vr=[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`];function yr(e){switch(e){case`narrow`:return[...vr];case`short`:return[..._r];case`long`:return[...gr];case`numeric`:return[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`];case`2-digit`:return[`01`,`02`,`03`,`04`,`05`,`06`,`07`,`08`,`09`,`10`,`11`,`12`];default:return null}}var br=[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`],xr=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],Sr=[`M`,`T`,`W`,`T`,`F`,`S`,`S`];function Cr(e){switch(e){case`narrow`:return[...Sr];case`short`:return[...xr];case`long`:return[...br];case`numeric`:return[`1`,`2`,`3`,`4`,`5`,`6`,`7`];default:return null}}var wr=[`AM`,`PM`],Tr=[`Before Christ`,`Anno Domini`],Er=[`BC`,`AD`],Dr=[`B`,`A`];function Or(e){switch(e){case`narrow`:return[...Dr];case`short`:return[...Er];case`long`:return[...Tr];default:return null}}function kr(e){return wr[e.hour<12?0:1]}function Ar(e,t){return Cr(t)[e.weekday-1]}function jr(e,t){return yr(t)[e.month-1]}function Mr(e,t){return Or(t)[e.year<0?0:1]}function Nr(e,t,n=`always`,r=!1){let i={years:[`year`,`yr.`],quarters:[`quarter`,`qtr.`],months:[`month`,`mo.`],weeks:[`week`,`wk.`],days:[`day`,`day`,`days`],hours:[`hour`,`hr.`],minutes:[`minute`,`min.`],seconds:[`second`,`sec.`]},a=[`hours`,`minutes`,`seconds`].indexOf(e)===-1;if(n===`auto`&&a){let n=e===`days`;switch(t){case 1:return n?`tomorrow`:`next ${i[e][0]}`;case-1:return n?`yesterday`:`last ${i[e][0]}`;case 0:return n?`today`:`this ${i[e][0]}`}}let o=Object.is(t,-0)||t<0,s=Math.abs(t),c=s===1,l=i[e],u=r?c?l[1]:l[2]||l[1]:c?i[e][0]:e;return o?`${s} ${u} ago`:`in ${s} ${u}`}function Pr(e,t){let n=``;for(let r of e)r.literal?n+=r.val:n+=t(r.val);return n}var Fr={D:Qe,DD:$e,DDD:tt,DDDD:nt,t:rt,tt:it,ttt:at,tttt:ot,T:st,TT:ct,TTT:lt,TTTT:ut,f:dt,ff:pt,fff:gt,ffff:vt,F:ft,FF:mt,FFF:_t,FFFF:yt},Ir=class e{static create(t,n={}){return new e(t,n)}static parseFormat(e){let t=null,n=``,r=!1,i=[];for(let a=0;a<e.length;a++){let o=e.charAt(a);o===`'`?((n.length>0||r)&&i.push({literal:r||/^\s+$/.test(n),val:n===``?`'`:n}),t=null,n=``,r=!r):r||o===t?n+=o:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=o,t=o)}return n.length>0&&i.push({literal:r||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(e){return Fr[e]}constructor(e,t){this.opts=t,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,t){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...t}).format()}dtFormatter(e,t={}){return this.loc.dtFormatter(e,{...this.opts,...t})}formatDateTime(e,t){return this.dtFormatter(e,t).format()}formatDateTimeParts(e,t){return this.dtFormatter(e,t).formatToParts()}formatInterval(e,t){return this.dtFormatter(e.start,t).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,t){return this.dtFormatter(e,t).resolvedOptions()}num(e,t=0,n=void 0){if(this.opts.forceSimple)return Qn(e,t);let r={...this.opts};return t>0&&(r.padTo=t),n&&(r.signDisplay=n),this.loc.numberFormatter(r).format(e)}formatDateTimeFromString(t,n){let r=this.loc.listingMode()===`en`,i=this.loc.outputCalendar&&this.loc.outputCalendar!==`gregory`,a=(e,n)=>this.loc.extract(t,e,n),o=e=>t.isOffsetFixed&&t.offset===0&&e.allowZ?`Z`:t.isValid?t.zone.formatOffset(t.ts,e.format):``,s=()=>r?kr(t):a({hour:`numeric`,hourCycle:`h12`},`dayperiod`),c=(e,n)=>r?jr(t,e):a(n?{month:e}:{month:e,day:`numeric`},`month`),l=(e,n)=>r?Ar(t,e):a(n?{weekday:e}:{weekday:e,month:`long`,day:`numeric`},`weekday`),u=n=>{let r=e.macroTokenToFormatOpts(n);return r?this.formatWithSystemDefault(t,r):n},d=e=>r?Mr(t,e):a({era:e},`era`);return Pr(e.parseFormat(n),e=>{switch(e){case`S`:return this.num(t.millisecond);case`u`:case`SSS`:return this.num(t.millisecond,3);case`s`:return this.num(t.second);case`ss`:return this.num(t.second,2);case`uu`:return this.num(Math.floor(t.millisecond/10),2);case`uuu`:return this.num(Math.floor(t.millisecond/100));case`m`:return this.num(t.minute);case`mm`:return this.num(t.minute,2);case`h`:return this.num(t.hour%12==0?12:t.hour%12);case`hh`:return this.num(t.hour%12==0?12:t.hour%12,2);case`H`:return this.num(t.hour);case`HH`:return this.num(t.hour,2);case`Z`:return o({format:`narrow`,allowZ:this.opts.allowZ});case`ZZ`:return o({format:`short`,allowZ:this.opts.allowZ});case`ZZZ`:return o({format:`techie`,allowZ:this.opts.allowZ});case`ZZZZ`:return t.zone.offsetName(t.ts,{format:`short`,locale:this.loc.locale});case`ZZZZZ`:return t.zone.offsetName(t.ts,{format:`long`,locale:this.loc.locale});case`z`:return t.zoneName;case`a`:return s();case`d`:return i?a({day:`numeric`},`day`):this.num(t.day);case`dd`:return i?a({day:`2-digit`},`day`):this.num(t.day,2);case`c`:return this.num(t.weekday);case`ccc`:return l(`short`,!0);case`cccc`:return l(`long`,!0);case`ccccc`:return l(`narrow`,!0);case`E`:return this.num(t.weekday);case`EEE`:return l(`short`,!1);case`EEEE`:return l(`long`,!1);case`EEEEE`:return l(`narrow`,!1);case`L`:return i?a({month:`numeric`,day:`numeric`},`month`):this.num(t.month);case`LL`:return i?a({month:`2-digit`,day:`numeric`},`month`):this.num(t.month,2);case`LLL`:return c(`short`,!0);case`LLLL`:return c(`long`,!0);case`LLLLL`:return c(`narrow`,!0);case`M`:return i?a({month:`numeric`},`month`):this.num(t.month);case`MM`:return i?a({month:`2-digit`},`month`):this.num(t.month,2);case`MMM`:return c(`short`,!1);case`MMMM`:return c(`long`,!1);case`MMMMM`:return c(`narrow`,!1);case`y`:return i?a({year:`numeric`},`year`):this.num(t.year);case`yy`:return i?a({year:`2-digit`},`year`):this.num(t.year.toString().slice(-2),2);case`yyyy`:return i?a({year:`numeric`},`year`):this.num(t.year,4);case`yyyyyy`:return i?a({year:`numeric`},`year`):this.num(t.year,6);case`G`:return d(`short`);case`GG`:return d(`long`);case`GGGGG`:return d(`narrow`);case`kk`:return this.num(t.weekYear.toString().slice(-2),2);case`kkkk`:return this.num(t.weekYear,4);case`W`:return this.num(t.weekNumber);case`WW`:return this.num(t.weekNumber,2);case`n`:return this.num(t.localWeekNumber);case`nn`:return this.num(t.localWeekNumber,2);case`ii`:return this.num(t.localWeekYear.toString().slice(-2),2);case`iiii`:return this.num(t.localWeekYear,4);case`o`:return this.num(t.ordinal);case`ooo`:return this.num(t.ordinal,3);case`q`:return this.num(t.quarter);case`qq`:return this.num(t.quarter,2);case`X`:return this.num(Math.floor(t.ts/1e3));case`x`:return this.num(t.ts);default:return u(e)}})}formatDurationFromString(t,n){let r=this.opts.signMode===`negativeLargestOnly`?-1:1,i=e=>{switch(e[0]){case`S`:return`milliseconds`;case`s`:return`seconds`;case`m`:return`minutes`;case`h`:return`hours`;case`d`:return`days`;case`w`:return`weeks`;case`M`:return`months`;case`y`:return`years`;default:return null}},a=(e,t)=>n=>{let a=i(n);if(a){let i=t.isNegativeDuration&&a!==t.largestUnit?r:1,o;return o=this.opts.signMode===`negativeLargestOnly`&&a!==t.largestUnit?`never`:this.opts.signMode===`all`?`always`:`auto`,this.num(e.get(a)*i,n.length,o)}return n},o=e.parseFormat(n),s=o.reduce((e,{literal:t,val:n})=>t?e:e.concat(n),[]),c=t.shiftTo(...s.map(i).filter(e=>e));return Pr(o,a(c,{isNegativeDuration:c<0,largestUnit:Object.keys(c.values)[0]}))}},Lr=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Rr(...e){let t=e.reduce((e,t)=>e+t.source,``);return RegExp(`^${t}$`)}function zr(...e){return t=>e.reduce(([e,n,r],i)=>{let[a,o,s]=i(t,r);return[{...e,...a},o||n,s]},[{},null,1]).slice(0,2)}function Br(e,...t){if(e==null)return[null,null];for(let[n,r]of t){let t=n.exec(e);if(t)return r(t)}return[null,null]}function Vr(...e){return(t,n)=>{let r={},i=0;for(;i<e.length;i++)r[e[i]]=$n(t[n+i]);return[r,null,n+i]}}var Hr=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,Ur=`(?:${Hr.source}?(?:\\[(${Lr.source})\\])?)?`,Wr=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Gr=RegExp(`${Wr.source}${Ur}`),Kr=RegExp(`(?:[Tt]${Gr.source})?`),qr=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Jr=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Yr=/(\d{4})-?(\d{3})/,Xr=Vr(`weekYear`,`weekNumber`,`weekDay`),Zr=Vr(`year`,`ordinal`),Qr=/(\d{4})-(\d\d)-(\d\d)/,$r=RegExp(`${Wr.source} ?(?:${Hr.source}|(${Lr.source}))?`),ei=RegExp(`(?: ${$r.source})?`);function ti(e,t,n){let r=e[t];return D(r)?n:$n(r)}function ni(e,t){return[{year:ti(e,t),month:ti(e,t+1,1),day:ti(e,t+2,1)},null,t+3]}function ri(e,t){return[{hours:ti(e,t,0),minutes:ti(e,t+1,0),seconds:ti(e,t+2,0),milliseconds:tr(e[t+3])},null,t+4]}function ii(e,t){let n=!e[t]&&!e[t+1],r=dr(e[t+1],e[t+2]);return[{},n?null:nn.instance(r),t+3]}function ai(e,t){return[{},e[t]?kt.create(e[t]):null,t+1]}var oi=RegExp(`^T?${Wr.source}$`),si=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function ci(e){let[t,n,r,i,a,o,s,c,l]=e,u=t[0]===`-`,d=c&&c[0]===`-`,f=(e,t=!1)=>e!==void 0&&(t||e&&u)?-e:e;return[{years:f(er(n)),months:f(er(r)),weeks:f(er(i)),days:f(er(a)),hours:f(er(o)),minutes:f(er(s)),seconds:f(er(c),c===`-0`),milliseconds:f(tr(l),d)}]}var li={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function ui(e,t,n,r,i,a,o){let s={year:t.length===2?lr($n(t)):$n(t),month:_r.indexOf(n)+1,day:$n(r),hour:$n(i),minute:$n(a)};return o&&(s.second=$n(o)),e&&(s.weekday=e.length>3?br.indexOf(e)+1:xr.indexOf(e)+1),s}var di=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function fi(e){let[,t,n,r,i,a,o,s,c,l,u,d]=e,f=ui(t,i,r,n,a,o,s),p;return p=c?li[c]:l?0:dr(u,d),[f,new nn(p)]}function pi(e){return e.replace(/\([^()]*\)|[\n\t]/g,` `).replace(/(\s\s+)/g,` `).trim()}var mi=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,hi=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,gi=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function _i(e){let[,t,n,r,i,a,o,s]=e;return[ui(t,i,r,n,a,o,s),nn.utcInstance]}function vi(e){let[,t,n,r,i,a,o,s]=e;return[ui(t,s,n,r,i,a,o),nn.utcInstance]}var yi=Rr(qr,Kr),bi=Rr(Jr,Kr),xi=Rr(Yr,Kr),Si=Rr(Gr),Ci=zr(ni,ri,ii,ai),wi=zr(Xr,ri,ii,ai),Ti=zr(Zr,ri,ii,ai),Ei=zr(ri,ii,ai);function Di(e){return Br(e,[yi,Ci],[bi,wi],[xi,Ti],[Si,Ei])}function Oi(e){return Br(pi(e),[di,fi])}function ki(e){return Br(e,[mi,_i],[hi,_i],[gi,vi])}function Ai(e){return Br(e,[si,ci])}var ji=zr(ri);function Mi(e){return Br(e,[oi,ji])}var Ni=Rr(Qr,ei),Pi=Rr($r),Fi=zr(ri,ii,ai);function Ii(e){return Br(e,[Ni,Ci],[Pi,Fi])}var Li=`Invalid Duration`,Ri={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},zi={years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6},...Ri},Bi=146097/400,Vi=146097/4800,Hi={years:{quarters:4,months:12,weeks:Bi/7,days:Bi,hours:Bi*24,minutes:Bi*24*60,seconds:Bi*24*60*60,milliseconds:Bi*24*60*60*1e3},quarters:{months:3,weeks:Bi/28,days:Bi/4,hours:Bi*24/4,minutes:Bi*24*60/4,seconds:Bi*24*60*60/4,milliseconds:Bi*24*60*60*1e3/4},months:{weeks:Vi/7,days:Vi,hours:Vi*24,minutes:Vi*24*60,seconds:Vi*24*60*60,milliseconds:Vi*24*60*60*1e3},...Ri},Ui=[`years`,`quarters`,`months`,`weeks`,`days`,`hours`,`minutes`,`seconds`,`milliseconds`],Wi=Ui.slice(0).reverse();function Gi(e,t,n=!1){return new Yi({values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix})}function Ki(e,t){let n=t.milliseconds??0;for(let r of Wi.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function qi(e,t){let n=Ki(e,t)<0?-1:1;Ui.reduceRight((r,i)=>{if(D(t[i]))return r;if(r){let a=t[r]*n,o=e[i][r],s=Math.floor(a/o);t[i]+=s*n,t[r]-=s*o*n}return i},null),Ui.reduce((n,r)=>{if(D(t[r]))return n;if(n){let i=t[n]%1;t[n]-=i,t[r]+=i*e[n][r]}return r},null)}function Ji(e){let t={};for(let[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}var Yi=class e{constructor(e){let t=e.conversionAccuracy===`longterm`||!1,n=t?Hi:zi;e.matrix&&(n=e.matrix),this.values=e.values,this.loc=e.loc||en.create(),this.conversionAccuracy=t?`longterm`:`casual`,this.invalid=e.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,n){return e.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(typeof t!=`object`||!t)throw new Je(`Duration.fromObject: argument expected to be an object, got ${t===null?`null`:typeof t}`);return new e({values:pr(t,e.normalizeUnit),loc:en.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(zn(t))return e.fromMillis(t);if(e.isDuration(t))return t;if(typeof t==`object`)return e.fromObject(t);throw new Je(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){let[r]=Ai(t);return r?e.fromObject(r,n):e.invalid(`unparsable`,`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){let[r]=Mi(t);return r?e.fromObject(r,n):e.invalid(`unparsable`,`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new Je(`need to specify a reason the Duration is invalid`);let r=t instanceof Sn?t:new Sn(t,n);if(xn.throwOnInvalid)throw new Ge(r);return new e({invalid:r})}static normalizeUnit(e){let t={year:`years`,years:`years`,quarter:`quarters`,quarters:`quarters`,month:`months`,months:`months`,week:`weeks`,weeks:`weeks`,day:`days`,days:`days`,hour:`hours`,hours:`hours`,minute:`minutes`,minutes:`minutes`,second:`seconds`,seconds:`seconds`,millisecond:`milliseconds`,milliseconds:`milliseconds`}[e&&e.toLowerCase()];if(!t)throw new qe(e);return t}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,t={}){let n={...t,floor:t.round!==!1&&t.floor!==!1};return this.isValid?Ir.create(this.loc,n).formatDurationFromString(this,e):Li}toHuman(e={}){if(!this.isValid)return Li;let t=e.showZeros!==!1,n=Ui.map(n=>{let r=this.values[n];return D(r)||r===0&&!t?null:this.loc.numberFormatter({style:`unit`,unitDisplay:`long`,...e,unit:n.slice(0,-1)}).format(r)}).filter(e=>e);return this.loc.listFormatter({type:`conjunction`,style:e.listStyle||`narrow`,...e}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e=`P`;return this.years!==0&&(e+=this.years+`Y`),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+`M`),this.weeks!==0&&(e+=this.weeks+`W`),this.days!==0&&(e+=this.days+`D`),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+=`T`),this.hours!==0&&(e+=this.hours+`H`),this.minutes!==0&&(e+=this.minutes+`M`),(this.seconds!==0||this.milliseconds!==0)&&(e+=nr(this.seconds+this.milliseconds/1e3,3)+`S`),e===`P`&&(e+=`T0S`),e}toISOTime(e={}){if(!this.isValid)return null;let t=this.toMillis();return t<0||t>=864e5?null:(e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:`extended`,...e,includeOffset:!1},to.fromMillis(t,{zone:`UTC`}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for(`nodejs.util.inspect.custom`)](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Ki(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;let n=e.fromDurationLike(t),r={};for(let e of Ui)(Jn(n.values,e)||Jn(this.values,e))&&(r[e]=n.get(e)+this.get(e));return Gi(this,{values:r},!0)}minus(t){if(!this.isValid)return this;let n=e.fromDurationLike(t);return this.plus(n.negate())}mapUnits(e){if(!this.isValid)return this;let t={};for(let n of Object.keys(this.values))t[n]=fr(e(this.values[n],n));return Gi(this,{values:t},!0)}get(t){return this[e.normalizeUnit(t)]}set(t){if(!this.isValid)return this;let n={...this.values,...pr(t,e.normalizeUnit)};return Gi(this,{values:n})}reconfigure({locale:e,numberingSystem:t,conversionAccuracy:n,matrix:r}={}){let i={loc:this.loc.clone({locale:e,numberingSystem:t}),matrix:r,conversionAccuracy:n};return Gi(this,i)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;let e=this.toObject();return qi(this.matrix,e),Gi(this,{values:e},!0)}rescale(){if(!this.isValid)return this;let e=Ji(this.normalize().shiftToAll().toObject());return Gi(this,{values:e},!0)}shiftTo(...t){if(!this.isValid||t.length===0)return this;t=t.map(t=>e.normalizeUnit(t));let n={},r={},i=this.toObject(),a;for(let e of Ui)if(t.indexOf(e)>=0){a=e;let t=0;for(let n in r)t+=this.matrix[n][e]*r[n],r[n]=0;zn(i[e])&&(t+=i[e]);let o=Math.trunc(t);n[e]=o,r[e]=(t*1e3-o*1e3)/1e3}else zn(i[e])&&(r[e]=i[e]);for(let e in r)r[e]!==0&&(n[a]+=e===a?r[e]:r[e]/this.matrix[a][e]);return qi(this.matrix,n),Gi(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo(`years`,`months`,`weeks`,`days`,`hours`,`minutes`,`seconds`,`milliseconds`):this}negate(){if(!this.isValid)return this;let e={};for(let t of Object.keys(this.values))e[t]=this.values[t]===0?0:-this.values[t];return Gi(this,{values:e},!0)}removeZeros(){if(!this.isValid)return this;let e=Ji(this.values);return Gi(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function t(e,t){return e===void 0||e===0?t===void 0||t===0:e===t}for(let n of Ui)if(!t(this.values[n],e.values[n]))return!1;return!0}},Xi=`Invalid Interval`;function Zi(e,t){return!e||!e.isValid?Qi.invalid(`missing or invalid start`):!t||!t.isValid?Qi.invalid(`missing or invalid end`):t<e?Qi.invalid(`end before start`,`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}var Qi=class e{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new Je(`need to specify a reason the Interval is invalid`);let r=t instanceof Sn?t:new Sn(t,n);if(xn.throwOnInvalid)throw new We(r);return new e({invalid:r})}static fromDateTimes(t,n){let r=no(t),i=no(n);return Zi(r,i)??new e({start:r,end:i})}static after(t,n){let r=Yi.fromDurationLike(n),i=no(t);return e.fromDateTimes(i,i.plus(r))}static before(t,n){let r=Yi.fromDurationLike(n),i=no(t);return e.fromDateTimes(i.minus(r),i)}static fromISO(t,n){let[r,i]=(t||``).split(`/`,2);if(r&&i){let t,a;try{t=to.fromISO(r,n),a=t.isValid}catch{a=!1}let o,s;try{o=to.fromISO(i,n),s=o.isValid}catch{s=!1}if(a&&s)return e.fromDateTimes(t,o);if(a){let r=Yi.fromISO(i,n);if(r.isValid)return e.after(t,r)}else if(s){let t=Yi.fromISO(r,n);if(t.isValid)return e.before(o,t)}}return e.invalid(`unparsable`,`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e=`milliseconds`){return this.isValid?this.toDuration(e).get(e):NaN}count(e=`milliseconds`,t){if(!this.isValid)return NaN;let n=this.start.startOf(e,t),r;return r=t?.useLocaleWeeks?this.end.reconfigure({locale:n.locale}):this.end,r=r.startOf(e,t),Math.floor(r.diff(n,e).get(e))+(r.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:t,end:n}={}){return this.isValid?e.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];let n=t.map(no).filter(e=>this.contains(e)).sort((e,t)=>e.toMillis()-t.toMillis()),r=[],{s:i}=this,a=0;for(;i<this.e;){let t=n[a]||this.e,o=+t>+this.e?this.e:t;r.push(e.fromDateTimes(i,o)),i=o,a+=1}return r}splitBy(t){let n=Yi.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as(`milliseconds`)===0)return[];let{s:r}=this,i=1,a,o=[];for(;r<this.e;){let t=this.start.plus(n.mapUnits(e=>e*i));a=+t>+this.e?this.e:t,o.push(e.fromDateTimes(r,a)),r=a,i+=1}return o}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(t){if(!this.isValid)return this;let n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:e.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;let n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return e.fromDateTimes(n,r)}static merge(e){let[t,n]=e.sort((e,t)=>e.s-t.s).reduce(([e,t],n)=>t?t.overlaps(n)||t.abutsStart(n)?[e,t.union(n)]:[e.concat([t]),n]:[e,n],[[],null]);return n&&t.push(n),t}static xor(t){let n=null,r=0,i=[],a=t.map(e=>[{time:e.s,type:`s`},{time:e.e,type:`e`}]),o=Array.prototype.concat(...a).sort((e,t)=>e.time-t.time);for(let t of o)r+=t.type===`s`?1:-1,r===1?n=t.time:(n&&+n!=+t.time&&i.push(e.fromDateTimes(n,t.time)),n=null);return e.merge(i)}difference(...t){return e.xor([this].concat(t)).map(e=>this.intersection(e)).filter(e=>e&&!e.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Xi}[Symbol.for(`nodejs.util.inspect.custom`)](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(e=Qe,t={}){return this.isValid?Ir.create(this.s.loc.clone(t),e).formatInterval(this):Xi}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:Xi}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Xi}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:Xi}toFormat(e,{separator:t=` – `}={}){return this.isValid?`${this.s.toFormat(e)}${t}${this.e.toFormat(e)}`:Xi}toDuration(e,t){return this.isValid?this.e.diff(this.s,e,t):Yi.invalid(this.invalidReason)}mapEndpoints(t){return e.fromDateTimes(t(this.s),t(this.e))}},$i=class{static hasDST(e=xn.defaultZone){let t=to.now().setZone(e).set({month:12});return!e.isUniversal&&t.offset!==t.set({month:6}).offset}static isValidIANAZone(e){return kt.isValidZone(e)}static normalizeZone(e){return an(e,xn.defaultZone)}static getStartOfWeek({locale:e=null,locObj:t=null}={}){return(t||en.create(e)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:e=null,locObj:t=null}={}){return(t||en.create(e)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:e=null,locObj:t=null}={}){return(t||en.create(e)).getWeekendDays().slice()}static months(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null,outputCalendar:i=`gregory`}={}){return(r||en.create(t,n,i)).months(e)}static monthsFormat(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null,outputCalendar:i=`gregory`}={}){return(r||en.create(t,n,i)).months(e,!0)}static weekdays(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null}={}){return(r||en.create(t,n,null)).weekdays(e)}static weekdaysFormat(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null}={}){return(r||en.create(t,n,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return en.create(e).meridiems()}static eras(e=`short`,{locale:t=null}={}){return en.create(t,null,`gregory`).eras(e)}static features(){return{relative:Un(),localeWeek:Wn()}}};function ea(e,t){let n=e=>e.toUTC(0,{keepLocalTime:!0}).startOf(`day`).valueOf(),r=n(t)-n(e);return Math.floor(Yi.fromMillis(r).as(`days`))}function ta(e,t,n){let r=[[`years`,(e,t)=>t.year-e.year],[`quarters`,(e,t)=>t.quarter-e.quarter+(t.year-e.year)*4],[`months`,(e,t)=>t.month-e.month+(t.year-e.year)*12],[`weeks`,(e,t)=>{let n=ea(e,t);return(n-n%7)/7}],[`days`,ea]],i={},a=e,o,s;for(let[c,l]of r)n.indexOf(c)>=0&&(o=c,i[c]=l(e,t),s=a.plus(i),s>t?(i[c]--,e=a.plus(i),e>t&&(s=e,i[c]--,e=a.plus(i))):e=s);return[e,i,s,o]}function na(e,t,n,r){let[i,a,o,s]=ta(e,t,n),c=t-i,l=n.filter(e=>[`hours`,`minutes`,`seconds`,`milliseconds`].indexOf(e)>=0);l.length===0&&(o<t&&(o=i.plus({[s]:1})),o!==i&&(a[s]=(a[s]||0)+c/(o-i)));let u=Yi.fromObject(a,r);return l.length>0?Yi.fromMillis(c,r).shiftTo(...l).plus(u):u}var ra=`missing Intl.DateTimeFormat.formatToParts support`;function ia(e,t=e=>e){return{regex:e,deser:([e])=>t(ln(e))}}var aa=`[ \xA0]`,oa=new RegExp(aa,`g`);function sa(e){return e.replace(/\./g,`\\.?`).replace(oa,aa)}function ca(e){return e.replace(/\./g,``).replace(oa,` `).toLowerCase()}function la(e,t){return e===null?null:{regex:RegExp(e.map(sa).join(`|`)),deser:([n])=>e.findIndex(e=>ca(n)===ca(e))+t}}function ua(e,t){return{regex:e,deser:([,e,t])=>dr(e,t),groups:t}}function da(e){return{regex:e,deser:([e])=>e}}function fa(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,`\\$&`)}function pa(e,t){let n=fn(t),r=fn(t,`{2}`),i=fn(t,`{3}`),a=fn(t,`{4}`),o=fn(t,`{6}`),s=fn(t,`{1,2}`),c=fn(t,`{1,3}`),l=fn(t,`{1,6}`),u=fn(t,`{1,9}`),d=fn(t,`{2,4}`),f=fn(t,`{4,6}`),p=e=>({regex:RegExp(fa(e.val)),deser:([e])=>e,literal:!0}),m=(m=>{if(e.literal)return p(m);switch(m.val){case`G`:return la(t.eras(`short`),0);case`GG`:return la(t.eras(`long`),0);case`y`:return ia(l);case`yy`:return ia(d,lr);case`yyyy`:return ia(a);case`yyyyy`:return ia(f);case`yyyyyy`:return ia(o);case`M`:return ia(s);case`MM`:return ia(r);case`MMM`:return la(t.months(`short`,!0),1);case`MMMM`:return la(t.months(`long`,!0),1);case`L`:return ia(s);case`LL`:return ia(r);case`LLL`:return la(t.months(`short`,!1),1);case`LLLL`:return la(t.months(`long`,!1),1);case`d`:return ia(s);case`dd`:return ia(r);case`o`:return ia(c);case`ooo`:return ia(i);case`HH`:return ia(r);case`H`:return ia(s);case`hh`:return ia(r);case`h`:return ia(s);case`mm`:return ia(r);case`m`:return ia(s);case`q`:return ia(s);case`qq`:return ia(r);case`s`:return ia(s);case`ss`:return ia(r);case`S`:return ia(c);case`SSS`:return ia(i);case`u`:return da(u);case`uu`:return da(s);case`uuu`:return ia(n);case`a`:return la(t.meridiems(),0);case`kkkk`:return ia(a);case`kk`:return ia(d,lr);case`W`:return ia(s);case`WW`:return ia(r);case`E`:case`c`:return ia(n);case`EEE`:return la(t.weekdays(`short`,!1),1);case`EEEE`:return la(t.weekdays(`long`,!1),1);case`ccc`:return la(t.weekdays(`short`,!0),1);case`cccc`:return la(t.weekdays(`long`,!0),1);case`Z`:case`ZZ`:return ua(RegExp(`([+-]${s.source})(?::(${r.source}))?`),2);case`ZZZ`:return ua(RegExp(`([+-]${s.source})(${r.source})?`),2);case`z`:return da(/[a-z_+-/]{1,256}?/i);case` `:return da(/[^\S\n\r]/);default:return p(m)}})(e)||{invalidReason:ra};return m.token=e,m}var ma={year:{"2-digit":`yy`,numeric:`yyyyy`},month:{numeric:`M`,"2-digit":`MM`,short:`MMM`,long:`MMMM`},day:{numeric:`d`,"2-digit":`dd`},weekday:{short:`EEE`,long:`EEEE`},dayperiod:`a`,dayPeriod:`a`,hour12:{numeric:`h`,"2-digit":`hh`},hour24:{numeric:`H`,"2-digit":`HH`},minute:{numeric:`m`,"2-digit":`mm`},second:{numeric:`s`,"2-digit":`ss`},timeZoneName:{long:`ZZZZZ`,short:`ZZZ`}};function ha(e,t,n){let{type:r,value:i}=e;if(r===`literal`){let e=/^\s+$/.test(i);return{literal:!e,val:e?` `:i}}let a=t[r],o=r;r===`hour`&&(o=t.hour12==null?t.hourCycle==null?n.hour12?`hour12`:`hour24`:t.hourCycle===`h11`||t.hourCycle===`h12`?`hour12`:`hour24`:t.hour12?`hour12`:`hour24`);let s=ma[o];if(typeof s==`object`&&(s=s[a]),s)return{literal:!1,val:s}}function ga(e){return[`^${e.map(e=>e.regex).reduce((e,t)=>`${e}(${t.source})`,``)}$`,e]}function _a(e,t,n){let r=e.match(t);if(r){let e={},t=1;for(let i in n)if(Jn(n,i)){let a=n[i],o=a.groups?a.groups+1:1;!a.literal&&a.token&&(e[a.token.val[0]]=a.deser(r.slice(t,t+o))),t+=o}return[r,e]}return[r,{}]}function va(e){let t=e=>{switch(e){case`S`:return`millisecond`;case`s`:return`second`;case`m`:return`minute`;case`h`:case`H`:return`hour`;case`d`:return`day`;case`o`:return`ordinal`;case`L`:case`M`:return`month`;case`y`:return`year`;case`E`:case`c`:return`weekday`;case`W`:return`weekNumber`;case`k`:return`weekYear`;case`q`:return`quarter`;default:return null}},n=null,r;return D(e.z)||(n=kt.create(e.z)),D(e.Z)||(n||=new nn(e.Z),r=e.Z),D(e.q)||(e.M=(e.q-1)*3+1),D(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),D(e.u)||(e.S=tr(e.u)),[Object.keys(e).reduce((n,r)=>{let i=t(r);return i&&(n[i]=e[r]),n},{}),n,r]}var ya=null;function ba(){return ya||=to.fromMillis(1555555555555),ya}function xa(e,t){if(e.literal)return e;let n=Ea(Ir.macroTokenToFormatOpts(e.val),t);return n==null||n.includes(void 0)?e:n}function Sa(e,t){return Array.prototype.concat(...e.map(e=>xa(e,t)))}var Ca=class{constructor(e,t){if(this.locale=e,this.format=t,this.tokens=Sa(Ir.parseFormat(t),e),this.units=this.tokens.map(t=>pa(t,e)),this.disqualifyingUnit=this.units.find(e=>e.invalidReason),!this.disqualifyingUnit){let[e,t]=ga(this.units);this.regex=RegExp(e,`i`),this.handlers=t}}explainFromTokens(e){if(this.isValid){let[t,n]=_a(e,this.regex,this.handlers),[r,i,a]=n?va(n):[null,null,void 0];if(Jn(n,`a`)&&Jn(n,`H`))throw new Ke(`Can't include meridiem when specifying 24-hour format`);return{input:e,tokens:this.tokens,regex:this.regex,rawMatches:t,matches:n,result:r,zone:i,specificOffset:a}}return{input:e,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}};function wa(e,t,n){return new Ca(e,n).explainFromTokens(t)}function Ta(e,t,n){let{result:r,zone:i,specificOffset:a,invalidReason:o}=wa(e,t,n);return[r,i,a,o]}function Ea(e,t){if(!e)return null;let n=Ir.create(t,e).dtFormatter(ba()),r=n.formatToParts(),i=n.resolvedOptions();return r.map(t=>ha(t,e,i))}var Da=`Invalid DateTime`,Oa=864e13;function ka(e){return new Sn(`unsupported zone`,`the zone "${e.name}" is not supported`)}function Aa(e){return e.weekData===null&&(e.weekData=An(e.c)),e.weekData}function ja(e){return e.localWeekData===null&&(e.localWeekData=An(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Ma(e,t){let n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new to({...n,...t,old:n})}function Na(e,t,n){let r=e-t*60*1e3,i=n.offset(r);if(t===i)return[r,t];r-=(i-t)*60*1e3;let a=n.offset(r);return i===a?[r,i]:[e-Math.min(i,a)*60*1e3,Math.max(i,a)]}function Pa(e,t){e+=t*60*1e3;let n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Fa(e,t,n){return Na(or(e),t,n)}function Ia(e,t){let n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,a={...e.c,year:r,month:i,day:Math.min(e.c.day,ar(r,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},o=Yi.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as(`milliseconds`),[s,c]=Na(or(a),n,e.zone);return o!==0&&(s+=o,c=e.zone.offset(s)),{ts:s,o:c}}function La(e,t,n,r,i,a){let{setZone:o,zone:s}=n;if(e&&Object.keys(e).length!==0||t){let r=t||s,i=to.fromObject(e,{...n,zone:r,specificOffset:a});return o?i:i.setZone(s)}return to.invalid(new Sn(`unparsable`,`the input "${i}" can't be parsed as ${r}`))}function Ra(e,t,n=!0){return e.isValid?Ir.create(en.create(`en-US`),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function za(e,t,n){let r=e.c.year>9999||e.c.year<0,i=``;if(r&&e.c.year>=0&&(i+=`+`),i+=Qn(e.c.year,r?6:4),n===`year`)return i;if(t){if(i+=`-`,i+=Qn(e.c.month),n===`month`)return i;i+=`-`}else if(i+=Qn(e.c.month),n===`month`)return i;return i+=Qn(e.c.day),i}function Ba(e,t,n,r,i,a,o){let s=!n||e.c.millisecond!==0||e.c.second!==0,c=``;switch(o){case`day`:case`month`:case`year`:break;default:if(c+=Qn(e.c.hour),o===`hour`)break;if(t){if(c+=`:`,c+=Qn(e.c.minute),o===`minute`)break;s&&(c+=`:`,c+=Qn(e.c.second))}else{if(c+=Qn(e.c.minute),o===`minute`)break;s&&(c+=Qn(e.c.second))}if(o===`second`)break;s&&(!r||e.c.millisecond!==0)&&(c+=`.`,c+=Qn(e.c.millisecond,3))}return i&&(e.isOffsetFixed&&e.offset===0&&!a?c+=`Z`:e.o<0?(c+=`-`,c+=Qn(Math.trunc(-e.o/60)),c+=`:`,c+=Qn(Math.trunc(-e.o%60))):(c+=`+`,c+=Qn(Math.trunc(e.o/60)),c+=`:`,c+=Qn(Math.trunc(e.o%60)))),a&&(c+=`[`+e.zone.ianaName+`]`),c}var Va={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Ha={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Ua={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Wa=[`year`,`month`,`day`,`hour`,`minute`,`second`,`millisecond`],Ga=[`weekYear`,`weekNumber`,`weekday`,`hour`,`minute`,`second`,`millisecond`],Ka=[`year`,`ordinal`,`hour`,`minute`,`second`,`millisecond`];function qa(e){let t={year:`year`,years:`year`,month:`month`,months:`month`,day:`day`,days:`day`,hour:`hour`,hours:`hour`,minute:`minute`,minutes:`minute`,quarter:`quarter`,quarters:`quarter`,second:`second`,seconds:`second`,millisecond:`millisecond`,milliseconds:`millisecond`,weekday:`weekday`,weekdays:`weekday`,weeknumber:`weekNumber`,weeksnumber:`weekNumber`,weeknumbers:`weekNumber`,weekyear:`weekYear`,weekyears:`weekYear`,ordinal:`ordinal`}[e.toLowerCase()];if(!t)throw new qe(e);return t}function Ja(e){switch(e.toLowerCase()){case`localweekday`:case`localweekdays`:return`localWeekday`;case`localweeknumber`:case`localweeknumbers`:return`localWeekNumber`;case`localweekyear`:case`localweekyears`:return`localWeekYear`;default:return qa(e)}}function Ya(e){if($a===void 0&&($a=xn.now()),e.type!==`iana`)return e.offset($a);let t=e.name,n=eo.get(t);return n===void 0&&(n=e.offset($a),eo.set(t,n)),n}function Xa(e,t){let n=an(t.zone,xn.defaultZone);if(!n.isValid)return to.invalid(ka(n));let r=en.fromObject(t),i,a;if(D(e.year))i=xn.now();else{for(let t of Wa)D(e[t])&&(e[t]=Va[t]);let t=Ln(e)||Rn(e);if(t)return to.invalid(t);let r=Ya(n);[i,a]=Fa(e,r,n)}return new to({ts:i,zone:n,loc:r,o:a})}function Za(e,t,n){let r=D(n.round)?!0:n.round,i=D(n.rounding)?`trunc`:n.rounding,a=(e,a)=>(e=nr(e,r||n.calendary?0:2,n.calendary?`round`:i),t.loc.clone(n).relFormatter(n).format(e,a)),o=r=>n.calendary?t.hasSame(e,r)?0:t.startOf(r).diff(e.startOf(r),r).get(r):t.diff(e,r).get(r);if(n.unit)return a(o(n.unit),n.unit);for(let e of n.units){let t=o(e);if(Math.abs(t)>=1)return a(t,e)}return a(e>t?-0:0,n.units[n.units.length-1])}function Qa(e){let t={},n;return e.length>0&&typeof e[e.length-1]==`object`?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}var $a,eo=new Map,to=class e{constructor(e){let t=e.zone||xn.defaultZone,n=e.invalid||(Number.isNaN(e.ts)?new Sn(`invalid input`):null)||(t.isValid?null:ka(t));this.ts=D(e.ts)?xn.now():e.ts;let r=null,i=null;if(!n){if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(t))[r,i]=[e.old.c,e.old.o];else{let a=zn(e.o)&&!e.old?e.o:t.offset(this.ts);r=Pa(this.ts,a),n=Number.isNaN(r.year)?new Sn(`invalid input`):null,r=n?null:r,i=n?null:a}}this._zone=t,this.loc=e.loc||en.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=r,this.o=i,this.isLuxonDateTime=!0}static now(){return new e({})}static local(){let[e,t]=Qa(arguments),[n,r,i,a,o,s,c]=t;return Xa({year:n,month:r,day:i,hour:a,minute:o,second:s,millisecond:c},e)}static utc(){let[e,t]=Qa(arguments),[n,r,i,a,o,s,c]=t;return e.zone=nn.utcInstance,Xa({year:n,month:r,day:i,hour:a,minute:o,second:s,millisecond:c},e)}static fromJSDate(t,n={}){let r=Hn(t)?t.valueOf():NaN;if(Number.isNaN(r))return e.invalid(`invalid input`);let i=an(n.zone,xn.defaultZone);return i.isValid?new e({ts:r,zone:i,loc:en.fromObject(n)}):e.invalid(ka(i))}static fromMillis(t,n={}){if(!zn(t))throw new Je(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`);return t<-864e13||t>Oa?e.invalid(`Timestamp out of range`):new e({ts:t,zone:an(n.zone,xn.defaultZone),loc:en.fromObject(n)})}static fromSeconds(t,n={}){if(zn(t))return new e({ts:t*1e3,zone:an(n.zone,xn.defaultZone),loc:en.fromObject(n)});throw new Je(`fromSeconds requires a numerical input`)}static fromObject(t,n={}){t||={};let r=an(n.zone,xn.defaultZone);if(!r.isValid)return e.invalid(ka(r));let i=en.fromObject(n),a=pr(t,Ja),{minDaysInFirstWeek:o,startOfWeek:s}=Pn(a,i),c=xn.now(),l=D(n.specificOffset)?r.offset(c):n.specificOffset,u=!D(a.ordinal),d=!D(a.year),f=!D(a.month)||!D(a.day),p=d||f,m=a.weekYear||a.weekNumber;if((p||u)&&m)throw new Ke(`Can't mix weekYear/weekNumber units with year/month/day or ordinals`);if(f&&u)throw new Ke(`Can't mix ordinal dates with month/day`);let h=m||a.weekday&&!p,g,_,ee=Pa(c,l);h?(g=Ga,_=Ha,ee=An(ee,o,s)):u?(g=Ka,_=Ua,ee=Mn(ee)):(g=Wa,_=Va);let te=!1;for(let e of g){let t=a[e];D(t)?a[e]=te?_[e]:ee[e]:te=!0}let ne=(h?Fn(a,o,s):u?In(a):Ln(a))||Rn(a);if(ne)return e.invalid(ne);let[re,ie]=Fa(h?jn(a,o,s):u?Nn(a):a,l,r),ae=new e({ts:re,zone:r,o:ie,loc:i});return a.weekday&&p&&t.weekday!==ae.weekday?e.invalid(`mismatched weekday`,`you can't specify both a weekday of ${a.weekday} and a date of ${ae.toISO()}`):ae.isValid?ae:e.invalid(ae.invalid)}static fromISO(e,t={}){let[n,r]=Di(e);return La(n,r,t,`ISO 8601`,e)}static fromRFC2822(e,t={}){let[n,r]=Oi(e);return La(n,r,t,`RFC 2822`,e)}static fromHTTP(e,t={}){let[n,r]=ki(e);return La(n,r,t,`HTTP`,t)}static fromFormat(t,n,r={}){if(D(t)||D(n))throw new Je(`fromFormat requires an input string and a format`);let{locale:i=null,numberingSystem:a=null}=r,[o,s,c,l]=Ta(en.fromOpts({locale:i,numberingSystem:a,defaultToEN:!0}),t,n);return l?e.invalid(l):La(o,s,r,`format ${n}`,t,c)}static fromString(t,n,r={}){return e.fromFormat(t,n,r)}static fromSQL(e,t={}){let[n,r]=Ii(e);return La(n,r,t,`SQL`,e)}static invalid(t,n=null){if(!t)throw new Je(`need to specify a reason the DateTime is invalid`);let r=t instanceof Sn?t:new Sn(t,n);if(xn.throwOnInvalid)throw new Ue(r);return new e({invalid:r})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,t={}){let n=Ea(e,en.fromObject(t));return n?n.map(e=>e?e.val:null).join(``):null}static expandFormat(e,t={}){return Sa(Ir.parseFormat(e),en.fromObject(t)).map(e=>e.val).join(``)}static resetCache(){$a=void 0,eo.clear()}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Aa(this).weekYear:NaN}get weekNumber(){return this.isValid?Aa(this).weekNumber:NaN}get weekday(){return this.isValid?Aa(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?ja(this).weekday:NaN}get localWeekNumber(){return this.isValid?ja(this).weekNumber:NaN}get localWeekYear(){return this.isValid?ja(this).weekYear:NaN}get ordinal(){return this.isValid?Mn(this.c).ordinal:NaN}get monthShort(){return this.isValid?$i.months(`short`,{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?$i.months(`long`,{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?$i.weekdays(`short`,{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?$i.weekdays(`long`,{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:`short`,locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:`long`,locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let e=864e5,t=6e4,n=or(this.c),r=this.zone.offset(n-e),i=this.zone.offset(n+e),a=this.zone.offset(n-r*t),o=this.zone.offset(n-i*t);if(a===o)return[this];let s=n-a*t,c=n-o*t,l=Pa(s,a),u=Pa(c,o);return l.hour===u.hour&&l.minute===u.minute&&l.second===u.second&&l.millisecond===u.millisecond?[Ma(this,{ts:s}),Ma(this,{ts:c})]:[this]}get isInLeapYear(){return rr(this.year)}get daysInMonth(){return ar(this.year,this.month)}get daysInYear(){return this.isValid?ir(this.year):NaN}get weeksInWeekYear(){return this.isValid?cr(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?cr(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(e={}){let{locale:t,numberingSystem:n,calendar:r}=Ir.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:t,numberingSystem:n,outputCalendar:r}}toUTC(e=0,t={}){return this.setZone(nn.instance(e),t)}toLocal(){return this.setZone(xn.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=an(t,xn.defaultZone),t.equals(this.zone))return this;if(t.isValid){let e=this.ts;if(n||r){let n=t.offset(this.ts),r=this.toObject();[e]=Fa(r,n,t)}return Ma(this,{ts:e,zone:t})}return e.invalid(ka(t))}reconfigure({locale:e,numberingSystem:t,outputCalendar:n}={}){let r=this.loc.clone({locale:e,numberingSystem:t,outputCalendar:n});return Ma(this,{loc:r})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;let t=pr(e,Ja),{minDaysInFirstWeek:n,startOfWeek:r}=Pn(t,this.loc),i=!D(t.weekYear)||!D(t.weekNumber)||!D(t.weekday),a=!D(t.ordinal),o=!D(t.year),s=!D(t.month)||!D(t.day),c=o||s,l=t.weekYear||t.weekNumber;if((c||a)&&l)throw new Ke(`Can't mix weekYear/weekNumber units with year/month/day or ordinals`);if(s&&a)throw new Ke(`Can't mix ordinal dates with month/day`);let u;i?u=jn({...An(this.c,n,r),...t},n,r):D(t.ordinal)?(u={...this.toObject(),...t},D(t.day)&&(u.day=Math.min(ar(u.year,u.month),u.day))):u=Nn({...Mn(this.c),...t});let[d,f]=Fa(u,this.o,this.zone);return Ma(this,{ts:d,o:f})}plus(e){if(!this.isValid)return this;let t=Yi.fromDurationLike(e);return Ma(this,Ia(this,t))}minus(e){if(!this.isValid)return this;let t=Yi.fromDurationLike(e).negate();return Ma(this,Ia(this,t))}startOf(e,{useLocaleWeeks:t=!1}={}){if(!this.isValid)return this;let n={},r=Yi.normalizeUnit(e);switch(r){case`years`:n.month=1;case`quarters`:case`months`:n.day=1;case`weeks`:case`days`:n.hour=0;case`hours`:n.minute=0;case`minutes`:n.second=0;case`seconds`:n.millisecond=0}if(r===`weeks`){if(t){let e=this.loc.getStartOfWeek(),{weekday:t}=this;t<e&&(n.weekNumber=this.weekNumber-1),n.weekday=e}else n.weekday=1}return r===`quarters`&&(n.month=(Math.ceil(this.month/3)-1)*3+1),this.set(n)}endOf(e,t){return this.isValid?this.plus({[e]:1}).startOf(e,t).minus(1):this}toFormat(e,t={}){return this.isValid?Ir.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):Da}toLocaleString(e=Qe,t={}){return this.isValid?Ir.create(this.loc.clone(t),e).formatDateTime(this):Da}toLocaleParts(e={}){return this.isValid?Ir.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e=`extended`,suppressSeconds:t=!1,suppressMilliseconds:n=!1,includeOffset:r=!0,extendedZone:i=!1,precision:a=`milliseconds`}={}){if(!this.isValid)return null;a=qa(a);let o=e===`extended`,s=za(this,o,a);return Wa.indexOf(a)>=3&&(s+=`T`),s+=Ba(this,o,t,n,r,i,a),s}toISODate({format:e=`extended`,precision:t=`day`}={}){return this.isValid?za(this,e===`extended`,qa(t)):null}toISOWeekDate(){return Ra(this,`kkkk-'W'WW-c`)}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:t=!1,includeOffset:n=!0,includePrefix:r=!1,extendedZone:i=!1,format:a=`extended`,precision:o=`milliseconds`}={}){return this.isValid?(o=qa(o),(r&&Wa.indexOf(o)>=3?`T`:``)+Ba(this,a===`extended`,t,e,n,i,o)):null}toRFC2822(){return Ra(this,`EEE, dd LLL yyyy HH:mm:ss ZZZ`,!1)}toHTTP(){return Ra(this.toUTC(),`EEE, dd LLL yyyy HH:mm:ss 'GMT'`)}toSQLDate(){return this.isValid?za(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:t=!1,includeOffsetSpace:n=!0}={}){let r=`HH:mm:ss.SSS`;return(t||e)&&(n&&(r+=` `),t?r+=`z`:e&&(r+=`ZZ`)),Ra(this,r,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():Da}[Symbol.for(`nodejs.util.inspect.custom`)](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};let t={...this.c};return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,t=`milliseconds`,n={}){if(!this.isValid||!e.isValid)return Yi.invalid(`created by diffing an invalid DateTime`);let r={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=Gn(t).map(Yi.normalizeUnit),a=e.valueOf()>this.valueOf(),o=na(a?this:e,a?e:this,i,r);return a?o.negate():o}diffNow(t=`milliseconds`,n={}){return this.diff(e.now(),t,n)}until(e){return this.isValid?Qi.fromDateTimes(this,e):this}hasSame(e,t,n){if(!this.isValid)return!1;let r=e.valueOf(),i=this.setZone(e.zone,{keepLocalTime:!0});return i.startOf(t,n)<=r&&r<=i.endOf(t,n)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(t={}){if(!this.isValid)return null;let n=t.base||e.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0,i=[`years`,`months`,`days`,`hours`,`minutes`,`seconds`],a=t.unit;return Array.isArray(t.unit)&&(i=t.unit,a=void 0),Za(n,this.plus(r),{...t,numeric:`always`,units:i,unit:a})}toRelativeCalendar(t={}){return this.isValid?Za(t.base||e.fromObject({},{zone:this.zone}),this,{...t,numeric:`auto`,units:[`years`,`months`,`days`],calendary:!0}):null}static min(...t){if(!t.every(e.isDateTime))throw new Je(`min requires all arguments be DateTimes`);return Kn(t,e=>e.valueOf(),Math.min)}static max(...t){if(!t.every(e.isDateTime))throw new Je(`max requires all arguments be DateTimes`);return Kn(t,e=>e.valueOf(),Math.max)}static fromFormatExplain(e,t,n={}){let{locale:r=null,numberingSystem:i=null}=n;return wa(en.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0}),e,t)}static fromStringExplain(t,n,r={}){return e.fromFormatExplain(t,n,r)}static buildFormatParser(e,t={}){let{locale:n=null,numberingSystem:r=null}=t;return new Ca(en.fromOpts({locale:n,numberingSystem:r,defaultToEN:!0}),e)}static fromFormatParser(t,n,r={}){if(D(t)||D(n))throw new Je(`fromFormatParser requires an input string and a format parser`);let{locale:i=null,numberingSystem:a=null}=r,o=en.fromOpts({locale:i,numberingSystem:a,defaultToEN:!0});if(!o.equals(n.locale))throw new Je(`fromFormatParser called with a locale of ${o}, but the format parser was created for ${n.locale}`);let{result:s,zone:c,specificOffset:l,invalidReason:u}=n.explainFromTokens(t);return u?e.invalid(u):La(s,c,r,`format ${n.format}`,t,l)}static get DATE_SHORT(){return Qe}static get DATE_MED(){return $e}static get DATE_MED_WITH_WEEKDAY(){return et}static get DATE_FULL(){return tt}static get DATE_HUGE(){return nt}static get TIME_SIMPLE(){return rt}static get TIME_WITH_SECONDS(){return it}static get TIME_WITH_SHORT_OFFSET(){return at}static get TIME_WITH_LONG_OFFSET(){return ot}static get TIME_24_SIMPLE(){return st}static get TIME_24_WITH_SECONDS(){return ct}static get TIME_24_WITH_SHORT_OFFSET(){return lt}static get TIME_24_WITH_LONG_OFFSET(){return ut}static get DATETIME_SHORT(){return dt}static get DATETIME_SHORT_WITH_SECONDS(){return ft}static get DATETIME_MED(){return pt}static get DATETIME_MED_WITH_SECONDS(){return mt}static get DATETIME_MED_WITH_WEEKDAY(){return ht}static get DATETIME_FULL(){return gt}static get DATETIME_FULL_WITH_SECONDS(){return _t}static get DATETIME_HUGE(){return vt}static get DATETIME_HUGE_WITH_SECONDS(){return yt}};function no(e){if(to.isDateTime(e))return e;if(e&&e.valueOf&&zn(e.valueOf()))return to.fromJSDate(e);if(e&&typeof e==`object`)return to.fromObject(e);throw new Je(`Unknown datetime argument: ${e}, of type ${typeof e}`)}new Intl.DateTimeFormat().resolvedOptions().locale;var ro;(function(e){e.Year=`year`,e.Month=`month`,e.Week=`week`,e.Day=`day`,e.Hour=`hour`,e.Minute=`minute`,e.Second=`second`,e.Millisecond=`millisecond`})(ro||={}),ro.Year,ro.Hour,ro.Minute,ro.Second,ro.Millisecond,ro.Month,ro.Week,ro.Day,ro.Millisecond,ro.Second,ro.Minute,ro.Hour,ro.Day,ro.Week,ro.Month,ro.Year;var io;(function(e){e.Years=`years`,e.Months=`months`,e.Weeks=`weeks`,e.Days=`days`,e.Hours=`hours`,e.Minutes=`minutes`,e.Seconds=`seconds`,e.Milliseconds=`milliseconds`})(io||={});var ao=[io.Milliseconds,io.Seconds,io.Minutes,io.Hours,io.Days,io.Weeks,io.Months,io.Years];io.Milliseconds,io.Seconds,io.Minutes,io.Hours,io.Days,io.Weeks,io.Months,io.Years,io.Years,ro.Year,io.Months,ro.Month,io.Weeks,ro.Week,io.Days,ro.Day,io.Hours,ro.Hour,io.Minutes,ro.Minute,io.Seconds,ro.Second,io.Milliseconds,ro.Millisecond,ro.Year,io.Years,ro.Month,io.Months,ro.Week,io.Weeks,ro.Day,io.Days,ro.Hour,io.Hours,ro.Minute,io.Minutes,ro.Second,io.Seconds,ro.Millisecond,io.Milliseconds;function oo(e){return ao.filter(t=>e[t])}function so(e,{decimalCount:t}){if(t==null)return e;let n=10**t,r=e*n;return Number((Math.round(r)/n).toFixed(t))}function co(e){return so(Math.max(e-.4,0),{decimalCount:0})}function lo(e){return e===0?0:Math.sign(e)}function uo(e,t,n={}){let r={},i={decimalCount:n.decimalCount==null?void 0:Math.round(Math.abs(n.decimalCount))},a=Object.values(e).includes(1/0),o=Object.values(e).includes(-1/0),s=oo(t).reverse();if(a||o)return s.forEach(e=>{r[e]=a?1/0:-1/0}),r;let c=Yi.fromObject(e).as(io.Milliseconds),l=lo(c);return s.forEach((e,t)=>{let n=t===s.length-1;if(e===io.Milliseconds)r.milliseconds=so(c,i);else{let t=Yi.fromObject({milliseconds:c}).as(e),a=Math.sign(t),o=Math.abs(t),s=n?so(o,i):Math.floor(i.decimalCount==null?o:co(o)),u=s===0?0:s*a;r[e]=u,c-=Yi.fromObject({[e]:u}).as(io.Milliseconds),l!==lo(c)&&(c=0)}}),r}var fo;(function(e){e.Sunday=`sunday`,e.Monday=`monday`,e.Tuesday=`tuesday`,e.Wednesday=`wednesday`,e.Thursday=`thursday`,e.Friday=`friday`,e.Saturday=`saturday`})(fo||={}),fo.Sunday,fo.Monday,fo.Tuesday,fo.Wednesday,fo.Thursday,fo.Friday,fo.Saturday,fo.Sunday,fo.Monday,fo.Tuesday,fo.Wednesday,fo.Thursday,fo.Friday,fo.Saturday;var po;(function(e){e.January=`january`,e.February=`february`,e.March=`march`,e.April=`april`,e.May=`may`,e.June=`june`,e.July=`july`,e.August=`august`,e.September=`september`,e.October=`october`,e.November=`november`,e.December=`december`})(po||={}),po.January,po.February,po.March,po.April,po.May,po.June,po.July,po.August,po.September,po.October,po.November,po.December;function mo(e){let t=new Ve,n=Object.values(e).some(e=>e===1/0||e===-1/0)?1/0:uo(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}function ho(...e){let t=e.join(``),n=l(Array.from(t));return Array.from(n).join(``)}function go(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function _o(e,t){return vo(e,ho([typeof e==`string`?``:e.flags,t].join(``).toLowerCase()))}function vo(e,t){let n=ho(t);return typeof e==`string`?new RegExp(go(e),n):new RegExp(e.source,n)}function yo(e,{caseSensitive:t}){let n=typeof e==`string`?``:e.flags.toLowerCase();return vo(e,t?n.replaceAll(`i`,``):ho(n+`i`))}function bo(e,t=1){return e.split(`
`).map(e=>[`    `.repeat(Math.round(t)),e].join(``)).join(`
`)}function xo(e,t){return t?typeof t==`string`?!!new RegExp(go(t),`i`).exec(e):!!_o(t,`i`).exec(e):!1}var O=class extends Error{name=`AssertionError`;constructor(e,t){super(Ie(t,e)||`Assertion failed.`)}},So={interval:{milliseconds:100},timeout:{seconds:10}},Co=Symbol(`not set`);async function wo(e,t,n){let{callback:r,extraAssertionArgs:i,failureMessage:a,options:o}=To(t),s=uo(o.timeout,{milliseconds:!0}).milliseconds,c=uo(o.interval,{milliseconds:!0}),l=Co,u;async function d(){try{l=n?r():await r(),e(l,...i)}catch(e){l=Co,u=C(e)}}let f=Date.now();for(;l===Co;)if(await d(),await mo(c),Date.now()-f>=s){let e=`${a?`${a}: `:``}Timeout of '${s}' milliseconds exceeded waiting for callback value to match expectations`;throw Le(u,e)}return l}function k(e,t=!1){return((...n)=>wo(e,n,t))}function To(e){let t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(e=>{if(t.callback)t.extraAssertionArgs.push(e);else if(typeof e==`function`)t.callback=e;else if(typeof e==`string`)t.failureMessage=e;else if(typeof e==`object`)t.options=e;else if(e===void 0)return;else throw TypeError(`Unexpected waitUntil arg: ${JSON.stringify(e)}`)}),!t.callback)throw TypeError(`Missing waitUntil callback.`);return{callback:t.callback,options:Eo(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Eo(e){return{interval:e?.interval||So.interval,timeout:e?.timeout||So.timeout}}var Do={isFalse(e,t){if(e!==!1)throw new O(`'${y(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new O(`'${y(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new O(`'${y(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new O(`'${y(e)}' is not truthy.`,t)}},Oo={assert:Do,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new O(`'${y(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new O(`'${y(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new O(`'${y(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new O(`'${y(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:k(Do.isFalse),isFalsy:k(Do.isFalsy),isTrue:k(Do.isTrue),isTruthy:k(Do.isTruthy)}};function ko(e,t,n){if(typeof e==`string`){if(!e.endsWith(t))throw new O(`${y(e)} does not end with ${y(t)}}`,n)}else if(e[e.length-1]!==t)throw new O(`${y(e)} does not end with ${y(t)}}`,n)}function Ao(e,t,n){if(typeof e==`string`){if(e.endsWith(t))throw new O(`${y(e)} ends with ${y(t)}}`,n)}else if(e[e.length-1]===t)throw new O(`${y(e)} ends with ${y(t)}}`,n)}function jo(e,t,n){if(typeof e==`string`){if(!e.startsWith(t))throw new O(`${y(e)} does not start with ${y(t)}}`,n)}else if(e[0]!==t)throw new O(`${y(e)} does not start with ${y(t)}}`,n)}function Mo(e,t,n){if(typeof e==`string`){if(e.startsWith(t))throw new O(`${y(e)} starts with ${y(t)}}`,n)}else if(e[0]===t)throw new O(`${y(e)} starts with ${y(t)}}`,n)}var No={endsWith:ko,endsWithout:Ao,startsWith:jo,startsWithout:Mo},Po={assert:No,check:{endsWith:((e,t)=>typeof e==`string`?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e==`string`?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e==`string`?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e==`string`?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,n)=>{if(typeof e==`string`){if(!e.endsWith(t))throw new O(`${y(e)} does not end with ${y(t)}}`,n)}else if(e[e.length-1]!==t)throw new O(`${y(e)} does not end with ${y(t)}}`,n);return e}),endsWithout:((e,t,n)=>{if(typeof e==`string`){if(e.endsWith(t))throw new O(`${y(e)} ends with ${y(t)}}`,n)}else if(e[e.length-1]===t)throw new O(`${y(e)} ends with ${y(t)}}`,n);return e}),startsWith:((e,t,n)=>{if(typeof e==`string`){if(!e.startsWith(t))throw new O(`${y(e)} does not start with ${y(t)}}`,n)}else if(e[0]!==t)throw new O(`${y(e)} does not start with ${y(t)}}`,n);return e}),startsWithout:((e,t,n)=>{if(typeof e==`string`){if(e.startsWith(t))throw new O(`${y(e)} starts with ${y(t)}}`,n)}else if(e[0]===t)throw new O(`${y(e)} starts with ${y(t)}}`,n);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e==`string`)return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e==`string`)return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e==`string`)return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e==`string`)return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:k(No.endsWith),endsWithout:k(No.endsWithout),startsWith:k(No.startsWith),startsWithout:k(No.startsWithout)}};function Fo(e,t,n){let r=Me(t);if(!r.includes(e))throw new O(`${String(e)} is not an enum value in '${r.join(`,`)}'.`,n)}function Io(e,t){return Me(t).includes(e)}var Lo={isEnumValue(e,t,n){Fo(e,t,n)},isNotEnumValue(e,t,n){let r=Me(t);if(r.includes(e))throw new O(`${String(e)} is an enum value in '${r.join(`,`)}'.`,n)}},Ro={assert:Lo,check:{isEnumValue:Io,isNotEnumValue(e,t){return!Me(t).includes(e)}},assertWrap:{isEnumValue(e,t,n){let r=Me(t);if(!r.includes(e))throw new O(`${String(e)} is not an enum value in '${r.join(`,`)}'.`,n);return e},isNotEnumValue(e,t,n){let r=Me(t);if(r.includes(e))throw new O(`${String(e)} is not an enum value in '${r.join(`,`)}'.`,n);return e}},checkWrap:{isEnumValue(e,t){if(Me(t).includes(e))return e},isNotEnumValue(e,t){if(!Me(t).includes(e))return e}},waitUntil:{isEnumValue:k(Lo.isEnumValue),isNotEnumValue:k(Lo.isNotEnumValue)}},zo={entriesEqual(e,t,n){if(!e||typeof e!=`object`)throw new O(`${y(e)} is not an object.`,n);if(!t||typeof t!=`object`)throw new O(`${y(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(r=>{if(e[r]!==t[r])throw new O(`Entries are not equal at key '${String(r)}'.`,n)})},notEntriesEqual(e,t,n){if(e&&typeof e==`object`&&t&&typeof t==`object`&&!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>e[n]!==t[n]))throw new O(`Entries are equal.`,n)}},Bo={assert:zo,check:{entriesEqual(e,t){return!e||typeof e!=`object`||!t||typeof t!=`object`?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>e[n]===t[n])},notEntriesEqual(e,t){return!e||typeof e!=`object`||!t||typeof t!=`object`||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>e[n]!==t[n])}},assertWrap:{entriesEqual(e,t,n){if(!e||typeof e!=`object`)throw new O(`${y(e)} is not an object.`,n);if(!t||typeof t!=`object`)throw new O(`${y(t)} is not an object.`,n);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(r=>{if(e[r]!==t[r])throw new O(`Entries are not equal at key '${String(r)}'.`,n)}),e},notEntriesEqual(e,t,n){if(!e||typeof e!=`object`||!t||typeof t!=`object`||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>e[n]!==t[n]))return e;throw new O(`Entries are equal.`,n)}},checkWrap:{entriesEqual(e,t){if(e&&typeof e==`object`&&t&&typeof t==`object`&&Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>e[n]===t[n]))return e},notEntriesEqual(e,t){if(!e||typeof e!=`object`||!t||typeof t!=`object`||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>e[n]!==t[n]))return e}},waitUntil:{entriesEqual:k(zo.entriesEqual),notEntriesEqual:k(zo.notEntriesEqual)}};function Vo(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Ho(e,t){if(!(e===t||Vo(e,t))){if(e!=null&&t!=null&&typeof e==`object`&&typeof t==`object`){let n=Object.keys(e).sort(),r=Object.keys(t).sort();if(n.length!==r.length)throw Error(`Values are not JSON equal.`);if(!Vo(n,r))throw Error(`Values are JSON equal.`);Object.keys(e).forEach(n=>{try{Ho(e[n],t[n])}catch(e){throw Le(e,`JSON objects are not equal at key '${n}'.`)}})}throw Error(`Values are not JSON equal.`)}}function Uo(e,t){if(e===t||Vo(e,t))return!0;if(e!=null&&t!=null&&typeof e==`object`&&typeof t==`object`){let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length!==r.length||!Vo(n,r)?!1:Object.keys(e).every(n=>Uo(e[n],t[n]))}return!1}var Wo={jsonEquals(e,t,n){try{Ho(e,t)}catch(e){throw new O(S(e),n)}},notJsonEquals(e,t,n){try{Ho(e,t)}catch{return}throw new O(`Values are JSON equal.`,n)}},Go={assert:Wo,check:{jsonEquals(e,t){return Uo(e,t)},notJsonEquals(e,t){return!Uo(e,t)}},assertWrap:{jsonEquals(e,t,n){try{return Ho(e,t),e}catch(e){throw new O(S(e),n)}},notJsonEquals(e,t,n){try{Ho(e,t)}catch{return e}throw new O(`Values are JSON equal.`,n)}},checkWrap:{jsonEquals(e,t){if(Uo(e,t))return e},notJsonEquals(e,t){if(!Uo(e,t))return e}},waitUntil:{jsonEquals:k(Wo.jsonEquals),notJsonEquals:k(Wo.notJsonEquals)}};function Ko(e){if(e===void 0)return`undefined`;if(e===null)return`null`;let t=e[Symbol.toStringTag];return typeof t==`string`?t:Object.prototype.toString.call(e).slice(8,-1)}function qo(){this._key=`chai/deep-eql__`+Math.random()+Date.now()}qo.prototype={get:function(e){return e[this._key]},set:function(e,t){Object.isExtensible(e)&&Object.defineProperty(e,this._key,{value:t,configurable:!0})}};var Jo=typeof WeakMap==`function`?WeakMap:qo;function Yo(e,t,n){if(!n||ps(e)||ps(t))return null;var r=n.get(e);if(r){var i=r.get(t);if(typeof i==`boolean`)return i}return null}function Xo(e,t,n,r){if(!(!n||ps(e)||ps(t))){var i=n.get(e);i?i.set(t,r):(i=new Jo,i.set(t,r),n.set(e,i))}}var Zo=Qo;function Qo(e,t,n){if(n&&n.comparator)return es(e,t,n);var r=$o(e,t);return r===null?es(e,t,n):r}function $o(e,t){return e===t?e!==0||1/e==1/t:e!==e&&t!==t?!0:ps(e)||ps(t)?!1:null}function es(e,t,n){n||={},n.memoize=n.memoize===!1?!1:n.memoize||new Jo;var r=n&&n.comparator,i=Yo(e,t,n.memoize);if(i!==null)return i;var a=Yo(t,e,n.memoize);if(a!==null)return a;if(r){var o=r(e,t);if(o===!1||o===!0)return Xo(e,t,n.memoize,o),o;var s=$o(e,t);if(s!==null)return s}var c=Ko(e);if(c!==Ko(t))return Xo(e,t,n.memoize,!1),!1;Xo(e,t,n.memoize,!0);var l=ts(e,t,c,n);return Xo(e,t,n.memoize,l),l}function ts(e,t,n,r){switch(n){case`String`:case`Number`:case`Boolean`:case`Date`:return Qo(e.valueOf(),t.valueOf());case`Promise`:case`Symbol`:case`function`:case`WeakMap`:case`WeakSet`:return e===t;case`Error`:return ds(e,t,[`name`,`message`,`code`],r);case`Arguments`:case`Int8Array`:case`Uint8Array`:case`Uint8ClampedArray`:case`Int16Array`:case`Uint16Array`:case`Int32Array`:case`Uint32Array`:case`Float32Array`:case`Float64Array`:case`Array`:return is(e,t,r);case`RegExp`:return ns(e,t);case`Generator`:return as(e,t,r);case`DataView`:return is(new Uint8Array(e.buffer),new Uint8Array(t.buffer),r);case`ArrayBuffer`:return is(new Uint8Array(e),new Uint8Array(t),r);case`Set`:return rs(e,t,r);case`Map`:return rs(e,t,r);case`Temporal.PlainDate`:case`Temporal.PlainTime`:case`Temporal.PlainDateTime`:case`Temporal.Instant`:case`Temporal.ZonedDateTime`:case`Temporal.PlainYearMonth`:case`Temporal.PlainMonthDay`:return e.equals(t);case`Temporal.Duration`:return e.total(`nanoseconds`)===t.total(`nanoseconds`);case`Temporal.TimeZone`:case`Temporal.Calendar`:return e.toString()===t.toString();default:return fs(e,t,r)}}function ns(e,t){return e.toString()===t.toString()}function rs(e,t,n){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var r=[],i=[];return e.forEach(function(e,t){r.push([e,t])}),t.forEach(function(e,t){i.push([e,t])}),is(r.sort(),i.sort(),n)}function is(e,t,n){var r=e.length;if(r!==t.length)return!1;if(r===0)return!0;for(var i=-1;++i<r;)if(Qo(e[i],t[i],n)===!1)return!1;return!0}function as(e,t,n){return is(cs(e),cs(t),n)}function os(e){return typeof Symbol<`u`&&typeof e==`object`&&Symbol.iterator!==void 0&&typeof e[Symbol.iterator]==`function`}function ss(e){if(os(e))try{return cs(e[Symbol.iterator]())}catch{return[]}return[]}function cs(e){for(var t=e.next(),n=[t.value];t.done===!1;)t=e.next(),n.push(t.value);return n}function ls(e){var t=[];for(var n in e)t.push(n);return t}function us(e){for(var t=[],n=Object.getOwnPropertySymbols(e),r=0;r<n.length;r+=1){var i=n[r];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}function ds(e,t,n,r){var i=n.length;if(i===0)return!0;for(var a=0;a<i;a+=1)if(Qo(e[n[a]],t[n[a]],r)===!1)return!1;return!0}function fs(e,t,n){var r=ls(e),i=ls(t),a=us(e),o=us(t);if(r=r.concat(a),i=i.concat(o),r.length&&r.length===i.length)return is(ms(r).sort(),ms(i).sort())!==!1&&ds(e,t,r,n);var s=ss(e),c=ss(t);return s.length&&s.length===c.length?(s.sort(),c.sort(),is(s,c,n)):r.length===0&&s.length===0&&i.length===0&&c.length===0}function ps(e){return typeof e!=`object`||!e}function ms(e){return e.map(function(e){return typeof e==`symbol`?e.toString():e})}var hs=class extends O{name=`DiffError`;constructor(e,t,n,r){let i=Ee({actual:t,expected:n});super([e,bo(i)].join(`
`),r)}};function gs(e,t){return typeof e==`function`&&typeof t==`function`||null}var _s={strictEquals(e,t,n){if(e!==t)throw typeof e==`object`&&e||typeof t==`object`&&t?new O(`Strict reference equality failed for \n\n${y(t)}\n\n.`,n):new hs(`Not strictly equal.`,e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e==`object`&&e?new O(`Strict reference INequality failed for \n\n${y(t)}\n\n.`,n):new O(`\n\n${y(e)}\n\nstrictly equals\n\n${y(t)}\n\n`,n)},looseEquals(e,t,n){if(e!=t)throw typeof e==`object`&&e||typeof t==`object`&&t?new O(`Loose reference equality failed for \n\n${y(t)}\n\n.`,n):new hs(`Not loosely equal.`,e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e==`object`&&e?new O(`Loose reference INequality failed for \n\n${y(t)}\n\n.`,n):new O(`\n\n${y(e)}\n\nloosely equals\n\n${y(t)}\n\n`,n)},deepEquals(e,t,n){if(!Zo(e,t,{comparator:gs}))throw new hs(`Not deeply equal.`,e,t,n)},notDeepEquals(e,t,n){if(Zo(e,t,{comparator:gs}))throw new O(`\n\n${y(e)}\n\ndeeply equals\n\n${y(t)}\n\n`,n)}},vs=_s.deepEquals,ys={assert:_s,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return Zo(e,t,{comparator:gs})},notDeepEquals(e,t){return!Zo(e,t,{comparator:gs})}},assertWrap:{strictEquals(e,t,n){if(e===t)return e;throw typeof e==`object`&&e||typeof t==`object`&&t?new O(`Strict reference equality failed for \n\n${y(t)}\n\n.`,n):new hs(`Not strictly equal.`,e,t,n)},notStrictEquals(e,t,n){if(e===t)throw typeof e==`object`&&e?new O(`Strict reference INequality failed for \n\n${y(t)}\n\n.`,n):new O(`\n\n${y(e)}\n\nstrictly equals\n\n${y(t)}\n\n`,n);return e},looseEquals(e,t,n){if(e==t)return e;throw typeof e==`object`&&e||typeof t==`object`&&t?new O(`Loose reference equality failed for \n\n${y(t)}\n\n.`,n):new hs(`Not loosely equal.`,e,t,n)},notLooseEquals(e,t,n){if(e==t)throw typeof e==`object`&&e?new O(`Loose reference INequality failed for \n\n${y(t)}\n\n.`,n):new O(`\n\n${y(e)}\n\nloosely equals\n\n${y(t)}\n\n`,n);return e},deepEquals(e,t,n){if(Zo(e,t,{comparator:gs}))return e;throw new hs(`Not deeply equal.`,e,t,n)},notDeepEquals(e,t,n){if(Zo(e,t,{comparator:gs}))throw new O(`\n\n${y(e)}\n\ndeeply equals\n\n${y(t)}\n\n`,n);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(Zo(e,t,{comparator:gs}))return e},notDeepEquals(e,t){if(!Zo(e,t,{comparator:gs}))return e}},waitUntil:{strictEquals:k(_s.strictEquals),notStrictEquals:k(_s.notStrictEquals),looseEquals:k(_s.looseEquals),notLooseEquals:k(_s.notLooseEquals),deepEquals:k(_s.deepEquals),notDeepEquals:k(_s.notDeepEquals)}};function bs(e){return Array.isArray(e)?e:Reflect.ownKeys(e).map(t=>e[t])}function xs(e,t){if(typeof e==`string`)return typeof t==`string`&&e.includes(t);try{return bs(e).includes(t)}catch{return!1}}function Ss(e,t){return typeof t==`string`?t.includes(e):xs(t,e)}var Cs={hasValue(e,t,n){if(!xs(e,t))throw new O(`'${y(e)}' does not have value '${y(t)}'.`,n)},lacksValue(e,t,n){if(xs(e,t))throw new O(`'${y(e)}' has value '${y(t)}'.`,n)},hasValues(e,t,n){let r;if(typeof e==`string`)r=t.filter(t=>!(typeof t==`string`&&e.includes(t)));else try{let n=bs(e);r=t.filter(e=>!n.includes(e))}catch{throw new O(`'${y(e)}' does not have values '${y(t)}'.`,n)}if(r.length)throw new O(`'${y(e)}' does not have values '${y(r)}'.`,n)},lacksValues(e,t,n){let r=[];if(typeof e==`string`)r=t.filter(t=>typeof t==`string`&&e.includes(t));else try{let n=bs(e);r=t.filter(e=>n.includes(e))}catch{}if(r.length)throw new O(`'${y(e)}' has values '${y(r)}'.`,n)},isIn(e,t,n){if(!Ss(e,t))throw new O(`'${y(e)}'\n\nis not in\n\n${y(t)}.`,n)},isNotIn(e,t,n){if(Ss(e,t))throw new O(`'${y(e)}'\n\nis in\n\n${y(t)}.`,n)},isEmpty(e,t){if(typeof e!=`string`&&typeof e!=`object`)throw new O(`'${y(e)}' is not empty.`,t);if(typeof e==`string`&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e==`object`&&!Object.keys(e).length)return;throw new O(`'${y(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e==`string`||typeof e==`object`){if(typeof e==`string`&&!e){if(!e)throw new O(`'${y(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new O(`'${y(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new O(`'${y(e)}' is not empty.`,t)}else if(typeof e==`object`&&!Object.keys(e).length)throw new O(`'${y(e)}' is not empty.`,t)}}},ws={assert:Cs,check:{hasValue(e,t){return xs(e,t)},lacksValue(e,t){return!xs(e,t)},hasValues(e,t){return t.every(t=>xs(e,t))},lacksValues(e,t){return t.every(t=>!xs(e,t))},isIn(e,t){return Ss(e,t)},isNotIn(e,t){return!Ss(e,t)},isEmpty(e){return typeof e!=`string`&&typeof e!=`object`?!1:typeof e==`string`?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!=`string`&&typeof e!=`object`?!0:typeof e==`string`?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,n){if(!xs(e,t))throw new O(`'${y(e)}' does not have value '${y(t)}'.`,n);return e},lacksValue(e,t,n){if(xs(e,t))throw new O(`'${y(e)}' has value '${y(t)}'.`,n);return e},hasValues(e,t,n){let r;if(typeof e==`string`)r=t.filter(t=>!(typeof t==`string`&&e.includes(t)));else try{let n=bs(e);r=t.filter(e=>!n.includes(e))}catch{throw new O(`'${y(e)}' does not have values '${y(t)}'.`,n)}if(r.length)throw new O(`'${y(e)}' does not have values '${y(r)}'.`,n);return e},lacksValues(e,t,n){let r=[];if(typeof e==`string`)r=t.filter(t=>typeof t==`string`&&e.includes(t));else try{let n=bs(e);r=t.filter(e=>n.includes(e))}catch{}if(r.length)throw new O(`'${y(e)}' has values '${y(r)}'.`,n);return e},isIn(e,t,n){if(!Ss(e,t))throw new O(`'${y(e)}'\n\nis not in\n\n${y(t)}.`,n);return e},isNotIn(e,t,n){if(Ss(e,t))throw new O(`'${y(e)}'\n\nis in\n\n${y(t)}.`,n);return e},isEmpty(e,t){if(typeof e!=`string`&&typeof e!=`object`)throw new O(`'${y(e)}' is not empty.`,t);if(typeof e==`string`&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e==`object`&&!Object.keys(e).length)return e;throw new O(`'${y(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!=`string`&&typeof e!=`object`)return e;if(typeof e==`string`&&!e){if(!e)throw new O(`'${y(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new O(`'${y(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new O(`'${y(e)}' is empty.`,t)}else if(typeof e==`object`&&!Object.keys(e).length)throw new O(`'${y(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(xs(e,t))return e},lacksValue(e,t){if(!xs(e,t))return e},hasValues(e,t){if(t.every(t=>xs(e,t)))return e},lacksValues(e,t){if(!t.every(t=>xs(e,t)))return e},isIn(e,t){if(Ss(e,t))return e},isNotIn(e,t){if(!Ss(e,t))return e},isEmpty(e){if(typeof e==`string`||typeof e==`object`){if(typeof e==`string`){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e==`object`&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!=`string`&&typeof e!=`object`)return e;if(typeof e==`string`){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e==`object`&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:k(Cs.hasValue),lacksValue:k(Cs.lacksValue),hasValues:k(Cs.hasValues),lacksValues:k(Cs.lacksValues),isIn:k(Cs.isIn),isNotIn:k(Cs.isNotIn),isEmpty:k(Cs.isEmpty),isNotEmpty:k(Cs.isNotEmpty)}},Ts={isHttpStatus(e,t){if(!Io(e,w))throw new O(`${y(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,n){if(!Io(e,w))throw new O(`${y(e)} is not a valid HTTP status.`,n);if(!Ss(e,Re[t]))throw new O(`${y(e)} is not a '${t}' HTTP status.`,n)}},Es={assert:Ts,check:{isHttpStatus(e){return Io(e,w)},isHttpStatusCategory(e,t){return Io(e,w)&&Ss(e,Re[t])}},assertWrap:{isHttpStatus(e,t){if(!Io(e,w))throw new O(`${y(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,n){if(!Io(e,w))throw new O(`${y(e)} is not a valid HTTP status.`,n);if(Ss(e,Re[t]))return e;throw new O(`${y(e)} is not a '${t}' HTTP status.`,n)}},checkWrap:{isHttpStatus(e){if(Io(e,w))return e},isHttpStatusCategory(e,t){if(Io(e,w)&&Ss(e,Re[t]))return e}},waitUntil:{isHttpStatus:k(Ts.isHttpStatus),isHttpStatusCategory:k(Ts.isHttpStatusCategory)}},Ds={instanceOf(e,t,n){if(!(e instanceof t))throw new O(`'${y(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new O(`'${y(e)}' is an instance of '${t.name}'`,n)}},Os={assert:Ds,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,n){if(e instanceof t)return e;throw new O(`'${y(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new O(`'${y(e)}' is an instance of '${t.name}'`,n);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:k(Ds.instanceOf),notInstanceOf:k(Ds.notInstanceOf)}},ks=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function As(e,t){return e!=null&&(typeof e==`object`||typeof e==`function`?ks:ks.slice(1)).some(n=>{try{return n(e,t)}catch{return!1}})}var js={isKeyOf(e,t,n){if(!As(t,e))throw new O(`'${String(e)}' is not a key of '${y(t)}'.`,n)},isNotKeyOf(e,t,n){if(As(t,e))throw new O(`'${String(e)}' is a key of '${y(t)}'.`,n)},hasKey(e,t,n){if(!As(e,t))throw new O(`'${y(e)}' does not have key '${String(t)}'.`,n)},lacksKey(e,t,n){if(As(e,t))throw new O(`'${y(e)}' has key '${String(t)}'.`,n)},hasKeys(e,t,n){let r=t.filter(t=>!As(e,t));if(r.length)throw new O(`'${y(e)}' does not have keys '${r.join(`,`)}'.`,n)},lacksKeys(e,t,n){let r=t.filter(t=>As(e,t));if(r.length)throw new O(`'${y(e)}' does not lack keys '${r.join(`,`)}'.`,n)},hasDefinedProperty(e,t,n){if(e[t]==null)throw new O(`'${y(e)}' does not have a defined property '${String(t)}'.`,n)},hasDefinedProperties(e,t,n){let r=t.filter(t=>e[t]==null);if(r.length)throw new O(`'${y(e)}' does not have defined properties '${r.join(`,`)}'.`,n)}},Ms={assert:js,check:{isKeyOf(e,t){return As(t,e)},isNotKeyOf(e,t){return!As(t,e)},hasKey:As,lacksKey(e,t){return!As(e,t)},hasKeys(e,t){return t.every(t=>As(e,t))},lacksKeys(e,t){return t.every(t=>!As(e,t))},hasDefinedProperty(e,t){return e[t]!=null},hasDefinedProperties(e,t){return t.every(t=>e[t]!=null)}},assertWrap:{isKeyOf(e,t,n){if(!As(t,e))throw new O(`'${String(e)}' is not a key of '${y(t)}'.`,n);return e},isNotKeyOf(e,t,n){if(As(t,e))throw new O(`'${String(e)}' is a key of '${y(t)}'.`,n);return e},hasKey(e,t,n){if(!As(e,t))throw new O(`'${y(e)}' does not have key '${String(t)}'.`,n);return e},lacksKey(e,t,n){if(As(e,t))throw new O(`'${y(e)}' has key '${String(t)}'.`,n);return e},hasKeys(e,t,n){let r=t.filter(t=>!As(e,t));if(r.length)throw new O(`'${y(e)}' does not have keys '${r.join(`,`)}'.`,n);return e},lacksKeys(e,t,n){let r=t.filter(t=>As(e,t));if(r.length)throw new O(`'${y(e)}' does not lack keys '${r.join(`,`)}'.`,n);return e},hasDefinedProperty(e,t,n){if(e[t]==null)throw new O(`'${y(e)}' does not have a defined property '${String(t)}'.`,n);return e},hasDefinedProperties(e,t,n){let r=t.filter(t=>e[t]==null);if(r.length)throw new O(`'${y(e)}' does not have defined properties '${r.join(`,`)}'.`,n);return e}},checkWrap:{isKeyOf(e,t){if(As(t,e))return e},isNotKeyOf(e,t){if(!As(t,e))return e},hasKey(e,t){if(As(e,t))return e},lacksKey(e,t){if(!As(e,t))return e},hasKeys(e,t){if(t.every(t=>As(e,t)))return e},lacksKeys(e,t){if(t.every(t=>!As(e,t)))return e},hasDefinedProperty(e,t){if(e[t]!=null)return e},hasDefinedProperties(e,t){if(t.every(t=>e[t]!=null))return e}},waitUntil:{isKeyOf:k(js.isKeyOf),isNotKeyOf:k(js.isNotKeyOf),hasKey:k(js.hasKey),lacksKey:k(js.lacksKey),hasKeys:k(js.hasKeys),lacksKeys:k(js.lacksKeys),hasDefinedProperty:k(js.hasDefinedProperty),hasDefinedProperties:k(js.hasDefinedProperties)}};function Ns(e,t,n){if((Array.isArray(e)||typeof e==`string`?e.length:x(e).length)<t)throw new O(`Length '${e.length}' is not at least '${t}'.`,n)}function Ps(e,t,n){if((Array.isArray(e)||typeof e==`string`?e.length:x(e).length)!==t)throw new O(`Length '${e.length}' is not exactly '${t}'.`,n)}var Fs={isLengthAtLeast:Ns,isLengthExactly:Ps},Is={assert:Fs,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e==`string`?e.length:x(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e==`string`?e.length:x(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,n)=>{if((Array.isArray(e)||typeof e==`string`?e.length:x(e).length)<t)throw new O(`Length '${e.length}' is not at least '${t}'.`,n);return e}),isLengthExactly:((e,t,n)=>{if((Array.isArray(e)||typeof e==`string`?e.length:x(e).length)!==t)throw new O(`Length '${e.length}' is not exactly '${t}'.`,n);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e==`string`?e.length:x(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e==`string`?e.length:x(e).length)===t)return e})},waitUntil:{isLengthAtLeast:k(Fs.isLengthAtLeast),isLengthExactly:k(Fs.isLengthExactly)}},Ls={assert:{never(e){throw new O(`This code should not have executed.`,e)}},assertWrap:{},check:{},checkWrap:{},waitUntil:{}},Rs={isDefined(e,t){if(e==null)throw new O(`'${y(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new O(`'${y(e)}' is not a nullish.`,t)}},zs={assert:Rs,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new O(`'${y(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new O(`'${y(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:k(Rs.isDefined),isNullish:k(Rs.isNullish)}},Bs={isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new O(`${e} is not within the bounds ${y({min:n,max:t})}`,r)},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new O(`${e} is not outside the bounds ${y({min:t,max:n})}`,r)},isInteger(e,t){if(typeof e!=`number`||isNaN(e)||!Number.isInteger(e))throw new O(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new O(`${e} is an integer.`,t)},isAbove(e,t,n){if(e<=t)throw new O(`${e} is not above ${t}`,n)},isAtLeast(e,t,n){if(e<t)throw new O(`${e} is not at least ${t}`,n)},isBelow(e,t,n){if(e>=t)throw new O(`${e} is not below ${t}`,n)},isAtMost(e,t,n){if(e>t)throw new O(`${e} is not at most ${t}`,n)},isNaN(e,t){if(!isNaN(e))throw new O(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new O(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new O(`${e} is not infinite`,t)},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new O(`${e} is not within ±${n} of ${t}`,r)},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new O(`${e} is within ±${n} of ${t}`,r)}},Vs={assert:Bs,check:{isInBounds(e,{max:t,min:n}){return n<=e&&e<=t},isOutBounds(e,{max:t,min:n}){return e<n||t<e},isInteger(e){return typeof e==`number`&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!=`number`||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,n){return t-n<=e&&e<=t+n},isNotApproximately(e,t,n){return e<t-n||e>t+n}},assertWrap:{isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new O(`${e} is not within the bounds ${y({min:n,max:t})}`,r);return e},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new O(`${e} is not outside the bounds ${y({min:t,max:n})}`,r);return e},isInteger(e,t){if(typeof e!=`number`||isNaN(e)||!Number.isInteger(e))throw new O(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new O(`${e} is an integer.`,t);return e},isAbove(e,t,n){if(e<=t)throw new O(`${e} is not above ${t}`,n);return e},isAtLeast(e,t,n){if(e<t)throw new O(`${e} is not at least ${t}`,n);return e},isBelow(e,t,n){if(e>=t)throw new O(`${e} is not below ${t}`,n);return e},isAtMost(e,t,n){if(e>t)throw new O(`${e} is not at most ${t}`,n);return e},isNaN(e,t){if(!isNaN(e))throw new O(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new O(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new O(`${e} is not infinite`,t);return e},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new O(`${e} is not within ±${n} of ${t}`,r);return e},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new O(`${e} is within ±${n} of ${t}`,r);return e}},checkWrap:{isInBounds(e,{max:t,min:n}){if(n<=e&&e<=t)return e},isOutBounds(e,{max:t,min:n}){if(e<n||t<e)return e},isInteger(e){if(typeof e==`number`&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!=`number`||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!(isNaN(e)||e===1/0||e===-1/0))return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,n){if(t-n<=e&&e<=t+n)return e},isNotApproximately(e,t,n){if(e<t-n||e>t+n)return e}},waitUntil:{isInBounds:k(Bs.isInBounds),isOutBounds:k(Bs.isOutBounds),isInteger:k(Bs.isInteger),isNotInteger:k(Bs.isNotInteger),isAbove:k(Bs.isAbove),isAtLeast:k(Bs.isAtLeast),isBelow:k(Bs.isBelow),isAtMost:k(Bs.isAtMost),isNaN:k(Bs.isNaN),isFinite:k(Bs.isFinite),isInfinite:k(Bs.isInfinite),isApproximately:k(Bs.isApproximately),isNotApproximately:k(Bs.isNotApproximately)}};function Hs(e,t,n,r,i){return Ws(...Us(e,t,n,r,i),!1)}function Us(e,t,n,r,i){let a=Array.isArray(n);return[a?e:vs,a?t:e,a?n:t,a?r:n,a?i:r]}function Ws(e,t,n,r,i,a){let o=t(...n);if(o instanceof Promise)return new Promise(async(n,s)=>{try{let t=await o;e(t,r),a?n(t):n()}catch(e){s(new O(`Output from '${t.name}' did not produce expected output. ${S(e)}`,i))}});try{return e(o,r),a?o:void 0}catch(e){throw new O(`Output from '${t.name}' did not produce expected output. ${S(e)}`,i)}}function Gs(e,t,n,r,i){try{let a=Ws(...Us(e,t,n,r,i),!1);return a instanceof Promise?new Promise(async e=>{try{await a,e(!0)}catch{e(!1)}}):!0}catch{return!1}}function Ks(e,t,n,r,i){return Ws(...Us(e,t,n,r,i),!0)}function qs(e,t,n,r,i){try{let a=Ws(...Us(e,t,n,r,i),!0);return a instanceof Promise?new Promise(async e=>{try{e(await a)}catch{e(void 0)}}):a}catch{return}}var Js=Symbol(`not set`);async function Ys(e,t,n,r,i,a){let o=Array.isArray(n),s=o?e:vs,c=o?t:e,l=o?n:t,u=o?r:n,d=Eo(o?i:r),f=o?a:i,p=uo(d.timeout,{milliseconds:!0}).milliseconds,m=uo(d.interval,{milliseconds:!0}),h=Js,g;async function _(){try{h=await Ws(s,c,l,u,void 0,!0)}catch(e){h=Js,g=C(e)}}let ee=Date.now();for(;h===Js;)if(await _(),await mo(m),Date.now()-ee>=p)throw Le(g,Ie(f,`Timeout of '${p}' milliseconds exceeded waiting for callback value to match expectations`));return h}var Xs={assert:{output:Hs},check:{output:Gs},assertWrap:{output:Ks},checkWrap:{output:qs},waitUntil:{output:Ys}},Zs={isPropertyKey(e,t){if(typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`)throw new O(`'${y(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e==`string`||typeof e==`number`||typeof e==`symbol`)throw new O(`'${y(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(!Be(e))throw new O(`'${y(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(Be(e))throw new O(`'${y(e)}' is not a Primitive.`,t)}},Qs={assert:Zs,check:{isNotPrimitive(e){return!Be(e)},isNotPropertyKey(e){return typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`},isPrimitive(e){return Be(e)},isPropertyKey(e){return typeof e==`string`||typeof e==`number`||typeof e==`symbol`}},assertWrap:{isNotPrimitive(e,t){if(Be(e))throw new O(`'${y(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e==`string`||typeof e==`number`||typeof e==`symbol`)throw new O(`'${y(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(!Be(e))throw new O(`'${y(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`)throw new O(`'${y(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(!Be(e))return e},isNotPropertyKey(e){if(typeof e!=`string`&&typeof e!=`number`&&typeof e!=`symbol`)return e},isPrimitive(e){if(Be(e))return e},isPropertyKey(e){if(typeof e==`string`||typeof e==`number`||typeof e==`symbol`)return e}},waitUntil:{isNotPrimitive:k(Zs.isNotPrimitive),isNotPropertyKey:k(Zs.isNotPropertyKey),isPrimitive:k(Zs.isPrimitive),isPropertyKey:k(Zs.isPropertyKey)}},$s={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`))throw new O(`'${y(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`)throw new O(`'${y(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new O(`'${y(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new O(`'${y(e)}' is a Promise.`,t)}},ec={assert:$s,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`)},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`))throw new O(`'${y(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`)throw new O(`'${y(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new O(`'${y(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new O(`'${y(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`)return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:k($s.isPromiseLike,!0),isNotPromiseLike:k($s.isNotPromiseLike,!0),isPromise:k($s.isPromise,!0),isNotPromise:k($s.isNotPromise,!0)}},tc={matches(e,t,n){if(!t.test(e))throw new O(`'${e}' does not match ${t}`,n)},mismatches(e,t,n){if(t.test(e))throw new O(`'${e}' matches ${t}`,n)}},nc={assert:tc,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,n){if(!t.test(e))throw new O(`'${e}' does not match ${t}`,n);return e},mismatches(e,t,n){if(t.test(e))throw new O(`'${e}' matches ${t}`,n);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:k(tc.matches,!0),mismatches:k(tc.mismatches,!0)}},rc={isArray(e,t){if(!Array.isArray(e))throw new O(`'${y(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!=`bigint`)throw new O(`'${y(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!=`boolean`)throw new O(`'${y(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!=`function`)throw new O(`'${y(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new O(`'${y(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!=`number`||isNaN(e))throw new O(`'${y(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!=`object`||!e)throw new O(`'${y(e)}' is not a non-null object.`,t)},isPlainObject(e,t){let n=Object.getPrototypeOf(e);if(typeof e!=`object`||!e||n!=null&&n!==Object.prototype&&Object.getPrototypeOf(n)!=null||Symbol.toStringTag in e||Symbol.iterator in e)throw new O(`'${y(e)}' is not a plain object.`,t)},isString(e,t){if(typeof e!=`string`)throw new O(`'${y(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!=`symbol`)throw new O(`'${y(e)}' is not a symbol.`,t)},isUndefined(e,t){if(e!==void 0)throw new O(`'${y(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new O(`'${y(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e==`bigint`)throw new O(`'${y(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e==`boolean`)throw new O(`'${y(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e==`function`)throw new O(`'${y(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new O(`'${y(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e==`number`&&!isNaN(e))throw new O(`'${y(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e==`object`&&e)throw new O(`'${y(e)}' is a non-null object.`,t)},isNotPlainObject(e,t){let n=Object.getPrototypeOf(e);if(!(typeof e!=`object`||!e||n!=null&&n!==Object.prototype&&Object.getPrototypeOf(n)!=null||Symbol.toStringTag in e||Symbol.iterator in e))throw new O(`'${y(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e==`string`)throw new O(`'${y(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e==`symbol`)throw new O(`'${y(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(e===void 0)throw new O(`'${y(e)}' is a undefined.`,t)}},ic={assert:rc,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e==`bigint`},isBoolean(e){return typeof e==`boolean`},isFunction(e){return typeof e==`function`},isNull(e){return e===null},isNumber(e){return typeof e==`number`&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e==`object`&&!!e},isPlainObject(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e==`string`},isSymbol(e){return typeof e==`symbol`},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!=`bigint`},isNotBoolean(e){return typeof e!=`boolean`},isNotFunction(e){return typeof e!=`function`},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!=`number`||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!=`object`||!e},isNotPlainObject(e){if(typeof e!=`object`||!e)return!0;let t=Object.getPrototypeOf(e);return t!=null&&t!==Object.prototype&&Object.getPrototypeOf(t)!=null||Symbol.toStringTag in e||Symbol.iterator in e},isNotString(e){return typeof e!=`string`},isNotSymbol(e){return typeof e!=`symbol`},isNotUndefined(e){return e!==void 0}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new O(`'${y(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!=`bigint`)throw new O(`'${y(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!=`boolean`)throw new O(`'${y(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!=`function`)throw new O(`'${y(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new O(`'${y(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!=`number`||isNaN(e))throw new O(`'${y(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!=`object`||!e)throw new O(`'${y(e)}' is not a non-null object.`,t);return e},isPlainObject(e,t){let n=Object.getPrototypeOf(e);if(typeof e!=`object`||!e||n!=null&&n!==Object.prototype&&Object.getPrototypeOf(n)!=null||Symbol.toStringTag in e||Symbol.iterator in e)throw new O(`'${y(e)}' is not a plain object.`,t);return e},isString(e,t){if(typeof e!=`string`)throw new O(`'${y(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!=`symbol`)throw new O(`'${y(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(e!==void 0)throw new O(`'${y(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new O(`'${y(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e==`bigint`)throw new O(`'${y(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e==`boolean`)throw new O(`'${y(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e==`function`)throw new O(`'${y(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new O(`'${y(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e==`number`&&!isNaN(e))throw new O(`'${y(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e==`object`&&e)throw new O(`'${y(e)}' is a non-null object.`,t);return e},isNotPlainObject(e,t){let n=Object.getPrototypeOf(e);if(typeof e!=`object`||!e||n!=null&&n!==Object.prototype&&Object.getPrototypeOf(n)!=null||Symbol.toStringTag in e||Symbol.iterator in e)return e;throw new O(`'${y(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e==`string`)throw new O(`'${y(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e==`symbol`)throw new O(`'${y(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(e===void 0)throw new O(`'${y(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e==`bigint`)return e},isBoolean(e){if(typeof e==`boolean`)return e},isFunction(e){if(typeof e==`function`)return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e==`number`&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e==`object`&&e)return e},isPlainObject(e){if(typeof e!=`object`||!e)return;let t=Object.getPrototypeOf(e);if((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e==`string`)return e},isSymbol(e){if(typeof e==`symbol`)return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!=`bigint`)return e},isNotBoolean(e){if(typeof e!=`boolean`)return e},isNotFunction(e){if(typeof e!=`function`)return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!=`number`||isNaN(e))return e},isNotObject(e){if(Array.isArray(e)||typeof e!=`object`||!e)return e},isNotPlainObject(e){if(typeof e!=`object`||!e)return e;let t=Object.getPrototypeOf(e);if(t!=null&&t!==Object.prototype&&Object.getPrototypeOf(t)!=null||Symbol.toStringTag in e||Symbol.iterator in e)return e},isNotString(e){if(typeof e!=`string`)return e},isNotSymbol(e){if(typeof e!=`symbol`)return e}},waitUntil:{isArray:k(rc.isArray),isBigInt:k(rc.isBigInt),isBoolean:k(rc.isBoolean),isFunction:k(rc.isFunction),isNull:k(rc.isNull),isNumber:k(rc.isNumber),isObject:k(rc.isObject),isPlainObject:k(rc.isPlainObject),isString:k(rc.isString),isSymbol:k(rc.isSymbol),isUndefined:k(rc.isUndefined),isNotArray:k(rc.isNotArray),isNotBigInt:k(rc.isNotBigInt),isNotBoolean:k(rc.isNotBoolean),isNotFunction:k(rc.isNotFunction),isNotNull:k(rc.isNotNull),isNotNumber:k(rc.isNotNumber),isNotObject:k(rc.isNotObject),isNotPlainObject:k(rc.isNotPlainObject),isNotString:k(rc.isNotString),isNotSymbol:k(rc.isNotSymbol),isNotUndefined:k(rc.isNotUndefined)}},ac;(function(e){e.Assert=`assert`,e.AssertWrap=`assert-wrap`,e.CheckWrap=`check-wrap`,e.Check=`check`})(ac||={});function oc(e,t,n){cc(e,{noError:`No error.`,notInstance:`'${y(e)}' is not an error instance.`},t,n)}function sc(e,t,n){cc(e,{noError:`No Error was thrown.`,notInstance:`Thrown value '${y(e)}' is not an error instance.`},t,n)}function cc(e,t,n,r){if(!e)throw new O(t.noError,r);if(!(e instanceof Error))throw new O(t.notInstance,r);if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){let t=e.constructor.name;throw new O(`Error constructor '${t}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}if(n?.matchMessage){let t=S(e);if(typeof n.matchMessage==`string`){if(!xo(t,n.matchMessage))throw new O(`Error message\n\n'${t}'\n\ndoes not contain\n\n'${n.matchMessage}'.`,r)}else if(!t.match(n.matchMessage))throw new O(`Error message\n\n'${t}'\n\ndoes not match RegExp\n\n'${n.matchMessage}'.`,r)}}function lc(e,t){if(!e||!(e instanceof Error)||t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){let n=S(e);if(typeof t.matchMessage==`string`){if(!xo(n,t.matchMessage))return!1}else if(!n.match(t.matchMessage))return!1}return!0}function uc(e,t,n,r){let i;try{let a=t instanceof Promise?t:t();if(a instanceof Promise)return new Promise(async(t,o)=>{try{await a}catch(e){i=C(e)}try{sc(i,n,r),e===ac.Assert?t():e===ac.Check?t(!0):t(i)}catch(n){e===ac.CheckWrap?t(void 0):e===ac.Check?t(!1):o(C(n))}})}catch(e){i=C(e)}try{return sc(i,n,r),e===ac.Check?!0:e===ac.Assert?void 0:i}catch(t){if(e===ac.CheckWrap)return;if(e===ac.Check)return!1;throw t}}function dc(e,t,n){try{let r=t instanceof Promise?t:t();return r instanceof Promise?new Promise(async(t,i)=>{try{let n=await r;e===ac.Check?t(!0):e===ac.Assert?t():t(n)}catch(r){let a=C(r);e===ac.CheckWrap?t(void 0):e===ac.Check?t(!1):i(new O(`Expected no error but got '${S(a)}'.`,n))}}):e===ac.Check?!0:e===ac.Assert?void 0:r}catch(t){let r=C(t);if(e===ac.CheckWrap)return;if(e===ac.Check)return!1;throw new O(`Expected no error but got '${S(r)}'.`,n)}}function fc(e,t,n){return uc(ac.Assert,e,t,n)}function pc(e,t){return uc(ac.Check,e,t)}function mc(e,t,n){return uc(ac.AssertWrap,e,t,n)}function hc(e,t,n){return uc(ac.CheckWrap,e,t,n)}var gc=k(oc);function _c(e,t,n,r){let i=typeof e==`function`||e instanceof Promise?void 0:e,a=i?t:e,o=typeof n==`object`?r:n,s=typeof n==`object`?n:t;if(typeof a!=`function`)throw TypeError(`Callback is not a function, got '${y(a)}'`);return gc(i,async()=>{try{await a();return}catch(e){return C(e)}},s,o)}function vc(e,t){return dc(ac.Assert,e,t)}function yc(e){return dc(ac.Check,e)}function bc(e,t){return dc(ac.AssertWrap,e,t)}function xc(e,t){return dc(ac.CheckWrap,e,t)}function Sc(e){}var Cc=k(Sc),wc={assert:{throws:fc,doesNotThrow:vc,isError:oc},check:{throws:pc,doesNotThrow:yc,isError(e,t){return lc(e,t)}},assertWrap:{throws:mc,doesNotThrow:bc,isError(e,t,n){return cc(e,{noError:`No error.`,notInstance:`'${y(e)}' is not an error instance.`},t,n),e}},checkWrap:{throws:hc,doesNotThrow:xc,isError(e,t){if(lc(e,t))return e}},waitUntil:{throws:_c,doesNotThrow:Cc,isError:k(oc)}},Tc=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Ec={isUuid(e,t){if(!String(e).match(Tc))throw new O(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(Tc))throw new O(`'${String(e)}' is a UUID.`,t)}},Dc={assert:Ec,check:{isUuid(e){return!!String(e).match(Tc)},isNotUuid(e){return!String(e).match(Tc)}},assertWrap:{isUuid(e,t){if(!String(e).match(Tc))throw new O(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(Tc))throw new O(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(Tc))return e},isNotUuid(e){if(!String(e).match(Tc))return e}},waitUntil:{isUuid:k(Ec.isUuid),isNotUuid:k(Ec.isNotUuid)}},Oc={...Ls.assert,...Oo.assert,...Po.assert,...Bo.assert,...Ro.assert,...Es.assert,...Os.assert,...Go.assert,...Ms.assert,...Is.assert,...zs.assert,...Vs.assert,...Xs.assert,...Qs.assert,...ec.assert,...nc.assert,...ic.assert,...ys.assert,...wc.assert,...Dc.assert,...ws.assert},kc=[Oo,Po,Bo,Ro,Es,Os,Go,Ms,Is,Ls,zs,Vs,Xs,Qs,ec,nc,ic,ys,wc,Dc,ws],Ac=Object.assign({},...kc.map(e=>e.check)),A=Object.assign(function(e){return!!e},Ac);function jc(e,t,n){return Mc(e,t,n,new Set)}function Mc(e,t,n,r){if(e=Nc(e),t=Nc(t),A.isObject(e)&&A.isObject(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),!Mc(x(e).sort(),x(t).sort(),n,r))return!1;let i=!1,a=x(e).map(a=>{let o=Mc(e[a],t[a],n,r);return A.isPromise(o)&&(i=!0),o});return Pc(i,a)}if(A.isArray(e)&&A.isArray(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),e.length!==t.length)return!1;let i=!1,a=e.map((e,a)=>{let o=Mc(e,t[a],n,r);return A.isPromise(o)&&(i=!0),o});return Pc(i,a)}return n(e,t)}function Nc(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function Pc(e,t){return e?new Promise(async(e,n)=>{try{e((await Promise.all(t)).every(A.isTrue))}catch(e){n(C(e))}}):t.every(A.isTrue)}var Fc=Object.assign({},...kc.map(e=>e.assertWrap)),Ic=Object.assign(function(e,t){if(!e)throw new O(`Assertion failed.`,t);return e},Fc);function Lc(e){return{equals(){},notEquals(){},matches(){},notMatches(){},slowEquals(){}}}var Rc={assert:{tsType:Lc},assertWrap:{tsType:void 0},check:{tsType:void 0},checkWrap:{tsType:void 0},waitUntil:{tsType:void 0}},zc={fail(e){throw new O(`Failure triggered.`,e)}},Bc={...Rc.assert,...Oc,...zc},Vc=Object.assign(function(e,t){if(!e)throw new O(`Assertion failed.`,t)},Bc),Hc=Object.assign({},...kc.map(e=>e.checkWrap)),Uc=Object.assign(function(e){if(e)return e},Hc);function Wc(e,t){return A.hasKey(e,`entryType`)&&e.entryType===t}function Gc(e,t){return e.controlType===t}var Kc;(function(e){e.Checkbox=`checkbox`,e.Color=`color`,e.Custom=`custom`,e.Dropdown=`dropdown`,e.Hidden=`hidden`,e.Number=`number`,e.Text=`text`})(Kc||={});var qc=Symbol(`any-type`),Jc={[Kc.Checkbox]:!1,[Kc.Color]:``,[Kc.Custom]:void 0,[Kc.Dropdown]:``,[Kc.Hidden]:qc,[Kc.Number]:0,[Kc.Text]:``};function Yc(e,t){if(!e)return[];let n=[];return Object.entries(e).forEach(([e,r])=>{if(r.controlType===Kc.Custom)return;let i=Jc[r.controlType];i!==qc&&(typeof i!=typeof r.initValue&&n.push(Error(`Control '${e}' in page '${t}' has invalid initValue '${r.initValue}': expected initValue of type ${typeof i} because the control is of type ${r.controlType}.`)),e||n.push(Error(`'${t}' cannot have an empty control name.`)))}),n}function Xc(e,t,n){let r=t;if(e.has(r))return e.get(r);{let t=n();return A.isPromise(t)?new Promise(async(n,i)=>{try{let i=await t;e.set(r,i),n(i)}catch(e){i(C(e))}}):(e.set(r,t),t)}}function Zc(e,t,n){if(t in e)return e[t];{let r=n();return A.isPromise(r)?new Promise(async(n,i)=>{try{let i=await r;e[t]=i,n(i)}catch(e){i(C(e))}}):(e[t]=r,r)}}function Qc(e){return x(e).map(t=>[t,e[t]])}function $c(e){return Object.fromEntries(e)}function el(e,t,n){return e.reduce((e,r,i,a)=>{let o=t(r,i,a);return n(o,r,i,a)&&e.push(o),e},[])}function tl(e,t,n={}){try{let n=!1,r=e.map((e,r,i)=>{let a=t(e,r,i);if(a instanceof Promise)return n=!0,a;if(a)return[a.key,a.value]}).filter(A.isTruthy);return n?new Promise(async(e,t)=>{try{e($c(el(await Promise.all(r),e=>{if(e)return Array.isArray(e)?e:[e.key,e.value]},A.isTruthy)))}catch(e){t(C(e))}}):$c(r)}catch(e){throw C(e)}}function nl(e,t){let n=[],r=!1;for(let i=0;i<e;i++){let e=t(i);A.isPromise(e)&&(r=!0),n.push(e)}return r?Promise.all(n):n}function rl(e){return Array.isArray(e)?e:[e]}function il({min:e,max:t}){let{min:n,max:r}=ze({min:Math.floor(e),max:Math.floor(t)}),i=r-n+1,a=Math.ceil(Math.ceil(Math.log2(i))/8);if(a>65e3)throw RangeError(`Cannot create a random integer so large. ({min: ${n}, max: ${r}})`);let o=Math.floor(256**a/i)*i,s=new Uint8Array(a),c;do crypto.getRandomValues(s),c=s.reduce((e,t,n)=>e+t*256**n,0);while(c>=o);return n+c%i}function al(e){return A.isLengthAtLeast(e,1)?e.length===1?e[0]:Error(e.map(e=>S(e).trim()).join(`
`)):Error()}function ol(e,t={}){try{let n=e();return n instanceof Promise?n.catch(e=>t.handleError?t.handleError(e):A.hasKey(t,`fallbackValue`)?t.fallbackValue:C(e)):n}catch(e){return t.handleError?t.handleError(e):A.hasKey(t,`fallbackValue`)?t.fallbackValue:C(e)}}function sl(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error(`Failed to JSON copy for:`,e),Le(t,`Failed JSON copy`)}}var cl=`modulepreload`,ll=function(e){return`/structured-render/demo/`+e},ul={},dl=function(e){return e.pathname.endsWith(`.css`)},fl=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},pl=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=ll(t,n);let r=s(t),i=dl(r);return fl(ul,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:cl,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ml;(function(e){e.Standard=`stdout`,e.Error=`stderr`})(ml||={});var hl;(function(e){e.Bold=`bold`,e.Debug=`debug`,e.Error=`error`,e.Faint=`faint`,e.Info=`info`,e.Mutate=`mutate`,e.NormalWeight=`normalWeight`,e.Plain=`plain`,e.Reset=`reset`,e.Success=`success`,e.Warning=`warning`})(hl||={});async function gl(){return await Te({async[b.Node](){let e=(await pl(async()=>{let{default:e}=await import(`./ansi-styles-JLbfhppV.js`);return{default:e}},[])).default;return{[hl.Bold]:e.bold.open,[hl.Debug]:e.blueBright.open,[hl.Error]:e.red.open,[hl.Faint]:e.gray.open,[hl.Info]:e.cyan.open,[hl.Mutate]:e.magenta.open,[hl.NormalWeight]:`\x1B[22m`,[hl.Plain]:``,[hl.Reset]:e.reset.open,[hl.Success]:e.green.open,[hl.Warning]:e.yellow.open}},[b.Web](){return Promise.resolve({[hl.Bold]:`font-weight: bold`,[hl.Debug]:`color: blue`,[hl.Error]:`color: red`,[hl.Faint]:`color: grey`,[hl.Info]:`color: teal`,[hl.Mutate]:`color: magenta`,[hl.NormalWeight]:``,[hl.Plain]:``,[hl.Reset]:``,[hl.Success]:`color: green`,[hl.Warning]:`color: orange`})}})}var _l=await gl(),vl={[hl.Bold]:{colors:[_l.bold],logType:ml.Standard},[hl.Debug]:{colors:[_l.debug],logType:ml.Standard},[hl.Faint]:{colors:[_l.faint],logType:ml.Standard},[hl.Info]:{colors:[_l.info],logType:ml.Standard},[hl.Mutate]:{colors:[_l.mutate,_l.bold],logType:ml.Standard},[hl.NormalWeight]:{colors:[_l.normalWeight],logType:ml.Standard},[hl.Plain]:{colors:[],logType:ml.Standard},[hl.Reset]:{colors:[_l.reset],logType:ml.Standard},[hl.Success]:{colors:[_l.success,_l.bold],logType:ml.Standard},[hl.Error]:{colors:[_l.error,_l.bold],logType:ml.Error},[hl.Warning]:{colors:[_l.warning],logType:ml.Error}};function yl({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function bl({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function xl(e,t){try{let n=!1,r=Qc(e).map(([r,i])=>{let a=t(r,i,e);if(a instanceof Promise)return n=!0,a;if(a)return[a.key,a.value]}).filter(A.isTruthy);return n?new Promise(async(e,t)=>{try{e($c(el(await Promise.all(r),e=>{if(e)return Array.isArray(e)?e:[e.key,e.value]},A.isTruthy)))}catch(e){t(C(e))}}):$c(r)}catch(e){throw C(e)}}function Sl(e,t){return xl(e,(n,r)=>{let i=r,a=t(r,e);return a instanceof Promise?a.then(e=>({key:i,value:e})):{key:i,value:a}})}function Cl(e,...t){let n={...e};return t.forEach(e=>{e&&Qc(e).forEach(([e,t])=>{t!=null&&(n[e]=t)})}),n}function wl(e){return Tl({value:e,suffix:`px`})}function Tl({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function El({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function Dl(){return await Te({async[b.Node](){let{inspect:e}=await pl(async()=>{let{inspect:e}=await import(`node:util`);return{inspect:e}},[]);return({args:t,colorKey:n,options:r})=>{let i=t.map(t=>typeof t==`string`?t:e(t));return{text:[r.omitColors?``:r.colorConfig[n].colors.join(``),i.join(`
`),r.omitColors?``:r.colorConfig[hl.Reset].colors.join(``)].join(``),css:void 0}}},[b.Web](){return({args:e,colorKey:t,options:n})=>{let r=n.omitColors?void 0:el(n.colorConfig[t].colors,e=>El({value:e,suffix:`;`}),A.isTruthy).join(`; `);return{text:[e.map(e=>typeof e==`string`?e:e instanceof Error?S(e):y(e)).join(`
`),n.omitColors?``:n.colorConfig[hl.Reset].colors.join(``)].join(``),css:r}}}})}var Ol=await Dl(),kl={colorConfig:vl,omitColors:!1},Al=jl({[ml.Error](){},[ml.Standard](){}});function jl(e,t){let n=Cl(kl,t);function r(t){e[n.colorConfig[t.colorKey].logType](Ol({...t,options:n}))}let i=Sl(hl,e=>(...t)=>r({args:t,colorKey:e}));return{...i,if(e){return e?i:Al}}}var Ml=jl(we(b.Node)?{[ml.Error]({text:e}){process.stderr.write(e+`
`)},[ml.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[ml.Error]({text:e,css:t}){console.error(yl({value:e,prefix:`%c`}),t)},[ml.Standard]({text:e,css:t}){console.log(yl({value:e,prefix:`%c`}),t)}});function Nl(e,{digits:t}){if(t==null)return e;let n=10**t,r=e*n;return Number((Math.round(r)/n).toFixed(t))}function Pl({searchIn:e,searchFor:t,caseSensitive:n,includeLength:r}){let i=_o(yo(t,{caseSensitive:n}),`g`),a=[],o=[];return e.replace(i,(...n)=>{let r=n[n.length-2];if(typeof r!=`number`)throw TypeError(`Match index "${r}" is not a number. Searching for "${t}" in "${e}".`);let i=n[0];if(typeof i!=`string`)throw TypeError(`regExpMatch should've been a string but was ${typeof i}!`);o.push({index:r,length:i.length}),a.push(r);let s=n[0];if(typeof s!=`string`)throw TypeError(`Original match when searching for "${t}" in "${e}" at index ${r} is not a string.`);return s}),r?o:a}function Fl(e,t,{caseSensitive:n}){let r=Pl({searchIn:e,searchFor:t,caseSensitive:n,includeLength:!0}),i=yo(t,{caseSensitive:n});return e.split(i).reduce((t,n,i)=>{let a=r[i],o=t.concat(n);if(a){let t=e.slice(a.index,a.index+a.length);return o.concat(t)}return o},[])}function Il({value:e,splitter:t}){return e.split(t)}function Ll(e,t){let{min:n,max:r}=ze(t);if(t.takeOverflow){let t=r-n+1,i=(e-n)%t;return i<0?n+t+i:n+i}return e>r?n:e<n?r:e}function Rl(e){return e}function zl(e,t){let n=!1,r=x(e).reduce((r,i)=>{let a=t(i,e[i],e);return a instanceof Promise&&(n=!0),r[i]=a,r},{});return n?new Promise(async(e,t)=>{try{await Promise.all(x(r).map(async e=>{let t=await r[e];r[e]=t})),e(r)}catch(e){t(C(e))}}):r}function Bl(e,t){return $c(Qc(e).filter(([n,r])=>t(n,r,e)))}function Vl(e,t){return Bl(e,e=>!t.includes(e))}function Hl(e){return x(e).map(t=>e[t])}function Ul(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g,` `).replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g,` `)}var Wl=`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`.split(``);function Gl(e=16){let t=``;for(let n=0;n<e;n++){let e=il({min:0,max:Wl.length-1});t+=Wl[e]}return t}var Kl;(function(e){e.Upper=`upper`,e.Lower=`lower`})(Kl||={});var ql={firstLetterCase:Kl.Lower};function Jl(e,t){if(!e.length)return``;let n=e[0];return(t===Kl.Upper?n.toUpperCase():n.toLowerCase())+e.slice(1)}function Yl(e,t={}){let n=e.toLowerCase();return n.length?Jl(n.replace(/^-+/,``).replace(/-{2,}/g,`-`).replace(/-(?:.|$)/g,e=>{let t=e[1];return t?t.toUpperCase():``}),Cl(ql,t).firstLetterCase):``}function Xl(e,t=`and`){if(e.length<2)return e.join(``);let n=e.length>2?`, `:` `;return`${e.slice(0,-1).join(n)}${n}${t} ${e[e.length-1]}`}function Zl({value:e,wrapper:t}){return yl({value:Tl({value:e,suffix:t}),prefix:t})}function Ql(){function e(e){return class extends CustomEvent{static type=e;constructor(t){super(e,{bubbles:!0,composed:!0,...t})}}}return e}function $l(e,t){let n=t??Event;return class extends n{static type=e;constructor(t){super(e,{bubbles:!0,composed:!0,...t})}}}var eu=class{listeners={};universalListeners=new Map;getListenerCount(){return Hl(this.listeners).map(e=>e.size||0).reduce((e,t)=>e+t,0)+this.universalListeners.size}listenToAll(e,t={}){let n=()=>this.universalListeners.delete(e)||!1;function r(r,i){t.once&&n(),e(r,i)}return this.universalListeners.set(e,{listener:r,removeListener:n}),n}removeUniversalListener(e){return!!this.universalListeners.get(e)?.removeListener()}listen(e,t,n={}){let r=A.isString(e)?e:e.type,i=()=>this.listeners[r]?.delete(t)||!1;function a(e,r){n.once&&i(),t(e,r)}return Zc(this.listeners,r,()=>new Map).set(t,{listener:a,removeListener:i}),i}removeListener(e,t){let n=A.isString(e)?e:e.type,r=this.listeners[n];if(!r)return!1;let i=r.get(t);return i?i.removeListener():!1}dispatch(e){let t=this.listeners[e.type];e.target??Object.defineProperty(e,"target",{writable:!1,value:this});let n=t?.size||0;return t?.forEach(t=>{t.listener(e,t.removeListener)}),this.universalListeners.forEach(t=>{t.listener(e,t.removeListener)}),n+this.universalListeners.size}removeAllListeners(){let e=Hl(this.listeners).reduce((e,t)=>{let n=t.size||0;return t.clear(),e+n},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),e}destroy(){this.removeAllListeners()}},tu=class extends eu{};function nu(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function ru(e,t,n){return nu(globalThis,e,t,n)}function iu(e,t){let n=au(e.title);return e.parent?[...iu(e.parent,!1),au(e.parent.title)].concat(t?[n]:[]):t?[n]:[]}function au(e){return Ul(e).toLowerCase().replaceAll(/\s/g,`-`)}function ou({searchFor:e,searchIn:t}){return e.every((e,n)=>t[n]===e)}var su=/[/?#&=]/;function cu(e){let t=e.match(su);return e.trim()?au(e)?t?Error(`Book page title has invalid character '${t[0]}'.`):void 0:Error(`Book page title resolved to empty breadcrumb.`):Error(`Cannot define an element-book page with an empty title.`)}var lu={[c.ElementExample](){return[]},[c.Page](e){return[cu(e.title),...Yc(e.controls,e.title)].filter(A.isTruthy)},[c.Root](){return[]}},uu=`_isBookTreeNode`,du=new Map;function fu(e){return du.get(e)}function pu(e,t){Xc(du,e,()=>t)}function mu(e,t){return hu(e)&&e.entry.entryType===t}function hu(e){return!!(A.hasKeys(e,[`_isBookTreeNode`,`entry`])&&e._isBookTreeNode)}function gu(){return{[uu]:!0,entry:{entryType:c.Root,title:``,parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:``,fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function _u({entries:e,debug:t}){let n=fu(e);if(n)return n;let r=gu();e.forEach(e=>yu({tree:r,newEntry:e,debug:t,manuallyAdded:!0}));let i={tree:r,flattenedNodes:xu(r)};return pu(e,i),t&&console.info(`element-book tree:`,r),i}function vu(e,t,n){if(!t.parent)return e;let r=bu(t,e);if(r)return r;n&&console.info(`parent of ${t.title} not found in tree; adding it now.`),yu({tree:e,newEntry:t.parent,debug:n,manuallyAdded:!1});let i=bu(t,e);if(!i)throw Error(`Failed to find node despite having just added it: ${iu(t,!1).join(` > `)}`);return i}function yu({tree:e,newEntry:t,debug:n,manuallyAdded:r}){let i=lu[t.entryType](t);t.errors.push(...i);let a=vu(e,t,n),o=au(t.title),s=a.children[o];if(s){if(r){if(s.manuallyAdded){s.entry.errors.push(Error(`Cannot create duplicate '${o}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:``}`));return}s.manuallyAdded=!0}return}let l={[uu]:!0,children:{},urlBreadcrumb:o,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,o],entry:t,manuallyAdded:r};a.children[o]=l,Wc(t,c.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(t=>yu({tree:e,newEntry:t,debug:n,manuallyAdded:r}))}function bu(e,t){let n=hu(e)?e.fullUrlBreadcrumbs.slice(0,-1):iu(e,!1);if(n.length)return n.reduce((e,t)=>{if(e)return e.children[t]},t)}function xu(e){return[e,...e.entry.errors.length?[]:Object.values(e.children).map(e=>xu(e))].flat()}function Su(e,t){return Cu(e,[``,...t],void 0)}function Cu(e,t,n){let r=t.slice(1),i=r[0];!i&&n&&(e.controls=n);let a=e.children[i||``],o=a&&Cu(a,r,n);return{...e.controls,...o}}function wu(e,t,n){let r={...e};return Cu(r,[``,...t],n),r}function Tu(e,t){let n=t?.controls||(mu(e,c.Page)?zl(e.entry.controls,(e,t)=>t.initValue):{});return{children:zl(e.children,(e,n)=>Tu(n,t?.children?.[n.urlBreadcrumb])),controls:n}}function Eu(e){let t={...e,entryType:c.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},n=new Set;return e.defineExamples&&e.defineExamples({defineExample(r){let i={...r,isVertical:t.useVerticalExamples,entryType:c.ElementExample,parent:t,descriptionParagraphs:r.descriptionParagraphs??[],errors:[n.has(r.title)&&Error(`Example title '${r.title}' in page '${e.title}' is already taken.`),cu(r.title)].filter(A.isTruthy)};n.add(r.title),t.elementExamples[au(i.title)]=i}}),t}var Du;(function(e){e.Search=`search`,e.Book=`book`})(Du||={});function Ou(e){return e[0]===Du.Book?``:e[1]?decodeURIComponent(e[1]):``}var ku={hash:void 0,paths:[Du.Book],search:void 0},Au=new class e{static cssPropertyDefinitionSupported=!!(globalThis.CSS&&globalThis.CSS.registerProperty);registry=new Map;constructor(){let t=e.cssPropertyDefinitionSupported?globalThis.CSS.registerProperty.bind(globalThis.CSS):void 0;t&&(globalThis.CSS.registerProperty=e=>(Au.registry.set(e.name,e),t(e)))}canRegisterCssProperty(t){return e.cssPropertyDefinitionSupported&&!this.registry.has(t)}registerProperty(e){if(!this.canRegisterCssProperty(e.name))return!1;try{return globalThis.CSS.registerProperty(e),!0}catch(t){throw Le(t,`Failed to define CSS var: ${y(e,4)}\n\n`)}}},ju=globalThis,Mu=ju.ShadowRoot&&(ju.ShadyCSS===void 0||ju.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,Nu=Symbol(),Pu=new WeakMap,Fu=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Nu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Mu&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Pu.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Pu.set(t,e))}return e}toString(){return this.cssText}},j=e=>new Fu(typeof e==`string`?e:e+``,void 0,Nu),Iu=(e,...t)=>new Fu(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,Nu),Lu=(e,t)=>{if(Mu)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=ju.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},Ru=Mu?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return j(t)})(e):e,{is:zu,defineProperty:Bu,getOwnPropertyDescriptor:Vu,getOwnPropertyNames:Hu,getOwnPropertySymbols:Uu,getPrototypeOf:Wu}=Object,Gu=globalThis,Ku=Gu.trustedTypes,qu=Ku?Ku.emptyScript:``,Ju=Gu.reactiveElementPolyfillSupport,Yu=(e,t)=>e,Xu={toAttribute(e,t){switch(t){case Boolean:e=e?qu:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Zu=(e,t)=>!zu(e,t),Qu={attribute:!0,type:String,converter:Xu,reflect:!1,useDefault:!1,hasChanged:Zu};Symbol.metadata??=Symbol(`metadata`),Gu.litPropertyMetadata??=new WeakMap;var $u=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Qu){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Bu(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Vu(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Qu}static _$Ei(){if(this.hasOwnProperty(Yu(`elementProperties`)))return;let e=Wu(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Yu(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Yu(`properties`))){let e=this.properties,t=[...Hu(e),...Uu(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(Ru(e))}else e!==void 0&&t.push(Ru(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Lu(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Xu:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Xu:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Zu)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};$u.elementStyles=[],$u.shadowRootOptions={mode:`open`},$u[Yu(`elementProperties`)]=new Map,$u[Yu(`finalized`)]=new Map,Ju?.({ReactiveElement:$u}),(Gu.reactiveElementVersions??=[]).push(`2.1.2`);var ed=globalThis,td=e=>e,nd=ed.trustedTypes,rd=nd?nd.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,id=`$lit$`,ad=`lit$${Math.random().toFixed(9).slice(2)}$`,od=`?`+ad,sd=`<${od}>`,cd=document,ld=()=>cd.createComment(``),ud=e=>e===null||typeof e!=`object`&&typeof e!=`function`,dd=Array.isArray,fd=e=>dd(e)||typeof e?.[Symbol.iterator]==`function`,pd=`[ 	
\f\r]`,md=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,hd=/-->/g,gd=/>/g,_d=RegExp(`>|${pd}(?:([^\\s"'>=/]+)(${pd}*=${pd}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),vd=/'/g,yd=/"/g,bd=/^(?:script|style|textarea|title)$/i,xd=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Sd=Symbol.for(`lit-noChange`),M=Symbol.for(`lit-nothing`),Cd=new WeakMap,wd=cd.createTreeWalker(cd,129);function Td(e,t){if(!dd(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return rd===void 0?t:rd.createHTML(t)}var Ed=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=md;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===md?c[1]===`!--`?o=hd:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=_d):(bd.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=_d):o=gd:o===_d?c[0]===`>`?(o=i??md,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?_d:c[3]===`"`?yd:vd):o===yd||o===vd?o=_d:o===hd||o===gd?o=md:(o=_d,i=void 0);let d=o===_d&&e[t+1].startsWith(`/>`)?` `:``;a+=o===md?n+sd:l>=0?(r.push(s),n.slice(0,l)+id+n.slice(l)+ad+d):n+ad+(l===-2?t:d)}return[Td(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Dd=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ed(t,n);if(this.el=e.createElement(l,r),wd.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=wd.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(id)){let t=u[o++],n=i.getAttribute(e).split(ad),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Md:r[1]===`?`?Nd:r[1]===`@`?Pd:jd}),i.removeAttribute(e)}else e.startsWith(ad)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(bd.test(i.tagName)){let e=i.textContent.split(ad),t=e.length-1;if(t>0){i.textContent=nd?nd.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],ld()),wd.nextNode(),c.push({type:2,index:++a});i.append(e[t],ld())}}}else if(i.nodeType===8){if(i.data===od)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(ad,e+1))!==-1;)c.push({type:7,index:a}),e+=ad.length-1}}a++}}static createElement(e,t){let n=cd.createElement(`template`);return n.innerHTML=e,n}};function Od(e,t,n=e,r){if(t===Sd)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=ud(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Od(e,i._$AS(e,t.values),i,r)),t}var kd=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??cd).importNode(t,!0);wd.currentNode=r;let i=wd.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ad(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Fd(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=wd.nextNode(),a++)}return wd.currentNode=cd,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ad=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Od(this,e,t),ud(e)?e===M||e==null||e===``?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==Sd&&this._(e):e._$litType$===void 0?e.nodeType===void 0?fd(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==M&&ud(this._$AH)?this._$AA.nextSibling.data=e:this.T(cd.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Dd.createElement(Td(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new kd(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Cd.get(e.strings);return t===void 0&&Cd.set(e.strings,t=new Dd(e)),t}k(t){dd(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(ld()),this.O(ld()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=td(e).nextSibling;td(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},jd=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=M}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Od(this,e,t,0),a=!ud(e)||e!==this._$AH&&e!==Sd,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Od(this,r[n+o],t,o),s===Sd&&(s=this._$AH[o]),a||=!ud(s)||s!==this._$AH[o],s===M?e=M:e!==M&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Md=class extends jd{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}},Nd=class extends jd{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==M)}},Pd=class extends jd{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Od(this,e,t,0)??M)===Sd)return;let n=this._$AH,r=e===M&&n!==M||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==M&&(n===M||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Fd=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Od(this,e)}},Id={M:id,P:ad,A:od,C:1,L:Ed,R:kd,D:fd,V:Od,I:Ad,H:jd,N:Nd,U:Pd,B:Md,F:Fd},Ld=ed.litHtmlPolyfillSupport;Ld?.(Dd,Ad),(ed.litHtmlVersions??=[]).push(`3.3.3`);var Rd=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ad(t.insertBefore(ld(),e),e,void 0,n??{})}return i._$AI(e),i},zd=globalThis,Bd=class extends $u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Rd(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Sd}};Bd._$litElement$=!0,Bd.finalized=!0,zd.litElementHydrateSupport?.({LitElement:Bd});var Vd=zd.litElementPolyfillSupport;Vd?.({LitElement:Bd}),(zd.litElementVersions??=[]).push(`4.2.2`);function Hd({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}function Ud(e,t=document.head){if(e.match(/\s/))throw Error(`Cannot use a style key with white space in it: '${e}'`);let n=t.querySelector(`style#${e}`);if(n instanceof HTMLStyleElement)return n;{let n=globalThis.document.createElement(`style`);return n.id=e,t.append(n),n}}function Wd(e,t,n=document.head){let r=Ud(t,n);return r.textContent=`:root {\n    ${Qc(e).flatMap(([e,t])=>t==null||t===``?[]:[`    ${yl({value:e,prefix:`--`})}: ${t};`]).join(`
    `)}\n}`,r}var Gd;(function(e){e.Url=`<url>`,e.TransformList=`<transform-list>`,e.TransformFunction=`<transform-function>`,e.Time=`<time>`,e.String=`<string>`,e.Resolution=`<resolution>`,e.Percentage=`<percentage>`,e.Number=`<number>`,e.LengthPercentage=`<length-percentage>`,e.Length=`<length>`,e.Integer=`<integer>`,e.Image=`<image>`,e.CustomIdent=`<custom-ident>`,e.Color=`<color>`,e.Angle=`<angle>`,e.Any=`*`})(Gd||={});var Kd;(function(e){e.Space=`+`,e.Comma=`#`})(Kd||={});function qd(e){return zl(e,(e,t)=>{Jd(e);let n=t,r=A.isObject(n)&&!(n instanceof Fu)&&A.lacksKey(n,`name`),i=A.isString(n)||A.isNumber(n)||n instanceof Fu?String(n):String(n.default),a=A.isString(n)||A.isNumber(n)||n instanceof Fu?String(n):String(`initialValue`in n&&n.initialValue||n.default),o=j(yl({value:e.replace(/^-+/,``),prefix:`--`})),s={name:o,value:Iu`var(${o}, ${j(i)})`,syntax:A.isString(n)||A.isNumber(n)||n instanceof Fu?Gd.Any:Yd(`syntax`in n?n.syntax:void 0),default:i},c=String(s.name);if(!a)throw Error(`Initial value for CSS var ${c} cannot be empty.`);return r&&Au.registerProperty({inherits:!0,name:c,initialValue:a,syntax:s.syntax})&&globalThis.document?.documentElement&&Hd({forCssVar:s,onElement:globalThis.document.documentElement,toValue:i}),s})}function Jd(e){try{if(!A.isString(e))throw TypeError(`Must be string.`);if(!e.includes(`-`))throw Error(`Must have at least one dash (-).`);if(e.toLowerCase()!==e)throw Error(`Must be lowercase.`)}catch(t){throw Error(Ie(`Invalid CSS var name.`,t,`Got '${y(e)}'`),{cause:t})}}function Yd(e){return e?A.isString(e)?e:e.union?e.union.map(e=>Yd(e)).join(` | `):e.list?`${Yd(e.list.values)}${e.list.separator}`:e.raw:Gd.Any}var Xd=qd({"element-book-nav-hover-background-color":`magenta`,"element-book-nav-hover-foreground-color":`magenta`,"element-book-nav-active-background-color":`magenta`,"element-book-nav-active-foreground-color":`magenta`,"element-book-nav-selected-background-color":`magenta`,"element-book-nav-selected-foreground-color":`magenta`,"element-book-accent-icon-color":`magenta`}),Zd={nav:{hover:{background:Xd[`element-book-nav-hover-background-color`],foreground:Xd[`element-book-nav-hover-foreground-color`]},active:{background:Xd[`element-book-nav-active-background-color`],foreground:Xd[`element-book-nav-active-foreground-color`]},selected:{background:Xd[`element-book-nav-selected-background-color`],foreground:Xd[`element-book-nav-selected-foreground-color`]}},accent:{icon:Xd[`element-book-accent-icon-color`]}};function Qd(e,t){tf(e,t,Zd)}function $d(e){return A.hasKey(e,`_$cssResult$`)}function ef(e){return A.hasKeys(e,[`name`,`value`,`default`])&&A.isString(e.default)&&$d(e.name)&&$d(e.value)}function tf(e,t,n){Object.entries(t).forEach(([t,r])=>{let i=n[t];if(!i)throw Error(`no nestedCssVar at key '${t}'`);if($d(r)){if(!ef(i))throw Error(`got a CSS result at '${t}' but no CSS var`);Hd({forCssVar:i,onElement:e,toValue:String(r)})}else{if(ef(i))throw Error(`got no CSS result at '${t}' but did find a CSS var`);tf(e,r,i)}})}function nf(e,t){let n=e.length,r,i,a=!1,o=!1;Array.isArray(e[0])?r=e:(r=[e],n=r.length,a=!0),Array.isArray(t[0])?i=t:(i=t.length>0?t.map(e=>[e]):[[]],o=!0);let s=i[0].length,c=i[0].map((e,t)=>i.map(e=>e[t])),l=r.map(e=>c.map(t=>{let n=0;if(!Array.isArray(e)){for(let r of t)n+=e*r;return n}for(let r=0;r<e.length;r++)n+=e[r]*(t[r]||0);return n}));return n===1&&a&&(l=l[0]),s===1&&o?n===1&&a?l[0]:l.map(e=>e[0]):l}function rf(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function af(e,t,n=[0,0,0]){let r=rf(e,t[0]),i=rf(e,t[1]),a=rf(e,t[2]);return n[0]=r,n[1]=i,n[2]=a,n}var of=e({bisectLeft:()=>bf,clamp:()=>gf,copySign:()=>_f,diag:()=>Sf,interpolate:()=>pf,interpolateInv:()=>mf,inv:()=>Of,isInstance:()=>xf,isNone:()=>uf,isString:()=>sf,lu:()=>Cf,mapRange:()=>hf,multiplyMatrices:()=>nf,multiply_v3_m3x3:()=>af,serializeNumber:()=>lf,skipNone:()=>df,solve:()=>kf,spow:()=>vf,toPrecision:()=>ff,type:()=>cf,zdiv:()=>yf});function sf(e){return cf(e)===`string`}function cf(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||``).toLowerCase()}function lf(e,{precision:t=16,unit:n}){return uf(e)?`none`:(e=+ff(e,t),e+(n??``))}function uf(e){return e===null}function df(e){return uf(e)?0:e}function ff(e,t){if(e===0)return 0;let n=~~e,r=0;n&&t&&(r=~~Math.log10(Math.abs(n))+1);let i=10**(t-r);return Math.floor(e*i+.5)/i}function pf(e,t,n){return uf(e)||isNaN(e)?t:uf(t)||isNaN(t)?e:e+(t-e)*n}function mf(e,t,n){return(n-e)/(t-e)}function hf(e,t,n){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(n)||n===null?n:pf(t[0],t[1],mf(e[0],e[1],n))}function gf(e,t,n){return Math.max(Math.min(n,t),e)}function _f(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function vf(e,t){return _f(Math.abs(e)**t,e)}function yf(e,t){return t===0?0:e/t}function bf(e,t,n=0,r=e.length){for(;n<r;){let i=n+r>>1;e[i]<t?n=i+1:r=i}return n}function xf(e,t){if(e instanceof t)return!0;let n=t.name;for(;e;){let t=Object.getPrototypeOf(e),r=t?.constructor?.name;if(r===n)return!0;if(!r||r===`Object`)return!1;e=t}return!1}function Sf(e){let t=e.length,n=[];for(let r=0;r<t;r++){n[r]=[];for(let i=0;i<t;i++)n[r][i]=r===i?e[r]:0}return n}function Cf(e,{pIndices:t=!1}={}){let n,r,i,a,o=e.length;t?(n=Array.from({length:o},(e,t)=>t),i=Sf(Array(o).fill(1))):(r=Sf(Array(o).fill(1)),i=structuredClone(r)),a=structuredClone(e);for(let e=0;e<o-1;e++){let s=e,c=Math.abs(a[e][e]);for(let t=e+1;t<o;t++){let n=Math.abs(a[t][e]);n>c&&(s=t,c=n)}if(s!=e){if([a[e],a[s]]=[a[s],a[e]],t?[n[e],n[s]]=[n[s],n[e]]:[r[e],r[s]]=[r[s],r[e]],e)for(let t=0;t<e;t++)[i[e][t],i[s][t]]=[i[s][t],i[e][t]]}else if(!c)continue;for(let t=e+1;t<o;t++){let n=a[t][e]/a[e][e];for(let r=e;r<o;r++)a[t][r]+=-a[e][r]*n,i[t][r]+=i[e][r]*n}}return t?[n,i,a]:[r,i,a]}function wf(e,t,n){for(let r=0;r<n;r++){let i=t[r];for(let a=0;a<r;a++)for(let o=0;o<n;o++)i[o]-=e[r][a]*t[a][o];for(let t=0;t<n;t++)i[t]/=e[r][r]}return t}function Tf(e,t,n){for(let i=n-1;i>-1;i--){let a=t[i];for(let o=i+1;o<n;o++)for(var r=0;r<n;r++)a[r]-=e[i][o]*t[o][r];for(let r=0;r<n;r++)t[i][r]/=e[i][i]}return t}function Ef(e,t,n){for(let r=0;r<n;r++){let n=t[r];for(let i=0;i<r;i++)n-=e[r][i]*t[i];t[r]=n/e[r][r]}return t}function Df(e,t,n){for(let r=n-1;r>-1;r--){let i=t[r];for(let a=r+1;a<n;a++)i-=e[r][a]*t[a];t[r]=i/e[r][r]}return t}function Of(e){let[t,n,r]=Cf(e),i=n.length;if(n.map((e,t)=>e[t]*r[t][t]).reduce((e,t)=>e*t,1)===0)throw Error(`Matrix is singular`);return Tf(r,wf(n,t,i),i)}function kf(e,t){let[n,r,i]=Cf(e,{pIndices:!0}),a=r.length;if(r.map((e,t)=>e[t]*i[t][t]).reduce((e,t)=>e*t,1)===0)throw Error(`Matrix is singular`);return Df(i,Ef(r,n.map(e=>t[e]),a),a)}var Af=new class{add(e,t,n){if(typeof arguments[0]!=`string`)for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);else(Array.isArray(e)?e:[e]).forEach(function(e){this[e]=this[e]||[],t&&this[e][n?`unshift`:`push`](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(e){e.call(t&&t.context?t.context:t,t)})}},jf={gamut_mapping:`css`,precision:5,deltaE:`76`,verbose:!0,warn:function(e){this.verbose&&globalThis?.console?.warn?.(e)}},Mf=class{type;coordMeta;coordRange;range;constructor(e,t){if(typeof e==`object`&&(this.coordMeta=e),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof e==`string`){let t=e.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!t)throw TypeError(`Cannot parse ${e} as a type definition.`);this.type=t.groups.type;let{min:n,max:r}=t.groups;(n||r)&&(this.range=[+n,+r])}}get computedRange(){return this.range?this.range:this.type===`<percentage>`?this.percentageRange():this.type===`<angle>`?[0,360]:null}get unit(){return this.type===`<percentage>`?`%`:this.type===`<angle>`?`deg`:``}resolve(e){if(this.type===`<angle>`)return e;let t=this.computedRange,n=this.coordRange;return this.type===`<percentage>`&&(n??=this.percentageRange()),hf(t,n,e)}serialize(e,t){let n=this.type===`<percentage>`?this.percentageRange(100):this.computedRange,r=this.unit;return e=hf(this.coordRange,n,e),lf(e,{unit:r,precision:t})}toString(){let e=this.type;if(this.range){let[t=``,n=``]=this.range;e+=`[${t},${n}]`}return e}percentageRange(e=1){let t;return t=this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?[0,1]:[-1,1],[t[0]*e,t[1]*e]}static get(e,t){return xf(e,this)?e:new this(e,t)}},Nf=Symbol(`instance`),Pf=class e{type;name;spaceCoords;coords;id;alpha;constructor(e,t=e.space){e[Nf]=this,this.type=`function`,this.name=`color`,Object.assign(this,e),this.space=t,this.type!==`custom`&&(this.spaceCoords=Object.values(t.coords),this.coords||=this.spaceCoords.map(e=>{let t=[`<number>`,`<percentage>`];return e.type===`angle`&&t.push(`<angle>`),t}),this.coords=this.coords.map((e,t)=>{let n=this.spaceCoords[t];return typeof e==`string`&&(e=e.trim().split(/\s*\|\s*/)),e.map(e=>Mf.get(e,n))}))}serializeCoords(e,t,n){return n=e.map((e,t)=>Mf.get(n?.[t]??this.coords[t][0],this.spaceCoords[t])),e.map((e,r)=>n[r].serialize(e,t))}coerceCoords(e,t){return Object.entries(this.space.coords).map(([n,r],i)=>{let a=e[i];if(uf(a)||isNaN(a))return a;let o=t[i],s=this.coords[i].find(e=>e.type==o);if(!s){let e=r.name||n;throw TypeError(`${o??a?.raw??a} not allowed for ${e} in ${this.name}()`)}return a=s.resolve(a),s.range&&(t[i]=s.toString()),a})}canSerialize(){return this.type===`function`||this.serialize}parse(e){return null}static get(t,...n){return!t||xf(t,this)?t:t[Nf]?t[Nf]:new e(t,...n)}},Ff={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]};function If(e){return Array.isArray(e)?e:Ff[e]}function Lf(e,t,n,r={}){if(e=If(e),t=If(t),!e||!t)throw TypeError(`Missing white point to convert ${e?``:`from`}${!e&&!t?`/`:``}${t?``:`to`}`);if(e===t)return n;let i={W1:e,W2:t,XYZ:n,options:r};if(Af.run(`chromatic-adaptation-start`,i),i.M||(i.W1===Ff.D65&&i.W2===Ff.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===Ff.D50&&i.W2===Ff.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),Af.run(`chromatic-adaptation-end`,i),i.M)return af(i.XYZ,i.M);throw TypeError(`Only Bradford CAT with white points D50 and D65 supported for now.`)}function Rf(e,t){let n={str:String(e)?.trim(),options:t};if(Af.run(`parse-start`,n),n.color)return n.color;n.parsed=Hf(n.str);let r,i=n.options?n.options.parseMeta??n.options.meta:null;if(n.parsed){let t=n.parsed.name,a,o,s=n.parsed.args,c=s.map((e,t)=>n.parsed.argMeta[t]?.type);if(t===`color`){let r=s.shift();c.shift();let i=r.startsWith(`--`)?r.substring(2):`--${r}`,l=[r,i];if(a=P.findFormat({name:t,id:l,type:`function`}),!a){let t,a=r in P.registry?r:i;if(a in P.registry){let n=P.registry[a].formats?.color?.id;n&&(t=`Did you mean ${e.replace(`color(`+r,`color(`+n)}?`)}throw TypeError(`Cannot parse ${n.str}. `+(t??`Missing a plugin?`))}o=a.space,a.id.startsWith(`--`)&&!r.startsWith(`--`)&&jf.warn(`${o.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${a.id}) instead of color(${r}).`),r.startsWith(`--`)&&!a.id.startsWith(`--`)&&jf.warn(`${o.name} is a standard space and supported in the CSS spec. Use color(${a.id}) instead of prefixed color(${r}).`)}else a=P.findFormat({name:t,type:`function`}),o=a.space;i&&Object.assign(i,{format:a,formatId:a.name,types:c,commas:n.parsed.commas});let l=1;n.parsed.lastAlpha&&(l=n.parsed.args.pop(),i&&(i.alphaType=c.pop()));let u=a.coords.length;if(s.length!==u)throw TypeError(`Expected ${u} coordinates for ${o.id} in ${n.str}), got ${s.length}`);s=a.coerceCoords(s,c),r={spaceId:o.id,coords:s,alpha:l}}else spaceloop:for(let e of P.all)for(let t in e.formats){let a=e.formats[t];if(a.type!==`custom`||a.test&&!a.test(n.str))continue;let o=e.getFormat(a),s=o.parse(n.str);if(s){i&&Object.assign(i,{format:o,formatId:t}),r=s;break spaceloop}}if(!r)throw TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return r.alpha=uf(r.alpha)?r.alpha:r.alpha===void 0?1:gf(0,r.alpha,1),r}var zf={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},Bf={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(zf).join(`|`)})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function Vf(e){let t={},n=e.match(Bf.unitValue)?.[0],r=t.raw=e;return n?(t.type=n===`%`?`<percentage>`:`<angle>`,t.unit=n,t.unitless=Number(r.slice(0,-n.length)),r=t.unitless*zf[n]):Bf.number.test(r)?(r=Number(r),t.type=`<number>`):r===`none`?r=null:r===`NaN`||r===`calc(NaN)`?(r=NaN,t.type=`<number>`):t.type=`<ident>`,{value:r,meta:t}}function Hf(e){if(!e)return;e=e.trim();let t=e.match(Bf.function);if(t){let e=[],n=[],r=!1,i=t[1].toLowerCase(),a=t[2].replace(Bf.singleArgument,(t,a)=>{let{value:o,meta:s}=Vf(a);return(t.startsWith(`/`)||i!==`color`&&e.length===3)&&(r=!0),e.push(o),n.push(s),``});return{name:i,args:e,argMeta:n,lastAlpha:r,commas:a.includes(`,`),rawName:t[1],rawArgs:t[2]}}}function N(e,t){if(Array.isArray(e))return e.map(e=>N(e,t));if(!e)throw TypeError(`Empty color reference`);sf(e)&&(e=Rf(e,t));let n=e.space||e.spaceId;return typeof n==`string`&&(e.space=P.get(n)),e.alpha===void 0&&(e.alpha=1),e}var Uf=75e-6,P=class e{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?e.get(t.base):null,this.aliases=t.aliases,this.displaySpaces=t.displaySpaces?.map(t=>e.get(t)),this.bases=[];for(let e=this.base;e;e=e.base)this.bases.push(e);t.rgbGamut&&(this.rgbGamut=t.rgbGamut),t.linearGamut&&(this.linearGamut=t.linearGamut),this.base&&(t.fromBase&&(this.fromBase=t.fromBase),t.toBase&&(this.toBase=t.toBase));let n=t.coords??this.base.coords;for(let e in n)`name`in n[e]||(n[e].name=e);this.coords=n;let r=t.white??this.base.white??`D65`;this.white=If(r),this.formats=t.formats??{};for(let e in this.formats){let t=this.formats[e];t.type||=`function`,t.name||=e}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),this.gamutSpace=t.gamutSpace?t.gamutSpace===`self`?this:e.get(t.gamutSpace):this.isPolar?this.base:this,this.gamutSpace.isUnbounded&&(this.inGamut=(e,t)=>!0),this.M=t.M??{},this.referred=t.referred,Object.defineProperty(this,"path",{value:Wf(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Af.run(`colorspace-init-end`,this)}inGamut(e,{epsilon:t=Uf}={}){if(!this.equals(this.gamutSpace))return e=this.to(this.gamutSpace,e),this.gamutSpace.inGamut(e,{epsilon:t});let n=Object.values(this.coords);return e.every((e,r)=>{let i=n[r];if(i.type!==`angle`&&i.range){if(uf(e))return!0;let[n,r]=i.range;return(n===void 0||e>=n-t)&&(r===void 0||e<=r+t)}return!0})}get isUnbounded(){return Object.values(this.coords).every(e=>!(`range`in e))}get cssId(){return this.formats?.color?.id||this.id}get hueId(){for(let e in this.coords)if(this.coords[e].type===`angle`)return e;return null}get hueIndex(){return Object.keys(this.coords).findIndex(e=>this.coords[e].type===`angle`)}get isPolar(){return this.hueId!==null}getFormat(e){if(!e)return null;e==="default"?e=Object.values(this.formats)[0]:typeof e==`string`&&(e=this.formats[e]);let t=Pf.get(e,this);return t!==e&&e.name in this.formats&&(this.formats[e.name]=t),t}equals(e){return e?this===e||this.id===e||this.id===e.id:!1}to(t,n){if(arguments.length===1){let e=N(t);[t,n]=[e.space,e.coords]}if(t=e.get(t),this.equals(t))return n;n=n.map(e=>uf(e)?0:e);let r=this.path,i=t.path,a,o;for(let e=0;e<r.length&&r[e].equals(i[e]);e++)a=r[e],o=e;if(!a)throw Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let e=r.length-1;e>o;e--)n=r[e].toBase(n);for(let e=o+1;e<i.length;e++)n=i[e].fromBase(n);return n}from(t,n){if(arguments.length===1){let e=N(t);[t,n]=[e.space,e.coords]}return t=e.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let e=[];for(let t in this.coords){let n=this.coords[t],r=n.range||n.refRange;e.push(r?.min??0)}return e}static registry={};static get all(){return[...new Set(Object.values(e.registry))]}static register(e,t){if(arguments.length===1&&(t=arguments[0],e=t.id),t=this.get(t),this.registry[e]&&this.registry[e]!==t)throw Error(`Duplicate color space registration: '${e}'`);if(this.registry[e]=t,arguments.length===1&&t.aliases)for(let e of t.aliases)this.register(e,t);return t}static get(t,...n){if(!t||xf(t,this))return t;if(cf(t)===`string`){let n=e.registry[t.toLowerCase()];if(!n)throw TypeError(`No color space found with id = "${t}"`);return n}if(n.length)return e.get(...n);throw TypeError(`${t} is not a valid color space`)}static findFormat(t,n=e.all){if(!t)return null;typeof t==`string`&&(t={name:t});for(let e of n)for(let[n,r]of Object.entries(e.formats)){r.name??=n,r.type??=`function`;let i=(!t.name||r.name===t.name)&&(!t.type||r.type===t.type);if(t.id){let e=r.ids||[r.id],n=Array.isArray(t.id)?t.id:[t.id];i&&=n.some(t=>e.includes(t))}if(i){let t=Pf.get(r,e);return t!==r&&(e.formats[r.name]=t),t}}return null}static resolveCoord(t,n){let r=cf(t),i,a;if(r===`string`?t.includes(`.`)?[i,a]=t.split(`.`):[i,a]=[,t]:Array.isArray(t)?[i,a]=t:(i=t.space,a=t.coordId),i=e.get(i),i||=n,!i)throw TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(r=cf(a),r===`number`||r===`string`&&a>=0){let e=Object.entries(i.coords)[a];if(e)return{space:i,id:e[0],index:a,...e[1]}}i=e.get(i);let o=a.toLowerCase(),s=0;for(let e in i.coords){let t=i.coords[e];if(e.toLowerCase()===o||t.name?.toLowerCase()===o)return{space:i,id:e,index:s,...t};s++}throw TypeError(`No "${a}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(`, `)}`)}static DEFAULT_FORMAT={type:`functions`,name:`color`}};function Wf(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}var Gf=new P({id:`xyz-d65`,name:`XYZ D65`,coords:{x:{refRange:[0,1],name:`X`},y:{refRange:[0,1],name:`Y`},z:{refRange:[0,1],name:`Z`}},white:`D65`,formats:{color:{ids:[`xyz-d65`,`xyz`]}},aliases:[`xyz`]}),Kf=class extends P{constructor(e){e.coords||={r:{range:[0,1],name:`Red`},g:{range:[0,1],name:`Green`},b:{range:[0,1],name:`Blue`}},e.base||=Gf;let t=e.toXYZ_M??e.M?.toXYZ,n=e.fromXYZ_M??e.M?.fromXYZ;e.referred??=`display`,super(e),t&&n&&(this.M.toXYZ=t,this.M.fromXYZ=n)}toBase(e){let t=af(e,this.M.toXYZ);return this.white!==this.base.white&&(t=Lf(this.white,this.base.white,t)),t}fromBase(e){return e=Lf(this.base.white,this.white,e),af(e,this.M.fromXYZ)}},qf=new P({id:`xyz-d50`,name:`XYZ D50`,white:`D50`,base:Gf,fromBase:e=>Lf(Gf.white,`D50`,e),toBase:e=>Lf(`D50`,Gf.white,e)}),Jf=216/24389,Yf=24/116,Xf=24389/27,Zf=Ff.D50,Qf=new P({id:`lab`,name:`Lab`,coords:{l:{refRange:[0,100],name:`Lightness`},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Zf,base:qf,fromBase(e){let t=e.map((e,t)=>e/Zf[t]).map(e=>e>Jf?Math.cbrt(e):(Xf*e+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let[t,n,r]=e,i=[];return i[1]=(t+16)/116,i[0]=n/500+i[1],i[2]=i[1]-r/200,[i[0]>Yf?i[0]**3:(116*i[0]-16)/Xf,e[0]>8?((e[0]+16)/116)**3:e[0]/Xf,i[2]>Yf?i[2]**3:(116*i[2]-16)/Xf].map((e,t)=>e*Zf[t])},formats:{lab:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}});function $f(e){return typeof e==`number`?(e%360+360)%360:e}function ep(e,t){let[n,r]=t,i=uf(n),a=uf(r);if(i&&a)return[n,r];if(i?n=r:a&&(r=n),e===`raw`)return t;n=$f(n),r=$f(r);let o=r-n;return e===`increasing`?o<0&&(r+=360):e===`decreasing`?o>0&&(n+=360):e===`longer`?-180<o&&o<180&&(o>0?n+=360:r+=360):e===`shorter`&&(o>180?n+=360:o<-180&&(r+=360)),[n,r]}var tp=new P({id:`lch`,name:`LCH`,coords:{l:{refRange:[0,100],name:`Lightness`},c:{refRange:[0,150],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},base:Qf,fromBase(e){if(this.ε===void 0){let e=Object.values(this.base.coords)[1].refRange,t=e[1]-e[0];this.ε=t/1e5}let[t,n,r]=e,i=Math.abs(n)<this.ε&&Math.abs(r)<this.ε,a=i?null:$f(Math.atan2(r,n)*180/Math.PI);return[t,i?0:Math.sqrt(n**2+r**2),a]},toBase(e){let[t,n,r]=e,i=null,a=null;return uf(r)||(n=n<0?0:n,i=n*Math.cos(r*Math.PI/180),a=n*Math.sin(r*Math.PI/180)),[t,i,a]},formats:{lch:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <angle>`]}}}),np=25**7,rp=Math.PI,ip=180/rp,ap=rp/180;function op(e){let t=e*e;return t*t*t*e}function sp(e,t,{kL:n=1,kC:r=1,kH:i=1}={}){[e,t]=N([e,t]);let[a,o,s]=Qf.from(e),c=tp.from(Qf,[a,o,s])[1],[l,u,d]=Qf.from(t),f=tp.from(Qf,[l,u,d])[1];c<0&&(c=0),f<0&&(f=0);let p=op((c+f)/2),m=.5*(1-Math.sqrt(p/(p+np))),h=(1+m)*o,g=(1+m)*u,_=Math.sqrt(h**2+s**2),ee=Math.sqrt(g**2+d**2),te=h===0&&s===0?0:Math.atan2(s,h),ne=g===0&&d===0?0:Math.atan2(d,g);te<0&&(te+=2*rp),ne<0&&(ne+=2*rp),te*=ip,ne*=ip;let re=l-a,ie=ee-_,ae=ne-te,oe=te+ne,se=Math.abs(ae),ce;_*ee===0?ce=0:se<=180?ce=ae:ae>180?ce=ae-360:ae<-180?ce=ae+360:jf.warn(`the unthinkable has happened`);let le=2*Math.sqrt(ee*_)*Math.sin(ce*ap/2),ue=(a+l)/2,de=(_+ee)/2,fe=op(de),pe;pe=_*ee===0?oe:se<=180?oe/2:oe<360?(oe+360)/2:(oe-360)/2;let me=(ue-50)**2,he=1+.015*me/Math.sqrt(20+me),ge=1+.045*de,_e=1;_e-=.17*Math.cos((pe-30)*ap),_e+=.24*Math.cos(2*pe*ap),_e+=.32*Math.cos((3*pe+6)*ap),_e-=.2*Math.cos((4*pe-63)*ap);let v=1+.015*de*_e,ve=30*Math.exp(-1*((pe-275)/25)**2),ye=2*Math.sqrt(fe/(fe+np)),be=-1*Math.sin(2*ve*ap)*ye,y=(re/(n*he))**2;return y+=(ie/(r*ge))**2,y+=(le/(i*v))**2,y+=be*(ie/(r*ge))*(le/(i*v)),Math.sqrt(y)}var cp={XYZtoLMS:[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],LMStoXYZ:[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],LMStoLab:[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],LabtoLMS:[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]]},lp=new P({id:`oklab`,name:`Oklab`,coords:{l:{refRange:[0,1],name:`Lightness`},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:`D65`,base:Gf,M:cp,fromBase(e){let t=af(e,cp.XYZtoLMS);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),af(t,cp.LMStoLab,t)},toBase(e){let t=af(e,cp.LabtoLMS);return t[0]**=3,t[1]**=3,t[2]**=3,af(t,cp.LMStoXYZ,t)},formats:{oklab:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}});function up(e,t){[e,t]=N([e,t]);let[n,r,i]=lp.from(e),[a,o,s]=lp.from(t),c=n-a,l=r-o,u=i-s;return Math.sqrt(c**2+l**2+u**2)}var dp=75e-6;function fp(e,t,{epsilon:n=dp}={}){e=N(e),t||=e.space,t=P.get(t);let r=e.coords;return t!==e.space&&(r=t.from(e)),t.inGamut(r,{epsilon:n})}function pp(e,t,{inGamut:n}={}){e=N(e),t=P.get(t);let r=t.from(e),i={space:t,coords:r,alpha:e.alpha};return n&&(i=lg(i,n===!0?void 0:n)),i}pp.returns=`color`;function mp(e,t){e=N(e);let n=P.get(t,t?.space),r=t?.precision,i;return i=!n||e.space.equals(n)?e.coords.slice():n.from(e),r===void 0?i:i.map(e=>ff(e,r))}function hp(e,t){if(e=N(e),t===`alpha`)return e.alpha??1;let{space:n,index:r}=P.resolveCoord(t,e.space);return mp(e,n)[r]}var gp=new P({id:`oklch`,name:`OkLCh`,coords:{l:{refRange:[0,1],name:`Lightness`},c:{refRange:[0,.4],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},white:`D65`,base:lp,fromBase:tp.fromBase,toBase:tp.toBase,formats:{oklch:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <angle>`]}}});function _p(e,t,n,r){return e=N(e),Array.isArray(t)&&([t,n,r]=[e.space,t,n]),t=P.get(t),e.coords=t===e.space?n.slice():t.to(e.space,n),r!==void 0&&(e.alpha=r),e}_p.returns=`color`;function vp(e,t,n){if(e=N(e),arguments.length===2&&cf(arguments[1])===`object`){let t=arguments[1];for(let n in t)vp(e,n,t[n])}else if(typeof n==`function`&&(n=n(hp(e,t))),t===`alpha`)e.alpha=n;else{let{space:r,index:i}=P.resolveCoord(t,e.space),a=mp(e,r);a[i]=n,_p(e,r,a)}return e}vp.returns=`color`;function yp(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function bp(e,t,n=`lab`){n=P.get(n);let r=n.from(e),i=n.from(t);return Math.sqrt(r.reduce((e,t,n)=>{let r=i[n];return uf(t)||uf(r)?e:e+(r-t)**2},0))}function xp(e,t){return bp(e,t,`lab`)}var Sp=Math.PI/180;function Cp(e,t,{l:n=2,c:r=1}={}){[e,t]=N([e,t]);let[i,a,o]=Qf.from(e),[,s,c]=tp.from(Qf,[i,a,o]),[l,u,d]=Qf.from(t),f=tp.from(Qf,[l,u,d])[1];s<0&&(s=0),f<0&&(f=0);let p=i-l,m=s-f,h=a-u,g=o-d,_=h**2+g**2-m**2,ee=.511;i>=16&&(ee=.040975*i/(1+.01765*i));let te=.0638*s/(1+.0131*s)+.638,ne;uf(c)&&(c=0),ne=c>=164&&c<=345?.56+Math.abs(.2*Math.cos((c+168)*Sp)):.36+Math.abs(.4*Math.cos((c+35)*Sp));let re=s**4,ie=Math.sqrt(re/(re+1900)),ae=te*(ie*ne+1-ie),oe=(p/(n*ee))**2;return oe+=(m/(r*te))**2,oe+=_/ae**2,Math.sqrt(oe)}var wp=203,Tp=new P({id:`xyz-abs-d65`,cssId:`--xyz-abs-d65`,name:`Absolute XYZ D65`,coords:{x:{refRange:[0,9504.7],name:`Xa`},y:{refRange:[0,1e4],name:`Ya`},z:{refRange:[0,10888.3],name:`Za`}},base:Gf,fromBase(e){return e.map(e=>e*wp)},toBase(e){return e.map(e=>e/wp)}}),Ep=1.15,Dp=.66,Op=2610/2**14,kp=2**14/2610,Ap=3424/4096,jp=2413/128,Mp=2392/128,Np=1.7*2523/32,Pp=32/(1.7*2523),Fp=-.56,Ip=16295499532821565e-27,Lp={XYZtoCone:[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],ConetoXYZ:[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],ConetoIab:[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],IabtoCone:[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]]},Rp=new P({id:`jzazbz`,name:`Jzazbz`,coords:{jz:{refRange:[0,1],name:`Jz`},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:Tp,M:Lp,fromBase(e){let[t,n,r]=e,[i,a,o]=af(af([Ep*t-.1499999999999999*r,Dp*n- -.33999999999999997*t,r],Lp.XYZtoCone).map(function(e){return vf((Ap+jp*vf(e/1e4,Op))/(1+Mp*vf(e/1e4,Op)),Np)}),Lp.ConetoIab);return[.43999999999999995*i/(1+Fp*i)-Ip,a,o]},toBase(e){let[t,n,r]=e,[i,a,o]=af(af([(t+Ip)/(.43999999999999995-Fp*(t+Ip)),n,r],Lp.IabtoCone).map(function(e){return 1e4*vf((Ap-vf(e,Pp))/(Mp*vf(e,Pp)-jp),kp)}),Lp.ConetoXYZ),s=(i+.1499999999999999*o)/Ep;return[s,(a+-.33999999999999997*s)/Dp,o]},formats:{jzazbz:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}}),zp=new P({id:`jzczhz`,name:`JzCzHz`,coords:{jz:{refRange:[0,1],name:`Jz`},cz:{refRange:[0,.26],name:`Chroma`},hz:{refRange:[0,360],type:`angle`,name:`Hue`}},base:Rp,fromBase:tp.fromBase,toBase:tp.toBase,formats:{jzczhz:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <angle>`]}}});function Bp(e,t){[e,t]=N([e,t]);let[n,r,i]=zp.from(e),[a,o,s]=zp.from(t),c=n-a,l=r-o;uf(i)&&uf(s)?(i=0,s=0):uf(i)?i=s:uf(s)&&(s=i);let u=i-s,d=2*Math.sqrt(r*o)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(c**2+l**2+d**2)}var Vp=3424/4096,Hp=2413/128,Up=2392/128,Wp=2610/16384,Gp=2523/32,Kp=16384/2610,qp=32/2523,Jp={XYZtoLMS:[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],LMStoIPT:[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],IPTtoLMS:[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],LMStoXYZ:[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]]},Yp=new P({id:`ictcp`,name:`ICTCP`,coords:{i:{refRange:[0,1],name:`I`},ct:{refRange:[-.5,.5],name:`CT`},cp:{refRange:[-.5,.5],name:`CP`}},base:Tp,M:Jp,fromBase(e){return Xp(af(e,Jp.XYZtoLMS))},toBase(e){return af(Zp(e),Jp.LMStoXYZ)},formats:{ictcp:{coords:[`<percentage> | <number>`,`<number> | <percentage>`,`<number> | <percentage>`]}}});function Xp(e){return af(e.map(function(e){return((Vp+Hp*(e/1e4)**Wp)/(1+Up*(e/1e4)**Wp))**Gp}),Jp.LMStoIPT)}function Zp(e){return af(e,Jp.IPTtoLMS).map(function(e){return 1e4*(Math.max(e**qp-Vp,0)/(Hp-Up*e**qp))**Kp})}function Qp(e,t){[e,t]=N([e,t]);let[n,r,i]=Yp.from(e),[a,o,s]=Yp.from(t);return 720*Math.sqrt((n-a)**2+.25*(r-o)**2+(i-s)**2)}function $p(e,t){[e,t]=N([e,t]);let[n,r,i]=lp.from(e),[a,o,s]=lp.from(t),c=n-a,l=2*(r-o),u=2*(i-s);return Math.sqrt(c**2+l**2+u**2)}var em=Ff.D65,tm=.42,nm=1/tm,rm=2*Math.PI,im={cat16:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],cat16Inv:[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],m1:[[460,451,288],[460,-891,-261],[460,-220,-6300]]},am={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},om={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},sm=180/Math.PI,cm=Math.PI/180;function lm(e,t){return e.map(e=>{let n=vf(t*Math.abs(e)*.01,tm);return 400*_f(n,e)/(n+27.13)})}function um(e,t){let n=100/t*27.13**nm;return e.map(e=>{let t=Math.abs(e);return _f(n*vf(t/(400-t),nm),e)})}function dm(e){let t=$f(e);t<=om.h[0]&&(t+=360);let n=bf(om.h,t)-1,[r,i]=om.h.slice(n,n+2),[a,o]=om.e.slice(n,n+2),s=om.H[n],c=(t-r)/a;return s+100*c/(c+(i-t)/o)}function fm(e){let t=(e%400+400)%400,n=Math.floor(.01*t);t%=100;let[r,i]=om.h.slice(n,n+2),[a,o]=om.e.slice(n,n+2);return $f((t*(o*r-a*i)-100*r*o)/(t*(o-a)-100*o))}function pm(e,t,n,r,i){let a={};a.discounting=i,a.refWhite=e,a.surround=r;let o=e.map(e=>e*100);a.la=t,a.yb=n;let s=o[1],c=af(o,im.cat16),l=am[a.surround],u=l[0];a.c=l[1],a.nc=l[2];let d=(1/(5*a.la+1))**4;a.fl=d*a.la+.1*(1-d)*(1-d)*Math.cbrt(5*a.la),a.flRoot=a.fl**.25,a.n=a.yb/s,a.z=1.48+Math.sqrt(a.n),a.nbb=.725*a.n**-.2,a.ncb=a.nbb;let f=i?1:Math.max(Math.min(u*(1-1/3.6*Math.exp((-a.la-42)/92)),1),0);a.dRgb=c.map(e=>pf(1,s/e,f)),a.dRgbInv=a.dRgb.map(e=>1/e);let p=lm(c.map((e,t)=>e*a.dRgb[t]),a.fl);return a.aW=a.nbb*(2*p[0]+p[1]+.05*p[2]),a}var mm=pm(em,64/Math.PI*.2,20,`average`,!1);function hm(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw Error(`Conversion requires one and only one: 'J' or 'Q'`);if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw Error(`Conversion requires one and only one: 'C', 'M' or 's'`);if(!(e.h!==void 0^e.H!==void 0))throw Error(`Conversion requires one and only one: 'h' or 'H'`);if(e.J===0||e.Q===0)return[0,0,0];let n=0;n=e.h===void 0?fm(e.H)*cm:$f(e.h)*cm;let r=Math.cos(n),i=Math.sin(n),a=0;e.J===void 0?e.Q!==void 0&&(a=.25*t.c*e.Q/((t.aW+4)*t.flRoot)):a=vf(e.J,1/2)*.1;let o=0;e.C===void 0?e.M===void 0?e.s!==void 0&&(o=4e-4*e.s**2*(t.aW+4)/t.c):o=e.M/t.flRoot/a:o=e.C/a;let s=vf(o*(1.64-.29**t.n)**-.73,10/9),c=.25*(Math.cos(n+2)+3.8),l=t.aW*vf(a,2/t.c/t.z),u=5e4/13*t.nc*t.ncb*c,d=l/t.nbb,f=23*(d+.305)*yf(s,23*u+s*(11*r+108*i));return af(um(af([d,f*r,f*i],im.m1).map(e=>e*1/1403),t.fl).map((e,n)=>e*t.dRgbInv[n]),im.cat16Inv).map(e=>e/100)}function gm(e,t){let n=lm(af(e.map(e=>e*100),im.cat16).map((e,n)=>e*t.dRgb[n]),t.fl),r=n[0]+(-12*n[1]+n[2])/11,i=(n[0]+n[1]-2*n[2])/9,a=(Math.atan2(i,r)%rm+rm)%rm,o=.25*(Math.cos(a+2)+3.8),s=vf(5e4/13*t.nc*t.ncb*yf(o*Math.sqrt(r**2+i**2),n[0]+n[1]+1.05*n[2]+.305),.9)*(1.64-.29**t.n)**.73,c=vf(t.nbb*(2*n[0]+n[1]+.05*n[2])/t.aW,.5*t.c*t.z),l=100*vf(c,2),u=4/t.c*c*(t.aW+4)*t.flRoot,d=s*c,f=d*t.flRoot,p=$f(a*sm),m=dm(p);return{J:l,C:d,h:p,s:50*vf(t.c*s/(t.aW+4),1/2),Q:u,M:f,H:m}}var _m=new P({id:`cam16-jmh`,cssId:`--cam16-jmh`,name:`CAM16-JMh`,coords:{j:{refRange:[0,100],name:`J`},m:{refRange:[0,105],name:`Colorfulness`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},base:Gf,M:im,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=gm(e,mm),n=Math.abs(t.M)<this.ε;return[t.J,n?0:t.M,n?null:t.h]},toBase(e){return hm({J:e[0],M:e[1],h:e[2]},mm)}}),vm=Ff.D65,ym=216/24389,bm=24389/27;function xm(e){return 116*(e>ym?Math.cbrt(e):(bm*e+16)/116)-16}function Sm(e){return e>8?((e+16)/116)**3:e/bm}function Cm(e,t){let[n,r,i]=e,a=[],o=0;if(i===0)return[0,0,0];let s=Sm(i);o=i>0?.00379058511492914*i**2+.608983189401032*i+.9155088574762233:9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;let c=0,l=1/0,u=[0,0,0];for(;c<=15;){a=hm({J:o,C:r,h:n},t);let e=Math.abs(a[1]-s);if(e<l){if(e<=2e-12)return a;u=a,l=e}o-=(a[1]-s)*o/(2*a[1]),c+=1}return u}function wm(e,t){let n=xm(e[1]);if(n===0)return[0,0,0];let r=gm(e,Tm);return[$f(r.h),r.C,n]}var Tm=pm(vm,200/Math.PI*Sm(50),Sm(50)*100,`average`,!1),Em=new P({id:`hct`,name:`HCT`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},c:{refRange:[0,145],name:`Colorfulness`},t:{refRange:[0,100],name:`Tone`}},base:Gf,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=wm(e,Tm);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return Cm(e,Tm)},formats:{color:{id:`--hct`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),Dm=Math.PI/180,Om=[1,.007,.0228];function km(e){e[1]<0&&(e=Em.fromBase(Em.toBase(e)));let t=Math.log(Math.max(1+Om[2]*e[1]*Tm.flRoot,1))/Om[2],n=e[0]*Dm,r=t*Math.cos(n),i=t*Math.sin(n);return[e[2],r,i]}function Am(e,t){[e,t]=N([e,t]);let[n,r,i]=km(Em.from(e)),[a,o,s]=km(Em.from(t));return Math.sqrt((n-a)**2+(r-o)**2+(i-s)**2)}var{cos:jm,sin:Mm,sqrt:Nm,atan2:Pm,exp:Fm,abs:Im,pow:Lm,PI:Rm}=Math,zm=[[1.000042977349746,20718877053183e-18,-4361018085669474e-20],[26946201090235744e-21,.9999906145080147,-14898828405401079e-21],[-7941753620756204e-21,12875204405137254e-21,.9997859822609763]],Bm=[[.9999570254019492,-2071874272730964e-20,4361733292468361e-20],[-2694517763358666e-20,1.000009385946497,1490098223546482e-20],[7943459292954202e-21,-1287824596735154e-20,1.000214063706999]],Vm=[[.7212986433113499,.45344826541531813,-.19288975751942616],[-.788211869495579,1.795241376757236,.0876172451181785],[-.0917700599912156,.45765588659459255,1.2922045513917677]],Hm=[[1.065107295808859,-.3150044075301121,.1803492381741039],[.4721107713837796,.4271995765962455,.04150680489380985],[-.09156391926309541,-.1736709363194979,.7719790382558294]],Um=[.47229813098762524,.5149184096354483,.5113233386366979],Wm=[2.1173067060606283,1.9420552485353544,1.9557096741686448],Gm={CAT_TO_HELM:zm,CAT_FROM_HELM:Bm,M1:Vm,M1_INV:Hm,M2:[[-.26355622180094096,.4168322883703174,.4926763141656403],[1.8897570508777322,-3.1212232034205774,1.0421666921060384],[.3585108617962056,1.7694028193790368,-1.4120626067695372]],M2_INV:[[.9183897822815021,.5232051237088666,.7065804598090856],[1.0899090574433026,.07005324849041904,.4319776874787044],[1.598895729264209,.22061850068770233,.012506037355220951]]},Km=-.02833024015436984,qm=-.21131429516166544,Jm=.2189784817615645,Ym=-.06871898981942523,Xm=.005506053349515315,Zm=-.0641329861299175,Qm=-.053592461436994296,$m=-.00954137464208059,eh=.2676231133101982,th=.8934892185255707,nh=.7173169828841472,rh=.6915224124600773,ih=.48647127559605596,ah=.9853124591201782,oh=.5385456675962418,sh=.12508858146241716,ch=.6768950256217603,lh=-.4963251525324449,uh=-.09564696283240552,dh=-.029053748937210654,fh=1.3346761652952872,ph=-.1698908144723919,mh=-.195370576218515,hh=.5330819227283227,gh=.08863325582067766,_h=.9365540137751136,vh=.13789738139719568,yh=.061650260197979936,bh=.0641970862504494,xh=-.027401052793571013,Sh=-.09900209889026965,Ch=.059635520647228726,wh=-.013586499967803128,Th=.2253393118474472,Eh=-1.5239477450767043,Dh=-1.751157310240011,Oh=-.43576378069144767,kh=1.060094063845983,Ah=.47931193034584496,jh=-.2622579649434462,Mh=.13610794232685908,Nh=.1168702235362288,Ph=-.01617739641422492,Fh=.038145638815030566,Ih=-28.2*Rm/180,Lh=jm(Ih),Rh=Mm(Ih);function zh(e){return Km*jm(e)+qm*Mm(e)+Jm*jm(2*e)+Ym*Mm(2*e)+Xm*jm(3*e)+Zm*Mm(3*e)+Qm*jm(4*e)+$m*Mm(4*e)}function Bh(e){return .02833024015436984*Mm(e)+qm*jm(e)+-2*Jm*Mm(2*e)+2*Ym*jm(2*e)+-3*Xm*Mm(3*e)+3*Zm*jm(3*e)+-4*Qm*Mm(4*e)+4*$m*jm(4*e)}function Vh(e){return Fm(mh*jm(e)+hh*Mm(e)+gh*jm(2*e)+_h*Mm(2*e)+vh*jm(3*e)+yh*Mm(3*e)+bh*jm(4*e)+xh*Mm(4*e))}function Hh(e){let t=e-.5;return Fm(gf(-30,Eh*t+Dh*t*t,30))}function Uh(e,t){let n=Oh*jm(e)+kh*Mm(e)+Ah*jm(2*e)+jh*Mm(2*e);return Fm(gf(-30,(t-.5)*n,30))}function Wh(e){return Fm(Mh*jm(e)+Nh*Mm(e)+Ph*jm(2*e)+Fh*Mm(2*e))}function Gh(e){return 1+Sh*jm(e)+Ch*Mm(e)+wh*jm(2*e)+Th*Mm(2*e)}function Kh(e,t){let n=e*(1-e),r=e+oh*n+sh*n*(.5-e)+ch*n*n;return r+=n*(lh*jm(t)+uh*Mm(t)),r}function qh(e,t){let n=lh*jm(t)+uh*Mm(t),r=e;for(let t=0;t<15;t++){let t=r*(1-r),i=1-2*r,a=r+(oh+n)*t+sh*t*(.5-r)+ch*t*t-e,o=1+(oh+n)*i+sh*(i*(.5-r)-t)+ch*2*t*i;Im(o)<1e-10&&(o=1),r-=a/o}return r}function Jh(e,t){let n=dh+fh*jm(t)+ph*Mm(t),r=e<1?1-e:0;return e*Fm(gf(-30,n*e*r*r,30))}function Yh(e,t){let n=dh+fh*jm(t)+ph*Mm(t),r=e;for(let t=0;t<12;t++){let t=r<1?1-r:0,i=Fm(gf(-30,n*r*t*t,30)),a=r*i-e,o=n*t*(1-3*r),s=i*(1+r*o);Im(s)<1e-10&&(s=1),r-=a/s}return r}var Xh=function(e){let[t,n,r]=af(af(e,Gm.CAT_TO_HELM),Gm.M1),[i,a,o]=af([vf(t,Um[0]),vf(n,Um[1]),vf(r,Um[2])],Gm.M2),s=Pm(o,a),c=Nm(a*a+o*o),l=zh(s),u=s+l;a=c*jm(u),o=c*Mm(u);let d=eh*Lm(Nm(a*a+o*o),gf(.01,th,10)),f=Pm(o,a),p=1+nh*jm(f)+rh*Mm(f)+ih*jm(2*f)+ah*Mm(2*f);i+=d*p,s=Pm(o,a),i=Kh(i,s),s=Pm(o,a),i=Jh(i,s),s=Pm(o,a);let m=Vh(s);a*=m,o*=m,s=Pm(o,a),c=Nm(a*a+o*o);let h=Gh(s),g=c>0?Lm(c,h):0;a=g*jm(s),o=g*Mm(s);let _=Hh(i);a*=_,o*=_,s=Pm(o,a);let ee=Uh(s,i);a*=ee,o*=ee,s=Pm(o,a),i*=Wh(s);let te=a*Lh-o*Rh,ne=a*Rh+o*Lh;return[i,te,ne]},Zh=function(e){let[t,n,r]=e,i=n*Lh+r*Rh,a=-n*Rh+r*Lh;n=i,r=a;let o=Pm(r,n);t/=Wh(o),o=Pm(r,n);let s=Uh(o,t);n/=s,r/=s;let c=Hh(t);n/=c,r/=c,o=Pm(r,n);let l=Nm(n*n+r*r),u=Gh(o),d=l>0?Lm(l,1/u):0;n=d*jm(o),r=d*Mm(o),o=Pm(r,n);let f=Vh(o);n/=f,r/=f,o=Pm(r,n),t=Yh(t,o),o=Pm(r,n),t=qh(t,o);let p=eh*Lm(Nm(n*n+r*r),gf(.01,th,10)),m=Pm(r,n),h=1+nh*jm(m)+rh*Mm(m)+ih*jm(2*m)+ah*Mm(2*m);t-=p*h;let g=Pm(r,n);l=Nm(n*n+r*r);let _=g;for(let e=0;e<8;e++){let e=_+zh(_)-g,t=1+Bh(_);Im(t)<1e-10&&(t=1),_-=e/t}n=l*jm(_),r=l*Mm(_);let[ee,te,ne]=af([t,n,r],Gm.M2_INV);return af(af([vf(ee,Wm[0]),vf(te,Wm[1]),vf(ne,Wm[2])],Gm.M1_INV),Gm.CAT_FROM_HELM)},Qh=new P({id:`helmlab-metric`,name:`Helmlab MetricSpace`,cssId:`--helmlab-metric`,coords:{l:{refRange:[0,1.6],name:`Lightness`},a:{refRange:[-1.5,1.5]},b:{refRange:[-1.5,1.5]}},white:`D65`,base:Gf,M:Gm,fromBase(e){return Xh(e)},toBase(e){return Zh(e)}}),$h=-.9155125151657894,eg=2.9268353744941558,tg=3.966003089807536,ng=1.9737081170404969,rg=52.473130649294724,ig=.47897301074925214;function ag(e,t){[e,t]=N([e,t]);let[n,r,i]=Qh.from(e),[a,o,s]=Qh.from(t),c=n-a,l=r-o,u=i-s,d=1+$h*((n+a)*.5-.5)**2,f=1+eg*((Math.sqrt(r**2+i**2)+Math.sqrt(o**2+s**2))*.5),p=(c**2/d**2+tg*(l**2+u**2)/f**2)**(ng/2);return(p/(1+rg*p))**ig}var og={deltaE76:xp,deltaECMC:Cp,deltaE2000:sp,deltaEJz:Bp,deltaEITP:Qp,deltaEOK:up,deltaEOK2:$p,deltaEHCT:Am,deltaEHelmlab:ag};function sg(e){return Math.max(parseFloat(`1e${(e?Math.floor(Math.log10(Math.abs(e))):0)-2}`),1e-6)}var cg={hct:{method:`hct.c`,jnd:2,deltaEMethod:`hct`,blackWhiteClamp:{}},"hct-tonal":{method:`hct.c`,jnd:0,deltaEMethod:`hct`,blackWhiteClamp:{channel:`hct.t`,min:0,max:100}}};function lg(e,{method:t=jf.gamut_mapping,space:n=void 0,deltaEMethod:r=``,jnd:i=2,blackWhiteClamp:a=void 0}={}){if(e=N(e),sf(arguments[1])?n=arguments[1]:n||=e.space,n=P.get(n),fp(e,n,{epsilon:0}))return e;let o;if(t===`css`)o=dg(e,{space:n});else if(t===`raytrace`)o=pg(e,{space:n});else{if(t!==`clip`){Object.prototype.hasOwnProperty.call(cg,t)&&({method:t,jnd:i,deltaEMethod:r,blackWhiteClamp:a}=cg[t]);let s=sp;if(r!==``){for(let e in og)if(`deltae`+r.toLowerCase()===e.toLowerCase()){s=og[e];break}}i===0&&(i=1e-16);let c=lg(pp(e,n),{method:`clip`,space:n});if(s(e,c)>i){if(a&&Object.keys(a).length===3){let t=P.resolveCoord(a.channel),n=hp(pp(e,t.space),t.id);if(uf(n)&&(n=0),n>=a.max)return pp({space:`xyz-d65`,coords:Ff.D65},e.space);if(n<=a.min)return pp({space:`xyz-d65`,coords:[0,0,0]},e.space)}let r=P.resolveCoord(t),c=r.space,l=r.id,u=pp(e,c);u.coords.forEach((e,t)=>{uf(e)&&(u.coords[t]=0)});let d=(r.range||r.refRange)[0],f=sg(i),p=d,m=hp(u,l);for(;m-p>f;){let e=yp(u);e=lg(e,{space:n,method:`clip`}),s(u,e)-i<f?p=hp(u,l):m=hp(u,l),vp(u,l,(p+m)/2)}o=pp(u,n)}else o=c}else o=pp(e,n);if(t===`clip`||!fp(o,n,{epsilon:0})){let e=Object.values(n.coords).map(e=>e.range||[]);o.coords=o.coords.map((t,n)=>{let[r,i]=e[n];return r!==void 0&&(t=Math.max(r,t)),i!==void 0&&(t=Math.min(t,i)),t})}}return n!==e.space&&(o=pp(o,e.space)),e.coords=o.coords,e}lg.returns=`color`;var ug={WHITE:{space:lp,coords:[1,0,0],alpha:1},BLACK:{space:lp,coords:[0,0,0],alpha:1}};function dg(e,{space:t}={}){let n=.02,r=1e-4;if(e=N(e),t||=e.space,t=P.get(t),t.isUnbounded)return pp(e,t);let i=pp(e,gp),a=i.coords[0];if(a>=1){let n=pp(ug.WHITE,t);return n.alpha=e.alpha,pp(n,t)}if(a<=0){let n=pp(ug.BLACK,t);return n.alpha=e.alpha,pp(n,t)}if(fp(i,t,{epsilon:0}))return pp(i,t);function o(e){let n=pp(e,t),r=Object.values(t.coords);return n.coords=n.coords.map((e,t)=>{if(`range`in r[t]){let[n,i]=r[t].range;return gf(n,e,i)}return e}),n}let s=0,c=i.coords[1],l=!0,u=yp(i),d=o(u),f=up(d,u);if(f<n)return d;for(;c-s>r;){let e=(s+c)/2;if(u.coords[1]=e,l&&fp(u,t,{epsilon:0}))s=e;else if(d=o(u),f=up(d,u),f<n){if(n-f<r)break;l=!1,s=e}else c=e}return d}function fg(e,t,n=[0,0,0],r=[1,1,1]){let i=1/0,a=-1/0,o=[];for(let s=0;s<3;s++){let c=e[s],l=t[s]-c,u=n[s],d=r[s];if(o.push(l),Math.abs(l)>1e-12){let e=1/l,t=(u-c)*e,n=(d-c)*e;a=Math.max(Math.min(t,n),a),i=Math.min(Math.max(t,n),i)}else if(c<u||c>d)return[]}return a>i||i<0||(a<0&&(a=i),!isFinite(a))?[]:[e[0]+o[0]*a,e[1]+o[1]*a,e[2]+o[2]*a]}function pg(e,{space:t}={}){if(e=N(e),t||=e.space,t=P.get(t),t.isUnbounded)return pp(e,t);let n=pp(e,gp),[r,i,a]=n.coords;if(r>=1){let n=pp(ug.WHITE,t);return n.alpha=e.alpha,pp(n,t)}if(r<=0){let n=pp(ug.BLACK,t);return n.alpha=e.alpha,pp(n,t)}let o=t,s=t.rgbGamut;if(s!==void 0&&(t=s),!xf(t,Kf))throw Error(`An RGB gamut is required`);let[c,l]=Object.values(t.coords)[0].range,u=[l,l,l],d=t.linearGamut;d!==void 0&&(l=pp({space:t,coords:u,alpha:e.alpha},d).coords[0],u=[l,l,l],t=d,c=Object.values(t.coords)[0].range[0]);let f=[c,c,c],p=pp(n,t);if(!p.coords.every(e=>c<=e&&e<=l)){let e=pp({space:gp,coords:[r,0,a]},t).coords,n=c+1e-12,i=l-1e-12,o=p.coords;for(let s=0;s<4;s++){if(s){let e=pp(p,gp);e.coords[0]=r,e.coords[2]=a,p=pp(e,t)}let c=fg(e,p.coords,f,u);if(c.length===0){p.coords=[...o];break}s&&p.coords.every(e=>n<e&&e<i)&&(e=[...p.coords]),o=c,p.coords=[...c]}}p=pp(p,o);let m=Object.values(o.coords);return p.coords=p.coords.map((e,t)=>{if(`range`in m[t]){let[n,r]=m[t].range;return gf(n,e,r)}return e}),p}var mg=class extends P{constructor(e){let t=P.get(e.base),n=e.chroma??`c`,r=Object.keys(t.coords),i=r.indexOf(n);if(i===-1)throw TypeError(`GamutRelativeColorSpace needs a "${n}" coordinate, got ${t.id}`);let a=Object.fromEntries(Object.entries(t.coords).map(([e,t])=>[e,{...t}]));a[n].range=[0,1],delete a[n].refRange,e.coords??=a,e.formats??={color:{coords:r.map(e=>{if(t.coords[e].type===`angle`)return`<number> | <angle>`;let[r,i]=t.coords[e].range??t.coords[e].refRange??[];return e===n||r===0&&i===1?`<percentage> | <number>`:`<number> | <percentage>`})}},super(e),this.chromaIndex=i,this.method=`${t.id}.${n}`;let o=[[0,0,1],[0,1,0],[0,1,1],[1,0,0],[1,0,1],[1,1,0]];this.oogChroma=1.01*Math.max(...o.map(e=>t.from(this.gamutSpace,e)[this.chromaIndex]||0))}maxChroma(e){let t=[...e];return t[this.chromaIndex]=this.oogChroma,lg({space:this.base,coords:t},{space:this.gamutSpace,method:this.method,deltaEMethod:`OK`,jnd:0}).coords[this.chromaIndex]}toBase(e){return e=[...e],e.some((e,t)=>t!==this.chromaIndex&&uf(e))?e[this.chromaIndex]!==0&&(e[this.chromaIndex]=null):uf(e[this.chromaIndex])||(e[this.chromaIndex]*=this.maxChroma(e)),e}fromBase(e){if(e=[...e],e.some((e,t)=>t!==this.chromaIndex&&uf(e)))e[this.chromaIndex]!==0&&(e[this.chromaIndex]=null);else if(!uf(e[this.chromaIndex])){let t=this.maxChroma(e);e[this.chromaIndex]=t?e[this.chromaIndex]/t:0}return e}};function hg(e,t={}){if(Array.isArray(e))return e.map(e=>hg(e,t));let{cssProperty:n=`background-color`,element:r,...i}=t,a=null;try{return N(e,i)}catch(e){a=e}let{CSS:o,getComputedStyle:s}=globalThis;if(sf(e)&&r&&o&&s&&o.supports(n,e)){let t=r.style[n];e!==t&&(r.style[n]=e);let o=s(r).getPropertyValue(n);if(e!==t&&(r.style[n]=t),o!==e)try{return N(o,i)}catch(e){a=e}else a={message:`Color value is a valid CSS color, but it could not be resolved :(`}}return t.errorMeta&&(t.errorMeta.error=a),null}function gg(e,t={}){let{precision:n=jf.precision,format:r,inGamut:i=!0,coords:a,alpha:o,commas:s}=t,c,l=N(e),u=r,d=l.parseMeta;d&&!r&&(d.format.canSerialize()&&(r=d.format,u=d.formatId),a??=d.types,o??=d.alphaType,s??=d.commas),u&&(r=l.space.getFormat(r)??P.findFormat(u)),r||(r=l.space.getFormat(`default`)??P.DEFAULT_FORMAT,u=r.name),r&&r.space&&r.space!==l.space&&(l=pp(l,r.space));let f=l.coords.slice();if(i||=r.toGamut,i&&!fp(l)&&(f=lg(yp(l),i===!0?void 0:i).coords),r.type===`custom`){if(r.serialize)c=r.serialize(f,l.alpha,t);else throw TypeError(`format ${u} can only be used to parse colors, not for serialization`)}else{let e=r.name||`color`,t=r.serializeCoords(f,n,a);if(e===`color`){let e=r.id||r.ids?.[0]||l.space.cssId||l.space.id;t.unshift(e)}let i=l.alpha;o!==void 0&&typeof o!=`object`&&(o=typeof o==`string`?{type:o}:{include:o});let u=o?.type??`<number>`,d=o?.include===!0||r.alpha===!0||o?.include!==!1&&r.alpha!==!1&&i<1,p=``;if(s??=r.commas,d){if(n!==null){let e;u===`<percentage>`&&(e=`%`,i*=100),i=lf(i,{precision:n,unit:e})}p=`${s?`,`:` /`} ${i}`}c=`${e}(${t.join(s?`, `:` `)}${p})`}return c}var _g={toXYZ:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]]},vg=new Kf({id:`rec2020-linear`,cssId:`--rec2020-linear`,name:`Linear REC.2020`,white:`D65`,M:_g}),yg=new Kf({id:`rec2020`,name:`REC.2020`,base:vg,linearGamut:vg,toBase(e){return e.map(function(e){let t=e<0?-1:1;return t*(e*t)**2.4})},fromBase(e){return e.map(function(e){let t=e<0?-1:1;return t*(e*t)**(1/2.4)})}}),bg=new Kf({id:`p3-linear`,cssId:`display-p3-linear`,name:`Linear P3`,white:`D65`,M:{toXYZ:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]}}),xg={toXYZ:[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],fromXYZ:[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]]},Sg=new Kf({id:`srgb-linear`,name:`Linear sRGB`,white:`D65`,M:xg}),Cg={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},wg=[,,,].fill(`<percentage> | <number>[0, 255]`),Tg=[,,,].fill(`<number>[0, 255]`),Eg=new Kf({id:`srgb`,name:`sRGB`,base:Sg,linearGamut:Sg,fromBase:e=>e.map(e=>{let t=e<0?-1:1,n=e*t;return n>.0031308?t*(1.055*n**(1/2.4)-.055):12.92*e}),toBase:e=>e.map(e=>{let t=e<0?-1:1,n=e*t;return n<=.04045?e/12.92:t*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:wg},rgb_number:{name:`rgb`,commas:!0,coords:Tg,alpha:!1},color:{},rgba:{coords:wg,commas:!0,alpha:!0},rgba_number:{name:`rgba`,commas:!0,coords:Tg},hex:{type:`custom`,toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,`$&$&`));let t=[];return e.replace(/[a-f0-9]{2}/gi,e=>{t.push(parseInt(e,16)/255)}),{spaceId:`srgb`,coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0,alpha:r}={})=>{(r!==!1&&t<1||r===!0)&&e.push(t),e=e.map(e=>Math.round(e*255));let i=n&&e.every(e=>e%17==0);return`#`+e.map(e=>i?(e/17).toString(16):e.toString(16).padStart(2,`0`)).join(``)}},keyword:{type:`custom`,test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:`srgb`,coords:null,alpha:1};if(e===`transparent`?(t.coords=Cg.black,t.alpha=0):t.coords=Cg[e],t.coords)return t}}}}),Dg=new Kf({id:`p3`,cssId:`display-p3`,name:`P3`,base:bg,linearGamut:bg,fromBase:Eg.fromBase,toBase:Eg.toBase});jf.display_space=Eg;var Og;if(typeof CSS<`u`&&CSS.supports)for(let e of[Qf,yg,Dg]){let t=gg({space:e,coords:e.getMinCoords(),alpha:1});if(CSS.supports(`color`,t)){jf.display_space=e;break}}function kg(e,{space:t,supports:n=globalThis.CSS?.supports,...r}={}){e=N(e);let i=gg(e,r);if(!n||n(`color`,i)||!jf.display_space)i=new String(i),i.color=e;else{let a=e;if((e.coords.some(uf)||uf(e.alpha))&&!(Og??=n(`color`,`hsl(none 50% 50%)`))&&(a=yp(e),a.coords=a.coords.map(df),a.alpha=df(a.alpha),i=gg(a,r),n(`color`,i)))return i=new String(i),i.color=a,i;if(t===void 0){t=a.space;let e=t.displaySpaces??t.bases;!t.displaySpaces&&!t.id.startsWith(`xyz-`)&&(e=e.filter(e=>!e.id.startsWith(`xyz-`)));for(let t of e){let e=pp(a,t),o=gg(e,r);if(n(`color`,o))return i=new String(o),i.color=e,i}t=jf.display_space}a=pp(a,t),i=new String(gg(a,r)),i.color=a}return i}function Ag(e,t,{space:n,hue:r=`shorter`}={}){e=N(e),n||=e.space,n=P.get(n);let i=Object.values(n.coords);[e,t]=[e,t].map(e=>pp(e,n));let[a,o]=[e,t].map(e=>e.coords),s=a.map((e,t)=>{let n=i[t],a=o[t];return n.type===`angle`&&([e,a]=ep(r,[e,a])),jg(e,a)}),c=jg(e.alpha,t.alpha);return{space:n,coords:s,alpha:c}}function jg(e,t){return uf(e)||uf(t)?e===t?null:0:e-t}function Mg(e,t){return e=N(e),t=N(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((e,n)=>e===t.coords[n])}var Ng=e({getLuminance:()=>Pg,register:()=>Ig,setLuminance:()=>Fg});function Pg(e){return hp(e,[Gf,`y`])}function Fg(e,t){vp(e,[Gf,`y`],t)}function Ig(e){Object.defineProperty(e.prototype,"luminance",{get(){return Pg(this)},set(e){Fg(this,e)}})}function Lg(e,t){e=N(e),t=N(t);let n=Math.max(Pg(e),0),r=Math.max(Pg(t),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}var Rg=.56,zg=.57,Bg=.62,Vg=.65,Hg=.022,Ug=1.414,Wg=.1,Gg=5e-4,Kg=1.14,qg=.027,Jg=1.14;function Yg(e){return e>=Hg?e:e+(Hg-e)**Ug}function Xg(e){return(e<0?-1:1)*Math.abs(e)**2.4}function Zg(e,t){t=N(t),e=N(e);let n,r,i,a,o,s;t=pp(t,`srgb`),[a,o,s]=t.coords.map(e=>uf(e)?0:e);let c=Xg(a)*.2126729+Xg(o)*.7151522+Xg(s)*.072175;e=pp(e,`srgb`),[a,o,s]=e.coords.map(e=>uf(e)?0:e);let l=Xg(a)*.2126729+Xg(o)*.7151522+Xg(s)*.072175,u=Yg(c),d=Yg(l),f=d>u;return Math.abs(d-u)<Gg?r=0:f?(n=d**Rg-u**zg,r=n*Kg):(n=d**Vg-u**Bg,r=n*Jg),i=Math.abs(r)<Wg?0:r>0?r-qg:r+qg,i*100}function Qg(e,t){e=N(e),t=N(t);let n=Math.max(Pg(e),0),r=Math.max(Pg(t),0);r>n&&([n,r]=[r,n]);let i=n+r;return i===0?0:(n-r)/i}var $g=5e4;function e_(e,t){e=N(e),t=N(t);let n=Math.max(Pg(e),0),r=Math.max(Pg(t),0);return r>n&&([n,r]=[r,n]),r===0?$g:(n-r)/r}function t_(e,t){e=N(e),t=N(t);let n=hp(e,[Qf,`l`]),r=hp(t,[Qf,`l`]);return Math.abs(n-r)}var n_=216/24389,r_=24/116,i_=24389/27,a_=Ff.D65,o_=new P({id:`lab-d65`,name:`Lab D65`,coords:{l:{refRange:[0,100],name:`Lightness`},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:a_,base:Gf,fromBase(e){let t=e.map((e,t)=>e/a_[t]).map(e=>e>n_?Math.cbrt(e):(i_*e+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>r_?t[0]**3:(116*t[0]-16)/i_,e[0]>8?((e[0]+16)/116)**3:e[0]/i_,t[2]>r_?t[2]**3:(116*t[2]-16)/i_].map((e,t)=>e*a_[t])},formats:{"lab-d65":{coords:[`<number> | <percentage>`,`<number> | <percentage>`,`<number> | <percentage>`]}}}),s_=5**.5*.5+.5;function c_(e,t){e=N(e),t=N(t);let n=hp(e,[o_,`l`]),r=hp(t,[o_,`l`]),i=Math.abs(n**+s_-r**+s_)**(1/s_)*Math.SQRT2-40;return i<7.5?0:i}var l_=e({contrastAPCA:()=>Zg,contrastDeltaPhi:()=>c_,contrastLstar:()=>t_,contrastMichelson:()=>Qg,contrastWCAG21:()=>Lg,contrastWeber:()=>e_});function u_(e,t,n){sf(n)&&(n={algorithm:n});let{algorithm:r,...i}=n||{};if(!r){let e=Object.keys(l_).map(e=>e.replace(/^contrast/,``)).join(`, `);throw TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${e}`)}e=N(e),t=N(t);for(let n in l_)if(`contrast`+r.toLowerCase()===n.toLowerCase())return l_[n](e,t,i);throw TypeError(`Unknown contrast algorithm: ${r}`)}var d_=e({register:()=>m_,uv:()=>f_,xy:()=>p_});function f_(e){let[t,n,r]=mp(e,Gf),i=t+15*n+3*r;return[4*t/i,9*n/i]}function p_(e){let[t,n,r]=mp(e,Gf),i=t+n+r;return[t/i,n/i]}function m_(e){Object.defineProperty(e.prototype,"uv",{get(){return f_(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return p_(this)}})}function h_(e,t,n={}){sf(n)&&(n={method:n});let{method:r=jf.deltaE,...i}=n;for(let n in og)if(`deltae`+r.toLowerCase()===n.toLowerCase())return og[n](e,t,i);throw TypeError(`Unknown deltaE method: ${r}`)}var g_=e({darken:()=>v_,lighten:()=>__});function __(e,t=.25){return vp(e,[P.get(`oklch`,`lch`),`l`],e=>e*(1+t))}function v_(e,t=.25){return vp(e,[P.get(`oklch`,`lch`),`l`],e=>e*(1-t))}__.returns=`color`,v_.returns=`color`;var y_=e({isRange:()=>w_,mix:()=>b_,range:()=>S_,register:()=>T_,steps:()=>x_});function b_(e,t,n,r={}){return[e,t]=[N(e),N(t)],cf(n)===`object`&&([n,r]=[.5,n]),S_(e,t,r)(n??.5)}function x_(e,t,n={}){let r;w_(e)&&([r,n]=[e,t],[e,t]=r.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:a,steps:o=2,maxSteps:s=1e3,...c}=n;r||=([e,t]=[N(e),N(t)],S_(e,t,c));let l=h_(e,t,a),u=i>0?Math.max(o,Math.ceil(l/i)+1):o,d=[];if(s!==void 0&&(u=Math.min(u,s)),u===1)d=[{p:.5,color:r(.5)}];else{let e=1/(u-1);d=Array.from({length:u},(t,n)=>{let i=n*e;return{p:i,color:r(i)}})}if(i>0){let e=d.reduce((e,t,n)=>{if(n===0)return 0;let r=h_(t.color,d[n-1].color,a);return Math.max(e,r)},0);for(;e>i;){e=0;for(let t=1;t<d.length&&d.length<s;t++){let n=d[t-1],i=d[t],o=(i.p+n.p)/2,s=r(o);e=Math.max(e,h_(s,n.color,a),h_(s,i.color,a)),d.splice(t,0,{p:o,color:r(o)}),t++}}}return d=d.map(e=>e.color),d}function S_(e,t,n={}){if(w_(e)){let[n,r]=[e,t];return S_(...n.rangeArgs.colors,{...n.rangeArgs.options,...r})}let{space:r,outputSpace:i,progression:a,premultiplied:o}=n;e=N(e),t=N(t),e=yp(e),t=yp(t);let s={colors:[e,t],options:n};r=r?P.get(r):P.registry[jf.interpolationSpace]||e.space,i=i?P.get(i):r,e=pp(e,r),t=pp(t,r),e=lg(e),t=lg(t);let c=r.hueId,l=r.hueIndex;if(c){let i=n.hue=n.hue||`shorter`,a=[r,c],[o,s]=[hp(e,a),hp(t,a)];uf(o)&&!uf(s)?o=s:uf(s)&&!uf(o)&&(s=o),[o,s]=ep(i,[o,s]),vp(e,a,o),vp(t,a,s)}return uf(e.alpha)&&!uf(t.alpha)?e.alpha=t.alpha:uf(t.alpha)&&!uf(e.alpha)&&(t.alpha=e.alpha),o&&(e.coords=C_(e.coords,e.alpha,l),t.coords=C_(t.coords,t.alpha,l)),Object.assign(n=>{n=a?a(n):n;let s=e.coords.map((e,r)=>{let i=t.coords[r];return pf(e,i,n)}),c=pf(e.alpha,t.alpha,n),u={space:r,coords:s,alpha:c};return o&&(u.coords=C_(u.coords,c,l,!0)),i!==r&&(u=pp(u,i)),u},{rangeArgs:s})}function C_(e,t,n,r=!1){return uf(t)||r&&t===0?e:e.map((e,i)=>i===n||uf(e)?e:r?e/t:e*t)}function w_(e){return cf(e)===`function`&&!!e.rangeArgs}jf.interpolationSpace=`lab`;function T_(e){e.defineFunction(`mix`,b_,{returns:`color`}),e.defineFunction(`range`,S_,{returns:`function<color>`}),e.defineFunction(`steps`,x_,{returns:`array<color>`})}var E_=new P({id:`hsl`,name:`HSL`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,100],name:`Saturation`},l:{range:[0,100],name:`Lightness`}},base:Eg,rgbGamut:Eg,fromBase:e=>{let t=Math.max(...e),n=Math.min(...e),[r,i,a]=e,[o,s,c]=[null,0,(n+t)/2],l=t-n;if(l!==0){switch(s=c===0||c===1?0:(t-c)/Math.min(c,1-c),t){case r:o=(i-a)/l+(i<a?6:0);break;case i:o=(a-r)/l+2;break;case a:o=(r-i)/l+4}o*=60}return s<0&&(o+=180,s=Math.abs(s)),o>=360&&(o-=360),[o,s*100,c*100]},toBase:e=>{let[t,n,r]=e;t%=360,t<0&&(t+=360),n/=100,r/=100;function i(e){let i=(e+t/30)%12,a=n*Math.min(r,1-r);return r-a*Math.max(-1,Math.min(i-3,9-i,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]},hsla:{coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`],commas:!0,alpha:!0}}}),D_=new P({id:`hsl-p3`,cssId:`--hsl-p3`,name:`HSL P3`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,100],name:`Saturation`},l:{range:[0,100],name:`Lightness`}},base:Dg,rgbGamut:Dg,fromBase:E_.fromBase,toBase:E_.toBase}),O_=new P({id:`hsl-rec2020`,cssId:`--hsl-rec2020`,name:`HSL Rec.2020`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,100],name:`Saturation`},l:{range:[0,100],name:`Lightness`}},base:yg,rgbGamut:yg,fromBase:E_.fromBase,toBase:E_.toBase}),k_=new P({id:`hsv`,name:`HSV`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,100],name:`Saturation`},v:{range:[0,100],name:`Value`}},base:Eg,rgbGamut:Eg,fromBase(e){let t=Math.max(...e),n=Math.min(...e),[r,i,a]=e,[o,s,c]=[null,0,t],l=t-n;if(l!==0){switch(t){case r:o=(i-a)/l+(i<a?6:0);break;case i:o=(a-r)/l+2;break;case a:o=(r-i)/l+4}o*=60}return c&&(s=l/c),o>=360&&(o-=360),[o,s*100,c*100]},toBase(e){let[t,n,r]=e;t%=360,t<0&&(t+=360),n/=100,r/=100;function i(e){let i=(e+t/60)%6;return r-r*n*Math.max(0,Math.min(i,4-i,1))}return[i(5),i(3),i(1)]},formats:{color:{id:`--hsv`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),A_=new P({id:`hwb`,name:`HWB`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},w:{range:[0,100],name:`Whiteness`},b:{range:[0,100],name:`Blackness`}},base:k_,rgbGamut:Eg,fromBase(e){let[t,n,r]=e;return[t,r*(100-n)/100,100-r]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=n+r;if(i>=1)return[t,0,n/i*100];let a=1-r;return[t,(a===0?0:1-n/a)*100,a*100]},formats:{hwb:{coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),j_=new Kf({id:`a98rgb-linear`,cssId:`--a98-rgb-linear`,name:`Linear Adobe® 98 RGB compatible`,white:`D65`,M:{toXYZ:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]}}),M_=new Kf({id:`a98rgb`,cssId:`a98-rgb`,name:`Adobe® 98 RGB compatible`,base:j_,linearGamut:j_,toBase:e=>e.map(e=>Math.abs(e)**(563/256)*Math.sign(e)),fromBase:e=>e.map(e=>Math.abs(e)**(256/563)*Math.sign(e))}),N_=new Kf({id:`prophoto-linear`,cssId:`--prophoto-rgb-linear`,name:`Linear ProPhoto`,white:`D50`,base:qf,M:{toXYZ:[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],fromXYZ:[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]]}}),P_=1/512,F_=16/512,I_=new Kf({id:`prophoto`,cssId:`prophoto-rgb`,name:`ProPhoto`,base:N_,linearGamut:N_,toBase(e){return e.map(e=>{let t=e<0?-1:1,n=e*t;return n<F_?e/16:t*n**1.8})},fromBase(e){return e.map(e=>{let t=e<0?-1:1,n=e*t;return n>=P_?t*n**(1/1.8):16*e})}}),L_=1.09929682680944,R_=.018053968510807,z_=new Kf({id:`--rec2020-oetf`,name:`REC.2020_Scene_Referred`,base:vg,linearGamut:vg,referred:`scene`,toBase(e){return e.map(function(e){let t=e<0?-1:1,n=e*t;return n<R_*4.5?e/4.5:t*((n+L_-1)/L_)**(1/.45)})},fromBase(e){return e.map(function(e){let t=e<0?-1:1,n=e*t;return n>=R_?t*(L_*n**.45-.09929682680944008):4.5*e})}}),B_=new mg({id:`oklch-p3`,cssId:`--oklch-p3`,name:`OKLCh P3`,base:gp,gamutSpace:Dg}),V_=new mg({id:`oklch-srgb`,cssId:`--oklch-srgb`,name:`OKLCh sRGB`,base:gp,gamutSpace:Eg}),H_=new mg({id:`oklch-rec2020`,cssId:`--oklch-rec2020`,name:`OKLCh Rec.2020`,base:gp,gamutSpace:yg}),U_=new mg({id:`lch-p3`,cssId:`--lch-p3`,name:`LCH P3`,base:tp,gamutSpace:Dg}),W_=new mg({id:`lch-srgb`,cssId:`--lch-srgb`,name:`LCH sRGB`,base:tp,gamutSpace:Eg}),G_=new mg({id:`lch-rec2020`,cssId:`--lch-rec2020`,name:`LCH Rec.2020`,base:tp,gamutSpace:yg}),K_=2*Math.PI,q_={...lp.M,toLMS:[[.4122214694707629,.5363325372617349,.0514459932675022],[.2119034958178251,.6806995506452344,.1073969535369405],[.0883024591900564,.2817188391361215,.6299787016738222]],toSRGBLinear:[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]]},J_=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],Y_=Number.MAX_VALUE,X_=.206,Z_=.03,Q_=1.206/1.03;function $_(e,t){let n=e.length;if(n!==t.length)throw Error(`Vectors of size ${n} and ${t.length} are not aligned`);let r=0;return e.forEach((e,n)=>{r+=e*t[n]}),r}function ev(e){return .5*(Q_*e-X_+Math.sqrt((Q_*e-X_)*(Q_*e-X_)+4*Z_*Q_*e))}function tv(e){return(e**2+X_*e)/(Q_*(e+Z_))}function nv(e){let[t,n]=e;return[n/t,n/(1-t)]}function rv(e,t){return[.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))))]}function iv(e,t){let n=af(e,q_.LabtoLMS);return n[0]**=3,n[1]**=3,n[2]**=3,af(n,t,n)}function av(e,t,n,r){let i=cv(e,t,n,r),a=iv([1,i*e,i*t],n),o=vf(1/Math.max(...a),1/3);return[o,o*i]}function ov(e,t,n,r,i,a,o,s){let c;if(s===void 0&&(s=av(e,t,a,o)),(n-i)*s[1]-(s[0]-i)*r<=0)c=s[1]*i/(r*s[0]+s[1]*(i-n));else{c=s[1]*(i-1)/(r*(s[0]-1)+s[1]*(i-n));let o=n-i,l=r,u=$_(q_.LabtoLMS[0].slice(1),[e,t]),d=$_(q_.LabtoLMS[1].slice(1),[e,t]),f=$_(q_.LabtoLMS[2].slice(1),[e,t]),p=o+l*u,m=o+l*d,h=o+l*f,g=i*(1-c)+c*n,_=c*r,ee=g+_*u,te=g+_*d,ne=g+_*f,re=ee**3,ie=te**3,ae=ne**3,oe=3*p*ee**2,se=3*m*te**2,ce=3*h*ne**2,le=6*p**2*ee,ue=6*m**2*te,de=6*h**2*ne,fe=$_(a[0],[re,ie,ae])-1,pe=$_(a[0],[oe,se,ce]),me=$_(a[0],[le,ue,de]),he=pe/(pe*pe-.5*fe*me),ge=-fe*he,_e=$_(a[1],[re,ie,ae])-1,v=$_(a[1],[oe,se,ce]),ve=$_(a[1],[le,ue,de]),ye=v/(v*v-.5*_e*ve),be=-_e*ye,y=$_(a[2],[re,ie,ae])-1,xe=$_(a[2],[oe,se,ce]),b=$_(a[2],[le,ue,de]),Se=xe/(xe*xe-.5*y*b),Ce=-y*Se;ge=he>=0?ge:Y_,be=ye>=0?be:Y_,Ce=Se>=0?Ce:Y_,c+=Math.min(ge,Math.min(be,Ce))}return c}function sv(e,t,n){let[r,i,a]=e,o=av(i,a,t,n),s=ov(i,a,r,1,r,t,n,o),c=nv(o),l=s/Math.min(r*c[0],(1-r)*c[1]),u=rv(i,a),d=r*u[0],f=(1-r)*u[1],p=.9*l*Math.sqrt(Math.sqrt(1/(1/d**4+1/f**4)));return d=r*.4,f=(1-r)*.8,[Math.sqrt(1/(1/d**2+1/f**2)),p,s]}function cv(e,t,n,r){let i,a,o,s,c,l,u,d;$_(r[0][0],[e,t])>1?([i,a,o,s,c]=r[0][1],[l,u,d]=n[0]):$_(r[1][0],[e,t])>1?([i,a,o,s,c]=r[1][1],[l,u,d]=n[1]):([i,a,o,s,c]=r[2][1],[l,u,d]=n[2]);let f=i+a*e+o*t+s*e**2+c*e*t,p=$_(q_.LabtoLMS[0].slice(1),[e,t]),m=$_(q_.LabtoLMS[1].slice(1),[e,t]),h=$_(q_.LabtoLMS[2].slice(1),[e,t]),g=1+f*p,_=1+f*m,ee=1+f*h,te=g**3,ne=_**3,re=ee**3,ie=3*p*g**2,ae=3*m*_**2,oe=3*h*ee**2,se=6*p**2*g,ce=6*m**2*_,le=6*h**2*ee,ue=l*te+u*ne+d*re,de=l*ie+u*ae+d*oe,fe=l*se+u*ce+d*le;return f-=ue*de/(de**2-.5*ue*fe),f}function lv(e,t,n){let[r,i,a]=e,o=tv(a),s=null,c=null;if(r=$f(r)/360,o!==0&&o!==1&&i!==0){let e=Math.cos(K_*r),a=Math.sin(K_*r),[l,u,d]=sv([o,e,a],t,n),f=.8,p,m,h,g;i<f?(p=1.25*i,m=0,h=f*l,g=1-h/u):(p=5*(i-.8),m=u,h=.2*u**2*1.25**2/l,g=1-h/(d-u));let _=m+p*h/(1-g*p);s=_*e,c=_*a}return[o,s,c]}function uv(e,t,n){let r=e[0],i=0,a=ev(r),o=Math.sqrt(e[1]**2+e[2]**2),s=.5+Math.atan2(-e[2],-e[1])/K_;if(a!==0&&a!==1&&o!==0){let[a,s,c]=sv([r,e[1]/o,e[2]/o],t,n),l=.8,u,d,f,p;o<s?(d=l*a,f=1-d/s,p=o/(d+f*o),i=p*l):(u=s,d=.2*s**2*1.25**2/a,f=1-d/(c-s),p=(o-u)/(d+f*(o-u)),i=l+.2*p)}let c=Math.abs(i)<1e-4;return c||a===0||Math.abs(1-a)<1e-7?(s=null,c||(i=0)):s=$f(s*360),[s,i,a]}var dv=new P({id:`okhsl`,name:`Okhsl`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,1],name:`Saturation`},l:{range:[0,1],name:`Lightness`}},base:lp,gamutSpace:`self`,M:q_,fromBase(e){return uv(e,q_.toSRGBLinear,J_)},toBase(e){return lv(e,q_.toSRGBLinear,J_)},formats:{color:{id:`--okhsl`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}});dv.rgbGamut=new Kf({id:`okhsl-prism`,cssId:`--okhsl-prism`,name:`Okhsl Prism`,base:dv,fromBase(e){return E_.toBase([e[0],e[1]*100,e[2]*100])},toBase(e){let t=E_.fromBase(e);return t[1]/=100,t[2]/=100,t}});var fv=new P({id:`oklrab`,name:`Oklrab`,coords:{l:{refRange:[0,1],name:`Lightness`},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:`D65`,base:lp,fromBase(e){return[ev(e[0]),e[1],e[2]]},toBase(e){return[tv(e[0]),e[1],e[2]]},formats:{color:{coords:[`<percentage> | <number>`,`<number> | <percentage>[-1,1]`,`<number> | <percentage>[-1,1]`]}}}),pv=new P({id:`oklrch`,name:`Oklrch`,coords:{l:{refRange:[0,1],name:`Lightness`},c:{refRange:[0,.4],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},white:`D65`,base:fv,fromBase:tp.fromBase,toBase:tp.toBase,formats:{color:{coords:[`<percentage> | <number>`,`<number> | <percentage>[0,1]`,`<number> | <angle>`]}}}),mv={toSRGBLinear:dv.M.toSRGBLinear};function hv(e,t,n){let[r,i,a]=e;r=$f(r)/360;let o=tv(a),s=null,c=null;if(o!==0&&i!==0){let e=Math.cos(K_*r),l=Math.sin(K_*r),[u,d]=nv(av(e,l,t,n)),f=.5,p=1-f/u,m=1-i*f/(f+d-d*p*i),h=i*d*f/(f+d-d*p*i);o=a*m;let g=a*h,_=tv(m),ee=h*_/m,te=tv(o);g=g*te/o,o=te;let[ne,re,ie]=iv([_,e*ee,l*ee],t),ae=vf(1/Math.max(Math.max(ne,re),Math.max(ie,0)),1/3);o*=ae,g*=ae,s=g*e,c=g*l}return[o,s,c]}function gv(e,t,n){let r=e[0],i=0,a=ev(r),o=Math.sqrt(e[1]**2+e[2]**2),s=.5+Math.atan2(-e[2],-e[1])/K_;if(r!==0&&r!==1&&o!==0){let s=e[1]/o,c=e[2]/o,[l,u]=nv(av(s,c,t,n)),d=.5,f=1-d/l,p=u/(o+r*u),m=p*r,h=p*o,g=tv(m),_=h*g/m,[ee,te,ne]=iv([g,s*_,c*_],t),re=vf(1/Math.max(Math.max(ee,te),Math.max(ne,0)),1/3);r/=re,o/=re,o=o*ev(r)/r,r=ev(r),a=r/m,i=(d+u)*h/(u*d+u*f*h)}return s=Math.abs(i)<1e-4||a===0?null:$f(s*360),[s,i,a]}var _v=new P({id:`okhsv`,name:`Okhsv`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,1],name:`Saturation`},v:{range:[0,1],name:`Value`}},base:lp,gamutSpace:`self`,M:mv,fromBase(e){return gv(e,mv.toSRGBLinear,J_)},toBase(e){return hv(e,mv.toSRGBLinear,J_)},formats:{color:{id:`--okhsv`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}});_v.rgbGamut=new Kf({id:`okhsv-prism`,cssId:`--okhsv-prism`,name:`Okhsv Prism`,base:_v,fromBase(e){return E_.toBase([e[0],e[1]*100,e[2]*100])},toBase(e){let t=E_.fromBase(e);return t[1]/=100,t[2]/=100,t}});var vv=Ff.D65,yv=216/24389,bv=24389/27,[xv,Sv]=f_({space:Gf,coords:vv}),Cv=new P({id:`luv`,name:`Luv`,coords:{l:{refRange:[0,100],name:`Lightness`},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:vv,base:Gf,fromBase(e){let t=[df(e[0]),df(e[1]),df(e[2])],n=t[1],[r,i]=f_({space:Gf,coords:t});if(!Number.isFinite(r)||!Number.isFinite(i))return[0,0,0];let a=n<=yv?bv*n:116*Math.cbrt(n)-16;return[a,13*a*(r-xv),13*a*(i-Sv)]},toBase(e){let[t,n,r]=e;if(t===0||uf(t))return[0,0,0];n=df(n),r=df(r);let i=n/(13*t)+xv,a=r/(13*t)+Sv,o=t<=8?t/bv:((t+16)/116)**3;return[o*(9*i/(4*a)),o,o*((12-3*i-20*a)/(4*a))]},formats:{color:{id:`--luv`,coords:[`<number> | <percentage>`,`<number> | <percentage>`,`<number> | <percentage>`]}}}),wv=new P({id:`lchuv`,name:`LChuv`,coords:{l:{refRange:[0,100],name:`Lightness`},c:{refRange:[0,220],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},base:Cv,fromBase:tp.fromBase,toBase:tp.toBase,formats:{color:{id:`--lchuv`,coords:[`<number> | <percentage>`,`<number> | <percentage>`,`<number> | <angle>`]}}}),Tv=216/24389,Ev=24389/27,Dv=xg.fromXYZ,Ov=Dv[0][0],kv=Dv[0][1],Av=Dv[0][2],jv=Dv[1][0],Mv=Dv[1][1],Nv=Dv[1][2],Pv=Dv[2][0],Fv=Dv[2][1],Iv=Dv[2][2];function Lv(e,t,n){let r=t/(Math.sin(n)-e*Math.cos(n));return r<0?1/0:r}function Rv(e){let t=(e+16)**3/1560896,n=t>Tv?t:e/Ev,r=n*(284517*Ov-94839*Av),i=n*(838422*Av+769860*kv+731718*Ov),a=n*(632260*Av-126452*kv),o=n*(284517*jv-94839*Nv),s=n*(838422*Nv+769860*Mv+731718*jv),c=n*(632260*Nv-126452*Mv),l=n*(284517*Pv-94839*Iv),u=n*(838422*Iv+769860*Fv+731718*Pv),d=n*(632260*Iv-126452*Fv);return{r0s:r/a,r0i:i*e/a,r1s:r/(a+126452),r1i:(i-769860)*e/(a+126452),g0s:o/c,g0i:s*e/c,g1s:o/(c+126452),g1i:(s-769860)*e/(c+126452),b0s:l/d,b0i:u*e/d,b1s:l/(d+126452),b1i:(u-769860)*e/(d+126452)}}function zv(e,t){let n=t/360*Math.PI*2,r=Lv(e.r0s,e.r0i,n),i=Lv(e.r1s,e.r1i,n),a=Lv(e.g0s,e.g0i,n),o=Lv(e.g1s,e.g1i,n),s=Lv(e.b0s,e.b0i,n),c=Lv(e.b1s,e.b1i,n);return Math.min(r,i,a,o,s,c)}var Bv=new P({id:`hsluv`,name:`HSLuv`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,100],name:`Saturation`},l:{range:[0,100],name:`Lightness`}},base:wv,gamutSpace:Eg,rgbGamut:Eg,fromBase(e){let[t,n,r]=[df(e[0]),df(e[1]),df(e[2])],i;return t>99.9999999?(i=0,t=100):t<1e-8?(i=0,t=0):i=n/zv(Rv(t),r)*100,[r,i,t]},toBase(e){let[t,n,r]=[df(e[0]),df(e[1]),df(e[2])],i;return r>99.9999999?(r=100,i=0):r<1e-8?(r=0,i=0):i=zv(Rv(r),t)/100*n,[r,i,t]},formats:{color:{id:`--hsluv`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}}),Vv=xg.fromXYZ;Vv[0][0],Vv[0][1],Vv[0][2],Vv[1][0],Vv[1][1],Vv[1][2],Vv[2][0],Vv[2][1],Vv[2][2];function Hv(e,t){return Math.abs(t)/Math.sqrt(e**2+1)}function Uv(e){let t=Hv(e.r0s,e.r0i),n=Hv(e.r1s,e.r1i),r=Hv(e.g0s,e.g0i),i=Hv(e.g1s,e.g1i),a=Hv(e.b0s,e.b0i),o=Hv(e.b1s,e.b1i);return Math.min(t,n,r,i,a,o)}var Wv=new P({id:`hpluv`,name:`HPLuv`,coords:{h:{refRange:[0,360],type:`angle`,name:`Hue`},s:{range:[0,100],name:`Saturation`},l:{range:[0,100],name:`Lightness`}},base:wv,gamutSpace:`self`,fromBase(e){let[t,n,r]=[df(e[0]),df(e[1]),df(e[2])],i;return t>99.9999999?(i=0,t=100):t<1e-8?(i=0,t=0):i=n/Uv(Rv(t))*100,[r,i,t]},toBase(e){let[t,n,r]=[df(e[0]),df(e[1]),df(e[2])],i;return r>99.9999999?(r=100,i=0):r<1e-8?(r=0,i=0):i=Uv(Rv(r))/100*n,[r,i,t]},formats:{color:{id:`--hpluv`,coords:[`<number> | <angle>`,`<percentage> | <number>`,`<percentage> | <number>`]}}});Wv.rgbGamut=new Kf({id:`hpluv-prism`,cssId:`--hpluv-prism`,name:`HPLuv Prism`,base:Wv,fromBase(e){return E_.toBase(e)},toBase(e){return E_.fromBase(e)}});var Gv=.021,Kv=Math.sqrt(Gv/3),qv=Kv*Kv*Kv,Jv=.978,Yv=.058,Xv=264.5*Math.PI/180,Zv=.7,Qv=.37,$v={M1:[[.8154832155941288,.36033406153856506,-.12434135574228214],[.03301008352745078,.9292865057066169,.03612192716575443],[.04818827356456861,.2642841575338424,.6334971784195534]],M1_INV:[[1.2325947975032656,-.5557590239287523,.2736201534771583],[-.040801327874216024,1.112228863738653,-.07142753586443781],[-.07673825928337766,-.42172784577108585,1.5875238558143416]],M2:[[.21193779684470104,.7992121834263127,-.00410075161564345],[2.4672018828033475,-2.9877348024830788,.520532919679731],[-.11390787868068575,1.3932982808117473,-1.279390402131062]],M2_INV:[[.9930001151336143,.32599327253052285,.1294508563171392],[.9930001151336139,-.08708353111074627,-.03861361743004929],[.9930001151336136,-.12386097008215022,-.8351991365871061]]},ey=[0,.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1],ty=[0,.009494013522189627,.02564569838030986,.055259661658689105,.10574901531227408,.16055853320726027,.21405964892993756,.26786230508811226,.3220435246104499,.3739052098520243,.43020997780918835,.4835465162128873,.5399824670411353,.5956710081330342,.6542161666450478,.7115380216519989,.7702762412711669,.8293313467712837,.889406386197059,.9462829573474728,1],ny=ey.length;function ry(e){let t=e/(2*qv),n=2*Kv*Math.sinh(Math.asinh(t)/3),r=n*n*n+Gv*n-e,i=3*n*n+Gv,a=6*n,o=2*i*i-r*a;return Math.abs(o)>1e-30&&(n-=2*r*i/o),n}function iy(e){return e*e*e+Gv*e}function ay(e){let t=Math.max(0,Math.min(1,(e-Qv)/.63));return Math.sin(Math.PI*t)**2}function oy(e,t,n){let r=Math.sqrt(t*t+n*n);if(r<1e-12)return[t,n];let i=ay(e);if(i<1e-12)return[t,n];let a=Math.atan2(n,t),o=a-Xv;o-=Math.round(o/(2*Math.PI))*2*Math.PI;let s=Math.exp(-.5*(o/Zv)**2),c=a+Yv*i*s;return[r*Math.cos(c),r*Math.sin(c)]}function sy(e,t,n){let r=Math.sqrt(t*t+n*n);if(r<1e-12)return[t,n];let i=ay(e);if(i<1e-12)return[t,n];let a=Math.atan2(n,t),o=Zv*Zv,s=Yv*i,c=a;for(let e=0;e<8;e++){let e=c-Xv;e-=Math.round(e/(2*Math.PI))*2*Math.PI;let t=Math.exp(-.5*e*e/o),n=c+s*t-a,r=1+s*t*(-e/o),i=s*t*(-1/o+e*e/(o*o)),l=2*r*r-n*i;Math.abs(l)>1e-30&&(c-=2*n*r/l)}return[r*Math.cos(c),r*Math.sin(c)]}function cy(e){if(e<=0||e>=1)return e;let t=0,n=ny-1;for(;n-t>1;){let r=t+n>>1;ey[r]<=e?t=r:n=r}let r=(e-ey[t])/(ey[n]-ey[t]);return ty[t]+r*(ty[n]-ty[t])}function ly(e){if(e<=ty[0]||e>=ty[ny-1])return e;let t=0,n=ny-1;for(;n-t>1;){let r=t+n>>1;ty[r]<=e?t=r:n=r}let r=(e-ty[t])/(ty[n]-ty[t]);return ey[t]+r*(ey[n]-ey[t])}var uy=new P({id:`helmgen`,name:`HelmGen`,cssId:`--helmgen`,coords:{l:{refRange:[0,1],name:`Lightness`},a:{refRange:[-.6,.6]},b:{refRange:[-.6,.6]}},white:`D65`,base:Gf,M:$v,fromBase(e){let t=af(e,$v.M1),n=ry(Math.max(t[0],0)),r=ry(Math.max(t[1],0)),i=ry(Math.max(t[2],0));{let e=(n+r+i)/3,t=(Math.max(n,r,i)-Math.min(n,r,i))/Math.max(Math.abs(e),1e-30),a=Math.exp(-((t/1e-5)**2));n+=a*(e-n),r+=a*(e-r),i+=a*(e-i)}let[a,o,s]=af([n,r,i],$v.M2);{let e=Math.sqrt(o*o+s*s);if(e>1e-12){let t=e**+Jv/e;o*=t,s*=t}}return a=cy(a),[o,s]=oy(a,o,s),[a,o,s]},toBase(e){let[t,n,r]=e;[n,r]=sy(t,n,r),t=ly(t);{let e=Math.sqrt(n*n+r*r);if(e>1e-12){let t=e**(1/Jv)/e;n*=t,r*=t}}let[i,a,o]=af([t,n,r],$v.M2_INV);{let e=(i+a+o)/3,t=(Math.max(i,a,o)-Math.min(i,a,o))/Math.max(Math.abs(e),1e-30),n=Math.exp(-((t/1e-5)**2));i+=n*(e-i),a+=n*(e-a),o+=n*(e-o)}return af([iy(i),iy(a),iy(o)],$v.M1_INV)}}),dy=new P({id:`helmgenlch`,name:`HelmGenLCh`,cssId:`--helmgenlch`,coords:{l:{refRange:[0,1],name:`Lightness`},c:{refRange:[0,.65],name:`Chroma`},h:{refRange:[0,360],type:`angle`,name:`Hue`}},white:`D65`,base:uy,fromBase:tp.fromBase,toBase:tp.toBase}),fy=new Kf({id:`rec2100-linear`,name:`Linear REC.2100`,white:`D65`,M:_g}),py=203,my=2610/2**14,hy=2**14/2610,gy=2523/32,_y=32/2523,vy=3424/4096,yy=2413/128,by=2392/128,xy=new Kf({id:`rec2100pq`,cssId:`rec2100-pq`,name:`REC.2100-PQ`,base:fy,linearGamut:fy,toBase(e){return e.map(function(e){return(Math.max(e**_y-vy,0)/(yy-by*e**_y))**hy*1e4/py})},fromBase(e){return e.map(function(e){let t=Math.max(e*py/1e4,0);return((vy+yy*t**my)/(1+by*t**my))**gy})}}),Sy=.17883277,Cy=.28466892,wy=.55991073,Ty=3.7743,Ey=new Kf({id:`rec2100hlg`,cssId:`rec2100-hlg`,name:`REC.2100-HLG`,referred:`scene`,base:fy,linearGamut:fy,toBase(e){return e.map(function(e){return e<=.5?e**2/3*Ty:(Math.exp((e-wy)/Sy)+Cy)/12*Ty})},fromBase(e){return e.map(function(e){return e/=Ty,e<=1/12?vf(3*e,.5):Sy*Math.log(12*e-Cy)+wy})}}),Dy={};Af.add(`chromatic-adaptation-start`,e=>{e.options.method&&(e.M=ky(e.W1,e.W2,e.options.method))}),Af.add(`chromatic-adaptation-end`,e=>{e.M||=ky(e.W1,e.W2,e.options.method)});function Oy({id:e,toCone_M:t,fromCone_M:n}){Dy[e]=arguments[0]}function ky(e,t,n=`Bradford`){let r=Dy[n],[i,a,o]=nf(r.toCone_M,e),[s,c,l]=nf(r.toCone_M,t),u=nf([[s/i,0,0],[0,c/a,0],[0,0,l/o]],r.toCone_M);return nf(r.fromCone_M,u)}Oy({id:`von Kries`,toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]}),Oy({id:`Bradford`,toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]}),Oy({id:`CAT02`,toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]}),Oy({id:`CAT16`,toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]}),Object.assign(Ff,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),Ff.ACES=[.32168/.33767,1,.34065/.33767];var Ay=new Kf({id:`acescg`,cssId:`--acescg`,name:`ACEScg`,coords:{r:{range:[0,65504],name:`Red`},g:{range:[0,65504],name:`Green`},b:{range:[0,65504],name:`Blue`}},referred:`scene`,white:Ff.ACES,M:{toXYZ:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]]}}),jy=2**-16,My=-.35828683,Ny=(Math.log2(65504)+9.72)/17.52,Py=new Kf({id:`acescc`,cssId:`--acescc`,name:`ACEScc`,coords:{r:{range:[My,Ny],name:`Red`},g:{range:[My,Ny],name:`Green`},b:{range:[My,Ny],name:`Blue`}},referred:`scene`,base:Ay,linearGamut:Ay,toBase(e){return e.map(function(e){return e<=-.3013698630136986?(2**(e*17.52-9.72)-jy)*2:e<Ny?2**(e*17.52-9.72):65504})},fromBase(e){return e.map(function(e){return e<=0?(Math.log2(jy)+9.72)/17.52:e<jy?(Math.log2(jy+e*.5)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})}}),Fy=e({A98RGB:()=>M_,A98RGB_Linear:()=>j_,ACEScc:()=>Py,ACEScg:()=>Ay,CAM16_JMh:()=>_m,HCT:()=>Em,HPLuv:()=>Wv,HSL:()=>E_,HSL_P3:()=>D_,HSL_REC2020:()=>O_,HSLuv:()=>Bv,HSV:()=>k_,HWB:()=>A_,HelmGen:()=>uy,HelmGenLCh:()=>dy,Helmlab:()=>Qh,ICTCP:()=>Yp,JzCzHz:()=>zp,Jzazbz:()=>Rp,LCH:()=>tp,LCH_P3:()=>U_,LCH_REC_2020:()=>G_,LCH_sRGB:()=>W_,LCHuv:()=>wv,Lab:()=>Qf,Lab_D65:()=>o_,Luv:()=>Cv,OKLCH:()=>gp,OKLCH_P3:()=>B_,OKLCH_REC_2020:()=>H_,OKLCH_sRGB:()=>V_,OKLab:()=>lp,OKLrCH:()=>pv,OKLrab:()=>fv,Okhsl:()=>dv,Okhsv:()=>_v,P3:()=>Dg,P3_Linear:()=>bg,ProPhoto:()=>I_,ProPhoto_Linear:()=>N_,REC_2020:()=>yg,REC_2020_Linear:()=>vg,REC_2020_Scene_Referred:()=>z_,REC_2100_HLG:()=>Ey,REC_2100_Linear:()=>fy,REC_2100_PQ:()=>xy,XYZ_ABS_D65:()=>Tp,XYZ_D50:()=>qf,XYZ_D65:()=>Gf,sRGB:()=>Eg,sRGB_Linear:()=>Sg}),Iy=class e{constructor(...e){let t;if(e.length===1){let n={};typeof e[0]==`object`&&Object.getPrototypeOf(e[0]).constructor===Object&&(e[0]={...e[0]}),t=N(e[0],{parseMeta:n}),n.format&&(this.parseMeta=n)}let n,r,i;t?(n=t.space||t.spaceId,r=t.coords,i=t.alpha):[n,r,i]=e,Object.defineProperty(this,"space",{value:P.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=r?r.slice():[0,0,0],this.alpha=uf(i)?i:i===void 0?1:gf(0,i,1);for(let e in this.space.coords)Object.defineProperty(this,e,{get:()=>this.get(e),set:t=>this.set(e,t)})}get spaceId(){return this.space.id}clone(){return new e(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=kg(this,...t);return n.color=new e(n.color),n}static get(t,...n){return xf(t,this)?t:new e(t,...n)}static try(t,n){if(xf(t,this))return t;let r=hg(t,n);return r?new e(r):null}static defineFunction(t,n,r=n){let{instance:i=!0,returns:a}=r,o=function(...t){let r=n(...t);if(a===`color`)r=e.get(r);else if(a===`function<color>`){let t=r;r=function(...n){let r=t(...n);return e.get(r)},Object.assign(r,t)}else a===`array<color>`&&(r=r.map(t=>e.get(t)));return r};t in e||(e[t]=o),i&&(e.prototype[t]=function(...e){return o(this,...e)})}static defineFunctions(t){for(let n in t)e.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(e);else for(let n in t)e.defineFunction(n,t[n])}};Iy.defineFunctions({get:hp,getAll:mp,set:vp,setAll:_p,to:pp,equals:Mg,inGamut:fp,toGamut:lg,distance:bp,deltas:Ag,toString:gg}),Object.assign(Iy,{util:of,hooks:Af,WHITES:Ff,Space:P,spaces:P.registry,parse:Rf,defaults:jf});for(let e of Object.keys(Fy))P.register(Fy[e]);for(let e in P.registry)Ly(e,P.registry[e]);Af.add(`colorspace-init-end`,e=>{Ly(e.id,e),e.aliases?.forEach(t=>{Ly(t,e)})});function Ly(e,t){let n=e.replace(/-/g,`_`);Object.defineProperty(Iy.prototype,n,{get(){let n=this.getAll(e);if(typeof Proxy>`u`)return n;let r=new Proxy(n,{has:(e,n)=>{try{return P.resolveCoord([t,n]),!0}catch{}return Reflect.has(e,n)},get:(e,n,i)=>{if(n&&typeof n!=`symbol`&&!(n in e)&&n in r){let{index:r}=P.resolveCoord([t,n]);if(r>=0)return e[r]}return Reflect.get(e,n,i)},set:(n,r,i,a)=>{if(r&&typeof r!=`symbol`&&!(r in n)||Number(r)>=0){let{index:a}=P.resolveCoord([t,r]);if(a>=0)return n[a]=i,this.setAll(e,n),!0}return Reflect.set(n,r,i,a)}});return r},set(t){this.setAll(e,t)},configurable:!0,enumerable:!0})}Iy.extend(og),Iy.extend({deltaE:h_}),Object.assign(Iy,{deltaEMethods:og}),Iy.extend(g_),Iy.extend({contrast:u_}),Iy.extend(d_),Iy.extend(Ng),Iy.extend(y_),Iy.extend(l_);var Ry=Iy,zy=Symbol(`no update`);function By(e){return e!==zy}function Vy(e){return Xy(e)&&!Hy(e)&&!eb(e)&&Symbol.asyncIterator in e}function Hy(e){return Array.isArray(e)}function Uy(e){return typeof e==`bigint`}function Wy(e){return typeof e==`boolean`}function Gy(e){return e instanceof globalThis.Date}function Ky(e){return typeof e==`function`}function qy(e){return Xy(e)&&!Hy(e)&&!eb(e)&&Symbol.iterator in e}function Jy(e){return e===null}function Yy(e){return typeof e==`number`}function Xy(e){return typeof e==`object`&&!!e}function Zy(e){return e instanceof globalThis.RegExp}function Qy(e){return typeof e==`string`}function $y(e){return typeof e==`symbol`}function eb(e){return e instanceof globalThis.Uint8Array}function tb(e){return e===void 0}function nb(e){return e.map(e=>sb(e))}function rb(e){return new Date(e.getTime())}function ib(e){return new Uint8Array(e)}function ab(e){return new RegExp(e.source,e.flags)}function ob(e){let t={};for(let n of Object.getOwnPropertyNames(e))t[n]=sb(e[n]);for(let n of Object.getOwnPropertySymbols(e))t[n]=sb(e[n]);return t}function sb(e){return Hy(e)?nb(e):Gy(e)?rb(e):eb(e)?ib(e):Zy(e)?ab(e):Xy(e)?ob(e):e}function cb(e){return sb(e)}function lb(e,t){return cb(t===void 0?e:{...t,...e})}function ub(e){return gb(e)&&globalThis.Symbol.asyncIterator in e}function db(e){return gb(e)&&globalThis.Symbol.iterator in e}function fb(e){return e instanceof globalThis.Promise}function pb(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function mb(e){return e instanceof globalThis.Uint8Array}function hb(e,t){return t in e}function gb(e){return typeof e==`object`&&!!e}function _b(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function vb(e){return e===void 0}function yb(e){return e===null}function bb(e){return typeof e==`boolean`}function xb(e){return typeof e==`number`}function Sb(e){return globalThis.Number.isInteger(e)}function Cb(e){return typeof e==`bigint`}function wb(e){return typeof e==`string`}function Tb(e){return typeof e==`function`}function Eb(e){return typeof e==`symbol`}function Db(e){return Cb(e)||bb(e)||yb(e)||xb(e)||wb(e)||Eb(e)||vb(e)}var Ob;(function(e){e.InstanceMode=`default`,e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(t,n){return e.ExactOptionalPropertyTypes?n in t:t[n]!==void 0}e.IsExactOptionalProperty=t;function n(t){let n=gb(t);return e.AllowArrayObject?n:n&&!_b(t)}e.IsObjectLike=n;function r(e){return n(e)&&!(e instanceof Date)&&!(e instanceof Uint8Array)}e.IsRecordLike=r;function i(t){return e.AllowNaN?xb(t):Number.isFinite(t)}e.IsNumberLike=i;function a(t){let n=vb(t);return e.AllowNullVoid?n||t===null:n}e.IsVoidLike=a})(Ob||={});function kb(e){return globalThis.Object.freeze(e).map(e=>Pb(e))}function Ab(e){return e}function jb(e){return e}function Mb(e){return e}function Nb(e){let t={};for(let n of Object.getOwnPropertyNames(e))t[n]=Pb(e[n]);for(let n of Object.getOwnPropertySymbols(e))t[n]=Pb(e[n]);return globalThis.Object.freeze(t)}function Pb(e){return Hy(e)?kb(e):Gy(e)?Ab(e):eb(e)?jb(e):Zy(e)?Mb(e):Xy(e)?Nb(e):e}function F(e,t){let n=t===void 0?e:{...t,...e};switch(Ob.InstanceMode){case`freeze`:return Pb(n);case`clone`:return cb(n);default:return n}}var Fb=class extends Error{constructor(e){super(e)}},Ib=Symbol.for(`TypeBox.Transform`),Lb=Symbol.for(`TypeBox.Readonly`),Rb=Symbol.for(`TypeBox.Optional`),zb=Symbol.for(`TypeBox.Hint`),I=Symbol.for(`TypeBox.Kind`);function Bb(e){return Xy(e)&&e[Lb]===`Readonly`}function Vb(e){return Xy(e)&&e[Rb]===`Optional`}function Hb(e){return tx(e,`Any`)}function Ub(e){return tx(e,`Argument`)}function Wb(e){return tx(e,`Array`)}function Gb(e){return tx(e,`AsyncIterator`)}function Kb(e){return tx(e,`BigInt`)}function qb(e){return tx(e,`Boolean`)}function Jb(e){return tx(e,`Computed`)}function Yb(e){return tx(e,`Constructor`)}function Xb(e){return tx(e,`Date`)}function Zb(e){return tx(e,`Function`)}function Qb(e){return tx(e,`Integer`)}function $b(e){return tx(e,`Intersect`)}function ex(e){return tx(e,`Iterator`)}function tx(e,t){return Xy(e)&&I in e&&e[I]===t}function nx(e){return Wy(e)||Yy(e)||Qy(e)}function rx(e){return tx(e,`Literal`)}function ix(e){return tx(e,`MappedKey`)}function ax(e){return tx(e,`MappedResult`)}function ox(e){return tx(e,`Never`)}function sx(e){return tx(e,`Not`)}function cx(e){return tx(e,`Null`)}function lx(e){return tx(e,`Number`)}function ux(e){return tx(e,`Object`)}function dx(e){return tx(e,`Promise`)}function fx(e){return tx(e,`Record`)}function px(e){return tx(e,`Ref`)}function mx(e){return tx(e,`RegExp`)}function hx(e){return tx(e,`String`)}function gx(e){return tx(e,`Symbol`)}function _x(e){return tx(e,`TemplateLiteral`)}function vx(e){return tx(e,`This`)}function yx(e){return Xy(e)&&Ib in e}function bx(e){return tx(e,`Tuple`)}function xx(e){return tx(e,`Undefined`)}function Sx(e){return tx(e,`Union`)}function Cx(e){return tx(e,`Uint8Array`)}function wx(e){return tx(e,`Unknown`)}function Tx(e){return tx(e,`Unsafe`)}function Ex(e){return tx(e,`Void`)}function Dx(e){return Xy(e)&&I in e&&Qy(e[I])}function Ox(e){return Hb(e)||Ub(e)||Wb(e)||qb(e)||Kb(e)||Gb(e)||Jb(e)||Yb(e)||Xb(e)||Zb(e)||Qb(e)||$b(e)||ex(e)||rx(e)||ix(e)||ax(e)||ox(e)||sx(e)||cx(e)||lx(e)||ux(e)||dx(e)||fx(e)||px(e)||mx(e)||hx(e)||gx(e)||_x(e)||vx(e)||bx(e)||xx(e)||Sx(e)||Cx(e)||wx(e)||Tx(e)||Ex(e)||Dx(e)}var kx=`Argument.Any.Array.AsyncIterator.BigInt.Boolean.Computed.Constructor.Date.Enum.Function.Integer.Intersect.Iterator.Literal.MappedKey.MappedResult.Not.Null.Number.Object.Promise.Record.Ref.RegExp.String.Symbol.TemplateLiteral.This.Tuple.Undefined.Union.Uint8Array.Unknown.Void`.split(`.`);function Ax(e){try{return new RegExp(e),!0}catch{return!1}}function jx(e){if(!Qy(e))return!1;for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(n>=7&&n<=13||n===27||n===127)return!1}return!0}function Mx(e){return Fx(e)||jS(e)}function Nx(e){return tb(e)||Uy(e)}function Px(e){return tb(e)||Yy(e)}function Fx(e){return tb(e)||Wy(e)}function Ix(e){return tb(e)||Qy(e)}function Lx(e){return tb(e)||Qy(e)&&jx(e)&&Ax(e)}function Rx(e){return tb(e)||Qy(e)&&jx(e)}function zx(e){return tb(e)||jS(e)}function Bx(e){return Xy(e)&&e[Rb]===`Optional`}function Vx(e){return tS(e,`Any`)&&Ix(e.$id)}function Hx(e){return tS(e,`Argument`)&&Yy(e.index)}function Ux(e){return tS(e,`Array`)&&e.type===`array`&&Ix(e.$id)&&jS(e.items)&&Px(e.minItems)&&Px(e.maxItems)&&Fx(e.uniqueItems)&&zx(e.contains)&&Px(e.minContains)&&Px(e.maxContains)}function Wx(e){return tS(e,`AsyncIterator`)&&e.type===`AsyncIterator`&&Ix(e.$id)&&jS(e.items)}function Gx(e){return tS(e,`BigInt`)&&e.type===`bigint`&&Ix(e.$id)&&Nx(e.exclusiveMaximum)&&Nx(e.exclusiveMinimum)&&Nx(e.maximum)&&Nx(e.minimum)&&Nx(e.multipleOf)}function Kx(e){return tS(e,`Boolean`)&&e.type===`boolean`&&Ix(e.$id)}function qx(e){return tS(e,`Computed`)&&Qy(e.target)&&Hy(e.parameters)&&e.parameters.every(e=>jS(e))}function Jx(e){return tS(e,`Constructor`)&&e.type===`Constructor`&&Ix(e.$id)&&Hy(e.parameters)&&e.parameters.every(e=>jS(e))&&jS(e.returns)}function Yx(e){return tS(e,`Date`)&&e.type===`Date`&&Ix(e.$id)&&Px(e.exclusiveMaximumTimestamp)&&Px(e.exclusiveMinimumTimestamp)&&Px(e.maximumTimestamp)&&Px(e.minimumTimestamp)&&Px(e.multipleOfTimestamp)}function Xx(e){return tS(e,`Function`)&&e.type===`Function`&&Ix(e.$id)&&Hy(e.parameters)&&e.parameters.every(e=>jS(e))&&jS(e.returns)}function Zx(e){return tS(e,`Integer`)&&e.type===`integer`&&Ix(e.$id)&&Px(e.exclusiveMaximum)&&Px(e.exclusiveMinimum)&&Px(e.maximum)&&Px(e.minimum)&&Px(e.multipleOf)}function Qx(e){return Xy(e)&&Object.entries(e).every(([e,t])=>jx(e)&&jS(t))}function $x(e){return tS(e,`Intersect`)&&!(Qy(e.type)&&e.type!==`object`)&&Hy(e.allOf)&&e.allOf.every(e=>jS(e)&&!SS(e))&&Ix(e.type)&&(Fx(e.unevaluatedProperties)||zx(e.unevaluatedProperties))&&Ix(e.$id)}function eS(e){return tS(e,`Iterator`)&&e.type===`Iterator`&&Ix(e.$id)&&jS(e.items)}function tS(e,t){return Xy(e)&&I in e&&e[I]===t}function nS(e){return aS(e)&&Qy(e.const)}function rS(e){return aS(e)&&Yy(e.const)}function iS(e){return aS(e)&&Wy(e.const)}function aS(e){return tS(e,`Literal`)&&Ix(e.$id)&&oS(e.const)}function oS(e){return Wy(e)||Yy(e)||Qy(e)}function sS(e){return tS(e,`MappedKey`)&&Hy(e.keys)&&e.keys.every(e=>Yy(e)||Qy(e))}function cS(e){return tS(e,`MappedResult`)&&Qx(e.properties)}function lS(e){return tS(e,`Never`)&&Xy(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function uS(e){return tS(e,`Not`)&&jS(e.not)}function dS(e){return tS(e,`Null`)&&e.type===`null`&&Ix(e.$id)}function fS(e){return tS(e,`Number`)&&e.type===`number`&&Ix(e.$id)&&Px(e.exclusiveMaximum)&&Px(e.exclusiveMinimum)&&Px(e.maximum)&&Px(e.minimum)&&Px(e.multipleOf)}function pS(e){return tS(e,`Object`)&&e.type===`object`&&Ix(e.$id)&&Qx(e.properties)&&Mx(e.additionalProperties)&&Px(e.minProperties)&&Px(e.maxProperties)}function mS(e){return tS(e,`Promise`)&&e.type===`Promise`&&Ix(e.$id)&&jS(e.item)}function hS(e){return tS(e,`Record`)&&e.type===`object`&&Ix(e.$id)&&Mx(e.additionalProperties)&&Xy(e.patternProperties)&&(e=>{let t=Object.getOwnPropertyNames(e.patternProperties);return t.length===1&&Ax(t[0])&&Xy(e.patternProperties)&&jS(e.patternProperties[t[0]])})(e)}function gS(e){return tS(e,`Ref`)&&Ix(e.$id)&&Qy(e.$ref)}function _S(e){return tS(e,`RegExp`)&&Ix(e.$id)&&Qy(e.source)&&Qy(e.flags)&&Px(e.maxLength)&&Px(e.minLength)}function vS(e){return tS(e,`String`)&&e.type===`string`&&Ix(e.$id)&&Px(e.minLength)&&Px(e.maxLength)&&Lx(e.pattern)&&Rx(e.format)}function yS(e){return tS(e,`Symbol`)&&e.type===`symbol`&&Ix(e.$id)}function bS(e){return tS(e,`TemplateLiteral`)&&e.type===`string`&&Qy(e.pattern)&&e.pattern[0]===`^`&&e.pattern[e.pattern.length-1]===`$`}function xS(e){return tS(e,`This`)&&Ix(e.$id)&&Qy(e.$ref)}function SS(e){return Xy(e)&&Ib in e}function CS(e){return tS(e,`Tuple`)&&e.type===`array`&&Ix(e.$id)&&Yy(e.minItems)&&Yy(e.maxItems)&&e.minItems===e.maxItems&&(tb(e.items)&&tb(e.additionalItems)&&e.minItems===0||Hy(e.items)&&e.items.every(e=>jS(e)))}function wS(e){return tS(e,`Undefined`)&&e.type===`undefined`&&Ix(e.$id)}function TS(e){return tS(e,`Union`)&&Ix(e.$id)&&Xy(e)&&Hy(e.anyOf)&&e.anyOf.every(e=>jS(e))}function ES(e){return tS(e,`Uint8Array`)&&e.type===`Uint8Array`&&Ix(e.$id)&&Px(e.minByteLength)&&Px(e.maxByteLength)}function DS(e){return tS(e,`Unknown`)&&Ix(e.$id)}function OS(e){return tS(e,`Unsafe`)}function kS(e){return tS(e,`Void`)&&e.type===`void`&&Ix(e.$id)}function AS(e){return Xy(e)&&I in e&&Qy(e[I])&&!kx.includes(e[I])}function jS(e){return Xy(e)&&(Vx(e)||Hx(e)||Ux(e)||Kx(e)||Gx(e)||Wx(e)||qx(e)||Jx(e)||Yx(e)||Xx(e)||Zx(e)||$x(e)||eS(e)||aS(e)||sS(e)||cS(e)||lS(e)||uS(e)||dS(e)||fS(e)||pS(e)||mS(e)||hS(e)||gS(e)||_S(e)||vS(e)||yS(e)||bS(e)||xS(e)||CS(e)||wS(e)||TS(e)||ES(e)||DS(e)||OS(e)||kS(e)||AS(e))}var MS=`(true|false)`,NS=`(0|[1-9][0-9]*)`,PS=`(.*)`,FS=`(?!.*)`,IS=`^${NS}$`,LS=`^${PS}$`,RS=`^${FS}$`,zS=new Map;function BS(e){return zS.has(e)}function VS(e){return zS.get(e)}var HS=new Map;function US(e){return HS.has(e)}function WS(e,t){HS.set(e,t)}function GS(e){return HS.get(e)}function KS(e,t){return e.includes(t)}function qS(e){return[...new Set(e)]}function JS(e,t){return e.filter(e=>t.includes(e))}function YS(e,t){return e.reduce((e,t)=>JS(e,t),t)}function XS(e){return e.length===1?e[0]:e.length>1?YS(e.slice(1),e[0]):[]}function ZS(e){let t=[];for(let n of e)t.push(...n);return t}function QS(e){return F({[I]:`Any`},e)}function $S(e,t){return F({[I]:`Array`,type:`array`,items:e},t)}function eC(e){return F({[I]:`Argument`,index:e})}function tC(e,t){return F({[I]:`AsyncIterator`,type:`AsyncIterator`,items:e},t)}function nC(e,t,n){return F({[I]:`Computed`,target:e,parameters:t},n)}function rC(e,t){let{[t]:n,...r}=e;return r}function iC(e,t){return t.reduce((e,t)=>rC(e,t),e)}function aC(e){return F({[I]:`Never`,not:{}},e)}function oC(e){return F({[I]:`MappedResult`,properties:e})}function sC(e,t,n){return F({[I]:`Constructor`,type:`Constructor`,parameters:e,returns:t},n)}function cC(e,t,n){return F({[I]:`Function`,type:`Function`,parameters:e,returns:t},n)}function lC(e,t){return F({[I]:`Union`,anyOf:e},t)}function uC(e){return e.some(e=>Vb(e))}function dC(e){return e.map(e=>Vb(e)?fC(e):e)}function fC(e){return iC(e,[Rb])}function pC(e,t){return uC(e)?$w(lC(dC(e),t)):lC(dC(e),t)}function mC(e,t){return e.length===1?F(e[0],t):e.length===0?aC(t):pC(e,t)}function hC(e,t){return e.length===0?aC(t):e.length===1?F(e[0],t):lC(e,t)}var gC=class extends Fb{};function _C(e){return e.replace(/\\\$/g,`$`).replace(/\\\*/g,`*`).replace(/\\\^/g,`^`).replace(/\\\|/g,`|`).replace(/\\\(/g,`(`).replace(/\\\)/g,`)`)}function vC(e,t,n){return e[t]===n&&e.charCodeAt(t-1)!==92}function yC(e,t){return vC(e,t,`(`)}function bC(e,t){return vC(e,t,`)`)}function xC(e,t){return vC(e,t,`|`)}function SC(e){if(!(yC(e,0)&&bC(e,e.length-1)))return!1;let t=0;for(let n=0;n<e.length;n++)if(yC(e,n)&&(t+=1),bC(e,n)&&--t,t===0&&n!==e.length-1)return!1;return!0}function CC(e){return e.slice(1,e.length-1)}function wC(e){let t=0;for(let n=0;n<e.length;n++)if(yC(e,n)&&(t+=1),bC(e,n)&&--t,xC(e,n)&&t===0)return!0;return!1}function TC(e){for(let t=0;t<e.length;t++)if(yC(e,t))return!0;return!1}function EC(e){let[t,n]=[0,0],r=[];for(let i=0;i<e.length;i++)if(yC(e,i)&&(t+=1),bC(e,i)&&--t,xC(e,i)&&t===0){let t=e.slice(n,i);t.length>0&&r.push(OC(t)),n=i+1}let i=e.slice(n);return i.length>0&&r.push(OC(i)),r.length===0?{type:`const`,const:``}:r.length===1?r[0]:{type:`or`,expr:r}}function DC(e){function t(e,t){if(!yC(e,t))throw new gC(`TemplateLiteralParser: Index must point to open parens`);let n=0;for(let r=t;r<e.length;r++)if(yC(e,r)&&(n+=1),bC(e,r)&&--n,n===0)return[t,r];throw new gC(`TemplateLiteralParser: Unclosed group parens in expression`)}function n(e,t){for(let n=t;n<e.length;n++)if(yC(e,n))return[t,n];return[t,e.length]}let r=[];for(let i=0;i<e.length;i++)if(yC(e,i)){let[n,a]=t(e,i),o=e.slice(n,a+1);r.push(OC(o)),i=a}else{let[t,a]=n(e,i),o=e.slice(t,a);o.length>0&&r.push(OC(o)),i=a-1}return r.length===0?{type:`const`,const:``}:r.length===1?r[0]:{type:`and`,expr:r}}function OC(e){return SC(e)?OC(CC(e)):wC(e)?EC(e):TC(e)?DC(e):{type:`const`,const:_C(e)}}function kC(e){return OC(e.slice(1,e.length-1))}var AC=class extends Fb{};function jC(e){return e.type===`or`&&e.expr.length===2&&e.expr[0].type===`const`&&e.expr[0].const===`0`&&e.expr[1].type===`const`&&e.expr[1].const===`[1-9][0-9]*`}function MC(e){return e.type===`or`&&e.expr.length===2&&e.expr[0].type===`const`&&e.expr[0].const===`true`&&e.expr[1].type===`const`&&e.expr[1].const===`false`}function NC(e){return e.type===`const`&&e.const===`.*`}function PC(e){return jC(e)||NC(e)?!1:MC(e)?!0:e.type===`and`||e.type===`or`?e.expr.every(e=>PC(e)):e.type===`const`||(()=>{throw new AC(`Unknown expression type`)})()}function FC(e){return PC(kC(e.pattern))}var IC=class extends Fb{};function*LC(e){if(e.length===1)return yield*e[0];for(let t of e[0])for(let n of LC(e.slice(1)))yield`${t}${n}`}function*RC(e){return yield*LC(e.expr.map(e=>[...VC(e)]))}function*zC(e){for(let t of e.expr)yield*VC(t)}function*BC(e){return yield e.const}function*VC(e){return e.type===`and`?yield*RC(e):e.type===`or`?yield*zC(e):e.type===`const`?yield*BC(e):(()=>{throw new IC(`Unknown expression`)})()}function HC(e){let t=kC(e.pattern);return PC(t)?[...VC(t)]:[]}function UC(e,t){return F({[I]:`Literal`,const:e,type:typeof e},t)}function WC(e){return F({[I]:`Boolean`,type:`boolean`},e)}function GC(e){return F({[I]:`BigInt`,type:`bigint`},e)}function KC(e){return F({[I]:`Number`,type:`number`},e)}function qC(e){return F({[I]:`String`,type:`string`},e)}function*JC(e){let t=e.trim().replace(/"|'/g,``);return t===`boolean`?yield WC():t===`number`?yield KC():t===`bigint`?yield GC():t===`string`?yield qC():yield(()=>{let e=t.split(`|`).map(e=>UC(e.trim()));return e.length===0?aC():e.length===1?e[0]:mC(e)})()}function*YC(e){if(e[1]!==`{`)return yield*[UC(`$`),...XC(e.slice(1))];for(let t=2;t<e.length;t++)if(e[t]===`}`){let n=JC(e.slice(2,t)),r=XC(e.slice(t+1));return yield*[...n,...r]}yield UC(e)}function*XC(e){for(let t=0;t<e.length;t++)if(e[t]===`$`)return yield*[UC(e.slice(0,t)),...YC(e.slice(t))];yield UC(e)}function ZC(e){return[...XC(e)]}var QC=class extends Fb{};function $C(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function ew(e,t){return _x(e)?e.pattern.slice(1,e.pattern.length-1):Sx(e)?`(${e.anyOf.map(e=>ew(e,t)).join(`|`)})`:lx(e)||Qb(e)||Kb(e)?`${t}${NS}`:hx(e)?`${t}${PS}`:rx(e)?`${t}${$C(e.const.toString())}`:qb(e)?`${t}${MS}`:(()=>{throw new QC(`Unexpected Kind '${e[I]}'`)})()}function tw(e){return`^${e.map(e=>ew(e,``)).join(``)}$`}function nw(e){return mC(HC(e).map(e=>UC(e)))}function rw(e,t){let n=Qy(e)?tw(ZC(e)):tw(e);return F({[I]:`TemplateLiteral`,type:`string`,pattern:n},t)}function iw(e){return HC(e).map(e=>e.toString())}function aw(e){let t=[];for(let n of e)t.push(...sw(n));return t}function ow(e){return[e.toString()]}function sw(e){return[...new Set(_x(e)?iw(e):Sx(e)?aw(e.anyOf):rx(e)?ow(e.const):lx(e)||Qb(e)?[`[number]`]:[])]}function cw(e,t,n){let r={};for(let i of Object.getOwnPropertyNames(t))r[i]=Sw(e,sw(t[i]),n);return r}function lw(e,t,n){return cw(e,t.properties,n)}function uw(e,t,n){return oC(lw(e,t,n))}function dw(e,t){return e.map(e=>yw(e,t))}function fw(e){return e.filter(e=>!ox(e))}function pw(e,t){return cT(fw(dw(e,t)))}function mw(e){return e.some(e=>ox(e))?[]:e}function hw(e,t){return mC(mw(dw(e,t)))}function gw(e,t){return t in e?e[t]:t===`[number]`?mC(e):aC()}function _w(e,t){return t===`[number]`?e:aC()}function vw(e,t){return t in e?e[t]:aC()}function yw(e,t){return $b(e)?pw(e.allOf,t):Sx(e)?hw(e.anyOf,t):bx(e)?gw(e.items??[],t):Wb(e)?_w(e.items,t):ux(e)?vw(e.properties,t):aC()}function bw(e,t){return t.map(t=>yw(e,t))}function xw(e,t){return mC(bw(e,t))}function Sw(e,t,n){if(px(e)||px(t)){if(!Ox(e)||!Ox(t))throw new Fb(`Index types using Ref parameters require both Type and Key to be of TSchema`);return nC(`Index`,[e,t])}return ax(t)?uw(e,t,n):ix(t)?Ew(e,t,n):F(Ox(t)?xw(e,sw(t)):xw(e,t),n)}function Cw(e,t,n){return{[t]:Sw(e,[t],cb(n))}}function ww(e,t,n){return t.reduce((t,r)=>({...t,...Cw(e,r,n)}),{})}function Tw(e,t,n){return ww(e,t.keys,n)}function Ew(e,t,n){return oC(Tw(e,t,n))}function Dw(e,t){return F({[I]:`Iterator`,type:`Iterator`,items:e},t)}function Ow(e){return globalThis.Object.keys(e).filter(t=>!Vb(e[t]))}function kw(e,t){let n=Ow(e);return F(n.length>0?{[I]:`Object`,type:`object`,required:n,properties:e}:{[I]:`Object`,type:`object`,properties:e},t)}var Aw=kw;function jw(e,t){return F({[I]:`Promise`,type:`Promise`,item:e},t)}function Mw(e){return F(iC(e,[Lb]))}function Nw(e){return F({...e,[Lb]:`Readonly`})}function Pw(e,t){return t===!1?Mw(e):Nw(e)}function Fw(e,t){let n=t??!0;return ax(e)?Rw(e,n):Pw(e,n)}function Iw(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=Fw(e[r],t);return n}function Lw(e,t){return Iw(e.properties,t)}function Rw(e,t){return oC(Lw(e,t))}function zw(e,t){return F(e.length>0?{[I]:`Tuple`,type:`array`,items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[I]:`Tuple`,type:`array`,minItems:e.length,maxItems:e.length},t)}function Bw(e,t){return e in t?qw(e,t[e]):oC(t)}function Vw(e){return{[e]:UC(e)}}function Hw(e){let t={};for(let n of e)t[n]=UC(n);return t}function Uw(e,t){return KS(t,e)?Vw(e):Hw(t)}function Ww(e,t){return Bw(e,Uw(e,t))}function Gw(e,t){return t.map(t=>qw(e,t))}function Kw(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(t))n[r]=qw(e,t[r]);return n}function qw(e,t){let n={...t};return Vb(t)?$w(qw(e,iC(t,[Rb]))):Bb(t)?Fw(qw(e,iC(t,[Lb]))):ax(t)?Bw(e,t.properties):ix(t)?Ww(e,t.keys):Yb(t)?sC(Gw(e,t.parameters),qw(e,t.returns),n):Zb(t)?cC(Gw(e,t.parameters),qw(e,t.returns),n):Gb(t)?tC(qw(e,t.items),n):ex(t)?Dw(qw(e,t.items),n):$b(t)?lT(Gw(e,t.allOf),n):Sx(t)?hC(Gw(e,t.anyOf),n):bx(t)?zw(Gw(e,t.items??[]),n):ux(t)?Aw(Kw(e,t.properties),n):Wb(t)?$S(qw(e,t.items),n):dx(t)?jw(qw(e,t.item),n):t}function Jw(e,t){let n={};for(let r of e)n[r]=qw(r,t);return n}function Yw(e,t,n){let r=Ox(e)?sw(e):e;return Aw(Jw(r,t({[I]:`MappedKey`,keys:r})),n)}function Xw(e){return F(iC(e,[Rb]))}function Zw(e){return F({...e,[Rb]:`Optional`})}function Qw(e,t){return t===!1?Xw(e):Zw(e)}function $w(e,t){let n=t??!0;return ax(e)?nT(e,n):Qw(e,n)}function eT(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=$w(e[r],t);return n}function tT(e,t){return eT(e.properties,t)}function nT(e,t){return oC(tT(e,t))}function rT(e,t={}){let n=e.every(e=>ux(e)),r=Ox(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return F(t.unevaluatedProperties===!1||Ox(t.unevaluatedProperties)||n?{...r,[I]:`Intersect`,type:`object`,allOf:e}:{...r,[I]:`Intersect`,allOf:e},t)}function iT(e){return e.every(e=>Vb(e))}function aT(e){return iC(e,[Rb])}function oT(e){return e.map(e=>Vb(e)?aT(e):e)}function sT(e,t){return iT(e)?$w(rT(oT(e),t)):rT(oT(e),t)}function cT(e,t={}){if(e.length===1)return F(e[0],t);if(e.length===0)return aC(t);if(e.some(e=>yx(e)))throw Error(`Cannot intersect transform types`);return sT(e,t)}function lT(e,t){if(e.length===1)return F(e[0],t);if(e.length===0)return aC(t);if(e.some(e=>yx(e)))throw Error(`Cannot intersect transform types`);return rT(e,t)}function uT(...e){let[t,n]=typeof e[0]==`string`?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!=`string`)throw new Fb(`Ref: $ref must be a string`);return F({[I]:`Ref`,$ref:t},n)}function dT(e,t){return nC(`Awaited`,[nC(e,t)])}function fT(e){return nC(`Awaited`,[uT(e)])}function pT(e){return lT(gT(e))}function mT(e){return hC(gT(e))}function hT(e){return _T(e)}function gT(e){return e.map(e=>_T(e))}function _T(e,t){return F(Jb(e)?dT(e.target,e.parameters):$b(e)?pT(e.allOf):Sx(e)?mT(e.anyOf):dx(e)?hT(e.item):px(e)?fT(e.$ref):e,t)}function vT(e){let t=[];for(let n of e)t.push(TT(n));return t}function yT(e){return ZS(vT(e))}function bT(e){return XS(vT(e))}function xT(e){return e.map((e,t)=>t.toString())}function ST(e){return[`[number]`]}function CT(e){return globalThis.Object.getOwnPropertyNames(e)}function wT(e){return ET?globalThis.Object.getOwnPropertyNames(e).map(e=>e[0]===`^`&&e[e.length-1]===`$`?e.slice(1,e.length-1):e):[]}function TT(e){return $b(e)?yT(e.allOf):Sx(e)?bT(e.anyOf):bx(e)?xT(e.items??[]):Wb(e)?ST(e.items):ux(e)?CT(e.properties):fx(e)?wT(e.patternProperties):[]}var ET=!1;function DT(e){ET=!0;let t=TT(e);return ET=!1,`^(${t.map(e=>`(${e})`).join(`|`)})$`}function OT(e,t){return nC(`KeyOf`,[nC(e,t)])}function kT(e){return nC(`KeyOf`,[uT(e)])}function AT(e,t){return F(mC(jT(TT(e))),t)}function jT(e){return e.map(e=>e===`[number]`?KC():UC(e))}function MT(e,t){return Jb(e)?OT(e.target,e.parameters):px(e)?kT(e.$ref):ax(e)?FT(e,t):AT(e,t)}function NT(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=MT(e[r],cb(t));return n}function PT(e,t){return NT(e.properties,t)}function FT(e,t){return oC(PT(e,t))}function IT(e){let t=TT(e),n=bw(e,t);return t.map((e,r)=>[t[r],n[r]])}function LT(e){let t=[];for(let n of e)t.push(...TT(n));return qS(t)}function RT(e){return e.filter(e=>!ox(e))}function zT(e,t){let n=[];for(let r of e)n.push(...bw(r,[t]));return RT(n)}function BT(e,t){let n={};for(let r of t)n[r]=cT(zT(e,r));return n}function VT(e,t){return Aw(BT(e,LT(e)),t)}function HT(e){return F({[I]:`Date`,type:`Date`},e)}function UT(e){return F({[I]:`Null`,type:`null`},e)}function WT(e){return F({[I]:`Symbol`,type:`symbol`},e)}function GT(e){return F({[I]:`Undefined`,type:`undefined`},e)}function KT(e){return F({[I]:`Uint8Array`,type:`Uint8Array`},e)}function qT(e){return F({[I]:`Unknown`},e)}function JT(e){return e.map(e=>ZT(e,!1))}function YT(e){let t={};for(let n of globalThis.Object.getOwnPropertyNames(e))t[n]=Fw(ZT(e[n],!1));return t}function XT(e,t){return t===!0?e:Fw(e)}function ZT(e,t){return Vy(e)||qy(e)?XT(QS(),t):Hy(e)?Fw(zw(JT(e))):eb(e)?KT():Gy(e)?HT():Xy(e)?XT(Aw(YT(e)),t):Ky(e)?XT(cC([],qT()),t):tb(e)?GT():Jy(e)?UT():$y(e)?WT():Uy(e)?GC():Yy(e)||Wy(e)||Qy(e)?UC(e):Aw({})}function QT(e,t){return F(ZT(e,!0),t)}function $T(e,t){return Yb(e)?zw(e.parameters,t):aC(t)}function eE(e,t){if(tb(e))throw Error(`Enum undefined or empty`);let n=globalThis.Object.getOwnPropertyNames(e).filter(e=>isNaN(e)).map(t=>e[t]);return hC([...new Set(n)].map(e=>UC(e)),{...t,[zb]:`Enum`})}var tE=class extends Fb{},L;(function(e){e[e.Union=0]=`Union`,e[e.True=1]=`True`,e[e.False=2]=`False`})(L||={});function nE(e){return e===L.False?e:L.True}function rE(e){throw new tE(e)}function iE(e){return lS(e)||$x(e)||TS(e)||DS(e)||Vx(e)}function aE(e,t){return lS(t)?CE(e,t):$x(t)?yE(e,t):TS(t)?oD(e,t):DS(t)?cD(e,t):Vx(t)?oE(e,t):rE(`StructuralRight`)}function oE(e,t){return L.True}function sE(e,t){return $x(t)?yE(e,t):TS(t)&&t.anyOf.some(e=>Vx(e)||DS(e))?L.True:TS(t)?L.Union:DS(t)||Vx(t)?L.True:L.Union}function cE(e,t){return DS(e)?L.False:Vx(e)?L.Union:lS(e)?L.True:L.False}function lE(e,t){return pS(t)&&BE(t)?L.True:iE(t)?aE(e,t):Ux(t)?nE(fD(e.items,t.items)):L.False}function uE(e,t){return iE(t)?aE(e,t):Wx(t)?nE(fD(e.items,t.items)):L.False}function dE(e,t){return iE(t)?aE(e,t):pS(t)?UE(e,t):hS(t)?JE(e,t):Gx(t)?L.True:L.False}function fE(e,t){return iS(e)||Kx(e)?L.True:L.False}function pE(e,t){return iE(t)?aE(e,t):pS(t)?UE(e,t):hS(t)?JE(e,t):Kx(t)?L.True:L.False}function mE(e,t){return iE(t)?aE(e,t):pS(t)?UE(e,t):Jx(t)?e.parameters.length>t.parameters.length?L.False:e.parameters.every((e,n)=>nE(fD(t.parameters[n],e))===L.True)?nE(fD(e.returns,t.returns)):L.False:L.False}function hE(e,t){return iE(t)?aE(e,t):pS(t)?UE(e,t):hS(t)?JE(e,t):Yx(t)?L.True:L.False}function gE(e,t){return iE(t)?aE(e,t):pS(t)?UE(e,t):Xx(t)?e.parameters.length>t.parameters.length?L.False:e.parameters.every((e,n)=>nE(fD(t.parameters[n],e))===L.True)?nE(fD(e.returns,t.returns)):L.False:L.False}function _E(e,t){return aS(e)&&Yy(e.const)||fS(e)||Zx(e)?L.True:L.False}function vE(e,t){return Zx(t)||fS(t)?L.True:iE(t)?aE(e,t):pS(t)?UE(e,t):hS(t)?JE(e,t):L.False}function yE(e,t){return t.allOf.every(t=>fD(e,t)===L.True)?L.True:L.False}function bE(e,t){return e.allOf.some(e=>fD(e,t)===L.True)?L.True:L.False}function xE(e,t){return iE(t)?aE(e,t):eS(t)?nE(fD(e.items,t.items)):L.False}function SE(e,t){return aS(t)&&t.const===e.const?L.True:iE(t)?aE(e,t):pS(t)?UE(e,t):hS(t)?JE(e,t):vS(t)?ZE(e,t):fS(t)?OE(e,t):Zx(t)?_E(e,t):Kx(t)?fE(e,t):L.False}function CE(e,t){return L.False}function wE(e,t){return L.True}function TE(e){let[t,n]=[e,0];for(;uS(t);)t=t.not,n+=1;return n%2==0?t:qT()}function EE(e,t){return uS(e)?fD(TE(e),t):uS(t)?fD(e,TE(t)):rE(`Invalid fallthrough for Not`)}function DE(e,t){return iE(t)?aE(e,t):pS(t)?UE(e,t):hS(t)?JE(e,t):dS(t)?L.True:L.False}function OE(e,t){return rS(e)||fS(e)||Zx(e)?L.True:L.False}function kE(e,t){return iE(t)?aE(e,t):pS(t)?UE(e,t):hS(t)?JE(e,t):Zx(t)||fS(t)?L.True:L.False}function AE(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function jE(e){return BE(e)}function ME(e){return AE(e,0)||AE(e,1)&&`description`in e.properties&&TS(e.properties.description)&&e.properties.description.anyOf.length===2&&(vS(e.properties.description.anyOf[0])&&wS(e.properties.description.anyOf[1])||vS(e.properties.description.anyOf[1])&&wS(e.properties.description.anyOf[0]))}function NE(e){return AE(e,0)}function PE(e){return AE(e,0)}function FE(e){return AE(e,0)}function IE(e){return AE(e,0)}function LE(e){return BE(e)}function RE(e){let t=KC();return AE(e,0)||AE(e,1)&&`length`in e.properties&&nE(fD(e.properties.length,t))===L.True}function zE(e){return AE(e,0)}function BE(e){let t=KC();return AE(e,0)||AE(e,1)&&`length`in e.properties&&nE(fD(e.properties.length,t))===L.True}function VE(e){let t=cC([QS()],QS());return AE(e,0)||AE(e,1)&&`then`in e.properties&&nE(fD(e.properties.then,t))===L.True}function HE(e,t){return fD(e,t)===L.False||Bx(e)&&!Bx(t)?L.False:L.True}function UE(e,t){return DS(e)?L.False:Vx(e)?L.Union:lS(e)||nS(e)&&jE(t)||rS(e)&&NE(t)||iS(e)&&PE(t)||yS(e)&&ME(t)||Gx(e)&&FE(t)||vS(e)&&jE(t)||yS(e)&&ME(t)||fS(e)&&NE(t)||Zx(e)&&NE(t)||Kx(e)&&PE(t)||ES(e)&&LE(t)||Yx(e)&&IE(t)||Jx(e)&&zE(t)||Xx(e)&&RE(t)?L.True:hS(e)&&vS(KE(e))?t[zb]===`Record`?L.True:L.False:hS(e)&&fS(KE(e))&&AE(t,0)?L.True:L.False}function WE(e,t){return iE(t)?aE(e,t):hS(t)?JE(e,t):pS(t)?(()=>{for(let n of Object.getOwnPropertyNames(t.properties)){if(!(n in e.properties)&&!Bx(t.properties[n]))return L.False;if(Bx(t.properties[n]))return L.True;if(HE(e.properties[n],t.properties[n])===L.False)return L.False}return L.True})():L.False}function GE(e,t){return iE(t)?aE(e,t):pS(t)&&VE(t)?L.True:mS(t)?nE(fD(e.item,t.item)):L.False}function KE(e){return`^(0|[1-9][0-9]*)$`in e.patternProperties?KC():`^(.*)$`in e.patternProperties?qC():rE(`Unknown record key pattern`)}function qE(e){return`^(0|[1-9][0-9]*)$`in e.patternProperties?e.patternProperties[IS]:`^(.*)$`in e.patternProperties?e.patternProperties[LS]:rE(`Unable to get record value schema`)}function JE(e,t){let[n,r]=[KE(t),qE(t)];return nS(e)&&fS(n)&&nE(fD(e,r))===L.True?L.True:ES(e)&&fS(n)||vS(e)&&fS(n)||Ux(e)&&fS(n)?fD(e,r):pS(e)?(()=>{for(let t of Object.getOwnPropertyNames(e.properties))if(HE(r,e.properties[t])===L.False)return L.False;return L.True})():L.False}function YE(e,t){return iE(t)?aE(e,t):pS(t)?UE(e,t):hS(t)?fD(qE(e),qE(t)):L.False}function XE(e,t){return fD(_S(e)?qC():e,_S(t)?qC():t)}function ZE(e,t){return aS(e)&&Qy(e.const)||vS(e)?L.True:L.False}function QE(e,t){return iE(t)?aE(e,t):pS(t)?UE(e,t):hS(t)?JE(e,t):vS(t)?L.True:L.False}function $E(e,t){return iE(t)?aE(e,t):pS(t)?UE(e,t):hS(t)?JE(e,t):yS(t)?L.True:L.False}function eD(e,t){return bS(e)?fD(nw(e),t):bS(t)?fD(e,nw(t)):rE(`Invalid fallthrough for TemplateLiteral`)}function tD(e,t){return Ux(t)&&e.items!==void 0&&e.items.every(e=>fD(e,t.items)===L.True)}function nD(e,t){return lS(e)?L.True:DS(e)?L.False:Vx(e)?L.Union:L.False}function rD(e,t){return iE(t)?aE(e,t):pS(t)&&BE(t)||Ux(t)&&tD(e,t)?L.True:CS(t)?tb(e.items)&&!tb(t.items)||!tb(e.items)&&tb(t.items)?L.False:tb(e.items)&&!tb(t.items)||e.items.every((e,n)=>fD(e,t.items[n])===L.True)?L.True:L.False:L.False}function iD(e,t){return iE(t)?aE(e,t):pS(t)?UE(e,t):hS(t)?JE(e,t):ES(t)?L.True:L.False}function aD(e,t){return iE(t)?aE(e,t):pS(t)?UE(e,t):hS(t)?JE(e,t):kS(t)?uD(e,t):wS(t)?L.True:L.False}function oD(e,t){return t.anyOf.some(t=>fD(e,t)===L.True)?L.True:L.False}function sD(e,t){return e.anyOf.every(e=>fD(e,t)===L.True)?L.True:L.False}function cD(e,t){return L.True}function lD(e,t){return lS(t)?CE(e,t):$x(t)?yE(e,t):TS(t)?oD(e,t):Vx(t)?oE(e,t):vS(t)?ZE(e,t):fS(t)?OE(e,t):Zx(t)?_E(e,t):Kx(t)?fE(e,t):Ux(t)?cE(e,t):CS(t)?nD(e,t):pS(t)?UE(e,t):DS(t)?L.True:L.False}function uD(e,t){return wS(e)||wS(e)?L.True:L.False}function dD(e,t){return $x(t)?yE(e,t):TS(t)?oD(e,t):DS(t)?cD(e,t):Vx(t)?oE(e,t):pS(t)?UE(e,t):kS(t)?L.True:L.False}function fD(e,t){return bS(e)||bS(t)?eD(e,t):_S(e)||_S(t)?XE(e,t):uS(e)||uS(t)?EE(e,t):Vx(e)?sE(e,t):Ux(e)?lE(e,t):Gx(e)?dE(e,t):Kx(e)?pE(e,t):Wx(e)?uE(e,t):Jx(e)?mE(e,t):Yx(e)?hE(e,t):Xx(e)?gE(e,t):Zx(e)?vE(e,t):$x(e)?bE(e,t):eS(e)?xE(e,t):aS(e)?SE(e,t):lS(e)?wE(e,t):dS(e)?DE(e,t):fS(e)?kE(e,t):pS(e)?WE(e,t):hS(e)?YE(e,t):vS(e)?QE(e,t):yS(e)?$E(e,t):CS(e)?rD(e,t):mS(e)?GE(e,t):ES(e)?iD(e,t):wS(e)?aD(e,t):TS(e)?sD(e,t):DS(e)?lD(e,t):kS(e)?dD(e,t):rE(`Unknown left type operand '${e[I]}'`)}function pD(e,t){return fD(e,t)}function mD(e,t,n,r,i){let a={};for(let o of globalThis.Object.getOwnPropertyNames(e))a[o]=vD(e[o],t,n,r,cb(i));return a}function hD(e,t,n,r,i){return mD(e.properties,t,n,r,i)}function gD(e,t,n,r,i){return oC(hD(e,t,n,r,i))}function _D(e,t,n,r){let i=pD(e,t);return i===L.Union?hC([n,r]):i===L.True?n:r}function vD(e,t,n,r,i){return ax(e)?gD(e,t,n,r,i):ix(e)?F(SD(e,t,n,r,i)):F(_D(e,t,n,r),i)}function yD(e,t,n,r,i){return{[e]:vD(UC(e),t,n,r,cb(i))}}function bD(e,t,n,r,i){return e.reduce((e,a)=>({...e,...yD(a,t,n,r,i)}),{})}function xD(e,t,n,r,i){return bD(e.keys,t,n,r,i)}function SD(e,t,n,r,i){return oC(xD(e,t,n,r,i))}function CD(e){return e.allOf.every(e=>ED(e))}function wD(e){return e.anyOf.some(e=>ED(e))}function TD(e){return!ED(e.not)}function ED(e){return e[I]===`Intersect`?CD(e):e[I]===`Union`?wD(e):e[I]===`Not`?TD(e):e[I]===`Undefined`}function DD(e,t){return kD(nw(e),t)}function OD(e,t){let n=e.filter(e=>pD(e,t)===L.False);return n.length===1?n[0]:hC(n)}function kD(e,t,n={}){return _x(e)?F(DD(e,t),n):ax(e)?F(MD(e,t),n):F(Sx(e)?OD(e.anyOf,t):pD(e,t)===L.False?e:aC(),n)}function AD(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=kD(e[r],t);return n}function jD(e,t){return AD(e.properties,t)}function MD(e,t){return oC(jD(e,t))}function ND(e,t){return FD(nw(e),t)}function PD(e,t){let n=e.filter(e=>pD(e,t)!==L.False);return n.length===1?n[0]:hC(n)}function FD(e,t,n){return _x(e)?F(ND(e,t),n):ax(e)?F(RD(e,t),n):F(Sx(e)?PD(e.anyOf,t):pD(e,t)===L.False?aC():e,n)}function ID(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=FD(e[r],t);return n}function LD(e,t){return ID(e.properties,t)}function RD(e,t){return oC(LD(e,t))}function zD(e,t){return Yb(e)?F(e.returns,t):aC(t)}function BD(e){return Fw($w(e))}function VD(e,t,n){return F({[I]:`Record`,type:`object`,patternProperties:{[e]:t}},n)}function HD(e,t,n){let r={};for(let n of e)r[n]=t;return Aw(r,{...n,[zb]:`Record`})}function UD(e,t,n){return FC(e)?HD(sw(e),t,n):VD(e.pattern,t,n)}function WD(e,t,n){return HD(sw(hC(e)),t,n)}function GD(e,t,n){return HD([e.toString()],t,n)}function KD(e,t,n){return VD(e.source,t,n)}function qD(e,t,n){return VD(tb(e.pattern)?LS:e.pattern,t,n)}function JD(e,t,n){return VD(LS,t,n)}function YD(e,t,n){return VD(RS,t,n)}function XD(e,t,n){return Aw({true:t,false:t},n)}function ZD(e,t,n){return VD(IS,t,n)}function QD(e,t,n){return VD(IS,t,n)}function $D(e,t,n={}){return Sx(e)?WD(e.anyOf,t,n):_x(e)?UD(e,t,n):rx(e)?GD(e.const,t,n):qb(e)?XD(e,t,n):Qb(e)?ZD(e,t,n):lx(e)?QD(e,t,n):mx(e)?KD(e,t,n):hx(e)?qD(e,t,n):Hb(e)?JD(e,t,n):ox(e)?YD(e,t,n):aC(n)}function eO(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function tO(e){let t=eO(e);return t===`^(.*)$`?qC():t===`^(0|[1-9][0-9]*)$`?KC():qC({pattern:t})}function nO(e){return e.patternProperties[eO(e)]}function rO(e,t){return t.parameters=_O(e,t.parameters),t.returns=vO(e,t.returns),t}function iO(e,t){return t.parameters=_O(e,t.parameters),t.returns=vO(e,t.returns),t}function aO(e,t){return t.allOf=_O(e,t.allOf),t}function oO(e,t){return t.anyOf=_O(e,t.anyOf),t}function sO(e,t){return tb(t.items)||(t.items=_O(e,t.items)),t}function cO(e,t){return t.items=vO(e,t.items),t}function lO(e,t){return t.items=vO(e,t.items),t}function uO(e,t){return t.items=vO(e,t.items),t}function dO(e,t){return t.item=vO(e,t.item),t}function fO(e,t){let n=gO(e,t.properties);return{...t,...Aw(n)}}function pO(e,t){let n=$D(vO(e,tO(t)),vO(e,nO(t)));return{...t,...n}}function mO(e,t){return t.index in e?e[t.index]:qT()}function hO(e,t){let n=Bb(t),r=Vb(t),i=vO(e,t);return n&&r?BD(i):n&&!r?Fw(i):!n&&r?$w(i):i}function gO(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((n,r)=>({...n,[r]:hO(e,t[r])}),{})}function _O(e,t){return t.map(t=>vO(e,t))}function vO(e,t){return Yb(t)?rO(e,t):Zb(t)?iO(e,t):$b(t)?aO(e,t):Sx(t)?oO(e,t):bx(t)?sO(e,t):Wb(t)?cO(e,t):Gb(t)?lO(e,t):ex(t)?uO(e,t):dx(t)?dO(e,t):ux(t)?fO(e,t):fx(t)?pO(e,t):Ub(t)?mO(e,t):t}function yO(e,t){return vO(t,lb(e))}function bO(e){return F({[I]:`Integer`,type:`integer`},e)}function xO(e,t,n){return{[e]:MO(UC(e),t,cb(n))}}function SO(e,t,n){return e.reduce((e,r)=>({...e,...xO(r,t,n)}),{})}function CO(e,t,n){return SO(e.keys,t,n)}function wO(e,t,n){return oC(CO(e,t,n))}function TO(e){let[t,n]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),n].join(``)}function EO(e){let[t,n]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),n].join(``)}function DO(e){return e.toUpperCase()}function OO(e){return e.toLowerCase()}function kO(e,t,n){let r=kC(e.pattern);return PC(r)?rw([hC(jO([...VC(r)].map(e=>UC(e)),t))],n):{...e,pattern:AO(e.pattern,t)}}function AO(e,t){return typeof e==`string`?t===`Uncapitalize`?TO(e):t===`Capitalize`?EO(e):t===`Uppercase`?DO(e):t===`Lowercase`?OO(e):e:e.toString()}function jO(e,t){return e.map(e=>MO(e,t))}function MO(e,t,n={}){return ix(e)?wO(e,t,n):_x(e)?kO(e,t,n):Sx(e)?hC(jO(e.anyOf,t),n):rx(e)?UC(AO(e.const,t),n):F(e,n)}function NO(e,t={}){return MO(e,`Capitalize`,t)}function PO(e,t={}){return MO(e,`Lowercase`,t)}function FO(e,t={}){return MO(e,`Uncapitalize`,t)}function IO(e,t={}){return MO(e,`Uppercase`,t)}function LO(e,t,n){let r={};for(let i of globalThis.Object.getOwnPropertyNames(e))r[i]=qO(e[i],t,cb(n));return r}function RO(e,t,n){return LO(e.properties,t,n)}function zO(e,t,n){return oC(RO(e,t,n))}function BO(e,t){return e.map(e=>KO(e,t))}function VO(e,t){return e.map(e=>KO(e,t))}function HO(e,t){let{[t]:n,...r}=e;return r}function UO(e,t){return t.reduce((e,t)=>HO(e,t),e)}function WO(e,t,n){let r=iC(e,[Ib,`$id`,`required`,`properties`]);return Aw(UO(n,t),r)}function GO(e){return hC(e.reduce((e,t)=>nx(t)?[...e,UC(t)]:e,[]))}function KO(e,t){return $b(e)?lT(BO(e.allOf,t)):Sx(e)?hC(VO(e.anyOf,t)):ux(e)?WO(e,t,e.properties):Aw({})}function qO(e,t,n){let r=Hy(t)?GO(t):t,i=Ox(t)?sw(t):t,a=px(e),o=px(t);return ax(e)?zO(e,i,n):ix(t)?ZO(e,t,n):a&&o||!a&&o||a&&!o?nC(`Omit`,[e,r],n):F({...KO(e,i),...n})}function JO(e,t,n){return{[t]:qO(e,[t],cb(n))}}function YO(e,t,n){return t.reduce((t,r)=>({...t,...JO(e,r,n)}),{})}function XO(e,t,n){return YO(e,t.keys,n)}function ZO(e,t,n){return oC(XO(e,t,n))}function QO(e,t,n){let r={};for(let i of globalThis.Object.getOwnPropertyNames(e))r[i]=sk(e[i],t,cb(n));return r}function $O(e,t,n){return QO(e.properties,t,n)}function ek(e,t,n){return oC($O(e,t,n))}function tk(e,t){return e.map(e=>ok(e,t))}function nk(e,t){return e.map(e=>ok(e,t))}function rk(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function ik(e,t,n){let r=iC(e,[Ib,`$id`,`required`,`properties`]);return Aw(rk(n,t),r)}function ak(e){return hC(e.reduce((e,t)=>nx(t)?[...e,UC(t)]:e,[]))}function ok(e,t){return $b(e)?lT(tk(e.allOf,t)):Sx(e)?hC(nk(e.anyOf,t)):ux(e)?ik(e,t,e.properties):Aw({})}function sk(e,t,n){let r=Hy(t)?ak(t):t,i=Ox(t)?sw(t):t,a=px(e),o=px(t);return ax(e)?ek(e,i,n):ix(t)?dk(e,t,n):a&&o||!a&&o||a&&!o?nC(`Pick`,[e,r],n):F({...ok(e,i),...n})}function ck(e,t,n){return{[t]:sk(e,[t],cb(n))}}function lk(e,t,n){return t.reduce((t,r)=>({...t,...ck(e,r,n)}),{})}function uk(e,t,n){return lk(e,t.keys,n)}function dk(e,t,n){return oC(uk(e,t,n))}function fk(e,t){return nC(`Partial`,[nC(e,t)])}function pk(e){return nC(`Partial`,[uT(e)])}function mk(e){let t={};for(let n of globalThis.Object.getOwnPropertyNames(e))t[n]=$w(e[n]);return t}function hk(e,t){let n=iC(e,[Ib,`$id`,`required`,`properties`]);return Aw(mk(t),n)}function gk(e){return e.map(e=>_k(e))}function _k(e){return Jb(e)?fk(e.target,e.parameters):px(e)?pk(e.$ref):$b(e)?lT(gk(e.allOf)):Sx(e)?hC(gk(e.anyOf)):ux(e)?hk(e,e.properties):Kb(e)||qb(e)||Qb(e)||rx(e)||cx(e)||lx(e)||hx(e)||gx(e)||xx(e)?e:Aw({})}function vk(e,t){return ax(e)?xk(e,t):F({..._k(e),...t})}function yk(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=vk(e[r],cb(t));return n}function bk(e,t){return yk(e.properties,t)}function xk(e,t){return oC(bk(e,t))}function Sk(e,t){return nC(`Required`,[nC(e,t)])}function Ck(e){return nC(`Required`,[uT(e)])}function wk(e){let t={};for(let n of globalThis.Object.getOwnPropertyNames(e))t[n]=iC(e[n],[Rb]);return t}function Tk(e,t){let n=iC(e,[Ib,`$id`,`required`,`properties`]);return Aw(wk(t),n)}function Ek(e){return e.map(e=>Dk(e))}function Dk(e){return Jb(e)?Sk(e.target,e.parameters):px(e)?Ck(e.$ref):$b(e)?lT(Ek(e.allOf)):Sx(e)?hC(Ek(e.anyOf)):ux(e)?Tk(e,e.properties):Kb(e)||qb(e)||Qb(e)||rx(e)||cx(e)||lx(e)||hx(e)||gx(e)||xx(e)?e:Aw({})}function Ok(e,t){return ax(e)?jk(e,t):F({...Dk(e),...t})}function kk(e,t){let n={};for(let r of globalThis.Object.getOwnPropertyNames(e))n[r]=Ok(e[r],t);return n}function Ak(e,t){return kk(e.properties,t)}function jk(e,t){return oC(Ak(e,t))}function Mk(e,t){return t.map(t=>px(t)?Nk(e,t.$ref):eA(e,t))}function Nk(e,t){return t in e?px(e[t])?Nk(e,e[t].$ref):eA(e,e[t]):aC()}function Pk(e){return _T(e[0])}function Fk(e){return Sw(e[0],e[1])}function Ik(e){return MT(e[0])}function Lk(e){return vk(e[0])}function Rk(e){return qO(e[0],e[1])}function zk(e){return sk(e[0],e[1])}function Bk(e){return Ok(e[0])}function Vk(e,t,n){let r=Mk(e,n);return t===`Awaited`?Pk(r):t===`Index`?Fk(r):t===`KeyOf`?Ik(r):t===`Partial`?Lk(r):t===`Omit`?Rk(r):t===`Pick`?zk(r):t===`Required`?Bk(r):aC()}function Hk(e,t){return $S(eA(e,t))}function Uk(e,t){return tC(eA(e,t))}function Wk(e,t,n){return sC($k(e,t),eA(e,n))}function Gk(e,t,n){return cC($k(e,t),eA(e,n))}function Kk(e,t){return lT($k(e,t))}function qk(e,t){return Dw(eA(e,t))}function Jk(e,t){return Aw(globalThis.Object.keys(t).reduce((n,r)=>({...n,[r]:eA(e,t[r])}),{}))}function Yk(e,t){let[n,r]=[eA(e,nO(t)),eO(t)],i=lb(t);return i.patternProperties[r]=n,i}function Xk(e,t){return px(t)?{...Nk(e,t.$ref),[Ib]:t[Ib]}:t}function Zk(e,t){return zw($k(e,t))}function Qk(e,t){return hC($k(e,t))}function $k(e,t){return t.map(t=>eA(e,t))}function eA(e,t){return Vb(t)?F(eA(e,iC(t,[Rb])),t):Bb(t)?F(eA(e,iC(t,[Lb])),t):yx(t)?F(Xk(e,t),t):Wb(t)?F(Hk(e,t.items),t):Gb(t)?F(Uk(e,t.items),t):Jb(t)?F(Vk(e,t.target,t.parameters)):Yb(t)?F(Wk(e,t.parameters,t.returns),t):Zb(t)?F(Gk(e,t.parameters,t.returns),t):$b(t)?F(Kk(e,t.allOf),t):ex(t)?F(qk(e,t.items),t):ux(t)?F(Jk(e,t.properties),t):fx(t)?F(Yk(e,t)):bx(t)?F(Zk(e,t.items||[]),t):Sx(t)?F(Qk(e,t.anyOf),t):t}function tA(e,t){return t in e?eA(e,e[t]):aC()}function nA(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,n)=>({...t,[n]:tA(e,n)}),{})}var rA=class{constructor(e){let t=nA(e),n=this.WithIdentifiers(t);this.$defs=n}Import(e,t){let n={...this.$defs,[e]:F(this.$defs[e],t)};return F({[I]:`Import`,$defs:n,$ref:e})}WithIdentifiers(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,n)=>({...t,[n]:{...e[n],$id:n}}),{})}};function iA(e){return new rA(e)}function aA(e,t){return F({[I]:`Not`,not:e},t)}function oA(e,t){return Zb(e)?zw(e.parameters,t):aC()}var sA=0;function cA(e,t={}){tb(t.$id)&&(t.$id=`T${sA++}`);let n=lb(e({[I]:`This`,$ref:`${t.$id}`}));return n.$id=t.$id,F({[zb]:`Recursive`,...n},t)}function lA(e,t){let n=Qy(e)?new globalThis.RegExp(e):e;return F({[I]:`RegExp`,type:`RegExp`,source:n.source,flags:n.flags},t)}function uA(e){return $b(e)?e.allOf:Sx(e)?e.anyOf:bx(e)?e.items??[]:[]}function dA(e){return uA(e)}function fA(e,t){return Zb(e)?F(e.returns,t):aC(t)}var pA=class{constructor(e){this.schema=e}Decode(e){return new mA(this.schema,e)}},mA=class{constructor(e,t){this.schema=e,this.decode=t}EncodeTransform(e,t){let n={Encode:n=>t[Ib].Encode(e(n)),Decode:e=>this.decode(t[Ib].Decode(e))};return{...t,[Ib]:n}}EncodeSchema(e,t){let n={Decode:this.decode,Encode:e};return{...t,[Ib]:n}}Encode(e){return yx(this.schema)?this.EncodeTransform(e,this.schema):this.EncodeSchema(e,this.schema)}};function hA(e){return new pA(e)}function gA(e={}){return F({[I]:e[I]??`Unsafe`},e)}function _A(e){return F({[I]:`Void`,type:`void`},e)}var vA=e({Any:()=>QS,Argument:()=>eC,Array:()=>$S,AsyncIterator:()=>tC,Awaited:()=>_T,BigInt:()=>GC,Boolean:()=>WC,Capitalize:()=>NO,Composite:()=>VT,Const:()=>QT,Constructor:()=>sC,ConstructorParameters:()=>$T,Date:()=>HT,Enum:()=>eE,Exclude:()=>kD,Extends:()=>vD,Extract:()=>FD,Function:()=>cC,Index:()=>Sw,InstanceType:()=>zD,Instantiate:()=>yO,Integer:()=>bO,Intersect:()=>lT,Iterator:()=>Dw,KeyOf:()=>MT,Literal:()=>UC,Lowercase:()=>PO,Mapped:()=>Yw,Module:()=>iA,Never:()=>aC,Not:()=>aA,Null:()=>UT,Number:()=>KC,Object:()=>Aw,Omit:()=>qO,Optional:()=>$w,Parameters:()=>oA,Partial:()=>vk,Pick:()=>sk,Promise:()=>jw,Readonly:()=>Fw,ReadonlyOptional:()=>BD,Record:()=>$D,Recursive:()=>cA,Ref:()=>uT,RegExp:()=>lA,Required:()=>Ok,Rest:()=>dA,ReturnType:()=>fA,String:()=>qC,Symbol:()=>WT,TemplateLiteral:()=>rw,Transform:()=>hA,Tuple:()=>zw,Uint8Array:()=>KT,Uncapitalize:()=>FO,Undefined:()=>GT,Union:()=>hC,Unknown:()=>qT,Unsafe:()=>gA,Uppercase:()=>IO,Void:()=>_A});function yA(...e){return new globalThis.Function(...e)}function bA(e){switch(e.errorType){case R.ArrayContains:return`Expected array to contain at least one matching value`;case R.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case R.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case R.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case R.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case R.ArrayUniqueItems:return`Expected array elements to be unique`;case R.Array:return`Expected array`;case R.AsyncIterator:return`Expected AsyncIterator`;case R.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case R.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case R.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case R.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case R.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case R.BigInt:return`Expected bigint`;case R.Boolean:return`Expected boolean`;case R.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case R.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case R.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case R.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case R.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case R.Date:return`Expected Date`;case R.Function:return`Expected function`;case R.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case R.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case R.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case R.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case R.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case R.Integer:return`Expected integer`;case R.IntersectUnevaluatedProperties:return`Unexpected property`;case R.Intersect:return`Expected all values to match`;case R.Iterator:return`Expected Iterator`;case R.Literal:return`Expected ${typeof e.schema.const==`string`?`'${e.schema.const}'`:e.schema.const}`;case R.Never:return`Never`;case R.Not:return`Value should not match`;case R.Null:return`Expected null`;case R.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case R.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case R.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case R.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case R.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case R.Number:return`Expected number`;case R.Object:return`Expected object`;case R.ObjectAdditionalProperties:return`Unexpected property`;case R.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case R.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case R.ObjectRequiredProperty:return`Expected required property`;case R.Promise:return`Expected Promise`;case R.RegExp:return`Expected string to match regular expression`;case R.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case R.StringFormat:return`Expected string to match '${e.schema.format}' format`;case R.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case R.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case R.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case R.String:return`Expected string`;case R.Symbol:return`Expected symbol`;case R.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case R.Tuple:return`Expected tuple`;case R.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case R.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case R.Uint8Array:return`Expected Uint8Array`;case R.Undefined:return`Expected undefined`;case R.Union:return`Expected union value`;case R.Void:return`Expected void`;case R.Kind:return`Expected kind '${e.schema[I]}'`;default:return`Unknown error type`}}var xA=bA;function SA(e){xA=e}function CA(){return xA}var wA=class extends Fb{constructor(e){super(`Unable to dereference schema with $id '${e.$ref}'`),this.schema=e}};function TA(e,t){let n=t.find(t=>t.$id===e.$ref);if(n===void 0)throw new wA(e);return DA(n,t)}function EA(e,t){return!wb(e.$id)||t.some(t=>t.$id===e.$id)||t.push(e),t}function DA(e,t){return e[I]===`This`||e[I]===`Ref`?TA(e,t):e}var OA=class extends Fb{constructor(e){super(`Unable to hash value`),this.value=e}},kA;(function(e){e[e.Undefined=0]=`Undefined`,e[e.Null=1]=`Null`,e[e.Boolean=2]=`Boolean`,e[e.Number=3]=`Number`,e[e.String=4]=`String`,e[e.Object=5]=`Object`,e[e.Array=6]=`Array`,e[e.Date=7]=`Date`,e[e.Uint8Array=8]=`Uint8Array`,e[e.Symbol=9]=`Symbol`,e[e.BigInt=10]=`BigInt`})(kA||={});var AA=BigInt(`14695981039346656037`),[jA,MA]=[BigInt(`1099511628211`),BigInt(`18446744073709551616`)],NA=Array.from({length:256}).map((e,t)=>BigInt(t)),PA=new Float64Array(1),FA=new DataView(PA.buffer),IA=new Uint8Array(PA.buffer);function*LA(e){let t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let n=0;n<t;n++)yield e>>8*(t-1-n)&255}function RA(e){XA(kA.Array);for(let t of e)YA(t)}function zA(e){XA(kA.Boolean),XA(+!!e)}function BA(e){XA(kA.BigInt),FA.setBigInt64(0,e);for(let e of IA)XA(e)}function VA(e){XA(kA.Date),YA(e.getTime())}function HA(e){XA(kA.Null)}function UA(e){XA(kA.Number),FA.setFloat64(0,e);for(let e of IA)XA(e)}function WA(e){XA(kA.Object);for(let t of globalThis.Object.getOwnPropertyNames(e).sort())YA(t),YA(e[t])}function GA(e){XA(kA.String);for(let t=0;t<e.length;t++)for(let n of LA(e.charCodeAt(t)))XA(n)}function KA(e){XA(kA.Symbol),YA(e.description)}function qA(e){XA(kA.Uint8Array);for(let t=0;t<e.length;t++)XA(e[t])}function JA(e){return XA(kA.Undefined)}function YA(e){if(_b(e))return RA(e);if(bb(e))return zA(e);if(Cb(e))return BA(e);if(pb(e))return VA(e);if(yb(e))return HA(e);if(xb(e))return UA(e);if(gb(e))return WA(e);if(wb(e))return GA(e);if(Eb(e))return KA(e);if(mb(e))return qA(e);if(vb(e))return JA(e);throw new OA(e)}function XA(e){AA^=NA[e],AA=AA*jA%MA}function ZA(e){return AA=BigInt(`14695981039346656037`),YA(e),AA}var QA=class extends Fb{constructor(e){super(`Unknown type`),this.schema=e}};function $A(e){return e[I]===`Any`||e[I]===`Unknown`}function ej(e){return e!==void 0}function tj(e,t,n){return!0}function nj(e,t,n){return!0}function rj(e,t,n){if(!_b(n)||ej(e.minItems)&&!(n.length>=e.minItems)||ej(e.maxItems)&&!(n.length<=e.maxItems))return!1;for(let r of n)if(!Fj(e.items,t,r))return!1;if(e.uniqueItems===!0&&!(function(){let e=new Set;for(let t of n){let n=ZA(t);if(e.has(n))return!1;e.add(n)}return!0})())return!1;if(!(ej(e.contains)||xb(e.minContains)||xb(e.maxContains)))return!0;let r=ej(e.contains)?e.contains:aC(),i=n.reduce((e,n)=>Fj(r,t,n)?e+1:e,0);return!(i===0||xb(e.minContains)&&i<e.minContains||xb(e.maxContains)&&i>e.maxContains)}function ij(e,t,n){return ub(n)}function aj(e,t,n){return!(!Cb(n)||ej(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||ej(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||ej(e.maximum)&&!(n<=e.maximum)||ej(e.minimum)&&!(n>=e.minimum)||ej(e.multipleOf)&&n%e.multipleOf!==BigInt(0))}function oj(e,t,n){return bb(n)}function sj(e,t,n){return Fj(e.returns,t,n.prototype)}function cj(e,t,n){return!(!pb(n)||ej(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)||ej(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)||ej(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)||ej(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)||ej(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0)}function lj(e,t,n){return Tb(n)}function uj(e,t,n){let r=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];return Fj(i,[...t,...r],n)}function dj(e,t,n){return!(!Sb(n)||ej(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||ej(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||ej(e.maximum)&&!(n<=e.maximum)||ej(e.minimum)&&!(n>=e.minimum)||ej(e.multipleOf)&&n%e.multipleOf!==0)}function fj(e,t,n){let r=e.allOf.every(e=>Fj(e,t,n));if(e.unevaluatedProperties===!1){let t=new RegExp(DT(e)),i=Object.getOwnPropertyNames(n).every(e=>t.test(e));return r&&i}if(Ox(e.unevaluatedProperties)){let i=new RegExp(DT(e)),a=Object.getOwnPropertyNames(n).every(r=>i.test(r)||Fj(e.unevaluatedProperties,t,n[r]));return r&&a}return r}function pj(e,t,n){return db(n)}function mj(e,t,n){return n===e.const}function hj(e,t,n){return!1}function gj(e,t,n){return!Fj(e.not,t,n)}function _j(e,t,n){return yb(n)}function vj(e,t,n){return!(!Ob.IsNumberLike(n)||ej(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)||ej(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)||ej(e.minimum)&&!(n>=e.minimum)||ej(e.maximum)&&!(n<=e.maximum)||ej(e.multipleOf)&&n%e.multipleOf!==0)}function yj(e,t,n){if(!Ob.IsObjectLike(n)||ej(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||ej(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;let r=Object.getOwnPropertyNames(e.properties);for(let i of r){let r=e.properties[i];if(e.required&&e.required.includes(i)){if(!Fj(r,t,n[i])||(ED(r)||$A(r))&&!(i in n))return!1}else if(Ob.IsExactOptionalProperty(n,i)&&!Fj(r,t,n[i]))return!1}if(e.additionalProperties===!1){let t=Object.getOwnPropertyNames(n);return e.required&&e.required.length===r.length&&t.length===r.length?!0:t.every(e=>r.includes(e))}return typeof e.additionalProperties!=`object`||Object.getOwnPropertyNames(n).every(i=>r.includes(i)||Fj(e.additionalProperties,t,n[i]))}function bj(e,t,n){return fb(n)}function xj(e,t,n){if(!Ob.IsRecordLike(n)||ej(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)||ej(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties))return!1;let[r,i]=Object.entries(e.patternProperties)[0],a=new RegExp(r),o=Object.entries(n).every(([e,n])=>!a.test(e)||Fj(i,t,n)),s=typeof e.additionalProperties!=`object`||Object.entries(n).every(([n,r])=>a.test(n)?!0:Fj(e.additionalProperties,t,r)),c=e.additionalProperties!==!1||Object.getOwnPropertyNames(n).every(e=>a.test(e));return o&&s&&c}function Sj(e,t,n){return Fj(DA(e,t),t,n)}function Cj(e,t,n){let r=new RegExp(e.source,e.flags);return ej(e.minLength)&&!(n.length>=e.minLength)||ej(e.maxLength)&&!(n.length<=e.maxLength)?!1:r.test(n)}function wj(e,t,n){return!wb(n)||ej(e.minLength)&&!(n.length>=e.minLength)||ej(e.maxLength)&&!(n.length<=e.maxLength)||ej(e.pattern)&&!new RegExp(e.pattern).test(n)?!1:ej(e.format)?BS(e.format)?VS(e.format)(n):!1:!0}function Tj(e,t,n){return Eb(n)}function Ej(e,t,n){return wb(n)&&new RegExp(e.pattern).test(n)}function Dj(e,t,n){return Fj(DA(e,t),t,n)}function Oj(e,t,n){if(!_b(n)||e.items===void 0&&n.length!==0||n.length!==e.maxItems)return!1;if(!e.items)return!0;for(let r=0;r<e.items.length;r++)if(!Fj(e.items[r],t,n[r]))return!1;return!0}function kj(e,t,n){return vb(n)}function Aj(e,t,n){return e.anyOf.some(e=>Fj(e,t,n))}function jj(e,t,n){return!(!mb(n)||ej(e.maxByteLength)&&!(n.length<=e.maxByteLength)||ej(e.minByteLength)&&!(n.length>=e.minByteLength))}function Mj(e,t,n){return!0}function Nj(e,t,n){return Ob.IsVoidLike(n)}function Pj(e,t,n){return US(e[I])?GS(e[I])(e,n):!1}function Fj(e,t,n){let r=ej(e.$id)?EA(e,t):t,i=e;switch(i[I]){case`Any`:return tj(i,r,n);case`Argument`:return nj(i,r,n);case`Array`:return rj(i,r,n);case`AsyncIterator`:return ij(i,r,n);case`BigInt`:return aj(i,r,n);case`Boolean`:return oj(i,r,n);case`Constructor`:return sj(i,r,n);case`Date`:return cj(i,r,n);case`Function`:return lj(i,r,n);case`Import`:return uj(i,r,n);case`Integer`:return dj(i,r,n);case`Intersect`:return fj(i,r,n);case`Iterator`:return pj(i,r,n);case`Literal`:return mj(i,r,n);case`Never`:return hj(i,r,n);case`Not`:return gj(i,r,n);case`Null`:return _j(i,r,n);case`Number`:return vj(i,r,n);case`Object`:return yj(i,r,n);case`Promise`:return bj(i,r,n);case`Record`:return xj(i,r,n);case`Ref`:return Sj(i,r,n);case`RegExp`:return Cj(i,r,n);case`String`:return wj(i,r,n);case`Symbol`:return Tj(i,r,n);case`TemplateLiteral`:return Ej(i,r,n);case`This`:return Dj(i,r,n);case`Tuple`:return Oj(i,r,n);case`Undefined`:return kj(i,r,n);case`Union`:return Aj(i,r,n);case`Uint8Array`:return jj(i,r,n);case`Unknown`:return Mj(i,r,n);case`Void`:return Nj(i,r,n);default:if(!US(i[I]))throw new QA(i);return Pj(i,r,n)}}function Ij(...e){return e.length===3?Fj(e[0],e[1],e[2]):Fj(e[0],[],e[1])}var R;(function(e){e[e.ArrayContains=0]=`ArrayContains`,e[e.ArrayMaxContains=1]=`ArrayMaxContains`,e[e.ArrayMaxItems=2]=`ArrayMaxItems`,e[e.ArrayMinContains=3]=`ArrayMinContains`,e[e.ArrayMinItems=4]=`ArrayMinItems`,e[e.ArrayUniqueItems=5]=`ArrayUniqueItems`,e[e.Array=6]=`Array`,e[e.AsyncIterator=7]=`AsyncIterator`,e[e.BigIntExclusiveMaximum=8]=`BigIntExclusiveMaximum`,e[e.BigIntExclusiveMinimum=9]=`BigIntExclusiveMinimum`,e[e.BigIntMaximum=10]=`BigIntMaximum`,e[e.BigIntMinimum=11]=`BigIntMinimum`,e[e.BigIntMultipleOf=12]=`BigIntMultipleOf`,e[e.BigInt=13]=`BigInt`,e[e.Boolean=14]=`Boolean`,e[e.DateExclusiveMaximumTimestamp=15]=`DateExclusiveMaximumTimestamp`,e[e.DateExclusiveMinimumTimestamp=16]=`DateExclusiveMinimumTimestamp`,e[e.DateMaximumTimestamp=17]=`DateMaximumTimestamp`,e[e.DateMinimumTimestamp=18]=`DateMinimumTimestamp`,e[e.DateMultipleOfTimestamp=19]=`DateMultipleOfTimestamp`,e[e.Date=20]=`Date`,e[e.Function=21]=`Function`,e[e.IntegerExclusiveMaximum=22]=`IntegerExclusiveMaximum`,e[e.IntegerExclusiveMinimum=23]=`IntegerExclusiveMinimum`,e[e.IntegerMaximum=24]=`IntegerMaximum`,e[e.IntegerMinimum=25]=`IntegerMinimum`,e[e.IntegerMultipleOf=26]=`IntegerMultipleOf`,e[e.Integer=27]=`Integer`,e[e.IntersectUnevaluatedProperties=28]=`IntersectUnevaluatedProperties`,e[e.Intersect=29]=`Intersect`,e[e.Iterator=30]=`Iterator`,e[e.Kind=31]=`Kind`,e[e.Literal=32]=`Literal`,e[e.Never=33]=`Never`,e[e.Not=34]=`Not`,e[e.Null=35]=`Null`,e[e.NumberExclusiveMaximum=36]=`NumberExclusiveMaximum`,e[e.NumberExclusiveMinimum=37]=`NumberExclusiveMinimum`,e[e.NumberMaximum=38]=`NumberMaximum`,e[e.NumberMinimum=39]=`NumberMinimum`,e[e.NumberMultipleOf=40]=`NumberMultipleOf`,e[e.Number=41]=`Number`,e[e.ObjectAdditionalProperties=42]=`ObjectAdditionalProperties`,e[e.ObjectMaxProperties=43]=`ObjectMaxProperties`,e[e.ObjectMinProperties=44]=`ObjectMinProperties`,e[e.ObjectRequiredProperty=45]=`ObjectRequiredProperty`,e[e.Object=46]=`Object`,e[e.Promise=47]=`Promise`,e[e.RegExp=48]=`RegExp`,e[e.StringFormatUnknown=49]=`StringFormatUnknown`,e[e.StringFormat=50]=`StringFormat`,e[e.StringMaxLength=51]=`StringMaxLength`,e[e.StringMinLength=52]=`StringMinLength`,e[e.StringPattern=53]=`StringPattern`,e[e.String=54]=`String`,e[e.Symbol=55]=`Symbol`,e[e.TupleLength=56]=`TupleLength`,e[e.Tuple=57]=`Tuple`,e[e.Uint8ArrayMaxByteLength=58]=`Uint8ArrayMaxByteLength`,e[e.Uint8ArrayMinByteLength=59]=`Uint8ArrayMinByteLength`,e[e.Uint8Array=60]=`Uint8Array`,e[e.Undefined=61]=`Undefined`,e[e.Union=62]=`Union`,e[e.Void=63]=`Void`})(R||={});var Lj=class extends Fb{constructor(e){super(`Unknown type`),this.schema=e}};function Rj(e){return e.replace(/~/g,`~0`).replace(/\//g,`~1`)}function zj(e){return e!==void 0}var Bj=class{constructor(e){this.iterator=e}[Symbol.iterator](){return this.iterator}First(){let e=this.iterator.next();return e.done?void 0:e.value}};function z(e,t,n,r,i=[]){return{type:e,schema:t,path:n,value:r,message:CA()({errorType:e,path:n,schema:t,value:r,errors:i}),errors:i}}function*Vj(e,t,n,r){}function*Hj(e,t,n,r){}function*Uj(e,t,n,r){if(!_b(r))return yield z(R.Array,e,n,r);zj(e.minItems)&&!(r.length>=e.minItems)&&(yield z(R.ArrayMinItems,e,n,r)),zj(e.maxItems)&&!(r.length<=e.maxItems)&&(yield z(R.ArrayMaxItems,e,n,r));for(let i=0;i<r.length;i++)yield*xM(e.items,t,`${n}/${i}`,r[i]);if(e.uniqueItems===!0&&!(function(){let e=new Set;for(let t of r){let n=ZA(t);if(e.has(n))return!1;e.add(n)}return!0})()&&(yield z(R.ArrayUniqueItems,e,n,r)),!(zj(e.contains)||zj(e.minContains)||zj(e.maxContains)))return;let i=zj(e.contains)?e.contains:aC(),a=r.reduce((e,r,a)=>xM(i,t,`${n}${a}`,r).next().done===!0?e+1:e,0);a===0&&(yield z(R.ArrayContains,e,n,r)),xb(e.minContains)&&a<e.minContains&&(yield z(R.ArrayMinContains,e,n,r)),xb(e.maxContains)&&a>e.maxContains&&(yield z(R.ArrayMaxContains,e,n,r))}function*Wj(e,t,n,r){ub(r)||(yield z(R.AsyncIterator,e,n,r))}function*Gj(e,t,n,r){if(!Cb(r))return yield z(R.BigInt,e,n,r);zj(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield z(R.BigIntExclusiveMaximum,e,n,r)),zj(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield z(R.BigIntExclusiveMinimum,e,n,r)),zj(e.maximum)&&!(r<=e.maximum)&&(yield z(R.BigIntMaximum,e,n,r)),zj(e.minimum)&&!(r>=e.minimum)&&(yield z(R.BigIntMinimum,e,n,r)),zj(e.multipleOf)&&r%e.multipleOf!==BigInt(0)&&(yield z(R.BigIntMultipleOf,e,n,r))}function*Kj(e,t,n,r){bb(r)||(yield z(R.Boolean,e,n,r))}function*qj(e,t,n,r){yield*xM(e.returns,t,n,r.prototype)}function*Jj(e,t,n,r){if(!pb(r))return yield z(R.Date,e,n,r);zj(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)&&(yield z(R.DateExclusiveMaximumTimestamp,e,n,r)),zj(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)&&(yield z(R.DateExclusiveMinimumTimestamp,e,n,r)),zj(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)&&(yield z(R.DateMaximumTimestamp,e,n,r)),zj(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)&&(yield z(R.DateMinimumTimestamp,e,n,r)),zj(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0&&(yield z(R.DateMultipleOfTimestamp,e,n,r))}function*Yj(e,t,n,r){Tb(r)||(yield z(R.Function,e,n,r))}function*Xj(e,t,n,r){let i=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref];yield*xM(a,[...t,...i],n,r)}function*Zj(e,t,n,r){if(!Sb(r))return yield z(R.Integer,e,n,r);zj(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield z(R.IntegerExclusiveMaximum,e,n,r)),zj(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield z(R.IntegerExclusiveMinimum,e,n,r)),zj(e.maximum)&&!(r<=e.maximum)&&(yield z(R.IntegerMaximum,e,n,r)),zj(e.minimum)&&!(r>=e.minimum)&&(yield z(R.IntegerMinimum,e,n,r)),zj(e.multipleOf)&&r%e.multipleOf!==0&&(yield z(R.IntegerMultipleOf,e,n,r))}function*Qj(e,t,n,r){let i=!1;for(let a of e.allOf)for(let e of xM(a,t,n,r))i=!0,yield e;if(i)return yield z(R.Intersect,e,n,r);if(e.unevaluatedProperties===!1){let t=new RegExp(DT(e));for(let i of Object.getOwnPropertyNames(r))t.test(i)||(yield z(R.IntersectUnevaluatedProperties,e,`${n}/${i}`,r))}if(typeof e.unevaluatedProperties==`object`){let i=new RegExp(DT(e));for(let a of Object.getOwnPropertyNames(r))if(!i.test(a)){let i=xM(e.unevaluatedProperties,t,`${n}/${a}`,r[a]).next();i.done||(yield i.value)}}}function*$j(e,t,n,r){db(r)||(yield z(R.Iterator,e,n,r))}function*eM(e,t,n,r){r!==e.const&&(yield z(R.Literal,e,n,r))}function*tM(e,t,n,r){yield z(R.Never,e,n,r)}function*nM(e,t,n,r){xM(e.not,t,n,r).next().done===!0&&(yield z(R.Not,e,n,r))}function*rM(e,t,n,r){yb(r)||(yield z(R.Null,e,n,r))}function*iM(e,t,n,r){if(!Ob.IsNumberLike(r))return yield z(R.Number,e,n,r);zj(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)&&(yield z(R.NumberExclusiveMaximum,e,n,r)),zj(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)&&(yield z(R.NumberExclusiveMinimum,e,n,r)),zj(e.maximum)&&!(r<=e.maximum)&&(yield z(R.NumberMaximum,e,n,r)),zj(e.minimum)&&!(r>=e.minimum)&&(yield z(R.NumberMinimum,e,n,r)),zj(e.multipleOf)&&r%e.multipleOf!==0&&(yield z(R.NumberMultipleOf,e,n,r))}function*aM(e,t,n,r){if(!Ob.IsObjectLike(r))return yield z(R.Object,e,n,r);zj(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield z(R.ObjectMinProperties,e,n,r)),zj(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield z(R.ObjectMaxProperties,e,n,r));let i=Array.isArray(e.required)?e.required:[],a=Object.getOwnPropertyNames(e.properties),o=Object.getOwnPropertyNames(r);for(let t of i)o.includes(t)||(yield z(R.ObjectRequiredProperty,e.properties[t],`${n}/${Rj(t)}`,void 0));if(e.additionalProperties===!1)for(let t of o)a.includes(t)||(yield z(R.ObjectAdditionalProperties,e,`${n}/${Rj(t)}`,r[t]));if(typeof e.additionalProperties==`object`)for(let i of o)a.includes(i)||(yield*xM(e.additionalProperties,t,`${n}/${Rj(i)}`,r[i]));for(let i of a){let a=e.properties[i];e.required&&e.required.includes(i)?(yield*xM(a,t,`${n}/${Rj(i)}`,r[i]),ED(e)&&!(i in r)&&(yield z(R.ObjectRequiredProperty,a,`${n}/${Rj(i)}`,void 0))):Ob.IsExactOptionalProperty(r,i)&&(yield*xM(a,t,`${n}/${Rj(i)}`,r[i]))}}function*oM(e,t,n,r){fb(r)||(yield z(R.Promise,e,n,r))}function*sM(e,t,n,r){if(!Ob.IsRecordLike(r))return yield z(R.Object,e,n,r);zj(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)&&(yield z(R.ObjectMinProperties,e,n,r)),zj(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties)&&(yield z(R.ObjectMaxProperties,e,n,r));let[i,a]=Object.entries(e.patternProperties)[0],o=new RegExp(i);for(let[e,i]of Object.entries(r))o.test(e)&&(yield*xM(a,t,`${n}/${Rj(e)}`,i));if(typeof e.additionalProperties==`object`)for(let[i,a]of Object.entries(r))o.test(i)||(yield*xM(e.additionalProperties,t,`${n}/${Rj(i)}`,a));if(e.additionalProperties===!1){for(let[t,i]of Object.entries(r))if(!o.test(t))return yield z(R.ObjectAdditionalProperties,e,`${n}/${Rj(t)}`,i)}}function*cM(e,t,n,r){yield*xM(DA(e,t),t,n,r)}function*lM(e,t,n,r){if(!wb(r))return yield z(R.String,e,n,r);if(zj(e.minLength)&&!(r.length>=e.minLength)&&(yield z(R.StringMinLength,e,n,r)),zj(e.maxLength)&&!(r.length<=e.maxLength)&&(yield z(R.StringMaxLength,e,n,r)),!new RegExp(e.source,e.flags).test(r))return yield z(R.RegExp,e,n,r)}function*uM(e,t,n,r){if(!wb(r))return yield z(R.String,e,n,r);zj(e.minLength)&&!(r.length>=e.minLength)&&(yield z(R.StringMinLength,e,n,r)),zj(e.maxLength)&&!(r.length<=e.maxLength)&&(yield z(R.StringMaxLength,e,n,r)),wb(e.pattern)&&(new RegExp(e.pattern).test(r)||(yield z(R.StringPattern,e,n,r))),wb(e.format)&&(BS(e.format)?VS(e.format)(r)||(yield z(R.StringFormat,e,n,r)):yield z(R.StringFormatUnknown,e,n,r))}function*dM(e,t,n,r){Eb(r)||(yield z(R.Symbol,e,n,r))}function*fM(e,t,n,r){if(!wb(r))return yield z(R.String,e,n,r);new RegExp(e.pattern).test(r)||(yield z(R.StringPattern,e,n,r))}function*pM(e,t,n,r){yield*xM(DA(e,t),t,n,r)}function*mM(e,t,n,r){if(!_b(r))return yield z(R.Tuple,e,n,r);if(e.items===void 0&&r.length!==0||r.length!==e.maxItems)return yield z(R.TupleLength,e,n,r);if(e.items)for(let i=0;i<e.items.length;i++)yield*xM(e.items[i],t,`${n}/${i}`,r[i])}function*hM(e,t,n,r){vb(r)||(yield z(R.Undefined,e,n,r))}function*gM(e,t,n,r){if(Ij(e,t,r))return;let i=e.anyOf.map(e=>new Bj(xM(e,t,n,r)));yield z(R.Union,e,n,r,i)}function*_M(e,t,n,r){if(!mb(r))return yield z(R.Uint8Array,e,n,r);zj(e.maxByteLength)&&!(r.length<=e.maxByteLength)&&(yield z(R.Uint8ArrayMaxByteLength,e,n,r)),zj(e.minByteLength)&&!(r.length>=e.minByteLength)&&(yield z(R.Uint8ArrayMinByteLength,e,n,r))}function*vM(e,t,n,r){}function*yM(e,t,n,r){Ob.IsVoidLike(r)||(yield z(R.Void,e,n,r))}function*bM(e,t,n,r){GS(e[I])(e,r)||(yield z(R.Kind,e,n,r))}function*xM(e,t,n,r){let i=zj(e.$id)?[...t,e]:t,a=e;switch(a[I]){case`Any`:return yield*Vj(a,i,n,r);case`Argument`:return yield*Hj(a,i,n,r);case`Array`:return yield*Uj(a,i,n,r);case`AsyncIterator`:return yield*Wj(a,i,n,r);case`BigInt`:return yield*Gj(a,i,n,r);case`Boolean`:return yield*Kj(a,i,n,r);case`Constructor`:return yield*qj(a,i,n,r);case`Date`:return yield*Jj(a,i,n,r);case`Function`:return yield*Yj(a,i,n,r);case`Import`:return yield*Xj(a,i,n,r);case`Integer`:return yield*Zj(a,i,n,r);case`Intersect`:return yield*Qj(a,i,n,r);case`Iterator`:return yield*$j(a,i,n,r);case`Literal`:return yield*eM(a,i,n,r);case`Never`:return yield*tM(a,i,n,r);case`Not`:return yield*nM(a,i,n,r);case`Null`:return yield*rM(a,i,n,r);case`Number`:return yield*iM(a,i,n,r);case`Object`:return yield*aM(a,i,n,r);case`Promise`:return yield*oM(a,i,n,r);case`Record`:return yield*sM(a,i,n,r);case`Ref`:return yield*cM(a,i,n,r);case`RegExp`:return yield*lM(a,i,n,r);case`String`:return yield*uM(a,i,n,r);case`Symbol`:return yield*dM(a,i,n,r);case`TemplateLiteral`:return yield*fM(a,i,n,r);case`This`:return yield*pM(a,i,n,r);case`Tuple`:return yield*mM(a,i,n,r);case`Undefined`:return yield*hM(a,i,n,r);case`Union`:return yield*gM(a,i,n,r);case`Uint8Array`:return yield*_M(a,i,n,r);case`Unknown`:return yield*vM(a,i,n,r);case`Void`:return yield*yM(a,i,n,r);default:if(!US(a[I]))throw new Lj(e);return yield*bM(a,i,n,r)}}function SM(...e){return new Bj(e.length===3?xM(e[0],e[1],``,e[2]):xM(e[0],[],``,e[1]))}var CM=class extends Fb{constructor(e,t,n){super(`Unable to decode value as it does not match the expected schema`),this.schema=e,this.value=t,this.error=n}},wM=class extends Fb{constructor(e,t,n,r){super(r instanceof Error?r.message:`Unknown error`),this.schema=e,this.path=t,this.value=n,this.error=r}};function TM(e,t,n){try{return yx(e)?e[Ib].Decode(n):n}catch(r){throw new wM(e,t,n,r)}}function EM(e,t,n,r){return _b(r)?TM(e,n,r.map((r,i)=>IM(e.items,t,`${n}/${i}`,r))):TM(e,n,r)}function DM(e,t,n,r){if(!gb(r)||Db(r))return TM(e,n,r);let i=IT(e),a=i.map(e=>e[0]),o={...r};for(let[e,r]of i)e in o&&(o[e]=IM(r,t,`${n}/${e}`,o[e]));if(!yx(e.unevaluatedProperties))return TM(e,n,o);let s=Object.getOwnPropertyNames(o),c=e.unevaluatedProperties,l={...o};for(let e of s)a.includes(e)||(l[e]=TM(c,`${n}/${e}`,l[e]));return TM(e,n,l)}function OM(e,t,n,r){let i=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref];return TM(e,n,IM(a,[...t,...i],n,r))}function kM(e,t,n,r){return TM(e,n,IM(e.not,t,n,r))}function AM(e,t,n,r){if(!gb(r))return TM(e,n,r);let i=TT(e),a={...r};for(let r of i)hb(a,r)&&(!vb(a[r])||xx(e.properties[r])&&!Ob.IsExactOptionalProperty(a,r))&&(a[r]=IM(e.properties[r],t,`${n}/${r}`,a[r]));if(!Ox(e.additionalProperties))return TM(e,n,a);let o=Object.getOwnPropertyNames(a),s=e.additionalProperties,c={...a};for(let e of o)i.includes(e)||(c[e]=TM(s,`${n}/${e}`,c[e]));return TM(e,n,c)}function jM(e,t,n,r){if(!gb(r))return TM(e,n,r);let i=Object.getOwnPropertyNames(e.patternProperties)[0],a=new RegExp(i),o={...r};for(let s of Object.getOwnPropertyNames(r))a.test(s)&&(o[s]=IM(e.patternProperties[i],t,`${n}/${s}`,o[s]));if(!Ox(e.additionalProperties))return TM(e,n,o);let s=Object.getOwnPropertyNames(o),c=e.additionalProperties,l={...o};for(let e of s)a.test(e)||(l[e]=TM(c,`${n}/${e}`,l[e]));return TM(e,n,l)}function MM(e,t,n,r){return TM(e,n,IM(DA(e,t),t,n,r))}function NM(e,t,n,r){return TM(e,n,IM(DA(e,t),t,n,r))}function PM(e,t,n,r){return _b(r)&&_b(e.items)?TM(e,n,e.items.map((e,i)=>IM(e,t,`${n}/${i}`,r[i]))):TM(e,n,r)}function FM(e,t,n,r){for(let i of e.anyOf)if(Ij(i,t,r))return TM(e,n,IM(i,t,n,r));return TM(e,n,r)}function IM(e,t,n,r){let i=EA(e,t),a=e;switch(e[I]){case`Array`:return EM(a,i,n,r);case`Import`:return OM(a,i,n,r);case`Intersect`:return DM(a,i,n,r);case`Not`:return kM(a,i,n,r);case`Object`:return AM(a,i,n,r);case`Record`:return jM(a,i,n,r);case`Ref`:return MM(a,i,n,r);case`Symbol`:return TM(a,n,r);case`This`:return NM(a,i,n,r);case`Tuple`:return PM(a,i,n,r);case`Union`:return FM(a,i,n,r);default:return TM(a,n,r)}}function LM(e,t,n){return IM(e,t,``,n)}var RM=class extends Fb{constructor(e,t,n){super(`The encoded value does not match the expected schema`),this.schema=e,this.value=t,this.error=n}},zM=class extends Fb{constructor(e,t,n,r){super(`${r instanceof Error?r.message:`Unknown error`}`),this.schema=e,this.path=t,this.value=n,this.error=r}};function BM(e,t,n){try{return yx(e)?e[Ib].Encode(n):n}catch(r){throw new zM(e,t,n,r)}}function VM(e,t,n,r){let i=BM(e,n,r);return _b(i)?i.map((r,i)=>ZM(e.items,t,`${n}/${i}`,r)):i}function HM(e,t,n,r){let i=globalThis.Object.values(e.$defs),a=e.$defs[e.$ref],o=BM(e,n,r);return ZM(a,[...t,...i],n,o)}function UM(e,t,n,r){let i=BM(e,n,r);if(!gb(r)||Db(r))return i;let a=IT(e),o=a.map(e=>e[0]),s={...i};for(let[e,r]of a)e in s&&(s[e]=ZM(r,t,`${n}/${e}`,s[e]));if(!yx(e.unevaluatedProperties))return s;let c=Object.getOwnPropertyNames(s),l=e.unevaluatedProperties,u={...s};for(let e of c)o.includes(e)||(u[e]=BM(l,`${n}/${e}`,u[e]));return u}function WM(e,t,n,r){return BM(e.not,n,BM(e,n,r))}function GM(e,t,n,r){let i=BM(e,n,r);if(!gb(i))return i;let a=TT(e),o={...i};for(let r of a)hb(o,r)&&(!vb(o[r])||xx(e.properties[r])&&!Ob.IsExactOptionalProperty(o,r))&&(o[r]=ZM(e.properties[r],t,`${n}/${r}`,o[r]));if(!Ox(e.additionalProperties))return o;let s=Object.getOwnPropertyNames(o),c=e.additionalProperties,l={...o};for(let e of s)a.includes(e)||(l[e]=BM(c,`${n}/${e}`,l[e]));return l}function KM(e,t,n,r){let i=BM(e,n,r);if(!gb(r))return i;let a=Object.getOwnPropertyNames(e.patternProperties)[0],o=new RegExp(a),s={...i};for(let i of Object.getOwnPropertyNames(r))o.test(i)&&(s[i]=ZM(e.patternProperties[a],t,`${n}/${i}`,s[i]));if(!Ox(e.additionalProperties))return s;let c=Object.getOwnPropertyNames(s),l=e.additionalProperties,u={...s};for(let e of c)o.test(e)||(u[e]=BM(l,`${n}/${e}`,u[e]));return u}function qM(e,t,n,r){return BM(e,n,ZM(DA(e,t),t,n,r))}function JM(e,t,n,r){return BM(e,n,ZM(DA(e,t),t,n,r))}function YM(e,t,n,r){let i=BM(e,n,r);return _b(e.items)?e.items.map((e,r)=>ZM(e,t,`${n}/${r}`,i[r])):[]}function XM(e,t,n,r){for(let i of e.anyOf)if(Ij(i,t,r))return BM(e,n,ZM(i,t,n,r));for(let i of e.anyOf){let a=ZM(i,t,n,r);if(Ij(e,t,a))return BM(e,n,a)}return BM(e,n,r)}function ZM(e,t,n,r){let i=EA(e,t),a=e;switch(e[I]){case`Array`:return VM(a,i,n,r);case`Import`:return HM(a,i,n,r);case`Intersect`:return UM(a,i,n,r);case`Not`:return WM(a,i,n,r);case`Object`:return GM(a,i,n,r);case`Record`:return KM(a,i,n,r);case`Ref`:return qM(a,i,n,r);case`This`:return JM(a,i,n,r);case`Tuple`:return YM(a,i,n,r);case`Union`:return XM(a,i,n,r);default:return BM(a,n,r)}}function QM(e,t,n){return ZM(e,t,``,n)}function $M(e,t){return yx(e)||mN(e.items,t)}function eN(e,t){return yx(e)||mN(e.items,t)}function tN(e,t){return yx(e)||mN(e.returns,t)||e.parameters.some(e=>mN(e,t))}function nN(e,t){return yx(e)||mN(e.returns,t)||e.parameters.some(e=>mN(e,t))}function rN(e,t){return yx(e)||yx(e.unevaluatedProperties)||e.allOf.some(e=>mN(e,t))}function iN(e,t){let n=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((t,n)=>[...t,e.$defs[n]],[]),r=e.$defs[e.$ref];return yx(e)||mN(r,[...n,...t])}function aN(e,t){return yx(e)||mN(e.items,t)}function oN(e,t){return yx(e)||mN(e.not,t)}function sN(e,t){return yx(e)||Object.values(e.properties).some(e=>mN(e,t))||Ox(e.additionalProperties)&&mN(e.additionalProperties,t)}function cN(e,t){return yx(e)||mN(e.item,t)}function lN(e,t){let n=Object.getOwnPropertyNames(e.patternProperties)[0],r=e.patternProperties[n];return yx(e)||mN(r,t)||Ox(e.additionalProperties)&&yx(e.additionalProperties)}function uN(e,t){return yx(e)?!0:mN(DA(e,t),t)}function dN(e,t){return yx(e)?!0:mN(DA(e,t),t)}function fN(e,t){return yx(e)||!vb(e.items)&&e.items.some(e=>mN(e,t))}function pN(e,t){return yx(e)||e.anyOf.some(e=>mN(e,t))}function mN(e,t){let n=EA(e,t),r=e;if(e.$id&&hN.has(e.$id))return!1;switch(e.$id&&hN.add(e.$id),e[I]){case`Array`:return $M(r,n);case`AsyncIterator`:return eN(r,n);case`Constructor`:return tN(r,n);case`Function`:return nN(r,n);case`Import`:return iN(r,n);case`Intersect`:return rN(r,n);case`Iterator`:return aN(r,n);case`Not`:return oN(r,n);case`Object`:return sN(r,n);case`Promise`:return cN(r,n);case`Record`:return lN(r,n);case`Ref`:return uN(r,n);case`This`:return dN(r,n);case`Tuple`:return fN(r,n);case`Union`:return pN(r,n);default:return yx(e)}}var hN=new Set;function gN(e,t){return hN.clear(),mN(e,t)}var _N=class{constructor(e,t,n,r){this.schema=e,this.references=t,this.checkFunc=n,this.code=r,this.hasTransform=gN(e,t)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(e){return SM(this.schema,this.references,e)}Check(e){return this.checkFunc(e)}Decode(e){if(!this.checkFunc(e))throw new CM(this.schema,e,this.Errors(e).First());return this.hasTransform?LM(this.schema,this.references,e):e}Encode(e){let t=this.hasTransform?QM(this.schema,this.references,e):e;if(!this.checkFunc(t))throw new RM(this.schema,e,this.Errors(e).First());return t}},vN;(function(e){function t(e){return e===36}e.DollarSign=t;function n(e){return e===95}e.IsUnderscore=n;function r(e){return e>=65&&e<=90||e>=97&&e<=122}e.IsAlpha=r;function i(e){return e>=48&&e<=57}e.IsNumeric=i})(vN||={});var yN;(function(e){function t(e){let t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);vN.IsNumeric(r)||vN.IsAlpha(r)?t.push(e.charAt(n)):t.push(`_${r}_`)}return t.join(``).replace(/__/g,`_`)}e.Encode=t})(yN||={});function bN(e){if(!wb(e))throw Error(`ConstantString: Not a String`);return`'${JSON.stringify(e).slice(1,-1).replace(/'/g,`\\'`)}'`}function xN(e,t){return`${e}[${bN(t)}]`}var SN=class extends Fb{constructor(e){super(`Unknown type`),this.schema=e}},CN=class extends Fb{constructor(e){super(`Preflight validation check failed to guard for the given schema`),this.schema=e}},wN;(function(e){function t(e,t,n){return Ob.ExactOptionalPropertyTypes?`(${bN(t)} in ${e} ? ${n} : true)`:`(${xN(e,t)} !== undefined ? ${n} : true)`}e.IsExactOptionalProperty=t;function n(e){return Ob.AllowArrayObject?`(typeof ${e} === 'object' && ${e} !== null)`:`(typeof ${e} === 'object' && ${e} !== null && !Array.isArray(${e}))`}e.IsObjectLike=n;function r(e){return Ob.AllowArrayObject?`(typeof ${e} === 'object' && ${e} !== null && !(${e} instanceof Date) && !(${e} instanceof Uint8Array))`:`(typeof ${e} === 'object' && ${e} !== null && !Array.isArray(${e}) && !(${e} instanceof Date) && !(${e} instanceof Uint8Array))`}e.IsRecordLike=r;function i(e){return Ob.AllowNaN?`typeof ${e} === 'number'`:`Number.isFinite(${e})`}e.IsNumberLike=i;function a(e){return Ob.AllowNullVoid?`(${e} === undefined || ${e} === null)`:`${e} === undefined`}e.IsVoidLike=a})(wN||={});var TN;(function(e){function t(e){return e[I]===`Any`||e[I]===`Unknown`}function*n(e,t,n){yield`true`}function*r(e,t,n){yield`true`}function*i(e,t,n){yield`Array.isArray(${n})`;let[r,i]=[b(`value`,`any`),b(`acc`,`number`)];if(xb(e.maxItems)&&(yield`${n}.length <= ${e.maxItems}`),xb(e.minItems)&&(yield`${n}.length >= ${e.minItems}`),yield`((array) => { for(const ${r} of array) if(!(${ye(e.items,t,`value`)})) { return false }; return true; })(${n})`,jS(e.contains)||xb(e.minContains)||xb(e.maxContains)){let a=ye(jS(e.contains)?e.contains:aC(),t,`value`),o=xb(e.minContains)?[`(count >= ${e.minContains})`]:[],s=xb(e.maxContains)?[`(count <= ${e.maxContains})`]:[];yield`((${r}) => { ${`const count = value.reduce((${i}, ${r}) => ${a} ? acc + 1 : acc, 0)`}; return ${[`(count > 0)`,...o,...s].join(` && `)}})(${n})`}e.uniqueItems===!0&&(yield`((${r}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${n})`)}function*a(e,t,n){yield`(typeof value === 'object' && Symbol.asyncIterator in ${n})`}function*o(e,t,n){yield`(typeof ${n} === 'bigint')`,Cb(e.exclusiveMaximum)&&(yield`${n} < BigInt(${e.exclusiveMaximum})`),Cb(e.exclusiveMinimum)&&(yield`${n} > BigInt(${e.exclusiveMinimum})`),Cb(e.maximum)&&(yield`${n} <= BigInt(${e.maximum})`),Cb(e.minimum)&&(yield`${n} >= BigInt(${e.minimum})`),Cb(e.multipleOf)&&(yield`(${n} % BigInt(${e.multipleOf})) === 0`)}function*s(e,t,n){yield`(typeof ${n} === 'boolean')`}function*c(e,t,n){yield*v(e.returns,t,`${n}.prototype`)}function*l(e,t,n){yield`(${n} instanceof Date) && Number.isFinite(${n}.getTime())`,xb(e.exclusiveMaximumTimestamp)&&(yield`${n}.getTime() < ${e.exclusiveMaximumTimestamp}`),xb(e.exclusiveMinimumTimestamp)&&(yield`${n}.getTime() > ${e.exclusiveMinimumTimestamp}`),xb(e.maximumTimestamp)&&(yield`${n}.getTime() <= ${e.maximumTimestamp}`),xb(e.minimumTimestamp)&&(yield`${n}.getTime() >= ${e.minimumTimestamp}`),xb(e.multipleOfTimestamp)&&(yield`(${n}.getTime() % ${e.multipleOfTimestamp}) === 0`)}function*u(e,t,n){yield`(typeof ${n} === 'function')`}function*d(e,t,n){let r=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((t,n)=>[...t,e.$defs[n]],[]);yield*v(uT(e.$ref),[...t,...r],n)}function*f(e,t,n){yield`Number.isInteger(${n})`,xb(e.exclusiveMaximum)&&(yield`${n} < ${e.exclusiveMaximum}`),xb(e.exclusiveMinimum)&&(yield`${n} > ${e.exclusiveMinimum}`),xb(e.maximum)&&(yield`${n} <= ${e.maximum}`),xb(e.minimum)&&(yield`${n} >= ${e.minimum}`),xb(e.multipleOf)&&(yield`(${n} % ${e.multipleOf}) === 0`)}function*p(e,t,n){let r=e.allOf.map(e=>ye(e,t,n)).join(` && `);e.unevaluatedProperties===!1?yield`(${r} && ${`Object.getOwnPropertyNames(${n}).every(key => ${y(`${new RegExp(DT(e))};`)}.test(key))`})`:jS(e.unevaluatedProperties)?yield`(${r} && ${`Object.getOwnPropertyNames(${n}).every(key => ${y(`${new RegExp(DT(e))};`)}.test(key) || ${ye(e.unevaluatedProperties,t,`${n}[key]`)})`})`:yield`(${r})`}function*m(e,t,n){yield`(typeof value === 'object' && Symbol.iterator in ${n})`}function*h(e,t,n){if(typeof e.const==`number`||typeof e.const==`boolean`)yield`(${n} === ${e.const})`;else if(typeof e.const==`string`)yield`(${n} === ${bN(e.const)})`;else throw Error(`Invalid Literal Value`)}function*g(e,t,n){yield`false`}function*_(e,t,n){yield`(!${ye(e.not,t,n)})`}function*ee(e,t,n){yield`(${n} === null)`}function*te(e,t,n){yield wN.IsNumberLike(n),xb(e.exclusiveMaximum)&&(yield`${n} < ${e.exclusiveMaximum}`),xb(e.exclusiveMinimum)&&(yield`${n} > ${e.exclusiveMinimum}`),xb(e.maximum)&&(yield`${n} <= ${e.maximum}`),xb(e.minimum)&&(yield`${n} >= ${e.minimum}`),xb(e.multipleOf)&&(yield`(${n} % ${e.multipleOf}) === 0`)}function*ne(e,n,r){yield wN.IsObjectLike(r),xb(e.minProperties)&&(yield`Object.getOwnPropertyNames(${r}).length >= ${e.minProperties}`),xb(e.maxProperties)&&(yield`Object.getOwnPropertyNames(${r}).length <= ${e.maxProperties}`);let i=Object.getOwnPropertyNames(e.properties);for(let a of i){let i=xN(r,a),o=e.properties[a];if(e.required&&e.required.includes(a))yield*v(o,n,i),(ED(o)||t(o))&&(yield`(${bN(a)} in ${r})`);else{let e=ye(o,n,i);yield wN.IsExactOptionalProperty(r,a,e)}}if(e.additionalProperties===!1&&(e.required&&e.required.length===i.length?yield`Object.getOwnPropertyNames(${r}).length === ${i.length}`:yield`Object.getOwnPropertyNames(${r}).every(key => ${`[${i.map(e=>`${bN(e)}`).join(`, `)}]`}.includes(key))`),typeof e.additionalProperties==`object`){let t=ye(e.additionalProperties,n,`${r}[key]`);yield`(Object.getOwnPropertyNames(${r}).every(key => ${`[${i.map(e=>`${bN(e)}`).join(`, `)}]`}.includes(key) || ${t}))`}}function*re(e,t,n){yield`${n} instanceof Promise`}function*ie(e,t,n){yield wN.IsRecordLike(n),xb(e.minProperties)&&(yield`Object.getOwnPropertyNames(${n}).length >= ${e.minProperties}`),xb(e.maxProperties)&&(yield`Object.getOwnPropertyNames(${n}).length <= ${e.maxProperties}`);let[r,i]=Object.entries(e.patternProperties)[0];yield`(Object.entries(${n}).every(([key, value]) => ${`(${y(`${new RegExp(r)}`)}.test(key) ? ${ye(i,t,`value`)} : ${jS(e.additionalProperties)?ye(e.additionalProperties,t,n):e.additionalProperties===!1?`false`:`true`})`}))`}function*ae(e,t,n){let r=DA(e,t);if(ve.functions.has(e.$ref))return yield`${be(e.$ref)}(${n})`;yield*v(r,t,n)}function*oe(e,t,n){let r=y(`${new RegExp(e.source,e.flags)};`);yield`(typeof ${n} === 'string')`,xb(e.maxLength)&&(yield`${n}.length <= ${e.maxLength}`),xb(e.minLength)&&(yield`${n}.length >= ${e.minLength}`),yield`${r}.test(${n})`}function*se(e,t,n){yield`(typeof ${n} === 'string')`,xb(e.maxLength)&&(yield`${n}.length <= ${e.maxLength}`),xb(e.minLength)&&(yield`${n}.length >= ${e.minLength}`),e.pattern!==void 0&&(yield`${y(`${new RegExp(e.pattern)};`)}.test(${n})`),e.format!==void 0&&(yield`format(${bN(e.format)}, ${n})`)}function*ce(e,t,n){yield`(typeof ${n} === 'symbol')`}function*le(e,t,n){yield`(typeof ${n} === 'string')`,yield`${y(`${new RegExp(e.pattern)};`)}.test(${n})`}function*ue(e,t,n){yield`${be(e.$ref)}(${n})`}function*de(e,t,n){if(yield`Array.isArray(${n})`,e.items===void 0)return yield`${n}.length === 0`;yield`(${n}.length === ${e.maxItems})`;for(let r=0;r<e.items.length;r++)yield`${ye(e.items[r],t,`${n}[${r}]`)}`}function*fe(e,t,n){yield`${n} === undefined`}function*pe(e,t,n){yield`(${e.anyOf.map(e=>ye(e,t,n)).join(` || `)})`}function*me(e,t,n){yield`${n} instanceof Uint8Array`,xb(e.maxByteLength)&&(yield`(${n}.length <= ${e.maxByteLength})`),xb(e.minByteLength)&&(yield`(${n}.length >= ${e.minByteLength})`)}function*he(e,t,n){yield`true`}function*ge(e,t,n){yield wN.IsVoidLike(n)}function*_e(e,t,n){let r=ve.instances.size;ve.instances.set(r,e),yield`kind(${bN(e[I])}, ${r}, ${n})`}function*v(e,t,v,ye=!0){let y=wb(e.$id)?[...t,e]:t,b=e;if(ye&&wb(e.$id)){let n=be(e.$id);if(ve.functions.has(n))return yield`${n}(${v})`;{ve.functions.set(n,`<deferred>`);let r=xe(n,e,t,`value`,!1);return ve.functions.set(n,r),yield`${n}(${v})`}}switch(b[I]){case`Any`:return yield*n(b,y,v);case`Argument`:return yield*r(b,y,v);case`Array`:return yield*i(b,y,v);case`AsyncIterator`:return yield*a(b,y,v);case`BigInt`:return yield*o(b,y,v);case`Boolean`:return yield*s(b,y,v);case`Constructor`:return yield*c(b,y,v);case`Date`:return yield*l(b,y,v);case`Function`:return yield*u(b,y,v);case`Import`:return yield*d(b,y,v);case`Integer`:return yield*f(b,y,v);case`Intersect`:return yield*p(b,y,v);case`Iterator`:return yield*m(b,y,v);case`Literal`:return yield*h(b,y,v);case`Never`:return yield*g(b,y,v);case`Not`:return yield*_(b,y,v);case`Null`:return yield*ee(b,y,v);case`Number`:return yield*te(b,y,v);case`Object`:return yield*ne(b,y,v);case`Promise`:return yield*re(b,y,v);case`Record`:return yield*ie(b,y,v);case`Ref`:return yield*ae(b,y,v);case`RegExp`:return yield*oe(b,y,v);case`String`:return yield*se(b,y,v);case`Symbol`:return yield*ce(b,y,v);case`TemplateLiteral`:return yield*le(b,y,v);case`This`:return yield*ue(b,y,v);case`Tuple`:return yield*de(b,y,v);case`Undefined`:return yield*fe(b,y,v);case`Union`:return yield*pe(b,y,v);case`Uint8Array`:return yield*me(b,y,v);case`Unknown`:return yield*he(b,y,v);case`Void`:return yield*ge(b,y,v);default:if(!US(b[I]))throw new SN(e);return yield*_e(b,y,v)}}let ve={language:`javascript`,functions:new Map,variables:new Map,instances:new Map};function ye(e,t,n,r=!0){return`(${[...v(e,t,n,r)].join(` && `)})`}function be(e){return`check_${yN.Encode(e)}`}function y(e){let t=`local_${ve.variables.size}`;return ve.variables.set(t,`const ${t} = ${e}`),t}function xe(e,t,n,r,i=!0){let[a,o]=[`
`,e=>``.padStart(e,` `)],s=b(`value`,`any`),c=Se(`boolean`),l=[...v(t,n,r,i)].map(e=>`${o(4)}${e}`).join(` &&${a}`);return`function ${e}(${s})${c} {${a}${o(2)}return (${a}${l}${a}${o(2)})\n}`}function b(e,t){return`${e}${ve.language===`typescript`?`: ${t}`:``}`}function Se(e){return ve.language===`typescript`?`: ${e}`:``}function Ce(e,t,n){let r=xe(`check`,e,t,`value`),i=b(`value`,`any`),a=Se(`boolean`),o=[...ve.functions.values()],s=[...ve.variables.values()],c=wb(e.$id)?`return function check(${i})${a} {\n  return ${be(e.$id)}(value)\n}`:`return ${r}`;return[...s,...o,c].join(`
`)}function we(...e){let t={language:`javascript`},[n,r,i]=e.length===2&&_b(e[1])?[e[0],e[1],t]:e.length===2&&!_b(e[1])?[e[0],[],e[1]]:e.length===3?[e[0],e[1],e[2]]:e.length===1?[e[0],[],t]:[null,[],t];if(ve.language=i.language,ve.variables.clear(),ve.functions.clear(),ve.instances.clear(),!jS(n))throw new CN(n);for(let e of r)if(!jS(e))throw new CN(e);return Ce(n,r,i)}e.Code=we;function Te(e,t=[]){let n=we(e,t,{language:`javascript`}),r=yA(`kind`,`format`,`hash`,n),i=new Map(ve.instances);function a(e,t,n){return!US(e)||!i.has(t)?!1:GS(e)(i.get(t),n)}function o(e,t){return BS(e)?VS(e)(t):!1}function s(e){return ZA(e)}return new _N(e,t,r(a,o,s),n)}e.Compile=Te})(TN||={});var EN={};function DN(e,t){e in EN||(EN[e]=t)}var ON=!1;function kN(){ON||(ON=!0,SA(e=>(EN[e.schema[I]]||bA)(e)))}var AN=Symbol.for(`object-shape-tester.shape-identifier`);function jN(e){return MN(e)}function MN(e){if(kN(),PN(e))return e;let t=LN(e),n={$_schema:t,default:t.default};return Object.defineProperties(n,{$_schemaExtraKeys:NN(`$_schemaExtraKeys`,()=>IN(t,!0)),$_schemaNoExtraKeys:NN(`$_schemaNoExtraKeys`,()=>IN(t,!1)),$_compiledSchema:NN(`$_compiledSchema`,()=>TN.Compile(t)),$_compiledSchemaExtraKeys:NN(`$_compiledSchemaExtraKeys`,function(){return TN.Compile(this.$_schemaExtraKeys)}),$_compiledSchemaNoExtraKeys:NN(`$_compiledSchemaNoExtraKeys`,function(){return TN.Compile(this.$_schemaNoExtraKeys)}),runtimeType:{configurable:!1,enumerable:!1,get(){throw Error(`runtimeType cannot be used as a value, it is only for types.`)}},[AN]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),n}function NN(e,t){return{configurable:!0,enumerable:!0,get(){let n=t.call(this);return Object.defineProperty(this,e,{configurable:!1,enumerable:!0,writable:!1,value:n}),n}}}function PN(e){return A.isObject(e)&&A.hasKey(e,AN)&&!!e[AN]}function FN(e){return A.isObject(e)&&A.hasKey(e,I)}function IN(e,t){let n={...e};if(Array.isArray(e.anyOf)&&(n.anyOf=e.anyOf.map(e=>IN(e,t))),Array.isArray(e.allOf)&&(n.allOf=e.allOf.map(e=>IN(e,t))),FN(e.items)?n.items=IN(e.items,t):Array.isArray(e.items)&&(n.items=e.items.map(e=>IN(e,t))),A.isObject(e.properties)){let r={};Object.entries(e.properties).forEach(([e,n])=>{r[e]=IN(n,t)}),n.properties=r}return n.additionalProperties=t,n}function LN(e){if(FN(e))return e;if(PN(e))return e.$_schema;if(A.isFunction(e))return vA.Function([],vA.Any(),{default:e});if(A.isObject(e)){let t={},n={};return Object.entries(e).forEach(([e,r])=>{let i=LN(r);n[e]=i,t[e]=i.default}),vA.Object(n,{default:t})}if(A.isArray(e))return vA.Array(vA.Union(e.map(e=>LN(e))),{default:[]});if(A.isPrimitive(e)){if(A.isString(e))return vA.String({default:e});if(A.isNumber(e))return vA.Number({default:e});if(A.isBoolean(e))return vA.Boolean({default:e});if(A.isSymbol(e))return vA.Symbol({default:e});if(A.isNull(e))return vA.Null({default:null});if(A.isUndefined(e))return vA.Undefined({default:void 0});if(A.isBigInt(e))return vA.BigInt({default:e});Vc.tsType(e).equals(),Vc.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw Error(`Invalid shape: ${y(e)}`)}function RN(e,t){let n=Me(e);if(t!=null&&!n.includes(t))throw TypeError(`enumShape default must be a subset of the given enum.`);return MN(vA.Union(n.map(e=>vA.Literal(e)),{default:t??n[0]}))}function zN(e){return A.isSymbol(e)?VN(e):MN(vA.Const(e,{default:e}))}var BN=`ExactSymbol`;function VN(e){return US(`ExactSymbol`)||WS(BN,(e,t)=>t===e.symbol),DN(BN,({schema:e})=>`Expected symbol ${e.symbol?.description?Zl({value:e.symbol.description,wrapper:`'`}):`<unnamed symbol>`}`),MN(vA.Unsafe({[I]:BN,symbol:e,default:e}))}function HN(e,t={}){Ob.ExactOptionalPropertyTypes=!0;let n=MN(e).$_schema,r=t.alsoUndefined?vA.Union([vA.Undefined(),n]):n;return MN(vA.Optional(r))}function UN(...e){let t,n=e.map((e,n)=>{let r=MN(e);return n||(t=r.default),r.$_schema});return MN(vA.Union(n,{default:t}))}function B(e){return HN(UN(void 0,null,e))}function WN(e){let t=MN(e);return MN(vA.Partial(t.$_schema,{default:t.default}))}function GN(e){return UN(e,``,-1,0n,!1,WT(),null,void 0)}var KN=class extends TypeError{errors;failureMessage;name=`ShapeMismatchError`;constructor(e,t){let n=Ie(t,`Shape mismatch:\n${bo(e.map(e=>JN(e)).join(`
`),1)}`);super(n),this.errors=e,this.failureMessage=t}};function qN(e){return e.errors.flatMap(e=>Array.from(e))}function JN(e,t=0){let n=qN(e).map(e=>JN(e,t+1));return[bo([e.path,e.message].filter(A.isTruthy).join(`: `)+(n.length?`:`:``),t),...n].join(`
`)}function YN(e,t,n={}){return ZN(t,n).Check(e)}function XN(e,t,n={},r){if(YN(e,t,n))return;let i=Array.from(ZN(t,n).Errors(e));if(i.length)throw new KN(i,r)}function ZN(e,t){return e=QN(e),t.preventExtraKeys??t.allowExtraKeys===!1?e.$_compiledSchemaNoExtraKeys:e.$_compiledSchemaExtraKeys}function QN(e){return MN(e)}var $N=`recordShape`;function eP({keys:e,values:t,partial:n,additionalProperties:r}){tP();let i=iP(e),a=MN(t);return MN(vA.Unsafe({[I]:$N,keysShape:i,valuesShape:a,isPartial:!!n,additionalProperties:!!r,default:rP({isPartial:!!n,keysShape:i,valuesShape:a})}))}function tP(){US(`recordShape`)||WS($N,(e,t)=>{if(typeof t!=`object`||!t||Array.isArray(t))return!1;let n=Object.entries(t).every(([t,n])=>{let r=e.additionalProperties||YN(t,e.keysShape),i=YN(n,e.valuesShape);return r&&i}),r=e.isPartial||!nP(e.keysShape,t).length;return n&&r}),DN($N,e=>{let t=e.schema,n=e.value;if(typeof n!=`object`||!n||Array.isArray(n))return`Expected an object`;let r=el(Object.entries(n),([e])=>e,(e,[n,r])=>!YN(n,t.keysShape)||!YN(r,t.valuesShape)),i=nP(t.keysShape,n);return[r.length?[`Failure at keys`,r.join(`,`)].join(`: `):``,i.length?[`Missing keys`,i.join(`,`)].join(`: `):``].filter(A.isTruthy).join(`
`)})}function nP(e,t){let n=aP(e).filter(e=>A.isPropertyKey(e));return n.length?n.filter(e=>!A.hasKey(t,e)):[]}function rP({keysShape:e,valuesShape:t,isPartial:n}){if(n)return{};{let n=aP(e),r=t.default;return Object.fromEntries(n.map(e=>[e,r]))}}function iP(e){return PN(e)?e:FN(e)?MN(e):A.isObject(e)?RN(e):A.isArray(e)&&A.isLengthAtLeast(e,1)?UN(...e.map(e=>zN(e))):A.isPropertyKey(e)?MN(e):MN(vA.Undefined())}function aP(e){let t=e.$_schema,n=t[I].toLowerCase();return[`const`,`literal`].includes(n)?[t.const]:n===`union`?l(t.anyOf.flatMap(e=>aP(MN(e)))):[`undefined`,`number`,`string`,`symbol`].includes(n)?[]:aP(iP(e.default))}var oP=Symbol.for(`observavir-observable`),sP=MN({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1}});function cP(e){return A.isObject(e)&&oP in e&&e[oP]===!0&&YN(e,sP)}var lP=class extends Ql()(`observable-value-update`){},uP=class extends Ql()(`observable-value-resolve`){},dP=class extends Ql()(`observable-value-error`){},fP=class extends $l(`observable-destroy`){},pP=class extends $l(`observable-callback-call`){},mP=class extends Ql()(`observable-params-update`){};Ql()(`observable-interval-run`),Ql()(`observable-interval-skip`),Ql()(`observable-interval-rate-limited`);var hP=class{[oP]=!0;listenTarget=new tu;value;equalityCheck;listenerMap=new WeakMap;dispatch(...e){return this.listenTarget.dispatch(...e)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...e){let t=e[0];if(t===zy)return!1;if(!(e.length===2?e[1]:this.equalityCheck)?.(this.value,t)){let e=this.value;return this.value=t,this.listenTarget.dispatch(new lP({detail:[t,e]})),!0}return!1}listen(e,t){function n(e){return t(...e.detail)}return this.listenerMap.set(t,n),e&&t(this.value,void 0),this.listenTarget.listen(lP,n)}removeListener(e){let t=this.listenerMap.get(e);return!!t&&this.listenTarget.removeListener(lP,t)}destroy(){this.listenTarget.dispatch(new fP),this.listenTarget.destroy()}listenToEvent(e,t,n){return this.listenTarget.listen(e,t,n)}};function gP(e,t){return jc(e,t,(e,t)=>A.isFunction(e)&&A.isFunction(t)?!0:A.strictEquals(e,t))}var _P;(function(e){e.Rejected=`rejected`,e.Waiting=`waiting`,e.Resolved=`resolved`})(_P||={});var vP=class extends hP{equalityCheck;waitingForValueDeferredPromise=new Ve;lastSetPromise;lastSetId=Gl();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(e={}){super(),this.equalityCheck=`equalityCheck`in e?e.equalityCheck:gP,`defaultValue`in e&&this.setValue(e.defaultValue)}setPromise(e){if(e===this.lastSetPromise)return!1;let t=Gl();return this.lastSetId=t,this.lastSetPromise=e,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new Ve,super.setValue(this.waitingForValueDeferredPromise.promise,A.strictEquals)),e.then(n=>{this.lastSetPromise===e&&this.lastSetId===t&&this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==e||this.lastSetId!==t)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});let r=C(n);console.error(r),this.rejectValue(r)}),!0}resolveValue(e){return By(e)||(e=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(e,A.strictEquals):super.setValue(e))?(this.lastResolvedValue=e,this.lastSetId=Gl(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(e),this.dispatch(new uP({detail:e})),!0):!1}rejectValue(e){this.waitingForValueDeferredPromise.reject(e),super.setValue(e,A.strictEquals),this.dispatch(new dP({detail:e}))}setValue(e){try{return e instanceof Promise?this.setPromise(e):e instanceof Error?(this.rejectValue(e),!0):By(e)?this.resolveValue(e):!1}catch(e){return this.rejectValue(C(e)),!0}}listen(e,t){return super.listen(e,t)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?_P.Rejected:this.value instanceof Promise?_P.Waiting:_P.Resolved}},yP=class e extends vP{static NotSet=Symbol(`not set`);updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==e.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck=`equalityCheck`in t?t.equalityCheck:gP,this.updateCallback=t.updateCallback,this.internalParams=`defaultParams`in t?t.defaultParams:e.NotSet}updateFromCallback(){if(!this.updateCallback)throw TypeError(`Cannot update value: updateCallback was never set.`);if(this.internalParams===e.NotSet)throw TypeError(`Cannot update value: params were never set.`);try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(e){return this.setValue(C(e))}finally{this.dispatch(new pP)}}updateLastParams(t){try{return this.internalParams===e.NotSet||!this.equalityCheck?.(t,this.internalParams)?(this.internalParams=t,this.dispatch(new mP({detail:this.internalParams})),!0):!1}catch(e){return this.setValue(C(e)),!1}}update(...[e]){return this.updateLastParams(e)?(this.updateFromCallback(),!0):!1}setParams(e){return this.updateLastParams(e)}forceUpdate(...e){return A.isLengthAtLeast(e,1)&&this.updateLastParams(e[0]),this.updateFromCallback()}},bP=class extends hP{value;equalityCheck;constructor(e){super(),this.value=e.defaultValue,this.equalityCheck=`equalityCheck`in e?e.equalityCheck:gP}setValue(e){return super.setValue(e)}listen(e,t){return super.listen(e,t)}removeListener(e){return super.removeListener(e)}},{I:xP}=Id,SP=e=>e,CP=e=>e.strings===void 0,wP=()=>document.createComment(``),TP=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new xP(r.insertBefore(wP(),i),r.insertBefore(wP(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=SP(e).nextSibling;SP(r).insertBefore(e,i),e=t}}}return n},EP=(e,t,n=e)=>(e._$AI(t,n),e),DP={},OP=(e,t=DP)=>e._$AH=t,kP=e=>e._$AH,AP=e=>{e._$AR(),e._$AA.remove()},jP={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},MP=e=>(...t)=>({_$litDirective$:e,values:t}),NP=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},PP=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),PP(e,t);return!0},FP=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},IP=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),zP(t)}};function LP(e){this._$AN===void 0?this._$AM=e:(FP(this),this._$AM=e,IP(this))}function RP(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)PP(r[e],!1),FP(r[e]);else r!=null&&(PP(r,!1),FP(r))}else PP(this,e)}}var zP=e=>{e.type==jP.CHILD&&(e._$AP??=RP,e._$AQ??=LP)},BP=class extends NP{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),IP(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(PP(this,e),FP(this))}setValue(e){if(CP(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},VP={attribute:!0,type:String,converter:Xu,reflect:!1,hasChanged:Zu},HP=(e=VP,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function UP(e){return(t,n)=>typeof n==`object`?HP(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}var WP=MP(class extends NP{constructor(e){if(super(e),e.type!==jP.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Sd}}),GP=e=>e??M;function*KP(e,t){let n=typeof t==`function`;if(e!==void 0){let r=-1;for(let i of e)r>-1&&(yield n?t(r):t),r++,yield i}}var qP=class extends NP{constructor(e){if(super(e),this.it=M,e.type!==jP.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===M||e==null)return this._t=void 0,this.it=e;if(e===Sd)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};qP.directiveName=`unsafeHTML`,qP.resultType=1;var JP=MP(qP);function YP(e,t,n){return e?t(e):n?.(e)}var XP;(function(e){e.Input=`input`,e.State=`state`})(XP||={});var ZP={[XP.Input]:`a state`,[XP.State]:`an input`};function QP({propertyKey:e,propertyType:t,tagName:n}){let r=n.toLowerCase();return Error(`Cannot set ${t} '${String(e)}' on '${r}'. '${r}' already has ${ZP[t]} property with the same name.`)}function $P(e){return`instanceInputs`in e}function eF(e){return`instanceState`in e}function tF({element:e,inputKey:t}){if(eF(e)&&Object.hasOwn(e.instanceState,t))throw QP({propertyKey:t,propertyType:XP.Input,tagName:e.tagName})}function nF({element:e,inputKey:t,value:n}){$P(e)?e.instanceInputs[t]=n:Reflect.set(e,t,n)}function rF({element:e,inputKey:t,value:n}){tF({element:e,inputKey:t}),nF({element:e,inputKey:t,value:n})}function iF(e,t){let n=x(t);n.forEach(t=>{tF({element:e,inputKey:t})}),n.forEach(n=>{nF({element:e,inputKey:n,value:t[n]})}),$P(e)&&x(e.instanceInputs).forEach(n=>{n in t||nF({element:e,inputKey:n,value:void 0})})}function aF(e){return e&&e!==Object.prototype?[...Object.getOwnPropertyNames(e),...aF(Object.getPrototypeOf(e))]:[]}var oF=new Set(typeof HTMLElement>`u`?[]:aF(HTMLElement.prototype).map(e=>e.toLowerCase()));function sF(e){return e===`class`||typeof HTMLElement<`u`&&e in HTMLElement.prototype||oF.has(e.toLowerCase())}function cF({attributeName:e,element:t}){let n=Yl(e);sF(n)||rF({element:t,inputKey:n,value:t.getAttribute(e)??void 0})}function lF({element:e}){e.getAttributeNames().forEach(t=>{cF({attributeName:t,element:e})})}var uF=class extends Bd{hasConnectedInputAttributeObserver=!1;inputAttributeObserver=new MutationObserver(e=>{e.forEach(({attributeName:e})=>{e&&cF({attributeName:e,element:this})})});static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds;connectedCallback(){this.hasConnectedInputAttributeObserver||(this.hasConnectedInputAttributeObserver=!0,lF({element:this}),this.inputAttributeObserver.observe(this,{attributes:!0})),super.connectedCallback()}};function dF(e,t,n){if(!t.length&&!n.length)return[...e];let r=t.toReversed();if(!e.length)return r.filter(e=>e.index===0).flatMap(e=>e.values);let i=new Map;r.forEach(t=>{if(t.index>=0&&t.index<e.length){let e=i.get(t.index);e?e.push(...t.values):i.set(t.index,[...t.values])}});let a=new Set(n),o=[];return e.forEach((e,t)=>{let n=i.get(t);n&&o.push(...n),a.has(t)||o.push(e)}),o}function fF(e){return!!e&&(typeof e==`object`||typeof e==`function`)}function pF(e){return fF(e)&&!!e._elementVirIsMinimalDefinitionWithInputs}function mF(e){return fF(e)&&A.isString(e.tagName)&&!!e.tagName}var hF={};function gF(e){return fF(e)&&A.isNumber(e.nodeType)}function _F(e){return el(e,e=>{if(pF(e))return e.definition;if(mF(e)&&!gF(e))return e.tagInterpolationKey?e.tagInterpolationKey:A.isFunction(e)?e:Zc(hF,e.tagName,()=>({tagName:e.tagName}))},A.isTruthy)}var vF=new WeakMap;function yF(e,t){return _F(t).reduce((e,t)=>e?.nested?.get(t),vF.get(e))?.template}function bF(e,t,n){return SF({map:vF,keys:[e,..._F(t)],valueToSet:n})}function xF(e,t,n){let r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};let i=e.get(r);return i?{currentKey:r,currentTemplateAndNested:i,reason:`key and value exists`}:{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`}}function SF({map:e,keys:t,valueToSet:n,index:r=0}){let{currentTemplateAndNested:i,currentKey:a,reason:o}=xF(e,t,r);if(!a)return{result:!1,reason:o};let s=i??{nested:void 0,template:void 0};if(i||e.set(a,s),r===t.length-1)return s.template=n,{result:!0,reason:`set value at end of keys array`};let c=s.nested??new WeakMap;return s.nested||=c,SF({map:c,keys:t,valueToSet:n,index:r+1})}function CF(e,t,n){let r=yF(e,t),i=r??n();if(!r){let n=bF(e,t,i);if(!n.result)throw Error(`Failed to set template transform: ${n.reason}`)}let a=i.valuesTransform(t),o=a.valueInsertions.length||a.valueIndexDeletions.length?dF(t,a.valueInsertions,a.valueIndexDeletions):t;return{strings:i.templateStrings,values:o}}function wF({inputTemplateStrings:e,inputValues:t,transformValue:n,assertValidString:r}){let i=[],a=[],o=[],s=[];return e.forEach((c,l)=>{let u=i.length-1,d=i[u],f=l-1,p=t[f],m=e.raw[l]??c;r&&r(c);let h=typeof d==`string`?n(d,c,p):void 0;if(!h){i.push(c),a.push(m);return}i[u]=[d,h.replacement].join(``),a[u]=[a[u],h.replacement].join(``),o.push(f);let g=h.getExtraValues,_=g?g(p):[];_.length&&g?(i[u]+=` `,a[u]+=` `,_.forEach((e,t)=>{t&&(i.push(` `),a.push(` `))}),s.push(e=>{let t=e[f],n=g(t);return{index:f,values:n}}),i.push(c),a.push(m)):(i[u]+=c,a[u]+=m)}),{templateStrings:Object.assign([],i,{raw:a}),valuesTransform(e){let t=s.flatMap(t=>t(e));return{valueIndexDeletions:o,valueInsertions:t}}}}function TF(...[e,t,n]){if(mF(n))return{replacement:n.tagName,getExtraValues:void 0}}function EF(e,t){return wF({inputTemplateStrings:e,inputValues:t,transformValue:TF})}function V(e,...t){let n=CF(e,t,()=>EF(e,t));return Iu(n.strings,...n.values)}var DF={allowPolymorphicState:!1,errorHandler:void 0};function OF(){return Ql()}function kF(e,t){return t?Object.keys(t).filter(e=>{if(e===``)throw Error(`Got empty string for events key.`);return!0}).reduce((t,n)=>(t[n]=OF()([e,n].join(`-`)),t),{}):{}}function AF(e){return e?zl(e,e=>e):{}}function jF(e,t){t in e||UP()(e,t)}function MF(e,t,n){if(!(e in t))throw Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function NF(e,t){let n=e;function r(n){t&&MF(n,e,e.tagName)}function i(e,t){return r(t),n[t]}function a(t,n,r){if(e.instanceInputs!==s&&Object.hasOwn(e.instanceInputs,n))throw QP({propertyKey:n,propertyType:XP.State,tagName:e.tagName});return o(t,n,r)}function o(i,a,o){r(a),t||jF(e,a);let s=n[a],c=e.observablePropertyListenerMap[a];if(s!==o&&cP(s)&&c&&s.removeListener(c),cP(o)){if(c)o.listen(!1,c);else{function t(){e.requestUpdate()}e.observablePropertyListenerMap[a]=t,o.listen(!1,t)}}else cP(s)&&delete e.observablePropertyListenerMap[a];return i[a]=o,n[a]=o,!0}let s=new Proxy({},{get:i,set:a,deleteProperty(e,t){return o(e,t,void 0),Reflect.deleteProperty(e,t)},ownKeys(e){return Reflect.ownKeys(e)},getOwnPropertyDescriptor(e,t){if(t in e)return{value:i(e,t),configurable:!0,enumerable:!0,writable:!0}},has(t,n){return Reflect.has(t,n)||Reflect.has(e,n)}});return s}function PF(e,t){let n=[e,`-`].join(``);t.forEach(t=>{if(!t.startsWith(n))throw Error(`Invalid element string name '${t}' in '${e}': element string names must begin with the element's tag name.`)})}function FF(e,t,n){return n?tl(n,n=>({key:n,value:[e,t,n].join(`-`)}),{useRequired:!0}):{}}function IF(e,t){if(!t)return{};let n=[e,`-`].join(``);return tl(t,t=>({key:t,value:t.startsWith(n)?t:[e,`slot`,t].join(`-`)}),{useRequired:!0})}function LF({hostClassNames:e,cssVars:t,slotNamesMap:n}){return{hostClasses:zl(e,(e,t)=>({name:j(t),selector:j(`:host(.${t})`)})),cssVars:t,slotNames:zl(n,(e,t)=>j(t))}}function RF({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&x(t).forEach(a=>{let o=t[a],s=n[a];typeof o==`function`&&(o({state:r,inputs:i})?e.classList.add(s):e.classList.remove(s))})}function zF({element:e,eventsMap:t,cssVars:n,slotNamesMap:r,testIdsMap:i}){function a(t){x(t).forEach(n=>{let r=t[n];e.instanceState[n]=r})}return{cssVars:n,slotNames:r,testIds:i,dispatch(t){return e.dispatchEvent(t)},events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:a}}function BF(...e){return Vc.isEmpty(e),e=>{let t=e;if(!A.isObject(t))throw TypeError(`Cannot define element with non-object init: ${String(t)}`);return VF({...t,options:{...t.options}})}}function VF(e){if(!A.isString(e.tagName))throw TypeError(`Missing valid tagName (expected a string).`);if(!A.isFunction(e.render))throw TypeError(`Failed to define element '${e.tagName}': render is not a function`);let t={...DF,...e.options},n=kF(e.tagName,e.events),r=AF(e.hostClasses);e.hostClasses&&PF(e.tagName,Object.keys(e.hostClasses)),e.cssVars&&PF(e.tagName,Object.keys(e.cssVars));let i=e.cssVars?qd(e.cssVars):{},a=IF(e.tagName,e.slotNames),o=FF(e.tagName,`test-id`,e.testIds),s=typeof e.styles==`function`?e.styles(LF({hostClassNames:r,cssVars:i,slotNamesMap:a})):e.styles||V``,c=e.render;function l(...[e]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:u,inputs:e}}let u=class extends uF{static elementOptions=t;static tagName=e.tagName;static styles=s;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return zF({element:this,eventsMap:n,cssVars:i,slotNamesMap:a,testIdsMap:o})}static assign=l;static events=n;static render=c;static hostClasses=r;static cssVars=i;static init=e;static slotNames=a;static testIds=o;static get InstanceType(){throw Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;runPreRenderCallbacks(t){if(!this._stateCalled&&e.state){this._stateCalled=!0;let n=e.state(t);if(n instanceof Promise)throw TypeError(`state cannot be asynchronous`);x(n).forEach(e=>{jF(this,e),this.instanceState[e]=n[e]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(t)instanceof Promise))throw TypeError(`init cannot be asynchronous`)}render(){this._internalRenderCount++;try{this._hasRendered=!0;let t=this.createRenderParams();this.runPreRenderCallbacks(t);let n=c(t);if(n instanceof Promise)throw TypeError(`render cannot be asynchronous`);return RF({host:t.host,hostClassesInit:e.hostClasses,hostClassNames:r,state:t.state,inputs:t.inputs}),this._lastRenderedProps={inputs:{...t.inputs},state:{...t.state}},this._lastRenderError=void 0,n}catch(n){let r=Le(n,`Failed to render ${e.tagName}`);return console.error(r),this._lastRenderError=r,t.errorHandler?.(r),S(r)}}shouldUpdate(e){return this.isConnected&&super.shouldUpdate(e)}connectedCallback(){super.connectedCallback(),this._hasRendered&&(this.runPreRenderCallbacks(this.createRenderParams()),this.requestUpdate())}destroy(){Object.values(this.instanceState).forEach(e=>{A.hasKey(e,`destroy`)&&A.isFunction(e.destroy)&&e.destroy()}),this._initCalled=!1,this._stateCalled=!1}disconnectedCallback(){super.disconnectedCallback();try{if(e.cleanup&&this._hasRendered){let t=this.createRenderParams();if(e.cleanup(t)instanceof Promise)throw TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}}finally{this.destroy()}}definition={};assignInputs(e){iF(this,e)}observablePropertyListenerMap={};instanceInputs=NF(this,!1);instanceState=NF(this,!t.allowPolymorphicState);constructor(){super(),this.definition=u}};return Object.defineProperties(u,{name:{value:Yl(e.tagName,{firstLetterCase:Kl.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,u)),u}var HF=class extends yP{isResolved(){return!(this.value instanceof Promise)&&!(this.value instanceof Error)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}};function UF(e){return new HF(e)}var WF=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},GF=MP(class extends NP{constructor(e){if(super(e),e.type!==jP.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=kP(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,d=0,f=i.length-1,p=0,m=a.length-1;for(;d<=f&&p<=m;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(s[d]===o[p])c[p]=EP(i[d],a[p]),d++,p++;else if(s[f]===o[m])c[m]=EP(i[f],a[m]),f--,m--;else if(s[d]===o[m])c[m]=EP(i[d],a[m]),TP(e,c[m+1],i[d]),d++,m--;else if(s[f]===o[p])c[p]=EP(i[f],a[p]),TP(e,i[d],i[f]),f--,p++;else if(l===void 0&&(l=WF(o,p,m),u=WF(s,d,f)),l.has(s[d])){if(l.has(s[f])){let t=u.get(o[p]),n=t===void 0?null:i[t];if(n===null){let t=TP(e,i[d]);EP(t,a[p]),c[p]=t}else c[p]=EP(n,a[p]),TP(e,i[d],n),i[t]=null;p++}else AP(i[f]),f--}else AP(i[d]),d++;for(;p<=m;){let t=TP(e,c[m+1]);EP(t,a[p]),c[p++]=t}for(;d<=f;){let e=i[d++];e!==null&&AP(e)}return this.ut=o,OP(e,c),Sd}});function KF(e,t){return JF(e,t),e.element}function qF(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function JF(e,t){let n=qF(e),r=n?`: in ${n}`:``;if(e.type!==jP.ELEMENT)throw Error(`${t} directive can only be attached directly to an element${r}.`)}function YF(e,t){return MP(class extends NP{element;constructor(t){super(t),this.element=Ic.instanceOf(KF(t,e),HTMLElement)}render(...e){return t({params:e,directive:this,element:this.element}),Sd}})}var XF=YF(`attributes`,({element:e,params:[t],directive:n})=>{if(!t)return;let r=Zc(n,`allAttributesApplied`,()=>new Set);x(t).forEach(e=>{if(e.toLowerCase()!==e)throw Error(`Cannot assign attribute name with uppercase letters: ${e}`);r.add(e)}),r.forEach(n=>{let r=t[n];r==null||r===!1||r===M?e.removeAttribute(n):r===``||r===!0?e.setAttribute(n,``):e.setAttribute(n,String(r))})});function ZF(e){let t=MP(class extends NP{element;constructor(t){super(t),this.element=KF(t,e)}render(t){return this.element.setAttribute(e,t),Sd}});return{attributeSelector(t){return`[${e}="${t}"]`},attributeDirective(e){return t(e)},attributeName:e}}function H(e,t){return QF(e,t)}var QF=MP(class extends BP{element;lastListenerMetaData;isPartDisconnected=!1;constructor(e){super(e),this.element=KF(e,`listen`)}resetListener(e){this.removeCurrentListener(),this.lastListenerMetaData=e,this.isConnected&&this.addCurrentListener()}addCurrentListener(){this.lastListenerMetaData&&this.element.addEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener)}removeCurrentListener(){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener)}isMidDispatchDisconnect(e){return!this.element.isConnected&&e.composedPath().some(e=>e instanceof Node&&e.isConnected)}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:e=>{if(!this.isPartDisconnected||this.isMidDispatchDisconnect(e))return this.lastListenerMetaData?.callback(e)}}}render(e,t){let n=typeof e==`string`?e:e.type;if(typeof n!=`string`)throw TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(n)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),Sd}disconnected(){this.isPartDisconnected=!0}reconnected(){this.isPartDisconnected=!1,this.addCurrentListener()}});function $F(e){return H(`keydown`,async t=>{let n=t.code.toLowerCase();(n.includes(`enter`)||n.includes(`return`)||n===`space`)&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}var eI=`onDomCreated`,tI=MP(class extends NP{element;constructor(e){super(e),JF(e,eI)}update(e,[t]){JF(e,eI);let n=e.element;return n!==this.element&&(window.requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),nI=`onDomRendered`,rI=MP(class extends NP{constructor(e){super(e),JF(e,nI)}update(e,[t]){JF(e,nI);let n=e.element;return window.requestAnimationFrame(()=>t(n)),this.render(t)}render(e){}}),iI=`onResize`,aI=MP(class extends BP{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&oI(this.element,this.callback,e)});callback;constructor(e){super(e),JF(e,iI)}update(e,[t]){JF(e,iI),this.callback=t;let n=e.element;return n!==this.element&&(this.element=n,this.resizeObserver.observe(n)),this.render(t)}render(e){}disconnected(){this.resizeObserver.disconnect()}reconnected(){this.element&&this.resizeObserver.observe(this.element)}});function oI(e,t,n){let r=n[0];if(!r)throw console.error(n),Error(`Resize observation triggered but the first entry was empty.`);t({target:r.target,contentRect:r.contentRect},e)}function sI(e,t,n,r,i={}){let a=i.useLastResolvedValue?e.lastResolvedValue:e.value;return a instanceof Error?r?r(a):S(a):A.isPromiseLike(a)||i.useLastResolvedValue&&a==null&&A.isPromiseLike(e.value)?t:n?n(a):a}function cI(e,t,n){return YP(e,()=>t,()=>n)}var{attributeDirective:lI,attributeSelector:uI,attributeName:dI}=ZF(`data-test-id`),fI=lI;function pI(e){let{assertInputs:t,transformInputs:n}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(e=>e)};return(...e)=>r=>{t(r);let i=n(r);if(i.tagName!==r.tagName)throw Error(`transformInputs cannot change tagName: '${r.tagName}' was transformed into '${i.tagName}'.`);return BF(...e)(i)}}function mI(e,t){return t?hI(e,t):hI(void 0,e)}var hI=MP(class extends NP{element;constructor(e){super(e),this.element=KF(e,`assign`)}render(e,t){return iF(this.element,t),Sd}}),gI=new WeakMap;function _I(e){return Xc(gI,e,()=>e.slice(0,-1).map((t,n)=>{let r=e[n+1];return!!t&&!!r&&xI({lastNewString:t,currentTemplateString:r}).shouldHaveTagNameHere}))}function vI(e,t){let n=_I(e);return n.some((e,n)=>e&&A.isString(t[n]))?t.map((e,t)=>!n[t]||!A.isString(e)?e:{tagName:e,tagInterpolationKey:Zc(hF,e,()=>({tagName:e}))}):t}var yI=/^[\s>/]/,bI=/^\s*>/;function xI({lastNewString:e,currentTemplateString:t}){let n=e.trimEnd(),r=n.endsWith(`<`)&&yI.test(t),i=n.endsWith(`</`)&&bI.test(t);return{isOpeningTag:r,shouldHaveTagNameHere:r||i}}function SI(...[e,t,n]){let r=pF(n)?n.definition:n,{isOpeningTag:i,shouldHaveTagNameHere:a}=xI({lastNewString:e,currentTemplateString:t}),o=mF(r);if(o&&a&&r.tagInterpolationKey)return{replacement:r.tagName,getExtraValues:void 0};if(a&&!o)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:r}),Error(`Got interpolated tag name but found no tag name on the given value: '${r?.tagName||r?.prototype?.constructor?.name||r?.constructor?.name}'`);if(a&&o)return{replacement:r.tagName,getExtraValues(e){let t=pF(e)?e.inputs:void 0;return[i&&t?mI(t):void 0].filter(A.isTruthy)}}}function CI(e){return wF({inputTemplateStrings:e.strings,inputValues:e.values,transformValue:SI})}function U(e,...t){let n=vI(e,t),r=CF(e,n,()=>CI({strings:e,values:n}));return xd(r.strings,...r.values)}function wI(e){if(`templateString`in e)return e.templateString;let{strings:t,values:n}=e;if(!t?.length&&!n?.length)return``;let r=[...n||[],``];return Ul((t?.length?t:[``]).map((e,t)=>`${e}${TI(e,r[t])}`).join(``))}function TI(e,t){return t==null?e.endsWith(`=`)?`""`:``:A.isObject(t)&&(`templateString`in t||t._$litType$!=null||t._$litDirective$!=null)?wI(t):Array.isArray(t)?t.map(e=>TI(``,e)).join(``):e.endsWith(`=`)?`"${t}"`:String(t)}var EI=`popover`,DI=MP(class extends BP{popoverManager;constructor(e){super(e),JF(e,EI)}update(e,[t,n]){return JF(e,EI),t!==this.popoverManager&&(this.popoverManager?.destroy(),this.popoverManager=t),t.update(Ic.instanceOf(e.element,HTMLElement),n),this.render(t,n)}render(e,t){}disconnected(){this.popoverManager?.close()}reconnected(){this.popoverManager?.applyForcedState()}}),OI;(function(e){e.a98=`a98`,e.cubehelix=`cubehelix`,e.dlab=`dlab`,e.dlch=`dlch`,e.hsi=`hsi`,e.hsl=`hsl`,e.hsv=`hsv`,e.hwb=`hwb`,e.itp=`itp`,e.jab=`jab`,e.jch=`jch`,e.lab=`lab`,e.lab65=`lab65`,e.lch=`lch`,e.lch65=`lch65`,e.lchuv=`lchuv`,e.lrgb=`lrgb`,e.luv=`luv`,e.okhsl=`okhsl`,e.okhsv=`okhsv`,e.oklab=`oklab`,e.oklch=`oklch`,e.p3=`p3`,e.prophoto=`prophoto`,e.rec2020=`rec2020`,e.rgb=`rgb`,e.xyb=`xyb`,e.xyz50=`xyz50`,e.xyz65=`xyz65`,e.yiq=`yiq`})(OI||={});var kI={rgb:{coords:{r:{min:0,max:255,factor:255},g:{min:0,max:255,factor:255},b:{min:0,max:255,factor:255}},colorSpace:`rgb`},hex:{coords:{r:{min:0,max:255,factor:255,radix:16,radixPad:2},g:{min:0,max:255,factor:255,radix:16,radixPad:2},b:{min:0,max:255,factor:255,radix:16,radixPad:2}},conversionFormat:OI.rgb,rawSyntax:`hexString`,colorSpace:`rgb`},hsl:{coords:{h:{min:0,max:360},s:{min:0,max:100,factor:100,digits:1},l:{min:0,max:100,factor:100,digits:1}},colorSpace:`rgb`},hwb:{coords:{h:{min:0,max:360},w:{min:0,max:100,factor:100,digits:1},b:{min:0,max:100,factor:100,digits:1}},colorSpace:`rgb`},lab:{coords:{l:{min:0,max:100,digits:1},a:{min:-128,max:127},b:{min:-128,max:127}},colorSpace:`lab`},lch:{coords:{l:{min:0,max:100,digits:1},c:{min:0,max:230},h:{min:0,max:360}},colorSpace:`lab`},oklab:{coords:{l:{min:0,max:1,digits:3},a:{min:-.5,max:.5,digits:3},b:{min:-.5,max:.5,digits:3}},colorSpace:`oklab`},oklch:{coords:{l:{min:0,max:1,digits:3},c:{min:0,max:.4,digits:3},h:{min:0,max:360,digits:1}},colorSpace:`oklab`}},AI=zl(kI,e=>e),jI={...AI,name:`name`,hexString:`hexString`},MI=zl(kI,(e,t)=>{let n=A.isEnumValue(e,OI)&&A.isEnumValue(e,AI)?e:`conversionFormat`in t&&t.conversionFormat&&A.isEnumValue(t.conversionFormat,OI)&&A.isEnumValue(t.conversionFormat,AI)?t.conversionFormat:void 0;return Vc.isTruthy(n,`Invalid conversion format for color format '${e}' ${y(t)}.`),{...t,colorFormat:e,conversionFormat:n,rawSyntax:Ic.isEnumValue(`rawSyntax`in t&&t.rawSyntax?t.rawSyntax:e,jI)}});tl(Hl(kI),e=>({key:e.colorSpace,value:e.colorSpace}),{useRequired:!0}),Qc(MI).reduce((e,[t,n])=>(Zc(e,n.colorSpace,()=>({}))[t]=n,e),{});function NI(e){return e.startsWith(`rgb`)?jI.rgb:e.startsWith(`hsl`)?jI.hsl:e.startsWith(`hwb`)?jI.hwb:e.startsWith(`oklab`)?jI.oklab:e.startsWith(`oklch`)?jI.oklch:e.startsWith(`lab`)?jI.lab:e.startsWith(`lch`)?jI.lch:e.startsWith(`#`)?jI.hexString:jI.name}var PI={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(let e in PI)Object.freeze(PI[e]);var FI=Object.freeze(PI),II=Object.keys(FI).reduce((e,t)=>t.length>e.length?t:e),LI=Bl(zl(FI,(e,t)=>el(Object.entries(FI),([e])=>e,(n,[,r])=>n!==e&&A.deepEquals(r,t))),(e,t)=>!!t.length),RI=Object.entries(LI).reduce((e,t)=>{let n=[e[0],...e[1]].join(`, `);return[t[0],...t[1]].join(`, `).length>n.length?t:e}).reduce((e,t)=>A.isArray(t)?[...e,...t]:[...e,t],[]),zI=Math.max(II.length,RI.length+(RI.length-1)*2),BI=(e,t)=>Math.round(e*(t=10**t))/t;((e=4)=>t=>typeof t==`number`?BI(t,e):t)(2);var VI=e=>Math.max(0,Math.min(1,e||0)),HI=e=>Math.round(VI(e)*255),UI=i(`rgb`);i(`hsl`);var WI=e=>{if(e===void 0)return;let t=HI(e.r),n=HI(e.g),r=HI(e.b);return`#`+(1<<24|t<<16|n<<8|r).toString(16).slice(1)},GI=e=>WI(UI(e));i(`rgb`);var KI=e=>{let t={mode:e.mode,r:Math.max(0,Math.min(e.r===void 0?0:e.r,1)),g:Math.max(0,Math.min(e.g===void 0?0:e.g,1)),b:Math.max(0,Math.min(e.b===void 0?0:e.b,1))};return e.alpha!==void 0&&(t.alpha=e.alpha),t},qI=e=>e!==void 0&&(e.r===void 0||e.r>=0&&e.r<=1)&&(e.g===void 0||e.g>=0&&e.g<=1)&&(e.b===void 0||e.b>=0&&e.b<=1);function JI(e=`rgb`){let{gamut:t}=o(e);if(!t)return e=>!0;let n=i(typeof t==`string`?t:e);return e=>qI(n(e))}function YI(e=`rgb`){let{gamut:t}=o(e);if(!t)return e=>r(e);let n=typeof t==`string`?t:e,a=i(n),s=JI(n);return e=>{let t=r(e);if(!t)return;let n=a(t);if(s(n))return t;let o=KI(n);return t.mode===o.mode?o:i(t.mode)(o)}}var XI=s(`rgb`),ZI=class e{constructor(e){this.set(e)}static isValidColorString(t){try{return new e(t),!0}catch{return!1}}static isColor(t){return t instanceof e}static deserialize(t){let n=JSON.parse(t),r=new e(n.hexString);return Qc(n).forEach(([e,t])=>{e===`originalColorSyntax`?r.originalColorSyntax=Ic.isEnumValue(t,jI,`Cannot deserialize: invalid color syntax.`):r._allColors[e]=t}),r}getRgbDistance(e){return XI(this.internalColor,e)}getClosestNamedColor(){return x(FI).reduce((e,t)=>{let n=this.getRgbDistance(t);return n<e.distance?{distance:n,name:t}:e},{name:``,distance:1/0}).name}toString(){return this.toCss()[this.originalColorSyntax]}originalColorSyntax=jI.hex;internalColor=Ic.isDefined(a(`black`));_allColors={names:[`black`],[jI.name]:`black`,hexString:`#000000`,[jI.hex]:{r:0,g:0,b:0},[jI.rgb]:{r:0,g:0,b:0},[jI.hsl]:{h:0,s:0,l:0},[jI.hwb]:{h:0,w:0,b:0},[jI.lab]:{l:0,a:0,b:0},[jI.lch]:{l:0,c:0,h:0},[jI.oklab]:{l:0,a:0,b:0},[jI.oklch]:{l:0,c:0,h:0}};clone(){return e.deserialize(this.serialize())}setByString(e){let t=a(e);if(!t)throw Error(`Unable to parse invalid color string: '${e}'`);this.originalColorSyntax=NI(e),this.internalColor=t,this.pullFromInternalColor()}set(e){if(A.isString(e))return this.setByString(e);if(Vc.isLengthExactly(Object.keys(e),1,`Cannot set multiple color formats at once: got '${Xl(Object.keys(e))}'`),e.hexString||e.name)this.setByString(e.hexString||e.name);else{let[t,n]=Ic.isDefined(Qc(e)[0]),r=MI[t],i=Object.values(zl(r.coords,e=>{let i=n[e],a=r.coords[Ic.isKeyOf(e,r.coords)],o=i!=null&&i>=a.min&&i<=a.max?n[e]:this[t][e];return Ic.isDefined(o)}));this.setByString(`${r.conversionFormat}(${i.join(` `)})`)}}pullFromInternalColor(){Me(AI).forEach(e=>{let t=MI[e],n=t.conversionFormat,r=A.isKeyOf(this.internalColor.mode,MI)?MI[this.internalColor.mode]:void 0,a=YI(t.colorSpace===r?.colorSpace?n:`rgb`)(i(n)(this.internalColor));a||Vc.never(`Failed to convert color '${JSON.stringify(this.internalColor)}' to '${e}'.`),x(this[e]).forEach(n=>{let r=a[n],i=t.coords[Ic.isKeyOf(n,t.coords)];r!=null&&(this._allColors[e][n]=Nl((r||0)*(i.factor||1),{digits:i.digits||0}))})}),this._allColors.hexString=GI(this.internalColor),this._allColors.names=QI(this.rgb),this._allColors[jI.name]=this._allColors.names[0]||``}serialize(){return JSON.stringify({...this.allColors,originalColorSyntax:this.originalColorSyntax})}get allColors(){return sl(this._allColors)}toFormattedStrings(){return{...zl(MI,e=>Object.values(this[e]).map(e=>String(e).padStart(6,` `)).join(` `)),names:this.names.join(`, `).padEnd(zI,` `),[jI.name]:(this.names[0]||``).padEnd(zI,` `),[jI.hexString]:this[jI.hexString]}}toCss(){return{...zl(MI,e=>`${e}(${Object.values(this[e]).join(` `)})`),[jI.hexString]:this[jI.hexString],[jI.name]:this.names[0]||``}}get names(){return sl(this._allColors.names)}get name(){return this._allColors.names[0]||``}get hexString(){return this._allColors[jI.hexString]}get hex(){return sl(this._allColors[jI.hex])}get rgb(){return sl(this._allColors[jI.rgb])}get hsl(){return sl(this._allColors[jI.hsl])}get hwb(){return sl(this._allColors[jI.hwb])}get lab(){return sl(this._allColors[jI.lab])}get lch(){return sl(this._allColors[jI.lch])}get oklab(){return sl(this._allColors[jI.oklab])}get oklch(){return sl(this._allColors[jI.oklch])}};function QI(e){return el(Qc(FI),([e])=>e,(t,[,n])=>A.deepEquals(n,[e.r,e.g,e.b]))}function $I(e){return V`
        color: ${e.foreground.value};
        background-color: ${e.background.value};
    `}var eL={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};zl(eL,e=>e),Object.fromEntries(Object.entries(eL).map(([e,t])=>[t,e]));var W;(function(e){e.SmallBodyText=`small-body`,e.BodyText=`body`,e.NonBodyText=`non-body`,e.Header=`header`,e.Placeholder=`placeholder`,e.Decoration=`decoration`,e.Invisible=`invisible`})(W||={}),W.SmallBodyText,W.BodyText,W.NonBodyText,W.Header,W.Placeholder,W.Decoration,W.Invisible,W.SmallBodyText,W.BodyText,W.NonBodyText,W.Header,W.Placeholder,W.Decoration,W.Invisible;var tL=[{min:90,name:W.SmallBodyText,description:`Perfect for all sizes of text, even small body text.`,apcaName:`small body text only`,apcaDescription:`Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color.`},{min:75,name:W.BodyText,description:`Good for regular body text and anything larger.`,apcaName:`body text okay`,apcaDescription:`The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important.`},{min:60,name:W.NonBodyText,description:`Good for legible non-body text and anything larger.`,apcaName:`fluent text only`,apcaDescription:`The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast.`},{min:45,name:W.Header,description:`Okay for large or headline text.`,apcaName:`large & sub-fluent text`,apcaDescription:`The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension.`},{min:30,name:W.Placeholder,description:`Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.`,apcaName:`spot & non text only`,apcaDescription:`The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.`},{min:15,name:W.Decoration,description:`Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.`,apcaName:`no text usage`,apcaDescription:`The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site.`},{min:0,name:W.Invisible,description:`Effectively invisible for users.`,apcaName:`invisible`,apcaDescription:`This should be treated as invisible.`}];tl(tL,e=>({key:e.min,value:e})),tl(tL,e=>({key:e.name,value:e}));function nL(e){return A.isPrimitive(e)||e instanceof Fu?String(e):e.default}function rL(e,t,n,r){let i=`${n.prefix}-default-fg`,a=`${n.prefix}-default-bg`;if(A.isPrimitive(t)||t instanceof Fu)return t;if(`refDefaultBackground`in t)return`var(--${a}, ${nL(n.background)})`;if(`refDefaultForeground`in t)return`var(--${i}, ${nL(n.foreground)})`;if(`refBackground`in t||`refForeground`in t){let o=A.hasKey(t,`refBackground`)?`refBackground`:A.hasKey(t,`refForeground`)?`refForeground`:void 0,s=o&&A.hasKey(t,o)?t[o]:void 0,c=o===`refBackground`?`background`:`foreground`,l=s&&r[s];if(!l)throw Error(`Color theme ${o} reference '${s}' does not exist. (Referenced from '${e}'.)`);let u=l[c]||(c===`foreground`?rL(i,n.foreground,n,r):rL(a,n.background,n,r));return`var(--${s}-${c===`foreground`?`fg`:`bg`}, ${rL(s,u,n,r)})`}return t.value}var iL=`theme-default`;function aL(e,t){try{if(`theme-default`in t)throw Error(`Cannot define theme color by name '${iL}', it is used internally.`);let n=`${e.prefix}-default-fg`,r=`${e.prefix}-default-bg`,i=`${e.prefix}-default-inverse-fg`,a=`${e.prefix}-default-inverse-bg`,o=qd({[n]:rL(n,e.foreground,e,t),[r]:rL(r,e.background,e,t),[i]:rL(i,e.background,e,t),[a]:rL(a,e.foreground,e,t)}),s=qd(Qc(t).reduce((i,[a,s])=>{let c=oL(a),l=s.foreground?rL([a,`foreground`].join(` `),s.foreground,e,t):`var(${o[n].name}, ${o[n].default})`,u=s.background?rL([a,`background`].join(` `),s.background,e,t):`var(${o[r].name}, ${o[r].default})`;return i[c.foreground]=l,i[c.background]=u,i[c.foregroundInverse]=`var(--${c.background}, ${u})`,i[c.backgroundInverse]=`var(--${c.foreground}, ${l})`,i},{})),c={},l={};Qc(t).forEach(([e,t])=>{Vc.isString(e);let n=oL(e),r=s[n.foreground],i=s[n.background],a=s[n.foregroundInverse],o=s[n.backgroundInverse];Vc.isDefined(r),Vc.isDefined(i),Vc.isDefined(a),Vc.isDefined(o),c[e]={foreground:r,background:i,init:t,name:e},l[e]={foreground:a,background:o,init:t,name:e}});let u={foreground:o[n],background:o[r],init:e,name:iL},d={...u,foreground:o[i],background:o[a]};return{colors:{[iL]:u,...c},inverse:{[iL]:d,...l},init:{colors:t,default:e},prefix:e.prefix}}catch(e){throw globalThis.setTimeout(()=>Ml.error(e)),e}}function oL(e){return{foreground:[e,`fg`].join(`-`),background:[e,`bg`].join(`-`),foregroundInverse:[e,`inverse`,`fg`].join(`-`),backgroundInverse:[e,`inverse`,`bg`].join(`-`)}}var sL=qd({"vira-monospace":`monospace`,"vira-font-weight-normal":`normal`,"vira-font-weight-medium":`500`,"vira-font-weight-bold":`600`}),G=qd({"vira-red-100":`#FFF6F5`,"vira-red-150":`#FFEDEB`,"vira-red-200":`#FFE4E1`,"vira-red-250":`#FFDCD8`,"vira-red-300":`#FFD1CB`,"vira-red-350":`#FFC1B8`,"vira-red-400":`#FFA79B`,"vira-red-450":`#FF8274`,"vira-red-500":`#FF564A`,"vira-red-550":`#F43A32`,"vira-red-600":`#E2322C`,"vira-red-650":`#D02C27`,"vira-red-700":`#BB2520`,"vira-red-750":`#9E231D`,"vira-red-800":`#82211A`,"vira-red-850":`#701A13`,"vira-red-900":`#611710`,"vira-red-950":`#52140D`,"vira-red-1000":`#43130D`,"vira-yellow-100":`#FEF9E4`,"vira-yellow-150":`#FDF2D1`,"vira-yellow-200":`#FDEABF`,"vira-yellow-250":`#FEE2AD`,"vira-yellow-300":`#FDD89B`,"vira-yellow-350":`#FAC986`,"vira-yellow-400":`#EFB669`,"vira-yellow-450":`#E29D34`,"vira-yellow-500":`#CE8800`,"vira-yellow-550":`#BB7B00`,"vira-yellow-600":`#AC7100`,"vira-yellow-650":`#9E6800`,"vira-yellow-700":`#8C5C00`,"vira-yellow-750":`#794D00`,"vira-yellow-800":`#683E00`,"vira-yellow-850":`#5B3301`,"vira-yellow-900":`#502A05`,"vira-yellow-950":`#442308`,"vira-yellow-1000":`#381D0B`,"vira-green-100":`#EBFFEE`,"vira-green-150":`#DDFBE2`,"vira-green-200":`#CDF8D6`,"vira-green-250":`#BFF5CC`,"vira-green-300":`#AFF0C0`,"vira-green-350":`#9AE8B1`,"vira-green-400":`#7FD99C`,"vira-green-450":`#52C87F`,"vira-green-500":`#1BB565`,"vira-green-550":`#04A559`,"vira-green-600":`#009852`,"vira-green-650":`#008C4A`,"vira-green-700":`#007C41`,"vira-green-750":`#016A38`,"vira-green-800":`#095831`,"vira-green-850":`#024B29`,"vira-green-900":`#014024`,"vira-green-950":`#02371F`,"vira-green-1000":`#062D1B`,"vira-teal-100":`#E8FEFD`,"vira-teal-150":`#D9FAF8`,"vira-teal-200":`#C9F6F3`,"vira-teal-250":`#BAF2ED`,"vira-teal-300":`#A9EDE6`,"vira-teal-350":`#95E4DB`,"vira-teal-400":`#79D5CA`,"vira-teal-450":`#47C3B7`,"vira-teal-500":`#00B0A4`,"vira-teal-550":`#00A094`,"vira-teal-600":`#009389`,"vira-teal-650":`#00877D`,"vira-teal-700":`#00786F`,"vira-teal-750":`#00665F`,"vira-teal-800":`#01554F`,"vira-teal-850":`#004843`,"vira-teal-900":`#003E3A`,"vira-teal-950":`#033531`,"vira-teal-1000":`#072B29`,"vira-blue-100":`#F5F9FF`,"vira-blue-150":`#EAF3FF`,"vira-blue-200":`#E0EDFF`,"vira-blue-250":`#D6E7FF`,"vira-blue-300":`#CBDFFF`,"vira-blue-350":`#B9D4FF`,"vira-blue-400":`#9EC3FF`,"vira-blue-450":`#7AADFF`,"vira-blue-500":`#5697FF`,"vira-blue-550":`#4988ED`,"vira-blue-600":`#427DDC`,"vira-blue-650":`#3B72CA`,"vira-blue-700":`#3365B6`,"vira-blue-750":`#2D569A`,"vira-blue-800":`#27487E`,"vira-blue-850":`#203D6C`,"vira-blue-900":`#1B345D`,"vira-blue-950":`#172C4F`,"vira-blue-1000":`#142540`,"vira-brand-100":`#F5F9FF`,"vira-brand-150":`#EAF3FF`,"vira-brand-200":`#E0EDFF`,"vira-brand-250":`#D6E7FF`,"vira-brand-300":`#CBDFFF`,"vira-brand-350":`#B9D4FF`,"vira-brand-400":`#9EC3FF`,"vira-brand-450":`#7AADFF`,"vira-brand-500":`#5697FF`,"vira-brand-550":`#4988ED`,"vira-brand-600":`#427DDC`,"vira-brand-650":`#3B72CA`,"vira-brand-700":`#3365B6`,"vira-brand-750":`#2D569A`,"vira-brand-800":`#27487E`,"vira-brand-850":`#203D6C`,"vira-brand-900":`#1B345D`,"vira-brand-950":`#172C4F`,"vira-brand-1000":`#142540`,"vira-purple-100":`#F9F7FF`,"vira-purple-150":`#F3EFFF`,"vira-purple-200":`#EDE8FF`,"vira-purple-250":`#E6E1FF`,"vira-purple-300":`#DED8FF`,"vira-purple-350":`#D2CBFF`,"vira-purple-400":`#C1B7FF`,"vira-purple-450":`#AD9BFF`,"vira-purple-500":`#9B80FF`,"vira-purple-550":`#8D6EF4`,"vira-purple-600":`#8265E3`,"vira-purple-650":`#775BD1`,"vira-purple-700":`#6A50BB`,"vira-purple-750":`#5A459E`,"vira-purple-800":`#4A3B82`,"vira-purple-850":`#3E3170`,"vira-purple-900":`#352A61`,"vira-purple-950":`#2D2452`,"vira-purple-1000":`#251F43`,"vira-pink-100":`#FEF5FF`,"vira-pink-150":`#FFEAFF`,"vira-pink-200":`#FFE0FC`,"vira-pink-250":`#FFD7F8`,"vira-pink-300":`#FFCBF2`,"vira-pink-350":`#FFB9E9`,"vira-pink-400":`#FF9BDF`,"vira-pink-450":`#FF6DD6`,"vira-pink-500":`#F04AC5`,"vira-pink-550":`#DD3EB4`,"vira-pink-600":`#CC37A7`,"vira-pink-650":`#BC3099`,"vira-pink-700":`#A82988`,"vira-pink-750":`#8F2674`,"vira-pink-800":`#752361`,"vira-pink-850":`#641C53`,"vira-pink-900":`#561848`,"vira-pink-950":`#49153E`,"vira-pink-1000":`#3B1333`,"vira-grey-100":`#F9F9F9`,"vira-grey-150":`#F2F2F2`,"vira-grey-200":`#EBEBEB`,"vira-grey-250":`#E5E5E5`,"vira-grey-300":`#DEDEDE`,"vira-grey-350":`#D2D2D2`,"vira-grey-400":`#C2C2C2`,"vira-grey-450":`#ADADAD`,"vira-grey-500":`#999999`,"vira-grey-550":`#8A8A8A`,"vira-grey-600":`#7F7F7F`,"vira-grey-650":`#747474`,"vira-grey-700":`#676767`,"vira-grey-750":`#585858`,"vira-grey-800":`#494949`,"vira-grey-850":`#3E3E3E`,"vira-grey-900":`#353535`,"vira-grey-950":`#2D2D2D`,"vira-grey-1000":`#252525`});function cL({originalTheme:e,layerKey:t,themeColor:n,override:r,overrideValues:i}){let a=r?.[t];a&&(i[String(n[t].name)]=String(rL(t,a,e.init.default,e.init.colors)))}function lL(e,t,{defaultOverride:n,colorOverrides:r}){let i={};n&&x(n).forEach(t=>{cL({originalTheme:e,layerKey:t,override:n,themeColor:e.colors[iL],overrideValues:i})});let a={};r&&Qc(r).forEach(([t,n])=>{let r=e.colors[t];if(!r)throw Error(`Override color name '${t}' does not exist in the theme being overridden.`);cL({originalTheme:e,layerKey:`foreground`,override:n,themeColor:r,overrideValues:a}),cL({originalTheme:e,layerKey:`background`,override:n,themeColor:r,overrideValues:a})});let o=zl(e.init.colors,(e,t)=>{let n=r?.[e];return{...t,...n}}),s=aL({...e.init.default,...n},o);return{name:t,overrides:{...i,...a},originalTheme:e,asTheme:s}}var K=aL({foreground:`black`,background:`white`,prefix:`vira`},{"vira-red-foreground-highest-contrast":{foreground:G[`vira-red-1000`]},"vira-red-foreground-small-body":{foreground:G[`vira-red-1000`]},"vira-red-foreground-body":{foreground:G[`vira-red-750`]},"vira-red-foreground-non-body":{foreground:G[`vira-red-650`]},"vira-red-foreground-header":{foreground:G[`vira-red-500`]},"vira-red-foreground-placeholder":{foreground:G[`vira-red-400`]},"vira-red-foreground-decoration":{foreground:G[`vira-red-350`]},"vira-red-foreground-invisible":{foreground:G[`vira-red-250`]},"vira-red-foreground-lowest-contrast":{foreground:G[`vira-red-100`]},"vira-red-behind-bg-highest-contrast":{foreground:{refDefaultBackground:!0},background:G[`vira-red-1000`]},"vira-red-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:G[`vira-red-1000`]},"vira-red-behind-bg-body":{foreground:{refDefaultBackground:!0},background:G[`vira-red-700`]},"vira-red-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:G[`vira-red-600`]},"vira-red-behind-bg-header":{foreground:{refDefaultBackground:!0},background:G[`vira-red-450`]},"vira-red-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:G[`vira-red-400`]},"vira-red-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:G[`vira-red-350`]},"vira-red-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:G[`vira-red-200`]},"vira-red-behind-bg-lowest-contrast":{foreground:{refDefaultBackground:!0},background:G[`vira-red-100`]},"vira-red-behind-fg-highest-contrast":{background:G[`vira-red-100`]},"vira-red-behind-fg-small-body":{background:G[`vira-red-250`]},"vira-red-behind-fg-body":{background:G[`vira-red-350`]},"vira-red-behind-fg-non-body":{background:G[`vira-red-400`]},"vira-red-behind-fg-header":{background:G[`vira-red-500`]},"vira-red-behind-fg-placeholder":{background:G[`vira-red-650`]},"vira-red-behind-fg-decoration":{background:G[`vira-red-750`]},"vira-red-behind-fg-invisible":{background:G[`vira-red-1000`]},"vira-red-behind-fg-lowest-contrast":{background:G[`vira-red-1000`]},"vira-red-on-self-highest-contrast":{foreground:G[`vira-red-850`],background:G[`vira-red-100`]},"vira-red-on-self-small-body":{foreground:G[`vira-red-850`],background:G[`vira-red-100`]},"vira-red-on-self-body":{foreground:G[`vira-red-850`],background:G[`vira-red-250`]},"vira-red-on-self-non-body":{foreground:G[`vira-red-850`],background:G[`vira-red-350`]},"vira-red-on-self-header":{foreground:G[`vira-red-850`],background:G[`vira-red-450`]},"vira-red-on-self-placeholder":{foreground:G[`vira-red-850`],background:G[`vira-red-500`]},"vira-red-on-self-decoration":{foreground:G[`vira-red-850`],background:G[`vira-red-650`]},"vira-red-on-self-invisible":{foreground:G[`vira-red-850`],background:G[`vira-red-1000`]},"vira-red-on-self-lowest-contrast":{foreground:G[`vira-red-850`],background:G[`vira-red-1000`]},"vira-yellow-foreground-highest-contrast":{foreground:G[`vira-yellow-1000`]},"vira-yellow-foreground-small-body":{foreground:G[`vira-yellow-1000`]},"vira-yellow-foreground-body":{foreground:G[`vira-yellow-750`]},"vira-yellow-foreground-non-body":{foreground:G[`vira-yellow-650`]},"vira-yellow-foreground-header":{foreground:G[`vira-yellow-500`]},"vira-yellow-foreground-placeholder":{foreground:G[`vira-yellow-400`]},"vira-yellow-foreground-decoration":{foreground:G[`vira-yellow-350`]},"vira-yellow-foreground-invisible":{foreground:G[`vira-yellow-250`]},"vira-yellow-foreground-lowest-contrast":{foreground:G[`vira-yellow-100`]},"vira-yellow-behind-bg-highest-contrast":{foreground:{refDefaultBackground:!0},background:G[`vira-yellow-1000`]},"vira-yellow-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:G[`vira-yellow-1000`]},"vira-yellow-behind-bg-body":{foreground:{refDefaultBackground:!0},background:G[`vira-yellow-700`]},"vira-yellow-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:G[`vira-yellow-600`]},"vira-yellow-behind-bg-header":{foreground:{refDefaultBackground:!0},background:G[`vira-yellow-450`]},"vira-yellow-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:G[`vira-yellow-400`]},"vira-yellow-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:G[`vira-yellow-350`]},"vira-yellow-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:G[`vira-yellow-250`]},"vira-yellow-behind-bg-lowest-contrast":{foreground:{refDefaultBackground:!0},background:G[`vira-yellow-100`]},"vira-yellow-behind-fg-highest-contrast":{background:G[`vira-yellow-100`]},"vira-yellow-behind-fg-small-body":{background:G[`vira-yellow-250`]},"vira-yellow-behind-fg-body":{background:G[`vira-yellow-350`]},"vira-yellow-behind-fg-non-body":{background:G[`vira-yellow-400`]},"vira-yellow-behind-fg-header":{background:G[`vira-yellow-500`]},"vira-yellow-behind-fg-placeholder":{background:G[`vira-yellow-650`]},"vira-yellow-behind-fg-decoration":{background:G[`vira-yellow-750`]},"vira-yellow-behind-fg-invisible":{background:G[`vira-yellow-1000`]},"vira-yellow-behind-fg-lowest-contrast":{background:G[`vira-yellow-1000`]},"vira-yellow-on-self-highest-contrast":{foreground:G[`vira-yellow-850`],background:G[`vira-yellow-100`]},"vira-yellow-on-self-small-body":{foreground:G[`vira-yellow-850`],background:G[`vira-yellow-100`]},"vira-yellow-on-self-body":{foreground:G[`vira-yellow-850`],background:G[`vira-yellow-300`]},"vira-yellow-on-self-non-body":{foreground:G[`vira-yellow-850`],background:G[`vira-yellow-350`]},"vira-yellow-on-self-header":{foreground:G[`vira-yellow-850`],background:G[`vira-yellow-450`]},"vira-yellow-on-self-placeholder":{foreground:G[`vira-yellow-850`],background:G[`vira-yellow-550`]},"vira-yellow-on-self-decoration":{foreground:G[`vira-yellow-850`],background:G[`vira-yellow-650`]},"vira-yellow-on-self-invisible":{foreground:G[`vira-yellow-850`],background:G[`vira-yellow-1000`]},"vira-yellow-on-self-lowest-contrast":{foreground:G[`vira-yellow-850`],background:G[`vira-yellow-1000`]},"vira-green-foreground-highest-contrast":{foreground:G[`vira-green-1000`]},"vira-green-foreground-small-body":{foreground:G[`vira-green-1000`]},"vira-green-foreground-body":{foreground:G[`vira-green-800`]},"vira-green-foreground-non-body":{foreground:G[`vira-green-650`]},"vira-green-foreground-header":{foreground:G[`vira-green-550`]},"vira-green-foreground-placeholder":{foreground:G[`vira-green-450`]},"vira-green-foreground-decoration":{foreground:G[`vira-green-350`]},"vira-green-foreground-invisible":{foreground:G[`vira-green-250`]},"vira-green-foreground-lowest-contrast":{foreground:G[`vira-green-100`]},"vira-green-behind-bg-highest-contrast":{foreground:{refDefaultBackground:!0},background:G[`vira-green-1000`]},"vira-green-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:G[`vira-green-1000`]},"vira-green-behind-bg-body":{foreground:{refDefaultBackground:!0},background:G[`vira-green-750`]},"vira-green-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:G[`vira-green-650`]},"vira-green-behind-bg-header":{foreground:{refDefaultBackground:!0},background:G[`vira-green-500`]},"vira-green-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:G[`vira-green-400`]},"vira-green-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:G[`vira-green-350`]},"vira-green-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:G[`vira-green-250`]},"vira-green-behind-bg-lowest-contrast":{foreground:{refDefaultBackground:!0},background:G[`vira-green-100`]},"vira-green-behind-fg-highest-contrast":{background:G[`vira-green-100`]},"vira-green-behind-fg-small-body":{background:G[`vira-green-250`]},"vira-green-behind-fg-body":{background:G[`vira-green-350`]},"vira-green-behind-fg-non-body":{background:G[`vira-green-450`]},"vira-green-behind-fg-header":{background:G[`vira-green-550`]},"vira-green-behind-fg-placeholder":{background:G[`vira-green-650`]},"vira-green-behind-fg-decoration":{background:G[`vira-green-800`]},"vira-green-behind-fg-invisible":{background:G[`vira-green-1000`]},"vira-green-behind-fg-lowest-contrast":{background:G[`vira-green-1000`]},"vira-green-on-self-highest-contrast":{foreground:G[`vira-green-850`],background:G[`vira-green-100`]},"vira-green-on-self-small-body":{foreground:G[`vira-green-850`],background:G[`vira-green-100`]},"vira-green-on-self-body":{foreground:G[`vira-green-850`],background:G[`vira-green-300`]},"vira-green-on-self-non-body":{foreground:G[`vira-green-850`],background:G[`vira-green-400`]},"vira-green-on-self-header":{foreground:G[`vira-green-850`],background:G[`vira-green-450`]},"vira-green-on-self-placeholder":{foreground:G[`vira-green-850`],background:G[`vira-green-550`]},"vira-green-on-self-decoration":{foreground:G[`vira-green-850`],background:G[`vira-green-700`]},"vira-green-on-self-invisible":{foreground:G[`vira-green-850`],background:G[`vira-green-1000`]},"vira-green-on-self-lowest-contrast":{foreground:G[`vira-green-850`],background:G[`vira-green-1000`]},"vira-teal-foreground-highest-contrast":{foreground:G[`vira-teal-1000`]},"vira-teal-foreground-small-body":{foreground:G[`vira-teal-1000`]},"vira-teal-foreground-body":{foreground:G[`vira-teal-800`]},"vira-teal-foreground-non-body":{foreground:G[`vira-teal-650`]},"vira-teal-foreground-header":{foreground:G[`vira-teal-550`]},"vira-teal-foreground-placeholder":{foreground:G[`vira-teal-450`]},"vira-teal-foreground-decoration":{foreground:G[`vira-teal-350`]},"vira-teal-foreground-invisible":{foreground:G[`vira-teal-250`]},"vira-teal-foreground-lowest-contrast":{foreground:G[`vira-teal-100`]},"vira-teal-behind-bg-highest-contrast":{foreground:{refDefaultBackground:!0},background:G[`vira-teal-1000`]},"vira-teal-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:G[`vira-teal-1000`]},"vira-teal-behind-bg-body":{foreground:{refDefaultBackground:!0},background:G[`vira-teal-750`]},"vira-teal-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:G[`vira-teal-600`]},"vira-teal-behind-bg-header":{foreground:{refDefaultBackground:!0},background:G[`vira-teal-500`]},"vira-teal-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:G[`vira-teal-400`]},"vira-teal-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:G[`vira-teal-350`]},"vira-teal-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:G[`vira-teal-250`]},"vira-teal-behind-bg-lowest-contrast":{foreground:{refDefaultBackground:!0},background:G[`vira-teal-100`]},"vira-teal-behind-fg-highest-contrast":{background:G[`vira-teal-100`]},"vira-teal-behind-fg-small-body":{background:G[`vira-teal-250`]},"vira-teal-behind-fg-body":{background:G[`vira-teal-350`]},"vira-teal-behind-fg-non-body":{background:G[`vira-teal-450`]},"vira-teal-behind-fg-header":{background:G[`vira-teal-500`]},"vira-teal-behind-fg-placeholder":{background:G[`vira-teal-650`]},"vira-teal-behind-fg-decoration":{background:G[`vira-teal-750`]},"vira-teal-behind-fg-invisible":{background:G[`vira-teal-1000`]},"vira-teal-behind-fg-lowest-contrast":{background:G[`vira-teal-1000`]},"vira-teal-on-self-highest-contrast":{foreground:G[`vira-teal-850`],background:G[`vira-teal-100`]},"vira-teal-on-self-small-body":{foreground:G[`vira-teal-850`],background:G[`vira-teal-100`]},"vira-teal-on-self-body":{foreground:G[`vira-teal-850`],background:G[`vira-teal-300`]},"vira-teal-on-self-non-body":{foreground:G[`vira-teal-850`],background:G[`vira-teal-400`]},"vira-teal-on-self-header":{foreground:G[`vira-teal-850`],background:G[`vira-teal-450`]},"vira-teal-on-self-placeholder":{foreground:G[`vira-teal-850`],background:G[`vira-teal-550`]},"vira-teal-on-self-decoration":{foreground:G[`vira-teal-850`],background:G[`vira-teal-700`]},"vira-teal-on-self-invisible":{foreground:G[`vira-teal-850`],background:G[`vira-teal-1000`]},"vira-teal-on-self-lowest-contrast":{foreground:G[`vira-teal-850`],background:G[`vira-teal-1000`]},"vira-blue-foreground-highest-contrast":{foreground:G[`vira-blue-1000`]},"vira-blue-foreground-small-body":{foreground:G[`vira-blue-1000`]},"vira-blue-foreground-body":{foreground:G[`vira-blue-750`]},"vira-blue-foreground-non-body":{foreground:G[`vira-blue-650`]},"vira-blue-foreground-header":{foreground:G[`vira-blue-500`]},"vira-blue-foreground-placeholder":{foreground:G[`vira-blue-450`]},"vira-blue-foreground-decoration":{foreground:G[`vira-blue-350`]},"vira-blue-foreground-invisible":{foreground:G[`vira-blue-250`]},"vira-blue-foreground-lowest-contrast":{foreground:G[`vira-blue-100`]},"vira-blue-behind-bg-highest-contrast":{foreground:{refDefaultBackground:!0},background:G[`vira-blue-1000`]},"vira-blue-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:G[`vira-blue-1000`]},"vira-blue-behind-bg-body":{foreground:{refDefaultBackground:!0},background:G[`vira-blue-750`]},"vira-blue-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:G[`vira-blue-600`]},"vira-blue-behind-bg-header":{foreground:{refDefaultBackground:!0},background:G[`vira-blue-450`]},"vira-blue-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:G[`vira-blue-400`]},"vira-blue-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:G[`vira-blue-350`]},"vira-blue-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:G[`vira-blue-250`]},"vira-blue-behind-bg-lowest-contrast":{foreground:{refDefaultBackground:!0},background:G[`vira-blue-100`]},"vira-blue-behind-fg-highest-contrast":{background:G[`vira-blue-100`]},"vira-blue-behind-fg-small-body":{background:G[`vira-blue-250`]},"vira-blue-behind-fg-body":{background:G[`vira-blue-350`]},"vira-blue-behind-fg-non-body":{background:G[`vira-blue-400`]},"vira-blue-behind-fg-header":{background:G[`vira-blue-500`]},"vira-blue-behind-fg-placeholder":{background:G[`vira-blue-650`]},"vira-blue-behind-fg-decoration":{background:G[`vira-blue-750`]},"vira-blue-behind-fg-invisible":{background:G[`vira-blue-1000`]},"vira-blue-behind-fg-lowest-contrast":{background:G[`vira-blue-1000`]},"vira-blue-on-self-highest-contrast":{foreground:G[`vira-blue-850`],background:G[`vira-blue-100`]},"vira-blue-on-self-small-body":{foreground:G[`vira-blue-850`],background:G[`vira-blue-100`]},"vira-blue-on-self-body":{foreground:G[`vira-blue-850`],background:G[`vira-blue-300`]},"vira-blue-on-self-non-body":{foreground:G[`vira-blue-850`],background:G[`vira-blue-350`]},"vira-blue-on-self-header":{foreground:G[`vira-blue-850`],background:G[`vira-blue-450`]},"vira-blue-on-self-placeholder":{foreground:G[`vira-blue-850`],background:G[`vira-blue-550`]},"vira-blue-on-self-decoration":{foreground:G[`vira-blue-850`],background:G[`vira-blue-650`]},"vira-blue-on-self-invisible":{foreground:G[`vira-blue-850`],background:G[`vira-blue-1000`]},"vira-blue-on-self-lowest-contrast":{foreground:G[`vira-blue-850`],background:G[`vira-blue-1000`]},"vira-brand-foreground-highest-contrast":{foreground:G[`vira-brand-1000`]},"vira-brand-foreground-small-body":{foreground:G[`vira-brand-1000`]},"vira-brand-foreground-body":{foreground:G[`vira-brand-750`]},"vira-brand-foreground-non-body":{foreground:G[`vira-brand-650`]},"vira-brand-foreground-header":{foreground:G[`vira-brand-500`]},"vira-brand-foreground-placeholder":{foreground:G[`vira-brand-450`]},"vira-brand-foreground-decoration":{foreground:G[`vira-brand-350`]},"vira-brand-foreground-invisible":{foreground:G[`vira-brand-250`]},"vira-brand-foreground-lowest-contrast":{foreground:G[`vira-brand-100`]},"vira-brand-behind-bg-highest-contrast":{foreground:{refDefaultBackground:!0},background:G[`vira-brand-1000`]},"vira-brand-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:G[`vira-brand-1000`]},"vira-brand-behind-bg-body":{foreground:{refDefaultBackground:!0},background:G[`vira-brand-750`]},"vira-brand-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:G[`vira-brand-600`]},"vira-brand-behind-bg-header":{foreground:{refDefaultBackground:!0},background:G[`vira-brand-450`]},"vira-brand-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:G[`vira-brand-400`]},"vira-brand-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:G[`vira-brand-350`]},"vira-brand-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:G[`vira-brand-250`]},"vira-brand-behind-bg-lowest-contrast":{foreground:{refDefaultBackground:!0},background:G[`vira-brand-100`]},"vira-brand-behind-fg-highest-contrast":{background:G[`vira-brand-100`]},"vira-brand-behind-fg-small-body":{background:G[`vira-brand-250`]},"vira-brand-behind-fg-body":{background:G[`vira-brand-350`]},"vira-brand-behind-fg-non-body":{background:G[`vira-brand-400`]},"vira-brand-behind-fg-header":{background:G[`vira-brand-500`]},"vira-brand-behind-fg-placeholder":{background:G[`vira-brand-650`]},"vira-brand-behind-fg-decoration":{background:G[`vira-brand-750`]},"vira-brand-behind-fg-invisible":{background:G[`vira-brand-1000`]},"vira-brand-behind-fg-lowest-contrast":{background:G[`vira-brand-1000`]},"vira-brand-on-self-highest-contrast":{foreground:G[`vira-brand-850`],background:G[`vira-brand-100`]},"vira-brand-on-self-small-body":{foreground:G[`vira-brand-850`],background:G[`vira-brand-100`]},"vira-brand-on-self-body":{foreground:G[`vira-brand-850`],background:G[`vira-brand-300`]},"vira-brand-on-self-non-body":{foreground:G[`vira-brand-850`],background:G[`vira-brand-350`]},"vira-brand-on-self-header":{foreground:G[`vira-brand-850`],background:G[`vira-brand-450`]},"vira-brand-on-self-placeholder":{foreground:G[`vira-brand-850`],background:G[`vira-brand-550`]},"vira-brand-on-self-decoration":{foreground:G[`vira-brand-850`],background:G[`vira-brand-650`]},"vira-brand-on-self-invisible":{foreground:G[`vira-brand-850`],background:G[`vira-brand-1000`]},"vira-brand-on-self-lowest-contrast":{foreground:G[`vira-brand-850`],background:G[`vira-brand-1000`]},"vira-purple-foreground-highest-contrast":{foreground:G[`vira-purple-1000`]},"vira-purple-foreground-small-body":{foreground:G[`vira-purple-1000`]},"vira-purple-foreground-body":{foreground:G[`vira-purple-750`]},"vira-purple-foreground-non-body":{foreground:G[`vira-purple-650`]},"vira-purple-foreground-header":{foreground:G[`vira-purple-500`]},"vira-purple-foreground-placeholder":{foreground:G[`vira-purple-400`]},"vira-purple-foreground-decoration":{foreground:G[`vira-purple-350`]},"vira-purple-foreground-invisible":{foreground:G[`vira-purple-250`]},"vira-purple-foreground-lowest-contrast":{foreground:G[`vira-purple-100`]},"vira-purple-behind-bg-highest-contrast":{foreground:{refDefaultBackground:!0},background:G[`vira-purple-1000`]},"vira-purple-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:G[`vira-purple-1000`]},"vira-purple-behind-bg-body":{foreground:{refDefaultBackground:!0},background:G[`vira-purple-700`]},"vira-purple-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:G[`vira-purple-600`]},"vira-purple-behind-bg-header":{foreground:{refDefaultBackground:!0},background:G[`vira-purple-450`]},"vira-purple-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:G[`vira-purple-400`]},"vira-purple-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:G[`vira-purple-350`]},"vira-purple-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:G[`vira-purple-200`]},"vira-purple-behind-bg-lowest-contrast":{foreground:{refDefaultBackground:!0},background:G[`vira-purple-100`]},"vira-purple-behind-fg-highest-contrast":{background:G[`vira-purple-100`]},"vira-purple-behind-fg-small-body":{background:G[`vira-purple-250`]},"vira-purple-behind-fg-body":{background:G[`vira-purple-350`]},"vira-purple-behind-fg-non-body":{background:G[`vira-purple-400`]},"vira-purple-behind-fg-header":{background:G[`vira-purple-500`]},"vira-purple-behind-fg-placeholder":{background:G[`vira-purple-600`]},"vira-purple-behind-fg-decoration":{background:G[`vira-purple-750`]},"vira-purple-behind-fg-invisible":{background:G[`vira-purple-1000`]},"vira-purple-behind-fg-lowest-contrast":{background:G[`vira-purple-1000`]},"vira-purple-on-self-highest-contrast":{foreground:G[`vira-purple-850`],background:G[`vira-purple-100`]},"vira-purple-on-self-small-body":{foreground:G[`vira-purple-850`],background:G[`vira-purple-100`]},"vira-purple-on-self-body":{foreground:G[`vira-purple-850`],background:G[`vira-purple-300`]},"vira-purple-on-self-non-body":{foreground:G[`vira-purple-850`],background:G[`vira-purple-350`]},"vira-purple-on-self-header":{foreground:G[`vira-purple-850`],background:G[`vira-purple-450`]},"vira-purple-on-self-placeholder":{foreground:G[`vira-purple-850`],background:G[`vira-purple-500`]},"vira-purple-on-self-decoration":{foreground:G[`vira-purple-850`],background:G[`vira-purple-650`]},"vira-purple-on-self-invisible":{foreground:G[`vira-purple-850`],background:G[`vira-purple-1000`]},"vira-purple-on-self-lowest-contrast":{foreground:G[`vira-purple-850`],background:G[`vira-purple-1000`]},"vira-pink-foreground-highest-contrast":{foreground:G[`vira-pink-1000`]},"vira-pink-foreground-small-body":{foreground:G[`vira-pink-1000`]},"vira-pink-foreground-body":{foreground:G[`vira-pink-750`]},"vira-pink-foreground-non-body":{foreground:G[`vira-pink-650`]},"vira-pink-foreground-header":{foreground:G[`vira-pink-500`]},"vira-pink-foreground-placeholder":{foreground:G[`vira-pink-400`]},"vira-pink-foreground-decoration":{foreground:G[`vira-pink-350`]},"vira-pink-foreground-invisible":{foreground:G[`vira-pink-250`]},"vira-pink-foreground-lowest-contrast":{foreground:G[`vira-pink-100`]},"vira-pink-behind-bg-highest-contrast":{foreground:{refDefaultBackground:!0},background:G[`vira-pink-1000`]},"vira-pink-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:G[`vira-pink-1000`]},"vira-pink-behind-bg-body":{foreground:{refDefaultBackground:!0},background:G[`vira-pink-700`]},"vira-pink-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:G[`vira-pink-550`]},"vira-pink-behind-bg-header":{foreground:{refDefaultBackground:!0},background:G[`vira-pink-450`]},"vira-pink-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:G[`vira-pink-400`]},"vira-pink-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:G[`vira-pink-350`]},"vira-pink-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:G[`vira-pink-200`]},"vira-pink-behind-bg-lowest-contrast":{foreground:{refDefaultBackground:!0},background:G[`vira-pink-100`]},"vira-pink-behind-fg-highest-contrast":{background:G[`vira-pink-100`]},"vira-pink-behind-fg-small-body":{background:G[`vira-pink-200`]},"vira-pink-behind-fg-body":{background:G[`vira-pink-350`]},"vira-pink-behind-fg-non-body":{background:G[`vira-pink-400`]},"vira-pink-behind-fg-header":{background:G[`vira-pink-500`]},"vira-pink-behind-fg-placeholder":{background:G[`vira-pink-600`]},"vira-pink-behind-fg-decoration":{background:G[`vira-pink-750`]},"vira-pink-behind-fg-invisible":{background:G[`vira-pink-1000`]},"vira-pink-behind-fg-lowest-contrast":{background:G[`vira-pink-1000`]},"vira-pink-on-self-highest-contrast":{foreground:G[`vira-pink-850`],background:G[`vira-pink-100`]},"vira-pink-on-self-small-body":{foreground:G[`vira-pink-850`],background:G[`vira-pink-100`]},"vira-pink-on-self-body":{foreground:G[`vira-pink-850`],background:G[`vira-pink-250`]},"vira-pink-on-self-non-body":{foreground:G[`vira-pink-850`],background:G[`vira-pink-350`]},"vira-pink-on-self-header":{foreground:G[`vira-pink-850`],background:G[`vira-pink-450`]},"vira-pink-on-self-placeholder":{foreground:G[`vira-pink-850`],background:G[`vira-pink-500`]},"vira-pink-on-self-decoration":{foreground:G[`vira-pink-850`],background:G[`vira-pink-650`]},"vira-pink-on-self-invisible":{foreground:G[`vira-pink-850`],background:G[`vira-pink-1000`]},"vira-pink-on-self-lowest-contrast":{foreground:G[`vira-pink-850`],background:G[`vira-pink-1000`]},"vira-grey-foreground-highest-contrast":{foreground:G[`vira-grey-1000`]},"vira-grey-foreground-small-body":{foreground:G[`vira-grey-1000`]},"vira-grey-foreground-body":{foreground:G[`vira-grey-750`]},"vira-grey-foreground-non-body":{foreground:G[`vira-grey-650`]},"vira-grey-foreground-header":{foreground:G[`vira-grey-500`]},"vira-grey-foreground-placeholder":{foreground:G[`vira-grey-450`]},"vira-grey-foreground-decoration":{foreground:G[`vira-grey-350`]},"vira-grey-foreground-invisible":{foreground:G[`vira-grey-250`]},"vira-grey-foreground-lowest-contrast":{foreground:G[`vira-grey-100`]},"vira-grey-behind-bg-highest-contrast":{foreground:{refDefaultBackground:!0},background:G[`vira-grey-1000`]},"vira-grey-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:G[`vira-grey-1000`]},"vira-grey-behind-bg-body":{foreground:{refDefaultBackground:!0},background:G[`vira-grey-750`]},"vira-grey-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:G[`vira-grey-600`]},"vira-grey-behind-bg-header":{foreground:{refDefaultBackground:!0},background:G[`vira-grey-500`]},"vira-grey-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:G[`vira-grey-400`]},"vira-grey-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:G[`vira-grey-350`]},"vira-grey-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:G[`vira-grey-250`]},"vira-grey-behind-bg-lowest-contrast":{foreground:{refDefaultBackground:!0},background:G[`vira-grey-100`]},"vira-grey-behind-fg-highest-contrast":{background:G[`vira-grey-100`]},"vira-grey-behind-fg-small-body":{background:G[`vira-grey-250`]},"vira-grey-behind-fg-body":{background:G[`vira-grey-350`]},"vira-grey-behind-fg-non-body":{background:G[`vira-grey-400`]},"vira-grey-behind-fg-header":{background:G[`vira-grey-500`]},"vira-grey-behind-fg-placeholder":{background:G[`vira-grey-650`]},"vira-grey-behind-fg-decoration":{background:G[`vira-grey-750`]},"vira-grey-behind-fg-invisible":{background:G[`vira-grey-1000`]},"vira-grey-behind-fg-lowest-contrast":{background:G[`vira-grey-1000`]},"vira-grey-on-self-highest-contrast":{foreground:G[`vira-grey-850`],background:G[`vira-grey-100`]},"vira-grey-on-self-small-body":{foreground:G[`vira-grey-850`],background:G[`vira-grey-100`]},"vira-grey-on-self-body":{foreground:G[`vira-grey-850`],background:G[`vira-grey-300`]},"vira-grey-on-self-non-body":{foreground:G[`vira-grey-850`],background:G[`vira-grey-350`]},"vira-grey-on-self-header":{foreground:G[`vira-grey-850`],background:G[`vira-grey-450`]},"vira-grey-on-self-placeholder":{foreground:G[`vira-grey-850`],background:G[`vira-grey-550`]},"vira-grey-on-self-decoration":{foreground:G[`vira-grey-850`],background:G[`vira-grey-650`]},"vira-grey-on-self-invisible":{foreground:G[`vira-grey-850`],background:G[`vira-grey-1000`]},"vira-grey-on-self-lowest-contrast":{foreground:G[`vira-grey-850`],background:G[`vira-grey-1000`]}}),uL=lL(K,`dark`,{defaultOverride:{foreground:`white`,background:`black`},colorOverrides:{"vira-red-foreground-highest-contrast":{foreground:G[`vira-red-100`]},"vira-red-foreground-small-body":{foreground:G[`vira-red-250`]},"vira-red-foreground-body":{foreground:G[`vira-red-350`]},"vira-red-foreground-non-body":{foreground:G[`vira-red-400`]},"vira-red-foreground-header":{foreground:G[`vira-red-450`]},"vira-red-foreground-placeholder":{foreground:G[`vira-red-600`]},"vira-red-foreground-decoration":{foreground:G[`vira-red-750`]},"vira-red-foreground-invisible":{foreground:G[`vira-red-1000`]},"vira-red-foreground-lowest-contrast":{foreground:G[`vira-red-1000`]},"vira-red-behind-bg-highest-contrast":{background:G[`vira-red-100`]},"vira-red-behind-bg-small-body":{background:G[`vira-red-250`]},"vira-red-behind-bg-body":{background:G[`vira-red-350`]},"vira-red-behind-bg-non-body":{background:G[`vira-red-400`]},"vira-red-behind-bg-header":{background:G[`vira-red-500`]},"vira-red-behind-bg-placeholder":{background:G[`vira-red-650`]},"vira-red-behind-bg-decoration":{background:G[`vira-red-750`]},"vira-red-behind-bg-invisible":{background:G[`vira-red-1000`]},"vira-red-behind-bg-lowest-contrast":{background:G[`vira-red-1000`]},"vira-red-behind-fg-highest-contrast":{background:G[`vira-red-1000`]},"vira-red-behind-fg-small-body":{background:G[`vira-red-1000`]},"vira-red-behind-fg-body":{background:G[`vira-red-700`]},"vira-red-behind-fg-non-body":{background:G[`vira-red-600`]},"vira-red-behind-fg-header":{background:G[`vira-red-450`]},"vira-red-behind-fg-placeholder":{background:G[`vira-red-400`]},"vira-red-behind-fg-decoration":{background:G[`vira-red-350`]},"vira-red-behind-fg-invisible":{background:G[`vira-red-200`]},"vira-red-behind-fg-lowest-contrast":{background:G[`vira-red-100`]},"vira-red-on-self-highest-contrast":{foreground:G[`vira-red-200`],background:G[`vira-red-1000`]},"vira-red-on-self-small-body":{foreground:G[`vira-red-200`],background:G[`vira-red-1000`]},"vira-red-on-self-body":{foreground:G[`vira-red-200`],background:G[`vira-red-750`]},"vira-red-on-self-non-body":{foreground:G[`vira-red-200`],background:G[`vira-red-600`]},"vira-red-on-self-header":{foreground:G[`vira-red-200`],background:G[`vira-red-500`]},"vira-red-on-self-placeholder":{foreground:G[`vira-red-200`],background:G[`vira-red-450`]},"vira-red-on-self-decoration":{foreground:G[`vira-red-200`],background:G[`vira-red-400`]},"vira-red-on-self-invisible":{foreground:G[`vira-red-200`],background:G[`vira-red-100`]},"vira-red-on-self-lowest-contrast":{foreground:G[`vira-red-200`],background:G[`vira-red-100`]},"vira-yellow-foreground-highest-contrast":{foreground:G[`vira-yellow-100`]},"vira-yellow-foreground-small-body":{foreground:G[`vira-yellow-250`]},"vira-yellow-foreground-body":{foreground:G[`vira-yellow-350`]},"vira-yellow-foreground-non-body":{foreground:G[`vira-yellow-400`]},"vira-yellow-foreground-placeholder":{foreground:G[`vira-yellow-600`]},"vira-yellow-foreground-decoration":{foreground:G[`vira-yellow-750`]},"vira-yellow-foreground-invisible":{foreground:G[`vira-yellow-1000`]},"vira-yellow-foreground-lowest-contrast":{foreground:G[`vira-yellow-1000`]},"vira-yellow-behind-bg-highest-contrast":{background:G[`vira-yellow-100`]},"vira-yellow-behind-bg-small-body":{background:G[`vira-yellow-250`]},"vira-yellow-behind-bg-body":{background:G[`vira-yellow-350`]},"vira-yellow-behind-bg-non-body":{background:G[`vira-yellow-400`]},"vira-yellow-behind-bg-header":{background:G[`vira-yellow-500`]},"vira-yellow-behind-bg-placeholder":{background:G[`vira-yellow-650`]},"vira-yellow-behind-bg-decoration":{background:G[`vira-yellow-750`]},"vira-yellow-behind-bg-invisible":{background:G[`vira-yellow-1000`]},"vira-yellow-behind-bg-lowest-contrast":{background:G[`vira-yellow-1000`]},"vira-yellow-behind-fg-highest-contrast":{background:G[`vira-yellow-1000`]},"vira-yellow-behind-fg-small-body":{background:G[`vira-yellow-1000`]},"vira-yellow-behind-fg-body":{background:G[`vira-yellow-700`]},"vira-yellow-behind-fg-non-body":{background:G[`vira-yellow-600`]},"vira-yellow-behind-fg-header":{background:G[`vira-yellow-450`]},"vira-yellow-behind-fg-placeholder":{background:G[`vira-yellow-400`]},"vira-yellow-behind-fg-decoration":{background:G[`vira-yellow-350`]},"vira-yellow-behind-fg-invisible":{background:G[`vira-yellow-250`]},"vira-yellow-behind-fg-lowest-contrast":{background:G[`vira-yellow-100`]},"vira-yellow-on-self-highest-contrast":{foreground:G[`vira-yellow-200`],background:G[`vira-yellow-1000`]},"vira-yellow-on-self-small-body":{foreground:G[`vira-yellow-200`],background:G[`vira-yellow-950`]},"vira-yellow-on-self-body":{foreground:G[`vira-yellow-200`],background:G[`vira-yellow-750`]},"vira-yellow-on-self-non-body":{foreground:G[`vira-yellow-200`],background:G[`vira-yellow-600`]},"vira-yellow-on-self-header":{foreground:G[`vira-yellow-200`],background:G[`vira-yellow-500`]},"vira-yellow-on-self-placeholder":{foreground:G[`vira-yellow-200`],background:G[`vira-yellow-450`]},"vira-yellow-on-self-decoration":{foreground:G[`vira-yellow-200`],background:G[`vira-yellow-400`]},"vira-yellow-on-self-invisible":{foreground:G[`vira-yellow-200`],background:G[`vira-yellow-100`]},"vira-yellow-on-self-lowest-contrast":{foreground:G[`vira-yellow-200`],background:G[`vira-yellow-100`]},"vira-green-foreground-highest-contrast":{foreground:G[`vira-green-100`]},"vira-green-foreground-small-body":{foreground:G[`vira-green-250`]},"vira-green-foreground-body":{foreground:G[`vira-green-350`]},"vira-green-foreground-non-body":{foreground:G[`vira-green-450`]},"vira-green-foreground-header":{foreground:G[`vira-green-500`]},"vira-green-foreground-placeholder":{foreground:G[`vira-green-650`]},"vira-green-foreground-decoration":{foreground:G[`vira-green-750`]},"vira-green-foreground-invisible":{foreground:G[`vira-green-1000`]},"vira-green-foreground-lowest-contrast":{foreground:G[`vira-green-1000`]},"vira-green-behind-bg-highest-contrast":{background:G[`vira-green-100`]},"vira-green-behind-bg-small-body":{background:G[`vira-green-250`]},"vira-green-behind-bg-body":{background:G[`vira-green-350`]},"vira-green-behind-bg-non-body":{background:G[`vira-green-450`]},"vira-green-behind-bg-header":{background:G[`vira-green-550`]},"vira-green-behind-bg-placeholder":{background:G[`vira-green-650`]},"vira-green-behind-bg-decoration":{background:G[`vira-green-800`]},"vira-green-behind-bg-invisible":{background:G[`vira-green-1000`]},"vira-green-behind-bg-lowest-contrast":{background:G[`vira-green-1000`]},"vira-green-behind-fg-highest-contrast":{background:G[`vira-green-1000`]},"vira-green-behind-fg-small-body":{background:G[`vira-green-1000`]},"vira-green-behind-fg-body":{background:G[`vira-green-750`]},"vira-green-behind-fg-non-body":{background:G[`vira-green-650`]},"vira-green-behind-fg-header":{background:G[`vira-green-500`]},"vira-green-behind-fg-placeholder":{background:G[`vira-green-400`]},"vira-green-behind-fg-decoration":{background:G[`vira-green-350`]},"vira-green-behind-fg-invisible":{background:G[`vira-green-250`]},"vira-green-behind-fg-lowest-contrast":{background:G[`vira-green-100`]},"vira-green-on-self-highest-contrast":{foreground:G[`vira-green-200`],background:G[`vira-green-1000`]},"vira-green-on-self-small-body":{foreground:G[`vira-green-200`],background:G[`vira-green-950`]},"vira-green-on-self-body":{foreground:G[`vira-green-200`],background:G[`vira-green-750`]},"vira-green-on-self-non-body":{foreground:G[`vira-green-200`],background:G[`vira-green-650`]},"vira-green-on-self-header":{foreground:G[`vira-green-200`],background:G[`vira-green-500`]},"vira-green-on-self-placeholder":{foreground:G[`vira-green-200`],background:G[`vira-green-450`]},"vira-green-on-self-decoration":{foreground:G[`vira-green-200`],background:G[`vira-green-400`]},"vira-green-on-self-invisible":{foreground:G[`vira-green-200`],background:G[`vira-green-100`]},"vira-green-on-self-lowest-contrast":{foreground:G[`vira-green-200`],background:G[`vira-green-100`]},"vira-teal-foreground-highest-contrast":{foreground:G[`vira-teal-100`]},"vira-teal-foreground-small-body":{foreground:G[`vira-teal-250`]},"vira-teal-foreground-body":{foreground:G[`vira-teal-350`]},"vira-teal-foreground-non-body":{foreground:G[`vira-teal-450`]},"vira-teal-foreground-header":{foreground:G[`vira-teal-500`]},"vira-teal-foreground-placeholder":{foreground:G[`vira-teal-650`]},"vira-teal-foreground-decoration":{foreground:G[`vira-teal-750`]},"vira-teal-foreground-invisible":{foreground:G[`vira-teal-1000`]},"vira-teal-foreground-lowest-contrast":{foreground:G[`vira-teal-1000`]},"vira-teal-behind-bg-highest-contrast":{background:G[`vira-teal-100`]},"vira-teal-behind-bg-small-body":{background:G[`vira-teal-250`]},"vira-teal-behind-bg-body":{background:G[`vira-teal-350`]},"vira-teal-behind-bg-non-body":{background:G[`vira-teal-450`]},"vira-teal-behind-bg-placeholder":{background:G[`vira-teal-650`]},"vira-teal-behind-bg-decoration":{background:G[`vira-teal-750`]},"vira-teal-behind-bg-invisible":{background:G[`vira-teal-1000`]},"vira-teal-behind-bg-lowest-contrast":{background:G[`vira-teal-1000`]},"vira-teal-behind-fg-highest-contrast":{background:G[`vira-teal-1000`]},"vira-teal-behind-fg-small-body":{background:G[`vira-teal-1000`]},"vira-teal-behind-fg-body":{background:G[`vira-teal-750`]},"vira-teal-behind-fg-non-body":{background:G[`vira-teal-600`]},"vira-teal-behind-fg-placeholder":{background:G[`vira-teal-400`]},"vira-teal-behind-fg-decoration":{background:G[`vira-teal-350`]},"vira-teal-behind-fg-invisible":{background:G[`vira-teal-250`]},"vira-teal-behind-fg-lowest-contrast":{background:G[`vira-teal-100`]},"vira-teal-on-self-highest-contrast":{foreground:G[`vira-teal-200`],background:G[`vira-teal-1000`]},"vira-teal-on-self-small-body":{foreground:G[`vira-teal-200`],background:G[`vira-teal-950`]},"vira-teal-on-self-body":{foreground:G[`vira-teal-200`],background:G[`vira-teal-750`]},"vira-teal-on-self-non-body":{foreground:G[`vira-teal-200`],background:G[`vira-teal-650`]},"vira-teal-on-self-header":{foreground:G[`vira-teal-200`],background:G[`vira-teal-500`]},"vira-teal-on-self-placeholder":{foreground:G[`vira-teal-200`],background:G[`vira-teal-450`]},"vira-teal-on-self-decoration":{foreground:G[`vira-teal-200`],background:G[`vira-teal-400`]},"vira-teal-on-self-invisible":{foreground:G[`vira-teal-200`],background:G[`vira-teal-100`]},"vira-teal-on-self-lowest-contrast":{foreground:G[`vira-teal-200`],background:G[`vira-teal-100`]},"vira-blue-foreground-highest-contrast":{foreground:G[`vira-blue-100`]},"vira-blue-foreground-small-body":{foreground:G[`vira-blue-250`]},"vira-blue-foreground-body":{foreground:G[`vira-blue-350`]},"vira-blue-foreground-non-body":{foreground:G[`vira-blue-400`]},"vira-blue-foreground-placeholder":{foreground:G[`vira-blue-600`]},"vira-blue-foreground-decoration":{foreground:G[`vira-blue-750`]},"vira-blue-foreground-invisible":{foreground:G[`vira-blue-1000`]},"vira-blue-foreground-lowest-contrast":{foreground:G[`vira-blue-1000`]},"vira-blue-behind-bg-highest-contrast":{background:G[`vira-blue-100`]},"vira-blue-behind-bg-small-body":{background:G[`vira-blue-250`]},"vira-blue-behind-bg-body":{background:G[`vira-blue-350`]},"vira-blue-behind-bg-non-body":{background:G[`vira-blue-400`]},"vira-blue-behind-bg-header":{background:G[`vira-blue-500`]},"vira-blue-behind-bg-placeholder":{background:G[`vira-blue-650`]},"vira-blue-behind-bg-decoration":{background:G[`vira-blue-750`]},"vira-blue-behind-bg-invisible":{background:G[`vira-blue-1000`]},"vira-blue-behind-bg-lowest-contrast":{background:G[`vira-blue-1000`]},"vira-blue-behind-fg-highest-contrast":{background:G[`vira-blue-1000`]},"vira-blue-behind-fg-small-body":{background:G[`vira-blue-1000`]},"vira-blue-behind-fg-body":{background:G[`vira-blue-750`]},"vira-blue-behind-fg-non-body":{background:G[`vira-blue-600`]},"vira-blue-behind-fg-header":{background:G[`vira-blue-450`]},"vira-blue-behind-fg-placeholder":{background:G[`vira-blue-400`]},"vira-blue-behind-fg-decoration":{background:G[`vira-blue-350`]},"vira-blue-behind-fg-invisible":{background:G[`vira-blue-250`]},"vira-blue-behind-fg-lowest-contrast":{background:G[`vira-blue-100`]},"vira-blue-on-self-highest-contrast":{foreground:G[`vira-blue-200`],background:G[`vira-blue-1000`]},"vira-blue-on-self-small-body":{foreground:G[`vira-blue-200`],background:G[`vira-blue-950`]},"vira-blue-on-self-body":{foreground:G[`vira-blue-200`],background:G[`vira-blue-750`]},"vira-blue-on-self-non-body":{foreground:G[`vira-blue-200`],background:G[`vira-blue-600`]},"vira-blue-on-self-header":{foreground:G[`vira-blue-200`],background:G[`vira-blue-500`]},"vira-blue-on-self-placeholder":{foreground:G[`vira-blue-200`],background:G[`vira-blue-450`]},"vira-blue-on-self-decoration":{foreground:G[`vira-blue-200`],background:G[`vira-blue-400`]},"vira-blue-on-self-invisible":{foreground:G[`vira-blue-200`],background:G[`vira-blue-100`]},"vira-blue-on-self-lowest-contrast":{foreground:G[`vira-blue-200`],background:G[`vira-blue-100`]},"vira-brand-foreground-highest-contrast":{foreground:G[`vira-brand-100`]},"vira-brand-foreground-small-body":{foreground:G[`vira-brand-250`]},"vira-brand-foreground-body":{foreground:G[`vira-brand-350`]},"vira-brand-foreground-non-body":{foreground:G[`vira-brand-400`]},"vira-brand-foreground-placeholder":{foreground:G[`vira-brand-600`]},"vira-brand-foreground-decoration":{foreground:G[`vira-brand-750`]},"vira-brand-foreground-invisible":{foreground:G[`vira-brand-1000`]},"vira-brand-foreground-lowest-contrast":{foreground:G[`vira-brand-1000`]},"vira-brand-behind-bg-highest-contrast":{background:G[`vira-brand-100`]},"vira-brand-behind-bg-small-body":{background:G[`vira-brand-250`]},"vira-brand-behind-bg-body":{background:G[`vira-brand-350`]},"vira-brand-behind-bg-non-body":{background:G[`vira-brand-400`]},"vira-brand-behind-bg-header":{background:G[`vira-brand-500`]},"vira-brand-behind-bg-placeholder":{background:G[`vira-brand-650`]},"vira-brand-behind-bg-decoration":{background:G[`vira-brand-750`]},"vira-brand-behind-bg-invisible":{background:G[`vira-brand-1000`]},"vira-brand-behind-bg-lowest-contrast":{background:G[`vira-brand-1000`]},"vira-brand-behind-fg-highest-contrast":{background:G[`vira-brand-1000`]},"vira-brand-behind-fg-small-body":{background:G[`vira-brand-1000`]},"vira-brand-behind-fg-body":{background:G[`vira-brand-750`]},"vira-brand-behind-fg-non-body":{background:G[`vira-brand-600`]},"vira-brand-behind-fg-header":{background:G[`vira-brand-450`]},"vira-brand-behind-fg-placeholder":{background:G[`vira-brand-400`]},"vira-brand-behind-fg-decoration":{background:G[`vira-brand-350`]},"vira-brand-behind-fg-invisible":{background:G[`vira-brand-250`]},"vira-brand-behind-fg-lowest-contrast":{background:G[`vira-brand-100`]},"vira-brand-on-self-highest-contrast":{foreground:G[`vira-brand-200`],background:G[`vira-brand-1000`]},"vira-brand-on-self-small-body":{foreground:G[`vira-brand-200`],background:G[`vira-brand-950`]},"vira-brand-on-self-body":{foreground:G[`vira-brand-200`],background:G[`vira-brand-750`]},"vira-brand-on-self-non-body":{foreground:G[`vira-brand-200`],background:G[`vira-brand-600`]},"vira-brand-on-self-header":{foreground:G[`vira-brand-200`],background:G[`vira-brand-500`]},"vira-brand-on-self-placeholder":{foreground:G[`vira-brand-200`],background:G[`vira-brand-450`]},"vira-brand-on-self-decoration":{foreground:G[`vira-brand-200`],background:G[`vira-brand-400`]},"vira-brand-on-self-invisible":{foreground:G[`vira-brand-200`],background:G[`vira-brand-100`]},"vira-brand-on-self-lowest-contrast":{foreground:G[`vira-brand-200`],background:G[`vira-brand-100`]},"vira-purple-foreground-highest-contrast":{foreground:G[`vira-purple-100`]},"vira-purple-foreground-small-body":{foreground:G[`vira-purple-250`]},"vira-purple-foreground-body":{foreground:G[`vira-purple-350`]},"vira-purple-foreground-non-body":{foreground:G[`vira-purple-400`]},"vira-purple-foreground-header":{foreground:G[`vira-purple-450`]},"vira-purple-foreground-placeholder":{foreground:G[`vira-purple-600`]},"vira-purple-foreground-decoration":{foreground:G[`vira-purple-750`]},"vira-purple-foreground-invisible":{foreground:G[`vira-purple-1000`]},"vira-purple-foreground-lowest-contrast":{foreground:G[`vira-purple-1000`]},"vira-purple-behind-bg-highest-contrast":{background:G[`vira-purple-100`]},"vira-purple-behind-bg-small-body":{background:G[`vira-purple-250`]},"vira-purple-behind-bg-body":{background:G[`vira-purple-350`]},"vira-purple-behind-bg-non-body":{background:G[`vira-purple-400`]},"vira-purple-behind-bg-header":{background:G[`vira-purple-500`]},"vira-purple-behind-bg-placeholder":{background:G[`vira-purple-600`]},"vira-purple-behind-bg-decoration":{background:G[`vira-purple-750`]},"vira-purple-behind-bg-invisible":{background:G[`vira-purple-1000`]},"vira-purple-behind-bg-lowest-contrast":{background:G[`vira-purple-1000`]},"vira-purple-behind-fg-highest-contrast":{background:G[`vira-purple-1000`]},"vira-purple-behind-fg-small-body":{background:G[`vira-purple-1000`]},"vira-purple-behind-fg-body":{background:G[`vira-purple-700`]},"vira-purple-behind-fg-non-body":{background:G[`vira-purple-600`]},"vira-purple-behind-fg-header":{background:G[`vira-purple-450`]},"vira-purple-behind-fg-placeholder":{background:G[`vira-purple-400`]},"vira-purple-behind-fg-decoration":{background:G[`vira-purple-350`]},"vira-purple-behind-fg-invisible":{background:G[`vira-purple-200`]},"vira-purple-behind-fg-lowest-contrast":{background:G[`vira-purple-100`]},"vira-purple-on-self-highest-contrast":{foreground:G[`vira-purple-200`],background:G[`vira-purple-1000`]},"vira-purple-on-self-small-body":{foreground:G[`vira-purple-200`],background:G[`vira-purple-950`]},"vira-purple-on-self-body":{foreground:G[`vira-purple-200`],background:G[`vira-purple-750`]},"vira-purple-on-self-non-body":{foreground:G[`vira-purple-200`],background:G[`vira-purple-600`]},"vira-purple-on-self-header":{foreground:G[`vira-purple-200`],background:G[`vira-purple-500`]},"vira-purple-on-self-placeholder":{foreground:G[`vira-purple-200`],background:G[`vira-purple-450`]},"vira-purple-on-self-decoration":{foreground:G[`vira-purple-200`],background:G[`vira-purple-400`]},"vira-purple-on-self-invisible":{foreground:G[`vira-purple-200`],background:G[`vira-purple-100`]},"vira-purple-on-self-lowest-contrast":{foreground:G[`vira-purple-200`],background:G[`vira-purple-100`]},"vira-pink-foreground-highest-contrast":{foreground:G[`vira-pink-100`]},"vira-pink-foreground-small-body":{foreground:G[`vira-pink-200`]},"vira-pink-foreground-body":{foreground:G[`vira-pink-350`]},"vira-pink-foreground-non-body":{foreground:G[`vira-pink-400`]},"vira-pink-foreground-header":{foreground:G[`vira-pink-450`]},"vira-pink-foreground-placeholder":{foreground:G[`vira-pink-600`]},"vira-pink-foreground-decoration":{foreground:G[`vira-pink-750`]},"vira-pink-foreground-invisible":{foreground:G[`vira-pink-1000`]},"vira-pink-foreground-lowest-contrast":{foreground:G[`vira-pink-1000`]},"vira-pink-behind-bg-highest-contrast":{background:G[`vira-pink-100`]},"vira-pink-behind-bg-small-body":{background:G[`vira-pink-200`]},"vira-pink-behind-bg-body":{background:G[`vira-pink-350`]},"vira-pink-behind-bg-non-body":{background:G[`vira-pink-400`]},"vira-pink-behind-bg-header":{background:G[`vira-pink-500`]},"vira-pink-behind-bg-placeholder":{background:G[`vira-pink-600`]},"vira-pink-behind-bg-decoration":{background:G[`vira-pink-750`]},"vira-pink-behind-bg-invisible":{background:G[`vira-pink-1000`]},"vira-pink-behind-bg-lowest-contrast":{background:G[`vira-pink-1000`]},"vira-pink-behind-fg-highest-contrast":{background:G[`vira-pink-1000`]},"vira-pink-behind-fg-small-body":{background:G[`vira-pink-1000`]},"vira-pink-behind-fg-body":{background:G[`vira-pink-700`]},"vira-pink-behind-fg-non-body":{background:G[`vira-pink-550`]},"vira-pink-behind-fg-header":{background:G[`vira-pink-450`]},"vira-pink-behind-fg-placeholder":{background:G[`vira-pink-400`]},"vira-pink-behind-fg-decoration":{background:G[`vira-pink-350`]},"vira-pink-behind-fg-invisible":{background:G[`vira-pink-200`]},"vira-pink-behind-fg-lowest-contrast":{background:G[`vira-pink-100`]},"vira-pink-on-self-highest-contrast":{foreground:G[`vira-pink-200`],background:G[`vira-pink-1000`]},"vira-pink-on-self-small-body":{foreground:G[`vira-pink-200`],background:G[`vira-pink-1000`]},"vira-pink-on-self-body":{foreground:G[`vira-pink-200`],background:G[`vira-pink-750`]},"vira-pink-on-self-non-body":{foreground:G[`vira-pink-200`],background:G[`vira-pink-600`]},"vira-pink-on-self-header":{foreground:G[`vira-pink-200`],background:G[`vira-pink-500`]},"vira-pink-on-self-placeholder":{foreground:G[`vira-pink-200`],background:G[`vira-pink-450`]},"vira-pink-on-self-decoration":{foreground:G[`vira-pink-200`],background:G[`vira-pink-350`]},"vira-pink-on-self-invisible":{foreground:G[`vira-pink-200`],background:G[`vira-pink-100`]},"vira-pink-on-self-lowest-contrast":{foreground:G[`vira-pink-200`],background:G[`vira-pink-100`]},"vira-grey-foreground-highest-contrast":{foreground:G[`vira-grey-100`]},"vira-grey-foreground-small-body":{foreground:G[`vira-grey-250`]},"vira-grey-foreground-body":{foreground:G[`vira-grey-350`]},"vira-grey-foreground-non-body":{foreground:G[`vira-grey-400`]},"vira-grey-foreground-placeholder":{foreground:G[`vira-grey-600`]},"vira-grey-foreground-decoration":{foreground:G[`vira-grey-750`]},"vira-grey-foreground-invisible":{foreground:G[`vira-grey-1000`]},"vira-grey-foreground-lowest-contrast":{foreground:G[`vira-grey-1000`]},"vira-grey-behind-bg-highest-contrast":{background:G[`vira-grey-100`]},"vira-grey-behind-bg-small-body":{background:G[`vira-grey-250`]},"vira-grey-behind-bg-body":{background:G[`vira-grey-350`]},"vira-grey-behind-bg-non-body":{background:G[`vira-grey-400`]},"vira-grey-behind-bg-placeholder":{background:G[`vira-grey-650`]},"vira-grey-behind-bg-decoration":{background:G[`vira-grey-750`]},"vira-grey-behind-bg-invisible":{background:G[`vira-grey-1000`]},"vira-grey-behind-bg-lowest-contrast":{background:G[`vira-grey-1000`]},"vira-grey-behind-fg-highest-contrast":{background:G[`vira-grey-1000`]},"vira-grey-behind-fg-small-body":{background:G[`vira-grey-1000`]},"vira-grey-behind-fg-body":{background:G[`vira-grey-750`]},"vira-grey-behind-fg-non-body":{background:G[`vira-grey-600`]},"vira-grey-behind-fg-placeholder":{background:G[`vira-grey-400`]},"vira-grey-behind-fg-decoration":{background:G[`vira-grey-350`]},"vira-grey-behind-fg-invisible":{background:G[`vira-grey-250`]},"vira-grey-behind-fg-lowest-contrast":{background:G[`vira-grey-100`]},"vira-grey-on-self-highest-contrast":{foreground:G[`vira-grey-200`],background:G[`vira-grey-1000`]},"vira-grey-on-self-small-body":{foreground:G[`vira-grey-200`],background:G[`vira-grey-950`]},"vira-grey-on-self-body":{foreground:G[`vira-grey-200`],background:G[`vira-grey-750`]},"vira-grey-on-self-non-body":{foreground:G[`vira-grey-200`],background:G[`vira-grey-650`]},"vira-grey-on-self-header":{foreground:G[`vira-grey-200`],background:G[`vira-grey-500`]},"vira-grey-on-self-placeholder":{foreground:G[`vira-grey-200`],background:G[`vira-grey-450`]},"vira-grey-on-self-decoration":{foreground:G[`vira-grey-200`],background:G[`vira-grey-400`]},"vira-grey-on-self-invisible":{foreground:G[`vira-grey-200`],background:G[`vira-grey-100`]},"vira-grey-on-self-lowest-contrast":{foreground:G[`vira-grey-200`],background:G[`vira-grey-100`]}}}),dL=`6px`,q=qd({"vira-form-border-color":K.colors[`vira-grey-foreground-decoration`].foreground.value,"vira-form-placeholder-color":K.colors[`vira-grey-foreground-placeholder`].foreground.value,"vira-form-background-color":K.colors[iL].background.value,"vira-form-foreground-color":K.colors[iL].foreground.value,"vira-form-modal-backdrop-color":`rgba(0, 0, 0, 0.35)`,"vira-form-secondary-body-foreground":K.colors[`vira-grey-foreground-header`].foreground.value,"vira-form-text-selection-color":K.colors[`vira-brand-behind-bg-decoration`].background.value,"vira-form-selection-hover-color":K.colors[`vira-brand-behind-bg-invisible`].background.value,"vira-form-selection-active-color":K.colors[`vira-brand-behind-bg-decoration`].background.value,"vira-form-error-color":K.colors[`vira-red-behind-bg-non-body`].background.value,"vira-form-error-hover-color":K.colors[`vira-red-behind-bg-header`].background.value,"vira-form-error-active-color":K.colors[`vira-red-behind-bg-body`].background.value,"vira-form-warning-color":K.colors[`vira-yellow-behind-bg-non-body`].background.value,"vira-form-warning-hover-color":K.colors[`vira-yellow-behind-bg-header`].background.value,"vira-form-warning-active-color":K.colors[`vira-yellow-behind-bg-body`].background.value,"vira-form-positive-color":K.colors[`vira-green-behind-bg-non-body`].background.value,"vira-form-positive-hover-color":K.colors[`vira-green-behind-bg-header`].background.value,"vira-form-positive-active-color":K.colors[`vira-green-behind-bg-body`].background.value,"vira-form-success-color":K.colors[`vira-green-behind-bg-non-body`].background.value,"vira-form-label-font-weight":sL[`vira-font-weight-bold`].value,"vira-form-small-text-size":`12px`,"vira-form-medium-text-size":`14px`,"vira-form-large-text-size":`16px`,"vira-form-radius":dL,"vira-form-wrapper-radius":`12px`,"vira-form-focus-outline-color":K.colors[`vira-brand-foreground-header`].foreground.value,"vira-form-focus-outline-border-radius":V`calc(var(--vira-form-radius, ${j(dL)}) + 2px)`,"vira-form-plain-color":G[`vira-grey-100`].value,"vira-form-plain-hover-color":K.colors[`vira-grey-foreground-invisible`].foreground.value,"vira-form-plain-active-color":K.colors[`vira-grey-foreground-decoration`].foreground.value,"vira-form-accent-primary-color":K.colors[`vira-brand-behind-bg-non-body`].background.value,"vira-form-accent-primary-hover-color":K.colors[`vira-brand-behind-bg-header`].background.value,"vira-form-accent-primary-active-color":K.colors[`vira-brand-behind-bg-body`].background.value,"vira-form-danger-color":K.colors[`vira-red-behind-bg-non-body`].background.value,"vira-form-danger-hover-color":K.colors[`vira-red-behind-bg-header`].background.value,"vira-form-danger-active-color":K.colors[`vira-red-behind-bg-body`].background.value,"vira-form-filled-background-color":K.colors[`vira-grey-foreground-invisible`].foreground.value,"vira-form-filled-active-background-color":K.colors[`vira-grey-foreground-decoration`].foreground.value}),fL=`retry-position`;function pL({name:e,flipBlock:t}){return t?`--${e} flip-block`:`--${e}`}function mL({selector:e,fallbacks:t}){let n=t.map(e=>pL(e)),r=j(fL);return V`
        /*
            Anchored through showPopover({source}).
        */
        ${j(e||`:host`)} {
            /*
                position-anchor is set explicitly because its initial value differs between browsers.
            */
            position-anchor: auto;
            /* Override the browser's default popover styles. */
            position: fixed;
            inset: auto;
            margin: 0;
            padding: 0;
            border: none;
            height: auto;
            overflow: visible;
            background: none;
            color: inherit;

            position-try-fallbacks: ${j(n.join(`, `)||`none`)};
        }

        /*
            Browsers keep using the last position-try-fallbacks entry that fit until it no longer
            fits, even when an earlier entry fits again, so without this the popover would not return
            to its default position after a resize or scroll. Changing the computed
            position-try-fallbacks value is what makes browsers start over from the first entry, so
            this repeats an entry, which does not change the result.
        */
        ${e?V`
                  ${j(e)}.${r}
              `:j(`:host(.${fL})`)} {
            position-try-fallbacks: ${j([...n,...n.slice(-1)].join(`, `)||`none`)};
        }

        ${j(t.map(({name:e,styles:t})=>`@position-try --${e} {${t.cssText}}`).join(`
`))}
    `}var hL=`vira-`,gL=pI({assertInputs(e){if(!e.tagName.startsWith(`vira-`))throw Error(`Tag name should start with '${hL}' but got '${e.tagName}'`)}});async function _L(e=1){let t=new Ve;function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return n(),t.promise}function vL(e,t){return{element:e,children:yL({startingElement:e,maxDepth:t??0,currentDepth:0})}}function yL({startingElement:e,maxDepth:t,currentDepth:n}){return bL(e).map(e=>{let r=n+1;return{element:e,children:t&&r>=Math.abs(t)?[]:yL({startingElement:e,maxDepth:t,currentDepth:r})}})}function bL(e){return[...e.children,...e.shadowRoot?.children??[]]}function xL(e){return e.matches(`:focus`)}function SL(e,t,n={}){let r=n.useOriginalTarget?e.target:e.currentTarget;if(!(r instanceof t)){let i=t.name,a=r?.constructor.name,o=n.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${a}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${a}'.`;throw Error(o)}return r}function CL(e,t){if(!e.isConnected)return t(),()=>{};let n=new MutationObserver(async()=>{e.isConnected||(n.disconnect(),await t())});return n.observe(document.body,{childList:!0,subtree:!0}),()=>n.disconnect()}function wL(e){let t=0,n=document.activeElement||void 0;for(;n;){if(e({depth:t,element:n}))return t;n=n.shadowRoot?.activeElement||void 0,n&&++t}return t}function TL(e,t){return e>t}function EL(e,t){return e<t}function DL(e){e.scrollIntoView({behavior:`smooth`,inline:`center`,block:`center`}),e.focus()}var OL;(function(e){e.Up=`up`,e.Down=`down`,e.Left=`left`,e.Right=`right`})(OL||={});var kL;(function(e){e.Enter=`enter`,e.Exit=`exit`,e.Activate=`activate`,e.Focus=`focus`,e.Navigate=`navigate`,e.Pibling=`pibling`})(kL||={});function AL(e){let t={x:-1,y:-1},n;for(;t.y<e.length-1&&!n;){t.y++;let r=e[t.y];for(;r&&t.x<r.length-1&&!n;){t.x++;let e=r[t.x];if(e){if(e.navEntry.navParams.group){let t=AL(e.children);t&&(n=t.node)}else e.navEntry.navParams.disabled||(n=e)}}}if(n)return{node:n,coords:t}}function jL({navTree:e,currentlyFocused:t,direction:n,allowWrapping:r,shouldSkipHoles:i,blockPerpendicularNavigation:a,navigationPositionHistory:o}){if(!t){let t=AL(e.children);return t?(DL(t.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:t.node.element,coords:t.coords,direction:n,navAction:kL.Navigate}):{success:!1,reason:`no default element to focus`,direction:n,navAction:kL.Navigate}}let{nextNode:s,requiresWrapping:c,coords:l,cursorCoords:u,isVertical:d}=ML({treePosition:t.position,direction:n,shouldSkipHoles:i,blockPerpendicularNavigation:a,navigationPositionHistory:o}),f=r?!0:!c;return s&&f?(DL(s.element),IL({navigationPositionHistory:o,coords:l,cursorCoords:u,isVertical:d,sourcePosition:t.position,targetNode:s}),{success:!0,defaulted:!1,newElement:s.element,wrapped:c,direction:n,navAction:kL.Navigate,coords:l}):s?f?{success:!1,reason:`no conditions matched`,direction:n,navAction:kL.Navigate}:{success:!1,reason:`wrapping blocked`,direction:n,navAction:kL.Navigate}:{success:!1,reason:`failed to find node to focus`,direction:n,navAction:kL.Navigate}}function ML({treePosition:e,direction:t,shouldSkipHoles:n,blockPerpendicularNavigation:r,navigationPositionHistory:i}){let a=e.ancestorChain[e.ancestorChain.length-1]?.node,o=e.node.root?void 0:e.node.navEntry,s=Math.max(a?.children.length??0,PL(a?.children??[]))+1,c=!1,l,u=1;for(;!c||!l;)if(l=NL({treePosition:e,direction:t,step:u,shouldSkipHoles:n,blockPerpendicularNavigation:r,navigationPositionHistory:i}),c=!!l.nextNode&&!l.nextNode.navEntry.navParams.disabled&&l.nextNode.navEntry!==o,u++,u>s)return{nextNode:void 0,requiresWrapping:l.requiresWrapping,coords:l.coords,cursorCoords:l.cursorCoords,isVertical:l.isVertical};return l}function NL({treePosition:e,direction:t,step:n,shouldSkipHoles:r,blockPerpendicularNavigation:i,navigationPositionHistory:a}){let o=e.ancestorChain[e.ancestorChain.length-1]?.node;Vc.isDefined(o,`missing parent`);let s=(t===OL.Down||t===OL.Up)&&(i||o.children.length>1),c=e.node.root?void 0:e.node.navEntry,l=t===OL.Down||t===OL.Right?n:-1*n,u=l<0?TL:EL,d=Ll(e.nodeCoords.y+l,{min:0,max:o.children.length-1,takeOverflow:!0}),f=Ll(e.nodeCoords.x+l,{min:0,max:PL(o.children)-1,takeOverflow:!0}),p=FL({history:a?.lastXByRow,key:e.nodeCoords.y,origin:d,sourceEntry:c})??LL(e),m=FL({history:a?.lastYByColumn,key:e.nodeCoords.x,origin:f,sourceEntry:c})??e.nodeCoords.y,h=s?d:m,g=s?p:f,_=RL(s?{nodes:Ic.isDefined(o.children[h]),shouldSkipHoles:r,index:g}:{nodes:o.children.map(e=>e[g]),shouldSkipHoles:r,index:h}),ee=s?_?.index??g:g,te=s?h:_?.index??h,ne=s?u(h,e.nodeCoords.y):u(g,e.nodeCoords.x);return{nextNode:_?.node,requiresWrapping:ne,coords:{x:ee,y:te},cursorCoords:{x:s?p:g,y:s?h:m},isVertical:s}}function PL(e){return e.reduce((e,t)=>Math.max(e,t.length),0)}function FL({history:e,key:t,origin:n,sourceEntry:r}){let i=e?.get(t);if(i&&i.entry===r&&i.origin===n)return i.cursor}function IL({navigationPositionHistory:e,coords:t,cursorCoords:n,isVertical:r,sourcePosition:i,targetNode:a}){let o={x:a.navEntry.navParams.x??t.x,y:a.navEntry.navParams.y??t.y};r&&o.x!==n.x?e.lastXByRow.set(o.y,{entry:a.navEntry,origin:i.nodeCoords.y,cursor:n.x}):!r&&o.y!==n.y&&e.lastYByColumn.set(o.x,{entry:a.navEntry,origin:i.nodeCoords.x,cursor:n.y})}function LL(e){let t=e.node;return t.root||t.navEntry.navParams.x==null?e.nodeCoords.x:t.navEntry.navParams.x+Math.floor(((t.navEntry.navParams.width||1)-1)/2)}function RL({nodes:e,shouldSkipHoles:t,index:n}){let r=e[n];if(r&&(t||!r.navEntry.navParams.disabled))return{node:r,index:n};if(t)return;let i=e.flatMap((e,t)=>e&&!e.navEntry.navParams.disabled?[{node:e,index:t}]:[]);return i.findLast(e=>e.index<n)??i.find(e=>e.index>n)}function zL({currentlyFocused:e,direction:t,allowWrapping:n,shouldSkipHoles:r,blockPerpendicularNavigation:i}){let a=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!a)return{success:!1,reason:`no parent to find a pibling from`,direction:t,navAction:kL.Pibling};let{nextNode:o,requiresWrapping:s,coords:c}=ML({treePosition:a,direction:t,shouldSkipHoles:r,blockPerpendicularNavigation:i}),l=o?.navEntry.navParams.group?AL(o.children):{node:o,coords:c},u=n?!0:!s;return!l||!l.node?{success:!1,reason:`no node to navigate to`,direction:t,navAction:kL.Pibling}:u?(DL(l.node.element),{success:!0,defaulted:!1,newElement:l.node.element,wrapped:s,coords:l.coords,direction:t,navAction:kL.Pibling}):{success:!1,reason:`wrapping blocked`,direction:t,navAction:kL.Pibling}}var BL;(function(e){e.Disabled=`disabled`,e.Group=`group`,e.Focused=`focused`,e.Active=`active`})(BL||={});var VL={name:`data-nav`,js(e){return e?`[${VL.name}*="${e}"]`:`[${VL.name}]`},css({baseSelector:e=``,navValue:t}={}){return V`
            ${j(e)}${j(VL.js(t))}
        `}},HL=`navEntry`;function UL(e){return HL in e}function WL(e){if(UL(e)){let t=e[HL];return Ic.instanceOf(t,KL,`Invalid nav entry`)}}function GL(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type===`mousedown`&&!e.navController.options.activateOnMouseUp||t.type===`mouseup`&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type===`mouseup`||t.type===`focus`?t.target===e.element&&e.focus(!0):t.type===`mousemove`?t.target===e.element&&e.navValue!==BL.Active&&e.focus(!0):(t.type===`blur`||t.type===`mouseleave`)&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}var KL=class{element;navParams;navTreeNode;navValue;eventListener=GL(this);constructor(e,t,n){this.element=e,this.navParams=n,this.attachListeners(),this.navController=t}set navController(e){this._navController!==e&&(this._navController?.removeNavEntry(this),this._navController=e,e.addNavEntry(this))}get navController(){return Vc.isDefined(this._navController,`this.navController has not been set in NavEntry constructor yet.`),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(Rl(this).navValue=void 0,this.element.setAttribute(VL.name,``),xL(this.element)&&this.element.blur())}focus(e,t){let n=this.navValue,r=e===(n===BL.Focused);if(!(this.navParams.group||this.navController.locked||r||!e&&this.navController.options.alwaysRequireFocused))return e?(this.setNavValue(BL.Focused),xL(this.element)||this.element.focus()):(this.removeNavValue(BL.Focused),xL(this.element)&&this.element.blur()),t||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:e,previousNavValue:n}),this.navController.triggerNavEntry(this,e,kL.Focus)}activate(e){let t=this.navValue,n=e===(t===BL.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(e,!0),e?this.setNavValue(BL.Active):this.setNavValue(BL.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:e,previousNavValue:t}),this.navController.triggerNavEntry(this,e,kL.Activate)}setNavValue(e){Rl(this).navValue=e,this.element.setAttribute(VL.name,e)}removeNavValue(e){this.navValue===e&&(Rl(this).navValue=void 0,this.element.setAttribute(VL.name,``))}attachListeners(){this.element.addEventListener(`mousemove`,this.eventListener,!0),this.element.addEventListener(`mouseleave`,this.eventListener,!0),this.element.addEventListener(`mousedown`,this.eventListener,!0),this.element.addEventListener(`mouseup`,this.eventListener,!0),this.element.addEventListener(`focus`,this.eventListener,!0),this.element.addEventListener(`blur`,this.eventListener,!0)}};function qL(e,t){Object.entries(t).forEach(([t,n])=>{A.isBoolean(n)&&n?e.setAttribute(t,``):A.isBoolean(n)||n==null?e.removeAttribute(t):e.setAttribute(t,String(n))})}var JL=MP(class extends NP{element;lastKey;constructor(e){super(e),this.element=KF(e,`modifyElement`)}render(e,t,n){return e!==this.lastKey&&(t(this.element),this.lastKey=e),n?.(this.element),Sd}});function YL(e){return`group`in e?BL.Group:e.disabled?BL.Disabled:``}function XL(e,t={}){return JL(y(Vl(t,[`autoFocus`,`listeners`])),n=>{e.needsUpdate=!0;let r=!t.group&&!t.disabled;Vc.instanceOf(n,HTMLElement);let i=WL(n),a=i||new KL(n,e,t);qL(n,{[VL.name]:r&&a.navValue||YL(t),tabindex:r?0:-1}),UL(n)?(a.navParams=t,a.navController=e):n[HL]=a,!i&&t.autoFocus&&r&&window.requestAnimationFrame(()=>{WL(n)?.focus(!0)}),r?n.style.setProperty(`cursor`,`pointer`):n.style.removeProperty(`cursor`),e.queueDefaultFocus(!0)},e=>{let n=WL(e);n&&(n.navParams={...n.navParams,listeners:t.listeners})})}function ZL(e,t){if(!t)return{success:!1,reason:`no focused node to enter into`,direction:void 0,navAction:kL.Enter};if(!t.position.node.children.length)return{success:!1,reason:`no children to enter into`,direction:void 0,navAction:kL.Enter};let n=t.position.node.children[0]?.[0];return n?(DL(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:kL.Enter,coords:{x:0,y:0}}):{success:!1,reason:`failed to find first child to enter into`,direction:void 0,navAction:kL.Enter}}function QL(e,t){return $L([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function $L(e,t,n){for(let r=0;r<t.length;r++){let i=t[r];for(let t=0;t<i.length;t++){let a=i[t];if(!a)continue;let o={ancestorChain:e,nodeCoords:{x:t,y:r},node:a};if(n(o))return o;let s=$L(e.concat(o),a.children,n);if(s)return s}}}function eR(e,t){let n=QL(e,({node:e})=>!e.root&&e.navEntry===t);if(!n)throw Error(`Failed to find NavEntry in NavTree.`);return n}function tR(e,t){if(!t)return{success:!1,reason:`no focused node to exit out of`,direction:void 0,navAction:kL.Exit};let n=t.position.ancestorChain.toReversed().find(e=>!e.node.root&&!e.node.navEntry.navParams.group)?.node;if(!n||n.root)return{success:!1,reason:`failed to find ancestor, nothing to exit to`,direction:void 0,navAction:kL.Exit};let{nodeCoords:r}=eR(e,n.navEntry);return DL(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element,direction:void 0,navAction:kL.Exit,coords:r}}var nR=class extends Ql()(`nav-exit`){},rR=class extends Ql()(`nav-activate`){},iR=class extends Ql()(`nav-focus`){},aR=class extends Ql()(`nav-enter`){},oR=class extends Ql()(`nav-navigate`){},sR=class extends Ql()(`nav-navigate-pibling`){};function cR(e){return{root:!0,children:lR(e)?.children||[]}}function lR(e){let t=e.element;if(!(t instanceof HTMLElement))return;let n=WL(t),r=uR(e);if(n?.navParams.group&&r.length||r.length||n)return{root:!1,element:t,navEntry:n,children:r}}function uR(e){let t=[],n=[];function r(e){if(!e.navEntry?.navParams.group||e.children.length){if(e.navEntry)t.push({height:e.navEntry.navParams.height||1,node:e,x:e.navEntry.navParams.x,y:e.navEntry.navParams.y||0});else{let t=new Set;e.children.forEach(e=>e.forEach(e=>{t.has(e)||(t.add(e),r(e))}))}}}e.children.forEach(e=>{let t=lR(e);t&&r(t)});let i=t.reduce((e,t)=>Math.max(e,t.y+(t.height===1/0?0:t.height-1)),0);t.forEach(e=>{nl(e.height===1/0?i-e.y+1:e.height,t=>e.y+t).forEach(t=>{let r=Zc(n,t,()=>({noX:[],withX:[],y:t}));e.x==null?r.noX.push(e.node):r.withX.push({x:e.x,node:e.node})})});let a=n.flatMap(e=>e.withX).reduce((e,t)=>{let n=t.node.navEntry?.navParams.width||1;return Math.max(e,t.x+(n===1/0?0:n-1))},0);return n.sort((e,t)=>e.y-t.y).map(e=>(e.withX.sort((e,t)=>e.x-t.x),e.withX.forEach(({x:t,node:n})=>{let r=n.navEntry?.navParams.width||1;nl(r===1/0?a-t+1:r,e=>t+e).forEach(t=>{e.noX[t]?e.noX.splice(t,0,n):e.noX[t]=n})}),e.noX)).filter(e=>e.some(A.isTruthy))}var dR=class extends tu{rootElement;options;constructor(e,t={}){super(),this.rootElement=e,this.options=t}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;navigationPositionHistory={lastXByRow:new Map,lastYByColumn:new Map};recordNavigationPosition(e){let t=e.node.root?void 0:e.node.navEntry,n=t?.navParams.x??e.nodeCoords.x,r=t?.navParams.width||1,i=t?.navParams.y??e.nodeCoords.y,a=t?.navParams.height||1;a===1/0?this.navigationPositionHistory.lastXByRow.clear():nl(a,e=>i+e).forEach(e=>{this.navigationPositionHistory.lastXByRow.delete(e)}),r===1/0?this.navigationPositionHistory.lastYByColumn.clear():nl(r,e=>n+e).forEach(e=>{this.navigationPositionHistory.lastYByColumn.delete(e)})}getNavTree(){if(this.needsUpdate||!this.cachedNavTree){this.needsUpdate=!1;let e=this.buildNavTree();return this.syncCurrentNavEntry(e),e}return this.cachedNavTree}clearCurrentNavEntry(e){e?.removeDisconnectListener(),e&&this.currentNavEntry!==e||(this.currentNavEntry=void 0)}syncCurrentNavEntry(e){let t=this.currentNavEntry;if(t)try{let n=eR(e,t.entry);t.entry.navParams.group||t.entry.navParams.disabled?this.clearCurrentNavEntry(t):(this.currentNavEntry={...t,position:n},(t.position.nodeCoords.x!==n.nodeCoords.x||t.position.nodeCoords.y!==n.nodeCoords.y)&&this.recordNavigationPosition(n))}catch{this.clearCurrentNavEntry(t)}}focusDefaultElement(){AL(this.getNavTree().children)?.node.navEntry.focus(!0)}queueDefaultFocus(e=!1){this.options.alwaysRequireFocused&&(e||!this.currentNavEntry)&&(this.needsUpdate=!0,requestAnimationFrame(()=>{let e=this.currentNavEntry;e&&(this.getNavTree(),this.currentNavEntry)?e.entry.focus(!0):this.currentNavEntry||this.focusDefaultElement()}))}addNavEntry(e){this.needsUpdate=!0,this.navEntries.add(e),this.queueDefaultFocus()}removeNavEntry(e){this.needsUpdate=!0,this.navEntries.delete(e),this.queueDefaultFocus()}triggerNavEntry(e,t,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:`NavController is locked.`};if(!e)return{success:!1,direction:void 0,navAction:n,reason:`No nav entry to operate on.`};let r=QL(this.getNavTree(),({node:t})=>!t.root&&t.navEntry===e);if(!r)return{success:!1,direction:void 0,navAction:n,reason:`Nav entry is not in the current nav tree.`};t?(this.navEntries.forEach(t=>{t!==e&&t.clearNavValue()}),this.currentNavEntry?.removeDisconnectListener(),this.currentNavEntry={entry:e,navAction:n,position:r,removeDisconnectListener:CL(e.element,()=>{this.currentNavEntry?.entry.element===e.element&&(this.needsUpdate=!0,this.currentNavEntry=void 0,this.queueDefaultFocus())})},this.recordNavigationPosition(r)):this.currentNavEntry?.entry===e&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry.removeDisconnectListener(),this.currentNavEntry=void 0);let i={success:!0,defaulted:!1,direction:void 0,newElement:e.element,wrapped:!1,navAction:n,coords:r.nodeCoords};return t&&(n===kL.Activate?this.dispatch(new rR({detail:i})):n===kL.Focus&&this.dispatch(new iR({detail:i}))),i}navigate({direction:e,allowWrapping:t,blockPerpendicularNavigation:n,shouldSkipHoles:r}){if(this.locked)return{success:!1,direction:e,navAction:kL.Navigate,reason:`NavController is locked.`};let i=jL({navTree:this.getNavTree(),currentlyFocused:this.currentNavEntry,direction:e,allowWrapping:t,shouldSkipHoles:!!r,blockPerpendicularNavigation:!!n,navigationPositionHistory:this.navigationPositionHistory});return this.dispatch(new oR({detail:i})),i}enterInto({fallbackToActivate:e}={}){if(this.locked)return{success:!1,direction:void 0,navAction:kL.Enter,reason:`NavController is locked.`};let t=ZL(this.getNavTree(),this.currentNavEntry);return!t.success&&e?this.activate():(this.dispatch(new aR({detail:t})),t)}activate(){return this.locked?{success:!1,direction:void 0,navAction:kL.Activate,reason:`NavController is locked.`}:this.currentNavEntry?.entry?this.currentNavEntry.entry.activate(!0)||{success:!1,direction:void 0,navAction:kL.Activate,reason:`Cannot activate a group`}:{success:!1,direction:void 0,navAction:kL.Activate,reason:`No focused NavEntry to activate.`}}deactivate(){return this.locked?{success:!1,direction:void 0,navAction:kL.Activate,reason:`NavController is locked.`}:this.currentNavEntry?.navAction===kL.Activate?this.currentNavEntry.entry.activate(!1)||{success:!1,direction:void 0,navAction:kL.Activate,reason:`Cannot deactivate a group`}:{success:!1,direction:void 0,navAction:kL.Activate,reason:`No active NavEntry to deactivate.`}}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:kL.Exit,reason:`NavController is locked.`};let e=this.getNavTree();this.currentNavEntry?.navAction===kL.Activate&&this.currentNavEntry.entry.focus(!0);let t=tR(e,this.currentNavEntry);return this.dispatch(new nR({detail:t})),t}navigatePibling({allowWrapping:e,direction:t,blockPerpendicularNavigation:n,shouldSkipHoles:r}){if(this.locked)return{success:!1,direction:t,navAction:kL.Pibling,reason:`NavController is locked.`};let i=this.getNavTree(),a={...this.currentNavEntry?zL({currentlyFocused:this.currentNavEntry,direction:t,allowWrapping:e,shouldSkipHoles:!!r,blockPerpendicularNavigation:!!n}):jL({navTree:i,currentlyFocused:void 0,direction:t,allowWrapping:e,shouldSkipHoles:!!r,blockPerpendicularNavigation:!!n,navigationPositionHistory:this.navigationPositionHistory}),navAction:kL.Pibling};return this.dispatch(new sR({detail:a})),a}buildNavTree(){let e=cR(vL(this.rootElement));return this.cachedNavTree=e,e}},fR=globalThis.document,pR=class extends bP{constructor(){if(super({defaultValue:!!fR?.hidden,equalityCheck:A.strictEquals}),!fR)return;globalThis.addEventListener(`visibilitychange`,e=>this.updateVisibility(e,fR));let e=e=>this.updateVisibility(e,fR);globalThis.onpageshow=e,globalThis.onpagehide=e,globalThis.onfocus=e,globalThis.onblur=e}updateVisibility(e,t){let n=hR.includes(e.type),r=mR.includes(e.type),i=n?!0:r?!1:t.hasFocus()||!t.hidden;this.setValue(i)}},mR=[`blur`,`focusout`,`pagehide`],hR=[`focus`,`focusin`,`pageshow`],gR=new pR;function _R(e,t){return gR.listen(e,t)}function vR(e){return e instanceof HTMLInputElement&&(e.type===`text`||e.type===`search`||e.type===`email`||e.type===`url`||e.type===`tel`||e.type===`password`||e.type===`number`)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}function yR(){let e=!1;return wL(({element:t})=>(e=vR(t),e)),e}function bR(e){let t=e.composedPath()[0];if(!(t instanceof Element)||globalThis.getComputedStyle(t).display===`inline`)return!1;let n=t.getBoundingClientRect(),r=n.left+t.clientLeft,i=n.top+t.clientTop,a=e.clientX<r||e.clientX>=r+t.clientWidth,o=e.clientY<i||e.clientY>=i+t.clientHeight;return a&&t.scrollHeight>t.clientHeight||o&&t.scrollWidth>t.clientWidth}var xR;(function(e){e.Hover=`hover`,e.Click=`click`,e.Mousedown=`mousedown`})(xR||={});var SR={[xR.Hover]:{milliseconds:300}};function CR(e,t,n){return nu(e,t,e=>{n(e)})}var wR={[xR.Hover](e,t){return[CR(t,`mouseenter`,()=>{e.scheduleShow()}),CR(t,`focusin`,()=>{e.scheduleShow()}),CR(t,`mouseleave`,()=>{e.hide()}),CR(t,`focusout`,()=>{e.hide()})]},[xR.Click](e,t){return[CR(t,`click`,t=>{t.detail===0&&yR()||e.toggle()}),CR(t,`keydown`,t=>{e.openOnArrow(t)})]},[xR.Mousedown](e,t){return[CR(t,`mousedown`,t=>{if(t.button===0&&!bR(t)){let n=t.composedPath()[0];n instanceof Element&&vR(n)||(t.preventDefault(),t.composedPath().find(e=>e instanceof HTMLElement&&e.tabIndex>=0)?.focus({preventScroll:!0,focusVisible:!1})),e.toggle()}}),CR(t,`click`,t=>{t.detail===0&&!yR()&&e.toggle()}),CR(t,`keydown`,t=>{e.openOnArrow(t)})]}},TR=class{navController;anchor;options;popover;showTimeout;hideTimeout;removeAnchorListeners;removeOpenListeners;constructor(e){this.navController=e}isOpen(){return!!this.popover?.matches(`:popover-open`)}update(e,t){let n=this.options?.trigger;if(this.options=t,e===this.anchor&&t.trigger===n)return;this.removeAnchorListeners?.(),this.anchor=e;let r=A.isBoolean(t.trigger)?[]:wR[t.trigger](this,e);this.removeAnchorListeners=()=>{r.forEach(e=>e())},this.applyForcedState()}applyForcedState(){this.options?.trigger===!0?queueMicrotask(()=>{this.options?.trigger===!0&&this.scheduleShow()}):this.options?.trigger===!1&&this.close()}show(){clearTimeout(this.showTimeout),this.showTimeout=void 0,this.anchor&&this.options&&!this.isOpen()&&(this.popover=this.options.getPopover(),this.popover.showPopover({source:this.anchor}),this.removeOpenListeners=this.attachOpenListeners(),this.options.timeout&&(this.hideTimeout=setTimeout(()=>{this.hide()},uo(this.options.timeout,{milliseconds:!0}).milliseconds)))}hide(){this.options?.trigger!==!0&&this.close()}scheduleShow(){if(this.showTimeout||this.isOpen()||!this.options)return;let e=this.options.delay||(A.isBoolean(this.options.trigger)?{}:SR[this.options.trigger]),t=e&&uo(e,{milliseconds:!0});t&&t.milliseconds>0?this.showTimeout=setTimeout(()=>{this.show()},t.milliseconds):this.show()}toggle(){this.isOpen()||this.showTimeout?this.hide():this.scheduleShow()}openOnArrow(e){e.code.startsWith(`Arrow`)&&this.scheduleShow()}destroy(){this.removeAnchorListeners?.(),this.removeAnchorListeners=void 0,this.anchor=void 0,this.close()}close(){clearTimeout(this.showTimeout),this.showTimeout=void 0,clearTimeout(this.hideTimeout),this.hideTimeout=void 0,this.removeOpenListeners?.(),this.removeOpenListeners=void 0,this.isOpen()&&this.popover?.hidePopover()}attachOpenListeners(){let e=this.navController,t=[ru(`resize`,()=>{this.popover?.classList.toggle(fL),this.anchor?.scrollIntoView({block:`nearest`,inline:`nearest`})},{passive:!0}),ru(`scroll`,()=>{this.popover?.classList.toggle(fL)},{capture:!0,passive:!0}),_R(!1,e=>{e||this.hide()}),e?.listen(rR,t=>{let n=t.composedPath()[0];n instanceof Element&&vR(n)||t.detail.success&&(this.options?.onNavSelect?.(t.detail.coords),e.currentNavEntry?.entry.focus(!0),t.stopImmediatePropagation(),t.preventDefault())}),ru(`mousedown`,e=>{let t=e.composedPath();this.anchor&&t.includes(this.anchor)||this.popover&&t.includes(this.popover)||bR(e)||this.hide()},{passive:!0}),ru(`keydown`,t=>{let n=t.code;if(n===`Escape`)this.hide();else if(e){let r=t.composedPath()[0];if(r instanceof Element&&vR(r))return;n===`ArrowDown`?(t.stopImmediatePropagation(),t.preventDefault(),e.navigate({direction:OL.Down,allowWrapping:!1})):n===`ArrowUp`?(t.stopImmediatePropagation(),t.preventDefault(),e.navigate({direction:OL.Up,allowWrapping:!1})):n===`ArrowLeft`?(t.stopImmediatePropagation(),t.preventDefault(),e.navigate({direction:OL.Left,allowWrapping:!1})):n===`ArrowRight`?(t.stopImmediatePropagation(),t.preventDefault(),e.navigate({direction:OL.Right,allowWrapping:!1})):(n===`Enter`||n===`Return`||n===`Space`)&&e.enterInto({fallbackToActivate:!0}).success&&(t.stopImmediatePropagation(),t.preventDefault())}})].filter(A.isDefined);return()=>{t.forEach(e=>e())}}},ER=V`
    padding: 0;
    margin: 0;
`,DR=V`
    ${ER};
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,OR=`
<svg
  class="lucide lucide-arrow-down-wide-narrow"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m3 16 4 4 4-4" />
  <path d="M7 20V4" />
  <path d="M11 4h10" />
  <path d="M11 8h7" />
  <path d="M11 12h4" />
</svg>
`,kR=`
<svg
  class="lucide lucide-arrow-up-narrow-wide"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m3 8 4-4 4 4" />
  <path d="M7 4v16" />
  <path d="M11 12h4" />
  <path d="M11 16h7" />
  <path d="M11 20h10" />
</svg>
`,AR=`
<svg
  class="lucide lucide-check"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 6 9 17l-5-5" />
</svg>
`,jR=`
<svg
  class="lucide lucide-chevron-down"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m6 9 6 6 6-6" />
</svg>
`,MR=`
<svg
  class="lucide lucide-chevron-up"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m18 15-6-6-6 6" />
</svg>
`,NR=`
<svg
  class="lucide lucide-chevrons-up-down"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m7 15 5 5 5-5" />
  <path d="m7 9 5-5 5 5" />
</svg>
`,PR=`
<svg
  class="lucide lucide-circle-alert"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <line x1="12" x2="12" y1="8" y2="12" />
  <line x1="12" x2="12.01" y1="16" y2="16" />
</svg>
`,FR=`
<svg
  class="lucide lucide-circle-check"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="m16 9-5.5 5.5L8 12" />
</svg>
`,IR=`
<svg
  class="lucide lucide-circle-x"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="m15 9-6 6" />
  <path d="m9 9 6 6" />
</svg>
`,LR=`
<svg
  class="lucide lucide-code-xml"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m18 16 4-4-4-4" />
  <path d="m6 8-4 4 4 4" />
  <path d="m14.5 4-5 16" />
</svg>
`,RR=`
<svg
  class="lucide lucide-copy"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
</svg>
`,zR=`
<svg
  class="lucide lucide-eye-off"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
  <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
  <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
  <path d="m2 2 20 20" />
</svg>
`,BR=`
<svg
  class="lucide lucide-eye"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
  <circle cx="12" cy="12" r="3" />
</svg>
`,VR=`
<svg
  class="lucide lucide-file-search"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <circle cx="11.5" cy="14.5" r="2.5" />
  <path d="M13.3 16.3 15 18" />
</svg>
`,HR=`
<svg
  class="lucide lucide-grip-vertical"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="9" cy="12" r="1" />
  <circle cx="9" cy="5" r="1" />
  <circle cx="9" cy="19" r="1" />
  <circle cx="15" cy="12" r="1" />
  <circle cx="15" cy="5" r="1" />
  <circle cx="15" cy="19" r="1" />
</svg>
`,UR=`
<svg
  class="lucide lucide-loader"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 2v4" />
  <path d="m16.2 7.8 2.9-2.9" />
  <path d="M18 12h4" />
  <path d="m16.2 16.2 2.9 2.9" />
  <path d="M12 18v4" />
  <path d="m4.9 19.1 2.9-2.9" />
  <path d="M2 12h4" />
  <path d="m4.9 4.9 2.9 2.9" />
</svg>
`,WR=`
<svg
  class="lucide lucide-minus"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 12h14" />
</svg>
`,GR=`
<svg
  class="lucide lucide-plus"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 12h14" />
  <path d="M12 5v14" />
</svg>
`,KR=`
<svg
  class="lucide lucide-sliders-horizontal"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 5H3" />
  <path d="M12 19H3" />
  <path d="M14 3v4" />
  <path d="M16 17v4" />
  <path d="M21 12h-9" />
  <path d="M21 19h-5" />
  <path d="M21 5h-7" />
  <path d="M8 10v4" />
  <path d="M8 12H3" />
</svg>
`,qR=`
<svg
  class="lucide lucide-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
</svg>
`,JR=`
<svg
  class="lucide lucide-x"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M18 6 6 18" />
  <path d="m6 6 12 12" />
</svg>
`,YR=qd({"vira-icon-stroke-color":`currentColor`,"vira-icon-fill-color":`none`,"vira-icon-stroke-width":`1.5px`});function XR({svgString:e,attributeName:t,value:n}){let r=t.replace(/[.*+?^${}()|[\]\\]/g,String.raw`\$&`),i=new RegExp(String.raw`(\s)${r}="[^"]*"`);return i.test(e)?e.replace(i,`$1${t}="${n}"`):e.replace(/<svg\b/,`<svg ${t}="${n}"`)}function ZR(e,t){return Object.entries(t).reduce((e,[t,n])=>XR({svgString:e,attributeName:t,value:n}),e)}function QR({name:e,svg:t}){return{name:e,svgTemplate:U`
            ${JP(ZR(t,{fill:String(YR[`vira-icon-fill-color`].value),stroke:String(YR[`vira-icon-stroke-color`].value),"stroke-width":String(YR[`vira-icon-stroke-width`].value),width:`16`,height:`16`}))}
        `}}var $R=QR({name:`Check`,svg:AR}),ez=QR({name:`ChevronDown`,svg:jR}),tz=QR({name:`ChevronUp`,svg:MR}),nz=QR({name:`CircleX`,svg:IR}),rz=QR({name:`CodeXml`,svg:LR}),iz=QR({name:`Copy`,svg:RR}),az=QR({name:`EyeOff`,svg:zR}),oz=QR({name:`Eye`,svg:BR}),sz=QR({name:`GripVertical`,svg:HR}),cz=QR({name:`Minus`,svg:WR}),lz=QR({name:`Plus`,svg:GR}),uz=QR({name:`X`,svg:JR});function dz(e,t){return{...e,size:t}}var fz={Check16:$R,ChevronDown16:ez,ChevronUp16:tz,CircleX16:nz,CircleX24:dz(nz,24),CodeXml24:dz(rz,24),Copy16:iz,Eye16:oz,EyeOff16:az,GripVertical16:sz,Minus16:cz,Plus16:lz,X16:uz,X24:dz(uz,24)};function pz(e){return A.isString(e)?j(e):e.value}function mz({elementBorderSize:e=`1px`,outlineGap:t=`2px`,outlineWidth:n=`2px`,noNesting:r,outlineColor:i=q[`vira-form-focus-outline-color`],borderRadius:a=q[`vira-form-focus-outline-border-radius`],renderInside:o}={}){let s=V`calc(${pz(t)})`,c=V`calc(${pz(n)} + ${pz(t)} + ${pz(e)})`,l=o?V`
              content: '';
              top: ${s};
              left: ${s};
              position: absolute;
              width: calc(100% - calc(${s} * 2));
              height: calc(100% - calc(${s} * 2));
              box-sizing: border-box;
              pointer-events: none;
              border: ${pz(n)} solid ${pz(i)};
              border-radius: ${pz(a)};
              z-index: 100;
          `:V`
              content: '';
              top: calc(${c} * -1);
              left: calc(${c} * -1);
              position: absolute;
              width: calc(100% + calc(${c} * 2));
              height: calc(100% + calc(${c} * 2));
              box-sizing: border-box;
              pointer-events: none;
              border: ${pz(n)} solid ${pz(i)};
              border-radius: ${pz(a)};
              z-index: 100;
          `;return r?l:V`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${l}
        }
    `}var hz=[`highest-contrast`,`lowest-contrast`,...Me(W).sort((e,t)=>Number(t.includes(`-`))-Number(e.includes(`-`)))],gz=tl(l(el(Object.keys(K.colors),e=>e.split(`-`)[1],e=>e!=="default")).filter(A.isTruthy),e=>({key:e,value:e}),{useRequired:!0}),_z=x(K.colors),vz=Sl(gz,e=>tl(l(el(_z,t=>hz.reduce((e,t)=>El({value:e,suffix:`-${t}`}),bl({value:t,prefix:`vira-${e}-`})),(t,n)=>n.startsWith(`vira-${e}-`))),t=>({key:t,value:tl(hz,n=>{let r=`vira-${e}-${t}-${n}`;if(A.hasKey(K.colors,r))return{key:n,value:K.colors[r]}})}))),J;(function(e){e.Info=`info`,e.Plain=`plain`,e.Neutral=`neutral`,e.Muted=`muted`,e.Danger=`danger`,e.Warning=`warning`,e.Positive=`positive`,e.Brand=`brand`,e.Special=`special`,e.Custom=`custom`})(J||={}),J.Info,J.Plain,J.Neutral,J.Muted,J.Danger,J.Warning,J.Positive,J.Brand,J.Special;var yz={[J.Info]:gz.blue,[J.Danger]:gz.red,[J.Warning]:gz.yellow,[J.Positive]:gz.green,[J.Brand]:gz.brand,[J.Special]:gz.purple},bz=Hl(gz).filter(e=>!A.hasValue(Hl(yz),e)),xz;(function(e){e.Large=`large`,e.Medium=`medium`,e.Small=`small`,e.None=`none`})(xz||={});var Sz=[xz.Small,xz.Medium,xz.Large],Cz;(function(e){e.Standard=`standard`,e.Subtle=`subtle`,e.None=`none`})(Cz||={});var wz=[Cz.Standard,Cz.Subtle],Tz={[xz.Large]:36,[xz.Medium]:28,[xz.Small]:20},Ez=V`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,Dz=qd({"vira-extended-animation-duration":`1.2s`,"vira-pretty-animation-duration":`300ms`,"vira-interaction-animation-duration":`84ms`}),Oz=qd({"menu-shadow-color":`rgba(0, 0, 0, 0.11)`,"modal-shadow-color":`rgba(0, 0, 0, 0.69)`}),kz={menuShadow:V`
        filter: drop-shadow(0px 5px 5px ${Oz[`menu-shadow-color`].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:V`
        box-shadow: 0 5px 15px ${Oz[`modal-shadow-color`].value};
    `},Az=V`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`;function jz({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split(``).every(e=>jz({input:e,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Mz({value:e,allowed:t,blocked:n}){let r=String(e),i=!t||jz({input:r,matcher:t}),a=!!n&&jz({input:r,matcher:n});return i&&!a}function Nz(e){let t=String(e.value);if(!e.value)return{filtered:t,blocked:``};let{filtered:n,blocked:r}=t.split(``).reduce((t,n)=>(Mz({...e,value:n})?t.filtered.push(n):t.blocked.push(n),t),{filtered:[],blocked:[]});return{filtered:n.join(``),blocked:r.join(``)}}function Pz({inputs:e,previousValue:t,event:n,elementConstructor:r,inputBlockedCallback:i,newValueCallback:a}){let o=SL(n,r||HTMLInputElement),s=A.hasKey(n,`data`)&&Uc.isString(n.data)||``;if(s){let{blocked:t}=Nz({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});t.length&&i(t)}let c=Nz({value:o.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;o.value!==c&&(o.value=c),t!==c&&a(c)}var Y=gL()({tagName:`vira-icon`,hostClasses:{"vira-icon-fit-container"({inputs:e}){return!!e.fitContainer||!!e.icon?.size}},styles({hostClasses:e}){return V`
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
        `},render({inputs:e,host:t}){if(e.icon)e.icon.size&&(t.style.width=wl(e.icon.size),t.style.height=wl(e.icon.size));else return``;return e.icon.svgTemplate}}),Fz;(function(e){e.Default=`text`,e.Password=`password`,e.Email=`email`,e.Number=`number`})(Fz||={});var Iz=gL()({tagName:`vira-input`,cssVars:{"vira-input-padding-horizontal":`10px`,"vira-input-padding-vertical":`3px`},styles({hostClasses:e,cssVars:t}){return V`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${q[`vira-form-foreground-color`].value};
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
                    font-weight: ${q[`vira-form-label-font-weight`].value};
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
                ${DR};
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
                ${Az};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e[`vira-input-clear-button-shown`].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${DR};
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
                border-radius: ${q[`vira-form-radius`].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${q[`vira-form-border-color`].value};
            }

            .input-wrapper {
                ${DR};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                min-height: ${Tz[xz.Medium]}px;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t[`vira-input-padding-horizontal`].value};
                border-radius: ${q[`vira-form-radius`].value};
                background-color: ${q[`vira-form-background-color`].value};
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

            .readonly-value {
                overflow-wrap: anywhere;
            }

            input {
                ${DR};
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
                    ${mz({elementBorderSize:`1px`,noNesting:!0})}
                }
            }

            ::selection {
                background: ${q[`vira-form-text-selection-color`].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${q[`vira-form-text-selection-color`].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${q[`vira-form-placeholder-color`].value};
            }

            .suffix {
                font-weight: ${sL[`vira-font-weight-bold`].value};
                ${Az};
            }

            button {
                ${DR};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Dz[`vira-interaction-animation-duration`].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${q[`vira-form-placeholder-color`].value};
            }

            .clear-x-button:hover {
                color: ${q[`vira-form-error-color`].value};
            }

            .clear-x-button:active {
                color: ${q[`vira-form-error-active-color`].value};
            }

            .show-password-button:hover {
                color: ${q[`vira-form-accent-primary-color`].value};
            }

            .show-password-button:active {
                color: ${q[`vira-form-accent-primary-active-color`].value};
            }

            ${e[`vira-input-error`].selector} {
                & .wrapper-border {
                    border-color: ${q[`vira-form-error-color`].value};
                }
            }

            ${e[`vira-input-disabled`].selector} {
                cursor: not-allowed;

                & * {
                    cursor: not-allowed;
                }

                & > * {
                    ${Ez};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `},events:{valueChange:OF(),inputBlocked:OF(),clear:OF()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:Gl(32)}},hostClasses:{"vira-input-disabled"({inputs:e}){return!!e.disabled},"vira-input-fit-text"({inputs:e}){return!!e.fitText},"vira-input-clear-button-shown"({inputs:e}){return!!e.showClearButton},"vira-input-error"({inputs:e}){return!!e.hasError}},render({inputs:e,dispatch:t,state:n,updateState:r,events:i,host:a}){let{filtered:o}=Nz({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs});if(e.isReadonly){let t=U`
                <span class="readonly-value">${o}</span>
            `;return e.label?U`
                    <label>
                        <span class="input-label">${e.label}</span>
                        ${t}
                    </label>
                `:t}let s=e.icon?U`
                  <${Y.assign({icon:e.icon})}
                      class="left-side-icon"
                  ></${Y}>
              `:M,c=e.fitText?V`
                  width: ${n.forcedInputWidth}px;
              `:M,l=H(`mousedown`,e=>{let t=SL(e,HTMLElement,{useOriginalTarget:!0}),n=Ic.instanceOf(a.shadowRoot.querySelector(`input`),HTMLInputElement);t!==n&&(e.preventDefault(),n.focus())}),u=e.disableBrowserHelps||e.type===Fz.Password,d=U`
            <span class="input-wrapper" ${e.label?M:l}>
                ${s}
                ${cI(!!e.fitText,U`
                        <span
                            class="size-span"
                            ${aI(({contentRect:e})=>{r({forcedInputWidth:e.width})})}
                        >
                            <pre>${o||e.placeholder||M}</pre>
                        </span>
                    `)}

                <input
                    id=${GP(e.label?n.randomId:void 0)}
                    aria-label=${GP(A.isString(e.label)&&e.label||void 0)}
                    type=${Lz(e.type,n.showPassword)}
                    style=${c}
                    autocomplete=${GP(u?`off`:void 0)}
                    autocorrect=${GP(u?`off`:void 0)}
                    autocapitalize=${GP(u?`off`:void 0)}
                    spellcheck=${GP(u?`false`:void 0)}
                    ?disabled=${e.disabled}
                    .value=${o}
                    ${H(`input`,n=>{Pz({inputs:e,previousValue:o,event:n,inputBlockedCallback(e){t(new i.inputBlocked({detail:e}))},newValueCallback(e){t(new i.valueChange({detail:e}))}})})}
                    placeholder=${GP(e.placeholder||void 0)}
                    ${XF(e.attributePassthrough)}
                />

                ${cI(!!(e.showClearButton&&e.value),U`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${H(`mousedown`,e=>{e.stopImmediatePropagation(),e.preventDefault()})}
                            ${H(`click`,()=>{e.disabled||(t(new i.valueChange({detail:``})),t(new i.clear({detail:void 0})))})}
                        >
                            <${Y.assign({icon:fz.CircleX16})}></${Y}>
                        </button>
                    `)}
                ${cI(e.type===Fz.Password,U`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${H(`mousedown`,e=>{e.stopImmediatePropagation(),e.preventDefault()})}
                            ${H(`click`,()=>{r({showPassword:!n.showPassword})})}
                        >
                            <${Y.assign({icon:n.showPassword?fz.Eye16:fz.EyeOff16})}></${Y}>
                        </button>
                    `)}
                ${cI(!!e.suffix,U`
                        <div class="suffix">${e.suffix}</div>
                    `)}

                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>
            </span>
        `;return e.label?U`
                <label for=${n.randomId} ${l}>
                    <span class="input-label">${e.label}</span>
                    ${d}
                </label>
            `:d}});function Lz(e,t){return e===Fz.Password&&t?Fz.Default:e||Fz.Default}var Rz=BF()({tagName:`vira-color-slider`,cssVars:{"vira-color-slider-gradient":`black`},styles({cssVars:e}){return V`
            :host {
                display: flex;
                align-items: center;
                font-family: ${sL[`vira-monospace`].value};
                gap: 2px;
            }

            input[type='range'] {
                flex-grow: 1;
                appearance: none;
                background: ${e[`vira-color-slider-gradient`].value};
                height: 9px;
                border-radius: 4px;
                cursor: pointer;
            }

            ${Iz} {
                width: 76px;
            }

            .coordinate {
                font-size: 18px;
                margin-top: -4px;
            }
        `},events:{valueChange:OF()},render({inputs:e,events:t,dispatch:n,cssVars:r}){let i=MI[e.colorFormatName],a=i.coords[e.colorCoordinateName];if(!a)throw Error(`Invalid color coordinate '${e.colorCoordinateName}' for color format '${e.colorFormatName}'`);let o=V`linear-gradient(to right, ${j(nl(10,t=>{let n=a.min+(a.max-a.min)*(t/10);return new ZI({[e.colorFormatName]:{...e.color[e.colorFormatName],[e.colorCoordinateName]:n}}).toCss()[i.conversionFormat]}).join(`,`))})`,s=Ic.isNumber(e.color[e.colorFormatName][e.colorCoordinateName]),c=a.radix?Math.round(s).toString(a.radix).toUpperCase().padStart(a.radixPad||0,`0`):String(s);return U`
            <span class="coordinate">${e.colorCoordinateName.toUpperCase()}</span>
            <input
                type="range"
                style=${V`
                    ${r[`vira-color-slider-gradient`].name}: ${o};
                `}
                step=${10**(a.digits?-a.digits:0)}
                ${rI(e=>{Vc.instanceOf(e,HTMLInputElement),e.min=String(a.min),e.max=String(a.max),e.value=String(s)})}
                ${H(`input`,e=>{let r=SL(e,HTMLInputElement),i=Number(r.value);isNaN(i)||n(new t.valueChange({detail:i}))})}
            />
            <${Iz.assign({value:c})}
                ${H(Iz.events.valueChange,e=>{let r=a.radix?parseInt(e.detail,a.radix):Number(e.detail);isNaN(r)||n(new t.valueChange({detail:r}))})}
            ></${Iz}>
        `}}),zz=BF()({tagName:`vira-color-format-sliders`,styles:V`
        :host {
            display: flex;
            flex-direction: column;
        }

        h3 {
            ${ER};
        }
    `,events:{colorChange:OF()},render({inputs:e,dispatch:t,events:n}){let r=MI[e.colorFormatName],i=x(r.coords).map(i=>U`
                    <${Rz.assign({color:e.color,colorCoordinateName:i,colorFormatName:e.colorFormatName})}
                        ${H(Rz.events.valueChange,a=>{let o=e.color.clone();o.set({[e.colorFormatName]:{[i]:a.detail}});let s=o.toCss()[r.conversionFormat];t(new n.colorChange({detail:s}))})}
                    ></${Rz}>
                `);return U`
            ${e.showFormatName?U`
                      <h3>${e.colorFormatName}</h3>
                  `:M}
            ${i}
        `}}),Bz;(function(e){e.Vertical=`vertical`,e.Horizontal=`horizontal`})(Bz||={});function Vz({headers:e,originalData:t,dataMap:n,options:r={}}){let i=t.map((e,t)=>({cells:n(e,t),data:e}));return r.orientation===Bz.Horizontal?{headerRow:void 0,rows:el(e,e=>{if(e.disabled)return;let t=r.hideHeaders?[]:[{content:e.content??e.key,key:e.key,data:void 0}],n=el(i,({data:t,cells:n})=>{if(n)return{content:n[e.key],key:e.key,data:t}},A.isTruthy);return{cells:[...t,...n],data:void 0}},A.isTruthy),orientation:Bz.Horizontal}:{headerRow:r.hideHeaders?[]:el(e,e=>{if(!e.disabled)return{content:e.content??e.key,key:e.key,data:void 0}},A.isTruthy),rows:el(i,({cells:t,data:n})=>{if(t)return{cells:el(e,e=>{if(!e.disabled)return{content:t[e.key],key:e.key,data:n}},A.isTruthy),data:n}},A.isTruthy),orientation:Bz.Vertical}}var Hz=BF()({tagName:`vira-color-swatch`,styles:V`
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
    `,render({inputs:e}){let t=e.backgroundColor||e.foregroundColor,n=e.foregroundColor||`transparent`;return U`
            <div
                style=${V`
                    background-color: ${j(t)};
                    color: ${j(n)};
                `}
            >
                <slot></slot>
            </div>
        `}}),Uz=class extends Ql()(`local-storage-client-all-values-event`){},Wz=new class{shapes;options;listenTarget=new tu;keyEvents;get AllValuesType(){throw Error(`Cannot use AllValuesType as a runtime value. It is a type only.`)}get ValueType(){throw Error(`Cannot use ValueType as a runtime value. It is a type only.`)}constructor(e,t={}){this.shapes=e,this.options=t,this.storeName=t.storeName||`local-storage-client`,this.keyEvents=zl(e,e=>class extends Ql()(`local-storage-client-${String(e)}-event`){}),this.get=zl(this.shapes,e=>(t={})=>this.getAllValues(t)[e]),this.listen=zl(this.shapes,e=>t=>this.listenTarget.listen(this.keyEvents[e],async e=>{await t(e.detail)})),this.set=zl(this.shapes,e=>t=>{XN(t,this.shapes[e],{allowExtraKeys:!0},`LocalStorageClient: Invalid value for key '${String(e)}'.`);let n=this.getAllValues();return n[e]=t,globalThis.localStorage.setItem(this.storeName,JSON.stringify(n)),this.listenTarget.dispatch(new Uz({detail:n})),this.listenTarget.dispatch(new this.keyEvents[e]({detail:t})),t}),this.delete=zl(this.shapes,e=>()=>{let t=this.getAllValues();delete t[e],globalThis.localStorage.setItem(this.storeName,JSON.stringify(t)),this.listenTarget.dispatch(new Uz({detail:t})),this.listenTarget.dispatch(new this.keyEvents[e]({detail:void 0}))})}storeName;getAllValues({throwErrorOnFailure:e=!1}={}){return ol(()=>xl(JSON.parse(globalThis.localStorage.getItem(this.storeName)||`{}`),(t,n)=>{let r=this.shapes[t];if(r){if(e)XN(n,r,{allowExtraKeys:!0});else if(!YN(n,r,{allowExtraKeys:!0}))return;return{key:t,value:n}}}),{handleError:t=>{if(e)throw Le(t,`LocalStorageClient: store '${this.storeName}' is corrupt and cannot be loaded.`);return{}}})}listenToAllValues(e){return this.listenTarget.listen(Uz,async t=>{await e(t.detail)})}listen;get;set;delete;clear(){globalThis.localStorage.removeItem(this.storeName)}destroy(){this.listenTarget.destroy()}}({lastFormat:RN(AI)}),Gz=dz(fz.Check16,16),Kz=gL()({tagName:`vira-menu-item`,state(){return{cleanupListeners:void 0}},events:{activate:OF()},hostClasses:{"vira-menu-item-selected"({inputs:e}){return!!e.selected||!!e.iconOverride},"vira-menu-item-disabled"({inputs:e}){return!!e.disabled},"vira-menu-item-enabled"({inputs:e}){return!e.disabled},"vira-menu-item-default-icon"({inputs:e}){return!e.iconOverride},"vira-menu-item-default-styles"({inputs:e}){return!e.disablePointerStyles}},cssVars:{"vira-menu-item-icon-gap":`3px`,"vira-menu-item-padding":`8px 12px 8px 0`},styles({hostClasses:e,cssVars:t}){return V`
            :host {
                display: flex;
                flex-shrink: 0;
                ${Az};
                box-sizing: border-box;
                max-width: 100%;
                padding-left: calc(${t[`vira-menu-item-icon-gap`].value} * 2);
                gap: ${t[`vira-menu-item-icon-gap`].value};
                overflow: hidden;
                align-items: center;
                text-align: left;
            }

            ${e[`vira-menu-item-disabled`].selector}${e[`vira-menu-item-default-styles`].selector} {
                cursor: not-allowed;

                & .slot-wrapper,
                & ${Y} {
                    opacity: 0.3;
                    pointer-events: none;
                }
            }

            :host(:focus),
            :host(:active) {
                outline: none;
            }

            ${e[`vira-menu-item-enabled`].selector}${e[`vira-menu-item-default-styles`].selector} {
                cursor: pointer;

                &:host(:focus) {
                    background-color: ${q[`vira-form-selection-hover-color`].value};
                }

                &:host(:active) {
                    background-color: ${q[`vira-form-selection-active-color`].value};
                }
            }

            ${Y} {
                width: 16px;
                aspect-ratio: 1;
                align-items: center;
                justify-content: center;
            }

            ${e[`vira-menu-item-default-icon`].selector} {
                ${Y} {
                    visibility: hidden;
                }
            }

            ${e[`vira-menu-item-selected`].selector} ${Y} {
                visibility: visible;
            }

            .slot-wrapper {
                padding: ${t[`vira-menu-item-padding`].value};
                display: flex;
                flex-grow: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0;

                & > slot {
                    display: block;
                    flex-grow: 1;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    min-width: 0;
                }
            }
        `},init({state:e,updateState:t,host:n,inputs:r,dispatch:i,events:a}){n.setAttribute(`role`,`menuitem`),n.setAttribute(`tabindex`,r.disabled?`-1`:`0`),n.setAttribute(`aria-selected`,String(!!r.selected)),n.setAttribute(`aria-disabled`,String(!!r.disabled)),e.cleanupListeners?.();let o={};function s(e){o[e.type]||(r.disabled?(e.preventDefault(),e.stopPropagation()):e.type===`click`&&(r.keepOpenAfterInteraction&&e.stopPropagation(),Ic.instanceOf(n.shadowRoot.querySelector(`slot`),HTMLSlotElement).assignedElements({flatten:!0}).forEach(t=>{if(t instanceof HTMLElement&&!e.composedPath().includes(t)){e.preventDefault(),o[e.type]=!0;let n=nu(t,`click`,e=>{e.stopPropagation()});e instanceof MouseEvent&&(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)?t.dispatchEvent(new MouseEvent(`click`,e)):t.click(),n(),delete o[e.type]}})))}let c=[nu(n,`click`,s),nu(n,`mousedown`,s),nu(n,`click`,e=>{o[e.type]||r.disabled||r.keepOpenAfterInteraction||i(new a.activate({detail:void 0}))},{capture:!0}),nu(n,`keydown`,e=>{e instanceof KeyboardEvent&&e.target===n&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),n.click())}),nu(n,`mouseenter`,()=>{r.disabled||n.focus()}),nu(n,`mouseleave`,()=>{r.disabled||n.blur()})];t({cleanupListeners(){c.forEach(e=>e())}})},cleanup({state:e,updateState:t}){e.cleanupListeners?.(),t({cleanupListeners:void 0})},render({inputs:e}){return U`
            ${e.hideIcon?M:U`
                      <${Y.assign({icon:e.iconOverride||Gz})}></${Y}>
                  `}
            <div class="slot-wrapper">
                <slot>&nbsp;</slot>
            </div>
        `}}),qz=gL()({tagName:`vira-popover-trigger`,state({host:e}){let t=new dR(e,{activateOnMouseUp:!0});return{isOpen:!1,navController:t,popoverManager:new TR(t)}},slotNames:[`vira-popover-trigger-trigger`,`vira-popover-trigger-popover`],hostClasses:{"vira-popover-trigger-disabled"({inputs:e}){return!!e.isDisabled},"vira-popover-trigger-inside-focus"({inputs:e}){return!!e.useInsideFocus},"vira-popover-trigger-outside-focus"({inputs:e}){return!e.useInsideFocus}},cssVars:{"vira-popover-trigger-offset-vertical":`0px`,"vira-popover-trigger-offset-left":`0px`,"vira-popover-trigger-offset-right":`0px`},styles({hostClasses:e,cssVars:t}){return V`
            :host {
                display: inline-flex;
                box-sizing: border-box;
                vertical-align: middle;
                position: relative;
                max-width: 100%;
            }

            .dropdown-wrapper {
                ${DR};
                cursor: pointer;
                max-width: 100%;
                position: relative;
                flex-grow: 1;
                box-sizing: border-box;
            }

            ${e[`vira-popover-trigger-inside-focus`].selector} .dropdown-wrapper {
                ${mz({renderInside:!0})}
            }
            ${e[`vira-popover-trigger-outside-focus`].selector} .dropdown-wrapper {
                ${mz()}
            }

            .dropdown-trigger {
                box-sizing: border-box;
                ${Az};
            }

            ${e[`vira-popover-trigger-disabled`].selector} {
                ${Ez}
                pointer-events: auto;
            }

            ${e[`vira-popover-trigger-disabled`].selector} .dropdown-wrapper {
                pointer-events: none;
            }

            ${mL({selector:V`.popover-positioner`,fallbacks:[{name:`vira-popover-leftwards`,styles:V`
                            position-area: block-end span-inline-start;
                            margin-left: 0;
                        `},{name:`vira-popover-viewport-right`,styles:V`
                            position-area: block-end span-all;
                            justify-self: end;
                            margin-left: 0;
                            max-width: min(500px, 100%);
                        `},{name:`vira-popover-upwards`,styles:V`
                            min-height: 0;
                        `,flipBlock:!0},{name:`vira-popover-leftwards-upwards`,styles:V`
                            position-area: block-end span-inline-start;
                            margin-left: 0;
                            min-height: 0;
                        `,flipBlock:!0},{name:`vira-popover-viewport-right-upwards`,styles:V`
                            position-area: block-end span-all;
                            justify-self: end;
                            margin-left: 0;
                            max-width: min(500px, 100%);
                            min-height: 0;
                        `,flipBlock:!0}]})}

            .popover-positioner {
                pointer-events: none;
                box-sizing: border-box;
                flex-direction: column;
                align-items: stretch;

                margin-top: ${t[`vira-popover-trigger-offset-vertical`].value};
                /*
                    The positioner is invisible outside of its content, so this minimum only makes
                    it flip upwards when there is not much room below the trigger.
                */
                min-height: 200px;
                /*
                    Margins are not included in the percentage. The extra 4px keeps the popover off
                    the window's top or bottom edge.
                */
                max-height: calc(
                    100% - ${t[`vira-popover-trigger-offset-vertical`].value} - 4px
                );
                width: max-content;
                min-width: calc(
                    anchor-size(width) - ${t[`vira-popover-trigger-offset-left`].value} -
                        ${t[`vira-popover-trigger-offset-right`].value}
                );
                /*
                    Not limited to the room beside the trigger, so a popover that does not fit there
                    overflows it and moves on to the next position-try-fallbacks entry.
                */
                max-width: min(500px, 100vw);
                position-area: block-end span-inline-end;
                margin-left: ${t[`vira-popover-trigger-offset-left`].value};

                &:popover-open {
                    display: flex;
                }

                & > * {
                    pointer-events: auto;
                    max-width: 100%;
                }
            }
        `},events:{navSelect:OF(),openChange:OF(),init:OF()},cleanup({state:e,updateState:t}){t({isOpen:!1}),e.popoverManager.destroy()},init({state:e,inputs:t,dispatch:n,events:r,host:i}){nu(i,`click`,n=>{let r=i.shadowRoot.querySelector(`.dropdown-wrapper`);t.keepOpenAfterInteraction||r&&n.composedPath().includes(r)||(n instanceof MouseEvent&&n.detail===0?yR():!(n instanceof MouseEvent)||n.button!==0||bR(n))||e.popoverManager.hide()}),n(new r.init({detail:{navController:e.navController,popoverManager:e.popoverManager}}))},render({dispatch:e,events:t,state:n,inputs:r,updateState:i,host:a,slotNames:o,cssVars:s}){return U`
            <button
                ?disabled=${!!r.isDisabled}
                class="dropdown-wrapper ${WP({open:n.isOpen})}"
                role="listbox"
                aria-expanded=${n.isOpen}
                ${DI(n.popoverManager,{trigger:r.isDisabled?!1:r.trigger??xR.Mousedown,getPopover(){return Ic.instanceOf(a.shadowRoot.querySelector(`.popover-positioner`),HTMLElement)},onNavSelect(i){r.keepOpenAfterInteraction||n.popoverManager.hide(),e(new t.navSelect({detail:i}))}})}
            >
                <div class="dropdown-trigger">
                    <slot name=${o[`vira-popover-trigger-trigger`]}></slot>
                </div>
            </button>
            <div
                class="popover-positioner"
                popover="manual"
                style=${V`
                    ${s[`vira-popover-trigger-offset-vertical`].name}: ${r.popoverOffset?.vertical||0}px;
                    ${s[`vira-popover-trigger-offset-left`].name}: ${r.popoverOffset?.left||0}px;
                    ${s[`vira-popover-trigger-offset-right`].name}: ${r.popoverOffset?.right||0}px;
                `}
                ${H(`toggle`,()=>{let o=n.popoverManager.isOpen();o!==n.isOpen&&(i({isOpen:o}),e(new t.openChange({detail:o})),!o&&r.focusOnClose&&!r.isDisabled&&Ic.instanceOf(a.shadowRoot.querySelector(`.dropdown-wrapper`),HTMLButtonElement).focus())})}
                ${H(Kz.events.activate,()=>{r.keepOpenAfterInteraction||n.popoverManager.hide()})}
            >
                ${cI(n.isOpen,U`
                        <slot name=${o[`vira-popover-trigger-popover`]}></slot>
                    `)}
            </div>
        `}});function Jz({search:e,text:t}){let n=t.toLowerCase();return e.replaceAll(/\s/g,``).toLowerCase().split(``).reduce((e,t)=>e<0?e:n.indexOf(t,e)+1||-1,0)>=0}function Yz(e,t){return el(e,(e,n)=>U`
                <${Kz.assign({...e})}
                    ${t?XL(t,{disabled:e.disabled}):M}
                    ${H(`click`,async t=>{e.disabled?(t.stopImmediatePropagation(),t.preventDefault()):await e.onClick?.({event:t,index:n})})}
                >
                    ${e.content}
                </${Kz}>
            `,(e,t)=>!t.hidden)}function Xz(e){return`groupName`in e}var Zz;(function(e){e.Round=`round`,e.Square=`square`})(Zz||={});var Qz;(function(e){e.Up=`up`,e.Down=`down`})(Qz||={});var $z=24;function eB(e,t){return{[Qz.Up]:e.scrollTop,[Qz.Down]:e.scrollHeight-e.clientHeight-e.scrollTop}[t]>=1}function tB(e,t){let n=e.getBoundingClientRect().top;return t.map(t=>{let r=t.getBoundingClientRect(),i=r.top-n+e.scrollTop;return{top:i,bottom:i+r.height}})}function nB(e,t,n){let r=tB(e,t),i=r[0],a=r.at(-1);return!i||!a?eB(e,n):{[Qz.Up](){return(i.top+i.bottom)/2<e.scrollTop},[Qz.Down](){return(a.top+a.bottom)/2>e.scrollTop+e.clientHeight}}[n]()}function rB(e,t,n){let r=tB(e,t),i=e.scrollHeight-e.clientHeight;return{[Qz.Up](){let t=r.findLast(t=>t.top<e.scrollTop-1);return Math.max(0,t?.top??0)},[Qz.Down](){let t=r.find(t=>t.bottom>e.scrollTop+e.clientHeight+1);return Math.min(i,(t?.bottom??1/0)-e.clientHeight)}}[n]()}function iB({scrollArea:e,items:t,direction:n,itemsPerSecond:r}){function i(){e.scrollTop=rB(e,t,n),eB(e,n)||clearInterval(a)}let a=setInterval(i,1e3/r);return i(),()=>{clearInterval(a)}}var aB=gL()({tagName:`vira-menu`,state(){return{canScrollUp:!1,canScrollDown:!1,stopScrolling:void 0}},cleanup({state:e}){e.stopScrolling?.()},hostClasses:{"vira-menu-square"({inputs:e}){return e.cornerStyle===Zz.Square}},styles({hostClasses:e}){return V`
            :host {
                display: flex;
                flex-direction: column;
                max-width: 100%;
                max-height: 100%;
                overflow: hidden;
                z-index: 99;
                box-sizing: border-box;
                border-radius: ${q[`vira-form-radius`].value};
                background-color: ${q[`vira-form-background-color`].value};
                border: 1px solid ${q[`vira-form-border-color`].value};
                color: ${q[`vira-form-foreground-color`].value};
                ${kz.menuShadow}
            }

            ${e[`vira-menu-square`].selector} {
                border-radius: 0;
            }

            .scroll-area {
                min-height: 0;
                overflow-y: auto;
                overscroll-behavior: contain;
            }

            .scroll-area-content {
                display: flex;
                flex-direction: column;
            }

            .scroll-arrow {
                ${Az};
                display: flex;
                flex-shrink: 0;
                justify-content: center;
                padding: 2px 0;

                &.hidden {
                    display: none;
                }

                &.down ${Y} {
                    transform: rotate(180deg);
                }
            }
        `},render({inputs:e,state:t,updateState:n,host:r}){function i(){return Ic.instanceOf(r.shadowRoot.querySelector(`.scroll-area`),HTMLElement)}function a(){return Ic.instanceOf(r.shadowRoot.querySelector(`slot`),HTMLSlotElement).assignedElements({flatten:!0})}function o(){n({canScrollUp:nB(i(),a(),Qz.Up),canScrollDown:nB(i(),a(),Qz.Down)})}function s(r,o){return U`
                <div
                    class=${WP({"scroll-arrow":!0,[r]:!0,hidden:!o})}
                    aria-hidden="true"
                    ${H(`mouseenter`,()=>{t.stopScrolling?.(),n({stopScrolling:iB({scrollArea:i(),items:a(),direction:r,itemsPerSecond:e.hoverScrollSpeed??$z})})})}
                    ${H(`mouseleave`,()=>{t.stopScrolling?.(),n({stopScrolling:void 0})})}
                    ${H(`mousedown`,e=>{e.preventDefault()})}
                    ${H(`click`,e=>{e.stopPropagation()})}
                >
                    <${Y.assign({icon:fz.ChevronUp16})}></${Y}>
                </div>
            `}return U`
            ${s(Qz.Up,t.canScrollUp)}
            <div
                class="scroll-area"
                ${H(`scroll`,()=>{o()})}
                ${aI(()=>{requestAnimationFrame(o)})}
            >
                <div
                    class="scroll-area-content"
                    ${aI(()=>{requestAnimationFrame(o)})}
                >
                    <slot>&nbsp;</slot>
                </div>
            </div>
            ${s(Qz.Down,t.canScrollDown)}
        `}}),oB=gL()({tagName:`vira-dropdown`,testIds:[`hiddenOptionsHint`,`leadingIcon`,`prefixText`,`searchInput`,`trigger`],styles:V`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 224px;
            position: relative;
            max-width: 100%;
        }

        ${qz} {
            width: 100%;
        }

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .option-label {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            max-width: 100%;
            vertical-align: bottom;
        }

        .option-icon {
            flex-shrink: 0;
        }

        .option-label-text {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .search-input {
            ${DR};
            flex-grow: 1;
            min-width: 0;
            align-self: stretch;
            text-overflow: ellipsis;
            cursor: inherit;
            user-select: text;
            -webkit-user-select: text;
            outline: none;

            &::placeholder {
                color: inherit;
                opacity: 0.4;
            }
        }

        .open .search-input {
            cursor: text;
        }

        .dropdown-trigger:has(.search-input:focus-visible:not([disabled])) {
            position: relative;

            &::after {
                ${mz({elementBorderSize:`1px`,noNesting:!0})}
            }
        }

        .trigger-icon {
            width: 24px;
            aspect-ratio: 1;
            align-self: flex-start;
            will-change: transform;
            transform: rotate(180deg);
            transition: transform
                ${Dz[`vira-interaction-animation-duration`].value} linear;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .open .trigger-icon {
            transform: rotate(0);
        }

        .dropdown-trigger {
            ${Az};
            border: 1px solid ${q[`vira-form-border-color`].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            min-height: ${Tz[xz.Medium]}px;
            padding: 0 3px 0 10px;
            border-radius: ${q[`vira-form-radius`].value};
            background-color: ${q[`vira-form-background-color`].value};
            color: ${q[`vira-form-foreground-color`].value};
        }

        .dropdown-wrapper {
            display: flex;
            width: 100%;
        }

        .has-error .dropdown-trigger {
            border-color: ${q[`vira-form-error-color`].value};
        }

        .option-group-label,
        .no-options,
        .hidden-options-hint {
            ${Az};
            text-align: left;
        }

        .option-group-label {
            color: ${K.colors[`vira-grey-foreground-placeholder`].foreground.value};
            padding: 8px 12px 4px calc(${Kz.cssVars[`vira-menu-item-icon-gap`].value} * 2);
            font-weight: ${q[`vira-form-label-font-weight`].value};
        }

        .no-options,
        .hidden-options-hint {
            cursor: default;
            opacity: 0.6;
            /* Aligns with the label text of each ViraMenuItem, past its check icon. */
            padding: 8px 12px 8px
                calc(${Kz.cssVars[`vira-menu-item-icon-gap`].value} * 3 + 16px);
        }

        ${Kz}.option-group-label {
            padding: 0 0 0 calc(${Kz.cssVars[`vira-menu-item-icon-gap`].value} * 2);
            ${Kz.cssVars[`vira-menu-item-padding`].name}: 8px 12px 4px 0;
        }

        .readonly-value {
            overflow-wrap: anywhere;
        }

        .using-placeholder {
            opacity: 0.4;
        }

        label {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 2px;
            width: 100%;
            max-width: 100%;

            & .dropdown-label {
                font-weight: ${q[`vira-form-label-font-weight`].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }
    `,events:{selectedValuesChange:OF(),openChange:OF()},state(){return{isOpen:!1,shouldSelectOnMouseUp:!1,randomId:Gl(32),searchText:``,navController:void 0,popoverManager:void 0}},render({state:e,inputs:t,dispatch:n,events:r,updateState:i,testIds:a,host:o}){let s=t.options.flatMap(e=>Xz(e)?e.options:[e]),c=el(t.selected,e=>s.find(t=>t.value===e),A.isTruthy),l=t.icon?U`
                  <${Y.assign({icon:t.icon})}
                      ${fI(a.leadingIcon)}
                  ></${Y}>
              `:M,u=!c.length,d=t.selectionPrefix&&!u?U`
                      <span class="selected-label-prefix" ${fI(a.prefixText)}>
                          ${t.selectionPrefix}
                      </span>
                  `:M,f=u?t.placeholder||``:t.isMultiSelect&&c.length>1?`${c.length} Selected`:c[0]?.label||``;function p(e){return e.icon||e.labelTemplate?U`
                      <span class="option-label">
                          ${e.icon?U`
                                    <${Y.assign({icon:e.icon})}
                                        class="option-icon"
                                    ></${Y}>
                                `:M}
                          <span class="option-label-text">
                              ${e.labelTemplate??e.label}
                          </span>
                      </span>
                  `:e.label}let m=A.isLengthExactly(c,1)?p(c[0]):f;function h(e){let i=t.isMultiSelect?c.includes(e)?el(c,e=>e.value,(t,n)=>n!==e):[...c.map(e=>e.value),e.value]:[e.value];n(new r.selectedValuesChange({detail:i}))}let g=e.searchText?el(t.options,t=>Xz(t)?{...t,options:t.options.filter(t=>Jz({search:e.searchText,text:t.label}))}:t,t=>Xz(t)?!!t.options.length:Jz({search:e.searchText,text:t.label})):t.options,_=g.flatMap(e=>Xz(e)?e.options:[e]),ee=t.isSearchable?t.maxShownOptions??1/0:1/0,te=ee<_.length?el(g,e=>{let t=(Xz(e)?e.options:[e]).slice(0,Math.max(ee,0));if(ee-=t.length,t.length)return Xz(e)?{...e,options:t}:e},A.isTruthy):g,ne=_.length-te.flatMap(e=>Xz(e)?e.options:[e]).length;function re(){let e=o.shadowRoot.querySelector(`.search-input`);return e instanceof HTMLInputElement?e:void 0}function ie(e){e.value=``,i({searchText:``})}function ae(e){let t=e.options.filter(e=>!e.disabled),i=t.every(e=>c.includes(e));n(new r.selectedValuesChange({detail:(i?c.filter(e=>!t.includes(e)):[...c,...t.filter(e=>!c.includes(e))]).map(e=>e.value)}))}function oe(n){return t.isMultiSelect?U`
                      <${Kz.assign({disablePointerStyles:!0,hideIcon:!0})}
                          class="option-group-label"
                          ${e.navController?XL(e.navController):M}
                          ${H(`click`,()=>{ae(n)})}
                      >
                          ${n.groupName}
                      </${Kz}>
                  `:U`
                      <div class="option-group-label">${n.groupName}</div>
                  `}let se=te.flatMap(e=>{let n=(Xz(e)?e.options:[e]).map(e=>e.disabled?void 0:()=>{h(e)});return Xz(e)&&t.isMultiSelect?[()=>{ae(e)},...n]:n});function ce(t){return Yz(t.map(e=>({content:p(e),onClick(){h(e)},disabled:e.disabled,selected:c.includes(e)})),e.navController)}let le=e.isOpen&&(!!_.length||!!t.noOptionsText),ue=U`
            <${aB.assign({cornerStyle:Zz.Round,hoverScrollSpeed:t.menuHoverScrollSpeed})}
                slot=${qz.slotNames[`vira-popover-trigger-popover`]}
                ${H(`mouseup`,t=>{if(e.shouldSelectOnMouseUp){let e=t.composedPath().find(e=>e instanceof Kz);(e?se[Array.from(SL(t,aB).querySelectorAll(Kz.tagName)).indexOf(e)]:void 0)?.()}})}
            >
                ${_.length?te.map(e=>Xz(e)?U`
                                    ${oe(e)} ${ce(e.options)}
                                `:ce([e])):U`
                          <div class="no-options">${t.noOptionsText}</div>
                      `}
                ${ne?U`
                          <div
                              class="hidden-options-hint"
                              ${fI(a.hiddenOptionsHint)}
                              ${H(`mousedown`,e=>{e.preventDefault()})}
                              ${H(`click`,e=>{e.stopPropagation()})}
                          >
                              ${t.hiddenOptionsText?.(ne)??`+${ne}, type to narrow your search`}
                          </div>
                      `:M}
            </${aB}>
        `,de=U`
            <${qz.assign({...t,keepOpenAfterInteraction:t.isMultiSelect,focusOnClose:!0,popoverOffset:{vertical:-1,right:24}})}
                ${H(qz.events.init,e=>{i({navController:e.detail.navController,popoverManager:e.detail.popoverManager})})}
                ${H(qz.events.openChange,t=>{e.isOpen!==t.detail&&n(new r.openChange({detail:t.detail})),i({isOpen:t.detail});let a=re();if(a)t.detail?a.focus():ie(a);else return})}
                ${H(`keydown`,t=>{let n=re(),r=t.key===`Backspace`||t.key.length===1&&t.key!==` `&&!t.ctrlKey&&!t.metaKey&&!t.altKey;n&&r&&(e.isOpen||ie(n),n.focus(),e.popoverManager?.show())})}
                ${H(`mouseup`,()=>{e.shouldSelectOnMouseUp&&i({shouldSelectOnMouseUp:!1})})}
            >
                <div
                    class="dropdown-trigger ${WP({open:e.isOpen})}"
                    slot=${qz.slotNames[`vira-popover-trigger-trigger`]}
                    id=${GP(t.label?e.randomId:void 0)}
                    aria-label=${GP(A.isString(t.label)&&t.label||void 0)}
                    ${XF(t.attributePassthrough)}
                    ${fI(a.trigger)}
                    ${H(`mousedown`,()=>{e.isOpen||i({shouldSelectOnMouseUp:!0})})}
                >
                    ${l}
                    ${t.isSearchable?U`
                              ${e.isOpen?M:d}
                              <input
                                  class="search-input"
                                  ${fI(a.searchInput)}
                                  tabindex="-1"
                                  autocomplete="off"
                                  spellcheck="false"
                                  aria-label=${GP(A.isString(t.label)&&t.label||void 0)}
                                  ?disabled=${!!t.isDisabled}
                                  title=${GP(u||e.isOpen?void 0:f)}
                                  placeholder=${e.isOpen&&!u?f:t.placeholder||``}
                                  .value=${e.isOpen?e.searchText:u?``:f}
                                  ${H(`mousedown`,t=>{e.isOpen&&t.stopPropagation()})}
                                  ${H(`input`,t=>{i({searchText:SL(t,HTMLInputElement).value}),e.popoverManager?.show()})}
                                  ${H(`keydown`,n=>{if(e.isOpen){if(n.key===`ArrowDown`||n.key===`ArrowUp`)n.preventDefault(),e.navController?.navigate({direction:n.key===`ArrowDown`?OL.Down:OL.Up,allowWrapping:!1});else if(n.key===`Tab`&&!n.shiftKey){let e=Array.from(o.shadowRoot.querySelectorAll(Kz.tagName)).find(e=>e.tabIndex>=0);e&&(n.preventDefault(),e.focus())}else if(n.key===`Enter`){let r=_.find(e=>!e.disabled);if(!r)return;n.preventDefault(),h(r),t.isMultiSelect?ie(SL(n,HTMLInputElement)):e.popoverManager?.hide()}}})}
                              />
                          `:U`
                              <span
                                  class="selection-display ${WP({"using-placeholder":u})}"
                                  title=${GP(u?void 0:f)}
                              >
                                  ${d} ${m}
                              </span>
                          `}

                    <span class="trigger-icon-wrapper">
                        <${Y.assign({icon:fz.ChevronUp16})}
                            class="trigger-icon"
                        ></${Y}>
                    </span>
                </div>
                ${le?ue:M}
            </${qz}>
        `,fe=t.isReadonly?U`
                  <span class="readonly-value">${m}</span>
              `:de;return t.label?U`
                <label
                    for=${GP(t.isReadonly?void 0:e.randomId)}
                    class=${WP({"has-error":!!t.hasError})}
                >
                    <span class="dropdown-label">${t.label}</span>
                    ${fe}
                </label>
            `:U`
                <span
                    class="dropdown-wrapper ${WP({"has-error":!!t.hasError})}"
                >
                    ${fe}
                </span>
            `}}),sB=Hl(AI).map(e=>({value:e,label:e.toUpperCase()})),cB=BF()({tagName:`vira-color-picker`,cssVars:{"vira-color-picker-swatch-width":{default:`100px`,syntax:Gd.Length},"vira-color-picker-swatch-height":{default:`100px`,syntax:Gd.Length}},state(){return{selectedFormatName:Wz.get.lastFormat()||AI.rgb,rawInput:void 0}},hostClasses:{"vira-color-picker-always-show"({inputs:e}){return!!e.alwaysShowPicker}},styles({cssVars:e,hostClasses:t}){return V`
            :host {
                display: inline-flex;
            }

            ${t[`vira-color-picker-always-show`].selector} {
                flex-direction: column;
                align-items: center;
                gap: 4px;
            }

            button {
                ${DR}
                cursor: pointer;
                display: flex;
            }

            ${qz} {
                width: 100%;
                height: 100%;
                box-sizing: border-box;
            }

            .swatch-wrapper {
                display: flex;
                flex-direction: column;
                gap: 4px;
                align-items: center;

                & ${Hz} {
                    width: ${e[`vira-color-picker-swatch-width`].value};
                    height: ${e[`vira-color-picker-swatch-height`].value};
                    box-sizing: border-box;
                }
            }

            .code-button {
                font-family: ${sL[`vira-monospace`].value};
                font-size: 12px;
                color: #666;
                display: flex;
                justify-content: center;
                gap: 2px;
                align-items: center;

                & ${Y} {
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

            .popover .picker {
                ${kz.menuShadow}
            }

            .raw-input-wrapper {
                text-align: left;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                font-size: 12px;
                ${q[`vira-form-border-color`].name}: #ddd;
                color: #666;

                & ${Iz} {
                    flex-grow: 1;
                    width: unset;
                    color: inherit;
                    border: none;
                }
            }
        `},events:{colorChange:OF()},render({inputs:e,dispatch:t,events:n,state:r,updateState:i}){let a=ZI.isColor(e.color)?e.color:new ZI(e.color||`black`),o=MI[r.selectedFormatName],s=r.rawInput??a.toCss()[o.rawSyntax],c=U`
            <div class="raw-input-wrapper">
                <${Iz.assign({value:s})}
                    ${H(Iz.events.valueChange,e=>{let r=e.detail;i({rawInput:r}),ZI.isValidColorString(r)&&t(new n.colorChange({detail:r}))})}
                ></${Iz}>
                <button
                    class="code-button"
                    ${H(`click`,async()=>{await globalThis.navigator.clipboard.writeText(s)})}
                >
                    <${Y.assign({icon:fz.Copy16,fitContainer:!0})}></${Y}>
                </button>
            </div>
        `,l=U`
            <button
                class="code-button"
                ${H(`click`,async()=>{await globalThis.navigator.clipboard.writeText(a.hexString)})}
            >
                <span>${a.hexString}</span>
                <${Y.assign({icon:fz.Copy16,fitContainer:!0})}></${Y}>
            </button>
        `,u=U`
            <div class="swatch-wrapper">
                <${Hz.assign({backgroundColor:a})}></${Hz}>
                ${e.showHexValue?l:M}
            </div>
        `,d=U`
            <div class="picker">
                <${oB.assign({options:sB,selected:[r.selectedFormatName]})}
                    ${H(oB.events.selectedValuesChange,e=>{let t=Uc.isEnumValue(e.detail[0],AI);t&&(i({selectedFormatName:t}),Wz.set.lastFormat(t))})}
                ></${oB}>
                ${c}
                <${zz.assign({color:a,colorFormatName:r.selectedFormatName,showFormatName:!1})}
                    ${H(zz.events.colorChange,e=>{t(new n.colorChange({detail:e.detail})),i({rawInput:void 0})})}
                ></${zz}>
            </div>
        `;return e.alwaysShowPicker?U`
                ${u} ${d}
            `:U`
                <${qz.assign({keepOpenAfterInteraction:!0})}>
                    <button
                        class="trigger"
                        slot=${qz.slotNames[`vira-popover-trigger-trigger`]}
                        ${H(`mousedown`,()=>{let e=Wz.get.lastFormat();e&&i({selectedFormatName:e})})}
                    >
                        ${u}
                    </button>
                    <div
                        class="popover"
                        slot=${qz.slotNames[`vira-popover-trigger-popover`]}
                    >
                        ${d}
                    </div>
                </${qz}>
            `}}),lB={value:V`transparent`};function uB(e){let t=vz[e][`behind-bg`],n=vz[e].foreground,r=vz[e][`on-self`];return{[Cz.Standard]:{idle:{backgroundColor:t[W.NonBodyText].background,textColor:t[W.NonBodyText].foreground,borderColor:t[W.BodyText].background},hover:{backgroundColor:t[W.Header].background,textColor:t[W.Header].foreground,borderColor:t[W.BodyText].background},active:{backgroundColor:t[W.BodyText].background,textColor:t[W.BodyText].foreground,borderColor:t[W.BodyText].background}},[Cz.Subtle]:{idle:{backgroundColor:lB,textColor:n[W.NonBodyText].foreground,borderColor:lB},hover:{backgroundColor:r[W.BodyText].background,textColor:r[W.BodyText].foreground,borderColor:r[W.BodyText].foreground},active:{backgroundColor:r[W.NonBodyText].background,textColor:r[W.NonBodyText].foreground,borderColor:r[W.NonBodyText].foreground}}}}var dB={[Cz.Standard]:{idle:{backgroundColor:K.colors[iL].foreground,textColor:K.colors[iL].background,borderColor:K.colors[iL].foreground},hover:{backgroundColor:K.colors[`vira-grey-behind-bg-non-body`].background,textColor:K.colors[`vira-grey-behind-bg-non-body`].foreground,borderColor:K.colors[iL].foreground},active:{backgroundColor:K.colors[`vira-grey-behind-bg-body`].background,textColor:K.colors[`vira-grey-behind-bg-body`].foreground,borderColor:K.colors[iL].foreground}},[Cz.Subtle]:{idle:{backgroundColor:lB,textColor:K.colors[iL].foreground,borderColor:lB},hover:{backgroundColor:K.colors[`vira-grey-on-self-body`].background,textColor:K.colors[`vira-grey-on-self-body`].foreground,borderColor:K.colors[`vira-grey-on-self-body`].foreground},active:{backgroundColor:K.colors[`vira-grey-on-self-non-body`].background,textColor:K.colors[`vira-grey-on-self-non-body`].foreground,borderColor:K.colors[`vira-grey-on-self-non-body`].foreground}}},fB={[Cz.Standard]:{idle:{backgroundColor:K.colors[iL].background,textColor:K.colors[iL].foreground,borderColor:q[`vira-form-border-color`]},hover:{backgroundColor:K.colors[`vira-grey-behind-fg-small-body`].background,textColor:K.colors[`vira-grey-behind-fg-small-body`].foreground,borderColor:q[`vira-form-border-color`]},active:{backgroundColor:K.colors[`vira-grey-behind-fg-body`].background,textColor:K.colors[`vira-grey-behind-fg-body`].foreground,borderColor:q[`vira-form-border-color`]}},[Cz.Subtle]:uB(gz.grey)[Cz.Subtle]},pB={[Cz.Standard]:{idle:{backgroundColor:K.colors[`vira-grey-behind-fg-small-body`].background,textColor:K.colors[`vira-grey-behind-fg-small-body`].foreground,borderColor:K.colors[`vira-grey-behind-fg-small-body`].background},hover:{backgroundColor:K.colors[`vira-grey-behind-fg-body`].background,textColor:K.colors[`vira-grey-behind-fg-body`].foreground,borderColor:K.colors[`vira-grey-behind-fg-body`].background},active:{backgroundColor:K.colors[`vira-grey-behind-fg-non-body`].background,textColor:K.colors[`vira-grey-behind-fg-non-body`].foreground,borderColor:K.colors[`vira-grey-behind-fg-non-body`].background}},[Cz.Subtle]:uB(gz.grey)[Cz.Subtle]},mB=gL()({tagName:`vira-button`,hostClasses:{"vira-button-size-large"({inputs:e}){return e.buttonSize===xz.Large},"vira-button-size-medium"({inputs:e}){return!e.buttonSize||e.buttonSize===xz.Medium},"vira-button-size-small"({inputs:e}){return e.buttonSize===xz.Small},"vira-button-emphasis-standard"({inputs:e}){return!e.buttonEmphasis||e.buttonEmphasis===Cz.Standard},"vira-button-emphasis-subtle"({inputs:e}){return e.buttonEmphasis===Cz.Subtle},...tl(x(yz),e=>{let t=yz[e];return{key:`vira-button-color-${t}`,value({inputs:n}){return n.color===e||n.color===t}}},{useRequired:!0}),"vira-button-color-plain"({inputs:e}){return!e.color||e.color===J.Plain},"vira-button-color-neutral"({inputs:e}){return e.color===J.Neutral},"vira-button-color-muted"({inputs:e}){return e.color===J.Muted},...tl(bz,e=>({key:`vira-button-color-${e}`,value({inputs:t}){return t.color===e}}),{useRequired:!0}),"vira-button-disabled"({inputs:e}){return!!e.isDisabled},"vira-button-icon-only"({inputs:e}){return!e.text&&(!!e.icon||!!e.rightSideIcon)}},cssVars:{"vira-button-text-color":`transparent`,"vira-button-background-color":`transparent`,"vira-button-border-color":`transparent`,"vira-button-hover-text-color":`transparent`,"vira-button-hover-background-color":`transparent`,"vira-button-hover-border-color":`transparent`,"vira-button-active-text-color":`transparent`,"vira-button-active-background-color":`transparent`,"vira-button-active-border-color":`transparent`,"vira-button-disabled-text-color":K.colors[`vira-grey-behind-bg-decoration`].foreground.value,"vira-button-disabled-background-color":K.colors[`vira-grey-behind-bg-decoration`].background.value,"vira-button-disabled-border-color":K.colors[`vira-grey-behind-bg-decoration`].background.value,"vira-button-border-width":`1px`,"vira-button-border-radius":q[`vira-form-radius`].value},styles({hostClasses:e,cssVars:t}){function n({variantSelector:e,emphasisSelector:n,colors:r}){return V`
                ${e}${n} {
                    ${t[`vira-button-background-color`].name}: ${r.idle.backgroundColor.value};
                    ${t[`vira-button-text-color`].name}: ${r.idle.textColor.value};
                    ${t[`vira-button-border-color`].name}: ${r.idle.borderColor.value};

                    ${t[`vira-button-hover-background-color`].name}: ${r.hover.backgroundColor.value};
                    ${t[`vira-button-hover-text-color`].name}: ${r.hover.textColor.value};
                    ${t[`vira-button-hover-border-color`].name}: ${r.hover.borderColor.value};

                    ${t[`vira-button-active-background-color`].name}: ${r.active.backgroundColor.value};
                    ${t[`vira-button-active-text-color`].name}: ${r.active.textColor.value};
                    ${t[`vira-button-active-border-color`].name}: ${r.active.borderColor.value};
                }
            `}function r(){return j(wz.flatMap(t=>{let r=e[`vira-button-emphasis-${t}`].selector,i=x(yz).map(i=>{let a=yz[i],o=uB(a)[t],s=e[`vira-button-color-${a}`].selector;return n({variantSelector:s,emphasisSelector:r,colors:o})}),a=n({variantSelector:e[`vira-button-color-plain`].selector,emphasisSelector:r,colors:dB[t]}),o=n({variantSelector:e[`vira-button-color-neutral`].selector,emphasisSelector:r,colors:fB[t]}),s=n({variantSelector:e[`vira-button-color-muted`].selector,emphasisSelector:r,colors:pB[t]}),c=bz.map(i=>{let a=uB(i)[t],o=e[`vira-button-color-${i}`].selector;return n({variantSelector:o,emphasisSelector:r,colors:a})});return[...i,a,o,s,...c]}).join(`
`))}function i(){return j(Sz.map(t=>V`
                    ${e[`vira-button-size-${t}`].selector} {
                        font-size: ${q[`vira-form-${t}-text-size`].value};

                        button {
                            min-height: ${Tz[t]}px;
                            padding: 2px
                                ${q[`vira-form-${t}-text-size`].value};
                        }

                        &${e[`vira-button-icon-only`].selector} {
                            min-width: ${Tz[t]}px;
                        }
                    }
                `).join(`
`))}return V`
            :host {
                cursor: pointer;
                display: inline-flex;
                position: relative;
                vertical-align: middle;
                align-items: center;
                box-sizing: border-box;
                ${Az};
                ${q[`vira-form-focus-outline-color`].name}: ${q[`vira-form-accent-primary-hover-color`].value}
            }

            ${i()}
            ${r()}

            button {
                ${DR};
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

                ${mz({elementBorderSize:t[`vira-button-border-width`]})}
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

            button ${Y} + .text-template,
            button .text-template + ${Y} {
                margin-left: 8px;
            }

            ${Y} {
                height: 0;
                display: flex;
                align-items: center;
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
                    color: ${K.colors[`vira-grey-foreground-decoration`].foreground.value};
                    background-color: transparent;
                    border-color: transparent;
                }
            }

            ${e[`vira-button-icon-only`].selector} {
                button {
                    padding: 0;
                }
            }
        `},render({inputs:e}){let t=e.text?U`
                  <span class="text-template">${e.text}</span>
              `:U`
                  <span class="empty-text">&nbsp;</span>
              `,n=[e.icon?U`
                      <${Y.assign({icon:e.icon})}></${Y}>
                  `:M,t,e.rightSideIcon?U`
                      <${Y.assign({icon:e.rightSideIcon})}></${Y}>
                  `:M];return U`
            <button ?disabled=${e.isDisabled}>${n}</button>
        `}}),hB;(function(e){e.Error=`error`,e.Success=`success`})(hB||={});var gB=gL()({tagName:`vira-card`,hostClasses:{"vira-card-error"({inputs:e}){return e.cardState===hB.Error},"vira-card-success"({inputs:e}){return e.cardState===hB.Success}},cssVars:{"vira-card-border":V`1px solid ${q[`vira-form-border-color`].value}`,"vira-card-padding":`20px`},styles({hostClasses:e,cssVars:t}){return V`
            :host {
                display: block;
                border: ${t[`vira-card-border`].value};
                border-radius: ${q[`vira-form-wrapper-radius`].value};
                padding: ${t[`vira-card-padding`].value};
            }

            ${e[`vira-card-error`].selector} {
                border-color: ${q[`vira-form-error-color`].value};
            }
            ${e[`vira-card-success`].selector} {
                border-color: ${q[`vira-form-success-color`].value};
            }
        `},render(){return U`
            <slot></slot>
        `}});function _B({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}var vB=QR({name:`Loader`,svg:UR}),yB=_B({name:`LoaderAnimated24Icon`,svgTemplate:U`
        <style>
            ${V`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        width: 24px;
        height: 24px;
        animation: ${Dz[`vira-extended-animation-duration`].value} linear
            loader-animated-spin infinite;
    }
`}
        </style>
        ${vB.svgTemplate}
    `}),bB=new WeakMap;function xB(e,t){let n=x(t).map(e=>{if(t[e])return`${YR[e].name}: ${String(t[e])};`}).filter(A.isTruthy).join(` `);return Xc(Xc(bB,e,()=>new Map),n,()=>{let t=V`
            ${j(n)}
            display: inline-flex;
            vertical-align: middle;
        `;return{...e,svgTemplate:U`
                <div style=${t}>${e.svgTemplate}</div>
            `}})}var SB=QR({name:`ArrowDownWideNarrow`,svg:OR}),CB=QR({name:`ArrowUpNarrowWide`,svg:kR}),wB=QR({name:`ChevronsUpDown`,svg:NR}),TB=QR({name:`CircleAlert`,svg:PR}),EB=QR({name:`CircleCheck`,svg:FR}),DB=QR({name:`FileSearch`,svg:VR}),OB=QR({name:`SlidersHorizontal`,svg:KR}),kB=QR({name:`Star`,svg:qR}),AB=gL()({tagName:`vira-checkbox`,slotNames:[`vira-checkbox-label`],state(){return{hasSlottedLabel:!1}},hostClasses:{"vira-checkbox-horizontal"({inputs:e}){return!!e.useHorizontalLabel},"vira-checkbox-filled-checked"({inputs:e}){return!!e.fillWhenChecked},"vira-checkbox-filled-unchecked"({inputs:e}){return!!e.fillWhenUnchecked}},styles({hostClasses:e}){return V`
            :host {
                display: inline-flex;
            }

            .custom-checkbox {
                height: 20px;
                aspect-ratio: 1;
                box-sizing: border-box;
            }

            ${Y} {
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                ${YR[`vira-icon-stroke-width`].name}: 2px;
                opacity: 0;
            }

            ${e[`vira-checkbox-filled-checked`].selector} {
                & .custom-checkbox.checked {
                    color: ${q[`vira-form-background-color`].value};
                    background-color: ${q[`vira-form-accent-primary-color`].value};
                }

                label {
                    &:not(.disabled):hover .custom-checkbox.checked {
                        background-color: ${q[`vira-form-accent-primary-hover-color`].value};
                    }

                    &:not(.disabled):active .custom-checkbox.checked {
                        background-color: ${q[`vira-form-accent-primary-active-color`].value};
                    }
                }
            }
            ${e[`vira-checkbox-filled-unchecked`].selector} {
                & .custom-checkbox:not(.checked) {
                    color: ${q[`vira-form-background-color`].value};
                    background-color: ${q[`vira-form-error-color`].value};
                }

                label {
                    &:not(.disabled):hover .custom-checkbox:not(.checked) {
                        background-color: ${q[`vira-form-error-hover-color`].value};
                    }

                    &:not(.disabled):active .custom-checkbox:not(.checked) {
                        background-color: ${q[`vira-form-error-active-color`].value};
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
                    font-weight: ${q[`vira-form-label-font-weight`].value};

                    &.empty {
                        display: none;
                    }
                }

                &:not(.disabled):hover .custom-checkbox {
                    background-color: ${q[`vira-form-selection-hover-color`].value};
                }
                &:not(.disabled):active .custom-checkbox {
                    background-color: ${q[`vira-form-selection-active-color`].value};
                }
            }

            /* The visible custom box */
            .custom-checkbox {
                flex-shrink: 0;
                border: 1px solid ${q[`vira-form-border-color`].value};
                color: ${q[`vira-form-foreground-color`].value};
                border-radius: ${q[`vira-form-radius`].value};
                display: inline-block;
                position: relative;
                cursor: pointer;

                ${mz({elementBorderSize:`1px`})}

                &.checked {
                    & ${Y} {
                        opacity: 1;
                    }
                }

                &.error {
                    border-color: ${q[`vira-form-error-color`].value};
                }

                &.disabled {
                    ${Ez};
                }
            }

            ${e[`vira-checkbox-horizontal`].selector} label {
                flex-direction: row-reverse;
                align-items: center;
                gap: 8px;

                & .label-text {
                    padding-block: calc((20px - 1em) / 2);
                }
            }
        `},events:{valueChange:OF()},render({inputs:e,dispatch:t,events:n,slotNames:r,state:i,updateState:a}){function o(){e.isDisabled||t(new n.valueChange({detail:!e.value}))}let s=!!e.label||i.hasSlottedLabel,c=!!e.isIndeterminate,l=U`
            <span
                class="label-text ${WP({empty:!s})}"
                ${XF(e.attributePassthrough?.text)}
                style=${GP(e.stylePassthrough?.text)}
            >
                <slot
                    name=${r[`vira-checkbox-label`]}
                    ${H(`slotchange`,e=>{a({hasSlottedLabel:!!SL(e,HTMLSlotElement).assignedNodes().length})})}
                >
                    ${e.label}
                </slot>
            </span>
        `;return U`
            <label
                class=${WP({disabled:!!e.isDisabled})}
                ${XF(e.attributePassthrough?.label)}
                style=${GP(e.stylePassthrough?.label)}
                ${H(`mousedown`,o)}
            >
                ${l}
                <span
                    class="custom-checkbox ${WP({checked:e.value||c,disabled:!!e.isDisabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${GP(A.isString(e.label)&&e.label||void 0)}
                    aria-checked=${c?`mixed`:e.value?`true`:`false`}
                    aria-disabled=${e.isDisabled?`true`:`false`}
                    tabindex=${e.isDisabled?`-1`:`0`}
                    ${XF(e.attributePassthrough?.[`custom-checkbox`])}
                    style=${GP(e.stylePassthrough?.[`custom-checkbox`])}
                    ${$F(o)}
                >
                    <${Y.assign({icon:c?fz.Minus16:fz.Check16,fitContainer:!0})}
                        ${XF(e.attributePassthrough?.[Y.tagName])}
                        style=${GP(e.stylePassthrough?.[Y.tagName])}
                    ></${Y}>
                </span>
            </label>
        `}}),jB=gL()({tagName:`vira-collapsible-wrapper`,state(){return{contentHeight:0,contentWidth:0,isContentHidden:!1,collapsingElement:void 0}},hostClasses:{"vira-collapsible-wrapper-expand-on-print"({inputs:e}){return!!e.expandOnPrint}},slotNames:[`vira-collapsible-wrapper-header`],styles({hostClasses:e}){return V`
            :host {
                display: flex;
                flex-direction: column;
                max-width: 100%;
                box-sizing: border-box;
            }

            .header-wrapper {
                ${DR};
                cursor: pointer;
            }

            .content-wrapper,
            .collapsing-element {
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
            }

            .collapsing-element {
                transition: height ${Dz[`vira-pretty-animation-duration`].value};
                overflow: hidden;

                &.collapsed {
                    ${Az}
                }
            }

            .content-wrapper.hidden-content {
                display: none;
            }

            @media print {
                :host(.${e[`vira-collapsible-wrapper-expand-on-print`].name})
                    .collapsing-element {
                    height: auto !important;
                    overflow: visible !important;
                    transition: none !important;

                    & .content-wrapper.hidden-content {
                        display: flex !important;
                    }
                }
            }
        `},events:{expandChange:OF()},render({state:e,slotNames:t,updateState:n,dispatch:r,events:i,inputs:a}){a.expanded&&e.isContentHidden?n({isContentHidden:!1}):!a.expanded&&!e.isContentHidden&&e.contentHeight&&!e.collapsingElement?.clientHeight&&n({isContentHidden:!0});let o=e.isContentHidden?V`
                  width: ${e.contentWidth}px;
                  max-width: 100%;
              `:V``,s=e.isContentHidden?U`
                  <div class="content-wrapper hidden-content">
                      <slot></slot>
                  </div>
              `:U`
                  <div
                      ${aI(({contentRect:e})=>{n({contentHeight:e.height,contentWidth:e.width})})}
                      class="content-wrapper"
                  >
                      <slot></slot>
                  </div>
              `,c=a.expanded?V`
                  height: ${e.contentHeight}px;
                  ${o}
              `:V`
                  height: 0;
                  ${o}
              `;return U`
            <button
                class="header-wrapper"
                ${H(`click`,()=>{r(new i.expandChange({detail:!a.expanded}))})}
            >
                <slot name=${t[`vira-collapsible-wrapper-header`]}>Header</slot>
            </button>

            <div
                class="collapsing-element ${WP({collapsed:!a.expanded})}"
                style=${c}
                disabled="disabled"
                ${tI(e=>{n({collapsingElement:Ic.instanceOf(e,HTMLDivElement)})})}
                ${H(`transitionend`,e=>{e.propertyName===`height`&&e.target===e.currentTarget&&!a.expanded&&n({isContentHidden:!0})})}
            >
                ${s}
            </div>
        `}}),MB=gL()({tagName:`vira-collapsible-card`,testIds:[`openCaret`],events:{expandToggle:OF()},state({inputs:e}){return{isExpanded:!!e.startExpanded}},hostClasses:{"vira-collapsible-card-expanded"({state:e}){return e.isExpanded},"vira-collapsible-card-expansion-blocked"({inputs:e}){return!!e.blockExpansion},"vira-collapsible-card-card-styles"({inputs:e}){return!e.rawCollapsible}},cssVars:{"vira-collapsible-card-content-gap":`16px`},styles({hostClasses:e,cssVars:t}){return V`
            :host {
                display: inline-flex;
                max-width: 100%;
                box-sizing: border-box;
                overflow: hidden;
            }

            ${e[`vira-collapsible-card-expanded`].selector} .open-caret {
                transform: rotate(180deg);
            }

            ${jB} {
                flex-grow: 1;
                max-width: 100%;
            }

            ${e[`vira-collapsible-card-card-styles`].selector} {
                border-radius: ${q[`vira-form-wrapper-radius`].value};

                & ${jB} {
                    border: 1px solid ${q[`vira-form-border-color`].value};
                    border-radius: ${q[`vira-form-wrapper-radius`].value};
                }

                & .card-header {
                    padding: 6px 12px;
                }

                & .card-content {
                    padding: 6px 12px 6px 12px;
                }
            }

            ${e[`vira-collapsible-card-expansion-blocked`].selector} {
                & .header-wrapper {
                    cursor: default;
                }
            }

            .card-header {
                font-weight: ${sL[`vira-font-weight-bold`].value};
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
                ${jB} {
                    border: none !important;
                }

                .card-header {
                    padding: 6px 0 !important;
                }

                .card-content {
                    overflow: visible !important;
                    padding: 6px 0 12px 0 !important;
                }

                .open-caret {
                    display: none;
                }
            }
        `},slotNames:[`vira-collapsible-card-header`],render({inputs:e,slotNames:t,state:n,updateState:r,testIds:i,dispatch:a,events:o}){e.blockExpansion&&r({isExpanded:!0});let s=U`
            <div class="card-content">
                <slot></slot>
            </div>
        `,c=e.hideHeader?M:U`
                  <div class="card-header">
                      <slot name=${t[`vira-collapsible-card-header`]}>
                          <div class="header-filler"></div>
                      </slot>

                      ${e.blockExpansion?M:U`
                                <${Y.assign({icon:fz.ChevronUp16,fitContainer:!0})}
                                    ${fI(i.openCaret)}
                                    class="open-caret"
                                ></${Y}>
                            `}
                  </div>
              `;return U`
            <${jB.assign({expanded:n.isExpanded,expandOnPrint:e.expandOnPrint??!1})}
                ${H(jB.events.expandChange,t=>{t.stopImmediatePropagation(),!e.blockExpansion&&(r({isExpanded:t.detail}),a(new o.expandToggle({detail:t.detail})))})}
            >
                <div
                    class="header-wrapper"
                    slot=${jB.slotNames[`vira-collapsible-wrapper-header`]}
                >
                    ${c}
                </div>
                ${s}
            </${jB}>
        `}}),NB=[`pagehide`,`pageshow`,`popstate`],PB=30,FB=gL()({tagName:`vira-drawer`,events:{drawerClose:OF()},state(){return{dialogElement:void 0,contentElement:void 0,previousOpenValue:void 0,cleanupListeners:void 0,isDragging:!1,dragStartY:0,dragCurrentY:0}},cleanup({state:e}){e.cleanupListeners?.()},hostClasses:{"vira-drawer-dragging"({state:e}){return e.isDragging},"vira-drawer-no-content-padding"({inputs:e}){return!!e.noContentPadding}},slotNames:[`vira-drawer-drawer-title`],cssVars:{"vira-drawer-backdrop-filter":`blur(3px)`,"vira-drawer-max-height":`80dvh`},styles({cssVars:e,hostClasses:t}){return V`
            :host {
                display: contents;
            }

            ${t[`vira-drawer-dragging`].selector} {
                ${Az};
            }

            h1 {
                ${ER};
            }

            dialog {
                ${$I(K.colors[iL])}
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
                ${kz.modal}
                transition: transform ${Dz[`vira-pretty-animation-duration`].value} ease;

                &[open] {
                    display: flex;
                    flex-direction: column;
                }

                &::backdrop {
                    background: ${q[`vira-form-modal-backdrop-color`].value};
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
                            background-color: ${q[`vira-form-secondary-body-foreground`].value};
                            opacity: 0.5;
                        }
                    }

                    & .header {
                        padding: 6px 20px 12px;
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
                                font-size: 18px;
                            }
                        }

                        & button.close {
                            ${DR};
                            flex-shrink: 0;
                            cursor: pointer;
                            padding: 4px;
                            border-radius: ${q[`vira-form-radius`].value};

                            &:hover {
                                background-color: ${q[`vira-form-selection-hover-color`].value};
                            }

                            & ${Y} {
                                display: flex;
                            }
                        }
                    }

                    & .body {
                        padding: 0 20px 20px;
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
        `},render({inputs:e,state:t,updateState:n,events:r,dispatch:i,slotNames:a}){if(t.dialogElement&&e.open!==t.dialogElement.open&&(e.open?t.dialogElement.showModal():t.dialogElement.close()),t.previousOpenValue!==e.open&&(t.cleanupListeners?.(),n({previousOpenValue:e.open}),e.open)){let e=NB.map(e=>ru(e,()=>{i(new r.drawerClose({detail:void 0}))}));n({cleanupListeners(){e.forEach(e=>e())}})}function o(){e.open&&(t.cleanupListeners?.(),i(new r.drawerClose({detail:void 0})))}if(t.dialogElement){if(t.isDragging){let e=Math.max(0,t.dragCurrentY-t.dragStartY);t.dialogElement.style.transform=`translateY(${String(e)}px)`,t.dialogElement.style.transition=`none`}else t.dialogElement.style.transform=``,t.dialogElement.style.transition=``}return U`
            <dialog
                ${tI(e=>{n({dialogElement:Ic.instanceOf(e,HTMLDialogElement)})})}
                ${H(`close`,()=>{o()})}
                ${H(`mousedown`,e=>{t.contentElement&&!e.composedPath().includes(t.contentElement)&&!bR(e)&&o()})}
            >
                <div
                    class="drawer-content-wrapper"
                    ${tI(e=>{n({contentElement:Ic.instanceOf(e,HTMLDivElement)})})}
                >
                    <div
                        class="drag-handle-wrapper"
                        ${H(`dblclick`,()=>{o()})}
                        ${H(`pointerdown`,e=>{n({isDragging:!0,dragStartY:e.clientY,dragCurrentY:e.clientY});function r(e){n({dragCurrentY:e.clientY})}function i(e){let r=e.clientY-t.dragStartY;n({isDragging:!1,dragStartY:0,dragCurrentY:0}),r>PB&&o(),a.forEach(e=>e())}let a=[ru(`pointermove`,r),ru(`pointerup`,i)]})}
                    >
                        <div class="drag-handle"></div>
                    </div>
                    <div class="header">
                        <div class="header-text-wrapper">
                            <h1>
                                <slot name=${a[`vira-drawer-drawer-title`]}>
                                    ${e.drawerTitle}
                                </slot>
                            </h1>
                        </div>
                        <button
                            class="close"
                            aria-label="Close"
                            ${H(`click`,()=>{t.dialogElement?.close()})}
                        >
                            <${Y.assign({icon:fz.X24})}></${Y}>
                        </button>
                    </div>
                    ${e.open?U`
                              <div class="body">
                                  <slot></slot>
                              </div>
                          `:M}
                </div>
            </dialog>
        `}}),IB=gL()({tagName:`vira-error`,cssVars:{"vira-error-font-weight":sL[`vira-font-weight-bold`].value},styles({cssVars:e}){return V`
            :host {
                color: ${q[`vira-form-error-color`].value};
                font-weight: ${e[`vira-error-font-weight`].value};
            }
        `},render(){return U`
            <slot></slot>
        `}}),LB=class extends Error{name=`SpaRouterError`},RB=class extends LB{name=`GlobalUrlEventsConsolidationError`},zB=class extends LB{name=`SanitizationDepthMaxed`},BB=MN({basePath:B(``),sanitizeRoute:(e=>e),maxListenerCount:B(1),disableWarnings:B(!1),isPaused:B(!1),isRouteAllowed:B((()=>!0))}),VB=`://`;function HB(...e){let t=e.join(`/`),n=t.indexOf(VB),[r,i]=n===-1?[``,t]:[t.slice(0,n),t.slice(n+3)],a=!1,o=i.replace(/\/{2,}/g,`/`).split(`/`).reduce((e,t,n,r)=>{if(a)return e;let i=r[n+1],o=t,s=i?.startsWith(`?`),c=!t.includes(`?`)&&s,l=i===`?`;if(s||c){a=!0;let e=!1,s=r.slice(n+2).reduce((t,n)=>(n.includes(`#`)&&(e=!0),e?t.concat(n):[t,n].join(`&`)),``);o=[t,i,l?bl({value:s,prefix:`&`}):s].join(``)}return e.concat(o)},[]);return[r,r?VB:``,o.join(`/`)].join(``)}var UB;(function(e){e.Encode=`encode`,e.Decode=`decode`,e.None=`none`})(UB||={});var WB;(function(e){e.Clear=`clear`,e.Replace=`replace`,e.Append=`append`})(WB||={});var GB=MN({encoding:HN(UN(void 0,RN(UB))),searchParamStrategy:HN(UN(void 0,RN(WB)))});function KB(e,t){return e.map(e=>{if(e!=null)return qB(String(e),t)}).filter(e=>e!=null)}function qB(e,t){return t?.encoding===UB.Decode?decodeURIComponent(e):t?.encoding===UB.Encode?encodeURIComponent(e):e}eP({keys:``,values:[``]});function JB(e,t,n){let r=n?.searchParamStrategy===WB.Clear?{}:zl(e,(e,t)=>rl(t)),i=zl(t,(e,t)=>{if(n?.searchParamStrategy===WB.Append){let i=r[e],a=A.isArray(i)?i:[i];if(t){let e=A.isArray(t)?t:[t];return KB([...a,...e],n)}return KB(a,n)}if(A.isArray(t))return KB(t,n);if(t)return KB([t],n)});return Bl({...r,...i},(e,t)=>!!t)}function YB(e,t){if(A.isString(e)&&!e.includes(`?`))return{};let n=A.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search,r=n.indexOf(`#`);return{...(r===-1?n:n.slice(0,r)).replace(/^[^?]*\?/,``).split(`&`).filter(e=>e!==``).map(e=>{let[t,...n]=Il({value:e,splitter:`=`});return[t,n.length?n.join(`=`):void 0]}).reduce((e,[n,r])=>{let i=QB({options:t,key:n,value:r}),a=Zc(e,i.key,()=>[]);return r!=null&&a.push(i.value),e},Object.create(null))}}function XB(e){if(e!=null)return A.isArray(e)?[...e]:e===``?[]:[e]}function ZB(e,t){let n=el(Object.entries(e),([e,n])=>{let r=XB(n);return r?.length?r.map(n=>{let r=QB({options:t,key:e,value:n});return[r.key,r.value].join(`=`)}):[e]},(e,[,t])=>t!=null).flat();return n.length?yl({value:n.join(`&`),prefix:`?`}):``}function QB({options:e,key:t,value:n}){return{key:qB(t,e),value:qB(String(n),e)}}var $B=[`ftp`,`file`,`http`,`https`,`ws`,`wss`];function eV({hash:e,hostname:t,password:n,pathname:r,port:i,protocol:a,search:o,username:s}){return[a?a+`://`:``,s?encodeURIComponent(s)+`:`:``,n?encodeURIComponent(n)+`@`:``,rV({hostname:t,port:i}),nV({hash:e,pathname:r,search:o})].join(``)}function tV({pathname:e}){let t=bl({value:e,prefix:`/`});return t?t.split(`/`):[]}function nV({hash:e,pathname:t,search:n}){return[yl({value:t,prefix:`/`}),n?yl({value:n,prefix:`?`}):``,e?yl({value:e,prefix:`#`}):``].join(``)}function rV({hostname:e,port:t}){return[e,t?`:`+t:``].join(``)}function iV({hostname:e}){return e?e.split(`.`):[]}function aV({hostname:e,port:t,protocol:n}){return[n,rV({hostname:e,port:t})].filter(A.isTruthy).join(`://`)}function oV(e,t){let n=A.isString(e)?bl({value:e,prefix:`.`}):e.toString(),r=n.replace(/^[^#]*(?:#|$)/,``),i=r?yl({value:qB(r,t),prefix:`#`}):``,a=n.indexOf(`#`),o=a===-1?n:n.slice(0,a),s=o.replace(/^[^?]*(?:\?|$)/,``),c=s?yl({value:qB(s,t),prefix:`?`}):``,l=o.indexOf(`?`),u=l===-1?o:o.slice(0,l),d=u.includes(`://`)?u.replace(/:\/\/.*$/,``):``,f=($B.includes(d.toLowerCase())?u.replace(/\\/g,`/`):u).replace(/^.*?:\/\//,``).replace(/\/{2,}/g,`/`),p=f.length-f.replace(/^\/*/,``).length,m=f.slice(p).replace(/\/.*/,``).lastIndexOf(`@`),h=m!==-1,g=h?f.slice(0,p+m):``,_=h?f.slice(p+m+1):f,[ee,...te]=h?g.split(`:`).reverse():[],ne=decodeURIComponent(te.toReversed().join(``).replace(/[/:]/g,``)||``),re=decodeURIComponent(ee?.replace(/[/:]/g,``)||``),ie=_.replace(/\/.*/,``),ae=Fl(ie,`:`,{caseSensitive:!0}).toReversed(),oe=!ae[0]?.endsWith(`]`)&&ae[1]===`:`,se=oe&&ae[0]||``,ce=oe?ie.slice(0,ie.length-se.length-1):ie,le=ce.endsWith(`]`)?void 0:ce.match(/^(?<host>.*):(?<port>\d+)$/),ue=le?.groups?.host??ce,de=iV({hostname:ue}),fe=le?.groups?.port??se,pe=qB(_.replace(/^[^/]*(\/|$)/,`$1`).replace(/^[^/]*(?:\/|$)/,`/`),t),me=rV({hostname:ue,port:fe}),he=aV({hostname:ue,port:fe,protocol:d}),ge=eV({hash:i,hostname:ue,password:re,pathname:pe,port:fe,protocol:d,search:c,username:ne}),_e=YB(c),v=tV({pathname:pe});return{fullPath:nV({hash:i,pathname:pe,search:c}),hash:i,host:me,hostname:ue,domains:de,href:ge,origin:he,password:re,pathname:pe,paths:v,port:fe,protocol:d,search:c,searchParams:_e,username:ne}}HN(UN(void 0,``)),HN(UN(void 0,``,eP({keys:``,values:UN(null,void 0,``,-1,!1,0n,[null,void 0,``,-1,!1,0n])}))),HN(UN(void 0,``)),HN(UN(void 0,[``])),HN(UN(void 0,``)),HN(UN(void 0,[``])),HN(UN(void 0,``)),HN(UN(void 0,``)),HN(UN(void 0,``)),HN(UN(void 0,``,-1));function sV(e,t,n){let r=!!n,i=t==null||YN(t,GB,{allowExtraKeys:!1}),a=i?oV(``):A.instanceOf(e,URL)||A.isString(e)?oV(e):e,o=i?e:t,s=A.isString(o)&&o.startsWith(`.`),c=A.isString(o)||A.instanceOf(o,URL)?Bl(oV(o),(e,t)=>A.isTruthy(t)&&(e!==`domains`||A.isArray(t)&&t.length!==0)):o,l=r?n:i?t:void 0,u=zl(a,(e,t)=>{if(!A.hasKey(c,e))return t;let n=c[e];return A.isArray(n)?n:A.isNumber(n)?String(n):A.isString(n)?e===`hash`&&n?yl({value:n,prefix:`#`}):e===`pathname`?yl({value:n,prefix:`/`}):n:t});A.hasKey(c,`domains`)&&A.isArray(c.domains)&&(u.hostname=c.domains.join(`.`)),u.domains=iV(u),A.hasKey(c,`paths`)&&c.paths&&(u.pathname=HB(s?a.pathname:``,...c.paths));let d=A.isString(c.search)?YB(yl({value:c.search,prefix:`?`})):sl(c.search||{}),f=JB(u.searchParams,d,{...l,encoding:UB.None}),p=ZB(f,l);return{...u,searchParams:f,search:p,paths:tV(u),fullPath:nV(u),host:rV(u),origin:aV(u),href:eV({...u,search:p})}}var cV=0;function lV(e){return!(e.type!==`click`&&e.type!==`mousedown`||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==cV)}var uV=`locationchange`,dV=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;var fV=dV?.pushState;function pV(...e){if(!fV)return;let t=fV.apply(dV,e);return globalThis.dispatchEvent(new Event(uV)),t}var mV=dV?.replaceState;function hV(...e){if(!mV)return;let t=mV.apply(dV,e);return globalThis.dispatchEvent(new Event(uV)),t}function gV(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY&&dV){if(dV.pushState===pV)throw new RB(`The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?`);if(dV.replaceState===hV)throw new RB(`The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?`);globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,dV.pushState=pV,dV.replaceState=hV,globalThis.addEventListener(`popstate`,()=>{globalThis.dispatchEvent(new Event(uV))})}}function _V(e,t){let n=oV(e),r=bl({value:bl({value:n.pathname,prefix:yl({value:t||``,prefix:`/`})}),prefix:`/`});return{paths:r?r.split(`/`):[],search:Object.keys(n.searchParams).length?n.searchParams:void 0,hash:n.hash?bl({value:n.hash,prefix:`#`}):void 0}}var vV=class{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(e){XN(e,BB),this.params={...e};let t=this.readCurrentRoute();this.innerObservable=new bP({defaultValue:t,equalityCheck(){return!1}}),gV(),this.removeGlobalListener=nu(globalThis,uV,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new zB(`Looping route sanitization detected; aborting window URL change listener.`);let t=_V(globalThis.location.href,this.params.basePath),n=e.sanitizeRoute(t);A.jsonEquals(t,n)?(this.sanitizationDepth=0,this.innerObservable.setValue(n)):(this.sanitizationDepth++,this.setRoute(n,{replace:!0}),e.disableWarnings||console.warn(`Route sanitized.`,{from:t,to:n}))}),this.setRoute(t,{replace:!0})}routeIncludesBasePath(e){return!e.paths||!this.params.basePath?!1:HB(...e.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(_V(globalThis.location.href,this.params.basePath))}sanitizeRoute(e){return this.params.sanitizeRoute(e)}createRouteUrl(e){let t={..._V(globalThis.location.href,this.params.basePath),...e},n=this.sanitizeRoute(t),r=this.routeIncludesBasePath(_V(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return{url:sV(globalThis.location.href,{paths:r.paths,search:r.search,hash:r.hash?yl({value:r.hash,prefix:`#`}):``},{searchParamStrategy:WB.Clear}).href,route:n}}setRoute(e,t={}){let{route:n,url:r}=this.createRouteUrl(e),{fullPath:i}=oV(r);return this.params.isPaused||!t.force&&A.jsonEquals(oV(globalThis.location.href).fullPath,i)||this.params.isRouteAllowed&&!this.params.isRouteAllowed(n)?!1:t.replace?(globalThis.history.replaceState(void 0,``,i),!0):(globalThis.history.pushState(void 0,``,i),!0)}setRouteOnDirectNavigation(e,t){return lV(t)?(t.preventDefault(),this.setRoute(e)):!1}listen(e,t){let n=this.params.maxListenerCount??1;if(n&&this.innerObservable.getListenerCount()>=n)throw new LB(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(e,t),()=>this.removeListener(t)}removeListener(e){return this.innerObservable.removeListener(e)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}},yV={value:V`transparent`};function bV(e){let t=vz[e][`behind-bg`],n=vz[e][`on-self`];return{[Cz.Standard]:{idle:{textColor:t[W.NonBodyText].foreground,backgroundColor:t[W.NonBodyText].background,borderColor:t[W.NonBodyText].background},hover:{textColor:t[W.Header].foreground,backgroundColor:t[W.Header].background,borderColor:t[W.Header].background},active:{textColor:t[W.NonBodyText].foreground,backgroundColor:t[W.NonBodyText].background,borderColor:t[W.NonBodyText].background}},[Cz.Subtle]:{idle:{textColor:n[W.BodyText].foreground,backgroundColor:n[W.BodyText].background,borderColor:n[W.BodyText].background},hover:{textColor:n[W.NonBodyText].foreground,backgroundColor:n[W.NonBodyText].background,borderColor:n[W.NonBodyText].background},active:{textColor:n[W.BodyText].foreground,backgroundColor:n[W.BodyText].background,borderColor:n[W.BodyText].background}}}}function xV(e){let t=vz[e][`on-self`][W.BodyText];return{idle:{textColor:t.foreground,backgroundColor:yV,borderColor:t.background},hover:{textColor:t.foreground,backgroundColor:vz[e][`behind-bg`][W.Invisible].background,borderColor:t.background},active:{textColor:t.foreground,backgroundColor:vz[e][`behind-bg`][W.Decoration].background,borderColor:t.background}}}var SV={[Cz.Standard]:{idle:{backgroundColor:K.colors[iL].foreground,textColor:K.colors[iL].background,borderColor:K.colors[iL].foreground},hover:{backgroundColor:K.colors[`vira-grey-behind-bg-body`].background,textColor:K.colors[`vira-grey-behind-bg-body`].foreground,borderColor:K.colors[`vira-grey-behind-bg-body`].background},active:{backgroundColor:K.colors[iL].foreground,textColor:K.colors[iL].background,borderColor:K.colors[iL].foreground}},[Cz.Subtle]:{idle:{backgroundColor:yV,textColor:K.colors[iL].foreground,borderColor:yV},hover:{backgroundColor:K.colors[`vira-grey-behind-fg-small-body`].background,textColor:K.colors[`vira-grey-behind-fg-small-body`].foreground,borderColor:K.colors[`vira-grey-behind-fg-small-body`].background},active:{backgroundColor:K.colors[`vira-grey-behind-fg-body`].background,textColor:K.colors[`vira-grey-behind-fg-body`].foreground,borderColor:K.colors[`vira-grey-behind-fg-body`].background}}},CV={[Cz.Standard]:{idle:{backgroundColor:K.colors[`vira-grey-behind-fg-small-body`].background,textColor:K.colors[`vira-grey-behind-fg-small-body`].foreground,borderColor:K.colors[`vira-grey-behind-fg-small-body`].background},hover:{backgroundColor:K.colors[`vira-grey-behind-fg-body`].background,textColor:K.colors[`vira-grey-behind-fg-body`].foreground,borderColor:K.colors[`vira-grey-behind-fg-body`].background},active:{backgroundColor:K.colors[`vira-grey-behind-fg-small-body`].background,textColor:K.colors[`vira-grey-behind-fg-small-body`].foreground,borderColor:K.colors[`vira-grey-behind-fg-small-body`].background}},[Cz.Subtle]:bV(gz.grey)[Cz.Subtle]},wV={idle:{textColor:K.colors[iL].foreground,backgroundColor:yV,borderColor:K.colors[`vira-grey-on-self-body`].background},hover:{backgroundColor:K.colors[`vira-grey-behind-fg-small-body`].background,textColor:K.colors[`vira-grey-behind-fg-small-body`].foreground,borderColor:K.colors[`vira-grey-on-self-body`].background},active:{backgroundColor:K.colors[`vira-grey-behind-fg-body`].background,textColor:K.colors[`vira-grey-behind-fg-body`].foreground,borderColor:K.colors[`vira-grey-on-self-body`].background}},TV=gL()({tagName:`vira-tag`,cssVars:{"vira-tag-text-color":`transparent`,"vira-tag-background-color":`transparent`,"vira-tag-border-color":`transparent`,"vira-tag-hover-text-color":`transparent`,"vira-tag-hover-background-color":`transparent`,"vira-tag-hover-border-color":`transparent`,"vira-tag-active-text-color":`transparent`,"vira-tag-active-background-color":`transparent`,"vira-tag-active-border-color":`transparent`,"vira-tag-disabled-text-color":K.colors[`vira-grey-behind-bg-decoration`].foreground.value,"vira-tag-disabled-background-color":K.colors[`vira-grey-behind-bg-decoration`].background.value,"vira-tag-disabled-border-color":K.colors[`vira-grey-behind-bg-decoration`].background.value,"vira-tag-border-radius":`1000px`,"vira-tag-gap":`6px`,"vira-tag-horizontal-padding":`10px`,"vira-tag-border-width":`1px`},events:{toggle:OF(),cancel:OF()},hostClasses:{"vira-tag-selectable"({inputs:e}){return A.isBoolean(e.isClickable?.selected)},"vira-tag-checked"({inputs:e}){return!!e.isClickable?.selected},"vira-tag-not-checked"({inputs:e}){return e.isClickable?.selected===!1},"vira-tag-cancellable"({inputs:e}){return!!e.isClickable?.cancellable},"vira-tag-not-clickable"({inputs:e}){return!e.isClickable},"vira-tag-disabled"({inputs:e}){return!!e.disabled},"vira-tag-size-large"({inputs:e}){return e.size===xz.Large},"vira-tag-size-medium"({inputs:e}){return!e.size||e.size===xz.Medium},"vira-tag-size-small"({inputs:e}){return e.size===xz.Small},"vira-tag-emphasis-standard"({inputs:e}){return!e.emphasis||e.emphasis===Cz.Standard},"vira-tag-emphasis-subtle"({inputs:e}){return e.emphasis===Cz.Subtle},...tl(x(yz),e=>{let t=yz[e];return{key:`vira-tag-color-${t}`,value({inputs:n}){return n.color===e||n.color===t}}},{useRequired:!0}),"vira-tag-color-plain"({inputs:e}){return!e.color||e.color===J.Plain},"vira-tag-color-neutral"({inputs:e}){return e.color===J.Neutral},"vira-tag-color-muted"({inputs:e}){return e.color===J.Muted},...tl(bz,e=>({key:`vira-tag-color-${e}`,value({inputs:t}){return t.color===e}}),{useRequired:!0})},styles({cssVars:e,hostClasses:t}){function n({variantSelector:t,emphasisSelector:n,colors:r}){return V`
                ${t}${n} {
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
            `}function r(){return j(wz.flatMap(e=>{let r=t[`vira-tag-emphasis-${e}`].selector,i=x(yz).map(i=>{let a=yz[i],o=bV(a)[e],s=t[`vira-tag-color-${a}`].selector;return n({variantSelector:s,emphasisSelector:r,colors:o})}),a=n({variantSelector:t[`vira-tag-color-plain`].selector,emphasisSelector:r,colors:SV[e]}),o=n({variantSelector:t[`vira-tag-color-neutral`].selector,emphasisSelector:r,colors:bV(gz.grey)[e]}),s=n({variantSelector:t[`vira-tag-color-muted`].selector,emphasisSelector:r,colors:CV[e]}),c=bz.map(i=>{let a=bV(i)[e],o=t[`vira-tag-color-${i}`].selector;return n({variantSelector:o,emphasisSelector:r,colors:a})});return[...i,a,o,s,...c]}).join(`
`))}function i(n,r){let i=t[`vira-tag-not-checked`].selector;return V`
                ${n}${i}${i}${i} {
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
            `}function a(){let e=x(yz).map(e=>{let n=yz[e],r=xV(n),a=t[`vira-tag-color-${n}`].selector;return i(a,r)}),n=i(t[`vira-tag-color-plain`].selector,wV),r=i(t[`vira-tag-color-neutral`].selector,xV(gz.grey)),a=i(t[`vira-tag-color-muted`].selector,xV(gz.grey)),o=bz.map(e=>{let n=xV(e),r=t[`vira-tag-color-${e}`].selector;return i(r,n)});return j([...e,n,r,a,...o].join(`
`))}function o(){return j(Sz.map(e=>V`
                    ${t[`vira-tag-size-${e}`].selector} button {
                        height: ${Tz[e]}px;
                        font-size: ${q[`vira-form-${e}-text-size`].value};
                    }
                `).join(`
`))}return V`
            :host {
                display: inline-flex;
                vertical-align: middle;
                align-items: center;
            }

            ${o()}
            ${r()}
            ${a()}

            button {
                ${DR}
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
                    padding: 0 calc(${e[`vira-tag-horizontal-padding`].value} + 7px);
                    margin-left: calc(${e[`vira-tag-gap`].value} / 2);
                    margin-right: calc(${e[`vira-tag-gap`].value} / 2);
                }
            }
            ${t[`vira-tag-checked`].selector} {
                & button {
                    padding: 0 ${e[`vira-tag-horizontal-padding`].value};
                    margin: 0;
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
                ${e[`vira-tag-horizontal-padding`].name}: 6px;
            }

            ${t[`vira-tag-size-large`].selector} {
                ${e[`vira-tag-horizontal-padding`].name}: 12px;
            }

            ${t[`vira-tag-disabled`].selector} {
                cursor: not-allowed;
                ${Az}

                & button {
                    color: ${e[`vira-tag-disabled-text-color`].value};
                    background-color: ${e[`vira-tag-disabled-background-color`].value};
                    border-color: ${e[`vira-tag-disabled-border-color`].value};
                }
            }
        `},render({inputs:e,dispatch:t,events:n}){let r=!e.isClickable||!!e.disabled;return U`
            <button
                ?disabled=${r}
                ${H(`click`,()=>{r||(e.isClickable?.selected==null?e.isClickable?.cancellable&&t(new n.cancel({detail:void 0})):t(new n.toggle({detail:!e.isClickable.selected})))})}
            >
                <${Y.assign({icon:fz.Check16})}
                    class="selected-check"
                ></${Y}>
                <span class="text">${String(e.text)}</span>
                <${Y.assign({icon:fz.X16})}
                    class="cancel-x"
                ></${Y}>
            </button>
        `}});function EV(e){return j(e.toString({format:`hex`}))}var DV=G[`vira-brand-500`].default;function OV(e){return Math.abs(e.contrast(`white`,`APCA`))>Math.abs(e.contrast(`black`,`APCA`))?`white`:`black`}function kV({background:e,foreground:t}){let n=e??new Ry(OV(t)),r=t??new Ry(OV(e));return{background:EV(n),foreground:EV(r)}}var AV;(function(e){e.Dark=`dark`,e.Light=`light`})(AV||={});function jV({themeColor:e=DV}={}){let t=new Ry(e);return{nav:{hover:kV({background:t.clone().set({"hsl.l":93})}),active:kV({background:t.clone().set({"hsl.l":90})}),selected:kV({background:t.clone().set({"hsl.l":85})})},accent:{icon:EV(t.clone().set({"hsl.l":40}))}}}function MV({searchQuery:e,searchIn:t}){let n=t.length,r=e.length;if(r>n)return!1;if(r===n)return e===t;let i=t.toLowerCase(),a=e.toLowerCase();outer:for(let e=0,t=0;e<r;e++){let r=a.codePointAt(e);for(;t<n;)if(i.codePointAt(t++)===r)continue outer;return!1}return!0}var NV=Gl(32);function PV(e){return e.join(NV)}function FV(e){return e.length?[PV(e),...FV(e.slice(0,-1))]:[]}var IV=[`error`,`errors`];function LV(e){return IV.includes(e)}function RV({flattenedNodes:e,searchQuery:t}){let n={};function r(e){Object.values(e.children).map(e=>(r(e),PV(e.fullUrlBreadcrumbs))).forEach(e=>n[e]=!0)}return e.forEach(e=>{let i=e.entry.errors.length&&LV(t),a=PV(e.fullUrlBreadcrumbs);if(MV({searchIn:[e.entry.title,...e.entry.descriptionParagraphs.map(e=>A.isString(e)?e:wI(e))].join(` `).toLowerCase(),searchQuery:t.toLowerCase()})||i||n[a]){let t=FV(e.fullUrlBreadcrumbs);r(e),t.forEach(e=>n[e]=!0)}else n[a]=!1}),e.filter(e=>{let t=PV(e.fullUrlBreadcrumbs),r=n[t];if(!A.isBoolean(r))throw TypeError(`Failed to find '${e.fullUrlBreadcrumbs.join(` > `)}' in includeInSearchResults.`);return r})}function zV(e){return new vV({basePath:e,sanitizeRoute(e){return{paths:BV(e.paths),hash:void 0,search:void 0}}})}function BV(e){let t=e[0];if(!A.isEnumValue(t,Du))return ku.paths;if(t===Du.Book)return[Du.Book,...e.slice(1)];if(t===Du.Search)return e[1]?[t,e[1]]:[Du.Book,...e.slice(1)];throw Error(`Route path not handled for sanitization: ${e.join(`/`)}`)}var VV=Ql()(`element-book-change-route`),HV=pI(),UV=HV()({tagName:`book-route-link`,cssVars:{"book-route-link-anchor-padding":`0px`},styles({cssVars:e}){return V`
            a {
                box-sizing: border-box;
                display: block;
                padding: ${e[`book-route-link-anchor-padding`].value};
                text-decoration: inherit;
                color: inherit;
                height: 100%;
                width: 100%;
            }
        `},render({inputs:e,dispatch:t}){return U`
            <a
                href=${e.router?.createRouteUrl({...e.route}).url||`#`}
                ${H(`click`,n=>{(!e.router||lV(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new VV({detail:e.route})))})}
            >
                <slot></slot>
            </a>
        `}});function WV(e,t){return e.entry.entryType===c.Root?!1:e.entry.entryType===c.Page||A.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:A.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}var GV=HV()({tagName:`book-nav`,cssVars:{"book-nav-internal-indent":`0`},styles({cssVars:e}){return V`
            :host {
                display: flex;
                flex-direction: column;
                padding: 16px 0;

                background-color: ${K.colors[`vira-grey-behind-fg-highest-contrast`].background.value};
            }

            .title-row:hover {
                background-color: ${Xd[`element-book-nav-hover-background-color`].value};
                color: ${Xd[`element-book-nav-hover-foreground-color`].value};
            }

            .title-row:active {
                background-color: ${Xd[`element-book-nav-active-background-color`].value};
                color: ${Xd[`element-book-nav-active-foreground-color`].value};
            }

            .title-row {
                display: block;
                ${UV.cssVars[`book-route-link-anchor-padding`].name}: 1px 24px 1px calc(calc(16px * ${e[`book-nav-internal-indent`].value}) + 8px);
            }

            ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }

            .selected,
            .selected:hover {
                background-color: ${Xd[`element-book-nav-selected-background-color`].value};
                color: ${Xd[`element-book-nav-selected-foreground-color`].value};
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

            ${Y} {
                display: inline-flex;
                color: ${Xd[`element-book-accent-icon-color`].value};
            }
        `},render({inputs:e}){let t=e.flattenedNodes.map(t=>WV(t,e.selectedPath)?U`
                <li style=${V`
                --book-nav-internal-indent: ${t.fullUrlBreadcrumbs.length-1};
            `}>
                    <${UV.assign({router:e.router,route:{paths:[Du.Book,...t.fullUrlBreadcrumbs]}})}
                        class=${WP({"title-row":!0,selected:e.selectedPath?A.jsonEquals(e.selectedPath,t.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${cI(mu(t,c.ElementExample),U`
                                    <${Y.assign({icon:rz})}></${Y}>
                                `)}
                            ${t.entry.title}
                        </div>
                    </${UV}>
                </li>
            `:void 0);return U`
            <${UV.assign({route:ku,router:e.router})}>
                <slot>Book</slot>
            </${UV}>
            <ul>
                ${t}
            </ul>
        `}}),KV=HV()({tagName:`book-page-controls`,events:{controlValueChange:OF()},hostClasses:{"book-page-controls-has-controls"({inputs:e}){return!!Object.keys(e.config).length}},styles({hostClasses:e}){return V`
            :host {
                display: flex;
                flex-wrap: wrap;
                align-items: flex-end;
                padding-left: 36px;
                align-content: flex-start;
                gap: 16px;
                row-gap: 10px;
                color: ${K.colors[`vira-grey-foreground-placeholder`].foreground.value};
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

            ${Iz}, ${oB} {
                height: 24px;
                max-width: 128px;
            }

            ${Y}.options-icon {
                position: absolute;
                left: 0;
                bottom: 0;
                margin-left: -32px;
            }
        `},render({inputs:e,dispatch:t,events:n}){return Object.entries(e.config).length?Object.entries(e.config).map(([r,i],a)=>{if(i.controlType===Kc.Hidden)return``;let o=qV(e.currentValues[r],i,i=>{let a=A.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[r];if(!a)throw Error(`Failed to find breadcrumbs from given control name: '${r}'`);t(new n.controlValueChange({detail:{fullUrlBreadcrumbs:a,newValues:{...Object.fromEntries(Object.keys(e.config).map(t=>[t,e.currentValues[t]])),[r]:i}}}))});return U`
                    <div class="control-wrapper">
                        ${cI(a===0,U`
                                <${Y.assign({icon:dz(OB,24)})}
                                    class="options-icon"
                                ></${Y}>
                            `)}
                        <label class="control-wrapper">
                            <span>
                                ${i.controlType===Kc.Custom?U`
                                          &nbsp;
                                      `:r}
                            </span>
                            ${o}
                        </label>
                    </div>
                `}):``}});function qV(e,t,n){return Gc(t,Kc.Hidden)?``:Gc(t,Kc.Checkbox)?U`
            <${AB.assign({value:!!e})}
                ${H(AB.events.valueChange,e=>{n(e.detail)})}
            ></${AB}>
        `:Gc(t,Kc.Color)?U`
            <${cB.assign({color:e})}
                style=${V`
                    ${cB.cssVars[`vira-color-picker-swatch-height`].name}: 24px;
                    ${cB.cssVars[`vira-color-picker-swatch-width`].name}: 24px;
                `}
                ${H(cB.events.colorChange,e=>{n(e.detail)})}
            ></${cB}>
        `:Gc(t,Kc.Text)?U`
            <${Iz.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${H(Iz.events.valueChange,e=>{n(e.detail)})}
            ></${Iz}>
        `:Gc(t,Kc.Number)?U`
            <${Iz.assign({value:e,allowedInputs:/[\d.]/})}
                ${H(Iz.events.valueChange,e=>{n(e.detail)})}
            ></${Iz}>
        `:Gc(t,Kc.Dropdown)?U`
            <${oB.assign({selected:[e],options:t.options.map(e=>({label:e,value:e}))})}
                ${H(oB.events.selectedValuesChange,e=>{n(Ic.isDefined(e.detail[0]))})}
            ></${oB}>
        `:Gc(t,Kc.Custom)?t.content:U`
            <${IB}>
                ${t.controlType} controls are not implemented yet.
            </${IB}>
        `}var JV=HV()({tagName:`book-breadcrumbs`,styles:V`
        :host {
            display: flex;
            color: ${K.colors[`vira-grey-foreground-header`].foreground.value};
        }

        .spacer {
            padding: 0 4px;
        }
    `,render({inputs:e}){let t=e.currentRoute.paths.slice(1);return t.length?t.map((t,n,r)=>{let i=n>=r.length-1,a=r.slice(0,n+1),o=i?``:U`
                      <span class="spacer">&gt;</span>
                  `;return U`
                <${UV.assign({route:{hash:void 0,search:void 0,paths:[Du.Book,...a]},router:e.router})}>
                    ${t}
                </${UV}>
                ${o}
            `}):U`
                &nbsp;
            `}}),YV=HV()({tagName:`book-breadcrumbs-bar`,styles:V`
        :host {
            border-bottom: 1px solid
                ${K.colors[`vira-grey-foreground-placeholder`].foreground.value};
            padding: 4px 8px;
            background-color: ${K.colors[iL].background.value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return U`
            ${cI(!!e.currentSearch,U`
                    &nbsp;
                `,U`
                    <${JV.assign({currentRoute:e.currentRoute,router:e.router})}></${JV}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${H(`input`,async e=>{let n=e.currentTarget;if(!(n instanceof HTMLInputElement))throw TypeError(`Failed to find input element for search.`);let r=n.value;await mo({milliseconds:200}),n.value===r&&(n.value?t(new VV({detail:{paths:[Du.Search,encodeURIComponent(n.value)]}})):t(new VV({detail:ku})))})}
            />
        `}}),XV=HV()({tagName:`book-entry-description`,styles:V`
        :host {
            color: ${K.colors[`vira-grey-foreground-placeholder`].foreground.value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${K.colors[iL].foreground.value};
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
    `,render({inputs:e}){return e.descriptionParagraphs.map(e=>U`
                <p>${e}</p>
            `)}}),ZV=HV()({tagName:`book-page-wrapper`,styles:V`
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

        ${UV} {
            display: inline-block;
        }
    `,render({inputs:e}){let t=e.isTopLevel?U`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:U`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,n=[Du.Book,...e.pageNode.fullUrlBreadcrumbs],r=e.pageNode.entry.errors.length?al(e.pageNode.entry.errors):void 0;return r&&console.error(r),U`
            <div class="page-header block-entry">
                <div class="title-group">
                    ${e.blockNavigation?t:U`
                  <${UV.assign({route:{paths:n,hash:void 0,search:void 0},router:e.router})}>
                      ${t}
                  </${UV}>
              `}
                    ${r?U`
                              <${IB}>${r.message}</${IB}>
                          `:U`
                              <${XV.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${XV}>
                              <${KV.assign({config:e.pageNode.entry.controls,currentValues:Su(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${KV}>
                          `}
                </div>
            </div>
        `}}),QV=HV()({tagName:`book-element-example-title`,styles:V`
        :host {
            display: flex;
            color: ${K.colors[`vira-grey-foreground-placeholder`].foreground.value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){if(e.blockNavigation)return e.elementExampleNode.entry.title;let t=[Du.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return U`
            <${UV.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${UV}>
        `}}),$V=Symbol(`unset-internal-state`),eH=HV()({tagName:`book-element-example-viewer`,state(){return{isUnset:$V}},render({state:e,inputs:t,updateState:n}){try{if(t.elementExampleNode.entry.errors.length)throw al(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render==`string`)throw Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===$V&&n({isUnset:void 0,...t.elementExampleNode.entry.state?.()});let r=t.elementExampleNode.entry.render({state:e,updateState:n,controls:t.currentPageControls});if(r instanceof Promise)throw TypeError(`render output cannot be a promise`);return U`
                ${cI(!!t.elementExampleNode.entry.styles,U`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${r}
            `}catch(e){return console.error(`ERROR HERE`,S(e)),console.error(e),U`
                <${IB}>
                    ${t.elementExampleNode.entry.title} failed: ${S(e)}
                </${IB}>
            `}},options:{allowPolymorphicState:!0}}),tH=HV()({tagName:`book-element-example-wrapper`,styles:V`
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

        ${QV} {
            color: ${K.colors[`vira-grey-foreground-placeholder`].foreground.value};
        }

        :host(:hover) ${QV} {
            color: ${Xd[`element-book-accent-icon-color`].value};
        }
    `,render({inputs:e}){return U`
            <div class="individual-example-wrapper">
                <${QV.assign({blockNavigation:e.blockNavigation,elementExampleNode:e.elementExampleNode,router:e.router})}></${QV}>
                <${eH.assign(e)}></${eH}>
            </div>
        `}}),nH={milliseconds:10},rH,iH=new Map,aH=new Map;function oH(){return rH||=new IntersectionObserver(e=>{for(let t of e){let e=t.target,n=iH.get(e);if(n){if(t.isIntersecting){if(!aH.has(e)){let t=globalThis.setTimeout(()=>{aH.delete(e),n(),rH?.unobserve(e),iH.delete(e)},uo(nH,{milliseconds:!0}).milliseconds);aH.set(e,t)}}else{let t=aH.get(e);t&&(clearTimeout(t),aH.delete(e))}}}},{rootMargin:`100px`}),rH}function sH(e){let t=aH.get(e);t&&(clearTimeout(t),aH.delete(e)),iH.delete(e),rH?.unobserve(e)}var cH=HV()({tagName:`book-lazy-entry`,state(){return{hasRendered:!1,placeholderElement:void 0}},styles:V`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&sH(e.placeholderElement)},render({inputs:e,state:t,updateState:n}){return t.hasRendered?e.content:U`
            <div
                class="placeholder"
                ${tI(e=>{t.placeholderElement&&sH(t.placeholderElement),n({placeholderElement:e}),iH.set(e,()=>{n({hasRendered:!0})}),oH().observe(e)})}
            >
                &nbsp;
            </div>
        `}});function lH({currentNodes:e,currentControls:t,currentNode:n,originalTree:r}){let i=bu(n,r),a=[];if(i){let n=lH({currentNodes:e,currentControls:t,currentNode:i,originalTree:r});n&&a.push(n)}if(mu(n,c.Page)&&!e.includes(n)){let e=Su(t,n.fullUrlBreadcrumbs);a.push({config:n.entry.controls,current:e,breadcrumbs:zl(e,()=>n.fullUrlBreadcrumbs)})}return a.reduce((e,t)=>({config:{...e.config,...t.config},current:{...e.current,...t.current},breadcrumbs:{...e.breadcrumbs,...t.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function uH({blockNavigation:e,currentNodes:t,isTopLevel:n,router:r,isSearching:i,controls:a,originalTree:o}){if(!t.length&&i)return[U`
                No results
            `];let s=A.isLengthAtLeast(t,1)?lH({currentNodes:t,currentControls:a,currentNode:t[0],originalTree:o}):void 0;return[s&&Object.values(s.config).length&&A.isLengthAtLeast(t,1)?U`
                  <${KV.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${KV}>
              `:M,GF(t,e=>e.fullUrlBreadcrumbs.join(`>`),t=>{if(mu(t,c.Page))return U`
                    <${ZV.assign({blockNavigation:e,isTopLevel:n,pageNode:t,controls:a,router:r})}
                        class="block-entry"
                    ></${ZV}>
                `;if(mu(t,c.ElementExample)){let n=Su(a,t.fullUrlBreadcrumbs.slice(0,-1)),i=U`
                    <${tH.assign({blockNavigation:e,elementExampleNode:t,currentPageControls:n,router:r})}></${tH}>
                `;return U`
                    <${cH.assign({content:i})}
                        class="inline-entry ${WP({"block-entry":t.entry.isVertical})}"
                    ></${cH}>
                `}if(mu(t,c.Root))return M;{let e=U`
                    <${IB}>
                        Unknown entry type for rendering: '${t.entry.entryType}'
                    </${IB}>
                `;return U`
                    <${cH.assign({content:e})}
                        class="block-entry"
                    ></${cH}>
                `}})]}var dH=HV()({tagName:`book-entry-display`,state(){return{lastElement:void 0}},styles:V`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .all-book-entries-wrapper {
            background-color: ${K.colors[iL].background.value};
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

        ${YV} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            ${$I(K.colors[iL])}
            animation: fade-in linear
                ${Dz[`vira-interaction-animation-duration`].value} forwards;
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
    `,events:{loadingRender:OF()},render({inputs:e,dispatch:t,events:n,state:r,updateState:i}){let a=Ou(e.currentRoute.paths),o=uH({blockNavigation:e.blockNavigation,currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!a,controls:e.controls,originalTree:e.originalTree});return U`
            <${YV.assign({currentSearch:a,currentRoute:e.currentRoute,router:e.router})}></${YV}>

            ${cI(e.showLoading,U`
                    <div
                        ${tI(()=>{t(new n.loadingRender({detail:!0}))})}
                        class="loading"
                    >
                        <${Y.assign({icon:yB})}></${Y}>
                    </div>
                    ${cI(!!r.lastElement,U`
                            ${r.lastElement}
                            <slot></slot>
                        `)}
                `,U`
                    <div
                        ${tI(e=>{i({lastElement:e})})}
                        class="all-book-entries-wrapper"
                    >
                        ${o}
                    </div>
                    <slot></slot>
                `)}
        `}});function fH(e,t,n){let r=pH(e,t);return r.length?r:(n(ku),pH(e,ku.paths))}function pH(e,t){return e.filter(e=>ou({searchFor:t.slice(1),searchIn:e.fullUrlBreadcrumbs}))}var mH=BF()({tagName:`element-book-app`,state(){return{currentRoute:ku,router:void 0,loading:!0,colors:{config:void 0,theme:jV(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0,isDarkMode:globalThis.matchMedia(`(prefers-color-scheme: dark)`).matches,darkModeCleanup:void 0}},events:{pathUpdate:OF()},slotNames:[`element-book-app-footer`,`element-book-app-nav-header`],styles:V`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            ${$I(K.colors[iL])}
        }

        .root {
            flex-grow: 1;
            width: 100%;
            display: flex;
            position: relative;
        }

        ${dH} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${GV} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,cleanup({state:e,updateState:t}){e.router&&e.router.destroy(),e.darkModeCleanup&&e.darkModeCleanup(),t({router:void 0,darkModeCleanup:void 0})},render({state:e,inputs:t,host:n,updateState:r,dispatch:i,events:a,slotNames:o}){t._debug&&console.info(`rendering element-book app`);function s(t){return{...e.currentRoute,...t}}function c(t){let n=s(t);return!A.jsonEquals(e.currentRoute,n)}function l(n){t.preventWindowTitleChange||(e.originalWindowTitle||r({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,n].filter(A.isTruthy).join(` - `))}function u(n){if(!c(n))return;let o=s(n);e.router?e.router.setRoute(o):r({currentRoute:{...e.currentRoute,...o}}),t.elementBookRoutePaths&&!A.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new a.pathUpdate({detail:o.paths}))}try{if(t.elementBookRoutePaths&&!A.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&u({paths:Rl(t.elementBookRoutePaths)}),t.internalRouterConfig?.useInternalRouter&&!e.router){let e=zV(t.internalRouterConfig.basePath);r({router:e}),e.listen(!0,e=>{r({currentRoute:e})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();let i={themeColor:t.themeColor};if(!A.jsonEquals(i,e.colors.config)){let e=jV(i);r({colors:{config:i,theme:e}}),Qd(n,e)}if(!e.darkModeCleanup){let e=globalThis.matchMedia(`(prefers-color-scheme: dark)`);function t(e){r({isDarkMode:e.matches})}e.addEventListener(`change`,t),r({isDarkMode:e.matches,darkModeCleanup(){e.removeEventListener(`change`,t)}})}Wd(t.darkMode??e.isDarkMode?uL.overrides:{},`element-book-dark-mode`);let a=t._debug??!1,s=_u({entries:t.pages,debug:a});e.treeBasedControls&&e.treeBasedControls.pages===t.pages&&e.treeBasedControls.lastGlobalInputs===t.globalValues||(t._debug&&console.info(`regenerating global controls`),r({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:Tu(s.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));let d=Ou(e.currentRoute.paths),f=(d?RV({flattenedNodes:s.flattenedNodes,searchQuery:d}):void 0)??fH(s.flattenedNodes,e.currentRoute.paths,u);l(f[0]?.entry.title);let p=e.treeBasedControls?.controls;return p?(t._debug&&console.info({currentControls:p}),U`
                <div
                    class="root"
                    ${H(VV,e=>{let t=e.detail;if(c(t)&&(r({loading:!0}),u(t),!(n.shadowRoot.querySelector(GV.tagName)instanceof GV)))throw TypeError(`Failed to find child '${GV.tagName}'`)})}
                    ${H(KV.events.controlValueChange,t=>{if(!e.treeBasedControls)return;let n=wu(p,t.detail.fullUrlBreadcrumbs,t.detail.newValues);r({treeBasedControls:{...e.treeBasedControls,controls:n}})})}
                >
                    ${t.blockNavigation?M:U`
                              <${GV.assign({flattenedNodes:s.flattenedNodes,router:e.router,selectedPath:d?void 0:e.currentRoute.paths.slice(1)})}>
                                  <slot name=${o[`element-book-app-nav-header`]}></slot>
                              </${GV}>
                          `}
                    <${dH.assign({blockNavigation:!!t.blockNavigation,controls:p,currentNodes:f,currentRoute:e.currentRoute,debug:a,originalTree:s.tree,router:e.router,showLoading:e.loading})}
                        ${H(dH.events.loadingRender,async e=>{await _L();let t=n.shadowRoot.querySelector(dH.tagName);t?t.scroll({top:0,behavior:`instant`}):console.error(`Failed to find '${dH.tagName}' for scrolling.`),await _L(),r({loading:!e.detail})})}
                    >
                        <slot name=${o[`element-book-app-footer`]}></slot>
                    </${dH}>
                </div>
            `):U`
                    <${IB}>Failed to generate page controls.</${IB}>
                `}catch(e){return console.error(e),U`
                <${IB}>${S(e)}</${IB}>
            `}}}),hH=Eu({title:`Cards`,parent:void 0,descriptionParagraphs:[`Multiple full cards of structured render data.`]});function gH({newStyles:e,oldStyles:t,shadowRoot:n,maintainFirstStylesheet:r}){if(e!==t){let t=new CSSStyleSheet;return t.replaceSync(e),n.adoptedStyleSheets=[r?Ic.isDefined(n.adoptedStyleSheets[0]):void 0,t].filter(A.isTruthy),!0}return!1}var _H=BF()({tagName:`vir-copy`,styles:V`
        :host {
            display: inline-flex;
        }
    `,state(){return{justCopied:!1,pendingResetCount:0}},render({inputs:e,state:t,updateState:n,host:r}){let i=e.label||`Copy`,a=e.copiedLabel||`Copied`;return U`
            <${mB.assign({text:t.justCopied?a:i,icon:iz,buttonEmphasis:Cz.Subtle,color:J.Neutral,buttonSize:xz.Small})}
                ${H(`click`,async()=>{try{await navigator.clipboard.writeText(e.text)}catch{return}let t=r.instanceState.pendingResetCount+1;n({justCopied:!0,pendingResetCount:t}),await mo({seconds:2}),r.instanceState.pendingResetCount===t&&n({justCopied:!1})})}
            ></${mB}>
        `}});function vH(e,t){this.v=e,this.k=t}function yH(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function bH(e){if(Array.isArray(e))return e}function xH(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function SH(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function CH(e,t){return bH(e)||xH(e,t)||wH(e,t)||SH()}function wH(e,t){if(e){if(typeof e==`string`)return yH(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?yH(e,t):void 0}}function TH(e){var t,n;function r(t,n){try{var a=e[t](n),o=a.value,s=o instanceof vH;Promise.resolve(s?o.v:o).then(function(n){if(s){var c=t===`return`&&o.k?t:`next`;if(!o.k||n.done)return r(c,n);n=e[c](n).value}i(!!a.done,n)},function(e){r(`throw`,e)})}catch(e){i(2,e)}}function i(e,i){e===2?t.reject(i):t.resolve({value:i,done:e}),(t=t.next)?r(t.key,t.arg):n=null}this._invoke=function(e,i){return new Promise(function(a,o){var s={key:e,arg:i,resolve:a,reject:o,next:null};n?n=n.next=s:(t=n=s,r(e,i))})},typeof e.return!=`function`&&(this.return=void 0)}TH.prototype[typeof Symbol==`function`&&Symbol.asyncIterator||`@@asyncIterator`]=function(){return this},TH.prototype.next=function(e){return this._invoke(`next`,e)},TH.prototype.throw=function(e){return this._invoke(`throw`,e)},TH.prototype.return=function(e){return this._invoke(`return`,e)};var EH=Object.entries,DH=Object.setPrototypeOf,OH=Object.isFrozen,kH=Object.getPrototypeOf,AH=Object.getOwnPropertyDescriptor,jH=Object.freeze,MH=Object.seal,NH=Object.create,PH=typeof Reflect<`u`&&Reflect,FH=PH.apply,IH=PH.construct;jH||=function(e){return e},MH||=function(e){return e},FH||=function(e,t){var n=[...arguments].slice(2);return e.apply(t,n)},IH||=function(e){return new e(...[...arguments].slice(1))};var LH=sU(Array.prototype.forEach);Array.prototype.indexOf;var RH=sU(Array.prototype.lastIndexOf),zH=sU(Array.prototype.pop),BH=sU(Array.prototype.push),VH=sU(Array.prototype.slice),HH=sU(Array.prototype.splice),UH=Array.isArray,WH=cU(Set),GH=sU(Set.prototype.add),KH=sU(Set.prototype.has),qH=sU(String.prototype.toLowerCase),JH=sU(String.prototype.toString),YH=sU(String.prototype.match),XH=sU(String.prototype.replace),ZH=sU(String.prototype.indexOf),QH=sU(String.prototype.trim),$H=sU(Number.prototype.toString),eU=sU(Boolean.prototype.toString),tU=typeof BigInt>`u`?null:sU(BigInt.prototype.toString),nU=typeof Symbol>`u`?null:sU(Symbol.prototype.toString),rU=sU(Object.prototype.hasOwnProperty),iU=sU(Object.prototype.toString),aU=sU(RegExp.prototype.test),oU=cU(TypeError);function sU(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);var n=[...arguments].slice(1);return FH(e,t,n)}}function cU(e){return function(){return IH(e,[...arguments])}}function lU(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:qH;if(DH&&DH(e,null),!UH(t))return e;let r=t.length;for(;r--;){let i=t[r];if(typeof i==`string`){let e=n(i);e!==i&&(OH(t)||(t[r]=e),i=e)}e[i]=!0}return e}function uU(e){for(let t=0;t<e.length;t++)rU(e,t)||(e[t]=null);return e}function dU(e){let t=NH(null);for(let r of EH(e)){var n=CH(r,2);let i=n[0],a=n[1];rU(e,i)&&(t[i]=UH(a)?uU(a):a&&typeof a==`object`&&a.constructor===Object?dU(a):a)}return t}function fU(e){switch(typeof e){case`string`:return e;case`number`:return $H(e);case`boolean`:return eU(e);case`bigint`:return tU?tU(e):`0`;case`symbol`:return nU?nU(e):`Symbol()`;case`undefined`:return iU(e);case`function`:case`object`:{if(e===null)return iU(e);let t=e,n=pU(t,`toString`);if(typeof n==`function`){let e=n(t);return typeof e==`string`?e:iU(e)}return iU(e)}default:return iU(e)}}function pU(e,t){for(;e!==null;){let n=AH(e,t);if(n){if(n.get)return sU(n.get);if(typeof n.value==`function`)return sU(n.value)}e=kH(e)}function n(){return null}return n}function mU(e,t){for(;e!==null;){let n=AH(e,t);if(n)return n.get?sU(n.get):null;e=kH(e)}return null}function hU(e){try{return aU(e,``),!0}catch{return!1}}var gU=jH(`a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(`.`)),_U=jH(`svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(`.`)),vU=jH([`feBlend`,`feColorMatrix`,`feComponentTransfer`,`feComposite`,`feConvolveMatrix`,`feDiffuseLighting`,`feDisplacementMap`,`feDistantLight`,`feDropShadow`,`feFlood`,`feFuncA`,`feFuncB`,`feFuncG`,`feFuncR`,`feGaussianBlur`,`feImage`,`feMerge`,`feMergeNode`,`feMorphology`,`feOffset`,`fePointLight`,`feSpecularLighting`,`feSpotLight`,`feTile`,`feTurbulence`]),yU=jH([`animate`,`color-profile`,`cursor`,`discard`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`foreignobject`,`hatch`,`hatchpath`,`mesh`,`meshgradient`,`meshpatch`,`meshrow`,`missing-glyph`,`script`,`set`,`solidcolor`,`unknown`,`use`]),bU=jH(`math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(`.`)),xU=jH([`maction`,`maligngroup`,`malignmark`,`mlongdiv`,`mscarries`,`mscarry`,`msgroup`,`mstack`,`msline`,`msrow`,`semantics`,`annotation`,`annotation-xml`,`mprescripts`,`none`]),SU=jH([`#text`]),CU=jH(`accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns`.split(`.`)),wU=jH(`accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.pointer-events.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.vector-effect.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(`.`)),TU=jH(`accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(`.`)),EU=jH([`xlink:href`,`xml:id`,`xlink:title`,`xml:space`,`xmlns:xlink`]),DU=MH(/{{[\w\W]*|^[\w\W]*}}/g),OU=MH(/<%[\w\W]*|^[\w\W]*%>/g),kU=MH(/\${[\w\W]*/g),AU=MH(/^data-[\-\w.\u00B7-\uFFFF]+$/),jU=MH(/^aria-[\-\w]+$/),MU=MH(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),NU=MH(/^(?:\w+script|data):/i),PU=MH(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),FU=MH(/^html$/i),IU=MH(/^[a-z][.\w]*(-[.\w]+)+$/i),LU=MH(/<[/\w!]/g),RU=MH(/<[/\w]/g),zU=MH(/<\/no(script|embed|frames)/i),BU=MH(/\/>/i),VU={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},HU=jH(lU({},[`style`,`script`,`xmp`,`iframe`,`noembed`,`noframes`,`plaintext`,`noscript`])),UU=function(){return typeof window>`u`?null:window},WU=function(e,t){if(typeof e!=`object`||typeof e.createPolicy!=`function`)return null;let n=null,r=`data-tt-policy-suffix`;t&&t.hasAttribute(r)&&(n=t.getAttribute(r));let i=`dompurify`+(n?`#`+n:``);try{return e.createPolicy(i,{createHTML(e){return e},createScriptURL(e){return e}})}catch{return console.warn(`TrustedTypes policy `+i+` could not be created.`),null}},GU=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},KU=function(e,t,n,r){return rU(e,t)&&UH(e[t])?lU(r.base?dU(r.base):{},e[t],r.transform):n},qU=function(e,t,n){let r=rU(e,t)?e[t]:void 0;return r&&typeof r==`object`?dU(r):n()};function JU(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:UU(),t=e=>JU(e);if(t.version=`3.4.17`,t.removed=[],!e||!e.document||e.document.nodeType!==VU.document||!e.Element)return t.isSupported=!1,t;let n=e.document,r=n,i=r.currentScript;e.DocumentFragment;let a=e.HTMLTemplateElement,o=e.Node,s=e.Element,c=e.NodeFilter;e.NamedNodeMap===void 0&&(e.NamedNodeMap||e.MozNamedAttrMap),e.HTMLFormElement;let l=e.DOMParser,u=e.trustedTypes,d=s.prototype,f=pU(d,`cloneNode`),p=pU(d,`remove`),m=pU(d,`removeAttributeNode`),h=pU(d,`nextSibling`),g=pU(d,`childNodes`),_=pU(d,`parentNode`),ee=pU(d,`shadowRoot`),te=pU(d,`attributes`),ne=o&&o.prototype?pU(o.prototype,`nodeType`):null,re=o&&o.prototype?pU(o.prototype,`nodeName`):null,ie=o&&o.prototype?pU(o.prototype,`ownerDocument`):null,ae=function(e){return ne?ne(e):e.nodeType},oe=function(e){return re?re(e):e.nodeName},se=mU(d,`namespaceURI`),ce=function(e){return se?se(e):e.namespaceURI};if(typeof a==`function`){let e=n.createElement(`template`);e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let le,ue=``,de,fe=!1,pe=0,me=function(){if(pe>0)throw oU(`A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.`)},he=function(e){me(),pe++;try{return le.createHTML(e)}finally{pe--}},ge=function(e){me(),pe++;try{return le.createScriptURL(e)}finally{pe--}},_e=function(){return fe||=(de=WU(u,i),!0),de},v=n,ve=v.implementation,ye=v.createNodeIterator,be=v.createDocumentFragment,y=v.getElementsByTagName,xe=r.importNode,b=GU();t.isSupported=typeof EH==`function`&&typeof _==`function`&&ve&&ve.createHTMLDocument!==void 0;let Se=DU,Ce=OU,we=kU,Te=AU,Ee=jU,De=NU,Oe=PU,ke=IU,Ae=MU,x=null,je=lU({},[...gU,..._U,...vU,...bU,...SU]),Me=null,Ne=lU({},[...CU,...wU,...TU,...EU]),Pe=Object.seal(NH(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Fe=null,S=null,Ie=Object.seal(NH(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),C=!0,Le=!0,w=!1,T=!0,Re=!1,ze=!0,Be=!1,Ve=!1,He=null,Ue=null,We=!1,Ge=!1,Ke=!1,qe=!1,Je=!0,Ye=!1,E=`user-content-`,Xe=!0,Ze=!1,Qe=null,$e={},et=null,tt=lU({},`annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp`.split(`.`)),nt=null,rt=lU({},[`audio`,`video`,`img`,`source`,`image`,`track`]),it=null,at=lU({},[`alt`,`class`,`for`,`id`,`label`,`name`,`pattern`,`placeholder`,`role`,`summary`,`title`,`value`,`style`,`xmlns`]),ot=`http://www.w3.org/1998/Math/MathML`,st=`http://www.w3.org/2000/svg`,ct=`http://www.w3.org/1999/xhtml`,lt=ct,ut=!1,dt=null,ft=lU({},[ot,st,ct],JH),pt=jH([`mi`,`mo`,`mn`,`ms`,`mtext`]),mt=lU({},pt),ht=jH([`annotation-xml`]),gt=lU({},ht),_t=lU({},[`title`,`style`,`font`,`a`,`script`]),vt=null,yt=[`application/xhtml+xml`,`text/html`],bt=null,xt=null,St=n.createElement(`form`),Ct=function(e){return e instanceof RegExp||e instanceof Function},wt=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(xt&&xt===e)return;e&&typeof e==`object`||(e={}),e=dU(e),vt=yt.indexOf(e.PARSER_MEDIA_TYPE)===-1?`text/html`:e.PARSER_MEDIA_TYPE,bt=vt===`application/xhtml+xml`?JH:qH,x=KU(e,`ALLOWED_TAGS`,je,{transform:bt}),Me=KU(e,`ALLOWED_ATTR`,Ne,{transform:bt}),dt=KU(e,`ALLOWED_NAMESPACES`,ft,{transform:JH}),it=KU(e,`ADD_URI_SAFE_ATTR`,at,{transform:bt,base:at}),nt=KU(e,`ADD_DATA_URI_TAGS`,rt,{transform:bt,base:rt}),et=KU(e,`FORBID_CONTENTS`,tt,{transform:bt}),Fe=KU(e,`FORBID_TAGS`,dU({}),{transform:bt}),S=KU(e,`FORBID_ATTR`,dU({}),{transform:bt}),$e=rU(e,`USE_PROFILES`)?e.USE_PROFILES&&typeof e.USE_PROFILES==`object`?dU(e.USE_PROFILES):e.USE_PROFILES:!1,C=e.ALLOW_ARIA_ATTR!==!1,Le=e.ALLOW_DATA_ATTR!==!1,w=e.ALLOW_UNKNOWN_PROTOCOLS||!1,T=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Re=e.SAFE_FOR_TEMPLATES||!1,ze=e.SAFE_FOR_XML!==!1,Be=e.WHOLE_DOCUMENT||!1,Ge=e.RETURN_DOM||!1,Ke=e.RETURN_DOM_FRAGMENT||!1,qe=e.RETURN_TRUSTED_TYPE||!1,We=e.FORCE_BODY||!1,Je=e.SANITIZE_DOM!==!1,Ye=e.SANITIZE_NAMED_PROPS||!1,Xe=e.KEEP_CONTENT!==!1,Ze=e.IN_PLACE||!1,Ae=hU(e.ALLOWED_URI_REGEXP)?e.ALLOWED_URI_REGEXP:MU,lt=typeof e.NAMESPACE==`string`?e.NAMESPACE:ct,mt=qU(e,`MATHML_TEXT_INTEGRATION_POINTS`,()=>lU({},pt)),gt=qU(e,`HTML_INTEGRATION_POINTS`,()=>lU({},ht));let t=qU(e,`CUSTOM_ELEMENT_HANDLING`,()=>NH(null));if(Pe=NH(null),rU(t,`tagNameCheck`)&&Ct(t.tagNameCheck)&&(Pe.tagNameCheck=t.tagNameCheck),rU(t,`attributeNameCheck`)&&Ct(t.attributeNameCheck)&&(Pe.attributeNameCheck=t.attributeNameCheck),rU(t,`allowCustomizedBuiltInElements`)&&typeof t.allowCustomizedBuiltInElements==`boolean`&&(Pe.allowCustomizedBuiltInElements=t.allowCustomizedBuiltInElements),MH(Pe),Re&&(Le=!1),Ke&&(Ge=!0),$e&&(x=lU({},SU),Me=NH(null),$e.html===!0&&(lU(x,gU),lU(Me,CU)),$e.svg===!0&&(lU(x,_U),lU(Me,wU),lU(Me,EU)),$e.svgFilters===!0&&(lU(x,vU),lU(Me,wU),lU(Me,EU)),$e.mathMl===!0&&(lU(x,bU),lU(Me,TU),lU(Me,EU))),Ie.tagCheck=null,Ie.attributeCheck=null,rU(e,`ADD_TAGS`)&&(typeof e.ADD_TAGS==`function`?Ie.tagCheck=e.ADD_TAGS:UH(e.ADD_TAGS)&&(x===je&&(x=dU(x)),lU(x,e.ADD_TAGS,bt))),rU(e,`ADD_ATTR`)&&(typeof e.ADD_ATTR==`function`?Ie.attributeCheck=e.ADD_ATTR:UH(e.ADD_ATTR)&&(Me===Ne&&(Me=dU(Me)),lU(Me,e.ADD_ATTR,bt))),rU(e,`ADD_FORBID_CONTENTS`)&&UH(e.ADD_FORBID_CONTENTS)&&(et===tt&&(et=dU(et)),lU(et,e.ADD_FORBID_CONTENTS,bt)),Xe&&(x[`#text`]=!0),Be&&lU(x,[`html`,`head`,`body`]),x.table&&(lU(x,[`tbody`]),delete Fe.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!=`function`)throw oU(`TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`);if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!=`function`)throw oU(`TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`);let t=le;le=e.TRUSTED_TYPES_POLICY;try{ue=he(``)}catch(e){throw le=t,e}}else e.TRUSTED_TYPES_POLICY===null?(le=void 0,ue=``):(le===void 0&&(le=_e()),le&&typeof ue==`string`&&(ue=he(``)));jH&&jH(e),xt=e},Tt=lU({},[..._U,...vU,...yU]),Et=lU({},[...bU,...xU]),Dt=function(e,t,n){return t.namespaceURI===ct?e===`svg`:t.namespaceURI===ot?e===`svg`&&(n===`annotation-xml`||mt[n]):!!Tt[e]},Ot=function(e,t,n){return t.namespaceURI===ct?e===`math`:t.namespaceURI===st?e===`math`&&gt[n]:!!Et[e]},kt=function(e,t,n){return t.namespaceURI===st&&!gt[n]||t.namespaceURI===ot&&!mt[n]?!1:!Et[e]&&(_t[e]||!Tt[e])},At=function(e){let t=ce(e),n=qH(oe(e)),r=_(e),i,a;return r&&ae(r)===VU.element?(i={namespaceURI:ce(r)},a=qH(oe(r))):(i={namespaceURI:lt},a=`template`),dt[t]?t===st?Dt(n,i,a):t===ot?Ot(n,i,a):t===ct?kt(n,i,a):!!(vt===`application/xhtml+xml`&&dt[t]):!1},jt=function(e){BH(t.removed,{element:e});try{_(e).removeChild(e)}catch{if(p(e),!_(e))throw oU(`a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place`)}},Mt=function(e,t,n){try{m(e,t)}catch{try{e.removeAttribute(n)}catch{}}},Nt=function(e){Lt(e);let t=g(e);t&&LH(VH(t),e=>{try{p(e)}catch{}});let n=ae(e)===VU.element?te(e):null;if(n)for(let t=n.length-1;t>=0;--t){let r=n[t],i=r&&r.name;typeof i==`string`&&Mt(e,r,i)}},Pt=function(e,n,r){if(!r)try{r=n.getAttributeNode(e)}catch{r=null}BH(t.removed,{attribute:r||null,from:n});try{r?m(n,r):n.removeAttribute(e)}catch{try{n.removeAttribute(e)}catch{}}if(e===`is`){if(Ge||Ke)try{jt(n)}catch{}else try{n.setAttribute(e,``)}catch{}}},Ft=function(e){let t=te(e);if(t)for(let n=t.length-1;n>=0;--n){let r=t[n],i=r&&r.name;typeof i!=`string`||Me[bt(i)]||Mt(e,r,i)}},It=function(e,t){let n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=[e];for(;r.length>0;){let e=r.pop();if(t(e)===!1)continue;if(n&&ae(e)===VU.element){let t=ee(e);Qt(t)&&r.push(t)}let i=g(e);if(i)for(let e=i.length-1;e>=0;--e)r.push(i[e])}},Lt=function(e){It(e,e=>{ae(e)===VU.element&&Ft(e)})},Rt=function(e){let t=[];return It(e,e=>{t.push(e)},!0),t},zt=function(e,t){let n=WH();LH(Rt(e),e=>{ae(e)===VU.element&&GH(n,e)}),LH(t,e=>{ae(e)===VU.element&&!KH(n,e)&&Ft(e)})},Bt=function(e,n){let r=!1;return LH(t.removed,t=>{t.element&&(r||=t.element===e,Lt(t.element))}),zt(e,n),r},Vt=function(e,t){let n=Qe,r=null,i=()=>(r||(r=WH(),LH(t,e=>{GH(r,e)})),r);for(let t=0;;t++){let r=Rt(e),a=[e],o=!1;if(LH(r,e=>{ae(e)===VU.documentFragment?BH(a,e):!o&&!KH(n,e)&&(o=KH(i(),e))}),!o)return;if(t>=8)throw oU(`the tree kept changing during in-place sanitization; refusing to return it`);LH(a,(t,n)=>{Ht(t,n>0,e,i())})}},Ht=function(e,t,n,r){let i=qt(e),a;for(;a=i.nextNode();)KH(r,a)&&!KH(Qe,a)&&(t&&en(b.uponSanitizeShadowNode,a,null),sn(a,n),mn(a,n),Qt(a.content)&&hn(a.content))},Ut=function(e){Qe&&GH(Qe,e)},Wt=function(e,t){return ze?e===`patchsrc`||e===`for`&&t!==`label`&&t!==`output`:!1},Gt=function(e){ze&&It(e,e=>{let t=ae(e);if(t===VU.processingInstruction||t===VU.comment&&aU(RU,e.data)){try{p(e)}catch{}return!1}if(t===VU.element){let t=e,n=bt(oe(e));try{t.hasAttribute&&t.hasAttribute(`patchsrc`)&&t.removeAttribute(`patchsrc`),t.hasAttribute&&t.hasAttribute(`for`)&&Wt(`for`,n)&&t.removeAttribute(`for`)}catch{}}return!0})},Kt=function(e){let t=null,r=null;if(We)e=`<remove></remove>`+e;else{let t=YH(e,/^[\r\n\t ]+/);r=t&&t[0]}vt===`application/xhtml+xml`&&lt===ct&&(e=`<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>`+e+`</body></html>`);let i=le?he(e):e;if(lt===ct)try{t=new l().parseFromString(i,vt)}catch{}if(!t||!t.documentElement){t=ve.createDocument(lt,`template`,null);try{t.documentElement.innerHTML=ut?ue:i}catch{}}let a=t.body||t.documentElement;return e&&r&&a.insertBefore(n.createTextNode(r),a.childNodes[0]||null),lt===ct?y.call(t,Be?`html`:`body`)[0]:Be?t.documentElement:a},qt=function(e){let t=ie?ie(e):e.ownerDocument;return ye.call(t||e,e,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},Jt=function(e){return e=XH(e,Se,` `),e=XH(e,Ce,` `),e=XH(e,we,` `),e},Yt=function(e){Xt(e);let t=e.querySelectorAll?.call(e,`template`);t&&LH(t,e=>{Qt(e.content)&&Yt(e.content)})},Xt=function(e){e.normalize();let t=ie?ie(e):e.ownerDocument,n=ye.call(t||e,e,c.SHOW_TEXT|c.SHOW_COMMENT|c.SHOW_CDATA_SECTION|c.SHOW_PROCESSING_INSTRUCTION,null),r=n.nextNode();for(;r;)r.data=Jt(r.data),r=n.nextNode()},Zt=function(e){let t=re?re(e):null;return typeof t!=`string`||bt(t)!==`form`?!1:typeof e.nodeName!=`string`||typeof e.textContent!=`string`||typeof e.removeChild!=`function`||e.attributes!==te(e)||typeof e.removeAttribute!=`function`||typeof e.removeAttributeNode!=`function`||typeof e.getAttributeNode!=`function`||typeof e.setAttribute!=`function`||typeof e.namespaceURI!=`string`||typeof e.insertBefore!=`function`||typeof e.hasChildNodes!=`function`||e.nodeType!==ne(e)||e.childNodes!==g(e)},Qt=function(e){if(!ne||typeof e!=`object`||!e)return!1;try{return ne(e)===VU.documentFragment}catch{return!1}},$t=function(e){if(!ne||typeof e!=`object`||!e)return!1;try{return typeof ne(e)==`number`}catch{return!1}};function en(e,n,r){e.length!==0&&LH(e,e=>{e.call(t,n,r,xt)})}let tn=function(e,t){return!!(ze&&e.hasChildNodes()&&!$t(e.firstElementChild)&&aU(LU,e.textContent)&&aU(LU,e.innerHTML)||ze&&HU[t]&&ae(e)===VU.element&&ce(e)===ct&&($t(e.firstElementChild)||typeof e.textContent==`string`&&aU(LU,e.textContent))||e.nodeType===VU.processingInstruction||ze&&e.nodeType===VU.comment&&aU(RU,e.data))},nn=function(e,t){return e instanceof RegExp?aU(e,t):e instanceof Function&&!!e(t,...[...arguments].slice(2))},rn=function(e,t,n){if(!Fe[t]&&un(t)&&nn(Pe.tagNameCheck,t))return!1;if(Xe&&!et[t]&&!et[qH(t)]){let t=_(e),r=g(e);if(r&&t){let i=r.length;for(let a=i-1;a>=0;--a){let i=e===n?f(r[a],!0):r[a];t.insertBefore(i,h(e))}}}return jt(e),!0},an=function(e,t,n,r){return e.length===0?t:t===n||t===r?dU(t):t},on=function(e,t){return e===t||_(e)!==null?!1:(Ze&&Lt(e),!0)},sn=function(e,n){if(Ut(e),en(b.beforeSanitizeElements,e,null),on(e,n))return!0;if(Zt(e))return jt(e),!0;let r=bt(oe(e));if(x=an(b.uponSanitizeElement,x,je,He),en(b.uponSanitizeElement,e,{tagName:r,allowedTags:x}),on(e,n))return!0;if(tn(e,r))return jt(e),!0;if(Fe[r]||!(Ie.tagCheck instanceof Function&&Ie.tagCheck(r))&&!x[r]){let t=rn(e,r,n);return t===!1&&(en(b.afterSanitizeElements,e,null),on(e,n))?!0:t}if(ae(e)===VU.element&&!At(e)||(r===`noscript`||r===`noembed`||r===`noframes`)&&aU(zU,e.innerHTML))return jt(e),!0;if(Re&&e.nodeType===VU.text){let n=Jt(e.textContent);e.textContent!==n&&(BH(t.removed,{element:e.cloneNode()}),e.textContent=n)}return en(b.afterSanitizeElements,e,null),on(e,n)},cn=function(e,t,r){if(S[t]||Wt(t,e)||Je&&(t===`id`||t===`name`)&&(r in n||r in St))return!1;let i=Me[t]||Ie.attributeCheck instanceof Function&&Ie.attributeCheck(t,e);return Le&&aU(Te,t)||C&&aU(Ee,t)?!0:i?it[t]||aU(Ae,XH(r,Oe,``))||(t===`src`||t===`xlink:href`||t===`href`)&&e!==`script`&&ZH(r,`data:`)===0&&nt[e]||w&&!aU(De,XH(r,Oe,``))?!0:!r:un(e)&&nn(Pe.tagNameCheck,e)&&nn(Pe.attributeNameCheck,t,e)||t===`is`&&Pe.allowCustomizedBuiltInElements&&nn(Pe.tagNameCheck,r)},ln=lU({},[`annotation-xml`,`color-profile`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`missing-glyph`]),un=function(e){return!ln[qH(e)]&&aU(ke,e)},dn=function(e,t,n,r){if(le&&typeof u==`object`&&typeof u.getAttributeType==`function`&&!n)switch(u.getAttributeType(e,t)){case`TrustedHTML`:return he(r);case`TrustedScriptURL`:return ge(r)}return r},fn=function(e,t,n,r){try{return n?e.setAttributeNS(n,t,r):e.setAttribute(t,r),!Zt(e)||(jt(e),!1)}catch{return Pt(t,e),!1}},pn=function(e,t){return ze&&aU(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,t)?!0:qH(e)===`attributename`&&YH(t,`href`)!==null},mn=function(e,n){if(en(b.beforeSanitizeAttributes,e,null),on(e,n))return;let r=e.attributes;if(!r||Zt(e))return;Me=an(b.uponSanitizeAttribute,Me,Ne,Ue);let i={attrName:``,attrValue:``,keepAttr:!0,allowedAttributes:Me,forceKeepAttr:void 0},a=r.length,o=bt(e.nodeName);for(;a--;){let n=r[a],s=n.name,c=n.namespaceURI,l=n.value,u=bt(s),d=l,f=s===`value`?d:QH(d),p=!1;i.attrName=u,i.attrValue=f,i.keepAttr=!0,i.forceKeepAttr=void 0,en(b.uponSanitizeAttribute,e,i),f=i.attrValue,Ye&&(u===`id`||u===`name`)&&ZH(f,E)!==0&&(Pt(s,e,n),f=E+f,p=!0),pn(s,f)?Pt(s,e,n):i.forceKeepAttr||(i.keepAttr?!T&&aU(BU,f)?Pt(s,e,n):(Re&&(f=Jt(f)),cn(o,u,f)?(f=dn(o,u,c,f),f!==d&&fn(e,s,c,f)&&p&&zH(t.removed)):Pt(s,e,n)):Pt(s,e,n))}en(b.afterSanitizeAttributes,e,null),on(e,n)},hn=function(e){let t=null,n=qt(e);for(en(b.beforeSanitizeShadowDOM,e,null);t=n.nextNode();)if(en(b.uponSanitizeShadowNode,t,null),sn(t,e),mn(t,e),Qt(t.content)&&hn(t.content),ae(t)===VU.element){let e=ee(t);Qt(e)&&(gn(e),hn(e))}Re&&Xt(e),en(b.afterSanitizeShadowDOM,e,null)},gn=function(e){let t=[{node:e,shadow:null}];for(;t.length>0;){let e=t.pop();if(e.shadow){hn(e.shadow);continue}let n=e.node,r=ae(n)===VU.element,i=g(n);if(i)for(let e=i.length-1;e>=0;--e)t.push({node:i[e],shadow:null});if(r){let e=re?re(n):null;if(typeof e==`string`&&bt(e)===`template`){let e=n.content;Qt(e)&&t.push({node:e,shadow:null})}}if(r){let e=ee(n);Qt(e)&&t.push({node:null,shadow:e},{node:e,shadow:null})}}};return t.sanitize=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=null,a=null,o=null,s=null;if(ut=!e,ut&&(e=`<!-->`),typeof e!=`string`&&!$t(e)&&(e=fU(e),typeof e!=`string`))throw oU(`dirty is not a string, aborting`);if(!t.isSupported)return e;Ve?(x=He,Me=Ue):wt(n),(b.uponSanitizeElement.length>0||b.uponSanitizeAttribute.length>0)&&(x=dU(x)),b.uponSanitizeAttribute.length>0&&(Me=dU(Me)),t.removed=[];let c=Ze&&typeof e!=`string`&&$t(e),l=[],u=Qe;if(c){Gt(e);let t=oe(e);if(typeof t==`string`){let n=bt(t);if(!x[n]||Fe[n])throw Nt(e),oU(`root node is forbidden and cannot be sanitized in-place`)}if(Zt(e))throw Nt(e),oU(`root node is clobbered and cannot be sanitized in-place`);l=Rt(e),Qe=WH()}else if($t(e))i=Kt(`<!---->`),a=i.ownerDocument.importNode(e,!0),a.nodeType===VU.element&&a.nodeName===`BODY`||a.nodeName===`HTML`?i=a:i.appendChild(a),gn(i);else{if(!Ge&&!Re&&!Be&&e.indexOf(`<`)===-1)return le&&qe?he(e):e;if(i=Kt(e),!i)return Ge?null:qe?ue:``}i&&We&&jt(i.firstChild);let d=c?e:i;try{c&&gn(e);let t=qt(d);for(;o=t.nextNode();)sn(o,d),mn(o,d),Qt(o.content)&&hn(o.content);c&&Vt(e,l)}catch(t){throw c&&(Nt(e),Bt(e,l)),t}finally{Qe=u}if(c){if(Bt(e,l))throw oU(`a node selected for removal could not be safely returned; refusing to sanitize in place`);return Re&&Yt(e),e}if(Ge){if(Re&&Yt(i),Ke)for(s=be.call(i.ownerDocument);i.firstChild;)s.appendChild(i.firstChild);else s=i;return(Me.shadowroot||Me.shadowrootmode)&&(s=xe.call(r,s,!0)),s}let f=Be?i.outerHTML:i.innerHTML;return Be&&x[`!doctype`]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&aU(FU,i.ownerDocument.doctype.name)&&(f=`<!DOCTYPE `+i.ownerDocument.doctype.name+`>
`+f),Re&&(f=Jt(f)),le&&qe?he(f):f},t.setConfig=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};wt(e),Ve=!0,He=x,Ue=Me},t.clearConfig=function(){xt=null,Ve=!1,He=null,Ue=null,le=de,ue=``},t.isValidAttribute=function(e,t,n){xt||wt({});let r=bt(e),i=bt(t);return typeof n==`string`&&(pn(t,n)||!T&&aU(BU,n))?!1:cn(r,i,n)},t.addHook=function(e,t){typeof t==`function`&&rU(b,e)&&BH(b[e],t)},t.removeHook=function(e,t){if(rU(b,e)){if(t!==void 0){let n=RH(b[e],t);return n===-1?void 0:HH(b[e],n,1)[0]}return zH(b[e])}},t.removeHooks=function(e){rU(b,e)&&(b[e]=[])},t.removeAllHooks=function(){b=GU()},t}var YU=JU();function XU(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var ZU=XU();function QU(e){ZU=e}var $U={exec:()=>null};function eW(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function tW(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(rW.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var nW=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),rW={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,numericCharacterReferenceOrAmpersand:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:eW(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:eW(e=>RegExp(`^ {0,${e}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:eW(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:eW(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:eW(e=>RegExp(`^ {0,${e}}(?:</?(?:${vW})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`,`i`)),blockquoteBeginRegex:eW(e=>RegExp(`^ {0,${e}}>`))},iW=/^(?:[ \t]*(?:\n|$))+/,aW=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,oW=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,sW=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,cW=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,lW=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,uW=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,dW=tW(uW).replace(/bull/g,lW).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),fW=tW(uW).replace(/bull/g,lW).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),pW=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,mW=/^[^\n]+/,hW=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,gW=tW(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,hW).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),_W=tW(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,lW).getRegex(),vW=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,yW=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,bW=tW(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,yW).replace(`tag`,vW).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),xW=e=>tW(pW).replace(`hr`,sW).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,e).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,vW).getRegex(),SW=xW(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),CW=xW(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),wW={blockquote:tW(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,CW).getRegex(),code:aW,def:gW,fences:oW,heading:cW,hr:sW,html:bW,lheading:dW,list:_W,newline:iW,paragraph:SW,table:$U,text:mW},TW=tW(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,sW).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,vW).getRegex(),EW={...wW,lheading:fW,table:TW,paragraph:tW(pW).replace(`hr`,sW).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,TW).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,vW).getRegex()},DW={...wW,html:tW(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,yW).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:$U,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:tW(pW).replace(`hr`,sW).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,dW).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},OW=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,kW=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,AW=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,jW=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,MW=/[\p{P}\p{S}]/u,NW=/[\s\p{P}\p{S}]/u,PW=/[^\s\p{P}\p{S}]/u,FW=tW(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,NW).getRegex(),IW=/[\p{Pi}\p{Ps}"']/u,LW=/(?!~)[\p{P}\p{S}]/u,RW=/(?!~)[\s\p{P}\p{S}]/u,zW=/(?:[^\s\p{P}\p{S}]|~)/u,BW=tW(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,nW?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),VW=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,HW=tW(VW,`u`).replace(/punct/g,MW).getRegex(),UW=tW(VW,`u`).replace(/punct/g,LW).getRegex(),WW=tW(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,IW).replace(/punct/g,MW).getRegex(),GW=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,KW=tW(GW,`gu`).replace(/notPunctSpace/g,PW).replace(/punctSpace/g,NW).replace(/punct/g,MW).getRegex(),qW=tW(GW,`gu`).replace(/notPunctSpace/g,zW).replace(/punctSpace/g,RW).replace(/punct/g,LW).getRegex(),JW=tW(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,PW).replace(/punctSpace/g,NW).replace(/punct/g,MW).getRegex(),YW=tW(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,PW).replace(/punctSpace/g,NW).replace(/punct/g,MW).getRegex(),XW=tW(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,PW).replace(/punctSpace/g,NW).replace(/punct/g,MW).getRegex(),ZW=tW(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,MW).getRegex(),QW=tW(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,PW).replace(/punctSpace/g,NW).replace(/punct/g,MW).getRegex(),$W=tW(/\\(punct)/,`gu`).replace(/punct/g,MW).getRegex(),eG=tW(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/,`gu`).replace(/punct/g,MW).getRegex(),tG=tW(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),nG=tW(yW).replace(`(?:-->|$)`,`-->`).getRegex(),rG=tW(`^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,nG).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),iG=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,aG=tW(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace(`brackets`,iG).getRegex(),oG=tW(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace(`label`,aG).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),sG=tW(/^!?\[(label)\]\[(ref)\]/).replace(`label`,aG).replace(`ref`,hW).getRegex(),cG=tW(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,hW).getRegex(),lG=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,uG=tW(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace(`brackets`,iG).getRegex(),dG=tW(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,tW(/^!?\[(label)\]\[(ref)\]/).replace(`label`,uG).replace(`ref`,lG).getRegex()).replace(`nolink`,tW(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,lG).getRegex()).getRegex(),fG=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,pG=tW(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),mG={_backpedal:$U,anyPunctuation:$W,anyPunctuationOutsideCode:eG,autolink:tG,blockSkip:BW,br:AW,code:kW,del:$U,delLDelim:$U,delRDelim:$U,emStrongLDelim:HW,emStrongRDelimAst:KW,emStrongRDelimUnd:YW,escape:OW,link:oG,nolink:cG,punctuation:FW,reflink:sG,reflinkSearch:dG,tag:rG,text:jW,url:$U},hG={...mG,emStrongLDelim:WW,emStrongRDelimAst:JW,emStrongRDelimUnd:XW,link:tW(/^!?\[(label)\]\((.*?)\)/).replace(`label`,aG).getRegex(),reflink:tW(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,aG).getRegex()},gG={...mG,emStrongRDelimAst:qW,emStrongLDelim:UW,delLDelim:ZW,delRDelim:QW,url:tW(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`emailProtocol`,pG).replace(`protocol`,fG).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:tW(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace(`protocol`,fG).replace(/emailProtocol/g,/(?:mailto|xmpp):/).getRegex()},_G={...gG,br:tW(AW).replace(`{2,}`,`*`).getRegex(),text:tW(gG.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},vG={normal:wW,gfm:EW,pedantic:DW},yG={normal:mG,gfm:gG,breaks:_G,pedantic:hG},bG={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},xG=e=>bG[e];function SG(e,t){if(t){if(rW.escapeTest.test(e))return e.replace(rW.escapeReplace,xG)}else if(rW.escapeTestNoEncode.test(e))return e.replace(rW.escapeReplaceNoEncode,xG);return e}function CG(e){return rW.numericCharacterReference.test(e)?e.replace(rW.numericCharacterReferenceOrAmpersand,(e,t,n)=>{if(t===void 0&&n===void 0)return`&amp;`;let r=t===void 0?Number.parseInt(n,16):Number.parseInt(t,10);return r===0||r>1114111||r>=55296&&r<=57343?`�`:r===38?`&amp;`:String.fromCodePoint(r)}):e}function wG(e){try{e=encodeURI(e).replace(rW.percentDecode,`%`)}catch{return null}return e}function TG(e,t){let n=e.replace(rW.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(rW.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t){if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``)}for(;r<n.length;r++)n[r]=n[r].trim().replace(rW.slashPipe,`|`);return n}function EG(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function DG(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&rW.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function OG(e){return e.trim().toLowerCase().toUpperCase().toLowerCase()}function kG(e,t){if(e.indexOf(t[0])===-1&&e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function AG(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function jG(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`),c=e[0].charAt(0)===`!`,l=r.state.inLink,u=r.state.linkEmitted,d=r.state.inRawBlock;r.state.inLink=!0,r.state.linkEmitted=!1;let f=r.inlineTokens(s),p=r.state.linkEmitted;if(r.state.linkEmitted=u,r.state.inLink=l,!c){if(p){r.state.inRawBlock=d;return}r.state.linkEmitted=!0}return{type:c?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:f}}function MG(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return e.slice(Math.min(r.length,i.length))}).join(`
`)}function NG(e,t,n,r){if(!t.includes(`<`))return!1;for(let i=0;i<t.length;i++){if(t[i]===`\\`){i++;continue}if(t[i]==="`"){let e=r.inline.code.exec(t.slice(i));if(e){i+=e[0].length-1;continue}}if(t[i]!==`<`)continue;let a=e.slice(n+i),o=r.inline.tag.exec(a)||r.inline.autolink.exec(a);if(o){if(o[0].length>t.length-i)return!0;i+=o[0].length-1}}return!1}var PG=class{options;rules;lexer;constructor(e){this.options=e||ZU}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:DG(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=MG(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=EG(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceTabChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:EG(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:EG(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=EG(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o=0;for(;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`||u?.type===`heading`||u?.type===`hr`||u?.type===`html`)break;if(u?.type===`blockquote`){let t=u,a=e.join(`
`),o=t.raw+`
`+a.replace(this.rules.other.blockquoteSetextReplace2,``),s=this.blockquote(o);i[i.length-1]=s;let c=o.substring(s.raw.length).replace(/^\n/,``),l=c?c.split(`
`).length:0,d=l?e.slice(0,-l):e;d.length>0&&(n=`${n}
${d.join(`
`)}`),r=r.substring(0,r.length-t.text.length)+s.text;break}if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`)}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=e,r=()=>n.length-e.length,i=t[1].trim(),a=i.length>1,o={type:`list`,raw:``,ordered:a,start:a?+i.slice(0,-1):``,loose:!1,items:[]};i=a?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=a?i:`[*+-]`);let s=this.rules.other.listItemRegex(i),c=!1;for(;e;){let i=!1,a=``;if(!(t=s.exec(e))||this.rules.block.hr.test(e))break;let l=r();e=e.substring(t[0].length);let u=t[2].split(`
`,1)[0],d=t[1].length,f=this.options.pedantic?AG(u,d):u.replace(this.rules.other.leadingSpaceTab,e=>AG(e,d)),p=e.split(`
`,1)[0],m=!f.trim(),h=0;if(this.options.pedantic?(h=2,a=f.trimStart()):m?h=d+1:(h=f.search(this.rules.other.nonSpaceChar),h=h>4?1:h,a=f.slice(h),h+=d),m&&this.rules.other.blankLine.test(p)&&(e=e.substring(p.length+1),i=!0),!i){let t=this.rules.other.nextBulletRegex(h),n=this.rules.other.hrRegex(h),r=this.rules.other.fencesBeginRegex(h),i=this.rules.other.headingBeginRegex(h),o=this.rules.other.htmlBeginRegex(h),s=this.rules.other.blockquoteBeginRegex(h);for(;e;){let c=e.split(`
`,1)[0],l;if(p=c,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,`  `),l=p):l=p.replace(this.rules.other.leadingSpaceTab,e=>AG(e)),r.test(p)||i.test(p)||o.test(p)||s.test(p)||t.test(p)||n.test(p))break;if(l.search(this.rules.other.nonSpaceChar)>=h||!p.trim())a+=`
`+l.slice(h);else{if(m||f.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||r.test(f)||i.test(f)||n.test(f))break;a+=`
`+p}m=!p.trim(),e=e.substring(c.length+1),f=l.slice(h)}}let g=n.slice(l,r());o.loose||(c?o.loose=!0:this.rules.other.doubleBlankLine.test(g)&&(c=!0)),o.items.push({type:`list_item`,raw:g,task:!!this.options.gfm&&this.rules.other.listIsTask.test(a),loose:!1,text:a,tokens:[]})}let l=o.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;o.raw=n.slice(0,r()).trimEnd();for(let e of o.items)if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),!o.loose){let t=e.tokens.filter(e=>e.type===`space`);o.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}for(let e of o.items){let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,o.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1}if(o.loose)for(let e of o.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return o}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=DG(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){if(!this.rules.other.startAngleBracket.test(t[2])&&kG(t[2],`()`)!==-1)return;let e=OG(t[1]).replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:EG(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=TG(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:EG(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(TG(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:EG(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){if(this.lexer.state.linkParenPossible===!1)return;let t=this.rules.inline.link.exec(e);if(t){let n=t[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&NG(e,t[1],n,this.rules))return;let r=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let e=EG(r.slice(0,-1),`\\`);if((r.length-e.length)%2==0)return}else{let e=kG(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let i=t[2],a=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(i);e&&(i=e[1],a=e[3])}else a=t[3]?t[3].slice(1,-1):``;return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(i=this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?i.slice(1):i.slice(1,-1)),jG(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,`$1`),title:a&&a.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let r=n[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&NG(e,n[1],r,this.rules))return;let i=t[OG((n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `))];if(!i){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return jG(n,i,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let i=[...r[0]].length-1,a,o,s=i,c=0,l=r[0][0],u=n===l,d=l===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+i);(r=d.exec(t))!==null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(o=[...a].length,r[3]||r[4]){s+=o;continue}if(r[5]||r[6]){if(i%3&&!((i+o)%3)){c+=o;continue}if(u)break}if(s-=o,s>0)continue;o=Math.min(o,o+s+c);let t=[...r[0]][0].length,n=e.slice(0,i+r.index+t+o);if(Math.min(i,o)%2){let e=n.slice(1,-1);return{type:`em`,raw:n,text:e,tokens:this.lexer.inlineTokens(e)}}let l=n.slice(2,-2);return{type:`strong`,raw:n,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:e?t[0]:CG(t[0]),escaped:e}}}},FG=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||ZU,this.options.tokenizer=this.options.tokenizer||new PG,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let t={other:rW,block:vG.normal,inline:yG.normal};this.options.pedantic?(t.block=vG.pedantic,t.inline=yG.pedantic):this.options.gfm&&(t.block=vG.gfm,t.inline=this.options.breaks?yG.breaks:yG.gfm),this.tokenizer.rules=t}static get rules(){return{block:vG,inline:yG}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(rW.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(rW.tabCharGlobal,`    `).replace(rW.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if((i=this.tokenizer.fences(e))||(i=this.tokenizer.heading(e))||(i=this.tokenizer.hr(e))||(i=this.tokenizer.blockquote(e))||(i=this.tokenizer.list(e))||(i=this.tokenizer.html(e))){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if((i=this.tokenizer.table(e))||(i=this.tokenizer.lheading(e))){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length)}else if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i)}else if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}linkInText(e){if(!e.includes(`[`))return!1;let t=this.tokenizer.rules.inline.link;for(let n of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(t.test(n[0])&&e.charAt(n.index-1)!==`!`)return!0;for(let t of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let e=t[0],n=e.lastIndexOf(`[`);if(e.charAt(0)!==`!`&&Object.hasOwn(this.tokens.links,OG(e.slice(n+1,-1)))&&!(n>1&&this.linkInText(e.slice(1,n-1))))return!0}return!1}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=this.state.linkParenPossible;this.state.linkParenPossible=n&&e.includes(`)`);try{return this.#e(e,t)}finally{this.state.linkParenPossible=n}}#e(e,t){let n=e;if(this.tokens.links&&e.includes(`[`)){let e=this.tokenizer.rules.inline.reflinkSearch,t=n=>{let r=n.lastIndexOf(`[`);if(!Object.hasOwn(this.tokens.links,OG(n.slice(r+1,-1))))return n;if(r>1&&n.charAt(0)!==`!`){let i=n.slice(1,r-1);if(this.linkInText(i))return`[`+i.replace(e,t)+`][`+`a`.repeat(n.length-r-2)+`]`}return`[`+`a`.repeat(n.length-2)+`]`};n=n.replace(e,t)}n=n.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode,(e,t,n)=>n?`+`.repeat(e.length):t?t+e.slice(t.length,-t.length).replace(/`/g,`+`)+t:e),n=n.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if((o=this.tokenizer.escape(e))||(o=this.tokenizer.tag(e))||(o=this.tokenizer.link(e))){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if((o=this.tokenizer.emStrong(e,n,i))||(o=this.tokenizer.codespan(e))||(o=this.tokenizer.br(e))||(o=this.tokenizer.del(e,n,i))||(o=this.tokenizer.autolink(e))||!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o)}else if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},IG=class{options;parser;constructor(e){this.options=e||ZU}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(rW.notSpaceStart)?.[0],i=e?e.replace(rW.endingNewline,``)+`
`:``;return r?`<pre><code class="language-`+SG(r)+`">`+(n?i:SG(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:SG(i,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${SG(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,text:n,tokens:r,autolink:i}){let a=i?SG(n,!0):this.parser.parseInline(r),o=wG(e);if(o===null)return a;e=SG(o,i);let s=`<a href="`+e+`"`;return t&&(s+=` title="`+SG(t)+`"`),s+=`>`+a+`</a>`,s}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=wG(e);if(i===null)return SG(n);e=i;let a=`<img src="${SG(e)}" alt="${SG(n)}"`;return t&&(a+=` title="${SG(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:SG(e.text)}},LG=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},RG=class e{options;renderer;textRenderer;constructor(e){this.options=e||ZU,this.options.renderer=this.options.renderer||new IG,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new LG}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},zG=class{options;block;constructor(e){this.options=e||ZU}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?FG.lex:FG.lexInline}provideParser(e=this.block){return e?RG.parse:RG.parseInline}};function BG(e,t){if(Array.isArray(t))for(let n=0;n<t.length;n++)e.push(t[n]);else e.push(t)}var VG=new class{defaults=XU();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=RG;Renderer=IG;TextRenderer=LG;Lexer=FG;Tokenizer=PG;Hooks=zG;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(BG(n,t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)BG(n,this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)BG(n,this.walkTokens(e.tokens,t));break}case`list`:{let e=r;BG(n,this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);BG(n,this.walkTokens(i,t))}):e.tokens&&BG(n,this.walkTokens(e.tokens,t))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new IG(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new PG(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new zG;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];t[r]=zG.passThroughHooks.has(n)?e=>{if(this.defaults.async&&zG.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&BG(n,t.call(this,e)),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return FG.lex(e,t??this.defaults)}parser(e,t){return RG.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?FG.lex:FG.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?RG.parse:RG.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?FG.lex:FG.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?RG.parse:RG.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+SG(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function HG(e,t){return VG.parse(e,t)}HG.options=HG.setOptions=function(e){return VG.setOptions(e),HG.defaults=VG.defaults,QU(HG.defaults),HG},HG.getDefaults=XU,HG.defaults=ZU;function UG(...e){return VG.use(...e),HG.defaults=VG.defaults,QU(HG.defaults),HG}HG.use=UG,HG.walkTokens=function(e,t){return VG.walkTokens(e,t)},HG.parseInline=VG.parseInline,HG.Parser=RG,HG.parser=RG.parse,HG.Renderer=IG,HG.TextRenderer=LG,HG.Lexer=FG,HG.lexer=FG.lex,HG.Tokenizer=PG,HG.Hooks=zG,HG.parse=HG,HG.options,HG.setOptions,HG.walkTokens,HG.parseInline,RG.parse,FG.lex;var WG=`structured-rendering-markdown-rendering-content-for-screenshot`,GG={accentColor:q[`vira-form-accent-primary-color`].value,bodySize:`14px`,h1Size:`22px`,h2Size:`18px`,h3Size:`16px`,h4Size:`15px`,h5Size:`14px`,h6Size:`14px`,bodyGap:`24px`,smallTextSize:`10px`,liSpacing:`4px`,bodyFont:`sans-serif`,codeFont:`monospace`,codeSize:`1em`,codeBackgroundColor:K.colors[`vira-grey-behind-fg-highest-contrast`].background.value,contentSelector:`.${WG}`,tableBorderColor:K.colors[`vira-grey-foreground-decoration`].foreground.value,tableBorderWidth:`1px`,tableHeaderBackgroundColor:K.colors[`vira-grey-behind-fg-highest-contrast`].background.value};function KG(e){return zl(Cl(GG,e),(e,t)=>A.isString(t)?j(t):t instanceof Fu?t:t.value)}var qG=JG();function JG(e){let t=KG(e);return V`
        ${j(e?.contentSelector||GG.contentSelector)} {
            display: flex;
            flex-direction: column;
            gap: ${t.bodyGap};
            font-family: ${t.bodyFont};
            font-size: ${t.bodySize};
            align-items: flex-start;

            & * {
                font-family: inherit;
                font-size: inherit;
                ${ER}
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

            /* Section title sitting directly on top of a collapsible section. */
            & h2:has(+ details) {
                padding: 12px 16px;
                background-color: color-mix(in srgb, currentColor 5%, transparent);
                border-block-end: 1px solid color-mix(in srgb, currentColor 18%, transparent);
                align-self: stretch;
            }

            & details {
                align-self: stretch;

                & > summary {
                    padding: 12px 16px;
                    border: 1px solid color-mix(in srgb, currentColor 15%, transparent);
                    border-radius: 6px;
                    background-color: color-mix(in srgb, currentColor 4%, transparent);
                    cursor: pointer;
                    list-style-position: inside;

                    &:hover {
                        background-color: color-mix(in srgb, currentColor 7%, transparent);
                    }

                    &:focus-visible {
                        outline: 2px solid currentColor;
                        outline-offset: 3px;
                    }
                }

                /*
                    Children of details elements are nested below the top level flex gap, so they
                    need their own spacing.
                */
                & > :not(summary, style, hr) {
                    margin-block-start: 12px;
                }

                & > h3 {
                    margin-block-start: 24px;
                    padding-inline-start: 12px;
                    border-inline-start: 3px solid color-mix(in srgb, currentColor 24%, transparent);
                }

                & > h4 {
                    margin-block-start: 20px;
                }
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
    `}async function YG(e){let t=YU.sanitize(await HG.parse(e),{RETURN_DOM:!0});if(!A.instanceOf(t,HTMLElement))throw Error(`Failed to sanitize Markdown HTML.`);let n=[...t.querySelectorAll(`[id]`)].map(e=>e.id),r=[...t.querySelectorAll(`h1, h2, h3, h4, h5, h6`)];return r.forEach((e,t)=>{if(e.id)return;let i=(e.textContent||``).trim().toLowerCase().replace(/\s+/gu,`-`).replace(/[^\p{L}\p{N}_-]/gu,``),a=[...n,...r.slice(0,t).map(e=>e.id)];e.id=[i,...nl(a.length,e=>`${i}-${e+1}`)].find(e=>!a.includes(e))||i}),t.innerHTML}function XG({event:e,renderedElement:t}){let n=e.composedPath().find(e=>A.instanceOf(e,HTMLAnchorElement))?.getAttribute(`href`),r=n?.startsWith(`#`)&&n.length>1?t?.querySelector(`#${CSS.escape(n.slice(1))}`):void 0;r&&(e.preventDefault(),t?.querySelectorAll(`details`).forEach(e=>{e.contains(r)&&(e.open=!0)}),t&&ZG({target:r,container:t}))}function ZG({target:e,container:t}){let n={},r=new ResizeObserver(()=>{e.scrollIntoView({behavior:`smooth`,block:`start`}),clearTimeout(n.id),n.id=setTimeout(()=>{r.disconnect()},100)});r.observe(t)}var QG=BF()({tagName:`vir-markdown`,styles:V`
        :host {
            display: flex;
            flex-direction: column;
        }
    `,state(){return{renderedElement:void 0,uploadedMarkdownString:void 0,sanitizedHtml:UF({async updateCallback(e){return YG(e)}}),lastStyleString:``}},render({inputs:e,state:t,updateState:n,host:r}){let i=e.allowDevDebug&&t.uploadedMarkdownString!=null?t.uploadedMarkdownString:e.markdownString;t.sanitizedHtml.update(i);let a=String(e.renderStyles||qG);return gH({maintainFirstStylesheet:!0,newStyles:a,oldStyles:t.lastStyleString,shadowRoot:r.shadowRoot})&&n({lastStyleString:a}),U`
            ${e.allowDevDebug?U`
                      <input
                          accept=".md,.markdown,text/markdown"
                          aria-label="Upload Markdown file"
                          type="file"
                          ${H(`change`,async e=>{let t=SL(e,HTMLInputElement).files?.item(0);t!=null&&n({uploadedMarkdownString:await t.text()})})}
                      />
                  `:void 0}
            ${sI(t.sanitizedHtml,U`
                    <${Y.assign({icon:yB})}></${Y}>
                `,e=>U`
                        <div
                            class=${WG}
                            ${H(`click`,e=>{XG({event:e,renderedElement:t.renderedElement})})}
                            ${tI(e=>{e instanceof HTMLElement&&n({renderedElement:e})})}
                        >
                            ${JP(e)}
                        </div>
                    `,e=>U`
                        <${IB}>
                            ${Ie(`Failed to parse markdown content.`,e)}
                        </${IB}>
                    `)}
        `}}),$G={icons:{},sourceString:`Source`,pluralSourcesString:`Sources`,hideSources:!1};({...$G});var eK={...$G,processingString:`Processing`,currentlyExpanded:{},tableSortStates:{},sourceIcon:DB,viewOnPageIcon:oz,processingIcon:yB,expandSourcesOnPrint:!1,hideViewOnPageButtons:!1,isPhoneSize:!1,useDrawerForSources:!1,markdownStyles:qG,devDebug:!1,createViewOnPageString(e){return`View on page ${e}`},expandAllCards:!1,blockCardExpansion:!1,expandFirstCard:!1,useCardStyles:!1,hideCardTitles:!1},tK=jN({x1:-1,y1:-1,x2:-1,y2:-1}),nK=jN({type:zN(`source`),pageNumbers:B([B(-1)]),fileName:B(``),fileBoundingBoxes:B([B(tK)]),quote:B(``)});function rK(e){return Uc.isLengthAtLeast(rl(e).filter(iK),1)}function iK(e){return!!(e&&(e.quote?.trim()||e.fileName||e.pageNumbers?.filter(A.isDefined).length))}var aK=BF()({tagName:`vir-source`,hostClasses:{"vir-source-phone-size"({inputs:e}){return!!e.options?.isPhoneSize}},events:{viewOnPageClick:OF()},cssVars:{"vir-source-background-color":K.colors[iL].background.value,"vir-source-borer-radius":q[`vira-form-radius`].value,"vir-source-header-color":K.colors[`vira-grey-foreground-header`].foreground.value,"vir-source-font-size":`14px`,"vir-source-phone-font-size":`14px`},styles({hostClasses:e,cssVars:t}){return V`
            ${gB} {
                background: ${t[`vir-source-background-color`].value};
                border-radius: ${t[`vir-source-borer-radius`].value};
                padding: 24px;
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            p {
                ${ER}
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
                font-size: ${t[`vir-source-font-size`].value};

                & .entry {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 2px;

                    & .source-text {
                        margin: 0;
                        line-height: 1.5em;
                    }
                }
            }

            ${Y} {
                width: 20px;
                height: 20px;
            }

            ${e[`vir-source-phone-size`].selector} {
                padding: 4px;
                font-size: ${t[`vir-source-phone-font-size`].value};

                gap: 4px;

                & ${Y} {
                    width: 18px;
                    height: 18px;
                }
            }
        `},render({inputs:e,dispatch:t,events:n}){let r=rK(e.sources);if(!r)return M;let i=Cl(eK,e.options);return U`
            <${gB}>
                <p class="header">
                    <${Y.assign({icon:i.sourceIcon,fitContainer:!0})}></${Y}>
                    <span>${i.pluralSourcesString}</span>
                </p>
                <div class="entries">
                    ${r.map(e=>{let r=!i.hideViewOnPageButtons&&e.fileName&&e.pageNumbers?.length?U`
                                      <${mB.assign({text:i.createViewOnPageString(e.pageNumbers[0]??1),icon:i.viewOnPageIcon,buttonEmphasis:Cz.Subtle,buttonSize:xz.Small,color:J.Brand})}
                                          title=${e.fileName}
                                          ${H(`click`,()=>{t(new n.viewOnPageClick({detail:e}))})}
                                      ></${mB}>
                                  `:void 0,a=e.quote?.trim()||``,o=a?U`
                                  <p class="source-text">"${a}"</p>
                              `:e.fileName?U`
                                    <p class="source-text">${e.fileName}</p>
                                `:void 0;return o||r?U`
                                <div class="entry">${o} ${r}</div>
                            `:M})}
                </div>
            </${gB}>
        `}});function oK(e){return jN({type:zN(`icon`),iconKey:e?RN(zl(e,e=>e)):``,strokeColor:B(``),fillColor:B(``),strokeWidth:B(UN(``,-1))})}var sK=oK();function cK(e,{icons:t}){let n=t[e.iconKey];if(n)return xB(n,{"vira-icon-fill-color":e.fillColor||void 0,"vira-icon-stroke-color":e.strokeColor||void 0,"vira-icon-stroke-width":A.isString(e.strokeWidth)?e.strokeWidth:A.isNumber(e.strokeWidth)?Tl({value:e.strokeWidth,suffix:`px`}):void 0})}function lK(e){return t=>jN({type:zN(e),sectionTitle:B(``),sources:B([B(nK)]),...t})}var uK=jN({type:zN(`empty`)}),dK=lK(`inlineCode`)({code:``}),fK=lK(`tag`)({text:GN(``),useBigTag:B(!1),color:B(UN({custom:WN({backgroundColor:B(``),foregroundColor:B(``)})},{variant:RN(J)}))}),pK=function(e){return e.Faint=`faint`,e.Small=`small`,e.Bold=`bold`,e}({});function mK(e){return lK(`text`)({text:B(GN()),style:B(RN(pK)),icon:B(e)})}mK(sK);function hK(e){let t=UN(mK(e),fK,uK);return jN({content:B(UN(t,[B(t)])),icon:B(e),sources:B([B(nK)])})}hK(sK);function gK(e){return lK(`list`)({items:[hK(e)]})}gK(sK);var _K=lK(`markdown`)({markdown:``}),vK=jN({type:zN(`processing`)}),yK=function(e){return e.Left=`left`,e.Right=`right`,e}({}),bK=function(e){return e.Horizontal=`horizontal`,e.Vertical=`vertical`,e}({});function xK(e){let t=mK(e),n=UN(t,dK,_K,fK,gK(e),uK,vK);return lK(`table`)({direction:RN(bK),style:B(RN(pK)),headers:[{key:``,text:B(t),hidden:B(!1),sortKey:B(``),disableSort:B(!1)}],entries:[{data:eP({keys:``,values:UN(B(n),[B(n)])}),sources:B([B(nK)])}],footerRows:B([{alignment:B(RN(yK)),cells:UN(B(n),[B(n)])}])})}xK(sK);function SK({direction:e,headers:t,entries:n,footerRows:r}){return{type:`table`,direction:e,headers:t,entries:n,footerRows:r}}var CK=lK(`codeBlock`)({syntax:B(``),code:``});function wK(e){return lK(`collapsible`)({header:GN(),content:[UN(_K,CK,uK,e,dK,gK(e),vK,xK(e),fK,mK(e))]})}wK(sK);var TK=lK(`copyCard`)({text:``,header:B(GN()),disableCopy:B(!1)});function EK(e){return lK(`title`)({text:B(GN()),icon:B(e)})}EK(sK);function DK(e){return[wK(e),_K,CK,TK,uK,EK(e),e,dK,gK(e),vK,nK,xK(e),fK,mK(e)]}var OK=DK(sK);[...OK];var X=tl(OK,e=>({key:e.default.type,value:e.default.type}),{useRequired:!0}),kK=Ql()(`source-expansion`),AK=function(e){return e.Ascending=`ascending`,e.Descending=`descending`,e}({}),jK=Ql()(`table-sort`);function MK(e,t){return LK(e,Cl(eK,t),[])}function NK(e){if(e==null)return;if(!A.isString(e))return String(e);let t=e.trim();if(!t)return;let n=t.split(`
`);return n.flatMap((e,t)=>U`
            ${e}${t<n.length-1?U`
                      <br />
                  `:``}
        `)}function PK(e){return e?e.type===X.text?e.text==null?``:String(e.text):e.type===X.inlineCode?e.code:e.type===X.tag?e.text==null?``:String(e.text):``:``}function FK({section:e,currentSort:t}){if(!t||e.direction!==bK.Horizontal)return e.entries;let n=e.headers.find(e=>e.key===t.columnKey);if(n?.disableSort)return e.entries;let r=n?.sortKey||t.columnKey;return e.entries.toSorted((e,n)=>{let i=rl(e.data[r]).filter(A.isTruthy),a=rl(n.data[r]).filter(A.isTruthy),o=i.map(e=>PK(e)).join(` `),s=a.map(e=>PK(e)).join(` `),c=Number(o),l=Number(s),u=isNaN(c)||isNaN(l)?o.localeCompare(s):c-l;return t.direction===AK.Ascending?u:-u})}var IK={icon(e,t){let n=cK(e,t);return n?U`
            <${Y.assign({icon:n})}></${Y}>
        `:M},codeBlock(e){return U`
            <pre>${e.code}</pre>
        `},copyCard(e){let t=e.text==null?``:String(e.text),n=e.header==null?``:String(e.header);return!t&&!n?void 0:U`
            <div class="copy-card-wrapper">
                <div class="copy-card-top">${n?U`
                  <h3 class="copy-card-header">${n}</h3>
              `:M}${e.disableCopy?M:U`
                  <${_H.assign({text:t})}></${_H}>
              `}</div>
                <div class="copy-card-body">${NK(t)}</div>
            </div>
        `},collapsible(e,t,n){return U`
            <${MB.assign({rawCollapsible:!0})}>
                <span slot=${MB.slotNames[`vira-collapsible-card-header`]}>
                    ${String(e.header)}
                </span>
                ${LK(e.content,t,[...n,`collapsible`])}
            </${MB}>
        `},empty(){},inlineCode(e){return U`
            <code>${e.code}</code>
        `},list(e,t,n){let r=el(e.items,(e,r)=>{if(!e.icon&&!e.content)return;let i=[...n,r],a=rl(e.content).filter(A.isTruthy),o=a.map((e,n)=>LK(e,t,[...i,`content`,n])),s=o.length?a.length>1?U`
                              <div class="list-item-content-column">${o}</div>
                          `:o:void 0,c=U`
                    ${e.icon?LK(e.icon,t,[...i,`icon`]):M}${s}
                `;return U`
                    <li
                        class=${WP({"list-item-with-icon":!!e.icon})}
                    >
                        ${KK({content:c,options:t,rawKeyChain:i,rawSources:e.sources})}
                    </li>
                `},A.isTruthy);if(r.length)return U`
            <ul>
                ${r}
            </ul>
        `},markdown(e,t){return U`
            <${QG.assign({allowDevDebug:t.devDebug,markdownString:e.markdown,renderStyles:t.markdownStyles})}></${QG}>
        `},tag(e){let t=e.color&&`custom`in e.color&&(e.color.custom.backgroundColor||e.color.custom.foregroundColor)?V`
                      ${e.color.custom.backgroundColor?V`
                                ${TV.cssVars[`vira-tag-background-color`].name}: ${j(e.color.custom.backgroundColor)};
                            `:V``}
                      ${e.color.custom.foregroundColor?V`
                                ${TV.cssVars[`vira-tag-text-color`].name}: ${j(e.color.custom.foregroundColor)};
                            `:V``}
                  `:void 0,n=e.color&&`variant`in e.color?e.color.variant:void 0;return U`
            <${TV.assign({text:e.text,color:t?J.Custom:n,size:e.useBigTag?xz.Medium:xz.Small,emphasis:Cz.Subtle})}
                style=${GP(t)}
            ></${TV}>
        `},processing(e,t){return U`
            <${Y.assign({icon:t.processingIcon})}></${Y}>
            <span>${t.processingString}...</span>
        `},source(e,t){return t.hideSources?M:U`
            <${aK.assign({options:t,sources:e})}></${aK}>
        `},table(e,t,n){let r=e.style?`text-style-${e.style}`:void 0;if(t.isPhoneSize&&e.direction===bK.Horizontal){let i=el(e.headers,(e,r)=>{if(!e.hidden)return{key:e.key,headerIndex:r,renderedContent:e.text?LK(e.text,t,[...n,`headers`,r]):e.key}},A.isTruthy),a=e.entries.map((e,r)=>{let a=[...n,r],o=el(i,n=>{let r=e.data[n.key],i=rl(r).filter(A.isTruthy);if(!i.length)return;let o=Array.from(KP(el(i,(e,r)=>LK(e,t,[...a,n.key,r]),A.isTruthy),U`
                                    <br />
                                `));return U`
                            <tr>
                                <th>${n.renderedContent}</th>
                                <td>${o}</td>
                            </tr>
                        `},A.isTruthy),s=rK(e.sources);return U`
                    <${gB} class="phone-table-card">
                        <table class="vertical phone-card-table" cellspacing="0" cellpadding="0">
                            <tbody>${o}</tbody>
                        </table>
                        ${s?.length?KK({content:U``,options:t,rawKeyChain:a,rawSources:s}):M}
                    </${gB}>
                `});return U`
                <div
                    class=${[`phone-table-cards`,r].filter(A.isTruthy).join(` `)}
                >
                    ${a}
                </div>
            `}let i=n.join(`.`),a=t.tableSortStates[i],o=e.direction===bK.Horizontal,s=FK({section:e,currentSort:a}),c=e.direction===bK.Horizontal?Bz.Vertical:Bz.Horizontal,{headerRow:l,rows:u}=Vz({headers:el(e.headers,(e,r)=>{if(!e.hidden)return{key:e.key,content:e.text?LK(e.text,t,[...n,`headers`,r]):e.key}},A.isTruthy),originalData:s,dataMap(r,i){return zl(r.data,(r,a)=>{let o=rl(a).filter(A.isTruthy);if(o.length)return Array.from(KP(el(o,(a,o)=>{let s=`sources`in a?{sources:e.direction===bK.Vertical?void 0:a.sources}:{};return LK({...a,...s},t,[...n,i,r,o])},A.isTruthy),U`
                                <br />
                            `))})},options:{orientation:c}}),d=t.hideSources?[]:u.map(t=>{let n=t.cells.at(-1);return rK([...rl(e.direction===bK.Vertical&&n?rl(n.data?.data[n.key]).filter(A.isTruthy).flatMap(e=>`sources`in e?rl(e.sources):[]):void 0),...rl(t.data?.sources)])}),f=d.some(e=>!!e?.length),p=u[0]?.cells.length||0;return U`
            <table
                cellspacing="0"
                cellpadding="0"
                class=${WP({vertical:e.direction===bK.Vertical,horizontal:e.direction===bK.Horizontal,"wide-table":e.direction===bK.Horizontal&&l?l.length>5:e.direction===bK.Vertical&&(u[0]?.cells.length??0)>5,...r?{[r]:!0}:{}})}
            >
                ${l?U`
                          <thead>
                              <tr>
                                  ${l.map(t=>{let n=a?.columnKey===t.key?a.direction:void 0,r=o&&!e.headers.find(e=>e.key===t.key)?.disableSort,s=n===AK.Ascending?CB:n===AK.Descending?SB:wB,c=r?U`
                                                <span
                                                    class=${WP({"sort-icon":!0,"sort-icon-active":!!n})}
                                                >
                                                    <${Y.assign({icon:s})}></${Y}>
                                                </span>
                                            `:M;return U`
                                          <th
                                              class=${WP({sortable:r})}
                                              ${r?H(`click`,e=>{let r=n==null?AK.Ascending:n===AK.Ascending?AK.Descending:void 0;SL(e,HTMLElement).dispatchEvent(new jK({detail:{tableKey:i,sort:r?{columnKey:Ic.isString(t.key),direction:r}:void 0}}))}):M}
                                          >
                                              <span class="th-content">
                                                  ${t.content}${c}
                                              </span>
                                          </th>
                                      `})}
                                  ${f?U`
                                            <th class="source-cell"></th>
                                        `:M}
                              </tr>
                          </thead>
                      `:M}
                <tbody>
                    ${u.map((r,i)=>{let a=[...n,i],o=d[i],s=r.cells.map((n,i)=>{let s=i===r.cells.length-1,c=e.direction===bK.Vertical&&i===0?`th`:`td`,l=U`
                                <${c}>${n.content}</${c}>
                            `;return o?.length&&s?U`
                                    ${l}
                                    <td class="source-cell">
                                        ${WK({content:``,options:t,rawKeyChain:a,rawSources:o})}
                                    </td>
                                `:l}),c=o?.length?U`
                                  <tr class="source-row">
                                      <td colspan=${s.length}>
                                          ${GK({options:t,rawKeyChain:a,rawSources:o})}
                                      </td>
                                  </tr>
                              `:M;return U`
                            <tr>
                                ${s}
                                ${f?U`
                                          <td class="source-cell"></td>
                                      `:M}
                            </tr>
                            ${c}
                        `})}
                </tbody>
                ${e.footerRows?.length?U`
                          <tfoot>
                              ${e.footerRows.map((e,r)=>{let i=rl(e.cells);if(!i.length)return M;let a=e.alignment===yK.Right?p-i.length+1:0;return U`
                                      <tr>${i.map((e,i)=>{let o=i?0:a,s=o<1?void 0:o,c=e?LK(e,t,[...n,`footers`,r,i]):M;return U`
                                          <td
                                              colspan=${GP(s)}
                                              class=${WP({"right-aligned-footer-cell":!!s})}
                                          >
                                              ${c}
                                          </td>
                                      `})}</tr>
                                  `})}
                          </tfoot>
                      `:M}
            </table>
        `},title(e,t,n){let r=NK(e.text);if(r)return U`
            ${LK(e.icon,t,[...n,`icon`])}
            <h1 class="title-section-text-content">${r}</h1>
        `},text(e,t,n){let r=NK(e.text),i=e.style?`text-style-${e.style}`:void 0;if(r)return U`
            ${LK(e.icon,t,[...n,`icon`])}
            <span
                class=${[i,`text-section-text-content`].join(` `)}
            >
                ${r}
            </span>
        `}};function LK(e,t,n){return BK({data:e,options:t,keyChain:n,isTopSection:!1}).filter(A.isTruthy)}var RK=Sl(X,e=>[e,`section`].join(`-`)),zK=`structured-render-section`;function BK({data:e,options:t,keyChain:n,isTopSection:r}){if(!e)return[];if(A.isArray(e))return e.flatMap((e,i)=>BK({data:e,options:t,keyChain:[...n,i],isTopSection:r}));if(`type`in e){let i=`sectionTitle`in e&&n.length>0&&!(r&&n.at(-1)===0)&&e.sectionTitle||void 0,a=IK[e.type](e,t,n),o=`sources`in e&&e.sources||void 0,s=U`
            <div
                class=${WP({"section-wrapper":!0,"top-section-wrapper":r,[RK[e.type]]:!0})}
                ${fI(zK)}
                ${fI(RK[e.type])}
            >
                ${KK({content:a,options:t,rawKeyChain:n,rawSources:o})}
            </div>
        `;return[i?U`
                      <h3>${i}</h3>
                  `:void 0,s]}if(`sections`in e){let r=BK({data:e.sections,options:t,keyChain:[...n,`sections`],isTopSection:!0}),i=e.cardTitleIcon&&!t.hideCardTitles?LK(e.cardTitleIcon,t,[...n,`cardTitleIcon`]):M,a=t.hideCardTitles?M:U`
                  <h2
                      slot=${MB.slotNames[`vira-collapsible-card-header`]}
                      class="card-title ${WP({"card-title-with-icon":!!e.cardTitleIcon})}"
                  >
                      ${i}${e.cardTitle}
                  </h2>
              `;return[U`
                <${MB.assign({expandOnPrint:!0,rawCollapsible:!t.useCardStyles,blockExpansion:t.blockCardExpansion,hideHeader:t.hideCardTitles||!e.cardTitle,startExpanded:t.expandAllCards||t.expandFirstCard&&n.at(-1)===0})}
                    class=${WP({"raw-collapsible-card":!t.useCardStyles})}
                >
                    ${a} ${r}
                </${MB}>
            `]}throw Vc.tsType(e).equals(),Error(`Unexpected structured render type: ${y(e)}`)}function VK(e){let t={},n=new ResizeObserver(r=>{e.scrollIntoView({block:`nearest`}),clearTimeout(t.id),r.some(e=>e.contentRect.height>=100)?n.disconnect():t.id=setTimeout(()=>{n.disconnect()},100)});n.observe(e)}function HK({options:e,rawKeyChain:t,rawSources:n}){if(!rK(n))return M;let r=UK(t),i=!!e.currentlyExpanded[r];return U`
        <${mB.assign({icon:e.sourceIcon,color:J.Plain,buttonEmphasis:Cz.Subtle,buttonSize:xz.Small})}
            class="source-icon-button"
            ${H(`click`,e=>{let t=SL(e,HTMLElement);t.dispatchEvent(new kK({detail:{expanded:!i,key:r}}));let n=t.getRootNode(),a=n instanceof Document||n instanceof ShadowRoot?n.querySelector(`.collapsible-source-wrapper[data-source-key="${r}"]`):void 0;!i&&a&&VK(a)})}
        ></${mB}>
    `}function UK(e){return qK([...e,`source-icon`])}function WK({content:e,...t}){return U`
        <div class="source-content-wrapper">${e}${rK(t.rawSources)?U`
              <div class="source-icon-wrapper">${HK(t)}</div>
          `:M}</div>
    `}function GK({options:e,rawKeyChain:t,rawSources:n}){let r=rK(n);if(!r)return;let i=UK(t),a=!!e.currentlyExpanded[i],o=U`
        <${aK.assign({options:e,sources:r})}></${aK}>
    `;return e.useDrawerForSources?U`
            <${FB.assign({open:a,drawerTitle:e.pluralSourcesString})}
                ${H(FB.events.drawerClose,e=>{SL(e,HTMLElement).dispatchEvent(new kK({detail:{expanded:!1,key:i}}))})}
            >
                ${o}
            </${FB}>
        `:U`
        <${jB.assign({expanded:a,expandOnPrint:e.expandSourcesOnPrint})}
            class="collapsible-source-wrapper ${WP({"expanded-source":a})}"
            data-source-key=${i}
        >
            <span
                slot=${jB.slotNames[`vira-collapsible-wrapper-header`]}
            ></span>
            ${o}
        </${jB}>
    `}function KK({content:e,options:t,rawKeyChain:n,rawSources:r}){return t.hideSources?U`
            <div class="source-content-wrapper">${e}</div>
        `:U`
        ${WK({content:e,options:t,rawKeyChain:n,rawSources:r})}
        ${GK({options:t,rawKeyChain:n,rawSources:r})}
    `}function qK(e){return[`key`,...e].join(`;`).replaceAll(` `,`_`).replaceAll(/[^\w;]/g,``)}var JK=V`
    .source-content-wrapper {
        display: flex;

        & > *:not(table):has(+ .source-icon-wrapper) {
            flex-grow: 1;
        }
    }

    .collapsible-source-wrapper {
        border: none;

        &:not(.expanded-source) {
            ${Az}
        }
    }

    .expanded-source {
        margin: 8px 0 !important;
    }

    .source-icon-button {
        opacity: 0.5;

        &:hover {
            opacity: 1;
        }
    }

    .source-icon-wrapper.source-icon-wrapper.source-icon-wrapper.source-icon-wrapper.source-icon-wrapper {
        margin-left: auto;
        justify-content: flex-end;
        align-items: center;
        display: flex;
        flex-shrink: 0;
        align-self: top;
    }

    @media print {
        .source-icon-wrapper {
            display: none !important;
        }
    }
`,YK=V`4px`,Z=BF()({tagName:`vir-structured-render`,state(){return{currentlyExpanded:{},tableSortStates:{},lastStyleString:``}},cssVars:{"vir-structured-render-h1-font-size":`24px`,"vir-structured-render-h2-font-size":`18px`,"vir-structured-render-h3-font-size":`16px`,"vir-structured-render-small-font-size":`12px`},hostClasses:{"vir-structured-render-phone-size"({inputs:e}){return!!e.options.isPhoneSize},"vir-structured-render-tablet-size"({inputs:e}){return!!e.options.isTabletSize}},styles({cssVars:e,hostClasses:t}){return V`
            :host {
                ${$I(K.colors[iL])}
            }

            ${Y} {
                flex-shrink: 0;
            }

            :host,
            .${j(WG)}.${j(WG)}.${j(WG)} {
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

                & ${TV} {
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

            .text-style-${j(pK.Faint)}.text-style-${j(pK.Faint)}.text-style-${j(pK.Faint)}.text-style-${j(pK.Faint)} {
                color: ${K.colors[`vira-grey-foreground-non-body`].foreground.value};
            }
            .text-style-${j(pK.Bold)}.text-style-${j(pK.Bold)}.text-style-${j(pK.Bold)}.text-style-${j(pK.Bold)} {
                font-weight: bold;
            }
            .text-style-${j(pK.Small)}.text-style-${j(pK.Small)}.text-style-${j(pK.Small)}.text-style-${j(pK.Small)} {
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

                & .th-content {
                    display: inline-flex;
                    align-items: center;
                    gap: 2px;
                }

                & th.sortable {
                    cursor: pointer;
                    user-select: none;
                }

                & .sort-icon {
                    display: inline-flex;
                    align-items: center;
                    opacity: 0.25;
                    transition: opacity 0.15s;

                    &.sort-icon-active {
                        opacity: 0.8;
                    }

                    & ${Y} {
                        width: 16px;
                        height: 16px;
                    }
                }

                & th.sortable:hover .sort-icon {
                    opacity: 0.6;

                    &.sort-icon-active {
                        opacity: 1;
                    }
                }

                & .source-row td {
                    border: none !important;
                    padding: 0 !important;
                }

                /**
                 * A collapsed ViraCollapsibleWrapper pins its content's last measured pixel
                 * width, which would otherwise set the table's minimum width and overflow narrow
                 * containers.
                 */
                & .source-row > td > .collapsible-source-wrapper {
                    width: 0;
                    min-width: 100%;
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
                    ${K.colors[`vira-grey-foreground-decoration`].foreground.value};

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

                ${MB.cssVars[`vira-collapsible-card-content-gap`].name}: 8px;
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

            ${JK}

            .${j(WG)}.${j(WG)}.${j(WG)}.${j(WG)} {
                ul {
                    ${ER}
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
                    margin-right: ${YK};
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
                margin-right: ${YK};
            }

            .processing-section .source-content-wrapper {
                display: flex;
                gap: 4px;
            }

            .list-item-content-column {
                display: flex;
                flex-direction: column;
            }

            .collapsible-section {
                align-items: flex-start;
            }

            .copy-card-wrapper.copy-card-wrapper {
                display: flex;
                flex-direction: column;
                border: 1px solid
                    ${K.colors[`vira-grey-foreground-decoration`].foreground.value};
                border-radius: 8px;
                padding: 16px 20px 20px;
                gap: 8px;

                & .copy-card-top {
                    display: flex;
                    align-items: center;
                    gap: 8px;

                    & ${_H} {
                        margin-left: auto;
                        margin-right: -8px;
                    }
                }

                & .copy-card-header {
                    font-weight: bold;
                    font-size: inherit;
                }

                & .copy-card-body::first-line {
                    line-height: unset;
                }
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

                & ${Y} {
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
        `},render({inputs:e,state:t,updateState:n,host:r}){let i=String(e.options.markdownStyles||qG);gH({maintainFirstStylesheet:!0,newStyles:i,oldStyles:t.lastStyleString,shadowRoot:r.shadowRoot})&&n({lastStyleString:i});let a=MK(e.data,{...e.options,devDebug:e.options.devDebug,currentlyExpanded:{...e.options.currentlyExpanded,...t.currentlyExpanded},tableSortStates:{...e.options.tableSortStates,...t.tableSortStates}});return U`
            <div
                ${H(kK,e=>{n({currentlyExpanded:{...t.currentlyExpanded,[e.detail.key]:e.detail.expanded}})})}
                ${H(jK,e=>{n({tableSortStates:{...t.tableSortStates,[e.detail.tableKey]:e.detail.sort}})})}
                class=${WG}
            >
                ${a}
            </div>
        `}}),XK=BF()({tagName:`vir-expandable-source`,state(){return{currentlyExpanded:{}}},styles:V`
        :host {
            display: flex;
            flex-direction: column;
        }

        ${Y} {
            flex-shrink: 0;
        }

        *::first-line {
            /* this height must match the icon size */
            line-height: 24px;
        }

        ${JK}
    `,render({inputs:e,state:t,updateState:n}){let r=Cl(eK,{...e.options,currentlyExpanded:{...e.options?.currentlyExpanded,...t.currentlyExpanded}});return U`
            <div
                ${H(kK,e=>{n({currentlyExpanded:{...t.currentlyExpanded,[e.detail.key]:e.detail.expanded}})})}
            >
                ${KK({content:U`
                        <slot></slot>
                    `,options:r,rawKeyChain:[`expandable-source`],rawSources:e.sources})}
            </div>
        `}});function ZK(e){return tl(Hl(e),e=>({key:e.name,value:e}),{useRequired:!0})}var QK=2.835,$K={width:210*QK,height:297*QK},eq={top:10*QK,bottom:10*QK,left:12*QK,right:12*QK},Q={body:8,h1:15,h2:12,h3:10,small:6,code:7,source:6},tq;async function nq(){if(!tq){let{rgb:e}=await pl(async()=>{let{rgb:e}=await import(`./es-Dplog-HW.js`);return{rgb:e}},__vite__mapDeps([0,1,2]));tq={black:e(0,0,0),gray:e(.4,.4,.4),lightGray:e(.85,.85,.85),faintGray:e(.5,.5,.5),codeBackground:e(.95,.95,.95),blue:e(0,0,.8),white:e(1,1,1),headerBackground:e(.97,.97,.98),tableBorder:e(.8,.8,.8)}}return tq}var rq=1.3,iq=class e{pdfDoc;fonts;contentWidth;contentX;pageHeaderHeight;getPageHeaderRenderer;currentPage;currentPageHeaderHeight;cursorY;constructor(e,t,{pageHeaderHeight:n,getPageHeaderRenderer:r}){this.pdfDoc=e,this.fonts=t,this.contentWidth=$K.width-eq.left-eq.right,this.contentX=eq.left,this.pageHeaderHeight=n,this.getPageHeaderRenderer=r,this.currentPageHeaderHeight=0,this.currentPage=this.createNewPage(),this.cursorY=this.getContentStartY()}static async create({pageHeader:t}={}){let{PDFDocument:n,StandardFonts:r}=await pl(async()=>{let{PDFDocument:e,StandardFonts:t}=await import(`./es-Dplog-HW.js`);return{PDFDocument:e,StandardFonts:t}},__vite__mapDeps([0,1,2])),i=await n.create(),[a,o,s,c,l,u]=await Promise.all([i.embedFont(r.Helvetica),i.embedFont(r.HelveticaBold),i.embedFont(r.HelveticaOblique),i.embedFont(r.HelveticaBoldOblique),i.embedFont(r.Courier),i.embedFont(r.CourierBold)]),d={regular:a,bold:o,italic:s,boldItalic:c,mono:l,monoBold:u};return new e(i,d,{pageHeaderHeight:t?.height??0,getPageHeaderRenderer:t?await t.create({pdfDocument:i,fonts:d}):void 0})}getCursorY(){return this.cursorY}getPage(){return this.currentPage}lineHeight(e){return e*rq}ensureSpace(e){this.cursorY-e<eq.bottom&&this.newPage()}newPage(){this.currentPage=this.createNewPage(),this.cursorY=this.getContentStartY()}advanceCursor(e){this.cursorY-=e}async drawTextLine(e,{font:t,size:n,color:r,x:i,y:a}){let o=await nq();this.currentPage.drawText(sq(e,t),{x:i??this.contentX,y:a??this.cursorY-n,size:n,font:t,color:r??o.black})}async drawWrappedText(e,{font:t,size:n,color:r,x:i,maxWidth:a}){let o=a??this.contentWidth,s=i??this.contentX,c=aq({text:e,font:t,fontSize:n,maxWidth:o}),l=this.lineHeight(n),u=c.length*l;u<=this.getContentStartY()-eq.bottom&&this.ensureSpace(u);let d=0;for(let e of c)this.ensureSpace(l),await this.drawTextLine(e,{font:t,size:n,color:r,x:s}),this.advanceCursor(l),d+=l;return d}measureWrappedTextHeight(e,{font:t,size:n,maxWidth:r}){return aq({text:e,font:t,fontSize:n,maxWidth:r??this.contentWidth}).length*this.lineHeight(n)}async drawLine({x1:e,y1:t,x2:n,y2:r,thickness:i,color:a}){let o=await nq();this.currentPage.drawLine({start:{x:e,y:t},end:{x:n,y:r},thickness:i??.5,color:a??o.tableBorder})}drawRect({x:e,y:t,width:n,height:r,fillColor:i,borderColor:a,borderWidth:o}){this.currentPage.drawRectangle({x:e,y:t,width:n,height:r,...i?{color:i}:{},...a?{borderColor:a,borderWidth:o??.5}:{}})}async save(){return await this.pdfDoc.save()}createNewPage(){let e=this.pdfDoc.addPage([$K.width,$K.height]),t=this.pdfDoc.getPageCount(),n=this.getPageHeaderRenderer?.({pageNumber:t});return this.currentPageHeaderHeight=n?this.pageHeaderHeight:0,n?.({page:e,pageNumber:t,headerBounds:{x:this.contentX,y:this.getContentStartY(),width:this.contentWidth,height:this.currentPageHeaderHeight}}),e}getContentStartY(){return $K.height-eq.top-this.currentPageHeaderHeight}};function aq({text:e,font:t,fontSize:n,maxWidth:r}){if(!e)return[``];let i=e.split(`
`),a=[];return i.forEach(e=>{if(!e.trim()){a.push(``);return}let i=e.split(/\s+/).filter(A.isTruthy),o=``;i.forEach(e=>{let i=o?`${o} ${e}`:e;oq(i,t,n)>r&&o?(a.push(o),o=e):o=i}),o&&a.push(o)}),a.length?a:[``]}function oq(e,t,n){return t.widthOfTextAtSize(sq(e,t),n)}function sq(e,t){let n=[];for(let r of e)try{t.encodeText(r),n.push(r)}catch{n.push(`?`)}return n.join(``)}async function cq(e,t){await lq(HG.lexer(e),t)}async function lq(e,t){for(let n of e)await uq(n,t)}async function uq(e,t){if(e.type===`heading`){let n=e,r=hq(n.depth),i=t.lineHeight(r);t.ensureSpace(i+6),t.advanceCursor(3),await pq({segments:await dq(n.tokens,t,{bold:!0}),builder:t,fontSize:r,maxWidth:t.contentWidth}),t.advanceCursor(3)}else if(e.type===`paragraph`){let n=await dq(e.tokens,t,{}),r=n.filter(e=>e.isImage);if(r.length>0){for(let e of r)e.imageUrl&&await _q({url:e.imageUrl,altText:e.text,builder:t});let e=n.filter(e=>!e.isImage);e.length>0&&await pq({segments:e,builder:t,fontSize:Q.body,maxWidth:t.contentWidth})}else await pq({segments:n,builder:t,fontSize:Q.body,maxWidth:t.contentWidth});t.advanceCursor(3)}else if(e.type===`code`){let n=e,r=t.measureWrappedTextHeight(n.text,{font:t.fonts.mono,size:Q.code,maxWidth:t.contentWidth-16})+16;t.ensureSpace(Math.min(r,t.lineHeight(Q.code)*3)),t.drawRect({x:t.contentX,y:t.getCursorY()-r,width:t.contentWidth,height:r,fillColor:(await nq()).codeBackground});let i=t.getCursorY();t.advanceCursor(8),await t.drawWrappedText(n.text,{font:t.fonts.mono,size:Q.code,x:t.contentX+8,maxWidth:t.contentWidth-16});let a=i-t.getCursorY();a<r&&t.advanceCursor(r-a),t.advanceCursor(3)}else if(e.type===`blockquote`){let n=e,r=t.contentX,i=t.contentWidth;t.contentX=r+20,t.contentWidth=i-20;let a=t.getCursorY();await lq(n.tokens,t);let o=t.getCursorY(),s=a-o;t.drawRect({x:r+4,y:o,width:3,height:s,fillColor:(await nq()).lightGray}),t.contentX=r,t.contentWidth=i,t.advanceCursor(3)}else if(e.type===`list`){let n=e;for(let[e,r]of n.items.entries()){let i=n.ordered?`${(n.start||1)+e}.`:`•`,a=t.lineHeight(Q.body);t.ensureSpace(a),await t.drawTextLine(i,{font:t.fonts.regular,size:Q.body}),await pq({segments:await fq(r.tokens,t),builder:t,fontSize:Q.body,maxWidth:t.contentWidth-15,startX:t.contentX+15})}t.advanceCursor(3)}else if(e.type===`hr`)t.ensureSpace(6),t.advanceCursor(3),await t.drawLine({x1:t.contentX,y1:t.getCursorY(),x2:t.contentX+t.contentWidth,y2:t.getCursorY(),color:(await nq()).lightGray,thickness:1}),t.advanceCursor(3);else if(e.type===`table`)await gq(e,t),t.advanceCursor(3);else if(e.type===`html`){let n=e.text.replace(/<[^<>]*>/g,``).trim();n&&await t.drawWrappedText(n,{font:t.fonts.regular,size:Q.small,color:(await nq()).gray})}else e.type===`space`?t.advanceCursor(2):`text`in e&&typeof e.text==`string`&&e.text.trim()&&await t.drawWrappedText(e.text,{font:t.fonts.regular,size:Q.body})}async function dq(e,t,n){let r=[],i=await nq();for(let a of e)if(a.type===`text`){let e=a;r.push({text:e.text,font:mq(t,n),color:n.color??i.black}),e.tokens&&r.push(...await dq(e.tokens,t,n))}else if(a.type===`strong`)r.push(...await dq(a.tokens,t,{...n,bold:!0}));else if(a.type===`em`)r.push(...await dq(a.tokens,t,{...n,italic:!0}));else if(a.type===`codespan`)r.push({text:a.text,font:t.fonts.mono,color:n.color??i.black});else if(a.type===`link`)r.push(...await dq(a.tokens,t,{...n,color:i.blue}));else if(a.type===`image`){let e=a;r.push({text:e.text||e.title||`[image]`,font:t.fonts.regular,color:i.black,isImage:!0,imageUrl:e.href})}else a.type===`br`?r.push({text:`
`,font:mq(t,n),color:n.color??i.black}):a.type===`del`?r.push(...await dq(a.tokens,t,{...n,color:i.gray})):`text`in a&&typeof a.text==`string`&&r.push({text:a.text,font:mq(t,n),color:n.color??i.black});return r}async function fq(e,t){let n=[];for(let r of e)if(r.type===`text`||r.type===`paragraph`){let e=r;e.tokens?n.push(...await dq(e.tokens,t,{})):n.push({text:e.text,font:t.fonts.regular,color:(await nq()).black})}else`text`in r&&typeof r.text==`string`&&n.push({text:r.text,font:t.fonts.regular,color:(await nq()).black});return n}async function pq({segments:e,builder:t,fontSize:n,maxWidth:r,startX:i}){let a=i??t.contentX,o=t.lineHeight(n),s=a,c=[];e.forEach(e=>{e.isImage||e.text.split(/(\s+)/).forEach(t=>{t&&c.push({text:t,font:e.font,color:e.color})})});let l=[],u=0;async function d(){if(l.length!==0){t.ensureSpace(o);for(let e of l)await t.drawTextLine(e.text,{font:e.font,size:n,color:e.color,x:e.x});t.advanceCursor(o),l=[],u=0,s=a}}for(let e of c){if(e.text===`
`){await d();continue}let t=oq(e.text,e.font,n);u+t>r&&l.length>0&&e.text.trim()&&await d(),l.push({...e,x:s+u}),u+=t}await d()}function mq(e,t){return t.code?e.fonts.mono:t.bold&&t.italic?e.fonts.boldItalic:t.bold?e.fonts.bold:t.italic?e.fonts.italic:e.fonts.regular}function hq(e){return e===1?Q.h1:e===2?Q.h2:e===3?Q.h3:Q.body}async function gq(e,t){let n=t.lineHeight(Q.body)+4,r=e.header.map((n,r)=>{let i=oq(n.text,t.fonts.bold,Q.body);return e.rows.forEach(e=>{let n=e[r];if(n){let e=oq(n.text,t.fonts.regular,Q.body);i=Math.max(i,e)}}),i+4}),i=r.reduce((e,t)=>e+t,0),a=i<=t.contentWidth?r.map(e=>e/i*t.contentWidth):r.map(e=>Math.max(30,e/i*t.contentWidth));t.ensureSpace(n);let o=t.getCursorY()-n;t.drawRect({x:t.contentX,y:o,width:t.contentWidth,height:n,fillColor:(await nq()).headerBackground});let s=t.contentX;for(let[n,r]of e.header.entries())await t.drawTextLine(r.text,{font:t.fonts.bold,size:Q.body,x:s+2,y:o+2}),s+=a[n]??60;await t.drawLine({x1:t.contentX,y1:o,x2:t.contentX+t.contentWidth,y2:o,color:(await nq()).tableBorder}),t.advanceCursor(n);for(let r of e.rows){t.ensureSpace(n);let e=t.getCursorY()-n,i=t.contentX;for(let[n,o]of r.entries())await t.drawTextLine(o.text,{font:t.fonts.regular,size:Q.body,x:i+2,y:e+2}),i+=a[n]??60;await t.drawLine({x1:t.contentX,y1:e,x2:t.contentX+t.contentWidth,y2:e,color:(await nq()).tableBorder}),t.advanceCursor(n)}}async function _q({url:e,altText:t,builder:n}){try{let r=await fetch(e);if(!r.ok){await n.drawWrappedText(`[${t}]`,{font:n.fonts.italic,size:Q.body,color:(await nq()).gray});return}let i=r.headers.get(`content-type`)||``,a=await r.arrayBuffer(),o=new Uint8Array(a),s;if(i.includes(`png`))s=await n.pdfDoc.embedPng(o);else if(i.includes(`jpeg`)||i.includes(`jpg`))s=await n.pdfDoc.embedJpg(o);else try{s=await n.pdfDoc.embedPng(o)}catch{s=await n.pdfDoc.embedJpg(o)}let c=n.contentWidth,l=Math.min(c/s.width,300/s.height,1),u=s.width*l,d=s.height*l;n.ensureSpace(d+6),n.getPage().drawImage(s,{x:n.contentX,y:n.getCursorY()-d,width:u,height:d}),n.advanceCursor(d+3)}catch{await n.drawWrappedText(`[${t}]`,{font:n.fonts.italic,size:Q.body,color:(await nq()).gray})}}var vq={...yz,[J.Neutral]:gz.grey};async function yq(e,t,n){let r=Eq[e.type];await r(e,t,n)}function bq(e,t){return e?e.type===X.text?e.text==null?``:String(e.text):e.type===X.inlineCode?e.code:e.type===X.tag||e.type===X.title?e.text==null?``:String(e.text):e.type===X.markdown?e.markdown:e.type===X.list?e.items.map(e=>rl(e.content).map(e=>bq(e,t)).join(` `)).join(`, `):``:``}async function xq(e,t){if(!e||!ZI.isValidColorString(e))return t;let n=new ZI(e).rgb,{rgb:r}=await pl(async()=>{let{rgb:e}=await import(`./es-Dplog-HW.js`);return{rgb:e}},__vite__mapDeps([0,1,2]));return r(n.r/255,n.g/255,n.b/255)}function Sq(e){if(A.isString(e))return e;if(A.isObject(e)&&`default`in e&&A.isString(e.default))return e.default}async function Cq(e){let t=await nq(),n={backgroundColor:t.lightGray,foregroundColor:t.black};if(!e)return n;if(`custom`in e){let[t,r]=await Promise.all([xq(e.custom.backgroundColor,n.backgroundColor),xq(e.custom.foregroundColor,n.foregroundColor)]);return{backgroundColor:t,foregroundColor:r}}let r=vq[e.variant];if(!r)return n;let i=vz[r][`on-self`][W.BodyText],[a,o]=await Promise.all([xq(Sq(i.init.background),n.backgroundColor),xq(Sq(i.init.foreground),n.foregroundColor)]);return{backgroundColor:a,foregroundColor:o}}async function wq(e,t,n){if(!iK(e))return;let r=e.pageNumbers?.filter(A.isDefined),i=r?.length?`p. ${r.join(`, `)}`:``,a=[e.fileName,i].filter(A.isTruthy).join(`, `);if(!a)return;let o=`${n.sourceString}: ${a}`;await t.drawWrappedText(o,{font:t.fonts.regular,size:Q.source,color:(await nq()).gray})}async function Tq(e,t,n){if(e&&!n.hideSources)for(let r of e)r&&iK(r)&&await wq(r,t,n)}var Eq={async title(e,t,n){if(e.text==null)return;let r=String(e.text);if(!r)return;let i=kq(e.icon,t,n);await t.drawWrappedText(r,{font:t.fonts.bold,size:Q.h1,x:i?t.contentX+i+4:void 0,maxWidth:i?t.contentWidth-i-4:void 0})},async copyCard(e,t){let n=e.text==null?``:String(e.text),r=e.header==null?``:String(e.header);(n||r)&&(r&&(await t.drawWrappedText(r,{font:t.fonts.bold,size:Q.body}),t.advanceCursor(4)),n&&await t.drawWrappedText(n,{font:t.fonts.regular,size:Q.body}))},async text(e,t,n){if(e.text==null)return;let r=String(e.text);if(!r)return;let i=kq(e.icon,t,n),a=await Dq(e.style,t);await t.drawWrappedText(r,{font:a.font,size:a.size,color:a.color,x:i?t.contentX+i+4:void 0,maxWidth:i?t.contentWidth-i-4:void 0})},async tag(e,t){if(e.text==null)return;let n=String(e.text);if(!n)return;let r=e.useBigTag?Q.body:Q.small,i=oq(n,t.fonts.regular,r)+8,a=t.lineHeight(r)+4,o=await Cq(e.color);t.ensureSpace(a),t.drawRect({x:t.contentX,y:t.getCursorY()-a,width:i,height:a,fillColor:o.backgroundColor}),await t.drawTextLine(n,{font:t.fonts.regular,size:r,color:o.foregroundColor,x:t.contentX+4,y:t.getCursorY()-a+2}),t.advanceCursor(a+2)},async codeBlock(e,t){if(!e.code)return;let n=t.measureWrappedTextHeight(e.code,{font:t.fonts.mono,size:Q.code,maxWidth:t.contentWidth-16})+16;t.ensureSpace(Math.min(n,t.lineHeight(Q.code)*3)),t.drawRect({x:t.contentX,y:t.getCursorY()-n,width:t.contentWidth,height:n,fillColor:(await nq()).codeBackground});let r=t.getCursorY();t.advanceCursor(8),await t.drawWrappedText(e.code,{font:t.fonts.mono,size:Q.code,x:t.contentX+8,maxWidth:t.contentWidth-16});let i=r-t.getCursorY();i<n&&t.advanceCursor(n-i)},async inlineCode(e,t){e.code&&await t.drawWrappedText(e.code,{font:t.fonts.mono,size:Q.code})},async list(e,t,n){for(let r of e.items){let e=rl(r.content).filter(A.isTruthy).map(e=>bq(e,n)).filter(A.isTruthy).join(` `);if(!e)continue;let i=t.lineHeight(Q.body);t.ensureSpace(i),kq(r.icon,t,n)||await t.drawTextLine(`•`,{font:t.fonts.regular,size:Q.body}),await t.drawWrappedText(e,{font:t.fonts.regular,size:Q.body,x:t.contentX+15,maxWidth:t.contentWidth-15}),await Tq(r.sources,t,n)}},async table(e,t,n){let r=e.headers.filter(e=>!e.hidden);if(r.length===0||e.entries.length===0)return;let i=await Dq(e.style,t);e.direction===bK.Horizontal?await Aq({section:e,visibleHeaders:r,builder:t,options:n,styleConfig:i}):await jq({section:e,visibleHeaders:r,builder:t,options:n,styleConfig:i})},async markdown(e,t){e.markdown&&await cq(e.markdown,t)},async source(e,t,n){n.hideSources||await wq(e,t,n)},icon(e,t,n){kq(e,t,n)&&t.advanceCursor(t.lineHeight(Q.body))},async collapsible(e,t,n){e.header&&(await t.drawWrappedText(String(e.header),{font:t.fonts.bold,size:Q.body}),t.advanceCursor(4));let r=rl(e.content).filter(A.isTruthy);for(let e of r)await yq(e,t,n),t.advanceCursor(3)},processing(){},empty(){}};async function Dq(e,t){return e===pK.Bold?{font:t.fonts.bold,size:Q.body,color:(await nq()).black}:e===pK.Faint?{font:t.fonts.regular,size:Q.body,color:(await nq()).faintGray}:e===pK.Small?{font:t.fonts.regular,size:Q.small,color:(await nq()).black}:{font:t.fonts.regular,size:Q.body,color:(await nq()).black}}var Oq=10;function kq(e,t,n){if(!e||!e.iconKey)return 0;let r=cK(e,n);if(!r)return 0;let i=wI(r.svgTemplate),a={"--vira-icon-stroke-color":e.strokeColor||`currentColor`,"--vira-icon-fill-color":e.fillColor||`none`},o=i.replace(/var\(--([^,)]+),([^)]+)\)/g,(e,t,n)=>a[`--${t.trim()}`]||n.trim()),s=t.lineHeight(Q.body);t.ensureSpace(s);try{return t.getPage().drawSvg(o,{x:t.contentX,y:t.getCursorY(),width:Oq,height:Oq}),Oq}catch{return 0}}async function Aq({section:e,visibleHeaders:t,builder:n,options:r,styleConfig:i}){let a=Mq({section:e,visibleHeaders:t,builder:n,options:r,cellPadding:3,styleConfig:i});await Nq({cells:t.map(e=>e.text?bq(e.text,r):e.key),columnWidths:a,builder:n,cellPadding:3,isHeader:!0,styleConfig:i});for(let o of e.entries)await Nq({cells:t.map(e=>{let t=o.data[e.key];return rl(t).filter(A.isTruthy).map(e=>bq(e,r)).filter(A.isTruthy).join(` `)}),columnWidths:a,builder:n,cellPadding:3,isHeader:!1,styleConfig:i}),await Tq(o.sources,n,r);if(e.footerRows)for(let t of e.footerRows){let e=rl(t.cells).filter(A.isTruthy).map(e=>bq(e,r)).filter(A.isTruthy).join(` `);if(e){let t=n.lineHeight(i.size);n.ensureSpace(t),await n.drawWrappedText(e,{font:n.fonts.bold,size:i.size,color:i.color})}}}async function jq({section:e,visibleHeaders:t,builder:n,options:r,styleConfig:i}){let a=n.contentWidth/(e.entries.length+1),o=nl(e.entries.length+1,()=>a);for(let a of t)await Nq({cells:[a.text?bq(a.text,r):a.key,...e.entries.map(e=>{let t=e.data[a.key];return rl(t).filter(A.isTruthy).map(e=>bq(e,r)).filter(A.isTruthy).join(` `)})],columnWidths:o,builder:n,cellPadding:3,isHeader:!1,boldFirstCell:!0,styleConfig:i})}function Mq({section:e,visibleHeaders:t,builder:n,options:r,cellPadding:i,styleConfig:a}){let o=a.font,s=t.map(t=>{let s=oq(t.text?bq(t.text,r):t.key,n.fonts.bold,a.size);return e.entries.forEach(e=>{let n=e.data[t.key],i=oq(rl(n).filter(A.isTruthy).map(e=>bq(e,r)).filter(A.isTruthy).join(` `),o,a.size);s=Math.max(s,i)}),s+i*2}),c=s.reduce((e,t)=>e+t,0),l=n.contentWidth;if(c<=l){let e=l/c;return s.map(t=>t*e)}return s.map(e=>Math.max(25,e/c*l))}async function Nq({cells:e,columnWidths:t,builder:n,cellPadding:r,isHeader:i,boldFirstCell:a,styleConfig:o}){let s=o.size,c=n.lineHeight(s),l=e.map((e,c)=>{let l=t[c]??60,u=i||a&&c===0?n.fonts.bold:o.font,d=l-r*2;return aq({text:e,font:u,fontSize:s,maxWidth:d})}),u=Math.max(1,...l.map(e=>e.length))*c+r*2;n.ensureSpace(u);let d=n.getCursorY(),f=d-u,p=n.contentX;i&&n.drawRect({x:n.contentX,y:f,width:n.contentWidth,height:u,fillColor:(await nq()).headerBackground});for(let[e,u]of l.entries()){let l=t[e]??60,f=i||a&&e===0?n.fonts.bold:o.font;for(let[e,t]of u.entries())await n.drawTextLine(t,{font:f,size:s,color:o.color,x:p+r,y:d-r-s-e*c});p+=l}await n.drawLine({x1:n.contentX,y1:f,x2:n.contentX+n.contentWidth,y2:f,color:(await nq()).tableBorder}),n.advanceCursor(u)}async function Pq(e,t,n={}){let r=Cl($G,n),i=await iq.create({pageHeader:n.pageHeader});return t&&i.pdfDoc.setTitle(t),await Fq(e,i,r),await i.save()}async function Fq(e,t,n){if(e){if(A.isArray(e))for(let[r,i]of e.entries())i&&(r>0&&t.advanceCursor(10),await Fq(i,t,n));else if(`type`in e)await Lq({section:e,builder:t,options:n,isFirstCardSection:!1});else if(`sections`in e)await Iq(e,t,n);else throw Vc.tsType(e).equals(),Error(`Unexpected structured render type: ${y(e)}`)}}async function Iq(e,t,n){if(e.cardTitle){let n=t.lineHeight(Q.h2);t.ensureSpace(n+6),await t.drawWrappedText(e.cardTitle,{font:t.fonts.bold,size:Q.h2}),t.advanceCursor(3),await t.drawLine({x1:t.contentX,y1:t.getCursorY(),x2:t.contentX+t.contentWidth,y2:t.getCursorY(),color:(await nq()).lightGray,thickness:1}),t.advanceCursor(3)}for(let[r,i]of e.sections.entries())i&&(r>0&&t.advanceCursor(6),await Lq({section:i,builder:t,options:n,isFirstCardSection:r===0}))}async function Lq({section:e,builder:t,options:n,isFirstCardSection:r}){if(`sectionTitle`in e&&e.sectionTitle&&!r){let n=t.lineHeight(Q.h3);t.ensureSpace(n+3),t.advanceCursor(3),await t.drawWrappedText(e.sectionTitle,{font:t.fonts.bold,size:Q.h3}),t.advanceCursor(4)}if(await yq(e,t,n),!n.hideSources&&`sources`in e&&e.sources){let r=e.sources.filter(e=>!!e&&iK(e));for(let e of r){let r=e.pageNumbers?.filter(A.isDefined),i=r?.length?`p. ${r.join(`, `)}`:``,a=[e.fileName,i].filter(A.isTruthy).join(`, `);a&&await t.drawWrappedText(`${n.sourceString}: ${a}`,{font:t.fonts.regular,size:Q.source,color:(await nq()).gray})}}}function Rq(e){return e.toLowerCase().endsWith(`.pdf`)?e:`${e}.pdf`}async function zq(e,t,n){if(!we(b.Web))throw Error(`${zq.name} cannot run outside of a browser.`);let r=Rq(t),i=await Pq(e,t,n),a=new Blob([new Uint8Array(i)],{type:`application/pdf`}),o=URL.createObjectURL(a),s=globalThis.document.createElement(`a`);s.href=o,s.download=r,s.style.display=`none`,globalThis.document.body.append(s),s.click(),s.remove(),URL.revokeObjectURL(o)}var $=ZK({LucideCircleAlertIcon:TB,LucideCircleCheckIcon:EB,LucideStarIcon:kB}),Bq=[{sections:[{type:X.title,text:`Here is my title`}]},{cardTitle:`Frontend Performance`,cardTitleIcon:{type:X.icon,iconKey:$.CircleCheck.name,strokeColor:`green`},sections:[{type:X.text,sectionTitle:`Overview`,text:`Frontend performance metrics collected from the last 30 days of production monitoring.`,sources:[{type:`source`,fileName:`performance-report-2026-02.pdf`,pageNumbers:[1,2],quote:`Metrics aggregated from real user monitoring (RUM) data across all production traffic.`}]},{type:X.table,sectionTitle:`Core Web Vitals`,direction:bK.Horizontal,sources:[{type:`source`,fileName:`lighthouse-audit.json`,pageNumbers:[3],quote:`Core Web Vitals thresholds based on Chrome UX Report field data.`},{type:`source`,fileName:`web-vitals-spec.md`,quote:`Targets align with Google recommended thresholds for good user experience.`}],headers:[{key:`metric`},{key:`p50`},{key:`p95`},{key:`target`},{key:`status`}],entries:[{data:{metric:{type:X.text,text:`Largest Contentful Paint`,style:pK.Bold},p50:{type:X.inlineCode,code:`1.2s`},p95:{type:X.inlineCode,code:`2.8s`},target:{type:X.text,text:`< 2.5s`},status:{type:X.tag,text:`Pass`,color:{variant:J.Positive}}}},{data:{metric:{type:X.text,text:`First Input Delay`,style:pK.Bold},p50:{type:X.inlineCode,code:`12ms`},p95:{type:X.inlineCode,code:`85ms`},target:{type:X.text,text:`< 100ms`},status:{type:X.tag,text:`Pass`,color:{variant:J.Positive}}}},{data:{metric:{type:X.text,text:`Cumulative Layout Shift`,style:pK.Bold},p50:{type:X.inlineCode,code:`0.18`},p95:{type:X.inlineCode,code:`0.32`},target:{type:X.text,text:`< 0.1`},status:{type:X.tag,text:`Fail`,color:{variant:J.Danger}}},sources:[{type:`source`,fileName:`cls-regression-analysis.pdf`,pageNumbers:[7],quote:`CLS spike correlated with hero image carousel added in v3.12.0. CLS spike correlated with hero image carousel added in v3.12.0. CLS spike correlated with hero image carousel added in v3.12.0.`}]},{data:{metric:{type:X.text,text:`Time to First Byte`,style:pK.Bold},p50:{type:X.inlineCode,code:`210ms`},p95:{type:X.inlineCode,code:`480ms`},target:{type:X.text,text:`< 600ms`},status:{type:X.tag,text:`Pass`,color:{variant:J.Positive}}}}]},{type:X.list,sectionTitle:`Recommendations`,items:[{content:{type:X.text,text:`Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images.`},icon:{type:X.icon,iconKey:$.CircleAlert.name,strokeColor:`red`},sources:[{type:`source`,fileName:`frontend-performance-review-2026-q1.pdf`,pageNumbers:[4],quote:`Layout shifts primarily caused by images without explicit dimensions.`},{type:`source`,fileName:`web-vitals-optimization-guide.md`,quote:`Lazy loading below-the-fold content reduces initial page weight and improves LCP.`}]},{icon:{type:X.icon,iconKey:$.CircleAlert.name,strokeColor:`red`},content:{type:X.text,text:`Add explicit width and height attributes to all image elements.`,sources:[{type:`source`,fileName:`cls-regression-analysis.pdf`,pageNumbers:[8],quote:`Missing width/height attributes on images are the primary contributor to layout shift.`}]}},{content:{type:X.text,text:`Consider lazy loading below-the-fold content.`},sources:[{type:`source`,fileName:`frontend-performance-review-2026-q1.pdf`,pageNumbers:[4],quote:`Layout shifts primarily caused by images without explicit dimensions.`},{type:`source`,fileName:`web-vitals-optimization-guide.md`,quote:`Lazy loading below-the-fold content reduces initial page weight and improves LCP.`}]},{content:[{type:X.text,text:`Optimize font loading strategy:`},{type:X.tag,text:`High Priority`,color:{variant:J.Danger}},{type:X.text,text:`Switch to font-display: swap and preload critical font files to eliminate render-blocking behavior.`}],icon:{type:X.icon,iconKey:$.CircleAlert.name,strokeColor:`orange`},sources:[{type:`source`,fileName:`web-vitals-optimization-guide.md`,quote:`Render-blocking fonts add 200-500ms to FCP on slow connections.`}]}]},{type:X.list,sectionTitle:`Action Items`,items:[{content:{type:X.text,text:`Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions.`},icon:{type:X.icon,iconKey:$.CircleAlert.name,strokeColor:`orange`}},{content:{type:X.text,text:`Enable native lazy loading on below-the-fold images.`},icon:{type:X.icon,iconKey:$.CircleCheck.name,strokeColor:`green`}},{content:{type:X.text,text:`Defer non-critical third-party scripts.`},icon:{type:X.icon,iconKey:$.CircleCheck.name,strokeColor:`green`}}]},SK({direction:bK.Vertical,headers:[{key:`age`,text:{type:X.text,text:`Age`}},{key:`dateOfBirth`,text:{type:X.text,text:`DoB`}},{key:`bloodPressure`,text:{type:X.text,text:`Blood Pressure`}},{key:`bmi`,text:{type:X.text,text:`BMI`}},{key:`heartRate`,text:{type:X.text,text:`Heart Rate`}},{key:`oxygenSaturation`,text:{type:X.text,text:`Oxygen Saturation`}},{key:`pain`,text:{type:X.text,text:`Pain`}},{key:`language`,text:{type:X.text,text:`Language`}},{key:`respiratory`,text:{type:X.text,text:`Respiratory Rate`}},{key:`sex`,text:{type:X.text,text:`Sex`}},{key:`temperature`,text:{type:X.text,text:`Temperature`}},{key:`weight`,text:{type:X.text,text:`Weight`}},{key:`height`,text:{type:X.text,text:`Height`}},{key:`zipCode`,text:{type:X.text,text:`Zip Code`}}],entries:[{data:{age:{type:X.text,text:`72`,sources:[{type:X.source,fileName:`intake-form.pdf`,pageNumbers:[1],quote:`Age: 72`}]},dateOfBirth:{type:X.text,text:`01/15/1954`,sources:[{type:X.source,fileName:`intake-form.pdf`,pageNumbers:[1],quote:`DOB: 01/15/1954`}]},bloodPressure:{type:X.text,text:`130 / 85`,sources:[{type:X.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`BP: 130/85 mmHg`}]},bmi:{type:X.text,text:`27.3`,sources:[{type:X.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`BMI: 27.3`}]},heartRate:{type:X.text,text:`78 bpm`,sources:[{type:X.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`HR: 78 bpm`}]},height:{type:X.text,text:`170 cm`},oxygenSaturation:{type:X.text,text:`96%, on room air`,sources:[{type:X.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`SpO2: 96% on RA`}]},pain:{type:X.text,text:`4/10`,sources:[{type:X.source,fileName:`nursing-notes.pdf`,pageNumbers:[3],quote:`Pain score: 4/10`}]},language:{type:X.text,text:`English`},respiratory:{type:X.text,text:`18 breaths/min`,sources:[{type:X.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`RR: 18 breaths/min`}]},sex:{type:X.text,text:`Male`},temperature:{type:X.text,text:`98.6 °F`,sources:[{type:X.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`Temp: 98.6°F`}]},weight:{type:X.text,text:`185 lbs`,sources:[{type:X.source,fileName:`vitals-chart.pdf`,pageNumbers:[2],quote:`Weight: 185 lbs`}]},zipCode:{type:X.text,text:`90210`,sources:[{type:X.source,fileName:`intake-form.pdf`,pageNumbers:[1],quote:`Zip: 90210`}]}}}]})]},{cardTitle:`Backend API Health`,sections:[{type:X.markdown,sectionTitle:`Status Summary`,sources:[{type:`source`,fileName:`uptime-monitor-export.csv`,quote:`Uptime percentages calculated from 5-minute health check intervals.`}],markdown:`All **12 services** are operational. Average uptime over the past 30 days: **99.97%**.

| Service | Uptime |
|---------|--------|
| Auth | 99.99% |
| Users | 99.98% |
| Notifications | 99.91% |
| Billing | 100% |`},{type:X.table,sectionTitle:`Endpoint Latency (ms)`,direction:bK.Vertical,headers:[{key:`endpoint`},{key:`getUsers`},{key:`createUser`},{key:`getReport`},{key:`sendNotification`}],entries:[{data:{endpoint:{type:X.text,text:`p50`},getUsers:{type:X.inlineCode,code:`45`},createUser:{type:X.inlineCode,code:`120`},getReport:{type:X.inlineCode,code:`890`},sendNotification:{type:X.inlineCode,code:`65`}}},{data:{endpoint:{type:X.text,text:`p99`},getUsers:{type:X.inlineCode,code:`180`},createUser:{type:X.inlineCode,code:`450`},getReport:{type:X.inlineCode,code:`3200`},sendNotification:{type:X.inlineCode,code:`210`}}}]},{type:X.codeBlock,sectionTitle:`Slow Query Sample`,syntax:`sql`,code:`SELECT r.id, r.title, r.created_at,
       u.name AS author_name,
       COUNT(c.id) AS comment_count
FROM reports r
JOIN users u ON u.id = r.author_id
LEFT JOIN comments c ON c.report_id = r.id
WHERE r.created_at > NOW() - INTERVAL '30 days'
GROUP BY r.id, r.title, r.created_at, u.name
ORDER BY r.created_at DESC
LIMIT 100;`},{type:X.copyCard,sectionTitle:`On-Call Summary`,header:`Summary`,text:`All twelve services are healthy with average uptime of 99.97% over the past thirty days. The getReport endpoint exhibits high p99 latency driven by the slow query shown above; reducing the time window or adding an index on the created_at column should bring p99 back under one second.`}]},{cardTitle:`Deployment Pipeline`,sections:[{type:X.text,sectionTitle:`Current State`,text:`The CI/CD pipeline is fully automated with staging and production environments.`,icon:{type:X.icon,iconKey:$.CircleCheck.name,strokeColor:`green`}},{type:X.table,sectionTitle:`Recent Deployments`,direction:bK.Horizontal,sources:[{type:`source`,fileName:`ci-pipeline-logs.txt`,pageNumbers:[12,15,18,22],quote:`Deployment records extracted from CI/CD pipeline execution logs.`}],headers:[{key:`version`},{key:`environment`},{key:`date`},{key:`duration`},{key:`status`}],entries:[{data:{version:{type:X.inlineCode,code:`v3.14.2`},environment:{type:X.tag,text:`Production`,color:{variant:J.Positive}},date:{type:X.text,text:`2026-02-28`},duration:{type:X.text,text:`4m 22s`},status:{type:X.tag,text:`Success`,color:{variant:J.Positive}}}},{data:{version:{type:X.inlineCode,code:`v3.14.1`},environment:{type:X.tag,text:`Production`,color:{variant:J.Positive}},date:{type:X.text,text:`2026-02-25`},duration:{type:X.text,text:`3m 58s`},status:{type:X.tag,text:`Success`,color:{variant:J.Positive}}}},{data:{version:{type:X.inlineCode,code:`v3.14.0`},environment:{type:X.tag,text:`Staging`,color:{variant:J.Warning}},date:{type:X.text,text:`2026-02-24`},duration:{type:X.text,text:`5m 01s`},status:{type:X.tag,text:`Rolled Back`,color:{variant:J.Danger}}}},{data:{version:{type:X.inlineCode,code:`v3.13.9`},environment:{type:X.tag,text:`Production`,color:{variant:J.Positive}},date:{type:X.text,text:`2026-02-20`},duration:{type:X.text,text:`4m 10s`},status:{type:X.tag,text:`Success`,color:{variant:J.Positive}}}}]},{type:X.list,sectionTitle:`Pipeline Steps`,items:[{content:{type:X.text,text:`Lint and type check.`},icon:{type:X.icon,iconKey:$.CircleCheck.name,strokeColor:`green`}},{content:{type:X.text,text:`Unit and integration tests.`},icon:{type:X.icon,iconKey:$.CircleCheck.name,strokeColor:`green`}},{content:{type:X.text,text:`Build production bundle.`},icon:{type:X.icon,iconKey:$.CircleCheck.name,strokeColor:`green`}},{content:{type:X.text,text:`Deploy to staging.`},icon:{type:X.icon,iconKey:$.CircleCheck.name,strokeColor:`green`}},{content:{type:X.text,text:`E2E smoke tests.`},icon:{type:X.icon,iconKey:$.CircleCheck.name,strokeColor:`green`}},{content:{type:X.text,text:`Promote to production.`},icon:{type:X.icon,iconKey:$.CircleCheck.name,strokeColor:`green`}}]},{type:X.codeBlock,sectionTitle:`Pipeline Config Snippet`,syntax:`yaml`,code:`stages:
  - name: lint
    command: npm run lint
  - name: test
    command: npm test
    parallel: true
  - name: build
    command: npm run build
  - name: deploy-staging
    command: deploy --env staging
  - name: e2e
    command: npm run test:e2e
  - name: deploy-production
    command: deploy --env production
    requires: [e2e]`},{type:X.collapsible,sectionTitle:`Collapsible Details`,header:`Rollback Procedure`,content:[{type:X.text,text:`If a deployment fails health checks, the pipeline automatically triggers a rollback to the previous stable version.`},{type:X.codeBlock,syntax:`bash`,code:`#!/bin/bash
deploy rollback --env production --to-version $LAST_STABLE
notify --channel ops --message "Rollback initiated"`}]},{type:X.collapsible,header:`Environment Variables`,content:[{type:X.table,direction:bK.Horizontal,headers:[{key:`variable`},{key:`staging`},{key:`production`}],entries:[{data:{variable:{type:X.inlineCode,code:`NODE_ENV`},staging:{type:X.tag,text:`staging`,color:{variant:J.Warning}},production:{type:X.tag,text:`production`,color:{variant:J.Positive}}}},{data:{variable:{type:X.inlineCode,code:`LOG_LEVEL`},staging:{type:X.text,text:`debug`},production:{type:X.text,text:`warn`}}}]}]},{type:X.collapsible,header:`Post-Deploy Checklist`,content:[{type:X.list,items:[{content:{type:X.text,text:`Verify health check endpoints return 200.`},icon:{type:X.icon,iconKey:$.CircleCheck.name,strokeColor:`green`}},{content:{type:X.text,text:`Confirm error rate stays below 0.1% threshold.`},icon:{type:X.icon,iconKey:$.CircleAlert.name,strokeColor:`orange`}},{content:{type:X.text,text:`Monitor p99 latency for 15 minutes.`},icon:{type:X.icon,iconKey:$.CircleCheck.name,strokeColor:`green`}}]}]}]}],Vq=Eu({title:`Multi Card`,parent:hH,descriptionParagraphs:[`Multiple cards rendered together to demonstrate complex multi-card layouts.`],defineExamples({defineExample:e}){e({title:`three cards`,styles:V`
                :host {
                    max-width: 900px;
                }
            `,render(){return U`
                    <${Z.assign({data:Bq,options:{icons:$,useCardStyles:!0}})}></${Z}>
                `}}),e({title:`three cards phone size`,styles:V`
                :host {
                    max-width: 400px;
                }
            `,render(){return U`
                    <${Z.assign({data:Bq,options:{icons:$,useCardStyles:!0,isPhoneSize:!0,useDrawerForSources:!0}})}></${Z}>
                `}})}}),Hq=Eu({title:`Block Expansion`,parent:hH,descriptionParagraphs:[`Cards rendered with blockCardExpansion enabled, which forces all sections expanded and disables toggling.`],defineExamples({defineExample:e}){e({title:`all sections locked open`,styles:V`
                :host {
                    max-width: 900px;
                }
            `,render(){return U`
                    <${Z.assign({data:Bq,options:{icons:$,useCardStyles:!0,blockCardExpansion:!0}})}></${Z}>
                `}})}}),Uq=Eu({title:`Dense Data`,parent:hH,descriptionParagraphs:[`A single card packed with many sections, large tables, lists, code blocks, and markdown to stress-test rendering.`],defineExamples({defineExample:e}){e({title:`comprehensive product analysis`,styles:V`
                :host {
                    max-width: 900px;
                }
            `,render(){return U`
                    <${Z.assign({options:{icons:$,useCardStyles:!0},data:[{cardTitle:`Comprehensive Product Analysis`,sections:[{type:X.text,sectionTitle:`Executive Summary`,text:`This analysis covers product adoption, feature usage, customer feedback, technical debt, and roadmap progress across all three product lines.`,style:pK.Bold},{type:X.markdown,sectionTitle:`Adoption Trends`,markdown:`### Monthly Active Users

Growth has been **steady** across all tiers:

- **Free tier**: 14,200 MAU (+8% MoM)
- **Pro tier**: 3,800 MAU (+12% MoM)
- **Enterprise tier**: 420 MAU (+3% MoM)

### Retention

Day-7 retention: **68%** | Day-30 retention: **41%** | Day-90 retention: **28%**

> The largest drop-off occurs between day 7 and day 14, suggesting onboarding improvements could have significant impact.`},{type:X.table,sectionTitle:`Feature Usage Matrix`,direction:bK.Horizontal,headers:[{key:`feature`},{key:`freeTier`},{key:`proTier`},{key:`enterpriseTier`},{key:`satisfaction`},{key:`trend`}],entries:[{data:{feature:{type:X.text,text:`Dashboard`,style:pK.Bold},freeTier:{type:X.text,text:`92%`},proTier:{type:X.text,text:`97%`},enterpriseTier:{type:X.text,text:`99%`},satisfaction:{type:X.tag,text:`4.5 / 5`,color:{variant:J.Positive}},trend:{type:X.tag,text:`Stable`,color:{variant:J.Positive}}}},{data:{feature:{type:X.text,text:`Export (PDF/Image)`,style:pK.Bold},freeTier:{type:X.text,text:`34%`},proTier:{type:X.text,text:`78%`},enterpriseTier:{type:X.text,text:`91%`},satisfaction:{type:X.tag,text:`3.8 / 5`,color:{variant:J.Warning}},trend:{type:X.tag,text:`Growing`,color:{variant:J.Positive}}}},{data:{feature:{type:X.text,text:`API Access`,style:pK.Bold},freeTier:{type:X.text,text:`5%`},proTier:{type:X.text,text:`42%`},enterpriseTier:{type:X.text,text:`88%`},satisfaction:{type:X.tag,text:`4.1 / 5`,color:{variant:J.Positive}},trend:{type:X.tag,text:`Growing`,color:{variant:J.Positive}}}},{data:{feature:{type:X.text,text:`Collaboration`,style:pK.Bold},freeTier:{type:X.text,text:`18%`},proTier:{type:X.text,text:`61%`},enterpriseTier:{type:X.text,text:`95%`},satisfaction:{type:X.tag,text:`4.3 / 5`,color:{variant:J.Positive}},trend:{type:X.tag,text:`Stable`,color:{variant:J.Positive}}}},{data:{feature:{type:X.text,text:`Custom Themes`,style:pK.Bold},freeTier:{type:X.text,text:`0%`},proTier:{type:X.text,text:`29%`},enterpriseTier:{type:X.text,text:`67%`},satisfaction:{type:X.tag,text:`3.2 / 5`,color:{variant:J.Warning}},trend:{type:X.tag,text:`Declining`,color:{variant:J.Danger}}}},{data:{feature:{type:X.text,text:`Webhooks`,style:pK.Bold},freeTier:{type:X.text,text:`0%`},proTier:{type:X.text,text:`15%`},enterpriseTier:{type:X.text,text:`72%`},satisfaction:{type:X.tag,text:`4.0 / 5`,color:{variant:J.Positive}},trend:{type:X.tag,text:`Growing`,color:{variant:J.Positive}}}}]},{type:X.list,sectionTitle:`Customer Feedback Themes`,items:[{content:{type:X.text,text:`Export quality needs improvement (mentioned 47 times).`},icon:{type:X.icon,iconKey:$.CircleAlert.name,strokeColor:`orange`}},{content:{type:X.text,text:`Dashboard customization is highly valued (mentioned 82 times).`},icon:{type:X.icon,iconKey:$.Star.name,strokeColor:`gold`}},{content:{type:X.text,text:`API documentation could be more complete (mentioned 31 times).`},icon:{type:X.icon,iconKey:$.CircleAlert.name,strokeColor:`orange`}},{content:{type:X.text,text:`Real-time collaboration is a top-requested feature (mentioned 64 times).`},icon:{type:X.icon,iconKey:$.Star.name,strokeColor:`gold`}},{content:{type:X.text,text:`Mobile experience needs significant work (mentioned 28 times).`},icon:{type:X.icon,iconKey:$.CircleAlert.name,strokeColor:`red`}}]},{type:X.codeBlock,sectionTitle:`Top API Usage Pattern`,syntax:`typescript`,code:`import {createClient} from '@product/sdk';

const client = createClient({
    apiKey: process.env.PRODUCT_API_KEY,
    baseUrl: 'https://api.product.com/v2',
});

const report = await client.reports.create({
    title: 'Weekly Summary',
    sections: [
        {type: 'chart', dataSource: 'revenue'},
        {type: 'table', dataSource: 'transactions'},
        {type: 'text', content: 'Generated automatically.'},
    ],
    format: 'pdf',
});

await client.reports.export(report.id, {
    destination: 's3://reports-bucket/weekly/',
});`},{type:X.table,sectionTitle:`Technical Debt Inventory`,direction:bK.Horizontal,headers:[{key:`item`},{key:`severity`},{key:`age`},{key:`effort`},{key:`impact`}],entries:[{data:{item:{type:X.text,text:`Legacy auth middleware.`},severity:{type:X.tag,text:`High`,color:{variant:J.Danger}},age:{type:X.text,text:`18 months`},effort:{type:X.text,text:`3 sprints`},impact:{type:X.text,text:`Blocks SSO integration.`}}},{data:{item:{type:X.text,text:`Untyped API responses.`},severity:{type:X.tag,text:`Medium`,color:{variant:J.Warning}},age:{type:X.text,text:`12 months`},effort:{type:X.text,text:`2 sprints`},impact:{type:X.text,text:`Frequent runtime errors.`}}},{data:{item:{type:X.text,text:`Duplicated validation logic.`},severity:{type:X.tag,text:`Medium`,color:{variant:J.Warning}},age:{type:X.text,text:`9 months`},effort:{type:X.text,text:`1 sprint`},impact:{type:X.text,text:`Inconsistent error messages.`}}},{data:{item:{type:X.text,text:`Missing database indexes.`},severity:{type:X.tag,text:`High`,color:{variant:J.Danger}},age:{type:X.text,text:`6 months`},effort:{type:X.text,text:`0.5 sprint`},impact:{type:X.text,text:`Slow report generation.`}}},{data:{item:{type:X.text,text:`Outdated test fixtures.`},severity:{type:X.tag,text:`Low`,color:{custom:{backgroundColor:`#e0e0e0`,foregroundColor:`#333`}}},age:{type:X.text,text:`4 months`},effort:{type:X.text,text:`1 sprint`},impact:{type:X.text,text:`Reduced test reliability.`}}}]},{type:X.markdown,sectionTitle:`Roadmap Progress`,markdown:`### Q1 2026 Goals

| Goal | Status | Completion |
|------|--------|------------|
| SSO Integration | In Progress | 60% |
| Mobile App v1 | In Progress | 35% |
| API v3 | Planning | 10% |
| Export Overhaul | Complete | 100% |
| Webhook Reliability | Complete | 100% |

### Q2 2026 Planned

- Real-time collaboration MVP.
- Custom theme builder.
- Advanced analytics dashboard.
- Internationalization (i18n) support.`},{type:X.list,sectionTitle:`Key Risks`,items:[{content:{type:X.text,text:`SSO integration depends on legacy auth refactor completing first.`,style:pK.Bold},icon:{type:X.icon,iconKey:$.CircleAlert.name,strokeColor:`red`}},{content:{type:X.text,text:`Mobile app timeline may slip due to design resource constraints.`},icon:{type:X.icon,iconKey:$.CircleAlert.name,strokeColor:`orange`}},{content:{type:X.text,text:`API v3 design needs broader stakeholder input before implementation.`}},{content:{type:X.text,text:`Real-time collaboration requires WebSocket infrastructure not yet provisioned.`},icon:{type:X.icon,iconKey:$.CircleAlert.name,strokeColor:`orange`}}]},{type:X.text,sectionTitle:`Prepared By`,text:`Product & Engineering Team, March 2026.`,style:pK.Faint}]}]})}></${Z}>
                `}})}}),Wq=Eu({title:`Expand All`,parent:hH,descriptionParagraphs:[`Cards rendered with expandAllCards enabled, which starts all sections expanded but still allows toggling.`],defineExamples({defineExample:e}){e({title:`all sections start expanded`,styles:V`
                :host {
                    max-width: 900px;
                }
            `,render(){return U`
                    <${Z.assign({data:Bq,options:{icons:$,useCardStyles:!0,expandAllCards:!0}})}></${Z}>
                `}})}}),Gq=Eu({title:`Full Card`,parent:hH,descriptionParagraphs:[`Demos of VirStructuredRender with full StructuredRenderData (card arrays).`],defineExamples({defineExample:e}){e({title:`single card with many sections`,styles:V`
                :host {
                    max-width: 900px;
                }
            `,render(){return U`
                    <${Z.assign({options:{icons:$,useCardStyles:!0},data:[{cardTitle:`Project Health Report`,sections:[{type:X.text,sectionTitle:`Summary`,text:`Overall project health is good. Most metrics are within acceptable ranges, though a few areas require attention.`},{type:X.markdown,sectionTitle:`Key Findings`,markdown:`### Strengths

- **Code coverage** has improved from 72% to 89% over the past quarter.
- Build times remain under 3 minutes for the full suite.
- Zero critical vulnerabilities in the latest dependency audit.

### Areas for Improvement

1. Documentation coverage for public APIs is at 64%.
2. Integration test flakiness has risen to 4.2%.
3. Bundle size has grown 18% since the last review.`},{type:X.table,sectionTitle:`Module Metrics`,direction:bK.Horizontal,headers:[{key:`module`},{key:`coverage`},{key:`buildTime`},{key:`status`}],entries:[{data:{module:{type:X.text,text:`Core`},coverage:{type:X.inlineCode,code:`94%`},buildTime:{type:X.text,text:`42s`},status:{type:X.tag,text:`Healthy`,color:{variant:J.Positive}}}},{data:{module:{type:X.text,text:`Rendering`},coverage:{type:X.inlineCode,code:`88%`},buildTime:{type:X.text,text:`28s`},status:{type:X.tag,text:`Healthy`,color:{variant:J.Positive}}}},{data:{module:{type:X.text,text:`Data Layer`},coverage:{type:X.inlineCode,code:`71%`},buildTime:{type:X.text,text:`1m 14s`},status:{type:X.tag,text:`Needs Attention`,color:{variant:J.Warning}}}},{data:{module:{type:X.text,text:`CLI Tools`},coverage:{type:X.inlineCode,code:`82%`},buildTime:{type:X.text,text:`19s`},status:{type:X.tag,text:`Healthy`,color:{variant:J.Positive}}}}]},{type:X.codeBlock,sectionTitle:`Sample Config`,syntax:`json`,code:JSON.stringify({project:`structured-render`,coverageThreshold:80,maxBuildTimeSeconds:180,modules:[`core`,`rendering`,`data-layer`,`cli-tools`]},null,4)},{type:X.list,sectionTitle:`Action Items`,items:[{content:{type:X.text,text:`Increase data layer test coverage to 80%.`},icon:{type:X.icon,iconKey:$.CircleAlert.name,strokeColor:`orange`}},{content:{type:X.text,text:`Investigate and fix flaky integration tests.`},icon:{type:X.icon,iconKey:$.CircleAlert.name,strokeColor:`orange`}},{content:{type:X.text,text:`Audit bundle size and remove unused dependencies.`}},{content:{type:X.text,text:`Add missing JSDoc to public API functions.`}},{content:{type:X.text,text:`Schedule quarterly security review.`},icon:{type:X.icon,iconKey:$.CircleCheck.name,strokeColor:`green`}}]},{type:X.text,sectionTitle:`Next Review`,text:`Scheduled for Q3 2026.`,style:pK.Faint}]}]})}></${Z}>
                `}})}}),Kq=Eu({title:`No Card Styles`,parent:hH,descriptionParagraphs:[`Cards rendered without card wrapper styles. Cards stack flush with thin borders between them.`],defineExamples({defineExample:e}){e({title:`flat card list`,styles:V`
                :host {
                    max-width: 900px;
                }
            `,render(){return U`
                    <${Z.assign({options:{icons:$},data:Bq})}></${Z}>
                `}})}}),qq=Eu({title:`Examples`,parent:void 0,descriptionParagraphs:[`Examples of specific functionality.`]}),Jq=Eu({title:`Download`,parent:qq,descriptionParagraphs:[`Demonstrates downloading structured render data as a PDF.`],defineExamples({defineExample:e}){e({title:`download`,state(){return{isLoading:!1,isError:!1}},render({state:e,updateState:t}){return U`
                    <${mB.assign({text:`Download`,isDisabled:e.isLoading,icon:e.isError?dz(nz,24):e.isLoading?yB:void 0})}
                        ${H(`click`,async()=>{t({isLoading:!0});try{await zq(Bq,`structured-render-download.pdf`,{icons:$})}catch(e){Ml.error(`Failed to download PDF`,e),t({isError:!0})}finally{t({isLoading:!1})}})}
                    ></${mB}>
                `}})}});ZK({LucideCircleCheckIcon:EB,LucideStarIcon:kB});var Yq=[{sections:[{type:X.title,text:`Structured Render Demo`}]},{cardTitle:`Example Structured Render`,sections:[{type:X.text,sectionTitle:`Overview`,text:`This is an example of structured render data with multiple section types.`},{type:X.markdown,sectionTitle:`Features`,markdown:`## Highlights

- **Fast** rendering
- Supports multiple output formats
- Flexible section composition`},{type:X.codeBlock,sectionTitle:`Code Example`,syntax:`typescript`,code:`import {renderToPdf} from "structured-render";

const pdfBytes = await renderToPdf(data);`},{type:X.table,sectionTitle:`Comparison`,direction:bK.Horizontal,headers:[{key:`feature`},{key:`status`}],entries:[{data:{feature:{type:X.text,text:`Image Export`},status:{type:X.tag,text:`Supported`}}},{data:{feature:{type:X.text,text:`PDF Export`},status:{type:X.tag,text:`Supported`}}}]},{type:X.list,sectionTitle:`Quick Notes`,items:[{content:{type:X.text,text:`Runs in Node.js`},icon:{type:X.icon,iconKey:EB.name,strokeColor:`green`}},{content:{type:X.text,text:`Outputs PNG`,style:pK.Small}},{content:[{type:X.text,text:`Multiple output formats:`},{type:X.tag,text:`PDF`,color:{variant:J.Positive}},{type:X.text,text:`Generates high-quality vector PDF documents suitable for printing.`}],icon:{type:X.icon,iconKey:EB.name,strokeColor:`green`}}]},{type:X.icon,iconKey:kB.name,strokeColor:`yellow`}]}],Xq=Eu({title:`Example Card Comparison`,parent:qq,descriptionParagraphs:[`Renders exampleCard for visual comparison against the PDF screenshot test output.`],defineExamples({defineExample:e}){e({title:`exampleCard`,styles:V`
                :host {
                    max-width: 900px;
                }
            `,render(){return U`
                    <${Z.assign({options:{icons:$},data:Yq})}></${Z}>
                `}})}}),Zq=Eu({title:`Expandable Source`,parent:qq,descriptionParagraphs:[`Demonstrates VirExpandableSource, a self-contained element that renders a source icon button which expands to reveal source details.`],defineExamples({defineExample:e}){e({title:`single source`,styles:V`
                :host {
                    max-width: 400px;
                }
            `,render(){return U`
                    <${XK.assign({sources:{type:X.source,fileName:`example.pdf`,pageNumbers:[3],fileBoundingBoxes:null,quote:`This is a quoted passage from the source document.`}})}>
                        <span>Some content with a source</span>
                    </${XK}>
                `}}),e({title:`multiple sources`,styles:V`
                :host {
                    max-width: 400px;
                }
            `,render(){return U`
                    <${XK.assign({sources:[{type:X.source,fileName:`report.pdf`,pageNumbers:[1,2],fileBoundingBoxes:null,quote:`First source quote.`},{type:X.source,fileName:`notes.pdf`,pageNumbers:[5],fileBoundingBoxes:null,quote:`Second source quote.`}]})}>
                        <span>Content with multiple sources</span>
                    </${XK}>
                `}}),e({title:`without quote`,styles:V`
                :host {
                    max-width: 400px;
                }
            `,render(){return U`
                    <${XK.assign({sources:{type:X.source,fileName:`data.csv`,pageNumbers:null,fileBoundingBoxes:null,quote:null}})}>
                        <span>Content with a file-only source</span>
                    </${XK}>
                `}})}}),Qq=Eu({title:`Sections`,parent:void 0,descriptionParagraphs:[`All structured render section types.`]}),$q=Eu({title:`Code Block`,parent:Qq,defineExamples({defineExample:e}){e({title:`basic`,render(){return U`
                    <${Z.assign({options:{icons:{},useCardStyles:!0},data:{type:X.codeBlock,sectionTitle:`Code Block Example`,code:`const hello = "world";
console.log(hello);`,syntax:`typescript`}})}></${Z}>
                `}}),e({title:`no syntax`,render(){return U`
                    <${Z.assign({options:{icons:{},useCardStyles:!0},data:{type:X.codeBlock,code:`plain text code block
with multiple lines`,syntax:null}})}></${Z}>
                `}})}}),eJ=`This is a longer block of text that demonstrates how the copy card renders multi-line content. The copy button on the top right writes the full text to the clipboard and briefly flips its label to confirm the copy succeeded. Provide an optional header above to label the contents of the card.`,tJ=[$q,Eu({title:`Copy Card`,parent:Qq,defineExamples({defineExample:e}){e({title:`with header`,render(){return U`
                    <${Z.assign({options:{icons:{},useCardStyles:!0},data:{type:X.copyCard,header:`Example Header`,text:eJ}})}></${Z}>
                `}}),e({title:`without header`,render(){return U`
                    <${Z.assign({options:{icons:{},useCardStyles:!0},data:{type:X.copyCard,text:`A short snippet of copyable text without a heading.`}})}></${Z}>
                `}}),e({title:`copy disabled`,render(){return U`
                    <${Z.assign({options:{icons:{},useCardStyles:!0},data:{type:X.copyCard,header:`Read-only Block`,text:`This card hides the copy button.`,disableCopy:!0}})}></${Z}>
                `}})}}),Eu({title:`Empty`,parent:Qq,defineExamples({defineExample:e}){e({title:`empty`,render(){return U`
                    <${Z.assign({options:{icons:{},useCardStyles:!0},data:{type:X.empty}})}></${Z}>
                `}})}}),Eu({title:`Icon`,parent:Qq,defineExamples({defineExample:e}){e({title:`basic`,render(){return U`
                    <${Z.assign({options:{icons:$,useCardStyles:!0},data:{type:X.icon,iconKey:$.Star.name}})}></${Z}>
                `}}),e({title:`colored stroke`,render(){return U`
                    <${Z.assign({options:{icons:$,useCardStyles:!0},data:{type:X.icon,iconKey:$.Star.name,strokeColor:`gold`}})}></${Z}>
                `}}),e({title:`colored fill`,render(){return U`
                    <${Z.assign({options:{icons:$,useCardStyles:!0},data:{type:X.icon,iconKey:$.CircleCheck.name,fillColor:`lime`}})}></${Z}>
                `}})}}),Eu({title:`Inline Code`,parent:Qq,defineExamples({defineExample:e}){e({title:`basic`,render(){return U`
                    <${Z.assign({options:{icons:{},useCardStyles:!0},data:{type:X.inlineCode,sectionTitle:`Inline Code Example`,code:`const x = 42;`}})}></${Z}>
                `}})}}),Eu({title:`List`,parent:Qq,defineExamples({defineExample:e}){e({title:`basic`,render(){return U`
                    <${Z.assign({options:{icons:$,useCardStyles:!0},data:{type:X.list,sectionTitle:`List Example`,items:[{content:{type:X.text,text:`First item`}},{content:{type:X.text,text:`Second item`}},{content:{type:X.text,text:`Third item`}}]}})}></${Z}>
                `}}),e({title:`with icons`,render(){return U`
                    <${Z.assign({options:{icons:$,useCardStyles:!0},data:{type:X.list,sectionTitle:`List with Icons`,items:[{content:{type:X.text,text:`Completed task`},icon:{type:X.icon,iconKey:$.CircleCheck.name,strokeColor:`green`}},{content:{type:X.text,text:`Another completed task`},icon:{type:X.icon,iconKey:$.CircleCheck.name,strokeColor:`green`}}]}})}></${Z}>
                `}}),e({title:`with tags`,render(){return U`
                    <${Z.assign({options:{icons:$,useCardStyles:!0},data:{type:X.list,sectionTitle:`List with Tags`,items:[{content:{type:X.tag,text:`Important`,color:{variant:J.Warning}}},{content:{type:X.tag,text:`Info`}}]}})}></${Z}>
                `}})}}),Eu({title:`Markdown`,parent:Qq,defineExamples({defineExample:e}){e({title:`basic`,render(){return U`
                    <${Z.assign({options:{icons:{},useCardStyles:!0},data:{type:X.markdown,sectionTitle:`Markdown Example`,markdown:`## Hello World

This is **bold** and _italic_ text.

- Item 1
- Item 2
- Item 3`}})}></${Z}>
                `}}),e({title:`with ordered list`,render(){return U`
                    <${Z.assign({options:{icons:{},useCardStyles:!0},data:{type:X.markdown,sectionTitle:`Ordered List Example`,markdown:`1. **False Positives**: Name and DOB matches may not always indicate the same patient.
2. **Data Currency**: Registry data may lag behind real-time clinical status.
3. **Legal Compliance**: Ensure all data sharing follows applicable regulations.`}})}></${Z}>
                `}}),e({title:`with code`,render(){return U`
                    <${Z.assign({options:{icons:{},useCardStyles:!0},data:{type:X.markdown,sectionTitle:`Markdown with Code`,markdown:"### Code Example\n\nHere is some `inline code` and a code block:\n\n```typescript\nconst x = 42;\n```"}})}></${Z}>
                `}}),e({title:`with anchor links into closed details`,render(){return U`
                    <${Z.assign({options:{icons:{},useCardStyles:!0},data:{type:X.markdown,sectionTitle:`Garden Survey Insights`,markdown:`# Garden Survey Insights

Reviewed 2 of 2 pages from the spring garden survey on 2000-01-01.

<details open>
<summary>Recorded plants</summary>

| Plant           | Bed          | Status     | Evidence           |
| --------------- | ------------ | ---------- | ------------------ |
| Tomato          | North bed    | recorded   | [**1**](#source-1) |
| Basil           | Herb spiral  | recorded   | [**2**](#source-2) |
| Climbing squash | _unassigned_ | unassigned | [**3**](#source-3) |

Tomatoes were recorded from the planting log. No bed is assigned for the squash because the trellis location is not noted.

</details>

<details open>
<summary>Flags for review</summary>

### Possible missing plant: ground cover

The notes describe a low green mat along the path, and the plant list does not explain it. Weeding along the path already appears on the task list.

**Action:** ask the gardener whether the mat is a planted ground cover. [**4**](#source-4)

### Watering without a matching plant: shade bed

A daily watering schedule is listed for the shade bed, with no plant on the list growing there.

**Action:** confirm what the shade bed watering is for. [**5**](#source-5)

</details>

<details>
<summary>Sources</summary>

### Source 1

**survey.pdf**, page 1

> Tomato seedlings planted in the north bed.

### Source 2

**survey.pdf**, page 1

> Basil thriving in the herb spiral.

### Source 3

**survey.pdf**, page 2

> Squash vines climbing somewhere near the fence.

### Source 4

**survey.pdf**, page 2

> Low green mat spreading along the stone path.

### Source 5

**survey.pdf**, page 2

> Shade bed watered daily at dawn.

${nl(60,e=>`### Source ${e+6}\n\n**survey.pdf**, page 2\n\n> Filler note.\n\n`).join(``)}
</details>`}})}></${Z}>
                `}}),e({title:`with Markdown file upload`,render(){return U`
                    <${Z.assign({data:{type:X.markdown,sectionTitle:`Markdown File Upload`,markdown:`## Upload a Markdown file

Choose a local \`.md\` file to replace this content.`},options:{icons:{},devDebug:!0,useCardStyles:!0}})}></${Z}>
                `}})}}),Eu({title:`Processing`,parent:Qq,defineExamples({defineExample:e}){e({title:`basic`,render(){return U`
                    <${Z.assign({options:{icons:{},useCardStyles:!0},data:{type:X.processing}})}></${Z}>
                `}})}}),Eu({title:`Source`,parent:Qq,defineExamples({defineExample:e}){e({title:`with file name`,render(){return U`
                    <${Z.assign({options:{icons:{},useCardStyles:!0},data:{type:X.source,fileName:`example.ts`,pageNumbers:null,fileBoundingBoxes:null,quote:null}})}></${Z}>
                `}}),e({title:`with quote`,render(){return U`
                    <${Z.assign({options:{icons:{},useCardStyles:!0},data:{type:X.source,fileName:`document.pdf`,pageNumbers:[1,2],fileBoundingBoxes:null,quote:`This is the relevant quote from the source document.`}})}></${Z}>
                `}}),e({title:`with page numbers`,render(){return U`
                    <${Z.assign({options:{icons:{},useCardStyles:!0},data:{type:X.source,fileName:`report.pdf`,pageNumbers:[5,10,15],fileBoundingBoxes:null,quote:null}})}></${Z}>
                `}})}}),Eu({title:`Table`,parent:Qq,defineExamples({defineExample:e}){e({title:`horizontal`,render(){return U`
                    <${Z.assign({options:{icons:{},useCardStyles:!0},data:{type:X.table,sectionTitle:`Horizontal Table`,direction:bK.Horizontal,headers:[{key:`name`},{key:`value`}],entries:[{data:{name:{type:X.text,text:`Alpha`},value:{type:X.text,text:`100`}}},{data:{name:{type:X.text,text:`Beta`},value:{type:X.text,text:`200`}}}]}})}></${Z}>
                `}}),e({title:`vertical`,render(){return U`
                    <${Z.assign({options:{icons:{},useCardStyles:!0},data:{type:X.table,sectionTitle:`Vertical Table`,direction:bK.Vertical,headers:[{key:`feature`},{key:`status`}],entries:[{data:{feature:{type:X.text,text:`Image Export`},status:{type:X.tag,text:`Supported`}}},{data:{feature:{type:X.text,text:`PDF Export`},status:{type:X.tag,text:`Beta`}}}]}})}></${Z}>
                `}}),e({title:`horizontal table with phone size`,render(){return U`
                    <div
                        style=${V`
                            width: 400px;
                        `}
                    >
                        <${Z.assign({data:{type:X.table,sectionTitle:`Horizontal Table (Phone)`,direction:bK.Horizontal,headers:[{key:`name`},{key:`value`},{key:`status`}],entries:[{data:{name:{type:X.text,text:`Alpha`},value:{type:X.text,text:`100`},status:{type:X.tag,text:`Active`,color:{variant:J.Positive}}}},{data:{name:{type:X.text,text:`Beta`},value:{type:X.text,text:`200`},status:{type:X.tag,text:`Inactive`,color:{variant:J.Warning}}}}]},options:{icons:{},useCardStyles:!0,isPhoneSize:!0,useDrawerForSources:!0}})}></${Z}>
                    </div>
                `}}),e({title:`with mixed cell types`,render(){return U`
                    <${Z.assign({options:{icons:{},useCardStyles:!0},data:{type:X.table,sectionTitle:`Mixed Cell Types`,direction:bK.Horizontal,headers:[{key:`label`},{key:`detail`}],entries:[{data:{label:{type:X.text,text:`Status`},detail:{type:X.tag,text:`Active`,color:{variant:J.Positive}}}},{data:{label:{type:X.text,text:`Version`},detail:{type:X.inlineCode,code:`v1.0.0`}}}]}})}></${Z}>
                `}})}}),Eu({title:`Tag`,parent:Qq,defineExamples({defineExample:e}){e({title:`basic`,render(){return U`
                    <${Z.assign({options:{icons:{},useCardStyles:!0},data:{type:X.tag,sectionTitle:`Tag Example`,text:`Default Tag`}})}></${Z}>
                `}}),e({title:`custom colors`,render(){return U`
                    <${Z.assign({options:{icons:{},useCardStyles:!0},data:{type:X.tag,text:`Custom Colors`,color:{custom:{backgroundColor:`#e74c3c`,foregroundColor:`#ffffff`}}}})}></${Z}>
                `}}),e({title:`big tag`,render(){return U`
                    <${Z.assign({options:{icons:{},useCardStyles:!0},data:{type:X.tag,text:`Big Tag`,useBigTag:!0}})}></${Z}>
                `}})}}),Eu({title:`Text`,parent:Qq,defineExamples({defineExample:e}){e({title:`basic`,render(){return U`
                    <${Z.assign({options:{icons:$,useCardStyles:!0},data:{type:X.text,sectionTitle:`Text Example`,text:`This is a simple text section.`}})}></${Z}>
                `}}),e({title:`bold`,render(){return U`
                    <${Z.assign({options:{icons:$,useCardStyles:!0},data:{type:X.text,text:`Bold text section.`,style:pK.Bold}})}></${Z}>
                `}}),e({title:`small`,render(){return U`
                    <${Z.assign({options:{icons:$,useCardStyles:!0},data:{type:X.text,text:`Small text section.`,style:pK.Small}})}></${Z}>
                `}}),e({title:`faint`,render(){return U`
                    <${Z.assign({options:{icons:$,useCardStyles:!0},data:{type:X.text,text:`Faint text section.`,style:pK.Faint}})}></${Z}>
                `}}),e({title:`with icon`,render(){return U`
                    <${Z.assign({options:{icons:$,useCardStyles:!0},data:{type:X.text,text:`Text with icon.`,icon:{type:X.icon,iconKey:$.Star.name,strokeColor:`gold`}}})}></${Z}>
                `}})}}),Gq,Vq,Uq,Hq,Wq,Kq,Jq,Xq,Zq,hH,qq,Qq];BF()({tagName:`vir-app`,styles:V`
        :host {
            display: flex;
            flex-grow: 1;
        }

        ${mH} {
            flex-grow: 1;
        }

        p {
            ${ER}
            text-align: center;
            font-size: 32px;
            font-weight: bold;
            padding: 0 8px;
            padding-bottom: 8px;
        }
    `,render(){return U`
            <${mH.assign({pages:tJ,internalRouterConfig:{useInternalRouter:!0,basePath:`structured-render/demo`}})}>
                <p slot=${mH.slotNames[`element-book-app-nav-header`]}>
                    Structured
                    <br />
                    Render
                </p>
            </${mH}>
        `}});