const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D7L4Zgv5.js","assets/html2canvas.esm-DXEQVQnt.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var ur;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(ur||(ur={}));function Nd(e,t=r=>r){const r=new Map;return e.filter(n=>{const i=t(n);return r.get(i)?!1:(r.set(i,n),!0)})}class Xm{diff(t,r,n={}){let i;typeof n=="function"?(i=n,n={}):"callback"in n&&(i=n.callback);const o=this.castInput(t,n),s=this.castInput(r,n),a=this.removeEmpty(this.tokenize(o,n)),l=this.removeEmpty(this.tokenize(s,n));return this.diffWithOptionsObj(a,l,n,i)}diffWithOptionsObj(t,r,n,i){var o;const s=D=>{if(D=this.postProcess(D,n),i){setTimeout(function(){i(D)},0);return}else return D},a=r.length,l=t.length;let u=1,d=a+l;n.maxEditLength!=null&&(d=Math.min(d,n.maxEditLength));const f=(o=n.timeout)!==null&&o!==void 0?o:1/0,h=Date.now()+f,g=[{oldPos:-1,lastComponent:void 0}];let m=this.extractCommon(g[0],r,t,0,n);if(g[0].oldPos+1>=l&&m+1>=a)return s(this.buildValues(g[0].lastComponent,r,t));let b=-1/0,k=1/0;const x=()=>{for(let D=Math.max(b,-u);D<=Math.min(k,u);D+=2){let C;const P=g[D-1],O=g[D+1];P&&(g[D-1]=void 0);let H=!1;if(O){const ie=O.oldPos-D;H=O&&0<=ie&&ie<a}const ee=P&&P.oldPos+1<l;if(!H&&!ee){g[D]=void 0;continue}if(!ee||H&&P.oldPos<O.oldPos?C=this.addToPath(O,!0,!1,0,n):C=this.addToPath(P,!1,!0,1,n),m=this.extractCommon(C,r,t,D,n),C.oldPos+1>=l&&m+1>=a)return s(this.buildValues(C.lastComponent,r,t))||!0;g[D]=C,C.oldPos+1>=l&&(k=Math.min(k,D-1)),m+1>=a&&(b=Math.max(b,D+1))}u++};if(i)(function D(){setTimeout(function(){if(u>d||Date.now()>h)return i(void 0);x()||D()},0)})();else for(;u<=d&&Date.now()<=h;){const D=x();if(D)return D}}addToPath(t,r,n,i,o){const s=t.lastComponent;return s&&!o.oneChangePerToken&&s.added===r&&s.removed===n?{oldPos:t.oldPos+i,lastComponent:{count:s.count+1,added:r,removed:n,previousComponent:s.previousComponent}}:{oldPos:t.oldPos+i,lastComponent:{count:1,added:r,removed:n,previousComponent:s}}}extractCommon(t,r,n,i,o){const s=r.length,a=n.length;let l=t.oldPos,u=l-i,d=0;for(;u+1<s&&l+1<a&&this.equals(n[l+1],r[u+1],o);)u++,l++,d++,o.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return d&&!o.oneChangePerToken&&(t.lastComponent={count:d,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=l,u}equals(t,r,n){return n.comparator?n.comparator(t,r):t===r||!!n.ignoreCase&&t.toLowerCase()===r.toLowerCase()}removeEmpty(t){const r=[];for(let n=0;n<t.length;n++)t[n]&&r.push(t[n]);return r}castInput(t,r){return t}tokenize(t,r){return Array.from(t)}join(t){return t.join("")}postProcess(t,r){return t}get useLongestToken(){return!1}buildValues(t,r,n){const i=[];let o;for(;t;)i.push(t),o=t.previousComponent,delete t.previousComponent,t=o;i.reverse();const s=i.length;let a=0,l=0,u=0;for(;a<s;a++){const d=i[a];if(d.removed)d.value=this.join(n.slice(u,u+d.count)),u+=d.count;else{if(!d.added&&this.useLongestToken){let f=r.slice(l,l+d.count);f=f.map(function(h,g){const m=n[u+g];return m.length>h.length?m:h}),d.value=this.join(f)}else d.value=this.join(r.slice(l,l+d.count));l+=d.count,d.added||(u+=d.count)}}return i}}function Eb(e,t){let r;for(r=0;r<e.length&&r<t.length;r++)if(e[r]!=t[r])return e.slice(0,r);return e.slice(0,r)}function Cb(e,t){let r;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(r=0;r<e.length&&r<t.length;r++)if(e[e.length-(r+1)]!=t[t.length-(r+1)])return e.slice(-r);return e.slice(-r)}function R0(e,t,r){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return r+e.slice(t.length)}function B0(e,t,r){if(!t)return e+r;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+r}function ll(e,t){return R0(e,t,"")}function Xu(e,t){return B0(e,t,"")}function Sb(e,t){return t.slice(0,V3(e,t))}function V3(e,t){let r=0;e.length>t.length&&(r=e.length-t.length);let n=t.length;e.length<t.length&&(n=e.length);const i=Array(n);let o=0;i[0]=0;for(let s=1;s<n;s++){for(t[s]==t[o]?i[s]=i[o]:i[s]=o;o>0&&t[s]!=t[o];)o=i[o];t[s]==t[o]&&o++}o=0;for(let s=r;s<e.length;s++){for(;o>0&&e[s]!=t[o];)o=i[o];e[s]==t[o]&&o++}return o}function ul(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function to(e){const t=e.match(/^\s*/);return t?t[0]:""}const jc="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",K3=new RegExp(`[${jc}]+|\\s+|[^${jc}]`,"ug");class H3 extends Xm{equals(t,r,n){return n.ignoreCase&&(t=t.toLowerCase(),r=r.toLowerCase()),t.trim()===r.trim()}tokenize(t,r={}){let n;if(r.intlSegmenter){const s=r.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=[];for(const a of Array.from(s.segment(t))){const l=a.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(l)?n[n.length-1]+=l:n.push(l)}}else n=t.match(K3)||[];const i=[];let o=null;return n.forEach(s=>{/\s/.test(s)?o==null?i.push(s):i.push(i.pop()+s):o!=null&&/\s/.test(o)?i[i.length-1]==o?i.push(i.pop()+s):i.push(o+s):i.push(s),o=s}),i}join(t){return t.map((r,n)=>n==0?r:r.replace(/^\s+/,"")).join("")}postProcess(t,r){if(!t||r.oneChangePerToken)return t;let n=null,i=null,o=null;return t.forEach(s=>{s.added?i=s:s.removed?o=s:((i||o)&&Tb(n,o,i,s),n=s,i=null,o=null)}),(i||o)&&Tb(n,o,i,null),t}}const G3=new H3;function Z3(e,t,r){return r?.ignoreWhitespace!=null&&!r.ignoreWhitespace?X3(e,t,r):G3.diff(e,t,r)}function Tb(e,t,r,n){if(t&&r){const i=to(t.value),o=ul(t.value),s=to(r.value),a=ul(r.value);if(e){const l=Eb(i,s);e.value=B0(e.value,s,l),t.value=ll(t.value,l),r.value=ll(r.value,l)}if(n){const l=Cb(o,a);n.value=R0(n.value,a,l),t.value=Xu(t.value,l),r.value=Xu(r.value,l)}}else if(r){if(e){const i=to(r.value);r.value=r.value.substring(i.length)}if(n){const i=to(n.value);n.value=n.value.substring(i.length)}}else if(e&&n){const i=to(n.value),o=to(t.value),s=ul(t.value),a=Eb(i,o);t.value=ll(t.value,a);const l=Cb(ll(i,a),s);t.value=Xu(t.value,l),n.value=R0(n.value,i,l),e.value=B0(e.value,i,i.slice(0,i.length-l.length))}else if(n){const i=to(n.value),o=ul(t.value),s=Sb(o,i);t.value=Xu(t.value,s)}else if(e){const i=ul(e.value),o=to(t.value),s=Sb(i,o);t.value=ll(t.value,s)}}class Y3 extends Xm{tokenize(t){const r=new RegExp(`(\\r?\\n)|[${jc}]+|[^\\S\\n\\r]+|[^${jc}]`,"ug");return t.match(r)||[]}}const J3=new Y3;function X3(e,t,r){return J3.diff(e,t,r)}class Q3 extends Xm{constructor(){super(...arguments),this.tokenize=r4}equals(t,r,n){return n.ignoreWhitespace?((!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!n.newlineIsToken||!r.includes(`
`))&&(r=r.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),r.endsWith(`
`)&&(r=r.slice(0,-1))),super.equals(t,r,n)}}const e4=new Q3;function t4(e,t,r){return e4.diff(e,t,r)}function r4(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const r=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let i=0;i<n.length;i++){const o=n[i];i%2&&!t.newlineIsToken?r[r.length-1]+=o:r.push(o)}return r}function Mb(e,t){return M2(e,new Map)}function M2(e,t,r){if(e&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object){if(t.has(e))return t.get(e);const n={};return t.set(e,n),Object.entries(e).sort((i,o)=>i[0].localeCompare(o[0])).forEach(([i,o])=>{const s=M2(o,t);n[i]=s}),n}else return e}var n4=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,i4=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,o4=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,oh={Space_Separator:n4,ID_Start:i4,ID_Continue:o4},$t={isSpaceSeparator(e){return typeof e=="string"&&oh.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||oh.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||oh.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let L0,Ir,_i,zc,wo,Qn,Yt,Qm,jl;var s4=function(t,r){L0=String(t),Ir="start",_i=[],zc=0,wo=1,Qn=0,Yt=void 0,Qm=void 0,jl=void 0;do Yt=a4(),c4[Ir]();while(Yt.type!=="eof");return typeof r=="function"?_0({"":jl},"",r):jl};function _0(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let i=0;i<n.length;i++){const o=String(i),s=_0(n,o,r);s===void 0?delete n[o]:Object.defineProperty(n,o,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const i in n){const o=_0(n,i,r);o===void 0?delete n[i]:Object.defineProperty(n,i,{value:o,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}let De,we,Tl,Ni,Ie;function a4(){for(De="default",we="",Tl=!1,Ni=1;;){Ie=Hi();const e=F2[De]();if(e)return e}}function Hi(){if(L0[zc])return String.fromCodePoint(L0.codePointAt(zc))}function N(){const e=Hi();return e===`
`?(wo++,Qn=0):e?Qn+=e.length:Qn++,e&&(zc+=e.length),e}const F2={default(){switch(Ie){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":N();return;case"/":N(),De="comment";return;case void 0:return N(),at("eof")}if($t.isSpaceSeparator(Ie)){N();return}return F2[Ir]()},comment(){switch(Ie){case"*":N(),De="multiLineComment";return;case"/":N(),De="singleLineComment";return}throw lt(N())},multiLineComment(){switch(Ie){case"*":N(),De="multiLineCommentAsterisk";return;case void 0:throw lt(N())}N()},multiLineCommentAsterisk(){switch(Ie){case"*":N();return;case"/":N(),De="default";return;case void 0:throw lt(N())}N(),De="multiLineComment"},singleLineComment(){switch(Ie){case`
`:case"\r":case"\u2028":case"\u2029":N(),De="default";return;case void 0:return N(),at("eof")}N()},value(){switch(Ie){case"{":case"[":return at("punctuator",N());case"n":return N(),zo("ull"),at("null",null);case"t":return N(),zo("rue"),at("boolean",!0);case"f":return N(),zo("alse"),at("boolean",!1);case"-":case"+":N()==="-"&&(Ni=-1),De="sign";return;case".":we=N(),De="decimalPointLeading";return;case"0":we=N(),De="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":we=N(),De="decimalInteger";return;case"I":return N(),zo("nfinity"),at("numeric",1/0);case"N":return N(),zo("aN"),at("numeric",NaN);case'"':case"'":Tl=N()==='"',we="",De="string";return}throw lt(N())},identifierNameStartEscape(){if(Ie!=="u")throw lt(N());N();const e=j0();switch(e){case"$":case"_":break;default:if(!$t.isIdStartChar(e))throw Fb();break}we+=e,De="identifierName"},identifierName(){switch(Ie){case"$":case"_":case"‌":case"‍":we+=N();return;case"\\":N(),De="identifierNameEscape";return}if($t.isIdContinueChar(Ie)){we+=N();return}return at("identifier",we)},identifierNameEscape(){if(Ie!=="u")throw lt(N());N();const e=j0();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!$t.isIdContinueChar(e))throw Fb();break}we+=e,De="identifierName"},sign(){switch(Ie){case".":we=N(),De="decimalPointLeading";return;case"0":we=N(),De="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":we=N(),De="decimalInteger";return;case"I":return N(),zo("nfinity"),at("numeric",Ni*(1/0));case"N":return N(),zo("aN"),at("numeric",NaN)}throw lt(N())},zero(){switch(Ie){case".":we+=N(),De="decimalPoint";return;case"e":case"E":we+=N(),De="decimalExponent";return;case"x":case"X":we+=N(),De="hexadecimal";return}return at("numeric",Ni*0)},decimalInteger(){switch(Ie){case".":we+=N(),De="decimalPoint";return;case"e":case"E":we+=N(),De="decimalExponent";return}if($t.isDigit(Ie)){we+=N();return}return at("numeric",Ni*Number(we))},decimalPointLeading(){if($t.isDigit(Ie)){we+=N(),De="decimalFraction";return}throw lt(N())},decimalPoint(){switch(Ie){case"e":case"E":we+=N(),De="decimalExponent";return}if($t.isDigit(Ie)){we+=N(),De="decimalFraction";return}return at("numeric",Ni*Number(we))},decimalFraction(){switch(Ie){case"e":case"E":we+=N(),De="decimalExponent";return}if($t.isDigit(Ie)){we+=N();return}return at("numeric",Ni*Number(we))},decimalExponent(){switch(Ie){case"+":case"-":we+=N(),De="decimalExponentSign";return}if($t.isDigit(Ie)){we+=N(),De="decimalExponentInteger";return}throw lt(N())},decimalExponentSign(){if($t.isDigit(Ie)){we+=N(),De="decimalExponentInteger";return}throw lt(N())},decimalExponentInteger(){if($t.isDigit(Ie)){we+=N();return}return at("numeric",Ni*Number(we))},hexadecimal(){if($t.isHexDigit(Ie)){we+=N(),De="hexadecimalInteger";return}throw lt(N())},hexadecimalInteger(){if($t.isHexDigit(Ie)){we+=N();return}return at("numeric",Ni*Number(we))},string(){switch(Ie){case"\\":N(),we+=l4();return;case'"':if(Tl)return N(),at("string",we);we+=N();return;case"'":if(!Tl)return N(),at("string",we);we+=N();return;case`
`:case"\r":throw lt(N());case"\u2028":case"\u2029":d4(Ie);break;case void 0:throw lt(N())}we+=N()},start(){switch(Ie){case"{":case"[":return at("punctuator",N())}De="value"},beforePropertyName(){switch(Ie){case"$":case"_":we=N(),De="identifierName";return;case"\\":N(),De="identifierNameStartEscape";return;case"}":return at("punctuator",N());case'"':case"'":Tl=N()==='"',De="string";return}if($t.isIdStartChar(Ie)){we+=N(),De="identifierName";return}throw lt(N())},afterPropertyName(){if(Ie===":")return at("punctuator",N());throw lt(N())},beforePropertyValue(){De="value"},afterPropertyValue(){switch(Ie){case",":case"}":return at("punctuator",N())}throw lt(N())},beforeArrayValue(){if(Ie==="]")return at("punctuator",N());De="value"},afterArrayValue(){switch(Ie){case",":case"]":return at("punctuator",N())}throw lt(N())},end(){throw lt(N())}};function at(e,t){return{type:e,value:t,line:wo,column:Qn}}function zo(e){for(const t of e){if(Hi()!==t)throw lt(N());N()}}function l4(){switch(Hi()){case"b":return N(),"\b";case"f":return N(),"\f";case"n":return N(),`
`;case"r":return N(),"\r";case"t":return N(),"	";case"v":return N(),"\v";case"0":if(N(),$t.isDigit(Hi()))throw lt(N());return"\0";case"x":return N(),u4();case"u":return N(),j0();case`
`:case"\u2028":case"\u2029":return N(),"";case"\r":return N(),Hi()===`
`&&N(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw lt(N());case void 0:throw lt(N())}return N()}function u4(){let e="",t=Hi();if(!$t.isHexDigit(t)||(e+=N(),t=Hi(),!$t.isHexDigit(t)))throw lt(N());return e+=N(),String.fromCodePoint(parseInt(e,16))}function j0(){let e="",t=4;for(;t-- >0;){const r=Hi();if(!$t.isHexDigit(r))throw lt(N());e+=N()}return String.fromCodePoint(parseInt(e,16))}const c4={start(){if(Yt.type==="eof")throw Uo();sh()},beforePropertyName(){switch(Yt.type){case"identifier":case"string":Qm=Yt.value,Ir="afterPropertyName";return;case"punctuator":Qu();return;case"eof":throw Uo()}},afterPropertyName(){if(Yt.type==="eof")throw Uo();Ir="beforePropertyValue"},beforePropertyValue(){if(Yt.type==="eof")throw Uo();sh()},beforeArrayValue(){if(Yt.type==="eof")throw Uo();if(Yt.type==="punctuator"&&Yt.value==="]"){Qu();return}sh()},afterPropertyValue(){if(Yt.type==="eof")throw Uo();switch(Yt.value){case",":Ir="beforePropertyName";return;case"}":Qu()}},afterArrayValue(){if(Yt.type==="eof")throw Uo();switch(Yt.value){case",":Ir="beforeArrayValue";return;case"]":Qu()}},end(){}};function sh(){let e;switch(Yt.type){case"punctuator":switch(Yt.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=Yt.value;break}if(jl===void 0)jl=e;else{const t=_i[_i.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,Qm,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")_i.push(e),Array.isArray(e)?Ir="beforeArrayValue":Ir="beforePropertyName";else{const t=_i[_i.length-1];t==null?Ir="end":Array.isArray(t)?Ir="afterArrayValue":Ir="afterPropertyValue"}}function Qu(){_i.pop();const e=_i[_i.length-1];e==null?Ir="end":Array.isArray(e)?Ir="afterArrayValue":Ir="afterPropertyValue"}function lt(e){return Uc(e===void 0?`JSON5: invalid end of input at ${wo}:${Qn}`:`JSON5: invalid character '${P2(e)}' at ${wo}:${Qn}`)}function Uo(){return Uc(`JSON5: invalid end of input at ${wo}:${Qn}`)}function Fb(){return Qn-=5,Uc(`JSON5: invalid identifier character at ${wo}:${Qn}`)}function d4(e){console.warn(`JSON5: '${P2(e)}' in strings is not valid ECMAScript; consider escaping`)}function P2(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}function Uc(e){const t=new SyntaxError(e);return t.lineNumber=wo,t.columnNumber=Qn,t}var f4=function(t,r,n){const i=[];let o="",s,a,l="",u;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,u=r.quote,r=r.replacer),typeof r=="function")a=r;else if(Array.isArray(r)){s=[];for(const b of r){let k;typeof b=="string"?k=b:(typeof b=="number"||b instanceof String||b instanceof Number)&&(k=String(b)),k!==void 0&&s.indexOf(k)<0&&s.push(k)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),l="          ".substr(0,n)):typeof n=="string"&&(l=n.substr(0,10)),d("",{"":t});function d(b,k){let x=k[b];switch(x!=null&&(typeof x.toJSON5=="function"?x=x.toJSON5(b):typeof x.toJSON=="function"&&(x=x.toJSON(b))),a&&(x=a.call(k,b,x)),x instanceof Number?x=Number(x):x instanceof String?x=String(x):x instanceof Boolean&&(x=x.valueOf()),x){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof x=="string")return f(x);if(typeof x=="number")return String(x);if(typeof x=="object")return Array.isArray(x)?m(x):h(x)}function f(b){const k={"'":.1,'"':.2},x={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let D="";for(let P=0;P<b.length;P++){const O=b[P];switch(O){case"'":case'"':k[O]++,D+=O;continue;case"\0":if($t.isDigit(b[P+1])){D+="\\x00";continue}}if(x[O]){D+=x[O];continue}if(O<" "){let H=O.charCodeAt(0).toString(16);D+="\\x"+("00"+H).substring(H.length);continue}D+=O}const C=u||Object.keys(k).reduce((P,O)=>k[P]<k[O]?P:O);return D=D.replace(new RegExp(C,"g"),x[C]),C+D+C}function h(b){if(i.indexOf(b)>=0)throw TypeError("Converting circular structure to JSON5");i.push(b);let k=o;o=o+l;let x=s||Object.keys(b),D=[];for(const P of x){const O=d(P,b);if(O!==void 0){let H=g(P)+":";l!==""&&(H+=" "),H+=O,D.push(H)}}let C;if(D.length===0)C="{}";else{let P;if(l==="")P=D.join(","),C="{"+P+"}";else{let O=`,
`+o;P=D.join(O),C=`{
`+o+P+`,
`+k+"}"}}return i.pop(),o=k,C}function g(b){if(b.length===0)return f(b);const k=String.fromCodePoint(b.codePointAt(0));if(!$t.isIdStartChar(k))return f(b);for(let x=k.length;x<b.length;x++)if(!$t.isIdContinueChar(String.fromCodePoint(b.codePointAt(x))))return f(b);return b}function m(b){if(i.indexOf(b)>=0)throw TypeError("Converting circular structure to JSON5");i.push(b);let k=o;o=o+l;let x=[];for(let C=0;C<b.length;C++){const P=d(String(C),b);x.push(P!==void 0?P:"null")}let D;if(x.length===0)D="[]";else if(l==="")D="["+x.join(",")+"]";else{let C=`,
`+o,P=x.join(C);D=`[
`+o+P+`,
`+k+"]"}return i.pop(),o=k,D}};const h4={parse:s4,stringify:f4};var m4=h4;const I2="__@@augment-vir-undefined-sentinel@@__",g4=new RegExp(`['"]${I2}['"]`);function $(e,t){if(typeof e=="string")return e;try{return m4.stringify(e,(n,i)=>i===void 0?I2:typeof i=="bigint"?Number(i):i,t||void 0).split(g4).join("undefined")}catch{return String(e)}}var p4=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var _r;(function(e){e.Node="node",e.Web="web"})(_r||(_r={}));function b4(){return p4?_r.Node:_r.Web}const N2=b4();function ys(e){return N2===e}function O2(e){return e[N2]()}function y4(e,t){const r=typeof t=="string"&&typeof e=="string",n=typeof t!="string"||typeof e!="string",i=n?t4:Z3,o=[r?"":`
`,$(t&&typeof t=="object"&&!Array.isArray(t)?Mb(t):t,4),`
`].join(""),s=[r?"":`
`,$(e&&typeof e=="object"&&!Array.isArray(e)?Mb(e):e,4),`
`].join(""),a=v4(n,i(o,s)),l=ys(_r.Node);return[[l?qi.Green:""," +added (unexpected, added in actual)",l?qi.Red:""," -missing (expected, missing from actual)",l?qi.Reset:""].join(""),r?`

`:`
`,a].join("")}var qi;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(qi||(qi={}));var qc;(function(e){e.Added="+",e.Removed="-"})(qc||(qc={}));function v4(e,t){return e?t.flatMap(n=>n.value.split(`
`).map(i=>Pb(i,n)).join(`
`)).join(""):t.map(n=>Pb(void 0,n)).join("")}function Pb(e,t){if(e!=null&&!e)return"";const r=ys(_r.Node),n=t.added?qc.Added:t.removed?qc.Removed:e==null?"":" ",i=t.added?qi.Green:t.removed?qi.Red:qi.Reset;return[r?i:"",n,e??t.value,qi.Reset].join("")}function tt(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function w4(e){return tt(e).filter(t=>isNaN(Number(t)))}function ln(e){return w4(e).map(r=>e[r])}const k4=[".",":",";",",","?","!"],x4=new RegExp(`[${k4.join("")}]+$`);function Ib(e){return e.replace(x4,"")}function fr(e){return e==null||e===""||e==="undefined"||e==="null"?"":typeof e=="string"?e:e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):$(e)}function Ia(...e){const t=e.map(o=>fr(o)).filter(o=>!!Ib(o)),r=t[t.length-1]?.endsWith("."),n=t.map(o=>Ib(fr(o)));return(n.length<2?n[0]||"":n.join(": "))+(r?".":"")}function kt(e){return e instanceof Error?e:new Error(fr(e))}function Na(e,t){const r=kt(e),n=Ia(t,r.message);try{return r.message=n,r}catch{return new Error(n,{cause:e})}}var F;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(F||(F={}));var Z;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(Z||(Z={}));Z.ClientError,Z.ServerError;F.Continue+"",Z.Information,F.SwitchingProtocols+"",Z.Information,F.Processing+"",Z.Information,F.EarlyHints+"",Z.Information,F.Ok+"",Z.Success,F.Created+"",Z.Success,F.Accepted+"",Z.Success,F.NonAuthoritativeInformation+"",Z.Success,F.NoContent+"",Z.Success,F.ResetContent+"",Z.Success,F.PartialContent+"",Z.Success,F.MultiStatus+"",Z.Success,F.AlreadyReported+"",Z.Success,F.ImUsed+"",Z.Success,F.MultipleChoices+"",Z.Redirect,F.MovedPermanently+"",Z.Redirect,F.Found+"",Z.Redirect,F.SeeOther+"",Z.Redirect,F.NotModified+"",Z.Redirect,F.UseProxy+"",Z.Redirect,F.Unused+"",Z.Redirect,F.TemporaryRedirect+"",Z.Redirect,F.PermanentRedirect+"",Z.Redirect,F.BadRequest+"",Z.ClientError,F.Unauthorized+"",Z.ClientError,F.PaymentRequired+"",Z.ClientError,F.Forbidden+"",Z.ClientError,F.NotFound+"",Z.ClientError,F.MethodNotAllowed+"",Z.ClientError,F.NotAcceptable+"",Z.ClientError,F.ProxyAuthenticationRequired+"",Z.ClientError,F.RequestTimeout+"",Z.ClientError,F.Conflict+"",Z.ClientError,F.Gone+"",Z.ClientError,F.LengthRequired+"",Z.ClientError,F.PreconditionFailed+"",Z.ClientError,F.PayloadTooLarge+"",Z.ClientError,F.UriTooLong+"",Z.ClientError,F.UnsupportedMediaType+"",Z.ClientError,F.RangeNotSatisfiable+"",Z.ClientError,F.ExpectationFailed+"",Z.ClientError,F.ImATeapot+"",Z.ClientError,F.MisdirectedRequest+"",Z.ClientError,F.UnprocessableContent+"",Z.ClientError,F.Locked+"",Z.ClientError,F.FailedDependency+"",Z.ClientError,F.TooEarly+"",Z.ClientError,F.UpgradeRequired+"",Z.ClientError,F.PreconditionRequired+"",Z.ClientError,F.TooManyRequests+"",Z.ClientError,F.RequestHeaderFieldsTooLarge+"",Z.ClientError,F.UnavailableForLegalReasons+"",Z.ClientError,F.InternalServerError+"",Z.ServerError,F.NotImplemented+"",Z.ServerError,F.BadGateway+"",Z.ServerError,F.ServiceUnavailable+"",Z.ServerError,F.GatewayTimeout+"",Z.ServerError,F.HttpVersionNotSupported+"",Z.ServerError,F.VariantAlsoNegotiates+"",Z.ServerError,F.InsufficientStorage+"",Z.ServerError,F.LoopDetected+"",Z.ServerError,F.NotExtended+"",Z.ServerError,F.NetworkAuthenticationRequired+"",Z.ServerError;const Tc={[Z.Information]:[F.Continue,F.SwitchingProtocols,F.Processing,F.EarlyHints],[Z.Success]:[F.Ok,F.Created,F.Accepted,F.NonAuthoritativeInformation,F.NoContent,F.ResetContent,F.PartialContent,F.MultiStatus,F.AlreadyReported,F.ImUsed],[Z.Redirect]:[F.MultipleChoices,F.MovedPermanently,F.Found,F.SeeOther,F.NotModified,F.UseProxy,F.Unused,F.TemporaryRedirect,F.PermanentRedirect],[Z.ClientError]:[F.BadRequest,F.Unauthorized,F.PaymentRequired,F.Forbidden,F.NotFound,F.MethodNotAllowed,F.NotAcceptable,F.ProxyAuthenticationRequired,F.RequestTimeout,F.Conflict,F.Gone,F.LengthRequired,F.PreconditionFailed,F.PayloadTooLarge,F.UriTooLong,F.UnsupportedMediaType,F.RangeNotSatisfiable,F.ExpectationFailed,F.ImATeapot,F.MisdirectedRequest,F.UnprocessableContent,F.Locked,F.FailedDependency,F.TooEarly,F.UpgradeRequired,F.PreconditionRequired,F.TooManyRequests,F.RequestHeaderFieldsTooLarge,F.UnavailableForLegalReasons],[Z.ServerError]:[F.InternalServerError,F.NotImplemented,F.BadGateway,F.ServiceUnavailable,F.GatewayTimeout,F.HttpVersionNotSupported,F.VariantAlsoNegotiates,F.InsufficientStorage,F.LoopDetected,F.NotExtended,F.NetworkAuthenticationRequired]};function eg({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class Wc{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(kt(n))}})}}class vs extends Error{}class $4 extends vs{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class D4 extends vs{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class A4 extends vs{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class Zs extends vs{}class R2 extends vs{constructor(t){super(`Invalid unit ${t}`)}}class $r extends vs{}class ro extends vs{constructor(){super("Zone is an abstract class")}}const V="numeric",ei="short",fn="long",Vc={year:V,month:V,day:V},B2={year:V,month:ei,day:V},E4={year:V,month:ei,day:V,weekday:ei},L2={year:V,month:fn,day:V},_2={year:V,month:fn,day:V,weekday:fn},j2={hour:V,minute:V},z2={hour:V,minute:V,second:V},U2={hour:V,minute:V,second:V,timeZoneName:ei},q2={hour:V,minute:V,second:V,timeZoneName:fn},W2={hour:V,minute:V,hourCycle:"h23"},V2={hour:V,minute:V,second:V,hourCycle:"h23"},K2={hour:V,minute:V,second:V,hourCycle:"h23",timeZoneName:ei},H2={hour:V,minute:V,second:V,hourCycle:"h23",timeZoneName:fn},G2={year:V,month:V,day:V,hour:V,minute:V},Z2={year:V,month:V,day:V,hour:V,minute:V,second:V},Y2={year:V,month:ei,day:V,hour:V,minute:V},J2={year:V,month:ei,day:V,hour:V,minute:V,second:V},C4={year:V,month:ei,day:V,weekday:ei,hour:V,minute:V},X2={year:V,month:fn,day:V,hour:V,minute:V,timeZoneName:ei},Q2={year:V,month:fn,day:V,hour:V,minute:V,second:V,timeZoneName:ei},ew={year:V,month:fn,day:V,weekday:fn,hour:V,minute:V,timeZoneName:fn},tw={year:V,month:fn,day:V,weekday:fn,hour:V,minute:V,second:V,timeZoneName:fn};class wu{get type(){throw new ro}get name(){throw new ro}get ianaName(){return this.name}get isUniversal(){throw new ro}offsetName(t,r){throw new ro}formatOffset(t,r){throw new ro}offset(t){throw new ro}equals(t){throw new ro}get isValid(){throw new ro}}let ah=null;class Od extends wu{static get instance(){return ah===null&&(ah=new Od),ah}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return fw(t,r,n)}formatOffset(t,r){return zl(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const z0=new Map;function S4(e){let t=z0.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),z0.set(e,t)),t}const T4={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function M4(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,i,o,s,a,l,u,d]=n;return[s,i,o,a,l,u,d]}function F4(e,t){const r=e.formatToParts(t),n=[];for(let i=0;i<r.length;i++){const{type:o,value:s}=r[i],a=T4[o];o==="era"?n[a]=s:he(a)||(n[a]=parseInt(s,10))}return n}const lh=new Map;class Gi extends wu{static create(t){let r=lh.get(t);return r===void 0&&lh.set(t,r=new Gi(t)),r}static resetCache(){lh.clear(),z0.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Gi.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return fw(t,r,n,this.name)}formatOffset(t,r){return zl(this.offset(t),r)}offset(t){if(!this.valid)return NaN;const r=new Date(t);if(isNaN(r))return NaN;const n=S4(this.name);let[i,o,s,a,l,u,d]=n.formatToParts?F4(n,r):M4(n,r);a==="BC"&&(i=-Math.abs(i)+1);const h=Bd({year:i,month:o,day:s,hour:l===24?0:l,minute:u,second:d,millisecond:0});let g=+r;const m=g%1e3;return g-=m>=0?m:1e3+m,(h-g)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Nb={};function P4(e,t={}){const r=JSON.stringify([e,t]);let n=Nb[r];return n||(n=new Intl.ListFormat(e,t),Nb[r]=n),n}const U0=new Map;function q0(e,t={}){const r=JSON.stringify([e,t]);let n=U0.get(r);return n===void 0&&(n=new Intl.DateTimeFormat(e,t),U0.set(r,n)),n}const W0=new Map;function I4(e,t={}){const r=JSON.stringify([e,t]);let n=W0.get(r);return n===void 0&&(n=new Intl.NumberFormat(e,t),W0.set(r,n)),n}const V0=new Map;function N4(e,t={}){const{base:r,...n}=t,i=JSON.stringify([e,n]);let o=V0.get(i);return o===void 0&&(o=new Intl.RelativeTimeFormat(e,t),V0.set(i,o)),o}let Ml=null;function O4(){return Ml||(Ml=new Intl.DateTimeFormat().resolvedOptions().locale,Ml)}const K0=new Map;function rw(e){let t=K0.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),K0.set(e,t)),t}const H0=new Map;function R4(e){let t=H0.get(e);if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,"minimalDays"in t||(t={...nw,...t}),H0.set(e,t)}return t}function B4(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,i;try{n=q0(e).resolvedOptions(),i=e}catch{const l=e.substring(0,r);n=q0(l).resolvedOptions(),i=l}const{numberingSystem:o,calendar:s}=n;return[i,o,s]}}function L4(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function _4(e){const t=[];for(let r=1;r<=12;r++){const n=ge.utc(2009,r,1);t.push(e(n))}return t}function j4(e){const t=[];for(let r=1;r<=7;r++){const n=ge.utc(2016,11,13+r);t.push(e(n))}return t}function ec(e,t,r,n){const i=e.listingMode();return i==="error"?null:i==="en"?r(t):n(t)}function z4(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||rw(e.locale).numberingSystem==="latn"}class U4{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:i,floor:o,...s}=n;if(!r||Object.keys(s).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=I4(t,a)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):og(t,3);return Tt(r,this.padTo)}}}class q4{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const s=-1*(t.offset/60),a=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;t.offset!==0&&Gi.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const o={...this.opts};o.timeZone=o.timeZone||i,this.dtf=q0(r,o)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class W4{constructor(t,r,n){this.opts={style:"long",...n},!r&&cw()&&(this.rtf=N4(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):fD(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const nw={firstDay:1,minimalDays:4,weekend:[6,7]};class Je{static fromOpts(t){return Je.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,i,o=!1){const s=t||mt.defaultLocale,a=s||(o?"en-US":O4()),l=r||mt.defaultNumberingSystem,u=n||mt.defaultOutputCalendar,d=Z0(i)||mt.defaultWeekSettings;return new Je(a,l,u,d,s)}static resetCache(){Ml=null,U0.clear(),W0.clear(),V0.clear(),K0.clear(),H0.clear()}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:i}={}){return Je.create(t,r,n,i)}constructor(t,r,n,i,o){const[s,a,l]=B4(t);this.locale=s,this.numberingSystem=r||a||null,this.outputCalendar=n||l||null,this.weekSettings=i,this.intl=L4(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=o,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=z4(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:Je.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Z0(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return ec(this,t,gw,()=>{const n=this.intl==="ja"||this.intl.startsWith("ja-");r&=!n;const i=r?{month:t,day:"numeric"}:{month:t},o=r?"format":"standalone";if(!this.monthsCache[o][t]){const s=n?a=>this.dtFormatter(a,i).format():a=>this.extract(a,i,"month");this.monthsCache[o][t]=_4(s)}return this.monthsCache[o][t]})}weekdays(t,r=!1){return ec(this,t,yw,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=r?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=j4(o=>this.extract(o,n,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return ec(this,void 0,()=>vw,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[ge.utc(2016,11,13,9),ge.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return ec(this,t,ww,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[ge.utc(-40,1,1),ge.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const i=this.dtFormatter(t,r),o=i.formatToParts(),s=o.find(a=>a.type.toLowerCase()===n);return s?s.value:null}numberFormatter(t={}){return new U4(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new q4(t,this.intl,r)}relFormatter(t={}){return new W4(this.intl,this.isEnglish(),t)}listFormatter(t={}){return P4(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||rw(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:dw()?R4(this.locale):nw}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let uh=null;class Nr extends wu{static get utcInstance(){return uh===null&&(uh=new Nr(0)),uh}static instance(t){return t===0?Nr.utcInstance:new Nr(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new Nr(Ld(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${zl(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${zl(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return zl(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class V4 extends wu{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function co(e,t){if(he(e)||e===null)return t;if(e instanceof wu)return e;if(J4(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?Od.instance:r==="utc"||r==="gmt"?Nr.utcInstance:Nr.parseSpecifier(r)||Gi.create(e)}else return go(e)?Nr.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new V4(e)}const tg={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Ob={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},K4=tg.hanidec.replace(/[\[|\]]/g,"").split("");function H4(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(tg.hanidec)!==-1)t+=K4.indexOf(e[r]);else for(const i in Ob){const[o,s]=Ob[i];n>=o&&n<=s&&(t+=n-o)}}return parseInt(t,10)}else return t}const G0=new Map;function G4(){G0.clear()}function Wn({numberingSystem:e},t=""){const r=e||"latn";let n=G0.get(r);n===void 0&&(n=new Map,G0.set(r,n));let i=n.get(t);return i===void 0&&(i=new RegExp(`${tg[r]}${t}`),n.set(t,i)),i}let Rb=()=>Date.now(),Bb="system",Lb=null,_b=null,jb=null,zb=60,Ub,qb=null;class mt{static get now(){return Rb}static set now(t){Rb=t}static set defaultZone(t){Bb=t}static get defaultZone(){return co(Bb,Od.instance)}static get defaultLocale(){return Lb}static set defaultLocale(t){Lb=t}static get defaultNumberingSystem(){return _b}static set defaultNumberingSystem(t){_b=t}static get defaultOutputCalendar(){return jb}static set defaultOutputCalendar(t){jb=t}static get defaultWeekSettings(){return qb}static set defaultWeekSettings(t){qb=Z0(t)}static get twoDigitCutoffYear(){return zb}static set twoDigitCutoffYear(t){zb=t%100}static get throwOnInvalid(){return Ub}static set throwOnInvalid(t){Ub=t}static resetCaches(){Je.resetCache(),Gi.resetCache(),ge.resetCache(),G4()}}class Jn{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const iw=[0,31,59,90,120,151,181,212,243,273,304,334],ow=[0,31,60,91,121,152,182,213,244,274,305,335];function In(e,t){return new Jn("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function rg(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const i=n.getUTCDay();return i===0?7:i}function sw(e,t,r){return r+(ku(e)?ow:iw)[t-1]}function aw(e,t){const r=ku(e)?ow:iw,n=r.findIndex(o=>o<t),i=t-r[n];return{month:n+1,day:i}}function ng(e,t){return(e-t+7)%7+1}function Kc(e,t=4,r=1){const{year:n,month:i,day:o}=e,s=sw(n,i,o),a=ng(rg(n,i,o),r);let l=Math.floor((s-a+14-t)/7),u;return l<1?(u=n-1,l=Yl(u,t,r)):l>Yl(n,t,r)?(u=n+1,l=1):u=n,{weekYear:u,weekNumber:l,weekday:a,..._d(e)}}function Wb(e,t=4,r=1){const{weekYear:n,weekNumber:i,weekday:o}=e,s=ng(rg(n,1,t),r),a=Qs(n);let l=i*7+o-s-7+t,u;l<1?(u=n-1,l+=Qs(u)):l>a?(u=n+1,l-=Qs(n)):u=n;const{month:d,day:f}=aw(u,l);return{year:u,month:d,day:f,..._d(e)}}function ch(e){const{year:t,month:r,day:n}=e,i=sw(t,r,n);return{year:t,ordinal:i,..._d(e)}}function Vb(e){const{year:t,ordinal:r}=e,{month:n,day:i}=aw(t,r);return{year:t,month:n,day:i,..._d(e)}}function Kb(e,t){if(!he(e.localWeekday)||!he(e.localWeekNumber)||!he(e.localWeekYear)){if(!he(e.weekday)||!he(e.weekNumber)||!he(e.weekYear))throw new Zs("Cannot mix locale-based week fields with ISO-based week fields");return he(e.localWeekday)||(e.weekday=e.localWeekday),he(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),he(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Z4(e,t=4,r=1){const n=Rd(e.weekYear),i=Nn(e.weekNumber,1,Yl(e.weekYear,t,r)),o=Nn(e.weekday,1,7);return n?i?o?!1:In("weekday",e.weekday):In("week",e.weekNumber):In("weekYear",e.weekYear)}function Y4(e){const t=Rd(e.year),r=Nn(e.ordinal,1,Qs(e.year));return t?r?!1:In("ordinal",e.ordinal):In("year",e.year)}function lw(e){const t=Rd(e.year),r=Nn(e.month,1,12),n=Nn(e.day,1,Hc(e.year,e.month));return t?r?n?!1:In("day",e.day):In("month",e.month):In("year",e.year)}function uw(e){const{hour:t,minute:r,second:n,millisecond:i}=e,o=Nn(t,0,23)||t===24&&r===0&&n===0&&i===0,s=Nn(r,0,59),a=Nn(n,0,59),l=Nn(i,0,999);return o?s?a?l?!1:In("millisecond",i):In("second",n):In("minute",r):In("hour",t)}function he(e){return typeof e>"u"}function go(e){return typeof e=="number"}function Rd(e){return typeof e=="number"&&e%1===0}function J4(e){return typeof e=="string"}function X4(e){return Object.prototype.toString.call(e)==="[object Date]"}function cw(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function dw(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Q4(e){return Array.isArray(e)?e:[e]}function Hb(e,t,r){if(e.length!==0)return e.reduce((n,i)=>{const o=[t(i),i];return n&&r(n[0],o[0])===n[0]?n:o},null)[1]}function eD(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function ua(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Z0(e){if(e==null)return null;if(typeof e!="object")throw new $r("Week settings must be an object");if(!Nn(e.firstDay,1,7)||!Nn(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Nn(t,1,7)))throw new $r("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Nn(e,t,r){return Rd(e)&&e>=t&&e<=r}function tD(e,t){return e-t*Math.floor(e/t)}function Tt(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function so(e){if(!(he(e)||e===null||e===""))return parseInt(e,10)}function qo(e){if(!(he(e)||e===null||e===""))return parseFloat(e)}function ig(e){if(!(he(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function og(e,t,r="round"){const n=10**t;switch(r){case"expand":return e>0?Math.ceil(e*n)/n:Math.floor(e*n)/n;case"trunc":return Math.trunc(e*n)/n;case"round":return Math.round(e*n)/n;case"floor":return Math.floor(e*n)/n;case"ceil":return Math.ceil(e*n)/n;default:throw new RangeError(`Value rounding ${r} is out of range`)}}function ku(e){return e%4===0&&(e%100!==0||e%400===0)}function Qs(e){return ku(e)?366:365}function Hc(e,t){const r=tD(t-1,12)+1,n=e+(t-r)/12;return r===2?ku(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Bd(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Gb(e,t,r){return-ng(rg(e,1,t),r)+t-1}function Yl(e,t=4,r=1){const n=Gb(e,t,r),i=Gb(e+1,t,r);return(Qs(e)-n+i)/7}function Y0(e){return e>99?e:e>mt.twoDigitCutoffYear?1900+e:2e3+e}function fw(e,t,r,n=null){const i=new Date(e),o={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(o.timeZone=n);const s={timeZoneName:t,...o},a=new Intl.DateTimeFormat(r,s).formatToParts(i).find(l=>l.type.toLowerCase()==="timezonename");return a?a.value:null}function Ld(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,i=r<0||Object.is(r,-0)?-n:n;return r*60+i}function hw(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new $r(`Invalid unit value ${e}`);return t}function Gc(e,t){const r={};for(const n in e)if(ua(e,n)){const i=e[n];if(i==null)continue;r[t(n)]=hw(i)}return r}function zl(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${Tt(r,2)}:${Tt(n,2)}`;case"narrow":return`${i}${r}${n>0?`:${n}`:""}`;case"techie":return`${i}${Tt(r,2)}${Tt(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function _d(e){return eD(e,["hour","minute","second","millisecond"])}const rD=["January","February","March","April","May","June","July","August","September","October","November","December"],mw=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],nD=["J","F","M","A","M","J","J","A","S","O","N","D"];function gw(e){switch(e){case"narrow":return[...nD];case"short":return[...mw];case"long":return[...rD];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const pw=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],bw=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],iD=["M","T","W","T","F","S","S"];function yw(e){switch(e){case"narrow":return[...iD];case"short":return[...bw];case"long":return[...pw];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const vw=["AM","PM"],oD=["Before Christ","Anno Domini"],sD=["BC","AD"],aD=["B","A"];function ww(e){switch(e){case"narrow":return[...aD];case"short":return[...sD];case"long":return[...oD];default:return null}}function lD(e){return vw[e.hour<12?0:1]}function uD(e,t){return yw(t)[e.weekday-1]}function cD(e,t){return gw(t)[e.month-1]}function dD(e,t){return ww(t)[e.year<0?0:1]}function fD(e,t,r="always",n=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&o){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${i[e][0]}`;case-1:return f?"yesterday":`last ${i[e][0]}`;case 0:return f?"today":`this ${i[e][0]}`}}const s=Object.is(t,-0)||t<0,a=Math.abs(t),l=a===1,u=i[e],d=n?l?u[1]:u[2]||u[1]:l?i[e][0]:e;return s?`${a} ${d} ago`:`in ${a} ${d}`}function Zb(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const hD={D:Vc,DD:B2,DDD:L2,DDDD:_2,t:j2,tt:z2,ttt:U2,tttt:q2,T:W2,TT:V2,TTT:K2,TTTT:H2,f:G2,ff:Y2,fff:X2,ffff:ew,F:Z2,FF:J2,FFF:Q2,FFFF:tw};class Cr{static create(t,r={}){return new Cr(t,r)}static parseFormat(t){let r=null,n="",i=!1;const o=[];for(let s=0;s<t.length;s++){const a=t.charAt(s);a==="'"?((n.length>0||i)&&o.push({literal:i||/^\s+$/.test(n),val:n===""?"'":n}),r=null,n="",i=!i):i||a===r?n+=a:(n.length>0&&o.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&o.push({literal:i||/^\s+$/.test(n),val:n}),o}static macroTokenToFormatOpts(t){return hD[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0,n=void 0){if(this.opts.forceSimple)return Tt(t,r);const i={...this.opts};return r>0&&(i.padTo=r),n&&(i.signDisplay=n),this.loc.numberFormatter(i).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",o=(g,m)=>this.loc.extract(t,g,m),s=g=>t.isOffsetFixed&&t.offset===0&&g.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,g.format):"",a=()=>n?lD(t):o({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(g,m)=>n?cD(t,g):o(m?{month:g}:{month:g,day:"numeric"},"month"),u=(g,m)=>n?uD(t,g):o(m?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),d=g=>{const m=Cr.macroTokenToFormatOpts(g);return m?this.formatWithSystemDefault(t,m):g},f=g=>n?dD(t,g):o({era:g},"era"),h=g=>{switch(g){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?o({day:"numeric"},"day"):this.num(t.day);case"dd":return i?o({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return u("short",!0);case"cccc":return u("long",!0);case"ccccc":return u("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return u("short",!1);case"EEEE":return u("long",!1);case"EEEEE":return u("narrow",!1);case"L":return i?o({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?o({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return i?o({month:"numeric"},"month"):this.num(t.month);case"MM":return i?o({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return i?o({year:"numeric"},"year"):this.num(t.year);case"yy":return i?o({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?o({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?o({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return d(g)}};return Zb(Cr.parseFormat(r),h)}formatDurationFromString(t,r){const n=this.opts.signMode==="negativeLargestOnly"?-1:1,i=d=>{switch(d[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},o=(d,f)=>h=>{const g=i(h);if(g){const m=f.isNegativeDuration&&g!==f.largestUnit?n:1;let b;return this.opts.signMode==="negativeLargestOnly"&&g!==f.largestUnit?b="never":this.opts.signMode==="all"?b="always":b="auto",this.num(d.get(g)*m,h.length,b)}else return h},s=Cr.parseFormat(r),a=s.reduce((d,{literal:f,val:h})=>f?d:d.concat(h),[]),l=t.shiftTo(...a.map(i).filter(d=>d)),u={isNegativeDuration:l<0,largestUnit:Object.keys(l.values)[0]};return Zb(s,o(l,u))}}const kw=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Oa(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function Ra(...e){return t=>e.reduce(([r,n,i],o)=>{const[s,a,l]=o(t,i);return[{...r,...s},a||n,l]},[{},null,1]).slice(0,2)}function Ba(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const i=r.exec(e);if(i)return n(i)}return[null,null]}function xw(...e){return(t,r)=>{const n={};let i;for(i=0;i<e.length;i++)n[e[i]]=so(t[r+i]);return[n,null,r+i]}}const $w=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,mD=`(?:${$w.source}?(?:\\[(${kw.source})\\])?)?`,sg=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Dw=RegExp(`${sg.source}${mD}`),ag=RegExp(`(?:[Tt]${Dw.source})?`),gD=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,pD=/(\d{4})-?W(\d\d)(?:-?(\d))?/,bD=/(\d{4})-?(\d{3})/,yD=xw("weekYear","weekNumber","weekDay"),vD=xw("year","ordinal"),wD=/(\d{4})-(\d\d)-(\d\d)/,Aw=RegExp(`${sg.source} ?(?:${$w.source}|(${kw.source}))?`),kD=RegExp(`(?: ${Aw.source})?`);function ea(e,t,r){const n=e[t];return he(n)?r:so(n)}function xD(e,t){return[{year:ea(e,t),month:ea(e,t+1,1),day:ea(e,t+2,1)},null,t+3]}function La(e,t){return[{hours:ea(e,t,0),minutes:ea(e,t+1,0),seconds:ea(e,t+2,0),milliseconds:ig(e[t+3])},null,t+4]}function xu(e,t){const r=!e[t]&&!e[t+1],n=Ld(e[t+1],e[t+2]),i=r?null:Nr.instance(n);return[{},i,t+3]}function $u(e,t){const r=e[t]?Gi.create(e[t]):null;return[{},r,t+1]}const $D=RegExp(`^T?${sg.source}$`),DD=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function AD(e){const[t,r,n,i,o,s,a,l,u]=e,d=t[0]==="-",f=l&&l[0]==="-",h=(g,m=!1)=>g!==void 0&&(m||g&&d)?-g:g;return[{years:h(qo(r)),months:h(qo(n)),weeks:h(qo(i)),days:h(qo(o)),hours:h(qo(s)),minutes:h(qo(a)),seconds:h(qo(l),l==="-0"),milliseconds:h(ig(u),f)}]}const ED={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function lg(e,t,r,n,i,o,s){const a={year:t.length===2?Y0(so(t)):so(t),month:mw.indexOf(r)+1,day:so(n),hour:so(i),minute:so(o)};return s&&(a.second=so(s)),e&&(a.weekday=e.length>3?pw.indexOf(e)+1:bw.indexOf(e)+1),a}const CD=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function SD(e){const[,t,r,n,i,o,s,a,l,u,d,f]=e,h=lg(t,i,n,r,o,s,a);let g;return l?g=ED[l]:u?g=0:g=Ld(d,f),[h,new Nr(g)]}function TD(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const MD=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,FD=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,PD=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Yb(e){const[,t,r,n,i,o,s,a]=e;return[lg(t,i,n,r,o,s,a),Nr.utcInstance]}function ID(e){const[,t,r,n,i,o,s,a]=e;return[lg(t,a,r,n,i,o,s),Nr.utcInstance]}const ND=Oa(gD,ag),OD=Oa(pD,ag),RD=Oa(bD,ag),BD=Oa(Dw),Ew=Ra(xD,La,xu,$u),LD=Ra(yD,La,xu,$u),_D=Ra(vD,La,xu,$u),jD=Ra(La,xu,$u);function zD(e){return Ba(e,[ND,Ew],[OD,LD],[RD,_D],[BD,jD])}function UD(e){return Ba(TD(e),[CD,SD])}function qD(e){return Ba(e,[MD,Yb],[FD,Yb],[PD,ID])}function WD(e){return Ba(e,[DD,AD])}const VD=Ra(La);function KD(e){return Ba(e,[$D,VD])}const HD=Oa(wD,kD),GD=Oa(Aw),ZD=Ra(La,xu,$u);function YD(e){return Ba(e,[HD,Ew],[GD,ZD])}const Jb="Invalid Duration",Cw={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},JD={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...Cw},Sn=146097/400,Ls=146097/4800,XD={years:{quarters:4,months:12,weeks:Sn/7,days:Sn,hours:Sn*24,minutes:Sn*24*60,seconds:Sn*24*60*60,milliseconds:Sn*24*60*60*1e3},quarters:{months:3,weeks:Sn/28,days:Sn/4,hours:Sn*24/4,minutes:Sn*24*60/4,seconds:Sn*24*60*60/4,milliseconds:Sn*24*60*60*1e3/4},months:{weeks:Ls/7,days:Ls,hours:Ls*24,minutes:Ls*24*60,seconds:Ls*24*60*60,milliseconds:Ls*24*60*60*1e3},...Cw},ts=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],QD=ts.slice(0).reverse();function Pi(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new Ne(n)}function Sw(e,t){let r=t.milliseconds??0;for(const n of QD.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function Xb(e,t){const r=Sw(e,t)<0?-1:1;ts.reduceRight((n,i)=>{if(he(t[i]))return n;if(n){const o=t[n]*r,s=e[i][n],a=Math.floor(o/s);t[i]+=a*r,t[n]-=a*s*r}return i},null),ts.reduce((n,i)=>{if(he(t[i]))return n;if(n){const o=t[n]%1;t[n]-=o,t[i]+=o*e[n][i]}return i},null)}function Qb(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class Ne{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?XD:JD;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||Je.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return Ne.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new $r(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new Ne({values:Gc(t,Ne.normalizeUnit),loc:Je.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(go(t))return Ne.fromMillis(t);if(Ne.isDuration(t))return t;if(typeof t=="object")return Ne.fromObject(t);throw new $r(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=WD(t);return n?Ne.fromObject(n,r):Ne.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=KD(t);return n?Ne.fromObject(n,r):Ne.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new $r("need to specify a reason the Duration is invalid");const n=t instanceof Jn?t:new Jn(t,r);if(mt.throwOnInvalid)throw new A4(n);return new Ne({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new R2(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?Cr.create(this.loc,n).formatDurationFromString(this,t):Jb}toHuman(t={}){if(!this.isValid)return Jb;const r=t.showZeros!==!1,n=ts.map(i=>{const o=this.values[i];return he(o)||o===0&&!r?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:i.slice(0,-1)}).format(o)}).filter(i=>i);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=og(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},ge.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Sw(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=Ne.fromDurationLike(t),n={};for(const i of ts)(ua(r.values,i)||ua(this.values,i))&&(n[i]=r.get(i)+this.get(i));return Pi(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=Ne.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=hw(t(this.values[n],n));return Pi(this,{values:r},!0)}get(t){return this[Ne.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...Gc(t,Ne.normalizeUnit)};return Pi(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:i}={}){const s={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:i,conversionAccuracy:n};return Pi(this,s)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Xb(this.matrix,t),Pi(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Qb(this.normalize().shiftToAll().toObject());return Pi(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(s=>Ne.normalizeUnit(s));const r={},n={},i=this.toObject();let o;for(const s of ts)if(t.indexOf(s)>=0){o=s;let a=0;for(const u in n)a+=this.matrix[u][s]*n[u],n[u]=0;go(i[s])&&(a+=i[s]);const l=Math.trunc(a);r[s]=l,n[s]=(a*1e3-l*1e3)/1e3}else go(i[s])&&(n[s]=i[s]);for(const s in n)n[s]!==0&&(r[o]+=s===o?n[s]:n[s]/this.matrix[o][s]);return Xb(this.matrix,r),Pi(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return Pi(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=Qb(this.values);return Pi(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,i){return n===void 0||n===0?i===void 0||i===0:n===i}for(const n of ts)if(!r(this.values[n],t.values[n]))return!1;return!0}}const _s="Invalid Interval";function eA(e,t){return!e||!e.isValid?vt.invalid("missing or invalid start"):!t||!t.isValid?vt.invalid("missing or invalid end"):t<e?vt.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class vt{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new $r("need to specify a reason the Interval is invalid");const n=t instanceof Jn?t:new Jn(t,r);if(mt.throwOnInvalid)throw new D4(n);return new vt({invalid:n})}static fromDateTimes(t,r){const n=cl(t),i=cl(r),o=eA(n,i);return o??new vt({start:n,end:i})}static after(t,r){const n=Ne.fromDurationLike(r),i=cl(t);return vt.fromDateTimes(i,i.plus(n))}static before(t,r){const n=Ne.fromDurationLike(r),i=cl(t);return vt.fromDateTimes(i.minus(n),i)}static fromISO(t,r){const[n,i]=(t||"").split("/",2);if(n&&i){let o,s;try{o=ge.fromISO(n,r),s=o.isValid}catch{s=!1}let a,l;try{a=ge.fromISO(i,r),l=a.isValid}catch{l=!1}if(s&&l)return vt.fromDateTimes(o,a);if(s){const u=Ne.fromISO(i,r);if(u.isValid)return vt.after(o,u)}else if(l){const u=Ne.fromISO(n,r);if(u.isValid)return vt.before(a,u)}}return vt.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let i;return r?.useLocaleWeeks?i=this.end.reconfigure({locale:n.locale}):i=this.end,i=i.startOf(t,r),Math.floor(i.diff(n,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?vt.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(cl).filter(s=>this.contains(s)).sort((s,a)=>s.toMillis()-a.toMillis()),n=[];let{s:i}=this,o=0;for(;i<this.e;){const s=r[o]||this.e,a=+s>+this.e?this.e:s;n.push(vt.fromDateTimes(i,a)),i=a,o+=1}return n}splitBy(t){const r=Ne.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,i=1,o;const s=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(l=>l*i));o=+a>+this.e?this.e:a,s.push(vt.fromDateTimes(n,o)),n=o,i+=1}return s}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:vt.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return vt.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((i,o)=>i.s-o.s).reduce(([i,o],s)=>o?o.overlaps(s)||o.abutsStart(s)?[i,o.union(s)]:[i.concat([o]),s]:[i,s],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const i=[],o=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),s=Array.prototype.concat(...o),a=s.sort((l,u)=>l.time-u.time);for(const l of a)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&i.push(vt.fromDateTimes(r,l.time)),r=null);return vt.merge(i)}difference(...t){return vt.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:_s}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Vc,r={}){return this.isValid?Cr.create(this.s.loc.clone(r),t).formatInterval(this):_s}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:_s}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:_s}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:_s}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:_s}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):Ne.invalid(this.invalidReason)}mapEndpoints(t){return vt.fromDateTimes(t(this.s),t(this.e))}}class tc{static hasDST(t=mt.defaultZone){const r=ge.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return Gi.isValidZone(t)}static normalizeZone(t){return co(t,mt.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||Je.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||Je.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||Je.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||Je.create(r,n,o)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||Je.create(r,n,o)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||Je.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||Je.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return Je.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return Je.create(r,null,"gregory").eras(t)}static features(){return{relative:cw(),localeWeek:dw()}}}function ey(e,t){const r=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(Ne.fromMillis(n).as("days"))}function tA(e,t,r){const n=[["years",(l,u)=>u.year-l.year],["quarters",(l,u)=>u.quarter-l.quarter+(u.year-l.year)*4],["months",(l,u)=>u.month-l.month+(u.year-l.year)*12],["weeks",(l,u)=>{const d=ey(l,u);return(d-d%7)/7}],["days",ey]],i={},o=e;let s,a;for(const[l,u]of n)r.indexOf(l)>=0&&(s=l,i[l]=u(e,t),a=o.plus(i),a>t?(i[l]--,e=o.plus(i),e>t&&(a=e,i[l]--,e=o.plus(i))):e=a);return[e,i,a,s]}function rA(e,t,r,n){let[i,o,s,a]=tA(e,t,r);const l=t-i,u=r.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);u.length===0&&(s<t&&(s=i.plus({[a]:1})),s!==i&&(o[a]=(o[a]||0)+l/(s-i)));const d=Ne.fromObject(o,n);return u.length>0?Ne.fromMillis(l,n).shiftTo(...u).plus(d):d}const nA="missing Intl.DateTimeFormat.formatToParts support";function qe(e,t=r=>r){return{regex:e,deser:([r])=>t(H4(r))}}const iA=" ",Tw=`[ ${iA}]`,Mw=new RegExp(Tw,"g");function oA(e){return e.replace(/\./g,"\\.?").replace(Mw,Tw)}function ty(e){return e.replace(/\./g,"").replace(Mw," ").toLowerCase()}function Vn(e,t){return e===null?null:{regex:RegExp(e.map(oA).join("|")),deser:([r])=>e.findIndex(n=>ty(r)===ty(n))+t}}function ry(e,t){return{regex:e,deser:([,r,n])=>Ld(r,n),groups:t}}function rc(e){return{regex:e,deser:([t])=>t}}function sA(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function aA(e,t){const r=Wn(t),n=Wn(t,"{2}"),i=Wn(t,"{3}"),o=Wn(t,"{4}"),s=Wn(t,"{6}"),a=Wn(t,"{1,2}"),l=Wn(t,"{1,3}"),u=Wn(t,"{1,6}"),d=Wn(t,"{1,9}"),f=Wn(t,"{2,4}"),h=Wn(t,"{4,6}"),g=k=>({regex:RegExp(sA(k.val)),deser:([x])=>x,literal:!0}),b=(k=>{if(e.literal)return g(k);switch(k.val){case"G":return Vn(t.eras("short"),0);case"GG":return Vn(t.eras("long"),0);case"y":return qe(u);case"yy":return qe(f,Y0);case"yyyy":return qe(o);case"yyyyy":return qe(h);case"yyyyyy":return qe(s);case"M":return qe(a);case"MM":return qe(n);case"MMM":return Vn(t.months("short",!0),1);case"MMMM":return Vn(t.months("long",!0),1);case"L":return qe(a);case"LL":return qe(n);case"LLL":return Vn(t.months("short",!1),1);case"LLLL":return Vn(t.months("long",!1),1);case"d":return qe(a);case"dd":return qe(n);case"o":return qe(l);case"ooo":return qe(i);case"HH":return qe(n);case"H":return qe(a);case"hh":return qe(n);case"h":return qe(a);case"mm":return qe(n);case"m":return qe(a);case"q":return qe(a);case"qq":return qe(n);case"s":return qe(a);case"ss":return qe(n);case"S":return qe(l);case"SSS":return qe(i);case"u":return rc(d);case"uu":return rc(a);case"uuu":return qe(r);case"a":return Vn(t.meridiems(),0);case"kkkk":return qe(o);case"kk":return qe(f,Y0);case"W":return qe(a);case"WW":return qe(n);case"E":case"c":return qe(r);case"EEE":return Vn(t.weekdays("short",!1),1);case"EEEE":return Vn(t.weekdays("long",!1),1);case"ccc":return Vn(t.weekdays("short",!0),1);case"cccc":return Vn(t.weekdays("long",!0),1);case"Z":case"ZZ":return ry(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return ry(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return rc(/[a-z_+-/]{1,256}?/i);case" ":return rc(/[^\S\n\r]/);default:return g(k)}})(e)||{invalidReason:nA};return b.token=e,b}const lA={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function uA(e,t,r){const{type:n,value:i}=e;if(n==="literal"){const l=/^\s+$/.test(i);return{literal:!l,val:l?" ":i}}const o=t[n];let s=n;n==="hour"&&(t.hour12!=null?s=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?s="hour12":s="hour24":s=r.hour12?"hour12":"hour24");let a=lA[s];if(typeof a=="object"&&(a=a[o]),a)return{literal:!1,val:a}}function cA(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function dA(e,t,r){const n=e.match(t);if(n){const i={};let o=1;for(const s in r)if(ua(r,s)){const a=r[s],l=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(n.slice(o,o+l))),o+=l}return[n,i]}else return[n,{}]}function fA(e){const t=o=>{switch(o){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return he(e.z)||(r=Gi.create(e.z)),he(e.Z)||(r||(r=new Nr(e.Z)),n=e.Z),he(e.q)||(e.M=(e.q-1)*3+1),he(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),he(e.u)||(e.S=ig(e.u)),[Object.keys(e).reduce((o,s)=>{const a=t(s);return a&&(o[a]=e[s]),o},{}),r,n]}let dh=null;function hA(){return dh||(dh=ge.fromMillis(1555555555555)),dh}function mA(e,t){if(e.literal)return e;const r=Cr.macroTokenToFormatOpts(e.val),n=Nw(r,t);return n==null||n.includes(void 0)?e:n}function Fw(e,t){return Array.prototype.concat(...e.map(r=>mA(r,t)))}class Pw{constructor(t,r){if(this.locale=t,this.format=r,this.tokens=Fw(Cr.parseFormat(r),t),this.units=this.tokens.map(n=>aA(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,i]=cA(this.units);this.regex=RegExp(n,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[r,n]=dA(t,this.regex,this.handlers),[i,o,s]=n?fA(n):[null,null,void 0];if(ua(n,"a")&&ua(n,"H"))throw new Zs("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:i,zone:o,specificOffset:s}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function Iw(e,t,r){return new Pw(e,r).explainFromTokens(t)}function gA(e,t,r){const{result:n,zone:i,specificOffset:o,invalidReason:s}=Iw(e,t,r);return[n,i,o,s]}function Nw(e,t){if(!e)return null;const n=Cr.create(t,e).dtFormatter(hA()),i=n.formatToParts(),o=n.resolvedOptions();return i.map(s=>uA(s,e,o))}const fh="Invalid DateTime",ny=864e13;function Fl(e){return new Jn("unsupported zone",`the zone "${e.name}" is not supported`)}function hh(e){return e.weekData===null&&(e.weekData=Kc(e.c)),e.weekData}function mh(e){return e.localWeekData===null&&(e.localWeekData=Kc(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Wo(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new ge({...r,...t,old:r})}function Ow(e,t,r){let n=e-t*60*1e3;const i=r.offset(n);if(t===i)return[n,t];n-=(i-t)*60*1e3;const o=r.offset(n);return i===o?[n,i]:[e-Math.min(i,o)*60*1e3,Math.max(i,o)]}function nc(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function Mc(e,t,r){return Ow(Bd(e),t,r)}function iy(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,o={...e.c,year:n,month:i,day:Math.min(e.c.day,Hc(n,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},s=Ne.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=Bd(o);let[l,u]=Ow(a,r,e.zone);return s!==0&&(l+=s,u=e.zone.offset(l)),{ts:l,o:u}}function js(e,t,r,n,i,o){const{setZone:s,zone:a}=r;if(e&&Object.keys(e).length!==0||t){const l=t||a,u=ge.fromObject(e,{...r,zone:l,specificOffset:o});return s?u:u.setZone(a)}else return ge.invalid(new Jn("unparsable",`the input "${i}" can't be parsed as ${n}`))}function ic(e,t,r=!0){return e.isValid?Cr.create(Je.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function gh(e,t,r){const n=e.c.year>9999||e.c.year<0;let i="";if(n&&e.c.year>=0&&(i+="+"),i+=Tt(e.c.year,n?6:4),r==="year")return i;if(t){if(i+="-",i+=Tt(e.c.month),r==="month")return i;i+="-"}else if(i+=Tt(e.c.month),r==="month")return i;return i+=Tt(e.c.day),i}function oy(e,t,r,n,i,o,s){let a=!r||e.c.millisecond!==0||e.c.second!==0,l="";switch(s){case"day":case"month":case"year":break;default:if(l+=Tt(e.c.hour),s==="hour")break;if(t){if(l+=":",l+=Tt(e.c.minute),s==="minute")break;a&&(l+=":",l+=Tt(e.c.second))}else{if(l+=Tt(e.c.minute),s==="minute")break;a&&(l+=Tt(e.c.second))}if(s==="second")break;a&&(!n||e.c.millisecond!==0)&&(l+=".",l+=Tt(e.c.millisecond,3))}return i&&(e.isOffsetFixed&&e.offset===0&&!o?l+="Z":e.o<0?(l+="-",l+=Tt(Math.trunc(-e.o/60)),l+=":",l+=Tt(Math.trunc(-e.o%60))):(l+="+",l+=Tt(Math.trunc(e.o/60)),l+=":",l+=Tt(Math.trunc(e.o%60)))),o&&(l+="["+e.zone.ianaName+"]"),l}const Rw={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},pA={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},bA={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Fc=["year","month","day","hour","minute","second","millisecond"],yA=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],vA=["year","ordinal","hour","minute","second","millisecond"];function Pc(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new R2(e);return t}function sy(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return Pc(e)}}function wA(e){if(Pl===void 0&&(Pl=mt.now()),e.type!=="iana")return e.offset(Pl);const t=e.name;let r=J0.get(t);return r===void 0&&(r=e.offset(Pl),J0.set(t,r)),r}function ay(e,t){const r=co(t.zone,mt.defaultZone);if(!r.isValid)return ge.invalid(Fl(r));const n=Je.fromObject(t);let i,o;if(he(e.year))i=mt.now();else{for(const l of Fc)he(e[l])&&(e[l]=Rw[l]);const s=lw(e)||uw(e);if(s)return ge.invalid(s);const a=wA(r);[i,o]=Mc(e,a,r)}return new ge({ts:i,zone:r,loc:n,o})}function ly(e,t,r){const n=he(r.round)?!0:r.round,i=he(r.rounding)?"trunc":r.rounding,o=(a,l)=>(a=og(a,n||r.calendary?0:2,r.calendary?"round":i),t.loc.clone(r).relFormatter(r).format(a,l)),s=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return o(s(r.unit),r.unit);for(const a of r.units){const l=s(a);if(Math.abs(l)>=1)return o(l,a)}return o(e>t?-0:0,r.units[r.units.length-1])}function uy(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let Pl;const J0=new Map;class ge{constructor(t){const r=t.zone||mt.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new Jn("invalid input"):null)||(r.isValid?null:Fl(r));this.ts=he(t.ts)?mt.now():t.ts;let i=null,o=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[i,o]=[t.old.c,t.old.o];else{const a=go(t.o)&&!t.old?t.o:r.offset(this.ts);i=nc(this.ts,a),n=Number.isNaN(i.year)?new Jn("invalid input"):null,i=n?null:i,o=n?null:a}this._zone=r,this.loc=t.loc||Je.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=i,this.o=o,this.isLuxonDateTime=!0}static now(){return new ge({})}static local(){const[t,r]=uy(arguments),[n,i,o,s,a,l,u]=r;return ay({year:n,month:i,day:o,hour:s,minute:a,second:l,millisecond:u},t)}static utc(){const[t,r]=uy(arguments),[n,i,o,s,a,l,u]=r;return t.zone=Nr.utcInstance,ay({year:n,month:i,day:o,hour:s,minute:a,second:l,millisecond:u},t)}static fromJSDate(t,r={}){const n=X4(t)?t.valueOf():NaN;if(Number.isNaN(n))return ge.invalid("invalid input");const i=co(r.zone,mt.defaultZone);return i.isValid?new ge({ts:n,zone:i,loc:Je.fromObject(r)}):ge.invalid(Fl(i))}static fromMillis(t,r={}){if(go(t))return t<-ny||t>ny?ge.invalid("Timestamp out of range"):new ge({ts:t,zone:co(r.zone,mt.defaultZone),loc:Je.fromObject(r)});throw new $r(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(go(t))return new ge({ts:t*1e3,zone:co(r.zone,mt.defaultZone),loc:Je.fromObject(r)});throw new $r("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=co(r.zone,mt.defaultZone);if(!n.isValid)return ge.invalid(Fl(n));const i=Je.fromObject(r),o=Gc(t,sy),{minDaysInFirstWeek:s,startOfWeek:a}=Kb(o,i),l=mt.now(),u=he(r.specificOffset)?n.offset(l):r.specificOffset,d=!he(o.ordinal),f=!he(o.year),h=!he(o.month)||!he(o.day),g=f||h,m=o.weekYear||o.weekNumber;if((g||d)&&m)throw new Zs("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(h&&d)throw new Zs("Can't mix ordinal dates with month/day");const b=m||o.weekday&&!g;let k,x,D=nc(l,u);b?(k=yA,x=pA,D=Kc(D,s,a)):d?(k=vA,x=bA,D=ch(D)):(k=Fc,x=Rw);let C=!1;for(const ye of k){const se=o[ye];he(se)?C?o[ye]=x[ye]:o[ye]=D[ye]:C=!0}const P=b?Z4(o,s,a):d?Y4(o):lw(o),O=P||uw(o);if(O)return ge.invalid(O);const H=b?Wb(o,s,a):d?Vb(o):o,[ee,ie]=Mc(H,u,n),X=new ge({ts:ee,zone:n,o:ie,loc:i});return o.weekday&&g&&t.weekday!==X.weekday?ge.invalid("mismatched weekday",`you can't specify both a weekday of ${o.weekday} and a date of ${X.toISO()}`):X.isValid?X:ge.invalid(X.invalid)}static fromISO(t,r={}){const[n,i]=zD(t);return js(n,i,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,i]=UD(t);return js(n,i,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,i]=qD(t);return js(n,i,r,"HTTP",r)}static fromFormat(t,r,n={}){if(he(t)||he(r))throw new $r("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:o=null}=n,s=Je.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0}),[a,l,u,d]=gA(s,t,r);return d?ge.invalid(d):js(a,l,n,`format ${r}`,t,u)}static fromString(t,r,n={}){return ge.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,i]=YD(t);return js(n,i,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new $r("need to specify a reason the DateTime is invalid");const n=t instanceof Jn?t:new Jn(t,r);if(mt.throwOnInvalid)throw new $4(n);return new ge({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=Nw(t,Je.fromObject(r));return n?n.map(i=>i?i.val:null).join(""):null}static expandFormat(t,r={}){return Fw(Cr.parseFormat(t),Je.fromObject(r)).map(i=>i.val).join("")}static resetCache(){Pl=void 0,J0.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?hh(this).weekYear:NaN}get weekNumber(){return this.isValid?hh(this).weekNumber:NaN}get weekday(){return this.isValid?hh(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?mh(this).weekday:NaN}get localWeekNumber(){return this.isValid?mh(this).weekNumber:NaN}get localWeekYear(){return this.isValid?mh(this).weekYear:NaN}get ordinal(){return this.isValid?ch(this.c).ordinal:NaN}get monthShort(){return this.isValid?tc.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?tc.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?tc.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?tc.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=Bd(this.c),i=this.zone.offset(n-t),o=this.zone.offset(n+t),s=this.zone.offset(n-i*r),a=this.zone.offset(n-o*r);if(s===a)return[this];const l=n-s*r,u=n-a*r,d=nc(l,s),f=nc(u,a);return d.hour===f.hour&&d.minute===f.minute&&d.second===f.second&&d.millisecond===f.millisecond?[Wo(this,{ts:l}),Wo(this,{ts:u})]:[this]}get isInLeapYear(){return ku(this.year)}get daysInMonth(){return Hc(this.year,this.month)}get daysInYear(){return this.isValid?Qs(this.year):NaN}get weeksInWeekYear(){return this.isValid?Yl(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Yl(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:i}=Cr.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:i}}toUTC(t=0,r={}){return this.setZone(Nr.instance(t),r)}toLocal(){return this.setZone(mt.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=co(t,mt.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(r||n){const o=t.offset(this.ts),s=this.toObject();[i]=Mc(s,o,t)}return Wo(this,{ts:i,zone:t})}else return ge.invalid(Fl(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const i=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return Wo(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=Gc(t,sy),{minDaysInFirstWeek:n,startOfWeek:i}=Kb(r,this.loc),o=!he(r.weekYear)||!he(r.weekNumber)||!he(r.weekday),s=!he(r.ordinal),a=!he(r.year),l=!he(r.month)||!he(r.day),u=a||l,d=r.weekYear||r.weekNumber;if((u||s)&&d)throw new Zs("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&s)throw new Zs("Can't mix ordinal dates with month/day");let f;o?f=Wb({...Kc(this.c,n,i),...r},n,i):he(r.ordinal)?(f={...this.toObject(),...r},he(r.day)&&(f.day=Math.min(Hc(f.year,f.month),f.day))):f=Vb({...ch(this.c),...r});const[h,g]=Mc(f,this.o,this.zone);return Wo(this,{ts:h,o:g})}plus(t){if(!this.isValid)return this;const r=Ne.fromDurationLike(t);return Wo(this,iy(this,r))}minus(t){if(!this.isValid)return this;const r=Ne.fromDurationLike(t).negate();return Wo(this,iy(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},i=Ne.normalizeUnit(t);switch(i){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(i==="weeks")if(r){const o=this.loc.getStartOfWeek(),{weekday:s}=this;s<o&&(n.weekNumber=this.weekNumber-1),n.weekday=o}else n.weekday=1;if(i==="quarters"){const o=Math.ceil(this.month/3);n.month=(o-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?Cr.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):fh}toLocaleString(t=Vc,r={}){return this.isValid?Cr.create(this.loc.clone(r),t).formatDateTime(this):fh}toLocaleParts(t={}){return this.isValid?Cr.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:i=!0,extendedZone:o=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=Pc(s);const a=t==="extended";let l=gh(this,a,s);return Fc.indexOf(s)>=3&&(l+="T"),l+=oy(this,a,r,n,i,o,s),l}toISODate({format:t="extended",precision:r="day"}={}){return this.isValid?gh(this,t==="extended",Pc(r)):null}toISOWeekDate(){return ic(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:i=!1,extendedZone:o=!1,format:s="extended",precision:a="milliseconds"}={}){return this.isValid?(a=Pc(a),(i&&Fc.indexOf(a)>=3?"T":"")+oy(this,s==="extended",r,t,n,o,a)):null}toRFC2822(){return ic(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return ic(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?gh(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let i="HH:mm:ss.SSS";return(r||t)&&(n&&(i+=" "),r?i+="z":t&&(i+="ZZ")),ic(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():fh}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return Ne.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...n},o=Q4(r).map(Ne.normalizeUnit),s=t.valueOf()>this.valueOf(),a=s?this:t,l=s?t:this,u=rA(a,l,o,i);return s?u.negate():u}diffNow(t="milliseconds",r={}){return this.diff(ge.now(),t,r)}until(t){return this.isValid?vt.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const i=t.valueOf(),o=this.setZone(t.zone,{keepLocalTime:!0});return o.startOf(r,n)<=i&&i<=o.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||ge.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],o=t.unit;return Array.isArray(t.unit)&&(i=t.unit,o=void 0),ly(r,this.plus(n),{...t,numeric:"always",units:i,unit:o})}toRelativeCalendar(t={}){return this.isValid?ly(t.base||ge.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(ge.isDateTime))throw new $r("min requires all arguments be DateTimes");return Hb(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(ge.isDateTime))throw new $r("max requires all arguments be DateTimes");return Hb(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:i=null,numberingSystem:o=null}=n,s=Je.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});return Iw(s,t,r)}static fromStringExplain(t,r,n={}){return ge.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:i=null}=r,o=Je.fromOpts({locale:n,numberingSystem:i,defaultToEN:!0});return new Pw(o,t)}static fromFormatParser(t,r,n={}){if(he(t)||he(r))throw new $r("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:o=null}=n,s=Je.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});if(!s.equals(r.locale))throw new $r(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${r.locale}`);const{result:a,zone:l,specificOffset:u,invalidReason:d}=r.explainFromTokens(t);return d?ge.invalid(d):js(a,l,n,`format ${r.format}`,t,u)}static get DATE_SHORT(){return Vc}static get DATE_MED(){return B2}static get DATE_MED_WITH_WEEKDAY(){return E4}static get DATE_FULL(){return L2}static get DATE_HUGE(){return _2}static get TIME_SIMPLE(){return j2}static get TIME_WITH_SECONDS(){return z2}static get TIME_WITH_SHORT_OFFSET(){return U2}static get TIME_WITH_LONG_OFFSET(){return q2}static get TIME_24_SIMPLE(){return W2}static get TIME_24_WITH_SECONDS(){return V2}static get TIME_24_WITH_SHORT_OFFSET(){return K2}static get TIME_24_WITH_LONG_OFFSET(){return H2}static get DATETIME_SHORT(){return G2}static get DATETIME_SHORT_WITH_SECONDS(){return Z2}static get DATETIME_MED(){return Y2}static get DATETIME_MED_WITH_SECONDS(){return J2}static get DATETIME_MED_WITH_WEEKDAY(){return C4}static get DATETIME_FULL(){return X2}static get DATETIME_FULL_WITH_SECONDS(){return Q2}static get DATETIME_HUGE(){return ew}static get DATETIME_HUGE_WITH_SECONDS(){return tw}}function cl(e){if(ge.isDateTime(e))return e;if(e&&e.valueOf&&go(e.valueOf()))return ge.fromJSDate(e);if(e&&typeof e=="object")return ge.fromObject(e);throw new $r(`Unknown datetime argument: ${e}, of type ${typeof e}`)}Intl.DateTimeFormat().resolvedOptions().locale;var J;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(J||(J={}));J.Year,J.Hour,J.Minute,J.Second,J.Millisecond;J.Month,J.Week,J.Day;J.Millisecond,J.Second,J.Minute,J.Hour,J.Day,J.Week,J.Month,J.Year;const cy={min:0,max:23},dy={min:0,max:59},fy={min:0,max:59},hy={min:0,max:999};var pe;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(pe||(pe={}));const kA=[pe.Milliseconds,pe.Seconds,pe.Minutes,pe.Hours,pe.Days,pe.Weeks,pe.Months,pe.Years];pe.Milliseconds+"",pe.Seconds+"",pe.Minutes+"",pe.Hours+"",pe.Days+"",pe.Weeks+"",pe.Months+"",pe.Years+"";pe.Years+"",J.Year,pe.Months+"",J.Month,pe.Weeks+"",J.Week,pe.Days+"",J.Day,pe.Hours+"",J.Hour,pe.Minutes+"",J.Minute,pe.Seconds+"",J.Second,pe.Milliseconds+"",J.Millisecond;J.Year+"",pe.Years,J.Month+"",pe.Months,J.Week+"",pe.Weeks,J.Day+"",pe.Days,J.Hour+"",pe.Hours,J.Minute+"",pe.Minutes,J.Second+"",pe.Seconds,J.Millisecond+"",pe.Milliseconds;function xA(e){return kA.filter(t=>e[t])}function X0(e,{decimalCount:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function $A(e){return X0(Math.max(e-.4,0),{decimalCount:0})}function my(e){return e===0?0:Math.sign(e)}function ca(e,t,r={}){const n={},i={decimalCount:r.decimalCount==null?void 0:Math.round(Math.abs(r.decimalCount))},o=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),a=xA(t).reverse();if(o||s)return a.forEach(d=>{n[d]=o?1/0:-1/0}),n;let l=Ne.fromObject(e).as(pe.Milliseconds);const u=my(l);return a.forEach((d,f)=>{const h=f===a.length-1;if(d===pe.Milliseconds)n.milliseconds=X0(l,i);else{const g=Ne.fromObject({milliseconds:l}).as(d),m=Math.sign(g),b=Math.abs(g),k=h?X0(b,i):Math.floor(i.decimalCount==null?b:$A(b)),x=k===0?0:k*m;n[d]=x,l-=Ne.fromObject({[d]:x}).as(pe.Milliseconds),u!==my(l)&&(l=0)}}),n}var Dr;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(Dr||(Dr={}));Dr.Sunday+"",Dr.Monday+"",Dr.Tuesday+"",Dr.Wednesday+"",Dr.Thursday+"",Dr.Friday+"",Dr.Saturday+"";Dr.Sunday,Dr.Monday,Dr.Tuesday,Dr.Wednesday,Dr.Thursday,Dr.Friday,Dr.Saturday;var Hr;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(Hr||(Hr={}));Hr.January,Hr.February,Hr.March,Hr.April,Hr.May,Hr.June,Hr.July,Hr.August,Hr.September,Hr.October,Hr.November,Hr.December;const gy={min:1,max:12},py={min:1,max:31};function jd(e){const t=new Wc,n=Object.values(e).some(i=>i===1/0||i===-1/0)?1/0:ca(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}function Bw(...e){const t=e.join(""),r=Nd(Array.from(t));return Array.from(r).join("")}function Lw(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function _w(e,t){const r=Bw([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return jw(e,r)}function jw(e,t){const r=Bw(t);return typeof e=="string"?new RegExp(Lw(e),r):new RegExp(e.source,r)}function zw(e,{caseSensitive:t}){const n="".replaceAll("i","");return jw(e,n)}function ug(e,t=1){return e.split(`
`).map(r=>["    ".repeat(Math.round(t)),r].join("")).join(`
`)}function Uw(e,t){return t?typeof t=="string"?!!new RegExp(Lw(t),"i").exec(e):!!_w(t,"i").exec(e):!1}class w extends Error{name="AssertionError";constructor(t,r){super(Ia(r,t)||"Assertion failed.")}}const by={interval:{milliseconds:100},timeout:{seconds:10}},ph=Symbol("not set");async function DA(e,t,r){const{callback:n,extraAssertionArgs:i,failureMessage:o,options:s}=AA(t),a=ca(s.timeout,{milliseconds:!0}).milliseconds,l=ca(s.interval,{milliseconds:!0});let u=ph,d;async function f(){try{u=r?n():await n(),e(u,...i)}catch(g){u=ph,d=kt(g)}}const h=Date.now();for(;u===ph;)if(await f(),await jd(l),Date.now()-h>=a){const m=`${o?`${o}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw Na(d,m)}return u}function R(e,t=!1){return((...r)=>DA(e,r,t))}function AA(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:qw(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function qw(e){return{interval:e?.interval||by.interval,timeout:e?.timeout||by.timeout}}const dl={isFalse(e,t){if(e!==!1)throw new w(`'${$(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new w(`'${$(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new w(`'${$(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new w(`'${$(e)}' is not truthy.`,t)}},Ww={assert:dl,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new w(`'${$(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new w(`'${$(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new w(`'${$(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new w(`'${$(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:R(dl.isFalse),isFalsy:R(dl.isFalsy),isTrue:R(dl.isTrue),isTruthy:R(dl.isTruthy)}};function EA(e,t,r){if(typeof e=="string"){if(!e.endsWith(t))throw new w(`${$(e)} does not end with ${$(t)}}`,r)}else if(e[e.length-1]!==t)throw new w(`${$(e)} does not end with ${$(t)}}`,r)}function CA(e,t,r){if(typeof e=="string"){if(e.endsWith(t))throw new w(`${$(e)} ends with ${$(t)}}`,r)}else if(e[e.length-1]===t)throw new w(`${$(e)} ends with ${$(t)}}`,r)}function SA(e,t,r){if(typeof e=="string"){if(!e.startsWith(t))throw new w(`${$(e)} does not start with ${$(t)}}`,r)}else if(e[0]!==t)throw new w(`${$(e)} does not start with ${$(t)}}`,r)}function TA(e,t,r){if(typeof e=="string"){if(e.startsWith(t))throw new w(`${$(e)} starts with ${$(t)}}`,r)}else if(e[0]===t)throw new w(`${$(e)} starts with ${$(t)}}`,r)}const fl={endsWith:EA,endsWithout:CA,startsWith:SA,startsWithout:TA},Vw={assert:fl,check:{endsWith:((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new w(`${$(e)} does not end with ${$(t)}}`,r)}else if(e[e.length-1]!==t)throw new w(`${$(e)} does not end with ${$(t)}}`,r);return e}),endsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.endsWith(t))throw new w(`${$(e)} ends with ${$(t)}}`,r)}else if(e[e.length-1]===t)throw new w(`${$(e)} ends with ${$(t)}}`,r);return e}),startsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new w(`${$(e)} does not start with ${$(t)}}`,r)}else if(e[0]!==t)throw new w(`${$(e)} does not start with ${$(t)}}`,r);return e}),startsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.startsWith(t))throw new w(`${$(e)} starts with ${$(t)}}`,r)}else if(e[0]===t)throw new w(`${$(e)} starts with ${$(t)}}`,r);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:R(fl.endsWith),endsWithout:R(fl.endsWithout),startsWith:R(fl.startsWith),startsWithout:R(fl.startsWithout)}};function MA(e,t,r){const n=ln(t);if(!n.includes(e))throw new w(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}function Ri(e,t){return ln(t).includes(e)}const bh={isEnumValue(e,t,r){MA(e,t,r)},isNotEnumValue(e,t,r){const n=ln(t);if(n.includes(e))throw new w(`${String(e)} is an enum value in '${n.join(",")}'.`,r)}},Kw={assert:bh,check:{isEnumValue:Ri,isNotEnumValue(e,t){return!ln(t).includes(e)}},assertWrap:{isEnumValue(e,t,r){const n=ln(t);if(!n.includes(e))throw new w(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e},isNotEnumValue(e,t,r){const n=ln(t);if(n.includes(e))throw new w(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e}},checkWrap:{isEnumValue(e,t){if(ln(t).includes(e))return e},isNotEnumValue(e,t){if(!ln(t).includes(e))return e}},waitUntil:{isEnumValue:R(bh.isEnumValue),isNotEnumValue:R(bh.isNotEnumValue)}},yh={entriesEqual(e,t,r){if(!e||typeof e!="object")throw new w(`${$(e)} is not an object.`,r);if(!t||typeof t!="object")throw new w(`${$(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new w(`Entries are not equal at key '${String(i)}'.`,r)})},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))throw new w("Entries are equal.",r)}},Hw={assert:yh,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>{const i=e[n],o=t[n];return i===o})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>{const i=e[n],o=t[n];return i!==o})}},assertWrap:{entriesEqual(e,t,r){if(!e||typeof e!="object")throw new w(`${$(e)} is not an object.`,r);if(!t||typeof t!="object")throw new w(`${$(t)} is not an object.`,r);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new w(`Entries are not equal at key '${String(i)}'.`,r)}),e},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))return e;throw new w("Entries are equal.",r)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const o=e[i],s=t[i];return o===s}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const o=e[i],s=t[i];return o!==s}))return e}},waitUntil:{entriesEqual:R(yh.entriesEqual),notEntriesEqual:R(yh.notEntriesEqual)}};function Zc(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Jl(e,t){if(!(e===t||Zc(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length!==n.length)throw new Error("Values are not JSON equal.");if(!Zc(r,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(o=>{try{Jl(e[o],t[o])}catch(s){throw new Error(`JSON objects are not equal at key '${o}': ${fr(s)}`)}})}throw new Error("Values are not JSON equal.")}}function Il(e,t){if(e===t||Zc(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length!==n.length||!Zc(r,n)?!1:Object.keys(e).every(o=>Il(e[o],t[o]))}return!1}const vh={jsonEquals(e,t,r){try{Jl(e,t)}catch(n){throw new w(fr(n),r)}},notJsonEquals(e,t,r){try{Jl(e,t)}catch{return}throw new w("Values are JSON equal.",r)}},Gw={assert:vh,check:{jsonEquals(e,t){return Il(e,t)},notJsonEquals(e,t){return!Il(e,t)}},assertWrap:{jsonEquals(e,t,r){try{return Jl(e,t),e}catch(n){throw new w(fr(n),r)}},notJsonEquals(e,t,r){try{Jl(e,t)}catch{return e}throw new w("Values are JSON equal.",r)}},checkWrap:{jsonEquals(e,t){if(Il(e,t))return e},notJsonEquals(e,t){if(!Il(e,t))return e}},waitUntil:{jsonEquals:R(vh.jsonEquals),notJsonEquals:R(vh.notJsonEquals)}};function yy(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function Zw(){this._key="chai/deep-eql__"+Math.random()+Date.now()}Zw.prototype={get:function(t){return t[this._key]},set:function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})}};var Yw=typeof WeakMap=="function"?WeakMap:Zw;function vy(e,t,r){if(!r||da(e)||da(t))return null;var n=r.get(e);if(n){var i=n.get(t);if(typeof i=="boolean")return i}return null}function oc(e,t,r,n){if(!(!r||da(e)||da(t))){var i=r.get(e);i?i.set(t,n):(i=new Yw,i.set(t,n),r.set(e,i))}}function Gn(e,t,r){if(r&&r.comparator)return wy(e,t,r);var n=Jw(e,t);return n!==null?n:wy(e,t,r)}function Jw(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:da(e)||da(t)?!1:null}function wy(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new Yw;var n=r&&r.comparator,i=vy(e,t,r.memoize);if(i!==null)return i;var o=vy(t,e,r.memoize);if(o!==null)return o;if(n){var s=n(e,t);if(s===!1||s===!0)return oc(e,t,r.memoize,s),s;var a=Jw(e,t);if(a!==null)return a}var l=yy(e);if(l!==yy(t))return oc(e,t,r.memoize,!1),!1;oc(e,t,r.memoize,!0);var u=FA(e,t,l,r);return oc(e,t,r.memoize,u),u}function FA(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return Gn(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return Xw(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return is(e,t,n);case"RegExp":return PA(e,t);case"Generator":return IA(e,t,n);case"DataView":return is(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return is(new Uint8Array(e),new Uint8Array(t),n);case"Set":return ky(e,t,n);case"Map":return ky(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return OA(e,t,n)}}function PA(e,t){return e.toString()===t.toString()}function ky(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],i=[];return e.forEach(function(s,a){n.push([s,a])}),t.forEach(function(s,a){i.push([s,a])}),is(n.sort(),i.sort(),r)}function is(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var i=-1;++i<n;)if(Gn(e[i],t[i],r)===!1)return!1;return!0}function IA(e,t,r){return is(Q0(e),Q0(t),r)}function NA(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}function xy(e){if(NA(e))try{return Q0(e[Symbol.iterator]())}catch{return[]}return[]}function Q0(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}function $y(e){var t=[];for(var r in e)t.push(r);return t}function Dy(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var i=r[n];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}function Xw(e,t,r,n){var i=r.length;if(i===0)return!0;for(var o=0;o<i;o+=1)if(Gn(e[r[o]],t[r[o]],n)===!1)return!1;return!0}function OA(e,t,r){var n=$y(e),i=$y(t),o=Dy(e),s=Dy(t);if(n=n.concat(o),i=i.concat(s),n.length&&n.length===i.length)return is(Ay(n).sort(),Ay(i).sort())===!1?!1:Xw(e,t,n,r);var a=xy(e),l=xy(t);return a.length&&a.length===l.length?(a.sort(),l.sort(),is(a,l,r)):n.length===0&&a.length===0&&i.length===0&&l.length===0}function da(e){return e===null||typeof e!="object"}function Ay(e){return e.map(function(r){return typeof r=="symbol"?r.toString():r})}class ta extends w{name="DiffError";constructor(t,r,n,i){const o=y4(r,n);super([t,ug(o)].join(`
`),i)}}function ao(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const io={strictEquals(e,t,r){if(e!==t)throw typeof e=="object"&&e||typeof t=="object"&&t?new w(`Strict reference equality failed for 

${$(t)}

.`,r):new ta("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new w(`Strict reference INequality failed for 

${$(t)}

.`,r):new w(`

${$(e)}

strictly equals

${$(t)}

`,r)},looseEquals(e,t,r){if(e!=t)throw typeof e=="object"&&e||typeof t=="object"&&t?new w(`Loose reference equality failed for 

${$(t)}

.`,r):new ta("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new w(`Loose reference INequality failed for 

${$(t)}

.`,r):new w(`

${$(e)}

loosely equals

${$(t)}

`,r)},deepEquals(e,t,r){if(!Gn(e,t,{comparator:ao}))throw new ta("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(Gn(e,t,{comparator:ao}))throw new w(`

${$(e)}

deeply equals

${$(t)}

`,r)}},Qw=io.deepEquals,ek={assert:io,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return Gn(e,t,{comparator:ao})},notDeepEquals(e,t){return!Gn(e,t,{comparator:ao})}},assertWrap:{strictEquals(e,t,r){if(e===t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new w(`Strict reference equality failed for 

${$(t)}

.`,r):new ta("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new w(`Strict reference INequality failed for 

${$(t)}

.`,r):new w(`

${$(e)}

strictly equals

${$(t)}

`,r);return e},looseEquals(e,t,r){if(e==t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new w(`Loose reference equality failed for 

${$(t)}

.`,r):new ta("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new w(`Loose reference INequality failed for 

${$(t)}

.`,r):new w(`

${$(e)}

loosely equals

${$(t)}

`,r);return e},deepEquals(e,t,r){if(Gn(e,t,{comparator:ao}))return e;throw new ta("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(Gn(e,t,{comparator:ao}))throw new w(`

${$(e)}

deeply equals

${$(t)}

`,r);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(Gn(e,t,{comparator:ao}))return e},notDeepEquals(e,t){if(!Gn(e,t,{comparator:ao}))return e}},waitUntil:{strictEquals:R(io.strictEquals),notStrictEquals:R(io.notStrictEquals),looseEquals:R(io.looseEquals),notLooseEquals:R(io.notLooseEquals),deepEquals:R(io.deepEquals),notDeepEquals:R(io.notDeepEquals)}};function sn(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let r=!0;try{r=Reflect.ownKeys(e).map(n=>e[n]).includes(t)}catch{return!1}return r}function Mn(e,t){return typeof t=="string"?t.includes(e):sn(t,e)}const Ii={hasValue(e,t,r){if(!sn(e,t))throw new w(`'${$(e)}' does not have value '${$(t)}'.`,r)},lacksValue(e,t,r){if(sn(e,t))throw new w(`'${$(e)}' has value '${$(t)}'.`,r)},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>!i.includes(o))}catch{throw new w(`'${$(e)}' does not have values '${$(t)}'.`,r)}if(n.length)throw new w(`'${$(e)}' does not have values '${$(n)}'.`,r)},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>i.includes(o))}catch{}if(n.length)throw new w(`'${$(e)}' has values '${$(n)}'.`,r)},isIn(e,t,r){if(!Mn(e,t))throw new w(`'${$(e)}'

is not in

${$(t)}.`,r)},isNotIn(e,t,r){if(Mn(e,t))throw new w(`'${$(e)}'

is in

${$(t)}.`,r)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new w(`'${$(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new w(`'${$(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new w(`'${$(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new w(`'${$(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new w(`'${$(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new w(`'${$(e)}' is not empty.`,t)}}},tk={assert:Ii,check:{hasValue(e,t){return sn(e,t)},lacksValue(e,t){return!sn(e,t)},hasValues(e,t){return t.every(r=>sn(e,r))},lacksValues(e,t){return t.every(r=>!sn(e,r))},isIn(e,t){return Mn(e,t)},isNotIn(e,t){return!Mn(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,r){if(!sn(e,t))throw new w(`'${$(e)}' does not have value '${$(t)}'.`,r);return e},lacksValue(e,t,r){if(sn(e,t))throw new w(`'${$(e)}' has value '${$(t)}'.`,r);return e},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>!i.includes(o))}catch{throw new w(`'${$(e)}' does not have values '${$(t)}'.`,r)}if(n.length)throw new w(`'${$(e)}' does not have values '${$(n)}'.`,r);return e},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>i.includes(o))}catch{}if(n.length)throw new w(`'${$(e)}' has values '${$(n)}'.`,r);return e},isIn(e,t,r){if(!Mn(e,t))throw new w(`'${$(e)}'

is not in

${$(t)}.`,r);return e},isNotIn(e,t,r){if(Mn(e,t))throw new w(`'${$(e)}'

is in

${$(t)}.`,r);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new w(`'${$(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new w(`'${$(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new w(`'${$(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new w(`'${$(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new w(`'${$(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new w(`'${$(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(sn(e,t))return e},lacksValue(e,t){if(!sn(e,t))return e},hasValues(e,t){if(t.every(r=>sn(e,r)))return e},lacksValues(e,t){if(!t.every(r=>sn(e,r)))return e},isIn(e,t){if(Mn(e,t))return e},isNotIn(e,t){if(!Mn(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:R(Ii.hasValue),lacksValue:R(Ii.lacksValue),hasValues:R(Ii.hasValues),lacksValues:R(Ii.lacksValues),isIn:R(Ii.isIn),isNotIn:R(Ii.isNotIn),isEmpty:R(Ii.isEmpty),isNotEmpty:R(Ii.isNotEmpty)}},wh={isHttpStatus(e,t){if(!Ri(e,F))throw new w(`${$(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,r){if(Ri(e,F)){if(!Mn(e,Tc[t]))throw new w(`${$(e)} is not a '${t}' HTTP status.`,r)}else throw new w(`${$(e)} is not a valid HTTP status.`,r)}},rk={assert:wh,check:{isHttpStatus(e){return Ri(e,F)},isHttpStatusCategory(e,t){return Ri(e,F)&&Mn(e,Tc[t])}},assertWrap:{isHttpStatus(e,t){if(!Ri(e,F))throw new w(`${$(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,r){if(Ri(e,F)){if(!Mn(e,Tc[t]))throw new w(`${$(e)} is not a '${t}' HTTP status.`,r)}else throw new w(`${$(e)} is not a valid HTTP status.`,r);return e}},checkWrap:{isHttpStatus(e){if(Ri(e,F))return e},isHttpStatusCategory(e,t){if(Ri(e,F)&&Mn(e,Tc[t]))return e}},waitUntil:{isHttpStatus:R(wh.isHttpStatus),isHttpStatusCategory:R(wh.isHttpStatusCategory)}},kh={instanceOf(e,t,r){if(!(e instanceof t))throw new w(`'${$(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new w(`'${$(e)}' is an instance of '${t.name}'`,r)}},nk={assert:kh,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,r){if(e instanceof t)return e;throw new w(`'${$(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new w(`'${$(e)}' is an instance of '${t.name}'`,r);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:R(kh.instanceOf),notInstanceOf:R(kh.notInstanceOf)}},RA=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function dt(e,t){return RA.some(r=>{try{return r(e,t)}catch{return!1}})}const Vo={isKeyOf(e,t,r){if(!dt(t,e))throw new w(`'${String(e)}' is not a key of '${$(t)}'.`,r)},isNotKeyOf(e,t,r){if(dt(t,e))throw new w(`'${String(e)}' is a key of '${$(t)}'.`,r)},hasKey(e,t,r){if(!dt(e,t))throw new w(`'${$(e)}' does not have key '${String(t)}'.`,r)},lacksKey(e,t,r){if(dt(e,t))throw new w(`'${$(e)}' has key '${String(t)}'.`,r)},hasKeys(e,t,r){const n=t.filter(i=>!dt(e,i));if(n.length)throw new w(`'${$(e)}' does not have keys '${n.join(",")}'.`,r)},lacksKeys(e,t,r){const n=t.filter(i=>dt(e,i));if(n.length)throw new w(`'${$(e)}' does not lack keys '${n.join(",")}'.`,r)}},ik={assert:Vo,check:{isKeyOf(e,t){return dt(t,e)},isNotKeyOf(e,t){return!dt(t,e)},hasKey:dt,lacksKey(e,t){return!dt(e,t)},hasKeys(e,t){return t.every(r=>dt(e,r))},lacksKeys(e,t){return t.every(r=>!dt(e,r))}},assertWrap:{isKeyOf(e,t,r){if(!dt(t,e))throw new w(`'${String(e)}' is not a key of '${$(t)}'.`,r);return e},isNotKeyOf(e,t,r){if(dt(t,e))throw new w(`'${String(e)}' is a key of '${$(t)}'.`,r);return e},hasKey(e,t,r){if(!dt(e,t))throw new w(`'${$(e)}' does not have key '${String(t)}'.`,r);return e},lacksKey(e,t,r){if(dt(e,t))throw new w(`'${$(e)}' has key '${String(t)}'.`,r);return e},hasKeys(e,t,r){const n=t.filter(i=>!dt(e,i));if(n.length)throw new w(`'${$(e)}' does not have keys '${n.join(",")}'.`,r);return e},lacksKeys(e,t,r){const n=t.filter(i=>dt(e,i));if(n.length)throw new w(`'${$(e)}' does not lack keys '${n.join(",")}'.`,r);return e}},checkWrap:{isKeyOf(e,t){if(dt(t,e))return e},isNotKeyOf(e,t){if(!dt(t,e))return e},hasKey(e,t){if(dt(e,t))return e},lacksKey(e,t){if(!dt(e,t))return e},hasKeys(e,t){if(t.every(r=>dt(e,r)))return e},lacksKeys(e,t){if(t.every(r=>!dt(e,r)))return e}},waitUntil:{isKeyOf:R(Vo.isKeyOf),isNotKeyOf:R(Vo.isNotKeyOf),hasKey:R(Vo.hasKey),lacksKey:R(Vo.lacksKey),hasKeys:R(Vo.hasKeys),lacksKeys:R(Vo.lacksKeys)}};function BA(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)<t)throw new w(`Length '${e.length}' is not at least '${t}'.`,r)}function LA(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)!==t)throw new w(`Length '${e.length}' is not exactly '${t}'.`,r)}const xh={isLengthAtLeast:BA,isLengthExactly:LA},ok={assert:xh,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)<t)throw new w(`Length '${e.length}' is not at least '${t}'.`,r);return e}),isLengthExactly:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)!==t)throw new w(`Length '${e.length}' is not exactly '${t}'.`,r);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)===t)return e})},waitUntil:{isLengthAtLeast:R(xh.isLengthAtLeast),isLengthExactly:R(xh.isLengthExactly)}},_A={never(e){throw new w("This code should not have executed.",e)}},sk={assert:_A,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},$h={isDefined(e,t){if(e==null)throw new w(`'${$(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new w(`'${$(e)}' is not a nullish.`,t)}},ak={assert:$h,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new w(`'${$(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new w(`'${$(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:R($h.isDefined),isNullish:R($h.isNullish)}},Vr={isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new w(`${e} is not within the bounds ${$({min:r,max:t})}`,n)},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new w(`${e} is not outside the bounds ${$({min:t,max:r})}`,n)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new w(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new w(`${e} is an integer.`,t)},isAbove(e,t,r){if(e<=t)throw new w(`${e} is not above ${t}`,r)},isAtLeast(e,t,r){if(e<t)throw new w(`${e} is not at least ${t}`,r)},isBelow(e,t,r){if(e>=t)throw new w(`${e} is not below ${t}`,r)},isAtMost(e,t,r){if(e>t)throw new w(`${e} is not at most ${t}`,r)},isNaN(e,t){if(!isNaN(e))throw new w(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new w(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new w(`${e} is not infinite`,t)},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new w(`${e} is not within ±${r} of ${t}`,n)},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new w(`${e} is within ±${r} of ${t}`,n)}},lk={assert:Vr,check:{isInBounds(e,{max:t,min:r}){return r<=e&&e<=t},isOutBounds(e,{max:t,min:r}){return e<r||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,r){return t-r<=e&&e<=t+r},isNotApproximately(e,t,r){return e<t-r||e>t+r}},assertWrap:{isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new w(`${e} is not within the bounds ${$({min:r,max:t})}`,n);return e},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new w(`${e} is not outside the bounds ${$({min:t,max:r})}`,n);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new w(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new w(`${e} is an integer.`,t);return e},isAbove(e,t,r){if(e<=t)throw new w(`${e} is not above ${t}`,r);return e},isAtLeast(e,t,r){if(e<t)throw new w(`${e} is not at least ${t}`,r);return e},isBelow(e,t,r){if(e>=t)throw new w(`${e} is not below ${t}`,r);return e},isAtMost(e,t,r){if(e>t)throw new w(`${e} is not at most ${t}`,r);return e},isNaN(e,t){if(!isNaN(e))throw new w(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new w(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new w(`${e} is not infinite`,t);return e},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new w(`${e} is not within ±${r} of ${t}`,n);return e},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new w(`${e} is within ±${r} of ${t}`,n);return e}},checkWrap:{isInBounds(e,{max:t,min:r}){if(r<=e&&e<=t)return e},isOutBounds(e,{max:t,min:r}){if(e<r||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,r){if(t-r<=e&&e<=t+r)return e},isNotApproximately(e,t,r){if(e<t-r||e>t+r)return e}},waitUntil:{isInBounds:R(Vr.isInBounds),isOutBounds:R(Vr.isOutBounds),isInteger:R(Vr.isInteger),isNotInteger:R(Vr.isNotInteger),isAbove:R(Vr.isAbove),isAtLeast:R(Vr.isAtLeast),isBelow:R(Vr.isBelow),isAtMost:R(Vr.isAtMost),isNaN:R(Vr.isNaN),isFinite:R(Vr.isFinite),isInfinite:R(Vr.isInfinite),isApproximately:R(Vr.isApproximately),isNotApproximately:R(Vr.isNotApproximately)}};function jA(e,t,r,n,i){return Du(...zd(e,t,r,n,i),!1)}function zd(e,t,r,n,i){const o=Array.isArray(r);return[o?e:Qw,o?t:e,o?r:t,o?n:r,o?i:n]}function Du(e,t,r,n,i,o){const s=t(...r);if(s instanceof Promise)return new Promise(async(a,l)=>{try{const u=await s;e(u,n),o?a(u):a()}catch(u){l(new w(`Output from '${t.name}' did not produce expected output. ${fr(u)}`,i))}});try{return e(s,n),o?s:void 0}catch(a){throw new w(`Output from '${t.name}' did not produce expected output. ${fr(a)}`,i)}}function zA(e,t,r,n,i){try{const o=Du(...zd(e,t,r,n,i),!1);return o instanceof Promise?new Promise(async s=>{try{await o,s(!0)}catch{s(!1)}}):!0}catch{return!1}}function UA(e,t,r,n,i){return Du(...zd(e,t,r,n,i),!0)}function qA(e,t,r,n,i){try{const o=Du(...zd(e,t,r,n,i),!0);return o instanceof Promise?new Promise(async s=>{try{s(await o)}catch{s(void 0)}}):o}catch{return}}const Dh=Symbol("not set");async function WA(e,t,r,n,i,o){const s=Array.isArray(r),a=s?e:Qw,l=s?t:e,u=s?r:t,d=s?n:r,f=qw(s?i:n),h=s?o:i,g=ca(f.timeout,{milliseconds:!0}).milliseconds,m=ca(f.interval,{milliseconds:!0});let b=Dh,k;async function x(){try{b=await Du(a,l,u,d,void 0,!0)}catch(C){b=Dh,k=kt(C)}}const D=Date.now();for(;b===Dh;)if(await x(),await jd(m),Date.now()-D>=g)throw Na(k,Ia(h,`Timeout of '${g}' milliseconds exceeded waiting for callback value to match expectations`));return b}const VA={output:jA},uk={assert:VA,check:{output:zA},assertWrap:{output:UA},checkWrap:{output:qA},waitUntil:{output:WA}},hl={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new w(`'${$(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new w(`'${$(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new w(`'${$(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new w(`'${$(e)}' is not a Primitive.`,t)}},ck={assert:hl,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new w(`'${$(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new w(`'${$(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new w(`'${$(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new w(`'${$(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:R(hl.isNotPrimitive),isNotPropertyKey:R(hl.isNotPropertyKey),isPrimitive:R(hl.isPrimitive),isPropertyKey:R(hl.isPropertyKey)}},ml={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new w(`'${$(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new w(`'${$(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new w(`'${$(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new w(`'${$(e)}' is a Promise.`,t)}},dk={assert:ml,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new w(`'${$(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new w(`'${$(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new w(`'${$(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new w(`'${$(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:R(ml.isPromiseLike,!0),isNotPromiseLike:R(ml.isNotPromiseLike,!0),isPromise:R(ml.isPromise,!0),isNotPromise:R(ml.isNotPromise,!0)}},Ah={matches(e,t,r){if(!t.test(e))throw new w(`'${e}' does not match ${t}`,r)},mismatches(e,t,r){if(t.test(e))throw new w(`'${e}' matches ${t}`,r)}},fk={assert:Ah,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,r){if(!t.test(e))throw new w(`'${e}' does not match ${t}`,r);return e},mismatches(e,t,r){if(t.test(e))throw new w(`'${e}' matches ${t}`,r);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:R(Ah.matches,!0),mismatches:R(Ah.mismatches,!0)}},ht={isArray(e,t){if(!Array.isArray(e))throw new w(`'${$(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new w(`'${$(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new w(`'${$(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new w(`'${$(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new w(`'${$(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new w(`'${$(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new w(`'${$(e)}' is not a non-null object.`,t)},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new w(`'${$(e)}' is not a plain object.`,t)},isString(e,t){if(typeof e!="string")throw new w(`'${$(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new w(`'${$(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new w(`'${$(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new w(`'${$(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new w(`'${$(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new w(`'${$(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new w(`'${$(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new w(`'${$(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new w(`'${$(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new w(`'${$(e)}' is a non-null object.`,t)},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(!(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new w(`'${$(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new w(`'${$(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new w(`'${$(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new w(`'${$(e)}' is a undefined.`,t)}},hk={assert:ht,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isPlainObject(e){if(typeof e!="object"||e==null)return!1;const t=Object.getPrototypeOf(e);return(t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotPlainObject(e){if(typeof e!="object"||e==null)return!0;const t=Object.getPrototypeOf(e);return!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new w(`'${$(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new w(`'${$(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new w(`'${$(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new w(`'${$(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new w(`'${$(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new w(`'${$(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new w(`'${$(e)}' is not a non-null object.`,t);return e},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new w(`'${$(e)}' is not a plain object.`,t);return e},isString(e,t){if(typeof e!="string")throw new w(`'${$(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new w(`'${$(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new w(`'${$(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new w(`'${$(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new w(`'${$(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new w(`'${$(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new w(`'${$(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new w(`'${$(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new w(`'${$(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new w(`'${$(e)}' is a non-null object.`,t);return e},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new w(`'${$(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new w(`'${$(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new w(`'${$(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new w(`'${$(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number"&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isPlainObject(e){if(typeof e!="object"||e==null)return;const t=Object.getPrototypeOf(e);if((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e=="number"&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotPlainObject(e){if(typeof e!="object"||e==null)return e;const t=Object.getPrototypeOf(e);if(!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:R(ht.isArray),isBigInt:R(ht.isBigInt),isBoolean:R(ht.isBoolean),isFunction:R(ht.isFunction),isNull:R(ht.isNull),isNumber:R(ht.isNumber),isObject:R(ht.isObject),isPlainObject:R(ht.isPlainObject),isString:R(ht.isString),isSymbol:R(ht.isSymbol),isUndefined:R(ht.isUndefined),isNotArray:R(ht.isNotArray),isNotBigInt:R(ht.isNotBigInt),isNotBoolean:R(ht.isNotBoolean),isNotFunction:R(ht.isNotFunction),isNotNull:R(ht.isNotNull),isNotNumber:R(ht.isNotNumber),isNotObject:R(ht.isNotObject),isNotPlainObject:R(ht.isNotPlainObject),isNotString:R(ht.isNotString),isNotSymbol:R(ht.isNotSymbol),isNotUndefined:R(ht.isNotUndefined)}};var Gr;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Gr||(Gr={}));function cg(e,t,r){dg(e,{noError:"No error.",notInstance:`'${$(e)}' is not an error instance.`},t,r)}function Ey(e,t,r){dg(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${$(e)}' is not an error instance.`},t,r)}function dg(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const i=e.constructor.name;throw new w(`Error constructor '${i}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const i=fr(e);if(typeof r.matchMessage=="string"){if(!Uw(i,r.matchMessage))throw new w(`Error message

'${i}'

does not contain

'${r.matchMessage}'.`,n)}else if(!i.match(r.matchMessage))throw new w(`Error message

'${i}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new w(t.notInstance,n);else throw new w(t.noError,n)}function Cy(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const r=fr(e);if(typeof t.matchMessage=="string"){if(!Uw(r,t.matchMessage))return!1}else if(!r.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function Ud(e,t,r,n){let i;try{const o=t instanceof Promise?t:t();if(o instanceof Promise)return new Promise(async(s,a)=>{try{await o}catch(l){i=kt(l)}try{Ey(i,r,n),e===Gr.Assert?s():e===Gr.Check?s(!0):s(i)}catch(l){e===Gr.CheckWrap?s(void 0):e===Gr.Check?s(!1):a(kt(l))}})}catch(o){i=kt(o)}try{return Ey(i,r,n),e===Gr.Check?!0:e!==Gr.Assert?i:void 0}catch(o){if(e===Gr.CheckWrap)return;if(e===Gr.Check)return!1;throw o}}function KA(e,t,r){return Ud(Gr.Assert,e,t,r)}function HA(e,t){return Ud(Gr.Check,e,t)}function GA(e,t,r){return Ud(Gr.AssertWrap,e,t,r)}function ZA(e,t,r){return Ud(Gr.CheckWrap,e,t,r)}const YA=R(cg);function JA(e,t,r,n){const i=typeof e=="function"||e instanceof Promise?void 0:e,o=i?t:e,s=typeof r=="object"?n:r,a=typeof r=="object"?r:t;if(typeof o!="function")throw new TypeError(`Callback is not a function, got '${$(o)}'`);return YA(i,async()=>{try{await o();return}catch(l){return kt(l)}},a,s)}const XA={throws:KA,isError:cg},mk={assert:XA,check:{throws:HA,isError(e,t){return Cy(e,t)}},assertWrap:{throws:GA,isError(e,t,r){return dg(e,{noError:"No error.",notInstance:`'${$(e)}' is not an error instance.`},t,r),e}},checkWrap:{throws:ZA,isError(e,t){if(Cy(e,t))return e}},waitUntil:{throws:JA,isError:R(cg)}},lo=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Eh={isUuid(e,t){if(!String(e).match(lo))throw new w(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(lo))throw new w(`'${String(e)}' is a UUID.`,t)}},gk={assert:Eh,check:{isUuid(e){return!!String(e).match(lo)},isNotUuid(e){return!String(e).match(lo)}},assertWrap:{isUuid(e,t){if(!String(e).match(lo))throw new w(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(lo))throw new w(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(lo))return e},isNotUuid(e){if(!String(e).match(lo))return e}},waitUntil:{isUuid:R(Eh.isUuid),isNotUuid:R(Eh.isNotUuid)}},QA={...sk.assert,...Ww.assert,...Vw.assert,...Hw.assert,...Kw.assert,...rk.assert,...nk.assert,...Gw.assert,...ik.assert,...ok.assert,...ak.assert,...lk.assert,...uk.assert,...ck.assert,...dk.assert,...fk.assert,...hk.assert,...ek.assert,...mk.assert,...gk.assert,...tk.assert},fg=[Ww,Vw,Hw,Kw,rk,nk,Gw,ik,ok,sk,ak,lk,uk,ck,dk,fk,hk,ek,mk,gk,tk],eE=Object.assign({},...fg.map(e=>e.check)),T=Object.assign(function(t){return!!t},eE);function tE(e,t,r){return Ic(e,t,r,new Set)}function Ic(e,t,r,n){if(e=Sy(e),t=Sy(t),T.isObject(e)&&T.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!Ic(tt(e).sort(),tt(t).sort(),r,n))return!1;let i=!1;const o=tt(e).map(s=>{const a=Ic(e[s],t[s],r,n);return T.isPromise(a)&&(i=!0),a});return Ty(i,o)}else if(T.isArray(e)&&T.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let i=!1;const o=e.map((s,a)=>{const l=Ic(s,t[a],r,n);return T.isPromise(l)&&(i=!0),l});return Ty(i,o)}else return r(e,t)}function Sy(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function Ty(e,t){return e?new Promise(async(r,n)=>{try{const i=await Promise.all(t);r(i.every(T.isTrue))}catch(i){n(kt(i))}}):t.every(T.isTrue)}const rE=Object.assign({},...fg.map(e=>e.assertWrap)),Qt=Object.assign(function(t,r){if(!t)throw new w("Assertion failed.",r);return t},rE);function nE(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const iE={tsType:nE},oE={assert:iE},sE={fail:e=>{throw new w("Failure triggered.",e)}},aE={...oE.assert,...QA,...sE},Nt=Object.assign(function(t,r){if(!t)throw new w("Assertion failed.",r)},aE),lE=Object.assign({},...fg.map(e=>e.checkWrap)),hg=Object.assign(function(t){if(t)return t},lE);function uE(e,t){return T.hasKey(e,"entryType")&&e.entryType===t}function Ko(e,t){return e.controlType===t}var Wt;(function(e){e.Checkbox="checkbox",e.Color="color",e.Custom="custom",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(Wt||(Wt={}));const pk=Symbol("any-type"),cE={[Wt.Checkbox]:!1,[Wt.Color]:"",[Wt.Custom]:void 0,[Wt.Dropdown]:"",[Wt.Hidden]:pk,[Wt.Number]:0,[Wt.Text]:""};function dE(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,i])=>{if(i.controlType===Wt.Custom)return;const o=cE[i.controlType];o!==pk&&(typeof o!=typeof i.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof o} because the control is of type ${i.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function fE(e,t,r){const n=t;if(e.has(n))return e.get(n);{const i=r();return T.isPromise(i)?new Promise(async(o,s)=>{try{const a=await i;e.set(n,a),o(a)}catch(a){s(kt(a))}}):(e.set(n,i),i)}}function _a(e,t,r){if(t in e)return e[t];{const n=r();return T.isPromise(n)?new Promise(async(i,o)=>{try{const s=await n;e[t]=s,i(s)}catch(s){o(kt(s))}}):(e[t]=n,n)}}function ki(e){return tt(e).map(t=>[t,e[t]])}function Xl(e){return Object.fromEntries(e)}function Vt(e,t,r){return e.reduce((n,i,o,s)=>{const a=t(i,o,s);return r(a,i,o,s)&&n.push(a),n},[])}function ko(e,t,r={}){try{let n=!1;const i=e.map((o,s,a)=>{const l=t(o,s,a);return l instanceof Promise?(n=!0,l):l?[l.key,l.value]:void 0}).filter(T.isTruthy);return n?new Promise(async(o,s)=>{try{const a=Vt(await Promise.all(i),l=>{if(l)return Array.isArray(l)?l:[l.key,l.value]},T.isTruthy);o(Xl(a))}catch(a){s(kt(a))}}):Xl(i)}catch(n){throw kt(n)}}function mg(e,t){const r=[];let n=!1;for(let i=0;i<e;i++){const o=t(i);T.isPromise(o)&&(n=!0),r.push(o)}return n?Promise.all(r):r}function Yc(e){return Array.isArray(e)?e:[e]}function hE({min:e,max:t}){const{min:r,max:n}=eg({min:Math.floor(e),max:Math.floor(t)}),i=n-r+1,o=Math.ceil(Math.log2(i)),s=Math.ceil(o/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const a=Math.floor(256**s/i)*i,l=new Uint8Array(s);let u;do crypto.getRandomValues(l),u=l.reduce((d,f,h)=>d+f*256**h,0);while(u>=a);return r+u%i}const My=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];function ra(e=16){let t="";for(let r=0;r<e;r++){const n=hE({min:0,max:My.length-1});t+=My[n]}return t}function bk(e){if(T.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>fr(t).trim()).join(`
`))}function yk(e,t={}){try{const r=e();return r instanceof Promise?r.catch(n=>t.handleError?t.handleError(n):T.hasKey(t,"fallbackValue")?t.fallbackValue:kt(n)):r}catch(r){return t.handleError?t.handleError(r):T.hasKey(t,"fallbackValue")?t.fallbackValue:kt(r)}}const{hasOwnProperty:Au}=Object.prototype,mE=/[\u0000-\u001f\u0022\u005c\ud800-\udfff]/;function no(e){return e.length<5e3&&!mE.test(e)?`"${e}"`:JSON.stringify(e)}function Ch(e,t){if(e.length>200||t)return e.sort(t);for(let r=1;r<e.length;r++){const n=e[r];let i=r;for(;i!==0&&e[i-1]>n;)e[i]=e[i-1],i--;e[i]=n}return e}const gE=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Object.getPrototypeOf(new Int8Array)),Symbol.toStringTag).get;function Sh(e){return gE.call(e)!==void 0&&e.length!==0}function Fy(e,t,r){e.length<r&&(r=e.length);const n=t===","?"":" ";let i=`"0":${n}${e[0]}`;for(let o=1;o<r;o++)i+=`${t}"${o}":${n}${e[o]}`;return i}function pE(e){if(Au.call(e,"circularValue")){const t=e.circularValue;if(typeof t=="string")return`"${t}"`;if(t==null)return t;if(t===Error||t===TypeError)return{toString(){throw new TypeError("Converting circular structure to JSON")}};throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined')}return'"[Circular]"'}function bE(e){let t;if(Au.call(e,"deterministic")&&(t=e.deterministic,typeof t!="boolean"&&typeof t!="function"))throw new TypeError('The "deterministic" argument must be of type boolean or comparator function');return t===void 0?!0:t}function yE(e,t){let r;if(Au.call(e,t)&&(r=e[t],typeof r!="boolean"))throw new TypeError(`The "${t}" argument must be of type boolean`);return r===void 0?!0:r}function Py(e,t){let r;if(Au.call(e,t)){if(r=e[t],typeof r!="number")throw new TypeError(`The "${t}" argument must be of type number`);if(!Number.isInteger(r))throw new TypeError(`The "${t}" argument must be an integer`);if(r<1)throw new RangeError(`The "${t}" argument must be >= 1`)}return r===void 0?1/0:r}function Ho(e){return e===1?"1 item":`${e} items`}function vE(e){const t=new Set;for(const r of e)(typeof r=="string"||typeof r=="number")&&t.add(String(r));return t}function wE(e){if(Au.call(e,"strict")){const t=e.strict;if(typeof t!="boolean")throw new TypeError('The "strict" argument must be of type boolean');if(t)return r=>{let n=`Object can not safely be stringified. Received type ${typeof r}`;throw typeof r!="function"&&(n+=` (${r.toString()})`),new Error(n)}}}function kE(e){e={...e};const t=wE(e);t&&(e.bigint===void 0&&(e.bigint=!1),"circularValue"in e||(e.circularValue=Error));const r=pE(e),n=yE(e,"bigint"),i=bE(e),o=typeof i=="function"?i:void 0,s=Py(e,"maximumDepth"),a=Py(e,"maximumBreadth");function l(g,m,b,k,x,D){let C=m[g];switch(typeof C=="object"&&C!==null&&typeof C.toJSON=="function"&&(C=C.toJSON(g)),C=k.call(m,g,C),typeof C){case"string":return no(C);case"object":{if(C===null)return"null";if(b.includes(C))return r;let P="",O=",";const H=D;if(Array.isArray(C)){if(C.length===0)return"[]";if(s<b.length+1)return'"[Array]"';b.push(C),x!==""&&(D+=x,P+=`
${D}`,O=`,
${D}`);const $e=Math.min(C.length,a);let Ue=0;for(;Ue<$e-1;Ue++){const yr=l(String(Ue),C,b,k,x,D);P+=yr===void 0?"null":yr,P+=O}const Ge=l(String(Ue),C,b,k,x,D);if(P+=Ge===void 0?"null":Ge,C.length-1>a){const yr=C.length-a-1;P+=`${O}"... ${Ho(yr)} not stringified"`}return x!==""&&(P+=`
${H}`),b.pop(),`[${P}]`}let ee=Object.keys(C);const ie=ee.length;if(ie===0)return"{}";if(s<b.length+1)return'"[Object]"';let X="",ye="";x!==""&&(D+=x,O=`,
${D}`,X=" ");const se=Math.min(ie,a);i&&!Sh(C)&&(ee=Ch(ee,o)),b.push(C);for(let $e=0;$e<se;$e++){const Ue=ee[$e],Ge=l(Ue,C,b,k,x,D);Ge!==void 0&&(P+=`${ye}${no(Ue)}:${X}${Ge}`,ye=O)}if(ie>a){const $e=ie-a;P+=`${ye}"...":${X}"${Ho($e)} not stringified"`,ye=O}return x!==""&&ye.length>1&&(P=`
${D}${P}
${H}`),b.pop(),`{${P}}`}case"number":return isFinite(C)?String(C):t?t(C):"null";case"boolean":return C?"true":"false";case"undefined":return;case"bigint":if(n)return String(C);default:return t?t(C):void 0}}function u(g,m,b,k,x,D){switch(typeof m=="object"&&m!==null&&typeof m.toJSON=="function"&&(m=m.toJSON(g)),typeof m){case"string":return no(m);case"object":{if(m===null)return"null";if(b.includes(m))return r;const C=D;let P="",O=",";if(Array.isArray(m)){if(m.length===0)return"[]";if(s<b.length+1)return'"[Array]"';b.push(m),x!==""&&(D+=x,P+=`
${D}`,O=`,
${D}`);const ie=Math.min(m.length,a);let X=0;for(;X<ie-1;X++){const se=u(String(X),m[X],b,k,x,D);P+=se===void 0?"null":se,P+=O}const ye=u(String(X),m[X],b,k,x,D);if(P+=ye===void 0?"null":ye,m.length-1>a){const se=m.length-a-1;P+=`${O}"... ${Ho(se)} not stringified"`}return x!==""&&(P+=`
${C}`),b.pop(),`[${P}]`}b.push(m);let H="";x!==""&&(D+=x,O=`,
${D}`,H=" ");let ee="";for(const ie of k){const X=u(ie,m[ie],b,k,x,D);X!==void 0&&(P+=`${ee}${no(ie)}:${H}${X}`,ee=O)}return x!==""&&ee.length>1&&(P=`
${D}${P}
${C}`),b.pop(),`{${P}}`}case"number":return isFinite(m)?String(m):t?t(m):"null";case"boolean":return m?"true":"false";case"undefined":return;case"bigint":if(n)return String(m);default:return t?t(m):void 0}}function d(g,m,b,k,x){switch(typeof m){case"string":return no(m);case"object":{if(m===null)return"null";if(typeof m.toJSON=="function"){if(m=m.toJSON(g),typeof m!="object")return d(g,m,b,k,x);if(m===null)return"null"}if(b.includes(m))return r;const D=x;if(Array.isArray(m)){if(m.length===0)return"[]";if(s<b.length+1)return'"[Array]"';b.push(m),x+=k;let X=`
${x}`;const ye=`,
${x}`,se=Math.min(m.length,a);let $e=0;for(;$e<se-1;$e++){const Ge=d(String($e),m[$e],b,k,x);X+=Ge===void 0?"null":Ge,X+=ye}const Ue=d(String($e),m[$e],b,k,x);if(X+=Ue===void 0?"null":Ue,m.length-1>a){const Ge=m.length-a-1;X+=`${ye}"... ${Ho(Ge)} not stringified"`}return X+=`
${D}`,b.pop(),`[${X}]`}let C=Object.keys(m);const P=C.length;if(P===0)return"{}";if(s<b.length+1)return'"[Object]"';x+=k;const O=`,
${x}`;let H="",ee="",ie=Math.min(P,a);Sh(m)&&(H+=Fy(m,O,a),C=C.slice(m.length),ie-=m.length,ee=O),i&&(C=Ch(C,o)),b.push(m);for(let X=0;X<ie;X++){const ye=C[X],se=d(ye,m[ye],b,k,x);se!==void 0&&(H+=`${ee}${no(ye)}: ${se}`,ee=O)}if(P>a){const X=P-a;H+=`${ee}"...": "${Ho(X)} not stringified"`,ee=O}return ee!==""&&(H=`
${x}${H}
${D}`),b.pop(),`{${H}}`}case"number":return isFinite(m)?String(m):t?t(m):"null";case"boolean":return m?"true":"false";case"undefined":return;case"bigint":if(n)return String(m);default:return t?t(m):void 0}}function f(g,m,b){switch(typeof m){case"string":return no(m);case"object":{if(m===null)return"null";if(typeof m.toJSON=="function"){if(m=m.toJSON(g),typeof m!="object")return f(g,m,b);if(m===null)return"null"}if(b.includes(m))return r;let k="";const x=m.length!==void 0;if(x&&Array.isArray(m)){if(m.length===0)return"[]";if(s<b.length+1)return'"[Array]"';b.push(m);const H=Math.min(m.length,a);let ee=0;for(;ee<H-1;ee++){const X=f(String(ee),m[ee],b);k+=X===void 0?"null":X,k+=","}const ie=f(String(ee),m[ee],b);if(k+=ie===void 0?"null":ie,m.length-1>a){const X=m.length-a-1;k+=`,"... ${Ho(X)} not stringified"`}return b.pop(),`[${k}]`}let D=Object.keys(m);const C=D.length;if(C===0)return"{}";if(s<b.length+1)return'"[Object]"';let P="",O=Math.min(C,a);x&&Sh(m)&&(k+=Fy(m,",",a),D=D.slice(m.length),O-=m.length,P=","),i&&(D=Ch(D,o)),b.push(m);for(let H=0;H<O;H++){const ee=D[H],ie=f(ee,m[ee],b);ie!==void 0&&(k+=`${P}${no(ee)}:${ie}`,P=",")}if(C>a){const H=C-a;k+=`${P}"...":"${Ho(H)} not stringified"`}return b.pop(),`{${k}}`}case"number":return isFinite(m)?String(m):t?t(m):"null";case"boolean":return m?"true":"false";case"undefined":return;case"bigint":if(n)return String(m);default:return t?t(m):void 0}}function h(g,m,b){if(arguments.length>1){let k="";if(typeof b=="number"?k=" ".repeat(Math.min(b,10)):typeof b=="string"&&(k=b.slice(0,10)),m!=null){if(typeof m=="function")return l("",{"":g},[],m,k,"");if(Array.isArray(m))return u("",g,[],vE(m),k,"")}if(k.length!==0)return d("",g,[],k,"")}return f("",g,[])}return h}const xE=kE({maximumDepth:15,maximumBreadth:50});function $E(...e){return xE(...e)||""}function Kn(e,{enableUnsafeCopyAll:t}={}){try{const r=t?JSON.stringify(e):$E(e);return JSON.parse(r)}catch(r){throw console.error("Failed to JSON copy for",e),r}}const DE="modulepreload",AE=function(e){return"/structured-render/demo/"+e},Iy={},ho=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){let l=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");i=l(r.map(u=>{if(u=AE(u),u in Iy)return;Iy[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":DE,d||(h.as="script"),h.crossOrigin="",h.href=u,a&&h.setAttribute("nonce",a),document.head.appendChild(h),d)return new Promise((g,m)=>{h.addEventListener("load",g),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return i.then(s=>{for(const a of s||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};var qt;(function(e){e.Standard="stdout",e.Error="stderr"})(qt||(qt={}));var Te;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(Te||(Te={}));async function EE(){return await O2({async[_r.Node](){const e=(await ho(async()=>{const{default:t}=await import("./index-Bdn9SXqz.js");return{default:t}},[])).default;return{[Te.Bold]:e.bold.open,[Te.Debug]:e.blueBright.open,[Te.Error]:e.red.open,[Te.Faint]:e.gray.open,[Te.Info]:e.cyan.open,[Te.Mutate]:e.magenta.open,[Te.NormalWeight]:"\x1B[22m",[Te.Plain]:"",[Te.Reset]:e.reset.open,[Te.Success]:e.green.open,[Te.Warning]:e.yellow.open}},[_r.Web](){return Promise.resolve({[Te.Bold]:"font-weight: bold",[Te.Debug]:"color: blue",[Te.Error]:"color: red",[Te.Faint]:"color: grey",[Te.Info]:"color: teal",[Te.Mutate]:"color: magenta",[Te.NormalWeight]:"",[Te.Plain]:"",[Te.Reset]:"",[Te.Success]:"color: green",[Te.Warning]:"color: orange"})}})}const on=await EE(),CE={[Te.Bold]:{colors:[on.bold],logType:qt.Standard},[Te.Debug]:{colors:[on.debug],logType:qt.Standard},[Te.Faint]:{colors:[on.faint],logType:qt.Standard},[Te.Info]:{colors:[on.info],logType:qt.Standard},[Te.Mutate]:{colors:[on.mutate,on.bold],logType:qt.Standard},[Te.NormalWeight]:{colors:[on.normalWeight],logType:qt.Standard},[Te.Plain]:{colors:[],logType:qt.Standard},[Te.Reset]:{colors:[on.reset],logType:qt.Standard},[Te.Success]:{colors:[on.success,on.bold],logType:qt.Standard},[Te.Error]:{colors:[on.error,on.bold],logType:qt.Error},[Te.Warning]:{colors:[on.warning],logType:qt.Error}};function Br({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function os({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function vk(e,t){try{let r=!1;const n=ki(e).map(([i,o])=>{const s=t(i,o,e);return s instanceof Promise?(r=!0,s):s?[s.key,s.value]:void 0}).filter(T.isTruthy);return r?new Promise(async(i,o)=>{try{const s=Vt(await Promise.all(n),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},T.isTruthy);i(Xl(s))}catch(s){o(kt(s))}}):Xl(n)}catch(r){throw kt(r)}}function gg(e,t){return vk(e,(r,n)=>{const i=n,o=t(n,e);return o instanceof Promise?o.then(s=>({key:i,value:s})):{key:i,value:o}})}function ws(e,...t){const r={...e};return t.forEach(n=>{n&&ki(n).forEach(([i,o])=>{o!=null&&(r[i]=o)})}),r}const SE="px";function TE(e){return pg({value:e,suffix:SE})}function pg({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function wk({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function ME(){return await O2({async[_r.Node](){const{inspect:e}=await ho(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:r,options:n})=>{const i=t.map(a=>typeof a=="string"?a:e(a));return{text:[n.omitColors?"":n.colorConfig[r].colors.join(""),i.join(`
`),n.omitColors?"":n.colorConfig[Te.Reset].colors.join("")].join(""),css:void 0}}},[_r.Web](){return({args:e,colorKey:t,options:r})=>{const n=r.omitColors?void 0:Vt(r.colorConfig[t].colors,s=>wk({value:s,suffix:";"}),T.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?fr(s):$(s)).join(`
`),r.omitColors?"":r.colorConfig[Te.Reset].colors.join("")].join(""),css:n}}}})}const FE=await ME(),PE={colorConfig:CE,omitColors:!1},IE=kk({[qt.Error](){},[qt.Standard](){}});function kk(e,t){const r=ws(PE,t);function n(o){e[r.colorConfig[o.colorKey].logType](FE({...o,options:r}))}const i=gg(Te,o=>(...s)=>n({args:s,colorKey:o}));return{...i,if(o){return o?i:IE}}}const NE=ys(_r.Node)?{[qt.Error]({text:e}){process.stderr.write(e+`
`)},[qt.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[qt.Error]({text:e,css:t}){console.error(Br({value:e,prefix:"%c"}),t)},[qt.Standard]({text:e,css:t}){console.log(Br({value:e,prefix:"%c"}),t)}},Jc=kk(NE);function OE(e,{digits:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function RE({searchIn:e,searchFor:t,caseSensitive:r,includeLength:n}){const i=_w(zw(t,{caseSensitive:r}),"g"),o=[];return e.replace(i,(...s)=>{const a=s[s.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const l=s[0];if(typeof l!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof l}!`);o.push({index:a,length:l.length});const u=s[0];if(typeof u!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return u}),o}function BE(e,t,{caseSensitive:r}){const n=RE({searchIn:e,searchFor:t,caseSensitive:r,includeLength:!0}),i=zw(t,{caseSensitive:r});return e.split(i).reduce((s,a,l)=>{const u=n[l],d=s.concat(a);if(u){const f=e.slice(u.index,u.index+u.length);return d.concat(f)}else return d},[])}function LE(e,t){return e.split(t)}function Ny(e,t){const{min:r,max:n}=eg(t);if(t.takeOverflow){const i=n-r+1,o=(e-r)%i;return o<0?r+i+o:r+o}else return e>n?r:e<r?n:e}function ut(e,t){let r=!1;const n=tt(e).reduce((i,o)=>{const s=t(o,e[o],e);return s instanceof Promise&&(r=!0),i[o]=s,i},{});return r?new Promise(async(i,o)=>{try{await Promise.all(tt(n).map(async s=>{const a=await n[s];n[s]=a})),i(n)}catch(s){o(kt(s))}}):n}function qd(e,t){const r=ki(e).filter(([n,i])=>t(n,i,e));return Xl(r)}function _E(e,t){return qd(e,r=>t.includes(r))}function Xc(e){return tt(e).map(t=>e[t])}function xk(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}var Ql;(function(e){e.Upper="upper",e.Lower="lower"})(Ql||(Ql={}));const jE={firstLetterCase:Ql.Lower};function zE(e,t){if(!e.length)return"";const r=e[0];return(t===Ql.Upper?r.toUpperCase():r.toLowerCase())+e.slice(1)}function UE(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const s=o[1];return s?s.toUpperCase():""}),i=ws(jE,t);return zE(n,i.firstLetterCase)}function qE(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}function $k({value:e,wrapper:t}){return Br({value:pg({value:e,suffix:t}),prefix:t})}function li(){function e(t){return class extends CustomEvent{static type=t;constructor(n){super(t,n)}}}return e}function bg(e){return class extends Event{static type=e;constructor(r){super(e,r)}}}class WE{listeners={};universalListeners=new Map;getListenerCount(){return Xc(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)+this.universalListeners.size}listenToAll(t,r={}){const n=()=>this.universalListeners.delete(t)||!1;function i(o,s){r.once&&n(),t(o,s)}return this.universalListeners.set(t,{listener:i,removeListener:n}),n}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,r,n={}){const i=T.isString(t)?t:t.type,o=()=>this.listeners[i]?.delete(r)||!1;function s(a,l){n.once&&o(),r(a,l)}return _a(this.listeners,i,()=>new Map).set(r,{listener:s,removeListener:o}),o}removeListener(t,r){const n=T.isString(t)?t:t.type,i=this.listeners[n];if(!i)return!1;const o=i.get(r);return o?o.removeListener():!1}dispatch(t){const r=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const n=r?.size||0;return r?.forEach(i=>{i.listener(t,i.removeListener)}),this.universalListeners.forEach(i=>{i.listener(t,i.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const r=Xc(this.listeners).reduce((n,i)=>{const o=i.size||0;return i.clear(),n+o},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),r}destroy(){this.removeAllListeners()}}class yg extends WE{}function Dk(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function Oy(e,t,r){return Dk(globalThis,e,t,r)}function vg(e,t){return eu(e.title),e.parent?[...vg(e.parent),eu(e.parent.title)].concat([]):[]}function eu(e){return xk(e).toLowerCase().replaceAll(/\s/g,"-")}function VE({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}const KE=/[/?#&=]/;function Ak(e){const t=e.match(KE);return e.trim()?eu(e)?t?new Error(`Book page title has invalid character '${t[0]}'.`):void 0:new Error("Book page title resolved to empty breadcrumb."):new Error("Cannot define an element-book page with an empty title.")}const HE={[ur.ElementExample]:()=>[],[ur.Page]:e=>[Ak(e.title),...dE(e.controls,e.title)].filter(T.isTruthy),[ur.Root]:()=>[]},Qc="_isBookTreeNode",Ek=new Map;function GE(e){return Ek.get(e)}function ZE(e,t){fE(Ek,e,()=>t)}function na(e,t){return Ck(e)&&e.entry.entryType===t}function Ck(e){return!!(T.hasKeys(e,[Qc,"entry"])&&e[Qc])}function YE(){return{[Qc]:!0,entry:{entryType:ur.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function JE({entries:e,debug:t}){const r=GE(e);if(r)return r;const n=YE();e.forEach(s=>wg({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const i=Sk(n),o={tree:n,flattenedNodes:i};return ZE(e,o),t&&console.info("element-book tree:",n),o}function XE(e,t,r){if(!t.parent)return e;const n=em(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),wg({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const i=em(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${vg(t).join(" > ")}`);return i}function wg({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const i=HE[t.entryType](t);t.errors.push(...i);const o=XE(e,t,r),s=eu(t.title),a=o.children[s];if(a){if(n){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${s}'${o.urlBreadcrumb?` in parent '${o.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const l={[Qc]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...o.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};o.children[s]=l,uE(t,ur.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(u=>wg({tree:e,newEntry:u,debug:r,manuallyAdded:n}))}function em(e,t){const r=Ck(e)?e.fullUrlBreadcrumbs.slice(0,-1):vg(e);return r.length?r.reduce((i,o)=>{if(i)return i.children[o]},t):void 0}function Sk(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>Sk(i));return[e,...r].flat()}function kg(e,t){return xg(e,["",...t],void 0)}function xg(e,t,r){const n=t.slice(1),i=n[0];!i&&r&&(e.controls=r);const o=e.children[i||""],s=o&&xg(o,n,r);return{...e.controls,...s}}function QE(e,t,r){const n={...e};return xg(n,["",...t],r),n}function Tk(e,t){const r=t?.controls||(na(e,ur.Page)?ut(e.entry.controls,(i,o)=>o.initValue):{});return{children:ut(e.children,(i,o)=>Tk(o,t?.children?.[o.urlBreadcrumb])),controls:r}}function Lt(e){const t={...e,entryType:ur.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const i={...n,isVertical:t.useVerticalExamples,entryType:ur.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`),Ak(n.title)].filter(T.isTruthy)};r.add(n.title),t.elementExamples[eu(i.title)]=i}}),t}var Jr;(function(e){e.Search="search",e.Book="book"})(Jr||(Jr={}));function Mk(e){return e[0]===Jr.Book?"":e[1]?decodeURIComponent(e[1]):""}const fa={hash:void 0,paths:[Jr.Book],search:void 0};class ed{static cssPropertyDefinitionSupported=!!(globalThis.CSS&&globalThis.CSS.registerProperty);registry=new Map;constructor(){const t=ed.cssPropertyDefinitionSupported?globalThis.CSS.registerProperty.bind(globalThis.CSS):void 0;t&&(globalThis.CSS.registerProperty=r=>(Fk.registry.set(r.name,r),t(r)))}canRegisterCssProperty(t){return ed.cssPropertyDefinitionSupported&&!this.registry.has(t)}registerProperty(t){if(!this.canRegisterCssProperty(t.name))return!1;try{return globalThis.CSS.registerProperty(t),!0}catch(r){throw Na(r,`Failed to define CSS var: ${$(t,4)}

`)}}}const Fk=new ed;const Nc=globalThis,$g=Nc.ShadowRoot&&(Nc.ShadyCSS===void 0||Nc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Dg=Symbol(),Ry=new WeakMap;let Wi=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Dg)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if($g&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Ry.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ry.set(r,t))}return t}toString(){return this.cssText}};const ve=e=>new Wi(typeof e=="string"?e:e+"",void 0,Dg),Pk=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new Wi(r,e,Dg)},e6=(e,t)=>{if($g)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),i=Nc.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)}},By=$g?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return ve(r)})(e):e;const{is:t6,defineProperty:r6,getOwnPropertyDescriptor:n6,getOwnPropertyNames:i6,getOwnPropertySymbols:o6,getPrototypeOf:s6}=Object,Wd=globalThis,Ly=Wd.trustedTypes,a6=Ly?Ly.emptyScript:"",l6=Wd.reactiveElementPolyfillSupport,Ul=(e,t)=>e,td={toAttribute(e,t){switch(t){case Boolean:e=e?a6:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ag=(e,t)=>!t6(e,t),_y={attribute:!0,type:String,converter:td,reflect:!1,useDefault:!1,hasChanged:Ag};Symbol.metadata??=Symbol("metadata"),Wd.litPropertyMetadata??=new WeakMap;let Hs=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=_y){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,r);i!==void 0&&r6(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){const{get:i,set:o}=n6(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get:i,set(s){const a=i?.call(this);o?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_y}static _$Ei(){if(this.hasOwnProperty(Ul("elementProperties")))return;const t=s6(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ul("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ul("properties"))){const r=this.properties,n=[...i6(r),...o6(r)];for(const i of n)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(By(i))}else t!==void 0&&r.push(By(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return e6(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const o=(n.converter?.toAttribute!==void 0?n.converter:td).toAttribute(r,n.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,r){const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=n.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:td;this._$Em=i;const a=s.fromAttribute(r,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,r,n,i=!1,o){if(t!==void 0){const s=this.constructor;if(i===!1&&(o=this[t]),n??=s.getPropertyOptions(t),!((n.hasChanged??Ag)(o,r)||n.useDefault&&n.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??r??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,o]of n){const{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Hs.elementStyles=[],Hs.shadowRootOptions={mode:"open"},Hs[Ul("elementProperties")]=new Map,Hs[Ul("finalized")]=new Map,l6?.({ReactiveElement:Hs}),(Wd.reactiveElementVersions??=[]).push("2.1.2");const Eg=globalThis,jy=e=>e,rd=Eg.trustedTypes,zy=rd?rd.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ik="$lit$",fo=`lit$${Math.random().toFixed(9).slice(2)}$`,Nk="?"+fo,u6=`<${Nk}>`,ds=document,tu=()=>ds.createComment(""),ru=e=>e===null||typeof e!="object"&&typeof e!="function",Cg=Array.isArray,c6=e=>Cg(e)||typeof e?.[Symbol.iterator]=="function",Th=`[ 	
\f\r]`,gl=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Uy=/-->/g,qy=/>/g,Go=RegExp(`>|${Th}(?:([^\\s"'>=/]+)(${Th}*=${Th}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wy=/'/g,Vy=/"/g,Ok=/^(?:script|style|textarea|title)$/i,d6=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),f6=d6(1),gn=Symbol.for("lit-noChange"),fe=Symbol.for("lit-nothing"),Ky=new WeakMap,rs=ds.createTreeWalker(ds,129);function Rk(e,t){if(!Cg(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return zy!==void 0?zy.createHTML(t):t}const h6=(e,t)=>{const r=e.length-1,n=[];let i,o=t===2?"<svg>":t===3?"<math>":"",s=gl;for(let a=0;a<r;a++){const l=e[a];let u,d,f=-1,h=0;for(;h<l.length&&(s.lastIndex=h,d=s.exec(l),d!==null);)h=s.lastIndex,s===gl?d[1]==="!--"?s=Uy:d[1]!==void 0?s=qy:d[2]!==void 0?(Ok.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=Go):d[3]!==void 0&&(s=Go):s===Go?d[0]===">"?(s=i??gl,f=-1):d[1]===void 0?f=-2:(f=s.lastIndex-d[2].length,u=d[1],s=d[3]===void 0?Go:d[3]==='"'?Vy:Wy):s===Vy||s===Wy?s=Go:s===Uy||s===qy?s=gl:(s=Go,i=void 0);const g=s===Go&&e[a+1].startsWith("/>")?" ":"";o+=s===gl?l+u6:f>=0?(n.push(u),l.slice(0,f)+Ik+l.slice(f)+fo+g):l+fo+(f===-2?a:g)}return[Rk(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class nu{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const a=t.length-1,l=this.parts,[u,d]=h6(t,r);if(this.el=nu.createElement(u,n),rs.currentNode=this.el.content,r===2||r===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=rs.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(Ik)){const h=d[s++],g=i.getAttribute(f).split(fo),m=/([.?@])?(.*)/.exec(h);l.push({type:1,index:o,name:m[2],strings:g,ctor:m[1]==="."?g6:m[1]==="?"?p6:m[1]==="@"?b6:Kd}),i.removeAttribute(f)}else f.startsWith(fo)&&(l.push({type:6,index:o}),i.removeAttribute(f));if(Ok.test(i.tagName)){const f=i.textContent.split(fo),h=f.length-1;if(h>0){i.textContent=rd?rd.emptyScript:"";for(let g=0;g<h;g++)i.append(f[g],tu()),rs.nextNode(),l.push({type:2,index:++o});i.append(f[h],tu())}}}else if(i.nodeType===8)if(i.data===Nk)l.push({type:2,index:o});else{let f=-1;for(;(f=i.data.indexOf(fo,f+1))!==-1;)l.push({type:7,index:o}),f+=fo.length-1}o++}}static createElement(t,r){const n=ds.createElement("template");return n.innerHTML=t,n}}function ha(e,t,r=e,n){if(t===gn)return t;let i=n!==void 0?r._$Co?.[n]:r._$Cl;const o=ru(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=i:r._$Cl=i),i!==void 0&&(t=ha(e,i._$AS(e,t.values),i,n)),t}class m6{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,i=(t?.creationScope??ds).importNode(r,!0);rs.currentNode=i;let o=rs.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let u;l.type===2?u=new Vd(o,o.nextSibling,this,t):l.type===1?u=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(u=new y6(o,this,t)),this._$AV.push(u),l=n[++a]}s!==l?.index&&(o=rs.nextNode(),s++)}return rs.currentNode=ds,i}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}let Vd=class Bk{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,i){this.type=2,this._$AH=fe,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ha(this,t,r),ru(t)?t===fe||t==null||t===""?(this._$AH!==fe&&this._$AR(),this._$AH=fe):t!==this._$AH&&t!==gn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):c6(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==fe&&ru(this._$AH)?this._$AA.nextSibling.data=t:this.T(ds.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=nu.createElement(Rk(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(r);else{const o=new m6(i,this),s=o.u(this.options);o.p(r),this.T(s),this._$AH=o}}_$AC(t){let r=Ky.get(t.strings);return r===void 0&&Ky.set(t.strings,r=new nu(t)),r}k(t){Cg(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of t)i===r.length?r.push(n=new Bk(this.O(tu()),this.O(tu()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const n=jy(t).nextSibling;jy(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}};class Kd{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,i,o){this.type=1,this._$AH=fe,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=fe}_$AI(t,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)t=ha(this,t,r,0),s=!ru(t)||t!==this._$AH&&t!==gn,s&&(this._$AH=t);else{const a=t;let l,u;for(t=o[0],l=0;l<o.length-1;l++)u=ha(this,a[n+l],r,l),u===gn&&(u=this._$AH[l]),s||=!ru(u)||u!==this._$AH[l],u===fe?t=fe:t!==fe&&(t+=(u??"")+o[l+1]),this._$AH[l]=u}s&&!i&&this.j(t)}j(t){t===fe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class g6 extends Kd{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===fe?void 0:t}}let p6=class extends Kd{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==fe)}},b6=class extends Kd{constructor(t,r,n,i,o){super(t,r,n,i,o),this.type=5}_$AI(t,r=this){if((t=ha(this,t,r,0)??fe)===gn)return;const n=this._$AH,i=t===fe&&n!==fe||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==fe&&(n===fe||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},y6=class{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){ha(this,t)}};const v6={I:Vd},w6=Eg.litHtmlPolyfillSupport;w6?.(nu,Vd),(Eg.litHtmlVersions??=[]).push("3.3.2");const k6=(e,t,r)=>{const n=r?.renderBefore??t;let i=n._$litPart$;if(i===void 0){const o=r?.renderBefore??null;n._$litPart$=i=new Vd(t.insertBefore(tu(),o),o,void 0,r??{})}return i._$AI(e),i};const Sg=globalThis;let ql=class extends Hs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=k6(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return gn}};ql._$litElement$=!0,ql.finalized=!0,Sg.litElementHydrateSupport?.({LitElement:ql});const x6=Sg.litElementPolyfillSupport;x6?.({LitElement:ql});(Sg.litElementVersions??=[]).push("4.2.2");function Lk({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}var ma;(function(e){e.Url="<url>",e.TransformList="<transform-list>",e.TransformFunction="<transform-function>",e.Time="<time>",e.String="<string>",e.Resolution="<resolution>",e.Percentage="<percentage>",e.Number="<number>",e.LengthPercentage="<length-percentage>",e.Length="<length>",e.Integer="<integer>",e.Image="<image>",e.CustomIdent="<custom-ident>",e.Color="<color>",e.Angle="<angle>",e.Any="*"})(ma||(ma={}));var Hy;(function(e){e.Space="+",e.Comma="#"})(Hy||(Hy={}));function xi(e,t={}){return ut(e,(n,i)=>{$6(n);const o=i,s=T.isObject(o)&&!(o instanceof Wi),a=T.isString(o)||T.isNumber(o)||o instanceof Wi?String(o):String(o.default),l=T.isString(o)||T.isNumber(o)||o instanceof Wi?String(o):String(o.initialValue||o.default),u=ve(Br({value:n.replace(/^-+/,""),prefix:"--"})),d={name:u,value:Pk`var(${u}, ${ve(a)})`,syntax:T.isString(o)||T.isNumber(o)||o instanceof Wi?ma.Any:tm(o.syntax),default:a},f=String(d.name);if(!l)throw new Error(`Initial value for CSS var ${f} cannot be empty.`);return s&&!t.skipRegistration&&Fk.registerProperty({inherits:!0,name:f,initialValue:l,syntax:d.syntax})&&globalThis.document?.documentElement&&Lk({forCssVar:d,onElement:globalThis.document.documentElement,toValue:a}),d})}function $6(e){try{if(T.isString(e))if(e.includes("-")){if(e.toLowerCase()!==e)throw new Error("Must be lowercase.")}else throw new Error("Must have at least one dash (-).");else throw new TypeError("Must be string.")}catch(t){throw new Error(Ia("Invalid CSS var name.",t,`Got '${$(e)}'`))}}function tm(e){return e?T.isString(e)?e:e.union?e.union.map(t=>tm(t)).join(" | "):e.list?`${tm(e.list.values)}${e.list.separator}`:e.raw:ma.Any}const We=xi({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),D6={nav:{hover:{background:We["element-book-nav-hover-background-color"],foreground:We["element-book-nav-hover-foreground-color"]},active:{background:We["element-book-nav-active-background-color"],foreground:We["element-book-nav-active-foreground-color"]},selected:{background:We["element-book-nav-selected-background-color"],foreground:We["element-book-nav-selected-foreground-color"]}},accent:{icon:We["element-book-accent-icon-color"]},page:{background:We["element-book-page-background-color"],backgroundFaint1:We["element-book-page-background-faint-level-1-color"],backgroundFaint2:We["element-book-page-background-faint-level-2-color"],foreground:We["element-book-page-foreground-color"],foregroundFaint1:We["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:We["element-book-page-foreground-faint-level-2-color"]}};function A6(e,t){_k(e,t,D6)}function rm(e){return T.hasKey(e,"_$cssResult$")}function Gy(e){return T.hasKeys(e,["name","value","default"])&&T.isString(e.default)&&rm(e.name)&&rm(e.value)}function _k(e,t,r){Object.entries(t).forEach(([n,i])=>{const o=r[n];if(!o)throw new Error(`no nestedCssVar at key '${n}'`);if(rm(i)){if(!Gy(o))throw new Error(`got a CSS result at '${n}' but no CSS var`);Lk({forCssVar:o,onElement:e,toValue:String(i)})}else{if(Gy(o))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);_k(e,i,o)}})}function Nl(e,t){let r=e.length,n,i,o=!1,s=!1;Array.isArray(e[0])?n=e:(n=[e],r=n.length,o=!0),Array.isArray(t[0])?i=t:(i=t.length>0?t.map(d=>[d]):[[]],s=!0);let a=i[0].length,l=i[0].map((d,f)=>i.map(h=>h[f])),u=n.map(d=>l.map(f=>{let h=0;if(!Array.isArray(d)){for(let g of f)h+=d*g;return h}for(let g=0;g<d.length;g++)h+=d[g]*(f[g]||0);return h}));return r===1&&o&&(u=u[0]),a===1&&s?r===1&&o?u[0]:u.map(d=>d[0]):u}function Mh(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function wt(e,t,r=[0,0,0]){const n=Mh(e,t[0]),i=Mh(e,t[1]),o=Mh(e,t[2]);return r[0]=n,r[1]=i,r[2]=o,r}function ja(e){return po(e)==="string"}function po(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Tg(e,{precision:t=16,unit:r}){return He(e)?"none":(e=+Mg(e,t),e+(r??""))}function He(e){return e===null}function Mt(e){return He(e)?0:e}function Mg(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const i=10**(t-n);return Math.floor(e*i+.5)/i}function iu(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function jk(e,t,r){return(r-e)/(t-e)}function nm(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:iu(t[0],t[1],jk(e[0],e[1],r))}function Hd(e,t,r){return Math.max(Math.min(r,t),e)}function Gd(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function Ft(e,t){return Gd(Math.abs(e)**t,e)}function Fg(e,t){return t===0?0:e/t}function zk(e,t,r=0,n=e.length){for(;r<n;){const i=r+n>>1;e[i]<t?r=i+1:n=i}return r}function ga(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const n=Object.getPrototypeOf(e),i=n?.constructor?.name;if(i===r)return!0;if(!i||i==="Object")return!1;e=n}return!1}var E6=Object.freeze({__proto__:null,bisectLeft:zk,clamp:Hd,copySign:Gd,interpolate:iu,interpolateInv:jk,isInstance:ga,isNone:He,isString:ja,mapRange:nm,multiplyMatrices:Nl,multiply_v3_m3x3:wt,serializeNumber:Tg,skipNone:Mt,spow:Ft,toPrecision:Mg,type:po,zdiv:Fg});class C6{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],r&&this[i][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const xo=new C6;var pn={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};let Zy=class{type;coordMeta;coordRange;range;constructor(t,r){if(typeof t=="object"&&(this.coordMeta=t),r&&(this.coordMeta=r,this.coordRange=r.range??r.refRange),typeof t=="string"){let n=t.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!n)throw new TypeError(`Cannot parse ${t} as a type definition.`);this.type=n.groups.type;let{min:i,max:o}=n.groups;(i||o)&&(this.range=[+i,+o])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(t){if(this.type==="<angle>")return t;let r=this.computedRange,n=this.coordRange;return this.type==="<percentage>"&&(n??=this.percentageRange()),nm(r,n,t)}serialize(t,r){let n=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,i=this.unit;return t=nm(this.coordRange,n,t),Tg(t,{unit:i,precision:r})}toString(){let t=this.type;if(this.range){let[r="",n=""]=this.range;t+=`[${r},${n}]`}return t}percentageRange(t=1){let r;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?r=[0,1]:r=[-1,1],[r[0]*t,r[1]*t]}static get(t,r){return ga(t,this)?t:new this(t,r)}};const Fh=Symbol("instance");class nd{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[Fh]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(n=>{let i=["<number>","<percentage>"];return n.type==="angle"&&i.push("<angle>"),i})),this.coords=this.coords.map((n,i)=>{let o=this.spaceCoords[i];return typeof n=="string"&&(n=n.trim().split(/\s*\|\s*/)),n.map(s=>Zy.get(s,o))}))}serializeCoords(t,r,n){return n=t.map((i,o)=>Zy.get(n?.[o]??this.coords[o][0],this.spaceCoords[o])),t.map((i,o)=>n[o].serialize(i,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([n,i],o)=>{let s=t[o];if(He(s)||isNaN(s))return s;let a=r[o],l=this.coords[o].find(u=>u.type==a);if(!l){let u=i.name||n;throw new TypeError(`${a??s?.raw??s} not allowed for ${u} in ${this.name}()`)}return s=l.resolve(s),l.range&&(r[o]=l.toString()),s})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||ga(t,this)?t:t[Fh]?t[Fh]:new nd(t,...r)}}const Or={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function im(e){return Array.isArray(e)?e:Or[e]}function id(e,t,r,n={}){if(e=im(e),t=im(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let i={W1:e,W2:t,XYZ:r,options:n};if(xo.run("chromatic-adaptation-start",i),i.M||(i.W1===Or.D65&&i.W2===Or.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===Or.D50&&i.W2===Or.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),xo.run("chromatic-adaptation-end",i),i.M)return wt(i.XYZ,i.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function Uk(e,t){let r={str:String(e)?.trim(),options:t};if(xo.run("parse-start",r),r.color)return r.color;r.parsed=T6(r.str);let n,i=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let o=r.parsed.name,s,a,l=r.parsed.args,u=l.map((h,g)=>r.parsed.argMeta[g]?.type);if(o==="color"){let h=l.shift();u.shift();let g=h.startsWith("--")?h.substring(2):`--${h}`,m=[h,g];if(s=Y.findFormat({name:o,id:m,type:"function"}),!s){let b,k=h in Y.registry?h:g;if(k in Y.registry){let x=Y.registry[k].formats?.color?.id;x&&(b=`Did you mean ${e.replace("color("+h,"color("+x)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+(b??"Missing a plugin?"))}a=s.space,s.id.startsWith("--")&&!h.startsWith("--")&&pn.warn(`${a.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${s.id}) instead of color(${h}).`),h.startsWith("--")&&!s.id.startsWith("--")&&pn.warn(`${a.name} is a standard space and supported in the CSS spec. Use color(${s.id}) instead of prefixed color(${h}).`)}else s=Y.findFormat({name:o,type:"function"}),a=s.space;i&&Object.assign(i,{format:s,formatId:s.name,types:u,commas:r.parsed.commas});let d=1;r.parsed.lastAlpha&&(d=r.parsed.args.pop(),i&&(i.alphaType=u.pop()));let f=s.coords.length;if(l.length!==f)throw new TypeError(`Expected ${f} coordinates for ${a.id} in ${r.str}), got ${l.length}`);l=s.coerceCoords(l,u),n={spaceId:a.id,coords:l,alpha:d}}else e:for(let o of Y.all)for(let s in o.formats){let a=o.formats[s];if(a.type!=="custom"||a.test&&!a.test(r.str))continue;let l=o.getFormat(a),u=l.parse(r.str);if(u){i&&Object.assign(i,{format:l,formatId:s}),n=u;break e}}if(!n)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return n.alpha=He(n.alpha)?n.alpha:n.alpha===void 0?1:Hd(0,n.alpha,1),n}const qk={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},od={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(qk).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function S6(e){let t={},r=e.match(od.unitValue)?.[0],n=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(n.slice(0,-r.length)),n=t.unitless*qk[r]):od.number.test(n)?(n=Number(n),t.type="<number>"):n==="none"?n=null:n==="NaN"||n==="calc(NaN)"?(n=NaN,t.type="<number>"):t.type="<ident>",{value:n,meta:t}}function T6(e){if(!e)return;e=e.trim();let t=e.match(od.function);if(t){let r=[],n=[],i=!1,o=t[1].toLowerCase(),s=t[2].replace(od.singleArgument,(a,l)=>{let{value:u,meta:d}=S6(l);return(a.startsWith("/")||o!=="color"&&r.length===3)&&(i=!0),r.push(u),n.push(d),""});return{name:o,args:r,argMeta:n,lastAlpha:i,commas:s.includes(","),rawName:t[1],rawArgs:t[2]}}}function be(e,t){if(Array.isArray(e))return e.map(n=>be(n,t));if(!e)throw new TypeError("Empty color reference");ja(e)&&(e=Uk(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=Y.get(r)),e.alpha===void 0&&(e.alpha=1),e}const M6=75e-6;class Y{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?Y.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=im(n),this.formats=t.formats??{};for(let i in this.formats){let o=this.formats[i];o.type||="function",o.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:Y.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,o)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:F6(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),xo.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=M6}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((i,o)=>{let s=n[o];if(s.type!=="angle"&&s.range){if(He(i))return!0;let[a,l]=s.range;return(a===void 0||i>=a-r)&&(l===void 0||i<=l+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=nd.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const a=be(t);[t,r]=[a.space,a.coords]}if(t=Y.get(t),this.equals(t))return r;r=r.map(a=>He(a)?0:a);let n=this.path,i=t.path,o,s;for(let a=0;a<n.length&&n[a].equals(i[a]);a++)o=n[a],s=a;if(!o)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>s;a--)r=n[a].toBase(r);for(let a=s+1;a<i.length;a++)r=i[a].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=be(t);[t,r]=[n.space,n.coords]}return t=Y.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],i=n.range||n.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(Y.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||ga(t,this))return t;if(po(t)==="string"){let i=Y.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(r.length)return Y.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=Y.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let n of r)for(let[i,o]of Object.entries(n.formats)){o.name??=i,o.type??="function";let s=(!t.name||o.name===t.name)&&(!t.type||o.type===t.type);if(t.id){let a=o.ids||[o.id],l=Array.isArray(t.id)?t.id:[t.id];s&&=l.some(u=>a.includes(u))}if(s){let a=nd.get(o,n);return a!==o&&(n.formats[o.name]=a),a}}return null}static resolveCoord(t,r){let n=po(t),i,o;if(n==="string"?t.includes(".")?[i,o]=t.split("."):[i,o]=[,t]:Array.isArray(t)?[i,o]=t:(i=t.space,o=t.coordId),i=Y.get(i),i||(i=r),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=po(o),n==="number"||n==="string"&&o>=0){let l=Object.entries(i.coords)[o];if(l)return{space:i,id:l[0],index:o,...l[1]}}i=Y.get(i);let s=o.toLowerCase(),a=0;for(let l in i.coords){let u=i.coords[l];if(l.toLowerCase()===s||u.name?.toLowerCase()===s)return{space:i,id:l,index:a,...u};a++}throw new TypeError(`No "${o}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function F6(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var cr=new Y({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Tr extends Y{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=cr),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=wt(r,t.toXYZ_M);return this.white!==this.base.white&&(n=id(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=id(this.base.white,this.white,r),wt(r,t.fromXYZ_M))),t.referred??="display",super(t)}}function Wk(e,t={}){if(Array.isArray(e))return e.map(l=>Wk(l,t));let{cssProperty:r="background-color",element:n,...i}=t,o=null;try{return be(e,i)}catch(l){o=l}let{CSS:s,getComputedStyle:a}=globalThis;if(ja(e)&&n&&s&&a&&s.supports(r,e)){let l=n.style[r];e!==l&&(n.style[r]=e);let u=a(n).getPropertyValue(r);if(e!==l&&(n.style[r]=l),u!==e)try{return be(u,i)}catch(d){o=d}else o={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=o),null}function Eu(e,t){e=be(e);let r=Y.get(t,t?.space),n=t?.precision,i;return!r||e.space.equals(r)?i=e.coords.slice():i=r.from(e),n===void 0?i:i.map(o=>Mg(o,n))}function cn(e,t){if(e=be(e),t==="alpha")return e.alpha??1;let{space:r,index:n}=Y.resolveCoord(t,e.space);return Eu(e,r)[n]}function Pg(e,t,r,n){return e=be(e),Array.isArray(t)&&([t,r,n]=[e.space,t,r]),t=Y.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),n!==void 0&&(e.alpha=n),e}Pg.returns="color";function Zi(e,t,r){if(e=be(e),arguments.length===2&&po(arguments[1])==="object"){let n=arguments[1];for(let i in n)Zi(e,i,n[i])}else if(typeof r=="function"&&(r=r(cn(e,t))),t==="alpha")e.alpha=r;else{let{space:n,index:i}=Y.resolveCoord(t,e.space),o=Eu(e,n);o[i]=r,Pg(e,n,o)}return e}Zi.returns="color";var Ig=new Y({id:"xyz-d50",name:"XYZ D50",white:"D50",base:cr,fromBase:e=>id(cr.white,"D50",e),toBase:e=>id("D50",cr.white,e)});const P6=216/24389,Yy=24/116,sc=24389/27;let Ph=Or.D50;var dn=new Y({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Ph,base:Ig,fromBase(e){let r=e.map((s,a)=>s/Ph[a]).map(s=>s>P6?Math.cbrt(s):(sc*s+16)/116),n=116*r[1]-16,i=500*(r[0]-r[1]),o=200*(r[1]-r[2]);return[n,i,o]},toBase(e){let[t,r,n]=e,i=[];return i[1]=(t+16)/116,i[0]=r/500+i[1],i[2]=i[1]-n/200,[i[0]>Yy?Math.pow(i[0],3):(116*i[0]-16)/sc,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/sc,i[2]>Yy?Math.pow(i[2],3):(116*i[2]-16)/sc].map((s,a)=>s*Ph[a])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Rn(e){return typeof e!="number"?e:(e%360+360)%360}function Vk(e,t){let[r,n]=t,i=He(r),o=He(n);if(i&&o)return[r,n];if(i?r=n:o&&(n=r),e==="raw")return t;r=Rn(r),n=Rn(n);let s=n-r;return e==="increasing"?s<0&&(n+=360):e==="decreasing"?s>0&&(r+=360):e==="longer"?-180<s&&s<180&&(s>0?r+=360:n+=360):e==="shorter"&&(s>180?r+=360:s<-180&&(n+=360)),[r,n]}var bn=new Y({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:dn,fromBase(e){if(this.ε===void 0){let a=Object.values(this.base.coords)[1].refRange,l=a[1]-a[0];this.ε=l/1e5}let[t,r,n]=e,i=Math.abs(r)<this.ε&&Math.abs(n)<this.ε,o=i?null:Rn(Math.atan2(n,r)*180/Math.PI),s=i?0:Math.sqrt(r**2+n**2);return[t,s,o]},toBase(e){let[t,r,n]=e,i=null,o=null;return He(n)||(r=r<0?0:r,i=r*Math.cos(n*Math.PI/180),o=r*Math.sin(n*Math.PI/180)),[t,i,o]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const Jy=25**7,sd=Math.PI,Xy=180/sd,zs=sd/180;function Qy(e){const t=e*e;return t*t*t*e}function Kk(e,t,{kL:r=1,kC:n=1,kH:i=1}={}){[e,t]=be([e,t]);let[o,s,a]=dn.from(e),l=bn.from(dn,[o,s,a])[1],[u,d,f]=dn.from(t),h=bn.from(dn,[u,d,f])[1];l<0&&(l=0),h<0&&(h=0);let g=(l+h)/2,m=Qy(g),b=.5*(1-Math.sqrt(m/(m+Jy))),k=(1+b)*s,x=(1+b)*d,D=Math.sqrt(k**2+a**2),C=Math.sqrt(x**2+f**2),P=k===0&&a===0?0:Math.atan2(a,k),O=x===0&&f===0?0:Math.atan2(f,x);P<0&&(P+=2*sd),O<0&&(O+=2*sd),P*=Xy,O*=Xy;let H=u-o,ee=C-D,ie=O-P,X=P+O,ye=Math.abs(ie),se;D*C===0?se=0:ye<=180?se=ie:ie>180?se=ie-360:ie<-180?se=ie+360:pn.warn("the unthinkable has happened");let $e=2*Math.sqrt(C*D)*Math.sin(se*zs/2),Ue=(o+u)/2,Ge=(D+C)/2,yr=Qy(Ge),Et;D*C===0?Et=X:ye<=180?Et=X/2:X<360?Et=(X+360)/2:Et=(X-360)/2;let An=(Ue-50)**2,En=1+.015*An/Math.sqrt(20+An),Ur=1+.045*Ge,Ct=1;Ct-=.17*Math.cos((Et-30)*zs),Ct+=.24*Math.cos(2*Et*zs),Ct+=.32*Math.cos((3*Et+6)*zs),Ct-=.2*Math.cos((4*Et-63)*zs);let me=1+.015*Ge*Ct,yt=30*Math.exp(-1*((Et-275)/25)**2),Ze=2*Math.sqrt(yr/(yr+Jy)),zt=-1*Math.sin(2*yt*zs)*Ze,Be=(H/(r*En))**2;return Be+=(ee/(n*Ur))**2,Be+=($e/(i*me))**2,Be+=zt*(ee/(n*Ur))*($e/(i*me)),Math.sqrt(Be)}const I6=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],N6=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],O6=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],bo=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var ti=new Y({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:cr,fromBase(e){let t=wt(e,I6);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),wt(t,O6,t)},toBase(e){let t=wt(e,bo);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,wt(t,N6,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function om(e,t){[e,t]=be([e,t]);let[r,n,i]=ti.from(e),[o,s,a]=ti.from(t),l=r-o,u=n-s,d=i-a;return Math.sqrt(l**2+u**2+d**2)}const R6=75e-6;function ss(e,t,{epsilon:r=R6}={}){e=be(e),t||(t=e.space),t=Y.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function pa(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Hk(e,t,r="lab"){r=Y.get(r);let n=r.from(e),i=r.from(t);return Math.sqrt(n.reduce((o,s,a)=>{let l=i[a];return He(s)||He(l)?o:o+(l-s)**2},0))}function B6(e,t){return Hk(e,t,"lab")}const L6=Math.PI,e1=L6/180;function _6(e,t,{l:r=2,c:n=1}={}){[e,t]=be([e,t]);let[i,o,s]=dn.from(e),[,a,l]=bn.from(dn,[i,o,s]),[u,d,f]=dn.from(t),h=bn.from(dn,[u,d,f])[1];a<0&&(a=0),h<0&&(h=0);let g=i-u,m=a-h,b=o-d,k=s-f,x=b**2+k**2-m**2,D=.511;i>=16&&(D=.040975*i/(1+.01765*i));let C=.0638*a/(1+.0131*a)+.638,P;He(l)&&(l=0),l>=164&&l<=345?P=.56+Math.abs(.2*Math.cos((l+168)*e1)):P=.36+Math.abs(.4*Math.cos((l+35)*e1));let O=Math.pow(a,4),H=Math.sqrt(O/(O+1900)),ee=C*(H*P+1-H),ie=(g/(r*D))**2;return ie+=(m/(n*C))**2,ie+=x/ee**2,Math.sqrt(ie)}const t1=203;var Ng=new Y({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:cr,fromBase(e){return e.map(t=>t*t1)},toBase(e){return e.map(t=>t/t1)}});const ac=1.15,lc=.66,r1=2610/2**14,j6=2**14/2610,n1=3424/2**12,i1=2413/2**7,o1=2392/2**7,z6=1.7*2523/2**5,s1=2**5/(1.7*2523),uc=-.56,Ih=16295499532821565e-27,U6=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],q6=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],W6=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],V6=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]];var Gk=new Y({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:Ng,fromBase(e){let[t,r,n]=e,i=ac*t-(ac-1)*n,o=lc*r-(lc-1)*t,a=wt([i,o,n],U6).map(function(h){let g=n1+i1*Ft(h/1e4,r1),m=1+o1*Ft(h/1e4,r1);return Ft(g/m,z6)}),[l,u,d]=wt(a,W6);return[(1+uc)*l/(1+uc*l)-Ih,u,d]},toBase(e){let[t,r,n]=e,i=(t+Ih)/(1+uc-uc*(t+Ih)),s=wt([i,r,n],V6).map(function(h){let g=n1-Ft(h,s1),m=o1*Ft(h,s1)-i1;return 1e4*Ft(g/m,j6)}),[a,l,u]=wt(s,q6),d=(a+(ac-1)*u)/ac,f=(l+(lc-1)*d)/lc;return[d,f,u]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),sm=new Y({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Gk,fromBase:bn.fromBase,toBase:bn.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function K6(e,t){[e,t]=be([e,t]);let[r,n,i]=sm.from(e),[o,s,a]=sm.from(t),l=r-o,u=n-s;He(i)&&He(a)?(i=0,a=0):He(i)?i=a:He(a)&&(a=i);let d=i-a,f=2*Math.sqrt(n*s)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+u**2+f**2)}const Zk=3424/4096,Yk=2413/128,Jk=2392/128,a1=2610/16384,H6=2523/32,G6=16384/2610,l1=32/2523,Z6=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],Y6=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],J6=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],X6=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var am=new Y({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Ng,fromBase(e){let t=wt(e,Z6);return Q6(t)},toBase(e){let t=eC(e);return wt(t,X6)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Q6(e){let t=e.map(function(r){let n=Zk+Yk*(r/1e4)**a1,i=1+Jk*(r/1e4)**a1;return(n/i)**H6});return wt(t,Y6)}function eC(e){return wt(e,J6).map(function(n){let i=Math.max(n**l1-Zk,0),o=Yk-Jk*n**l1;return 1e4*(i/o)**G6})}function tC(e,t){[e,t]=be([e,t]);let[r,n,i]=am.from(e),[o,s,a]=am.from(t);return 720*Math.sqrt((r-o)**2+.25*(n-s)**2+(i-a)**2)}function rC(e,t){[e,t]=be([e,t]);let r=2,[n,i,o]=ti.from(e),[s,a,l]=ti.from(t),u=n-s,d=r*(i-a),f=r*(o-l);return Math.sqrt(u**2+d**2+f**2)}const nC=Or.D65,Xk=.42,u1=1/Xk,Nh=2*Math.PI,Qk=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],iC=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],oC=[[460,451,288],[460,-891,-261],[460,-220,-6300]],sC={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Yo={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},aC=180/Math.PI,c1=Math.PI/180;function ex(e,t){return e.map(n=>{const i=Ft(t*Math.abs(n)*.01,Xk);return 400*Gd(i,n)/(i+27.13)})}function lC(e,t){const r=100/t*27.13**u1;return e.map(n=>{const i=Math.abs(n);return Gd(r*Ft(i/(400-i),u1),n)})}function uC(e){let t=Rn(e);t<=Yo.h[0]&&(t+=360);const r=zk(Yo.h,t)-1,[n,i]=Yo.h.slice(r,r+2),[o,s]=Yo.e.slice(r,r+2),a=Yo.H[r],l=(t-n)/o;return a+100*l/(l+(i-t)/s)}function cC(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,i]=Yo.h.slice(r,r+2),[o,s]=Yo.e.slice(r,r+2);return Rn((t*(s*n-o*i)-100*n*s)/(t*(s-o)-100*s))}function tx(e,t,r,n,i){const o={};o.discounting=i,o.refWhite=e,o.surround=n;const s=e.map(k=>k*100);o.la=t,o.yb=r;const a=s[1],l=wt(s,Qk);let u=sC[o.surround];const d=u[0];o.c=u[1],o.nc=u[2];const h=(1/(5*o.la+1))**4;o.fl=h*o.la+.1*(1-h)*(1-h)*Math.cbrt(5*o.la),o.flRoot=o.fl**.25,o.n=o.yb/a,o.z=1.48+Math.sqrt(o.n),o.nbb=.725*o.n**-.2,o.ncb=o.nbb;const g=Math.max(Math.min(d*(1-1/3.6*Math.exp((-o.la-42)/92)),1),0);o.dRgb=l.map(k=>iu(1,a/k,g)),o.dRgbInv=o.dRgb.map(k=>1/k);const m=l.map((k,x)=>k*o.dRgb[x]),b=ex(m,o.fl);return o.aW=o.nbb*(2*b[0]+b[1]+.05*b[2]),o}const d1=tx(nC,64/Math.PI*.2,20,"average",!1);function lm(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=Rn(e.h)*c1:r=cC(e.H)*c1;const n=Math.cos(r),i=Math.sin(r);let o=0;e.J!==void 0?o=Ft(e.J,1/2)*.1:e.Q!==void 0&&(o=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/o:e.M!==void 0?s=e.M/t.flRoot/o:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const a=Ft(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),l=.25*(Math.cos(r+2)+3.8),u=t.aW*Ft(o,2/t.c/t.z),d=5e4/13*t.nc*t.ncb*l,f=u/t.nbb,h=23*(f+.305)*Fg(a,23*d+a*(11*n+108*i)),g=h*n,m=h*i,b=lC(wt([f,g,m],oC).map(k=>k*1/1403),t.fl);return wt(b.map((k,x)=>k*t.dRgbInv[x]),iC).map(k=>k/100)}function rx(e,t){const r=e.map(C=>C*100),n=ex(wt(r,Qk).map((C,P)=>C*t.dRgb[P]),t.fl),i=n[0]+(-12*n[1]+n[2])/11,o=(n[0]+n[1]-2*n[2])/9,s=(Math.atan2(o,i)%Nh+Nh)%Nh,a=.25*(Math.cos(s+2)+3.8),l=5e4/13*t.nc*t.ncb*Fg(a*Math.sqrt(i**2+o**2),n[0]+n[1]+1.05*n[2]+.305),u=Ft(l,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),d=t.nbb*(2*n[0]+n[1]+.05*n[2]),f=Ft(d/t.aW,.5*t.c*t.z),h=100*Ft(f,2),g=4/t.c*f*(t.aW+4)*t.flRoot,m=u*f,b=m*t.flRoot,k=Rn(s*aC),x=uC(k),D=50*Ft(t.c*u/(t.aW+4),1/2);return{J:h,C:m,h:k,s:D,Q:g,M:b,H:x}}var dC=new Y({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:cr,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=rx(e,d1),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return lm({J:e[0],M:e[1],h:e[2]},d1)}});const fC=Or.D65,hC=216/24389,nx=24389/27;function mC(e){return 116*(e>hC?Math.cbrt(e):(nx*e+16)/116)-16}function um(e){return e>8?Math.pow((e+16)/116,3):e/nx}function gC(e,t){let[r,n,i]=e,o=[],s=0;if(i===0)return[0,0,0];let a=um(i);i>0?s=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:s=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const l=2e-12,u=15;let d=0,f=1/0;for(;d<=u;){o=lm({J:s,C:n,h:r},t);const h=Math.abs(o[1]-a);if(h<f){if(h<=l)return o;f=h}s=s-(o[1]-a)*s/(2*o[1]),d+=1}return lm({J:s,C:n,h:r},t)}function pC(e,t){const r=mC(e[1]);if(r===0)return[0,0,0];const n=rx(e,Og);return[Rn(n.h),n.C,r]}const Og=tx(fC,200/Math.PI*um(50),um(50)*100,"average",!1);var ou=new Y({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:cr,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=pC(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return gC(e,Og)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const bC=Math.PI/180,f1=[1,.007,.0228];function h1(e){e[1]<0&&(e=ou.fromBase(ou.toBase(e)));const t=Math.log(Math.max(1+f1[2]*e[1]*Og.flRoot,1))/f1[2],r=e[0]*bC,n=t*Math.cos(r),i=t*Math.sin(r);return[e[2],n,i]}function yC(e,t){[e,t]=be([e,t]);let[r,n,i]=h1(ou.from(e)),[o,s,a]=h1(ou.from(t));return Math.sqrt((r-o)**2+(n-s)**2+(i-a)**2)}var ba={deltaE76:B6,deltaECMC:_6,deltaE2000:Kk,deltaEJz:K6,deltaEITP:tC,deltaEOK:om,deltaEOK2:rC,deltaEHCT:yC};function vC(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const m1={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function $o(e,{method:t=pn.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:i=2,blackWhiteClamp:o=void 0}={}){if(e=be(e),ja(arguments[1])?r=arguments[1]:r||(r=e.space),r=Y.get(r),ss(e,r,{epsilon:0}))return e;let s;if(t==="css")s=wC(e,{space:r});else{if(t!=="clip"&&!ss(e,r)){Object.prototype.hasOwnProperty.call(m1,t)&&({method:t,jnd:i,deltaEMethod:n,blackWhiteClamp:o}=m1[t]);let a=Kk;if(n!==""){for(let u in ba)if("deltae"+n.toLowerCase()===u.toLowerCase()){a=ba[u];break}}i===0&&(i=1e-16);let l=$o(it(e,r),{method:"clip",space:r});if(a(e,l)>i){if(o&&Object.keys(o).length===3){let D=Y.resolveCoord(o.channel),C=cn(it(e,D.space),D.id);if(He(C)&&(C=0),C>=o.max)return it({space:"xyz-d65",coords:Or.D65},e.space);if(C<=o.min)return it({space:"xyz-d65",coords:[0,0,0]},e.space)}let u=Y.resolveCoord(t),d=u.space,f=u.id,h=it(e,d);h.coords.forEach((D,C)=>{He(D)&&(h.coords[C]=0)});let m=(u.range||u.refRange)[0],b=vC(i),k=m,x=cn(h,f);for(;x-k>b;){let D=pa(h);D=$o(D,{space:r,method:"clip"}),a(h,D)-i<b?k=cn(h,f):x=cn(h,f),Zi(h,f,(k+x)/2)}s=it(h,r)}else s=l}else s=it(e,r);if(t==="clip"||!ss(s,r,{epsilon:0})){let a=Object.values(r.coords).map(l=>l.range||[]);s.coords=s.coords.map((l,u)=>{let[d,f]=a[u];return d!==void 0&&(l=Math.max(d,l)),f!==void 0&&(l=Math.min(l,f)),l})}}return r!==e.space&&(s=it(s,e.space)),e.coords=s.coords,e}$o.returns="color";const g1={WHITE:{space:ti,coords:[1,0,0],alpha:1},BLACK:{space:ti,coords:[0,0,0],alpha:1}};function wC(e,{space:t}={}){e=be(e),t||(t=e.space),t=Y.get(t);const i=Y.get("oklch");if(t.isUnbounded)return it(e,t);const o=it(e,i);let s=o.coords[0];if(s>=1){const m=it(g1.WHITE,t);return m.alpha=e.alpha,it(m,t)}if(s<=0){const m=it(g1.BLACK,t);return m.alpha=e.alpha,it(m,t)}if(ss(o,t,{epsilon:0}))return it(o,t);function a(m){const b=it(m,t),k=Object.values(t.coords);return b.coords=b.coords.map((x,D)=>{if("range"in k[D]){const[C,P]=k[D].range;return Hd(C,x,P)}return x}),b}let l=0,u=o.coords[1],d=!0,f=pa(o),h=a(f),g=om(h,f);if(g<.02)return h;for(;u-l>1e-4;){const m=(l+u)/2;if(f.coords[1]=m,d&&ss(f,t,{epsilon:0}))l=m;else if(h=a(f),g=om(h,f),g<.02){if(.02-g<1e-4)break;d=!1,l=m}else u=m}return h}function it(e,t,{inGamut:r}={}){e=be(e),t=Y.get(t);let n=t.from(e),i={space:t,coords:n,alpha:e.alpha};return r&&(i=$o(i,r===!0?void 0:r)),i}it.returns="color";function Wl(e,t={}){let{precision:r=pn.precision,format:n,inGamut:i=!0,coords:o,alpha:s,commas:a}=t,l,u=be(e),d=n,f=u.parseMeta;f&&!n&&(f.format.canSerialize()&&(n=f.format,d=f.formatId),o??=f.types,s??=f.alphaType,a??=f.commas),d&&(n=u.space.getFormat(n)??Y.findFormat(d)),n||(n=u.space.getFormat("default")??Y.DEFAULT_FORMAT,d=n.name),n&&n.space&&n.space!==u.space&&(u=it(u,n.space));let h=u.coords.slice();if(i||=n.toGamut,i&&!ss(u)&&(h=$o(pa(u),i===!0?void 0:i).coords),n.type==="custom")if(n.serialize)l=n.serialize(h,u.alpha,t);else throw new TypeError(`format ${d} can only be used to parse colors, not for serialization`);else{let g=n.name||"color",m=n.serializeCoords(h,r,o);if(g==="color"){let C=n.id||n.ids?.[0]||u.space.cssId||u.space.id;m.unshift(C)}let b=u.alpha;s!==void 0&&typeof s!="object"&&(s=typeof s=="string"?{type:s}:{include:s});let k=s?.type??"<number>",x=s?.include===!0||n.alpha===!0||s?.include!==!1&&n.alpha!==!1&&b<1,D="";if(a??=n.commas,x){if(r!==null){let C;k==="<percentage>"&&(C="%",b*=100),b=Tg(b,{precision:r,unit:C})}D=`${a?",":" /"} ${b}`}l=`${g}(${m.join(a?", ":" ")}${D})`}return l}const kC=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],xC=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var su=new Tr({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:kC,fromXYZ_M:xC}),ix=new Tr({id:"rec2020",name:"REC.2020",base:su,toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,1/2.4)})}});const $C=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],DC=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var ox=new Tr({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:$C,fromXYZ_M:DC});const AC=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Gt=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var sx=new Tr({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:AC,fromXYZ_M:Gt}),p1={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let b1=Array(3).fill("<percentage> | <number>[0, 255]"),y1=Array(3).fill("<number>[0, 255]");var fs=new Tr({id:"srgb",name:"sRGB",base:sx,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:b1},rgb_number:{name:"rgb",commas:!0,coords:y1,alpha:!1},color:{},rgba:{coords:b1,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:y1},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:n}={})=>{(n!==!1&&t<1||n===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let i=r&&e.every(s=>s%17===0);return"#"+e.map(s=>i?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=p1.black,t.alpha=0):t.coords=p1[e],t.coords)return t}}}}),ax=new Tr({id:"p3",cssId:"display-p3",name:"P3",base:ox,fromBase:fs.fromBase,toBase:fs.toBase});pn.display_space=fs;let EC;if(typeof CSS<"u"&&CSS.supports)for(let e of[dn,ix,ax]){let t=e.getMinCoords(),n=Wl({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){pn.display_space=e;break}}function CC(e,{space:t=pn.display_space,...r}={}){e=be(e);let n=Wl(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!pn.display_space)n=new String(n),n.color=e;else{let i=e;if((e.coords.some(He)||He(e.alpha))&&!(EC??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=pa(e),i.coords=i.coords.map(Mt),i.alpha=Mt(i.alpha),n=Wl(i,r),CSS.supports("color",n)))return n=new String(n),n.color=i,n;i=it(i,t),n=new String(Wl(i,r)),n.color=i}return n}function SC(e,t,{space:r,hue:n="shorter"}={}){e=be(e),r||=e.space,r=Y.get(r);let i=Object.values(r.coords);[e,t]=[e,t].map(u=>it(u,r));let[o,s]=[e,t].map(u=>u.coords),a=o.map((u,d)=>{let f=i[d],h=s[d];return f.type==="angle"&&([u,h]=Vk(n,[u,h])),v1(u,h)}),l=v1(e.alpha,t.alpha);return{space:r,coords:a,alpha:l}}function v1(e,t){return He(e)||He(t)?e===t?null:0:e-t}function TC(e,t){return e=be(e),t=be(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function Do(e){return cn(e,[cr,"y"])}function lx(e,t){Zi(e,[cr,"y"],t)}function MC(e){Object.defineProperty(e.prototype,"luminance",{get(){return Do(this)},set(t){lx(this,t)}})}var FC=Object.freeze({__proto__:null,getLuminance:Do,register:MC,setLuminance:lx});function PC(e,t){e=be(e),t=be(t);let r=Math.max(Do(e),0),n=Math.max(Do(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const IC=.56,NC=.57,OC=.62,RC=.65,w1=.022,BC=1.414,LC=.1,_C=5e-4,jC=1.14,k1=.027,zC=1.14;function x1(e){return e>=w1?e:e+(w1-e)**BC}function Us(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function UC(e,t){t=be(t),e=be(e);let r,n,i,o,s,a;t=it(t,"srgb"),[o,s,a]=t.coords.map(g=>He(g)?0:g);let l=Us(o)*.2126729+Us(s)*.7151522+Us(a)*.072175;e=it(e,"srgb"),[o,s,a]=e.coords.map(g=>He(g)?0:g);let u=Us(o)*.2126729+Us(s)*.7151522+Us(a)*.072175,d=x1(l),f=x1(u),h=f>d;return Math.abs(f-d)<_C?n=0:h?(r=f**IC-d**NC,n=r*jC):(r=f**RC-d**OC,n=r*zC),Math.abs(n)<LC?i=0:n>0?i=n-k1:i=n+k1,i*100}function qC(e,t){e=be(e),t=be(t);let r=Math.max(Do(e),0),n=Math.max(Do(t),0);n>r&&([r,n]=[n,r]);let i=r+n;return i===0?0:(r-n)/i}const WC=5e4;function VC(e,t){e=be(e),t=be(t);let r=Math.max(Do(e),0),n=Math.max(Do(t),0);return n>r&&([r,n]=[n,r]),n===0?WC:(r-n)/n}function KC(e,t){e=be(e),t=be(t);let r=cn(e,[dn,"l"]),n=cn(t,[dn,"l"]);return Math.abs(r-n)}const HC=216/24389,$1=24/116,cc=24389/27;let Oh=Or.D65;var cm=new Y({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Oh,base:cr,fromBase(e){let r=e.map((n,i)=>n/Oh[i]).map(n=>n>HC?Math.cbrt(n):(cc*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>$1?Math.pow(t[0],3):(116*t[0]-16)/cc,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/cc,t[2]>$1?Math.pow(t[2],3):(116*t[2]-16)/cc].map((n,i)=>n*Oh[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}});const Rh=Math.pow(5,.5)*.5+.5;function GC(e,t){e=be(e),t=be(t);let r=cn(e,[cm,"l"]),n=cn(t,[cm,"l"]),i=Math.abs(Math.pow(r,Rh)-Math.pow(n,Rh)),o=Math.pow(i,1/Rh)*Math.SQRT2-40;return o<7.5?0:o}var Oc=Object.freeze({__proto__:null,contrastAPCA:UC,contrastDeltaPhi:GC,contrastLstar:KC,contrastMichelson:qC,contrastWCAG21:PC,contrastWeber:VC});function ZC(e,t,r){ja(r)&&(r={algorithm:r});let{algorithm:n,...i}=r||{};if(!n){let o=Object.keys(Oc).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${o}`)}e=be(e),t=be(t);for(let o in Oc)if("contrast"+n.toLowerCase()===o.toLowerCase())return Oc[o](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Zd(e){let[t,r,n]=Eu(e,cr),i=t+15*r+3*n;return[4*t/i,9*r/i]}function ux(e){let[t,r,n]=Eu(e,cr),i=t+r+n;return[t/i,r/i]}function YC(e){Object.defineProperty(e.prototype,"uv",{get(){return Zd(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return ux(this)}})}var JC=Object.freeze({__proto__:null,register:YC,uv:Zd,xy:ux});function Ol(e,t,r={}){ja(r)&&(r={method:r});let{method:n=pn.deltaE,...i}=r;for(let o in ba)if("deltae"+n.toLowerCase()===o.toLowerCase())return ba[o](e,t,i);throw new TypeError(`Unknown deltaE method: ${n}`)}function cx(e,t=.25){let n=[Y.get("oklch","lch"),"l"];return Zi(e,n,i=>i*(1+t))}function dx(e,t=.25){let n=[Y.get("oklch","lch"),"l"];return Zi(e,n,i=>i*(1-t))}cx.returns="color";dx.returns="color";var XC=Object.freeze({__proto__:null,darken:dx,lighten:cx});function fx(e,t,r,n={}){return[e,t]=[be(e),be(t)],po(r)==="object"&&([r,n]=[.5,r]),Cu(e,t,n)(r??.5)}function hx(e,t,r={}){let n;Rg(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:o,steps:s=2,maxSteps:a=1e3,...l}=r;n||([e,t]=[be(e),be(t)],n=Cu(e,t,l));let u=Ol(e,t),d=i>0?Math.max(s,Math.ceil(u/i)+1):s,f=[];if(a!==void 0&&(d=Math.min(d,a)),d===1)f=[{p:.5,color:n(.5)}];else{let h=1/(d-1);f=Array.from({length:d},(g,m)=>{let b=m*h;return{p:b,color:n(b)}})}if(i>0){let h=f.reduce((g,m,b)=>{if(b===0)return 0;let k=Ol(m.color,f[b-1].color,o);return Math.max(g,k)},0);for(;h>i;){h=0;for(let g=1;g<f.length&&f.length<a;g++){let m=f[g-1],b=f[g],k=(b.p+m.p)/2,x=n(k);h=Math.max(h,Ol(x,m.color),Ol(x,b.color)),f.splice(g,0,{p:k,color:n(k)}),g++}}}return f=f.map(h=>h.color),f}function Cu(e,t,r={}){if(Rg(e)){let[l,u]=[e,t];return Cu(...l.rangeArgs.colors,{...l.rangeArgs.options,...u})}let{space:n,outputSpace:i,progression:o,premultiplied:s}=r;e=be(e),t=be(t),e=pa(e),t=pa(t);let a={colors:[e,t],options:r};if(n?n=Y.get(n):n=Y.registry[pn.interpolationSpace]||e.space,i=i?Y.get(i):n,e=it(e,n),t=it(t,n),e=$o(e),t=$o(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",u=[n,"h"],[d,f]=[cn(e,u),cn(t,u)];He(d)&&!He(f)?d=f:He(f)&&!He(d)&&(f=d),[d,f]=Vk(l,[d,f]),Zi(e,u,d),Zi(t,u,f)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=o?o(l):l;let u=e.coords.map((h,g)=>{let m=t.coords[g];return iu(h,m,l)}),d=iu(e.alpha,t.alpha,l),f={space:n,coords:u,alpha:d};return s&&(f.coords=f.coords.map(h=>h/d)),i!==n&&(f=it(f,i)),f},{rangeArgs:a})}function Rg(e){return po(e)==="function"&&!!e.rangeArgs}pn.interpolationSpace="lab";function QC(e){e.defineFunction("mix",fx,{returns:"color"}),e.defineFunction("range",Cu,{returns:"function<color>"}),e.defineFunction("steps",hx,{returns:"array<color>"})}var e8=Object.freeze({__proto__:null,isRange:Rg,mix:fx,range:Cu,register:QC,steps:hx}),t8=new Y({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:fs,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,i,o]=e,[s,a,l]=[null,0,(r+t)/2],u=t-r;if(u!==0){switch(a=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(i-o)/u+(i<o?6:0);break;case i:s=(o-n)/u+2;break;case o:s=(n-i)/u+4}s=s*60}return a<0&&(s+=180,a=Math.abs(a)),s>=360&&(s-=360),[s,a*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function i(o){let s=(o+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(s-3,9-s,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),mx=new Y({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:fs,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[n,i,o]=e,[s,a,l]=[null,0,t],u=t-r;if(u!==0){switch(t){case n:s=(i-o)/u+(i<o?6:0);break;case i:s=(o-n)/u+2;break;case o:s=(n-i)/u+4}s=s*60}return l&&(a=u/l),s>=360&&(s-=360),[s,a*100,l*100]},toBase(e){let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function i(o){let s=(o+t/60)%6;return n-n*r*Math.max(0,Math.min(s,4-s,1))}return[i(5),i(3),i(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),r8=new Y({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:mx,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=r+n;if(i>=1){let a=r/i;return[t,0,a*100]}let o=1-n,s=o===0?0:1-r/o;return[t,s*100,o*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const n8=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],i8=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var gx=new Tr({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:n8,fromXYZ_M:i8}),o8=new Tr({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:gx,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const s8=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],a8=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var px=new Tr({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Ig,toXYZ_M:s8,fromXYZ_M:a8});const l8=1/512,u8=16/512;var c8=new Tr({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:px,toBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n<u8?t/16:r*n**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n>=l8?r*n**(1/1.8):16*t})}});const dc=1.09929682680944,D1=.018053968510807;var d8=new Tr({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:su,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n<D1*4.5?t/4.5:r*Math.pow((n+dc-1)/dc,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n>=D1?r*(dc*Math.pow(n,.45)-(dc-1)):4.5*t})}}),f8=new Y({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:ti,fromBase:bn.fromBase,toBase:bn.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const ya=2*Math.PI,ad=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],ld=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],Bh=Number.MAX_VALUE,Vl=.206,Bg=.03,Rl=(1+Vl)/(1+Bg);function lr(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let n=0;return e.forEach((i,o)=>{n+=i*t[o]}),n}function Kl(e){return .5*(Rl*e-Vl+Math.sqrt((Rl*e-Vl)*(Rl*e-Vl)+4*Bg*Rl*e))}function ia(e){return(e**2+Vl*e)/(Rl*(e+Bg))}function Lg(e){let[t,r]=e;return[r/t,r/(1-t)]}function h8(e,t){let r=.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),n=.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))));return[r,n]}function _g(e,t){let r=wt(e,bo);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,wt(r,t,r)}function Yd(e,t,r,n){let i=g8(e,t,r,n),o=_g([1,i*e,i*t],r),s=Ft(1/Math.max(...o),1/3),a=s*i;return[s,a]}function m8(e,t,r,n,i,o,s,a){let l;if(a===void 0&&(a=Yd(e,t,o,s)),(r-i)*a[1]-(a[0]-i)*n<=0)l=a[1]*i/(n*a[0]+a[1]*(i-r));else{l=a[1]*(i-1)/(n*(a[0]-1)+a[1]*(i-r));let u=r-i,d=n,f=lr(bo[0].slice(1),[e,t]),h=lr(bo[1].slice(1),[e,t]),g=lr(bo[2].slice(1),[e,t]),m=u+d*f,b=u+d*h,k=u+d*g,x=i*(1-l)+l*r,D=l*n,C=x+D*f,P=x+D*h,O=x+D*g,H=C**3,ee=P**3,ie=O**3,X=3*m*C**2,ye=3*b*P**2,se=3*k*O**2,$e=6*m**2*C,Ue=6*b**2*P,Ge=6*k**2*O,yr=lr(o[0],[H,ee,ie])-1,Et=lr(o[0],[X,ye,se]),An=lr(o[0],[$e,Ue,Ge]),En=Et/(Et*Et-.5*yr*An),Ur=-yr*En,Ct=lr(o[1],[H,ee,ie])-1,me=lr(o[1],[X,ye,se]),yt=lr(o[1],[$e,Ue,Ge]),Ze=me/(me*me-.5*Ct*yt),zt=-Ct*Ze,Be=lr(o[2],[H,ee,ie])-1,sr=lr(o[2],[X,ye,se]),Cn=lr(o[2],[$e,Ue,Ge]),qn=sr/(sr*sr-.5*Be*Cn),Si=-Be*qn;Ur=En>=0?Ur:Bh,zt=Ze>=0?zt:Bh,Si=qn>=0?Si:Bh,l+=Math.min(Ur,Math.min(zt,Si))}return l}function bx(e,t,r){let[n,i,o]=e,s=Yd(i,o,t,r),a=m8(i,o,n,1,n,t,r,s),l=Lg(s),u=a/Math.min(n*l[0],(1-n)*l[1]),d=h8(i,o),f=n*d[0],h=(1-n)*d[1],g=.9*u*Math.sqrt(Math.sqrt(1/(1/f**4+1/h**4)));return f=n*.4,h=(1-n)*.8,[Math.sqrt(1/(1/f**2+1/h**2)),g,a]}function g8(e,t,r,n){let i,o,s,a,l,u,d,f;lr(n[0][0],[e,t])>1?([i,o,s,a,l]=n[0][1],[u,d,f]=r[0]):lr(n[1][0],[e,t])>1?([i,o,s,a,l]=n[1][1],[u,d,f]=r[1]):([i,o,s,a,l]=n[2][1],[u,d,f]=r[2]);let h=i+o*e+s*t+a*e**2+l*e*t,g=lr(bo[0].slice(1),[e,t]),m=lr(bo[1].slice(1),[e,t]),b=lr(bo[2].slice(1),[e,t]),k=1+h*g,x=1+h*m,D=1+h*b,C=k**3,P=x**3,O=D**3,H=3*g*k**2,ee=3*m*x**2,ie=3*b*D**2,X=6*g**2*k,ye=6*m**2*x,se=6*b**2*D,$e=u*C+d*P+f*O,Ue=u*H+d*ee+f*ie,Ge=u*X+d*ye+f*se;return h=h-$e*Ue/(Ue**2-.5*$e*Ge),h}function p8(e,t,r){let[n,i,o]=e,s=ia(o),a=null,l=null;if(n=Rn(n)/360,s!==0&&s!==1&&i!==0){let u=Math.cos(ya*n),d=Math.sin(ya*n),[f,h,g]=bx([s,u,d],t,r),m=.8,b=1.25,k,x,D,C;i<m?(k=b*i,x=0,D=m*f,C=1-D/h):(k=5*(i-.8),x=h,D=.2*h**2*1.25**2/f,C=1-D/(g-h));let P=x+k*D/(1-C*k);a=P*u,l=P*d}return[s,a,l]}function b8(e,t,r){let n=1e-7,i=1e-4,o=e[0],s=0,a=Kl(o),l=Math.sqrt(e[1]**2+e[2]**2),u=.5+Math.atan2(-e[2],-e[1])/ya;if(a!==0&&a!==1&&l!==0){let f=e[1]/l,h=e[2]/l,[g,m,b]=bx([o,f,h],t,r),k=.8,x=1.25,D,C,P,O;l<m?(C=k*g,P=1-C/m,O=l/(C+P*l),s=O*k):(D=m,C=.2*m**2*x**2/g,P=1-C/(b-m),O=(l-D)/(C+P*(l-D)),s=k+.2*O)}const d=Math.abs(s)<i;return d||a===0||Math.abs(1-a)<n?(u=null,d||(s=0)):u=Rn(u*360),[u,s,a]}var y8=new Y({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:ti,gamutSpace:"self",fromBase(e){return b8(e,ad,ld)},toBase(e){return p8(e,ad,ld)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),yx=new Y({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:ti,fromBase(e){return[Kl(e[0]),e[1],e[2]]},toBase(e){return[ia(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),v8=new Y({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:yx,fromBase:bn.fromBase,toBase:bn.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function w8(e,t,r){let[n,i,o]=e;n=Rn(n)/360;let s=ia(o),a=null,l=null;if(s!==0&&i!==0){let u=Math.cos(ya*n),d=Math.sin(ya*n),f=Yd(u,d,t,r),[h,g]=Lg(f),m=.5,b=1-m/h,k=1-i*m/(m+g-g*b*i),x=i*g*m/(m+g-g*b*i);s=o*k;let D=o*x,C=ia(k),P=x*C/k,O=ia(s);D=D*O/s,s=O;let[H,ee,ie]=_g([C,u*P,d*P],t),X=Ft(1/Math.max(Math.max(H,ee),Math.max(ie,0)),1/3);s=s*X,D=D*X,a=D*u,l=D*d}return[s,a,l]}function k8(e,t,r){let n=1e-4,i=e[0],o=0,s=Kl(i),a=Math.sqrt(e[1]**2+e[2]**2),l=.5+Math.atan2(-e[2],-e[1])/ya;if(i!==0&&i!==1&&a!==0){let u=e[1]/a,d=e[2]/a,f=Yd(u,d,t,r),[h,g]=Lg(f),m=.5,b=1-m/h,k=g/(a+i*g),x=k*i,D=k*a,C=ia(x),P=D*C/x,[O,H,ee]=_g([C,u*P,d*P],t),ie=Ft(1/Math.max(Math.max(O,H),Math.max(ee,0)),1/3);i=i/ie,a=a/ie,a=a*Kl(i)/i,i=Kl(i),s=i/x,o=(m+g)*D/(g*m+g*b*D)}return Math.abs(o)<n||s===0?l=null:l=Rn(l*360),[l,o,s]}var x8=new Y({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:ti,gamutSpace:"self",fromBase(e){return k8(e,ad,ld)},toBase(e){return w8(e,ad,ld)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});let vx=Or.D65;const $8=216/24389,A1=24389/27,[E1,C1]=Zd({space:cr,coords:vx});var wx=new Y({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:vx,base:cr,fromBase(e){let t=[Mt(e[0]),Mt(e[1]),Mt(e[2])],r=t[1],[n,i]=Zd({space:cr,coords:t});if(!Number.isFinite(n)||!Number.isFinite(i))return[0,0,0];let o=r<=$8?A1*r:116*Math.cbrt(r)-16;return[o,13*o*(n-E1),13*o*(i-C1)]},toBase(e){let[t,r,n]=e;if(t===0||He(t))return[0,0,0];r=Mt(r),n=Mt(n);let i=r/(13*t)+E1,o=n/(13*t)+C1,s=t<=8?t/A1:Math.pow((t+16)/116,3);return[s*(9*i/(4*o)),s,s*((12-3*i-20*o)/(4*o))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),jg=new Y({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:wx,fromBase:bn.fromBase,toBase:bn.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const D8=216/24389,A8=24389/27,S1=Gt[0][0],T1=Gt[0][1],Lh=Gt[0][2],M1=Gt[1][0],F1=Gt[1][1],_h=Gt[1][2],P1=Gt[2][0],I1=Gt[2][1],jh=Gt[2][2];function qs(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}function ud(e){const t=Math.pow(e+16,3)/1560896,r=t>D8?t:e/A8,n=r*(284517*S1-94839*Lh),i=r*(838422*Lh+769860*T1+731718*S1),o=r*(632260*Lh-126452*T1),s=r*(284517*M1-94839*_h),a=r*(838422*_h+769860*F1+731718*M1),l=r*(632260*_h-126452*F1),u=r*(284517*P1-94839*jh),d=r*(838422*jh+769860*I1+731718*P1),f=r*(632260*jh-126452*I1);return{r0s:n/o,r0i:i*e/o,r1s:n/(o+126452),r1i:(i-769860)*e/(o+126452),g0s:s/l,g0i:a*e/l,g1s:s/(l+126452),g1i:(a-769860)*e/(l+126452),b0s:u/f,b0i:d*e/f,b1s:u/(f+126452),b1i:(d-769860)*e/(f+126452)}}function N1(e,t){const r=t/360*Math.PI*2,n=qs(e.r0s,e.r0i,r),i=qs(e.r1s,e.r1i,r),o=qs(e.g0s,e.g0i,r),s=qs(e.g1s,e.g1i,r),a=qs(e.b0s,e.b0i,r),l=qs(e.b1s,e.b1i,r);return Math.min(n,i,o,s,a,l)}var E8=new Y({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:jg,gamutSpace:fs,fromBase(e){let[t,r,n]=[Mt(e[0]),Mt(e[1]),Mt(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=ud(t),s=N1(o,n);i=r/s*100}return[n,i,t]},toBase(e){let[t,r,n]=[Mt(e[0]),Mt(e[1]),Mt(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let o=ud(n);i=N1(o,t)/100*r}return[n,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Gt[0][0];Gt[0][1];Gt[0][2];Gt[1][0];Gt[1][1];Gt[1][2];Gt[2][0];Gt[2][1];Gt[2][2];function Ws(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function O1(e){let t=Ws(e.r0s,e.r0i),r=Ws(e.r1s,e.r1i),n=Ws(e.g0s,e.g0i),i=Ws(e.g1s,e.g1i),o=Ws(e.b0s,e.b0i),s=Ws(e.b1s,e.b1i);return Math.min(t,r,n,i,o,s)}var C8=new Y({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:jg,gamutSpace:"self",fromBase(e){let[t,r,n]=[Mt(e[0]),Mt(e[1]),Mt(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=ud(t),s=O1(o);i=r/s*100}return[n,i,t]},toBase(e){let[t,r,n]=[Mt(e[0]),Mt(e[1]),Mt(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let o=ud(n);i=O1(o)/100*r}return[n,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),zg=new Tr({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:su.toBase,fromBase:su.fromBase});const R1=203,B1=2610/2**14,S8=2**14/2610,T8=2523/2**5,L1=2**5/2523,_1=3424/2**12,j1=2413/2**7,z1=2392/2**7;var M8=new Tr({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:zg,toBase(e){return e.map(function(t){return(Math.max(t**L1-_1,0)/(j1-z1*t**L1))**S8*1e4/R1})},fromBase(e){return e.map(function(t){let r=Math.max(t*R1/1e4,0),n=_1+j1*r**B1,i=1+z1*r**B1;return(n/i)**T8})}});const U1=.17883277,q1=.28466892,W1=.55991073,zh=3.7743;var F8=new Tr({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:zg,toBase(e){return e.map(function(t){return t<=.5?t**2/3*zh:(Math.exp((t-W1)/U1)+q1)/12*zh})},fromBase(e){return e.map(function(t){return t/=zh,t<=1/12?Ft(3*t,.5):U1*Math.log(12*t-q1)+W1})}});const kx={};xo.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=xx(e.W1,e.W2,e.options.method))});xo.add("chromatic-adaptation-end",e=>{e.M||(e.M=xx(e.W1,e.W2,e.options.method))});function Jd({id:e,toCone_M:t,fromCone_M:r}){kx[e]=arguments[0]}function xx(e,t,r="Bradford"){let n=kx[r],[i,o,s]=Nl(n.toCone_M,e),[a,l,u]=Nl(n.toCone_M,t),d=[[a/i,0,0],[0,l/o,0],[0,0,u/s]],f=Nl(d,n.toCone_M);return Nl(n.fromCone_M,f)}Jd({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Jd({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Jd({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Jd({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(Or,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Or.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const P8=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],I8=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var $x=new Tr({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Or.ACES,toXYZ_M:P8,fromXYZ_M:I8});const fc=2**-16,Uh=-.35828683,hc=(Math.log2(65504)+9.72)/17.52;var N8=new Tr({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[Uh,hc],name:"Red"},g:{range:[Uh,hc],name:"Green"},b:{range:[Uh,hc],name:"Blue"}},referred:"scene",base:$x,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-fc)*2:r<hc?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(fc)+9.72)/17.52:t<fc?(Math.log2(fc+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),V1=Object.freeze({__proto__:null,A98RGB:o8,A98RGB_Linear:gx,ACEScc:N8,ACEScg:$x,CAM16_JMh:dC,HCT:ou,HPLuv:C8,HSL:t8,HSLuv:E8,HSV:mx,HWB:r8,ICTCP:am,JzCzHz:sm,Jzazbz:Gk,LCH:bn,LCHuv:jg,Lab:dn,Lab_D65:cm,Luv:wx,OKLCH:f8,OKLab:ti,OKLrCH:v8,OKLrab:yx,Okhsl:y8,Okhsv:x8,P3:ax,P3_Linear:ox,ProPhoto:c8,ProPhoto_Linear:px,REC_2020:ix,REC_2020_Linear:su,REC_2020_Scene_Referred:d8,REC_2100_HLG:F8,REC_2100_Linear:zg,REC_2100_PQ:M8,XYZ_ABS_D65:Ng,XYZ_D50:Ig,XYZ_D65:cr,sRGB:fs,sRGB_Linear:sx});let ot=class Kr{constructor(...t){let r;if(t.length===1){let s={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=be(t[0],{parseMeta:s}),s.format&&(this.parseMeta=s)}let n,i,o;r?(n=r.space||r.spaceId,i=r.coords,o=r.alpha):[n,i,o]=t,Object.defineProperty(this,"space",{value:Y.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=He(o)?o:o===void 0?1:Hd(0,o,1);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:a=>this.set(s,a)})}get spaceId(){return this.space.id}clone(){return new Kr(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=CC(this,...t);return r.color=new Kr(r.color),r}static get(t,...r){return ga(t,this)?t:new Kr(t,...r)}static try(t,r){if(ga(t,this))return t;let n=Wk(t,r);return n?new Kr(n):null}static defineFunction(t,r,n=r){let{instance:i=!0,returns:o}=n,s=function(...a){let l=r(...a);if(o==="color")l=Kr.get(l);else if(o==="function<color>"){let u=l;l=function(...d){let f=u(...d);return Kr.get(f)},Object.assign(l,u)}else o==="array<color>"&&(l=l.map(u=>Kr.get(u)));return l};t in Kr||(Kr[t]=s),i&&(Kr.prototype[t]=function(...a){return s(this,...a)})}static defineFunctions(t){for(let r in t)Kr.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(Kr);else for(let r in t)Kr.defineFunction(r,t[r])}};ot.defineFunctions({get:cn,getAll:Eu,set:Zi,setAll:Pg,to:it,equals:TC,inGamut:ss,toGamut:$o,distance:Hk,deltas:SC,toString:Wl});Object.assign(ot,{util:E6,hooks:xo,WHITES:Or,Space:Y,spaces:Y.registry,parse:Uk,defaults:pn});for(let e of Object.keys(V1))Y.register(V1[e]);for(let e in Y.registry)dm(e,Y.registry[e]);xo.add("colorspace-init-end",e=>{dm(e.id,e),e.aliases?.forEach(t=>{dm(t,e)})});function dm(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(ot.prototype,r,{get(){let n=this.getAll(e);if(typeof Proxy>"u")return n;let i=new Proxy(n,{has:((o,s)=>{try{return Y.resolveCoord([t,s]),!0}catch{}return Reflect.has(o,s)}),get:(o,s,a)=>{if(s&&typeof s!="symbol"&&!(s in o)&&s in i){let{index:l}=Y.resolveCoord([t,s]);if(l>=0)return o[l]}return Reflect.get(o,s,a)},set:(o,s,a,l)=>{if(s&&typeof s!="symbol"&&!(s in o)||Number(s)>=0){let{index:u}=Y.resolveCoord([t,s]);if(u>=0)return o[u]=a,this.setAll(e,o),!0}return Reflect.set(o,s,a,l)}});return i},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}ot.extend(ba);ot.extend({deltaE:Ol});Object.assign(ot,{deltaEMethods:ba});ot.extend(XC);ot.extend({contrast:ZC});ot.extend(JC);ot.extend(FC);ot.extend(e8);ot.extend(Oc);const Dx=Symbol("no update");function K1(e){return e!==Dx}class qh extends li()("observable-value-update"){}class O8 extends li()("observable-value-resolve"){}class R8 extends li()("observable-value-error"){}class B8 extends bg("observable-destroy"){}class L8 extends bg("observable-callback-call"){}class _8 extends li()("observable-params-update"){}class Ax{listenTarget=new yg;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];if(r===Dx)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)){const i=this.value;return this.value=r,this.listenTarget.dispatch(new qh({detail:[r,i]})),!0}return!1}listen(t,r){const n=i=>r(...i.detail);return this.listenerMap.set(r,n),t&&r(this.value,void 0),this.listenTarget.listen(qh,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(qh,r)}destroy(){this.listenTarget.dispatch(new B8),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function Ug(e,t){return tE(e,t,(r,n)=>T.isFunction(r)&&T.isFunction(n)?!0:T.strictEquals(r,n))}var Hl;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(Hl||(Hl={}));class j8 extends Ax{equalityCheck;waitingForValueDeferredPromise=new Wc;lastSetPromise;lastSetId=ra();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(t={}){super(),this.equalityCheck="equalityCheck"in t?t.equalityCheck:Ug,"defaultValue"in t&&this.setValue(t.defaultValue)}setPromise(t){if(t===this.lastSetPromise)return!1;const r=ra();return this.lastSetId=r,this.lastSetPromise=t,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new Wc,super.setValue(this.waitingForValueDeferredPromise.promise,T.strictEquals)),t.then(n=>{this.lastSetPromise!==t||this.lastSetId!==r||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==t||this.lastSetId!==r)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const i=kt(n);console.error(i),this.rejectValue(i)}),!0}resolveValue(t){return K1(t)||(t=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(t,T.strictEquals):super.setValue(t))?(this.lastResolvedValue=t,this.lastSetId=ra(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(t),this.dispatch(new O8({detail:t})),!0):!1}rejectValue(t){this.waitingForValueDeferredPromise.reject(t),super.setValue(t,T.strictEquals),this.dispatch(new R8({detail:t}))}setValue(t){try{return t instanceof Promise?this.setPromise(t):t instanceof Error?(this.rejectValue(t),!0):K1(t)?this.resolveValue(t):!1}catch(r){return this.rejectValue(kt(r)),!0}}listen(t,r){return super.listen(t,r)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?Hl.Rejected:this.value instanceof Promise?Hl.Waiting:Hl.Resolved}}class Ys extends j8{static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==Ys.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck="equalityCheck"in t?t.equalityCheck:Ug,this.updateCallback=t.updateCallback,this.internalParams="defaultParams"in t?t.defaultParams:Ys.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===Ys.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(t){return this.setValue(kt(t))}finally{this.dispatch(new L8)}}updateLastParams(t){try{return this.internalParams===Ys.NotSet||!this.equalityCheck?.(t,this.internalParams)?(this.internalParams=t,this.dispatch(new _8({detail:this.internalParams})),!0):!1}catch(r){return this.setValue(kt(r)),!1}}update(...[t]){return this.updateLastParams(t)?(this.updateFromCallback(),!0):!1}setParams(t){return this.updateLastParams(t)}forceUpdate(...t){return T.isLengthAtLeast(t,1)&&this.updateLastParams(t[0]),this.updateFromCallback()}}function z8(e){return Bt(e)&&!rn(e)&&!Tu(e)&&Symbol.asyncIterator in e}function rn(e){return Array.isArray(e)}function Ex(e){return typeof e=="bigint"}function Su(e){return typeof e=="boolean"}function qg(e){return e instanceof globalThis.Date}function U8(e){return typeof e=="function"}function q8(e){return Bt(e)&&!rn(e)&&!Tu(e)&&Symbol.iterator in e}function W8(e){return e===null}function $i(e){return typeof e=="number"}function Bt(e){return typeof e=="object"&&e!==null}function Cx(e){return e instanceof globalThis.RegExp}function At(e){return typeof e=="string"}function V8(e){return typeof e=="symbol"}function Tu(e){return e instanceof globalThis.Uint8Array}function Pt(e){return e===void 0}function K8(e){return e.map(t=>cd(t))}function H8(e){return new Date(e.getTime())}function G8(e){return new Uint8Array(e)}function Z8(e){return new RegExp(e.source,e.flags)}function Y8(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=cd(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=cd(e[r]);return t}function cd(e){return rn(e)?K8(e):qg(e)?H8(e):Tu(e)?G8(e):Cx(e)?Z8(e):Bt(e)?Y8(e):e}function yn(e){return cd(e)}function Wg(e,t){return yn(t===void 0?e:{...t,...e})}function Sx(e){return Di(e)&&globalThis.Symbol.asyncIterator in e}function Tx(e){return Di(e)&&globalThis.Symbol.iterator in e}function Mx(e){return e instanceof globalThis.Promise}function Vg(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function Kg(e){return e instanceof globalThis.Uint8Array}function Fx(e,t){return t in e}function Di(e){return e!==null&&typeof e=="object"}function vn(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function Mo(e){return e===void 0}function Xd(e){return e===null}function Qd(e){return typeof e=="boolean"}function Ae(e){return typeof e=="number"}function Px(e){return globalThis.Number.isInteger(e)}function ji(e){return typeof e=="bigint"}function hn(e){return typeof e=="string"}function Ix(e){return typeof e=="function"}function ef(e){return typeof e=="symbol"}function Nx(e){return ji(e)||Qd(e)||Xd(e)||Ae(e)||hn(e)||ef(e)||Mo(e)}var Dt;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(s,a){return e.ExactOptionalPropertyTypes?a in s:s[a]!==void 0}e.IsExactOptionalProperty=t;function r(s){const a=Di(s);return e.AllowArrayObject?a:a&&!vn(s)}e.IsObjectLike=r;function n(s){return r(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}e.IsRecordLike=n;function i(s){return e.AllowNaN?Ae(s):Number.isFinite(s)}e.IsNumberLike=i;function o(s){const a=Mo(s);return e.AllowNullVoid?a||s===null:a}e.IsVoidLike=o})(Dt||(Dt={}));function J8(e){return globalThis.Object.freeze(e).map(t=>dd(t))}function X8(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=dd(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=dd(e[r]);return globalThis.Object.freeze(t)}function dd(e){return rn(e)?J8(e):qg(e)?e:Tu(e)?e:Cx(e)?e:Bt(e)?X8(e):e}function j(e,t){const r=t!==void 0?{...t,...e}:e;switch(Dt.InstanceMode){case"freeze":return dd(r);case"clone":return yn(r);default:return r}}class gr extends Error{constructor(t){super(t)}}const Xr=Symbol.for("TypeBox.Transform"),Mu=Symbol.for("TypeBox.Readonly"),Ji=Symbol.for("TypeBox.Optional"),tf=Symbol.for("TypeBox.Hint"),_=Symbol.for("TypeBox.Kind");function Hg(e){return Bt(e)&&e[Mu]==="Readonly"}function Fo(e){return Bt(e)&&e[Ji]==="Optional"}function Ox(e){return Oe(e,"Any")}function Rx(e){return Oe(e,"Argument")}function za(e){return Oe(e,"Array")}function rf(e){return Oe(e,"AsyncIterator")}function nf(e){return Oe(e,"BigInt")}function Fu(e){return Oe(e,"Boolean")}function Ua(e){return Oe(e,"Computed")}function qa(e){return Oe(e,"Constructor")}function Q8(e){return Oe(e,"Date")}function Wa(e){return Oe(e,"Function")}function Va(e){return Oe(e,"Integer")}function _n(e){return Oe(e,"Intersect")}function of(e){return Oe(e,"Iterator")}function Oe(e,t){return Bt(e)&&_ in e&&e[_]===t}function Bx(e){return Su(e)||$i(e)||At(e)}function ks(e){return Oe(e,"Literal")}function xs(e){return Oe(e,"MappedKey")}function $n(e){return Oe(e,"MappedResult")}function Pu(e){return Oe(e,"Never")}function e9(e){return Oe(e,"Not")}function Gg(e){return Oe(e,"Null")}function Ka(e){return Oe(e,"Number")}function ui(e){return Oe(e,"Object")}function sf(e){return Oe(e,"Promise")}function af(e){return Oe(e,"Record")}function en(e){return Oe(e,"Ref")}function Lx(e){return Oe(e,"RegExp")}function Iu(e){return Oe(e,"String")}function Zg(e){return Oe(e,"Symbol")}function $s(e){return Oe(e,"TemplateLiteral")}function t9(e){return Oe(e,"This")}function st(e){return Bt(e)&&Xr in e}function Ds(e){return Oe(e,"Tuple")}function Nu(e){return Oe(e,"Undefined")}function or(e){return Oe(e,"Union")}function r9(e){return Oe(e,"Uint8Array")}function n9(e){return Oe(e,"Unknown")}function i9(e){return Oe(e,"Unsafe")}function o9(e){return Oe(e,"Void")}function s9(e){return Bt(e)&&_ in e&&At(e[_])}function Lr(e){return Ox(e)||Rx(e)||za(e)||Fu(e)||nf(e)||rf(e)||Ua(e)||qa(e)||Q8(e)||Wa(e)||Va(e)||_n(e)||of(e)||ks(e)||xs(e)||$n(e)||Pu(e)||e9(e)||Gg(e)||Ka(e)||ui(e)||sf(e)||af(e)||en(e)||Lx(e)||Iu(e)||Zg(e)||$s(e)||t9(e)||Ds(e)||Nu(e)||or(e)||r9(e)||n9(e)||i9(e)||o9(e)||s9(e)}const a9=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function _x(e){try{return new RegExp(e),!0}catch{return!1}}function Yg(e){if(!At(e))return!1;for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);if(r>=7&&r<=13||r===27||r===127)return!1}return!0}function jx(e){return Jg(e)||gt(e)}function pl(e){return Pt(e)||Ex(e)}function nt(e){return Pt(e)||$i(e)}function Jg(e){return Pt(e)||Su(e)}function et(e){return Pt(e)||At(e)}function l9(e){return Pt(e)||At(e)&&Yg(e)&&_x(e)}function u9(e){return Pt(e)||At(e)&&Yg(e)}function zx(e){return Pt(e)||gt(e)}function fd(e){return Bt(e)&&e[Ji]==="Optional"}function ri(e){return Re(e,"Any")&&et(e.$id)}function c9(e){return Re(e,"Argument")&&$i(e.index)}function As(e){return Re(e,"Array")&&e.type==="array"&&et(e.$id)&&gt(e.items)&&nt(e.minItems)&&nt(e.maxItems)&&Jg(e.uniqueItems)&&zx(e.contains)&&nt(e.minContains)&&nt(e.maxContains)}function Xg(e){return Re(e,"AsyncIterator")&&e.type==="AsyncIterator"&&et(e.$id)&&gt(e.items)}function lf(e){return Re(e,"BigInt")&&e.type==="bigint"&&et(e.$id)&&pl(e.exclusiveMaximum)&&pl(e.exclusiveMinimum)&&pl(e.maximum)&&pl(e.minimum)&&pl(e.multipleOf)}function Es(e){return Re(e,"Boolean")&&e.type==="boolean"&&et(e.$id)}function d9(e){return Re(e,"Computed")&&At(e.target)&&rn(e.parameters)&&e.parameters.every(t=>gt(t))}function uf(e){return Re(e,"Constructor")&&e.type==="Constructor"&&et(e.$id)&&rn(e.parameters)&&e.parameters.every(t=>gt(t))&&gt(e.returns)}function cf(e){return Re(e,"Date")&&e.type==="Date"&&et(e.$id)&&nt(e.exclusiveMaximumTimestamp)&&nt(e.exclusiveMinimumTimestamp)&&nt(e.maximumTimestamp)&&nt(e.minimumTimestamp)&&nt(e.multipleOfTimestamp)}function df(e){return Re(e,"Function")&&e.type==="Function"&&et(e.$id)&&rn(e.parameters)&&e.parameters.every(t=>gt(t))&&gt(e.returns)}function Xi(e){return Re(e,"Integer")&&e.type==="integer"&&et(e.$id)&&nt(e.exclusiveMaximum)&&nt(e.exclusiveMinimum)&&nt(e.maximum)&&nt(e.minimum)&&nt(e.multipleOf)}function Ux(e){return Bt(e)&&Object.entries(e).every(([t,r])=>Yg(t)&&gt(r))}function Cs(e){return Re(e,"Intersect")&&!(At(e.type)&&e.type!=="object")&&rn(e.allOf)&&e.allOf.every(t=>gt(t)&&!b9(t))&&et(e.type)&&(Jg(e.unevaluatedProperties)||zx(e.unevaluatedProperties))&&et(e.$id)}function Qg(e){return Re(e,"Iterator")&&e.type==="Iterator"&&et(e.$id)&&gt(e.items)}function Re(e,t){return Bt(e)&&_ in e&&e[_]===t}function qx(e){return Po(e)&&At(e.const)}function Wx(e){return Po(e)&&$i(e.const)}function Vx(e){return Po(e)&&Su(e.const)}function Po(e){return Re(e,"Literal")&&et(e.$id)&&f9(e.const)}function f9(e){return Su(e)||$i(e)||At(e)}function h9(e){return Re(e,"MappedKey")&&rn(e.keys)&&e.keys.every(t=>$i(t)||At(t))}function m9(e){return Re(e,"MappedResult")&&Ux(e.properties)}function Io(e){return Re(e,"Never")&&Bt(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function va(e){return Re(e,"Not")&&gt(e.not)}function ep(e){return Re(e,"Null")&&e.type==="null"&&et(e.$id)}function Qr(e){return Re(e,"Number")&&e.type==="number"&&et(e.$id)&&nt(e.exclusiveMaximum)&&nt(e.exclusiveMinimum)&&nt(e.maximum)&&nt(e.minimum)&&nt(e.multipleOf)}function pt(e){return Re(e,"Object")&&e.type==="object"&&et(e.$id)&&Ux(e.properties)&&jx(e.additionalProperties)&&nt(e.minProperties)&&nt(e.maxProperties)}function tp(e){return Re(e,"Promise")&&e.type==="Promise"&&et(e.$id)&&gt(e.item)}function hr(e){return Re(e,"Record")&&e.type==="object"&&et(e.$id)&&jx(e.additionalProperties)&&Bt(e.patternProperties)&&(t=>{const r=Object.getOwnPropertyNames(t.patternProperties);return r.length===1&&_x(r[0])&&Bt(t.patternProperties)&&gt(t.patternProperties[r[0]])})(e)}function g9(e){return Re(e,"Ref")&&et(e.$id)&&At(e.$ref)}function au(e){return Re(e,"RegExp")&&et(e.$id)&&At(e.source)&&At(e.flags)&&nt(e.maxLength)&&nt(e.minLength)}function ni(e){return Re(e,"String")&&e.type==="string"&&et(e.$id)&&nt(e.minLength)&&nt(e.maxLength)&&l9(e.pattern)&&u9(e.format)}function lu(e){return Re(e,"Symbol")&&e.type==="symbol"&&et(e.$id)}function uu(e){return Re(e,"TemplateLiteral")&&e.type==="string"&&At(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}function p9(e){return Re(e,"This")&&et(e.$id)&&At(e.$ref)}function b9(e){return Bt(e)&&Xr in e}function ff(e){return Re(e,"Tuple")&&e.type==="array"&&et(e.$id)&&$i(e.minItems)&&$i(e.maxItems)&&e.minItems===e.maxItems&&(Pt(e.items)&&Pt(e.additionalItems)&&e.minItems===0||rn(e.items)&&e.items.every(t=>gt(t)))}function hs(e){return Re(e,"Undefined")&&e.type==="undefined"&&et(e.$id)}function Yi(e){return Re(e,"Union")&&et(e.$id)&&Bt(e)&&rn(e.anyOf)&&e.anyOf.every(t=>gt(t))}function Ou(e){return Re(e,"Uint8Array")&&e.type==="Uint8Array"&&et(e.$id)&&nt(e.minByteLength)&&nt(e.maxByteLength)}function ii(e){return Re(e,"Unknown")&&et(e.$id)}function y9(e){return Re(e,"Unsafe")}function hf(e){return Re(e,"Void")&&e.type==="void"&&et(e.$id)}function v9(e){return Bt(e)&&_ in e&&At(e[_])&&!a9.includes(e[_])}function gt(e){return Bt(e)&&(ri(e)||c9(e)||As(e)||Es(e)||lf(e)||Xg(e)||d9(e)||uf(e)||cf(e)||df(e)||Xi(e)||Cs(e)||Qg(e)||Po(e)||h9(e)||m9(e)||Io(e)||va(e)||ep(e)||Qr(e)||pt(e)||tp(e)||hr(e)||g9(e)||au(e)||ni(e)||lu(e)||uu(e)||p9(e)||ff(e)||hs(e)||Yi(e)||Ou(e)||ii(e)||y9(e)||hf(e)||v9(e))}const w9="(true|false)",Rc="(0|[1-9][0-9]*)",Kx="(.*)",k9="(?!.*)",wa=`^${Rc}$`,ka=`^${Kx}$`,x9=`^${k9}$`,Hx=new Map;function rp(e){return Hx.has(e)}function np(e){return Hx.get(e)}const ip=new Map;function Ao(e){return ip.has(e)}function op(e,t){ip.set(e,t)}function sp(e){return ip.get(e)}function $9(e,t){return e.includes(t)}function D9(e){return[...new Set(e)]}function A9(e,t){return e.filter(r=>t.includes(r))}function E9(e,t){return e.reduce((r,n)=>A9(r,n),t)}function C9(e){return e.length===1?e[0]:e.length>1?E9(e.slice(1),e[0]):[]}function S9(e){const t=[];for(const r of e)t.push(...r);return t}function cu(e){return j({[_]:"Any"},e)}function ap(e,t){return j({[_]:"Array",type:"array",items:e},t)}function T9(e){return j({[_]:"Argument",index:e})}function lp(e,t){return j({[_]:"AsyncIterator",type:"AsyncIterator",items:e},t)}function Kt(e,t,r){return j({[_]:"Computed",target:e,parameters:t},r)}function M9(e,t){const{[t]:r,...n}=e;return n}function wn(e,t){return t.reduce((r,n)=>M9(r,n),e)}function bt(e){return j({[_]:"Never",not:{}},e)}function pr(e){return j({[_]:"MappedResult",properties:e})}function up(e,t,r){return j({[_]:"Constructor",type:"Constructor",parameters:e,returns:t},r)}function Ru(e,t,r){return j({[_]:"Function",type:"Function",parameters:e,returns:t},r)}function fm(e,t){return j({[_]:"Union",anyOf:e},t)}function F9(e){return e.some(t=>Fo(t))}function H1(e){return e.map(t=>Fo(t)?P9(t):t)}function P9(e){return wn(e,[Ji])}function I9(e,t){return F9(e)?Ro(fm(H1(e),t)):fm(H1(e),t)}function Ha(e,t){return e.length===1?j(e[0],t):e.length===0?bt(t):I9(e,t)}function br(e,t){return e.length===0?bt(t):e.length===1?j(e[0],t):fm(e,t)}class G1 extends gr{}function N9(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}function cp(e,t,r){return e[t]===r&&e.charCodeAt(t-1)!==92}function Vi(e,t){return cp(e,t,"(")}function du(e,t){return cp(e,t,")")}function Gx(e,t){return cp(e,t,"|")}function O9(e){if(!(Vi(e,0)&&du(e,e.length-1)))return!1;let t=0;for(let r=0;r<e.length;r++)if(Vi(e,r)&&(t+=1),du(e,r)&&(t-=1),t===0&&r!==e.length-1)return!1;return!0}function R9(e){return e.slice(1,e.length-1)}function B9(e){let t=0;for(let r=0;r<e.length;r++)if(Vi(e,r)&&(t+=1),du(e,r)&&(t-=1),Gx(e,r)&&t===0)return!0;return!1}function L9(e){for(let t=0;t<e.length;t++)if(Vi(e,t))return!0;return!1}function _9(e){let[t,r]=[0,0];const n=[];for(let o=0;o<e.length;o++)if(Vi(e,o)&&(t+=1),du(e,o)&&(t-=1),Gx(e,o)&&t===0){const s=e.slice(r,o);s.length>0&&n.push(xa(s)),r=o+1}const i=e.slice(r);return i.length>0&&n.push(xa(i)),n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"or",expr:n}}function j9(e){function t(i,o){if(!Vi(i,o))throw new G1("TemplateLiteralParser: Index must point to open parens");let s=0;for(let a=o;a<i.length;a++)if(Vi(i,a)&&(s+=1),du(i,a)&&(s-=1),s===0)return[o,a];throw new G1("TemplateLiteralParser: Unclosed group parens in expression")}function r(i,o){for(let s=o;s<i.length;s++)if(Vi(i,s))return[o,s];return[o,i.length]}const n=[];for(let i=0;i<e.length;i++)if(Vi(e,i)){const[o,s]=t(e,i),a=e.slice(o,s+1);n.push(xa(a)),i=s}else{const[o,s]=r(e,i),a=e.slice(o,s);a.length>0&&n.push(xa(a)),i=s-1}return n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"and",expr:n}}function xa(e){return O9(e)?xa(R9(e)):B9(e)?_9(e):L9(e)?j9(e):{type:"const",const:N9(e)}}function dp(e){return xa(e.slice(1,e.length-1))}class z9 extends gr{}function U9(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}function q9(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}function W9(e){return e.type==="const"&&e.const===".*"}function fu(e){return U9(e)||W9(e)?!1:q9(e)?!0:e.type==="and"?e.expr.every(t=>fu(t)):e.type==="or"?e.expr.every(t=>fu(t)):e.type==="const"?!0:(()=>{throw new z9("Unknown expression type")})()}function V9(e){const t=dp(e.pattern);return fu(t)}class K9 extends gr{}function*Zx(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const r of Zx(e.slice(1)))yield`${t}${r}`}function*H9(e){return yield*Zx(e.expr.map(t=>[...mf(t)]))}function*G9(e){for(const t of e.expr)yield*mf(t)}function*Z9(e){return yield e.const}function*mf(e){return e.type==="and"?yield*H9(e):e.type==="or"?yield*G9(e):e.type==="const"?yield*Z9(e):(()=>{throw new K9("Unknown expression")})()}function Yx(e){const t=dp(e.pattern);return fu(t)?[...mf(t)]:[]}function Ot(e,t){return j({[_]:"Literal",const:e,type:typeof e},t)}function Jx(e){return j({[_]:"Boolean",type:"boolean"},e)}function fp(e){return j({[_]:"BigInt",type:"bigint"},e)}function Ss(e){return j({[_]:"Number",type:"number"},e)}function ms(e){return j({[_]:"String",type:"string"},e)}function*Y9(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield Jx():t==="number"?yield Ss():t==="bigint"?yield fp():t==="string"?yield ms():yield(()=>{const r=t.split("|").map(n=>Ot(n.trim()));return r.length===0?bt():r.length===1?r[0]:Ha(r)})()}function*J9(e){if(e[1]!=="{"){const t=Ot("$"),r=hm(e.slice(1));return yield*[t,...r]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const r=Y9(e.slice(2,t)),n=hm(e.slice(t+1));return yield*[...r,...n]}yield Ot(e)}function*hm(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const r=Ot(e.slice(0,t)),n=J9(e.slice(t));return yield*[r,...n]}yield Ot(e)}function X9(e){return[...hm(e)]}class Q9 extends gr{}function eS(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Xx(e,t){return $s(e)?e.pattern.slice(1,e.pattern.length-1):or(e)?`(${e.anyOf.map(r=>Xx(r,t)).join("|")})`:Ka(e)?`${t}${Rc}`:Va(e)?`${t}${Rc}`:nf(e)?`${t}${Rc}`:Iu(e)?`${t}${Kx}`:ks(e)?`${t}${eS(e.const.toString())}`:Fu(e)?`${t}${w9}`:(()=>{throw new Q9(`Unexpected Kind '${e[_]}'`)})()}function Z1(e){return`^${e.map(t=>Xx(t,"")).join("")}$`}function hd(e){const r=Yx(e).map(n=>Ot(n));return Ha(r)}function Qx(e,t){const r=At(e)?Z1(X9(e)):Z1(e);return j({[_]:"TemplateLiteral",type:"string",pattern:r},t)}function tS(e){return Yx(e).map(r=>r.toString())}function rS(e){const t=[];for(const r of e)t.push(...No(r));return t}function nS(e){return[e.toString()]}function No(e){return[...new Set($s(e)?tS(e):or(e)?rS(e.anyOf):ks(e)?nS(e.const):Ka(e)?["[number]"]:Va(e)?["[number]"]:[])]}function iS(e,t,r){const n={};for(const i of Object.getOwnPropertyNames(t))n[i]=gf(e,No(t[i]),r);return n}function oS(e,t,r){return iS(e,t.properties,r)}function sS(e,t,r){const n=oS(e,t,r);return pr(n)}function e5(e,t){return e.map(r=>t5(r,t))}function aS(e){return e.filter(t=>!Pu(t))}function lS(e,t){return i5(aS(e5(e,t)))}function uS(e){return e.some(t=>Pu(t))?[]:e}function cS(e,t){return Ha(uS(e5(e,t)))}function dS(e,t){return t in e?e[t]:t==="[number]"?Ha(e):bt()}function fS(e,t){return t==="[number]"?e:bt()}function hS(e,t){return t in e?e[t]:bt()}function t5(e,t){return _n(e)?lS(e.allOf,t):or(e)?cS(e.anyOf,t):Ds(e)?dS(e.items??[],t):za(e)?fS(e.items,t):ui(e)?hS(e.properties,t):bt()}function hp(e,t){return t.map(r=>t5(e,r))}function Y1(e,t){return Ha(hp(e,t))}function gf(e,t,r){if(en(e)||en(t)){const n="Index types using Ref parameters require both Type and Key to be of TSchema";if(!Lr(e)||!Lr(t))throw new gr(n);return Kt("Index",[e,t])}return $n(t)?sS(e,t,r):xs(t)?bS(e,t,r):j(Lr(t)?Y1(e,No(t)):Y1(e,t),r)}function mS(e,t,r){return{[t]:gf(e,[t],yn(r))}}function gS(e,t,r){return t.reduce((n,i)=>({...n,...mS(e,i,r)}),{})}function pS(e,t,r){return gS(e,t.keys,r)}function bS(e,t,r){const n=pS(e,t,r);return pr(n)}function mp(e,t){return j({[_]:"Iterator",type:"Iterator",items:e},t)}function yS(e){return globalThis.Object.keys(e).filter(t=>!Fo(e[t]))}function vS(e,t){const r=yS(e),n=r.length>0?{[_]:"Object",type:"object",required:r,properties:e}:{[_]:"Object",type:"object",properties:e};return j(n,t)}var ir=vS;function r5(e,t){return j({[_]:"Promise",type:"Promise",item:e},t)}function wS(e){return j(wn(e,[Mu]))}function kS(e){return j({...e,[Mu]:"Readonly"})}function xS(e,t){return t===!1?wS(e):kS(e)}function Oo(e,t){const r=t??!0;return $n(e)?AS(e,r):xS(e,r)}function $S(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Oo(e[n],t);return r}function DS(e,t){return $S(e.properties,t)}function AS(e,t){const r=DS(e,t);return pr(r)}function Ga(e,t){return j(e.length>0?{[_]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[_]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}function n5(e,t){return e in t?Tn(e,t[e]):pr(t)}function ES(e){return{[e]:Ot(e)}}function CS(e){const t={};for(const r of e)t[r]=Ot(r);return t}function SS(e,t){return $9(t,e)?ES(e):CS(t)}function TS(e,t){const r=SS(e,t);return n5(e,r)}function bl(e,t){return t.map(r=>Tn(e,r))}function MS(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(t))r[n]=Tn(e,t[n]);return r}function Tn(e,t){const r={...t};return Fo(t)?Ro(Tn(e,wn(t,[Ji]))):Hg(t)?Oo(Tn(e,wn(t,[Mu]))):$n(t)?n5(e,t.properties):xs(t)?TS(e,t.keys):qa(t)?up(bl(e,t.parameters),Tn(e,t.returns),r):Wa(t)?Ru(bl(e,t.parameters),Tn(e,t.returns),r):rf(t)?lp(Tn(e,t.items),r):of(t)?mp(Tn(e,t.items),r):_n(t)?Bo(bl(e,t.allOf),r):or(t)?br(bl(e,t.anyOf),r):Ds(t)?Ga(bl(e,t.items??[]),r):ui(t)?ir(MS(e,t.properties),r):za(t)?ap(Tn(e,t.items),r):sf(t)?r5(Tn(e,t.item),r):t}function FS(e,t){const r={};for(const n of e)r[n]=Tn(n,t);return r}function PS(e,t,r){const n=Lr(e)?No(e):e,i=t({[_]:"MappedKey",keys:n}),o=FS(n,i);return ir(o,r)}function IS(e){return j(wn(e,[Ji]))}function NS(e){return j({...e,[Ji]:"Optional"})}function OS(e,t){return t===!1?IS(e):NS(e)}function Ro(e,t){const r=t??!0;return $n(e)?LS(e,r):OS(e,r)}function RS(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Ro(e[n],t);return r}function BS(e,t){return RS(e.properties,t)}function LS(e,t){const r=BS(e,t);return pr(r)}function mm(e,t={}){const r=e.every(i=>ui(i)),n=Lr(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return j(t.unevaluatedProperties===!1||Lr(t.unevaluatedProperties)||r?{...n,[_]:"Intersect",type:"object",allOf:e}:{...n,[_]:"Intersect",allOf:e},t)}function _S(e){return e.every(t=>Fo(t))}function jS(e){return wn(e,[Ji])}function J1(e){return e.map(t=>Fo(t)?jS(t):t)}function zS(e,t){return _S(e)?Ro(mm(J1(e),t)):mm(J1(e),t)}function i5(e,t={}){if(e.length===1)return j(e[0],t);if(e.length===0)return bt(t);if(e.some(r=>st(r)))throw new Error("Cannot intersect transform types");return zS(e,t)}function Bo(e,t){if(e.length===1)return j(e[0],t);if(e.length===0)return bt(t);if(e.some(r=>st(r)))throw new Error("Cannot intersect transform types");return mm(e,t)}function Za(...e){const[t,r]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new gr("Ref: $ref must be a string");return j({[_]:"Ref",$ref:t},r)}function US(e,t){return Kt("Awaited",[Kt(e,t)])}function qS(e){return Kt("Awaited",[Za(e)])}function WS(e){return Bo(o5(e))}function VS(e){return br(o5(e))}function KS(e){return pf(e)}function o5(e){return e.map(t=>pf(t))}function pf(e,t){return j(Ua(e)?US(e.target,e.parameters):_n(e)?WS(e.allOf):or(e)?VS(e.anyOf):sf(e)?KS(e.item):en(e)?qS(e.$ref):e,t)}function s5(e){const t=[];for(const r of e)t.push(Ts(r));return t}function HS(e){const t=s5(e);return S9(t)}function GS(e){const t=s5(e);return C9(t)}function ZS(e){return e.map((t,r)=>r.toString())}function YS(e){return["[number]"]}function JS(e){return globalThis.Object.getOwnPropertyNames(e)}function XS(e){return gm?globalThis.Object.getOwnPropertyNames(e).map(r=>r[0]==="^"&&r[r.length-1]==="$"?r.slice(1,r.length-1):r):[]}function Ts(e){return _n(e)?HS(e.allOf):or(e)?GS(e.anyOf):Ds(e)?ZS(e.items??[]):za(e)?YS(e.items):ui(e)?JS(e.properties):af(e)?XS(e.patternProperties):[]}let gm=!1;function $a(e){gm=!0;const t=Ts(e);return gm=!1,`^(${t.map(n=>`(${n})`).join("|")})$`}function QS(e,t){return Kt("KeyOf",[Kt(e,t)])}function eT(e){return Kt("KeyOf",[Za(e)])}function tT(e,t){const r=Ts(e),n=rT(r),i=Ha(n);return j(i,t)}function rT(e){return e.map(t=>t==="[number]"?Ss():Ot(t))}function gp(e,t){return Ua(e)?QS(e.target,e.parameters):en(e)?eT(e.$ref):$n(e)?oT(e,t):tT(e,t)}function nT(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=gp(e[n],yn(t));return r}function iT(e,t){return nT(e.properties,t)}function oT(e,t){const r=iT(e,t);return pr(r)}function a5(e){const t=Ts(e),r=hp(e,t);return t.map((n,i)=>[t[i],r[i]])}function sT(e){const t=[];for(const r of e)t.push(...Ts(r));return D9(t)}function aT(e){return e.filter(t=>!Pu(t))}function lT(e,t){const r=[];for(const n of e)r.push(...hp(n,[t]));return aT(r)}function uT(e,t){const r={};for(const n of t)r[n]=i5(lT(e,n));return r}function cT(e,t){const r=sT(e),n=uT(e,r);return ir(n,t)}function l5(e){return j({[_]:"Date",type:"Date"},e)}function u5(e){return j({[_]:"Null",type:"null"},e)}function pp(e){return j({[_]:"Symbol",type:"symbol"},e)}function c5(e){return j({[_]:"Undefined",type:"undefined"},e)}function d5(e){return j({[_]:"Uint8Array",type:"Uint8Array"},e)}function bf(e){return j({[_]:"Unknown"},e)}function dT(e){return e.map(t=>bp(t,!1))}function fT(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Oo(bp(e[r],!1));return t}function mc(e,t){return t===!0?e:Oo(e)}function bp(e,t){return z8(e)||q8(e)?mc(cu(),t):rn(e)?Oo(Ga(dT(e))):Tu(e)?d5():qg(e)?l5():Bt(e)?mc(ir(fT(e)),t):U8(e)?mc(Ru([],bf()),t):Pt(e)?c5():W8(e)?u5():V8(e)?pp():Ex(e)?fp():$i(e)||Su(e)||At(e)?Ot(e):ir({})}function hT(e,t){return j(bp(e,!0),t)}function mT(e,t){return qa(e)?Ga(e.parameters,t):bt(t)}function gT(e,t){if(Pt(e))throw new Error("Enum undefined or empty");const r=globalThis.Object.getOwnPropertyNames(e).filter(o=>isNaN(o)).map(o=>e[o]),i=[...new Set(r)].map(o=>Ot(o));return br(i,{...t,[tf]:"Enum"})}class pT extends gr{}var I;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(I||(I={}));function Bn(e){return e===I.False?e:I.True}function Ya(e){throw new pT(e)}function _t(e){return Io(e)||Cs(e)||Yi(e)||ii(e)||ri(e)}function jt(e,t){return Io(t)?m5():Cs(t)?yf(e,t):Yi(t)?vp(e,t):ii(t)?y5():ri(t)?yp():Ya("StructuralRight")}function yp(e,t){return I.True}function bT(e,t){return Cs(t)?yf(e,t):Yi(t)&&t.anyOf.some(r=>ri(r)||ii(r))?I.True:Yi(t)?I.Union:ii(t)||ri(t)?I.True:I.Union}function yT(e,t){return ii(e)?I.False:ri(e)?I.Union:Io(e)?I.True:I.False}function vT(e,t){return pt(t)&&vf(t)?I.True:_t(t)?jt(e,t):As(t)?Bn(Qe(e.items,t.items)):I.False}function wT(e,t){return _t(t)?jt(e,t):Xg(t)?Bn(Qe(e.items,t.items)):I.False}function kT(e,t){return _t(t)?jt(e,t):pt(t)?Mr(e,t):hr(t)?jn(e,t):lf(t)?I.True:I.False}function f5(e,t){return Vx(e)||Es(e)?I.True:I.False}function xT(e,t){return _t(t)?jt(e,t):pt(t)?Mr(e,t):hr(t)?jn(e,t):Es(t)?I.True:I.False}function $T(e,t){return _t(t)?jt(e,t):pt(t)?Mr(e,t):uf(t)?e.parameters.length>t.parameters.length?I.False:e.parameters.every((r,n)=>Bn(Qe(t.parameters[n],r))===I.True)?Bn(Qe(e.returns,t.returns)):I.False:I.False}function DT(e,t){return _t(t)?jt(e,t):pt(t)?Mr(e,t):hr(t)?jn(e,t):cf(t)?I.True:I.False}function AT(e,t){return _t(t)?jt(e,t):pt(t)?Mr(e,t):df(t)?e.parameters.length>t.parameters.length?I.False:e.parameters.every((r,n)=>Bn(Qe(t.parameters[n],r))===I.True)?Bn(Qe(e.returns,t.returns)):I.False:I.False}function h5(e,t){return Po(e)&&$i(e.const)||Qr(e)||Xi(e)?I.True:I.False}function ET(e,t){return Xi(t)||Qr(t)?I.True:_t(t)?jt(e,t):pt(t)?Mr(e,t):hr(t)?jn(e,t):I.False}function yf(e,t){return t.allOf.every(r=>Qe(e,r)===I.True)?I.True:I.False}function CT(e,t){return e.allOf.some(r=>Qe(r,t)===I.True)?I.True:I.False}function ST(e,t){return _t(t)?jt(e,t):Qg(t)?Bn(Qe(e.items,t.items)):I.False}function TT(e,t){return Po(t)&&t.const===e.const?I.True:_t(t)?jt(e,t):pt(t)?Mr(e,t):hr(t)?jn(e,t):ni(t)?b5(e):Qr(t)?g5(e):Xi(t)?h5(e):Es(t)?f5(e):I.False}function m5(e,t){return I.False}function MT(e,t){return I.True}function X1(e){let[t,r]=[e,0];for(;va(t);)t=t.not,r+=1;return r%2===0?t:bf()}function FT(e,t){return va(e)?Qe(X1(e),t):va(t)?Qe(e,X1(t)):Ya("Invalid fallthrough for Not")}function PT(e,t){return _t(t)?jt(e,t):pt(t)?Mr(e,t):hr(t)?jn(e,t):ep(t)?I.True:I.False}function g5(e,t){return Wx(e)||Qr(e)||Xi(e)?I.True:I.False}function IT(e,t){return _t(t)?jt(e,t):pt(t)?Mr(e,t):hr(t)?jn(e,t):Xi(t)||Qr(t)?I.True:I.False}function tn(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function Q1(e){return vf(e)}function ev(e){return tn(e,0)||tn(e,1)&&"description"in e.properties&&Yi(e.properties.description)&&e.properties.description.anyOf.length===2&&(ni(e.properties.description.anyOf[0])&&hs(e.properties.description.anyOf[1])||ni(e.properties.description.anyOf[1])&&hs(e.properties.description.anyOf[0]))}function Wh(e){return tn(e,0)}function tv(e){return tn(e,0)}function NT(e){return tn(e,0)}function OT(e){return tn(e,0)}function RT(e){return vf(e)}function BT(e){const t=Ss();return tn(e,0)||tn(e,1)&&"length"in e.properties&&Bn(Qe(e.properties.length,t))===I.True}function LT(e){return tn(e,0)}function vf(e){const t=Ss();return tn(e,0)||tn(e,1)&&"length"in e.properties&&Bn(Qe(e.properties.length,t))===I.True}function _T(e){const t=Ru([cu()],cu());return tn(e,0)||tn(e,1)&&"then"in e.properties&&Bn(Qe(e.properties.then,t))===I.True}function p5(e,t){return Qe(e,t)===I.False||fd(e)&&!fd(t)?I.False:I.True}function Mr(e,t){return ii(e)?I.False:ri(e)?I.Union:Io(e)||qx(e)&&Q1(t)||Wx(e)&&Wh(t)||Vx(e)&&tv(t)||lu(e)&&ev(t)||lf(e)&&NT(t)||ni(e)&&Q1(t)||lu(e)&&ev(t)||Qr(e)&&Wh(t)||Xi(e)&&Wh(t)||Es(e)&&tv(t)||Ou(e)&&RT(t)||cf(e)&&OT(t)||uf(e)&&LT(t)||df(e)&&BT(t)?I.True:hr(e)&&ni(pm(e))?t[tf]==="Record"?I.True:I.False:hr(e)&&Qr(pm(e))&&tn(t,0)?I.True:I.False}function jT(e,t){return _t(t)?jt(e,t):hr(t)?jn(e,t):pt(t)?(()=>{for(const r of Object.getOwnPropertyNames(t.properties)){if(!(r in e.properties)&&!fd(t.properties[r]))return I.False;if(fd(t.properties[r]))return I.True;if(p5(e.properties[r],t.properties[r])===I.False)return I.False}return I.True})():I.False}function zT(e,t){return _t(t)?jt(e,t):pt(t)&&_T(t)?I.True:tp(t)?Bn(Qe(e.item,t.item)):I.False}function pm(e){return wa in e.patternProperties?Ss():ka in e.patternProperties?ms():Ya("Unknown record key pattern")}function bm(e){return wa in e.patternProperties?e.patternProperties[wa]:ka in e.patternProperties?e.patternProperties[ka]:Ya("Unable to get record value schema")}function jn(e,t){const[r,n]=[pm(t),bm(t)];return qx(e)&&Qr(r)&&Bn(Qe(e,n))===I.True?I.True:Ou(e)&&Qr(r)||ni(e)&&Qr(r)||As(e)&&Qr(r)?Qe(e,n):pt(e)?(()=>{for(const i of Object.getOwnPropertyNames(e.properties))if(p5(n,e.properties[i])===I.False)return I.False;return I.True})():I.False}function UT(e,t){return _t(t)?jt(e,t):pt(t)?Mr(e,t):hr(t)?Qe(bm(e),bm(t)):I.False}function qT(e,t){const r=au(e)?ms():e,n=au(t)?ms():t;return Qe(r,n)}function b5(e,t){return Po(e)&&At(e.const)||ni(e)?I.True:I.False}function WT(e,t){return _t(t)?jt(e,t):pt(t)?Mr(e,t):hr(t)?jn(e,t):ni(t)?I.True:I.False}function VT(e,t){return _t(t)?jt(e,t):pt(t)?Mr(e,t):hr(t)?jn(e,t):lu(t)?I.True:I.False}function KT(e,t){return uu(e)?Qe(hd(e),t):uu(t)?Qe(e,hd(t)):Ya("Invalid fallthrough for TemplateLiteral")}function HT(e,t){return As(t)&&e.items!==void 0&&e.items.every(r=>Qe(r,t.items)===I.True)}function GT(e,t){return Io(e)?I.True:ii(e)?I.False:ri(e)?I.Union:I.False}function ZT(e,t){return _t(t)?jt(e,t):pt(t)&&vf(t)||As(t)&&HT(e,t)?I.True:ff(t)?Pt(e.items)&&!Pt(t.items)||!Pt(e.items)&&Pt(t.items)?I.False:Pt(e.items)&&!Pt(t.items)||e.items.every((r,n)=>Qe(r,t.items[n])===I.True)?I.True:I.False:I.False}function YT(e,t){return _t(t)?jt(e,t):pt(t)?Mr(e,t):hr(t)?jn(e,t):Ou(t)?I.True:I.False}function JT(e,t){return _t(t)?jt(e,t):pt(t)?Mr(e,t):hr(t)?jn(e,t):hf(t)?eM(e):hs(t)?I.True:I.False}function vp(e,t){return t.anyOf.some(r=>Qe(e,r)===I.True)?I.True:I.False}function XT(e,t){return e.anyOf.every(r=>Qe(r,t)===I.True)?I.True:I.False}function y5(e,t){return I.True}function QT(e,t){return Io(t)?m5():Cs(t)?yf(e,t):Yi(t)?vp(e,t):ri(t)?yp():ni(t)?b5(e):Qr(t)?g5(e):Xi(t)?h5(e):Es(t)?f5(e):As(t)?yT(e):ff(t)?GT(e):pt(t)?Mr(e,t):ii(t)?I.True:I.False}function eM(e,t){return hs(e)||hs(e)?I.True:I.False}function tM(e,t){return Cs(t)?yf(e,t):Yi(t)?vp(e,t):ii(t)?y5():ri(t)?yp():pt(t)?Mr(e,t):hf(t)?I.True:I.False}function Qe(e,t){return uu(e)||uu(t)?KT(e,t):au(e)||au(t)?qT(e,t):va(e)||va(t)?FT(e,t):ri(e)?bT(e,t):As(e)?vT(e,t):lf(e)?kT(e,t):Es(e)?xT(e,t):Xg(e)?wT(e,t):uf(e)?$T(e,t):cf(e)?DT(e,t):df(e)?AT(e,t):Xi(e)?ET(e,t):Cs(e)?CT(e,t):Qg(e)?ST(e,t):Po(e)?TT(e,t):Io(e)?MT():ep(e)?PT(e,t):Qr(e)?IT(e,t):pt(e)?jT(e,t):hr(e)?UT(e,t):ni(e)?WT(e,t):lu(e)?VT(e,t):ff(e)?ZT(e,t):tp(e)?zT(e,t):Ou(e)?YT(e,t):hs(e)?JT(e,t):Yi(e)?XT(e,t):ii(e)?QT(e,t):hf(e)?tM(e,t):Ya(`Unknown left type operand '${e[_]}'`)}function Bu(e,t){return Qe(e,t)}function rM(e,t,r,n,i){const o={};for(const s of globalThis.Object.getOwnPropertyNames(e))o[s]=wp(e[s],t,r,n,yn(i));return o}function nM(e,t,r,n,i){return rM(e.properties,t,r,n,i)}function iM(e,t,r,n,i){const o=nM(e,t,r,n,i);return pr(o)}function oM(e,t,r,n){const i=Bu(e,t);return i===I.Union?br([r,n]):i===I.True?r:n}function wp(e,t,r,n,i){return $n(e)?iM(e,t,r,n,i):xs(e)?j(uM(e,t,r,n,i)):j(oM(e,t,r,n),i)}function sM(e,t,r,n,i){return{[e]:wp(Ot(e),t,r,n,yn(i))}}function aM(e,t,r,n,i){return e.reduce((o,s)=>({...o,...sM(s,t,r,n,i)}),{})}function lM(e,t,r,n,i){return aM(e.keys,t,r,n,i)}function uM(e,t,r,n,i){const o=lM(e,t,r,n,i);return pr(o)}function cM(e){return e.allOf.every(t=>Ja(t))}function dM(e){return e.anyOf.some(t=>Ja(t))}function fM(e){return!Ja(e.not)}function Ja(e){return e[_]==="Intersect"?cM(e):e[_]==="Union"?dM(e):e[_]==="Not"?fM(e):e[_]==="Undefined"}function hM(e,t){return kp(hd(e),t)}function mM(e,t){const r=e.filter(n=>Bu(n,t)===I.False);return r.length===1?r[0]:br(r)}function kp(e,t,r={}){return $s(e)?j(hM(e,t),r):$n(e)?j(bM(e,t),r):j(or(e)?mM(e.anyOf,t):Bu(e,t)!==I.False?bt():e,r)}function gM(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=kp(e[n],t);return r}function pM(e,t){return gM(e.properties,t)}function bM(e,t){const r=pM(e,t);return pr(r)}function yM(e,t){return xp(hd(e),t)}function vM(e,t){const r=e.filter(n=>Bu(n,t)!==I.False);return r.length===1?r[0]:br(r)}function xp(e,t,r){return $s(e)?j(yM(e,t),r):$n(e)?j(xM(e,t),r):j(or(e)?vM(e.anyOf,t):Bu(e,t)!==I.False?e:bt(),r)}function wM(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=xp(e[n],t);return r}function kM(e,t){return wM(e.properties,t)}function xM(e,t){const r=kM(e,t);return pr(r)}function $M(e,t){return qa(e)?j(e.returns,t):bt(t)}function v5(e){return Oo(Ro(e))}function Ms(e,t,r){return j({[_]:"Record",type:"object",patternProperties:{[e]:t}},r)}function $p(e,t,r){const n={};for(const i of e)n[i]=t;return ir(n,{...r,[tf]:"Record"})}function DM(e,t,r){return V9(e)?$p(No(e),t,r):Ms(e.pattern,t,r)}function AM(e,t,r){return $p(No(br(e)),t,r)}function EM(e,t,r){return $p([e.toString()],t,r)}function CM(e,t,r){return Ms(e.source,t,r)}function SM(e,t,r){const n=Pt(e.pattern)?ka:e.pattern;return Ms(n,t,r)}function TM(e,t,r){return Ms(ka,t,r)}function MM(e,t,r){return Ms(x9,t,r)}function FM(e,t,r){return ir({true:t,false:t},r)}function PM(e,t,r){return Ms(wa,t,r)}function IM(e,t,r){return Ms(wa,t,r)}function w5(e,t,r={}){return or(e)?AM(e.anyOf,t,r):$s(e)?DM(e,t,r):ks(e)?EM(e.const,t,r):Fu(e)?FM(e,t,r):Va(e)?PM(e,t,r):Ka(e)?IM(e,t,r):Lx(e)?CM(e,t,r):Iu(e)?SM(e,t,r):Ox(e)?TM(e,t,r):Pu(e)?MM(e,t,r):bt(r)}function Dp(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function NM(e){const t=Dp(e);return t===ka?ms():t===wa?Ss():ms({pattern:t})}function k5(e){return e.patternProperties[Dp(e)]}function OM(e,t){return t.parameters=Lu(e,t.parameters),t.returns=oi(e,t.returns),t}function RM(e,t){return t.parameters=Lu(e,t.parameters),t.returns=oi(e,t.returns),t}function BM(e,t){return t.allOf=Lu(e,t.allOf),t}function LM(e,t){return t.anyOf=Lu(e,t.anyOf),t}function _M(e,t){return Pt(t.items)||(t.items=Lu(e,t.items)),t}function jM(e,t){return t.items=oi(e,t.items),t}function zM(e,t){return t.items=oi(e,t.items),t}function UM(e,t){return t.items=oi(e,t.items),t}function qM(e,t){return t.item=oi(e,t.item),t}function WM(e,t){const r=GM(e,t.properties);return{...t,...ir(r)}}function VM(e,t){const r=oi(e,NM(t)),n=oi(e,k5(t)),i=w5(r,n);return{...t,...i}}function KM(e,t){return t.index in e?e[t.index]:bf()}function HM(e,t){const r=Hg(t),n=Fo(t),i=oi(e,t);return r&&n?v5(i):r&&!n?Oo(i):!r&&n?Ro(i):i}function GM(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:HM(e,t[n])}),{})}function Lu(e,t){return t.map(r=>oi(e,r))}function oi(e,t){return qa(t)?OM(e,t):Wa(t)?RM(e,t):_n(t)?BM(e,t):or(t)?LM(e,t):Ds(t)?_M(e,t):za(t)?jM(e,t):rf(t)?zM(e,t):of(t)?UM(e,t):sf(t)?qM(e,t):ui(t)?WM(e,t):af(t)?VM(e,t):Rx(t)?KM(e,t):t}function ZM(e,t){return oi(t,Wg(e))}function YM(e){return j({[_]:"Integer",type:"integer"},e)}function JM(e,t,r){return{[e]:Xa(Ot(e),t,yn(r))}}function XM(e,t,r){return e.reduce((i,o)=>({...i,...JM(o,t,r)}),{})}function QM(e,t,r){return XM(e.keys,t,r)}function e7(e,t,r){const n=QM(e,t,r);return pr(n)}function t7(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),r].join("")}function r7(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),r].join("")}function n7(e){return e.toUpperCase()}function i7(e){return e.toLowerCase()}function o7(e,t,r){const n=dp(e.pattern);if(!fu(n))return{...e,pattern:x5(e.pattern,t)};const s=[...mf(n)].map(u=>Ot(u)),a=$5(s,t),l=br(a);return Qx([l],r)}function x5(e,t){return typeof e=="string"?t==="Uncapitalize"?t7(e):t==="Capitalize"?r7(e):t==="Uppercase"?n7(e):t==="Lowercase"?i7(e):e:e.toString()}function $5(e,t){return e.map(r=>Xa(r,t))}function Xa(e,t,r={}){return xs(e)?e7(e,t,r):$s(e)?o7(e,t,r):or(e)?br($5(e.anyOf,t),r):ks(e)?Ot(x5(e.const,t),r):j(e,r)}function s7(e,t={}){return Xa(e,"Capitalize",t)}function a7(e,t={}){return Xa(e,"Lowercase",t)}function l7(e,t={}){return Xa(e,"Uncapitalize",t)}function u7(e,t={}){return Xa(e,"Uppercase",t)}function c7(e,t,r){const n={};for(const i of globalThis.Object.getOwnPropertyNames(e))n[i]=wf(e[i],t,yn(r));return n}function d7(e,t,r){return c7(e.properties,t,r)}function f7(e,t,r){const n=d7(e,t,r);return pr(n)}function h7(e,t){return e.map(r=>Ap(r,t))}function m7(e,t){return e.map(r=>Ap(r,t))}function g7(e,t){const{[t]:r,...n}=e;return n}function p7(e,t){return t.reduce((r,n)=>g7(r,n),e)}function b7(e,t,r){const n=wn(e,[Xr,"$id","required","properties"]),i=p7(r,t);return ir(i,n)}function y7(e){const t=e.reduce((r,n)=>Bx(n)?[...r,Ot(n)]:r,[]);return br(t)}function Ap(e,t){return _n(e)?Bo(h7(e.allOf,t)):or(e)?br(m7(e.anyOf,t)):ui(e)?b7(e,t,e.properties):ir({})}function wf(e,t,r){const n=rn(t)?y7(t):t,i=Lr(t)?No(t):t,o=en(e),s=en(t);return $n(e)?f7(e,i,r):xs(t)?x7(e,t,r):o&&s?Kt("Omit",[e,n],r):!o&&s?Kt("Omit",[e,n],r):o&&!s?Kt("Omit",[e,n],r):j({...Ap(e,i),...r})}function v7(e,t,r){return{[t]:wf(e,[t],yn(r))}}function w7(e,t,r){return t.reduce((n,i)=>({...n,...v7(e,i,r)}),{})}function k7(e,t,r){return w7(e,t.keys,r)}function x7(e,t,r){const n=k7(e,t,r);return pr(n)}function $7(e,t,r){const n={};for(const i of globalThis.Object.getOwnPropertyNames(e))n[i]=kf(e[i],t,yn(r));return n}function D7(e,t,r){return $7(e.properties,t,r)}function A7(e,t,r){const n=D7(e,t,r);return pr(n)}function E7(e,t){return e.map(r=>Ep(r,t))}function C7(e,t){return e.map(r=>Ep(r,t))}function S7(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function T7(e,t,r){const n=wn(e,[Xr,"$id","required","properties"]),i=S7(r,t);return ir(i,n)}function M7(e){const t=e.reduce((r,n)=>Bx(n)?[...r,Ot(n)]:r,[]);return br(t)}function Ep(e,t){return _n(e)?Bo(E7(e.allOf,t)):or(e)?br(C7(e.anyOf,t)):ui(e)?T7(e,t,e.properties):ir({})}function kf(e,t,r){const n=rn(t)?M7(t):t,i=Lr(t)?No(t):t,o=en(e),s=en(t);return $n(e)?A7(e,i,r):xs(t)?N7(e,t,r):o&&s?Kt("Pick",[e,n],r):!o&&s?Kt("Pick",[e,n],r):o&&!s?Kt("Pick",[e,n],r):j({...Ep(e,i),...r})}function F7(e,t,r){return{[t]:kf(e,[t],yn(r))}}function P7(e,t,r){return t.reduce((n,i)=>({...n,...F7(e,i,r)}),{})}function I7(e,t,r){return P7(e,t.keys,r)}function N7(e,t,r){const n=I7(e,t,r);return pr(n)}function O7(e,t){return Kt("Partial",[Kt(e,t)])}function R7(e){return Kt("Partial",[Za(e)])}function B7(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Ro(e[r]);return t}function L7(e,t){const r=wn(e,[Xr,"$id","required","properties"]),n=B7(t);return ir(n,r)}function rv(e){return e.map(t=>D5(t))}function D5(e){return Ua(e)?O7(e.target,e.parameters):en(e)?R7(e.$ref):_n(e)?Bo(rv(e.allOf)):or(e)?br(rv(e.anyOf)):ui(e)?L7(e,e.properties):nf(e)||Fu(e)||Va(e)||ks(e)||Gg(e)||Ka(e)||Iu(e)||Zg(e)||Nu(e)?e:ir({})}function Cp(e,t){return $n(e)?z7(e,t):j({...D5(e),...t})}function _7(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Cp(e[n],yn(t));return r}function j7(e,t){return _7(e.properties,t)}function z7(e,t){const r=j7(e,t);return pr(r)}function U7(e,t){return Kt("Required",[Kt(e,t)])}function q7(e){return Kt("Required",[Za(e)])}function W7(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=wn(e[r],[Ji]);return t}function V7(e,t){const r=wn(e,[Xr,"$id","required","properties"]),n=W7(t);return ir(n,r)}function nv(e){return e.map(t=>A5(t))}function A5(e){return Ua(e)?U7(e.target,e.parameters):en(e)?q7(e.$ref):_n(e)?Bo(nv(e.allOf)):or(e)?br(nv(e.anyOf)):ui(e)?V7(e,e.properties):nf(e)||Fu(e)||Va(e)||ks(e)||Gg(e)||Ka(e)||Iu(e)||Zg(e)||Nu(e)?e:ir({})}function Sp(e,t){return $n(e)?G7(e,t):j({...A5(e),...t})}function K7(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Sp(e[n],t);return r}function H7(e,t){return K7(e.properties,t)}function G7(e,t){const r=H7(e,t);return pr(r)}function Z7(e,t){return t.map(r=>en(r)?Tp(e,r.$ref):kn(e,r))}function Tp(e,t){return t in e?en(e[t])?Tp(e,e[t].$ref):kn(e,e[t]):bt()}function Y7(e){return pf(e[0])}function J7(e){return gf(e[0],e[1])}function X7(e){return gp(e[0])}function Q7(e){return Cp(e[0])}function eF(e){return wf(e[0],e[1])}function tF(e){return kf(e[0],e[1])}function rF(e){return Sp(e[0])}function nF(e,t,r){const n=Z7(e,r);return t==="Awaited"?Y7(n):t==="Index"?J7(n):t==="KeyOf"?X7(n):t==="Partial"?Q7(n):t==="Omit"?eF(n):t==="Pick"?tF(n):t==="Required"?rF(n):bt()}function iF(e,t){return ap(kn(e,t))}function oF(e,t){return lp(kn(e,t))}function sF(e,t,r){return up(_u(e,t),kn(e,r))}function aF(e,t,r){return Ru(_u(e,t),kn(e,r))}function lF(e,t){return Bo(_u(e,t))}function uF(e,t){return mp(kn(e,t))}function cF(e,t){return ir(globalThis.Object.keys(t).reduce((r,n)=>({...r,[n]:kn(e,t[n])}),{}))}function dF(e,t){const[r,n]=[kn(e,k5(t)),Dp(t)],i=Wg(t);return i.patternProperties[n]=r,i}function fF(e,t){return en(t)?{...Tp(e,t.$ref),[Xr]:t[Xr]}:t}function hF(e,t){return Ga(_u(e,t))}function mF(e,t){return br(_u(e,t))}function _u(e,t){return t.map(r=>kn(e,r))}function kn(e,t){return Fo(t)?j(kn(e,wn(t,[Ji])),t):Hg(t)?j(kn(e,wn(t,[Mu])),t):st(t)?j(fF(e,t),t):za(t)?j(iF(e,t.items),t):rf(t)?j(oF(e,t.items),t):Ua(t)?j(nF(e,t.target,t.parameters)):qa(t)?j(sF(e,t.parameters,t.returns),t):Wa(t)?j(aF(e,t.parameters,t.returns),t):_n(t)?j(lF(e,t.allOf),t):of(t)?j(uF(e,t.items),t):ui(t)?j(cF(e,t.properties),t):af(t)?j(dF(e,t)):Ds(t)?j(hF(e,t.items||[]),t):or(t)?j(mF(e,t.anyOf),t):t}function gF(e,t){return t in e?kn(e,e[t]):bt()}function pF(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,r)=>({...t,[r]:gF(e,r)}),{})}class bF{constructor(t){const r=pF(t),n=this.WithIdentifiers(r);this.$defs=n}Import(t,r){const n={...this.$defs,[t]:j(this.$defs[t],r)};return j({[_]:"Import",$defs:n,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:{...t[n],$id:n}}),{})}}function yF(e){return new bF(e)}function vF(e,t){return j({[_]:"Not",not:e},t)}function wF(e,t){return Wa(e)?Ga(e.parameters,t):bt()}let kF=0;function xF(e,t={}){Pt(t.$id)&&(t.$id=`T${kF++}`);const r=Wg(e({[_]:"This",$ref:`${t.$id}`}));return r.$id=t.$id,j({[tf]:"Recursive",...r},t)}function $F(e,t){const r=At(e)?new globalThis.RegExp(e):e;return j({[_]:"RegExp",type:"RegExp",source:r.source,flags:r.flags},t)}function DF(e){return _n(e)?e.allOf:or(e)?e.anyOf:Ds(e)?e.items??[]:[]}function AF(e){return DF(e)}function EF(e,t){return Wa(e)?j(e.returns,t):bt(t)}class CF{constructor(t){this.schema=t}Decode(t){return new SF(this.schema,t)}}class SF{constructor(t,r){this.schema=t,this.decode=r}EncodeTransform(t,r){const o={Encode:s=>r[Xr].Encode(t(s)),Decode:s=>this.decode(r[Xr].Decode(s))};return{...r,[Xr]:o}}EncodeSchema(t,r){const n={Decode:this.decode,Encode:t};return{...r,[Xr]:n}}Encode(t){return st(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function TF(e){return new CF(e)}function MF(e={}){return j({[_]:e[_]??"Unsafe"},e)}function FF(e){return j({[_]:"Void",type:"void"},e)}const PF=Object.freeze(Object.defineProperty({__proto__:null,Any:cu,Argument:T9,Array:ap,AsyncIterator:lp,Awaited:pf,BigInt:fp,Boolean:Jx,Capitalize:s7,Composite:cT,Const:hT,Constructor:up,ConstructorParameters:mT,Date:l5,Enum:gT,Exclude:kp,Extends:wp,Extract:xp,Function:Ru,Index:gf,InstanceType:$M,Instantiate:ZM,Integer:YM,Intersect:Bo,Iterator:mp,KeyOf:gp,Literal:Ot,Lowercase:a7,Mapped:PS,Module:yF,Never:bt,Not:vF,Null:u5,Number:Ss,Object:ir,Omit:wf,Optional:Ro,Parameters:wF,Partial:Cp,Pick:kf,Promise:r5,Readonly:Oo,ReadonlyOptional:v5,Record:w5,Recursive:xF,Ref:Za,RegExp:$F,Required:Sp,Rest:AF,ReturnType:EF,String:ms,Symbol:pp,TemplateLiteral:Qx,Transform:TF,Tuple:Ga,Uint8Array:d5,Uncapitalize:l7,Undefined:c5,Union:br,Unknown:bf,Unsafe:MF,Uppercase:u7,Void:FF},Symbol.toStringTag,{value:"Module"})),rt=PF;function E5(e){switch(e.errorType){case M.ArrayContains:return"Expected array to contain at least one matching value";case M.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case M.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case M.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case M.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case M.ArrayUniqueItems:return"Expected array elements to be unique";case M.Array:return"Expected array";case M.AsyncIterator:return"Expected AsyncIterator";case M.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case M.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case M.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case M.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case M.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case M.BigInt:return"Expected bigint";case M.Boolean:return"Expected boolean";case M.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case M.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case M.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case M.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case M.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case M.Date:return"Expected Date";case M.Function:return"Expected function";case M.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case M.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case M.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case M.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case M.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case M.Integer:return"Expected integer";case M.IntersectUnevaluatedProperties:return"Unexpected property";case M.Intersect:return"Expected all values to match";case M.Iterator:return"Expected Iterator";case M.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case M.Never:return"Never";case M.Not:return"Value should not match";case M.Null:return"Expected null";case M.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case M.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case M.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case M.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case M.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case M.Number:return"Expected number";case M.Object:return"Expected object";case M.ObjectAdditionalProperties:return"Unexpected property";case M.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case M.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case M.ObjectRequiredProperty:return"Expected required property";case M.Promise:return"Expected Promise";case M.RegExp:return"Expected string to match regular expression";case M.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case M.StringFormat:return`Expected string to match '${e.schema.format}' format`;case M.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case M.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case M.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case M.String:return"Expected string";case M.Symbol:return"Expected symbol";case M.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case M.Tuple:return"Expected tuple";case M.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case M.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case M.Uint8Array:return"Expected Uint8Array";case M.Undefined:return"Expected undefined";case M.Union:return"Expected union value";case M.Void:return"Expected void";case M.Kind:return`Expected kind '${e.schema[_]}'`;default:return"Unknown error type"}}let C5=E5;function IF(e){C5=e}function NF(){return C5}class OF extends gr{constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function RF(e,t){const r=t.find(n=>n.$id===e.$ref);if(r===void 0)throw new OF(e);return zn(r,t)}function xf(e,t){return!hn(e.$id)||t.some(r=>r.$id===e.$id)||t.push(e),t}function zn(e,t){return e[_]==="This"||e[_]==="Ref"?RF(e,t):e}class BF extends gr{constructor(t){super("Unable to hash value"),this.value=t}}var xn;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(xn||(xn={}));let Js=BigInt("14695981039346656037");const[LF,_F]=[BigInt("1099511628211"),BigInt("18446744073709551616")],jF=Array.from({length:256}).map((e,t)=>BigInt(t)),S5=new Float64Array(1),T5=new DataView(S5.buffer),M5=new Uint8Array(S5.buffer);function*zF(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let r=0;r<t;r++)yield e>>8*(t-1-r)&255}function UF(e){Sr(xn.Array);for(const t of e)Da(t)}function qF(e){Sr(xn.Boolean),Sr(e?1:0)}function WF(e){Sr(xn.BigInt),T5.setBigInt64(0,e);for(const t of M5)Sr(t)}function VF(e){Sr(xn.Date),Da(e.getTime())}function KF(e){Sr(xn.Null)}function HF(e){Sr(xn.Number),T5.setFloat64(0,e);for(const t of M5)Sr(t)}function GF(e){Sr(xn.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())Da(t),Da(e[t])}function ZF(e){Sr(xn.String);for(let t=0;t<e.length;t++)for(const r of zF(e.charCodeAt(t)))Sr(r)}function YF(e){Sr(xn.Symbol),Da(e.description)}function JF(e){Sr(xn.Uint8Array);for(let t=0;t<e.length;t++)Sr(e[t])}function XF(e){return Sr(xn.Undefined)}function Da(e){if(vn(e))return UF(e);if(Qd(e))return qF(e);if(ji(e))return WF(e);if(Vg(e))return VF(e);if(Xd(e))return KF();if(Ae(e))return HF(e);if(Di(e))return GF(e);if(hn(e))return ZF(e);if(ef(e))return YF(e);if(Kg(e))return JF(e);if(Mo(e))return XF();throw new BF(e)}function Sr(e){Js=Js^jF[e],Js=Js*LF%_F}function Mp(e){return Js=BigInt("14695981039346656037"),Da(e),Js}class QF extends gr{constructor(t){super("Unknown type"),this.schema=t}}function eP(e){return e[_]==="Any"||e[_]==="Unknown"}function Pe(e){return e!==void 0}function tP(e,t,r){return!0}function rP(e,t,r){return!0}function nP(e,t,r){if(!vn(r)||Pe(e.minItems)&&!(r.length>=e.minItems)||Pe(e.maxItems)&&!(r.length<=e.maxItems))return!1;for(const o of r)if(!tr(e.items,t,o))return!1;if(e.uniqueItems===!0&&!(function(){const o=new Set;for(const s of r){const a=Mp(s);if(o.has(a))return!1;o.add(a)}return!0})())return!1;if(!(Pe(e.contains)||Ae(e.minContains)||Ae(e.maxContains)))return!0;const n=Pe(e.contains)?e.contains:bt(),i=r.reduce((o,s)=>tr(n,t,s)?o+1:o,0);return!(i===0||Ae(e.minContains)&&i<e.minContains||Ae(e.maxContains)&&i>e.maxContains)}function iP(e,t,r){return Sx(r)}function oP(e,t,r){return!(!ji(r)||Pe(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||Pe(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||Pe(e.maximum)&&!(r<=e.maximum)||Pe(e.minimum)&&!(r>=e.minimum)||Pe(e.multipleOf)&&r%e.multipleOf!==BigInt(0))}function sP(e,t,r){return Qd(r)}function aP(e,t,r){return tr(e.returns,t,r.prototype)}function lP(e,t,r){return!(!Vg(r)||Pe(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)||Pe(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)||Pe(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)||Pe(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)||Pe(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0)}function uP(e,t,r){return Ix(r)}function cP(e,t,r){const n=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];return tr(i,[...t,...n],r)}function dP(e,t,r){return!(!Px(r)||Pe(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||Pe(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||Pe(e.maximum)&&!(r<=e.maximum)||Pe(e.minimum)&&!(r>=e.minimum)||Pe(e.multipleOf)&&r%e.multipleOf!==0)}function fP(e,t,r){const n=e.allOf.every(i=>tr(i,t,r));if(e.unevaluatedProperties===!1){const i=new RegExp($a(e)),o=Object.getOwnPropertyNames(r).every(s=>i.test(s));return n&&o}else if(Lr(e.unevaluatedProperties)){const i=new RegExp($a(e)),o=Object.getOwnPropertyNames(r).every(s=>i.test(s)||tr(e.unevaluatedProperties,t,r[s]));return n&&o}else return n}function hP(e,t,r){return Tx(r)}function mP(e,t,r){return r===e.const}function gP(e,t,r){return!1}function pP(e,t,r){return!tr(e.not,t,r)}function bP(e,t,r){return Xd(r)}function yP(e,t,r){return!(!Dt.IsNumberLike(r)||Pe(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||Pe(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||Pe(e.minimum)&&!(r>=e.minimum)||Pe(e.maximum)&&!(r<=e.maximum)||Pe(e.multipleOf)&&r%e.multipleOf!==0)}function vP(e,t,r){if(!Dt.IsObjectLike(r)||Pe(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||Pe(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const n=Object.getOwnPropertyNames(e.properties);for(const i of n){const o=e.properties[i];if(e.required&&e.required.includes(i)){if(!tr(o,t,r[i])||(Ja(o)||eP(o))&&!(i in r))return!1}else if(Dt.IsExactOptionalProperty(r,i)&&!tr(o,t,r[i]))return!1}if(e.additionalProperties===!1){const i=Object.getOwnPropertyNames(r);return e.required&&e.required.length===n.length&&i.length===n.length?!0:i.every(o=>n.includes(o))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(r).every(o=>n.includes(o)||tr(e.additionalProperties,t,r[o])):!0}function wP(e,t,r){return Mx(r)}function kP(e,t,r){if(!Dt.IsRecordLike(r)||Pe(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||Pe(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const[n,i]=Object.entries(e.patternProperties)[0],o=new RegExp(n),s=Object.entries(r).every(([u,d])=>o.test(u)?tr(i,t,d):!0),a=typeof e.additionalProperties=="object"?Object.entries(r).every(([u,d])=>o.test(u)?!0:tr(e.additionalProperties,t,d)):!0,l=e.additionalProperties===!1?Object.getOwnPropertyNames(r).every(u=>o.test(u)):!0;return s&&a&&l}function xP(e,t,r){return tr(zn(e,t),t,r)}function $P(e,t,r){const n=new RegExp(e.source,e.flags);return Pe(e.minLength)&&!(r.length>=e.minLength)||Pe(e.maxLength)&&!(r.length<=e.maxLength)?!1:n.test(r)}function DP(e,t,r){return!hn(r)||Pe(e.minLength)&&!(r.length>=e.minLength)||Pe(e.maxLength)&&!(r.length<=e.maxLength)||Pe(e.pattern)&&!new RegExp(e.pattern).test(r)?!1:Pe(e.format)?rp(e.format)?np(e.format)(r):!1:!0}function AP(e,t,r){return ef(r)}function EP(e,t,r){return hn(r)&&new RegExp(e.pattern).test(r)}function CP(e,t,r){return tr(zn(e,t),t,r)}function SP(e,t,r){if(!vn(r)||e.items===void 0&&r.length!==0||r.length!==e.maxItems)return!1;if(!e.items)return!0;for(let n=0;n<e.items.length;n++)if(!tr(e.items[n],t,r[n]))return!1;return!0}function TP(e,t,r){return Mo(r)}function MP(e,t,r){return e.anyOf.some(n=>tr(n,t,r))}function FP(e,t,r){return!(!Kg(r)||Pe(e.maxByteLength)&&!(r.length<=e.maxByteLength)||Pe(e.minByteLength)&&!(r.length>=e.minByteLength))}function PP(e,t,r){return!0}function IP(e,t,r){return Dt.IsVoidLike(r)}function NP(e,t,r){return Ao(e[_])?sp(e[_])(e,r):!1}function tr(e,t,r){const n=Pe(e.$id)?xf(e,t):t,i=e;switch(i[_]){case"Any":return tP();case"Argument":return rP();case"Array":return nP(i,n,r);case"AsyncIterator":return iP(i,n,r);case"BigInt":return oP(i,n,r);case"Boolean":return sP(i,n,r);case"Constructor":return aP(i,n,r);case"Date":return lP(i,n,r);case"Function":return uP(i,n,r);case"Import":return cP(i,n,r);case"Integer":return dP(i,n,r);case"Intersect":return fP(i,n,r);case"Iterator":return hP(i,n,r);case"Literal":return mP(i,n,r);case"Never":return gP();case"Not":return pP(i,n,r);case"Null":return bP(i,n,r);case"Number":return yP(i,n,r);case"Object":return vP(i,n,r);case"Promise":return wP(i,n,r);case"Record":return kP(i,n,r);case"Ref":return xP(i,n,r);case"RegExp":return $P(i,n,r);case"String":return DP(i,n,r);case"Symbol":return AP(i,n,r);case"TemplateLiteral":return EP(i,n,r);case"This":return CP(i,n,r);case"Tuple":return SP(i,n,r);case"Undefined":return TP(i,n,r);case"Union":return MP(i,n,r);case"Uint8Array":return FP(i,n,r);case"Unknown":return PP();case"Void":return IP(i,n,r);default:if(!Ao(i[_]))throw new QF(i);return NP(i,n,r)}}function md(...e){return e.length===3?tr(e[0],e[1],e[2]):tr(e[0],[],e[1])}var M;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})(M||(M={}));class OP extends gr{constructor(t){super("Unknown type"),this.schema=t}}function Bi(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function Fe(e){return e!==void 0}class F5{constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function W(e,t,r,n,i=[]){return{type:e,schema:t,path:r,value:n,message:NF()({errorType:e,path:r,schema:t,value:n,errors:i}),errors:i}}function*RP(e,t,r,n){}function*BP(e,t,r,n){}function*LP(e,t,r,n){if(!vn(n))return yield W(M.Array,e,r,n);Fe(e.minItems)&&!(n.length>=e.minItems)&&(yield W(M.ArrayMinItems,e,r,n)),Fe(e.maxItems)&&!(n.length<=e.maxItems)&&(yield W(M.ArrayMaxItems,e,r,n));for(let s=0;s<n.length;s++)yield*rr(e.items,t,`${r}/${s}`,n[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const a of n){const l=Mp(a);if(s.has(l))return!1;s.add(l)}return!0})()&&(yield W(M.ArrayUniqueItems,e,r,n)),!(Fe(e.contains)||Fe(e.minContains)||Fe(e.maxContains)))return;const i=Fe(e.contains)?e.contains:bt(),o=n.reduce((s,a,l)=>rr(i,t,`${r}${l}`,a).next().done===!0?s+1:s,0);o===0&&(yield W(M.ArrayContains,e,r,n)),Ae(e.minContains)&&o<e.minContains&&(yield W(M.ArrayMinContains,e,r,n)),Ae(e.maxContains)&&o>e.maxContains&&(yield W(M.ArrayMaxContains,e,r,n))}function*_P(e,t,r,n){Sx(n)||(yield W(M.AsyncIterator,e,r,n))}function*jP(e,t,r,n){if(!ji(n))return yield W(M.BigInt,e,r,n);Fe(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield W(M.BigIntExclusiveMaximum,e,r,n)),Fe(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield W(M.BigIntExclusiveMinimum,e,r,n)),Fe(e.maximum)&&!(n<=e.maximum)&&(yield W(M.BigIntMaximum,e,r,n)),Fe(e.minimum)&&!(n>=e.minimum)&&(yield W(M.BigIntMinimum,e,r,n)),Fe(e.multipleOf)&&n%e.multipleOf!==BigInt(0)&&(yield W(M.BigIntMultipleOf,e,r,n))}function*zP(e,t,r,n){Qd(n)||(yield W(M.Boolean,e,r,n))}function*UP(e,t,r,n){yield*rr(e.returns,t,r,n.prototype)}function*qP(e,t,r,n){if(!Vg(n))return yield W(M.Date,e,r,n);Fe(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)&&(yield W(M.DateExclusiveMaximumTimestamp,e,r,n)),Fe(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)&&(yield W(M.DateExclusiveMinimumTimestamp,e,r,n)),Fe(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)&&(yield W(M.DateMaximumTimestamp,e,r,n)),Fe(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)&&(yield W(M.DateMinimumTimestamp,e,r,n)),Fe(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0&&(yield W(M.DateMultipleOfTimestamp,e,r,n))}function*WP(e,t,r,n){Ix(n)||(yield W(M.Function,e,r,n))}function*VP(e,t,r,n){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];yield*rr(o,[...t,...i],r,n)}function*KP(e,t,r,n){if(!Px(n))return yield W(M.Integer,e,r,n);Fe(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield W(M.IntegerExclusiveMaximum,e,r,n)),Fe(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield W(M.IntegerExclusiveMinimum,e,r,n)),Fe(e.maximum)&&!(n<=e.maximum)&&(yield W(M.IntegerMaximum,e,r,n)),Fe(e.minimum)&&!(n>=e.minimum)&&(yield W(M.IntegerMinimum,e,r,n)),Fe(e.multipleOf)&&n%e.multipleOf!==0&&(yield W(M.IntegerMultipleOf,e,r,n))}function*HP(e,t,r,n){let i=!1;for(const o of e.allOf)for(const s of rr(o,t,r,n))i=!0,yield s;if(i)return yield W(M.Intersect,e,r,n);if(e.unevaluatedProperties===!1){const o=new RegExp($a(e));for(const s of Object.getOwnPropertyNames(n))o.test(s)||(yield W(M.IntersectUnevaluatedProperties,e,`${r}/${s}`,n))}if(typeof e.unevaluatedProperties=="object"){const o=new RegExp($a(e));for(const s of Object.getOwnPropertyNames(n))if(!o.test(s)){const a=rr(e.unevaluatedProperties,t,`${r}/${s}`,n[s]).next();a.done||(yield a.value)}}}function*GP(e,t,r,n){Tx(n)||(yield W(M.Iterator,e,r,n))}function*ZP(e,t,r,n){n!==e.const&&(yield W(M.Literal,e,r,n))}function*YP(e,t,r,n){yield W(M.Never,e,r,n)}function*JP(e,t,r,n){rr(e.not,t,r,n).next().done===!0&&(yield W(M.Not,e,r,n))}function*XP(e,t,r,n){Xd(n)||(yield W(M.Null,e,r,n))}function*QP(e,t,r,n){if(!Dt.IsNumberLike(n))return yield W(M.Number,e,r,n);Fe(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield W(M.NumberExclusiveMaximum,e,r,n)),Fe(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield W(M.NumberExclusiveMinimum,e,r,n)),Fe(e.maximum)&&!(n<=e.maximum)&&(yield W(M.NumberMaximum,e,r,n)),Fe(e.minimum)&&!(n>=e.minimum)&&(yield W(M.NumberMinimum,e,r,n)),Fe(e.multipleOf)&&n%e.multipleOf!==0&&(yield W(M.NumberMultipleOf,e,r,n))}function*eI(e,t,r,n){if(!Dt.IsObjectLike(n))return yield W(M.Object,e,r,n);Fe(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield W(M.ObjectMinProperties,e,r,n)),Fe(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield W(M.ObjectMaxProperties,e,r,n));const i=Array.isArray(e.required)?e.required:[],o=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(n);for(const a of i)s.includes(a)||(yield W(M.ObjectRequiredProperty,e.properties[a],`${r}/${Bi(a)}`,void 0));if(e.additionalProperties===!1)for(const a of s)o.includes(a)||(yield W(M.ObjectAdditionalProperties,e,`${r}/${Bi(a)}`,n[a]));if(typeof e.additionalProperties=="object")for(const a of s)o.includes(a)||(yield*rr(e.additionalProperties,t,`${r}/${Bi(a)}`,n[a]));for(const a of o){const l=e.properties[a];e.required&&e.required.includes(a)?(yield*rr(l,t,`${r}/${Bi(a)}`,n[a]),Ja(e)&&!(a in n)&&(yield W(M.ObjectRequiredProperty,l,`${r}/${Bi(a)}`,void 0))):Dt.IsExactOptionalProperty(n,a)&&(yield*rr(l,t,`${r}/${Bi(a)}`,n[a]))}}function*tI(e,t,r,n){Mx(n)||(yield W(M.Promise,e,r,n))}function*rI(e,t,r,n){if(!Dt.IsRecordLike(n))return yield W(M.Object,e,r,n);Fe(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield W(M.ObjectMinProperties,e,r,n)),Fe(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield W(M.ObjectMaxProperties,e,r,n));const[i,o]=Object.entries(e.patternProperties)[0],s=new RegExp(i);for(const[a,l]of Object.entries(n))s.test(a)&&(yield*rr(o,t,`${r}/${Bi(a)}`,l));if(typeof e.additionalProperties=="object")for(const[a,l]of Object.entries(n))s.test(a)||(yield*rr(e.additionalProperties,t,`${r}/${Bi(a)}`,l));if(e.additionalProperties===!1){for(const[a,l]of Object.entries(n))if(!s.test(a))return yield W(M.ObjectAdditionalProperties,e,`${r}/${Bi(a)}`,l)}}function*nI(e,t,r,n){yield*rr(zn(e,t),t,r,n)}function*iI(e,t,r,n){if(!hn(n))return yield W(M.String,e,r,n);if(Fe(e.minLength)&&!(n.length>=e.minLength)&&(yield W(M.StringMinLength,e,r,n)),Fe(e.maxLength)&&!(n.length<=e.maxLength)&&(yield W(M.StringMaxLength,e,r,n)),!new RegExp(e.source,e.flags).test(n))return yield W(M.RegExp,e,r,n)}function*oI(e,t,r,n){if(!hn(n))return yield W(M.String,e,r,n);Fe(e.minLength)&&!(n.length>=e.minLength)&&(yield W(M.StringMinLength,e,r,n)),Fe(e.maxLength)&&!(n.length<=e.maxLength)&&(yield W(M.StringMaxLength,e,r,n)),hn(e.pattern)&&(new RegExp(e.pattern).test(n)||(yield W(M.StringPattern,e,r,n))),hn(e.format)&&(rp(e.format)?np(e.format)(n)||(yield W(M.StringFormat,e,r,n)):yield W(M.StringFormatUnknown,e,r,n))}function*sI(e,t,r,n){ef(n)||(yield W(M.Symbol,e,r,n))}function*aI(e,t,r,n){if(!hn(n))return yield W(M.String,e,r,n);new RegExp(e.pattern).test(n)||(yield W(M.StringPattern,e,r,n))}function*lI(e,t,r,n){yield*rr(zn(e,t),t,r,n)}function*uI(e,t,r,n){if(!vn(n))return yield W(M.Tuple,e,r,n);if(e.items===void 0&&n.length!==0)return yield W(M.TupleLength,e,r,n);if(n.length!==e.maxItems)return yield W(M.TupleLength,e,r,n);if(e.items)for(let i=0;i<e.items.length;i++)yield*rr(e.items[i],t,`${r}/${i}`,n[i])}function*cI(e,t,r,n){Mo(n)||(yield W(M.Undefined,e,r,n))}function*dI(e,t,r,n){if(md(e,t,n))return;const i=e.anyOf.map(o=>new F5(rr(o,t,r,n)));yield W(M.Union,e,r,n,i)}function*fI(e,t,r,n){if(!Kg(n))return yield W(M.Uint8Array,e,r,n);Fe(e.maxByteLength)&&!(n.length<=e.maxByteLength)&&(yield W(M.Uint8ArrayMaxByteLength,e,r,n)),Fe(e.minByteLength)&&!(n.length>=e.minByteLength)&&(yield W(M.Uint8ArrayMinByteLength,e,r,n))}function*hI(e,t,r,n){}function*mI(e,t,r,n){Dt.IsVoidLike(n)||(yield W(M.Void,e,r,n))}function*gI(e,t,r,n){sp(e[_])(e,n)||(yield W(M.Kind,e,r,n))}function*rr(e,t,r,n){const i=Fe(e.$id)?[...t,e]:t,o=e;switch(o[_]){case"Any":return yield*RP();case"Argument":return yield*BP();case"Array":return yield*LP(o,i,r,n);case"AsyncIterator":return yield*_P(o,i,r,n);case"BigInt":return yield*jP(o,i,r,n);case"Boolean":return yield*zP(o,i,r,n);case"Constructor":return yield*UP(o,i,r,n);case"Date":return yield*qP(o,i,r,n);case"Function":return yield*WP(o,i,r,n);case"Import":return yield*VP(o,i,r,n);case"Integer":return yield*KP(o,i,r,n);case"Intersect":return yield*HP(o,i,r,n);case"Iterator":return yield*GP(o,i,r,n);case"Literal":return yield*ZP(o,i,r,n);case"Never":return yield*YP(o,i,r,n);case"Not":return yield*JP(o,i,r,n);case"Null":return yield*XP(o,i,r,n);case"Number":return yield*QP(o,i,r,n);case"Object":return yield*eI(o,i,r,n);case"Promise":return yield*tI(o,i,r,n);case"Record":return yield*rI(o,i,r,n);case"Ref":return yield*nI(o,i,r,n);case"RegExp":return yield*iI(o,i,r,n);case"String":return yield*oI(o,i,r,n);case"Symbol":return yield*sI(o,i,r,n);case"TemplateLiteral":return yield*aI(o,i,r,n);case"This":return yield*lI(o,i,r,n);case"Tuple":return yield*uI(o,i,r,n);case"Undefined":return yield*cI(o,i,r,n);case"Union":return yield*dI(o,i,r,n);case"Uint8Array":return yield*fI(o,i,r,n);case"Unknown":return yield*hI();case"Void":return yield*mI(o,i,r,n);default:if(!Ao(o[_]))throw new OP(e);return yield*gI(o,i,r,n)}}function pI(...e){const t=e.length===3?rr(e[0],e[1],"",e[2]):rr(e[0],[],"",e[1]);return new F5(t)}class bI extends gr{constructor(t,r,n){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class yI extends gr{constructor(t,r,n,i){super(i instanceof Error?i.message:"Unknown error"),this.schema=t,this.path=r,this.value=n,this.error=i}}function ft(e,t,r){try{return st(e)?e[Xr].Decode(r):r}catch(n){throw new yI(e,t,r,n)}}function vI(e,t,r,n){return vn(n)?ft(e,r,n.map((i,o)=>ci(e.items,t,`${r}/${o}`,i))):ft(e,r,n)}function wI(e,t,r,n){if(!Di(n)||Nx(n))return ft(e,r,n);const i=a5(e),o=i.map(d=>d[0]),s={...n};for(const[d,f]of i)d in s&&(s[d]=ci(f,t,`${r}/${d}`,s[d]));if(!st(e.unevaluatedProperties))return ft(e,r,s);const a=Object.getOwnPropertyNames(s),l=e.unevaluatedProperties,u={...s};for(const d of a)o.includes(d)||(u[d]=ft(l,`${r}/${d}`,u[d]));return ft(e,r,u)}function kI(e,t,r,n){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=ci(o,[...t,...i],r,n);return ft(e,r,s)}function xI(e,t,r,n){return ft(e,r,ci(e.not,t,r,n))}function $I(e,t,r,n){if(!Di(n))return ft(e,r,n);const i=Ts(e),o={...n};for(const u of i)Fx(o,u)&&(Mo(o[u])&&(!Nu(e.properties[u])||Dt.IsExactOptionalProperty(o,u))||(o[u]=ci(e.properties[u],t,`${r}/${u}`,o[u])));if(!Lr(e.additionalProperties))return ft(e,r,o);const s=Object.getOwnPropertyNames(o),a=e.additionalProperties,l={...o};for(const u of s)i.includes(u)||(l[u]=ft(a,`${r}/${u}`,l[u]));return ft(e,r,l)}function DI(e,t,r,n){if(!Di(n))return ft(e,r,n);const i=Object.getOwnPropertyNames(e.patternProperties)[0],o=new RegExp(i),s={...n};for(const d of Object.getOwnPropertyNames(n))o.test(d)&&(s[d]=ci(e.patternProperties[i],t,`${r}/${d}`,s[d]));if(!Lr(e.additionalProperties))return ft(e,r,s);const a=Object.getOwnPropertyNames(s),l=e.additionalProperties,u={...s};for(const d of a)o.test(d)||(u[d]=ft(l,`${r}/${d}`,u[d]));return ft(e,r,u)}function AI(e,t,r,n){const i=zn(e,t);return ft(e,r,ci(i,t,r,n))}function EI(e,t,r,n){const i=zn(e,t);return ft(e,r,ci(i,t,r,n))}function CI(e,t,r,n){return vn(n)&&vn(e.items)?ft(e,r,e.items.map((i,o)=>ci(i,t,`${r}/${o}`,n[o]))):ft(e,r,n)}function SI(e,t,r,n){for(const i of e.anyOf){if(!md(i,t,n))continue;const o=ci(i,t,r,n);return ft(e,r,o)}return ft(e,r,n)}function ci(e,t,r,n){const i=xf(e,t),o=e;switch(e[_]){case"Array":return vI(o,i,r,n);case"Import":return kI(o,i,r,n);case"Intersect":return wI(o,i,r,n);case"Not":return xI(o,i,r,n);case"Object":return $I(o,i,r,n);case"Record":return DI(o,i,r,n);case"Ref":return AI(o,i,r,n);case"Symbol":return ft(o,r,n);case"This":return EI(o,i,r,n);case"Tuple":return CI(o,i,r,n);case"Union":return SI(o,i,r,n);default:return ft(o,r,n)}}function TI(e,t,r){return ci(e,t,"",r)}class MI extends gr{constructor(t,r,n){super("The encoded value does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class FI extends gr{constructor(t,r,n,i){super(`${i instanceof Error?i.message:"Unknown error"}`),this.schema=t,this.path=r,this.value=n,this.error=i}}function dr(e,t,r){try{return st(e)?e[Xr].Encode(r):r}catch(n){throw new FI(e,t,r,n)}}function PI(e,t,r,n){const i=dr(e,r,n);return vn(i)?i.map((o,s)=>si(e.items,t,`${r}/${s}`,o)):i}function II(e,t,r,n){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=dr(e,r,n);return si(o,[...t,...i],r,s)}function NI(e,t,r,n){const i=dr(e,r,n);if(!Di(n)||Nx(n))return i;const o=a5(e),s=o.map(f=>f[0]),a={...i};for(const[f,h]of o)f in a&&(a[f]=si(h,t,`${r}/${f}`,a[f]));if(!st(e.unevaluatedProperties))return a;const l=Object.getOwnPropertyNames(a),u=e.unevaluatedProperties,d={...a};for(const f of l)s.includes(f)||(d[f]=dr(u,`${r}/${f}`,d[f]));return d}function OI(e,t,r,n){return dr(e.not,r,dr(e,r,n))}function RI(e,t,r,n){const i=dr(e,r,n);if(!Di(i))return i;const o=Ts(e),s={...i};for(const d of o)Fx(s,d)&&(Mo(s[d])&&(!Nu(e.properties[d])||Dt.IsExactOptionalProperty(s,d))||(s[d]=si(e.properties[d],t,`${r}/${d}`,s[d])));if(!Lr(e.additionalProperties))return s;const a=Object.getOwnPropertyNames(s),l=e.additionalProperties,u={...s};for(const d of a)o.includes(d)||(u[d]=dr(l,`${r}/${d}`,u[d]));return u}function BI(e,t,r,n){const i=dr(e,r,n);if(!Di(n))return i;const o=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(o),a={...i};for(const f of Object.getOwnPropertyNames(n))s.test(f)&&(a[f]=si(e.patternProperties[o],t,`${r}/${f}`,a[f]));if(!Lr(e.additionalProperties))return a;const l=Object.getOwnPropertyNames(a),u=e.additionalProperties,d={...a};for(const f of l)s.test(f)||(d[f]=dr(u,`${r}/${f}`,d[f]));return d}function LI(e,t,r,n){const i=zn(e,t),o=si(i,t,r,n);return dr(e,r,o)}function _I(e,t,r,n){const i=zn(e,t),o=si(i,t,r,n);return dr(e,r,o)}function jI(e,t,r,n){const i=dr(e,r,n);return vn(e.items)?e.items.map((o,s)=>si(o,t,`${r}/${s}`,i[s])):[]}function zI(e,t,r,n){for(const i of e.anyOf){if(!md(i,t,n))continue;const o=si(i,t,r,n);return dr(e,r,o)}for(const i of e.anyOf){const o=si(i,t,r,n);if(md(e,t,o))return dr(e,r,o)}return dr(e,r,n)}function si(e,t,r,n){const i=xf(e,t),o=e;switch(e[_]){case"Array":return PI(o,i,r,n);case"Import":return II(o,i,r,n);case"Intersect":return NI(o,i,r,n);case"Not":return OI(o,i,r,n);case"Object":return RI(o,i,r,n);case"Record":return BI(o,i,r,n);case"Ref":return LI(o,i,r,n);case"This":return _I(o,i,r,n);case"Tuple":return jI(o,i,r,n);case"Union":return zI(o,i,r,n);default:return dr(o,r,n)}}function UI(e,t,r){return si(e,t,"",r)}function qI(e,t){return st(e)||Ht(e.items,t)}function WI(e,t){return st(e)||Ht(e.items,t)}function VI(e,t){return st(e)||Ht(e.returns,t)||e.parameters.some(r=>Ht(r,t))}function KI(e,t){return st(e)||Ht(e.returns,t)||e.parameters.some(r=>Ht(r,t))}function HI(e,t){return st(e)||st(e.unevaluatedProperties)||e.allOf.some(r=>Ht(r,t))}function GI(e,t){const r=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((i,o)=>[...i,e.$defs[o]],[]),n=e.$defs[e.$ref];return st(e)||Ht(n,[...r,...t])}function ZI(e,t){return st(e)||Ht(e.items,t)}function YI(e,t){return st(e)||Ht(e.not,t)}function JI(e,t){return st(e)||Object.values(e.properties).some(r=>Ht(r,t))||Lr(e.additionalProperties)&&Ht(e.additionalProperties,t)}function XI(e,t){return st(e)||Ht(e.item,t)}function QI(e,t){const r=Object.getOwnPropertyNames(e.patternProperties)[0],n=e.patternProperties[r];return st(e)||Ht(n,t)||Lr(e.additionalProperties)&&st(e.additionalProperties)}function eN(e,t){return st(e)?!0:Ht(zn(e,t),t)}function tN(e,t){return st(e)?!0:Ht(zn(e,t),t)}function rN(e,t){return st(e)||!Mo(e.items)&&e.items.some(r=>Ht(r,t))}function nN(e,t){return st(e)||e.anyOf.some(r=>Ht(r,t))}function Ht(e,t){const r=xf(e,t),n=e;if(e.$id&&ym.has(e.$id))return!1;switch(e.$id&&ym.add(e.$id),e[_]){case"Array":return qI(n,r);case"AsyncIterator":return WI(n,r);case"Constructor":return VI(n,r);case"Function":return KI(n,r);case"Import":return GI(n,r);case"Intersect":return HI(n,r);case"Iterator":return ZI(n,r);case"Not":return YI(n,r);case"Object":return JI(n,r);case"Promise":return XI(n,r);case"Record":return QI(n,r);case"Ref":return eN(n,r);case"This":return tN(n,r);case"Tuple":return rN(n,r);case"Union":return nN(n,r);default:return st(e)}}const ym=new Set;function iN(e,t){return ym.clear(),Ht(e,t)}class oN{constructor(t,r,n,i){this.schema=t,this.references=r,this.checkFunc=n,this.code=i,this.hasTransform=iN(t,r)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return pI(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new bI(this.schema,t,this.Errors(t).First());return this.hasTransform?TI(this.schema,this.references,t):t}Encode(t){const r=this.hasTransform?UI(this.schema,this.references,t):t;if(!this.checkFunc(r))throw new MI(this.schema,t,this.Errors(t).First());return r}}var zi;(function(e){function t(o){return o===36}e.DollarSign=t;function r(o){return o===95}e.IsUnderscore=r;function n(o){return o>=65&&o<=90||o>=97&&o<=122}e.IsAlpha=n;function i(o){return o>=48&&o<=57}e.IsNumeric=i})(zi||(zi={}));var gd;(function(e){function t(o){return o.length===0?!1:zi.IsNumeric(o.charCodeAt(0))}function r(o){if(t(o))return!1;for(let s=0;s<o.length;s++){const a=o.charCodeAt(s);if(!(zi.IsAlpha(a)||zi.IsNumeric(a)||zi.DollarSign(a)||zi.IsUnderscore(a)))return!1}return!0}function n(o){return o.replace(/'/g,"\\'")}function i(o,s){return r(s)?`${o}.${s}`:`${o}['${n(s)}']`}e.Encode=i})(gd||(gd={}));var vm;(function(e){function t(r){const n=[];for(let i=0;i<r.length;i++){const o=r.charCodeAt(i);zi.IsNumeric(o)||zi.IsAlpha(o)?n.push(r.charAt(i)):n.push(`_${o}_`)}return n.join("").replace(/__/g,"_")}e.Encode=t})(vm||(vm={}));var wm;(function(e){function t(r){return r.replace(/'/g,"\\'")}e.Escape=t})(wm||(wm={}));class sN extends gr{constructor(t){super("Unknown type"),this.schema=t}}class iv extends gr{constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var Jo;(function(e){function t(s,a,l){return Dt.ExactOptionalPropertyTypes?`('${a}' in ${s} ? ${l} : true)`:`(${gd.Encode(s,a)} !== undefined ? ${l} : true)`}e.IsExactOptionalProperty=t;function r(s){return Dt.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}e.IsObjectLike=r;function n(s){return Dt.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}e.IsRecordLike=n;function i(s){return Dt.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}e.IsNumberLike=i;function o(s){return Dt.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}e.IsVoidLike=o})(Jo||(Jo={}));var Gl;(function(e){function t(A){return A[_]==="Any"||A[_]==="Unknown"}function*r(A,q,S){yield"true"}function*n(A,q,S){yield"true"}function*i(A,q,S){yield`Array.isArray(${S})`;const[ue,G]=[sr("value","any"),sr("acc","number")];Ae(A.maxItems)&&(yield`${S}.length <= ${A.maxItems}`),Ae(A.minItems)&&(yield`${S}.length >= ${A.minItems}`);const Q=yt(A.items,q,"value");if(yield`((array) => { for(const ${ue} of array) if(!(${Q})) { return false }; return true; })(${S})`,gt(A.contains)||Ae(A.minContains)||Ae(A.maxContains)){const Ye=gt(A.contains)?A.contains:bt(),xt=yt(Ye,q,"value"),qr=Ae(A.minContains)?[`(count >= ${A.minContains})`]:[],vr=Ae(A.maxContains)?[`(count <= ${A.maxContains})`]:[],nn=`const count = value.reduce((${G}, ${ue}) => ${xt} ? acc + 1 : acc, 0)`,_o=["(count > 0)",...qr,...vr].join(" && ");yield`((${ue}) => { ${nn}; return ${_o}})(${S})`}A.uniqueItems===!0&&(yield`((${ue}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${S})`)}function*o(A,q,S){yield`(typeof value === 'object' && Symbol.asyncIterator in ${S})`}function*s(A,q,S){yield`(typeof ${S} === 'bigint')`,ji(A.exclusiveMaximum)&&(yield`${S} < BigInt(${A.exclusiveMaximum})`),ji(A.exclusiveMinimum)&&(yield`${S} > BigInt(${A.exclusiveMinimum})`),ji(A.maximum)&&(yield`${S} <= BigInt(${A.maximum})`),ji(A.minimum)&&(yield`${S} >= BigInt(${A.minimum})`),ji(A.multipleOf)&&(yield`(${S} % BigInt(${A.multipleOf})) === 0`)}function*a(A,q,S){yield`(typeof ${S} === 'boolean')`}function*l(A,q,S){yield*Ct(A.returns,q,`${S}.prototype`)}function*u(A,q,S){yield`(${S} instanceof Date) && Number.isFinite(${S}.getTime())`,Ae(A.exclusiveMaximumTimestamp)&&(yield`${S}.getTime() < ${A.exclusiveMaximumTimestamp}`),Ae(A.exclusiveMinimumTimestamp)&&(yield`${S}.getTime() > ${A.exclusiveMinimumTimestamp}`),Ae(A.maximumTimestamp)&&(yield`${S}.getTime() <= ${A.maximumTimestamp}`),Ae(A.minimumTimestamp)&&(yield`${S}.getTime() >= ${A.minimumTimestamp}`),Ae(A.multipleOfTimestamp)&&(yield`(${S}.getTime() % ${A.multipleOfTimestamp}) === 0`)}function*d(A,q,S){yield`(typeof ${S} === 'function')`}function*f(A,q,S){const ue=globalThis.Object.getOwnPropertyNames(A.$defs).reduce((G,Q)=>[...G,A.$defs[Q]],[]);yield*Ct(Za(A.$ref),[...q,...ue],S)}function*h(A,q,S){yield`Number.isInteger(${S})`,Ae(A.exclusiveMaximum)&&(yield`${S} < ${A.exclusiveMaximum}`),Ae(A.exclusiveMinimum)&&(yield`${S} > ${A.exclusiveMinimum}`),Ae(A.maximum)&&(yield`${S} <= ${A.maximum}`),Ae(A.minimum)&&(yield`${S} >= ${A.minimum}`),Ae(A.multipleOf)&&(yield`(${S} % ${A.multipleOf}) === 0`)}function*g(A,q,S){const ue=A.allOf.map(G=>yt(G,q,S)).join(" && ");if(A.unevaluatedProperties===!1){const G=zt(`${new RegExp($a(A))};`),Q=`Object.getOwnPropertyNames(${S}).every(key => ${G}.test(key))`;yield`(${ue} && ${Q})`}else if(gt(A.unevaluatedProperties)){const G=zt(`${new RegExp($a(A))};`),Q=`Object.getOwnPropertyNames(${S}).every(key => ${G}.test(key) || ${yt(A.unevaluatedProperties,q,`${S}[key]`)})`;yield`(${ue} && ${Q})`}else yield`(${ue})`}function*m(A,q,S){yield`(typeof value === 'object' && Symbol.iterator in ${S})`}function*b(A,q,S){typeof A.const=="number"||typeof A.const=="boolean"?yield`(${S} === ${A.const})`:yield`(${S} === '${wm.Escape(A.const)}')`}function*k(A,q,S){yield"false"}function*x(A,q,S){yield`(!${yt(A.not,q,S)})`}function*D(A,q,S){yield`(${S} === null)`}function*C(A,q,S){yield Jo.IsNumberLike(S),Ae(A.exclusiveMaximum)&&(yield`${S} < ${A.exclusiveMaximum}`),Ae(A.exclusiveMinimum)&&(yield`${S} > ${A.exclusiveMinimum}`),Ae(A.maximum)&&(yield`${S} <= ${A.maximum}`),Ae(A.minimum)&&(yield`${S} >= ${A.minimum}`),Ae(A.multipleOf)&&(yield`(${S} % ${A.multipleOf}) === 0`)}function*P(A,q,S){yield Jo.IsObjectLike(S),Ae(A.minProperties)&&(yield`Object.getOwnPropertyNames(${S}).length >= ${A.minProperties}`),Ae(A.maxProperties)&&(yield`Object.getOwnPropertyNames(${S}).length <= ${A.maxProperties}`);const ue=Object.getOwnPropertyNames(A.properties);for(const G of ue){const Q=gd.Encode(S,G),Ye=A.properties[G];if(A.required&&A.required.includes(G))yield*Ct(Ye,q,Q),(Ja(Ye)||t(Ye))&&(yield`('${G}' in ${S})`);else{const xt=yt(Ye,q,Q);yield Jo.IsExactOptionalProperty(S,G,xt)}}if(A.additionalProperties===!1)if(A.required&&A.required.length===ue.length)yield`Object.getOwnPropertyNames(${S}).length === ${ue.length}`;else{const G=`[${ue.map(Q=>`'${Q}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${S}).every(key => ${G}.includes(key))`}if(typeof A.additionalProperties=="object"){const G=yt(A.additionalProperties,q,`${S}[key]`),Q=`[${ue.map(Ye=>`'${Ye}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${S}).every(key => ${Q}.includes(key) || ${G}))`}}function*O(A,q,S){yield`${S} instanceof Promise`}function*H(A,q,S){yield Jo.IsRecordLike(S),Ae(A.minProperties)&&(yield`Object.getOwnPropertyNames(${S}).length >= ${A.minProperties}`),Ae(A.maxProperties)&&(yield`Object.getOwnPropertyNames(${S}).length <= ${A.maxProperties}`);const[ue,G]=Object.entries(A.patternProperties)[0],Q=zt(`${new RegExp(ue)}`),Ye=yt(G,q,"value"),xt=gt(A.additionalProperties)?yt(A.additionalProperties,q,S):A.additionalProperties===!1?"false":"true",qr=`(${Q}.test(key) ? ${Ye} : ${xt})`;yield`(Object.entries(${S}).every(([key, value]) => ${qr}))`}function*ee(A,q,S){const ue=zn(A,q);if(me.functions.has(A.$ref))return yield`${Ze(A.$ref)}(${S})`;yield*Ct(ue,q,S)}function*ie(A,q,S){const ue=zt(`${new RegExp(A.source,A.flags)};`);yield`(typeof ${S} === 'string')`,Ae(A.maxLength)&&(yield`${S}.length <= ${A.maxLength}`),Ae(A.minLength)&&(yield`${S}.length >= ${A.minLength}`),yield`${ue}.test(${S})`}function*X(A,q,S){yield`(typeof ${S} === 'string')`,Ae(A.maxLength)&&(yield`${S}.length <= ${A.maxLength}`),Ae(A.minLength)&&(yield`${S}.length >= ${A.minLength}`),A.pattern!==void 0&&(yield`${zt(`${new RegExp(A.pattern)};`)}.test(${S})`),A.format!==void 0&&(yield`format('${A.format}', ${S})`)}function*ye(A,q,S){yield`(typeof ${S} === 'symbol')`}function*se(A,q,S){yield`(typeof ${S} === 'string')`,yield`${zt(`${new RegExp(A.pattern)};`)}.test(${S})`}function*$e(A,q,S){yield`${Ze(A.$ref)}(${S})`}function*Ue(A,q,S){if(yield`Array.isArray(${S})`,A.items===void 0)return yield`${S}.length === 0`;yield`(${S}.length === ${A.maxItems})`;for(let ue=0;ue<A.items.length;ue++)yield`${yt(A.items[ue],q,`${S}[${ue}]`)}`}function*Ge(A,q,S){yield`${S} === undefined`}function*yr(A,q,S){yield`(${A.anyOf.map(G=>yt(G,q,S)).join(" || ")})`}function*Et(A,q,S){yield`${S} instanceof Uint8Array`,Ae(A.maxByteLength)&&(yield`(${S}.length <= ${A.maxByteLength})`),Ae(A.minByteLength)&&(yield`(${S}.length >= ${A.minByteLength})`)}function*An(A,q,S){yield"true"}function*En(A,q,S){yield Jo.IsVoidLike(S)}function*Ur(A,q,S){const ue=me.instances.size;me.instances.set(ue,A),yield`kind('${A[_]}', ${ue}, ${S})`}function*Ct(A,q,S,ue=!0){const G=hn(A.$id)?[...q,A]:q,Q=A;if(ue&&hn(A.$id)){const Ye=Ze(A.$id);if(me.functions.has(Ye))return yield`${Ye}(${S})`;{me.functions.set(Ye,"<deferred>");const xt=Be(Ye,A,q,"value",!1);return me.functions.set(Ye,xt),yield`${Ye}(${S})`}}switch(Q[_]){case"Any":return yield*r();case"Argument":return yield*n();case"Array":return yield*i(Q,G,S);case"AsyncIterator":return yield*o(Q,G,S);case"BigInt":return yield*s(Q,G,S);case"Boolean":return yield*a(Q,G,S);case"Constructor":return yield*l(Q,G,S);case"Date":return yield*u(Q,G,S);case"Function":return yield*d(Q,G,S);case"Import":return yield*f(Q,G,S);case"Integer":return yield*h(Q,G,S);case"Intersect":return yield*g(Q,G,S);case"Iterator":return yield*m(Q,G,S);case"Literal":return yield*b(Q,G,S);case"Never":return yield*k();case"Not":return yield*x(Q,G,S);case"Null":return yield*D(Q,G,S);case"Number":return yield*C(Q,G,S);case"Object":return yield*P(Q,G,S);case"Promise":return yield*O(Q,G,S);case"Record":return yield*H(Q,G,S);case"Ref":return yield*ee(Q,G,S);case"RegExp":return yield*ie(Q,G,S);case"String":return yield*X(Q,G,S);case"Symbol":return yield*ye(Q,G,S);case"TemplateLiteral":return yield*se(Q,G,S);case"This":return yield*$e(Q,G,S);case"Tuple":return yield*Ue(Q,G,S);case"Undefined":return yield*Ge(Q,G,S);case"Union":return yield*yr(Q,G,S);case"Uint8Array":return yield*Et(Q,G,S);case"Unknown":return yield*An();case"Void":return yield*En(Q,G,S);default:if(!Ao(Q[_]))throw new sN(A);return yield*Ur(Q,G,S)}}const me={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function yt(A,q,S,ue=!0){return`(${[...Ct(A,q,S,ue)].join(" && ")})`}function Ze(A){return`check_${vm.Encode(A)}`}function zt(A){const q=`local_${me.variables.size}`;return me.variables.set(q,`const ${q} = ${A}`),q}function Be(A,q,S,ue,G=!0){const[Q,Ye]=[`
`,nn=>"".padStart(nn," ")],xt=sr("value","any"),qr=Cn("boolean"),vr=[...Ct(q,S,ue,G)].map(nn=>`${Ye(4)}${nn}`).join(` &&${Q}`);return`function ${A}(${xt})${qr} {${Q}${Ye(2)}return (${Q}${vr}${Q}${Ye(2)})
}`}function sr(A,q){const S=me.language==="typescript"?`: ${q}`:"";return`${A}${S}`}function Cn(A){return me.language==="typescript"?`: ${A}`:""}function qn(A,q,S){const ue=Be("check",A,q,"value"),G=sr("value","any"),Q=Cn("boolean"),Ye=[...me.functions.values()],xt=[...me.variables.values()],qr=hn(A.$id)?`return function check(${G})${Q} {
  return ${Ze(A.$id)}(value)
}`:`return ${ue}`;return[...xt,...Ye,qr].join(`
`)}function Si(...A){const q={language:"javascript"},[S,ue,G]=A.length===2&&vn(A[1])?[A[0],A[1],q]:A.length===2&&!vn(A[1])?[A[0],[],A[1]]:A.length===3?[A[0],A[1],A[2]]:A.length===1?[A[0],[],q]:[null,[],q];if(me.language=G.language,me.variables.clear(),me.functions.clear(),me.instances.clear(),!gt(S))throw new iv(S);for(const Q of ue)if(!gt(Q))throw new iv(Q);return qn(S,ue)}e.Code=Si;function il(A,q=[]){const S=Si(A,q,{language:"javascript"}),ue=globalThis.Function("kind","format","hash",S),G=new Map(me.instances);function Q(vr,nn,_o){if(!Ao(vr)||!G.has(nn))return!1;const Jf=sp(vr),ol=G.get(nn);return Jf(ol,_o)}function Ye(vr,nn){return rp(vr)?np(vr)(nn):!1}function xt(vr){return Mp(vr)}const qr=ue(Q,Ye,xt);return new oN(A,q,qr,S)}e.Compile=il})(Gl||(Gl={}));const km={};function P5(e,t){e in km||(km[e]=t)}let ov=!1;function aN(){ov||(ov=!0,IF(e=>(km[e.schema[_]]||E5)(e)))}const xm=Symbol.for("object-shape-tester.shape-identifier");function Ce(e){if(aN(),Fp(e))return e;const t=$m(e),r=Xo(t,!1),n=Xo(t,!0),i={$_schema:t,$_schemaNoExtraKeys:r,$_schemaExtraKeys:n,default:t.default,$_compiledSchema:Gl.Compile(t),$_compiledSchemaNoExtraKeys:Gl.Compile(r),$_compiledSchemaExtraKeys:Gl.Compile(n)};return Object.defineProperties(i,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[xm]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),i}function Fp(e){return T.hasKey(e,xm)&&!!e[xm]}function Pp(e){return T.hasKey(e,_)}function Xo(e,t){const r={...e};if(Array.isArray(e.anyOf)&&(r.anyOf=e.anyOf.map(n=>Xo(n,t))),Array.isArray(e.allOf)&&(r.allOf=e.allOf.map(n=>Xo(n,t))),Pp(e.items)?r.items=Xo(e.items,t):Array.isArray(e.items)&&(r.items=e.items.map(n=>Xo(n,t))),T.isObject(e.properties)){const n={};Object.entries(e.properties).forEach(([i,o])=>{n[i]=Xo(o,t)}),r.properties=n}return r.additionalProperties=t,r}function $m(e){if(Pp(e))return e;if(Fp(e))return e.$_schema;if(T.isFunction(e))return rt.Function([],rt.Any(),{default:e});if(T.isObject(e)){const t={},r={};return Object.entries(e).forEach(([n,i])=>{const o=$m(i);r[n]=o,t[n]=o.default}),rt.Object(r,{default:t})}else{if(T.isArray(e))return rt.Array(rt.Union(e.map(t=>$m(t))),{default:[]});if(T.isPrimitive(e)){if(T.isString(e))return rt.String({default:e});if(T.isNumber(e))return rt.Number({default:e});if(T.isBoolean(e))return rt.Boolean({default:e});if(T.isSymbol(e))return rt.Symbol({default:e});if(T.isNull(e))return rt.Null({default:null});if(T.isUndefined(e))return rt.Undefined({default:void 0});if(T.isBigInt(e))return rt.BigInt({default:e});Nt.tsType(e).equals(),Nt.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${$(e)}`)}}function lN({checkValue:e,default:t,name:r}){return Ao(r)||op(r,(n,i)=>e(i)),(n=t)=>Ce(rt.Unsafe({[_]:r,default:n}))}function ai(e,t){const r=ln(e);if(t!=null&&!r.includes(t))throw new TypeError("enumShape default must be a subset of the given enum.");return Ce(rt.Union(r.map(n=>rt.Literal(n)),{default:t??r[0]}))}function ke(e){return T.isSymbol(e)?uN(e):Ce(rt.Const(e,{default:e}))}const gc="ExactSymbol";function uN(e){return Ao(gc)||op(gc,(t,r)=>r===t.symbol),P5(gc,({schema:t})=>`Expected symbol ${t.symbol?.description?$k({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),Ce(rt.Unsafe({[_]:gc,symbol:e,default:e}))}function cN(...e){const t={},r=e.map(n=>{const i=Ce(n);return Object.assign(t,i.default),i.$_schema});return Ce(rt.Composite(r,{default:t}))}function Jt(e,t={}){Dt.ExactOptionalPropertyTypes=!0;const r=Ce(e).$_schema,n=t.alsoUndefined?rt.Union([rt.Undefined(),r]):r;return Ce(rt.Optional(n))}function je(...e){let t;const r=e.map((n,i)=>{const o=Ce(n);return i||(t=o.default),o.$_schema});return Ce(rt.Union(r,{default:t}))}function Le(e){return Jt(je(void 0,null,e))}function dN(e){const t=Ce(e);return Ce(rt.Partial(t.$_schema,{default:t.default}))}function Ip(e){return je(e,"",-1,0n,!1,pp(),null,void 0)}class fN extends TypeError{errors;failureMessage;name="ShapeMismatchError";constructor(t,r){const n=t.map(o=>I5(o)).join(`
`),i=Ia(r,`Shape mismatch:
${ug(n,1)}`);super(i),this.errors=t,this.failureMessage=r}}function hN(e){return e.errors.flatMap(t=>Array.from(t))}function I5(e,t=0){const r=hN(e).map(i=>I5(i,t+1)),n=[e.path,e.message].filter(T.isTruthy).join(": ")+(r.length?":":"");return[ug(n,t),...r].join(`
`)}function mo(e,t,r={}){return N5(t,r).Check(e)}function pd(e,t,r={},n){if(mo(e,t,r))return;const i=Array.from(N5(t,r).Errors(e));if(i.length)throw new fN(i,n)}function N5(e,t){return e=mN(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function mN(e){return Ce(e)}function Xs({exclusiveMax:e,exclusiveMin:t,...r}){const{min:n,max:i}=eg(r),o=r.default??(i-n)/2+n,s=Ce(rt.Number({...t?{exclusiveMinimum:n}:{minimum:n},...e?{exclusiveMaximum:i}:{maximum:i},default:o})),a=yk(()=>pd(o,s));if(a)throw Na(a,"Default range value is not within range.");return s}const Bc="recordShape";function ju({keys:e,values:t,partial:r,additionalProperties:n}){gN();const i=O5(e),o=Ce(t);return Ce(rt.Unsafe({[_]:Bc,keysShape:i,valuesShape:o,isPartial:!!r,additionalProperties:!!n,default:pN({isPartial:!!r,keysShape:i,valuesShape:o})}))}function gN(){Ao(Bc)||op(Bc,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const r=Object.entries(t).every(([i,o])=>{const s=e.additionalProperties?!0:mo(i,e.keysShape),a=mo(o,e.valuesShape);return s&&a}),n=e.isPartial?!0:!sv(e.keysShape,t).length;return r&&n}),P5(Bc,e=>{const r=e.schema,n=e.value;if(typeof n!="object"||!n||Array.isArray(n))return"Expected an object";const i=Vt(Object.entries(n),([l])=>l,(l,[u,d])=>!mo(u,r.keysShape)||!mo(d,r.valuesShape)),o=sv(r.keysShape,n),s=i.length?["Failure at keys",i.join(",")].join(": "):"",a=o.length?["Missing keys",o.join(",")].join(": "):"";return[s,a].filter(T.isTruthy).join(`
`)})}function sv(e,t){const r=bd(e).filter(n=>T.isPropertyKey(n));return r.length?r.filter(n=>!T.hasKey(t,n)):[]}function pN({keysShape:e,valuesShape:t,isPartial:r}){if(r)return{};{const n=bd(e),i=t.default;return Object.fromEntries(n.map(o=>[o,i]))}}function O5(e){return Fp(e)?e:Pp(e)?Ce(e):T.isObject(e)?ai(e):T.isArray(e)&&T.isLengthAtLeast(e,1)?je(...e.map(t=>ke(t))):T.isPropertyKey(e)?Ce(e):Ce(rt.Undefined())}function bd(e){const t=e.$_schema,r=t[_].toLowerCase();return["const","literal"].includes(r)?[t.const]:r==="union"?Nd(t.anyOf.flatMap(n=>bd(Ce(n)))):["undefined","number","string","symbol"].includes(r)?[]:bd(O5(e.default))}function bN(e){return Ce(rt.Unknown({default:e}))}const yN=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Np=yN.reduce((e,t)=>(e[t]=t,e),{});mt.defaultZone.name;const R5=Np.UTC,vN=Ce({hour:Xs({...cy,default:cy.min}),minute:Xs({...dy,default:dy.min}),second:Xs({...fy,default:fy.min}),millisecond:Xs({...hy,default:hy.min}),timezone:ai(Np,R5)}),wN=Ce({year:2023,month:Xs({...gy,default:gy.min}),day:Xs({...py,default:py.min}),timezone:ai(Np,R5)});Ce(cN(wN,vN));pe.Years+"",pe.Months+"",pe.Weeks+"",pe.Days+"",pe.Hours+"",pe.Minutes+"",pe.Seconds+"",pe.Milliseconds+"";Ce(je({get:ke(J.Month),in:je(ke(J.Year))},{get:ke(J.Week),in:je(ke(J.Year),ke(J.Month))},{get:ke(J.Day),in:je(ke(J.Year),ke(J.Month),ke(J.Week))},{get:ke(J.Hour),in:je(ke(J.Year),ke(J.Month),ke(J.Week),ke(J.Day))},{get:ke(J.Minute),in:je(ke(J.Year),ke(J.Month),ke(J.Week),ke(J.Day),ke(J.Hour))},{get:ke(J.Second),in:je(ke(J.Year),ke(J.Month),ke(J.Week),ke(J.Day),ke(J.Hour),ke(J.Minute))},{get:ke(J.Millisecond),in:je(ke(J.Year),ke(J.Month),ke(J.Week),ke(J.Day),ke(J.Hour),ke(J.Minute),ke(J.Second))}));ju({keys:ai(pe),values:-1,partial:!0});var av;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(av||(av={}));var Dm;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(Dm||(Dm={}));var lv;(function(e){e.Year="year",e.Month="month",e.Day="day"})(lv||(lv={}));const kN={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};_E(kN,ln(Dm));lN({default:new Date().toISOString(),name:"UtcIsoString",checkValue(e){return xN(e)}});function xN(e){return ge.fromISO(e).toUTC().toISO()===e}const $N=Ce({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:bN()});function Vh(e){return mo(e,$N,{allowExtraKeys:!0})}class B5 extends Ax{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck="equalityCheck"in t?t.equalityCheck:Ug}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}const{I:DN}=v6,uv=e=>e,cv=()=>document.createComment(""),yl=(e,t,r)=>{const n=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const o=n.insertBefore(cv(),i),s=n.insertBefore(cv(),i);r=new DN(o,s,e,e.options)}else{const o=r._$AB.nextSibling,s=r._$AM,a=s!==e;if(a){let l;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(l=e._$AU)!==s._$AU&&r._$AP(l)}if(o!==i||a){let l=r._$AA;for(;l!==o;){const u=uv(l).nextSibling;uv(n).insertBefore(l,i),l=u}}}return r},Zo=(e,t,r=e)=>(e._$AI(t,r),e),AN={},EN=(e,t=AN)=>e._$AH=t,CN=e=>e._$AH,Kh=e=>{e._$AR(),e._$AA.remove()};const $f={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Ai=e=>(...t)=>({_$litDirective$:e,values:t});class Ei{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}const SN={attribute:!0,type:String,converter:td,reflect:!1,hasChanged:Ag},TN=(e=SN,t,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(n==="setter"){const{name:s}=r;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e,!0,a)}}throw Error("Unsupported decorator location: "+n)};function MN(e){return(t,r)=>typeof r=="object"?TN(e,t,r):((n,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,n),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,r)}const mn=Ai(class extends Ei{constructor(e){if(super(e),e.type!==$f.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return gn}});const Xt=e=>e??fe;function*FN(e,t){const r=typeof t=="function";if(e!==void 0){let n=-1;for(const i of e)n>-1&&(yield r?t(n):t),n++,yield i}}let Am=class extends Ei{constructor(t){if(super(t),this.it=fe,t.type!==$f.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===fe||t==null)return this._t=void 0,this.it=t;if(t===gn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Am.directiveName="unsafeHTML",Am.resultType=1;const PN=Ai(Am);function IN(e,t,r){return e?t(e):r?.(e)}class NN extends ql{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function ON(e,t,r){const n=!t.length&&!r.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(n||i)return[...e];const o=e.map(a=>[a]);return o.length||(o[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(o[a]=[])}),t.forEach(a=>{const l=o[a.index];l&&l.splice(0,0,...a.values)}),o.flat()}function Em(e){return T.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Op(e){return T.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function L5(e){return Vt(e,t=>{if(Em(t))return t.definition;if(Op(t))return t.tagInterpolationKey||t},T.isTruthy)}const _5=new WeakMap;function RN(e,t){const r=L5(t);return j5(_5,[e,...r]).value?.template}function BN(e,t,r){const n=L5(t);return U5(_5,[e,...n],r)}function j5(e,t,r=0){const{currentTemplateAndNested:n,reason:i}=z5(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?j5(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:i}}function z5(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const i=e.get(n);return i==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:i,reason:"key and value exists"}}function U5(e,t,r,n=0){const{currentTemplateAndNested:i,currentKey:o,reason:s}=z5(e,t,n);if(!o)return{result:!1,reason:s};const a=i??{nested:void 0,template:void 0};if(i||e.set(o,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const l=a.nested??new WeakMap;return a.nested||(a.nested=l),U5(l,t,r,n+1)}function q5(e,t,r){const n=RN(e,t),i=n??r();if(!n){const a=BN(e,t,i);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const o=i.valuesTransform(t),s=ON(t,o.valueInsertions,o.valueIndexDeletions);return{strings:i.templateStrings,values:s}}function W5(e,t,r,n){const i=[],o=[],s=[],a=[];return e.forEach((u,d)=>{const f=i.length-1,h=i[f],g=d-1,m=t[g];n&&n(u);let b,k=[];if(typeof h=="string"&&(b=r(h,u,m),b)){i[f]=[h,b.replacement].join(""),s.push(g);const D=b.getExtraValues;k=D?D(m):[],k.length&&D?(i[f]+=" ",k.forEach((C,P)=>{P&&i.push(" ")}),a.push(C=>{const P=C[g],O=D(P);return{index:g,values:O}}),i.push(u)):i[f]+=u}b||i.push(u);const x=e.raw[d];b?(o[f]=[o[f],b.replacement,x].join(""),k.length&&k.forEach(()=>{o.push("")})):o.push(x)}),{templateStrings:Object.assign([],i,{raw:o}),valuesTransform(u){const d=a.flatMap(f=>f(u));return{valueIndexDeletions:s,valueInsertions:d}}}}function LN(...[e,t,r]){if(Op(r))return{replacement:r.tagName,getExtraValues:void 0}}function _N(e,t){return W5(e,t,LN)}function z(e,...t){const r=q5(e,t,()=>_N(e,t));return Pk(r.strings,...r.values)}const jN={allowPolymorphicState:!1,errorHandler:void 0};function V5(e,t){const r=e.instanceState;tt(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&tt(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}class zN extends CustomEvent{_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function Df(){return e=>class extends zN{static type=e;_type=e;constructor(t){super(e,t)}}}function nr(){return Df()}function UN(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const i=Df()([e,n].join("-"));return r[n]=i,r},{}):{}}function qN(e){return e?ut(e,t=>t):{}}function K5(e,t){t in e||MN()(e,t)}function WN(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function dv(e,t){const r=e;function n(s){t?WN(s,e,e.tagName):K5(e,s)}function i(s,a){return n(a),r[a]}return new Proxy({},{get:i,set(s,a,l){n(a);const u=r[a];function d(h){s[a]=h,r[a]=h}const f=e.observablePropertyListenerMap[a];if(u!==l&&Vh(u)&&f&&u.removeListener(f),Vh(l))if(f)l.listen(!1,f);else{let h=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=h,l.listen(!1,h)}else Vh(u)&&(e.observablePropertyListenerMap[a]=void 0);return d(l),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,a){if(a in s)return{get value(){return i(s,a)},configurable:!0,enumerable:!0}},has(s,a){return Reflect.has(s,a)}})}function fv(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid element string name '${n}' in '${e}': element string names must begin with the element's tag name.`)})}function hv(e,t,r){return r?ko(r,i=>({key:i,value:[e,t,i].join("-")}),{}):{}}function VN({hostClassNames:e,cssVars:t}){return{hostClasses:ut(e,(r,n)=>({name:ve(n),selector:ve(`:host(.${n})`)})),cssVars:t}}function KN({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:i}){t&&tt(t).forEach(o=>{const s=t[o],a=r[o];typeof s=="function"&&(s({state:n,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function HN({element:e,eventsMap:t,cssVars:r,slotNamesMap:n,testIdsMap:i}){function o(a){tt(a).forEach(l=>{const u=a[l];e.instanceState[l]=u})}return{cssVars:r,slotNames:n,testIds:i,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function Ci(...e){return Nt.isEmpty(e),t=>{const r=t;if(!T.isObject(r))throw new TypeError("Cannot define element with non-object init: ${init}");return GN({...r,options:{...r.options}})}}function GN(e){if(!T.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!T.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...jN,...e.options},r=UN(e.tagName,e.events),n=qN(e.hostClasses);e.hostClasses&&fv(e.tagName,e.hostClasses),e.cssVars&&fv(e.tagName,e.cssVars);const i=e.cssVars?xi(e.cssVars):{},o=hv(e.tagName,"slot",e.slotNames),s=hv(e.tagName,"test-id",e.testIds),a=typeof e.styles=="function"?e.styles(VN({hostClassNames:n,cssVars:i})):e.styles||z``,l=e.render;function u(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:d,inputs:f}}const d=class extends NN{static elementOptions=t;static tagName=e.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return HN({element:this,eventsMap:r,cssVars:i,slotNamesMap:o,testIdsMap:s})}static assign=u;static events=r;static render=l;static hostClasses=n;static cssVars=i;static init=e;static slotNames=o;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const f=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const g=e.state(f);if(g instanceof Promise)throw new TypeError("init cannot be asynchronous");tt(g).forEach(m=>{K5(this,m),this.instanceState[m]=g[m]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(f)instanceof Promise))throw new TypeError("init cannot be asynchronous");const h=l(f);if(h instanceof Promise)throw new TypeError("render cannot be asynchronous");return KN({host:f.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},h}catch(f){const h=Na(f,`Failed to render ${e.tagName}`);return console.error(h),this._lastRenderError=h,t.errorHandler?.(h),fr(h)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const f=this.createRenderParams();if(e.init(f)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(f=>{T.hasKey(f,"destroy")&&T.isFunction(f.destroy)&&f.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const f=this.createRenderParams();if(e.cleanup(f)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(f){V5(this,f)}observablePropertyListenerMap={};instanceInputs=dv(this,!1);instanceState=dv(this,!t.allowPolymorphicState);constructor(){super(),this.definition=d}};return Object.defineProperties(d,{name:{value:UE(e.tagName,{firstLetterCase:Ql.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,d)),d}class ZN extends Ys{isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function YN(e){return new ZN(e)}const mv=(e,t,r)=>{const n=new Map;for(let i=t;i<=r;i++)n.set(e[i],i);return n},JN=Ai(class extends Ei{constructor(e){if(super(e),e.type!==$f.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const i=[],o=[];let s=0;for(const a of e)i[s]=n?n(a,s):s,o[s]=r(a,s),s++;return{values:o,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const i=CN(e),{values:o,keys:s}=this.dt(t,r,n);if(!Array.isArray(i))return this.ut=s,o;const a=this.ut??=[],l=[];let u,d,f=0,h=i.length-1,g=0,m=o.length-1;for(;f<=h&&g<=m;)if(i[f]===null)f++;else if(i[h]===null)h--;else if(a[f]===s[g])l[g]=Zo(i[f],o[g]),f++,g++;else if(a[h]===s[m])l[m]=Zo(i[h],o[m]),h--,m--;else if(a[f]===s[m])l[m]=Zo(i[f],o[m]),yl(e,l[m+1],i[f]),f++,m--;else if(a[h]===s[g])l[g]=Zo(i[h],o[g]),yl(e,i[f],i[h]),h--,g++;else if(u===void 0&&(u=mv(s,g,m),d=mv(a,f,h)),u.has(a[f]))if(u.has(a[h])){const b=d.get(s[g]),k=b!==void 0?i[b]:null;if(k===null){const x=yl(e,i[f]);Zo(x,o[g]),l[g]=x}else l[g]=Zo(k,o[g]),yl(e,i[f],k),i[b]=null;g++}else Kh(i[h]),h--;else Kh(i[f]),f++;for(;g<=m;){const b=yl(e,l[m+1]);Zo(b,o[g]),l[g++]=b}for(;f<=h;){const b=i[f++];b!==null&&Kh(b)}return this.ut=s,EN(e,l),gn}}),XN=JN;function Af(e,t){return gs(e,t),e.element}function QN(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function gs(e,t){const r=QN(e),n=r?`: in ${r}`:"";if(e.type!==$f.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function eO(e,t){return Ai(class extends Ei{element;constructor(r){super(r),this.element=Qt.instanceOf(Af(r,e),HTMLElement)}render(...r){return t({params:r,directive:this,element:this.element}),gn}})}const ns=eO("attributes",({element:e,params:[t],directive:r})=>{if(!t)return;const i=_a(r,"allAttributesApplied",()=>new Set);tt(t).forEach(o=>{if(o.toLowerCase()!==o)throw new Error(`Cannot assign attribute name with uppercase letters: ${o}`);i.add(o)}),i.forEach(o=>{const s=t[o];s==null||s===!1||s===fe?e.removeAttribute(o):s===""||s===!0?e.setAttribute(o,""):e.setAttribute(o,String(s))})});function tO(e){const t=Ai(class extends Ei{element;constructor(r){super(r),this.element=Af(r,e)}render(r){return this.element.setAttribute(e,r),gn}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function Ee(e,t){return rO(e,t)}const rO=Ai(class extends Ei{element;lastListenerMetaData;constructor(e){super(e),this.element=Af(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>this.lastListenerMetaData?.callback(r)}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),gn}});function nO(e){return Ee("keydown",async t=>{const r=t.code.toLowerCase();(r.includes("enter")||r.includes("return")||r==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}const gv="onDomCreated",yd=Ai(class extends Ei{element;constructor(e){super(e),gs(e,gv)}update(e,[t]){gs(e,gv);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),pv="onDomRendered",iO=Ai(class extends Ei{constructor(e){super(e),gs(e,pv)}update(e,[t]){gs(e,pv);const r=e.element;return window.requestAnimationFrame(()=>t(r)),this.render(t)}render(e){}}),bv="onResize",H5=Ai(class extends Ei{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&oO(this.element,this.callback,e)});callback;constructor(e){super(e),gs(e,bv)}update(e,[t]){gs(e,bv),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function oO(e,t,r){const n=r[0];if(!n)throw console.error(r),new Error("Resize observation triggered but the first entry was empty.");t({target:n.target,contentRect:n.contentRect},e)}function sO(e,t,r,n,i={}){const o=i.useLastResolvedValue?e.lastResolvedValue:e.value;return o instanceof Error?n?n(o):fr(o):T.isPromiseLike(o)||i.useLastResolvedValue&&o===void 0?t:r?r(o):o}function Xn(e,t,r){return IN(e,()=>t,()=>r)}const{attributeDirective:aO}=tO("data-test-id"),Cm=aO;function G5(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return(...n)=>i=>(t(i),Ci(...n)(r(i)))}function lO(e,t){return uO(void 0,e)}const uO=Ai(class extends Ei{element;constructor(e){super(e),this.element=Af(e,"assign")}render(e,t){return V5(this.element,t),gn}}),cO={};function dO(e,t){return t.map((r,n)=>{const i=e[n],o=e[n+1];if(i&&o){const{shouldHaveTagNameHere:s}=Z5(i,o);if(s&&T.isString(r))return{tagName:r,tagInterpolationKey:_a(cO,r,()=>({tagName:r}))}}return r})}function Z5(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function fO(...[e,t,r]){const n=Em(r)?r.definition:r,{isOpeningTag:i,shouldHaveTagNameHere:o}=Z5(e,t),s=Op(n);if(s&&o&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(o&&!s)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!o||!s?void 0:{replacement:n.tagName,getExtraValues(l){const u=Em(l)?l.inputs:void 0;return[i&&u?lO(u):void 0].filter(T.isTruthy)}}}function hO(e){}function mO(e){return W5(e.strings,e.values,fO,hO)}function y(e,...t){const r=dO(e,t),n=f6(e,...r),i=q5(e,r,()=>mO(n));return{...n,strings:i.strings,values:i.values}}function Aa(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if(!t?.length&&!r?.length)return"";const n=[...r||[],""],o=(t??[""]).map((s,a)=>{const l=gO(s,n[a]);return`${s}${l}`});return xk(o.join(""))}function gO(e,t){return t._$litType$!=null||t._$litDirective$!=null?Aa(t):Array.isArray(t)?t.map(n=>Aa(n)).join(""):e.endsWith("=")?`"${t}"`:t}function Y5(e){return ut(e,(t,r)=>r instanceof ot?ve(r.toString({format:"hex"})):Y5(r))}const pO="dodgerblue";function Sm(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Hh({background:e,foreground:t}){return{background:e??new ot(Sm(t)),foreground:t??new ot(Sm(e))}}var vd;(function(e){e.Dark="dark",e.Light="light"})(vd||(vd={}));function bO(e){return e==="black"?"white":"black"}const yO={black:{foregroundFaint1:new ot("#ccc"),foregroundFaint2:new ot("#eee")},white:{foregroundFaint1:new ot("#ccc"),foregroundFaint2:new ot("#eee")}},vO={black:{backgroundFaint1:new ot("#666"),backgroundFaint2:new ot("#444")},white:{backgroundFaint1:new ot("#ccc"),backgroundFaint2:new ot("#fafafa")}};function yv({themeColor:e=pO,themeStyle:t=vd.Light}={}){const r=new ot(e),n=new ot(t===vd.Dark?"black":"white"),i=Sm(n),o=new ot(i),s={nav:{hover:Hh({background:r.clone().set({"hsl.l":93})}),active:Hh({background:r.clone().set({"hsl.l":90})}),selected:Hh({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...vO[bO(i)],foreground:o,...yO[i]}};return Y5(s)}async function hu(e=1){const t=new Wc;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function wO(e,t){return{element:e,children:J5(e)}}function J5(e,t,r){return kO(e).map(n=>{const i=J5(n);return{element:n,children:i}})}function kO(e){return[...e.children,...e.shadowRoot?.children??[]]}function Gh(e){return e.matches(":focus")}function Rp(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:Rp(t)}function X5(e,t){if(t(e))return e;const r=Rp(e);if(r)return X5(r,t)}function zu(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const i=t.name,o=n?.constructor.name,s=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${o}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${o}'.`;throw new Error(s)}return n}function xO(e){const t=Rp(e);return t&&X5(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function $O(e){let t=0,r=document.activeElement||void 0;for(;r;){if(e({depth:t,element:r}))return t;r=r.shadowRoot?.activeElement||void 0,r&&++t}return t}function DO({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const i=t.toLowerCase(),o=e.toLowerCase();e:for(let s=0,a=0;s<n;s++){const l=o.codePointAt(s);for(;a<r;)if(i.codePointAt(a++)===l)continue e;return!1}return!0}const AO=ra(32);function Lc(e){return e.join(AO)}function Q5(e){if(!e.length)return[];const t=Lc(e),r=Q5(e.slice(0,-1));return[t,...r]}const EO=["error","errors"];function CO(e){return EO.includes(e)}function SO({flattenedNodes:e,searchQuery:t}){const r={};function n(i){Object.values(i.children).map(s=>(n(s),Lc(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(i=>{const o=i.entry.errors.length&&CO(t),s=Lc(i.fullUrlBreadcrumbs);if(DO({searchIn:[i.entry.title,...i.entry.descriptionParagraphs.map(l=>T.isString(l)?l:Aa(l))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o||r[s]){const l=Q5(i.fullUrlBreadcrumbs);n(i),l.forEach(u=>r[u]=!0)}else r[s]=!1}),e.filter(i=>{const o=Lc(i.fullUrlBreadcrumbs),s=r[o];if(!T.isBoolean(s))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}class Bp extends Error{name="SpaRouterError"}class vv extends Bp{name="GlobalUrlEventsConsolidationError"}class TO extends Bp{name="SanitizationDepthMaxed"}Ce({paths:[""],search:Jt(je(void 0,ju({keys:"",values:[""]}))),hash:Jt(je(void 0,""))});const MO=Ce({basePath:Jt("",{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:Jt(1,{alsoUndefined:!0}),disableWarnings:Jt(!1,{alsoUndefined:!0}),isPaused:Jt(!1,{alsoUndefined:!0})}),Zh="://";function e$(...e){const t=e.join("/"),[r,n=""]=t.includes(Zh)?t.split(Zh):["",t];let i=!1;const o=n.replace(/\/{2,}/g,"/").split("/").reduce((s,a,l,u)=>{if(i)return s;const d=u[l+1];let f=a;const h=d?.startsWith("?"),g=!a.includes("?")&&h,m=d==="?";if(h||g){i=!0;let b=!1;const k=u.slice(l+2).reduce((x,D)=>(D.includes("#")&&(b=!0),b?x.concat(D):[x,D].join("&")),"");f=[a,d,m?os({value:k,prefix:"&"}):k].join("")}return s.concat(f)},[]);return[r,r?Zh:"",o.join("/")].join("")}var Ea;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(Ea||(Ea={}));var Ca;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(Ca||(Ca={}));const FO=Ce({encoding:Jt(je(void 0,ai(Ea))),searchParamStrategy:Jt(je(void 0,ai(Ca)))});function pc(e,t){return e.map(r=>{if(r!=null)return oa(String(r),t)}).filter(r=>r!=null)}function oa(e,t){return t?.encoding===Ea.Decode?decodeURIComponent(e):t?.encoding===Ea.Encode?encodeURIComponent(e):e}const PO=Ce(ju({keys:"",values:[""]}));function IO(e,t,r){const n=r?.searchParamStrategy===Ca.Clear?{}:ut(e,(s,a)=>Yc(a)),i=ut(t,(s,a)=>{if(r?.searchParamStrategy===Ca.Append){const l=n[s],u=T.isArray(l)?l:[l];if(a){const d=T.isArray(a)?a:[a];return pc([...u,...d],r)}else return pc(u,r)}else return T.isArray(a)?pc(a,r):a?pc([a],r):void 0});return qd({...n,...i},(s,a)=>!!a)}function t$(e,t){return T.isString(e)&&!e.includes("?")?{}:(T.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(o=>{const[s,...a]=LE(o,"=");return[s,a.length?a.join("="):void 0]}).reduce((o,[s,a])=>{const l=r$({options:t,key:s,value:a}),u=_a(o,l.key,()=>[]);return a!=null&&u.push(l.value),o},{})}function NO(e){if(e!=null)return T.isArray(e)?[...e]:e===""?[]:[e]}function OO(e,t){const r=Vt(Object.entries(e),([n,i])=>{const o=NO(i);return o?.length?o.map(s=>{const a=r$({options:t,key:n,value:s});return[a.key,a.value].join("=")}):[n]},(n,[,i])=>i!=null).flat();return r.length?Br({value:r.join("&"),prefix:"?"}):""}function r$({options:e,key:t,value:r}){return{key:oa(t,e),value:oa(String(r),e)}}function n$({hash:e,hostname:t,password:r,pathname:n,port:i,protocol:o,search:s,username:a}){return[o?o+"://":"",a?a+":":"",r?r+"@":"",Ef({hostname:t,port:i}),Lp({hash:e,pathname:n,search:s})].join("")}function i$({pathname:e}){const t=os({value:e,prefix:"/"});return t?t.split("/"):[]}function Lp({hash:e,pathname:t,search:r}){return[Br({value:t,prefix:"/"}),r?Br({value:r,prefix:"?"}):"",e?Br({value:e,prefix:"#"}):""].join("")}function Ef({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function o$({hostname:e,port:t,protocol:r}){return[r,Ef({hostname:e,port:t})].filter(T.isTruthy).join("://")}function sa(e,t){const r=T.isString(e)?os({value:e,prefix:"."}):e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),i=n?Br({value:oa(n,t),prefix:"#"}):"",o=r.replace(/#[^#]*$/,""),s=o.replace(/^[^?]*(?:\?|$)/,""),a=s?Br({value:oa(s,t),prefix:"?"}):"",l=o.replace(/\?[^?]*$/,""),u=l.includes("://")?l.replace(/:\/\/.*$/,""):"",d=l.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),f=d.replace(/@.*/,""),h=d.replace(/^[^@]*@/,""),g=f!==h,[m,...b]=g?f.split(":").reverse():[],k=b.toReversed().join("").replace(/[/:]/g,"")||"",x=m?.replace(/[/:]/g,"")||"",D=BE(h.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),C=D[0]?.endsWith("]")?"":D[1]===":"&&D[0]||"",O=h.replace(new RegExp(`:${C}($|/)`),"$1").replace(/\/.*/,""),H=h.replace(/^[^/]*(\/|$)/,"$1"),ee=oa(H.replace(/^[^/]*(?:\/|$)/,"/"),t),ie=Ef({hostname:O,port:C}),X=o$({hostname:O,port:C,protocol:u}),ye=n$({hash:i,hostname:O,password:x,pathname:ee,port:C,protocol:u,search:a,username:k}),se=t$(a),$e=i$({pathname:ee});return{fullPath:Lp({hash:i,pathname:ee,search:a}),hash:i,host:ie,hostname:O,href:ye,origin:X,password:x,pathname:ee,paths:$e,port:C,protocol:u,search:a,searchParams:se,username:k}}Ce({hash:Jt(je(void 0,"")),search:Jt(je(void 0,"",ju({keys:"",values:je(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:Jt(je(void 0,"")),pathname:Jt(je(void 0,"")),paths:Jt(je(void 0,[""])),protocol:Jt(je(void 0,"")),username:Jt(je(void 0,"")),password:Jt(je(void 0,"")),port:Jt(je(void 0,"",-1))});function RO(e,t,r){const n=!!r,i=t==null||mo(t,FO,{allowExtraKeys:!1}),o=i?sa(""):T.instanceOf(e,URL)||T.isString(e)?sa(e):e,s=i?e:t,a=T.isString(s)&&s.startsWith("."),l=T.isString(s)||T.instanceOf(s,URL)?qd(sa(s),(b,k)=>T.isTruthy(k)):s,u=n?r:i?t:void 0,d=ut(o,(b,k)=>{if(!T.hasKey(l,b))return k;const x=l[b];return T.isNumber(x)?String(x):T.isString(x)?b==="hash"&&x?Br({value:x,prefix:"#"}):b==="pathname"?Br({value:x,prefix:"/"}):x:k});T.hasKey(l,"paths")&&l.paths&&(d.pathname=e$(a?o.pathname:"",...l.paths));const f=T.isString(l.search)?t$(Br({value:l.search,prefix:"?"})):Kn(l.search||{}),h=IO(d.searchParams,f,{...u,encoding:Ea.None}),g=OO(h,u);return{...d,searchParams:h,search:g,paths:i$(d),fullPath:Lp(d),host:Ef(d),origin:o$(d),href:n$({...d,search:g})}}const BO=Ce({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:PO,hash:"",fullPath:"/",href:"/"});({...BO.default});const LO=0;function s$(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==LO)}const Cf="locationchange",Ui=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const wv=Ui?.pushState;function kv(...e){if(!wv)return;const t=wv.apply(Ui,e);return globalThis.dispatchEvent(new Event(Cf)),t}const xv=Ui?.replaceState;function $v(...e){if(!xv)return;const t=xv.apply(Ui,e);return globalThis.dispatchEvent(new Event(Cf)),t}function _O(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!Ui)){{if(Ui.pushState===kv)throw new vv("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(Ui.replaceState===$v)throw new vv("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,Ui.pushState=kv,Ui.replaceState=$v,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Cf))})}}function bc(e,t){const r=sa(e),n=os({value:os({value:r.pathname,prefix:Br({value:t||"",prefix:"/"})}),prefix:"/"}),i=n?n.split("/"):[],o=Object.keys(r.searchParams).length?r.searchParams:void 0,s=r.hash?os({value:r.hash,prefix:"#"}):void 0;return{paths:i,search:o,hash:s}}class jO{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){pd(t,MO),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new B5({defaultValue:r,equalityCheck:()=>!1}),_O(),this.removeGlobalListener=Dk(globalThis,Cf,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new TO("Looping route sanitization detected; aborting window URL change listener.");const n=bc(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(n);T.jsonEquals(n,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:i}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:e$(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(bc(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r={...bc(globalThis.location.href,this.params.basePath),...t},n=this.sanitizeRoute(r),o=this.routeIncludesBasePath(bc(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return RO(globalThis.location.href,{paths:o.paths,search:o.search,hash:o.hash?Br({value:o.hash,prefix:"#"}):""},{searchParamStrategy:Ca.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:i}=sa(n);return this.params.isPaused||!r.force&&T.jsonEquals(sa(globalThis.location.href).fullPath,i)?!1:r.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,r){return s$(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new Bp(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function zO(e){return new jO({basePath:e,sanitizeRoute(t){return{paths:UO(t.paths),hash:void 0,search:void 0}}})}function UO(e){const t=e[0];if(T.isEnumValue(t,Jr)){if(t===Jr.Book)return[Jr.Book,...e.slice(1)];if(t===Jr.Search)return e[1]?[t,e[1]]:[Jr.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return fa.paths}const wd=Df()("element-book-change-route"),v=xi({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"});function ce({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const a$=ce({name:"Check24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function Dv(e){return T.isPrimitive(e)||e instanceof Wi?String(e):e.default}function bi(e,t,r,n){const i=`${r.prefix}-default-fg`,o=`${r.prefix}-default-bg`;if(T.isPrimitive(t)||t instanceof Wi)return t;if("refDefaultBackground"in t)return`var(--${o}, ${Dv(r.background)})`;if("refDefaultForeground"in t)return`var(--${i}, ${Dv(r.foreground)})`;if("refBackground"in t||"refForeground"in t){const s=T.hasKey(t,"refBackground")?"refBackground":T.hasKey(t,"refForeground")?"refForeground":void 0,a=s&&T.hasKey(t,s)?t[s]:void 0,l=s==="refBackground"?"background":"foreground",u=a&&n[a];if(!u)throw new Error(`Color theme ${s} reference '${a}' does not exist. (Referenced from '${e}'.)`);const d=u[l]||(l==="foreground"?bi(i,r.foreground,r,n):bi(o,r.background,r,n));return`var(--${a}-${l==="foreground"?"fg":"bg"}, ${bi(a,d,r,n)})`}else return t.value}const Ar="theme-default";function l$(e,t){try{if(Ar in t)throw new Error(`Cannot define theme color by name '${Ar}', it is used internally.`);const r=`${e.prefix}-default-fg`,n=`${e.prefix}-default-bg`,i=`${e.prefix}-default-inverse-fg`,o=`${e.prefix}-default-inverse-bg`,s={[r]:bi(r,e.foreground,e,t),[n]:bi(n,e.background,e,t),[i]:bi(i,e.background,e,t),[o]:bi(o,e.foreground,e,t)},a=xi(s),l=ki(t).reduce((m,[b,k])=>{const x=Av(b),D=k.foreground?bi([b,"foreground"].join(" "),k.foreground,e,t):`var(${a[r].name}, ${a[r].default})`,C=k.background?bi([b,"background"].join(" "),k.background,e,t):`var(${a[n].name}, ${a[n].default})`;return m[x.foreground]=D,m[x.background]=C,m[x.foregroundInverse]=`var(--${x.background}, ${C})`,m[x.backgroundInverse]=`var(--${x.foreground}, ${D})`,m},{}),u=xi(l),d={},f={};ki(t).forEach(([m,b])=>{Nt.isString(m);const k=Av(m),x=u[k.foreground],D=u[k.background],C=u[k.foregroundInverse],P=u[k.backgroundInverse];Nt.isDefined(x),Nt.isDefined(D),Nt.isDefined(C),Nt.isDefined(P),d[m]={foreground:x,background:D,init:b,name:m},f[m]={foreground:C,background:P,init:b,name:m}});const h={foreground:a[r],background:a[n],init:e,name:Ar},g={...h,foreground:a[i],background:a[o]};return{colors:{[Ar]:h,...d},inverse:{[Ar]:g,...f},init:{colors:t,default:e},prefix:e.prefix}}catch(r){throw globalThis.setTimeout(()=>Jc.error(r)),r}}function Av(e){return{foreground:[e,"fg"].join("-"),background:[e,"bg"].join("-"),foregroundInverse:[e,"inverse","fg"].join("-"),backgroundInverse:[e,"inverse","bg"].join("-")}}const c=xi({"vira-red-5":"#ffe9e6","vira-red-10":"#ffd9d5","vira-red-20":"#ffc1bc","vira-red-30":"#ffa7a2","vira-red-40":"#ff8886","vira-red-50":"#ff6065","vira-red-60":"#f9163a","vira-red-70":"#d2001d","vira-red-80":"#a60012","vira-red-90":"#760003","vira-orange-5":"#ffebd1","vira-orange-10":"#ffdda3","vira-orange-20":"#ffc66c","vira-orange-30":"#ffac36","vira-orange-40":"#f79300","vira-orange-50":"#e17e00","vira-orange-60":"#c96900","vira-orange-70":"#ab5600","vira-orange-80":"#8b4100","vira-orange-90":"#6a2500","vira-yellow-5":"#f7eeca","vira-yellow-10":"#f6e192","vira-yellow-20":"#f2cd20","vira-yellow-30":"#dfbb00","vira-yellow-40":"#cca800","vira-yellow-50":"#b59500","vira-yellow-60":"#9d8100","vira-yellow-70":"#856b00","vira-yellow-80":"#6a5400","vira-yellow-90":"#4c3b00","vira-green-5":"#d3f8cf","vira-green-10":"#a3f59b","vira-green-20":"#4fed46","vira-green-30":"#36d92e","vira-green-40":"#0dc501","vira-green-50":"#00af00","vira-green-60":"#009800","vira-green-70":"#007f00","vira-green-80":"#006400","vira-green-90":"#004700","vira-teal-5":"#d4f5f3","vira-teal-10":"#a1efeb","vira-teal-20":"#45e5de","vira-teal-30":"#2ad2cc","vira-teal-40":"#04beb8","vira-teal-50":"#00a9a3","vira-teal-60":"#00928d","vira-teal-70":"#007a77","vira-teal-80":"#00615e","vira-teal-90":"#004442","vira-blue-5":"#daf2ff","vira-blue-10":"#bde8ff","vira-blue-20":"#98d8ff","vira-blue-30":"#77c6ff","vira-blue-40":"#4cb2ff","vira-blue-50":"#299cf9","vira-blue-60":"#0086e0","vira-blue-70":"#006ec7","vira-blue-80":"#0054aa","vira-blue-90":"#00358a","vira-purple-5":"#f6eaff","vira-purple-10":"#eddaff","vira-purple-20":"#e6c3ff","vira-purple-30":"#d7adff","vira-purple-40":"#c795ff","vira-purple-50":"#b77aff","vira-purple-60":"#a55aff","vira-purple-70":"#8f3de9","vira-purple-80":"#7514cb","vira-purple-90":"#500095","vira-pink-5":"#ffe7fb","vira-pink-10":"#ffd5fa","vira-pink-20":"#ffbaf4","vira-pink-30":"#ff9ee6","vira-pink-40":"#fa82cc","vira-pink-50":"#e46eb7","vira-pink-60":"#cc59a2","vira-pink-70":"#b2418b","vira-pink-80":"#962471","vira-pink-90":"#6e004f","vira-grey-0":"#f3f6f6","vira-grey-5":"#eceff0","vira-grey-10":"#dce2e6","vira-grey-20":"#c7d2d7","vira-grey-30":"#b6c0c5","vira-grey-40":"#a4adb2","vira-grey-50":"#909a9f","vira-grey-60":"#7c868a","vira-grey-70":"#677074","vira-grey-80":"#50595d","vira-grey-90":"#363f43"});function Yh({originalTheme:e,layerKey:t,themeColor:r,override:n,overrideValues:i}){const o=n?.[t];o&&(i[String(r[t].name)]=String(bi(t,o,e.init.default,e.init.colors)))}function qO(e,t,{defaultOverride:r,colorOverrides:n}){const i={};r&&tt(r).forEach(l=>{Yh({originalTheme:e,layerKey:l,override:r,themeColor:e.colors[Ar],overrideValues:i})});const o={};n&&ki(n).forEach(([l,u])=>{const d=e.colors[l];if(!d)throw new Error(`Override color name '${l}' does not exist in the theme being overridden.`);Yh({originalTheme:e,layerKey:"foreground",override:u,themeColor:d,overrideValues:o}),Yh({originalTheme:e,layerKey:"background",override:u,themeColor:d,overrideValues:o})});const s=ut(e.init.colors,(l,u)=>{const d=n?.[l];return{...u,...d}}),a=l$({...e.init.default,...r},s);return{name:t,overrides:{...i,...o},originalTheme:e,asTheme:a}}const le=l$({foreground:"black",background:"white",prefix:"vira"},{"vira-red-foreground-small-body":{foreground:c["vira-red-90"]},"vira-red-foreground-body":{foreground:c["vira-red-80"]},"vira-red-foreground-non-body":{foreground:c["vira-red-60"]},"vira-red-foreground-header":{foreground:c["vira-red-50"]},"vira-red-foreground-placeholder":{foreground:c["vira-red-30"]},"vira-red-foreground-decoration":{foreground:c["vira-red-20"]},"vira-red-foreground-invisible":{foreground:c["vira-red-10"]},"vira-red-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-90"]},"vira-red-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-80"]},"vira-red-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-60"]},"vira-red-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-red-40"]},"vira-red-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-red-30"]},"vira-red-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-red-20"]},"vira-red-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-red-5"]},"vira-red-behind-fg-small-body":{background:c["vira-red-5"]},"vira-red-behind-fg-body":{background:c["vira-red-20"]},"vira-red-behind-fg-non-body":{background:c["vira-red-30"]},"vira-red-behind-fg-header":{background:c["vira-red-50"]},"vira-red-behind-fg-placeholder":{background:c["vira-red-60"]},"vira-red-behind-fg-decoration":{background:c["vira-red-80"]},"vira-red-behind-fg-invisible":{background:c["vira-red-90"]},"vira-red-on-self-body":{foreground:c["vira-red-90"],background:c["vira-red-10"]},"vira-red-on-self-non-body":{foreground:c["vira-red-90"],background:c["vira-red-20"]},"vira-red-on-self-header":{foreground:c["vira-red-90"],background:c["vira-red-40"]},"vira-red-on-self-placeholder":{foreground:c["vira-red-90"],background:c["vira-red-50"]},"vira-red-on-self-decoration":{foreground:c["vira-red-90"],background:c["vira-red-70"]},"vira-red-on-self-invisible":{foreground:c["vira-red-90"],background:c["vira-red-80"]},"vira-orange-foreground-small-body":{foreground:c["vira-orange-90"]},"vira-orange-foreground-body":{foreground:c["vira-orange-80"]},"vira-orange-foreground-non-body":{foreground:c["vira-orange-60"]},"vira-orange-foreground-header":{foreground:c["vira-orange-50"]},"vira-orange-foreground-placeholder":{foreground:c["vira-orange-40"]},"vira-orange-foreground-decoration":{foreground:c["vira-orange-20"]},"vira-orange-foreground-invisible":{foreground:c["vira-orange-10"]},"vira-orange-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-orange-90"]},"vira-orange-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-orange-80"]},"vira-orange-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-orange-60"]},"vira-orange-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-orange-40"]},"vira-orange-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-orange-30"]},"vira-orange-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-orange-20"]},"vira-orange-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-orange-5"]},"vira-orange-behind-fg-small-body":{background:c["vira-orange-5"]},"vira-orange-behind-fg-body":{background:c["vira-orange-20"]},"vira-orange-behind-fg-non-body":{background:c["vira-orange-30"]},"vira-orange-behind-fg-header":{background:c["vira-orange-50"]},"vira-orange-behind-fg-placeholder":{background:c["vira-orange-60"]},"vira-orange-behind-fg-decoration":{background:c["vira-orange-80"]},"vira-orange-behind-fg-invisible":{background:c["vira-orange-90"]},"vira-orange-on-self-body":{foreground:c["vira-orange-90"],background:c["vira-orange-10"]},"vira-orange-on-self-non-body":{foreground:c["vira-orange-90"],background:c["vira-orange-20"]},"vira-orange-on-self-header":{foreground:c["vira-orange-90"],background:c["vira-orange-40"]},"vira-orange-on-self-placeholder":{foreground:c["vira-orange-90"],background:c["vira-orange-50"]},"vira-orange-on-self-decoration":{foreground:c["vira-orange-90"],background:c["vira-orange-70"]},"vira-orange-on-self-invisible":{foreground:c["vira-orange-90"],background:c["vira-orange-80"]},"vira-yellow-foreground-small-body":{foreground:c["vira-yellow-90"]},"vira-yellow-foreground-body":{foreground:c["vira-yellow-80"]},"vira-yellow-foreground-non-body":{foreground:c["vira-yellow-60"]},"vira-yellow-foreground-header":{foreground:c["vira-yellow-50"]},"vira-yellow-foreground-placeholder":{foreground:c["vira-yellow-40"]},"vira-yellow-foreground-decoration":{foreground:c["vira-yellow-20"]},"vira-yellow-foreground-invisible":{foreground:c["vira-yellow-5"]},"vira-yellow-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-90"]},"vira-yellow-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-70"]},"vira-yellow-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-60"]},"vira-yellow-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-40"]},"vira-yellow-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-30"]},"vira-yellow-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-20"]},"vira-yellow-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-5"]},"vira-yellow-behind-fg-small-body":{background:c["vira-yellow-5"]},"vira-yellow-behind-fg-body":{background:c["vira-yellow-20"]},"vira-yellow-behind-fg-non-body":{background:c["vira-yellow-30"]},"vira-yellow-behind-fg-header":{background:c["vira-yellow-50"]},"vira-yellow-behind-fg-placeholder":{background:c["vira-yellow-60"]},"vira-yellow-behind-fg-decoration":{background:c["vira-yellow-80"]},"vira-yellow-behind-fg-invisible":{background:c["vira-yellow-90"]},"vira-yellow-on-self-body":{foreground:c["vira-yellow-90"],background:c["vira-yellow-10"]},"vira-yellow-on-self-non-body":{foreground:c["vira-yellow-90"],background:c["vira-yellow-20"]},"vira-yellow-on-self-header":{foreground:c["vira-yellow-90"],background:c["vira-yellow-40"]},"vira-yellow-on-self-placeholder":{foreground:c["vira-yellow-90"],background:c["vira-yellow-50"]},"vira-yellow-on-self-decoration":{foreground:c["vira-yellow-90"],background:c["vira-yellow-70"]},"vira-yellow-on-self-invisible":{foreground:c["vira-yellow-90"],background:c["vira-yellow-80"]},"vira-green-foreground-small-body":{foreground:c["vira-green-90"]},"vira-green-foreground-body":{foreground:c["vira-green-80"]},"vira-green-foreground-non-body":{foreground:c["vira-green-60"]},"vira-green-foreground-header":{foreground:c["vira-green-50"]},"vira-green-foreground-placeholder":{foreground:c["vira-green-30"]},"vira-green-foreground-decoration":{foreground:c["vira-green-20"]},"vira-green-foreground-invisible":{foreground:c["vira-green-5"]},"vira-green-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-90"]},"vira-green-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-70"]},"vira-green-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-60"]},"vira-green-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-green-40"]},"vira-green-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-green-30"]},"vira-green-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-green-20"]},"vira-green-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-green-5"]},"vira-green-behind-fg-small-body":{background:c["vira-green-5"]},"vira-green-behind-fg-body":{background:c["vira-green-20"]},"vira-green-behind-fg-non-body":{background:c["vira-green-30"]},"vira-green-behind-fg-header":{background:c["vira-green-50"]},"vira-green-behind-fg-placeholder":{background:c["vira-green-60"]},"vira-green-behind-fg-decoration":{background:c["vira-green-80"]},"vira-green-behind-fg-invisible":{background:c["vira-green-90"]},"vira-green-on-self-body":{foreground:c["vira-green-90"],background:c["vira-green-10"]},"vira-green-on-self-non-body":{foreground:c["vira-green-90"],background:c["vira-green-20"]},"vira-green-on-self-header":{foreground:c["vira-green-90"],background:c["vira-green-40"]},"vira-green-on-self-placeholder":{foreground:c["vira-green-90"],background:c["vira-green-50"]},"vira-green-on-self-decoration":{foreground:c["vira-green-90"],background:c["vira-green-70"]},"vira-green-on-self-invisible":{foreground:c["vira-green-90"],background:c["vira-green-80"]},"vira-teal-foreground-small-body":{foreground:c["vira-teal-90"]},"vira-teal-foreground-body":{foreground:c["vira-teal-80"]},"vira-teal-foreground-non-body":{foreground:c["vira-teal-60"]},"vira-teal-foreground-header":{foreground:c["vira-teal-50"]},"vira-teal-foreground-placeholder":{foreground:c["vira-teal-30"]},"vira-teal-foreground-decoration":{foreground:c["vira-teal-20"]},"vira-teal-foreground-invisible":{foreground:c["vira-teal-5"]},"vira-teal-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-90"]},"vira-teal-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-80"]},"vira-teal-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-60"]},"vira-teal-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-teal-40"]},"vira-teal-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-teal-30"]},"vira-teal-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-teal-20"]},"vira-teal-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-teal-5"]},"vira-teal-behind-fg-small-body":{background:c["vira-teal-5"]},"vira-teal-behind-fg-body":{background:c["vira-teal-20"]},"vira-teal-behind-fg-non-body":{background:c["vira-teal-30"]},"vira-teal-behind-fg-header":{background:c["vira-teal-50"]},"vira-teal-behind-fg-placeholder":{background:c["vira-teal-60"]},"vira-teal-behind-fg-decoration":{background:c["vira-teal-80"]},"vira-teal-behind-fg-invisible":{background:c["vira-teal-90"]},"vira-teal-on-self-body":{foreground:c["vira-teal-90"],background:c["vira-teal-10"]},"vira-teal-on-self-non-body":{foreground:c["vira-teal-90"],background:c["vira-teal-20"]},"vira-teal-on-self-header":{foreground:c["vira-teal-90"],background:c["vira-teal-40"]},"vira-teal-on-self-placeholder":{foreground:c["vira-teal-90"],background:c["vira-teal-50"]},"vira-teal-on-self-decoration":{foreground:c["vira-teal-90"],background:c["vira-teal-70"]},"vira-teal-on-self-invisible":{foreground:c["vira-teal-90"],background:c["vira-teal-80"]},"vira-blue-foreground-small-body":{foreground:c["vira-blue-90"]},"vira-blue-foreground-body":{foreground:c["vira-blue-80"]},"vira-blue-foreground-non-body":{foreground:c["vira-blue-70"]},"vira-blue-foreground-header":{foreground:c["vira-blue-50"]},"vira-blue-foreground-placeholder":{foreground:c["vira-blue-30"]},"vira-blue-foreground-decoration":{foreground:c["vira-blue-20"]},"vira-blue-foreground-invisible":{foreground:c["vira-blue-10"]},"vira-blue-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-90"]},"vira-blue-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-80"]},"vira-blue-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-60"]},"vira-blue-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-blue-40"]},"vira-blue-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-blue-30"]},"vira-blue-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-blue-20"]},"vira-blue-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-blue-5"]},"vira-blue-behind-fg-small-body":{background:c["vira-blue-5"]},"vira-blue-behind-fg-body":{background:c["vira-blue-20"]},"vira-blue-behind-fg-non-body":{background:c["vira-blue-30"]},"vira-blue-behind-fg-header":{background:c["vira-blue-50"]},"vira-blue-behind-fg-placeholder":{background:c["vira-blue-60"]},"vira-blue-behind-fg-decoration":{background:c["vira-blue-80"]},"vira-blue-behind-fg-invisible":{background:c["vira-blue-90"]},"vira-blue-on-self-body":{foreground:c["vira-blue-90"],background:c["vira-blue-10"]},"vira-blue-on-self-non-body":{foreground:c["vira-blue-90"],background:c["vira-blue-20"]},"vira-blue-on-self-header":{foreground:c["vira-blue-90"],background:c["vira-blue-40"]},"vira-blue-on-self-placeholder":{foreground:c["vira-blue-90"],background:c["vira-blue-50"]},"vira-blue-on-self-decoration":{foreground:c["vira-blue-90"],background:c["vira-blue-70"]},"vira-blue-on-self-invisible":{foreground:c["vira-blue-90"],background:c["vira-blue-80"]},"vira-purple-foreground-small-body":{foreground:c["vira-purple-90"]},"vira-purple-foreground-body":{foreground:c["vira-purple-80"]},"vira-purple-foreground-non-body":{foreground:c["vira-purple-60"]},"vira-purple-foreground-header":{foreground:c["vira-purple-50"]},"vira-purple-foreground-placeholder":{foreground:c["vira-purple-30"]},"vira-purple-foreground-decoration":{foreground:c["vira-purple-20"]},"vira-purple-foreground-invisible":{foreground:c["vira-purple-5"]},"vira-purple-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-90"]},"vira-purple-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-80"]},"vira-purple-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-60"]},"vira-purple-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-purple-40"]},"vira-purple-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-purple-30"]},"vira-purple-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-purple-20"]},"vira-purple-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-purple-5"]},"vira-purple-behind-fg-small-body":{background:c["vira-purple-5"]},"vira-purple-behind-fg-body":{background:c["vira-purple-20"]},"vira-purple-behind-fg-non-body":{background:c["vira-purple-30"]},"vira-purple-behind-fg-header":{background:c["vira-purple-50"]},"vira-purple-behind-fg-placeholder":{background:c["vira-purple-60"]},"vira-purple-behind-fg-decoration":{background:c["vira-purple-80"]},"vira-purple-behind-fg-invisible":{background:c["vira-purple-90"]},"vira-purple-on-self-body":{foreground:c["vira-purple-90"],background:c["vira-purple-10"]},"vira-purple-on-self-non-body":{foreground:c["vira-purple-90"],background:c["vira-purple-20"]},"vira-purple-on-self-header":{foreground:c["vira-purple-90"],background:c["vira-purple-40"]},"vira-purple-on-self-placeholder":{foreground:c["vira-purple-90"],background:c["vira-purple-50"]},"vira-purple-on-self-decoration":{foreground:c["vira-purple-90"],background:c["vira-purple-70"]},"vira-purple-on-self-invisible":{foreground:c["vira-purple-90"],background:c["vira-purple-80"]},"vira-pink-foreground-small-body":{foreground:c["vira-pink-90"]},"vira-pink-foreground-body":{foreground:c["vira-pink-80"]},"vira-pink-foreground-non-body":{foreground:c["vira-pink-60"]},"vira-pink-foreground-header":{foreground:c["vira-pink-50"]},"vira-pink-foreground-placeholder":{foreground:c["vira-pink-40"]},"vira-pink-foreground-decoration":{foreground:c["vira-pink-20"]},"vira-pink-foreground-invisible":{foreground:c["vira-pink-10"]},"vira-pink-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-90"]},"vira-pink-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-80"]},"vira-pink-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-60"]},"vira-pink-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-pink-40"]},"vira-pink-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-pink-30"]},"vira-pink-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-pink-20"]},"vira-pink-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-pink-5"]},"vira-pink-behind-fg-small-body":{background:c["vira-pink-5"]},"vira-pink-behind-fg-body":{background:c["vira-pink-20"]},"vira-pink-behind-fg-non-body":{background:c["vira-pink-30"]},"vira-pink-behind-fg-header":{background:c["vira-pink-50"]},"vira-pink-behind-fg-placeholder":{background:c["vira-pink-60"]},"vira-pink-behind-fg-decoration":{background:c["vira-pink-80"]},"vira-pink-behind-fg-invisible":{background:c["vira-pink-90"]},"vira-pink-on-self-body":{foreground:c["vira-pink-90"],background:c["vira-pink-10"]},"vira-pink-on-self-non-body":{foreground:c["vira-pink-90"],background:c["vira-pink-20"]},"vira-pink-on-self-header":{foreground:c["vira-pink-90"],background:c["vira-pink-40"]},"vira-pink-on-self-placeholder":{foreground:c["vira-pink-90"],background:c["vira-pink-50"]},"vira-pink-on-self-decoration":{foreground:c["vira-pink-90"],background:c["vira-pink-70"]},"vira-pink-on-self-invisible":{foreground:c["vira-pink-90"],background:c["vira-pink-80"]},"vira-grey-foreground-small-body":{foreground:c["vira-grey-90"]},"vira-grey-foreground-body":{foreground:c["vira-grey-80"]},"vira-grey-foreground-non-body":{foreground:c["vira-grey-60"]},"vira-grey-foreground-header":{foreground:c["vira-grey-50"]},"vira-grey-foreground-placeholder":{foreground:c["vira-grey-30"]},"vira-grey-foreground-decoration":{foreground:c["vira-grey-20"]},"vira-grey-foreground-invisible":{foreground:c["vira-grey-5"]},"vira-grey-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-90"]},"vira-grey-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-80"]},"vira-grey-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-60"]},"vira-grey-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-grey-40"]},"vira-grey-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-grey-30"]},"vira-grey-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-grey-20"]},"vira-grey-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-grey-5"]},"vira-grey-behind-fg-small-body":{background:c["vira-grey-5"]},"vira-grey-behind-fg-body":{background:c["vira-grey-20"]},"vira-grey-behind-fg-non-body":{background:c["vira-grey-30"]},"vira-grey-behind-fg-header":{background:c["vira-grey-50"]},"vira-grey-behind-fg-placeholder":{background:c["vira-grey-60"]},"vira-grey-behind-fg-decoration":{background:c["vira-grey-80"]},"vira-grey-behind-fg-invisible":{background:c["vira-grey-90"]},"vira-grey-on-self-body":{foreground:c["vira-grey-90"],background:c["vira-grey-10"]},"vira-grey-on-self-non-body":{foreground:c["vira-grey-90"],background:c["vira-grey-20"]},"vira-grey-on-self-header":{foreground:c["vira-grey-90"],background:c["vira-grey-40"]},"vira-grey-on-self-placeholder":{foreground:c["vira-grey-90"],background:c["vira-grey-50"]},"vira-grey-on-self-decoration":{foreground:c["vira-grey-90"],background:c["vira-grey-70"]},"vira-grey-on-self-invisible":{foreground:c["vira-grey-90"],background:c["vira-grey-80"]}});qO(le,"dark",{defaultOverride:{foreground:"white",background:"black"},colorOverrides:{"vira-red-foreground-small-body":{foreground:c["vira-red-5"]},"vira-red-foreground-body":{foreground:c["vira-red-20"]},"vira-red-foreground-non-body":{foreground:c["vira-red-30"]},"vira-red-foreground-placeholder":{foreground:c["vira-red-60"]},"vira-red-foreground-decoration":{foreground:c["vira-red-80"]},"vira-red-foreground-invisible":{foreground:c["vira-red-90"]},"vira-red-behind-bg-small-body":{background:c["vira-red-5"]},"vira-red-behind-bg-body":{background:c["vira-red-20"]},"vira-red-behind-bg-non-body":{background:c["vira-red-30"]},"vira-red-behind-bg-header":{background:c["vira-red-50"]},"vira-red-behind-bg-placeholder":{background:c["vira-red-60"]},"vira-red-behind-bg-decoration":{background:c["vira-red-80"]},"vira-red-behind-bg-invisible":{background:c["vira-red-90"]},"vira-red-behind-fg-small-body":{background:c["vira-red-90"]},"vira-red-behind-fg-body":{background:c["vira-red-80"]},"vira-red-behind-fg-non-body":{background:c["vira-red-60"]},"vira-red-behind-fg-header":{background:c["vira-red-40"]},"vira-red-behind-fg-placeholder":{background:c["vira-red-30"]},"vira-red-behind-fg-decoration":{background:c["vira-red-20"]},"vira-red-behind-fg-invisible":{background:c["vira-red-5"]},"vira-red-on-self-body":{foreground:c["vira-red-5"],background:c["vira-red-90"]},"vira-red-on-self-non-body":{foreground:c["vira-red-5"],background:c["vira-red-70"]},"vira-red-on-self-header":{foreground:c["vira-red-5"],background:c["vira-red-60"]},"vira-red-on-self-placeholder":{foreground:c["vira-red-5"],background:c["vira-red-40"]},"vira-red-on-self-decoration":{foreground:c["vira-red-5"],background:c["vira-red-30"]},"vira-red-on-self-invisible":{foreground:c["vira-red-5"],background:c["vira-red-10"]},"vira-orange-foreground-small-body":{foreground:c["vira-orange-5"]},"vira-orange-foreground-body":{foreground:c["vira-orange-20"]},"vira-orange-foreground-non-body":{foreground:c["vira-orange-30"]},"vira-orange-foreground-placeholder":{foreground:c["vira-orange-60"]},"vira-orange-foreground-decoration":{foreground:c["vira-orange-80"]},"vira-orange-foreground-invisible":{foreground:c["vira-orange-90"]},"vira-orange-behind-bg-small-body":{background:c["vira-orange-5"]},"vira-orange-behind-bg-body":{background:c["vira-orange-20"]},"vira-orange-behind-bg-non-body":{background:c["vira-orange-30"]},"vira-orange-behind-bg-header":{background:c["vira-orange-50"]},"vira-orange-behind-bg-placeholder":{background:c["vira-orange-60"]},"vira-orange-behind-bg-decoration":{background:c["vira-orange-80"]},"vira-orange-behind-bg-invisible":{background:c["vira-orange-90"]},"vira-orange-behind-fg-small-body":{background:c["vira-orange-90"]},"vira-orange-behind-fg-body":{background:c["vira-orange-80"]},"vira-orange-behind-fg-non-body":{background:c["vira-orange-60"]},"vira-orange-behind-fg-header":{background:c["vira-orange-40"]},"vira-orange-behind-fg-placeholder":{background:c["vira-orange-30"]},"vira-orange-behind-fg-decoration":{background:c["vira-orange-20"]},"vira-orange-behind-fg-invisible":{background:c["vira-orange-5"]},"vira-orange-on-self-body":{foreground:c["vira-orange-5"],background:c["vira-orange-90"]},"vira-orange-on-self-non-body":{foreground:c["vira-orange-5"],background:c["vira-orange-70"]},"vira-orange-on-self-header":{foreground:c["vira-orange-5"],background:c["vira-orange-60"]},"vira-orange-on-self-placeholder":{foreground:c["vira-orange-5"],background:c["vira-orange-40"]},"vira-orange-on-self-decoration":{foreground:c["vira-orange-5"],background:c["vira-orange-30"]},"vira-orange-on-self-invisible":{foreground:c["vira-orange-5"],background:c["vira-orange-10"]},"vira-yellow-foreground-small-body":{foreground:c["vira-yellow-5"]},"vira-yellow-foreground-body":{foreground:c["vira-yellow-20"]},"vira-yellow-foreground-non-body":{foreground:c["vira-yellow-30"]},"vira-yellow-foreground-placeholder":{foreground:c["vira-yellow-60"]},"vira-yellow-foreground-decoration":{foreground:c["vira-yellow-80"]},"vira-yellow-foreground-invisible":{foreground:c["vira-yellow-90"]},"vira-yellow-behind-bg-small-body":{background:c["vira-yellow-5"]},"vira-yellow-behind-bg-body":{background:c["vira-yellow-20"]},"vira-yellow-behind-bg-non-body":{background:c["vira-yellow-30"]},"vira-yellow-behind-bg-header":{background:c["vira-yellow-50"]},"vira-yellow-behind-bg-placeholder":{background:c["vira-yellow-60"]},"vira-yellow-behind-bg-decoration":{background:c["vira-yellow-80"]},"vira-yellow-behind-bg-invisible":{background:c["vira-yellow-90"]},"vira-yellow-behind-fg-small-body":{background:c["vira-yellow-90"]},"vira-yellow-behind-fg-body":{background:c["vira-yellow-70"]},"vira-yellow-behind-fg-non-body":{background:c["vira-yellow-60"]},"vira-yellow-behind-fg-header":{background:c["vira-yellow-40"]},"vira-yellow-behind-fg-placeholder":{background:c["vira-yellow-30"]},"vira-yellow-behind-fg-decoration":{background:c["vira-yellow-20"]},"vira-yellow-behind-fg-invisible":{background:c["vira-yellow-5"]},"vira-yellow-on-self-body":{foreground:c["vira-yellow-5"],background:c["vira-yellow-90"]},"vira-yellow-on-self-non-body":{foreground:c["vira-yellow-5"],background:c["vira-yellow-70"]},"vira-yellow-on-self-header":{foreground:c["vira-yellow-5"],background:c["vira-yellow-60"]},"vira-yellow-on-self-placeholder":{foreground:c["vira-yellow-5"],background:c["vira-yellow-40"]},"vira-yellow-on-self-decoration":{foreground:c["vira-yellow-5"],background:c["vira-yellow-30"]},"vira-yellow-on-self-invisible":{foreground:c["vira-yellow-5"],background:c["vira-yellow-10"]},"vira-green-foreground-small-body":{foreground:c["vira-green-5"]},"vira-green-foreground-body":{foreground:c["vira-green-20"]},"vira-green-foreground-non-body":{foreground:c["vira-green-30"]},"vira-green-foreground-placeholder":{foreground:c["vira-green-60"]},"vira-green-foreground-decoration":{foreground:c["vira-green-80"]},"vira-green-foreground-invisible":{foreground:c["vira-green-90"]},"vira-green-behind-bg-small-body":{background:c["vira-green-5"]},"vira-green-behind-bg-body":{background:c["vira-green-20"]},"vira-green-behind-bg-non-body":{background:c["vira-green-30"]},"vira-green-behind-bg-header":{background:c["vira-green-50"]},"vira-green-behind-bg-placeholder":{background:c["vira-green-60"]},"vira-green-behind-bg-decoration":{background:c["vira-green-80"]},"vira-green-behind-bg-invisible":{background:c["vira-green-90"]},"vira-green-behind-fg-small-body":{background:c["vira-green-90"]},"vira-green-behind-fg-body":{background:c["vira-green-70"]},"vira-green-behind-fg-non-body":{background:c["vira-green-60"]},"vira-green-behind-fg-header":{background:c["vira-green-40"]},"vira-green-behind-fg-placeholder":{background:c["vira-green-30"]},"vira-green-behind-fg-decoration":{background:c["vira-green-20"]},"vira-green-behind-fg-invisible":{background:c["vira-green-5"]},"vira-green-on-self-body":{foreground:c["vira-green-5"],background:c["vira-green-90"]},"vira-green-on-self-non-body":{foreground:c["vira-green-5"],background:c["vira-green-70"]},"vira-green-on-self-header":{foreground:c["vira-green-5"],background:c["vira-green-60"]},"vira-green-on-self-placeholder":{foreground:c["vira-green-5"],background:c["vira-green-40"]},"vira-green-on-self-decoration":{foreground:c["vira-green-5"],background:c["vira-green-30"]},"vira-green-on-self-invisible":{foreground:c["vira-green-5"],background:c["vira-green-10"]},"vira-teal-foreground-small-body":{foreground:c["vira-teal-5"]},"vira-teal-foreground-body":{foreground:c["vira-teal-20"]},"vira-teal-foreground-non-body":{foreground:c["vira-teal-30"]},"vira-teal-foreground-placeholder":{foreground:c["vira-teal-60"]},"vira-teal-foreground-decoration":{foreground:c["vira-teal-80"]},"vira-teal-foreground-invisible":{foreground:c["vira-teal-90"]},"vira-teal-behind-bg-small-body":{background:c["vira-teal-5"]},"vira-teal-behind-bg-body":{background:c["vira-teal-20"]},"vira-teal-behind-bg-non-body":{background:c["vira-teal-30"]},"vira-teal-behind-bg-header":{background:c["vira-teal-50"]},"vira-teal-behind-bg-placeholder":{background:c["vira-teal-60"]},"vira-teal-behind-bg-decoration":{background:c["vira-teal-80"]},"vira-teal-behind-bg-invisible":{background:c["vira-teal-90"]},"vira-teal-behind-fg-small-body":{background:c["vira-teal-90"]},"vira-teal-behind-fg-body":{background:c["vira-teal-80"]},"vira-teal-behind-fg-non-body":{background:c["vira-teal-60"]},"vira-teal-behind-fg-header":{background:c["vira-teal-40"]},"vira-teal-behind-fg-placeholder":{background:c["vira-teal-30"]},"vira-teal-behind-fg-decoration":{background:c["vira-teal-20"]},"vira-teal-behind-fg-invisible":{background:c["vira-teal-5"]},"vira-teal-on-self-body":{foreground:c["vira-teal-5"],background:c["vira-teal-90"]},"vira-teal-on-self-non-body":{foreground:c["vira-teal-5"],background:c["vira-teal-70"]},"vira-teal-on-self-header":{foreground:c["vira-teal-5"],background:c["vira-teal-60"]},"vira-teal-on-self-placeholder":{foreground:c["vira-teal-5"],background:c["vira-teal-40"]},"vira-teal-on-self-decoration":{foreground:c["vira-teal-5"],background:c["vira-teal-30"]},"vira-teal-on-self-invisible":{foreground:c["vira-teal-5"],background:c["vira-teal-10"]},"vira-blue-foreground-small-body":{foreground:c["vira-blue-5"]},"vira-blue-foreground-body":{foreground:c["vira-blue-20"]},"vira-blue-foreground-non-body":{foreground:c["vira-blue-30"]},"vira-blue-foreground-placeholder":{foreground:c["vira-blue-60"]},"vira-blue-foreground-decoration":{foreground:c["vira-blue-80"]},"vira-blue-foreground-invisible":{foreground:c["vira-blue-90"]},"vira-blue-behind-bg-small-body":{background:c["vira-blue-5"]},"vira-blue-behind-bg-body":{background:c["vira-blue-20"]},"vira-blue-behind-bg-non-body":{background:c["vira-blue-30"]},"vira-blue-behind-bg-header":{background:c["vira-blue-50"]},"vira-blue-behind-bg-placeholder":{background:c["vira-blue-60"]},"vira-blue-behind-bg-decoration":{background:c["vira-blue-80"]},"vira-blue-behind-bg-invisible":{background:c["vira-blue-90"]},"vira-blue-behind-fg-small-body":{background:c["vira-blue-90"]},"vira-blue-behind-fg-body":{background:c["vira-blue-80"]},"vira-blue-behind-fg-non-body":{background:c["vira-blue-60"]},"vira-blue-behind-fg-header":{background:c["vira-blue-40"]},"vira-blue-behind-fg-placeholder":{background:c["vira-blue-30"]},"vira-blue-behind-fg-decoration":{background:c["vira-blue-20"]},"vira-blue-behind-fg-invisible":{background:c["vira-blue-5"]},"vira-blue-on-self-body":{foreground:c["vira-blue-5"],background:c["vira-blue-90"]},"vira-blue-on-self-non-body":{foreground:c["vira-blue-5"],background:c["vira-blue-70"]},"vira-blue-on-self-header":{foreground:c["vira-blue-5"],background:c["vira-blue-60"]},"vira-blue-on-self-placeholder":{foreground:c["vira-blue-5"],background:c["vira-blue-40"]},"vira-blue-on-self-decoration":{foreground:c["vira-blue-5"],background:c["vira-blue-30"]},"vira-blue-on-self-invisible":{foreground:c["vira-blue-5"],background:c["vira-blue-10"]},"vira-purple-foreground-small-body":{foreground:c["vira-purple-5"]},"vira-purple-foreground-body":{foreground:c["vira-purple-20"]},"vira-purple-foreground-non-body":{foreground:c["vira-purple-30"]},"vira-purple-foreground-placeholder":{foreground:c["vira-purple-60"]},"vira-purple-foreground-decoration":{foreground:c["vira-purple-80"]},"vira-purple-foreground-invisible":{foreground:c["vira-purple-90"]},"vira-purple-behind-bg-small-body":{background:c["vira-purple-5"]},"vira-purple-behind-bg-body":{background:c["vira-purple-20"]},"vira-purple-behind-bg-non-body":{background:c["vira-purple-30"]},"vira-purple-behind-bg-header":{background:c["vira-purple-50"]},"vira-purple-behind-bg-placeholder":{background:c["vira-purple-60"]},"vira-purple-behind-bg-decoration":{background:c["vira-purple-80"]},"vira-purple-behind-bg-invisible":{background:c["vira-purple-90"]},"vira-purple-behind-fg-small-body":{background:c["vira-purple-90"]},"vira-purple-behind-fg-body":{background:c["vira-purple-80"]},"vira-purple-behind-fg-non-body":{background:c["vira-purple-60"]},"vira-purple-behind-fg-header":{background:c["vira-purple-40"]},"vira-purple-behind-fg-placeholder":{background:c["vira-purple-30"]},"vira-purple-behind-fg-decoration":{background:c["vira-purple-20"]},"vira-purple-behind-fg-invisible":{background:c["vira-purple-5"]},"vira-purple-on-self-body":{foreground:c["vira-purple-5"],background:c["vira-purple-90"]},"vira-purple-on-self-non-body":{foreground:c["vira-purple-5"],background:c["vira-purple-70"]},"vira-purple-on-self-header":{foreground:c["vira-purple-5"],background:c["vira-purple-60"]},"vira-purple-on-self-placeholder":{foreground:c["vira-purple-5"],background:c["vira-purple-40"]},"vira-purple-on-self-decoration":{foreground:c["vira-purple-5"],background:c["vira-purple-30"]},"vira-purple-on-self-invisible":{foreground:c["vira-purple-5"],background:c["vira-purple-10"]},"vira-pink-foreground-small-body":{foreground:c["vira-pink-5"]},"vira-pink-foreground-body":{foreground:c["vira-pink-20"]},"vira-pink-foreground-non-body":{foreground:c["vira-pink-30"]},"vira-pink-foreground-placeholder":{foreground:c["vira-pink-60"]},"vira-pink-foreground-decoration":{foreground:c["vira-pink-80"]},"vira-pink-foreground-invisible":{foreground:c["vira-pink-90"]},"vira-pink-behind-bg-small-body":{background:c["vira-pink-5"]},"vira-pink-behind-bg-body":{background:c["vira-pink-20"]},"vira-pink-behind-bg-non-body":{background:c["vira-pink-30"]},"vira-pink-behind-bg-header":{background:c["vira-pink-50"]},"vira-pink-behind-bg-placeholder":{background:c["vira-pink-60"]},"vira-pink-behind-bg-decoration":{background:c["vira-pink-80"]},"vira-pink-behind-bg-invisible":{background:c["vira-pink-90"]},"vira-pink-behind-fg-small-body":{background:c["vira-pink-90"]},"vira-pink-behind-fg-body":{background:c["vira-pink-80"]},"vira-pink-behind-fg-non-body":{background:c["vira-pink-60"]},"vira-pink-behind-fg-header":{background:c["vira-pink-40"]},"vira-pink-behind-fg-placeholder":{background:c["vira-pink-30"]},"vira-pink-behind-fg-decoration":{background:c["vira-pink-20"]},"vira-pink-behind-fg-invisible":{background:c["vira-pink-5"]},"vira-pink-on-self-body":{foreground:c["vira-pink-5"],background:c["vira-pink-90"]},"vira-pink-on-self-non-body":{foreground:c["vira-pink-5"],background:c["vira-pink-70"]},"vira-pink-on-self-header":{foreground:c["vira-pink-5"],background:c["vira-pink-60"]},"vira-pink-on-self-placeholder":{foreground:c["vira-pink-5"],background:c["vira-pink-40"]},"vira-pink-on-self-decoration":{foreground:c["vira-pink-5"],background:c["vira-pink-30"]},"vira-pink-on-self-invisible":{foreground:c["vira-pink-5"],background:c["vira-pink-10"]},"vira-grey-foreground-small-body":{foreground:c["vira-grey-5"]},"vira-grey-foreground-body":{foreground:c["vira-grey-20"]},"vira-grey-foreground-non-body":{foreground:c["vira-grey-30"]},"vira-grey-foreground-placeholder":{foreground:c["vira-grey-60"]},"vira-grey-foreground-decoration":{foreground:c["vira-grey-80"]},"vira-grey-foreground-invisible":{foreground:c["vira-grey-90"]},"vira-grey-behind-bg-small-body":{background:c["vira-grey-5"]},"vira-grey-behind-bg-body":{background:c["vira-grey-20"]},"vira-grey-behind-bg-non-body":{background:c["vira-grey-30"]},"vira-grey-behind-bg-header":{background:c["vira-grey-50"]},"vira-grey-behind-bg-placeholder":{background:c["vira-grey-60"]},"vira-grey-behind-bg-decoration":{background:c["vira-grey-80"]},"vira-grey-behind-bg-invisible":{background:c["vira-grey-90"]},"vira-grey-behind-fg-small-body":{background:c["vira-grey-90"]},"vira-grey-behind-fg-body":{background:c["vira-grey-80"]},"vira-grey-behind-fg-non-body":{background:c["vira-grey-60"]},"vira-grey-behind-fg-header":{background:c["vira-grey-40"]},"vira-grey-behind-fg-placeholder":{background:c["vira-grey-30"]},"vira-grey-behind-fg-decoration":{background:c["vira-grey-20"]},"vira-grey-behind-fg-invisible":{background:c["vira-grey-5"]},"vira-grey-on-self-body":{foreground:c["vira-grey-5"],background:c["vira-grey-90"]},"vira-grey-on-self-non-body":{foreground:c["vira-grey-5"],background:c["vira-grey-70"]},"vira-grey-on-self-header":{foreground:c["vira-grey-5"],background:c["vira-grey-60"]},"vira-grey-on-self-placeholder":{foreground:c["vira-grey-5"],background:c["vira-grey-40"]},"vira-grey-on-self-decoration":{foreground:c["vira-grey-5"],background:c["vira-grey-30"]},"vira-grey-on-self-invisible":{foreground:c["vira-grey-5"],background:c["vira-grey-10"]}}});const Ev="8px",K=xi({"vira-form-border-color":le.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-placeholder-color":le.colors["vira-grey-foreground-placeholder"].foreground.value,"vira-form-background-color":le.colors[Ar].background.value,"vira-form-foreground-color":le.colors[Ar].foreground.value,"vira-form-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-form-secondary-body-foreground":le.colors["vira-grey-foreground-header"].foreground.value,"vira-form-text-selection-color":le.colors["vira-blue-behind-bg-decoration"].background.value,"vira-form-selection-hover-color":le.colors["vira-blue-behind-bg-invisible"].background.value,"vira-form-selection-active-color":le.colors["vira-blue-behind-bg-decoration"].background.value,"vira-form-error-color":le.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-error-hover-color":le.colors["vira-red-behind-bg-header"].background.value,"vira-form-error-active-color":le.colors["vira-red-behind-bg-body"].background.value,"vira-form-success-color":le.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-label-font-weight":"bold","vira-form-small-text-size":"14px","vira-form-medium-text-size":"16px","vira-form-large-text-size":"22px","vira-form-radius":Ev,"vira-form-wrapper-radius":"16px","vira-form-focus-outline-color":le.colors["vira-blue-foreground-header"].foreground.value,"vira-form-focus-outline-border-radius":z`calc(var(--vira-form-radius, ${ve(Ev)}) + 2px)`,"vira-form-plain-color":c["vira-grey-0"].value,"vira-form-plain-hover-color":le.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-plain-active-color":le.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-accent-primary-color":le.colors["vira-blue-behind-bg-non-body"].background.value,"vira-form-accent-primary-hover-color":le.colors["vira-blue-behind-bg-header"].background.value,"vira-form-accent-primary-active-color":le.colors["vira-blue-behind-bg-body"].background.value,"vira-form-danger-color":le.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-danger-hover-color":le.colors["vira-red-behind-bg-header"].background.value,"vira-form-danger-active-color":le.colors["vira-red-behind-bg-body"].background.value,"vira-form-filled-background-color":le.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-filled-active-background-color":le.colors["vira-grey-foreground-decoration"].foreground.value}),Sa=z`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,yo=xi({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function Uu({elementBorderSize:e,outlineGap:t=2,outlineWidth:r=2,noNesting:n}){const i=ve(TE(r+t+e)),o=z`
        content: '';
        top: calc(${i} * -1);
        left: calc(${i} * -1);
        position: absolute;
        width: calc(100% + calc(${i} * 2));
        height: calc(100% + calc(${i} * 2));
        box-sizing: border-box;
        pointer-events: none;
        border: ${r}px solid ${K["vira-form-focus-outline-color"].value};
        border-radius: ${K["vira-form-focus-outline-border-radius"].value};
        z-index: 100;
    `;return n?o:z`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${o}
        }
    `}const u$=xi({"vira-monospace":"monospace"}),c$={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};ut(c$,e=>e);Object.fromEntries(Object.entries(c$).map(([e,t])=>[t,e]));var xe;(function(e){e.SmallBodyText="small-body",e.BodyText="body",e.NonBodyText="non-body",e.Header="header",e.Placeholder="placeholder",e.Decoration="decoration",e.Invisible="invisible"})(xe||(xe={}));xe.SmallBodyText+"",xe.BodyText+"",xe.NonBodyText+"",xe.Header+"",xe.Placeholder+"",xe.Decoration+"",xe.Invisible+"";xe.SmallBodyText,xe.BodyText,xe.NonBodyText,xe.Header,xe.Placeholder,xe.Decoration,xe.Invisible;const d$=[{min:90,name:xe.SmallBodyText,description:"Perfect for all sizes of text, even small body text.",apcaName:"small body text only",apcaDescription:"Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color."},{min:75,name:xe.BodyText,description:"Good for regular body text and anything larger.",apcaName:"body text okay",apcaDescription:"The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important."},{min:60,name:xe.NonBodyText,description:"Good for legible non-body text and anything larger.",apcaName:"fluent text only",apcaDescription:"The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast."},{min:45,name:xe.Header,description:"Okay for large or headline text.",apcaName:"large & sub-fluent text",apcaDescription:"The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension."},{min:30,name:xe.Placeholder,description:"Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.",apcaName:"spot & non text only",apcaDescription:'The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.'},{min:15,name:xe.Decoration,description:"Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.",apcaName:"no text usage",apcaDescription:"The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site."},{min:0,name:xe.Invisible,description:"Effectively invisible for users.",apcaName:"invisible",apcaDescription:"This should be treated as invisible."}];ko(d$,e=>({key:e.min,value:e}));ko(d$,e=>({key:e.name,value:e}));const WO=ln(xe).sort((e,t)=>Number(t.includes("-"))-Number(e.includes("-"))),VO=Nd(Vt(Object.keys(le.colors),e=>e.split("-")[1],e=>e!=="default")).filter(T.isTruthy),Gs=ko(VO,e=>({key:e,value:e}),{}),KO=tt(le.colors),kr=gg(Gs,e=>{const t=Nd(Vt(KO,r=>WO.reduce((n,i)=>wk({value:n,suffix:`-${i}`}),os({value:r,prefix:`vira-${e}-`})),(r,n)=>n.startsWith(`vira-${e}-`)));return ko(t,r=>({key:r,value:ko(ln(xe),n=>{const i=`vira-${e}-${r}-${n}`;if(T.hasKey(le.colors,i))return{key:n,value:le.colors[i]}})}))});var re;(function(e){e.Accent="accent",e.Plain="plain",e.Neutral="neutral",e.Danger="danger",e.Warning="warning",e.Positive="positive",e.None="none"})(re||(re={}));const Cv={[re.Accent]:Gs.blue,[re.Neutral]:Gs.grey,[re.Danger]:Gs.red,[re.Warning]:Gs.orange,[re.Positive]:Gs.green};re.Accent,re.Plain,re.Neutral,re.Danger,re.Warning,re.Positive;var Er;(function(e){e.Large="large",e.Medium="medium",e.Small="small",e.None="none"})(Er||(Er={}));Er.Small,Er.Medium,Er.Large;var Fn;(function(e){e.Standard="standard",e.Subtle="subtle",e.None="none"})(Fn||(Fn={}));Fn.Standard,Fn.Subtle;const Jh={[Er.Large]:40,[Er.Medium]:32,[Er.Small]:24},Qa=z`
    padding: 0;
    margin: 0;
`,un=z`
    ${Qa};
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Xh=xi({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),HO={menuShadow:z`
        filter: drop-shadow(0px 5px 5px ${Xh["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:z`
        filter: drop-shadow(0px -5px 5px ${Xh["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:z`
        box-shadow: 0 5px 15px ${Xh["modal-shadow-color"].value};
    `},Ta=z`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,Sv="vira-",di=G5({assertInputs:e=>{if(!e.tagName.startsWith(Sv))throw new Error(`Tag name should start with '${Sv}' but got '${e.tagName}'`)}}),oe=di()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>z`
        :host {
            display: inline-flex;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}});function GO(e,t){return e>t}function ZO(e,t){return e<t}function mu(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var wi;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(wi||(wi={}));var Ve;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(Ve||(Ve={}));function Sf(e){const t={x:-1,y:-1};let r;for(;t.y<e.length-1&&!r;){t.y++;const n=e[t.y];for(;n&&t.x<n.length-1&&!r;){t.x++;const i=n[t.x];if(i)if(i.navEntry.navParams.group){const o=Sf(i.children);o&&(r=o.node)}else i.navEntry.navParams.disabled||(r=i)}}if(r)return{node:r,coords:t}}function Tv(e,t,r,n){if(!t){const l=Sf(e.children);return l?(mu(l.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:l.node.element,coords:l.coords,direction:r,navAction:Ve.Navigate}):{success:!1,reason:"no default element to focus",direction:r,navAction:Ve.Navigate}}const{nextNode:i,requiresWrapping:o,coords:s}=f$(t.position,r),a=n?!0:!o;return i&&a?(mu(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:o,direction:r,navAction:Ve.Navigate,coords:s}):i?a?{success:!1,reason:"no conditions matched",direction:r,navAction:Ve.Navigate}:{success:!1,reason:"wrapping blocked",direction:r,navAction:Ve.Navigate}:{success:!1,reason:"failed to find node to focus",direction:r,navAction:Ve.Navigate}}function f$(e,t){let r=!1,n,i=1;const o=Date.now();for(;!r||!n;)if(n=YO(e,t,i),r=!n.nextNode?.navEntry.navParams.disabled,i++,Date.now()-o>1e3)return Jc.warning("Failed to find next non-disabled node."),n;return n}function YO(e,t,r){const n=e.ancestorChain[e.ancestorChain.length-1]?.node;Nt.isDefined(n,"missing parent");const i=Qt.isDefined(n.children[e.nodeCoords.y]),o=n.children.length>1&&(t===wi.Down||t===wi.Up),s=t===wi.Down||t===wi.Right?r:-1*r,a=s<0?GO:ZO,l=o?Ny(e.nodeCoords.y+s,{min:0,max:n.children.length-1,takeOverflow:!0}):e.nodeCoords.y,u=Qt.isDefined(n.children[l]),d=o?e.nodeCoords.x>=u.length?u.length-1:e.nodeCoords.x:Ny(e.nodeCoords.x+s,{min:0,max:i.length-1,takeOverflow:!0}),f=n.children[l]?.[d],h=o?a(l,e.nodeCoords.y):a(d,e.nodeCoords.x);return{nextNode:f,requiresWrapping:h,coords:{x:d,y:l}}}function JO(e,t,r){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:Ve.Pibling};const{nextNode:i,requiresWrapping:o,coords:s}=f$(n,t),a=i?.navEntry.navParams.group?Sf(i.children):{node:i,coords:s},l=r?!0:!o;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:Ve.Pibling}:l?(mu(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:o,coords:a.coords,direction:t,navAction:Ve.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:Ve.Pibling}}var Li;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(Li||(Li={}));const Qh={name:"data-nav"},h$="navEntry";function XO(e){return h$ in e}function QO(e){if(XO(e)){const t=e[h$];return Qt.instanceOf(t,tR,"Invalid nav entry")}else return}function eR(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==Li.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class tR{element;navParams;navTreeNode;navValue;eventListener=eR(this);constructor(t,r,n){this.element=t,this.navParams=n,this.attachListeners(),this.navController=r}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return Nt.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(Qh.name,""),Gh(this.element)&&this.element.blur())}focus(t,r){const n=this.navValue,i=t===(n===Li.Focused);if(!(this.navParams.group||this.navController.locked||i||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(Li.Focused),Gh(this.element)||this.element.focus()):(this.removeNavValue(Li.Focused),Gh(this.element)&&this.element.blur()),r||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,Ve.Focus)}activate(t){const r=this.navValue,n=t===(r===Li.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(t,!0),t?this.setNavValue(Li.Active):this.setNavValue(Li.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,Ve.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(Qh.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(Qh.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function rR(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:Ve.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:Ve.Enter};const r=t.position.node.children[0]?.[0];return r?(mu(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:Ve.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:Ve.Enter}}function nR(e,t){return m$([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function m$(e,t,r){for(let n=0;n<t.length;n++){const i=t[n];for(let o=0;o<i.length;o++){const s=i[o],a={ancestorChain:e,nodeCoords:{x:o,y:n},node:s};if(r(a))return a;const l=m$(e.concat(a),s.children,r);if(l)return l}}}function g$(e,t){const r=nR(e,({node:n})=>!n.root&&n.navEntry===t);if(!r)throw new Error("Failed to find NavEntry in NavTree.");return r}function iR(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:Ve.Exit};const r=t.position.ancestorChain.toReversed().find(i=>!i.node.root&&!i.node.navEntry.navParams.group)?.node;if(!r||r.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:Ve.Exit};const{nodeCoords:n}=g$(e,r.navEntry);return mu(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:Ve.Exit,coords:n}}class oR extends li()("nav-exit"){}class p$ extends li()("nav-activate"){}class sR extends li()("nav-focus"){}class aR extends li()("nav-enter"){}class lR extends li()("nav-navigate"){}class uR extends li()("nav-navigate-pibling"){}function cR(e){return{root:!0,children:b$(e)?.children||[]}}function b$(e){const t=e.element;if(!(t instanceof HTMLElement))return;const r=QO(t),n=dR(e);if((r?.navParams.group?!!n.length:!1)||n.length||r)return{root:!1,element:t,navEntry:r,children:n}}function dR(e){const t=[];function r(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(a=>a.forEach(l=>r(l)));return}const i=n.navEntry.navParams.x,o=n.navEntry.navParams.y||0,s=_a(t,o,()=>({noX:[],withX:[],y:o}));i==null?s.noX.push(n):s.withX.push({x:i,node:n})}return e.children.forEach(n=>{const i=b$(n);i&&r(i)}),t.sort((n,i)=>n.y-i.y).map(n=>(n.withX.sort((i,o)=>i.x-o.x),n.withX.forEach(({x:i,node:o})=>{n.noX.splice(i,0,o)}),n.noX)).filter(T.isTruthy)}class fR extends yg{rootElement;options;constructor(t,r={}){super(),this.rootElement=t,this.options=r}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){Sf(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,r,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const i=g$(this.getNavTree(),t);r?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:n,position:i}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const o={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:n,coords:i.nodeCoords};return r&&(n===Ve.Activate?this.dispatch(new p$({detail:o})):n===Ve.Focus&&this.dispatch(new sR({detail:o}))),o}navigate({direction:t,allowWrapping:r}){if(this.locked)return{success:!1,direction:t,navAction:Ve.Navigate,reason:"NavController is locked."};const n=Tv(this.getNavTree(),this.currentNavEntry,t,r);return this.dispatch(new lR({detail:n})),n}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:Ve.Enter,reason:"NavController is locked."};const r=rR(this.getNavTree(),this.currentNavEntry);return!r.success&&t?this.activate():(this.dispatch(new aR({detail:r})),r)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:Ve.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:Ve.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return Nt.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:Ve.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===Ve.Activate&&this.currentNavEntry.entry.focus(!0);const t=iR(this.getNavTree(),this.currentNavEntry);return this.dispatch(new oR({detail:t})),t}navigatePibling({allowWrapping:t,direction:r}){if(this.locked)return{success:!1,direction:r,navAction:Ve.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),o={...this.currentNavEntry?JO(this.currentNavEntry,r,t):Tv(n,void 0,r,t),navAction:Ve.Pibling};return this.dispatch(new uR({detail:o})),o}buildNavTree(){const t=wO(this.rootElement),r=cR(t);return this.cachedNavTree=r,r}}function Mv({open:e,callback:t,popUpManager:r,host:n,options:i}){if(e){const o=r.showPopUp(n,i);t?.(o)}else r.removePopUp(),t?.(void 0)}const yc=globalThis.document;class hR extends B5{constructor(){if(super({defaultValue:!!yc?.hidden,equalityCheck:T.strictEquals}),!yc)return;globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r,yc));const t=r=>this.updateVisibility(r,yc);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,r){const n=gR.includes(t.type),i=mR.includes(t.type),o=n?!0:i?!1:r.hasFocus()||!r.hidden;this.setValue(o)}}const mR=["blur","focusout","pagehide"],gR=["focus","focusin","pageshow"],pR=new hR;function bR(e,t){return pR.listen(e,t)}function Tm(e){return e instanceof HTMLInputElement&&(e.type==="text"||e.type==="search"||e.type==="email"||e.type==="url"||e.type==="tel"||e.type==="password"||e.type==="number")||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}const Fv={top:0,left:0,right:0,bottom:0};class y$ extends bg("hide-pop-up"){}class v$ extends li()("nav-select"){}class yR{navController;listenTarget=new yg;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;constructor(t,r){this.navController=t,this.options={...this.options,...r}}attachGlobalListeners(){this.cleanupCallbacks=[bR(!1,t=>{t||this.removePopUp()}),this.navController.listen(p$,t=>{const r=t.composedPath()[0];r instanceof Element&&Tm(r)||t.detail.success&&(this.listenTarget.dispatch(new v$({detail:t.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),t.stopImmediatePropagation(),t.preventDefault())}),Oy("mousedown",t=>{this.lastRootElement&&t.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Oy("keydown",t=>{const r=t.code;if(r==="Escape")this.removePopUp();else if(this.options.supportNavigation){const n=t.composedPath()[0];if(n instanceof Element&&Tm(n))return;r==="ArrowDown"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:wi.Down,allowWrapping:!1})):r==="ArrowUp"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:wi.Up,allowWrapping:!1})):r==="ArrowLeft"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:wi.Left,allowWrapping:!1})):r==="ArrowRight"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:wi.Right,allowWrapping:!1})):(r==="Enter"||r==="Return"||r==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(t.stopImmediatePropagation(),t.preventDefault())}})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new y$)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},i=xO(t);Nt.instanceOf(i,HTMLElement);const o=t.getBoundingClientRect(),s=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,l=i.offsetHeight-i.clientHeight,u=i===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-a,bottom:s.bottom-l},d=ut(Fv,m=>o[m]),f=ut(Fv,m=>{const b=u[m],k=d[m];return Math.abs(b-k)}),h=f.top>f.bottom+n.verticalDiffThreshold&&f.bottom<n.minDownSpace,g=f.left>f.right+n.horizontalDiffThreshold&&f.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!h,popRight:!g,positions:{container:u,root:d,diff:f}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var uo;(function(e){e.Left="left",e.Right="right",e.Both="both",e.Auto="auto"})(uo||(uo={}));const vl=di()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new yR(new fR(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>z`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${un};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;

            ${Uu({elementBorderSize:1})}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${Ta};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${Sa}
            pointer-events: auto;
        }

        ${e["vira-pop-up-trigger-disabled"].selector} .dropdown-wrapper {
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
    `,events:{navSelect:nr(),openChange:nr(),init:nr()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:i,events:o}){e.popUpManager.listen(y$,()=>{if(t({showPopUpResult:void 0}),i(new o.openChange(void 0)),!n.isDisabled){const s=r.shadowRoot.querySelector(".dropdown-wrapper");Nt.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(v$,s=>{n.keepOpenAfterInteraction||Mv({open:!1,callback(a){t({showPopUpResult:a})},host:r,popUpManager:e.popUpManager}),i(new o.navSelect(s.detail))}),i(new o.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:r,inputs:n,updateState:i,host:o,slotNames:s}){function a({emitEvent:m,open:b},k){if(r.showPopUpResult&&n.keepOpenAfterInteraction&&k){const x=o.shadowRoot.querySelector(".dropdown-trigger");if(x&&!k.composedPath().includes(x))return}Mv({open:b,callback(x){i({showPopUpResult:x}),m&&e(new t.openChange(x))},host:o,popUpManager:r.popUpManager})}n.isDisabled?a({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?a({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!r.showPopUpResult&&a({emitEvent:!1,open:!0},void 0));const l=n.horizontalAnchor===uo.Auto||n.horizontalAnchor===void 0?r.showPopUpResult?.popRight?uo.Left:uo.Right:n.horizontalAnchor,u=l===uo.Right&&r.showPopUpResult?n.ignoreMaxWidth?z`
                          left: unset;
                      `:z`
                          left: -${r.showPopUpResult.positions.diff.left}px;
                      `:z`
                      left: ${n.popUpOffset?.left||0}px;
                  `,d=r.showPopUpResult&&l===uo.Left?n.ignoreMaxWidth?z`
                          right: unset;
                      `:z`
                          right: -${r.showPopUpResult.positions.diff.right}px;
                      `:z`
                      right: ${n.popUpOffset?.right||0}px;
                  `,f=z`
            ${u}
            ${d}
        `,h=r.showPopUpResult?r.showPopUpResult.popDown?n.ignoreMaxHeight?z`
                          bottom: unset;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${f}
                      `:z`
                          bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${f}
                      `:n.ignoreMaxHeight?z`
                        top: unset;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${f}
                    `:z`
                        top: -${r.showPopUpResult.positions.diff.top}px;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${f}
                    `:void 0;function g(m){a({emitEvent:!0,open:!r.showPopUpResult},m)}return y`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${mn({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${Ee("keydown",m=>{!r.showPopUpResult&&m.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0},m)})}
                ${Ee("click",m=>{if(m.detail===0){let b=!1;if($O(({element:k})=>Tm(k)?(b=!0,!0):!1),b)return;g(m)}else if(m.button===0&&r.showPopUpResult){const b=o.shadowRoot.querySelector(".dropdown-trigger");b&&!m.composedPath().includes(b)&&a({emitEvent:!0,open:!1},m)}})}
                ${Ee("mousedown",m=>{if(m.button!==0)return;const b=Qt.instanceOf(o.shadowRoot.querySelector(".dropdown-trigger"),HTMLElement);m.composedPath().includes(b)&&g(m)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${mn({"right-aligned":l===uo.Right})}"
                    style=${h}
                >
                    ${Xn(!!r.showPopUpResult,y`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}});var Oi;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline",e.Danger="vira-button-danger",e.DangerOutline="vira-button-danger-outline",e.Ghost="vira-button-ghost",e.Plain="vira-button-plain"})(Oi||(Oi={}));const vc=di()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Oi.Outline||e.buttonStyle===Oi.DangerOutline,"vira-button-danger-style":({inputs:e})=>e.buttonStyle===Oi.Danger||e.buttonStyle===Oi.DangerOutline,"vira-button-ghost-style":({inputs:e})=>e.buttonStyle===Oi.Ghost,"vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon,"vira-button-icon-only":({inputs:e})=>!!e.icon&&!e.text,"vira-button-plain-style":({inputs:e})=>e.buttonStyle===Oi.Plain,"vira-button-default-style":({inputs:e})=>!e.buttonStyle||e.buttonStyle===Oi.Default},cssVars:{"vira-button-padding":"5px 10px","vira-button-internal-foreground-color":K["vira-form-background-color"].value,"vira-button-internal-background-color":K["vira-form-accent-primary-color"].value,"vira-button-border-color":"transparent"},styles:({hostClasses:e,cssVars:t})=>z`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Ta};
            ${K["vira-form-focus-outline-color"].name}: ${K["vira-form-accent-primary-hover-color"].value}
        }

        ${e["vira-button-icon-only"].selector} {
            ${t["vira-button-padding"].name}: 5px;
        }

        ${e["vira-button-disabled"].selector} {
            ${Sa};
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${K["vira-form-accent-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${K["vira-form-accent-primary-active-color"].value};
        }

        ${e["vira-button-danger-style"].selector} {
            & button {
                ${t["vira-button-internal-background-color"].name}: ${K["vira-form-error-color"].value};
            }

            &:hover button,
            & button:hover {
                ${t["vira-button-internal-background-color"].name}: ${K["vira-form-error-hover-color"].value};
            }

            &:active button,
            & button:active {
                ${t["vira-button-internal-background-color"].name}: ${K["vira-form-error-active-color"].value};
            }
        }

        ${e["vira-button-ghost-style"].selector} {
            & button {
                ${t["vira-button-internal-background-color"].name}: transparent;
                ${t["vira-button-internal-foreground-color"].name}: currentColor;
            }

            &:hover button,
            & button:hover {
                ${t["vira-button-internal-background-color"].name}: ${K["vira-form-filled-background-color"].value};
            }

            &:active button,
            & button:active {
                ${t["vira-button-internal-background-color"].name}: ${K["vira-form-filled-active-background-color"].value};
            }
        }

        ${e["vira-button-plain-style"].selector} {
            & button {
                ${t["vira-button-internal-background-color"].name}: ${K["vira-form-plain-color"].value};
                color: currentColor;
                ${t["vira-button-border-color"].name}: ${K["vira-form-plain-active-color"].value};
                border-width: 1px;
            }
            &:hover button,
            & button:hover {
                ${t["vira-button-internal-background-color"].name}: ${K["vira-form-plain-hover-color"].value};
            }

            &:active button,
            & button:active {
                ${t["vira-button-internal-background-color"].name}: ${K["vira-form-plain-active-color"].value};
            }
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: ${t["vira-button-internal-foreground-color"].value};
            ${t["vira-button-border-color"].name}: currentColor;
        }

        button {
            ${un};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            border: 2px solid ${t["vira-button-border-color"].value};
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${K["vira-form-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${yo["vira-interaction-animation-duration"].value},
                background-color
                    ${yo["vira-interaction-animation-duration"].value},
                border-color ${yo["vira-interaction-animation-duration"].value};

            ${Uu({elementBorderSize:2})}
        }

        .empty-text {
            width: 0;
        }

        button ${oe} + .text-template {
            margin-left: 8px;
        }

        :host(:not(.${e["vira-button-expand-to-fit-icon"].name})) {
            & ${oe} {
                height: 0;
                display: flex;
                align-items: center;
            }
        }
    `,render:({inputs:e})=>{const t=e.icon?y`
                  <${oe.assign({icon:e.icon})}></${oe}>
              `:fe,r=e.text?y`
                  <span class="text-template">${e.text}</span>
              `:y`
                  <span class="empty-text">&nbsp;</span>
              `;return y`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var kd;(function(e){e.Error="error",e.Success="success"})(kd||(kd={}));const e0=di()({tagName:"vira-card",hostClasses:{"vira-card-error":({inputs:e})=>e.cardState===kd.Error,"vira-card-success":({inputs:e})=>e.cardState===kd.Success},cssVars:{"vira-card-border":z`1px solid ${K["vira-form-border-color"].value}`,"vira-card-padding":K["vira-form-wrapper-radius"].value},styles:({hostClasses:e,cssVars:t})=>z`
        :host {
            display: block;
            border: ${t["vira-card-border"].value};
            border-radius: ${K["vira-form-wrapper-radius"].value};
            padding: ${t["vira-card-padding"].value};
        }

        ${e["vira-card-error"].selector} {
            border-color: ${K["vira-form-error-color"].value};
        }
        ${e["vira-card-success"].selector} {
            border-color: ${K["vira-form-success-color"].value};
        }
    `,render(){return y`
            <slot></slot>
        `}}),vR=ce({name:"ArrowDown24Icon",svgTemplate:y`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),wR=ce({name:"ArrowLeft24Icon",svgTemplate:y`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),kR=ce({name:"ArrowRight24Icon",svgTemplate:y`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),xR=ce({name:"ArrowUp24Icon",svgTemplate:y`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),$R=ce({name:"AutoTheme24Icon",svgTemplate:y`
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
                fill=${v["vira-icon-stroke-color"].value}
                stroke="none"
                style="fill-rule:nonzero"
            />
            <path
                d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 0v16"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),DR=ce({name:"Bell24Icon",svgTemplate:y`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),AR=ce({name:"Chat24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),w$=ce({name:"Check16Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="m12 5-6 6-3-3"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ER=ce({name:"ChevronDown24Icon",svgTemplate:y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${v["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${v["vira-icon-stroke-width"].value}
                d="M6 8 L12 15 18 8"
            />
        </svg>
    `}),_p=ce({name:"ChevronUp24Icon",svgTemplate:y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${v["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${v["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),k$=ce({name:"CloseX16Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 4l8 8M12 4l-8 8"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),x$=ce({name:"CloseX24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />

            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),CR=ce({name:"Commit24Icon",svgTemplate:y`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />

            <path
                d="M12 2v6m0 8v6"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Mm=ce({name:"Copy24Icon",svgTemplate:y`
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
                fill=${v["vira-icon-fill-color"].value}
            />
            <path
                d="M21 11v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8q.2-1.8 2-2h8a2 2 0 0 1 2 2"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
            <path
                d="M7 16H6a2 2 0 0 1-2-2V6q.2-1.8 2-2h8a2 2 0 0 1 2 2v1"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),SR=ce({name:"Document24Icon",svgTemplate:y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />

            <path
                d="M13 3v6h6"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),$$=ce({name:"DocumentSearch24Icon",svgTemplate:y`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
            <circle
                cx="11.7"
                cy="12.5"
                r="3.5"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
            <path
                d="m14.2 15 2.5 2.5"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),TR=ce({name:"DoubleChevron24Icon",svgTemplate:y`
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
                fill=${v["vira-icon-fill-color"].value}
                stroke-width="none"
                stroke="none"
            />
            <path
                d="m7 15 5 5 5-5M7 9l5-5 5 5"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),D$=ce({name:"Element16Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),MR=ce({name:"Element24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),FR=ce({name:"ExternalLink24Icon",svgTemplate:y`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
            <path
                d="M10 14 20 4m-5 0h5v5"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),A$=ce({name:"EyeClosed24Icon",svgTemplate:y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${v["vira-icon-fill-color"].value}
            stroke=${v["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${v["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),jp=ce({name:"EyeOpen24Icon",svgTemplate:y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${v["vira-icon-fill-color"].value}
            stroke=${v["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${v["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),PR=ce({name:"Filter24Icon",svgTemplate:y`
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
                fill=${v["vira-icon-fill-color"].value}
            />
            <path
                d="M3 6h18M6 12h12M9 18h6"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
                fill-rule="nonzero"
            />
        </svg>
    `}),IR=ce({name:"Globe24Icon",svgTemplate:y`
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
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
            <path
                d="M21 12c0 5-4 9-9 9m9-9c0-5-4-9-9-9m9 9H3m9 9c-5 0-9-4-9-9m9 9q3.5-3.9 3.6-9 0-5.1-3.6-9m0 18a14 14 0 0 1-3.6-9q0-5.1 3.6-9m-9 9c0-5 4-9 9-9"
                style="fill-rule:nonzero;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),NR=ce({name:"Link24Icon",svgTemplate:y`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
            <path
                d="M12.4 9.6c.5.1 1 .5 1.5.9a4 4 0 0 1 0 5.7l-4.2 4.2A4 4 0 0 1 4 14.7l3-2.9"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
            <path
                d="M11.6 14.4a4 4 0 0 1-1.5-6.6l4.2-4.2A4 4 0 0 1 20 9.3l-3 2.9"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),E$=ce({name:"Loader24Icon",svgTemplate:y`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),OR=z`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${yo["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Ma=ce({name:"LoaderAnimated24Icon",svgTemplate:y`
        <style>
            ${OR}
        </style>
        ${E$.svgTemplate}
    `}),RR=ce({name:"Lock24Icon",svgTemplate:y`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
            <circle
                cx="12"
                cy="14"
                r="1.5"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width="calc(${v["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14v4"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />

            <path
                d="M17 10V7.5a5 5 0 0 0-10 0V10"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),BR=ce({name:"MagnifyingGlass24Icon",svgTemplate:y`
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
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),LR=ce({name:"Moon24Icon",svgTemplate:y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke=${v["vira-icon-stroke-color"].value}
            stroke-width=${v["vira-icon-stroke-width"].value}
            fill=${v["vira-icon-fill-color"].value}
            stroke-linejoin="round"
        >
            <path d="M18.6 17.72A8 8 0 1 1 15 4.26a8 8 0 0 0 3.6 13.46Z" />
        </svg>
    `}),C$=ce({name:"Options24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />

                <circle cx="16.5" cy="12.5" r="2.5" />

                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>

            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),_R=ce({name:"Pencil24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />

            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),jR=ce({name:"Printer24Icon",svgTemplate:y`
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
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),zR=ce({name:"Shield24Icon",svgTemplate:y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),UR=ce({name:"SortAscending24Icon",svgTemplate:y`
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
                fill=${v["vira-icon-fill-color"].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                d="m3 8 4-4 4 4M7 4v16"
            />
            <path
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),qR=ce({name:"SortDescending24Icon",svgTemplate:y`
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
                fill=${v["vira-icon-fill-color"].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                d="m3 16 4 4 4-4m-4 4V4"
            />
            <path
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),WR=ce({name:"Sparkle24Icon",svgTemplate:y`
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
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),VR=ce({name:"SpeakerLoud24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),KR=ce({name:"SpeakerMedium24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),HR=ce({name:"SpeakerMuted24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />

            <path
                d="M4 20 20 4"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),GR=ce({name:"SpeakerQuiet24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Fa=ce({name:"Star24Icon",svgTemplate:y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Fm=ce({name:"StatusFailure24Icon",svgTemplate:y`
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
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />

            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),ZR=ce({name:"StatusInProgress24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />

            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width="calc(${v["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width="calc(${v["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width="calc(${v["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),xr=ce({name:"StatusSuccess24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />

            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),YR=ce({name:"StatusUnknown24Icon",svgTemplate:y`
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
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width="calc(${v["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14c0-.5.09-.87.14-1q.13-.38.37-.7c.19-.24 1.3-1.46 1.46-1.65a3 3 0 0 0 .44-.73q.17-.42.17-.94 0-1.07-.7-1.65a2.7 2.7 0 0 0-1.8-.56q-1.12 0-1.83.7c-.3.29-.66.86-.66 1.53"
                fill="none"
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),an=ce({name:"StatusWarning24Icon",svgTemplate:y`
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
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width="calc(${v["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="m12 14 .2-7h-.4l.2 7Z"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),JR=ce({name:"Sun24Icon",svgTemplate:y`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
            <path
                d="M12 2v3m0 14v3M4.22 4.22l2.12 2.12m11.32 11.32 2.12 2.12M2 12h3m14 0h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),XR=ce({name:"Upload24Icon",svgTemplate:y`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
                fill=${v["vira-icon-fill-color"].value}
            />
            <path
                d="M12 15V4m4 4-4-4-4 4"
                fill="none"
                style="fill-rule:nonzero"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),QR=ce({name:"X24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function eB(e,t){const r=tt(t).map(i=>{if(t[i])return`${v[i].name}: ${String(t[i])};`}).filter(T.isTruthy).join(" "),n=z`
        ${ve(r)}
        display: inline-flex;
        vertical-align: middle;
    `;return ce({name:e.name,svgTemplate:y`
            <div style=${n}>${e.svgTemplate}</div>
        `})}const tB={ArrowDown24Icon:vR,ArrowLeft24Icon:wR,ArrowRight24Icon:kR,ArrowUp24Icon:xR,AutoTheme24Icon:$R,Bell24Icon:DR,Chat24Icon:AR,Check16Icon:w$,Check24Icon:a$,ChevronDown24Icon:ER,ChevronUp24Icon:_p,CloseX16Icon:k$,CloseX24Icon:x$,Commit24Icon:CR,Copy24Icon:Mm,Document24Icon:SR,DocumentSearch24Icon:$$,DoubleChevron24Icon:TR,Element16Icon:D$,Element24Icon:MR,ExternalLink24Icon:FR,EyeClosed24Icon:A$,EyeOpen24Icon:jp,Filter24Icon:PR,Globe24Icon:IR,Link24Icon:NR,Loader24Icon:E$,LoaderAnimated24Icon:Ma,Lock24Icon:RR,MagnifyingGlass24Icon:BR,Moon24Icon:LR,Options24Icon:C$,Pencil24Icon:_R,Printer24Icon:jR,Shield24Icon:zR,SortAscending24Icon:UR,SortDescending24Icon:qR,Sparkle24Icon:WR,SpeakerLoud24Icon:VR,SpeakerMedium24Icon:KR,SpeakerMuted24Icon:HR,SpeakerQuiet24Icon:GR,Star24Icon:Fa,StatusFailure24Icon:Fm,StatusInProgress24Icon:ZR,StatusSuccess24Icon:xr,StatusUnknown24Icon:YR,StatusWarning24Icon:an,Sun24Icon:JR,Upload24Icon:XR,X24Icon:QR},t0=di()({tagName:"vira-checkbox",hostClasses:{"vira-checkbox-horizontal":({inputs:e})=>!!e.horizontal,"vira-checkbox-filled-checked":({inputs:e})=>!!e.fillWhenChecked,"vira-checkbox-filled-unchecked":({inputs:e})=>!!e.fillWhenUnchecked},styles:({hostClasses:e})=>z`
        :host {
            display: inline-flex;
        }

        .custom-checkbox {
            height: 24px;
            aspect-ratio: 1;
            box-sizing: border-box;
        }

        ${oe} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            ${v["vira-icon-stroke-width"].name}: 3px;
            opacity: 0;
        }

        ${e["vira-checkbox-filled-checked"].selector} {
            & .custom-checkbox.checked {
                color: ${K["vira-form-background-color"].value};
                background-color: ${K["vira-form-accent-primary-color"].value};
            }

            label {
                &:hover .custom-checkbox.checked {
                    background-color: ${K["vira-form-accent-primary-hover-color"].value};
                }

                &:active .custom-checkbox.checked {
                    background-color: ${K["vira-form-accent-primary-active-color"].value};
                }
            }
        }
        ${e["vira-checkbox-filled-unchecked"].selector} {
            & .custom-checkbox:not(.checked) {
                color: ${K["vira-form-background-color"].value};
                background-color: ${K["vira-form-error-color"].value};
            }

            label {
                &:hover .custom-checkbox:not(.checked) {
                    background-color: ${K["vira-form-error-hover-color"].value};
                }

                &:active .custom-checkbox:not(.checked) {
                    background-color: ${K["vira-form-error-active-color"].value};
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
                font-weight: ${K["vira-form-label-font-weight"].value};
            }

            &:hover .custom-checkbox {
                background-color: ${K["vira-form-selection-hover-color"].value};
            }
            &:active .custom-checkbox {
                background-color: ${K["vira-form-selection-active-color"].value};
            }
        }

        /* The visible custom box */
        .custom-checkbox {
            flex-shrink: 0;
            border: 1px solid ${K["vira-form-border-color"].value};
            color: ${K["vira-form-foreground-color"].value};
            border-radius: ${K["vira-form-radius"].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${Uu({elementBorderSize:1})}

            &.checked {
                & ${oe} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${K["vira-form-error-color"].value};
            }

            &.disabled {
                ${Sa};
            }
        }

        ${e["vira-checkbox-horizontal"].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,events:{valueChange:nr()},render({inputs:e,dispatch:t,events:r}){function n(){e.disabled||t(new r.valueChange(!e.value))}const i=e.label?y`
                  <span
                      class="label-text"
                      ${ns(e.attributePassthrough?.text)}
                      style=${Xt(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:fe;return y`
            <label
                class=${mn({disabled:!!e.disabled})}
                ${ns(e.attributePassthrough?.label)}
                style=${Xt(e.stylePassthrough?.label)}
                ${Ee("mousedown",n)}
            >
                ${i}
                <span
                    class="custom-checkbox ${mn({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${Xt(e.label||void 0)}
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${ns(e.attributePassthrough?.["custom-checkbox"])}
                    style=${Xt(e.stylePassthrough?.["custom-checkbox"])}
                    ${nO(n)}
                >
                    <${oe.assign({icon:a$,fitContainer:!0})}
                        ${ns(e.attributePassthrough?.[oe.tagName])}
                        style=${Xt(e.stylePassthrough?.[oe.tagName])}
                    ></${oe}>
                </span>
            </label>
        `}}),pi=di()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expand-on-print":({inputs:e})=>!!e.expandOnPrint},slotNames:["header"],styles:({hostClasses:e})=>z`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${un};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${yo["vira-pretty-animation-duration"].value};
            overflow: hidden;

            &.collapsed {
                ${Ta}
            }
        }

        @media print {
            :host(.${e["vira-collapsible-wrapper-expand-on-print"].name})
                .collapsing-element {
                height: auto !important;
                overflow: visible !important;
                transition: none !important;
            }
        }
    `,events:{expandChange:nr()},render({state:e,slotNames:t,updateState:r,dispatch:n,events:i,inputs:o}){const s=o.expanded?z`
                  height: ${e.contentHeight}px;
              `:z`
                  height: 0;
              `;return y`
            <button
                class="header-wrapper"
                ${Ee("click",()=>{n(new i.expandChange(!o.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>

            <div
                class="collapsing-element ${mn({collapsed:!o.expanded})}"
                style=${s}
                disabled="disabled"
            >
                <div
                    ${H5(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),aa=di()({tagName:"vira-collapsible-card",testIds:["openCaret"],events:{expandToggle:nr()},state({inputs:e}){return{isExpanded:!!e.startExpanded}},hostClasses:{"vira-collapsible-card-expanded":({state:e})=>e.isExpanded,"vira-collapsible-card-expansion-blocked":({inputs:e})=>!!e.blockExpansion,"vira-collapsible-card-card-styles":({inputs:e})=>!e.rawCollapsible},styles:({hostClasses:e})=>z`
        :host {
            display: inline-flex;
        }

        ${e["vira-collapsible-card-expanded"].selector} .open-caret {
            transform: rotate(180deg);
        }

        ${pi} {
            flex-grow: 1;
            max-width: 100%;
        }

        ${e["vira-collapsible-card-card-styles"].selector} {
            & ${pi} {
                border: 1px solid ${K["vira-form-border-color"].value};
                border-radius: ${K["vira-form-wrapper-radius"].value};
            }

            & .card-header {
                padding: 8px 16px;
            }

            & .card-content {
                padding: 8px 16px 8px 16px;
            }
        }

        ${e["vira-collapsible-card-expansion-blocked"].selector} {
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
            overflow-x: auto;
            overflow-y: hidden;
        }

        @media print {
            ${pi} {
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
    `,slotNames:["header"],render({inputs:e,slotNames:t,state:r,updateState:n,testIds:i,dispatch:o,events:s}){e.blockExpansion&&n({isExpanded:!0});const a=r.isExpanded||e.expandOnPrint?y`
                      <div class="card-content">
                          <slot></slot>
                      </div>
                  `:fe,l=e.hideHeader?fe:y`
                  <div class="card-header">
                      <slot name=${t.header}><div class="header-filler"></div></slot>

                      ${e.blockExpansion?fe:y`
                                <${oe.assign({icon:_p,fitContainer:!0})}
                                    ${Cm(i.openCaret)}
                                    class="open-caret"
                                ></${oe}>
                            `}
                  </div>
              `;return y`
            <${pi.assign({expanded:r.isExpanded,expandOnPrint:e.expandOnPrint??!1})}
                ${Ee(pi.events.expandChange,u=>{u.stopImmediatePropagation(),!e.blockExpansion&&(n({isExpanded:u.detail}),o(new s.expandToggle(u.detail)))})}
            >
                <div class="header-wrapper" slot=${pi.slotNames.header}>
                    ${l}
                </div>
                ${a}
            </${pi}>
        `}}),Pv=di()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:({cssVars:e})=>z`
        :host {
            color: ${K["vira-form-error-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,render(){return y`
            <slot></slot>
        `}});function Pm({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(r=>Pm({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function rB({value:e,allowed:t,blocked:r}){const n=String(e),i=t?Pm({input:n,matcher:t}):!0,o=r?Pm({input:n,matcher:r}):!1;return i&&!o}function Im(e){const t=String(e.value);if(!e.value)return{filtered:t,blocked:""};const{filtered:r,blocked:n}=t.split("").reduce((i,o)=>(rB({...e,value:o})?i.filtered.push(o):i.blocked.push(o),i),{filtered:[],blocked:[]});return{filtered:r.join(""),blocked:n.join("")}}function nB({inputs:e,previousValue:t,event:r,inputBlockedCallback:n,newValueCallback:i}){const o=zu(r,HTMLInputElement),s=T.hasKey(r,"data")&&hg.isString(r.data)||"";if(s){const{blocked:l}=Im({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});l.length&&n(l)}const a=Im({value:o.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;o.value!==a&&(o.value=a),t!==a&&i(a)}var as;(function(e){e.Default="text",e.Password="password",e.Email="email",e.Number="number"})(as||(as={}));const Pr=di()({tagName:"vira-input",cssVars:{"vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>z`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                color: ${K["vira-form-foreground-color"].value};
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
                    font-weight: ${K["vira-form-label-font-weight"].value};
                    text-align: left;
                    flex-shrink: 0;
                    flex-wrap: wrap;
                }
            }

            ${e["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${e["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${e["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e["vira-input-fit-text"].selector} .size-span {
                ${un};
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
                ${Ta};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${un};
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
                border-radius: ${K["vira-form-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .wrapper-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${K["vira-form-border-color"].value};
            }

            .input-wrapper {
                ${un};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${K["vira-form-radius"].value};
                background-color: ${K["vira-form-background-color"].value};
                /*
                    Border colors are actually applied via the .wrapper-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${un};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
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
                    ${Uu({elementBorderSize:0,noNesting:!0})}
                }
            }

            ::selection {
                background: ${K["vira-form-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${K["vira-form-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input::placeholder {
                color: ${K["vira-form-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${Ta};
            }

            button {
                ${un};
                cursor: pointer;
                display: flex;
                transition: color
                    ${yo["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${K["vira-form-placeholder-color"].value};
            }

            .clear-x-button:hover {
                color: ${K["vira-form-error-color"].value};
            }

            .clear-x-button:active {
                color: ${K["vira-form-error-active-color"].value};
            }

            .show-password-button:hover {
                color: ${K["vira-form-accent-primary-color"].value};
            }

            .show-password-button:active {
                color: ${K["vira-form-accent-primary-active-color"].value};
            }

            ${e["vira-input-error"].selector} {
                & .wrapper-border {
                    border-color: ${K["vira-form-error-color"].value};
                }
            }

            ${e["vira-input-disabled"].selector} {
                cursor: not-allowed;

                & * {
                    cursor: not-allowed;
                }

                & > * {
                    ${Sa};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,events:{valueChange:nr(),inputBlocked:nr()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:ra(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:r,updateState:n,events:i,host:o})=>{const{filtered:s}=Im({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?y`
                  <${oe.assign({icon:e.icon})}
                      class="left-side-icon"
                  ></${oe}>
              `:fe,l=e.fitText?z`
                  width: ${r.forcedInputWidth}px;
              `:fe,u=Ee("mousedown",h=>{const g=zu(h,HTMLElement,{useOriginalTarget:!0}),m=Qt.instanceOf(o.shadowRoot.querySelector("input"),HTMLInputElement);g!==m&&(h.preventDefault(),m.focus())}),d=e.disableBrowserHelps||e.type===as.Password,f=y`
            <span class="input-wrapper" ${e.label?fe:u}>
                ${a}
                ${Xn(!!e.fitText,y`
                        <span
                            class="size-span"
                            ${H5(({contentRect:h})=>{n({forcedInputWidth:h.width})})}
                        >
                            <pre>${s||e.placeholder||fe}</pre>
                        </span>
                    `)}

                <input
                    id=${Xt(e.label?r.randomId:void 0)}
                    aria-label=${Xt(e.label||void 0)}
                    autofocus=${!1}
                    type=${iB(e.type,r.showPassword)}
                    style=${l}
                    autocomplete=${Xt(d?"off":void 0)}
                    autocorrect=${Xt(d?"off":void 0)}
                    autocapitalize=${Xt(d?"off":void 0)}
                    spellcheck=${Xt(d?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${Ee("input",h=>{nB({inputs:e,previousValue:s,event:h,inputBlockedCallback(g){t(new i.inputBlocked(g))},newValueCallback(g){t(new i.valueChange(g))}})})}
                    placeholder=${Xt(e.placeholder||void 0)}
                    ${ns(e.attributePassthrough)}
                />

                ${Xn(!!(e.showClearButton&&e.value),y`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${Ee("mousedown",h=>{h.stopImmediatePropagation(),h.preventDefault()})}
                            ${Ee("click",()=>{e.disabled||t(new i.valueChange(""))})}
                        >
                            <${oe.assign({icon:x$})}></${oe}>
                        </button>
                    `)}
                ${Xn(e.type===as.Password,y`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${Ee("mousedown",h=>{h.stopImmediatePropagation(),h.preventDefault()})}
                            ${Ee("click",()=>{n({showPassword:!r.showPassword})})}
                        >
                            <${oe.assign({icon:r.showPassword?jp:A$})}></${oe}>
                        </button>
                    `)}
                ${Xn(!!e.suffix,y`
                        <div class="suffix">${e.suffix}</div>
                    `)}

                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>
            </span>
        `;return e.label?y`
                <label for=${r.randomId} ${u}>
                    <span class="input-label">${e.label}</span>
                    ${f}
                </label>
            `:f}});function iB(e,t){return e===as.Password&&t?as.Default:e||as.Default}const ls=di()({tagName:"vira-select",state(){return{randomId:ra(32)}},events:{valueChange:nr()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError,"vira-select-not-raw":({inputs:e})=>!e.rawSelect},styles:({hostClasses:e,cssVars:t})=>z`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${K["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${un};
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
                font: inherit;
                outline: none;
                width: 100%;
                border: none;
                background: none;
                border-radius: inherit;
                cursor: pointer;
                /* Prevent the left pixel of text getting cut off. */
                padding-left: 0.5px;
                padding-right: 26px;
                overflow: hidden;
                text-overflow: ellipsis;

                &.placeholder {
                    color: ${K["vira-form-placeholder-color"].value};
                }

                &.with-icon {
                    padding-left: ${t["vira-select-icon-padding"].value};
                }
            }

            & ${oe} {
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

        ${e["vira-select-not-raw"].selector} {
            .select-wrapper {
                border-radius: ${K["vira-form-radius"].value};
                color: ${K["vira-form-foreground-color"].value};
                background-color: ${K["vira-form-background-color"].value};
                /*
                    Border colors are actually applied via the .wrapper-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                cursor: pointer;

                & select {
                    padding: ${t["vira-select-padding-vertical"].value} 31px
                        ${t["vira-select-padding-vertical"].value}
                        ${t["vira-select-padding-horizontal"].value};

                    &:focus:focus-visible:not([aria-disabled='true']) ~ .focus-border {
                        ${Uu({elementBorderSize:0,noNesting:!0})}
                    }
                }

                & .border-style {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: ${K["vira-form-radius"].value};
                    z-index: 0;
                    pointer-events: none;
                }

                & .wrapper-border {
                    top: -1px;
                    left: -1px;
                    border: 1px solid ${K["vira-form-border-color"].value};
                    transition: border
                        ${yo["vira-interaction-animation-duration"].value};
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
                font-weight: ${K["vira-form-label-font-weight"].value};
                text-align: left;
                flex-shrink: 0;
                flex-wrap: wrap;
            }
        }

        ${e["vira-select-disabled"].selector} {
            cursor: not-allowed;

            & select,
            & .wrapper-border {
                ${Sa}
            }
            ${oe} {
                ${Sa}
            }
            & * {
                cursor: not-allowed;
            }
        }

        :host(.${e["vira-select-not-raw"].name}.${e["vira-select-error"].name})
            .wrapper-border {
            border-color: ${K["vira-form-error-color"].value};
        }
    `,render({inputs:e,state:t,dispatch:r,events:n}){const i=e.value||void 0,o=e.placeholder||i==null?y`
                      <option value="" disabled ?selected=${i==null}>
                          ${e.placeholder}
                      </option>
                  `:fe,s=y`
            <span class="select-wrapper">
                <select
                    .value=${Xt(i)}
                    class=${mn({placeholder:!i&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${Xt(e.label?t.randomId:void 0)}
                    aria-label=${Xt(e.label||void 0)}
                    aria-disabled=${Xt(e.disabled?"true":void 0)}
                    ${Ee("input",a=>{const l=zu(a,HTMLSelectElement),u=l.value;l.value!==i&&(l.selectedIndex=e.options.findIndex(d=>d.value===i)),r(new n.valueChange(u))})}
                    ${ns(e.attributePassthrough?.select)}
                >
                    ${o}
                    ${e.options.map(a=>y`
                            <option
                                ?selected=${a.value===i}
                                aria-label=${a.label}
                                ?disabled=${a.disabled}
                                value=${a.value}
                            >
                                ${a.label}
                            </option>
                        `)}
                </select>
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <select> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>

                <${oe.assign({icon:e.icon})}
                    class="input-icon"
                ></${oe}>
                <${oe.assign({icon:_p})}
                    class="trigger-icon"
                ></${oe}>
            </span>
        `;return e.label?y`
                <label for=${t.randomId} ${ns(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}});var gu;(function(e){e.a98="a98",e.cubehelix="cubehelix",e.dlab="dlab",e.dlch="dlch",e.hsi="hsi",e.hsl="hsl",e.hsv="hsv",e.hwb="hwb",e.itp="itp",e.jab="jab",e.jch="jch",e.lab="lab",e.lab65="lab65",e.lch="lch",e.lch65="lch65",e.lchuv="lchuv",e.lrgb="lrgb",e.luv="luv",e.okhsl="okhsl",e.okhsv="okhsv",e.oklab="oklab",e.oklch="oklch",e.p3="p3",e.prophoto="prophoto",e.rec2020="rec2020",e.rgb="rgb",e.xyb="xyb",e.xyz50="xyz50",e.xyz65="xyz65",e.yiq="yiq"})(gu||(gu={}));const zp={rgb:{coords:{r:{min:0,max:255,factor:255},g:{min:0,max:255,factor:255},b:{min:0,max:255,factor:255}},colorSpace:"rgb"},hex:{coords:{r:{min:0,max:255,factor:255,radix:16,radixPad:2},g:{min:0,max:255,factor:255,radix:16,radixPad:2},b:{min:0,max:255,factor:255,radix:16,radixPad:2}},conversionFormat:gu.rgb,rawSyntax:"hexString",colorSpace:"rgb"},hsl:{coords:{h:{min:0,max:360},s:{min:0,max:100,factor:100,digits:1},l:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},hwb:{coords:{h:{min:0,max:360},w:{min:0,max:100,factor:100,digits:1},b:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},lab:{coords:{l:{min:0,max:100,digits:1},a:{min:-128,max:127},b:{min:-128,max:127}},colorSpace:"lab"},lch:{coords:{l:{min:0,max:100,digits:1},c:{min:0,max:230},h:{min:0,max:360}},colorSpace:"lab"},oklab:{coords:{l:{min:0,max:1,digits:3},a:{min:-.5,max:.5,digits:3},b:{min:-.5,max:.5,digits:3}},colorSpace:"oklab"},oklch:{coords:{l:{min:0,max:1,digits:3},c:{min:0,max:.4,digits:3},h:{min:0,max:360,digits:1}},colorSpace:"oklab"}},Eo=ut(zp,e=>e),Me={...Eo,name:"name",hexString:"hexString"},yi=ut(zp,(e,t)=>{const r=T.isEnumValue(e,gu)&&T.isEnumValue(e,Eo)?e:"conversionFormat"in t&&t.conversionFormat&&T.isEnumValue(t.conversionFormat,gu)&&T.isEnumValue(t.conversionFormat,Eo)?t.conversionFormat:void 0;return Nt.isTruthy(r,`Invalid conversion format for color format '${e}' ${$(t)}.`),{...t,colorFormat:e,conversionFormat:r,rawSyntax:Qt.isEnumValue("rawSyntax"in t&&t.rawSyntax?t.rawSyntax:e,Me)}});ko(Xc(zp),e=>({key:e.colorSpace,value:e.colorSpace}),{});ki(yi).reduce((e,[t,r])=>(_a(e,r.colorSpace,()=>({}))[t]=r,e),{});function oB(e){return e.startsWith("rgb")?Me.rgb:e.startsWith("hsl")?Me.hsl:e.startsWith("hwb")?Me.hwb:e.startsWith("oklab")?Me.oklab:e.startsWith("oklch")?Me.oklch:e.startsWith("lab")?Me.lab:e.startsWith("lch")?Me.lch:e.startsWith("#")?Me.hexString:Me.name}const Nm={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(const e in Nm)Object.freeze(Nm[e]);const pu=Object.freeze(Nm),sB=Object.keys(pu).reduce((e,t)=>t.length>e.length?t:e),aB=qd(ut(pu,(e,t)=>Vt(Object.entries(pu),([n])=>n,(n,[,i])=>n===e?!1:T.deepEquals(i,t))),(e,t)=>!!t.length),Iv=Object.entries(aB).reduce((e,t)=>{const r=[e[0],...e[1]].join(", ");return[t[0],...t[1]].join(", ").length>r.length?t:e}).reduce((e,t)=>T.isArray(t)?[...e,...t]:[...e,t],[]),Nv=Math.max(sB.length,Iv.length+(Iv.length-1)*2),S$=(e,t)=>{if(typeof e=="number"){if(t===3)return{mode:"rgb",r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(t===4)return{mode:"rgb",r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(t===6)return{mode:"rgb",r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(t===8)return{mode:"rgb",r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},lB={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},uB=e=>S$(lB[e.toLowerCase()],6),cB=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,dB=e=>{let t;return(t=e.match(cB))?S$(parseInt(t[1],16),t[1].length):void 0},vo="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)",Zl=`${vo}%`,Up=`(?:${vo}%|${vo})`,fB=`(?:${vo}(deg|grad|rad|turn)|${vo})`,Pa="\\s*,\\s*",hB=new RegExp(`^rgba?\\(\\s*${vo}${Pa}${vo}${Pa}${vo}\\s*(?:,\\s*${Up}\\s*)?\\)$`),mB=new RegExp(`^rgba?\\(\\s*${Zl}${Pa}${Zl}${Pa}${Zl}\\s*(?:,\\s*${Up}\\s*)?\\)$`),gB=e=>{let t={mode:"rgb"},r;if(r=e.match(hB))r[1]!==void 0&&(t.r=r[1]/255),r[2]!==void 0&&(t.g=r[2]/255),r[3]!==void 0&&(t.b=r[3]/255);else if(r=e.match(mB))r[1]!==void 0&&(t.r=r[1]/100),r[2]!==void 0&&(t.g=r[2]/100),r[3]!==void 0&&(t.b=r[3]/100);else return;return r[4]!==void 0?t.alpha=Math.max(0,Math.min(1,r[4]/100)):r[5]!==void 0&&(t.alpha=Math.max(0,Math.min(1,+r[5]))),t},Om=(e,t)=>e===void 0?void 0:typeof e!="object"?Lm(e):e.mode!==void 0?e:t?{...e,mode:t}:void 0,ps=(e="rgb")=>t=>(t=Om(t,e))!==void 0?t.mode===e?t:vi[t.mode][e]?vi[t.mode][e](t):e==="rgb"?vi[t.mode].rgb(t):vi.rgb[e](vi[t.mode].rgb(t)):void 0,vi={},T$={},xd=[],M$={},pB=e=>e,Xe=e=>(vi[e.mode]={...vi[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(t=>{vi[t]||(vi[t]={}),vi[t][e.mode]=e.fromMode[t]}),e.ranges||(e.ranges={}),e.difference||(e.difference={}),e.channels.forEach(t=>{if(e.ranges[t]===void 0&&(e.ranges[t]=[0,1]),!e.interpolate[t])throw new Error(`Missing interpolator for: ${t}`);typeof e.interpolate[t]=="function"&&(e.interpolate[t]={use:e.interpolate[t]}),e.interpolate[t].fixup||(e.interpolate[t].fixup=pB)}),T$[e.mode]=e,(e.parse||[]).forEach(t=>{bB(t,e.mode)}),ps(e.mode)),Tf=e=>T$[e],bB=(e,t)=>{if(typeof e=="string"){if(!t)throw new Error("'mode' required when 'parser' is a string");M$[e]=t}else typeof e=="function"&&xd.indexOf(e)<0&&xd.push(e)},Rm=/[^\x00-\x7F]|[a-zA-Z_]/,yB=/[^\x00-\x7F]|[-\w]/,B={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"};let de=0;function wc(e){let t=e[de],r=e[de+1];return t==="-"||t==="+"?/\d/.test(r)||r==="."&&/\d/.test(e[de+2]):t==="."?/\d/.test(r):/\d/.test(t)}function Bm(e){if(de>=e.length)return!1;let t=e[de];if(Rm.test(t))return!0;if(t==="-"){if(e.length-de<2)return!1;let r=e[de+1];return!!(r==="-"||Rm.test(r))}return!1}const vB={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function wl(e){let t="";if((e[de]==="-"||e[de]==="+")&&(t+=e[de++]),t+=kc(e),e[de]==="."&&/\d/.test(e[de+1])&&(t+=e[de++]+kc(e)),(e[de]==="e"||e[de]==="E")&&((e[de+1]==="-"||e[de+1]==="+")&&/\d/.test(e[de+2])?t+=e[de++]+e[de++]+kc(e):/\d/.test(e[de+1])&&(t+=e[de++]+kc(e))),Bm(e)){let r=$d(e);return r==="deg"||r==="rad"||r==="turn"||r==="grad"?{type:B.Hue,value:t*vB[r]}:void 0}return e[de]==="%"?(de++,{type:B.Percentage,value:+t}):{type:B.Number,value:+t}}function kc(e){let t="";for(;/\d/.test(e[de]);)t+=e[de++];return t}function $d(e){let t="";for(;de<e.length&&yB.test(e[de]);)t+=e[de++];return t}function wB(e){let t=$d(e);return e[de]==="("?(de++,{type:B.Function,value:t}):t==="none"?{type:B.None,value:void 0}:{type:B.Ident,value:t}}function kB(e=""){let t=e.trim(),r=[],n;for(de=0;de<t.length;){if(n=t[de++],n===`
`||n==="	"||n===" "){for(;de<t.length&&(t[de]===`
`||t[de]==="	"||t[de]===" ");)de++;continue}if(n===",")return;if(n===")"){r.push({type:B.ParenClose});continue}if(n==="+"){if(de--,wc(t)){r.push(wl(t));continue}return}if(n==="-"){if(de--,wc(t)){r.push(wl(t));continue}if(Bm(t)){r.push({type:B.Ident,value:$d(t)});continue}return}if(n==="."){if(de--,wc(t)){r.push(wl(t));continue}return}if(n==="/"){for(;de<t.length&&(t[de]===`
`||t[de]==="	"||t[de]===" ");)de++;let i;if(wc(t)&&(i=wl(t),i.type!==B.Hue)){r.push({type:B.Alpha,value:i});continue}if(Bm(t)&&$d(t)==="none"){r.push({type:B.Alpha,value:{type:B.None,value:void 0}});continue}return}if(/\d/.test(n)){de--,r.push(wl(t));continue}if(Rm.test(n)){de--,r.push(wB(t));continue}return}return r}function xB(e){e._i=0;let t=e[e._i++];if(!t||t.type!==B.Function||t.value!=="color"||(t=e[e._i++],t.type!==B.Ident))return;const r=M$[t.value];if(!r)return;const n={mode:r},i=F$(e,!1);if(!i)return;const o=Tf(r).channels;for(let s=0,a,l;s<o.length;s++)a=i[s],l=o[s],a.type!==B.None&&(n[l]=a.type===B.Number?a.value:a.value/100,l==="alpha"&&(n[l]=Math.max(0,Math.min(1,n[l]))));return n}function F$(e,t){const r=[];let n;for(;e._i<e.length;){if(n=e[e._i++],n.type===B.None||n.type===B.Number||n.type===B.Alpha||n.type===B.Percentage||t&&n.type===B.Hue){r.push(n);continue}if(n.type===B.ParenClose){if(e._i<e.length)return;continue}return}if(!(r.length<3||r.length>4)){if(r.length===4){if(r[3].type!==B.Alpha)return;r[3]=r[3].value}return r.length===3&&r.push({type:B.None,value:void 0}),r.every(i=>i.type!==B.Alpha)?r:void 0}}function $B(e,t){e._i=0;let r=e[e._i++];if(!r||r.type!==B.Function)return;let n=F$(e,t);if(n)return n.unshift(r.value),n}const Lm=e=>{if(typeof e!="string")return;const t=kB(e),r=t?$B(t,!0):void 0;let n,i=0,o=xd.length;for(;i<o;)if((n=xd[i++](e,r))!==void 0)return n;return t?xB(t):void 0};function DB(e,t){if(!t||t[0]!=="rgb"&&t[0]!=="rgba")return;const r={mode:"rgb"},[,n,i,o,s]=t;if(!(n.type===B.Hue||i.type===B.Hue||o.type===B.Hue))return n.type!==B.None&&(r.r=n.type===B.Number?n.value/255:n.value/100),i.type!==B.None&&(r.g=i.type===B.Number?i.value/255:i.value/100),o.type!==B.None&&(r.b=o.type===B.Number?o.value/255:o.value/100),s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const AB=e=>e==="transparent"?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,EB=(e,t,r)=>e+r*(t-e),CB=e=>{let t=[];for(let r=0;r<e.length-1;r++){let n=e[r],i=e[r+1];n===void 0&&i===void 0?t.push(void 0):n!==void 0&&i!==void 0?t.push([n,i]):t.push(n!==void 0?[n,n]:[i,i])}return t},SB=e=>t=>{let r=CB(t);return n=>{let i=n*r.length,o=n>=1?r.length-1:Math.max(Math.floor(i),0),s=r[o];return s===void 0?void 0:e(s[0],s[1],i-o)}},U=SB(EB),Zt=e=>{let t=!1,r=e.map(n=>n!==void 0?(t=!0,n):1);return t?r:e},el={mode:"rgb",channels:["r","g","b","alpha"],parse:[DB,dB,gB,uB,AB,"srgb"],serialize:"srgb",interpolate:{r:U,g:U,b:U,alpha:{use:U,fixup:Zt}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},r0=(e=0)=>Math.pow(Math.abs(e),563/256)*Math.sign(e),Ov=e=>{let t=r0(e.r),r=r0(e.g),n=r0(e.b),i={mode:"xyz65",x:.5766690429101305*t+.1855582379065463*r+.1882286462349947*n,y:.297344975250536*t+.6273635662554661*r+.0752914584939979*n,z:.0270313613864123*t+.0706888525358272*r+.9913375368376386*n};return e.alpha!==void 0&&(i.alpha=e.alpha),i},n0=e=>Math.pow(Math.abs(e),256/563)*Math.sign(e),Rv=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i={mode:"a98",r:n0(e*2.0415879038107465-t*.5650069742788597-.3447313507783297*r),g:n0(e*-.9692436362808798+t*1.8759675015077206+.0415550574071756*r),b:n0(e*.0134442806320312-t*.1183623922310184+1.0151749943912058*r)};return n!==void 0&&(i.alpha=n),i},i0=(e=0)=>{const t=Math.abs(e);return t<=.04045?e/12.92:(Math.sign(e)||1)*Math.pow((t+.055)/1.055,2.4)},tl=({r:e,g:t,b:r,alpha:n})=>{let i={mode:"lrgb",r:i0(e),g:i0(t),b:i0(r)};return n!==void 0&&(i.alpha=n),i},Fs=e=>{let{r:t,g:r,b:n,alpha:i}=tl(e),o={mode:"xyz65",x:.4123907992659593*t+.357584339383878*r+.1804807884018343*n,y:.2126390058715102*t+.715168678767756*r+.0721923153607337*n,z:.0193308187155918*t+.119194779794626*r+.9505321522496607*n};return i!==void 0&&(o.alpha=i),o},o0=(e=0)=>{const t=Math.abs(e);return t>.0031308?(Math.sign(e)||1)*(1.055*Math.pow(t,1/2.4)-.055):e*12.92},rl=({r:e,g:t,b:r,alpha:n},i="rgb")=>{let o={mode:i,r:o0(e),g:o0(t),b:o0(r)};return n!==void 0&&(o.alpha=n),o},Ps=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=rl({r:e*3.2409699419045226-t*1.537383177570094-.4986107602930034*r,g:e*-.9692436362808796+t*1.8759675015077204+.0415550574071756*r,b:e*.0556300796969936-t*.2039769588889765+1.0569715142428784*r});return n!==void 0&&(i.alpha=n),i},TB={...el,mode:"a98",parse:["a98-rgb"],serialize:"a98-rgb",fromMode:{rgb:e=>Rv(Fs(e)),xyz65:Rv},toMode:{rgb:e=>Ps(Ov(e)),xyz65:Ov}},mr=e=>(e=e%360)<0?e+360:e,MB=(e,t)=>e.map((r,n,i)=>{if(r===void 0)return r;let o=mr(r);return n===0||e[n-1]===void 0?o:t(o-mr(i[n-1]))}).reduce((r,n)=>!r.length||n===void 0||r[r.length-1]===void 0?(r.push(n),r):(r.push(n+r[r.length-1]),r),[]),Qi=e=>MB(e,t=>Math.abs(t)<=180?t:t-360*Math.sign(t)),er=[-.14861,1.78277,-.29227,-.90649,1.97294,0],FB=Math.PI/180,PB=180/Math.PI;let Bv=er[3]*er[4],Lv=er[1]*er[4],_v=er[1]*er[2]-er[0]*er[3];const IB=({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=(_v*r+e*Bv-t*Lv)/(_v+Bv-Lv),o=r-i,s=(er[4]*(t-i)-er[2]*o)/er[3],a={mode:"cubehelix",l:i,s:i===0||i===1?void 0:Math.sqrt(o*o+s*s)/(er[4]*i*(1-i))};return a.s&&(a.h=Math.atan2(s,o)*PB-120),n!==void 0&&(a.alpha=n),a},NB=({h:e,s:t,l:r,alpha:n})=>{let i={mode:"rgb"};e=(e===void 0?0:e+120)*FB,r===void 0&&(r=0);let o=t===void 0?0:t*r*(1-r),s=Math.cos(e),a=Math.sin(e);return i.r=r+o*(er[0]*s+er[1]*a),i.g=r+o*(er[2]*s+er[3]*a),i.b=r+o*(er[4]*s+er[5]*a),n!==void 0&&(i.alpha=n),i},Mf=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.s||!t.s)return 0;let r=mr(e.h),n=mr(t.h),i=Math.sin((n-r+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*t.s)*i},OB=(e,t)=>{if(e.h===void 0||t.h===void 0)return 0;let r=mr(e.h),n=mr(t.h);return Math.abs(n-r)>180?r-(n-360*Math.sign(n-r)):n-r},Ff=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.c||!t.c)return 0;let r=mr(e.h),n=mr(t.h),i=Math.sin((n-r+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*t.c)*i},RB=(e="rgb",t=[1,1,1,0])=>{let r=Tf(e),n=r.channels,i=r.difference,o=ps(e);return(s,a)=>{let l=o(s),u=o(a);return Math.sqrt(n.reduce((d,f,h)=>{let g=i[f]?i[f](l,u):l[f]-u[f];return d+(t[h]||0)*Math.pow(isNaN(g)?0:g,2)},0))}},eo=e=>{let t=e.reduce((n,i)=>{if(i!==void 0){let o=i*Math.PI/180;n.sin+=Math.sin(o),n.cos+=Math.cos(o)}return n},{sin:0,cos:0}),r=Math.atan2(t.sin,t.cos)*180/Math.PI;return r<0?360+r:r},BB={mode:"cubehelix",channels:["h","s","l","alpha"],parse:["--cubehelix"],serialize:"--cubehelix",ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:IB},toMode:{rgb:NB},interpolate:{h:{use:U,fixup:Qi},s:U,l:U,alpha:{use:U,fixup:Zt}},difference:{h:Mf},average:{h:eo}},Co=({l:e,a:t,b:r,alpha:n},i="lch")=>{t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.sqrt(t*t+r*r),s={mode:i,l:e,c:o};return o&&(s.h=mr(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(s.alpha=n),s},So=({l:e,c:t,h:r,alpha:n},i="lab")=>{r===void 0&&(r=0);let o={mode:i,l:e,a:t?t*Math.cos(r/180*Math.PI):0,b:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},P$=Math.pow(29,3)/Math.pow(3,3),I$=Math.pow(6,3)/Math.pow(29,3),Rt={X:.3457/.3585,Y:1,Z:(1-.3457-.3585)/.3585},la={X:.3127/.329,Y:1,Z:(1-.3127-.329)/.329};let s0=e=>Math.pow(e,3)>I$?Math.pow(e,3):(116*e-16)/P$;const N$=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=(e+16)/116,o=t/500+i,s=i-r/200,a={mode:"xyz65",x:s0(o)*la.X,y:s0(i)*la.Y,z:s0(s)*la.Z};return n!==void 0&&(a.alpha=n),a},Pf=e=>Ps(N$(e)),a0=e=>e>I$?Math.cbrt(e):(P$*e+16)/116,O$=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=a0(e/la.X),o=a0(t/la.Y),s=a0(r/la.Z),a={mode:"lab65",l:116*o-16,a:500*(i-o),b:200*(o-s)};return n!==void 0&&(a.alpha=n),a},If=e=>{let t=O$(Fs(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},Dd=1,R$=1,bu=26/180*Math.PI,Ad=Math.cos(bu),Ed=Math.sin(bu),B$=100/Math.log(139/100),_m=({l:e,c:t,h:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i={mode:"lab65",l:(Math.exp(e*Dd/B$)-1)/.0039},o=(Math.exp(.0435*t*R$*Dd)-1)/.075,s=o*Math.cos(r/180*Math.PI-bu),a=o*Math.sin(r/180*Math.PI-bu);return i.a=s*Ad-a/.83*Ed,i.b=s*Ed+a/.83*Ad,n!==void 0&&(i.alpha=n),i},jm=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=t*Ad+r*Ed,o=.83*(r*Ad-t*Ed),s=Math.sqrt(i*i+o*o),a={mode:"dlch",l:B$/Dd*Math.log(1+.0039*e),c:Math.log(1+.075*s)/(.0435*R$*Dd)};return a.c&&(a.h=mr((Math.atan2(o,i)+bu)/Math.PI*180)),n!==void 0&&(a.alpha=n),a},jv=e=>_m(Co(e,"dlch")),zv=e=>So(jm(e),"dlab"),LB={mode:"dlab",parse:["--din99o-lab"],serialize:"--din99o-lab",toMode:{lab65:jv,rgb:e=>Pf(jv(e))},fromMode:{lab65:zv,rgb:e=>zv(If(e))},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:U,a:U,b:U,alpha:{use:U,fixup:Zt}}},_B={mode:"dlch",parse:["--din99o-lch"],serialize:"--din99o-lch",toMode:{lab65:_m,dlab:e=>So(e,"dlab"),rgb:e=>Pf(_m(e))},fromMode:{lab65:jm,dlab:e=>Co(e,"dlch"),rgb:e=>jm(If(e))},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:U,c:U,h:{use:U,fixup:Qi},alpha:{use:U,fixup:Zt}},difference:{h:Ff},average:{h:eo}};function jB({h:e,s:t,i:r,alpha:n}){e=mr(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.abs(e/60%2-1),o;switch(Math.floor(e/60)){case 0:o={r:r*(1+t*(3/(2-i)-1)),g:r*(1+t*(3*(1-i)/(2-i)-1)),b:r*(1-t)};break;case 1:o={r:r*(1+t*(3*(1-i)/(2-i)-1)),g:r*(1+t*(3/(2-i)-1)),b:r*(1-t)};break;case 2:o={r:r*(1-t),g:r*(1+t*(3/(2-i)-1)),b:r*(1+t*(3*(1-i)/(2-i)-1))};break;case 3:o={r:r*(1-t),g:r*(1+t*(3*(1-i)/(2-i)-1)),b:r*(1+t*(3/(2-i)-1))};break;case 4:o={r:r*(1+t*(3*(1-i)/(2-i)-1)),g:r*(1-t),b:r*(1+t*(3/(2-i)-1))};break;case 5:o={r:r*(1+t*(3/(2-i)-1)),g:r*(1-t),b:r*(1+t*(3*(1-i)/(2-i)-1))};break;default:o={r:r*(1-t),g:r*(1-t),b:r*(1-t)}}return o.mode="rgb",n!==void 0&&(o.alpha=n),o}function zB({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.max(e,t,r),o=Math.min(e,t,r),s={mode:"hsi",s:e+t+r===0?0:1-3*o/(e+t+r),i:(e+t+r)/3};return i-o!==0&&(s.h=(i===e?(t-r)/(i-o)+(t<r)*6:i===t?(r-e)/(i-o)+2:(e-t)/(i-o)+4)*60),n!==void 0&&(s.alpha=n),s}const UB={mode:"hsi",toMode:{rgb:jB},parse:["--hsi"],serialize:"--hsi",fromMode:{rgb:zB},channels:["h","s","i","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:U,fixup:Qi},s:U,i:U,alpha:{use:U,fixup:Zt}},difference:{h:Mf},average:{h:eo}};function qB({h:e,s:t,l:r,alpha:n}){e=mr(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let i=r+t*(r<.5?r:1-r),o=i-(i-r)*2*Math.abs(e/60%2-1),s;switch(Math.floor(e/60)){case 0:s={r:i,g:o,b:2*r-i};break;case 1:s={r:o,g:i,b:2*r-i};break;case 2:s={r:2*r-i,g:i,b:o};break;case 3:s={r:2*r-i,g:o,b:i};break;case 4:s={r:o,g:2*r-i,b:i};break;case 5:s={r:i,g:2*r-i,b:o};break;default:s={r:2*r-i,g:2*r-i,b:2*r-i}}return s.mode="rgb",n!==void 0&&(s.alpha=n),s}function WB({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.max(e,t,r),o=Math.min(e,t,r),s={mode:"hsl",s:i===o?0:(i-o)/(1-Math.abs(i+o-1)),l:.5*(i+o)};return i-o!==0&&(s.h=(i===e?(t-r)/(i-o)+(t<r)*6:i===t?(r-e)/(i-o)+2:(e-t)/(i-o)+4)*60),n!==void 0&&(s.alpha=n),s}const VB=(e,t)=>{switch(t){case"deg":return+e;case"rad":return e/Math.PI*180;case"grad":return e/10*9;case"turn":return e*360}},KB=new RegExp(`^hsla?\\(\\s*${fB}${Pa}${Zl}${Pa}${Zl}\\s*(?:,\\s*${Up}\\s*)?\\)$`),HB=e=>{let t=e.match(KB);if(!t)return;let r={mode:"hsl"};return t[3]!==void 0?r.h=+t[3]:t[1]!==void 0&&t[2]!==void 0&&(r.h=VB(t[1],t[2])),t[4]!==void 0&&(r.s=Math.min(Math.max(0,t[4]/100),1)),t[5]!==void 0&&(r.l=Math.min(Math.max(0,t[5]/100),1)),t[6]!==void 0?r.alpha=Math.max(0,Math.min(1,t[6]/100)):t[7]!==void 0&&(r.alpha=Math.max(0,Math.min(1,+t[7]))),r};function GB(e,t){if(!t||t[0]!=="hsl"&&t[0]!=="hsla")return;const r={mode:"hsl"},[,n,i,o,s]=t;if(n.type!==B.None){if(n.type===B.Percentage)return;r.h=n.value}if(i.type!==B.None){if(i.type===B.Hue)return;r.s=i.value/100}if(o.type!==B.None){if(o.type===B.Hue)return;r.l=o.value/100}return s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const L$={mode:"hsl",toMode:{rgb:qB},fromMode:{rgb:WB},channels:["h","s","l","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[GB,HB],serialize:e=>`hsl(${e.h!==void 0?e.h:"none"} ${e.s!==void 0?e.s*100+"%":"none"} ${e.l!==void 0?e.l*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:U,fixup:Qi},s:U,l:U,alpha:{use:U,fixup:Zt}},difference:{h:Mf},average:{h:eo}};function _$({h:e,s:t,v:r,alpha:n}){e=mr(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.abs(e/60%2-1),o;switch(Math.floor(e/60)){case 0:o={r,g:r*(1-t*i),b:r*(1-t)};break;case 1:o={r:r*(1-t*i),g:r,b:r*(1-t)};break;case 2:o={r:r*(1-t),g:r,b:r*(1-t*i)};break;case 3:o={r:r*(1-t),g:r*(1-t*i),b:r};break;case 4:o={r:r*(1-t*i),g:r*(1-t),b:r};break;case 5:o={r,g:r*(1-t),b:r*(1-t*i)};break;default:o={r:r*(1-t),g:r*(1-t),b:r*(1-t)}}return o.mode="rgb",n!==void 0&&(o.alpha=n),o}function j$({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.max(e,t,r),o=Math.min(e,t,r),s={mode:"hsv",s:i===0?0:1-o/i,v:i};return i-o!==0&&(s.h=(i===e?(t-r)/(i-o)+(t<r)*6:i===t?(r-e)/(i-o)+2:(e-t)/(i-o)+4)*60),n!==void 0&&(s.alpha=n),s}const z$={mode:"hsv",toMode:{rgb:_$},parse:["--hsv"],serialize:"--hsv",fromMode:{rgb:j$},channels:["h","s","v","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:U,fixup:Qi},s:U,v:U,alpha:{use:U,fixup:Zt}},difference:{h:Mf},average:{h:eo}};function ZB({h:e,w:t,b:r,alpha:n}){if(t===void 0&&(t=0),r===void 0&&(r=0),t+r>1){let i=t+r;t/=i,r/=i}return _$({h:e,s:r===1?1:1-t/(1-r),v:1-r,alpha:n})}function YB(e){let t=j$(e);if(t===void 0)return;let r=t.s!==void 0?t.s:0,n=t.v!==void 0?t.v:0,i={mode:"hwb",w:(1-r)*n,b:1-n};return t.h!==void 0&&(i.h=t.h),t.alpha!==void 0&&(i.alpha=t.alpha),i}function JB(e,t){if(!t||t[0]!=="hwb")return;const r={mode:"hwb"},[,n,i,o,s]=t;if(n.type!==B.None){if(n.type===B.Percentage)return;r.h=n.value}if(i.type!==B.None){if(i.type===B.Hue)return;r.w=i.value/100}if(o.type!==B.None){if(o.type===B.Hue)return;r.b=o.value/100}return s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const XB={mode:"hwb",toMode:{rgb:ZB},fromMode:{rgb:YB},channels:["h","w","b","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[JB],serialize:e=>`hwb(${e.h!==void 0?e.h:"none"} ${e.w!==void 0?e.w*100+"%":"none"} ${e.b!==void 0?e.b*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:U,fixup:Qi},w:U,b:U,alpha:{use:U,fixup:Zt}},difference:{h:OB},average:{h:eo}},U$=203,Nf=.1593017578125,q$=78.84375,Of=.8359375,Rf=18.8515625,Bf=18.6875;function l0(e){if(e<0)return 0;const t=Math.pow(e,1/q$);return 1e4*Math.pow(Math.max(0,t-Of)/(Rf-Bf*t),1/Nf)}function u0(e){if(e<0)return 0;const t=Math.pow(e/1e4,Nf);return Math.pow((Of+Rf*t)/(1+Bf*t),q$)}const c0=e=>Math.max(e/U$,0),Uv=({i:e,t,p:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const i=l0(e+.008609037037932761*t+.11102962500302593*r),o=l0(e-.00860903703793275*t-.11102962500302599*r),s=l0(e+.5600313357106791*t-.32062717498731885*r),a={mode:"xyz65",x:c0(2.070152218389422*i-1.3263473389671556*o+.2066510476294051*s),y:c0(.3647385209748074*i+.680566024947227*o-.0453045459220346*s),z:c0(-.049747207535812*i-.0492609666966138*o+1.1880659249923042*s)};return n!==void 0&&(a.alpha=n),a},d0=(e=0)=>Math.max(e*U$,0),qv=({x:e,y:t,z:r,alpha:n})=>{const i=d0(e),o=d0(t),s=d0(r),a=u0(.3592832590121217*i+.6976051147779502*o-.0358915932320289*s),l=u0(-.1920808463704995*i+1.1004767970374323*o+.0753748658519118*s),u=u0(.0070797844607477*i+.0748396662186366*o+.8433265453898765*s),d=.5*a+.5*l,f=1.61376953125*a-3.323486328125*l+1.709716796875*u,h=4.378173828125*a-4.24560546875*l-.132568359375*u,g={mode:"itp",i:d,t:f,p:h};return n!==void 0&&(g.alpha=n),g},QB={mode:"itp",channels:["i","t","p","alpha"],parse:["--ictcp"],serialize:"--ictcp",toMode:{xyz65:Uv,rgb:e=>Ps(Uv(e))},fromMode:{xyz65:qv,rgb:e=>qv(Fs(e))},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:U,t:U,p:U,alpha:{use:U,fixup:Zt}}},eL=134.03437499999998,tL=16295499532821565e-27,f0=e=>{if(e<0)return 0;let t=Math.pow(e/1e4,Nf);return Math.pow((Of+Rf*t)/(1+Bf*t),eL)},h0=(e=0)=>Math.max(e*203,0),W$=({x:e,y:t,z:r,alpha:n})=>{e=h0(e),t=h0(t),r=h0(r);let i=1.15*e-.15*r,o=.66*t+.34*e,s=f0(.41478972*i+.579999*o+.014648*r),a=f0(-.20151*i+1.120649*o+.0531008*r),l=f0(-.0166008*i+.2648*o+.6684799*r),u=(s+a)/2,d={mode:"jab",j:.44*u/(1-.56*u)-tL,a:3.524*s-4.066708*a+.542708*l,b:.199076*s+1.096799*a-1.295875*l};return n!==void 0&&(d.alpha=n),d},rL=134.03437499999998,Wv=16295499532821565e-27,m0=e=>{if(e<0)return 0;let t=Math.pow(e,1/rL);return 1e4*Math.pow((Of-t)/(Bf*t-Rf),1/Nf)},g0=e=>e/203,V$=({j:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=(e+Wv)/(.44+.56*(e+Wv)),o=m0(i+.13860504*t+.058047316*r),s=m0(i-.13860504*t-.058047316*r),a=m0(i-.096019242*t-.8118919*r),l={mode:"xyz65",x:g0(1.661373024652174*o-.914523081304348*s+.23136208173913045*a),y:g0(-.3250758611844533*o+1.571847026732543*s-.21825383453227928*a),z:g0(-.090982811*o-.31272829*s+1.5227666*a)};return n!==void 0&&(l.alpha=n),l},K$=e=>{let t=W$(Fs(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},H$=e=>Ps(V$(e)),nL={mode:"jab",channels:["j","a","b","alpha"],parse:["--jzazbz"],serialize:"--jzazbz",fromMode:{rgb:K$,xyz65:W$},toMode:{rgb:H$,xyz65:V$},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:U,a:U,b:U,alpha:{use:U,fixup:Zt}}},Vv=({j:e,a:t,b:r,alpha:n})=>{t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.sqrt(t*t+r*r),o={mode:"jch",j:e,c:i};return i&&(o.h=mr(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(o.alpha=n),o},Kv=({j:e,c:t,h:r,alpha:n})=>{r===void 0&&(r=0);let i={mode:"jab",j:e,a:t?t*Math.cos(r/180*Math.PI):0,b:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(i.alpha=n),i},iL={mode:"jch",parse:["--jzczhz"],serialize:"--jzczhz",toMode:{jab:Kv,rgb:e=>H$(Kv(e))},fromMode:{rgb:e=>Vv(K$(e)),jab:Vv},channels:["j","c","h","alpha"],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:U,fixup:Qi},c:U,j:U,alpha:{use:U,fixup:Zt}},difference:{h:Ff},average:{h:eo}},Lf=Math.pow(29,3)/Math.pow(3,3),qp=Math.pow(6,3)/Math.pow(29,3);let p0=e=>Math.pow(e,3)>qp?Math.pow(e,3):(116*e-16)/Lf;const Wp=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=(e+16)/116,o=t/500+i,s=i-r/200,a={mode:"xyz50",x:p0(o)*Rt.X,y:p0(i)*Rt.Y,z:p0(s)*Rt.Z};return n!==void 0&&(a.alpha=n),a},qu=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=rl({r:e*3.1341359569958707-t*1.6173863321612538-.4906619460083532*r,g:e*-.978795502912089+t*1.916254567259524+.03344273116131949*r,b:e*.07195537988411677-t*.2289768264158322+1.405386058324125*r});return n!==void 0&&(i.alpha=n),i},G$=e=>qu(Wp(e)),Wu=e=>{let{r:t,g:r,b:n,alpha:i}=tl(e),o={mode:"xyz50",x:.436065742824811*t+.3851514688337912*r+.14307845442264197*n,y:.22249319175623702*t+.7168870538238823*r+.06061979053616537*n,z:.013923904500943465*t+.09708128566574634*r+.7140993584005155*n};return i!==void 0&&(o.alpha=i),o},b0=e=>e>qp?Math.cbrt(e):(Lf*e+16)/116,Vp=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=b0(e/Rt.X),o=b0(t/Rt.Y),s=b0(r/Rt.Z),a={mode:"lab",l:116*o-16,a:500*(i-o),b:200*(o-s)};return n!==void 0&&(a.alpha=n),a},Z$=e=>{let t=Vp(Wu(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t};function oL(e,t){if(!t||t[0]!=="lab")return;const r={mode:"lab"},[,n,i,o,s]=t;if(!(n.type===B.Hue||i.type===B.Hue||o.type===B.Hue))return n.type!==B.None&&(r.l=Math.min(Math.max(0,n.value),100)),i.type!==B.None&&(r.a=i.type===B.Number?i.value:i.value*125/100),o.type!==B.None&&(r.b=o.type===B.Number?o.value:o.value*125/100),s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const Kp={mode:"lab",toMode:{xyz50:Wp,rgb:G$},fromMode:{xyz50:Vp,rgb:Z$},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[oL],serialize:e=>`lab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{l:U,a:U,b:U,alpha:{use:U,fixup:Zt}}},sL={...Kp,mode:"lab65",parse:["--lab-d65"],serialize:"--lab-d65",toMode:{xyz65:N$,rgb:Pf},fromMode:{xyz65:O$,rgb:If},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};function aL(e,t){if(!t||t[0]!=="lch")return;const r={mode:"lch"},[,n,i,o,s]=t;if(n.type!==B.None){if(n.type===B.Hue)return;r.l=Math.min(Math.max(0,n.value),100)}if(i.type!==B.None&&(r.c=Math.max(0,i.type===B.Number?i.value:i.value*150/100)),o.type!==B.None){if(o.type===B.Percentage)return;r.h=o.value}return s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const Hp={mode:"lch",toMode:{lab:So,rgb:e=>G$(So(e))},fromMode:{rgb:e=>Co(Z$(e)),lab:Co},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[aL],serialize:e=>`lch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:U,fixup:Qi},c:U,l:U,alpha:{use:U,fixup:Zt}},difference:{h:Ff},average:{h:eo}},lL={...Hp,mode:"lch65",parse:["--lch-d65"],serialize:"--lch-d65",toMode:{lab65:e=>So(e,"lab65"),rgb:e=>Pf(So(e,"lab65"))},fromMode:{rgb:e=>Co(If(e),"lch65"),lab65:e=>Co(e,"lch65")},ranges:{l:[0,100],c:[0,150],h:[0,360]}},Y$=({l:e,u:t,v:r,alpha:n})=>{t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.sqrt(t*t+r*r),o={mode:"lchuv",l:e,c:i};return i&&(o.h=mr(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(o.alpha=n),o},J$=({l:e,c:t,h:r,alpha:n})=>{r===void 0&&(r=0);let i={mode:"luv",l:e,u:t?t*Math.cos(r/180*Math.PI):0,v:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(i.alpha=n),i},X$=(e,t,r)=>4*e/(e+15*t+3*r),Q$=(e,t,r)=>9*t/(e+15*t+3*r),uL=X$(Rt.X,Rt.Y,Rt.Z),cL=Q$(Rt.X,Rt.Y,Rt.Z),dL=e=>e<=qp?Lf*e:116*Math.cbrt(e)-16,zm=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=dL(t/Rt.Y),o=X$(e,t,r),s=Q$(e,t,r);!isFinite(o)||!isFinite(s)?i=o=s=0:(o=13*i*(o-uL),s=13*i*(s-cL));let a={mode:"luv",l:i,u:o,v:s};return n!==void 0&&(a.alpha=n),a},fL=(e,t,r)=>4*e/(e+15*t+3*r),hL=(e,t,r)=>9*t/(e+15*t+3*r),mL=fL(Rt.X,Rt.Y,Rt.Z),gL=hL(Rt.X,Rt.Y,Rt.Z),Um=({l:e,u:t,v:r,alpha:n})=>{if(e===void 0&&(e=0),e===0)return{mode:"xyz50",x:0,y:0,z:0};t===void 0&&(t=0),r===void 0&&(r=0);let i=t/(13*e)+mL,o=r/(13*e)+gL,s=Rt.Y*(e<=8?e/Lf:Math.pow((e+16)/116,3)),a=s*(9*i)/(4*o),l=s*(12-3*i-20*o)/(4*o),u={mode:"xyz50",x:a,y:s,z:l};return n!==void 0&&(u.alpha=n),u},pL=e=>Y$(zm(Wu(e))),bL=e=>qu(Um(J$(e))),yL={mode:"lchuv",toMode:{luv:J$,rgb:bL},fromMode:{rgb:pL,luv:Y$},channels:["l","c","h","alpha"],parse:["--lchuv"],serialize:"--lchuv",ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:U,fixup:Qi},c:U,l:U,alpha:{use:U,fixup:Zt}},difference:{h:Ff},average:{h:eo}},vL={...el,mode:"lrgb",toMode:{rgb:rl},fromMode:{rgb:tl},parse:["srgb-linear"],serialize:"srgb-linear"},wL={mode:"luv",toMode:{xyz50:Um,rgb:e=>qu(Um(e))},fromMode:{xyz50:zm,rgb:e=>zm(Wu(e))},channels:["l","u","v","alpha"],parse:["--luv"],serialize:"--luv",ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:U,u:U,v:U,alpha:{use:U,fixup:Zt}}},e3=({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.cbrt(.412221469470763*e+.5363325372617348*t+.0514459932675022*r),o=Math.cbrt(.2119034958178252*e+.6806995506452344*t+.1073969535369406*r),s=Math.cbrt(.0883024591900564*e+.2817188391361215*t+.6299787016738222*r),a={mode:"oklab",l:.210454268309314*i+.7936177747023054*o-.0040720430116193*s,a:1.9779985324311684*i-2.42859224204858*o+.450593709617411*s,b:.0259040424655478*i+.7827717124575296*o-.8086757549230774*s};return n!==void 0&&(a.alpha=n),a},_f=e=>{let t=e3(tl(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},Vu=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.pow(e+.3963377773761749*t+.2158037573099136*r,3),o=Math.pow(e-.1055613458156586*t-.0638541728258133*r,3),s=Math.pow(e-.0894841775298119*t-1.2914855480194092*r,3),a={mode:"lrgb",r:4.076741636075957*i-3.3077115392580616*o+.2309699031821044*s,g:-1.2684379732850317*i+2.6097573492876887*o-.3413193760026573*s,b:-.0041960761386756*i-.7034186179359362*o+1.7076146940746117*s};return n!==void 0&&(a.alpha=n),a},jf=e=>rl(Vu(e));function qm(e){const n=1.170873786407767;return .5*(n*e-.206+Math.sqrt((n*e-.206)*(n*e-.206)+4*.03*n*e))}function Cd(e){return(e*e+.206*e)/(1.170873786407767*(e+.03))}function kL(e,t){let r,n,i,o,s,a,l,u;-1.88170328*e-.80936493*t>1?(r=1.19086277,n=1.76576728,i=.59662641,o=.75515197,s=.56771245,a=4.0767416621,l=-3.3077115913,u=.2309699292):1.81444104*e-1.19445276*t>1?(r=.73956515,n=-.45954404,i=.08285427,o=.1254107,s=.14503204,a=-1.2684380046,l=2.6097574011,u=-.3413193965):(r=1.35733652,n=-.00915799,i=-1.1513021,o=-.50559606,s=.00692167,a=-.0041960863,l=-.7034186147,u=1.707614701);let d=r+n*e+i*t+o*e*e+s*e*t,f=.3963377774*e+.2158037573*t,h=-.1055613458*e-.0638541728*t,g=-.0894841775*e-1.291485548*t;{let m=1+d*f,b=1+d*h,k=1+d*g,x=m*m*m,D=b*b*b,C=k*k*k,P=3*f*m*m,O=3*h*b*b,H=3*g*k*k,ee=6*f*f*m,ie=6*h*h*b,X=6*g*g*k,ye=a*x+l*D+u*C,se=a*P+l*O+u*H,$e=a*ee+l*ie+u*X;d=d-ye*se/(se*se-.5*ye*$e)}return d}function Gp(e,t){let r=kL(e,t),n=Vu({l:1,a:r*e,b:r*t}),i=Math.cbrt(1/Math.max(n.r,n.g,n.b)),o=i*r;return[i,o]}function xL(e,t,r,n,i,o=null){o||(o=Gp(e,t));let s;if((r-i)*o[1]-(o[0]-i)*n<=0)s=o[1]*i/(n*o[0]+o[1]*(i-r));else{s=o[1]*(i-1)/(n*(o[0]-1)+o[1]*(i-r));{let a=r-i,l=n,u=.3963377774*e+.2158037573*t,d=-.1055613458*e-.0638541728*t,f=-.0894841775*e-1.291485548*t,h=a+l*u,g=a+l*d,m=a+l*f;{let b=i*(1-s)+s*r,k=s*n,x=b+k*u,D=b+k*d,C=b+k*f,P=x*x*x,O=D*D*D,H=C*C*C,ee=3*h*x*x,ie=3*g*D*D,X=3*m*C*C,ye=6*h*h*x,se=6*g*g*D,$e=6*m*m*C,Ue=4.0767416621*P-3.3077115913*O+.2309699292*H-1,Ge=4.0767416621*ee-3.3077115913*ie+.2309699292*X,yr=4.0767416621*ye-3.3077115913*se+.2309699292*$e,Et=Ge/(Ge*Ge-.5*Ue*yr),An=-Ue*Et,En=-1.2684380046*P+2.6097574011*O-.3413193965*H-1,Ur=-1.2684380046*ee+2.6097574011*ie-.3413193965*X,Ct=-1.2684380046*ye+2.6097574011*se-.3413193965*$e,me=Ur/(Ur*Ur-.5*En*Ct),yt=-En*me,Ze=-.0041960863*P-.7034186147*O+1.707614701*H-1,zt=-.0041960863*ee-.7034186147*ie+1.707614701*X,Be=-.0041960863*ye-.7034186147*se+1.707614701*$e,sr=zt/(zt*zt-.5*Ze*Be),Cn=-Ze*sr;An=Et>=0?An:1e6,yt=me>=0?yt:1e6,Cn=sr>=0?Cn:1e6,s+=Math.min(An,Math.min(yt,Cn))}}}return s}function Zp(e,t,r=null){r||(r=Gp(e,t));let n=r[0],i=r[1];return[i/n,i/(1-n)]}function t3(e,t,r){let n=Gp(t,r),i=xL(t,r,e,1,e,n),o=Zp(t,r,n),s=.11516993+1/(7.4477897+4.1590124*r+t*(-2.19557347+1.75198401*r+t*(-2.13704948-10.02301043*r+t*(-4.24894561+5.38770819*r+4.69891013*t)))),a=.11239642+1/(1.6132032-.68124379*r+t*(.40370612+.90148123*r+t*(-.27087943+.6122399*r+t*(.00299215-.45399568*r-.14661872*t)))),l=i/Math.min(e*o[0],(1-e)*o[1]),u=e*s,d=(1-e)*a,f=.9*l*Math.sqrt(Math.sqrt(1/(1/(u*u*u*u)+1/(d*d*d*d))));return u=e*.4,d=(1-e)*.8,[Math.sqrt(1/(1/(u*u)+1/(d*d))),f,i]}function Hv(e){const t=e.l!==void 0?e.l:0,r=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,i={mode:"okhsl",l:qm(t)};e.alpha!==void 0&&(i.alpha=e.alpha);let o=Math.sqrt(r*r+n*n);if(!o)return i.s=0,i;let[s,a,l]=t3(t,r/o,n/o),u;if(o<a){let d=0,f=.8*s,h=1-f/a;u=(o-d)/(f+h*(o-d))*.8}else{let d=a,f=.2*a*a*1.25*1.25/s,h=1-f/(l-a);u=.8+.2*((o-d)/(f+h*(o-d)))}return u&&(i.s=u,i.h=mr(Math.atan2(n,r)*180/Math.PI)),i}function Gv(e){let t=e.h!==void 0?e.h:0,r=e.s!==void 0?e.s:0,n=e.l!==void 0?e.l:0;const i={mode:"oklab",l:Cd(n)};if(e.alpha!==void 0&&(i.alpha=e.alpha),!r||n===1)return i.a=i.b=0,i;let o=Math.cos(t/180*Math.PI),s=Math.sin(t/180*Math.PI),[a,l,u]=t3(i.l,o,s),d,f,h,g;r<.8?(d=1.25*r,f=0,h=.8*a,g=1-h/l):(d=5*(r-.8),f=l,h=.2*l*l*1.25*1.25/a,g=1-h/(u-l));let m=f+d*h/(1-g*d);return i.a=m*o,i.b=m*s,i}const $L={...L$,mode:"okhsl",channels:["h","s","l","alpha"],parse:["--okhsl"],serialize:"--okhsl",fromMode:{oklab:Hv,rgb:e=>Hv(_f(e))},toMode:{oklab:Gv,rgb:e=>jf(Gv(e))}};function Zv(e){let t=e.l!==void 0?e.l:0,r=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,i=Math.sqrt(r*r+n*n),o=i?r/i:1,s=i?n/i:1,[a,l]=Zp(o,s),u=.5,d=1-u/a,f=l/(i+t*l),h=f*t,g=f*i,m=Cd(h),b=g*m/h,k=Vu({l:m,a:o*b,b:s*b}),x=Math.cbrt(1/Math.max(k.r,k.g,k.b,0));t=t/x,i=i/x*qm(t)/t,t=qm(t);const D={mode:"okhsv",s:i?(u+l)*g/(l*u+l*d*g):0,v:t?t/h:0};return D.s&&(D.h=mr(Math.atan2(n,r)*180/Math.PI)),e.alpha!==void 0&&(D.alpha=e.alpha),D}function Yv(e){const t={mode:"oklab"};e.alpha!==void 0&&(t.alpha=e.alpha);const r=e.h!==void 0?e.h:0,n=e.s!==void 0?e.s:0,i=e.v!==void 0?e.v:0,o=Math.cos(r/180*Math.PI),s=Math.sin(r/180*Math.PI),[a,l]=Zp(o,s),u=.5,d=1-u/a,f=1-n*u/(u+l-l*d*n),h=n*l*u/(u+l-l*d*n),g=Cd(f),m=h*g/f,b=Vu({l:g,a:o*m,b:s*m}),k=Math.cbrt(1/Math.max(b.r,b.g,b.b,0)),x=Cd(i*f),D=h*x/f;return t.l=x*k,t.a=D*o*k,t.b=D*s*k,t}const DL={...z$,mode:"okhsv",channels:["h","s","v","alpha"],parse:["--okhsv"],serialize:"--okhsv",fromMode:{oklab:Zv,rgb:e=>Zv(_f(e))},toMode:{oklab:Yv,rgb:e=>jf(Yv(e))}};function AL(e,t){if(!t||t[0]!=="oklab")return;const r={mode:"oklab"},[,n,i,o,s]=t;if(!(n.type===B.Hue||i.type===B.Hue||o.type===B.Hue))return n.type!==B.None&&(r.l=Math.min(Math.max(0,n.type===B.Number?n.value:n.value/100),1)),i.type!==B.None&&(r.a=i.type===B.Number?i.value:i.value*.4/100),o.type!==B.None&&(r.b=o.type===B.Number?o.value:o.value*.4/100),s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const EL={...Kp,mode:"oklab",toMode:{lrgb:Vu,rgb:jf},fromMode:{lrgb:e3,rgb:_f},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[AL],serialize:e=>`oklab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`};function CL(e,t){if(!t||t[0]!=="oklch")return;const r={mode:"oklch"},[,n,i,o,s]=t;if(n.type!==B.None){if(n.type===B.Hue)return;r.l=Math.min(Math.max(0,n.type===B.Number?n.value:n.value/100),1)}if(i.type!==B.None&&(r.c=Math.max(0,i.type===B.Number?i.value:i.value*.4/100)),o.type!==B.None){if(o.type===B.Percentage)return;r.h=o.value}return s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const SL={...Hp,mode:"oklch",toMode:{oklab:e=>So(e,"oklab"),rgb:e=>jf(So(e,"oklab"))},fromMode:{rgb:e=>Co(_f(e),"oklch"),oklab:e=>Co(e,"oklch")},parse:[CL],serialize:e=>`oklch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,ranges:{l:[0,1],c:[0,.4],h:[0,360]}},Jv=e=>{let{r:t,g:r,b:n,alpha:i}=tl(e),o={mode:"xyz65",x:.486570948648216*t+.265667693169093*r+.1982172852343625*n,y:.2289745640697487*t+.6917385218365062*r+.079286914093745*n,z:0*t+.0451133818589026*r+1.043944368900976*n};return i!==void 0&&(o.alpha=i),o},Xv=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=rl({r:e*2.4934969119414263-t*.9313836179191242-.402710784450717*r,g:e*-.8294889695615749+t*1.7626640603183465+.0236246858419436*r,b:e*.0358458302437845-t*.0761723892680418+.9568845240076871*r},"p3");return n!==void 0&&(i.alpha=n),i},TL={...el,mode:"p3",parse:["display-p3"],serialize:"display-p3",fromMode:{rgb:e=>Xv(Fs(e)),xyz65:Xv},toMode:{rgb:e=>Ps(Jv(e)),xyz65:Jv}},y0=e=>{let t=Math.abs(e);return t>=1/512?Math.sign(e)*Math.pow(t,1/1.8):16*e},Qv=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i={mode:"prophoto",r:y0(e*1.3457868816471585-t*.2555720873797946-.0511018649755453*r),g:y0(e*-.5446307051249019+t*1.5082477428451466+.0205274474364214*r),b:y0(e*0+t*0+1.2119675456389452*r)};return n!==void 0&&(i.alpha=n),i},v0=(e=0)=>{let t=Math.abs(e);return t>=16/512?Math.sign(e)*Math.pow(t,1.8):e/16},e2=e=>{let t=v0(e.r),r=v0(e.g),n=v0(e.b),i={mode:"xyz50",x:.7977666449006423*t+.1351812974005331*r+.0313477341283922*n,y:.2880748288194013*t+.7118352342418731*r+899369387256e-16*n,z:0*t+0*r+.8251046025104602*n};return e.alpha!==void 0&&(i.alpha=e.alpha),i},ML={...el,mode:"prophoto",parse:["prophoto-rgb"],serialize:"prophoto-rgb",fromMode:{xyz50:Qv,rgb:e=>Qv(Wu(e))},toMode:{xyz50:e2,rgb:e=>qu(e2(e))}},t2=1.09929682680944,FL=.018053968510807,w0=e=>{const t=Math.abs(e);return t>FL?(Math.sign(e)||1)*(t2*Math.pow(t,.45)-(t2-1)):4.5*e},r2=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i={mode:"rec2020",r:w0(e*1.7166511879712683-t*.3556707837763925-.2533662813736599*r),g:w0(e*-.6666843518324893+t*1.6164812366349395+.0157685458139111*r),b:w0(e*.0176398574453108-t*.0427706132578085+.9421031212354739*r)};return n!==void 0&&(i.alpha=n),i},n2=1.09929682680944,PL=.018053968510807,k0=(e=0)=>{let t=Math.abs(e);return t<PL*4.5?e/4.5:(Math.sign(e)||1)*Math.pow((t+n2-1)/n2,1/.45)},i2=e=>{let t=k0(e.r),r=k0(e.g),n=k0(e.b),i={mode:"xyz65",x:.6369580483012911*t+.1446169035862083*r+.1688809751641721*n,y:.262700212011267*t+.6779980715188708*r+.059301716469862*n,z:0*t+.0280726930490874*r+1.0609850577107909*n};return e.alpha!==void 0&&(i.alpha=e.alpha),i},IL={...el,mode:"rec2020",fromMode:{xyz65:r2,rgb:e=>r2(Fs(e))},toMode:{xyz65:i2,rgb:e=>Ps(i2(e))},parse:["rec2020"],serialize:"rec2020"},us=.0037930732552754493,r3=Math.cbrt(us),x0=e=>Math.cbrt(e)-r3,NL=e=>{const{r:t,g:r,b:n,alpha:i}=tl(e),o=x0(.3*t+.622*r+.078*n+us),s=x0(.23*t+.692*r+.078*n+us),a=x0(.2434226892454782*t+.2047674442449682*r+.5518098665095535*n+us),l={mode:"xyb",x:(o-s)/2,y:(o+s)/2,b:a-(o+s)/2};return i!==void 0&&(l.alpha=i),l},$0=e=>Math.pow(e+r3,3),OL=({x:e,y:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const i=$0(e+t)-us,o=$0(t-e)-us,s=$0(r+t)-us,a=rl({r:11.031566904639861*i-9.866943908131562*o-.16462299650829934*s,g:-3.2541473810744237*i+4.418770377582723*o-.16462299650829934*s,b:-3.6588512867136815*i+2.7129230459360922*o+1.9459282407775895*s});return n!==void 0&&(a.alpha=n),a},RL={mode:"xyb",channels:["x","y","b","alpha"],parse:["--xyb"],serialize:"--xyb",toMode:{rgb:OL},fromMode:{rgb:NL},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:U,y:U,b:U,alpha:{use:U,fixup:Zt}}},BL={mode:"xyz50",parse:["xyz-d50"],serialize:"xyz-d50",toMode:{rgb:qu,lab:Vp},fromMode:{rgb:Wu,lab:Wp},channels:["x","y","z","alpha"],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:U,y:U,z:U,alpha:{use:U,fixup:Zt}}},LL=e=>{let{x:t,y:r,z:n,alpha:i}=e;t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=0);let o={mode:"xyz50",x:1.0479298208405488*t+.0229467933410191*r-.0501922295431356*n,y:.0296278156881593*t+.990434484573249*r-.0170738250293851*n,z:-.0092430581525912*t+.0150551448965779*r+.7518742899580008*n};return i!==void 0&&(o.alpha=i),o},_L=e=>{let{x:t,y:r,z:n,alpha:i}=e;t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=0);let o={mode:"xyz65",x:.9554734527042182*t-.0230985368742614*r+.0632593086610217*n,y:-.0283697069632081*t+1.0099954580058226*r+.021041398966943*n,z:.0123140016883199*t-.0205076964334779*r+1.3303659366080753*n};return i!==void 0&&(o.alpha=i),o},jL={mode:"xyz65",toMode:{rgb:Ps,xyz50:LL},fromMode:{rgb:Fs,xyz50:_L},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:["x","y","z","alpha"],parse:["xyz","xyz-d65"],serialize:"xyz-d65",interpolate:{x:U,y:U,z:U,alpha:{use:U,fixup:Zt}}},zL=({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const i={mode:"yiq",y:.29889531*e+.58662247*t+.11448223*r,i:.59597799*e-.2741761*t-.32180189*r,q:.21147017*e-.52261711*t+.31114694*r};return n!==void 0&&(i.alpha=n),i},UL=({y:e,i:t,q:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const i={mode:"rgb",r:e+.95608445*t+.6208885*r,g:e-.27137664*t-.6486059*r,b:e-1.10561724*t+1.70250126*r};return n!==void 0&&(i.alpha=n),i},qL={mode:"yiq",toMode:{rgb:UL},fromMode:{rgb:zL},channels:["y","i","q","alpha"],parse:["--yiq"],serialize:"--yiq",ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:U,i:U,q:U,alpha:{use:U,fixup:Zt}}},WL=e=>Math.max(0,Math.min(1,e||0)),D0=e=>Math.round(WL(e)*255),VL=ps("rgb"),KL=e=>{if(e===void 0)return;let t=D0(e.r),r=D0(e.g),n=D0(e.b);return"#"+(1<<24|t<<16|r<<8|n).toString(16).slice(1)},HL=e=>KL(VL(e)),GL=e=>{const t={mode:e.mode,r:Math.max(0,Math.min(e.r!==void 0?e.r:0,1)),g:Math.max(0,Math.min(e.g!==void 0?e.g:0,1)),b:Math.max(0,Math.min(e.b!==void 0?e.b:0,1))};return e.alpha!==void 0&&(t.alpha=e.alpha),t},ZL=e=>e!==void 0&&(e.r===void 0||e.r>=0&&e.r<=1)&&(e.g===void 0||e.g>=0&&e.g<=1)&&(e.b===void 0||e.b>=0&&e.b<=1);function YL(e="rgb"){const{gamut:t}=Tf(e);if(!t)return n=>!0;const r=ps(typeof t=="string"?t:e);return n=>ZL(r(n))}function JL(e="rgb"){const{gamut:t}=Tf(e);if(!t)return o=>Om(o);const r=typeof t=="string"?t:e,n=ps(r),i=YL(r);return o=>{const s=Om(o);if(!s)return;const a=n(s);if(i(a))return s;const l=GL(a);return s.mode===l.mode?l:ps(s.mode)(l)}}Xe(TB);Xe(BB);Xe(LB);Xe(_B);Xe(UB);Xe(L$);Xe(z$);Xe(XB);Xe(QB);Xe(nL);Xe(iL);Xe(Kp);Xe(sL);Xe(Hp);Xe(lL);Xe(yL);Xe(vL);Xe(wL);Xe($L);Xe(DL);Xe(EL);Xe(SL);Xe(TL);Xe(ML);Xe(IL);Xe(el);Xe(RL);Xe(BL);Xe(jL);Xe(qL);const XL=RB("rgb");class Ki{constructor(t){this.set(t)}static isValidColorString(t){try{return new Ki(t),!0}catch{return!1}}static isColor(t){return t instanceof Ki}static deserialize(t){const r=JSON.parse(t),n=new Ki("black");return ki(r).forEach(([i,o])=>{i==="originalColorSyntax"?n.originalColorSyntax=Qt.isEnumValue(o,Me,"Cannot deserialize: invalid color syntax."):n._allColors[i]=o}),n}getRgbDistance(t){return XL(this.#e,t)}getClosestNamedColor(){return tt(pu).reduce((t,r)=>{const n=this.getRgbDistance(r);return n<t.distance?{distance:n,name:r}:t},{name:"",distance:1/0}).name}toString(){return this.toCss()[this.originalColorSyntax]}originalColorSyntax=Me.hex;#e=Qt.isDefined(Lm("black"));_allColors={names:["black"],[Me.name]:"black",hexString:"#000000",[Me.hex]:{r:0,g:0,b:0},[Me.rgb]:{r:0,g:0,b:0},[Me.hsl]:{h:0,s:0,l:0},[Me.hwb]:{h:0,w:0,b:0},[Me.lab]:{l:0,a:0,b:0},[Me.lch]:{l:0,c:0,h:0},[Me.oklab]:{l:0,a:0,b:0},[Me.oklch]:{l:0,c:0,h:0}};clone(){return Ki.deserialize(this.serialize())}setByString(t){const r=Lm(t);if(!r)throw new Error(`Unable to parse invalid color string: '${t}'`);this.originalColorSyntax=oB(t),this.#e=r,this.pullFromInternalColor()}set(t){if(T.isString(t))return this.setByString(t);if(Nt.isLengthExactly(Object.keys(t),1,`Cannot set multiple color formats at once: got '${qE(Object.keys(t))}'`),t.hexString||t.name)this.setByString(t.hexString||t.name);else{const[r,n]=Qt.isDefined(ki(t)[0]),i=yi[r],o=Object.values(ut(i.coords,s=>{const a=n[s],l=i.coords[Qt.isKeyOf(s,i.coords)],u=a!=null&&a>=l.min&&a<=l.max?n[s]:this[r][s];return Qt.isDefined(u)}));this.setByString(`${i.conversionFormat}(${o.join(" ")})`)}}pullFromInternalColor(){ln(Eo).forEach(t=>{const r=yi[t],n=r.conversionFormat,i=T.isKeyOf(this.#e.mode,yi)?yi[this.#e.mode]:void 0,o=JL(r.colorSpace===i?.colorSpace?n:"rgb")(ps(n)(this.#e));o||Nt.never(`Failed to convert color '${JSON.stringify(this.#e)}' to '${t}'.`),tt(this[t]).forEach(s=>{const a=o[s],l=r.coords[Qt.isKeyOf(s,r.coords)];a!=null&&(this._allColors[t][s]=OE((a||0)*(l.factor||1),{digits:l.digits||0}))})}),this._allColors.hexString=HL(this.#e),this._allColors.names=QL(this.rgb),this._allColors[Me.name]=this._allColors.names[0]||""}serialize(){return JSON.stringify({...this.allColors,originalColorSyntax:this.originalColorSyntax})}get allColors(){return Kn(this._allColors)}toFormattedStrings(){return{...ut(yi,r=>Object.values(this[r]).map(i=>String(i).padStart(6," ")).join(" ")),names:this.names.join(", ").padEnd(Nv," "),[Me.name]:(this.names[0]||"").padEnd(Nv," "),[Me.hexString]:this[Me.hexString]}}toCss(){return{...ut(yi,r=>{const n=Object.values(this[r]);return`${r}(${n.join(" ")})`}),[Me.hexString]:this[Me.hexString],[Me.name]:this.names[0]||""}}get names(){return Kn(this._allColors.names)}get name(){return this._allColors.names[0]||""}get hexString(){return this._allColors[Me.hexString]}get hex(){return Kn(this._allColors[Me.hex])}get rgb(){return Kn(this._allColors[Me.rgb])}get hsl(){return Kn(this._allColors[Me.hsl])}get hwb(){return Kn(this._allColors[Me.hwb])}get lab(){return Kn(this._allColors[Me.lab])}get lch(){return Kn(this._allColors[Me.lch])}get oklab(){return Kn(this._allColors[Me.oklab])}get oklch(){return Kn(this._allColors[Me.oklch])}}function QL(e){return Vt(ki(pu),([t])=>t,(t,[,r])=>T.deepEquals(r,[e.r,e.g,e.b]))}function Yr(e){return z`
        color: ${e.foreground.value};
        background-color: ${e.background.value};
    `}const A0=Ci()({tagName:"vir-color-slider",cssVars:{"vir-color-slider-gradient":"black"},styles:({cssVars:e})=>z`
        :host {
            display: flex;
            align-items: center;
            font-family: ${u$["vira-monospace"].value};
            gap: 2px;
        }

        input[type='range'] {
            flex-grow: 1;
            appearance: none;
            background: ${e["vir-color-slider-gradient"].value};
            height: 9px;
            border-radius: 4px;
            cursor: pointer;
        }

        ${Pr} {
            width: 76px;
        }

        .coordinate {
            font-size: 18px;
            margin-top: -4px;
        }
    `,events:{valueChange:nr()},render({inputs:e,events:t,dispatch:r,cssVars:n}){const i=yi[e.colorFormatName],o=i.coords[e.colorCoordinateName];if(!o)throw new Error(`Invalid color coordinate '${e.colorCoordinateName}' for color format '${e.colorFormatName}'`);const s=10,a=mg(s,f=>{const h=o.min+(o.max-o.min)*(f/s);return new Ki({[e.colorFormatName]:{...e.color[e.colorFormatName],[e.colorCoordinateName]:h}}).toCss()[i.conversionFormat]}),l=z`linear-gradient(to right, ${ve(a.join(","))})`,u=Qt.isNumber(e.color[e.colorFormatName][e.colorCoordinateName]),d=o.radix?Math.round(u).toString(o.radix).toUpperCase().padStart(o.radixPad||0,"0"):String(u);return y`
            <span class="coordinate">${e.colorCoordinateName.toUpperCase()}</span>
            <input
                type="range"
                style=${z`
                    ${n["vir-color-slider-gradient"].name}: ${l};
                `}
                step=${Math.pow(10,o.digits?-o.digits:0)}
                ${iO(f=>{Nt.instanceOf(f,HTMLInputElement),f.min=String(o.min),f.max=String(o.max),f.value=String(u)})}
                ${Ee("input",f=>{const h=zu(f,HTMLInputElement),g=Number(h.value);isNaN(g)||r(new t.valueChange(g))})}
            />
            <${Pr.assign({value:d})}
                ${Ee(Pr.events.valueChange,f=>{const h=o.radix?parseInt(f.detail,o.radix):Number(f.detail);isNaN(h)||r(new t.valueChange(h))})}
            ></${Pr}>
        `}}),E0=Ci()({tagName:"vir-color-format-sliders",styles:z`
        :host {
            display: flex;
            flex-direction: column;
        }

        h3 {
            ${Qa};
        }
    `,events:{colorChange:nr()},render({inputs:e,dispatch:t,events:r}){const n=yi[e.colorFormatName],i=tt(n.coords).map(o=>y`
                    <${A0.assign({color:e.color,colorCoordinateName:o,colorFormatName:e.colorFormatName})}
                        ${Ee(A0.events.valueChange,s=>{const a=e.color.clone();a.set({[e.colorFormatName]:{[o]:s.detail}});const l=a.toCss()[n.conversionFormat];t(new r.colorChange(l))})}
                    ></${A0}>
                `);return y`
            ${e.showFormatName?y`
                      <h3>${e.colorFormatName}</h3>
                  `:fe}
            ${i}
        `}}),C0=Ci()({tagName:"vir-color-swatch",styles:z`
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
    `,render({inputs:e}){const t=e.backgroundColor||e.foregroundColor,r=e.foregroundColor||"transparent";return y`
            <div
                style=${z`
                    background-color: ${ve(t)};
                    color: ${ve(r)};
                `}
            >
                <slot></slot>
            </div>
        `}});class e_{shapes;options;constructor(t,r={}){this.shapes=t,this.options=r,this.storeName=r.storeName||"local-storage-client",this.get=ut(this.shapes,n=>(i={})=>this.getAllValues(i)[n]),this.set=ut(this.shapes,n=>i=>{pd(i,this.shapes[n],{allowExtraKeys:!0},`LocalStorageClient: Invalid value for key '${String(n)}'.`);const o=this.getAllValues();return o[n]=i,globalThis.localStorage.setItem(this.storeName,JSON.stringify(o)),i}),this.delete=ut(this.shapes,n=>()=>{const i=this.getAllValues();delete i[n],globalThis.localStorage.setItem(this.storeName,JSON.stringify(i))})}storeName;getAllValues({throwErrorOnFailure:t=!1}={}){return yk(()=>{const r=JSON.parse(globalThis.localStorage.getItem(this.storeName)||"{}");return vk(r,(n,i)=>{const o=this.shapes[n];if(o){if(t)pd(i,o,{allowExtraKeys:!0});else if(!mo(i,o,{allowExtraKeys:!0}))return;return{key:n,value:i}}})},{handleError:r=>{if(t)throw Na(r,`LocalStorageClient: store '${this.storeName}' is corrupt and cannot be loaded.`);return{}}})}get;set;delete;clear(){globalThis.localStorage.removeItem(this.storeName)}}const S0=new e_({lastFormat:ai(Eo)}),t_=Xc(Eo).map(e=>({value:e,label:e.toUpperCase()})),kl=Ci()({tagName:"vir-color-picker",cssVars:{"vir-color-picker-swatch-width":{default:"100px",syntax:ma.Length},"vir-color-picker-swatch-height":{default:"100px",syntax:ma.Length}},state(){return{selectedFormatName:S0.get.lastFormat()||Eo.rgb,rawInput:void 0}},hostClasses:{"vir-color-picker-always-show":({inputs:e})=>!!e.alwaysShowPicker},styles:({cssVars:e,hostClasses:t})=>z`
        :host {
            display: inline-flex;
        }

        ${t["vir-color-picker-always-show"].selector} {
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }

        button {
            ${un}
            cursor: pointer;
            display: flex;
        }

        ${vl} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }

        .swatch-wrapper {
            display: flex;
            flex-direction: column;
            gap: 4px;
            align-items: center;

            & ${C0} {
                width: ${e["vir-color-picker-swatch-width"].value};
                height: ${e["vir-color-picker-swatch-height"].value};
                box-sizing: border-box;
            }
        }

        .code-button {
            font-family: ${u$["vira-monospace"].value};
            font-size: 12px;
            color: #666;
            display: flex;
            justify-content: center;
            gap: 2px;
            align-items: center;

            & ${oe} {
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
            ${HO.menuShadow}
        }

        .raw-input-wrapper {
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 12px;
            ${K["vira-form-border-color"].name}: #ddd;
            color: #666;

            & ${Pr} {
                flex-grow: 1;
                width: unset;
                color: inherit;
                height: 20px;
                border: none;
            }
        }
    `,events:{colorChange:nr()},render({inputs:e,dispatch:t,events:r,state:n,updateState:i}){const o=Ki.isColor(e.color)?e.color:new Ki(e.color||"black"),s=yi[n.selectedFormatName],a=n.rawInput??o.toCss()[s.rawSyntax],l=y`
            <div class="raw-input-wrapper">
                <${Pr.assign({value:a})}
                    ${Ee(Pr.events.valueChange,h=>{const g=h.detail;i({rawInput:g}),Ki.isValidColorString(g)&&t(new r.colorChange(g))})}
                ></${Pr}>
                <button
                    class="code-button"
                    ${Ee("click",async()=>{await globalThis.navigator.clipboard.writeText(a)})}
                >
                    <${oe.assign({icon:Mm,fitContainer:!0})}></${oe}>
                </button>
            </div>
        `,u=y`
            <button
                class="code-button"
                ${Ee("click",async()=>{await globalThis.navigator.clipboard.writeText(o.hexString)})}
            >
                <span>${o.hexString}</span>
                <${oe.assign({icon:Mm,fitContainer:!0})}></${oe}>
            </button>
        `,d=y`
            <div class="swatch-wrapper">
                <${C0.assign({backgroundColor:o})}></${C0}>
                ${e.showHexValue?u:fe}
            </div>
        `,f=y`
            <div class="picker">
                <${ls.assign({options:t_,value:n.selectedFormatName})}
                    ${Ee(ls.events.valueChange,h=>{const g=hg.isEnumValue(h.detail,Eo);g&&(i({selectedFormatName:g}),S0.set.lastFormat(g))})}
                ></${ls}>
                ${l}
                <${E0.assign({color:o,colorFormatName:n.selectedFormatName,showFormatName:!1})}
                    ${Ee(E0.events.colorChange,h=>{t(new r.colorChange(h.detail)),i({rawInput:void 0})})}
                ></${E0}>
            </div>
        `;return e.alwaysShowPicker?y`
                ${d} ${f}
            `:y`
                <${vl.assign({keepOpenAfterInteraction:!0})}>
                    <button
                        class="trigger"
                        slot=${vl.slotNames.trigger}
                        ${Ee("mousedown",()=>{const h=S0.get.lastFormat();h&&i({selectedFormatName:h})})}
                    >
                        ${d}
                    </button>
                    <div class="pop-up" slot=${vl.slotNames.popUp}>
                        ${f}
                    </div>
                </${vl}>
            `}});function r_(e){if(!T.hasKey(Cv,e))throw new Error(`No ViraTag color for variant '${e}'`);const t=Cv[e];return z`
        :host(
                .vira-tag-color-${ve(e)}.vira-tag-emphasis-${ve(Fn.Standard)}
            )
            button {
            ${Yr(kr[t]["behind-bg"][xe.NonBodyText])}
            border-color: ${kr[t]["behind-bg"][xe.NonBodyText].background.value};

            &:hover {
                ${Yr(kr[t]["behind-bg"][xe.Header])}
                border-color: ${kr[t]["behind-bg"][xe.Header].background.value};
            }
            &:active {
                ${Yr(kr[t]["behind-bg"][xe.NonBodyText])}
                border-color: ${kr[t]["behind-bg"][xe.NonBodyText].background.value};
            }
        }
        :host(
                .vira-tag-color-${ve(e)}.vira-tag-emphasis-${ve(Fn.Subtle)}
            )
            button {
            ${Yr(kr[t]["on-self"][xe.BodyText])}
            border-color: ${kr[t]["on-self"][xe.BodyText].background.value};

            &:hover {
                ${Yr(kr[t]["on-self"][xe.NonBodyText])}
                border-color: ${kr[t]["on-self"][xe.NonBodyText].background.value};
            }
            &:active {
                ${Yr(kr[t]["on-self"][xe.BodyText])}
                border-color: ${kr[t]["on-self"][xe.BodyText].background.value};
            }
        }
        :host(
                .vira-tag-color-${ve(e)}.vira-tag-not-checked.vira-tag-not-checked.vira-tag-not-checked
            )
            button {
            color: ${kr[t]["on-self"][xe.BodyText].foreground.value};
            background-color: transparent;
            border-color: ${kr[t]["on-self"][xe.BodyText].background.value};

            &:hover {
                background-color: ${kr[t]["behind-bg"][xe.Invisible].background.value};
            }
            &:active {
                background-color: ${kr[t]["behind-bg"][xe.Decoration].background.value};
            }
        }
    `}function n_(){return ve([re.Accent,re.Danger,re.Neutral,re.Positive,re.Warning].map(e=>r_(e)).join(" "))}const Bl=di()({tagName:"vira-tag",cssVars:{"vira-tag-text-color":"white","vira-tag-background-color":"black","vira-tag-border-radius":"1000px","vira-tag-gap":"6px","vira-tag-horizontal-padding":"12px","vira-tag-border-width":"2px"},events:{toggle:nr(),cancel:nr()},hostClasses:{"vira-tag-selectable":({inputs:e})=>T.isBoolean(e.isClickable?.selected),"vira-tag-checked":({inputs:e})=>!!e.isClickable?.selected,"vira-tag-not-checked":({inputs:e})=>e.isClickable?.selected===!1,"vira-tag-cancellable":({inputs:e})=>!!e.isClickable?.cancellable,"vira-tag-not-clickable":({inputs:e})=>!e.isClickable,"vira-tag-disabled":({inputs:e})=>!!e.disabled,"vira-tag-size-large":({inputs:e})=>e.size===Er.Large,"vira-tag-size-medium":({inputs:e})=>!e.size||e.size===Er.Medium,"vira-tag-size-small":({inputs:e})=>e.size===Er.Small,"vira-tag-emphasis-standard":({inputs:e})=>!e.emphasis||e.emphasis===Fn.Standard,"vira-tag-emphasis-subtle":({inputs:e})=>e.emphasis===Fn.Subtle,"vira-tag-color-accent":({inputs:e})=>!e.color||e.color===re.Accent,"vira-tag-color-plain":({inputs:e})=>e.color===re.Plain,"vira-tag-color-neutral":({inputs:e})=>e.color===re.Neutral,"vira-tag-color-danger":({inputs:e})=>e.color===re.Danger,"vira-tag-color-warning":({inputs:e})=>e.color===re.Warning,"vira-tag-color-positive":({inputs:e})=>e.color===re.Positive},styles:({cssVars:e,hostClasses:t})=>z`
        :host {
            display: inline-flex;
        }

        button {
            ${un}
            flex-shrink: 0;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: ${e["vira-tag-gap"].value};
            border-radius: ${e["vira-tag-border-radius"].value};
            border-width: ${e["vira-tag-border-width"].value};
            border-style: solid;
            border-color: transparent;
            color: ${e["vira-tag-text-color"].value};
            background-color: ${e["vira-tag-background-color"].value};
            box-sizing: border-box;
            padding: 0 ${e["vira-tag-horizontal-padding"].value};

            &[disabled] {
                cursor: default;
                pointer-events: none;
            }
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

        ${t["vira-tag-selectable"].selector} .selected-check {
            display: flex;
        }
        ${t["vira-tag-checked"].selector} .selected-check {
            visibility: visible;
        }
        ${t["vira-tag-cancellable"].selector} .cancel-x {
            display: flex;
        }
        ${t["vira-tag-size-large"].selector} button {
            height: ${Jh[Er.Large]}px;
            font-size: ${K["vira-form-large-text-size"].value};
            padding: 0 var(${e["vira-tag-horizontal-padding"].name}, 16px);
        }
        ${t["vira-tag-size-medium"].selector} button {
            height: ${Jh[Er.Medium]}px;
            font-size: ${K["vira-form-medium-text-size"].value};
        }
        ${t["vira-tag-size-small"].selector} button {
            height: ${Jh[Er.Small]}px;
            font-size: ${K["vira-form-small-text-size"].value};
        }

        ${n_()}

        :host(.${t["vira-tag-disabled"].name}.${t["vira-tag-disabled"].name}.${t["vira-tag-disabled"].name}.${t["vira-tag-disabled"].name}) {
            cursor: not-allowed;
            ${Ta}

            & button {
                ${Yr(le.colors["vira-grey-behind-bg-decoration"])}
                border-color: ${le.colors["vira-grey-behind-bg-decoration"].background.value}
            }

            &.${t["vira-tag-emphasis-subtle"].name} button {
                ${Yr(le.colors["vira-grey-behind-bg-decoration"])}
                border-color: ${le.colors["vira-grey-behind-bg-decoration"].background.value}
            }
        }

        :host(
                .${t["vira-tag-color-plain"].name}.vira-tag-emphasis-${ve(Fn.Standard)}
            )
            button {
            ${Yr(le.inverse[Ar])};
            border-color: ${le.inverse[Ar].background.value};

            &:hover {
                ${Yr(le.colors["vira-grey-behind-bg-non-body"])};
                border-color: ${le.colors["vira-grey-behind-bg-non-body"].background.value};
            }
            &:active {
                ${Yr(le.inverse[Ar])};
                border-color: ${le.inverse[Ar].background.value};
            }
        }
        :host(
                .${t["vira-tag-color-plain"].name}.vira-tag-emphasis-${ve(Fn.Subtle)}
            )
            button {
            background-color: transparent;
            color: ${le.colors[Ar].foreground.value};
            border-color: transparent;
        }
        :host(
                .${t["vira-tag-color-plain"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}
            )
            button {
            color: ${le.colors[Ar].foreground.value};
            background-color: transparent;
            border-color: transparent;
        }
        :host(
                .${t["vira-tag-color-plain"].name}.vira-tag-emphasis-${ve(Fn.Subtle)}
            )
            button,
        :host(
                .${t["vira-tag-color-plain"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}
            )
            button {
            &:hover {
                ${Yr(le.colors["vira-grey-behind-fg-small-body"])}
                border-color: ${le.colors["vira-grey-behind-fg-small-body"].background.value};
            }
            &:active {
                ${Yr(le.colors["vira-grey-behind-fg-body"])}
                border-color: ${le.colors["vira-grey-behind-fg-body"].background.value};
            }
        }
    `,render({inputs:e,dispatch:t,events:r}){const n=!e.isClickable||!!e.disabled;return y`
            <button
                ?disabled=${n}
                ${Ee("click",()=>{n||(e.isClickable?.selected!=null?t(new r.toggle(!e.isClickable.selected)):e.isClickable?.cancellable&&t(new r.cancel))})}
            >
                <${oe.assign({icon:w$})}
                    class="selected-check"
                ></${oe}>
                <span class="text">${String(e.text)}</span>
                <${oe.assign({icon:k$})}
                    class="cancel-x"
                ></${oe}>
            </button>
        `}});var cs;(function(e){e.Vertical="vertical",e.Horizontal="horizontal"})(cs||(cs={}));function i_(e,t,r,n={}){const i=t.map((o,s)=>({cells:r(o,s),data:o}));if(n.orientation===cs.Horizontal)return{headerRow:void 0,rows:Vt(e,s=>{if(s.disabled)return;const a=n.hideHeaders?[]:[{content:s.content??s.key,key:s.key,data:void 0}],l=Vt(i,({data:d,cells:f})=>{if(f)return{content:f[s.key],key:s.key,data:d}},T.isTruthy);return{cells:[...a,...l],data:void 0}},T.isTruthy),orientation:cs.Horizontal};{const o=n.hideHeaders?[]:Vt(e,a=>{if(!a.disabled)return{content:a.content??a.key,key:a.key,data:void 0}},T.isTruthy),s=Vt(i,({cells:a,data:l})=>{if(a)return{cells:Vt(e,u=>{if(!u.disabled)return{content:a[u.key],key:u.key,data:l}},T.isTruthy),data:l}},T.isTruthy);return{headerRow:o,rows:s,orientation:cs.Vertical}}}const Dn=G5(),Pn=Dn()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":"0px"},styles:({cssVars:e})=>z`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,render:({inputs:e,dispatch:t})=>{const r=e.router?.createRouteUrl({...e.route})??"#";return y`
            <a
                href=${r}
                ${Ee("click",n=>{(!e.router||s$(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new wd(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function o_(e,t){return e.entry.entryType===ur.Root?!1:e.entry.entryType===ur.Page||T.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:T.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const Vs=Dn()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>z`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${We["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${We["element-book-nav-hover-background-color"].value};
            color: ${We["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${We["element-book-nav-active-background-color"].value};
            color: ${We["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${Pn.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${We["element-book-nav-selected-background-color"].value};
            color: ${We["element-book-nav-selected-foreground-color"].value};
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

        ${oe} {
            display: inline-flex;
            color: ${We["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!o_(r,e.selectedPath))return;const n=z`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return y`
                <li style=${n}>
                    <${Pn.assign({router:e.router,route:{paths:[Jr.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${mn({"title-row":!0,selected:e.selectedPath?T.jsonEquals(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Xn(na(r,ur.ElementExample),y`
                                    <${oe.assign({icon:D$})}></${oe}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${Pn}>
                </li>
            `});return y`
            <${Pn.assign({route:fa,router:e.router})}>
                <slot>Book</slot>
            </${Pn}>
            <ul>
                ${t}
            </ul>
        `}}),To=Dn()({tagName:"book-error",styles:z`
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
    `,render({inputs:e}){return(T.isArray(e.message)?e.message:[e.message]).map(r=>y`
                <p>${r}</p>
            `)}}),yu=Dn()({tagName:"book-page-controls",events:{controlValueChange:nr()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>z`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${We["element-book-page-foreground-faint-level-1-color"].value};
        }

        ${e["book-page-controls-has-controls"].selector} {
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

        ${Pr}, ${ls} {
            height: 24px;
            max-width: 128px;
        }

        ${oe}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,i],o)=>{if(i.controlType===Wt.Hidden)return"";const s=s_(e.currentValues[n],i,a=>{const l=T.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...Object.fromEntries(Object.keys(e.config).map(u=>[u,e.currentValues[u]])),[n]:a}}))});return y`
                    <div class="control-wrapper">
                        ${Xn(o===0,y`
                                <${oe.assign({icon:C$})}
                                    class="options-icon"
                                ></${oe}>
                            `)}
                        <label class="control-wrapper">
                            <span>
                                ${i.controlType===Wt.Custom?y`
                                          &nbsp;
                                      `:n}
                            </span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function s_(e,t,r){return Ko(t,Wt.Hidden)?"":Ko(t,Wt.Checkbox)?y`
            <${t0.assign({value:!!e})}
                ${Ee(t0.events.valueChange,n=>{r(n.detail)})}
            ></${t0}>
        `:Ko(t,Wt.Color)?y`
            <${kl.assign({color:e})}
                style=${z`
                    ${kl.cssVars["vir-color-picker-swatch-height"].name}: 24px;
                    ${kl.cssVars["vir-color-picker-swatch-width"].name}: 24px;
                `}
                ${Ee(kl.events.colorChange,n=>{r(n.detail)})}
            ></${kl}>
        `:Ko(t,Wt.Text)?y`
            <${Pr.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${Ee(Pr.events.valueChange,n=>{r(n.detail)})}
            ></${Pr}>
        `:Ko(t,Wt.Number)?y`
            <${Pr.assign({value:e,allowedInputs:/[\d.]/})}
                ${Ee(Pr.events.valueChange,n=>{r(n.detail)})}
            ></${Pr}>
        `:Ko(t,Wt.Dropdown)?y`
            <${ls.assign({value:e,options:t.options.map(n=>({label:n,value:n}))})}
                ${Ee(ls.events.valueChange,n=>{r(n.detail)})}
            ></${ls}>
        `:Ko(t,Wt.Custom)?t.content:y`
            <p class="error">
                ${t.controlType} controls are not implemented yet.
            </p>
        `}const o2=Dn()({tagName:"book-breadcrumbs",styles:z`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,i)=>{const o=n>=i.length-1,s=i.slice(0,n+1),a=o?"":y`
                      <span class="spacer">&gt;</span>
                  `;return y`
                <${Pn.assign({route:{hash:void 0,search:void 0,paths:[Jr.Book,...s]},router:e.router})}>
                    ${r}
                </${Pn}>
                ${a}
            `}):y`
                &nbsp;
            `}}),T0=Dn()({tagName:"book-breadcrumbs-bar",styles:z`
        :host {
            border-bottom: 1px solid
                ${We["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${We["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return y`
            ${Xn(!!e.currentSearch,y`
                    &nbsp;
                `,y`
                    <${o2.assign({currentRoute:e.currentRoute,router:e.router})}></${o2}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${Ee("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=n.value;await jd({milliseconds:200}),n.value===i&&(n.value?t(new wd({paths:[Jr.Search,encodeURIComponent(n.value)]})):t(new wd(fa)))})}
            />
        `}}),s2=Dn()({tagName:"book-entry-description",styles:z`
        :host {
            color: ${We["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${We["element-book-page-foreground-color"].value};
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
    `,render({inputs:e}){return e.descriptionParagraphs.map(t=>y`
                <p>${t}</p>
            `)}}),a2=Dn()({tagName:"book-page-wrapper",styles:z`
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

        ${Pn} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?y`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:y`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[Jr.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?bk(e.pageNode.entry.errors):void 0;n&&console.error(n);const i=e.blockNavigation?t:y`
                  <${Pn.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                      ${t}
                  </${Pn}>
              `;return y`
            <div class="page-header block-entry">
                <div class="title-group">
                    ${i}
                    ${n?y`
                              <${To.assign({message:n.message})}></${To}>
                          `:y`
                              <${s2.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${s2}>
                              <${yu.assign({config:e.pageNode.entry.controls,currentValues:kg(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${yu}>
                          `}
                </div>
            </div>
        `}}),xc=Dn()({tagName:"book-element-example-title",styles:z`
        :host {
            display: flex;
            color: ${We["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){if(e.blockNavigation)return e.elementExampleNode.entry.title;const t=[Jr.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return y`
            <${Pn.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Pn}>
        `}}),l2=Symbol("unset-internal-state"),u2=Dn()({tagName:"book-element-example-viewer",state(){return{isUnset:l2}},render({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw bk(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===l2&&r({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const n=t.elementExampleNode.entry.render({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return y`
                ${Xn(!!t.elementExampleNode.entry.styles,y`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",fr(n)),console.error(n),y`
                <${To.assign({message:`${t.elementExampleNode.entry.title} failed: ${fr(n)}`})}></${To}>
            `}},options:{allowPolymorphicState:!0}}),c2=Dn()({tagName:"book-element-example-wrapper",styles:z`
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

        ${xc} {
            color: ${We["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${xc} {
            color: ${We["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return y`
            <div class="individual-example-wrapper">
                <${xc.assign({blockNavigation:e.blockNavigation,elementExampleNode:e.elementExampleNode,router:e.router})}></${xc}>
                <${u2.assign(e)}></${u2}>
            </div>
        `}}),a_={milliseconds:10};let Ll;const Sd=new Map,Qo=new Map;function l_(){return Ll||(Ll=new IntersectionObserver(e=>{for(const t of e){const r=t.target,n=Sd.get(r);if(n)if(t.isIntersecting){if(!Qo.has(r)){const i=globalThis.setTimeout(()=>{Qo.delete(r),n(),Ll?.unobserve(r),Sd.delete(r)},ca(a_,{milliseconds:!0}).milliseconds);Qo.set(r,i)}}else{const i=Qo.get(r);i&&(clearTimeout(i),Qo.delete(r))}}},{rootMargin:"100px"})),Ll}function d2(e){const t=Qo.get(e);t&&(clearTimeout(t),Qo.delete(e)),Sd.delete(e),Ll?.unobserve(e)}const $c=Dn()({tagName:"book-lazy-entry",state(){return{hasRendered:!1,placeholderElement:void 0}},styles:z`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&d2(e.placeholderElement)},render({inputs:e,state:t,updateState:r}){return t.hasRendered?e.content:y`
            <div
                class="placeholder"
                ${yd(n=>{t.placeholderElement&&d2(t.placeholderElement),r({placeholderElement:n}),Sd.set(n,()=>{r({hasRendered:!0})}),l_().observe(n)})}
            >
                &nbsp;
            </div>
        `}});function n3(e,t,r,n){const i=em(r,n),o=[];if(i){const s=n3(e,t,i,n);s&&o.push(s)}if(na(r,ur.Page)&&!e.includes(r)){const s=kg(t,r.fullUrlBreadcrumbs);o.push({config:r.entry.controls,current:s,breadcrumbs:ut(s,()=>r.fullUrlBreadcrumbs)})}return o.reduce((s,a)=>({config:{...s.config,...a.config},current:{...s.current,...a.current},breadcrumbs:{...s.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function u_({blockNavigation:e,currentNodes:t,isTopLevel:r,router:n,isSearching:i,controls:o,originalTree:s}){if(!t.length&&i)return[y`
                No results
            `];const a=T.isLengthAtLeast(t,1)?n3(t,o,t[0],s):void 0,l=a&&Object.values(a.config).length&&T.isLengthAtLeast(t,1)?y`
                  <${yu.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${yu}>
              `:fe,u=XN(t,d=>d.fullUrlBreadcrumbs.join(">"),d=>{if(na(d,ur.Page))return y`
                    <${a2.assign({blockNavigation:e,isTopLevel:r,pageNode:d,controls:o,router:n})}
                        class="block-entry"
                    ></${a2}>
                `;if(na(d,ur.ElementExample)){const f=kg(o,d.fullUrlBreadcrumbs.slice(0,-1)),h=y`
                    <${c2.assign({blockNavigation:e,elementExampleNode:d,currentPageControls:f,router:n})}></${c2}>
                `;return y`
                    <${$c.assign({content:h})}
                        class="inline-entry ${mn({"block-entry":d.entry.isVertical})}"
                    ></${$c}>
                `}else{if(na(d,ur.Root))return fe;{const f=y`
                    <${To.assign({message:`Unknown entry type for rendering: '${d.entry.entryType}'`})}></${To}>
                `;return y`
                    <${$c.assign({content:f})}
                        class="block-entry"
                    ></${$c}>
                `}}});return[l,u]}const Ks=Dn()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:z`
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

        ${T0} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${yo["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:nr()},render:({inputs:e,dispatch:t,events:r,state:n,updateState:i})=>{const o=Mk(e.currentRoute.paths),s=u_({blockNavigation:e.blockNavigation,currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!o,controls:e.controls,originalTree:e.originalTree});return y`
            <${T0.assign({currentSearch:o,currentRoute:e.currentRoute,router:e.router})}></${T0}>

            ${Xn(e.showLoading,y`
                    <div
                        ${yd(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${oe.assign({icon:Ma})}></${oe}>
                    </div>
                    ${Xn(!!n.lastElement,y`
                            ${n.lastElement}
                            <slot></slot>
                        `)}
                `,y`
                    <div
                        ${yd(a=>{i({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot></slot>
                `)}
        `}});function c_(e,t,r){const n=f2(e,t);return n.length?n:(r(fa),f2(e,fa.paths))}function f2(e,t){return e.filter(r=>VE({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Dc=Ci()({tagName:"element-book-app",state(){return{currentRoute:fa,router:void 0,loading:!0,colors:{config:void 0,theme:yv(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:nr()},slotNames:["footer","navHeader"],styles:z`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${We["element-book-page-background-color"].value};
            color: ${We["element-book-page-foreground-color"].value};
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

        ${Ks} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${Vs} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:r,updateState:n,dispatch:i,events:o,slotNames:s})=>{t._debug&&console.info("rendering element-book app");function a(f){return{...e.currentRoute,...f}}function l(f){const h=a(f);return!T.jsonEquals(e.currentRoute,h)}function u(f){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,f].filter(T.isTruthy).join(" - "))}function d(f){if(!l(f))return;const h=a(f);e.router?e.router.setRoute(h):n({currentRoute:{...e.currentRoute,...h}}),t.elementBookRoutePaths&&!T.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new o.pathUpdate(h.paths))}try{if(t.elementBookRoutePaths&&!T.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&d({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const D=zO(t.internalRouterConfig.basePath);n({router:D}),D.listen(!0,C=>{n({currentRoute:C})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const f={themeColor:t.themeColor};if(!T.jsonEquals(f,e.colors.config)){const D=yv(f);n({colors:{config:f,theme:D}}),A6(r,D)}const h=t._debug??!1,g=JE({entries:t.pages,debug:h});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:Tk(g.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const m=Mk(e.currentRoute.paths),k=(m?SO({flattenedNodes:g.flattenedNodes,searchQuery:m}):void 0)??c_(g.flattenedNodes,e.currentRoute.paths,d);u(k[0]?.entry.title);const x=e.treeBasedControls?.controls;return x?(t._debug&&console.info({currentControls:x}),y`
                <div
                    class="root"
                    ${Ee(wd,D=>{const C=D.detail;if(!l(C))return;if(n({loading:!0}),d(C),!(r.shadowRoot.querySelector(Vs.tagName)instanceof Vs))throw new TypeError(`Failed to find child '${Vs.tagName}'`)})}
                    ${Ee(yu.events.controlValueChange,D=>{if(!e.treeBasedControls)return;const C=QE(x,D.detail.fullUrlBreadcrumbs,D.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:C}})})}
                >
                    ${t.blockNavigation?fe:y`
                              <${Vs.assign({flattenedNodes:g.flattenedNodes,router:e.router,selectedPath:m?void 0:e.currentRoute.paths.slice(1)})}>
                                  <slot name=${s.navHeader}></slot>
                              </${Vs}>
                          `}
                    <${Ks.assign({blockNavigation:!!t.blockNavigation,controls:x,currentNodes:k,currentRoute:e.currentRoute,debug:h,originalTree:g.tree,router:e.router,showLoading:e.loading})}
                        ${Ee(Ks.events.loadingRender,async D=>{await hu();const C=r.shadowRoot.querySelector(Ks.tagName);C?C.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Ks.tagName}' for scrolling.`),await hu(),n({loading:!D.detail})})}
                    >
                        <slot name=${s.footer}></slot>
                    </${Ks}>
                </div>
            `):y`
                    <${To.assign({message:"Failed to generate page controls."})}></${To}>
                `}catch(f){return console.error(f),y`
                <p class="error">${fr(f)}</p>
            `}}}),nl=Lt({title:"Cards",parent:void 0,descriptionParagraphs:["Multiple full cards of structured render data."]});function i3({newStyles:e,oldStyles:t,shadowRoot:r,maintainFirstStylesheet:n}){if(e!==t){const i=new CSSStyleSheet;i.replaceSync(e);const o=[Qt.isDefined(r.adoptedStyleSheets[0]),i].filter(T.isTruthy);return r.adoptedStyleSheets=o,!0}return!1}const{entries:o3,setPrototypeOf:h2,isFrozen:d_,getPrototypeOf:f_,getOwnPropertyDescriptor:h_}=Object;let{freeze:jr,seal:Ln,create:Wm}=Object,{apply:Vm,construct:Km}=typeof Reflect<"u"&&Reflect;jr||(jr=function(t){return t});Ln||(Ln=function(t){return t});Vm||(Vm=function(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];return t.apply(r,i)});Km||(Km=function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return new t(...n)});const Ac=zr(Array.prototype.forEach),m_=zr(Array.prototype.lastIndexOf),m2=zr(Array.prototype.pop),xl=zr(Array.prototype.push),g_=zr(Array.prototype.splice),_c=zr(String.prototype.toLowerCase),M0=zr(String.prototype.toString),F0=zr(String.prototype.match),$l=zr(String.prototype.replace),p_=zr(String.prototype.indexOf),b_=zr(String.prototype.trim),Hn=zr(Object.prototype.hasOwnProperty),Fr=zr(RegExp.prototype.test),Dl=y_(TypeError);function zr(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return Vm(e,t,n)}}function y_(e){return function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return Km(e,r)}}function Se(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:_c;h2&&h2(e,null);let n=t.length;for(;n--;){let i=t[n];if(typeof i=="string"){const o=r(i);o!==i&&(d_(t)||(t[n]=o),i=o)}e[i]=!0}return e}function v_(e){for(let t=0;t<e.length;t++)Hn(e,t)||(e[t]=null);return e}function mi(e){const t=Wm(null);for(const[r,n]of o3(e))Hn(e,r)&&(Array.isArray(n)?t[r]=v_(n):n&&typeof n=="object"&&n.constructor===Object?t[r]=mi(n):t[r]=n);return t}function Al(e,t){for(;e!==null;){const n=h_(e,t);if(n){if(n.get)return zr(n.get);if(typeof n.value=="function")return zr(n.value)}e=f_(e)}function r(){return null}return r}const g2=jr(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),P0=jr(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),I0=jr(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),w_=jr(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),N0=jr(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),k_=jr(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),p2=jr(["#text"]),b2=jr(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),O0=jr(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),y2=jr(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ec=jr(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),x_=Ln(/\{\{[\w\W]*|[\w\W]*\}\}/gm),$_=Ln(/<%[\w\W]*|[\w\W]*%>/gm),D_=Ln(/\$\{[\w\W]*/gm),A_=Ln(/^data-[\-\w.\u00B7-\uFFFF]+$/),E_=Ln(/^aria-[\-\w]+$/),s3=Ln(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),C_=Ln(/^(?:\w+script|data):/i),S_=Ln(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),a3=Ln(/^html$/i),T_=Ln(/^[a-z][.\w]*(-[.\w]+)+$/i);var v2=Object.freeze({__proto__:null,ARIA_ATTR:E_,ATTR_WHITESPACE:S_,CUSTOM_ELEMENT:T_,DATA_ATTR:A_,DOCTYPE_NAME:a3,ERB_EXPR:$_,IS_ALLOWED_URI:s3,IS_SCRIPT_OR_DATA:C_,MUSTACHE_EXPR:x_,TMPLIT_EXPR:D_});const El={element:1,text:3,progressingInstruction:7,comment:8,document:9},M_=function(){return typeof window>"u"?null:window},F_=function(t,r){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let n=null;const i="data-tt-policy-suffix";r&&r.hasAttribute(i)&&(n=r.getAttribute(i));const o="dompurify"+(n?"#"+n:"");try{return t.createPolicy(o,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},w2=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function l3(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:M_();const t=ae=>l3(ae);if(t.version="3.3.1",t.removed=[],!e||!e.document||e.document.nodeType!==El.document||!e.Element)return t.isSupported=!1,t;let{document:r}=e;const n=r,i=n.currentScript,{DocumentFragment:o,HTMLTemplateElement:s,Node:a,Element:l,NodeFilter:u,NamedNodeMap:d=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:f,DOMParser:h,trustedTypes:g}=e,m=l.prototype,b=Al(m,"cloneNode"),k=Al(m,"remove"),x=Al(m,"nextSibling"),D=Al(m,"childNodes"),C=Al(m,"parentNode");if(typeof s=="function"){const ae=r.createElement("template");ae.content&&ae.content.ownerDocument&&(r=ae.content.ownerDocument)}let P,O="";const{implementation:H,createNodeIterator:ee,createDocumentFragment:ie,getElementsByTagName:X}=r,{importNode:ye}=n;let se=w2();t.isSupported=typeof o3=="function"&&typeof C=="function"&&H&&H.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:$e,ERB_EXPR:Ue,TMPLIT_EXPR:Ge,DATA_ATTR:yr,ARIA_ATTR:Et,IS_SCRIPT_OR_DATA:An,ATTR_WHITESPACE:En,CUSTOM_ELEMENT:Ur}=v2;let{IS_ALLOWED_URI:Ct}=v2,me=null;const yt=Se({},[...g2,...P0,...I0,...N0,...p2]);let Ze=null;const zt=Se({},[...b2,...O0,...y2,...Ec]);let Be=Object.seal(Wm(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),sr=null,Cn=null;const qn=Object.seal(Wm(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Si=!0,il=!0,A=!1,q=!0,S=!1,ue=!0,G=!1,Q=!1,Ye=!1,xt=!1,qr=!1,vr=!1,nn=!0,_o=!1;const Jf="user-content-";let ol=!0,sl=!1,Ns={},fi=null;const Xf=Se({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let db=null;const fb=Se({},["audio","video","img","source","image","track"]);let Qf=null;const hb=Se({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Gu="http://www.w3.org/1998/Math/MathML",Zu="http://www.w3.org/2000/svg",Ti="http://www.w3.org/1999/xhtml";let Os=Ti,eh=!1,th=null;const L3=Se({},[Gu,Zu,Ti],M0);let Yu=Se({},["mi","mo","mn","ms","mtext"]),Ju=Se({},["annotation-xml"]);const _3=Se({},["title","style","font","a","script"]);let al=null;const j3=["application/xhtml+xml","text/html"],z3="text/html";let Ut=null,Rs=null;const U3=r.createElement("form"),mb=function(E){return E instanceof RegExp||E instanceof Function},rh=function(){let E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Rs&&Rs===E)){if((!E||typeof E!="object")&&(E={}),E=mi(E),al=j3.indexOf(E.PARSER_MEDIA_TYPE)===-1?z3:E.PARSER_MEDIA_TYPE,Ut=al==="application/xhtml+xml"?M0:_c,me=Hn(E,"ALLOWED_TAGS")?Se({},E.ALLOWED_TAGS,Ut):yt,Ze=Hn(E,"ALLOWED_ATTR")?Se({},E.ALLOWED_ATTR,Ut):zt,th=Hn(E,"ALLOWED_NAMESPACES")?Se({},E.ALLOWED_NAMESPACES,M0):L3,Qf=Hn(E,"ADD_URI_SAFE_ATTR")?Se(mi(hb),E.ADD_URI_SAFE_ATTR,Ut):hb,db=Hn(E,"ADD_DATA_URI_TAGS")?Se(mi(fb),E.ADD_DATA_URI_TAGS,Ut):fb,fi=Hn(E,"FORBID_CONTENTS")?Se({},E.FORBID_CONTENTS,Ut):Xf,sr=Hn(E,"FORBID_TAGS")?Se({},E.FORBID_TAGS,Ut):mi({}),Cn=Hn(E,"FORBID_ATTR")?Se({},E.FORBID_ATTR,Ut):mi({}),Ns=Hn(E,"USE_PROFILES")?E.USE_PROFILES:!1,Si=E.ALLOW_ARIA_ATTR!==!1,il=E.ALLOW_DATA_ATTR!==!1,A=E.ALLOW_UNKNOWN_PROTOCOLS||!1,q=E.ALLOW_SELF_CLOSE_IN_ATTR!==!1,S=E.SAFE_FOR_TEMPLATES||!1,ue=E.SAFE_FOR_XML!==!1,G=E.WHOLE_DOCUMENT||!1,xt=E.RETURN_DOM||!1,qr=E.RETURN_DOM_FRAGMENT||!1,vr=E.RETURN_TRUSTED_TYPE||!1,Ye=E.FORCE_BODY||!1,nn=E.SANITIZE_DOM!==!1,_o=E.SANITIZE_NAMED_PROPS||!1,ol=E.KEEP_CONTENT!==!1,sl=E.IN_PLACE||!1,Ct=E.ALLOWED_URI_REGEXP||s3,Os=E.NAMESPACE||Ti,Yu=E.MATHML_TEXT_INTEGRATION_POINTS||Yu,Ju=E.HTML_INTEGRATION_POINTS||Ju,Be=E.CUSTOM_ELEMENT_HANDLING||{},E.CUSTOM_ELEMENT_HANDLING&&mb(E.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Be.tagNameCheck=E.CUSTOM_ELEMENT_HANDLING.tagNameCheck),E.CUSTOM_ELEMENT_HANDLING&&mb(E.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Be.attributeNameCheck=E.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),E.CUSTOM_ELEMENT_HANDLING&&typeof E.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(Be.allowCustomizedBuiltInElements=E.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),S&&(il=!1),qr&&(xt=!0),Ns&&(me=Se({},p2),Ze=[],Ns.html===!0&&(Se(me,g2),Se(Ze,b2)),Ns.svg===!0&&(Se(me,P0),Se(Ze,O0),Se(Ze,Ec)),Ns.svgFilters===!0&&(Se(me,I0),Se(Ze,O0),Se(Ze,Ec)),Ns.mathMl===!0&&(Se(me,N0),Se(Ze,y2),Se(Ze,Ec))),E.ADD_TAGS&&(typeof E.ADD_TAGS=="function"?qn.tagCheck=E.ADD_TAGS:(me===yt&&(me=mi(me)),Se(me,E.ADD_TAGS,Ut))),E.ADD_ATTR&&(typeof E.ADD_ATTR=="function"?qn.attributeCheck=E.ADD_ATTR:(Ze===zt&&(Ze=mi(Ze)),Se(Ze,E.ADD_ATTR,Ut))),E.ADD_URI_SAFE_ATTR&&Se(Qf,E.ADD_URI_SAFE_ATTR,Ut),E.FORBID_CONTENTS&&(fi===Xf&&(fi=mi(fi)),Se(fi,E.FORBID_CONTENTS,Ut)),E.ADD_FORBID_CONTENTS&&(fi===Xf&&(fi=mi(fi)),Se(fi,E.ADD_FORBID_CONTENTS,Ut)),ol&&(me["#text"]=!0),G&&Se(me,["html","head","body"]),me.table&&(Se(me,["tbody"]),delete sr.tbody),E.TRUSTED_TYPES_POLICY){if(typeof E.TRUSTED_TYPES_POLICY.createHTML!="function")throw Dl('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof E.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Dl('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');P=E.TRUSTED_TYPES_POLICY,O=P.createHTML("")}else P===void 0&&(P=F_(g,i)),P!==null&&typeof O=="string"&&(O=P.createHTML(""));jr&&jr(E),Rs=E}},gb=Se({},[...P0,...I0,...w_]),pb=Se({},[...N0,...k_]),q3=function(E){let L=C(E);(!L||!L.tagName)&&(L={namespaceURI:Os,tagName:"template"});const ne=_c(E.tagName),ct=_c(L.tagName);return th[E.namespaceURI]?E.namespaceURI===Zu?L.namespaceURI===Ti?ne==="svg":L.namespaceURI===Gu?ne==="svg"&&(ct==="annotation-xml"||Yu[ct]):!!gb[ne]:E.namespaceURI===Gu?L.namespaceURI===Ti?ne==="math":L.namespaceURI===Zu?ne==="math"&&Ju[ct]:!!pb[ne]:E.namespaceURI===Ti?L.namespaceURI===Zu&&!Ju[ct]||L.namespaceURI===Gu&&!Yu[ct]?!1:!pb[ne]&&(_3[ne]||!gb[ne]):!!(al==="application/xhtml+xml"&&th[E.namespaceURI]):!1},hi=function(E){xl(t.removed,{element:E});try{C(E).removeChild(E)}catch{k(E)}},jo=function(E,L){try{xl(t.removed,{attribute:L.getAttributeNode(E),from:L})}catch{xl(t.removed,{attribute:null,from:L})}if(L.removeAttribute(E),E==="is")if(xt||qr)try{hi(L)}catch{}else try{L.setAttribute(E,"")}catch{}},bb=function(E){let L=null,ne=null;if(Ye)E="<remove></remove>"+E;else{const St=F0(E,/^[\r\n\t ]+/);ne=St&&St[0]}al==="application/xhtml+xml"&&Os===Ti&&(E='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+E+"</body></html>");const ct=P?P.createHTML(E):E;if(Os===Ti)try{L=new h().parseFromString(ct,al)}catch{}if(!L||!L.documentElement){L=H.createDocument(Os,"template",null);try{L.documentElement.innerHTML=eh?O:ct}catch{}}const wr=L.body||L.documentElement;return E&&ne&&wr.insertBefore(r.createTextNode(ne),wr.childNodes[0]||null),Os===Ti?X.call(L,G?"html":"body")[0]:G?L.documentElement:wr},yb=function(E){return ee.call(E.ownerDocument||E,E,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},nh=function(E){return E instanceof f&&(typeof E.nodeName!="string"||typeof E.textContent!="string"||typeof E.removeChild!="function"||!(E.attributes instanceof d)||typeof E.removeAttribute!="function"||typeof E.setAttribute!="function"||typeof E.namespaceURI!="string"||typeof E.insertBefore!="function"||typeof E.hasChildNodes!="function")},vb=function(E){return typeof a=="function"&&E instanceof a};function Mi(ae,E,L){Ac(ae,ne=>{ne.call(t,E,L,Rs)})}const wb=function(E){let L=null;if(Mi(se.beforeSanitizeElements,E,null),nh(E))return hi(E),!0;const ne=Ut(E.nodeName);if(Mi(se.uponSanitizeElement,E,{tagName:ne,allowedTags:me}),ue&&E.hasChildNodes()&&!vb(E.firstElementChild)&&Fr(/<[/\w!]/g,E.innerHTML)&&Fr(/<[/\w!]/g,E.textContent)||E.nodeType===El.progressingInstruction||ue&&E.nodeType===El.comment&&Fr(/<[/\w]/g,E.data))return hi(E),!0;if(!(qn.tagCheck instanceof Function&&qn.tagCheck(ne))&&(!me[ne]||sr[ne])){if(!sr[ne]&&xb(ne)&&(Be.tagNameCheck instanceof RegExp&&Fr(Be.tagNameCheck,ne)||Be.tagNameCheck instanceof Function&&Be.tagNameCheck(ne)))return!1;if(ol&&!fi[ne]){const ct=C(E)||E.parentNode,wr=D(E)||E.childNodes;if(wr&&ct){const St=wr.length;for(let Wr=St-1;Wr>=0;--Wr){const Fi=b(wr[Wr],!0);Fi.__removalCount=(E.__removalCount||0)+1,ct.insertBefore(Fi,x(E))}}}return hi(E),!0}return E instanceof l&&!q3(E)||(ne==="noscript"||ne==="noembed"||ne==="noframes")&&Fr(/<\/no(script|embed|frames)/i,E.innerHTML)?(hi(E),!0):(S&&E.nodeType===El.text&&(L=E.textContent,Ac([$e,Ue,Ge],ct=>{L=$l(L,ct," ")}),E.textContent!==L&&(xl(t.removed,{element:E.cloneNode()}),E.textContent=L)),Mi(se.afterSanitizeElements,E,null),!1)},kb=function(E,L,ne){if(nn&&(L==="id"||L==="name")&&(ne in r||ne in U3))return!1;if(!(il&&!Cn[L]&&Fr(yr,L))){if(!(Si&&Fr(Et,L))){if(!(qn.attributeCheck instanceof Function&&qn.attributeCheck(L,E))){if(!Ze[L]||Cn[L]){if(!(xb(E)&&(Be.tagNameCheck instanceof RegExp&&Fr(Be.tagNameCheck,E)||Be.tagNameCheck instanceof Function&&Be.tagNameCheck(E))&&(Be.attributeNameCheck instanceof RegExp&&Fr(Be.attributeNameCheck,L)||Be.attributeNameCheck instanceof Function&&Be.attributeNameCheck(L,E))||L==="is"&&Be.allowCustomizedBuiltInElements&&(Be.tagNameCheck instanceof RegExp&&Fr(Be.tagNameCheck,ne)||Be.tagNameCheck instanceof Function&&Be.tagNameCheck(ne))))return!1}else if(!Qf[L]){if(!Fr(Ct,$l(ne,En,""))){if(!((L==="src"||L==="xlink:href"||L==="href")&&E!=="script"&&p_(ne,"data:")===0&&db[E])){if(!(A&&!Fr(An,$l(ne,En,"")))){if(ne)return!1}}}}}}}return!0},xb=function(E){return E!=="annotation-xml"&&F0(E,Ur)},$b=function(E){Mi(se.beforeSanitizeAttributes,E,null);const{attributes:L}=E;if(!L||nh(E))return;const ne={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ze,forceKeepAttr:void 0};let ct=L.length;for(;ct--;){const wr=L[ct],{name:St,namespaceURI:Wr,value:Fi}=wr,Bs=Ut(St),ih=Fi;let ar=St==="value"?ih:b_(ih);if(ne.attrName=Bs,ne.attrValue=ar,ne.keepAttr=!0,ne.forceKeepAttr=void 0,Mi(se.uponSanitizeAttribute,E,ne),ar=ne.attrValue,_o&&(Bs==="id"||Bs==="name")&&(jo(St,E),ar=Jf+ar),ue&&Fr(/((--!?|])>)|<\/(style|title|textarea)/i,ar)){jo(St,E);continue}if(Bs==="attributename"&&F0(ar,"href")){jo(St,E);continue}if(ne.forceKeepAttr)continue;if(!ne.keepAttr){jo(St,E);continue}if(!q&&Fr(/\/>/i,ar)){jo(St,E);continue}S&&Ac([$e,Ue,Ge],Ab=>{ar=$l(ar,Ab," ")});const Db=Ut(E.nodeName);if(!kb(Db,Bs,ar)){jo(St,E);continue}if(P&&typeof g=="object"&&typeof g.getAttributeType=="function"&&!Wr)switch(g.getAttributeType(Db,Bs)){case"TrustedHTML":{ar=P.createHTML(ar);break}case"TrustedScriptURL":{ar=P.createScriptURL(ar);break}}if(ar!==ih)try{Wr?E.setAttributeNS(Wr,St,ar):E.setAttribute(St,ar),nh(E)?hi(E):m2(t.removed)}catch{jo(St,E)}}Mi(se.afterSanitizeAttributes,E,null)},W3=function ae(E){let L=null;const ne=yb(E);for(Mi(se.beforeSanitizeShadowDOM,E,null);L=ne.nextNode();)Mi(se.uponSanitizeShadowNode,L,null),wb(L),$b(L),L.content instanceof o&&ae(L.content);Mi(se.afterSanitizeShadowDOM,E,null)};return t.sanitize=function(ae){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},L=null,ne=null,ct=null,wr=null;if(eh=!ae,eh&&(ae="<!-->"),typeof ae!="string"&&!vb(ae))if(typeof ae.toString=="function"){if(ae=ae.toString(),typeof ae!="string")throw Dl("dirty is not a string, aborting")}else throw Dl("toString is not a function");if(!t.isSupported)return ae;if(Q||rh(E),t.removed=[],typeof ae=="string"&&(sl=!1),sl){if(ae.nodeName){const Fi=Ut(ae.nodeName);if(!me[Fi]||sr[Fi])throw Dl("root node is forbidden and cannot be sanitized in-place")}}else if(ae instanceof a)L=bb("<!---->"),ne=L.ownerDocument.importNode(ae,!0),ne.nodeType===El.element&&ne.nodeName==="BODY"||ne.nodeName==="HTML"?L=ne:L.appendChild(ne);else{if(!xt&&!S&&!G&&ae.indexOf("<")===-1)return P&&vr?P.createHTML(ae):ae;if(L=bb(ae),!L)return xt?null:vr?O:""}L&&Ye&&hi(L.firstChild);const St=yb(sl?ae:L);for(;ct=St.nextNode();)wb(ct),$b(ct),ct.content instanceof o&&W3(ct.content);if(sl)return ae;if(xt){if(qr)for(wr=ie.call(L.ownerDocument);L.firstChild;)wr.appendChild(L.firstChild);else wr=L;return(Ze.shadowroot||Ze.shadowrootmode)&&(wr=ye.call(n,wr,!0)),wr}let Wr=G?L.outerHTML:L.innerHTML;return G&&me["!doctype"]&&L.ownerDocument&&L.ownerDocument.doctype&&L.ownerDocument.doctype.name&&Fr(a3,L.ownerDocument.doctype.name)&&(Wr="<!DOCTYPE "+L.ownerDocument.doctype.name+`>
`+Wr),S&&Ac([$e,Ue,Ge],Fi=>{Wr=$l(Wr,Fi," ")}),P&&vr?P.createHTML(Wr):Wr},t.setConfig=function(){let ae=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};rh(ae),Q=!0},t.clearConfig=function(){Rs=null,Q=!1},t.isValidAttribute=function(ae,E,L){Rs||rh({});const ne=Ut(ae),ct=Ut(E);return kb(ne,ct,L)},t.addHook=function(ae,E){typeof E=="function"&&xl(se[ae],E)},t.removeHook=function(ae,E){if(E!==void 0){const L=m_(se[ae],E);return L===-1?void 0:g_(se[ae],L,1)[0]}return m2(se[ae])},t.removeHooks=function(ae){se[ae]=[]},t.removeAllHooks=function(){se=w2()},t}var zf=l3();const yz=Object.freeze(Object.defineProperty({__proto__:null,default:zf},Symbol.toStringTag,{value:"Module"}));function Yp(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Is=Yp();function u3(e){Is=e}var es={exec:()=>null};function _e(e,t=""){let r=typeof e=="string"?e:e.source,n={replace:(i,o)=>{let s=typeof o=="string"?o:o.source;return s=s.replace(Rr.caret,"$1"),r=r.replace(i,s),n},getRegex:()=>new RegExp(r,t)};return n}var P_=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Rr={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}>`)},I_=/^(?:[ \t]*(?:\n|$))+/,N_=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,O_=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ku=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,R_=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Jp=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,c3=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,d3=_e(c3).replace(/bull/g,Jp).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),B_=_e(c3).replace(/bull/g,Jp).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Xp=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,L_=/^[^\n]+/,Qp=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,__=_e(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Qp).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),j_=_e(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Jp).getRegex(),Uf="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",eb=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,z_=_e("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",eb).replace("tag",Uf).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),f3=_e(Xp).replace("hr",Ku).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Uf).getRegex(),U_=_e(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",f3).getRegex(),tb={blockquote:U_,code:N_,def:__,fences:O_,heading:R_,hr:Ku,html:z_,lheading:d3,list:j_,newline:I_,paragraph:f3,table:es,text:L_},k2=_e("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ku).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Uf).getRegex(),q_={...tb,lheading:B_,table:k2,paragraph:_e(Xp).replace("hr",Ku).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",k2).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Uf).getRegex()},W_={...tb,html:_e(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",eb).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:es,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:_e(Xp).replace("hr",Ku).replace("heading",` *#{1,6} *[^
]`).replace("lheading",d3).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},V_=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,K_=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,h3=/^( {2,}|\\)\n(?!\s*$)/,H_=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,qf=/[\p{P}\p{S}]/u,rb=/[\s\p{P}\p{S}]/u,m3=/[^\s\p{P}\p{S}]/u,G_=_e(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,rb).getRegex(),g3=/(?!~)[\p{P}\p{S}]/u,Z_=/(?!~)[\s\p{P}\p{S}]/u,Y_=/(?:[^\s\p{P}\p{S}]|~)/u,p3=/(?![*_])[\p{P}\p{S}]/u,J_=/(?![*_])[\s\p{P}\p{S}]/u,X_=/(?:[^\s\p{P}\p{S}]|[*_])/u,Q_=_e(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",P_?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),b3=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,ej=_e(b3,"u").replace(/punct/g,qf).getRegex(),tj=_e(b3,"u").replace(/punct/g,g3).getRegex(),y3="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",rj=_e(y3,"gu").replace(/notPunctSpace/g,m3).replace(/punctSpace/g,rb).replace(/punct/g,qf).getRegex(),nj=_e(y3,"gu").replace(/notPunctSpace/g,Y_).replace(/punctSpace/g,Z_).replace(/punct/g,g3).getRegex(),ij=_e("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,m3).replace(/punctSpace/g,rb).replace(/punct/g,qf).getRegex(),oj=_e(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,p3).getRegex(),sj="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",aj=_e(sj,"gu").replace(/notPunctSpace/g,X_).replace(/punctSpace/g,J_).replace(/punct/g,p3).getRegex(),lj=_e(/\\(punct)/,"gu").replace(/punct/g,qf).getRegex(),uj=_e(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),cj=_e(eb).replace("(?:-->|$)","-->").getRegex(),dj=_e("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",cj).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Td=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,fj=_e(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Td).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),v3=_e(/^!?\[(label)\]\[(ref)\]/).replace("label",Td).replace("ref",Qp).getRegex(),w3=_e(/^!?\[(ref)\](?:\[\])?/).replace("ref",Qp).getRegex(),hj=_e("reflink|nolink(?!\\()","g").replace("reflink",v3).replace("nolink",w3).getRegex(),x2=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,nb={_backpedal:es,anyPunctuation:lj,autolink:uj,blockSkip:Q_,br:h3,code:K_,del:es,delLDelim:es,delRDelim:es,emStrongLDelim:ej,emStrongRDelimAst:rj,emStrongRDelimUnd:ij,escape:V_,link:fj,nolink:w3,punctuation:G_,reflink:v3,reflinkSearch:hj,tag:dj,text:H_,url:es},mj={...nb,link:_e(/^!?\[(label)\]\((.*?)\)/).replace("label",Td).getRegex(),reflink:_e(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Td).getRegex()},Hm={...nb,emStrongRDelimAst:nj,emStrongLDelim:tj,delLDelim:oj,delRDelim:aj,url:_e(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",x2).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:_e(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",x2).getRegex()},gj={...Hm,br:_e(h3).replace("{2,}","*").getRegex(),text:_e(Hm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Cc={normal:tb,gfm:q_,pedantic:W_},Cl={normal:nb,gfm:Hm,breaks:gj,pedantic:mj},pj={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},$2=e=>pj[e];function gi(e,t){if(t){if(Rr.escapeTest.test(e))return e.replace(Rr.escapeReplace,$2)}else if(Rr.escapeTestNoEncode.test(e))return e.replace(Rr.escapeReplaceNoEncode,$2);return e}function D2(e){try{e=encodeURI(e).replace(Rr.percentDecode,"%")}catch{return null}return e}function A2(e,t){let r=e.replace(Rr.findPipe,(o,s,a)=>{let l=!1,u=s;for(;--u>=0&&a[u]==="\\";)l=!l;return l?"|":" |"}),n=r.split(Rr.splitPipe),i=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(Rr.slashPipe,"|");return n}function Sl(e,t,r){let n=e.length;if(n===0)return"";let i=0;for(;i<n&&e.charAt(n-i-1)===t;)i++;return e.slice(0,n-i)}function bj(e,t){if(e.indexOf(t[1])===-1)return-1;let r=0;for(let n=0;n<e.length;n++)if(e[n]==="\\")n++;else if(e[n]===t[0])r++;else if(e[n]===t[1]&&(r--,r<0))return n;return r>0?-2:-1}function yj(e,t=0){let r=t,n="";for(let i of e)if(i==="	"){let o=4-r%4;n+=" ".repeat(o),r+=o}else n+=i,r++;return n}function E2(e,t,r,n,i){let o=t.href,s=t.title||null,a=e[1].replace(i.other.outputLinkReplace,"$1");n.state.inLink=!0;let l={type:e[0].charAt(0)==="!"?"image":"link",raw:r,href:o,title:s,text:a,tokens:n.inlineTokens(a)};return n.state.inLink=!1,l}function vj(e,t,r){let n=e.match(r.other.indentCodeCompensation);if(n===null)return t;let i=n[1];return t.split(`
`).map(o=>{let s=o.match(r.other.beginningSpace);if(s===null)return o;let[a]=s;return a.length>=i.length?o.slice(i.length):o}).join(`
`)}var Md=class{options;rules;lexer;constructor(e){this.options=e||Is}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let r=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Sl(r,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let r=t[0],n=vj(r,t[3]||"",this.rules);return{type:"code",raw:r,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let r=t[2].trim();if(this.rules.other.endingHash.test(r)){let n=Sl(r,"#");(this.options.pedantic||!n||this.rules.other.endingSpaceChar.test(n))&&(r=n.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Sl(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let r=Sl(t[0],`
`).split(`
`),n="",i="",o=[];for(;r.length>0;){let s=!1,a=[],l;for(l=0;l<r.length;l++)if(this.rules.other.blockquoteStart.test(r[l]))a.push(r[l]),s=!0;else if(!s)a.push(r[l]);else break;r=r.slice(l);let u=a.join(`
`),d=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");n=n?`${n}
${u}`:u,i=i?`${i}
${d}`:d;let f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,o,!0),this.lexer.state.top=f,r.length===0)break;let h=o.at(-1);if(h?.type==="code")break;if(h?.type==="blockquote"){let g=h,m=g.raw+`
`+r.join(`
`),b=this.blockquote(m);o[o.length-1]=b,n=n.substring(0,n.length-g.raw.length)+b.raw,i=i.substring(0,i.length-g.text.length)+b.text;break}else if(h?.type==="list"){let g=h,m=g.raw+`
`+r.join(`
`),b=this.list(m);o[o.length-1]=b,n=n.substring(0,n.length-h.raw.length)+b.raw,i=i.substring(0,i.length-g.raw.length)+b.raw,r=m.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:n,tokens:o,text:i}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r=t[1].trim(),n=r.length>1,i={type:"list",raw:"",ordered:n,start:n?+r.slice(0,-1):"",loose:!1,items:[]};r=n?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=n?r:"[*+-]");let o=this.rules.other.listItemRegex(r),s=!1;for(;e;){let l=!1,u="",d="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let f=yj(t[2].split(`
`,1)[0],t[1].length),h=e.split(`
`,1)[0],g=!f.trim(),m=0;if(this.options.pedantic?(m=2,d=f.trimStart()):g?m=t[1].length+1:(m=f.search(this.rules.other.nonSpaceChar),m=m>4?1:m,d=f.slice(m),m+=t[1].length),g&&this.rules.other.blankLine.test(h)&&(u+=h+`
`,e=e.substring(h.length+1),l=!0),!l){let b=this.rules.other.nextBulletRegex(m),k=this.rules.other.hrRegex(m),x=this.rules.other.fencesBeginRegex(m),D=this.rules.other.headingBeginRegex(m),C=this.rules.other.htmlBeginRegex(m),P=this.rules.other.blockquoteBeginRegex(m);for(;e;){let O=e.split(`
`,1)[0],H;if(h=O,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),H=h):H=h.replace(this.rules.other.tabCharGlobal,"    "),x.test(h)||D.test(h)||C.test(h)||P.test(h)||b.test(h)||k.test(h))break;if(H.search(this.rules.other.nonSpaceChar)>=m||!h.trim())d+=`
`+H.slice(m);else{if(g||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||x.test(f)||D.test(f)||k.test(f))break;d+=`
`+h}g=!h.trim(),u+=O+`
`,e=e.substring(O.length+1),f=H.slice(m)}}i.loose||(s?i.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(s=!0)),i.items.push({type:"list_item",raw:u,task:!!this.options.gfm&&this.rules.other.listIsTask.test(d),loose:!1,text:d,tokens:[]}),i.raw+=u}let a=i.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let l of i.items){if(this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]),l.task){if(l.text=l.text.replace(this.rules.other.listReplaceTask,""),l.tokens[0]?.type==="text"||l.tokens[0]?.type==="paragraph"){l.tokens[0].raw=l.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),l.tokens[0].text=l.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let d=this.lexer.inlineQueue.length-1;d>=0;d--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[d].src)){this.lexer.inlineQueue[d].src=this.lexer.inlineQueue[d].src.replace(this.rules.other.listReplaceTask,"");break}}let u=this.rules.other.listTaskCheckbox.exec(l.raw);if(u){let d={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};l.checked=d.checked,i.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=d.raw+l.tokens[0].raw,l.tokens[0].text=d.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(d)):l.tokens.unshift({type:"paragraph",raw:d.raw,text:d.raw,tokens:[d]}):l.tokens.unshift(d)}}if(!i.loose){let u=l.tokens.filter(f=>f.type==="space"),d=u.length>0&&u.some(f=>this.rules.other.anyLine.test(f.raw));i.loose=d}}if(i.loose)for(let l of i.items){l.loose=!0;for(let u of l.tokens)u.type==="text"&&(u.type="paragraph")}return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let r=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:r,raw:t[0],href:n,title:i}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let r=A2(t[1]),n=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(r.length===n.length){for(let s of n)this.rules.other.tableAlignRight.test(s)?o.align.push("right"):this.rules.other.tableAlignCenter.test(s)?o.align.push("center"):this.rules.other.tableAlignLeft.test(s)?o.align.push("left"):o.align.push(null);for(let s=0;s<r.length;s++)o.header.push({text:r[s],tokens:this.lexer.inline(r[s]),header:!0,align:o.align[s]});for(let s of i)o.rows.push(A2(s,o.header.length).map((a,l)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:o.align[l]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let r=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:r,tokens:this.lexer.inline(r)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let r=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let o=Sl(r.slice(0,-1),"\\");if((r.length-o.length)%2===0)return}else{let o=bj(t[2],"()");if(o===-2)return;if(o>-1){let s=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,s).trim(),t[3]=""}}let n=t[2],i="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(n);o&&(n=o[1],i=o[3])}else i=t[3]?t[3].slice(1,-1):"";return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?n=n.slice(1):n=n.slice(1,-1)),E2(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let n=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=t[n.toLowerCase()];if(!i){let o=r[0].charAt(0);return{type:"text",raw:o,text:o}}return E2(r,i,r[0],this.lexer,this.rules)}}emStrong(e,t,r=""){let n=this.rules.inline.emStrongLDelim.exec(e);if(!(!n||n[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(n[1]||n[2])||!r||this.rules.inline.punctuation.exec(r))){let i=[...n[0]].length-1,o,s,a=i,l=0,u=n[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,t=t.slice(-1*e.length+i);(n=u.exec(t))!=null;){if(o=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!o)continue;if(s=[...o].length,n[3]||n[4]){a+=s;continue}else if((n[5]||n[6])&&i%3&&!((i+s)%3)){l+=s;continue}if(a-=s,a>0)continue;s=Math.min(s,s+a+l);let d=[...n[0]][0].length,f=e.slice(0,i+n.index+d+s);if(Math.min(i,s)%2){let g=f.slice(1,-1);return{type:"em",raw:f,text:g,tokens:this.lexer.inlineTokens(g)}}let h=f.slice(2,-2);return{type:"strong",raw:f,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let r=t[2].replace(this.rules.other.newLineCharGlobal," "),n=this.rules.other.nonSpaceChar.test(r),i=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return n&&i&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:t[0],text:r}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e,t,r=""){let n=this.rules.inline.delLDelim.exec(e);if(n&&(!n[1]||!r||this.rules.inline.punctuation.exec(r))){let i=[...n[0]].length-1,o,s,a=i,l=this.rules.inline.delRDelim;for(l.lastIndex=0,t=t.slice(-1*e.length+i);(n=l.exec(t))!=null;){if(o=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!o||(s=[...o].length,s!==i))continue;if(n[3]||n[4]){a+=s;continue}if(a-=s,a>0)continue;s=Math.min(s,s+a);let u=[...n[0]][0].length,d=e.slice(0,i+n.index+u+s),f=d.slice(i,-i);return{type:"del",raw:d,text:f,tokens:this.lexer.inlineTokens(f)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let r,n;return t[2]==="@"?(r=t[1],n="mailto:"+r):(r=t[1],n=r),{type:"link",raw:t[0],text:r,href:n,tokens:[{type:"text",raw:r,text:r}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let r,n;if(t[2]==="@")r=t[0],n="mailto:"+r;else{let i;do i=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(i!==t[0]);r=t[0],t[1]==="www."?n="http://"+t[0]:n=t[0]}return{type:"link",raw:t[0],text:r,href:n,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let r=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:r}}}},Zn=class Gm{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Is,this.options.tokenizer=this.options.tokenizer||new Md,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let r={other:Rr,block:Cc.normal,inline:Cl.normal};this.options.pedantic?(r.block=Cc.pedantic,r.inline=Cl.pedantic):this.options.gfm&&(r.block=Cc.gfm,this.options.breaks?r.inline=Cl.breaks:r.inline=Cl.gfm),this.tokenizer.rules=r}static get rules(){return{block:Cc,inline:Cl}}static lex(t,r){return new Gm(r).lex(t)}static lexInline(t,r){return new Gm(r).inlineTokens(t)}lex(t){t=t.replace(Rr.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let r=0;r<this.inlineQueue.length;r++){let n=this.inlineQueue[r];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,r=[],n=!1){for(this.options.pedantic&&(t=t.replace(Rr.tabCharGlobal,"    ").replace(Rr.spaceLine,""));t;){let i;if(this.options.extensions?.block?.some(s=>(i=s.call({lexer:this},t,r))?(t=t.substring(i.raw.length),r.push(i),!0):!1))continue;if(i=this.tokenizer.space(t)){t=t.substring(i.raw.length);let s=r.at(-1);i.raw.length===1&&s!==void 0?s.raw+=`
`:r.push(i);continue}if(i=this.tokenizer.code(t)){t=t.substring(i.raw.length);let s=r.at(-1);s?.type==="paragraph"||s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.text,this.inlineQueue.at(-1).src=s.text):r.push(i);continue}if(i=this.tokenizer.fences(t)){t=t.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.heading(t)){t=t.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.hr(t)){t=t.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.blockquote(t)){t=t.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.list(t)){t=t.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.html(t)){t=t.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.def(t)){t=t.substring(i.raw.length);let s=r.at(-1);s?.type==="paragraph"||s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.raw,this.inlineQueue.at(-1).src=s.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},r.push(i));continue}if(i=this.tokenizer.table(t)){t=t.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.lheading(t)){t=t.substring(i.raw.length),r.push(i);continue}let o=t;if(this.options.extensions?.startBlock){let s=1/0,a=t.slice(1),l;this.options.extensions.startBlock.forEach(u=>{l=u.call({lexer:this},a),typeof l=="number"&&l>=0&&(s=Math.min(s,l))}),s<1/0&&s>=0&&(o=t.substring(0,s+1))}if(this.state.top&&(i=this.tokenizer.paragraph(o))){let s=r.at(-1);n&&s?.type==="paragraph"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):r.push(i),n=o.length!==t.length,t=t.substring(i.raw.length);continue}if(i=this.tokenizer.text(t)){t=t.substring(i.raw.length);let s=r.at(-1);s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):r.push(i);continue}if(t){let s="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(s);break}else throw new Error(s)}}return this.state.top=!0,r}inline(t,r=[]){return this.inlineQueue.push({src:t,tokens:r}),r}inlineTokens(t,r=[]){let n=t,i=null;if(this.tokens.links){let l=Object.keys(this.tokens.links);if(l.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)l.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,i.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(i=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)o=i[2]?i[2].length:0,n=n.slice(0,i.index+o)+"["+"a".repeat(i[0].length-o-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let s=!1,a="";for(;t;){s||(a=""),s=!1;let l;if(this.options.extensions?.inline?.some(d=>(l=d.call({lexer:this},t,r))?(t=t.substring(l.raw.length),r.push(l),!0):!1))continue;if(l=this.tokenizer.escape(t)){t=t.substring(l.raw.length),r.push(l);continue}if(l=this.tokenizer.tag(t)){t=t.substring(l.raw.length),r.push(l);continue}if(l=this.tokenizer.link(t)){t=t.substring(l.raw.length),r.push(l);continue}if(l=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(l.raw.length);let d=r.at(-1);l.type==="text"&&d?.type==="text"?(d.raw+=l.raw,d.text+=l.text):r.push(l);continue}if(l=this.tokenizer.emStrong(t,n,a)){t=t.substring(l.raw.length),r.push(l);continue}if(l=this.tokenizer.codespan(t)){t=t.substring(l.raw.length),r.push(l);continue}if(l=this.tokenizer.br(t)){t=t.substring(l.raw.length),r.push(l);continue}if(l=this.tokenizer.del(t,n,a)){t=t.substring(l.raw.length),r.push(l);continue}if(l=this.tokenizer.autolink(t)){t=t.substring(l.raw.length),r.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(t))){t=t.substring(l.raw.length),r.push(l);continue}let u=t;if(this.options.extensions?.startInline){let d=1/0,f=t.slice(1),h;this.options.extensions.startInline.forEach(g=>{h=g.call({lexer:this},f),typeof h=="number"&&h>=0&&(d=Math.min(d,h))}),d<1/0&&d>=0&&(u=t.substring(0,d+1))}if(l=this.tokenizer.inlineText(u)){t=t.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(a=l.raw.slice(-1)),s=!0;let d=r.at(-1);d?.type==="text"?(d.raw+=l.raw,d.text+=l.text):r.push(l);continue}if(t){let d="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return r}},Fd=class{options;parser;constructor(e){this.options=e||Is}space(e){return""}code({text:e,lang:t,escaped:r}){let n=(t||"").match(Rr.notSpaceStart)?.[0],i=e.replace(Rr.endingNewline,"")+`
`;return n?'<pre><code class="language-'+gi(n)+'">'+(r?i:gi(i,!0))+`</code></pre>
`:"<pre><code>"+(r?i:gi(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,r=e.start,n="";for(let s=0;s<e.items.length;s++){let a=e.items[s];n+=this.listitem(a)}let i=t?"ol":"ul",o=t&&r!==1?' start="'+r+'"':"";return"<"+i+o+`>
`+n+"</"+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",r="";for(let i=0;i<e.header.length;i++)r+=this.tablecell(e.header[i]);t+=this.tablerow({text:r});let n="";for(let i=0;i<e.rows.length;i++){let o=e.rows[i];r="";for(let s=0;s<o.length;s++)r+=this.tablecell(o[s]);n+=this.tablerow({text:r})}return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+n+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),r=e.header?"th":"td";return(e.align?`<${r} align="${e.align}">`:`<${r}>`)+t+`</${r}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${gi(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:r}){let n=this.parser.parseInline(r),i=D2(e);if(i===null)return n;e=i;let o='<a href="'+e+'"';return t&&(o+=' title="'+gi(t)+'"'),o+=">"+n+"</a>",o}image({href:e,title:t,text:r,tokens:n}){n&&(r=this.parser.parseInline(n,this.parser.textRenderer));let i=D2(e);if(i===null)return gi(r);e=i;let o=`<img src="${e}" alt="${gi(r)}"`;return t&&(o+=` title="${gi(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:gi(e.text)}},ib=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},Yn=class Zm{options;renderer;textRenderer;constructor(t){this.options=t||Is,this.options.renderer=this.options.renderer||new Fd,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ib}static parse(t,r){return new Zm(r).parse(t)}static parseInline(t,r){return new Zm(r).parseInline(t)}parse(t){let r="";for(let n=0;n<t.length;n++){let i=t[n];if(this.options.extensions?.renderers?.[i.type]){let s=i,a=this.options.extensions.renderers[s.type].call({parser:this},s);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(s.type)){r+=a||"";continue}}let o=i;switch(o.type){case"space":{r+=this.renderer.space(o);break}case"hr":{r+=this.renderer.hr(o);break}case"heading":{r+=this.renderer.heading(o);break}case"code":{r+=this.renderer.code(o);break}case"table":{r+=this.renderer.table(o);break}case"blockquote":{r+=this.renderer.blockquote(o);break}case"list":{r+=this.renderer.list(o);break}case"checkbox":{r+=this.renderer.checkbox(o);break}case"html":{r+=this.renderer.html(o);break}case"def":{r+=this.renderer.def(o);break}case"paragraph":{r+=this.renderer.paragraph(o);break}case"text":{r+=this.renderer.text(o);break}default:{let s='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}parseInline(t,r=this.renderer){let n="";for(let i=0;i<t.length;i++){let o=t[i];if(this.options.extensions?.renderers?.[o.type]){let a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){n+=a||"";continue}}let s=o;switch(s.type){case"escape":{n+=r.text(s);break}case"html":{n+=r.html(s);break}case"link":{n+=r.link(s);break}case"image":{n+=r.image(s);break}case"checkbox":{n+=r.checkbox(s);break}case"strong":{n+=r.strong(s);break}case"em":{n+=r.em(s);break}case"codespan":{n+=r.codespan(s);break}case"br":{n+=r.br(s);break}case"del":{n+=r.del(s);break}case"text":{n+=r.text(s);break}default:{let a='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return n}},_l=class{options;block;constructor(e){this.options=e||Is}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?Zn.lex:Zn.lexInline}provideParser(){return this.block?Yn.parse:Yn.parseInline}},wj=class{defaults=Yp();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Yn;Renderer=Fd;TextRenderer=ib;Lexer=Zn;Tokenizer=Md;Hooks=_l;constructor(...e){this.use(...e)}walkTokens(e,t){let r=[];for(let n of e)switch(r=r.concat(t.call(this,n)),n.type){case"table":{let i=n;for(let o of i.header)r=r.concat(this.walkTokens(o.tokens,t));for(let o of i.rows)for(let s of o)r=r.concat(this.walkTokens(s.tokens,t));break}case"list":{let i=n;r=r.concat(this.walkTokens(i.items,t));break}default:{let i=n;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(o=>{let s=i[o].flat(1/0);r=r.concat(this.walkTokens(s,t))}):i.tokens&&(r=r.concat(this.walkTokens(i.tokens,t)))}}return r}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{let n={...r};if(n.async=this.defaults.async||n.async||!1,r.extensions&&(r.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let o=t.renderers[i.name];o?t.renderers[i.name]=function(...s){let a=i.renderer.apply(this,s);return a===!1&&(a=o.apply(this,s)),a}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=t[i.level];o?o.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),n.extensions=t),r.renderer){let i=this.defaults.renderer||new Fd(this.defaults);for(let o in r.renderer){if(!(o in i))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let s=o,a=r.renderer[s],l=i[s];i[s]=(...u)=>{let d=a.apply(i,u);return d===!1&&(d=l.apply(i,u)),d||""}}n.renderer=i}if(r.tokenizer){let i=this.defaults.tokenizer||new Md(this.defaults);for(let o in r.tokenizer){if(!(o in i))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let s=o,a=r.tokenizer[s],l=i[s];i[s]=(...u)=>{let d=a.apply(i,u);return d===!1&&(d=l.apply(i,u)),d}}n.tokenizer=i}if(r.hooks){let i=this.defaults.hooks||new _l;for(let o in r.hooks){if(!(o in i))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let s=o,a=r.hooks[s],l=i[s];_l.passThroughHooks.has(o)?i[s]=u=>{if(this.defaults.async&&_l.passThroughHooksRespectAsync.has(o))return(async()=>{let f=await a.call(i,u);return l.call(i,f)})();let d=a.call(i,u);return l.call(i,d)}:i[s]=(...u)=>{if(this.defaults.async)return(async()=>{let f=await a.apply(i,u);return f===!1&&(f=await l.apply(i,u)),f})();let d=a.apply(i,u);return d===!1&&(d=l.apply(i,u)),d}}n.hooks=i}if(r.walkTokens){let i=this.defaults.walkTokens,o=r.walkTokens;n.walkTokens=function(s){let a=[];return a.push(o.call(this,s)),i&&(a=a.concat(i.call(this,s))),a}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Zn.lex(e,t??this.defaults)}parser(e,t){return Yn.parse(e,t??this.defaults)}parseMarkdown(e){return(t,r)=>{let n={...r},i={...this.defaults,...n},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&n.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let s=i.hooks?await i.hooks.preprocess(t):t,a=await(i.hooks?await i.hooks.provideLexer():e?Zn.lex:Zn.lexInline)(s,i),l=i.hooks?await i.hooks.processAllTokens(a):a;i.walkTokens&&await Promise.all(this.walkTokens(l,i.walkTokens));let u=await(i.hooks?await i.hooks.provideParser():e?Yn.parse:Yn.parseInline)(l,i);return i.hooks?await i.hooks.postprocess(u):u})().catch(o);try{i.hooks&&(t=i.hooks.preprocess(t));let s=(i.hooks?i.hooks.provideLexer():e?Zn.lex:Zn.lexInline)(t,i);i.hooks&&(s=i.hooks.processAllTokens(s)),i.walkTokens&&this.walkTokens(s,i.walkTokens);let a=(i.hooks?i.hooks.provideParser():e?Yn.parse:Yn.parseInline)(s,i);return i.hooks&&(a=i.hooks.postprocess(a)),a}catch(s){return o(s)}}}onError(e,t){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let n="<p>An error occurred:</p><pre>"+gi(r.message+"",!0)+"</pre>";return t?Promise.resolve(n):n}if(t)return Promise.reject(r);throw r}}},bs=new wj;function Ke(e,t){return bs.parse(e,t)}Ke.options=Ke.setOptions=function(e){return bs.setOptions(e),Ke.defaults=bs.defaults,u3(Ke.defaults),Ke};Ke.getDefaults=Yp;Ke.defaults=Is;Ke.use=function(...e){return bs.use(...e),Ke.defaults=bs.defaults,u3(Ke.defaults),Ke};Ke.walkTokens=function(e,t){return bs.walkTokens(e,t)};Ke.parseInline=bs.parseInline;Ke.Parser=Yn;Ke.parser=Yn.parse;Ke.Renderer=Fd;Ke.TextRenderer=ib;Ke.Lexer=Zn;Ke.lexer=Zn.lex;Ke.Tokenizer=Md;Ke.Hooks=_l;Ke.parse=Ke;Ke.options;Ke.setOptions;Ke.use;Ke.walkTokens;Ke.parseInline;Yn.parse;Zn.lex;const Zr="structured-rendering-markdown-rendering-content-for-screenshot",kj=`
.${Zr} > *:first-child {
    margin-top: 0;
}
.${Zr} > *:last-child {
    margin-bottom: 0;
}
`,k3={accentColor:"dodgerblue",bodySize:"14px",h1Size:"22px",h2Size:"18px",h3Size:"16px",h4Size:"15px",h5Size:"14px",h6Size:"14px",bodyGap:"24px",smallTextSize:"10px",liSpacing:"4px",bodyFont:"sans-serif",codeFont:"monospace",codeSize:"1em",codeBackgroundColor:le.colors["vira-grey-behind-fg-small-body"].background.value,contentSelector:`.${Zr}`,tableBorderColor:le.colors["vira-grey-foreground-decoration"].foreground.value,tableBorderWidth:"1px"};function xj(e){return ut(ws(k3,e),(t,r)=>T.isString(r)?ve(r):r instanceof Wi?r:r.value)}const Wf=$j();function $j(e){const t=xj(e);return z`
        ${ve(k3.contentSelector)} {
            display: flex;
            flex-direction: column;
            gap: ${t.bodyGap};
            font-family: ${t.bodyFont};
            font-size: ${t.bodySize};
            align-items: flex-start;

            & * {
                font-family: inherit;
                font-size: inherit;
                ${Qa}
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
            & tbody tr:first-child td,
            & tbody tr td.source-cell,
            & thead tr th.source-cell {
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
    `}const C2=Ci()({tagName:"vir-markdown",styles:z`
        :host {
            display: flex;
            flex-direction: column;
        }
    `,state(){return{renderedElement:void 0,sanitizedHtml:YN({async updateCallback(e){const t=await Ke.parse(e);return zf.sanitize(t)}}),lastStyleString:""}},render({inputs:e,state:t,updateState:r,host:n}){t.sanitizedHtml.update(e.markdownString);const i=String(e.renderStyles||Wf);return i3({maintainFirstStylesheet:!0,newStyles:i,oldStyles:t.lastStyleString,shadowRoot:n.shadowRoot})&&r({lastStyleString:i}),sO(t.sanitizedHtml,y`
                <${oe.assign({icon:Ma})}></${oe}>
            `,o=>y`
                    <div
                        class=${Zr}
                        ${yd(s=>{s instanceof HTMLElement&&r({renderedElement:s})})}
                    >
                        ${PN(o)}
                    </div>
                `,o=>y`
                    <${Pv}>
                        ${Ia("Failed to parse markdown content.",o)}
                    </${Pv}>
                `)}}),Dj=Ce({x1:-1,y1:-1,x2:-1,y2:-1}),Vf=Ce({type:ke("source"),pageNumbers:Le([Le(-1)]),fileName:Le(""),fileBoundingBoxes:Le([Le(Dj)]),quote:Le("")});function Kf(e){return hg.isLengthAtLeast(Yc(e).filter(Aj),1)}function Aj(e){return!!(e&&(e.quote?.trim()||e.fileName||e.pageNumbers?.filter(T.isDefined).length))}const Pd=Ci()({tagName:"vir-source",hostClasses:{"vir-source-phone-size":({inputs:e})=>e.options.isPhoneSize},events:{viewOnPageClick:nr()},cssVars:{"vir-source-background-color":le.colors[Ar].background.value,"vir-source-borer-radius":K["vira-form-radius"].value,"vir-source-header-color":le.colors["vira-grey-foreground-header"].foreground.value,"vir-source-view-on-page-icon-color":K["vira-form-accent-primary-color"].value,"vir-source-view-on-page-hover-background-color":le.colors["vira-grey-behind-fg-small-body"].background.value,"vir-source-view-on-page-active-background-color":le.colors["vira-grey-behind-fg-body"].background.value,"vir-source-font-size":"16px","vir-source-phone-font-size":"14px"},styles:({hostClasses:e,cssVars:t})=>z`
        ${e0} {
            background: ${t["vir-source-background-color"].value};
            border-radius: ${t["vir-source-borer-radius"].value};
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        p {
            ${Qa}
        }

        .header {
            display: flex;
            align-items: center;
            gap: 4px;
            color: ${t["vir-source-header-color"].value};
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
                    ${un};
                    cursor: pointer;
                    color: ${t["vir-source-view-on-page-icon-color"].value};
                    display: inline-flex;
                    align-items: center;
                    vertical-align: middle;
                    gap: 4px;
                    padding: 2px 6px;
                    border-radius: 4px;

                    &:hover {
                        background-color: ${t["vir-source-view-on-page-hover-background-color"].value};
                    }

                    &:active {
                        background-color: ${t["vir-source-view-on-page-active-background-color"].value};
                    }

                    & ${oe} {
                        width: ${t["vir-source-font-size"].value};
                        height: ${t["vir-source-font-size"].value};
                    }
                }
            }
        }

        ${oe} {
            width: 20px;
            height: 20px;
        }

        ${e["vir-source-phone-size"].selector} {
            padding: 4px;
            ${t["vir-source-phone-font-size"].value}

            gap: 4px;

            & ${oe} {
                width: 18px;
                height: 18px;
            }
        }
    `,render({inputs:e,dispatch:t,events:r}){const n=Kf(e.sources);return n?y`
            <${e0}>
                <p class="header">
                    <${oe.assign({icon:e.options.sourceIcon,fitContainer:!0})}></${oe}>
                    <span>${e.options.pluralSourcesString}</span>
                </p>
                <div class="entries">
                    ${n.map(i=>{const o=!e.options.hideViewOnPageButtons&&i.fileName&&i.pageNumbers?.length?y`
                                      <button
                                          class="view-on-page-button"
                                          title=${i.fileName}
                                          ${Ee("click",()=>{t(new r.viewOnPageClick(i))})}
                                      >
                                          <${oe.assign({icon:e.options.viewOnPageIcon,fitContainer:!0})}></${oe}>
                                          ${e.options.createViewOnPageString(i.pageNumbers[0]??1)}
                                      </button>
                                  `:void 0,s=i.quote?.trim()||"",a=s?y`
                                  <p class="source-text">"${s}"</p>
                              `:void 0;return a||o?y`
                                <div class="entry">${a} ${o}</div>
                            `:fe})}
                </div>
            </${e0}>
        `:fe}}),Hf=Ce({type:ke("icon"),iconKey:"",strokeColor:Le(""),fillColor:Le(""),strokeWidth:Le(je("",-1))});function x3(e,{icons:t}){const r=t[e.iconKey];return r?eB(r,{"vira-icon-fill-color":e.fillColor||void 0,"vira-icon-stroke-color":e.strokeColor||void 0,"vira-icon-stroke-width":T.isString(e.strokeWidth)?e.strokeWidth:T.isNumber(e.strokeWidth)?pg({value:e.strokeWidth,suffix:"px"}):void 0}):void 0}function Lo(e,t){return Ce({type:ke(e),sectionTitle:Le(""),sources:Le([Le(Vf)]),...t})}const Gf=Ce({type:ke("empty")}),ob=Lo("inlineCode",{code:""}),Zf=Lo("tag",{text:Ip(""),useBigTag:Le(!1),color:Le(je({custom:dN({backgroundColor:Le(""),foregroundColor:Le("")})},{variant:ai(re)}))});var ze=(e=>(e.Faint="faint",e.Small="small",e.Bold="bold",e))(ze||{});const Hu=Lo("text",{text:Le(Ip()),style:Le(ai(ze)),icon:Le(Hf)}),Ej=Ce({content:Le(je(Hu,Zf,Gf)),icon:Le(Hf),sources:Le([Le(Vf)])}),sb=Lo("list",{items:[Ej]}),ab=Lo("markdown",{markdown:""}),lb=Ce({type:ke("processing")});var ub=(e=>(e.Left="left",e.Right="right",e))(ub||{}),It=(e=>(e.Horizontal="horizontal",e.Vertical="vertical",e))(It||{});const Sc=je(Hu,ob,ab,Zf,sb,Gf,lb),$3=Lo("table",{direction:ai(It),headers:[{key:"",text:Le(Hu),hidden:Le(!1)}],entries:[{data:ju({keys:"",values:je(Le(Sc),[Le(Sc)])}),sources:Le([Le(Vf)])}],footerRows:Le([{alignment:Le(ai(ub)),cells:je(Le(Sc),[Le(Sc)])}])}),D3=Lo("codeBlock",{syntax:Le(""),code:""}),Cj=Lo("collapsible",{header:Ip(),content:[je(D3,Gf,Hf,ob,sb,ab,lb,Zf,$3,Hu)]}),A3=[D3,ob,Gf,sb,ab,Zf,lb,Vf,$3,Hu,Hf,Cj];je(...A3);const p=ko(A3,e=>({key:e.default.type,value:e.default.type}),{}),E3={icons:tB,sourceString:"Source",pluralSourcesString:"Sources"},cb={...E3,styles:Wf},Sj={...E3,processingString:"Processing",currentlyExpanded:{},sourceIcon:$$,viewOnPageIcon:jp,processingIcon:Ma,expandSourcesOnPrint:!1,hideViewOnPageButtons:!1,isPhoneSize:!1,markdownStyles:Wf,createViewOnPageString(e){return`View on page ${e}`},expandAllCards:!1,blockCardExpansion:!1};function Tj(e,t){const r=ws(Sj,t);return oo(e,r,[])}function Mj(e){if(e==null)return;if(!T.isString(e))return String(e);const t=e.trim();if(!t)return;const r=t.split(`
`);return r.flatMap((n,i)=>y`
            ${n}${i<r.length-1?y`
                      <br />
                  `:""}
        `)}const Fj={icon(e,t){const r=x3(e,t);return r?y`
            <${oe.assign({icon:r})}></${oe}>
        `:fe},codeBlock(e){return y`
            <pre>${e.code}</pre>
        `},collapsible(e,t,r){return y`
            <${aa.assign({rawCollapsible:!0})}>
                <span slot=${aa.slotNames.header}>${String(e.header)}</span>
                ${oo(e.content,t,[...r,"collapsible"])}
            </${aa}>
        `},empty(){},inlineCode(e){return y`
            <code>${e.code}</code>
        `},list(e,t,r){const n=Vt(e.items,(i,o)=>{if(!i.icon&&!i.content)return;const s=[...r,o],a=i.content?oo(i.content,t,[...s,"content"]):void 0,l=i.icon?oo(i.icon,t,[...s,"icon"]):fe,u=y`
                    ${l}${a}
                `;return y`
                    <li
                        class=${mn({"list-item-with-icon":!!i.icon})}
                    >
                        ${M3(u,t,s,i.sources)}
                    </li>
                `},T.isTruthy);if(n.length)return y`
            <ul>
                ${n}
            </ul>
        `},markdown(e,t){return y`
            <${C2.assign({markdownString:e.markdown,renderStyles:t.markdownStyles})}></${C2}>
        `},tag(e){const t=e.color&&"custom"in e.color&&(e.color.custom.backgroundColor||e.color.custom.foregroundColor)?z`
                      ${e.color.custom.backgroundColor?z`
                                ${Bl.cssVars["vira-tag-background-color"].name}: ${ve(e.color.custom.backgroundColor)};
                            `:z``}
                      ${e.color.custom.foregroundColor?z`
                                ${Bl.cssVars["vira-tag-text-color"].name}: ${ve(e.color.custom.foregroundColor)};
                            `:z``}
                  `:void 0,r=e.color&&"variant"in e.color?e.color.variant:void 0;return y`
            <${Bl.assign({text:e.text,color:t?re.None:r,size:e.useBigTag?Er.Medium:Er.Small,emphasis:Fn.Subtle})}
                style=${Xt(t)}
            ></${Bl}>
        `},processing(e,t){return y`
            <${oe.assign({icon:t.processingIcon})}></${oe}>
            <span>${t.processingString}...</span>
        `},source(e,t){return y`
            <${Pd.assign({options:t,sources:e})}></${Pd}>
        `},table(e,t,r){const{headerRow:n,rows:i}=i_(Vt(e.headers,(a,l)=>{if(!a.hidden)return{key:a.key,content:a.text?oo(a.text,t,[...r,"headers",l]):a.key}},T.isTruthy),e.entries,(a,l)=>ut(a.data,(u,d)=>{const f=Yc(d).filter(T.isTruthy);return f.length?Array.from(FN(Vt(f,(g,m)=>oo(g,t,[...r,l,u,m]),T.isTruthy),y`
                                <br />
                            `)):void 0}),{orientation:e.direction===It.Horizontal?cs.Vertical:cs.Horizontal}),o=i.some(a=>!!a.data?.sources?.length),s=i[0]?.cells.length||0;return y`
            <table
                cellspacing="0"
                cellpadding="0"
                class=${mn({vertical:e.direction===It.Vertical,horizontal:e.direction===It.Horizontal,"wide-table":e.direction===It.Horizontal&&n?n.length>5:e.direction===It.Vertical&&i[0]?i[0].cells.length>5:!1})}
            >
                ${n?y`
                          <thead>
                              <tr>
                                  ${n.map(a=>y`
                                          <th>${a.content}</th>
                                      `)}
                                  ${o?y`
                                            <th class="source-cell"></th>
                                        `:fe}
                              </tr>
                          </thead>
                      `:fe}
                <tbody>
                    ${i.map((a,l)=>{const u=[...r,l],d=Kf(a.data?.sources),f=a.cells.map((g,m)=>{const b=m===a.cells.length-1,k=e.direction===It.Vertical&&m===0?"th":"td",x=y`
                                <${k}>${g.content}</${k}>
                            `;return d?.length&&b?y`
                                    ${x}
                                    <td class="source-cell">
                                        ${S3("",t,[...u,m],d)}
                                    </td>
                                `:x}),h=d?.length?y`
                                  <tr class="source-row">
                                      <td colspan=${f.length}>
                                          ${T3(t,u,d)}
                                      </td>
                                  </tr>
                              `:fe;return y`
                            <tr>
                                ${f}
                                ${o&&!d?.length?y`
                                          <td class="source-cell"></td>
                                      `:fe}
                            </tr>
                            ${h}
                        `})}
                </tbody>
                ${e.footerRows?.length?y`
                          <tfoot>
                              ${e.footerRows.map((a,l)=>{const u=Yc(a.cells);if(!u.length)return fe;const d=a.alignment===ub.Right?s-u.length+1:0,f=u.map((h,g)=>{const m=g?0:d,b=m<1?void 0:m,k=h?oo(h,t,[...r,"footers",l,g]):fe;return y`
                                          <td
                                              colspan=${Xt(b)}
                                              class=${mn({"right-aligned-footer-cell":!!b})}
                                          >
                                              ${k}
                                          </td>
                                      `});return y`
                                      <tr>${f}</tr>
                                  `})}
                          </tfoot>
                      `:fe}
            </table>
        `},text(e,t,r){const n=Mj(e.text),i=e.style?`text-style-${e.style}`:void 0;if(n)return y`
            ${oo(e.icon,t,[...r,"icon"])}
            <span
                class=${[i,"text-section-text-content"].join(" ")}
            >
                ${n}
            </span>
        `}};function oo(e,t,r){return Ym(e,t,r,!1).filter(T.isTruthy)}const S2=gg(p,e=>[e,"section"].join("-")),Pj="structured-render-section";function Ym(e,t,r,n){if(e){if(T.isArray(e))return e.flatMap((i,o)=>Ym(i,t,[...r,o],n));if("type"in e){const i="sectionTitle"in e&&r.length>0&&!(n&&r.at(-1)===0)&&e.sectionTitle||void 0,o=Fj[e.type](e,t,r),s="sources"in e&&e.sources||void 0,a=y`
            <div
                class=${mn({"section-wrapper":!0,"top-section-wrapper":n,[S2[e.type]]:!0})}
                ${Cm(Pj)}
                ${Cm(S2[e.type])}
            >
                ${M3(o,t,r,s)}
            </div>
        `;return[i?y`
                      <h3>${i}</h3>
                  `:void 0,a]}else if("sections"in e){const i=Ym(e.sections,t,[...r,"sections"],!0);return[y`
                <${aa.assign({expandOnPrint:!0,blockExpansion:t.blockCardExpansion,hideHeader:!e.cardTitle,startExpanded:t.expandAllCards||r.at(-1)===0})}>
                    <h2 slot=${aa.slotNames.header}>${e.cardTitle}</h2>
                    ${i}
                </${aa}>
            `]}else throw Nt.tsType(e).equals(),new Error(`Unexpected structured render type: ${$(e)}`)}else return[]}const C3=Df()("source-expansion");function S3(e,t,r,n){const i=Kf(n),o=[...r,"source-icon"],s=Jm(o),a=!!t.currentlyExpanded[s],l=i?y`
              <div class="source-icon-wrapper">
                  <button class="source-icon-button">
                      <${oe.assign({icon:t.sourceIcon,fitContainer:!0})}
                          ${Ee("click",u=>{zu(u,HTMLElement).dispatchEvent(new C3({expanded:!a,key:Jm(o)}))})}
                      ></${oe}>
                  </button>
              </div>
          `:fe;return y`
        <div class="source-content-wrapper">${e}${l}</div>
    `}function T3(e,t,r){const n=Kf(r);if(!n)return;const i=[...t,"source-icon"],o=Jm(i),s=!!e.currentlyExpanded[o];return y`
        <${pi.assign({expanded:s,expandOnPrint:e.expandSourcesOnPrint})}
            class="collapsible-source-wrapper ${mn({"expanded-source":s})}"
        >
            <span slot=${pi.slotNames.header}></span>
            <${Pd.assign({options:e,sources:n})}></${Pd}>
        </${pi}>
    `}function M3(e,t,r,n){return y`
        ${S3(e,t,r,n)}
        ${T3(t,r,n)}
    `}function Jm(e){return["key",...e].join(";").replaceAll(" ","_").replaceAll(/[^\w;]/g,"")}const te=Ci()({tagName:"vir-structured-render",state(){return{currentlyExpanded:{},lastStyleString:""}},cssVars:{"vir-structured-render-h1-font-size":"24px","vir-structured-render-h2-font-size":"18px","vir-structured-render-h3-font-size":"16px","vir-structured-render-small-font-size":"12px"},hostClasses:{"vir-structured-render-phone-size":({inputs:e})=>!!e.options?.isPhoneSize,"vir-structured-render-tablet-size":({inputs:e})=>!!e.options?.isTabletSize},styles:({cssVars:e,hostClasses:t})=>z`
        :host {
            ${Yr(le.colors[Ar])}
        }

        ${oe} {
            flex-shrink: 0;
        }

        :host,
        .${ve(Zr)}.${ve(Zr)}.${ve(Zr)} {
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
                    font-size: ${e["vir-structured-render-h2-font-size"].value};
                }
            }

            & ${Bl} {
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

        .text-style-${ve(ze.Faint)}.text-style-${ve(ze.Faint)}.text-style-${ve(ze.Faint)}.text-style-${ve(ze.Faint)} {
            color: ${le.colors["vira-grey-foreground-non-body"].foreground.value};
        }
        .text-style-${ve(ze.Bold)}.text-style-${ve(ze.Bold)}.text-style-${ve(ze.Bold)}.text-style-${ve(ze.Bold)} {
            font-weight: bold;
        }
        .text-style-${ve(ze.Small)}.text-style-${ve(ze.Small)}.text-style-${ve(ze.Small)}.text-style-${ve(ze.Small)} {
            font-size: ${e["vir-structured-render-small-font-size"].value};
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
                }

                &.source-cell {
                    border: none !important;
                    padding: 0;
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
                font-size: ${e["vir-structured-render-h2-font-size"].value};
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
                ${un};
                cursor: pointer;
                color: ${le.colors["vira-grey-foreground-header"].foreground.value};
                padding: 2px;
                border-radius: 4px;

                & ${oe} {
                    display: flex;
                }

                &:hover {
                    background-color: ${le.colors["vira-grey-behind-fg-small-body"].background.value};
                    color: ${K["vira-form-accent-primary-color"].value};
                }

                &:active {
                    background-color: ${le.colors["vira-grey-behind-fg-body"].background.value};
                    color: ${K["vira-form-accent-primary-color"].value};
                }
            }
        }

        .source-icon-wrapper.source-icon-wrapper.source-icon-wrapper.source-icon-wrapper.source-icon-wrapper {
            margin-left: auto;
            width: 32px;
            justify-content: flex-end;
            align-items: center;
            display: flex;
            flex-shrink: 0;
            align-self: top;

            & ${oe} {
                width: 20px;
                height: 20px;
            }
        }

        .${ve(Zr)}.${ve(Zr)}.${ve(Zr)}.${ve(Zr)} {
            ul {
                ${Qa}
                flex-grow: 1;
                max-width: 100%;
                display: flex;
                flex-direction: column;
                gap: 2px;
            }
        }

        .source-content-wrapper {
            > *:last-child {
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
            margin-right: 2px;
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

        ${t["vir-structured-render-phone-size"].selector} {
            font-size: ${e["vir-structured-render-small-font-size"].value};

            & h2 {
                font-size: ${e["vir-structured-render-h3-font-size"].value};
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

            & ${oe} {
                width: 18px;
                height: 18px;
            }

            & li::marker {
                font-size: 0.7em;
            }
        }

        ${t["vir-structured-render-tablet-size"].selector} {
            .view-header {
                flex-wrap: wrap;
            }
        }

        @media print {
            .source-icon-wrapper {
                display: none !important;
            }
        }
    `,render({inputs:e,state:t,updateState:r,host:n}){const i=String(e.options?.markdownStyles||Wf);i3({maintainFirstStylesheet:!0,newStyles:i,oldStyles:t.lastStyleString,shadowRoot:n.shadowRoot})&&r({lastStyleString:i});const o=Tj(e.data,{...e.options,currentlyExpanded:{...e.options?.currentlyExpanded,...t.currentlyExpanded}});return y`
            <div
                ${Ee(C3,s=>{r({currentlyExpanded:{...t.currentlyExpanded,[s.detail.key]:s.detail.expanded}})})}
                class=${Zr}
            >
                ${o}
            </div>
        `}});async function Ij(){const e=await ho(()=>import("./index-D7L4Zgv5.js").then(r=>r.i),__vite__mapDeps([0,1]));return e.default||e}function On(e,t){const r=ws(cb,t);return F3(e,r).filter(T.isTruthy).join(`

`)}const Nj={[ze.Bold]:"**"};function Oj(e,t,r){const n=e.entries.length+1,i=t.map(o=>{const s=o.text?On(o.text,r):o.key,a=e.entries.map(l=>On(l.data[o.key],r));return[s,...a]});return[mg(n,()=>""),...i]}function Rj(e,t,r){const n=t.map(o=>o.text?On(o.text,r):o.key),i=e.entries.map(o=>t.map(s=>On(o.data[s.key],r)));return[n,...i]}const Bj={[It.Vertical]:Oj,[It.Horizontal]:Rj},Lj={icon(e,t){const r=x3(e,t);return r?Aa(r.svgTemplate):""},collapsible(){return""},codeBlock(e){return`\`\`\`${e.syntax||""}
${e.code}
\`\`\``},inlineCode(e){return`\`${e.code}\``},empty(){return""},list(e,t){return Vt(e.items,r=>{const n=On(r.content,t),i=On(r.icon,t);if(n){const o=i?`- ${i} ${n}`:`- ${n}`,s=(r.sources||[]).map(a=>On(a,t)).filter(T.isTruthy).join(`
`);return s?`${o}
${s}`:o}else return""},T.isTruthy).join(`
`)},markdown(e){return e.markdown},tag(e){return e.text==null?"":String(e.text)},processing(){return""},source(e,t){const r=e.pageNumbers?.filter(T.isDefined),n=r?.length?`p. ${r.join(", ")}`:"",i=[e.fileName,n].filter(T.isTruthy).join(", ");return i?`<small>${t.sourceString}: ${i}</small>`:""},table(e,t){const r=e.headers.filter(l=>!l.hidden),n=Bj[e.direction](e,r,t),i=n[0].length||0,o=_j(n,i),[s,...a]=n;return[T2(s,o),jj(o),...a.map(l=>T2(l,o))].join(`
`)},text(e,t){if(e.text==null)return"";const r=e.style&&Nj[e.style]||"",n=On(e.icon,t),i=$k({value:String(e.text),wrapper:r});return n?`${n} ${i}`:i}};function _j(e,t){return mg(t,r=>e.reduce((n,i,o)=>Math.max(n,Qt.isDefined(i[r],`No cell at row index ${o}, column index ${r}`).length),3))}function T2(e,t){return`| ${e.map((n,i)=>n.padEnd(t[i]??3)).join(" | ")} |`}function jj(e){return`| ${e.map(r=>"-".repeat(r)).join(" | ")} |`}function F3(e,t,r=!1){if(e){if(T.isArray(e))return e.flatMap(n=>On(n,t));if("type"in e){const n="sectionTitle"in e&&!r?e.sectionTitle:void 0,i="sources"in e&&e.sources||[];return[n?`### ${n}`:void 0,Lj[e.type](e,t),...i.map(o=>On(o,t))]}else{if("sections"in e)return[e.cardTitle&&`## ${e.cardTitle}`,...e.sections.flatMap((n,i)=>F3(n,t,i===0))].filter(T.isTruthy);throw Nt.tsType(e).equals(),new Error(`Unexpected structured render type: ${$(e)}`)}}else return[]}var Yf=(e=>(e.ArrayBuffer="arraybuffer",e.Blob="blob",e.BlobUri="bloburi",e.BlobUrl="bloburl",e.DataUriString="datauristring",e.DataUrlString="dataurlstring",e.DataUri="datauri",e.DataUrl="dataurl",e.DataUrlNewWindow="dataurlnewwindow",e.PdfObjectNewWindow="pdfobjectnewwindow",e.PdfJsNewWindow="pdfjsnewwindow",e.Download="download",e))(Yf||{});function P3(e){return{margin:[25,15],filename:e,image:{type:"jpeg",quality:.98},html2canvas:{scale:2,logging:!1,scrollX:0,scrollY:0,useCORS:!0},jsPDF:{unit:"mm",format:"a4",orientation:"portrait"},pagebreak:{mode:["css","legacy"]}}}async function I3(e,{fileName:t,outputType:r,options:n}){if(!ys(_r.Web))throw new Error(`${N3.name} cannot run outside of a browser.`);const i=ws(cb,n),[o]=await Promise.all([Ij(),qj()]),s=await Ke.parse(On(e,i)),a=Aa(y`
        <div class=${Zr}>${zf.sanitize(s)}</div>
    `),l=P3(t),u=await zj(a,String(i.styles),l),d=o().set(l).from(u);if(r.pdf)if(r.pdf==="download"){const f=await d.outputPdf("blob"),h=URL.createObjectURL(f),g=globalThis.document.createElement("a");g.href=h,g.download=t.endsWith(".pdf")?t:`${t}.pdf`,g.style.display="none",globalThis.document.body.append(g),g.click(),g.remove(),URL.revokeObjectURL(h);return}else return await d.outputPdf(r.pdf,{filename:t});else{if(r.image)return r.image==="download"?await d.toImg().save(t):await d.outputImg(r.image);throw Nt.tsType(r).equals(),new Error(`Invalid output type: ${$(r)}`)}}async function zj(e,t,r){const n=Wj(r.margin),o=210-n[1]-n[3],s=globalThis.document.createElement("iframe");s.style.position="fixed",s.style.left="-10000px",s.style.top="0",s.style.width=`${o}mm`,s.style.height="0",s.style.border="none",s.setAttribute("aria-hidden","true"),s.srcdoc=["<!DOCTYPE html><html><head><style>",kj,t,'</style></head><body style="margin:0;padding:0;">',e,"</body></html>"].join(""),globalThis.document.body.append(s);try{await new Promise(u=>{s.addEventListener("load",()=>{u()},{once:!0})});const a=Qt.isDefined(s.contentDocument);await a.fonts.ready;const l=Qt.isDefined(a.body.firstElementChild);return s.style.height=`${a.body.scrollHeight}px`,await hu(3),await Uj()(l,{...r.html2canvas})}finally{s.remove()}}let Id;function Uj(){if(!Id)throw new Error("html2canvas has not been loaded yet. Call preloadHtml2Canvas() first.");return Id}async function qj(){Id||(Id=(await ho(async()=>{const{default:e}=await import("./html2canvas.esm-DXEQVQnt.js");return{default:e}},[])).default)}function Wj(e){return e==null?[0,0,0,0]:typeof e=="number"?[e,e,e,e]:e.length===2?[e[0],e[1],e[0],e[1]]:[e[0],e[1],e[2],e[3]]}async function N3(e,{saveLocationPath:t,outputType:r,options:n}){if(ys(_r.Web))throw new Error(`${N3.name} cannot run inside of a browser.`);const i=ws(cb,n),{chromium:o}=await ho(async()=>{const{chromium:D}=await import("playwright");return{chromium:D}},[]),{readFile:s,writeFile:a,mkdir:l}=await ho(async()=>{const{readFile:D,writeFile:C,mkdir:P}=await import("node:fs/promises");return{readFile:D,writeFile:C,mkdir:P}},[]),{createRequire:u}=await ho(async()=>{const{createRequire:D}=await Promise.resolve().then(()=>uz);return{createRequire:D}},void 0),{basename:d,dirname:f}=await ho(async()=>{const{basename:D,dirname:C}=await import("node:path");return{basename:D,dirname:C}},[]),h=u(import.meta.url),[g,m]=await Promise.all([s(h.resolve("html2pdf.js/dist/html2pdf.bundle.min.js"),"utf-8"),s(h.resolve("dompurify/dist/purify.min.js"),"utf-8")]),b=await Ke.parse(On(e,i)),k=Aa(y`
        <style id="styles">
            ${i.styles}
        </style>
    `),x=await o.launch();try{const D=await x.newPage();await D.setContent(k,{waitUntil:"networkidle"}),await D.addScriptTag({content:g}),await D.addScriptTag({content:m});const C=P3(d(t));r.image&&(C.image={type:"png"});const O=(await D.evaluate(async({html2pdfOptions:H,outputType:ee,dirtyMarkdown:ie,wrapperClass:X,outputImageType:ye,outputPdfType:se})=>{const $e=zf.sanitize(ie),Ue=html2pdf().set(H).from(`<div class="${X}">${$e}</div>`);if(ee.image)return await Ue.outputImg(ye,{filename:H.filename});if(ee.pdf)return await Ue.outputPdf(se,{filename:H.filename});throw new Error("Invalid output type selected.")},{html2pdfOptions:C,outputType:r,dirtyMarkdown:b,wrapperClass:Zr,outputImageType:"datauristring",outputPdfType:"datauristring"})).split(",")[1];await l(f(t),{recursive:!0}),await a(t,Buffer.from(O,"base64"))}finally{await x.close()}return t}async function O3(e,{pdfOutputType:t,...r}){if(!ys(_r.Web))throw new Error(`${O3.name} cannot run outside of a browser.`);return I3(e,{outputType:{pdf:t||Yf.Download},...r})}async function R3(e,t){if(!ys(_r.Web))throw new Error(`${R3.name} cannot run outside of a browser.`);const r=await I3(e,{outputType:{pdf:Yf.Blob},...t}),n=URL.createObjectURL(r),i=navigator.userAgent.toLowerCase(),o=i.includes("firefox"),s=/iphone|ipad|ipod/.test(i)||i.includes("macintosh")&&navigator.maxTouchPoints>1;if(o||s){if(!globalThis.window.open(n))throw URL.revokeObjectURL(n),new Error("Failed to open print window. Check your popup blocker settings.");return}const a=globalThis.document.createElement("iframe");a.style.position="fixed",a.style.left="-10000px",a.style.top="0",a.style.width="1px",a.style.height="1px",a.style.border="none",a.style.opacity="0",a.src=n,globalThis.document.body.append(a),await new Promise(u=>{a.addEventListener("load",()=>{u()},{once:!0})});const l=a.contentWindow;if(!l){URL.revokeObjectURL(n),a.remove();return}return await hu(3),await jd({milliseconds:250}),await hu(3),new Promise(u=>{function d(){URL.revokeObjectURL(n),a.remove(),u()}let f=!1;function h(){f||(f=!0,globalThis.window.removeEventListener("focus",g),d())}function g(){h()}l.addEventListener("afterprint",()=>{h()},{once:!0}),globalThis.window.addEventListener("focus",g,{once:!0}),l.print()})}const vu=[{cardTitle:"Frontend Performance",sections:[{type:p.text,sectionTitle:"Overview",text:"Frontend performance metrics collected from the last 30 days of production monitoring.",sources:[{type:"source",fileName:"performance-report-2026-02.pdf",pageNumbers:[1,2],quote:"Metrics aggregated from real user monitoring (RUM) data across all production traffic."}]},{type:p.table,sectionTitle:"Core Web Vitals",direction:It.Horizontal,sources:[{type:"source",fileName:"lighthouse-audit.json",pageNumbers:[3],quote:"Core Web Vitals thresholds based on Chrome UX Report field data."},{type:"source",fileName:"web-vitals-spec.md",quote:"Targets align with Google recommended thresholds for good user experience."}],headers:[{key:"metric"},{key:"p50"},{key:"p95"},{key:"target"},{key:"status"}],entries:[{data:{metric:{type:p.text,text:"Largest Contentful Paint",style:ze.Bold},p50:{type:p.inlineCode,code:"1.2s"},p95:{type:p.inlineCode,code:"2.8s"},target:{type:p.text,text:"< 2.5s"},status:{type:p.tag,text:"Pass",color:{variant:re.Positive}}}},{data:{metric:{type:p.text,text:"First Input Delay",style:ze.Bold},p50:{type:p.inlineCode,code:"12ms"},p95:{type:p.inlineCode,code:"85ms"},target:{type:p.text,text:"< 100ms"},status:{type:p.tag,text:"Pass",color:{variant:re.Positive}}}},{data:{metric:{type:p.text,text:"Cumulative Layout Shift",style:ze.Bold},p50:{type:p.inlineCode,code:"0.18"},p95:{type:p.inlineCode,code:"0.32"},target:{type:p.text,text:"< 0.1"},status:{type:p.tag,text:"Fail",color:{variant:re.Danger}}},sources:[{type:"source",fileName:"cls-regression-analysis.pdf",pageNumbers:[7],quote:"CLS spike correlated with hero image carousel added in v3.12.0."}]},{data:{metric:{type:p.text,text:"Time to First Byte",style:ze.Bold},p50:{type:p.inlineCode,code:"210ms"},p95:{type:p.inlineCode,code:"480ms"},target:{type:p.text,text:"< 600ms"},status:{type:p.tag,text:"Pass",color:{variant:re.Positive}}}}]},{type:p.list,sectionTitle:"Recommendations",items:[{content:{type:p.text,text:"Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images."},icon:{type:p.icon,iconKey:an.name,strokeColor:"red"},sources:[{type:"source",fileName:"frontend-performance-review-2026-q1.pdf",pageNumbers:[4],quote:"Layout shifts primarily caused by images without explicit dimensions."},{type:"source",fileName:"web-vitals-optimization-guide.md",quote:"Lazy loading below-the-fold content reduces initial page weight and improves LCP."}]},{icon:{type:p.icon,iconKey:an.name,strokeColor:"red"},content:{type:p.text,text:"Add explicit width and height attributes to all image elements.",sources:[{type:"source",fileName:"cls-regression-analysis.pdf",pageNumbers:[8],quote:"Missing width/height attributes on images are the primary contributor to layout shift."}]}},{content:{type:p.text,text:"Consider lazy loading below-the-fold content."},sources:[{type:"source",fileName:"frontend-performance-review-2026-q1.pdf",pageNumbers:[4],quote:"Layout shifts primarily caused by images without explicit dimensions."},{type:"source",fileName:"web-vitals-optimization-guide.md",quote:"Lazy loading below-the-fold content reduces initial page weight and improves LCP."}]}]},{type:p.list,sectionTitle:"Action Items",items:[{content:{type:p.text,text:"Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions."},icon:{type:p.icon,iconKey:an.name,strokeColor:"orange"}},{content:{type:p.text,text:"Enable native lazy loading on below-the-fold images."},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}},{content:{type:p.text,text:"Defer non-critical third-party scripts."},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}}]}]},{cardTitle:"Backend API Health",sections:[{type:p.markdown,sectionTitle:"Status Summary",sources:[{type:"source",fileName:"uptime-monitor-export.csv",quote:"Uptime percentages calculated from 5-minute health check intervals."}],markdown:["All **12 services** are operational. Average uptime over the past 30 days: **99.97%**.","","| Service | Uptime |","|---------|--------|","| Auth | 99.99% |","| Users | 99.98% |","| Notifications | 99.91% |","| Billing | 100% |"].join(`
`)},{type:p.table,sectionTitle:"Endpoint Latency (ms)",direction:It.Vertical,headers:[{key:"endpoint"},{key:"getUsers"},{key:"createUser"},{key:"getReport"},{key:"sendNotification"}],entries:[{data:{endpoint:{type:p.text,text:"p50"},getUsers:{type:p.inlineCode,code:"45"},createUser:{type:p.inlineCode,code:"120"},getReport:{type:p.inlineCode,code:"890"},sendNotification:{type:p.inlineCode,code:"65"}}},{data:{endpoint:{type:p.text,text:"p99"},getUsers:{type:p.inlineCode,code:"180"},createUser:{type:p.inlineCode,code:"450"},getReport:{type:p.inlineCode,code:"3200"},sendNotification:{type:p.inlineCode,code:"210"}}}]},{type:p.codeBlock,sectionTitle:"Slow Query Sample",syntax:"sql",code:["SELECT r.id, r.title, r.created_at,","       u.name AS author_name,","       COUNT(c.id) AS comment_count","FROM reports r","JOIN users u ON u.id = r.author_id","LEFT JOIN comments c ON c.report_id = r.id","WHERE r.created_at > NOW() - INTERVAL '30 days'","GROUP BY r.id, r.title, r.created_at, u.name","ORDER BY r.created_at DESC","LIMIT 100;"].join(`
`)}]},{cardTitle:"Deployment Pipeline",sections:[{type:p.text,sectionTitle:"Current State",text:"The CI/CD pipeline is fully automated with staging and production environments.",icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}},{type:p.table,sectionTitle:"Recent Deployments",direction:It.Horizontal,sources:[{type:"source",fileName:"ci-pipeline-logs.txt",pageNumbers:[12,15,18,22],quote:"Deployment records extracted from CI/CD pipeline execution logs."}],headers:[{key:"version"},{key:"environment"},{key:"date"},{key:"duration"},{key:"status"}],entries:[{data:{version:{type:p.inlineCode,code:"v3.14.2"},environment:{type:p.tag,text:"Production",color:{variant:re.Positive}},date:{type:p.text,text:"2026-02-28"},duration:{type:p.text,text:"4m 22s"},status:{type:p.tag,text:"Success",color:{variant:re.Positive}}}},{data:{version:{type:p.inlineCode,code:"v3.14.1"},environment:{type:p.tag,text:"Production",color:{variant:re.Positive}},date:{type:p.text,text:"2026-02-25"},duration:{type:p.text,text:"3m 58s"},status:{type:p.tag,text:"Success",color:{variant:re.Positive}}}},{data:{version:{type:p.inlineCode,code:"v3.14.0"},environment:{type:p.tag,text:"Staging",color:{variant:re.Warning}},date:{type:p.text,text:"2026-02-24"},duration:{type:p.text,text:"5m 01s"},status:{type:p.tag,text:"Rolled Back",color:{variant:re.Danger}}}},{data:{version:{type:p.inlineCode,code:"v3.13.9"},environment:{type:p.tag,text:"Production",color:{variant:re.Positive}},date:{type:p.text,text:"2026-02-20"},duration:{type:p.text,text:"4m 10s"},status:{type:p.tag,text:"Success",color:{variant:re.Positive}}}}]},{type:p.list,sectionTitle:"Pipeline Steps",items:[{content:{type:p.text,text:"Lint and type check."},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}},{content:{type:p.text,text:"Unit and integration tests."},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}},{content:{type:p.text,text:"Build production bundle."},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}},{content:{type:p.text,text:"Deploy to staging."},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}},{content:{type:p.text,text:"E2E smoke tests."},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}},{content:{type:p.text,text:"Promote to production."},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}}]},{type:p.codeBlock,sectionTitle:"Pipeline Config Snippet",syntax:"yaml",code:["stages:","  - name: lint","    command: npm run lint","  - name: test","    command: npm test","    parallel: true","  - name: build","    command: npm run build","  - name: deploy-staging","    command: deploy --env staging","  - name: e2e","    command: npm run test:e2e","  - name: deploy-production","    command: deploy --env production","    requires: [e2e]"].join(`
`)},{type:p.collapsible,sectionTitle:"Collapsible Details",header:"Rollback Procedure",content:[{type:p.text,text:"If a deployment fails health checks, the pipeline automatically triggers a rollback to the previous stable version."},{type:p.codeBlock,syntax:"bash",code:["#!/bin/bash","deploy rollback --env production --to-version $LAST_STABLE",'notify --channel ops --message "Rollback initiated"'].join(`
`)}]},{type:p.collapsible,header:"Environment Variables",content:[{type:p.table,direction:It.Horizontal,headers:[{key:"variable"},{key:"staging"},{key:"production"}],entries:[{data:{variable:{type:p.inlineCode,code:"NODE_ENV"},staging:{type:p.tag,text:"staging",color:{variant:re.Warning}},production:{type:p.tag,text:"production",color:{variant:re.Positive}}}},{data:{variable:{type:p.inlineCode,code:"LOG_LEVEL"},staging:{type:p.text,text:"debug"},production:{type:p.text,text:"warn"}}}]}]},{type:p.collapsible,header:"Post-Deploy Checklist",content:[{type:p.list,items:[{content:{type:p.text,text:"Verify health check endpoints return 200."},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}},{content:{type:p.text,text:"Confirm error rate stays below 0.1% threshold."},icon:{type:p.icon,iconKey:an.name,strokeColor:"orange"}},{content:{type:p.text,text:"Monitor p99 latency for 15 minutes."},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}}]}]}]}],Vj=Lt({title:"Multi Card",parent:nl,descriptionParagraphs:["Multiple cards rendered together to demonstrate complex multi-card layouts."],defineExamples({defineExample:e}){e({title:"three cards",styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return y`
                    <${te.assign({data:vu})}></${te}>
                `}})}}),Kj=Lt({title:"Block Expansion",parent:nl,descriptionParagraphs:["Cards rendered with blockCardExpansion enabled, which forces all sections expanded and disables toggling."],defineExamples({defineExample:e}){e({title:"all sections locked open",styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return y`
                    <${te.assign({data:vu,options:{blockCardExpansion:!0}})}></${te}>
                `}})}}),Hj=Lt({title:"Dense Data",parent:nl,descriptionParagraphs:["A single card packed with many sections, large tables, lists, code blocks, and markdown to stress-test rendering."],defineExamples({defineExample:e}){e({title:"comprehensive product analysis",styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return y`
                    <${te.assign({data:[{cardTitle:"Comprehensive Product Analysis",sections:[{type:p.text,sectionTitle:"Executive Summary",text:"This analysis covers product adoption, feature usage, customer feedback, technical debt, and roadmap progress across all three product lines.",style:ze.Bold},{type:p.markdown,sectionTitle:"Adoption Trends",markdown:["### Monthly Active Users","","Growth has been **steady** across all tiers:","","- **Free tier**: 14,200 MAU (+8% MoM)","- **Pro tier**: 3,800 MAU (+12% MoM)","- **Enterprise tier**: 420 MAU (+3% MoM)","","### Retention","","Day-7 retention: **68%** | Day-30 retention: **41%** | Day-90 retention: **28%**","","> The largest drop-off occurs between day 7 and day 14, suggesting onboarding improvements could have significant impact."].join(`
`)},{type:p.table,sectionTitle:"Feature Usage Matrix",direction:It.Horizontal,headers:[{key:"feature"},{key:"freeTier"},{key:"proTier"},{key:"enterpriseTier"},{key:"satisfaction"},{key:"trend"}],entries:[{data:{feature:{type:p.text,text:"Dashboard",style:ze.Bold},freeTier:{type:p.text,text:"92%"},proTier:{type:p.text,text:"97%"},enterpriseTier:{type:p.text,text:"99%"},satisfaction:{type:p.tag,text:"4.5 / 5",color:{variant:re.Positive}},trend:{type:p.tag,text:"Stable",color:{variant:re.Positive}}}},{data:{feature:{type:p.text,text:"Export (PDF/Image)",style:ze.Bold},freeTier:{type:p.text,text:"34%"},proTier:{type:p.text,text:"78%"},enterpriseTier:{type:p.text,text:"91%"},satisfaction:{type:p.tag,text:"3.8 / 5",color:{variant:re.Warning}},trend:{type:p.tag,text:"Growing",color:{variant:re.Positive}}}},{data:{feature:{type:p.text,text:"API Access",style:ze.Bold},freeTier:{type:p.text,text:"5%"},proTier:{type:p.text,text:"42%"},enterpriseTier:{type:p.text,text:"88%"},satisfaction:{type:p.tag,text:"4.1 / 5",color:{variant:re.Positive}},trend:{type:p.tag,text:"Growing",color:{variant:re.Positive}}}},{data:{feature:{type:p.text,text:"Collaboration",style:ze.Bold},freeTier:{type:p.text,text:"18%"},proTier:{type:p.text,text:"61%"},enterpriseTier:{type:p.text,text:"95%"},satisfaction:{type:p.tag,text:"4.3 / 5",color:{variant:re.Positive}},trend:{type:p.tag,text:"Stable",color:{variant:re.Positive}}}},{data:{feature:{type:p.text,text:"Custom Themes",style:ze.Bold},freeTier:{type:p.text,text:"0%"},proTier:{type:p.text,text:"29%"},enterpriseTier:{type:p.text,text:"67%"},satisfaction:{type:p.tag,text:"3.2 / 5",color:{variant:re.Warning}},trend:{type:p.tag,text:"Declining",color:{variant:re.Danger}}}},{data:{feature:{type:p.text,text:"Webhooks",style:ze.Bold},freeTier:{type:p.text,text:"0%"},proTier:{type:p.text,text:"15%"},enterpriseTier:{type:p.text,text:"72%"},satisfaction:{type:p.tag,text:"4.0 / 5",color:{variant:re.Positive}},trend:{type:p.tag,text:"Growing",color:{variant:re.Positive}}}}]},{type:p.list,sectionTitle:"Customer Feedback Themes",items:[{content:{type:p.text,text:"Export quality needs improvement (mentioned 47 times)."},icon:{type:p.icon,iconKey:an.name,strokeColor:"orange"}},{content:{type:p.text,text:"Dashboard customization is highly valued (mentioned 82 times)."},icon:{type:p.icon,iconKey:Fa.name,strokeColor:"gold"}},{content:{type:p.text,text:"API documentation could be more complete (mentioned 31 times)."},icon:{type:p.icon,iconKey:an.name,strokeColor:"orange"}},{content:{type:p.text,text:"Real-time collaboration is a top-requested feature (mentioned 64 times)."},icon:{type:p.icon,iconKey:Fa.name,strokeColor:"gold"}},{content:{type:p.text,text:"Mobile experience needs significant work (mentioned 28 times)."},icon:{type:p.icon,iconKey:an.name,strokeColor:"red"}}]},{type:p.codeBlock,sectionTitle:"Top API Usage Pattern",syntax:"typescript",code:["import {createClient} from '@product/sdk';","","const client = createClient({","    apiKey: process.env.PRODUCT_API_KEY,","    baseUrl: 'https://api.product.com/v2',","});","","const report = await client.reports.create({","    title: 'Weekly Summary',","    sections: [","        {type: 'chart', dataSource: 'revenue'},","        {type: 'table', dataSource: 'transactions'},","        {type: 'text', content: 'Generated automatically.'},","    ],","    format: 'pdf',","});","","await client.reports.export(report.id, {","    destination: 's3://reports-bucket/weekly/',","});"].join(`
`)},{type:p.table,sectionTitle:"Technical Debt Inventory",direction:It.Horizontal,headers:[{key:"item"},{key:"severity"},{key:"age"},{key:"effort"},{key:"impact"}],entries:[{data:{item:{type:p.text,text:"Legacy auth middleware."},severity:{type:p.tag,text:"High",color:{variant:re.Danger}},age:{type:p.text,text:"18 months"},effort:{type:p.text,text:"3 sprints"},impact:{type:p.text,text:"Blocks SSO integration."}}},{data:{item:{type:p.text,text:"Untyped API responses."},severity:{type:p.tag,text:"Medium",color:{variant:re.Warning}},age:{type:p.text,text:"12 months"},effort:{type:p.text,text:"2 sprints"},impact:{type:p.text,text:"Frequent runtime errors."}}},{data:{item:{type:p.text,text:"Duplicated validation logic."},severity:{type:p.tag,text:"Medium",color:{variant:re.Warning}},age:{type:p.text,text:"9 months"},effort:{type:p.text,text:"1 sprint"},impact:{type:p.text,text:"Inconsistent error messages."}}},{data:{item:{type:p.text,text:"Missing database indexes."},severity:{type:p.tag,text:"High",color:{variant:re.Danger}},age:{type:p.text,text:"6 months"},effort:{type:p.text,text:"0.5 sprint"},impact:{type:p.text,text:"Slow report generation."}}},{data:{item:{type:p.text,text:"Outdated test fixtures."},severity:{type:p.tag,text:"Low",color:{custom:{backgroundColor:"#e0e0e0",foregroundColor:"#333"}}},age:{type:p.text,text:"4 months"},effort:{type:p.text,text:"1 sprint"},impact:{type:p.text,text:"Reduced test reliability."}}}]},{type:p.markdown,sectionTitle:"Roadmap Progress",markdown:["### Q1 2026 Goals","","| Goal | Status | Completion |","|------|--------|------------|","| SSO Integration | In Progress | 60% |","| Mobile App v1 | In Progress | 35% |","| API v3 | Planning | 10% |","| Export Overhaul | Complete | 100% |","| Webhook Reliability | Complete | 100% |","","### Q2 2026 Planned","","- Real-time collaboration MVP.","- Custom theme builder.","- Advanced analytics dashboard.","- Internationalization (i18n) support."].join(`
`)},{type:p.list,sectionTitle:"Key Risks",items:[{content:{type:p.text,text:"SSO integration depends on legacy auth refactor completing first.",style:ze.Bold},icon:{type:p.icon,iconKey:an.name,strokeColor:"red"}},{content:{type:p.text,text:"Mobile app timeline may slip due to design resource constraints."},icon:{type:p.icon,iconKey:an.name,strokeColor:"orange"}},{content:{type:p.text,text:"API v3 design needs broader stakeholder input before implementation."}},{content:{type:p.text,text:"Real-time collaboration requires WebSocket infrastructure not yet provisioned."},icon:{type:p.icon,iconKey:an.name,strokeColor:"orange"}}]},{type:p.text,sectionTitle:"Prepared By",text:"Product & Engineering Team, March 2026.",style:ze.Faint}]}]})}></${te}>
                `}})}}),Gj=Lt({title:"Expand All",parent:nl,descriptionParagraphs:["Cards rendered with expandAllCards enabled, which starts all sections expanded but still allows toggling."],defineExamples({defineExample:e}){e({title:"all sections start expanded",styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return y`
                    <${te.assign({data:vu,options:{expandAllCards:!0}})}></${te}>
                `}})}}),Zj=Lt({title:"Full Card",parent:nl,descriptionParagraphs:["Demos of VirStructuredRender with full StructuredRenderData (card arrays)."],defineExamples({defineExample:e}){e({title:"single card with many sections",styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return y`
                    <${te.assign({data:[{cardTitle:"Project Health Report",sections:[{type:p.text,sectionTitle:"Summary",text:"Overall project health is good. Most metrics are within acceptable ranges, though a few areas require attention."},{type:p.markdown,sectionTitle:"Key Findings",markdown:["### Strengths","","- **Code coverage** has improved from 72% to 89% over the past quarter.","- Build times remain under 3 minutes for the full suite.","- Zero critical vulnerabilities in the latest dependency audit.","","### Areas for Improvement","","1. Documentation coverage for public APIs is at 64%.","2. Integration test flakiness has risen to 4.2%.","3. Bundle size has grown 18% since the last review."].join(`
`)},{type:p.table,sectionTitle:"Module Metrics",direction:It.Horizontal,headers:[{key:"module"},{key:"coverage"},{key:"buildTime"},{key:"status"}],entries:[{data:{module:{type:p.text,text:"Core"},coverage:{type:p.inlineCode,code:"94%"},buildTime:{type:p.text,text:"42s"},status:{type:p.tag,text:"Healthy",color:{variant:re.Positive}}}},{data:{module:{type:p.text,text:"Rendering"},coverage:{type:p.inlineCode,code:"88%"},buildTime:{type:p.text,text:"28s"},status:{type:p.tag,text:"Healthy",color:{variant:re.Positive}}}},{data:{module:{type:p.text,text:"Data Layer"},coverage:{type:p.inlineCode,code:"71%"},buildTime:{type:p.text,text:"1m 14s"},status:{type:p.tag,text:"Needs Attention",color:{variant:re.Warning}}}},{data:{module:{type:p.text,text:"CLI Tools"},coverage:{type:p.inlineCode,code:"82%"},buildTime:{type:p.text,text:"19s"},status:{type:p.tag,text:"Healthy",color:{variant:re.Positive}}}}]},{type:p.codeBlock,sectionTitle:"Sample Config",syntax:"json",code:JSON.stringify({project:"structured-render",coverageThreshold:80,maxBuildTimeSeconds:180,modules:["core","rendering","data-layer","cli-tools"]},null,4)},{type:p.list,sectionTitle:"Action Items",items:[{content:{type:p.text,text:"Increase data layer test coverage to 80%."},icon:{type:p.icon,iconKey:an.name,strokeColor:"orange"}},{content:{type:p.text,text:"Investigate and fix flaky integration tests."},icon:{type:p.icon,iconKey:an.name,strokeColor:"orange"}},{content:{type:p.text,text:"Audit bundle size and remove unused dependencies."}},{content:{type:p.text,text:"Add missing JSDoc to public API functions."}},{content:{type:p.text,text:"Schedule quarterly security review."},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}}]},{type:p.text,sectionTitle:"Next Review",text:"Scheduled for Q3 2026.",style:ze.Faint}]}]})}></${te}>
                `}})}}),B3=Lt({title:"Examples",parent:void 0,descriptionParagraphs:["Examples of specific functionality."]}),Yj=Lt({title:"Download and Print",parent:B3,descriptionParagraphs:["Demonstrates downloading and printing structured render data as a PDF."],defineExamples({defineExample:e}){e({title:"print",state(){return{isLoading:!1,isError:!1}},render({state:t,updateState:r}){return y`
                    <${vc.assign({text:"Print",disabled:t.isLoading,icon:t.isError?Fm:t.isLoading?Ma:void 0})}
                        ${Ee("click",async()=>{r({isLoading:!0});try{await R3(vu,{fileName:"structured-render-print"})}catch(n){Jc.error("Failed to print PDF",n),r({isError:!0})}finally{r({isLoading:!1})}})}
                    ></${vc}>
                `}}),e({title:"download",state(){return{isLoading:!1,isError:!1}},render({state:t,updateState:r}){return y`
                    <${vc.assign({text:"Download",disabled:t.isLoading,icon:t.isError?Fm:t.isLoading?Ma:void 0})}
                        ${Ee("click",async()=>{r({isLoading:!0});try{await O3(vu,{fileName:"structured-render-download",pdfOutputType:Yf.Download})}catch(n){Jc.error("Failed to download PDF",n),r({isError:!0})}finally{r({isLoading:!1})}})}
                    ></${vc}>
                `}})}}),Un=Lt({title:"Sections",parent:void 0,descriptionParagraphs:["All structured render section types."]}),Jj=Lt({title:"Code Block",parent:Un,defineExamples({defineExample:e}){e({title:"basic",render(){return y`
                    <${te.assign({data:{type:p.codeBlock,sectionTitle:"Code Block Example",code:`const hello = "world";
console.log(hello);`,syntax:"typescript"}})}></${te}>
                `}}),e({title:"no syntax",render(){return y`
                    <${te.assign({data:{type:p.codeBlock,code:`plain text code block
with multiple lines`,syntax:null}})}></${te}>
                `}})}}),Xj=Lt({title:"Empty",parent:Un,defineExamples({defineExample:e}){e({title:"empty",render(){return y`
                    <${te.assign({data:{type:p.empty}})}></${te}>
                `}})}}),Qj=Lt({title:"Icon",parent:Un,defineExamples({defineExample:e}){e({title:"basic",render(){return y`
                    <${te.assign({data:{type:p.icon,iconKey:Fa.name}})}></${te}>
                `}}),e({title:"colored stroke",render(){return y`
                    <${te.assign({data:{type:p.icon,iconKey:Fa.name,strokeColor:"gold"}})}></${te}>
                `}}),e({title:"colored fill",render(){return y`
                    <${te.assign({data:{type:p.icon,iconKey:xr.name,fillColor:"lime"}})}></${te}>
                `}})}}),ez=Lt({title:"Inline Code",parent:Un,defineExamples({defineExample:e}){e({title:"basic",render(){return y`
                    <${te.assign({data:{type:p.inlineCode,sectionTitle:"Inline Code Example",code:"const x = 42;"}})}></${te}>
                `}})}}),tz=Lt({title:"List",parent:Un,defineExamples({defineExample:e}){e({title:"basic",render(){return y`
                    <${te.assign({data:{type:p.list,sectionTitle:"List Example",items:[{content:{type:p.text,text:"First item"}},{content:{type:p.text,text:"Second item"}},{content:{type:p.text,text:"Third item"}}]}})}></${te}>
                `}}),e({title:"with icons",render(){return y`
                    <${te.assign({data:{type:p.list,sectionTitle:"List with Icons",items:[{content:{type:p.text,text:"Completed task"},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}},{content:{type:p.text,text:"Another completed task"},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}}]}})}></${te}>
                `}}),e({title:"with tags",render(){return y`
                    <${te.assign({data:{type:p.list,sectionTitle:"List with Tags",items:[{content:{type:p.tag,text:"Important",color:{variant:re.Warning}}},{content:{type:p.tag,text:"Info"}}]}})}></${te}>
                `}})}}),rz=Lt({title:"Markdown",parent:Un,defineExamples({defineExample:e}){e({title:"basic",render(){return y`
                    <${te.assign({data:{type:p.markdown,sectionTitle:"Markdown Example",markdown:`## Hello World

This is **bold** and _italic_ text.

- Item 1
- Item 2
- Item 3`}})}></${te}>
                `}}),e({title:"with code",render(){return y`
                    <${te.assign({data:{type:p.markdown,sectionTitle:"Markdown with Code",markdown:"### Code Example\n\nHere is some `inline code` and a code block:\n\n```typescript\nconst x = 42;\n```"}})}></${te}>
                `}})}}),nz=Lt({title:"Processing",parent:Un,defineExamples({defineExample:e}){e({title:"basic",render(){return y`
                    <${te.assign({data:{type:p.processing}})}></${te}>
                `}})}}),iz=Lt({title:"Source",parent:Un,defineExamples({defineExample:e}){e({title:"with file name",render(){return y`
                    <${te.assign({data:{type:p.source,fileName:"example.ts",pageNumbers:null,fileBoundingBoxes:null,quote:null}})}></${te}>
                `}}),e({title:"with quote",render(){return y`
                    <${te.assign({data:{type:p.source,fileName:"document.pdf",pageNumbers:[1,2],fileBoundingBoxes:null,quote:"This is the relevant quote from the source document."}})}></${te}>
                `}}),e({title:"with page numbers",render(){return y`
                    <${te.assign({data:{type:p.source,fileName:"report.pdf",pageNumbers:[5,10,15],fileBoundingBoxes:null,quote:null}})}></${te}>
                `}})}}),oz=Lt({title:"Table",parent:Un,defineExamples({defineExample:e}){e({title:"horizontal",render(){return y`
                    <${te.assign({data:{type:p.table,sectionTitle:"Horizontal Table",direction:It.Horizontal,headers:[{key:"name"},{key:"value"}],entries:[{data:{name:{type:p.text,text:"Alpha"},value:{type:p.text,text:"100"}}},{data:{name:{type:p.text,text:"Beta"},value:{type:p.text,text:"200"}}}]}})}></${te}>
                `}}),e({title:"vertical",render(){return y`
                    <${te.assign({data:{type:p.table,sectionTitle:"Vertical Table",direction:It.Vertical,headers:[{key:"feature"},{key:"status"}],entries:[{data:{feature:{type:p.text,text:"Image Export"},status:{type:p.tag,text:"Supported"}}},{data:{feature:{type:p.text,text:"PDF Export"},status:{type:p.tag,text:"Beta"}}}]}})}></${te}>
                `}}),e({title:"with mixed cell types",render(){return y`
                    <${te.assign({data:{type:p.table,sectionTitle:"Mixed Cell Types",direction:It.Horizontal,headers:[{key:"label"},{key:"detail"}],entries:[{data:{label:{type:p.text,text:"Status"},detail:{type:p.tag,text:"Active",color:{variant:re.Positive}}}},{data:{label:{type:p.text,text:"Version"},detail:{type:p.inlineCode,code:"v1.0.0"}}}]}})}></${te}>
                `}})}}),sz=Lt({title:"Tag",parent:Un,defineExamples({defineExample:e}){e({title:"basic",render(){return y`
                    <${te.assign({data:{type:p.tag,sectionTitle:"Tag Example",text:"Default Tag"}})}></${te}>
                `}}),e({title:"custom colors",render(){return y`
                    <${te.assign({data:{type:p.tag,text:"Custom Colors",color:{custom:{backgroundColor:"#e74c3c",foregroundColor:"#ffffff"}}}})}></${te}>
                `}}),e({title:"big tag",render(){return y`
                    <${te.assign({data:{type:p.tag,text:"Big Tag",useBigTag:!0}})}></${te}>
                `}})}}),az=Lt({title:"Text",parent:Un,defineExamples({defineExample:e}){e({title:"basic",render(){return y`
                    <${te.assign({data:{type:p.text,sectionTitle:"Text Example",text:"This is a simple text section."}})}></${te}>
                `}}),e({title:"bold",render(){return y`
                    <${te.assign({data:{type:p.text,text:"Bold text section.",style:ze.Bold}})}></${te}>
                `}}),e({title:"small",render(){return y`
                    <${te.assign({data:{type:p.text,text:"Small text section.",style:ze.Small}})}></${te}>
                `}}),e({title:"faint",render(){return y`
                    <${te.assign({data:{type:p.text,text:"Faint text section.",style:ze.Faint}})}></${te}>
                `}}),e({title:"with icon",render(){return y`
                    <${te.assign({data:{type:p.text,text:"Text with icon.",icon:{type:p.icon,iconKey:Fa.name,strokeColor:"gold"}}})}></${te}>
                `}})}}),lz=[Jj,Xj,Qj,ez,tz,rz,nz,iz,oz,sz,az,Zj,Vj,Hj,Kj,Gj,Yj,nl,B3,Un];Ci()({tagName:"vir-app",styles:z`
        :host {
            display: flex;
            flex-grow: 1;
        }

        ${Dc} {
            flex-grow: 1;
        }

        p {
            ${Qa}
            text-align: center;
            font-size: 32px;
            font-weight: bold;
            padding: 0 8px;
            padding-bottom: 8px;
        }
    `,render(){return y`
            <${Dc.assign({pages:lz,internalRouterConfig:{useInternalRouter:!0,basePath:"structured-render/demo"}})}>
                <p slot=${Dc.slotNames.navHeader}>Structured<br>Render</p>
            </${Dc}>
        `}});const uz=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{ho as _,yz as a,zf as p};
