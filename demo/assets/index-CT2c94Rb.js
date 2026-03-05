const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BLfgbgf6.js","assets/html2canvas.esm-DXEQVQnt.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var ur;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(ur||(ur={}));function Od(e,t=r=>r){const r=new Map;return e.filter(n=>{const i=t(n);return r.get(i)?!1:(r.set(i,n),!0)})}class X0{diff(t,r,n={}){let i;typeof n=="function"?(i=n,n={}):"callback"in n&&(i=n.callback);const o=this.castInput(t,n),s=this.castInput(r,n),a=this.removeEmpty(this.tokenize(o,n)),l=this.removeEmpty(this.tokenize(s,n));return this.diffWithOptionsObj(a,l,n,i)}diffWithOptionsObj(t,r,n,i){var o;const s=D=>{if(D=this.postProcess(D,n),i){setTimeout(function(){i(D)},0);return}else return D},a=r.length,l=t.length;let u=1,d=a+l;n.maxEditLength!=null&&(d=Math.min(d,n.maxEditLength));const f=(o=n.timeout)!==null&&o!==void 0?o:1/0,h=Date.now()+f,g=[{oldPos:-1,lastComponent:void 0}];let m=this.extractCommon(g[0],r,t,0,n);if(g[0].oldPos+1>=l&&m+1>=a)return s(this.buildValues(g[0].lastComponent,r,t));let b=-1/0,y=1/0;const x=()=>{for(let D=Math.max(b,-u);D<=Math.min(y,u);D+=2){let C;const P=g[D-1],O=g[D+1];P&&(g[D-1]=void 0);let H=!1;if(O){const oe=O.oldPos-D;H=O&&0<=oe&&oe<a}const ee=P&&P.oldPos+1<l;if(!H&&!ee){g[D]=void 0;continue}if(!ee||H&&P.oldPos<O.oldPos?C=this.addToPath(O,!0,!1,0,n):C=this.addToPath(P,!1,!0,1,n),m=this.extractCommon(C,r,t,D,n),C.oldPos+1>=l&&m+1>=a)return s(this.buildValues(C.lastComponent,r,t))||!0;g[D]=C,C.oldPos+1>=l&&(y=Math.min(y,D-1)),m+1>=a&&(b=Math.max(b,D+1))}u++};if(i)(function D(){setTimeout(function(){if(u>d||Date.now()>h)return i(void 0);x()||D()},0)})();else for(;u<=d&&Date.now()<=h;){const D=x();if(D)return D}}addToPath(t,r,n,i,o){const s=t.lastComponent;return s&&!o.oneChangePerToken&&s.added===r&&s.removed===n?{oldPos:t.oldPos+i,lastComponent:{count:s.count+1,added:r,removed:n,previousComponent:s.previousComponent}}:{oldPos:t.oldPos+i,lastComponent:{count:1,added:r,removed:n,previousComponent:s}}}extractCommon(t,r,n,i,o){const s=r.length,a=n.length;let l=t.oldPos,u=l-i,d=0;for(;u+1<s&&l+1<a&&this.equals(n[l+1],r[u+1],o);)u++,l++,d++,o.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return d&&!o.oneChangePerToken&&(t.lastComponent={count:d,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=l,u}equals(t,r,n){return n.comparator?n.comparator(t,r):t===r||!!n.ignoreCase&&t.toLowerCase()===r.toLowerCase()}removeEmpty(t){const r=[];for(let n=0;n<t.length;n++)t[n]&&r.push(t[n]);return r}castInput(t,r){return t}tokenize(t,r){return Array.from(t)}join(t){return t.join("")}postProcess(t,r){return t}get useLongestToken(){return!1}buildValues(t,r,n){const i=[];let o;for(;t;)i.push(t),o=t.previousComponent,delete t.previousComponent,t=o;i.reverse();const s=i.length;let a=0,l=0,u=0;for(;a<s;a++){const d=i[a];if(d.removed)d.value=this.join(n.slice(u,u+d.count)),u+=d.count;else{if(!d.added&&this.useLongestToken){let f=r.slice(l,l+d.count);f=f.map(function(h,g){const m=n[u+g];return m.length>h.length?m:h}),d.value=this.join(f)}else d.value=this.join(r.slice(l,l+d.count));l+=d.count,d.added||(u+=d.count)}}return i}}function Cb(e,t){let r;for(r=0;r<e.length&&r<t.length;r++)if(e[r]!=t[r])return e.slice(0,r);return e.slice(0,r)}function Sb(e,t){let r;if(!e||!t||e[e.length-1]!=t[t.length-1])return"";for(r=0;r<e.length&&r<t.length;r++)if(e[e.length-(r+1)]!=t[t.length-(r+1)])return e.slice(-r);return e.slice(-r)}function Bm(e,t,r){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return r+e.slice(t.length)}function Lm(e,t,r){if(!t)return e+r;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+r}function ul(e,t){return Bm(e,t,"")}function Qu(e,t){return Lm(e,t,"")}function Tb(e,t){return t.slice(0,K3(e,t))}function K3(e,t){let r=0;e.length>t.length&&(r=e.length-t.length);let n=t.length;e.length<t.length&&(n=e.length);const i=Array(n);let o=0;i[0]=0;for(let s=1;s<n;s++){for(t[s]==t[o]?i[s]=i[o]:i[s]=o;o>0&&t[s]!=t[o];)o=i[o];t[s]==t[o]&&o++}o=0;for(let s=r;s<e.length;s++){for(;o>0&&e[s]!=t[o];)o=i[o];e[s]==t[o]&&o++}return o}function cl(e){let t;for(t=e.length-1;t>=0&&e[t].match(/\s/);t--);return e.substring(t+1)}function to(e){const t=e.match(/^\s*/);return t?t[0]:""}const Uc="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",H3=new RegExp(`[${Uc}]+|\\s+|[^${Uc}]`,"ug");class G3 extends X0{equals(t,r,n){return n.ignoreCase&&(t=t.toLowerCase(),r=r.toLowerCase()),t.trim()===r.trim()}tokenize(t,r={}){let n;if(r.intlSegmenter){const s=r.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=[];for(const a of Array.from(s.segment(t))){const l=a.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(l)?n[n.length-1]+=l:n.push(l)}}else n=t.match(H3)||[];const i=[];let o=null;return n.forEach(s=>{/\s/.test(s)?o==null?i.push(s):i.push(i.pop()+s):o!=null&&/\s/.test(o)?i[i.length-1]==o?i.push(i.pop()+s):i.push(o+s):i.push(s),o=s}),i}join(t){return t.map((r,n)=>n==0?r:r.replace(/^\s+/,"")).join("")}postProcess(t,r){if(!t||r.oneChangePerToken)return t;let n=null,i=null,o=null;return t.forEach(s=>{s.added?i=s:s.removed?o=s:((i||o)&&Mb(n,o,i,s),n=s,i=null,o=null)}),(i||o)&&Mb(n,o,i,null),t}}const Z3=new G3;function Y3(e,t,r){return r?.ignoreWhitespace!=null&&!r.ignoreWhitespace?Q3(e,t,r):Z3.diff(e,t,r)}function Mb(e,t,r,n){if(t&&r){const i=to(t.value),o=cl(t.value),s=to(r.value),a=cl(r.value);if(e){const l=Cb(i,s);e.value=Lm(e.value,s,l),t.value=ul(t.value,l),r.value=ul(r.value,l)}if(n){const l=Sb(o,a);n.value=Bm(n.value,a,l),t.value=Qu(t.value,l),r.value=Qu(r.value,l)}}else if(r){if(e){const i=to(r.value);r.value=r.value.substring(i.length)}if(n){const i=to(n.value);n.value=n.value.substring(i.length)}}else if(e&&n){const i=to(n.value),o=to(t.value),s=cl(t.value),a=Cb(i,o);t.value=ul(t.value,a);const l=Sb(ul(i,a),s);t.value=Qu(t.value,l),n.value=Bm(n.value,i,l),e.value=Lm(e.value,i,i.slice(0,i.length-l.length))}else if(n){const i=to(n.value),o=cl(t.value),s=Tb(o,i);t.value=Qu(t.value,s)}else if(e){const i=cl(e.value),o=to(t.value),s=Tb(i,o);t.value=ul(t.value,s)}}class J3 extends X0{tokenize(t){const r=new RegExp(`(\\r?\\n)|[${Uc}]+|[^\\S\\n\\r]+|[^${Uc}]`,"ug");return t.match(r)||[]}}const X3=new J3;function Q3(e,t,r){return X3.diff(e,t,r)}class e4 extends X0{constructor(){super(...arguments),this.tokenize=n4}equals(t,r,n){return n.ignoreWhitespace?((!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!n.newlineIsToken||!r.includes(`
`))&&(r=r.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),r.endsWith(`
`)&&(r=r.slice(0,-1))),super.equals(t,r,n)}}const t4=new e4;function r4(e,t,r){return t4.diff(e,t,r)}function n4(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const r=[],n=e.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let i=0;i<n.length;i++){const o=n[i];i%2&&!t.newlineIsToken?r[r.length-1]+=o:r.push(o)}return r}function Fb(e,t){return P2(e,new Map)}function P2(e,t,r){if(e&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object){if(t.has(e))return t.get(e);const n={};return t.set(e,n),Object.entries(e).sort((i,o)=>i[0].localeCompare(o[0])).forEach(([i,o])=>{const s=P2(o,t);n[i]=s}),n}else return e}var i4=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,o4=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,s4=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,sh={Space_Separator:i4,ID_Start:o4,ID_Continue:s4},Dt={isSpaceSeparator(e){return typeof e=="string"&&sh.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||sh.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||sh.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let _m,Ir,_i,qc,ko,Qn,Jt,Q0,zl;var a4=function(t,r){_m=String(t),Ir="start",_i=[],qc=0,ko=1,Qn=0,Jt=void 0,Q0=void 0,zl=void 0;do Jt=l4(),d4[Ir]();while(Jt.type!=="eof");return typeof r=="function"?jm({"":zl},"",r):zl};function jm(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let i=0;i<n.length;i++){const o=String(i),s=jm(n,o,r);s===void 0?delete n[o]:Object.defineProperty(n,o,{value:s,writable:!0,enumerable:!0,configurable:!0})}else for(const i in n){const o=jm(n,i,r);o===void 0?delete n[i]:Object.defineProperty(n,i,{value:o,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}let De,we,Ml,Ni,Ie;function l4(){for(De="default",we="",Ml=!1,Ni=1;;){Ie=Hi();const e=I2[De]();if(e)return e}}function Hi(){if(_m[qc])return String.fromCodePoint(_m.codePointAt(qc))}function N(){const e=Hi();return e===`
`?(ko++,Qn=0):e?Qn+=e.length:Qn++,e&&(qc+=e.length),e}const I2={default(){switch(Ie){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":N();return;case"/":N(),De="comment";return;case void 0:return N(),at("eof")}if(Dt.isSpaceSeparator(Ie)){N();return}return I2[Ir]()},comment(){switch(Ie){case"*":N(),De="multiLineComment";return;case"/":N(),De="singleLineComment";return}throw lt(N())},multiLineComment(){switch(Ie){case"*":N(),De="multiLineCommentAsterisk";return;case void 0:throw lt(N())}N()},multiLineCommentAsterisk(){switch(Ie){case"*":N();return;case"/":N(),De="default";return;case void 0:throw lt(N())}N(),De="multiLineComment"},singleLineComment(){switch(Ie){case`
`:case"\r":case"\u2028":case"\u2029":N(),De="default";return;case void 0:return N(),at("eof")}N()},value(){switch(Ie){case"{":case"[":return at("punctuator",N());case"n":return N(),Uo("ull"),at("null",null);case"t":return N(),Uo("rue"),at("boolean",!0);case"f":return N(),Uo("alse"),at("boolean",!1);case"-":case"+":N()==="-"&&(Ni=-1),De="sign";return;case".":we=N(),De="decimalPointLeading";return;case"0":we=N(),De="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":we=N(),De="decimalInteger";return;case"I":return N(),Uo("nfinity"),at("numeric",1/0);case"N":return N(),Uo("aN"),at("numeric",NaN);case'"':case"'":Ml=N()==='"',we="",De="string";return}throw lt(N())},identifierNameStartEscape(){if(Ie!=="u")throw lt(N());N();const e=zm();switch(e){case"$":case"_":break;default:if(!Dt.isIdStartChar(e))throw Pb();break}we+=e,De="identifierName"},identifierName(){switch(Ie){case"$":case"_":case"‌":case"‍":we+=N();return;case"\\":N(),De="identifierNameEscape";return}if(Dt.isIdContinueChar(Ie)){we+=N();return}return at("identifier",we)},identifierNameEscape(){if(Ie!=="u")throw lt(N());N();const e=zm();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!Dt.isIdContinueChar(e))throw Pb();break}we+=e,De="identifierName"},sign(){switch(Ie){case".":we=N(),De="decimalPointLeading";return;case"0":we=N(),De="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":we=N(),De="decimalInteger";return;case"I":return N(),Uo("nfinity"),at("numeric",Ni*(1/0));case"N":return N(),Uo("aN"),at("numeric",NaN)}throw lt(N())},zero(){switch(Ie){case".":we+=N(),De="decimalPoint";return;case"e":case"E":we+=N(),De="decimalExponent";return;case"x":case"X":we+=N(),De="hexadecimal";return}return at("numeric",Ni*0)},decimalInteger(){switch(Ie){case".":we+=N(),De="decimalPoint";return;case"e":case"E":we+=N(),De="decimalExponent";return}if(Dt.isDigit(Ie)){we+=N();return}return at("numeric",Ni*Number(we))},decimalPointLeading(){if(Dt.isDigit(Ie)){we+=N(),De="decimalFraction";return}throw lt(N())},decimalPoint(){switch(Ie){case"e":case"E":we+=N(),De="decimalExponent";return}if(Dt.isDigit(Ie)){we+=N(),De="decimalFraction";return}return at("numeric",Ni*Number(we))},decimalFraction(){switch(Ie){case"e":case"E":we+=N(),De="decimalExponent";return}if(Dt.isDigit(Ie)){we+=N();return}return at("numeric",Ni*Number(we))},decimalExponent(){switch(Ie){case"+":case"-":we+=N(),De="decimalExponentSign";return}if(Dt.isDigit(Ie)){we+=N(),De="decimalExponentInteger";return}throw lt(N())},decimalExponentSign(){if(Dt.isDigit(Ie)){we+=N(),De="decimalExponentInteger";return}throw lt(N())},decimalExponentInteger(){if(Dt.isDigit(Ie)){we+=N();return}return at("numeric",Ni*Number(we))},hexadecimal(){if(Dt.isHexDigit(Ie)){we+=N(),De="hexadecimalInteger";return}throw lt(N())},hexadecimalInteger(){if(Dt.isHexDigit(Ie)){we+=N();return}return at("numeric",Ni*Number(we))},string(){switch(Ie){case"\\":N(),we+=u4();return;case'"':if(Ml)return N(),at("string",we);we+=N();return;case"'":if(!Ml)return N(),at("string",we);we+=N();return;case`
`:case"\r":throw lt(N());case"\u2028":case"\u2029":f4(Ie);break;case void 0:throw lt(N())}we+=N()},start(){switch(Ie){case"{":case"[":return at("punctuator",N())}De="value"},beforePropertyName(){switch(Ie){case"$":case"_":we=N(),De="identifierName";return;case"\\":N(),De="identifierNameStartEscape";return;case"}":return at("punctuator",N());case'"':case"'":Ml=N()==='"',De="string";return}if(Dt.isIdStartChar(Ie)){we+=N(),De="identifierName";return}throw lt(N())},afterPropertyName(){if(Ie===":")return at("punctuator",N());throw lt(N())},beforePropertyValue(){De="value"},afterPropertyValue(){switch(Ie){case",":case"}":return at("punctuator",N())}throw lt(N())},beforeArrayValue(){if(Ie==="]")return at("punctuator",N());De="value"},afterArrayValue(){switch(Ie){case",":case"]":return at("punctuator",N())}throw lt(N())},end(){throw lt(N())}};function at(e,t){return{type:e,value:t,line:ko,column:Qn}}function Uo(e){for(const t of e){if(Hi()!==t)throw lt(N());N()}}function u4(){switch(Hi()){case"b":return N(),"\b";case"f":return N(),"\f";case"n":return N(),`
`;case"r":return N(),"\r";case"t":return N(),"	";case"v":return N(),"\v";case"0":if(N(),Dt.isDigit(Hi()))throw lt(N());return"\0";case"x":return N(),c4();case"u":return N(),zm();case`
`:case"\u2028":case"\u2029":return N(),"";case"\r":return N(),Hi()===`
`&&N(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw lt(N());case void 0:throw lt(N())}return N()}function c4(){let e="",t=Hi();if(!Dt.isHexDigit(t)||(e+=N(),t=Hi(),!Dt.isHexDigit(t)))throw lt(N());return e+=N(),String.fromCodePoint(parseInt(e,16))}function zm(){let e="",t=4;for(;t-- >0;){const r=Hi();if(!Dt.isHexDigit(r))throw lt(N());e+=N()}return String.fromCodePoint(parseInt(e,16))}const d4={start(){if(Jt.type==="eof")throw qo();ah()},beforePropertyName(){switch(Jt.type){case"identifier":case"string":Q0=Jt.value,Ir="afterPropertyName";return;case"punctuator":ec();return;case"eof":throw qo()}},afterPropertyName(){if(Jt.type==="eof")throw qo();Ir="beforePropertyValue"},beforePropertyValue(){if(Jt.type==="eof")throw qo();ah()},beforeArrayValue(){if(Jt.type==="eof")throw qo();if(Jt.type==="punctuator"&&Jt.value==="]"){ec();return}ah()},afterPropertyValue(){if(Jt.type==="eof")throw qo();switch(Jt.value){case",":Ir="beforePropertyName";return;case"}":ec()}},afterArrayValue(){if(Jt.type==="eof")throw qo();switch(Jt.value){case",":Ir="beforeArrayValue";return;case"]":ec()}},end(){}};function ah(){let e;switch(Jt.type){case"punctuator":switch(Jt.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=Jt.value;break}if(zl===void 0)zl=e;else{const t=_i[_i.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,Q0,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")_i.push(e),Array.isArray(e)?Ir="beforeArrayValue":Ir="beforePropertyName";else{const t=_i[_i.length-1];t==null?Ir="end":Array.isArray(t)?Ir="afterArrayValue":Ir="afterPropertyValue"}}function ec(){_i.pop();const e=_i[_i.length-1];e==null?Ir="end":Array.isArray(e)?Ir="afterArrayValue":Ir="afterPropertyValue"}function lt(e){return Wc(e===void 0?`JSON5: invalid end of input at ${ko}:${Qn}`:`JSON5: invalid character '${N2(e)}' at ${ko}:${Qn}`)}function qo(){return Wc(`JSON5: invalid end of input at ${ko}:${Qn}`)}function Pb(){return Qn-=5,Wc(`JSON5: invalid identifier character at ${ko}:${Qn}`)}function f4(e){console.warn(`JSON5: '${N2(e)}' in strings is not valid ECMAScript; consider escaping`)}function N2(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}function Wc(e){const t=new SyntaxError(e);return t.lineNumber=ko,t.columnNumber=Qn,t}var h4=function(t,r,n){const i=[];let o="",s,a,l="",u;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,u=r.quote,r=r.replacer),typeof r=="function")a=r;else if(Array.isArray(r)){s=[];for(const b of r){let y;typeof b=="string"?y=b:(typeof b=="number"||b instanceof String||b instanceof Number)&&(y=String(b)),y!==void 0&&s.indexOf(y)<0&&s.push(y)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),l="          ".substr(0,n)):typeof n=="string"&&(l=n.substr(0,10)),d("",{"":t});function d(b,y){let x=y[b];switch(x!=null&&(typeof x.toJSON5=="function"?x=x.toJSON5(b):typeof x.toJSON=="function"&&(x=x.toJSON(b))),a&&(x=a.call(y,b,x)),x instanceof Number?x=Number(x):x instanceof String?x=String(x):x instanceof Boolean&&(x=x.valueOf()),x){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof x=="string")return f(x);if(typeof x=="number")return String(x);if(typeof x=="object")return Array.isArray(x)?m(x):h(x)}function f(b){const y={"'":.1,'"':.2},x={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let D="";for(let P=0;P<b.length;P++){const O=b[P];switch(O){case"'":case'"':y[O]++,D+=O;continue;case"\0":if(Dt.isDigit(b[P+1])){D+="\\x00";continue}}if(x[O]){D+=x[O];continue}if(O<" "){let H=O.charCodeAt(0).toString(16);D+="\\x"+("00"+H).substring(H.length);continue}D+=O}const C=u||Object.keys(y).reduce((P,O)=>y[P]<y[O]?P:O);return D=D.replace(new RegExp(C,"g"),x[C]),C+D+C}function h(b){if(i.indexOf(b)>=0)throw TypeError("Converting circular structure to JSON5");i.push(b);let y=o;o=o+l;let x=s||Object.keys(b),D=[];for(const P of x){const O=d(P,b);if(O!==void 0){let H=g(P)+":";l!==""&&(H+=" "),H+=O,D.push(H)}}let C;if(D.length===0)C="{}";else{let P;if(l==="")P=D.join(","),C="{"+P+"}";else{let O=`,
`+o;P=D.join(O),C=`{
`+o+P+`,
`+y+"}"}}return i.pop(),o=y,C}function g(b){if(b.length===0)return f(b);const y=String.fromCodePoint(b.codePointAt(0));if(!Dt.isIdStartChar(y))return f(b);for(let x=y.length;x<b.length;x++)if(!Dt.isIdContinueChar(String.fromCodePoint(b.codePointAt(x))))return f(b);return b}function m(b){if(i.indexOf(b)>=0)throw TypeError("Converting circular structure to JSON5");i.push(b);let y=o;o=o+l;let x=[];for(let C=0;C<b.length;C++){const P=d(String(C),b);x.push(P!==void 0?P:"null")}let D;if(x.length===0)D="[]";else if(l==="")D="["+x.join(",")+"]";else{let C=`,
`+o,P=x.join(C);D=`[
`+o+P+`,
`+y+"]"}return i.pop(),o=y,D}};const m4={parse:a4,stringify:h4};var g4=m4;const O2="__@@augment-vir-undefined-sentinel@@__",p4=new RegExp(`['"]${O2}['"]`);function $(e,t){if(typeof e=="string")return e;try{return g4.stringify(e,(n,i)=>i===void 0?O2:typeof i=="bigint"?Number(i):i,t||void 0).split(p4).join("undefined")}catch{return String(e)}}var b4=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var _r;(function(e){e.Node="node",e.Web="web"})(_r||(_r={}));function y4(){return b4?_r.Node:_r.Web}const R2=y4();function vs(e){return R2===e}function B2(e){return e[R2]()}function v4(e,t){const r=typeof t=="string"&&typeof e=="string",n=typeof t!="string"||typeof e!="string",i=n?r4:Y3,o=[r?"":`
`,$(t&&typeof t=="object"&&!Array.isArray(t)?Fb(t):t,4),`
`].join(""),s=[r?"":`
`,$(e&&typeof e=="object"&&!Array.isArray(e)?Fb(e):e,4),`
`].join(""),a=w4(n,i(o,s)),l=vs(_r.Node);return[[l?qi.Green:""," +added (unexpected, added in actual)",l?qi.Red:""," -missing (expected, missing from actual)",l?qi.Reset:""].join(""),r?`

`:`
`,a].join("")}var qi;(function(e){e.Green="\x1B[32m",e.Red="\x1B[31m",e.Reset="\x1B[0m"})(qi||(qi={}));var Vc;(function(e){e.Added="+",e.Removed="-"})(Vc||(Vc={}));function w4(e,t){return e?t.flatMap(n=>n.value.split(`
`).map(i=>Ib(i,n)).join(`
`)).join(""):t.map(n=>Ib(void 0,n)).join("")}function Ib(e,t){if(e!=null&&!e)return"";const r=vs(_r.Node),n=t.added?Vc.Added:t.removed?Vc.Removed:e==null?"":" ",i=t.added?qi.Green:t.removed?qi.Red:qi.Reset;return[r?i:"",n,e??t.value,qi.Reset].join("")}function tt(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function k4(e){return tt(e).filter(t=>isNaN(Number(t)))}function dn(e){return k4(e).map(r=>e[r])}const x4=[".",":",";",",","?","!"],$4=new RegExp(`[${x4.join("")}]+$`);function Nb(e){return e.replace($4,"")}function fr(e){return e==null||e===""||e==="undefined"||e==="null"?"":typeof e=="string"?e:e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):$(e)}function Na(...e){const t=e.map(o=>fr(o)).filter(o=>!!Nb(o)),r=t[t.length-1]?.endsWith("."),n=t.map(o=>Nb(fr(o)));return(n.length<2?n[0]||"":n.join(": "))+(r?".":"")}function xt(e){return e instanceof Error?e:new Error(fr(e))}function Oa(e,t){const r=xt(e),n=Na(t,r.message);try{return r.message=n,r}catch{return new Error(n,{cause:e})}}var F;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(F||(F={}));var Z;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(Z||(Z={}));Z.ClientError,Z.ServerError;F.Continue+"",Z.Information,F.SwitchingProtocols+"",Z.Information,F.Processing+"",Z.Information,F.EarlyHints+"",Z.Information,F.Ok+"",Z.Success,F.Created+"",Z.Success,F.Accepted+"",Z.Success,F.NonAuthoritativeInformation+"",Z.Success,F.NoContent+"",Z.Success,F.ResetContent+"",Z.Success,F.PartialContent+"",Z.Success,F.MultiStatus+"",Z.Success,F.AlreadyReported+"",Z.Success,F.ImUsed+"",Z.Success,F.MultipleChoices+"",Z.Redirect,F.MovedPermanently+"",Z.Redirect,F.Found+"",Z.Redirect,F.SeeOther+"",Z.Redirect,F.NotModified+"",Z.Redirect,F.UseProxy+"",Z.Redirect,F.Unused+"",Z.Redirect,F.TemporaryRedirect+"",Z.Redirect,F.PermanentRedirect+"",Z.Redirect,F.BadRequest+"",Z.ClientError,F.Unauthorized+"",Z.ClientError,F.PaymentRequired+"",Z.ClientError,F.Forbidden+"",Z.ClientError,F.NotFound+"",Z.ClientError,F.MethodNotAllowed+"",Z.ClientError,F.NotAcceptable+"",Z.ClientError,F.ProxyAuthenticationRequired+"",Z.ClientError,F.RequestTimeout+"",Z.ClientError,F.Conflict+"",Z.ClientError,F.Gone+"",Z.ClientError,F.LengthRequired+"",Z.ClientError,F.PreconditionFailed+"",Z.ClientError,F.PayloadTooLarge+"",Z.ClientError,F.UriTooLong+"",Z.ClientError,F.UnsupportedMediaType+"",Z.ClientError,F.RangeNotSatisfiable+"",Z.ClientError,F.ExpectationFailed+"",Z.ClientError,F.ImATeapot+"",Z.ClientError,F.MisdirectedRequest+"",Z.ClientError,F.UnprocessableContent+"",Z.ClientError,F.Locked+"",Z.ClientError,F.FailedDependency+"",Z.ClientError,F.TooEarly+"",Z.ClientError,F.UpgradeRequired+"",Z.ClientError,F.PreconditionRequired+"",Z.ClientError,F.TooManyRequests+"",Z.ClientError,F.RequestHeaderFieldsTooLarge+"",Z.ClientError,F.UnavailableForLegalReasons+"",Z.ClientError,F.InternalServerError+"",Z.ServerError,F.NotImplemented+"",Z.ServerError,F.BadGateway+"",Z.ServerError,F.ServiceUnavailable+"",Z.ServerError,F.GatewayTimeout+"",Z.ServerError,F.HttpVersionNotSupported+"",Z.ServerError,F.VariantAlsoNegotiates+"",Z.ServerError,F.InsufficientStorage+"",Z.ServerError,F.LoopDetected+"",Z.ServerError,F.NotExtended+"",Z.ServerError,F.NetworkAuthenticationRequired+"",Z.ServerError;const Mc={[Z.Information]:[F.Continue,F.SwitchingProtocols,F.Processing,F.EarlyHints],[Z.Success]:[F.Ok,F.Created,F.Accepted,F.NonAuthoritativeInformation,F.NoContent,F.ResetContent,F.PartialContent,F.MultiStatus,F.AlreadyReported,F.ImUsed],[Z.Redirect]:[F.MultipleChoices,F.MovedPermanently,F.Found,F.SeeOther,F.NotModified,F.UseProxy,F.Unused,F.TemporaryRedirect,F.PermanentRedirect],[Z.ClientError]:[F.BadRequest,F.Unauthorized,F.PaymentRequired,F.Forbidden,F.NotFound,F.MethodNotAllowed,F.NotAcceptable,F.ProxyAuthenticationRequired,F.RequestTimeout,F.Conflict,F.Gone,F.LengthRequired,F.PreconditionFailed,F.PayloadTooLarge,F.UriTooLong,F.UnsupportedMediaType,F.RangeNotSatisfiable,F.ExpectationFailed,F.ImATeapot,F.MisdirectedRequest,F.UnprocessableContent,F.Locked,F.FailedDependency,F.TooEarly,F.UpgradeRequired,F.PreconditionRequired,F.TooManyRequests,F.RequestHeaderFieldsTooLarge,F.UnavailableForLegalReasons],[Z.ServerError]:[F.InternalServerError,F.NotImplemented,F.BadGateway,F.ServiceUnavailable,F.GatewayTimeout,F.HttpVersionNotSupported,F.VariantAlsoNegotiates,F.InsufficientStorage,F.LoopDetected,F.NotExtended,F.NetworkAuthenticationRequired]};function eg({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class Kc{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(xt(n))}})}}class ws extends Error{}class D4 extends ws{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class A4 extends ws{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class E4 extends ws{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class Ys extends ws{}class L2 extends ws{constructor(t){super(`Invalid unit ${t}`)}}class $r extends ws{}class ro extends ws{constructor(){super("Zone is an abstract class")}}const V="numeric",ei="short",gn="long",Hc={year:V,month:V,day:V},_2={year:V,month:ei,day:V},C4={year:V,month:ei,day:V,weekday:ei},j2={year:V,month:gn,day:V},z2={year:V,month:gn,day:V,weekday:gn},U2={hour:V,minute:V},q2={hour:V,minute:V,second:V},W2={hour:V,minute:V,second:V,timeZoneName:ei},V2={hour:V,minute:V,second:V,timeZoneName:gn},K2={hour:V,minute:V,hourCycle:"h23"},H2={hour:V,minute:V,second:V,hourCycle:"h23"},G2={hour:V,minute:V,second:V,hourCycle:"h23",timeZoneName:ei},Z2={hour:V,minute:V,second:V,hourCycle:"h23",timeZoneName:gn},Y2={year:V,month:V,day:V,hour:V,minute:V},J2={year:V,month:V,day:V,hour:V,minute:V,second:V},X2={year:V,month:ei,day:V,hour:V,minute:V},Q2={year:V,month:ei,day:V,hour:V,minute:V,second:V},S4={year:V,month:ei,day:V,weekday:ei,hour:V,minute:V},ew={year:V,month:gn,day:V,hour:V,minute:V,timeZoneName:ei},tw={year:V,month:gn,day:V,hour:V,minute:V,second:V,timeZoneName:ei},rw={year:V,month:gn,day:V,weekday:gn,hour:V,minute:V,timeZoneName:gn},nw={year:V,month:gn,day:V,weekday:gn,hour:V,minute:V,second:V,timeZoneName:gn};class ku{get type(){throw new ro}get name(){throw new ro}get ianaName(){return this.name}get isUniversal(){throw new ro}offsetName(t,r){throw new ro}formatOffset(t,r){throw new ro}offset(t){throw new ro}equals(t){throw new ro}get isValid(){throw new ro}}let lh=null;class Rd extends ku{static get instance(){return lh===null&&(lh=new Rd),lh}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return mw(t,r,n)}formatOffset(t,r){return Ul(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const Um=new Map;function T4(e){let t=Um.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),Um.set(e,t)),t}const M4={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function F4(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,i,o,s,a,l,u,d]=n;return[s,i,o,a,l,u,d]}function P4(e,t){const r=e.formatToParts(t),n=[];for(let i=0;i<r.length;i++){const{type:o,value:s}=r[i],a=M4[o];o==="era"?n[a]=s:he(a)||(n[a]=parseInt(s,10))}return n}const uh=new Map;class Gi extends ku{static create(t){let r=uh.get(t);return r===void 0&&uh.set(t,r=new Gi(t)),r}static resetCache(){uh.clear(),Um.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Gi.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return mw(t,r,n,this.name)}formatOffset(t,r){return Ul(this.offset(t),r)}offset(t){if(!this.valid)return NaN;const r=new Date(t);if(isNaN(r))return NaN;const n=T4(this.name);let[i,o,s,a,l,u,d]=n.formatToParts?P4(n,r):F4(n,r);a==="BC"&&(i=-Math.abs(i)+1);const h=Ld({year:i,month:o,day:s,hour:l===24?0:l,minute:u,second:d,millisecond:0});let g=+r;const m=g%1e3;return g-=m>=0?m:1e3+m,(h-g)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Ob={};function I4(e,t={}){const r=JSON.stringify([e,t]);let n=Ob[r];return n||(n=new Intl.ListFormat(e,t),Ob[r]=n),n}const qm=new Map;function Wm(e,t={}){const r=JSON.stringify([e,t]);let n=qm.get(r);return n===void 0&&(n=new Intl.DateTimeFormat(e,t),qm.set(r,n)),n}const Vm=new Map;function N4(e,t={}){const r=JSON.stringify([e,t]);let n=Vm.get(r);return n===void 0&&(n=new Intl.NumberFormat(e,t),Vm.set(r,n)),n}const Km=new Map;function O4(e,t={}){const{base:r,...n}=t,i=JSON.stringify([e,n]);let o=Km.get(i);return o===void 0&&(o=new Intl.RelativeTimeFormat(e,t),Km.set(i,o)),o}let Fl=null;function R4(){return Fl||(Fl=new Intl.DateTimeFormat().resolvedOptions().locale,Fl)}const Hm=new Map;function iw(e){let t=Hm.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),Hm.set(e,t)),t}const Gm=new Map;function B4(e){let t=Gm.get(e);if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,"minimalDays"in t||(t={...ow,...t}),Gm.set(e,t)}return t}function L4(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,i;try{n=Wm(e).resolvedOptions(),i=e}catch{const l=e.substring(0,r);n=Wm(l).resolvedOptions(),i=l}const{numberingSystem:o,calendar:s}=n;return[i,o,s]}}function _4(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function j4(e){const t=[];for(let r=1;r<=12;r++){const n=ge.utc(2009,r,1);t.push(e(n))}return t}function z4(e){const t=[];for(let r=1;r<=7;r++){const n=ge.utc(2016,11,13+r);t.push(e(n))}return t}function tc(e,t,r,n){const i=e.listingMode();return i==="error"?null:i==="en"?r(t):n(t)}function U4(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||iw(e.locale).numberingSystem==="latn"}class q4{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:i,floor:o,...s}=n;if(!r||Object.keys(s).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=N4(t,a)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):og(t,3);return Mt(r,this.padTo)}}}class W4{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const s=-1*(t.offset/60),a=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;t.offset!==0&&Gi.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const o={...this.opts};o.timeZone=o.timeZone||i,this.dtf=Wm(r,o)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class V4{constructor(t,r,n){this.opts={style:"long",...n},!r&&fw()&&(this.rtf=O4(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):hD(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const ow={firstDay:1,minimalDays:4,weekend:[6,7]};class Je{static fromOpts(t){return Je.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,i,o=!1){const s=t||mt.defaultLocale,a=s||(o?"en-US":R4()),l=r||mt.defaultNumberingSystem,u=n||mt.defaultOutputCalendar,d=Ym(i)||mt.defaultWeekSettings;return new Je(a,l,u,d,s)}static resetCache(){Fl=null,qm.clear(),Vm.clear(),Km.clear(),Hm.clear(),Gm.clear()}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:i}={}){return Je.create(t,r,n,i)}constructor(t,r,n,i,o){const[s,a,l]=L4(t);this.locale=s,this.numberingSystem=r||a||null,this.outputCalendar=n||l||null,this.weekSettings=i,this.intl=_4(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=o,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=U4(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:Je.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Ym(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return tc(this,t,bw,()=>{const n=this.intl==="ja"||this.intl.startsWith("ja-");r&=!n;const i=r?{month:t,day:"numeric"}:{month:t},o=r?"format":"standalone";if(!this.monthsCache[o][t]){const s=n?a=>this.dtFormatter(a,i).format():a=>this.extract(a,i,"month");this.monthsCache[o][t]=j4(s)}return this.monthsCache[o][t]})}weekdays(t,r=!1){return tc(this,t,ww,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=r?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=z4(o=>this.extract(o,n,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return tc(this,void 0,()=>kw,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[ge.utc(2016,11,13,9),ge.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return tc(this,t,xw,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[ge.utc(-40,1,1),ge.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const i=this.dtFormatter(t,r),o=i.formatToParts(),s=o.find(a=>a.type.toLowerCase()===n);return s?s.value:null}numberFormatter(t={}){return new q4(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new W4(t,this.intl,r)}relFormatter(t={}){return new V4(this.intl,this.isEnglish(),t)}listFormatter(t={}){return I4(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||iw(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:hw()?B4(this.locale):ow}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let ch=null;class Nr extends ku{static get utcInstance(){return ch===null&&(ch=new Nr(0)),ch}static instance(t){return t===0?Nr.utcInstance:new Nr(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new Nr(_d(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Ul(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Ul(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return Ul(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class K4 extends ku{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function fo(e,t){if(he(e)||e===null)return t;if(e instanceof ku)return e;if(X4(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?Rd.instance:r==="utc"||r==="gmt"?Nr.utcInstance:Nr.parseSpecifier(r)||Gi.create(e)}else return po(e)?Nr.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new K4(e)}const tg={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Rb={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},H4=tg.hanidec.replace(/[\[|\]]/g,"").split("");function G4(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(tg.hanidec)!==-1)t+=H4.indexOf(e[r]);else for(const i in Rb){const[o,s]=Rb[i];n>=o&&n<=s&&(t+=n-o)}}return parseInt(t,10)}else return t}const Zm=new Map;function Z4(){Zm.clear()}function Vn({numberingSystem:e},t=""){const r=e||"latn";let n=Zm.get(r);n===void 0&&(n=new Map,Zm.set(r,n));let i=n.get(t);return i===void 0&&(i=new RegExp(`${tg[r]}${t}`),n.set(t,i)),i}let Bb=()=>Date.now(),Lb="system",_b=null,jb=null,zb=null,Ub=60,qb,Wb=null;class mt{static get now(){return Bb}static set now(t){Bb=t}static set defaultZone(t){Lb=t}static get defaultZone(){return fo(Lb,Rd.instance)}static get defaultLocale(){return _b}static set defaultLocale(t){_b=t}static get defaultNumberingSystem(){return jb}static set defaultNumberingSystem(t){jb=t}static get defaultOutputCalendar(){return zb}static set defaultOutputCalendar(t){zb=t}static get defaultWeekSettings(){return Wb}static set defaultWeekSettings(t){Wb=Ym(t)}static get twoDigitCutoffYear(){return Ub}static set twoDigitCutoffYear(t){Ub=t%100}static get throwOnInvalid(){return qb}static set throwOnInvalid(t){qb=t}static resetCaches(){Je.resetCache(),Gi.resetCache(),ge.resetCache(),Z4()}}class Jn{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const sw=[0,31,59,90,120,151,181,212,243,273,304,334],aw=[0,31,60,91,121,152,182,213,244,274,305,335];function On(e,t){return new Jn("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function rg(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const i=n.getUTCDay();return i===0?7:i}function lw(e,t,r){return r+(xu(e)?aw:sw)[t-1]}function uw(e,t){const r=xu(e)?aw:sw,n=r.findIndex(o=>o<t),i=t-r[n];return{month:n+1,day:i}}function ng(e,t){return(e-t+7)%7+1}function Gc(e,t=4,r=1){const{year:n,month:i,day:o}=e,s=lw(n,i,o),a=ng(rg(n,i,o),r);let l=Math.floor((s-a+14-t)/7),u;return l<1?(u=n-1,l=Jl(u,t,r)):l>Jl(n,t,r)?(u=n+1,l=1):u=n,{weekYear:u,weekNumber:l,weekday:a,...jd(e)}}function Vb(e,t=4,r=1){const{weekYear:n,weekNumber:i,weekday:o}=e,s=ng(rg(n,1,t),r),a=ea(n);let l=i*7+o-s-7+t,u;l<1?(u=n-1,l+=ea(u)):l>a?(u=n+1,l-=ea(n)):u=n;const{month:d,day:f}=uw(u,l);return{year:u,month:d,day:f,...jd(e)}}function dh(e){const{year:t,month:r,day:n}=e,i=lw(t,r,n);return{year:t,ordinal:i,...jd(e)}}function Kb(e){const{year:t,ordinal:r}=e,{month:n,day:i}=uw(t,r);return{year:t,month:n,day:i,...jd(e)}}function Hb(e,t){if(!he(e.localWeekday)||!he(e.localWeekNumber)||!he(e.localWeekYear)){if(!he(e.weekday)||!he(e.weekNumber)||!he(e.weekYear))throw new Ys("Cannot mix locale-based week fields with ISO-based week fields");return he(e.localWeekday)||(e.weekday=e.localWeekday),he(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),he(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Y4(e,t=4,r=1){const n=Bd(e.weekYear),i=Rn(e.weekNumber,1,Jl(e.weekYear,t,r)),o=Rn(e.weekday,1,7);return n?i?o?!1:On("weekday",e.weekday):On("week",e.weekNumber):On("weekYear",e.weekYear)}function J4(e){const t=Bd(e.year),r=Rn(e.ordinal,1,ea(e.year));return t?r?!1:On("ordinal",e.ordinal):On("year",e.year)}function cw(e){const t=Bd(e.year),r=Rn(e.month,1,12),n=Rn(e.day,1,Zc(e.year,e.month));return t?r?n?!1:On("day",e.day):On("month",e.month):On("year",e.year)}function dw(e){const{hour:t,minute:r,second:n,millisecond:i}=e,o=Rn(t,0,23)||t===24&&r===0&&n===0&&i===0,s=Rn(r,0,59),a=Rn(n,0,59),l=Rn(i,0,999);return o?s?a?l?!1:On("millisecond",i):On("second",n):On("minute",r):On("hour",t)}function he(e){return typeof e>"u"}function po(e){return typeof e=="number"}function Bd(e){return typeof e=="number"&&e%1===0}function X4(e){return typeof e=="string"}function Q4(e){return Object.prototype.toString.call(e)==="[object Date]"}function fw(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function hw(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function eD(e){return Array.isArray(e)?e:[e]}function Gb(e,t,r){if(e.length!==0)return e.reduce((n,i)=>{const o=[t(i),i];return n&&r(n[0],o[0])===n[0]?n:o},null)[1]}function tD(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function ca(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ym(e){if(e==null)return null;if(typeof e!="object")throw new $r("Week settings must be an object");if(!Rn(e.firstDay,1,7)||!Rn(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Rn(t,1,7)))throw new $r("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Rn(e,t,r){return Bd(e)&&e>=t&&e<=r}function rD(e,t){return e-t*Math.floor(e/t)}function Mt(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function so(e){if(!(he(e)||e===null||e===""))return parseInt(e,10)}function Wo(e){if(!(he(e)||e===null||e===""))return parseFloat(e)}function ig(e){if(!(he(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function og(e,t,r="round"){const n=10**t;switch(r){case"expand":return e>0?Math.ceil(e*n)/n:Math.floor(e*n)/n;case"trunc":return Math.trunc(e*n)/n;case"round":return Math.round(e*n)/n;case"floor":return Math.floor(e*n)/n;case"ceil":return Math.ceil(e*n)/n;default:throw new RangeError(`Value rounding ${r} is out of range`)}}function xu(e){return e%4===0&&(e%100!==0||e%400===0)}function ea(e){return xu(e)?366:365}function Zc(e,t){const r=rD(t-1,12)+1,n=e+(t-r)/12;return r===2?xu(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Ld(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Zb(e,t,r){return-ng(rg(e,1,t),r)+t-1}function Jl(e,t=4,r=1){const n=Zb(e,t,r),i=Zb(e+1,t,r);return(ea(e)-n+i)/7}function Jm(e){return e>99?e:e>mt.twoDigitCutoffYear?1900+e:2e3+e}function mw(e,t,r,n=null){const i=new Date(e),o={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(o.timeZone=n);const s={timeZoneName:t,...o},a=new Intl.DateTimeFormat(r,s).formatToParts(i).find(l=>l.type.toLowerCase()==="timezonename");return a?a.value:null}function _d(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,i=r<0||Object.is(r,-0)?-n:n;return r*60+i}function gw(e){const t=Number(e);if(typeof e=="boolean"||e===""||!Number.isFinite(t))throw new $r(`Invalid unit value ${e}`);return t}function Yc(e,t){const r={};for(const n in e)if(ca(e,n)){const i=e[n];if(i==null)continue;r[t(n)]=gw(i)}return r}function Ul(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${Mt(r,2)}:${Mt(n,2)}`;case"narrow":return`${i}${r}${n>0?`:${n}`:""}`;case"techie":return`${i}${Mt(r,2)}${Mt(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function jd(e){return tD(e,["hour","minute","second","millisecond"])}const nD=["January","February","March","April","May","June","July","August","September","October","November","December"],pw=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],iD=["J","F","M","A","M","J","J","A","S","O","N","D"];function bw(e){switch(e){case"narrow":return[...iD];case"short":return[...pw];case"long":return[...nD];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const yw=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],vw=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],oD=["M","T","W","T","F","S","S"];function ww(e){switch(e){case"narrow":return[...oD];case"short":return[...vw];case"long":return[...yw];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const kw=["AM","PM"],sD=["Before Christ","Anno Domini"],aD=["BC","AD"],lD=["B","A"];function xw(e){switch(e){case"narrow":return[...lD];case"short":return[...aD];case"long":return[...sD];default:return null}}function uD(e){return kw[e.hour<12?0:1]}function cD(e,t){return ww(t)[e.weekday-1]}function dD(e,t){return bw(t)[e.month-1]}function fD(e,t){return xw(t)[e.year<0?0:1]}function hD(e,t,r="always",n=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&o){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${i[e][0]}`;case-1:return f?"yesterday":`last ${i[e][0]}`;case 0:return f?"today":`this ${i[e][0]}`}}const s=Object.is(t,-0)||t<0,a=Math.abs(t),l=a===1,u=i[e],d=n?l?u[1]:u[2]||u[1]:l?i[e][0]:e;return s?`${a} ${d} ago`:`in ${a} ${d}`}function Yb(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const mD={D:Hc,DD:_2,DDD:j2,DDDD:z2,t:U2,tt:q2,ttt:W2,tttt:V2,T:K2,TT:H2,TTT:G2,TTTT:Z2,f:Y2,ff:X2,fff:ew,ffff:rw,F:J2,FF:Q2,FFF:tw,FFFF:nw};class Cr{static create(t,r={}){return new Cr(t,r)}static parseFormat(t){let r=null,n="",i=!1;const o=[];for(let s=0;s<t.length;s++){const a=t.charAt(s);a==="'"?((n.length>0||i)&&o.push({literal:i||/^\s+$/.test(n),val:n===""?"'":n}),r=null,n="",i=!i):i||a===r?n+=a:(n.length>0&&o.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&o.push({literal:i||/^\s+$/.test(n),val:n}),o}static macroTokenToFormatOpts(t){return mD[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0,n=void 0){if(this.opts.forceSimple)return Mt(t,r);const i={...this.opts};return r>0&&(i.padTo=r),n&&(i.signDisplay=n),this.loc.numberFormatter(i).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",o=(g,m)=>this.loc.extract(t,g,m),s=g=>t.isOffsetFixed&&t.offset===0&&g.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,g.format):"",a=()=>n?uD(t):o({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(g,m)=>n?dD(t,g):o(m?{month:g}:{month:g,day:"numeric"},"month"),u=(g,m)=>n?cD(t,g):o(m?{weekday:g}:{weekday:g,month:"long",day:"numeric"},"weekday"),d=g=>{const m=Cr.macroTokenToFormatOpts(g);return m?this.formatWithSystemDefault(t,m):g},f=g=>n?fD(t,g):o({era:g},"era"),h=g=>{switch(g){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?o({day:"numeric"},"day"):this.num(t.day);case"dd":return i?o({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return u("short",!0);case"cccc":return u("long",!0);case"ccccc":return u("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return u("short",!1);case"EEEE":return u("long",!1);case"EEEEE":return u("narrow",!1);case"L":return i?o({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?o({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return i?o({month:"numeric"},"month"):this.num(t.month);case"MM":return i?o({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return i?o({year:"numeric"},"year"):this.num(t.year);case"yy":return i?o({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?o({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?o({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return d(g)}};return Yb(Cr.parseFormat(r),h)}formatDurationFromString(t,r){const n=this.opts.signMode==="negativeLargestOnly"?-1:1,i=d=>{switch(d[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},o=(d,f)=>h=>{const g=i(h);if(g){const m=f.isNegativeDuration&&g!==f.largestUnit?n:1;let b;return this.opts.signMode==="negativeLargestOnly"&&g!==f.largestUnit?b="never":this.opts.signMode==="all"?b="always":b="auto",this.num(d.get(g)*m,h.length,b)}else return h},s=Cr.parseFormat(r),a=s.reduce((d,{literal:f,val:h})=>f?d:d.concat(h),[]),l=t.shiftTo(...a.map(i).filter(d=>d)),u={isNegativeDuration:l<0,largestUnit:Object.keys(l.values)[0]};return Yb(s,o(l,u))}}const $w=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Ra(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function Ba(...e){return t=>e.reduce(([r,n,i],o)=>{const[s,a,l]=o(t,i);return[{...r,...s},a||n,l]},[{},null,1]).slice(0,2)}function La(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const i=r.exec(e);if(i)return n(i)}return[null,null]}function Dw(...e){return(t,r)=>{const n={};let i;for(i=0;i<e.length;i++)n[e[i]]=so(t[r+i]);return[n,null,r+i]}}const Aw=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,gD=`(?:${Aw.source}?(?:\\[(${$w.source})\\])?)?`,sg=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Ew=RegExp(`${sg.source}${gD}`),ag=RegExp(`(?:[Tt]${Ew.source})?`),pD=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,bD=/(\d{4})-?W(\d\d)(?:-?(\d))?/,yD=/(\d{4})-?(\d{3})/,vD=Dw("weekYear","weekNumber","weekDay"),wD=Dw("year","ordinal"),kD=/(\d{4})-(\d\d)-(\d\d)/,Cw=RegExp(`${sg.source} ?(?:${Aw.source}|(${$w.source}))?`),xD=RegExp(`(?: ${Cw.source})?`);function ta(e,t,r){const n=e[t];return he(n)?r:so(n)}function $D(e,t){return[{year:ta(e,t),month:ta(e,t+1,1),day:ta(e,t+2,1)},null,t+3]}function _a(e,t){return[{hours:ta(e,t,0),minutes:ta(e,t+1,0),seconds:ta(e,t+2,0),milliseconds:ig(e[t+3])},null,t+4]}function $u(e,t){const r=!e[t]&&!e[t+1],n=_d(e[t+1],e[t+2]),i=r?null:Nr.instance(n);return[{},i,t+3]}function Du(e,t){const r=e[t]?Gi.create(e[t]):null;return[{},r,t+1]}const DD=RegExp(`^T?${sg.source}$`),AD=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function ED(e){const[t,r,n,i,o,s,a,l,u]=e,d=t[0]==="-",f=l&&l[0]==="-",h=(g,m=!1)=>g!==void 0&&(m||g&&d)?-g:g;return[{years:h(Wo(r)),months:h(Wo(n)),weeks:h(Wo(i)),days:h(Wo(o)),hours:h(Wo(s)),minutes:h(Wo(a)),seconds:h(Wo(l),l==="-0"),milliseconds:h(ig(u),f)}]}const CD={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function lg(e,t,r,n,i,o,s){const a={year:t.length===2?Jm(so(t)):so(t),month:pw.indexOf(r)+1,day:so(n),hour:so(i),minute:so(o)};return s&&(a.second=so(s)),e&&(a.weekday=e.length>3?yw.indexOf(e)+1:vw.indexOf(e)+1),a}const SD=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function TD(e){const[,t,r,n,i,o,s,a,l,u,d,f]=e,h=lg(t,i,n,r,o,s,a);let g;return l?g=CD[l]:u?g=0:g=_d(d,f),[h,new Nr(g)]}function MD(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const FD=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,PD=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,ID=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Jb(e){const[,t,r,n,i,o,s,a]=e;return[lg(t,i,n,r,o,s,a),Nr.utcInstance]}function ND(e){const[,t,r,n,i,o,s,a]=e;return[lg(t,a,r,n,i,o,s),Nr.utcInstance]}const OD=Ra(pD,ag),RD=Ra(bD,ag),BD=Ra(yD,ag),LD=Ra(Ew),Sw=Ba($D,_a,$u,Du),_D=Ba(vD,_a,$u,Du),jD=Ba(wD,_a,$u,Du),zD=Ba(_a,$u,Du);function UD(e){return La(e,[OD,Sw],[RD,_D],[BD,jD],[LD,zD])}function qD(e){return La(MD(e),[SD,TD])}function WD(e){return La(e,[FD,Jb],[PD,Jb],[ID,ND])}function VD(e){return La(e,[AD,ED])}const KD=Ba(_a);function HD(e){return La(e,[DD,KD])}const GD=Ra(kD,xD),ZD=Ra(Cw),YD=Ba(_a,$u,Du);function JD(e){return La(e,[GD,Sw],[ZD,YD])}const Xb="Invalid Duration",Tw={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},XD={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...Tw},Mn=146097/400,_s=146097/4800,QD={years:{quarters:4,months:12,weeks:Mn/7,days:Mn,hours:Mn*24,minutes:Mn*24*60,seconds:Mn*24*60*60,milliseconds:Mn*24*60*60*1e3},quarters:{months:3,weeks:Mn/28,days:Mn/4,hours:Mn*24/4,minutes:Mn*24*60/4,seconds:Mn*24*60*60/4,milliseconds:Mn*24*60*60*1e3/4},months:{weeks:_s/7,days:_s,hours:_s*24,minutes:_s*24*60,seconds:_s*24*60*60,milliseconds:_s*24*60*60*1e3},...Tw},rs=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],eA=rs.slice(0).reverse();function Pi(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new Ne(n)}function Mw(e,t){let r=t.milliseconds??0;for(const n of eA.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function Qb(e,t){const r=Mw(e,t)<0?-1:1;rs.reduceRight((n,i)=>{if(he(t[i]))return n;if(n){const o=t[n]*r,s=e[i][n],a=Math.floor(o/s);t[i]+=a*r,t[n]-=a*s*r}return i},null),rs.reduce((n,i)=>{if(he(t[i]))return n;if(n){const o=t[n]%1;t[n]-=o,t[i]+=o*e[n][i]}return i},null)}function ey(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class Ne{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?QD:XD;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||Je.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return Ne.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new $r(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new Ne({values:Yc(t,Ne.normalizeUnit),loc:Je.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(po(t))return Ne.fromMillis(t);if(Ne.isDuration(t))return t;if(typeof t=="object")return Ne.fromObject(t);throw new $r(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=VD(t);return n?Ne.fromObject(n,r):Ne.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=HD(t);return n?Ne.fromObject(n,r):Ne.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new $r("need to specify a reason the Duration is invalid");const n=t instanceof Jn?t:new Jn(t,r);if(mt.throwOnInvalid)throw new E4(n);return new Ne({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new L2(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?Cr.create(this.loc,n).formatDurationFromString(this,t):Xb}toHuman(t={}){if(!this.isValid)return Xb;const r=t.showZeros!==!1,n=rs.map(i=>{const o=this.values[i];return he(o)||o===0&&!r?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:i.slice(0,-1)}).format(o)}).filter(i=>i);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=og(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},ge.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Mw(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=Ne.fromDurationLike(t),n={};for(const i of rs)(ca(r.values,i)||ca(this.values,i))&&(n[i]=r.get(i)+this.get(i));return Pi(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=Ne.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=gw(t(this.values[n],n));return Pi(this,{values:r},!0)}get(t){return this[Ne.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,...Yc(t,Ne.normalizeUnit)};return Pi(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:i}={}){const s={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:i,conversionAccuracy:n};return Pi(this,s)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Qb(this.matrix,t),Pi(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=ey(this.normalize().shiftToAll().toObject());return Pi(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(s=>Ne.normalizeUnit(s));const r={},n={},i=this.toObject();let o;for(const s of rs)if(t.indexOf(s)>=0){o=s;let a=0;for(const u in n)a+=this.matrix[u][s]*n[u],n[u]=0;po(i[s])&&(a+=i[s]);const l=Math.trunc(a);r[s]=l,n[s]=(a*1e3-l*1e3)/1e3}else po(i[s])&&(n[s]=i[s]);for(const s in n)n[s]!==0&&(r[o]+=s===o?n[s]:n[s]/this.matrix[o][s]);return Qb(this.matrix,r),Pi(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return Pi(this,{values:t},!0)}removeZeros(){if(!this.isValid)return this;const t=ey(this.values);return Pi(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,i){return n===void 0||n===0?i===void 0||i===0:n===i}for(const n of rs)if(!r(this.values[n],t.values[n]))return!1;return!0}}const js="Invalid Interval";function tA(e,t){return!e||!e.isValid?wt.invalid("missing or invalid start"):!t||!t.isValid?wt.invalid("missing or invalid end"):t<e?wt.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class wt{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new $r("need to specify a reason the Interval is invalid");const n=t instanceof Jn?t:new Jn(t,r);if(mt.throwOnInvalid)throw new A4(n);return new wt({invalid:n})}static fromDateTimes(t,r){const n=dl(t),i=dl(r),o=tA(n,i);return o??new wt({start:n,end:i})}static after(t,r){const n=Ne.fromDurationLike(r),i=dl(t);return wt.fromDateTimes(i,i.plus(n))}static before(t,r){const n=Ne.fromDurationLike(r),i=dl(t);return wt.fromDateTimes(i.minus(n),i)}static fromISO(t,r){const[n,i]=(t||"").split("/",2);if(n&&i){let o,s;try{o=ge.fromISO(n,r),s=o.isValid}catch{s=!1}let a,l;try{a=ge.fromISO(i,r),l=a.isValid}catch{l=!1}if(s&&l)return wt.fromDateTimes(o,a);if(s){const u=Ne.fromISO(i,r);if(u.isValid)return wt.after(o,u)}else if(l){const u=Ne.fromISO(n,r);if(u.isValid)return wt.before(a,u)}}return wt.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let i;return r?.useLocaleWeeks?i=this.end.reconfigure({locale:n.locale}):i=this.end,i=i.startOf(t,r),Math.floor(i.diff(n,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?wt.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(dl).filter(s=>this.contains(s)).sort((s,a)=>s.toMillis()-a.toMillis()),n=[];let{s:i}=this,o=0;for(;i<this.e;){const s=r[o]||this.e,a=+s>+this.e?this.e:s;n.push(wt.fromDateTimes(i,a)),i=a,o+=1}return n}splitBy(t){const r=Ne.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,i=1,o;const s=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(l=>l*i));o=+a>+this.e?this.e:a,s.push(wt.fromDateTimes(n,o)),n=o,i+=1}return s}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:wt.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return wt.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((i,o)=>i.s-o.s).reduce(([i,o],s)=>o?o.overlaps(s)||o.abutsStart(s)?[i,o.union(s)]:[i.concat([o]),s]:[i,s],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const i=[],o=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),s=Array.prototype.concat(...o),a=s.sort((l,u)=>l.time-u.time);for(const l of a)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&i.push(wt.fromDateTimes(r,l.time)),r=null);return wt.merge(i)}difference(...t){return wt.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:js}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Hc,r={}){return this.isValid?Cr.create(this.s.loc.clone(r),t).formatInterval(this):js}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:js}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:js}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:js}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:js}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):Ne.invalid(this.invalidReason)}mapEndpoints(t){return wt.fromDateTimes(t(this.s),t(this.e))}}class rc{static hasDST(t=mt.defaultZone){const r=ge.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return Gi.isValidZone(t)}static normalizeZone(t){return fo(t,mt.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||Je.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||Je.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||Je.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||Je.create(r,n,o)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||Je.create(r,n,o)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||Je.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||Je.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return Je.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return Je.create(r,null,"gregory").eras(t)}static features(){return{relative:fw(),localeWeek:hw()}}}function ty(e,t){const r=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(Ne.fromMillis(n).as("days"))}function rA(e,t,r){const n=[["years",(l,u)=>u.year-l.year],["quarters",(l,u)=>u.quarter-l.quarter+(u.year-l.year)*4],["months",(l,u)=>u.month-l.month+(u.year-l.year)*12],["weeks",(l,u)=>{const d=ty(l,u);return(d-d%7)/7}],["days",ty]],i={},o=e;let s,a;for(const[l,u]of n)r.indexOf(l)>=0&&(s=l,i[l]=u(e,t),a=o.plus(i),a>t?(i[l]--,e=o.plus(i),e>t&&(a=e,i[l]--,e=o.plus(i))):e=a);return[e,i,a,s]}function nA(e,t,r,n){let[i,o,s,a]=rA(e,t,r);const l=t-i,u=r.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);u.length===0&&(s<t&&(s=i.plus({[a]:1})),s!==i&&(o[a]=(o[a]||0)+l/(s-i)));const d=Ne.fromObject(o,n);return u.length>0?Ne.fromMillis(l,n).shiftTo(...u).plus(d):d}const iA="missing Intl.DateTimeFormat.formatToParts support";function qe(e,t=r=>r){return{regex:e,deser:([r])=>t(G4(r))}}const oA=" ",Fw=`[ ${oA}]`,Pw=new RegExp(Fw,"g");function sA(e){return e.replace(/\./g,"\\.?").replace(Pw,Fw)}function ry(e){return e.replace(/\./g,"").replace(Pw," ").toLowerCase()}function Kn(e,t){return e===null?null:{regex:RegExp(e.map(sA).join("|")),deser:([r])=>e.findIndex(n=>ry(r)===ry(n))+t}}function ny(e,t){return{regex:e,deser:([,r,n])=>_d(r,n),groups:t}}function nc(e){return{regex:e,deser:([t])=>t}}function aA(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function lA(e,t){const r=Vn(t),n=Vn(t,"{2}"),i=Vn(t,"{3}"),o=Vn(t,"{4}"),s=Vn(t,"{6}"),a=Vn(t,"{1,2}"),l=Vn(t,"{1,3}"),u=Vn(t,"{1,6}"),d=Vn(t,"{1,9}"),f=Vn(t,"{2,4}"),h=Vn(t,"{4,6}"),g=y=>({regex:RegExp(aA(y.val)),deser:([x])=>x,literal:!0}),b=(y=>{if(e.literal)return g(y);switch(y.val){case"G":return Kn(t.eras("short"),0);case"GG":return Kn(t.eras("long"),0);case"y":return qe(u);case"yy":return qe(f,Jm);case"yyyy":return qe(o);case"yyyyy":return qe(h);case"yyyyyy":return qe(s);case"M":return qe(a);case"MM":return qe(n);case"MMM":return Kn(t.months("short",!0),1);case"MMMM":return Kn(t.months("long",!0),1);case"L":return qe(a);case"LL":return qe(n);case"LLL":return Kn(t.months("short",!1),1);case"LLLL":return Kn(t.months("long",!1),1);case"d":return qe(a);case"dd":return qe(n);case"o":return qe(l);case"ooo":return qe(i);case"HH":return qe(n);case"H":return qe(a);case"hh":return qe(n);case"h":return qe(a);case"mm":return qe(n);case"m":return qe(a);case"q":return qe(a);case"qq":return qe(n);case"s":return qe(a);case"ss":return qe(n);case"S":return qe(l);case"SSS":return qe(i);case"u":return nc(d);case"uu":return nc(a);case"uuu":return qe(r);case"a":return Kn(t.meridiems(),0);case"kkkk":return qe(o);case"kk":return qe(f,Jm);case"W":return qe(a);case"WW":return qe(n);case"E":case"c":return qe(r);case"EEE":return Kn(t.weekdays("short",!1),1);case"EEEE":return Kn(t.weekdays("long",!1),1);case"ccc":return Kn(t.weekdays("short",!0),1);case"cccc":return Kn(t.weekdays("long",!0),1);case"Z":case"ZZ":return ny(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return ny(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return nc(/[a-z_+-/]{1,256}?/i);case" ":return nc(/[^\S\n\r]/);default:return g(y)}})(e)||{invalidReason:iA};return b.token=e,b}const uA={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function cA(e,t,r){const{type:n,value:i}=e;if(n==="literal"){const l=/^\s+$/.test(i);return{literal:!l,val:l?" ":i}}const o=t[n];let s=n;n==="hour"&&(t.hour12!=null?s=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?s="hour12":s="hour24":s=r.hour12?"hour12":"hour24");let a=uA[s];if(typeof a=="object"&&(a=a[o]),a)return{literal:!1,val:a}}function dA(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function fA(e,t,r){const n=e.match(t);if(n){const i={};let o=1;for(const s in r)if(ca(r,s)){const a=r[s],l=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(n.slice(o,o+l))),o+=l}return[n,i]}else return[n,{}]}function hA(e){const t=o=>{switch(o){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return he(e.z)||(r=Gi.create(e.z)),he(e.Z)||(r||(r=new Nr(e.Z)),n=e.Z),he(e.q)||(e.M=(e.q-1)*3+1),he(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),he(e.u)||(e.S=ig(e.u)),[Object.keys(e).reduce((o,s)=>{const a=t(s);return a&&(o[a]=e[s]),o},{}),r,n]}let fh=null;function mA(){return fh||(fh=ge.fromMillis(1555555555555)),fh}function gA(e,t){if(e.literal)return e;const r=Cr.macroTokenToFormatOpts(e.val),n=Rw(r,t);return n==null||n.includes(void 0)?e:n}function Iw(e,t){return Array.prototype.concat(...e.map(r=>gA(r,t)))}class Nw{constructor(t,r){if(this.locale=t,this.format=r,this.tokens=Iw(Cr.parseFormat(r),t),this.units=this.tokens.map(n=>lA(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,i]=dA(this.units);this.regex=RegExp(n,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[r,n]=fA(t,this.regex,this.handlers),[i,o,s]=n?hA(n):[null,null,void 0];if(ca(n,"a")&&ca(n,"H"))throw new Ys("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:i,zone:o,specificOffset:s}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function Ow(e,t,r){return new Nw(e,r).explainFromTokens(t)}function pA(e,t,r){const{result:n,zone:i,specificOffset:o,invalidReason:s}=Ow(e,t,r);return[n,i,o,s]}function Rw(e,t){if(!e)return null;const n=Cr.create(t,e).dtFormatter(mA()),i=n.formatToParts(),o=n.resolvedOptions();return i.map(s=>cA(s,e,o))}const hh="Invalid DateTime",iy=864e13;function Pl(e){return new Jn("unsupported zone",`the zone "${e.name}" is not supported`)}function mh(e){return e.weekData===null&&(e.weekData=Gc(e.c)),e.weekData}function gh(e){return e.localWeekData===null&&(e.localWeekData=Gc(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function Vo(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new ge({...r,...t,old:r})}function Bw(e,t,r){let n=e-t*60*1e3;const i=r.offset(n);if(t===i)return[n,t];n-=(i-t)*60*1e3;const o=r.offset(n);return i===o?[n,i]:[e-Math.min(i,o)*60*1e3,Math.max(i,o)]}function ic(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function Fc(e,t,r){return Bw(Ld(e),t,r)}function oy(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,o={...e.c,year:n,month:i,day:Math.min(e.c.day,Zc(n,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},s=Ne.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=Ld(o);let[l,u]=Bw(a,r,e.zone);return s!==0&&(l+=s,u=e.zone.offset(l)),{ts:l,o:u}}function zs(e,t,r,n,i,o){const{setZone:s,zone:a}=r;if(e&&Object.keys(e).length!==0||t){const l=t||a,u=ge.fromObject(e,{...r,zone:l,specificOffset:o});return s?u:u.setZone(a)}else return ge.invalid(new Jn("unparsable",`the input "${i}" can't be parsed as ${n}`))}function oc(e,t,r=!0){return e.isValid?Cr.create(Je.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function ph(e,t,r){const n=e.c.year>9999||e.c.year<0;let i="";if(n&&e.c.year>=0&&(i+="+"),i+=Mt(e.c.year,n?6:4),r==="year")return i;if(t){if(i+="-",i+=Mt(e.c.month),r==="month")return i;i+="-"}else if(i+=Mt(e.c.month),r==="month")return i;return i+=Mt(e.c.day),i}function sy(e,t,r,n,i,o,s){let a=!r||e.c.millisecond!==0||e.c.second!==0,l="";switch(s){case"day":case"month":case"year":break;default:if(l+=Mt(e.c.hour),s==="hour")break;if(t){if(l+=":",l+=Mt(e.c.minute),s==="minute")break;a&&(l+=":",l+=Mt(e.c.second))}else{if(l+=Mt(e.c.minute),s==="minute")break;a&&(l+=Mt(e.c.second))}if(s==="second")break;a&&(!n||e.c.millisecond!==0)&&(l+=".",l+=Mt(e.c.millisecond,3))}return i&&(e.isOffsetFixed&&e.offset===0&&!o?l+="Z":e.o<0?(l+="-",l+=Mt(Math.trunc(-e.o/60)),l+=":",l+=Mt(Math.trunc(-e.o%60))):(l+="+",l+=Mt(Math.trunc(e.o/60)),l+=":",l+=Mt(Math.trunc(e.o%60)))),o&&(l+="["+e.zone.ianaName+"]"),l}const Lw={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},bA={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},yA={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Pc=["year","month","day","hour","minute","second","millisecond"],vA=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],wA=["year","ordinal","hour","minute","second","millisecond"];function Ic(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new L2(e);return t}function ay(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return Ic(e)}}function kA(e){if(Il===void 0&&(Il=mt.now()),e.type!=="iana")return e.offset(Il);const t=e.name;let r=Xm.get(t);return r===void 0&&(r=e.offset(Il),Xm.set(t,r)),r}function ly(e,t){const r=fo(t.zone,mt.defaultZone);if(!r.isValid)return ge.invalid(Pl(r));const n=Je.fromObject(t);let i,o;if(he(e.year))i=mt.now();else{for(const l of Pc)he(e[l])&&(e[l]=Lw[l]);const s=cw(e)||dw(e);if(s)return ge.invalid(s);const a=kA(r);[i,o]=Fc(e,a,r)}return new ge({ts:i,zone:r,loc:n,o})}function uy(e,t,r){const n=he(r.round)?!0:r.round,i=he(r.rounding)?"trunc":r.rounding,o=(a,l)=>(a=og(a,n||r.calendary?0:2,r.calendary?"round":i),t.loc.clone(r).relFormatter(r).format(a,l)),s=a=>r.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(r.unit)return o(s(r.unit),r.unit);for(const a of r.units){const l=s(a);if(Math.abs(l)>=1)return o(l,a)}return o(e>t?-0:0,r.units[r.units.length-1])}function cy(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let Il;const Xm=new Map;class ge{constructor(t){const r=t.zone||mt.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new Jn("invalid input"):null)||(r.isValid?null:Pl(r));this.ts=he(t.ts)?mt.now():t.ts;let i=null,o=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[i,o]=[t.old.c,t.old.o];else{const a=po(t.o)&&!t.old?t.o:r.offset(this.ts);i=ic(this.ts,a),n=Number.isNaN(i.year)?new Jn("invalid input"):null,i=n?null:i,o=n?null:a}this._zone=r,this.loc=t.loc||Je.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=i,this.o=o,this.isLuxonDateTime=!0}static now(){return new ge({})}static local(){const[t,r]=cy(arguments),[n,i,o,s,a,l,u]=r;return ly({year:n,month:i,day:o,hour:s,minute:a,second:l,millisecond:u},t)}static utc(){const[t,r]=cy(arguments),[n,i,o,s,a,l,u]=r;return t.zone=Nr.utcInstance,ly({year:n,month:i,day:o,hour:s,minute:a,second:l,millisecond:u},t)}static fromJSDate(t,r={}){const n=Q4(t)?t.valueOf():NaN;if(Number.isNaN(n))return ge.invalid("invalid input");const i=fo(r.zone,mt.defaultZone);return i.isValid?new ge({ts:n,zone:i,loc:Je.fromObject(r)}):ge.invalid(Pl(i))}static fromMillis(t,r={}){if(po(t))return t<-iy||t>iy?ge.invalid("Timestamp out of range"):new ge({ts:t,zone:fo(r.zone,mt.defaultZone),loc:Je.fromObject(r)});throw new $r(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(po(t))return new ge({ts:t*1e3,zone:fo(r.zone,mt.defaultZone),loc:Je.fromObject(r)});throw new $r("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=fo(r.zone,mt.defaultZone);if(!n.isValid)return ge.invalid(Pl(n));const i=Je.fromObject(r),o=Yc(t,ay),{minDaysInFirstWeek:s,startOfWeek:a}=Hb(o,i),l=mt.now(),u=he(r.specificOffset)?n.offset(l):r.specificOffset,d=!he(o.ordinal),f=!he(o.year),h=!he(o.month)||!he(o.day),g=f||h,m=o.weekYear||o.weekNumber;if((g||d)&&m)throw new Ys("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(h&&d)throw new Ys("Can't mix ordinal dates with month/day");const b=m||o.weekday&&!g;let y,x,D=ic(l,u);b?(y=vA,x=bA,D=Gc(D,s,a)):d?(y=wA,x=yA,D=dh(D)):(y=Pc,x=Lw);let C=!1;for(const ye of y){const ae=o[ye];he(ae)?C?o[ye]=x[ye]:o[ye]=D[ye]:C=!0}const P=b?Y4(o,s,a):d?J4(o):cw(o),O=P||dw(o);if(O)return ge.invalid(O);const H=b?Vb(o,s,a):d?Kb(o):o,[ee,oe]=Fc(H,u,n),X=new ge({ts:ee,zone:n,o:oe,loc:i});return o.weekday&&g&&t.weekday!==X.weekday?ge.invalid("mismatched weekday",`you can't specify both a weekday of ${o.weekday} and a date of ${X.toISO()}`):X.isValid?X:ge.invalid(X.invalid)}static fromISO(t,r={}){const[n,i]=UD(t);return zs(n,i,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,i]=qD(t);return zs(n,i,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,i]=WD(t);return zs(n,i,r,"HTTP",r)}static fromFormat(t,r,n={}){if(he(t)||he(r))throw new $r("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:o=null}=n,s=Je.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0}),[a,l,u,d]=pA(s,t,r);return d?ge.invalid(d):zs(a,l,n,`format ${r}`,t,u)}static fromString(t,r,n={}){return ge.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,i]=JD(t);return zs(n,i,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new $r("need to specify a reason the DateTime is invalid");const n=t instanceof Jn?t:new Jn(t,r);if(mt.throwOnInvalid)throw new D4(n);return new ge({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=Rw(t,Je.fromObject(r));return n?n.map(i=>i?i.val:null).join(""):null}static expandFormat(t,r={}){return Iw(Cr.parseFormat(t),Je.fromObject(r)).map(i=>i.val).join("")}static resetCache(){Il=void 0,Xm.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?mh(this).weekYear:NaN}get weekNumber(){return this.isValid?mh(this).weekNumber:NaN}get weekday(){return this.isValid?mh(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?gh(this).weekday:NaN}get localWeekNumber(){return this.isValid?gh(this).weekNumber:NaN}get localWeekYear(){return this.isValid?gh(this).weekYear:NaN}get ordinal(){return this.isValid?dh(this.c).ordinal:NaN}get monthShort(){return this.isValid?rc.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?rc.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?rc.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?rc.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=Ld(this.c),i=this.zone.offset(n-t),o=this.zone.offset(n+t),s=this.zone.offset(n-i*r),a=this.zone.offset(n-o*r);if(s===a)return[this];const l=n-s*r,u=n-a*r,d=ic(l,s),f=ic(u,a);return d.hour===f.hour&&d.minute===f.minute&&d.second===f.second&&d.millisecond===f.millisecond?[Vo(this,{ts:l}),Vo(this,{ts:u})]:[this]}get isInLeapYear(){return xu(this.year)}get daysInMonth(){return Zc(this.year,this.month)}get daysInYear(){return this.isValid?ea(this.year):NaN}get weeksInWeekYear(){return this.isValid?Jl(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Jl(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:i}=Cr.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:i}}toUTC(t=0,r={}){return this.setZone(Nr.instance(t),r)}toLocal(){return this.setZone(mt.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=fo(t,mt.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(r||n){const o=t.offset(this.ts),s=this.toObject();[i]=Fc(s,o,t)}return Vo(this,{ts:i,zone:t})}else return ge.invalid(Pl(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const i=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return Vo(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=Yc(t,ay),{minDaysInFirstWeek:n,startOfWeek:i}=Hb(r,this.loc),o=!he(r.weekYear)||!he(r.weekNumber)||!he(r.weekday),s=!he(r.ordinal),a=!he(r.year),l=!he(r.month)||!he(r.day),u=a||l,d=r.weekYear||r.weekNumber;if((u||s)&&d)throw new Ys("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&s)throw new Ys("Can't mix ordinal dates with month/day");let f;o?f=Vb({...Gc(this.c,n,i),...r},n,i):he(r.ordinal)?(f={...this.toObject(),...r},he(r.day)&&(f.day=Math.min(Zc(f.year,f.month),f.day))):f=Kb({...dh(this.c),...r});const[h,g]=Fc(f,this.o,this.zone);return Vo(this,{ts:h,o:g})}plus(t){if(!this.isValid)return this;const r=Ne.fromDurationLike(t);return Vo(this,oy(this,r))}minus(t){if(!this.isValid)return this;const r=Ne.fromDurationLike(t).negate();return Vo(this,oy(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},i=Ne.normalizeUnit(t);switch(i){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(i==="weeks")if(r){const o=this.loc.getStartOfWeek(),{weekday:s}=this;s<o&&(n.weekNumber=this.weekNumber-1),n.weekday=o}else n.weekday=1;if(i==="quarters"){const o=Math.ceil(this.month/3);n.month=(o-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?Cr.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):hh}toLocaleString(t=Hc,r={}){return this.isValid?Cr.create(this.loc.clone(r),t).formatDateTime(this):hh}toLocaleParts(t={}){return this.isValid?Cr.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:i=!0,extendedZone:o=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=Ic(s);const a=t==="extended";let l=ph(this,a,s);return Pc.indexOf(s)>=3&&(l+="T"),l+=sy(this,a,r,n,i,o,s),l}toISODate({format:t="extended",precision:r="day"}={}){return this.isValid?ph(this,t==="extended",Ic(r)):null}toISOWeekDate(){return oc(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:i=!1,extendedZone:o=!1,format:s="extended",precision:a="milliseconds"}={}){return this.isValid?(a=Ic(a),(i&&Pc.indexOf(a)>=3?"T":"")+sy(this,s==="extended",r,t,n,o,a)):null}toRFC2822(){return oc(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return oc(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?ph(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let i="HH:mm:ss.SSS";return(r||t)&&(n&&(i+=" "),r?i+="z":t&&(i+="ZZ")),oc(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():hh}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return Ne.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...n},o=eD(r).map(Ne.normalizeUnit),s=t.valueOf()>this.valueOf(),a=s?this:t,l=s?t:this,u=nA(a,l,o,i);return s?u.negate():u}diffNow(t="milliseconds",r={}){return this.diff(ge.now(),t,r)}until(t){return this.isValid?wt.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const i=t.valueOf(),o=this.setZone(t.zone,{keepLocalTime:!0});return o.startOf(r,n)<=i&&i<=o.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||ge.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],o=t.unit;return Array.isArray(t.unit)&&(i=t.unit,o=void 0),uy(r,this.plus(n),{...t,numeric:"always",units:i,unit:o})}toRelativeCalendar(t={}){return this.isValid?uy(t.base||ge.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(ge.isDateTime))throw new $r("min requires all arguments be DateTimes");return Gb(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(ge.isDateTime))throw new $r("max requires all arguments be DateTimes");return Gb(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:i=null,numberingSystem:o=null}=n,s=Je.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});return Ow(s,t,r)}static fromStringExplain(t,r,n={}){return ge.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:i=null}=r,o=Je.fromOpts({locale:n,numberingSystem:i,defaultToEN:!0});return new Nw(o,t)}static fromFormatParser(t,r,n={}){if(he(t)||he(r))throw new $r("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:o=null}=n,s=Je.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});if(!s.equals(r.locale))throw new $r(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${r.locale}`);const{result:a,zone:l,specificOffset:u,invalidReason:d}=r.explainFromTokens(t);return d?ge.invalid(d):zs(a,l,n,`format ${r.format}`,t,u)}static get DATE_SHORT(){return Hc}static get DATE_MED(){return _2}static get DATE_MED_WITH_WEEKDAY(){return C4}static get DATE_FULL(){return j2}static get DATE_HUGE(){return z2}static get TIME_SIMPLE(){return U2}static get TIME_WITH_SECONDS(){return q2}static get TIME_WITH_SHORT_OFFSET(){return W2}static get TIME_WITH_LONG_OFFSET(){return V2}static get TIME_24_SIMPLE(){return K2}static get TIME_24_WITH_SECONDS(){return H2}static get TIME_24_WITH_SHORT_OFFSET(){return G2}static get TIME_24_WITH_LONG_OFFSET(){return Z2}static get DATETIME_SHORT(){return Y2}static get DATETIME_SHORT_WITH_SECONDS(){return J2}static get DATETIME_MED(){return X2}static get DATETIME_MED_WITH_SECONDS(){return Q2}static get DATETIME_MED_WITH_WEEKDAY(){return S4}static get DATETIME_FULL(){return ew}static get DATETIME_FULL_WITH_SECONDS(){return tw}static get DATETIME_HUGE(){return rw}static get DATETIME_HUGE_WITH_SECONDS(){return nw}}function dl(e){if(ge.isDateTime(e))return e;if(e&&e.valueOf&&po(e.valueOf()))return ge.fromJSDate(e);if(e&&typeof e=="object")return ge.fromObject(e);throw new $r(`Unknown datetime argument: ${e}, of type ${typeof e}`)}Intl.DateTimeFormat().resolvedOptions().locale;var J;(function(e){e.Year="year",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(J||(J={}));J.Year,J.Hour,J.Minute,J.Second,J.Millisecond;J.Month,J.Week,J.Day;J.Millisecond,J.Second,J.Minute,J.Hour,J.Day,J.Week,J.Month,J.Year;const dy={min:0,max:23},fy={min:0,max:59},hy={min:0,max:59},my={min:0,max:999};var pe;(function(e){e.Years="years",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(pe||(pe={}));const xA=[pe.Milliseconds,pe.Seconds,pe.Minutes,pe.Hours,pe.Days,pe.Weeks,pe.Months,pe.Years];pe.Milliseconds+"",pe.Seconds+"",pe.Minutes+"",pe.Hours+"",pe.Days+"",pe.Weeks+"",pe.Months+"",pe.Years+"";pe.Years+"",J.Year,pe.Months+"",J.Month,pe.Weeks+"",J.Week,pe.Days+"",J.Day,pe.Hours+"",J.Hour,pe.Minutes+"",J.Minute,pe.Seconds+"",J.Second,pe.Milliseconds+"",J.Millisecond;J.Year+"",pe.Years,J.Month+"",pe.Months,J.Week+"",pe.Weeks,J.Day+"",pe.Days,J.Hour+"",pe.Hours,J.Minute+"",pe.Minutes,J.Second+"",pe.Seconds,J.Millisecond+"",pe.Milliseconds;function $A(e){return xA.filter(t=>e[t])}function Qm(e,{decimalCount:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function DA(e){return Qm(Math.max(e-.4,0),{decimalCount:0})}function gy(e){return e===0?0:Math.sign(e)}function da(e,t,r={}){const n={},i={decimalCount:r.decimalCount==null?void 0:Math.round(Math.abs(r.decimalCount))},o=Object.values(e).includes(1/0),s=Object.values(e).includes(-1/0),a=$A(t).reverse();if(o||s)return a.forEach(d=>{n[d]=o?1/0:-1/0}),n;let l=Ne.fromObject(e).as(pe.Milliseconds);const u=gy(l);return a.forEach((d,f)=>{const h=f===a.length-1;if(d===pe.Milliseconds)n.milliseconds=Qm(l,i);else{const g=Ne.fromObject({milliseconds:l}).as(d),m=Math.sign(g),b=Math.abs(g),y=h?Qm(b,i):Math.floor(i.decimalCount==null?b:DA(b)),x=y===0?0:y*m;n[d]=x,l-=Ne.fromObject({[d]:x}).as(pe.Milliseconds),u!==gy(l)&&(l=0)}}),n}var Dr;(function(e){e.Sunday="sunday",e.Monday="monday",e.Tuesday="tuesday",e.Wednesday="wednesday",e.Thursday="thursday",e.Friday="friday",e.Saturday="saturday"})(Dr||(Dr={}));Dr.Sunday+"",Dr.Monday+"",Dr.Tuesday+"",Dr.Wednesday+"",Dr.Thursday+"",Dr.Friday+"",Dr.Saturday+"";Dr.Sunday,Dr.Monday,Dr.Tuesday,Dr.Wednesday,Dr.Thursday,Dr.Friday,Dr.Saturday;var Hr;(function(e){e.January="january",e.February="february",e.March="march",e.April="april",e.May="may",e.June="june",e.July="july",e.August="august",e.September="september",e.October="october",e.November="november",e.December="december"})(Hr||(Hr={}));Hr.January,Hr.February,Hr.March,Hr.April,Hr.May,Hr.June,Hr.July,Hr.August,Hr.September,Hr.October,Hr.November,Hr.December;const py={min:1,max:12},by={min:1,max:31};function zd(e){const t=new Kc,n=Object.values(e).some(i=>i===1/0||i===-1/0)?1/0:da(e,{milliseconds:!0}).milliseconds;return n!==1/0&&n!==-1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}function _w(...e){const t=e.join(""),r=Od(Array.from(t));return Array.from(r).join("")}function jw(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function zw(e,t){const r=_w([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return Uw(e,r)}function Uw(e,t){const r=_w(t);return typeof e=="string"?new RegExp(jw(e),r):new RegExp(e.source,r)}function qw(e,{caseSensitive:t}){const n="".replaceAll("i","");return Uw(e,n)}function ug(e,t=1){return e.split(`
`).map(r=>["    ".repeat(Math.round(t)),r].join("")).join(`
`)}function Ww(e,t){return t?typeof t=="string"?!!new RegExp(jw(t),"i").exec(e):!!zw(t,"i").exec(e):!1}class k extends Error{name="AssertionError";constructor(t,r){super(Na(r,t)||"Assertion failed.")}}const yy={interval:{milliseconds:100},timeout:{seconds:10}},bh=Symbol("not set");async function AA(e,t,r){const{callback:n,extraAssertionArgs:i,failureMessage:o,options:s}=EA(t),a=da(s.timeout,{milliseconds:!0}).milliseconds,l=da(s.interval,{milliseconds:!0});let u=bh,d;async function f(){try{u=r?n():await n(),e(u,...i)}catch(g){u=bh,d=xt(g)}}const h=Date.now();for(;u===bh;)if(await f(),await zd(l),Date.now()-h>=a){const m=`${o?`${o}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw Oa(d,m)}return u}function B(e,t=!1){return((...r)=>AA(e,r,t))}function EA(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:Vw(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Vw(e){return{interval:e?.interval||yy.interval,timeout:e?.timeout||yy.timeout}}const fl={isFalse(e,t){if(e!==!1)throw new k(`'${$(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new k(`'${$(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new k(`'${$(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new k(`'${$(e)}' is not truthy.`,t)}},Kw={assert:fl,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new k(`'${$(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new k(`'${$(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new k(`'${$(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new k(`'${$(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:B(fl.isFalse),isFalsy:B(fl.isFalsy),isTrue:B(fl.isTrue),isTruthy:B(fl.isTruthy)}};function CA(e,t,r){if(typeof e=="string"){if(!e.endsWith(t))throw new k(`${$(e)} does not end with ${$(t)}}`,r)}else if(e[e.length-1]!==t)throw new k(`${$(e)} does not end with ${$(t)}}`,r)}function SA(e,t,r){if(typeof e=="string"){if(e.endsWith(t))throw new k(`${$(e)} ends with ${$(t)}}`,r)}else if(e[e.length-1]===t)throw new k(`${$(e)} ends with ${$(t)}}`,r)}function TA(e,t,r){if(typeof e=="string"){if(!e.startsWith(t))throw new k(`${$(e)} does not start with ${$(t)}}`,r)}else if(e[0]!==t)throw new k(`${$(e)} does not start with ${$(t)}}`,r)}function MA(e,t,r){if(typeof e=="string"){if(e.startsWith(t))throw new k(`${$(e)} starts with ${$(t)}}`,r)}else if(e[0]===t)throw new k(`${$(e)} starts with ${$(t)}}`,r)}const hl={endsWith:CA,endsWithout:SA,startsWith:TA,startsWithout:MA},Hw={assert:hl,check:{endsWith:((e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t),endsWithout:((e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t),startsWith:((e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t),startsWithout:((e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t)},assertWrap:{endsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new k(`${$(e)} does not end with ${$(t)}}`,r)}else if(e[e.length-1]!==t)throw new k(`${$(e)} does not end with ${$(t)}}`,r);return e}),endsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.endsWith(t))throw new k(`${$(e)} ends with ${$(t)}}`,r)}else if(e[e.length-1]===t)throw new k(`${$(e)} ends with ${$(t)}}`,r);return e}),startsWith:((e,t,r)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new k(`${$(e)} does not start with ${$(t)}}`,r)}else if(e[0]!==t)throw new k(`${$(e)} does not start with ${$(t)}}`,r);return e}),startsWithout:((e,t,r)=>{if(typeof e=="string"){if(e.startsWith(t))throw new k(`${$(e)} starts with ${$(t)}}`,r)}else if(e[0]===t)throw new k(`${$(e)} starts with ${$(t)}}`,r);return e})},checkWrap:{endsWith:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e}),endsWithout:((e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e}),startsWith:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e}),startsWithout:((e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e})},waitUntil:{endsWith:B(hl.endsWith),endsWithout:B(hl.endsWithout),startsWith:B(hl.startsWith),startsWithout:B(hl.startsWithout)}};function FA(e,t,r){const n=dn(t);if(!n.includes(e))throw new k(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}function Ri(e,t){return dn(t).includes(e)}const yh={isEnumValue(e,t,r){FA(e,t,r)},isNotEnumValue(e,t,r){const n=dn(t);if(n.includes(e))throw new k(`${String(e)} is an enum value in '${n.join(",")}'.`,r)}},Gw={assert:yh,check:{isEnumValue:Ri,isNotEnumValue(e,t){return!dn(t).includes(e)}},assertWrap:{isEnumValue(e,t,r){const n=dn(t);if(!n.includes(e))throw new k(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e},isNotEnumValue(e,t,r){const n=dn(t);if(n.includes(e))throw new k(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e}},checkWrap:{isEnumValue(e,t){if(dn(t).includes(e))return e},isNotEnumValue(e,t){if(!dn(t).includes(e))return e}},waitUntil:{isEnumValue:B(yh.isEnumValue),isNotEnumValue:B(yh.isNotEnumValue)}},vh={entriesEqual(e,t,r){if(!e||typeof e!="object")throw new k(`${$(e)} is not an object.`,r);if(!t||typeof t!="object")throw new k(`${$(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new k(`Entries are not equal at key '${String(i)}'.`,r)})},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))throw new k("Entries are equal.",r)}},Zw={assert:vh,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>{const i=e[n],o=t[n];return i===o})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>{const i=e[n],o=t[n];return i!==o})}},assertWrap:{entriesEqual(e,t,r){if(!e||typeof e!="object")throw new k(`${$(e)} is not an object.`,r);if(!t||typeof t!="object")throw new k(`${$(t)} is not an object.`,r);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const o=e[i],s=t[i];if(o!==s)throw new k(`Entries are not equal at key '${String(i)}'.`,r)}),e},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(o=>{const s=e[o],a=t[o];return s!==a}))return e;throw new k("Entries are equal.",r)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const o=e[i],s=t[i];return o===s}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const o=e[i],s=t[i];return o!==s}))return e}},waitUntil:{entriesEqual:B(vh.entriesEqual),notEntriesEqual:B(vh.notEntriesEqual)}};function Jc(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Xl(e,t){if(!(e===t||Jc(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length!==n.length)throw new Error("Values are not JSON equal.");if(!Jc(r,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(o=>{try{Xl(e[o],t[o])}catch(s){throw new Error(`JSON objects are not equal at key '${o}': ${fr(s)}`)}})}throw new Error("Values are not JSON equal.")}}function Nl(e,t){if(e===t||Jc(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length!==n.length||!Jc(r,n)?!1:Object.keys(e).every(o=>Nl(e[o],t[o]))}return!1}const wh={jsonEquals(e,t,r){try{Xl(e,t)}catch(n){throw new k(fr(n),r)}},notJsonEquals(e,t,r){try{Xl(e,t)}catch{return}throw new k("Values are JSON equal.",r)}},Yw={assert:wh,check:{jsonEquals(e,t){return Nl(e,t)},notJsonEquals(e,t){return!Nl(e,t)}},assertWrap:{jsonEquals(e,t,r){try{return Xl(e,t),e}catch(n){throw new k(fr(n),r)}},notJsonEquals(e,t,r){try{Xl(e,t)}catch{return e}throw new k("Values are JSON equal.",r)}},checkWrap:{jsonEquals(e,t){if(Nl(e,t))return e},notJsonEquals(e,t){if(!Nl(e,t))return e}},waitUntil:{jsonEquals:B(wh.jsonEquals),notJsonEquals:B(wh.notJsonEquals)}};function vy(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function Jw(){this._key="chai/deep-eql__"+Math.random()+Date.now()}Jw.prototype={get:function(t){return t[this._key]},set:function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})}};var Xw=typeof WeakMap=="function"?WeakMap:Jw;function wy(e,t,r){if(!r||fa(e)||fa(t))return null;var n=r.get(e);if(n){var i=n.get(t);if(typeof i=="boolean")return i}return null}function sc(e,t,r,n){if(!(!r||fa(e)||fa(t))){var i=r.get(e);i?i.set(t,n):(i=new Xw,i.set(t,n),r.set(e,i))}}function Gn(e,t,r){if(r&&r.comparator)return ky(e,t,r);var n=Qw(e,t);return n!==null?n:ky(e,t,r)}function Qw(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:fa(e)||fa(t)?!1:null}function ky(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new Xw;var n=r&&r.comparator,i=wy(e,t,r.memoize);if(i!==null)return i;var o=wy(t,e,r.memoize);if(o!==null)return o;if(n){var s=n(e,t);if(s===!1||s===!0)return sc(e,t,r.memoize,s),s;var a=Qw(e,t);if(a!==null)return a}var l=vy(e);if(l!==vy(t))return sc(e,t,r.memoize,!1),!1;sc(e,t,r.memoize,!0);var u=PA(e,t,l,r);return sc(e,t,r.memoize,u),u}function PA(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return Gn(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return ek(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return os(e,t,n);case"RegExp":return IA(e,t);case"Generator":return NA(e,t,n);case"DataView":return os(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return os(new Uint8Array(e),new Uint8Array(t),n);case"Set":return xy(e,t,n);case"Map":return xy(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return RA(e,t,n)}}function IA(e,t){return e.toString()===t.toString()}function xy(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],i=[];return e.forEach(function(s,a){n.push([s,a])}),t.forEach(function(s,a){i.push([s,a])}),os(n.sort(),i.sort(),r)}function os(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var i=-1;++i<n;)if(Gn(e[i],t[i],r)===!1)return!1;return!0}function NA(e,t,r){return os(e0(e),e0(t),r)}function OA(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}function $y(e){if(OA(e))try{return e0(e[Symbol.iterator]())}catch{return[]}return[]}function e0(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}function Dy(e){var t=[];for(var r in e)t.push(r);return t}function Ay(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var i=r[n];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}function ek(e,t,r,n){var i=r.length;if(i===0)return!0;for(var o=0;o<i;o+=1)if(Gn(e[r[o]],t[r[o]],n)===!1)return!1;return!0}function RA(e,t,r){var n=Dy(e),i=Dy(t),o=Ay(e),s=Ay(t);if(n=n.concat(o),i=i.concat(s),n.length&&n.length===i.length)return os(Ey(n).sort(),Ey(i).sort())===!1?!1:ek(e,t,n,r);var a=$y(e),l=$y(t);return a.length&&a.length===l.length?(a.sort(),l.sort(),os(a,l,r)):n.length===0&&a.length===0&&i.length===0&&l.length===0}function fa(e){return e===null||typeof e!="object"}function Ey(e){return e.map(function(r){return typeof r=="symbol"?r.toString():r})}class ra extends k{name="DiffError";constructor(t,r,n,i){const o=v4(r,n);super([t,ug(o)].join(`
`),i)}}function ao(e,t){return typeof e=="function"&&typeof t=="function"?!0:null}const io={strictEquals(e,t,r){if(e!==t)throw typeof e=="object"&&e||typeof t=="object"&&t?new k(`Strict reference equality failed for 

${$(t)}

.`,r):new ra("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new k(`Strict reference INequality failed for 

${$(t)}

.`,r):new k(`

${$(e)}

strictly equals

${$(t)}

`,r)},looseEquals(e,t,r){if(e!=t)throw typeof e=="object"&&e||typeof t=="object"&&t?new k(`Loose reference equality failed for 

${$(t)}

.`,r):new ra("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new k(`Loose reference INequality failed for 

${$(t)}

.`,r):new k(`

${$(e)}

loosely equals

${$(t)}

`,r)},deepEquals(e,t,r){if(!Gn(e,t,{comparator:ao}))throw new ra("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(Gn(e,t,{comparator:ao}))throw new k(`

${$(e)}

deeply equals

${$(t)}

`,r)}},tk=io.deepEquals,rk={assert:io,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return Gn(e,t,{comparator:ao})},notDeepEquals(e,t){return!Gn(e,t,{comparator:ao})}},assertWrap:{strictEquals(e,t,r){if(e===t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new k(`Strict reference equality failed for 

${$(t)}

.`,r):new ra("Not strictly equal.",e,t,r)},notStrictEquals(e,t,r){if(e===t)throw typeof e=="object"&&e?new k(`Strict reference INequality failed for 

${$(t)}

.`,r):new k(`

${$(e)}

strictly equals

${$(t)}

`,r);return e},looseEquals(e,t,r){if(e==t)return e;throw typeof e=="object"&&e||typeof t=="object"&&t?new k(`Loose reference equality failed for 

${$(t)}

.`,r):new ra("Not loosely equal.",e,t,r)},notLooseEquals(e,t,r){if(e==t)throw typeof e=="object"&&e?new k(`Loose reference INequality failed for 

${$(t)}

.`,r):new k(`

${$(e)}

loosely equals

${$(t)}

`,r);return e},deepEquals(e,t,r){if(Gn(e,t,{comparator:ao}))return e;throw new ra("Not deeply equal.",e,t,r)},notDeepEquals(e,t,r){if(Gn(e,t,{comparator:ao}))throw new k(`

${$(e)}

deeply equals

${$(t)}

`,r);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(Gn(e,t,{comparator:ao}))return e},notDeepEquals(e,t){if(!Gn(e,t,{comparator:ao}))return e}},waitUntil:{strictEquals:B(io.strictEquals),notStrictEquals:B(io.notStrictEquals),looseEquals:B(io.looseEquals),notLooseEquals:B(io.notLooseEquals),deepEquals:B(io.deepEquals),notDeepEquals:B(io.notDeepEquals)}};function un(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let r=!0;try{r=Reflect.ownKeys(e).map(n=>e[n]).includes(t)}catch{return!1}return r}function Pn(e,t){return typeof t=="string"?t.includes(e):un(t,e)}const Ii={hasValue(e,t,r){if(!un(e,t))throw new k(`'${$(e)}' does not have value '${$(t)}'.`,r)},lacksValue(e,t,r){if(un(e,t))throw new k(`'${$(e)}' has value '${$(t)}'.`,r)},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>!i.includes(o))}catch{throw new k(`'${$(e)}' does not have values '${$(t)}'.`,r)}if(n.length)throw new k(`'${$(e)}' does not have values '${$(n)}'.`,r)},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>i.includes(o))}catch{}if(n.length)throw new k(`'${$(e)}' has values '${$(n)}'.`,r)},isIn(e,t,r){if(!Pn(e,t))throw new k(`'${$(e)}'

is not in

${$(t)}.`,r)},isNotIn(e,t,r){if(Pn(e,t))throw new k(`'${$(e)}'

is in

${$(t)}.`,r)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new k(`'${$(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new k(`'${$(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new k(`'${$(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new k(`'${$(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new k(`'${$(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new k(`'${$(e)}' is not empty.`,t)}}},nk={assert:Ii,check:{hasValue(e,t){return un(e,t)},lacksValue(e,t){return!un(e,t)},hasValues(e,t){return t.every(r=>un(e,r))},lacksValues(e,t){return t.every(r=>!un(e,r))},isIn(e,t){return Pn(e,t)},isNotIn(e,t){return!Pn(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,r){if(!un(e,t))throw new k(`'${$(e)}' does not have value '${$(t)}'.`,r);return e},lacksValue(e,t,r){if(un(e,t))throw new k(`'${$(e)}' has value '${$(t)}'.`,r);return e},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>!i.includes(o))}catch{throw new k(`'${$(e)}' does not have values '${$(t)}'.`,r)}if(n.length)throw new k(`'${$(e)}' does not have values '${$(n)}'.`,r);return e},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(o=>e[o]);n=t.filter(o=>i.includes(o))}catch{}if(n.length)throw new k(`'${$(e)}' has values '${$(n)}'.`,r);return e},isIn(e,t,r){if(!Pn(e,t))throw new k(`'${$(e)}'

is not in

${$(t)}.`,r);return e},isNotIn(e,t,r){if(Pn(e,t))throw new k(`'${$(e)}'

is in

${$(t)}.`,r);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new k(`'${$(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new k(`'${$(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new k(`'${$(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new k(`'${$(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new k(`'${$(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new k(`'${$(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(un(e,t))return e},lacksValue(e,t){if(!un(e,t))return e},hasValues(e,t){if(t.every(r=>un(e,r)))return e},lacksValues(e,t){if(!t.every(r=>un(e,r)))return e},isIn(e,t){if(Pn(e,t))return e},isNotIn(e,t){if(!Pn(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:B(Ii.hasValue),lacksValue:B(Ii.lacksValue),hasValues:B(Ii.hasValues),lacksValues:B(Ii.lacksValues),isIn:B(Ii.isIn),isNotIn:B(Ii.isNotIn),isEmpty:B(Ii.isEmpty),isNotEmpty:B(Ii.isNotEmpty)}},kh={isHttpStatus(e,t){if(!Ri(e,F))throw new k(`${$(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,r){if(Ri(e,F)){if(!Pn(e,Mc[t]))throw new k(`${$(e)} is not a '${t}' HTTP status.`,r)}else throw new k(`${$(e)} is not a valid HTTP status.`,r)}},ik={assert:kh,check:{isHttpStatus(e){return Ri(e,F)},isHttpStatusCategory(e,t){return Ri(e,F)&&Pn(e,Mc[t])}},assertWrap:{isHttpStatus(e,t){if(!Ri(e,F))throw new k(`${$(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,r){if(Ri(e,F)){if(!Pn(e,Mc[t]))throw new k(`${$(e)} is not a '${t}' HTTP status.`,r)}else throw new k(`${$(e)} is not a valid HTTP status.`,r);return e}},checkWrap:{isHttpStatus(e){if(Ri(e,F))return e},isHttpStatusCategory(e,t){if(Ri(e,F)&&Pn(e,Mc[t]))return e}},waitUntil:{isHttpStatus:B(kh.isHttpStatus),isHttpStatusCategory:B(kh.isHttpStatusCategory)}},xh={instanceOf(e,t,r){if(!(e instanceof t))throw new k(`'${$(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new k(`'${$(e)}' is an instance of '${t.name}'`,r)}},ok={assert:xh,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,r){if(e instanceof t)return e;throw new k(`'${$(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new k(`'${$(e)}' is an instance of '${t.name}'`,r);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:B(xh.instanceOf),notInstanceOf:B(xh.notInstanceOf)}},BA=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function dt(e,t){return BA.some(r=>{try{return r(e,t)}catch{return!1}})}const Ko={isKeyOf(e,t,r){if(!dt(t,e))throw new k(`'${String(e)}' is not a key of '${$(t)}'.`,r)},isNotKeyOf(e,t,r){if(dt(t,e))throw new k(`'${String(e)}' is a key of '${$(t)}'.`,r)},hasKey(e,t,r){if(!dt(e,t))throw new k(`'${$(e)}' does not have key '${String(t)}'.`,r)},lacksKey(e,t,r){if(dt(e,t))throw new k(`'${$(e)}' has key '${String(t)}'.`,r)},hasKeys(e,t,r){const n=t.filter(i=>!dt(e,i));if(n.length)throw new k(`'${$(e)}' does not have keys '${n.join(",")}'.`,r)},lacksKeys(e,t,r){const n=t.filter(i=>dt(e,i));if(n.length)throw new k(`'${$(e)}' does not lack keys '${n.join(",")}'.`,r)}},sk={assert:Ko,check:{isKeyOf(e,t){return dt(t,e)},isNotKeyOf(e,t){return!dt(t,e)},hasKey:dt,lacksKey(e,t){return!dt(e,t)},hasKeys(e,t){return t.every(r=>dt(e,r))},lacksKeys(e,t){return t.every(r=>!dt(e,r))}},assertWrap:{isKeyOf(e,t,r){if(!dt(t,e))throw new k(`'${String(e)}' is not a key of '${$(t)}'.`,r);return e},isNotKeyOf(e,t,r){if(dt(t,e))throw new k(`'${String(e)}' is a key of '${$(t)}'.`,r);return e},hasKey(e,t,r){if(!dt(e,t))throw new k(`'${$(e)}' does not have key '${String(t)}'.`,r);return e},lacksKey(e,t,r){if(dt(e,t))throw new k(`'${$(e)}' has key '${String(t)}'.`,r);return e},hasKeys(e,t,r){const n=t.filter(i=>!dt(e,i));if(n.length)throw new k(`'${$(e)}' does not have keys '${n.join(",")}'.`,r);return e},lacksKeys(e,t,r){const n=t.filter(i=>dt(e,i));if(n.length)throw new k(`'${$(e)}' does not lack keys '${n.join(",")}'.`,r);return e}},checkWrap:{isKeyOf(e,t){if(dt(t,e))return e},isNotKeyOf(e,t){if(!dt(t,e))return e},hasKey(e,t){if(dt(e,t))return e},lacksKey(e,t){if(!dt(e,t))return e},hasKeys(e,t){if(t.every(r=>dt(e,r)))return e},lacksKeys(e,t){if(t.every(r=>!dt(e,r)))return e}},waitUntil:{isKeyOf:B(Ko.isKeyOf),isNotKeyOf:B(Ko.isNotKeyOf),hasKey:B(Ko.hasKey),lacksKey:B(Ko.lacksKey),hasKeys:B(Ko.hasKeys),lacksKeys:B(Ko.lacksKeys)}};function LA(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)<t)throw new k(`Length '${e.length}' is not at least '${t}'.`,r)}function _A(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)!==t)throw new k(`Length '${e.length}' is not exactly '${t}'.`,r)}const $h={isLengthAtLeast:LA,isLengthExactly:_A},ak={assert:$h,check:{isLengthAtLeast:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)>=t),isLengthExactly:((e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)===t)},assertWrap:{isLengthAtLeast:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)<t)throw new k(`Length '${e.length}' is not at least '${t}'.`,r);return e}),isLengthExactly:((e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)!==t)throw new k(`Length '${e.length}' is not exactly '${t}'.`,r);return e})},checkWrap:{isLengthAtLeast:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)>=t)return e}),isLengthExactly:((e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:tt(e).length)===t)return e})},waitUntil:{isLengthAtLeast:B($h.isLengthAtLeast),isLengthExactly:B($h.isLengthExactly)}},jA={never(e){throw new k("This code should not have executed.",e)}},lk={assert:jA,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},Dh={isDefined(e,t){if(e==null)throw new k(`'${$(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new k(`'${$(e)}' is not a nullish.`,t)}},uk={assert:Dh,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new k(`'${$(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new k(`'${$(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:B(Dh.isDefined),isNullish:B(Dh.isNullish)}},Vr={isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new k(`${e} is not within the bounds ${$({min:r,max:t})}`,n)},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new k(`${e} is not outside the bounds ${$({min:t,max:r})}`,n)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new k(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new k(`${e} is an integer.`,t)},isAbove(e,t,r){if(e<=t)throw new k(`${e} is not above ${t}`,r)},isAtLeast(e,t,r){if(e<t)throw new k(`${e} is not at least ${t}`,r)},isBelow(e,t,r){if(e>=t)throw new k(`${e} is not below ${t}`,r)},isAtMost(e,t,r){if(e>t)throw new k(`${e} is not at most ${t}`,r)},isNaN(e,t){if(!isNaN(e))throw new k(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new k(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new k(`${e} is not infinite`,t)},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new k(`${e} is not within ±${r} of ${t}`,n)},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new k(`${e} is within ±${r} of ${t}`,n)}},ck={assert:Vr,check:{isInBounds(e,{max:t,min:r}){return r<=e&&e<=t},isOutBounds(e,{max:t,min:r}){return e<r||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,r){return t-r<=e&&e<=t+r},isNotApproximately(e,t,r){return e<t-r||e>t+r}},assertWrap:{isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new k(`${e} is not within the bounds ${$({min:r,max:t})}`,n);return e},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new k(`${e} is not outside the bounds ${$({min:t,max:r})}`,n);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new k(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new k(`${e} is an integer.`,t);return e},isAbove(e,t,r){if(e<=t)throw new k(`${e} is not above ${t}`,r);return e},isAtLeast(e,t,r){if(e<t)throw new k(`${e} is not at least ${t}`,r);return e},isBelow(e,t,r){if(e>=t)throw new k(`${e} is not below ${t}`,r);return e},isAtMost(e,t,r){if(e>t)throw new k(`${e} is not at most ${t}`,r);return e},isNaN(e,t){if(!isNaN(e))throw new k(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new k(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new k(`${e} is not infinite`,t);return e},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new k(`${e} is not within ±${r} of ${t}`,n);return e},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new k(`${e} is within ±${r} of ${t}`,n);return e}},checkWrap:{isInBounds(e,{max:t,min:r}){if(r<=e&&e<=t)return e},isOutBounds(e,{max:t,min:r}){if(e<r||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,r){if(t-r<=e&&e<=t+r)return e},isNotApproximately(e,t,r){if(e<t-r||e>t+r)return e}},waitUntil:{isInBounds:B(Vr.isInBounds),isOutBounds:B(Vr.isOutBounds),isInteger:B(Vr.isInteger),isNotInteger:B(Vr.isNotInteger),isAbove:B(Vr.isAbove),isAtLeast:B(Vr.isAtLeast),isBelow:B(Vr.isBelow),isAtMost:B(Vr.isAtMost),isNaN:B(Vr.isNaN),isFinite:B(Vr.isFinite),isInfinite:B(Vr.isInfinite),isApproximately:B(Vr.isApproximately),isNotApproximately:B(Vr.isNotApproximately)}};function zA(e,t,r,n,i){return Au(...Ud(e,t,r,n,i),!1)}function Ud(e,t,r,n,i){const o=Array.isArray(r);return[o?e:tk,o?t:e,o?r:t,o?n:r,o?i:n]}function Au(e,t,r,n,i,o){const s=t(...r);if(s instanceof Promise)return new Promise(async(a,l)=>{try{const u=await s;e(u,n),o?a(u):a()}catch(u){l(new k(`Output from '${t.name}' did not produce expected output. ${fr(u)}`,i))}});try{return e(s,n),o?s:void 0}catch(a){throw new k(`Output from '${t.name}' did not produce expected output. ${fr(a)}`,i)}}function UA(e,t,r,n,i){try{const o=Au(...Ud(e,t,r,n,i),!1);return o instanceof Promise?new Promise(async s=>{try{await o,s(!0)}catch{s(!1)}}):!0}catch{return!1}}function qA(e,t,r,n,i){return Au(...Ud(e,t,r,n,i),!0)}function WA(e,t,r,n,i){try{const o=Au(...Ud(e,t,r,n,i),!0);return o instanceof Promise?new Promise(async s=>{try{s(await o)}catch{s(void 0)}}):o}catch{return}}const Ah=Symbol("not set");async function VA(e,t,r,n,i,o){const s=Array.isArray(r),a=s?e:tk,l=s?t:e,u=s?r:t,d=s?n:r,f=Vw(s?i:n),h=s?o:i,g=da(f.timeout,{milliseconds:!0}).milliseconds,m=da(f.interval,{milliseconds:!0});let b=Ah,y;async function x(){try{b=await Au(a,l,u,d,void 0,!0)}catch(C){b=Ah,y=xt(C)}}const D=Date.now();for(;b===Ah;)if(await x(),await zd(m),Date.now()-D>=g)throw Oa(y,Na(h,`Timeout of '${g}' milliseconds exceeded waiting for callback value to match expectations`));return b}const KA={output:zA},dk={assert:KA,check:{output:UA},assertWrap:{output:qA},checkWrap:{output:WA},waitUntil:{output:VA}},ml={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new k(`'${$(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new k(`'${$(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new k(`'${$(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new k(`'${$(e)}' is not a Primitive.`,t)}},fk={assert:ml,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new k(`'${$(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new k(`'${$(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new k(`'${$(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new k(`'${$(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:B(ml.isNotPrimitive),isNotPropertyKey:B(ml.isNotPropertyKey),isPrimitive:B(ml.isPrimitive),isPropertyKey:B(ml.isPropertyKey)}},gl={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new k(`'${$(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new k(`'${$(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new k(`'${$(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new k(`'${$(e)}' is a Promise.`,t)}},hk={assert:gl,check:{isPromiseLike(e){return e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new k(`'${$(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new k(`'${$(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new k(`'${$(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new k(`'${$(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:B(gl.isPromiseLike,!0),isNotPromiseLike:B(gl.isNotPromiseLike,!0),isPromise:B(gl.isPromise,!0),isNotPromise:B(gl.isNotPromise,!0)}},Eh={matches(e,t,r){if(!t.test(e))throw new k(`'${e}' does not match ${t}`,r)},mismatches(e,t,r){if(t.test(e))throw new k(`'${e}' matches ${t}`,r)}},mk={assert:Eh,check:{matches(e,t){return t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,r){if(!t.test(e))throw new k(`'${e}' does not match ${t}`,r);return e},mismatches(e,t,r){if(t.test(e))throw new k(`'${e}' matches ${t}`,r);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:B(Eh.matches,!0),mismatches:B(Eh.mismatches,!0)}},ht={isArray(e,t){if(!Array.isArray(e))throw new k(`'${$(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new k(`'${$(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new k(`'${$(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new k(`'${$(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new k(`'${$(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new k(`'${$(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new k(`'${$(e)}' is not a non-null object.`,t)},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new k(`'${$(e)}' is not a plain object.`,t)},isString(e,t){if(typeof e!="string")throw new k(`'${$(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new k(`'${$(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new k(`'${$(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new k(`'${$(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new k(`'${$(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new k(`'${$(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new k(`'${$(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new k(`'${$(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new k(`'${$(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new k(`'${$(e)}' is a non-null object.`,t)},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(!(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))))throw new k(`'${$(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new k(`'${$(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new k(`'${$(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new k(`'${$(e)}' is a undefined.`,t)}},gk={assert:ht,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"&&!isNaN(e)},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isPlainObject(e){if(typeof e!="object"||e==null)return!1;const t=Object.getPrototypeOf(e);return(t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"||isNaN(e)},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotPlainObject(e){if(typeof e!="object"||e==null)return!0;const t=Object.getPrototypeOf(e);return!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new k(`'${$(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new k(`'${$(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new k(`'${$(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new k(`'${$(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new k(`'${$(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new k(`'${$(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new k(`'${$(e)}' is not a non-null object.`,t);return e},isPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))throw new k(`'${$(e)}' is not a plain object.`,t);return e},isString(e,t){if(typeof e!="string")throw new k(`'${$(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new k(`'${$(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new k(`'${$(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new k(`'${$(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new k(`'${$(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new k(`'${$(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new k(`'${$(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new k(`'${$(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number"&&!isNaN(e))throw new k(`'${$(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new k(`'${$(e)}' is a non-null object.`,t);return e},isNotPlainObject(e,t){const r=Object.getPrototypeOf(e);if(typeof e!="object"||e==null||!((r==null||r===Object.prototype||Object.getPrototypeOf(r)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e;throw new k(`'${$(e)}' is a plain object.`,t)},isNotString(e,t){if(typeof e=="string")throw new k(`'${$(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new k(`'${$(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new k(`'${$(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number"&&!isNaN(e))return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isPlainObject(e){if(typeof e!="object"||e==null)return;const t=Object.getPrototypeOf(e);if((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e))return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(!(typeof e=="number"&&!isNaN(e)))return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotPlainObject(e){if(typeof e!="object"||e==null)return e;const t=Object.getPrototypeOf(e);if(!((t==null||t===Object.prototype||Object.getPrototypeOf(t)==null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)))return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:B(ht.isArray),isBigInt:B(ht.isBigInt),isBoolean:B(ht.isBoolean),isFunction:B(ht.isFunction),isNull:B(ht.isNull),isNumber:B(ht.isNumber),isObject:B(ht.isObject),isPlainObject:B(ht.isPlainObject),isString:B(ht.isString),isSymbol:B(ht.isSymbol),isUndefined:B(ht.isUndefined),isNotArray:B(ht.isNotArray),isNotBigInt:B(ht.isNotBigInt),isNotBoolean:B(ht.isNotBoolean),isNotFunction:B(ht.isNotFunction),isNotNull:B(ht.isNotNull),isNotNumber:B(ht.isNotNumber),isNotObject:B(ht.isNotObject),isNotPlainObject:B(ht.isNotPlainObject),isNotString:B(ht.isNotString),isNotSymbol:B(ht.isNotSymbol),isNotUndefined:B(ht.isNotUndefined)}};var Gr;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Gr||(Gr={}));function cg(e,t,r){dg(e,{noError:"No error.",notInstance:`'${$(e)}' is not an error instance.`},t,r)}function Cy(e,t,r){dg(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${$(e)}' is not an error instance.`},t,r)}function dg(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const i=e.constructor.name;throw new k(`Error constructor '${i}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const i=fr(e);if(typeof r.matchMessage=="string"){if(!Ww(i,r.matchMessage))throw new k(`Error message

'${i}'

does not contain

'${r.matchMessage}'.`,n)}else if(!i.match(r.matchMessage))throw new k(`Error message

'${i}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new k(t.notInstance,n);else throw new k(t.noError,n)}function Sy(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const r=fr(e);if(typeof t.matchMessage=="string"){if(!Ww(r,t.matchMessage))return!1}else if(!r.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function qd(e,t,r,n){let i;try{const o=t instanceof Promise?t:t();if(o instanceof Promise)return new Promise(async(s,a)=>{try{await o}catch(l){i=xt(l)}try{Cy(i,r,n),e===Gr.Assert?s():e===Gr.Check?s(!0):s(i)}catch(l){e===Gr.CheckWrap?s(void 0):e===Gr.Check?s(!1):a(xt(l))}})}catch(o){i=xt(o)}try{return Cy(i,r,n),e===Gr.Check?!0:e!==Gr.Assert?i:void 0}catch(o){if(e===Gr.CheckWrap)return;if(e===Gr.Check)return!1;throw o}}function HA(e,t,r){return qd(Gr.Assert,e,t,r)}function GA(e,t){return qd(Gr.Check,e,t)}function ZA(e,t,r){return qd(Gr.AssertWrap,e,t,r)}function YA(e,t,r){return qd(Gr.CheckWrap,e,t,r)}const JA=B(cg);function XA(e,t,r,n){const i=typeof e=="function"||e instanceof Promise?void 0:e,o=i?t:e,s=typeof r=="object"?n:r,a=typeof r=="object"?r:t;if(typeof o!="function")throw new TypeError(`Callback is not a function, got '${$(o)}'`);return JA(i,async()=>{try{await o();return}catch(l){return xt(l)}},a,s)}const QA={throws:HA,isError:cg},pk={assert:QA,check:{throws:GA,isError(e,t){return Sy(e,t)}},assertWrap:{throws:ZA,isError(e,t,r){return dg(e,{noError:"No error.",notInstance:`'${$(e)}' is not an error instance.`},t,r),e}},checkWrap:{throws:YA,isError(e,t){if(Sy(e,t))return e}},waitUntil:{throws:XA,isError:B(cg)}},lo=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Ch={isUuid(e,t){if(!String(e).match(lo))throw new k(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(lo))throw new k(`'${String(e)}' is a UUID.`,t)}},bk={assert:Ch,check:{isUuid(e){return!!String(e).match(lo)},isNotUuid(e){return!String(e).match(lo)}},assertWrap:{isUuid(e,t){if(!String(e).match(lo))throw new k(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(lo))throw new k(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(lo))return e},isNotUuid(e){if(!String(e).match(lo))return e}},waitUntil:{isUuid:B(Ch.isUuid),isNotUuid:B(Ch.isNotUuid)}},eE={...lk.assert,...Kw.assert,...Hw.assert,...Zw.assert,...Gw.assert,...ik.assert,...ok.assert,...Yw.assert,...sk.assert,...ak.assert,...uk.assert,...ck.assert,...dk.assert,...fk.assert,...hk.assert,...mk.assert,...gk.assert,...rk.assert,...pk.assert,...bk.assert,...nk.assert},fg=[Kw,Hw,Zw,Gw,ik,ok,Yw,sk,ak,lk,uk,ck,dk,fk,hk,mk,gk,rk,pk,bk,nk],tE=Object.assign({},...fg.map(e=>e.check)),T=Object.assign(function(t){return!!t},tE);function rE(e,t,r){return Nc(e,t,r,new Set)}function Nc(e,t,r,n){if(e=Ty(e),t=Ty(t),T.isObject(e)&&T.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!Nc(tt(e).sort(),tt(t).sort(),r,n))return!1;let i=!1;const o=tt(e).map(s=>{const a=Nc(e[s],t[s],r,n);return T.isPromise(a)&&(i=!0),a});return My(i,o)}else if(T.isArray(e)&&T.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let i=!1;const o=e.map((s,a)=>{const l=Nc(s,t[a],r,n);return T.isPromise(l)&&(i=!0),l});return My(i,o)}else return r(e,t)}function Ty(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function My(e,t){return e?new Promise(async(r,n)=>{try{const i=await Promise.all(t);r(i.every(T.isTrue))}catch(i){n(xt(i))}}):t.every(T.isTrue)}const nE=Object.assign({},...fg.map(e=>e.assertWrap)),Vt=Object.assign(function(t,r){if(!t)throw new k("Assertion failed.",r);return t},nE);function iE(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const oE={tsType:iE},sE={assert:oE},aE={fail:e=>{throw new k("Failure triggered.",e)}},lE={...sE.assert,...eE,...aE},Nt=Object.assign(function(t,r){if(!t)throw new k("Assertion failed.",r)},lE),uE=Object.assign({},...fg.map(e=>e.checkWrap)),hg=Object.assign(function(t){if(t)return t},uE);function cE(e,t){return T.hasKey(e,"entryType")&&e.entryType===t}function Ho(e,t){return e.controlType===t}var Wt;(function(e){e.Checkbox="checkbox",e.Color="color",e.Custom="custom",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(Wt||(Wt={}));const yk=Symbol("any-type"),dE={[Wt.Checkbox]:!1,[Wt.Color]:"",[Wt.Custom]:void 0,[Wt.Dropdown]:"",[Wt.Hidden]:yk,[Wt.Number]:0,[Wt.Text]:""};function fE(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,i])=>{if(i.controlType===Wt.Custom)return;const o=dE[i.controlType];o!==yk&&(typeof o!=typeof i.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof o} because the control is of type ${i.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function hE(e,t,r){const n=t;if(e.has(n))return e.get(n);{const i=r();return T.isPromise(i)?new Promise(async(o,s)=>{try{const a=await i;e.set(n,a),o(a)}catch(a){s(xt(a))}}):(e.set(n,i),i)}}function ja(e,t,r){if(t in e)return e[t];{const n=r();return T.isPromise(n)?new Promise(async(i,o)=>{try{const s=await n;e[t]=s,i(s)}catch(s){o(xt(s))}}):(e[t]=n,n)}}function ki(e){return tt(e).map(t=>[t,e[t]])}function Ql(e){return Object.fromEntries(e)}function Kt(e,t,r){return e.reduce((n,i,o,s)=>{const a=t(i,o,s);return r(a,i,o,s)&&n.push(a),n},[])}function xo(e,t,r={}){try{let n=!1;const i=e.map((o,s,a)=>{const l=t(o,s,a);return l instanceof Promise?(n=!0,l):l?[l.key,l.value]:void 0}).filter(T.isTruthy);return n?new Promise(async(o,s)=>{try{const a=Kt(await Promise.all(i),l=>{if(l)return Array.isArray(l)?l:[l.key,l.value]},T.isTruthy);o(Ql(a))}catch(a){s(xt(a))}}):Ql(i)}catch(n){throw xt(n)}}function mg(e,t){const r=[];let n=!1;for(let i=0;i<e;i++){const o=t(i);T.isPromise(o)&&(n=!0),r.push(o)}return n?Promise.all(r):r}function uo(e){return Array.isArray(e)?e:[e]}function mE({min:e,max:t}){const{min:r,max:n}=eg({min:Math.floor(e),max:Math.floor(t)}),i=n-r+1,o=Math.ceil(Math.log2(i)),s=Math.ceil(o/8);if(s>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const a=Math.floor(256**s/i)*i,l=new Uint8Array(s);let u;do crypto.getRandomValues(l),u=l.reduce((d,f,h)=>d+f*256**h,0);while(u>=a);return r+u%i}const Fy=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];function na(e=16){let t="";for(let r=0;r<e;r++){const n=mE({min:0,max:Fy.length-1});t+=Fy[n]}return t}function vk(e){if(T.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>fr(t).trim()).join(`
`))}function wk(e,t={}){try{const r=e();return r instanceof Promise?r.catch(n=>t.handleError?t.handleError(n):T.hasKey(t,"fallbackValue")?t.fallbackValue:xt(n)):r}catch(r){return t.handleError?t.handleError(r):T.hasKey(t,"fallbackValue")?t.fallbackValue:xt(r)}}const{hasOwnProperty:Eu}=Object.prototype,gE=/[\u0000-\u001f\u0022\u005c\ud800-\udfff]/;function no(e){return e.length<5e3&&!gE.test(e)?`"${e}"`:JSON.stringify(e)}function Sh(e,t){if(e.length>200||t)return e.sort(t);for(let r=1;r<e.length;r++){const n=e[r];let i=r;for(;i!==0&&e[i-1]>n;)e[i]=e[i-1],i--;e[i]=n}return e}const pE=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Object.getPrototypeOf(new Int8Array)),Symbol.toStringTag).get;function Th(e){return pE.call(e)!==void 0&&e.length!==0}function Py(e,t,r){e.length<r&&(r=e.length);const n=t===","?"":" ";let i=`"0":${n}${e[0]}`;for(let o=1;o<r;o++)i+=`${t}"${o}":${n}${e[o]}`;return i}function bE(e){if(Eu.call(e,"circularValue")){const t=e.circularValue;if(typeof t=="string")return`"${t}"`;if(t==null)return t;if(t===Error||t===TypeError)return{toString(){throw new TypeError("Converting circular structure to JSON")}};throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined')}return'"[Circular]"'}function yE(e){let t;if(Eu.call(e,"deterministic")&&(t=e.deterministic,typeof t!="boolean"&&typeof t!="function"))throw new TypeError('The "deterministic" argument must be of type boolean or comparator function');return t===void 0?!0:t}function vE(e,t){let r;if(Eu.call(e,t)&&(r=e[t],typeof r!="boolean"))throw new TypeError(`The "${t}" argument must be of type boolean`);return r===void 0?!0:r}function Iy(e,t){let r;if(Eu.call(e,t)){if(r=e[t],typeof r!="number")throw new TypeError(`The "${t}" argument must be of type number`);if(!Number.isInteger(r))throw new TypeError(`The "${t}" argument must be an integer`);if(r<1)throw new RangeError(`The "${t}" argument must be >= 1`)}return r===void 0?1/0:r}function Go(e){return e===1?"1 item":`${e} items`}function wE(e){const t=new Set;for(const r of e)(typeof r=="string"||typeof r=="number")&&t.add(String(r));return t}function kE(e){if(Eu.call(e,"strict")){const t=e.strict;if(typeof t!="boolean")throw new TypeError('The "strict" argument must be of type boolean');if(t)return r=>{let n=`Object can not safely be stringified. Received type ${typeof r}`;throw typeof r!="function"&&(n+=` (${r.toString()})`),new Error(n)}}}function xE(e){e={...e};const t=kE(e);t&&(e.bigint===void 0&&(e.bigint=!1),"circularValue"in e||(e.circularValue=Error));const r=bE(e),n=vE(e,"bigint"),i=yE(e),o=typeof i=="function"?i:void 0,s=Iy(e,"maximumDepth"),a=Iy(e,"maximumBreadth");function l(g,m,b,y,x,D){let C=m[g];switch(typeof C=="object"&&C!==null&&typeof C.toJSON=="function"&&(C=C.toJSON(g)),C=y.call(m,g,C),typeof C){case"string":return no(C);case"object":{if(C===null)return"null";if(b.includes(C))return r;let P="",O=",";const H=D;if(Array.isArray(C)){if(C.length===0)return"[]";if(s<b.length+1)return'"[Array]"';b.push(C),x!==""&&(D+=x,P+=`
${D}`,O=`,
${D}`);const $e=Math.min(C.length,a);let Ue=0;for(;Ue<$e-1;Ue++){const yr=l(String(Ue),C,b,y,x,D);P+=yr===void 0?"null":yr,P+=O}const Ge=l(String(Ue),C,b,y,x,D);if(P+=Ge===void 0?"null":Ge,C.length-1>a){const yr=C.length-a-1;P+=`${O}"... ${Go(yr)} not stringified"`}return x!==""&&(P+=`
${H}`),b.pop(),`[${P}]`}let ee=Object.keys(C);const oe=ee.length;if(oe===0)return"{}";if(s<b.length+1)return'"[Object]"';let X="",ye="";x!==""&&(D+=x,O=`,
${D}`,X=" ");const ae=Math.min(oe,a);i&&!Th(C)&&(ee=Sh(ee,o)),b.push(C);for(let $e=0;$e<ae;$e++){const Ue=ee[$e],Ge=l(Ue,C,b,y,x,D);Ge!==void 0&&(P+=`${ye}${no(Ue)}:${X}${Ge}`,ye=O)}if(oe>a){const $e=oe-a;P+=`${ye}"...":${X}"${Go($e)} not stringified"`,ye=O}return x!==""&&ye.length>1&&(P=`
${D}${P}
${H}`),b.pop(),`{${P}}`}case"number":return isFinite(C)?String(C):t?t(C):"null";case"boolean":return C?"true":"false";case"undefined":return;case"bigint":if(n)return String(C);default:return t?t(C):void 0}}function u(g,m,b,y,x,D){switch(typeof m=="object"&&m!==null&&typeof m.toJSON=="function"&&(m=m.toJSON(g)),typeof m){case"string":return no(m);case"object":{if(m===null)return"null";if(b.includes(m))return r;const C=D;let P="",O=",";if(Array.isArray(m)){if(m.length===0)return"[]";if(s<b.length+1)return'"[Array]"';b.push(m),x!==""&&(D+=x,P+=`
${D}`,O=`,
${D}`);const oe=Math.min(m.length,a);let X=0;for(;X<oe-1;X++){const ae=u(String(X),m[X],b,y,x,D);P+=ae===void 0?"null":ae,P+=O}const ye=u(String(X),m[X],b,y,x,D);if(P+=ye===void 0?"null":ye,m.length-1>a){const ae=m.length-a-1;P+=`${O}"... ${Go(ae)} not stringified"`}return x!==""&&(P+=`
${C}`),b.pop(),`[${P}]`}b.push(m);let H="";x!==""&&(D+=x,O=`,
${D}`,H=" ");let ee="";for(const oe of y){const X=u(oe,m[oe],b,y,x,D);X!==void 0&&(P+=`${ee}${no(oe)}:${H}${X}`,ee=O)}return x!==""&&ee.length>1&&(P=`
${D}${P}
${C}`),b.pop(),`{${P}}`}case"number":return isFinite(m)?String(m):t?t(m):"null";case"boolean":return m?"true":"false";case"undefined":return;case"bigint":if(n)return String(m);default:return t?t(m):void 0}}function d(g,m,b,y,x){switch(typeof m){case"string":return no(m);case"object":{if(m===null)return"null";if(typeof m.toJSON=="function"){if(m=m.toJSON(g),typeof m!="object")return d(g,m,b,y,x);if(m===null)return"null"}if(b.includes(m))return r;const D=x;if(Array.isArray(m)){if(m.length===0)return"[]";if(s<b.length+1)return'"[Array]"';b.push(m),x+=y;let X=`
${x}`;const ye=`,
${x}`,ae=Math.min(m.length,a);let $e=0;for(;$e<ae-1;$e++){const Ge=d(String($e),m[$e],b,y,x);X+=Ge===void 0?"null":Ge,X+=ye}const Ue=d(String($e),m[$e],b,y,x);if(X+=Ue===void 0?"null":Ue,m.length-1>a){const Ge=m.length-a-1;X+=`${ye}"... ${Go(Ge)} not stringified"`}return X+=`
${D}`,b.pop(),`[${X}]`}let C=Object.keys(m);const P=C.length;if(P===0)return"{}";if(s<b.length+1)return'"[Object]"';x+=y;const O=`,
${x}`;let H="",ee="",oe=Math.min(P,a);Th(m)&&(H+=Py(m,O,a),C=C.slice(m.length),oe-=m.length,ee=O),i&&(C=Sh(C,o)),b.push(m);for(let X=0;X<oe;X++){const ye=C[X],ae=d(ye,m[ye],b,y,x);ae!==void 0&&(H+=`${ee}${no(ye)}: ${ae}`,ee=O)}if(P>a){const X=P-a;H+=`${ee}"...": "${Go(X)} not stringified"`,ee=O}return ee!==""&&(H=`
${x}${H}
${D}`),b.pop(),`{${H}}`}case"number":return isFinite(m)?String(m):t?t(m):"null";case"boolean":return m?"true":"false";case"undefined":return;case"bigint":if(n)return String(m);default:return t?t(m):void 0}}function f(g,m,b){switch(typeof m){case"string":return no(m);case"object":{if(m===null)return"null";if(typeof m.toJSON=="function"){if(m=m.toJSON(g),typeof m!="object")return f(g,m,b);if(m===null)return"null"}if(b.includes(m))return r;let y="";const x=m.length!==void 0;if(x&&Array.isArray(m)){if(m.length===0)return"[]";if(s<b.length+1)return'"[Array]"';b.push(m);const H=Math.min(m.length,a);let ee=0;for(;ee<H-1;ee++){const X=f(String(ee),m[ee],b);y+=X===void 0?"null":X,y+=","}const oe=f(String(ee),m[ee],b);if(y+=oe===void 0?"null":oe,m.length-1>a){const X=m.length-a-1;y+=`,"... ${Go(X)} not stringified"`}return b.pop(),`[${y}]`}let D=Object.keys(m);const C=D.length;if(C===0)return"{}";if(s<b.length+1)return'"[Object]"';let P="",O=Math.min(C,a);x&&Th(m)&&(y+=Py(m,",",a),D=D.slice(m.length),O-=m.length,P=","),i&&(D=Sh(D,o)),b.push(m);for(let H=0;H<O;H++){const ee=D[H],oe=f(ee,m[ee],b);oe!==void 0&&(y+=`${P}${no(ee)}:${oe}`,P=",")}if(C>a){const H=C-a;y+=`${P}"...":"${Go(H)} not stringified"`}return b.pop(),`{${y}}`}case"number":return isFinite(m)?String(m):t?t(m):"null";case"boolean":return m?"true":"false";case"undefined":return;case"bigint":if(n)return String(m);default:return t?t(m):void 0}}function h(g,m,b){if(arguments.length>1){let y="";if(typeof b=="number"?y=" ".repeat(Math.min(b,10)):typeof b=="string"&&(y=b.slice(0,10)),m!=null){if(typeof m=="function")return l("",{"":g},[],m,y,"");if(Array.isArray(m))return u("",g,[],wE(m),y,"")}if(y.length!==0)return d("",g,[],y,"")}return f("",g,[])}return h}const $E=xE({maximumDepth:15,maximumBreadth:50});function DE(...e){return $E(...e)||""}function Hn(e,{enableUnsafeCopyAll:t}={}){try{const r=t?JSON.stringify(e):DE(e);return JSON.parse(r)}catch(r){throw console.error("Failed to JSON copy for",e),r}}const AE="modulepreload",EE=function(e){return"/structured-render/demo/"+e},Ny={},mo=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){let l=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");i=l(r.map(u=>{if(u=EE(u),u in Ny)return;Ny[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":AE,d||(h.as="script"),h.crossOrigin="",h.href=u,a&&h.setAttribute("nonce",a),document.head.appendChild(h),d)return new Promise((g,m)=>{h.addEventListener("load",g),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return i.then(s=>{for(const a of s||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};var qt;(function(e){e.Standard="stdout",e.Error="stderr"})(qt||(qt={}));var Te;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(Te||(Te={}));async function CE(){return await B2({async[_r.Node](){const e=(await mo(async()=>{const{default:t}=await import("./index-Bdn9SXqz.js");return{default:t}},[])).default;return{[Te.Bold]:e.bold.open,[Te.Debug]:e.blueBright.open,[Te.Error]:e.red.open,[Te.Faint]:e.gray.open,[Te.Info]:e.cyan.open,[Te.Mutate]:e.magenta.open,[Te.NormalWeight]:"\x1B[22m",[Te.Plain]:"",[Te.Reset]:e.reset.open,[Te.Success]:e.green.open,[Te.Warning]:e.yellow.open}},[_r.Web](){return Promise.resolve({[Te.Bold]:"font-weight: bold",[Te.Debug]:"color: blue",[Te.Error]:"color: red",[Te.Faint]:"color: grey",[Te.Info]:"color: teal",[Te.Mutate]:"color: magenta",[Te.NormalWeight]:"",[Te.Plain]:"",[Te.Reset]:"",[Te.Success]:"color: green",[Te.Warning]:"color: orange"})}})}const an=await CE(),SE={[Te.Bold]:{colors:[an.bold],logType:qt.Standard},[Te.Debug]:{colors:[an.debug],logType:qt.Standard},[Te.Faint]:{colors:[an.faint],logType:qt.Standard},[Te.Info]:{colors:[an.info],logType:qt.Standard},[Te.Mutate]:{colors:[an.mutate,an.bold],logType:qt.Standard},[Te.NormalWeight]:{colors:[an.normalWeight],logType:qt.Standard},[Te.Plain]:{colors:[],logType:qt.Standard},[Te.Reset]:{colors:[an.reset],logType:qt.Standard},[Te.Success]:{colors:[an.success,an.bold],logType:qt.Standard},[Te.Error]:{colors:[an.error,an.bold],logType:qt.Error},[Te.Warning]:{colors:[an.warning],logType:qt.Error}};function Br({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function ss({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function kk(e,t){try{let r=!1;const n=ki(e).map(([i,o])=>{const s=t(i,o,e);return s instanceof Promise?(r=!0,s):s?[s.key,s.value]:void 0}).filter(T.isTruthy);return r?new Promise(async(i,o)=>{try{const s=Kt(await Promise.all(n),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},T.isTruthy);i(Ql(s))}catch(s){o(xt(s))}}):Ql(n)}catch(r){throw xt(r)}}function gg(e,t){return kk(e,(r,n)=>{const i=n,o=t(n,e);return o instanceof Promise?o.then(s=>({key:i,value:s})):{key:i,value:o}})}function ks(e,...t){const r={...e};return t.forEach(n=>{n&&ki(n).forEach(([i,o])=>{o!=null&&(r[i]=o)})}),r}const TE="px";function ME(e){return pg({value:e,suffix:TE})}function pg({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function xk({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function FE(){return await B2({async[_r.Node](){const{inspect:e}=await mo(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:r,options:n})=>{const i=t.map(a=>typeof a=="string"?a:e(a));return{text:[n.omitColors?"":n.colorConfig[r].colors.join(""),i.join(`
`),n.omitColors?"":n.colorConfig[Te.Reset].colors.join("")].join(""),css:void 0}}},[_r.Web](){return({args:e,colorKey:t,options:r})=>{const n=r.omitColors?void 0:Kt(r.colorConfig[t].colors,s=>xk({value:s,suffix:";"}),T.isTruthy).join("; ");return{text:[e.map(s=>typeof s=="string"?s:s instanceof Error?fr(s):$(s)).join(`
`),r.omitColors?"":r.colorConfig[Te.Reset].colors.join("")].join(""),css:n}}}})}const PE=await FE(),IE={colorConfig:SE,omitColors:!1},NE=$k({[qt.Error](){},[qt.Standard](){}});function $k(e,t){const r=ks(IE,t);function n(o){e[r.colorConfig[o.colorKey].logType](PE({...o,options:r}))}const i=gg(Te,o=>(...s)=>n({args:s,colorKey:o}));return{...i,if(o){return o?i:NE}}}const OE=vs(_r.Node)?{[qt.Error]({text:e}){process.stderr.write(e+`
`)},[qt.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[qt.Error]({text:e,css:t}){console.error(Br({value:e,prefix:"%c"}),t)},[qt.Standard]({text:e,css:t}){console.log(Br({value:e,prefix:"%c"}),t)}},Xc=$k(OE);function RE(e,{digits:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function BE({searchIn:e,searchFor:t,caseSensitive:r,includeLength:n}){const i=zw(qw(t,{caseSensitive:r}),"g"),o=[];return e.replace(i,(...s)=>{const a=s[s.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const l=s[0];if(typeof l!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof l}!`);o.push({index:a,length:l.length});const u=s[0];if(typeof u!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return u}),o}function LE(e,t,{caseSensitive:r}){const n=BE({searchIn:e,searchFor:t,caseSensitive:r,includeLength:!0}),i=qw(t,{caseSensitive:r});return e.split(i).reduce((s,a,l)=>{const u=n[l],d=s.concat(a);if(u){const f=e.slice(u.index,u.index+u.length);return d.concat(f)}else return d},[])}function _E(e,t){return e.split(t)}function Oy(e,t){const{min:r,max:n}=eg(t);if(t.takeOverflow){const i=n-r+1,o=(e-r)%i;return o<0?r+i+o:r+o}else return e>n?r:e<r?n:e}function ut(e,t){let r=!1;const n=tt(e).reduce((i,o)=>{const s=t(o,e[o],e);return s instanceof Promise&&(r=!0),i[o]=s,i},{});return r?new Promise(async(i,o)=>{try{await Promise.all(tt(n).map(async s=>{const a=await n[s];n[s]=a})),i(n)}catch(s){o(xt(s))}}):n}function Wd(e,t){const r=ki(e).filter(([n,i])=>t(n,i,e));return Ql(r)}function jE(e,t){return Wd(e,r=>t.includes(r))}function Qc(e){return tt(e).map(t=>e[t])}function Dk(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}var eu;(function(e){e.Upper="upper",e.Lower="lower"})(eu||(eu={}));const zE={firstLetterCase:eu.Lower};function UE(e,t){if(!e.length)return"";const r=e[0];return(t===eu.Upper?r.toUpperCase():r.toLowerCase())+e.slice(1)}function qE(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const s=o[1];return s?s.toUpperCase():""}),i=ks(zE,t);return UE(n,i.firstLetterCase)}function WE(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}function Ak({value:e,wrapper:t}){return Br({value:pg({value:e,suffix:t}),prefix:t})}function li(){function e(t){return class extends CustomEvent{static type=t;constructor(n){super(t,n)}}}return e}function bg(e,t){const r=t??Event;return class extends r{static type=e;constructor(i){super(e,i)}}}class VE{listeners={};universalListeners=new Map;getListenerCount(){return Qc(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)+this.universalListeners.size}listenToAll(t,r={}){const n=()=>this.universalListeners.delete(t)||!1;function i(o,s){r.once&&n(),t(o,s)}return this.universalListeners.set(t,{listener:i,removeListener:n}),n}removeUniversalListener(t){return!!this.universalListeners.get(t)?.removeListener()}listen(t,r,n={}){const i=T.isString(t)?t:t.type,o=()=>this.listeners[i]?.delete(r)||!1;function s(a,l){n.once&&o(),r(a,l)}return ja(this.listeners,i,()=>new Map).set(r,{listener:s,removeListener:o}),o}removeListener(t,r){const n=T.isString(t)?t:t.type,i=this.listeners[n];if(!i)return!1;const o=i.get(r);return o?o.removeListener():!1}dispatch(t){const r=this.listeners[t.type];t.target==null&&Object.defineProperty(t,"target",{writable:!1,value:this});const n=r?.size||0;return r?.forEach(i=>{i.listener(t,i.removeListener)}),this.universalListeners.forEach(i=>{i.listener(t,i.removeListener)}),n+this.universalListeners.size}removeAllListeners(){const r=Qc(this.listeners).reduce((n,i)=>{const o=i.size||0;return i.clear(),n+o},0)+this.universalListeners.size;return this.listeners={},this.universalListeners.clear(),r}destroy(){this.removeAllListeners()}}class yg extends VE{}function vg(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function Ry(e,t,r){return vg(globalThis,e,t,r)}function wg(e,t){return tu(e.title),e.parent?[...wg(e.parent),tu(e.parent.title)].concat([]):[]}function tu(e){return Dk(e).toLowerCase().replaceAll(/\s/g,"-")}function KE({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}const HE=/[/?#&=]/;function Ek(e){const t=e.match(HE);return e.trim()?tu(e)?t?new Error(`Book page title has invalid character '${t[0]}'.`):void 0:new Error("Book page title resolved to empty breadcrumb."):new Error("Cannot define an element-book page with an empty title.")}const GE={[ur.ElementExample]:()=>[],[ur.Page]:e=>[Ek(e.title),...fE(e.controls,e.title)].filter(T.isTruthy),[ur.Root]:()=>[]},ed="_isBookTreeNode",Ck=new Map;function ZE(e){return Ck.get(e)}function YE(e,t){hE(Ck,e,()=>t)}function ia(e,t){return Sk(e)&&e.entry.entryType===t}function Sk(e){return!!(T.hasKeys(e,[ed,"entry"])&&e[ed])}function JE(){return{[ed]:!0,entry:{entryType:ur.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function XE({entries:e,debug:t}){const r=ZE(e);if(r)return r;const n=JE();e.forEach(s=>kg({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const i=Tk(n),o={tree:n,flattenedNodes:i};return YE(e,o),t&&console.info("element-book tree:",n),o}function QE(e,t,r){if(!t.parent)return e;const n=t0(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),kg({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const i=t0(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${wg(t).join(" > ")}`);return i}function kg({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const i=GE[t.entryType](t);t.errors.push(...i);const o=QE(e,t,r),s=tu(t.title),a=o.children[s];if(a){if(n){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${s}'${o.urlBreadcrumb?` in parent '${o.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const l={[ed]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...o.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};o.children[s]=l,cE(t,ur.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(u=>kg({tree:e,newEntry:u,debug:r,manuallyAdded:n}))}function t0(e,t){const r=Sk(e)?e.fullUrlBreadcrumbs.slice(0,-1):wg(e);return r.length?r.reduce((i,o)=>{if(i)return i.children[o]},t):void 0}function Tk(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>Tk(i));return[e,...r].flat()}function xg(e,t){return $g(e,["",...t],void 0)}function $g(e,t,r){const n=t.slice(1),i=n[0];!i&&r&&(e.controls=r);const o=e.children[i||""],s=o&&$g(o,n,r);return{...e.controls,...s}}function e6(e,t,r){const n={...e};return $g(n,["",...t],r),n}function Mk(e,t){const r=t?.controls||(ia(e,ur.Page)?ut(e.entry.controls,(i,o)=>o.initValue):{});return{children:ut(e.children,(i,o)=>Mk(o,t?.children?.[o.urlBreadcrumb])),controls:r}}function Lt(e){const t={...e,entryType:ur.Page,useVerticalExamples:!!e.useVerticalExamples,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const i={...n,isVertical:t.useVerticalExamples,entryType:ur.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`),Ek(n.title)].filter(T.isTruthy)};r.add(n.title),t.elementExamples[tu(i.title)]=i}}),t}var Jr;(function(e){e.Search="search",e.Book="book"})(Jr||(Jr={}));function Fk(e){return e[0]===Jr.Book?"":e[1]?decodeURIComponent(e[1]):""}const ha={hash:void 0,paths:[Jr.Book],search:void 0};class td{static cssPropertyDefinitionSupported=!!(globalThis.CSS&&globalThis.CSS.registerProperty);registry=new Map;constructor(){const t=td.cssPropertyDefinitionSupported?globalThis.CSS.registerProperty.bind(globalThis.CSS):void 0;t&&(globalThis.CSS.registerProperty=r=>(Pk.registry.set(r.name,r),t(r)))}canRegisterCssProperty(t){return td.cssPropertyDefinitionSupported&&!this.registry.has(t)}registerProperty(t){if(!this.canRegisterCssProperty(t.name))return!1;try{return globalThis.CSS.registerProperty(t),!0}catch(r){throw Oa(r,`Failed to define CSS var: ${$(t,4)}

`)}}}const Pk=new td;const Oc=globalThis,Dg=Oc.ShadowRoot&&(Oc.ShadyCSS===void 0||Oc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ag=Symbol(),By=new WeakMap;let Wi=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Ag)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Dg&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=By.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&By.set(r,t))}return t}toString(){return this.cssText}};const ve=e=>new Wi(typeof e=="string"?e:e+"",void 0,Ag),Ik=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new Wi(r,e,Ag)},t6=(e,t)=>{if(Dg)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),i=Oc.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)}},Ly=Dg?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return ve(r)})(e):e;const{is:r6,defineProperty:n6,getOwnPropertyDescriptor:i6,getOwnPropertyNames:o6,getOwnPropertySymbols:s6,getPrototypeOf:a6}=Object,Vd=globalThis,_y=Vd.trustedTypes,l6=_y?_y.emptyScript:"",u6=Vd.reactiveElementPolyfillSupport,ql=(e,t)=>e,rd={toAttribute(e,t){switch(t){case Boolean:e=e?l6:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Eg=(e,t)=>!r6(e,t),jy={attribute:!0,type:String,converter:rd,reflect:!1,useDefault:!1,hasChanged:Eg};Symbol.metadata??=Symbol("metadata"),Vd.litPropertyMetadata??=new WeakMap;let Gs=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=jy){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,r);i!==void 0&&n6(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){const{get:i,set:o}=i6(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get:i,set(s){const a=i?.call(this);o?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??jy}static _$Ei(){if(this.hasOwnProperty(ql("elementProperties")))return;const t=a6(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ql("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ql("properties"))){const r=this.properties,n=[...o6(r),...s6(r)];for(const i of n)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(Ly(i))}else t!==void 0&&r.push(Ly(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return t6(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const o=(n.converter?.toAttribute!==void 0?n.converter:rd).toAttribute(r,n.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,r){const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=n.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:rd;this._$Em=i;const a=s.fromAttribute(r,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,r,n,i=!1,o){if(t!==void 0){const s=this.constructor;if(i===!1&&(o=this[t]),n??=s.getPropertyOptions(t),!((n.hasChanged??Eg)(o,r)||n.useDefault&&n.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??r??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,o]of n){const{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Gs.elementStyles=[],Gs.shadowRootOptions={mode:"open"},Gs[ql("elementProperties")]=new Map,Gs[ql("finalized")]=new Map,u6?.({ReactiveElement:Gs}),(Vd.reactiveElementVersions??=[]).push("2.1.2");const Cg=globalThis,zy=e=>e,nd=Cg.trustedTypes,Uy=nd?nd.createPolicy("lit-html",{createHTML:e=>e}):void 0,Nk="$lit$",ho=`lit$${Math.random().toFixed(9).slice(2)}$`,Ok="?"+ho,c6=`<${Ok}>`,fs=document,ru=()=>fs.createComment(""),nu=e=>e===null||typeof e!="object"&&typeof e!="function",Sg=Array.isArray,d6=e=>Sg(e)||typeof e?.[Symbol.iterator]=="function",Mh=`[ 	
\f\r]`,pl=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qy=/-->/g,Wy=/>/g,Zo=RegExp(`>|${Mh}(?:([^\\s"'>=/]+)(${Mh}*=${Mh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vy=/'/g,Ky=/"/g,Rk=/^(?:script|style|textarea|title)$/i,f6=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),h6=f6(1),yn=Symbol.for("lit-noChange"),fe=Symbol.for("lit-nothing"),Hy=new WeakMap,ns=fs.createTreeWalker(fs,129);function Bk(e,t){if(!Sg(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Uy!==void 0?Uy.createHTML(t):t}const m6=(e,t)=>{const r=e.length-1,n=[];let i,o=t===2?"<svg>":t===3?"<math>":"",s=pl;for(let a=0;a<r;a++){const l=e[a];let u,d,f=-1,h=0;for(;h<l.length&&(s.lastIndex=h,d=s.exec(l),d!==null);)h=s.lastIndex,s===pl?d[1]==="!--"?s=qy:d[1]!==void 0?s=Wy:d[2]!==void 0?(Rk.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=Zo):d[3]!==void 0&&(s=Zo):s===Zo?d[0]===">"?(s=i??pl,f=-1):d[1]===void 0?f=-2:(f=s.lastIndex-d[2].length,u=d[1],s=d[3]===void 0?Zo:d[3]==='"'?Ky:Vy):s===Ky||s===Vy?s=Zo:s===qy||s===Wy?s=pl:(s=Zo,i=void 0);const g=s===Zo&&e[a+1].startsWith("/>")?" ":"";o+=s===pl?l+c6:f>=0?(n.push(u),l.slice(0,f)+Nk+l.slice(f)+ho+g):l+ho+(f===-2?a:g)}return[Bk(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class iu{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const a=t.length-1,l=this.parts,[u,d]=m6(t,r);if(this.el=iu.createElement(u,n),ns.currentNode=this.el.content,r===2||r===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=ns.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(Nk)){const h=d[s++],g=i.getAttribute(f).split(ho),m=/([.?@])?(.*)/.exec(h);l.push({type:1,index:o,name:m[2],strings:g,ctor:m[1]==="."?p6:m[1]==="?"?b6:m[1]==="@"?y6:Hd}),i.removeAttribute(f)}else f.startsWith(ho)&&(l.push({type:6,index:o}),i.removeAttribute(f));if(Rk.test(i.tagName)){const f=i.textContent.split(ho),h=f.length-1;if(h>0){i.textContent=nd?nd.emptyScript:"";for(let g=0;g<h;g++)i.append(f[g],ru()),ns.nextNode(),l.push({type:2,index:++o});i.append(f[h],ru())}}}else if(i.nodeType===8)if(i.data===Ok)l.push({type:2,index:o});else{let f=-1;for(;(f=i.data.indexOf(ho,f+1))!==-1;)l.push({type:7,index:o}),f+=ho.length-1}o++}}static createElement(t,r){const n=fs.createElement("template");return n.innerHTML=t,n}}function ma(e,t,r=e,n){if(t===yn)return t;let i=n!==void 0?r._$Co?.[n]:r._$Cl;const o=nu(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=i:r._$Cl=i),i!==void 0&&(t=ma(e,i._$AS(e,t.values),i,n)),t}class g6{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,i=(t?.creationScope??fs).importNode(r,!0);ns.currentNode=i;let o=ns.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let u;l.type===2?u=new Kd(o,o.nextSibling,this,t):l.type===1?u=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(u=new v6(o,this,t)),this._$AV.push(u),l=n[++a]}s!==l?.index&&(o=ns.nextNode(),s++)}return ns.currentNode=fs,i}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}let Kd=class Lk{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,i){this.type=2,this._$AH=fe,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ma(this,t,r),nu(t)?t===fe||t==null||t===""?(this._$AH!==fe&&this._$AR(),this._$AH=fe):t!==this._$AH&&t!==yn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):d6(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==fe&&nu(this._$AH)?this._$AA.nextSibling.data=t:this.T(fs.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=iu.createElement(Bk(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(r);else{const o=new g6(i,this),s=o.u(this.options);o.p(r),this.T(s),this._$AH=o}}_$AC(t){let r=Hy.get(t.strings);return r===void 0&&Hy.set(t.strings,r=new iu(t)),r}k(t){Sg(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of t)i===r.length?r.push(n=new Lk(this.O(ru()),this.O(ru()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const n=zy(t).nextSibling;zy(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}};class Hd{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,i,o){this.type=1,this._$AH=fe,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=fe}_$AI(t,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)t=ma(this,t,r,0),s=!nu(t)||t!==this._$AH&&t!==yn,s&&(this._$AH=t);else{const a=t;let l,u;for(t=o[0],l=0;l<o.length-1;l++)u=ma(this,a[n+l],r,l),u===yn&&(u=this._$AH[l]),s||=!nu(u)||u!==this._$AH[l],u===fe?t=fe:t!==fe&&(t+=(u??"")+o[l+1]),this._$AH[l]=u}s&&!i&&this.j(t)}j(t){t===fe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class p6 extends Hd{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===fe?void 0:t}}let b6=class extends Hd{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==fe)}},y6=class extends Hd{constructor(t,r,n,i,o){super(t,r,n,i,o),this.type=5}_$AI(t,r=this){if((t=ma(this,t,r,0)??fe)===yn)return;const n=this._$AH,i=t===fe&&n!==fe||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==fe&&(n===fe||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},v6=class{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){ma(this,t)}};const w6={I:Kd},k6=Cg.litHtmlPolyfillSupport;k6?.(iu,Kd),(Cg.litHtmlVersions??=[]).push("3.3.2");const x6=(e,t,r)=>{const n=r?.renderBefore??t;let i=n._$litPart$;if(i===void 0){const o=r?.renderBefore??null;n._$litPart$=i=new Kd(t.insertBefore(ru(),o),o,void 0,r??{})}return i._$AI(e),i};const Tg=globalThis;let Wl=class extends Gs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=x6(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return yn}};Wl._$litElement$=!0,Wl.finalized=!0,Tg.litElementHydrateSupport?.({LitElement:Wl});const $6=Tg.litElementPolyfillSupport;$6?.({LitElement:Wl});(Tg.litElementVersions??=[]).push("4.2.2");function _k({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}var ga;(function(e){e.Url="<url>",e.TransformList="<transform-list>",e.TransformFunction="<transform-function>",e.Time="<time>",e.String="<string>",e.Resolution="<resolution>",e.Percentage="<percentage>",e.Number="<number>",e.LengthPercentage="<length-percentage>",e.Length="<length>",e.Integer="<integer>",e.Image="<image>",e.CustomIdent="<custom-ident>",e.Color="<color>",e.Angle="<angle>",e.Any="*"})(ga||(ga={}));var Gy;(function(e){e.Space="+",e.Comma="#"})(Gy||(Gy={}));function xi(e,t={}){return ut(e,(n,i)=>{D6(n);const o=i,s=T.isObject(o)&&!(o instanceof Wi),a=T.isString(o)||T.isNumber(o)||o instanceof Wi?String(o):String(o.default),l=T.isString(o)||T.isNumber(o)||o instanceof Wi?String(o):String(o.initialValue||o.default),u=ve(Br({value:n.replace(/^-+/,""),prefix:"--"})),d={name:u,value:Ik`var(${u}, ${ve(a)})`,syntax:T.isString(o)||T.isNumber(o)||o instanceof Wi?ga.Any:r0(o.syntax),default:a},f=String(d.name);if(!l)throw new Error(`Initial value for CSS var ${f} cannot be empty.`);return s&&!t.skipRegistration&&Pk.registerProperty({inherits:!0,name:f,initialValue:l,syntax:d.syntax})&&globalThis.document?.documentElement&&_k({forCssVar:d,onElement:globalThis.document.documentElement,toValue:a}),d})}function D6(e){try{if(T.isString(e))if(e.includes("-")){if(e.toLowerCase()!==e)throw new Error("Must be lowercase.")}else throw new Error("Must have at least one dash (-).");else throw new TypeError("Must be string.")}catch(t){throw new Error(Na("Invalid CSS var name.",t,`Got '${$(e)}'`))}}function r0(e){return e?T.isString(e)?e:e.union?e.union.map(t=>r0(t)).join(" | "):e.list?`${r0(e.list.values)}${e.list.separator}`:e.raw:ga.Any}const We=xi({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),A6={nav:{hover:{background:We["element-book-nav-hover-background-color"],foreground:We["element-book-nav-hover-foreground-color"]},active:{background:We["element-book-nav-active-background-color"],foreground:We["element-book-nav-active-foreground-color"]},selected:{background:We["element-book-nav-selected-background-color"],foreground:We["element-book-nav-selected-foreground-color"]}},accent:{icon:We["element-book-accent-icon-color"]},page:{background:We["element-book-page-background-color"],backgroundFaint1:We["element-book-page-background-faint-level-1-color"],backgroundFaint2:We["element-book-page-background-faint-level-2-color"],foreground:We["element-book-page-foreground-color"],foregroundFaint1:We["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:We["element-book-page-foreground-faint-level-2-color"]}};function E6(e,t){jk(e,t,A6)}function n0(e){return T.hasKey(e,"_$cssResult$")}function Zy(e){return T.hasKeys(e,["name","value","default"])&&T.isString(e.default)&&n0(e.name)&&n0(e.value)}function jk(e,t,r){Object.entries(t).forEach(([n,i])=>{const o=r[n];if(!o)throw new Error(`no nestedCssVar at key '${n}'`);if(n0(i)){if(!Zy(o))throw new Error(`got a CSS result at '${n}' but no CSS var`);_k({forCssVar:o,onElement:e,toValue:String(i)})}else{if(Zy(o))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);jk(e,i,o)}})}function Ol(e,t){let r=e.length,n,i,o=!1,s=!1;Array.isArray(e[0])?n=e:(n=[e],r=n.length,o=!0),Array.isArray(t[0])?i=t:(i=t.length>0?t.map(d=>[d]):[[]],s=!0);let a=i[0].length,l=i[0].map((d,f)=>i.map(h=>h[f])),u=n.map(d=>l.map(f=>{let h=0;if(!Array.isArray(d)){for(let g of f)h+=d*g;return h}for(let g=0;g<d.length;g++)h+=d[g]*(f[g]||0);return h}));return r===1&&o&&(u=u[0]),a===1&&s?r===1&&o?u[0]:u.map(d=>d[0]):u}function Fh(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function kt(e,t,r=[0,0,0]){const n=Fh(e,t[0]),i=Fh(e,t[1]),o=Fh(e,t[2]);return r[0]=n,r[1]=i,r[2]=o,r}function za(e){return bo(e)==="string"}function bo(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Mg(e,{precision:t=16,unit:r}){return He(e)?"none":(e=+Fg(e,t),e+(r??""))}function He(e){return e===null}function Ft(e){return He(e)?0:e}function Fg(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const i=10**(t-n);return Math.floor(e*i+.5)/i}function ou(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function zk(e,t,r){return(r-e)/(t-e)}function i0(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:ou(t[0],t[1],zk(e[0],e[1],r))}function Gd(e,t,r){return Math.max(Math.min(r,t),e)}function Zd(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function Pt(e,t){return Zd(Math.abs(e)**t,e)}function Pg(e,t){return t===0?0:e/t}function Uk(e,t,r=0,n=e.length){for(;r<n;){const i=r+n>>1;e[i]<t?r=i+1:n=i}return r}function pa(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const n=Object.getPrototypeOf(e),i=n?.constructor?.name;if(i===r)return!0;if(!i||i==="Object")return!1;e=n}return!1}var C6=Object.freeze({__proto__:null,bisectLeft:Uk,clamp:Gd,copySign:Zd,interpolate:ou,interpolateInv:zk,isInstance:pa,isNone:He,isString:za,mapRange:i0,multiplyMatrices:Ol,multiply_v3_m3x3:kt,serializeNumber:Mg,skipNone:Ft,spow:Pt,toPrecision:Fg,type:bo,zdiv:Pg});class S6{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],r&&this[i][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const $o=new S6;var vn={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};let Yy=class{type;coordMeta;coordRange;range;constructor(t,r){if(typeof t=="object"&&(this.coordMeta=t),r&&(this.coordMeta=r,this.coordRange=r.range??r.refRange),typeof t=="string"){let n=t.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!n)throw new TypeError(`Cannot parse ${t} as a type definition.`);this.type=n.groups.type;let{min:i,max:o}=n.groups;(i||o)&&(this.range=[+i,+o])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(t){if(this.type==="<angle>")return t;let r=this.computedRange,n=this.coordRange;return this.type==="<percentage>"&&(n??=this.percentageRange()),i0(r,n,t)}serialize(t,r){let n=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,i=this.unit;return t=i0(this.coordRange,n,t),Mg(t,{unit:i,precision:r})}toString(){let t=this.type;if(this.range){let[r="",n=""]=this.range;t+=`[${r},${n}]`}return t}percentageRange(t=1){let r;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?r=[0,1]:r=[-1,1],[r[0]*t,r[1]*t]}static get(t,r){return pa(t,this)?t:new this(t,r)}};const Ph=Symbol("instance");class id{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[Ph]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(n=>{let i=["<number>","<percentage>"];return n.type==="angle"&&i.push("<angle>"),i})),this.coords=this.coords.map((n,i)=>{let o=this.spaceCoords[i];return typeof n=="string"&&(n=n.trim().split(/\s*\|\s*/)),n.map(s=>Yy.get(s,o))}))}serializeCoords(t,r,n){return n=t.map((i,o)=>Yy.get(n?.[o]??this.coords[o][0],this.spaceCoords[o])),t.map((i,o)=>n[o].serialize(i,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([n,i],o)=>{let s=t[o];if(He(s)||isNaN(s))return s;let a=r[o],l=this.coords[o].find(u=>u.type==a);if(!l){let u=i.name||n;throw new TypeError(`${a??s?.raw??s} not allowed for ${u} in ${this.name}()`)}return s=l.resolve(s),l.range&&(r[o]=l.toString()),s})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||pa(t,this)?t:t[Ph]?t[Ph]:new id(t,...r)}}const Or={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function o0(e){return Array.isArray(e)?e:Or[e]}function od(e,t,r,n={}){if(e=o0(e),t=o0(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let i={W1:e,W2:t,XYZ:r,options:n};if($o.run("chromatic-adaptation-start",i),i.M||(i.W1===Or.D65&&i.W2===Or.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===Or.D50&&i.W2===Or.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),$o.run("chromatic-adaptation-end",i),i.M)return kt(i.XYZ,i.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function qk(e,t){let r={str:String(e)?.trim(),options:t};if($o.run("parse-start",r),r.color)return r.color;r.parsed=M6(r.str);let n,i=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let o=r.parsed.name,s,a,l=r.parsed.args,u=l.map((h,g)=>r.parsed.argMeta[g]?.type);if(o==="color"){let h=l.shift();u.shift();let g=h.startsWith("--")?h.substring(2):`--${h}`,m=[h,g];if(s=Y.findFormat({name:o,id:m,type:"function"}),!s){let b,y=h in Y.registry?h:g;if(y in Y.registry){let x=Y.registry[y].formats?.color?.id;x&&(b=`Did you mean ${e.replace("color("+h,"color("+x)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+(b??"Missing a plugin?"))}a=s.space,s.id.startsWith("--")&&!h.startsWith("--")&&vn.warn(`${a.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${s.id}) instead of color(${h}).`),h.startsWith("--")&&!s.id.startsWith("--")&&vn.warn(`${a.name} is a standard space and supported in the CSS spec. Use color(${s.id}) instead of prefixed color(${h}).`)}else s=Y.findFormat({name:o,type:"function"}),a=s.space;i&&Object.assign(i,{format:s,formatId:s.name,types:u,commas:r.parsed.commas});let d=1;r.parsed.lastAlpha&&(d=r.parsed.args.pop(),i&&(i.alphaType=u.pop()));let f=s.coords.length;if(l.length!==f)throw new TypeError(`Expected ${f} coordinates for ${a.id} in ${r.str}), got ${l.length}`);l=s.coerceCoords(l,u),n={spaceId:a.id,coords:l,alpha:d}}else e:for(let o of Y.all)for(let s in o.formats){let a=o.formats[s];if(a.type!=="custom"||a.test&&!a.test(r.str))continue;let l=o.getFormat(a),u=l.parse(r.str);if(u){i&&Object.assign(i,{format:l,formatId:s}),n=u;break e}}if(!n)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return n.alpha=He(n.alpha)?n.alpha:n.alpha===void 0?1:Gd(0,n.alpha,1),n}const Wk={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},sd={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(Wk).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function T6(e){let t={},r=e.match(sd.unitValue)?.[0],n=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(n.slice(0,-r.length)),n=t.unitless*Wk[r]):sd.number.test(n)?(n=Number(n),t.type="<number>"):n==="none"?n=null:n==="NaN"||n==="calc(NaN)"?(n=NaN,t.type="<number>"):t.type="<ident>",{value:n,meta:t}}function M6(e){if(!e)return;e=e.trim();let t=e.match(sd.function);if(t){let r=[],n=[],i=!1,o=t[1].toLowerCase(),s=t[2].replace(sd.singleArgument,(a,l)=>{let{value:u,meta:d}=T6(l);return(a.startsWith("/")||o!=="color"&&r.length===3)&&(i=!0),r.push(u),n.push(d),""});return{name:o,args:r,argMeta:n,lastAlpha:i,commas:s.includes(","),rawName:t[1],rawArgs:t[2]}}}function be(e,t){if(Array.isArray(e))return e.map(n=>be(n,t));if(!e)throw new TypeError("Empty color reference");za(e)&&(e=qk(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=Y.get(r)),e.alpha===void 0&&(e.alpha=1),e}const F6=75e-6;class Y{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?Y.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=o0(n),this.formats=t.formats??{};for(let i in this.formats){let o=this.formats[i];o.type||="function",o.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:Y.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,o)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:P6(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),$o.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=F6}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((i,o)=>{let s=n[o];if(s.type!=="angle"&&s.range){if(He(i))return!0;let[a,l]=s.range;return(a===void 0||i>=a-r)&&(l===void 0||i<=l+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=id.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const a=be(t);[t,r]=[a.space,a.coords]}if(t=Y.get(t),this.equals(t))return r;r=r.map(a=>He(a)?0:a);let n=this.path,i=t.path,o,s;for(let a=0;a<n.length&&n[a].equals(i[a]);a++)o=n[a],s=a;if(!o)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>s;a--)r=n[a].toBase(r);for(let a=s+1;a<i.length;a++)r=i[a].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=be(t);[t,r]=[n.space,n.coords]}return t=Y.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],i=n.range||n.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(Y.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||pa(t,this))return t;if(bo(t)==="string"){let i=Y.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(r.length)return Y.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=Y.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let n of r)for(let[i,o]of Object.entries(n.formats)){o.name??=i,o.type??="function";let s=(!t.name||o.name===t.name)&&(!t.type||o.type===t.type);if(t.id){let a=o.ids||[o.id],l=Array.isArray(t.id)?t.id:[t.id];s&&=l.some(u=>a.includes(u))}if(s){let a=id.get(o,n);return a!==o&&(n.formats[o.name]=a),a}}return null}static resolveCoord(t,r){let n=bo(t),i,o;if(n==="string"?t.includes(".")?[i,o]=t.split("."):[i,o]=[,t]:Array.isArray(t)?[i,o]=t:(i=t.space,o=t.coordId),i=Y.get(i),i||(i=r),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=bo(o),n==="number"||n==="string"&&o>=0){let l=Object.entries(i.coords)[o];if(l)return{space:i,id:l[0],index:o,...l[1]}}i=Y.get(i);let s=o.toLowerCase(),a=0;for(let l in i.coords){let u=i.coords[l];if(l.toLowerCase()===s||u.name?.toLowerCase()===s)return{space:i,id:l,index:a,...u};a++}throw new TypeError(`No "${o}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function P6(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var cr=new Y({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Tr extends Y{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=cr),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=kt(r,t.toXYZ_M);return this.white!==this.base.white&&(n=od(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=od(this.base.white,this.white,r),kt(r,t.fromXYZ_M))),t.referred??="display",super(t)}}function Vk(e,t={}){if(Array.isArray(e))return e.map(l=>Vk(l,t));let{cssProperty:r="background-color",element:n,...i}=t,o=null;try{return be(e,i)}catch(l){o=l}let{CSS:s,getComputedStyle:a}=globalThis;if(za(e)&&n&&s&&a&&s.supports(r,e)){let l=n.style[r];e!==l&&(n.style[r]=e);let u=a(n).getPropertyValue(r);if(e!==l&&(n.style[r]=l),u!==e)try{return be(u,i)}catch(d){o=d}else o={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=o),null}function Cu(e,t){e=be(e);let r=Y.get(t,t?.space),n=t?.precision,i;return!r||e.space.equals(r)?i=e.coords.slice():i=r.from(e),n===void 0?i:i.map(o=>Fg(o,n))}function hn(e,t){if(e=be(e),t==="alpha")return e.alpha??1;let{space:r,index:n}=Y.resolveCoord(t,e.space);return Cu(e,r)[n]}function Ig(e,t,r,n){return e=be(e),Array.isArray(t)&&([t,r,n]=[e.space,t,r]),t=Y.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),n!==void 0&&(e.alpha=n),e}Ig.returns="color";function Zi(e,t,r){if(e=be(e),arguments.length===2&&bo(arguments[1])==="object"){let n=arguments[1];for(let i in n)Zi(e,i,n[i])}else if(typeof r=="function"&&(r=r(hn(e,t))),t==="alpha")e.alpha=r;else{let{space:n,index:i}=Y.resolveCoord(t,e.space),o=Cu(e,n);o[i]=r,Ig(e,n,o)}return e}Zi.returns="color";var Ng=new Y({id:"xyz-d50",name:"XYZ D50",white:"D50",base:cr,fromBase:e=>od(cr.white,"D50",e),toBase:e=>od("D50",cr.white,e)});const I6=216/24389,Jy=24/116,ac=24389/27;let Ih=Or.D50;var mn=new Y({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Ih,base:Ng,fromBase(e){let r=e.map((s,a)=>s/Ih[a]).map(s=>s>I6?Math.cbrt(s):(ac*s+16)/116),n=116*r[1]-16,i=500*(r[0]-r[1]),o=200*(r[1]-r[2]);return[n,i,o]},toBase(e){let[t,r,n]=e,i=[];return i[1]=(t+16)/116,i[0]=r/500+i[1],i[2]=i[1]-n/200,[i[0]>Jy?Math.pow(i[0],3):(116*i[0]-16)/ac,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ac,i[2]>Jy?Math.pow(i[2],3):(116*i[2]-16)/ac].map((s,a)=>s*Ih[a])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Ln(e){return typeof e!="number"?e:(e%360+360)%360}function Kk(e,t){let[r,n]=t,i=He(r),o=He(n);if(i&&o)return[r,n];if(i?r=n:o&&(n=r),e==="raw")return t;r=Ln(r),n=Ln(n);let s=n-r;return e==="increasing"?s<0&&(n+=360):e==="decreasing"?s>0&&(r+=360):e==="longer"?-180<s&&s<180&&(s>0?r+=360:n+=360):e==="shorter"&&(s>180?r+=360:s<-180&&(n+=360)),[r,n]}var wn=new Y({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:mn,fromBase(e){if(this.ε===void 0){let a=Object.values(this.base.coords)[1].refRange,l=a[1]-a[0];this.ε=l/1e5}let[t,r,n]=e,i=Math.abs(r)<this.ε&&Math.abs(n)<this.ε,o=i?null:Ln(Math.atan2(n,r)*180/Math.PI),s=i?0:Math.sqrt(r**2+n**2);return[t,s,o]},toBase(e){let[t,r,n]=e,i=null,o=null;return He(n)||(r=r<0?0:r,i=r*Math.cos(n*Math.PI/180),o=r*Math.sin(n*Math.PI/180)),[t,i,o]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const Xy=25**7,ad=Math.PI,Qy=180/ad,Us=ad/180;function e1(e){const t=e*e;return t*t*t*e}function Hk(e,t,{kL:r=1,kC:n=1,kH:i=1}={}){[e,t]=be([e,t]);let[o,s,a]=mn.from(e),l=wn.from(mn,[o,s,a])[1],[u,d,f]=mn.from(t),h=wn.from(mn,[u,d,f])[1];l<0&&(l=0),h<0&&(h=0);let g=(l+h)/2,m=e1(g),b=.5*(1-Math.sqrt(m/(m+Xy))),y=(1+b)*s,x=(1+b)*d,D=Math.sqrt(y**2+a**2),C=Math.sqrt(x**2+f**2),P=y===0&&a===0?0:Math.atan2(a,y),O=x===0&&f===0?0:Math.atan2(f,x);P<0&&(P+=2*ad),O<0&&(O+=2*ad),P*=Qy,O*=Qy;let H=u-o,ee=C-D,oe=O-P,X=P+O,ye=Math.abs(oe),ae;D*C===0?ae=0:ye<=180?ae=oe:oe>180?ae=oe-360:oe<-180?ae=oe+360:vn.warn("the unthinkable has happened");let $e=2*Math.sqrt(C*D)*Math.sin(ae*Us/2),Ue=(o+u)/2,Ge=(D+C)/2,yr=e1(Ge),Ct;D*C===0?Ct=X:ye<=180?Ct=X/2:X<360?Ct=(X+360)/2:Ct=(X-360)/2;let Sn=(Ue-50)**2,Tn=1+.015*Sn/Math.sqrt(20+Sn),Ur=1+.045*Ge,St=1;St-=.17*Math.cos((Ct-30)*Us),St+=.24*Math.cos(2*Ct*Us),St+=.32*Math.cos((3*Ct+6)*Us),St-=.2*Math.cos((4*Ct-63)*Us);let me=1+.015*Ge*St,vt=30*Math.exp(-1*((Ct-275)/25)**2),Ze=2*Math.sqrt(yr/(yr+Xy)),zt=-1*Math.sin(2*vt*Us)*Ze,Be=(H/(r*Tn))**2;return Be+=(ee/(n*Ur))**2,Be+=($e/(i*me))**2,Be+=zt*(ee/(n*Ur))*($e/(i*me)),Math.sqrt(Be)}const N6=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],O6=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],R6=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],yo=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var ti=new Y({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:cr,fromBase(e){let t=kt(e,N6);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),kt(t,R6,t)},toBase(e){let t=kt(e,yo);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,kt(t,O6,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function s0(e,t){[e,t]=be([e,t]);let[r,n,i]=ti.from(e),[o,s,a]=ti.from(t),l=r-o,u=n-s,d=i-a;return Math.sqrt(l**2+u**2+d**2)}const B6=75e-6;function as(e,t,{epsilon:r=B6}={}){e=be(e),t||(t=e.space),t=Y.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function ba(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Gk(e,t,r="lab"){r=Y.get(r);let n=r.from(e),i=r.from(t);return Math.sqrt(n.reduce((o,s,a)=>{let l=i[a];return He(s)||He(l)?o:o+(l-s)**2},0))}function L6(e,t){return Gk(e,t,"lab")}const _6=Math.PI,t1=_6/180;function j6(e,t,{l:r=2,c:n=1}={}){[e,t]=be([e,t]);let[i,o,s]=mn.from(e),[,a,l]=wn.from(mn,[i,o,s]),[u,d,f]=mn.from(t),h=wn.from(mn,[u,d,f])[1];a<0&&(a=0),h<0&&(h=0);let g=i-u,m=a-h,b=o-d,y=s-f,x=b**2+y**2-m**2,D=.511;i>=16&&(D=.040975*i/(1+.01765*i));let C=.0638*a/(1+.0131*a)+.638,P;He(l)&&(l=0),l>=164&&l<=345?P=.56+Math.abs(.2*Math.cos((l+168)*t1)):P=.36+Math.abs(.4*Math.cos((l+35)*t1));let O=Math.pow(a,4),H=Math.sqrt(O/(O+1900)),ee=C*(H*P+1-H),oe=(g/(r*D))**2;return oe+=(m/(n*C))**2,oe+=x/ee**2,Math.sqrt(oe)}const r1=203;var Og=new Y({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:cr,fromBase(e){return e.map(t=>t*r1)},toBase(e){return e.map(t=>t/r1)}});const lc=1.15,uc=.66,n1=2610/2**14,z6=2**14/2610,i1=3424/2**12,o1=2413/2**7,s1=2392/2**7,U6=1.7*2523/2**5,a1=2**5/(1.7*2523),cc=-.56,Nh=16295499532821565e-27,q6=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],W6=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],V6=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],K6=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]];var Zk=new Y({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:Og,fromBase(e){let[t,r,n]=e,i=lc*t-(lc-1)*n,o=uc*r-(uc-1)*t,a=kt([i,o,n],q6).map(function(h){let g=i1+o1*Pt(h/1e4,n1),m=1+s1*Pt(h/1e4,n1);return Pt(g/m,U6)}),[l,u,d]=kt(a,V6);return[(1+cc)*l/(1+cc*l)-Nh,u,d]},toBase(e){let[t,r,n]=e,i=(t+Nh)/(1+cc-cc*(t+Nh)),s=kt([i,r,n],K6).map(function(h){let g=i1-Pt(h,a1),m=s1*Pt(h,a1)-o1;return 1e4*Pt(g/m,z6)}),[a,l,u]=kt(s,W6),d=(a+(lc-1)*u)/lc,f=(l+(uc-1)*d)/uc;return[d,f,u]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),a0=new Y({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Zk,fromBase:wn.fromBase,toBase:wn.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function H6(e,t){[e,t]=be([e,t]);let[r,n,i]=a0.from(e),[o,s,a]=a0.from(t),l=r-o,u=n-s;He(i)&&He(a)?(i=0,a=0):He(i)?i=a:He(a)&&(a=i);let d=i-a,f=2*Math.sqrt(n*s)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+u**2+f**2)}const Yk=3424/4096,Jk=2413/128,Xk=2392/128,l1=2610/16384,G6=2523/32,Z6=16384/2610,u1=32/2523,Y6=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],J6=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],X6=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],Q6=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var l0=new Y({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Og,fromBase(e){let t=kt(e,Y6);return eC(t)},toBase(e){let t=tC(e);return kt(t,Q6)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function eC(e){let t=e.map(function(r){let n=Yk+Jk*(r/1e4)**l1,i=1+Xk*(r/1e4)**l1;return(n/i)**G6});return kt(t,J6)}function tC(e){return kt(e,X6).map(function(n){let i=Math.max(n**u1-Yk,0),o=Jk-Xk*n**u1;return 1e4*(i/o)**Z6})}function rC(e,t){[e,t]=be([e,t]);let[r,n,i]=l0.from(e),[o,s,a]=l0.from(t);return 720*Math.sqrt((r-o)**2+.25*(n-s)**2+(i-a)**2)}function nC(e,t){[e,t]=be([e,t]);let r=2,[n,i,o]=ti.from(e),[s,a,l]=ti.from(t),u=n-s,d=r*(i-a),f=r*(o-l);return Math.sqrt(u**2+d**2+f**2)}const iC=Or.D65,Qk=.42,c1=1/Qk,Oh=2*Math.PI,ex=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],oC=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],sC=[[460,451,288],[460,-891,-261],[460,-220,-6300]],aC={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Jo={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},lC=180/Math.PI,d1=Math.PI/180;function tx(e,t){return e.map(n=>{const i=Pt(t*Math.abs(n)*.01,Qk);return 400*Zd(i,n)/(i+27.13)})}function uC(e,t){const r=100/t*27.13**c1;return e.map(n=>{const i=Math.abs(n);return Zd(r*Pt(i/(400-i),c1),n)})}function cC(e){let t=Ln(e);t<=Jo.h[0]&&(t+=360);const r=Uk(Jo.h,t)-1,[n,i]=Jo.h.slice(r,r+2),[o,s]=Jo.e.slice(r,r+2),a=Jo.H[r],l=(t-n)/o;return a+100*l/(l+(i-t)/s)}function dC(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,i]=Jo.h.slice(r,r+2),[o,s]=Jo.e.slice(r,r+2);return Ln((t*(s*n-o*i)-100*n*s)/(t*(s-o)-100*s))}function rx(e,t,r,n,i){const o={};o.discounting=i,o.refWhite=e,o.surround=n;const s=e.map(y=>y*100);o.la=t,o.yb=r;const a=s[1],l=kt(s,ex);let u=aC[o.surround];const d=u[0];o.c=u[1],o.nc=u[2];const h=(1/(5*o.la+1))**4;o.fl=h*o.la+.1*(1-h)*(1-h)*Math.cbrt(5*o.la),o.flRoot=o.fl**.25,o.n=o.yb/a,o.z=1.48+Math.sqrt(o.n),o.nbb=.725*o.n**-.2,o.ncb=o.nbb;const g=Math.max(Math.min(d*(1-1/3.6*Math.exp((-o.la-42)/92)),1),0);o.dRgb=l.map(y=>ou(1,a/y,g)),o.dRgbInv=o.dRgb.map(y=>1/y);const m=l.map((y,x)=>y*o.dRgb[x]),b=tx(m,o.fl);return o.aW=o.nbb*(2*b[0]+b[1]+.05*b[2]),o}const f1=rx(iC,64/Math.PI*.2,20,"average",!1);function u0(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=Ln(e.h)*d1:r=dC(e.H)*d1;const n=Math.cos(r),i=Math.sin(r);let o=0;e.J!==void 0?o=Pt(e.J,1/2)*.1:e.Q!==void 0&&(o=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/o:e.M!==void 0?s=e.M/t.flRoot/o:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const a=Pt(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),l=.25*(Math.cos(r+2)+3.8),u=t.aW*Pt(o,2/t.c/t.z),d=5e4/13*t.nc*t.ncb*l,f=u/t.nbb,h=23*(f+.305)*Pg(a,23*d+a*(11*n+108*i)),g=h*n,m=h*i,b=uC(kt([f,g,m],sC).map(y=>y*1/1403),t.fl);return kt(b.map((y,x)=>y*t.dRgbInv[x]),oC).map(y=>y/100)}function nx(e,t){const r=e.map(C=>C*100),n=tx(kt(r,ex).map((C,P)=>C*t.dRgb[P]),t.fl),i=n[0]+(-12*n[1]+n[2])/11,o=(n[0]+n[1]-2*n[2])/9,s=(Math.atan2(o,i)%Oh+Oh)%Oh,a=.25*(Math.cos(s+2)+3.8),l=5e4/13*t.nc*t.ncb*Pg(a*Math.sqrt(i**2+o**2),n[0]+n[1]+1.05*n[2]+.305),u=Pt(l,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),d=t.nbb*(2*n[0]+n[1]+.05*n[2]),f=Pt(d/t.aW,.5*t.c*t.z),h=100*Pt(f,2),g=4/t.c*f*(t.aW+4)*t.flRoot,m=u*f,b=m*t.flRoot,y=Ln(s*lC),x=cC(y),D=50*Pt(t.c*u/(t.aW+4),1/2);return{J:h,C:m,h:y,s:D,Q:g,M:b,H:x}}var fC=new Y({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:cr,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=nx(e,f1),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return u0({J:e[0],M:e[1],h:e[2]},f1)}});const hC=Or.D65,mC=216/24389,ix=24389/27;function gC(e){return 116*(e>mC?Math.cbrt(e):(ix*e+16)/116)-16}function c0(e){return e>8?Math.pow((e+16)/116,3):e/ix}function pC(e,t){let[r,n,i]=e,o=[],s=0;if(i===0)return[0,0,0];let a=c0(i);i>0?s=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:s=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const l=2e-12,u=15;let d=0,f=1/0;for(;d<=u;){o=u0({J:s,C:n,h:r},t);const h=Math.abs(o[1]-a);if(h<f){if(h<=l)return o;f=h}s=s-(o[1]-a)*s/(2*o[1]),d+=1}return u0({J:s,C:n,h:r},t)}function bC(e,t){const r=gC(e[1]);if(r===0)return[0,0,0];const n=nx(e,Rg);return[Ln(n.h),n.C,r]}const Rg=rx(hC,200/Math.PI*c0(50),c0(50)*100,"average",!1);var su=new Y({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:cr,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=bC(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return pC(e,Rg)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const yC=Math.PI/180,h1=[1,.007,.0228];function m1(e){e[1]<0&&(e=su.fromBase(su.toBase(e)));const t=Math.log(Math.max(1+h1[2]*e[1]*Rg.flRoot,1))/h1[2],r=e[0]*yC,n=t*Math.cos(r),i=t*Math.sin(r);return[e[2],n,i]}function vC(e,t){[e,t]=be([e,t]);let[r,n,i]=m1(su.from(e)),[o,s,a]=m1(su.from(t));return Math.sqrt((r-o)**2+(n-s)**2+(i-a)**2)}var ya={deltaE76:L6,deltaECMC:j6,deltaE2000:Hk,deltaEJz:H6,deltaEITP:rC,deltaEOK:s0,deltaEOK2:nC,deltaEHCT:vC};function wC(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const g1={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function Do(e,{method:t=vn.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:i=2,blackWhiteClamp:o=void 0}={}){if(e=be(e),za(arguments[1])?r=arguments[1]:r||(r=e.space),r=Y.get(r),as(e,r,{epsilon:0}))return e;let s;if(t==="css")s=kC(e,{space:r});else{if(t!=="clip"&&!as(e,r)){Object.prototype.hasOwnProperty.call(g1,t)&&({method:t,jnd:i,deltaEMethod:n,blackWhiteClamp:o}=g1[t]);let a=Hk;if(n!==""){for(let u in ya)if("deltae"+n.toLowerCase()===u.toLowerCase()){a=ya[u];break}}i===0&&(i=1e-16);let l=Do(it(e,r),{method:"clip",space:r});if(a(e,l)>i){if(o&&Object.keys(o).length===3){let D=Y.resolveCoord(o.channel),C=hn(it(e,D.space),D.id);if(He(C)&&(C=0),C>=o.max)return it({space:"xyz-d65",coords:Or.D65},e.space);if(C<=o.min)return it({space:"xyz-d65",coords:[0,0,0]},e.space)}let u=Y.resolveCoord(t),d=u.space,f=u.id,h=it(e,d);h.coords.forEach((D,C)=>{He(D)&&(h.coords[C]=0)});let m=(u.range||u.refRange)[0],b=wC(i),y=m,x=hn(h,f);for(;x-y>b;){let D=ba(h);D=Do(D,{space:r,method:"clip"}),a(h,D)-i<b?y=hn(h,f):x=hn(h,f),Zi(h,f,(y+x)/2)}s=it(h,r)}else s=l}else s=it(e,r);if(t==="clip"||!as(s,r,{epsilon:0})){let a=Object.values(r.coords).map(l=>l.range||[]);s.coords=s.coords.map((l,u)=>{let[d,f]=a[u];return d!==void 0&&(l=Math.max(d,l)),f!==void 0&&(l=Math.min(l,f)),l})}}return r!==e.space&&(s=it(s,e.space)),e.coords=s.coords,e}Do.returns="color";const p1={WHITE:{space:ti,coords:[1,0,0],alpha:1},BLACK:{space:ti,coords:[0,0,0],alpha:1}};function kC(e,{space:t}={}){e=be(e),t||(t=e.space),t=Y.get(t);const i=Y.get("oklch");if(t.isUnbounded)return it(e,t);const o=it(e,i);let s=o.coords[0];if(s>=1){const m=it(p1.WHITE,t);return m.alpha=e.alpha,it(m,t)}if(s<=0){const m=it(p1.BLACK,t);return m.alpha=e.alpha,it(m,t)}if(as(o,t,{epsilon:0}))return it(o,t);function a(m){const b=it(m,t),y=Object.values(t.coords);return b.coords=b.coords.map((x,D)=>{if("range"in y[D]){const[C,P]=y[D].range;return Gd(C,x,P)}return x}),b}let l=0,u=o.coords[1],d=!0,f=ba(o),h=a(f),g=s0(h,f);if(g<.02)return h;for(;u-l>1e-4;){const m=(l+u)/2;if(f.coords[1]=m,d&&as(f,t,{epsilon:0}))l=m;else if(h=a(f),g=s0(h,f),g<.02){if(.02-g<1e-4)break;d=!1,l=m}else u=m}return h}function it(e,t,{inGamut:r}={}){e=be(e),t=Y.get(t);let n=t.from(e),i={space:t,coords:n,alpha:e.alpha};return r&&(i=Do(i,r===!0?void 0:r)),i}it.returns="color";function Vl(e,t={}){let{precision:r=vn.precision,format:n,inGamut:i=!0,coords:o,alpha:s,commas:a}=t,l,u=be(e),d=n,f=u.parseMeta;f&&!n&&(f.format.canSerialize()&&(n=f.format,d=f.formatId),o??=f.types,s??=f.alphaType,a??=f.commas),d&&(n=u.space.getFormat(n)??Y.findFormat(d)),n||(n=u.space.getFormat("default")??Y.DEFAULT_FORMAT,d=n.name),n&&n.space&&n.space!==u.space&&(u=it(u,n.space));let h=u.coords.slice();if(i||=n.toGamut,i&&!as(u)&&(h=Do(ba(u),i===!0?void 0:i).coords),n.type==="custom")if(n.serialize)l=n.serialize(h,u.alpha,t);else throw new TypeError(`format ${d} can only be used to parse colors, not for serialization`);else{let g=n.name||"color",m=n.serializeCoords(h,r,o);if(g==="color"){let C=n.id||n.ids?.[0]||u.space.cssId||u.space.id;m.unshift(C)}let b=u.alpha;s!==void 0&&typeof s!="object"&&(s=typeof s=="string"?{type:s}:{include:s});let y=s?.type??"<number>",x=s?.include===!0||n.alpha===!0||s?.include!==!1&&n.alpha!==!1&&b<1,D="";if(a??=n.commas,x){if(r!==null){let C;y==="<percentage>"&&(C="%",b*=100),b=Mg(b,{precision:r,unit:C})}D=`${a?",":" /"} ${b}`}l=`${g}(${m.join(a?", ":" ")}${D})`}return l}const xC=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],$C=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var au=new Tr({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:xC,fromXYZ_M:$C}),ox=new Tr({id:"rec2020",name:"REC.2020",base:au,toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return r*Math.pow(n,1/2.4)})}});const DC=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],AC=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var sx=new Tr({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:DC,fromXYZ_M:AC});const EC=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Zt=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var ax=new Tr({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:EC,fromXYZ_M:Zt}),b1={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let y1=Array(3).fill("<percentage> | <number>[0, 255]"),v1=Array(3).fill("<number>[0, 255]");var hs=new Tr({id:"srgb",name:"sRGB",base:ax,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:y1},rgb_number:{name:"rgb",commas:!0,coords:v1,alpha:!1},color:{},rgba:{coords:y1,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:v1},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:n}={})=>{(n!==!1&&t<1||n===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let i=r&&e.every(s=>s%17===0);return"#"+e.map(s=>i?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=b1.black,t.alpha=0):t.coords=b1[e],t.coords)return t}}}}),lx=new Tr({id:"p3",cssId:"display-p3",name:"P3",base:sx,fromBase:hs.fromBase,toBase:hs.toBase});vn.display_space=hs;let CC;if(typeof CSS<"u"&&CSS.supports)for(let e of[mn,ox,lx]){let t=e.getMinCoords(),n=Vl({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){vn.display_space=e;break}}function SC(e,{space:t=vn.display_space,...r}={}){e=be(e);let n=Vl(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!vn.display_space)n=new String(n),n.color=e;else{let i=e;if((e.coords.some(He)||He(e.alpha))&&!(CC??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=ba(e),i.coords=i.coords.map(Ft),i.alpha=Ft(i.alpha),n=Vl(i,r),CSS.supports("color",n)))return n=new String(n),n.color=i,n;i=it(i,t),n=new String(Vl(i,r)),n.color=i}return n}function TC(e,t,{space:r,hue:n="shorter"}={}){e=be(e),r||=e.space,r=Y.get(r);let i=Object.values(r.coords);[e,t]=[e,t].map(u=>it(u,r));let[o,s]=[e,t].map(u=>u.coords),a=o.map((u,d)=>{let f=i[d],h=s[d];return f.type==="angle"&&([u,h]=Kk(n,[u,h])),w1(u,h)}),l=w1(e.alpha,t.alpha);return{space:r,coords:a,alpha:l}}function w1(e,t){return He(e)||He(t)?e===t?null:0:e-t}function MC(e,t){return e=be(e),t=be(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function Ao(e){return hn(e,[cr,"y"])}function ux(e,t){Zi(e,[cr,"y"],t)}function FC(e){Object.defineProperty(e.prototype,"luminance",{get(){return Ao(this)},set(t){ux(this,t)}})}var PC=Object.freeze({__proto__:null,getLuminance:Ao,register:FC,setLuminance:ux});function IC(e,t){e=be(e),t=be(t);let r=Math.max(Ao(e),0),n=Math.max(Ao(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const NC=.56,OC=.57,RC=.62,BC=.65,k1=.022,LC=1.414,_C=.1,jC=5e-4,zC=1.14,x1=.027,UC=1.14;function $1(e){return e>=k1?e:e+(k1-e)**LC}function qs(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function qC(e,t){t=be(t),e=be(e);let r,n,i,o,s,a;t=it(t,"srgb"),[o,s,a]=t.coords.map(g=>He(g)?0:g);let l=qs(o)*.2126729+qs(s)*.7151522+qs(a)*.072175;e=it(e,"srgb"),[o,s,a]=e.coords.map(g=>He(g)?0:g);let u=qs(o)*.2126729+qs(s)*.7151522+qs(a)*.072175,d=$1(l),f=$1(u),h=f>d;return Math.abs(f-d)<jC?n=0:h?(r=f**NC-d**OC,n=r*zC):(r=f**BC-d**RC,n=r*UC),Math.abs(n)<_C?i=0:n>0?i=n-x1:i=n+x1,i*100}function WC(e,t){e=be(e),t=be(t);let r=Math.max(Ao(e),0),n=Math.max(Ao(t),0);n>r&&([r,n]=[n,r]);let i=r+n;return i===0?0:(r-n)/i}const VC=5e4;function KC(e,t){e=be(e),t=be(t);let r=Math.max(Ao(e),0),n=Math.max(Ao(t),0);return n>r&&([r,n]=[n,r]),n===0?VC:(r-n)/n}function HC(e,t){e=be(e),t=be(t);let r=hn(e,[mn,"l"]),n=hn(t,[mn,"l"]);return Math.abs(r-n)}const GC=216/24389,D1=24/116,dc=24389/27;let Rh=Or.D65;var d0=new Y({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Rh,base:cr,fromBase(e){let r=e.map((n,i)=>n/Rh[i]).map(n=>n>GC?Math.cbrt(n):(dc*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>D1?Math.pow(t[0],3):(116*t[0]-16)/dc,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/dc,t[2]>D1?Math.pow(t[2],3):(116*t[2]-16)/dc].map((n,i)=>n*Rh[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}});const Bh=Math.pow(5,.5)*.5+.5;function ZC(e,t){e=be(e),t=be(t);let r=hn(e,[d0,"l"]),n=hn(t,[d0,"l"]),i=Math.abs(Math.pow(r,Bh)-Math.pow(n,Bh)),o=Math.pow(i,1/Bh)*Math.SQRT2-40;return o<7.5?0:o}var Rc=Object.freeze({__proto__:null,contrastAPCA:qC,contrastDeltaPhi:ZC,contrastLstar:HC,contrastMichelson:WC,contrastWCAG21:IC,contrastWeber:KC});function YC(e,t,r){za(r)&&(r={algorithm:r});let{algorithm:n,...i}=r||{};if(!n){let o=Object.keys(Rc).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${o}`)}e=be(e),t=be(t);for(let o in Rc)if("contrast"+n.toLowerCase()===o.toLowerCase())return Rc[o](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Yd(e){let[t,r,n]=Cu(e,cr),i=t+15*r+3*n;return[4*t/i,9*r/i]}function cx(e){let[t,r,n]=Cu(e,cr),i=t+r+n;return[t/i,r/i]}function JC(e){Object.defineProperty(e.prototype,"uv",{get(){return Yd(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return cx(this)}})}var XC=Object.freeze({__proto__:null,register:JC,uv:Yd,xy:cx});function Rl(e,t,r={}){za(r)&&(r={method:r});let{method:n=vn.deltaE,...i}=r;for(let o in ya)if("deltae"+n.toLowerCase()===o.toLowerCase())return ya[o](e,t,i);throw new TypeError(`Unknown deltaE method: ${n}`)}function dx(e,t=.25){let n=[Y.get("oklch","lch"),"l"];return Zi(e,n,i=>i*(1+t))}function fx(e,t=.25){let n=[Y.get("oklch","lch"),"l"];return Zi(e,n,i=>i*(1-t))}dx.returns="color";fx.returns="color";var QC=Object.freeze({__proto__:null,darken:fx,lighten:dx});function hx(e,t,r,n={}){return[e,t]=[be(e),be(t)],bo(r)==="object"&&([r,n]=[.5,r]),Su(e,t,n)(r??.5)}function mx(e,t,r={}){let n;Bg(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:o,steps:s=2,maxSteps:a=1e3,...l}=r;n||([e,t]=[be(e),be(t)],n=Su(e,t,l));let u=Rl(e,t),d=i>0?Math.max(s,Math.ceil(u/i)+1):s,f=[];if(a!==void 0&&(d=Math.min(d,a)),d===1)f=[{p:.5,color:n(.5)}];else{let h=1/(d-1);f=Array.from({length:d},(g,m)=>{let b=m*h;return{p:b,color:n(b)}})}if(i>0){let h=f.reduce((g,m,b)=>{if(b===0)return 0;let y=Rl(m.color,f[b-1].color,o);return Math.max(g,y)},0);for(;h>i;){h=0;for(let g=1;g<f.length&&f.length<a;g++){let m=f[g-1],b=f[g],y=(b.p+m.p)/2,x=n(y);h=Math.max(h,Rl(x,m.color),Rl(x,b.color)),f.splice(g,0,{p:y,color:n(y)}),g++}}}return f=f.map(h=>h.color),f}function Su(e,t,r={}){if(Bg(e)){let[l,u]=[e,t];return Su(...l.rangeArgs.colors,{...l.rangeArgs.options,...u})}let{space:n,outputSpace:i,progression:o,premultiplied:s}=r;e=be(e),t=be(t),e=ba(e),t=ba(t);let a={colors:[e,t],options:r};if(n?n=Y.get(n):n=Y.registry[vn.interpolationSpace]||e.space,i=i?Y.get(i):n,e=it(e,n),t=it(t,n),e=Do(e),t=Do(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",u=[n,"h"],[d,f]=[hn(e,u),hn(t,u)];He(d)&&!He(f)?d=f:He(f)&&!He(d)&&(f=d),[d,f]=Kk(l,[d,f]),Zi(e,u,d),Zi(t,u,f)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=o?o(l):l;let u=e.coords.map((h,g)=>{let m=t.coords[g];return ou(h,m,l)}),d=ou(e.alpha,t.alpha,l),f={space:n,coords:u,alpha:d};return s&&(f.coords=f.coords.map(h=>h/d)),i!==n&&(f=it(f,i)),f},{rangeArgs:a})}function Bg(e){return bo(e)==="function"&&!!e.rangeArgs}vn.interpolationSpace="lab";function e8(e){e.defineFunction("mix",hx,{returns:"color"}),e.defineFunction("range",Su,{returns:"function<color>"}),e.defineFunction("steps",mx,{returns:"array<color>"})}var t8=Object.freeze({__proto__:null,isRange:Bg,mix:hx,range:Su,register:e8,steps:mx}),r8=new Y({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:hs,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,i,o]=e,[s,a,l]=[null,0,(r+t)/2],u=t-r;if(u!==0){switch(a=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(i-o)/u+(i<o?6:0);break;case i:s=(o-n)/u+2;break;case o:s=(n-i)/u+4}s=s*60}return a<0&&(s+=180,a=Math.abs(a)),s>=360&&(s-=360),[s,a*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function i(o){let s=(o+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(s-3,9-s,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),gx=new Y({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:hs,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[n,i,o]=e,[s,a,l]=[null,0,t],u=t-r;if(u!==0){switch(t){case n:s=(i-o)/u+(i<o?6:0);break;case i:s=(o-n)/u+2;break;case o:s=(n-i)/u+4}s=s*60}return l&&(a=u/l),s>=360&&(s-=360),[s,a*100,l*100]},toBase(e){let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function i(o){let s=(o+t/60)%6;return n-n*r*Math.max(0,Math.min(s,4-s,1))}return[i(5),i(3),i(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),n8=new Y({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:gx,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=r+n;if(i>=1){let a=r/i;return[t,0,a*100]}let o=1-n,s=o===0?0:1-r/o;return[t,s*100,o*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const i8=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],o8=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var px=new Tr({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:i8,fromXYZ_M:o8}),s8=new Tr({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:px,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const a8=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],l8=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var bx=new Tr({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Ng,toXYZ_M:a8,fromXYZ_M:l8});const u8=1/512,c8=16/512;var d8=new Tr({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:bx,toBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n<c8?t/16:r*n**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,n=t*r;return n>=u8?r*n**(1/1.8):16*t})}});const fc=1.09929682680944,A1=.018053968510807;var f8=new Tr({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:au,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n<A1*4.5?t/4.5:r*Math.pow((n+fc-1)/fc,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,n=t*r;return n>=A1?r*(fc*Math.pow(n,.45)-(fc-1)):4.5*t})}}),h8=new Y({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:ti,fromBase:wn.fromBase,toBase:wn.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});const va=2*Math.PI,ld=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],ud=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],Lh=Number.MAX_VALUE,Kl=.206,Lg=.03,Bl=(1+Kl)/(1+Lg);function lr(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let n=0;return e.forEach((i,o)=>{n+=i*t[o]}),n}function Hl(e){return .5*(Bl*e-Kl+Math.sqrt((Bl*e-Kl)*(Bl*e-Kl)+4*Lg*Bl*e))}function oa(e){return(e**2+Kl*e)/(Bl*(e+Lg))}function _g(e){let[t,r]=e;return[r/t,r/(1-t)]}function m8(e,t){let r=.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),n=.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))));return[r,n]}function jg(e,t){let r=kt(e,yo);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,kt(r,t,r)}function Jd(e,t,r,n){let i=p8(e,t,r,n),o=jg([1,i*e,i*t],r),s=Pt(1/Math.max(...o),1/3),a=s*i;return[s,a]}function g8(e,t,r,n,i,o,s,a){let l;if(a===void 0&&(a=Jd(e,t,o,s)),(r-i)*a[1]-(a[0]-i)*n<=0)l=a[1]*i/(n*a[0]+a[1]*(i-r));else{l=a[1]*(i-1)/(n*(a[0]-1)+a[1]*(i-r));let u=r-i,d=n,f=lr(yo[0].slice(1),[e,t]),h=lr(yo[1].slice(1),[e,t]),g=lr(yo[2].slice(1),[e,t]),m=u+d*f,b=u+d*h,y=u+d*g,x=i*(1-l)+l*r,D=l*n,C=x+D*f,P=x+D*h,O=x+D*g,H=C**3,ee=P**3,oe=O**3,X=3*m*C**2,ye=3*b*P**2,ae=3*y*O**2,$e=6*m**2*C,Ue=6*b**2*P,Ge=6*y**2*O,yr=lr(o[0],[H,ee,oe])-1,Ct=lr(o[0],[X,ye,ae]),Sn=lr(o[0],[$e,Ue,Ge]),Tn=Ct/(Ct*Ct-.5*yr*Sn),Ur=-yr*Tn,St=lr(o[1],[H,ee,oe])-1,me=lr(o[1],[X,ye,ae]),vt=lr(o[1],[$e,Ue,Ge]),Ze=me/(me*me-.5*St*vt),zt=-St*Ze,Be=lr(o[2],[H,ee,oe])-1,sr=lr(o[2],[X,ye,ae]),nn=lr(o[2],[$e,Ue,Ge]),on=sr/(sr*sr-.5*Be*nn),Si=-Be*on;Ur=Tn>=0?Ur:Lh,zt=Ze>=0?zt:Lh,Si=on>=0?Si:Lh,l+=Math.min(Ur,Math.min(zt,Si))}return l}function yx(e,t,r){let[n,i,o]=e,s=Jd(i,o,t,r),a=g8(i,o,n,1,n,t,r,s),l=_g(s),u=a/Math.min(n*l[0],(1-n)*l[1]),d=m8(i,o),f=n*d[0],h=(1-n)*d[1],g=.9*u*Math.sqrt(Math.sqrt(1/(1/f**4+1/h**4)));return f=n*.4,h=(1-n)*.8,[Math.sqrt(1/(1/f**2+1/h**2)),g,a]}function p8(e,t,r,n){let i,o,s,a,l,u,d,f;lr(n[0][0],[e,t])>1?([i,o,s,a,l]=n[0][1],[u,d,f]=r[0]):lr(n[1][0],[e,t])>1?([i,o,s,a,l]=n[1][1],[u,d,f]=r[1]):([i,o,s,a,l]=n[2][1],[u,d,f]=r[2]);let h=i+o*e+s*t+a*e**2+l*e*t,g=lr(yo[0].slice(1),[e,t]),m=lr(yo[1].slice(1),[e,t]),b=lr(yo[2].slice(1),[e,t]),y=1+h*g,x=1+h*m,D=1+h*b,C=y**3,P=x**3,O=D**3,H=3*g*y**2,ee=3*m*x**2,oe=3*b*D**2,X=6*g**2*y,ye=6*m**2*x,ae=6*b**2*D,$e=u*C+d*P+f*O,Ue=u*H+d*ee+f*oe,Ge=u*X+d*ye+f*ae;return h=h-$e*Ue/(Ue**2-.5*$e*Ge),h}function b8(e,t,r){let[n,i,o]=e,s=oa(o),a=null,l=null;if(n=Ln(n)/360,s!==0&&s!==1&&i!==0){let u=Math.cos(va*n),d=Math.sin(va*n),[f,h,g]=yx([s,u,d],t,r),m=.8,b=1.25,y,x,D,C;i<m?(y=b*i,x=0,D=m*f,C=1-D/h):(y=5*(i-.8),x=h,D=.2*h**2*1.25**2/f,C=1-D/(g-h));let P=x+y*D/(1-C*y);a=P*u,l=P*d}return[s,a,l]}function y8(e,t,r){let n=1e-7,i=1e-4,o=e[0],s=0,a=Hl(o),l=Math.sqrt(e[1]**2+e[2]**2),u=.5+Math.atan2(-e[2],-e[1])/va;if(a!==0&&a!==1&&l!==0){let f=e[1]/l,h=e[2]/l,[g,m,b]=yx([o,f,h],t,r),y=.8,x=1.25,D,C,P,O;l<m?(C=y*g,P=1-C/m,O=l/(C+P*l),s=O*y):(D=m,C=.2*m**2*x**2/g,P=1-C/(b-m),O=(l-D)/(C+P*(l-D)),s=y+.2*O)}const d=Math.abs(s)<i;return d||a===0||Math.abs(1-a)<n?(u=null,d||(s=0)):u=Ln(u*360),[u,s,a]}var v8=new Y({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:ti,gamutSpace:"self",fromBase(e){return y8(e,ld,ud)},toBase(e){return b8(e,ld,ud)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),vx=new Y({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:ti,fromBase(e){return[Hl(e[0]),e[1],e[2]]},toBase(e){return[oa(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),w8=new Y({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:vx,fromBase:wn.fromBase,toBase:wn.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function k8(e,t,r){let[n,i,o]=e;n=Ln(n)/360;let s=oa(o),a=null,l=null;if(s!==0&&i!==0){let u=Math.cos(va*n),d=Math.sin(va*n),f=Jd(u,d,t,r),[h,g]=_g(f),m=.5,b=1-m/h,y=1-i*m/(m+g-g*b*i),x=i*g*m/(m+g-g*b*i);s=o*y;let D=o*x,C=oa(y),P=x*C/y,O=oa(s);D=D*O/s,s=O;let[H,ee,oe]=jg([C,u*P,d*P],t),X=Pt(1/Math.max(Math.max(H,ee),Math.max(oe,0)),1/3);s=s*X,D=D*X,a=D*u,l=D*d}return[s,a,l]}function x8(e,t,r){let n=1e-4,i=e[0],o=0,s=Hl(i),a=Math.sqrt(e[1]**2+e[2]**2),l=.5+Math.atan2(-e[2],-e[1])/va;if(i!==0&&i!==1&&a!==0){let u=e[1]/a,d=e[2]/a,f=Jd(u,d,t,r),[h,g]=_g(f),m=.5,b=1-m/h,y=g/(a+i*g),x=y*i,D=y*a,C=oa(x),P=D*C/x,[O,H,ee]=jg([C,u*P,d*P],t),oe=Pt(1/Math.max(Math.max(O,H),Math.max(ee,0)),1/3);i=i/oe,a=a/oe,a=a*Hl(i)/i,i=Hl(i),s=i/x,o=(m+g)*D/(g*m+g*b*D)}return Math.abs(o)<n||s===0?l=null:l=Ln(l*360),[l,o,s]}var $8=new Y({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:ti,gamutSpace:"self",fromBase(e){return x8(e,ld,ud)},toBase(e){return k8(e,ld,ud)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});let wx=Or.D65;const D8=216/24389,E1=24389/27,[C1,S1]=Yd({space:cr,coords:wx});var kx=new Y({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:wx,base:cr,fromBase(e){let t=[Ft(e[0]),Ft(e[1]),Ft(e[2])],r=t[1],[n,i]=Yd({space:cr,coords:t});if(!Number.isFinite(n)||!Number.isFinite(i))return[0,0,0];let o=r<=D8?E1*r:116*Math.cbrt(r)-16;return[o,13*o*(n-C1),13*o*(i-S1)]},toBase(e){let[t,r,n]=e;if(t===0||He(t))return[0,0,0];r=Ft(r),n=Ft(n);let i=r/(13*t)+C1,o=n/(13*t)+S1,s=t<=8?t/E1:Math.pow((t+16)/116,3);return[s*(9*i/(4*o)),s,s*((12-3*i-20*o)/(4*o))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),zg=new Y({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:kx,fromBase:wn.fromBase,toBase:wn.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const A8=216/24389,E8=24389/27,T1=Zt[0][0],M1=Zt[0][1],_h=Zt[0][2],F1=Zt[1][0],P1=Zt[1][1],jh=Zt[1][2],I1=Zt[2][0],N1=Zt[2][1],zh=Zt[2][2];function Ws(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}function cd(e){const t=Math.pow(e+16,3)/1560896,r=t>A8?t:e/E8,n=r*(284517*T1-94839*_h),i=r*(838422*_h+769860*M1+731718*T1),o=r*(632260*_h-126452*M1),s=r*(284517*F1-94839*jh),a=r*(838422*jh+769860*P1+731718*F1),l=r*(632260*jh-126452*P1),u=r*(284517*I1-94839*zh),d=r*(838422*zh+769860*N1+731718*I1),f=r*(632260*zh-126452*N1);return{r0s:n/o,r0i:i*e/o,r1s:n/(o+126452),r1i:(i-769860)*e/(o+126452),g0s:s/l,g0i:a*e/l,g1s:s/(l+126452),g1i:(a-769860)*e/(l+126452),b0s:u/f,b0i:d*e/f,b1s:u/(f+126452),b1i:(d-769860)*e/(f+126452)}}function O1(e,t){const r=t/360*Math.PI*2,n=Ws(e.r0s,e.r0i,r),i=Ws(e.r1s,e.r1i,r),o=Ws(e.g0s,e.g0i,r),s=Ws(e.g1s,e.g1i,r),a=Ws(e.b0s,e.b0i,r),l=Ws(e.b1s,e.b1i,r);return Math.min(n,i,o,s,a,l)}var C8=new Y({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:zg,gamutSpace:hs,fromBase(e){let[t,r,n]=[Ft(e[0]),Ft(e[1]),Ft(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=cd(t),s=O1(o,n);i=r/s*100}return[n,i,t]},toBase(e){let[t,r,n]=[Ft(e[0]),Ft(e[1]),Ft(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let o=cd(n);i=O1(o,t)/100*r}return[n,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Zt[0][0];Zt[0][1];Zt[0][2];Zt[1][0];Zt[1][1];Zt[1][2];Zt[2][0];Zt[2][1];Zt[2][2];function Vs(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function R1(e){let t=Vs(e.r0s,e.r0i),r=Vs(e.r1s,e.r1i),n=Vs(e.g0s,e.g0i),i=Vs(e.g1s,e.g1i),o=Vs(e.b0s,e.b0i),s=Vs(e.b1s,e.b1i);return Math.min(t,r,n,i,o,s)}var S8=new Y({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:zg,gamutSpace:"self",fromBase(e){let[t,r,n]=[Ft(e[0]),Ft(e[1]),Ft(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let o=cd(t),s=R1(o);i=r/s*100}return[n,i,t]},toBase(e){let[t,r,n]=[Ft(e[0]),Ft(e[1]),Ft(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let o=cd(n);i=R1(o)/100*r}return[n,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Ug=new Tr({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:au.toBase,fromBase:au.fromBase});const B1=203,L1=2610/2**14,T8=2**14/2610,M8=2523/2**5,_1=2**5/2523,j1=3424/2**12,z1=2413/2**7,U1=2392/2**7;var F8=new Tr({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Ug,toBase(e){return e.map(function(t){return(Math.max(t**_1-j1,0)/(z1-U1*t**_1))**T8*1e4/B1})},fromBase(e){return e.map(function(t){let r=Math.max(t*B1/1e4,0),n=j1+z1*r**L1,i=1+U1*r**L1;return(n/i)**M8})}});const q1=.17883277,W1=.28466892,V1=.55991073,Uh=3.7743;var P8=new Tr({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Ug,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Uh:(Math.exp((t-V1)/q1)+W1)/12*Uh})},fromBase(e){return e.map(function(t){return t/=Uh,t<=1/12?Pt(3*t,.5):q1*Math.log(12*t-W1)+V1})}});const xx={};$o.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=$x(e.W1,e.W2,e.options.method))});$o.add("chromatic-adaptation-end",e=>{e.M||(e.M=$x(e.W1,e.W2,e.options.method))});function Xd({id:e,toCone_M:t,fromCone_M:r}){xx[e]=arguments[0]}function $x(e,t,r="Bradford"){let n=xx[r],[i,o,s]=Ol(n.toCone_M,e),[a,l,u]=Ol(n.toCone_M,t),d=[[a/i,0,0],[0,l/o,0],[0,0,u/s]],f=Ol(d,n.toCone_M);return Ol(n.fromCone_M,f)}Xd({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Xd({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Xd({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Xd({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(Or,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Or.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const I8=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],N8=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Dx=new Tr({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Or.ACES,toXYZ_M:I8,fromXYZ_M:N8});const hc=2**-16,qh=-.35828683,mc=(Math.log2(65504)+9.72)/17.52;var O8=new Tr({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[qh,mc],name:"Red"},g:{range:[qh,mc],name:"Green"},b:{range:[qh,mc],name:"Blue"}},referred:"scene",base:Dx,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-hc)*2:r<mc?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(hc)+9.72)/17.52:t<hc?(Math.log2(hc+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),K1=Object.freeze({__proto__:null,A98RGB:s8,A98RGB_Linear:px,ACEScc:O8,ACEScg:Dx,CAM16_JMh:fC,HCT:su,HPLuv:S8,HSL:r8,HSLuv:C8,HSV:gx,HWB:n8,ICTCP:l0,JzCzHz:a0,Jzazbz:Zk,LCH:wn,LCHuv:zg,Lab:mn,Lab_D65:d0,Luv:kx,OKLCH:h8,OKLab:ti,OKLrCH:w8,OKLrab:vx,Okhsl:v8,Okhsv:$8,P3:lx,P3_Linear:sx,ProPhoto:d8,ProPhoto_Linear:bx,REC_2020:ox,REC_2020_Linear:au,REC_2020_Scene_Referred:f8,REC_2100_HLG:P8,REC_2100_Linear:Ug,REC_2100_PQ:F8,XYZ_ABS_D65:Og,XYZ_D50:Ng,XYZ_D65:cr,sRGB:hs,sRGB_Linear:ax});let ot=class Kr{constructor(...t){let r;if(t.length===1){let s={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=be(t[0],{parseMeta:s}),s.format&&(this.parseMeta=s)}let n,i,o;r?(n=r.space||r.spaceId,i=r.coords,o=r.alpha):[n,i,o]=t,Object.defineProperty(this,"space",{value:Y.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=He(o)?o:o===void 0?1:Gd(0,o,1);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:a=>this.set(s,a)})}get spaceId(){return this.space.id}clone(){return new Kr(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=SC(this,...t);return r.color=new Kr(r.color),r}static get(t,...r){return pa(t,this)?t:new Kr(t,...r)}static try(t,r){if(pa(t,this))return t;let n=Vk(t,r);return n?new Kr(n):null}static defineFunction(t,r,n=r){let{instance:i=!0,returns:o}=n,s=function(...a){let l=r(...a);if(o==="color")l=Kr.get(l);else if(o==="function<color>"){let u=l;l=function(...d){let f=u(...d);return Kr.get(f)},Object.assign(l,u)}else o==="array<color>"&&(l=l.map(u=>Kr.get(u)));return l};t in Kr||(Kr[t]=s),i&&(Kr.prototype[t]=function(...a){return s(this,...a)})}static defineFunctions(t){for(let r in t)Kr.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(Kr);else for(let r in t)Kr.defineFunction(r,t[r])}};ot.defineFunctions({get:hn,getAll:Cu,set:Zi,setAll:Ig,to:it,equals:MC,inGamut:as,toGamut:Do,distance:Gk,deltas:TC,toString:Vl});Object.assign(ot,{util:C6,hooks:$o,WHITES:Or,Space:Y,spaces:Y.registry,parse:qk,defaults:vn});for(let e of Object.keys(K1))Y.register(K1[e]);for(let e in Y.registry)f0(e,Y.registry[e]);$o.add("colorspace-init-end",e=>{f0(e.id,e),e.aliases?.forEach(t=>{f0(t,e)})});function f0(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(ot.prototype,r,{get(){let n=this.getAll(e);if(typeof Proxy>"u")return n;let i=new Proxy(n,{has:((o,s)=>{try{return Y.resolveCoord([t,s]),!0}catch{}return Reflect.has(o,s)}),get:(o,s,a)=>{if(s&&typeof s!="symbol"&&!(s in o)&&s in i){let{index:l}=Y.resolveCoord([t,s]);if(l>=0)return o[l]}return Reflect.get(o,s,a)},set:(o,s,a,l)=>{if(s&&typeof s!="symbol"&&!(s in o)||Number(s)>=0){let{index:u}=Y.resolveCoord([t,s]);if(u>=0)return o[u]=a,this.setAll(e,o),!0}return Reflect.set(o,s,a,l)}});return i},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}ot.extend(ya);ot.extend({deltaE:Rl});Object.assign(ot,{deltaEMethods:ya});ot.extend(QC);ot.extend({contrast:YC});ot.extend(XC);ot.extend(PC);ot.extend(t8);ot.extend(Rc);const Ax=Symbol("no update");function H1(e){return e!==Ax}class Wh extends li()("observable-value-update"){}class R8 extends li()("observable-value-resolve"){}class B8 extends li()("observable-value-error"){}class L8 extends bg("observable-destroy"){}class _8 extends bg("observable-callback-call"){}class j8 extends li()("observable-params-update"){}class Ex{listenTarget=new yg;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];if(r===Ax)return!1;if(!(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)){const i=this.value;return this.value=r,this.listenTarget.dispatch(new Wh({detail:[r,i]})),!0}return!1}listen(t,r){const n=i=>r(...i.detail);return this.listenerMap.set(r,n),t&&r(this.value,void 0),this.listenTarget.listen(Wh,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(Wh,r)}destroy(){this.listenTarget.dispatch(new L8),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function qg(e,t){return rE(e,t,(r,n)=>T.isFunction(r)&&T.isFunction(n)?!0:T.strictEquals(r,n))}var Gl;(function(e){e.Rejected="rejected",e.Waiting="waiting",e.Resolved="resolved"})(Gl||(Gl={}));class z8 extends Ex{equalityCheck;waitingForValueDeferredPromise=new Kc;lastSetPromise;lastSetId=na();value=this.waitingForValueDeferredPromise.promise;lastResolvedValue=void 0;constructor(t={}){super(),this.equalityCheck="equalityCheck"in t?t.equalityCheck:qg,"defaultValue"in t&&this.setValue(t.defaultValue)}setPromise(t){if(t===this.lastSetPromise)return!1;const r=na();return this.lastSetId=r,this.lastSetPromise=t,this.waitingForValueDeferredPromise.isSettled&&(this.waitingForValueDeferredPromise=new Kc,super.setValue(this.waitingForValueDeferredPromise.promise,T.strictEquals)),t.then(n=>{this.lastSetPromise!==t||this.lastSetId!==r||this.resolveValue(n)}).catch(n=>{if(this.lastSetPromise!==t||this.lastSetId!==r)return;this.waitingForValueDeferredPromise.promise.catch(()=>{});const i=xt(n);console.error(i),this.rejectValue(i)}),!0}resolveValue(t){return H1(t)||(t=this.lastResolvedValue),(this.value instanceof Promise?super.setValue(t,T.strictEquals):super.setValue(t))?(this.lastResolvedValue=t,this.lastSetId=na(),this.waitingForValueDeferredPromise.isSettled||this.waitingForValueDeferredPromise.resolve(t),this.dispatch(new R8({detail:t})),!0):!1}rejectValue(t){this.waitingForValueDeferredPromise.reject(t),super.setValue(t,T.strictEquals),this.dispatch(new B8({detail:t}))}setValue(t){try{return t instanceof Promise?this.setPromise(t):t instanceof Error?(this.rejectValue(t),!0):H1(t)?this.resolveValue(t):!1}catch(r){return this.rejectValue(xt(r)),!0}}listen(t,r){return super.listen(t,r)}get resolvedValue(){if(!(this.value instanceof Promise||this.value instanceof Error))return this.value}get settledValue(){if(!(this.value instanceof Promise))return this.value}get promiseValue(){return this.value instanceof Error?Promise.reject(this.value):this.value instanceof Promise?this.value:Promise.resolve(this.value)}get state(){return this.value instanceof Error?Gl.Rejected:this.value instanceof Promise?Gl.Waiting:Gl.Resolved}}class Js extends z8{static NotSet=Symbol("not set");updateCallback;equalityCheck;get lastParams(){if(this.internalParams!==Js.NotSet)return this.internalParams}internalParams;constructor(t={}){super(t),this.equalityCheck="equalityCheck"in t?t.equalityCheck:qg,this.updateCallback=t.updateCallback,this.internalParams="defaultParams"in t?t.defaultParams:Js.NotSet}updateFromCallback(){if(this.updateCallback){if(this.internalParams===Js.NotSet)throw new TypeError("Cannot update value: params were never set.")}else throw new TypeError("Cannot update value: updateCallback was never set.");try{return this.setValue(this.updateCallback(this.internalParams,this.lastResolvedValue))}catch(t){return this.setValue(xt(t))}finally{this.dispatch(new _8)}}updateLastParams(t){try{return this.internalParams===Js.NotSet||!this.equalityCheck?.(t,this.internalParams)?(this.internalParams=t,this.dispatch(new j8({detail:this.internalParams})),!0):!1}catch(r){return this.setValue(xt(r)),!1}}update(...[t]){return this.updateLastParams(t)?(this.updateFromCallback(),!0):!1}setParams(t){return this.updateLastParams(t)}forceUpdate(...t){return T.isLengthAtLeast(t,1)&&this.updateLastParams(t[0]),this.updateFromCallback()}}function U8(e){return Bt(e)&&!rn(e)&&!Mu(e)&&Symbol.asyncIterator in e}function rn(e){return Array.isArray(e)}function Cx(e){return typeof e=="bigint"}function Tu(e){return typeof e=="boolean"}function Wg(e){return e instanceof globalThis.Date}function q8(e){return typeof e=="function"}function W8(e){return Bt(e)&&!rn(e)&&!Mu(e)&&Symbol.iterator in e}function V8(e){return e===null}function $i(e){return typeof e=="number"}function Bt(e){return typeof e=="object"&&e!==null}function Sx(e){return e instanceof globalThis.RegExp}function Et(e){return typeof e=="string"}function K8(e){return typeof e=="symbol"}function Mu(e){return e instanceof globalThis.Uint8Array}function It(e){return e===void 0}function H8(e){return e.map(t=>dd(t))}function G8(e){return new Date(e.getTime())}function Z8(e){return new Uint8Array(e)}function Y8(e){return new RegExp(e.source,e.flags)}function J8(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=dd(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=dd(e[r]);return t}function dd(e){return rn(e)?H8(e):Wg(e)?G8(e):Mu(e)?Z8(e):Sx(e)?Y8(e):Bt(e)?J8(e):e}function kn(e){return dd(e)}function Vg(e,t){return kn(t===void 0?e:{...t,...e})}function Tx(e){return Di(e)&&globalThis.Symbol.asyncIterator in e}function Mx(e){return Di(e)&&globalThis.Symbol.iterator in e}function Fx(e){return e instanceof globalThis.Promise}function Kg(e){return e instanceof Date&&globalThis.Number.isFinite(e.getTime())}function Hg(e){return e instanceof globalThis.Uint8Array}function Px(e,t){return t in e}function Di(e){return e!==null&&typeof e=="object"}function xn(e){return globalThis.Array.isArray(e)&&!globalThis.ArrayBuffer.isView(e)}function Fo(e){return e===void 0}function Qd(e){return e===null}function ef(e){return typeof e=="boolean"}function Ae(e){return typeof e=="number"}function Ix(e){return globalThis.Number.isInteger(e)}function ji(e){return typeof e=="bigint"}function pn(e){return typeof e=="string"}function Nx(e){return typeof e=="function"}function tf(e){return typeof e=="symbol"}function Ox(e){return ji(e)||ef(e)||Qd(e)||Ae(e)||pn(e)||tf(e)||Fo(e)}var At;(function(e){e.InstanceMode="default",e.ExactOptionalPropertyTypes=!1,e.AllowArrayObject=!1,e.AllowNaN=!1,e.AllowNullVoid=!1;function t(s,a){return e.ExactOptionalPropertyTypes?a in s:s[a]!==void 0}e.IsExactOptionalProperty=t;function r(s){const a=Di(s);return e.AllowArrayObject?a:a&&!xn(s)}e.IsObjectLike=r;function n(s){return r(s)&&!(s instanceof Date)&&!(s instanceof Uint8Array)}e.IsRecordLike=n;function i(s){return e.AllowNaN?Ae(s):Number.isFinite(s)}e.IsNumberLike=i;function o(s){const a=Fo(s);return e.AllowNullVoid?a||s===null:a}e.IsVoidLike=o})(At||(At={}));function X8(e){return globalThis.Object.freeze(e).map(t=>fd(t))}function Q8(e){const t={};for(const r of Object.getOwnPropertyNames(e))t[r]=fd(e[r]);for(const r of Object.getOwnPropertySymbols(e))t[r]=fd(e[r]);return globalThis.Object.freeze(t)}function fd(e){return rn(e)?X8(e):Wg(e)?e:Mu(e)?e:Sx(e)?e:Bt(e)?Q8(e):e}function z(e,t){const r=t!==void 0?{...t,...e}:e;switch(At.InstanceMode){case"freeze":return fd(r);case"clone":return kn(r);default:return r}}class gr extends Error{constructor(t){super(t)}}const Xr=Symbol.for("TypeBox.Transform"),Fu=Symbol.for("TypeBox.Readonly"),Ji=Symbol.for("TypeBox.Optional"),rf=Symbol.for("TypeBox.Hint"),_=Symbol.for("TypeBox.Kind");function Gg(e){return Bt(e)&&e[Fu]==="Readonly"}function Po(e){return Bt(e)&&e[Ji]==="Optional"}function Rx(e){return Oe(e,"Any")}function Bx(e){return Oe(e,"Argument")}function Ua(e){return Oe(e,"Array")}function nf(e){return Oe(e,"AsyncIterator")}function of(e){return Oe(e,"BigInt")}function Pu(e){return Oe(e,"Boolean")}function qa(e){return Oe(e,"Computed")}function Wa(e){return Oe(e,"Constructor")}function e9(e){return Oe(e,"Date")}function Va(e){return Oe(e,"Function")}function Ka(e){return Oe(e,"Integer")}function zn(e){return Oe(e,"Intersect")}function sf(e){return Oe(e,"Iterator")}function Oe(e,t){return Bt(e)&&_ in e&&e[_]===t}function Lx(e){return Tu(e)||$i(e)||Et(e)}function xs(e){return Oe(e,"Literal")}function $s(e){return Oe(e,"MappedKey")}function En(e){return Oe(e,"MappedResult")}function Iu(e){return Oe(e,"Never")}function t9(e){return Oe(e,"Not")}function Zg(e){return Oe(e,"Null")}function Ha(e){return Oe(e,"Number")}function ui(e){return Oe(e,"Object")}function af(e){return Oe(e,"Promise")}function lf(e){return Oe(e,"Record")}function en(e){return Oe(e,"Ref")}function _x(e){return Oe(e,"RegExp")}function Nu(e){return Oe(e,"String")}function Yg(e){return Oe(e,"Symbol")}function Ds(e){return Oe(e,"TemplateLiteral")}function r9(e){return Oe(e,"This")}function st(e){return Bt(e)&&Xr in e}function As(e){return Oe(e,"Tuple")}function Ou(e){return Oe(e,"Undefined")}function or(e){return Oe(e,"Union")}function n9(e){return Oe(e,"Uint8Array")}function i9(e){return Oe(e,"Unknown")}function o9(e){return Oe(e,"Unsafe")}function s9(e){return Oe(e,"Void")}function a9(e){return Bt(e)&&_ in e&&Et(e[_])}function Lr(e){return Rx(e)||Bx(e)||Ua(e)||Pu(e)||of(e)||nf(e)||qa(e)||Wa(e)||e9(e)||Va(e)||Ka(e)||zn(e)||sf(e)||xs(e)||$s(e)||En(e)||Iu(e)||t9(e)||Zg(e)||Ha(e)||ui(e)||af(e)||lf(e)||en(e)||_x(e)||Nu(e)||Yg(e)||Ds(e)||r9(e)||As(e)||Ou(e)||or(e)||n9(e)||i9(e)||o9(e)||s9(e)||a9(e)}const l9=["Argument","Any","Array","AsyncIterator","BigInt","Boolean","Computed","Constructor","Date","Enum","Function","Integer","Intersect","Iterator","Literal","MappedKey","MappedResult","Not","Null","Number","Object","Promise","Record","Ref","RegExp","String","Symbol","TemplateLiteral","This","Tuple","Undefined","Union","Uint8Array","Unknown","Void"];function jx(e){try{return new RegExp(e),!0}catch{return!1}}function Jg(e){if(!Et(e))return!1;for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);if(r>=7&&r<=13||r===27||r===127)return!1}return!0}function zx(e){return Xg(e)||pt(e)}function bl(e){return It(e)||Cx(e)}function nt(e){return It(e)||$i(e)}function Xg(e){return It(e)||Tu(e)}function et(e){return It(e)||Et(e)}function u9(e){return It(e)||Et(e)&&Jg(e)&&jx(e)}function c9(e){return It(e)||Et(e)&&Jg(e)}function Ux(e){return It(e)||pt(e)}function hd(e){return Bt(e)&&e[Ji]==="Optional"}function ri(e){return Re(e,"Any")&&et(e.$id)}function d9(e){return Re(e,"Argument")&&$i(e.index)}function Es(e){return Re(e,"Array")&&e.type==="array"&&et(e.$id)&&pt(e.items)&&nt(e.minItems)&&nt(e.maxItems)&&Xg(e.uniqueItems)&&Ux(e.contains)&&nt(e.minContains)&&nt(e.maxContains)}function Qg(e){return Re(e,"AsyncIterator")&&e.type==="AsyncIterator"&&et(e.$id)&&pt(e.items)}function uf(e){return Re(e,"BigInt")&&e.type==="bigint"&&et(e.$id)&&bl(e.exclusiveMaximum)&&bl(e.exclusiveMinimum)&&bl(e.maximum)&&bl(e.minimum)&&bl(e.multipleOf)}function Cs(e){return Re(e,"Boolean")&&e.type==="boolean"&&et(e.$id)}function f9(e){return Re(e,"Computed")&&Et(e.target)&&rn(e.parameters)&&e.parameters.every(t=>pt(t))}function cf(e){return Re(e,"Constructor")&&e.type==="Constructor"&&et(e.$id)&&rn(e.parameters)&&e.parameters.every(t=>pt(t))&&pt(e.returns)}function df(e){return Re(e,"Date")&&e.type==="Date"&&et(e.$id)&&nt(e.exclusiveMaximumTimestamp)&&nt(e.exclusiveMinimumTimestamp)&&nt(e.maximumTimestamp)&&nt(e.minimumTimestamp)&&nt(e.multipleOfTimestamp)}function ff(e){return Re(e,"Function")&&e.type==="Function"&&et(e.$id)&&rn(e.parameters)&&e.parameters.every(t=>pt(t))&&pt(e.returns)}function Xi(e){return Re(e,"Integer")&&e.type==="integer"&&et(e.$id)&&nt(e.exclusiveMaximum)&&nt(e.exclusiveMinimum)&&nt(e.maximum)&&nt(e.minimum)&&nt(e.multipleOf)}function qx(e){return Bt(e)&&Object.entries(e).every(([t,r])=>Jg(t)&&pt(r))}function Ss(e){return Re(e,"Intersect")&&!(Et(e.type)&&e.type!=="object")&&rn(e.allOf)&&e.allOf.every(t=>pt(t)&&!y9(t))&&et(e.type)&&(Xg(e.unevaluatedProperties)||Ux(e.unevaluatedProperties))&&et(e.$id)}function ep(e){return Re(e,"Iterator")&&e.type==="Iterator"&&et(e.$id)&&pt(e.items)}function Re(e,t){return Bt(e)&&_ in e&&e[_]===t}function Wx(e){return Io(e)&&Et(e.const)}function Vx(e){return Io(e)&&$i(e.const)}function Kx(e){return Io(e)&&Tu(e.const)}function Io(e){return Re(e,"Literal")&&et(e.$id)&&h9(e.const)}function h9(e){return Tu(e)||$i(e)||Et(e)}function m9(e){return Re(e,"MappedKey")&&rn(e.keys)&&e.keys.every(t=>$i(t)||Et(t))}function g9(e){return Re(e,"MappedResult")&&qx(e.properties)}function No(e){return Re(e,"Never")&&Bt(e.not)&&Object.getOwnPropertyNames(e.not).length===0}function wa(e){return Re(e,"Not")&&pt(e.not)}function tp(e){return Re(e,"Null")&&e.type==="null"&&et(e.$id)}function Qr(e){return Re(e,"Number")&&e.type==="number"&&et(e.$id)&&nt(e.exclusiveMaximum)&&nt(e.exclusiveMinimum)&&nt(e.maximum)&&nt(e.minimum)&&nt(e.multipleOf)}function bt(e){return Re(e,"Object")&&e.type==="object"&&et(e.$id)&&qx(e.properties)&&zx(e.additionalProperties)&&nt(e.minProperties)&&nt(e.maxProperties)}function rp(e){return Re(e,"Promise")&&e.type==="Promise"&&et(e.$id)&&pt(e.item)}function hr(e){return Re(e,"Record")&&e.type==="object"&&et(e.$id)&&zx(e.additionalProperties)&&Bt(e.patternProperties)&&(t=>{const r=Object.getOwnPropertyNames(t.patternProperties);return r.length===1&&jx(r[0])&&Bt(t.patternProperties)&&pt(t.patternProperties[r[0]])})(e)}function p9(e){return Re(e,"Ref")&&et(e.$id)&&Et(e.$ref)}function lu(e){return Re(e,"RegExp")&&et(e.$id)&&Et(e.source)&&Et(e.flags)&&nt(e.maxLength)&&nt(e.minLength)}function ni(e){return Re(e,"String")&&e.type==="string"&&et(e.$id)&&nt(e.minLength)&&nt(e.maxLength)&&u9(e.pattern)&&c9(e.format)}function uu(e){return Re(e,"Symbol")&&e.type==="symbol"&&et(e.$id)}function cu(e){return Re(e,"TemplateLiteral")&&e.type==="string"&&Et(e.pattern)&&e.pattern[0]==="^"&&e.pattern[e.pattern.length-1]==="$"}function b9(e){return Re(e,"This")&&et(e.$id)&&Et(e.$ref)}function y9(e){return Bt(e)&&Xr in e}function hf(e){return Re(e,"Tuple")&&e.type==="array"&&et(e.$id)&&$i(e.minItems)&&$i(e.maxItems)&&e.minItems===e.maxItems&&(It(e.items)&&It(e.additionalItems)&&e.minItems===0||rn(e.items)&&e.items.every(t=>pt(t)))}function ms(e){return Re(e,"Undefined")&&e.type==="undefined"&&et(e.$id)}function Yi(e){return Re(e,"Union")&&et(e.$id)&&Bt(e)&&rn(e.anyOf)&&e.anyOf.every(t=>pt(t))}function Ru(e){return Re(e,"Uint8Array")&&e.type==="Uint8Array"&&et(e.$id)&&nt(e.minByteLength)&&nt(e.maxByteLength)}function ii(e){return Re(e,"Unknown")&&et(e.$id)}function v9(e){return Re(e,"Unsafe")}function mf(e){return Re(e,"Void")&&e.type==="void"&&et(e.$id)}function w9(e){return Bt(e)&&_ in e&&Et(e[_])&&!l9.includes(e[_])}function pt(e){return Bt(e)&&(ri(e)||d9(e)||Es(e)||Cs(e)||uf(e)||Qg(e)||f9(e)||cf(e)||df(e)||ff(e)||Xi(e)||Ss(e)||ep(e)||Io(e)||m9(e)||g9(e)||No(e)||wa(e)||tp(e)||Qr(e)||bt(e)||rp(e)||hr(e)||p9(e)||lu(e)||ni(e)||uu(e)||cu(e)||b9(e)||hf(e)||ms(e)||Yi(e)||Ru(e)||ii(e)||v9(e)||mf(e)||w9(e))}const k9="(true|false)",Bc="(0|[1-9][0-9]*)",Hx="(.*)",x9="(?!.*)",ka=`^${Bc}$`,xa=`^${Hx}$`,$9=`^${x9}$`,Gx=new Map;function np(e){return Gx.has(e)}function ip(e){return Gx.get(e)}const op=new Map;function Eo(e){return op.has(e)}function sp(e,t){op.set(e,t)}function ap(e){return op.get(e)}function D9(e,t){return e.includes(t)}function A9(e){return[...new Set(e)]}function E9(e,t){return e.filter(r=>t.includes(r))}function C9(e,t){return e.reduce((r,n)=>E9(r,n),t)}function S9(e){return e.length===1?e[0]:e.length>1?C9(e.slice(1),e[0]):[]}function T9(e){const t=[];for(const r of e)t.push(...r);return t}function du(e){return z({[_]:"Any"},e)}function lp(e,t){return z({[_]:"Array",type:"array",items:e},t)}function M9(e){return z({[_]:"Argument",index:e})}function up(e,t){return z({[_]:"AsyncIterator",type:"AsyncIterator",items:e},t)}function Ht(e,t,r){return z({[_]:"Computed",target:e,parameters:t},r)}function F9(e,t){const{[t]:r,...n}=e;return n}function $n(e,t){return t.reduce((r,n)=>F9(r,n),e)}function yt(e){return z({[_]:"Never",not:{}},e)}function pr(e){return z({[_]:"MappedResult",properties:e})}function cp(e,t,r){return z({[_]:"Constructor",type:"Constructor",parameters:e,returns:t},r)}function Bu(e,t,r){return z({[_]:"Function",type:"Function",parameters:e,returns:t},r)}function h0(e,t){return z({[_]:"Union",anyOf:e},t)}function P9(e){return e.some(t=>Po(t))}function G1(e){return e.map(t=>Po(t)?I9(t):t)}function I9(e){return $n(e,[Ji])}function N9(e,t){return P9(e)?Bo(h0(G1(e),t)):h0(G1(e),t)}function Ga(e,t){return e.length===1?z(e[0],t):e.length===0?yt(t):N9(e,t)}function br(e,t){return e.length===0?yt(t):e.length===1?z(e[0],t):h0(e,t)}class Z1 extends gr{}function O9(e){return e.replace(/\\\$/g,"$").replace(/\\\*/g,"*").replace(/\\\^/g,"^").replace(/\\\|/g,"|").replace(/\\\(/g,"(").replace(/\\\)/g,")")}function dp(e,t,r){return e[t]===r&&e.charCodeAt(t-1)!==92}function Vi(e,t){return dp(e,t,"(")}function fu(e,t){return dp(e,t,")")}function Zx(e,t){return dp(e,t,"|")}function R9(e){if(!(Vi(e,0)&&fu(e,e.length-1)))return!1;let t=0;for(let r=0;r<e.length;r++)if(Vi(e,r)&&(t+=1),fu(e,r)&&(t-=1),t===0&&r!==e.length-1)return!1;return!0}function B9(e){return e.slice(1,e.length-1)}function L9(e){let t=0;for(let r=0;r<e.length;r++)if(Vi(e,r)&&(t+=1),fu(e,r)&&(t-=1),Zx(e,r)&&t===0)return!0;return!1}function _9(e){for(let t=0;t<e.length;t++)if(Vi(e,t))return!0;return!1}function j9(e){let[t,r]=[0,0];const n=[];for(let o=0;o<e.length;o++)if(Vi(e,o)&&(t+=1),fu(e,o)&&(t-=1),Zx(e,o)&&t===0){const s=e.slice(r,o);s.length>0&&n.push($a(s)),r=o+1}const i=e.slice(r);return i.length>0&&n.push($a(i)),n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"or",expr:n}}function z9(e){function t(i,o){if(!Vi(i,o))throw new Z1("TemplateLiteralParser: Index must point to open parens");let s=0;for(let a=o;a<i.length;a++)if(Vi(i,a)&&(s+=1),fu(i,a)&&(s-=1),s===0)return[o,a];throw new Z1("TemplateLiteralParser: Unclosed group parens in expression")}function r(i,o){for(let s=o;s<i.length;s++)if(Vi(i,s))return[o,s];return[o,i.length]}const n=[];for(let i=0;i<e.length;i++)if(Vi(e,i)){const[o,s]=t(e,i),a=e.slice(o,s+1);n.push($a(a)),i=s}else{const[o,s]=r(e,i),a=e.slice(o,s);a.length>0&&n.push($a(a)),i=s-1}return n.length===0?{type:"const",const:""}:n.length===1?n[0]:{type:"and",expr:n}}function $a(e){return R9(e)?$a(B9(e)):L9(e)?j9(e):_9(e)?z9(e):{type:"const",const:O9(e)}}function fp(e){return $a(e.slice(1,e.length-1))}class U9 extends gr{}function q9(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="0"&&e.expr[1].type==="const"&&e.expr[1].const==="[1-9][0-9]*"}function W9(e){return e.type==="or"&&e.expr.length===2&&e.expr[0].type==="const"&&e.expr[0].const==="true"&&e.expr[1].type==="const"&&e.expr[1].const==="false"}function V9(e){return e.type==="const"&&e.const===".*"}function hu(e){return q9(e)||V9(e)?!1:W9(e)?!0:e.type==="and"?e.expr.every(t=>hu(t)):e.type==="or"?e.expr.every(t=>hu(t)):e.type==="const"?!0:(()=>{throw new U9("Unknown expression type")})()}function K9(e){const t=fp(e.pattern);return hu(t)}class H9 extends gr{}function*Yx(e){if(e.length===1)return yield*e[0];for(const t of e[0])for(const r of Yx(e.slice(1)))yield`${t}${r}`}function*G9(e){return yield*Yx(e.expr.map(t=>[...gf(t)]))}function*Z9(e){for(const t of e.expr)yield*gf(t)}function*Y9(e){return yield e.const}function*gf(e){return e.type==="and"?yield*G9(e):e.type==="or"?yield*Z9(e):e.type==="const"?yield*Y9(e):(()=>{throw new H9("Unknown expression")})()}function Jx(e){const t=fp(e.pattern);return hu(t)?[...gf(t)]:[]}function Ot(e,t){return z({[_]:"Literal",const:e,type:typeof e},t)}function Xx(e){return z({[_]:"Boolean",type:"boolean"},e)}function hp(e){return z({[_]:"BigInt",type:"bigint"},e)}function Ts(e){return z({[_]:"Number",type:"number"},e)}function gs(e){return z({[_]:"String",type:"string"},e)}function*J9(e){const t=e.trim().replace(/"|'/g,"");return t==="boolean"?yield Xx():t==="number"?yield Ts():t==="bigint"?yield hp():t==="string"?yield gs():yield(()=>{const r=t.split("|").map(n=>Ot(n.trim()));return r.length===0?yt():r.length===1?r[0]:Ga(r)})()}function*X9(e){if(e[1]!=="{"){const t=Ot("$"),r=m0(e.slice(1));return yield*[t,...r]}for(let t=2;t<e.length;t++)if(e[t]==="}"){const r=J9(e.slice(2,t)),n=m0(e.slice(t+1));return yield*[...r,...n]}yield Ot(e)}function*m0(e){for(let t=0;t<e.length;t++)if(e[t]==="$"){const r=Ot(e.slice(0,t)),n=X9(e.slice(t));return yield*[r,...n]}yield Ot(e)}function Q9(e){return[...m0(e)]}class eS extends gr{}function tS(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Qx(e,t){return Ds(e)?e.pattern.slice(1,e.pattern.length-1):or(e)?`(${e.anyOf.map(r=>Qx(r,t)).join("|")})`:Ha(e)?`${t}${Bc}`:Ka(e)?`${t}${Bc}`:of(e)?`${t}${Bc}`:Nu(e)?`${t}${Hx}`:xs(e)?`${t}${tS(e.const.toString())}`:Pu(e)?`${t}${k9}`:(()=>{throw new eS(`Unexpected Kind '${e[_]}'`)})()}function Y1(e){return`^${e.map(t=>Qx(t,"")).join("")}$`}function md(e){const r=Jx(e).map(n=>Ot(n));return Ga(r)}function e5(e,t){const r=Et(e)?Y1(Q9(e)):Y1(e);return z({[_]:"TemplateLiteral",type:"string",pattern:r},t)}function rS(e){return Jx(e).map(r=>r.toString())}function nS(e){const t=[];for(const r of e)t.push(...Oo(r));return t}function iS(e){return[e.toString()]}function Oo(e){return[...new Set(Ds(e)?rS(e):or(e)?nS(e.anyOf):xs(e)?iS(e.const):Ha(e)?["[number]"]:Ka(e)?["[number]"]:[])]}function oS(e,t,r){const n={};for(const i of Object.getOwnPropertyNames(t))n[i]=pf(e,Oo(t[i]),r);return n}function sS(e,t,r){return oS(e,t.properties,r)}function aS(e,t,r){const n=sS(e,t,r);return pr(n)}function t5(e,t){return e.map(r=>r5(r,t))}function lS(e){return e.filter(t=>!Iu(t))}function uS(e,t){return o5(lS(t5(e,t)))}function cS(e){return e.some(t=>Iu(t))?[]:e}function dS(e,t){return Ga(cS(t5(e,t)))}function fS(e,t){return t in e?e[t]:t==="[number]"?Ga(e):yt()}function hS(e,t){return t==="[number]"?e:yt()}function mS(e,t){return t in e?e[t]:yt()}function r5(e,t){return zn(e)?uS(e.allOf,t):or(e)?dS(e.anyOf,t):As(e)?fS(e.items??[],t):Ua(e)?hS(e.items,t):ui(e)?mS(e.properties,t):yt()}function mp(e,t){return t.map(r=>r5(e,r))}function J1(e,t){return Ga(mp(e,t))}function pf(e,t,r){if(en(e)||en(t)){const n="Index types using Ref parameters require both Type and Key to be of TSchema";if(!Lr(e)||!Lr(t))throw new gr(n);return Ht("Index",[e,t])}return En(t)?aS(e,t,r):$s(t)?yS(e,t,r):z(Lr(t)?J1(e,Oo(t)):J1(e,t),r)}function gS(e,t,r){return{[t]:pf(e,[t],kn(r))}}function pS(e,t,r){return t.reduce((n,i)=>({...n,...gS(e,i,r)}),{})}function bS(e,t,r){return pS(e,t.keys,r)}function yS(e,t,r){const n=bS(e,t,r);return pr(n)}function gp(e,t){return z({[_]:"Iterator",type:"Iterator",items:e},t)}function vS(e){return globalThis.Object.keys(e).filter(t=>!Po(e[t]))}function wS(e,t){const r=vS(e),n=r.length>0?{[_]:"Object",type:"object",required:r,properties:e}:{[_]:"Object",type:"object",properties:e};return z(n,t)}var ir=wS;function n5(e,t){return z({[_]:"Promise",type:"Promise",item:e},t)}function kS(e){return z($n(e,[Fu]))}function xS(e){return z({...e,[Fu]:"Readonly"})}function $S(e,t){return t===!1?kS(e):xS(e)}function Ro(e,t){const r=t??!0;return En(e)?ES(e,r):$S(e,r)}function DS(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Ro(e[n],t);return r}function AS(e,t){return DS(e.properties,t)}function ES(e,t){const r=AS(e,t);return pr(r)}function Za(e,t){return z(e.length>0?{[_]:"Tuple",type:"array",items:e,additionalItems:!1,minItems:e.length,maxItems:e.length}:{[_]:"Tuple",type:"array",minItems:e.length,maxItems:e.length},t)}function i5(e,t){return e in t?Fn(e,t[e]):pr(t)}function CS(e){return{[e]:Ot(e)}}function SS(e){const t={};for(const r of e)t[r]=Ot(r);return t}function TS(e,t){return D9(t,e)?CS(e):SS(t)}function MS(e,t){const r=TS(e,t);return i5(e,r)}function yl(e,t){return t.map(r=>Fn(e,r))}function FS(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(t))r[n]=Fn(e,t[n]);return r}function Fn(e,t){const r={...t};return Po(t)?Bo(Fn(e,$n(t,[Ji]))):Gg(t)?Ro(Fn(e,$n(t,[Fu]))):En(t)?i5(e,t.properties):$s(t)?MS(e,t.keys):Wa(t)?cp(yl(e,t.parameters),Fn(e,t.returns),r):Va(t)?Bu(yl(e,t.parameters),Fn(e,t.returns),r):nf(t)?up(Fn(e,t.items),r):sf(t)?gp(Fn(e,t.items),r):zn(t)?Lo(yl(e,t.allOf),r):or(t)?br(yl(e,t.anyOf),r):As(t)?Za(yl(e,t.items??[]),r):ui(t)?ir(FS(e,t.properties),r):Ua(t)?lp(Fn(e,t.items),r):af(t)?n5(Fn(e,t.item),r):t}function PS(e,t){const r={};for(const n of e)r[n]=Fn(n,t);return r}function IS(e,t,r){const n=Lr(e)?Oo(e):e,i=t({[_]:"MappedKey",keys:n}),o=PS(n,i);return ir(o,r)}function NS(e){return z($n(e,[Ji]))}function OS(e){return z({...e,[Ji]:"Optional"})}function RS(e,t){return t===!1?NS(e):OS(e)}function Bo(e,t){const r=t??!0;return En(e)?_S(e,r):RS(e,r)}function BS(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Bo(e[n],t);return r}function LS(e,t){return BS(e.properties,t)}function _S(e,t){const r=LS(e,t);return pr(r)}function g0(e,t={}){const r=e.every(i=>ui(i)),n=Lr(t.unevaluatedProperties)?{unevaluatedProperties:t.unevaluatedProperties}:{};return z(t.unevaluatedProperties===!1||Lr(t.unevaluatedProperties)||r?{...n,[_]:"Intersect",type:"object",allOf:e}:{...n,[_]:"Intersect",allOf:e},t)}function jS(e){return e.every(t=>Po(t))}function zS(e){return $n(e,[Ji])}function X1(e){return e.map(t=>Po(t)?zS(t):t)}function US(e,t){return jS(e)?Bo(g0(X1(e),t)):g0(X1(e),t)}function o5(e,t={}){if(e.length===1)return z(e[0],t);if(e.length===0)return yt(t);if(e.some(r=>st(r)))throw new Error("Cannot intersect transform types");return US(e,t)}function Lo(e,t){if(e.length===1)return z(e[0],t);if(e.length===0)return yt(t);if(e.some(r=>st(r)))throw new Error("Cannot intersect transform types");return g0(e,t)}function Ya(...e){const[t,r]=typeof e[0]=="string"?[e[0],e[1]]:[e[0].$id,e[1]];if(typeof t!="string")throw new gr("Ref: $ref must be a string");return z({[_]:"Ref",$ref:t},r)}function qS(e,t){return Ht("Awaited",[Ht(e,t)])}function WS(e){return Ht("Awaited",[Ya(e)])}function VS(e){return Lo(s5(e))}function KS(e){return br(s5(e))}function HS(e){return bf(e)}function s5(e){return e.map(t=>bf(t))}function bf(e,t){return z(qa(e)?qS(e.target,e.parameters):zn(e)?VS(e.allOf):or(e)?KS(e.anyOf):af(e)?HS(e.item):en(e)?WS(e.$ref):e,t)}function a5(e){const t=[];for(const r of e)t.push(Ms(r));return t}function GS(e){const t=a5(e);return T9(t)}function ZS(e){const t=a5(e);return S9(t)}function YS(e){return e.map((t,r)=>r.toString())}function JS(e){return["[number]"]}function XS(e){return globalThis.Object.getOwnPropertyNames(e)}function QS(e){return p0?globalThis.Object.getOwnPropertyNames(e).map(r=>r[0]==="^"&&r[r.length-1]==="$"?r.slice(1,r.length-1):r):[]}function Ms(e){return zn(e)?GS(e.allOf):or(e)?ZS(e.anyOf):As(e)?YS(e.items??[]):Ua(e)?JS(e.items):ui(e)?XS(e.properties):lf(e)?QS(e.patternProperties):[]}let p0=!1;function Da(e){p0=!0;const t=Ms(e);return p0=!1,`^(${t.map(n=>`(${n})`).join("|")})$`}function eT(e,t){return Ht("KeyOf",[Ht(e,t)])}function tT(e){return Ht("KeyOf",[Ya(e)])}function rT(e,t){const r=Ms(e),n=nT(r),i=Ga(n);return z(i,t)}function nT(e){return e.map(t=>t==="[number]"?Ts():Ot(t))}function pp(e,t){return qa(e)?eT(e.target,e.parameters):en(e)?tT(e.$ref):En(e)?sT(e,t):rT(e,t)}function iT(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=pp(e[n],kn(t));return r}function oT(e,t){return iT(e.properties,t)}function sT(e,t){const r=oT(e,t);return pr(r)}function l5(e){const t=Ms(e),r=mp(e,t);return t.map((n,i)=>[t[i],r[i]])}function aT(e){const t=[];for(const r of e)t.push(...Ms(r));return A9(t)}function lT(e){return e.filter(t=>!Iu(t))}function uT(e,t){const r=[];for(const n of e)r.push(...mp(n,[t]));return lT(r)}function cT(e,t){const r={};for(const n of t)r[n]=o5(uT(e,n));return r}function dT(e,t){const r=aT(e),n=cT(e,r);return ir(n,t)}function u5(e){return z({[_]:"Date",type:"Date"},e)}function c5(e){return z({[_]:"Null",type:"null"},e)}function bp(e){return z({[_]:"Symbol",type:"symbol"},e)}function d5(e){return z({[_]:"Undefined",type:"undefined"},e)}function f5(e){return z({[_]:"Uint8Array",type:"Uint8Array"},e)}function yf(e){return z({[_]:"Unknown"},e)}function fT(e){return e.map(t=>yp(t,!1))}function hT(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Ro(yp(e[r],!1));return t}function gc(e,t){return t===!0?e:Ro(e)}function yp(e,t){return U8(e)||W8(e)?gc(du(),t):rn(e)?Ro(Za(fT(e))):Mu(e)?f5():Wg(e)?u5():Bt(e)?gc(ir(hT(e)),t):q8(e)?gc(Bu([],yf()),t):It(e)?d5():V8(e)?c5():K8(e)?bp():Cx(e)?hp():$i(e)||Tu(e)||Et(e)?Ot(e):ir({})}function mT(e,t){return z(yp(e,!0),t)}function gT(e,t){return Wa(e)?Za(e.parameters,t):yt(t)}function pT(e,t){if(It(e))throw new Error("Enum undefined or empty");const r=globalThis.Object.getOwnPropertyNames(e).filter(o=>isNaN(o)).map(o=>e[o]),i=[...new Set(r)].map(o=>Ot(o));return br(i,{...t,[rf]:"Enum"})}class bT extends gr{}var I;(function(e){e[e.Union=0]="Union",e[e.True=1]="True",e[e.False=2]="False"})(I||(I={}));function _n(e){return e===I.False?e:I.True}function Ja(e){throw new bT(e)}function _t(e){return No(e)||Ss(e)||Yi(e)||ii(e)||ri(e)}function jt(e,t){return No(t)?g5():Ss(t)?vf(e,t):Yi(t)?wp(e,t):ii(t)?v5():ri(t)?vp():Ja("StructuralRight")}function vp(e,t){return I.True}function yT(e,t){return Ss(t)?vf(e,t):Yi(t)&&t.anyOf.some(r=>ri(r)||ii(r))?I.True:Yi(t)?I.Union:ii(t)||ri(t)?I.True:I.Union}function vT(e,t){return ii(e)?I.False:ri(e)?I.Union:No(e)?I.True:I.False}function wT(e,t){return bt(t)&&wf(t)?I.True:_t(t)?jt(e,t):Es(t)?_n(Qe(e.items,t.items)):I.False}function kT(e,t){return _t(t)?jt(e,t):Qg(t)?_n(Qe(e.items,t.items)):I.False}function xT(e,t){return _t(t)?jt(e,t):bt(t)?Mr(e,t):hr(t)?Un(e,t):uf(t)?I.True:I.False}function h5(e,t){return Kx(e)||Cs(e)?I.True:I.False}function $T(e,t){return _t(t)?jt(e,t):bt(t)?Mr(e,t):hr(t)?Un(e,t):Cs(t)?I.True:I.False}function DT(e,t){return _t(t)?jt(e,t):bt(t)?Mr(e,t):cf(t)?e.parameters.length>t.parameters.length?I.False:e.parameters.every((r,n)=>_n(Qe(t.parameters[n],r))===I.True)?_n(Qe(e.returns,t.returns)):I.False:I.False}function AT(e,t){return _t(t)?jt(e,t):bt(t)?Mr(e,t):hr(t)?Un(e,t):df(t)?I.True:I.False}function ET(e,t){return _t(t)?jt(e,t):bt(t)?Mr(e,t):ff(t)?e.parameters.length>t.parameters.length?I.False:e.parameters.every((r,n)=>_n(Qe(t.parameters[n],r))===I.True)?_n(Qe(e.returns,t.returns)):I.False:I.False}function m5(e,t){return Io(e)&&$i(e.const)||Qr(e)||Xi(e)?I.True:I.False}function CT(e,t){return Xi(t)||Qr(t)?I.True:_t(t)?jt(e,t):bt(t)?Mr(e,t):hr(t)?Un(e,t):I.False}function vf(e,t){return t.allOf.every(r=>Qe(e,r)===I.True)?I.True:I.False}function ST(e,t){return e.allOf.some(r=>Qe(r,t)===I.True)?I.True:I.False}function TT(e,t){return _t(t)?jt(e,t):ep(t)?_n(Qe(e.items,t.items)):I.False}function MT(e,t){return Io(t)&&t.const===e.const?I.True:_t(t)?jt(e,t):bt(t)?Mr(e,t):hr(t)?Un(e,t):ni(t)?y5(e):Qr(t)?p5(e):Xi(t)?m5(e):Cs(t)?h5(e):I.False}function g5(e,t){return I.False}function FT(e,t){return I.True}function Q1(e){let[t,r]=[e,0];for(;wa(t);)t=t.not,r+=1;return r%2===0?t:yf()}function PT(e,t){return wa(e)?Qe(Q1(e),t):wa(t)?Qe(e,Q1(t)):Ja("Invalid fallthrough for Not")}function IT(e,t){return _t(t)?jt(e,t):bt(t)?Mr(e,t):hr(t)?Un(e,t):tp(t)?I.True:I.False}function p5(e,t){return Vx(e)||Qr(e)||Xi(e)?I.True:I.False}function NT(e,t){return _t(t)?jt(e,t):bt(t)?Mr(e,t):hr(t)?Un(e,t):Xi(t)||Qr(t)?I.True:I.False}function tn(e,t){return Object.getOwnPropertyNames(e.properties).length===t}function ev(e){return wf(e)}function tv(e){return tn(e,0)||tn(e,1)&&"description"in e.properties&&Yi(e.properties.description)&&e.properties.description.anyOf.length===2&&(ni(e.properties.description.anyOf[0])&&ms(e.properties.description.anyOf[1])||ni(e.properties.description.anyOf[1])&&ms(e.properties.description.anyOf[0]))}function Vh(e){return tn(e,0)}function rv(e){return tn(e,0)}function OT(e){return tn(e,0)}function RT(e){return tn(e,0)}function BT(e){return wf(e)}function LT(e){const t=Ts();return tn(e,0)||tn(e,1)&&"length"in e.properties&&_n(Qe(e.properties.length,t))===I.True}function _T(e){return tn(e,0)}function wf(e){const t=Ts();return tn(e,0)||tn(e,1)&&"length"in e.properties&&_n(Qe(e.properties.length,t))===I.True}function jT(e){const t=Bu([du()],du());return tn(e,0)||tn(e,1)&&"then"in e.properties&&_n(Qe(e.properties.then,t))===I.True}function b5(e,t){return Qe(e,t)===I.False||hd(e)&&!hd(t)?I.False:I.True}function Mr(e,t){return ii(e)?I.False:ri(e)?I.Union:No(e)||Wx(e)&&ev(t)||Vx(e)&&Vh(t)||Kx(e)&&rv(t)||uu(e)&&tv(t)||uf(e)&&OT(t)||ni(e)&&ev(t)||uu(e)&&tv(t)||Qr(e)&&Vh(t)||Xi(e)&&Vh(t)||Cs(e)&&rv(t)||Ru(e)&&BT(t)||df(e)&&RT(t)||cf(e)&&_T(t)||ff(e)&&LT(t)?I.True:hr(e)&&ni(b0(e))?t[rf]==="Record"?I.True:I.False:hr(e)&&Qr(b0(e))&&tn(t,0)?I.True:I.False}function zT(e,t){return _t(t)?jt(e,t):hr(t)?Un(e,t):bt(t)?(()=>{for(const r of Object.getOwnPropertyNames(t.properties)){if(!(r in e.properties)&&!hd(t.properties[r]))return I.False;if(hd(t.properties[r]))return I.True;if(b5(e.properties[r],t.properties[r])===I.False)return I.False}return I.True})():I.False}function UT(e,t){return _t(t)?jt(e,t):bt(t)&&jT(t)?I.True:rp(t)?_n(Qe(e.item,t.item)):I.False}function b0(e){return ka in e.patternProperties?Ts():xa in e.patternProperties?gs():Ja("Unknown record key pattern")}function y0(e){return ka in e.patternProperties?e.patternProperties[ka]:xa in e.patternProperties?e.patternProperties[xa]:Ja("Unable to get record value schema")}function Un(e,t){const[r,n]=[b0(t),y0(t)];return Wx(e)&&Qr(r)&&_n(Qe(e,n))===I.True?I.True:Ru(e)&&Qr(r)||ni(e)&&Qr(r)||Es(e)&&Qr(r)?Qe(e,n):bt(e)?(()=>{for(const i of Object.getOwnPropertyNames(e.properties))if(b5(n,e.properties[i])===I.False)return I.False;return I.True})():I.False}function qT(e,t){return _t(t)?jt(e,t):bt(t)?Mr(e,t):hr(t)?Qe(y0(e),y0(t)):I.False}function WT(e,t){const r=lu(e)?gs():e,n=lu(t)?gs():t;return Qe(r,n)}function y5(e,t){return Io(e)&&Et(e.const)||ni(e)?I.True:I.False}function VT(e,t){return _t(t)?jt(e,t):bt(t)?Mr(e,t):hr(t)?Un(e,t):ni(t)?I.True:I.False}function KT(e,t){return _t(t)?jt(e,t):bt(t)?Mr(e,t):hr(t)?Un(e,t):uu(t)?I.True:I.False}function HT(e,t){return cu(e)?Qe(md(e),t):cu(t)?Qe(e,md(t)):Ja("Invalid fallthrough for TemplateLiteral")}function GT(e,t){return Es(t)&&e.items!==void 0&&e.items.every(r=>Qe(r,t.items)===I.True)}function ZT(e,t){return No(e)?I.True:ii(e)?I.False:ri(e)?I.Union:I.False}function YT(e,t){return _t(t)?jt(e,t):bt(t)&&wf(t)||Es(t)&&GT(e,t)?I.True:hf(t)?It(e.items)&&!It(t.items)||!It(e.items)&&It(t.items)?I.False:It(e.items)&&!It(t.items)||e.items.every((r,n)=>Qe(r,t.items[n])===I.True)?I.True:I.False:I.False}function JT(e,t){return _t(t)?jt(e,t):bt(t)?Mr(e,t):hr(t)?Un(e,t):Ru(t)?I.True:I.False}function XT(e,t){return _t(t)?jt(e,t):bt(t)?Mr(e,t):hr(t)?Un(e,t):mf(t)?tM(e):ms(t)?I.True:I.False}function wp(e,t){return t.anyOf.some(r=>Qe(e,r)===I.True)?I.True:I.False}function QT(e,t){return e.anyOf.every(r=>Qe(r,t)===I.True)?I.True:I.False}function v5(e,t){return I.True}function eM(e,t){return No(t)?g5():Ss(t)?vf(e,t):Yi(t)?wp(e,t):ri(t)?vp():ni(t)?y5(e):Qr(t)?p5(e):Xi(t)?m5(e):Cs(t)?h5(e):Es(t)?vT(e):hf(t)?ZT(e):bt(t)?Mr(e,t):ii(t)?I.True:I.False}function tM(e,t){return ms(e)||ms(e)?I.True:I.False}function rM(e,t){return Ss(t)?vf(e,t):Yi(t)?wp(e,t):ii(t)?v5():ri(t)?vp():bt(t)?Mr(e,t):mf(t)?I.True:I.False}function Qe(e,t){return cu(e)||cu(t)?HT(e,t):lu(e)||lu(t)?WT(e,t):wa(e)||wa(t)?PT(e,t):ri(e)?yT(e,t):Es(e)?wT(e,t):uf(e)?xT(e,t):Cs(e)?$T(e,t):Qg(e)?kT(e,t):cf(e)?DT(e,t):df(e)?AT(e,t):ff(e)?ET(e,t):Xi(e)?CT(e,t):Ss(e)?ST(e,t):ep(e)?TT(e,t):Io(e)?MT(e,t):No(e)?FT():tp(e)?IT(e,t):Qr(e)?NT(e,t):bt(e)?zT(e,t):hr(e)?qT(e,t):ni(e)?VT(e,t):uu(e)?KT(e,t):hf(e)?YT(e,t):rp(e)?UT(e,t):Ru(e)?JT(e,t):ms(e)?XT(e,t):Yi(e)?QT(e,t):ii(e)?eM(e,t):mf(e)?rM(e,t):Ja(`Unknown left type operand '${e[_]}'`)}function Lu(e,t){return Qe(e,t)}function nM(e,t,r,n,i){const o={};for(const s of globalThis.Object.getOwnPropertyNames(e))o[s]=kp(e[s],t,r,n,kn(i));return o}function iM(e,t,r,n,i){return nM(e.properties,t,r,n,i)}function oM(e,t,r,n,i){const o=iM(e,t,r,n,i);return pr(o)}function sM(e,t,r,n){const i=Lu(e,t);return i===I.Union?br([r,n]):i===I.True?r:n}function kp(e,t,r,n,i){return En(e)?oM(e,t,r,n,i):$s(e)?z(cM(e,t,r,n,i)):z(sM(e,t,r,n),i)}function aM(e,t,r,n,i){return{[e]:kp(Ot(e),t,r,n,kn(i))}}function lM(e,t,r,n,i){return e.reduce((o,s)=>({...o,...aM(s,t,r,n,i)}),{})}function uM(e,t,r,n,i){return lM(e.keys,t,r,n,i)}function cM(e,t,r,n,i){const o=uM(e,t,r,n,i);return pr(o)}function dM(e){return e.allOf.every(t=>Xa(t))}function fM(e){return e.anyOf.some(t=>Xa(t))}function hM(e){return!Xa(e.not)}function Xa(e){return e[_]==="Intersect"?dM(e):e[_]==="Union"?fM(e):e[_]==="Not"?hM(e):e[_]==="Undefined"}function mM(e,t){return xp(md(e),t)}function gM(e,t){const r=e.filter(n=>Lu(n,t)===I.False);return r.length===1?r[0]:br(r)}function xp(e,t,r={}){return Ds(e)?z(mM(e,t),r):En(e)?z(yM(e,t),r):z(or(e)?gM(e.anyOf,t):Lu(e,t)!==I.False?yt():e,r)}function pM(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=xp(e[n],t);return r}function bM(e,t){return pM(e.properties,t)}function yM(e,t){const r=bM(e,t);return pr(r)}function vM(e,t){return $p(md(e),t)}function wM(e,t){const r=e.filter(n=>Lu(n,t)!==I.False);return r.length===1?r[0]:br(r)}function $p(e,t,r){return Ds(e)?z(vM(e,t),r):En(e)?z($M(e,t),r):z(or(e)?wM(e.anyOf,t):Lu(e,t)!==I.False?e:yt(),r)}function kM(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=$p(e[n],t);return r}function xM(e,t){return kM(e.properties,t)}function $M(e,t){const r=xM(e,t);return pr(r)}function DM(e,t){return Wa(e)?z(e.returns,t):yt(t)}function w5(e){return Ro(Bo(e))}function Fs(e,t,r){return z({[_]:"Record",type:"object",patternProperties:{[e]:t}},r)}function Dp(e,t,r){const n={};for(const i of e)n[i]=t;return ir(n,{...r,[rf]:"Record"})}function AM(e,t,r){return K9(e)?Dp(Oo(e),t,r):Fs(e.pattern,t,r)}function EM(e,t,r){return Dp(Oo(br(e)),t,r)}function CM(e,t,r){return Dp([e.toString()],t,r)}function SM(e,t,r){return Fs(e.source,t,r)}function TM(e,t,r){const n=It(e.pattern)?xa:e.pattern;return Fs(n,t,r)}function MM(e,t,r){return Fs(xa,t,r)}function FM(e,t,r){return Fs($9,t,r)}function PM(e,t,r){return ir({true:t,false:t},r)}function IM(e,t,r){return Fs(ka,t,r)}function NM(e,t,r){return Fs(ka,t,r)}function k5(e,t,r={}){return or(e)?EM(e.anyOf,t,r):Ds(e)?AM(e,t,r):xs(e)?CM(e.const,t,r):Pu(e)?PM(e,t,r):Ka(e)?IM(e,t,r):Ha(e)?NM(e,t,r):_x(e)?SM(e,t,r):Nu(e)?TM(e,t,r):Rx(e)?MM(e,t,r):Iu(e)?FM(e,t,r):yt(r)}function Ap(e){return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]}function OM(e){const t=Ap(e);return t===xa?gs():t===ka?Ts():gs({pattern:t})}function x5(e){return e.patternProperties[Ap(e)]}function RM(e,t){return t.parameters=_u(e,t.parameters),t.returns=oi(e,t.returns),t}function BM(e,t){return t.parameters=_u(e,t.parameters),t.returns=oi(e,t.returns),t}function LM(e,t){return t.allOf=_u(e,t.allOf),t}function _M(e,t){return t.anyOf=_u(e,t.anyOf),t}function jM(e,t){return It(t.items)||(t.items=_u(e,t.items)),t}function zM(e,t){return t.items=oi(e,t.items),t}function UM(e,t){return t.items=oi(e,t.items),t}function qM(e,t){return t.items=oi(e,t.items),t}function WM(e,t){return t.item=oi(e,t.item),t}function VM(e,t){const r=ZM(e,t.properties);return{...t,...ir(r)}}function KM(e,t){const r=oi(e,OM(t)),n=oi(e,x5(t)),i=k5(r,n);return{...t,...i}}function HM(e,t){return t.index in e?e[t.index]:yf()}function GM(e,t){const r=Gg(t),n=Po(t),i=oi(e,t);return r&&n?w5(i):r&&!n?Ro(i):!r&&n?Bo(i):i}function ZM(e,t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:GM(e,t[n])}),{})}function _u(e,t){return t.map(r=>oi(e,r))}function oi(e,t){return Wa(t)?RM(e,t):Va(t)?BM(e,t):zn(t)?LM(e,t):or(t)?_M(e,t):As(t)?jM(e,t):Ua(t)?zM(e,t):nf(t)?UM(e,t):sf(t)?qM(e,t):af(t)?WM(e,t):ui(t)?VM(e,t):lf(t)?KM(e,t):Bx(t)?HM(e,t):t}function YM(e,t){return oi(t,Vg(e))}function JM(e){return z({[_]:"Integer",type:"integer"},e)}function XM(e,t,r){return{[e]:Qa(Ot(e),t,kn(r))}}function QM(e,t,r){return e.reduce((i,o)=>({...i,...XM(o,t,r)}),{})}function e7(e,t,r){return QM(e.keys,t,r)}function t7(e,t,r){const n=e7(e,t,r);return pr(n)}function r7(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toLowerCase(),r].join("")}function n7(e){const[t,r]=[e.slice(0,1),e.slice(1)];return[t.toUpperCase(),r].join("")}function i7(e){return e.toUpperCase()}function o7(e){return e.toLowerCase()}function s7(e,t,r){const n=fp(e.pattern);if(!hu(n))return{...e,pattern:$5(e.pattern,t)};const s=[...gf(n)].map(u=>Ot(u)),a=D5(s,t),l=br(a);return e5([l],r)}function $5(e,t){return typeof e=="string"?t==="Uncapitalize"?r7(e):t==="Capitalize"?n7(e):t==="Uppercase"?i7(e):t==="Lowercase"?o7(e):e:e.toString()}function D5(e,t){return e.map(r=>Qa(r,t))}function Qa(e,t,r={}){return $s(e)?t7(e,t,r):Ds(e)?s7(e,t,r):or(e)?br(D5(e.anyOf,t),r):xs(e)?Ot($5(e.const,t),r):z(e,r)}function a7(e,t={}){return Qa(e,"Capitalize",t)}function l7(e,t={}){return Qa(e,"Lowercase",t)}function u7(e,t={}){return Qa(e,"Uncapitalize",t)}function c7(e,t={}){return Qa(e,"Uppercase",t)}function d7(e,t,r){const n={};for(const i of globalThis.Object.getOwnPropertyNames(e))n[i]=kf(e[i],t,kn(r));return n}function f7(e,t,r){return d7(e.properties,t,r)}function h7(e,t,r){const n=f7(e,t,r);return pr(n)}function m7(e,t){return e.map(r=>Ep(r,t))}function g7(e,t){return e.map(r=>Ep(r,t))}function p7(e,t){const{[t]:r,...n}=e;return n}function b7(e,t){return t.reduce((r,n)=>p7(r,n),e)}function y7(e,t,r){const n=$n(e,[Xr,"$id","required","properties"]),i=b7(r,t);return ir(i,n)}function v7(e){const t=e.reduce((r,n)=>Lx(n)?[...r,Ot(n)]:r,[]);return br(t)}function Ep(e,t){return zn(e)?Lo(m7(e.allOf,t)):or(e)?br(g7(e.anyOf,t)):ui(e)?y7(e,t,e.properties):ir({})}function kf(e,t,r){const n=rn(t)?v7(t):t,i=Lr(t)?Oo(t):t,o=en(e),s=en(t);return En(e)?h7(e,i,r):$s(t)?$7(e,t,r):o&&s?Ht("Omit",[e,n],r):!o&&s?Ht("Omit",[e,n],r):o&&!s?Ht("Omit",[e,n],r):z({...Ep(e,i),...r})}function w7(e,t,r){return{[t]:kf(e,[t],kn(r))}}function k7(e,t,r){return t.reduce((n,i)=>({...n,...w7(e,i,r)}),{})}function x7(e,t,r){return k7(e,t.keys,r)}function $7(e,t,r){const n=x7(e,t,r);return pr(n)}function D7(e,t,r){const n={};for(const i of globalThis.Object.getOwnPropertyNames(e))n[i]=xf(e[i],t,kn(r));return n}function A7(e,t,r){return D7(e.properties,t,r)}function E7(e,t,r){const n=A7(e,t,r);return pr(n)}function C7(e,t){return e.map(r=>Cp(r,t))}function S7(e,t){return e.map(r=>Cp(r,t))}function T7(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function M7(e,t,r){const n=$n(e,[Xr,"$id","required","properties"]),i=T7(r,t);return ir(i,n)}function F7(e){const t=e.reduce((r,n)=>Lx(n)?[...r,Ot(n)]:r,[]);return br(t)}function Cp(e,t){return zn(e)?Lo(C7(e.allOf,t)):or(e)?br(S7(e.anyOf,t)):ui(e)?M7(e,t,e.properties):ir({})}function xf(e,t,r){const n=rn(t)?F7(t):t,i=Lr(t)?Oo(t):t,o=en(e),s=en(t);return En(e)?E7(e,i,r):$s(t)?O7(e,t,r):o&&s?Ht("Pick",[e,n],r):!o&&s?Ht("Pick",[e,n],r):o&&!s?Ht("Pick",[e,n],r):z({...Cp(e,i),...r})}function P7(e,t,r){return{[t]:xf(e,[t],kn(r))}}function I7(e,t,r){return t.reduce((n,i)=>({...n,...P7(e,i,r)}),{})}function N7(e,t,r){return I7(e,t.keys,r)}function O7(e,t,r){const n=N7(e,t,r);return pr(n)}function R7(e,t){return Ht("Partial",[Ht(e,t)])}function B7(e){return Ht("Partial",[Ya(e)])}function L7(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=Bo(e[r]);return t}function _7(e,t){const r=$n(e,[Xr,"$id","required","properties"]),n=L7(t);return ir(n,r)}function nv(e){return e.map(t=>A5(t))}function A5(e){return qa(e)?R7(e.target,e.parameters):en(e)?B7(e.$ref):zn(e)?Lo(nv(e.allOf)):or(e)?br(nv(e.anyOf)):ui(e)?_7(e,e.properties):of(e)||Pu(e)||Ka(e)||xs(e)||Zg(e)||Ha(e)||Nu(e)||Yg(e)||Ou(e)?e:ir({})}function Sp(e,t){return En(e)?U7(e,t):z({...A5(e),...t})}function j7(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Sp(e[n],kn(t));return r}function z7(e,t){return j7(e.properties,t)}function U7(e,t){const r=z7(e,t);return pr(r)}function q7(e,t){return Ht("Required",[Ht(e,t)])}function W7(e){return Ht("Required",[Ya(e)])}function V7(e){const t={};for(const r of globalThis.Object.getOwnPropertyNames(e))t[r]=$n(e[r],[Ji]);return t}function K7(e,t){const r=$n(e,[Xr,"$id","required","properties"]),n=V7(t);return ir(n,r)}function iv(e){return e.map(t=>E5(t))}function E5(e){return qa(e)?q7(e.target,e.parameters):en(e)?W7(e.$ref):zn(e)?Lo(iv(e.allOf)):or(e)?br(iv(e.anyOf)):ui(e)?K7(e,e.properties):of(e)||Pu(e)||Ka(e)||xs(e)||Zg(e)||Ha(e)||Nu(e)||Yg(e)||Ou(e)?e:ir({})}function Tp(e,t){return En(e)?Z7(e,t):z({...E5(e),...t})}function H7(e,t){const r={};for(const n of globalThis.Object.getOwnPropertyNames(e))r[n]=Tp(e[n],t);return r}function G7(e,t){return H7(e.properties,t)}function Z7(e,t){const r=G7(e,t);return pr(r)}function Y7(e,t){return t.map(r=>en(r)?Mp(e,r.$ref):Dn(e,r))}function Mp(e,t){return t in e?en(e[t])?Mp(e,e[t].$ref):Dn(e,e[t]):yt()}function J7(e){return bf(e[0])}function X7(e){return pf(e[0],e[1])}function Q7(e){return pp(e[0])}function eF(e){return Sp(e[0])}function tF(e){return kf(e[0],e[1])}function rF(e){return xf(e[0],e[1])}function nF(e){return Tp(e[0])}function iF(e,t,r){const n=Y7(e,r);return t==="Awaited"?J7(n):t==="Index"?X7(n):t==="KeyOf"?Q7(n):t==="Partial"?eF(n):t==="Omit"?tF(n):t==="Pick"?rF(n):t==="Required"?nF(n):yt()}function oF(e,t){return lp(Dn(e,t))}function sF(e,t){return up(Dn(e,t))}function aF(e,t,r){return cp(ju(e,t),Dn(e,r))}function lF(e,t,r){return Bu(ju(e,t),Dn(e,r))}function uF(e,t){return Lo(ju(e,t))}function cF(e,t){return gp(Dn(e,t))}function dF(e,t){return ir(globalThis.Object.keys(t).reduce((r,n)=>({...r,[n]:Dn(e,t[n])}),{}))}function fF(e,t){const[r,n]=[Dn(e,x5(t)),Ap(t)],i=Vg(t);return i.patternProperties[n]=r,i}function hF(e,t){return en(t)?{...Mp(e,t.$ref),[Xr]:t[Xr]}:t}function mF(e,t){return Za(ju(e,t))}function gF(e,t){return br(ju(e,t))}function ju(e,t){return t.map(r=>Dn(e,r))}function Dn(e,t){return Po(t)?z(Dn(e,$n(t,[Ji])),t):Gg(t)?z(Dn(e,$n(t,[Fu])),t):st(t)?z(hF(e,t),t):Ua(t)?z(oF(e,t.items),t):nf(t)?z(sF(e,t.items),t):qa(t)?z(iF(e,t.target,t.parameters)):Wa(t)?z(aF(e,t.parameters,t.returns),t):Va(t)?z(lF(e,t.parameters,t.returns),t):zn(t)?z(uF(e,t.allOf),t):sf(t)?z(cF(e,t.items),t):ui(t)?z(dF(e,t.properties),t):lf(t)?z(fF(e,t)):As(t)?z(mF(e,t.items||[]),t):or(t)?z(gF(e,t.anyOf),t):t}function pF(e,t){return t in e?Dn(e,e[t]):yt()}function bF(e){return globalThis.Object.getOwnPropertyNames(e).reduce((t,r)=>({...t,[r]:pF(e,r)}),{})}class yF{constructor(t){const r=bF(t),n=this.WithIdentifiers(r);this.$defs=n}Import(t,r){const n={...this.$defs,[t]:z(this.$defs[t],r)};return z({[_]:"Import",$defs:n,$ref:t})}WithIdentifiers(t){return globalThis.Object.getOwnPropertyNames(t).reduce((r,n)=>({...r,[n]:{...t[n],$id:n}}),{})}}function vF(e){return new yF(e)}function wF(e,t){return z({[_]:"Not",not:e},t)}function kF(e,t){return Va(e)?Za(e.parameters,t):yt()}let xF=0;function $F(e,t={}){It(t.$id)&&(t.$id=`T${xF++}`);const r=Vg(e({[_]:"This",$ref:`${t.$id}`}));return r.$id=t.$id,z({[rf]:"Recursive",...r},t)}function DF(e,t){const r=Et(e)?new globalThis.RegExp(e):e;return z({[_]:"RegExp",type:"RegExp",source:r.source,flags:r.flags},t)}function AF(e){return zn(e)?e.allOf:or(e)?e.anyOf:As(e)?e.items??[]:[]}function EF(e){return AF(e)}function CF(e,t){return Va(e)?z(e.returns,t):yt(t)}class SF{constructor(t){this.schema=t}Decode(t){return new TF(this.schema,t)}}class TF{constructor(t,r){this.schema=t,this.decode=r}EncodeTransform(t,r){const o={Encode:s=>r[Xr].Encode(t(s)),Decode:s=>this.decode(r[Xr].Decode(s))};return{...r,[Xr]:o}}EncodeSchema(t,r){const n={Decode:this.decode,Encode:t};return{...r,[Xr]:n}}Encode(t){return st(this.schema)?this.EncodeTransform(t,this.schema):this.EncodeSchema(t,this.schema)}}function MF(e){return new SF(e)}function FF(e={}){return z({[_]:e[_]??"Unsafe"},e)}function PF(e){return z({[_]:"Void",type:"void"},e)}const IF=Object.freeze(Object.defineProperty({__proto__:null,Any:du,Argument:M9,Array:lp,AsyncIterator:up,Awaited:bf,BigInt:hp,Boolean:Xx,Capitalize:a7,Composite:dT,Const:mT,Constructor:cp,ConstructorParameters:gT,Date:u5,Enum:pT,Exclude:xp,Extends:kp,Extract:$p,Function:Bu,Index:pf,InstanceType:DM,Instantiate:YM,Integer:JM,Intersect:Lo,Iterator:gp,KeyOf:pp,Literal:Ot,Lowercase:l7,Mapped:IS,Module:vF,Never:yt,Not:wF,Null:c5,Number:Ts,Object:ir,Omit:kf,Optional:Bo,Parameters:kF,Partial:Sp,Pick:xf,Promise:n5,Readonly:Ro,ReadonlyOptional:w5,Record:k5,Recursive:$F,Ref:Ya,RegExp:DF,Required:Tp,Rest:EF,ReturnType:CF,String:gs,Symbol:bp,TemplateLiteral:e5,Transform:MF,Tuple:Za,Uint8Array:f5,Uncapitalize:u7,Undefined:d5,Union:br,Unknown:yf,Unsafe:FF,Uppercase:c7,Void:PF},Symbol.toStringTag,{value:"Module"})),rt=IF;function C5(e){switch(e.errorType){case M.ArrayContains:return"Expected array to contain at least one matching value";case M.ArrayMaxContains:return`Expected array to contain no more than ${e.schema.maxContains} matching values`;case M.ArrayMinContains:return`Expected array to contain at least ${e.schema.minContains} matching values`;case M.ArrayMaxItems:return`Expected array length to be less or equal to ${e.schema.maxItems}`;case M.ArrayMinItems:return`Expected array length to be greater or equal to ${e.schema.minItems}`;case M.ArrayUniqueItems:return"Expected array elements to be unique";case M.Array:return"Expected array";case M.AsyncIterator:return"Expected AsyncIterator";case M.BigIntExclusiveMaximum:return`Expected bigint to be less than ${e.schema.exclusiveMaximum}`;case M.BigIntExclusiveMinimum:return`Expected bigint to be greater than ${e.schema.exclusiveMinimum}`;case M.BigIntMaximum:return`Expected bigint to be less or equal to ${e.schema.maximum}`;case M.BigIntMinimum:return`Expected bigint to be greater or equal to ${e.schema.minimum}`;case M.BigIntMultipleOf:return`Expected bigint to be a multiple of ${e.schema.multipleOf}`;case M.BigInt:return"Expected bigint";case M.Boolean:return"Expected boolean";case M.DateExclusiveMinimumTimestamp:return`Expected Date timestamp to be greater than ${e.schema.exclusiveMinimumTimestamp}`;case M.DateExclusiveMaximumTimestamp:return`Expected Date timestamp to be less than ${e.schema.exclusiveMaximumTimestamp}`;case M.DateMinimumTimestamp:return`Expected Date timestamp to be greater or equal to ${e.schema.minimumTimestamp}`;case M.DateMaximumTimestamp:return`Expected Date timestamp to be less or equal to ${e.schema.maximumTimestamp}`;case M.DateMultipleOfTimestamp:return`Expected Date timestamp to be a multiple of ${e.schema.multipleOfTimestamp}`;case M.Date:return"Expected Date";case M.Function:return"Expected function";case M.IntegerExclusiveMaximum:return`Expected integer to be less than ${e.schema.exclusiveMaximum}`;case M.IntegerExclusiveMinimum:return`Expected integer to be greater than ${e.schema.exclusiveMinimum}`;case M.IntegerMaximum:return`Expected integer to be less or equal to ${e.schema.maximum}`;case M.IntegerMinimum:return`Expected integer to be greater or equal to ${e.schema.minimum}`;case M.IntegerMultipleOf:return`Expected integer to be a multiple of ${e.schema.multipleOf}`;case M.Integer:return"Expected integer";case M.IntersectUnevaluatedProperties:return"Unexpected property";case M.Intersect:return"Expected all values to match";case M.Iterator:return"Expected Iterator";case M.Literal:return`Expected ${typeof e.schema.const=="string"?`'${e.schema.const}'`:e.schema.const}`;case M.Never:return"Never";case M.Not:return"Value should not match";case M.Null:return"Expected null";case M.NumberExclusiveMaximum:return`Expected number to be less than ${e.schema.exclusiveMaximum}`;case M.NumberExclusiveMinimum:return`Expected number to be greater than ${e.schema.exclusiveMinimum}`;case M.NumberMaximum:return`Expected number to be less or equal to ${e.schema.maximum}`;case M.NumberMinimum:return`Expected number to be greater or equal to ${e.schema.minimum}`;case M.NumberMultipleOf:return`Expected number to be a multiple of ${e.schema.multipleOf}`;case M.Number:return"Expected number";case M.Object:return"Expected object";case M.ObjectAdditionalProperties:return"Unexpected property";case M.ObjectMaxProperties:return`Expected object to have no more than ${e.schema.maxProperties} properties`;case M.ObjectMinProperties:return`Expected object to have at least ${e.schema.minProperties} properties`;case M.ObjectRequiredProperty:return"Expected required property";case M.Promise:return"Expected Promise";case M.RegExp:return"Expected string to match regular expression";case M.StringFormatUnknown:return`Unknown format '${e.schema.format}'`;case M.StringFormat:return`Expected string to match '${e.schema.format}' format`;case M.StringMaxLength:return`Expected string length less or equal to ${e.schema.maxLength}`;case M.StringMinLength:return`Expected string length greater or equal to ${e.schema.minLength}`;case M.StringPattern:return`Expected string to match '${e.schema.pattern}'`;case M.String:return"Expected string";case M.Symbol:return"Expected symbol";case M.TupleLength:return`Expected tuple to have ${e.schema.maxItems||0} elements`;case M.Tuple:return"Expected tuple";case M.Uint8ArrayMaxByteLength:return`Expected byte length less or equal to ${e.schema.maxByteLength}`;case M.Uint8ArrayMinByteLength:return`Expected byte length greater or equal to ${e.schema.minByteLength}`;case M.Uint8Array:return"Expected Uint8Array";case M.Undefined:return"Expected undefined";case M.Union:return"Expected union value";case M.Void:return"Expected void";case M.Kind:return`Expected kind '${e.schema[_]}'`;default:return"Unknown error type"}}let S5=C5;function NF(e){S5=e}function OF(){return S5}class RF extends gr{constructor(t){super(`Unable to dereference schema with $id '${t.$ref}'`),this.schema=t}}function BF(e,t){const r=t.find(n=>n.$id===e.$ref);if(r===void 0)throw new RF(e);return qn(r,t)}function $f(e,t){return!pn(e.$id)||t.some(r=>r.$id===e.$id)||t.push(e),t}function qn(e,t){return e[_]==="This"||e[_]==="Ref"?BF(e,t):e}class LF extends gr{constructor(t){super("Unable to hash value"),this.value=t}}var An;(function(e){e[e.Undefined=0]="Undefined",e[e.Null=1]="Null",e[e.Boolean=2]="Boolean",e[e.Number=3]="Number",e[e.String=4]="String",e[e.Object=5]="Object",e[e.Array=6]="Array",e[e.Date=7]="Date",e[e.Uint8Array=8]="Uint8Array",e[e.Symbol=9]="Symbol",e[e.BigInt=10]="BigInt"})(An||(An={}));let Xs=BigInt("14695981039346656037");const[_F,jF]=[BigInt("1099511628211"),BigInt("18446744073709551616")],zF=Array.from({length:256}).map((e,t)=>BigInt(t)),T5=new Float64Array(1),M5=new DataView(T5.buffer),F5=new Uint8Array(T5.buffer);function*UF(e){const t=e===0?1:Math.ceil(Math.floor(Math.log2(e)+1)/8);for(let r=0;r<t;r++)yield e>>8*(t-1-r)&255}function qF(e){Sr(An.Array);for(const t of e)Aa(t)}function WF(e){Sr(An.Boolean),Sr(e?1:0)}function VF(e){Sr(An.BigInt),M5.setBigInt64(0,e);for(const t of F5)Sr(t)}function KF(e){Sr(An.Date),Aa(e.getTime())}function HF(e){Sr(An.Null)}function GF(e){Sr(An.Number),M5.setFloat64(0,e);for(const t of F5)Sr(t)}function ZF(e){Sr(An.Object);for(const t of globalThis.Object.getOwnPropertyNames(e).sort())Aa(t),Aa(e[t])}function YF(e){Sr(An.String);for(let t=0;t<e.length;t++)for(const r of UF(e.charCodeAt(t)))Sr(r)}function JF(e){Sr(An.Symbol),Aa(e.description)}function XF(e){Sr(An.Uint8Array);for(let t=0;t<e.length;t++)Sr(e[t])}function QF(e){return Sr(An.Undefined)}function Aa(e){if(xn(e))return qF(e);if(ef(e))return WF(e);if(ji(e))return VF(e);if(Kg(e))return KF(e);if(Qd(e))return HF();if(Ae(e))return GF(e);if(Di(e))return ZF(e);if(pn(e))return YF(e);if(tf(e))return JF(e);if(Hg(e))return XF(e);if(Fo(e))return QF();throw new LF(e)}function Sr(e){Xs=Xs^zF[e],Xs=Xs*_F%jF}function Fp(e){return Xs=BigInt("14695981039346656037"),Aa(e),Xs}class eP extends gr{constructor(t){super("Unknown type"),this.schema=t}}function tP(e){return e[_]==="Any"||e[_]==="Unknown"}function Pe(e){return e!==void 0}function rP(e,t,r){return!0}function nP(e,t,r){return!0}function iP(e,t,r){if(!xn(r)||Pe(e.minItems)&&!(r.length>=e.minItems)||Pe(e.maxItems)&&!(r.length<=e.maxItems))return!1;for(const o of r)if(!tr(e.items,t,o))return!1;if(e.uniqueItems===!0&&!(function(){const o=new Set;for(const s of r){const a=Fp(s);if(o.has(a))return!1;o.add(a)}return!0})())return!1;if(!(Pe(e.contains)||Ae(e.minContains)||Ae(e.maxContains)))return!0;const n=Pe(e.contains)?e.contains:yt(),i=r.reduce((o,s)=>tr(n,t,s)?o+1:o,0);return!(i===0||Ae(e.minContains)&&i<e.minContains||Ae(e.maxContains)&&i>e.maxContains)}function oP(e,t,r){return Tx(r)}function sP(e,t,r){return!(!ji(r)||Pe(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||Pe(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||Pe(e.maximum)&&!(r<=e.maximum)||Pe(e.minimum)&&!(r>=e.minimum)||Pe(e.multipleOf)&&r%e.multipleOf!==BigInt(0))}function aP(e,t,r){return ef(r)}function lP(e,t,r){return tr(e.returns,t,r.prototype)}function uP(e,t,r){return!(!Kg(r)||Pe(e.exclusiveMaximumTimestamp)&&!(r.getTime()<e.exclusiveMaximumTimestamp)||Pe(e.exclusiveMinimumTimestamp)&&!(r.getTime()>e.exclusiveMinimumTimestamp)||Pe(e.maximumTimestamp)&&!(r.getTime()<=e.maximumTimestamp)||Pe(e.minimumTimestamp)&&!(r.getTime()>=e.minimumTimestamp)||Pe(e.multipleOfTimestamp)&&r.getTime()%e.multipleOfTimestamp!==0)}function cP(e,t,r){return Nx(r)}function dP(e,t,r){const n=globalThis.Object.values(e.$defs),i=e.$defs[e.$ref];return tr(i,[...t,...n],r)}function fP(e,t,r){return!(!Ix(r)||Pe(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||Pe(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||Pe(e.maximum)&&!(r<=e.maximum)||Pe(e.minimum)&&!(r>=e.minimum)||Pe(e.multipleOf)&&r%e.multipleOf!==0)}function hP(e,t,r){const n=e.allOf.every(i=>tr(i,t,r));if(e.unevaluatedProperties===!1){const i=new RegExp(Da(e)),o=Object.getOwnPropertyNames(r).every(s=>i.test(s));return n&&o}else if(Lr(e.unevaluatedProperties)){const i=new RegExp(Da(e)),o=Object.getOwnPropertyNames(r).every(s=>i.test(s)||tr(e.unevaluatedProperties,t,r[s]));return n&&o}else return n}function mP(e,t,r){return Mx(r)}function gP(e,t,r){return r===e.const}function pP(e,t,r){return!1}function bP(e,t,r){return!tr(e.not,t,r)}function yP(e,t,r){return Qd(r)}function vP(e,t,r){return!(!At.IsNumberLike(r)||Pe(e.exclusiveMaximum)&&!(r<e.exclusiveMaximum)||Pe(e.exclusiveMinimum)&&!(r>e.exclusiveMinimum)||Pe(e.minimum)&&!(r>=e.minimum)||Pe(e.maximum)&&!(r<=e.maximum)||Pe(e.multipleOf)&&r%e.multipleOf!==0)}function wP(e,t,r){if(!At.IsObjectLike(r)||Pe(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||Pe(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const n=Object.getOwnPropertyNames(e.properties);for(const i of n){const o=e.properties[i];if(e.required&&e.required.includes(i)){if(!tr(o,t,r[i])||(Xa(o)||tP(o))&&!(i in r))return!1}else if(At.IsExactOptionalProperty(r,i)&&!tr(o,t,r[i]))return!1}if(e.additionalProperties===!1){const i=Object.getOwnPropertyNames(r);return e.required&&e.required.length===n.length&&i.length===n.length?!0:i.every(o=>n.includes(o))}else return typeof e.additionalProperties=="object"?Object.getOwnPropertyNames(r).every(o=>n.includes(o)||tr(e.additionalProperties,t,r[o])):!0}function kP(e,t,r){return Fx(r)}function xP(e,t,r){if(!At.IsRecordLike(r)||Pe(e.minProperties)&&!(Object.getOwnPropertyNames(r).length>=e.minProperties)||Pe(e.maxProperties)&&!(Object.getOwnPropertyNames(r).length<=e.maxProperties))return!1;const[n,i]=Object.entries(e.patternProperties)[0],o=new RegExp(n),s=Object.entries(r).every(([u,d])=>o.test(u)?tr(i,t,d):!0),a=typeof e.additionalProperties=="object"?Object.entries(r).every(([u,d])=>o.test(u)?!0:tr(e.additionalProperties,t,d)):!0,l=e.additionalProperties===!1?Object.getOwnPropertyNames(r).every(u=>o.test(u)):!0;return s&&a&&l}function $P(e,t,r){return tr(qn(e,t),t,r)}function DP(e,t,r){const n=new RegExp(e.source,e.flags);return Pe(e.minLength)&&!(r.length>=e.minLength)||Pe(e.maxLength)&&!(r.length<=e.maxLength)?!1:n.test(r)}function AP(e,t,r){return!pn(r)||Pe(e.minLength)&&!(r.length>=e.minLength)||Pe(e.maxLength)&&!(r.length<=e.maxLength)||Pe(e.pattern)&&!new RegExp(e.pattern).test(r)?!1:Pe(e.format)?np(e.format)?ip(e.format)(r):!1:!0}function EP(e,t,r){return tf(r)}function CP(e,t,r){return pn(r)&&new RegExp(e.pattern).test(r)}function SP(e,t,r){return tr(qn(e,t),t,r)}function TP(e,t,r){if(!xn(r)||e.items===void 0&&r.length!==0||r.length!==e.maxItems)return!1;if(!e.items)return!0;for(let n=0;n<e.items.length;n++)if(!tr(e.items[n],t,r[n]))return!1;return!0}function MP(e,t,r){return Fo(r)}function FP(e,t,r){return e.anyOf.some(n=>tr(n,t,r))}function PP(e,t,r){return!(!Hg(r)||Pe(e.maxByteLength)&&!(r.length<=e.maxByteLength)||Pe(e.minByteLength)&&!(r.length>=e.minByteLength))}function IP(e,t,r){return!0}function NP(e,t,r){return At.IsVoidLike(r)}function OP(e,t,r){return Eo(e[_])?ap(e[_])(e,r):!1}function tr(e,t,r){const n=Pe(e.$id)?$f(e,t):t,i=e;switch(i[_]){case"Any":return rP();case"Argument":return nP();case"Array":return iP(i,n,r);case"AsyncIterator":return oP(i,n,r);case"BigInt":return sP(i,n,r);case"Boolean":return aP(i,n,r);case"Constructor":return lP(i,n,r);case"Date":return uP(i,n,r);case"Function":return cP(i,n,r);case"Import":return dP(i,n,r);case"Integer":return fP(i,n,r);case"Intersect":return hP(i,n,r);case"Iterator":return mP(i,n,r);case"Literal":return gP(i,n,r);case"Never":return pP();case"Not":return bP(i,n,r);case"Null":return yP(i,n,r);case"Number":return vP(i,n,r);case"Object":return wP(i,n,r);case"Promise":return kP(i,n,r);case"Record":return xP(i,n,r);case"Ref":return $P(i,n,r);case"RegExp":return DP(i,n,r);case"String":return AP(i,n,r);case"Symbol":return EP(i,n,r);case"TemplateLiteral":return CP(i,n,r);case"This":return SP(i,n,r);case"Tuple":return TP(i,n,r);case"Undefined":return MP(i,n,r);case"Union":return FP(i,n,r);case"Uint8Array":return PP(i,n,r);case"Unknown":return IP();case"Void":return NP(i,n,r);default:if(!Eo(i[_]))throw new eP(i);return OP(i,n,r)}}function gd(...e){return e.length===3?tr(e[0],e[1],e[2]):tr(e[0],[],e[1])}var M;(function(e){e[e.ArrayContains=0]="ArrayContains",e[e.ArrayMaxContains=1]="ArrayMaxContains",e[e.ArrayMaxItems=2]="ArrayMaxItems",e[e.ArrayMinContains=3]="ArrayMinContains",e[e.ArrayMinItems=4]="ArrayMinItems",e[e.ArrayUniqueItems=5]="ArrayUniqueItems",e[e.Array=6]="Array",e[e.AsyncIterator=7]="AsyncIterator",e[e.BigIntExclusiveMaximum=8]="BigIntExclusiveMaximum",e[e.BigIntExclusiveMinimum=9]="BigIntExclusiveMinimum",e[e.BigIntMaximum=10]="BigIntMaximum",e[e.BigIntMinimum=11]="BigIntMinimum",e[e.BigIntMultipleOf=12]="BigIntMultipleOf",e[e.BigInt=13]="BigInt",e[e.Boolean=14]="Boolean",e[e.DateExclusiveMaximumTimestamp=15]="DateExclusiveMaximumTimestamp",e[e.DateExclusiveMinimumTimestamp=16]="DateExclusiveMinimumTimestamp",e[e.DateMaximumTimestamp=17]="DateMaximumTimestamp",e[e.DateMinimumTimestamp=18]="DateMinimumTimestamp",e[e.DateMultipleOfTimestamp=19]="DateMultipleOfTimestamp",e[e.Date=20]="Date",e[e.Function=21]="Function",e[e.IntegerExclusiveMaximum=22]="IntegerExclusiveMaximum",e[e.IntegerExclusiveMinimum=23]="IntegerExclusiveMinimum",e[e.IntegerMaximum=24]="IntegerMaximum",e[e.IntegerMinimum=25]="IntegerMinimum",e[e.IntegerMultipleOf=26]="IntegerMultipleOf",e[e.Integer=27]="Integer",e[e.IntersectUnevaluatedProperties=28]="IntersectUnevaluatedProperties",e[e.Intersect=29]="Intersect",e[e.Iterator=30]="Iterator",e[e.Kind=31]="Kind",e[e.Literal=32]="Literal",e[e.Never=33]="Never",e[e.Not=34]="Not",e[e.Null=35]="Null",e[e.NumberExclusiveMaximum=36]="NumberExclusiveMaximum",e[e.NumberExclusiveMinimum=37]="NumberExclusiveMinimum",e[e.NumberMaximum=38]="NumberMaximum",e[e.NumberMinimum=39]="NumberMinimum",e[e.NumberMultipleOf=40]="NumberMultipleOf",e[e.Number=41]="Number",e[e.ObjectAdditionalProperties=42]="ObjectAdditionalProperties",e[e.ObjectMaxProperties=43]="ObjectMaxProperties",e[e.ObjectMinProperties=44]="ObjectMinProperties",e[e.ObjectRequiredProperty=45]="ObjectRequiredProperty",e[e.Object=46]="Object",e[e.Promise=47]="Promise",e[e.RegExp=48]="RegExp",e[e.StringFormatUnknown=49]="StringFormatUnknown",e[e.StringFormat=50]="StringFormat",e[e.StringMaxLength=51]="StringMaxLength",e[e.StringMinLength=52]="StringMinLength",e[e.StringPattern=53]="StringPattern",e[e.String=54]="String",e[e.Symbol=55]="Symbol",e[e.TupleLength=56]="TupleLength",e[e.Tuple=57]="Tuple",e[e.Uint8ArrayMaxByteLength=58]="Uint8ArrayMaxByteLength",e[e.Uint8ArrayMinByteLength=59]="Uint8ArrayMinByteLength",e[e.Uint8Array=60]="Uint8Array",e[e.Undefined=61]="Undefined",e[e.Union=62]="Union",e[e.Void=63]="Void"})(M||(M={}));class RP extends gr{constructor(t){super("Unknown type"),this.schema=t}}function Bi(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function Fe(e){return e!==void 0}class P5{constructor(t){this.iterator=t}[Symbol.iterator](){return this.iterator}First(){const t=this.iterator.next();return t.done?void 0:t.value}}function W(e,t,r,n,i=[]){return{type:e,schema:t,path:r,value:n,message:OF()({errorType:e,path:r,schema:t,value:n,errors:i}),errors:i}}function*BP(e,t,r,n){}function*LP(e,t,r,n){}function*_P(e,t,r,n){if(!xn(n))return yield W(M.Array,e,r,n);Fe(e.minItems)&&!(n.length>=e.minItems)&&(yield W(M.ArrayMinItems,e,r,n)),Fe(e.maxItems)&&!(n.length<=e.maxItems)&&(yield W(M.ArrayMaxItems,e,r,n));for(let s=0;s<n.length;s++)yield*rr(e.items,t,`${r}/${s}`,n[s]);if(e.uniqueItems===!0&&!(function(){const s=new Set;for(const a of n){const l=Fp(a);if(s.has(l))return!1;s.add(l)}return!0})()&&(yield W(M.ArrayUniqueItems,e,r,n)),!(Fe(e.contains)||Fe(e.minContains)||Fe(e.maxContains)))return;const i=Fe(e.contains)?e.contains:yt(),o=n.reduce((s,a,l)=>rr(i,t,`${r}${l}`,a).next().done===!0?s+1:s,0);o===0&&(yield W(M.ArrayContains,e,r,n)),Ae(e.minContains)&&o<e.minContains&&(yield W(M.ArrayMinContains,e,r,n)),Ae(e.maxContains)&&o>e.maxContains&&(yield W(M.ArrayMaxContains,e,r,n))}function*jP(e,t,r,n){Tx(n)||(yield W(M.AsyncIterator,e,r,n))}function*zP(e,t,r,n){if(!ji(n))return yield W(M.BigInt,e,r,n);Fe(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield W(M.BigIntExclusiveMaximum,e,r,n)),Fe(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield W(M.BigIntExclusiveMinimum,e,r,n)),Fe(e.maximum)&&!(n<=e.maximum)&&(yield W(M.BigIntMaximum,e,r,n)),Fe(e.minimum)&&!(n>=e.minimum)&&(yield W(M.BigIntMinimum,e,r,n)),Fe(e.multipleOf)&&n%e.multipleOf!==BigInt(0)&&(yield W(M.BigIntMultipleOf,e,r,n))}function*UP(e,t,r,n){ef(n)||(yield W(M.Boolean,e,r,n))}function*qP(e,t,r,n){yield*rr(e.returns,t,r,n.prototype)}function*WP(e,t,r,n){if(!Kg(n))return yield W(M.Date,e,r,n);Fe(e.exclusiveMaximumTimestamp)&&!(n.getTime()<e.exclusiveMaximumTimestamp)&&(yield W(M.DateExclusiveMaximumTimestamp,e,r,n)),Fe(e.exclusiveMinimumTimestamp)&&!(n.getTime()>e.exclusiveMinimumTimestamp)&&(yield W(M.DateExclusiveMinimumTimestamp,e,r,n)),Fe(e.maximumTimestamp)&&!(n.getTime()<=e.maximumTimestamp)&&(yield W(M.DateMaximumTimestamp,e,r,n)),Fe(e.minimumTimestamp)&&!(n.getTime()>=e.minimumTimestamp)&&(yield W(M.DateMinimumTimestamp,e,r,n)),Fe(e.multipleOfTimestamp)&&n.getTime()%e.multipleOfTimestamp!==0&&(yield W(M.DateMultipleOfTimestamp,e,r,n))}function*VP(e,t,r,n){Nx(n)||(yield W(M.Function,e,r,n))}function*KP(e,t,r,n){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref];yield*rr(o,[...t,...i],r,n)}function*HP(e,t,r,n){if(!Ix(n))return yield W(M.Integer,e,r,n);Fe(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield W(M.IntegerExclusiveMaximum,e,r,n)),Fe(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield W(M.IntegerExclusiveMinimum,e,r,n)),Fe(e.maximum)&&!(n<=e.maximum)&&(yield W(M.IntegerMaximum,e,r,n)),Fe(e.minimum)&&!(n>=e.minimum)&&(yield W(M.IntegerMinimum,e,r,n)),Fe(e.multipleOf)&&n%e.multipleOf!==0&&(yield W(M.IntegerMultipleOf,e,r,n))}function*GP(e,t,r,n){let i=!1;for(const o of e.allOf)for(const s of rr(o,t,r,n))i=!0,yield s;if(i)return yield W(M.Intersect,e,r,n);if(e.unevaluatedProperties===!1){const o=new RegExp(Da(e));for(const s of Object.getOwnPropertyNames(n))o.test(s)||(yield W(M.IntersectUnevaluatedProperties,e,`${r}/${s}`,n))}if(typeof e.unevaluatedProperties=="object"){const o=new RegExp(Da(e));for(const s of Object.getOwnPropertyNames(n))if(!o.test(s)){const a=rr(e.unevaluatedProperties,t,`${r}/${s}`,n[s]).next();a.done||(yield a.value)}}}function*ZP(e,t,r,n){Mx(n)||(yield W(M.Iterator,e,r,n))}function*YP(e,t,r,n){n!==e.const&&(yield W(M.Literal,e,r,n))}function*JP(e,t,r,n){yield W(M.Never,e,r,n)}function*XP(e,t,r,n){rr(e.not,t,r,n).next().done===!0&&(yield W(M.Not,e,r,n))}function*QP(e,t,r,n){Qd(n)||(yield W(M.Null,e,r,n))}function*eI(e,t,r,n){if(!At.IsNumberLike(n))return yield W(M.Number,e,r,n);Fe(e.exclusiveMaximum)&&!(n<e.exclusiveMaximum)&&(yield W(M.NumberExclusiveMaximum,e,r,n)),Fe(e.exclusiveMinimum)&&!(n>e.exclusiveMinimum)&&(yield W(M.NumberExclusiveMinimum,e,r,n)),Fe(e.maximum)&&!(n<=e.maximum)&&(yield W(M.NumberMaximum,e,r,n)),Fe(e.minimum)&&!(n>=e.minimum)&&(yield W(M.NumberMinimum,e,r,n)),Fe(e.multipleOf)&&n%e.multipleOf!==0&&(yield W(M.NumberMultipleOf,e,r,n))}function*tI(e,t,r,n){if(!At.IsObjectLike(n))return yield W(M.Object,e,r,n);Fe(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield W(M.ObjectMinProperties,e,r,n)),Fe(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield W(M.ObjectMaxProperties,e,r,n));const i=Array.isArray(e.required)?e.required:[],o=Object.getOwnPropertyNames(e.properties),s=Object.getOwnPropertyNames(n);for(const a of i)s.includes(a)||(yield W(M.ObjectRequiredProperty,e.properties[a],`${r}/${Bi(a)}`,void 0));if(e.additionalProperties===!1)for(const a of s)o.includes(a)||(yield W(M.ObjectAdditionalProperties,e,`${r}/${Bi(a)}`,n[a]));if(typeof e.additionalProperties=="object")for(const a of s)o.includes(a)||(yield*rr(e.additionalProperties,t,`${r}/${Bi(a)}`,n[a]));for(const a of o){const l=e.properties[a];e.required&&e.required.includes(a)?(yield*rr(l,t,`${r}/${Bi(a)}`,n[a]),Xa(e)&&!(a in n)&&(yield W(M.ObjectRequiredProperty,l,`${r}/${Bi(a)}`,void 0))):At.IsExactOptionalProperty(n,a)&&(yield*rr(l,t,`${r}/${Bi(a)}`,n[a]))}}function*rI(e,t,r,n){Fx(n)||(yield W(M.Promise,e,r,n))}function*nI(e,t,r,n){if(!At.IsRecordLike(n))return yield W(M.Object,e,r,n);Fe(e.minProperties)&&!(Object.getOwnPropertyNames(n).length>=e.minProperties)&&(yield W(M.ObjectMinProperties,e,r,n)),Fe(e.maxProperties)&&!(Object.getOwnPropertyNames(n).length<=e.maxProperties)&&(yield W(M.ObjectMaxProperties,e,r,n));const[i,o]=Object.entries(e.patternProperties)[0],s=new RegExp(i);for(const[a,l]of Object.entries(n))s.test(a)&&(yield*rr(o,t,`${r}/${Bi(a)}`,l));if(typeof e.additionalProperties=="object")for(const[a,l]of Object.entries(n))s.test(a)||(yield*rr(e.additionalProperties,t,`${r}/${Bi(a)}`,l));if(e.additionalProperties===!1){for(const[a,l]of Object.entries(n))if(!s.test(a))return yield W(M.ObjectAdditionalProperties,e,`${r}/${Bi(a)}`,l)}}function*iI(e,t,r,n){yield*rr(qn(e,t),t,r,n)}function*oI(e,t,r,n){if(!pn(n))return yield W(M.String,e,r,n);if(Fe(e.minLength)&&!(n.length>=e.minLength)&&(yield W(M.StringMinLength,e,r,n)),Fe(e.maxLength)&&!(n.length<=e.maxLength)&&(yield W(M.StringMaxLength,e,r,n)),!new RegExp(e.source,e.flags).test(n))return yield W(M.RegExp,e,r,n)}function*sI(e,t,r,n){if(!pn(n))return yield W(M.String,e,r,n);Fe(e.minLength)&&!(n.length>=e.minLength)&&(yield W(M.StringMinLength,e,r,n)),Fe(e.maxLength)&&!(n.length<=e.maxLength)&&(yield W(M.StringMaxLength,e,r,n)),pn(e.pattern)&&(new RegExp(e.pattern).test(n)||(yield W(M.StringPattern,e,r,n))),pn(e.format)&&(np(e.format)?ip(e.format)(n)||(yield W(M.StringFormat,e,r,n)):yield W(M.StringFormatUnknown,e,r,n))}function*aI(e,t,r,n){tf(n)||(yield W(M.Symbol,e,r,n))}function*lI(e,t,r,n){if(!pn(n))return yield W(M.String,e,r,n);new RegExp(e.pattern).test(n)||(yield W(M.StringPattern,e,r,n))}function*uI(e,t,r,n){yield*rr(qn(e,t),t,r,n)}function*cI(e,t,r,n){if(!xn(n))return yield W(M.Tuple,e,r,n);if(e.items===void 0&&n.length!==0)return yield W(M.TupleLength,e,r,n);if(n.length!==e.maxItems)return yield W(M.TupleLength,e,r,n);if(e.items)for(let i=0;i<e.items.length;i++)yield*rr(e.items[i],t,`${r}/${i}`,n[i])}function*dI(e,t,r,n){Fo(n)||(yield W(M.Undefined,e,r,n))}function*fI(e,t,r,n){if(gd(e,t,n))return;const i=e.anyOf.map(o=>new P5(rr(o,t,r,n)));yield W(M.Union,e,r,n,i)}function*hI(e,t,r,n){if(!Hg(n))return yield W(M.Uint8Array,e,r,n);Fe(e.maxByteLength)&&!(n.length<=e.maxByteLength)&&(yield W(M.Uint8ArrayMaxByteLength,e,r,n)),Fe(e.minByteLength)&&!(n.length>=e.minByteLength)&&(yield W(M.Uint8ArrayMinByteLength,e,r,n))}function*mI(e,t,r,n){}function*gI(e,t,r,n){At.IsVoidLike(n)||(yield W(M.Void,e,r,n))}function*pI(e,t,r,n){ap(e[_])(e,n)||(yield W(M.Kind,e,r,n))}function*rr(e,t,r,n){const i=Fe(e.$id)?[...t,e]:t,o=e;switch(o[_]){case"Any":return yield*BP();case"Argument":return yield*LP();case"Array":return yield*_P(o,i,r,n);case"AsyncIterator":return yield*jP(o,i,r,n);case"BigInt":return yield*zP(o,i,r,n);case"Boolean":return yield*UP(o,i,r,n);case"Constructor":return yield*qP(o,i,r,n);case"Date":return yield*WP(o,i,r,n);case"Function":return yield*VP(o,i,r,n);case"Import":return yield*KP(o,i,r,n);case"Integer":return yield*HP(o,i,r,n);case"Intersect":return yield*GP(o,i,r,n);case"Iterator":return yield*ZP(o,i,r,n);case"Literal":return yield*YP(o,i,r,n);case"Never":return yield*JP(o,i,r,n);case"Not":return yield*XP(o,i,r,n);case"Null":return yield*QP(o,i,r,n);case"Number":return yield*eI(o,i,r,n);case"Object":return yield*tI(o,i,r,n);case"Promise":return yield*rI(o,i,r,n);case"Record":return yield*nI(o,i,r,n);case"Ref":return yield*iI(o,i,r,n);case"RegExp":return yield*oI(o,i,r,n);case"String":return yield*sI(o,i,r,n);case"Symbol":return yield*aI(o,i,r,n);case"TemplateLiteral":return yield*lI(o,i,r,n);case"This":return yield*uI(o,i,r,n);case"Tuple":return yield*cI(o,i,r,n);case"Undefined":return yield*dI(o,i,r,n);case"Union":return yield*fI(o,i,r,n);case"Uint8Array":return yield*hI(o,i,r,n);case"Unknown":return yield*mI();case"Void":return yield*gI(o,i,r,n);default:if(!Eo(o[_]))throw new RP(e);return yield*pI(o,i,r,n)}}function bI(...e){const t=e.length===3?rr(e[0],e[1],"",e[2]):rr(e[0],[],"",e[1]);return new P5(t)}class yI extends gr{constructor(t,r,n){super("Unable to decode value as it does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class vI extends gr{constructor(t,r,n,i){super(i instanceof Error?i.message:"Unknown error"),this.schema=t,this.path=r,this.value=n,this.error=i}}function ft(e,t,r){try{return st(e)?e[Xr].Decode(r):r}catch(n){throw new vI(e,t,r,n)}}function wI(e,t,r,n){return xn(n)?ft(e,r,n.map((i,o)=>ci(e.items,t,`${r}/${o}`,i))):ft(e,r,n)}function kI(e,t,r,n){if(!Di(n)||Ox(n))return ft(e,r,n);const i=l5(e),o=i.map(d=>d[0]),s={...n};for(const[d,f]of i)d in s&&(s[d]=ci(f,t,`${r}/${d}`,s[d]));if(!st(e.unevaluatedProperties))return ft(e,r,s);const a=Object.getOwnPropertyNames(s),l=e.unevaluatedProperties,u={...s};for(const d of a)o.includes(d)||(u[d]=ft(l,`${r}/${d}`,u[d]));return ft(e,r,u)}function xI(e,t,r,n){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=ci(o,[...t,...i],r,n);return ft(e,r,s)}function $I(e,t,r,n){return ft(e,r,ci(e.not,t,r,n))}function DI(e,t,r,n){if(!Di(n))return ft(e,r,n);const i=Ms(e),o={...n};for(const u of i)Px(o,u)&&(Fo(o[u])&&(!Ou(e.properties[u])||At.IsExactOptionalProperty(o,u))||(o[u]=ci(e.properties[u],t,`${r}/${u}`,o[u])));if(!Lr(e.additionalProperties))return ft(e,r,o);const s=Object.getOwnPropertyNames(o),a=e.additionalProperties,l={...o};for(const u of s)i.includes(u)||(l[u]=ft(a,`${r}/${u}`,l[u]));return ft(e,r,l)}function AI(e,t,r,n){if(!Di(n))return ft(e,r,n);const i=Object.getOwnPropertyNames(e.patternProperties)[0],o=new RegExp(i),s={...n};for(const d of Object.getOwnPropertyNames(n))o.test(d)&&(s[d]=ci(e.patternProperties[i],t,`${r}/${d}`,s[d]));if(!Lr(e.additionalProperties))return ft(e,r,s);const a=Object.getOwnPropertyNames(s),l=e.additionalProperties,u={...s};for(const d of a)o.test(d)||(u[d]=ft(l,`${r}/${d}`,u[d]));return ft(e,r,u)}function EI(e,t,r,n){const i=qn(e,t);return ft(e,r,ci(i,t,r,n))}function CI(e,t,r,n){const i=qn(e,t);return ft(e,r,ci(i,t,r,n))}function SI(e,t,r,n){return xn(n)&&xn(e.items)?ft(e,r,e.items.map((i,o)=>ci(i,t,`${r}/${o}`,n[o]))):ft(e,r,n)}function TI(e,t,r,n){for(const i of e.anyOf){if(!gd(i,t,n))continue;const o=ci(i,t,r,n);return ft(e,r,o)}return ft(e,r,n)}function ci(e,t,r,n){const i=$f(e,t),o=e;switch(e[_]){case"Array":return wI(o,i,r,n);case"Import":return xI(o,i,r,n);case"Intersect":return kI(o,i,r,n);case"Not":return $I(o,i,r,n);case"Object":return DI(o,i,r,n);case"Record":return AI(o,i,r,n);case"Ref":return EI(o,i,r,n);case"Symbol":return ft(o,r,n);case"This":return CI(o,i,r,n);case"Tuple":return SI(o,i,r,n);case"Union":return TI(o,i,r,n);default:return ft(o,r,n)}}function MI(e,t,r){return ci(e,t,"",r)}class FI extends gr{constructor(t,r,n){super("The encoded value does not match the expected schema"),this.schema=t,this.value=r,this.error=n}}class PI extends gr{constructor(t,r,n,i){super(`${i instanceof Error?i.message:"Unknown error"}`),this.schema=t,this.path=r,this.value=n,this.error=i}}function dr(e,t,r){try{return st(e)?e[Xr].Encode(r):r}catch(n){throw new PI(e,t,r,n)}}function II(e,t,r,n){const i=dr(e,r,n);return xn(i)?i.map((o,s)=>si(e.items,t,`${r}/${s}`,o)):i}function NI(e,t,r,n){const i=globalThis.Object.values(e.$defs),o=e.$defs[e.$ref],s=dr(e,r,n);return si(o,[...t,...i],r,s)}function OI(e,t,r,n){const i=dr(e,r,n);if(!Di(n)||Ox(n))return i;const o=l5(e),s=o.map(f=>f[0]),a={...i};for(const[f,h]of o)f in a&&(a[f]=si(h,t,`${r}/${f}`,a[f]));if(!st(e.unevaluatedProperties))return a;const l=Object.getOwnPropertyNames(a),u=e.unevaluatedProperties,d={...a};for(const f of l)s.includes(f)||(d[f]=dr(u,`${r}/${f}`,d[f]));return d}function RI(e,t,r,n){return dr(e.not,r,dr(e,r,n))}function BI(e,t,r,n){const i=dr(e,r,n);if(!Di(i))return i;const o=Ms(e),s={...i};for(const d of o)Px(s,d)&&(Fo(s[d])&&(!Ou(e.properties[d])||At.IsExactOptionalProperty(s,d))||(s[d]=si(e.properties[d],t,`${r}/${d}`,s[d])));if(!Lr(e.additionalProperties))return s;const a=Object.getOwnPropertyNames(s),l=e.additionalProperties,u={...s};for(const d of a)o.includes(d)||(u[d]=dr(l,`${r}/${d}`,u[d]));return u}function LI(e,t,r,n){const i=dr(e,r,n);if(!Di(n))return i;const o=Object.getOwnPropertyNames(e.patternProperties)[0],s=new RegExp(o),a={...i};for(const f of Object.getOwnPropertyNames(n))s.test(f)&&(a[f]=si(e.patternProperties[o],t,`${r}/${f}`,a[f]));if(!Lr(e.additionalProperties))return a;const l=Object.getOwnPropertyNames(a),u=e.additionalProperties,d={...a};for(const f of l)s.test(f)||(d[f]=dr(u,`${r}/${f}`,d[f]));return d}function _I(e,t,r,n){const i=qn(e,t),o=si(i,t,r,n);return dr(e,r,o)}function jI(e,t,r,n){const i=qn(e,t),o=si(i,t,r,n);return dr(e,r,o)}function zI(e,t,r,n){const i=dr(e,r,n);return xn(e.items)?e.items.map((o,s)=>si(o,t,`${r}/${s}`,i[s])):[]}function UI(e,t,r,n){for(const i of e.anyOf){if(!gd(i,t,n))continue;const o=si(i,t,r,n);return dr(e,r,o)}for(const i of e.anyOf){const o=si(i,t,r,n);if(gd(e,t,o))return dr(e,r,o)}return dr(e,r,n)}function si(e,t,r,n){const i=$f(e,t),o=e;switch(e[_]){case"Array":return II(o,i,r,n);case"Import":return NI(o,i,r,n);case"Intersect":return OI(o,i,r,n);case"Not":return RI(o,i,r,n);case"Object":return BI(o,i,r,n);case"Record":return LI(o,i,r,n);case"Ref":return _I(o,i,r,n);case"This":return jI(o,i,r,n);case"Tuple":return zI(o,i,r,n);case"Union":return UI(o,i,r,n);default:return dr(o,r,n)}}function qI(e,t,r){return si(e,t,"",r)}function WI(e,t){return st(e)||Gt(e.items,t)}function VI(e,t){return st(e)||Gt(e.items,t)}function KI(e,t){return st(e)||Gt(e.returns,t)||e.parameters.some(r=>Gt(r,t))}function HI(e,t){return st(e)||Gt(e.returns,t)||e.parameters.some(r=>Gt(r,t))}function GI(e,t){return st(e)||st(e.unevaluatedProperties)||e.allOf.some(r=>Gt(r,t))}function ZI(e,t){const r=globalThis.Object.getOwnPropertyNames(e.$defs).reduce((i,o)=>[...i,e.$defs[o]],[]),n=e.$defs[e.$ref];return st(e)||Gt(n,[...r,...t])}function YI(e,t){return st(e)||Gt(e.items,t)}function JI(e,t){return st(e)||Gt(e.not,t)}function XI(e,t){return st(e)||Object.values(e.properties).some(r=>Gt(r,t))||Lr(e.additionalProperties)&&Gt(e.additionalProperties,t)}function QI(e,t){return st(e)||Gt(e.item,t)}function eN(e,t){const r=Object.getOwnPropertyNames(e.patternProperties)[0],n=e.patternProperties[r];return st(e)||Gt(n,t)||Lr(e.additionalProperties)&&st(e.additionalProperties)}function tN(e,t){return st(e)?!0:Gt(qn(e,t),t)}function rN(e,t){return st(e)?!0:Gt(qn(e,t),t)}function nN(e,t){return st(e)||!Fo(e.items)&&e.items.some(r=>Gt(r,t))}function iN(e,t){return st(e)||e.anyOf.some(r=>Gt(r,t))}function Gt(e,t){const r=$f(e,t),n=e;if(e.$id&&v0.has(e.$id))return!1;switch(e.$id&&v0.add(e.$id),e[_]){case"Array":return WI(n,r);case"AsyncIterator":return VI(n,r);case"Constructor":return KI(n,r);case"Function":return HI(n,r);case"Import":return ZI(n,r);case"Intersect":return GI(n,r);case"Iterator":return YI(n,r);case"Not":return JI(n,r);case"Object":return XI(n,r);case"Promise":return QI(n,r);case"Record":return eN(n,r);case"Ref":return tN(n,r);case"This":return rN(n,r);case"Tuple":return nN(n,r);case"Union":return iN(n,r);default:return st(e)}}const v0=new Set;function oN(e,t){return v0.clear(),Gt(e,t)}class sN{constructor(t,r,n,i){this.schema=t,this.references=r,this.checkFunc=n,this.code=i,this.hasTransform=oN(t,r)}Code(){return this.code}Schema(){return this.schema}References(){return this.references}Errors(t){return bI(this.schema,this.references,t)}Check(t){return this.checkFunc(t)}Decode(t){if(!this.checkFunc(t))throw new yI(this.schema,t,this.Errors(t).First());return this.hasTransform?MI(this.schema,this.references,t):t}Encode(t){const r=this.hasTransform?qI(this.schema,this.references,t):t;if(!this.checkFunc(r))throw new FI(this.schema,t,this.Errors(t).First());return r}}var zi;(function(e){function t(o){return o===36}e.DollarSign=t;function r(o){return o===95}e.IsUnderscore=r;function n(o){return o>=65&&o<=90||o>=97&&o<=122}e.IsAlpha=n;function i(o){return o>=48&&o<=57}e.IsNumeric=i})(zi||(zi={}));var pd;(function(e){function t(o){return o.length===0?!1:zi.IsNumeric(o.charCodeAt(0))}function r(o){if(t(o))return!1;for(let s=0;s<o.length;s++){const a=o.charCodeAt(s);if(!(zi.IsAlpha(a)||zi.IsNumeric(a)||zi.DollarSign(a)||zi.IsUnderscore(a)))return!1}return!0}function n(o){return o.replace(/'/g,"\\'")}function i(o,s){return r(s)?`${o}.${s}`:`${o}['${n(s)}']`}e.Encode=i})(pd||(pd={}));var w0;(function(e){function t(r){const n=[];for(let i=0;i<r.length;i++){const o=r.charCodeAt(i);zi.IsNumeric(o)||zi.IsAlpha(o)?n.push(r.charAt(i)):n.push(`_${o}_`)}return n.join("").replace(/__/g,"_")}e.Encode=t})(w0||(w0={}));var k0;(function(e){function t(r){return r.replace(/'/g,"\\'")}e.Escape=t})(k0||(k0={}));class aN extends gr{constructor(t){super("Unknown type"),this.schema=t}}class ov extends gr{constructor(t){super("Preflight validation check failed to guard for the given schema"),this.schema=t}}var Xo;(function(e){function t(s,a,l){return At.ExactOptionalPropertyTypes?`('${a}' in ${s} ? ${l} : true)`:`(${pd.Encode(s,a)} !== undefined ? ${l} : true)`}e.IsExactOptionalProperty=t;function r(s){return At.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null)`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}))`}e.IsObjectLike=r;function n(s){return At.AllowArrayObject?`(typeof ${s} === 'object' && ${s} !== null && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`:`(typeof ${s} === 'object' && ${s} !== null && !Array.isArray(${s}) && !(${s} instanceof Date) && !(${s} instanceof Uint8Array))`}e.IsRecordLike=n;function i(s){return At.AllowNaN?`typeof ${s} === 'number'`:`Number.isFinite(${s})`}e.IsNumberLike=i;function o(s){return At.AllowNullVoid?`(${s} === undefined || ${s} === null)`:`${s} === undefined`}e.IsVoidLike=o})(Xo||(Xo={}));var Zl;(function(e){function t(E){return E[_]==="Any"||E[_]==="Unknown"}function*r(E,q,S){yield"true"}function*n(E,q,S){yield"true"}function*i(E,q,S){yield`Array.isArray(${S})`;const[ue,G]=[sr("value","any"),sr("acc","number")];Ae(E.maxItems)&&(yield`${S}.length <= ${E.maxItems}`),Ae(E.minItems)&&(yield`${S}.length >= ${E.minItems}`);const Q=vt(E.items,q,"value");if(yield`((array) => { for(const ${ue} of array) if(!(${Q})) { return false }; return true; })(${S})`,pt(E.contains)||Ae(E.minContains)||Ae(E.maxContains)){const Ye=pt(E.contains)?E.contains:yt(),$t=vt(Ye,q,"value"),qr=Ae(E.minContains)?[`(count >= ${E.minContains})`]:[],vr=Ae(E.maxContains)?[`(count <= ${E.maxContains})`]:[],sn=`const count = value.reduce((${G}, ${ue}) => ${$t} ? acc + 1 : acc, 0)`,jo=["(count > 0)",...qr,...vr].join(" && ");yield`((${ue}) => { ${sn}; return ${jo}})(${S})`}E.uniqueItems===!0&&(yield`((${ue}) => { const set = new Set(); for(const element of value) { const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true } )(${S})`)}function*o(E,q,S){yield`(typeof value === 'object' && Symbol.asyncIterator in ${S})`}function*s(E,q,S){yield`(typeof ${S} === 'bigint')`,ji(E.exclusiveMaximum)&&(yield`${S} < BigInt(${E.exclusiveMaximum})`),ji(E.exclusiveMinimum)&&(yield`${S} > BigInt(${E.exclusiveMinimum})`),ji(E.maximum)&&(yield`${S} <= BigInt(${E.maximum})`),ji(E.minimum)&&(yield`${S} >= BigInt(${E.minimum})`),ji(E.multipleOf)&&(yield`(${S} % BigInt(${E.multipleOf})) === 0`)}function*a(E,q,S){yield`(typeof ${S} === 'boolean')`}function*l(E,q,S){yield*St(E.returns,q,`${S}.prototype`)}function*u(E,q,S){yield`(${S} instanceof Date) && Number.isFinite(${S}.getTime())`,Ae(E.exclusiveMaximumTimestamp)&&(yield`${S}.getTime() < ${E.exclusiveMaximumTimestamp}`),Ae(E.exclusiveMinimumTimestamp)&&(yield`${S}.getTime() > ${E.exclusiveMinimumTimestamp}`),Ae(E.maximumTimestamp)&&(yield`${S}.getTime() <= ${E.maximumTimestamp}`),Ae(E.minimumTimestamp)&&(yield`${S}.getTime() >= ${E.minimumTimestamp}`),Ae(E.multipleOfTimestamp)&&(yield`(${S}.getTime() % ${E.multipleOfTimestamp}) === 0`)}function*d(E,q,S){yield`(typeof ${S} === 'function')`}function*f(E,q,S){const ue=globalThis.Object.getOwnPropertyNames(E.$defs).reduce((G,Q)=>[...G,E.$defs[Q]],[]);yield*St(Ya(E.$ref),[...q,...ue],S)}function*h(E,q,S){yield`Number.isInteger(${S})`,Ae(E.exclusiveMaximum)&&(yield`${S} < ${E.exclusiveMaximum}`),Ae(E.exclusiveMinimum)&&(yield`${S} > ${E.exclusiveMinimum}`),Ae(E.maximum)&&(yield`${S} <= ${E.maximum}`),Ae(E.minimum)&&(yield`${S} >= ${E.minimum}`),Ae(E.multipleOf)&&(yield`(${S} % ${E.multipleOf}) === 0`)}function*g(E,q,S){const ue=E.allOf.map(G=>vt(G,q,S)).join(" && ");if(E.unevaluatedProperties===!1){const G=zt(`${new RegExp(Da(E))};`),Q=`Object.getOwnPropertyNames(${S}).every(key => ${G}.test(key))`;yield`(${ue} && ${Q})`}else if(pt(E.unevaluatedProperties)){const G=zt(`${new RegExp(Da(E))};`),Q=`Object.getOwnPropertyNames(${S}).every(key => ${G}.test(key) || ${vt(E.unevaluatedProperties,q,`${S}[key]`)})`;yield`(${ue} && ${Q})`}else yield`(${ue})`}function*m(E,q,S){yield`(typeof value === 'object' && Symbol.iterator in ${S})`}function*b(E,q,S){typeof E.const=="number"||typeof E.const=="boolean"?yield`(${S} === ${E.const})`:yield`(${S} === '${k0.Escape(E.const)}')`}function*y(E,q,S){yield"false"}function*x(E,q,S){yield`(!${vt(E.not,q,S)})`}function*D(E,q,S){yield`(${S} === null)`}function*C(E,q,S){yield Xo.IsNumberLike(S),Ae(E.exclusiveMaximum)&&(yield`${S} < ${E.exclusiveMaximum}`),Ae(E.exclusiveMinimum)&&(yield`${S} > ${E.exclusiveMinimum}`),Ae(E.maximum)&&(yield`${S} <= ${E.maximum}`),Ae(E.minimum)&&(yield`${S} >= ${E.minimum}`),Ae(E.multipleOf)&&(yield`(${S} % ${E.multipleOf}) === 0`)}function*P(E,q,S){yield Xo.IsObjectLike(S),Ae(E.minProperties)&&(yield`Object.getOwnPropertyNames(${S}).length >= ${E.minProperties}`),Ae(E.maxProperties)&&(yield`Object.getOwnPropertyNames(${S}).length <= ${E.maxProperties}`);const ue=Object.getOwnPropertyNames(E.properties);for(const G of ue){const Q=pd.Encode(S,G),Ye=E.properties[G];if(E.required&&E.required.includes(G))yield*St(Ye,q,Q),(Xa(Ye)||t(Ye))&&(yield`('${G}' in ${S})`);else{const $t=vt(Ye,q,Q);yield Xo.IsExactOptionalProperty(S,G,$t)}}if(E.additionalProperties===!1)if(E.required&&E.required.length===ue.length)yield`Object.getOwnPropertyNames(${S}).length === ${ue.length}`;else{const G=`[${ue.map(Q=>`'${Q}'`).join(", ")}]`;yield`Object.getOwnPropertyNames(${S}).every(key => ${G}.includes(key))`}if(typeof E.additionalProperties=="object"){const G=vt(E.additionalProperties,q,`${S}[key]`),Q=`[${ue.map(Ye=>`'${Ye}'`).join(", ")}]`;yield`(Object.getOwnPropertyNames(${S}).every(key => ${Q}.includes(key) || ${G}))`}}function*O(E,q,S){yield`${S} instanceof Promise`}function*H(E,q,S){yield Xo.IsRecordLike(S),Ae(E.minProperties)&&(yield`Object.getOwnPropertyNames(${S}).length >= ${E.minProperties}`),Ae(E.maxProperties)&&(yield`Object.getOwnPropertyNames(${S}).length <= ${E.maxProperties}`);const[ue,G]=Object.entries(E.patternProperties)[0],Q=zt(`${new RegExp(ue)}`),Ye=vt(G,q,"value"),$t=pt(E.additionalProperties)?vt(E.additionalProperties,q,S):E.additionalProperties===!1?"false":"true",qr=`(${Q}.test(key) ? ${Ye} : ${$t})`;yield`(Object.entries(${S}).every(([key, value]) => ${qr}))`}function*ee(E,q,S){const ue=qn(E,q);if(me.functions.has(E.$ref))return yield`${Ze(E.$ref)}(${S})`;yield*St(ue,q,S)}function*oe(E,q,S){const ue=zt(`${new RegExp(E.source,E.flags)};`);yield`(typeof ${S} === 'string')`,Ae(E.maxLength)&&(yield`${S}.length <= ${E.maxLength}`),Ae(E.minLength)&&(yield`${S}.length >= ${E.minLength}`),yield`${ue}.test(${S})`}function*X(E,q,S){yield`(typeof ${S} === 'string')`,Ae(E.maxLength)&&(yield`${S}.length <= ${E.maxLength}`),Ae(E.minLength)&&(yield`${S}.length >= ${E.minLength}`),E.pattern!==void 0&&(yield`${zt(`${new RegExp(E.pattern)};`)}.test(${S})`),E.format!==void 0&&(yield`format('${E.format}', ${S})`)}function*ye(E,q,S){yield`(typeof ${S} === 'symbol')`}function*ae(E,q,S){yield`(typeof ${S} === 'string')`,yield`${zt(`${new RegExp(E.pattern)};`)}.test(${S})`}function*$e(E,q,S){yield`${Ze(E.$ref)}(${S})`}function*Ue(E,q,S){if(yield`Array.isArray(${S})`,E.items===void 0)return yield`${S}.length === 0`;yield`(${S}.length === ${E.maxItems})`;for(let ue=0;ue<E.items.length;ue++)yield`${vt(E.items[ue],q,`${S}[${ue}]`)}`}function*Ge(E,q,S){yield`${S} === undefined`}function*yr(E,q,S){yield`(${E.anyOf.map(G=>vt(G,q,S)).join(" || ")})`}function*Ct(E,q,S){yield`${S} instanceof Uint8Array`,Ae(E.maxByteLength)&&(yield`(${S}.length <= ${E.maxByteLength})`),Ae(E.minByteLength)&&(yield`(${S}.length >= ${E.minByteLength})`)}function*Sn(E,q,S){yield"true"}function*Tn(E,q,S){yield Xo.IsVoidLike(S)}function*Ur(E,q,S){const ue=me.instances.size;me.instances.set(ue,E),yield`kind('${E[_]}', ${ue}, ${S})`}function*St(E,q,S,ue=!0){const G=pn(E.$id)?[...q,E]:q,Q=E;if(ue&&pn(E.$id)){const Ye=Ze(E.$id);if(me.functions.has(Ye))return yield`${Ye}(${S})`;{me.functions.set(Ye,"<deferred>");const $t=Be(Ye,E,q,"value",!1);return me.functions.set(Ye,$t),yield`${Ye}(${S})`}}switch(Q[_]){case"Any":return yield*r();case"Argument":return yield*n();case"Array":return yield*i(Q,G,S);case"AsyncIterator":return yield*o(Q,G,S);case"BigInt":return yield*s(Q,G,S);case"Boolean":return yield*a(Q,G,S);case"Constructor":return yield*l(Q,G,S);case"Date":return yield*u(Q,G,S);case"Function":return yield*d(Q,G,S);case"Import":return yield*f(Q,G,S);case"Integer":return yield*h(Q,G,S);case"Intersect":return yield*g(Q,G,S);case"Iterator":return yield*m(Q,G,S);case"Literal":return yield*b(Q,G,S);case"Never":return yield*y();case"Not":return yield*x(Q,G,S);case"Null":return yield*D(Q,G,S);case"Number":return yield*C(Q,G,S);case"Object":return yield*P(Q,G,S);case"Promise":return yield*O(Q,G,S);case"Record":return yield*H(Q,G,S);case"Ref":return yield*ee(Q,G,S);case"RegExp":return yield*oe(Q,G,S);case"String":return yield*X(Q,G,S);case"Symbol":return yield*ye(Q,G,S);case"TemplateLiteral":return yield*ae(Q,G,S);case"This":return yield*$e(Q,G,S);case"Tuple":return yield*Ue(Q,G,S);case"Undefined":return yield*Ge(Q,G,S);case"Union":return yield*yr(Q,G,S);case"Uint8Array":return yield*Ct(Q,G,S);case"Unknown":return yield*Sn();case"Void":return yield*Tn(Q,G,S);default:if(!Eo(Q[_]))throw new aN(E);return yield*Ur(Q,G,S)}}const me={language:"javascript",functions:new Map,variables:new Map,instances:new Map};function vt(E,q,S,ue=!0){return`(${[...St(E,q,S,ue)].join(" && ")})`}function Ze(E){return`check_${w0.Encode(E)}`}function zt(E){const q=`local_${me.variables.size}`;return me.variables.set(q,`const ${q} = ${E}`),q}function Be(E,q,S,ue,G=!0){const[Q,Ye]=[`
`,sn=>"".padStart(sn," ")],$t=sr("value","any"),qr=nn("boolean"),vr=[...St(q,S,ue,G)].map(sn=>`${Ye(4)}${sn}`).join(` &&${Q}`);return`function ${E}(${$t})${qr} {${Q}${Ye(2)}return (${Q}${vr}${Q}${Ye(2)})
}`}function sr(E,q){const S=me.language==="typescript"?`: ${q}`:"";return`${E}${S}`}function nn(E){return me.language==="typescript"?`: ${E}`:""}function on(E,q,S){const ue=Be("check",E,q,"value"),G=sr("value","any"),Q=nn("boolean"),Ye=[...me.functions.values()],$t=[...me.variables.values()],qr=pn(E.$id)?`return function check(${G})${Q} {
  return ${Ze(E.$id)}(value)
}`:`return ${ue}`;return[...$t,...Ye,qr].join(`
`)}function Si(...E){const q={language:"javascript"},[S,ue,G]=E.length===2&&xn(E[1])?[E[0],E[1],q]:E.length===2&&!xn(E[1])?[E[0],[],E[1]]:E.length===3?[E[0],E[1],E[2]]:E.length===1?[E[0],[],q]:[null,[],q];if(me.language=G.language,me.variables.clear(),me.functions.clear(),me.instances.clear(),!pt(S))throw new ov(S);for(const Q of ue)if(!pt(Q))throw new ov(Q);return on(S,ue)}e.Code=Si;function ol(E,q=[]){const S=Si(E,q,{language:"javascript"}),ue=globalThis.Function("kind","format","hash",S),G=new Map(me.instances);function Q(vr,sn,jo){if(!Eo(vr)||!G.has(sn))return!1;const Xf=ap(vr),sl=G.get(sn);return Xf(sl,jo)}function Ye(vr,sn){return np(vr)?ip(vr)(sn):!1}function $t(vr){return Fp(vr)}const qr=ue(Q,Ye,$t);return new sN(E,q,qr,S)}e.Compile=ol})(Zl||(Zl={}));const x0={};function I5(e,t){e in x0||(x0[e]=t)}let sv=!1;function lN(){sv||(sv=!0,NF(e=>(x0[e.schema[_]]||C5)(e)))}const $0=Symbol.for("object-shape-tester.shape-identifier");function Ce(e){if(lN(),Pp(e))return e;const t=D0(e),r=Qo(t,!1),n=Qo(t,!0),i={$_schema:t,$_schemaNoExtraKeys:r,$_schemaExtraKeys:n,default:t.default,$_compiledSchema:Zl.Compile(t),$_compiledSchemaNoExtraKeys:Zl.Compile(r),$_compiledSchemaExtraKeys:Zl.Compile(n)};return Object.defineProperties(i,{runtimeType:{configurable:!1,enumerable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}},[$0]:{configurable:!1,enumerable:!1,writable:!1,value:!0}}),i}function Pp(e){return T.hasKey(e,$0)&&!!e[$0]}function Ip(e){return T.hasKey(e,_)}function Qo(e,t){const r={...e};if(Array.isArray(e.anyOf)&&(r.anyOf=e.anyOf.map(n=>Qo(n,t))),Array.isArray(e.allOf)&&(r.allOf=e.allOf.map(n=>Qo(n,t))),Ip(e.items)?r.items=Qo(e.items,t):Array.isArray(e.items)&&(r.items=e.items.map(n=>Qo(n,t))),T.isObject(e.properties)){const n={};Object.entries(e.properties).forEach(([i,o])=>{n[i]=Qo(o,t)}),r.properties=n}return r.additionalProperties=t,r}function D0(e){if(Ip(e))return e;if(Pp(e))return e.$_schema;if(T.isFunction(e))return rt.Function([],rt.Any(),{default:e});if(T.isObject(e)){const t={},r={};return Object.entries(e).forEach(([n,i])=>{const o=D0(i);r[n]=o,t[n]=o.default}),rt.Object(r,{default:t})}else{if(T.isArray(e))return rt.Array(rt.Union(e.map(t=>D0(t))),{default:[]});if(T.isPrimitive(e)){if(T.isString(e))return rt.String({default:e});if(T.isNumber(e))return rt.Number({default:e});if(T.isBoolean(e))return rt.Boolean({default:e});if(T.isSymbol(e))return rt.Symbol({default:e});if(T.isNull(e))return rt.Null({default:null});if(T.isUndefined(e))return rt.Undefined({default:void 0});if(T.isBigInt(e))return rt.BigInt({default:e});Nt.tsType(e).equals(),Nt.never(`Unexpected primitive shape value type: '${typeof e}'`)}else throw new Error(`Invalid shape: ${$(e)}`)}}function uN({checkValue:e,default:t,name:r}){return Eo(r)||sp(r,(n,i)=>e(i)),(n=t)=>Ce(rt.Unsafe({[_]:r,default:n}))}function ai(e,t){const r=dn(e);if(t!=null&&!r.includes(t))throw new TypeError("enumShape default must be a subset of the given enum.");return Ce(rt.Union(r.map(n=>rt.Literal(n)),{default:t??r[0]}))}function ke(e){return T.isSymbol(e)?cN(e):Ce(rt.Const(e,{default:e}))}const pc="ExactSymbol";function cN(e){return Eo(pc)||sp(pc,(t,r)=>r===t.symbol),I5(pc,({schema:t})=>`Expected symbol ${t.symbol?.description?Ak({value:t.symbol.description,wrapper:"'"}):"<unnamed symbol>"}`),Ce(rt.Unsafe({[_]:pc,symbol:e,default:e}))}function dN(...e){const t={},r=e.map(n=>{const i=Ce(n);return Object.assign(t,i.default),i.$_schema});return Ce(rt.Composite(r,{default:t}))}function Xt(e,t={}){At.ExactOptionalPropertyTypes=!0;const r=Ce(e).$_schema,n=t.alsoUndefined?rt.Union([rt.Undefined(),r]):r;return Ce(rt.Optional(n))}function je(...e){let t;const r=e.map((n,i)=>{const o=Ce(n);return i||(t=o.default),o.$_schema});return Ce(rt.Union(r,{default:t}))}function Le(e){return Xt(je(void 0,null,e))}function fN(e){const t=Ce(e);return Ce(rt.Partial(t.$_schema,{default:t.default}))}function Np(e){return je(e,"",-1,0n,!1,bp(),null,void 0)}class hN extends TypeError{errors;failureMessage;name="ShapeMismatchError";constructor(t,r){const n=t.map(o=>N5(o)).join(`
`),i=Na(r,`Shape mismatch:
${ug(n,1)}`);super(i),this.errors=t,this.failureMessage=r}}function mN(e){return e.errors.flatMap(t=>Array.from(t))}function N5(e,t=0){const r=mN(e).map(i=>N5(i,t+1)),n=[e.path,e.message].filter(T.isTruthy).join(": ")+(r.length?":":"");return[ug(n,t),...r].join(`
`)}function go(e,t,r={}){return O5(t,r).Check(e)}function bd(e,t,r={},n){if(go(e,t,r))return;const i=Array.from(O5(t,r).Errors(e));if(i.length)throw new hN(i,n)}function O5(e,t){return e=gN(e),t.allowExtraKeys?e.$_compiledSchemaExtraKeys:e.$_compiledSchemaNoExtraKeys}function gN(e){return Ce(e)}function Qs({exclusiveMax:e,exclusiveMin:t,...r}){const{min:n,max:i}=eg(r),o=r.default??(i-n)/2+n,s=Ce(rt.Number({...t?{exclusiveMinimum:n}:{minimum:n},...e?{exclusiveMaximum:i}:{maximum:i},default:o})),a=wk(()=>bd(o,s));if(a)throw Oa(a,"Default range value is not within range.");return s}const Lc="recordShape";function zu({keys:e,values:t,partial:r,additionalProperties:n}){pN();const i=R5(e),o=Ce(t);return Ce(rt.Unsafe({[_]:Lc,keysShape:i,valuesShape:o,isPartial:!!r,additionalProperties:!!n,default:bN({isPartial:!!r,keysShape:i,valuesShape:o})}))}function pN(){Eo(Lc)||sp(Lc,(e,t)=>{if(typeof t!="object"||!t||Array.isArray(t))return!1;const r=Object.entries(t).every(([i,o])=>{const s=e.additionalProperties?!0:go(i,e.keysShape),a=go(o,e.valuesShape);return s&&a}),n=e.isPartial?!0:!av(e.keysShape,t).length;return r&&n}),I5(Lc,e=>{const r=e.schema,n=e.value;if(typeof n!="object"||!n||Array.isArray(n))return"Expected an object";const i=Kt(Object.entries(n),([l])=>l,(l,[u,d])=>!go(u,r.keysShape)||!go(d,r.valuesShape)),o=av(r.keysShape,n),s=i.length?["Failure at keys",i.join(",")].join(": "):"",a=o.length?["Missing keys",o.join(",")].join(": "):"";return[s,a].filter(T.isTruthy).join(`
`)})}function av(e,t){const r=yd(e).filter(n=>T.isPropertyKey(n));return r.length?r.filter(n=>!T.hasKey(t,n)):[]}function bN({keysShape:e,valuesShape:t,isPartial:r}){if(r)return{};{const n=yd(e),i=t.default;return Object.fromEntries(n.map(o=>[o,i]))}}function R5(e){return Pp(e)?e:Ip(e)?Ce(e):T.isObject(e)?ai(e):T.isArray(e)&&T.isLengthAtLeast(e,1)?je(...e.map(t=>ke(t))):T.isPropertyKey(e)?Ce(e):Ce(rt.Undefined())}function yd(e){const t=e.$_schema,r=t[_].toLowerCase();return["const","literal"].includes(r)?[t.const]:r==="union"?Od(t.anyOf.flatMap(n=>yd(Ce(n)))):["undefined","number","string","symbol"].includes(r)?[]:yd(R5(e.default))}function yN(e){return Ce(rt.Unknown({default:e}))}const vN=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Op=vN.reduce((e,t)=>(e[t]=t,e),{});mt.defaultZone.name;const B5=Op.UTC,wN=Ce({hour:Qs({...dy,default:dy.min}),minute:Qs({...fy,default:fy.min}),second:Qs({...hy,default:hy.min}),millisecond:Qs({...my,default:my.min}),timezone:ai(Op,B5)}),kN=Ce({year:2023,month:Qs({...py,default:py.min}),day:Qs({...by,default:by.min}),timezone:ai(Op,B5)});Ce(dN(kN,wN));pe.Years+"",pe.Months+"",pe.Weeks+"",pe.Days+"",pe.Hours+"",pe.Minutes+"",pe.Seconds+"",pe.Milliseconds+"";Ce(je({get:ke(J.Month),in:je(ke(J.Year))},{get:ke(J.Week),in:je(ke(J.Year),ke(J.Month))},{get:ke(J.Day),in:je(ke(J.Year),ke(J.Month),ke(J.Week))},{get:ke(J.Hour),in:je(ke(J.Year),ke(J.Month),ke(J.Week),ke(J.Day))},{get:ke(J.Minute),in:je(ke(J.Year),ke(J.Month),ke(J.Week),ke(J.Day),ke(J.Hour))},{get:ke(J.Second),in:je(ke(J.Year),ke(J.Month),ke(J.Week),ke(J.Day),ke(J.Hour),ke(J.Minute))},{get:ke(J.Millisecond),in:je(ke(J.Year),ke(J.Month),ke(J.Week),ke(J.Day),ke(J.Hour),ke(J.Minute),ke(J.Second))}));zu({keys:ai(pe),values:-1,partial:!0});var lv;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(lv||(lv={}));var A0;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(A0||(A0={}));var uv;(function(e){e.Year="year",e.Month="month",e.Day="day"})(uv||(uv={}));const xN={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};jE(xN,dn(A0));uN({default:new Date().toISOString(),name:"UtcIsoString",checkValue(e){return $N(e)}});function $N(e){return ge.fromISO(e).toUTC().toISO()===e}const DN=Ce({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:yN()});function Kh(e){return go(e,DN,{allowExtraKeys:!0})}class L5 extends Ex{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck="equalityCheck"in t?t.equalityCheck:qg}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}const{I:AN}=w6,cv=e=>e,dv=()=>document.createComment(""),vl=(e,t,r)=>{const n=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const o=n.insertBefore(dv(),i),s=n.insertBefore(dv(),i);r=new AN(o,s,e,e.options)}else{const o=r._$AB.nextSibling,s=r._$AM,a=s!==e;if(a){let l;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(l=e._$AU)!==s._$AU&&r._$AP(l)}if(o!==i||a){let l=r._$AA;for(;l!==o;){const u=cv(l).nextSibling;cv(n).insertBefore(l,i),l=u}}}return r},Yo=(e,t,r=e)=>(e._$AI(t,r),e),EN={},CN=(e,t=EN)=>e._$AH=t,SN=e=>e._$AH,Hh=e=>{e._$AR(),e._$AA.remove()};const Df={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Ai=e=>(...t)=>({_$litDirective$:e,values:t});class Ei{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}const TN={attribute:!0,type:String,converter:rd,reflect:!1,hasChanged:Eg},MN=(e=TN,t,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(n==="setter"){const{name:s}=r;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e,!0,a)}}throw Error("Unsupported decorator location: "+n)};function FN(e){return(t,r)=>typeof r=="object"?MN(e,t,r):((n,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,n),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,r)}const bn=Ai(class extends Ei{constructor(e){if(super(e),e.type!==Df.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return yn}});const Qt=e=>e??fe;function*PN(e,t){const r=typeof t=="function";if(e!==void 0){let n=-1;for(const i of e)n>-1&&(yield r?t(n):t),n++,yield i}}let E0=class extends Ei{constructor(t){if(super(t),this.it=fe,t.type!==Df.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===fe||t==null)return this._t=void 0,this.it=t;if(t===yn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};E0.directiveName="unsafeHTML",E0.resultType=1;const IN=Ai(E0);function NN(e,t,r){return e?t(e):r?.(e)}class ON extends Wl{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames;static testIds}function RN(e,t,r){const n=!t.length&&!r.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(n||i)return[...e];const o=e.map(a=>[a]);return o.length||(o[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(o[a]=[])}),t.forEach(a=>{const l=o[a.index];l&&l.splice(0,0,...a.values)}),o.flat()}function C0(e){return T.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Rp(e){return T.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function _5(e){return Kt(e,t=>{if(C0(t))return t.definition;if(Rp(t))return t.tagInterpolationKey||t},T.isTruthy)}const j5=new WeakMap;function BN(e,t){const r=_5(t);return z5(j5,[e,...r]).value?.template}function LN(e,t,r){const n=_5(t);return q5(j5,[e,...n],r)}function z5(e,t,r=0){const{currentTemplateAndNested:n,reason:i}=U5(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?z5(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:i}}function U5(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const i=e.get(n);return i==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:i,reason:"key and value exists"}}function q5(e,t,r,n=0){const{currentTemplateAndNested:i,currentKey:o,reason:s}=U5(e,t,n);if(!o)return{result:!1,reason:s};const a=i??{nested:void 0,template:void 0};if(i||e.set(o,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const l=a.nested??new WeakMap;return a.nested||(a.nested=l),q5(l,t,r,n+1)}function W5(e,t,r){const n=BN(e,t),i=n??r();if(!n){const a=LN(e,t,i);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const o=i.valuesTransform(t),s=RN(t,o.valueInsertions,o.valueIndexDeletions);return{strings:i.templateStrings,values:s}}function V5(e,t,r,n){const i=[],o=[],s=[],a=[];return e.forEach((u,d)=>{const f=i.length-1,h=i[f],g=d-1,m=t[g];n&&n(u);let b,y=[];if(typeof h=="string"&&(b=r(h,u,m),b)){i[f]=[h,b.replacement].join(""),s.push(g);const D=b.getExtraValues;y=D?D(m):[],y.length&&D?(i[f]+=" ",y.forEach((C,P)=>{P&&i.push(" ")}),a.push(C=>{const P=C[g],O=D(P);return{index:g,values:O}}),i.push(u)):i[f]+=u}b||i.push(u);const x=e.raw[d];b?(o[f]=[o[f],b.replacement,x].join(""),y.length&&y.forEach(()=>{o.push("")})):o.push(x)}),{templateStrings:Object.assign([],i,{raw:o}),valuesTransform(u){const d=a.flatMap(f=>f(u));return{valueIndexDeletions:s,valueInsertions:d}}}}function _N(...[e,t,r]){if(Rp(r))return{replacement:r.tagName,getExtraValues:void 0}}function jN(e,t){return V5(e,t,_N)}function j(e,...t){const r=W5(e,t,()=>jN(e,t));return Ik(r.strings,...r.values)}const zN={allowPolymorphicState:!1,errorHandler:void 0};function K5(e,t){const r=e.instanceState;tt(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&tt(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}class UN extends CustomEvent{_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function Af(){return e=>class extends UN{static type=e;_type=e;constructor(t){super(e,t)}}}function nr(){return Af()}function qN(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const i=Af()([e,n].join("-"));return r[n]=i,r},{}):{}}function WN(e){return e?ut(e,t=>t):{}}function H5(e,t){t in e||FN()(e,t)}function VN(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function fv(e,t){const r=e;function n(s){t?VN(s,e,e.tagName):H5(e,s)}function i(s,a){return n(a),r[a]}return new Proxy({},{get:i,set(s,a,l){n(a);const u=r[a];function d(h){s[a]=h,r[a]=h}const f=e.observablePropertyListenerMap[a];if(u!==l&&Kh(u)&&f&&u.removeListener(f),Kh(l))if(f)l.listen(!1,f);else{let h=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=h,l.listen(!1,h)}else Kh(u)&&(e.observablePropertyListenerMap[a]=void 0);return d(l),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,a){if(a in s)return{get value(){return i(s,a)},configurable:!0,enumerable:!0}},has(s,a){return Reflect.has(s,a)}})}function hv(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid element string name '${n}' in '${e}': element string names must begin with the element's tag name.`)})}function mv(e,t,r){return r?xo(r,i=>({key:i,value:[e,t,i].join("-")}),{}):{}}function KN({hostClassNames:e,cssVars:t}){return{hostClasses:ut(e,(r,n)=>({name:ve(n),selector:ve(`:host(.${n})`)})),cssVars:t}}function HN({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:i}){t&&tt(t).forEach(o=>{const s=t[o],a=r[o];typeof s=="function"&&(s({state:n,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function GN({element:e,eventsMap:t,cssVars:r,slotNamesMap:n,testIdsMap:i}){function o(a){tt(a).forEach(l=>{const u=a[l];e.instanceState[l]=u})}return{cssVars:r,slotNames:n,testIds:i,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function Ci(...e){return Nt.isEmpty(e),t=>{const r=t;if(!T.isObject(r))throw new TypeError("Cannot define element with non-object init: ${init}");return ZN({...r,options:{...r.options}})}}function ZN(e){if(!T.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!T.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...zN,...e.options},r=qN(e.tagName,e.events),n=WN(e.hostClasses);e.hostClasses&&hv(e.tagName,e.hostClasses),e.cssVars&&hv(e.tagName,e.cssVars);const i=e.cssVars?xi(e.cssVars):{},o=mv(e.tagName,"slot",e.slotNames),s=mv(e.tagName,"test-id",e.testIds),a=typeof e.styles=="function"?e.styles(KN({hostClassNames:n,cssVars:i})):e.styles||j``,l=e.render;function u(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:d,inputs:f}}const d=class extends ON{static elementOptions=t;static tagName=e.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return GN({element:this,eventsMap:r,cssVars:i,slotNamesMap:o,testIdsMap:s})}static assign=u;static events=r;static render=l;static hostClasses=n;static cssVars=i;static init=e;static slotNames=o;static testIds=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const f=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const g=e.state(f);if(g instanceof Promise)throw new TypeError("init cannot be asynchronous");tt(g).forEach(m=>{H5(this,m),this.instanceState[m]=g[m]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(f)instanceof Promise))throw new TypeError("init cannot be asynchronous");const h=l(f);if(h instanceof Promise)throw new TypeError("render cannot be asynchronous");return HN({host:f.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},h}catch(f){const h=Oa(f,`Failed to render ${e.tagName}`);return console.error(h),this._lastRenderError=h,t.errorHandler?.(h),fr(h)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const f=this.createRenderParams();if(e.init(f)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(f=>{T.hasKey(f,"destroy")&&T.isFunction(f.destroy)&&f.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const f=this.createRenderParams();if(e.cleanup(f)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(f){K5(this,f)}observablePropertyListenerMap={};instanceInputs=fv(this,!1);instanceState=fv(this,!t.allowPolymorphicState);constructor(){super(),this.definition=d}};return Object.defineProperties(d,{name:{value:qE(e.tagName,{firstLetterCase:eu.Upper}),writable:!0}}),globalThis.window&&(globalThis.window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):globalThis.window.customElements.define(e.tagName,d)),d}class YN extends Js{isResolved(){return!(this.value instanceof Promise)}isSettled(){return!(this.value instanceof Promise)}isWaiting(){return this.value instanceof Promise}isError(){return this.value instanceof Error}isNotError(){return!(this.value instanceof Error)}}function JN(e){return new YN(e)}const gv=(e,t,r)=>{const n=new Map;for(let i=t;i<=r;i++)n.set(e[i],i);return n},XN=Ai(class extends Ei{constructor(e){if(super(e),e.type!==Df.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const i=[],o=[];let s=0;for(const a of e)i[s]=n?n(a,s):s,o[s]=r(a,s),s++;return{values:o,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const i=SN(e),{values:o,keys:s}=this.dt(t,r,n);if(!Array.isArray(i))return this.ut=s,o;const a=this.ut??=[],l=[];let u,d,f=0,h=i.length-1,g=0,m=o.length-1;for(;f<=h&&g<=m;)if(i[f]===null)f++;else if(i[h]===null)h--;else if(a[f]===s[g])l[g]=Yo(i[f],o[g]),f++,g++;else if(a[h]===s[m])l[m]=Yo(i[h],o[m]),h--,m--;else if(a[f]===s[m])l[m]=Yo(i[f],o[m]),vl(e,l[m+1],i[f]),f++,m--;else if(a[h]===s[g])l[g]=Yo(i[h],o[g]),vl(e,i[f],i[h]),h--,g++;else if(u===void 0&&(u=gv(s,g,m),d=gv(a,f,h)),u.has(a[f]))if(u.has(a[h])){const b=d.get(s[g]),y=b!==void 0?i[b]:null;if(y===null){const x=vl(e,i[f]);Yo(x,o[g]),l[g]=x}else l[g]=Yo(y,o[g]),vl(e,i[f],y),i[b]=null;g++}else Hh(i[h]),h--;else Hh(i[f]),f++;for(;g<=m;){const b=vl(e,l[m+1]);Yo(b,o[g]),l[g++]=b}for(;f<=h;){const b=i[f++];b!==null&&Hh(b)}return this.ut=s,CN(e,l),yn}}),QN=XN;function Ef(e,t){return ps(e,t),e.element}function eO(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function ps(e,t){const r=eO(e),n=r?`: in ${r}`:"";if(e.type!==Df.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function tO(e,t){return Ai(class extends Ei{element;constructor(r){super(r),this.element=Vt.instanceOf(Ef(r,e),HTMLElement)}render(...r){return t({params:r,directive:this,element:this.element}),yn}})}const is=tO("attributes",({element:e,params:[t],directive:r})=>{if(!t)return;const i=ja(r,"allAttributesApplied",()=>new Set);tt(t).forEach(o=>{if(o.toLowerCase()!==o)throw new Error(`Cannot assign attribute name with uppercase letters: ${o}`);i.add(o)}),i.forEach(o=>{const s=t[o];s==null||s===!1||s===fe?e.removeAttribute(o):s===""||s===!0?e.setAttribute(o,""):e.setAttribute(o,String(s))})});function rO(e){const t=Ai(class extends Ei{element;constructor(r){super(r),this.element=Ef(r,e)}render(r){return this.element.setAttribute(e,r),yn}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function Ee(e,t){return nO(e,t)}const nO=Ai(class extends Ei{element;lastListenerMetaData;constructor(e){super(e),this.element=Ef(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>this.lastListenerMetaData?.callback(r)}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),yn}});function iO(e){return Ee("keydown",async t=>{const r=t.code.toLowerCase();(r.includes("enter")||r.includes("return")||r==="space")&&(t.stopImmediatePropagation(),t.preventDefault(),await e())})}const pv="onDomCreated",vd=Ai(class extends Ei{element;constructor(e){super(e),ps(e,pv)}update(e,[t]){ps(e,pv);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),bv="onDomRendered",oO=Ai(class extends Ei{constructor(e){super(e),ps(e,bv)}update(e,[t]){ps(e,bv);const r=e.element;return window.requestAnimationFrame(()=>t(r)),this.render(t)}render(e){}}),yv="onResize",G5=Ai(class extends Ei{element;resizeObserver=new ResizeObserver(e=>{this.element&&this.callback&&sO(this.element,this.callback,e)});callback;constructor(e){super(e),ps(e,yv)}update(e,[t]){ps(e,yv),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function sO(e,t,r){const n=r[0];if(!n)throw console.error(r),new Error("Resize observation triggered but the first entry was empty.");t({target:n.target,contentRect:n.contentRect},e)}function aO(e,t,r,n,i={}){const o=i.useLastResolvedValue?e.lastResolvedValue:e.value;return o instanceof Error?n?n(o):fr(o):T.isPromiseLike(o)||i.useLastResolvedValue&&o===void 0?t:r?r(o):o}function Xn(e,t,r){return NN(e,()=>t,()=>r)}const{attributeDirective:lO}=rO("data-test-id"),S0=lO;function Z5(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return(...n)=>i=>(t(i),Ci(...n)(r(i)))}function uO(e,t){return cO(void 0,e)}const cO=Ai(class extends Ei{element;constructor(e){super(e),this.element=Ef(e,"assign")}render(e,t){return K5(this.element,t),yn}}),dO={};function fO(e,t){return t.map((r,n)=>{const i=e[n],o=e[n+1];if(i&&o){const{shouldHaveTagNameHere:s}=Y5(i,o);if(s&&T.isString(r))return{tagName:r,tagInterpolationKey:ja(dO,r,()=>({tagName:r}))}}return r})}function Y5(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function hO(...[e,t,r]){const n=C0(r)?r.definition:r,{isOpeningTag:i,shouldHaveTagNameHere:o}=Y5(e,t),s=Rp(n);if(s&&o&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(o&&!s)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!o||!s?void 0:{replacement:n.tagName,getExtraValues(l){const u=C0(l)?l.inputs:void 0;return[i&&u?uO(u):void 0].filter(T.isTruthy)}}}function mO(e){}function gO(e){return V5(e.strings,e.values,hO,mO)}function v(e,...t){const r=fO(e,t),n=h6(e,...r),i=W5(e,r,()=>gO(n));return{...n,strings:i.strings,values:i.values}}function Ea(e){if("templateString"in e)return e.templateString;const{strings:t,values:r}=e;if(!t?.length&&!r?.length)return"";const n=[...r||[],""],o=(t??[""]).map((s,a)=>{const l=pO(s,n[a]);return`${s}${l}`});return Dk(o.join(""))}function pO(e,t){return t._$litType$!=null||t._$litDirective$!=null?Ea(t):Array.isArray(t)?t.map(n=>Ea(n)).join(""):e.endsWith("=")?`"${t}"`:t}function J5(e){return ut(e,(t,r)=>r instanceof ot?ve(r.toString({format:"hex"})):J5(r))}const bO="dodgerblue";function T0(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Gh({background:e,foreground:t}){return{background:e??new ot(T0(t)),foreground:t??new ot(T0(e))}}var wd;(function(e){e.Dark="dark",e.Light="light"})(wd||(wd={}));function yO(e){return e==="black"?"white":"black"}const vO={black:{foregroundFaint1:new ot("#ccc"),foregroundFaint2:new ot("#eee")},white:{foregroundFaint1:new ot("#ccc"),foregroundFaint2:new ot("#eee")}},wO={black:{backgroundFaint1:new ot("#666"),backgroundFaint2:new ot("#444")},white:{backgroundFaint1:new ot("#ccc"),backgroundFaint2:new ot("#fafafa")}};function vv({themeColor:e=bO,themeStyle:t=wd.Light}={}){const r=new ot(e),n=new ot(t===wd.Dark?"black":"white"),i=T0(n),o=new ot(i),s={nav:{hover:Gh({background:r.clone().set({"hsl.l":93})}),active:Gh({background:r.clone().set({"hsl.l":90})}),selected:Gh({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...wO[yO(i)],foreground:o,...vO[i]}};return J5(s)}async function mu(e=1){const t=new Kc;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function kO(e,t){return{element:e,children:X5(e)}}function X5(e,t,r){return xO(e).map(n=>{const i=X5(n);return{element:n,children:i}})}function xO(e){return[...e.children,...e.shadowRoot?.children??[]]}function Zh(e){return e.matches(":focus")}function Bp(e){if(e instanceof ShadowRoot)return e.host;const t=e.parentNode;if(t)return t instanceof Element?t:Bp(t)}function Q5(e,t){if(t(e))return e;const r=Bp(e);if(r)return Q5(r,t)}function Uu(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const i=t.name,o=n?.constructor.name,s=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${o}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${o}'.`;throw new Error(s)}return n}function $O(e){const t=Bp(e);return t&&Q5(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function DO(e){let t=0,r=document.activeElement||void 0;for(;r;){if(e({depth:t,element:r}))return t;r=r.shadowRoot?.activeElement||void 0,r&&++t}return t}function AO({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const i=t.toLowerCase(),o=e.toLowerCase();e:for(let s=0,a=0;s<n;s++){const l=o.codePointAt(s);for(;a<r;)if(i.codePointAt(a++)===l)continue e;return!1}return!0}const EO=na(32);function _c(e){return e.join(EO)}function e$(e){if(!e.length)return[];const t=_c(e),r=e$(e.slice(0,-1));return[t,...r]}const CO=["error","errors"];function SO(e){return CO.includes(e)}function TO({flattenedNodes:e,searchQuery:t}){const r={};function n(i){Object.values(i.children).map(s=>(n(s),_c(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(i=>{const o=i.entry.errors.length&&SO(t),s=_c(i.fullUrlBreadcrumbs);if(AO({searchIn:[i.entry.title,...i.entry.descriptionParagraphs.map(l=>T.isString(l)?l:Ea(l))].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o||r[s]){const l=e$(i.fullUrlBreadcrumbs);n(i),l.forEach(u=>r[u]=!0)}else r[s]=!1}),e.filter(i=>{const o=_c(i.fullUrlBreadcrumbs),s=r[o];if(!T.isBoolean(s))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}class Lp extends Error{name="SpaRouterError"}class wv extends Lp{name="GlobalUrlEventsConsolidationError"}class MO extends Lp{name="SanitizationDepthMaxed"}Ce({paths:[""],search:Xt(je(void 0,zu({keys:"",values:[""]}))),hash:Xt(je(void 0,""))});const FO=Ce({basePath:Xt("",{alsoUndefined:!0}),sanitizeRoute:(e=>e),maxListenerCount:Xt(1,{alsoUndefined:!0}),disableWarnings:Xt(!1,{alsoUndefined:!0}),isPaused:Xt(!1,{alsoUndefined:!0})}),Yh="://";function t$(...e){const t=e.join("/"),[r,n=""]=t.includes(Yh)?t.split(Yh):["",t];let i=!1;const o=n.replace(/\/{2,}/g,"/").split("/").reduce((s,a,l,u)=>{if(i)return s;const d=u[l+1];let f=a;const h=d?.startsWith("?"),g=!a.includes("?")&&h,m=d==="?";if(h||g){i=!0;let b=!1;const y=u.slice(l+2).reduce((x,D)=>(D.includes("#")&&(b=!0),b?x.concat(D):[x,D].join("&")),"");f=[a,d,m?ss({value:y,prefix:"&"}):y].join("")}return s.concat(f)},[]);return[r,r?Yh:"",o.join("/")].join("")}var Ca;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(Ca||(Ca={}));var Sa;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(Sa||(Sa={}));const PO=Ce({encoding:Xt(je(void 0,ai(Ca))),searchParamStrategy:Xt(je(void 0,ai(Sa)))});function bc(e,t){return e.map(r=>{if(r!=null)return sa(String(r),t)}).filter(r=>r!=null)}function sa(e,t){return t?.encoding===Ca.Decode?decodeURIComponent(e):t?.encoding===Ca.Encode?encodeURIComponent(e):e}const IO=Ce(zu({keys:"",values:[""]}));function NO(e,t,r){const n=r?.searchParamStrategy===Sa.Clear?{}:ut(e,(s,a)=>uo(a)),i=ut(t,(s,a)=>{if(r?.searchParamStrategy===Sa.Append){const l=n[s],u=T.isArray(l)?l:[l];if(a){const d=T.isArray(a)?a:[a];return bc([...u,...d],r)}else return bc(u,r)}else return T.isArray(a)?bc(a,r):a?bc([a],r):void 0});return Wd({...n,...i},(s,a)=>!!a)}function r$(e,t){return T.isString(e)&&!e.includes("?")?{}:(T.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(o=>{const[s,...a]=_E(o,"=");return[s,a.length?a.join("="):void 0]}).reduce((o,[s,a])=>{const l=n$({options:t,key:s,value:a}),u=ja(o,l.key,()=>[]);return a!=null&&u.push(l.value),o},{})}function OO(e){if(e!=null)return T.isArray(e)?[...e]:e===""?[]:[e]}function RO(e,t){const r=Kt(Object.entries(e),([n,i])=>{const o=OO(i);return o?.length?o.map(s=>{const a=n$({options:t,key:n,value:s});return[a.key,a.value].join("=")}):[n]},(n,[,i])=>i!=null).flat();return r.length?Br({value:r.join("&"),prefix:"?"}):""}function n$({options:e,key:t,value:r}){return{key:sa(t,e),value:sa(String(r),e)}}function i$({hash:e,hostname:t,password:r,pathname:n,port:i,protocol:o,search:s,username:a}){return[o?o+"://":"",a?a+":":"",r?r+"@":"",Cf({hostname:t,port:i}),_p({hash:e,pathname:n,search:s})].join("")}function o$({pathname:e}){const t=ss({value:e,prefix:"/"});return t?t.split("/"):[]}function _p({hash:e,pathname:t,search:r}){return[Br({value:t,prefix:"/"}),r?Br({value:r,prefix:"?"}):"",e?Br({value:e,prefix:"#"}):""].join("")}function Cf({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function s$({hostname:e,port:t,protocol:r}){return[r,Cf({hostname:e,port:t})].filter(T.isTruthy).join("://")}function aa(e,t){const r=T.isString(e)?ss({value:e,prefix:"."}):e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),i=n?Br({value:sa(n,t),prefix:"#"}):"",o=r.replace(/#[^#]*$/,""),s=o.replace(/^[^?]*(?:\?|$)/,""),a=s?Br({value:sa(s,t),prefix:"?"}):"",l=o.replace(/\?[^?]*$/,""),u=l.includes("://")?l.replace(/:\/\/.*$/,""):"",d=l.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),f=d.replace(/@.*/,""),h=d.replace(/^[^@]*@/,""),g=f!==h,[m,...b]=g?f.split(":").reverse():[],y=b.toReversed().join("").replace(/[/:]/g,"")||"",x=m?.replace(/[/:]/g,"")||"",D=LE(h.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),C=D[0]?.endsWith("]")?"":D[1]===":"&&D[0]||"",O=h.replace(new RegExp(`:${C}($|/)`),"$1").replace(/\/.*/,""),H=h.replace(/^[^/]*(\/|$)/,"$1"),ee=sa(H.replace(/^[^/]*(?:\/|$)/,"/"),t),oe=Cf({hostname:O,port:C}),X=s$({hostname:O,port:C,protocol:u}),ye=i$({hash:i,hostname:O,password:x,pathname:ee,port:C,protocol:u,search:a,username:y}),ae=r$(a),$e=o$({pathname:ee});return{fullPath:_p({hash:i,pathname:ee,search:a}),hash:i,host:oe,hostname:O,href:ye,origin:X,password:x,pathname:ee,paths:$e,port:C,protocol:u,search:a,searchParams:ae,username:y}}Ce({hash:Xt(je(void 0,"")),search:Xt(je(void 0,"",zu({keys:"",values:je(null,void 0,"",-1,!1,0n,[null,void 0,"",-1,!1,0n])}))),hostname:Xt(je(void 0,"")),pathname:Xt(je(void 0,"")),paths:Xt(je(void 0,[""])),protocol:Xt(je(void 0,"")),username:Xt(je(void 0,"")),password:Xt(je(void 0,"")),port:Xt(je(void 0,"",-1))});function BO(e,t,r){const n=!!r,i=t==null||go(t,PO,{allowExtraKeys:!1}),o=i?aa(""):T.instanceOf(e,URL)||T.isString(e)?aa(e):e,s=i?e:t,a=T.isString(s)&&s.startsWith("."),l=T.isString(s)||T.instanceOf(s,URL)?Wd(aa(s),(b,y)=>T.isTruthy(y)):s,u=n?r:i?t:void 0,d=ut(o,(b,y)=>{if(!T.hasKey(l,b))return y;const x=l[b];return T.isNumber(x)?String(x):T.isString(x)?b==="hash"&&x?Br({value:x,prefix:"#"}):b==="pathname"?Br({value:x,prefix:"/"}):x:y});T.hasKey(l,"paths")&&l.paths&&(d.pathname=t$(a?o.pathname:"",...l.paths));const f=T.isString(l.search)?r$(Br({value:l.search,prefix:"?"})):Hn(l.search||{}),h=NO(d.searchParams,f,{...u,encoding:Ca.None}),g=RO(h,u);return{...d,searchParams:h,search:g,paths:o$(d),fullPath:_p(d),host:Cf(d),origin:s$(d),href:i$({...d,search:g})}}const LO=Ce({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:IO,hash:"",fullPath:"/",href:"/"});({...LO.default});const _O=0;function a$(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==_O)}const Sf="locationchange",Ui=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const kv=Ui?.pushState;function xv(...e){if(!kv)return;const t=kv.apply(Ui,e);return globalThis.dispatchEvent(new Event(Sf)),t}const $v=Ui?.replaceState;function Dv(...e){if(!$v)return;const t=$v.apply(Ui,e);return globalThis.dispatchEvent(new Event(Sf)),t}function jO(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!Ui)){{if(Ui.pushState===xv)throw new wv("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(Ui.replaceState===Dv)throw new wv("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,Ui.pushState=xv,Ui.replaceState=Dv,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Sf))})}}function yc(e,t){const r=aa(e),n=ss({value:ss({value:r.pathname,prefix:Br({value:t||"",prefix:"/"})}),prefix:"/"}),i=n?n.split("/"):[],o=Object.keys(r.searchParams).length?r.searchParams:void 0,s=r.hash?ss({value:r.hash,prefix:"#"}):void 0;return{paths:i,search:o,hash:s}}class zO{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){bd(t,FO),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new L5({defaultValue:r,equalityCheck:()=>!1}),jO(),this.removeGlobalListener=vg(globalThis,Sf,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new MO("Looping route sanitization detected; aborting window URL change listener.");const n=yc(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(n);T.jsonEquals(n,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:i}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:t$(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(yc(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r={...yc(globalThis.location.href,this.params.basePath),...t},n=this.sanitizeRoute(r),o=this.routeIncludesBasePath(yc(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return BO(globalThis.location.href,{paths:o.paths,search:o.search,hash:o.hash?Br({value:o.hash,prefix:"#"}):""},{searchParamStrategy:Sa.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:i}=aa(n);return this.params.isPaused||!r.force&&T.jsonEquals(aa(globalThis.location.href).fullPath,i)?!1:r.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,r){return a$(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new Lp(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function UO(e){return new zO({basePath:e,sanitizeRoute(t){return{paths:qO(t.paths),hash:void 0,search:void 0}}})}function qO(e){const t=e[0];if(T.isEnumValue(t,Jr)){if(t===Jr.Book)return[Jr.Book,...e.slice(1)];if(t===Jr.Search)return e[1]?[t,e[1]]:[Jr.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return ha.paths}const kd=Af()("element-book-change-route"),w=xi({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1.5px"});function ce({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const l$=ce({name:"Check24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function Av(e){return T.isPrimitive(e)||e instanceof Wi?String(e):e.default}function bi(e,t,r,n){const i=`${r.prefix}-default-fg`,o=`${r.prefix}-default-bg`;if(T.isPrimitive(t)||t instanceof Wi)return t;if("refDefaultBackground"in t)return`var(--${o}, ${Av(r.background)})`;if("refDefaultForeground"in t)return`var(--${i}, ${Av(r.foreground)})`;if("refBackground"in t||"refForeground"in t){const s=T.hasKey(t,"refBackground")?"refBackground":T.hasKey(t,"refForeground")?"refForeground":void 0,a=s&&T.hasKey(t,s)?t[s]:void 0,l=s==="refBackground"?"background":"foreground",u=a&&n[a];if(!u)throw new Error(`Color theme ${s} reference '${a}' does not exist. (Referenced from '${e}'.)`);const d=u[l]||(l==="foreground"?bi(i,r.foreground,r,n):bi(o,r.background,r,n));return`var(--${a}-${l==="foreground"?"fg":"bg"}, ${bi(a,d,r,n)})`}else return t.value}const Ar="theme-default";function u$(e,t){try{if(Ar in t)throw new Error(`Cannot define theme color by name '${Ar}', it is used internally.`);const r=`${e.prefix}-default-fg`,n=`${e.prefix}-default-bg`,i=`${e.prefix}-default-inverse-fg`,o=`${e.prefix}-default-inverse-bg`,s={[r]:bi(r,e.foreground,e,t),[n]:bi(n,e.background,e,t),[i]:bi(i,e.background,e,t),[o]:bi(o,e.foreground,e,t)},a=xi(s),l=ki(t).reduce((m,[b,y])=>{const x=Ev(b),D=y.foreground?bi([b,"foreground"].join(" "),y.foreground,e,t):`var(${a[r].name}, ${a[r].default})`,C=y.background?bi([b,"background"].join(" "),y.background,e,t):`var(${a[n].name}, ${a[n].default})`;return m[x.foreground]=D,m[x.background]=C,m[x.foregroundInverse]=`var(--${x.background}, ${C})`,m[x.backgroundInverse]=`var(--${x.foreground}, ${D})`,m},{}),u=xi(l),d={},f={};ki(t).forEach(([m,b])=>{Nt.isString(m);const y=Ev(m),x=u[y.foreground],D=u[y.background],C=u[y.foregroundInverse],P=u[y.backgroundInverse];Nt.isDefined(x),Nt.isDefined(D),Nt.isDefined(C),Nt.isDefined(P),d[m]={foreground:x,background:D,init:b,name:m},f[m]={foreground:C,background:P,init:b,name:m}});const h={foreground:a[r],background:a[n],init:e,name:Ar},g={...h,foreground:a[i],background:a[o]};return{colors:{[Ar]:h,...d},inverse:{[Ar]:g,...f},init:{colors:t,default:e},prefix:e.prefix}}catch(r){throw globalThis.setTimeout(()=>Xc.error(r)),r}}function Ev(e){return{foreground:[e,"fg"].join("-"),background:[e,"bg"].join("-"),foregroundInverse:[e,"inverse","fg"].join("-"),backgroundInverse:[e,"inverse","bg"].join("-")}}const c=xi({"vira-red-5":"#ffe9e6","vira-red-10":"#ffd9d5","vira-red-20":"#ffc1bc","vira-red-30":"#ffa7a2","vira-red-40":"#ff8886","vira-red-50":"#ff6065","vira-red-60":"#f9163a","vira-red-70":"#d2001d","vira-red-80":"#a60012","vira-red-90":"#760003","vira-orange-5":"#ffebd1","vira-orange-10":"#ffdda3","vira-orange-20":"#ffc66c","vira-orange-30":"#ffac36","vira-orange-40":"#f79300","vira-orange-50":"#e17e00","vira-orange-60":"#c96900","vira-orange-70":"#ab5600","vira-orange-80":"#8b4100","vira-orange-90":"#6a2500","vira-yellow-5":"#f7eeca","vira-yellow-10":"#f6e192","vira-yellow-20":"#f2cd20","vira-yellow-30":"#dfbb00","vira-yellow-40":"#cca800","vira-yellow-50":"#b59500","vira-yellow-60":"#9d8100","vira-yellow-70":"#856b00","vira-yellow-80":"#6a5400","vira-yellow-90":"#4c3b00","vira-green-5":"#d3f8cf","vira-green-10":"#a3f59b","vira-green-20":"#4fed46","vira-green-30":"#36d92e","vira-green-40":"#0dc501","vira-green-50":"#00af00","vira-green-60":"#009800","vira-green-70":"#007f00","vira-green-80":"#006400","vira-green-90":"#004700","vira-teal-5":"#d4f5f3","vira-teal-10":"#a1efeb","vira-teal-20":"#45e5de","vira-teal-30":"#2ad2cc","vira-teal-40":"#04beb8","vira-teal-50":"#00a9a3","vira-teal-60":"#00928d","vira-teal-70":"#007a77","vira-teal-80":"#00615e","vira-teal-90":"#004442","vira-blue-5":"#daf2ff","vira-blue-10":"#bde8ff","vira-blue-20":"#98d8ff","vira-blue-30":"#77c6ff","vira-blue-40":"#4cb2ff","vira-blue-50":"#299cf9","vira-blue-60":"#0086e0","vira-blue-70":"#006ec7","vira-blue-80":"#0054aa","vira-blue-90":"#00358a","vira-purple-5":"#f6eaff","vira-purple-10":"#eddaff","vira-purple-20":"#e6c3ff","vira-purple-30":"#d7adff","vira-purple-40":"#c795ff","vira-purple-50":"#b77aff","vira-purple-60":"#a55aff","vira-purple-70":"#8f3de9","vira-purple-80":"#7514cb","vira-purple-90":"#500095","vira-pink-5":"#ffe7fb","vira-pink-10":"#ffd5fa","vira-pink-20":"#ffbaf4","vira-pink-30":"#ff9ee6","vira-pink-40":"#fa82cc","vira-pink-50":"#e46eb7","vira-pink-60":"#cc59a2","vira-pink-70":"#b2418b","vira-pink-80":"#962471","vira-pink-90":"#6e004f","vira-grey-0":"#f3f6f6","vira-grey-5":"#eceff0","vira-grey-10":"#dce2e6","vira-grey-20":"#c7d2d7","vira-grey-30":"#b6c0c5","vira-grey-40":"#a4adb2","vira-grey-50":"#909a9f","vira-grey-60":"#7c868a","vira-grey-70":"#677074","vira-grey-80":"#50595d","vira-grey-90":"#363f43"});function Jh({originalTheme:e,layerKey:t,themeColor:r,override:n,overrideValues:i}){const o=n?.[t];o&&(i[String(r[t].name)]=String(bi(t,o,e.init.default,e.init.colors)))}function WO(e,t,{defaultOverride:r,colorOverrides:n}){const i={};r&&tt(r).forEach(l=>{Jh({originalTheme:e,layerKey:l,override:r,themeColor:e.colors[Ar],overrideValues:i})});const o={};n&&ki(n).forEach(([l,u])=>{const d=e.colors[l];if(!d)throw new Error(`Override color name '${l}' does not exist in the theme being overridden.`);Jh({originalTheme:e,layerKey:"foreground",override:u,themeColor:d,overrideValues:o}),Jh({originalTheme:e,layerKey:"background",override:u,themeColor:d,overrideValues:o})});const s=ut(e.init.colors,(l,u)=>{const d=n?.[l];return{...u,...d}}),a=u$({...e.init.default,...r},s);return{name:t,overrides:{...i,...o},originalTheme:e,asTheme:a}}const ie=u$({foreground:"black",background:"white",prefix:"vira"},{"vira-red-foreground-small-body":{foreground:c["vira-red-90"]},"vira-red-foreground-body":{foreground:c["vira-red-80"]},"vira-red-foreground-non-body":{foreground:c["vira-red-60"]},"vira-red-foreground-header":{foreground:c["vira-red-50"]},"vira-red-foreground-placeholder":{foreground:c["vira-red-30"]},"vira-red-foreground-decoration":{foreground:c["vira-red-20"]},"vira-red-foreground-invisible":{foreground:c["vira-red-10"]},"vira-red-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-90"]},"vira-red-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-80"]},"vira-red-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-red-60"]},"vira-red-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-red-40"]},"vira-red-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-red-30"]},"vira-red-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-red-20"]},"vira-red-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-red-5"]},"vira-red-behind-fg-small-body":{background:c["vira-red-5"]},"vira-red-behind-fg-body":{background:c["vira-red-20"]},"vira-red-behind-fg-non-body":{background:c["vira-red-30"]},"vira-red-behind-fg-header":{background:c["vira-red-50"]},"vira-red-behind-fg-placeholder":{background:c["vira-red-60"]},"vira-red-behind-fg-decoration":{background:c["vira-red-80"]},"vira-red-behind-fg-invisible":{background:c["vira-red-90"]},"vira-red-on-self-body":{foreground:c["vira-red-90"],background:c["vira-red-10"]},"vira-red-on-self-non-body":{foreground:c["vira-red-90"],background:c["vira-red-20"]},"vira-red-on-self-header":{foreground:c["vira-red-90"],background:c["vira-red-40"]},"vira-red-on-self-placeholder":{foreground:c["vira-red-90"],background:c["vira-red-50"]},"vira-red-on-self-decoration":{foreground:c["vira-red-90"],background:c["vira-red-70"]},"vira-red-on-self-invisible":{foreground:c["vira-red-90"],background:c["vira-red-80"]},"vira-orange-foreground-small-body":{foreground:c["vira-orange-90"]},"vira-orange-foreground-body":{foreground:c["vira-orange-80"]},"vira-orange-foreground-non-body":{foreground:c["vira-orange-60"]},"vira-orange-foreground-header":{foreground:c["vira-orange-50"]},"vira-orange-foreground-placeholder":{foreground:c["vira-orange-40"]},"vira-orange-foreground-decoration":{foreground:c["vira-orange-20"]},"vira-orange-foreground-invisible":{foreground:c["vira-orange-10"]},"vira-orange-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-orange-90"]},"vira-orange-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-orange-80"]},"vira-orange-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-orange-60"]},"vira-orange-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-orange-40"]},"vira-orange-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-orange-30"]},"vira-orange-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-orange-20"]},"vira-orange-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-orange-5"]},"vira-orange-behind-fg-small-body":{background:c["vira-orange-5"]},"vira-orange-behind-fg-body":{background:c["vira-orange-20"]},"vira-orange-behind-fg-non-body":{background:c["vira-orange-30"]},"vira-orange-behind-fg-header":{background:c["vira-orange-50"]},"vira-orange-behind-fg-placeholder":{background:c["vira-orange-60"]},"vira-orange-behind-fg-decoration":{background:c["vira-orange-80"]},"vira-orange-behind-fg-invisible":{background:c["vira-orange-90"]},"vira-orange-on-self-body":{foreground:c["vira-orange-90"],background:c["vira-orange-10"]},"vira-orange-on-self-non-body":{foreground:c["vira-orange-90"],background:c["vira-orange-20"]},"vira-orange-on-self-header":{foreground:c["vira-orange-90"],background:c["vira-orange-40"]},"vira-orange-on-self-placeholder":{foreground:c["vira-orange-90"],background:c["vira-orange-50"]},"vira-orange-on-self-decoration":{foreground:c["vira-orange-90"],background:c["vira-orange-70"]},"vira-orange-on-self-invisible":{foreground:c["vira-orange-90"],background:c["vira-orange-80"]},"vira-yellow-foreground-small-body":{foreground:c["vira-yellow-90"]},"vira-yellow-foreground-body":{foreground:c["vira-yellow-80"]},"vira-yellow-foreground-non-body":{foreground:c["vira-yellow-60"]},"vira-yellow-foreground-header":{foreground:c["vira-yellow-50"]},"vira-yellow-foreground-placeholder":{foreground:c["vira-yellow-40"]},"vira-yellow-foreground-decoration":{foreground:c["vira-yellow-20"]},"vira-yellow-foreground-invisible":{foreground:c["vira-yellow-5"]},"vira-yellow-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-90"]},"vira-yellow-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-70"]},"vira-yellow-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-60"]},"vira-yellow-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-40"]},"vira-yellow-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-30"]},"vira-yellow-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-20"]},"vira-yellow-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-yellow-5"]},"vira-yellow-behind-fg-small-body":{background:c["vira-yellow-5"]},"vira-yellow-behind-fg-body":{background:c["vira-yellow-20"]},"vira-yellow-behind-fg-non-body":{background:c["vira-yellow-30"]},"vira-yellow-behind-fg-header":{background:c["vira-yellow-50"]},"vira-yellow-behind-fg-placeholder":{background:c["vira-yellow-60"]},"vira-yellow-behind-fg-decoration":{background:c["vira-yellow-80"]},"vira-yellow-behind-fg-invisible":{background:c["vira-yellow-90"]},"vira-yellow-on-self-body":{foreground:c["vira-yellow-90"],background:c["vira-yellow-10"]},"vira-yellow-on-self-non-body":{foreground:c["vira-yellow-90"],background:c["vira-yellow-20"]},"vira-yellow-on-self-header":{foreground:c["vira-yellow-90"],background:c["vira-yellow-40"]},"vira-yellow-on-self-placeholder":{foreground:c["vira-yellow-90"],background:c["vira-yellow-50"]},"vira-yellow-on-self-decoration":{foreground:c["vira-yellow-90"],background:c["vira-yellow-70"]},"vira-yellow-on-self-invisible":{foreground:c["vira-yellow-90"],background:c["vira-yellow-80"]},"vira-green-foreground-small-body":{foreground:c["vira-green-90"]},"vira-green-foreground-body":{foreground:c["vira-green-80"]},"vira-green-foreground-non-body":{foreground:c["vira-green-60"]},"vira-green-foreground-header":{foreground:c["vira-green-50"]},"vira-green-foreground-placeholder":{foreground:c["vira-green-30"]},"vira-green-foreground-decoration":{foreground:c["vira-green-20"]},"vira-green-foreground-invisible":{foreground:c["vira-green-5"]},"vira-green-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-90"]},"vira-green-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-70"]},"vira-green-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-green-60"]},"vira-green-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-green-40"]},"vira-green-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-green-30"]},"vira-green-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-green-20"]},"vira-green-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-green-5"]},"vira-green-behind-fg-small-body":{background:c["vira-green-5"]},"vira-green-behind-fg-body":{background:c["vira-green-20"]},"vira-green-behind-fg-non-body":{background:c["vira-green-30"]},"vira-green-behind-fg-header":{background:c["vira-green-50"]},"vira-green-behind-fg-placeholder":{background:c["vira-green-60"]},"vira-green-behind-fg-decoration":{background:c["vira-green-80"]},"vira-green-behind-fg-invisible":{background:c["vira-green-90"]},"vira-green-on-self-body":{foreground:c["vira-green-90"],background:c["vira-green-10"]},"vira-green-on-self-non-body":{foreground:c["vira-green-90"],background:c["vira-green-20"]},"vira-green-on-self-header":{foreground:c["vira-green-90"],background:c["vira-green-40"]},"vira-green-on-self-placeholder":{foreground:c["vira-green-90"],background:c["vira-green-50"]},"vira-green-on-self-decoration":{foreground:c["vira-green-90"],background:c["vira-green-70"]},"vira-green-on-self-invisible":{foreground:c["vira-green-90"],background:c["vira-green-80"]},"vira-teal-foreground-small-body":{foreground:c["vira-teal-90"]},"vira-teal-foreground-body":{foreground:c["vira-teal-80"]},"vira-teal-foreground-non-body":{foreground:c["vira-teal-60"]},"vira-teal-foreground-header":{foreground:c["vira-teal-50"]},"vira-teal-foreground-placeholder":{foreground:c["vira-teal-30"]},"vira-teal-foreground-decoration":{foreground:c["vira-teal-20"]},"vira-teal-foreground-invisible":{foreground:c["vira-teal-5"]},"vira-teal-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-90"]},"vira-teal-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-80"]},"vira-teal-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-teal-60"]},"vira-teal-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-teal-40"]},"vira-teal-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-teal-30"]},"vira-teal-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-teal-20"]},"vira-teal-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-teal-5"]},"vira-teal-behind-fg-small-body":{background:c["vira-teal-5"]},"vira-teal-behind-fg-body":{background:c["vira-teal-20"]},"vira-teal-behind-fg-non-body":{background:c["vira-teal-30"]},"vira-teal-behind-fg-header":{background:c["vira-teal-50"]},"vira-teal-behind-fg-placeholder":{background:c["vira-teal-60"]},"vira-teal-behind-fg-decoration":{background:c["vira-teal-80"]},"vira-teal-behind-fg-invisible":{background:c["vira-teal-90"]},"vira-teal-on-self-body":{foreground:c["vira-teal-90"],background:c["vira-teal-10"]},"vira-teal-on-self-non-body":{foreground:c["vira-teal-90"],background:c["vira-teal-20"]},"vira-teal-on-self-header":{foreground:c["vira-teal-90"],background:c["vira-teal-40"]},"vira-teal-on-self-placeholder":{foreground:c["vira-teal-90"],background:c["vira-teal-50"]},"vira-teal-on-self-decoration":{foreground:c["vira-teal-90"],background:c["vira-teal-70"]},"vira-teal-on-self-invisible":{foreground:c["vira-teal-90"],background:c["vira-teal-80"]},"vira-blue-foreground-small-body":{foreground:c["vira-blue-90"]},"vira-blue-foreground-body":{foreground:c["vira-blue-80"]},"vira-blue-foreground-non-body":{foreground:c["vira-blue-70"]},"vira-blue-foreground-header":{foreground:c["vira-blue-50"]},"vira-blue-foreground-placeholder":{foreground:c["vira-blue-30"]},"vira-blue-foreground-decoration":{foreground:c["vira-blue-20"]},"vira-blue-foreground-invisible":{foreground:c["vira-blue-10"]},"vira-blue-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-90"]},"vira-blue-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-80"]},"vira-blue-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-blue-60"]},"vira-blue-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-blue-40"]},"vira-blue-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-blue-30"]},"vira-blue-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-blue-20"]},"vira-blue-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-blue-5"]},"vira-blue-behind-fg-small-body":{background:c["vira-blue-5"]},"vira-blue-behind-fg-body":{background:c["vira-blue-20"]},"vira-blue-behind-fg-non-body":{background:c["vira-blue-30"]},"vira-blue-behind-fg-header":{background:c["vira-blue-50"]},"vira-blue-behind-fg-placeholder":{background:c["vira-blue-60"]},"vira-blue-behind-fg-decoration":{background:c["vira-blue-80"]},"vira-blue-behind-fg-invisible":{background:c["vira-blue-90"]},"vira-blue-on-self-body":{foreground:c["vira-blue-90"],background:c["vira-blue-10"]},"vira-blue-on-self-non-body":{foreground:c["vira-blue-90"],background:c["vira-blue-20"]},"vira-blue-on-self-header":{foreground:c["vira-blue-90"],background:c["vira-blue-40"]},"vira-blue-on-self-placeholder":{foreground:c["vira-blue-90"],background:c["vira-blue-50"]},"vira-blue-on-self-decoration":{foreground:c["vira-blue-90"],background:c["vira-blue-70"]},"vira-blue-on-self-invisible":{foreground:c["vira-blue-90"],background:c["vira-blue-80"]},"vira-purple-foreground-small-body":{foreground:c["vira-purple-90"]},"vira-purple-foreground-body":{foreground:c["vira-purple-80"]},"vira-purple-foreground-non-body":{foreground:c["vira-purple-60"]},"vira-purple-foreground-header":{foreground:c["vira-purple-50"]},"vira-purple-foreground-placeholder":{foreground:c["vira-purple-30"]},"vira-purple-foreground-decoration":{foreground:c["vira-purple-20"]},"vira-purple-foreground-invisible":{foreground:c["vira-purple-5"]},"vira-purple-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-90"]},"vira-purple-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-80"]},"vira-purple-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-purple-60"]},"vira-purple-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-purple-40"]},"vira-purple-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-purple-30"]},"vira-purple-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-purple-20"]},"vira-purple-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-purple-5"]},"vira-purple-behind-fg-small-body":{background:c["vira-purple-5"]},"vira-purple-behind-fg-body":{background:c["vira-purple-20"]},"vira-purple-behind-fg-non-body":{background:c["vira-purple-30"]},"vira-purple-behind-fg-header":{background:c["vira-purple-50"]},"vira-purple-behind-fg-placeholder":{background:c["vira-purple-60"]},"vira-purple-behind-fg-decoration":{background:c["vira-purple-80"]},"vira-purple-behind-fg-invisible":{background:c["vira-purple-90"]},"vira-purple-on-self-body":{foreground:c["vira-purple-90"],background:c["vira-purple-10"]},"vira-purple-on-self-non-body":{foreground:c["vira-purple-90"],background:c["vira-purple-20"]},"vira-purple-on-self-header":{foreground:c["vira-purple-90"],background:c["vira-purple-40"]},"vira-purple-on-self-placeholder":{foreground:c["vira-purple-90"],background:c["vira-purple-50"]},"vira-purple-on-self-decoration":{foreground:c["vira-purple-90"],background:c["vira-purple-70"]},"vira-purple-on-self-invisible":{foreground:c["vira-purple-90"],background:c["vira-purple-80"]},"vira-pink-foreground-small-body":{foreground:c["vira-pink-90"]},"vira-pink-foreground-body":{foreground:c["vira-pink-80"]},"vira-pink-foreground-non-body":{foreground:c["vira-pink-60"]},"vira-pink-foreground-header":{foreground:c["vira-pink-50"]},"vira-pink-foreground-placeholder":{foreground:c["vira-pink-40"]},"vira-pink-foreground-decoration":{foreground:c["vira-pink-20"]},"vira-pink-foreground-invisible":{foreground:c["vira-pink-10"]},"vira-pink-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-90"]},"vira-pink-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-80"]},"vira-pink-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-pink-60"]},"vira-pink-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-pink-40"]},"vira-pink-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-pink-30"]},"vira-pink-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-pink-20"]},"vira-pink-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-pink-5"]},"vira-pink-behind-fg-small-body":{background:c["vira-pink-5"]},"vira-pink-behind-fg-body":{background:c["vira-pink-20"]},"vira-pink-behind-fg-non-body":{background:c["vira-pink-30"]},"vira-pink-behind-fg-header":{background:c["vira-pink-50"]},"vira-pink-behind-fg-placeholder":{background:c["vira-pink-60"]},"vira-pink-behind-fg-decoration":{background:c["vira-pink-80"]},"vira-pink-behind-fg-invisible":{background:c["vira-pink-90"]},"vira-pink-on-self-body":{foreground:c["vira-pink-90"],background:c["vira-pink-10"]},"vira-pink-on-self-non-body":{foreground:c["vira-pink-90"],background:c["vira-pink-20"]},"vira-pink-on-self-header":{foreground:c["vira-pink-90"],background:c["vira-pink-40"]},"vira-pink-on-self-placeholder":{foreground:c["vira-pink-90"],background:c["vira-pink-50"]},"vira-pink-on-self-decoration":{foreground:c["vira-pink-90"],background:c["vira-pink-70"]},"vira-pink-on-self-invisible":{foreground:c["vira-pink-90"],background:c["vira-pink-80"]},"vira-grey-foreground-small-body":{foreground:c["vira-grey-90"]},"vira-grey-foreground-body":{foreground:c["vira-grey-80"]},"vira-grey-foreground-non-body":{foreground:c["vira-grey-60"]},"vira-grey-foreground-header":{foreground:c["vira-grey-50"]},"vira-grey-foreground-placeholder":{foreground:c["vira-grey-30"]},"vira-grey-foreground-decoration":{foreground:c["vira-grey-20"]},"vira-grey-foreground-invisible":{foreground:c["vira-grey-5"]},"vira-grey-behind-bg-small-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-90"]},"vira-grey-behind-bg-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-80"]},"vira-grey-behind-bg-non-body":{foreground:{refDefaultBackground:!0},background:c["vira-grey-60"]},"vira-grey-behind-bg-header":{foreground:{refDefaultBackground:!0},background:c["vira-grey-40"]},"vira-grey-behind-bg-placeholder":{foreground:{refDefaultBackground:!0},background:c["vira-grey-30"]},"vira-grey-behind-bg-decoration":{foreground:{refDefaultBackground:!0},background:c["vira-grey-20"]},"vira-grey-behind-bg-invisible":{foreground:{refDefaultBackground:!0},background:c["vira-grey-5"]},"vira-grey-behind-fg-small-body":{background:c["vira-grey-5"]},"vira-grey-behind-fg-body":{background:c["vira-grey-20"]},"vira-grey-behind-fg-non-body":{background:c["vira-grey-30"]},"vira-grey-behind-fg-header":{background:c["vira-grey-50"]},"vira-grey-behind-fg-placeholder":{background:c["vira-grey-60"]},"vira-grey-behind-fg-decoration":{background:c["vira-grey-80"]},"vira-grey-behind-fg-invisible":{background:c["vira-grey-90"]},"vira-grey-on-self-body":{foreground:c["vira-grey-90"],background:c["vira-grey-10"]},"vira-grey-on-self-non-body":{foreground:c["vira-grey-90"],background:c["vira-grey-20"]},"vira-grey-on-self-header":{foreground:c["vira-grey-90"],background:c["vira-grey-40"]},"vira-grey-on-self-placeholder":{foreground:c["vira-grey-90"],background:c["vira-grey-50"]},"vira-grey-on-self-decoration":{foreground:c["vira-grey-90"],background:c["vira-grey-70"]},"vira-grey-on-self-invisible":{foreground:c["vira-grey-90"],background:c["vira-grey-80"]}});WO(ie,"dark",{defaultOverride:{foreground:"white",background:"black"},colorOverrides:{"vira-red-foreground-small-body":{foreground:c["vira-red-5"]},"vira-red-foreground-body":{foreground:c["vira-red-20"]},"vira-red-foreground-non-body":{foreground:c["vira-red-30"]},"vira-red-foreground-placeholder":{foreground:c["vira-red-60"]},"vira-red-foreground-decoration":{foreground:c["vira-red-80"]},"vira-red-foreground-invisible":{foreground:c["vira-red-90"]},"vira-red-behind-bg-small-body":{background:c["vira-red-5"]},"vira-red-behind-bg-body":{background:c["vira-red-20"]},"vira-red-behind-bg-non-body":{background:c["vira-red-30"]},"vira-red-behind-bg-header":{background:c["vira-red-50"]},"vira-red-behind-bg-placeholder":{background:c["vira-red-60"]},"vira-red-behind-bg-decoration":{background:c["vira-red-80"]},"vira-red-behind-bg-invisible":{background:c["vira-red-90"]},"vira-red-behind-fg-small-body":{background:c["vira-red-90"]},"vira-red-behind-fg-body":{background:c["vira-red-80"]},"vira-red-behind-fg-non-body":{background:c["vira-red-60"]},"vira-red-behind-fg-header":{background:c["vira-red-40"]},"vira-red-behind-fg-placeholder":{background:c["vira-red-30"]},"vira-red-behind-fg-decoration":{background:c["vira-red-20"]},"vira-red-behind-fg-invisible":{background:c["vira-red-5"]},"vira-red-on-self-body":{foreground:c["vira-red-5"],background:c["vira-red-90"]},"vira-red-on-self-non-body":{foreground:c["vira-red-5"],background:c["vira-red-70"]},"vira-red-on-self-header":{foreground:c["vira-red-5"],background:c["vira-red-60"]},"vira-red-on-self-placeholder":{foreground:c["vira-red-5"],background:c["vira-red-40"]},"vira-red-on-self-decoration":{foreground:c["vira-red-5"],background:c["vira-red-30"]},"vira-red-on-self-invisible":{foreground:c["vira-red-5"],background:c["vira-red-10"]},"vira-orange-foreground-small-body":{foreground:c["vira-orange-5"]},"vira-orange-foreground-body":{foreground:c["vira-orange-20"]},"vira-orange-foreground-non-body":{foreground:c["vira-orange-30"]},"vira-orange-foreground-placeholder":{foreground:c["vira-orange-60"]},"vira-orange-foreground-decoration":{foreground:c["vira-orange-80"]},"vira-orange-foreground-invisible":{foreground:c["vira-orange-90"]},"vira-orange-behind-bg-small-body":{background:c["vira-orange-5"]},"vira-orange-behind-bg-body":{background:c["vira-orange-20"]},"vira-orange-behind-bg-non-body":{background:c["vira-orange-30"]},"vira-orange-behind-bg-header":{background:c["vira-orange-50"]},"vira-orange-behind-bg-placeholder":{background:c["vira-orange-60"]},"vira-orange-behind-bg-decoration":{background:c["vira-orange-80"]},"vira-orange-behind-bg-invisible":{background:c["vira-orange-90"]},"vira-orange-behind-fg-small-body":{background:c["vira-orange-90"]},"vira-orange-behind-fg-body":{background:c["vira-orange-80"]},"vira-orange-behind-fg-non-body":{background:c["vira-orange-60"]},"vira-orange-behind-fg-header":{background:c["vira-orange-40"]},"vira-orange-behind-fg-placeholder":{background:c["vira-orange-30"]},"vira-orange-behind-fg-decoration":{background:c["vira-orange-20"]},"vira-orange-behind-fg-invisible":{background:c["vira-orange-5"]},"vira-orange-on-self-body":{foreground:c["vira-orange-5"],background:c["vira-orange-90"]},"vira-orange-on-self-non-body":{foreground:c["vira-orange-5"],background:c["vira-orange-70"]},"vira-orange-on-self-header":{foreground:c["vira-orange-5"],background:c["vira-orange-60"]},"vira-orange-on-self-placeholder":{foreground:c["vira-orange-5"],background:c["vira-orange-40"]},"vira-orange-on-self-decoration":{foreground:c["vira-orange-5"],background:c["vira-orange-30"]},"vira-orange-on-self-invisible":{foreground:c["vira-orange-5"],background:c["vira-orange-10"]},"vira-yellow-foreground-small-body":{foreground:c["vira-yellow-5"]},"vira-yellow-foreground-body":{foreground:c["vira-yellow-20"]},"vira-yellow-foreground-non-body":{foreground:c["vira-yellow-30"]},"vira-yellow-foreground-placeholder":{foreground:c["vira-yellow-60"]},"vira-yellow-foreground-decoration":{foreground:c["vira-yellow-80"]},"vira-yellow-foreground-invisible":{foreground:c["vira-yellow-90"]},"vira-yellow-behind-bg-small-body":{background:c["vira-yellow-5"]},"vira-yellow-behind-bg-body":{background:c["vira-yellow-20"]},"vira-yellow-behind-bg-non-body":{background:c["vira-yellow-30"]},"vira-yellow-behind-bg-header":{background:c["vira-yellow-50"]},"vira-yellow-behind-bg-placeholder":{background:c["vira-yellow-60"]},"vira-yellow-behind-bg-decoration":{background:c["vira-yellow-80"]},"vira-yellow-behind-bg-invisible":{background:c["vira-yellow-90"]},"vira-yellow-behind-fg-small-body":{background:c["vira-yellow-90"]},"vira-yellow-behind-fg-body":{background:c["vira-yellow-70"]},"vira-yellow-behind-fg-non-body":{background:c["vira-yellow-60"]},"vira-yellow-behind-fg-header":{background:c["vira-yellow-40"]},"vira-yellow-behind-fg-placeholder":{background:c["vira-yellow-30"]},"vira-yellow-behind-fg-decoration":{background:c["vira-yellow-20"]},"vira-yellow-behind-fg-invisible":{background:c["vira-yellow-5"]},"vira-yellow-on-self-body":{foreground:c["vira-yellow-5"],background:c["vira-yellow-90"]},"vira-yellow-on-self-non-body":{foreground:c["vira-yellow-5"],background:c["vira-yellow-70"]},"vira-yellow-on-self-header":{foreground:c["vira-yellow-5"],background:c["vira-yellow-60"]},"vira-yellow-on-self-placeholder":{foreground:c["vira-yellow-5"],background:c["vira-yellow-40"]},"vira-yellow-on-self-decoration":{foreground:c["vira-yellow-5"],background:c["vira-yellow-30"]},"vira-yellow-on-self-invisible":{foreground:c["vira-yellow-5"],background:c["vira-yellow-10"]},"vira-green-foreground-small-body":{foreground:c["vira-green-5"]},"vira-green-foreground-body":{foreground:c["vira-green-20"]},"vira-green-foreground-non-body":{foreground:c["vira-green-30"]},"vira-green-foreground-placeholder":{foreground:c["vira-green-60"]},"vira-green-foreground-decoration":{foreground:c["vira-green-80"]},"vira-green-foreground-invisible":{foreground:c["vira-green-90"]},"vira-green-behind-bg-small-body":{background:c["vira-green-5"]},"vira-green-behind-bg-body":{background:c["vira-green-20"]},"vira-green-behind-bg-non-body":{background:c["vira-green-30"]},"vira-green-behind-bg-header":{background:c["vira-green-50"]},"vira-green-behind-bg-placeholder":{background:c["vira-green-60"]},"vira-green-behind-bg-decoration":{background:c["vira-green-80"]},"vira-green-behind-bg-invisible":{background:c["vira-green-90"]},"vira-green-behind-fg-small-body":{background:c["vira-green-90"]},"vira-green-behind-fg-body":{background:c["vira-green-70"]},"vira-green-behind-fg-non-body":{background:c["vira-green-60"]},"vira-green-behind-fg-header":{background:c["vira-green-40"]},"vira-green-behind-fg-placeholder":{background:c["vira-green-30"]},"vira-green-behind-fg-decoration":{background:c["vira-green-20"]},"vira-green-behind-fg-invisible":{background:c["vira-green-5"]},"vira-green-on-self-body":{foreground:c["vira-green-5"],background:c["vira-green-90"]},"vira-green-on-self-non-body":{foreground:c["vira-green-5"],background:c["vira-green-70"]},"vira-green-on-self-header":{foreground:c["vira-green-5"],background:c["vira-green-60"]},"vira-green-on-self-placeholder":{foreground:c["vira-green-5"],background:c["vira-green-40"]},"vira-green-on-self-decoration":{foreground:c["vira-green-5"],background:c["vira-green-30"]},"vira-green-on-self-invisible":{foreground:c["vira-green-5"],background:c["vira-green-10"]},"vira-teal-foreground-small-body":{foreground:c["vira-teal-5"]},"vira-teal-foreground-body":{foreground:c["vira-teal-20"]},"vira-teal-foreground-non-body":{foreground:c["vira-teal-30"]},"vira-teal-foreground-placeholder":{foreground:c["vira-teal-60"]},"vira-teal-foreground-decoration":{foreground:c["vira-teal-80"]},"vira-teal-foreground-invisible":{foreground:c["vira-teal-90"]},"vira-teal-behind-bg-small-body":{background:c["vira-teal-5"]},"vira-teal-behind-bg-body":{background:c["vira-teal-20"]},"vira-teal-behind-bg-non-body":{background:c["vira-teal-30"]},"vira-teal-behind-bg-header":{background:c["vira-teal-50"]},"vira-teal-behind-bg-placeholder":{background:c["vira-teal-60"]},"vira-teal-behind-bg-decoration":{background:c["vira-teal-80"]},"vira-teal-behind-bg-invisible":{background:c["vira-teal-90"]},"vira-teal-behind-fg-small-body":{background:c["vira-teal-90"]},"vira-teal-behind-fg-body":{background:c["vira-teal-80"]},"vira-teal-behind-fg-non-body":{background:c["vira-teal-60"]},"vira-teal-behind-fg-header":{background:c["vira-teal-40"]},"vira-teal-behind-fg-placeholder":{background:c["vira-teal-30"]},"vira-teal-behind-fg-decoration":{background:c["vira-teal-20"]},"vira-teal-behind-fg-invisible":{background:c["vira-teal-5"]},"vira-teal-on-self-body":{foreground:c["vira-teal-5"],background:c["vira-teal-90"]},"vira-teal-on-self-non-body":{foreground:c["vira-teal-5"],background:c["vira-teal-70"]},"vira-teal-on-self-header":{foreground:c["vira-teal-5"],background:c["vira-teal-60"]},"vira-teal-on-self-placeholder":{foreground:c["vira-teal-5"],background:c["vira-teal-40"]},"vira-teal-on-self-decoration":{foreground:c["vira-teal-5"],background:c["vira-teal-30"]},"vira-teal-on-self-invisible":{foreground:c["vira-teal-5"],background:c["vira-teal-10"]},"vira-blue-foreground-small-body":{foreground:c["vira-blue-5"]},"vira-blue-foreground-body":{foreground:c["vira-blue-20"]},"vira-blue-foreground-non-body":{foreground:c["vira-blue-30"]},"vira-blue-foreground-placeholder":{foreground:c["vira-blue-60"]},"vira-blue-foreground-decoration":{foreground:c["vira-blue-80"]},"vira-blue-foreground-invisible":{foreground:c["vira-blue-90"]},"vira-blue-behind-bg-small-body":{background:c["vira-blue-5"]},"vira-blue-behind-bg-body":{background:c["vira-blue-20"]},"vira-blue-behind-bg-non-body":{background:c["vira-blue-30"]},"vira-blue-behind-bg-header":{background:c["vira-blue-50"]},"vira-blue-behind-bg-placeholder":{background:c["vira-blue-60"]},"vira-blue-behind-bg-decoration":{background:c["vira-blue-80"]},"vira-blue-behind-bg-invisible":{background:c["vira-blue-90"]},"vira-blue-behind-fg-small-body":{background:c["vira-blue-90"]},"vira-blue-behind-fg-body":{background:c["vira-blue-80"]},"vira-blue-behind-fg-non-body":{background:c["vira-blue-60"]},"vira-blue-behind-fg-header":{background:c["vira-blue-40"]},"vira-blue-behind-fg-placeholder":{background:c["vira-blue-30"]},"vira-blue-behind-fg-decoration":{background:c["vira-blue-20"]},"vira-blue-behind-fg-invisible":{background:c["vira-blue-5"]},"vira-blue-on-self-body":{foreground:c["vira-blue-5"],background:c["vira-blue-90"]},"vira-blue-on-self-non-body":{foreground:c["vira-blue-5"],background:c["vira-blue-70"]},"vira-blue-on-self-header":{foreground:c["vira-blue-5"],background:c["vira-blue-60"]},"vira-blue-on-self-placeholder":{foreground:c["vira-blue-5"],background:c["vira-blue-40"]},"vira-blue-on-self-decoration":{foreground:c["vira-blue-5"],background:c["vira-blue-30"]},"vira-blue-on-self-invisible":{foreground:c["vira-blue-5"],background:c["vira-blue-10"]},"vira-purple-foreground-small-body":{foreground:c["vira-purple-5"]},"vira-purple-foreground-body":{foreground:c["vira-purple-20"]},"vira-purple-foreground-non-body":{foreground:c["vira-purple-30"]},"vira-purple-foreground-placeholder":{foreground:c["vira-purple-60"]},"vira-purple-foreground-decoration":{foreground:c["vira-purple-80"]},"vira-purple-foreground-invisible":{foreground:c["vira-purple-90"]},"vira-purple-behind-bg-small-body":{background:c["vira-purple-5"]},"vira-purple-behind-bg-body":{background:c["vira-purple-20"]},"vira-purple-behind-bg-non-body":{background:c["vira-purple-30"]},"vira-purple-behind-bg-header":{background:c["vira-purple-50"]},"vira-purple-behind-bg-placeholder":{background:c["vira-purple-60"]},"vira-purple-behind-bg-decoration":{background:c["vira-purple-80"]},"vira-purple-behind-bg-invisible":{background:c["vira-purple-90"]},"vira-purple-behind-fg-small-body":{background:c["vira-purple-90"]},"vira-purple-behind-fg-body":{background:c["vira-purple-80"]},"vira-purple-behind-fg-non-body":{background:c["vira-purple-60"]},"vira-purple-behind-fg-header":{background:c["vira-purple-40"]},"vira-purple-behind-fg-placeholder":{background:c["vira-purple-30"]},"vira-purple-behind-fg-decoration":{background:c["vira-purple-20"]},"vira-purple-behind-fg-invisible":{background:c["vira-purple-5"]},"vira-purple-on-self-body":{foreground:c["vira-purple-5"],background:c["vira-purple-90"]},"vira-purple-on-self-non-body":{foreground:c["vira-purple-5"],background:c["vira-purple-70"]},"vira-purple-on-self-header":{foreground:c["vira-purple-5"],background:c["vira-purple-60"]},"vira-purple-on-self-placeholder":{foreground:c["vira-purple-5"],background:c["vira-purple-40"]},"vira-purple-on-self-decoration":{foreground:c["vira-purple-5"],background:c["vira-purple-30"]},"vira-purple-on-self-invisible":{foreground:c["vira-purple-5"],background:c["vira-purple-10"]},"vira-pink-foreground-small-body":{foreground:c["vira-pink-5"]},"vira-pink-foreground-body":{foreground:c["vira-pink-20"]},"vira-pink-foreground-non-body":{foreground:c["vira-pink-30"]},"vira-pink-foreground-placeholder":{foreground:c["vira-pink-60"]},"vira-pink-foreground-decoration":{foreground:c["vira-pink-80"]},"vira-pink-foreground-invisible":{foreground:c["vira-pink-90"]},"vira-pink-behind-bg-small-body":{background:c["vira-pink-5"]},"vira-pink-behind-bg-body":{background:c["vira-pink-20"]},"vira-pink-behind-bg-non-body":{background:c["vira-pink-30"]},"vira-pink-behind-bg-header":{background:c["vira-pink-50"]},"vira-pink-behind-bg-placeholder":{background:c["vira-pink-60"]},"vira-pink-behind-bg-decoration":{background:c["vira-pink-80"]},"vira-pink-behind-bg-invisible":{background:c["vira-pink-90"]},"vira-pink-behind-fg-small-body":{background:c["vira-pink-90"]},"vira-pink-behind-fg-body":{background:c["vira-pink-80"]},"vira-pink-behind-fg-non-body":{background:c["vira-pink-60"]},"vira-pink-behind-fg-header":{background:c["vira-pink-40"]},"vira-pink-behind-fg-placeholder":{background:c["vira-pink-30"]},"vira-pink-behind-fg-decoration":{background:c["vira-pink-20"]},"vira-pink-behind-fg-invisible":{background:c["vira-pink-5"]},"vira-pink-on-self-body":{foreground:c["vira-pink-5"],background:c["vira-pink-90"]},"vira-pink-on-self-non-body":{foreground:c["vira-pink-5"],background:c["vira-pink-70"]},"vira-pink-on-self-header":{foreground:c["vira-pink-5"],background:c["vira-pink-60"]},"vira-pink-on-self-placeholder":{foreground:c["vira-pink-5"],background:c["vira-pink-40"]},"vira-pink-on-self-decoration":{foreground:c["vira-pink-5"],background:c["vira-pink-30"]},"vira-pink-on-self-invisible":{foreground:c["vira-pink-5"],background:c["vira-pink-10"]},"vira-grey-foreground-small-body":{foreground:c["vira-grey-5"]},"vira-grey-foreground-body":{foreground:c["vira-grey-20"]},"vira-grey-foreground-non-body":{foreground:c["vira-grey-30"]},"vira-grey-foreground-placeholder":{foreground:c["vira-grey-60"]},"vira-grey-foreground-decoration":{foreground:c["vira-grey-80"]},"vira-grey-foreground-invisible":{foreground:c["vira-grey-90"]},"vira-grey-behind-bg-small-body":{background:c["vira-grey-5"]},"vira-grey-behind-bg-body":{background:c["vira-grey-20"]},"vira-grey-behind-bg-non-body":{background:c["vira-grey-30"]},"vira-grey-behind-bg-header":{background:c["vira-grey-50"]},"vira-grey-behind-bg-placeholder":{background:c["vira-grey-60"]},"vira-grey-behind-bg-decoration":{background:c["vira-grey-80"]},"vira-grey-behind-bg-invisible":{background:c["vira-grey-90"]},"vira-grey-behind-fg-small-body":{background:c["vira-grey-90"]},"vira-grey-behind-fg-body":{background:c["vira-grey-80"]},"vira-grey-behind-fg-non-body":{background:c["vira-grey-60"]},"vira-grey-behind-fg-header":{background:c["vira-grey-40"]},"vira-grey-behind-fg-placeholder":{background:c["vira-grey-30"]},"vira-grey-behind-fg-decoration":{background:c["vira-grey-20"]},"vira-grey-behind-fg-invisible":{background:c["vira-grey-5"]},"vira-grey-on-self-body":{foreground:c["vira-grey-5"],background:c["vira-grey-90"]},"vira-grey-on-self-non-body":{foreground:c["vira-grey-5"],background:c["vira-grey-70"]},"vira-grey-on-self-header":{foreground:c["vira-grey-5"],background:c["vira-grey-60"]},"vira-grey-on-self-placeholder":{foreground:c["vira-grey-5"],background:c["vira-grey-40"]},"vira-grey-on-self-decoration":{foreground:c["vira-grey-5"],background:c["vira-grey-30"]},"vira-grey-on-self-invisible":{foreground:c["vira-grey-5"],background:c["vira-grey-10"]}}});const Cv="8px",K=xi({"vira-form-border-color":ie.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-placeholder-color":ie.colors["vira-grey-foreground-placeholder"].foreground.value,"vira-form-background-color":ie.colors[Ar].background.value,"vira-form-foreground-color":ie.colors[Ar].foreground.value,"vira-form-modal-backdrop-color":"rgba(0, 0, 0, 0.35)","vira-form-secondary-body-foreground":ie.colors["vira-grey-foreground-header"].foreground.value,"vira-form-text-selection-color":ie.colors["vira-blue-behind-bg-decoration"].background.value,"vira-form-selection-hover-color":ie.colors["vira-blue-behind-bg-invisible"].background.value,"vira-form-selection-active-color":ie.colors["vira-blue-behind-bg-decoration"].background.value,"vira-form-error-color":ie.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-error-hover-color":ie.colors["vira-red-behind-bg-header"].background.value,"vira-form-error-active-color":ie.colors["vira-red-behind-bg-body"].background.value,"vira-form-warning-color":ie.colors["vira-orange-behind-bg-non-body"].background.value,"vira-form-warning-hover-color":ie.colors["vira-orange-behind-bg-header"].background.value,"vira-form-warning-active-color":ie.colors["vira-orange-behind-bg-body"].background.value,"vira-form-positive-color":ie.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-positive-hover-color":ie.colors["vira-green-behind-bg-header"].background.value,"vira-form-positive-active-color":ie.colors["vira-green-behind-bg-body"].background.value,"vira-form-success-color":ie.colors["vira-green-behind-bg-non-body"].background.value,"vira-form-label-font-weight":"bold","vira-form-small-text-size":"14px","vira-form-medium-text-size":"16px","vira-form-large-text-size":"22px","vira-form-radius":Cv,"vira-form-wrapper-radius":"16px","vira-form-focus-outline-color":ie.colors["vira-blue-foreground-header"].foreground.value,"vira-form-focus-outline-border-radius":j`calc(var(--vira-form-radius, ${ve(Cv)}) + 2px)`,"vira-form-plain-color":c["vira-grey-0"].value,"vira-form-plain-hover-color":ie.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-plain-active-color":ie.colors["vira-grey-foreground-decoration"].foreground.value,"vira-form-accent-primary-color":ie.colors["vira-blue-behind-bg-non-body"].background.value,"vira-form-accent-primary-hover-color":ie.colors["vira-blue-behind-bg-header"].background.value,"vira-form-accent-primary-active-color":ie.colors["vira-blue-behind-bg-body"].background.value,"vira-form-danger-color":ie.colors["vira-red-behind-bg-non-body"].background.value,"vira-form-danger-hover-color":ie.colors["vira-red-behind-bg-header"].background.value,"vira-form-danger-active-color":ie.colors["vira-red-behind-bg-body"].background.value,"vira-form-filled-background-color":ie.colors["vira-grey-foreground-invisible"].foreground.value,"vira-form-filled-active-background-color":ie.colors["vira-grey-foreground-decoration"].foreground.value}),Ta=j`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,vo=xi({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function qu({elementBorderSize:e,outlineGap:t=2,outlineWidth:r=2,noNesting:n}){const i=ve(ME(r+t+e)),o=j`
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
    `;return n?o:j`
        outline: none;

        &:focus {
            outline: none;
        }

        &:focus:focus-visible:not(:active):not([disabled])::after {
            ${o}
        }
    `}const c$=xi({"vira-monospace":"monospace"}),d$={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Heavy:900};ut(d$,e=>e);Object.fromEntries(Object.entries(d$).map(([e,t])=>[t,e]));var xe;(function(e){e.SmallBodyText="small-body",e.BodyText="body",e.NonBodyText="non-body",e.Header="header",e.Placeholder="placeholder",e.Decoration="decoration",e.Invisible="invisible"})(xe||(xe={}));xe.SmallBodyText+"",xe.BodyText+"",xe.NonBodyText+"",xe.Header+"",xe.Placeholder+"",xe.Decoration+"",xe.Invisible+"";xe.SmallBodyText,xe.BodyText,xe.NonBodyText,xe.Header,xe.Placeholder,xe.Decoration,xe.Invisible;const f$=[{min:90,name:xe.SmallBodyText,description:"Perfect for all sizes of text, even small body text.",apcaName:"small body text only",apcaDescription:"Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color."},{min:75,name:xe.BodyText,description:"Good for regular body text and anything larger.",apcaName:"body text okay",apcaDescription:"The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important."},{min:60,name:xe.NonBodyText,description:"Good for legible non-body text and anything larger.",apcaName:"fluent text only",apcaDescription:"The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast."},{min:45,name:xe.Header,description:"Okay for large or headline text.",apcaName:"large & sub-fluent text",apcaDescription:"The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension."},{min:30,name:xe.Placeholder,description:"Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.",apcaName:"spot & non text only",apcaDescription:'The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.'},{min:15,name:xe.Decoration,description:"Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.",apcaName:"no text usage",apcaDescription:"The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site."},{min:0,name:xe.Invisible,description:"Effectively invisible for users.",apcaName:"invisible",apcaDescription:"This should be treated as invisible."}];xo(f$,e=>({key:e.min,value:e}));xo(f$,e=>({key:e.name,value:e}));const VO=dn(xe).sort((e,t)=>Number(t.includes("-"))-Number(e.includes("-"))),KO=Od(Kt(Object.keys(ie.colors),e=>e.split("-")[1],e=>e!=="default")).filter(T.isTruthy),Zs=xo(KO,e=>({key:e,value:e}),{}),HO=tt(ie.colors),kr=gg(Zs,e=>{const t=Od(Kt(HO,r=>VO.reduce((n,i)=>xk({value:n,suffix:`-${i}`}),ss({value:r,prefix:`vira-${e}-`})),(r,n)=>n.startsWith(`vira-${e}-`)));return xo(t,r=>({key:r,value:xo(dn(xe),n=>{const i=`vira-${e}-${r}-${n}`;if(T.hasKey(ie.colors,i))return{key:n,value:ie.colors[i]}})}))});var re;(function(e){e.Accent="accent",e.Plain="plain",e.Neutral="neutral",e.Danger="danger",e.Warning="warning",e.Positive="positive",e.None="none"})(re||(re={}));const Sv={[re.Accent]:Zs.blue,[re.Neutral]:Zs.grey,[re.Danger]:Zs.red,[re.Warning]:Zs.orange,[re.Positive]:Zs.green};re.Accent,re.Plain,re.Neutral,re.Danger,re.Warning,re.Positive;var Er;(function(e){e.Large="large",e.Medium="medium",e.Small="small",e.None="none"})(Er||(Er={}));Er.Small,Er.Medium,Er.Large;var In;(function(e){e.Standard="standard",e.Subtle="subtle",e.None="none"})(In||(In={}));In.Standard,In.Subtle;const Xh={[Er.Large]:40,[Er.Medium]:32,[Er.Small]:24},el=j`
    padding: 0;
    margin: 0;
`,fn=j`
    ${el};
    background: none;
    border: none;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Qh=xi({"menu-shadow-color":"#e2e2e2","modal-shadow-color":"#4f4f4f"}),GO={menuShadow:j`
        filter: drop-shadow(0px 5px 5px ${Qh["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:j`
        filter: drop-shadow(0px -5px 5px ${Qh["menu-shadow-color"].value});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,modal:j`
        box-shadow: 0 5px 15px ${Qh["modal-shadow-color"].value};
    `},Ma=j`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,Tv="vira-",di=Z5({assertInputs:e=>{if(!e.tagName.startsWith(Tv))throw new Error(`Tag name should start with '${Tv}' but got '${e.tagName}'`)}}),se=di()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>j`
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
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}});function ZO(e,t){return e>t}function YO(e,t){return e<t}function gu(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var wi;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(wi||(wi={}));var Ve;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(Ve||(Ve={}));function Tf(e){const t={x:-1,y:-1};let r;for(;t.y<e.length-1&&!r;){t.y++;const n=e[t.y];for(;n&&t.x<n.length-1&&!r;){t.x++;const i=n[t.x];if(i)if(i.navEntry.navParams.group){const o=Tf(i.children);o&&(r=o.node)}else i.navEntry.navParams.disabled||(r=i)}}if(r)return{node:r,coords:t}}function Mv(e,t,r,n){if(!t){const l=Tf(e.children);return l?(gu(l.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:l.node.element,coords:l.coords,direction:r,navAction:Ve.Navigate}):{success:!1,reason:"no default element to focus",direction:r,navAction:Ve.Navigate}}const{nextNode:i,requiresWrapping:o,coords:s}=h$(t.position,r),a=n?!0:!o;return i&&a?(gu(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:o,direction:r,navAction:Ve.Navigate,coords:s}):i?a?{success:!1,reason:"no conditions matched",direction:r,navAction:Ve.Navigate}:{success:!1,reason:"wrapping blocked",direction:r,navAction:Ve.Navigate}:{success:!1,reason:"failed to find node to focus",direction:r,navAction:Ve.Navigate}}function h$(e,t){let r=!1,n,i=1;const o=Date.now();for(;!r||!n;)if(n=JO(e,t,i),r=!n.nextNode?.navEntry.navParams.disabled,i++,Date.now()-o>1e3)return Xc.warning("Failed to find next non-disabled node."),n;return n}function JO(e,t,r){const n=e.ancestorChain[e.ancestorChain.length-1]?.node;Nt.isDefined(n,"missing parent");const i=Vt.isDefined(n.children[e.nodeCoords.y]),o=n.children.length>1&&(t===wi.Down||t===wi.Up),s=t===wi.Down||t===wi.Right?r:-1*r,a=s<0?ZO:YO,l=o?Oy(e.nodeCoords.y+s,{min:0,max:n.children.length-1,takeOverflow:!0}):e.nodeCoords.y,u=Vt.isDefined(n.children[l]),d=o?e.nodeCoords.x>=u.length?u.length-1:e.nodeCoords.x:Oy(e.nodeCoords.x+s,{min:0,max:i.length-1,takeOverflow:!0}),f=n.children[l]?.[d],h=o?a(l,e.nodeCoords.y):a(d,e.nodeCoords.x);return{nextNode:f,requiresWrapping:h,coords:{x:d,y:l}}}function XO(e,t,r){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:Ve.Pibling};const{nextNode:i,requiresWrapping:o,coords:s}=h$(n,t),a=i?.navEntry.navParams.group?Tf(i.children):{node:i,coords:s},l=r?!0:!o;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:Ve.Pibling}:l?(gu(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:o,coords:a.coords,direction:t,navAction:Ve.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:Ve.Pibling}}var Li;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(Li||(Li={}));const em={name:"data-nav"},m$="navEntry";function QO(e){return m$ in e}function eR(e){if(QO(e)){const t=e[m$];return Vt.instanceOf(t,rR,"Invalid nav entry")}else return}function tR(e){return t=>{e.navParams.group||e.navParams.disabled||e.navController.locked||(t.type==="mousedown"&&!e.navController.options.activateOnMouseUp||t.type==="mouseup"&&e.navController.options.activateOnMouseUp?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==Li.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class rR{element;navParams;navTreeNode;navValue;eventListener=tR(this);constructor(t,r,n){this.element=t,this.navParams=n,this.attachListeners(),this.navController=r}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return Nt.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navParams.group||this.navController.locked||(this.navValue=void 0,this.element.setAttribute(em.name,""),Zh(this.element)&&this.element.blur())}focus(t,r){const n=this.navValue,i=t===(n===Li.Focused);if(!(this.navParams.group||this.navController.locked||i||!t&&this.navController.options.alwaysRequireFocused))return t?(this.setNavValue(Li.Focused),Zh(this.element)||this.element.focus()):(this.removeNavValue(Li.Focused),Zh(this.element)&&this.element.blur()),r||this.navParams.listeners?.focus?.({element:this.element,navEntry:this,enabled:t,previousNavValue:n}),this.navController.triggerNavEntry(this,t,Ve.Focus)}activate(t){const r=this.navValue,n=t===(r===Li.Active);if(!(this.navParams.group||this.navController.locked||n))return this.focus(t,!0),t?this.setNavValue(Li.Active):this.setNavValue(Li.Focused),this.navParams.listeners?.activate?.({element:this.element,navEntry:this,enabled:t,previousNavValue:r}),this.navController.triggerNavEntry(this,t,Ve.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(em.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(em.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function nR(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:Ve.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:Ve.Enter};const r=t.position.node.children[0]?.[0];return r?(gu(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:Ve.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:Ve.Enter}}function iR(e,t){return g$([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function g$(e,t,r){for(let n=0;n<t.length;n++){const i=t[n];for(let o=0;o<i.length;o++){const s=i[o],a={ancestorChain:e,nodeCoords:{x:o,y:n},node:s};if(r(a))return a;const l=g$(e.concat(a),s.children,r);if(l)return l}}}function p$(e,t){const r=iR(e,({node:n})=>!n.root&&n.navEntry===t);if(!r)throw new Error("Failed to find NavEntry in NavTree.");return r}function oR(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:Ve.Exit};const r=t.position.ancestorChain.toReversed().find(i=>!i.node.root&&!i.node.navEntry.navParams.group)?.node;if(!r||r.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:Ve.Exit};const{nodeCoords:n}=p$(e,r.navEntry);return gu(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:Ve.Exit,coords:n}}class sR extends li()("nav-exit"){}class b$ extends li()("nav-activate"){}class aR extends li()("nav-focus"){}class lR extends li()("nav-enter"){}class uR extends li()("nav-navigate"){}class cR extends li()("nav-navigate-pibling"){}function dR(e){return{root:!0,children:y$(e)?.children||[]}}function y$(e){const t=e.element;if(!(t instanceof HTMLElement))return;const r=eR(t),n=fR(e);if((r?.navParams.group?!!n.length:!1)||n.length||r)return{root:!1,element:t,navEntry:r,children:n}}function fR(e){const t=[];function r(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(a=>a.forEach(l=>r(l)));return}const i=n.navEntry.navParams.x,o=n.navEntry.navParams.y||0,s=ja(t,o,()=>({noX:[],withX:[],y:o}));i==null?s.noX.push(n):s.withX.push({x:i,node:n})}return e.children.forEach(n=>{const i=y$(n);i&&r(i)}),t.sort((n,i)=>n.y-i.y).map(n=>(n.withX.sort((i,o)=>i.x-o.x),n.withX.forEach(({x:i,node:o})=>{n.noX.splice(i,0,o)}),n.noX)).filter(T.isTruthy)}class hR extends yg{rootElement;options;constructor(t,r={}){super(),this.rootElement=t,this.options=r}needsUpdate=!1;locked=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){Tf(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,r,n){if(this.locked)return{success:!1,direction:void 0,navAction:n,reason:"NavController is locked."};if(!t)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const i=p$(this.getNavTree(),t);r?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:n,position:i}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0);const o={success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:n,coords:i.nodeCoords};return r&&(n===Ve.Activate?this.dispatch(new b$({detail:o})):n===Ve.Focus&&this.dispatch(new aR({detail:o}))),o}navigate({direction:t,allowWrapping:r}){if(this.locked)return{success:!1,direction:t,navAction:Ve.Navigate,reason:"NavController is locked."};const n=Mv(this.getNavTree(),this.currentNavEntry,t,r);return this.dispatch(new uR({detail:n})),n}enterInto({fallbackToActivate:t}={}){if(this.locked)return{success:!1,direction:void 0,navAction:Ve.Enter,reason:"NavController is locked."};const r=nR(this.getNavTree(),this.currentNavEntry);return!r.success&&t?this.activate():(this.dispatch(new lR({detail:r})),r)}activate(){if(this.locked)return{success:!1,direction:void 0,navAction:Ve.Activate,reason:"NavController is locked."};if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:Ve.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return Nt.isDefined(t,"Cannot activate a group."),t}exitOutOf(){if(this.locked)return{success:!1,direction:void 0,navAction:Ve.Exit,reason:"NavController is locked."};this.currentNavEntry?.navAction===Ve.Activate&&this.currentNavEntry.entry.focus(!0);const t=oR(this.getNavTree(),this.currentNavEntry);return this.dispatch(new sR({detail:t})),t}navigatePibling({allowWrapping:t,direction:r}){if(this.locked)return{success:!1,direction:r,navAction:Ve.Pibling,reason:"NavController is locked."};const n=this.getNavTree(),o={...this.currentNavEntry?XO(this.currentNavEntry,r,t):Mv(n,void 0,r,t),navAction:Ve.Pibling};return this.dispatch(new cR({detail:o})),o}buildNavTree(){const t=kO(this.rootElement),r=dR(t);return this.cachedNavTree=r,r}}function Fv({open:e,callback:t,popUpManager:r,host:n,options:i}){if(e){const o=r.showPopUp(n,i);t?.(o)}else r.removePopUp(),t?.(void 0)}const vc=globalThis.document;class mR extends L5{constructor(){if(super({defaultValue:!!vc?.hidden,equalityCheck:T.strictEquals}),!vc)return;globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r,vc));const t=r=>this.updateVisibility(r,vc);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t,r){const n=pR.includes(t.type),i=gR.includes(t.type),o=n?!0:i?!1:r.hasFocus()||!r.hidden;this.setValue(o)}}const gR=["blur","focusout","pagehide"],pR=["focus","focusin","pageshow"],bR=new mR;function yR(e,t){return bR.listen(e,t)}function M0(e){return e instanceof HTMLInputElement&&(e.type==="text"||e.type==="search"||e.type==="email"||e.type==="url"||e.type==="tel"||e.type==="password"||e.type==="number")||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}const Pv={top:0,left:0,right:0,bottom:0};class v$ extends bg("hide-pop-up"){}class w$ extends li()("nav-select"){}class vR{navController;listenTarget=new yg;options={minDownSpace:200,minRightSpace:400,verticalDiffThreshold:20,horizontalDiffThreshold:100,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;constructor(t,r){this.navController=t,this.options={...this.options,...r}}attachGlobalListeners(){this.cleanupCallbacks=[yR(!1,t=>{t||this.removePopUp()}),this.navController.listen(b$,t=>{const r=t.composedPath()[0];r instanceof Element&&M0(r)||t.detail.success&&(this.listenTarget.dispatch(new w$({detail:t.detail.coords})),this.navController.currentNavEntry?.entry.focus(!0),t.stopImmediatePropagation(),t.preventDefault())}),Ry("mousedown",t=>{this.lastRootElement&&t.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Ry("keydown",t=>{const r=t.code;if(r==="Escape")this.removePopUp();else if(this.options.supportNavigation){const n=t.composedPath()[0];if(n instanceof Element&&M0(n))return;r==="ArrowDown"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:wi.Down,allowWrapping:!1})):r==="ArrowUp"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:wi.Up,allowWrapping:!1})):r==="ArrowLeft"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:wi.Left,allowWrapping:!1})):r==="ArrowRight"?(t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:wi.Right,allowWrapping:!1})):(r==="Enter"||r==="Return"||r==="Space")&&this.navController.enterInto({fallbackToActivate:!0}).success&&(t.stopImmediatePropagation(),t.preventDefault())}})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new v$)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},i=$O(t);Nt.instanceOf(i,HTMLElement);const o=t.getBoundingClientRect(),s=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,l=i.offsetHeight-i.clientHeight,u=i===document.body?{top:0,left:0,right:s.width,bottom:s.height}:{top:s.top,left:s.left,right:s.right-a,bottom:s.bottom-l},d=ut(Pv,m=>o[m]),f=ut(Pv,m=>{const b=u[m],y=d[m];return Math.abs(b-y)}),h=f.top>f.bottom+n.verticalDiffThreshold&&f.bottom<n.minDownSpace,g=f.left>f.right+n.horizontalDiffThreshold&&f.right<n.minRightSpace;return this.attachGlobalListeners(),{popDown:!h,popRight:!g,positions:{container:u,root:d,diff:f}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}var co;(function(e){e.Left="left",e.Right="right",e.Both="both",e.Auto="auto"})(co||(co={}));const wl=di()({tagName:"vira-pop-up-trigger",state({host:e}){return{showPopUpResult:void 0,popUpManager:new vR(new hR(e,{activateOnMouseUp:!0}))}},slotNames:["trigger","popUp"],hostClasses:{"vira-pop-up-trigger-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>j`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${fn};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;

            ${qu({elementBorderSize:1})}
        }

        .dropdown-trigger {
            box-sizing: border-box;
            ${Ma};
        }

        ${e["vira-pop-up-trigger-disabled"].selector} {
            ${Ta}
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
    `,events:{navSelect:nr(),openChange:nr(),init:nr()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:i,events:o}){e.popUpManager.listen(v$,()=>{if(t({showPopUpResult:void 0}),i(new o.openChange(void 0)),!n.isDisabled){const s=r.shadowRoot.querySelector(".dropdown-wrapper");Nt.instanceOf(s,HTMLButtonElement,"failed to find dropdown wrapper child"),s.focus()}}),e.popUpManager.listen(w$,s=>{n.keepOpenAfterInteraction||Fv({open:!1,callback(a){t({showPopUpResult:a})},host:r,popUpManager:e.popUpManager}),i(new o.navSelect(s.detail))}),i(new o.init({navController:e.popUpManager.navController,popUpManager:e.popUpManager}))},render({dispatch:e,events:t,state:r,inputs:n,updateState:i,host:o,slotNames:s}){function a({emitEvent:m,open:b},y){if(r.showPopUpResult&&n.keepOpenAfterInteraction&&y){const x=o.shadowRoot.querySelector(".dropdown-trigger");if(x&&!y.composedPath().includes(x))return}Fv({open:b,callback(x){i({showPopUpResult:x}),m&&e(new t.openChange(x))},host:o,popUpManager:r.popUpManager})}n.isDisabled?a({open:!1,emitEvent:!1},void 0):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?a({emitEvent:!1,open:!1},void 0):n.z_debug_forceOpenState&&!r.showPopUpResult&&a({emitEvent:!1,open:!0},void 0));const l=n.horizontalAnchor===co.Auto||n.horizontalAnchor===void 0?r.showPopUpResult?.popRight?co.Left:co.Right:n.horizontalAnchor,u=l===co.Right&&r.showPopUpResult?n.ignoreMaxWidth?j`
                          left: unset;
                      `:j`
                          left: -${r.showPopUpResult.positions.diff.left}px;
                      `:j`
                      left: ${n.popUpOffset?.left||0}px;
                  `,d=r.showPopUpResult&&l===co.Left?n.ignoreMaxWidth?j`
                          right: unset;
                      `:j`
                          right: -${r.showPopUpResult.positions.diff.right}px;
                      `:j`
                      right: ${n.popUpOffset?.right||0}px;
                  `,f=j`
            ${u}
            ${d}
        `,h=r.showPopUpResult?r.showPopUpResult.popDown?n.ignoreMaxHeight?j`
                          bottom: unset;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${f}
                      `:j`
                          bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                          top: calc(100% + ${n.popUpOffset?.vertical||0}px);
                          ${f}
                      `:n.ignoreMaxHeight?j`
                        top: unset;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${f}
                    `:j`
                        top: -${r.showPopUpResult.positions.diff.top}px;
                        bottom: calc(100% + ${n.popUpOffset?.vertical||0}px);
                        ${f}
                    `:void 0;function g(m){a({emitEvent:!0,open:!r.showPopUpResult},m)}return v`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${bn({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${Ee("keydown",m=>{!r.showPopUpResult&&m.code.startsWith("Arrow")&&a({emitEvent:!0,open:!0},m)})}
                ${Ee("click",m=>{if(m.detail===0){let b=!1;if(DO(({element:y})=>M0(y)?(b=!0,!0):!1),b)return;g(m)}else if(m.button===0&&r.showPopUpResult){const b=o.shadowRoot.querySelector(".dropdown-trigger");b&&!m.composedPath().includes(b)&&a({emitEvent:!0,open:!1},m)}})}
                ${Ee("mousedown",m=>{if(m.button!==0)return;const b=Vt.instanceOf(o.shadowRoot.querySelector(".dropdown-trigger"),HTMLElement);m.composedPath().includes(b)&&g(m)})}
            >
                <div class="dropdown-trigger">
                    <slot name=${s.trigger}></slot>
                </div>

                <div
                    class="pop-up-positioner ${bn({"right-aligned":l===co.Right})}"
                    style=${h}
                >
                    ${Xn(!!r.showPopUpResult,v`
                            <slot name=${s.popUp}></slot>
                        `)}
                </div>
            </button>
        `}});var Oi;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline",e.Danger="vira-button-danger",e.DangerOutline="vira-button-danger-outline",e.Ghost="vira-button-ghost",e.Plain="vira-button-plain"})(Oi||(Oi={}));const wc=di()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Oi.Outline||e.buttonStyle===Oi.DangerOutline,"vira-button-danger-style":({inputs:e})=>e.buttonStyle===Oi.Danger||e.buttonStyle===Oi.DangerOutline,"vira-button-ghost-style":({inputs:e})=>e.buttonStyle===Oi.Ghost,"vira-button-disabled":({inputs:e})=>!!e.disabled,"vira-button-expand-to-fit-icon":({inputs:e})=>!!e.expandToFitIcon,"vira-button-icon-only":({inputs:e})=>!!e.icon&&!e.text,"vira-button-plain-style":({inputs:e})=>e.buttonStyle===Oi.Plain,"vira-button-default-style":({inputs:e})=>!e.buttonStyle||e.buttonStyle===Oi.Default},cssVars:{"vira-button-padding":"5px 10px","vira-button-internal-foreground-color":K["vira-form-background-color"].value,"vira-button-internal-background-color":K["vira-form-accent-primary-color"].value,"vira-button-border-color":"transparent"},styles:({hostClasses:e,cssVars:t})=>j`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Ma};
            ${K["vira-form-focus-outline-color"].name}: ${K["vira-form-accent-primary-hover-color"].value}
        }

        ${e["vira-button-icon-only"].selector} {
            ${t["vira-button-padding"].name}: 5px;
        }

        ${e["vira-button-disabled"].selector} {
            ${Ta};
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
            ${fn};
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
                color ${vo["vira-interaction-animation-duration"].value},
                background-color
                    ${vo["vira-interaction-animation-duration"].value},
                border-color ${vo["vira-interaction-animation-duration"].value};

            ${qu({elementBorderSize:2})}
        }

        .empty-text {
            width: 0;
        }

        button ${se} + .text-template {
            margin-left: 8px;
        }

        :host(:not(.${e["vira-button-expand-to-fit-icon"].name})) {
            & ${se} {
                height: 0;
                display: flex;
                align-items: center;
            }
        }
    `,render:({inputs:e})=>{const t=e.icon?v`
                  <${se.assign({icon:e.icon})}></${se}>
              `:fe,r=e.text?v`
                  <span class="text-template">${e.text}</span>
              `:v`
                  <span class="empty-text">&nbsp;</span>
              `;return v`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var xd;(function(e){e.Error="error",e.Success="success"})(xd||(xd={}));const tm=di()({tagName:"vira-card",hostClasses:{"vira-card-error":({inputs:e})=>e.cardState===xd.Error,"vira-card-success":({inputs:e})=>e.cardState===xd.Success},cssVars:{"vira-card-border":j`1px solid ${K["vira-form-border-color"].value}`,"vira-card-padding":K["vira-form-wrapper-radius"].value},styles:({hostClasses:e,cssVars:t})=>j`
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
        `}}),wR=ce({name:"ArrowDown24Icon",svgTemplate:v`
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
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),kR=ce({name:"ArrowLeft24Icon",svgTemplate:v`
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
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),xR=ce({name:"ArrowRight24Icon",svgTemplate:v`
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
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),$R=ce({name:"ArrowUp24Icon",svgTemplate:v`
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
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),DR=ce({name:"AutoTheme24Icon",svgTemplate:v`
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
                fill=${w["vira-icon-stroke-color"].value}
                stroke="none"
                style="fill-rule:nonzero"
            />
            <path
                d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 0v16"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),AR=ce({name:"Bell24Icon",svgTemplate:v`
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
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),ER=ce({name:"Chat24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),k$=ce({name:"Check16Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="m12 5-6 6-3-3"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),CR=ce({name:"ChevronDown24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${w["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${w["vira-icon-stroke-width"].value}
                d="M6 8 L12 15 18 8"
            />
        </svg>
    `}),jp=ce({name:"ChevronUp24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${w["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${w["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),x$=ce({name:"CloseX16Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 4l8 8M12 4l-8 8"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),$$=ce({name:"CloseX24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />

            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),SR=ce({name:"Commit24Icon",svgTemplate:v`
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
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />

            <path
                d="M12 2v6m0 8v6"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),F0=ce({name:"Copy24Icon",svgTemplate:v`
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
                fill=${w["vira-icon-fill-color"].value}
            />
            <path
                d="M21 11v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8q.2-1.8 2-2h8a2 2 0 0 1 2 2"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
            <path
                d="M7 16H6a2 2 0 0 1-2-2V6q.2-1.8 2-2h8a2 2 0 0 1 2 2v1"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),TR=ce({name:"Document24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />

            <path
                d="M13 3v6h6"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),D$=ce({name:"DocumentSearch24Icon",svgTemplate:v`
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
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
            <circle
                cx="11.7"
                cy="12.5"
                r="3.5"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
            <path
                d="m14.2 15 2.5 2.5"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),MR=ce({name:"DoubleChevron24Icon",svgTemplate:v`
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
                fill=${w["vira-icon-fill-color"].value}
                stroke-width="none"
                stroke="none"
            />
            <path
                d="m7 15 5 5 5-5M7 9l5-5 5 5"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),A$=ce({name:"Element16Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),FR=ce({name:"Element24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),PR=ce({name:"ExternalLink24Icon",svgTemplate:v`
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
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
            <path
                d="M10 14 20 4m-5 0h5v5"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),E$=ce({name:"EyeClosed24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${w["vira-icon-fill-color"].value}
            stroke=${w["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${w["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),zp=ce({name:"EyeOpen24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${w["vira-icon-fill-color"].value}
            stroke=${w["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linejoin="miter"
        >
            <path
                stroke-width=${w["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),IR=ce({name:"Filter24Icon",svgTemplate:v`
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
                fill=${w["vira-icon-fill-color"].value}
            />
            <path
                d="M3 6h18M6 12h12M9 18h6"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
                fill-rule="nonzero"
            />
        </svg>
    `}),NR=ce({name:"Globe24Icon",svgTemplate:v`
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
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
            <path
                d="M21 12c0 5-4 9-9 9m9-9c0-5-4-9-9-9m9 9H3m9 9c-5 0-9-4-9-9m9 9q3.5-3.9 3.6-9 0-5.1-3.6-9m0 18a14 14 0 0 1-3.6-9q0-5.1 3.6-9m-9 9c0-5 4-9 9-9"
                style="fill-rule:nonzero;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),OR=ce({name:"Link24Icon",svgTemplate:v`
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
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
            <path
                d="M12.4 9.6c.5.1 1 .5 1.5.9a4 4 0 0 1 0 5.7l-4.2 4.2A4 4 0 0 1 4 14.7l3-2.9"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
            <path
                d="M11.6 14.4a4 4 0 0 1-1.5-6.6l4.2-4.2A4 4 0 0 1 20 9.3l-3 2.9"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),C$=ce({name:"Loader24Icon",svgTemplate:v`
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
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),RR=j`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${vo["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Fa=ce({name:"LoaderAnimated24Icon",svgTemplate:v`
        <style>
            ${RR}
        </style>
        ${C$.svgTemplate}
    `}),BR=ce({name:"Lock24Icon",svgTemplate:v`
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
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
            <circle
                cx="12"
                cy="14"
                r="1.5"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14v4"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />

            <path
                d="M17 10V7.5a5 5 0 0 0-10 0V10"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),LR=ce({name:"MagnifyingGlass24Icon",svgTemplate:v`
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
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),_R=ce({name:"Moon24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke=${w["vira-icon-stroke-color"].value}
            stroke-width=${w["vira-icon-stroke-width"].value}
            fill=${w["vira-icon-fill-color"].value}
            stroke-linejoin="round"
        >
            <path d="M18.6 17.72A8 8 0 1 1 15 4.26a8 8 0 0 0 3.6 13.46Z" />
        </svg>
    `}),S$=ce({name:"Options24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />

                <circle cx="16.5" cy="12.5" r="2.5" />

                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>

            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),jR=ce({name:"Pencil24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />

            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),zR=ce({name:"Printer24Icon",svgTemplate:v`
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
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),UR=ce({name:"Shield24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),qR=ce({name:"SortAscending24Icon",svgTemplate:v`
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
                fill=${w["vira-icon-fill-color"].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                d="m3 8 4-4 4 4M7 4v16"
            />
            <path
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),WR=ce({name:"SortDescending24Icon",svgTemplate:v`
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
                fill=${w["vira-icon-fill-color"].value}
                fill-rule="nonzero"
                d="M17.5 4C18.9 4 20 5.1 20 6.5V20H7V4z"
            />
            <path
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                d="m3 16 4 4 4-4m-4 4V4"
            />
            <path
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                stroke-linejoin="round"
                d="M20 8h-5m0 2V6.5C15 5.1 16.1 4 17.5 4S20 5.1 20 6.5V10"
            />
            <path
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                stroke-linecap="square"
                d="M15 14h5l-5 6h5"
            />
        </svg>
    `}),VR=ce({name:"Sparkle24Icon",svgTemplate:v`
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
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),KR=ce({name:"SpeakerLoud24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),HR=ce({name:"SpeakerMedium24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
            />

            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),GR=ce({name:"SpeakerMuted24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />

            <path
                d="M4 20 20 4"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),ZR=ce({name:"SpeakerQuiet24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Pa=ce({name:"Star24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
        </svg>
    `}),P0=ce({name:"StatusFailure24Icon",svgTemplate:v`
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
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />

            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),YR=ce({name:"StatusInProgress24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />

            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />

            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),xr=ce({name:"StatusSuccess24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />

            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),JR=ce({name:"StatusUnknown24Icon",svgTemplate:v`
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
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="M12 14c0-.5.09-.87.14-1q.13-.38.37-.7c.19-.24 1.3-1.46 1.46-1.65a3 3 0 0 0 .44-.73q.17-.42.17-.94 0-1.07-.7-1.65a2.7 2.7 0 0 0-1.8-.56q-1.12 0-1.83.7c-.3.29-.66.86-.66 1.53"
                fill="none"
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),cn=ce({name:"StatusWarning24Icon",svgTemplate:v`
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
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
            <circle
                cx="12"
                cy="16"
                r="1"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />
            <path
                d="m12 14 .2-7h-.4l.2 7Z"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                style="stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:2"
            />
        </svg>
    `}),XR=ce({name:"Sun24Icon",svgTemplate:v`
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
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
            <path
                d="M12 2v3m0 14v3M4.22 4.22l2.12 2.12m11.32 11.32 2.12 2.12M2 12h3m14 0h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),QR=ce({name:"Upload24Icon",svgTemplate:v`
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
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
                fill=${w["vira-icon-fill-color"].value}
            />
            <path
                d="M12 15V4m4 4-4-4-4 4"
                fill="none"
                style="fill-rule:nonzero"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),eB=ce({name:"X24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function tB(e,t){const r=tt(t).map(i=>{if(t[i])return`${w[i].name}: ${String(t[i])};`}).filter(T.isTruthy).join(" "),n=j`
        ${ve(r)}
        display: inline-flex;
        vertical-align: middle;
    `;return ce({name:e.name,svgTemplate:v`
            <div style=${n}>${e.svgTemplate}</div>
        `})}const rB={ArrowDown24Icon:wR,ArrowLeft24Icon:kR,ArrowRight24Icon:xR,ArrowUp24Icon:$R,AutoTheme24Icon:DR,Bell24Icon:AR,Chat24Icon:ER,Check16Icon:k$,Check24Icon:l$,ChevronDown24Icon:CR,ChevronUp24Icon:jp,CloseX16Icon:x$,CloseX24Icon:$$,Commit24Icon:SR,Copy24Icon:F0,Document24Icon:TR,DocumentSearch24Icon:D$,DoubleChevron24Icon:MR,Element16Icon:A$,Element24Icon:FR,ExternalLink24Icon:PR,EyeClosed24Icon:E$,EyeOpen24Icon:zp,Filter24Icon:IR,Globe24Icon:NR,Link24Icon:OR,Loader24Icon:C$,LoaderAnimated24Icon:Fa,Lock24Icon:BR,MagnifyingGlass24Icon:LR,Moon24Icon:_R,Options24Icon:S$,Pencil24Icon:jR,Printer24Icon:zR,Shield24Icon:UR,SortAscending24Icon:qR,SortDescending24Icon:WR,Sparkle24Icon:VR,SpeakerLoud24Icon:KR,SpeakerMedium24Icon:HR,SpeakerMuted24Icon:GR,SpeakerQuiet24Icon:ZR,Star24Icon:Pa,StatusFailure24Icon:P0,StatusInProgress24Icon:YR,StatusSuccess24Icon:xr,StatusUnknown24Icon:JR,StatusWarning24Icon:cn,Sun24Icon:XR,Upload24Icon:QR,X24Icon:eB},rm=di()({tagName:"vira-checkbox",hostClasses:{"vira-checkbox-horizontal":({inputs:e})=>!!e.horizontal,"vira-checkbox-filled-checked":({inputs:e})=>!!e.fillWhenChecked,"vira-checkbox-filled-unchecked":({inputs:e})=>!!e.fillWhenUnchecked},styles:({hostClasses:e})=>j`
        :host {
            display: inline-flex;
        }

        .custom-checkbox {
            height: 24px;
            aspect-ratio: 1;
            box-sizing: border-box;
        }

        ${se} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            ${w["vira-icon-stroke-width"].name}: 3px;
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

            ${qu({elementBorderSize:1})}

            &.checked {
                & ${se} {
                    opacity: 1;
                }
            }

            &.error {
                border-color: ${K["vira-form-error-color"].value};
            }

            &.disabled {
                ${Ta};
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
                      ${is(e.attributePassthrough?.text)}
                      style=${Qt(e.stylePassthrough?.text)}
                  >
                      ${e.label}
                  </span>
              `:fe;return v`
            <label
                class=${bn({disabled:!!e.disabled})}
                ${is(e.attributePassthrough?.label)}
                style=${Qt(e.stylePassthrough?.label)}
                ${Ee("mousedown",n)}
            >
                ${i}
                <span
                    class="custom-checkbox ${bn({checked:e.value,disabled:!!e.disabled,error:!!e.hasError})}"
                    role="checkbox"
                    aria-label=${Qt(e.label||void 0)}
                    aria-checked=${e.value?"true":"false"}
                    aria-disabled=${e.disabled?"true":"false"}
                    tabindex=${e.disabled?"-1":"0"}
                    ${is(e.attributePassthrough?.["custom-checkbox"])}
                    style=${Qt(e.stylePassthrough?.["custom-checkbox"])}
                    ${iO(n)}
                >
                    <${se.assign({icon:l$,fitContainer:!0})}
                        ${is(e.attributePassthrough?.[se.tagName])}
                        style=${Qt(e.stylePassthrough?.[se.tagName])}
                    ></${se}>
                </span>
            </label>
        `}}),pi=di()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expand-on-print":({inputs:e})=>!!e.expandOnPrint},slotNames:["header"],styles:({hostClasses:e})=>j`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${fn};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${vo["vira-pretty-animation-duration"].value};
            overflow: hidden;

            &.collapsed {
                ${Ma}
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
    `,events:{expandChange:nr()},render({state:e,slotNames:t,updateState:r,dispatch:n,events:i,inputs:o}){const s=o.expanded?j`
                  height: ${e.contentHeight}px;
              `:j`
                  height: 0;
              `;return v`
            <button
                class="header-wrapper"
                ${Ee("click",()=>{n(new i.expandChange(!o.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>

            <div
                class="collapsing-element ${bn({collapsed:!o.expanded})}"
                style=${s}
                disabled="disabled"
            >
                <div
                    ${G5(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),la=di()({tagName:"vira-collapsible-card",testIds:["openCaret"],events:{expandToggle:nr()},state({inputs:e}){return{isExpanded:!!e.startExpanded}},hostClasses:{"vira-collapsible-card-expanded":({state:e})=>e.isExpanded,"vira-collapsible-card-expansion-blocked":({inputs:e})=>!!e.blockExpansion,"vira-collapsible-card-card-styles":({inputs:e})=>!e.rawCollapsible},cssVars:{"vira-collapsible-card-content-gap":"16px"},styles:({hostClasses:e,cssVars:t})=>j`
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
            gap: ${t["vira-collapsible-card-content-gap"].value};
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
    `,slotNames:["header"],render({inputs:e,slotNames:t,state:r,updateState:n,testIds:i,dispatch:o,events:s}){e.blockExpansion&&n({isExpanded:!0});const a=r.isExpanded||e.expandOnPrint?v`
                      <div class="card-content">
                          <slot></slot>
                      </div>
                  `:fe,l=e.hideHeader?fe:v`
                  <div class="card-header">
                      <slot name=${t.header}><div class="header-filler"></div></slot>

                      ${e.blockExpansion?fe:v`
                                <${se.assign({icon:jp,fitContainer:!0})}
                                    ${S0(i.openCaret)}
                                    class="open-caret"
                                ></${se}>
                            `}
                  </div>
              `;return v`
            <${pi.assign({expanded:r.isExpanded,expandOnPrint:e.expandOnPrint??!1})}
                ${Ee(pi.events.expandChange,u=>{u.stopImmediatePropagation(),!e.blockExpansion&&(n({isExpanded:u.detail}),o(new s.expandToggle(u.detail)))})}
            >
                <div class="header-wrapper" slot=${pi.slotNames.header}>
                    ${l}
                </div>
                ${a}
            </${pi}>
        `}}),Iv=di()({tagName:"vira-error",cssVars:{"vira-error-font-weight":"bold"},styles:({cssVars:e})=>j`
        :host {
            color: ${K["vira-form-error-color"].value};
            font-weight: ${e["vira-error-font-weight"].value};
        }
    `,render(){return v`
            <slot></slot>
        `}});function I0({input:e,matcher:t}){return!e||!t?!0:e.length>1?e.split("").every(r=>I0({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function nB({value:e,allowed:t,blocked:r}){const n=String(e),i=t?I0({input:n,matcher:t}):!0,o=r?I0({input:n,matcher:r}):!1;return i&&!o}function N0(e){const t=String(e.value);if(!e.value)return{filtered:t,blocked:""};const{filtered:r,blocked:n}=t.split("").reduce((i,o)=>(nB({...e,value:o})?i.filtered.push(o):i.blocked.push(o),i),{filtered:[],blocked:[]});return{filtered:r.join(""),blocked:n.join("")}}function iB({inputs:e,previousValue:t,event:r,inputBlockedCallback:n,newValueCallback:i}){const o=Uu(r,HTMLInputElement),s=T.hasKey(r,"data")&&hg.isString(r.data)||"";if(s){const{blocked:l}=N0({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});l.length&&n(l)}const a=N0({value:o.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;o.value!==a&&(o.value=a),t!==a&&i(a)}var ls;(function(e){e.Default="text",e.Password="password",e.Email="email",e.Number="number"})(ls||(ls={}));const Pr=di()({tagName:"vira-input",cssVars:{"vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>j`
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
                ${fn};
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
                ${Ma};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} .input-wrapper {
                padding-right: 4px;
            }

            pre {
                ${fn};
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
                ${fn};
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
                ${fn};
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
                    ${qu({elementBorderSize:0,noNesting:!0})}
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
                ${Ma};
            }

            button {
                ${fn};
                cursor: pointer;
                display: flex;
                transition: color
                    ${vo["vira-interaction-animation-duration"].value};
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
                    ${Ta};
                }

                & .show-password-button {
                    pointer-events: none;
                }

                & .focus-border {
                    display: none;
                }
            }
        `,events:{valueChange:nr(),inputBlocked:nr()},state(){return{forcedInputWidth:0,showPassword:!1,randomId:na(32)}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton,"vira-input-error":({inputs:e})=>!!e.hasError},render:({inputs:e,dispatch:t,state:r,updateState:n,events:i,host:o})=>{const{filtered:s}=N0({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?v`
                  <${se.assign({icon:e.icon})}
                      class="left-side-icon"
                  ></${se}>
              `:fe,l=e.fitText?j`
                  width: ${r.forcedInputWidth}px;
              `:fe,u=Ee("mousedown",h=>{const g=Uu(h,HTMLElement,{useOriginalTarget:!0}),m=Vt.instanceOf(o.shadowRoot.querySelector("input"),HTMLInputElement);g!==m&&(h.preventDefault(),m.focus())}),d=e.disableBrowserHelps||e.type===ls.Password,f=v`
            <span class="input-wrapper" ${e.label?fe:u}>
                ${a}
                ${Xn(!!e.fitText,v`
                        <span
                            class="size-span"
                            ${G5(({contentRect:h})=>{n({forcedInputWidth:h.width})})}
                        >
                            <pre>${s||e.placeholder||fe}</pre>
                        </span>
                    `)}

                <input
                    id=${Qt(e.label?r.randomId:void 0)}
                    aria-label=${Qt(e.label||void 0)}
                    autofocus=${!1}
                    type=${oB(e.type,r.showPassword)}
                    style=${l}
                    autocomplete=${Qt(d?"off":void 0)}
                    autocorrect=${Qt(d?"off":void 0)}
                    autocapitalize=${Qt(d?"off":void 0)}
                    spellcheck=${Qt(d?"false":void 0)}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${Ee("input",h=>{iB({inputs:e,previousValue:s,event:h,inputBlockedCallback(g){t(new i.inputBlocked(g))},newValueCallback(g){t(new i.valueChange(g))}})})}
                    placeholder=${Qt(e.placeholder||void 0)}
                    ${is(e.attributePassthrough)}
                />

                ${Xn(!!(e.showClearButton&&e.value),v`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${Ee("mousedown",h=>{h.stopImmediatePropagation(),h.preventDefault()})}
                            ${Ee("click",()=>{e.disabled||t(new i.valueChange(""))})}
                        >
                            <${se.assign({icon:$$})}></${se}>
                        </button>
                    `)}
                ${Xn(e.type===ls.Password,v`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${Ee("mousedown",h=>{h.stopImmediatePropagation(),h.preventDefault()})}
                            ${Ee("click",()=>{n({showPassword:!r.showPassword})})}
                        >
                            <${se.assign({icon:r.showPassword?zp:E$})}></${se}>
                        </button>
                    `)}
                ${Xn(!!e.suffix,v`
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
                <label for=${r.randomId} ${u}>
                    <span class="input-label">${e.label}</span>
                    ${f}
                </label>
            `:f}});function oB(e,t){return e===ls.Password&&t?ls.Default:e||ls.Default}const us=di()({tagName:"vira-select",state(){return{randomId:na(32),cleanup:void 0}},events:{valueChange:nr()},cssVars:{"vira-select-padding-horizontal":"10px","vira-select-padding-vertical":"6px","vira-select-icon-padding":"44px"},hostClasses:{"vira-select-disabled":({inputs:e})=>!!e.disabled,"vira-select-error":({inputs:e})=>!!e.hasError,"vira-select-not-raw":({inputs:e})=>!e.rawSelect},styles:({hostClasses:e,cssVars:t})=>j`
        :host {
            position: relative;
            display: inline-flex;
            width: 223px;
            box-sizing: border-box;
            color: ${K["vira-form-foreground-color"].value};
        }

        .select-wrapper {
            ${fn};
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
                padding-right: 28px;
                overflow: hidden;
                text-overflow: ellipsis;

                &.placeholder {
                    color: ${K["vira-form-placeholder-color"].value};
                }

                &.with-icon {
                    padding-left: ${t["vira-select-icon-padding"].value};
                }
            }

            & ${se} {
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
                        ${qu({elementBorderSize:0,noNesting:!0})}
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
                        ${vo["vira-interaction-animation-duration"].value};
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
                ${Ta}
            }
            ${se} {
                ${Ta}
            }
            & * {
                cursor: not-allowed;
            }
        }

        :host(.${e["vira-select-not-raw"].name}.${e["vira-select-error"].name})
            .wrapper-border {
            border-color: ${K["vira-form-error-color"].value};
        }
    `,init({state:e,updateState:t,host:r}){e.cleanup?.();const n=[vg(r,"mousedown",i=>{const o=Vt.instanceOf(r.shadowRoot.querySelector("select"),HTMLSelectElement);i.composedPath().includes(o)||(i.preventDefault(),i.stopPropagation(),o.showPicker&&o.showPicker())})];t({cleanup:()=>{n.forEach(i=>i())}})},cleanup({state:e,updateState:t}){e.cleanup?.(),t({cleanup:void 0})},render({inputs:e,state:t,dispatch:r,events:n}){const i=e.value||void 0,o=e.placeholder||i==null?v`
                      <option value="" disabled ?selected=${i==null}>
                          ${e.placeholder}
                      </option>
                  `:fe,s=v`
            <span class="select-wrapper">
                <select
                    .value=${Qt(i)}
                    class=${bn({placeholder:!i&&!!e.placeholder,"with-icon":!!e.icon})}
                    tabindex=${e.disabled?-1:0}
                    id=${Qt(e.label?t.randomId:void 0)}
                    aria-label=${Qt(e.label||void 0)}
                    aria-disabled=${Qt(e.disabled?"true":void 0)}
                    ${Ee("input",a=>{const l=Uu(a,HTMLSelectElement),u=l.value;l.value!==i&&(l.selectedIndex=e.options.findIndex(d=>d.value===i)),r(new n.valueChange(u))})}
                    ${is(e.attributePassthrough?.select)}
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

                <${se.assign({icon:e.icon})}
                    class="input-icon"
                ></${se}>
                <${se.assign({icon:jp})}
                    class="trigger-icon"
                ></${se}>
            </span>
        `;return e.label?v`
                <label for=${t.randomId} ${is(e.attributePassthrough?.label)}>
                    <span class="select-label">${e.label}</span>
                    ${s}
                </label>
            `:s}});var pu;(function(e){e.a98="a98",e.cubehelix="cubehelix",e.dlab="dlab",e.dlch="dlch",e.hsi="hsi",e.hsl="hsl",e.hsv="hsv",e.hwb="hwb",e.itp="itp",e.jab="jab",e.jch="jch",e.lab="lab",e.lab65="lab65",e.lch="lch",e.lch65="lch65",e.lchuv="lchuv",e.lrgb="lrgb",e.luv="luv",e.okhsl="okhsl",e.okhsv="okhsv",e.oklab="oklab",e.oklch="oklch",e.p3="p3",e.prophoto="prophoto",e.rec2020="rec2020",e.rgb="rgb",e.xyb="xyb",e.xyz50="xyz50",e.xyz65="xyz65",e.yiq="yiq"})(pu||(pu={}));const Up={rgb:{coords:{r:{min:0,max:255,factor:255},g:{min:0,max:255,factor:255},b:{min:0,max:255,factor:255}},colorSpace:"rgb"},hex:{coords:{r:{min:0,max:255,factor:255,radix:16,radixPad:2},g:{min:0,max:255,factor:255,radix:16,radixPad:2},b:{min:0,max:255,factor:255,radix:16,radixPad:2}},conversionFormat:pu.rgb,rawSyntax:"hexString",colorSpace:"rgb"},hsl:{coords:{h:{min:0,max:360},s:{min:0,max:100,factor:100,digits:1},l:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},hwb:{coords:{h:{min:0,max:360},w:{min:0,max:100,factor:100,digits:1},b:{min:0,max:100,factor:100,digits:1}},colorSpace:"rgb"},lab:{coords:{l:{min:0,max:100,digits:1},a:{min:-128,max:127},b:{min:-128,max:127}},colorSpace:"lab"},lch:{coords:{l:{min:0,max:100,digits:1},c:{min:0,max:230},h:{min:0,max:360}},colorSpace:"lab"},oklab:{coords:{l:{min:0,max:1,digits:3},a:{min:-.5,max:.5,digits:3},b:{min:-.5,max:.5,digits:3}},colorSpace:"oklab"},oklch:{coords:{l:{min:0,max:1,digits:3},c:{min:0,max:.4,digits:3},h:{min:0,max:360,digits:1}},colorSpace:"oklab"}},Co=ut(Up,e=>e),Me={...Co,name:"name",hexString:"hexString"},yi=ut(Up,(e,t)=>{const r=T.isEnumValue(e,pu)&&T.isEnumValue(e,Co)?e:"conversionFormat"in t&&t.conversionFormat&&T.isEnumValue(t.conversionFormat,pu)&&T.isEnumValue(t.conversionFormat,Co)?t.conversionFormat:void 0;return Nt.isTruthy(r,`Invalid conversion format for color format '${e}' ${$(t)}.`),{...t,colorFormat:e,conversionFormat:r,rawSyntax:Vt.isEnumValue("rawSyntax"in t&&t.rawSyntax?t.rawSyntax:e,Me)}});xo(Qc(Up),e=>({key:e.colorSpace,value:e.colorSpace}),{});ki(yi).reduce((e,[t,r])=>(ja(e,r.colorSpace,()=>({}))[t]=r,e),{});function sB(e){return e.startsWith("rgb")?Me.rgb:e.startsWith("hsl")?Me.hsl:e.startsWith("hwb")?Me.hwb:e.startsWith("oklab")?Me.oklab:e.startsWith("oklch")?Me.oklch:e.startsWith("lab")?Me.lab:e.startsWith("lch")?Me.lch:e.startsWith("#")?Me.hexString:Me.name}const O0={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(const e in O0)Object.freeze(O0[e]);const bu=Object.freeze(O0),aB=Object.keys(bu).reduce((e,t)=>t.length>e.length?t:e),lB=Wd(ut(bu,(e,t)=>Kt(Object.entries(bu),([n])=>n,(n,[,i])=>n===e?!1:T.deepEquals(i,t))),(e,t)=>!!t.length),Nv=Object.entries(lB).reduce((e,t)=>{const r=[e[0],...e[1]].join(", ");return[t[0],...t[1]].join(", ").length>r.length?t:e}).reduce((e,t)=>T.isArray(t)?[...e,...t]:[...e,t],[]),Ov=Math.max(aB.length,Nv.length+(Nv.length-1)*2),T$=(e,t)=>{if(typeof e=="number"){if(t===3)return{mode:"rgb",r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(t===4)return{mode:"rgb",r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(t===6)return{mode:"rgb",r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(t===8)return{mode:"rgb",r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},uB={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cB=e=>T$(uB[e.toLowerCase()],6),dB=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,fB=e=>{let t;return(t=e.match(dB))?T$(parseInt(t[1],16),t[1].length):void 0},wo="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)",Yl=`${wo}%`,qp=`(?:${wo}%|${wo})`,hB=`(?:${wo}(deg|grad|rad|turn)|${wo})`,Ia="\\s*,\\s*",mB=new RegExp(`^rgba?\\(\\s*${wo}${Ia}${wo}${Ia}${wo}\\s*(?:,\\s*${qp}\\s*)?\\)$`),gB=new RegExp(`^rgba?\\(\\s*${Yl}${Ia}${Yl}${Ia}${Yl}\\s*(?:,\\s*${qp}\\s*)?\\)$`),pB=e=>{let t={mode:"rgb"},r;if(r=e.match(mB))r[1]!==void 0&&(t.r=r[1]/255),r[2]!==void 0&&(t.g=r[2]/255),r[3]!==void 0&&(t.b=r[3]/255);else if(r=e.match(gB))r[1]!==void 0&&(t.r=r[1]/100),r[2]!==void 0&&(t.g=r[2]/100),r[3]!==void 0&&(t.b=r[3]/100);else return;return r[4]!==void 0?t.alpha=Math.max(0,Math.min(1,r[4]/100)):r[5]!==void 0&&(t.alpha=Math.max(0,Math.min(1,+r[5]))),t},R0=(e,t)=>e===void 0?void 0:typeof e!="object"?_0(e):e.mode!==void 0?e:t?{...e,mode:t}:void 0,bs=(e="rgb")=>t=>(t=R0(t,e))!==void 0?t.mode===e?t:vi[t.mode][e]?vi[t.mode][e](t):e==="rgb"?vi[t.mode].rgb(t):vi.rgb[e](vi[t.mode].rgb(t)):void 0,vi={},M$={},$d=[],F$={},bB=e=>e,Xe=e=>(vi[e.mode]={...vi[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(t=>{vi[t]||(vi[t]={}),vi[t][e.mode]=e.fromMode[t]}),e.ranges||(e.ranges={}),e.difference||(e.difference={}),e.channels.forEach(t=>{if(e.ranges[t]===void 0&&(e.ranges[t]=[0,1]),!e.interpolate[t])throw new Error(`Missing interpolator for: ${t}`);typeof e.interpolate[t]=="function"&&(e.interpolate[t]={use:e.interpolate[t]}),e.interpolate[t].fixup||(e.interpolate[t].fixup=bB)}),M$[e.mode]=e,(e.parse||[]).forEach(t=>{yB(t,e.mode)}),bs(e.mode)),Mf=e=>M$[e],yB=(e,t)=>{if(typeof e=="string"){if(!t)throw new Error("'mode' required when 'parser' is a string");F$[e]=t}else typeof e=="function"&&$d.indexOf(e)<0&&$d.push(e)},B0=/[^\x00-\x7F]|[a-zA-Z_]/,vB=/[^\x00-\x7F]|[-\w]/,L={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"};let de=0;function kc(e){let t=e[de],r=e[de+1];return t==="-"||t==="+"?/\d/.test(r)||r==="."&&/\d/.test(e[de+2]):t==="."?/\d/.test(r):/\d/.test(t)}function L0(e){if(de>=e.length)return!1;let t=e[de];if(B0.test(t))return!0;if(t==="-"){if(e.length-de<2)return!1;let r=e[de+1];return!!(r==="-"||B0.test(r))}return!1}const wB={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function kl(e){let t="";if((e[de]==="-"||e[de]==="+")&&(t+=e[de++]),t+=xc(e),e[de]==="."&&/\d/.test(e[de+1])&&(t+=e[de++]+xc(e)),(e[de]==="e"||e[de]==="E")&&((e[de+1]==="-"||e[de+1]==="+")&&/\d/.test(e[de+2])?t+=e[de++]+e[de++]+xc(e):/\d/.test(e[de+1])&&(t+=e[de++]+xc(e))),L0(e)){let r=Dd(e);return r==="deg"||r==="rad"||r==="turn"||r==="grad"?{type:L.Hue,value:t*wB[r]}:void 0}return e[de]==="%"?(de++,{type:L.Percentage,value:+t}):{type:L.Number,value:+t}}function xc(e){let t="";for(;/\d/.test(e[de]);)t+=e[de++];return t}function Dd(e){let t="";for(;de<e.length&&vB.test(e[de]);)t+=e[de++];return t}function kB(e){let t=Dd(e);return e[de]==="("?(de++,{type:L.Function,value:t}):t==="none"?{type:L.None,value:void 0}:{type:L.Ident,value:t}}function xB(e=""){let t=e.trim(),r=[],n;for(de=0;de<t.length;){if(n=t[de++],n===`
`||n==="	"||n===" "){for(;de<t.length&&(t[de]===`
`||t[de]==="	"||t[de]===" ");)de++;continue}if(n===",")return;if(n===")"){r.push({type:L.ParenClose});continue}if(n==="+"){if(de--,kc(t)){r.push(kl(t));continue}return}if(n==="-"){if(de--,kc(t)){r.push(kl(t));continue}if(L0(t)){r.push({type:L.Ident,value:Dd(t)});continue}return}if(n==="."){if(de--,kc(t)){r.push(kl(t));continue}return}if(n==="/"){for(;de<t.length&&(t[de]===`
`||t[de]==="	"||t[de]===" ");)de++;let i;if(kc(t)&&(i=kl(t),i.type!==L.Hue)){r.push({type:L.Alpha,value:i});continue}if(L0(t)&&Dd(t)==="none"){r.push({type:L.Alpha,value:{type:L.None,value:void 0}});continue}return}if(/\d/.test(n)){de--,r.push(kl(t));continue}if(B0.test(n)){de--,r.push(kB(t));continue}return}return r}function $B(e){e._i=0;let t=e[e._i++];if(!t||t.type!==L.Function||t.value!=="color"||(t=e[e._i++],t.type!==L.Ident))return;const r=F$[t.value];if(!r)return;const n={mode:r},i=P$(e,!1);if(!i)return;const o=Mf(r).channels;for(let s=0,a,l;s<o.length;s++)a=i[s],l=o[s],a.type!==L.None&&(n[l]=a.type===L.Number?a.value:a.value/100,l==="alpha"&&(n[l]=Math.max(0,Math.min(1,n[l]))));return n}function P$(e,t){const r=[];let n;for(;e._i<e.length;){if(n=e[e._i++],n.type===L.None||n.type===L.Number||n.type===L.Alpha||n.type===L.Percentage||t&&n.type===L.Hue){r.push(n);continue}if(n.type===L.ParenClose){if(e._i<e.length)return;continue}return}if(!(r.length<3||r.length>4)){if(r.length===4){if(r[3].type!==L.Alpha)return;r[3]=r[3].value}return r.length===3&&r.push({type:L.None,value:void 0}),r.every(i=>i.type!==L.Alpha)?r:void 0}}function DB(e,t){e._i=0;let r=e[e._i++];if(!r||r.type!==L.Function)return;let n=P$(e,t);if(n)return n.unshift(r.value),n}const _0=e=>{if(typeof e!="string")return;const t=xB(e),r=t?DB(t,!0):void 0;let n,i=0,o=$d.length;for(;i<o;)if((n=$d[i++](e,r))!==void 0)return n;return t?$B(t):void 0};function AB(e,t){if(!t||t[0]!=="rgb"&&t[0]!=="rgba")return;const r={mode:"rgb"},[,n,i,o,s]=t;if(!(n.type===L.Hue||i.type===L.Hue||o.type===L.Hue))return n.type!==L.None&&(r.r=n.type===L.Number?n.value/255:n.value/100),i.type!==L.None&&(r.g=i.type===L.Number?i.value/255:i.value/100),o.type!==L.None&&(r.b=o.type===L.Number?o.value/255:o.value/100),s.type!==L.None&&(r.alpha=Math.min(1,Math.max(0,s.type===L.Number?s.value:s.value/100))),r}const EB=e=>e==="transparent"?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,CB=(e,t,r)=>e+r*(t-e),SB=e=>{let t=[];for(let r=0;r<e.length-1;r++){let n=e[r],i=e[r+1];n===void 0&&i===void 0?t.push(void 0):n!==void 0&&i!==void 0?t.push([n,i]):t.push(n!==void 0?[n,n]:[i,i])}return t},TB=e=>t=>{let r=SB(t);return n=>{let i=n*r.length,o=n>=1?r.length-1:Math.max(Math.floor(i),0),s=r[o];return s===void 0?void 0:e(s[0],s[1],i-o)}},U=TB(CB),Yt=e=>{let t=!1,r=e.map(n=>n!==void 0?(t=!0,n):1);return t?r:e},tl={mode:"rgb",channels:["r","g","b","alpha"],parse:[AB,fB,pB,cB,EB,"srgb"],serialize:"srgb",interpolate:{r:U,g:U,b:U,alpha:{use:U,fixup:Yt}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},nm=(e=0)=>Math.pow(Math.abs(e),563/256)*Math.sign(e),Rv=e=>{let t=nm(e.r),r=nm(e.g),n=nm(e.b),i={mode:"xyz65",x:.5766690429101305*t+.1855582379065463*r+.1882286462349947*n,y:.297344975250536*t+.6273635662554661*r+.0752914584939979*n,z:.0270313613864123*t+.0706888525358272*r+.9913375368376386*n};return e.alpha!==void 0&&(i.alpha=e.alpha),i},im=e=>Math.pow(Math.abs(e),256/563)*Math.sign(e),Bv=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i={mode:"a98",r:im(e*2.0415879038107465-t*.5650069742788597-.3447313507783297*r),g:im(e*-.9692436362808798+t*1.8759675015077206+.0415550574071756*r),b:im(e*.0134442806320312-t*.1183623922310184+1.0151749943912058*r)};return n!==void 0&&(i.alpha=n),i},om=(e=0)=>{const t=Math.abs(e);return t<=.04045?e/12.92:(Math.sign(e)||1)*Math.pow((t+.055)/1.055,2.4)},rl=({r:e,g:t,b:r,alpha:n})=>{let i={mode:"lrgb",r:om(e),g:om(t),b:om(r)};return n!==void 0&&(i.alpha=n),i},Ps=e=>{let{r:t,g:r,b:n,alpha:i}=rl(e),o={mode:"xyz65",x:.4123907992659593*t+.357584339383878*r+.1804807884018343*n,y:.2126390058715102*t+.715168678767756*r+.0721923153607337*n,z:.0193308187155918*t+.119194779794626*r+.9505321522496607*n};return i!==void 0&&(o.alpha=i),o},sm=(e=0)=>{const t=Math.abs(e);return t>.0031308?(Math.sign(e)||1)*(1.055*Math.pow(t,1/2.4)-.055):e*12.92},nl=({r:e,g:t,b:r,alpha:n},i="rgb")=>{let o={mode:i,r:sm(e),g:sm(t),b:sm(r)};return n!==void 0&&(o.alpha=n),o},Is=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=nl({r:e*3.2409699419045226-t*1.537383177570094-.4986107602930034*r,g:e*-.9692436362808796+t*1.8759675015077204+.0415550574071756*r,b:e*.0556300796969936-t*.2039769588889765+1.0569715142428784*r});return n!==void 0&&(i.alpha=n),i},MB={...tl,mode:"a98",parse:["a98-rgb"],serialize:"a98-rgb",fromMode:{rgb:e=>Bv(Ps(e)),xyz65:Bv},toMode:{rgb:e=>Is(Rv(e)),xyz65:Rv}},mr=e=>(e=e%360)<0?e+360:e,FB=(e,t)=>e.map((r,n,i)=>{if(r===void 0)return r;let o=mr(r);return n===0||e[n-1]===void 0?o:t(o-mr(i[n-1]))}).reduce((r,n)=>!r.length||n===void 0||r[r.length-1]===void 0?(r.push(n),r):(r.push(n+r[r.length-1]),r),[]),Qi=e=>FB(e,t=>Math.abs(t)<=180?t:t-360*Math.sign(t)),er=[-.14861,1.78277,-.29227,-.90649,1.97294,0],PB=Math.PI/180,IB=180/Math.PI;let Lv=er[3]*er[4],_v=er[1]*er[4],jv=er[1]*er[2]-er[0]*er[3];const NB=({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=(jv*r+e*Lv-t*_v)/(jv+Lv-_v),o=r-i,s=(er[4]*(t-i)-er[2]*o)/er[3],a={mode:"cubehelix",l:i,s:i===0||i===1?void 0:Math.sqrt(o*o+s*s)/(er[4]*i*(1-i))};return a.s&&(a.h=Math.atan2(s,o)*IB-120),n!==void 0&&(a.alpha=n),a},OB=({h:e,s:t,l:r,alpha:n})=>{let i={mode:"rgb"};e=(e===void 0?0:e+120)*PB,r===void 0&&(r=0);let o=t===void 0?0:t*r*(1-r),s=Math.cos(e),a=Math.sin(e);return i.r=r+o*(er[0]*s+er[1]*a),i.g=r+o*(er[2]*s+er[3]*a),i.b=r+o*(er[4]*s+er[5]*a),n!==void 0&&(i.alpha=n),i},Ff=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.s||!t.s)return 0;let r=mr(e.h),n=mr(t.h),i=Math.sin((n-r+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*t.s)*i},RB=(e,t)=>{if(e.h===void 0||t.h===void 0)return 0;let r=mr(e.h),n=mr(t.h);return Math.abs(n-r)>180?r-(n-360*Math.sign(n-r)):n-r},Pf=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.c||!t.c)return 0;let r=mr(e.h),n=mr(t.h),i=Math.sin((n-r+360)/2*Math.PI/180);return 2*Math.sqrt(e.c*t.c)*i},BB=(e="rgb",t=[1,1,1,0])=>{let r=Mf(e),n=r.channels,i=r.difference,o=bs(e);return(s,a)=>{let l=o(s),u=o(a);return Math.sqrt(n.reduce((d,f,h)=>{let g=i[f]?i[f](l,u):l[f]-u[f];return d+(t[h]||0)*Math.pow(isNaN(g)?0:g,2)},0))}},eo=e=>{let t=e.reduce((n,i)=>{if(i!==void 0){let o=i*Math.PI/180;n.sin+=Math.sin(o),n.cos+=Math.cos(o)}return n},{sin:0,cos:0}),r=Math.atan2(t.sin,t.cos)*180/Math.PI;return r<0?360+r:r},LB={mode:"cubehelix",channels:["h","s","l","alpha"],parse:["--cubehelix"],serialize:"--cubehelix",ranges:{h:[0,360],s:[0,4.614],l:[0,1]},fromMode:{rgb:NB},toMode:{rgb:OB},interpolate:{h:{use:U,fixup:Qi},s:U,l:U,alpha:{use:U,fixup:Yt}},difference:{h:Ff},average:{h:eo}},So=({l:e,a:t,b:r,alpha:n},i="lch")=>{t===void 0&&(t=0),r===void 0&&(r=0);let o=Math.sqrt(t*t+r*r),s={mode:i,l:e,c:o};return o&&(s.h=mr(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(s.alpha=n),s},To=({l:e,c:t,h:r,alpha:n},i="lab")=>{r===void 0&&(r=0);let o={mode:i,l:e,a:t?t*Math.cos(r/180*Math.PI):0,b:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(o.alpha=n),o},I$=Math.pow(29,3)/Math.pow(3,3),N$=Math.pow(6,3)/Math.pow(29,3),Rt={X:.3457/.3585,Y:1,Z:(1-.3457-.3585)/.3585},ua={X:.3127/.329,Y:1,Z:(1-.3127-.329)/.329};let am=e=>Math.pow(e,3)>N$?Math.pow(e,3):(116*e-16)/I$;const O$=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=(e+16)/116,o=t/500+i,s=i-r/200,a={mode:"xyz65",x:am(o)*ua.X,y:am(i)*ua.Y,z:am(s)*ua.Z};return n!==void 0&&(a.alpha=n),a},If=e=>Is(O$(e)),lm=e=>e>N$?Math.cbrt(e):(I$*e+16)/116,R$=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=lm(e/ua.X),o=lm(t/ua.Y),s=lm(r/ua.Z),a={mode:"lab65",l:116*o-16,a:500*(i-o),b:200*(o-s)};return n!==void 0&&(a.alpha=n),a},Nf=e=>{let t=R$(Ps(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},Ad=1,B$=1,yu=26/180*Math.PI,Ed=Math.cos(yu),Cd=Math.sin(yu),L$=100/Math.log(139/100),j0=({l:e,c:t,h:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i={mode:"lab65",l:(Math.exp(e*Ad/L$)-1)/.0039},o=(Math.exp(.0435*t*B$*Ad)-1)/.075,s=o*Math.cos(r/180*Math.PI-yu),a=o*Math.sin(r/180*Math.PI-yu);return i.a=s*Ed-a/.83*Cd,i.b=s*Cd+a/.83*Ed,n!==void 0&&(i.alpha=n),i},z0=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=t*Ed+r*Cd,o=.83*(r*Ed-t*Cd),s=Math.sqrt(i*i+o*o),a={mode:"dlch",l:L$/Ad*Math.log(1+.0039*e),c:Math.log(1+.075*s)/(.0435*B$*Ad)};return a.c&&(a.h=mr((Math.atan2(o,i)+yu)/Math.PI*180)),n!==void 0&&(a.alpha=n),a},zv=e=>j0(So(e,"dlch")),Uv=e=>To(z0(e),"dlab"),_B={mode:"dlab",parse:["--din99o-lab"],serialize:"--din99o-lab",toMode:{lab65:zv,rgb:e=>If(zv(e))},fromMode:{lab65:Uv,rgb:e=>Uv(Nf(e))},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-40.09,45.501],b:[-40.469,44.344]},interpolate:{l:U,a:U,b:U,alpha:{use:U,fixup:Yt}}},jB={mode:"dlch",parse:["--din99o-lch"],serialize:"--din99o-lch",toMode:{lab65:j0,dlab:e=>To(e,"dlab"),rgb:e=>If(j0(e))},fromMode:{lab65:z0,dlab:e=>So(e,"dlch"),rgb:e=>z0(Nf(e))},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,51.484],h:[0,360]},interpolate:{l:U,c:U,h:{use:U,fixup:Qi},alpha:{use:U,fixup:Yt}},difference:{h:Pf},average:{h:eo}};function zB({h:e,s:t,i:r,alpha:n}){e=mr(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.abs(e/60%2-1),o;switch(Math.floor(e/60)){case 0:o={r:r*(1+t*(3/(2-i)-1)),g:r*(1+t*(3*(1-i)/(2-i)-1)),b:r*(1-t)};break;case 1:o={r:r*(1+t*(3*(1-i)/(2-i)-1)),g:r*(1+t*(3/(2-i)-1)),b:r*(1-t)};break;case 2:o={r:r*(1-t),g:r*(1+t*(3/(2-i)-1)),b:r*(1+t*(3*(1-i)/(2-i)-1))};break;case 3:o={r:r*(1-t),g:r*(1+t*(3*(1-i)/(2-i)-1)),b:r*(1+t*(3/(2-i)-1))};break;case 4:o={r:r*(1+t*(3*(1-i)/(2-i)-1)),g:r*(1-t),b:r*(1+t*(3/(2-i)-1))};break;case 5:o={r:r*(1+t*(3/(2-i)-1)),g:r*(1-t),b:r*(1+t*(3*(1-i)/(2-i)-1))};break;default:o={r:r*(1-t),g:r*(1-t),b:r*(1-t)}}return o.mode="rgb",n!==void 0&&(o.alpha=n),o}function UB({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.max(e,t,r),o=Math.min(e,t,r),s={mode:"hsi",s:e+t+r===0?0:1-3*o/(e+t+r),i:(e+t+r)/3};return i-o!==0&&(s.h=(i===e?(t-r)/(i-o)+(t<r)*6:i===t?(r-e)/(i-o)+2:(e-t)/(i-o)+4)*60),n!==void 0&&(s.alpha=n),s}const qB={mode:"hsi",toMode:{rgb:zB},parse:["--hsi"],serialize:"--hsi",fromMode:{rgb:UB},channels:["h","s","i","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:U,fixup:Qi},s:U,i:U,alpha:{use:U,fixup:Yt}},difference:{h:Ff},average:{h:eo}};function WB({h:e,s:t,l:r,alpha:n}){e=mr(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let i=r+t*(r<.5?r:1-r),o=i-(i-r)*2*Math.abs(e/60%2-1),s;switch(Math.floor(e/60)){case 0:s={r:i,g:o,b:2*r-i};break;case 1:s={r:o,g:i,b:2*r-i};break;case 2:s={r:2*r-i,g:i,b:o};break;case 3:s={r:2*r-i,g:o,b:i};break;case 4:s={r:o,g:2*r-i,b:i};break;case 5:s={r:i,g:2*r-i,b:o};break;default:s={r:2*r-i,g:2*r-i,b:2*r-i}}return s.mode="rgb",n!==void 0&&(s.alpha=n),s}function VB({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.max(e,t,r),o=Math.min(e,t,r),s={mode:"hsl",s:i===o?0:(i-o)/(1-Math.abs(i+o-1)),l:.5*(i+o)};return i-o!==0&&(s.h=(i===e?(t-r)/(i-o)+(t<r)*6:i===t?(r-e)/(i-o)+2:(e-t)/(i-o)+4)*60),n!==void 0&&(s.alpha=n),s}const KB=(e,t)=>{switch(t){case"deg":return+e;case"rad":return e/Math.PI*180;case"grad":return e/10*9;case"turn":return e*360}},HB=new RegExp(`^hsla?\\(\\s*${hB}${Ia}${Yl}${Ia}${Yl}\\s*(?:,\\s*${qp}\\s*)?\\)$`),GB=e=>{let t=e.match(HB);if(!t)return;let r={mode:"hsl"};return t[3]!==void 0?r.h=+t[3]:t[1]!==void 0&&t[2]!==void 0&&(r.h=KB(t[1],t[2])),t[4]!==void 0&&(r.s=Math.min(Math.max(0,t[4]/100),1)),t[5]!==void 0&&(r.l=Math.min(Math.max(0,t[5]/100),1)),t[6]!==void 0?r.alpha=Math.max(0,Math.min(1,t[6]/100)):t[7]!==void 0&&(r.alpha=Math.max(0,Math.min(1,+t[7]))),r};function ZB(e,t){if(!t||t[0]!=="hsl"&&t[0]!=="hsla")return;const r={mode:"hsl"},[,n,i,o,s]=t;if(n.type!==L.None){if(n.type===L.Percentage)return;r.h=n.value}if(i.type!==L.None){if(i.type===L.Hue)return;r.s=i.value/100}if(o.type!==L.None){if(o.type===L.Hue)return;r.l=o.value/100}return s.type!==L.None&&(r.alpha=Math.min(1,Math.max(0,s.type===L.Number?s.value:s.value/100))),r}const _$={mode:"hsl",toMode:{rgb:WB},fromMode:{rgb:VB},channels:["h","s","l","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[ZB,GB],serialize:e=>`hsl(${e.h!==void 0?e.h:"none"} ${e.s!==void 0?e.s*100+"%":"none"} ${e.l!==void 0?e.l*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:U,fixup:Qi},s:U,l:U,alpha:{use:U,fixup:Yt}},difference:{h:Ff},average:{h:eo}};function j$({h:e,s:t,v:r,alpha:n}){e=mr(e!==void 0?e:0),t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.abs(e/60%2-1),o;switch(Math.floor(e/60)){case 0:o={r,g:r*(1-t*i),b:r*(1-t)};break;case 1:o={r:r*(1-t*i),g:r,b:r*(1-t)};break;case 2:o={r:r*(1-t),g:r,b:r*(1-t*i)};break;case 3:o={r:r*(1-t),g:r*(1-t*i),b:r};break;case 4:o={r:r*(1-t*i),g:r*(1-t),b:r};break;case 5:o={r,g:r*(1-t),b:r*(1-t*i)};break;default:o={r:r*(1-t),g:r*(1-t),b:r*(1-t)}}return o.mode="rgb",n!==void 0&&(o.alpha=n),o}function z$({r:e,g:t,b:r,alpha:n}){e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.max(e,t,r),o=Math.min(e,t,r),s={mode:"hsv",s:i===0?0:1-o/i,v:i};return i-o!==0&&(s.h=(i===e?(t-r)/(i-o)+(t<r)*6:i===t?(r-e)/(i-o)+2:(e-t)/(i-o)+4)*60),n!==void 0&&(s.alpha=n),s}const U$={mode:"hsv",toMode:{rgb:j$},parse:["--hsv"],serialize:"--hsv",fromMode:{rgb:z$},channels:["h","s","v","alpha"],ranges:{h:[0,360]},gamut:"rgb",interpolate:{h:{use:U,fixup:Qi},s:U,v:U,alpha:{use:U,fixup:Yt}},difference:{h:Ff},average:{h:eo}};function YB({h:e,w:t,b:r,alpha:n}){if(t===void 0&&(t=0),r===void 0&&(r=0),t+r>1){let i=t+r;t/=i,r/=i}return j$({h:e,s:r===1?1:1-t/(1-r),v:1-r,alpha:n})}function JB(e){let t=z$(e);if(t===void 0)return;let r=t.s!==void 0?t.s:0,n=t.v!==void 0?t.v:0,i={mode:"hwb",w:(1-r)*n,b:1-n};return t.h!==void 0&&(i.h=t.h),t.alpha!==void 0&&(i.alpha=t.alpha),i}function XB(e,t){if(!t||t[0]!=="hwb")return;const r={mode:"hwb"},[,n,i,o,s]=t;if(n.type!==L.None){if(n.type===L.Percentage)return;r.h=n.value}if(i.type!==L.None){if(i.type===L.Hue)return;r.w=i.value/100}if(o.type!==L.None){if(o.type===L.Hue)return;r.b=o.value/100}return s.type!==L.None&&(r.alpha=Math.min(1,Math.max(0,s.type===L.Number?s.value:s.value/100))),r}const QB={mode:"hwb",toMode:{rgb:YB},fromMode:{rgb:JB},channels:["h","w","b","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[XB],serialize:e=>`hwb(${e.h!==void 0?e.h:"none"} ${e.w!==void 0?e.w*100+"%":"none"} ${e.b!==void 0?e.b*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:U,fixup:Qi},w:U,b:U,alpha:{use:U,fixup:Yt}},difference:{h:RB},average:{h:eo}},q$=203,Of=.1593017578125,W$=78.84375,Rf=.8359375,Bf=18.8515625,Lf=18.6875;function um(e){if(e<0)return 0;const t=Math.pow(e,1/W$);return 1e4*Math.pow(Math.max(0,t-Rf)/(Bf-Lf*t),1/Of)}function cm(e){if(e<0)return 0;const t=Math.pow(e/1e4,Of);return Math.pow((Rf+Bf*t)/(1+Lf*t),W$)}const dm=e=>Math.max(e/q$,0),qv=({i:e,t,p:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const i=um(e+.008609037037932761*t+.11102962500302593*r),o=um(e-.00860903703793275*t-.11102962500302599*r),s=um(e+.5600313357106791*t-.32062717498731885*r),a={mode:"xyz65",x:dm(2.070152218389422*i-1.3263473389671556*o+.2066510476294051*s),y:dm(.3647385209748074*i+.680566024947227*o-.0453045459220346*s),z:dm(-.049747207535812*i-.0492609666966138*o+1.1880659249923042*s)};return n!==void 0&&(a.alpha=n),a},fm=(e=0)=>Math.max(e*q$,0),Wv=({x:e,y:t,z:r,alpha:n})=>{const i=fm(e),o=fm(t),s=fm(r),a=cm(.3592832590121217*i+.6976051147779502*o-.0358915932320289*s),l=cm(-.1920808463704995*i+1.1004767970374323*o+.0753748658519118*s),u=cm(.0070797844607477*i+.0748396662186366*o+.8433265453898765*s),d=.5*a+.5*l,f=1.61376953125*a-3.323486328125*l+1.709716796875*u,h=4.378173828125*a-4.24560546875*l-.132568359375*u,g={mode:"itp",i:d,t:f,p:h};return n!==void 0&&(g.alpha=n),g},eL={mode:"itp",channels:["i","t","p","alpha"],parse:["--ictcp"],serialize:"--ictcp",toMode:{xyz65:qv,rgb:e=>Is(qv(e))},fromMode:{xyz65:Wv,rgb:e=>Wv(Ps(e))},ranges:{i:[0,.581],t:[-.369,.272],p:[-.164,.331]},interpolate:{i:U,t:U,p:U,alpha:{use:U,fixup:Yt}}},tL=134.03437499999998,rL=16295499532821565e-27,hm=e=>{if(e<0)return 0;let t=Math.pow(e/1e4,Of);return Math.pow((Rf+Bf*t)/(1+Lf*t),tL)},mm=(e=0)=>Math.max(e*203,0),V$=({x:e,y:t,z:r,alpha:n})=>{e=mm(e),t=mm(t),r=mm(r);let i=1.15*e-.15*r,o=.66*t+.34*e,s=hm(.41478972*i+.579999*o+.014648*r),a=hm(-.20151*i+1.120649*o+.0531008*r),l=hm(-.0166008*i+.2648*o+.6684799*r),u=(s+a)/2,d={mode:"jab",j:.44*u/(1-.56*u)-rL,a:3.524*s-4.066708*a+.542708*l,b:.199076*s+1.096799*a-1.295875*l};return n!==void 0&&(d.alpha=n),d},nL=134.03437499999998,Vv=16295499532821565e-27,gm=e=>{if(e<0)return 0;let t=Math.pow(e,1/nL);return 1e4*Math.pow((Rf-t)/(Lf*t-Bf),1/Of)},pm=e=>e/203,K$=({j:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=(e+Vv)/(.44+.56*(e+Vv)),o=gm(i+.13860504*t+.058047316*r),s=gm(i-.13860504*t-.058047316*r),a=gm(i-.096019242*t-.8118919*r),l={mode:"xyz65",x:pm(1.661373024652174*o-.914523081304348*s+.23136208173913045*a),y:pm(-.3250758611844533*o+1.571847026732543*s-.21825383453227928*a),z:pm(-.090982811*o-.31272829*s+1.5227666*a)};return n!==void 0&&(l.alpha=n),l},H$=e=>{let t=V$(Ps(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},G$=e=>Is(K$(e)),iL={mode:"jab",channels:["j","a","b","alpha"],parse:["--jzazbz"],serialize:"--jzazbz",fromMode:{rgb:H$,xyz65:V$},toMode:{rgb:G$,xyz65:K$},ranges:{j:[0,.222],a:[-.109,.129],b:[-.185,.134]},interpolate:{j:U,a:U,b:U,alpha:{use:U,fixup:Yt}}},Kv=({j:e,a:t,b:r,alpha:n})=>{t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.sqrt(t*t+r*r),o={mode:"jch",j:e,c:i};return i&&(o.h=mr(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(o.alpha=n),o},Hv=({j:e,c:t,h:r,alpha:n})=>{r===void 0&&(r=0);let i={mode:"jab",j:e,a:t?t*Math.cos(r/180*Math.PI):0,b:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(i.alpha=n),i},oL={mode:"jch",parse:["--jzczhz"],serialize:"--jzczhz",toMode:{jab:Hv,rgb:e=>G$(Hv(e))},fromMode:{rgb:e=>Kv(H$(e)),jab:Kv},channels:["j","c","h","alpha"],ranges:{j:[0,.221],c:[0,.19],h:[0,360]},interpolate:{h:{use:U,fixup:Qi},c:U,j:U,alpha:{use:U,fixup:Yt}},difference:{h:Pf},average:{h:eo}},_f=Math.pow(29,3)/Math.pow(3,3),Wp=Math.pow(6,3)/Math.pow(29,3);let bm=e=>Math.pow(e,3)>Wp?Math.pow(e,3):(116*e-16)/_f;const Vp=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=(e+16)/116,o=t/500+i,s=i-r/200,a={mode:"xyz50",x:bm(o)*Rt.X,y:bm(i)*Rt.Y,z:bm(s)*Rt.Z};return n!==void 0&&(a.alpha=n),a},Wu=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=nl({r:e*3.1341359569958707-t*1.6173863321612538-.4906619460083532*r,g:e*-.978795502912089+t*1.916254567259524+.03344273116131949*r,b:e*.07195537988411677-t*.2289768264158322+1.405386058324125*r});return n!==void 0&&(i.alpha=n),i},Z$=e=>Wu(Vp(e)),Vu=e=>{let{r:t,g:r,b:n,alpha:i}=rl(e),o={mode:"xyz50",x:.436065742824811*t+.3851514688337912*r+.14307845442264197*n,y:.22249319175623702*t+.7168870538238823*r+.06061979053616537*n,z:.013923904500943465*t+.09708128566574634*r+.7140993584005155*n};return i!==void 0&&(o.alpha=i),o},ym=e=>e>Wp?Math.cbrt(e):(_f*e+16)/116,Kp=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=ym(e/Rt.X),o=ym(t/Rt.Y),s=ym(r/Rt.Z),a={mode:"lab",l:116*o-16,a:500*(i-o),b:200*(o-s)};return n!==void 0&&(a.alpha=n),a},Y$=e=>{let t=Kp(Vu(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t};function sL(e,t){if(!t||t[0]!=="lab")return;const r={mode:"lab"},[,n,i,o,s]=t;if(!(n.type===L.Hue||i.type===L.Hue||o.type===L.Hue))return n.type!==L.None&&(r.l=Math.min(Math.max(0,n.value),100)),i.type!==L.None&&(r.a=i.type===L.Number?i.value:i.value*125/100),o.type!==L.None&&(r.b=o.type===L.Number?o.value:o.value*125/100),s.type!==L.None&&(r.alpha=Math.min(1,Math.max(0,s.type===L.Number?s.value:s.value/100))),r}const Hp={mode:"lab",toMode:{xyz50:Vp,rgb:Z$},fromMode:{xyz50:Kp,rgb:Y$},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[sL],serialize:e=>`lab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{l:U,a:U,b:U,alpha:{use:U,fixup:Yt}}},aL={...Hp,mode:"lab65",parse:["--lab-d65"],serialize:"--lab-d65",toMode:{xyz65:O$,rgb:If},fromMode:{xyz65:R$,rgb:Nf},ranges:{l:[0,100],a:[-125,125],b:[-125,125]}};function lL(e,t){if(!t||t[0]!=="lch")return;const r={mode:"lch"},[,n,i,o,s]=t;if(n.type!==L.None){if(n.type===L.Hue)return;r.l=Math.min(Math.max(0,n.value),100)}if(i.type!==L.None&&(r.c=Math.max(0,i.type===L.Number?i.value:i.value*150/100)),o.type!==L.None){if(o.type===L.Percentage)return;r.h=o.value}return s.type!==L.None&&(r.alpha=Math.min(1,Math.max(0,s.type===L.Number?s.value:s.value/100))),r}const Gp={mode:"lch",toMode:{lab:To,rgb:e=>Z$(To(e))},fromMode:{rgb:e=>So(Y$(e)),lab:So},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,150],h:[0,360]},parse:[lL],serialize:e=>`lch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:U,fixup:Qi},c:U,l:U,alpha:{use:U,fixup:Yt}},difference:{h:Pf},average:{h:eo}},uL={...Gp,mode:"lch65",parse:["--lch-d65"],serialize:"--lch-d65",toMode:{lab65:e=>To(e,"lab65"),rgb:e=>If(To(e,"lab65"))},fromMode:{rgb:e=>So(Nf(e),"lch65"),lab65:e=>So(e,"lch65")},ranges:{l:[0,100],c:[0,150],h:[0,360]}},J$=({l:e,u:t,v:r,alpha:n})=>{t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.sqrt(t*t+r*r),o={mode:"lchuv",l:e,c:i};return i&&(o.h=mr(Math.atan2(r,t)*180/Math.PI)),n!==void 0&&(o.alpha=n),o},X$=({l:e,c:t,h:r,alpha:n})=>{r===void 0&&(r=0);let i={mode:"luv",l:e,u:t?t*Math.cos(r/180*Math.PI):0,v:t?t*Math.sin(r/180*Math.PI):0};return n!==void 0&&(i.alpha=n),i},Q$=(e,t,r)=>4*e/(e+15*t+3*r),e3=(e,t,r)=>9*t/(e+15*t+3*r),cL=Q$(Rt.X,Rt.Y,Rt.Z),dL=e3(Rt.X,Rt.Y,Rt.Z),fL=e=>e<=Wp?_f*e:116*Math.cbrt(e)-16,U0=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=fL(t/Rt.Y),o=Q$(e,t,r),s=e3(e,t,r);!isFinite(o)||!isFinite(s)?i=o=s=0:(o=13*i*(o-cL),s=13*i*(s-dL));let a={mode:"luv",l:i,u:o,v:s};return n!==void 0&&(a.alpha=n),a},hL=(e,t,r)=>4*e/(e+15*t+3*r),mL=(e,t,r)=>9*t/(e+15*t+3*r),gL=hL(Rt.X,Rt.Y,Rt.Z),pL=mL(Rt.X,Rt.Y,Rt.Z),q0=({l:e,u:t,v:r,alpha:n})=>{if(e===void 0&&(e=0),e===0)return{mode:"xyz50",x:0,y:0,z:0};t===void 0&&(t=0),r===void 0&&(r=0);let i=t/(13*e)+gL,o=r/(13*e)+pL,s=Rt.Y*(e<=8?e/_f:Math.pow((e+16)/116,3)),a=s*(9*i)/(4*o),l=s*(12-3*i-20*o)/(4*o),u={mode:"xyz50",x:a,y:s,z:l};return n!==void 0&&(u.alpha=n),u},bL=e=>J$(U0(Vu(e))),yL=e=>Wu(q0(X$(e))),vL={mode:"lchuv",toMode:{luv:X$,rgb:yL},fromMode:{rgb:bL,luv:J$},channels:["l","c","h","alpha"],parse:["--lchuv"],serialize:"--lchuv",ranges:{l:[0,100],c:[0,176.956],h:[0,360]},interpolate:{h:{use:U,fixup:Qi},c:U,l:U,alpha:{use:U,fixup:Yt}},difference:{h:Pf},average:{h:eo}},wL={...tl,mode:"lrgb",toMode:{rgb:nl},fromMode:{rgb:rl},parse:["srgb-linear"],serialize:"srgb-linear"},kL={mode:"luv",toMode:{xyz50:q0,rgb:e=>Wu(q0(e))},fromMode:{xyz50:U0,rgb:e=>U0(Vu(e))},channels:["l","u","v","alpha"],parse:["--luv"],serialize:"--luv",ranges:{l:[0,100],u:[-84.936,175.042],v:[-125.882,87.243]},interpolate:{l:U,u:U,v:U,alpha:{use:U,fixup:Yt}}},t3=({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.cbrt(.412221469470763*e+.5363325372617348*t+.0514459932675022*r),o=Math.cbrt(.2119034958178252*e+.6806995506452344*t+.1073969535369406*r),s=Math.cbrt(.0883024591900564*e+.2817188391361215*t+.6299787016738222*r),a={mode:"oklab",l:.210454268309314*i+.7936177747023054*o-.0040720430116193*s,a:1.9779985324311684*i-2.42859224204858*o+.450593709617411*s,b:.0259040424655478*i+.7827717124575296*o-.8086757549230774*s};return n!==void 0&&(a.alpha=n),a},jf=e=>{let t=t3(rl(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},Ku=({l:e,a:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=Math.pow(e+.3963377773761749*t+.2158037573099136*r,3),o=Math.pow(e-.1055613458156586*t-.0638541728258133*r,3),s=Math.pow(e-.0894841775298119*t-1.2914855480194092*r,3),a={mode:"lrgb",r:4.076741636075957*i-3.3077115392580616*o+.2309699031821044*s,g:-1.2684379732850317*i+2.6097573492876887*o-.3413193760026573*s,b:-.0041960761386756*i-.7034186179359362*o+1.7076146940746117*s};return n!==void 0&&(a.alpha=n),a},zf=e=>nl(Ku(e));function W0(e){const n=1.170873786407767;return .5*(n*e-.206+Math.sqrt((n*e-.206)*(n*e-.206)+4*.03*n*e))}function Sd(e){return(e*e+.206*e)/(1.170873786407767*(e+.03))}function xL(e,t){let r,n,i,o,s,a,l,u;-1.88170328*e-.80936493*t>1?(r=1.19086277,n=1.76576728,i=.59662641,o=.75515197,s=.56771245,a=4.0767416621,l=-3.3077115913,u=.2309699292):1.81444104*e-1.19445276*t>1?(r=.73956515,n=-.45954404,i=.08285427,o=.1254107,s=.14503204,a=-1.2684380046,l=2.6097574011,u=-.3413193965):(r=1.35733652,n=-.00915799,i=-1.1513021,o=-.50559606,s=.00692167,a=-.0041960863,l=-.7034186147,u=1.707614701);let d=r+n*e+i*t+o*e*e+s*e*t,f=.3963377774*e+.2158037573*t,h=-.1055613458*e-.0638541728*t,g=-.0894841775*e-1.291485548*t;{let m=1+d*f,b=1+d*h,y=1+d*g,x=m*m*m,D=b*b*b,C=y*y*y,P=3*f*m*m,O=3*h*b*b,H=3*g*y*y,ee=6*f*f*m,oe=6*h*h*b,X=6*g*g*y,ye=a*x+l*D+u*C,ae=a*P+l*O+u*H,$e=a*ee+l*oe+u*X;d=d-ye*ae/(ae*ae-.5*ye*$e)}return d}function Zp(e,t){let r=xL(e,t),n=Ku({l:1,a:r*e,b:r*t}),i=Math.cbrt(1/Math.max(n.r,n.g,n.b)),o=i*r;return[i,o]}function $L(e,t,r,n,i,o=null){o||(o=Zp(e,t));let s;if((r-i)*o[1]-(o[0]-i)*n<=0)s=o[1]*i/(n*o[0]+o[1]*(i-r));else{s=o[1]*(i-1)/(n*(o[0]-1)+o[1]*(i-r));{let a=r-i,l=n,u=.3963377774*e+.2158037573*t,d=-.1055613458*e-.0638541728*t,f=-.0894841775*e-1.291485548*t,h=a+l*u,g=a+l*d,m=a+l*f;{let b=i*(1-s)+s*r,y=s*n,x=b+y*u,D=b+y*d,C=b+y*f,P=x*x*x,O=D*D*D,H=C*C*C,ee=3*h*x*x,oe=3*g*D*D,X=3*m*C*C,ye=6*h*h*x,ae=6*g*g*D,$e=6*m*m*C,Ue=4.0767416621*P-3.3077115913*O+.2309699292*H-1,Ge=4.0767416621*ee-3.3077115913*oe+.2309699292*X,yr=4.0767416621*ye-3.3077115913*ae+.2309699292*$e,Ct=Ge/(Ge*Ge-.5*Ue*yr),Sn=-Ue*Ct,Tn=-1.2684380046*P+2.6097574011*O-.3413193965*H-1,Ur=-1.2684380046*ee+2.6097574011*oe-.3413193965*X,St=-1.2684380046*ye+2.6097574011*ae-.3413193965*$e,me=Ur/(Ur*Ur-.5*Tn*St),vt=-Tn*me,Ze=-.0041960863*P-.7034186147*O+1.707614701*H-1,zt=-.0041960863*ee-.7034186147*oe+1.707614701*X,Be=-.0041960863*ye-.7034186147*ae+1.707614701*$e,sr=zt/(zt*zt-.5*Ze*Be),nn=-Ze*sr;Sn=Ct>=0?Sn:1e6,vt=me>=0?vt:1e6,nn=sr>=0?nn:1e6,s+=Math.min(Sn,Math.min(vt,nn))}}}return s}function Yp(e,t,r=null){r||(r=Zp(e,t));let n=r[0],i=r[1];return[i/n,i/(1-n)]}function r3(e,t,r){let n=Zp(t,r),i=$L(t,r,e,1,e,n),o=Yp(t,r,n),s=.11516993+1/(7.4477897+4.1590124*r+t*(-2.19557347+1.75198401*r+t*(-2.13704948-10.02301043*r+t*(-4.24894561+5.38770819*r+4.69891013*t)))),a=.11239642+1/(1.6132032-.68124379*r+t*(.40370612+.90148123*r+t*(-.27087943+.6122399*r+t*(.00299215-.45399568*r-.14661872*t)))),l=i/Math.min(e*o[0],(1-e)*o[1]),u=e*s,d=(1-e)*a,f=.9*l*Math.sqrt(Math.sqrt(1/(1/(u*u*u*u)+1/(d*d*d*d))));return u=e*.4,d=(1-e)*.8,[Math.sqrt(1/(1/(u*u)+1/(d*d))),f,i]}function Gv(e){const t=e.l!==void 0?e.l:0,r=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,i={mode:"okhsl",l:W0(t)};e.alpha!==void 0&&(i.alpha=e.alpha);let o=Math.sqrt(r*r+n*n);if(!o)return i.s=0,i;let[s,a,l]=r3(t,r/o,n/o),u;if(o<a){let d=0,f=.8*s,h=1-f/a;u=(o-d)/(f+h*(o-d))*.8}else{let d=a,f=.2*a*a*1.25*1.25/s,h=1-f/(l-a);u=.8+.2*((o-d)/(f+h*(o-d)))}return u&&(i.s=u,i.h=mr(Math.atan2(n,r)*180/Math.PI)),i}function Zv(e){let t=e.h!==void 0?e.h:0,r=e.s!==void 0?e.s:0,n=e.l!==void 0?e.l:0;const i={mode:"oklab",l:Sd(n)};if(e.alpha!==void 0&&(i.alpha=e.alpha),!r||n===1)return i.a=i.b=0,i;let o=Math.cos(t/180*Math.PI),s=Math.sin(t/180*Math.PI),[a,l,u]=r3(i.l,o,s),d,f,h,g;r<.8?(d=1.25*r,f=0,h=.8*a,g=1-h/l):(d=5*(r-.8),f=l,h=.2*l*l*1.25*1.25/a,g=1-h/(u-l));let m=f+d*h/(1-g*d);return i.a=m*o,i.b=m*s,i}const DL={..._$,mode:"okhsl",channels:["h","s","l","alpha"],parse:["--okhsl"],serialize:"--okhsl",fromMode:{oklab:Gv,rgb:e=>Gv(jf(e))},toMode:{oklab:Zv,rgb:e=>zf(Zv(e))}};function Yv(e){let t=e.l!==void 0?e.l:0,r=e.a!==void 0?e.a:0,n=e.b!==void 0?e.b:0,i=Math.sqrt(r*r+n*n),o=i?r/i:1,s=i?n/i:1,[a,l]=Yp(o,s),u=.5,d=1-u/a,f=l/(i+t*l),h=f*t,g=f*i,m=Sd(h),b=g*m/h,y=Ku({l:m,a:o*b,b:s*b}),x=Math.cbrt(1/Math.max(y.r,y.g,y.b,0));t=t/x,i=i/x*W0(t)/t,t=W0(t);const D={mode:"okhsv",s:i?(u+l)*g/(l*u+l*d*g):0,v:t?t/h:0};return D.s&&(D.h=mr(Math.atan2(n,r)*180/Math.PI)),e.alpha!==void 0&&(D.alpha=e.alpha),D}function Jv(e){const t={mode:"oklab"};e.alpha!==void 0&&(t.alpha=e.alpha);const r=e.h!==void 0?e.h:0,n=e.s!==void 0?e.s:0,i=e.v!==void 0?e.v:0,o=Math.cos(r/180*Math.PI),s=Math.sin(r/180*Math.PI),[a,l]=Yp(o,s),u=.5,d=1-u/a,f=1-n*u/(u+l-l*d*n),h=n*l*u/(u+l-l*d*n),g=Sd(f),m=h*g/f,b=Ku({l:g,a:o*m,b:s*m}),y=Math.cbrt(1/Math.max(b.r,b.g,b.b,0)),x=Sd(i*f),D=h*x/f;return t.l=x*y,t.a=D*o*y,t.b=D*s*y,t}const AL={...U$,mode:"okhsv",channels:["h","s","v","alpha"],parse:["--okhsv"],serialize:"--okhsv",fromMode:{oklab:Yv,rgb:e=>Yv(jf(e))},toMode:{oklab:Jv,rgb:e=>zf(Jv(e))}};function EL(e,t){if(!t||t[0]!=="oklab")return;const r={mode:"oklab"},[,n,i,o,s]=t;if(!(n.type===L.Hue||i.type===L.Hue||o.type===L.Hue))return n.type!==L.None&&(r.l=Math.min(Math.max(0,n.type===L.Number?n.value:n.value/100),1)),i.type!==L.None&&(r.a=i.type===L.Number?i.value:i.value*.4/100),o.type!==L.None&&(r.b=o.type===L.Number?o.value:o.value*.4/100),s.type!==L.None&&(r.alpha=Math.min(1,Math.max(0,s.type===L.Number?s.value:s.value/100))),r}const CL={...Hp,mode:"oklab",toMode:{lrgb:Ku,rgb:zf},fromMode:{lrgb:t3,rgb:jf},ranges:{l:[0,1],a:[-.4,.4],b:[-.4,.4]},parse:[EL],serialize:e=>`oklab(${e.l!==void 0?e.l:"none"} ${e.a!==void 0?e.a:"none"} ${e.b!==void 0?e.b:"none"}${e.alpha<1?` / ${e.alpha}`:""})`};function SL(e,t){if(!t||t[0]!=="oklch")return;const r={mode:"oklch"},[,n,i,o,s]=t;if(n.type!==L.None){if(n.type===L.Hue)return;r.l=Math.min(Math.max(0,n.type===L.Number?n.value:n.value/100),1)}if(i.type!==L.None&&(r.c=Math.max(0,i.type===L.Number?i.value:i.value*.4/100)),o.type!==L.None){if(o.type===L.Percentage)return;r.h=o.value}return s.type!==L.None&&(r.alpha=Math.min(1,Math.max(0,s.type===L.Number?s.value:s.value/100))),r}const TL={...Gp,mode:"oklch",toMode:{oklab:e=>To(e,"oklab"),rgb:e=>zf(To(e,"oklab"))},fromMode:{rgb:e=>So(jf(e),"oklch"),oklab:e=>So(e,"oklch")},parse:[SL],serialize:e=>`oklch(${e.l!==void 0?e.l:"none"} ${e.c!==void 0?e.c:"none"} ${e.h!==void 0?e.h:"none"}${e.alpha<1?` / ${e.alpha}`:""})`,ranges:{l:[0,1],c:[0,.4],h:[0,360]}},Xv=e=>{let{r:t,g:r,b:n,alpha:i}=rl(e),o={mode:"xyz65",x:.486570948648216*t+.265667693169093*r+.1982172852343625*n,y:.2289745640697487*t+.6917385218365062*r+.079286914093745*n,z:0*t+.0451133818589026*r+1.043944368900976*n};return i!==void 0&&(o.alpha=i),o},Qv=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i=nl({r:e*2.4934969119414263-t*.9313836179191242-.402710784450717*r,g:e*-.8294889695615749+t*1.7626640603183465+.0236246858419436*r,b:e*.0358458302437845-t*.0761723892680418+.9568845240076871*r},"p3");return n!==void 0&&(i.alpha=n),i},ML={...tl,mode:"p3",parse:["display-p3"],serialize:"display-p3",fromMode:{rgb:e=>Qv(Ps(e)),xyz65:Qv},toMode:{rgb:e=>Is(Xv(e)),xyz65:Xv}},vm=e=>{let t=Math.abs(e);return t>=1/512?Math.sign(e)*Math.pow(t,1/1.8):16*e},e2=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i={mode:"prophoto",r:vm(e*1.3457868816471585-t*.2555720873797946-.0511018649755453*r),g:vm(e*-.5446307051249019+t*1.5082477428451466+.0205274474364214*r),b:vm(e*0+t*0+1.2119675456389452*r)};return n!==void 0&&(i.alpha=n),i},wm=(e=0)=>{let t=Math.abs(e);return t>=16/512?Math.sign(e)*Math.pow(t,1.8):e/16},t2=e=>{let t=wm(e.r),r=wm(e.g),n=wm(e.b),i={mode:"xyz50",x:.7977666449006423*t+.1351812974005331*r+.0313477341283922*n,y:.2880748288194013*t+.7118352342418731*r+899369387256e-16*n,z:0*t+0*r+.8251046025104602*n};return e.alpha!==void 0&&(i.alpha=e.alpha),i},FL={...tl,mode:"prophoto",parse:["prophoto-rgb"],serialize:"prophoto-rgb",fromMode:{xyz50:e2,rgb:e=>e2(Vu(e))},toMode:{xyz50:t2,rgb:e=>Wu(t2(e))}},r2=1.09929682680944,PL=.018053968510807,km=e=>{const t=Math.abs(e);return t>PL?(Math.sign(e)||1)*(r2*Math.pow(t,.45)-(r2-1)):4.5*e},n2=({x:e,y:t,z:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);let i={mode:"rec2020",r:km(e*1.7166511879712683-t*.3556707837763925-.2533662813736599*r),g:km(e*-.6666843518324893+t*1.6164812366349395+.0157685458139111*r),b:km(e*.0176398574453108-t*.0427706132578085+.9421031212354739*r)};return n!==void 0&&(i.alpha=n),i},i2=1.09929682680944,IL=.018053968510807,xm=(e=0)=>{let t=Math.abs(e);return t<IL*4.5?e/4.5:(Math.sign(e)||1)*Math.pow((t+i2-1)/i2,1/.45)},o2=e=>{let t=xm(e.r),r=xm(e.g),n=xm(e.b),i={mode:"xyz65",x:.6369580483012911*t+.1446169035862083*r+.1688809751641721*n,y:.262700212011267*t+.6779980715188708*r+.059301716469862*n,z:0*t+.0280726930490874*r+1.0609850577107909*n};return e.alpha!==void 0&&(i.alpha=e.alpha),i},NL={...tl,mode:"rec2020",fromMode:{xyz65:n2,rgb:e=>n2(Ps(e))},toMode:{xyz65:o2,rgb:e=>Is(o2(e))},parse:["rec2020"],serialize:"rec2020"},cs=.0037930732552754493,n3=Math.cbrt(cs),$m=e=>Math.cbrt(e)-n3,OL=e=>{const{r:t,g:r,b:n,alpha:i}=rl(e),o=$m(.3*t+.622*r+.078*n+cs),s=$m(.23*t+.692*r+.078*n+cs),a=$m(.2434226892454782*t+.2047674442449682*r+.5518098665095535*n+cs),l={mode:"xyb",x:(o-s)/2,y:(o+s)/2,b:a-(o+s)/2};return i!==void 0&&(l.alpha=i),l},Dm=e=>Math.pow(e+n3,3),RL=({x:e,y:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const i=Dm(e+t)-cs,o=Dm(t-e)-cs,s=Dm(r+t)-cs,a=nl({r:11.031566904639861*i-9.866943908131562*o-.16462299650829934*s,g:-3.2541473810744237*i+4.418770377582723*o-.16462299650829934*s,b:-3.6588512867136815*i+2.7129230459360922*o+1.9459282407775895*s});return n!==void 0&&(a.alpha=n),a},BL={mode:"xyb",channels:["x","y","b","alpha"],parse:["--xyb"],serialize:"--xyb",toMode:{rgb:RL},fromMode:{rgb:OL},ranges:{x:[-.0154,.0281],y:[0,.8453],b:[-.2778,.388]},interpolate:{x:U,y:U,b:U,alpha:{use:U,fixup:Yt}}},LL={mode:"xyz50",parse:["xyz-d50"],serialize:"xyz-d50",toMode:{rgb:Wu,lab:Kp},fromMode:{rgb:Vu,lab:Vp},channels:["x","y","z","alpha"],ranges:{x:[0,.964],y:[0,.999],z:[0,.825]},interpolate:{x:U,y:U,z:U,alpha:{use:U,fixup:Yt}}},_L=e=>{let{x:t,y:r,z:n,alpha:i}=e;t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=0);let o={mode:"xyz50",x:1.0479298208405488*t+.0229467933410191*r-.0501922295431356*n,y:.0296278156881593*t+.990434484573249*r-.0170738250293851*n,z:-.0092430581525912*t+.0150551448965779*r+.7518742899580008*n};return i!==void 0&&(o.alpha=i),o},jL=e=>{let{x:t,y:r,z:n,alpha:i}=e;t===void 0&&(t=0),r===void 0&&(r=0),n===void 0&&(n=0);let o={mode:"xyz65",x:.9554734527042182*t-.0230985368742614*r+.0632593086610217*n,y:-.0283697069632081*t+1.0099954580058226*r+.021041398966943*n,z:.0123140016883199*t-.0205076964334779*r+1.3303659366080753*n};return i!==void 0&&(o.alpha=i),o},zL={mode:"xyz65",toMode:{rgb:Is,xyz50:_L},fromMode:{rgb:Ps,xyz50:jL},ranges:{x:[0,.95],y:[0,1],z:[0,1.088]},channels:["x","y","z","alpha"],parse:["xyz","xyz-d65"],serialize:"xyz-d65",interpolate:{x:U,y:U,z:U,alpha:{use:U,fixup:Yt}}},UL=({r:e,g:t,b:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const i={mode:"yiq",y:.29889531*e+.58662247*t+.11448223*r,i:.59597799*e-.2741761*t-.32180189*r,q:.21147017*e-.52261711*t+.31114694*r};return n!==void 0&&(i.alpha=n),i},qL=({y:e,i:t,q:r,alpha:n})=>{e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=0);const i={mode:"rgb",r:e+.95608445*t+.6208885*r,g:e-.27137664*t-.6486059*r,b:e-1.10561724*t+1.70250126*r};return n!==void 0&&(i.alpha=n),i},WL={mode:"yiq",toMode:{rgb:qL},fromMode:{rgb:UL},channels:["y","i","q","alpha"],parse:["--yiq"],serialize:"--yiq",ranges:{i:[-.595,.595],q:[-.522,.522]},interpolate:{y:U,i:U,q:U,alpha:{use:U,fixup:Yt}}},VL=e=>Math.max(0,Math.min(1,e||0)),Am=e=>Math.round(VL(e)*255),KL=bs("rgb"),HL=e=>{if(e===void 0)return;let t=Am(e.r),r=Am(e.g),n=Am(e.b);return"#"+(1<<24|t<<16|r<<8|n).toString(16).slice(1)},GL=e=>HL(KL(e)),ZL=e=>{const t={mode:e.mode,r:Math.max(0,Math.min(e.r!==void 0?e.r:0,1)),g:Math.max(0,Math.min(e.g!==void 0?e.g:0,1)),b:Math.max(0,Math.min(e.b!==void 0?e.b:0,1))};return e.alpha!==void 0&&(t.alpha=e.alpha),t},YL=e=>e!==void 0&&(e.r===void 0||e.r>=0&&e.r<=1)&&(e.g===void 0||e.g>=0&&e.g<=1)&&(e.b===void 0||e.b>=0&&e.b<=1);function JL(e="rgb"){const{gamut:t}=Mf(e);if(!t)return n=>!0;const r=bs(typeof t=="string"?t:e);return n=>YL(r(n))}function XL(e="rgb"){const{gamut:t}=Mf(e);if(!t)return o=>R0(o);const r=typeof t=="string"?t:e,n=bs(r),i=JL(r);return o=>{const s=R0(o);if(!s)return;const a=n(s);if(i(a))return s;const l=ZL(a);return s.mode===l.mode?l:bs(s.mode)(l)}}Xe(MB);Xe(LB);Xe(_B);Xe(jB);Xe(qB);Xe(_$);Xe(U$);Xe(QB);Xe(eL);Xe(iL);Xe(oL);Xe(Hp);Xe(aL);Xe(Gp);Xe(uL);Xe(vL);Xe(wL);Xe(kL);Xe(DL);Xe(AL);Xe(CL);Xe(TL);Xe(ML);Xe(FL);Xe(NL);Xe(tl);Xe(BL);Xe(LL);Xe(zL);Xe(WL);const QL=BB("rgb");class Ki{constructor(t){this.set(t)}static isValidColorString(t){try{return new Ki(t),!0}catch{return!1}}static isColor(t){return t instanceof Ki}static deserialize(t){const r=JSON.parse(t),n=new Ki("black");return ki(r).forEach(([i,o])=>{i==="originalColorSyntax"?n.originalColorSyntax=Vt.isEnumValue(o,Me,"Cannot deserialize: invalid color syntax."):n._allColors[i]=o}),n}getRgbDistance(t){return QL(this.#e,t)}getClosestNamedColor(){return tt(bu).reduce((t,r)=>{const n=this.getRgbDistance(r);return n<t.distance?{distance:n,name:r}:t},{name:"",distance:1/0}).name}toString(){return this.toCss()[this.originalColorSyntax]}originalColorSyntax=Me.hex;#e=Vt.isDefined(_0("black"));_allColors={names:["black"],[Me.name]:"black",hexString:"#000000",[Me.hex]:{r:0,g:0,b:0},[Me.rgb]:{r:0,g:0,b:0},[Me.hsl]:{h:0,s:0,l:0},[Me.hwb]:{h:0,w:0,b:0},[Me.lab]:{l:0,a:0,b:0},[Me.lch]:{l:0,c:0,h:0},[Me.oklab]:{l:0,a:0,b:0},[Me.oklch]:{l:0,c:0,h:0}};clone(){return Ki.deserialize(this.serialize())}setByString(t){const r=_0(t);if(!r)throw new Error(`Unable to parse invalid color string: '${t}'`);this.originalColorSyntax=sB(t),this.#e=r,this.pullFromInternalColor()}set(t){if(T.isString(t))return this.setByString(t);if(Nt.isLengthExactly(Object.keys(t),1,`Cannot set multiple color formats at once: got '${WE(Object.keys(t))}'`),t.hexString||t.name)this.setByString(t.hexString||t.name);else{const[r,n]=Vt.isDefined(ki(t)[0]),i=yi[r],o=Object.values(ut(i.coords,s=>{const a=n[s],l=i.coords[Vt.isKeyOf(s,i.coords)],u=a!=null&&a>=l.min&&a<=l.max?n[s]:this[r][s];return Vt.isDefined(u)}));this.setByString(`${i.conversionFormat}(${o.join(" ")})`)}}pullFromInternalColor(){dn(Co).forEach(t=>{const r=yi[t],n=r.conversionFormat,i=T.isKeyOf(this.#e.mode,yi)?yi[this.#e.mode]:void 0,o=XL(r.colorSpace===i?.colorSpace?n:"rgb")(bs(n)(this.#e));o||Nt.never(`Failed to convert color '${JSON.stringify(this.#e)}' to '${t}'.`),tt(this[t]).forEach(s=>{const a=o[s],l=r.coords[Vt.isKeyOf(s,r.coords)];a!=null&&(this._allColors[t][s]=RE((a||0)*(l.factor||1),{digits:l.digits||0}))})}),this._allColors.hexString=GL(this.#e),this._allColors.names=e_(this.rgb),this._allColors[Me.name]=this._allColors.names[0]||""}serialize(){return JSON.stringify({...this.allColors,originalColorSyntax:this.originalColorSyntax})}get allColors(){return Hn(this._allColors)}toFormattedStrings(){return{...ut(yi,r=>Object.values(this[r]).map(i=>String(i).padStart(6," ")).join(" ")),names:this.names.join(", ").padEnd(Ov," "),[Me.name]:(this.names[0]||"").padEnd(Ov," "),[Me.hexString]:this[Me.hexString]}}toCss(){return{...ut(yi,r=>{const n=Object.values(this[r]);return`${r}(${n.join(" ")})`}),[Me.hexString]:this[Me.hexString],[Me.name]:this.names[0]||""}}get names(){return Hn(this._allColors.names)}get name(){return this._allColors.names[0]||""}get hexString(){return this._allColors[Me.hexString]}get hex(){return Hn(this._allColors[Me.hex])}get rgb(){return Hn(this._allColors[Me.rgb])}get hsl(){return Hn(this._allColors[Me.hsl])}get hwb(){return Hn(this._allColors[Me.hwb])}get lab(){return Hn(this._allColors[Me.lab])}get lch(){return Hn(this._allColors[Me.lch])}get oklab(){return Hn(this._allColors[Me.oklab])}get oklch(){return Hn(this._allColors[Me.oklch])}}function e_(e){return Kt(ki(bu),([t])=>t,(t,[,r])=>T.deepEquals(r,[e.r,e.g,e.b]))}function Yr(e){return j`
        color: ${e.foreground.value};
        background-color: ${e.background.value};
    `}const Em=Ci()({tagName:"vir-color-slider",cssVars:{"vir-color-slider-gradient":"black"},styles:({cssVars:e})=>j`
        :host {
            display: flex;
            align-items: center;
            font-family: ${c$["vira-monospace"].value};
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
    `,events:{valueChange:nr()},render({inputs:e,events:t,dispatch:r,cssVars:n}){const i=yi[e.colorFormatName],o=i.coords[e.colorCoordinateName];if(!o)throw new Error(`Invalid color coordinate '${e.colorCoordinateName}' for color format '${e.colorFormatName}'`);const s=10,a=mg(s,f=>{const h=o.min+(o.max-o.min)*(f/s);return new Ki({[e.colorFormatName]:{...e.color[e.colorFormatName],[e.colorCoordinateName]:h}}).toCss()[i.conversionFormat]}),l=j`linear-gradient(to right, ${ve(a.join(","))})`,u=Vt.isNumber(e.color[e.colorFormatName][e.colorCoordinateName]),d=o.radix?Math.round(u).toString(o.radix).toUpperCase().padStart(o.radixPad||0,"0"):String(u);return v`
            <span class="coordinate">${e.colorCoordinateName.toUpperCase()}</span>
            <input
                type="range"
                style=${j`
                    ${n["vir-color-slider-gradient"].name}: ${l};
                `}
                step=${Math.pow(10,o.digits?-o.digits:0)}
                ${oO(f=>{Nt.instanceOf(f,HTMLInputElement),f.min=String(o.min),f.max=String(o.max),f.value=String(u)})}
                ${Ee("input",f=>{const h=Uu(f,HTMLInputElement),g=Number(h.value);isNaN(g)||r(new t.valueChange(g))})}
            />
            <${Pr.assign({value:d})}
                ${Ee(Pr.events.valueChange,f=>{const h=o.radix?parseInt(f.detail,o.radix):Number(f.detail);isNaN(h)||r(new t.valueChange(h))})}
            ></${Pr}>
        `}}),Cm=Ci()({tagName:"vir-color-format-sliders",styles:j`
        :host {
            display: flex;
            flex-direction: column;
        }

        h3 {
            ${el};
        }
    `,events:{colorChange:nr()},render({inputs:e,dispatch:t,events:r}){const n=yi[e.colorFormatName],i=tt(n.coords).map(o=>v`
                    <${Em.assign({color:e.color,colorCoordinateName:o,colorFormatName:e.colorFormatName})}
                        ${Ee(Em.events.valueChange,s=>{const a=e.color.clone();a.set({[e.colorFormatName]:{[o]:s.detail}});const l=a.toCss()[n.conversionFormat];t(new r.colorChange(l))})}
                    ></${Em}>
                `);return v`
            ${e.showFormatName?v`
                      <h3>${e.colorFormatName}</h3>
                  `:fe}
            ${i}
        `}}),Sm=Ci()({tagName:"vir-color-swatch",styles:j`
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
                style=${j`
                    background-color: ${ve(t)};
                    color: ${ve(r)};
                `}
            >
                <slot></slot>
            </div>
        `}});class t_{shapes;options;constructor(t,r={}){this.shapes=t,this.options=r,this.storeName=r.storeName||"local-storage-client",this.get=ut(this.shapes,n=>(i={})=>this.getAllValues(i)[n]),this.set=ut(this.shapes,n=>i=>{bd(i,this.shapes[n],{allowExtraKeys:!0},`LocalStorageClient: Invalid value for key '${String(n)}'.`);const o=this.getAllValues();return o[n]=i,globalThis.localStorage.setItem(this.storeName,JSON.stringify(o)),i}),this.delete=ut(this.shapes,n=>()=>{const i=this.getAllValues();delete i[n],globalThis.localStorage.setItem(this.storeName,JSON.stringify(i))})}storeName;getAllValues({throwErrorOnFailure:t=!1}={}){return wk(()=>{const r=JSON.parse(globalThis.localStorage.getItem(this.storeName)||"{}");return kk(r,(n,i)=>{const o=this.shapes[n];if(o){if(t)bd(i,o,{allowExtraKeys:!0});else if(!go(i,o,{allowExtraKeys:!0}))return;return{key:n,value:i}}})},{handleError:r=>{if(t)throw Oa(r,`LocalStorageClient: store '${this.storeName}' is corrupt and cannot be loaded.`);return{}}})}get;set;delete;clear(){globalThis.localStorage.removeItem(this.storeName)}}const Tm=new t_({lastFormat:ai(Co)}),r_=Qc(Co).map(e=>({value:e,label:e.toUpperCase()})),xl=Ci()({tagName:"vir-color-picker",cssVars:{"vir-color-picker-swatch-width":{default:"100px",syntax:ga.Length},"vir-color-picker-swatch-height":{default:"100px",syntax:ga.Length}},state(){return{selectedFormatName:Tm.get.lastFormat()||Co.rgb,rawInput:void 0}},hostClasses:{"vir-color-picker-always-show":({inputs:e})=>!!e.alwaysShowPicker},styles:({cssVars:e,hostClasses:t})=>j`
        :host {
            display: inline-flex;
        }

        ${t["vir-color-picker-always-show"].selector} {
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }

        button {
            ${fn}
            cursor: pointer;
            display: flex;
        }

        ${wl} {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }

        .swatch-wrapper {
            display: flex;
            flex-direction: column;
            gap: 4px;
            align-items: center;

            & ${Sm} {
                width: ${e["vir-color-picker-swatch-width"].value};
                height: ${e["vir-color-picker-swatch-height"].value};
                box-sizing: border-box;
            }
        }

        .code-button {
            font-family: ${c$["vira-monospace"].value};
            font-size: 12px;
            color: #666;
            display: flex;
            justify-content: center;
            gap: 2px;
            align-items: center;

            & ${se} {
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
            ${GO.menuShadow}
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
    `,events:{colorChange:nr()},render({inputs:e,dispatch:t,events:r,state:n,updateState:i}){const o=Ki.isColor(e.color)?e.color:new Ki(e.color||"black"),s=yi[n.selectedFormatName],a=n.rawInput??o.toCss()[s.rawSyntax],l=v`
            <div class="raw-input-wrapper">
                <${Pr.assign({value:a})}
                    ${Ee(Pr.events.valueChange,h=>{const g=h.detail;i({rawInput:g}),Ki.isValidColorString(g)&&t(new r.colorChange(g))})}
                ></${Pr}>
                <button
                    class="code-button"
                    ${Ee("click",async()=>{await globalThis.navigator.clipboard.writeText(a)})}
                >
                    <${se.assign({icon:F0,fitContainer:!0})}></${se}>
                </button>
            </div>
        `,u=v`
            <button
                class="code-button"
                ${Ee("click",async()=>{await globalThis.navigator.clipboard.writeText(o.hexString)})}
            >
                <span>${o.hexString}</span>
                <${se.assign({icon:F0,fitContainer:!0})}></${se}>
            </button>
        `,d=v`
            <div class="swatch-wrapper">
                <${Sm.assign({backgroundColor:o})}></${Sm}>
                ${e.showHexValue?u:fe}
            </div>
        `,f=v`
            <div class="picker">
                <${us.assign({options:r_,value:n.selectedFormatName})}
                    ${Ee(us.events.valueChange,h=>{const g=hg.isEnumValue(h.detail,Co);g&&(i({selectedFormatName:g}),Tm.set.lastFormat(g))})}
                ></${us}>
                ${l}
                <${Cm.assign({color:o,colorFormatName:n.selectedFormatName,showFormatName:!1})}
                    ${Ee(Cm.events.colorChange,h=>{t(new r.colorChange(h.detail)),i({rawInput:void 0})})}
                ></${Cm}>
            </div>
        `;return e.alwaysShowPicker?v`
                ${d} ${f}
            `:v`
                <${wl.assign({keepOpenAfterInteraction:!0})}>
                    <button
                        class="trigger"
                        slot=${wl.slotNames.trigger}
                        ${Ee("mousedown",()=>{const h=Tm.get.lastFormat();h&&i({selectedFormatName:h})})}
                    >
                        ${d}
                    </button>
                    <div class="pop-up" slot=${wl.slotNames.popUp}>
                        ${f}
                    </div>
                </${wl}>
            `}});function n_(e){if(!T.hasKey(Sv,e))throw new Error(`No ViraTag color for variant '${e}'`);const t=Sv[e];return j`
        :host(
                .vira-tag-color-${ve(e)}.vira-tag-emphasis-${ve(In.Standard)}
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
                .vira-tag-color-${ve(e)}.vira-tag-emphasis-${ve(In.Subtle)}
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
    `}function i_(){return ve([re.Accent,re.Danger,re.Neutral,re.Positive,re.Warning].map(e=>n_(e)).join(" "))}const Ll=di()({tagName:"vira-tag",cssVars:{"vira-tag-text-color":"white","vira-tag-background-color":"black","vira-tag-border-radius":"1000px","vira-tag-gap":"6px","vira-tag-horizontal-padding":"12px","vira-tag-border-width":"2px"},events:{toggle:nr(),cancel:nr()},hostClasses:{"vira-tag-selectable":({inputs:e})=>T.isBoolean(e.isClickable?.selected),"vira-tag-checked":({inputs:e})=>!!e.isClickable?.selected,"vira-tag-not-checked":({inputs:e})=>e.isClickable?.selected===!1,"vira-tag-cancellable":({inputs:e})=>!!e.isClickable?.cancellable,"vira-tag-not-clickable":({inputs:e})=>!e.isClickable,"vira-tag-disabled":({inputs:e})=>!!e.disabled,"vira-tag-size-large":({inputs:e})=>e.size===Er.Large,"vira-tag-size-medium":({inputs:e})=>!e.size||e.size===Er.Medium,"vira-tag-size-small":({inputs:e})=>e.size===Er.Small,"vira-tag-emphasis-standard":({inputs:e})=>!e.emphasis||e.emphasis===In.Standard,"vira-tag-emphasis-subtle":({inputs:e})=>e.emphasis===In.Subtle,"vira-tag-color-accent":({inputs:e})=>!e.color||e.color===re.Accent,"vira-tag-color-plain":({inputs:e})=>e.color===re.Plain,"vira-tag-color-neutral":({inputs:e})=>e.color===re.Neutral,"vira-tag-color-danger":({inputs:e})=>e.color===re.Danger,"vira-tag-color-warning":({inputs:e})=>e.color===re.Warning,"vira-tag-color-positive":({inputs:e})=>e.color===re.Positive},styles:({cssVars:e,hostClasses:t})=>j`
        :host {
            display: inline-flex;
        }

        button {
            ${fn}
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
            height: ${Xh[Er.Large]}px;
            font-size: ${K["vira-form-large-text-size"].value};
            padding: 0 var(${e["vira-tag-horizontal-padding"].name}, 16px);
        }
        ${t["vira-tag-size-medium"].selector} button {
            height: ${Xh[Er.Medium]}px;
            font-size: ${K["vira-form-medium-text-size"].value};
        }
        ${t["vira-tag-size-small"].selector} button {
            height: ${Xh[Er.Small]}px;
            font-size: ${K["vira-form-small-text-size"].value};
        }

        ${i_()}

        :host(.${t["vira-tag-disabled"].name}.${t["vira-tag-disabled"].name}.${t["vira-tag-disabled"].name}.${t["vira-tag-disabled"].name}) {
            cursor: not-allowed;
            ${Ma}

            & button {
                ${Yr(ie.colors["vira-grey-behind-bg-decoration"])}
                border-color: ${ie.colors["vira-grey-behind-bg-decoration"].background.value}
            }

            &.${t["vira-tag-emphasis-subtle"].name} button {
                ${Yr(ie.colors["vira-grey-behind-bg-decoration"])}
                border-color: ${ie.colors["vira-grey-behind-bg-decoration"].background.value}
            }
        }

        :host(
                .${t["vira-tag-color-plain"].name}.vira-tag-emphasis-${ve(In.Standard)}
            )
            button {
            ${Yr(ie.inverse[Ar])};
            border-color: ${ie.inverse[Ar].background.value};

            &:hover {
                ${Yr(ie.colors["vira-grey-behind-bg-non-body"])};
                border-color: ${ie.colors["vira-grey-behind-bg-non-body"].background.value};
            }
            &:active {
                ${Yr(ie.inverse[Ar])};
                border-color: ${ie.inverse[Ar].background.value};
            }
        }
        :host(
                .${t["vira-tag-color-plain"].name}.vira-tag-emphasis-${ve(In.Subtle)}
            )
            button {
            background-color: transparent;
            color: ${ie.colors[Ar].foreground.value};
            border-color: transparent;
        }
        :host(
                .${t["vira-tag-color-plain"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}
            )
            button {
            color: ${ie.colors[Ar].foreground.value};
            background-color: transparent;
            border-color: transparent;
        }
        :host(
                .${t["vira-tag-color-plain"].name}.vira-tag-emphasis-${ve(In.Subtle)}
            )
            button,
        :host(
                .${t["vira-tag-color-plain"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}.${t["vira-tag-not-checked"].name}
            )
            button {
            &:hover {
                ${Yr(ie.colors["vira-grey-behind-fg-small-body"])}
                border-color: ${ie.colors["vira-grey-behind-fg-small-body"].background.value};
            }
            &:active {
                ${Yr(ie.colors["vira-grey-behind-fg-body"])}
                border-color: ${ie.colors["vira-grey-behind-fg-body"].background.value};
            }
        }
    `,render({inputs:e,dispatch:t,events:r}){const n=!e.isClickable||!!e.disabled;return v`
            <button
                ?disabled=${n}
                ${Ee("click",()=>{n||(e.isClickable?.selected!=null?t(new r.toggle(!e.isClickable.selected)):e.isClickable?.cancellable&&t(new r.cancel))})}
            >
                <${se.assign({icon:k$})}
                    class="selected-check"
                ></${se}>
                <span class="text">${String(e.text)}</span>
                <${se.assign({icon:x$})}
                    class="cancel-x"
                ></${se}>
            </button>
        `}});var ds;(function(e){e.Vertical="vertical",e.Horizontal="horizontal"})(ds||(ds={}));function o_(e,t,r,n={}){const i=t.map((o,s)=>({cells:r(o,s),data:o}));if(n.orientation===ds.Horizontal)return{headerRow:void 0,rows:Kt(e,s=>{if(s.disabled)return;const a=n.hideHeaders?[]:[{content:s.content??s.key,key:s.key,data:void 0}],l=Kt(i,({data:d,cells:f})=>{if(f)return{content:f[s.key],key:s.key,data:d}},T.isTruthy);return{cells:[...a,...l],data:void 0}},T.isTruthy),orientation:ds.Horizontal};{const o=n.hideHeaders?[]:Kt(e,a=>{if(!a.disabled)return{content:a.content??a.key,key:a.key,data:void 0}},T.isTruthy),s=Kt(i,({cells:a,data:l})=>{if(a)return{cells:Kt(e,u=>{if(!u.disabled)return{content:a[u.key],key:u.key,data:l}},T.isTruthy),data:l}},T.isTruthy);return{headerRow:o,rows:s,orientation:ds.Vertical}}}const Cn=Z5(),Nn=Cn()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":"0px"},styles:({cssVars:e})=>j`
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
                ${Ee("click",n=>{(!e.router||a$(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new kd(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function s_(e,t){return e.entry.entryType===ur.Root?!1:e.entry.entryType===ur.Page||T.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:T.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const Ks=Cn()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>j`
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
            ${Nn.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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

        ${se} {
            display: inline-flex;
            color: ${We["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!s_(r,e.selectedPath))return;const n=j`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return v`
                <li style=${n}>
                    <${Nn.assign({router:e.router,route:{paths:[Jr.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${bn({"title-row":!0,selected:e.selectedPath?T.jsonEquals(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Xn(ia(r,ur.ElementExample),v`
                                    <${se.assign({icon:A$})}></${se}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${Nn}>
                </li>
            `});return v`
            <${Nn.assign({route:ha,router:e.router})}>
                <slot>Book</slot>
            </${Nn}>
            <ul>
                ${t}
            </ul>
        `}}),Mo=Cn()({tagName:"book-error",styles:j`
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
            `)}}),vu=Cn()({tagName:"book-page-controls",events:{controlValueChange:nr()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>j`
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

        ${Pr}, ${us} {
            height: 24px;
            max-width: 128px;
        }

        ${se}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,i],o)=>{if(i.controlType===Wt.Hidden)return"";const s=a_(e.currentValues[n],i,a=>{const l=T.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...Object.fromEntries(Object.keys(e.config).map(u=>[u,e.currentValues[u]])),[n]:a}}))});return v`
                    <div class="control-wrapper">
                        ${Xn(o===0,v`
                                <${se.assign({icon:S$})}
                                    class="options-icon"
                                ></${se}>
                            `)}
                        <label class="control-wrapper">
                            <span>
                                ${i.controlType===Wt.Custom?v`
                                          &nbsp;
                                      `:n}
                            </span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function a_(e,t,r){return Ho(t,Wt.Hidden)?"":Ho(t,Wt.Checkbox)?v`
            <${rm.assign({value:!!e})}
                ${Ee(rm.events.valueChange,n=>{r(n.detail)})}
            ></${rm}>
        `:Ho(t,Wt.Color)?v`
            <${xl.assign({color:e})}
                style=${j`
                    ${xl.cssVars["vir-color-picker-swatch-height"].name}: 24px;
                    ${xl.cssVars["vir-color-picker-swatch-width"].name}: 24px;
                `}
                ${Ee(xl.events.colorChange,n=>{r(n.detail)})}
            ></${xl}>
        `:Ho(t,Wt.Text)?v`
            <${Pr.assign({value:e,showClearButton:!0,disableBrowserHelps:!0})}
                ${Ee(Pr.events.valueChange,n=>{r(n.detail)})}
            ></${Pr}>
        `:Ho(t,Wt.Number)?v`
            <${Pr.assign({value:e,allowedInputs:/[\d.]/})}
                ${Ee(Pr.events.valueChange,n=>{r(n.detail)})}
            ></${Pr}>
        `:Ho(t,Wt.Dropdown)?v`
            <${us.assign({value:e,options:t.options.map(n=>({label:n,value:n}))})}
                ${Ee(us.events.valueChange,n=>{r(n.detail)})}
            ></${us}>
        `:Ho(t,Wt.Custom)?t.content:v`
            <p class="error">
                ${t.controlType} controls are not implemented yet.
            </p>
        `}const s2=Cn()({tagName:"book-breadcrumbs",styles:j`
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
                <${Nn.assign({route:{hash:void 0,search:void 0,paths:[Jr.Book,...s]},router:e.router})}>
                    ${r}
                </${Nn}>
                ${a}
            `}):v`
                &nbsp;
            `}}),Mm=Cn()({tagName:"book-breadcrumbs-bar",styles:j`
        :host {
            border-bottom: 1px solid
                ${We["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${We["element-book-page-background-color"].value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return v`
            ${Xn(!!e.currentSearch,v`
                    &nbsp;
                `,v`
                    <${s2.assign({currentRoute:e.currentRoute,router:e.router})}></${s2}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${Ee("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=n.value;await zd({milliseconds:200}),n.value===i&&(n.value?t(new kd({paths:[Jr.Search,encodeURIComponent(n.value)]})):t(new kd(ha)))})}
            />
        `}}),a2=Cn()({tagName:"book-entry-description",styles:j`
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
    `,render({inputs:e}){return e.descriptionParagraphs.map(t=>v`
                <p>${t}</p>
            `)}}),l2=Cn()({tagName:"book-page-wrapper",styles:j`
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

        ${Nn} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?v`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:v`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[Jr.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?vk(e.pageNode.entry.errors):void 0;n&&console.error(n);const i=e.blockNavigation?t:v`
                  <${Nn.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                      ${t}
                  </${Nn}>
              `;return v`
            <div class="page-header block-entry">
                <div class="title-group">
                    ${i}
                    ${n?v`
                              <${Mo.assign({message:n.message})}></${Mo}>
                          `:v`
                              <${a2.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${a2}>
                              <${vu.assign({config:e.pageNode.entry.controls,currentValues:xg(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${vu}>
                          `}
                </div>
            </div>
        `}}),$c=Cn()({tagName:"book-element-example-title",styles:j`
        :host {
            display: flex;
            color: ${We["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){if(e.blockNavigation)return e.elementExampleNode.entry.title;const t=[Jr.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return v`
            <${Nn.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Nn}>
        `}}),u2=Symbol("unset-internal-state"),c2=Cn()({tagName:"book-element-example-viewer",state(){return{isUnset:u2}},render({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw vk(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===u2&&r({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const n=t.elementExampleNode.entry.render({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return v`
                ${Xn(!!t.elementExampleNode.entry.styles,v`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",fr(n)),console.error(n),v`
                <${Mo.assign({message:`${t.elementExampleNode.entry.title} failed: ${fr(n)}`})}></${Mo}>
            `}},options:{allowPolymorphicState:!0}}),d2=Cn()({tagName:"book-element-example-wrapper",styles:j`
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

        ${$c} {
            color: ${We["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${$c} {
            color: ${We["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return v`
            <div class="individual-example-wrapper">
                <${$c.assign({blockNavigation:e.blockNavigation,elementExampleNode:e.elementExampleNode,router:e.router})}></${$c}>
                <${c2.assign(e)}></${c2}>
            </div>
        `}}),l_={milliseconds:10};let _l;const Td=new Map,es=new Map;function u_(){return _l||(_l=new IntersectionObserver(e=>{for(const t of e){const r=t.target,n=Td.get(r);if(n)if(t.isIntersecting){if(!es.has(r)){const i=globalThis.setTimeout(()=>{es.delete(r),n(),_l?.unobserve(r),Td.delete(r)},da(l_,{milliseconds:!0}).milliseconds);es.set(r,i)}}else{const i=es.get(r);i&&(clearTimeout(i),es.delete(r))}}},{rootMargin:"100px"})),_l}function f2(e){const t=es.get(e);t&&(clearTimeout(t),es.delete(e)),Td.delete(e),_l?.unobserve(e)}const Dc=Cn()({tagName:"book-lazy-entry",state(){return{hasRendered:!1,placeholderElement:void 0}},styles:j`
        .placeholder {
            /* Minimum height to ensure the placeholder is observable */
            min-height: 50px;
            display: block;
        }
    `,cleanup({state:e}){e.placeholderElement&&f2(e.placeholderElement)},render({inputs:e,state:t,updateState:r}){return t.hasRendered?e.content:v`
            <div
                class="placeholder"
                ${vd(n=>{t.placeholderElement&&f2(t.placeholderElement),r({placeholderElement:n}),Td.set(n,()=>{r({hasRendered:!0})}),u_().observe(n)})}
            >
                &nbsp;
            </div>
        `}});function i3(e,t,r,n){const i=t0(r,n),o=[];if(i){const s=i3(e,t,i,n);s&&o.push(s)}if(ia(r,ur.Page)&&!e.includes(r)){const s=xg(t,r.fullUrlBreadcrumbs);o.push({config:r.entry.controls,current:s,breadcrumbs:ut(s,()=>r.fullUrlBreadcrumbs)})}return o.reduce((s,a)=>({config:{...s.config,...a.config},current:{...s.current,...a.current},breadcrumbs:{...s.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function c_({blockNavigation:e,currentNodes:t,isTopLevel:r,router:n,isSearching:i,controls:o,originalTree:s}){if(!t.length&&i)return[v`
                No results
            `];const a=T.isLengthAtLeast(t,1)?i3(t,o,t[0],s):void 0,l=a&&Object.values(a.config).length&&T.isLengthAtLeast(t,1)?v`
                  <${vu.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${vu}>
              `:fe,u=QN(t,d=>d.fullUrlBreadcrumbs.join(">"),d=>{if(ia(d,ur.Page))return v`
                    <${l2.assign({blockNavigation:e,isTopLevel:r,pageNode:d,controls:o,router:n})}
                        class="block-entry"
                    ></${l2}>
                `;if(ia(d,ur.ElementExample)){const f=xg(o,d.fullUrlBreadcrumbs.slice(0,-1)),h=v`
                    <${d2.assign({blockNavigation:e,elementExampleNode:d,currentPageControls:f,router:n})}></${d2}>
                `;return v`
                    <${Dc.assign({content:h})}
                        class="inline-entry ${bn({"block-entry":d.entry.isVertical})}"
                    ></${Dc}>
                `}else{if(ia(d,ur.Root))return fe;{const f=v`
                    <${Mo.assign({message:`Unknown entry type for rendering: '${d.entry.entryType}'`})}></${Mo}>
                `;return v`
                    <${Dc.assign({content:f})}
                        class="block-entry"
                    ></${Dc}>
                `}}});return[l,u]}const Hs=Cn()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:j`
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

        ${Mm} {
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${vo["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:nr()},render:({inputs:e,dispatch:t,events:r,state:n,updateState:i})=>{const o=Fk(e.currentRoute.paths),s=c_({blockNavigation:e.blockNavigation,currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!o,controls:e.controls,originalTree:e.originalTree});return v`
            <${Mm.assign({currentSearch:o,currentRoute:e.currentRoute,router:e.router})}></${Mm}>

            ${Xn(e.showLoading,v`
                    <div
                        ${vd(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${se.assign({icon:Fa})}></${se}>
                    </div>
                    ${Xn(!!n.lastElement,v`
                            ${n.lastElement}
                            <slot></slot>
                        `)}
                `,v`
                    <div
                        ${vd(a=>{i({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot></slot>
                `)}
        `}});function d_(e,t,r){const n=h2(e,t);return n.length?n:(r(ha),h2(e,ha.paths))}function h2(e,t){return e.filter(r=>KE({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Ac=Ci()({tagName:"element-book-app",state(){return{currentRoute:ha,router:void 0,loading:!0,colors:{config:void 0,theme:vv(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:nr()},slotNames:["footer","navHeader"],styles:j`
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

        ${Hs} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${Ks} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:r,updateState:n,dispatch:i,events:o,slotNames:s})=>{t._debug&&console.info("rendering element-book app");function a(f){return{...e.currentRoute,...f}}function l(f){const h=a(f);return!T.jsonEquals(e.currentRoute,h)}function u(f){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,f].filter(T.isTruthy).join(" - "))}function d(f){if(!l(f))return;const h=a(f);e.router?e.router.setRoute(h):n({currentRoute:{...e.currentRoute,...h}}),t.elementBookRoutePaths&&!T.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new o.pathUpdate(h.paths))}try{if(t.elementBookRoutePaths&&!T.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&d({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const D=UO(t.internalRouterConfig.basePath);n({router:D}),D.listen(!0,C=>{n({currentRoute:C})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const f={themeColor:t.themeColor};if(!T.jsonEquals(f,e.colors.config)){const D=vv(f);n({colors:{config:f,theme:D}}),E6(r,D)}const h=t._debug??!1,g=XE({entries:t.pages,debug:h});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:Mk(g.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const m=Fk(e.currentRoute.paths),y=(m?TO({flattenedNodes:g.flattenedNodes,searchQuery:m}):void 0)??d_(g.flattenedNodes,e.currentRoute.paths,d);u(y[0]?.entry.title);const x=e.treeBasedControls?.controls;return x?(t._debug&&console.info({currentControls:x}),v`
                <div
                    class="root"
                    ${Ee(kd,D=>{const C=D.detail;if(!l(C))return;if(n({loading:!0}),d(C),!(r.shadowRoot.querySelector(Ks.tagName)instanceof Ks))throw new TypeError(`Failed to find child '${Ks.tagName}'`)})}
                    ${Ee(vu.events.controlValueChange,D=>{if(!e.treeBasedControls)return;const C=e6(x,D.detail.fullUrlBreadcrumbs,D.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:C}})})}
                >
                    ${t.blockNavigation?fe:v`
                              <${Ks.assign({flattenedNodes:g.flattenedNodes,router:e.router,selectedPath:m?void 0:e.currentRoute.paths.slice(1)})}>
                                  <slot name=${s.navHeader}></slot>
                              </${Ks}>
                          `}
                    <${Hs.assign({blockNavigation:!!t.blockNavigation,controls:x,currentNodes:y,currentRoute:e.currentRoute,debug:h,originalTree:g.tree,router:e.router,showLoading:e.loading})}
                        ${Ee(Hs.events.loadingRender,async D=>{await mu();const C=r.shadowRoot.querySelector(Hs.tagName);C?C.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Hs.tagName}' for scrolling.`),await mu(),n({loading:!D.detail})})}
                    >
                        <slot name=${s.footer}></slot>
                    </${Hs}>
                </div>
            `):v`
                    <${Mo.assign({message:"Failed to generate page controls."})}></${Mo}>
                `}catch(f){return console.error(f),v`
                <p class="error">${fr(f)}</p>
            `}}}),il=Lt({title:"Cards",parent:void 0,descriptionParagraphs:["Multiple full cards of structured render data."]});function o3({newStyles:e,oldStyles:t,shadowRoot:r,maintainFirstStylesheet:n}){if(e!==t){const i=new CSSStyleSheet;i.replaceSync(e);const o=[Vt.isDefined(r.adoptedStyleSheets[0]),i].filter(T.isTruthy);return r.adoptedStyleSheets=o,!0}return!1}const{entries:s3,setPrototypeOf:m2,isFrozen:f_,getPrototypeOf:h_,getOwnPropertyDescriptor:m_}=Object;let{freeze:jr,seal:jn,create:jc}=Object,{apply:V0,construct:K0}=typeof Reflect<"u"&&Reflect;jr||(jr=function(t){return t});jn||(jn=function(t){return t});V0||(V0=function(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];return t.apply(r,i)});K0||(K0=function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return new t(...n)});const Ec=zr(Array.prototype.forEach),g_=zr(Array.prototype.lastIndexOf),g2=zr(Array.prototype.pop),$l=zr(Array.prototype.push),p_=zr(Array.prototype.splice),zc=zr(String.prototype.toLowerCase),Fm=zr(String.prototype.toString),Pm=zr(String.prototype.match),Dl=zr(String.prototype.replace),b_=zr(String.prototype.indexOf),y_=zr(String.prototype.trim),ln=zr(Object.prototype.hasOwnProperty),Fr=zr(RegExp.prototype.test),Al=v_(TypeError);function zr(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return V0(e,t,n)}}function v_(e){return function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return K0(e,r)}}function Se(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:zc;m2&&m2(e,null);let n=t.length;for(;n--;){let i=t[n];if(typeof i=="string"){const o=r(i);o!==i&&(f_(t)||(t[n]=o),i=o)}e[i]=!0}return e}function w_(e){for(let t=0;t<e.length;t++)ln(e,t)||(e[t]=null);return e}function mi(e){const t=jc(null);for(const[r,n]of s3(e))ln(e,r)&&(Array.isArray(n)?t[r]=w_(n):n&&typeof n=="object"&&n.constructor===Object?t[r]=mi(n):t[r]=n);return t}function El(e,t){for(;e!==null;){const n=m_(e,t);if(n){if(n.get)return zr(n.get);if(typeof n.value=="function")return zr(n.value)}e=h_(e)}function r(){return null}return r}const p2=jr(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Im=jr(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Nm=jr(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),k_=jr(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Om=jr(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),x_=jr(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),b2=jr(["#text"]),y2=jr(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Rm=jr(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),v2=jr(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Cc=jr(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),$_=jn(/\{\{[\w\W]*|[\w\W]*\}\}/gm),D_=jn(/<%[\w\W]*|[\w\W]*%>/gm),A_=jn(/\$\{[\w\W]*/gm),E_=jn(/^data-[\-\w.\u00B7-\uFFFF]+$/),C_=jn(/^aria-[\-\w]+$/),a3=jn(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),S_=jn(/^(?:\w+script|data):/i),T_=jn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),l3=jn(/^html$/i),M_=jn(/^[a-z][.\w]*(-[.\w]+)+$/i);var w2=Object.freeze({__proto__:null,ARIA_ATTR:C_,ATTR_WHITESPACE:T_,CUSTOM_ELEMENT:M_,DATA_ATTR:E_,DOCTYPE_NAME:l3,ERB_EXPR:D_,IS_ALLOWED_URI:a3,IS_SCRIPT_OR_DATA:S_,MUSTACHE_EXPR:$_,TMPLIT_EXPR:A_});const Cl={element:1,text:3,progressingInstruction:7,comment:8,document:9},F_=function(){return typeof window>"u"?null:window},P_=function(t,r){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let n=null;const i="data-tt-policy-suffix";r&&r.hasAttribute(i)&&(n=r.getAttribute(i));const o="dompurify"+(n?"#"+n:"");try{return t.createPolicy(o,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},k2=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function u3(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:F_();const t=le=>u3(le);if(t.version="3.3.2",t.removed=[],!e||!e.document||e.document.nodeType!==Cl.document||!e.Element)return t.isSupported=!1,t;let{document:r}=e;const n=r,i=n.currentScript,{DocumentFragment:o,HTMLTemplateElement:s,Node:a,Element:l,NodeFilter:u,NamedNodeMap:d=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:f,DOMParser:h,trustedTypes:g}=e,m=l.prototype,b=El(m,"cloneNode"),y=El(m,"remove"),x=El(m,"nextSibling"),D=El(m,"childNodes"),C=El(m,"parentNode");if(typeof s=="function"){const le=r.createElement("template");le.content&&le.content.ownerDocument&&(r=le.content.ownerDocument)}let P,O="";const{implementation:H,createNodeIterator:ee,createDocumentFragment:oe,getElementsByTagName:X}=r,{importNode:ye}=n;let ae=k2();t.isSupported=typeof s3=="function"&&typeof C=="function"&&H&&H.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:$e,ERB_EXPR:Ue,TMPLIT_EXPR:Ge,DATA_ATTR:yr,ARIA_ATTR:Ct,IS_SCRIPT_OR_DATA:Sn,ATTR_WHITESPACE:Tn,CUSTOM_ELEMENT:Ur}=w2;let{IS_ALLOWED_URI:St}=w2,me=null;const vt=Se({},[...p2,...Im,...Nm,...Om,...b2]);let Ze=null;const zt=Se({},[...y2,...Rm,...v2,...Cc]);let Be=Object.seal(jc(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),sr=null,nn=null;const on=Object.seal(jc(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Si=!0,ol=!0,E=!1,q=!0,S=!1,ue=!0,G=!1,Q=!1,Ye=!1,$t=!1,qr=!1,vr=!1,sn=!0,jo=!1;const Xf="user-content-";let sl=!0,al=!1,Os={},fi=null;const Qf=Se({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let fb=null;const hb=Se({},["audio","video","img","source","image","track"]);let eh=null;const mb=Se({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Zu="http://www.w3.org/1998/Math/MathML",Yu="http://www.w3.org/2000/svg",Ti="http://www.w3.org/1999/xhtml";let Rs=Ti,th=!1,rh=null;const _3=Se({},[Zu,Yu,Ti],Fm);let Ju=Se({},["mi","mo","mn","ms","mtext"]),Xu=Se({},["annotation-xml"]);const j3=Se({},["title","style","font","a","script"]);let ll=null;const z3=["application/xhtml+xml","text/html"],U3="text/html";let Ut=null,Bs=null;const q3=r.createElement("form"),gb=function(A){return A instanceof RegExp||A instanceof Function},nh=function(){let A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Bs&&Bs===A)){if((!A||typeof A!="object")&&(A={}),A=mi(A),ll=z3.indexOf(A.PARSER_MEDIA_TYPE)===-1?U3:A.PARSER_MEDIA_TYPE,Ut=ll==="application/xhtml+xml"?Fm:zc,me=ln(A,"ALLOWED_TAGS")?Se({},A.ALLOWED_TAGS,Ut):vt,Ze=ln(A,"ALLOWED_ATTR")?Se({},A.ALLOWED_ATTR,Ut):zt,rh=ln(A,"ALLOWED_NAMESPACES")?Se({},A.ALLOWED_NAMESPACES,Fm):_3,eh=ln(A,"ADD_URI_SAFE_ATTR")?Se(mi(mb),A.ADD_URI_SAFE_ATTR,Ut):mb,fb=ln(A,"ADD_DATA_URI_TAGS")?Se(mi(hb),A.ADD_DATA_URI_TAGS,Ut):hb,fi=ln(A,"FORBID_CONTENTS")?Se({},A.FORBID_CONTENTS,Ut):Qf,sr=ln(A,"FORBID_TAGS")?Se({},A.FORBID_TAGS,Ut):mi({}),nn=ln(A,"FORBID_ATTR")?Se({},A.FORBID_ATTR,Ut):mi({}),Os=ln(A,"USE_PROFILES")?A.USE_PROFILES:!1,Si=A.ALLOW_ARIA_ATTR!==!1,ol=A.ALLOW_DATA_ATTR!==!1,E=A.ALLOW_UNKNOWN_PROTOCOLS||!1,q=A.ALLOW_SELF_CLOSE_IN_ATTR!==!1,S=A.SAFE_FOR_TEMPLATES||!1,ue=A.SAFE_FOR_XML!==!1,G=A.WHOLE_DOCUMENT||!1,$t=A.RETURN_DOM||!1,qr=A.RETURN_DOM_FRAGMENT||!1,vr=A.RETURN_TRUSTED_TYPE||!1,Ye=A.FORCE_BODY||!1,sn=A.SANITIZE_DOM!==!1,jo=A.SANITIZE_NAMED_PROPS||!1,sl=A.KEEP_CONTENT!==!1,al=A.IN_PLACE||!1,St=A.ALLOWED_URI_REGEXP||a3,Rs=A.NAMESPACE||Ti,Ju=A.MATHML_TEXT_INTEGRATION_POINTS||Ju,Xu=A.HTML_INTEGRATION_POINTS||Xu,Be=A.CUSTOM_ELEMENT_HANDLING||{},A.CUSTOM_ELEMENT_HANDLING&&gb(A.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Be.tagNameCheck=A.CUSTOM_ELEMENT_HANDLING.tagNameCheck),A.CUSTOM_ELEMENT_HANDLING&&gb(A.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Be.attributeNameCheck=A.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),A.CUSTOM_ELEMENT_HANDLING&&typeof A.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(Be.allowCustomizedBuiltInElements=A.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),S&&(ol=!1),qr&&($t=!0),Os&&(me=Se({},b2),Ze=jc(null),Os.html===!0&&(Se(me,p2),Se(Ze,y2)),Os.svg===!0&&(Se(me,Im),Se(Ze,Rm),Se(Ze,Cc)),Os.svgFilters===!0&&(Se(me,Nm),Se(Ze,Rm),Se(Ze,Cc)),Os.mathMl===!0&&(Se(me,Om),Se(Ze,v2),Se(Ze,Cc))),ln(A,"ADD_TAGS")||(on.tagCheck=null),ln(A,"ADD_ATTR")||(on.attributeCheck=null),A.ADD_TAGS&&(typeof A.ADD_TAGS=="function"?on.tagCheck=A.ADD_TAGS:(me===vt&&(me=mi(me)),Se(me,A.ADD_TAGS,Ut))),A.ADD_ATTR&&(typeof A.ADD_ATTR=="function"?on.attributeCheck=A.ADD_ATTR:(Ze===zt&&(Ze=mi(Ze)),Se(Ze,A.ADD_ATTR,Ut))),A.ADD_URI_SAFE_ATTR&&Se(eh,A.ADD_URI_SAFE_ATTR,Ut),A.FORBID_CONTENTS&&(fi===Qf&&(fi=mi(fi)),Se(fi,A.FORBID_CONTENTS,Ut)),A.ADD_FORBID_CONTENTS&&(fi===Qf&&(fi=mi(fi)),Se(fi,A.ADD_FORBID_CONTENTS,Ut)),sl&&(me["#text"]=!0),G&&Se(me,["html","head","body"]),me.table&&(Se(me,["tbody"]),delete sr.tbody),A.TRUSTED_TYPES_POLICY){if(typeof A.TRUSTED_TYPES_POLICY.createHTML!="function")throw Al('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof A.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Al('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');P=A.TRUSTED_TYPES_POLICY,O=P.createHTML("")}else P===void 0&&(P=P_(g,i)),P!==null&&typeof O=="string"&&(O=P.createHTML(""));jr&&jr(A),Bs=A}},pb=Se({},[...Im,...Nm,...k_]),bb=Se({},[...Om,...x_]),W3=function(A){let R=C(A);(!R||!R.tagName)&&(R={namespaceURI:Rs,tagName:"template"});const ne=zc(A.tagName),ct=zc(R.tagName);return rh[A.namespaceURI]?A.namespaceURI===Yu?R.namespaceURI===Ti?ne==="svg":R.namespaceURI===Zu?ne==="svg"&&(ct==="annotation-xml"||Ju[ct]):!!pb[ne]:A.namespaceURI===Zu?R.namespaceURI===Ti?ne==="math":R.namespaceURI===Yu?ne==="math"&&Xu[ct]:!!bb[ne]:A.namespaceURI===Ti?R.namespaceURI===Yu&&!Xu[ct]||R.namespaceURI===Zu&&!Ju[ct]?!1:!bb[ne]&&(j3[ne]||!pb[ne]):!!(ll==="application/xhtml+xml"&&rh[A.namespaceURI]):!1},hi=function(A){$l(t.removed,{element:A});try{C(A).removeChild(A)}catch{y(A)}},zo=function(A,R){try{$l(t.removed,{attribute:R.getAttributeNode(A),from:R})}catch{$l(t.removed,{attribute:null,from:R})}if(R.removeAttribute(A),A==="is")if($t||qr)try{hi(R)}catch{}else try{R.setAttribute(A,"")}catch{}},yb=function(A){let R=null,ne=null;if(Ye)A="<remove></remove>"+A;else{const Tt=Pm(A,/^[\r\n\t ]+/);ne=Tt&&Tt[0]}ll==="application/xhtml+xml"&&Rs===Ti&&(A='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+A+"</body></html>");const ct=P?P.createHTML(A):A;if(Rs===Ti)try{R=new h().parseFromString(ct,ll)}catch{}if(!R||!R.documentElement){R=H.createDocument(Rs,"template",null);try{R.documentElement.innerHTML=th?O:ct}catch{}}const wr=R.body||R.documentElement;return A&&ne&&wr.insertBefore(r.createTextNode(ne),wr.childNodes[0]||null),Rs===Ti?X.call(R,G?"html":"body")[0]:G?R.documentElement:wr},vb=function(A){return ee.call(A.ownerDocument||A,A,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},ih=function(A){return A instanceof f&&(typeof A.nodeName!="string"||typeof A.textContent!="string"||typeof A.removeChild!="function"||!(A.attributes instanceof d)||typeof A.removeAttribute!="function"||typeof A.setAttribute!="function"||typeof A.namespaceURI!="string"||typeof A.insertBefore!="function"||typeof A.hasChildNodes!="function")},wb=function(A){return typeof a=="function"&&A instanceof a};function Mi(le,A,R){Ec(le,ne=>{ne.call(t,A,R,Bs)})}const kb=function(A){let R=null;if(Mi(ae.beforeSanitizeElements,A,null),ih(A))return hi(A),!0;const ne=Ut(A.nodeName);if(Mi(ae.uponSanitizeElement,A,{tagName:ne,allowedTags:me}),ue&&A.hasChildNodes()&&!wb(A.firstElementChild)&&Fr(/<[/\w!]/g,A.innerHTML)&&Fr(/<[/\w!]/g,A.textContent)||A.nodeType===Cl.progressingInstruction||ue&&A.nodeType===Cl.comment&&Fr(/<[/\w]/g,A.data))return hi(A),!0;if(!(on.tagCheck instanceof Function&&on.tagCheck(ne))&&(!me[ne]||sr[ne])){if(!sr[ne]&&$b(ne)&&(Be.tagNameCheck instanceof RegExp&&Fr(Be.tagNameCheck,ne)||Be.tagNameCheck instanceof Function&&Be.tagNameCheck(ne)))return!1;if(sl&&!fi[ne]){const ct=C(A)||A.parentNode,wr=D(A)||A.childNodes;if(wr&&ct){const Tt=wr.length;for(let Wr=Tt-1;Wr>=0;--Wr){const Fi=b(wr[Wr],!0);Fi.__removalCount=(A.__removalCount||0)+1,ct.insertBefore(Fi,x(A))}}}return hi(A),!0}return A instanceof l&&!W3(A)||(ne==="noscript"||ne==="noembed"||ne==="noframes")&&Fr(/<\/no(script|embed|frames)/i,A.innerHTML)?(hi(A),!0):(S&&A.nodeType===Cl.text&&(R=A.textContent,Ec([$e,Ue,Ge],ct=>{R=Dl(R,ct," ")}),A.textContent!==R&&($l(t.removed,{element:A.cloneNode()}),A.textContent=R)),Mi(ae.afterSanitizeElements,A,null),!1)},xb=function(A,R,ne){if(nn[R]||sn&&(R==="id"||R==="name")&&(ne in r||ne in q3))return!1;if(!(ol&&!nn[R]&&Fr(yr,R))){if(!(Si&&Fr(Ct,R))){if(!(on.attributeCheck instanceof Function&&on.attributeCheck(R,A))){if(!Ze[R]||nn[R]){if(!($b(A)&&(Be.tagNameCheck instanceof RegExp&&Fr(Be.tagNameCheck,A)||Be.tagNameCheck instanceof Function&&Be.tagNameCheck(A))&&(Be.attributeNameCheck instanceof RegExp&&Fr(Be.attributeNameCheck,R)||Be.attributeNameCheck instanceof Function&&Be.attributeNameCheck(R,A))||R==="is"&&Be.allowCustomizedBuiltInElements&&(Be.tagNameCheck instanceof RegExp&&Fr(Be.tagNameCheck,ne)||Be.tagNameCheck instanceof Function&&Be.tagNameCheck(ne))))return!1}else if(!eh[R]){if(!Fr(St,Dl(ne,Tn,""))){if(!((R==="src"||R==="xlink:href"||R==="href")&&A!=="script"&&b_(ne,"data:")===0&&fb[A])){if(!(E&&!Fr(Sn,Dl(ne,Tn,"")))){if(ne)return!1}}}}}}}return!0},$b=function(A){return A!=="annotation-xml"&&Pm(A,Ur)},Db=function(A){Mi(ae.beforeSanitizeAttributes,A,null);const{attributes:R}=A;if(!R||ih(A))return;const ne={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ze,forceKeepAttr:void 0};let ct=R.length;for(;ct--;){const wr=R[ct],{name:Tt,namespaceURI:Wr,value:Fi}=wr,Ls=Ut(Tt),oh=Fi;let ar=Tt==="value"?oh:y_(oh);if(ne.attrName=Ls,ne.attrValue=ar,ne.keepAttr=!0,ne.forceKeepAttr=void 0,Mi(ae.uponSanitizeAttribute,A,ne),ar=ne.attrValue,jo&&(Ls==="id"||Ls==="name")&&(zo(Tt,A),ar=Xf+ar),ue&&Fr(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,ar)){zo(Tt,A);continue}if(Ls==="attributename"&&Pm(ar,"href")){zo(Tt,A);continue}if(ne.forceKeepAttr)continue;if(!ne.keepAttr){zo(Tt,A);continue}if(!q&&Fr(/\/>/i,ar)){zo(Tt,A);continue}S&&Ec([$e,Ue,Ge],Eb=>{ar=Dl(ar,Eb," ")});const Ab=Ut(A.nodeName);if(!xb(Ab,Ls,ar)){zo(Tt,A);continue}if(P&&typeof g=="object"&&typeof g.getAttributeType=="function"&&!Wr)switch(g.getAttributeType(Ab,Ls)){case"TrustedHTML":{ar=P.createHTML(ar);break}case"TrustedScriptURL":{ar=P.createScriptURL(ar);break}}if(ar!==oh)try{Wr?A.setAttributeNS(Wr,Tt,ar):A.setAttribute(Tt,ar),ih(A)?hi(A):g2(t.removed)}catch{zo(Tt,A)}}Mi(ae.afterSanitizeAttributes,A,null)},V3=function le(A){let R=null;const ne=vb(A);for(Mi(ae.beforeSanitizeShadowDOM,A,null);R=ne.nextNode();)Mi(ae.uponSanitizeShadowNode,R,null),kb(R),Db(R),R.content instanceof o&&le(R.content);Mi(ae.afterSanitizeShadowDOM,A,null)};return t.sanitize=function(le){let A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},R=null,ne=null,ct=null,wr=null;if(th=!le,th&&(le="<!-->"),typeof le!="string"&&!wb(le))if(typeof le.toString=="function"){if(le=le.toString(),typeof le!="string")throw Al("dirty is not a string, aborting")}else throw Al("toString is not a function");if(!t.isSupported)return le;if(Q||nh(A),t.removed=[],typeof le=="string"&&(al=!1),al){if(le.nodeName){const Fi=Ut(le.nodeName);if(!me[Fi]||sr[Fi])throw Al("root node is forbidden and cannot be sanitized in-place")}}else if(le instanceof a)R=yb("<!---->"),ne=R.ownerDocument.importNode(le,!0),ne.nodeType===Cl.element&&ne.nodeName==="BODY"||ne.nodeName==="HTML"?R=ne:R.appendChild(ne);else{if(!$t&&!S&&!G&&le.indexOf("<")===-1)return P&&vr?P.createHTML(le):le;if(R=yb(le),!R)return $t?null:vr?O:""}R&&Ye&&hi(R.firstChild);const Tt=vb(al?le:R);for(;ct=Tt.nextNode();)kb(ct),Db(ct),ct.content instanceof o&&V3(ct.content);if(al)return le;if($t){if(qr)for(wr=oe.call(R.ownerDocument);R.firstChild;)wr.appendChild(R.firstChild);else wr=R;return(Ze.shadowroot||Ze.shadowrootmode)&&(wr=ye.call(n,wr,!0)),wr}let Wr=G?R.outerHTML:R.innerHTML;return G&&me["!doctype"]&&R.ownerDocument&&R.ownerDocument.doctype&&R.ownerDocument.doctype.name&&Fr(l3,R.ownerDocument.doctype.name)&&(Wr="<!DOCTYPE "+R.ownerDocument.doctype.name+`>
`+Wr),S&&Ec([$e,Ue,Ge],Fi=>{Wr=Dl(Wr,Fi," ")}),P&&vr?P.createHTML(Wr):Wr},t.setConfig=function(){let le=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};nh(le),Q=!0},t.clearConfig=function(){Bs=null,Q=!1},t.isValidAttribute=function(le,A,R){Bs||nh({});const ne=Ut(le),ct=Ut(A);return xb(ne,ct,R)},t.addHook=function(le,A){typeof A=="function"&&$l(ae[le],A)},t.removeHook=function(le,A){if(A!==void 0){const R=g_(ae[le],A);return R===-1?void 0:p_(ae[le],R,1)[0]}return g2(ae[le])},t.removeHooks=function(le){ae[le]=[]},t.removeAllHooks=function(){ae=k2()},t}var Uf=u3();const wz=Object.freeze(Object.defineProperty({__proto__:null,default:Uf},Symbol.toStringTag,{value:"Module"}));function Jp(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ns=Jp();function c3(e){Ns=e}var ts={exec:()=>null};function _e(e,t=""){let r=typeof e=="string"?e:e.source,n={replace:(i,o)=>{let s=typeof o=="string"?o:o.source;return s=s.replace(Rr.caret,"$1"),r=r.replace(i,s),n},getRegex:()=>new RegExp(r,t)};return n}var I_=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Rr={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}>`)},N_=/^(?:[ \t]*(?:\n|$))+/,O_=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,R_=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Hu=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,B_=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Xp=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,d3=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,f3=_e(d3).replace(/bull/g,Xp).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),L_=_e(d3).replace(/bull/g,Xp).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Qp=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,__=/^[^\n]+/,eb=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,j_=_e(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",eb).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),z_=_e(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Xp).getRegex(),qf="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",tb=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,U_=_e("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",tb).replace("tag",qf).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),h3=_e(Qp).replace("hr",Hu).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qf).getRegex(),q_=_e(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",h3).getRegex(),rb={blockquote:q_,code:O_,def:j_,fences:R_,heading:B_,hr:Hu,html:U_,lheading:f3,list:z_,newline:N_,paragraph:h3,table:ts,text:__},x2=_e("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Hu).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qf).getRegex(),W_={...rb,lheading:L_,table:x2,paragraph:_e(Qp).replace("hr",Hu).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",x2).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",qf).getRegex()},V_={...rb,html:_e(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",tb).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ts,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:_e(Qp).replace("hr",Hu).replace("heading",` *#{1,6} *[^
]`).replace("lheading",f3).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},K_=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,H_=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,m3=/^( {2,}|\\)\n(?!\s*$)/,G_=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Wf=/[\p{P}\p{S}]/u,nb=/[\s\p{P}\p{S}]/u,g3=/[^\s\p{P}\p{S}]/u,Z_=_e(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,nb).getRegex(),p3=/(?!~)[\p{P}\p{S}]/u,Y_=/(?!~)[\s\p{P}\p{S}]/u,J_=/(?:[^\s\p{P}\p{S}]|~)/u,b3=/(?![*_])[\p{P}\p{S}]/u,X_=/(?![*_])[\s\p{P}\p{S}]/u,Q_=/(?:[^\s\p{P}\p{S}]|[*_])/u,ej=_e(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",I_?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),y3=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,tj=_e(y3,"u").replace(/punct/g,Wf).getRegex(),rj=_e(y3,"u").replace(/punct/g,p3).getRegex(),v3="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",nj=_e(v3,"gu").replace(/notPunctSpace/g,g3).replace(/punctSpace/g,nb).replace(/punct/g,Wf).getRegex(),ij=_e(v3,"gu").replace(/notPunctSpace/g,J_).replace(/punctSpace/g,Y_).replace(/punct/g,p3).getRegex(),oj=_e("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,g3).replace(/punctSpace/g,nb).replace(/punct/g,Wf).getRegex(),sj=_e(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,b3).getRegex(),aj="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",lj=_e(aj,"gu").replace(/notPunctSpace/g,Q_).replace(/punctSpace/g,X_).replace(/punct/g,b3).getRegex(),uj=_e(/\\(punct)/,"gu").replace(/punct/g,Wf).getRegex(),cj=_e(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),dj=_e(tb).replace("(?:-->|$)","-->").getRegex(),fj=_e("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",dj).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Md=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,hj=_e(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Md).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),w3=_e(/^!?\[(label)\]\[(ref)\]/).replace("label",Md).replace("ref",eb).getRegex(),k3=_e(/^!?\[(ref)\](?:\[\])?/).replace("ref",eb).getRegex(),mj=_e("reflink|nolink(?!\\()","g").replace("reflink",w3).replace("nolink",k3).getRegex(),$2=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ib={_backpedal:ts,anyPunctuation:uj,autolink:cj,blockSkip:ej,br:m3,code:H_,del:ts,delLDelim:ts,delRDelim:ts,emStrongLDelim:tj,emStrongRDelimAst:nj,emStrongRDelimUnd:oj,escape:K_,link:hj,nolink:k3,punctuation:Z_,reflink:w3,reflinkSearch:mj,tag:fj,text:G_,url:ts},gj={...ib,link:_e(/^!?\[(label)\]\((.*?)\)/).replace("label",Md).getRegex(),reflink:_e(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Md).getRegex()},H0={...ib,emStrongRDelimAst:ij,emStrongLDelim:rj,delLDelim:sj,delRDelim:lj,url:_e(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",$2).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:_e(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",$2).getRegex()},pj={...H0,br:_e(m3).replace("{2,}","*").getRegex(),text:_e(H0.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Sc={normal:rb,gfm:W_,pedantic:V_},Sl={normal:ib,gfm:H0,breaks:pj,pedantic:gj},bj={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},D2=e=>bj[e];function gi(e,t){if(t){if(Rr.escapeTest.test(e))return e.replace(Rr.escapeReplace,D2)}else if(Rr.escapeTestNoEncode.test(e))return e.replace(Rr.escapeReplaceNoEncode,D2);return e}function A2(e){try{e=encodeURI(e).replace(Rr.percentDecode,"%")}catch{return null}return e}function E2(e,t){let r=e.replace(Rr.findPipe,(o,s,a)=>{let l=!1,u=s;for(;--u>=0&&a[u]==="\\";)l=!l;return l?"|":" |"}),n=r.split(Rr.splitPipe),i=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(Rr.slashPipe,"|");return n}function Tl(e,t,r){let n=e.length;if(n===0)return"";let i=0;for(;i<n&&e.charAt(n-i-1)===t;)i++;return e.slice(0,n-i)}function yj(e,t){if(e.indexOf(t[1])===-1)return-1;let r=0;for(let n=0;n<e.length;n++)if(e[n]==="\\")n++;else if(e[n]===t[0])r++;else if(e[n]===t[1]&&(r--,r<0))return n;return r>0?-2:-1}function vj(e,t=0){let r=t,n="";for(let i of e)if(i==="	"){let o=4-r%4;n+=" ".repeat(o),r+=o}else n+=i,r++;return n}function C2(e,t,r,n,i){let o=t.href,s=t.title||null,a=e[1].replace(i.other.outputLinkReplace,"$1");n.state.inLink=!0;let l={type:e[0].charAt(0)==="!"?"image":"link",raw:r,href:o,title:s,text:a,tokens:n.inlineTokens(a)};return n.state.inLink=!1,l}function wj(e,t,r){let n=e.match(r.other.indentCodeCompensation);if(n===null)return t;let i=n[1];return t.split(`
`).map(o=>{let s=o.match(r.other.beginningSpace);if(s===null)return o;let[a]=s;return a.length>=i.length?o.slice(i.length):o}).join(`
`)}var Fd=class{options;rules;lexer;constructor(e){this.options=e||Ns}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let r=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Tl(r,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let r=t[0],n=wj(r,t[3]||"",this.rules);return{type:"code",raw:r,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let r=t[2].trim();if(this.rules.other.endingHash.test(r)){let n=Tl(r,"#");(this.options.pedantic||!n||this.rules.other.endingSpaceChar.test(n))&&(r=n.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Tl(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let r=Tl(t[0],`
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
`);continue}}return{type:"blockquote",raw:n,tokens:o,text:i}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r=t[1].trim(),n=r.length>1,i={type:"list",raw:"",ordered:n,start:n?+r.slice(0,-1):"",loose:!1,items:[]};r=n?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=n?r:"[*+-]");let o=this.rules.other.listItemRegex(r),s=!1;for(;e;){let l=!1,u="",d="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let f=vj(t[2].split(`
`,1)[0],t[1].length),h=e.split(`
`,1)[0],g=!f.trim(),m=0;if(this.options.pedantic?(m=2,d=f.trimStart()):g?m=t[1].length+1:(m=f.search(this.rules.other.nonSpaceChar),m=m>4?1:m,d=f.slice(m),m+=t[1].length),g&&this.rules.other.blankLine.test(h)&&(u+=h+`
`,e=e.substring(h.length+1),l=!0),!l){let b=this.rules.other.nextBulletRegex(m),y=this.rules.other.hrRegex(m),x=this.rules.other.fencesBeginRegex(m),D=this.rules.other.headingBeginRegex(m),C=this.rules.other.htmlBeginRegex(m),P=this.rules.other.blockquoteBeginRegex(m);for(;e;){let O=e.split(`
`,1)[0],H;if(h=O,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),H=h):H=h.replace(this.rules.other.tabCharGlobal,"    "),x.test(h)||D.test(h)||C.test(h)||P.test(h)||b.test(h)||y.test(h))break;if(H.search(this.rules.other.nonSpaceChar)>=m||!h.trim())d+=`
`+H.slice(m);else{if(g||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||x.test(f)||D.test(f)||y.test(f))break;d+=`
`+h}g=!h.trim(),u+=O+`
`,e=e.substring(O.length+1),f=H.slice(m)}}i.loose||(s?i.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(s=!0)),i.items.push({type:"list_item",raw:u,task:!!this.options.gfm&&this.rules.other.listIsTask.test(d),loose:!1,text:d,tokens:[]}),i.raw+=u}let a=i.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let l of i.items){if(this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]),l.task){if(l.text=l.text.replace(this.rules.other.listReplaceTask,""),l.tokens[0]?.type==="text"||l.tokens[0]?.type==="paragraph"){l.tokens[0].raw=l.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),l.tokens[0].text=l.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let d=this.lexer.inlineQueue.length-1;d>=0;d--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[d].src)){this.lexer.inlineQueue[d].src=this.lexer.inlineQueue[d].src.replace(this.rules.other.listReplaceTask,"");break}}let u=this.rules.other.listTaskCheckbox.exec(l.raw);if(u){let d={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};l.checked=d.checked,i.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=d.raw+l.tokens[0].raw,l.tokens[0].text=d.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(d)):l.tokens.unshift({type:"paragraph",raw:d.raw,text:d.raw,tokens:[d]}):l.tokens.unshift(d)}}if(!i.loose){let u=l.tokens.filter(f=>f.type==="space"),d=u.length>0&&u.some(f=>this.rules.other.anyLine.test(f.raw));i.loose=d}}if(i.loose)for(let l of i.items){l.loose=!0;for(let u of l.tokens)u.type==="text"&&(u.type="paragraph")}return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let r=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:r,raw:t[0],href:n,title:i}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let r=E2(t[1]),n=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(r.length===n.length){for(let s of n)this.rules.other.tableAlignRight.test(s)?o.align.push("right"):this.rules.other.tableAlignCenter.test(s)?o.align.push("center"):this.rules.other.tableAlignLeft.test(s)?o.align.push("left"):o.align.push(null);for(let s=0;s<r.length;s++)o.header.push({text:r[s],tokens:this.lexer.inline(r[s]),header:!0,align:o.align[s]});for(let s of i)o.rows.push(E2(s,o.header.length).map((a,l)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:o.align[l]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let r=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:r,tokens:this.lexer.inline(r)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let r=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let o=Tl(r.slice(0,-1),"\\");if((r.length-o.length)%2===0)return}else{let o=yj(t[2],"()");if(o===-2)return;if(o>-1){let s=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,s).trim(),t[3]=""}}let n=t[2],i="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(n);o&&(n=o[1],i=o[3])}else i=t[3]?t[3].slice(1,-1):"";return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?n=n.slice(1):n=n.slice(1,-1)),C2(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let n=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=t[n.toLowerCase()];if(!i){let o=r[0].charAt(0);return{type:"text",raw:o,text:o}}return C2(r,i,r[0],this.lexer,this.rules)}}emStrong(e,t,r=""){let n=this.rules.inline.emStrongLDelim.exec(e);if(!(!n||n[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(n[1]||n[2])||!r||this.rules.inline.punctuation.exec(r))){let i=[...n[0]].length-1,o,s,a=i,l=0,u=n[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,t=t.slice(-1*e.length+i);(n=u.exec(t))!=null;){if(o=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!o)continue;if(s=[...o].length,n[3]||n[4]){a+=s;continue}else if((n[5]||n[6])&&i%3&&!((i+s)%3)){l+=s;continue}if(a-=s,a>0)continue;s=Math.min(s,s+a+l);let d=[...n[0]][0].length,f=e.slice(0,i+n.index+d+s);if(Math.min(i,s)%2){let g=f.slice(1,-1);return{type:"em",raw:f,text:g,tokens:this.lexer.inlineTokens(g)}}let h=f.slice(2,-2);return{type:"strong",raw:f,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let r=t[2].replace(this.rules.other.newLineCharGlobal," "),n=this.rules.other.nonSpaceChar.test(r),i=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return n&&i&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:t[0],text:r}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e,t,r=""){let n=this.rules.inline.delLDelim.exec(e);if(n&&(!n[1]||!r||this.rules.inline.punctuation.exec(r))){let i=[...n[0]].length-1,o,s,a=i,l=this.rules.inline.delRDelim;for(l.lastIndex=0,t=t.slice(-1*e.length+i);(n=l.exec(t))!=null;){if(o=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!o||(s=[...o].length,s!==i))continue;if(n[3]||n[4]){a+=s;continue}if(a-=s,a>0)continue;s=Math.min(s,s+a);let u=[...n[0]][0].length,d=e.slice(0,i+n.index+u+s),f=d.slice(i,-i);return{type:"del",raw:d,text:f,tokens:this.lexer.inlineTokens(f)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let r,n;return t[2]==="@"?(r=t[1],n="mailto:"+r):(r=t[1],n=r),{type:"link",raw:t[0],text:r,href:n,tokens:[{type:"text",raw:r,text:r}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let r,n;if(t[2]==="@")r=t[0],n="mailto:"+r;else{let i;do i=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(i!==t[0]);r=t[0],t[1]==="www."?n="http://"+t[0]:n=t[0]}return{type:"link",raw:t[0],text:r,href:n,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let r=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:r}}}},Zn=class G0{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Ns,this.options.tokenizer=this.options.tokenizer||new Fd,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let r={other:Rr,block:Sc.normal,inline:Sl.normal};this.options.pedantic?(r.block=Sc.pedantic,r.inline=Sl.pedantic):this.options.gfm&&(r.block=Sc.gfm,this.options.breaks?r.inline=Sl.breaks:r.inline=Sl.gfm),this.tokenizer.rules=r}static get rules(){return{block:Sc,inline:Sl}}static lex(t,r){return new G0(r).lex(t)}static lexInline(t,r){return new G0(r).inlineTokens(t)}lex(t){t=t.replace(Rr.carriageReturn,`
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
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):r.push(i);continue}if(t){let s="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(s);break}else throw new Error(s)}}return this.state.top=!0,r}inline(t,r=[]){return this.inlineQueue.push({src:t,tokens:r}),r}inlineTokens(t,r=[]){let n=t,i=null;if(this.tokens.links){let l=Object.keys(this.tokens.links);if(l.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)l.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,i.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(i=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)o=i[2]?i[2].length:0,n=n.slice(0,i.index+o)+"["+"a".repeat(i[0].length-o-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let s=!1,a="";for(;t;){s||(a=""),s=!1;let l;if(this.options.extensions?.inline?.some(d=>(l=d.call({lexer:this},t,r))?(t=t.substring(l.raw.length),r.push(l),!0):!1))continue;if(l=this.tokenizer.escape(t)){t=t.substring(l.raw.length),r.push(l);continue}if(l=this.tokenizer.tag(t)){t=t.substring(l.raw.length),r.push(l);continue}if(l=this.tokenizer.link(t)){t=t.substring(l.raw.length),r.push(l);continue}if(l=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(l.raw.length);let d=r.at(-1);l.type==="text"&&d?.type==="text"?(d.raw+=l.raw,d.text+=l.text):r.push(l);continue}if(l=this.tokenizer.emStrong(t,n,a)){t=t.substring(l.raw.length),r.push(l);continue}if(l=this.tokenizer.codespan(t)){t=t.substring(l.raw.length),r.push(l);continue}if(l=this.tokenizer.br(t)){t=t.substring(l.raw.length),r.push(l);continue}if(l=this.tokenizer.del(t,n,a)){t=t.substring(l.raw.length),r.push(l);continue}if(l=this.tokenizer.autolink(t)){t=t.substring(l.raw.length),r.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(t))){t=t.substring(l.raw.length),r.push(l);continue}let u=t;if(this.options.extensions?.startInline){let d=1/0,f=t.slice(1),h;this.options.extensions.startInline.forEach(g=>{h=g.call({lexer:this},f),typeof h=="number"&&h>=0&&(d=Math.min(d,h))}),d<1/0&&d>=0&&(u=t.substring(0,d+1))}if(l=this.tokenizer.inlineText(u)){t=t.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(a=l.raw.slice(-1)),s=!0;let d=r.at(-1);d?.type==="text"?(d.raw+=l.raw,d.text+=l.text):r.push(l);continue}if(t){let d="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return r}},Pd=class{options;parser;constructor(e){this.options=e||Ns}space(e){return""}code({text:e,lang:t,escaped:r}){let n=(t||"").match(Rr.notSpaceStart)?.[0],i=e.replace(Rr.endingNewline,"")+`
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${gi(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:r}){let n=this.parser.parseInline(r),i=A2(e);if(i===null)return n;e=i;let o='<a href="'+e+'"';return t&&(o+=' title="'+gi(t)+'"'),o+=">"+n+"</a>",o}image({href:e,title:t,text:r,tokens:n}){n&&(r=this.parser.parseInline(n,this.parser.textRenderer));let i=A2(e);if(i===null)return gi(r);e=i;let o=`<img src="${e}" alt="${gi(r)}"`;return t&&(o+=` title="${gi(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:gi(e.text)}},ob=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},Yn=class Z0{options;renderer;textRenderer;constructor(t){this.options=t||Ns,this.options.renderer=this.options.renderer||new Pd,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ob}static parse(t,r){return new Z0(r).parse(t)}static parseInline(t,r){return new Z0(r).parseInline(t)}parse(t){let r="";for(let n=0;n<t.length;n++){let i=t[n];if(this.options.extensions?.renderers?.[i.type]){let s=i,a=this.options.extensions.renderers[s.type].call({parser:this},s);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(s.type)){r+=a||"";continue}}let o=i;switch(o.type){case"space":{r+=this.renderer.space(o);break}case"hr":{r+=this.renderer.hr(o);break}case"heading":{r+=this.renderer.heading(o);break}case"code":{r+=this.renderer.code(o);break}case"table":{r+=this.renderer.table(o);break}case"blockquote":{r+=this.renderer.blockquote(o);break}case"list":{r+=this.renderer.list(o);break}case"checkbox":{r+=this.renderer.checkbox(o);break}case"html":{r+=this.renderer.html(o);break}case"def":{r+=this.renderer.def(o);break}case"paragraph":{r+=this.renderer.paragraph(o);break}case"text":{r+=this.renderer.text(o);break}default:{let s='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}parseInline(t,r=this.renderer){let n="";for(let i=0;i<t.length;i++){let o=t[i];if(this.options.extensions?.renderers?.[o.type]){let a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){n+=a||"";continue}}let s=o;switch(s.type){case"escape":{n+=r.text(s);break}case"html":{n+=r.html(s);break}case"link":{n+=r.link(s);break}case"image":{n+=r.image(s);break}case"checkbox":{n+=r.checkbox(s);break}case"strong":{n+=r.strong(s);break}case"em":{n+=r.em(s);break}case"codespan":{n+=r.codespan(s);break}case"br":{n+=r.br(s);break}case"del":{n+=r.del(s);break}case"text":{n+=r.text(s);break}default:{let a='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return n}},jl=class{options;block;constructor(e){this.options=e||Ns}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?Zn.lex:Zn.lexInline}provideParser(){return this.block?Yn.parse:Yn.parseInline}},kj=class{defaults=Jp();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Yn;Renderer=Pd;TextRenderer=ob;Lexer=Zn;Tokenizer=Fd;Hooks=jl;constructor(...e){this.use(...e)}walkTokens(e,t){let r=[];for(let n of e)switch(r=r.concat(t.call(this,n)),n.type){case"table":{let i=n;for(let o of i.header)r=r.concat(this.walkTokens(o.tokens,t));for(let o of i.rows)for(let s of o)r=r.concat(this.walkTokens(s.tokens,t));break}case"list":{let i=n;r=r.concat(this.walkTokens(i.items,t));break}default:{let i=n;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(o=>{let s=i[o].flat(1/0);r=r.concat(this.walkTokens(s,t))}):i.tokens&&(r=r.concat(this.walkTokens(i.tokens,t)))}}return r}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{let n={...r};if(n.async=this.defaults.async||n.async||!1,r.extensions&&(r.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let o=t.renderers[i.name];o?t.renderers[i.name]=function(...s){let a=i.renderer.apply(this,s);return a===!1&&(a=o.apply(this,s)),a}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=t[i.level];o?o.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),n.extensions=t),r.renderer){let i=this.defaults.renderer||new Pd(this.defaults);for(let o in r.renderer){if(!(o in i))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let s=o,a=r.renderer[s],l=i[s];i[s]=(...u)=>{let d=a.apply(i,u);return d===!1&&(d=l.apply(i,u)),d||""}}n.renderer=i}if(r.tokenizer){let i=this.defaults.tokenizer||new Fd(this.defaults);for(let o in r.tokenizer){if(!(o in i))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let s=o,a=r.tokenizer[s],l=i[s];i[s]=(...u)=>{let d=a.apply(i,u);return d===!1&&(d=l.apply(i,u)),d}}n.tokenizer=i}if(r.hooks){let i=this.defaults.hooks||new jl;for(let o in r.hooks){if(!(o in i))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let s=o,a=r.hooks[s],l=i[s];jl.passThroughHooks.has(o)?i[s]=u=>{if(this.defaults.async&&jl.passThroughHooksRespectAsync.has(o))return(async()=>{let f=await a.call(i,u);return l.call(i,f)})();let d=a.call(i,u);return l.call(i,d)}:i[s]=(...u)=>{if(this.defaults.async)return(async()=>{let f=await a.apply(i,u);return f===!1&&(f=await l.apply(i,u)),f})();let d=a.apply(i,u);return d===!1&&(d=l.apply(i,u)),d}}n.hooks=i}if(r.walkTokens){let i=this.defaults.walkTokens,o=r.walkTokens;n.walkTokens=function(s){let a=[];return a.push(o.call(this,s)),i&&(a=a.concat(i.call(this,s))),a}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Zn.lex(e,t??this.defaults)}parser(e,t){return Yn.parse(e,t??this.defaults)}parseMarkdown(e){return(t,r)=>{let n={...r},i={...this.defaults,...n},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&n.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let s=i.hooks?await i.hooks.preprocess(t):t,a=await(i.hooks?await i.hooks.provideLexer():e?Zn.lex:Zn.lexInline)(s,i),l=i.hooks?await i.hooks.processAllTokens(a):a;i.walkTokens&&await Promise.all(this.walkTokens(l,i.walkTokens));let u=await(i.hooks?await i.hooks.provideParser():e?Yn.parse:Yn.parseInline)(l,i);return i.hooks?await i.hooks.postprocess(u):u})().catch(o);try{i.hooks&&(t=i.hooks.preprocess(t));let s=(i.hooks?i.hooks.provideLexer():e?Zn.lex:Zn.lexInline)(t,i);i.hooks&&(s=i.hooks.processAllTokens(s)),i.walkTokens&&this.walkTokens(s,i.walkTokens);let a=(i.hooks?i.hooks.provideParser():e?Yn.parse:Yn.parseInline)(s,i);return i.hooks&&(a=i.hooks.postprocess(a)),a}catch(s){return o(s)}}}onError(e,t){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let n="<p>An error occurred:</p><pre>"+gi(r.message+"",!0)+"</pre>";return t?Promise.resolve(n):n}if(t)return Promise.reject(r);throw r}}},ys=new kj;function Ke(e,t){return ys.parse(e,t)}Ke.options=Ke.setOptions=function(e){return ys.setOptions(e),Ke.defaults=ys.defaults,c3(Ke.defaults),Ke};Ke.getDefaults=Jp;Ke.defaults=Ns;Ke.use=function(...e){return ys.use(...e),Ke.defaults=ys.defaults,c3(Ke.defaults),Ke};Ke.walkTokens=function(e,t){return ys.walkTokens(e,t)};Ke.parseInline=ys.parseInline;Ke.Parser=Yn;Ke.parser=Yn.parse;Ke.Renderer=Pd;Ke.TextRenderer=ob;Ke.Lexer=Zn;Ke.lexer=Zn.lex;Ke.Tokenizer=Fd;Ke.Hooks=jl;Ke.parse=Ke;Ke.options;Ke.setOptions;Ke.use;Ke.walkTokens;Ke.parseInline;Yn.parse;Zn.lex;const Zr="structured-rendering-markdown-rendering-content-for-screenshot",xj=`
.${Zr} > *:first-child {
    margin-top: 0;
}
.${Zr} > *:last-child {
    margin-bottom: 0;
}
`,x3={accentColor:"dodgerblue",bodySize:"14px",h1Size:"22px",h2Size:"18px",h3Size:"16px",h4Size:"15px",h5Size:"14px",h6Size:"14px",bodyGap:"24px",smallTextSize:"10px",liSpacing:"4px",bodyFont:"sans-serif",codeFont:"monospace",codeSize:"1em",codeBackgroundColor:ie.colors["vira-grey-behind-fg-small-body"].background.value,contentSelector:`.${Zr}`,tableBorderColor:ie.colors["vira-grey-foreground-decoration"].foreground.value,tableBorderWidth:"1px"};function $j(e){return ut(ks(x3,e),(t,r)=>T.isString(r)?ve(r):r instanceof Wi?r:r.value)}const Vf=Dj();function Dj(e){const t=$j(e);return j`
        ${ve(x3.contentSelector)} {
            display: flex;
            flex-direction: column;
            gap: ${t.bodyGap};
            font-family: ${t.bodyFont};
            font-size: ${t.bodySize};
            align-items: flex-start;

            & * {
                font-family: inherit;
                font-size: inherit;
                ${el}
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
    `}const S2=Ci()({tagName:"vir-markdown",styles:j`
        :host {
            display: flex;
            flex-direction: column;
        }
    `,state(){return{renderedElement:void 0,sanitizedHtml:JN({async updateCallback(e){const t=await Ke.parse(e);return Uf.sanitize(t)}}),lastStyleString:""}},render({inputs:e,state:t,updateState:r,host:n}){t.sanitizedHtml.update(e.markdownString);const i=String(e.renderStyles||Vf);return o3({maintainFirstStylesheet:!0,newStyles:i,oldStyles:t.lastStyleString,shadowRoot:n.shadowRoot})&&r({lastStyleString:i}),aO(t.sanitizedHtml,v`
                <${se.assign({icon:Fa})}></${se}>
            `,o=>v`
                    <div
                        class=${Zr}
                        ${vd(s=>{s instanceof HTMLElement&&r({renderedElement:s})})}
                    >
                        ${IN(o)}
                    </div>
                `,o=>v`
                    <${Iv}>
                        ${Na("Failed to parse markdown content.",o)}
                    </${Iv}>
                `)}}),Aj=Ce({x1:-1,y1:-1,x2:-1,y2:-1}),Kf=Ce({type:ke("source"),pageNumbers:Le([Le(-1)]),fileName:Le(""),fileBoundingBoxes:Le([Le(Aj)]),quote:Le("")});function Hf(e){return hg.isLengthAtLeast(uo(e).filter(Ej),1)}function Ej(e){return!!(e&&(e.quote?.trim()||e.fileName||e.pageNumbers?.filter(T.isDefined).length))}const Id=Ci()({tagName:"vir-source",hostClasses:{"vir-source-phone-size":({inputs:e})=>e.options.isPhoneSize},events:{viewOnPageClick:nr()},cssVars:{"vir-source-background-color":ie.colors[Ar].background.value,"vir-source-borer-radius":K["vira-form-radius"].value,"vir-source-header-color":ie.colors["vira-grey-foreground-header"].foreground.value,"vir-source-view-on-page-icon-color":K["vira-form-accent-primary-color"].value,"vir-source-view-on-page-hover-background-color":ie.colors["vira-grey-behind-fg-small-body"].background.value,"vir-source-view-on-page-active-background-color":ie.colors["vira-grey-behind-fg-body"].background.value,"vir-source-font-size":"16px","vir-source-phone-font-size":"14px"},styles:({hostClasses:e,cssVars:t})=>j`
        ${tm} {
            background: ${t["vir-source-background-color"].value};
            border-radius: ${t["vir-source-borer-radius"].value};
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        p {
            ${el}
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
                    ${fn};
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

                    & ${se} {
                        width: ${t["vir-source-font-size"].value};
                        height: ${t["vir-source-font-size"].value};
                    }
                }
            }
        }

        ${se} {
            width: 20px;
            height: 20px;
        }

        ${e["vir-source-phone-size"].selector} {
            padding: 4px;
            ${t["vir-source-phone-font-size"].value}

            gap: 4px;

            & ${se} {
                width: 18px;
                height: 18px;
            }
        }
    `,render({inputs:e,dispatch:t,events:r}){const n=Hf(e.sources);return n?v`
            <${tm}>
                <p class="header">
                    <${se.assign({icon:e.options.sourceIcon,fitContainer:!0})}></${se}>
                    <span>${e.options.pluralSourcesString}</span>
                </p>
                <div class="entries">
                    ${n.map(i=>{const o=!e.options.hideViewOnPageButtons&&i.fileName&&i.pageNumbers?.length?v`
                                      <button
                                          class="view-on-page-button"
                                          title=${i.fileName}
                                          ${Ee("click",()=>{t(new r.viewOnPageClick(i))})}
                                      >
                                          <${se.assign({icon:e.options.viewOnPageIcon,fitContainer:!0})}></${se}>
                                          ${e.options.createViewOnPageString(i.pageNumbers[0]??1)}
                                      </button>
                                  `:void 0,s=i.quote?.trim()||"",a=s?v`
                                  <p class="source-text">"${s}"</p>
                              `:void 0;return a||o?v`
                                <div class="entry">${a} ${o}</div>
                            `:fe})}
                </div>
            </${tm}>
        `:fe}}),Gf=Ce({type:ke("icon"),iconKey:"",strokeColor:Le(""),fillColor:Le(""),strokeWidth:Le(je("",-1))});function $3(e,{icons:t}){const r=t[e.iconKey];return r?tB(r,{"vira-icon-fill-color":e.fillColor||void 0,"vira-icon-stroke-color":e.strokeColor||void 0,"vira-icon-stroke-width":T.isString(e.strokeWidth)?e.strokeWidth:T.isNumber(e.strokeWidth)?pg({value:e.strokeWidth,suffix:"px"}):void 0}):void 0}function _o(e,t){return Ce({type:ke(e),sectionTitle:Le(""),sources:Le([Le(Kf)]),...t})}const Zf=Ce({type:ke("empty")}),sb=_o("inlineCode",{code:""}),Yf=_o("tag",{text:Np(""),useBigTag:Le(!1),color:Le(je({custom:fN({backgroundColor:Le(""),foregroundColor:Le("")})},{variant:ai(re)}))});var ze=(e=>(e.Faint="faint",e.Small="small",e.Bold="bold",e))(ze||{});const Gu=_o("text",{text:Le(Np()),style:Le(ai(ze)),icon:Le(Gf)}),Cj=Ce({content:Le(je(Gu,Yf,Zf)),icon:Le(Gf),sources:Le([Le(Kf)])}),ab=_o("list",{items:[Cj]}),lb=_o("markdown",{markdown:""}),ub=Ce({type:ke("processing")});var cb=(e=>(e.Left="left",e.Right="right",e))(cb||{}),gt=(e=>(e.Horizontal="horizontal",e.Vertical="vertical",e))(gt||{});const Tc=je(Gu,sb,lb,Yf,ab,Zf,ub),D3=_o("table",{direction:ai(gt),headers:[{key:"",text:Le(Gu),hidden:Le(!1)}],entries:[{data:zu({keys:"",values:je(Le(Tc),[Le(Tc)])}),sources:Le([Le(Kf)])}],footerRows:Le([{alignment:Le(ai(cb)),cells:je(Le(Tc),[Le(Tc)])}])});function Sj(e,t,r,n){return{type:"table",direction:e,headers:t,entries:r,footerRows:n}}const A3=_o("codeBlock",{syntax:Le(""),code:""}),Tj=_o("collapsible",{header:Np(),content:[je(A3,Zf,Gf,sb,ab,lb,ub,Yf,D3,Gu)]}),E3=[A3,sb,Zf,ab,lb,Yf,ub,Kf,D3,Gu,Gf,Tj];je(...E3);const p=xo(E3,e=>({key:e.default.type,value:e.default.type}),{}),C3={icons:rB,sourceString:"Source",pluralSourcesString:"Sources"},db={...C3,styles:Vf},Mj={...C3,processingString:"Processing",currentlyExpanded:{},sourceIcon:D$,viewOnPageIcon:zp,processingIcon:Fa,expandSourcesOnPrint:!1,hideViewOnPageButtons:!1,isPhoneSize:!1,markdownStyles:Vf,createViewOnPageString(e){return`View on page ${e}`},expandAllCards:!1,blockCardExpansion:!1};function Fj(e,t){const r=ks(Mj,t);return oo(e,r,[])}function Pj(e){if(e==null)return;if(!T.isString(e))return String(e);const t=e.trim();if(!t)return;const r=t.split(`
`);return r.flatMap((n,i)=>v`
            ${n}${i<r.length-1?v`
                      <br />
                  `:""}
        `)}const Ij={icon(e,t){const r=$3(e,t);return r?v`
            <${se.assign({icon:r})}></${se}>
        `:fe},codeBlock(e){return v`
            <pre>${e.code}</pre>
        `},collapsible(e,t,r){return v`
            <${la.assign({rawCollapsible:!0})}>
                <span slot=${la.slotNames.header}>${String(e.header)}</span>
                ${oo(e.content,t,[...r,"collapsible"])}
            </${la}>
        `},empty(){},inlineCode(e){return v`
            <code>${e.code}</code>
        `},list(e,t,r){const n=Kt(e.items,(i,o)=>{if(!i.icon&&!i.content)return;const s=[...r,o],a=i.content?oo(i.content,t,[...s,"content"]):void 0,l=i.icon?oo(i.icon,t,[...s,"icon"]):fe,u=v`
                    ${l}${a}
                `;return v`
                    <li
                        class=${bn({"list-item-with-icon":!!i.icon})}
                    >
                        ${F3(u,t,s,i.sources)}
                    </li>
                `},T.isTruthy);if(n.length)return v`
            <ul>
                ${n}
            </ul>
        `},markdown(e,t){return v`
            <${S2.assign({markdownString:e.markdown,renderStyles:t.markdownStyles})}></${S2}>
        `},tag(e){const t=e.color&&"custom"in e.color&&(e.color.custom.backgroundColor||e.color.custom.foregroundColor)?j`
                      ${e.color.custom.backgroundColor?j`
                                ${Ll.cssVars["vira-tag-background-color"].name}: ${ve(e.color.custom.backgroundColor)};
                            `:j``}
                      ${e.color.custom.foregroundColor?j`
                                ${Ll.cssVars["vira-tag-text-color"].name}: ${ve(e.color.custom.foregroundColor)};
                            `:j``}
                  `:void 0,r=e.color&&"variant"in e.color?e.color.variant:void 0;return v`
            <${Ll.assign({text:e.text,color:t?re.None:r,size:e.useBigTag?Er.Medium:Er.Small,emphasis:In.Subtle})}
                style=${Qt(t)}
            ></${Ll}>
        `},processing(e,t){return v`
            <${se.assign({icon:t.processingIcon})}></${se}>
            <span>${t.processingString}...</span>
        `},source(e,t){return v`
            <${Id.assign({options:t,sources:e})}></${Id}>
        `},table(e,t,r){const{headerRow:n,rows:i}=o_(Kt(e.headers,(l,u)=>{if(!l.hidden)return{key:l.key,content:l.text?oo(l.text,t,[...r,"headers",u]):l.key}},T.isTruthy),e.entries,(l,u)=>ut(l.data,(d,f)=>{const h=uo(f).filter(T.isTruthy);return h.length?Array.from(PN(Kt(h,(m,b)=>{const y="sources"in m?{sources:e.direction===gt.Vertical?void 0:m.sources}:{};return oo({...m,...y},t,[...r,u,d,b])},T.isTruthy),v`
                                <br />
                            `)):void 0}),{orientation:e.direction===gt.Horizontal?ds.Vertical:ds.Horizontal}),o=i.map(l=>{const u=l.cells.at(-1),d=e.direction===gt.Vertical&&u?uo(u.data?.data[u.key]).filter(T.isTruthy).flatMap(f=>"sources"in f?uo(f.sources):[]):void 0;return Hf([...uo(d),...uo(l.data?.sources)])}),s=o.some(l=>!!l?.length),a=i[0]?.cells.length||0;return v`
            <table
                cellspacing="0"
                cellpadding="0"
                class=${bn({vertical:e.direction===gt.Vertical,horizontal:e.direction===gt.Horizontal,"wide-table":e.direction===gt.Horizontal&&n?n.length>5:e.direction===gt.Vertical&&i[0]?i[0].cells.length>5:!1})}
            >
                ${n?v`
                          <thead>
                              <tr>
                                  ${n.map(l=>v`
                                          <th>${l.content}</th>
                                      `)}
                                  ${s?v`
                                            <th class="source-cell"></th>
                                        `:fe}
                              </tr>
                          </thead>
                      `:fe}
                <tbody>
                    ${i.map((l,u)=>{const d=[...r,u],f=o[u],h=l.cells.map((m,b)=>{const y=b===l.cells.length-1,x=e.direction===gt.Vertical&&b===0?"th":"td",D=v`
                                <${x}>${m.content}</${x}>
                            `;return f?.length&&y?v`
                                    ${D}
                                    <td class="source-cell">
                                        ${T3("",t,d,f)}
                                    </td>
                                `:D}),g=f?.length?v`
                                  <tr class="source-row">
                                      <td colspan=${h.length}>
                                          ${M3(t,d,f)}
                                      </td>
                                  </tr>
                              `:fe;return v`
                            <tr>
                                ${h}
                                ${s?v`
                                          <td class="source-cell"></td>
                                      `:fe}
                            </tr>
                            ${g}
                        `})}
                </tbody>
                ${e.footerRows?.length?v`
                          <tfoot>
                              ${e.footerRows.map((l,u)=>{const d=uo(l.cells);if(!d.length)return fe;const f=l.alignment===cb.Right?a-d.length+1:0,h=d.map((g,m)=>{const b=m?0:f,y=b<1?void 0:b,x=g?oo(g,t,[...r,"footers",u,m]):fe;return v`
                                          <td
                                              colspan=${Qt(y)}
                                              class=${bn({"right-aligned-footer-cell":!!y})}
                                          >
                                              ${x}
                                          </td>
                                      `});return v`
                                      <tr>${h}</tr>
                                  `})}
                          </tfoot>
                      `:fe}
            </table>
        `},text(e,t,r){const n=Pj(e.text),i=e.style?`text-style-${e.style}`:void 0;if(n)return v`
            ${oo(e.icon,t,[...r,"icon"])}
            <span
                class=${[i,"text-section-text-content"].join(" ")}
            >
                ${n}
            </span>
        `}};function oo(e,t,r){return Y0(e,t,r,!1).filter(T.isTruthy)}const T2=gg(p,e=>[e,"section"].join("-")),Nj="structured-render-section";function Y0(e,t,r,n){if(e){if(T.isArray(e))return e.flatMap((i,o)=>Y0(i,t,[...r,o],n));if("type"in e){const i="sectionTitle"in e&&r.length>0&&!(n&&r.at(-1)===0)&&e.sectionTitle||void 0,o=Ij[e.type](e,t,r),s="sources"in e&&e.sources||void 0,a=v`
            <div
                class=${bn({"section-wrapper":!0,"top-section-wrapper":n,[T2[e.type]]:!0})}
                ${S0(Nj)}
                ${S0(T2[e.type])}
            >
                ${F3(o,t,r,s)}
            </div>
        `;return[i?v`
                      <h3>${i}</h3>
                  `:void 0,a]}else if("sections"in e){const i=Y0(e.sections,t,[...r,"sections"],!0);return[v`
                <${la.assign({expandOnPrint:!0,blockExpansion:t.blockCardExpansion,hideHeader:!e.cardTitle,startExpanded:t.expandAllCards||r.at(-1)===0})}>
                    <h2 slot=${la.slotNames.header}>${e.cardTitle}</h2>
                    ${i}
                </${la}>
            `]}else throw Nt.tsType(e).equals(),new Error(`Unexpected structured render type: ${$(e)}`)}else return[]}const S3=Af()("source-expansion");function T3(e,t,r,n){const i=Hf(n),o=[...r,"source-icon"],s=J0(o),a=!!t.currentlyExpanded[s],l=i?v`
              <div class="source-icon-wrapper">
                  <button class="source-icon-button">
                      <${se.assign({icon:t.sourceIcon,fitContainer:!0})}
                          ${Ee("click",u=>{Uu(u,HTMLElement).dispatchEvent(new S3({expanded:!a,key:J0(o)}))})}
                      ></${se}>
                  </button>
              </div>
          `:fe;return v`
        <div class="source-content-wrapper">${e}${l}</div>
    `}function M3(e,t,r){const n=Hf(r);if(!n)return;const i=[...t,"source-icon"],o=J0(i),s=!!e.currentlyExpanded[o];return v`
        <${pi.assign({expanded:s,expandOnPrint:e.expandSourcesOnPrint})}
            class="collapsible-source-wrapper ${bn({"expanded-source":s})}"
        >
            <span slot=${pi.slotNames.header}></span>
            <${Id.assign({options:e,sources:n})}></${Id}>
        </${pi}>
    `}function F3(e,t,r,n){return v`
        ${T3(e,t,r,n)}
        ${M3(t,r,n)}
    `}function J0(e){return["key",...e].join(";").replaceAll(" ","_").replaceAll(/[^\w;]/g,"")}const M2=j`4px`,te=Ci()({tagName:"vir-structured-render",state(){return{currentlyExpanded:{},lastStyleString:""}},cssVars:{"vir-structured-render-h1-font-size":"24px","vir-structured-render-h2-font-size":"18px","vir-structured-render-h3-font-size":"16px","vir-structured-render-small-font-size":"12px"},hostClasses:{"vir-structured-render-phone-size":({inputs:e})=>!!e.options?.isPhoneSize,"vir-structured-render-tablet-size":({inputs:e})=>!!e.options?.isTabletSize},styles:({cssVars:e,hostClasses:t})=>j`
        :host {
            ${Yr(ie.colors[Ar])}
        }

        ${se} {
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

            & ${Ll} {
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
            color: ${ie.colors["vira-grey-foreground-non-body"].foreground.value};
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
                ${fn};
                cursor: pointer;
                color: ${ie.colors["vira-grey-foreground-header"].foreground.value};
                padding: 2px;
                border-radius: 4px;

                & ${se} {
                    display: flex;
                }

                &:hover {
                    background-color: ${ie.colors["vira-grey-behind-fg-small-body"].background.value};
                    color: ${K["vira-form-accent-primary-color"].value};
                }

                &:active {
                    background-color: ${ie.colors["vira-grey-behind-fg-body"].background.value};
                    color: ${K["vira-form-accent-primary-color"].value};
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

            & ${se} {
                width: 20px;
                height: 20px;
            }
        }

        .${ve(Zr)}.${ve(Zr)}.${ve(Zr)}.${ve(Zr)} {
            ul {
                ${el}
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
                margin-right: ${M2};
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
            margin-right: ${M2};
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

            & ${se} {
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
    `,render({inputs:e,state:t,updateState:r,host:n}){const i=String(e.options?.markdownStyles||Vf);o3({maintainFirstStylesheet:!0,newStyles:i,oldStyles:t.lastStyleString,shadowRoot:n.shadowRoot})&&r({lastStyleString:i});const o=Fj(e.data,{...e.options,currentlyExpanded:{...e.options?.currentlyExpanded,...t.currentlyExpanded}});return v`
            <div
                ${Ee(S3,s=>{r({currentlyExpanded:{...t.currentlyExpanded,[s.detail.key]:s.detail.expanded}})})}
                class=${Zr}
            >
                ${o}
            </div>
        `}});async function Oj(){const e=await mo(()=>import("./index-BLfgbgf6.js").then(r=>r.i),__vite__mapDeps([0,1]));return e.default||e}function Bn(e,t){const r=ks(db,t);return P3(e,r).filter(T.isTruthy).join(`

`)}const Rj={[ze.Bold]:"**"};function Bj(e,t,r){const n=e.entries.length+1,i=t.map(o=>{const s=o.text?Bn(o.text,r):o.key,a=e.entries.map(l=>Bn(l.data[o.key],r));return[s,...a]});return[mg(n,()=>""),...i]}function Lj(e,t,r){const n=t.map(o=>o.text?Bn(o.text,r):o.key),i=e.entries.map(o=>t.map(s=>Bn(o.data[s.key],r)));return[n,...i]}const _j={[gt.Vertical]:Bj,[gt.Horizontal]:Lj},jj={icon(e,t){const r=$3(e,t);return r?Ea(r.svgTemplate):""},collapsible(){return""},codeBlock(e){return`\`\`\`${e.syntax||""}
${e.code}
\`\`\``},inlineCode(e){return`\`${e.code}\``},empty(){return""},list(e,t){return Kt(e.items,r=>{const n=Bn(r.content,t),i=Bn(r.icon,t);if(n){const o=i?`- ${i} ${n}`:`- ${n}`,s=(r.sources||[]).map(a=>Bn(a,t)).filter(T.isTruthy).join(`
`);return s?`${o}
${s}`:o}else return""},T.isTruthy).join(`
`)},markdown(e){return e.markdown},tag(e){return e.text==null?"":String(e.text)},processing(){return""},source(e,t){const r=e.pageNumbers?.filter(T.isDefined),n=r?.length?`p. ${r.join(", ")}`:"",i=[e.fileName,n].filter(T.isTruthy).join(", ");return i?`<small>${t.sourceString}: ${i}</small>`:""},table(e,t){const r=e.headers.filter(l=>!l.hidden),n=_j[e.direction](e,r,t),i=n[0].length||0,o=zj(n,i),[s,...a]=n;return[F2(s,o),Uj(o),...a.map(l=>F2(l,o))].join(`
`)},text(e,t){if(e.text==null)return"";const r=e.style&&Rj[e.style]||"",n=Bn(e.icon,t),i=Ak({value:String(e.text),wrapper:r});return n?`${n} ${i}`:i}};function zj(e,t){return mg(t,r=>e.reduce((n,i,o)=>Math.max(n,Vt.isDefined(i[r],`No cell at row index ${o}, column index ${r}`).length),3))}function F2(e,t){return`| ${e.map((n,i)=>n.padEnd(t[i]??3)).join(" | ")} |`}function Uj(e){return`| ${e.map(r=>"-".repeat(r)).join(" | ")} |`}function P3(e,t,r=!1){if(e){if(T.isArray(e))return e.flatMap(n=>Bn(n,t));if("type"in e){const n="sectionTitle"in e&&!r?e.sectionTitle:void 0,i="sources"in e&&e.sources||[];return[n?`### ${n}`:void 0,jj[e.type](e,t),...i.map(o=>Bn(o,t))]}else{if("sections"in e)return[e.cardTitle&&`## ${e.cardTitle}`,...e.sections.flatMap((n,i)=>P3(n,t,i===0))].filter(T.isTruthy);throw Nt.tsType(e).equals(),new Error(`Unexpected structured render type: ${$(e)}`)}}else return[]}var Jf=(e=>(e.ArrayBuffer="arraybuffer",e.Blob="blob",e.BlobUri="bloburi",e.BlobUrl="bloburl",e.DataUriString="datauristring",e.DataUrlString="dataurlstring",e.DataUri="datauri",e.DataUrl="dataurl",e.DataUrlNewWindow="dataurlnewwindow",e.PdfObjectNewWindow="pdfobjectnewwindow",e.PdfJsNewWindow="pdfjsnewwindow",e.Download="download",e))(Jf||{});function I3(e){return{margin:[25,15],filename:e,image:{type:"jpeg",quality:.98},html2canvas:{scale:2,logging:!1,scrollX:0,scrollY:0,useCORS:!0},jsPDF:{unit:"mm",format:"a4",orientation:"portrait"},pagebreak:{mode:["css","legacy"]}}}async function N3(e,{fileName:t,outputType:r,options:n}){if(!vs(_r.Web))throw new Error(`${O3.name} cannot run outside of a browser.`);const i=ks(db,n),[o]=await Promise.all([Oj(),Vj()]),s=await Ke.parse(Bn(e,i)),a=Ea(v`
        <div class=${Zr}>${Uf.sanitize(s)}</div>
    `),l=I3(t),u=await qj(a,String(i.styles),l),d=o().set(l).from(u);if(r.pdf)if(r.pdf==="download"){const f=await d.outputPdf("blob"),h=URL.createObjectURL(f),g=globalThis.document.createElement("a");g.href=h,g.download=t.endsWith(".pdf")?t:`${t}.pdf`,g.style.display="none",globalThis.document.body.append(g),g.click(),g.remove(),URL.revokeObjectURL(h);return}else return await d.outputPdf(r.pdf,{filename:t});else{if(r.image)return r.image==="download"?await d.toImg().save(t):await d.outputImg(r.image);throw Nt.tsType(r).equals(),new Error(`Invalid output type: ${$(r)}`)}}async function qj(e,t,r){const n=Kj(r.margin),o=210-n[1]-n[3],s=globalThis.document.createElement("iframe");s.style.position="fixed",s.style.left="-10000px",s.style.top="0",s.style.width=`${o}mm`,s.style.height="0",s.style.border="none",s.setAttribute("aria-hidden","true"),s.srcdoc=["<!DOCTYPE html><html><head><style>",xj,t,'</style></head><body style="margin:0;padding:0;">',e,"</body></html>"].join(""),globalThis.document.body.append(s);try{await new Promise(u=>{s.addEventListener("load",()=>{u()},{once:!0})});const a=Vt.isDefined(s.contentDocument);await a.fonts.ready;const l=Vt.isDefined(a.body.firstElementChild);return s.style.height=`${a.body.scrollHeight}px`,await mu(3),await Wj()(l,{...r.html2canvas})}finally{s.remove()}}let Nd;function Wj(){if(!Nd)throw new Error("html2canvas has not been loaded yet. Call preloadHtml2Canvas() first.");return Nd}async function Vj(){Nd||(Nd=(await mo(async()=>{const{default:e}=await import("./html2canvas.esm-DXEQVQnt.js");return{default:e}},[])).default)}function Kj(e){return e==null?[0,0,0,0]:typeof e=="number"?[e,e,e,e]:e.length===2?[e[0],e[1],e[0],e[1]]:[e[0],e[1],e[2],e[3]]}async function O3(e,{saveLocationPath:t,outputType:r,options:n}){if(vs(_r.Web))throw new Error(`${O3.name} cannot run inside of a browser.`);const i=ks(db,n),{chromium:o}=await mo(async()=>{const{chromium:D}=await import("playwright");return{chromium:D}},[]),{readFile:s,writeFile:a,mkdir:l}=await mo(async()=>{const{readFile:D,writeFile:C,mkdir:P}=await import("node:fs/promises");return{readFile:D,writeFile:C,mkdir:P}},[]),{createRequire:u}=await mo(async()=>{const{createRequire:D}=await Promise.resolve().then(()=>dz);return{createRequire:D}},void 0),{basename:d,dirname:f}=await mo(async()=>{const{basename:D,dirname:C}=await import("node:path");return{basename:D,dirname:C}},[]),h=u(import.meta.url),[g,m]=await Promise.all([s(h.resolve("html2pdf.js/dist/html2pdf.bundle.min.js"),"utf-8"),s(h.resolve("dompurify/dist/purify.min.js"),"utf-8")]),b=await Ke.parse(Bn(e,i)),y=Ea(v`
        <style id="styles">
            ${i.styles}
        </style>
    `),x=await o.launch();try{const D=await x.newPage();await D.setContent(y,{waitUntil:"networkidle"}),await D.addScriptTag({content:g}),await D.addScriptTag({content:m});const C=I3(d(t));r.image&&(C.image={type:"png"});const O=(await D.evaluate(async({html2pdfOptions:H,outputType:ee,dirtyMarkdown:oe,wrapperClass:X,outputImageType:ye,outputPdfType:ae})=>{const $e=Uf.sanitize(oe),Ue=html2pdf().set(H).from(`<div class="${X}">${$e}</div>`);if(ee.image)return await Ue.outputImg(ye,{filename:H.filename});if(ee.pdf)return await Ue.outputPdf(ae,{filename:H.filename});throw new Error("Invalid output type selected.")},{html2pdfOptions:C,outputType:r,dirtyMarkdown:b,wrapperClass:Zr,outputImageType:"datauristring",outputPdfType:"datauristring"})).split(",")[1];await l(f(t),{recursive:!0}),await a(t,Buffer.from(O,"base64"))}finally{await x.close()}return t}async function R3(e,{pdfOutputType:t,...r}){if(!vs(_r.Web))throw new Error(`${R3.name} cannot run outside of a browser.`);return N3(e,{outputType:{pdf:t||Jf.Download},...r})}async function B3(e,t){if(!vs(_r.Web))throw new Error(`${B3.name} cannot run outside of a browser.`);const r=await N3(e,{outputType:{pdf:Jf.Blob},...t}),n=URL.createObjectURL(r),i=navigator.userAgent.toLowerCase(),o=i.includes("firefox"),s=/iphone|ipad|ipod/.test(i)||i.includes("macintosh")&&navigator.maxTouchPoints>1;if(o||s){if(!globalThis.window.open(n))throw URL.revokeObjectURL(n),new Error("Failed to open print window. Check your popup blocker settings.");return}const a=globalThis.document.createElement("iframe");a.style.position="fixed",a.style.left="-10000px",a.style.top="0",a.style.width="1px",a.style.height="1px",a.style.border="none",a.style.opacity="0",a.src=n,globalThis.document.body.append(a),await new Promise(u=>{a.addEventListener("load",()=>{u()},{once:!0})});const l=a.contentWindow;if(!l){URL.revokeObjectURL(n),a.remove();return}return await mu(3),await zd({milliseconds:250}),await mu(3),new Promise(u=>{function d(){URL.revokeObjectURL(n),a.remove(),u()}let f=!1;function h(){f||(f=!0,globalThis.window.removeEventListener("focus",g),d())}function g(){h()}l.addEventListener("afterprint",()=>{h()},{once:!0}),globalThis.window.addEventListener("focus",g,{once:!0}),l.print()})}const wu=[{cardTitle:"Frontend Performance",sections:[{type:p.text,sectionTitle:"Overview",text:"Frontend performance metrics collected from the last 30 days of production monitoring.",sources:[{type:"source",fileName:"performance-report-2026-02.pdf",pageNumbers:[1,2],quote:"Metrics aggregated from real user monitoring (RUM) data across all production traffic."}]},{type:p.table,sectionTitle:"Core Web Vitals",direction:gt.Horizontal,sources:[{type:"source",fileName:"lighthouse-audit.json",pageNumbers:[3],quote:"Core Web Vitals thresholds based on Chrome UX Report field data."},{type:"source",fileName:"web-vitals-spec.md",quote:"Targets align with Google recommended thresholds for good user experience."}],headers:[{key:"metric"},{key:"p50"},{key:"p95"},{key:"target"},{key:"status"}],entries:[{data:{metric:{type:p.text,text:"Largest Contentful Paint",style:ze.Bold},p50:{type:p.inlineCode,code:"1.2s"},p95:{type:p.inlineCode,code:"2.8s"},target:{type:p.text,text:"< 2.5s"},status:{type:p.tag,text:"Pass",color:{variant:re.Positive}}}},{data:{metric:{type:p.text,text:"First Input Delay",style:ze.Bold},p50:{type:p.inlineCode,code:"12ms"},p95:{type:p.inlineCode,code:"85ms"},target:{type:p.text,text:"< 100ms"},status:{type:p.tag,text:"Pass",color:{variant:re.Positive}}}},{data:{metric:{type:p.text,text:"Cumulative Layout Shift",style:ze.Bold},p50:{type:p.inlineCode,code:"0.18"},p95:{type:p.inlineCode,code:"0.32"},target:{type:p.text,text:"< 0.1"},status:{type:p.tag,text:"Fail",color:{variant:re.Danger}}},sources:[{type:"source",fileName:"cls-regression-analysis.pdf",pageNumbers:[7],quote:"CLS spike correlated with hero image carousel added in v3.12.0."}]},{data:{metric:{type:p.text,text:"Time to First Byte",style:ze.Bold},p50:{type:p.inlineCode,code:"210ms"},p95:{type:p.inlineCode,code:"480ms"},target:{type:p.text,text:"< 600ms"},status:{type:p.tag,text:"Pass",color:{variant:re.Positive}}}}]},{type:p.list,sectionTitle:"Recommendations",items:[{content:{type:p.text,text:"Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images."},icon:{type:p.icon,iconKey:cn.name,strokeColor:"red"},sources:[{type:"source",fileName:"frontend-performance-review-2026-q1.pdf",pageNumbers:[4],quote:"Layout shifts primarily caused by images without explicit dimensions."},{type:"source",fileName:"web-vitals-optimization-guide.md",quote:"Lazy loading below-the-fold content reduces initial page weight and improves LCP."}]},{icon:{type:p.icon,iconKey:cn.name,strokeColor:"red"},content:{type:p.text,text:"Add explicit width and height attributes to all image elements.",sources:[{type:"source",fileName:"cls-regression-analysis.pdf",pageNumbers:[8],quote:"Missing width/height attributes on images are the primary contributor to layout shift."}]}},{content:{type:p.text,text:"Consider lazy loading below-the-fold content."},sources:[{type:"source",fileName:"frontend-performance-review-2026-q1.pdf",pageNumbers:[4],quote:"Layout shifts primarily caused by images without explicit dimensions."},{type:"source",fileName:"web-vitals-optimization-guide.md",quote:"Lazy loading below-the-fold content reduces initial page weight and improves LCP."}]}]},{type:p.list,sectionTitle:"Action Items",items:[{content:{type:p.text,text:"Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions."},icon:{type:p.icon,iconKey:cn.name,strokeColor:"orange"}},{content:{type:p.text,text:"Enable native lazy loading on below-the-fold images."},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}},{content:{type:p.text,text:"Defer non-critical third-party scripts."},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}}]},Sj(gt.Vertical,[{key:"age",text:{type:p.text,text:"Age"}},{key:"dateOfBirth",text:{type:p.text,text:"DoB"}},{key:"bloodPressure",text:{type:p.text,text:"Blood Pressure"}},{key:"bmi",text:{type:p.text,text:"BMI"}},{key:"heartRate",text:{type:p.text,text:"Heart Rate"}},{key:"oxygenSaturation",text:{type:p.text,text:"Oxygen Saturation"}},{key:"pain",text:{type:p.text,text:"Pain"}},{key:"language",text:{type:p.text,text:"Language"}},{key:"respiratory",text:{type:p.text,text:"Respiratory Rate"}},{key:"sex",text:{type:p.text,text:"Sex"}},{key:"temperature",text:{type:p.text,text:"Temperature"}},{key:"weight",text:{type:p.text,text:"Weight"}},{key:"height",text:{type:p.text,text:"Height"}},{key:"zipCode",text:{type:p.text,text:"Zip Code"}}],[{data:{age:{type:p.text,text:"72",sources:[{type:p.source,fileName:"intake-form.pdf",pageNumbers:[1],quote:"Age: 72"}]},dateOfBirth:{type:p.text,text:"01/15/1954",sources:[{type:p.source,fileName:"intake-form.pdf",pageNumbers:[1],quote:"DOB: 01/15/1954"}]},bloodPressure:{type:p.text,text:"130 / 85",sources:[{type:p.source,fileName:"vitals-chart.pdf",pageNumbers:[2],quote:"BP: 130/85 mmHg"}]},bmi:{type:p.text,text:"27.3",sources:[{type:p.source,fileName:"vitals-chart.pdf",pageNumbers:[2],quote:"BMI: 27.3"}]},heartRate:{type:p.text,text:"78 bpm",sources:[{type:p.source,fileName:"vitals-chart.pdf",pageNumbers:[2],quote:"HR: 78 bpm"}]},height:{type:p.text,text:"170 cm"},oxygenSaturation:{type:p.text,text:"96%, on room air",sources:[{type:p.source,fileName:"vitals-chart.pdf",pageNumbers:[2],quote:"SpO2: 96% on RA"}]},pain:{type:p.text,text:"4/10",sources:[{type:p.source,fileName:"nursing-notes.pdf",pageNumbers:[3],quote:"Pain score: 4/10"}]},language:{type:p.text,text:"English"},respiratory:{type:p.text,text:"18 breaths/min",sources:[{type:p.source,fileName:"vitals-chart.pdf",pageNumbers:[2],quote:"RR: 18 breaths/min"}]},sex:{type:p.text,text:"Male"},temperature:{type:p.text,text:"98.6 °F",sources:[{type:p.source,fileName:"vitals-chart.pdf",pageNumbers:[2],quote:"Temp: 98.6°F"}]},weight:{type:p.text,text:"185 lbs",sources:[{type:p.source,fileName:"vitals-chart.pdf",pageNumbers:[2],quote:"Weight: 185 lbs"}]},zipCode:{type:p.text,text:"90210",sources:[{type:p.source,fileName:"intake-form.pdf",pageNumbers:[1],quote:"Zip: 90210"}]}}}])]},{cardTitle:"Backend API Health",sections:[{type:p.markdown,sectionTitle:"Status Summary",sources:[{type:"source",fileName:"uptime-monitor-export.csv",quote:"Uptime percentages calculated from 5-minute health check intervals."}],markdown:["All **12 services** are operational. Average uptime over the past 30 days: **99.97%**.","","| Service | Uptime |","|---------|--------|","| Auth | 99.99% |","| Users | 99.98% |","| Notifications | 99.91% |","| Billing | 100% |"].join(`
`)},{type:p.table,sectionTitle:"Endpoint Latency (ms)",direction:gt.Vertical,headers:[{key:"endpoint"},{key:"getUsers"},{key:"createUser"},{key:"getReport"},{key:"sendNotification"}],entries:[{data:{endpoint:{type:p.text,text:"p50"},getUsers:{type:p.inlineCode,code:"45"},createUser:{type:p.inlineCode,code:"120"},getReport:{type:p.inlineCode,code:"890"},sendNotification:{type:p.inlineCode,code:"65"}}},{data:{endpoint:{type:p.text,text:"p99"},getUsers:{type:p.inlineCode,code:"180"},createUser:{type:p.inlineCode,code:"450"},getReport:{type:p.inlineCode,code:"3200"},sendNotification:{type:p.inlineCode,code:"210"}}}]},{type:p.codeBlock,sectionTitle:"Slow Query Sample",syntax:"sql",code:["SELECT r.id, r.title, r.created_at,","       u.name AS author_name,","       COUNT(c.id) AS comment_count","FROM reports r","JOIN users u ON u.id = r.author_id","LEFT JOIN comments c ON c.report_id = r.id","WHERE r.created_at > NOW() - INTERVAL '30 days'","GROUP BY r.id, r.title, r.created_at, u.name","ORDER BY r.created_at DESC","LIMIT 100;"].join(`
`)}]},{cardTitle:"Deployment Pipeline",sections:[{type:p.text,sectionTitle:"Current State",text:"The CI/CD pipeline is fully automated with staging and production environments.",icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}},{type:p.table,sectionTitle:"Recent Deployments",direction:gt.Horizontal,sources:[{type:"source",fileName:"ci-pipeline-logs.txt",pageNumbers:[12,15,18,22],quote:"Deployment records extracted from CI/CD pipeline execution logs."}],headers:[{key:"version"},{key:"environment"},{key:"date"},{key:"duration"},{key:"status"}],entries:[{data:{version:{type:p.inlineCode,code:"v3.14.2"},environment:{type:p.tag,text:"Production",color:{variant:re.Positive}},date:{type:p.text,text:"2026-02-28"},duration:{type:p.text,text:"4m 22s"},status:{type:p.tag,text:"Success",color:{variant:re.Positive}}}},{data:{version:{type:p.inlineCode,code:"v3.14.1"},environment:{type:p.tag,text:"Production",color:{variant:re.Positive}},date:{type:p.text,text:"2026-02-25"},duration:{type:p.text,text:"3m 58s"},status:{type:p.tag,text:"Success",color:{variant:re.Positive}}}},{data:{version:{type:p.inlineCode,code:"v3.14.0"},environment:{type:p.tag,text:"Staging",color:{variant:re.Warning}},date:{type:p.text,text:"2026-02-24"},duration:{type:p.text,text:"5m 01s"},status:{type:p.tag,text:"Rolled Back",color:{variant:re.Danger}}}},{data:{version:{type:p.inlineCode,code:"v3.13.9"},environment:{type:p.tag,text:"Production",color:{variant:re.Positive}},date:{type:p.text,text:"2026-02-20"},duration:{type:p.text,text:"4m 10s"},status:{type:p.tag,text:"Success",color:{variant:re.Positive}}}}]},{type:p.list,sectionTitle:"Pipeline Steps",items:[{content:{type:p.text,text:"Lint and type check."},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}},{content:{type:p.text,text:"Unit and integration tests."},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}},{content:{type:p.text,text:"Build production bundle."},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}},{content:{type:p.text,text:"Deploy to staging."},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}},{content:{type:p.text,text:"E2E smoke tests."},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}},{content:{type:p.text,text:"Promote to production."},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}}]},{type:p.codeBlock,sectionTitle:"Pipeline Config Snippet",syntax:"yaml",code:["stages:","  - name: lint","    command: npm run lint","  - name: test","    command: npm test","    parallel: true","  - name: build","    command: npm run build","  - name: deploy-staging","    command: deploy --env staging","  - name: e2e","    command: npm run test:e2e","  - name: deploy-production","    command: deploy --env production","    requires: [e2e]"].join(`
`)},{type:p.collapsible,sectionTitle:"Collapsible Details",header:"Rollback Procedure",content:[{type:p.text,text:"If a deployment fails health checks, the pipeline automatically triggers a rollback to the previous stable version."},{type:p.codeBlock,syntax:"bash",code:["#!/bin/bash","deploy rollback --env production --to-version $LAST_STABLE",'notify --channel ops --message "Rollback initiated"'].join(`
`)}]},{type:p.collapsible,header:"Environment Variables",content:[{type:p.table,direction:gt.Horizontal,headers:[{key:"variable"},{key:"staging"},{key:"production"}],entries:[{data:{variable:{type:p.inlineCode,code:"NODE_ENV"},staging:{type:p.tag,text:"staging",color:{variant:re.Warning}},production:{type:p.tag,text:"production",color:{variant:re.Positive}}}},{data:{variable:{type:p.inlineCode,code:"LOG_LEVEL"},staging:{type:p.text,text:"debug"},production:{type:p.text,text:"warn"}}}]}]},{type:p.collapsible,header:"Post-Deploy Checklist",content:[{type:p.list,items:[{content:{type:p.text,text:"Verify health check endpoints return 200."},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}},{content:{type:p.text,text:"Confirm error rate stays below 0.1% threshold."},icon:{type:p.icon,iconKey:cn.name,strokeColor:"orange"}},{content:{type:p.text,text:"Monitor p99 latency for 15 minutes."},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}}]}]}]}],Hj=Lt({title:"Multi Card",parent:il,descriptionParagraphs:["Multiple cards rendered together to demonstrate complex multi-card layouts."],defineExamples({defineExample:e}){e({title:"three cards",styles:j`
                :host {
                    max-width: 900px;
                }
            `,render(){return v`
                    <${te.assign({data:wu})}></${te}>
                `}})}}),Gj=Lt({title:"Block Expansion",parent:il,descriptionParagraphs:["Cards rendered with blockCardExpansion enabled, which forces all sections expanded and disables toggling."],defineExamples({defineExample:e}){e({title:"all sections locked open",styles:j`
                :host {
                    max-width: 900px;
                }
            `,render(){return v`
                    <${te.assign({data:wu,options:{blockCardExpansion:!0}})}></${te}>
                `}})}}),Zj=Lt({title:"Dense Data",parent:il,descriptionParagraphs:["A single card packed with many sections, large tables, lists, code blocks, and markdown to stress-test rendering."],defineExamples({defineExample:e}){e({title:"comprehensive product analysis",styles:j`
                :host {
                    max-width: 900px;
                }
            `,render(){return v`
                    <${te.assign({data:[{cardTitle:"Comprehensive Product Analysis",sections:[{type:p.text,sectionTitle:"Executive Summary",text:"This analysis covers product adoption, feature usage, customer feedback, technical debt, and roadmap progress across all three product lines.",style:ze.Bold},{type:p.markdown,sectionTitle:"Adoption Trends",markdown:["### Monthly Active Users","","Growth has been **steady** across all tiers:","","- **Free tier**: 14,200 MAU (+8% MoM)","- **Pro tier**: 3,800 MAU (+12% MoM)","- **Enterprise tier**: 420 MAU (+3% MoM)","","### Retention","","Day-7 retention: **68%** | Day-30 retention: **41%** | Day-90 retention: **28%**","","> The largest drop-off occurs between day 7 and day 14, suggesting onboarding improvements could have significant impact."].join(`
`)},{type:p.table,sectionTitle:"Feature Usage Matrix",direction:gt.Horizontal,headers:[{key:"feature"},{key:"freeTier"},{key:"proTier"},{key:"enterpriseTier"},{key:"satisfaction"},{key:"trend"}],entries:[{data:{feature:{type:p.text,text:"Dashboard",style:ze.Bold},freeTier:{type:p.text,text:"92%"},proTier:{type:p.text,text:"97%"},enterpriseTier:{type:p.text,text:"99%"},satisfaction:{type:p.tag,text:"4.5 / 5",color:{variant:re.Positive}},trend:{type:p.tag,text:"Stable",color:{variant:re.Positive}}}},{data:{feature:{type:p.text,text:"Export (PDF/Image)",style:ze.Bold},freeTier:{type:p.text,text:"34%"},proTier:{type:p.text,text:"78%"},enterpriseTier:{type:p.text,text:"91%"},satisfaction:{type:p.tag,text:"3.8 / 5",color:{variant:re.Warning}},trend:{type:p.tag,text:"Growing",color:{variant:re.Positive}}}},{data:{feature:{type:p.text,text:"API Access",style:ze.Bold},freeTier:{type:p.text,text:"5%"},proTier:{type:p.text,text:"42%"},enterpriseTier:{type:p.text,text:"88%"},satisfaction:{type:p.tag,text:"4.1 / 5",color:{variant:re.Positive}},trend:{type:p.tag,text:"Growing",color:{variant:re.Positive}}}},{data:{feature:{type:p.text,text:"Collaboration",style:ze.Bold},freeTier:{type:p.text,text:"18%"},proTier:{type:p.text,text:"61%"},enterpriseTier:{type:p.text,text:"95%"},satisfaction:{type:p.tag,text:"4.3 / 5",color:{variant:re.Positive}},trend:{type:p.tag,text:"Stable",color:{variant:re.Positive}}}},{data:{feature:{type:p.text,text:"Custom Themes",style:ze.Bold},freeTier:{type:p.text,text:"0%"},proTier:{type:p.text,text:"29%"},enterpriseTier:{type:p.text,text:"67%"},satisfaction:{type:p.tag,text:"3.2 / 5",color:{variant:re.Warning}},trend:{type:p.tag,text:"Declining",color:{variant:re.Danger}}}},{data:{feature:{type:p.text,text:"Webhooks",style:ze.Bold},freeTier:{type:p.text,text:"0%"},proTier:{type:p.text,text:"15%"},enterpriseTier:{type:p.text,text:"72%"},satisfaction:{type:p.tag,text:"4.0 / 5",color:{variant:re.Positive}},trend:{type:p.tag,text:"Growing",color:{variant:re.Positive}}}}]},{type:p.list,sectionTitle:"Customer Feedback Themes",items:[{content:{type:p.text,text:"Export quality needs improvement (mentioned 47 times)."},icon:{type:p.icon,iconKey:cn.name,strokeColor:"orange"}},{content:{type:p.text,text:"Dashboard customization is highly valued (mentioned 82 times)."},icon:{type:p.icon,iconKey:Pa.name,strokeColor:"gold"}},{content:{type:p.text,text:"API documentation could be more complete (mentioned 31 times)."},icon:{type:p.icon,iconKey:cn.name,strokeColor:"orange"}},{content:{type:p.text,text:"Real-time collaboration is a top-requested feature (mentioned 64 times)."},icon:{type:p.icon,iconKey:Pa.name,strokeColor:"gold"}},{content:{type:p.text,text:"Mobile experience needs significant work (mentioned 28 times)."},icon:{type:p.icon,iconKey:cn.name,strokeColor:"red"}}]},{type:p.codeBlock,sectionTitle:"Top API Usage Pattern",syntax:"typescript",code:["import {createClient} from '@product/sdk';","","const client = createClient({","    apiKey: process.env.PRODUCT_API_KEY,","    baseUrl: 'https://api.product.com/v2',","});","","const report = await client.reports.create({","    title: 'Weekly Summary',","    sections: [","        {type: 'chart', dataSource: 'revenue'},","        {type: 'table', dataSource: 'transactions'},","        {type: 'text', content: 'Generated automatically.'},","    ],","    format: 'pdf',","});","","await client.reports.export(report.id, {","    destination: 's3://reports-bucket/weekly/',","});"].join(`
`)},{type:p.table,sectionTitle:"Technical Debt Inventory",direction:gt.Horizontal,headers:[{key:"item"},{key:"severity"},{key:"age"},{key:"effort"},{key:"impact"}],entries:[{data:{item:{type:p.text,text:"Legacy auth middleware."},severity:{type:p.tag,text:"High",color:{variant:re.Danger}},age:{type:p.text,text:"18 months"},effort:{type:p.text,text:"3 sprints"},impact:{type:p.text,text:"Blocks SSO integration."}}},{data:{item:{type:p.text,text:"Untyped API responses."},severity:{type:p.tag,text:"Medium",color:{variant:re.Warning}},age:{type:p.text,text:"12 months"},effort:{type:p.text,text:"2 sprints"},impact:{type:p.text,text:"Frequent runtime errors."}}},{data:{item:{type:p.text,text:"Duplicated validation logic."},severity:{type:p.tag,text:"Medium",color:{variant:re.Warning}},age:{type:p.text,text:"9 months"},effort:{type:p.text,text:"1 sprint"},impact:{type:p.text,text:"Inconsistent error messages."}}},{data:{item:{type:p.text,text:"Missing database indexes."},severity:{type:p.tag,text:"High",color:{variant:re.Danger}},age:{type:p.text,text:"6 months"},effort:{type:p.text,text:"0.5 sprint"},impact:{type:p.text,text:"Slow report generation."}}},{data:{item:{type:p.text,text:"Outdated test fixtures."},severity:{type:p.tag,text:"Low",color:{custom:{backgroundColor:"#e0e0e0",foregroundColor:"#333"}}},age:{type:p.text,text:"4 months"},effort:{type:p.text,text:"1 sprint"},impact:{type:p.text,text:"Reduced test reliability."}}}]},{type:p.markdown,sectionTitle:"Roadmap Progress",markdown:["### Q1 2026 Goals","","| Goal | Status | Completion |","|------|--------|------------|","| SSO Integration | In Progress | 60% |","| Mobile App v1 | In Progress | 35% |","| API v3 | Planning | 10% |","| Export Overhaul | Complete | 100% |","| Webhook Reliability | Complete | 100% |","","### Q2 2026 Planned","","- Real-time collaboration MVP.","- Custom theme builder.","- Advanced analytics dashboard.","- Internationalization (i18n) support."].join(`
`)},{type:p.list,sectionTitle:"Key Risks",items:[{content:{type:p.text,text:"SSO integration depends on legacy auth refactor completing first.",style:ze.Bold},icon:{type:p.icon,iconKey:cn.name,strokeColor:"red"}},{content:{type:p.text,text:"Mobile app timeline may slip due to design resource constraints."},icon:{type:p.icon,iconKey:cn.name,strokeColor:"orange"}},{content:{type:p.text,text:"API v3 design needs broader stakeholder input before implementation."}},{content:{type:p.text,text:"Real-time collaboration requires WebSocket infrastructure not yet provisioned."},icon:{type:p.icon,iconKey:cn.name,strokeColor:"orange"}}]},{type:p.text,sectionTitle:"Prepared By",text:"Product & Engineering Team, March 2026.",style:ze.Faint}]}]})}></${te}>
                `}})}}),Yj=Lt({title:"Expand All",parent:il,descriptionParagraphs:["Cards rendered with expandAllCards enabled, which starts all sections expanded but still allows toggling."],defineExamples({defineExample:e}){e({title:"all sections start expanded",styles:j`
                :host {
                    max-width: 900px;
                }
            `,render(){return v`
                    <${te.assign({data:wu,options:{expandAllCards:!0}})}></${te}>
                `}})}}),Jj=Lt({title:"Full Card",parent:il,descriptionParagraphs:["Demos of VirStructuredRender with full StructuredRenderData (card arrays)."],defineExamples({defineExample:e}){e({title:"single card with many sections",styles:j`
                :host {
                    max-width: 900px;
                }
            `,render(){return v`
                    <${te.assign({data:[{cardTitle:"Project Health Report",sections:[{type:p.text,sectionTitle:"Summary",text:"Overall project health is good. Most metrics are within acceptable ranges, though a few areas require attention."},{type:p.markdown,sectionTitle:"Key Findings",markdown:["### Strengths","","- **Code coverage** has improved from 72% to 89% over the past quarter.","- Build times remain under 3 minutes for the full suite.","- Zero critical vulnerabilities in the latest dependency audit.","","### Areas for Improvement","","1. Documentation coverage for public APIs is at 64%.","2. Integration test flakiness has risen to 4.2%.","3. Bundle size has grown 18% since the last review."].join(`
`)},{type:p.table,sectionTitle:"Module Metrics",direction:gt.Horizontal,headers:[{key:"module"},{key:"coverage"},{key:"buildTime"},{key:"status"}],entries:[{data:{module:{type:p.text,text:"Core"},coverage:{type:p.inlineCode,code:"94%"},buildTime:{type:p.text,text:"42s"},status:{type:p.tag,text:"Healthy",color:{variant:re.Positive}}}},{data:{module:{type:p.text,text:"Rendering"},coverage:{type:p.inlineCode,code:"88%"},buildTime:{type:p.text,text:"28s"},status:{type:p.tag,text:"Healthy",color:{variant:re.Positive}}}},{data:{module:{type:p.text,text:"Data Layer"},coverage:{type:p.inlineCode,code:"71%"},buildTime:{type:p.text,text:"1m 14s"},status:{type:p.tag,text:"Needs Attention",color:{variant:re.Warning}}}},{data:{module:{type:p.text,text:"CLI Tools"},coverage:{type:p.inlineCode,code:"82%"},buildTime:{type:p.text,text:"19s"},status:{type:p.tag,text:"Healthy",color:{variant:re.Positive}}}}]},{type:p.codeBlock,sectionTitle:"Sample Config",syntax:"json",code:JSON.stringify({project:"structured-render",coverageThreshold:80,maxBuildTimeSeconds:180,modules:["core","rendering","data-layer","cli-tools"]},null,4)},{type:p.list,sectionTitle:"Action Items",items:[{content:{type:p.text,text:"Increase data layer test coverage to 80%."},icon:{type:p.icon,iconKey:cn.name,strokeColor:"orange"}},{content:{type:p.text,text:"Investigate and fix flaky integration tests."},icon:{type:p.icon,iconKey:cn.name,strokeColor:"orange"}},{content:{type:p.text,text:"Audit bundle size and remove unused dependencies."}},{content:{type:p.text,text:"Add missing JSDoc to public API functions."}},{content:{type:p.text,text:"Schedule quarterly security review."},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}}]},{type:p.text,sectionTitle:"Next Review",text:"Scheduled for Q3 2026.",style:ze.Faint}]}]})}></${te}>
                `}})}}),L3=Lt({title:"Examples",parent:void 0,descriptionParagraphs:["Examples of specific functionality."]}),Xj=Lt({title:"Download and Print",parent:L3,descriptionParagraphs:["Demonstrates downloading and printing structured render data as a PDF."],defineExamples({defineExample:e}){e({title:"print",state(){return{isLoading:!1,isError:!1}},render({state:t,updateState:r}){return v`
                    <${wc.assign({text:"Print",disabled:t.isLoading,icon:t.isError?P0:t.isLoading?Fa:void 0})}
                        ${Ee("click",async()=>{r({isLoading:!0});try{await B3(wu,{fileName:"structured-render-print"})}catch(n){Xc.error("Failed to print PDF",n),r({isError:!0})}finally{r({isLoading:!1})}})}
                    ></${wc}>
                `}}),e({title:"download",state(){return{isLoading:!1,isError:!1}},render({state:t,updateState:r}){return v`
                    <${wc.assign({text:"Download",disabled:t.isLoading,icon:t.isError?P0:t.isLoading?Fa:void 0})}
                        ${Ee("click",async()=>{r({isLoading:!0});try{await R3(wu,{fileName:"structured-render-download",pdfOutputType:Jf.Download})}catch(n){Xc.error("Failed to download PDF",n),r({isError:!0})}finally{r({isLoading:!1})}})}
                    ></${wc}>
                `}})}}),Wn=Lt({title:"Sections",parent:void 0,descriptionParagraphs:["All structured render section types."]}),Qj=Lt({title:"Code Block",parent:Wn,defineExamples({defineExample:e}){e({title:"basic",render(){return v`
                    <${te.assign({data:{type:p.codeBlock,sectionTitle:"Code Block Example",code:`const hello = "world";
console.log(hello);`,syntax:"typescript"}})}></${te}>
                `}}),e({title:"no syntax",render(){return v`
                    <${te.assign({data:{type:p.codeBlock,code:`plain text code block
with multiple lines`,syntax:null}})}></${te}>
                `}})}}),ez=Lt({title:"Empty",parent:Wn,defineExamples({defineExample:e}){e({title:"empty",render(){return v`
                    <${te.assign({data:{type:p.empty}})}></${te}>
                `}})}}),tz=Lt({title:"Icon",parent:Wn,defineExamples({defineExample:e}){e({title:"basic",render(){return v`
                    <${te.assign({data:{type:p.icon,iconKey:Pa.name}})}></${te}>
                `}}),e({title:"colored stroke",render(){return v`
                    <${te.assign({data:{type:p.icon,iconKey:Pa.name,strokeColor:"gold"}})}></${te}>
                `}}),e({title:"colored fill",render(){return v`
                    <${te.assign({data:{type:p.icon,iconKey:xr.name,fillColor:"lime"}})}></${te}>
                `}})}}),rz=Lt({title:"Inline Code",parent:Wn,defineExamples({defineExample:e}){e({title:"basic",render(){return v`
                    <${te.assign({data:{type:p.inlineCode,sectionTitle:"Inline Code Example",code:"const x = 42;"}})}></${te}>
                `}})}}),nz=Lt({title:"List",parent:Wn,defineExamples({defineExample:e}){e({title:"basic",render(){return v`
                    <${te.assign({data:{type:p.list,sectionTitle:"List Example",items:[{content:{type:p.text,text:"First item"}},{content:{type:p.text,text:"Second item"}},{content:{type:p.text,text:"Third item"}}]}})}></${te}>
                `}}),e({title:"with icons",render(){return v`
                    <${te.assign({data:{type:p.list,sectionTitle:"List with Icons",items:[{content:{type:p.text,text:"Completed task"},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}},{content:{type:p.text,text:"Another completed task"},icon:{type:p.icon,iconKey:xr.name,strokeColor:"green"}}]}})}></${te}>
                `}}),e({title:"with tags",render(){return v`
                    <${te.assign({data:{type:p.list,sectionTitle:"List with Tags",items:[{content:{type:p.tag,text:"Important",color:{variant:re.Warning}}},{content:{type:p.tag,text:"Info"}}]}})}></${te}>
                `}})}}),iz=Lt({title:"Markdown",parent:Wn,defineExamples({defineExample:e}){e({title:"basic",render(){return v`
                    <${te.assign({data:{type:p.markdown,sectionTitle:"Markdown Example",markdown:`## Hello World

This is **bold** and _italic_ text.

- Item 1
- Item 2
- Item 3`}})}></${te}>
                `}}),e({title:"with code",render(){return v`
                    <${te.assign({data:{type:p.markdown,sectionTitle:"Markdown with Code",markdown:"### Code Example\n\nHere is some `inline code` and a code block:\n\n```typescript\nconst x = 42;\n```"}})}></${te}>
                `}})}}),oz=Lt({title:"Processing",parent:Wn,defineExamples({defineExample:e}){e({title:"basic",render(){return v`
                    <${te.assign({data:{type:p.processing}})}></${te}>
                `}})}}),sz=Lt({title:"Source",parent:Wn,defineExamples({defineExample:e}){e({title:"with file name",render(){return v`
                    <${te.assign({data:{type:p.source,fileName:"example.ts",pageNumbers:null,fileBoundingBoxes:null,quote:null}})}></${te}>
                `}}),e({title:"with quote",render(){return v`
                    <${te.assign({data:{type:p.source,fileName:"document.pdf",pageNumbers:[1,2],fileBoundingBoxes:null,quote:"This is the relevant quote from the source document."}})}></${te}>
                `}}),e({title:"with page numbers",render(){return v`
                    <${te.assign({data:{type:p.source,fileName:"report.pdf",pageNumbers:[5,10,15],fileBoundingBoxes:null,quote:null}})}></${te}>
                `}})}}),az=Lt({title:"Table",parent:Wn,defineExamples({defineExample:e}){e({title:"horizontal",render(){return v`
                    <${te.assign({data:{type:p.table,sectionTitle:"Horizontal Table",direction:gt.Horizontal,headers:[{key:"name"},{key:"value"}],entries:[{data:{name:{type:p.text,text:"Alpha"},value:{type:p.text,text:"100"}}},{data:{name:{type:p.text,text:"Beta"},value:{type:p.text,text:"200"}}}]}})}></${te}>
                `}}),e({title:"vertical",render(){return v`
                    <${te.assign({data:{type:p.table,sectionTitle:"Vertical Table",direction:gt.Vertical,headers:[{key:"feature"},{key:"status"}],entries:[{data:{feature:{type:p.text,text:"Image Export"},status:{type:p.tag,text:"Supported"}}},{data:{feature:{type:p.text,text:"PDF Export"},status:{type:p.tag,text:"Beta"}}}]}})}></${te}>
                `}}),e({title:"with mixed cell types",render(){return v`
                    <${te.assign({data:{type:p.table,sectionTitle:"Mixed Cell Types",direction:gt.Horizontal,headers:[{key:"label"},{key:"detail"}],entries:[{data:{label:{type:p.text,text:"Status"},detail:{type:p.tag,text:"Active",color:{variant:re.Positive}}}},{data:{label:{type:p.text,text:"Version"},detail:{type:p.inlineCode,code:"v1.0.0"}}}]}})}></${te}>
                `}})}}),lz=Lt({title:"Tag",parent:Wn,defineExamples({defineExample:e}){e({title:"basic",render(){return v`
                    <${te.assign({data:{type:p.tag,sectionTitle:"Tag Example",text:"Default Tag"}})}></${te}>
                `}}),e({title:"custom colors",render(){return v`
                    <${te.assign({data:{type:p.tag,text:"Custom Colors",color:{custom:{backgroundColor:"#e74c3c",foregroundColor:"#ffffff"}}}})}></${te}>
                `}}),e({title:"big tag",render(){return v`
                    <${te.assign({data:{type:p.tag,text:"Big Tag",useBigTag:!0}})}></${te}>
                `}})}}),uz=Lt({title:"Text",parent:Wn,defineExamples({defineExample:e}){e({title:"basic",render(){return v`
                    <${te.assign({data:{type:p.text,sectionTitle:"Text Example",text:"This is a simple text section."}})}></${te}>
                `}}),e({title:"bold",render(){return v`
                    <${te.assign({data:{type:p.text,text:"Bold text section.",style:ze.Bold}})}></${te}>
                `}}),e({title:"small",render(){return v`
                    <${te.assign({data:{type:p.text,text:"Small text section.",style:ze.Small}})}></${te}>
                `}}),e({title:"faint",render(){return v`
                    <${te.assign({data:{type:p.text,text:"Faint text section.",style:ze.Faint}})}></${te}>
                `}}),e({title:"with icon",render(){return v`
                    <${te.assign({data:{type:p.text,text:"Text with icon.",icon:{type:p.icon,iconKey:Pa.name,strokeColor:"gold"}}})}></${te}>
                `}})}}),cz=[Qj,ez,tz,rz,nz,iz,oz,sz,az,lz,uz,Jj,Hj,Zj,Gj,Yj,Xj,il,L3,Wn];Ci()({tagName:"vir-app",styles:j`
        :host {
            display: flex;
            flex-grow: 1;
        }

        ${Ac} {
            flex-grow: 1;
        }

        p {
            ${el}
            text-align: center;
            font-size: 32px;
            font-weight: bold;
            padding: 0 8px;
            padding-bottom: 8px;
        }
    `,render(){return v`
            <${Ac.assign({pages:cz,internalRouterConfig:{useInternalRouter:!0,basePath:"structured-render/demo"}})}>
                <p slot=${Ac.slotNames.navHeader}>Structured<br>Render</p>
            </${Ac}>
        `}});const dz=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{mo as _,wz as a,Uf as p};
