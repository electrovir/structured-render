const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CPdg94BI.js","assets/html2canvas.esm-DXEQVQnt.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var lr;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(lr||(lr={}));function Id(e,t=r=>r){const r=new Map;return e.filter(n=>{const i=t(n);return r.get(i)?!1:(r.set(i,n),!0)})}class Gm{diff(t,r,n={}){let i;typeof n=="function"?(i=n,n={}):"callback"in n&&(i=n.callback);const o=this.castInput(t,n),s=this.castInput(r,n),a=this.removeEmpty(this.tokenize(o,n)),u=this.removeEmpty(this.tokenize(s,n));return this.diffWithOptionsObj(a,u,n,i)}diffWithOptionsObj(t,r,n,i){var o;const s=D=>{if(D=this.postProcess(D,n),i){setTimeout(function(){i(D)},0);return}else return D},a=r.length,u=t.length;let l=1,d=a+u;n.maxEditLength!=null&&(d=Math.min(d,n.maxEditLength));const f=(o=n.timeout)!==null&&o!==void 0?o:1/0,h=Date.now()+f,g=[{oldPos:-1,lastComponent:void 0}];let m=this.extractCommon(g[0],r,t,0,n);if(g[0].oldPos+1>=u&&m+1>=a)return s(this.buildValues(g[0].lastComponent,r,t));let p=-1/0,k=1/0;const x=()=>{for(let D=Math.max(p,-l);D<=Math.min(k,l);D+=2){let C;const P=g[D-1],O=g[D+1];P&&(g[D-1]=void 0);let H=!1;if(O){const ne=O.oldPos-D;H=O&&0<=ne&&ne<a}const ee=P&&P.oldPos+1<u;if(!H&&!ee){g[D]=void 0;continue}if(!ee||H&&P.oldPos<O.oldPos?C=this.addToPath(O,!0,!1,0,n):C=this.addToPath(P,!1,!0,1,n),m=this.extractCommon(C,r,t,D,n),C.oldPos+1>=u&&m+1>=a)return s(this.buildValues(C.lastComponent,r,t))||!0;g[D]=C,C.oldPos+1>=u&&(k=Math.min(k,D-1)),m+1>=a&&(p=Math.max(p,D+1))}l++};if(i)(function D(){setTimeout(function(){if(l>d||Date.now()>h)return i(void 0);x()||D()},0)})();else for(;l<=d&&Date.now()<=h;){const D=x();if(D)return D}}addToPath(t,r,n,i,o){const s=t.lastComponent;return s&&!o.oneChangePerToken&&s.added===r&&s.removed===n?{oldPos:t.oldPos+i,lastComponent:{count:s.count+1,added:r,removed:n,previousComponent:s.previousComponent}}:{oldPos:t.oldPos+i,lastComponent:{count:1,added:r,removed:n,previousComponent:s}}}extractCommon(t,r,n,i,o){const s=r.length,a=n.length;let u=t.oldPos,l=u-i,d=0;for(;l+1<s&&u+1<a&&this.equals(n[u+1],r[l+1],o);)l++,u++,d++,o.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return d&&!o.oneChangePerToken&&(t.lastComponent={count:d,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=u,l}equals(t,r,n){return n.comparator?n.comparator(t,r):t===r||!!n.ignoreCase&&t.toLowerCase()===r.toLowerCase()}removeEmpty(t){const r=[];for(let n=0;n<t.length;n++)t[n]&&r.push(t[n]);return r}castInput(t,r){return t}tokenize(t,r){return Array.from(t)}join(t){return t.join("")}postProcess(t,r){return t}get useLongestToken(){return!1}buildValues(t,r,n){const i=[];let o;for(;t;)i.push(t),o=t.previousComponent,delete t.previousComponent,t=o;i.reverse();const s=i.length;let a=0,u=0,l=0;for(;a<s;a++){const d=i[a];if(d.removed)d.value=this.join(n.slice(l,l+d.count)),l+=d.count;else{if(!d.added&&this.useLongestToken){let f=r.slice(u,u+d.count);f=f.map(function(h,g){const m=n[l+g];return m.length>h.length?m:h}),d.value=this.join(f)}else d.value=this.join(r.slice(u,u+d.count));u+=d.count,d.added||(l+=d.count)}}return i}}function kb(e,t){let r;for(r=0;r<e.length&&r<t.length;r++)if(e[r]!=t[r])return e.slice(0,r);return e.slice(0,r)}function xb(e,t){let r;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(r=0;r<e.length&&r<t.length;r++)if(e[e.length-(r+1)]!=t[t.length-(r+1)])return e.slice(-r);return e.slice(-r)}function P0(e,t,r){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return r+e.slice(t.length)}function I0(e,t,r){if(!t)return e+r;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+r}function su(e,t){return P0(e,t,"")}function Jl(e,t){return I0(e,t,"")}function $b(e,t){return t.slice(0,U3(e,t))}function U3(e,t){let r=0;e.length>t.length&&(r=e.length-t.length);let n=t.length;e.length<t.length&&(n=e.length);const i=Array(n);let o=0;i[0]=0;for(let s=1;s<n;s++){for(t[s]==t[o]?i[s]=i[o]:i[s]=o;o>0&&t[s]!=t[o];)o=i[o];t[s]==t[o]&&o++}o=0;for(let s=r;s<e.length;s++){for(;o>0&&e[s]!=t[o];)o=i[o];e[s]==t[o]&&o++}return o}function au(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function to(e){const t=e.match(/^\s*/);return t?t[0]:""}const _c="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",q3=new RegExp(`[${_c}]+|\\s+|[^${_c}]`,"ug");class W3 extends Gm{equals(t,r,n){return n.ignoreCase&&(t=t.toLowerCase(),r=r.toLowerCase()),t.trim()===r.trim()}tokenize(t,r={}){let n;if(r.intlSegmenter){const s=r.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=[];for(const a of Array.from(s.segment(t))){const u=a.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(u)?n[n.length-1]+=u:n.push(u)}}else n=t.match(q3)||[];const i=[];let o=null;return n.forEach(s=>{/\s/.test(s)?o==null?i.push(s):i.push(i.pop()+s):o!=null&&/\s/.test(o)?i[i.length-1]==o?i.push(i.pop()+s):i.push(o+s):i.push(s),o=s}),i}join(t){return t.map((r,n)=>n==0?r:r.replace(/^\s+/,"")).join("")}postProcess(t,r){if(!t||r.oneChangePerToken)return t;let n=null,i=null,o=null;return t.forEach(s=>{s.added?i=s:s.removed?o=s:((i||o)&&Db(n,o,i,s),n=s,i=null,o=null)}),(i||o)&&Db(n,o,i,null),t}}const V3=new W3;function K3(e,t,r){return r?.ignoreWhitespace!=null&&!r.ignoreWhitespace?Z3(e,t,r):V3.diff(e,t,r)}function Db(e,t,r,n){if(t&&r){const i=to(t.value),o=au(t.value),s=to(r.value),a=au(r.value);if(e){const u=kb(i,s);e.value=I0(e.value,s,u),t.value=su(t.value,u),r.value=su(r.value,u)}if(n){const u=xb(o,a);n.value=P0(n.value,a,u),t.value=Jl(t.value,u),r.value=Jl(r.value,u)}}else if(r){if(e){const i=to(r.value);r.value=r.value.substring(i.length)}if(n){const i=to(n.value);n.value=n.value.substring(i.length)}}else if(e&&n){const i=to(n.value),o=to(t.value),s=au(t.value),a=kb(i,o);t.value=su(t.value,a);const u=xb(su(i,a),s);t.value=Jl(t.value,u),n.value=P0(n.value,i,u),e.value=I0(e.value,i,i.slice(0,i.length-u.length))}else if(n){const i=to(n.value),o=au(t.value),s=$b(o,i);t.value=Jl(t.value,s)}else if(e){const i=au(e.value),o=to(t.value),s=$b(i,o);t.value=su(t.value,s)}}class H3 extends Gm{tokenize(t){const r=new RegExp(`(\\r?\\n)|[${_c}]+|[^\\S\\n\\r]+|[^${_c}]`,"ug");return t.match(r)||[]}}const G3=new H3;function Z3(e,t,r){return G3.diff(e,t,r)}class Y3 extends Gm{constructor(){super(...arguments),this.tokenize=Q3}equals(t,r,n){return n.ignoreWhitespace?((!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!n.newlineIsToken||!r.includes(`
`))&&(r=r.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),r.endsWith(`
`)&&(r=r.slice(0,-1))),super.equals(t,r,n)}}const J3=new Y3;function X3(e,t,r){return J3.diff(e,t,r)}function Q3(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const r=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let i=0;i<n.length;i++){const o=n[i];i%2&&!t.newlineIsToken?r[r.length-1]+=o:r.push(o)}return r}function Ab(e,t){return A2(e,new Map)}function A2(e,t,r){if(e&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object){if(t.has(e))return t.get(e);const n={};return t.set(e,n),Object.entries(e).sort((i,o)=>i[0].localeCompare(o[0])).forEach(([i,o])=>{const s=A2(o,t);n[i]=s}),n}else return e}var e4=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,t4=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,r4=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,eh={Space_Separator:e4,ID_Start:t4,ID_Continue:r4},$t={isSpaceSeparator(e){return typeof e=="string"&&eh.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||eh.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||eh.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let N0,Pr,_i,jc,vo,Yn,Yt,Zm,Lu;var n4=function(t,r){N0=String(t),Pr="start",_i=[],jc=0,vo=1,Yn=0,Yt=void 0,Zm=void 0,Lu=void 0;do Yt=i4(),a4[Pr]();while(Yt.type!=="eof");return typeof r=="function"?O0({"":Lu},"",r):Lu};function O0(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let i=0;i<n.length;i++){const o=String(i),s=O0(n,o,r);s===void 0?delete n[o]:Object.defineProperty(n,o,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const i in n){const o=O0(n,i,r);o===void 0?delete n[i]:Object.defineProperty(n,i,{value:o,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}let $e,ve,Cu,Ni,Ie;function i4(){for($e="default",ve="",Cu=!1,Ni=1;;){Ie=Hi();const e=E2[$e]();if(e)return e}}function Hi(){if(N0[jc])return String.fromCodePoint(N0.codePointAt(jc))}function N(){const e=Hi();return e===`
`?(vo++,Yn=0):e?Yn+=e.length:Yn++,e&&(jc+=e.length),e}const E2={default(){switch(Ie){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":N();return;case"/":N(),$e="comment";return;case void 0:return N(),at("eof")}if($t.isSpaceSeparator(Ie)){N();return}return E2[Pr]()},comment(){switch(Ie){case"*":N(),$e="multiLineComment";return;case"/":N(),$e="singleLineComment";return}throw ut(N())},multiLineComment(){switch(Ie){case"*":N(),$e="multiLineCommentAsterisk";return;case void 0:throw ut(N())}N()},multiLineCommentAsterisk(){switch(Ie){case"*":N();return;case"/":N(),$e="default";return;case void 0:throw ut(N())}N(),$e="multiLineComment"},singleLineComment(){switch(Ie){case`
`:case"\r":case"\u2028":case"\u2029":N(),$e="default";return;case void 0:return N(),at("eof")}N()},value(){switch(Ie){case"{":case"[":return at("punctuator",N());case"n":return N(),_o("ull"),at("null",null);case"t":return N(),_o("rue"),at("boolean",!0);case"f":return N(),_o("alse"),at("boolean",!1);case"-":case"+":N()==="-"&&(Ni=-1),$e="sign";return;case".":ve=N(),$e="decimalPointLeading";return;case"0":ve=N(),$e="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":ve=N(),$e="decimalInteger";return;case"I":return N(),_o("nfinity"),at("numeric",1/0);case"N":return N(),_o("aN"),at("numeric",NaN);case'"':case"'":Cu=N()==='"',ve="",$e="string";return}throw ut(N())},identifierNameStartEscape(){if(Ie!=="u")throw ut(N());N();const e=R0();switch(e){case"$":case"_":break;default:if(!$t.isIdStartChar(e))throw Eb();break}ve+=e,$e="identifierName"},identifierName(){switch(Ie){case"$":case"_":case"‌":case"‍":ve+=N();return;case"\\":N(),$e="identifierNameEscape";return}if($t.isIdContinueChar(Ie)){ve+=N();return}return at("identifier",ve)},identifierNameEscape(){if(Ie!=="u")throw ut(N());N();const e=R0();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!$t.isIdContinueChar(e))throw Eb();break}ve+=e,$e="identifierName"},sign(){switch(Ie){case".":ve=N(),$e="decimalPointLeading";return;case"0":ve=N(),$e="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":ve=N(),$e="decimalInteger";return;case"I":return N(),_o("nfinity"),at("numeric",Ni*(1/0));case"N":return N(),_o("aN"),at("numeric",NaN)}throw ut(N())},zero(){switch(Ie){case".":ve+=N(),$e="decimalPoint";return;case"e":case"E":ve+=N(),$e="decimalExponent";return;case"x":case"X":ve+=N(),$e="hexadecimal";return}return at("numeric",Ni*0)},decimalInteger(){switch(Ie){case".":ve+=N(),$e="decimalPoint";return;case"e":case"E":ve+=N(),$e="decimalExponent";return}if($t.isDigit(Ie)){ve+=N();return}return at("numeric",Ni*Number(ve))},decimalPointLeading(){if($t.isDigit(Ie)){ve+=N(),$e="decimalFraction";return}throw ut(N())},decimalPoint(){switch(Ie){case"e":case"E":ve+=N(),$e="decimalExponent";return}if($t.isDigit(Ie)){ve+=N(),$e="decimalFraction";return}return at("numeric",Ni*Number(ve))},decimalFraction(){switch(Ie){case"e":case"E":ve+=N(),$e="decimalExponent";return}if($t.isDigit(Ie)){ve+=N();return}return at("numeric",Ni*Number(ve))},decimalExponent(){switch(Ie){case"+":case"-":ve+=N(),$e="decimalExponentSign";return}if($t.isDigit(Ie)){ve+=N(),$e="decimalExponentInteger";return}throw ut(N())},decimalExponentSign(){if($t.isDigit(Ie)){ve+=N(),$e="decimalExponentInteger";return}throw ut(N())},decimalExponentInteger(){if($t.isDigit(Ie)){ve+=N();return}return at("numeric",Ni*Number(ve))},hexadecimal(){if($t.isHexDigit(Ie)){ve+=N(),$e="hexadecimalInteger";return}throw ut(N())},hexadecimalInteger(){if($t.isHexDigit(Ie)){ve+=N();return}return at("numeric",Ni*Number(ve))},string(){switch(Ie){case"\\":N(),ve+=o4();return;case'"':if(Cu)return N(),at("string",ve);ve+=N();return;case"'":if(!Cu)return N(),at("string",ve);ve+=N();return;case`
`:case"\r":throw ut(N());case"\u2028":case"\u2029":u4(Ie);break;case void 0:throw ut(N())}ve+=N()},start(){switch(Ie){case"{":case"[":return at("punctuator",N())}$e="value"},beforePropertyName(){switch(Ie){case"$":case"_":ve=N(),$e="identifierName";return;case"\\":N(),$e="identifierNameStartEscape";return;case"}":return at("punctuator",N());case'"':case"'":Cu=N()==='"',$e="string";return}if($t.isIdStartChar(Ie)){ve+=N(),$e="identifierName";return}throw ut(N())},afterPropertyName(){if(Ie===":")return at("punctuator",N());throw ut(N())},beforePropertyValue(){$e="value"},afterPropertyValue(){switch(Ie){case",":case"}":return at("punctuator",N())}throw ut(N())},beforeArrayValue(){if(Ie==="]")return at("punctuator",N());$e="value"},afterArrayValue(){switch(Ie){case",":case"]":return at("punctuator",N())}throw ut(N())},end(){throw ut(N())}};function at(e,t){return{type:e,value:t,line:vo,column:Yn}}function _o(e){for(const t of e){if(Hi()!==t)throw ut(N());N()}}function o4(){switch(Hi()){case"b":return N(),"\b";case"f":return N(),"\f";case"n":return N(),`
`;case"r":return N(),"\r";case"t":return N(),"	";case"v":return N(),"\v";case"0":if(N(),$t.isDigit(Hi()))throw ut(N());return"\0";case"x":return N(),s4();case"u":return N(),R0();case`
`:case"\u2028":case"\u2029":return N(),"";case"\r":return N(),Hi()===`
`&&N(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw ut(N());case void 0:throw ut(N())}return N()}function s4(){let e="",t=Hi();if(!$t.isHexDigit(t)||(e+=N(),t=Hi(),!$t.isHexDigit(t)))throw ut(N());return e+=N(),String.fromCodePoint(parseInt(e,16))}function R0(){let e="",t=4;for(;t-- >0;){const r=Hi();if(!$t.isHexDigit(r))throw ut(N());e+=N()}return String.fromCodePoint(parseInt(e,16))}const a4={start(){if(Yt.type==="eof")throw jo();th()},beforePropertyName(){switch(Yt.type){case"identifier":case"string":Zm=Yt.value,Pr="afterPropertyName";return;case"punctuator":Xl();return;case"eof":throw jo()}},afterPropertyName(){if(Yt.type==="eof")throw jo();Pr="beforePropertyValue"},beforePropertyValue(){if(Yt.type==="eof")throw jo();th()},beforeArrayValue(){if(Yt.type==="eof")throw jo();if(Yt.type==="punctuator"&&Yt.value==="]"){Xl();return}th()},afterPropertyValue(){if(Yt.type==="eof")throw jo();switch(Yt.value){case",":Pr="beforePropertyName";return;case"}":Xl()}},afterArrayValue(){if(Yt.type==="eof")throw jo();switch(Yt.value){case",":Pr="beforeArrayValue";return;case"]":Xl()}},end(){}};function th(){let e;switch(Yt.type){case"punctuator":switch(Yt.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=Yt.value;break}if(Lu===void 0)Lu=e;else{const t=_i[_i.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,Zm,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")_i.push(e),Array.isArray(e)?Pr="beforeArrayValue":Pr="beforePropertyName";else{const t=_i[_i.length-1];t==null?Pr="end":Array.isArray(t)?Pr="afterArrayValue":Pr="afterPropertyValue"}}function Xl(){_i.pop();const e=_i[_i.length-1];e==null?Pr="end":Array.isArray(e)?Pr="afterArrayValue":Pr="afterPropertyValue"}function ut(e){return zc(e===void 0?`JSON5: invalid end of input at ${vo}:${Yn}`:`JSON5: invalid character '${C2(e)}' at ${vo}:${Yn}`)}function jo(){return zc(`JSON5: invalid end of input at ${vo}:${Yn}`)}function Eb(){return Yn-=5,zc(`JSON5: invalid identifier character at ${vo}:${Yn}`)}function u4(e){console.warn(`JSON5: '${C2(e)}' in strings is not valid ECMAScript; consider escaping`)}function C2(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}function zc(e){const t=new SyntaxError(e);return t.lineNumber=vo,t.columnNumber=Yn,t}var l4=function(t,r,n){const i=[];let o="",s,a,u="",l;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,l=r.quote,r=r.replacer),typeof r=="function")a=r;else if(Array.isArray(r)){s=[];for(const p of r){let k;typeof p=="string"?k=p:(typeof p=="number"||p instanceof String||p instanceof Number)&&(k=String(p)),k!==void 0&&s.indexOf(k)<0&&s.push(k)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),d("",{"":t});function d(p,k){let x=k[p];switch(x!=null&&(typeof x.toJSON5=="function"?x=x.toJSON5(p):typeof x.toJSON=="function"&&(x=x.toJSON(p))),a&&(x=a.call(k,p,x)),x instanceof Number?x=Number(x):x instanceof String?x=String(x):x instanceof Boolean&&(x=x.valueOf()),x){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof x=="string")return f(x);if(typeof x=="number")return String(x);if(typeof x=="object")return Array.isArray(x)?m(x):h(x)}function f(p){const k={"'":.1,'"':.2},x={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let D="";for(let P=0;P<p.length;P++){const O=p[P];switch(O){case"'":case'"':k[O]++,D+=O;continue;case"\0":if($t.isDigit(p[P+1])){D+="\\x00";continue}}if(x[O]){D+=x[O];continue}if(O<" "){let H=O.charCodeAt(0).toString(16);D+="\\x"+("00"+H).substring(H.length);continue}D+=O}const C=l||Object.keys(k).reduce((P,O)=>k[P]<k[O]?P:O);return D=D.replace(new RegExp(C,"g"),x[C]),C+D+C}function h(p){if(i.indexOf(p)>=0)throw TypeError("Converting circular structure to JSON5");i.push(p);let k=o;o=o+u;let x=s||Object.keys(p),D=[];for(const P of x){const O=d(P,p);if(O!==void 0){let H=g(P)+":";u!==""&&(H+=" "),H+=O,D.push(H)}}let C;if(D.length===0)C="{}";else{let P;if(u==="")P=D.join(","),C="{"+P+"}";else{let O=`,
`+o;P=D.join(O),C=`{
`+o+P+`,
`+k+"}"}}return i.pop(),o=k,C}function g(p){if(p.length===0)return f(p);const k=String.fromCodePoint(p.codePointAt(0));if(!$t.isIdStartChar(k))return f(p);for(let x=k.length;x<p.length;x++)if(!$t.isIdContinueChar(String.fromCodePoint(p.codePointAt(x))))return f(p);return p}function m(p){if(i.indexOf(p)>=0)throw TypeError("Converting circular structure to JSON5");i.push(p);let k=o;o=o+u;let x=[];for(let C=0;C<p.length;C++){const P=d(String(C),p);x.push(P!==void 0?P:"null")}let D;if(x.length===0)D="[]";else if(u==="")D="["+x.join(",")+"]";else{let C=`,
`+o,P=x.join(C);D=`[
`+o+P+`,
`+k+"]"}return i.pop(),o=k,D}};const c4={parse:n4,stringify:l4};var d4=c4;const S2="__@@augment-vir-undefined-sentinel@@__",f4=new RegExp(`['"]${S2}['"]`);function $(e,t){if(typeof e=="string")return e;try{return d4.stringify(e,(n,i)=>i===void 0?S2:typeof i=="bigint"?Number(i):i,t||void 0).split(f4).join("undefined")}catch{return String(e)}}var h4=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Lr;(function(e){e.Node="node",e.Web="web"})(Lr||(Lr={}));function m4(){return h4?Lr.Node:Lr.Web}const T2=m4();function bs(e){return T2===e}function M2(e){return e[T2]()}function g4(e,t){const r=typeof t=="string"&&typeof e=="string",n=typeof t!="string"||typeof e!="string",i=n?X3:K3,o=[r?"":`
`,$(t&&typeof t=="object"&&!Array.isArray(t)?Ab(t):t,4),`
`].join(""),s=[r?"":`
`,$(e&&typeof e=="object"&&!Array.isArray(e)?Ab(e):e,4),`
`].join(""),a=p4(n,i(o,s)),u=bs(Lr.Node);return[[u?qi.Green:""," +added (unexpected, added in actual)",u?qi.Red:""," -missing (expected, missing from actual)",u?qi.Reset:""].join(""),r?`

`:`
`,a].join("")}var qi;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(qi||(qi={}));var Uc;(function(e){e.Added="+",e.Removed="-"})(Uc||(Uc={}));function p4(e,t){return e?t.flatMap(n=>n.value.split(`
`).map(i=>Cb(i,n)).join(`
`)).join(""):t.map(n=>Cb(void 0,n)).join("")}function Cb(e,t){if(e!=null&&!e)return"";const r=bs(Lr.Node),n=t.added?Uc.Added:t.removed?Uc.Removed:e==null?"":" ",i=t.added?qi.Green:t.removed?qi.Red:qi.Reset;return[r?i:"",n,e??t.value,qi.Reset].join("")}function tt(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function b4(e){return tt(e).filter(t=>isNaN(Number(t)))}function on(e){return b4(e).map(r=>e[r])}const y4=[".",":",";",",","?","!"],v4=new RegExp(`[${y4.join("")}]+$`);function Sb(e){return e.replace(v4,"")}function fr(e){return e==null||e===""||e==="undefined"||e==="null"?"":typeof e=="string"?e:e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):$(e)}function Pa(...e){const t=e.map(o=>fr(o)).filter(o=>!!Sb(o)),r=t[t.length-1]?.endsWith("."),n=t.map(o=>Sb(fr(o)));return(n.length<2?n[0]||"":n.join(": "))+(r?".":"")}function kt(e){return e instanceof Error?e:new Error(fr(e))}function Ia(e,t){const r=kt(e),n=Pa(t,r.message);try{return r.message=n,r}catch{return new Error(n,{cause:e})}}var F;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(F||(F={}));var Z;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(Z||(Z={}));Z.ClientError,Z.ServerError;F.Continue+"",Z.Information,F.SwitchingProtocols+"",Z.Information,F.Processing+"",Z.Information,F.EarlyHints+"",Z.Information,F.Ok+"",Z.Success,F.Created+"",Z.Success,F.Accepted+"",Z.Success,F.NonAuthoritativeInformation+"",Z.Success,F.NoContent+"",Z.Success,F.ResetContent+"",Z.Success,F.PartialContent+"",Z.Success,F.MultiStatus+"",Z.Success,F.AlreadyReported+"",Z.Success,F.ImUsed+"",Z.Success,F.MultipleChoices+"",Z.Redirect,F.MovedPermanently+"",Z.Redirect,F.Found+"",Z.Redirect,F.SeeOther+"",Z.Redirect,F.NotModified+"",Z.Redirect,F.UseProxy+"",Z.Redirect,F.Unused+"",Z.Redirect,F.TemporaryRedirect+"",Z.Redirect,F.PermanentRedirect+"",Z.Redirect,F.BadRequest+"",Z.ClientError,F.Unauthorized+"",Z.ClientError,F.PaymentRequired+"",Z.ClientError,F.Forbidden+"",Z.ClientError,F.NotFound+"",Z.ClientError,F.MethodNotAllowed+"",Z.ClientError,F.NotAcceptable+"",Z.ClientError,F.ProxyAuthenticationRequired+"",Z.ClientError,F.RequestTimeout+"",Z.ClientError,F.Conflict+"",Z.ClientError,F.Gone+"",Z.ClientError,F.LengthRequired+"",Z.ClientError,F.PreconditionFailed+"",Z.ClientError,F.PayloadTooLarge+"",Z.ClientError,F.UriTooLong+"",Z.ClientError,F.UnsupportedMediaType+"",Z.ClientError,F.RangeNotSatisfiable+"",Z.ClientError,F.ExpectationFailed+"",Z.ClientError,F.ImATeapot+"",Z.ClientError,F.MisdirectedRequest+"",Z.ClientError,F.UnprocessableContent+"",Z.ClientError,F.Locked+"",Z.ClientError,F.FailedDependency+"",Z.ClientError,F.TooEarly+"",Z.ClientError,F.UpgradeRequired+"",Z.ClientError,F.PreconditionRequired+"",Z.ClientError,F.TooManyRequests+"",Z.ClientError,F.RequestHeaderFieldsTooLarge+"",Z.ClientError,F.UnavailableForLegalReasons+"",Z.ClientError,F.InternalServerError+"",Z.ServerError,F.NotImplemented+"",Z.ServerError,F.BadGateway+"",Z.ServerError,F.ServiceUnavailable+"",Z.ServerError,F.GatewayTimeout+"",Z.ServerError,F.HttpVersionNotSupported+"",Z.ServerError,F.VariantAlsoNegotiates+"",Z.ServerError,F.InsufficientStorage+"",Z.ServerError,F.LoopDetected+"",Z.ServerError,F.NotExtended+"",Z.ServerError,F.NetworkAuthenticationRequired+"",Z.ServerError;const Sc={[Z.Information]:[F.Continue,F.SwitchingProtocols,F.Processing,F.EarlyHints],[Z.Success]:[F.Ok,F.Created,F.Accepted,F.NonAuthoritativeInformation,F.NoContent,F.ResetContent,F.PartialContent,F.MultiStatus,F.AlreadyReported,F.ImUsed],[Z.Redirect]:[F.MultipleChoices,F.MovedPermanently,F.Found,F.SeeOther,F.NotModified,F.UseProxy,F.Unused,F.TemporaryRedirect,F.PermanentRedirect],[Z.ClientError]:[F.BadRequest,F.Unauthorized,F.PaymentRequired,F.Forbidden,F.NotFound,F.MethodNotAllowed,F.NotAcceptable,F.ProxyAuthenticationRequired,F.RequestTimeout,F.Conflict,F.Gone,F.LengthRequired,F.PreconditionFailed,F.PayloadTooLarge,F.UriTooLong,F.UnsupportedMediaType,F.RangeNotSatisfiable,F.ExpectationFailed,F.ImATeapot,F.MisdirectedRequest,F.UnprocessableContent,F.Locked,F.FailedDependency,F.TooEarly,F.UpgradeRequired,F.PreconditionRequired,F.TooManyRequests,F.RequestHeaderFieldsTooLarge,F.UnavailableForLegalReasons],[Z.ServerError]:[F.InternalServerError,F.NotImplemented,F.BadGateway,F.ServiceUnavailable,F.GatewayTimeout,F.HttpVersionNotSupported,F.VariantAlsoNegotiates,F.InsufficientStorage,F.LoopDetected,F.NotExtended,F.NetworkAuthenticationRequired]};function Ym({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class qc{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(kt(n))}})}}class ys extends Error{}class w4 extends ys{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class k4 extends ys{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class x4 extends ys{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class Zs extends ys{}class F2 extends ys{constructor(t){super(`Invalid unit ${t}`)}}class xr extends ys{}class ro extends ys{constructor(){super("Zone is an abstract class")}}const V="numeric",Xn="short",ln="long",Wc={year:V,month:V,day:V},P2={year:V,month:Xn,day:V},$4={year:V,month:Xn,day:V,weekday:Xn},I2={year:V,month:ln,day:V},N2={year:V,month:ln,day:V,weekday:ln},O2={hour:V,minute:V},R2={hour:V,minute:V,second:V},B2={hour:V,minute:V,second:V,timeZoneName:Xn},L2={hour:V,minute:V,second:V,timeZoneName:ln},_2={hour:V,minute:V,hourCycle:"h23"},j2={hour:V,minute:V,second:V,hourCycle:"h23"},z2={hour:V,minute:V,second:V,hourCycle:"h23",timeZoneName:Xn},U2={hour:V,minute:V,second:V,hourCycle:"h23",timeZoneName:ln},q2={year:V,month:V,day:V,hour:V,minute:V},W2={year:V,month:V,day:V,hour:V,minute:V,second:V},V2={year:V,month:Xn,day:V,hour:V,minute:V},K2={year:V,month:Xn,day:V,hour:V,minute:V,second:V},D4={year:V,month:Xn,day:V,weekday:Xn,hour:V,minute:V},H2={year:V,month:ln,day:V,hour:V,minute:V,timeZoneName:Xn},G2={year:V,month:ln,day:V,hour:V,minute:V,second:V,timeZoneName:Xn},Z2={year:V,month:ln,day:V,weekday:ln,hour:V,minute:V,timeZoneName:ln},Y2={year:V,month:ln,day:V,weekday:ln,hour:V,minute:V,second:V,timeZoneName:ln};class yl{get type(){throw new ro}get name(){throw new ro}get ianaName(){return this.name}get isUniversal(){throw new ro}offsetName(t,r){throw new ro}formatOffset(t,r){throw new ro}offset(t){throw new ro}equals(t){throw new ro}get isValid(){throw new ro}}let rh=null;class Nd extends yl{static get instance(){return rh===null&&(rh=new Nd),rh}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return aw(t,r,n)}formatOffset(t,r){return _u(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const B0=new Map;function A4(e){let t=B0.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),B0.set(e,t)),t}const E4={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function C4(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,i,o,s,a,u,l,d]=n;return[s,i,o,a,u,l,d]}function S4(e,t){const r=e.formatToParts(t),n=[];for(let i=0;i<r.length;i++){const{type:o,value:s}=r[i],a=E4[o];o==="era"?n[a]=s:he(a)||(n[a]=parseInt(s,10))}return n}const nh=new Map;class Gi extends yl{static create(t){let r=nh.get(t);return r===void 0&&nh.set(t,r=new Gi(t)),r}static resetCache(){nh.clear(),B0.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Gi.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return aw(t,r,n,this.name)}formatOffset(t,r){return _u(this.offset(t),r)}offset(t){if(!this.valid)return NaN;const r=new Date(t);if(isNaN(r))return NaN;const n=A4(this.name);let[i,o,s,a,u,l,d]=n.formatToParts?S4(n,r):C4(n,r);a==="BC"&&(i=-Math.abs(i)+1);const h=Rd({year:i,month:o,day:s,hour:u===24?0:u,minute:l,second:d,millisecond:0});let g=+r;const m=g%1e3;return g-=m>=0?m:1e3+m,(h-g)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Tb={};function T4(e,t={}){const r=JSON.stringify([e,t]);let n=Tb[r];return n||(n=new Intl.ListFormat(e,t),Tb[r]=n),n}const L0=new Map;function _0(e,t={}){const r=JSON.stringify([e,t]);let n=L0.get(r);return n===void 0&&(n=new Intl.DateTimeFormat(e,t),L0.set(r,n)),n}const j0=new Map;function M4(e,t={}){const r=JSON.stringify([e,t]);let n=j0.get(r);return n===void 0&&(n=new Intl.NumberFormat(e,t),j0.set(r,n)),n}const z0=new Map;function F4(e,t={}){const{base:r,...n}=t,i=JSON.stringify([e,n]);let o=z0.get(i);return o===void 0&&(o=new Intl.RelativeTimeFormat(e,t),z0.set(i,o)),o}let Su=null;function P4(){return Su||(Su=new Intl.DateTimeFormat().resolvedOptions().locale,Su)}const U0=new Map;function J2(e){let t=U0.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),U0.set(e,t)),t}const q0=new Map;function I4(e){let t=q0.get(e);if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,"minimalDays"in t||(t={...X2,...t}),q0.set(e,t)}return t}function N4(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,i;try{n=_0(e).resolvedOptions(),i=e}catch{const u=e.substring(0,r);n=_0(u).resolvedOptions(),i=u}const{numberingSystem:o,calendar:s}=n;return[i,o,s]}}function O4(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function R4(e){const t=[];for(let r=1;r<=12;r++){const n=ge.utc(2009,r,1);t.push(e(n))}return t}function B4(e){const t=[];for(let r=1;r<=7;r++){const n=ge.utc(2016,11,13+r);t.push(e(n))}return t}function Ql(e,t,r,n){const i=e.listingMode();return i==="error"?null:i==="en"?r(t):n(t)}function L4(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||J2(e.locale).numberingSystem==="latn"}class _4{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:i,floor:o,...s}=n;if(!r||Object.keys(s).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=M4(t,a)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):tg(t,3);return Tt(r,this.padTo)}}}class j4{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const s=-1*(t.offset/60),a=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;t.offset!==0&&Gi.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const o={...this.opts};o.timeZone=o.timeZone||i,this.dtf=_0(r,o)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class z4{constructor(t,r,n){this.opts={style:"long",...n},!r&&ow()&&(this.rtf=F4(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):lD(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const X2={firstDay:1,minimalDays:4,weekend:[6,7]};class Je{static fromOpts(t){return Je.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,i,o=!1){const s=t||mt.defaultLocale,a=s||(o?"en-US":P4()),u=r||mt.defaultNumberingSystem,l=n||mt.defaultOutputCalendar,d=V0(i)||mt.defaultWeekSettings;return new Je(a,u,l,d,s)}static resetCache(){Su=null,L0.clear(),j0.clear(),z0.clear(),U0.clear(),q0.clear()}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:i}={}){return Je.create(t,r,n,i)}constructor(t,r,n,i,o){const[s,a,u]=N4(t);this.locale=s,this.numberingSystem=r||a||null,this.outputCalendar=n||u||null,this.weekSettings=i,this.intl=O4(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=o,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=L4(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:Je.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,V0(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return Ql(this,t,cw,()=>{const n=this.intl==="ja"||this.intl.startsWith("ja-");r&=!n;const i=r?{month:t,day:"numeric"}:{month:t},o=r?"format":"standalone";if(!this.monthsCache[o][t]){const s=n?a=>this.dtFormatter(a,i).format():a=>this.extract(a,i,"month");this.monthsCache[o][t]=R4(s)}return this.monthsCache[o][t]})}weekdays(t,r=!1){return Ql(this,t,hw,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=r?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=B4(o=>this.extract(o,n,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return Ql(this,void 0,()=>mw,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[ge.utc(2016,11,13,9),ge.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Ql(this,t,gw,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[ge.utc(-40,1,1),ge.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const i=this.dtFormatter(t,r),o=i.formatToParts(),s=o.find(a=>a.type.toLowerCase()===n);return s?s.value:null}numberFormatter(t={}){return new _4(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new j4(t,this.intl,r)}relFormatter(t={}){return new z4(this.intl,this.isEnglish(),t)}listFormatter(t={}){return T4(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||J2(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:sw()?I4(this.locale):X2}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let ih=null;class Ir extends yl{static get utcInstance(){return ih===null&&(ih=new Ir(0)),ih}static instance(t){return t===0?Ir.utcInstance:new Ir(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new Ir(Bd(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${_u(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${_u(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return _u(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class U4 extends yl{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function lo(e,t){if(he(e)||e===null)return t;if(e instanceof yl)return e;if(G4(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?Nd.instance:r==="utc"||r==="gmt"?Ir.utcInstance:Ir.parseSpecifier(r)||Gi.create(e)}else return mo(e)?Ir.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new U4(e)}const Jm={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Mb={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},q4=Jm.hanidec.replace(/[\[|\]]/g,"").split("");function W4(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(Jm.hanidec)!==-1)t+=q4.indexOf(e[r]);else for(const i in Mb){const[o,s]=Mb[i];n>=o&&n<=s&&(t+=n-o)}}return parseInt(t,10)}else return t}const W0=new Map;function V4(){W0.clear()}function zn({numberingSystem:e},t=""){const r=e||"latn";let n=W0.get(r);n===void 0&&(n=new Map,W0.set(r,n));let i=n.get(t);return i===void 0&&(i=new RegExp(`${Jm[r]}${t}`),n.set(t,i)),i}let Fb=()=>Date.now(),Pb="system",Ib=null,Nb=null,Ob=null,Rb=60,Bb,Lb=null;class mt{static get now(){return Fb}static set now(t){Fb=t}static set defaultZone(t){Pb=t}static get defaultZone(){return lo(Pb,Nd.instance)}static get defaultLocale(){return Ib}static set defaultLocale(t){Ib=t}static get defaultNumberingSystem(){return Nb}static set defaultNumberingSystem(t){Nb=t}static get defaultOutputCalendar(){return Ob}static set defaultOutputCalendar(t){Ob=t}static get defaultWeekSettings(){return Lb}static set defaultWeekSettings(t){Lb=V0(t)}static get twoDigitCutoffYear(){return Rb}static set twoDigitCutoffYear(t){Rb=t%100}static get throwOnInvalid(){return Bb}static set throwOnInvalid(t){Bb=t}static resetCaches(){Je.resetCache(),Gi.resetCache(),ge.resetCache(),V4()}}class Gn{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Q2=[0,31,59,90,120,151,181,212,243,273,304,334],ew=[0,31,60,91,121,152,182,213,244,274,305,335];function Mn(e,t){return new Gn("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function Xm(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const i=n.getUTCDay();return i===0?7:i}function tw(e,t,r){return r+(vl(e)?ew:Q2)[t-1]}function rw(e,t){const r=vl(e)?ew:Q2,n=r.findIndex(o=>o<t),i=t-r[n];return{month:n+1,day:i}}function Qm(e,t){return(e-t+7)%7+1}function Vc(e,t=4,r=1){const{year:n,month:i,day:o}=e,s=tw(n,i,o),a=Qm(Xm(n,i,o),r);let u=Math.floor((s-a+14-t)/7),l;return u<1?(l=n-1,u=Gu(l,t,r)):u>Gu(n,t,r)?(l=n+1,u=1):l=n,{weekYear:l,weekNumber:u,weekday:a,...Ld(e)}}function _b(e,t=4,r=1){const{weekYear:n,weekNumber:i,weekday:o}=e,s=Qm(Xm(n,1,t),r),a=Qs(n);let u=i*7+o-s-7+t,l;u<1?(l=n-1,u+=Qs(l)):u>a?(l=n+1,u-=Qs(n)):l=n;const{month:d,day:f}=rw(l,u);return{year:l,month:d,day:f,...Ld(e)}}function oh(e){const{year:t,month:r,day:n}=e,i=tw(t,r,n);return{year:t,ordinal:i,...Ld(e)}}function jb(e){const{year:t,ordinal:r}=e,{month:n,day:i}=rw(t,r);return{year:t,month:n,day:i,...Ld(e)}}function zb(e,t){if(!he(e.localWeekday)||!he(e.localWeekNumber)||!he(e.localWeekYear)){if(!he(e.weekday)||!he(e.weekNumber)||!he(e.weekYear))throw new Zs("Cannot mix locale-based week fields with ISO-based week fields");return he(e.localWeekday)||(e.weekday=e.localWeekday),he(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),he(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function K4(e,t=4,r=1){const n=Od(e.weekYear),i=Fn(e.weekNumber,1,Gu(e.weekYear,t,r)),o=Fn(e.weekday,1,7);return n?i?o?!1:Mn("weekday",e.weekday):Mn("week",e.weekNumber):Mn("weekYear",e.weekYear)}function H4(e){const t=Od(e.year),r=Fn(e.ordinal,1,Qs(e.year));return t?r?!1:Mn("ordinal",e.ordinal):Mn("year",e.year)}function nw(e){const t=Od(e.year),r=Fn(e.month,1,12),n=Fn(e.day,1,Kc(e.year,e.month));return t?r?n?!1:Mn("day",e.day):Mn("month",e.month):Mn("year",e.year)}function iw(e){const{hour:t,minute:r,second:n,millisecond:i}=e,o=Fn(t,0,23)||t===24&&r===0&&n===0&&i===0,s=Fn(r,0,59),a=Fn(n,0,59),u=Fn(i,0,999);return o?s?a?u?!1:Mn("millisecond",i):Mn("second",n):Mn("minute",r):Mn("hour",t)}function he(e){return typeof e>"u"}function mo(e){return typeof e=="number"}function Od(e){return typeof e=="number"&&e%1===0}function G4(e){return typeof e=="string"}function Z4(e){return Object.prototype.toString.call(e)==="[object Date]"}function ow(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function sw(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Y4(e){return Array.isArray(e)?e:[e]}function Ub(e,t,r){if(e.length!==0)return e.reduce((n,i)=>{const o=[t(i),i];return n&&r(n[0],o[0])===n[0]?n:o},null)[1]}function J4(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function ua(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function V0(e){if(e==null)return null;if(typeof e!="object")throw new xr("Week settings must be an object");if(!Fn(e.firstDay,1,7)||!Fn(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Fn(t,1,7)))throw new xr("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Fn(e,t,r){return Od(e)&&e>=t&&e<=r}function X4(e,t){return e-t*Math.floor(e/t)}function Tt(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function oo(e){if(!(he(e)||e===null||e===""))return parseInt(e,10)}function zo(e){if(!(he(e)||e===null||e===""))return parseFloat(e)}function eg(e){if(!(he(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function tg(e,t,r="round"){const n=10**t;switch(r){case"expand":return e>0?Math.ceil(e*n)/n:Math.floor(e*n)/n;case"trunc":return Math.trunc(e*n)/n;case"round":return Math.round(e*n)/n;case"floor":return Math.floor(e*n)/n;case"ceil":return Math.ceil(e*n)/n;default:throw new RangeError(`Value rounding ${r} is out of range`)}}function vl(e){return e%4===0&&(e%100!==0||e%400===0)}function Qs(e){return vl(e)?366:365}function Kc(e,t){const r=X4(t-1,12)+1,n=e+(t-r)/12;return r===2?vl(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Rd(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function qb(e,t,r){return-Qm(Xm(e,1,t),r)+t-1}function Gu(e,t=4,r=1){const n=qb(e,t,r),i=qb(e+1,t,r);return(Qs(e)-n+i)/7}function K0(e){return e>99?e:e>mt.twoDigitCutoffYear?1900+e:2e3+e}function aw(e,t,r,n=null){const i=new Date(e),o={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(o.timeZone=n);const s={timeZoneName:t,...o},a=new Intl.DateTimeFormat(r,s).formatToParts(i).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function Bd(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,i=r<0||Object.is(r,-0)?-n:n;return r*60+i}function uw(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new xr(`Invalid unit value ${e}`);return t}function Hc(e,t){const r={};for(const n in e)if(ua(e,n)){const i=e[n];if(i==null)continue;r[t(n)]=uw(i)}return r}function _u(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${Tt(r,2)}:${Tt(n,2)}`;case"narrow":return`${i}${r}${n>0?`:${n}`:""}`;case"techie":return`${i}${Tt(r,2)}${Tt(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Ld(e){return J4(e,["hour","minute","second","millisecond"])}const Q4=["January","February","March","April","May","June","July","August","September","October","November","December"],lw=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],eD=["J","F","M","A","M","J","J","A","S","O","N","D"];function cw(e){switch(e){case"narrow":return[...eD];case"short":return[...lw];case"long":return[...Q4];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const dw=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],fw=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],tD=["M","T","W","T","F","S","S"];function hw(e){switch(e){case"narrow":return[...tD];case"short":return[...fw];case"long":return[...dw];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const mw=["AM","PM"],rD=["Before Christ","Anno Domini"],nD=["BC","AD"],iD=["B","A"];function gw(e){switch(e){case"narrow":return[...iD];case"short":return[...nD];case"long":return[...rD];default:return null}}function oD(e){return mw[e.hour<12?0:1]}function sD(e,t){return hw(t)[e.weekday-1]}function aD(e,t){return cw(t)[e.month-1]}function uD(e,t){return gw(t)[e.year<0?0:1]}function lD(e,t,r="always",n=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&o){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${i[e][0]}`;case-1:return f?"yesterday":`last ${i[e][0]}`;case 0:return f?"today":`this ${i[e][0]}`}}const s=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=i[e],d=n?u?l[1]:l[2]||l[1]:u?i[e][0]:e;return s?`${a} ${d} ago`:`in ${a} ${d}`}function Wb(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const cD={D:Wc,DD:P2,DDD:I2,DDDD:N2,t:O2,tt:R2,ttt:B2,tttt:L2,T:_2,TT:j2,TTT:z2,TTTT:U2,f:q2,ff:V2,fff:H2,ffff:Z2,F:W2,FF:K2,FFF:G2,FFFF:Y2};class Er{static create(t,r={}){return new Er(t,r)}static parseFormat(t){let r=null,n="",i=!1;const o=[];for(let s=0;s<t.length;s++){const a=t.charAt(s);a==="'"?((n.length>0||i)&&o.push({literal:i||/^\s+$/.test(n),val:n===""?"'":n}),r=null,n="",i=!i):i||a===r?n+=a:(n.length>0&&o.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&o.push({literal:i||/^\s+$/.test(n),val:n}),o}static macroTokenToFormatOpts(t){return cD[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0,n=void 0){if(this.opts.forceSimple)return Tt(t,r);const i={...this.opts};return r>0&&(i.padTo=r),n&&(i.signDisplay=n),this.loc.numberFormatter(i).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",o=(g,m)=>this.loc.extract(t,g,m),s=g=>t.isOffsetFixed&&t.offset===0&&g.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,g.format):"",a=()=>n?oD(t):o({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(g,m)=>n?aD(t,g):o(m?{month:g}:{month:g,day:"numeric"},"month"),l=(g,m)=>n?sD(t,g):o(m?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),d=g=>{const m=Er.macroTokenToFormatOpts(g);return m?this.formatWithSystemDefault(t,m):g},f=g=>n?uD(t,g):o({era:g},"era"),h=g=>{switch(g){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?o({day:"numeric"},"day"):this.num(t.day);case"dd":return i?o({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?o({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?o({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return i?o({month:"numeric"},"month"):this.num(t.month);case"MM":return i?o({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return i?o({year:"numeric"},"year"):this.num(t.year);case"yy":return i?o({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?o({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?o({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return d(g)}};return Wb(Er.parseFormat(r),h)}formatDurationFromString(t,r){const n=this.opts.signMode==="negativeLargestOnly"?-1:1,i=d=>{switch(d[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},o=(d,f)=>h=>{const g=i(h);if(g){const m=f.isNegativeDuration&&g!==f.largestUnit?n:1;let p;return this.opts.signMode==="negativeLargestOnly"&&g!==f.largestUnit?p="never":this.opts.signMode==="all"?p="always":p="auto",this.num(d.get(g)*m,h.length,p)}else return h},s=Er.parseFormat(r),a=s.reduce((d,{literal:f,val:h})=>f?d:d.concat(h),[]),u=t.shiftTo(...a.map(i).filter(d=>d)),l={isNegativeDuration:u<0,largestUnit:Object.keys(u.values)[0]};return Wb(s,o(u,l))}}const pw=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Na(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function Oa(...e){return t=>e.reduce(([r,n,i],o)=>{const[s,a,u]=o(t,i);return[{...r,...s},a||n,u]},[{},null,1]).slice(0,2)}function Ra(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const i=r.exec(e);if(i)return n(i)}return[null,null]}function bw(...e){return(t,r)=>{const n={};let i;for(i=0;i<e.length;i++)n[e[i]]=oo(t[r+i]);return[n,null,r+i]}}const yw=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,dD=`(?:${yw.source}?(?:\\[(${pw.source})\\])?)?`,rg=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,vw=RegExp(`${rg.source}${dD}`),ng=RegExp(`(?:[Tt]${vw.source})?`),fD=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,hD=/(\d{4})-?W(\d\d)(?:-?(\d))?/,mD=/(\d{4})-?(\d{3})/,gD=bw("weekYear","weekNumber","weekDay"),pD=bw("year","ordinal"),bD=/(\d{4})-(\d\d)-(\d\d)/,ww=RegExp(`${rg.source} ?(?:${yw.source}|(${pw.source}))?`),yD=RegExp(`(?: ${ww.source})?`);function ea(e,t,r){const n=e[t];return he(n)?r:oo(n)}function vD(e,t){return[{year:ea(e,t),month:ea(e,t+1,1),day:ea(e,t+2,1)},null,t+3]}function Ba(e,t){return[{hours:ea(e,t,0),minutes:ea(e,t+1,0),seconds:ea(e,t+2,0),milliseconds:eg(e[t+3])},null,t+4]}function wl(e,t){const r=!e[t]&&!e[t+1],n=Bd(e[t+1],e[t+2]),i=r?null:Ir.instance(n);return[{},i,t+3]}function kl(e,t){const r=e[t]?Gi.create(e[t]):null;return[{},r,t+1]}const wD=RegExp(`^T?${rg.source}$`),kD=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function xD(e){const[t,r,n,i,o,s,a,u,l]=e,d=t[0]==="-",f=u&&u[0]==="-",h=(g,m=!1)=>g!==void 0&&(m||g&&d)?-g:g;return[{years:h(zo(r)),months:h(zo(n)),weeks:h(zo(i)),days:h(zo(o)),hours:h(zo(s)),minutes:h(zo(a)),seconds:h(zo(u),u==="-0"),milliseconds:h(eg(l),f)}]}const $D={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function ig(e,t,r,n,i,o,s){const a={year:t.length===2?K0(oo(t)):oo(t),month:lw.indexOf(r)+1,day:oo(n),hour:oo(i),minute:oo(o)};return s&&(a.second=oo(s)),e&&(a.weekday=e.length>3?dw.indexOf(e)+1:fw.indexOf(e)+1),a}const DD=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function AD(e){const[,t,r,n,i,o,s,a,u,l,d,f]=e,h=ig(t,i,n,r,o,s,a);let g;return u?g=$D[u]:l?g=0:g=Bd(d,f),[h,new Ir(g)]}function ED(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const CD=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,SD=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,TD=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Vb(e){const[,t,r,n,i,o,s,a]=e;return[ig(t,i,n,r,o,s,a),Ir.utcInstance]}function MD(e){const[,t,r,n,i,o,s,a]=e;return[ig(t,a,r,n,i,o,s),Ir.utcInstance]}const FD=Na(fD,ng),PD=Na(hD,ng),ID=Na(mD,ng),ND=Na(vw),kw=Oa(vD,Ba,wl,kl),OD=Oa(gD,Ba,wl,kl),RD=Oa(pD,Ba,wl,kl),BD=Oa(Ba,wl,kl);function LD(e){return Ra(e,[FD,kw],[PD,OD],[ID,RD],[ND,BD])}function _D(e){return Ra(ED(e),[DD,AD])}function jD(e){return Ra(e,[CD,Vb],[SD,Vb],[TD,MD])}function zD(e){return Ra(e,[kD,xD])}const UD=Oa(Ba);function qD(e){return Ra(e,[wD,UD])}const WD=Na(bD,yD),VD=Na(ww),KD=Oa(Ba,wl,kl);function HD(e){return Ra(e,[WD,kw],[VD,KD])}const Kb="Invalid Duration",xw={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},GD={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...xw},Dn=146097/400,Ls=146097/4800,ZD={years:{quarters:4,months:12,weeks:Dn/7,days:Dn,hours:Dn*24,minutes:Dn*24*60,seconds:Dn*24*60*60,milliseconds:Dn*24*60*60*1e3},quarters:{months:3,weeks:Dn/28,days:Dn/4,hours:Dn*24/4,minutes:Dn*24*60/4,seconds:Dn*24*60*60/4,milliseconds:Dn*24*60*60*1e3/4},months:{weeks:Ls/7,days:Ls,hours:Ls*24,minutes:Ls*24*60,seconds:Ls*24*60*60,milliseconds:Ls*24*60*60*1e3},...xw},es=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],YD=es.slice(0).reverse();function Pi(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new Ne(n)}function $w(e,t){let r=t.milliseconds??0;for(const n of YD.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function Hb(e,t){const r=$w(e,t)<0?-1:1;es.reduceRight((n,i)=>{if(he(t[i]))return n;if(n){const o=t[n]*r,s=e[i][n],a=Math.floor(o/s);t[i]+=a*r,t[n]-=a*s*r}return i},null),es.reduce((n,i)=>{if(he(t[i]))return n;if(n){const o=t[n]%1;t[n]-=o,t[i]+=o*e[n][i]}return i},null)}function Gb(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class Ne{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?ZD:GD;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||Je.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return Ne.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new xr(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new Ne({values:Hc(t,Ne.normalizeUnit),loc:Je.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(mo(t))return Ne.fromMillis(t);if(Ne.isDuration(t))return t;if(typeof t=="object")return Ne.fromObject(t);throw new xr(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=zD(t);return n?Ne.fromObject(n,r):Ne.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=qD(t);return n?Ne.fromObject(n,r):Ne.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new xr("need to specify a reason the Duration is invalid");const n=t instanceof Gn?t:new Gn(t,r);if(mt.throwOnInvalid)throw new x4(n);return new Ne({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new F2(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?Er.create(this.loc,n).formatDurationFromString(this,t):Kb}toHuman(t={}){if(!this.isValid)return Kb;const r=t.showZeros!==!1,n=es.map(i=>{const o=this.values[i];return he(o)||o===0&&!r?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:i.slice(0,-1)}).format(o)}).filter(i=>i);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=tg(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},ge.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?$w(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=Ne.fromDurationLike(t),n={};for(const i of es)(ua(r.values,i)||ua(this.values,i))&&(n[i]=r.get(i)+this.get(i));return Pi(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=Ne.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=uw(t(this.values[n],n));return Pi(this,{values:r},!0)}get(t){return this[Ne.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...Hc(t,Ne.normalizeUnit)};return Pi(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:i}={}){const s={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:i,conversionAccuracy:n};return Pi(this,s)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Hb(this.matrix,t),Pi(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Gb(this.normalize().shiftToAll().toObject());return Pi(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(s=>Ne.normalizeUnit(s));const r={},n={},i=this.toObject();let o;for(const s of es)if(t.indexOf(s)>=0){o=s;let a=0;for(const l in n)a+=this.matrix[l][s]*n[l],n[l]=0;mo(i[s])&&(a+=i[s]);const u=Math.trunc(a);r[s]=u,n[s]=(a*1e3-u*1e3)/1e3}else mo(i[s])&&(n[s]=i[s]);for(const s in n)n[s]!==0&&(r[o]+=s===o?n[s]:n[s]/this.matrix[o][s]);return Hb(this.matrix,r),Pi(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return Pi(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=Gb(this.values);return Pi(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,i){return n===void 0||n===0?i===void 0||i===0:n===i}for(const n of es)if(!r(this.values[n],t.values[n]))return!1;return!0}}const _s="Invalid Interval";function JD(e,t){return!e||!e.isValid?vt.invalid("missing or invalid start"):!t||!t.isValid?vt.invalid("missing or invalid end"):t<e?vt.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class vt{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new xr("need to specify a reason the Interval is invalid");const n=t instanceof Gn?t:new Gn(t,r);if(mt.throwOnInvalid)throw new k4(n);return new vt({invalid:n})}static fromDateTimes(t,r){const n=uu(t),i=uu(r),o=JD(n,i);return o??new vt({start:n,end:i})}static after(t,r){const n=Ne.fromDurationLike(r),i=uu(t);return vt.fromDateTimes(i,i.plus(n))}static before(t,r){const n=Ne.fromDurationLike(r),i=uu(t);return vt.fromDateTimes(i.minus(n),i)}static fromISO(t,r){const[n,i]=(t||"").split("/",2);if(n&&i){let o,s;try{o=ge.fromISO(n,r),s=o.isValid}catch{s=!1}let a,u;try{a=ge.fromISO(i,r),u=a.isValid}catch{u=!1}if(s&&u)return vt.fromDateTimes(o,a);if(s){const l=Ne.fromISO(i,r);if(l.isValid)return vt.after(o,l)}else if(u){const l=Ne.fromISO(n,r);if(l.isValid)return vt.before(a,l)}}return vt.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let i;return r?.useLocaleWeeks?i=this.end.reconfigure({locale:n.locale}):i=this.end,i=i.startOf(t,r),Math.floor(i.diff(n,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?vt.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(uu).filter(s=>this.contains(s)).sort((s,a)=>s.toMillis()-a.toMillis()),n=[];let{s:i}=this,o=0;for(;i<this.e;){const s=r[o]||this.e,a=+s>+this.e?this.e:s;n.push(vt.fromDateTimes(i,a)),i=a,o+=1}return n}splitBy(t){const r=Ne.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,i=1,o;const s=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(u=>u*i));o=+a>+this.e?this.e:a,s.push(vt.fromDateTimes(n,o)),n=o,i+=1}return s}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:vt.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return vt.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((i,o)=>i.s-o.s).reduce(([i,o],s)=>o?o.overlaps(s)||o.abutsStart(s)?[i,o.union(s)]:[i.concat([o]),s]:[i,s],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const i=[],o=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),s=Array.prototype.concat(...o),a=s.sort((u,l)=>u.time-l.time);for(const u of a)n+=u.type==="s"?1:-1,n===1?r=u.time:(r&&+r!=+u.time&&i.push(vt.fromDateTimes(r,u.time)),r=null);return vt.merge(i)}difference(...t){return vt.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:_s}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Wc,r={}){return this.isValid?Er.create(this.s.loc.clone(r),t).formatInterval(this):_s}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:_s}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:_s}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:_s}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:_s}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):Ne.invalid(this.invalidReason)}mapEndpoints(t){return vt.fromDateTimes(t(this.s),t(this.e))}}class ec{static hasDST(t=mt.defaultZone){const r=ge.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return Gi.isValidZone(t)}static normalizeZone(t){return lo(t,mt.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||Je.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||Je.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||Je.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||Je.create(r,n,o)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||Je.create(r,n,o)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||Je.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||Je.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return Je.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return Je.create(r,null,"gregory").eras(t)}static features(){return{relative:ow(),localeWeek:sw()}}}function Zb(e,t){const r=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(Ne.fromMillis(n).as("days"))}function XD(e,t,r){const n=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const d=Zb(u,l);return(d-d%7)/7}],["days",Zb]],i={},o=e;let s,a;for(const[u,l]of n)r.indexOf(u)>=0&&(s=u,i[u]=l(e,t),a=o.plus(i),a>t?(i[u]--,e=o.plus(i),e>t&&(a=e,i[u]--,e=o.plus(i))):e=a);return[e,i,a,s]}function QD(e,t,r,n){let[i,o,s,a]=XD(e,t,r);const u=t-i,l=r.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);l.length===0&&(s<t&&(s=i.plus({[a]:1})),s!==i&&(o[a]=(o[a]||0)+u/(s-i)));const d=Ne.fromObject(o,n);return l.length>0?Ne.fromMillis(u,n).shiftTo(...l).plus(d):d}const eA="missing Intl.DateTimeFormat.formatToParts support";function Ue(e,t=r=>r){return{regex:e,deser:([r])=>t(W4(r))}}const tA=" ",Dw=`[ ${tA}]`,Aw=new RegExp(Dw,"g");function rA(e){return e.replace(/\./g,"\\.?").replace(Aw,Dw)}function Yb(e){return e.replace(/\./g,"").replace(Aw," ").toLowerCase()}function Un(e,t){return e===null?null:{regex:RegExp(e.map(rA).join("|")),deser:([r])=>e.findIndex(n=>Yb(r)===Yb(n))+t}}function Jb(e,t){return{regex:e,deser:([,r,n])=>Bd(r,n),groups:t}}function tc(e){return{regex:e,deser:([t])=>t}}function nA(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function iA(e,t){const r=zn(t),n=zn(t,"{2}"),i=zn(t,"{3}"),o=zn(t,"{4}"),s=zn(t,"{6}"),a=zn(t,"{1,2}"),u=zn(t,"{1,3}"),l=zn(t,"{1,6}"),d=zn(t,"{1,9}"),f=zn(t,"{2,4}"),h=zn(t,"{4,6}"),g=k=>({regex:RegExp(nA(k.val)),deser:([x])=>x,literal:!0}),p=(k=>{if(e.literal)return g(k);switch(k.val){case"G":return Un(t.eras("short"),0);case"GG":return Un(t.eras("long"),0);case"y":return Ue(l);case"yy":return Ue(f,K0);case"yyyy":return Ue(o);case"yyyyy":return Ue(h);case"yyyyyy":return Ue(s);case"M":return Ue(a);case"MM":return Ue(n);case"MMM":return Un(t.months("short",!0),1);case"MMMM":return Un(t.months("long",!0),1);case"L":return Ue(a);case"LL":return Ue(n);case"LLL":return Un(t.months("short",!1),1);case"LLLL":return Un(t.months("long",!1),1);case"d":return Ue(a);case"dd":return Ue(n);case"o":return Ue(u);case"ooo":return Ue(i);case"HH":return Ue(n);case"H":return Ue(a);case"hh":return Ue(n);case"h":return Ue(a);case"mm":return Ue(n);case"m":return Ue(a);case"q":return Ue(a);case"qq":return Ue(n);case"s":return Ue(a);case"ss":return Ue(n);case"S":return Ue(u);case"SSS":return Ue(i);case"u":return tc(d);case"uu":return tc(a);case"uuu":return Ue(r);case"a":return Un(t.meridiems(),0);case"kkkk":return Ue(o);case"kk":return Ue(f,K0);case"W":return Ue(a);case"WW":return Ue(n);case"E":case"c":return Ue(r);case"EEE":return Un(t.weekdays("short",!1),1);case"EEEE":return Un(t.weekdays("long",!1),1);case"ccc":return Un(t.weekdays("short",!0),1);case"cccc":return Un(t.weekdays("long",!0),1);case"Z":case"ZZ":return Jb(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return Jb(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return tc(/[a-z_+-/]{1,256}?/i);case" ":return tc(/[^\S\n\r]/);default:return g(k)}})(e)||{invalidReason:eA};return p.token=e,p}const oA={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function sA(e,t,r){const{type:n,value:i}=e;if(n==="literal"){const u=/^\s+$/.test(i);return{literal:!u,val:u?" ":i}}const o=t[n];let s=n;n==="hour"&&(t.hour12!=null?s=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?s="hour12":s="hour24":s=r.hour12?"hour12":"hour24");let a=oA[s];if(typeof a=="object"&&(a=a[o]),a)return{literal:!1,val:a}}function aA(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function uA(e,t,r){const n=e.match(t);if(n){const i={};let o=1;for(const s in r)if(ua(r,s)){const a=r[s],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(n.slice(o,o+u))),o+=u}return[n,i]}else return[n,{}]}function lA(e){const t=o=>{switch(o){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return he(e.z)||(r=Gi.create(e.z)),he(e.Z)||(r||(r=new Ir(e.Z)),n=e.Z),he(e.q)||(e.M=(e.q-1)*3+1),he(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),he(e.u)||(e.S=eg(e.u)),[Object.keys(e).reduce((o,s)=>{const a=t(s);return a&&(o[a]=e[s]),o},{}),r,n]}let sh=null;function cA(){return sh||(sh=ge.fromMillis(1555555555555)),sh}function dA(e,t){if(e.literal)return e;const r=Er.macroTokenToFormatOpts(e.val),n=Tw(r,t);return n==null||n.includes(void 0)?e:n}function Ew(e,t){return Array.prototype.concat(...e.map(r=>dA(r,t)))}class Cw{constructor(t,r){if(this.locale=t,this.format=r,this.tokens=Ew(Er.parseFormat(r),t),this.units=this.tokens.map(n=>iA(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,i]=aA(this.units);this.regex=RegExp(n,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[r,n]=uA(t,this.regex,this.handlers),[i,o,s]=n?lA(n):[null,null,void 0];if(ua(n,"a")&&ua(n,"H"))throw new Zs("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:i,zone:o,specificOffset:s}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function Sw(e,t,r){return new Cw(e,r).explainFromTokens(t)}function fA(e,t,r){const{result:n,zone:i,specificOffset:o,invalidReason:s}=Sw(e,t,r);return[n,i,o,s]}function Tw(e,t){if(!e)return null;const n=Er.create(t,e).dtFormatter(cA()),i=n.formatToParts(),o=n.resolvedOptions();return i.map(s=>sA(s,e,o))}const ah="Invalid DateTime",Xb=864e13;function Tu(e){return new Gn("unsupported zone",`the zone "${e.name}" is not supported`)}function uh(e){return e.weekData===null&&(e.weekData=Vc(e.c)),e.weekData}function lh(e){return e.localWeekData===null&&(e.localWeekData=Vc(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Uo(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new ge({...r,...t,old:r})}function Mw(e,t,r){let n=e-t*60*1e3;const i=r.offset(n);if(t===i)return[n,t];n-=(i-t)*60*1e3;const o=r.offset(n);return i===o?[n,i]:[e-Math.min(i,o)*60*1e3,Math.max(i,o)]}function rc(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function Tc(e,t,r){return Mw(Rd(e),t,r)}function Qb(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,o={...e.c,year:n,month:i,day:Math.min(e.c.day,Kc(n,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},s=Ne.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=Rd(o);let[u,l]=Mw(a,r,e.zone);return s!==0&&(u+=s,l=e.zone.offset(u)),{ts:u,o:l}}function js(e,t,r,n,i,o){const{setZone:s,zone:a}=r;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=ge.fromObject(e,{...r,zone:u,specificOffset:o});return s?l:l.setZone(a)}else return ge.invalid(new Gn("unparsable",`the input "${i}" can't be parsed as ${n}`))}function nc(e,t,r=!0){return e.isValid?Er.create(Je.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function ch(e,t,r){const n=e.c.year>9999||e.c.year<0;let i="";if(n&&e.c.year>=0&&(i+="+"),i+=Tt(e.c.year,n?6:4),r==="year")return i;if(t){if(i+="-",i+=Tt(e.c.month),r==="month")return i;i+="-"}else if(i+=Tt(e.c.month),r==="month")return i;return i+=Tt(e.c.day),i}function ey(e,t,r,n,i,o,s){let a=!r||e.c.millisecond!==0||e.c.second!==0,u="";switch(s){case"day":case"month":case"year":break;default:if(u+=Tt(e.c.hour),s==="hour")break;if(t){if(u+=":",u+=Tt(e.c.minute),s==="minute")break;a&&(u+=":",u+=Tt(e.c.second))}else{if(u+=Tt(e.c.minute),s==="minute")break;a&&(u+=Tt(e.c.second))}if(s==="second")break;a&&(!n||e.c.millisecond!==0)&&(u+=".",u+=Tt(e.c.millisecond,3))}return i&&(e.isOffsetFixed&&e.offset===0&&!o?u+="Z":e.o<0?(u+="-",u+=Tt(Math.trunc(-e.o/60)),u+=":",u+=Tt(Math.trunc(-e.o%60))):(u+="+",u+=Tt(Math.trunc(e.o/60)),u+=":",u+=Tt(Math.trunc(e.o%60)))),o&&(u+="["+e.zone.ianaName+"]"),u}const Fw={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},hA={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},mA={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Mc=["year","month","day","hour","minute","second","millisecond"],gA=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],pA=["year","ordinal","hour","minute","second","millisecond"];function Fc(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new F2(e);return t}function ty(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return Fc(e)}}function bA(e){if(Mu===void 0&&(Mu=mt.now()),e.type!=="iana")return e.offset(Mu);const t=e.name;let r=H0.get(t);return r===void 0&&(r=e.offset(Mu),H0.set(t,r)),r}function ry(e,t){const r=lo(t.zone,mt.defaultZone);if(!r.isValid)return ge.invalid(Tu(r));const n=Je.fromObject(t);let i,o;if(he(e.year))i=mt.now();else{for(const u of Mc)he(e[u])&&(e[u]=Fw[u]);const s=nw(e)||iw(e);if(s)return ge.invalid(s);const a=bA(r);[i,o]=Tc(e,a,r)}return new ge({ts:i,zone:r,loc:n,o})}function ny(e,t,r){const n=he(r.round)?!0:r.round,i=he(r.rounding)?"trunc":r.rounding,o=(a,u)=>(a=tg(a,n||r.calendary?0:2,r.calendary?"round":i),t.loc.clone(r).relFormatter(r).format(a,u)),s=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return o(s(r.unit),r.unit);for(const a of r.units){const u=s(a);if(Math.abs(u)>=1)return o(u,a)}return o(e>t?-0:0,r.units[r.units.length-1])}function iy(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let Mu;const H0=new Map;class ge{constructor(t){const r=t.zone||mt.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new Gn("invalid input"):null)||(r.isValid?null:Tu(r));this.ts=he(t.ts)?mt.now():t.ts;let i=null,o=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[i,o]=[t.old.c,t.old.o];else{const a=mo(t.o)&&!t.old?t.o:r.offset(this.ts);i=rc(this.ts,a),n=Number.isNaN(i.year)?new Gn("invalid input"):null,i=n?null:i,o=n?null:a}this._zone=r,this.loc=t.loc||Je.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=i,this.o=o,this.isLuxonDateTime=!0}static now(){return new ge({})}static local(){const[t,r]=iy(arguments),[n,i,o,s,a,u,l]=r;return ry({year:n,month:i,day:o,hour:s,minute:a,second:u,millisecond:l},t)}static utc(){const[t,r]=iy(arguments),[n,i,o,s,a,u,l]=r;return t.zone=Ir.utcInstance,ry({year:n,month:i,day:o,hour:s,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,r={}){const n=Z4(t)?t.valueOf():NaN;if(Number.isNaN(n))return ge.invalid("invalid input");const i=lo(r.zone,mt.defaultZone);return i.isValid?new ge({ts:n,zone:i,loc:Je.fromObject(r)}):ge.invalid(Tu(i))}static fromMillis(t,r={}){if(mo(t))return t<-Xb||t>Xb?ge.invalid("Timestamp out of range"):new ge({ts:t,zone:lo(r.zone,mt.defaultZone),loc:Je.fromObject(r)});throw new xr(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(mo(t))return new ge({ts:t*1e3,zone:lo(r.zone,mt.defaultZone),loc:Je.fromObject(r)});throw new xr("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=lo(r.zone,mt.defaultZone);if(!n.isValid)return ge.invalid(Tu(n));const i=Je.fromObject(r),o=Hc(t,ty),{minDaysInFirstWeek:s,startOfWeek:a}=zb(o,i),u=mt.now(),l=he(r.specificOffset)?n.offset(u):r.specificOffset,d=!he(o.ordinal),f=!he(o.year),h=!he(o.month)||!he(o.day),g=f||h,m=o.weekYear||o.weekNumber;if((g||d)&&m)throw new Zs("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(h&&d)throw new Zs("Can't mix ordinal dates with month/day");const p=m||o.weekday&&!g;let k,x,D=rc(u,l);p?(k=gA,x=hA,D=Vc(D,s,a)):d?(k=pA,x=mA,D=oh(D)):(k=Mc,x=Fw);let C=!1;for(const ye of k){const se=o[ye];he(se)?C?o[ye]=x[ye]:o[ye]=D[ye]:C=!0}const P=p?K4(o,s,a):d?H4(o):nw(o),O=P||iw(o);if(O)return ge.invalid(O);const H=p?_b(o,s,a):d?jb(o):o,[ee,ne]=Tc(H,l,n),X=new ge({ts:ee,zone:n,o:ne,loc:i});return o.weekday&&g&&t.weekday!==X.weekday?ge.invalid("mismatched weekday",`you can't specify both a weekday of ${o.weekday} and a date of ${X.toISO()}`):X.isValid?X:ge.invalid(X.invalid)}static fromISO(t,r={}){const[n,i]=LD(t);return js(n,i,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,i]=_D(t);return js(n,i,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,i]=jD(t);return js(n,i,r,"HTTP",r)}static fromFormat(t,r,n={}){if(he(t)||he(r))throw new xr("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:o=null}=n,s=Je.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0}),[a,u,l,d]=fA(s,t,r);return d?ge.invalid(d):js(a,u,n,`format ${r}`,t,l)}static fromString(t,r,n={}){return ge.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,i]=HD(t);return js(n,i,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new xr("need to specify a reason the DateTime is invalid");const n=t instanceof Gn?t:new Gn(t,r);if(mt.throwOnInvalid)throw new w4(n);return new ge({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=Tw(t,Je.fromObject(r));return n?n.map(i=>i?i.val:null).join(""):null}static expandFormat(t,r={}){return Ew(Er.parseFormat(t),Je.fromObject(r)).map(i=>i.val).join("")}static resetCache(){Mu=void 0,H0.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?uh(this).weekYear:NaN}get weekNumber(){return this.isValid?uh(this).weekNumber:NaN}get weekday(){return this.isValid?uh(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?lh(this).weekday:NaN}get localWeekNumber(){return this.isValid?lh(this).weekNumber:NaN}get localWeekYear(){return this.isValid?lh(this).weekYear:NaN}get ordinal(){return this.isValid?oh(this.c).ordinal:NaN}get monthShort(){return this.isValid?ec.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?ec.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?ec.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?ec.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=Rd(this.c),i=this.zone.offset(n-t),o=this.zone.offset(n+t),s=this.zone.offset(n-i*r),a=this.zone.offset(n-o*r);if(s===a)return[this];const u=n-s*r,l=n-a*r,d=rc(u,s),f=rc(l,a);return d.hour===f.hour&&d.minute===f.minute&&d.second===f.second&&d.millisecond===f.millisecond?[Uo(this,{ts:u}),Uo(this,{ts:l})]:[this]}get isInLeapYear(){return vl(this.year)}get daysInMonth(){return Kc(this.year,this.month)}get daysInYear(){return this.isValid?Qs(this.year):NaN}get weeksInWeekYear(){return this.isValid?Gu(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Gu(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:i}=Er.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:i}}toUTC(t=0,r={}){return this.setZone(Ir.instance(t),r)}toLocal(){return this.setZone(mt.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=lo(t,mt.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(r||n){const o=t.offset(this.ts),s=this.toObject();[i]=Tc(s,o,t)}return Uo(this,{ts:i,zone:t})}else return ge.invalid(Tu(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const i=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return Uo(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=Hc(t,ty),{minDaysInFirstWeek:n,startOfWeek:i}=zb(r,this.loc),o=!he(r.weekYear)||!he(r.weekNumber)||!he(r.weekday),s=!he(r.ordinal),a=!he(r.year),u=!he(r.month)||!he(r.day),l=a||u,d=r.weekYear||r.weekNumber;if((l||s)&&d)throw new Zs("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&s)throw new Zs("Can't mix ordinal dates with month/day");let f;o?f=_b({...Vc(this.c,n,i),...r},n,i):he(r.ordinal)?(f={...this.toObject(),...r},he(r.day)&&(f.day=Math.min(Kc(f.year,f.month),f.day))):f=jb({...oh(this.c),...r});const[h,g]=Tc(f,this.o,this.zone);return Uo(this,{ts:h,o:g})}plus(t){if(!this.isValid)return this;const r=Ne.fromDurationLike(t);return Uo(this,Qb(this,r))}minus(t){if(!this.isValid)return this;const r=Ne.fromDurationLike(t).negate();return Uo(this,Qb(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},i=Ne.normalizeUnit(t);switch(i){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(i==="weeks")if(r){const o=this.loc.getStartOfWeek(),{weekday:s}=this;s<o&&(n.weekNumber=this.weekNumber-1),n.weekday=o}else n.weekday=1;if(i==="quarters"){const o=Math.ceil(this.month/3);n.month=(o-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?Er.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):ah}toLocaleString(t=Wc,r={}){return this.isValid?Er.create(this.loc.clone(r),t).formatDateTime(this):ah}toLocaleParts(t={}){return this.isValid?Er.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:i=!0,extendedZone:o=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=Fc(s);const a=t==="extended";let u=ch(this,a,s);return Mc.indexOf(s)>=3&&(u+="T"),u+=ey(this,a,r,n,i,o,s),u}toISODate({format:t="extended",precision:r="day"}={}){return this.isValid?ch(this,t==="extended",Fc(r)):null}toISOWeekDate(){return nc(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:i=!1,extendedZone:o=!1,format:s="extended",precision:a="milliseconds"}={}){return this.isValid?(a=Fc(a),(i&&Mc.indexOf(a)>=3?"T":"")+ey(this,s==="extended",r,t,n,o,a)):null}toRFC2822(){return nc(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return nc(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?ch(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let i="HH:mm:ss.SSS";return(r||t)&&(n&&(i+=" "),r?i+="z":t&&(i+="ZZ")),nc(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():ah}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return Ne.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...n},o=Y4(r).map(Ne.normalizeUnit),s=t.valueOf()>this.valueOf(),a=s?this:t,u=s?t:this,l=QD(a,u,o,i);return s?l.negate():l}diffNow(t="milliseconds",r={}){return this.diff(ge.now(),t,r)}until(t){return this.isValid?vt.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const i=t.valueOf(),o=this.setZone(t.zone,{keepLocalTime:!0});return o.startOf(r,n)<=i&&i<=o.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||ge.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],o=t.unit;return Array.isArray(t.unit)&&(i=t.unit,o=void 0),ny(r,this.plus(n),{...t,numeric:"always",units:i,unit:o})}toRelativeCalendar(t={}){return this.isValid?ny(t.base||ge.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(ge.isDateTime))throw new xr("min requires all arguments be DateTimes");return Ub(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(ge.isDateTime))throw new xr("max requires all arguments be DateTimes");return Ub(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:i=null,numberingSystem:o=null}=n,s=Je.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});return Sw(s,t,r)}static fromStringExplain(t,r,n={}){return ge.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:i=null}=r,o=Je.fromOpts({locale:n,numberingSystem:i,defaultToEN:!0});return new Cw(o,t)}static fromFormatParser(t,r,n={}){if(he(t)||he(r))throw new xr("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:o=null}=n,s=Je.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});if(!s.equals(r.locale))throw new xr(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${r.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:d}=r.explainFromTokens(t);return d?ge.invalid(d):js(a,u,n,`format ${r.format}`,t,l)}static get DATE_SHORT(){return Wc}static get DATE_MED(){return P2}static get DATE_MED_WITH_WEEKDAY(){return $4}static get DATE_FULL(){return I2}static get DATE_HUGE(){return N2}static get TIME_SIMPLE(){return O2}static get TIME_WITH_SECONDS(){return R2}static get TIME_WITH_SHORT_OFFSET(){return B2}static get TIME_WITH_LONG_OFFSET(){return L2}static get TIME_24_SIMPLE(){return _2}static get TIME_24_WITH_SECONDS(){return j2}static get TIME_24_WITH_SHORT_OFFSET(){return z2}static get TIME_24_WITH_LONG_OFFSET(){return U2}static get DATETIME_SHORT(){return q2}static get DATETIME_SHORT_WITH_SECONDS(){return W2}static get DATETIME_MED(){return V2}static get DATETIME_MED_WITH_SECONDS(){return K2}static get DATETIME_MED_WITH_WEEKDAY(){return D4}static get DATETIME_FULL(){return H2}static get DATETIME_FULL_WITH_SECONDS(){return G2}static get DATETIME_HUGE(){return Z2}static get DATETIME_HUGE_WITH_SECONDS(){return Y2}}function uu(e){if(ge.isDateTime(e))return e;if(e&&e.valueOf&&mo(e.valueOf()))return ge.fromJSDate(e);if(e&&typeof e=="object")return ge.fromObject(e);throw new xr(`Unknown datetime argument: ${e}, of type ${typeof e}`)}Intl.DateTimeFormat().resolvedOptions().locale;var J;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(J||(J={}));J.Year,J.Hour,J.Minute,J.Second,J.Millisecond;J.Month,J.Week,J.Day;J.Millisecond,J.Second,J.Minute,J.Hour,J.Day,J.Week,J.Month,J.Year;const oy={min:0,max:23},sy={min:0,max:59},ay={min:0,max:59},uy={min:0,max:999};var pe;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(pe||(pe={}));const yA=[pe.Milliseconds,pe.Seconds,pe.Minutes,pe.Hours,pe.Days,pe.Weeks,pe.Months,pe.Years];pe.Milliseconds+"",pe.Seconds+"",pe.Minutes+"",pe.Hours+"",pe.Days+"",pe.Weeks+"",pe.Months+"",pe.Years+"";pe.Years+"",J.Year,pe.Months+"",J.Month,pe.Weeks+"",J.Week,pe.Days+"",J.Day,pe.Hours+"",J.Hour,pe.Minutes+"",J.Minute,pe.Seconds+"",J.Second,pe.Milliseconds+"",J.Millisecond;J.Year+"",pe.Years,J.Month+"",pe.Months,J.Week+"",pe.Weeks,J.Day+"",pe.Days,J.Hour+"",pe.Hours,J.Minute+"",pe.Minutes,J.Second+"",pe.Seconds,J.Millisecond+"",pe.Milliseconds;function vA(e){return yA.filter(t=>e[t])}function G0(e,{decimalCount:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function wA(e){return G0(Math.max(e-.4,0),{decimalCount:0})}function ly(e){return e===0?0:Math.sign(e)}function la(e,t,r={}){const n={},i={decimalCount:r.decimalCount==null?void 0:Math.round(Math.abs(r.decimalCount))},o=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),a=vA(t).reverse();if(o||s)return a.forEach(d=>{n[d]=o?1/0:-1/0}),n;let u=Ne.fromObject(e).as(pe.Milliseconds);const l=ly(u);return a.forEach((d,f)=>{const h=f===a.length-1;if(d===pe.Milliseconds)n.milliseconds=G0(u,i);else{const g=Ne.fromObject({milliseconds:u}).as(d),m=Math.sign(g),p=Math.abs(g),k=h?G0(p,i):Math.floor(i.decimalCount==null?p:wA(p)),x=k===0?0:k*m;n[d]=x,u-=Ne.fromObject({[d]:x}).as(pe.Milliseconds),l!==ly(u)&&(u=0)}}),n}var $r;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})($r||($r={}));$r.Sunday+"",$r.Monday+"",$r.Tuesday+"",$r.Wednesday+"",$r.Thursday+"",$r.Friday+"",$r.Saturday+"";$r.Sunday,$r.Monday,$r.Tuesday,$r.Wednesday,$r.Thursday,$r.Friday,$r.Saturday;var Kr;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(Kr||(Kr={}));Kr.January,Kr.February,Kr.March,Kr.April,Kr.May,Kr.June,Kr.July,Kr.August,Kr.September,Kr.October,Kr.November,Kr.December;const cy={min:1,max:12},dy={min:1,max:31};function _d(e){const t=new qc,n=Object.values(e).some(i=>i===1/0||i===-1/0)?1/0:la(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}function Pw(...e){const t=e.join(""),r=Id(Array.from(t));return Array.from(r).join("")}function Iw(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function Nw(e,t){const r=Pw([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return Ow(e,r)}function Ow(e,t){const r=Pw(t);return typeof e=="string"?new RegExp(Iw(e),r):new RegExp(e.source,r)}function Rw(e,{caseSensitive:t}){const n="".replaceAll("i","");return Ow(e,n)}function og(e,t=1){return e.split(`
`).map(r=>["    ".repeat(Math.round(t)),r].join("")).join(`
`)}function Bw(e,t){return t?typeof t=="string"?!!new RegExp(Iw(t),"i").exec(e):!!Nw(t,"i").exec(e):!1}class w extends Error{name="AssertionError";constructor(t,r){super(Pa(r,t)||"Assertion failed.")}}const fy={interval:{milliseconds:100},timeout:{seconds:10}},dh=Symbol("not set");async function kA(e,t,r){const{callback:n,extraAssertionArgs:i,failureMessage:o,options:s}=xA(t),a=la(s.timeout,{milliseconds:!0}).milliseconds,u=la(s.interval,{milliseconds:!0});let l=dh,d;async function f(){try{l=r?n():await n(),e(l,...i)}catch(g){l=dh,d=kt(g)}}const h=Date.now();for(;l===dh;)if(await f(),await _d(u),Date.now()-h>=a){const m=`${o?`${o}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw Ia(d,m)}return l}function R(e,t=!1){return((...r)=>kA(e,r,t))}function xA(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:Lw(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Lw(e){return{interval:e?.interval||fy.interval,timeout:e?.timeout||fy.timeout}}const lu={isFalse(e,t){if(e!==!1)throw new w(`'${$(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new w(`'${$(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new w(`'${$(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new w(`'${$(e)}' is not truthy.`,t)}},_w={assert:lu,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new w(`'${$(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new w(`'${$(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new w(`'${$(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new w(`'${$(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:R(lu.isFalse),isFalsy:R(lu.isFalsy),isTrue:R(lu.isTrue),isTruthy:R(lu.isTruthy)}};function $A(e,t,r){if(typeof e=="string"){if(!e.endsWith(t))throw new w(`${$(e)} does not end with ${$(t)}}`,r)}else if(e[e.length-1]!==t)throw new w(`${$(e)} does not end with ${$(t)}}`,r)}function DA(e,t,r){if(typeof e=="string"){if(e.endsWith(t))throw new w(`${$(e)} ends with ${$(t)}}`,r)}else if(e[e.length-1]===t)throw new w(`${$(e)} ends with ${$(t)}}`,r)}function AA(e,t,r){if(typeof e=="string"){if(!e.startsWith(t))throw new w(`${$(e)} does not start with ${$(t)}}`,r)}else if(e[0]!==t)throw new w(`${$(e)} does not start with ${$(t)}}`,r)}function EA(e,t,r){if(typeof e=="string"){if(e.startsWith(t))throw new w(`${$(e)} starts with ${$(t)}}`,r)}else if(e[0]===t)throw new w(`${$(e)} starts with ${$(t)}}`,r)}const cu={endsWith:$A,endsWithout:DA,startsWith:AA,startsWithout:EA},jw={assert:cu,check:{endsWith:((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new w(`${$(e)} does not end with ${$(t)}}`,r)}else if(e[e.length-1]!==t)throw new w(`${$(e)} does not end with ${$(t)}}`,r);return e}),endsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.endsWith(t))throw new w(`${$(e)} ends with ${$(t)}}`,r)}else if(e[e.length-1]===t)throw new w(`${$(e)} ends with ${$(t)}}`,r);return e}),startsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new w(`${$(e)} does not start with ${$(t)}}`,r)}else if(e[0]!==t)throw new w(`${$(e)} does not start with ${$(t)}}`,r);return e}),startsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.startsWith(t))throw new w(`${$(e)} starts with ${$(t)}}`,r)}else if(e[0]===t)throw new w(`${$(e)} starts with ${$(t)}}`,r);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:R(cu.endsWith),endsWithout:R(cu.endsWithout),startsWith:R(cu.startsWith),startsWithout:R(cu.startsWithout)}};function CA(e,t,r){const n=on(t);if(!n.includes(e))throw new w(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}function Ri(e,t){return on(t).includes(e)}const fh={isEnumValue(e,t,r){CA(e,t,r)},isNotEnumValue(e,t,r){const n=on(t);if(n.includes(e))throw new w(`${String(e)} is an enum value in '${n.join(",")}'.`,r)}},zw={assert:fh,check:{isEnumValue:Ri,isNotEnumValue(e,t){return!on(t).includes(e)}},assertWrap:{isEnumValue(e,t,r){const n=on(t);if(!n.includes(e))throw new w(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e},isNotEnumValue(e,t,r){const n=on(t);if(n.includes(e))throw new w(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e}},checkWrap:{isEnumValue(e,t){if(on(t).includes(e))return e},isNotEnumValue(e,t){if(!on(t).includes(e))return e}},waitUntil:{isEnumValue:R(fh.isEnumValue),isNotEnumValue:R(fh.isNotEnumValue)}},hh={entriesEqual(e,t,r){if(!e||typeof e!="object")throw new w(`${$(e)} is not an object.`,r);if(!t||typeof t!="object")throw new w(`${$(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new w(`Entries are not equal at key '${String(i)}'.`,r)})},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))throw new w("Entries are equal.",r)}},Uw={assert:hh,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>{const i=e[n],o=t[n];return i===o})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>{const i=e[n],o=t[n];return i!==o})}},assertWrap:{entriesEqual(e,t,r){if(!e||typeof e!="object")throw new w(`${$(e)} is not an object.`,r);if(!t||typeof t!="object")throw new w(`${$(t)} is not an object.`,r);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new w(`Entries are not equal at key '${String(i)}'.`,r)}),e},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))return e;throw new w("Entries are equal.",r)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const o=e[i],s=t[i];return o===s}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const o=e[i],s=t[i];return o!==s}))return e}},waitUntil:{entriesEqual:R(hh.entriesEqual),notEntriesEqual:R(hh.notEntriesEqual)}};function Gc(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Zu(e,t){if(!(e===t||Gc(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length!==n.length)throw new Error("Values are not JSON equal.");if(!Gc(r,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(o=>{try{Zu(e[o],t[o])}catch(s){throw new Error(`JSON objects are not equal at key '${o}': ${fr(s)}`)}})}throw new Error("Values are not JSON equal.")}}function Fu(e,t){if(e===t||Gc(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length!==n.length||!Gc(r,n)?!1:Object.keys(e).every(o=>Fu(e[o],t[o]))}return!1}const mh={jsonEquals(e,t,r){try{Zu(e,t)}catch(n){throw new w(fr(n),r)}},notJsonEquals(e,t,r){try{Zu(e,t)}catch{return}throw new w("Values are JSON equal.",r)}},qw={assert:mh,check:{jsonEquals(e,t){return Fu(e,t)},notJsonEquals(e,t){return!Fu(e,t)}},assertWrap:{jsonEquals(e,t,r){try{return Zu(e,t),e}catch(n){throw new w(fr(n),r)}},notJsonEquals(e,t,r){try{Zu(e,t)}catch{return e}throw new w("Values are JSON equal.",r)}},checkWrap:{jsonEquals(e,t){if(Fu(e,t))return e},notJsonEquals(e,t){if(!Fu(e,t))return e}},waitUntil:{jsonEquals:R(mh.jsonEquals),notJsonEquals:R(mh.notJsonEquals)}};function hy(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function Ww(){this._key="chai/deep-eql__"+Math.random()+Date.now()}Ww.prototype={get:function(t){return t[this._key]},set:function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})}};var Vw=typeof WeakMap=="function"?WeakMap:Ww;function my(e,t,r){if(!r||ca(e)||ca(t))return null;var n=r.get(e);if(n){var i=n.get(t);if(typeof i=="boolean")return i}return null}function ic(e,t,r,n){if(!(!r||ca(e)||ca(t))){var i=r.get(e);i?i.set(t,n):(i=new Vw,i.set(t,n),r.set(e,i))}}function Vn(e,t,r){if(r&&r.comparator)return gy(e,t,r);var n=Kw(e,t);return n!==null?n:gy(e,t,r)}function Kw(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:ca(e)||ca(t)?!1:null}function gy(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new Vw;var n=r&&r.comparator,i=my(e,t,r.memoize);if(i!==null)return i;var o=my(t,e,r.memoize);if(o!==null)return o;if(n){var s=n(e,t);if(s===!1||s===!0)return ic(e,t,r.memoize,s),s;var a=Kw(e,t);if(a!==null)return a}var u=hy(e);if(u!==hy(t))return ic(e,t,r.memoize,!1),!1;ic(e,t,r.memoize,!0);var l=SA(e,t,u,r);return ic(e,t,r.memoize,l),l}function SA(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return Vn(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return Hw(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return ns(e,t,n);case"RegExp":return TA(e,t);case"Generator":return MA(e,t,n);case"DataView":return ns(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return ns(new Uint8Array(e),new Uint8Array(t),n);case"Set":return py(e,t,n);case"Map":return py(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return PA(e,t,n)}}function TA(e,t){return e.toString()===t.toString()}function py(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],i=[];return e.forEach(function(s,a){n.push([s,a])}),t.forEach(function(s,a){i.push([s,a])}),ns(n.sort(),i.sort(),r)}function ns(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var i=-1;++i<n;)if(Vn(e[i],t[i],r)===!1)return!1;return!0}function MA(e,t,r){return ns(Z0(e),Z0(t),r)}function FA(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}function by(e){if(FA(e))try{return Z0(e[Symbol.iterator]())}catch{return[]}return[]}function Z0(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}function yy(e){var t=[];for(var r in e)t.push(r);return t}function vy(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var i=r[n];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}function Hw(e,t,r,n){var i=r.length;if(i===0)return!0;for(var o=0;o<i;o+=1)if(Vn(e[r[o]],t[r[o]],n)===!1)return!1;return!0}function PA(e,t,r){var n=yy(e),i=yy(t),o=vy(e),s=vy(t);if(n=n.concat(o),i=i.concat(s),n.length&&n.length===i.length)return ns(wy(n).sort(),wy(i).sort())===!1?!1:Hw(e,t,n,r);var a=by(e),u=by(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),ns(a,u,r)):n.length===0&&a.length===0&&i.length===0&&u.length===0}function ca(e){return e===null||typeof e!="object"}function wy(e){return e.map(function(r){return typeof r=="symbol"?r.toString():r})}class ta extends w{name="DiffError";constructor(t,r,n,i){const o=g4(r,n);super([t,og(o)].join(`
`),i)}}function so(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const io={strictEquals(e,t,r){if(e!==t)throw typeof e=="object"&&e||typeof t=="object"&&t?new w(`Strict reference equality failed for 

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

`,r)},deepEquals(e,t,r){if(!Vn(e,t,{comparator:so}))throw new ta("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(Vn(e,t,{comparator:so}))throw new w(`

${$(e)}

deeply equals

${$(t)}

`,r)}},Gw=io.deepEquals,Zw={assert:io,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return Vn(e,t,{comparator:so})},notDeepEquals(e,t){return!Vn(e,t,{comparator:so})}},assertWrap:{strictEquals(e,t,r){if(e===t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new w(`Strict reference equality failed for 

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

`,r);return e},deepEquals(e,t,r){if(Vn(e,t,{comparator:so}))return e;throw new ta("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(Vn(e,t,{comparator:so}))throw new w(`

${$(e)}

deeply equals

${$(t)}

`,r);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(Vn(e,t,{comparator:so}))return e},notDeepEquals(e,t){if(!Vn(e,t,{comparator:so}))return e}},waitUntil:{strictEquals:R(io.strictEquals),notStrictEquals:R(io.notStrictEquals),looseEquals:R(io.looseEquals),notLooseEquals:R(io.notLooseEquals),deepEquals:R(io.deepEquals),notDeepEquals:R(io.notDeepEquals)}};function nn(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let r=!0;try{r=Reflect.ownKeys(e).map(n=>e[n]).includes(t)}catch{return!1}return r}function Cn(e,t){return typeof t=="string"?t.includes(e):nn(t,e)}const Ii={hasValue(e,t,r){if(!nn(e,t))throw new w(`'${$(e)}' does not have value '${$(t)}'.`,r)},lacksValue(e,t,r){if(nn(e,t))throw new w(`'${$(e)}' has value '${$(t)}'.`,r)},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>!i.includes(o))}catch{throw new w(`'${$(e)}' does not have values '${$(t)}'.`,r)}if(n.length)throw new w(`'${$(e)}' does not have values '${$(n)}'.`,r)},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>i.includes(o))}catch{}if(n.length)throw new w(`'${$(e)}' has values '${$(n)}'.`,r)},isIn(e,t,r){if(!Cn(e,t))throw new w(`'${$(e)}'

is not in

${$(t)}.`,r)},isNotIn(e,t,r){if(Cn(e,t))throw new w(`'${$(e)}'

is in

${$(t)}.`,r)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new w(`'${$(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new w(`'${$(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new w(`'${$(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new w(`'${$(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new w(`'${$(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new w(`'${$(e)}' is not empty.`,t)}}},Yw={assert:Ii,check:{hasValue(e,t){return nn(e,t)},lacksValue(e,t){return!nn(e,t)},hasValues(e,t){return t.every(r=>nn(e,r))},lacksValues(e,t){return t.every(r=>!nn(e,r))},isIn(e,t){return Cn(e,t)},isNotIn(e,t){return!Cn(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,r){if(!nn(e,t))throw new w(`'${$(e)}' does not have value '${$(t)}'.`,r);return e},lacksValue(e,t,r){if(nn(e,t))throw new w(`'${$(e)}' has value '${$(t)}'.`,r);return e},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>!i.includes(o))}catch{throw new w(`'${$(e)}' does not have values '${$(t)}'.`,r)}if(n.length)throw new w(`'${$(e)}' does not have values '${$(n)}'.`,r);return e},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>i.includes(o))}catch{}if(n.length)throw new w(`'${$(e)}' has values '${$(n)}'.`,r);return e},isIn(e,t,r){if(!Cn(e,t))throw new w(`'${$(e)}'

is not in

${$(t)}.`,r);return e},isNotIn(e,t,r){if(Cn(e,t))throw new w(`'${$(e)}'

is in

${$(t)}.`,r);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new w(`'${$(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new w(`'${$(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new w(`'${$(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new w(`'${$(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new w(`'${$(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new w(`'${$(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(nn(e,t))return e},lacksValue(e,t){if(!nn(e,t))return e},hasValues(e,t){if(t.every(r=>nn(e,r)))return e},lacksValues(e,t){if(!t.every(r=>nn(e,r)))return e},isIn(e,t){if(Cn(e,t))return e},isNotIn(e,t){if(!Cn(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:R(Ii.hasValue),lacksValue:R(Ii.lacksValue),hasValues:R(Ii.hasValues),lacksValues:R(Ii.lacksValues),isIn:R(Ii.isIn),isNotIn:R(Ii.isNotIn),isEmpty:R(Ii.isEmpty),isNotEmpty:R(Ii.isNotEmpty)}},gh={isHttpStatus(e,t){if(!Ri(e,F))throw new w(`${$(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,r){if(Ri(e,F)){if(!Cn(e,Sc[t]))throw new w(`${$(e)} is not a '${t}' HTTP status.`,r)}else throw new w(`${$(e)} is not a valid HTTP status.`,r)}},Jw={assert:gh,check:{isHttpStatus(e){return Ri(e,F)},isHttpStatusCategory(e,t){return Ri(e,F)&&Cn(e,Sc[t])}},assertWrap:{isHttpStatus(e,t){if(!Ri(e,F))throw new w(`${$(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,r){if(Ri(e,F)){if(!Cn(e,Sc[t]))throw new w(`${$(e)} is not a '${t}' HTTP status.`,r)}else throw new w(`${$(e)} is not a valid HTTP status.`,r);return e}},checkWrap:{isHttpStatus(e){if(Ri(e,F))return e},isHttpStatusCategory(e,t){if(Ri(e,F)&&Cn(e,Sc[t]))return e}},waitUntil:{isHttpStatus:R(gh.isHttpStatus),isHttpStatusCategory:R(gh.isHttpStatusCategory)}},ph={instanceOf(e,t,r){if(!(e instanceof t))throw new w(`'${$(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new w(`'${$(e)}' is an instance of '${t.name}'`,r)}},Xw={assert:ph,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,r){if(e instanceof t)return e;throw new w(`'${$(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new w(`'${$(e)}' is an instance of '${t.name}'`,r);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:R(ph.instanceOf),notInstanceOf:R(ph.notInstanceOf)}},IA=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function dt(e,t){return IA.some(r=>{try{return r(e,t)}catch{return!1}})}const qo={isKeyOf(e,t,r){if(!dt(t,e))throw new w(`'${String(e)}' is not a key of '${$(t)}'.`,r)},isNotKeyOf(e,t,r){if(dt(t,e))throw new w(`'${String(e)}' is a key of '${$(t)}'.`,r)},hasKey(e,t,r){if(!dt(e,t))throw new w(`'${$(e)}' does not have key '${String(t)}'.`,r)},lacksKey(e,t,r){if(dt(e,t))throw new w(`'${$(e)}' has key '${String(t)}'.`,r)},hasKeys(e,t,r){const n=t.filter(i=>!dt(e,i));if(n.length)throw new w(`'${$(e)}' does not have keys '${n.join(",")}'.`,r)},lacksKeys(e,t,r){const n=t.filter(i=>dt(e,i));if(n.length)throw new w(`'${$(e)}' does not lack keys '${n.join(",")}'.`,r)}},Qw={assert:qo,check:{isKeyOf(e,t){return dt(t,e)},isNotKeyOf(e,t){return!dt(t,e)},hasKey:dt,lacksKey(e,t){return!dt(e,t)},hasKeys(e,t){return t.every(r=>dt(e,r))},lacksKeys(e,t){return t.every(r=>!dt(e,r))}},assertWrap:{isKeyOf(e,t,r){if(!dt(t,e))throw new w(`'${String(e)}' is not a key of '${$(t)}'.`,r);return e},isNotKeyOf(e,t,r){if(dt(t,e))throw new w(`'${String(e)}' is a key of '${$(t)}'.`,r);return e},hasKey(e,t,r){if(!dt(e,t))throw new w(`'${$(e)}' does not have key '${String(t)}'.`,r);return e},lacksKey(e,t,r){if(dt(e,t))throw new w(`'${$(e)}' has key '${String(t)}'.`,r);return e},hasKeys(e,t,r){const n=t.filter(i=>!dt(e,i));if(n.length)throw new w(`'${$(e)}' does not have keys '${n.join(",")}'.`,r);return e},lacksKeys(e,t,r){const n=t.filter(i=>dt(e,i));if(n.length)throw new w(`'${$(e)}' does not lack keys '${n.join(",")}'.`,r);return e}},checkWrap:{isKeyOf(e,t){if(dt(t,e))return e},isNotKeyOf(e,t){if(!dt(t,e))return e},hasKey(e,t){if(dt(e,t))return e},lacksKey(e,t){if(!dt(e,t))return e},hasKeys(e,t){if(t.every(r=>dt(e,r)))return e},lacksKeys(e,t){if(t.every(r=>!dt(e,r)))return e}},waitUntil:{isKeyOf:R(qo.isKeyOf),isNotKeyOf:R(qo.isNotKeyOf),hasKey:R(qo.hasKey),lacksKey:R(qo.lacksKey),hasKeys:R(qo.hasKeys),lacksKeys:R(qo.lacksKeys)}};function NA(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)<t)throw new w(`Length '${e.length}' is not at least '${t}'.`,r)}function OA(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)!==t)throw new w(`Length '${e.length}' is not exactly '${t}'.`,r)}const bh={isLengthAtLeast:NA,isLengthExactly:OA},ek={assert:bh,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)<t)throw new w(`Length '${e.length}' is not at least '${t}'.`,r);return e}),isLengthExactly:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)!==t)throw new w(`Length '${e.length}' is not exactly '${t}'.`,r);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)===t)return e})},waitUntil:{isLengthAtLeast:R(bh.isLengthAtLeast),isLengthExactly:R(bh.isLengthExactly)}},RA={never(e){throw new w("This code should not have executed.",e)}},tk={assert:RA,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},yh={isDefined(e,t){if(e==null)throw new w(`'${$(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new w(`'${$(e)}' is not a nullish.`,t)}},rk={assert:yh,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new w(`'${$(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new w(`'${$(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:R(yh.isDefined),isNullish:R(yh.isNullish)}},Wr={isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new w(`${e} is not within the bounds ${$({min:r,max:t})}`,n)},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new w(`${e} is not outside the bounds ${$({min:t,max:r})}`,n)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new w(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new w(`${e} is an integer.`,t)},isAbove(e,t,r){if(e<=t)throw new w(`${e} is not above ${t}`,r)},isAtLeast(e,t,r){if(e<t)throw new w(`${e} is not at least ${t}`,r)},isBelow(e,t,r){if(e>=t)throw new w(`${e} is not below ${t}`,r)},isAtMost(e,t,r){if(e>t)throw new w(`${e} is not at most ${t}`,r)},isNaN(e,t){if(!isNaN(e))throw new w(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new w(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new w(`${e} is not infinite`,t)},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new w(`${e} is not within ±${r} of ${t}`,n)},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new w(`${e} is within ±${r} of ${t}`,n)}},nk={assert:Wr,check:{isInBounds(e,{max:t,min:r}){return r<=e&&e<=t},isOutBounds(e,{max:t,min:r}){return e<r||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,r){return t-r<=e&&e<=t+r},isNotApproximately(e,t,r){return e<t-r||e>t+r}},assertWrap:{isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new w(`${e} is not within the bounds ${$({min:r,max:t})}`,n);return e},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new w(`${e} is not outside the bounds ${$({min:t,max:r})}`,n);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new w(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new w(`${e} is an integer.`,t);return e},isAbove(e,t,r){if(e<=t)throw new w(`${e} is not above ${t}`,r);return e},isAtLeast(e,t,r){if(e<t)throw new w(`${e} is not at least ${t}`,r);return e},isBelow(e,t,r){if(e>=t)throw new w(`${e} is not below ${t}`,r);return e},isAtMost(e,t,r){if(e>t)throw new w(`${e} is not at most ${t}`,r);return e},isNaN(e,t){if(!isNaN(e))throw new w(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new w(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new w(`${e} is not infinite`,t);return e},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new w(`${e} is not within ±${r} of ${t}`,n);return e},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new w(`${e} is within ±${r} of ${t}`,n);return e}},checkWrap:{isInBounds(e,{max:t,min:r}){if(r<=e&&e<=t)return e},isOutBounds(e,{max:t,min:r}){if(e<r||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,r){if(t-r<=e&&e<=t+r)return e},isNotApproximately(e,t,r){if(e<t-r||e>t+r)return e}},waitUntil:{isInBounds:R(Wr.isInBounds),isOutBounds:R(Wr.isOutBounds),isInteger:R(Wr.isInteger),isNotInteger:R(Wr.isNotInteger),isAbove:R(Wr.isAbove),isAtLeast:R(Wr.isAtLeast),isBelow:R(Wr.isBelow),isAtMost:R(Wr.isAtMost),isNaN:R(Wr.isNaN),isFinite:R(Wr.isFinite),isInfinite:R(Wr.isInfinite),isApproximately:R(Wr.isApproximately),isNotApproximately:R(Wr.isNotApproximately)}};function BA(e,t,r,n,i){return xl(...jd(e,t,r,n,i),!1)}function jd(e,t,r,n,i){const o=Array.isArray(r);return[o?e:Gw,o?t:e,o?r:t,o?n:r,o?i:n]}function xl(e,t,r,n,i,o){const s=t(...r);if(s instanceof Promise)return new Promise(async(a,u)=>{try{const l=await s;e(l,n),o?a(l):a()}catch(l){u(new w(`Output from '${t.name}' did not produce expected output. ${fr(l)}`,i))}});try{return e(s,n),o?s:void 0}catch(a){throw new w(`Output from '${t.name}' did not produce expected output. ${fr(a)}`,i)}}function LA(e,t,r,n,i){try{const o=xl(...jd(e,t,r,n,i),!1);return o instanceof Promise?new Promise(async s=>{try{await o,s(!0)}catch{s(!1)}}):!0}catch{return!1}}function _A(e,t,r,n,i){return xl(...jd(e,t,r,n,i),!0)}function jA(e,t,r,n,i){try{const o=xl(...jd(e,t,r,n,i),!0);return o instanceof Promise?new Promise(async s=>{try{s(await o)}catch{s(void 0)}}):o}catch{return}}const vh=Symbol("not set");async function zA(e,t,r,n,i,o){const s=Array.isArray(r),a=s?e:Gw,u=s?t:e,l=s?r:t,d=s?n:r,f=Lw(s?i:n),h=s?o:i,g=la(f.timeout,{milliseconds:!0}).milliseconds,m=la(f.interval,{milliseconds:!0});let p=vh,k;async function x(){try{p=await xl(a,u,l,d,void 0,!0)}catch(C){p=vh,k=kt(C)}}const D=Date.now();for(;p===vh;)if(await x(),await _d(m),Date.now()-D>=g)throw Ia(k,Pa(h,`Timeout of '${g}' milliseconds exceeded waiting for callback value to match expectations`));return p}const UA={output:BA},ik={assert:UA,check:{output:LA},assertWrap:{output:_A},checkWrap:{output:jA},waitUntil:{output:zA}},du={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new w(`'${$(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new w(`'${$(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new w(`'${$(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new w(`'${$(e)}' is not a Primitive.`,t)}},ok={assert:du,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new w(`'${$(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new w(`'${$(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new w(`'${$(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new w(`'${$(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:R(du.isNotPrimitive),isNotPropertyKey:R(du.isNotPropertyKey),isPrimitive:R(du.isPrimitive),isPropertyKey:R(du.isPropertyKey)}},fu={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new w(`'${$(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new w(`'${$(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new w(`'${$(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new w(`'${$(e)}' is a Promise.`,t)}},sk={assert:fu,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new w(`'${$(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new w(`'${$(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new w(`'${$(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new w(`'${$(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:R(fu.isPromiseLike,!0),isNotPromiseLike:R(fu.isNotPromiseLike,!0),isPromise:R(fu.isPromise,!0),isNotPromise:R(fu.isNotPromise,!0)}},wh={matches(e,t,r){if(!t.test(e))throw new w(`'${e}' does not match ${t}`,r)},mismatches(e,t,r){if(t.test(e))throw new w(`'${e}' matches ${t}`,r)}},ak={assert:wh,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,r){if(!t.test(e))throw new w(`'${e}' does not match ${t}`,r);return e},mismatches(e,t,r){if(t.test(e))throw new w(`'${e}' matches ${t}`,r);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:R(wh.matches,!0),mismatches:R(wh.mismatches,!0)}},ht={isArray(e,t){if(!Array.isArray(e))throw new w(`'${$(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new w(`'${$(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new w(`'${$(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new w(`'${$(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new w(`'${$(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new w(`'${$(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new w(`'${$(e)}' is not a non-null object.`,t)},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new w(`'${$(e)}' is not a plain object.`,t)},isString(e,t){if(typeof e!="string")throw new w(`'${$(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new w(`'${$(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new w(`'${$(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new w(`'${$(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new w(`'${$(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new w(`'${$(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new w(`'${$(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new w(`'${$(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new w(`'${$(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new w(`'${$(e)}' is a non-null object.`,t)},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(!(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new w(`'${$(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new w(`'${$(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new w(`'${$(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new w(`'${$(e)}' is a undefined.`,t)}},uk={assert:ht,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isPlainObject(e){if(typeof e!="object"||e==null)return!1;const t=Object.getPrototypeOf(e);return(t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotPlainObject(e){if(typeof e!="object"||e==null)return!0;const t=Object.getPrototypeOf(e);return!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new w(`'${$(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new w(`'${$(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new w(`'${$(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new w(`'${$(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new w(`'${$(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new w(`'${$(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new w(`'${$(e)}' is not a non-null object.`,t);return e},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new w(`'${$(e)}' is not a plain object.`,t);return e},isString(e,t){if(typeof e!="string")throw new w(`'${$(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new w(`'${$(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new w(`'${$(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new w(`'${$(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new w(`'${$(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new w(`'${$(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new w(`'${$(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new w(`'${$(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new w(`'${$(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new w(`'${$(e)}' is a non-null object.`,t);return e},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new w(`'${$(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new w(`'${$(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new w(`'${$(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new w(`'${$(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number"&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isPlainObject(e){if(typeof e!="object"||e==null)return;const t=Object.getPrototypeOf(e);if((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e=="number"&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotPlainObject(e){if(typeof e!="object"||e==null)return e;const t=Object.getPrototypeOf(e);if(!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:R(ht.isArray),isBigInt:R(ht.isBigInt),isBoolean:R(ht.isBoolean),isFunction:R(ht.isFunction),isNull:R(ht.isNull),isNumber:R(ht.isNumber),isObject:R(ht.isObject),isPlainObject:R(ht.isPlainObject),isString:R(ht.isString),isSymbol:R(ht.isSymbol),isUndefined:R(ht.isUndefined),isNotArray:R(ht.isNotArray),isNotBigInt:R(ht.isNotBigInt),isNotBoolean:R(ht.isNotBoolean),isNotFunction:R(ht.isNotFunction),isNotNull:R(ht.isNotNull),isNotNumber:R(ht.isNotNumber),isNotObject:R(ht.isNotObject),isNotPlainObject:R(ht.isNotPlainObject),isNotString:R(ht.isNotString),isNotSymbol:R(ht.isNotSymbol),isNotUndefined:R(ht.isNotUndefined)}};var Hr;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Hr||(Hr={}));function sg(e,t,r){ag(e,{noError:"No error.",notInstance:`'${$(e)}' is not an error instance.`},t,r)}function ky(e,t,r){ag(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${$(e)}' is not an error instance.`},t,r)}function ag(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const i=e.constructor.name;throw new w(`Error constructor '${i}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const i=fr(e);if(typeof r.matchMessage=="string"){if(!Bw(i,r.matchMessage))throw new w(`Error message

'${i}'

does not contain

'${r.matchMessage}'.`,n)}else if(!i.match(r.matchMessage))throw new w(`Error message

'${i}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new w(t.notInstance,n);else throw new w(t.noError,n)}function xy(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const r=fr(e);if(typeof t.matchMessage=="string"){if(!Bw(r,t.matchMessage))return!1}else if(!r.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function zd(e,t,r,n){let i;try{const o=t instanceof Promise?t:t();if(o instanceof Promise)return new Promise(async(s,a)=>{try{await o}catch(u){i=kt(u)}try{ky(i,r,n),e===Hr.Assert?s():e===Hr.Check?s(!0):s(i)}catch(u){e===Hr.CheckWrap?s(void 0):e===Hr.Check?s(!1):a(kt(u))}})}catch(o){i=kt(o)}try{return ky(i,r,n),e===Hr.Check?!0:e!==Hr.Assert?i:void 0}catch(o){if(e===Hr.CheckWrap)return;if(e===Hr.Check)return!1;throw o}}function qA(e,t,r){return zd(Hr.Assert,e,t,r)}function WA(e,t){return zd(Hr.Check,e,t)}function VA(e,t,r){return zd(Hr.AssertWrap,e,t,r)}function KA(e,t,r){return zd(Hr.CheckWrap,e,t,r)}const HA=R(sg);function GA(e,t,r,n){const i=typeof e=="function"||e instanceof Promise?void 0:e,o=i?t:e,s=typeof r=="object"?n:r,a=typeof r=="object"?r:t;if(typeof o!="function")throw new TypeError(`Callback is not a function, got '${$(o)}'`);return HA(i,async()=>{try{await o();return}catch(u){return kt(u)}},a,s)}const ZA={throws:qA,isError:sg},lk={assert:ZA,check:{throws:WA,isError(e,t){return xy(e,t)}},assertWrap:{throws:VA,isError(e,t,r){return ag(e,{noError:"No error.",notInstance:`'${$(e)}' is not an error instance.`},t,r),e}},checkWrap:{throws:KA,isError(e,t){if(xy(e,t))return e}},waitUntil:{throws:GA,isError:R(sg)}},ao=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,kh={isUuid(e,t){if(!String(e).match(ao))throw new w(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(ao))throw new w(`'${String(e)}' is a UUID.`,t)}},ck={assert:kh,check:{isUuid(e){return!!String(e).match(ao)},isNotUuid(e){return!String(e).match(ao)}},assertWrap:{isUuid(e,t){if(!String(e).match(ao))throw new w(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(ao))throw new w(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(ao))return e},isNotUuid(e){if(!String(e).match(ao))return e}},waitUntil:{isUuid:R(kh.isUuid),isNotUuid:R(kh.isNotUuid)}},YA={...tk.assert,..._w.assert,...jw.assert,...Uw.assert,...zw.assert,...Jw.assert,...Xw.assert,...qw.assert,...Qw.assert,...ek.assert,...rk.assert,...nk.assert,...ik.assert,...ok.assert,...sk.assert,...ak.assert,...uk.assert,...Zw.assert,...lk.assert,...ck.assert,...Yw.assert},ug=[_w,jw,Uw,zw,Jw,Xw,qw,Qw,ek,tk,rk,nk,ik,ok,sk,ak,uk,Zw,lk,ck,Yw],JA=Object.assign({},...ug.map(e=>e.check)),T=Object.assign(function(t){return!!t},JA);function XA(e,t,r){return Pc(e,t,r,new Set)}function Pc(e,t,r,n){if(e=$y(e),t=$y(t),T.isObject(e)&&T.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!Pc(tt(e).sort(),tt(t).sort(),r,n))return!1;let i=!1;const o=tt(e).map(s=>{const a=Pc(e[s],t[s],r,n);return T.isPromise(a)&&(i=!0),a});return Dy(i,o)}else if(T.isArray(e)&&T.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let i=!1;const o=e.map((s,a)=>{const u=Pc(s,t[a],r,n);return T.isPromise(u)&&(i=!0),u});return Dy(i,o)}else return r(e,t)}function $y(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function Dy(e,t){return e?new Promise(async(r,n)=>{try{const i=await Promise.all(t);r(i.every(T.isTrue))}catch(i){n(kt(i))}}):t.every(T.isTrue)}const QA=Object.assign({},...ug.map(e=>e.assertWrap)),Qt=Object.assign(function(t,r){if(!t)throw new w("Assertion failed.",r);return t},QA);function eE(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const tE={tsType:eE},rE={assert:tE},nE={fail:e=>{throw new w("Failure triggered.",e)}},iE={...rE.assert,...YA,...nE},It=Object.assign(function(t,r){if(!t)throw new w("Assertion failed.",r)},iE),oE=Object.assign({},...ug.map(e=>e.checkWrap)),lg=Object.assign(function(t){if(t)return t},oE);function sE(e,t){return T.hasKey(e,"entryType")&&e.entryType===t}function Wo(e,t){return e.controlType===t}var qt;(function(e){e.Checkbox="checkbox",e.Color="color",e.Custom="custom",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(qt||(qt={}));const dk=Symbol("any-type"),aE={[qt.Checkbox]:!1,[qt.Color]:"",[qt.Custom]:void 0,[qt.Dropdown]:"",[qt.Hidden]:dk,[qt.Number]:0,[qt.Text]:""};function uE(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,i])=>{if(i.controlType===qt.Custom)return;const o=aE[i.controlType];o!==dk&&(typeof o!=typeof i.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof o} because the control is of type ${i.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function lE(e,t,r){const n=t;if(e.has(n))return e.get(n);{const i=r();return T.isPromise(i)?new Promise(async(o,s)=>{try{const a=await i;e.set(n,a),o(a)}catch(a){s(kt(a))}}):(e.set(n,i),i)}}function La(e,t,r){if(t in e)return e[t];{const n=r();return T.isPromise(n)?new Promise(async(i,o)=>{try{const s=await n;e[t]=s,i(s)}catch(s){o(kt(s))}}):(e[t]=n,n)}}function ki(e){return tt(e).map(t=>[t,e[t]])}function Yu(e){return Object.fromEntries(e)}function Vt(e,t,r){return e.reduce((n,i,o,s)=>{const a=t(i,o,s);return r(a,i,o,s)&&n.push(a),n},[])}function wo(e,t,r={}){try{let n=!1;const i=e.map((o,s,a)=>{const u=t(o,s,a);return u instanceof Promise?(n=!0,u):u?[u.key,u.value]:void 0}).filter(T.isTruthy);return n?new Promise(async(o,s)=>{try{const a=Vt(await Promise.all(i),u=>{if(u)return Array.isArray(u)?u:[u.key,u.value]},T.isTruthy);o(Yu(a))}catch(a){s(kt(a))}}):Yu(i)}catch(n){throw kt(n)}}function cg(e,t){const r=[];let n=!1;for(let i=0;i<e;i++){const o=t(i);T.isPromise(o)&&(n=!0),r.push(o)}return n?Promise.all(r):r}function Zc(e){return Array.isArray(e)?e:[e]}function cE({min:e,max:t}){const{min:r,max:n}=Ym({min:Math.floor(e),max:Math.floor(t)}),i=n-r+1,o=Math.ceil(Math.log2(i)),s=Math.ceil(o/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const a=Math.floor(256**s/i)*i,u=new Uint8Array(s);let l;do crypto.getRandomValues(u),l=u.reduce((d,f,h)=>d+f*256**h,0);while(l>=a);return r+l%i}const Ay=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];function ra(e=16){let t="";for(let r=0;r<e;r++){const n=cE({min:0,max:Ay.length-1});t+=Ay[n]}return t}function fk(e){if(T.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>fr(t).trim()).join(`
`))}function hk(e,t={}){try{const r=e();return r instanceof Promise?r.catch(n=>t.handleError?t.handleError(n):T.hasKey(t,"fallbackValue")?t.fallbackValue:kt(n)):r}catch(r){return t.handleError?t.handleError(r):T.hasKey(t,"fallbackValue")?t.fallbackValue:kt(r)}}const{hasOwnProperty:$l}=Object.prototype,dE=/[\u0000-\u001f\u0022\u005c\ud800-\udfff]/;function no(e){return e.length<5e3&&!dE.test(e)?`"${e}"`:JSON.stringify(e)}function xh(e,t){if(e.length>200||t)return e.sort(t);for(let r=1;r<e.length;r++){const n=e[r];let i=r;for(;i!==0&&e[i-1]>n;)e[i]=e[i-1],i--;e[i]=n}return e}const fE=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Object.getPrototypeOf(new Int8Array)),Symbol.toStringTag).get;function $h(e){return fE.call(e)!==void 0&&e.length!==0}function Ey(e,t,r){e.length<r&&(r=e.length);const n=t===","?"":" ";let i=`"0":${n}${e[0]}`;for(let o=1;o<r;o++)i+=`${t}"${o}":${n}${e[o]}`;return i}function hE(e){if($l.call(e,"circularValue")){const t=e.circularValue;if(typeof t=="string")return`"${t}"`;if(t==null)return t;if(t===Error||t===TypeError)return{toString(){throw new TypeError("Converting circular structure to JSON")}};throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined')}return'"[Circular]"'}function mE(e){let t;if($l.call(e,"deterministic")&&(t=e.deterministic,typeof t!="boolean"&&typeof t!="function"))throw new TypeError('The "deterministic" argument must be of type boolean or comparator function');return t===void 0?!0:t}function gE(e,t){let r;if($l.call(e,t)&&(r=e[t],typeof r!="boolean"))throw new TypeError(`The "${t}" argument must be of type boolean`);return r===void 0?!0:r}function Cy(e,t){let r;if($l.call(e,t)){if(r=e[t],typeof r!="number")throw new TypeError(`The "${t}" argument must be of type number`);if(!Number.isInteger(r))throw new TypeError(`The "${t}" argument must be an integer`);if(r<1)throw new RangeError(`The "${t}" argument must be >= 1`)}return r===void 0?1/0:r}function Vo(e){return e===1?"1 item":`${e} items`}function pE(e){const t=new Set;for(const r of e)(typeof r=="string"||typeof r=="number")&&t.add(String(r));return t}function bE(e){if($l.call(e,"strict")){const t=e.strict;if(typeof t!="boolean")throw new TypeError('The "strict" argument must be of type boolean');if(t)return r=>{let n=`Object can not safely be stringified. Received type ${typeof r}`;throw typeof r!="function"&&(n+=` (${r.toString()})`),new Error(n)}}}function yE(e){e={...e};const t=bE(e);t&&(e.bigint===void 0&&(e.bigint=!1),"circularValue"in e||(e.circularValue=Error));const r=hE(e),n=gE(e,"bigint"),i=mE(e),o=typeof i=="function"?i:void 0,s=Cy(e,"maximumDepth"),a=Cy(e,"maximumBreadth");function u(g,m,p,k,x,D){let C=m[g];switch(typeof C=="object"&&C!==null&&typeof C.toJSON=="function"&&(C=C.toJSON(g)),C=k.call(m,g,C),typeof C){case"string":return no(C);case"object":{if(C===null)return"null";if(p.includes(C))return r;let P="",O=",";const H=D;if(Array.isArray(C)){if(C.length===0)return"[]";if(s<p.length+1)return'"[Array]"';p.push(C),x!==""&&(D+=x,P+=`
${D}`,O=`,
${D}`);const xe=Math.min(C.length,a);let ze=0;for(;ze<xe-1;ze++){const yr=u(String(ze),C,p,k,x,D);P+=yr===void 0?"null":yr,P+=O}const Ge=u(String(ze),C,p,k,x,D);if(P+=Ge===void 0?"null":Ge,C.length-1>a){const yr=C.length-a-1;P+=`${O}"... ${Vo(yr)} not stringified"`}return x!==""&&(P+=`
${H}`),p.pop(),`[${P}]`}let ee=Object.keys(C);const ne=ee.length;if(ne===0)return"{}";if(s<p.length+1)return'"[Object]"';let X="",ye="";x!==""&&(D+=x,O=`,
${D}`,X=" ");const se=Math.min(ne,a);i&&!$h(C)&&(ee=xh(ee,o)),p.push(C);for(let xe=0;xe<se;xe++){const ze=ee[xe],Ge=u(ze,C,p,k,x,D);Ge!==void 0&&(P+=`${ye}${no(ze)}:${X}${Ge}`,ye=O)}if(ne>a){const xe=ne-a;P+=`${ye}"...":${X}"${Vo(xe)} not stringified"`,ye=O}return x!==""&&ye.length>1&&(P=`
${D}${P}
${H}`),p.pop(),`{${P}}`}case"number":return isFinite(C)?String(C):t?t(C):"null";case"boolean":return C?"true":"false";case"undefined":return;case"bigint":if(n)return String(C);default:return t?t(C):void 0}}function l(g,m,p,k,x,D){switch(typeof m=="object"&&m!==null&&typeof m.toJSON=="function"&&(m=m.toJSON(g)),typeof m){case"string":return no(m);case"object":{if(m===null)return"null";if(p.includes(m))return r;const C=D;let P="",O=",";if(Array.isArray(m)){if(m.length===0)return"[]";if(s<p.length+1)return'"[Array]"';p.push(m),x!==""&&(D+=x,P+=`
${D}`,O=`,
${D}`);const ne=Math.min(m.length,a);let X=0;for(;X<ne-1;X++){const se=l(String(X),m[X],p,k,x,D);P+=se===void 0?"null":se,P+=O}const ye=l(String(X),m[X],p,k,x,D);if(P+=ye===void 0?"null":ye,m.length-1>a){const se=m.length-a-1;P+=`${O}"... ${Vo(se)} not stringified"`}return x!==""&&(P+=`
${C}`),p.pop(),`[${P}]`}p.push(m);let H="";x!==""&&(D+=x,O=`,
${D}`,H=" ");let ee="";for(const ne of k){const X=l(ne,m[ne],p,k,x,D);X!==void 0&&(P+=`${ee}${no(ne)}:${H}${X}`,ee=O)}return x!==""&&ee.length>1&&(P=`
${D}${P}
${C}`),p.pop(),`{${P}}`}case"number":return isFinite(m)?String(m):t?t(m):"null";case"boolean":return m?"true":"false";case"undefined":return;case"bigint":if(n)return String(m);default:return t?t(m):void 0}}function d(g,m,p,k,x){switch(typeof m){case"string":return no(m);case"object":{if(m===null)return"null";if(typeof m.toJSON=="function"){if(m=m.toJSON(g),typeof m!="object")return d(g,m,p,k,x);if(m===null)return"null"}if(p.includes(m))return r;const D=x;if(Array.isArray(m)){if(m.length===0)return"[]";if(s<p.length+1)return'"[Array]"';p.push(m),x+=k;let X=`
${x}`;const ye=`,
${x}`,se=Math.min(m.length,a);let xe=0;for(;xe<se-1;xe++){const Ge=d(String(xe),m[xe],p,k,x);X+=Ge===void 0?"null":Ge,X+=ye}const ze=d(String(xe),m[xe],p,k,x);if(X+=ze===void 0?"null":ze,m.length-1>a){const Ge=m.length-a-1;X+=`${ye}"... ${Vo(Ge)} not stringified"`}return X+=`
${D}`,p.pop(),`[${X}]`}let C=Object.keys(m);const P=C.length;if(P===0)return"{}";if(s<p.length+1)return'"[Object]"';x+=k;const O=`,
${x}`;let H="",ee="",ne=Math.min(P,a);$h(m)&&(H+=Ey(m,O,a),C=C.slice(m.length),ne-=m.length,ee=O),i&&(C=xh(C,o)),p.push(m);for(let X=0;X<ne;X++){const ye=C[X],se=d(ye,m[ye],p,k,x);se!==void 0&&(H+=`${ee}${no(ye)}: ${se}`,ee=O)}if(P>a){const X=P-a;H+=`${ee}"...": "${Vo(X)} not stringified"`,ee=O}return ee!==""&&(H=`
${x}${H}
${D}`),p.pop(),`{${H}}`}case"number":return isFinite(m)?String(m):t?t(m):"null";case"boolean":return m?"true":"false";case"undefined":return;case"bigint":if(n)return String(m);default:return t?t(m):void 0}}function f(g,m,p){switch(typeof m){case"string":return no(m);case"object":{if(m===null)return"null";if(typeof m.toJSON=="function"){if(m=m.toJSON(g),typeof m!="object")return f(g,m,p);if(m===null)return"null"}if(p.includes(m))return r;let k="";const x=m.length!==void 0;if(x&&Array.isArray(m)){if(m.length===0)return"[]";if(s<p.length+1)return'"[Array]"';p.push(m);const H=Math.min(m.length,a);let ee=0;for(;ee<H-1;ee++){const X=f(String(ee),m[ee],p);k+=X===void 0?"null":X,k+=","}const ne=f(String(ee),m[ee],p);if(k+=ne===void 0?"null":ne,m.length-1>a){const X=m.length-a-1;k+=`,"... ${Vo(X)} not stringified"`}return p.pop(),`[${k}]`}let D=Object.keys(m);const C=D.length;if(C===0)return"{}";if(s<p.length+1)return'"[Object]"';let P="",O=Math.min(C,a);x&&$h(m)&&(k+=Ey(m,",",a),D=D.slice(m.length),O-=m.length,P=","),i&&(D=xh(D,o)),p.push(m);for(let H=0;H<O;H++){const ee=D[H],ne=f(ee,m[ee],p);ne!==void 0&&(k+=`${P}${no(ee)}:${ne}`,P=",")}if(C>a){const H=C-a;k+=`${P}"...":"${Vo(H)} not stringified"`}return p.pop(),`{${k}}`}case"number":return isFinite(m)?String(m):t?t(m):"null";case"boolean":return m?"true":"false";case"undefined":return;case"bigint":if(n)return String(m);default:return t?t(m):void 0}}function h(g,m,p){if(arguments.length>1){let k="";if(typeof p=="number"?k=" ".repeat(Math.min(p,10)):typeof p=="string"&&(k=p.slice(0,10)),m!=null){if(typeof m=="function")return u("",{"":g},[],m,k,"");if(Array.isArray(m))return l("",g,[],pE(m),k,"")}if(k.length!==0)return d("",g,[],k,"")}return f("",g,[])}return h}const vE=yE({maximumDepth:15,maximumBreadth:50});function wE(...e){return vE(...e)||""}function qn(e,{enableUnsafeCopyAll:t}={}){try{const r=t?JSON.stringify(e):wE(e);return JSON.parse(r)}catch(r){throw console.error("Failed to JSON copy for",e),r}}const kE="modulepreload",xE=function(e){return"/structured-render/demo/"+e},Sy={},fo=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){let u=function(l){return Promise.all(l.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");i=u(r.map(l=>{if(l=xE(l),l in Sy)return;Sy[l]=!0;const d=l.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":kE,d||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),d)return new Promise((g,m)=>{h.addEventListener("load",g),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return i.then(s=>{for(const a of s||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};var Ut;(function(e){e.Standard="stdout",e.Error="stderr"})(Ut||(Ut={}));var Te;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(Te||(Te={}));async function $E(){return await M2({async[Lr.Node](){const e=(await fo(async()=>{const{default:t}=await import("./index-Bdn9SXqz.js");return{default:t}},[])).default;return{[Te.Bold]:e.bold.open,[Te.Debug]:e.blueBright.open,[Te.Error]:e.red.open,[Te.Faint]:e.gray.open,[Te.Info]:e.cyan.open,[Te.Mutate]:e.magenta.open,[Te.NormalWeight]:"\x1B[22m",[Te.Plain]:"",[Te.Reset]:e.reset.open,[Te.Success]:e.green.open,[Te.Warning]:e.yellow.open}},[Lr.Web](){return Promise.resolve({[Te.Bold]:"font-weight: bold",[Te.Debug]:"color: blue",[Te.Error]:"color: red",[Te.Faint]:"color: grey",[Te.Info]:"color: teal",[Te.Mutate]:"color: magenta",[Te.NormalWeight]:"",[Te.Plain]:"",[Te.Reset]:"",[Te.Success]:"color: green",[Te.Warning]:"color: orange"})}})}const rn=await $E(),DE={[Te.Bold]:{colors:[rn.bold],logType:Ut.Standard},[Te.Debug]:{colors:[rn.debug],logType:Ut.Standard},[Te.Faint]:{colors:[rn.faint],logType:Ut.Standard},[Te.Info]:{colors:[rn.info],logType:Ut.Standard},[Te.Mutate]:{colors:[rn.mutate,rn.bold],logType:Ut.Standard},[Te.NormalWeight]:{colors:[rn.normalWeight],logType:Ut.Standard},[Te.Plain]:{colors:[],logType:Ut.Standard},[Te.Reset]:{colors:[rn.reset],logType:Ut.Standard},[Te.Success]:{colors:[rn.success,rn.bold],logType:Ut.Standard},[Te.Error]:{colors:[rn.error,rn.bold],logType:Ut.Error},[Te.Warning]:{colors:[rn.warning],logType:Ut.Error}};function Rr({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function is({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function mk(e,t){try{let r=!1;const n=ki(e).map(([i,o])=>{const s=t(i,o,e);return s instanceof Promise?(r=!0,s):s?[s.key,s.value]:void 0}).filter(T.isTruthy);return r?new Promise(async(i,o)=>{try{const s=Vt(await Promise.all(n),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},T.isTruthy);i(Yu(s))}catch(s){o(kt(s))}}):Yu(n)}catch(r){throw kt(r)}}function dg(e,t){return mk(e,(r,n)=>{const i=n,o=t(n,e);return o instanceof Promise?o.then(s=>({key:i,value:s})):{key:i,value:o}})}function vs(e,...t){const r={...e};return t.forEach(n=>{n&&ki(n).forEach(([i,o])=>{o!=null&&(r[i]=o)})}),r}const AE="px";function EE(e){return fg({value:e,suffix:AE})}function fg({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function gk({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function CE(){return await M2({async[Lr.Node](){const{inspect:e}=await fo(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:r,options:n})=>{const i=t.map(a=>typeof a=="string"?a:e(a));return{text:[n.omitColors?"":n.colorConfig[r].colors.join(""),i.join(`
`),n.omitColors?"":n.colorConfig[Te.Reset].colors.join("")].join(""),css:void 0}}},[Lr.Web](){return({args:e,colorKey:t,options:r})=>{const n=r.omitColors?void 0:Vt(r.colorConfig[t].colors,s=>gk({value:s,suffix:";"}),T.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?fr(s):$(s)).join(`
`),r.omitColors?"":r.colorConfig[Te.Reset].colors.join("")].join(""),css:n}}}})}const SE=await CE(),TE={colorConfig:DE,omitColors:!1},ME=pk({[Ut.Error](){},[Ut.Standard](){}});function pk(e,t){const r=vs(TE,t);function n(o){e[r.colorConfig[o.colorKey].logType](SE({...o,options:r}))}const i=dg(Te,o=>(...s)=>n({args:s,colorKey:o}));return{...i,if(o){return o?i:ME}}}const FE=bs(Lr.Node)?{[Ut.Error]({text:e}){process.stderr.write(e+`
`)},[Ut.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[Ut.Error]({text:e,css:t}){console.error(Rr({value:e,prefix:"%c"}),t)},[Ut.Standard]({text:e,css:t}){console.log(Rr({value:e,prefix:"%c"}),t)}},Yc=pk(FE);function PE(e,{digits:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function IE({searchIn:e,searchFor:t,caseSensitive:r,includeLength:n}){const i=Nw(Rw(t,{caseSensitive:r}),"g"),o=[];return e.replace(i,(...s)=>{const a=s[s.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const u=s[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);o.push({index:a,length:u.length});const l=s[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return l}),o}function NE(e,t,{caseSensitive:r}){const n=IE({searchIn:e,searchFor:t,caseSensitive:r,includeLength:!0}),i=Rw(t,{caseSensitive:r});return e.split(i).reduce((s,a,u)=>{const l=n[u],d=s.concat(a);if(l){const f=e.slice(l.index,l.index+l.length);return d.concat(f)}else return d},[])}function OE(e,t){return e.split(t)}function Ty(e,t){const{min:r,max:n}=Ym(t);if(t.takeOverflow){const i=n-r+1,o=(e-r)%i;return o<0?r+i+o:r+o}else return e>n?r:e<r?n:e}function lt(e,t){let r=!1;const n=tt(e).reduce((i,o)=>{const s=t(o,e[o],e);return s instanceof Promise&&(r=!0),i[o]=s,i},{});return r?new Promise(async(i,o)=>{try{await Promise.all(tt(n).map(async s=>{const a=await n[s];n[s]=a})),i(n)}catch(s){o(kt(s))}}):n}function Ud(e,t){const r=ki(e).filter(([n,i])=>t(n,i,e));return Yu(r)}function RE(e,t){return Ud(e,r=>t.includes(r))}function Jc(e){return tt(e).map(t=>e[t])}function bk(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}var Ju;(function(e){e.Upper="upper",e.Lower="lower"})(Ju||(Ju={}));const BE={firstLetterCase:Ju.Lower};function LE(e,t){if(!e.length)return"";const r=e[0];return(t===Ju.Upper?r.toUpperCase():r.toLowerCase())+e.slice(1)}function _E(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const s=o[1];return s?s.toUpperCase():""}),i=vs(BE,t);return LE(n,i.firstLetterCase)}function jE(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}function yk({value:e,wrapper:t}){return Rr({value:fg({value:e,suffix:t}),prefix:t})}function si(){function e(t){return class extends CustomEvent{static type=t;constructor(n){super(t,n)}}}return e}function hg(e){return class extends Event{static type=e;constructor(r){super(e,r)}}}class zE{listeners={};universalListeners=new Map;getListenerCount(){return Jc(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)+this.universalListeners.size}listenToAll(t,r={}){const n=()=>this.universalListeners.delete(t)||!1;function i(o,s){r.once&&n(),t(o,s)}return this.universalListeners.set(t,{listener:i,removeListener:n}),n}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,r,n={}){const i=T.isString(t)?t:t.type,o=()=>this.listeners[i]?.delete(r)||!1;function s(a,u){n.once&&o(),r(a,u)}return La(this.listeners,i,()=>new Map).set(r,{listener:s,removeListener:o}),o}removeListener(t,r){const n=T.isString(t)?t:t.type,i=this.listeners[n];if(!i)return!1;const o=i.get(r);return o?o.removeListener():!1}dispatch(t){const r=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const n=r?.size||0;return r?.forEach(i=>{i.listener(t,i.removeListener)}),this.universalListeners.forEach(i=>{i.listener(t,i.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const r=Jc(this.listeners).reduce((n,i)=>{const o=i.size||0;return i.clear(),n+o},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),r}destroy(){this.removeAllListeners()}}class mg extends zE{}function vk(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function My(e,t,r){return vk(globalThis,e,t,r)}function gg(e,t){return Xu(e.title),e.parent?[...gg(e.parent),Xu(e.parent.title)].concat([]):[]}function Xu(e){return bk(e).toLowerCase().replaceAll(/\s/g,"-")}function UE({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}const qE=/[/?#&=]/;function wk(e){const t=e.match(qE);return e.trim()?Xu(e)?t?new Error(`Book page title has invalid character '${t[0]}'.`):void 0:new Error("Book page title resolved to empty breadcrumb."):new Error("Cannot define an element-book page with an empty title.")}const WE={[lr.ElementExample]:()=>[],[lr.Page]:e=>[wk(e.title),...uE(e.controls,e.title)].filter(T.isTruthy),[lr.Root]:()=>[]},Xc="_isBookTreeNode",kk=new Map;function VE(e){return kk.get(e)}function KE(e,t){lE(kk,e,()=>t)}function na(e,t){return xk(e)&&e.entry.entryType===t}function xk(e){return!!(T.hasKeys(e,[Xc,"entry"])&&e[Xc])}function HE(){return{[Xc]:!0,entry:{entryType:lr.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function GE({entries:e,debug:t}){const r=VE(e);if(r)return r;const n=HE();e.forEach(s=>pg({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const i=$k(n),o={tree:n,flattenedNodes:i};return KE(e,o),t&&console.info("element-book tree:",n),o}function ZE(e,t,r){if(!t.parent)return e;const n=Y0(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),pg({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const i=Y0(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${gg(t).join(" > ")}`);return i}function pg({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const i=WE[t.entryType](t);t.errors.push(...i);const o=ZE(e,t,r),s=Xu(t.title),a=o.children[s];if(a){if(n){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${s}'${o.urlBreadcrumb?` in parent '${o.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[Xc]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...o.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};o.children[s]=u,sE(t,lr.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>pg({tree:e,newEntry:l,debug:r,manuallyAdded:n}))}function Y0(e,t){const r=xk(e)?e.fullUrlBreadcrumbs.slice(0,-1):gg(e);return r.length?r.reduce((i,o)=>{if(i)return i.children[o]},t):void 0}function $k(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>$k(i));return[e,...r].flat()}function bg(e,t){return yg(e,["",...t],void 0)}function yg(e,t,r){const n=t.slice(1),i=n[0];!i&&r&&(e.controls=r);const o=e.children[i||""],s=o&&yg(o,n,r);return{...e.controls,...s}}function YE(e,t,r){const n={...e};return yg(n,["",...t],r),n}function Dk(e,t){const r=t?.controls||(na(e,lr.Page)?lt(e.entry.controls,(i,o)=>o.initValue):{});return{children:lt(e.children,(i,o)=>Dk(o,t?.children?.[o.urlBreadcrumb])),controls:r}}function Bt(e){const t={...e,entryType:lr.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const i={...n,isVertical:t.useVerticalExamples,entryType:lr.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`),wk(n.title)].filter(T.isTruthy)};r.add(n.title),t.elementExamples[Xu(i.title)]=i}}),t}var Zr;(function(e){e.Search="search",e.Book="book"})(Zr||(Zr={}));function Ak(e){return e[0]===Zr.Book?"":e[1]?decodeURIComponent(e[1]):""}const da={hash:void 0,paths:[Zr.Book],search:void 0};class Qc{static cssPropertyDefinitionSupported=!!(globalThis.CSS&&globalThis.CSS.registerProperty);registry=new Map;constructor(){const t=Qc.cssPropertyDefinitionSupported?globalThis.CSS.registerProperty.bind(globalThis.CSS):void 0;t&&(globalThis.CSS.registerProperty=r=>(Ek.registry.set(r.name,r),t(r)))}canRegisterCssProperty(t){return Qc.cssPropertyDefinitionSupported&&!this.registry.has(t)}registerProperty(t){if(!this.canRegisterCssProperty(t.name))return!1;try{return globalThis.CSS.registerProperty(t),!0}catch(r){throw Ia(r,`Failed to define CSS var: ${$(t,4)}

`)}}}const Ek=new Qc;const Ic=globalThis,vg=Ic.ShadowRoot&&(Ic.ShadyCSS===void 0||Ic.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wg=Symbol(),Fy=new WeakMap;let Wi=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==wg)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(vg&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Fy.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Fy.set(r,t))}return t}toString(){return this.cssText}};const Ae=e=>new Wi(typeof e=="string"?e:e+"",void 0,wg),Ck=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new Wi(r,e,wg)},JE=(e,t)=>{if(vg)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),i=Ic.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)}},Py=vg?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Ae(r)})(e):e;const{is:XE,defineProperty:QE,getOwnPropertyDescriptor:e6,getOwnPropertyNames:t6,getOwnPropertySymbols:r6,getPrototypeOf:n6}=Object,qd=globalThis,Iy=qd.trustedTypes,i6=Iy?Iy.emptyScript:"",o6=qd.reactiveElementPolyfillSupport,ju=(e,t)=>e,ed={toAttribute(e,t){switch(t){case Boolean:e=e?i6:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},kg=(e,t)=>!XE(e,t),Ny={attribute:!0,type:String,converter:ed,reflect:!1,useDefault:!1,hasChanged:kg};Symbol.metadata??=Symbol("metadata"),qd.litPropertyMetadata??=new WeakMap;let Hs=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Ny){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,r);i!==void 0&&QE(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){const{get:i,set:o}=e6(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get:i,set(s){const a=i?.call(this);o?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ny}static _$Ei(){if(this.hasOwnProperty(ju("elementProperties")))return;const t=n6(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ju("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ju("properties"))){const r=this.properties,n=[...t6(r),...r6(r)];for(const i of n)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(Py(i))}else t!==void 0&&r.push(Py(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return JE(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const o=(n.converter?.toAttribute!==void 0?n.converter:ed).toAttribute(r,n.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,r){const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=n.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ed;this._$Em=i;const a=s.fromAttribute(r,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,r,n,i=!1,o){if(t!==void 0){const s=this.constructor;if(i===!1&&(o=this[t]),n??=s.getPropertyOptions(t),!((n.hasChanged??kg)(o,r)||n.useDefault&&n.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??r??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,o]of n){const{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Hs.elementStyles=[],Hs.shadowRootOptions={mode:"open"},Hs[ju("elementProperties")]=new Map,Hs[ju("finalized")]=new Map,o6?.({ReactiveElement:Hs}),(qd.reactiveElementVersions??=[]).push("2.1.2");const xg=globalThis,Oy=e=>e,td=xg.trustedTypes,Ry=td?td.createPolicy("lit-html",{createHTML:e=>e}):void 0,Sk="$lit$",co=`lit$${Math.random().toFixed(9).slice(2)}$`,Tk="?"+co,s6=`<${Tk}>`,cs=document,Qu=()=>cs.createComment(""),el=e=>e===null||typeof e!="object"&&typeof e!="function",$g=Array.isArray,a6=e=>$g(e)||typeof e?.[Symbol.iterator]=="function",Dh=`[ 	
\f\r]`,hu=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,By=/-->/g,Ly=/>/g,Ko=RegExp(`>|${Dh}(?:([^\\s"'>=/]+)(${Dh}*=${Dh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_y=/'/g,jy=/"/g,Mk=/^(?:script|style|textarea|title)$/i,u6=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),l6=u6(1),dn=Symbol.for("lit-noChange"),fe=Symbol.for("lit-nothing"),zy=new WeakMap,ts=cs.createTreeWalker(cs,129);function Fk(e,t){if(!$g(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ry!==void 0?Ry.createHTML(t):t}const c6=(e,t)=>{const r=e.length-1,n=[];let i,o=t===2?"<svg>":t===3?"<math>":"",s=hu;for(let a=0;a<r;a++){const u=e[a];let l,d,f=-1,h=0;for(;h<u.length&&(s.lastIndex=h,d=s.exec(u),d!==null);)h=s.lastIndex,s===hu?d[1]==="!--"?s=By:d[1]!==void 0?s=Ly:d[2]!==void 0?(Mk.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=Ko):d[3]!==void 0&&(s=Ko):s===Ko?d[0]===">"?(s=i??hu,f=-1):d[1]===void 0?f=-2:(f=s.lastIndex-d[2].length,l=d[1],s=d[3]===void 0?Ko:d[3]==='"'?jy:_y):s===jy||s===_y?s=Ko:s===By||s===Ly?s=hu:(s=Ko,i=void 0);const g=s===Ko&&e[a+1].startsWith("/>")?" ":"";o+=s===hu?u+s6:f>=0?(n.push(l),u.slice(0,f)+Sk+u.slice(f)+co+g):u+co+(f===-2?a:g)}return[Fk(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class tl{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const a=t.length-1,u=this.parts,[l,d]=c6(t,r);if(this.el=tl.createElement(l,n),ts.currentNode=this.el.content,r===2||r===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=ts.nextNode())!==null&&u.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(Sk)){const h=d[s++],g=i.getAttribute(f).split(co),m=/([.?@])?(.*)/.exec(h);u.push({type:1,index:o,name:m[2],strings:g,ctor:m[1]==="."?f6:m[1]==="?"?h6:m[1]==="@"?m6:Vd}),i.removeAttribute(f)}else f.startsWith(co)&&(u.push({type:6,index:o}),i.removeAttribute(f));if(Mk.test(i.tagName)){const f=i.textContent.split(co),h=f.length-1;if(h>0){i.textContent=td?td.emptyScript:"";for(let g=0;g<h;g++)i.append(f[g],Qu()),ts.nextNode(),u.push({type:2,index:++o});i.append(f[h],Qu())}}}else if(i.nodeType===8)if(i.data===Tk)u.push({type:2,index:o});else{let f=-1;for(;(f=i.data.indexOf(co,f+1))!==-1;)u.push({type:7,index:o}),f+=co.length-1}o++}}static createElement(t,r){const n=cs.createElement("template");return n.innerHTML=t,n}}function fa(e,t,r=e,n){if(t===dn)return t;let i=n!==void 0?r._$Co?.[n]:r._$Cl;const o=el(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=i:r._$Cl=i),i!==void 0&&(t=fa(e,i._$AS(e,t.values),i,n)),t}class d6{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,i=(t?.creationScope??cs).importNode(r,!0);ts.currentNode=i;let o=ts.nextNode(),s=0,a=0,u=n[0];for(;u!==void 0;){if(s===u.index){let l;u.type===2?l=new Wd(o,o.nextSibling,this,t):u.type===1?l=new u.ctor(o,u.name,u.strings,this,t):u.type===6&&(l=new g6(o,this,t)),this._$AV.push(l),u=n[++a]}s!==u?.index&&(o=ts.nextNode(),s++)}return ts.currentNode=cs,i}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}let Wd=class Pk{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,i){this.type=2,this._$AH=fe,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=fa(this,t,r),el(t)?t===fe||t==null||t===""?(this._$AH!==fe&&this._$AR(),this._$AH=fe):t!==this._$AH&&t!==dn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):a6(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==fe&&el(this._$AH)?this._$AA.nextSibling.data=t:this.T(cs.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=tl.createElement(Fk(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(r);else{const o=new d6(i,this),s=o.u(this.options);o.p(r),this.T(s),this._$AH=o}}_$AC(t){let r=zy.get(t.strings);return r===void 0&&zy.set(t.strings,r=new tl(t)),r}k(t){$g(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of t)i===r.length?r.push(n=new Pk(this.O(Qu()),this.O(Qu()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const n=Oy(t).nextSibling;Oy(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Vd=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,i,o){this.type=1,this._$AH=fe,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=fe}_$AI(t,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)t=fa(this,t,r,0),s=!el(t)||t!==this._$AH&&t!==dn,s&&(this._$AH=t);else{const a=t;let u,l;for(t=o[0],u=0;u<o.length-1;u++)l=fa(this,a[n+u],r,u),l===dn&&(l=this._$AH[u]),s||=!el(l)||l!==this._$AH[u],l===fe?t=fe:t!==fe&&(t+=(l??"")+o[u+1]),this._$AH[u]=l}s&&!i&&this.j(t)}j(t){t===fe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},f6=class extends Vd{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===fe?void 0:t}},h6=class extends Vd{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==fe)}},m6=class extends Vd{constructor(t,r,n,i,o){super(t,r,n,i,o),this.type=5}_$AI(t,r=this){if((t=fa(this,t,r,0)??fe)===dn)return;const n=this._$AH,i=t===fe&&n!==fe||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==fe&&(n===fe||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},g6=class{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){fa(this,t)}};const p6={I:Wd},b6=xg.litHtmlPolyfillSupport;b6?.(tl,Wd),(xg.litHtmlVersions??=[]).push("3.3.2");const y6=(e,t,r)=>{const n=r?.renderBefore??t;let i=n._$litPart$;if(i===void 0){const o=r?.renderBefore??null;n._$litPart$=i=new Wd(t.insertBefore(Qu(),o),o,void 0,r??{})}return i._$AI(e),i};const Dg=globalThis;let zu=class extends Hs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=y6(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return dn}};zu._$litElement$=!0,zu.finalized=!0,Dg.litElementHydrateSupport?.({LitElement:zu});const v6=Dg.litElementPolyfillSupport;v6?.({LitElement:zu});(Dg.litElementVersions??=[]).push("4.2.2");function Ik({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}var ha;(function(e){e.Url="<url>",e.TransformList="<transform-list>",e.TransformFunction="<transform-function>",e.Time="<time>",e.String="<string>",e.Resolution="<resolution>",e.Percentage="<percentage>",e.Number="<number>",e.LengthPercentage="<length-percentage>",e.Length="<length>",e.Integer="<integer>",e.Image="<image>",e.CustomIdent="<custom-ident>",e.Color="<color>",e.Angle="<angle>",e.Any="*"})(ha||(ha={}));var Uy;(function(e){e.Space="+",e.Comma="#"})(Uy||(Uy={}));function xi(e,t={}){return lt(e,(n,i)=>{w6(n);const o=i,s=T.isObject(o)&&!(o instanceof Wi),a=T.isString(o)||T.isNumber(o)||o instanceof Wi?String(o):String(o.default),u=T.isString(o)||T.isNumber(o)||o instanceof Wi?String(o):String(o.initialValue||o.default),l=Ae(Rr({value:n.replace(/^-+/,""),prefix:"--"})),d={name:l,value:Ck`var(${l}, ${Ae(a)})`,syntax:T.isString(o)||T.isNumber(o)||o instanceof Wi?ha.Any:J0(o.syntax),default:a},f=String(d.name);if(!u)throw new Error(`Initial value for CSS var ${f} cannot be empty.`);return s&&!t.skipRegistration&&Ek.registerProperty({inherits:!0,name:f,initialValue:u,syntax:d.syntax})&&globalThis.document?.documentElement&&Ik({forCssVar:d,onElement:globalThis.document.documentElement,toValue:a}),d})}function w6(e){try{if(T.isString(e))if(e.includes("-")){if(e.toLowerCase()!==e)throw new Error("Must be lowercase.")}else throw new Error("Must have at least one dash (-).");else throw new TypeError("Must be string.")}catch(t){throw new Error(Pa("Invalid CSS var name.",t,`Got '${$(e)}'`))}}function J0(e){return e?T.isString(e)?e:e.union?e.union.map(t=>J0(t)).join(" | "):e.list?`${J0(e.list.values)}${e.list.separator}`:e.raw:ha.Any}const qe=xi({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),k6={nav:{hover:{background:qe["element-book-nav-hover-background-color"],foreground:qe["element-book-nav-hover-foreground-color"]},active:{background:qe["element-book-nav-active-background-color"],foreground:qe["element-book-nav-active-foreground-color"]},selected:{background:qe["element-book-nav-selected-background-color"],foreground:qe["element-book-nav-selected-foreground-color"]}},accent:{icon:qe["element-book-accent-icon-color"]},page:{background:qe["element-book-page-background-color"],backgroundFaint1:qe["element-book-page-background-faint-level-1-color"],backgroundFaint2:qe["element-book-page-background-faint-level-2-color"],foreground:qe["element-book-page-foreground-color"],foregroundFaint1:qe["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:qe["element-book-page-foreground-faint-level-2-color"]}};function x6(e,t){Nk(e,t,k6)}function X0(e){return T.hasKey(e,"_$cssResult$")}function qy(e){return T.hasKeys(e,["name","value","default"])&&T.isString(e.default)&&X0(e.name)&&X0(e.value)}function Nk(e,t,r){Object.entries(t).forEach(([n,i])=>{const o=r[n];if(!o)throw new Error(`no nestedCssVar at key '${n}'`);if(X0(i)){if(!qy(o))throw new Error(`got a CSS result at '${n}' but no CSS var`);Ik({forCssVar:o,onElement:e,toValue:String(i)})}else{if(qy(o))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Nk(e,i,o)}})}function Pu(e,t){let r=e.length,n,i,o=!1,s=!1;Array.isArray(e[0])?n=e:(n=[e],r=n.length,o=!0),Array.isArray(t[0])?i=t:(i=t.length>0?t.map(d=>[d]):[[]],s=!0);let a=i[0].length,u=i[0].map((d,f)=>i.map(h=>h[f])),l=n.map(d=>u.map(f=>{let h=0;if(!Array.isArray(d)){for(let g of f)h+=d*g;return h}for(let g=0;g<d.length;g++)h+=d[g]*(f[g]||0);return h}));return r===1&&o&&(l=l[0]),a===1&&s?r===1&&o?l[0]:l.map(d=>d[0]):l}function Ah(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function wt(e,t,r=[0,0,0]){const n=Ah(e,t[0]),i=Ah(e,t[1]),o=Ah(e,t[2]);return r[0]=n,r[1]=i,r[2]=o,r}function _a(e){return go(e)==="string"}function go(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Ag(e,{precision:t=16,unit:r}){return He(e)?"none":(e=+Eg(e,t),e+(r??""))}function He(e){return e===null}function Mt(e){return He(e)?0:e}function Eg(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const i=10**(t-n);return Math.floor(e*i+.5)/i}function rl(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Ok(e,t,r){return(r-e)/(t-e)}function Q0(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:rl(t[0],t[1],Ok(e[0],e[1],r))}function Kd(e,t,r){return Math.max(Math.min(r,t),e)}function Hd(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function Ft(e,t){return Hd(Math.abs(e)**t,e)}function Cg(e,t){return t===0?0:e/t}function Rk(e,t,r=0,n=e.length){for(;r<n;){const i=r+n>>1;e[i]<t?r=i+1:n=i}return r}function ma(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const n=Object.getPrototypeOf(e),i=n?.constructor?.name;if(i===r)return!0;if(!i||i==="Object")return!1;e=n}return!1}var $6=Object.freeze({__proto__:null,bisectLeft:Rk,clamp:Kd,copySign:Hd,interpolate:rl,interpolateInv:Ok,isInstance:ma,isNone:He,isString:_a,mapRange:Q0,multiplyMatrices:Pu,multiply_v3_m3x3:wt,serializeNumber:Ag,skipNone:Mt,spow:Ft,toPrecision:Eg,type:go,zdiv:Cg});class D6{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],r&&this[i][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const ko=new D6;var fn={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};let Wy=class{type;coordMeta;coordRange;range;constructor(t,r){if(typeof t=="object"&&(this.coordMeta=t),r&&(this.coordMeta=r,this.coordRange=r.range??r.refRange),typeof t=="string"){let n=t.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!n)throw new TypeError(`Cannot parse ${t} as a type definition.`);this.type=n.groups.type;let{min:i,max:o}=n.groups;(i||o)&&(this.range=[+i,+o])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(t){if(this.type==="<angle>")return t;let r=this.computedRange,n=this.coordRange;return this.type==="<percentage>"&&(n??=this.percentageRange()),Q0(r,n,t)}serialize(t,r){let n=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,i=this.unit;return t=Q0(this.coordRange,n,t),Ag(t,{unit:i,precision:r})}toString(){let t=this.type;if(this.range){let[r="",n=""]=this.range;t+=`[${r},${n}]`}return t}percentageRange(t=1){let r;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?r=[0,1]:r=[-1,1],[r[0]*t,r[1]*t]}static get(t,r){return ma(t,this)?t:new this(t,r)}};const Eh=Symbol("instance");class rd{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[Eh]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(n=>{let i=["<number>","<percentage>"];return n.type==="angle"&&i.push("<angle>"),i})),this.coords=this.coords.map((n,i)=>{let o=this.spaceCoords[i];return typeof n=="string"&&(n=n.trim().split(/\s*\|\s*/)),n.map(s=>Wy.get(s,o))}))}serializeCoords(t,r,n){return n=t.map((i,o)=>Wy.get(n?.[o]??this.coords[o][0],this.spaceCoords[o])),t.map((i,o)=>n[o].serialize(i,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([n,i],o)=>{let s=t[o];if(He(s)||isNaN(s))return s;let a=r[o],u=this.coords[o].find(l=>l.type==a);if(!u){let l=i.name||n;throw new TypeError(`${a??s?.raw??s} not allowed for ${l} in ${this.name}()`)}return s=u.resolve(s),u.range&&(r[o]=u.toString()),s})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||ma(t,this)?t:t[Eh]?t[Eh]:new rd(t,...r)}}const Nr={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function em(e){return Array.isArray(e)?e:Nr[e]}function nd(e,t,r,n={}){if(e=em(e),t=em(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let i={W1:e,W2:t,XYZ:r,options:n};if(ko.run("chromatic-adaptation-start",i),i.M||(i.W1===Nr.D65&&i.W2===Nr.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===Nr.D50&&i.W2===Nr.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),ko.run("chromatic-adaptation-end",i),i.M)return wt(i.XYZ,i.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function Bk(e,t){let r={str:String(e)?.trim(),options:t};if(ko.run("parse-start",r),r.color)return r.color;r.parsed=E6(r.str);let n,i=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let o=r.parsed.name,s,a,u=r.parsed.args,l=u.map((h,g)=>r.parsed.argMeta[g]?.type);if(o==="color"){let h=u.shift();l.shift();let g=h.startsWith("--")?h.substring(2):`--${h}`,m=[h,g];if(s=Y.findFormat({name:o,id:m,type:"function"}),!s){let p,k=h in Y.registry?h:g;if(k in Y.registry){let x=Y.registry[k].formats?.color?.id;x&&(p=`Did you mean ${e.replace("color("+h,"color("+x)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+(p??"Missing a plugin?"))}a=s.space,s.id.startsWith("--")&&!h.startsWith("--")&&fn.warn(`${a.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${s.id}) instead of color(${h}).`),h.startsWith("--")&&!s.id.startsWith("--")&&fn.warn(`${a.name} is a standard space and supported in the CSS spec. Use color(${s.id}) instead of prefixed color(${h}).`)}else s=Y.findFormat({name:o,type:"function"}),a=s.space;i&&Object.assign(i,{format:s,formatId:s.name,types:l,commas:r.parsed.commas});let d=1;r.parsed.lastAlpha&&(d=r.parsed.args.pop(),i&&(i.alphaType=l.pop()));let f=s.coords.length;if(u.length!==f)throw new TypeError(`Expected ${f} coordinates for ${a.id} in ${r.str}), got ${u.length}`);u=s.coerceCoords(u,l),n={spaceId:a.id,coords:u,alpha:d}}else e:for(let o of Y.all)for(let s in o.formats){let a=o.formats[s];if(a.type!=="custom"||a.test&&!a.test(r.str))continue;let u=o.getFormat(a),l=u.parse(r.str);if(l){i&&Object.assign(i,{format:u,formatId:s}),n=l;break e}}if(!n)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return n.alpha=He(n.alpha)?n.alpha:n.alpha===void 0?1:Kd(0,n.alpha,1),n}const Lk={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},id={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(Lk).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function A6(e){let t={},r=e.match(id.unitValue)?.[0],n=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(n.slice(0,-r.length)),n=t.unitless*Lk[r]):id.number.test(n)?(n=Number(n),t.type="<number>"):n==="none"?n=null:n==="NaN"||n==="calc(NaN)"?(n=NaN,t.type="<number>"):t.type="<ident>",{value:n,meta:t}}function E6(e){if(!e)return;e=e.trim();let t=e.match(id.function);if(t){let r=[],n=[],i=!1,o=t[1].toLowerCase(),s=t[2].replace(id.singleArgument,(a,u)=>{let{value:l,meta:d}=A6(u);return(a.startsWith("/")||o!=="color"&&r.length===3)&&(i=!0),r.push(l),n.push(d),""});return{name:o,args:r,argMeta:n,lastAlpha:i,commas:s.includes(","),rawName:t[1],rawArgs:t[2]}}}function be(e,t){if(Array.isArray(e))return e.map(n=>be(n,t));if(!e)throw new TypeError("Empty color reference");_a(e)&&(e=Bk(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=Y.get(r)),e.alpha===void 0&&(e.alpha=1),e}const C6=75e-6;class Y{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?Y.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=em(n),this.formats=t.formats??{};for(let i in this.formats){let o=this.formats[i];o.type||="function",o.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:Y.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,o)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:S6(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ko.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=C6}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((i,o)=>{let s=n[o];if(s.type!=="angle"&&s.range){if(He(i))return!0;let[a,u]=s.range;return(a===void 0||i>=a-r)&&(u===void 0||i<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=rd.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const a=be(t);[t,r]=[a.space,a.coords]}if(t=Y.get(t),this.equals(t))return r;r=r.map(a=>He(a)?0:a);let n=this.path,i=t.path,o,s;for(let a=0;a<n.length&&n[a].equals(i[a]);a++)o=n[a],s=a;if(!o)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>s;a--)r=n[a].toBase(r);for(let a=s+1;a<i.length;a++)r=i[a].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=be(t);[t,r]=[n.space,n.coords]}return t=Y.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],i=n.range||n.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(Y.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||ma(t,this))return t;if(go(t)==="string"){let i=Y.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(r.length)return Y.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=Y.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let n of r)for(let[i,o]of Object.entries(n.formats)){o.name??=i,o.type??="function";let s=(!t.name||o.name===t.name)&&(!t.type||o.type===t.type);if(t.id){let a=o.ids||[o.id],u=Array.isArray(t.id)?t.id:[t.id];s&&=u.some(l=>a.includes(l))}if(s){let a=rd.get(o,n);return a!==o&&(n.formats[o.name]=a),a}}return null}static resolveCoord(t,r){let n=go(t),i,o;if(n==="string"?t.includes(".")?[i,o]=t.split("."):[i,o]=[,t]:Array.isArray(t)?[i,o]=t:(i=t.space,o=t.coordId),i=Y.get(i),i||(i=r),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=go(o),n==="number"||n==="string"&&o>=0){let u=Object.entries(i.coords)[o];if(u)return{space:i,id:u[0],index:o,...u[1]}}i=Y.get(i);let s=o.toLowerCase(),a=0;for(let u in i.coords){let l=i.coords[u];if(u.toLowerCase()===s||l.name?.toLowerCase()===s)return{space:i,id:u,index:a,...l};a++}throw new TypeError(`No "${o}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function S6(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var cr=new Y({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Sr extends Y{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=cr),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=wt(r,t.toXYZ_M);return this.white!==this.base.white&&(n=nd(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=nd(this.base.white,this.white,r),wt(r,t.fromXYZ_M))),t.referred??="display",super(t)}}function _k(e,t={}){if(Array.isArray(e))return e.map(u=>_k(u,t));let{cssProperty:r="background-color",element:n,...i}=t,o=null;try{return be(e,i)}catch(u){o=u}let{CSS:s,getComputedStyle:a}=globalThis;if(_a(e)&&n&&s&&a&&s.supports(r,e)){let u=n.style[r];e!==u&&(n.style[r]=e);let l=a(n).getPropertyValue(r);if(e!==u&&(n.style[r]=u),l!==e)try{return be(l,i)}catch(d){o=d}else o={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=o),null}function Dl(e,t){e=be(e);let r=Y.get(t,t?.space),n=t?.precision,i;return!r||e.space.equals(r)?i=e.coords.slice():i=r.from(e),n===void 0?i:i.map(o=>Eg(o,n))}function an(e,t){if(e=be(e),t==="alpha")return e.alpha??1;let{space:r,index:n}=Y.resolveCoord(t,e.space);return Dl(e,r)[n]}function Sg(e,t,r,n){return e=be(e),Array.isArray(t)&&([t,r,n]=[e.space,t,r]),t=Y.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),n!==void 0&&(e.alpha=n),e}Sg.returns="color";function Zi(e,t,r){if(e=be(e),arguments.length===2&&go(arguments[1])==="object"){let n=arguments[1];for(let i in n)Zi(e,i,n[i])}else if(typeof r=="function"&&(r=r(an(e,t))),t==="alpha")e.alpha=r;else{let{space:n,index:i}=Y.resolveCoord(t,e.space),o=Dl(e,n);o[i]=r,Sg(e,n,o)}return e}Zi.returns="color";var Tg=new Y({id:"xyz-d50",name:"XYZ D50",white:"D50",base:cr,fromBase:e=>nd(cr.white,"D50",e),toBase:e=>nd("D50",cr.white,e)});const T6=216/24389,Vy=24/116,oc=24389/27;let Ch=Nr.D50;var un=new Y({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Ch,base:Tg,fromBase(e){let r=e.map((s,a)=>s/Ch[a]).map(s=>s>T6?Math.cbrt(s):(oc*s+16)/116),n=116*r[1]-16,i=500*(r[0]-r[1]),o=200*(r[1]-r[2]);return[n,i,o]},toBase(e){let[t,r,n]=e,i=[];return i[1]=(t+16)/116,i[0]=r/500+i[1],i[2]=i[1]-n/200,[i[0]>Vy?Math.pow(i[0],3):(116*i[0]-16)/oc,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/oc,i[2]>Vy?Math.pow(i[2],3):(116*i[2]-16)/oc].map((s,a)=>s*Ch[a])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Pn(e){return typeof e!="number"?e:(e%360+360)%360}function jk(e,t){let[r,n]=t,i=He(r),o=He(n);if(i&&o)return[r,n];if(i?r=n:o&&(n=r),e==="raw")return t;r=Pn(r),n=Pn(n);let s=n-r;return e==="increasing"?s<0&&(n+=360):e==="decreasing"?s>0&&(r+=360):e==="longer"?-180<s&&s<180&&(s>0?r+=360:n+=360):e==="shorter"&&(s>180?r+=360:s<-180&&(n+=360)),[r,n]}var hn=new Y({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:un,fromBase(e){if(this.ε===void 0){let a=Object.values(this.base.coords)[1].refRange,u=a[1]-a[0];this.ε=u/1e5}let[t,r,n]=e,i=Math.abs(r)<this.ε&&Math.abs(n)<this.ε,o=i?null:Pn(Math.atan2(n,r)*180/Math.PI),s=i?0:Math.sqrt(r**2+n**2);return[t,s,o]},toBase(e){let[t,r,n]=e,i=null,o=null;return He(n)||(r=r<0?0:r,i=r*Math.cos(n*Math.PI/180),o=r*Math.sin(n*Math.PI/180)),[t,i,o]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const Ky=25**7,od=Math.PI,Hy=180/od,zs=od/180;function Gy(e){const t=e*e;return t*t*t*e}function zk(e,t,{kL:r=1,kC:n=1,kH:i=1}={}){[e,t]=be([e,t]);let[o,s,a]=un.from(e),u=hn.from(un,[o,s,a])[1],[l,d,f]=un.from(t),h=hn.from(un,[l,d,f])[1];u<0&&(u=0),h<0&&(h=0);let g=(u+h)/2,m=Gy(g),p=.5*(1-Math.sqrt(m/(m+Ky))),k=(1+p)*s,x=(1+p)*d,D=Math.sqrt(k**2+a**2),C=Math.sqrt(x**2+f**2),P=k===0&&a===0?0:Math.atan2(a,k),O=x===0&&f===0?0:Math.atan2(f,x);P<0&&(P+=2*od),O<0&&(O+=2*od),P*=Hy,O*=Hy;let H=l-o,ee=C-D,ne=O-P,X=P+O,ye=Math.abs(ne),se;D*C===0?se=0:ye<=180?se=ne:ne>180?se=ne-360:ne<-180?se=ne+360:fn.warn("the unthinkable has happened");let xe=2*Math.sqrt(C*D)*Math.sin(se*zs/2),ze=(o+l)/2,Ge=(D+C)/2,yr=Gy(Ge),Et;D*C===0?Et=X:ye<=180?Et=X/2:X<360?Et=(X+360)/2:Et=(X-360)/2;let kn=(ze-50)**2,xn=1+.015*kn/Math.sqrt(20+kn),zr=1+.045*Ge,Ct=1;Ct-=.17*Math.cos((Et-30)*zs),Ct+=.24*Math.cos(2*Et*zs),Ct+=.32*Math.cos((3*Et+6)*zs),Ct-=.2*Math.cos((4*Et-63)*zs);let me=1+.015*Ge*Ct,yt=30*Math.exp(-1*((Et-275)/25)**2),Ze=2*Math.sqrt(yr/(yr+Ky)),jt=-1*Math.sin(2*yt*zs)*Ze,Be=(H/(r*xn))**2;return Be+=(ee/(n*zr))**2,Be+=(xe/(i*me))**2,Be+=jt*(ee/(n*zr))*(xe/(i*me)),Math.sqrt(Be)}const M6=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],F6=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],P6=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],po=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var Qn=new Y({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:cr,fromBase(e){let t=wt(e,M6);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),wt(t,P6,t)},toBase(e){let t=wt(e,po);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,wt(t,F6,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function tm(e,t){[e,t]=be([e,t]);let[r,n,i]=Qn.from(e),[o,s,a]=Qn.from(t),u=r-o,l=n-s,d=i-a;return Math.sqrt(u**2+l**2+d**2)}const I6=75e-6;function os(e,t,{epsilon:r=I6}={}){e=be(e),t||(t=e.space),t=Y.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function ga(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Uk(e,t,r="lab"){r=Y.get(r);let n=r.from(e),i=r.from(t);return Math.sqrt(n.reduce((o,s,a)=>{let u=i[a];return He(s)||He(u)?o:o+(u-s)**2},0))}function N6(e,t){return Uk(e,t,"lab")}const O6=Math.PI,Zy=O6/180;function R6(e,t,{l:r=2,c:n=1}={}){[e,t]=be([e,t]);let[i,o,s]=un.from(e),[,a,u]=hn.from(un,[i,o,s]),[l,d,f]=un.from(t),h=hn.from(un,[l,d,f])[1];a<0&&(a=0),h<0&&(h=0);let g=i-l,m=a-h,p=o-d,k=s-f,x=p**2+k**2-m**2,D=.511;i>=16&&(D=.040975*i/(1+.01765*i));let C=.0638*a/(1+.0131*a)+.638,P;He(u)&&(u=0),u>=164&&u<=345?P=.56+Math.abs(.2*Math.cos((u+168)*Zy)):P=.36+Math.abs(.4*Math.cos((u+35)*Zy));let O=Math.pow(a,4),H=Math.sqrt(O/(O+1900)),ee=C*(H*P+1-H),ne=(g/(r*D))**2;return ne+=(m/(n*C))**2,ne+=x/ee**2,Math.sqrt(ne)}const Yy=203;var Mg=new Y({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:cr,fromBase(e){return e.map(t=>t*Yy)},toBase(e){return e.map(t=>t/Yy)}});const sc=1.15,ac=.66,Jy=2610/2**14,B6=2**14/2610,Xy=3424/2**12,Qy=2413/2**7,e1=2392/2**7,L6=1.7*2523/2**5,t1=2**5/(1.7*2523),uc=-.56,Sh=16295499532821565e-27,_6=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],j6=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],z6=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],U6=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]];var qk=new Y({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:Mg,fromBase(e){let[t,r,n]=e,i=sc*t-(sc-1)*n,o=ac*r-(ac-1)*t,a=wt([i,o,n],_6).map(function(h){let g=Xy+Qy*Ft(h/1e4,Jy),m=1+e1*Ft(h/1e4,Jy);return Ft(g/m,L6)}),[u,l,d]=wt(a,z6);return[(1+uc)*u/(1+uc*u)-Sh,l,d]},toBase(e){let[t,r,n]=e,i=(t+Sh)/(1+uc-uc*(t+Sh)),s=wt([i,r,n],U6).map(function(h){let g=Xy-Ft(h,t1),m=e1*Ft(h,t1)-Qy;return 1e4*Ft(g/m,B6)}),[a,u,l]=wt(s,j6),d=(a+(sc-1)*l)/sc,f=(u+(ac-1)*d)/ac;return[d,f,l]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),rm=new Y({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:qk,fromBase:hn.fromBase,toBase:hn.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function q6(e,t){[e,t]=be([e,t]);let[r,n,i]=rm.from(e),[o,s,a]=rm.from(t),u=r-o,l=n-s;He(i)&&He(a)?(i=0,a=0):He(i)?i=a:He(a)&&(a=i);let d=i-a,f=2*Math.sqrt(n*s)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(u**2+l**2+f**2)}const Wk=3424/4096,Vk=2413/128,Kk=2392/128,r1=2610/16384,W6=2523/32,V6=16384/2610,n1=32/2523,K6=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],H6=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],G6=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],Z6=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var nm=new Y({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Mg,fromBase(e){let t=wt(e,K6);return Y6(t)},toBase(e){let t=J6(e);return wt(t,Z6)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Y6(e){let t=e.map(function(r){let n=Wk+Vk*(r/1e4)**r1,i=1+Kk*(r/1e4)**r1;return(n/i)**W6});return wt(t,H6)}function J6(e){return wt(e,G6).map(function(n){let i=Math.max(n**n1-Wk,0),o=Vk-Kk*n**n1;return 1e4*(i/o)**V6})}function X6(e,t){[e,t]=be([e,t]);let[r,n,i]=nm.from(e),[o,s,a]=nm.from(t);return 720*Math.sqrt((r-o)**2+.25*(n-s)**2+(i-a)**2)}function Q6(e,t){[e,t]=be([e,t]);let r=2,[n,i,o]=Qn.from(e),[s,a,u]=Qn.from(t),l=n-s,d=r*(i-a),f=r*(o-u);return Math.sqrt(l**2+d**2+f**2)}const eC=Nr.D65,Hk=.42,i1=1/Hk,Th=2*Math.PI,Gk=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],tC=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],rC=[[460,451,288],[460,-891,-261],[460,-220,-6300]],nC={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Zo={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},iC=180/Math.PI,o1=Math.PI/180;function Zk(e,t){return e.map(n=>{const i=Ft(t*Math.abs(n)*.01,Hk);return 400*Hd(i,n)/(i+27.13)})}function oC(e,t){const r=100/t*27.13**i1;return e.map(n=>{const i=Math.abs(n);return Hd(r*Ft(i/(400-i),i1),n)})}function sC(e){let t=Pn(e);t<=Zo.h[0]&&(t+=360);const r=Rk(Zo.h,t)-1,[n,i]=Zo.h.slice(r,r+2),[o,s]=Zo.e.slice(r,r+2),a=Zo.H[r],u=(t-n)/o;return a+100*u/(u+(i-t)/s)}function aC(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,i]=Zo.h.slice(r,r+2),[o,s]=Zo.e.slice(r,r+2);return Pn((t*(s*n-o*i)-100*n*s)/(t*(s-o)-100*s))}function Yk(e,t,r,n,i){const o={};o.discounting=i,o.refWhite=e,o.surround=n;const s=e.map(k=>k*100);o.la=t,o.yb=r;const a=s[1],u=wt(s,Gk);let l=nC[o.surround];const d=l[0];o.c=l[1],o.nc=l[2];const h=(1/(5*o.la+1))**4;o.fl=h*o.la+.1*(1-h)*(1-h)*Math.cbrt(5*o.la),o.flRoot=o.fl**.25,o.n=o.yb/a,o.z=1.48+Math.sqrt(o.n),o.nbb=.725*o.n**-.2,o.ncb=o.nbb;const g=Math.max(Math.min(d*(1-1/3.6*Math.exp((-o.la-42)/92)),1),0);o.dRgb=u.map(k=>rl(1,a/k,g)),o.dRgbInv=o.dRgb.map(k=>1/k);const m=u.map((k,x)=>k*o.dRgb[x]),p=Zk(m,o.fl);return o.aW=o.nbb*(2*p[0]+p[1]+.05*p[2]),o}const s1=Yk(eC,64/Math.PI*.2,20,"average",!1);function im(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=Pn(e.h)*o1:r=aC(e.H)*o1;const n=Math.cos(r),i=Math.sin(r);let o=0;e.J!==void 0?o=Ft(e.J,1/2)*.1:e.Q!==void 0&&(o=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/o:e.M!==void 0?s=e.M/t.flRoot/o:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const a=Ft(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),l=t.aW*Ft(o,2/t.c/t.z),d=5e4/13*t.nc*t.ncb*u,f=l/t.nbb,h=23*(f+.305)*Cg(a,23*d+a*(11*n+108*i)),g=h*n,m=h*i,p=oC(wt([f,g,m],rC).map(k=>k*1/1403),t.fl);return wt(p.map((k,x)=>k*t.dRgbInv[x]),tC).map(k=>k/100)}function Jk(e,t){const r=e.map(C=>C*100),n=Zk(wt(r,Gk).map((C,P)=>C*t.dRgb[P]),t.fl),i=n[0]+(-12*n[1]+n[2])/11,o=(n[0]+n[1]-2*n[2])/9,s=(Math.atan2(o,i)%Th+Th)%Th,a=.25*(Math.cos(s+2)+3.8),u=5e4/13*t.nc*t.ncb*Cg(a*Math.sqrt(i**2+o**2),n[0]+n[1]+1.05*n[2]+.305),l=Ft(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),d=t.nbb*(2*n[0]+n[1]+.05*n[2]),f=Ft(d/t.aW,.5*t.c*t.z),h=100*Ft(f,2),g=4/t.c*f*(t.aW+4)*t.flRoot,m=l*f,p=m*t.flRoot,k=Pn(s*iC),x=sC(k),D=50*Ft(t.c*l/(t.aW+4),1/2);return{J:h,C:m,h:k,s:D,Q:g,M:p,H:x}}var uC=new Y({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:cr,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=Jk(e,s1),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return im({J:e[0],M:e[1],h:e[2]},s1)}});const lC=Nr.D65,cC=216/24389,Xk=24389/27;function dC(e){return 116*(e>cC?Math.cbrt(e):(Xk*e+16)/116)-16}function om(e){return e>8?Math.pow((e+16)/116,3):e/Xk}function fC(e,t){let[r,n,i]=e,o=[],s=0;if(i===0)return[0,0,0];let a=om(i);i>0?s=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:s=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const u=2e-12,l=15;let d=0,f=1/0;for(;d<=l;){o=im({J:s,C:n,h:r},t);const h=Math.abs(o[1]-a);if(h<f){if(h<=u)return o;f=h}s=s-(o[1]-a)*s/(2*o[1]),d+=1}return im({J:s,C:n,h:r},t)}function hC(e,t){const r=dC(e[1]);if(r===0)return[0,0,0];const n=Jk(e,Fg);return[Pn(n.h),n.C,r]}const Fg=Yk(lC,200/Math.PI*om(50),om(50)*100,"average",!1);var nl=new Y({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:cr,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=hC(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return fC(e,Fg)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const mC=Math.PI/180,a1=[1,.007,.0228];function u1(e){e[1]<0&&(e=nl.fromBase(nl.toBase(e)));const t=Math.log(Math.max(1+a1[2]*e[1]*Fg.flRoot,1))/a1[2],r=e[0]*mC,n=t*Math.cos(r),i=t*Math.sin(r);return[e[2],n,i]}function gC(e,t){[e,t]=be([e,t]);let[r,n,i]=u1(nl.from(e)),[o,s,a]=u1(nl.from(t));return Math.sqrt((r-o)**2+(n-s)**2+(i-a)**2)}var pa={deltaE76:N6,deltaECMC:R6,deltaE2000:zk,deltaEJz:q6,deltaEITP:X6,deltaEOK:tm,deltaEOK2:Q6,deltaEHCT:gC};function pC(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const l1={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function xo(e,{method:t=fn.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:i=2,blackWhiteClamp:o=void 0}={}){if(e=be(e),_a(arguments[1])?r=arguments[1]:r||(r=e.space),r=Y.get(r),os(e,r,{epsilon:0}))return e;let s;if(t==="css")s=bC(e,{space:r});else{if(t!=="clip"&&!os(e,r)){Object.prototype.hasOwnProperty.call(l1,t)&&({method:t,jnd:i,deltaEMethod:n,blackWhiteClamp:o}=l1[t]);let a=zk;if(n!==""){for(let l in pa)if("deltae"+n.toLowerCase()===l.toLowerCase()){a=pa[l];break}}i===0&&(i=1e-16);let u=xo(it(e,r),{method:"clip",space:r});if(a(e,u)>i){if(o&&Object.keys(o).length===3){let D=Y.resolveCoord(o.channel),C=an(it(e,D.space),D.id);if(He(C)&&(C=0),C>=o.max)return it({space:"xyz-d65",coords:Nr.D65},e.space);if(C<=o.min)return it({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=Y.resolveCoord(t),d=l.space,f=l.id,h=it(e,d);h.coords.forEach((D,C)=>{He(D)&&(h.coords[C]=0)});let m=(l.range||l.refRange)[0],p=pC(i),k=m,x=an(h,f);for(;x-k>p;){let D=ga(h);D=xo(D,{space:r,method:"clip"}),a(h,D)-i<p?k=an(h,f):x=an(h,f),Zi(h,f,(k+x)/2)}s=it(h,r)}else s=u}else s=it(e,r);if(t==="clip"||!os(s,r,{epsilon:0})){let a=Object.values(r.coords).map(u=>u.range||[]);s.coords=s.coords.map((u,l)=>{let[d,f]=a[l];return d!==void 0&&(u=Math.max(d,u)),f!==void 0&&(u=Math.min(u,f)),u})}}return r!==e.space&&(s=it(s,e.space)),e.coords=s.coords,e}xo.returns="color";const c1={WHITE:{space:Qn,coords:[1,0,0],alpha:1},BLACK:{space:Qn,coords:[0,0,0],alpha:1}};function bC(e,{space:t}={}){e=be(e),t||(t=e.space),t=Y.get(t);const i=Y.get("oklch");if(t.isUnbounded)return it(e,t);const o=it(e,i);let s=o.coords[0];if(s>=1){const m=it(c1.WHITE,t);return m.alpha=e.alpha,it(m,t)}if(s<=0){const m=it(c1.BLACK,t);return m.alpha=e.alpha,it(m,t)}if(os(o,t,{epsilon:0}))return it(o,t);function a(m){const p=it(m,t),k=Object.values(t.coords);return p.coords=p.coords.map((x,D)=>{if("range"in k[D]){const[C,P]=k[D].range;return Kd(C,x,P)}return x}),p}let u=0,l=o.coords[1],d=!0,f=ga(o),h=a(f),g=tm(h,f);if(g<.02)return h;for(;l-u>1e-4;){const m=(u+l)/2;if(f.coords[1]=m,d&&os(f,t,{epsilon:0}))u=m;else if(h=a(f),g=tm(h,f),g<.02){if(.02-g<1e-4)break;d=!1,u=m}else l=m}return h}function it(e,t,{inGamut:r}={}){e=be(e),t=Y.get(t);let n=t.from(e),i={space:t,coords:n,alpha:e.alpha};return r&&(i=xo(i,r===!0?void 0:r)),i}it.returns="color";function Uu(e,t={}){let{precision:r=fn.precision,format:n,inGamut:i=!0,coords:o,alpha:s,commas:a}=t,u,l=be(e),d=n,f=l.parseMeta;f&&!n&&(f.format.canSerialize()&&(n=f.format,d=f.formatId),o??=f.types,s??=f.alphaType,a??=f.commas),d&&(n=l.space.getFormat(n)??Y.findFormat(d)),n||(n=l.space.getFormat("default")??Y.DEFAULT_FORMAT,d=n.name),n&&n.space&&n.space!==l.space&&(l=it(l,n.space));let h=l.coords.slice();if(i||=n.toGamut,i&&!os(l)&&(h=xo(ga(l),i===!0?void 0:i).coords),n.type==="custom")if(n.serialize)u=n.serialize(h,l.alpha,t);else throw new TypeError(`format ${d} can only be used to parse colors, not for serialization`);else{let g=n.name||"color",m=n.serializeCoords(h,r,o);if(g==="color"){let C=n.id||n.ids?.[0]||l.space.cssId||l.space.id;m.unshift(C)}let p=l.alpha;s!==void 0&&typeof s!="object"&&(s=typeof s=="string"?{type:s}:{include:s});let k=s?.type??"<number>",x=s?.include===!0||n.alpha===!0||s?.include!==!1&&n.alpha!==!1&&p<1,D="";if(a??=n.commas,x){if(r!==null){let C;k==="<percentage>"&&(C="%",p*=100),p=Ag(p,{precision:r,unit:C})}D=`${a?",":" /"} ${p}`}u=`${g}(${m.join(a?", ":" ")}${D})`}return u}const yC=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],vC=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var il=new Sr({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:yC,fromXYZ_M:vC}),Qk=new Sr({id:"rec2020",name:"REC.2020",base:il,toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,1/2.4)})}});const wC=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],kC=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var e5=new Sr({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:wC,fromXYZ_M:kC});const xC=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Gt=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var t5=new Sr({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:xC,fromXYZ_M:Gt}),d1={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let f1=Array(3).fill("<percentage> | <number>[0, 255]"),h1=Array(3).fill("<number>[0, 255]");var ds=new Sr({id:"srgb",name:"sRGB",base:t5,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:f1},rgb_number:{name:"rgb",commas:!0,coords:h1,alpha:!1},color:{},rgba:{coords:f1,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:h1},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:n}={})=>{(n!==!1&&t<1||n===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let i=r&&e.every(s=>s%17===0);return"#"+e.map(s=>i?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=d1.black,t.alpha=0):t.coords=d1[e],t.coords)return t}}}}),r5=new Sr({id:"p3",cssId:"display-p3",name:"P3",base:e5,fromBase:ds.fromBase,toBase:ds.toBase});fn.display_space=ds;let $C;if(typeof CSS<"u"&&CSS.supports)for(let e of[un,Qk,r5]){let t=e.getMinCoords(),n=Uu({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){fn.display_space=e;break}}function DC(e,{space:t=fn.display_space,...r}={}){e=be(e);let n=Uu(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!fn.display_space)n=new String(n),n.color=e;else{let i=e;if((e.coords.some(He)||He(e.alpha))&&!($C??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=ga(e),i.coords=i.coords.map(Mt),i.alpha=Mt(i.alpha),n=Uu(i,r),CSS.supports("color",n)))return n=new String(n),n.color=i,n;i=it(i,t),n=new String(Uu(i,r)),n.color=i}return n}function AC(e,t,{space:r,hue:n="shorter"}={}){e=be(e),r||=e.space,r=Y.get(r);let i=Object.values(r.coords);[e,t]=[e,t].map(l=>it(l,r));let[o,s]=[e,t].map(l=>l.coords),a=o.map((l,d)=>{let f=i[d],h=s[d];return f.type==="angle"&&([l,h]=jk(n,[l,h])),m1(l,h)}),u=m1(e.alpha,t.alpha);return{space:r,coords:a,alpha:u}}function m1(e,t){return He(e)||He(t)?e===t?null:0:e-t}function EC(e,t){return e=be(e),t=be(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function $o(e){return an(e,[cr,"y"])}function n5(e,t){Zi(e,[cr,"y"],t)}function CC(e){Object.defineProperty(e.prototype,"luminance",{get(){return $o(this)},set(t){n5(this,t)}})}var SC=Object.freeze({__proto__:null,getLuminance:$o,register:CC,setLuminance:n5});function TC(e,t){e=be(e),t=be(t);let r=Math.max($o(e),0),n=Math.max($o(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const MC=.56,FC=.57,PC=.62,IC=.65,g1=.022,NC=1.414,OC=.1,RC=5e-4,BC=1.14,p1=.027,LC=1.14;function b1(e){return e>=g1?e:e+(g1-e)**NC}function Us(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function _C(e,t){t=be(t),e=be(e);let r,n,i,o,s,a;t=it(t,"srgb"),[o,s,a]=t.coords.map(g=>He(g)?0:g);let u=Us(o)*.2126729+Us(s)*.7151522+Us(a)*.072175;e=it(e,"srgb"),[o,s,a]=e.coords.map(g=>He(g)?0:g);let l=Us(o)*.2126729+Us(s)*.7151522+Us(a)*.072175,d=b1(u),f=b1(l),h=f>d;return Math.abs(f-d)<RC?n=0:h?(r=f**MC-d**FC,n=r*BC):(r=f**IC-d**PC,n=r*LC),Math.abs(n)<OC?i=0:n>0?i=n-p1:i=n+p1,i*100}function jC(e,t){e=be(e),t=be(t);let r=Math.max($o(e),0),n=Math.max($o(t),0);n>r&&([r,n]=[n,r]);let i=r+n;return i===0?0:(r-n)/i}const zC=5e4;function UC(e,t){e=be(e),t=be(t);let r=Math.max($o(e),0),n=Math.max($o(t),0);return n>r&&([r,n]=[n,r]),n===0?zC:(r-n)/n}function qC(e,t){e=be(e),t=be(t);let r=an(e,[un,"l"]),n=an(t,[un,"l"]);return Math.abs(r-n)}const WC=216/24389,y1=24/116,lc=24389/27;let Mh=Nr.D65;var sm=new Y({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Mh,base:cr,fromBase(e){let r=e.map((n,i)=>n/Mh[i]).map(n=>n>WC?Math.cbrt(n):(lc*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>y1?Math.pow(t[0],3):(116*t[0]-16)/lc,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/lc,t[2]>y1?Math.pow(t[2],3):(116*t[2]-16)/lc].map((n,i)=>n*Mh[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}});const Fh=Math.pow(5,.5)*.5+.5;function VC(e,t){e=be(e),t=be(t);let r=an(e,[sm,"l"]),n=an(t,[sm,"l"]),i=Math.abs(Math.pow(r,Fh)-Math.pow(n,Fh)),o=Math.pow(i,1/Fh)*Math.SQRT2-40;return o<7.5?0:o}var Nc=Object.freeze({__proto__:null,contrastAPCA:_C,contrastDeltaPhi:VC,contrastLstar:qC,contrastMichelson:jC,contrastWCAG21:TC,contrastWeber:UC});function KC(e,t,r){_a(r)&&(r={algorithm:r});let{algorithm:n,...i}=r||{};if(!n){let o=Object.keys(Nc).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${o}`)}e=be(e),t=be(t);for(let o in Nc)if("contrast"+n.toLowerCase()===o.toLowerCase())return Nc[o](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Gd(e){let[t,r,n]=Dl(e,cr),i=t+15*r+3*n;return[4*t/i,9*r/i]}function i5(e){let[t,r,n]=Dl(e,cr),i=t+r+n;return[t/i,r/i]}function HC(e){Object.defineProperty(e.prototype,"uv",{get(){return Gd(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return i5(this)}})}var GC=Object.freeze({__proto__:null,register:HC,uv:Gd,xy:i5});function Iu(e,t,r={}){_a(r)&&(r={method:r});let{method:n=fn.deltaE,...i}=r;for(let o in pa)if("deltae"+n.toLowerCase()===o.toLowerCase())return pa[o](e,t,i);throw new TypeError(`Unknown deltaE method: ${n}`)}function o5(e,t=.25){let n=[Y.get("oklch","lch"),"l"];return Zi(e,n,i=>i*(1+t))}function s5(e,t=.25){let n=[Y.get("oklch","lch"),"l"];return Zi(e,n,i=>i*(1-t))}o5.returns="color";s5.returns="color";var ZC=Object.freeze({__proto__:null,darken:s5,lighten:o5});function a5(e,t,r,n={}){return[e,t]=[be(e),be(t)],go(r)==="object"&&([r,n]=[.5,r]),Al(e,t,n)(r??.5)}function u5(e,t,r={}){let n;Pg(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:o,steps:s=2,maxSteps:a=1e3,...u}=r;n||([e,t]=[be(e),be(t)],n=Al(e,t,u));let l=Iu(e,t),d=i>0?Math.max(s,Math.ceil(l/i)+1):s,f=[];if(a!==void 0&&(d=Math.min(d,a)),d===1)f=[{p:.5,color:n(.5)}];else{let h=1/(d-1);f=Array.from({length:d},(g,m)=>{let p=m*h;return{p,color:n(p)}})}if(i>0){let h=f.reduce((g,m,p)=>{if(p===0)return 0;let k=Iu(m.color,f[p-1].color,o);return Math.max(g,k)},0);for(;h>i;){h=0;for(let g=1;g<f.length&&f.length<a;g++){let m=f[g-1],p=f[g],k=(p.p+m.p)/2,x=n(k);h=Math.max(h,Iu(x,m.color),Iu(x,p.color)),f.splice(g,0,{p:k,color:n(k)}),g++}}}return f=f.map(h=>h.color),f}function Al(e,t,r={}){if(Pg(e)){let[u,l]=[e,t];return Al(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:n,outputSpace:i,progression:o,premultiplied:s}=r;e=be(e),t=be(t),e=ga(e),t=ga(t);let a={colors:[e,t],options:r};if(n?n=Y.get(n):n=Y.registry[fn.interpolationSpace]||e.space,i=i?Y.get(i):n,e=it(e,n),t=it(t,n),e=xo(e),t=xo(t),n.coords.h&&n.coords.h.type==="angle"){let u=r.hue=r.hue||"shorter",l=[n,"h"],[d,f]=[an(e,l),an(t,l)];He(d)&&!He(f)?d=f:He(f)&&!He(d)&&(f=d),[d,f]=jk(u,[d,f]),Zi(e,l,d),Zi(t,l,f)}return s&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=o?o(u):u;let l=e.coords.map((h,g)=>{let m=t.coords[g];return rl(h,m,u)}),d=rl(e.alpha,t.alpha,u),f={space:n,coords:l,alpha:d};return s&&(f.coords=f.coords.map(h=>h/d)),i!==n&&(f=it(f,i)),f},{rangeArgs:a})}function Pg(e){return go(e)==="function"&&!!e.rangeArgs}fn.interpolationSpace="lab";function YC(e){e.defineFunction("mix",a5,{returns:"color"}),e.defineFunction("range",Al,{returns:"function<color>"}),e.defineFunction("steps",u5,{returns:"array<color>"})}var JC=Object.freeze({__proto__:null,isRange:Pg,mix:a5,range:Al,register:YC,steps:u5}),XC=new Y({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ds,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,i,o]=e,[s,a,u]=[null,0,(r+t)/2],l=t-r;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case n:s=(i-o)/l+(i<o?6:0);break;case i:s=(o-n)/l+2;break;case o:s=(n-i)/l+4}s=s*60}return a<0&&(s+=180,a=Math.abs(a)),s>=360&&(s-=360),[s,a*100,u*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function i(o){let s=(o+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(s-3,9-s,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),l5=new Y({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:ds,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[n,i,o]=e,[s,a,u]=[null,0,t],l=t-r;if(l!==0){switch(t){case n:s=(i-o)/l+(i<o?6:0);break;case i:s=(o-n)/l+2;break;case o:s=(n-i)/l+4}s=s*60}return u&&(a=l/u),s>=360&&(s-=360),[s,a*100,u*100]},toBase(e){let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function i(o){let s=(o+t/60)%6;return n-n*r*Math.max(0,Math.min(s,4-s,1))}return[i(5),i(3),i(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),QC=new Y({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:l5,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=r+n;if(i>=1){let a=r/i;return[t,0,a*100]}let o=1-n,s=o===0?0:1-r/o;return[t,s*100,o*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const e8=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],t8=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var c5=new Sr({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:e8,fromXYZ_M:t8}),r8=new Sr({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:c5,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const n8=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],i8=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var d5=new Sr({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Tg,toXYZ_M:n8,fromXYZ_M:i8});const o8=1/512,s8=16/512;var a8=new Sr({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:d5,toBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n<s8?t/16:r*n**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n>=o8?r*n**(1/1.8):16*t})}});const cc=1.09929682680944,v1=.018053968510807;var u8=new Sr({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:il,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n<v1*4.5?t/4.5:r*Math.pow((n+cc-1)/cc,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n>=v1?r*(cc*Math.pow(n,.45)-(cc-1)):4.5*t})}}),l8=new Y({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Qn,fromBase:hn.fromBase,toBase:hn.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const ba=2*Math.PI,sd=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],ad=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],Ph=Number.MAX_VALUE,qu=.206,Ig=.03,Nu=(1+qu)/(1+Ig);function ur(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let n=0;return e.forEach((i,o)=>{n+=i*t[o]}),n}function Wu(e){return .5*(Nu*e-qu+Math.sqrt((Nu*e-qu)*(Nu*e-qu)+4*Ig*Nu*e))}function ia(e){return(e**2+qu*e)/(Nu*(e+Ig))}function Ng(e){let[t,r]=e;return[r/t,r/(1-t)]}function c8(e,t){let r=.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),n=.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))));return[r,n]}function Og(e,t){let r=wt(e,po);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,wt(r,t,r)}function Zd(e,t,r,n){let i=f8(e,t,r,n),o=Og([1,i*e,i*t],r),s=Ft(1/Math.max(...o),1/3),a=s*i;return[s,a]}function d8(e,t,r,n,i,o,s,a){let u;if(a===void 0&&(a=Zd(e,t,o,s)),(r-i)*a[1]-(a[0]-i)*n<=0)u=a[1]*i/(n*a[0]+a[1]*(i-r));else{u=a[1]*(i-1)/(n*(a[0]-1)+a[1]*(i-r));let l=r-i,d=n,f=ur(po[0].slice(1),[e,t]),h=ur(po[1].slice(1),[e,t]),g=ur(po[2].slice(1),[e,t]),m=l+d*f,p=l+d*h,k=l+d*g,x=i*(1-u)+u*r,D=u*n,C=x+D*f,P=x+D*h,O=x+D*g,H=C**3,ee=P**3,ne=O**3,X=3*m*C**2,ye=3*p*P**2,se=3*k*O**2,xe=6*m**2*C,ze=6*p**2*P,Ge=6*k**2*O,yr=ur(o[0],[H,ee,ne])-1,Et=ur(o[0],[X,ye,se]),kn=ur(o[0],[xe,ze,Ge]),xn=Et/(Et*Et-.5*yr*kn),zr=-yr*xn,Ct=ur(o[1],[H,ee,ne])-1,me=ur(o[1],[X,ye,se]),yt=ur(o[1],[xe,ze,Ge]),Ze=me/(me*me-.5*Ct*yt),jt=-Ct*Ze,Be=ur(o[2],[H,ee,ne])-1,sr=ur(o[2],[X,ye,se]),$n=ur(o[2],[xe,ze,Ge]),jn=sr/(sr*sr-.5*Be*$n),Si=-Be*jn;zr=xn>=0?zr:Ph,jt=Ze>=0?jt:Ph,Si=jn>=0?Si:Ph,u+=Math.min(zr,Math.min(jt,Si))}return u}function f5(e,t,r){let[n,i,o]=e,s=Zd(i,o,t,r),a=d8(i,o,n,1,n,t,r,s),u=Ng(s),l=a/Math.min(n*u[0],(1-n)*u[1]),d=c8(i,o),f=n*d[0],h=(1-n)*d[1],g=.9*l*Math.sqrt(Math.sqrt(1/(1/f**4+1/h**4)));return f=n*.4,h=(1-n)*.8,[Math.sqrt(1/(1/f**2+1/h**2)),g,a]}function f8(e,t,r,n){let i,o,s,a,u,l,d,f;ur(n[0][0],[e,t])>1?([i,o,s,a,u]=n[0][1],[l,d,f]=r[0]):ur(n[1][0],[e,t])>1?([i,o,s,a,u]=n[1][1],[l,d,f]=r[1]):([i,o,s,a,u]=n[2][1],[l,d,f]=r[2]);let h=i+o*e+s*t+a*e**2+u*e*t,g=ur(po[0].slice(1),[e,t]),m=ur(po[1].slice(1),[e,t]),p=ur(po[2].slice(1),[e,t]),k=1+h*g,x=1+h*m,D=1+h*p,C=k**3,P=x**3,O=D**3,H=3*g*k**2,ee=3*m*x**2,ne=3*p*D**2,X=6*g**2*k,ye=6*m**2*x,se=6*p**2*D,xe=l*C+d*P+f*O,ze=l*H+d*ee+f*ne,Ge=l*X+d*ye+f*se;return h=h-xe*ze/(ze**2-.5*xe*Ge),h}function h8(e,t,r){let[n,i,o]=e,s=ia(o),a=null,u=null;if(n=Pn(n)/360,s!==0&&s!==1&&i!==0){let l=Math.cos(ba*n),d=Math.sin(ba*n),[f,h,g]=f5([s,l,d],t,r),m=.8,p=1.25,k,x,D,C;i<m?(k=p*i,x=0,D=m*f,C=1-D/h):(k=5*(i-.8),x=h,D=.2*h**2*1.25**2/f,C=1-D/(g-h));let P=x+k*D/(1-C*k);a=P*l,u=P*d}return[s,a,u]}function m8(e,t,r){let n=1e-7,i=1e-4,o=e[0],s=0,a=Wu(o),u=Math.sqrt(e[1]**2+e[2]**2),l=.5+Math.atan2(-e[2],-e[1])/ba;if(a!==0&&a!==1&&u!==0){let f=e[1]/u,h=e[2]/u,[g,m,p]=f5([o,f,h],t,r),k=.8,x=1.25,D,C,P,O;u<m?(C=k*g,P=1-C/m,O=u/(C+P*u),s=O*k):(D=m,C=.2*m**2*x**2/g,P=1-C/(p-m),O=(u-D)/(C+P*(u-D)),s=k+.2*O)}const d=Math.abs(s)<i;return d||a===0||Math.abs(1-a)<n?(l=null,d||(s=0)):l=Pn(l*360),[l,s,a]}var g8=new Y({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:Qn,gamutSpace:"self",fromBase(e){return m8(e,sd,ad)},toBase(e){return h8(e,sd,ad)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),h5=new Y({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Qn,fromBase(e){return[Wu(e[0]),e[1],e[2]]},toBase(e){return[ia(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),p8=new Y({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:h5,fromBase:hn.fromBase,toBase:hn.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function b8(e,t,r){let[n,i,o]=e;n=Pn(n)/360;let s=ia(o),a=null,u=null;if(s!==0&&i!==0){let l=Math.cos(ba*n),d=Math.sin(ba*n),f=Zd(l,d,t,r),[h,g]=Ng(f),m=.5,p=1-m/h,k=1-i*m/(m+g-g*p*i),x=i*g*m/(m+g-g*p*i);s=o*k;let D=o*x,C=ia(k),P=x*C/k,O=ia(s);D=D*O/s,s=O;let[H,ee,ne]=Og([C,l*P,d*P],t),X=Ft(1/Math.max(Math.max(H,ee),Math.max(ne,0)),1/3);s=s*X,D=D*X,a=D*l,u=D*d}return[s,a,u]}function y8(e,t,r){let n=1e-4,i=e[0],o=0,s=Wu(i),a=Math.sqrt(e[1]**2+e[2]**2),u=.5+Math.atan2(-e[2],-e[1])/ba;if(i!==0&&i!==1&&a!==0){let l=e[1]/a,d=e[2]/a,f=Zd(l,d,t,r),[h,g]=Ng(f),m=.5,p=1-m/h,k=g/(a+i*g),x=k*i,D=k*a,C=ia(x),P=D*C/x,[O,H,ee]=Og([C,l*P,d*P],t),ne=Ft(1/Math.max(Math.max(O,H),Math.max(ee,0)),1/3);i=i/ne,a=a/ne,a=a*Wu(i)/i,i=Wu(i),s=i/x,o=(m+g)*D/(g*m+g*p*D)}return Math.abs(o)<n||s===0?u=null:u=Pn(u*360),[u,o,s]}var v8=new Y({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:Qn,gamutSpace:"self",fromBase(e){return y8(e,sd,ad)},toBase(e){return b8(e,sd,ad)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});let m5=Nr.D65;const w8=216/24389,w1=24389/27,[k1,x1]=Gd({space:cr,coords:m5});var g5=new Y({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:m5,base:cr,fromBase(e){let t=[Mt(e[0]),Mt(e[1]),Mt(e[2])],r=t[1],[n,i]=Gd({space:cr,coords:t});if(!Number.isFinite(n)||!Number.isFinite(i))return[0,0,0];let o=r<=w8?w1*r:116*Math.cbrt(r)-16;return[o,13*o*(n-k1),13*o*(i-x1)]},toBase(e){let[t,r,n]=e;if(t===0||He(t))return[0,0,0];r=Mt(r),n=Mt(n);let i=r/(13*t)+k1,o=n/(13*t)+x1,s=t<=8?t/w1:Math.pow((t+16)/116,3);return[s*(9*i/(4*o)),s,s*((12-3*i-20*o)/(4*o))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),Rg=new Y({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:g5,fromBase:hn.fromBase,toBase:hn.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const k8=216/24389,x8=24389/27,$1=Gt[0][0],D1=Gt[0][1],Ih=Gt[0][2],A1=Gt[1][0],E1=Gt[1][1],Nh=Gt[1][2],C1=Gt[2][0],S1=Gt[2][1],Oh=Gt[2][2];function qs(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}function ud(e){const t=Math.pow(e+16,3)/1560896,r=t>k8?t:e/x8,n=r*(284517*$1-94839*Ih),i=r*(838422*Ih+769860*D1+731718*$1),o=r*(632260*Ih-126452*D1),s=r*(284517*A1-94839*Nh),a=r*(838422*Nh+769860*E1+731718*A1),u=r*(632260*Nh-126452*E1),l=r*(284517*C1-94839*Oh),d=r*(838422*Oh+769860*S1+731718*C1),f=r*(632260*Oh-126452*S1);return{r0s:n/o,r0i:i*e/o,r1s:n/(o+126452),r1i:(i-769860)*e/(o+126452),g0s:s/u,g0i:a*e/u,g1s:s/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/f,b0i:d*e/f,b1s:l/(f+126452),b1i:(d-769860)*e/(f+126452)}}function T1(e,t){const r=t/360*Math.PI*2,n=qs(e.r0s,e.r0i,r),i=qs(e.r1s,e.r1i,r),o=qs(e.g0s,e.g0i,r),s=qs(e.g1s,e.g1i,r),a=qs(e.b0s,e.b0i,r),u=qs(e.b1s,e.b1i,r);return Math.min(n,i,o,s,a,u)}var $8=new Y({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Rg,gamutSpace:ds,fromBase(e){let[t,r,n]=[Mt(e[0]),Mt(e[1]),Mt(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=ud(t),s=T1(o,n);i=r/s*100}return[n,i,t]},toBase(e){let[t,r,n]=[Mt(e[0]),Mt(e[1]),Mt(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let o=ud(n);i=T1(o,t)/100*r}return[n,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Gt[0][0];Gt[0][1];Gt[0][2];Gt[1][0];Gt[1][1];Gt[1][2];Gt[2][0];Gt[2][1];Gt[2][2];function Ws(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function M1(e){let t=Ws(e.r0s,e.r0i),r=Ws(e.r1s,e.r1i),n=Ws(e.g0s,e.g0i),i=Ws(e.g1s,e.g1i),o=Ws(e.b0s,e.b0i),s=Ws(e.b1s,e.b1i);return Math.min(t,r,n,i,o,s)}var D8=new Y({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Rg,gamutSpace:"self",fromBase(e){let[t,r,n]=[Mt(e[0]),Mt(e[1]),Mt(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=ud(t),s=M1(o);i=r/s*100}return[n,i,t]},toBase(e){let[t,r,n]=[Mt(e[0]),Mt(e[1]),Mt(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let o=ud(n);i=M1(o)/100*r}return[n,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Bg=new Sr({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:il.toBase,fromBase:il.fromBase});const F1=203,P1=2610/2**14,A8=2**14/2610,E8=2523/2**5,I1=2**5/2523,N1=3424/2**12,O1=2413/2**7,R1=2392/2**7;var C8=new Sr({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Bg,toBase(e){return e.map(function(t){return(Math.max(t**I1-N1,0)/(O1-R1*t**I1))**A8*1e4/F1})},fromBase(e){return e.map(function(t){let r=Math.max(t*F1/1e4,0),n=N1+O1*r**P1,i=1+R1*r**P1;return(n/i)**E8})}});const B1=.17883277,L1=.28466892,_1=.55991073,Rh=3.7743;var S8=new Sr({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Bg,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Rh:(Math.exp((t-_1)/B1)+L1)/12*Rh})},fromBase(e){return e.map(function(t){return t/=Rh,t<=1/12?Ft(3*t,.5):B1*Math.log(12*t-L1)+_1})}});const p5={};ko.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=b5(e.W1,e.W2,e.options.method))});ko.add("chromatic-adaptation-end",e=>{e.M||(e.M=b5(e.W1,e.W2,e.options.method))});function Yd({id:e,toCone_M:t,fromCone_M:r}){p5[e]=arguments[0]}function b5(e,t,r="Bradford"){let n=p5[r],[i,o,s]=Pu(n.toCone_M,e),[a,u,l]=Pu(n.toCone_M,t),d=[[a/i,0,0],[0,u/o,0],[0,0,l/s]],f=Pu(d,n.toCone_M);return Pu(n.fromCone_M,f)}Yd({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Yd({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Yd({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Yd({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(Nr,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Nr.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const T8=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],M8=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var y5=new Sr({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Nr.ACES,toXYZ_M:T8,fromXYZ_M:M8});const dc=2**-16,Bh=-.35828683,fc=(Math.log2(65504)+9.72)/17.52;var F8=new Sr({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[Bh,fc],name:"Red"},g:{range:[Bh,fc],name:"Green"},b:{range:[Bh,fc],name:"Blue"}},referred:"scene",base:y5,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-dc)*2:r<fc?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(dc)+9.72)/17.52:t<dc?(Math.log2(dc+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),j1=Object.freeze({__proto__:null,A98RGB:r8,A98RGB_Linear:c5,ACEScc:F8,ACEScg:y5,CAM16_JMh:uC,HCT:nl,HPLuv:D8,HSL:XC,HSLuv:$8,HSV:l5,HWB:QC,ICTCP:nm,JzCzHz:rm,Jzazbz:qk,LCH:hn,LCHuv:Rg,Lab:un,Lab_D65:sm,Luv:g5,OKLCH:l8,OKLab:Qn,OKLrCH:p8,OKLrab:h5,Okhsl:g8,Okhsv:v8,P3:r5,P3_Linear:e5,ProPhoto:a8,ProPhoto_Linear:d5,REC_2020:Qk,REC_2020_Linear:il,REC_2020_Scene_Referred:u8,REC_2100_HLG:S8,REC_2100_Linear:Bg,REC_2100_PQ:C8,XYZ_ABS_D65:Mg,XYZ_D50:Tg,XYZ_D65:cr,sRGB:ds,sRGB_Linear:t5});let ot=class Vr{constructor(...t){let r;if(t.length===1){let s={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=be(t[0],{parseMeta:s}),s.format&&(this.parseMeta=s)}let n,i,o;r?(n=r.space||r.spaceId,i=r.coords,o=r.alpha):[n,i,o]=t,Object.defineProperty(this,"space",{value:Y.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=He(o)?o:o===void 0?1:Kd(0,o,1);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:a=>this.set(s,a)})}get spaceId(){return this.space.id}clone(){return new Vr(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=DC(this,...t);return r.color=new Vr(r.color),r}static get(t,...r){return ma(t,this)?t:new Vr(t,...r)}static try(t,r){if(ma(t,this))return t;let n=_k(t,r);return n?new Vr(n):null}static defineFunction(t,r,n=r){let{instance:i=!0,returns:o}=n,s=function(...a){let u=r(...a);if(o==="color")u=Vr.get(u);else if(o==="function<color>"){let l=u;u=function(...d){let f=l(...d);return Vr.get(f)},Object.assign(u,l)}else o==="array<color>"&&(u=u.map(l=>Vr.get(l)));return u};t in Vr||(Vr[t]=s),i&&(Vr.prototype[t]=function(...a){return s(this,...a)})}static defineFunctions(t){for(let r in t)Vr.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(Vr);else for(let r in t)Vr.defineFunction(r,t[r])}};ot.defineFunctions({get:an,getAll:Dl,set:Zi,setAll:Sg,to:it,equals:EC,inGamut:os,toGamut:xo,distance:Uk,deltas:AC,toString:Uu});Object.assign(ot,{util:$6,hooks:ko,WHITES:Nr,Space:Y,spaces:Y.registry,parse:Bk,defaults:fn});for(let e of Object.keys(j1))Y.register(j1[e]);for(let e in Y.registry)am(e,Y.registry[e]);ko.add("colorspace-init-end",e=>{am(e.id,e),e.aliases?.forEach(t=>{am(t,e)})});function am(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(ot.prototype,r,{get(){let n=this.getAll(e);if(typeof Proxy>"u")return n;let i=new Proxy(n,{has:((o,s)=>{try{return Y.resolveCoord([t,s]),!0}catch{}return Reflect.has(o,s)}),get:(o,s,a)=>{if(s&&typeof s!="symbol"&&!(s in o)&&s in i){let{index:u}=Y.resolveCoord([t,s]);if(u>=0)return o[u]}return Reflect.get(o,s,a)},set:(o,s,a,u)=>{if(s&&typeof s!="symbol"&&!(s in o)||Number(s)>=0){let{index:l}=Y.resolveCoord([t,s]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,s,a,u)}});return i},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}ot.extend(pa);ot.extend({deltaE:Iu});Object.assign(ot,{deltaEMethods:pa});ot.extend(ZC);ot.extend({contrast:KC});ot.extend(GC);ot.extend(SC);ot.extend(JC);ot.extend(Nc);const v5=Symbol("no update");function z1(e){return e!==v5}class Lh extends si()("observable-value-update"){}class P8 extends si()("observable-value-resolve"){}class I8 extends si()("observable-value-error"){}class N8 extends hg("observable-destroy"){}class O8 extends hg("observable-callback-call"){}class R8 extends si()("observable-params-update"){}class w5{listenTarget=new mg;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];if(r===v5)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)){const i=this.value;return this.value=r,this.listenTarget.dispatch(new Lh({detail:[r,i]})),!0}return!1}listen(t,r){const n=i=>r(...i.detail);return this.listenerMap.set(r,n),t&&r(this.value,void 0),this.listenTarget.listen(Lh,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(Lh,r)}destroy(){this.listenTarget.dispatch(new N8),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function Lg(e,t){return XA(e,t,(r,n)=>T.isFunction(r)&&T.isFunction(n)?!0:T.strictEquals(r,n))}var Vu;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(Vu||(Vu={}));class B8 extends w5{equalityCheck;waitingForValueDeferredPromise=new qc;lastSetPromise;lastSetId=ra();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(t={}){super(),this.equalityCheck="equalityCheck"in t?t.equalityCheck:Lg,"defaultValue"in t&&this.setValue(t.defaultValue)}setPromise(t){if(t===this.lastSetPromise)return!1;const r=ra();return this.lastSetId=r,this.lastSetPromise=t,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new qc,super.setValue(this.waitingForValueDeferredPromise.promise,T.strictEquals)),t.then(n=>{this.lastSetPromise!==t||this.lastSetId!==r||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==t||this.lastSetId!==r)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const i=kt(n);console.error(i),this.rejectValue(i)}),!0}resolveValue(t){return z1(t)||(t=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(t,T.strictEquals):super.setValue(t))?(this.lastResolvedValue=t,this.lastSetId=ra(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(t),this.dispatch(new P8({detail:t})),!0):!1}rejectValue(t){this.waitingForValueDeferredPromise.reject(t),super.setValue(t,T.strictEquals),this.dispatch(new I8({detail:t}))}setValue(t){try{return t instanceof Promise?this.setPromise(t):t instanceof Error?(this.rejectValue(t),!0):z1(t)?this.resolveValue(t):!1}catch(r){return this.rejectValue(kt(r)),!0}}listen(t,r){return super.listen(t,r)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?Vu.Rejected:this.value instanceof Promise?Vu.Waiting:Vu.Resolved}}class Ys extends B8{static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==Ys.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck="equalityCheck"in t?t.equalityCheck:Lg,this.updateCallback=t.updateCallback,this.internalParams="defaultParams"in t?t.defaultParams:Ys.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===Ys.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(t){return this.setValue(kt(t))}finally{this.dispatch(new O8)}}updateLastParams(t){try{return this.internalParams===Ys.NotSet||!this.equalityCheck?.(t,this.internalParams)?(this.internalParams=t,this.dispatch(new R8({detail:this.internalParams})),!0):!1}catch(r){return this.setValue(kt(r)),!1}}update(...[t]){return this.updateLastParams(t)?(this.updateFromCallback(),!0):!1}setParams(t){return this.updateLastParams(t)}forceUpdate(...t){return T.isLengthAtLeast(t,1)&&this.updateLastParams(t[0]),this.updateFromCallback()}}function L8(e){return Rt(e)&&!en(e)&&!Cl(e)&&Symbol.asyncIterator in e}function en(e){return Array.isArray(e)}function k5(e){return typeof e=="bigint"}function El(e){return typeof e=="boolean"}function _g(e){return e instanceof globalThis.Date}function _8(e){return typeof e=="function"}function j8(e){return Rt(e)&&!en(e)&&!Cl(e)&&Symbol.iterator in e}function z8(e){return e===null}function $i(e){return typeof e=="number"}function Rt(e){return typeof e=="object"&&e!==null}function x5(e){return e instanceof globalThis.RegExp}function At(e){return typeof e=="string"}function U8(e){return typeof e=="symbol"}function Cl(e){return e instanceof globalThis.Uint8Array}function Pt(e){return e===void 0}function q8(e){return e.map(t=>ld(t))}function W8(e){return new Date(e.getTime())}function V8(e){return new Uint8Array(e)}function K8(e){return new RegExp(e.source,e.flags)}function H8(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=ld(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=ld(e[r]);return t}function ld(e){return en(e)?q8(e):_g(e)?W8(e):Cl(e)?V8(e):x5(e)?K8(e):Rt(e)?H8(e):e}function mn(e){return ld(e)}function jg(e,t){return mn(t===void 0?e:{...t,...e})}function $5(e){return Di(e)&&globalThis.Symbol.asyncIterator in e}function D5(e){return Di(e)&&globalThis.Symbol.iterator in e}function A5(e){return e instanceof globalThis.Promise}function zg(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function Ug(e){return e instanceof globalThis.Uint8Array}function E5(e,t){return t in e}function Di(e){return e!==null&&typeof e=="object"}function gn(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function To(e){return e===void 0}function Jd(e){return e===null}function Xd(e){return typeof e=="boolean"}function De(e){return typeof e=="number"}function C5(e){return globalThis.Number.isInteger(e)}function ji(e){return typeof e=="bigint"}function cn(e){return typeof e=="string"}function S5(e){return typeof e=="function"}function Qd(e){return typeof e=="symbol"}function T5(e){return ji(e)||Xd(e)||Jd(e)||De(e)||cn(e)||Qd(e)||To(e)}var Dt;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(s,a){return e.ExactOptionalPropertyTypes?a in s:s[a]!==void 0}e.IsExactOptionalProperty=t;function r(s){const a=Di(s);return e.AllowArrayObject?a:a&&!gn(s)}e.IsObjectLike=r;function n(s){return r(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}e.IsRecordLike=n;function i(s){return e.AllowNaN?De(s):Number.isFinite(s)}e.IsNumberLike=i;function o(s){const a=To(s);return e.AllowNullVoid?a||s===null:a}e.IsVoidLike=o})(Dt||(Dt={}));function G8(e){return globalThis.Object.freeze(e).map(t=>cd(t))}function Z8(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=cd(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=cd(e[r]);return globalThis.Object.freeze(t)}function cd(e){return en(e)?G8(e):_g(e)?e:Cl(e)?e:x5(e)?e:Rt(e)?Z8(e):e}function j(e,t){const r=t!==void 0?{...t,...e}:e;switch(Dt.InstanceMode){case"freeze":return cd(r);case"clone":return mn(r);default:return r}}class gr extends Error{constructor(t){super(t)}}const Yr=Symbol.for("TypeBox.Transform"),Sl=Symbol.for("TypeBox.Readonly"),Ji=Symbol.for("TypeBox.Optional"),ef=Symbol.for("TypeBox.Hint"),_=Symbol.for("TypeBox.Kind");function qg(e){return Rt(e)&&e[Sl]==="Readonly"}function Mo(e){return Rt(e)&&e[Ji]==="Optional"}function M5(e){return Oe(e,"Any")}function F5(e){return Oe(e,"Argument")}function ja(e){return Oe(e,"Array")}function tf(e){return Oe(e,"AsyncIterator")}function rf(e){return Oe(e,"BigInt")}function Tl(e){return Oe(e,"Boolean")}function za(e){return Oe(e,"Computed")}function Ua(e){return Oe(e,"Constructor")}function Y8(e){return Oe(e,"Date")}function qa(e){return Oe(e,"Function")}function Wa(e){return Oe(e,"Integer")}function Rn(e){return Oe(e,"Intersect")}function nf(e){return Oe(e,"Iterator")}function Oe(e,t){return Rt(e)&&_ in e&&e[_]===t}function P5(e){return El(e)||$i(e)||At(e)}function ws(e){return Oe(e,"Literal")}function ks(e){return Oe(e,"MappedKey")}function vn(e){return Oe(e,"MappedResult")}function Ml(e){return Oe(e,"Never")}function J8(e){return Oe(e,"Not")}function Wg(e){return Oe(e,"Null")}function Va(e){return Oe(e,"Number")}function ai(e){return Oe(e,"Object")}function of(e){return Oe(e,"Promise")}function sf(e){return Oe(e,"Record")}function Xr(e){return Oe(e,"Ref")}function I5(e){return Oe(e,"RegExp")}function Fl(e){return Oe(e,"String")}function Vg(e){return Oe(e,"Symbol")}function xs(e){return Oe(e,"TemplateLiteral")}function X8(e){return Oe(e,"This")}function st(e){return Rt(e)&&Yr in e}function $s(e){return Oe(e,"Tuple")}function Pl(e){return Oe(e,"Undefined")}function or(e){return Oe(e,"Union")}function Q8(e){return Oe(e,"Uint8Array")}function e9(e){return Oe(e,"Unknown")}function t9(e){return Oe(e,"Unsafe")}function r9(e){return Oe(e,"Void")}function n9(e){return Rt(e)&&_ in e&&At(e[_])}function Br(e){return M5(e)||F5(e)||ja(e)||Tl(e)||rf(e)||tf(e)||za(e)||Ua(e)||Y8(e)||qa(e)||Wa(e)||Rn(e)||nf(e)||ws(e)||ks(e)||vn(e)||Ml(e)||J8(e)||Wg(e)||Va(e)||ai(e)||of(e)||sf(e)||Xr(e)||I5(e)||Fl(e)||Vg(e)||xs(e)||X8(e)||$s(e)||Pl(e)||or(e)||Q8(e)||e9(e)||t9(e)||r9(e)||n9(e)}const i9=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function N5(e){try{return new RegExp(e),!0}catch{return!1}}function Kg(e){if(!At(e))return!1;for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);if(r>=7&&r<=13||r===27||r===127)return!1}return!0}function O5(e){return Hg(e)||gt(e)}function mu(e){return Pt(e)||k5(e)}function nt(e){return Pt(e)||$i(e)}function Hg(e){return Pt(e)||El(e)}function et(e){return Pt(e)||At(e)}function o9(e){return Pt(e)||At(e)&&Kg(e)&&N5(e)}function s9(e){return Pt(e)||At(e)&&Kg(e)}function R5(e){return Pt(e)||gt(e)}function dd(e){return Rt(e)&&e[Ji]==="Optional"}function ei(e){return Re(e,"Any")&&et(e.$id)}function a9(e){return Re(e,"Argument")&&$i(e.index)}function Ds(e){return Re(e,"Array")&&e.type==="array"&&et(e.$id)&&gt(e.items)&&nt(e.minItems)&&nt(e.maxItems)&&Hg(e.uniqueItems)&&R5(e.contains)&&nt(e.minContains)&&nt(e.maxContains)}function Gg(e){return Re(e,"AsyncIterator")&&e.type==="AsyncIterator"&&et(e.$id)&&gt(e.items)}function af(e){return Re(e,"BigInt")&&e.type==="bigint"&&et(e.$id)&&mu(e.exclusiveMaximum)&&mu(e.exclusiveMinimum)&&mu(e.maximum)&&mu(e.minimum)&&mu(e.multipleOf)}function As(e){return Re(e,"Boolean")&&e.type==="boolean"&&et(e.$id)}function u9(e){return Re(e,"Computed")&&At(e.target)&&en(e.parameters)&&e.parameters.every(t=>gt(t))}function uf(e){return Re(e,"Constructor")&&e.type==="Constructor"&&et(e.$id)&&en(e.parameters)&&e.parameters.every(t=>gt(t))&&gt(e.returns)}function lf(e){return Re(e,"Date")&&e.type==="Date"&&et(e.$id)&&nt(e.exclusiveMaximumTimestamp)&&nt(e.exclusiveMinimumTimestamp)&&nt(e.maximumTimestamp)&&nt(e.minimumTimestamp)&&nt(e.multipleOfTimestamp)}function cf(e){return Re(e,"Function")&&e.type==="Function"&&et(e.$id)&&en(e.parameters)&&e.parameters.every(t=>gt(t))&&gt(e.returns)}function Xi(e){return Re(e,"Integer")&&e.type==="integer"&&et(e.$id)&&nt(e.exclusiveMaximum)&&nt(e.exclusiveMinimum)&&nt(e.maximum)&&nt(e.minimum)&&nt(e.multipleOf)}function B5(e){return Rt(e)&&Object.entries(e).every(([t,r])=>Kg(t)&&gt(r))}function Es(e){return Re(e,"Intersect")&&!(At(e.type)&&e.type!=="object")&&en(e.allOf)&&e.allOf.every(t=>gt(t)&&!m9(t))&&et(e.type)&&(Hg(e.unevaluatedProperties)||R5(e.unevaluatedProperties))&&et(e.$id)}function Zg(e){return Re(e,"Iterator")&&e.type==="Iterator"&&et(e.$id)&&gt(e.items)}function Re(e,t){return Rt(e)&&_ in e&&e[_]===t}function L5(e){return Fo(e)&&At(e.const)}function _5(e){return Fo(e)&&$i(e.const)}function j5(e){return Fo(e)&&El(e.const)}function Fo(e){return Re(e,"Literal")&&et(e.$id)&&l9(e.const)}function l9(e){return El(e)||$i(e)||At(e)}function c9(e){return Re(e,"MappedKey")&&en(e.keys)&&e.keys.every(t=>$i(t)||At(t))}function d9(e){return Re(e,"MappedResult")&&B5(e.properties)}function Po(e){return Re(e,"Never")&&Rt(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function ya(e){return Re(e,"Not")&&gt(e.not)}function Yg(e){return Re(e,"Null")&&e.type==="null"&&et(e.$id)}function Jr(e){return Re(e,"Number")&&e.type==="number"&&et(e.$id)&&nt(e.exclusiveMaximum)&&nt(e.exclusiveMinimum)&&nt(e.maximum)&&nt(e.minimum)&&nt(e.multipleOf)}function pt(e){return Re(e,"Object")&&e.type==="object"&&et(e.$id)&&B5(e.properties)&&O5(e.additionalProperties)&&nt(e.minProperties)&&nt(e.maxProperties)}function Jg(e){return Re(e,"Promise")&&e.type==="Promise"&&et(e.$id)&&gt(e.item)}function hr(e){return Re(e,"Record")&&e.type==="object"&&et(e.$id)&&O5(e.additionalProperties)&&Rt(e.patternProperties)&&(t=>{const r=Object.getOwnPropertyNames(t.patternProperties);return r.length===1&&N5(r[0])&&Rt(t.patternProperties)&&gt(t.patternProperties[r[0]])})(e)}function f9(e){return Re(e,"Ref")&&et(e.$id)&&At(e.$ref)}function ol(e){return Re(e,"RegExp")&&et(e.$id)&&At(e.source)&&At(e.flags)&&nt(e.maxLength)&&nt(e.minLength)}function ti(e){return Re(e,"String")&&e.type==="string"&&et(e.$id)&&nt(e.minLength)&&nt(e.maxLength)&&o9(e.pattern)&&s9(e.format)}function sl(e){return Re(e,"Symbol")&&e.type==="symbol"&&et(e.$id)}function al(e){return Re(e,"TemplateLiteral")&&e.type==="string"&&At(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}function h9(e){return Re(e,"This")&&et(e.$id)&&At(e.$ref)}function m9(e){return Rt(e)&&Yr in e}function df(e){return Re(e,"Tuple")&&e.type==="array"&&et(e.$id)&&$i(e.minItems)&&$i(e.maxItems)&&e.minItems===e.maxItems&&(Pt(e.items)&&Pt(e.additionalItems)&&e.minItems===0||en(e.items)&&e.items.every(t=>gt(t)))}function fs(e){return Re(e,"Undefined")&&e.type==="undefined"&&et(e.$id)}function Yi(e){return Re(e,"Union")&&et(e.$id)&&Rt(e)&&en(e.anyOf)&&e.anyOf.every(t=>gt(t))}function Il(e){return Re(e,"Uint8Array")&&e.type==="Uint8Array"&&et(e.$id)&&nt(e.minByteLength)&&nt(e.maxByteLength)}function ri(e){return Re(e,"Unknown")&&et(e.$id)}function g9(e){return Re(e,"Unsafe")}function ff(e){return Re(e,"Void")&&e.type==="void"&&et(e.$id)}function p9(e){return Rt(e)&&_ in e&&At(e[_])&&!i9.includes(e[_])}function gt(e){return Rt(e)&&(ei(e)||a9(e)||Ds(e)||As(e)||af(e)||Gg(e)||u9(e)||uf(e)||lf(e)||cf(e)||Xi(e)||Es(e)||Zg(e)||Fo(e)||c9(e)||d9(e)||Po(e)||ya(e)||Yg(e)||Jr(e)||pt(e)||Jg(e)||hr(e)||f9(e)||ol(e)||ti(e)||sl(e)||al(e)||h9(e)||df(e)||fs(e)||Yi(e)||Il(e)||ri(e)||g9(e)||ff(e)||p9(e))}const b9="(true|false)",Oc="(0|[1-9][0-9]*)",z5="(.*)",y9="(?!.*)",va=`^${Oc}$`,wa=`^${z5}$`,v9=`^${y9}$`,U5=new Map;function Xg(e){return U5.has(e)}function Qg(e){return U5.get(e)}const ep=new Map;function Do(e){return ep.has(e)}function tp(e,t){ep.set(e,t)}function rp(e){return ep.get(e)}function w9(e,t){return e.includes(t)}function k9(e){return[...new Set(e)]}function x9(e,t){return e.filter(r=>t.includes(r))}function $9(e,t){return e.reduce((r,n)=>x9(r,n),t)}function D9(e){return e.length===1?e[0]:e.length>1?$9(e.slice(1),e[0]):[]}function A9(e){const t=[];for(const r of e)t.push(...r);return t}function ul(e){return j({[_]:"Any"},e)}function np(e,t){return j({[_]:"Array",type:"array",items:e},t)}function E9(e){return j({[_]:"Argument",index:e})}function ip(e,t){return j({[_]:"AsyncIterator",type:"AsyncIterator",items:e},t)}function Kt(e,t,r){return j({[_]:"Computed",target:e,parameters:t},r)}function C9(e,t){const{[t]:r,...n}=e;return n}function pn(e,t){return t.reduce((r,n)=>C9(r,n),e)}function bt(e){return j({[_]:"Never",not:{}},e)}function pr(e){return j({[_]:"MappedResult",properties:e})}function op(e,t,r){return j({[_]:"Constructor",type:"Constructor",parameters:e,returns:t},r)}function Nl(e,t,r){return j({[_]:"Function",type:"Function",parameters:e,returns:t},r)}function um(e,t){return j({[_]:"Union",anyOf:e},t)}function S9(e){return e.some(t=>Mo(t))}function U1(e){return e.map(t=>Mo(t)?T9(t):t)}function T9(e){return pn(e,[Ji])}function M9(e,t){return S9(e)?Oo(um(U1(e),t)):um(U1(e),t)}function Ka(e,t){return e.length===1?j(e[0],t):e.length===0?bt(t):M9(e,t)}function br(e,t){return e.length===0?bt(t):e.length===1?j(e[0],t):um(e,t)}class q1 extends gr{}function F9(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}function sp(e,t,r){return e[t]===r&&e.charCodeAt(t-1)!==92}function Vi(e,t){return sp(e,t,"(")}function ll(e,t){return sp(e,t,")")}function q5(e,t){return sp(e,t,"|")}function P9(e){if(!(Vi(e,0)&&ll(e,e.length-1)))return!1;let t=0;for(let r=0;r<e.length;r++)if(Vi(e,r)&&(t+=1),ll(e,r)&&(t-=1),t===0&&r!==e.length-1)return!1;return!0}function I9(e){return e.slice(1,e.length-1)}function N9(e){let t=0;for(let r=0;r<e.length;r++)if(Vi(e,r)&&(t+=1),ll(e,r)&&(t-=1),q5(e,r)&&t===0)return!0;return!1}function O9(e){for(let t=0;t<e.length;t++)if(Vi(e,t))return!0;return!1}function R9(e){let[t,r]=[0,0];const n=[];for(let o=0;o<e.length;o++)if(Vi(e,o)&&(t+=1),ll(e,o)&&(t-=1),q5(e,o)&&t===0){const s=e.slice(r,o);s.length>0&&n.push(ka(s)),r=o+1}const i=e.slice(r);return i.length>0&&n.push(ka(i)),n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"or",expr:n}}function B9(e){function t(i,o){if(!Vi(i,o))throw new q1("TemplateLiteralParser: Index must point to open parens");let s=0;for(let a=o;a<i.length;a++)if(Vi(i,a)&&(s+=1),ll(i,a)&&(s-=1),s===0)return[o,a];throw new q1("TemplateLiteralParser: Unclosed group parens in expression")}function r(i,o){for(let s=o;s<i.length;s++)if(Vi(i,s))return[o,s];return[o,i.length]}const n=[];for(let i=0;i<e.length;i++)if(Vi(e,i)){const[o,s]=t(e,i),a=e.slice(o,s+1);n.push(ka(a)),i=s}else{const[o,s]=r(e,i),a=e.slice(o,s);a.length>0&&n.push(ka(a)),i=s-1}return n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"and",expr:n}}function ka(e){return P9(e)?ka(I9(e)):N9(e)?R9(e):O9(e)?B9(e):{type:"const",const:F9(e)}}function ap(e){return ka(e.slice(1,e.length-1))}class L9 extends gr{}function _9(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}function j9(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}function z9(e){return e.type==="const"&&e.const===".*"}function cl(e){return _9(e)||z9(e)?!1:j9(e)?!0:e.type==="and"?e.expr.every(t=>cl(t)):e.type==="or"?e.expr.every(t=>cl(t)):e.type==="const"?!0:(()=>{throw new L9("Unknown expression type")})()}function U9(e){const t=ap(e.pattern);return cl(t)}class q9 extends gr{}function*W5(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const r of W5(e.slice(1)))yield`${t}${r}`}function*W9(e){return yield*W5(e.expr.map(t=>[...hf(t)]))}function*V9(e){for(const t of e.expr)yield*hf(t)}function*K9(e){return yield e.const}function*hf(e){return e.type==="and"?yield*W9(e):e.type==="or"?yield*V9(e):e.type==="const"?yield*K9(e):(()=>{throw new q9("Unknown expression")})()}function V5(e){const t=ap(e.pattern);return cl(t)?[...hf(t)]:[]}function Nt(e,t){return j({[_]:"Literal",const:e,type:typeof e},t)}function K5(e){return j({[_]:"Boolean",type:"boolean"},e)}function up(e){return j({[_]:"BigInt",type:"bigint"},e)}function Cs(e){return j({[_]:"Number",type:"number"},e)}function hs(e){return j({[_]:"String",type:"string"},e)}function*H9(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield K5():t==="number"?yield Cs():t==="bigint"?yield up():t==="string"?yield hs():yield(()=>{const r=t.split("|").map(n=>Nt(n.trim()));return r.length===0?bt():r.length===1?r[0]:Ka(r)})()}function*G9(e){if(e[1]!=="{"){const t=Nt("$"),r=lm(e.slice(1));return yield*[t,...r]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const r=H9(e.slice(2,t)),n=lm(e.slice(t+1));return yield*[...r,...n]}yield Nt(e)}function*lm(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const r=Nt(e.slice(0,t)),n=G9(e.slice(t));return yield*[r,...n]}yield Nt(e)}function Z9(e){return[...lm(e)]}class Y9 extends gr{}function J9(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function H5(e,t){return xs(e)?e.pattern.slice(1,e.pattern.length-1):or(e)?`(${e.anyOf.map(r=>H5(r,t)).join("|")})`:Va(e)?`${t}${Oc}`:Wa(e)?`${t}${Oc}`:rf(e)?`${t}${Oc}`:Fl(e)?`${t}${z5}`:ws(e)?`${t}${J9(e.const.toString())}`:Tl(e)?`${t}${b9}`:(()=>{throw new Y9(`Unexpected Kind '${e[_]}'`)})()}function W1(e){return`^${e.map(t=>H5(t,"")).join("")}$`}function fd(e){const r=V5(e).map(n=>Nt(n));return Ka(r)}function G5(e,t){const r=At(e)?W1(Z9(e)):W1(e);return j({[_]:"TemplateLiteral",type:"string",pattern:r},t)}function X9(e){return V5(e).map(r=>r.toString())}function Q9(e){const t=[];for(const r of e)t.push(...Io(r));return t}function eS(e){return[e.toString()]}function Io(e){return[...new Set(xs(e)?X9(e):or(e)?Q9(e.anyOf):ws(e)?eS(e.const):Va(e)?["[number]"]:Wa(e)?["[number]"]:[])]}function tS(e,t,r){const n={};for(const i of Object.getOwnPropertyNames(t))n[i]=mf(e,Io(t[i]),r);return n}function rS(e,t,r){return tS(e,t.properties,r)}function nS(e,t,r){const n=rS(e,t,r);return pr(n)}function Z5(e,t){return e.map(r=>Y5(r,t))}function iS(e){return e.filter(t=>!Ml(t))}function oS(e,t){return Q5(iS(Z5(e,t)))}function sS(e){return e.some(t=>Ml(t))?[]:e}function aS(e,t){return Ka(sS(Z5(e,t)))}function uS(e,t){return t in e?e[t]:t==="[number]"?Ka(e):bt()}function lS(e,t){return t==="[number]"?e:bt()}function cS(e,t){return t in e?e[t]:bt()}function Y5(e,t){return Rn(e)?oS(e.allOf,t):or(e)?aS(e.anyOf,t):$s(e)?uS(e.items??[],t):ja(e)?lS(e.items,t):ai(e)?cS(e.properties,t):bt()}function lp(e,t){return t.map(r=>Y5(e,r))}function V1(e,t){return Ka(lp(e,t))}function mf(e,t,r){if(Xr(e)||Xr(t)){const n="Index types using Ref parameters require both Type and Key to be of TSchema";if(!Br(e)||!Br(t))throw new gr(n);return Kt("Index",[e,t])}return vn(t)?nS(e,t,r):ks(t)?mS(e,t,r):j(Br(t)?V1(e,Io(t)):V1(e,t),r)}function dS(e,t,r){return{[t]:mf(e,[t],mn(r))}}function fS(e,t,r){return t.reduce((n,i)=>({...n,...dS(e,i,r)}),{})}function hS(e,t,r){return fS(e,t.keys,r)}function mS(e,t,r){const n=hS(e,t,r);return pr(n)}function cp(e,t){return j({[_]:"Iterator",type:"Iterator",items:e},t)}function gS(e){return globalThis.Object.keys(e).filter(t=>!Mo(e[t]))}function pS(e,t){const r=gS(e),n=r.length>0?{[_]:"Object",type:"object",required:r,properties:e}:{[_]:"Object",type:"object",properties:e};return j(n,t)}var ir=pS;function J5(e,t){return j({[_]:"Promise",type:"Promise",item:e},t)}function bS(e){return j(pn(e,[Sl]))}function yS(e){return j({...e,[Sl]:"Readonly"})}function vS(e,t){return t===!1?bS(e):yS(e)}function No(e,t){const r=t??!0;return vn(e)?xS(e,r):vS(e,r)}function wS(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=No(e[n],t);return r}function kS(e,t){return wS(e.properties,t)}function xS(e,t){const r=kS(e,t);return pr(r)}function Ha(e,t){return j(e.length>0?{[_]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[_]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}function X5(e,t){return e in t?An(e,t[e]):pr(t)}function $S(e){return{[e]:Nt(e)}}function DS(e){const t={};for(const r of e)t[r]=Nt(r);return t}function AS(e,t){return w9(t,e)?$S(e):DS(t)}function ES(e,t){const r=AS(e,t);return X5(e,r)}function gu(e,t){return t.map(r=>An(e,r))}function CS(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(t))r[n]=An(e,t[n]);return r}function An(e,t){const r={...t};return Mo(t)?Oo(An(e,pn(t,[Ji]))):qg(t)?No(An(e,pn(t,[Sl]))):vn(t)?X5(e,t.properties):ks(t)?ES(e,t.keys):Ua(t)?op(gu(e,t.parameters),An(e,t.returns),r):qa(t)?Nl(gu(e,t.parameters),An(e,t.returns),r):tf(t)?ip(An(e,t.items),r):nf(t)?cp(An(e,t.items),r):Rn(t)?Ro(gu(e,t.allOf),r):or(t)?br(gu(e,t.anyOf),r):$s(t)?Ha(gu(e,t.items??[]),r):ai(t)?ir(CS(e,t.properties),r):ja(t)?np(An(e,t.items),r):of(t)?J5(An(e,t.item),r):t}function SS(e,t){const r={};for(const n of e)r[n]=An(n,t);return r}function TS(e,t,r){const n=Br(e)?Io(e):e,i=t({[_]:"MappedKey",keys:n}),o=SS(n,i);return ir(o,r)}function MS(e){return j(pn(e,[Ji]))}function FS(e){return j({...e,[Ji]:"Optional"})}function PS(e,t){return t===!1?MS(e):FS(e)}function Oo(e,t){const r=t??!0;return vn(e)?OS(e,r):PS(e,r)}function IS(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Oo(e[n],t);return r}function NS(e,t){return IS(e.properties,t)}function OS(e,t){const r=NS(e,t);return pr(r)}function cm(e,t={}){const r=e.every(i=>ai(i)),n=Br(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return j(t.unevaluatedProperties===!1||Br(t.unevaluatedProperties)||r?{...n,[_]:"Intersect",type:"object",allOf:e}:{...n,[_]:"Intersect",allOf:e},t)}function RS(e){return e.every(t=>Mo(t))}function BS(e){return pn(e,[Ji])}function K1(e){return e.map(t=>Mo(t)?BS(t):t)}function LS(e,t){return RS(e)?Oo(cm(K1(e),t)):cm(K1(e),t)}function Q5(e,t={}){if(e.length===1)return j(e[0],t);if(e.length===0)return bt(t);if(e.some(r=>st(r)))throw new Error("Cannot intersect transform types");return LS(e,t)}function Ro(e,t){if(e.length===1)return j(e[0],t);if(e.length===0)return bt(t);if(e.some(r=>st(r)))throw new Error("Cannot intersect transform types");return cm(e,t)}function Ga(...e){const[t,r]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new gr("Ref: $ref must be a string");return j({[_]:"Ref",$ref:t},r)}function _S(e,t){return Kt("Awaited",[Kt(e,t)])}function jS(e){return Kt("Awaited",[Ga(e)])}function zS(e){return Ro(ex(e))}function US(e){return br(ex(e))}function qS(e){return gf(e)}function ex(e){return e.map(t=>gf(t))}function gf(e,t){return j(za(e)?_S(e.target,e.parameters):Rn(e)?zS(e.allOf):or(e)?US(e.anyOf):of(e)?qS(e.item):Xr(e)?jS(e.$ref):e,t)}function tx(e){const t=[];for(const r of e)t.push(Ss(r));return t}function WS(e){const t=tx(e);return A9(t)}function VS(e){const t=tx(e);return D9(t)}function KS(e){return e.map((t,r)=>r.toString())}function HS(e){return["[number]"]}function GS(e){return globalThis.Object.getOwnPropertyNames(e)}function ZS(e){return dm?globalThis.Object.getOwnPropertyNames(e).map(r=>r[0]==="^"&&r[r.length-1]==="$"?r.slice(1,r.length-1):r):[]}function Ss(e){return Rn(e)?WS(e.allOf):or(e)?VS(e.anyOf):$s(e)?KS(e.items??[]):ja(e)?HS(e.items):ai(e)?GS(e.properties):sf(e)?ZS(e.patternProperties):[]}let dm=!1;function xa(e){dm=!0;const t=Ss(e);return dm=!1,`^(${t.map(n=>`(${n})`).join("|")})$`}function YS(e,t){return Kt("KeyOf",[Kt(e,t)])}function JS(e){return Kt("KeyOf",[Ga(e)])}function XS(e,t){const r=Ss(e),n=QS(r),i=Ka(n);return j(i,t)}function QS(e){return e.map(t=>t==="[number]"?Cs():Nt(t))}function dp(e,t){return za(e)?YS(e.target,e.parameters):Xr(e)?JS(e.$ref):vn(e)?rT(e,t):XS(e,t)}function eT(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=dp(e[n],mn(t));return r}function tT(e,t){return eT(e.properties,t)}function rT(e,t){const r=tT(e,t);return pr(r)}function rx(e){const t=Ss(e),r=lp(e,t);return t.map((n,i)=>[t[i],r[i]])}function nT(e){const t=[];for(const r of e)t.push(...Ss(r));return k9(t)}function iT(e){return e.filter(t=>!Ml(t))}function oT(e,t){const r=[];for(const n of e)r.push(...lp(n,[t]));return iT(r)}function sT(e,t){const r={};for(const n of t)r[n]=Q5(oT(e,n));return r}function aT(e,t){const r=nT(e),n=sT(e,r);return ir(n,t)}function nx(e){return j({[_]:"Date",type:"Date"},e)}function ix(e){return j({[_]:"Null",type:"null"},e)}function fp(e){return j({[_]:"Symbol",type:"symbol"},e)}function ox(e){return j({[_]:"Undefined",type:"undefined"},e)}function sx(e){return j({[_]:"Uint8Array",type:"Uint8Array"},e)}function pf(e){return j({[_]:"Unknown"},e)}function uT(e){return e.map(t=>hp(t,!1))}function lT(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=No(hp(e[r],!1));return t}function hc(e,t){return t===!0?e:No(e)}function hp(e,t){return L8(e)||j8(e)?hc(ul(),t):en(e)?No(Ha(uT(e))):Cl(e)?sx():_g(e)?nx():Rt(e)?hc(ir(lT(e)),t):_8(e)?hc(Nl([],pf()),t):Pt(e)?ox():z8(e)?ix():U8(e)?fp():k5(e)?up():$i(e)||El(e)||At(e)?Nt(e):ir({})}function cT(e,t){return j(hp(e,!0),t)}function dT(e,t){return Ua(e)?Ha(e.parameters,t):bt(t)}function fT(e,t){if(Pt(e))throw new Error("Enum undefined or empty");const r=globalThis.Object.getOwnPropertyNames(e).filter(o=>isNaN(o)).map(o=>e[o]),i=[...new Set(r)].map(o=>Nt(o));return br(i,{...t,[ef]:"Enum"})}class hT extends gr{}var I;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(I||(I={}));function In(e){return e===I.False?e:I.True}function Za(e){throw new hT(e)}function Lt(e){return Po(e)||Es(e)||Yi(e)||ri(e)||ei(e)}function _t(e,t){return Po(t)?lx():Es(t)?bf(e,t):Yi(t)?gp(e,t):ri(t)?hx():ei(t)?mp():Za("StructuralRight")}function mp(e,t){return I.True}function mT(e,t){return Es(t)?bf(e,t):Yi(t)&&t.anyOf.some(r=>ei(r)||ri(r))?I.True:Yi(t)?I.Union:ri(t)||ei(t)?I.True:I.Union}function gT(e,t){return ri(e)?I.False:ei(e)?I.Union:Po(e)?I.True:I.False}function pT(e,t){return pt(t)&&yf(t)?I.True:Lt(t)?_t(e,t):Ds(t)?In(Qe(e.items,t.items)):I.False}function bT(e,t){return Lt(t)?_t(e,t):Gg(t)?In(Qe(e.items,t.items)):I.False}function yT(e,t){return Lt(t)?_t(e,t):pt(t)?Tr(e,t):hr(t)?Bn(e,t):af(t)?I.True:I.False}function ax(e,t){return j5(e)||As(e)?I.True:I.False}function vT(e,t){return Lt(t)?_t(e,t):pt(t)?Tr(e,t):hr(t)?Bn(e,t):As(t)?I.True:I.False}function wT(e,t){return Lt(t)?_t(e,t):pt(t)?Tr(e,t):uf(t)?e.parameters.length>t.parameters.length?I.False:e.parameters.every((r,n)=>In(Qe(t.parameters[n],r))===I.True)?In(Qe(e.returns,t.returns)):I.False:I.False}function kT(e,t){return Lt(t)?_t(e,t):pt(t)?Tr(e,t):hr(t)?Bn(e,t):lf(t)?I.True:I.False}function xT(e,t){return Lt(t)?_t(e,t):pt(t)?Tr(e,t):cf(t)?e.parameters.length>t.parameters.length?I.False:e.parameters.every((r,n)=>In(Qe(t.parameters[n],r))===I.True)?In(Qe(e.returns,t.returns)):I.False:I.False}function ux(e,t){return Fo(e)&&$i(e.const)||Jr(e)||Xi(e)?I.True:I.False}function $T(e,t){return Xi(t)||Jr(t)?I.True:Lt(t)?_t(e,t):pt(t)?Tr(e,t):hr(t)?Bn(e,t):I.False}function bf(e,t){return t.allOf.every(r=>Qe(e,r)===I.True)?I.True:I.False}function DT(e,t){return e.allOf.some(r=>Qe(r,t)===I.True)?I.True:I.False}function AT(e,t){return Lt(t)?_t(e,t):Zg(t)?In(Qe(e.items,t.items)):I.False}function ET(e,t){return Fo(t)&&t.const===e.const?I.True:Lt(t)?_t(e,t):pt(t)?Tr(e,t):hr(t)?Bn(e,t):ti(t)?fx(e):Jr(t)?cx(e):Xi(t)?ux(e):As(t)?ax(e):I.False}function lx(e,t){return I.False}function CT(e,t){return I.True}function H1(e){let[t,r]=[e,0];for(;ya(t);)t=t.not,r+=1;return r%2===0?t:pf()}function ST(e,t){return ya(e)?Qe(H1(e),t):ya(t)?Qe(e,H1(t)):Za("Invalid fallthrough for Not")}function TT(e,t){return Lt(t)?_t(e,t):pt(t)?Tr(e,t):hr(t)?Bn(e,t):Yg(t)?I.True:I.False}function cx(e,t){return _5(e)||Jr(e)||Xi(e)?I.True:I.False}function MT(e,t){return Lt(t)?_t(e,t):pt(t)?Tr(e,t):hr(t)?Bn(e,t):Xi(t)||Jr(t)?I.True:I.False}function Qr(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function G1(e){return yf(e)}function Z1(e){return Qr(e,0)||Qr(e,1)&&"description"in e.properties&&Yi(e.properties.description)&&e.properties.description.anyOf.length===2&&(ti(e.properties.description.anyOf[0])&&fs(e.properties.description.anyOf[1])||ti(e.properties.description.anyOf[1])&&fs(e.properties.description.anyOf[0]))}function _h(e){return Qr(e,0)}function Y1(e){return Qr(e,0)}function FT(e){return Qr(e,0)}function PT(e){return Qr(e,0)}function IT(e){return yf(e)}function NT(e){const t=Cs();return Qr(e,0)||Qr(e,1)&&"length"in e.properties&&In(Qe(e.properties.length,t))===I.True}function OT(e){return Qr(e,0)}function yf(e){const t=Cs();return Qr(e,0)||Qr(e,1)&&"length"in e.properties&&In(Qe(e.properties.length,t))===I.True}function RT(e){const t=Nl([ul()],ul());return Qr(e,0)||Qr(e,1)&&"then"in e.properties&&In(Qe(e.properties.then,t))===I.True}function dx(e,t){return Qe(e,t)===I.False||dd(e)&&!dd(t)?I.False:I.True}function Tr(e,t){return ri(e)?I.False:ei(e)?I.Union:Po(e)||L5(e)&&G1(t)||_5(e)&&_h(t)||j5(e)&&Y1(t)||sl(e)&&Z1(t)||af(e)&&FT(t)||ti(e)&&G1(t)||sl(e)&&Z1(t)||Jr(e)&&_h(t)||Xi(e)&&_h(t)||As(e)&&Y1(t)||Il(e)&&IT(t)||lf(e)&&PT(t)||uf(e)&&OT(t)||cf(e)&&NT(t)?I.True:hr(e)&&ti(fm(e))?t[ef]==="Record"?I.True:I.False:hr(e)&&Jr(fm(e))&&Qr(t,0)?I.True:I.False}function BT(e,t){return Lt(t)?_t(e,t):hr(t)?Bn(e,t):pt(t)?(()=>{for(const r of Object.getOwnPropertyNames(t.properties)){if(!(r in e.properties)&&!dd(t.properties[r]))return I.False;if(dd(t.properties[r]))return I.True;if(dx(e.properties[r],t.properties[r])===I.False)return I.False}return I.True})():I.False}function LT(e,t){return Lt(t)?_t(e,t):pt(t)&&RT(t)?I.True:Jg(t)?In(Qe(e.item,t.item)):I.False}function fm(e){return va in e.patternProperties?Cs():wa in e.patternProperties?hs():Za("Unknown record key pattern")}function hm(e){return va in e.patternProperties?e.patternProperties[va]:wa in e.patternProperties?e.patternProperties[wa]:Za("Unable to get record value schema")}function Bn(e,t){const[r,n]=[fm(t),hm(t)];return L5(e)&&Jr(r)&&In(Qe(e,n))===I.True?I.True:Il(e)&&Jr(r)||ti(e)&&Jr(r)||Ds(e)&&Jr(r)?Qe(e,n):pt(e)?(()=>{for(const i of Object.getOwnPropertyNames(e.properties))if(dx(n,e.properties[i])===I.False)return I.False;return I.True})():I.False}function _T(e,t){return Lt(t)?_t(e,t):pt(t)?Tr(e,t):hr(t)?Qe(hm(e),hm(t)):I.False}function jT(e,t){const r=ol(e)?hs():e,n=ol(t)?hs():t;return Qe(r,n)}function fx(e,t){return Fo(e)&&At(e.const)||ti(e)?I.True:I.False}function zT(e,t){return Lt(t)?_t(e,t):pt(t)?Tr(e,t):hr(t)?Bn(e,t):ti(t)?I.True:I.False}function UT(e,t){return Lt(t)?_t(e,t):pt(t)?Tr(e,t):hr(t)?Bn(e,t):sl(t)?I.True:I.False}function qT(e,t){return al(e)?Qe(fd(e),t):al(t)?Qe(e,fd(t)):Za("Invalid fallthrough for TemplateLiteral")}function WT(e,t){return Ds(t)&&e.items!==void 0&&e.items.every(r=>Qe(r,t.items)===I.True)}function VT(e,t){return Po(e)?I.True:ri(e)?I.False:ei(e)?I.Union:I.False}function KT(e,t){return Lt(t)?_t(e,t):pt(t)&&yf(t)||Ds(t)&&WT(e,t)?I.True:df(t)?Pt(e.items)&&!Pt(t.items)||!Pt(e.items)&&Pt(t.items)?I.False:Pt(e.items)&&!Pt(t.items)||e.items.every((r,n)=>Qe(r,t.items[n])===I.True)?I.True:I.False:I.False}function HT(e,t){return Lt(t)?_t(e,t):pt(t)?Tr(e,t):hr(t)?Bn(e,t):Il(t)?I.True:I.False}function GT(e,t){return Lt(t)?_t(e,t):pt(t)?Tr(e,t):hr(t)?Bn(e,t):ff(t)?JT(e):fs(t)?I.True:I.False}function gp(e,t){return t.anyOf.some(r=>Qe(e,r)===I.True)?I.True:I.False}function ZT(e,t){return e.anyOf.every(r=>Qe(r,t)===I.True)?I.True:I.False}function hx(e,t){return I.True}function YT(e,t){return Po(t)?lx():Es(t)?bf(e,t):Yi(t)?gp(e,t):ei(t)?mp():ti(t)?fx(e):Jr(t)?cx(e):Xi(t)?ux(e):As(t)?ax(e):Ds(t)?gT(e):df(t)?VT(e):pt(t)?Tr(e,t):ri(t)?I.True:I.False}function JT(e,t){return fs(e)||fs(e)?I.True:I.False}function XT(e,t){return Es(t)?bf(e,t):Yi(t)?gp(e,t):ri(t)?hx():ei(t)?mp():pt(t)?Tr(e,t):ff(t)?I.True:I.False}function Qe(e,t){return al(e)||al(t)?qT(e,t):ol(e)||ol(t)?jT(e,t):ya(e)||ya(t)?ST(e,t):ei(e)?mT(e,t):Ds(e)?pT(e,t):af(e)?yT(e,t):As(e)?vT(e,t):Gg(e)?bT(e,t):uf(e)?wT(e,t):lf(e)?kT(e,t):cf(e)?xT(e,t):Xi(e)?$T(e,t):Es(e)?DT(e,t):Zg(e)?AT(e,t):Fo(e)?ET(e,t):Po(e)?CT():Yg(e)?TT(e,t):Jr(e)?MT(e,t):pt(e)?BT(e,t):hr(e)?_T(e,t):ti(e)?zT(e,t):sl(e)?UT(e,t):df(e)?KT(e,t):Jg(e)?LT(e,t):Il(e)?HT(e,t):fs(e)?GT(e,t):Yi(e)?ZT(e,t):ri(e)?YT(e,t):ff(e)?XT(e,t):Za(`Unknown left type operand '${e[_]}'`)}function Ol(e,t){return Qe(e,t)}function QT(e,t,r,n,i){const o={};for(const s of globalThis.Object.getOwnPropertyNames(e))o[s]=pp(e[s],t,r,n,mn(i));return o}function eM(e,t,r,n,i){return QT(e.properties,t,r,n,i)}function tM(e,t,r,n,i){const o=eM(e,t,r,n,i);return pr(o)}function rM(e,t,r,n){const i=Ol(e,t);return i===I.Union?br([r,n]):i===I.True?r:n}function pp(e,t,r,n,i){return vn(e)?tM(e,t,r,n,i):ks(e)?j(sM(e,t,r,n,i)):j(rM(e,t,r,n),i)}function nM(e,t,r,n,i){return{[e]:pp(Nt(e),t,r,n,mn(i))}}function iM(e,t,r,n,i){return e.reduce((o,s)=>({...o,...nM(s,t,r,n,i)}),{})}function oM(e,t,r,n,i){return iM(e.keys,t,r,n,i)}function sM(e,t,r,n,i){const o=oM(e,t,r,n,i);return pr(o)}function aM(e){return e.allOf.every(t=>Ya(t))}function uM(e){return e.anyOf.some(t=>Ya(t))}function lM(e){return!Ya(e.not)}function Ya(e){return e[_]==="Intersect"?aM(e):e[_]==="Union"?uM(e):e[_]==="Not"?lM(e):e[_]==="Undefined"}function cM(e,t){return bp(fd(e),t)}function dM(e,t){const r=e.filter(n=>Ol(n,t)===I.False);return r.length===1?r[0]:br(r)}function bp(e,t,r={}){return xs(e)?j(cM(e,t),r):vn(e)?j(mM(e,t),r):j(or(e)?dM(e.anyOf,t):Ol(e,t)!==I.False?bt():e,r)}function fM(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=bp(e[n],t);return r}function hM(e,t){return fM(e.properties,t)}function mM(e,t){const r=hM(e,t);return pr(r)}function gM(e,t){return yp(fd(e),t)}function pM(e,t){const r=e.filter(n=>Ol(n,t)!==I.False);return r.length===1?r[0]:br(r)}function yp(e,t,r){return xs(e)?j(gM(e,t),r):vn(e)?j(vM(e,t),r):j(or(e)?pM(e.anyOf,t):Ol(e,t)!==I.False?e:bt(),r)}function bM(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=yp(e[n],t);return r}function yM(e,t){return bM(e.properties,t)}function vM(e,t){const r=yM(e,t);return pr(r)}function wM(e,t){return Ua(e)?j(e.returns,t):bt(t)}function mx(e){return No(Oo(e))}function Ts(e,t,r){return j({[_]:"Record",type:"object",patternProperties:{[e]:t}},r)}function vp(e,t,r){const n={};for(const i of e)n[i]=t;return ir(n,{...r,[ef]:"Record"})}function kM(e,t,r){return U9(e)?vp(Io(e),t,r):Ts(e.pattern,t,r)}function xM(e,t,r){return vp(Io(br(e)),t,r)}function $M(e,t,r){return vp([e.toString()],t,r)}function DM(e,t,r){return Ts(e.source,t,r)}function AM(e,t,r){const n=Pt(e.pattern)?wa:e.pattern;return Ts(n,t,r)}function EM(e,t,r){return Ts(wa,t,r)}function CM(e,t,r){return Ts(v9,t,r)}function SM(e,t,r){return ir({true:t,false:t},r)}function TM(e,t,r){return Ts(va,t,r)}function MM(e,t,r){return Ts(va,t,r)}function gx(e,t,r={}){return or(e)?xM(e.anyOf,t,r):xs(e)?kM(e,t,r):ws(e)?$M(e.const,t,r):Tl(e)?SM(e,t,r):Wa(e)?TM(e,t,r):Va(e)?MM(e,t,r):I5(e)?DM(e,t,r):Fl(e)?AM(e,t,r):M5(e)?EM(e,t,r):Ml(e)?CM(e,t,r):bt(r)}function wp(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function FM(e){const t=wp(e);return t===wa?hs():t===va?Cs():hs({pattern:t})}function px(e){return e.patternProperties[wp(e)]}function PM(e,t){return t.parameters=Rl(e,t.parameters),t.returns=ni(e,t.returns),t}function IM(e,t){return t.parameters=Rl(e,t.parameters),t.returns=ni(e,t.returns),t}function NM(e,t){return t.allOf=Rl(e,t.allOf),t}function OM(e,t){return t.anyOf=Rl(e,t.anyOf),t}function RM(e,t){return Pt(t.items)||(t.items=Rl(e,t.items)),t}function BM(e,t){return t.items=ni(e,t.items),t}function LM(e,t){return t.items=ni(e,t.items),t}function _M(e,t){return t.items=ni(e,t.items),t}function jM(e,t){return t.item=ni(e,t.item),t}function zM(e,t){const r=VM(e,t.properties);return{...t,...ir(r)}}function UM(e,t){const r=ni(e,FM(t)),n=ni(e,px(t)),i=gx(r,n);return{...t,...i}}function qM(e,t){return t.index in e?e[t.index]:pf()}function WM(e,t){const r=qg(t),n=Mo(t),i=ni(e,t);return r&&n?mx(i):r&&!n?No(i):!r&&n?Oo(i):i}function VM(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:WM(e,t[n])}),{})}function Rl(e,t){return t.map(r=>ni(e,r))}function ni(e,t){return Ua(t)?PM(e,t):qa(t)?IM(e,t):Rn(t)?NM(e,t):or(t)?OM(e,t):$s(t)?RM(e,t):ja(t)?BM(e,t):tf(t)?LM(e,t):nf(t)?_M(e,t):of(t)?jM(e,t):ai(t)?zM(e,t):sf(t)?UM(e,t):F5(t)?qM(e,t):t}function KM(e,t){return ni(t,jg(e))}function HM(e){return j({[_]:"Integer",type:"integer"},e)}function GM(e,t,r){return{[e]:Ja(Nt(e),t,mn(r))}}function ZM(e,t,r){return e.reduce((i,o)=>({...i,...GM(o,t,r)}),{})}function YM(e,t,r){return ZM(e.keys,t,r)}function JM(e,t,r){const n=YM(e,t,r);return pr(n)}function XM(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),r].join("")}function QM(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),r].join("")}function e7(e){return e.toUpperCase()}function t7(e){return e.toLowerCase()}function r7(e,t,r){const n=ap(e.pattern);if(!cl(n))return{...e,pattern:bx(e.pattern,t)};const s=[...hf(n)].map(l=>Nt(l)),a=yx(s,t),u=br(a);return G5([u],r)}function bx(e,t){return typeof e=="string"?t==="Uncapitalize"?XM(e):t==="Capitalize"?QM(e):t==="Uppercase"?e7(e):t==="Lowercase"?t7(e):e:e.toString()}function yx(e,t){return e.map(r=>Ja(r,t))}function Ja(e,t,r={}){return ks(e)?JM(e,t,r):xs(e)?r7(e,t,r):or(e)?br(yx(e.anyOf,t),r):ws(e)?Nt(bx(e.const,t),r):j(e,r)}function n7(e,t={}){return Ja(e,"Capitalize",t)}function i7(e,t={}){return Ja(e,"Lowercase",t)}function o7(e,t={}){return Ja(e,"Uncapitalize",t)}function s7(e,t={}){return Ja(e,"Uppercase",t)}function a7(e,t,r){const n={};for(const i of globalThis.Object.getOwnPropertyNames(e))n[i]=vf(e[i],t,mn(r));return n}function u7(e,t,r){return a7(e.properties,t,r)}function l7(e,t,r){const n=u7(e,t,r);return pr(n)}function c7(e,t){return e.map(r=>kp(r,t))}function d7(e,t){return e.map(r=>kp(r,t))}function f7(e,t){const{[t]:r,...n}=e;return n}function h7(e,t){return t.reduce((r,n)=>f7(r,n),e)}function m7(e,t,r){const n=pn(e,[Yr,"$id","required","properties"]),i=h7(r,t);return ir(i,n)}function g7(e){const t=e.reduce((r,n)=>P5(n)?[...r,Nt(n)]:r,[]);return br(t)}function kp(e,t){return Rn(e)?Ro(c7(e.allOf,t)):or(e)?br(d7(e.anyOf,t)):ai(e)?m7(e,t,e.properties):ir({})}function vf(e,t,r){const n=en(t)?g7(t):t,i=Br(t)?Io(t):t,o=Xr(e),s=Xr(t);return vn(e)?l7(e,i,r):ks(t)?v7(e,t,r):o&&s?Kt("Omit",[e,n],r):!o&&s?Kt("Omit",[e,n],r):o&&!s?Kt("Omit",[e,n],r):j({...kp(e,i),...r})}function p7(e,t,r){return{[t]:vf(e,[t],mn(r))}}function b7(e,t,r){return t.reduce((n,i)=>({...n,...p7(e,i,r)}),{})}function y7(e,t,r){return b7(e,t.keys,r)}function v7(e,t,r){const n=y7(e,t,r);return pr(n)}function w7(e,t,r){const n={};for(const i of globalThis.Object.getOwnPropertyNames(e))n[i]=wf(e[i],t,mn(r));return n}function k7(e,t,r){return w7(e.properties,t,r)}function x7(e,t,r){const n=k7(e,t,r);return pr(n)}function $7(e,t){return e.map(r=>xp(r,t))}function D7(e,t){return e.map(r=>xp(r,t))}function A7(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function E7(e,t,r){const n=pn(e,[Yr,"$id","required","properties"]),i=A7(r,t);return ir(i,n)}function C7(e){const t=e.reduce((r,n)=>P5(n)?[...r,Nt(n)]:r,[]);return br(t)}function xp(e,t){return Rn(e)?Ro($7(e.allOf,t)):or(e)?br(D7(e.anyOf,t)):ai(e)?E7(e,t,e.properties):ir({})}function wf(e,t,r){const n=en(t)?C7(t):t,i=Br(t)?Io(t):t,o=Xr(e),s=Xr(t);return vn(e)?x7(e,i,r):ks(t)?F7(e,t,r):o&&s?Kt("Pick",[e,n],r):!o&&s?Kt("Pick",[e,n],r):o&&!s?Kt("Pick",[e,n],r):j({...xp(e,i),...r})}function S7(e,t,r){return{[t]:wf(e,[t],mn(r))}}function T7(e,t,r){return t.reduce((n,i)=>({...n,...S7(e,i,r)}),{})}function M7(e,t,r){return T7(e,t.keys,r)}function F7(e,t,r){const n=M7(e,t,r);return pr(n)}function P7(e,t){return Kt("Partial",[Kt(e,t)])}function I7(e){return Kt("Partial",[Ga(e)])}function N7(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Oo(e[r]);return t}function O7(e,t){const r=pn(e,[Yr,"$id","required","properties"]),n=N7(t);return ir(n,r)}function J1(e){return e.map(t=>vx(t))}function vx(e){return za(e)?P7(e.target,e.parameters):Xr(e)?I7(e.$ref):Rn(e)?Ro(J1(e.allOf)):or(e)?br(J1(e.anyOf)):ai(e)?O7(e,e.properties):rf(e)||Tl(e)||Wa(e)||ws(e)||Wg(e)||Va(e)||Fl(e)||Vg(e)||Pl(e)?e:ir({})}function $p(e,t){return vn(e)?L7(e,t):j({...vx(e),...t})}function R7(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=$p(e[n],mn(t));return r}function B7(e,t){return R7(e.properties,t)}function L7(e,t){const r=B7(e,t);return pr(r)}function _7(e,t){return Kt("Required",[Kt(e,t)])}function j7(e){return Kt("Required",[Ga(e)])}function z7(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=pn(e[r],[Ji]);return t}function U7(e,t){const r=pn(e,[Yr,"$id","required","properties"]),n=z7(t);return ir(n,r)}function X1(e){return e.map(t=>wx(t))}function wx(e){return za(e)?_7(e.target,e.parameters):Xr(e)?j7(e.$ref):Rn(e)?Ro(X1(e.allOf)):or(e)?br(X1(e.anyOf)):ai(e)?U7(e,e.properties):rf(e)||Tl(e)||Wa(e)||ws(e)||Wg(e)||Va(e)||Fl(e)||Vg(e)||Pl(e)?e:ir({})}function Dp(e,t){return vn(e)?V7(e,t):j({...wx(e),...t})}function q7(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Dp(e[n],t);return r}function W7(e,t){return q7(e.properties,t)}function V7(e,t){const r=W7(e,t);return pr(r)}function K7(e,t){return t.map(r=>Xr(r)?Ap(e,r.$ref):bn(e,r))}function Ap(e,t){return t in e?Xr(e[t])?Ap(e,e[t].$ref):bn(e,e[t]):bt()}function H7(e){return gf(e[0])}function G7(e){return mf(e[0],e[1])}function Z7(e){return dp(e[0])}function Y7(e){return $p(e[0])}function J7(e){return vf(e[0],e[1])}function X7(e){return wf(e[0],e[1])}function Q7(e){return Dp(e[0])}function eF(e,t,r){const n=K7(e,r);return t==="Awaited"?H7(n):t==="Index"?G7(n):t==="KeyOf"?Z7(n):t==="Partial"?Y7(n):t==="Omit"?J7(n):t==="Pick"?X7(n):t==="Required"?Q7(n):bt()}function tF(e,t){return np(bn(e,t))}function rF(e,t){return ip(bn(e,t))}function nF(e,t,r){return op(Bl(e,t),bn(e,r))}function iF(e,t,r){return Nl(Bl(e,t),bn(e,r))}function oF(e,t){return Ro(Bl(e,t))}function sF(e,t){return cp(bn(e,t))}function aF(e,t){return ir(globalThis.Object.keys(t).reduce((r,n)=>({...r,[n]:bn(e,t[n])}),{}))}function uF(e,t){const[r,n]=[bn(e,px(t)),wp(t)],i=jg(t);return i.patternProperties[n]=r,i}function lF(e,t){return Xr(t)?{...Ap(e,t.$ref),[Yr]:t[Yr]}:t}function cF(e,t){return Ha(Bl(e,t))}function dF(e,t){return br(Bl(e,t))}function Bl(e,t){return t.map(r=>bn(e,r))}function bn(e,t){return Mo(t)?j(bn(e,pn(t,[Ji])),t):qg(t)?j(bn(e,pn(t,[Sl])),t):st(t)?j(lF(e,t),t):ja(t)?j(tF(e,t.items),t):tf(t)?j(rF(e,t.items),t):za(t)?j(eF(e,t.target,t.parameters)):Ua(t)?j(nF(e,t.parameters,t.returns),t):qa(t)?j(iF(e,t.parameters,t.returns),t):Rn(t)?j(oF(e,t.allOf),t):nf(t)?j(sF(e,t.items),t):ai(t)?j(aF(e,t.properties),t):sf(t)?j(uF(e,t)):$s(t)?j(cF(e,t.items||[]),t):or(t)?j(dF(e,t.anyOf),t):t}function fF(e,t){return t in e?bn(e,e[t]):bt()}function hF(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,r)=>({...t,[r]:fF(e,r)}),{})}class mF{constructor(t){const r=hF(t),n=this.WithIdentifiers(r);this.$defs=n}Import(t,r){const n={...this.$defs,[t]:j(this.$defs[t],r)};return j({[_]:"Import",$defs:n,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:{...t[n],$id:n}}),{})}}function gF(e){return new mF(e)}function pF(e,t){return j({[_]:"Not",not:e},t)}function bF(e,t){return qa(e)?Ha(e.parameters,t):bt()}let yF=0;function vF(e,t={}){Pt(t.$id)&&(t.$id=`T${yF++}`);const r=jg(e({[_]:"This",$ref:`${t.$id}`}));return r.$id=t.$id,j({[ef]:"Recursive",...r},t)}function wF(e,t){const r=At(e)?new globalThis.RegExp(e):e;return j({[_]:"RegExp",type:"RegExp",source:r.source,flags:r.flags},t)}function kF(e){return Rn(e)?e.allOf:or(e)?e.anyOf:$s(e)?e.items??[]:[]}function xF(e){return kF(e)}function $F(e,t){return qa(e)?j(e.returns,t):bt(t)}class DF{constructor(t){this.schema=t}Decode(t){return new AF(this.schema,t)}}class AF{constructor(t,r){this.schema=t,this.decode=r}EncodeTransform(t,r){const o={Encode:s=>r[Yr].Encode(t(s)),Decode:s=>this.decode(r[Yr].Decode(s))};return{...r,[Yr]:o}}EncodeSchema(t,r){const n={Decode:this.decode,Encode:t};return{...r,[Yr]:n}}Encode(t){return st(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function EF(e){return new DF(e)}function CF(e={}){return j({[_]:e[_]??"Unsafe"},e)}function SF(e){return j({[_]:"Void",type:"void"},e)}const TF=Object.freeze(Object.defineProperty({__proto__:null,Any:ul,Argument:E9,Array:np,AsyncIterator:ip,Awaited:gf,BigInt:up,Boolean:K5,Capitalize:n7,Composite:aT,Const:cT,Constructor:op,ConstructorParameters:dT,Date:nx,Enum:fT,Exclude:bp,Extends:pp,Extract:yp,Function:Nl,Index:mf,InstanceType:wM,Instantiate:KM,Integer:HM,Intersect:Ro,Iterator:cp,KeyOf:dp,Literal:Nt,Lowercase:i7,Mapped:TS,Module:gF,Never:bt,Not:pF,Null:ix,Number:Cs,Object:ir,Omit:vf,Optional:Oo,Parameters:bF,Partial:$p,Pick:wf,Promise:J5,Readonly:No,ReadonlyOptional:mx,Record:gx,Recursive:vF,Ref:Ga,RegExp:wF,Required:Dp,Rest:xF,ReturnType:$F,String:hs,Symbol:fp,TemplateLiteral:G5,Transform:EF,Tuple:Ha,Uint8Array:sx,Uncapitalize:o7,Undefined:ox,Union:br,Unknown:pf,Unsafe:CF,Uppercase:s7,Void:SF},Symbol.toStringTag,{value:"Module"})),rt=TF;function kx(e){switch(e.errorType){case M.ArrayContains:return"Expected array to contain at least one matching value";case M.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case M.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case M.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case M.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case M.ArrayUniqueItems:return"Expected array elements to be unique";case M.Array:return"Expected array";case M.AsyncIterator:return"Expected AsyncIterator";case M.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case M.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case M.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case M.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case M.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case M.BigInt:return"Expected bigint";case M.Boolean:return"Expected boolean";case M.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case M.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case M.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case M.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case M.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case M.Date:return"Expected Date";case M.Function:return"Expected function";case M.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case M.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case M.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case M.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case M.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case M.Integer:return"Expected integer";case M.IntersectUnevaluatedProperties:return"Unexpected property";case M.Intersect:return"Expected all values to match";case M.Iterator:return"Expected Iterator";case M.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case M.Never:return"Never";case M.Not:return"Value should not match";case M.Null:return"Expected null";case M.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case M.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case M.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case M.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case M.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case M.Number:return"Expected number";case M.Object:return"Expected object";case M.ObjectAdditionalProperties:return"Unexpected property";case M.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case M.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case M.ObjectRequiredProperty:return"Expected required property";case M.Promise:return"Expected Promise";case M.RegExp:return"Expected string to match regular expression";case M.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case M.StringFormat:return`Expected string to match '${e.schema.format}' format`;case M.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case M.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case M.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case M.String:return"Expected string";case M.Symbol:return"Expected symbol";case M.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case M.Tuple:return"Expected tuple";case M.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case M.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case M.Uint8Array:return"Expected Uint8Array";case M.Undefined:return"Expected undefined";case M.Union:return"Expected union value";case M.Void:return"Expected void";case M.Kind:return`Expected kind '${e.schema[_]}'`;default:return"Unknown error type"}}let xx=kx;function MF(e){xx=e}function FF(){return xx}class PF extends gr{constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function IF(e,t){const r=t.find(n=>n.$id===e.$ref);if(r===void 0)throw new PF(e);return Ln(r,t)}function kf(e,t){return!cn(e.$id)||t.some(r=>r.$id===e.$id)||t.push(e),t}function Ln(e,t){return e[_]==="This"||e[_]==="Ref"?IF(e,t):e}class NF extends gr{constructor(t){super("Unable to hash value"),this.value=t}}var yn;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(yn||(yn={}));let Js=BigInt("14695981039346656037");const[OF,RF]=[BigInt("1099511628211"),BigInt("18446744073709551616")],BF=Array.from({length:256}).map((e,t)=>BigInt(t)),$x=new Float64Array(1),Dx=new DataView($x.buffer),Ax=new Uint8Array($x.buffer);function*LF(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let r=0;r<t;r++)yield e>>8*(t-1-r)&255}function _F(e){Cr(yn.Array);for(const t of e)$a(t)}function jF(e){Cr(yn.Boolean),Cr(e?1:0)}function zF(e){Cr(yn.BigInt),Dx.setBigInt64(0,e);for(const t of Ax)Cr(t)}function UF(e){Cr(yn.Date),$a(e.getTime())}function qF(e){Cr(yn.Null)}function WF(e){Cr(yn.Number),Dx.setFloat64(0,e);for(const t of Ax)Cr(t)}function VF(e){Cr(yn.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())$a(t),$a(e[t])}function KF(e){Cr(yn.String);for(let t=0;t<e.length;t++)for(const r of LF(e.charCodeAt(t)))Cr(r)}function HF(e){Cr(yn.Symbol),$a(e.description)}function GF(e){Cr(yn.Uint8Array);for(let t=0;t<e.length;t++)Cr(e[t])}function ZF(e){return Cr(yn.Undefined)}function $a(e){if(gn(e))return _F(e);if(Xd(e))return jF(e);if(ji(e))return zF(e);if(zg(e))return UF(e);if(Jd(e))return qF();if(De(e))return WF(e);if(Di(e))return VF(e);if(cn(e))return KF(e);if(Qd(e))return HF(e);if(Ug(e))return GF(e);if(To(e))return ZF();throw new NF(e)}function Cr(e){Js=Js^BF[e],Js=Js*OF%RF}function Ep(e){return Js=BigInt("14695981039346656037"),$a(e),Js}class YF extends gr{constructor(t){super("Unknown type"),this.schema=t}}function JF(e){return e[_]==="Any"||e[_]==="Unknown"}function Pe(e){return e!==void 0}function XF(e,t,r){return!0}function QF(e,t,r){return!0}function eP(e,t,r){if(!gn(r)||Pe(e.minItems)&&!(r.length>=e.minItems)||Pe(e.maxItems)&&!(r.length<=e.maxItems))return!1;for(const o of r)if(!tr(e.items,t,o))return!1;if(e.uniqueItems===!0&&!(function(){const o=new Set;for(const s of r){const a=Ep(s);if(o.has(a))return!1;o.add(a)}return!0})())return!1;if(!(Pe(e.contains)||De(e.minContains)||De(e.maxContains)))return!0;const n=Pe(e.contains)?e.contains:bt(),i=r.reduce((o,s)=>tr(n,t,s)?o+1:o,0);return!(i===0||De(e.minContains)&&i<e.minContains||De(e.maxContains)&&i>e.maxContains)}function tP(e,t,r){return $5(r)}function rP(e,t,r){return!(!ji(r)||Pe(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||Pe(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||Pe(e.maximum)&&!(r<=e.maximum)||Pe(e.minimum)&&!(r>=e.minimum)||Pe(e.multipleOf)&&r%e.multipleOf!==BigInt(0))}function nP(e,t,r){return Xd(r)}function iP(e,t,r){return tr(e.returns,t,r.prototype)}function oP(e,t,r){return!(!zg(r)||Pe(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)||Pe(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)||Pe(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)||Pe(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)||Pe(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0)}function sP(e,t,r){return S5(r)}function aP(e,t,r){const n=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];return tr(i,[...t,...n],r)}function uP(e,t,r){return!(!C5(r)||Pe(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||Pe(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||Pe(e.maximum)&&!(r<=e.maximum)||Pe(e.minimum)&&!(r>=e.minimum)||Pe(e.multipleOf)&&r%e.multipleOf!==0)}function lP(e,t,r){const n=e.allOf.every(i=>tr(i,t,r));if(e.unevaluatedProperties===!1){const i=new RegExp(xa(e)),o=Object.getOwnPropertyNames(r).every(s=>i.test(s));return n&&o}else if(Br(e.unevaluatedProperties)){const i=new RegExp(xa(e)),o=Object.getOwnPropertyNames(r).every(s=>i.test(s)||tr(e.unevaluatedProperties,t,r[s]));return n&&o}else return n}function cP(e,t,r){return D5(r)}function dP(e,t,r){return r===e.const}function fP(e,t,r){return!1}function hP(e,t,r){return!tr(e.not,t,r)}function mP(e,t,r){return Jd(r)}function gP(e,t,r){return!(!Dt.IsNumberLike(r)||Pe(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||Pe(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||Pe(e.minimum)&&!(r>=e.minimum)||Pe(e.maximum)&&!(r<=e.maximum)||Pe(e.multipleOf)&&r%e.multipleOf!==0)}function pP(e,t,r){if(!Dt.IsObjectLike(r)||Pe(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||Pe(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const n=Object.getOwnPropertyNames(e.properties);for(const i of n){const o=e.properties[i];if(e.required&&e.required.includes(i)){if(!tr(o,t,r[i])||(Ya(o)||JF(o))&&!(i in r))return!1}else if(Dt.IsExactOptionalProperty(r,i)&&!tr(o,t,r[i]))return!1}if(e.additionalProperties===!1){const i=Object.getOwnPropertyNames(r);return e.required&&e.required.length===n.length&&i.length===n.length?!0:i.every(o=>n.includes(o))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(r).every(o=>n.includes(o)||tr(e.additionalProperties,t,r[o])):!0}function bP(e,t,r){return A5(r)}function yP(e,t,r){if(!Dt.IsRecordLike(r)||Pe(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||Pe(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const[n,i]=Object.entries(e.patternProperties)[0],o=new RegExp(n),s=Object.entries(r).every(([l,d])=>o.test(l)?tr(i,t,d):!0),a=typeof e.additionalProperties=="object"?Object.entries(r).every(([l,d])=>o.test(l)?!0:tr(e.additionalProperties,t,d)):!0,u=e.additionalProperties===!1?Object.getOwnPropertyNames(r).every(l=>o.test(l)):!0;return s&&a&&u}function vP(e,t,r){return tr(Ln(e,t),t,r)}function wP(e,t,r){const n=new RegExp(e.source,e.flags);return Pe(e.minLength)&&!(r.length>=e.minLength)||Pe(e.maxLength)&&!(r.length<=e.maxLength)?!1:n.test(r)}function kP(e,t,r){return!cn(r)||Pe(e.minLength)&&!(r.length>=e.minLength)||Pe(e.maxLength)&&!(r.length<=e.maxLength)||Pe(e.pattern)&&!new RegExp(e.pattern).test(r)?!1:Pe(e.format)?Xg(e.format)?Qg(e.format)(r):!1:!0}function xP(e,t,r){return Qd(r)}function $P(e,t,r){return cn(r)&&new RegExp(e.pattern).test(r)}function DP(e,t,r){return tr(Ln(e,t),t,r)}function AP(e,t,r){if(!gn(r)||e.items===void 0&&r.length!==0||r.length!==e.maxItems)return!1;if(!e.items)return!0;for(let n=0;n<e.items.length;n++)if(!tr(e.items[n],t,r[n]))return!1;return!0}function EP(e,t,r){return To(r)}function CP(e,t,r){return e.anyOf.some(n=>tr(n,t,r))}function SP(e,t,r){return!(!Ug(r)||Pe(e.maxByteLength)&&!(r.length<=e.maxByteLength)||Pe(e.minByteLength)&&!(r.length>=e.minByteLength))}function TP(e,t,r){return!0}function MP(e,t,r){return Dt.IsVoidLike(r)}function FP(e,t,r){return Do(e[_])?rp(e[_])(e,r):!1}function tr(e,t,r){const n=Pe(e.$id)?kf(e,t):t,i=e;switch(i[_]){case"Any":return XF();case"Argument":return QF();case"Array":return eP(i,n,r);case"AsyncIterator":return tP(i,n,r);case"BigInt":return rP(i,n,r);case"Boolean":return nP(i,n,r);case"Constructor":return iP(i,n,r);case"Date":return oP(i,n,r);case"Function":return sP(i,n,r);case"Import":return aP(i,n,r);case"Integer":return uP(i,n,r);case"Intersect":return lP(i,n,r);case"Iterator":return cP(i,n,r);case"Literal":return dP(i,n,r);case"Never":return fP();case"Not":return hP(i,n,r);case"Null":return mP(i,n,r);case"Number":return gP(i,n,r);case"Object":return pP(i,n,r);case"Promise":return bP(i,n,r);case"Record":return yP(i,n,r);case"Ref":return vP(i,n,r);case"RegExp":return wP(i,n,r);case"String":return kP(i,n,r);case"Symbol":return xP(i,n,r);case"TemplateLiteral":return $P(i,n,r);case"This":return DP(i,n,r);case"Tuple":return AP(i,n,r);case"Undefined":return EP(i,n,r);case"Union":return CP(i,n,r);case"Uint8Array":return SP(i,n,r);case"Unknown":return TP();case"Void":return MP(i,n,r);default:if(!Do(i[_]))throw new YF(i);return FP(i,n,r)}}function hd(...e){return e.length===3?tr(e[0],e[1],e[2]):tr(e[0],[],e[1])}var M;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})(M||(M={}));class PP extends gr{constructor(t){super("Unknown type"),this.schema=t}}function Bi(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function Fe(e){return e!==void 0}class Ex{constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function W(e,t,r,n,i=[]){return{type:e,schema:t,path:r,value:n,message:FF()({errorType:e,path:r,schema:t,value:n,errors:i}),errors:i}}function*IP(e,t,r,n){}function*NP(e,t,r,n){}function*OP(e,t,r,n){if(!gn(n))return yield W(M.Array,e,r,n);Fe(e.minItems)&&!(n.length>=e.minItems)&&(yield W(M.ArrayMinItems,e,r,n)),Fe(e.maxItems)&&!(n.length<=e.maxItems)&&(yield W(M.ArrayMaxItems,e,r,n));for(let s=0;s<n.length;s++)yield*rr(e.items,t,`${r}/${s}`,n[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const a of n){const u=Ep(a);if(s.has(u))return!1;s.add(u)}return!0})()&&(yield W(M.ArrayUniqueItems,e,r,n)),!(Fe(e.contains)||Fe(e.minContains)||Fe(e.maxContains)))return;const i=Fe(e.contains)?e.contains:bt(),o=n.reduce((s,a,u)=>rr(i,t,`${r}${u}`,a).next().done===!0?s+1:s,0);o===0&&(yield W(M.ArrayContains,e,r,n)),De(e.minContains)&&o<e.minContains&&(yield W(M.ArrayMinContains,e,r,n)),De(e.maxContains)&&o>e.maxContains&&(yield W(M.ArrayMaxContains,e,r,n))}function*RP(e,t,r,n){$5(n)||(yield W(M.AsyncIterator,e,r,n))}function*BP(e,t,r,n){if(!ji(n))return yield W(M.BigInt,e,r,n);Fe(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield W(M.BigIntExclusiveMaximum,e,r,n)),Fe(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield W(M.BigIntExclusiveMinimum,e,r,n)),Fe(e.maximum)&&!(n<=e.maximum)&&(yield W(M.BigIntMaximum,e,r,n)),Fe(e.minimum)&&!(n>=e.minimum)&&(yield W(M.BigIntMinimum,e,r,n)),Fe(e.multipleOf)&&n%e.multipleOf!==BigInt(0)&&(yield W(M.BigIntMultipleOf,e,r,n))}function*LP(e,t,r,n){Xd(n)||(yield W(M.Boolean,e,r,n))}function*_P(e,t,r,n){yield*rr(e.returns,t,r,n.prototype)}function*jP(e,t,r,n){if(!zg(n))return yield W(M.Date,e,r,n);Fe(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)&&(yield W(M.DateExclusiveMaximumTimestamp,e,r,n)),Fe(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)&&(yield W(M.DateExclusiveMinimumTimestamp,e,r,n)),Fe(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)&&(yield W(M.DateMaximumTimestamp,e,r,n)),Fe(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)&&(yield W(M.DateMinimumTimestamp,e,r,n)),Fe(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0&&(yield W(M.DateMultipleOfTimestamp,e,r,n))}function*zP(e,t,r,n){S5(n)||(yield W(M.Function,e,r,n))}function*UP(e,t,r,n){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];yield*rr(o,[...t,...i],r,n)}function*qP(e,t,r,n){if(!C5(n))return yield W(M.Integer,e,r,n);Fe(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield W(M.IntegerExclusiveMaximum,e,r,n)),Fe(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield W(M.IntegerExclusiveMinimum,e,r,n)),Fe(e.maximum)&&!(n<=e.maximum)&&(yield W(M.IntegerMaximum,e,r,n)),Fe(e.minimum)&&!(n>=e.minimum)&&(yield W(M.IntegerMinimum,e,r,n)),Fe(e.multipleOf)&&n%e.multipleOf!==0&&(yield W(M.IntegerMultipleOf,e,r,n))}function*WP(e,t,r,n){let i=!1;for(const o of e.allOf)for(const s of rr(o,t,r,n))i=!0,yield s;if(i)return yield W(M.Intersect,e,r,n);if(e.unevaluatedProperties===!1){const o=new RegExp(xa(e));for(const s of Object.getOwnPropertyNames(n))o.test(s)||(yield W(M.IntersectUnevaluatedProperties,e,`${r}/${s}`,n))}if(typeof e.unevaluatedProperties=="object"){const o=new RegExp(xa(e));for(const s of Object.getOwnPropertyNames(n))if(!o.test(s)){const a=rr(e.unevaluatedProperties,t,`${r}/${s}`,n[s]).next();a.done||(yield a.value)}}}function*VP(e,t,r,n){D5(n)||(yield W(M.Iterator,e,r,n))}function*KP(e,t,r,n){n!==e.const&&(yield W(M.Literal,e,r,n))}function*HP(e,t,r,n){yield W(M.Never,e,r,n)}function*GP(e,t,r,n){rr(e.not,t,r,n).next().done===!0&&(yield W(M.Not,e,r,n))}function*ZP(e,t,r,n){Jd(n)||(yield W(M.Null,e,r,n))}function*YP(e,t,r,n){if(!Dt.IsNumberLike(n))return yield W(M.Number,e,r,n);Fe(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield W(M.NumberExclusiveMaximum,e,r,n)),Fe(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield W(M.NumberExclusiveMinimum,e,r,n)),Fe(e.maximum)&&!(n<=e.maximum)&&(yield W(M.NumberMaximum,e,r,n)),Fe(e.minimum)&&!(n>=e.minimum)&&(yield W(M.NumberMinimum,e,r,n)),Fe(e.multipleOf)&&n%e.multipleOf!==0&&(yield W(M.NumberMultipleOf,e,r,n))}function*JP(e,t,r,n){if(!Dt.IsObjectLike(n))return yield W(M.Object,e,r,n);Fe(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield W(M.ObjectMinProperties,e,r,n)),Fe(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield W(M.ObjectMaxProperties,e,r,n));const i=Array.isArray(e.required)?e.required:[],o=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(n);for(const a of i)s.includes(a)||(yield W(M.ObjectRequiredProperty,e.properties[a],`${r}/${Bi(a)}`,void 0));if(e.additionalProperties===!1)for(const a of s)o.includes(a)||(yield W(M.ObjectAdditionalProperties,e,`${r}/${Bi(a)}`,n[a]));if(typeof e.additionalProperties=="object")for(const a of s)o.includes(a)||(yield*rr(e.additionalProperties,t,`${r}/${Bi(a)}`,n[a]));for(const a of o){const u=e.properties[a];e.required&&e.required.includes(a)?(yield*rr(u,t,`${r}/${Bi(a)}`,n[a]),Ya(e)&&!(a in n)&&(yield W(M.ObjectRequiredProperty,u,`${r}/${Bi(a)}`,void 0))):Dt.IsExactOptionalProperty(n,a)&&(yield*rr(u,t,`${r}/${Bi(a)}`,n[a]))}}function*XP(e,t,r,n){A5(n)||(yield W(M.Promise,e,r,n))}function*QP(e,t,r,n){if(!Dt.IsRecordLike(n))return yield W(M.Object,e,r,n);Fe(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield W(M.ObjectMinProperties,e,r,n)),Fe(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield W(M.ObjectMaxProperties,e,r,n));const[i,o]=Object.entries(e.patternProperties)[0],s=new RegExp(i);for(const[a,u]of Object.entries(n))s.test(a)&&(yield*rr(o,t,`${r}/${Bi(a)}`,u));if(typeof e.additionalProperties=="object")for(const[a,u]of Object.entries(n))s.test(a)||(yield*rr(e.additionalProperties,t,`${r}/${Bi(a)}`,u));if(e.additionalProperties===!1){for(const[a,u]of Object.entries(n))if(!s.test(a))return yield W(M.ObjectAdditionalProperties,e,`${r}/${Bi(a)}`,u)}}function*eI(e,t,r,n){yield*rr(Ln(e,t),t,r,n)}function*tI(e,t,r,n){if(!cn(n))return yield W(M.String,e,r,n);if(Fe(e.minLength)&&!(n.length>=e.minLength)&&(yield W(M.StringMinLength,e,r,n)),Fe(e.maxLength)&&!(n.length<=e.maxLength)&&(yield W(M.StringMaxLength,e,r,n)),!new RegExp(e.source,e.flags).test(n))return yield W(M.RegExp,e,r,n)}function*rI(e,t,r,n){if(!cn(n))return yield W(M.String,e,r,n);Fe(e.minLength)&&!(n.length>=e.minLength)&&(yield W(M.StringMinLength,e,r,n)),Fe(e.maxLength)&&!(n.length<=e.maxLength)&&(yield W(M.StringMaxLength,e,r,n)),cn(e.pattern)&&(new RegExp(e.pattern).test(n)||(yield W(M.StringPattern,e,r,n))),cn(e.format)&&(Xg(e.format)?Qg(e.format)(n)||(yield W(M.StringFormat,e,r,n)):yield W(M.StringFormatUnknown,e,r,n))}function*nI(e,t,r,n){Qd(n)||(yield W(M.Symbol,e,r,n))}function*iI(e,t,r,n){if(!cn(n))return yield W(M.String,e,r,n);new RegExp(e.pattern).test(n)||(yield W(M.StringPattern,e,r,n))}function*oI(e,t,r,n){yield*rr(Ln(e,t),t,r,n)}function*sI(e,t,r,n){if(!gn(n))return yield W(M.Tuple,e,r,n);if(e.items===void 0&&n.length!==0)return yield W(M.TupleLength,e,r,n);if(n.length!==e.maxItems)return yield W(M.TupleLength,e,r,n);if(e.items)for(let i=0;i<e.items.length;i++)yield*rr(e.items[i],t,`${r}/${i}`,n[i])}function*aI(e,t,r,n){To(n)||(yield W(M.Undefined,e,r,n))}function*uI(e,t,r,n){if(hd(e,t,n))return;const i=e.anyOf.map(o=>new Ex(rr(o,t,r,n)));yield W(M.Union,e,r,n,i)}function*lI(e,t,r,n){if(!Ug(n))return yield W(M.Uint8Array,e,r,n);Fe(e.maxByteLength)&&!(n.length<=e.maxByteLength)&&(yield W(M.Uint8ArrayMaxByteLength,e,r,n)),Fe(e.minByteLength)&&!(n.length>=e.minByteLength)&&(yield W(M.Uint8ArrayMinByteLength,e,r,n))}function*cI(e,t,r,n){}function*dI(e,t,r,n){Dt.IsVoidLike(n)||(yield W(M.Void,e,r,n))}function*fI(e,t,r,n){rp(e[_])(e,n)||(yield W(M.Kind,e,r,n))}function*rr(e,t,r,n){const i=Fe(e.$id)?[...t,e]:t,o=e;switch(o[_]){case"Any":return yield*IP();case"Argument":return yield*NP();case"Array":return yield*OP(o,i,r,n);case"AsyncIterator":return yield*RP(o,i,r,n);case"BigInt":return yield*BP(o,i,r,n);case"Boolean":return yield*LP(o,i,r,n);case"Constructor":return yield*_P(o,i,r,n);case"Date":return yield*jP(o,i,r,n);case"Function":return yield*zP(o,i,r,n);case"Import":return yield*UP(o,i,r,n);case"Integer":return yield*qP(o,i,r,n);case"Intersect":return yield*WP(o,i,r,n);case"Iterator":return yield*VP(o,i,r,n);case"Literal":return yield*KP(o,i,r,n);case"Never":return yield*HP(o,i,r,n);case"Not":return yield*GP(o,i,r,n);case"Null":return yield*ZP(o,i,r,n);case"Number":return yield*YP(o,i,r,n);case"Object":return yield*JP(o,i,r,n);case"Promise":return yield*XP(o,i,r,n);case"Record":return yield*QP(o,i,r,n);case"Ref":return yield*eI(o,i,r,n);case"RegExp":return yield*tI(o,i,r,n);case"String":return yield*rI(o,i,r,n);case"Symbol":return yield*nI(o,i,r,n);case"TemplateLiteral":return yield*iI(o,i,r,n);case"This":return yield*oI(o,i,r,n);case"Tuple":return yield*sI(o,i,r,n);case"Undefined":return yield*aI(o,i,r,n);case"Union":return yield*uI(o,i,r,n);case"Uint8Array":return yield*lI(o,i,r,n);case"Unknown":return yield*cI();case"Void":return yield*dI(o,i,r,n);default:if(!Do(o[_]))throw new PP(e);return yield*fI(o,i,r,n)}}function hI(...e){const t=e.length===3?rr(e[0],e[1],"",e[2]):rr(e[0],[],"",e[1]);return new Ex(t)}class mI extends gr{constructor(t,r,n){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class gI extends gr{constructor(t,r,n,i){super(i instanceof Error?i.message:"Unknown error"),this.schema=t,this.path=r,this.value=n,this.error=i}}function ft(e,t,r){try{return st(e)?e[Yr].Decode(r):r}catch(n){throw new gI(e,t,r,n)}}function pI(e,t,r,n){return gn(n)?ft(e,r,n.map((i,o)=>ui(e.items,t,`${r}/${o}`,i))):ft(e,r,n)}function bI(e,t,r,n){if(!Di(n)||T5(n))return ft(e,r,n);const i=rx(e),o=i.map(d=>d[0]),s={...n};for(const[d,f]of i)d in s&&(s[d]=ui(f,t,`${r}/${d}`,s[d]));if(!st(e.unevaluatedProperties))return ft(e,r,s);const a=Object.getOwnPropertyNames(s),u=e.unevaluatedProperties,l={...s};for(const d of a)o.includes(d)||(l[d]=ft(u,`${r}/${d}`,l[d]));return ft(e,r,l)}function yI(e,t,r,n){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=ui(o,[...t,...i],r,n);return ft(e,r,s)}function vI(e,t,r,n){return ft(e,r,ui(e.not,t,r,n))}function wI(e,t,r,n){if(!Di(n))return ft(e,r,n);const i=Ss(e),o={...n};for(const l of i)E5(o,l)&&(To(o[l])&&(!Pl(e.properties[l])||Dt.IsExactOptionalProperty(o,l))||(o[l]=ui(e.properties[l],t,`${r}/${l}`,o[l])));if(!Br(e.additionalProperties))return ft(e,r,o);const s=Object.getOwnPropertyNames(o),a=e.additionalProperties,u={...o};for(const l of s)i.includes(l)||(u[l]=ft(a,`${r}/${l}`,u[l]));return ft(e,r,u)}function kI(e,t,r,n){if(!Di(n))return ft(e,r,n);const i=Object.getOwnPropertyNames(e.patternProperties)[0],o=new RegExp(i),s={...n};for(const d of Object.getOwnPropertyNames(n))o.test(d)&&(s[d]=ui(e.patternProperties[i],t,`${r}/${d}`,s[d]));if(!Br(e.additionalProperties))return ft(e,r,s);const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const d of a)o.test(d)||(l[d]=ft(u,`${r}/${d}`,l[d]));return ft(e,r,l)}function xI(e,t,r,n){const i=Ln(e,t);return ft(e,r,ui(i,t,r,n))}function $I(e,t,r,n){const i=Ln(e,t);return ft(e,r,ui(i,t,r,n))}function DI(e,t,r,n){return gn(n)&&gn(e.items)?ft(e,r,e.items.map((i,o)=>ui(i,t,`${r}/${o}`,n[o]))):ft(e,r,n)}function AI(e,t,r,n){for(const i of e.anyOf){if(!hd(i,t,n))continue;const o=ui(i,t,r,n);return ft(e,r,o)}return ft(e,r,n)}function ui(e,t,r,n){const i=kf(e,t),o=e;switch(e[_]){case"Array":return pI(o,i,r,n);case"Import":return yI(o,i,r,n);case"Intersect":return bI(o,i,r,n);case"Not":return vI(o,i,r,n);case"Object":return wI(o,i,r,n);case"Record":return kI(o,i,r,n);case"Ref":return xI(o,i,r,n);case"Symbol":return ft(o,r,n);case"This":return $I(o,i,r,n);case"Tuple":return DI(o,i,r,n);case"Union":return AI(o,i,r,n);default:return ft(o,r,n)}}function EI(e,t,r){return ui(e,t,"",r)}class CI extends gr{constructor(t,r,n){super("The encoded value does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class SI extends gr{constructor(t,r,n,i){super(`${i instanceof Error?i.message:"Unknown error"}`),this.schema=t,this.path=r,this.value=n,this.error=i}}function dr(e,t,r){try{return st(e)?e[Yr].Encode(r):r}catch(n){throw new SI(e,t,r,n)}}function TI(e,t,r,n){const i=dr(e,r,n);return gn(i)?i.map((o,s)=>ii(e.items,t,`${r}/${s}`,o)):i}function MI(e,t,r,n){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=dr(e,r,n);return ii(o,[...t,...i],r,s)}function FI(e,t,r,n){const i=dr(e,r,n);if(!Di(n)||T5(n))return i;const o=rx(e),s=o.map(f=>f[0]),a={...i};for(const[f,h]of o)f in a&&(a[f]=ii(h,t,`${r}/${f}`,a[f]));if(!st(e.unevaluatedProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.unevaluatedProperties,d={...a};for(const f of u)s.includes(f)||(d[f]=dr(l,`${r}/${f}`,d[f]));return d}function PI(e,t,r,n){return dr(e.not,r,dr(e,r,n))}function II(e,t,r,n){const i=dr(e,r,n);if(!Di(i))return i;const o=Ss(e),s={...i};for(const d of o)E5(s,d)&&(To(s[d])&&(!Pl(e.properties[d])||Dt.IsExactOptionalProperty(s,d))||(s[d]=ii(e.properties[d],t,`${r}/${d}`,s[d])));if(!Br(e.additionalProperties))return s;const a=Object.getOwnPropertyNames(s),u=e.additionalProperties,l={...s};for(const d of a)o.includes(d)||(l[d]=dr(u,`${r}/${d}`,l[d]));return l}function NI(e,t,r,n){const i=dr(e,r,n);if(!Di(n))return i;const o=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(o),a={...i};for(const f of Object.getOwnPropertyNames(n))s.test(f)&&(a[f]=ii(e.patternProperties[o],t,`${r}/${f}`,a[f]));if(!Br(e.additionalProperties))return a;const u=Object.getOwnPropertyNames(a),l=e.additionalProperties,d={...a};for(const f of u)s.test(f)||(d[f]=dr(l,`${r}/${f}`,d[f]));return d}function OI(e,t,r,n){const i=Ln(e,t),o=ii(i,t,r,n);return dr(e,r,o)}function RI(e,t,r,n){const i=Ln(e,t),o=ii(i,t,r,n);return dr(e,r,o)}function BI(e,t,r,n){const i=dr(e,r,n);return gn(e.items)?e.items.map((o,s)=>ii(o,t,`${r}/${s}`,i[s])):[]}function LI(e,t,r,n){for(const i of e.anyOf){if(!hd(i,t,n))continue;const o=ii(i,t,r,n);return dr(e,r,o)}for(const i of e.anyOf){const o=ii(i,t,r,n);if(hd(e,t,o))return dr(e,r,o)}return dr(e,r,n)}function ii(e,t,r,n){const i=kf(e,t),o=e;switch(e[_]){case"Array":return TI(o,i,r,n);case"Import":return MI(o,i,r,n);case"Intersect":return FI(o,i,r,n);case"Not":return PI(o,i,r,n);case"Object":return II(o,i,r,n);case"Record":return NI(o,i,r,n);case"Ref":return OI(o,i,r,n);case"This":return RI(o,i,r,n);case"Tuple":return BI(o,i,r,n);case"Union":return LI(o,i,r,n);default:return dr(o,r,n)}}function _I(e,t,r){return ii(e,t,"",r)}function jI(e,t){return st(e)||Ht(e.items,t)}function zI(e,t){return st(e)||Ht(e.items,t)}function UI(e,t){return st(e)||Ht(e.returns,t)||e.parameters.some(r=>Ht(r,t))}function qI(e,t){return st(e)||Ht(e.returns,t)||e.parameters.some(r=>Ht(r,t))}function WI(e,t){return st(e)||st(e.unevaluatedProperties)||e.allOf.some(r=>Ht(r,t))}function VI(e,t){const r=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((i,o)=>[...i,e.$defs[o]],[]),n=e.$defs[e.$ref];return st(e)||Ht(n,[...r,...t])}function KI(e,t){return st(e)||Ht(e.items,t)}function HI(e,t){return st(e)||Ht(e.not,t)}function GI(e,t){return st(e)||Object.values(e.properties).some(r=>Ht(r,t))||Br(e.additionalProperties)&&Ht(e.additionalProperties,t)}function ZI(e,t){return st(e)||Ht(e.item,t)}function YI(e,t){const r=Object.getOwnPropertyNames(e.patternProperties)[0],n=e.patternProperties[r];return st(e)||Ht(n,t)||Br(e.additionalProperties)&&st(e.additionalProperties)}function JI(e,t){return st(e)?!0:Ht(Ln(e,t),t)}function XI(e,t){return st(e)?!0:Ht(Ln(e,t),t)}function QI(e,t){return st(e)||!To(e.items)&&e.items.some(r=>Ht(r,t))}function eN(e,t){return st(e)||e.anyOf.some(r=>Ht(r,t))}function Ht(e,t){const r=kf(e,t),n=e;if(e.$id&&mm.has(e.$id))return!1;switch(e.$id&&mm.add(e.$id),e[_]){case"Array":return jI(n,r);case"AsyncIterator":return zI(n,r);case"Constructor":return UI(n,r);case"Function":return qI(n,r);case"Import":return VI(n,r);case"Intersect":return WI(n,r);case"Iterator":return KI(n,r);case"Not":return HI(n,r);case"Object":return GI(n,r);case"Promise":return ZI(n,r);case"Record":return YI(n,r);case"Ref":return JI(n,r);case"This":return XI(n,r);case"Tuple":return QI(n,r);case"Union":return eN(n,r);default:return st(e)}}const mm=new Set;function tN(e,t){return mm.clear(),Ht(e,t)}class rN{constructor(t,r,n,i){this.schema=t,this.references=r,this.checkFunc=n,this.code=i,this.hasTransform=tN(t,r)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return hI(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new mI(this.schema,t,this.Errors(t).First());return this.hasTransform?EI(this.schema,this.references,t):t}Encode(t){const r=this.hasTransform?_I(this.schema,this.references,t):t;if(!this.checkFunc(r))throw new CI(this.schema,t,this.Errors(t).First());return r}}var zi;(function(e){function t(o){return o===36}e.DollarSign=t;function r(o){return o===95}e.IsUnderscore=r;function n(o){return o>=65&&o<=90||o>=97&&o<=122}e.IsAlpha=n;function i(o){return o>=48&&o<=57}e.IsNumeric=i})(zi||(zi={}));var md;(function(e){function t(o){return o.length===0?!1:zi.IsNumeric(o.charCodeAt(0))}function r(o){if(t(o))return!1;for(let s=0;s<o.length;s++){const a=o.charCodeAt(s);if(!(zi.IsAlpha(a)||zi.IsNumeric(a)||zi.DollarSign(a)||zi.IsUnderscore(a)))return!1}return!0}function n(o){return o.replace(/'/g,"\\'")}function i(o,s){return r(s)?`${o}.${s}`:`${o}['${n(s)}']`}e.Encode=i})(md||(md={}));var gm;(function(e){function t(r){const n=[];for(let i=0;i<r.length;i++){const o=r.charCodeAt(i);zi.IsNumeric(o)||zi.IsAlpha(o)?n.push(r.charAt(i)):n.push(`_${o}_`)}return n.join("").replace(/__/g,"_")}e.Encode=t})(gm||(gm={}));var pm;(function(e){function t(r){return r.replace(/'/g,"\\'")}e.Escape=t})(pm||(pm={}));class nN extends gr{constructor(t){super("Unknown type"),this.schema=t}}class Q1 extends gr{constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var Yo;(function(e){function t(s,a,u){return Dt.ExactOptionalPropertyTypes?`('${a}' in ${s} ? ${u} : true)`:`(${md.Encode(s,a)} !== undefined ? ${u} : true)`}e.IsExactOptionalProperty=t;function r(s){return Dt.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}e.IsObjectLike=r;function n(s){return Dt.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}e.IsRecordLike=n;function i(s){return Dt.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}e.IsNumberLike=i;function o(s){return Dt.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}e.IsVoidLike=o})(Yo||(Yo={}));var Ku;(function(e){function t(A){return A[_]==="Any"||A[_]==="Unknown"}function*r(A,q,S){yield"true"}function*n(A,q,S){yield"true"}function*i(A,q,S){yield`Array.isArray(${S})`;const[le,G]=[sr("value","any"),sr("acc","number")];De(A.maxItems)&&(yield`${S}.length <= ${A.maxItems}`),De(A.minItems)&&(yield`${S}.length >= ${A.minItems}`);const Q=yt(A.items,q,"value");if(yield`((array) => { for(const ${le} of array) if(!(${Q})) { return false }; return true; })(${S})`,gt(A.contains)||De(A.minContains)||De(A.maxContains)){const Ye=gt(A.contains)?A.contains:bt(),xt=yt(Ye,q,"value"),Ur=De(A.minContains)?[`(count >= ${A.minContains})`]:[],vr=De(A.maxContains)?[`(count <= ${A.maxContains})`]:[],tn=`const count = value.reduce((${G}, ${le}) => ${xt} ? acc + 1 : acc, 0)`,Bo=["(count > 0)",...Ur,...vr].join(" && ");yield`((${le}) => { ${tn}; return ${Bo}})(${S})`}A.uniqueItems===!0&&(yield`((${le}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${S})`)}function*o(A,q,S){yield`(typeof value === 'object' && Symbol.asyncIterator in ${S})`}function*s(A,q,S){yield`(typeof ${S} === 'bigint')`,ji(A.exclusiveMaximum)&&(yield`${S} < BigInt(${A.exclusiveMaximum})`),ji(A.exclusiveMinimum)&&(yield`${S} > BigInt(${A.exclusiveMinimum})`),ji(A.maximum)&&(yield`${S} <= BigInt(${A.maximum})`),ji(A.minimum)&&(yield`${S} >= BigInt(${A.minimum})`),ji(A.multipleOf)&&(yield`(${S} % BigInt(${A.multipleOf})) === 0`)}function*a(A,q,S){yield`(typeof ${S} === 'boolean')`}function*u(A,q,S){yield*Ct(A.returns,q,`${S}.prototype`)}function*l(A,q,S){yield`(${S} instanceof Date) && Number.isFinite(${S}.getTime())`,De(A.exclusiveMaximumTimestamp)&&(yield`${S}.getTime() < ${A.exclusiveMaximumTimestamp}`),De(A.exclusiveMinimumTimestamp)&&(yield`${S}.getTime() > ${A.exclusiveMinimumTimestamp}`),De(A.maximumTimestamp)&&(yield`${S}.getTime() <= ${A.maximumTimestamp}`),De(A.minimumTimestamp)&&(yield`${S}.getTime() >= ${A.minimumTimestamp}`),De(A.multipleOfTimestamp)&&(yield`(${S}.getTime() % ${A.multipleOfTimestamp}) === 0`)}function*d(A,q,S){yield`(typeof ${S} === 'function')`}function*f(A,q,S){const le=globalThis.Object.getOwnPropertyNames(A.$defs).reduce((G,Q)=>[...G,A.$defs[Q]],[]);yield*Ct(Ga(A.$ref),[...q,...le],S)}function*h(A,q,S){yield`Number.isInteger(${S})`,De(A.exclusiveMaximum)&&(yield`${S} < ${A.exclusiveMaximum}`),De(A.exclusiveMinimum)&&(yield`${S} > ${A.exclusiveMinimum}`),De(A.maximum)&&(yield`${S} <= ${A.maximum}`),De(A.minimum)&&(yield`${S} >= ${A.minimum}`),De(A.multipleOf)&&(yield`(${S} % ${A.multipleOf}) === 0`)}function*g(A,q,S){const le=A.allOf.map(G=>yt(G,q,S)).join(" && ");if(A.unevaluatedProperties===!1){const G=jt(`${new RegExp(xa(A))};`),Q=`Object.getOwnPropertyNames(${S}).every(key => ${G}.test(key))`;yield`(${le} && ${Q})`}else if(gt(A.unevaluatedProperties)){const G=jt(`${new RegExp(xa(A))};`),Q=`Object.getOwnPropertyNames(${S}).every(key => ${G}.test(key) || ${yt(A.unevaluatedProperties,q,`${S}[key]`)})`;yield`(${le} && ${Q})`}else yield`(${le})`}function*m(A,q,S){yield`(typeof value === 'object' && Symbol.iterator in ${S})`}function*p(A,q,S){typeof A.const=="number"||typeof A.const=="boolean"?yield`(${S} === ${A.const})`:yield`(${S} === '${pm.Escape(A.const)}')`}function*k(A,q,S){yield"false"}function*x(A,q,S){yield`(!${yt(A.not,q,S)})`}function*D(A,q,S){yield`(${S} === null)`}function*C(A,q,S){yield Yo.IsNumberLike(S),De(A.exclusiveMaximum)&&(yield`${S} < ${A.exclusiveMaximum}`),De(A.exclusiveMinimum)&&(yield`${S} > ${A.exclusiveMinimum}`),De(A.maximum)&&(yield`${S} <= ${A.maximum}`),De(A.minimum)&&(yield`${S} >= ${A.minimum}`),De(A.multipleOf)&&(yield`(${S} % ${A.multipleOf}) === 0`)}function*P(A,q,S){yield Yo.IsObjectLike(S),De(A.minProperties)&&(yield`Object.getOwnPropertyNames(${S}).length >= ${A.minProperties}`),De(A.maxProperties)&&(yield`Object.getOwnPropertyNames(${S}).length <= ${A.maxProperties}`);const le=Object.getOwnPropertyNames(A.properties);for(const G of le){const Q=md.Encode(S,G),Ye=A.properties[G];if(A.required&&A.required.includes(G))yield*Ct(Ye,q,Q),(Ya(Ye)||t(Ye))&&(yield`('${G}' in ${S})`);else{const xt=yt(Ye,q,Q);yield Yo.IsExactOptionalProperty(S,G,xt)}}if(A.additionalProperties===!1)if(A.required&&A.required.length===le.length)yield`Object.getOwnPropertyNames(${S}).length === ${le.length}`;else{const G=`[${le.map(Q=>`'${Q}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${S}).every(key => ${G}.includes(key))`}if(typeof A.additionalProperties=="object"){const G=yt(A.additionalProperties,q,`${S}[key]`),Q=`[${le.map(Ye=>`'${Ye}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${S}).every(key => ${Q}.includes(key) || ${G}))`}}function*O(A,q,S){yield`${S} instanceof Promise`}function*H(A,q,S){yield Yo.IsRecordLike(S),De(A.minProperties)&&(yield`Object.getOwnPropertyNames(${S}).length >= ${A.minProperties}`),De(A.maxProperties)&&(yield`Object.getOwnPropertyNames(${S}).length <= ${A.maxProperties}`);const[le,G]=Object.entries(A.patternProperties)[0],Q=jt(`${new RegExp(le)}`),Ye=yt(G,q,"value"),xt=gt(A.additionalProperties)?yt(A.additionalProperties,q,S):A.additionalProperties===!1?"false":"true",Ur=`(${Q}.test(key) ? ${Ye} : ${xt})`;yield`(Object.entries(${S}).every(([key, value]) => ${Ur}))`}function*ee(A,q,S){const le=Ln(A,q);if(me.functions.has(A.$ref))return yield`${Ze(A.$ref)}(${S})`;yield*Ct(le,q,S)}function*ne(A,q,S){const le=jt(`${new RegExp(A.source,A.flags)};`);yield`(typeof ${S} === 'string')`,De(A.maxLength)&&(yield`${S}.length <= ${A.maxLength}`),De(A.minLength)&&(yield`${S}.length >= ${A.minLength}`),yield`${le}.test(${S})`}function*X(A,q,S){yield`(typeof ${S} === 'string')`,De(A.maxLength)&&(yield`${S}.length <= ${A.maxLength}`),De(A.minLength)&&(yield`${S}.length >= ${A.minLength}`),A.pattern!==void 0&&(yield`${jt(`${new RegExp(A.pattern)};`)}.test(${S})`),A.format!==void 0&&(yield`format('${A.format}', ${S})`)}function*ye(A,q,S){yield`(typeof ${S} === 'symbol')`}function*se(A,q,S){yield`(typeof ${S} === 'string')`,yield`${jt(`${new RegExp(A.pattern)};`)}.test(${S})`}function*xe(A,q,S){yield`${Ze(A.$ref)}(${S})`}function*ze(A,q,S){if(yield`Array.isArray(${S})`,A.items===void 0)return yield`${S}.length === 0`;yield`(${S}.length === ${A.maxItems})`;for(let le=0;le<A.items.length;le++)yield`${yt(A.items[le],q,`${S}[${le}]`)}`}function*Ge(A,q,S){yield`${S} === undefined`}function*yr(A,q,S){yield`(${A.anyOf.map(G=>yt(G,q,S)).join(" || ")})`}function*Et(A,q,S){yield`${S} instanceof Uint8Array`,De(A.maxByteLength)&&(yield`(${S}.length <= ${A.maxByteLength})`),De(A.minByteLength)&&(yield`(${S}.length >= ${A.minByteLength})`)}function*kn(A,q,S){yield"true"}function*xn(A,q,S){yield Yo.IsVoidLike(S)}function*zr(A,q,S){const le=me.instances.size;me.instances.set(le,A),yield`kind('${A[_]}', ${le}, ${S})`}function*Ct(A,q,S,le=!0){const G=cn(A.$id)?[...q,A]:q,Q=A;if(le&&cn(A.$id)){const Ye=Ze(A.$id);if(me.functions.has(Ye))return yield`${Ye}(${S})`;{me.functions.set(Ye,"<deferred>");const xt=Be(Ye,A,q,"value",!1);return me.functions.set(Ye,xt),yield`${Ye}(${S})`}}switch(Q[_]){case"Any":return yield*r();case"Argument":return yield*n();case"Array":return yield*i(Q,G,S);case"AsyncIterator":return yield*o(Q,G,S);case"BigInt":return yield*s(Q,G,S);case"Boolean":return yield*a(Q,G,S);case"Constructor":return yield*u(Q,G,S);case"Date":return yield*l(Q,G,S);case"Function":return yield*d(Q,G,S);case"Import":return yield*f(Q,G,S);case"Integer":return yield*h(Q,G,S);case"Intersect":return yield*g(Q,G,S);case"Iterator":return yield*m(Q,G,S);case"Literal":return yield*p(Q,G,S);case"Never":return yield*k();case"Not":return yield*x(Q,G,S);case"Null":return yield*D(Q,G,S);case"Number":return yield*C(Q,G,S);case"Object":return yield*P(Q,G,S);case"Promise":return yield*O(Q,G,S);case"Record":return yield*H(Q,G,S);case"Ref":return yield*ee(Q,G,S);case"RegExp":return yield*ne(Q,G,S);case"String":return yield*X(Q,G,S);case"Symbol":return yield*ye(Q,G,S);case"TemplateLiteral":return yield*se(Q,G,S);case"This":return yield*xe(Q,G,S);case"Tuple":return yield*ze(Q,G,S);case"Undefined":return yield*Ge(Q,G,S);case"Union":return yield*yr(Q,G,S);case"Uint8Array":return yield*Et(Q,G,S);case"Unknown":return yield*kn();case"Void":return yield*xn(Q,G,S);default:if(!Do(Q[_]))throw new nN(A);return yield*zr(Q,G,S)}}const me={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function yt(A,q,S,le=!0){return`(${[...Ct(A,q,S,le)].join(" && ")})`}function Ze(A){return`check_${gm.Encode(A)}`}function jt(A){const q=`local_${me.variables.size}`;return me.variables.set(q,`const ${q} = ${A}`),q}function Be(A,q,S,le,G=!0){const[Q,Ye]=[`
`,tn=>"".padStart(tn," ")],xt=sr("value","any"),Ur=$n("boolean"),vr=[...Ct(q,S,le,G)].map(tn=>`${Ye(4)}${tn}`).join(` &&${Q}`);return`function ${A}(${xt})${Ur} {${Q}${Ye(2)}return (${Q}${vr}${Q}${Ye(2)})
}`}function sr(A,q){const S=me.language==="typescript"?`: ${q}`:"";return`${A}${S}`}function $n(A){return me.language==="typescript"?`: ${A}`:""}function jn(A,q,S){const le=Be("check",A,q,"value"),G=sr("value","any"),Q=$n("boolean"),Ye=[...me.functions.values()],xt=[...me.variables.values()],Ur=cn(A.$id)?`return function check(${G})${Q} {
  return ${Ze(A.$id)}(value)
}`:`return ${le}`;return[...xt,...Ye,Ur].join(`
`)}function Si(...A){const q={language:"javascript"},[S,le,G]=A.length===2&&gn(A[1])?[A[0],A[1],q]:A.length===2&&!gn(A[1])?[A[0],[],A[1]]:A.length===3?[A[0],A[1],A[2]]:A.length===1?[A[0],[],q]:[null,[],q];if(me.language=G.language,me.variables.clear(),me.functions.clear(),me.instances.clear(),!gt(S))throw new Q1(S);for(const Q of le)if(!gt(Q))throw new Q1(Q);return jn(S,le)}e.Code=Si;function ru(A,q=[]){const S=Si(A,q,{language:"javascript"}),le=globalThis.Function("kind","format","hash",S),G=new Map(me.instances);function Q(vr,tn,Bo){if(!Do(vr)||!G.has(tn))return!1;const Kf=rp(vr),nu=G.get(tn);return Kf(nu,Bo)}function Ye(vr,tn){return Xg(vr)?Qg(vr)(tn):!1}function xt(vr){return Ep(vr)}const Ur=le(Q,Ye,xt);return new rN(A,q,Ur,S)}e.Compile=ru})(Ku||(Ku={}));const bm={};function Cx(e,t){e in bm||(bm[e]=t)}let ev=!1;function iN(){ev||(ev=!0,MF(e=>(bm[e.schema[_]]||kx)(e)))}const ym=Symbol.for("object-shape-tester.shape-identifier");function Ce(e){if(iN(),Cp(e))return e;const t=vm(e),r=Jo(t,!1),n=Jo(t,!0),i={$_schema:t,$_schemaNoExtraKeys:r,$_schemaExtraKeys:n,default:t.default,$_compiledSchema:Ku.Compile(t),$_compiledSchemaNoExtraKeys:Ku.Compile(r),$_compiledSchemaExtraKeys:Ku.Compile(n)};return Object.defineProperties(i,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[ym]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),i}function Cp(e){return T.hasKey(e,ym)&&!!e[ym]}function Sp(e){return T.hasKey(e,_)}function Jo(e,t){const r={...e};if(Array.isArray(e.anyOf)&&(r.anyOf=e.anyOf.map(n=>Jo(n,t))),Array.isArray(e.allOf)&&(r.allOf=e.allOf.map(n=>Jo(n,t))),Sp(e.items)?r.items=Jo(e.items,t):Array.isArray(e.items)&&(r.items=e.items.map(n=>Jo(n,t))),T.isObject(e.properties)){const n={};Object.entries(e.properties).forEach(([i,o])=>{n[i]=Jo(o,t)}),r.properties=n}return r.additionalProperties=t,r}function vm(e){if(Sp(e))return e;if(Cp(e))return e.$_schema;if(T.isFunction(e))return rt.Function([],rt.Any(),{default:e});if(T.isObject(e)){const t={},r={};return Object.entries(e).forEach(([n,i])=>{const o=vm(i);r[n]=o,t[n]=o.default}),rt.Object(r,{default:t})}else{if(T.isArray(e))return rt.Array(rt.Union(e.map(t=>vm(t))),{default:[]});if(T.isPrimitive(e)){if(T.isString(e))return rt.String({default:e});if(T.isNumber(e))return rt.Number({default:e});if(T.isBoolean(e))return rt.Boolean({default:e});if(T.isSymbol(e))return rt.Symbol({default:e});if(T.isNull(e))return rt.Null({default:null});if(T.isUndefined(e))return rt.Undefined({default:void 0});if(T.isBigInt(e))return rt.BigInt({default:e});It.tsType(e).equals(),It.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${$(e)}`)}}function oN({checkValue:e,default:t,name:r}){return Do(r)||tp(r,(n,i)=>e(i)),(n=t)=>Ce(rt.Unsafe({[_]:r,default:n}))}function oi(e,t){const r=on(e);if(t!=null&&!r.includes(t))throw new TypeError("enumShape default must be a subset of the given enum.");return Ce(rt.Union(r.map(n=>rt.Literal(n)),{default:t??r[0]}))}function we(e){return T.isSymbol(e)?sN(e):Ce(rt.Const(e,{default:e}))}const mc="ExactSymbol";function sN(e){return Do(mc)||tp(mc,(t,r)=>r===t.symbol),Cx(mc,({schema:t})=>`Expected symbol ${t.symbol?.description?yk({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),Ce(rt.Unsafe({[_]:mc,symbol:e,default:e}))}function aN(...e){const t={},r=e.map(n=>{const i=Ce(n);return Object.assign(t,i.default),i.$_schema});return Ce(rt.Composite(r,{default:t}))}function Jt(e,t={}){Dt.ExactOptionalPropertyTypes=!0;const r=Ce(e).$_schema,n=t.alsoUndefined?rt.Union([rt.Undefined(),r]):r;return Ce(rt.Optional(n))}function je(...e){let t;const r=e.map((n,i)=>{const o=Ce(n);return i||(t=o.default),o.$_schema});return Ce(rt.Union(r,{default:t}))}function We(e){return Jt(je(void 0,null,e))}function uN(e){const t=Ce(e);return Ce(rt.Partial(t.$_schema,{default:t.default}))}function Sx(e){return je(e,"",-1,0n,!1,fp(),null,void 0)}class lN extends TypeError{errors;failureMessage;name="ShapeMismatchError";constructor(t,r){const n=t.map(o=>Tx(o)).join(`
`),i=Pa(r,`Shape mismatch:
${og(n,1)}`);super(i),this.errors=t,this.failureMessage=r}}function cN(e){return e.errors.flatMap(t=>Array.from(t))}function Tx(e,t=0){const r=cN(e).map(i=>Tx(i,t+1)),n=[e.path,e.message].filter(T.isTruthy).join(": ")+(r.length?":":"");return[og(n,t),...r].join(`
`)}function ho(e,t,r={}){return Mx(t,r).Check(e)}function gd(e,t,r={},n){if(ho(e,t,r))return;const i=Array.from(Mx(t,r).Errors(e));if(i.length)throw new lN(i,n)}function Mx(e,t){return e=dN(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function dN(e){return Ce(e)}function Xs({exclusiveMax:e,exclusiveMin:t,...r}){const{min:n,max:i}=Ym(r),o=r.default??(i-n)/2+n,s=Ce(rt.Number({...t?{exclusiveMinimum:n}:{minimum:n},...e?{exclusiveMaximum:i}:{maximum:i},default:o})),a=hk(()=>gd(o,s));if(a)throw Ia(a,"Default range value is not within range.");return s}const Rc="recordShape";function Ll({keys:e,values:t,partial:r,additionalProperties:n}){fN();const i=Fx(e),o=Ce(t);return Ce(rt.Unsafe({[_]:Rc,keysShape:i,valuesShape:o,isPartial:!!r,additionalProperties:!!n,default:hN({isPartial:!!r,keysShape:i,valuesShape:o})}))}function fN(){Do(Rc)||tp(Rc,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const r=Object.entries(t).every(([i,o])=>{const s=e.additionalProperties?!0:ho(i,e.keysShape),a=ho(o,e.valuesShape);return s&&a}),n=e.isPartial?!0:!tv(e.keysShape,t).length;return r&&n}),Cx(Rc,e=>{const r=e.schema,n=e.value;if(typeof n!="object"||!n||Array.isArray(n))return"Expected an object";const i=Vt(Object.entries(n),([u])=>u,(u,[l,d])=>!ho(l,r.keysShape)||!ho(d,r.valuesShape)),o=tv(r.keysShape,n),s=i.length?["Failure at keys",i.join(",")].join(": "):"",a=o.length?["Missing keys",o.join(",")].join(": "):"";return[s,a].filter(T.isTruthy).join(`
`)})}function tv(e,t){const r=pd(e).filter(n=>T.isPropertyKey(n));return r.length?r.filter(n=>!T.hasKey(t,n)):[]}function hN({keysShape:e,valuesShape:t,isPartial:r}){if(r)return{};{const n=pd(e),i=t.default;return Object.fromEntries(n.map(o=>[o,i]))}}function Fx(e){return Cp(e)?e:Sp(e)?Ce(e):T.isObject(e)?oi(e):T.isArray(e)&&T.isLengthAtLeast(e,1)?je(...e.map(t=>we(t))):T.isPropertyKey(e)?Ce(e):Ce(rt.Undefined())}function pd(e){const t=e.$_schema,r=t[_].toLowerCase();return["const","literal"].includes(r)?[t.const]:r==="union"?Id(t.anyOf.flatMap(n=>pd(Ce(n)))):["undefined","number","string","symbol"].includes(r)?[]:pd(Fx(e.default))}function mN(e){return Ce(rt.Unknown({default:e}))}const gN=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Tp=gN.reduce((e,t)=>(e[t]=t,e),{});mt.defaultZone.name;const Px=Tp.UTC,pN=Ce({hour:Xs({...oy,default:oy.min}),minute:Xs({...sy,default:sy.min}),second:Xs({...ay,default:ay.min}),millisecond:Xs({...uy,default:uy.min}),timezone:oi(Tp,Px)}),bN=Ce({year:2023,month:Xs({...cy,default:cy.min}),day:Xs({...dy,default:dy.min}),timezone:oi(Tp,Px)});Ce(aN(bN,pN));pe.Years+"",pe.Months+"",pe.Weeks+"",pe.Days+"",pe.Hours+"",pe.Minutes+"",pe.Seconds+"",pe.Milliseconds+"";Ce(je({get:we(J.Month),in:je(we(J.Year))},{get:we(J.Week),in:je(we(J.Year),we(J.Month))},{get:we(J.Day),in:je(we(J.Year),we(J.Month),we(J.Week))},{get:we(J.Hour),in:je(we(J.Year),we(J.Month),we(J.Week),we(J.Day))},{get:we(J.Minute),in:je(we(J.Year),we(J.Month),we(J.Week),we(J.Day),we(J.Hour))},{get:we(J.Second),in:je(we(J.Year),we(J.Month),we(J.Week),we(J.Day),we(J.Hour),we(J.Minute))},{get:we(J.Millisecond),in:je(we(J.Year),we(J.Month),we(J.Week),we(J.Day),we(J.Hour),we(J.Minute),we(J.Second))}));Ll({keys:oi(pe),values:-1,partial:!0});var rv;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(rv||(rv={}));var wm;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(wm||(wm={}));var nv;(function(e){e.Year="year",e.Month="month",e.Day="day"})(nv||(nv={}));const yN={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};RE(yN,on(wm));oN({default:new Date().toISOString(),name:"UtcIsoString",checkValue(e){return vN(e)}});function vN(e){return ge.fromISO(e).toUTC().toISO()===e}const wN=Ce({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:mN()});function jh(e){return ho(e,wN,{allowExtraKeys:!0})}class Ix extends w5{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck="equalityCheck"in t?t.equalityCheck:Lg}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}const{I:kN}=p6,iv=e=>e,ov=()=>document.createComment(""),pu=(e,t,r)=>{const n=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const o=n.insertBefore(ov(),i),s=n.insertBefore(ov(),i);r=new kN(o,s,e,e.options)}else{const o=r._$AB.nextSibling,s=r._$AM,a=s!==e;if(a){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==s._$AU&&r._$AP(u)}if(o!==i||a){let u=r._$AA;for(;u!==o;){const l=iv(u).nextSibling;iv(n).insertBefore(u,i),u=l}}}return r},Ho=(e,t,r=e)=>(e._$AI(t,r),e),xN={},$N=(e,t=xN)=>e._$AH=t,DN=e=>e._$AH,zh=e=>{e._$AR(),e._$AA.remove()};const xf={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Ai=e=>(...t)=>({_$litDirective$:e,values:t});class Ei{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}const AN={attribute:!0,type:String,converter:ed,reflect:!1,hasChanged:kg},EN=(e=AN,t,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,u,e,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(n==="setter"){const{name:s}=r;return function(a){const u=this[s];t.call(this,a),this.requestUpdate(s,u,e,!0,a)}}throw Error("Unsupported decorator location: "+n)};function CN(e){return(t,r)=>typeof r=="object"?EN(e,t,r):((n,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,n),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,r)}const Nn=Ai(class extends Ei{constructor(e){if(super(e),e.type!==xf.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return dn}});const Xt=e=>e??fe;function*SN(e,t){const r=typeof t=="function";if(e!==void 0){let n=-1;for(const i of e)n>-1&&(yield r?t(n):t),n++,yield i}}let km=class extends Ei{constructor(t){if(super(t),this.it=fe,t.type!==xf.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===fe||t==null)return this._t=void 0,this.it=t;if(t===dn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};km.directiveName="unsafeHTML",km.resultType=1;const TN=Ai(km);function MN(e,t,r){return e?t(e):r?.(e)}class FN extends zu{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function PN(e,t,r){const n=!t.length&&!r.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(n||i)return[...e];const o=e.map(a=>[a]);return o.length||(o[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(o[a]=[])}),t.forEach(a=>{const u=o[a.index];u&&u.splice(0,0,...a.values)}),o.flat()}function xm(e){return T.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Mp(e){return T.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function Nx(e){return Vt(e,t=>{if(xm(t))return t.definition;if(Mp(t))return t.tagInterpolationKey||t},T.isTruthy)}const Ox=new WeakMap;function IN(e,t){const r=Nx(t);return Rx(Ox,[e,...r]).value?.template}function NN(e,t,r){const n=Nx(t);return Lx(Ox,[e,...n],r)}function Rx(e,t,r=0){const{currentTemplateAndNested:n,reason:i}=Bx(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Rx(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:i}}function Bx(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const i=e.get(n);return i==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:i,reason:"key and value exists"}}function Lx(e,t,r,n=0){const{currentTemplateAndNested:i,currentKey:o,reason:s}=Bx(e,t,n);if(!o)return{result:!1,reason:s};const a=i??{nested:void 0,template:void 0};if(i||e.set(o,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),Lx(u,t,r,n+1)}function _x(e,t,r){const n=IN(e,t),i=n??r();if(!n){const a=NN(e,t,i);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const o=i.valuesTransform(t),s=PN(t,o.valueInsertions,o.valueIndexDeletions);return{strings:i.templateStrings,values:s}}function jx(e,t,r,n){const i=[],o=[],s=[],a=[];return e.forEach((l,d)=>{const f=i.length-1,h=i[f],g=d-1,m=t[g];n&&n(l);let p,k=[];if(typeof h=="string"&&(p=r(h,l,m),p)){i[f]=[h,p.replacement].join(""),s.push(g);const D=p.getExtraValues;k=D?D(m):[],k.length&&D?(i[f]+=" ",k.forEach((C,P)=>{P&&i.push(" ")}),a.push(C=>{const P=C[g],O=D(P);return{index:g,values:O}}),i.push(l)):i[f]+=l}p||i.push(l);const x=e.raw[d];p?(o[f]=[o[f],p.replacement,x].join(""),k.length&&k.forEach(()=>{o.push("")})):o.push(x)}),{templateStrings:Object.assign([],i,{raw:o}),valuesTransform(l){const d=a.flatMap(f=>f(l));return{valueIndexDeletions:s,valueInsertions:d}}}}function ON(...[e,t,r]){if(Mp(r))return{replacement:r.tagName,getExtraValues:void 0}}function RN(e,t){return jx(e,t,ON)}function z(e,...t){const r=_x(e,t,()=>RN(e,t));return Ck(r.strings,...r.values)}const BN={allowPolymorphicState:!1,errorHandler:void 0};function zx(e,t){const r=e.instanceState;tt(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&tt(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}class LN extends CustomEvent{_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function $f(){return e=>class extends LN{static type=e;_type=e;constructor(t){super(e,t)}}}function nr(){return $f()}function _N(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const i=$f()([e,n].join("-"));return r[n]=i,r},{}):{}}function jN(e){return e?lt(e,t=>t):{}}function Ux(e,t){t in e||CN()(e,t)}function zN(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function sv(e,t){const r=e;function n(s){t?zN(s,e,e.tagName):Ux(e,s)}function i(s,a){return n(a),r[a]}return new Proxy({},{get:i,set(s,a,u){n(a);const l=r[a];function d(h){s[a]=h,r[a]=h}const f=e.observablePropertyListenerMap[a];if(l!==u&&jh(l)&&f&&l.removeListener(f),jh(u))if(f)u.listen(!1,f);else{let h=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=h,u.listen(!1,h)}else jh(l)&&(e.observablePropertyListenerMap[a]=void 0);return d(u),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,a){if(a in s)return{get value(){return i(s,a)},configurable:!0,enumerable:!0}},has(s,a){return Reflect.has(s,a)}})}function av(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid element string name '${n}' in '${e}': element string names must begin with the element's tag name.`)})}function uv(e,t,r){return r?wo(r,i=>({key:i,value:[e,t,i].join("-")}),{}):{}}function UN({hostClassNames:e,cssVars:t}){return{hostClasses:lt(e,(r,n)=>({name:Ae(n),selector:Ae(`:host(.${n})`)})),cssVars:t}}function qN({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:i}){t&&tt(t).forEach(o=>{const s=t[o],a=r[o];typeof s=="function"&&(s({state:n,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function WN({element:e,eventsMap:t,cssVars:r,slotNamesMap:n,testIdsMap:i}){function o(a){tt(a).forEach(u=>{const l=a[u];e.instanceState[u]=l})}return{cssVars:r,slotNames:n,testIds:i,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function Ci(...e){return It.isEmpty(e),t=>{const r=t;if(!T.isObject(r))throw new TypeError("Cannot define element with non-object init: ${init}");return VN({...r,options:{...r.options}})}}function VN(e){if(!T.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!T.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...BN,...e.options},r=_N(e.tagName,e.events),n=jN(e.hostClasses);e.hostClasses&&av(e.tagName,e.hostClasses),e.cssVars&&av(e.tagName,e.cssVars);const i=e.cssVars?xi(e.cssVars):{},o=uv(e.tagName,"slot",e.slotNames),s=uv(e.tagName,"test-id",e.testIds),a=typeof e.styles=="function"?e.styles(UN({hostClassNames:n,cssVars:i})):e.styles||z``,u=e.render;function l(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:d,inputs:f}}const d=class extends FN{static elementOptions=t;static tagName=e.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return WN({element:this,eventsMap:r,cssVars:i,slotNamesMap:o,testIdsMap:s})}static assign=l;static events=r;static render=u;static hostClasses=n;static cssVars=i;static init=e;static slotNames=o;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const f=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const g=e.state(f);if(g instanceof Promise)throw new TypeError("init cannot be asynchronous");tt(g).forEach(m=>{Ux(this,m),this.instanceState[m]=g[m]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(f)instanceof Promise))throw new TypeError("init cannot be asynchronous");const h=u(f);if(h instanceof Promise)throw new TypeError("render cannot be asynchronous");return qN({host:f.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},h}catch(f){const h=Ia(f,`Failed to render ${e.tagName}`);return console.error(h),this._lastRenderError=h,t.errorHandler?.(h),fr(h)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const f=this.createRenderParams();if(e.init(f)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(f=>{T.hasKey(f,"destroy")&&T.isFunction(f.destroy)&&f.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const f=this.createRenderParams();if(e.cleanup(f)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(f){zx(this,f)}observablePropertyListenerMap={};instanceInputs=sv(this,!1);instanceState=sv(this,!t.allowPolymorphicState);constructor(){super(),this.definition=d}};return Object.defineProperties(d,{name:{value:_E(e.tagName,{firstLetterCase:Ju.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,d)),d}class KN extends Ys{isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function HN(e){return new KN(e)}const lv=(e,t,r)=>{const n=new Map;for(let i=t;i<=r;i++)n.set(e[i],i);return n},GN=Ai(class extends Ei{constructor(e){if(super(e),e.type!==xf.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const i=[],o=[];let s=0;for(const a of e)i[s]=n?n(a,s):s,o[s]=r(a,s),s++;return{values:o,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const i=DN(e),{values:o,keys:s}=this.dt(t,r,n);if(!Array.isArray(i))return this.ut=s,o;const a=this.ut??=[],u=[];let l,d,f=0,h=i.length-1,g=0,m=o.length-1;for(;f<=h&&g<=m;)if(i[f]===null)f++;else if(i[h]===null)h--;else if(a[f]===s[g])u[g]=Ho(i[f],o[g]),f++,g++;else if(a[h]===s[m])u[m]=Ho(i[h],o[m]),h--,m--;else if(a[f]===s[m])u[m]=Ho(i[f],o[m]),pu(e,u[m+1],i[f]),f++,m--;else if(a[h]===s[g])u[g]=Ho(i[h],o[g]),pu(e,i[f],i[h]),h--,g++;else if(l===void 0&&(l=lv(s,g,m),d=lv(a,f,h)),l.has(a[f]))if(l.has(a[h])){const p=d.get(s[g]),k=p!==void 0?i[p]:null;if(k===null){const x=pu(e,i[f]);Ho(x,o[g]),u[g]=x}else u[g]=Ho(k,o[g]),pu(e,i[f],k),i[p]=null;g++}else zh(i[h]),h--;else zh(i[f]),f++;for(;g<=m;){const p=pu(e,u[m+1]);Ho(p,o[g]),u[g++]=p}for(;f<=h;){const p=i[f++];p!==null&&zh(p)}return this.ut=s,$N(e,u),dn}}),ZN=GN;function Df(e,t){return ms(e,t),e.element}function YN(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function ms(e,t){const r=YN(e),n=r?`: in ${r}`:"";if(e.type!==xf.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function JN(e,t){return Ai(class extends Ei{element;constructor(r){super(r),this.element=Qt.instanceOf(Df(r,e),HTMLElement)}render(...r){return t({params:r,directive:this,element:this.element}),dn}})}const rs=JN("attributes",({element:e,params:[t],directive:r})=>{if(!t)return;const i=La(r,"allAttributesApplied",()=>new Set);tt(t).forEach(o=>{if(o.toLowerCase()!==o)throw new Error(`Cannot assign attribute name with uppercase letters: ${o}`);i.add(o)}),i.forEach(o=>{const s=t[o];s==null||s===!1||s===fe?e.removeAttribute(o):s===""||s===!0?e.setAttribute(o,""):e.setAttribute(o,String(s))})});function XN(e){const t=Ai(class extends Ei{element;constructor(r){super(r),this.element=Df(r,e)}render(r){return this.element.setAttribute(e,r),dn}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function Ee(e,t){return QN(e,t)}const QN=Ai(class extends Ei{element;lastListenerMetaData;constructor(e){super(e),this.element=Df(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>this.lastListenerMetaData?.callback(r)}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),dn}});function eO(e){return Ee("keydown",async t=>{const r=t.code.toLowerCase();(r.includes("enter")||r.includes("return")||r==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}const cv="onDomCreated",bd=Ai(class extends Ei{element;constructor(e){super(e),ms(e,cv)}update(e,[t]){ms(e,cv);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),dv="onDomRendered",tO=Ai(class extends Ei{constructor(e){super(e),ms(e,dv)}update(e,[t]){ms(e,dv);const r=e.element;return window.requestAnimationFrame(()=>t(r)),this.render(t)}render(e){}}),fv="onResize",qx=Ai(class extends Ei{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&rO(this.element,this.callback,e)});callback;constructor(e){super(e),ms(e,fv)}update(e,[t]){ms(e,fv),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function rO(e,t,r){const n=r[0];if(!n)throw console.error(r),new Error("Resize observation triggered but the first entry was empty.");t({target:n.target,contentRect:n.contentRect},e)}function nO(e,t,r,n,i={}){const o=i.useLastResolvedValue?e.lastResolvedValue:e.value;return o instanceof Error?n?n(o):fr(o):T.isPromiseLike(o)||i.useLastResolvedValue&&o===void 0?t:r?r(o):o}function Zn(e,t,r){return MN(e,()=>t,()=>r)}const{attributeDirective:iO}=XN("data-test-id"),$m=iO;function Wx(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return(...n)=>i=>(t(i),Ci(...n)(r(i)))}function oO(e,t){return sO(void 0,e)}const sO=Ai(class extends Ei{element;constructor(e){super(e),this.element=Df(e,"assign")}render(e,t){return zx(this.element,t),dn}}),aO={};function uO(e,t){return t.map((r,n)=>{const i=e[n],o=e[n+1];if(i&&o){const{shouldHaveTagNameHere:s}=Vx(i,o);if(s&&T.isString(r))return{tagName:r,tagInterpolationKey:La(aO,r,()=>({tagName:r}))}}return r})}function Vx(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function lO(...[e,t,r]){const n=xm(r)?r.definition:r,{isOpeningTag:i,shouldHaveTagNameHere:o}=Vx(e,t),s=Mp(n);if(s&&o&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(o&&!s)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!o||!s?void 0:{replacement:n.tagName,getExtraValues(u){const l=xm(u)?u.inputs:void 0;return[i&&l?oO(l):void 0].filter(T.isTruthy)}}}function cO(e){}function dO(e){return jx(e.strings,e.values,lO,cO)}function v(e,...t){const r=uO(e,t),n=l6(e,...r),i=_x(e,r,()=>dO(n));return{...n,strings:i.strings,values:i.values}}function Da(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if(!t?.length&&!r?.length)return"";const n=[...r||[],""],o=(t??[""]).map((s,a)=>{const u=fO(s,n[a]);return`${s}${u}`});return bk(o.join(""))}function fO(e,t){return t._$litType$!=null||t._$litDirective$!=null?Da(t):Array.isArray(t)?t.map(n=>Da(n)).join(""):e.endsWith("=")?`"${t}"`:t}function Kx(e){return lt(e,(t,r)=>r instanceof ot?Ae(r.toString({format:"hex"})):Kx(r))}const hO="dodgerblue";function Dm(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Uh({background:e,foreground:t}){return{background:e??new ot(Dm(t)),foreground:t??new ot(Dm(e))}}var yd;(function(e){e.Dark="dark",e.Light="light"})(yd||(yd={}));function mO(e){return e==="black"?"white":"black"}const gO={black:{foregroundFaint1:new ot("#ccc"),foregroundFaint2:new ot("#eee")},white:{foregroundFaint1:new ot("#ccc"),foregroundFaint2:new ot("#eee")}},pO={black:{backgroundFaint1:new ot("#666"),backgroundFaint2:new ot("#444")},white:{backgroundFaint1:new ot("#ccc"),backgroundFaint2:new ot("#fafafa")}};function hv({themeColor:e=hO,themeStyle:t=yd.Light}={}){const r=new ot(e),n=new ot(t===yd.Dark?"black":"white"),i=Dm(n),o=new ot(i),s={nav:{hover:Uh({background:r.clone().set({"hsl.l":93})}),active:Uh({background:r.clone().set({"hsl.l":90})}),selected:Uh({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...pO[mO(i)],foreground:o,...gO[i]}};return Kx(s)}async function dl(e=1){const t=new qc;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function bO(e,t){return{element:e,children:Hx(e)}}function Hx(e,t,r){return yO(e).map(n=>{const i=Hx(n);return{element:n,children:i}})}function yO(e){return[...e.children,...e.shadowRoot?.children??[]]}function qh(e){return e.matches(":focus")}function Fp(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:Fp(t)}function Gx(e,t){if(t(e))return e;const r=Fp(e);if(r)return Gx(r,t)}function _l(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const i=t.name,o=n?.constructor.name,s=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${o}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${o}'.`;throw new Error(s)}return n}function vO(e){const t=Fp(e);return t&&Gx(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function wO(e){let t=0,r=document.activeElement||void 0;for(;r;){if(e({depth:t,element:r}))return t;r=r.shadowRoot?.activeElement||void 0,r&&++t}return t}function kO({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const i=t.toLowerCase(),o=e.toLowerCase();e:for(let s=0,a=0;s<n;s++){const u=o.codePointAt(s);for(;a<r;)if(i.codePointAt(a++)===u)continue e;return!1}return!0}const xO=ra(32);function Bc(e){return e.join(xO)}function Zx(e){if(!e.length)return[];const t=Bc(e),r=Zx(e.slice(0,-1));return[t,...r]}const $O=["error","errors"];function DO(e){return $O.includes(e)}function AO({flattenedNodes:e,searchQuery:t}){const r={};function n(i){Object.values(i.children).map(s=>(n(s),Bc(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(i=>{const o=i.entry.errors.length&&DO(t),s=Bc(i.fullUrlBreadcrumbs);if(kO({searchIn:[i.entry.title,...i.entry.descriptionParagraphs.map(u=>T.isString(u)?u:Da(u))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o||r[s]){const u=Zx(i.fullUrlBreadcrumbs);n(i),u.forEach(l=>r[l]=!0)}else r[s]=!1}),e.filter(i=>{const o=Bc(i.fullUrlBreadcrumbs),s=r[o];if(!T.isBoolean(s))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}class Pp extends Error{name="SpaRouterError"}class mv extends Pp{name="GlobalUrlEventsConsolidationError"}class EO extends Pp{name="SanitizationDepthMaxed"}Ce({paths:[""],search:Jt(je(void 0,Ll({keys:"",values:[""]}))),hash:Jt(je(void 0,""))});const CO=Ce({basePath:Jt("",{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:Jt(1,{alsoUndefined:!0}),disableWarnings:Jt(!1,{alsoUndefined:!0}),isPaused:Jt(!1,{alsoUndefined:!0})}),Wh="://";function Yx(...e){const t=e.join("/"),[r,n=""]=t.includes(Wh)?t.split(Wh):["",t];let i=!1;const o=n.replace(/\/{2,}/g,"/").split("/").reduce((s,a,u,l)=>{if(i)return s;const d=l[u+1];let f=a;const h=d?.startsWith("?"),g=!a.includes("?")&&h,m=d==="?";if(h||g){i=!0;let p=!1;const k=l.slice(u+2).reduce((x,D)=>(D.includes("#")&&(p=!0),p?x.concat(D):[x,D].join("&")),"");f=[a,d,m?is({value:k,prefix:"&"}):k].join("")}return s.concat(f)},[]);return[r,r?Wh:"",o.join("/")].join("")}var Aa;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(Aa||(Aa={}));var Ea;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(Ea||(Ea={}));const SO=Ce({encoding:Jt(je(void 0,oi(Aa))),searchParamStrategy:Jt(je(void 0,oi(Ea)))});function gc(e,t){return e.map(r=>{if(r!=null)return oa(String(r),t)}).filter(r=>r!=null)}function oa(e,t){return t?.encoding===Aa.Decode?decodeURIComponent(e):t?.encoding===Aa.Encode?encodeURIComponent(e):e}const TO=Ce(Ll({keys:"",values:[""]}));function MO(e,t,r){const n=r?.searchParamStrategy===Ea.Clear?{}:lt(e,(s,a)=>Zc(a)),i=lt(t,(s,a)=>{if(r?.searchParamStrategy===Ea.Append){const u=n[s],l=T.isArray(u)?u:[u];if(a){const d=T.isArray(a)?a:[a];return gc([...l,...d],r)}else return gc(l,r)}else return T.isArray(a)?gc(a,r):a?gc([a],r):void 0});return Ud({...n,...i},(s,a)=>!!a)}function Jx(e,t){return T.isString(e)&&!e.includes("?")?{}:(T.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(o=>{const[s,...a]=OE(o,"=");return[s,a.length?a.join("="):void 0]}).reduce((o,[s,a])=>{const u=Xx({options:t,key:s,value:a}),l=La(o,u.key,()=>[]);return a!=null&&l.push(u.value),o},{})}function FO(e){if(e!=null)return T.isArray(e)?[...e]:e===""?[]:[e]}function PO(e,t){const r=Vt(Object.entries(e),([n,i])=>{const o=FO(i);return o?.length?o.map(s=>{const a=Xx({options:t,key:n,value:s});return[a.key,a.value].join("=")}):[n]},(n,[,i])=>i!=null).flat();return r.length?Rr({value:r.join("&"),prefix:"?"}):""}function Xx({options:e,key:t,value:r}){return{key:oa(t,e),value:oa(String(r),e)}}function Qx({hash:e,hostname:t,password:r,pathname:n,port:i,protocol:o,search:s,username:a}){return[o?o+"://":"",a?a+":":"",r?r+"@":"",Af({hostname:t,port:i}),Ip({hash:e,pathname:n,search:s})].join("")}function e$({pathname:e}){const t=is({value:e,prefix:"/"});return t?t.split("/"):[]}function Ip({hash:e,pathname:t,search:r}){return[Rr({value:t,prefix:"/"}),r?Rr({value:r,prefix:"?"}):"",e?Rr({value:e,prefix:"#"}):""].join("")}function Af({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function t$({hostname:e,port:t,protocol:r}){return[r,Af({hostname:e,port:t})].filter(T.isTruthy).join("://")}function sa(e,t){const r=T.isString(e)?is({value:e,prefix:"."}):e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),i=n?Rr({value:oa(n,t),prefix:"#"}):"",o=r.replace(/#[^#]*$/,""),s=o.replace(/^[^?]*(?:\?|$)/,""),a=s?Rr({value:oa(s,t),prefix:"?"}):"",u=o.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",d=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),f=d.replace(/@.*/,""),h=d.replace(/^[^@]*@/,""),g=f!==h,[m,...p]=g?f.split(":").reverse():[],k=p.toReversed().join("").replace(/[/:]/g,"")||"",x=m?.replace(/[/:]/g,"")||"",D=NE(h.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),C=D[0]?.endsWith("]")?"":D[1]===":"&&D[0]||"",O=h.replace(new RegExp(`:${C}($|/)`),"$1").replace(/\/.*/,""),H=h.replace(/^[^/]*(\/|$)/,"$1"),ee=oa(H.replace(/^[^/]*(?:\/|$)/,"/"),t),ne=Af({hostname:O,port:C}),X=t$({hostname:O,port:C,protocol:l}),ye=Qx({hash:i,hostname:O,password:x,pathname:ee,port:C,protocol:l,search:a,username:k}),se=Jx(a),xe=e$({pathname:ee});return{fullPath:Ip({hash:i,pathname:ee,search:a}),hash:i,host:ne,hostname:O,href:ye,origin:X,password:x,pathname:ee,paths:xe,port:C,protocol:l,search:a,searchParams:se,username:k}}Ce({hash:Jt(je(void 0,"")),search:Jt(je(void 0,"",Ll({keys:"",values:je(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:Jt(je(void 0,"")),pathname:Jt(je(void 0,"")),paths:Jt(je(void 0,[""])),protocol:Jt(je(void 0,"")),username:Jt(je(void 0,"")),password:Jt(je(void 0,"")),port:Jt(je(void 0,"",-1))});function IO(e,t,r){const n=!!r,i=t==null||ho(t,SO,{allowExtraKeys:!1}),o=i?sa(""):T.instanceOf(e,URL)||T.isString(e)?sa(e):e,s=i?e:t,a=T.isString(s)&&s.startsWith("."),u=T.isString(s)||T.instanceOf(s,URL)?Ud(sa(s),(p,k)=>T.isTruthy(k)):s,l=n?r:i?t:void 0,d=lt(o,(p,k)=>{if(!T.hasKey(u,p))return k;const x=u[p];return T.isNumber(x)?String(x):T.isString(x)?p==="hash"&&x?Rr({value:x,prefix:"#"}):p==="pathname"?Rr({value:x,prefix:"/"}):x:k});T.hasKey(u,"paths")&&u.paths&&(d.pathname=Yx(a?o.pathname:"",...u.paths));const f=T.isString(u.search)?Jx(Rr({value:u.search,prefix:"?"})):qn(u.search||{}),h=MO(d.searchParams,f,{...l,encoding:Aa.None}),g=PO(h,l);return{...d,searchParams:h,search:g,paths:e$(d),fullPath:Ip(d),host:Af(d),origin:t$(d),href:Qx({...d,search:g})}}const NO=Ce({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:TO,hash:"",fullPath:"/",href:"/"});({...NO.default});const OO=0;function r$(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==OO)}const Ef="locationchange",Ui=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const gv=Ui?.pushState;function pv(...e){if(!gv)return;const t=gv.apply(Ui,e);return globalThis.dispatchEvent(new Event(Ef)),t}const bv=Ui?.replaceState;function yv(...e){if(!bv)return;const t=bv.apply(Ui,e);return globalThis.dispatchEvent(new Event(Ef)),t}function RO(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!Ui)){{if(Ui.pushState===pv)throw new mv("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(Ui.replaceState===yv)throw new mv("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,Ui.pushState=pv,Ui.replaceState=yv,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Ef))})}}function pc(e,t){const r=sa(e),n=is({value:is({value:r.pathname,prefix:Rr({value:t||"",prefix:"/"})}),prefix:"/"}),i=n?n.split("/"):[],o=Object.keys(r.searchParams).length?r.searchParams:void 0,s=r.hash?is({value:r.hash,prefix:"#"}):void 0;return{paths:i,search:o,hash:s}}class BO{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){gd(t,CO),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new Ix({defaultValue:r,equalityCheck:()=>!1}),RO(),this.removeGlobalListener=vk(globalThis,Ef,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new EO("Looping route sanitization detected; aborting window URL change listener.");const n=pc(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(n);T.jsonEquals(n,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:i}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:Yx(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(pc(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r={...pc(globalThis.location.href,this.params.basePath),...t},n=this.sanitizeRoute(r),o=this.routeIncludesBasePath(pc(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return IO(globalThis.location.href,{paths:o.paths,search:o.search,hash:o.hash?Rr({value:o.hash,prefix:"#"}):""},{searchParamStrategy:Ea.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:i}=sa(n);return this.params.isPaused||!r.force&&T.jsonEquals(sa(globalThis.location.href).fullPath,i)?!1:r.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,r){return r$(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new Pp(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function LO(e){return new BO({basePath:e,sanitizeRoute(t){return{paths:_O(t.paths),hash:void 0,search:void 0}}})}function _O(e){const t=e[0];if(T.isEnumValue(t,Zr)){if(t===Zr.Book)return[Zr.Book,...e.slice(1)];if(t===Zr.Search)return e[1]?[t,e[1]]:[Zr.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return da.paths}const vd=$f()("element-book-change-route"),y=xi({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"});function ce({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const n$=ce({name:"Check24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function vv(e){return T.isPrimitive(e)||e instanceof Wi?String(e):e.default}function gi(e,t,r,n){const i=`${r.prefix}-default-fg`,o=`${r.prefix}-default-bg`;if(T.isPrimitive(t)||t instanceof Wi)return t;if("refDefaultBackground"in t)return`var(--${o}, ${vv(r.background)})`;if("refDefaultForeground"in t)return`var(--${i}, ${vv(r.foreground)})`;if("refBackground"in t||"refForeground"in t){const s=T.hasKey(t,"refBackground")?"refBackground":T.hasKey(t,"refForeground")?"refForeground":void 0,a=s&&T.hasKey(t,s)?t[s]:void 0,u=s==="refBackground"?"background":"foreground",l=a&&n[a];if(!l)throw new Error(`Color theme ${s} reference '${a}' does not exist. (Referenced from '${e}'.)`);const d=l[u]||(u==="foreground"?gi(i,r.foreground,r,n):gi(o,r.background,r,n));return`var(--${a}-${u==="foreground"?"fg":"bg"}, ${gi(a,d,r,n)})`}else return t.value}const Dr="theme-default";function i$(e,t){try{if(Dr in t)throw new Error(`Cannot define theme color by name '${Dr}', it is used internally.`);const r=`${e.prefix}-default-fg`,n=`${e.prefix}-default-bg`,i=`${e.prefix}-default-inverse-fg`,o=`${e.prefix}-default-inverse-bg`,s={[r]:gi(r,e.foreground,e,t),[n]:gi(n,e.background,e,t),[i]:gi(i,e.background,e,t),[o]:gi(o,e.foreground,e,t)},a=xi(s),u=ki(t).reduce((m,[p,k])=>{const x=wv(p),D=k.foreground?gi([p,"foreground"].join(" "),k.foreground,e,t):`var(${a[r].name}, ${a[r].default})`,C=k.background?gi([p,"background"].join(" "),k.background,e,t):`var(${a[n].name}, ${a[n].default})`;return m[x.foreground]=D,m[x.background]=C,m[x.foregroundInverse]=`var(--${x.background}, ${C})`,m[x.backgroundInverse]=`var(--${x.foreground}, ${D})`,m},{}),l=xi(u),d={},f={};ki(t).forEach(([m,p])=>{It.isString(m);const k=wv(m),x=l[k.foreground],D=l[k.background],C=l[k.foregroundInverse],P=l[k.backgroundInverse];It.isDefined(x),It.isDefined(D),It.isDefined(C),It.isDefined(P),d[m]={foreground:x,background:D,init:p,name:m},f[m]={foreground:C,background:P,init:p,name:m}});const h={foreground:a[r],background:a[n],init:e,name:Dr},g={...h,foreground:a[i],background:a[o]};return{colors:{[Dr]:h,...d},inverse:{[Dr]:g,...f},init:{colors:t,default:e},prefix:e.prefix}}catch(r){throw globalThis.setTimeout(()=>Yc.error(r)),r}}function wv(e){return{foreground:[e,"fg"].join("-"),background:[e,"bg"].join("-"),foregroundInverse:[e,"inverse","fg"].join("-"),backgroundInverse:[e,"inverse","bg"].join("-")}}const c=xi({"vira-red-5":"#ffe9e6","vira-red-10":"#ffd9d5","vira-red-20":"#ffc1bc","vira-red-30":"#ffa7a2","vira-red-40":"#ff8886","vira-red-50":"#ff6065","vira-red-60":"#f9163a","vira-red-70":"#d2001d","vira-red-80":"#a60012","vira-red-90":"#760003","vira-orange-5":"#ffebd1","vira-orange-10":"#ffdda3","vira-orange-20":"#ffc66c","vira-orange-30":"#ffac36","vira-orange-40":"#f79300","vira-orange-50":"#e17e00","vira-orange-60":"#c96900","vira-orange-70":"#ab5600","vira-orange-80":"#8b4100","vira-orange-90":"#6a2500","vira-yellow-5":"#f7eeca","vira-yellow-10":"#f6e192","vira-yellow-20":"#f2cd20","vira-yellow-30":"#dfbb00","vira-yellow-40":"#cca800","vira-yellow-50":"#b59500","vira-yellow-60":"#9d8100","vira-yellow-70":"#856b00","vira-yellow-80":"#6a5400","vira-yellow-90":"#4c3b00","vira-green-5":"#d3f8cf","vira-green-10":"#a3f59b","vira-green-20":"#4fed46","vira-green-30":"#36d92e","vira-green-40":"#0dc501","vira-green-50":"#00af00","vira-green-60":"#009800","vira-green-70":"#007f00","vira-green-80":"#006400","vira-green-90":"#004700","vira-teal-5":"#d4f5f3","vira-teal-10":"#a1efeb","vira-teal-20":"#45e5de","vira-teal-30":"#2ad2cc","vira-teal-40":"#04beb8","vira-teal-50":"#00a9a3","vira-teal-60":"#00928d","vira-teal-70":"#007a77","vira-teal-80":"#00615e","vira-teal-90":"#004442","vira-blue-5":"#daf2ff","vira-blue-10":"#bde8ff","vira-blue-20":"#98d8ff","vira-blue-30":"#77c6ff","vira-blue-40":"#4cb2ff","vira-blue-50":"#299cf9","vira-blue-60":"#0086e0","vira-blue-70":"#006ec7","vira-blue-80":"#0054aa","vira-blue-90":"#00358a","vira-purple-5":"#f6eaff","vira-purple-10":"#eddaff","vira-purple-20":"#e6c3ff","vira-purple-30":"#d7adff","vira-purple-40":"#c795ff","vira-purple-50":"#b77aff","vira-purple-60":"#a55aff","vira-purple-70":"#8f3de9","vira-purple-80":"#7514cb","vira-purple-90":"#500095","vira-pink-5":"#ffe7fb","vira-pink-10":"#ffd5fa","vira-pink-20":"#ffbaf4","vira-pink-30":"#ff9ee6","vira-pink-40":"#fa82cc","vira-pink-50":"#e46eb7","vira-pink-60":"#cc59a2","vira-pink-70":"#b2418b","vira-pink-80":"#962471","vira-pink-90":"#6e004f","vira-grey-0":"#f3f6f6","vira-grey-5":"#eceff0","vira-grey-10":"#dce2e6","vira-grey-20":"#c7d2d7","vira-grey-30":"#b6c0c5","vira-grey-40":"#a4adb2","vira-grey-50":"#909a9f","vira-grey-60":"#7c868a","vira-grey-70":"#677074","vira-grey-80":"#50595d","vira-grey-90":"#363f43"});function Vh({originalTheme:e,layerKey:t,themeColor:r,override:n,overrideValues:i}){const o=n?.[t];o&&(i[String(r[t].name)]=String(gi(t,o,e.init.default,e.init.colors)))}function jO(e,t,{defaultOverride:r,colorOverrides:n}){const i={};r&&tt(r).forEach(u=>{Vh({originalTheme:e,layerKey:u,override:r,themeColor:e.colors[Dr],overrideValues:i})});const o={};n&&ki(n).forEach(([u,l])=>{const d=e.colors[u];if(!d)throw new Error(`Override color name '${u}' does not exist in the theme being overridden.`);Vh({originalTheme:e,layerKey:"foreground",override:l,themeColor:d,overrideValues:o}),Vh({originalTheme:e,layerKey:"background",override:l,themeColor:d,overrideValues:o})});const s=lt(e.init.colors,(u,l)=>{const d=n?.[u];return{...l,...d}}),a=i$({...e.init.default,...r},s);return{name:t,overrides:{...i,...o},originalTheme:e,asTheme:a}}const ue=i$({foreground:"black",background:"white",prefix:"vira"},{"vira-red-foreground-small-body":{foreground:c["vira-red-90"]},"vira-red-foreground-body":{foreground:c["vira-red-80"]},"vira-red-foreground-non-body":{foreground:c["vira-red-60"]},"vira-red-foreground-header":{foreground:c["vira-red-50"]},"vira-red-foreground-placeholder":{foreground:c["vira-red-30"]},"vira-red-foreground-decoration":{foreground:c["vira-red-20"]},"vira-red-foreground-invisible":{foreground:c["vira-red-10"]},"vira-red-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-90"]},"vira-red-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-80"]},"vira-red-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-60"]},"vira-red-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-red-40"]},"vira-red-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-red-30"]},"vira-red-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-red-20"]},"vira-red-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-red-5"]},"vira-red-behind-fg-small-body":{background:c["vira-red-5"]},"vira-red-behind-fg-body":{background:c["vira-red-20"]},"vira-red-behind-fg-non-body":{background:c["vira-red-30"]},"vira-red-behind-fg-header":{background:c["vira-red-50"]},"vira-red-behind-fg-placeholder":{background:c["vira-red-60"]},"vira-red-behind-fg-decoration":{background:c["vira-red-80"]},"vira-red-behind-fg-invisible":{background:c["vira-red-90"]},"vira-red-on-self-body":{foreground:c["vira-red-90"],background:c["vira-red-10"]},"vira-red-on-self-non-body":{foreground:c["vira-red-90"],background:c["vira-red-20"]},"vira-red-on-self-header":{foreground:c["vira-red-90"],background:c["vira-red-40"]},"vira-red-on-self-placeholder":{foreground:c["vira-red-90"],background:c["vira-red-50"]},"vira-red-on-self-decoration":{foreground:c["vira-red-90"],background:c["vira-red-70"]},"vira-red-on-self-invisible":{foreground:c["vira-red-90"],background:c["vira-red-80"]},"vira-orange-foreground-small-body":{foreground:c["vira-orange-90"]},"vira-orange-foreground-body":{foreground:c["vira-orange-80"]},"vira-orange-foreground-non-body":{foreground:c["vira-orange-60"]},"vira-orange-foreground-header":{foreground:c["vira-orange-50"]},"vira-orange-foreground-placeholder":{foreground:c["vira-orange-40"]},"vira-orange-foreground-decoration":{foreground:c["vira-orange-20"]},"vira-orange-foreground-invisible":{foreground:c["vira-orange-10"]},"vira-orange-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-orange-90"]},"vira-orange-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-orange-80"]},"vira-orange-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-orange-60"]},"vira-orange-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-orange-40"]},"vira-orange-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-orange-30"]},"vira-orange-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-orange-20"]},"vira-orange-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-orange-5"]},"vira-orange-behind-fg-small-body":{background:c["vira-orange-5"]},"vira-orange-behind-fg-body":{background:c["vira-orange-20"]},"vira-orange-behind-fg-non-body":{background:c["vira-orange-30"]},"vira-orange-behind-fg-header":{background:c["vira-orange-50"]},"vira-orange-behind-fg-placeholder":{background:c["vira-orange-60"]},"vira-orange-behind-fg-decoration":{background:c["vira-orange-80"]},"vira-orange-behind-fg-invisible":{background:c["vira-orange-90"]},"vira-orange-on-self-body":{foreground:c["vira-orange-90"],background:c["vira-orange-10"]},"vira-orange-on-self-non-body":{foreground:c["vira-orange-90"],background:c["vira-orange-20"]},"vira-orange-on-self-header":{foreground:c["vira-orange-90"],background:c["vira-orange-40"]},"vira-orange-on-self-placeholder":{foreground:c["vira-orange-90"],background:c["vira-orange-50"]},"vira-orange-on-self-decoration":{foreground:c["vira-orange-90"],background:c["vira-orange-70"]},"vira-orange-on-self-invisible":{foreground:c["vira-orange-90"],background:c["vira-orange-80"]},"vira-yellow-foreground-small-body":{foreground:c["vira-yellow-90"]},"vira-yellow-foreground-body":{foreground:c["vira-yellow-80"]},"vira-yellow-foreground-non-body":{foreground:c["vira-yellow-60"]},"vira-yellow-foreground-header":{foreground:c["vira-yellow-50"]},"vira-yellow-foreground-placeholder":{foreground:c["vira-yellow-40"]},"vira-yellow-foreground-decoration":{foreground:c["vira-yellow-20"]},"vira-yellow-foreground-invisible":{foreground:c["vira-yellow-5"]},"vira-yellow-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-90"]},"vira-yellow-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-70"]},"vira-yellow-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-60"]},"vira-yellow-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-40"]},"vira-yellow-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-30"]},"vira-yellow-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-20"]},"vira-yellow-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-5"]},"vira-yellow-behind-fg-small-body":{background:c["vira-yellow-5"]},"vira-yellow-behind-fg-body":{background:c["vira-yellow-20"]},"vira-yellow-behind-fg-non-body":{background:c["vira-yellow-30"]},"vira-yellow-behind-fg-header":{background:c["vira-yellow-50"]},"vira-yellow-behind-fg-placeholder":{background:c["vira-yellow-60"]},"vira-yellow-behind-fg-decoration":{background:c["vira-yellow-80"]},"vira-yellow-behind-fg-invisible":{background:c["vira-yellow-90"]},"vira-yellow-on-self-body":{foreground:c["vira-yellow-90"],background:c["vira-yellow-10"]},"vira-yellow-on-self-non-body":{foreground:c["vira-yellow-90"],background:c["vira-yellow-20"]},"vira-yellow-on-self-header":{foreground:c["vira-yellow-90"],background:c["vira-yellow-40"]},"vira-yellow-on-self-placeholder":{foreground:c["vira-yellow-90"],background:c["vira-yellow-50"]},"vira-yellow-on-self-decoration":{foreground:c["vira-yellow-90"],background:c["vira-yellow-70"]},"vira-yellow-on-self-invisible":{foreground:c["vira-yellow-90"],background:c["vira-yellow-80"]},"vira-green-foreground-small-body":{foreground:c["vira-green-90"]},"vira-green-foreground-body":{foreground:c["vira-green-80"]},"vira-green-foreground-non-body":{foreground:c["vira-green-60"]},"vira-green-foreground-header":{foreground:c["vira-green-50"]},"vira-green-foreground-placeholder":{foreground:c["vira-green-30"]},"vira-green-foreground-decoration":{foreground:c["vira-green-20"]},"vira-green-foreground-invisible":{foreground:c["vira-green-5"]},"vira-green-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-90"]},"vira-green-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-70"]},"vira-green-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-60"]},"vira-green-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-green-40"]},"vira-green-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-green-30"]},"vira-green-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-green-20"]},"vira-green-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-green-5"]},"vira-green-behind-fg-small-body":{background:c["vira-green-5"]},"vira-green-behind-fg-body":{background:c["vira-green-20"]},"vira-green-behind-fg-non-body":{background:c["vira-green-30"]},"vira-green-behind-fg-header":{background:c["vira-green-50"]},"vira-green-behind-fg-placeholder":{background:c["vira-green-60"]},"vira-green-behind-fg-decoration":{background:c["vira-green-80"]},"vira-green-behind-fg-invisible":{background:c["vira-green-90"]},"vira-green-on-self-body":{foreground:c["vira-green-90"],background:c["vira-green-10"]},"vira-green-on-self-non-body":{foreground:c["vira-green-90"],background:c["vira-green-20"]},"vira-green-on-self-header":{foreground:c["vira-green-90"],background:c["vira-green-40"]},"vira-green-on-self-placeholder":{foreground:c["vira-green-90"],background:c["vira-green-50"]},"vira-green-on-self-decoration":{foreground:c["vira-green-90"],background:c["vira-green-70"]},"vira-green-on-self-invisible":{foreground:c["vira-green-90"],background:c["vira-green-80"]},"vira-teal-foreground-small-body":{foreground:c["vira-teal-90"]},"vira-teal-foreground-body":{foreground:c["vira-teal-80"]},"vira-teal-foreground-non-body":{foreground:c["vira-teal-60"]},"vira-teal-foreground-header":{foreground:c["vira-teal-50"]},"vira-teal-foreground-placeholder":{foreground:c["vira-teal-30"]},"vira-teal-foreground-decoration":{foreground:c["vira-teal-20"]},"vira-teal-foreground-invisible":{foreground:c["vira-teal-5"]},"vira-teal-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-90"]},"vira-teal-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-80"]},"vira-teal-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-60"]},"vira-teal-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-teal-40"]},"vira-teal-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-teal-30"]},"vira-teal-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-teal-20"]},"vira-teal-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-teal-5"]},"vira-teal-behind-fg-small-body":{background:c["vira-teal-5"]},"vira-teal-behind-fg-body":{background:c["vira-teal-20"]},"vira-teal-behind-fg-non-body":{background:c["vira-teal-30"]},"vira-teal-behind-fg-header":{background:c["vira-teal-50"]},"vira-teal-behind-fg-placeholder":{background:c["vira-teal-60"]},"vira-teal-behind-fg-decoration":{background:c["vira-teal-80"]},"vira-teal-behind-fg-invisible":{background:c["vira-teal-90"]},"vira-teal-on-self-body":{foreground:c["vira-teal-90"],background:c["vira-teal-10"]},"vira-teal-on-self-non-body":{foreground:c["vira-teal-90"],background:c["vira-teal-20"]},"vira-teal-on-self-header":{foreground:c["vira-teal-90"],background:c["vira-teal-40"]},"vira-teal-on-self-placeholder":{foreground:c["vira-teal-90"],background:c["vira-teal-50"]},"vira-teal-on-self-decoration":{foreground:c["vira-teal-90"],background:c["vira-teal-70"]},"vira-teal-on-self-invisible":{foreground:c["vira-teal-90"],background:c["vira-teal-80"]},"vira-blue-foreground-small-body":{foreground:c["vira-blue-90"]},"vira-blue-foreground-body":{foreground:c["vira-blue-80"]},"vira-blue-foreground-non-body":{foreground:c["vira-blue-70"]},"vira-blue-foreground-header":{foreground:c["vira-blue-50"]},"vira-blue-foreground-placeholder":{foreground:c["vira-blue-30"]},"vira-blue-foreground-decoration":{foreground:c["vira-blue-20"]},"vira-blue-foreground-invisible":{foreground:c["vira-blue-10"]},"vira-blue-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-90"]},"vira-blue-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-80"]},"vira-blue-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-60"]},"vira-blue-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-blue-40"]},"vira-blue-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-blue-30"]},"vira-blue-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-blue-20"]},"vira-blue-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-blue-5"]},"vira-blue-behind-fg-small-body":{background:c["vira-blue-5"]},"vira-blue-behind-fg-body":{background:c["vira-blue-20"]},"vira-blue-behind-fg-non-body":{background:c["vira-blue-30"]},"vira-blue-behind-fg-header":{background:c["vira-blue-50"]},"vira-blue-behind-fg-placeholder":{background:c["vira-blue-60"]},"vira-blue-behind-fg-decoration":{background:c["vira-blue-80"]},"vira-blue-behind-fg-invisible":{background:c["vira-blue-90"]},"vira-blue-on-self-body":{foreground:c["vira-blue-90"],background:c["vira-blue-10"]},"vira-blue-on-self-non-body":{foreground:c["vira-blue-90"],background:c["vira-blue-20"]},"vira-blue-on-self-header":{foreground:c["vira-blue-90"],background:c["vira-blue-40"]},"vira-blue-on-self-placeholder":{foreground:c["vira-blue-90"],background:c["vira-blue-50"]},"vira-blue-on-self-decoration":{foreground:c["vira-blue-90"],background:c["vira-blue-70"]},"vira-blue-on-self-invisible":{foreground:c["vira-blue-90"],background:c["vira-blue-80"]},"vira-purple-foreground-small-body":{foreground:c["vira-purple-90"]},"vira-purple-foreground-body":{foreground:c["vira-purple-80"]},"vira-purple-foreground-non-body":{foreground:c["vira-purple-60"]},"vira-purple-foreground-header":{foreground:c["vira-purple-50"]},"vira-purple-foreground-placeholder":{foreground:c["vira-purple-30"]},"vira-purple-foreground-decoration":{foreground:c["vira-purple-20"]},"vira-purple-foreground-invisible":{foreground:c["vira-purple-5"]},"vira-purple-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-90"]},"vira-purple-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-80"]},"vira-purple-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-60"]},"vira-purple-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-purple-40"]},"vira-purple-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-purple-30"]},"vira-purple-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-purple-20"]},"vira-purple-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-purple-5"]},"vira-purple-behind-fg-small-body":{background:c["vira-purple-5"]},"vira-purple-behind-fg-body":{background:c["vira-purple-20"]},"vira-purple-behind-fg-non-body":{background:c["vira-purple-30"]},"vira-purple-behind-fg-header":{background:c["vira-purple-50"]},"vira-purple-behind-fg-placeholder":{background:c["vira-purple-60"]},"vira-purple-behind-fg-decoration":{background:c["vira-purple-80"]},"vira-purple-behind-fg-invisible":{background:c["vira-purple-90"]},"vira-purple-on-self-body":{foreground:c["vira-purple-90"],background:c["vira-purple-10"]},"vira-purple-on-self-non-body":{foreground:c["vira-purple-90"],background:c["vira-purple-20"]},"vira-purple-on-self-header":{foreground:c["vira-purple-90"],background:c["vira-purple-40"]},"vira-purple-on-self-placeholder":{foreground:c["vira-purple-90"],background:c["vira-purple-50"]},"vira-purple-on-self-decoration":{foreground:c["vira-purple-90"],background:c["vira-purple-70"]},"vira-purple-on-self-invisible":{foreground:c["vira-purple-90"],background:c["vira-purple-80"]},"vira-pink-foreground-small-body":{foreground:c["vira-pink-90"]},"vira-pink-foreground-body":{foreground:c["vira-pink-80"]},"vira-pink-foreground-non-body":{foreground:c["vira-pink-60"]},"vira-pink-foreground-header":{foreground:c["vira-pink-50"]},"vira-pink-foreground-placeholder":{foreground:c["vira-pink-40"]},"vira-pink-foreground-decoration":{foreground:c["vira-pink-20"]},"vira-pink-foreground-invisible":{foreground:c["vira-pink-10"]},"vira-pink-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-90"]},"vira-pink-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-80"]},"vira-pink-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-60"]},"vira-pink-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-pink-40"]},"vira-pink-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-pink-30"]},"vira-pink-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-pink-20"]},"vira-pink-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-pink-5"]},"vira-pink-behind-fg-small-body":{background:c["vira-pink-5"]},"vira-pink-behind-fg-body":{background:c["vira-pink-20"]},"vira-pink-behind-fg-non-body":{background:c["vira-pink-30"]},"vira-pink-behind-fg-header":{background:c["vira-pink-50"]},"vira-pink-behind-fg-placeholder":{background:c["vira-pink-60"]},"vira-pink-behind-fg-decoration":{background:c["vira-pink-80"]},"vira-pink-behind-fg-invisible":{background:c["vira-pink-90"]},"vira-pink-on-self-body":{foreground:c["vira-pink-90"],background:c["vira-pink-10"]},"vira-pink-on-self-non-body":{foreground:c["vira-pink-90"],background:c["vira-pink-20"]},"vira-pink-on-self-header":{foreground:c["vira-pink-90"],background:c["vira-pink-40"]},"vira-pink-on-self-placeholder":{foreground:c["vira-pink-90"],background:c["vira-pink-50"]},"vira-pink-on-self-decoration":{foreground:c["vira-pink-90"],background:c["vira-pink-70"]},"vira-pink-on-self-invisible":{foreground:c["vira-pink-90"],background:c["vira-pink-80"]},"vira-grey-foreground-small-body":{foreground:c["vira-grey-90"]},"vira-grey-foreground-body":{foreground:c["vira-grey-80"]},"vira-grey-foreground-non-body":{foreground:c["vira-grey-60"]},"vira-grey-foreground-header":{foreground:c["vira-grey-50"]},"vira-grey-foreground-placeholder":{foreground:c["vira-grey-30"]},"vira-grey-foreground-decoration":{foreground:c["vira-grey-20"]},"vira-grey-foreground-invisible":{foreground:c["vira-grey-5"]},"vira-grey-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-90"]},"vira-grey-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-80"]},"vira-grey-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-60"]},"vira-grey-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-grey-40"]},"vira-grey-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-grey-30"]},"vira-grey-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-grey-20"]},"vira-grey-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-grey-5"]},"vira-grey-behind-fg-small-body":{background:c["vira-grey-5"]},"vira-grey-behind-fg-body":{background:c["vira-grey-20"]},"vira-grey-behind-fg-non-body":{background:c["vira-grey-30"]},"vira-grey-behind-fg-header":{background:c["vira-grey-50"]},"vira-grey-behind-fg-placeholder":{background:c["vira-grey-60"]},"vira-grey-behind-fg-decoration":{background:c["vira-grey-80"]},"vira-grey-behind-fg-invisible":{background:c["vira-grey-90"]},"vira-grey-on-self-body":{foreground:c["vira-grey-90"],background:c["vira-grey-10"]},"vira-grey-on-self-non-body":{foreground:c["vira-grey-90"],background:c["vira-grey-20"]},"vira-grey-on-self-header":{foreground:c["vira-grey-90"],background:c["vira-grey-40"]},"vira-grey-on-self-placeholder":{foreground:c["vira-grey-90"],background:c["vira-grey-50"]},"vira-grey-on-self-decoration":{foreground:c["vira-grey-90"],background:c["vira-grey-70"]},"vira-grey-on-self-invisible":{foreground:c["vira-grey-90"],background:c["vira-grey-80"]}});jO(ue,"dark",{defaultOverride:{foreground:"white",background:"black"},colorOverrides:{"vira-red-foreground-small-body":{foreground:c["vira-red-5"]},"vira-red-foreground-body":{foreground:c["vira-red-20"]},"vira-red-foreground-non-body":{foreground:c["vira-red-30"]},"vira-red-foreground-placeholder":{foreground:c["vira-red-60"]},"vira-red-foreground-decoration":{foreground:c["vira-red-80"]},"vira-red-foreground-invisible":{foreground:c["vira-red-90"]},"vira-red-behind-bg-small-body":{background:c["vira-red-5"]},"vira-red-behind-bg-body":{background:c["vira-red-20"]},"vira-red-behind-bg-non-body":{background:c["vira-red-30"]},"vira-red-behind-bg-header":{background:c["vira-red-50"]},"vira-red-behind-bg-placeholder":{background:c["vira-red-60"]},"vira-red-behind-bg-decoration":{background:c["vira-red-80"]},"vira-red-behind-bg-invisible":{background:c["vira-red-90"]},"vira-red-behind-fg-small-body":{background:c["vira-red-90"]},"vira-red-behind-fg-body":{background:c["vira-red-80"]},"vira-red-behind-fg-non-body":{background:c["vira-red-60"]},"vira-red-behind-fg-header":{background:c["vira-red-40"]},"vira-red-behind-fg-placeholder":{background:c["vira-red-30"]},"vira-red-behind-fg-decoration":{background:c["vira-red-20"]},"vira-red-behind-fg-invisible":{background:c["vira-red-5"]},"vira-red-on-self-body":{foreground:c["vira-red-5"],background:c["vira-red-90"]},"vira-red-on-self-non-body":{foreground:c["vira-red-5"],background:c["vira-red-70"]},"vira-red-on-self-header":{foreground:c["vira-red-5"],background:c["vira-red-60"]},"vira-red-on-self-placeholder":{foreground:c["vira-red-5"],background:c["vira-red-40"]},"vira-red-on-self-decoration":{foreground:c["vira-red-5"],background:c["vira-red-30"]},"vira-red-on-self-invisible":{foreground:c["vira-red-5"],background:c["vira-red-10"]},"vira-orange-foreground-small-body":{foreground:c["vira-orange-5"]},"vira-orange-foreground-body":{foreground:c["vira-orange-20"]},"vira-orange-foreground-non-body":{foreground:c["vira-orange-30"]},"vira-orange-foreground-placeholder":{foreground:c["vira-orange-60"]},"vira-orange-foreground-decoration":{foreground:c["vira-orange-80"]},"vira-orange-foreground-invisible":{foreground:c["vira-orange-90"]},"vira-orange-behind-bg-small-body":{background:c["vira-orange-5"]},"vira-orange-behind-bg-body":{background:c["vira-orange-20"]},"vira-orange-behind-bg-non-body":{background:c["vira-orange-30"]},"vira-orange-behind-bg-header":{background:c["vira-orange-50"]},"vira-orange-behind-bg-placeholder":{background:c["vira-orange-60"]},"vira-orange-behind-bg-decoration":{background:c["vira-orange-80"]},"vira-orange-behind-bg-invisible":{background:c["vira-orange-90"]},"vira-orange-behind-fg-small-body":{background:c["vira-orange-90"]},"vira-orange-behind-fg-body":{background:c["vira-orange-80"]},"vira-orange-behind-fg-non-body":{background:c["vira-orange-60"]},"vira-orange-behind-fg-header":{background:c["vira-orange-40"]},"vira-orange-behind-fg-placeholder":{background:c["vira-orange-30"]},"vira-orange-behind-fg-decoration":{background:c["vira-orange-20"]},"vira-orange-behind-fg-invisible":{background:c["vira-orange-5"]},"vira-orange-on-self-body":{foreground:c["vira-orange-5"],background:c["vira-orange-90"]},"vira-orange-on-self-non-body":{foreground:c["vira-orange-5"],background:c["vira-orange-70"]},"vira-orange-on-self-header":{foreground:c["vira-orange-5"],background:c["vira-orange-60"]},"vira-orange-on-self-placeholder":{foreground:c["vira-orange-5"],background:c["vira-orange-40"]},"vira-orange-on-self-decoration":{foreground:c["vira-orange-5"],background:c["vira-orange-30"]},"vira-orange-on-self-invisible":{foreground:c["vira-orange-5"],background:c["vira-orange-10"]},"vira-yellow-foreground-small-body":{foreground:c["vira-yellow-5"]},"vira-yellow-foreground-body":{foreground:c["vira-yellow-20"]},"vira-yellow-foreground-non-body":{foreground:c["vira-yellow-30"]},"vira-yellow-foreground-placeholder":{foreground:c["vira-yellow-60"]},"vira-yellow-foreground-decoration":{foreground:c["vira-yellow-80"]},"vira-yellow-foreground-invisible":{foreground:c["vira-yellow-90"]},"vira-yellow-behind-bg-small-body":{background:c["vira-yellow-5"]},"vira-yellow-behind-bg-body":{background:c["vira-yellow-20"]},"vira-yellow-behind-bg-non-body":{background:c["vira-yellow-30"]},"vira-yellow-behind-bg-header":{background:c["vira-yellow-50"]},"vira-yellow-behind-bg-placeholder":{background:c["vira-yellow-60"]},"vira-yellow-behind-bg-decoration":{background:c["vira-yellow-80"]},"vira-yellow-behind-bg-invisible":{background:c["vira-yellow-90"]},"vira-yellow-behind-fg-small-body":{background:c["vira-yellow-90"]},"vira-yellow-behind-fg-body":{background:c["vira-yellow-70"]},"vira-yellow-behind-fg-non-body":{background:c["vira-yellow-60"]},"vira-yellow-behind-fg-header":{background:c["vira-yellow-40"]},"vira-yellow-behind-fg-placeholder":{background:c["vira-yellow-30"]},"vira-yellow-behind-fg-decoration":{background:c["vira-yellow-20"]},"vira-yellow-behind-fg-invisible":{background:c["vira-yellow-5"]},"vira-yellow-on-self-body":{foreground:c["vira-yellow-5"],background:c["vira-yellow-90"]},"vira-yellow-on-self-non-body":{foreground:c["vira-yellow-5"],background:c["vira-yellow-70"]},"vira-yellow-on-self-header":{foreground:c["vira-yellow-5"],background:c["vira-yellow-60"]},"vira-yellow-on-self-placeholder":{foreground:c["vira-yellow-5"],background:c["vira-yellow-40"]},"vira-yellow-on-self-decoration":{foreground:c["vira-yellow-5"],background:c["vira-yellow-30"]},"vira-yellow-on-self-invisible":{foreground:c["vira-yellow-5"],background:c["vira-yellow-10"]},"vira-green-foreground-small-body":{foreground:c["vira-green-5"]},"vira-green-foreground-body":{foreground:c["vira-green-20"]},"vira-green-foreground-non-body":{foreground:c["vira-green-30"]},"vira-green-foreground-placeholder":{foreground:c["vira-green-60"]},"vira-green-foreground-decoration":{foreground:c["vira-green-80"]},"vira-green-foreground-invisible":{foreground:c["vira-green-90"]},"vira-green-behind-bg-small-body":{background:c["vira-green-5"]},"vira-green-behind-bg-body":{background:c["vira-green-20"]},"vira-green-behind-bg-non-body":{background:c["vira-green-30"]},"vira-green-behind-bg-header":{background:c["vira-green-50"]},"vira-green-behind-bg-placeholder":{background:c["vira-green-60"]},"vira-green-behind-bg-decoration":{background:c["vira-green-80"]},"vira-green-behind-bg-invisible":{background:c["vira-green-90"]},"vira-green-behind-fg-small-body":{background:c["vira-green-90"]},"vira-green-behind-fg-body":{background:c["vira-green-70"]},"vira-green-behind-fg-non-body":{background:c["vira-green-60"]},"vira-green-behind-fg-header":{background:c["vira-green-40"]},"vira-green-behind-fg-placeholder":{background:c["vira-green-30"]},"vira-green-behind-fg-decoration":{background:c["vira-green-20"]},"vira-green-behind-fg-invisible":{background:c["vira-green-5"]},"vira-green-on-self-body":{foreground:c["vira-green-5"],background:c["vira-green-90"]},"vira-green-on-self-non-body":{foreground:c["vira-green-5"],background:c["vira-green-70"]},"vira-green-on-self-header":{foreground:c["vira-green-5"],background:c["vira-green-60"]},"vira-green-on-self-placeholder":{foreground:c["vira-green-5"],background:c["vira-green-40"]},"vira-green-on-self-decoration":{foreground:c["vira-green-5"],background:c["vira-green-30"]},"vira-green-on-self-invisible":{foreground:c["vira-green-5"],background:c["vira-green-10"]},"vira-teal-foreground-small-body":{foreground:c["vira-teal-5"]},"vira-teal-foreground-body":{foreground:c["vira-teal-20"]},"vira-teal-foreground-non-body":{foreground:c["vira-teal-30"]},"vira-teal-foreground-placeholder":{foreground:c["vira-teal-60"]},"vira-teal-foreground-decoration":{foreground:c["vira-teal-80"]},"vira-teal-foreground-invisible":{foreground:c["vira-teal-90"]},"vira-teal-behind-bg-small-body":{background:c["vira-teal-5"]},"vira-teal-behind-bg-body":{background:c["vira-teal-20"]},"vira-teal-behind-bg-non-body":{background:c["vira-teal-30"]},"vira-teal-behind-bg-header":{background:c["vira-teal-50"]},"vira-teal-behind-bg-placeholder":{background:c["vira-teal-60"]},"vira-teal-behind-bg-decoration":{background:c["vira-teal-80"]},"vira-teal-behind-bg-invisible":{background:c["vira-teal-90"]},"vira-teal-behind-fg-small-body":{background:c["vira-teal-90"]},"vira-teal-behind-fg-body":{background:c["vira-teal-80"]},"vira-teal-behind-fg-non-body":{background:c["vira-teal-60"]},"vira-teal-behind-fg-header":{background:c["vira-teal-40"]},"vira-teal-behind-fg-placeholder":{background:c["vira-teal-30"]},"vira-teal-behind-fg-decoration":{background:c["vira-teal-20"]},"vira-teal-behind-fg-invisible":{background:c["vira-teal-5"]},"vira-teal-on-self-body":{foreground:c["vira-teal-5"],background:c["vira-teal-90"]},"vira-teal-on-self-non-body":{foreground:c["vira-teal-5"],background:c["vira-teal-70"]},"vira-teal-on-self-header":{foreground:c["vira-teal-5"],background:c["vira-teal-60"]},"vira-teal-on-self-placeholder":{foreground:c["vira-teal-5"],background:c["vira-teal-40"]},"vira-teal-on-self-decoration":{foreground:c["vira-teal-5"],background:c["vira-teal-30"]},"vira-teal-on-self-invisible":{foreground:c["vira-teal-5"],background:c["vira-teal-10"]},"vira-blue-foreground-small-body":{foreground:c["vira-blue-5"]},"vira-blue-foreground-body":{foreground:c["vira-blue-20"]},"vira-blue-foreground-non-body":{foreground:c["vira-blue-30"]},"vira-blue-foreground-placeholder":{foreground:c["vira-blue-60"]},"vira-blue-foreground-decoration":{foreground:c["vira-blue-80"]},"vira-blue-foreground-invisible":{foreground:c["vira-blue-90"]},"vira-blue-behind-bg-small-body":{background:c["vira-blue-5"]},"vira-blue-behind-bg-body":{background:c["vira-blue-20"]},"vira-blue-behind-bg-non-body":{background:c["vira-blue-30"]},"vira-blue-behind-bg-header":{background:c["vira-blue-50"]},"vira-blue-behind-bg-placeholder":{background:c["vira-blue-60"]},"vira-blue-behind-bg-decoration":{background:c["vira-blue-80"]},"vira-blue-behind-bg-invisible":{background:c["vira-blue-90"]},"vira-blue-behind-fg-small-body":{background:c["vira-blue-90"]},"vira-blue-behind-fg-body":{background:c["vira-blue-80"]},"vira-blue-behind-fg-non-body":{background:c["vira-blue-60"]},"vira-blue-behind-fg-header":{background:c["vira-blue-40"]},"vira-blue-behind-fg-placeholder":{background:c["vira-blue-30"]},"vira-blue-behind-fg-decoration":{background:c["vira-blue-20"]},"vira-blue-behind-fg-invisible":{background:c["vira-blue-5"]},"vira-blue-on-self-body":{foreground:c["vira-blue-5"],background:c["vira-blue-90"]},"vira-blue-on-self-non-body":{foreground:c["vira-blue-5"],background:c["vira-blue-70"]},"vira-blue-on-self-header":{foreground:c["vira-blue-5"],background:c["vira-blue-60"]},"vira-blue-on-self-placeholder":{foreground:c["vira-blue-5"],background:c["vira-blue-40"]},"vira-blue-on-self-decoration":{foreground:c["vira-blue-5"],background:c["vira-blue-30"]},"vira-blue-on-self-invisible":{foreground:c["vira-blue-5"],background:c["vira-blue-10"]},"vira-purple-foreground-small-body":{foreground:c["vira-purple-5"]},"vira-purple-foreground-body":{foreground:c["vira-purple-20"]},"vira-purple-foreground-non-body":{foreground:c["vira-purple-30"]},"vira-purple-foreground-placeholder":{foreground:c["vira-purple-60"]},"vira-purple-foreground-decoration":{foreground:c["vira-purple-80"]},"vira-purple-foreground-invisible":{foreground:c["vira-purple-90"]},"vira-purple-behind-bg-small-body":{background:c["vira-purple-5"]},"vira-purple-behind-bg-body":{background:c["vira-purple-20"]},"vira-purple-behind-bg-non-body":{background:c["vira-purple-30"]},"vira-purple-behind-bg-header":{background:c["vira-purple-50"]},"vira-purple-behind-bg-placeholder":{background:c["vira-purple-60"]},"vira-purple-behind-bg-decoration":{background:c["vira-purple-80"]},"vira-purple-behind-bg-invisible":{background:c["vira-purple-90"]},"vira-purple-behind-fg-small-body":{background:c["vira-purple-90"]},"vira-purple-behind-fg-body":{background:c["vira-purple-80"]},"vira-purple-behind-fg-non-body":{background:c["vira-purple-60"]},"vira-purple-behind-fg-header":{background:c["vira-purple-40"]},"vira-purple-behind-fg-placeholder":{background:c["vira-purple-30"]},"vira-purple-behind-fg-decoration":{background:c["vira-purple-20"]},"vira-purple-behind-fg-invisible":{background:c["vira-purple-5"]},"vira-purple-on-self-body":{foreground:c["vira-purple-5"],background:c["vira-purple-90"]},"vira-purple-on-self-non-body":{foreground:c["vira-purple-5"],background:c["vira-purple-70"]},"vira-purple-on-self-header":{foreground:c["vira-purple-5"],background:c["vira-purple-60"]},"vira-purple-on-self-placeholder":{foreground:c["vira-purple-5"],background:c["vira-purple-40"]},"vira-purple-on-self-decoration":{foreground:c["vira-purple-5"],background:c["vira-purple-30"]},"vira-purple-on-self-invisible":{foreground:c["vira-purple-5"],background:c["vira-purple-10"]},"vira-pink-foreground-small-body":{foreground:c["vira-pink-5"]},"vira-pink-foreground-body":{foreground:c["vira-pink-20"]},"vira-pink-foreground-non-body":{foreground:c["vira-pink-30"]},"vira-pink-foreground-placeholder":{foreground:c["vira-pink-60"]},"vira-pink-foreground-decoration":{foreground:c["vira-pink-80"]},"vira-pink-foreground-invisible":{foreground:c["vira-pink-90"]},"vira-pink-behind-bg-small-body":{background:c["vira-pink-5"]},"vira-pink-behind-bg-body":{background:c["vira-pink-20"]},"vira-pink-behind-bg-non-body":{background:c["vira-pink-30"]},"vira-pink-behind-bg-header":{background:c["vira-pink-50"]},"vira-pink-behind-bg-placeholder":{background:c["vira-pink-60"]},"vira-pink-behind-bg-decoration":{background:c["vira-pink-80"]},"vira-pink-behind-bg-invisible":{background:c["vira-pink-90"]},"vira-pink-behind-fg-small-body":{background:c["vira-pink-90"]},"vira-pink-behind-fg-body":{background:c["vira-pink-80"]},"vira-pink-behind-fg-non-body":{background:c["vira-pink-60"]},"vira-pink-behind-fg-header":{background:c["vira-pink-40"]},"vira-pink-behind-fg-placeholder":{background:c["vira-pink-30"]},"vira-pink-behind-fg-decoration":{background:c["vira-pink-20"]},"vira-pink-behind-fg-invisible":{background:c["vira-pink-5"]},"vira-pink-on-self-body":{foreground:c["vira-pink-5"],background:c["vira-pink-90"]},"vira-pink-on-self-non-body":{foreground:c["vira-pink-5"],background:c["vira-pink-70"]},"vira-pink-on-self-header":{foreground:c["vira-pink-5"],background:c["vira-pink-60"]},"vira-pink-on-self-placeholder":{foreground:c["vira-pink-5"],background:c["vira-pink-40"]},"vira-pink-on-self-decoration":{foreground:c["vira-pink-5"],background:c["vira-pink-30"]},"vira-pink-on-self-invisible":{foreground:c["vira-pink-5"],background:c["vira-pink-10"]},"vira-grey-foreground-small-body":{foreground:c["vira-grey-5"]},"vira-grey-foreground-body":{foreground:c["vira-grey-20"]},"vira-grey-foreground-non-body":{foreground:c["vira-grey-30"]},"vira-grey-foreground-placeholder":{foreground:c["vira-grey-60"]},"vira-grey-foreground-decoration":{foreground:c["vira-grey-80"]},"vira-grey-foreground-invisible":{foreground:c["vira-grey-90"]},"vira-grey-behind-bg-small-body":{background:c["vira-grey-5"]},"vira-grey-behind-bg-body":{background:c["vira-grey-20"]},"vira-grey-behind-bg-non-body":{background:c["vira-grey-30"]},"vira-grey-behind-bg-header":{background:c["vira-grey-50"]},"vira-grey-behind-bg-placeholder":{background:c["vira-grey-60"]},"vira-grey-behind-bg-decoration":{background:c["vira-grey-80"]},"vira-grey-behind-bg-invisible":{background:c["vira-grey-90"]},"vira-grey-behind-fg-small-body":{background:c["vira-grey-90"]},"vira-grey-behind-fg-body":{background:c["vira-grey-80"]},"vira-grey-behind-fg-non-body":{background:c["vira-grey-60"]},"vira-grey-behind-fg-header":{background:c["vira-grey-40"]},"vira-grey-behind-fg-placeholder":{background:c["vira-grey-30"]},"vira-grey-behind-fg-decoration":{background:c["vira-grey-20"]},"vira-grey-behind-fg-invisible":{background:c["vira-grey-5"]},"vira-grey-on-self-body":{foreground:c["vira-grey-5"],background:c["vira-grey-90"]},"vira-grey-on-self-non-body":{foreground:c["vira-grey-5"],background:c["vira-grey-70"]},"vira-grey-on-self-header":{foreground:c["vira-grey-5"],background:c["vira-grey-60"]},"vira-grey-on-self-placeholder":{foreground:c["vira-grey-5"],background:c["vira-grey-40"]},"vira-grey-on-self-decoration":{foreground:c["vira-grey-5"],background:c["vira-grey-30"]},"vira-grey-on-self-invisible":{foreground:c["vira-grey-5"],background:c["vira-grey-10"]}}});const kv="8px",K=xi({"vira-form-border-color":ue.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-placeholder-color":ue.colors["vira-grey-foreground-placeholder"].foreground.value,"vira-form-background-color":ue.colors[Dr].background.value,"vira-form-foreground-color":ue.colors[Dr].foreground.value,"vira-form-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-form-secondary-body-foreground":ue.colors["vira-grey-foreground-header"].foreground.value,"vira-form-text-selection-color":ue.colors["vira-blue-behind-bg-decoration"].background.value,"vira-form-selection-hover-color":ue.colors["vira-blue-behind-bg-invisible"].background.value,"vira-form-selection-active-color":ue.colors["vira-blue-behind-bg-decoration"].background.value,"vira-form-error-color":ue.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-error-hover-color":ue.colors["vira-red-behind-bg-header"].background.value,"vira-form-error-active-color":ue.colors["vira-red-behind-bg-body"].background.value,"vira-form-success-color":ue.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-label-font-weight":"bold","vira-form-small-text-size":"14px","vira-form-medium-text-size":"16px","vira-form-large-text-size":"22px","vira-form-radius":kv,"vira-form-wrapper-radius":"16px","vira-form-focus-outline-color":ue.colors["vira-blue-foreground-header"].foreground.value,"vira-form-focus-outline-border-radius":z`calc(var(--vira-form-radius, ${Ae(kv)}) + 2px)`,"vira-form-plain-color":c["vira-grey-0"].value,"vira-form-plain-hover-color":ue.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-plain-active-color":ue.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-accent-primary-color":ue.colors["vira-blue-behind-bg-non-body"].background.value,"vira-form-accent-primary-hover-color":ue.colors["vira-blue-behind-bg-header"].background.value,"vira-form-accent-primary-active-color":ue.colors["vira-blue-behind-bg-body"].background.value,"vira-form-danger-color":ue.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-danger-hover-color":ue.colors["vira-red-behind-bg-header"].background.value,"vira-form-danger-active-color":ue.colors["vira-red-behind-bg-body"].background.value,"vira-form-filled-background-color":ue.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-filled-active-background-color":ue.colors["vira-grey-foreground-decoration"].foreground.value}),Ca=z`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,bo=xi({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function jl({elementBorderSize:e,outlineGap:t=2,outlineWidth:r=2,noNesting:n}){const i=Ae(EE(r+t+e)),o=z`
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
    `}const o$=xi({"vira-monospace":"monospace"}),s$={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};lt(s$,e=>e);Object.fromEntries(Object.entries(s$).map(([e,t])=>[t,e]));var ke;(function(e){e.SmallBodyText="small-body",e.BodyText="body",e.NonBodyText="non-body",e.Header="header",e.Placeholder="placeholder",e.Decoration="decoration",e.Invisible="invisible"})(ke||(ke={}));ke.SmallBodyText+"",ke.BodyText+"",ke.NonBodyText+"",ke.Header+"",ke.Placeholder+"",ke.Decoration+"",ke.Invisible+"";ke.SmallBodyText,ke.BodyText,ke.NonBodyText,ke.Header,ke.Placeholder,ke.Decoration,ke.Invisible;const a$=[{min:90,name:ke.SmallBodyText,description:"Perfect for all sizes of text, even small body text.",apcaName:"small body text only",apcaDescription:"Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color."},{min:75,name:ke.BodyText,description:"Good for regular body text and anything larger.",apcaName:"body text okay",apcaDescription:"The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important."},{min:60,name:ke.NonBodyText,description:"Good for legible non-body text and anything larger.",apcaName:"fluent text only",apcaDescription:"The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast."},{min:45,name:ke.Header,description:"Okay for large or headline text.",apcaName:"large & sub-fluent text",apcaDescription:"The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension."},{min:30,name:ke.Placeholder,description:"Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.",apcaName:"spot & non text only",apcaDescription:'The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.'},{min:15,name:ke.Decoration,description:"Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.",apcaName:"no text usage",apcaDescription:"The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site."},{min:0,name:ke.Invisible,description:"Effectively invisible for users.",apcaName:"invisible",apcaDescription:"This should be treated as invisible."}];wo(a$,e=>({key:e.min,value:e}));wo(a$,e=>({key:e.name,value:e}));const zO=on(ke).sort((e,t)=>Number(t.includes("-"))-Number(e.includes("-"))),UO=Id(Vt(Object.keys(ue.colors),e=>e.split("-")[1],e=>e!=="default")).filter(T.isTruthy),Gs=wo(UO,e=>({key:e,value:e}),{}),qO=tt(ue.colors),kr=dg(Gs,e=>{const t=Id(Vt(qO,r=>zO.reduce((n,i)=>gk({value:n,suffix:`-${i}`}),is({value:r,prefix:`vira-${e}-`})),(r,n)=>n.startsWith(`vira-${e}-`)));return wo(t,r=>({key:r,value:wo(on(ke),n=>{const i=`vira-${e}-${r}-${n}`;if(T.hasKey(ue.colors,i))return{key:n,value:ue.colors[i]}})}))});var ie;(function(e){e.Accent="accent",e.Plain="plain",e.Neutral="neutral",e.Danger="danger",e.Warning="warning",e.Positive="positive",e.None="none"})(ie||(ie={}));const xv={[ie.Accent]:Gs.blue,[ie.Neutral]:Gs.grey,[ie.Danger]:Gs.red,[ie.Warning]:Gs.orange,[ie.Positive]:Gs.green};ie.Accent,ie.Plain,ie.Neutral,ie.Danger,ie.Warning,ie.Positive;var Ar;(function(e){e.Large="large",e.Medium="medium",e.Small="small",e.None="none"})(Ar||(Ar={}));Ar.Small,Ar.Medium,Ar.Large;var Sn;(function(e){e.Standard="standard",e.Subtle="subtle",e.None="none"})(Sn||(Sn={}));Sn.Standard,Sn.Subtle;const Kh={[Ar.Large]:40,[Ar.Medium]:32,[Ar.Small]:24},zl=z`
    padding: 0;
    margin: 0;
`,sn=z`
    ${zl};
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Hh=xi({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),WO={menuShadow:z`
        filter: drop-shadow(0px 5px 5px ${Hh["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:z`
        filter: drop-shadow(0px -5px 5px ${Hh["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:z`
        box-shadow: 0 5px 15px ${Hh["modal-shadow-color"].value};
    `},Sa=z`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,$v="vira-",li=Wx({assertInputs:e=>{if(!e.tagName.startsWith($v))throw new Error(`Tag name should start with '${$v}' but got '${e.tagName}'`)}}),oe=li()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>z`
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}});function VO(e,t){return e>t}function KO(e,t){return e<t}function fl(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var vi;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(vi||(vi={}));var Ve;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(Ve||(Ve={}));function Cf(e){const t={x:-1,y:-1};let r;for(;t.y<e.length-1&&!r;){t.y++;const n=e[t.y];for(;n&&t.x<n.length-1&&!r;){t.x++;const i=n[t.x];if(i)if(i.navEntry.navParams.group){const o=Cf(i.children);o&&(r=o.node)}else i.navEntry.navParams.disabled||(r=i)}}if(r)return{node:r,coords:t}}function Dv(e,t,r,n){if(!t){const u=Cf(e.children);return u?(fl(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:r,navAction:Ve.Navigate}):{success:!1,reason:"no default element to focus",direction:r,navAction:Ve.Navigate}}const{nextNode:i,requiresWrapping:o,coords:s}=u$(t.position,r),a=n?!0:!o;return i&&a?(fl(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:o,direction:r,navAction:Ve.Navigate,coords:s}):i?a?{success:!1,reason:"no conditions matched",direction:r,navAction:Ve.Navigate}:{success:!1,reason:"wrapping blocked",direction:r,navAction:Ve.Navigate}:{success:!1,reason:"failed to find node to focus",direction:r,navAction:Ve.Navigate}}function u$(e,t){let r=!1,n,i=1;const o=Date.now();for(;!r||!n;)if(n=HO(e,t,i),r=!n.nextNode?.navEntry.navParams.disabled,i++,Date.now()-o>1e3)return Yc.warning("Failed to find next non-disabled node."),n;return n}function HO(e,t,r){const n=e.ancestorChain[e.ancestorChain.length-1]?.node;It.isDefined(n,"missing parent");const i=Qt.isDefined(n.children[e.nodeCoords.y]),o=n.children.length>1&&(t===vi.Down||t===vi.Up),s=t===vi.Down||t===vi.Right?r:-1*r,a=s<0?VO:KO,u=o?Ty(e.nodeCoords.y+s,{min:0,max:n.children.length-1,takeOverflow:!0}):e.nodeCoords.y,l=Qt.isDefined(n.children[u]),d=o?e.nodeCoords.x>=l.length?l.length-1:e.nodeCoords.x:Ty(e.nodeCoords.x+s,{min:0,max:i.length-1,takeOverflow:!0}),f=n.children[u]?.[d],h=o?a(u,e.nodeCoords.y):a(d,e.nodeCoords.x);return{nextNode:f,requiresWrapping:h,coords:{x:d,y:u}}}function GO(e,t,r){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:Ve.Pibling};const{nextNode:i,requiresWrapping:o,coords:s}=u$(n,t),a=i?.navEntry.navParams.group?Cf(i.children):{node:i,coords:s},u=r?!0:!o;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:Ve.Pibling}:u?(fl(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:o,coords:a.coords,direction:t,navAction:Ve.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:Ve.Pibling}}var Li;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(Li||(Li={}));const Gh={name:"data-nav"},l$="navEntry";function ZO(e){return l$ in e}function YO(e){if(ZO(e)){const t=e[l$];return Qt.instanceOf(t,XO,"Invalid nav entry")}else return}function JO(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==Li.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class XO{element;navParams;navTreeNode;navValue;eventListener=JO(this);constructor(t,r,n){this.element=t,this.navParams=n,this.attachListeners(),this.navController=r}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return It.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(Gh.name,""),qh(this.element)&&this.element.blur())}focus(t,r){const n=this.navValue,i=t===(n===Li.Focused);if(!(this.navParams.group||this.navController.locked||i||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(Li.Focused),qh(this.element)||this.element.focus()):(this.removeNavValue(Li.Focused),qh(this.element)&&this.element.blur()),r||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,Ve.Focus)}activate(t){const r=this.navValue,n=t===(r===Li.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(t,!0),t?this.setNavValue(Li.Active):this.setNavValue(Li.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,Ve.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(Gh.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(Gh.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function QO(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:Ve.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:Ve.Enter};const r=t.position.node.children[0]?.[0];return r?(fl(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:Ve.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:Ve.Enter}}function eR(e,t){return c$([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function c$(e,t,r){for(let n=0;n<t.length;n++){const i=t[n];for(let o=0;o<i.length;o++){const s=i[o],a={ancestorChain:e,nodeCoords:{x:o,y:n},node:s};if(r(a))return a;const u=c$(e.concat(a),s.children,r);if(u)return u}}}function d$(e,t){const r=eR(e,({node:n})=>!n.root&&n.navEntry===t);if(!r)throw new Error("Failed to find NavEntry in NavTree.");return r}function tR(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:Ve.Exit};const r=t.position.ancestorChain.toReversed().find(i=>!i.node.root&&!i.node.navEntry.navParams.group)?.node;if(!r||r.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:Ve.Exit};const{nodeCoords:n}=d$(e,r.navEntry);return fl(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:Ve.Exit,coords:n}}class rR extends si()("nav-exit"){}class f$ extends si()("nav-activate"){}class nR extends si()("nav-focus"){}class iR extends si()("nav-enter"){}class oR extends si()("nav-navigate"){}class sR extends si()("nav-navigate-pibling"){}function aR(e){return{root:!0,children:h$(e)?.children||[]}}function h$(e){const t=e.element;if(!(t instanceof HTMLElement))return;const r=YO(t),n=uR(e);if((r?.navParams.group?!!n.length:!1)||n.length||r)return{root:!1,element:t,navEntry:r,children:n}}function uR(e){const t=[];function r(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(a=>a.forEach(u=>r(u)));return}const i=n.navEntry.navParams.x,o=n.navEntry.navParams.y||0,s=La(t,o,()=>({noX:[],withX:[],y:o}));i==null?s.noX.push(n):s.withX.push({x:i,node:n})}return e.children.forEach(n=>{const i=h$(n);i&&r(i)}),t.sort((n,i)=>n.y-i.y).map(n=>(n.withX.sort((i,o)=>i.x-o.x),n.withX.forEach(({x:i,node:o})=>{n.noX.splice(i,0,o)}),n.noX)).filter(T.isTruthy)}class lR extends mg{rootElement;options;constructor(t,r={}){super(),this.rootElement=t,this.options=r}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){Cf(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,r,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const i=d$(this.getNavTree(),t);r?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:n,position:i}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const o={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:n,coords:i.nodeCoords};return r&&(n===Ve.Activate?this.dispatch(new f$({detail:o})):n===Ve.Focus&&this.dispatch(new nR({detail:o}))),o}navigate({direction:t,allowWrapping:r}){if(this.locked)return{success:!1,direction:t,navAction:Ve.Navigate,reason:"NavController is locked."};const n=Dv(this.getNavTree(),this.currentNavEntry,t,r);return this.dispatch(new oR({detail:n})),n}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:Ve.Enter,reason:"NavController is locked."};const r=QO(this.getNavTree(),this.currentNavEntry);return!r.success&&t?this.activate():(this.dispatch(new iR({detail:r})),r)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:Ve.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:Ve.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return It.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:Ve.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===Ve.Activate&&this.currentNavEntry.entry.focus(!0);const t=tR(this.getNavTree(),this.currentNavEntry);return this.dispatch(new rR({detail:t})),t}navigatePibling({allowWrapping:t,direction:r}){if(this.locked)return{success:!1,direction:r,navAction:Ve.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),o={...this.currentNavEntry?GO(this.currentNavEntry,r,t):Dv(n,void 0,r,t),navAction:Ve.Pibling};return this.dispatch(new sR({detail:o})),o}buildNavTree(){const t=bO(this.rootElement),r=aR(t);return this.cachedNavTree=r,r}}function Av({open:e,callback:t,popUpManager:r,host:n,options:i}){if(e){const o=r.showPopUp(n,i);t?.(o)}else r.removePopUp(),t?.(void 0)}const bc=globalThis.document;class cR extends Ix{constructor(){if(super({defaultValue:!!bc?.hidden,equalityCheck:T.strictEquals}),!bc)return;globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r,bc));const t=r=>this.updateVisibility(r,bc);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,r){const n=fR.includes(t.type),i=dR.includes(t.type),o=n?!0:i?!1:r.hasFocus()||!r.hidden;this.setValue(o)}}const dR=["blur","focusout","pagehide"],fR=["focus","focusin","pageshow"],hR=new cR;function mR(e,t){return hR.listen(e,t)}function Am(e){return e instanceof HTMLInputElement&&(e.type==="text"||e.type==="search"||e.type==="email"||e.type==="url"||e.type==="tel"||e.type==="password"||e.type==="number")||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}const Ev={top:0,left:0,right:0,bottom:0};class m$ extends hg("hide-pop-up"){}class g$ extends si()("nav-select"){}class gR{navController;listenTarget=new mg;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;constructor(t,r){this.navController=t,this.options={...this.options,...r}}attachGlobalListeners(){this.cleanupCallbacks=[mR(!1,t=>{t||this.removePopUp()}),this.navController.listen(f$,t=>{const r=t.composedPath()[0];r instanceof Element&&Am(r)||t.detail.success&&(this.listenTarget.dispatch(new g$({detail:t.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),t.stopImmediatePropagation(),t.preventDefault())}),My("mousedown",t=>{this.lastRootElement&&t.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),My("keydown",t=>{const r=t.code;if(r==="Escape")this.removePopUp();else if(this.options.supportNavigation){const n=t.composedPath()[0];if(n instanceof Element&&Am(n))return;r==="ArrowDown"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:vi.Down,allowWrapping:!1})):r==="ArrowUp"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:vi.Up,allowWrapping:!1})):r==="ArrowLeft"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:vi.Left,allowWrapping:!1})):r==="ArrowRight"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:vi.Right,allowWrapping:!1})):(r==="Enter"||r==="Return"||r==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(t.stopImmediatePropagation(),t.preventDefault())}})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new m$)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},i=vO(t);It.instanceOf(i,HTMLElement);const o=t.getBoundingClientRect(),s=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,u=i.offsetHeight-i.clientHeight,l=i===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-a,bottom:s.bottom-u},d=lt(Ev,m=>o[m]),f=lt(Ev,m=>{const p=l[m],k=d[m];return Math.abs(p-k)}),h=f.top>f.bottom+n.verticalDiffThreshold&&f.bottom<n.minDownSpace,g=f.left>f.right+n.horizontalDiffThreshold&&f.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!h,popRight:!g,positions:{container:l,root:d,diff:f}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var uo;(function(e){e.Left="left",e.Right="right",e.Both="both",e.Auto="auto"})(uo||(uo={}));const bu=li()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new gR(new lR(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>z`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${sn};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;

            ${jl({elementBorderSize:1})}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${Sa};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${Ca}
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
    `,events:{navSelect:nr(),openChange:nr(),init:nr()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:i,events:o}){e.popUpManager.listen(m$,()=>{if(t({showPopUpResult:void 0}),i(new o.openChange(void 0)),!n.isDisabled){const s=r.shadowRoot.querySelector(".dropdown-wrapper");It.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(g$,s=>{n.keepOpenAfterInteraction||Av({open:!1,callback(a){t({showPopUpResult:a})},host:r,popUpManager:e.popUpManager}),i(new o.navSelect(s.detail))}),i(new o.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:r,inputs:n,updateState:i,host:o,slotNames:s}){function a({emitEvent:m,open:p},k){if(r.showPopUpResult&&n.keepOpenAfterInteraction&&k){const x=o.shadowRoot.querySelector(".dropdown-trigger");if(x&&!k.composedPath().includes(x))return}Av({open:p,callback(x){i({showPopUpResult:x}),m&&e(new t.openChange(x))},host:o,popUpManager:r.popUpManager})}n.isDisabled?a({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?a({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!r.showPopUpResult&&a({emitEvent:!1,open:!0},void 0));const u=n.horizontalAnchor===uo.Auto||n.horizontalAnchor===void 0?r.showPopUpResult?.popRight?uo.Left:uo.Right:n.horizontalAnchor,l=u===uo.Right&&r.showPopUpResult?n.ignoreMaxWidth?z`
                          left: unset;
                      `:z`
                          left: -${r.showPopUpResult.positions.diff.left}px;
                      `:z`
                      left: ${n.popUpOffset?.left||0}px;
                  `,d=r.showPopUpResult&&u===uo.Left?n.ignoreMaxWidth?z`
                          right: unset;
                      `:z`
                          right: -${r.showPopUpResult.positions.diff.right}px;
                      `:z`
                      right: ${n.popUpOffset?.right||0}px;
                  `,f=z`
            ${l}
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
                    `:void 0;function g(m){a({emitEvent:!0,open:!r.showPopUpResult},m)}return v`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${Nn({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${Ee("keydown",m=>{!r.showPopUpResult&&m.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0},m)})}
                ${Ee("click",m=>{if(m.detail===0){let p=!1;if(wO(({element:k})=>Am(k)?(p=!0,!0):!1),p)return;g(m)}else if(m.button===0&&r.showPopUpResult){const p=o.shadowRoot.querySelector(".dropdown-trigger");p&&!m.composedPath().includes(p)&&a({emitEvent:!0,open:!1},m)}})}
                ${Ee("mousedown",m=>{if(m.button!==0)return;const p=Qt.instanceOf(o.shadowRoot.querySelector(".dropdown-trigger"),HTMLElement);m.composedPath().includes(p)&&g(m)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${Nn({"right-aligned":u===uo.Right})}"
                    style=${h}
                >
                    ${Zn(!!r.showPopUpResult,v`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}});var Oi;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline",e.Danger="vira-button-danger",e.DangerOutline="vira-button-danger-outline",e.Ghost="vira-button-ghost",e.Plain="vira-button-plain"})(Oi||(Oi={}));const yc=li()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Oi.Outline||e.buttonStyle===Oi.DangerOutline,"vira-button-danger-style":({inputs:e})=>e.buttonStyle===Oi.Danger||e.buttonStyle===Oi.DangerOutline,"vira-button-ghost-style":({inputs:e})=>e.buttonStyle===Oi.Ghost,"vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon,"vira-button-icon-only":({inputs:e})=>!!e.icon&&!e.text,"vira-button-plain-style":({inputs:e})=>e.buttonStyle===Oi.Plain,"vira-button-default-style":({inputs:e})=>!e.buttonStyle||e.buttonStyle===Oi.Default},cssVars:{"vira-button-padding":"5px 10px","vira-button-internal-foreground-color":K["vira-form-background-color"].value,"vira-button-internal-background-color":K["vira-form-accent-primary-color"].value,"vira-button-border-color":"transparent"},styles:({hostClasses:e,cssVars:t})=>z`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Sa};
            ${K["vira-form-focus-outline-color"].name}: ${K["vira-form-accent-primary-hover-color"].value}
        }

        ${e["vira-button-icon-only"].selector} {
            ${t["vira-button-padding"].name}: 5px;
        }

        ${e["vira-button-disabled"].selector} {
            ${Ca};
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
            ${sn};
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
                color ${bo["vira-interaction-animation-duration"].value},
                background-color
                    ${bo["vira-interaction-animation-duration"].value},
                border-color ${bo["vira-interaction-animation-duration"].value};

            ${jl({elementBorderSize:2})}
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
    `,render:({inputs:e})=>{const t=e.icon?v`
                  <${oe.assign({icon:e.icon})}></${oe}>
              `:fe,r=e.text?v`
                  <span class="text-template">${e.text}</span>
              `:v`
                  <span class="empty-text">&nbsp;</span>
              `;return v`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var wd;(function(e){e.Error="error",e.Success="success"})(wd||(wd={}));const Zh=li()({tagName:"vira-card",hostClasses:{"vira-card-error":({inputs:e})=>e.cardState===wd.Error,"vira-card-success":({inputs:e})=>e.cardState===wd.Success},cssVars:{"vira-card-border":z`1px solid ${K["vira-form-border-color"].value}`,"vira-card-padding":K["vira-form-wrapper-radius"].value},styles:({hostClasses:e,cssVars:t})=>z`
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
    `,render(){return v`
            <slot></slot>
        `}}),pR=ce({name:"ArrowDown24Icon",svgTemplate:v`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),bR=ce({name:"ArrowLeft24Icon",svgTemplate:v`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),yR=ce({name:"ArrowRight24Icon",svgTemplate:v`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),vR=ce({name:"ArrowUp24Icon",svgTemplate:v`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),wR=ce({name:"AutoTheme24Icon",svgTemplate:v`
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
                fill=${y["vira-icon-stroke-color"].value}
                stroke="none"
                style="fill-rule:nonzero"
            />
            <path
                d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 0v16"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),kR=ce({name:"Bell24Icon",svgTemplate:v`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),xR=ce({name:"Chat24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),p$=ce({name:"Check16Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="m12 5-6 6-3-3"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),$R=ce({name:"ChevronDown24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${y["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="M6 8 L12 15 18 8"
            />
        </svg>
    `}),Np=ce({name:"ChevronUp24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${y["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),b$=ce({name:"CloseX16Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 4l8 8M12 4l-8 8"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),y$=ce({name:"CloseX24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />

            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),DR=ce({name:"Commit24Icon",svgTemplate:v`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />

            <path
                d="M12 2v6m0 8v6"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Em=ce({name:"Copy24Icon",svgTemplate:v`
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
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M21 11v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8q.2-1.8 2-2h8a2 2 0 0 1 2 2"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M7 16H6a2 2 0 0 1-2-2V6q.2-1.8 2-2h8a2 2 0 0 1 2 2v1"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),AR=ce({name:"Document24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />

            <path
                d="M13 3v6h6"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),v$=ce({name:"DocumentSearch24Icon",svgTemplate:v`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <circle
                cx="11.7"
                cy="12.5"
                r="3.5"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="m14.2 15 2.5 2.5"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),ER=ce({name:"DoubleChevron24Icon",svgTemplate:v`
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
                fill=${y["vira-icon-fill-color"].value}
                stroke-width="none"
                stroke="none"
            />
            <path
                d="m7 15 5 5 5-5M7 9l5-5 5 5"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),w$=ce({name:"Element16Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),CR=ce({name:"Element24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),SR=ce({name:"ExternalLink24Icon",svgTemplate:v`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M10 14 20 4m-5 0h5v5"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),k$=ce({name:"EyeClosed24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${y["vira-icon-fill-color"].value}
            stroke=${y["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),Op=ce({name:"EyeOpen24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${y["vira-icon-fill-color"].value}
            stroke=${y["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),TR=ce({name:"Filter24Icon",svgTemplate:v`
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
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M3 6h18M6 12h12M9 18h6"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
                fill-rule="nonzero"
            />
        </svg>
    `}),MR=ce({name:"Globe24Icon",svgTemplate:v`
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
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <path
                d="M21 12c0 5-4 9-9 9m9-9c0-5-4-9-9-9m9 9H3m9 9c-5 0-9-4-9-9m9 9q3.5-3.9 3.6-9 0-5.1-3.6-9m0 18a14 14 0 0 1-3.6-9q0-5.1 3.6-9m-9 9c0-5 4-9 9-9"
                style="fill-rule:nonzero;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),FR=ce({name:"Link24Icon",svgTemplate:v`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M12.4 9.6c.5.1 1 .5 1.5.9a4 4 0 0 1 0 5.7l-4.2 4.2A4 4 0 0 1 4 14.7l3-2.9"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M11.6 14.4a4 4 0 0 1-1.5-6.6l4.2-4.2A4 4 0 0 1 20 9.3l-3 2.9"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),x$=ce({name:"Loader24Icon",svgTemplate:v`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),PR=z`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${bo["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Ta=ce({name:"LoaderAnimated24Icon",svgTemplate:v`
        <style>
            ${PR}
        </style>
        ${x$.svgTemplate}
    `}),IR=ce({name:"Lock24Icon",svgTemplate:v`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <circle
                cx="12"
                cy="14"
                r="1.5"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14v4"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />

            <path
                d="M17 10V7.5a5 5 0 0 0-10 0V10"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),NR=ce({name:"MagnifyingGlass24Icon",svgTemplate:v`
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
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),OR=ce({name:"Moon24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke=${y["vira-icon-stroke-color"].value}
            stroke-width=${y["vira-icon-stroke-width"].value}
            fill=${y["vira-icon-fill-color"].value}
            stroke-linejoin="round"
        >
            <path d="M18.6 17.72A8 8 0 1 1 15 4.26a8 8 0 0 0 3.6 13.46Z" />
        </svg>
    `}),$$=ce({name:"Options24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />

                <circle cx="16.5" cy="12.5" r="2.5" />

                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>

            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),RR=ce({name:"Pencil24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />

            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),BR=ce({name:"Printer24Icon",svgTemplate:v`
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
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),LR=ce({name:"Shield24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),_R=ce({name:"SortAscending24Icon",svgTemplate:v`
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
                fill=${y["vira-icon-fill-color"].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="m3 8 4-4 4 4M7 4v16"
            />
            <path
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),jR=ce({name:"SortDescending24Icon",svgTemplate:v`
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
                fill=${y["vira-icon-fill-color"].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                d="m3 16 4 4 4-4m-4 4V4"
            />
            <path
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),zR=ce({name:"Sparkle24Icon",svgTemplate:v`
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
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),UR=ce({name:"SpeakerLoud24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),qR=ce({name:"SpeakerMedium24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),WR=ce({name:"SpeakerMuted24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />

            <path
                d="M4 20 20 4"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),VR=ce({name:"SpeakerQuiet24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Ma=ce({name:"Star24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Cm=ce({name:"StatusFailure24Icon",svgTemplate:v`
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
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />

            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),KR=ce({name:"StatusInProgress24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />

            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),En=ce({name:"StatusSuccess24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />

            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),HR=ce({name:"StatusUnknown24Icon",svgTemplate:v`
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
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14c0-.5.09-.87.14-1q.13-.38.37-.7c.19-.24 1.3-1.46 1.46-1.65a3 3 0 0 0 .44-.73q.17-.42.17-.94 0-1.07-.7-1.65a2.7 2.7 0 0 0-1.8-.56q-1.12 0-1.83.7c-.3.29-.66.86-.66 1.53"
                fill="none"
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),pi=ce({name:"StatusWarning24Icon",svgTemplate:v`
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
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="m12 14 .2-7h-.4l.2 7Z"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),GR=ce({name:"Sun24Icon",svgTemplate:v`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M12 2v3m0 14v3M4.22 4.22l2.12 2.12m11.32 11.32 2.12 2.12M2 12h3m14 0h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),ZR=ce({name:"Upload24Icon",svgTemplate:v`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
                fill=${y["vira-icon-fill-color"].value}
            />
            <path
                d="M12 15V4m4 4-4-4-4 4"
                fill="none"
                style="fill-rule:nonzero"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),YR=ce({name:"X24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function JR(e,t){const r=tt(t).map(i=>{if(t[i])return`${y[i].name}: ${String(t[i])};`}).filter(T.isTruthy).join(" "),n=z`
        ${Ae(r)}
        display: inline-flex;
        vertical-align: middle;
    `;return ce({name:e.name,svgTemplate:v`
            <div style=${n}>${e.svgTemplate}</div>
        `})}const XR={ArrowDown24Icon:pR,ArrowLeft24Icon:bR,ArrowRight24Icon:yR,ArrowUp24Icon:vR,AutoTheme24Icon:wR,Bell24Icon:kR,Chat24Icon:xR,Check16Icon:p$,Check24Icon:n$,ChevronDown24Icon:$R,ChevronUp24Icon:Np,CloseX16Icon:b$,CloseX24Icon:y$,Commit24Icon:DR,Copy24Icon:Em,Document24Icon:AR,DocumentSearch24Icon:v$,DoubleChevron24Icon:ER,Element16Icon:w$,Element24Icon:CR,ExternalLink24Icon:SR,EyeClosed24Icon:k$,EyeOpen24Icon:Op,Filter24Icon:TR,Globe24Icon:MR,Link24Icon:FR,Loader24Icon:x$,LoaderAnimated24Icon:Ta,Lock24Icon:IR,MagnifyingGlass24Icon:NR,Moon24Icon:OR,Options24Icon:$$,Pencil24Icon:RR,Printer24Icon:BR,Shield24Icon:LR,SortAscending24Icon:_R,SortDescending24Icon:jR,Sparkle24Icon:zR,SpeakerLoud24Icon:UR,SpeakerMedium24Icon:qR,SpeakerMuted24Icon:WR,SpeakerQuiet24Icon:VR,Star24Icon:Ma,StatusFailure24Icon:Cm,StatusInProgress24Icon:KR,StatusSuccess24Icon:En,StatusUnknown24Icon:HR,StatusWarning24Icon:pi,Sun24Icon:GR,Upload24Icon:ZR,X24Icon:YR},Yh=li()({tagName:"vira-checkbox",hostClasses:{"vira-checkbox-horizontal":({inputs:e})=>!!e.horizontal,"vira-checkbox-filled-checked":({inputs:e})=>!!e.fillWhenChecked,"vira-checkbox-filled-unchecked":({inputs:e})=>!!e.fillWhenUnchecked},styles:({hostClasses:e})=>z`
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
            ${y["vira-icon-stroke-width"].name}: 3px;
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

            ${jl({elementBorderSize:1})}

            &.checked {
                & ${oe} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${K["vira-form-error-color"].value};
            }

            &.disabled {
                ${Ca};
            }
        }

        ${e["vira-checkbox-horizontal"].selector} label {
            flex-direction: row-reverse;
            align-items: center;
            gap: 8px;
        }
    `,events:{valueChange:nr()},render({inputs:e,dispatch:t,events:r}){function n(){e.disabled||t(new r.valueChange(!e.value))}const i=e.label?v`
                  <span
                      class="label-text"
                      ${rs(e.attributePassthrough?.text)}
                      style=${Xt(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:fe;return v`
            <label
                class=${Nn({disabled:!!e.disabled})}
                ${rs(e.attributePassthrough?.label)}
                style=${Xt(e.stylePassthrough?.label)}
                ${Ee("mousedown",n)}
            >
                ${i}
                <span
                    class="custom-checkbox ${Nn({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${Xt(e.label||void 0)}
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${rs(e.attributePassthrough?.["custom-checkbox"])}
                    style=${Xt(e.stylePassthrough?.["custom-checkbox"])}
                    ${eO(n)}
                >
                    <${oe.assign({icon:n$,fitContainer:!0})}
                        ${rs(e.attributePassthrough?.[oe.tagName])}
                        style=${Xt(e.stylePassthrough?.[oe.tagName])}
                    ></${oe}>
                </span>
            </label>
        `}}),mi=li()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expand-on-print":({inputs:e})=>!!e.expandOnPrint},slotNames:["header"],styles:({hostClasses:e})=>z`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${sn};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${bo["vira-pretty-animation-duration"].value};
            overflow: hidden;

            &.collapsed {
                ${Sa}
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
              `;return v`
            <button
                class="header-wrapper"
                ${Ee("click",()=>{n(new i.expandChange(!o.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>

            <div
                class="collapsing-element ${Nn({collapsed:!o.expanded})}"
                style=${s}
                disabled="disabled"
            >
                <div
                    ${qx(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),Jh=li()({tagName:"vira-collapsible-card",testIds:["openCaret"],events:{expandToggle:nr()},state({inputs:e}){return{isExpanded:!!e.startExpanded}},hostClasses:{"vira-collapsible-card-expanded":({state:e})=>e.isExpanded,"vira-collapsible-card-expansion-blocked":({inputs:e})=>!!e.blockExpansion,"vira-collapsible-card-card-styles":({inputs:e})=>!e.rawCollapsible},styles:({hostClasses:e})=>z`
        :host {
            display: inline-flex;
        }

        ${e["vira-collapsible-card-expanded"].selector} .open-caret {
            transform: rotate(180deg);
        }

        ${mi} {
            flex-grow: 1;
            max-width: 100%;
        }

        ${e["vira-collapsible-card-card-styles"].selector} {
            & ${mi} {
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
            gap: 32px;
            overflow-x: auto;
            overflow-y: hidden;
        }

        @media print {
            ${mi} {
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
    `,slotNames:["header"],render({inputs:e,slotNames:t,state:r,updateState:n,testIds:i,dispatch:o,events:s}){e.blockExpansion&&n({isExpanded:!0});const a=r.isExpanded||e.expandOnPrint?v`
                      <div class="card-content">
                          <slot></slot>
                      </div>
                  `:fe,u=e.hideHeader?fe:v`
                  <div class="card-header">
                      <slot name=${t.header}><div class="header-filler"></div></slot>

                      ${e.blockExpansion?fe:v`
                                <${oe.assign({icon:Np,fitContainer:!0})}
                                    ${$m(i.openCaret)}
                                    class="open-caret"
                                ></${oe}>
                            `}
                  </div>
              `;return v`
            <${mi.assign({expanded:r.isExpanded,expandOnPrint:e.expandOnPrint??!1})}
                ${Ee(mi.events.expandChange,l=>{l.stopImmediatePropagation(),!e.blockExpansion&&(n({isExpanded:l.detail}),o(new s.expandToggle(l.detail)))})}
            >
                <div class="header-wrapper" slot=${mi.slotNames.header}>
                    ${u}
                </div>
                ${a}
            </${mi}>
        `}}),Cv=li()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:({cssVars:e})=>z`
        :host {
            color: ${K["vira-form-error-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,render(){return v`
            <slot></slot>
        `}});function Sm({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(r=>Sm({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function QR({value:e,allowed:t,blocked:r}){const n=String(e),i=t?Sm({input:n,matcher:t}):!0,o=r?Sm({input:n,matcher:r}):!1;return i&&!o}function Tm(e){const t=String(e.value);if(!e.value)return{filtered:t,blocked:""};const{filtered:r,blocked:n}=t.split("").reduce((i,o)=>(QR({...e,value:o})?i.filtered.push(o):i.blocked.push(o),i),{filtered:[],blocked:[]});return{filtered:r.join(""),blocked:n.join("")}}function eB({inputs:e,previousValue:t,event:r,inputBlockedCallback:n,newValueCallback:i}){const o=_l(r,HTMLInputElement),s=T.hasKey(r,"data")&&lg.isString(r.data)||"";if(s){const{blocked:u}=Tm({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const a=Tm({value:o.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;o.value!==a&&(o.value=a),t!==a&&i(a)}var ss;(function(e){e.Default="text",e.Password="password",e.Email="email",e.Number="number"})(ss||(ss={}));const Fr=li()({tagName:"vira-input",cssVars:{"vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>z`
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
                ${sn};
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
                ${Sa};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${sn};
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
                ${sn};
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
                ${sn};
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
                    ${jl({elementBorderSize:0,noNesting:!0})}
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
                ${Sa};
            }

            button {
                ${sn};
                cursor: pointer;
                display: flex;
                transition: color
                    ${bo["vira-interaction-animation-duration"].value};
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
                    ${Ca};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,events:{valueChange:nr(),inputBlocked:nr()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:ra(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:r,updateState:n,events:i,host:o})=>{const{filtered:s}=Tm({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?v`
                  <${oe.assign({icon:e.icon})}
                      class="left-side-icon"
                  ></${oe}>
              `:fe,u=e.fitText?z`
                  width: ${r.forcedInputWidth}px;
              `:fe,l=Ee("mousedown",h=>{const g=_l(h,HTMLElement,{useOriginalTarget:!0}),m=Qt.instanceOf(o.shadowRoot.querySelector("input"),HTMLInputElement);g!==m&&(h.preventDefault(),m.focus())}),d=e.disableBrowserHelps||e.type===ss.Password,f=v`
            <span class="input-wrapper" ${e.label?fe:l}>
                ${a}
                ${Zn(!!e.fitText,v`
                        <span
                            class="size-span"
                            ${qx(({contentRect:h})=>{n({forcedInputWidth:h.width})})}
                        >
                            <pre>${s||e.placeholder||fe}</pre>
                        </span>
                    `)}

                <input
                    id=${Xt(e.label?r.randomId:void 0)}
                    aria-label=${Xt(e.label||void 0)}
                    autofocus=${!1}
                    type=${tB(e.type,r.showPassword)}
                    style=${u}
                    autocomplete=${Xt(d?"off":void 0)}
                    autocorrect=${Xt(d?"off":void 0)}
                    autocapitalize=${Xt(d?"off":void 0)}
                    spellcheck=${Xt(d?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${Ee("input",h=>{eB({inputs:e,previousValue:s,event:h,inputBlockedCallback(g){t(new i.inputBlocked(g))},newValueCallback(g){t(new i.valueChange(g))}})})}
                    placeholder=${Xt(e.placeholder||void 0)}
                    ${rs(e.attributePassthrough)}
                />

                ${Zn(!!(e.showClearButton&&e.value),v`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${Ee("mousedown",h=>{h.stopImmediatePropagation(),h.preventDefault()})}
                            ${Ee("click",()=>{e.disabled||t(new i.valueChange(""))})}
                        >
                            <${oe.assign({icon:y$})}></${oe}>
                        </button>
                    `)}
                ${Zn(e.type===ss.Password,v`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${Ee("mousedown",h=>{h.stopImmediatePropagation(),h.preventDefault()})}
                            ${Ee("click",()=>{n({showPassword:!r.showPassword})})}
                        >
                            <${oe.assign({icon:r.showPassword?Op:k$})}></${oe}>
                        </button>
                    `)}
                ${Zn(!!e.suffix,v`
                        <div class="suffix">${e.suffix}</div>
                    `)}

                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->

                <div class="border-style focus-border"></div>

                <div class="border-style wrapper-border"></div>
            </span>
        `;return e.label?v`
                <label for=${r.randomId} ${l}>
                    <span class="input-label">${e.label}</span>
                    ${f}
                </label>
            `:f}});function tB(e,t){return e===ss.Password&&t?ss.Default:e||ss.Default}const as=li()({tagName:"vira-select",state(){return{randomId:ra(32)}},events:{valueChange:nr()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError,"vira-select-not-raw":({inputs:e})=>!e.rawSelect},styles:({hostClasses:e,cssVars:t})=>z`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${K["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${sn};
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
                        ${jl({elementBorderSize:0,noNesting:!0})}
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
                        ${bo["vira-interaction-animation-duration"].value};
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
                ${Ca}
            }
            ${oe} {
                ${Ca}
            }
            & * {
                cursor: not-allowed;
            }
        }

        :host(.${e["vira-select-not-raw"].name}.${e["vira-select-error"].name})
            .wrapper-border {
            border-color: ${K["vira-form-error-color"].value};
        }
    `,render({inputs:e,state:t,dispatch:r,events:n}){const i=e.value||void 0,o=e.placeholder||i==null?v`
                      <option value="" disabled ?selected=${i==null}>
                          ${e.placeholder}
                      </option>
                  `:fe,s=v`
            <span class="select-wrapper">
                <select
                    .value=${Xt(i)}
                    class=${Nn({placeholder:!i&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${Xt(e.label?t.randomId:void 0)}
                    aria-label=${Xt(e.label||void 0)}
                    aria-disabled=${Xt(e.disabled?"true":void 0)}
                    ${Ee("input",a=>{const u=_l(a,HTMLSelectElement),l=u.value;u.value!==i&&(u.selectedIndex=e.options.findIndex(d=>d.value===i)),r(new n.valueChange(l))})}
                    ${rs(e.attributePassthrough?.select)}
                >
                    ${o}
                    ${e.options.map(a=>v`
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
                <${oe.assign({icon:Np})}
                    class="trigger-icon"
                ></${oe}>
            </span>
        `;return e.label?v`
                <label for=${t.randomId} ${rs(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}});var hl;(function(e){e.a98="a98",e.cubehelix="cubehelix",e.dlab="dlab",e.dlch="dlch",e.hsi="hsi",e.hsl="hsl",e.hsv="hsv",e.hwb="hwb",e.itp="itp",e.jab="jab",e.jch="jch",e.lab="lab",e.lab65="lab65",e.lch="lch",e.lch65="lch65",e.lchuv="lchuv",e.lrgb="lrgb",e.luv="luv",e.okhsl="okhsl",e.okhsv="okhsv",e.oklab="oklab",e.oklch="oklch",e.p3="p3",e.prophoto="prophoto",e.rec2020="rec2020",e.rgb="rgb",e.xyb="xyb",e.xyz50="xyz50",e.xyz65="xyz65",e.yiq="yiq"})(hl||(hl={}));const Rp={rgb:{coords:{r:{min:0,max:255,factor:255},g:{min:0,max:255,factor:255},b:{min:0,max:255,factor:255}},colorSpace:"rgb"},hex:{coords:{r:{min:0,max:255,factor:255,radix:16,radixPad:2},g:{min:0,max:255,factor:255,radix:16,radixPad:2},b:{min:0,max:255,factor:255,radix:16,radixPad:2}},conversionFormat:hl.rgb,rawSyntax:"hexString",colorSpace:"rgb"},hsl:{coords:{h:{min:0,max:360},s:{min:0,max:100,factor:100,digits:1},l:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},hwb:{coords:{h:{min:0,max:360},w:{min:0,max:100,factor:100,digits:1},b:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},lab:{coords:{l:{min:0,max:100,digits:1},a:{min:-128,max:127},b:{min:-128,max:127}},colorSpace:"lab"},lch:{coords:{l:{min:0,max:100,digits:1},c:{min:0,max:230},h:{min:0,max:360}},colorSpace:"lab"},oklab:{coords:{l:{min:0,max:1,digits:3},a:{min:-.5,max:.5,digits:3},b:{min:-.5,max:.5,digits:3}},colorSpace:"oklab"},oklch:{coords:{l:{min:0,max:1,digits:3},c:{min:0,max:.4,digits:3},h:{min:0,max:360,digits:1}},colorSpace:"oklab"}},Ao=lt(Rp,e=>e),Me={...Ao,name:"name",hexString:"hexString"},bi=lt(Rp,(e,t)=>{const r=T.isEnumValue(e,hl)&&T.isEnumValue(e,Ao)?e:"conversionFormat"in t&&t.conversionFormat&&T.isEnumValue(t.conversionFormat,hl)&&T.isEnumValue(t.conversionFormat,Ao)?t.conversionFormat:void 0;return It.isTruthy(r,`Invalid conversion format for color format '${e}' ${$(t)}.`),{...t,colorFormat:e,conversionFormat:r,rawSyntax:Qt.isEnumValue("rawSyntax"in t&&t.rawSyntax?t.rawSyntax:e,Me)}});wo(Jc(Rp),e=>({key:e.colorSpace,value:e.colorSpace}),{});ki(bi).reduce((e,[t,r])=>(La(e,r.colorSpace,()=>({}))[t]=r,e),{});function rB(e){return e.startsWith("rgb")?Me.rgb:e.startsWith("hsl")?Me.hsl:e.startsWith("hwb")?Me.hwb:e.startsWith("oklab")?Me.oklab:e.startsWith("oklch")?Me.oklch:e.startsWith("lab")?Me.lab:e.startsWith("lch")?Me.lch:e.startsWith("#")?Me.hexString:Me.name}const Mm={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(const e in Mm)Object.freeze(Mm[e]);const ml=Object.freeze(Mm),nB=Object.keys(ml).reduce((e,t)=>t.length>e.length?t:e),iB=Ud(lt(ml,(e,t)=>Vt(Object.entries(ml),([n])=>n,(n,[,i])=>n===e?!1:T.deepEquals(i,t))),(e,t)=>!!t.length),Sv=Object.entries(iB).reduce((e,t)=>{const r=[e[0],...e[1]].join(", ");return[t[0],...t[1]].join(", ").length>r.length?t:e}).reduce((e,t)=>T.isArray(t)?[...e,...t]:[...e,t],[]),Tv=Math.max(nB.length,Sv.length+(Sv.length-1)*2),D$=(e,t)=>{if(typeof e=="number"){if(t===3)return{mode:"rgb",r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(t===4)return{mode:"rgb",r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(t===6)return{mode:"rgb",r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(t===8)return{mode:"rgb",r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},oB={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sB=e=>D$(oB[e.toLowerCase()],6),aB=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,uB=e=>{let t;return(t=e.match(aB))?D$(parseInt(t[1],16),t[1].length):void 0},yo="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)",Hu=`${yo}%`,Bp=`(?:${yo}%|${yo})`,lB=`(?:${yo}(deg|grad|rad|turn)|${yo})`,Fa="\\s*,\\s*",cB=new RegExp(`^rgba?\\(\\s*${yo}${Fa}${yo}${Fa}${yo}\\s*(?:,\\s*${Bp}\\s*)?\\)$`),dB=new RegExp(`^rgba?\\(\\s*${Hu}${Fa}${Hu}${Fa}${Hu}\\s*(?:,\\s*${Bp}\\s*)?\\)$`),fB=e=>{let t={mode:"rgb"},r;if(r=e.match(cB))r[1]!==void 0&&(t.r=r[1]/255),r[2]!==void 0&&(t.g=r[2]/255),r[3]!==void 0&&(t.b=r[3]/255);else if(r=e.match(dB))r[1]!==void 0&&(t.r=r[1]/100),r[2]!==void 0&&(t.g=r[2]/100),r[3]!==void 0&&(t.b=r[3]/100);else return;return r[4]!==void 0?t.alpha=Math.max(0,Math.min(1,r[4]/100)):r[5]!==void 0&&(t.alpha=Math.max(0,Math.min(1,+r[5]))),t},Fm=(e,t)=>e===void 0?void 0:typeof e!="object"?Nm(e):e.mode!==void 0?e:t?{...e,mode:t}:void 0,gs=(e="rgb")=>t=>(t=Fm(t,e))!==void 0?t.mode===e?t:yi[t.mode][e]?yi[t.mode][e](t):e==="rgb"?yi[t.mode].rgb(t):yi.rgb[e](yi[t.mode].rgb(t)):void 0,yi={},A$={},kd=[],E$={},hB=e=>e,Xe=e=>(yi[e.mode]={...yi[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(t=>{yi[t]||(yi[t]={}),yi[t][e.mode]=e.fromMode[t]}),e.ranges||(e.ranges={}),e.difference||(e.difference={}),e.channels.forEach(t=>{if(e.ranges[t]===void 0&&(e.ranges[t]=[0,1]),!e.interpolate[t])throw new Error(`Missing interpolator for: ${t}`);typeof e.interpolate[t]=="function"&&(e.interpolate[t]={use:e.interpolate[t]}),e.interpolate[t].fixup||(e.interpolate[t].fixup=hB)}),A$[e.mode]=e,(e.parse||[]).forEach(t=>{mB(t,e.mode)}),gs(e.mode)),Sf=e=>A$[e],mB=(e,t)=>{if(typeof e=="string"){if(!t)throw new Error("'mode' required when 'parser' is a string");E$[e]=t}else typeof e=="function"&&kd.indexOf(e)<0&&kd.push(e)},Pm=/[^\x00-\x7F]|[a-zA-Z_]/,gB=/[^\x00-\x7F]|[-\w]/,B={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"};let de=0;function vc(e){let t=e[de],r=e[de+1];return t==="-"||t==="+"?/\d/.test(r)||r==="."&&/\d/.test(e[de+2]):t==="."?/\d/.test(r):/\d/.test(t)}function Im(e){if(de>=e.length)return!1;let t=e[de];if(Pm.test(t))return!0;if(t==="-"){if(e.length-de<2)return!1;let r=e[de+1];return!!(r==="-"||Pm.test(r))}return!1}const pB={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function yu(e){let t="";if((e[de]==="-"||e[de]==="+")&&(t+=e[de++]),t+=wc(e),e[de]==="."&&/\d/.test(e[de+1])&&(t+=e[de++]+wc(e)),(e[de]==="e"||e[de]==="E")&&((e[de+1]==="-"||e[de+1]==="+")&&/\d/.test(e[de+2])?t+=e[de++]+e[de++]+wc(e):/\d/.test(e[de+1])&&(t+=e[de++]+wc(e))),Im(e)){let r=xd(e);return r==="deg"||r==="rad"||r==="turn"||r==="grad"?{type:B.Hue,value:t*pB[r]}:void 0}return e[de]==="%"?(de++,{type:B.Percentage,value:+t}):{type:B.Number,value:+t}}function wc(e){let t="";for(;/\d/.test(e[de]);)t+=e[de++];return t}function xd(e){let t="";for(;de<e.length&&gB.test(e[de]);)t+=e[de++];return t}function bB(e){let t=xd(e);return e[de]==="("?(de++,{type:B.Function,value:t}):t==="none"?{type:B.None,value:void 0}:{type:B.Ident,value:t}}function yB(e=""){let t=e.trim(),r=[],n;for(de=0;de<t.length;){if(n=t[de++],n===`
`||n==="	"||n===" "){for(;de<t.length&&(t[de]===`
`||t[de]==="	"||t[de]===" ");)de++;continue}if(n===",")return;if(n===")"){r.push({type:B.ParenClose});continue}if(n==="+"){if(de--,vc(t)){r.push(yu(t));continue}return}if(n==="-"){if(de--,vc(t)){r.push(yu(t));continue}if(Im(t)){r.push({type:B.Ident,value:xd(t)});continue}return}if(n==="."){if(de--,vc(t)){r.push(yu(t));continue}return}if(n==="/"){for(;de<t.length&&(t[de]===`
`||t[de]==="	"||t[de]===" ");)de++;let i;if(vc(t)&&(i=yu(t),i.type!==B.Hue)){r.push({type:B.Alpha,value:i});continue}if(Im(t)&&xd(t)==="none"){r.push({type:B.Alpha,value:{type:B.None,value:void 0}});continue}return}if(/\d/.test(n)){de--,r.push(yu(t));continue}if(Pm.test(n)){de--,r.push(bB(t));continue}return}return r}function vB(e){e._i=0;let t=e[e._i++];if(!t||t.type!==B.Function||t.value!=="color"||(t=e[e._i++],t.type!==B.Ident))return;const r=E$[t.value];if(!r)return;const n={mode:r},i=C$(e,!1);if(!i)return;const o=Sf(r).channels;for(let s=0,a,u;s<o.length;s++)a=i[s],u=o[s],a.type!==B.None&&(n[u]=a.type===B.Number?a.value:a.value/100,u==="alpha"&&(n[u]=Math.max(0,Math.min(1,n[u]))));return n}function C$(e,t){const r=[];let n;for(;e._i<e.length;){if(n=e[e._i++],n.type===B.None||n.type===B.Number||n.type===B.Alpha||n.type===B.Percentage||t&&n.type===B.Hue){r.push(n);continue}if(n.type===B.ParenClose){if(e._i<e.length)return;continue}return}if(!(r.length<3||r.length>4)){if(r.length===4){if(r[3].type!==B.Alpha)return;r[3]=r[3].value}return r.length===3&&r.push({type:B.None,value:void 0}),r.every(i=>i.type!==B.Alpha)?r:void 0}}function wB(e,t){e._i=0;let r=e[e._i++];if(!r||r.type!==B.Function)return;let n=C$(e,t);if(n)return n.unshift(r.value),n}const Nm=e=>{if(typeof e!="string")return;const t=yB(e),r=t?wB(t,!0):void 0;let n,i=0,o=kd.length;for(;i<o;)if((n=kd[i++](e,r))!==void 0)return n;return t?vB(t):void 0};function kB(e,t){if(!t||t[0]!=="rgb"&&t[0]!=="rgba")return;const r={mode:"rgb"},[,n,i,o,s]=t;if(!(n.type===B.Hue||i.type===B.Hue||o.type===B.Hue))return n.type!==B.None&&(r.r=n.type===B.Number?n.value/255:n.value/100),i.type!==B.None&&(r.g=i.type===B.Number?i.value/255:i.value/100),o.type!==B.None&&(r.b=o.type===B.Number?o.value/255:o.value/100),s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const xB=e=>e==="transparent"?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,$B=(e,t,r)=>e+r*(t-e),DB=e=>{let t=[];for(let r=0;r<e.length-1;r++){let n=e[r],i=e[r+1];n===void 0&&i===void 0?t.push(void 0):n!==void 0&&i!==void 0?t.push([n,i]):t.push(n!==void 0?[n,n]:[i,i])}return t},AB=e=>t=>{let r=DB(t);return n=>{let i=n*r.length,o=n>=1?r.length-1:Math.max(Math.floor(i),0),s=r[o];return s===void 0?void 0:e(s[0],s[1],i-o)}},U=AB($B),Zt=e=>{let t=!1,r=e.map(n=>n!==void 0?(t=!0,n):1);return t?r:e},Xa={mode:"rgb",channels:["r","g","b","alpha"],parse:[kB,uB,fB,sB,xB,"srgb"],serialize:"srgb",interpolate:{r:U,g:U,b:U,alpha:{use:U,fixup:Zt}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},Xh=(e=0)=>Math.pow(Math.abs(e),563/256)*Math.sign(e),Mv=e=>{let t=Xh(e.r),r=Xh(e.g),n=Xh(e.b),i={mode:"xyz65",x:.5766690429101305*t+.1855582379065463*r+.1882286462349947*n,y:.297344975250536*t+.6273635662554661*r+.0752914584939979*n,z:.0270313613864123*t+.0706888525358272*r+.9913375368376386*n};return e.alpha!==void 0&&(i.alpha=e.alpha),i},Qh=e=>Math.pow(Math.abs(e),256/563)*Math.sign(e),Fv=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i={mode:"a98",r:Qh(e*2.0415879038107465-t*.5650069742788597-.3447313507783297*r),g:Qh(e*-.9692436362808798+t*1.8759675015077206+.0415550574071756*r),b:Qh(e*.0134442806320312-t*.1183623922310184+1.0151749943912058*r)};return n!==void 0&&(i.alpha=n),i},e0=(e=0)=>{const t=Math.abs(e);return t<=.04045?e/12.92:(Math.sign(e)||1)*Math.pow((t+.055)/1.055,2.4)},Qa=({r:e,g:t,b:r,alpha:n})=>{let i={mode:"lrgb",r:e0(e),g:e0(t),b:e0(r)};return n!==void 0&&(i.alpha=n),i},Ms=e=>{let{r:t,g:r,b:n,alpha:i}=Qa(e),o={mode:"xyz65",x:.4123907992659593*t+.357584339383878*r+.1804807884018343*n,y:.2126390058715102*t+.715168678767756*r+.0721923153607337*n,z:.0193308187155918*t+.119194779794626*r+.9505321522496607*n};return i!==void 0&&(o.alpha=i),o},t0=(e=0)=>{const t=Math.abs(e);return t>.0031308?(Math.sign(e)||1)*(1.055*Math.pow(t,1/2.4)-.055):e*12.92},eu=({r:e,g:t,b:r,alpha:n},i="rgb")=>{let o={mode:i,r:t0(e),g:t0(t),b:t0(r)};return n!==void 0&&(o.alpha=n),o},Fs=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=eu({r:e*3.2409699419045226-t*1.537383177570094-.4986107602930034*r,g:e*-.9692436362808796+t*1.8759675015077204+.0415550574071756*r,b:e*.0556300796969936-t*.2039769588889765+1.0569715142428784*r});return n!==void 0&&(i.alpha=n),i},EB={...Xa,mode:"a98",parse:["a98-rgb"],serialize:"a98-rgb",fromMode:{rgb:e=>Fv(Ms(e)),xyz65:Fv},toMode:{rgb:e=>Fs(Mv(e)),xyz65:Mv}},mr=e=>(e=e%360)<0?e+360:e,CB=(e,t)=>e.map((r,n,i)=>{if(r===void 0)return r;let o=mr(r);return n===0||e[n-1]===void 0?o:t(o-mr(i[n-1]))}).reduce((r,n)=>!r.length||n===void 0||r[r.length-1]===void 0?(r.push(n),r):(r.push(n+r[r.length-1]),r),[]),Qi=e=>CB(e,t=>Math.abs(t)<=180?t:t-360*Math.sign(t)),er=[-.14861,1.78277,-.29227,-.90649,1.97294,0],SB=Math.PI/180,TB=180/Math.PI;let Pv=er[3]*er[4],Iv=er[1]*er[4],Nv=er[1]*er[2]-er[0]*er[3];const MB=({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=(Nv*r+e*Pv-t*Iv)/(Nv+Pv-Iv),o=r-i,s=(er[4]*(t-i)-er[2]*o)/er[3],a={mode:"cubehelix",l:i,s:i===0||i===1?void 0:Math.sqrt(o*o+s*s)/(er[4]*i*(1-i))};return a.s&&(a.h=Math.atan2(s,o)*TB-120),n!==void 0&&(a.alpha=n),a},FB=({h:e,s:t,l:r,alpha:n})=>{let i={mode:"rgb"};e=(e===void 0?0:e+120)*SB,r===void 0&&(r=0);let o=t===void 0?0:t*r*(1-r),s=Math.cos(e),a=Math.sin(e);return i.r=r+o*(er[0]*s+er[1]*a),i.g=r+o*(er[2]*s+er[3]*a),i.b=r+o*(er[4]*s+er[5]*a),n!==void 0&&(i.alpha=n),i},Tf=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.s||!t.s)return 0;let r=mr(e.h),n=mr(t.h),i=Math.sin((n-r+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*t.s)*i},PB=(e,t)=>{if(e.h===void 0||t.h===void 0)return 0;let r=mr(e.h),n=mr(t.h);return Math.abs(n-r)>180?r-(n-360*Math.sign(n-r)):n-r},Mf=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.c||!t.c)return 0;let r=mr(e.h),n=mr(t.h),i=Math.sin((n-r+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*t.c)*i},IB=(e="rgb",t=[1,1,1,0])=>{let r=Sf(e),n=r.channels,i=r.difference,o=gs(e);return(s,a)=>{let u=o(s),l=o(a);return Math.sqrt(n.reduce((d,f,h)=>{let g=i[f]?i[f](u,l):u[f]-l[f];return d+(t[h]||0)*Math.pow(isNaN(g)?0:g,2)},0))}},eo=e=>{let t=e.reduce((n,i)=>{if(i!==void 0){let o=i*Math.PI/180;n.sin+=Math.sin(o),n.cos+=Math.cos(o)}return n},{sin:0,cos:0}),r=Math.atan2(t.sin,t.cos)*180/Math.PI;return r<0?360+r:r},NB={mode:"cubehelix",channels:["h","s","l","alpha"],parse:["--cubehelix"],serialize:"--cubehelix",ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:MB},toMode:{rgb:FB},interpolate:{h:{use:U,fixup:Qi},s:U,l:U,alpha:{use:U,fixup:Zt}},difference:{h:Tf},average:{h:eo}},Eo=({l:e,a:t,b:r,alpha:n},i="lch")=>{t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.sqrt(t*t+r*r),s={mode:i,l:e,c:o};return o&&(s.h=mr(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(s.alpha=n),s},Co=({l:e,c:t,h:r,alpha:n},i="lab")=>{r===void 0&&(r=0);let o={mode:i,l:e,a:t?t*Math.cos(r/180*Math.PI):0,b:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},S$=Math.pow(29,3)/Math.pow(3,3),T$=Math.pow(6,3)/Math.pow(29,3),Ot={X:.3457/.3585,Y:1,Z:(1-.3457-.3585)/.3585},aa={X:.3127/.329,Y:1,Z:(1-.3127-.329)/.329};let r0=e=>Math.pow(e,3)>T$?Math.pow(e,3):(116*e-16)/S$;const M$=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=(e+16)/116,o=t/500+i,s=i-r/200,a={mode:"xyz65",x:r0(o)*aa.X,y:r0(i)*aa.Y,z:r0(s)*aa.Z};return n!==void 0&&(a.alpha=n),a},Ff=e=>Fs(M$(e)),n0=e=>e>T$?Math.cbrt(e):(S$*e+16)/116,F$=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=n0(e/aa.X),o=n0(t/aa.Y),s=n0(r/aa.Z),a={mode:"lab65",l:116*o-16,a:500*(i-o),b:200*(o-s)};return n!==void 0&&(a.alpha=n),a},Pf=e=>{let t=F$(Ms(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},$d=1,P$=1,gl=26/180*Math.PI,Dd=Math.cos(gl),Ad=Math.sin(gl),I$=100/Math.log(139/100),Om=({l:e,c:t,h:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i={mode:"lab65",l:(Math.exp(e*$d/I$)-1)/.0039},o=(Math.exp(.0435*t*P$*$d)-1)/.075,s=o*Math.cos(r/180*Math.PI-gl),a=o*Math.sin(r/180*Math.PI-gl);return i.a=s*Dd-a/.83*Ad,i.b=s*Ad+a/.83*Dd,n!==void 0&&(i.alpha=n),i},Rm=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=t*Dd+r*Ad,o=.83*(r*Dd-t*Ad),s=Math.sqrt(i*i+o*o),a={mode:"dlch",l:I$/$d*Math.log(1+.0039*e),c:Math.log(1+.075*s)/(.0435*P$*$d)};return a.c&&(a.h=mr((Math.atan2(o,i)+gl)/Math.PI*180)),n!==void 0&&(a.alpha=n),a},Ov=e=>Om(Eo(e,"dlch")),Rv=e=>Co(Rm(e),"dlab"),OB={mode:"dlab",parse:["--din99o-lab"],serialize:"--din99o-lab",toMode:{lab65:Ov,rgb:e=>Ff(Ov(e))},fromMode:{lab65:Rv,rgb:e=>Rv(Pf(e))},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:U,a:U,b:U,alpha:{use:U,fixup:Zt}}},RB={mode:"dlch",parse:["--din99o-lch"],serialize:"--din99o-lch",toMode:{lab65:Om,dlab:e=>Co(e,"dlab"),rgb:e=>Ff(Om(e))},fromMode:{lab65:Rm,dlab:e=>Eo(e,"dlch"),rgb:e=>Rm(Pf(e))},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:U,c:U,h:{use:U,fixup:Qi},alpha:{use:U,fixup:Zt}},difference:{h:Mf},average:{h:eo}};function BB({h:e,s:t,i:r,alpha:n}){e=mr(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.abs(e/60%2-1),o;switch(Math.floor(e/60)){case 0:o={r:r*(1+t*(3/(2-i)-1)),g:r*(1+t*(3*(1-i)/(2-i)-1)),b:r*(1-t)};break;case 1:o={r:r*(1+t*(3*(1-i)/(2-i)-1)),g:r*(1+t*(3/(2-i)-1)),b:r*(1-t)};break;case 2:o={r:r*(1-t),g:r*(1+t*(3/(2-i)-1)),b:r*(1+t*(3*(1-i)/(2-i)-1))};break;case 3:o={r:r*(1-t),g:r*(1+t*(3*(1-i)/(2-i)-1)),b:r*(1+t*(3/(2-i)-1))};break;case 4:o={r:r*(1+t*(3*(1-i)/(2-i)-1)),g:r*(1-t),b:r*(1+t*(3/(2-i)-1))};break;case 5:o={r:r*(1+t*(3/(2-i)-1)),g:r*(1-t),b:r*(1+t*(3*(1-i)/(2-i)-1))};break;default:o={r:r*(1-t),g:r*(1-t),b:r*(1-t)}}return o.mode="rgb",n!==void 0&&(o.alpha=n),o}function LB({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.max(e,t,r),o=Math.min(e,t,r),s={mode:"hsi",s:e+t+r===0?0:1-3*o/(e+t+r),i:(e+t+r)/3};return i-o!==0&&(s.h=(i===e?(t-r)/(i-o)+(t<r)*6:i===t?(r-e)/(i-o)+2:(e-t)/(i-o)+4)*60),n!==void 0&&(s.alpha=n),s}const _B={mode:"hsi",toMode:{rgb:BB},parse:["--hsi"],serialize:"--hsi",fromMode:{rgb:LB},channels:["h","s","i","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:U,fixup:Qi},s:U,i:U,alpha:{use:U,fixup:Zt}},difference:{h:Tf},average:{h:eo}};function jB({h:e,s:t,l:r,alpha:n}){e=mr(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let i=r+t*(r<.5?r:1-r),o=i-(i-r)*2*Math.abs(e/60%2-1),s;switch(Math.floor(e/60)){case 0:s={r:i,g:o,b:2*r-i};break;case 1:s={r:o,g:i,b:2*r-i};break;case 2:s={r:2*r-i,g:i,b:o};break;case 3:s={r:2*r-i,g:o,b:i};break;case 4:s={r:o,g:2*r-i,b:i};break;case 5:s={r:i,g:2*r-i,b:o};break;default:s={r:2*r-i,g:2*r-i,b:2*r-i}}return s.mode="rgb",n!==void 0&&(s.alpha=n),s}function zB({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.max(e,t,r),o=Math.min(e,t,r),s={mode:"hsl",s:i===o?0:(i-o)/(1-Math.abs(i+o-1)),l:.5*(i+o)};return i-o!==0&&(s.h=(i===e?(t-r)/(i-o)+(t<r)*6:i===t?(r-e)/(i-o)+2:(e-t)/(i-o)+4)*60),n!==void 0&&(s.alpha=n),s}const UB=(e,t)=>{switch(t){case"deg":return+e;case"rad":return e/Math.PI*180;case"grad":return e/10*9;case"turn":return e*360}},qB=new RegExp(`^hsla?\\(\\s*${lB}${Fa}${Hu}${Fa}${Hu}\\s*(?:,\\s*${Bp}\\s*)?\\)$`),WB=e=>{let t=e.match(qB);if(!t)return;let r={mode:"hsl"};return t[3]!==void 0?r.h=+t[3]:t[1]!==void 0&&t[2]!==void 0&&(r.h=UB(t[1],t[2])),t[4]!==void 0&&(r.s=Math.min(Math.max(0,t[4]/100),1)),t[5]!==void 0&&(r.l=Math.min(Math.max(0,t[5]/100),1)),t[6]!==void 0?r.alpha=Math.max(0,Math.min(1,t[6]/100)):t[7]!==void 0&&(r.alpha=Math.max(0,Math.min(1,+t[7]))),r};function VB(e,t){if(!t||t[0]!=="hsl"&&t[0]!=="hsla")return;const r={mode:"hsl"},[,n,i,o,s]=t;if(n.type!==B.None){if(n.type===B.Percentage)return;r.h=n.value}if(i.type!==B.None){if(i.type===B.Hue)return;r.s=i.value/100}if(o.type!==B.None){if(o.type===B.Hue)return;r.l=o.value/100}return s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const N$={mode:"hsl",toMode:{rgb:jB},fromMode:{rgb:zB},channels:["h","s","l","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[VB,WB],serialize:e=>`hsl(${e.h!==void 0?e.h:"none"} ${e.s!==void 0?e.s*100+"%":"none"} ${e.l!==void 0?e.l*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:U,fixup:Qi},s:U,l:U,alpha:{use:U,fixup:Zt}},difference:{h:Tf},average:{h:eo}};function O$({h:e,s:t,v:r,alpha:n}){e=mr(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.abs(e/60%2-1),o;switch(Math.floor(e/60)){case 0:o={r,g:r*(1-t*i),b:r*(1-t)};break;case 1:o={r:r*(1-t*i),g:r,b:r*(1-t)};break;case 2:o={r:r*(1-t),g:r,b:r*(1-t*i)};break;case 3:o={r:r*(1-t),g:r*(1-t*i),b:r};break;case 4:o={r:r*(1-t*i),g:r*(1-t),b:r};break;case 5:o={r,g:r*(1-t),b:r*(1-t*i)};break;default:o={r:r*(1-t),g:r*(1-t),b:r*(1-t)}}return o.mode="rgb",n!==void 0&&(o.alpha=n),o}function R$({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.max(e,t,r),o=Math.min(e,t,r),s={mode:"hsv",s:i===0?0:1-o/i,v:i};return i-o!==0&&(s.h=(i===e?(t-r)/(i-o)+(t<r)*6:i===t?(r-e)/(i-o)+2:(e-t)/(i-o)+4)*60),n!==void 0&&(s.alpha=n),s}const B$={mode:"hsv",toMode:{rgb:O$},parse:["--hsv"],serialize:"--hsv",fromMode:{rgb:R$},channels:["h","s","v","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:U,fixup:Qi},s:U,v:U,alpha:{use:U,fixup:Zt}},difference:{h:Tf},average:{h:eo}};function KB({h:e,w:t,b:r,alpha:n}){if(t===void 0&&(t=0),r===void 0&&(r=0),t+r>1){let i=t+r;t/=i,r/=i}return O$({h:e,s:r===1?1:1-t/(1-r),v:1-r,alpha:n})}function HB(e){let t=R$(e);if(t===void 0)return;let r=t.s!==void 0?t.s:0,n=t.v!==void 0?t.v:0,i={mode:"hwb",w:(1-r)*n,b:1-n};return t.h!==void 0&&(i.h=t.h),t.alpha!==void 0&&(i.alpha=t.alpha),i}function GB(e,t){if(!t||t[0]!=="hwb")return;const r={mode:"hwb"},[,n,i,o,s]=t;if(n.type!==B.None){if(n.type===B.Percentage)return;r.h=n.value}if(i.type!==B.None){if(i.type===B.Hue)return;r.w=i.value/100}if(o.type!==B.None){if(o.type===B.Hue)return;r.b=o.value/100}return s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const ZB={mode:"hwb",toMode:{rgb:KB},fromMode:{rgb:HB},channels:["h","w","b","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[GB],serialize:e=>`hwb(${e.h!==void 0?e.h:"none"} ${e.w!==void 0?e.w*100+"%":"none"} ${e.b!==void 0?e.b*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:U,fixup:Qi},w:U,b:U,alpha:{use:U,fixup:Zt}},difference:{h:PB},average:{h:eo}},L$=203,If=.1593017578125,_$=78.84375,Nf=.8359375,Of=18.8515625,Rf=18.6875;function i0(e){if(e<0)return 0;const t=Math.pow(e,1/_$);return 1e4*Math.pow(Math.max(0,t-Nf)/(Of-Rf*t),1/If)}function o0(e){if(e<0)return 0;const t=Math.pow(e/1e4,If);return Math.pow((Nf+Of*t)/(1+Rf*t),_$)}const s0=e=>Math.max(e/L$,0),Bv=({i:e,t,p:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const i=i0(e+.008609037037932761*t+.11102962500302593*r),o=i0(e-.00860903703793275*t-.11102962500302599*r),s=i0(e+.5600313357106791*t-.32062717498731885*r),a={mode:"xyz65",x:s0(2.070152218389422*i-1.3263473389671556*o+.2066510476294051*s),y:s0(.3647385209748074*i+.680566024947227*o-.0453045459220346*s),z:s0(-.049747207535812*i-.0492609666966138*o+1.1880659249923042*s)};return n!==void 0&&(a.alpha=n),a},a0=(e=0)=>Math.max(e*L$,0),Lv=({x:e,y:t,z:r,alpha:n})=>{const i=a0(e),o=a0(t),s=a0(r),a=o0(.3592832590121217*i+.6976051147779502*o-.0358915932320289*s),u=o0(-.1920808463704995*i+1.1004767970374323*o+.0753748658519118*s),l=o0(.0070797844607477*i+.0748396662186366*o+.8433265453898765*s),d=.5*a+.5*u,f=1.61376953125*a-3.323486328125*u+1.709716796875*l,h=4.378173828125*a-4.24560546875*u-.132568359375*l,g={mode:"itp",i:d,t:f,p:h};return n!==void 0&&(g.alpha=n),g},YB={mode:"itp",channels:["i","t","p","alpha"],parse:["--ictcp"],serialize:"--ictcp",toMode:{xyz65:Bv,rgb:e=>Fs(Bv(e))},fromMode:{xyz65:Lv,rgb:e=>Lv(Ms(e))},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:U,t:U,p:U,alpha:{use:U,fixup:Zt}}},JB=134.03437499999998,XB=16295499532821565e-27,u0=e=>{if(e<0)return 0;let t=Math.pow(e/1e4,If);return Math.pow((Nf+Of*t)/(1+Rf*t),JB)},l0=(e=0)=>Math.max(e*203,0),j$=({x:e,y:t,z:r,alpha:n})=>{e=l0(e),t=l0(t),r=l0(r);let i=1.15*e-.15*r,o=.66*t+.34*e,s=u0(.41478972*i+.579999*o+.014648*r),a=u0(-.20151*i+1.120649*o+.0531008*r),u=u0(-.0166008*i+.2648*o+.6684799*r),l=(s+a)/2,d={mode:"jab",j:.44*l/(1-.56*l)-XB,a:3.524*s-4.066708*a+.542708*u,b:.199076*s+1.096799*a-1.295875*u};return n!==void 0&&(d.alpha=n),d},QB=134.03437499999998,_v=16295499532821565e-27,c0=e=>{if(e<0)return 0;let t=Math.pow(e,1/QB);return 1e4*Math.pow((Nf-t)/(Rf*t-Of),1/If)},d0=e=>e/203,z$=({j:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=(e+_v)/(.44+.56*(e+_v)),o=c0(i+.13860504*t+.058047316*r),s=c0(i-.13860504*t-.058047316*r),a=c0(i-.096019242*t-.8118919*r),u={mode:"xyz65",x:d0(1.661373024652174*o-.914523081304348*s+.23136208173913045*a),y:d0(-.3250758611844533*o+1.571847026732543*s-.21825383453227928*a),z:d0(-.090982811*o-.31272829*s+1.5227666*a)};return n!==void 0&&(u.alpha=n),u},U$=e=>{let t=j$(Ms(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},q$=e=>Fs(z$(e)),eL={mode:"jab",channels:["j","a","b","alpha"],parse:["--jzazbz"],serialize:"--jzazbz",fromMode:{rgb:U$,xyz65:j$},toMode:{rgb:q$,xyz65:z$},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:U,a:U,b:U,alpha:{use:U,fixup:Zt}}},jv=({j:e,a:t,b:r,alpha:n})=>{t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.sqrt(t*t+r*r),o={mode:"jch",j:e,c:i};return i&&(o.h=mr(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(o.alpha=n),o},zv=({j:e,c:t,h:r,alpha:n})=>{r===void 0&&(r=0);let i={mode:"jab",j:e,a:t?t*Math.cos(r/180*Math.PI):0,b:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(i.alpha=n),i},tL={mode:"jch",parse:["--jzczhz"],serialize:"--jzczhz",toMode:{jab:zv,rgb:e=>q$(zv(e))},fromMode:{rgb:e=>jv(U$(e)),jab:jv},channels:["j","c","h","alpha"],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:U,fixup:Qi},c:U,j:U,alpha:{use:U,fixup:Zt}},difference:{h:Mf},average:{h:eo}},Bf=Math.pow(29,3)/Math.pow(3,3),Lp=Math.pow(6,3)/Math.pow(29,3);let f0=e=>Math.pow(e,3)>Lp?Math.pow(e,3):(116*e-16)/Bf;const _p=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=(e+16)/116,o=t/500+i,s=i-r/200,a={mode:"xyz50",x:f0(o)*Ot.X,y:f0(i)*Ot.Y,z:f0(s)*Ot.Z};return n!==void 0&&(a.alpha=n),a},Ul=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=eu({r:e*3.1341359569958707-t*1.6173863321612538-.4906619460083532*r,g:e*-.978795502912089+t*1.916254567259524+.03344273116131949*r,b:e*.07195537988411677-t*.2289768264158322+1.405386058324125*r});return n!==void 0&&(i.alpha=n),i},W$=e=>Ul(_p(e)),ql=e=>{let{r:t,g:r,b:n,alpha:i}=Qa(e),o={mode:"xyz50",x:.436065742824811*t+.3851514688337912*r+.14307845442264197*n,y:.22249319175623702*t+.7168870538238823*r+.06061979053616537*n,z:.013923904500943465*t+.09708128566574634*r+.7140993584005155*n};return i!==void 0&&(o.alpha=i),o},h0=e=>e>Lp?Math.cbrt(e):(Bf*e+16)/116,jp=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=h0(e/Ot.X),o=h0(t/Ot.Y),s=h0(r/Ot.Z),a={mode:"lab",l:116*o-16,a:500*(i-o),b:200*(o-s)};return n!==void 0&&(a.alpha=n),a},V$=e=>{let t=jp(ql(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t};function rL(e,t){if(!t||t[0]!=="lab")return;const r={mode:"lab"},[,n,i,o,s]=t;if(!(n.type===B.Hue||i.type===B.Hue||o.type===B.Hue))return n.type!==B.None&&(r.l=Math.min(Math.max(0,n.value),100)),i.type!==B.None&&(r.a=i.type===B.Number?i.value:i.value*125/100),o.type!==B.None&&(r.b=o.type===B.Number?o.value:o.value*125/100),s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const zp={mode:"lab",toMode:{xyz50:_p,rgb:W$},fromMode:{xyz50:jp,rgb:V$},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[rL],serialize:e=>`lab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{l:U,a:U,b:U,alpha:{use:U,fixup:Zt}}},nL={...zp,mode:"lab65",parse:["--lab-d65"],serialize:"--lab-d65",toMode:{xyz65:M$,rgb:Ff},fromMode:{xyz65:F$,rgb:Pf},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};function iL(e,t){if(!t||t[0]!=="lch")return;const r={mode:"lch"},[,n,i,o,s]=t;if(n.type!==B.None){if(n.type===B.Hue)return;r.l=Math.min(Math.max(0,n.value),100)}if(i.type!==B.None&&(r.c=Math.max(0,i.type===B.Number?i.value:i.value*150/100)),o.type!==B.None){if(o.type===B.Percentage)return;r.h=o.value}return s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const Up={mode:"lch",toMode:{lab:Co,rgb:e=>W$(Co(e))},fromMode:{rgb:e=>Eo(V$(e)),lab:Eo},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[iL],serialize:e=>`lch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:U,fixup:Qi},c:U,l:U,alpha:{use:U,fixup:Zt}},difference:{h:Mf},average:{h:eo}},oL={...Up,mode:"lch65",parse:["--lch-d65"],serialize:"--lch-d65",toMode:{lab65:e=>Co(e,"lab65"),rgb:e=>Ff(Co(e,"lab65"))},fromMode:{rgb:e=>Eo(Pf(e),"lch65"),lab65:e=>Eo(e,"lch65")},ranges:{l:[0,100],c:[0,150],h:[0,360]}},K$=({l:e,u:t,v:r,alpha:n})=>{t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.sqrt(t*t+r*r),o={mode:"lchuv",l:e,c:i};return i&&(o.h=mr(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(o.alpha=n),o},H$=({l:e,c:t,h:r,alpha:n})=>{r===void 0&&(r=0);let i={mode:"luv",l:e,u:t?t*Math.cos(r/180*Math.PI):0,v:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(i.alpha=n),i},G$=(e,t,r)=>4*e/(e+15*t+3*r),Z$=(e,t,r)=>9*t/(e+15*t+3*r),sL=G$(Ot.X,Ot.Y,Ot.Z),aL=Z$(Ot.X,Ot.Y,Ot.Z),uL=e=>e<=Lp?Bf*e:116*Math.cbrt(e)-16,Bm=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=uL(t/Ot.Y),o=G$(e,t,r),s=Z$(e,t,r);!isFinite(o)||!isFinite(s)?i=o=s=0:(o=13*i*(o-sL),s=13*i*(s-aL));let a={mode:"luv",l:i,u:o,v:s};return n!==void 0&&(a.alpha=n),a},lL=(e,t,r)=>4*e/(e+15*t+3*r),cL=(e,t,r)=>9*t/(e+15*t+3*r),dL=lL(Ot.X,Ot.Y,Ot.Z),fL=cL(Ot.X,Ot.Y,Ot.Z),Lm=({l:e,u:t,v:r,alpha:n})=>{if(e===void 0&&(e=0),e===0)return{mode:"xyz50",x:0,y:0,z:0};t===void 0&&(t=0),r===void 0&&(r=0);let i=t/(13*e)+dL,o=r/(13*e)+fL,s=Ot.Y*(e<=8?e/Bf:Math.pow((e+16)/116,3)),a=s*(9*i)/(4*o),u=s*(12-3*i-20*o)/(4*o),l={mode:"xyz50",x:a,y:s,z:u};return n!==void 0&&(l.alpha=n),l},hL=e=>K$(Bm(ql(e))),mL=e=>Ul(Lm(H$(e))),gL={mode:"lchuv",toMode:{luv:H$,rgb:mL},fromMode:{rgb:hL,luv:K$},channels:["l","c","h","alpha"],parse:["--lchuv"],serialize:"--lchuv",ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:U,fixup:Qi},c:U,l:U,alpha:{use:U,fixup:Zt}},difference:{h:Mf},average:{h:eo}},pL={...Xa,mode:"lrgb",toMode:{rgb:eu},fromMode:{rgb:Qa},parse:["srgb-linear"],serialize:"srgb-linear"},bL={mode:"luv",toMode:{xyz50:Lm,rgb:e=>Ul(Lm(e))},fromMode:{xyz50:Bm,rgb:e=>Bm(ql(e))},channels:["l","u","v","alpha"],parse:["--luv"],serialize:"--luv",ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:U,u:U,v:U,alpha:{use:U,fixup:Zt}}},Y$=({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.cbrt(.412221469470763*e+.5363325372617348*t+.0514459932675022*r),o=Math.cbrt(.2119034958178252*e+.6806995506452344*t+.1073969535369406*r),s=Math.cbrt(.0883024591900564*e+.2817188391361215*t+.6299787016738222*r),a={mode:"oklab",l:.210454268309314*i+.7936177747023054*o-.0040720430116193*s,a:1.9779985324311684*i-2.42859224204858*o+.450593709617411*s,b:.0259040424655478*i+.7827717124575296*o-.8086757549230774*s};return n!==void 0&&(a.alpha=n),a},Lf=e=>{let t=Y$(Qa(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},Wl=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.pow(e+.3963377773761749*t+.2158037573099136*r,3),o=Math.pow(e-.1055613458156586*t-.0638541728258133*r,3),s=Math.pow(e-.0894841775298119*t-1.2914855480194092*r,3),a={mode:"lrgb",r:4.076741636075957*i-3.3077115392580616*o+.2309699031821044*s,g:-1.2684379732850317*i+2.6097573492876887*o-.3413193760026573*s,b:-.0041960761386756*i-.7034186179359362*o+1.7076146940746117*s};return n!==void 0&&(a.alpha=n),a},_f=e=>eu(Wl(e));function _m(e){const n=1.170873786407767;return .5*(n*e-.206+Math.sqrt((n*e-.206)*(n*e-.206)+4*.03*n*e))}function Ed(e){return(e*e+.206*e)/(1.170873786407767*(e+.03))}function yL(e,t){let r,n,i,o,s,a,u,l;-1.88170328*e-.80936493*t>1?(r=1.19086277,n=1.76576728,i=.59662641,o=.75515197,s=.56771245,a=4.0767416621,u=-3.3077115913,l=.2309699292):1.81444104*e-1.19445276*t>1?(r=.73956515,n=-.45954404,i=.08285427,o=.1254107,s=.14503204,a=-1.2684380046,u=2.6097574011,l=-.3413193965):(r=1.35733652,n=-.00915799,i=-1.1513021,o=-.50559606,s=.00692167,a=-.0041960863,u=-.7034186147,l=1.707614701);let d=r+n*e+i*t+o*e*e+s*e*t,f=.3963377774*e+.2158037573*t,h=-.1055613458*e-.0638541728*t,g=-.0894841775*e-1.291485548*t;{let m=1+d*f,p=1+d*h,k=1+d*g,x=m*m*m,D=p*p*p,C=k*k*k,P=3*f*m*m,O=3*h*p*p,H=3*g*k*k,ee=6*f*f*m,ne=6*h*h*p,X=6*g*g*k,ye=a*x+u*D+l*C,se=a*P+u*O+l*H,xe=a*ee+u*ne+l*X;d=d-ye*se/(se*se-.5*ye*xe)}return d}function qp(e,t){let r=yL(e,t),n=Wl({l:1,a:r*e,b:r*t}),i=Math.cbrt(1/Math.max(n.r,n.g,n.b)),o=i*r;return[i,o]}function vL(e,t,r,n,i,o=null){o||(o=qp(e,t));let s;if((r-i)*o[1]-(o[0]-i)*n<=0)s=o[1]*i/(n*o[0]+o[1]*(i-r));else{s=o[1]*(i-1)/(n*(o[0]-1)+o[1]*(i-r));{let a=r-i,u=n,l=.3963377774*e+.2158037573*t,d=-.1055613458*e-.0638541728*t,f=-.0894841775*e-1.291485548*t,h=a+u*l,g=a+u*d,m=a+u*f;{let p=i*(1-s)+s*r,k=s*n,x=p+k*l,D=p+k*d,C=p+k*f,P=x*x*x,O=D*D*D,H=C*C*C,ee=3*h*x*x,ne=3*g*D*D,X=3*m*C*C,ye=6*h*h*x,se=6*g*g*D,xe=6*m*m*C,ze=4.0767416621*P-3.3077115913*O+.2309699292*H-1,Ge=4.0767416621*ee-3.3077115913*ne+.2309699292*X,yr=4.0767416621*ye-3.3077115913*se+.2309699292*xe,Et=Ge/(Ge*Ge-.5*ze*yr),kn=-ze*Et,xn=-1.2684380046*P+2.6097574011*O-.3413193965*H-1,zr=-1.2684380046*ee+2.6097574011*ne-.3413193965*X,Ct=-1.2684380046*ye+2.6097574011*se-.3413193965*xe,me=zr/(zr*zr-.5*xn*Ct),yt=-xn*me,Ze=-.0041960863*P-.7034186147*O+1.707614701*H-1,jt=-.0041960863*ee-.7034186147*ne+1.707614701*X,Be=-.0041960863*ye-.7034186147*se+1.707614701*xe,sr=jt/(jt*jt-.5*Ze*Be),$n=-Ze*sr;kn=Et>=0?kn:1e6,yt=me>=0?yt:1e6,$n=sr>=0?$n:1e6,s+=Math.min(kn,Math.min(yt,$n))}}}return s}function Wp(e,t,r=null){r||(r=qp(e,t));let n=r[0],i=r[1];return[i/n,i/(1-n)]}function J$(e,t,r){let n=qp(t,r),i=vL(t,r,e,1,e,n),o=Wp(t,r,n),s=.11516993+1/(7.4477897+4.1590124*r+t*(-2.19557347+1.75198401*r+t*(-2.13704948-10.02301043*r+t*(-4.24894561+5.38770819*r+4.69891013*t)))),a=.11239642+1/(1.6132032-.68124379*r+t*(.40370612+.90148123*r+t*(-.27087943+.6122399*r+t*(.00299215-.45399568*r-.14661872*t)))),u=i/Math.min(e*o[0],(1-e)*o[1]),l=e*s,d=(1-e)*a,f=.9*u*Math.sqrt(Math.sqrt(1/(1/(l*l*l*l)+1/(d*d*d*d))));return l=e*.4,d=(1-e)*.8,[Math.sqrt(1/(1/(l*l)+1/(d*d))),f,i]}function Uv(e){const t=e.l!==void 0?e.l:0,r=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,i={mode:"okhsl",l:_m(t)};e.alpha!==void 0&&(i.alpha=e.alpha);let o=Math.sqrt(r*r+n*n);if(!o)return i.s=0,i;let[s,a,u]=J$(t,r/o,n/o),l;if(o<a){let d=0,f=.8*s,h=1-f/a;l=(o-d)/(f+h*(o-d))*.8}else{let d=a,f=.2*a*a*1.25*1.25/s,h=1-f/(u-a);l=.8+.2*((o-d)/(f+h*(o-d)))}return l&&(i.s=l,i.h=mr(Math.atan2(n,r)*180/Math.PI)),i}function qv(e){let t=e.h!==void 0?e.h:0,r=e.s!==void 0?e.s:0,n=e.l!==void 0?e.l:0;const i={mode:"oklab",l:Ed(n)};if(e.alpha!==void 0&&(i.alpha=e.alpha),!r||n===1)return i.a=i.b=0,i;let o=Math.cos(t/180*Math.PI),s=Math.sin(t/180*Math.PI),[a,u,l]=J$(i.l,o,s),d,f,h,g;r<.8?(d=1.25*r,f=0,h=.8*a,g=1-h/u):(d=5*(r-.8),f=u,h=.2*u*u*1.25*1.25/a,g=1-h/(l-u));let m=f+d*h/(1-g*d);return i.a=m*o,i.b=m*s,i}const wL={...N$,mode:"okhsl",channels:["h","s","l","alpha"],parse:["--okhsl"],serialize:"--okhsl",fromMode:{oklab:Uv,rgb:e=>Uv(Lf(e))},toMode:{oklab:qv,rgb:e=>_f(qv(e))}};function Wv(e){let t=e.l!==void 0?e.l:0,r=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,i=Math.sqrt(r*r+n*n),o=i?r/i:1,s=i?n/i:1,[a,u]=Wp(o,s),l=.5,d=1-l/a,f=u/(i+t*u),h=f*t,g=f*i,m=Ed(h),p=g*m/h,k=Wl({l:m,a:o*p,b:s*p}),x=Math.cbrt(1/Math.max(k.r,k.g,k.b,0));t=t/x,i=i/x*_m(t)/t,t=_m(t);const D={mode:"okhsv",s:i?(l+u)*g/(u*l+u*d*g):0,v:t?t/h:0};return D.s&&(D.h=mr(Math.atan2(n,r)*180/Math.PI)),e.alpha!==void 0&&(D.alpha=e.alpha),D}function Vv(e){const t={mode:"oklab"};e.alpha!==void 0&&(t.alpha=e.alpha);const r=e.h!==void 0?e.h:0,n=e.s!==void 0?e.s:0,i=e.v!==void 0?e.v:0,o=Math.cos(r/180*Math.PI),s=Math.sin(r/180*Math.PI),[a,u]=Wp(o,s),l=.5,d=1-l/a,f=1-n*l/(l+u-u*d*n),h=n*u*l/(l+u-u*d*n),g=Ed(f),m=h*g/f,p=Wl({l:g,a:o*m,b:s*m}),k=Math.cbrt(1/Math.max(p.r,p.g,p.b,0)),x=Ed(i*f),D=h*x/f;return t.l=x*k,t.a=D*o*k,t.b=D*s*k,t}const kL={...B$,mode:"okhsv",channels:["h","s","v","alpha"],parse:["--okhsv"],serialize:"--okhsv",fromMode:{oklab:Wv,rgb:e=>Wv(Lf(e))},toMode:{oklab:Vv,rgb:e=>_f(Vv(e))}};function xL(e,t){if(!t||t[0]!=="oklab")return;const r={mode:"oklab"},[,n,i,o,s]=t;if(!(n.type===B.Hue||i.type===B.Hue||o.type===B.Hue))return n.type!==B.None&&(r.l=Math.min(Math.max(0,n.type===B.Number?n.value:n.value/100),1)),i.type!==B.None&&(r.a=i.type===B.Number?i.value:i.value*.4/100),o.type!==B.None&&(r.b=o.type===B.Number?o.value:o.value*.4/100),s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const $L={...zp,mode:"oklab",toMode:{lrgb:Wl,rgb:_f},fromMode:{lrgb:Y$,rgb:Lf},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[xL],serialize:e=>`oklab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`};function DL(e,t){if(!t||t[0]!=="oklch")return;const r={mode:"oklch"},[,n,i,o,s]=t;if(n.type!==B.None){if(n.type===B.Hue)return;r.l=Math.min(Math.max(0,n.type===B.Number?n.value:n.value/100),1)}if(i.type!==B.None&&(r.c=Math.max(0,i.type===B.Number?i.value:i.value*.4/100)),o.type!==B.None){if(o.type===B.Percentage)return;r.h=o.value}return s.type!==B.None&&(r.alpha=Math.min(1,Math.max(0,s.type===B.Number?s.value:s.value/100))),r}const AL={...Up,mode:"oklch",toMode:{oklab:e=>Co(e,"oklab"),rgb:e=>_f(Co(e,"oklab"))},fromMode:{rgb:e=>Eo(Lf(e),"oklch"),oklab:e=>Eo(e,"oklch")},parse:[DL],serialize:e=>`oklch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,ranges:{l:[0,1],c:[0,.4],h:[0,360]}},Kv=e=>{let{r:t,g:r,b:n,alpha:i}=Qa(e),o={mode:"xyz65",x:.486570948648216*t+.265667693169093*r+.1982172852343625*n,y:.2289745640697487*t+.6917385218365062*r+.079286914093745*n,z:0*t+.0451133818589026*r+1.043944368900976*n};return i!==void 0&&(o.alpha=i),o},Hv=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=eu({r:e*2.4934969119414263-t*.9313836179191242-.402710784450717*r,g:e*-.8294889695615749+t*1.7626640603183465+.0236246858419436*r,b:e*.0358458302437845-t*.0761723892680418+.9568845240076871*r},"p3");return n!==void 0&&(i.alpha=n),i},EL={...Xa,mode:"p3",parse:["display-p3"],serialize:"display-p3",fromMode:{rgb:e=>Hv(Ms(e)),xyz65:Hv},toMode:{rgb:e=>Fs(Kv(e)),xyz65:Kv}},m0=e=>{let t=Math.abs(e);return t>=1/512?Math.sign(e)*Math.pow(t,1/1.8):16*e},Gv=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i={mode:"prophoto",r:m0(e*1.3457868816471585-t*.2555720873797946-.0511018649755453*r),g:m0(e*-.5446307051249019+t*1.5082477428451466+.0205274474364214*r),b:m0(e*0+t*0+1.2119675456389452*r)};return n!==void 0&&(i.alpha=n),i},g0=(e=0)=>{let t=Math.abs(e);return t>=16/512?Math.sign(e)*Math.pow(t,1.8):e/16},Zv=e=>{let t=g0(e.r),r=g0(e.g),n=g0(e.b),i={mode:"xyz50",x:.7977666449006423*t+.1351812974005331*r+.0313477341283922*n,y:.2880748288194013*t+.7118352342418731*r+899369387256e-16*n,z:0*t+0*r+.8251046025104602*n};return e.alpha!==void 0&&(i.alpha=e.alpha),i},CL={...Xa,mode:"prophoto",parse:["prophoto-rgb"],serialize:"prophoto-rgb",fromMode:{xyz50:Gv,rgb:e=>Gv(ql(e))},toMode:{xyz50:Zv,rgb:e=>Ul(Zv(e))}},Yv=1.09929682680944,SL=.018053968510807,p0=e=>{const t=Math.abs(e);return t>SL?(Math.sign(e)||1)*(Yv*Math.pow(t,.45)-(Yv-1)):4.5*e},Jv=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i={mode:"rec2020",r:p0(e*1.7166511879712683-t*.3556707837763925-.2533662813736599*r),g:p0(e*-.6666843518324893+t*1.6164812366349395+.0157685458139111*r),b:p0(e*.0176398574453108-t*.0427706132578085+.9421031212354739*r)};return n!==void 0&&(i.alpha=n),i},Xv=1.09929682680944,TL=.018053968510807,b0=(e=0)=>{let t=Math.abs(e);return t<TL*4.5?e/4.5:(Math.sign(e)||1)*Math.pow((t+Xv-1)/Xv,1/.45)},Qv=e=>{let t=b0(e.r),r=b0(e.g),n=b0(e.b),i={mode:"xyz65",x:.6369580483012911*t+.1446169035862083*r+.1688809751641721*n,y:.262700212011267*t+.6779980715188708*r+.059301716469862*n,z:0*t+.0280726930490874*r+1.0609850577107909*n};return e.alpha!==void 0&&(i.alpha=e.alpha),i},ML={...Xa,mode:"rec2020",fromMode:{xyz65:Jv,rgb:e=>Jv(Ms(e))},toMode:{xyz65:Qv,rgb:e=>Fs(Qv(e))},parse:["rec2020"],serialize:"rec2020"},us=.0037930732552754493,X$=Math.cbrt(us),y0=e=>Math.cbrt(e)-X$,FL=e=>{const{r:t,g:r,b:n,alpha:i}=Qa(e),o=y0(.3*t+.622*r+.078*n+us),s=y0(.23*t+.692*r+.078*n+us),a=y0(.2434226892454782*t+.2047674442449682*r+.5518098665095535*n+us),u={mode:"xyb",x:(o-s)/2,y:(o+s)/2,b:a-(o+s)/2};return i!==void 0&&(u.alpha=i),u},v0=e=>Math.pow(e+X$,3),PL=({x:e,y:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const i=v0(e+t)-us,o=v0(t-e)-us,s=v0(r+t)-us,a=eu({r:11.031566904639861*i-9.866943908131562*o-.16462299650829934*s,g:-3.2541473810744237*i+4.418770377582723*o-.16462299650829934*s,b:-3.6588512867136815*i+2.7129230459360922*o+1.9459282407775895*s});return n!==void 0&&(a.alpha=n),a},IL={mode:"xyb",channels:["x","y","b","alpha"],parse:["--xyb"],serialize:"--xyb",toMode:{rgb:PL},fromMode:{rgb:FL},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:U,y:U,b:U,alpha:{use:U,fixup:Zt}}},NL={mode:"xyz50",parse:["xyz-d50"],serialize:"xyz-d50",toMode:{rgb:Ul,lab:jp},fromMode:{rgb:ql,lab:_p},channels:["x","y","z","alpha"],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:U,y:U,z:U,alpha:{use:U,fixup:Zt}}},OL=e=>{let{x:t,y:r,z:n,alpha:i}=e;t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=0);let o={mode:"xyz50",x:1.0479298208405488*t+.0229467933410191*r-.0501922295431356*n,y:.0296278156881593*t+.990434484573249*r-.0170738250293851*n,z:-.0092430581525912*t+.0150551448965779*r+.7518742899580008*n};return i!==void 0&&(o.alpha=i),o},RL=e=>{let{x:t,y:r,z:n,alpha:i}=e;t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=0);let o={mode:"xyz65",x:.9554734527042182*t-.0230985368742614*r+.0632593086610217*n,y:-.0283697069632081*t+1.0099954580058226*r+.021041398966943*n,z:.0123140016883199*t-.0205076964334779*r+1.3303659366080753*n};return i!==void 0&&(o.alpha=i),o},BL={mode:"xyz65",toMode:{rgb:Fs,xyz50:OL},fromMode:{rgb:Ms,xyz50:RL},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:["x","y","z","alpha"],parse:["xyz","xyz-d65"],serialize:"xyz-d65",interpolate:{x:U,y:U,z:U,alpha:{use:U,fixup:Zt}}},LL=({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const i={mode:"yiq",y:.29889531*e+.58662247*t+.11448223*r,i:.59597799*e-.2741761*t-.32180189*r,q:.21147017*e-.52261711*t+.31114694*r};return n!==void 0&&(i.alpha=n),i},_L=({y:e,i:t,q:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const i={mode:"rgb",r:e+.95608445*t+.6208885*r,g:e-.27137664*t-.6486059*r,b:e-1.10561724*t+1.70250126*r};return n!==void 0&&(i.alpha=n),i},jL={mode:"yiq",toMode:{rgb:_L},fromMode:{rgb:LL},channels:["y","i","q","alpha"],parse:["--yiq"],serialize:"--yiq",ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:U,i:U,q:U,alpha:{use:U,fixup:Zt}}},zL=e=>Math.max(0,Math.min(1,e||0)),w0=e=>Math.round(zL(e)*255),UL=gs("rgb"),qL=e=>{if(e===void 0)return;let t=w0(e.r),r=w0(e.g),n=w0(e.b);return"#"+(1<<24|t<<16|r<<8|n).toString(16).slice(1)},WL=e=>qL(UL(e)),VL=e=>{const t={mode:e.mode,r:Math.max(0,Math.min(e.r!==void 0?e.r:0,1)),g:Math.max(0,Math.min(e.g!==void 0?e.g:0,1)),b:Math.max(0,Math.min(e.b!==void 0?e.b:0,1))};return e.alpha!==void 0&&(t.alpha=e.alpha),t},KL=e=>e!==void 0&&(e.r===void 0||e.r>=0&&e.r<=1)&&(e.g===void 0||e.g>=0&&e.g<=1)&&(e.b===void 0||e.b>=0&&e.b<=1);function HL(e="rgb"){const{gamut:t}=Sf(e);if(!t)return n=>!0;const r=gs(typeof t=="string"?t:e);return n=>KL(r(n))}function GL(e="rgb"){const{gamut:t}=Sf(e);if(!t)return o=>Fm(o);const r=typeof t=="string"?t:e,n=gs(r),i=HL(r);return o=>{const s=Fm(o);if(!s)return;const a=n(s);if(i(a))return s;const u=VL(a);return s.mode===u.mode?u:gs(s.mode)(u)}}Xe(EB);Xe(NB);Xe(OB);Xe(RB);Xe(_B);Xe(N$);Xe(B$);Xe(ZB);Xe(YB);Xe(eL);Xe(tL);Xe(zp);Xe(nL);Xe(Up);Xe(oL);Xe(gL);Xe(pL);Xe(bL);Xe(wL);Xe(kL);Xe($L);Xe(AL);Xe(EL);Xe(CL);Xe(ML);Xe(Xa);Xe(IL);Xe(NL);Xe(BL);Xe(jL);const ZL=IB("rgb");class Ki{constructor(t){this.set(t)}static isValidColorString(t){try{return new Ki(t),!0}catch{return!1}}static isColor(t){return t instanceof Ki}static deserialize(t){const r=JSON.parse(t),n=new Ki("black");return ki(r).forEach(([i,o])=>{i==="originalColorSyntax"?n.originalColorSyntax=Qt.isEnumValue(o,Me,"Cannot deserialize: invalid color syntax."):n._allColors[i]=o}),n}getRgbDistance(t){return ZL(this.#e,t)}getClosestNamedColor(){return tt(ml).reduce((t,r)=>{const n=this.getRgbDistance(r);return n<t.distance?{distance:n,name:r}:t},{name:"",distance:1/0}).name}toString(){return this.toCss()[this.originalColorSyntax]}originalColorSyntax=Me.hex;#e=Qt.isDefined(Nm("black"));_allColors={names:["black"],[Me.name]:"black",hexString:"#000000",[Me.hex]:{r:0,g:0,b:0},[Me.rgb]:{r:0,g:0,b:0},[Me.hsl]:{h:0,s:0,l:0},[Me.hwb]:{h:0,w:0,b:0},[Me.lab]:{l:0,a:0,b:0},[Me.lch]:{l:0,c:0,h:0},[Me.oklab]:{l:0,a:0,b:0},[Me.oklch]:{l:0,c:0,h:0}};clone(){return Ki.deserialize(this.serialize())}setByString(t){const r=Nm(t);if(!r)throw new Error(`Unable to parse invalid color string: '${t}'`);this.originalColorSyntax=rB(t),this.#e=r,this.pullFromInternalColor()}set(t){if(T.isString(t))return this.setByString(t);if(It.isLengthExactly(Object.keys(t),1,`Cannot set multiple color formats at once: got '${jE(Object.keys(t))}'`),t.hexString||t.name)this.setByString(t.hexString||t.name);else{const[r,n]=Qt.isDefined(ki(t)[0]),i=bi[r],o=Object.values(lt(i.coords,s=>{const a=n[s],u=i.coords[Qt.isKeyOf(s,i.coords)],l=a!=null&&a>=u.min&&a<=u.max?n[s]:this[r][s];return Qt.isDefined(l)}));this.setByString(`${i.conversionFormat}(${o.join(" ")})`)}}pullFromInternalColor(){on(Ao).forEach(t=>{const r=bi[t],n=r.conversionFormat,i=T.isKeyOf(this.#e.mode,bi)?bi[this.#e.mode]:void 0,o=GL(r.colorSpace===i?.colorSpace?n:"rgb")(gs(n)(this.#e));o||It.never(`Failed to convert color '${JSON.stringify(this.#e)}' to '${t}'.`),tt(this[t]).forEach(s=>{const a=o[s],u=r.coords[Qt.isKeyOf(s,r.coords)];a!=null&&(this._allColors[t][s]=PE((a||0)*(u.factor||1),{digits:u.digits||0}))})}),this._allColors.hexString=WL(this.#e),this._allColors.names=YL(this.rgb),this._allColors[Me.name]=this._allColors.names[0]||""}serialize(){return JSON.stringify({...this.allColors,originalColorSyntax:this.originalColorSyntax})}get allColors(){return qn(this._allColors)}toFormattedStrings(){return{...lt(bi,r=>Object.values(this[r]).map(i=>String(i).padStart(6," ")).join(" ")),names:this.names.join(", ").padEnd(Tv," "),[Me.name]:(this.names[0]||"").padEnd(Tv," "),[Me.hexString]:this[Me.hexString]}}toCss(){return{...lt(bi,r=>{const n=Object.values(this[r]);return`${r}(${n.join(" ")})`}),[Me.hexString]:this[Me.hexString],[Me.name]:this.names[0]||""}}get names(){return qn(this._allColors.names)}get name(){return this._allColors.names[0]||""}get hexString(){return this._allColors[Me.hexString]}get hex(){return qn(this._allColors[Me.hex])}get rgb(){return qn(this._allColors[Me.rgb])}get hsl(){return qn(this._allColors[Me.hsl])}get hwb(){return qn(this._allColors[Me.hwb])}get lab(){return qn(this._allColors[Me.lab])}get lch(){return qn(this._allColors[Me.lch])}get oklab(){return qn(this._allColors[Me.oklab])}get oklch(){return qn(this._allColors[Me.oklch])}}function YL(e){return Vt(ki(ml),([t])=>t,(t,[,r])=>T.deepEquals(r,[e.r,e.g,e.b]))}function Gr(e){return z`
        color: ${e.foreground.value};
        background-color: ${e.background.value};
    `}const k0=Ci()({tagName:"vir-color-slider",cssVars:{"vir-color-slider-gradient":"black"},styles:({cssVars:e})=>z`
        :host {
            display: flex;
            align-items: center;
            font-family: ${o$["vira-monospace"].value};
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

        ${Fr} {
            width: 76px;
        }

        .coordinate {
            font-size: 18px;
            margin-top: -4px;
        }
    `,events:{valueChange:nr()},render({inputs:e,events:t,dispatch:r,cssVars:n}){const i=bi[e.colorFormatName],o=i.coords[e.colorCoordinateName];if(!o)throw new Error(`Invalid color coordinate '${e.colorCoordinateName}' for color format '${e.colorFormatName}'`);const s=10,a=cg(s,f=>{const h=o.min+(o.max-o.min)*(f/s);return new Ki({[e.colorFormatName]:{...e.color[e.colorFormatName],[e.colorCoordinateName]:h}}).toCss()[i.conversionFormat]}),u=z`linear-gradient(to right, ${Ae(a.join(","))})`,l=Qt.isNumber(e.color[e.colorFormatName][e.colorCoordinateName]),d=o.radix?Math.round(l).toString(o.radix).toUpperCase().padStart(o.radixPad||0,"0"):String(l);return v`
            <span class="coordinate">${e.colorCoordinateName.toUpperCase()}</span>
            <input
                type="range"
                style=${z`
                    ${n["vir-color-slider-gradient"].name}: ${u};
                `}
                step=${Math.pow(10,o.digits?-o.digits:0)}
                ${tO(f=>{It.instanceOf(f,HTMLInputElement),f.min=String(o.min),f.max=String(o.max),f.value=String(l)})}
                ${Ee("input",f=>{const h=_l(f,HTMLInputElement),g=Number(h.value);isNaN(g)||r(new t.valueChange(g))})}
            />
            <${Fr.assign({value:d})}
                ${Ee(Fr.events.valueChange,f=>{const h=o.radix?parseInt(f.detail,o.radix):Number(f.detail);isNaN(h)||r(new t.valueChange(h))})}
            ></${Fr}>
        `}}),x0=Ci()({tagName:"vir-color-format-sliders",styles:z`
        :host {
            display: flex;
            flex-direction: column;
        }

        h3 {
            ${zl};
        }
    `,events:{colorChange:nr()},render({inputs:e,dispatch:t,events:r}){const n=bi[e.colorFormatName],i=tt(n.coords).map(o=>v`
                    <${k0.assign({color:e.color,colorCoordinateName:o,colorFormatName:e.colorFormatName})}
                        ${Ee(k0.events.valueChange,s=>{const a=e.color.clone();a.set({[e.colorFormatName]:{[o]:s.detail}});const u=a.toCss()[n.conversionFormat];t(new r.colorChange(u))})}
                    ></${k0}>
                `);return v`
            ${e.showFormatName?v`
                      <h3>${e.colorFormatName}</h3>
                  `:fe}
            ${i}
        `}}),$0=Ci()({tagName:"vir-color-swatch",styles:z`
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
    `,render({inputs:e}){const t=e.backgroundColor||e.foregroundColor,r=e.foregroundColor||"transparent";return v`
            <div
                style=${z`
                    background-color: ${Ae(t)};
                    color: ${Ae(r)};
                `}
            >
                <slot></slot>
            </div>
        `}});class JL{shapes;options;constructor(t,r={}){this.shapes=t,this.options=r,this.storeName=r.storeName||"local-storage-client",this.get=lt(this.shapes,n=>(i={})=>this.getAllValues(i)[n]),this.set=lt(this.shapes,n=>i=>{gd(i,this.shapes[n],{allowExtraKeys:!0},`LocalStorageClient: Invalid value for key '${String(n)}'.`);const o=this.getAllValues();return o[n]=i,globalThis.localStorage.setItem(this.storeName,JSON.stringify(o)),i}),this.delete=lt(this.shapes,n=>()=>{const i=this.getAllValues();delete i[n],globalThis.localStorage.setItem(this.storeName,JSON.stringify(i))})}storeName;getAllValues({throwErrorOnFailure:t=!1}={}){return hk(()=>{const r=JSON.parse(globalThis.localStorage.getItem(this.storeName)||"{}");return mk(r,(n,i)=>{const o=this.shapes[n];if(o){if(t)gd(i,o,{allowExtraKeys:!0});else if(!ho(i,o,{allowExtraKeys:!0}))return;return{key:n,value:i}}})},{handleError:r=>{if(t)throw Ia(r,`LocalStorageClient: store '${this.storeName}' is corrupt and cannot be loaded.`);return{}}})}get;set;delete;clear(){globalThis.localStorage.removeItem(this.storeName)}}const D0=new JL({lastFormat:oi(Ao)}),XL=Jc(Ao).map(e=>({value:e,label:e.toUpperCase()})),vu=Ci()({tagName:"vir-color-picker",cssVars:{"vir-color-picker-swatch-width":{default:"100px",syntax:ha.Length},"vir-color-picker-swatch-height":{default:"100px",syntax:ha.Length}},state(){return{selectedFormatName:D0.get.lastFormat()||Ao.rgb,rawInput:void 0}},hostClasses:{"vir-color-picker-always-show":({inputs:e})=>!!e.alwaysShowPicker},styles:({cssVars:e,hostClasses:t})=>z`
        :host {
            display: inline-flex;
        }

        ${t["vir-color-picker-always-show"].selector} {
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }

        button {
            ${sn}
            cursor: pointer;
            display: flex;
        }

        ${bu} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }

        .swatch-wrapper {
            display: flex;
            flex-direction: column;
            gap: 4px;
            align-items: center;

            & ${$0} {
                width: ${e["vir-color-picker-swatch-width"].value};
                height: ${e["vir-color-picker-swatch-height"].value};
                box-sizing: border-box;
            }
        }

        .code-button {
            font-family: ${o$["vira-monospace"].value};
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
            ${WO.menuShadow}
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

            & ${Fr} {
                flex-grow: 1;
                width: unset;
                color: inherit;
                height: 20px;
                border: none;
            }
        }
    `,events:{colorChange:nr()},render({inputs:e,dispatch:t,events:r,state:n,updateState:i}){const o=Ki.isColor(e.color)?e.color:new Ki(e.color||"black"),s=bi[n.selectedFormatName],a=n.rawInput??o.toCss()[s.rawSyntax],u=v`
            <div class="raw-input-wrapper">
                <${Fr.assign({value:a})}
                    ${Ee(Fr.events.valueChange,h=>{const g=h.detail;i({rawInput:g}),Ki.isValidColorString(g)&&t(new r.colorChange(g))})}
                ></${Fr}>
                <button
                    class="code-button"
                    ${Ee("click",async()=>{await globalThis.navigator.clipboard.writeText(a)})}
                >
                    <${oe.assign({icon:Em,fitContainer:!0})}></${oe}>
                </button>
            </div>
        `,l=v`
            <button
                class="code-button"
                ${Ee("click",async()=>{await globalThis.navigator.clipboard.writeText(o.hexString)})}
            >
                <span>${o.hexString}</span>
                <${oe.assign({icon:Em,fitContainer:!0})}></${oe}>
            </button>
        `,d=v`
            <div class="swatch-wrapper">
                <${$0.assign({backgroundColor:o})}></${$0}>
                ${e.showHexValue?l:fe}
            </div>
        `,f=v`
            <div class="picker">
                <${as.assign({options:XL,value:n.selectedFormatName})}
                    ${Ee(as.events.valueChange,h=>{const g=lg.isEnumValue(h.detail,Ao);g&&(i({selectedFormatName:g}),D0.set.lastFormat(g))})}
                ></${as}>
                ${u}
                <${x0.assign({color:o,colorFormatName:n.selectedFormatName,showFormatName:!1})}
                    ${Ee(x0.events.colorChange,h=>{t(new r.colorChange(h.detail)),i({rawInput:void 0})})}
                ></${x0}>
            </div>
        `;return e.alwaysShowPicker?v`
                ${d} ${f}
            `:v`
                <${bu.assign({keepOpenAfterInteraction:!0})}>
                    <button
                        class="trigger"
                        slot=${bu.slotNames.trigger}
                        ${Ee("mousedown",()=>{const h=D0.get.lastFormat();h&&i({selectedFormatName:h})})}
                    >
                        ${d}
                    </button>
                    <div class="pop-up" slot=${bu.slotNames.popUp}>
                        ${f}
                    </div>
                </${bu}>
            `}});function QL(e){if(!T.hasKey(xv,e))throw new Error(`No ViraTag color for variant '${e}'`);const t=xv[e];return z`
        :host(
                .vira-tag-color-${Ae(e)}.vira-tag-emphasis-${Ae(Sn.Standard)}
            )
            button {
            ${Gr(kr[t]["behind-bg"][ke.NonBodyText])}
            border-color: ${kr[t]["behind-bg"][ke.NonBodyText].background.value};

            &:hover {
                ${Gr(kr[t]["behind-bg"][ke.Header])}
                border-color: ${kr[t]["behind-bg"][ke.Header].background.value};
            }
            &:active {
                ${Gr(kr[t]["behind-bg"][ke.NonBodyText])}
                border-color: ${kr[t]["behind-bg"][ke.NonBodyText].background.value};
            }
        }
        :host(
                .vira-tag-color-${Ae(e)}.vira-tag-emphasis-${Ae(Sn.Subtle)}
            )
            button {
            ${Gr(kr[t]["on-self"][ke.BodyText])}
            border-color: ${kr[t]["on-self"][ke.BodyText].background.value};

            &:hover {
                ${Gr(kr[t]["on-self"][ke.NonBodyText])}
                border-color: ${kr[t]["on-self"][ke.NonBodyText].background.value};
            }
            &:active {
                ${Gr(kr[t]["on-self"][ke.BodyText])}
                border-color: ${kr[t]["on-self"][ke.BodyText].background.value};
            }
        }
        :host(
                .vira-tag-color-${Ae(e)}.vira-tag-not-checked.vira-tag-not-checked.vira-tag-not-checked
            )
            button {
            color: ${kr[t]["on-self"][ke.BodyText].foreground.value};
            background-color: transparent;
            border-color: ${kr[t]["on-self"][ke.BodyText].background.value};

            &:hover {
                background-color: ${kr[t]["behind-bg"][ke.Invisible].background.value};
            }
            &:active {
                background-color: ${kr[t]["behind-bg"][ke.Decoration].background.value};
            }
        }
    `}function e_(){return Ae([ie.Accent,ie.Danger,ie.Neutral,ie.Positive,ie.Warning].map(e=>QL(e)).join(" "))}const Ou=li()({tagName:"vira-tag",cssVars:{"vira-tag-text-color":"white","vira-tag-background-color":"black","vira-tag-border-radius":"1000px","vira-tag-gap":"6px","vira-tag-horizontal-padding":"12px","vira-tag-border-width":"2px"},events:{toggle:nr(),cancel:nr()},hostClasses:{"vira-tag-selectable":({inputs:e})=>T.isBoolean(e.isClickable?.selected),"vira-tag-checked":({inputs:e})=>!!e.isClickable?.selected,"vira-tag-not-checked":({inputs:e})=>e.isClickable?.selected===!1,"vira-tag-cancellable":({inputs:e})=>!!e.isClickable?.cancellable,"vira-tag-not-clickable":({inputs:e})=>!e.isClickable,"vira-tag-disabled":({inputs:e})=>!!e.disabled,"vira-tag-size-large":({inputs:e})=>e.size===Ar.Large,"vira-tag-size-medium":({inputs:e})=>!e.size||e.size===Ar.Medium,"vira-tag-size-small":({inputs:e})=>e.size===Ar.Small,"vira-tag-emphasis-standard":({inputs:e})=>!e.emphasis||e.emphasis===Sn.Standard,"vira-tag-emphasis-subtle":({inputs:e})=>e.emphasis===Sn.Subtle,"vira-tag-color-accent":({inputs:e})=>!e.color||e.color===ie.Accent,"vira-tag-color-plain":({inputs:e})=>e.color===ie.Plain,"vira-tag-color-neutral":({inputs:e})=>e.color===ie.Neutral,"vira-tag-color-danger":({inputs:e})=>e.color===ie.Danger,"vira-tag-color-warning":({inputs:e})=>e.color===ie.Warning,"vira-tag-color-positive":({inputs:e})=>e.color===ie.Positive},styles:({cssVars:e,hostClasses:t})=>z`
        :host {
            display: inline-flex;
        }

        button {
            ${sn}
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
            height: ${Kh[Ar.Large]}px;
            font-size: ${K["vira-form-large-text-size"].value};
            padding: 0 var(${e["vira-tag-horizontal-padding"].name}, 16px);
        }
        ${t["vira-tag-size-medium"].selector} button {
            height: ${Kh[Ar.Medium]}px;
            font-size: ${K["vira-form-medium-text-size"].value};
        }
        ${t["vira-tag-size-small"].selector} button {
            height: ${Kh[Ar.Small]}px;
            font-size: ${K["vira-form-small-text-size"].value};
        }

        ${e_()}

        :host(.${t["vira-tag-disabled"].name}.${t["vira-tag-disabled"].name}.${t["vira-tag-disabled"].name}.${t["vira-tag-disabled"].name}) {
            cursor: not-allowed;
            ${Sa}

            & button {
                ${Gr(ue.colors["vira-grey-behind-bg-decoration"])}
                border-color: ${ue.colors["vira-grey-behind-bg-decoration"].background.value}
            }

            &.${t["vira-tag-emphasis-subtle"].name} button {
                ${Gr(ue.colors["vira-grey-behind-bg-decoration"])}
                border-color: ${ue.colors["vira-grey-behind-bg-decoration"].background.value}
            }
        }

        :host(
                .${t["vira-tag-color-plain"].name}.vira-tag-emphasis-${Ae(Sn.Standard)}
            )
            button {
            ${Gr(ue.inverse[Dr])};
            border-color: ${ue.inverse[Dr].background.value};

            &:hover {
                ${Gr(ue.colors["vira-grey-behind-bg-non-body"])};
                border-color: ${ue.colors["vira-grey-behind-bg-non-body"].background.value};
            }
            &:active {
                ${Gr(ue.inverse[Dr])};
                border-color: ${ue.inverse[Dr].background.value};
            }
        }
        :host(
                .${t["vira-tag-color-plain"].name}.vira-tag-emphasis-${Ae(Sn.Subtle)}
            )
            button {
            background-color: transparent;
            color: ${ue.colors[Dr].foreground.value};
            border-color: transparent;
        }
        :host(
                .${t["vira-tag-color-plain"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}
            )
            button {
            color: ${ue.colors[Dr].foreground.value};
            background-color: transparent;
            border-color: transparent;
        }
        :host(
                .${t["vira-tag-color-plain"].name}.vira-tag-emphasis-${Ae(Sn.Subtle)}
            )
            button,
        :host(
                .${t["vira-tag-color-plain"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}
            )
            button {
            &:hover {
                ${Gr(ue.colors["vira-grey-behind-fg-small-body"])}
                border-color: ${ue.colors["vira-grey-behind-fg-small-body"].background.value};
            }
            &:active {
                ${Gr(ue.colors["vira-grey-behind-fg-body"])}
                border-color: ${ue.colors["vira-grey-behind-fg-body"].background.value};
            }
        }
    `,render({inputs:e,dispatch:t,events:r}){const n=!e.isClickable||!!e.disabled;return v`
            <button
                ?disabled=${n}
                ${Ee("click",()=>{n||(e.isClickable?.selected!=null?t(new r.toggle(!e.isClickable.selected)):e.isClickable?.cancellable&&t(new r.cancel))})}
            >
                <${oe.assign({icon:p$})}
                    class="selected-check"
                ></${oe}>
                <span class="text">${String(e.text)}</span>
                <${oe.assign({icon:b$})}
                    class="cancel-x"
                ></${oe}>
            </button>
        `}});var ls;(function(e){e.Vertical="vertical",e.Horizontal="horizontal"})(ls||(ls={}));function t_(e,t,r,n={}){const i=t.map((o,s)=>({cells:r(o,s),data:o}));if(n.orientation===ls.Horizontal)return{headerRow:void 0,rows:Vt(e,s=>{if(s.disabled)return;const a=n.hideHeaders?[]:[{content:s.content??s.key,key:s.key,data:void 0}],u=Vt(i,({data:d,cells:f})=>{if(f)return{content:f[s.key],key:s.key,data:d}},T.isTruthy);return{cells:[...a,...u],data:void 0}},T.isTruthy),orientation:ls.Horizontal};{const o=n.hideHeaders?[]:Vt(e,a=>{if(!a.disabled)return{content:a.content??a.key,key:a.key,data:void 0}},T.isTruthy),s=Vt(i,({cells:a,data:u})=>{if(a)return{cells:Vt(e,l=>{if(!l.disabled)return{content:a[l.key],key:l.key,data:u}},T.isTruthy),data:u}},T.isTruthy);return{headerRow:o,rows:s,orientation:ls.Vertical}}}const wn=Wx(),Tn=wn()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":"0px"},styles:({cssVars:e})=>z`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,render:({inputs:e,dispatch:t})=>{const r=e.router?.createRouteUrl({...e.route})??"#";return v`
            <a
                href=${r}
                ${Ee("click",n=>{(!e.router||r$(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new vd(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function r_(e,t){return e.entry.entryType===lr.Root?!1:e.entry.entryType===lr.Page||T.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:T.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const Vs=wn()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>z`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${qe["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${qe["element-book-nav-hover-background-color"].value};
            color: ${qe["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${qe["element-book-nav-active-background-color"].value};
            color: ${qe["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${Tn.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${qe["element-book-nav-selected-background-color"].value};
            color: ${qe["element-book-nav-selected-foreground-color"].value};
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
            color: ${qe["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!r_(r,e.selectedPath))return;const n=z`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return v`
                <li style=${n}>
                    <${Tn.assign({router:e.router,route:{paths:[Zr.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${Nn({"title-row":!0,selected:e.selectedPath?T.jsonEquals(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Zn(na(r,lr.ElementExample),v`
                                    <${oe.assign({icon:w$})}></${oe}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${Tn}>
                </li>
            `});return v`
            <${Tn.assign({route:da,router:e.router})}>
                <slot>Book</slot>
            </${Tn}>
            <ul>
                ${t}
            </ul>
        `}}),So=wn()({tagName:"book-error",styles:z`
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
    `,render({inputs:e}){return(T.isArray(e.message)?e.message:[e.message]).map(r=>v`
                <p>${r}</p>
            `)}}),pl=wn()({tagName:"book-page-controls",events:{controlValueChange:nr()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>z`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${qe["element-book-page-foreground-faint-level-1-color"].value};
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

        ${Fr}, ${as} {
            height: 24px;
            max-width: 128px;
        }

        ${oe}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,i],o)=>{if(i.controlType===qt.Hidden)return"";const s=n_(e.currentValues[n],i,a=>{const u=T.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...Object.fromEntries(Object.keys(e.config).map(l=>[l,e.currentValues[l]])),[n]:a}}))});return v`
                    <div class="control-wrapper">
                        ${Zn(o===0,v`
                                <${oe.assign({icon:$$})}
                                    class="options-icon"
                                ></${oe}>
                            `)}
                        <label class="control-wrapper">
                            <span>
                                ${i.controlType===qt.Custom?v`
                                          &nbsp;
                                      `:n}
                            </span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function n_(e,t,r){return Wo(t,qt.Hidden)?"":Wo(t,qt.Checkbox)?v`
            <${Yh.assign({value:!!e})}
                ${Ee(Yh.events.valueChange,n=>{r(n.detail)})}
            ></${Yh}>
        `:Wo(t,qt.Color)?v`
            <${vu.assign({color:e})}
                style=${z`
                    ${vu.cssVars["vir-color-picker-swatch-height"].name}: 24px;
                    ${vu.cssVars["vir-color-picker-swatch-width"].name}: 24px;
                `}
                ${Ee(vu.events.colorChange,n=>{r(n.detail)})}
            ></${vu}>
        `:Wo(t,qt.Text)?v`
            <${Fr.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${Ee(Fr.events.valueChange,n=>{r(n.detail)})}
            ></${Fr}>
        `:Wo(t,qt.Number)?v`
            <${Fr.assign({value:e,allowedInputs:/[\d.]/})}
                ${Ee(Fr.events.valueChange,n=>{r(n.detail)})}
            ></${Fr}>
        `:Wo(t,qt.Dropdown)?v`
            <${as.assign({value:e,options:t.options.map(n=>({label:n,value:n}))})}
                ${Ee(as.events.valueChange,n=>{r(n.detail)})}
            ></${as}>
        `:Wo(t,qt.Custom)?t.content:v`
            <p class="error">
                ${t.controlType} controls are not implemented yet.
            </p>
        `}const e2=wn()({tagName:"book-breadcrumbs",styles:z`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,i)=>{const o=n>=i.length-1,s=i.slice(0,n+1),a=o?"":v`
                      <span class="spacer">&gt;</span>
                  `;return v`
                <${Tn.assign({route:{hash:void 0,search:void 0,paths:[Zr.Book,...s]},router:e.router})}>
                    ${r}
                </${Tn}>
                ${a}
            `}):v`
                &nbsp;
            `}}),A0=wn()({tagName:"book-breadcrumbs-bar",styles:z`
        :host {
            border-bottom: 1px solid
                ${qe["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${qe["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return v`
            ${Zn(!!e.currentSearch,v`
                    &nbsp;
                `,v`
                    <${e2.assign({currentRoute:e.currentRoute,router:e.router})}></${e2}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${Ee("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=n.value;await _d({milliseconds:200}),n.value===i&&(n.value?t(new vd({paths:[Zr.Search,encodeURIComponent(n.value)]})):t(new vd(da)))})}
            />
        `}}),t2=wn()({tagName:"book-entry-description",styles:z`
        :host {
            color: ${qe["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${qe["element-book-page-foreground-color"].value};
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
    `,render({inputs:e}){return e.descriptionParagraphs.map(t=>v`
                <p>${t}</p>
            `)}}),r2=wn()({tagName:"book-page-wrapper",styles:z`
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

        ${Tn} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?v`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:v`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[Zr.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?fk(e.pageNode.entry.errors):void 0;n&&console.error(n);const i=e.blockNavigation?t:v`
                  <${Tn.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                      ${t}
                  </${Tn}>
              `;return v`
            <div class="page-header block-entry">
                <div class="title-group">
                    ${i}
                    ${n?v`
                              <${So.assign({message:n.message})}></${So}>
                          `:v`
                              <${t2.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${t2}>
                              <${pl.assign({config:e.pageNode.entry.controls,currentValues:bg(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${pl}>
                          `}
                </div>
            </div>
        `}}),kc=wn()({tagName:"book-element-example-title",styles:z`
        :host {
            display: flex;
            color: ${qe["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){if(e.blockNavigation)return e.elementExampleNode.entry.title;const t=[Zr.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return v`
            <${Tn.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Tn}>
        `}}),n2=Symbol("unset-internal-state"),i2=wn()({tagName:"book-element-example-viewer",state(){return{isUnset:n2}},render({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw fk(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===n2&&r({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const n=t.elementExampleNode.entry.render({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return v`
                ${Zn(!!t.elementExampleNode.entry.styles,v`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",fr(n)),console.error(n),v`
                <${So.assign({message:`${t.elementExampleNode.entry.title} failed: ${fr(n)}`})}></${So}>
            `}},options:{allowPolymorphicState:!0}}),o2=wn()({tagName:"book-element-example-wrapper",styles:z`
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

        ${kc} {
            color: ${qe["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${kc} {
            color: ${qe["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return v`
            <div class="individual-example-wrapper">
                <${kc.assign({blockNavigation:e.blockNavigation,elementExampleNode:e.elementExampleNode,router:e.router})}></${kc}>
                <${i2.assign(e)}></${i2}>
            </div>
        `}}),i_={milliseconds:10};let Ru;const Cd=new Map,Xo=new Map;function o_(){return Ru||(Ru=new IntersectionObserver(e=>{for(const t of e){const r=t.target,n=Cd.get(r);if(n)if(t.isIntersecting){if(!Xo.has(r)){const i=globalThis.setTimeout(()=>{Xo.delete(r),n(),Ru?.unobserve(r),Cd.delete(r)},la(i_,{milliseconds:!0}).milliseconds);Xo.set(r,i)}}else{const i=Xo.get(r);i&&(clearTimeout(i),Xo.delete(r))}}},{rootMargin:"100px"})),Ru}function s2(e){const t=Xo.get(e);t&&(clearTimeout(t),Xo.delete(e)),Cd.delete(e),Ru?.unobserve(e)}const xc=wn()({tagName:"book-lazy-entry",state(){return{hasRendered:!1,placeholderElement:void 0}},styles:z`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&s2(e.placeholderElement)},render({inputs:e,state:t,updateState:r}){return t.hasRendered?e.content:v`
            <div
                class="placeholder"
                ${bd(n=>{t.placeholderElement&&s2(t.placeholderElement),r({placeholderElement:n}),Cd.set(n,()=>{r({hasRendered:!0})}),o_().observe(n)})}
            >
                &nbsp;
            </div>
        `}});function Q$(e,t,r,n){const i=Y0(r,n),o=[];if(i){const s=Q$(e,t,i,n);s&&o.push(s)}if(na(r,lr.Page)&&!e.includes(r)){const s=bg(t,r.fullUrlBreadcrumbs);o.push({config:r.entry.controls,current:s,breadcrumbs:lt(s,()=>r.fullUrlBreadcrumbs)})}return o.reduce((s,a)=>({config:{...s.config,...a.config},current:{...s.current,...a.current},breadcrumbs:{...s.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function s_({blockNavigation:e,currentNodes:t,isTopLevel:r,router:n,isSearching:i,controls:o,originalTree:s}){if(!t.length&&i)return[v`
                No results
            `];const a=T.isLengthAtLeast(t,1)?Q$(t,o,t[0],s):void 0,u=a&&Object.values(a.config).length&&T.isLengthAtLeast(t,1)?v`
                  <${pl.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${pl}>
              `:fe,l=ZN(t,d=>d.fullUrlBreadcrumbs.join(">"),d=>{if(na(d,lr.Page))return v`
                    <${r2.assign({blockNavigation:e,isTopLevel:r,pageNode:d,controls:o,router:n})}
                        class="block-entry"
                    ></${r2}>
                `;if(na(d,lr.ElementExample)){const f=bg(o,d.fullUrlBreadcrumbs.slice(0,-1)),h=v`
                    <${o2.assign({blockNavigation:e,elementExampleNode:d,currentPageControls:f,router:n})}></${o2}>
                `;return v`
                    <${xc.assign({content:h})}
                        class="inline-entry ${Nn({"block-entry":d.entry.isVertical})}"
                    ></${xc}>
                `}else{if(na(d,lr.Root))return fe;{const f=v`
                    <${So.assign({message:`Unknown entry type for rendering: '${d.entry.entryType}'`})}></${So}>
                `;return v`
                    <${xc.assign({content:f})}
                        class="block-entry"
                    ></${xc}>
                `}}});return[u,l]}const Ks=wn()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:z`
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

        ${A0} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${bo["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:nr()},render:({inputs:e,dispatch:t,events:r,state:n,updateState:i})=>{const o=Ak(e.currentRoute.paths),s=s_({blockNavigation:e.blockNavigation,currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!o,controls:e.controls,originalTree:e.originalTree});return v`
            <${A0.assign({currentSearch:o,currentRoute:e.currentRoute,router:e.router})}></${A0}>

            ${Zn(e.showLoading,v`
                    <div
                        ${bd(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${oe.assign({icon:Ta})}></${oe}>
                    </div>
                    ${Zn(!!n.lastElement,v`
                            ${n.lastElement}
                            <slot></slot>
                        `)}
                `,v`
                    <div
                        ${bd(a=>{i({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot></slot>
                `)}
        `}});function a_(e,t,r){const n=a2(e,t);return n.length?n:(r(da),a2(e,da.paths))}function a2(e,t){return e.filter(r=>UE({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const $c=Ci()({tagName:"element-book-app",state(){return{currentRoute:da,router:void 0,loading:!0,colors:{config:void 0,theme:hv(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:nr()},slotNames:["footer","navHeader"],styles:z`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${qe["element-book-page-background-color"].value};
            color: ${qe["element-book-page-foreground-color"].value};
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
    `,cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:r,updateState:n,dispatch:i,events:o,slotNames:s})=>{t._debug&&console.info("rendering element-book app");function a(f){return{...e.currentRoute,...f}}function u(f){const h=a(f);return!T.jsonEquals(e.currentRoute,h)}function l(f){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,f].filter(T.isTruthy).join(" - "))}function d(f){if(!u(f))return;const h=a(f);e.router?e.router.setRoute(h):n({currentRoute:{...e.currentRoute,...h}}),t.elementBookRoutePaths&&!T.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new o.pathUpdate(h.paths))}try{if(t.elementBookRoutePaths&&!T.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&d({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const D=LO(t.internalRouterConfig.basePath);n({router:D}),D.listen(!0,C=>{n({currentRoute:C})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const f={themeColor:t.themeColor};if(!T.jsonEquals(f,e.colors.config)){const D=hv(f);n({colors:{config:f,theme:D}}),x6(r,D)}const h=t._debug??!1,g=GE({entries:t.pages,debug:h});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:Dk(g.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const m=Ak(e.currentRoute.paths),k=(m?AO({flattenedNodes:g.flattenedNodes,searchQuery:m}):void 0)??a_(g.flattenedNodes,e.currentRoute.paths,d);l(k[0]?.entry.title);const x=e.treeBasedControls?.controls;return x?(t._debug&&console.info({currentControls:x}),v`
                <div
                    class="root"
                    ${Ee(vd,D=>{const C=D.detail;if(!u(C))return;if(n({loading:!0}),d(C),!(r.shadowRoot.querySelector(Vs.tagName)instanceof Vs))throw new TypeError(`Failed to find child '${Vs.tagName}'`)})}
                    ${Ee(pl.events.controlValueChange,D=>{if(!e.treeBasedControls)return;const C=YE(x,D.detail.fullUrlBreadcrumbs,D.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:C}})})}
                >
                    ${t.blockNavigation?fe:v`
                              <${Vs.assign({flattenedNodes:g.flattenedNodes,router:e.router,selectedPath:m?void 0:e.currentRoute.paths.slice(1)})}>
                                  <slot name=${s.navHeader}></slot>
                              </${Vs}>
                          `}
                    <${Ks.assign({blockNavigation:!!t.blockNavigation,controls:x,currentNodes:k,currentRoute:e.currentRoute,debug:h,originalTree:g.tree,router:e.router,showLoading:e.loading})}
                        ${Ee(Ks.events.loadingRender,async D=>{await dl();const C=r.shadowRoot.querySelector(Ks.tagName);C?C.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Ks.tagName}' for scrolling.`),await dl(),n({loading:!D.detail})})}
                    >
                        <slot name=${s.footer}></slot>
                    </${Ks}>
                </div>
            `):v`
                    <${So.assign({message:"Failed to generate page controls."})}></${So}>
                `}catch(f){return console.error(f),v`
                <p class="error">${fr(f)}</p>
            `}}}),tu=Bt({title:"Cards",parent:void 0,descriptionParagraphs:["Multiple full cards of structured render data."]});function e3({newStyles:e,oldStyles:t,shadowRoot:r,maintainFirstStylesheet:n}){if(e!==t){const i=new CSSStyleSheet;i.replaceSync(e);const o=[Qt.isDefined(r.adoptedStyleSheets[0]),i].filter(T.isTruthy);return r.adoptedStyleSheets=o,!0}return!1}const{entries:t3,setPrototypeOf:u2,isFrozen:u_,getPrototypeOf:l_,getOwnPropertyDescriptor:c_}=Object;let{freeze:_r,seal:On,create:jm}=Object,{apply:zm,construct:Um}=typeof Reflect<"u"&&Reflect;_r||(_r=function(t){return t});On||(On=function(t){return t});zm||(zm=function(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];return t.apply(r,i)});Um||(Um=function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return new t(...n)});const Dc=jr(Array.prototype.forEach),d_=jr(Array.prototype.lastIndexOf),l2=jr(Array.prototype.pop),wu=jr(Array.prototype.push),f_=jr(Array.prototype.splice),Lc=jr(String.prototype.toLowerCase),E0=jr(String.prototype.toString),C0=jr(String.prototype.match),ku=jr(String.prototype.replace),h_=jr(String.prototype.indexOf),m_=jr(String.prototype.trim),Wn=jr(Object.prototype.hasOwnProperty),Mr=jr(RegExp.prototype.test),xu=g_(TypeError);function jr(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return zm(e,t,n)}}function g_(e){return function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return Um(e,r)}}function Se(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Lc;u2&&u2(e,null);let n=t.length;for(;n--;){let i=t[n];if(typeof i=="string"){const o=r(i);o!==i&&(u_(t)||(t[n]=o),i=o)}e[i]=!0}return e}function p_(e){for(let t=0;t<e.length;t++)Wn(e,t)||(e[t]=null);return e}function fi(e){const t=jm(null);for(const[r,n]of t3(e))Wn(e,r)&&(Array.isArray(n)?t[r]=p_(n):n&&typeof n=="object"&&n.constructor===Object?t[r]=fi(n):t[r]=n);return t}function $u(e,t){for(;e!==null;){const n=c_(e,t);if(n){if(n.get)return jr(n.get);if(typeof n.value=="function")return jr(n.value)}e=l_(e)}function r(){return null}return r}const c2=_r(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),S0=_r(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),T0=_r(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),b_=_r(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),M0=_r(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),y_=_r(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),d2=_r(["#text"]),f2=_r(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),F0=_r(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),h2=_r(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ac=_r(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),v_=On(/\{\{[\w\W]*|[\w\W]*\}\}/gm),w_=On(/<%[\w\W]*|[\w\W]*%>/gm),k_=On(/\$\{[\w\W]*/gm),x_=On(/^data-[\-\w.\u00B7-\uFFFF]+$/),$_=On(/^aria-[\-\w]+$/),r3=On(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),D_=On(/^(?:\w+script|data):/i),A_=On(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),n3=On(/^html$/i),E_=On(/^[a-z][.\w]*(-[.\w]+)+$/i);var m2=Object.freeze({__proto__:null,ARIA_ATTR:$_,ATTR_WHITESPACE:A_,CUSTOM_ELEMENT:E_,DATA_ATTR:x_,DOCTYPE_NAME:n3,ERB_EXPR:w_,IS_ALLOWED_URI:r3,IS_SCRIPT_OR_DATA:D_,MUSTACHE_EXPR:v_,TMPLIT_EXPR:k_});const Du={element:1,text:3,progressingInstruction:7,comment:8,document:9},C_=function(){return typeof window>"u"?null:window},S_=function(t,r){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let n=null;const i="data-tt-policy-suffix";r&&r.hasAttribute(i)&&(n=r.getAttribute(i));const o="dompurify"+(n?"#"+n:"");try{return t.createPolicy(o,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},g2=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function i3(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:C_();const t=ae=>i3(ae);if(t.version="3.3.1",t.removed=[],!e||!e.document||e.document.nodeType!==Du.document||!e.Element)return t.isSupported=!1,t;let{document:r}=e;const n=r,i=n.currentScript,{DocumentFragment:o,HTMLTemplateElement:s,Node:a,Element:u,NodeFilter:l,NamedNodeMap:d=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:f,DOMParser:h,trustedTypes:g}=e,m=u.prototype,p=$u(m,"cloneNode"),k=$u(m,"remove"),x=$u(m,"nextSibling"),D=$u(m,"childNodes"),C=$u(m,"parentNode");if(typeof s=="function"){const ae=r.createElement("template");ae.content&&ae.content.ownerDocument&&(r=ae.content.ownerDocument)}let P,O="";const{implementation:H,createNodeIterator:ee,createDocumentFragment:ne,getElementsByTagName:X}=r,{importNode:ye}=n;let se=g2();t.isSupported=typeof t3=="function"&&typeof C=="function"&&H&&H.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:xe,ERB_EXPR:ze,TMPLIT_EXPR:Ge,DATA_ATTR:yr,ARIA_ATTR:Et,IS_SCRIPT_OR_DATA:kn,ATTR_WHITESPACE:xn,CUSTOM_ELEMENT:zr}=m2;let{IS_ALLOWED_URI:Ct}=m2,me=null;const yt=Se({},[...c2,...S0,...T0,...M0,...d2]);let Ze=null;const jt=Se({},[...f2,...F0,...h2,...Ac]);let Be=Object.seal(jm(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),sr=null,$n=null;const jn=Object.seal(jm(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Si=!0,ru=!0,A=!1,q=!0,S=!1,le=!0,G=!1,Q=!1,Ye=!1,xt=!1,Ur=!1,vr=!1,tn=!0,Bo=!1;const Kf="user-content-";let nu=!0,iu=!1,Ns={},ci=null;const Hf=Se({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let sb=null;const ab=Se({},["audio","video","img","source","image","track"]);let Gf=null;const ub=Se({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Hl="http://www.w3.org/1998/Math/MathML",Gl="http://www.w3.org/2000/svg",Ti="http://www.w3.org/1999/xhtml";let Os=Ti,Zf=!1,Yf=null;const O3=Se({},[Hl,Gl,Ti],E0);let Zl=Se({},["mi","mo","mn","ms","mtext"]),Yl=Se({},["annotation-xml"]);const R3=Se({},["title","style","font","a","script"]);let ou=null;const B3=["application/xhtml+xml","text/html"],L3="text/html";let zt=null,Rs=null;const _3=r.createElement("form"),lb=function(E){return E instanceof RegExp||E instanceof Function},Jf=function(){let E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Rs&&Rs===E)){if((!E||typeof E!="object")&&(E={}),E=fi(E),ou=B3.indexOf(E.PARSER_MEDIA_TYPE)===-1?L3:E.PARSER_MEDIA_TYPE,zt=ou==="application/xhtml+xml"?E0:Lc,me=Wn(E,"ALLOWED_TAGS")?Se({},E.ALLOWED_TAGS,zt):yt,Ze=Wn(E,"ALLOWED_ATTR")?Se({},E.ALLOWED_ATTR,zt):jt,Yf=Wn(E,"ALLOWED_NAMESPACES")?Se({},E.ALLOWED_NAMESPACES,E0):O3,Gf=Wn(E,"ADD_URI_SAFE_ATTR")?Se(fi(ub),E.ADD_URI_SAFE_ATTR,zt):ub,sb=Wn(E,"ADD_DATA_URI_TAGS")?Se(fi(ab),E.ADD_DATA_URI_TAGS,zt):ab,ci=Wn(E,"FORBID_CONTENTS")?Se({},E.FORBID_CONTENTS,zt):Hf,sr=Wn(E,"FORBID_TAGS")?Se({},E.FORBID_TAGS,zt):fi({}),$n=Wn(E,"FORBID_ATTR")?Se({},E.FORBID_ATTR,zt):fi({}),Ns=Wn(E,"USE_PROFILES")?E.USE_PROFILES:!1,Si=E.ALLOW_ARIA_ATTR!==!1,ru=E.ALLOW_DATA_ATTR!==!1,A=E.ALLOW_UNKNOWN_PROTOCOLS||!1,q=E.ALLOW_SELF_CLOSE_IN_ATTR!==!1,S=E.SAFE_FOR_TEMPLATES||!1,le=E.SAFE_FOR_XML!==!1,G=E.WHOLE_DOCUMENT||!1,xt=E.RETURN_DOM||!1,Ur=E.RETURN_DOM_FRAGMENT||!1,vr=E.RETURN_TRUSTED_TYPE||!1,Ye=E.FORCE_BODY||!1,tn=E.SANITIZE_DOM!==!1,Bo=E.SANITIZE_NAMED_PROPS||!1,nu=E.KEEP_CONTENT!==!1,iu=E.IN_PLACE||!1,Ct=E.ALLOWED_URI_REGEXP||r3,Os=E.NAMESPACE||Ti,Zl=E.MATHML_TEXT_INTEGRATION_POINTS||Zl,Yl=E.HTML_INTEGRATION_POINTS||Yl,Be=E.CUSTOM_ELEMENT_HANDLING||{},E.CUSTOM_ELEMENT_HANDLING&&lb(E.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Be.tagNameCheck=E.CUSTOM_ELEMENT_HANDLING.tagNameCheck),E.CUSTOM_ELEMENT_HANDLING&&lb(E.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Be.attributeNameCheck=E.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),E.CUSTOM_ELEMENT_HANDLING&&typeof E.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(Be.allowCustomizedBuiltInElements=E.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),S&&(ru=!1),Ur&&(xt=!0),Ns&&(me=Se({},d2),Ze=[],Ns.html===!0&&(Se(me,c2),Se(Ze,f2)),Ns.svg===!0&&(Se(me,S0),Se(Ze,F0),Se(Ze,Ac)),Ns.svgFilters===!0&&(Se(me,T0),Se(Ze,F0),Se(Ze,Ac)),Ns.mathMl===!0&&(Se(me,M0),Se(Ze,h2),Se(Ze,Ac))),E.ADD_TAGS&&(typeof E.ADD_TAGS=="function"?jn.tagCheck=E.ADD_TAGS:(me===yt&&(me=fi(me)),Se(me,E.ADD_TAGS,zt))),E.ADD_ATTR&&(typeof E.ADD_ATTR=="function"?jn.attributeCheck=E.ADD_ATTR:(Ze===jt&&(Ze=fi(Ze)),Se(Ze,E.ADD_ATTR,zt))),E.ADD_URI_SAFE_ATTR&&Se(Gf,E.ADD_URI_SAFE_ATTR,zt),E.FORBID_CONTENTS&&(ci===Hf&&(ci=fi(ci)),Se(ci,E.FORBID_CONTENTS,zt)),E.ADD_FORBID_CONTENTS&&(ci===Hf&&(ci=fi(ci)),Se(ci,E.ADD_FORBID_CONTENTS,zt)),nu&&(me["#text"]=!0),G&&Se(me,["html","head","body"]),me.table&&(Se(me,["tbody"]),delete sr.tbody),E.TRUSTED_TYPES_POLICY){if(typeof E.TRUSTED_TYPES_POLICY.createHTML!="function")throw xu('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof E.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw xu('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');P=E.TRUSTED_TYPES_POLICY,O=P.createHTML("")}else P===void 0&&(P=S_(g,i)),P!==null&&typeof O=="string"&&(O=P.createHTML(""));_r&&_r(E),Rs=E}},cb=Se({},[...S0,...T0,...b_]),db=Se({},[...M0,...y_]),j3=function(E){let L=C(E);(!L||!L.tagName)&&(L={namespaceURI:Os,tagName:"template"});const re=Lc(E.tagName),ct=Lc(L.tagName);return Yf[E.namespaceURI]?E.namespaceURI===Gl?L.namespaceURI===Ti?re==="svg":L.namespaceURI===Hl?re==="svg"&&(ct==="annotation-xml"||Zl[ct]):!!cb[re]:E.namespaceURI===Hl?L.namespaceURI===Ti?re==="math":L.namespaceURI===Gl?re==="math"&&Yl[ct]:!!db[re]:E.namespaceURI===Ti?L.namespaceURI===Gl&&!Yl[ct]||L.namespaceURI===Hl&&!Zl[ct]?!1:!db[re]&&(R3[re]||!cb[re]):!!(ou==="application/xhtml+xml"&&Yf[E.namespaceURI]):!1},di=function(E){wu(t.removed,{element:E});try{C(E).removeChild(E)}catch{k(E)}},Lo=function(E,L){try{wu(t.removed,{attribute:L.getAttributeNode(E),from:L})}catch{wu(t.removed,{attribute:null,from:L})}if(L.removeAttribute(E),E==="is")if(xt||Ur)try{di(L)}catch{}else try{L.setAttribute(E,"")}catch{}},fb=function(E){let L=null,re=null;if(Ye)E="<remove></remove>"+E;else{const St=C0(E,/^[\r\n\t ]+/);re=St&&St[0]}ou==="application/xhtml+xml"&&Os===Ti&&(E='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+E+"</body></html>");const ct=P?P.createHTML(E):E;if(Os===Ti)try{L=new h().parseFromString(ct,ou)}catch{}if(!L||!L.documentElement){L=H.createDocument(Os,"template",null);try{L.documentElement.innerHTML=Zf?O:ct}catch{}}const wr=L.body||L.documentElement;return E&&re&&wr.insertBefore(r.createTextNode(re),wr.childNodes[0]||null),Os===Ti?X.call(L,G?"html":"body")[0]:G?L.documentElement:wr},hb=function(E){return ee.call(E.ownerDocument||E,E,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},Xf=function(E){return E instanceof f&&(typeof E.nodeName!="string"||typeof E.textContent!="string"||typeof E.removeChild!="function"||!(E.attributes instanceof d)||typeof E.removeAttribute!="function"||typeof E.setAttribute!="function"||typeof E.namespaceURI!="string"||typeof E.insertBefore!="function"||typeof E.hasChildNodes!="function")},mb=function(E){return typeof a=="function"&&E instanceof a};function Mi(ae,E,L){Dc(ae,re=>{re.call(t,E,L,Rs)})}const gb=function(E){let L=null;if(Mi(se.beforeSanitizeElements,E,null),Xf(E))return di(E),!0;const re=zt(E.nodeName);if(Mi(se.uponSanitizeElement,E,{tagName:re,allowedTags:me}),le&&E.hasChildNodes()&&!mb(E.firstElementChild)&&Mr(/<[/\w!]/g,E.innerHTML)&&Mr(/<[/\w!]/g,E.textContent)||E.nodeType===Du.progressingInstruction||le&&E.nodeType===Du.comment&&Mr(/<[/\w]/g,E.data))return di(E),!0;if(!(jn.tagCheck instanceof Function&&jn.tagCheck(re))&&(!me[re]||sr[re])){if(!sr[re]&&bb(re)&&(Be.tagNameCheck instanceof RegExp&&Mr(Be.tagNameCheck,re)||Be.tagNameCheck instanceof Function&&Be.tagNameCheck(re)))return!1;if(nu&&!ci[re]){const ct=C(E)||E.parentNode,wr=D(E)||E.childNodes;if(wr&&ct){const St=wr.length;for(let qr=St-1;qr>=0;--qr){const Fi=p(wr[qr],!0);Fi.__removalCount=(E.__removalCount||0)+1,ct.insertBefore(Fi,x(E))}}}return di(E),!0}return E instanceof u&&!j3(E)||(re==="noscript"||re==="noembed"||re==="noframes")&&Mr(/<\/no(script|embed|frames)/i,E.innerHTML)?(di(E),!0):(S&&E.nodeType===Du.text&&(L=E.textContent,Dc([xe,ze,Ge],ct=>{L=ku(L,ct," ")}),E.textContent!==L&&(wu(t.removed,{element:E.cloneNode()}),E.textContent=L)),Mi(se.afterSanitizeElements,E,null),!1)},pb=function(E,L,re){if(tn&&(L==="id"||L==="name")&&(re in r||re in _3))return!1;if(!(ru&&!$n[L]&&Mr(yr,L))){if(!(Si&&Mr(Et,L))){if(!(jn.attributeCheck instanceof Function&&jn.attributeCheck(L,E))){if(!Ze[L]||$n[L]){if(!(bb(E)&&(Be.tagNameCheck instanceof RegExp&&Mr(Be.tagNameCheck,E)||Be.tagNameCheck instanceof Function&&Be.tagNameCheck(E))&&(Be.attributeNameCheck instanceof RegExp&&Mr(Be.attributeNameCheck,L)||Be.attributeNameCheck instanceof Function&&Be.attributeNameCheck(L,E))||L==="is"&&Be.allowCustomizedBuiltInElements&&(Be.tagNameCheck instanceof RegExp&&Mr(Be.tagNameCheck,re)||Be.tagNameCheck instanceof Function&&Be.tagNameCheck(re))))return!1}else if(!Gf[L]){if(!Mr(Ct,ku(re,xn,""))){if(!((L==="src"||L==="xlink:href"||L==="href")&&E!=="script"&&h_(re,"data:")===0&&sb[E])){if(!(A&&!Mr(kn,ku(re,xn,"")))){if(re)return!1}}}}}}}return!0},bb=function(E){return E!=="annotation-xml"&&C0(E,zr)},yb=function(E){Mi(se.beforeSanitizeAttributes,E,null);const{attributes:L}=E;if(!L||Xf(E))return;const re={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ze,forceKeepAttr:void 0};let ct=L.length;for(;ct--;){const wr=L[ct],{name:St,namespaceURI:qr,value:Fi}=wr,Bs=zt(St),Qf=Fi;let ar=St==="value"?Qf:m_(Qf);if(re.attrName=Bs,re.attrValue=ar,re.keepAttr=!0,re.forceKeepAttr=void 0,Mi(se.uponSanitizeAttribute,E,re),ar=re.attrValue,Bo&&(Bs==="id"||Bs==="name")&&(Lo(St,E),ar=Kf+ar),le&&Mr(/((--!?|])>)|<\/(style|title|textarea)/i,ar)){Lo(St,E);continue}if(Bs==="attributename"&&C0(ar,"href")){Lo(St,E);continue}if(re.forceKeepAttr)continue;if(!re.keepAttr){Lo(St,E);continue}if(!q&&Mr(/\/>/i,ar)){Lo(St,E);continue}S&&Dc([xe,ze,Ge],wb=>{ar=ku(ar,wb," ")});const vb=zt(E.nodeName);if(!pb(vb,Bs,ar)){Lo(St,E);continue}if(P&&typeof g=="object"&&typeof g.getAttributeType=="function"&&!qr)switch(g.getAttributeType(vb,Bs)){case"TrustedHTML":{ar=P.createHTML(ar);break}case"TrustedScriptURL":{ar=P.createScriptURL(ar);break}}if(ar!==Qf)try{qr?E.setAttributeNS(qr,St,ar):E.setAttribute(St,ar),Xf(E)?di(E):l2(t.removed)}catch{Lo(St,E)}}Mi(se.afterSanitizeAttributes,E,null)},z3=function ae(E){let L=null;const re=hb(E);for(Mi(se.beforeSanitizeShadowDOM,E,null);L=re.nextNode();)Mi(se.uponSanitizeShadowNode,L,null),gb(L),yb(L),L.content instanceof o&&ae(L.content);Mi(se.afterSanitizeShadowDOM,E,null)};return t.sanitize=function(ae){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},L=null,re=null,ct=null,wr=null;if(Zf=!ae,Zf&&(ae="<!-->"),typeof ae!="string"&&!mb(ae))if(typeof ae.toString=="function"){if(ae=ae.toString(),typeof ae!="string")throw xu("dirty is not a string, aborting")}else throw xu("toString is not a function");if(!t.isSupported)return ae;if(Q||Jf(E),t.removed=[],typeof ae=="string"&&(iu=!1),iu){if(ae.nodeName){const Fi=zt(ae.nodeName);if(!me[Fi]||sr[Fi])throw xu("root node is forbidden and cannot be sanitized in-place")}}else if(ae instanceof a)L=fb("<!---->"),re=L.ownerDocument.importNode(ae,!0),re.nodeType===Du.element&&re.nodeName==="BODY"||re.nodeName==="HTML"?L=re:L.appendChild(re);else{if(!xt&&!S&&!G&&ae.indexOf("<")===-1)return P&&vr?P.createHTML(ae):ae;if(L=fb(ae),!L)return xt?null:vr?O:""}L&&Ye&&di(L.firstChild);const St=hb(iu?ae:L);for(;ct=St.nextNode();)gb(ct),yb(ct),ct.content instanceof o&&z3(ct.content);if(iu)return ae;if(xt){if(Ur)for(wr=ne.call(L.ownerDocument);L.firstChild;)wr.appendChild(L.firstChild);else wr=L;return(Ze.shadowroot||Ze.shadowrootmode)&&(wr=ye.call(n,wr,!0)),wr}let qr=G?L.outerHTML:L.innerHTML;return G&&me["!doctype"]&&L.ownerDocument&&L.ownerDocument.doctype&&L.ownerDocument.doctype.name&&Mr(n3,L.ownerDocument.doctype.name)&&(qr="<!DOCTYPE "+L.ownerDocument.doctype.name+`>
`+qr),S&&Dc([xe,ze,Ge],Fi=>{qr=ku(qr,Fi," ")}),P&&vr?P.createHTML(qr):qr},t.setConfig=function(){let ae=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Jf(ae),Q=!0},t.clearConfig=function(){Rs=null,Q=!1},t.isValidAttribute=function(ae,E,L){Rs||Jf({});const re=zt(ae),ct=zt(E);return pb(re,ct,L)},t.addHook=function(ae,E){typeof E=="function"&&wu(se[ae],E)},t.removeHook=function(ae,E){if(E!==void 0){const L=d_(se[ae],E);return L===-1?void 0:f_(se[ae],L,1)[0]}return l2(se[ae])},t.removeHooks=function(ae){se[ae]=[]},t.removeAllHooks=function(){se=g2()},t}var jf=i3();const vz=Object.freeze(Object.defineProperty({__proto__:null,default:jf},Symbol.toStringTag,{value:"Module"}));function Vp(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ps=Vp();function o3(e){Ps=e}var Qo={exec:()=>null};function Le(e,t=""){let r=typeof e=="string"?e:e.source,n={replace:(i,o)=>{let s=typeof o=="string"?o:o.source;return s=s.replace(Or.caret,"$1"),r=r.replace(i,s),n},getRegex:()=>new RegExp(r,t)};return n}var T_=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Or={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}>`)},M_=/^(?:[ \t]*(?:\n|$))+/,F_=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,P_=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Vl=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,I_=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Kp=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,s3=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,a3=Le(s3).replace(/bull/g,Kp).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),N_=Le(s3).replace(/bull/g,Kp).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Hp=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,O_=/^[^\n]+/,Gp=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,R_=Le(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Gp).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),B_=Le(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Kp).getRegex(),zf="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Zp=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,L_=Le("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Zp).replace("tag",zf).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),u3=Le(Hp).replace("hr",Vl).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",zf).getRegex(),__=Le(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",u3).getRegex(),Yp={blockquote:__,code:F_,def:R_,fences:P_,heading:I_,hr:Vl,html:L_,lheading:a3,list:B_,newline:M_,paragraph:u3,table:Qo,text:O_},p2=Le("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Vl).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",zf).getRegex(),j_={...Yp,lheading:N_,table:p2,paragraph:Le(Hp).replace("hr",Vl).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",p2).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",zf).getRegex()},z_={...Yp,html:Le(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Zp).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Qo,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Le(Hp).replace("hr",Vl).replace("heading",` *#{1,6} *[^
]`).replace("lheading",a3).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},U_=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,q_=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,l3=/^( {2,}|\\)\n(?!\s*$)/,W_=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Uf=/[\p{P}\p{S}]/u,Jp=/[\s\p{P}\p{S}]/u,c3=/[^\s\p{P}\p{S}]/u,V_=Le(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Jp).getRegex(),d3=/(?!~)[\p{P}\p{S}]/u,K_=/(?!~)[\s\p{P}\p{S}]/u,H_=/(?:[^\s\p{P}\p{S}]|~)/u,f3=/(?![*_])[\p{P}\p{S}]/u,G_=/(?![*_])[\s\p{P}\p{S}]/u,Z_=/(?:[^\s\p{P}\p{S}]|[*_])/u,Y_=Le(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",T_?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),h3=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,J_=Le(h3,"u").replace(/punct/g,Uf).getRegex(),X_=Le(h3,"u").replace(/punct/g,d3).getRegex(),m3="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Q_=Le(m3,"gu").replace(/notPunctSpace/g,c3).replace(/punctSpace/g,Jp).replace(/punct/g,Uf).getRegex(),ej=Le(m3,"gu").replace(/notPunctSpace/g,H_).replace(/punctSpace/g,K_).replace(/punct/g,d3).getRegex(),tj=Le("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,c3).replace(/punctSpace/g,Jp).replace(/punct/g,Uf).getRegex(),rj=Le(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,f3).getRegex(),nj="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",ij=Le(nj,"gu").replace(/notPunctSpace/g,Z_).replace(/punctSpace/g,G_).replace(/punct/g,f3).getRegex(),oj=Le(/\\(punct)/,"gu").replace(/punct/g,Uf).getRegex(),sj=Le(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),aj=Le(Zp).replace("(?:-->|$)","-->").getRegex(),uj=Le("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",aj).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Sd=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,lj=Le(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Sd).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),g3=Le(/^!?\[(label)\]\[(ref)\]/).replace("label",Sd).replace("ref",Gp).getRegex(),p3=Le(/^!?\[(ref)\](?:\[\])?/).replace("ref",Gp).getRegex(),cj=Le("reflink|nolink(?!\\()","g").replace("reflink",g3).replace("nolink",p3).getRegex(),b2=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Xp={_backpedal:Qo,anyPunctuation:oj,autolink:sj,blockSkip:Y_,br:l3,code:q_,del:Qo,delLDelim:Qo,delRDelim:Qo,emStrongLDelim:J_,emStrongRDelimAst:Q_,emStrongRDelimUnd:tj,escape:U_,link:lj,nolink:p3,punctuation:V_,reflink:g3,reflinkSearch:cj,tag:uj,text:W_,url:Qo},dj={...Xp,link:Le(/^!?\[(label)\]\((.*?)\)/).replace("label",Sd).getRegex(),reflink:Le(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Sd).getRegex()},qm={...Xp,emStrongRDelimAst:ej,emStrongLDelim:X_,delLDelim:rj,delRDelim:ij,url:Le(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",b2).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Le(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",b2).getRegex()},fj={...qm,br:Le(l3).replace("{2,}","*").getRegex(),text:Le(qm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ec={normal:Yp,gfm:j_,pedantic:z_},Au={normal:Xp,gfm:qm,breaks:fj,pedantic:dj},hj={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},y2=e=>hj[e];function hi(e,t){if(t){if(Or.escapeTest.test(e))return e.replace(Or.escapeReplace,y2)}else if(Or.escapeTestNoEncode.test(e))return e.replace(Or.escapeReplaceNoEncode,y2);return e}function v2(e){try{e=encodeURI(e).replace(Or.percentDecode,"%")}catch{return null}return e}function w2(e,t){let r=e.replace(Or.findPipe,(o,s,a)=>{let u=!1,l=s;for(;--l>=0&&a[l]==="\\";)u=!u;return u?"|":" |"}),n=r.split(Or.splitPipe),i=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(Or.slashPipe,"|");return n}function Eu(e,t,r){let n=e.length;if(n===0)return"";let i=0;for(;i<n&&e.charAt(n-i-1)===t;)i++;return e.slice(0,n-i)}function mj(e,t){if(e.indexOf(t[1])===-1)return-1;let r=0;for(let n=0;n<e.length;n++)if(e[n]==="\\")n++;else if(e[n]===t[0])r++;else if(e[n]===t[1]&&(r--,r<0))return n;return r>0?-2:-1}function gj(e,t=0){let r=t,n="";for(let i of e)if(i==="	"){let o=4-r%4;n+=" ".repeat(o),r+=o}else n+=i,r++;return n}function k2(e,t,r,n,i){let o=t.href,s=t.title||null,a=e[1].replace(i.other.outputLinkReplace,"$1");n.state.inLink=!0;let u={type:e[0].charAt(0)==="!"?"image":"link",raw:r,href:o,title:s,text:a,tokens:n.inlineTokens(a)};return n.state.inLink=!1,u}function pj(e,t,r){let n=e.match(r.other.indentCodeCompensation);if(n===null)return t;let i=n[1];return t.split(`
`).map(o=>{let s=o.match(r.other.beginningSpace);if(s===null)return o;let[a]=s;return a.length>=i.length?o.slice(i.length):o}).join(`
`)}var Td=class{options;rules;lexer;constructor(e){this.options=e||Ps}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let r=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Eu(r,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let r=t[0],n=pj(r,t[3]||"",this.rules);return{type:"code",raw:r,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let r=t[2].trim();if(this.rules.other.endingHash.test(r)){let n=Eu(r,"#");(this.options.pedantic||!n||this.rules.other.endingSpaceChar.test(n))&&(r=n.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Eu(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let r=Eu(t[0],`
`).split(`
`),n="",i="",o=[];for(;r.length>0;){let s=!1,a=[],u;for(u=0;u<r.length;u++)if(this.rules.other.blockquoteStart.test(r[u]))a.push(r[u]),s=!0;else if(!s)a.push(r[u]);else break;r=r.slice(u);let l=a.join(`
`),d=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");n=n?`${n}
${l}`:l,i=i?`${i}
${d}`:d;let f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,o,!0),this.lexer.state.top=f,r.length===0)break;let h=o.at(-1);if(h?.type==="code")break;if(h?.type==="blockquote"){let g=h,m=g.raw+`
`+r.join(`
`),p=this.blockquote(m);o[o.length-1]=p,n=n.substring(0,n.length-g.raw.length)+p.raw,i=i.substring(0,i.length-g.text.length)+p.text;break}else if(h?.type==="list"){let g=h,m=g.raw+`
`+r.join(`
`),p=this.list(m);o[o.length-1]=p,n=n.substring(0,n.length-h.raw.length)+p.raw,i=i.substring(0,i.length-g.raw.length)+p.raw,r=m.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:n,tokens:o,text:i}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r=t[1].trim(),n=r.length>1,i={type:"list",raw:"",ordered:n,start:n?+r.slice(0,-1):"",loose:!1,items:[]};r=n?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=n?r:"[*+-]");let o=this.rules.other.listItemRegex(r),s=!1;for(;e;){let u=!1,l="",d="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;l=t[0],e=e.substring(l.length);let f=gj(t[2].split(`
`,1)[0],t[1].length),h=e.split(`
`,1)[0],g=!f.trim(),m=0;if(this.options.pedantic?(m=2,d=f.trimStart()):g?m=t[1].length+1:(m=f.search(this.rules.other.nonSpaceChar),m=m>4?1:m,d=f.slice(m),m+=t[1].length),g&&this.rules.other.blankLine.test(h)&&(l+=h+`
`,e=e.substring(h.length+1),u=!0),!u){let p=this.rules.other.nextBulletRegex(m),k=this.rules.other.hrRegex(m),x=this.rules.other.fencesBeginRegex(m),D=this.rules.other.headingBeginRegex(m),C=this.rules.other.htmlBeginRegex(m),P=this.rules.other.blockquoteBeginRegex(m);for(;e;){let O=e.split(`
`,1)[0],H;if(h=O,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),H=h):H=h.replace(this.rules.other.tabCharGlobal,"    "),x.test(h)||D.test(h)||C.test(h)||P.test(h)||p.test(h)||k.test(h))break;if(H.search(this.rules.other.nonSpaceChar)>=m||!h.trim())d+=`
`+H.slice(m);else{if(g||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||x.test(f)||D.test(f)||k.test(f))break;d+=`
`+h}g=!h.trim(),l+=O+`
`,e=e.substring(O.length+1),f=H.slice(m)}}i.loose||(s?i.loose=!0:this.rules.other.doubleBlankLine.test(l)&&(s=!0)),i.items.push({type:"list_item",raw:l,task:!!this.options.gfm&&this.rules.other.listIsTask.test(d),loose:!1,text:d,tokens:[]}),i.raw+=l}let a=i.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let u of i.items){if(this.lexer.state.top=!1,u.tokens=this.lexer.blockTokens(u.text,[]),u.task){if(u.text=u.text.replace(this.rules.other.listReplaceTask,""),u.tokens[0]?.type==="text"||u.tokens[0]?.type==="paragraph"){u.tokens[0].raw=u.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),u.tokens[0].text=u.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let d=this.lexer.inlineQueue.length-1;d>=0;d--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[d].src)){this.lexer.inlineQueue[d].src=this.lexer.inlineQueue[d].src.replace(this.rules.other.listReplaceTask,"");break}}let l=this.rules.other.listTaskCheckbox.exec(u.raw);if(l){let d={type:"checkbox",raw:l[0]+" ",checked:l[0]!=="[ ]"};u.checked=d.checked,i.loose?u.tokens[0]&&["paragraph","text"].includes(u.tokens[0].type)&&"tokens"in u.tokens[0]&&u.tokens[0].tokens?(u.tokens[0].raw=d.raw+u.tokens[0].raw,u.tokens[0].text=d.raw+u.tokens[0].text,u.tokens[0].tokens.unshift(d)):u.tokens.unshift({type:"paragraph",raw:d.raw,text:d.raw,tokens:[d]}):u.tokens.unshift(d)}}if(!i.loose){let l=u.tokens.filter(f=>f.type==="space"),d=l.length>0&&l.some(f=>this.rules.other.anyLine.test(f.raw));i.loose=d}}if(i.loose)for(let u of i.items){u.loose=!0;for(let l of u.tokens)l.type==="text"&&(l.type="paragraph")}return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let r=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:r,raw:t[0],href:n,title:i}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let r=w2(t[1]),n=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(r.length===n.length){for(let s of n)this.rules.other.tableAlignRight.test(s)?o.align.push("right"):this.rules.other.tableAlignCenter.test(s)?o.align.push("center"):this.rules.other.tableAlignLeft.test(s)?o.align.push("left"):o.align.push(null);for(let s=0;s<r.length;s++)o.header.push({text:r[s],tokens:this.lexer.inline(r[s]),header:!0,align:o.align[s]});for(let s of i)o.rows.push(w2(s,o.header.length).map((a,u)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:o.align[u]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let r=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:r,tokens:this.lexer.inline(r)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let r=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let o=Eu(r.slice(0,-1),"\\");if((r.length-o.length)%2===0)return}else{let o=mj(t[2],"()");if(o===-2)return;if(o>-1){let s=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,s).trim(),t[3]=""}}let n=t[2],i="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(n);o&&(n=o[1],i=o[3])}else i=t[3]?t[3].slice(1,-1):"";return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?n=n.slice(1):n=n.slice(1,-1)),k2(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let n=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=t[n.toLowerCase()];if(!i){let o=r[0].charAt(0);return{type:"text",raw:o,text:o}}return k2(r,i,r[0],this.lexer,this.rules)}}emStrong(e,t,r=""){let n=this.rules.inline.emStrongLDelim.exec(e);if(!(!n||n[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(n[1]||n[2])||!r||this.rules.inline.punctuation.exec(r))){let i=[...n[0]].length-1,o,s,a=i,u=0,l=n[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(l.lastIndex=0,t=t.slice(-1*e.length+i);(n=l.exec(t))!=null;){if(o=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!o)continue;if(s=[...o].length,n[3]||n[4]){a+=s;continue}else if((n[5]||n[6])&&i%3&&!((i+s)%3)){u+=s;continue}if(a-=s,a>0)continue;s=Math.min(s,s+a+u);let d=[...n[0]][0].length,f=e.slice(0,i+n.index+d+s);if(Math.min(i,s)%2){let g=f.slice(1,-1);return{type:"em",raw:f,text:g,tokens:this.lexer.inlineTokens(g)}}let h=f.slice(2,-2);return{type:"strong",raw:f,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let r=t[2].replace(this.rules.other.newLineCharGlobal," "),n=this.rules.other.nonSpaceChar.test(r),i=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return n&&i&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:t[0],text:r}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e,t,r=""){let n=this.rules.inline.delLDelim.exec(e);if(n&&(!n[1]||!r||this.rules.inline.punctuation.exec(r))){let i=[...n[0]].length-1,o,s,a=i,u=this.rules.inline.delRDelim;for(u.lastIndex=0,t=t.slice(-1*e.length+i);(n=u.exec(t))!=null;){if(o=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!o||(s=[...o].length,s!==i))continue;if(n[3]||n[4]){a+=s;continue}if(a-=s,a>0)continue;s=Math.min(s,s+a);let l=[...n[0]][0].length,d=e.slice(0,i+n.index+l+s),f=d.slice(i,-i);return{type:"del",raw:d,text:f,tokens:this.lexer.inlineTokens(f)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let r,n;return t[2]==="@"?(r=t[1],n="mailto:"+r):(r=t[1],n=r),{type:"link",raw:t[0],text:r,href:n,tokens:[{type:"text",raw:r,text:r}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let r,n;if(t[2]==="@")r=t[0],n="mailto:"+r;else{let i;do i=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(i!==t[0]);r=t[0],t[1]==="www."?n="http://"+t[0]:n=t[0]}return{type:"link",raw:t[0],text:r,href:n,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let r=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:r}}}},Kn=class Wm{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Ps,this.options.tokenizer=this.options.tokenizer||new Td,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let r={other:Or,block:Ec.normal,inline:Au.normal};this.options.pedantic?(r.block=Ec.pedantic,r.inline=Au.pedantic):this.options.gfm&&(r.block=Ec.gfm,this.options.breaks?r.inline=Au.breaks:r.inline=Au.gfm),this.tokenizer.rules=r}static get rules(){return{block:Ec,inline:Au}}static lex(t,r){return new Wm(r).lex(t)}static lexInline(t,r){return new Wm(r).inlineTokens(t)}lex(t){t=t.replace(Or.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let r=0;r<this.inlineQueue.length;r++){let n=this.inlineQueue[r];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,r=[],n=!1){for(this.options.pedantic&&(t=t.replace(Or.tabCharGlobal,"    ").replace(Or.spaceLine,""));t;){let i;if(this.options.extensions?.block?.some(s=>(i=s.call({lexer:this},t,r))?(t=t.substring(i.raw.length),r.push(i),!0):!1))continue;if(i=this.tokenizer.space(t)){t=t.substring(i.raw.length);let s=r.at(-1);i.raw.length===1&&s!==void 0?s.raw+=`
`:r.push(i);continue}if(i=this.tokenizer.code(t)){t=t.substring(i.raw.length);let s=r.at(-1);s?.type==="paragraph"||s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.text,this.inlineQueue.at(-1).src=s.text):r.push(i);continue}if(i=this.tokenizer.fences(t)){t=t.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.heading(t)){t=t.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.hr(t)){t=t.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.blockquote(t)){t=t.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.list(t)){t=t.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.html(t)){t=t.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.def(t)){t=t.substring(i.raw.length);let s=r.at(-1);s?.type==="paragraph"||s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.raw,this.inlineQueue.at(-1).src=s.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},r.push(i));continue}if(i=this.tokenizer.table(t)){t=t.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.lheading(t)){t=t.substring(i.raw.length),r.push(i);continue}let o=t;if(this.options.extensions?.startBlock){let s=1/0,a=t.slice(1),u;this.options.extensions.startBlock.forEach(l=>{u=l.call({lexer:this},a),typeof u=="number"&&u>=0&&(s=Math.min(s,u))}),s<1/0&&s>=0&&(o=t.substring(0,s+1))}if(this.state.top&&(i=this.tokenizer.paragraph(o))){let s=r.at(-1);n&&s?.type==="paragraph"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):r.push(i),n=o.length!==t.length,t=t.substring(i.raw.length);continue}if(i=this.tokenizer.text(t)){t=t.substring(i.raw.length);let s=r.at(-1);s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):r.push(i);continue}if(t){let s="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(s);break}else throw new Error(s)}}return this.state.top=!0,r}inline(t,r=[]){return this.inlineQueue.push({src:t,tokens:r}),r}inlineTokens(t,r=[]){let n=t,i=null;if(this.tokens.links){let u=Object.keys(this.tokens.links);if(u.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)u.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,i.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(i=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)o=i[2]?i[2].length:0,n=n.slice(0,i.index+o)+"["+"a".repeat(i[0].length-o-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let s=!1,a="";for(;t;){s||(a=""),s=!1;let u;if(this.options.extensions?.inline?.some(d=>(u=d.call({lexer:this},t,r))?(t=t.substring(u.raw.length),r.push(u),!0):!1))continue;if(u=this.tokenizer.escape(t)){t=t.substring(u.raw.length),r.push(u);continue}if(u=this.tokenizer.tag(t)){t=t.substring(u.raw.length),r.push(u);continue}if(u=this.tokenizer.link(t)){t=t.substring(u.raw.length),r.push(u);continue}if(u=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(u.raw.length);let d=r.at(-1);u.type==="text"&&d?.type==="text"?(d.raw+=u.raw,d.text+=u.text):r.push(u);continue}if(u=this.tokenizer.emStrong(t,n,a)){t=t.substring(u.raw.length),r.push(u);continue}if(u=this.tokenizer.codespan(t)){t=t.substring(u.raw.length),r.push(u);continue}if(u=this.tokenizer.br(t)){t=t.substring(u.raw.length),r.push(u);continue}if(u=this.tokenizer.del(t,n,a)){t=t.substring(u.raw.length),r.push(u);continue}if(u=this.tokenizer.autolink(t)){t=t.substring(u.raw.length),r.push(u);continue}if(!this.state.inLink&&(u=this.tokenizer.url(t))){t=t.substring(u.raw.length),r.push(u);continue}let l=t;if(this.options.extensions?.startInline){let d=1/0,f=t.slice(1),h;this.options.extensions.startInline.forEach(g=>{h=g.call({lexer:this},f),typeof h=="number"&&h>=0&&(d=Math.min(d,h))}),d<1/0&&d>=0&&(l=t.substring(0,d+1))}if(u=this.tokenizer.inlineText(l)){t=t.substring(u.raw.length),u.raw.slice(-1)!=="_"&&(a=u.raw.slice(-1)),s=!0;let d=r.at(-1);d?.type==="text"?(d.raw+=u.raw,d.text+=u.text):r.push(u);continue}if(t){let d="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return r}},Md=class{options;parser;constructor(e){this.options=e||Ps}space(e){return""}code({text:e,lang:t,escaped:r}){let n=(t||"").match(Or.notSpaceStart)?.[0],i=e.replace(Or.endingNewline,"")+`
`;return n?'<pre><code class="language-'+hi(n)+'">'+(r?i:hi(i,!0))+`</code></pre>
`:"<pre><code>"+(r?i:hi(i,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${hi(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:r}){let n=this.parser.parseInline(r),i=v2(e);if(i===null)return n;e=i;let o='<a href="'+e+'"';return t&&(o+=' title="'+hi(t)+'"'),o+=">"+n+"</a>",o}image({href:e,title:t,text:r,tokens:n}){n&&(r=this.parser.parseInline(n,this.parser.textRenderer));let i=v2(e);if(i===null)return hi(r);e=i;let o=`<img src="${e}" alt="${hi(r)}"`;return t&&(o+=` title="${hi(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:hi(e.text)}},Qp=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},Hn=class Vm{options;renderer;textRenderer;constructor(t){this.options=t||Ps,this.options.renderer=this.options.renderer||new Md,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Qp}static parse(t,r){return new Vm(r).parse(t)}static parseInline(t,r){return new Vm(r).parseInline(t)}parse(t){let r="";for(let n=0;n<t.length;n++){let i=t[n];if(this.options.extensions?.renderers?.[i.type]){let s=i,a=this.options.extensions.renderers[s.type].call({parser:this},s);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(s.type)){r+=a||"";continue}}let o=i;switch(o.type){case"space":{r+=this.renderer.space(o);break}case"hr":{r+=this.renderer.hr(o);break}case"heading":{r+=this.renderer.heading(o);break}case"code":{r+=this.renderer.code(o);break}case"table":{r+=this.renderer.table(o);break}case"blockquote":{r+=this.renderer.blockquote(o);break}case"list":{r+=this.renderer.list(o);break}case"checkbox":{r+=this.renderer.checkbox(o);break}case"html":{r+=this.renderer.html(o);break}case"def":{r+=this.renderer.def(o);break}case"paragraph":{r+=this.renderer.paragraph(o);break}case"text":{r+=this.renderer.text(o);break}default:{let s='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}parseInline(t,r=this.renderer){let n="";for(let i=0;i<t.length;i++){let o=t[i];if(this.options.extensions?.renderers?.[o.type]){let a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){n+=a||"";continue}}let s=o;switch(s.type){case"escape":{n+=r.text(s);break}case"html":{n+=r.html(s);break}case"link":{n+=r.link(s);break}case"image":{n+=r.image(s);break}case"checkbox":{n+=r.checkbox(s);break}case"strong":{n+=r.strong(s);break}case"em":{n+=r.em(s);break}case"codespan":{n+=r.codespan(s);break}case"br":{n+=r.br(s);break}case"del":{n+=r.del(s);break}case"text":{n+=r.text(s);break}default:{let a='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return n}},Bu=class{options;block;constructor(e){this.options=e||Ps}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?Kn.lex:Kn.lexInline}provideParser(){return this.block?Hn.parse:Hn.parseInline}},bj=class{defaults=Vp();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Hn;Renderer=Md;TextRenderer=Qp;Lexer=Kn;Tokenizer=Td;Hooks=Bu;constructor(...e){this.use(...e)}walkTokens(e,t){let r=[];for(let n of e)switch(r=r.concat(t.call(this,n)),n.type){case"table":{let i=n;for(let o of i.header)r=r.concat(this.walkTokens(o.tokens,t));for(let o of i.rows)for(let s of o)r=r.concat(this.walkTokens(s.tokens,t));break}case"list":{let i=n;r=r.concat(this.walkTokens(i.items,t));break}default:{let i=n;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(o=>{let s=i[o].flat(1/0);r=r.concat(this.walkTokens(s,t))}):i.tokens&&(r=r.concat(this.walkTokens(i.tokens,t)))}}return r}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{let n={...r};if(n.async=this.defaults.async||n.async||!1,r.extensions&&(r.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let o=t.renderers[i.name];o?t.renderers[i.name]=function(...s){let a=i.renderer.apply(this,s);return a===!1&&(a=o.apply(this,s)),a}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=t[i.level];o?o.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),n.extensions=t),r.renderer){let i=this.defaults.renderer||new Md(this.defaults);for(let o in r.renderer){if(!(o in i))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let s=o,a=r.renderer[s],u=i[s];i[s]=(...l)=>{let d=a.apply(i,l);return d===!1&&(d=u.apply(i,l)),d||""}}n.renderer=i}if(r.tokenizer){let i=this.defaults.tokenizer||new Td(this.defaults);for(let o in r.tokenizer){if(!(o in i))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let s=o,a=r.tokenizer[s],u=i[s];i[s]=(...l)=>{let d=a.apply(i,l);return d===!1&&(d=u.apply(i,l)),d}}n.tokenizer=i}if(r.hooks){let i=this.defaults.hooks||new Bu;for(let o in r.hooks){if(!(o in i))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let s=o,a=r.hooks[s],u=i[s];Bu.passThroughHooks.has(o)?i[s]=l=>{if(this.defaults.async&&Bu.passThroughHooksRespectAsync.has(o))return(async()=>{let f=await a.call(i,l);return u.call(i,f)})();let d=a.call(i,l);return u.call(i,d)}:i[s]=(...l)=>{if(this.defaults.async)return(async()=>{let f=await a.apply(i,l);return f===!1&&(f=await u.apply(i,l)),f})();let d=a.apply(i,l);return d===!1&&(d=u.apply(i,l)),d}}n.hooks=i}if(r.walkTokens){let i=this.defaults.walkTokens,o=r.walkTokens;n.walkTokens=function(s){let a=[];return a.push(o.call(this,s)),i&&(a=a.concat(i.call(this,s))),a}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Kn.lex(e,t??this.defaults)}parser(e,t){return Hn.parse(e,t??this.defaults)}parseMarkdown(e){return(t,r)=>{let n={...r},i={...this.defaults,...n},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&n.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let s=i.hooks?await i.hooks.preprocess(t):t,a=await(i.hooks?await i.hooks.provideLexer():e?Kn.lex:Kn.lexInline)(s,i),u=i.hooks?await i.hooks.processAllTokens(a):a;i.walkTokens&&await Promise.all(this.walkTokens(u,i.walkTokens));let l=await(i.hooks?await i.hooks.provideParser():e?Hn.parse:Hn.parseInline)(u,i);return i.hooks?await i.hooks.postprocess(l):l})().catch(o);try{i.hooks&&(t=i.hooks.preprocess(t));let s=(i.hooks?i.hooks.provideLexer():e?Kn.lex:Kn.lexInline)(t,i);i.hooks&&(s=i.hooks.processAllTokens(s)),i.walkTokens&&this.walkTokens(s,i.walkTokens);let a=(i.hooks?i.hooks.provideParser():e?Hn.parse:Hn.parseInline)(s,i);return i.hooks&&(a=i.hooks.postprocess(a)),a}catch(s){return o(s)}}}onError(e,t){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let n="<p>An error occurred:</p><pre>"+hi(r.message+"",!0)+"</pre>";return t?Promise.resolve(n):n}if(t)return Promise.reject(r);throw r}}},ps=new bj;function Ke(e,t){return ps.parse(e,t)}Ke.options=Ke.setOptions=function(e){return ps.setOptions(e),Ke.defaults=ps.defaults,o3(Ke.defaults),Ke};Ke.getDefaults=Vp;Ke.defaults=Ps;Ke.use=function(...e){return ps.use(...e),Ke.defaults=ps.defaults,o3(Ke.defaults),Ke};Ke.walkTokens=function(e,t){return ps.walkTokens(e,t)};Ke.parseInline=ps.parseInline;Ke.Parser=Hn;Ke.parser=Hn.parse;Ke.Renderer=Md;Ke.TextRenderer=Qp;Ke.Lexer=Kn;Ke.lexer=Kn.lex;Ke.Tokenizer=Td;Ke.Hooks=Bu;Ke.parse=Ke;Ke.options;Ke.setOptions;Ke.use;Ke.walkTokens;Ke.parseInline;Hn.parse;Kn.lex;const wi="structured-rendering-markdown-rendering-content-for-screenshot",yj=`
.${wi} > *:first-child {
    margin-top: 0;
}
.${wi} > *:last-child {
    margin-bottom: 0;
}
`,b3={accentColor:"dodgerblue",bodySize:"14px",h1Size:"32px",h2Size:"24px",h3Size:"18px",h4Size:"16px",h5Size:"14px",h6Size:"14px",bodyGap:"24px",smallTextSize:"10px",liSpacing:"4px",bodyFont:"sans-serif",codeFont:"monospace",codeSize:"1em",codeBackgroundColor:ue.colors["vira-grey-behind-fg-small-body"].background.value,contentSelector:`.${wi}`,tableBorderColor:ue.colors["vira-grey-foreground-decoration"].foreground.value,tableBorderWidth:"1px"};function vj(e){return lt(vs(b3,e),(t,r)=>T.isString(r)?Ae(r):r instanceof Wi?r:r.value)}const qf=wj();function wj(e){const t=vj(e);return z`
        ${Ae(b3.contentSelector)} {
            display: flex;
            flex-direction: column;
            gap: ${t.bodyGap};
            font-family: ${t.bodyFont};
            font-size: ${t.bodySize};
            align-items: flex-start;

            & * {
                font-family: inherit;
                font-size: inherit;
                ${zl}
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
    `}const x2=Ci()({tagName:"vir-markdown",styles:z`
        :host {
            display: flex;
            flex-direction: column;
        }
    `,state(){return{renderedElement:void 0,sanitizedHtml:HN({async updateCallback(e){const t=await Ke.parse(e);return jf.sanitize(t)}}),lastStyleString:""}},render({inputs:e,state:t,updateState:r,host:n}){t.sanitizedHtml.update(e.markdownString);const i=String(e.renderStyles||qf);return e3({maintainFirstStylesheet:!0,newStyles:i,oldStyles:t.lastStyleString,shadowRoot:n.shadowRoot})&&r({lastStyleString:i}),nO(t.sanitizedHtml,v`
                <${oe.assign({icon:Ta})}></${oe}>
            `,o=>v`
                    <div
                        class=${wi}
                        ${bd(s=>{s instanceof HTMLElement&&r({renderedElement:s})})}
                    >
                        ${TN(o)}
                    </div>
                `,o=>v`
                    <${Cv}>
                        ${Pa("Failed to parse markdown content.",o)}
                    </${Cv}>
                `)}}),kj=Ce({x1:-1,y1:-1,x2:-1,y2:-1}),eb=Ce({type:we("source"),pageNumbers:We([We(-1)]),fileName:We(""),fileBoundingBoxes:We([We(kj)]),quote:We("")});function Kl(e){return lg.isLengthAtLeast(Zc(e).filter(xj),1)}function xj(e){return!!(e&&(e.quote?.trim()||e.fileName||e.pageNumbers?.filter(T.isDefined).length))}const Fd=Ci()({tagName:"vir-source",hostClasses:{"vir-source-phone-size":({inputs:e})=>e.options.isPhoneSize},events:{viewOnPageClick:nr()},cssVars:{"vir-source-background-color":ue.colors[Dr].background.value,"vir-source-borer-radius":K["vira-form-radius"].value,"vir-source-header-color":ue.colors["vira-grey-foreground-header"].foreground.value,"vir-source-view-on-page-icon-color":K["vira-form-accent-primary-color"].value,"vir-source-view-on-page-hover-background-color":ue.colors["vira-grey-behind-fg-small-body"].background.value,"vir-source-view-on-page-active-background-color":ue.colors["vira-grey-behind-fg-body"].background.value,"vir-source-font-size":"16px","vir-source-phone-font-size":"14px"},styles:({hostClasses:e,cssVars:t})=>z`
        ${Zh} {
            background: ${t["vir-source-background-color"].value};
            border-radius: ${t["vir-source-borer-radius"].value};
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        p {
            ${zl}
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
                    ${sn};
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

        ${e["vir-source-phone-size"].selector} {
            padding: 4px;
            ${t["vir-source-phone-font-size"].value}

            gap: 4px;

            & ${oe} {
                width: 18px;
                height: 18px;
            }
        }
    `,render({inputs:e,dispatch:t,events:r}){const n=Kl(e.sources);return n?v`
            <${Zh}>
                <p class="header">
                    <${oe.assign({icon:e.options.sourceIcon,fitContainer:!0})}></${oe}>
                    <span>${e.options.pluralSourcesString}</span>
                </p>
                <div class="entries">
                    ${n.map(i=>{const o=!e.options.hideViewOnPageButtons&&i.fileName&&i.pageNumbers?.length?v`
                                      <button
                                          class="view-on-page-button"
                                          title=${i.fileName}
                                          ${Ee("click",()=>{t(new r.viewOnPageClick(i))})}
                                      >
                                          <${oe.assign({icon:e.options.viewOnPageIcon,fitContainer:!0})}></${oe}>
                                          ${e.options.createViewOnPageString(i.pageNumbers[0]??1)}
                                      </button>
                                  `:void 0,s=i.quote?.trim()||"",a=s?v`
                                  <p class="source-text">"${s}"</p>
                              `:void 0;return a||o?v`
                                <div class="entry">${a} ${o}</div>
                            `:fe})}
                </div>
            </${Zh}>
        `:fe}}),tb=Ce({type:we("icon"),iconKey:"",strokeColor:We(""),fillColor:We(""),strokeWidth:We(je("",-1))});function y3(e,{icons:t}){const r=t[e.iconKey];return r?JR(r,{"vira-icon-fill-color":e.fillColor||void 0,"vira-icon-stroke-color":e.strokeColor||void 0,"vira-icon-stroke-width":T.isString(e.strokeWidth)?e.strokeWidth:T.isNumber(e.strokeWidth)?fg({value:e.strokeWidth,suffix:"px"}):void 0}):void 0}function Is(e,t){return Ce({type:we(e),sectionTitle:We(""),sources:We([We(eb)]),...t})}const rb=Ce({type:we("empty")}),v3=Is("inlineCode",{code:""}),nb=Is("tag",{text:Sx(""),useBigTag:We(!1),color:We(je({custom:uN({backgroundColor:We(""),foregroundColor:We("")})},{variant:oi(ie)}))});var _e=(e=>(e.Faint="faint",e.Small="small",e.Bold="bold",e))(_e||{});const Wf=Is("text",{text:Sx(""),style:We(oi(_e)),icon:We(tb)}),$j=Ce({content:We(je(Wf,nb,rb)),icon:We(tb)}),w3=Is("list",{items:[$j]}),k3=Is("markdown",{markdown:""}),x3=Ce({type:we("processing")});var ib=(e=>(e.Left="left",e.Right="right",e))(ib||{}),Wt=(e=>(e.Horizontal="horizontal",e.Vertical="vertical",e))(Wt||{});const Cc=je(Wf,v3,k3,nb,w3,rb,x3),Dj=Is("table",{direction:oi(Wt),headers:[{key:"",text:We(Wf),hidden:We(!1)}],entries:[{data:Ll({keys:"",values:je(We(Cc),[We(Cc)])}),sources:We([We(eb)])}],footerRows:We([{alignment:We(oi(ib)),cells:je(We(Cc),[We(Cc)])}])}),Aj=Is("codeBlock",{syntax:We(""),code:""}),$3=[Aj,v3,rb,w3,k3,nb,x3,eb,Dj,Wf,tb];je(...$3);const b=wo($3,e=>({key:e.default.type,value:e.default.type}),{}),D3={icons:XR,sourceString:"Source",pluralSourcesString:"Sources"},ob={...D3,styles:qf},Ej={...D3,processingString:"Processing",currentlyExpanded:{},sourceIcon:v$,viewOnPageIcon:Op,processingIcon:Ta,expandSourcesOnPrint:!1,hideViewOnPageButtons:!1,isPhoneSize:!1,markdownStyles:qf,createViewOnPageString(e){return`View on page ${e}`},expandAllSections:!1,blockSectionExpansion:!1};function Cj(e,t){const r=vs(Ej,t);return Go(e,r,[])}function Sj(e){if(e==null)return;if(!T.isString(e))return String(e);const t=e.trim();if(!t)return;const r=t.split(`
`);return r.flatMap((n,i)=>v`
            ${n}${i<r.length-1?v`
                      <br />
                  `:""}
        `)}const Tj={icon(e,t){const r=y3(e,t);return r?v`
            <${oe.assign({icon:r})}></${oe}>
        `:fe},codeBlock(e){return v`
            <pre>${e.code}</pre>
        `},empty(){},inlineCode(e){return v`
            <code>${e.code}</code>
        `},list(e,t,r){const n=Vt(e.items,(i,o)=>{if(!i.icon&&!i.content)return;const s=i.content?Go(i.content,t,[...r,o,"content"]):void 0,a=i.icon?Go(i.icon,t,[...r,o,"icon"]):fe;return v`
                    <li class="list-item-with-icon">${a}${s}</li>
                `},T.isTruthy);if(n.length)return v`
            <ul>
                ${n}
            </ul>
        `},markdown(e,t){return v`
            <${x2.assign({markdownString:e.markdown,renderStyles:t.markdownStyles})}></${x2}>
        `},tag(e){const t=e.color&&"custom"in e.color&&(e.color.custom.backgroundColor||e.color.custom.foregroundColor)?z`
                      ${e.color.custom.backgroundColor?z`
                                ${Ou.cssVars["vira-tag-background-color"].name}: ${Ae(e.color.custom.backgroundColor)};
                            `:z``}
                      ${e.color.custom.foregroundColor?z`
                                ${Ou.cssVars["vira-tag-text-color"].name}: ${Ae(e.color.custom.foregroundColor)};
                            `:z``}
                  `:void 0,r=e.color&&"variant"in e.color?e.color.variant:void 0;return v`
            <${Ou.assign({text:e.text,color:t?ie.None:r,size:e.useBigTag?Ar.Medium:Ar.Small,emphasis:Sn.Subtle})}
                style=${Xt(t)}
            ></${Ou}>
        `},processing(e,t){return v`
            <${oe.assign({icon:t.processingIcon})}></${oe}>
            <span>${t.processingString}...</span>
        `},source(e,t){return v`
            <${Fd.assign({options:t,sources:e})}></${Fd}>
        `},table(e,t,r){const{headerRow:n,rows:i}=t_(Vt(e.headers,(a,u)=>{if(!a.hidden)return{key:a.key,content:a.text?Go(a.text,t,[...r,"headers",u]):a.key}},T.isTruthy),e.entries,(a,u)=>lt(a.data,(l,d)=>{const f=Zc(d).filter(T.isTruthy);return f.length?Array.from(SN(Vt(f,(g,m)=>Go(g,t,[...r,u,m]),T.isTruthy),v`
                                <br />
                            `)):void 0}),{orientation:e.direction===Wt.Horizontal?ls.Vertical:ls.Horizontal}),o=i.some(a=>!!a.data?.sources?.length),s=i[0]?.cells.length||0;return v`
            <table
                cellspacing="0"
                cellpadding="0"
                class=${Nn({vertical:e.direction===Wt.Vertical,horizontal:e.direction===Wt.Horizontal,"wide-table":e.direction===Wt.Horizontal&&n?n.length>5:e.direction===Wt.Vertical&&i[0]?i[0].cells.length>5:!1})}
            >
                ${n?v`
                          <thead>
                              <tr>
                                  ${n.map(a=>v`
                                          <th>${a.content}</th>
                                      `)}
                                  ${o?v`
                                            <th class="source-cell"></th>
                                        `:fe}
                              </tr>
                          </thead>
                      `:fe}
                <tbody>
                    ${i.map((a,u)=>{const l=[...r,u],d=Kl(a.data?.sources),f=a.cells.map((g,m)=>{const p=m===a.cells.length-1,k=e.direction===Wt.Vertical&&m===0?"th":"td",x=v`
                                <${k}>${g.content}</${k}>
                            `;return d?.length&&p?v`
                                    ${x}
                                    <td class="source-cell">
                                        ${E3("",t,l,d)}
                                    </td>
                                `:x}),h=d?.length?v`
                                  <tr class="source-row">
                                      <td colspan=${f.length}>
                                          ${C3(t,l,d)}
                                      </td>
                                  </tr>
                              `:fe;return v`
                            <tr>
                                ${f}
                                ${o&&!d?.length?v`
                                          <td class="source-cell"></td>
                                      `:fe}
                            </tr>
                            ${h}
                        `})}
                </tbody>
                ${e.footerRows?.length?v`
                          <tfoot>
                              ${e.footerRows.map((a,u)=>{const l=Zc(a.cells);if(!l.length)return fe;const d=a.alignment===ib.Right?s-l.length+1:0,f=l.map((h,g)=>{const m=g?0:d,p=m<1?void 0:m,k=h?Go(h,t,[...r,"footers",u,g]):fe;return v`
                                          <td
                                              colspan=${Xt(p)}
                                              class=${Nn({"right-aligned-footer-cell":!!p})}
                                          >
                                              ${k}
                                          </td>
                                      `});return v`
                                      <tr>${f}</tr>
                                  `})}
                          </tfoot>
                      `:fe}
            </table>
        `},text(e,t,r){const n=Sj(e.text),i=e.style?`text-style-${e.style}`:void 0;if(n)return v`
            ${Go(e.icon,t,[...r,"icon"])}
            <span
                class=${[i,"text-section-text-content"].join(" ")}
            >
                ${n}
            </span>
        `}};function Go(e,t,r){return Km(e,t,r,!1).filter(T.isTruthy)}const $2=dg(b,e=>[e,"section"].join("-")),Mj="structured-render-section";function Km(e,t,r,n){if(e){if(T.isArray(e))return e.flatMap((i,o)=>Km(i,t,[...r,o],n));if("type"in e){const i="sectionTitle"in e&&r.length>0&&e.sectionTitle||void 0,o=Tj[e.type](e,t,r),s="sources"in e&&e.sources||void 0,a=v`
            <div
                class=${Nn({"section-wrapper":!0,"top-section-wrapper":n,[$2[e.type]]:!0})}
                ${$m(Mj)}
                ${$m($2[e.type])}
            >
                ${Fj(o,t,r,s)}
            </div>
        `;return n?[v`
                    <${Jh.assign({expandOnPrint:!0,blockExpansion:t.blockSectionExpansion,hideHeader:!i,startExpanded:t.expandAllSections||r.at(-1)===0})}>
                        <h3 slot=${Jh.slotNames.header}>${i}</h3>
                        ${a}
                    </${Jh}>
                `]:[i?v`
                          <h3>${i}</h3>
                      `:void 0,a]}else{if("sections"in e)return[e.cardTitle?v`
                      <h2>${e.cardTitle}</h2>
                  `:void 0,...Km(e.sections,t,[...r,"sections"],!0)];throw It.tsType(e).equals(),new Error(`Unexpected structured render type: ${$(e)}`)}}else return[]}const A3=$f()("source-expansion");function E3(e,t,r,n){if(!Kl(n))return;const o=[...r,"source-icon"],s=Hm(o),a=!!t.currentlyExpanded[s],u=v`
        <div class="source-icon-wrapper">
            <button class="source-icon-button">
                <${oe.assign({icon:t.sourceIcon,fitContainer:!0})}
                    ${Ee("click",l=>{_l(l,HTMLElement).dispatchEvent(new A3({expanded:!a,key:Hm(o)}))})}
                ></${oe}>
            </button>
        </div>
    `;return v`
        <div class="source-content-wrapper">${e}${u}</div>
    `}function C3(e,t,r){const n=Kl(r);if(!n)return;const i=[...t,"source-icon"],o=Hm(i),s=!!e.currentlyExpanded[o];return v`
        <${mi.assign({expanded:s,expandOnPrint:e.expandSourcesOnPrint})}
            class="collapsible-source-wrapper ${Nn({"expanded-source":s})}"
        >
            <span slot=${mi.slotNames.header}></span>
            <${Fd.assign({options:e,sources:n})}></${Fd}>
        </${mi}>
    `}function Fj(e,t,r,n){return Kl(n)?v`
        ${E3(e,t,r,n)}
        ${C3(t,r,n)}
    `:e}function Hm(e){return["key",...e].join(";").replaceAll(" ","_").replaceAll(/[^\w;]/g,"")}const te=Ci()({tagName:"vir-structured-render",state(){return{currentlyExpanded:{},lastStyleString:""}},cssVars:{"vir-structured-render-h1-font-size":"24px","vir-structured-render-h2-font-size":"18px","vir-structured-render-h3-font-size":"16px","vir-structured-render-small-font-size":"12px"},hostClasses:{"vir-structured-render-phone-size":({inputs:e})=>!!e.options?.isPhoneSize,"vir-structured-render-tablet-size":({inputs:e})=>!!e.options?.isTabletSize},styles:({cssVars:e,hostClasses:t})=>z`
        :host {
            ${Gr(ue.colors[Dr])}
        }

        ${oe} {
            flex-shrink: 0;
        }

        :host,
        .${Ae(wi)}.${Ae(wi)}.${Ae(wi)} {
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

            & ${Ou} {
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

        .text-style-${Ae(_e.Faint)}.text-style-${Ae(_e.Faint)}.text-style-${Ae(_e.Faint)}.text-style-${Ae(_e.Faint)} {
            color: ${ue.colors["vira-grey-foreground-non-body"].foreground.value};
        }
        .text-style-${Ae(_e.Bold)}.text-style-${Ae(_e.Bold)}.text-style-${Ae(_e.Bold)}.text-style-${Ae(_e.Bold)} {
            font-weight: bold;
        }
        .text-style-${Ae(_e.Small)}.text-style-${Ae(_e.Small)}.text-style-${Ae(_e.Small)}.text-style-${Ae(_e.Small)} {
            font-size: ${e["vir-structured-render-small-font-size"].value};
        }

        ${oe} {
            display: inline-flex;
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
            & .source-icon-wrapper {
                margin-left: auto;
                width: 32px;
                justify-content: flex-end;
                align-items: center;
                display: flex;
                flex-shrink: 0;
                align-self: top;
            }

            & .source-icon-button {
                ${sn};
                cursor: pointer;
                color: ${ue.colors["vira-grey-foreground-header"].foreground.value};
                padding: 2px;
                border-radius: 4px;

                & ${oe} {
                    display: flex;
                }

                &:hover {
                    background-color: ${ue.colors["vira-grey-behind-fg-small-body"].background.value};
                    color: ${K["vira-form-accent-primary-color"].value};
                }

                &:active {
                    background-color: ${ue.colors["vira-grey-behind-fg-body"].background.value};
                    color: ${K["vira-form-accent-primary-color"].value};
                }
            }

            & ul {
                margin: 0;
                flex-grow: 1;
                padding-left: 1em;
                max-width: 100%;
                display: flex;
                flex-direction: column;
                gap: 2px;
            }

            &.top-section-wrapper.text-section > .source-content-wrapper,
            &.top-section-wrapper > .source-content-wrapper > ul {
                & .source-icon-wrapper {
                    margin-left: unset;
                }
            }
        }

        .icon-section {
            display: inline-flex;
            vertical-align: middle;
        }

        .text-section {
            display: inline-block;
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
    `,render({inputs:e,state:t,updateState:r,host:n}){const i=String(e.options?.markdownStyles||qf);e3({maintainFirstStylesheet:!0,newStyles:i,oldStyles:t.lastStyleString,shadowRoot:n.shadowRoot})&&r({lastStyleString:i});const o=Cj(e.data,{...e.options,currentlyExpanded:{...e.options?.currentlyExpanded,...t.currentlyExpanded}});return v`
            <div
                ${Ee(A3,s=>{r({currentlyExpanded:{...t.currentlyExpanded,[s.detail.key]:s.detail.expanded}})})}
                class=${wi}
            >
                ${o}
            </div>
        `}});async function Pj(){const e=await fo(()=>import("./index-CPdg94BI.js").then(r=>r.i),__vite__mapDeps([0,1]));return e.default||e}function Jn(e,t){const r=vs(ob,t);return S3(e,r).filter(T.isTruthy).join(`

`)}const Ij={[_e.Bold]:"**"};function Nj(e,t,r){const n=e.entries.length+1,i=t.map(o=>{const s=o.text?Jn(o.text,r):o.key,a=e.entries.map(u=>Jn(u.data[o.key],r));return[s,...a]});return[cg(n,()=>""),...i]}function Oj(e,t,r){const n=t.map(o=>o.text?Jn(o.text,r):o.key),i=e.entries.map(o=>t.map(s=>Jn(o.data[s.key],r)));return[n,...i]}const Rj={[Wt.Vertical]:Nj,[Wt.Horizontal]:Oj},Bj={icon(e,t){const r=y3(e,t);return r?Da(r.svgTemplate):""},codeBlock(e){return`\`\`\`${e.syntax||""}
${e.code}
\`\`\``},inlineCode(e){return`\`${e.code}\``},empty(){return""},list(e,t){return Vt(e.items,r=>{const n=Jn(r.content,t),i=Jn(r.icon,t);return n?i?`- ${i} ${n}`:`- ${n}`:""},T.isTruthy).join(`
`)},markdown(e){return e.markdown},tag(e){return e.text==null?"":String(e.text)},processing(){return""},source(e,t){const r=e.pageNumbers?.filter(T.isDefined),n=r?.length?`p. ${r.join(", ")}`:"",i=[e.fileName,n].filter(T.isTruthy).join(", ");return i?`<small>${t.sourceString}: ${i}</small>`:""},table(e,t){const r=e.headers.filter(u=>!u.hidden),n=Rj[e.direction](e,r,t),i=n[0].length||0,o=Lj(n,i),[s,...a]=n;return[D2(s,o),_j(o),...a.map(u=>D2(u,o))].join(`
`)},text(e,t){if(e.text==null)return"";const r=e.style&&Ij[e.style]||"",n=Jn(e.icon,t),i=yk({value:String(e.text),wrapper:r});return n?`${n} ${i}`:i}};function Lj(e,t){return cg(t,r=>e.reduce((n,i,o)=>Math.max(n,Qt.isDefined(i[r],`No cell at row index ${o}, column index ${r}`).length),3))}function D2(e,t){return`| ${e.map((n,i)=>n.padEnd(t[i]??3)).join(" | ")} |`}function _j(e){return`| ${e.map(r=>"-".repeat(r)).join(" | ")} |`}function S3(e,t){if(e){if(T.isArray(e))return e.flatMap(r=>Jn(r,t));if("type"in e){const r="sectionTitle"in e?e.sectionTitle:void 0,n="sources"in e&&e.sources||[];return[r?`### ${r}`:void 0,Bj[e.type](e,t),...n.map(i=>Jn(i,t))]}else{if("sections"in e)return[e.cardTitle&&`## ${e.cardTitle}`,...S3(e.sections,t)].filter(T.isTruthy);throw It.tsType(e).equals(),new Error(`Unexpected structured render type: ${$(e)}`)}}else return[]}var Vf=(e=>(e.ArrayBuffer="arraybuffer",e.Blob="blob",e.BlobUri="bloburi",e.BlobUrl="bloburl",e.DataUriString="datauristring",e.DataUrlString="dataurlstring",e.DataUri="datauri",e.DataUrl="dataurl",e.DataUrlNewWindow="dataurlnewwindow",e.PdfObjectNewWindow="pdfobjectnewwindow",e.PdfJsNewWindow="pdfjsnewwindow",e.Download="download",e))(Vf||{});function T3(e){return{margin:[25,15],filename:e,image:{type:"jpeg",quality:.98},html2canvas:{scale:2,logging:!1,scrollX:0,scrollY:0,useCORS:!0},jsPDF:{unit:"mm",format:"a4",orientation:"portrait"},pagebreak:{mode:["css","legacy"]}}}async function M3(e,{fileName:t,outputType:r,options:n}){if(!bs(Lr.Web))throw new Error(`${F3.name} cannot run outside of a browser.`);const i=vs(ob,n),[o]=await Promise.all([Pj(),Uj()]),s=await Ke.parse(Jn(e,i)),a=Da(v`
        <div class=${wi}>${jf.sanitize(s)}</div>
    `),u=T3(t),l=await jj(a,String(i.styles),u),d=o().set(u).from(l);if(r.pdf)if(r.pdf==="download"){const f=await d.outputPdf("blob"),h=URL.createObjectURL(f),g=globalThis.document.createElement("a");g.href=h,g.download=t.endsWith(".pdf")?t:`${t}.pdf`,g.style.display="none",globalThis.document.body.append(g),g.click(),g.remove(),URL.revokeObjectURL(h);return}else return await d.outputPdf(r.pdf,{filename:t});else{if(r.image)return r.image==="download"?await d.toImg().save(t):await d.outputImg(r.image);throw It.tsType(r).equals(),new Error(`Invalid output type: ${$(r)}`)}}async function jj(e,t,r){const n=qj(r.margin),o=210-n[1]-n[3],s=globalThis.document.createElement("iframe");s.style.position="fixed",s.style.left="-10000px",s.style.top="0",s.style.width=`${o}mm`,s.style.height="0",s.style.border="none",s.setAttribute("aria-hidden","true"),s.srcdoc=["<!DOCTYPE html><html><head><style>",yj,t,'</style></head><body style="margin:0;padding:0;">',e,"</body></html>"].join(""),globalThis.document.body.append(s);try{await new Promise(l=>{s.addEventListener("load",()=>{l()},{once:!0})});const a=Qt.isDefined(s.contentDocument);await a.fonts.ready;const u=Qt.isDefined(a.body.firstElementChild);return s.style.height=`${a.body.scrollHeight}px`,await dl(3),await zj()(u,{...r.html2canvas})}finally{s.remove()}}let Pd;function zj(){if(!Pd)throw new Error("html2canvas has not been loaded yet. Call preloadHtml2Canvas() first.");return Pd}async function Uj(){Pd||(Pd=(await fo(async()=>{const{default:e}=await import("./html2canvas.esm-DXEQVQnt.js");return{default:e}},[])).default)}function qj(e){return e==null?[0,0,0,0]:typeof e=="number"?[e,e,e,e]:e.length===2?[e[0],e[1],e[0],e[1]]:[e[0],e[1],e[2],e[3]]}async function F3(e,{saveLocationPath:t,outputType:r,options:n}){if(bs(Lr.Web))throw new Error(`${F3.name} cannot run inside of a browser.`);const i=vs(ob,n),{chromium:o}=await fo(async()=>{const{chromium:D}=await import("playwright");return{chromium:D}},[]),{readFile:s,writeFile:a,mkdir:u}=await fo(async()=>{const{readFile:D,writeFile:C,mkdir:P}=await import("node:fs/promises");return{readFile:D,writeFile:C,mkdir:P}},[]),{createRequire:l}=await fo(async()=>{const{createRequire:D}=await Promise.resolve().then(()=>uz);return{createRequire:D}},void 0),{basename:d,dirname:f}=await fo(async()=>{const{basename:D,dirname:C}=await import("node:path");return{basename:D,dirname:C}},[]),h=l(import.meta.url),[g,m]=await Promise.all([s(h.resolve("html2pdf.js/dist/html2pdf.bundle.min.js"),"utf-8"),s(h.resolve("dompurify/dist/purify.min.js"),"utf-8")]),p=await Ke.parse(Jn(e,i)),k=Da(v`
        <style id="styles">
            ${i.styles}
        </style>
    `),x=await o.launch();try{const D=await x.newPage();await D.setContent(k,{waitUntil:"networkidle"}),await D.addScriptTag({content:g}),await D.addScriptTag({content:m});const C=T3(d(t));r.image&&(C.image={type:"png"});const O=(await D.evaluate(async({html2pdfOptions:H,outputType:ee,dirtyMarkdown:ne,wrapperClass:X,outputImageType:ye,outputPdfType:se})=>{const xe=jf.sanitize(ne),ze=html2pdf().set(H).from(`<div class="${X}">${xe}</div>`);if(ee.image)return await ze.outputImg(ye,{filename:H.filename});if(ee.pdf)return await ze.outputPdf(se,{filename:H.filename});throw new Error("Invalid output type selected.")},{html2pdfOptions:C,outputType:r,dirtyMarkdown:p,wrapperClass:wi,outputImageType:"datauristring",outputPdfType:"datauristring"})).split(",")[1];await u(f(t),{recursive:!0}),await a(t,Buffer.from(O,"base64"))}finally{await x.close()}return t}async function P3(e,{pdfOutputType:t,...r}){if(!bs(Lr.Web))throw new Error(`${P3.name} cannot run outside of a browser.`);return M3(e,{outputType:{pdf:t||Vf.Download},...r})}async function I3(e,t){if(!bs(Lr.Web))throw new Error(`${I3.name} cannot run outside of a browser.`);const r=await M3(e,{outputType:{pdf:Vf.Blob},...t}),n=URL.createObjectURL(r),i=navigator.userAgent.toLowerCase(),o=i.includes("firefox"),s=/iphone|ipad|ipod/.test(i)||i.includes("macintosh")&&navigator.maxTouchPoints>1;if(o||s){if(!globalThis.window.open(n))throw URL.revokeObjectURL(n),new Error("Failed to open print window. Check your popup blocker settings.");return}const a=globalThis.document.createElement("iframe");a.style.position="fixed",a.style.left="-10000px",a.style.top="0",a.style.width="1px",a.style.height="1px",a.style.border="none",a.style.opacity="0",a.src=n,globalThis.document.body.append(a),await new Promise(l=>{a.addEventListener("load",()=>{l()},{once:!0})});const u=a.contentWindow;if(!u){URL.revokeObjectURL(n),a.remove();return}return await dl(3),await _d({milliseconds:250}),await dl(3),new Promise(l=>{function d(){URL.revokeObjectURL(n),a.remove(),l()}let f=!1;function h(){f||(f=!0,globalThis.window.removeEventListener("focus",g),d())}function g(){h()}u.addEventListener("afterprint",()=>{h()},{once:!0}),globalThis.window.addEventListener("focus",g,{once:!0}),u.print()})}const bl=[{cardTitle:"Frontend Performance",sections:[{type:b.text,sectionTitle:"Overview",text:"Frontend performance metrics collected from the last 30 days of production monitoring.",sources:[{type:"source",fileName:"performance-report-2026-02.pdf",pageNumbers:[1,2],quote:"Metrics aggregated from real user monitoring (RUM) data across all production traffic."}]},{type:b.table,sectionTitle:"Core Web Vitals",direction:Wt.Horizontal,sources:[{type:"source",fileName:"lighthouse-audit.json",pageNumbers:[3],quote:"Core Web Vitals thresholds based on Chrome UX Report field data."},{type:"source",fileName:"web-vitals-spec.md",quote:"Targets align with Google recommended thresholds for good user experience."}],headers:[{key:"metric"},{key:"p50"},{key:"p95"},{key:"target"},{key:"status"}],entries:[{data:{metric:{type:b.text,text:"Largest Contentful Paint",style:_e.Bold},p50:{type:b.inlineCode,code:"1.2s"},p95:{type:b.inlineCode,code:"2.8s"},target:{type:b.text,text:"< 2.5s"},status:{type:b.tag,text:"Pass",color:{variant:ie.Positive}}}},{data:{metric:{type:b.text,text:"First Input Delay",style:_e.Bold},p50:{type:b.inlineCode,code:"12ms"},p95:{type:b.inlineCode,code:"85ms"},target:{type:b.text,text:"< 100ms"},status:{type:b.tag,text:"Pass",color:{variant:ie.Positive}}}},{data:{metric:{type:b.text,text:"Cumulative Layout Shift",style:_e.Bold},p50:{type:b.inlineCode,code:"0.18"},p95:{type:b.inlineCode,code:"0.32"},target:{type:b.text,text:"< 0.1"},status:{type:b.tag,text:"Fail",color:{variant:ie.Danger}}},sources:[{type:"source",fileName:"cls-regression-analysis.pdf",pageNumbers:[7],quote:"CLS spike correlated with hero image carousel added in v3.12.0."}]},{data:{metric:{type:b.text,text:"Time to First Byte",style:_e.Bold},p50:{type:b.inlineCode,code:"210ms"},p95:{type:b.inlineCode,code:"480ms"},target:{type:b.text,text:"< 600ms"},status:{type:b.tag,text:"Pass",color:{variant:ie.Positive}}}}]},{type:b.list,sectionTitle:"Recommendations",items:[{content:{type:b.text,text:"Fix layout shifts caused by dynamically loaded images."},icon:{type:b.icon,iconKey:pi.name,strokeColor:"red"}},{content:{type:b.text,text:"Add explicit width and height attributes to all image elements."}},{content:{type:b.text,text:"Consider lazy loading below-the-fold content."}}]}]},{cardTitle:"Backend API Health",sections:[{type:b.markdown,sectionTitle:"Status Summary",sources:[{type:"source",fileName:"uptime-monitor-export.csv",quote:"Uptime percentages calculated from 5-minute health check intervals."}],markdown:["All **12 services** are operational. Average uptime over the past 30 days: **99.97%**.","","| Service | Uptime |","|---------|--------|","| Auth | 99.99% |","| Users | 99.98% |","| Notifications | 99.91% |","| Billing | 100% |"].join(`
`)},{type:b.table,sectionTitle:"Endpoint Latency (ms)",direction:Wt.Vertical,headers:[{key:"endpoint"},{key:"getUsers"},{key:"createUser"},{key:"getReport"},{key:"sendNotification"}],entries:[{data:{endpoint:{type:b.text,text:"p50"},getUsers:{type:b.inlineCode,code:"45"},createUser:{type:b.inlineCode,code:"120"},getReport:{type:b.inlineCode,code:"890"},sendNotification:{type:b.inlineCode,code:"65"}}},{data:{endpoint:{type:b.text,text:"p99"},getUsers:{type:b.inlineCode,code:"180"},createUser:{type:b.inlineCode,code:"450"},getReport:{type:b.inlineCode,code:"3200"},sendNotification:{type:b.inlineCode,code:"210"}}}]},{type:b.codeBlock,sectionTitle:"Slow Query Sample",syntax:"sql",code:["SELECT r.id, r.title, r.created_at,","       u.name AS author_name,","       COUNT(c.id) AS comment_count","FROM reports r","JOIN users u ON u.id = r.author_id","LEFT JOIN comments c ON c.report_id = r.id","WHERE r.created_at > NOW() - INTERVAL '30 days'","GROUP BY r.id, r.title, r.created_at, u.name","ORDER BY r.created_at DESC","LIMIT 100;"].join(`
`)}]},{cardTitle:"Deployment Pipeline",sections:[{type:b.text,sectionTitle:"Current State",text:"The CI/CD pipeline is fully automated with staging and production environments.",icon:{type:b.icon,iconKey:En.name,strokeColor:"green"}},{type:b.table,sectionTitle:"Recent Deployments",direction:Wt.Horizontal,sources:[{type:"source",fileName:"ci-pipeline-logs.txt",pageNumbers:[12,15,18,22],quote:"Deployment records extracted from CI/CD pipeline execution logs."}],headers:[{key:"version"},{key:"environment"},{key:"date"},{key:"duration"},{key:"status"}],entries:[{data:{version:{type:b.inlineCode,code:"v3.14.2"},environment:{type:b.tag,text:"Production",color:{variant:ie.Positive}},date:{type:b.text,text:"2026-02-28"},duration:{type:b.text,text:"4m 22s"},status:{type:b.tag,text:"Success",color:{variant:ie.Positive}}}},{data:{version:{type:b.inlineCode,code:"v3.14.1"},environment:{type:b.tag,text:"Production",color:{variant:ie.Positive}},date:{type:b.text,text:"2026-02-25"},duration:{type:b.text,text:"3m 58s"},status:{type:b.tag,text:"Success",color:{variant:ie.Positive}}}},{data:{version:{type:b.inlineCode,code:"v3.14.0"},environment:{type:b.tag,text:"Staging",color:{variant:ie.Warning}},date:{type:b.text,text:"2026-02-24"},duration:{type:b.text,text:"5m 01s"},status:{type:b.tag,text:"Rolled Back",color:{variant:ie.Danger}}}},{data:{version:{type:b.inlineCode,code:"v3.13.9"},environment:{type:b.tag,text:"Production",color:{variant:ie.Positive}},date:{type:b.text,text:"2026-02-20"},duration:{type:b.text,text:"4m 10s"},status:{type:b.tag,text:"Success",color:{variant:ie.Positive}}}}]},{type:b.list,sectionTitle:"Pipeline Steps",items:[{content:{type:b.text,text:"Lint and type check."},icon:{type:b.icon,iconKey:En.name,strokeColor:"green"}},{content:{type:b.text,text:"Unit and integration tests."},icon:{type:b.icon,iconKey:En.name,strokeColor:"green"}},{content:{type:b.text,text:"Build production bundle."},icon:{type:b.icon,iconKey:En.name,strokeColor:"green"}},{content:{type:b.text,text:"Deploy to staging."},icon:{type:b.icon,iconKey:En.name,strokeColor:"green"}},{content:{type:b.text,text:"E2E smoke tests."},icon:{type:b.icon,iconKey:En.name,strokeColor:"green"}},{content:{type:b.text,text:"Promote to production."},icon:{type:b.icon,iconKey:En.name,strokeColor:"green"}}]},{type:b.codeBlock,sectionTitle:"Pipeline Config Snippet",syntax:"yaml",code:["stages:","  - name: lint","    command: npm run lint","  - name: test","    command: npm test","    parallel: true","  - name: build","    command: npm run build","  - name: deploy-staging","    command: deploy --env staging","  - name: e2e","    command: npm run test:e2e","  - name: deploy-production","    command: deploy --env production","    requires: [e2e]"].join(`
`)}]}],Wj=Bt({title:"Multi Card",parent:tu,descriptionParagraphs:["Multiple cards rendered together to demonstrate complex multi-card layouts."],defineExamples({defineExample:e}){e({title:"three cards",styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return v`
                    <${te.assign({data:bl})}></${te}>
                `}})}}),Vj=Bt({title:"Block Expansion",parent:tu,descriptionParagraphs:["Cards rendered with blockSectionExpansion enabled, which forces all sections expanded and disables toggling."],defineExamples({defineExample:e}){e({title:"all sections locked open",styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return v`
                    <${te.assign({data:bl,options:{blockSectionExpansion:!0}})}></${te}>
                `}})}}),Kj=Bt({title:"Dense Data",parent:tu,descriptionParagraphs:["A single card packed with many sections, large tables, lists, code blocks, and markdown to stress-test rendering."],defineExamples({defineExample:e}){e({title:"comprehensive product analysis",styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return v`
                    <${te.assign({data:[{cardTitle:"Comprehensive Product Analysis",sections:[{type:b.text,sectionTitle:"Executive Summary",text:"This analysis covers product adoption, feature usage, customer feedback, technical debt, and roadmap progress across all three product lines.",style:_e.Bold},{type:b.markdown,sectionTitle:"Adoption Trends",markdown:["### Monthly Active Users","","Growth has been **steady** across all tiers:","","- **Free tier**: 14,200 MAU (+8% MoM)","- **Pro tier**: 3,800 MAU (+12% MoM)","- **Enterprise tier**: 420 MAU (+3% MoM)","","### Retention","","Day-7 retention: **68%** | Day-30 retention: **41%** | Day-90 retention: **28%**","","> The largest drop-off occurs between day 7 and day 14, suggesting onboarding improvements could have significant impact."].join(`
`)},{type:b.table,sectionTitle:"Feature Usage Matrix",direction:Wt.Horizontal,headers:[{key:"feature"},{key:"freeTier"},{key:"proTier"},{key:"enterpriseTier"},{key:"satisfaction"},{key:"trend"}],entries:[{data:{feature:{type:b.text,text:"Dashboard",style:_e.Bold},freeTier:{type:b.text,text:"92%"},proTier:{type:b.text,text:"97%"},enterpriseTier:{type:b.text,text:"99%"},satisfaction:{type:b.tag,text:"4.5 / 5",color:{variant:ie.Positive}},trend:{type:b.tag,text:"Stable",color:{variant:ie.Positive}}}},{data:{feature:{type:b.text,text:"Export (PDF/Image)",style:_e.Bold},freeTier:{type:b.text,text:"34%"},proTier:{type:b.text,text:"78%"},enterpriseTier:{type:b.text,text:"91%"},satisfaction:{type:b.tag,text:"3.8 / 5",color:{variant:ie.Warning}},trend:{type:b.tag,text:"Growing",color:{variant:ie.Positive}}}},{data:{feature:{type:b.text,text:"API Access",style:_e.Bold},freeTier:{type:b.text,text:"5%"},proTier:{type:b.text,text:"42%"},enterpriseTier:{type:b.text,text:"88%"},satisfaction:{type:b.tag,text:"4.1 / 5",color:{variant:ie.Positive}},trend:{type:b.tag,text:"Growing",color:{variant:ie.Positive}}}},{data:{feature:{type:b.text,text:"Collaboration",style:_e.Bold},freeTier:{type:b.text,text:"18%"},proTier:{type:b.text,text:"61%"},enterpriseTier:{type:b.text,text:"95%"},satisfaction:{type:b.tag,text:"4.3 / 5",color:{variant:ie.Positive}},trend:{type:b.tag,text:"Stable",color:{variant:ie.Positive}}}},{data:{feature:{type:b.text,text:"Custom Themes",style:_e.Bold},freeTier:{type:b.text,text:"0%"},proTier:{type:b.text,text:"29%"},enterpriseTier:{type:b.text,text:"67%"},satisfaction:{type:b.tag,text:"3.2 / 5",color:{variant:ie.Warning}},trend:{type:b.tag,text:"Declining",color:{variant:ie.Danger}}}},{data:{feature:{type:b.text,text:"Webhooks",style:_e.Bold},freeTier:{type:b.text,text:"0%"},proTier:{type:b.text,text:"15%"},enterpriseTier:{type:b.text,text:"72%"},satisfaction:{type:b.tag,text:"4.0 / 5",color:{variant:ie.Positive}},trend:{type:b.tag,text:"Growing",color:{variant:ie.Positive}}}}]},{type:b.list,sectionTitle:"Customer Feedback Themes",items:[{content:{type:b.text,text:"Export quality needs improvement (mentioned 47 times)."},icon:{type:b.icon,iconKey:pi.name,strokeColor:"orange"}},{content:{type:b.text,text:"Dashboard customization is highly valued (mentioned 82 times)."},icon:{type:b.icon,iconKey:Ma.name,strokeColor:"gold"}},{content:{type:b.text,text:"API documentation could be more complete (mentioned 31 times)."},icon:{type:b.icon,iconKey:pi.name,strokeColor:"orange"}},{content:{type:b.text,text:"Real-time collaboration is a top-requested feature (mentioned 64 times)."},icon:{type:b.icon,iconKey:Ma.name,strokeColor:"gold"}},{content:{type:b.text,text:"Mobile experience needs significant work (mentioned 28 times)."},icon:{type:b.icon,iconKey:pi.name,strokeColor:"red"}}]},{type:b.codeBlock,sectionTitle:"Top API Usage Pattern",syntax:"typescript",code:["import {createClient} from '@product/sdk';","","const client = createClient({","    apiKey: process.env.PRODUCT_API_KEY,","    baseUrl: 'https://api.product.com/v2',","});","","const report = await client.reports.create({","    title: 'Weekly Summary',","    sections: [","        {type: 'chart', dataSource: 'revenue'},","        {type: 'table', dataSource: 'transactions'},","        {type: 'text', content: 'Generated automatically.'},","    ],","    format: 'pdf',","});","","await client.reports.export(report.id, {","    destination: 's3://reports-bucket/weekly/',","});"].join(`
`)},{type:b.table,sectionTitle:"Technical Debt Inventory",direction:Wt.Horizontal,headers:[{key:"item"},{key:"severity"},{key:"age"},{key:"effort"},{key:"impact"}],entries:[{data:{item:{type:b.text,text:"Legacy auth middleware."},severity:{type:b.tag,text:"High",color:{variant:ie.Danger}},age:{type:b.text,text:"18 months"},effort:{type:b.text,text:"3 sprints"},impact:{type:b.text,text:"Blocks SSO integration."}}},{data:{item:{type:b.text,text:"Untyped API responses."},severity:{type:b.tag,text:"Medium",color:{variant:ie.Warning}},age:{type:b.text,text:"12 months"},effort:{type:b.text,text:"2 sprints"},impact:{type:b.text,text:"Frequent runtime errors."}}},{data:{item:{type:b.text,text:"Duplicated validation logic."},severity:{type:b.tag,text:"Medium",color:{variant:ie.Warning}},age:{type:b.text,text:"9 months"},effort:{type:b.text,text:"1 sprint"},impact:{type:b.text,text:"Inconsistent error messages."}}},{data:{item:{type:b.text,text:"Missing database indexes."},severity:{type:b.tag,text:"High",color:{variant:ie.Danger}},age:{type:b.text,text:"6 months"},effort:{type:b.text,text:"0.5 sprint"},impact:{type:b.text,text:"Slow report generation."}}},{data:{item:{type:b.text,text:"Outdated test fixtures."},severity:{type:b.tag,text:"Low",color:{custom:{backgroundColor:"#e0e0e0",foregroundColor:"#333"}}},age:{type:b.text,text:"4 months"},effort:{type:b.text,text:"1 sprint"},impact:{type:b.text,text:"Reduced test reliability."}}}]},{type:b.markdown,sectionTitle:"Roadmap Progress",markdown:["### Q1 2026 Goals","","| Goal | Status | Completion |","|------|--------|------------|","| SSO Integration | In Progress | 60% |","| Mobile App v1 | In Progress | 35% |","| API v3 | Planning | 10% |","| Export Overhaul | Complete | 100% |","| Webhook Reliability | Complete | 100% |","","### Q2 2026 Planned","","- Real-time collaboration MVP.","- Custom theme builder.","- Advanced analytics dashboard.","- Internationalization (i18n) support."].join(`
`)},{type:b.list,sectionTitle:"Key Risks",items:[{content:{type:b.text,text:"SSO integration depends on legacy auth refactor completing first.",style:_e.Bold},icon:{type:b.icon,iconKey:pi.name,strokeColor:"red"}},{content:{type:b.text,text:"Mobile app timeline may slip due to design resource constraints."},icon:{type:b.icon,iconKey:pi.name,strokeColor:"orange"}},{content:{type:b.text,text:"API v3 design needs broader stakeholder input before implementation."}},{content:{type:b.text,text:"Real-time collaboration requires WebSocket infrastructure not yet provisioned."},icon:{type:b.icon,iconKey:pi.name,strokeColor:"orange"}}]},{type:b.text,sectionTitle:"Prepared By",text:"Product & Engineering Team, March 2026.",style:_e.Faint}]}]})}></${te}>
                `}})}}),Hj=Bt({title:"Expand All",parent:tu,descriptionParagraphs:["Cards rendered with expandAllSections enabled, which starts all sections expanded but still allows toggling."],defineExamples({defineExample:e}){e({title:"all sections start expanded",styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return v`
                    <${te.assign({data:bl,options:{expandAllSections:!0}})}></${te}>
                `}})}}),Gj=Bt({title:"Full Card",parent:tu,descriptionParagraphs:["Demos of VirStructuredRender with full StructuredRenderData (card arrays)."],defineExamples({defineExample:e}){e({title:"single card with many sections",styles:z`
                :host {
                    max-width: 900px;
                }
            `,render(){return v`
                    <${te.assign({data:[{cardTitle:"Project Health Report",sections:[{type:b.text,sectionTitle:"Summary",text:"Overall project health is good. Most metrics are within acceptable ranges, though a few areas require attention."},{type:b.markdown,sectionTitle:"Key Findings",markdown:["### Strengths","","- **Code coverage** has improved from 72% to 89% over the past quarter.","- Build times remain under 3 minutes for the full suite.","- Zero critical vulnerabilities in the latest dependency audit.","","### Areas for Improvement","","1. Documentation coverage for public APIs is at 64%.","2. Integration test flakiness has risen to 4.2%.","3. Bundle size has grown 18% since the last review."].join(`
`)},{type:b.table,sectionTitle:"Module Metrics",direction:Wt.Horizontal,headers:[{key:"module"},{key:"coverage"},{key:"buildTime"},{key:"status"}],entries:[{data:{module:{type:b.text,text:"Core"},coverage:{type:b.inlineCode,code:"94%"},buildTime:{type:b.text,text:"42s"},status:{type:b.tag,text:"Healthy",color:{variant:ie.Positive}}}},{data:{module:{type:b.text,text:"Rendering"},coverage:{type:b.inlineCode,code:"88%"},buildTime:{type:b.text,text:"28s"},status:{type:b.tag,text:"Healthy",color:{variant:ie.Positive}}}},{data:{module:{type:b.text,text:"Data Layer"},coverage:{type:b.inlineCode,code:"71%"},buildTime:{type:b.text,text:"1m 14s"},status:{type:b.tag,text:"Needs Attention",color:{variant:ie.Warning}}}},{data:{module:{type:b.text,text:"CLI Tools"},coverage:{type:b.inlineCode,code:"82%"},buildTime:{type:b.text,text:"19s"},status:{type:b.tag,text:"Healthy",color:{variant:ie.Positive}}}}]},{type:b.codeBlock,sectionTitle:"Sample Config",syntax:"json",code:JSON.stringify({project:"structured-render",coverageThreshold:80,maxBuildTimeSeconds:180,modules:["core","rendering","data-layer","cli-tools"]},null,4)},{type:b.list,sectionTitle:"Action Items",items:[{content:{type:b.text,text:"Increase data layer test coverage to 80%."},icon:{type:b.icon,iconKey:pi.name,strokeColor:"orange"}},{content:{type:b.text,text:"Investigate and fix flaky integration tests."},icon:{type:b.icon,iconKey:pi.name,strokeColor:"orange"}},{content:{type:b.text,text:"Audit bundle size and remove unused dependencies."}},{content:{type:b.text,text:"Add missing JSDoc to public API functions."}},{content:{type:b.text,text:"Schedule quarterly security review."},icon:{type:b.icon,iconKey:En.name,strokeColor:"green"}}]},{type:b.text,sectionTitle:"Next Review",text:"Scheduled for Q3 2026.",style:_e.Faint}]}]})}></${te}>
                `}})}}),N3=Bt({title:"Examples",parent:void 0,descriptionParagraphs:["Examples of specific functionality."]}),Zj=Bt({title:"Download and Print",parent:N3,descriptionParagraphs:["Demonstrates downloading and printing structured render data as a PDF."],defineExamples({defineExample:e}){e({title:"print",state(){return{isLoading:!1,isError:!1}},render({state:t,updateState:r}){return v`
                    <${yc.assign({text:"Print",disabled:t.isLoading,icon:t.isError?Cm:t.isLoading?Ta:void 0})}
                        ${Ee("click",async()=>{r({isLoading:!0});try{await I3(bl,{fileName:"structured-render-print"})}catch(n){Yc.error("Failed to print PDF",n),r({isError:!0})}finally{r({isLoading:!1})}})}
                    ></${yc}>
                `}}),e({title:"download",state(){return{isLoading:!1,isError:!1}},render({state:t,updateState:r}){return v`
                    <${yc.assign({text:"Download",disabled:t.isLoading,icon:t.isError?Cm:t.isLoading?Ta:void 0})}
                        ${Ee("click",async()=>{r({isLoading:!0});try{await P3(bl,{fileName:"structured-render-download",pdfOutputType:Vf.Download})}catch(n){Yc.error("Failed to download PDF",n),r({isError:!0})}finally{r({isLoading:!1})}})}
                    ></${yc}>
                `}})}}),_n=Bt({title:"Sections",parent:void 0,descriptionParagraphs:["All structured render section types."]}),Yj=Bt({title:"Code Block",parent:_n,defineExamples({defineExample:e}){e({title:"basic",render(){return v`
                    <${te.assign({data:{type:b.codeBlock,sectionTitle:"Code Block Example",code:`const hello = "world";
console.log(hello);`,syntax:"typescript"}})}></${te}>
                `}}),e({title:"no syntax",render(){return v`
                    <${te.assign({data:{type:b.codeBlock,code:`plain text code block
with multiple lines`,syntax:null}})}></${te}>
                `}})}}),Jj=Bt({title:"Empty",parent:_n,defineExamples({defineExample:e}){e({title:"empty",render(){return v`
                    <${te.assign({data:{type:b.empty}})}></${te}>
                `}})}}),Xj=Bt({title:"Icon",parent:_n,defineExamples({defineExample:e}){e({title:"basic",render(){return v`
                    <${te.assign({data:{type:b.icon,iconKey:Ma.name}})}></${te}>
                `}}),e({title:"colored stroke",render(){return v`
                    <${te.assign({data:{type:b.icon,iconKey:Ma.name,strokeColor:"gold"}})}></${te}>
                `}}),e({title:"colored fill",render(){return v`
                    <${te.assign({data:{type:b.icon,iconKey:En.name,fillColor:"lime"}})}></${te}>
                `}})}}),Qj=Bt({title:"Inline Code",parent:_n,defineExamples({defineExample:e}){e({title:"basic",render(){return v`
                    <${te.assign({data:{type:b.inlineCode,sectionTitle:"Inline Code Example",code:"const x = 42;"}})}></${te}>
                `}})}}),ez=Bt({title:"List",parent:_n,defineExamples({defineExample:e}){e({title:"basic",render(){return v`
                    <${te.assign({data:{type:b.list,sectionTitle:"List Example",items:[{content:{type:b.text,text:"First item"}},{content:{type:b.text,text:"Second item"}},{content:{type:b.text,text:"Third item"}}]}})}></${te}>
                `}}),e({title:"with icons",render(){return v`
                    <${te.assign({data:{type:b.list,sectionTitle:"List with Icons",items:[{content:{type:b.text,text:"Completed task"},icon:{type:b.icon,iconKey:En.name,strokeColor:"green"}},{content:{type:b.text,text:"Another completed task"},icon:{type:b.icon,iconKey:En.name,strokeColor:"green"}}]}})}></${te}>
                `}}),e({title:"with tags",render(){return v`
                    <${te.assign({data:{type:b.list,sectionTitle:"List with Tags",items:[{content:{type:b.tag,text:"Important",color:{variant:ie.Warning}}},{content:{type:b.tag,text:"Info"}}]}})}></${te}>
                `}})}}),tz=Bt({title:"Markdown",parent:_n,defineExamples({defineExample:e}){e({title:"basic",render(){return v`
                    <${te.assign({data:{type:b.markdown,sectionTitle:"Markdown Example",markdown:`## Hello World

This is **bold** and _italic_ text.

- Item 1
- Item 2
- Item 3`}})}></${te}>
                `}}),e({title:"with code",render(){return v`
                    <${te.assign({data:{type:b.markdown,sectionTitle:"Markdown with Code",markdown:"### Code Example\n\nHere is some `inline code` and a code block:\n\n```typescript\nconst x = 42;\n```"}})}></${te}>
                `}})}}),rz=Bt({title:"Processing",parent:_n,defineExamples({defineExample:e}){e({title:"basic",render(){return v`
                    <${te.assign({data:{type:b.processing}})}></${te}>
                `}})}}),nz=Bt({title:"Source",parent:_n,defineExamples({defineExample:e}){e({title:"with file name",render(){return v`
                    <${te.assign({data:{type:b.source,fileName:"example.ts",pageNumbers:null,fileBoundingBoxes:null,quote:null}})}></${te}>
                `}}),e({title:"with quote",render(){return v`
                    <${te.assign({data:{type:b.source,fileName:"document.pdf",pageNumbers:[1,2],fileBoundingBoxes:null,quote:"This is the relevant quote from the source document."}})}></${te}>
                `}}),e({title:"with page numbers",render(){return v`
                    <${te.assign({data:{type:b.source,fileName:"report.pdf",pageNumbers:[5,10,15],fileBoundingBoxes:null,quote:null}})}></${te}>
                `}})}}),iz=Bt({title:"Table",parent:_n,defineExamples({defineExample:e}){e({title:"horizontal",render(){return v`
                    <${te.assign({data:{type:b.table,sectionTitle:"Horizontal Table",direction:Wt.Horizontal,headers:[{key:"name"},{key:"value"}],entries:[{data:{name:{type:b.text,text:"Alpha"},value:{type:b.text,text:"100"}}},{data:{name:{type:b.text,text:"Beta"},value:{type:b.text,text:"200"}}}]}})}></${te}>
                `}}),e({title:"vertical",render(){return v`
                    <${te.assign({data:{type:b.table,sectionTitle:"Vertical Table",direction:Wt.Vertical,headers:[{key:"feature"},{key:"status"}],entries:[{data:{feature:{type:b.text,text:"Image Export"},status:{type:b.tag,text:"Supported"}}},{data:{feature:{type:b.text,text:"PDF Export"},status:{type:b.tag,text:"Beta"}}}]}})}></${te}>
                `}}),e({title:"with mixed cell types",render(){return v`
                    <${te.assign({data:{type:b.table,sectionTitle:"Mixed Cell Types",direction:Wt.Horizontal,headers:[{key:"label"},{key:"detail"}],entries:[{data:{label:{type:b.text,text:"Status"},detail:{type:b.tag,text:"Active",color:{variant:ie.Positive}}}},{data:{label:{type:b.text,text:"Version"},detail:{type:b.inlineCode,code:"v1.0.0"}}}]}})}></${te}>
                `}})}}),oz=Bt({title:"Tag",parent:_n,defineExamples({defineExample:e}){e({title:"basic",render(){return v`
                    <${te.assign({data:{type:b.tag,sectionTitle:"Tag Example",text:"Default Tag"}})}></${te}>
                `}}),e({title:"custom colors",render(){return v`
                    <${te.assign({data:{type:b.tag,text:"Custom Colors",color:{custom:{backgroundColor:"#e74c3c",foregroundColor:"#ffffff"}}}})}></${te}>
                `}}),e({title:"big tag",render(){return v`
                    <${te.assign({data:{type:b.tag,text:"Big Tag",useBigTag:!0}})}></${te}>
                `}})}}),sz=Bt({title:"Text",parent:_n,defineExamples({defineExample:e}){e({title:"basic",render(){return v`
                    <${te.assign({data:{type:b.text,sectionTitle:"Text Example",text:"This is a simple text section."}})}></${te}>
                `}}),e({title:"bold",render(){return v`
                    <${te.assign({data:{type:b.text,text:"Bold text section.",style:_e.Bold}})}></${te}>
                `}}),e({title:"small",render(){return v`
                    <${te.assign({data:{type:b.text,text:"Small text section.",style:_e.Small}})}></${te}>
                `}}),e({title:"faint",render(){return v`
                    <${te.assign({data:{type:b.text,text:"Faint text section.",style:_e.Faint}})}></${te}>
                `}}),e({title:"with icon",render(){return v`
                    <${te.assign({data:{type:b.text,text:"Text with icon.",icon:{type:b.icon,iconKey:Ma.name,strokeColor:"gold"}}})}></${te}>
                `}})}}),az=[Yj,Jj,Xj,Qj,ez,tz,rz,nz,iz,oz,sz,Gj,Wj,Kj,Vj,Hj,Zj,tu,N3,_n];Ci()({tagName:"vir-app",styles:z`
        :host {
            display: flex;
            flex-grow: 1;
        }

        ${$c} {
            flex-grow: 1;
        }

        p {
            ${zl}
            text-align: center;
            font-size: 32px;
            font-weight: bold;
            padding: 0 8px;
            padding-bottom: 8px;
        }
    `,render(){return v`
            <${$c.assign({pages:az,internalRouterConfig:{useInternalRouter:!0,basePath:"structured-render/demo"}})}>
                <p slot=${$c.slotNames.navHeader}>Structured<br>Render</p>
            </${$c}>
        `}});const uz=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{fo as _,vz as a,jf as p};
