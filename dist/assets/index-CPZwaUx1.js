(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function u(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=u(i);fetch(i.href,n)}})();var oh=Object.defineProperty,ah=(e,t,u)=>t in e?oh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,Rr=(e,t,u)=>(ah(e,typeof t!="symbol"?t+"":t,u),u),ch=(e,t,u)=>{if(!t.has(e))throw TypeError("Cannot "+u)},Br=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},Xu=(e,t,u)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,u)},mo=(e,t,u)=>(ch(e,t,"access private method"),u);function ic(e,t){return Object.is(e,t)}let z=null,Au=!1,rr=1;const hr=Symbol("SIGNAL");function rt(e){const t=z;return z=e,t}function lh(){return z}function dh(){return Au}const en={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Er(e){if(Au)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(z===null)return;z.consumerOnSignalRead(e);const t=z.nextProducerIndex++;if(lt(z),t<z.producerNode.length&&z.producerNode[t]!==e&&oi(z)){const u=z.producerNode[t];Dr(u,z.producerIndexOfThis[t])}z.producerNode[t]!==e&&(z.producerNode[t]=e,z.producerIndexOfThis[t]=oi(z)?oc(e,z,t):0),z.producerLastReadVersion[t]=e.version}function hh(){rr++}function nc(e){if(!(!e.dirty&&e.lastCleanEpoch===rr)){if(!e.producerMustRecompute(e)&&!mh(e)){e.dirty=!1,e.lastCleanEpoch=rr;return}e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=rr}}function sc(e){if(e.liveConsumerNode===void 0)return;const t=Au;Au=!0;try{for(const u of e.liveConsumerNode)u.dirty||ph(u)}finally{Au=t}}function fh(){return z?.consumerAllowSignalWrites!==!1}function ph(e){var t;e.dirty=!0,sc(e),(t=e.consumerMarkedDirty)==null||t.call(e.wrapper??e)}function _h(e){return e&&(e.nextProducerIndex=0),rt(e)}function bh(e,t){if(rt(t),!(!e||e.producerNode===void 0||e.producerIndexOfThis===void 0||e.producerLastReadVersion===void 0)){if(oi(e))for(let u=e.nextProducerIndex;u<e.producerNode.length;u++)Dr(e.producerNode[u],e.producerIndexOfThis[u]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function mh(e){lt(e);for(let t=0;t<e.producerNode.length;t++){const u=e.producerNode[t],r=e.producerLastReadVersion[t];if(r!==u.version||(nc(u),r!==u.version))return!0}return!1}function oc(e,t,u){var r;if(tn(e),lt(e),e.liveConsumerNode.length===0){(r=e.watched)==null||r.call(e.wrapper);for(let i=0;i<e.producerNode.length;i++)e.producerIndexOfThis[i]=oc(e.producerNode[i],e,i)}return e.liveConsumerIndexOfThis.push(u),e.liveConsumerNode.push(t)-1}function Dr(e,t){var u;if(tn(e),lt(e),typeof ngDevMode<"u"&&ngDevMode&&t>=e.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(e.liveConsumerNode.length===1){(u=e.unwatched)==null||u.call(e.wrapper);for(let i=0;i<e.producerNode.length;i++)Dr(e.producerNode[i],e.producerIndexOfThis[i])}const r=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[r],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[r],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){const i=e.liveConsumerIndexOfThis[t],n=e.liveConsumerNode[t];lt(n),n.producerIndexOfThis[i]=t}}function oi(e){var t;return e.consumerIsAlwaysLive||(((t=e?.liveConsumerNode)==null?void 0:t.length)??0)>0}function lt(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function tn(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}function ac(e){if(nc(e),Er(e),e.value===ai)throw e.error;return e.value}function gh(e){const t=Object.create(vh);t.computation=e;const u=()=>ac(t);return u[hr]=t,u}const Lr=Symbol("UNSET"),Ur=Symbol("COMPUTING"),ai=Symbol("ERRORED"),vh={...en,value:Lr,dirty:!0,error:null,equal:ic,producerMustRecompute(e){return e.value===Lr||e.value===Ur},producerRecomputeValue(e){if(e.value===Ur)throw new Error("Detected cycle in computations.");const t=e.value;e.value=Ur;const u=_h(e);let r,i=!1;try{r=e.computation.call(e.wrapper),i=t!==Lr&&t!==ai&&e.equal.call(e.wrapper,t,r)}catch(n){r=ai,e.error=n}finally{bh(e,u)}if(i){e.value=t;return}e.value=r,e.version++}};function xh(){throw new Error}let yh=xh;function $h(){yh()}function kh(e){const t=Object.create(Ah);t.value=e;const u=()=>(Er(t),t.value);return u[hr]=t,u}function Ch(){return Er(this),this.value}function wh(e,t){fh()||$h(),e.equal.call(e.wrapper,e.value,t)||(e.value=t,Eh(e))}const Ah={...en,equal:ic,value:void 0};function Eh(e){e.version++,hh(),sc(e)}const j=Symbol("node");var de;(e=>{var t,u,r,i;class n{constructor(c,l={}){Xu(this,u),Rr(this,t);const s=kh(c)[hr];if(this[j]=s,s.wrapper=this,l){const _=l.equals;_&&(s.equal=_),s.watched=l[e.subtle.watched],s.unwatched=l[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return Ch.call(this[j])}set(c){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(dh())throw new Error("Writes to signals not permitted during Watcher callback");const l=this[j];wh(l,c)}}t=j,u=new WeakSet,e.isState=o=>typeof o=="object"&&Br(u,o),e.State=n;class a{constructor(c,l){Xu(this,i),Rr(this,r);const s=gh(c)[hr];if(s.consumerAllowSignalWrites=!0,this[j]=s,s.wrapper=this,l){const _=l.equals;_&&(s.equal=_),s.watched=l[e.subtle.watched],s.unwatched=l[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return ac(this[j])}}r=j,i=new WeakSet,e.isComputed=o=>typeof o=="object"&&Br(i,o),e.Computed=a,(o=>{var c,l,f,s;function _(g){let h,m=null;try{m=rt(null),h=g()}finally{rt(m)}return h}o.untrack=_;function d(g){var h;if(!(0,e.isComputed)(g)&&!(0,e.isWatcher)(g))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((h=g[j].producerNode)==null?void 0:h.map(m=>m.wrapper))??[]}o.introspectSources=d;function b(g){var h;if(!(0,e.isComputed)(g)&&!(0,e.isState)(g))throw new TypeError("Called introspectSinks without a Signal argument");return((h=g[j].liveConsumerNode)==null?void 0:h.map(m=>m.wrapper))??[]}o.introspectSinks=b;function v(g){if(!(0,e.isComputed)(g)&&!(0,e.isState)(g))throw new TypeError("Called hasSinks without a Signal argument");const h=g[j].liveConsumerNode;return h?h.length>0:!1}o.hasSinks=v;function x(g){if(!(0,e.isComputed)(g)&&!(0,e.isWatcher)(g))throw new TypeError("Called hasSources without a Computed or Watcher argument");const h=g[j].producerNode;return h?h.length>0:!1}o.hasSources=x;class k{constructor(h){Xu(this,l),Xu(this,f),Rr(this,c);let m=Object.create(en);m.wrapper=this,m.consumerMarkedDirty=h,m.consumerIsAlwaysLive=!0,m.consumerAllowSignalWrites=!1,m.producerNode=[],this[j]=m}watch(...h){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");mo(this,f,s).call(this,h);const m=this[j];m.dirty=!1;const w=rt(m);for(const T of h)Er(T[j]);rt(w)}unwatch(...h){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");mo(this,f,s).call(this,h);const m=this[j];lt(m);for(let w=m.producerNode.length-1;w>=0;w--)if(h.includes(m.producerNode[w].wrapper)){Dr(m.producerNode[w],m.producerIndexOfThis[w]);const T=m.producerNode.length-1;if(m.producerNode[w]=m.producerNode[T],m.producerIndexOfThis[w]=m.producerIndexOfThis[T],m.producerNode.length--,m.producerIndexOfThis.length--,m.nextProducerIndex--,w<m.producerNode.length){const Y=m.producerIndexOfThis[w],re=m.producerNode[w];tn(re),re.liveConsumerIndexOfThis[Y]=w}}}getPending(){if(!(0,e.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[j].producerNode.filter(m=>m.dirty).map(m=>m.wrapper)}}c=j,l=new WeakSet,f=new WeakSet,s=function(g){for(const h of g)if(!(0,e.isComputed)(h)&&!(0,e.isState)(h))throw new TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=g=>Br(l,g),o.Watcher=k;function p(){var g;return(g=lh())==null?void 0:g.wrapper}o.currentComputed=p,o.watched=Symbol("watched"),o.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(de||(de={}));const Dh=Symbol("SignalWatcherBrand"),Sh=new FinalizationRegistry((({watcher:e,signal:t})=>{e.unwatch(t)})),go=new WeakMap;function cc(e){return e[Dh]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),e):class extends e{constructor(){super(...arguments),this._$St=new de.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new de.Computed((()=>{this._$St.get(),super.performUpdate()}));const t=this._$Su=new de.subtle.Watcher((function(){const u=go.get(this);u!==void 0&&(u._$Si===!1&&u.requestUpdate(),this.watch())}));go.set(t,this),Sh.register(this,{watcher:t,signal:this._$Sv}),t.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(t){try{this._$So?(this._$So=!1,super.update(t)):this._$Sh.forEach((u=>u.commit()))}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(t,u,r){this._$So=!0,super.requestUpdate(t,u,r)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask((()=>{this.isConnected===!1&&this._$Sp()}))}_(t){this._$Sh.add(t);const u=this._$So;this.requestUpdate(),this._$So=u}m(t){this._$Sh.delete(t)}}}const Vu={ATTRIBUTE:1,CHILD:2},wt=e=>(...t)=>({_$litDirective$:e,values:t});let At=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,u,r){this._$Ct=t,this._$AM=u,this._$Ci=r}_$AS(t,u){return this.update(t,u)}update(t,u){return this.render(...u)}};const un=globalThis,vo=e=>e,fr=un.trustedTypes,xo=fr?fr.createPolicy("lit-html",{createHTML:e=>e}):void 0,lc="$lit$",Fe=`lit$${Math.random().toFixed(9).slice(2)}$`,dc="?"+Fe,Fh=`<${dc}>`,Ge=document,Tu=()=>Ge.createComment(""),Mu=e=>e===null||typeof e!="object"&&typeof e!="function",rn=Array.isArray,Ih=e=>rn(e)||typeof e?.[Symbol.iterator]=="function",qr=`[ 	
\f\r]`,Jt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yo=/-->/g,$o=/>/g,Be=RegExp(`>|${qr}(?:([^\\s"'>=/]+)(${qr}*=${qr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ko=/'/g,Co=/"/g,hc=/^(?:script|style|textarea|title)$/i,Th=e=>(t,...u)=>({_$litType$:e,strings:t,values:u}),y=Th(1),ne=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),wo=new WeakMap,He=Ge.createTreeWalker(Ge,129);function fc(e,t){if(!rn(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return xo!==void 0?xo.createHTML(t):t}const Mh=(e,t)=>{const u=e.length-1,r=[];let i,n=t===2?"<svg>":t===3?"<math>":"",a=Jt;for(let o=0;o<u;o++){const c=e[o];let l,f,s=-1,_=0;for(;_<c.length&&(a.lastIndex=_,f=a.exec(c),f!==null);)_=a.lastIndex,a===Jt?f[1]==="!--"?a=yo:f[1]!==void 0?a=$o:f[2]!==void 0?(hc.test(f[2])&&(i=RegExp("</"+f[2],"g")),a=Be):f[3]!==void 0&&(a=Be):a===Be?f[0]===">"?(a=i??Jt,s=-1):f[1]===void 0?s=-2:(s=a.lastIndex-f[2].length,l=f[1],a=f[3]===void 0?Be:f[3]==='"'?Co:ko):a===Co||a===ko?a=Be:a===yo||a===$o?a=Jt:(a=Be,i=void 0);const d=a===Be&&e[o+1].startsWith("/>")?" ":"";n+=a===Jt?c+Fh:s>=0?(r.push(l),c.slice(0,s)+lc+c.slice(s)+Fe+d):c+Fe+(s===-2?o:d)}return[fc(e,n+(e[u]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};let ci=class pc{constructor({strings:t,_$litType$:u},r){let i;this.parts=[];let n=0,a=0;const o=t.length-1,c=this.parts,[l,f]=Mh(t,u);if(this.el=pc.createElement(l,r),He.currentNode=this.el.content,u===2||u===3){const s=this.el.content.firstChild;s.replaceWith(...s.childNodes)}for(;(i=He.nextNode())!==null&&c.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(const s of i.getAttributeNames())if(s.endsWith(lc)){const _=f[a++],d=i.getAttribute(s).split(Fe),b=/([.?@])?(.*)/.exec(_);c.push({type:1,index:n,name:b[2],strings:d,ctor:b[1]==="."?Ph:b[1]==="?"?zh:b[1]==="@"?Nh:Sr}),i.removeAttribute(s)}else s.startsWith(Fe)&&(c.push({type:6,index:n}),i.removeAttribute(s));if(hc.test(i.tagName)){const s=i.textContent.split(Fe),_=s.length-1;if(_>0){i.textContent=fr?fr.emptyScript:"";for(let d=0;d<_;d++)i.append(s[d],Tu()),He.nextNode(),c.push({type:2,index:++n});i.append(s[_],Tu())}}}else if(i.nodeType===8)if(i.data===dc)c.push({type:2,index:n});else{let s=-1;for(;(s=i.data.indexOf(Fe,s+1))!==-1;)c.push({type:7,index:n}),s+=Fe.length-1}n++}}static createElement(t,u){const r=Ge.createElement("template");return r.innerHTML=t,r}};function dt(e,t,u=e,r){if(t===ne)return t;let i=r!==void 0?u._$Co?.[r]:u._$Cl;const n=Mu(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(e),i._$AT(e,u,r)),r!==void 0?(u._$Co??=[])[r]=i:u._$Cl=i),i!==void 0&&(t=dt(e,i._$AS(e,t.values),i,r)),t}class Oh{constructor(t,u){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=u}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:u},parts:r}=this._$AD,i=(t?.creationScope??Ge).importNode(u,!0);He.currentNode=i;let n=He.nextNode(),a=0,o=0,c=r[0];for(;c!==void 0;){if(a===c.index){let l;c.type===2?l=new Et(n,n.nextSibling,this,t):c.type===1?l=new c.ctor(n,c.name,c.strings,this,t):c.type===6&&(l=new Rh(n,this,t)),this._$AV.push(l),c=r[++o]}a!==c?.index&&(n=He.nextNode(),a++)}return He.currentNode=Ge,i}p(t){let u=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,u),u+=r.strings.length-2):r._$AI(t[u])),u++}}class Et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,u,r,i){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=u,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const u=this._$AM;return u!==void 0&&t?.nodeType===11&&(t=u.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,u=this){t=dt(this,t,u),Mu(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==ne&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ih(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==$&&Mu(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ge.createTextNode(t)),this._$AH=t}$(t){const{values:u,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=ci.createElement(fc(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(u);else{const n=new Oh(i,this),a=n.u(this.options);n.p(u),this.T(a),this._$AH=n}}_$AC(t){let u=wo.get(t.strings);return u===void 0&&wo.set(t.strings,u=new ci(t)),u}k(t){rn(this._$AH)||(this._$AH=[],this._$AR());const u=this._$AH;let r,i=0;for(const n of t)i===u.length?u.push(r=new Et(this.O(Tu()),this.O(Tu()),this,this.options)):r=u[i],r._$AI(n),i++;i<u.length&&(this._$AR(r&&r._$AB.nextSibling,i),u.length=i)}_$AR(t=this._$AA.nextSibling,u){for(this._$AP?.(!1,!0,u);t!==this._$AB;){const r=vo(t).nextSibling;vo(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Sr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,u,r,i,n){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=u,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=$}_$AI(t,u=this,r,i){const n=this.strings;let a=!1;if(n===void 0)t=dt(this,t,u,0),a=!Mu(t)||t!==this._$AH&&t!==ne,a&&(this._$AH=t);else{const o=t;let c,l;for(t=n[0],c=0;c<n.length-1;c++)l=dt(this,o[r+c],u,c),l===ne&&(l=this._$AH[c]),a||=!Mu(l)||l!==this._$AH[c],l===$?t=$:t!==$&&(t+=(l??"")+n[c+1]),this._$AH[c]=l}a&&!i&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ph extends Sr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}}class zh extends Sr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}}class Nh extends Sr{constructor(t,u,r,i,n){super(t,u,r,i,n),this.type=5}_$AI(t,u=this){if((t=dt(this,t,u,0)??$)===ne)return;const r=this._$AH,i=t===$&&r!==$||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==$&&(r===$||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}let Rh=class{constructor(t,u,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=u,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){dt(this,t)}};const Bh={I:Et},Lh=un.litHtmlPolyfillSupport;Lh?.(ci,Et),(un.litHtmlVersions??=[]).push("3.3.2");const nn=(e,t,u)=>{const r=u?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const n=u?.renderBefore??null;r._$litPart$=i=new Et(t.insertBefore(Tu(),n),n,void 0,u??{})}return i._$AI(e),i};const{I:Uh}=Bh,Ao=e=>e,qh=e=>e.strings===void 0,Eo=()=>document.createComment(""),Qt=(e,t,u)=>{const r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(u===void 0){const n=r.insertBefore(Eo(),i),a=r.insertBefore(Eo(),i);u=new Uh(n,a,e,e.options)}else{const n=u._$AB.nextSibling,a=u._$AM,o=a!==e;if(o){let c;u._$AQ?.(e),u._$AM=e,u._$AP!==void 0&&(c=e._$AU)!==a._$AU&&u._$AP(c)}if(n!==i||o){let c=u._$AA;for(;c!==n;){const l=Ao(c).nextSibling;Ao(r).insertBefore(c,i),c=l}}}return u},Le=(e,t,u=e)=>(e._$AI(t,u),e),jh={},Wh=(e,t=jh)=>e._$AH=t,Hh=e=>e._$AH,jr=e=>{e._$AR(),e._$AA.remove()};const Eu=(e,t)=>{const u=e._$AN;if(u===void 0)return!1;for(const r of u)r._$AO?.(t,!1),Eu(r,t);return!0},pr=e=>{let t,u;do{if((t=e._$AM)===void 0)break;u=t._$AN,u.delete(e),e=t}while(u?.size===0)},_c=e=>{for(let t;t=e._$AM;e=t){let u=t._$AN;if(u===void 0)t._$AN=u=new Set;else if(u.has(e))break;u.add(e),Zh(t)}};function Vh(e){this._$AN!==void 0?(pr(this),this._$AM=e,_c(this)):this._$AM=e}function Gh(e,t=!1,u=0){const r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let n=u;n<r.length;n++)Eu(r[n],!1),pr(r[n]);else r!=null&&(Eu(r,!1),pr(r));else Eu(this,e)}const Zh=e=>{e.type==Vu.CHILD&&(e._$AP??=Gh,e._$AQ??=Vh)};let Kh=class extends At{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,u,r){super._$AT(t,u,r),_c(this),this.isConnected=t._$AU}_$AO(t,u=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),u&&(Eu(this,t),pr(this))}setValue(t){if(qh(this._$Ct))this._$Ct._$AI(t,this);else{const u=[...this._$Ct._$AH];u[this._$Ci]=t,this._$Ct._$AI(u,this,0)}}disconnected(){}reconnected(){}};de.State;de.Computed;let bc=class extends Event{constructor(t,u,r,i){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=u,this.callback=r,this.subscribe=i??!1}};let Do=class{constructor(t,u,r,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=t,u.context!==void 0){const n=u;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=u,this.callback=r,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new bc(this.context,this.host,this.t,this.subscribe))}};let Jh=class{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,u=!1){const r=u||!Object.is(t,this.o);this.o=t,r&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[u,{disposer:r}]of this.subscriptions)u(this.o,r)},t!==void 0&&(this.value=t)}addCallback(t,u,r){if(!r)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:u});const{disposer:i}=this.subscriptions.get(t);t(this.value,i)}clearCallbacks(){this.subscriptions.clear()}};let Qh=class extends Event{constructor(t,u){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=u}},So=class extends Jh{constructor(t,u,r){super(u.context!==void 0?u.initialValue:r),this.onContextRequest=i=>{if(i.context!==this.context)return;const n=i.contextTarget??i.composedPath()[0];n!==this.host&&(i.stopPropagation(),this.addCallback(i.callback,n,i.subscribe))},this.onProviderRequest=i=>{if(i.context!==this.context||(i.contextTarget??i.composedPath()[0])===this.host)return;const n=new Set;for(const[a,{consumerHost:o}]of this.subscriptions)n.has(a)||(n.add(a),o.dispatchEvent(new bc(this.context,o,a,!0)));i.stopPropagation()},this.host=t,u.context!==void 0?this.context=u.context:this.context=u,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Qh(this.context,this.host))}};function Yh({context:e}){return(t,u)=>{const r=new WeakMap;if(typeof u=="object")return{get(){return t.get.call(this)},set(i){return r.get(this).setValue(i),t.set.call(this,i)},init(i){return r.set(this,new So(this,{context:e,initialValue:i})),i}};{t.constructor.addInitializer((a=>{r.set(a,new So(a,{context:e}))}));const i=Object.getOwnPropertyDescriptor(t,u);let n;if(i===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(o){r.get(this).setValue(o),a.set(this,o)},configurable:!0,enumerable:!0}}else{const a=i.set;n={...i,set(o){r.get(this).setValue(o),a?.call(this,o)}}}return void Object.defineProperty(t,u,n)}}}function Xh({context:e,subscribe:t}){return(u,r)=>{typeof r=="object"?r.addInitializer((function(){new Do(this,{context:e,callback:i=>{u.set.call(this,i)},subscribe:t})})):u.constructor.addInitializer((i=>{new Do(i,{context:e,callback:n=>{i[r]=n},subscribe:t})}))}}const ir=globalThis,sn=ir.ShadowRoot&&(ir.ShadyCSS===void 0||ir.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,on=Symbol(),Fo=new WeakMap;let mc=class{constructor(t,u,r){if(this._$cssResult$=!0,r!==on)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=u}get styleSheet(){let t=this.o;const u=this.t;if(sn&&t===void 0){const r=u!==void 0&&u.length===1;r&&(t=Fo.get(u)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Fo.set(u,t))}return t}toString(){return this.cssText}};const an=e=>new mc(typeof e=="string"?e:e+"",void 0,on),O=(e,...t)=>{const u=e.length===1?e[0]:t.reduce((r,i,n)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new mc(u,e,on)},ef=(e,t)=>{if(sn)e.adoptedStyleSheets=t.map(u=>u instanceof CSSStyleSheet?u:u.styleSheet);else for(const u of t){const r=document.createElement("style"),i=ir.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=u.cssText,e.appendChild(r)}},Io=sn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let u="";for(const r of t.cssRules)u+=r.cssText;return an(u)})(e):e;const{is:tf,defineProperty:uf,getOwnPropertyDescriptor:rf,getOwnPropertyNames:nf,getOwnPropertySymbols:sf,getPrototypeOf:of}=Object,Fr=globalThis,To=Fr.trustedTypes,af=To?To.emptyScript:"",cf=Fr.reactiveElementPolyfillSupport,Du=(e,t)=>e,_r={toAttribute(e,t){switch(t){case Boolean:e=e?af:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let u=e;switch(t){case Boolean:u=e!==null;break;case Number:u=e===null?null:Number(e);break;case Object:case Array:try{u=JSON.parse(e)}catch{u=null}}return u}},cn=(e,t)=>!tf(e,t),Mo={attribute:!0,type:String,converter:_r,reflect:!1,useDefault:!1,hasChanged:cn};Symbol.metadata??=Symbol("metadata"),Fr.litPropertyMetadata??=new WeakMap;class et extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,u=Mo){if(u.state&&(u.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((u=Object.create(u)).wrapped=!0),this.elementProperties.set(t,u),!u.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,u);i!==void 0&&uf(this.prototype,t,i)}}static getPropertyDescriptor(t,u,r){const{get:i,set:n}=rf(this.prototype,t)??{get(){return this[u]},set(a){this[u]=a}};return{get:i,set(a){const o=i?.call(this);n?.call(this,a),this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Mo}static _$Ei(){if(this.hasOwnProperty(Du("elementProperties")))return;const t=of(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Du("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Du("properties"))){const u=this.properties,r=[...nf(u),...sf(u)];for(const i of r)this.createProperty(i,u[i])}const t=this[Symbol.metadata];if(t!==null){const u=litPropertyMetadata.get(t);if(u!==void 0)for(const[r,i]of u)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[u,r]of this.elementProperties){const i=this._$Eu(u,r);i!==void 0&&this._$Eh.set(i,u)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const u=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)u.unshift(Io(i))}else t!==void 0&&u.push(Io(t));return u}static _$Eu(t,u){const r=u.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,u=this.constructor.elementProperties;for(const r of u.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ef(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,u,r){this._$AK(t,r)}_$ET(t,u){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const n=(r.converter?.toAttribute!==void 0?r.converter:_r).toAttribute(u,r.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,u){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=r.getPropertyOptions(i),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:_r;this._$Em=i;const o=a.fromAttribute(u,n.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,u,r,i=!1,n){if(t!==void 0){const a=this.constructor;if(i===!1&&(n=this[t]),r??=a.getPropertyOptions(t),!((r.hasChanged??cn)(n,u)||r.useDefault&&r.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,u,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,u,{useDefault:r,reflect:i,wrapped:n},a){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??u??this[t]),n!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(u=void 0),this._$AL.set(t,u)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(u){Promise.reject(u)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,n]of r){const{wrapped:a}=n,o=this[i];a!==!0||this._$AL.has(i)||o===void 0||this.C(i,void 0,n,o)}}let t=!1;const u=this._$AL;try{t=this.shouldUpdate(u),t?(this.willUpdate(u),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(u)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(u)}willUpdate(t){}_$AE(t){this._$EO?.forEach(u=>u.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(u=>this._$ET(u,this[u])),this._$EM()}updated(t){}firstUpdated(t){}}et.elementStyles=[],et.shadowRootOptions={mode:"open"},et[Du("elementProperties")]=new Map,et[Du("finalized")]=new Map,cf?.({ReactiveElement:et}),(Fr.reactiveElementVersions??=[]).push("2.1.2");const ln=globalThis;let st=class extends et{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const u=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=nn(u,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ne}};st._$litElement$=!0,st.finalized=!0,ln.litElementHydrateSupport?.({LitElement:st});const lf=ln.litElementPolyfillSupport;lf?.({LitElement:st});(ln.litElementVersions??=[]).push("4.2.2");const P=e=>(t,u)=>{u!==void 0?u.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const df={attribute:!0,type:String,converter:_r,reflect:!1,hasChanged:cn},hf=(e=df,t,u)=>{const{kind:r,metadata:i}=u;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),n.set(u.name,e),r==="accessor"){const{name:a}=u;return{set(o){const c=t.get.call(this);t.set.call(this,o),this.requestUpdate(a,c,e,!0,o)},init(o){return o!==void 0&&this.C(a,void 0,e,o),o}}}if(r==="setter"){const{name:a}=u;return function(o){const c=this[a];t.call(this,o),this.requestUpdate(a,c,e,!0,o)}}throw Error("Unsupported decorator location: "+r)};function C(e){return(t,u)=>typeof u=="object"?hf(e,t,u):((r,i,n)=>{const a=i.hasOwnProperty(n);return i.constructor.createProperty(n,r),a?Object.getOwnPropertyDescriptor(i,n):void 0})(e,t,u)}function li(e){return C({...e,state:!0,attribute:!1})}const ff=(e,t,u)=>(u.configurable=!0,u.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,u),u);function pf(e,t){return(u,r,i)=>{const n=a=>a.renderRoot?.querySelector(e)??null;return ff(u,r,{get(){return n(this)}})}}const _f={bubbles:!0,cancelable:!0,composed:!0};class dn extends CustomEvent{constructor(t){super(dn.eventName,{detail:t,..._f}),this.payload=t}static{this.eventName="a2uiaction"}}function bf(e){return A(e)&&"key"in e}function gc(e,t){return e==="path"&&typeof t=="string"}function A(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function vc(e){return A(e)?"explicitList"in e||"template"in e:!1}function Ae(e){return A(e)&&("path"in e||"literal"in e&&typeof e.literal=="string"||"literalString"in e)}function mf(e){return A(e)&&("path"in e||"literal"in e&&typeof e.literal=="number"||"literalNumber"in e)}function gf(e){return A(e)&&("path"in e||"literal"in e&&typeof e.literal=="boolean"||"literalBoolean"in e)}function Ce(e){return!(!A(e)||!("id"in e&&"type"in e&&"properties"in e))}function xc(e){return A(e)&&"url"in e&&Ae(e.url)}function yc(e){return A(e)&&"child"in e&&Ce(e.child)&&"action"in e}function $c(e){return A(e)?"child"in e?Ce(e.child):"children"in e?Array.isArray(e.children)&&e.children.every(Ce):!1:!1}function kc(e){return A(e)&&"label"in e&&Ae(e.label)&&"value"in e&&gf(e.value)}function Cc(e){return A(e)&&"children"in e&&Array.isArray(e.children)&&e.children.every(Ce)}function wc(e){return A(e)&&"value"in e&&Ae(e.value)}function Ac(e){return A(e)}function Ec(e){return A(e)&&"url"in e&&Ae(e.url)}function Dc(e){return A(e)&&"name"in e&&Ae(e.name)}function Sc(e){return A(e)&&"children"in e&&Array.isArray(e.children)&&e.children.every(Ce)}function Fc(e){return A(e)&&"entryPointChild"in e&&Ce(e.entryPointChild)&&"contentChild"in e&&Ce(e.contentChild)}function Ic(e){return A(e)&&"selections"in e}function Tc(e){return A(e)&&"children"in e&&Array.isArray(e.children)&&e.children.every(Ce)}function Mc(e){return A(e)&&"value"in e&&mf(e.value)}function vf(e){return A(e)&&"title"in e&&Ae(e.title)&&"child"in e&&Ce(e.child)}function Oc(e){return A(e)&&"tabItems"in e&&Array.isArray(e.tabItems)&&e.tabItems.every(vf)}function Pc(e){return A(e)&&"text"in e&&Ae(e.text)}function zc(e){return A(e)&&"label"in e&&Ae(e.label)}function Nc(e){return A(e)&&"url"in e&&Ae(e.url)}const xf=Object.freeze(Object.defineProperty({__proto__:null,isComponentArrayReference:vc,isObject:A,isPath:gc,isResolvedAudioPlayer:xc,isResolvedButton:yc,isResolvedCard:$c,isResolvedCheckbox:kc,isResolvedColumn:Cc,isResolvedDateTimeInput:wc,isResolvedDivider:Ac,isResolvedIcon:Dc,isResolvedImage:Ec,isResolvedList:Sc,isResolvedModal:Fc,isResolvedMultipleChoice:Ic,isResolvedRow:Tc,isResolvedSlider:Mc,isResolvedTabs:Oc,isResolvedText:Pc,isResolvedTextField:zc,isResolvedVideo:Nc,isValueMap:bf},Symbol.toStringTag,{value:"Module"}));class M{constructor(t={mapCtor:Map,arrayCtor:Array,setCtor:Set,objCtor:Object}){this.opts=t,this.mapCtor=Map,this.arrayCtor=Array,this.setCtor=Set,this.objCtor=Object,this.arrayCtor=t.arrayCtor,this.mapCtor=t.mapCtor,this.setCtor=t.setCtor,this.objCtor=t.objCtor,this.surfaces=new t.mapCtor}static{this.DEFAULT_SURFACE_ID="@default"}getSurfaces(){return this.surfaces}clearSurfaces(){this.surfaces.clear()}processMessages(t){for(const u of t)u.beginRendering&&this.handleBeginRendering(u.beginRendering,u.beginRendering.surfaceId),u.surfaceUpdate&&this.handleSurfaceUpdate(u.surfaceUpdate,u.surfaceUpdate.surfaceId),u.dataModelUpdate&&this.handleDataModelUpdate(u.dataModelUpdate,u.dataModelUpdate.surfaceId),u.deleteSurface&&this.handleDeleteSurface(u.deleteSurface)}getData(t,u,r=M.DEFAULT_SURFACE_ID){const i=this.getOrCreateSurface(r);if(!i)return null;let n;return u==="."||u===""?n=t.dataContextPath??"/":n=this.resolvePath(u,t.dataContextPath),this.getDataByPath(i.dataModel,n)}setData(t,u,r,i=M.DEFAULT_SURFACE_ID){if(!t){console.warn("No component node set");return}const n=this.getOrCreateSurface(i);if(!n)return;let a;u==="."||u===""?a=t.dataContextPath??"/":a=this.resolvePath(u,t.dataContextPath),this.setDataByPath(n.dataModel,a,r)}resolvePath(t,u){return t.startsWith("/")?t:u&&u!=="/"?u.endsWith("/")?`${u}${t}`:`${u}/${t}`:`/${t}`}parseIfJsonString(t){if(typeof t!="string")return t;const u=t.trim();if(u.startsWith("{")&&u.endsWith("}")||u.startsWith("[")&&u.endsWith("]"))try{return JSON.parse(t)}catch(r){return console.warn(`Failed to parse potential JSON string: "${t.substring(0,50)}..."`,r),t}return t}convertKeyValueArrayToMap(t){const u=new this.mapCtor;for(const r of t){if(!A(r)||!("key"in r))continue;const i=r.key,n=this.findValueKey(r);if(!n)continue;let a=r[n];n==="valueMap"&&Array.isArray(a)?a=this.convertKeyValueArrayToMap(a):typeof a=="string"&&(a=this.parseIfJsonString(a)),this.setDataByPath(u,i,a)}return u}setDataByPath(t,u,r){if(Array.isArray(r)&&(r.length===0||A(r[0])&&"key"in r[0]))if(r.length===1&&A(r[0])&&r[0].key==="."){const c=r[0],l=this.findValueKey(c);l?(r=c[l],l==="valueMap"&&Array.isArray(r)?r=this.convertKeyValueArrayToMap(r):typeof r=="string"&&(r=this.parseIfJsonString(r))):r=this.convertKeyValueArrayToMap(r)}else r=this.convertKeyValueArrayToMap(r);const i=this.normalizePath(u).split("/").filter(c=>c);if(i.length===0){if(r instanceof Map||A(r)){!(r instanceof Map)&&A(r)&&(r=new this.mapCtor(Object.entries(r))),t.clear();for(const[c,l]of r.entries())t.set(c,l)}else console.error("Cannot set root of DataModel to a non-Map value.");return}let n=t;for(let c=0;c<i.length-1;c++){const l=i[c];let f;n instanceof Map?f=n.get(l):Array.isArray(n)&&/^\d+$/.test(l)&&(f=n[parseInt(l,10)]),(f===void 0||typeof f!="object"||f===null)&&(f=new this.mapCtor,n instanceof this.mapCtor?n.set(l,f):Array.isArray(n)&&(n[parseInt(l,10)]=f)),n=f}const a=i[i.length-1],o=r;n instanceof this.mapCtor?n.set(a,o):Array.isArray(n)&&/^\d+$/.test(a)&&(n[parseInt(a,10)]=o)}normalizePath(t){return"/"+t.replace(/\[(\d+)\]/g,".$1").split(".").filter(i=>i.length>0).join("/")}getDataByPath(t,u){const r=this.normalizePath(u).split("/").filter(n=>n);let i=t;for(const n of r){if(i==null)return null;if(i instanceof Map)i=i.get(n);else if(Array.isArray(i)&&/^\d+$/.test(n))i=i[parseInt(n,10)];else if(A(i))i=i[n];else return null}return i}getOrCreateSurface(t){let u=this.surfaces.get(t);return u||(u=new this.objCtor({rootComponentId:null,componentTree:null,dataModel:new this.mapCtor,components:new this.mapCtor,styles:new this.objCtor}),this.surfaces.set(t,u)),u}handleBeginRendering(t,u){const r=this.getOrCreateSurface(u);r.rootComponentId=t.root,r.styles=t.styles??{},this.rebuildComponentTree(r)}handleSurfaceUpdate(t,u){const r=this.getOrCreateSurface(u);for(const i of t.components)r.components.set(i.id,i);this.rebuildComponentTree(r)}handleDataModelUpdate(t,u){const r=this.getOrCreateSurface(u),i=t.path??"/";this.setDataByPath(r.dataModel,i,t.contents),this.rebuildComponentTree(r)}handleDeleteSurface(t){this.surfaces.delete(t.surfaceId)}rebuildComponentTree(t){if(!t.rootComponentId){t.componentTree=null;return}const u=new this.setCtor;t.componentTree=this.buildNodeRecursive(t.rootComponentId,t,u,"/","")}findValueKey(t){return Object.keys(t).find(u=>u.startsWith("value"))}buildNodeRecursive(t,u,r,i,n=""){const a=`${t}${n}`,{components:o}=u;if(!o.has(t))return null;if(r.has(a))throw new Error(`Circular dependency for component "${a}".`);r.add(a);const c=o.get(t),l=c.component??{},f=Object.keys(l)[0],s=l[f],_=new this.objCtor;if(A(s))for(const[b,v]of Object.entries(s))_[b]=this.resolvePropertyValue(v,u,r,i,n);r.delete(a);const d={id:a,dataContextPath:i,weight:c.weight??"initial"};switch(f){case"Text":if(!Pc(_))throw new Error(`Invalid data; expected ${f}`);return new this.objCtor({...d,type:"Text",properties:_});case"Image":if(!Ec(_))throw new Error(`Invalid data; expected ${f}`);return new this.objCtor({...d,type:"Image",properties:_});case"Icon":if(!Dc(_))throw new Error(`Invalid data; expected ${f}`);return new this.objCtor({...d,type:"Icon",properties:_});case"Video":if(!Nc(_))throw new Error(`Invalid data; expected ${f}`);return new this.objCtor({...d,type:"Video",properties:_});case"AudioPlayer":if(!xc(_))throw new Error(`Invalid data; expected ${f}`);return new this.objCtor({...d,type:"AudioPlayer",properties:_});case"Row":if(!Tc(_))throw new Error(`Invalid data; expected ${f}`);return new this.objCtor({...d,type:"Row",properties:_});case"Column":if(!Cc(_))throw new Error(`Invalid data; expected ${f}`);return new this.objCtor({...d,type:"Column",properties:_});case"List":if(!Sc(_))throw new Error(`Invalid data; expected ${f}`);return new this.objCtor({...d,type:"List",properties:_});case"Card":if(!$c(_))throw new Error(`Invalid data; expected ${f}`);return new this.objCtor({...d,type:"Card",properties:_});case"Tabs":if(!Oc(_))throw new Error(`Invalid data; expected ${f}`);return new this.objCtor({...d,type:"Tabs",properties:_});case"Divider":if(!Ac(_))throw new Error(`Invalid data; expected ${f}`);return new this.objCtor({...d,type:"Divider",properties:_});case"Modal":if(!Fc(_))throw new Error(`Invalid data; expected ${f}`);return new this.objCtor({...d,type:"Modal",properties:_});case"Button":if(!yc(_))throw new Error(`Invalid data; expected ${f}`);return new this.objCtor({...d,type:"Button",properties:_});case"CheckBox":if(!kc(_))throw new Error(`Invalid data; expected ${f}`);return new this.objCtor({...d,type:"CheckBox",properties:_});case"TextField":if(!zc(_))throw new Error(`Invalid data; expected ${f}`);return new this.objCtor({...d,type:"TextField",properties:_});case"DateTimeInput":if(!wc(_))throw new Error(`Invalid data; expected ${f}`);return new this.objCtor({...d,type:"DateTimeInput",properties:_});case"MultipleChoice":if(!Ic(_))throw new Error(`Invalid data; expected ${f}`);return new this.objCtor({...d,type:"MultipleChoice",properties:_});case"Slider":if(!Mc(_))throw new Error(`Invalid data; expected ${f}`);return new this.objCtor({...d,type:"Slider",properties:_});default:return new this.objCtor({...d,type:f,properties:_})}}resolvePropertyValue(t,u,r,i,n=""){if(typeof t=="string"&&u.components.has(t))return this.buildNodeRecursive(t,u,r,i,n);if(vc(t)){if(t.explicitList)return t.explicitList.map(a=>this.buildNodeRecursive(a,u,r,i,n));if(t.template){const a=this.resolvePath(t.template.dataBinding,i),o=this.getDataByPath(u.dataModel,a),c=t.template;if(Array.isArray(o))return o.map((f,s)=>{const b=`:${[...i.split("/").filter(x=>/^\d+$/.test(x)),s].join(":")}`,v=`${a}/${s}`;return this.buildNodeRecursive(c.componentId,u,r,v,b)});const l=this.mapCtor;return o instanceof l?Array.from(o.keys(),f=>{const s=`:${f}`,_=`${a}/${f}`;return this.buildNodeRecursive(c.componentId,u,r,_,s)}):new this.arrayCtor}}if(Array.isArray(t))return t.map(a=>this.resolvePropertyValue(a,u,r,i,n));if(A(t)){const a=new this.objCtor;for(const[o,c]of Object.entries(t)){let l=c;if(gc(o,c)&&i!=="/"){l=c.replace(/^\.?\/item/,"").replace(/^\.?\/text/,"").replace(/^\.?\/label/,"").replace(/^\.?\//,""),a[o]=l;continue}a[o]=this.resolvePropertyValue(l,u,r,i,n)}return a}return t}}const Rc=[0,5,10,15,20,25,30,35,40,50,60,70,80,90,95,98,99,100],yf=`
  &:not([disabled]) {
    cursor: pointer;
    opacity: var(--opacity, 0);
    transition: opacity var(--speed, 0.2s) cubic-bezier(0, 0, 0.3, 1);

    &:hover,
    &:focus {
      opacity: 1;
    }
  }`,$f=`
  ${new Array(21).fill(0).map((e,t)=>`.behavior-ho-${t*5} {
          --opacity: ${t/20};
          ${yf}
        }`).join(`
`)}

  .behavior-o-s {
    overflow: scroll;
  }

  .behavior-o-a {
    overflow: auto;
  }

  .behavior-o-h {
    overflow: hidden;
  }

  .behavior-sw-n {
    scrollbar-width: none;
  }
`,N=4,kf=`
  ${new Array(25).fill(0).map((e,t)=>`
        .border-bw-${t} { border-width: ${t}px; }
        .border-btw-${t} { border-top-width: ${t}px; }
        .border-bbw-${t} { border-bottom-width: ${t}px; }
        .border-blw-${t} { border-left-width: ${t}px; }
        .border-brw-${t} { border-right-width: ${t}px; }

        .border-ow-${t} { outline-width: ${t}px; }
        .border-br-${t} { border-radius: ${t*N}px; overflow: hidden;}`).join(`
`)}

  .border-br-50pc {
    border-radius: 50%;
  }

  .border-bs-s {
    border-style: solid;
  }
`;function hn(...e){const t={};for(const u of e)for(const[r,i]of Object.entries(u)){const n=r.split("-").with(-1,"").join("-"),a=Object.keys(t).filter(o=>o.startsWith(n));for(const o of a)delete t[o];t[r]=i}return t}function Cf(e,t,...u){const r=structuredClone(e);for(const i of u)for(const n of Object.keys(i)){const a=n.split("-").with(-1,"").join("-");for(const[o,c]of Object.entries(r)){if(t.includes(o))continue;let l=!1;for(let f=0;f<c.length;f++)c[f].startsWith(a)&&(l=!0,c[f]=n);l||c.push(n)}}return r}function ae(e){return e.startsWith("nv")?`--nv-${e.slice(2)}`:`--${e[0]}-${e.slice(1)}`}const Je=e=>`
    ${e.map(t=>{const u=Wr(t);return`.color-bc-${t} { border-color: light-dark(var(${ae(t)}), var(${ae(u)})); }`}).join(`
`)}

    ${e.map(t=>{const u=Wr(t),r=[`.color-bgc-${t} { background-color: light-dark(var(${ae(t)}), var(${ae(u)})); }`,`.color-bbgc-${t}::backdrop { background-color: light-dark(var(${ae(t)}), var(${ae(u)})); }`];for(let i=.1;i<1;i+=.1)r.push(`.color-bbgc-${t}_${(i*100).toFixed(0)}::backdrop {
            background-color: light-dark(oklch(from var(${ae(t)}) l c h / calc(alpha * ${i.toFixed(1)})), oklch(from var(${ae(u)}) l c h / calc(alpha * ${i.toFixed(1)})) );
          }
        `);return r.join(`
`)}).join(`
`)}

  ${e.map(t=>{const u=Wr(t);return`.color-c-${t} { color: light-dark(var(${ae(t)}), var(${ae(u)})); }`}).join(`
`)}
  `,Wr=e=>{const t=e.match(/^([a-z]+)(\d+)$/);if(!t)return e;const[,u,r]=t,n=100-parseInt(r,10),a=Rc.reduce((o,c)=>Math.abs(c-n)<Math.abs(o-n)?c:o);return`${u}${a}`},Qe=e=>Rc.map(t=>`${e}${t}`),wf=[Je(Qe("p")),Je(Qe("s")),Je(Qe("t")),Je(Qe("n")),Je(Qe("nv")),Je(Qe("e")),`
    .color-bgc-transparent {
      background-color: transparent;
    }

    :host {
      color-scheme: var(--color-scheme);
    }
  `],Af=`
  .g-icon {
    font-family: "Material Symbols Outlined", "Google Symbols";
    font-weight: normal;
    font-style: normal;
    font-display: optional;
    font-size: 20px;
    width: 1em;
    height: 1em;
    user-select: none;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
    overflow: hidden;

    font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 48,
      "ROND" 100;

    &.filled {
      font-variation-settings: "FILL" 1, "wght" 300, "GRAD" 0, "opsz" 48,
        "ROND" 100;
    }

    &.filled-heavy {
      font-variation-settings: "FILL" 1, "wght" 700, "GRAD" 0, "opsz" 48,
        "ROND" 100;
    }
  }
`,Ef=`
  :host {
    ${new Array(16).fill(0).map((e,t)=>`--g-${t+1}: ${(t+1)*N}px;`).join(`
`)}
  }

  ${new Array(49).fill(0).map((e,t)=>{const u=t-24,r=u<0?`n${Math.abs(u)}`:u.toString();return`
        .layout-p-${r} { --padding: ${u*N}px; padding: var(--padding); }
        .layout-pt-${r} { padding-top: ${u*N}px; }
        .layout-pr-${r} { padding-right: ${u*N}px; }
        .layout-pb-${r} { padding-bottom: ${u*N}px; }
        .layout-pl-${r} { padding-left: ${u*N}px; }

        .layout-m-${r} { --margin: ${u*N}px; margin: var(--margin); }
        .layout-mt-${r} { margin-top: ${u*N}px; }
        .layout-mr-${r} { margin-right: ${u*N}px; }
        .layout-mb-${r} { margin-bottom: ${u*N}px; }
        .layout-ml-${r} { margin-left: ${u*N}px; }

        .layout-t-${r} { top: ${u*N}px; }
        .layout-r-${r} { right: ${u*N}px; }
        .layout-b-${r} { bottom: ${u*N}px; }
        .layout-l-${r} { left: ${u*N}px; }`}).join(`
`)}

  ${new Array(25).fill(0).map((e,t)=>`
        .layout-g-${t} { gap: ${t*N}px; }`).join(`
`)}

  ${new Array(8).fill(0).map((e,t)=>`
        .layout-grd-col${t+1} { grid-template-columns: ${"1fr ".repeat(t+1).trim()}; }`).join(`
`)}

  .layout-pos-a {
    position: absolute;
  }

  .layout-pos-rel {
    position: relative;
  }

  .layout-dsp-none {
    display: none;
  }

  .layout-dsp-block {
    display: block;
  }

  .layout-dsp-grid {
    display: grid;
  }

  .layout-dsp-iflex {
    display: inline-flex;
  }

  .layout-dsp-flexvert {
    display: flex;
    flex-direction: column;
  }

  .layout-dsp-flexhor {
    display: flex;
    flex-direction: row;
  }

  .layout-fw-w {
    flex-wrap: wrap;
  }

  .layout-al-fs {
    align-items: start;
  }

  .layout-al-fe {
    align-items: end;
  }

  .layout-al-c {
    align-items: center;
  }

  .layout-as-n {
    align-self: normal;
  }

  .layout-js-c {
    justify-self: center;
  }

  .layout-sp-c {
    justify-content: center;
  }

  .layout-sp-ev {
    justify-content: space-evenly;
  }

  .layout-sp-bt {
    justify-content: space-between;
  }

  .layout-sp-s {
    justify-content: start;
  }

  .layout-sp-e {
    justify-content: end;
  }

  .layout-ji-e {
    justify-items: end;
  }

  .layout-r-none {
    resize: none;
  }

  .layout-fs-c {
    field-sizing: content;
  }

  .layout-fs-n {
    field-sizing: none;
  }

  .layout-flx-0 {
    flex: 0 0 auto;
  }

  .layout-flx-1 {
    flex: 1 0 auto;
  }

  .layout-c-s {
    contain: strict;
  }

  /** Widths **/

  ${new Array(10).fill(0).map((e,t)=>{const u=(t+1)*10;return`.layout-w-${u} { width: ${u}%; max-width: ${u}%; }`}).join(`
`)}

  ${new Array(16).fill(0).map((e,t)=>{const u=t*N;return`.layout-wp-${t} { width: ${u}px; }`}).join(`
`)}

  /** Heights **/

  ${new Array(10).fill(0).map((e,t)=>{const u=(t+1)*10;return`.layout-h-${u} { height: ${u}%; }`}).join(`
`)}

  ${new Array(16).fill(0).map((e,t)=>{const u=t*N;return`.layout-hp-${t} { height: ${u}px; }`}).join(`
`)}

  .layout-el-cv {
    & img,
    & video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin: 0;
    }
  }

  .layout-ar-sq {
    aspect-ratio: 1 / 1;
  }

  .layout-ex-fb {
    margin: calc(var(--padding) * -1) 0 0 calc(var(--padding) * -1);
    width: calc(100% + var(--padding) * 2);
    height: calc(100% + var(--padding) * 2);
  }
`,Df=`
  ${new Array(21).fill(0).map((e,t)=>`.opacity-el-${t*5} { opacity: ${t/20}; }`).join(`
`)}
`,Sf=`
  :host {
    --default-font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    --default-font-family-mono: "Courier New", Courier, monospace;
  }

  .typography-f-s {
    font-family: var(--font-family, var(--default-font-family));
    font-optical-sizing: auto;
    font-variation-settings: "slnt" 0, "wdth" 100, "GRAD" 0;
  }

  .typography-f-sf {
    font-family: var(--font-family-flex, var(--default-font-family));
    font-optical-sizing: auto;
  }

  .typography-f-c {
    font-family: var(--font-family-mono, var(--default-font-family));
    font-optical-sizing: auto;
    font-variation-settings: "slnt" 0, "wdth" 100, "GRAD" 0;
  }

  .typography-v-r {
    font-variation-settings: "slnt" 0, "wdth" 100, "GRAD" 0, "ROND" 100;
  }

  .typography-ta-s {
    text-align: start;
  }

  .typography-ta-c {
    text-align: center;
  }

  .typography-fs-n {
    font-style: normal;
  }

  .typography-fs-i {
    font-style: italic;
  }

  .typography-sz-ls {
    font-size: 11px;
    line-height: 16px;
  }

  .typography-sz-lm {
    font-size: 12px;
    line-height: 16px;
  }

  .typography-sz-ll {
    font-size: 14px;
    line-height: 20px;
  }

  .typography-sz-bs {
    font-size: 12px;
    line-height: 16px;
  }

  .typography-sz-bm {
    font-size: 14px;
    line-height: 20px;
  }

  .typography-sz-bl {
    font-size: 16px;
    line-height: 24px;
  }

  .typography-sz-ts {
    font-size: 14px;
    line-height: 20px;
  }

  .typography-sz-tm {
    font-size: 16px;
    line-height: 24px;
  }

  .typography-sz-tl {
    font-size: 22px;
    line-height: 28px;
  }

  .typography-sz-hs {
    font-size: 24px;
    line-height: 32px;
  }

  .typography-sz-hm {
    font-size: 28px;
    line-height: 36px;
  }

  .typography-sz-hl {
    font-size: 32px;
    line-height: 40px;
  }

  .typography-sz-ds {
    font-size: 36px;
    line-height: 44px;
  }

  .typography-sz-dm {
    font-size: 45px;
    line-height: 52px;
  }

  .typography-sz-dl {
    font-size: 57px;
    line-height: 64px;
  }

  .typography-ws-p {
    white-space: pre-line;
  }

  .typography-ws-nw {
    white-space: nowrap;
  }

  .typography-td-none {
    text-decoration: none;
  }

  /** Weights **/

  ${new Array(9).fill(0).map((e,t)=>{const u=(t+1)*100;return`.typography-w-${u} { font-weight: ${u}; }`}).join(`
`)}
`,Bc=[$f,kf,wf,Af,Ef,Df,Sf].flat(1/0).join(`
`);class br extends CustomEvent{static{this.EVENT_NAME="a2ui-validation-input"}constructor(t,u){super(br.EVENT_NAME,{bubbles:!0,composed:!0,...u,detail:{...t,eventType:br.EVENT_NAME}})}}const Me=(e=null)=>new de.State(e,{equals:()=>!1}),Ff=new Set([Symbol.iterator,"concat","entries","every","filter","find","findIndex","flat","flatMap","forEach","includes","indexOf","join","keys","lastIndexOf","map","reduce","reduceRight","slice","some","values"]),If=new Set(["fill","push","unshift"]);function Oo(e){if(typeof e=="symbol")return null;const t=Number(e);return isNaN(t)?null:t%1===0?t:null}class Ve{static from(t,u,r){return u?new Ve(Array.from(t,u,r)):new Ve(Array.from(t))}static of(...t){return new Ve(t)}constructor(t=[]){let u=t.slice(),r=this,i=new Map,n=!1;return new Proxy(u,{get(a,o){let c=Oo(o);if(c!==null)return r.#u(c),r.#e.get(),a[c];if(o==="length")return n?n=!1:r.#e.get(),a[o];if(If.has(o)&&(n=!0),Ff.has(o)){let l=i.get(o);return l===void 0&&(l=(...f)=>(r.#e.get(),a[o](...f)),i.set(o,l)),l}return a[o]},set(a,o,c){a[o]=c;let l=Oo(o);return l!==null?(r.#r(l),r.#e.set(null)):o==="length"&&r.#e.set(null),!0},getPrototypeOf(){return Ve.prototype}})}#e=Me();#t=new Map;#u(t){let u=this.#t.get(t);u===void 0&&(u=Me(),this.#t.set(t,u)),u.get()}#r(t){const u=this.#t.get(t);u&&u.set(null)}}Object.setPrototypeOf(Ve.prototype,Array.prototype);class Lc{collection=Me();storages=new Map;vals;readStorageFor(t){const{storages:u}=this;let r=u.get(t);r===void 0&&(r=Me(),u.set(t,r)),r.get()}dirtyStorageFor(t){const u=this.storages.get(t);u&&u.set(null)}constructor(t){this.vals=t?new Map(t):new Map}get(t){return this.readStorageFor(t),this.vals.get(t)}has(t){return this.readStorageFor(t),this.vals.has(t)}entries(){return this.collection.get(),this.vals.entries()}keys(){return this.collection.get(),this.vals.keys()}values(){return this.collection.get(),this.vals.values()}forEach(t){this.collection.get(),this.vals.forEach(t)}get size(){return this.collection.get(),this.vals.size}[Symbol.iterator](){return this.collection.get(),this.vals[Symbol.iterator]()}get[Symbol.toStringTag](){return this.vals[Symbol.toStringTag]}set(t,u){return this.dirtyStorageFor(t),this.collection.set(null),this.vals.set(t,u),this}delete(t){return this.dirtyStorageFor(t),this.collection.set(null),this.vals.delete(t)}clear(){this.storages.forEach(t=>t.set(null)),this.collection.set(null),this.vals.clear()}}Object.setPrototypeOf(Lc.prototype,Map.prototype);class mr{static fromEntries(t){return new mr(Object.fromEntries(t))}#e=new Map;#t=Me();constructor(t={}){let u=Object.getPrototypeOf(t),r=Object.getOwnPropertyDescriptors(t),i=Object.create(u);for(let a in r)Object.defineProperty(i,a,r[a]);let n=this;return new Proxy(i,{get(a,o,c){return n.#u(o),Reflect.get(a,o,c)},has(a,o){return n.#u(o),o in a},ownKeys(a){return n.#t.get(),Reflect.ownKeys(a)},set(a,o,c,l){let f=Reflect.set(a,o,c,l);return n.#r(o),n.#i(),f},deleteProperty(a,o){return o in a&&(delete a[o],n.#r(o),n.#i()),!0},getPrototypeOf(){return mr.prototype}})}#u(t){let u=this.#e.get(t);u===void 0&&(u=Me(),this.#e.set(t,u)),u.get()}#r(t){const u=this.#e.get(t);u&&u.set(null)}#i(){this.#t.set(null)}}const Tf=mr;class Uc{collection=Me();storages=new Map;vals;storageFor(t){const u=this.storages;let r=u.get(t);return r===void 0&&(r=Me(),u.set(t,r)),r}dirtyStorageFor(t){const u=this.storages.get(t);u&&u.set(null)}constructor(t){this.vals=new Set(t)}has(t){return this.storageFor(t).get(),this.vals.has(t)}entries(){return this.collection.get(),this.vals.entries()}keys(){return this.collection.get(),this.vals.keys()}values(){return this.collection.get(),this.vals.values()}forEach(t){this.collection.get(),this.vals.forEach(t)}get size(){return this.collection.get(),this.vals.size}[Symbol.iterator](){return this.collection.get(),this.vals[Symbol.iterator]()}get[Symbol.toStringTag](){return this.vals[Symbol.toStringTag]}add(t){return this.dirtyStorageFor(t),this.collection.set(null),this.vals.add(t),this}delete(t){return this.dirtyStorageFor(t),this.collection.set(null),this.vals.delete(t)}clear(){this.storages.forEach(t=>t.set(null)),this.collection.set(null),this.vals.clear()}}Object.setPrototypeOf(Uc.prototype,Set.prototype);function Mf(){return new M({arrayCtor:Ve,mapCtor:Lc,objCtor:Tf,setCtor:Uc})}const Of={createSignalA2uiMessageProcessor:Mf,A2uiMessageProcessor:M,Guards:xf};function*Pf(e,t){if(e!==void 0){let u=0;for(const r of e)yield t(r,u++)}}let Hr=!1,gr=new de.subtle.Watcher(()=>{Hr||(Hr=!0,queueMicrotask(()=>{Hr=!1,zf()}))});function zf(){for(const e of gr.getPending())e.get();gr.watch()}function Nf(e){let t=new de.Computed(()=>e());return gr.watch(t),t.get(),()=>{gr.unwatch(t)}}const qc="A2UITheme",R=an(Bc);class Rf{constructor(){this.schemas=new Map,this.registry=new Map}register(t,u,r,i){if(!/^[a-zA-Z0-9]+$/.test(t))throw new Error(`[Registry] Invalid typeName '${t}'. Must be alphanumeric.`);this.registry.set(t,u),i&&this.schemas.set(t,i);const n=r||`a2ui-custom-${t.toLowerCase()}`,a=customElements.getName(u);if(a){if(a!==n)throw new Error(`Component ${t} is already registered as ${a}, but requested as ${n}.`);return}customElements.get(n)||customElements.define(n,u)}get(t){return this.registry.get(t)}getInlineCatalog(){const t={};for(const[u,r]of this.schemas)t[u]=r;return{components:t}}}const Po=new Rf;var Bf=Object.create,fn=Object.defineProperty,Lf=Object.getOwnPropertyDescriptor,jc=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Dt=e=>{throw TypeError(e)},Uf=(e,t,u)=>t in e?fn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,zo=(e,t)=>fn(e,"name",{value:t,configurable:!0}),qf=e=>[,,,Bf(e?.[jc("metadata")]??null)],Wc=["class","method","getter","setter","accessor","field","value","get","set"],tu=e=>e!==void 0&&typeof e!="function"?Dt("Function expected"):e,jf=(e,t,u,r,i)=>({kind:Wc[e],name:t,metadata:r,addInitializer:n=>u._?Dt("Already initialized"):i.push(tu(n||null))}),Wf=(e,t)=>Uf(t,jc("metadata"),e[3]),H=(e,t,u,r)=>{for(var i=0,n=e[t>>1],a=n&&n.length;i<a;i++)t&1?n[i].call(u):r=n[i].call(u,r);return r},Ee=(e,t,u,r,i,n)=>{var a,o,c,l,f,s=t&7,_=!!(t&8),d=!!(t&16),b=s>3?e.length+1:s?_?1:2:0,v=Wc[s+5],x=s>3&&(e[b-1]=[]),k=e[b]||(e[b]=[]),p=s&&(!d&&!_&&(i=i.prototype),s<5&&(s>3||!d)&&Lf(s<4?i:{get[u](){return We(this,n)},set[u](h){return vr(this,n,h)}},u));s?d&&s<4&&zo(n,(s>2?"set ":s>1?"get ":"")+u):zo(i,u);for(var g=r.length-1;g>=0;g--)l=jf(s,u,c={},e[3],k),s&&(l.static=_,l.private=d,f=l.access={has:d?h=>Hf(i,h):h=>u in h},s^3&&(f.get=d?h=>(s^1?We:Vf)(h,i,s^4?n:p.get):h=>h[u]),s>2&&(f.set=d?(h,m)=>vr(h,i,m,s^4?n:p.set):(h,m)=>h[u]=m)),o=(0,r[g])(s?s<4?d?n:p[v]:s>4?void 0:{get:p.get,set:p.set}:i,l),c._=1,s^4||o===void 0?tu(o)&&(s>4?x.unshift(o):s?d?n=o:p[v]=o:i=o):typeof o!="object"||o===null?Dt("Object expected"):(tu(a=o.get)&&(p.get=a),tu(a=o.set)&&(p.set=a),tu(a=o.init)&&x.unshift(a));return s||Wf(e,i),p&&fn(i,u,p),d?s^4?n:p:i},pn=(e,t,u)=>t.has(e)||Dt("Cannot "+u),Hf=(e,t)=>Object(t)!==t?Dt('Cannot use the "in" operator on this value'):e.has(t),We=(e,t,u)=>(pn(e,t,"read from private field"),u?u.call(e):t.get(e)),pe=(e,t,u)=>t.has(e)?Dt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,u),vr=(e,t,u,r)=>(pn(e,t,"write to private field"),r?r.call(e,u):t.set(e,u),u),Vf=(e,t,u)=>(pn(e,t,"access private method"),u),Hc,Vc,Gc,Zc,Kc,Jc,Qc,Yc,di,Xc,S,_n,bn,mn,gn,vn,xn,yn,nr,Ue;Xc=[P("a2ui-root")];class E extends(di=cc(st),Yc=[C()],Qc=[C()],Jc=[Xh({context:qc})],Kc=[C({attribute:!1})],Zc=[C({attribute:!1})],Gc=[C()],Vc=[C()],Hc=[C()],di){constructor(){super(...arguments),H(S,5,this),pe(this,_n,H(S,8,this,null)),H(S,11,this),pe(this,bn,H(S,12,this,null)),H(S,15,this),pe(this,mn,H(S,16,this)),H(S,19,this),pe(this,gn,H(S,20,this,null)),H(S,23,this),pe(this,vn,H(S,24,this,null)),H(S,27,this),pe(this,xn,H(S,28,this,"")),H(S,31,this),pe(this,yn,H(S,32,this,!1)),H(S,35,this),pe(this,nr,1),pe(this,Ue,null)}set weight(t){vr(this,nr,t),this.style.setProperty("--weight",`${t}`)}get weight(){return We(this,nr)}willUpdate(t){t.has("childComponents")&&(We(this,Ue)&&We(this,Ue).call(this),vr(this,Ue,Nf(()=>{const u=this.childComponents??null,r=this.renderComponentTree(u);nn(r,this,{host:this})})))}disconnectedCallback(){super.disconnectedCallback(),We(this,Ue)&&We(this,Ue).call(this)}renderComponentTree(t){return!t||!Array.isArray(t)?$:y` ${Pf(t,u=>{if(this.enableCustomElements){const i=Po.get(u.type)||customElements.get(u.type);if(i){const n=u,a=new i;a.id=n.id,n.slotName&&(a.slot=n.slotName),a.component=n,a.weight=n.weight??"initial",a.processor=this.processor,a.surfaceId=this.surfaceId,a.dataContextPath=n.dataContextPath??"/";for(const[o,c]of Object.entries(u.properties))a[o]=c;return y`${a}`}}switch(u.type){case"List":{const r=u,i=r.properties.children;return y`<a2ui-list
            id=${r.id}
            slot=${r.slotName?r.slotName:$}
            .component=${r}
            .weight=${r.weight??"initial"}
            .direction=${r.properties.direction??"vertical"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .childComponents=${i}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-list>`}case"Card":{const r=u;let i=r.properties.children;return!i&&r.properties.child&&(i=[r.properties.child]),y`<a2ui-card
            id=${r.id}
            slot=${r.slotName?r.slotName:$}
            .component=${r}
            .weight=${r.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .childComponents=${i}
            .dataContextPath=${r.dataContextPath??""}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-card>`}case"Column":{const r=u;return y`<a2ui-column
            id=${r.id}
            slot=${r.slotName?r.slotName:$}
            .component=${r}
            .weight=${r.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .childComponents=${r.properties.children??null}
            .dataContextPath=${r.dataContextPath??""}
            .alignment=${r.properties.alignment??"stretch"}
            .distribution=${r.properties.distribution??"start"}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-column>`}case"Row":{const r=u;return y`<a2ui-row
            id=${r.id}
            slot=${r.slotName?r.slotName:$}
            .component=${r}
            .weight=${r.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .childComponents=${r.properties.children??null}
            .dataContextPath=${r.dataContextPath??""}
            .alignment=${r.properties.alignment??"stretch"}
            .distribution=${r.properties.distribution??"start"}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-row>`}case"Image":{const r=u;return y`<a2ui-image
            id=${r.id}
            slot=${r.slotName?r.slotName:$}
            .component=${r}
            .weight=${r.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .url=${r.properties.url??null}
            .dataContextPath=${r.dataContextPath??""}
            .usageHint=${r.properties.usageHint}
            .fit=${r.properties.fit}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-image>`}case"Icon":{const r=u;return y`<a2ui-icon
            id=${r.id}
            slot=${r.slotName?r.slotName:$}
            .component=${r}
            .weight=${r.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .name=${r.properties.name??null}
            .dataContextPath=${r.dataContextPath??""}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-icon>`}case"AudioPlayer":{const r=u;return y`<a2ui-audioplayer
            id=${r.id}
            slot=${r.slotName?r.slotName:$}
            .component=${r}
            .weight=${r.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .url=${r.properties.url??null}
            .dataContextPath=${r.dataContextPath??""}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-audioplayer>`}case"Button":{const r=u;return y`<a2ui-button
            id=${r.id}
            slot=${r.slotName?r.slotName:$}
            .component=${r}
            .weight=${r.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .dataContextPath=${r.dataContextPath??""}
            .action=${r.properties.action}
            .childComponents=${[r.properties.child]}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-button>`}case"Text":{const r=u;return y`<a2ui-text
            id=${r.id}
            slot=${r.slotName?r.slotName:$}
            .component=${r}
            .weight=${r.weight??"initial"}
            .model=${this.processor}
            .surfaceId=${this.surfaceId}
            .processor=${this.processor}
            .dataContextPath=${r.dataContextPath}
            .text=${r.properties.text}
            .usageHint=${r.properties.usageHint}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-text>`}case"CheckBox":{const r=u;return y`<a2ui-checkbox
            id=${r.id}
            slot=${r.slotName?r.slotName:$}
            .component=${r}
            .weight=${r.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .dataContextPath=${r.dataContextPath??""}
            .label=${r.properties.label}
            .value=${r.properties.value}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-checkbox>`}case"DateTimeInput":{const r=u;return y`<a2ui-datetimeinput
            id=${r.id}
            slot=${r.slotName?r.slotName:$}
            .component=${r}
            .weight=${r.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .dataContextPath=${r.dataContextPath??""}
            .enableDate=${r.properties.enableDate??!0}
            .enableTime=${r.properties.enableTime??!0}
            .value=${r.properties.value}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-datetimeinput>`}case"Divider":{const r=u;return y`<a2ui-divider
            id=${r.id}
            slot=${r.slotName?r.slotName:$}
            .component=${r}
            .weight=${r.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .dataContextPath=${r.dataContextPath}
            .thickness=${r.properties.thickness}
            .axis=${r.properties.axis}
            .color=${r.properties.color}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-divider>`}case"MultipleChoice":{const r=u;return y`<a2ui-multiplechoice
            id=${r.id}
            slot=${r.slotName?r.slotName:$}
            .component=${r}
            .weight=${r.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .dataContextPath=${r.dataContextPath}
            .options=${r.properties.options}
            .maxAllowedSelections=${r.properties.maxAllowedSelections}
            .selections=${r.properties.selections}
            .variant=${r.properties.variant}
            .filterable=${r.properties.filterable}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-multiplechoice>`}case"Slider":{const r=u;return y`<a2ui-slider
            id=${r.id}
            slot=${r.slotName?r.slotName:$}
            .component=${r}
            .weight=${r.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .dataContextPath=${r.dataContextPath}
            .value=${r.properties.value}
            .minValue=${r.properties.minValue}
            .maxValue=${r.properties.maxValue}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-slider>`}case"TextField":{const r=u;return y`<a2ui-textfield
            id=${r.id}
            slot=${r.slotName?r.slotName:$}
            .component=${r}
            .weight=${r.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .dataContextPath=${r.dataContextPath}
            .label=${r.properties.label}
            .text=${r.properties.text}
            .type=${r.properties.type}
            .validationRegexp=${r.properties.validationRegexp}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-textfield>`}case"Video":{const r=u;return y`<a2ui-video
            id=${r.id}
            slot=${r.slotName?r.slotName:$}
            .component=${r}
            .weight=${r.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .dataContextPath=${r.dataContextPath}
            .url=${r.properties.url}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-video>`}case"Tabs":{const r=u,i=[],n=[];if(r.properties.tabItems)for(const a of r.properties.tabItems)i.push(a.title),n.push(a.child);return y`<a2ui-tabs
            id=${r.id}
            slot=${r.slotName?r.slotName:$}
            .component=${r}
            .weight=${r.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .dataContextPath=${r.dataContextPath}
            .titles=${i}
            .childComponents=${n}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-tabs>`}case"Modal":{const r=u,i=[r.properties.entryPointChild,r.properties.contentChild];return r.properties.entryPointChild.slotName="entry",y`<a2ui-modal
            id=${r.id}
            slot=${r.slotName?r.slotName:$}
            .component=${r}
            .weight=${r.weight??"initial"}
            .processor=${this.processor}
            .surfaceId=${this.surfaceId}
            .dataContextPath=${r.dataContextPath}
            .childComponents=${i}
            .enableCustomElements=${this.enableCustomElements}
          ></a2ui-modal>`}default:return this.renderCustomComponent(u)}})}`}renderCustomComponent(t){if(!this.enableCustomElements)return;const u=t,i=Po.get(t.type)||customElements.get(t.type);if(!i)return y`Unknown element ${t.type}`;const n=new i;n.id=u.id,u.slotName&&(n.slot=u.slotName),n.component=u,n.weight=u.weight??"initial",n.processor=this.processor,n.surfaceId=this.surfaceId,n.dataContextPath=u.dataContextPath??"/";for(const[a,o]of Object.entries(t.properties))n[a]=o;return y`${n}`}render(){return y`<slot></slot>`}}S=qf(di);_n=new WeakMap;bn=new WeakMap;mn=new WeakMap;gn=new WeakMap;vn=new WeakMap;xn=new WeakMap;yn=new WeakMap;nr=new WeakMap;Ue=new WeakMap;Ee(S,4,"surfaceId",Yc,E,_n);Ee(S,4,"component",Qc,E,bn);Ee(S,4,"theme",Jc,E,mn);Ee(S,4,"childComponents",Kc,E,gn);Ee(S,4,"processor",Zc,E,vn);Ee(S,4,"dataContextPath",Gc,E,xn);Ee(S,4,"enableCustomElements",Vc,E,yn);Ee(S,3,"weight",Hc,E);E=Ee(S,0,"Root",Xc,E);E.styles=[R,O`
      :host {
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-height: 80%;
      }
    `];H(S,1,E);const D=wt(class extends At{constructor(e){if(super(e),e.type!==Vu.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const u=e.element.classList;for(const r of this.st)r in t||(u.remove(r),this.st.delete(r));for(const r in t){const i=!!t[r];i===this.st.has(r)||this.nt?.has(r)||(i?(u.add(r),this.st.add(r)):(u.remove(r),this.st.delete(r)))}return ne}});const e0="important",Gf=" !"+e0,q=wt(class extends At{constructor(e){if(super(e),e.type!==Vu.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,u)=>{const r=e[u];return r==null?t:t+`${u=u.includes("-")?u:u.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:u}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?u.removeProperty(r):u[r]=null);for(const r in t){const i=t[r];if(i!=null){this.ft.add(r);const n=typeof i=="string"&&i.endsWith(Gf);r.includes("-")||n?u.setProperty(r,n?i.slice(0,-11):i,n?e0:""):u[r]=i}}return ne}});var Zf=Object.create,$n=Object.defineProperty,Kf=Object.getOwnPropertyDescriptor,t0=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),St=e=>{throw TypeError(e)},Jf=(e,t,u)=>t in e?$n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,No=(e,t)=>$n(e,"name",{value:t,configurable:!0}),Qf=e=>[,,,Zf(e?.[t0("metadata")]??null)],u0=["class","method","getter","setter","accessor","field","value","get","set"],uu=e=>e!==void 0&&typeof e!="function"?St("Function expected"):e,Yf=(e,t,u,r,i)=>({kind:u0[e],name:t,metadata:r,addInitializer:n=>u._?St("Already initialized"):i.push(uu(n||null))}),Xf=(e,t)=>Jf(t,t0("metadata"),e[3]),hi=(e,t,u,r)=>{for(var i=0,n=e[t>>1],a=n&&n.length;i<a;i++)t&1?n[i].call(u):r=n[i].call(u,r);return r},r0=(e,t,u,r,i,n)=>{var a,o,c,l,f,s=t&7,_=!!(t&8),d=!!(t&16),b=s>3?e.length+1:s?_?1:2:0,v=u0[s+5],x=s>3&&(e[b-1]=[]),k=e[b]||(e[b]=[]),p=s&&(!d&&!_&&(i=i.prototype),s<5&&(s>3||!d)&&Kf(s<4?i:{get[u](){return Ro(this,n)},set[u](h){return Lo(this,n,h)}},u));s?d&&s<4&&No(n,(s>2?"set ":s>1?"get ":"")+u):No(i,u);for(var g=r.length-1;g>=0;g--)l=Yf(s,u,c={},e[3],k),s&&(l.static=_,l.private=d,f=l.access={has:d?h=>e1(i,h):h=>u in h},s^3&&(f.get=d?h=>(s^1?Ro:i0)(h,i,s^4?n:p.get):h=>h[u]),s>2&&(f.set=d?(h,m)=>Lo(h,i,m,s^4?n:p.set):(h,m)=>h[u]=m)),o=(0,r[g])(s?s<4?d?n:p[v]:s>4?void 0:{get:p.get,set:p.set}:i,l),c._=1,s^4||o===void 0?uu(o)&&(s>4?x.unshift(o):s?d?n=o:p[v]=o:i=o):typeof o!="object"||o===null?St("Object expected"):(uu(a=o.get)&&(p.get=a),uu(a=o.set)&&(p.set=a),uu(a=o.init)&&x.unshift(a));return s||Xf(e,i),p&&$n(i,u,p),d?s^4?n:p:i},kn=(e,t,u)=>t.has(e)||St("Cannot "+u),e1=(e,t)=>Object(t)!==t?St('Cannot use the "in" operator on this value'):e.has(t),Ro=(e,t,u)=>(kn(e,t,"read from private field"),u?u.call(e):t.get(e)),Bo=(e,t,u)=>t.has(e)?St("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,u),Lo=(e,t,u,r)=>(kn(e,t,"write to private field"),r?r.call(e,u):t.set(e,u),u),i0=(e,t,u)=>(kn(e,t,"access private method"),u),n0,fi,s0,ht,Cn,pi,o0;s0=[P("a2ui-audioplayer")];class Ou extends(fi=E,n0=[C()],fi){constructor(){super(...arguments),Bo(this,pi),Bo(this,Cn,hi(ht,8,this,null)),hi(ht,11,this)}render(){return y`<section
      class=${D(this.theme.components.AudioPlayer)}
      style=${this.theme.additionalStyles?.AudioPlayer?q(this.theme.additionalStyles?.AudioPlayer):$}
    >
      ${i0(this,pi,o0).call(this)}
    </section>`}}ht=Qf(fi);Cn=new WeakMap;pi=new WeakSet;o0=function(){if(!this.url)return $;if(this.url&&typeof this.url=="object"){if("literalString"in this.url)return y`<audio controls src=${this.url.literalString} />`;if("literal"in this.url)return y`<audio controls src=${this.url.literal} />`;if(this.url&&"path"in this.url&&this.url.path){if(!this.processor||!this.component)return y`(no processor)`;const e=this.processor.getData(this.component,this.url.path,this.surfaceId??M.DEFAULT_SURFACE_ID);return e?typeof e!="string"?y`Invalid audio URL`:y`<audio controls src=${e} />`:y`Invalid audio URL`}}return y`(empty)`};r0(ht,4,"url",n0,Ou,Cn);Ou=r0(ht,0,"Audio",s0,Ou);Ou.styles=[R,O`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        flex: var(--weight);
        min-height: 0;
        overflow: auto;
      }

      audio {
        display: block;
        width: 100%;
      }
    `];hi(ht,1,Ou);var t1=Object.create,wn=Object.defineProperty,u1=Object.getOwnPropertyDescriptor,a0=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Ft=e=>{throw TypeError(e)},r1=(e,t,u)=>t in e?wn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,Uo=(e,t)=>wn(e,"name",{value:t,configurable:!0}),i1=e=>[,,,t1(e?.[a0("metadata")]??null)],c0=["class","method","getter","setter","accessor","field","value","get","set"],ru=e=>e!==void 0&&typeof e!="function"?Ft("Function expected"):e,n1=(e,t,u,r,i)=>({kind:c0[e],name:t,metadata:r,addInitializer:n=>u._?Ft("Already initialized"):i.push(ru(n||null))}),s1=(e,t)=>r1(t,a0("metadata"),e[3]),_i=(e,t,u,r)=>{for(var i=0,n=e[t>>1],a=n&&n.length;i<a;i++)t&1?n[i].call(u):r=n[i].call(u,r);return r},l0=(e,t,u,r,i,n)=>{var a,o,c,l,f,s=t&7,_=!!(t&8),d=!!(t&16),b=s>3?e.length+1:s?_?1:2:0,v=c0[s+5],x=s>3&&(e[b-1]=[]),k=e[b]||(e[b]=[]),p=s&&(!d&&!_&&(i=i.prototype),s<5&&(s>3||!d)&&u1(s<4?i:{get[u](){return qo(this,n)},set[u](h){return jo(this,n,h)}},u));s?d&&s<4&&Uo(n,(s>2?"set ":s>1?"get ":"")+u):Uo(i,u);for(var g=r.length-1;g>=0;g--)l=n1(s,u,c={},e[3],k),s&&(l.static=_,l.private=d,f=l.access={has:d?h=>o1(i,h):h=>u in h},s^3&&(f.get=d?h=>(s^1?qo:c1)(h,i,s^4?n:p.get):h=>h[u]),s>2&&(f.set=d?(h,m)=>jo(h,i,m,s^4?n:p.set):(h,m)=>h[u]=m)),o=(0,r[g])(s?s<4?d?n:p[v]:s>4?void 0:{get:p.get,set:p.set}:i,l),c._=1,s^4||o===void 0?ru(o)&&(s>4?x.unshift(o):s?d?n=o:p[v]=o:i=o):typeof o!="object"||o===null?Ft("Object expected"):(ru(a=o.get)&&(p.get=a),ru(a=o.set)&&(p.set=a),ru(a=o.init)&&x.unshift(a));return s||s1(e,i),p&&wn(i,u,p),d?s^4?n:p:i},An=(e,t,u)=>t.has(e)||Ft("Cannot "+u),o1=(e,t)=>Object(t)!==t?Ft('Cannot use the "in" operator on this value'):e.has(t),qo=(e,t,u)=>(An(e,t,"read from private field"),u?u.call(e):t.get(e)),a1=(e,t,u)=>t.has(e)?Ft("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,u),jo=(e,t,u,r)=>(An(e,t,"write to private field"),r?r.call(e,u):t.set(e,u),u),c1=(e,t,u)=>(An(e,t,"access private method"),u),d0,bi,h0,ft,En;h0=[P("a2ui-button")];class Pu extends(bi=E,d0=[C()],bi){constructor(){super(...arguments),a1(this,En,_i(ft,8,this,null)),_i(ft,11,this)}render(){return y`<button
      class=${D(this.theme.components.Button)}
      style=${this.theme.additionalStyles?.Button?q(this.theme.additionalStyles?.Button):$}
      @click=${()=>{if(!this.action)return;const t=new dn({eventType:"a2ui.action",action:this.action,dataContextPath:this.dataContextPath,sourceComponentId:this.id,sourceComponent:this.component});this.dispatchEvent(t)}}
    >
      <slot></slot>
    </button>`}}ft=i1(bi);En=new WeakMap;l0(ft,4,"action",d0,Pu,En);Pu=l0(ft,0,"Button",h0,Pu);Pu.styles=[R,O`
      :host {
        display: block;
        flex: var(--weight);
        min-height: 0;
      }
    `];_i(ft,1,Pu);var l1=Object.create,Dn=Object.defineProperty,d1=Object.getOwnPropertyDescriptor,f0=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),p0=e=>{throw TypeError(e)},h1=(e,t,u)=>t in e?Dn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,f1=(e,t)=>Dn(e,"name",{value:t,configurable:!0}),p1=e=>[,,,l1(e?.[f0("metadata")]??null)],_1=["class","method","getter","setter","accessor","field","value","get","set"],_0=e=>e!==void 0&&typeof e!="function"?p0("Function expected"):e,b1=(e,t,u,r,i)=>({kind:_1[e],name:t,metadata:r,addInitializer:n=>u._?p0("Already initialized"):i.push(_0(n||null))}),m1=(e,t)=>h1(t,f0("metadata"),e[3]),g1=(e,t,u,r)=>{for(var i=0,n=e[t>>1],a=n&&n.length;i<a;i++)n[i].call(u);return r},v1=(e,t,u,r,i,n)=>{var a,o,c,l=t&7,f=!1,s=0,_=e[s]||(e[s]=[]),d=l&&(i=i.prototype,l<5&&(l>3||!f)&&d1(i,u));f1(i,u);for(var b=r.length-1;b>=0;b--)c=b1(l,u,o={},e[3],_),a=(0,r[b])(i,c),o._=1,_0(a)&&(i=a);return m1(e,i),d&&Dn(i,u,d),f?l^4?n:d:i},b0,Sn,m0;b0=[P("a2ui-card")];class mi extends(m0=E){static{this.styles=[R,O`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        flex: var(--weight);
        min-height: 0;
        overflow: auto;
      }

      section {
        height: 100%;
        width: 100%;
        min-height: 0;
        overflow: auto;

        ::slotted(*) {
          height: 100%;
          width: 100%;
        }
      }
    `]}render(){return y` <section
      class=${D(this.theme.components.Card)}
      style=${this.theme.additionalStyles?.Card?q(this.theme.additionalStyles?.Card):$}
    >
      <slot></slot>
    </section>`}}Sn=p1(m0);mi=v1(Sn,0,"Card",b0,mi);g1(Sn,1,mi);function ot(e,t,u,r){if(e!==null&&typeof e=="object"){if("literalString"in e)return e.literalString??"";if("literal"in e&&e.literal!==void 0)return e.literal??"";if(e&&"path"in e&&e.path){if(!u||!t)return"(no model)";const i=u.getData(t,e.path,r??M.DEFAULT_SURFACE_ID);return i===null||typeof i!="string"?"":i}}return""}function x1(e,t,u,r){if(e!==null&&typeof e=="object"){if("literalNumber"in e)return e.literalNumber??0;if("literal"in e&&e.literal!==void 0)return e.literal??0;if(e&&"path"in e&&e.path){if(!u||!t)return-1;let i=u.getData(t,e.path,r??M.DEFAULT_SURFACE_ID);return typeof i=="string"&&(i=Number.parseInt(i,10),Number.isNaN(i)&&(i=null)),i===null||typeof i!="number"?-1:i}}return 0}var y1=Object.create,Fn=Object.defineProperty,$1=Object.getOwnPropertyDescriptor,g0=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),It=e=>{throw TypeError(e)},k1=(e,t,u)=>t in e?Fn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,Wo=(e,t)=>Fn(e,"name",{value:t,configurable:!0}),C1=e=>[,,,y1(e?.[g0("metadata")]??null)],v0=["class","method","getter","setter","accessor","field","value","get","set"],iu=e=>e!==void 0&&typeof e!="function"?It("Function expected"):e,w1=(e,t,u,r,i)=>({kind:v0[e],name:t,metadata:r,addInitializer:n=>u._?It("Already initialized"):i.push(iu(n||null))}),A1=(e,t)=>k1(t,g0("metadata"),e[3]),nu=(e,t,u,r)=>{for(var i=0,n=e[t>>1],a=n&&n.length;i<a;i++)t&1?n[i].call(u):r=n[i].call(u,r);return r},In=(e,t,u,r,i,n)=>{var a,o,c,l,f,s=t&7,_=!!(t&8),d=!!(t&16),b=s>3?e.length+1:s?_?1:2:0,v=v0[s+5],x=s>3&&(e[b-1]=[]),k=e[b]||(e[b]=[]),p=s&&(!d&&!_&&(i=i.prototype),s<5&&(s>3||!d)&&$1(s<4?i:{get[u](){return Ho(this,n)},set[u](h){return Vo(this,n,h)}},u));s?d&&s<4&&Wo(n,(s>2?"set ":s>1?"get ":"")+u):Wo(i,u);for(var g=r.length-1;g>=0;g--)l=w1(s,u,c={},e[3],k),s&&(l.static=_,l.private=d,f=l.access={has:d?h=>E1(i,h):h=>u in h},s^3&&(f.get=d?h=>(s^1?Ho:Su)(h,i,s^4?n:p.get):h=>h[u]),s>2&&(f.set=d?(h,m)=>Vo(h,i,m,s^4?n:p.set):(h,m)=>h[u]=m)),o=(0,r[g])(s?s<4?d?n:p[v]:s>4?void 0:{get:p.get,set:p.set}:i,l),c._=1,s^4||o===void 0?iu(o)&&(s>4?x.unshift(o):s?d?n=o:p[v]=o:i=o):typeof o!="object"||o===null?It("Object expected"):(iu(a=o.get)&&(p.get=a),iu(a=o.set)&&(p.set=a),iu(a=o.init)&&x.unshift(a));return s||A1(e,i),p&&Fn(i,u,p),d?s^4?n:p:i},Tn=(e,t,u)=>t.has(e)||It("Cannot "+u),E1=(e,t)=>Object(t)!==t?It('Cannot use the "in" operator on this value'):e.has(t),Ho=(e,t,u)=>(Tn(e,t,"read from private field"),u?u.call(e):t.get(e)),Vr=(e,t,u)=>t.has(e)?It("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,u),Vo=(e,t,u,r)=>(Tn(e,t,"write to private field"),r?r.call(e,u):t.set(e,u),u),Su=(e,t,u)=>(Tn(e,t,"access private method"),u),x0,y0,gi,$0,ge,Mn,On,it,k0,sr;$0=[P("a2ui-checkbox")];class pt extends(gi=E,y0=[C()],x0=[C()],gi){constructor(){super(...arguments),Vr(this,it),Vr(this,Mn,nu(ge,8,this,null)),nu(ge,11,this),Vr(this,On,nu(ge,12,this,null)),nu(ge,15,this)}render(){if(this.value&&typeof this.value=="object"){if("literalBoolean"in this.value&&this.value.literalBoolean)return Su(this,it,sr).call(this,this.value.literalBoolean);if("literal"in this.value&&this.value.literal!==void 0)return Su(this,it,sr).call(this,this.value.literal);if(this.value&&"path"in this.value&&this.value.path){if(!this.processor||!this.component)return y`(no model)`;const t=this.processor.getData(this.component,this.value.path,this.surfaceId??M.DEFAULT_SURFACE_ID);return t===null?y`Invalid label`:typeof t!="boolean"?y`Invalid label`:Su(this,it,sr).call(this,t)}}return $}}ge=C1(gi);Mn=new WeakMap;On=new WeakMap;it=new WeakSet;k0=function(e){!this.value||!this.processor||"path"in this.value&&this.value.path&&this.processor.setData(this.component,this.value.path,e,this.surfaceId??M.DEFAULT_SURFACE_ID)};sr=function(e){return y` <section
      class=${D(this.theme.components.CheckBox.container)}
      style=${this.theme.additionalStyles?.CheckBox?q(this.theme.additionalStyles?.CheckBox):$}
    >
      <input
        class=${D(this.theme.components.CheckBox.element)}
        autocomplete="off"
        @input=${t=>{t.target instanceof HTMLInputElement&&Su(this,it,k0).call(this,t.target.checked)}}
        id="data"
        type="checkbox"
        .checked=${e}
      />
      <label class=${D(this.theme.components.CheckBox.label)} for="data"
        >${ot(this.label,this.component,this.processor,this.surfaceId)}</label
      >
    </section>`};In(ge,4,"value",y0,pt,Mn);In(ge,4,"label",x0,pt,On);pt=In(ge,0,"Checkbox",$0,pt);pt.styles=[R,O`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        flex: var(--weight);
        min-height: 0;
        overflow: auto;
      }

      input {
        display: block;
        width: 100%;
      }

      .description {
        font-size: 14px;
        margin-bottom: 4px;
      }
    `];nu(ge,1,pt);var D1=Object.create,Pn=Object.defineProperty,S1=Object.getOwnPropertyDescriptor,C0=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Tt=e=>{throw TypeError(e)},F1=(e,t,u)=>t in e?Pn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,Go=(e,t)=>Pn(e,"name",{value:t,configurable:!0}),I1=e=>[,,,D1(e?.[C0("metadata")]??null)],w0=["class","method","getter","setter","accessor","field","value","get","set"],su=e=>e!==void 0&&typeof e!="function"?Tt("Function expected"):e,T1=(e,t,u,r,i)=>({kind:w0[e],name:t,metadata:r,addInitializer:n=>u._?Tt("Already initialized"):i.push(su(n||null))}),M1=(e,t)=>F1(t,C0("metadata"),e[3]),ou=(e,t,u,r)=>{for(var i=0,n=e[t>>1],a=n&&n.length;i<a;i++)t&1?n[i].call(u):r=n[i].call(u,r);return r},zn=(e,t,u,r,i,n)=>{var a,o,c,l,f,s=t&7,_=!!(t&8),d=!!(t&16),b=s>3?e.length+1:s?_?1:2:0,v=w0[s+5],x=s>3&&(e[b-1]=[]),k=e[b]||(e[b]=[]),p=s&&(!d&&!_&&(i=i.prototype),s<5&&(s>3||!d)&&S1(s<4?i:{get[u](){return Zo(this,n)},set[u](h){return Jo(this,n,h)}},u));s?d&&s<4&&Go(n,(s>2?"set ":s>1?"get ":"")+u):Go(i,u);for(var g=r.length-1;g>=0;g--)l=T1(s,u,c={},e[3],k),s&&(l.static=_,l.private=d,f=l.access={has:d?h=>O1(i,h):h=>u in h},s^3&&(f.get=d?h=>(s^1?Zo:P1)(h,i,s^4?n:p.get):h=>h[u]),s>2&&(f.set=d?(h,m)=>Jo(h,i,m,s^4?n:p.set):(h,m)=>h[u]=m)),o=(0,r[g])(s?s<4?d?n:p[v]:s>4?void 0:{get:p.get,set:p.set}:i,l),c._=1,s^4||o===void 0?su(o)&&(s>4?x.unshift(o):s?d?n=o:p[v]=o:i=o):typeof o!="object"||o===null?Tt("Object expected"):(su(a=o.get)&&(p.get=a),su(a=o.set)&&(p.set=a),su(a=o.init)&&x.unshift(a));return s||M1(e,i),p&&Pn(i,u,p),d?s^4?n:p:i},Nn=(e,t,u)=>t.has(e)||Tt("Cannot "+u),O1=(e,t)=>Object(t)!==t?Tt('Cannot use the "in" operator on this value'):e.has(t),Zo=(e,t,u)=>(Nn(e,t,"read from private field"),u?u.call(e):t.get(e)),Ko=(e,t,u)=>t.has(e)?Tt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,u),Jo=(e,t,u,r)=>(Nn(e,t,"write to private field"),r?r.call(e,u):t.set(e,u),u),P1=(e,t,u)=>(Nn(e,t,"access private method"),u),A0,E0,vi,D0,ve,Rn,Bn;D0=[P("a2ui-column")];class _t extends(vi=E,E0=[C({reflect:!0,type:String})],A0=[C({reflect:!0,type:String})],vi){constructor(){super(...arguments),Ko(this,Rn,ou(ve,8,this,"stretch")),ou(ve,11,this),Ko(this,Bn,ou(ve,12,this,"start")),ou(ve,15,this)}render(){return y`<section
      class=${D(this.theme.components.Column)}
      style=${this.theme.additionalStyles?.Column?q(this.theme.additionalStyles?.Column):$}
    >
      <slot></slot>
    </section>`}}ve=I1(vi);Rn=new WeakMap;Bn=new WeakMap;zn(ve,4,"alignment",E0,_t,Rn);zn(ve,4,"distribution",A0,_t,Bn);_t=zn(ve,0,"Column",D0,_t);_t.styles=[R,O`
      * {
        box-sizing: border-box;
      }

      :host {
        display: flex;
        flex: var(--weight);
      }

      section {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        height: 100%;
      }

      :host([alignment="start"]) section {
        align-items: start;
      }

      :host([alignment="center"]) section {
        align-items: center;
      }

      :host([alignment="end"]) section {
        align-items: end;
      }

      :host([alignment="stretch"]) section {
        align-items: stretch;
      }

      :host([distribution="start"]) section {
        justify-content: start;
      }

      :host([distribution="center"]) section {
        justify-content: center;
      }

      :host([distribution="end"]) section {
        justify-content: end;
      }

      :host([distribution="spaceBetween"]) section {
        justify-content: space-between;
      }

      :host([distribution="spaceAround"]) section {
        justify-content: space-around;
      }

      :host([distribution="spaceEvenly"]) section {
        justify-content: space-evenly;
      }
    `];ou(ve,1,_t);var z1=Object.create,Ln=Object.defineProperty,N1=Object.getOwnPropertyDescriptor,S0=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Mt=e=>{throw TypeError(e)},R1=(e,t,u)=>t in e?Ln(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,Qo=(e,t)=>Ln(e,"name",{value:t,configurable:!0}),B1=e=>[,,,z1(e?.[S0("metadata")]??null)],F0=["class","method","getter","setter","accessor","field","value","get","set"],au=e=>e!==void 0&&typeof e!="function"?Mt("Function expected"):e,L1=(e,t,u,r,i)=>({kind:F0[e],name:t,metadata:r,addInitializer:n=>u._?Mt("Already initialized"):i.push(au(n||null))}),U1=(e,t)=>R1(t,S0("metadata"),e[3]),_e=(e,t,u,r)=>{for(var i=0,n=e[t>>1],a=n&&n.length;i<a;i++)t&1?n[i].call(u):r=n[i].call(u,r);return r},Gu=(e,t,u,r,i,n)=>{var a,o,c,l,f,s=t&7,_=!!(t&8),d=!!(t&16),b=s>3?e.length+1:s?_?1:2:0,v=F0[s+5],x=s>3&&(e[b-1]=[]),k=e[b]||(e[b]=[]),p=s&&(!d&&!_&&(i=i.prototype),s<5&&(s>3||!d)&&N1(s<4?i:{get[u](){return Yo(this,n)},set[u](h){return Xo(this,n,h)}},u));s?d&&s<4&&Qo(n,(s>2?"set ":s>1?"get ":"")+u):Qo(i,u);for(var g=r.length-1;g>=0;g--)l=L1(s,u,c={},e[3],k),s&&(l.static=_,l.private=d,f=l.access={has:d?h=>q1(i,h):h=>u in h},s^3&&(f.get=d?h=>(s^1?Yo:V)(h,i,s^4?n:p.get):h=>h[u]),s>2&&(f.set=d?(h,m)=>Xo(h,i,m,s^4?n:p.set):(h,m)=>h[u]=m)),o=(0,r[g])(s?s<4?d?n:p[v]:s>4?void 0:{get:p.get,set:p.set}:i,l),c._=1,s^4||o===void 0?au(o)&&(s>4?x.unshift(o):s?d?n=o:p[v]=o:i=o):typeof o!="object"||o===null?Mt("Object expected"):(au(a=o.get)&&(p.get=a),au(a=o.set)&&(p.set=a),au(a=o.init)&&x.unshift(a));return s||U1(e,i),p&&Ln(i,u,p),d?s^4?n:p:i},Un=(e,t,u)=>t.has(e)||Mt("Cannot "+u),q1=(e,t)=>Object(t)!==t?Mt('Cannot use the "in" operator on this value'):e.has(t),Yo=(e,t,u)=>(Un(e,t,"read from private field"),u?u.call(e):t.get(e)),Yt=(e,t,u)=>t.has(e)?Mt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,u),Xo=(e,t,u,r)=>(Un(e,t,"write to private field"),r?r.call(e,u):t.set(e,u),u),V=(e,t,u)=>(Un(e,t,"access private method"),u),I0,T0,M0,O0,xi,P0,Z,qn,jn,Wn,Hn,W,z0,or,Ir,N0,tt,yi;P0=[P("a2ui-datetimeinput")];class Oe extends(xi=E,O0=[C()],M0=[C()],T0=[C({reflect:!1,type:Boolean})],I0=[C({reflect:!1,type:Boolean})],xi){constructor(){super(...arguments),Yt(this,W),Yt(this,qn,_e(Z,8,this,null)),_e(Z,11,this),Yt(this,jn,_e(Z,12,this,null)),_e(Z,15,this),Yt(this,Wn,_e(Z,16,this,!0)),_e(Z,19,this),Yt(this,Hn,_e(Z,20,this,!0)),_e(Z,23,this)}render(){if(this.value&&typeof this.value=="object"){if("literalString"in this.value&&this.value.literalString)return V(this,W,or).call(this,this.value.literalString);if("literal"in this.value&&this.value.literal!==void 0)return V(this,W,or).call(this,this.value.literal);if(this.value&&"path"in this.value&&this.value.path){if(!this.processor||!this.component)return y`(no model)`;const t=this.processor.getData(this.component,this.value.path,this.surfaceId??M.DEFAULT_SURFACE_ID);return typeof t!="string"?y`(invalid)`:V(this,W,or).call(this,t)}}return $}}Z=B1(xi);qn=new WeakMap;jn=new WeakMap;Wn=new WeakMap;Hn=new WeakMap;W=new WeakSet;z0=function(e){!this.value||!this.processor||"path"in this.value&&this.value.path&&this.processor.setData(this.component,this.value.path,e,this.surfaceId??M.DEFAULT_SURFACE_ID)};or=function(e){return y`<section
      class=${D(this.theme.components.DateTimeInput.container)}
    >
      <label
        for="data"
        class=${D(this.theme.components.DateTimeInput.label)}
        >${V(this,W,yi).call(this)}</label
      >
      <input
        autocomplete="off"
        class=${D(this.theme.components.DateTimeInput.element)}
        style=${this.theme.additionalStyles?.DateTimeInput?q(this.theme.additionalStyles?.DateTimeInput):$}
        @input=${t=>{t.target instanceof HTMLInputElement&&V(this,W,z0).call(this,t.target.value)}}
        id="data"
        name="data"
        .value=${V(this,W,N0).call(this,e)}
        .placeholder=${V(this,W,yi).call(this)}
        .type=${V(this,W,Ir).call(this)}
      />
    </section>`};Ir=function(){return this.enableDate&&this.enableTime?"datetime-local":this.enableDate?"date":this.enableTime?"time":"datetime-local"};N0=function(e){const t=V(this,W,Ir).call(this),u=e?new Date(e):null;if(!u||isNaN(u.getTime()))return"";const r=V(this,W,tt).call(this,u.getFullYear()),i=V(this,W,tt).call(this,u.getMonth()+1),n=V(this,W,tt).call(this,u.getDate()),a=V(this,W,tt).call(this,u.getHours()),o=V(this,W,tt).call(this,u.getMinutes());return t==="date"?`${r}-${i}-${n}`:t==="time"?`${a}:${o}`:`${r}-${i}-${n}T${a}:${o}`};tt=function(e){return e.toString().padStart(2,"0")};yi=function(){const e=V(this,W,Ir).call(this);return e==="date"?"Date":e==="time"?"Time":"Date & Time"};Gu(Z,4,"value",O0,Oe,qn);Gu(Z,4,"label",M0,Oe,jn);Gu(Z,4,"enableDate",T0,Oe,Wn);Gu(Z,4,"enableTime",I0,Oe,Hn);Oe=Gu(Z,0,"DateTimeInput",P0,Oe);Oe.styles=[R,O`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        flex: var(--weight);
        min-height: 0;
        overflow: auto;
      }

      input {
        display: block;
        border-radius: 8px;
        padding: 8px;
        border: 1px solid #ccc;
        width: 100%;
      }
    `];_e(Z,1,Oe);var j1=Object.create,Vn=Object.defineProperty,W1=Object.getOwnPropertyDescriptor,R0=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),B0=e=>{throw TypeError(e)},H1=(e,t,u)=>t in e?Vn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,V1=(e,t)=>Vn(e,"name",{value:t,configurable:!0}),G1=e=>[,,,j1(e?.[R0("metadata")]??null)],Z1=["class","method","getter","setter","accessor","field","value","get","set"],L0=e=>e!==void 0&&typeof e!="function"?B0("Function expected"):e,K1=(e,t,u,r,i)=>({kind:Z1[e],name:t,metadata:r,addInitializer:n=>u._?B0("Already initialized"):i.push(L0(n||null))}),J1=(e,t)=>H1(t,R0("metadata"),e[3]),Q1=(e,t,u,r)=>{for(var i=0,n=e[t>>1],a=n&&n.length;i<a;i++)n[i].call(u);return r},Y1=(e,t,u,r,i,n)=>{var a,o,c,l=t&7,f=!1,s=0,_=e[s]||(e[s]=[]),d=l&&(i=i.prototype,l<5&&(l>3||!f)&&W1(i,u));V1(i,u);for(var b=r.length-1;b>=0;b--)c=K1(l,u,o={},e[3],_),a=(0,r[b])(i,c),o._=1,L0(a)&&(i=a);return J1(e,i),d&&Vn(i,u,d),f?l^4?n:d:i},U0,Gn,q0;U0=[P("a2ui-divider")];class $i extends(q0=E){static{this.styles=[R,O`
      :host {
        display: block;
        min-height: 0;
        overflow: auto;
      }

      hr {
        height: 1px;
        background: #ccc;
        border: none;
      }
    `]}render(){return y`<hr
      class=${D(this.theme.components.Divider)}
      style=${this.theme.additionalStyles?.Divider?q(this.theme.additionalStyles?.Divider):$}
    />`}}Gn=G1(q0);$i=Y1(Gn,0,"Divider",U0,$i);Q1(Gn,1,$i);var X1=Object.create,Zn=Object.defineProperty,ep=Object.getOwnPropertyDescriptor,j0=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Ot=e=>{throw TypeError(e)},tp=(e,t,u)=>t in e?Zn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,ea=(e,t)=>Zn(e,"name",{value:t,configurable:!0}),up=e=>[,,,X1(e?.[j0("metadata")]??null)],W0=["class","method","getter","setter","accessor","field","value","get","set"],cu=e=>e!==void 0&&typeof e!="function"?Ot("Function expected"):e,rp=(e,t,u,r,i)=>({kind:W0[e],name:t,metadata:r,addInitializer:n=>u._?Ot("Already initialized"):i.push(cu(n||null))}),ip=(e,t)=>tp(t,j0("metadata"),e[3]),ki=(e,t,u,r)=>{for(var i=0,n=e[t>>1],a=n&&n.length;i<a;i++)t&1?n[i].call(u):r=n[i].call(u,r);return r},H0=(e,t,u,r,i,n)=>{var a,o,c,l,f,s=t&7,_=!!(t&8),d=!!(t&16),b=s>3?e.length+1:s?_?1:2:0,v=W0[s+5],x=s>3&&(e[b-1]=[]),k=e[b]||(e[b]=[]),p=s&&(!d&&!_&&(i=i.prototype),s<5&&(s>3||!d)&&ep(s<4?i:{get[u](){return ta(this,n)},set[u](h){return ra(this,n,h)}},u));s?d&&s<4&&ea(n,(s>2?"set ":s>1?"get ":"")+u):ea(i,u);for(var g=r.length-1;g>=0;g--)l=rp(s,u,c={},e[3],k),s&&(l.static=_,l.private=d,f=l.access={has:d?h=>np(i,h):h=>u in h},s^3&&(f.get=d?h=>(s^1?ta:V0)(h,i,s^4?n:p.get):h=>h[u]),s>2&&(f.set=d?(h,m)=>ra(h,i,m,s^4?n:p.set):(h,m)=>h[u]=m)),o=(0,r[g])(s?s<4?d?n:p[v]:s>4?void 0:{get:p.get,set:p.set}:i,l),c._=1,s^4||o===void 0?cu(o)&&(s>4?x.unshift(o):s?d?n=o:p[v]=o:i=o):typeof o!="object"||o===null?Ot("Object expected"):(cu(a=o.get)&&(p.get=a),cu(a=o.set)&&(p.set=a),cu(a=o.init)&&x.unshift(a));return s||ip(e,i),p&&Zn(i,u,p),d?s^4?n:p:i},Kn=(e,t,u)=>t.has(e)||Ot("Cannot "+u),np=(e,t)=>Object(t)!==t?Ot('Cannot use the "in" operator on this value'):e.has(t),ta=(e,t,u)=>(Kn(e,t,"read from private field"),u?u.call(e):t.get(e)),ua=(e,t,u)=>t.has(e)?Ot("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,u),ra=(e,t,u,r)=>(Kn(e,t,"write to private field"),r?r.call(e,u):t.set(e,u),u),V0=(e,t,u)=>(Kn(e,t,"access private method"),u),G0,Ci,Z0,bt,Jn,wi,K0;Z0=[P("a2ui-icon")];class zu extends(Ci=E,G0=[C()],Ci){constructor(){super(...arguments),ua(this,wi),ua(this,Jn,ki(bt,8,this,null)),ki(bt,11,this)}render(){return y`<section
      class=${D(this.theme.components.Icon)}
      style=${this.theme.additionalStyles?.Icon?q(this.theme.additionalStyles?.Icon):$}
    >
      ${V0(this,wi,K0).call(this)}
    </section>`}}bt=up(Ci);Jn=new WeakMap;wi=new WeakSet;K0=function(){if(!this.name)return $;const e=t=>(t=t.replace(/([A-Z])/gm,"_$1").toLocaleLowerCase(),y`<span class="g-icon">${t}</span>`);if(this.name&&typeof this.name=="object"){if("literalString"in this.name){const t=this.name.literalString??"";return e(t)}else if("literal"in this.name){const t=this.name.literal??"";return e(t)}else if(this.name&&"path"in this.name&&this.name.path){if(!this.processor||!this.component)return y`(no model)`;const t=this.processor.getData(this.component,this.name.path,this.surfaceId??M.DEFAULT_SURFACE_ID);return t?typeof t!="string"?y`Invalid icon name`:e(t):y`Invalid icon name`}}return y`(empty)`};H0(bt,4,"name",G0,zu,Jn);zu=H0(bt,0,"Icon",Z0,zu);zu.styles=[R,O`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        flex: var(--weight);
        min-height: 0;

      }

      .g-icon {
        font-family: 'Material Symbols Outlined';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        display: inline-block;
        line-height: 1;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        font-feature-settings: 'liga';
      }
    `];ki(bt,1,zu);var sp=Object.create,Qn=Object.defineProperty,op=Object.getOwnPropertyDescriptor,J0=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Pt=e=>{throw TypeError(e)},ap=(e,t,u)=>t in e?Qn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,ia=(e,t)=>Qn(e,"name",{value:t,configurable:!0}),cp=e=>[,,,sp(e?.[J0("metadata")]??null)],Q0=["class","method","getter","setter","accessor","field","value","get","set"],lu=e=>e!==void 0&&typeof e!="function"?Pt("Function expected"):e,lp=(e,t,u,r,i)=>({kind:Q0[e],name:t,metadata:r,addInitializer:n=>u._?Pt("Already initialized"):i.push(lu(n||null))}),dp=(e,t)=>ap(t,J0("metadata"),e[3]),qe=(e,t,u,r)=>{for(var i=0,n=e[t>>1],a=n&&n.length;i<a;i++)t&1?n[i].call(u):r=n[i].call(u,r);return r},Tr=(e,t,u,r,i,n)=>{var a,o,c,l,f,s=t&7,_=!!(t&8),d=!!(t&16),b=s>3?e.length+1:s?_?1:2:0,v=Q0[s+5],x=s>3&&(e[b-1]=[]),k=e[b]||(e[b]=[]),p=s&&(!d&&!_&&(i=i.prototype),s<5&&(s>3||!d)&&op(s<4?i:{get[u](){return na(this,n)},set[u](h){return sa(this,n,h)}},u));s?d&&s<4&&ia(n,(s>2?"set ":s>1?"get ":"")+u):ia(i,u);for(var g=r.length-1;g>=0;g--)l=lp(s,u,c={},e[3],k),s&&(l.static=_,l.private=d,f=l.access={has:d?h=>hp(i,h):h=>u in h},s^3&&(f.get=d?h=>(s^1?na:Y0)(h,i,s^4?n:p.get):h=>h[u]),s>2&&(f.set=d?(h,m)=>sa(h,i,m,s^4?n:p.set):(h,m)=>h[u]=m)),o=(0,r[g])(s?s<4?d?n:p[v]:s>4?void 0:{get:p.get,set:p.set}:i,l),c._=1,s^4||o===void 0?lu(o)&&(s>4?x.unshift(o):s?d?n=o:p[v]=o:i=o):typeof o!="object"||o===null?Pt("Object expected"):(lu(a=o.get)&&(p.get=a),lu(a=o.set)&&(p.set=a),lu(a=o.init)&&x.unshift(a));return s||dp(e,i),p&&Qn(i,u,p),d?s^4?n:p:i},Yn=(e,t,u)=>t.has(e)||Pt("Cannot "+u),hp=(e,t)=>Object(t)!==t?Pt('Cannot use the "in" operator on this value'):e.has(t),na=(e,t,u)=>(Yn(e,t,"read from private field"),u?u.call(e):t.get(e)),er=(e,t,u)=>t.has(e)?Pt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,u),sa=(e,t,u,r)=>(Yn(e,t,"write to private field"),r?r.call(e,u):t.set(e,u),u),Y0=(e,t,u)=>(Yn(e,t,"access private method"),u),X0,el,tl,Ai,ul,te,Xn,es,ts,Ei,rl;ul=[P("a2ui-image")];class Ze extends(Ai=E,tl=[C()],el=[C()],X0=[C()],Ai){constructor(){super(...arguments),er(this,Ei),er(this,Xn,qe(te,8,this,null)),qe(te,11,this),er(this,es,qe(te,12,this,null)),qe(te,15,this),er(this,ts,qe(te,16,this,null)),qe(te,19,this)}render(){const t=hn(this.theme.components.Image.all,this.usageHint?this.theme.components.Image[this.usageHint]:{});return y`<section
      class=${D(t)}
      style=${q({...this.theme.additionalStyles?.Image??{},"--object-fit":this.fit??"fill"})}
    >
      ${Y0(this,Ei,rl).call(this)}
    </section>`}}te=cp(Ai);Xn=new WeakMap;es=new WeakMap;ts=new WeakMap;Ei=new WeakSet;rl=function(){if(!this.url)return $;const e=t=>y`<img src=${t} />`;if(this.url&&typeof this.url=="object"){if("literalString"in this.url){const t=this.url.literalString??"";return e(t)}else if("literal"in this.url){const t=this.url.literal??"";return e(t)}else if(this.url&&"path"in this.url&&this.url.path){if(!this.processor||!this.component)return y`(no model)`;const t=this.processor.getData(this.component,this.url.path,this.surfaceId??M.DEFAULT_SURFACE_ID);return t?typeof t!="string"?y`Invalid image URL`:e(t):y`Invalid image URL`}}return y`(empty)`};Tr(te,4,"url",tl,Ze,Xn);Tr(te,4,"usageHint",el,Ze,es);Tr(te,4,"fit",X0,Ze,ts);Ze=Tr(te,0,"Image",ul,Ze);Ze.styles=[R,O`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        flex: var(--weight);
        min-height: 0;
        overflow: auto;
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: var(--object-fit, fill);
      }
    `];qe(te,1,Ze);var fp=Object.create,us=Object.defineProperty,pp=Object.getOwnPropertyDescriptor,il=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),zt=e=>{throw TypeError(e)},_p=(e,t,u)=>t in e?us(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,oa=(e,t)=>us(e,"name",{value:t,configurable:!0}),bp=e=>[,,,fp(e?.[il("metadata")]??null)],nl=["class","method","getter","setter","accessor","field","value","get","set"],du=e=>e!==void 0&&typeof e!="function"?zt("Function expected"):e,mp=(e,t,u,r,i)=>({kind:nl[e],name:t,metadata:r,addInitializer:n=>u._?zt("Already initialized"):i.push(du(n||null))}),gp=(e,t)=>_p(t,il("metadata"),e[3]),Di=(e,t,u,r)=>{for(var i=0,n=e[t>>1],a=n&&n.length;i<a;i++)t&1?n[i].call(u):r=n[i].call(u,r);return r},sl=(e,t,u,r,i,n)=>{var a,o,c,l,f,s=t&7,_=!!(t&8),d=!!(t&16),b=s>3?e.length+1:s?_?1:2:0,v=nl[s+5],x=s>3&&(e[b-1]=[]),k=e[b]||(e[b]=[]),p=s&&(!d&&!_&&(i=i.prototype),s<5&&(s>3||!d)&&pp(s<4?i:{get[u](){return aa(this,n)},set[u](h){return ca(this,n,h)}},u));s?d&&s<4&&oa(n,(s>2?"set ":s>1?"get ":"")+u):oa(i,u);for(var g=r.length-1;g>=0;g--)l=mp(s,u,c={},e[3],k),s&&(l.static=_,l.private=d,f=l.access={has:d?h=>vp(i,h):h=>u in h},s^3&&(f.get=d?h=>(s^1?aa:yp)(h,i,s^4?n:p.get):h=>h[u]),s>2&&(f.set=d?(h,m)=>ca(h,i,m,s^4?n:p.set):(h,m)=>h[u]=m)),o=(0,r[g])(s?s<4?d?n:p[v]:s>4?void 0:{get:p.get,set:p.set}:i,l),c._=1,s^4||o===void 0?du(o)&&(s>4?x.unshift(o):s?d?n=o:p[v]=o:i=o):typeof o!="object"||o===null?zt("Object expected"):(du(a=o.get)&&(p.get=a),du(a=o.set)&&(p.set=a),du(a=o.init)&&x.unshift(a));return s||gp(e,i),p&&us(i,u,p),d?s^4?n:p:i},rs=(e,t,u)=>t.has(e)||zt("Cannot "+u),vp=(e,t)=>Object(t)!==t?zt('Cannot use the "in" operator on this value'):e.has(t),aa=(e,t,u)=>(rs(e,t,"read from private field"),u?u.call(e):t.get(e)),xp=(e,t,u)=>t.has(e)?zt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,u),ca=(e,t,u,r)=>(rs(e,t,"write to private field"),r?r.call(e,u):t.set(e,u),u),yp=(e,t,u)=>(rs(e,t,"access private method"),u),ol,Si,al,mt,is;al=[P("a2ui-list")];class Nu extends(Si=E,ol=[C({reflect:!0,type:String})],Si){constructor(){super(...arguments),xp(this,is,Di(mt,8,this,"vertical")),Di(mt,11,this)}render(){return y`<section
      class=${D(this.theme.components.List)}
      style=${this.theme.additionalStyles?.List?q(this.theme.additionalStyles?.List):$}
    >
      <slot></slot>
    </section>`}}mt=bp(Si);is=new WeakMap;sl(mt,4,"direction",ol,Nu,is);Nu=sl(mt,0,"List",al,Nu);Nu.styles=[R,O`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        flex: var(--weight);
        min-height: 0;
        overflow: auto;
      }

      :host([direction="vertical"]) section {
        display: grid;
      }

      :host([direction="horizontal"]) section {
        display: flex;
        max-width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
        scrollbar-width: none;

        > ::slotted(*) {
          flex: 1 0 fit-content;
          max-width: min(80%, 400px);
        }
      }
    `];Di(mt,1,Nu);var $p=Object.create,ns=Object.defineProperty,kp=Object.getOwnPropertyDescriptor,cl=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Nt=e=>{throw TypeError(e)},Cp=(e,t,u)=>t in e?ns(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,la=(e,t)=>ns(e,"name",{value:t,configurable:!0}),wp=e=>[,,,$p(e?.[cl("metadata")]??null)],ll=["class","method","getter","setter","accessor","field","value","get","set"],hu=e=>e!==void 0&&typeof e!="function"?Nt("Function expected"):e,Ap=(e,t,u,r,i)=>({kind:ll[e],name:t,metadata:r,addInitializer:n=>u._?Nt("Already initialized"):i.push(hu(n||null))}),Ep=(e,t)=>Cp(t,cl("metadata"),e[3]),G=(e,t,u,r)=>{for(var i=0,n=e[t>>1],a=n&&n.length;i<a;i++)t&1?n[i].call(u):r=n[i].call(u,r);return r},Re=(e,t,u,r,i,n)=>{var a,o,c,l,f,s=t&7,_=!!(t&8),d=!!(t&16),b=s>3?e.length+1:s?_?1:2:0,v=ll[s+5],x=s>3&&(e[b-1]=[]),k=e[b]||(e[b]=[]),p=s&&(!d&&!_&&(i=i.prototype),s<5&&(s>3||!d)&&kp(s<4?i:{get[u](){return da(this,n)},set[u](h){return ha(this,n,h)}},u));s?d&&s<4&&la(n,(s>2?"set ":s>1?"get ":"")+u):la(i,u);for(var g=r.length-1;g>=0;g--)l=Ap(s,u,c={},e[3],k),s&&(l.static=_,l.private=d,f=l.access={has:d?h=>Dp(i,h):h=>u in h},s^3&&(f.get=d?h=>(s^1?da:ut)(h,i,s^4?n:p.get):h=>h[u]),s>2&&(f.set=d?(h,m)=>ha(h,i,m,s^4?n:p.set):(h,m)=>h[u]=m)),o=(0,r[g])(s?s<4?d?n:p[v]:s>4?void 0:{get:p.get,set:p.set}:i,l),c._=1,s^4||o===void 0?hu(o)&&(s>4?x.unshift(o):s?d?n=o:p[v]=o:i=o):typeof o!="object"||o===null?Nt("Object expected"):(hu(a=o.get)&&(p.get=a),hu(a=o.set)&&(p.set=a),hu(a=o.init)&&x.unshift(a));return s||Ep(e,i),p&&ns(i,u,p),d?s^4?n:p:i},ss=(e,t,u)=>t.has(e)||Nt("Cannot "+u),Dp=(e,t)=>Object(t)!==t?Nt('Cannot use the "in" operator on this value'):e.has(t),da=(e,t,u)=>(ss(e,t,"read from private field"),u?u.call(e):t.get(e)),De=(e,t,u)=>t.has(e)?Nt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,u),ha=(e,t,u,r)=>(ss(e,t,"write to private field"),r?r.call(e,u):t.set(e,u),u),ut=(e,t,u)=>(ss(e,t,"access private method"),u),dl,hl,fl,pl,_l,bl,ml,Fi,gl,I,os,as,cs,ls,ds,hs,fs,je,Ii,vl,Ti;gl=[P("a2ui-multiplechoice")];class se extends(Fi=E,ml=[C()],bl=[C()],_l=[C()],pl=[C()],fl=[C({type:Boolean})],hl=[li()],dl=[li()],Fi){constructor(){super(...arguments),De(this,je),De(this,os,G(I,8,this,null)),G(I,11,this),De(this,as,G(I,12,this,[])),G(I,15,this),De(this,cs,G(I,16,this,[])),G(I,19,this),De(this,ls,G(I,20,this,"checkbox")),G(I,23,this),De(this,ds,G(I,24,this,!1)),G(I,27,this),De(this,hs,G(I,28,this,!1)),G(I,31,this),De(this,fs,G(I,32,this,"")),G(I,35,this)}getCurrentSelections(){if(Array.isArray(this.selections))return this.selections;if(!this.processor||!this.component)return[];const t=this.processor.getData(this.component,this.selections.path,this.surfaceId??M.DEFAULT_SURFACE_ID);return Array.isArray(t)?t:[]}toggleSelection(t){const u=this.getCurrentSelections();u.includes(t)?ut(this,je,Ii).call(this,u.filter(r=>r!==t)):ut(this,je,Ii).call(this,[...u,t]),this.requestUpdate()}render(){const t=this.getCurrentSelections(),u=this.options.filter(n=>this.filterText?ot(n.label,this.component,this.processor,this.surfaceId).toLowerCase().includes(this.filterText.toLowerCase()):!0);if(this.variant==="chips")return y`
          <div class="container">
            ${this.description?y`<div class="header-text" style="margin-bottom: 8px;">${this.description}</div>`:$}
            ${this.filterable?ut(this,je,Ti).call(this):$}
            <div class="chips-container">
              ${u.map(n=>{const a=ot(n.label,this.component,this.processor,this.surfaceId),o=t.includes(n.value);return y`
                  <div 
                    class="chip ${o?"selected":""}"
                    @click=${c=>{c.stopPropagation(),this.toggleSelection(n.value)}}
                  >
                    ${o?ut(this,je,vl).call(this):$}
                    <span>${a}</span>
                  </div>
                `})}
            </div>
             ${u.length===0?y`<div style="padding: 8px; font-style: italic; color: var(--md-sys-color-outline);">No options found</div>`:$}
          </div>
        `;const r=t.length,i=r>0?`${r} Selected`:this.description??"Select items";return y`
      <div class="container">
        <div 
          class="dropdown-header" 
          @click=${()=>this.isOpen=!this.isOpen}
        >
          <span class="header-text">${i}</span>
          <span class="chevron ${this.isOpen?"open":""}">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
              <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>
            </svg>
          </span>
        </div>

        <div class="dropdown-wrapper ${this.isOpen?"open":""}">
          ${this.filterable?ut(this,je,Ti).call(this):$}
          <div class="options-scroll-container">
            ${u.map(n=>{const a=ot(n.label,this.component,this.processor,this.surfaceId),o=t.includes(n.value);return y`
                <div 
                  class="option-item ${o?"selected":""}"
                  @click=${c=>{c.stopPropagation(),this.toggleSelection(n.value)}}
                >
                  <div class="checkbox">
                    <span class="checkbox-icon">✓</span>
                  </div>
                  <span>${a}</span>
                </div>
              `})}
             ${u.length===0?y`<div style="padding: 16px; text-align: center; color: var(--md-sys-color-outline);">No options found</div>`:$}
          </div>
        </div>
      </div>
    `}}I=wp(Fi);os=new WeakMap;as=new WeakMap;cs=new WeakMap;ls=new WeakMap;ds=new WeakMap;hs=new WeakMap;fs=new WeakMap;je=new WeakSet;Ii=function(e){!this.selections||!this.processor||"path"in this.selections&&this.selections.path&&this.processor.setData(this.component,this.selections.path,e,this.surfaceId??M.DEFAULT_SURFACE_ID)};vl=function(){return y`
      <svg class="chip-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
      </svg>
    `};Ti=function(){return y`
      <div class="filter-container">
        <input 
          type="text" 
          class="filter-input" 
          placeholder="Filter options..." 
          .value=${this.filterText}
          @input=${e=>{const t=e.target;this.filterText=t.value}}
          @click=${e=>e.stopPropagation()}
        />
      </div>
    `};Re(I,4,"description",ml,se,os);Re(I,4,"options",bl,se,as);Re(I,4,"selections",_l,se,cs);Re(I,4,"variant",pl,se,ls);Re(I,4,"filterable",fl,se,ds);Re(I,4,"isOpen",hl,se,hs);Re(I,4,"filterText",dl,se,fs);se=Re(I,0,"MultipleChoice",gl,se);se.styles=[R,O`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        flex: var(--weight);
        min-height: 0;
        position: relative;
        font-family: 'Google Sans', 'Roboto', sans-serif;
      }

      .container {
        display: flex;
        flex-direction: column;
        gap: 4px;
        position: relative;
      }

      /* Header / Trigger */
      .dropdown-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        background: var(--md-sys-color-surface);
        border: 1px solid var(--md-sys-color-outline-variant);
        border-radius: 8px;
        cursor: pointer;
        user-select: none;
        transition: background-color 0.2s;
        box-shadow: var(--md-sys-elevation-level1);
      }

      .dropdown-header:hover {
        background: var(--md-sys-color-surface-container-low);
      }

      .header-text {
        font-size: 1rem;
        color: var(--md-sys-color-on-surface);
        font-weight: 400;
      }

      .chevron {
        color: var(--md-sys-color-primary);
        font-size: 1.2rem;
        transition: transform 0.2s ease;
      }

      .chevron.open {
        transform: rotate(180deg);
      }

      /* Dropdown Wrapper */
      .dropdown-wrapper {
        background: var(--md-sys-color-surface);
        border: 1px solid var(--md-sys-color-outline-variant);
        border-radius: 8px;
        box-shadow: var(--md-sys-elevation-level2);
        padding: 0;
        display: none;
        flex-direction: column;
        margin-top: 4px;
        max-height: 300px;
        transition: opacity 0.2s ease-out;
        overflow: hidden; /* contain children */
      }

      .dropdown-wrapper.open {
        display: flex;
        border: 1px solid var(--md-sys-color-outline-variant);
      }

      /* Scrollable Area for Options */
      .options-scroll-container {
        overflow-y: auto;
        flex: 1; /* take remaining height */
        display: flex;
        flex-direction: column;
      }

      /* Filter Input */
      .filter-container {
        padding: 8px;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
        background: var(--md-sys-color-surface);
        z-index: 1; /* ensure top of stack */
        flex-shrink: 0; /* don't shrink */
      }

      .filter-input {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid var(--md-sys-color-outline);
        border-radius: 4px;
        font-family: inherit;
        font-size: 0.9rem;
        background: var(--md-sys-color-surface-container-low);
        color: var(--md-sys-color-on-surface);
      }

      .filter-input:focus {
        outline: none;
        border-color: var(--md-sys-color-primary);
      }

      /* Option Item (Checkbox style) */
      .option-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        cursor: pointer;
        color: var(--md-sys-color-on-surface);
        font-size: 0.95rem;
        transition: background-color 0.1s;
      }

      .option-item:hover {
        background: var(--md-sys-color-surface-container-highest);
      }

      /* Custom Checkbox */
      .checkbox {
        width: 18px;
        height: 18px;
        border: 2px solid var(--md-sys-color-outline);
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
        flex-shrink: 0;
      }

      .option-item.selected .checkbox {
        background: var(--md-sys-color-primary);
        border-color: var(--md-sys-color-primary);
      }

      .checkbox-icon {
        color: var(--md-sys-color-on-primary);
        font-size: 14px;
        font-weight: bold;
        opacity: 0;
        transform: scale(0.5);
        transition: all 0.2s;
      }

      .option-item.selected .checkbox-icon {
        opacity: 1;
        transform: scale(1);
      }

      /* Chips Layout */
      .chips-container {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        padding: 4px 0;
      }

      .chip {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 6px 16px;
        border: 1px solid var(--md-sys-color-outline);
        border-radius: 16px;
        cursor: pointer;
        user-select: none;
        background: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
        transition: all 0.2s ease;
        font-size: 0.9rem;
      }

      .chip:hover {
        background: var(--md-sys-color-surface-container-high);
      }

      .chip.selected {
        background: var(--md-sys-color-secondary-container);
        color: var(--md-sys-color-on-secondary-container);
        border-color: var(--md-sys-color-secondary-container);
      }
      
      .chip.selected:hover {
         background: var(--md-sys-color-secondary-container-high);
      }

      .chip-icon {
        display: none;
        width: 18px;
        height: 18px;
      }
      
      .chip.selected .chip-icon {
        display: block;
        fill: currentColor;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-8px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `];G(I,1,se);const Gr=new WeakMap,Sp=wt(class extends Kh{render(e){return $}update(e,[t]){const u=t!==this.G;return u&&this.G!==void 0&&this.rt(void 0),(u||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),$}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let u=Gr.get(t);u===void 0&&(u=new WeakMap,Gr.set(t,u)),u.get(this.G)!==void 0&&this.G.call(this.ht,void 0),u.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Gr.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Fp=Object.create,ps=Object.defineProperty,Ip=Object.getOwnPropertyDescriptor,xl=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Rt=e=>{throw TypeError(e)},Tp=(e,t,u)=>t in e?ps(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,fa=(e,t)=>ps(e,"name",{value:t,configurable:!0}),Mp=e=>[,,,Fp(e?.[xl("metadata")]??null)],yl=["class","method","getter","setter","accessor","field","value","get","set"],fu=e=>e!==void 0&&typeof e!="function"?Rt("Function expected"):e,Op=(e,t,u,r,i)=>({kind:yl[e],name:t,metadata:r,addInitializer:n=>u._?Rt("Already initialized"):i.push(fu(n||null))}),Pp=(e,t)=>Tp(t,xl("metadata"),e[3]),pu=(e,t,u,r)=>{for(var i=0,n=e[t>>1],a=n&&n.length;i<a;i++)t&1?n[i].call(u):r=n[i].call(u,r);return r},_s=(e,t,u,r,i,n)=>{var a,o,c,l,f,s=t&7,_=!!(t&8),d=!!(t&16),b=s>3?e.length+1:s?_?1:2:0,v=yl[s+5],x=s>3&&(e[b-1]=[]),k=e[b]||(e[b]=[]),p=s&&(!d&&!_&&(i=i.prototype),s<5&&(s>3||!d)&&Ip(s<4?i:{get[u](){return at(this,n)},set[u](h){return xr(this,n,h)}},u));s?d&&s<4&&fa(n,(s>2?"set ":s>1?"get ":"")+u):fa(i,u);for(var g=r.length-1;g>=0;g--)l=Op(s,u,c={},e[3],k),s&&(l.static=_,l.private=d,f=l.access={has:d?h=>zp(i,h):h=>u in h},s^3&&(f.get=d?h=>(s^1?at:Mi)(h,i,s^4?n:p.get):h=>h[u]),s>2&&(f.set=d?(h,m)=>xr(h,i,m,s^4?n:p.set):(h,m)=>h[u]=m)),o=(0,r[g])(s?s<4?d?n:p[v]:s>4?void 0:{get:p.get,set:p.set}:i,l),c._=1,s^4||o===void 0?fu(o)&&(s>4?x.unshift(o):s?d?n=o:p[v]=o:i=o):typeof o!="object"||o===null?Rt("Object expected"):(fu(a=o.get)&&(p.get=a),fu(a=o.set)&&(p.set=a),fu(a=o.init)&&x.unshift(a));return s||Pp(e,i),p&&ps(i,u,p),d?s^4?n:p:i},bs=(e,t,u)=>t.has(e)||Rt("Cannot "+u),zp=(e,t)=>Object(t)!==t?Rt('Cannot use the "in" operator on this value'):e.has(t),at=(e,t,u)=>(bs(e,t,"read from private field"),u?u.call(e):t.get(e)),Zr=(e,t,u)=>t.has(e)?Rt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,u),xr=(e,t,u,r)=>(bs(e,t,"write to private field"),r?r.call(e,u):t.set(e,u),u),Mi=(e,t,u)=>(bs(e,t,"access private method"),u),$l,kl,Oi,Cl,xe,ms,Kr,wl,gs,ue,vs,Jr,ar,Pi;Cl=[P("a2ui-modal")];class yr extends(Oi=E,kl=[li()],$l=[pf("dialog")],Oi){constructor(){super(...arguments),Zr(this,ue),Zr(this,ms,pu(xe,8,this,!1)),pu(xe,11,this),Zr(this,vs,pu(xe,12,this,null)),pu(xe,15,this)}render(){return at(this,ue,wl)?y`<dialog
      class=${D(this.theme.components.Modal.backdrop)}
      @click=${t=>{const[u]=t.composedPath();u instanceof HTMLDialogElement&&Mi(this,ue,Pi).call(this)}}
      ${Sp(t=>{requestAnimationFrame(()=>{!(t&&t instanceof HTMLDialogElement)||t.open||t.showModal()})})}
    >
      <section
        class=${D(this.theme.components.Modal.element)}
        style=${this.theme.additionalStyles?.Modal?q(this.theme.additionalStyles?.Modal):$}
      >
        <div id="controls">
          <button
            @click=${()=>{Mi(this,ue,Pi).call(this)}}
          >
            <span class="g-icon">close</span>
          </button>
        </div>
        <slot></slot>
      </section>
    </dialog>`:y`<section
        @click=${()=>{xr(this,ue,!0,gs)}}
      >
        <slot name="entry"></slot>
      </section>`}}xe=Mp(Oi);ms=new WeakMap;ue=new WeakSet;vs=new WeakMap;Pi=function(){at(this,ue,ar)&&(at(this,ue,ar).open&&at(this,ue,ar).close(),xr(this,ue,!1,gs))};Kr=_s(xe,20,"#showModal",kl,ue,ms),wl=Kr.get,gs=Kr.set;Jr=_s(xe,20,"#modalRef",$l,ue,vs),ar=Jr.get,Jr.set;yr=_s(xe,0,"Modal",Cl,yr);yr.styles=[R,O`
      * {
        box-sizing: border-box;
      }

      dialog {
        padding: 0 0 0 0;
        border: none;
        background: none;

        & section {
          & #controls {
            display: flex;
            justify-content: end;
            margin-bottom: 4px;

            & button {
              padding: 0;
              background: none;
              width: 20px;
              height: 20px;
              pointer: cursor;
              border: none;
              cursor: pointer;
            }
          }
        }
      }
    `];pu(xe,1,yr);var Np=Object.create,xs=Object.defineProperty,Rp=Object.getOwnPropertyDescriptor,Al=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Bt=e=>{throw TypeError(e)},Bp=(e,t,u)=>t in e?xs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,pa=(e,t)=>xs(e,"name",{value:t,configurable:!0}),Lp=e=>[,,,Np(e?.[Al("metadata")]??null)],El=["class","method","getter","setter","accessor","field","value","get","set"],_u=e=>e!==void 0&&typeof e!="function"?Bt("Function expected"):e,Up=(e,t,u,r,i)=>({kind:El[e],name:t,metadata:r,addInitializer:n=>u._?Bt("Already initialized"):i.push(_u(n||null))}),qp=(e,t)=>Bp(t,Al("metadata"),e[3]),bu=(e,t,u,r)=>{for(var i=0,n=e[t>>1],a=n&&n.length;i<a;i++)t&1?n[i].call(u):r=n[i].call(u,r);return r},ys=(e,t,u,r,i,n)=>{var a,o,c,l,f,s=t&7,_=!!(t&8),d=!!(t&16),b=s>3?e.length+1:s?_?1:2:0,v=El[s+5],x=s>3&&(e[b-1]=[]),k=e[b]||(e[b]=[]),p=s&&(!d&&!_&&(i=i.prototype),s<5&&(s>3||!d)&&Rp(s<4?i:{get[u](){return _a(this,n)},set[u](h){return ma(this,n,h)}},u));s?d&&s<4&&pa(n,(s>2?"set ":s>1?"get ":"")+u):pa(i,u);for(var g=r.length-1;g>=0;g--)l=Up(s,u,c={},e[3],k),s&&(l.static=_,l.private=d,f=l.access={has:d?h=>jp(i,h):h=>u in h},s^3&&(f.get=d?h=>(s^1?_a:Wp)(h,i,s^4?n:p.get):h=>h[u]),s>2&&(f.set=d?(h,m)=>ma(h,i,m,s^4?n:p.set):(h,m)=>h[u]=m)),o=(0,r[g])(s?s<4?d?n:p[v]:s>4?void 0:{get:p.get,set:p.set}:i,l),c._=1,s^4||o===void 0?_u(o)&&(s>4?x.unshift(o):s?d?n=o:p[v]=o:i=o):typeof o!="object"||o===null?Bt("Object expected"):(_u(a=o.get)&&(p.get=a),_u(a=o.set)&&(p.set=a),_u(a=o.init)&&x.unshift(a));return s||qp(e,i),p&&xs(i,u,p),d?s^4?n:p:i},$s=(e,t,u)=>t.has(e)||Bt("Cannot "+u),jp=(e,t)=>Object(t)!==t?Bt('Cannot use the "in" operator on this value'):e.has(t),_a=(e,t,u)=>($s(e,t,"read from private field"),u?u.call(e):t.get(e)),ba=(e,t,u)=>t.has(e)?Bt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,u),ma=(e,t,u,r)=>($s(e,t,"write to private field"),r?r.call(e,u):t.set(e,u),u),Wp=(e,t,u)=>($s(e,t,"access private method"),u),Dl,Sl,zi,Fl,ye,ks,Cs;Fl=[P("a2ui-row")];class gt extends(zi=E,Sl=[C({reflect:!0,type:String})],Dl=[C({reflect:!0,type:String})],zi){constructor(){super(...arguments),ba(this,ks,bu(ye,8,this,"stretch")),bu(ye,11,this),ba(this,Cs,bu(ye,12,this,"start")),bu(ye,15,this)}render(){return y`<section
      class=${D(this.theme.components.Row)}
      style=${this.theme.additionalStyles?.Row?q(this.theme.additionalStyles?.Row):$}
    >
      <slot></slot>
    </section>`}}ye=Lp(zi);ks=new WeakMap;Cs=new WeakMap;ys(ye,4,"alignment",Sl,gt,ks);ys(ye,4,"distribution",Dl,gt,Cs);gt=ys(ye,0,"Row",Fl,gt);gt.styles=[R,O`
      * {
        box-sizing: border-box;
      }

      :host {
        display: flex;
        flex: var(--weight);
      }

      section {
        display: flex;
        flex-direction: row;
        width: 100%;
        min-height: 100%;
      }

      :host([alignment="start"]) section {
        align-items: start;
      }

      :host([alignment="center"]) section {
        align-items: center;
      }

      :host([alignment="end"]) section {
        align-items: end;
      }

      :host([alignment="stretch"]) section {
        align-items: stretch;
      }

      :host([distribution="start"]) section {
        justify-content: start;
      }

      :host([distribution="center"]) section {
        justify-content: center;
      }

      :host([distribution="end"]) section {
        justify-content: end;
      }

      :host([distribution="spaceBetween"]) section {
        justify-content: space-between;
      }

      :host([distribution="spaceAround"]) section {
        justify-content: space-around;
      }

      :host([distribution="spaceEvenly"]) section {
        justify-content: space-evenly;
      }
    `];bu(ye,1,gt);var Hp=Object.create,ws=Object.defineProperty,Vp=Object.getOwnPropertyDescriptor,Il=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Lt=e=>{throw TypeError(e)},Gp=(e,t,u)=>t in e?ws(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,ga=(e,t)=>ws(e,"name",{value:t,configurable:!0}),Zp=e=>[,,,Hp(e?.[Il("metadata")]??null)],Tl=["class","method","getter","setter","accessor","field","value","get","set"],mu=e=>e!==void 0&&typeof e!="function"?Lt("Function expected"):e,Kp=(e,t,u,r,i)=>({kind:Tl[e],name:t,metadata:r,addInitializer:n=>u._?Lt("Already initialized"):i.push(mu(n||null))}),Jp=(e,t)=>Gp(t,Il("metadata"),e[3]),ie=(e,t,u,r)=>{for(var i=0,n=e[t>>1],a=n&&n.length;i<a;i++)t&1?n[i].call(u):r=n[i].call(u,r);return r},Ut=(e,t,u,r,i,n)=>{var a,o,c,l,f,s=t&7,_=!!(t&8),d=!!(t&16),b=s>3?e.length+1:s?_?1:2:0,v=Tl[s+5],x=s>3&&(e[b-1]=[]),k=e[b]||(e[b]=[]),p=s&&(!d&&!_&&(i=i.prototype),s<5&&(s>3||!d)&&Vp(s<4?i:{get[u](){return va(this,n)},set[u](h){return xa(this,n,h)}},u));s?d&&s<4&&ga(n,(s>2?"set ":s>1?"get ":"")+u):ga(i,u);for(var g=r.length-1;g>=0;g--)l=Kp(s,u,c={},e[3],k),s&&(l.static=_,l.private=d,f=l.access={has:d?h=>Qp(i,h):h=>u in h},s^3&&(f.get=d?h=>(s^1?va:Fu)(h,i,s^4?n:p.get):h=>h[u]),s>2&&(f.set=d?(h,m)=>xa(h,i,m,s^4?n:p.set):(h,m)=>h[u]=m)),o=(0,r[g])(s?s<4?d?n:p[v]:s>4?void 0:{get:p.get,set:p.set}:i,l),c._=1,s^4||o===void 0?mu(o)&&(s>4?x.unshift(o):s?d?n=o:p[v]=o:i=o):typeof o!="object"||o===null?Lt("Object expected"):(mu(a=o.get)&&(p.get=a),mu(a=o.set)&&(p.set=a),mu(a=o.init)&&x.unshift(a));return s||Jp(e,i),p&&ws(i,u,p),d?s^4?n:p:i},As=(e,t,u)=>t.has(e)||Lt("Cannot "+u),Qp=(e,t)=>Object(t)!==t?Lt('Cannot use the "in" operator on this value'):e.has(t),va=(e,t,u)=>(As(e,t,"read from private field"),u?u.call(e):t.get(e)),Ye=(e,t,u)=>t.has(e)?Lt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,u),xa=(e,t,u,r)=>(As(e,t,"write to private field"),r?r.call(e,u):t.set(e,u),u),Fu=(e,t,u)=>(As(e,t,"access private method"),u),Ml,Ol,Pl,zl,Nl,Ni,Rl,L,Es,Ds,Ss,Fs,Is,nt,Bl,cr;Rl=[P("a2ui-slider")];class we extends(Ni=E,Nl=[C()],zl=[C()],Pl=[C()],Ol=[C()],Ml=[C()],Ni){constructor(){super(...arguments),Ye(this,nt),Ye(this,Es,ie(L,8,this,null)),ie(L,11,this),Ye(this,Ds,ie(L,12,this,0)),ie(L,15,this),Ye(this,Ss,ie(L,16,this,0)),ie(L,19,this),Ye(this,Fs,ie(L,20,this,null)),ie(L,23,this),Ye(this,Is,ie(L,24,this,null)),ie(L,27,this)}render(){if(this.value&&typeof this.value=="object"){if("literalNumber"in this.value&&this.value.literalNumber)return Fu(this,nt,cr).call(this,this.value.literalNumber);if("literal"in this.value&&this.value.literal!==void 0)return Fu(this,nt,cr).call(this,this.value.literal);if(this.value&&"path"in this.value&&this.value.path){if(!this.processor||!this.component)return y`(no processor)`;const t=this.processor.getData(this.component,this.value.path,this.surfaceId??M.DEFAULT_SURFACE_ID);return t===null?y`Invalid value`:typeof t!="string"&&typeof t!="number"?y`Invalid value`:Fu(this,nt,cr).call(this,t)}}return $}}L=Zp(Ni);Es=new WeakMap;Ds=new WeakMap;Ss=new WeakMap;Fs=new WeakMap;Is=new WeakMap;nt=new WeakSet;Bl=function(e){!this.value||!this.processor||"path"in this.value&&this.value.path&&this.processor.setData(this.component,this.value.path,e,this.surfaceId??M.DEFAULT_SURFACE_ID)};cr=function(e){return y`<section
      class=${D(this.theme.components.Slider.container)}
    >
      <label class=${D(this.theme.components.Slider.label)} for="data">
        ${this.label?.literalString??""}
      </label>
      <input
        autocomplete="off"
        class=${D(this.theme.components.Slider.element)}
        style=${this.theme.additionalStyles?.Slider?q(this.theme.additionalStyles?.Slider):$}
        @input=${t=>{t.target instanceof HTMLInputElement&&Fu(this,nt,Bl).call(this,t.target.value)}}
        id="data"
        name="data"
        .value=${e}
        type="range"
        min=${this.minValue??"0"}
        max=${this.maxValue??"0"}
      />
      <span class=${D(this.theme.components.Slider.label)}
        >${this.value?x1(this.value,this.component,this.processor,this.surfaceId):"0"}</span
      >
    </section>`};Ut(L,4,"value",Nl,we,Es);Ut(L,4,"minValue",zl,we,Ds);Ut(L,4,"maxValue",Pl,we,Ss);Ut(L,4,"label",Ol,we,Fs);Ut(L,4,"inputType",Ml,we,Is);we=Ut(L,0,"Slider",Rl,we);we.styles=[R,O`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        flex: var(--weight);
      }

      input {
        display: block;
        width: 100%;
      }

      .description {
      }
    `];ie(L,1,we);var Yp=Object.create,Ts=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,Ll=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),qt=e=>{throw TypeError(e)},e2=(e,t,u)=>t in e?Ts(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,ya=(e,t)=>Ts(e,"name",{value:t,configurable:!0}),t2=e=>[,,,Yp(e?.[Ll("metadata")]??null)],Ul=["class","method","getter","setter","accessor","field","value","get","set"],gu=e=>e!==void 0&&typeof e!="function"?qt("Function expected"):e,u2=(e,t,u,r,i)=>({kind:Ul[e],name:t,metadata:r,addInitializer:n=>u._?qt("Already initialized"):i.push(gu(n||null))}),r2=(e,t)=>e2(t,Ll("metadata"),e[3]),be=(e,t,u,r)=>{for(var i=0,n=e[t>>1],a=n&&n.length;i<a;i++)t&1?n[i].call(u):r=n[i].call(u,r);return r},Zu=(e,t,u,r,i,n)=>{var a,o,c,l,f,s=t&7,_=!!(t&8),d=!!(t&16),b=s>3?e.length+1:s?_?1:2:0,v=Ul[s+5],x=s>3&&(e[b-1]=[]),k=e[b]||(e[b]=[]),p=s&&(!d&&!_&&(i=i.prototype),s<5&&(s>3||!d)&&Xp(s<4?i:{get[u](){return $a(this,n)},set[u](h){return ka(this,n,h)}},u));s?d&&s<4&&ya(n,(s>2?"set ":s>1?"get ":"")+u):ya(i,u);for(var g=r.length-1;g>=0;g--)l=u2(s,u,c={},e[3],k),s&&(l.static=_,l.private=d,f=l.access={has:d?h=>i2(i,h):h=>u in h},s^3&&(f.get=d?h=>(s^1?$a:Ri)(h,i,s^4?n:p.get):h=>h[u]),s>2&&(f.set=d?(h,m)=>ka(h,i,m,s^4?n:p.set):(h,m)=>h[u]=m)),o=(0,r[g])(s?s<4?d?n:p[v]:s>4?void 0:{get:p.get,set:p.set}:i,l),c._=1,s^4||o===void 0?gu(o)&&(s>4?x.unshift(o):s?d?n=o:p[v]=o:i=o):typeof o!="object"||o===null?qt("Object expected"):(gu(a=o.get)&&(p.get=a),gu(a=o.set)&&(p.set=a),gu(a=o.init)&&x.unshift(a));return s||r2(e,i),p&&Ts(i,u,p),d?s^4?n:p:i},Ms=(e,t,u)=>t.has(e)||qt("Cannot "+u),i2=(e,t)=>Object(t)!==t?qt('Cannot use the "in" operator on this value'):e.has(t),$a=(e,t,u)=>(Ms(e,t,"read from private field"),u?u.call(e):t.get(e)),Xt=(e,t,u)=>t.has(e)?qt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,u),ka=(e,t,u,r)=>(Ms(e,t,"write to private field"),r?r.call(e,u):t.set(e,u),u),Ri=(e,t,u)=>(Ms(e,t,"access private method"),u),ql,jl,Wl,Hl,Bi,Vl,K,Os,Ps,zs,lr,Gl,Ns,Zl;Vl=[P("a2ui-surface")];class Pe extends(Bi=E,Hl=[C()],Wl=[C()],jl=[C()],ql=[C()],Bi){constructor(){super(...arguments),Xt(this,lr),Xt(this,Os,be(K,8,this,null)),be(K,11,this),Xt(this,Ps,be(K,12,this,null)),be(K,15,this),Xt(this,zs,be(K,16,this,null)),be(K,19,this),Xt(this,Ns,be(K,20,this,!1)),be(K,23,this)}render(){return this.surface?y`${[Ri(this,lr,Gl).call(this),Ri(this,lr,Zl).call(this)]}`:$}}K=t2(Bi);Os=new WeakMap;Ps=new WeakMap;zs=new WeakMap;lr=new WeakSet;Gl=function(){return this.surface?.styles.logoUrl?y`<div id="surface-logo">
      <img src=${this.surface.styles.logoUrl} />
    </div>`:$};Ns=new WeakMap;Zl=function(){const e={};if(this.surface?.styles)for(const[t,u]of Object.entries(this.surface.styles))switch(t){case"primaryColor":{e["--p-100"]="#ffffff",e["--p-99"]=`color-mix(in srgb, ${u} 2%, white 98%)`,e["--p-98"]=`color-mix(in srgb, ${u} 4%, white 96%)`,e["--p-95"]=`color-mix(in srgb, ${u} 10%, white 90%)`,e["--p-90"]=`color-mix(in srgb, ${u} 20%, white 80%)`,e["--p-80"]=`color-mix(in srgb, ${u} 40%, white 60%)`,e["--p-70"]=`color-mix(in srgb, ${u} 60%, white 40%)`,e["--p-60"]=`color-mix(in srgb, ${u} 80%, white 20%)`,e["--p-50"]=u,e["--p-40"]=`color-mix(in srgb, ${u} 80%, black 20%)`,e["--p-35"]=`color-mix(in srgb, ${u} 70%, black 30%)`,e["--p-30"]=`color-mix(in srgb, ${u} 60%, black 40%)`,e["--p-25"]=`color-mix(in srgb, ${u} 50%, black 50%)`,e["--p-20"]=`color-mix(in srgb, ${u} 40%, black 60%)`,e["--p-15"]=`color-mix(in srgb, ${u} 30%, black 70%)`,e["--p-10"]=`color-mix(in srgb, ${u} 20%, black 80%)`,e["--p-5"]=`color-mix(in srgb, ${u} 10%, black 90%)`,e["--0"]="#00000";break}case"font":{e["--font-family"]=u,e["--font-family-flex"]=u;break}}return y`<a2ui-root
      style=${q(e)}
      .surfaceId=${this.surfaceId}
      .processor=${this.processor}
      .childComponents=${this.surface?.componentTree?[this.surface.componentTree]:null}
      .enableCustomElements=${this.enableCustomElements}
    ></a2ui-root>`};Zu(K,4,"surfaceId",Hl,Pe,Os);Zu(K,4,"surface",Wl,Pe,Ps);Zu(K,4,"processor",jl,Pe,zs);Zu(K,4,"enableCustomElements",ql,Pe,Ns);Pe=Zu(K,0,"Surface",Vl,Pe);Pe.styles=[O`
      :host {
        display: flex;
        min-height: 0;
        max-height: 100%;
        flex-direction: column;
        gap: 16px;
      }

      #surface-logo {
        display: flex;
        justify-content: center;

        & img {
          width: 50%;
          max-width: 220px;
        }
      }

      a2ui-root {
        flex: 1;
      }
    `];be(K,1,Pe);const Ca=(e,t,u)=>{const r=new Map;for(let i=t;i<=u;i++)r.set(e[i],i);return r},n2=wt(class extends At{constructor(e){if(super(e),e.type!==Vu.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,u){let r;u===void 0?u=t:t!==void 0&&(r=t);const i=[],n=[];let a=0;for(const o of e)i[a]=r?r(o,a):a,n[a]=u(o,a),a++;return{values:n,keys:i}}render(e,t,u){return this.dt(e,t,u).values}update(e,[t,u,r]){const i=Hh(e),{values:n,keys:a}=this.dt(t,u,r);if(!Array.isArray(i))return this.ut=a,n;const o=this.ut??=[],c=[];let l,f,s=0,_=i.length-1,d=0,b=n.length-1;for(;s<=_&&d<=b;)if(i[s]===null)s++;else if(i[_]===null)_--;else if(o[s]===a[d])c[d]=Le(i[s],n[d]),s++,d++;else if(o[_]===a[b])c[b]=Le(i[_],n[b]),_--,b--;else if(o[s]===a[b])c[b]=Le(i[s],n[b]),Qt(e,c[b+1],i[s]),s++,b--;else if(o[_]===a[d])c[d]=Le(i[_],n[d]),Qt(e,i[s],i[_]),_--,d++;else if(l===void 0&&(l=Ca(a,d,b),f=Ca(o,s,_)),l.has(o[s]))if(l.has(o[_])){const v=f.get(a[d]),x=v!==void 0?i[v]:null;if(x===null){const k=Qt(e,i[s]);Le(k,n[d]),c[d]=k}else c[d]=Le(x,n[d]),Qt(e,i[s],x),i[v]=null;d++}else jr(i[_]),_--;else jr(i[s]),s++;for(;d<=b;){const v=Qt(e,c[b+1]);Le(v,n[d]),c[d++]=v}for(;s<=_;){const v=i[s++];v!==null&&jr(v)}return this.ut=a,Wh(e,c),ne}});var s2=Object.create,Rs=Object.defineProperty,o2=Object.getOwnPropertyDescriptor,Kl=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),jt=e=>{throw TypeError(e)},a2=(e,t,u)=>t in e?Rs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,wa=(e,t)=>Rs(e,"name",{value:t,configurable:!0}),c2=e=>[,,,s2(e?.[Kl("metadata")]??null)],Jl=["class","method","getter","setter","accessor","field","value","get","set"],vu=e=>e!==void 0&&typeof e!="function"?jt("Function expected"):e,l2=(e,t,u,r,i)=>({kind:Jl[e],name:t,metadata:r,addInitializer:n=>u._?jt("Already initialized"):i.push(vu(n||null))}),d2=(e,t)=>a2(t,Kl("metadata"),e[3]),xu=(e,t,u,r)=>{for(var i=0,n=e[t>>1],a=n&&n.length;i<a;i++)t&1?n[i].call(u):r=n[i].call(u,r);return r},Bs=(e,t,u,r,i,n)=>{var a,o,c,l,f,s=t&7,_=!!(t&8),d=!!(t&16),b=s>3?e.length+1:s?_?1:2:0,v=Jl[s+5],x=s>3&&(e[b-1]=[]),k=e[b]||(e[b]=[]),p=s&&(!d&&!_&&(i=i.prototype),s<5&&(s>3||!d)&&o2(s<4?i:{get[u](){return Aa(this,n)},set[u](h){return Ea(this,n,h)}},u));s?d&&s<4&&wa(n,(s>2?"set ":s>1?"get ":"")+u):wa(i,u);for(var g=r.length-1;g>=0;g--)l=l2(s,u,c={},e[3],k),s&&(l.static=_,l.private=d,f=l.access={has:d?h=>h2(i,h):h=>u in h},s^3&&(f.get=d?h=>(s^1?Aa:Li)(h,i,s^4?n:p.get):h=>h[u]),s>2&&(f.set=d?(h,m)=>Ea(h,i,m,s^4?n:p.set):(h,m)=>h[u]=m)),o=(0,r[g])(s?s<4?d?n:p[v]:s>4?void 0:{get:p.get,set:p.set}:i,l),c._=1,s^4||o===void 0?vu(o)&&(s>4?x.unshift(o):s?d?n=o:p[v]=o:i=o):typeof o!="object"||o===null?jt("Object expected"):(vu(a=o.get)&&(p.get=a),vu(a=o.set)&&(p.set=a),vu(a=o.init)&&x.unshift(a));return s||d2(e,i),p&&Rs(i,u,p),d?s^4?n:p:i},Ls=(e,t,u)=>t.has(e)||jt("Cannot "+u),h2=(e,t)=>Object(t)!==t?jt('Cannot use the "in" operator on this value'):e.has(t),Aa=(e,t,u)=>(Ls(e,t,"read from private field"),u?u.call(e):t.get(e)),Qr=(e,t,u)=>t.has(e)?jt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,u),Ea=(e,t,u,r)=>(Ls(e,t,"write to private field"),r?r.call(e,u):t.set(e,u),u),Li=(e,t,u)=>(Ls(e,t,"access private method"),u),Ql,Yl,Ui,Xl,$e,Us,qs,dr,ed,td;Xl=[P("a2ui-tabs")];class vt extends(Ui=E,Yl=[C()],Ql=[C()],Ui){constructor(){super(...arguments),Qr(this,dr),Qr(this,Us,xu($e,8,this,null)),xu($e,11,this),Qr(this,qs,xu($e,12,this,0)),xu($e,15,this)}willUpdate(t){if(super.willUpdate(t),t.has("selected")){for(const r of this.children)r.removeAttribute("slot");const u=this.children[this.selected];if(!u)return;u.slot="current"}}render(){return y`<section
      class=${D(this.theme.components.Tabs.container)}
      style=${this.theme.additionalStyles?.Tabs?q(this.theme.additionalStyles?.Tabs):$}
    >
      ${[Li(this,dr,ed).call(this),Li(this,dr,td).call(this)]}
    </section>`}}$e=c2(Ui);Us=new WeakMap;qs=new WeakMap;dr=new WeakSet;ed=function(){return this.titles?y`<div
      id="buttons"
      class=${D(this.theme.components.Tabs.element)}
    >
      ${n2(this.titles,(e,t)=>{let u="";if("literalString"in e&&e.literalString)u=e.literalString;else if("literal"in e&&e.literal!==void 0)u=e.literal;else if(e&&"path"in e&&e.path){if(!this.processor||!this.component)return y`(no model)`;const i=this.processor.getData(this.component,e.path,this.surfaceId??M.DEFAULT_SURFACE_ID);if(typeof i!="string")return y`(invalid)`;u=i}let r;return this.selected===t?r=hn(this.theme.components.Tabs.controls.all,this.theme.components.Tabs.controls.selected):r={...this.theme.components.Tabs.controls.all},y`<button
          ?disabled=${this.selected===t}
          class=${D(r)}
          @click=${()=>{this.selected=t}}
        >
          ${u}
        </button>`})}
    </div>`:$};td=function(){return y`<slot name="current"></slot>`};Bs($e,4,"titles",Yl,vt,Us);Bs($e,4,"selected",Ql,vt,qs);vt=Bs($e,0,"Tabs",Xl,vt);vt.styles=[R,O`
      :host {
        display: block;
        flex: var(--weight);
      }
    `];xu($e,1,vt);var f2=Object.create,js=Object.defineProperty,p2=Object.getOwnPropertyDescriptor,ud=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Wt=e=>{throw TypeError(e)},_2=(e,t,u)=>t in e?js(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,Da=(e,t)=>js(e,"name",{value:t,configurable:!0}),b2=e=>[,,,f2(e?.[ud("metadata")]??null)],rd=["class","method","getter","setter","accessor","field","value","get","set"],yu=e=>e!==void 0&&typeof e!="function"?Wt("Function expected"):e,m2=(e,t,u,r,i)=>({kind:rd[e],name:t,metadata:r,addInitializer:n=>u._?Wt("Already initialized"):i.push(yu(n||null))}),g2=(e,t)=>_2(t,ud("metadata"),e[3]),me=(e,t,u,r)=>{for(var i=0,n=e[t>>1],a=n&&n.length;i<a;i++)t&1?n[i].call(u):r=n[i].call(u,r);return r},Ku=(e,t,u,r,i,n)=>{var a,o,c,l,f,s=t&7,_=!!(t&8),d=!!(t&16),b=s>3?e.length+1:s?_?1:2:0,v=rd[s+5],x=s>3&&(e[b-1]=[]),k=e[b]||(e[b]=[]),p=s&&(!d&&!_&&(i=i.prototype),s<5&&(s>3||!d)&&p2(s<4?i:{get[u](){return Sa(this,n)},set[u](h){return Fa(this,n,h)}},u));s?d&&s<4&&Da(n,(s>2?"set ":s>1?"get ":"")+u):Da(i,u);for(var g=r.length-1;g>=0;g--)l=m2(s,u,c={},e[3],k),s&&(l.static=_,l.private=d,f=l.access={has:d?h=>v2(i,h):h=>u in h},s^3&&(f.get=d?h=>(s^1?Sa:Hs)(h,i,s^4?n:p.get):h=>h[u]),s>2&&(f.set=d?(h,m)=>Fa(h,i,m,s^4?n:p.set):(h,m)=>h[u]=m)),o=(0,r[g])(s?s<4?d?n:p[v]:s>4?void 0:{get:p.get,set:p.set}:i,l),c._=1,s^4||o===void 0?yu(o)&&(s>4?x.unshift(o):s?d?n=o:p[v]=o:i=o):typeof o!="object"||o===null?Wt("Object expected"):(yu(a=o.get)&&(p.get=a),yu(a=o.set)&&(p.set=a),yu(a=o.init)&&x.unshift(a));return s||g2(e,i),p&&js(i,u,p),d?s^4?n:p:i},Ws=(e,t,u)=>t.has(e)||Wt("Cannot "+u),v2=(e,t)=>Object(t)!==t?Wt('Cannot use the "in" operator on this value'):e.has(t),Sa=(e,t,u)=>(Ws(e,t,"read from private field"),u?u.call(e):t.get(e)),eu=(e,t,u)=>t.has(e)?Wt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,u),Fa=(e,t,u,r)=>(Ws(e,t,"write to private field"),r?r.call(e,u):t.set(e,u),u),Hs=(e,t,u)=>(Ws(e,t,"access private method"),u),id,nd,sd,od,qi,ad,J,Vs,Gs,Zs,Ks,$r,cd,ld;ad=[P("a2ui-textfield")];class ze extends(qi=E,od=[C()],sd=[C()],nd=[C()],id=[C()],qi){constructor(){super(...arguments),eu(this,$r),eu(this,Vs,me(J,8,this,null)),me(J,11,this),eu(this,Gs,me(J,12,this,null)),me(J,15,this),eu(this,Zs,me(J,16,this,null)),me(J,19,this),eu(this,Ks,me(J,20,this,null)),me(J,23,this)}render(){const t=ot(this.label,this.component,this.processor,this.surfaceId),u=ot(this.text,this.component,this.processor,this.surfaceId);return Hs(this,$r,ld).call(this,u,t)}}J=b2(qi);Vs=new WeakMap;Gs=new WeakMap;Zs=new WeakMap;Ks=new WeakMap;$r=new WeakSet;cd=function(e){!this.text||!this.processor||"path"in this.text&&this.text.path&&this.processor.setData(this.component,this.text.path,e,this.surfaceId??M.DEFAULT_SURFACE_ID)};ld=function(e,t){return y` <section
      class=${D(this.theme.components.TextField.container)}
    >
      ${t&&t!==""?y`<label
            class=${D(this.theme.components.TextField.label)}
            for="data"
            >${t}</label
          >`:$}
      <input
        autocomplete="off"
        class=${D(this.theme.components.TextField.element)}
        style=${this.theme.additionalStyles?.TextField?q(this.theme.additionalStyles?.TextField):$}
        @input=${u=>{u.target instanceof HTMLInputElement&&(this.dispatchEvent(new br({componentId:this.id,value:u.target.value,valid:u.target.checkValidity()})),Hs(this,$r,cd).call(this,u.target.value))}}
        name="data"
        id="data"
        .value=${e}
        .placeholder=${"Please enter a value"}
        pattern=${this.validationRegexp||$}
        type=${this.inputType==="number"?"number":"text"}
      />
    </section>`};Ku(J,4,"text",od,ze,Vs);Ku(J,4,"label",sd,ze,Gs);Ku(J,4,"inputType",nd,ze,Zs);Ku(J,4,"validationRegexp",id,ze,Ks);ze=Ku(J,0,"TextField",ad,ze);ze.styles=[R,O`
      * {
        box-sizing: border-box;
      }

      :host {
        display: flex;
        flex: var(--weight);
      }

      input {
        display: block;
        width: 100%;
      }
      
      input:invalid {
        border-color: var(--color-error);
        color: var(--color-error);
        outline-color: var(--color-error);
      }
      
      input:invalid:focus {
        border-color: var(--color-error);
        outline-color: var(--color-error);
      }

      label {
        display: block;
        margin-bottom: 4px;
      }
    `];me(J,1,ze);class ji extends At{constructor(t){if(super(t),this.it=$,t.type!==Vu.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===$||t==null)return this._t=void 0,this.it=t;if(t===ne)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const u=[t];return u.raw=u,this._t={_$litType$:this.constructor.resultType,strings:u,values:[]}}}ji.directiveName="unsafeHTML",ji.resultType=1;const x2=wt(ji),Ia={};function y2(e){let t=Ia[e];if(t)return t;t=Ia[e]=[];for(let u=0;u<128;u++){const r=String.fromCharCode(u);t.push(r)}for(let u=0;u<e.length;u++){const r=e.charCodeAt(u);t[r]="%"+("0"+r.toString(16).toUpperCase()).slice(-2)}return t}function xt(e,t){typeof t!="string"&&(t=xt.defaultChars);const u=y2(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(r){let i="";for(let n=0,a=r.length;n<a;n+=3){const o=parseInt(r.slice(n+1,n+3),16);if(o<128){i+=u[o];continue}if((o&224)===192&&n+3<a){const c=parseInt(r.slice(n+4,n+6),16);if((c&192)===128){const l=o<<6&1984|c&63;l<128?i+="��":i+=String.fromCharCode(l),n+=3;continue}}if((o&240)===224&&n+6<a){const c=parseInt(r.slice(n+4,n+6),16),l=parseInt(r.slice(n+7,n+9),16);if((c&192)===128&&(l&192)===128){const f=o<<12&61440|c<<6&4032|l&63;f<2048||f>=55296&&f<=57343?i+="���":i+=String.fromCharCode(f),n+=6;continue}}if((o&248)===240&&n+9<a){const c=parseInt(r.slice(n+4,n+6),16),l=parseInt(r.slice(n+7,n+9),16),f=parseInt(r.slice(n+10,n+12),16);if((c&192)===128&&(l&192)===128&&(f&192)===128){let s=o<<18&1835008|c<<12&258048|l<<6&4032|f&63;s<65536||s>1114111?i+="����":(s-=65536,i+=String.fromCharCode(55296+(s>>10),56320+(s&1023))),n+=9;continue}}i+="�"}return i})}xt.defaultChars=";/?:@&=+$,#";xt.componentChars="";const Ta={};function $2(e){let t=Ta[e];if(t)return t;t=Ta[e]=[];for(let u=0;u<128;u++){const r=String.fromCharCode(u);/^[0-9a-z]$/i.test(r)?t.push(r):t.push("%"+("0"+u.toString(16).toUpperCase()).slice(-2))}for(let u=0;u<e.length;u++)t[e.charCodeAt(u)]=e[u];return t}function Ju(e,t,u){typeof t!="string"&&(u=t,t=Ju.defaultChars),typeof u>"u"&&(u=!0);const r=$2(t);let i="";for(let n=0,a=e.length;n<a;n++){const o=e.charCodeAt(n);if(u&&o===37&&n+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(n+1,n+3))){i+=e.slice(n,n+3),n+=2;continue}if(o<128){i+=r[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&n+1<a){const c=e.charCodeAt(n+1);if(c>=56320&&c<=57343){i+=encodeURIComponent(e[n]+e[n+1]),n++;continue}}i+="%EF%BF%BD";continue}i+=encodeURIComponent(e[n])}return i}Ju.defaultChars=";/?:@&=+$,-_.!~*'()#";Ju.componentChars="-_.!~*'()";function Js(e){let t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t}function kr(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const k2=/^([a-z0-9.+-]+:)/i,C2=/:[0-9]*$/,w2=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,A2=["<",">",'"',"`"," ","\r",`
`,"	"],E2=["{","}","|","\\","^","`"].concat(A2),D2=["'"].concat(E2),Ma=["%","/","?",";","#"].concat(D2),Oa=["/","?","#"],S2=255,Pa=/^[+a-z0-9A-Z_-]{0,63}$/,F2=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,za={javascript:!0,"javascript:":!0},Na={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Qs(e,t){if(e&&e instanceof kr)return e;const u=new kr;return u.parse(e,t),u}kr.prototype.parse=function(e,t){let u,r,i,n=e;if(n=n.trim(),!t&&e.split("#").length===1){const l=w2.exec(n);if(l)return this.pathname=l[1],l[2]&&(this.search=l[2]),this}let a=k2.exec(n);if(a&&(a=a[0],u=a.toLowerCase(),this.protocol=a,n=n.substr(a.length)),(t||a||n.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=n.substr(0,2)==="//",i&&!(a&&za[a])&&(n=n.substr(2),this.slashes=!0)),!za[a]&&(i||a&&!Na[a])){let l=-1;for(let b=0;b<Oa.length;b++)r=n.indexOf(Oa[b]),r!==-1&&(l===-1||r<l)&&(l=r);let f,s;l===-1?s=n.lastIndexOf("@"):s=n.lastIndexOf("@",l),s!==-1&&(f=n.slice(0,s),n=n.slice(s+1),this.auth=f),l=-1;for(let b=0;b<Ma.length;b++)r=n.indexOf(Ma[b]),r!==-1&&(l===-1||r<l)&&(l=r);l===-1&&(l=n.length),n[l-1]===":"&&l--;const _=n.slice(0,l);n=n.slice(l),this.parseHost(_),this.hostname=this.hostname||"";const d=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!d){const b=this.hostname.split(/\./);for(let v=0,x=b.length;v<x;v++){const k=b[v];if(k&&!k.match(Pa)){let p="";for(let g=0,h=k.length;g<h;g++)k.charCodeAt(g)>127?p+="x":p+=k[g];if(!p.match(Pa)){const g=b.slice(0,v),h=b.slice(v+1),m=k.match(F2);m&&(g.push(m[1]),h.unshift(m[2])),h.length&&(n=h.join(".")+n),this.hostname=g.join(".");break}}}}this.hostname.length>S2&&(this.hostname=""),d&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const o=n.indexOf("#");o!==-1&&(this.hash=n.substr(o),n=n.slice(0,o));const c=n.indexOf("?");return c!==-1&&(this.search=n.substr(c),n=n.slice(0,c)),n&&(this.pathname=n),Na[u]&&this.hostname&&!this.pathname&&(this.pathname=""),this};kr.prototype.parseHost=function(e){let t=C2.exec(e);t&&(t=t[0],t!==":"&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};const I2=Object.freeze(Object.defineProperty({__proto__:null,decode:xt,encode:Ju,format:Js,parse:Qs},Symbol.toStringTag,{value:"Module"})),dd=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,hd=/[\0-\x1F\x7F-\x9F]/,T2=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Ys=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,fd=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,pd=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,M2=Object.freeze(Object.defineProperty({__proto__:null,Any:dd,Cc:hd,Cf:T2,P:Ys,S:fd,Z:pd},Symbol.toStringTag,{value:"Module"})),O2=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),P2=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var Yr;const z2=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),N2=(Yr=String.fromCodePoint)!==null&&Yr!==void 0?Yr:function(e){let t="";return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function R2(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=z2.get(e))!==null&&t!==void 0?t:e}var U;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(U||(U={}));const B2=32;var Te;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(Te||(Te={}));function Wi(e){return e>=U.ZERO&&e<=U.NINE}function L2(e){return e>=U.UPPER_A&&e<=U.UPPER_F||e>=U.LOWER_A&&e<=U.LOWER_F}function U2(e){return e>=U.UPPER_A&&e<=U.UPPER_Z||e>=U.LOWER_A&&e<=U.LOWER_Z||Wi(e)}function q2(e){return e===U.EQUALS||U2(e)}var B;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(B||(B={}));var Ie;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(Ie||(Ie={}));class j2{constructor(t,u,r){this.decodeTree=t,this.emitCodePoint=u,this.errors=r,this.state=B.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Ie.Strict}startEntity(t){this.decodeMode=t,this.state=B.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,u){switch(this.state){case B.EntityStart:return t.charCodeAt(u)===U.NUM?(this.state=B.NumericStart,this.consumed+=1,this.stateNumericStart(t,u+1)):(this.state=B.NamedEntity,this.stateNamedEntity(t,u));case B.NumericStart:return this.stateNumericStart(t,u);case B.NumericDecimal:return this.stateNumericDecimal(t,u);case B.NumericHex:return this.stateNumericHex(t,u);case B.NamedEntity:return this.stateNamedEntity(t,u)}}stateNumericStart(t,u){return u>=t.length?-1:(t.charCodeAt(u)|B2)===U.LOWER_X?(this.state=B.NumericHex,this.consumed+=1,this.stateNumericHex(t,u+1)):(this.state=B.NumericDecimal,this.stateNumericDecimal(t,u))}addToNumericResult(t,u,r,i){if(u!==r){const n=r-u;this.result=this.result*Math.pow(i,n)+parseInt(t.substr(u,n),i),this.consumed+=n}}stateNumericHex(t,u){const r=u;for(;u<t.length;){const i=t.charCodeAt(u);if(Wi(i)||L2(i))u+=1;else return this.addToNumericResult(t,r,u,16),this.emitNumericEntity(i,3)}return this.addToNumericResult(t,r,u,16),-1}stateNumericDecimal(t,u){const r=u;for(;u<t.length;){const i=t.charCodeAt(u);if(Wi(i))u+=1;else return this.addToNumericResult(t,r,u,10),this.emitNumericEntity(i,2)}return this.addToNumericResult(t,r,u,10),-1}emitNumericEntity(t,u){var r;if(this.consumed<=u)return(r=this.errors)===null||r===void 0||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===U.SEMI)this.consumed+=1;else if(this.decodeMode===Ie.Strict)return 0;return this.emitCodePoint(R2(this.result),this.consumed),this.errors&&(t!==U.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,u){const{decodeTree:r}=this;let i=r[this.treeIndex],n=(i&Te.VALUE_LENGTH)>>14;for(;u<t.length;u++,this.excess++){const a=t.charCodeAt(u);if(this.treeIndex=W2(r,i,this.treeIndex+Math.max(1,n),a),this.treeIndex<0)return this.result===0||this.decodeMode===Ie.Attribute&&(n===0||q2(a))?0:this.emitNotTerminatedNamedEntity();if(i=r[this.treeIndex],n=(i&Te.VALUE_LENGTH)>>14,n!==0){if(a===U.SEMI)return this.emitNamedEntityData(this.treeIndex,n,this.consumed+this.excess);this.decodeMode!==Ie.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:u,decodeTree:r}=this,i=(r[u]&Te.VALUE_LENGTH)>>14;return this.emitNamedEntityData(u,i,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,u,r){const{decodeTree:i}=this;return this.emitCodePoint(u===1?i[t]&~Te.VALUE_LENGTH:i[t+1],r),u===3&&this.emitCodePoint(i[t+2],r),r}end(){var t;switch(this.state){case B.NamedEntity:return this.result!==0&&(this.decodeMode!==Ie.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case B.NumericDecimal:return this.emitNumericEntity(0,2);case B.NumericHex:return this.emitNumericEntity(0,3);case B.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case B.EntityStart:return 0}}}function _d(e){let t="";const u=new j2(e,r=>t+=N2(r));return function(i,n){let a=0,o=0;for(;(o=i.indexOf("&",o))>=0;){t+=i.slice(a,o),u.startEntity(n);const l=u.write(i,o+1);if(l<0){a=o+u.end();break}a=o+l,o=l===0?a+1:a}const c=t+i.slice(a);return t="",c}}function W2(e,t,u,r){const i=(t&Te.BRANCH_LENGTH)>>7,n=t&Te.JUMP_TABLE;if(i===0)return n!==0&&r===n?u:-1;if(n){const c=r-n;return c<0||c>=i?-1:e[u+c]-1}let a=u,o=a+i-1;for(;a<=o;){const c=a+o>>>1,l=e[c];if(l<r)a=c+1;else if(l>r)o=c-1;else return e[c+i]}return-1}const H2=_d(O2);_d(P2);function bd(e,t=Ie.Legacy){return H2(e,t)}function V2(e){return Object.prototype.toString.call(e)}function Xs(e){return V2(e)==="[object String]"}const G2=Object.prototype.hasOwnProperty;function Z2(e,t){return G2.call(e,t)}function Mr(e){return Array.prototype.slice.call(arguments,1).forEach(function(u){if(u){if(typeof u!="object")throw new TypeError(u+"must be object");Object.keys(u).forEach(function(r){e[r]=u[r]})}}),e}function md(e,t,u){return[].concat(e.slice(0,t),u,e.slice(t+1))}function eo(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function Cr(e){if(e>65535){e-=65536;const t=55296+(e>>10),u=56320+(e&1023);return String.fromCharCode(t,u)}return String.fromCharCode(e)}const gd=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,K2=/&([a-z#][a-z0-9]{1,31});/gi,J2=new RegExp(gd.source+"|"+K2.source,"gi"),Q2=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function Y2(e,t){if(t.charCodeAt(0)===35&&Q2.test(t)){const r=t[1].toLowerCase()==="x"?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return eo(r)?Cr(r):e}const u=bd(e);return u!==e?u:e}function X2(e){return e.indexOf("\\")<0?e:e.replace(gd,"$1")}function yt(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(J2,function(t,u,r){return u||Y2(t,r)})}const e_=/[&<>"]/,t_=/[&<>"]/g,u_={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function r_(e){return u_[e]}function Ne(e){return e_.test(e)?e.replace(t_,r_):e}const i_=/[.?*+^$[\]\\(){}|-]/g;function n_(e){return e.replace(i_,"\\$&")}function F(e){switch(e){case 9:case 32:return!0}return!1}function Ru(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Bu(e){return Ys.test(e)||fd.test(e)}function Lu(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Or(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}const s_={mdurl:I2,ucmicro:M2},o_=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:md,assign:Mr,escapeHtml:Ne,escapeRE:n_,fromCodePoint:Cr,has:Z2,isMdAsciiPunct:Lu,isPunctChar:Bu,isSpace:F,isString:Xs,isValidEntityCode:eo,isWhiteSpace:Ru,lib:s_,normalizeReference:Or,unescapeAll:yt,unescapeMd:X2},Symbol.toStringTag,{value:"Module"}));function a_(e,t,u){let r,i,n,a;const o=e.posMax,c=e.pos;for(e.pos=t+1,r=1;e.pos<o;){if(n=e.src.charCodeAt(e.pos),n===93&&(r--,r===0)){i=!0;break}if(a=e.pos,e.md.inline.skipToken(e),n===91){if(a===e.pos-1)r++;else if(u)return e.pos=c,-1}}let l=-1;return i&&(l=e.pos),e.pos=c,l}function c_(e,t,u){let r,i=t;const n={ok:!1,pos:0,str:""};if(e.charCodeAt(i)===60){for(i++;i<u;){if(r=e.charCodeAt(i),r===10||r===60)return n;if(r===62)return n.pos=i+1,n.str=yt(e.slice(t+1,i)),n.ok=!0,n;if(r===92&&i+1<u){i+=2;continue}i++}return n}let a=0;for(;i<u&&(r=e.charCodeAt(i),!(r===32||r<32||r===127));){if(r===92&&i+1<u){if(e.charCodeAt(i+1)===32)break;i+=2;continue}if(r===40&&(a++,a>32))return n;if(r===41){if(a===0)break;a--}i++}return t===i||a!==0||(n.str=yt(e.slice(t,i)),n.pos=i,n.ok=!0),n}function l_(e,t,u,r){let i,n=t;const a={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(r)a.str=r.str,a.marker=r.marker;else{if(n>=u)return a;let o=e.charCodeAt(n);if(o!==34&&o!==39&&o!==40)return a;t++,n++,o===40&&(o=41),a.marker=o}for(;n<u;){if(i=e.charCodeAt(n),i===a.marker)return a.pos=n+1,a.str+=yt(e.slice(t,n)),a.ok=!0,a;if(i===40&&a.marker===41)return a;i===92&&n+1<u&&n++,n++}return a.can_continue=!0,a.str+=yt(e.slice(t,n)),a}const d_=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:c_,parseLinkLabel:a_,parseLinkTitle:l_},Symbol.toStringTag,{value:"Module"})),he={};he.code_inline=function(e,t,u,r,i){const n=e[t];return"<code"+i.renderAttrs(n)+">"+Ne(n.content)+"</code>"};he.code_block=function(e,t,u,r,i){const n=e[t];return"<pre"+i.renderAttrs(n)+"><code>"+Ne(e[t].content)+`</code></pre>
`};he.fence=function(e,t,u,r,i){const n=e[t],a=n.info?yt(n.info).trim():"";let o="",c="";if(a){const f=a.split(/(\s+)/g);o=f[0],c=f.slice(2).join("")}let l;if(u.highlight?l=u.highlight(n.content,o,c)||Ne(n.content):l=Ne(n.content),l.indexOf("<pre")===0)return l+`
`;if(a){const f=n.attrIndex("class"),s=n.attrs?n.attrs.slice():[];f<0?s.push(["class",u.langPrefix+o]):(s[f]=s[f].slice(),s[f][1]+=" "+u.langPrefix+o);const _={attrs:s};return`<pre><code${i.renderAttrs(_)}>${l}</code></pre>
`}return`<pre><code${i.renderAttrs(n)}>${l}</code></pre>
`};he.image=function(e,t,u,r,i){const n=e[t];return n.attrs[n.attrIndex("alt")][1]=i.renderInlineAsText(n.children,u,r),i.renderToken(e,t,u)};he.hardbreak=function(e,t,u){return u.xhtmlOut?`<br />
`:`<br>
`};he.softbreak=function(e,t,u){return u.breaks?u.xhtmlOut?`<br />
`:`<br>
`:`
`};he.text=function(e,t){return Ne(e[t].content)};he.html_block=function(e,t){return e[t].content};he.html_inline=function(e,t){return e[t].content};function Ht(){this.rules=Mr({},he)}Ht.prototype.renderAttrs=function(t){let u,r,i;if(!t.attrs)return"";for(i="",u=0,r=t.attrs.length;u<r;u++)i+=" "+Ne(t.attrs[u][0])+'="'+Ne(t.attrs[u][1])+'"';return i};Ht.prototype.renderToken=function(t,u,r){const i=t[u];let n="";if(i.hidden)return"";i.block&&i.nesting!==-1&&u&&t[u-1].hidden&&(n+=`
`),n+=(i.nesting===-1?"</":"<")+i.tag,n+=this.renderAttrs(i),i.nesting===0&&r.xhtmlOut&&(n+=" /");let a=!1;if(i.block&&(a=!0,i.nesting===1&&u+1<t.length)){const o=t[u+1];(o.type==="inline"||o.hidden||o.nesting===-1&&o.tag===i.tag)&&(a=!1)}return n+=a?`>
`:">",n};Ht.prototype.renderInline=function(e,t,u){let r="";const i=this.rules;for(let n=0,a=e.length;n<a;n++){const o=e[n].type;typeof i[o]<"u"?r+=i[o](e,n,t,u,this):r+=this.renderToken(e,n,t)}return r};Ht.prototype.renderInlineAsText=function(e,t,u){let r="";for(let i=0,n=e.length;i<n;i++)switch(e[i].type){case"text":r+=e[i].content;break;case"image":r+=this.renderInlineAsText(e[i].children,t,u);break;case"html_inline":case"html_block":r+=e[i].content;break;case"softbreak":case"hardbreak":r+=`
`;break}return r};Ht.prototype.render=function(e,t,u){let r="";const i=this.rules;for(let n=0,a=e.length;n<a;n++){const o=e[n].type;o==="inline"?r+=this.renderInline(e[n].children,t,u):typeof i[o]<"u"?r+=i[o](e,n,t,u,this):r+=this.renderToken(e,n,t,u)}return r};function Q(){this.__rules__=[],this.__cache__=null}Q.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1};Q.prototype.__compile__=function(){const e=this,t=[""];e.__rules__.forEach(function(u){u.enabled&&u.alt.forEach(function(r){t.indexOf(r)<0&&t.push(r)})}),e.__cache__={},t.forEach(function(u){e.__cache__[u]=[],e.__rules__.forEach(function(r){r.enabled&&(u&&r.alt.indexOf(u)<0||e.__cache__[u].push(r.fn))})})};Q.prototype.at=function(e,t,u){const r=this.__find__(e),i=u||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__[r].fn=t,this.__rules__[r].alt=i.alt||[],this.__cache__=null};Q.prototype.before=function(e,t,u,r){const i=this.__find__(e),n=r||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:u,alt:n.alt||[]}),this.__cache__=null};Q.prototype.after=function(e,t,u,r){const i=this.__find__(e),n=r||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:u,alt:n.alt||[]}),this.__cache__=null};Q.prototype.push=function(e,t,u){const r=u||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:r.alt||[]}),this.__cache__=null};Q.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);const u=[];return e.forEach(function(r){const i=this.__find__(r);if(i<0){if(t)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[i].enabled=!0,u.push(r)},this),this.__cache__=null,u};Q.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(u){u.enabled=!1}),this.enable(e,t)};Q.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);const u=[];return e.forEach(function(r){const i=this.__find__(r);if(i<0){if(t)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[i].enabled=!1,u.push(r)},this),this.__cache__=null,u};Q.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function oe(e,t,u){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=u,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}oe.prototype.attrIndex=function(t){if(!this.attrs)return-1;const u=this.attrs;for(let r=0,i=u.length;r<i;r++)if(u[r][0]===t)return r;return-1};oe.prototype.attrPush=function(t){this.attrs?this.attrs.push(t):this.attrs=[t]};oe.prototype.attrSet=function(t,u){const r=this.attrIndex(t),i=[t,u];r<0?this.attrPush(i):this.attrs[r]=i};oe.prototype.attrGet=function(t){const u=this.attrIndex(t);let r=null;return u>=0&&(r=this.attrs[u][1]),r};oe.prototype.attrJoin=function(t,u){const r=this.attrIndex(t);r<0?this.attrPush([t,u]):this.attrs[r][1]=this.attrs[r][1]+" "+u};function vd(e,t,u){this.src=e,this.env=u,this.tokens=[],this.inlineMode=!1,this.md=t}vd.prototype.Token=oe;const h_=/\r\n?|\n/g,f_=/\0/g;function p_(e){let t;t=e.src.replace(h_,`
`),t=t.replace(f_,"�"),e.src=t}function __(e){let t;e.inlineMode?(t=new e.Token("inline","",0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function b_(e){const t=e.tokens;for(let u=0,r=t.length;u<r;u++){const i=t[u];i.type==="inline"&&e.md.inline.parse(i.content,e.md,e.env,i.children)}}function m_(e){return/^<a[>\s]/i.test(e)}function g_(e){return/^<\/a\s*>/i.test(e)}function v_(e){const t=e.tokens;if(e.md.options.linkify)for(let u=0,r=t.length;u<r;u++){if(t[u].type!=="inline"||!e.md.linkify.pretest(t[u].content))continue;let i=t[u].children,n=0;for(let a=i.length-1;a>=0;a--){const o=i[a];if(o.type==="link_close"){for(a--;i[a].level!==o.level&&i[a].type!=="link_open";)a--;continue}if(o.type==="html_inline"&&(m_(o.content)&&n>0&&n--,g_(o.content)&&n++),!(n>0)&&o.type==="text"&&e.md.linkify.test(o.content)){const c=o.content;let l=e.md.linkify.match(c);const f=[];let s=o.level,_=0;l.length>0&&l[0].index===0&&a>0&&i[a-1].type==="text_special"&&(l=l.slice(1));for(let d=0;d<l.length;d++){const b=l[d].url,v=e.md.normalizeLink(b);if(!e.md.validateLink(v))continue;let x=l[d].text;l[d].schema?l[d].schema==="mailto:"&&!/^mailto:/i.test(x)?x=e.md.normalizeLinkText("mailto:"+x).replace(/^mailto:/,""):x=e.md.normalizeLinkText(x):x=e.md.normalizeLinkText("http://"+x).replace(/^http:\/\//,"");const k=l[d].index;if(k>_){const m=new e.Token("text","",0);m.content=c.slice(_,k),m.level=s,f.push(m)}const p=new e.Token("link_open","a",1);p.attrs=[["href",v]],p.level=s++,p.markup="linkify",p.info="auto",f.push(p);const g=new e.Token("text","",0);g.content=x,g.level=s,f.push(g);const h=new e.Token("link_close","a",-1);h.level=--s,h.markup="linkify",h.info="auto",f.push(h),_=l[d].lastIndex}if(_<c.length){const d=new e.Token("text","",0);d.content=c.slice(_),d.level=s,f.push(d)}t[u].children=i=md(i,a,f)}}}}const xd=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,x_=/\((c|tm|r)\)/i,y_=/\((c|tm|r)\)/ig,$_={c:"©",r:"®",tm:"™"};function k_(e,t){return $_[t.toLowerCase()]}function C_(e){let t=0;for(let u=e.length-1;u>=0;u--){const r=e[u];r.type==="text"&&!t&&(r.content=r.content.replace(y_,k_)),r.type==="link_open"&&r.info==="auto"&&t--,r.type==="link_close"&&r.info==="auto"&&t++}}function w_(e){let t=0;for(let u=e.length-1;u>=0;u--){const r=e[u];r.type==="text"&&!t&&xd.test(r.content)&&(r.content=r.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),r.type==="link_open"&&r.info==="auto"&&t--,r.type==="link_close"&&r.info==="auto"&&t++}}function A_(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&(x_.test(e.tokens[t].content)&&C_(e.tokens[t].children),xd.test(e.tokens[t].content)&&w_(e.tokens[t].children))}const E_=/['"]/,Ra=/['"]/g,Ba="’";function tr(e,t,u){return e.slice(0,t)+u+e.slice(t+1)}function D_(e,t){let u;const r=[];for(let i=0;i<e.length;i++){const n=e[i],a=e[i].level;for(u=r.length-1;u>=0&&!(r[u].level<=a);u--);if(r.length=u+1,n.type!=="text")continue;let o=n.content,c=0,l=o.length;e:for(;c<l;){Ra.lastIndex=c;const f=Ra.exec(o);if(!f)break;let s=!0,_=!0;c=f.index+1;const d=f[0]==="'";let b=32;if(f.index-1>=0)b=o.charCodeAt(f.index-1);else for(u=i-1;u>=0&&!(e[u].type==="softbreak"||e[u].type==="hardbreak");u--)if(e[u].content){b=e[u].content.charCodeAt(e[u].content.length-1);break}let v=32;if(c<l)v=o.charCodeAt(c);else for(u=i+1;u<e.length&&!(e[u].type==="softbreak"||e[u].type==="hardbreak");u++)if(e[u].content){v=e[u].content.charCodeAt(0);break}const x=Lu(b)||Bu(String.fromCharCode(b)),k=Lu(v)||Bu(String.fromCharCode(v)),p=Ru(b),g=Ru(v);if(g?s=!1:k&&(p||x||(s=!1)),p?_=!1:x&&(g||k||(_=!1)),v===34&&f[0]==='"'&&b>=48&&b<=57&&(_=s=!1),s&&_&&(s=x,_=k),!s&&!_){d&&(n.content=tr(n.content,f.index,Ba));continue}if(_)for(u=r.length-1;u>=0;u--){let h=r[u];if(r[u].level<a)break;if(h.single===d&&r[u].level===a){h=r[u];let m,w;d?(m=t.md.options.quotes[2],w=t.md.options.quotes[3]):(m=t.md.options.quotes[0],w=t.md.options.quotes[1]),n.content=tr(n.content,f.index,w),e[h.token].content=tr(e[h.token].content,h.pos,m),c+=w.length-1,h.token===i&&(c+=m.length-1),o=n.content,l=o.length,r.length=u;continue e}}s?r.push({token:i,pos:f.index,single:d,level:a}):_&&d&&(n.content=tr(n.content,f.index,Ba))}}}function S_(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!=="inline"||!E_.test(e.tokens[t].content)||D_(e.tokens[t].children,e)}function F_(e){let t,u;const r=e.tokens,i=r.length;for(let n=0;n<i;n++){if(r[n].type!=="inline")continue;const a=r[n].children,o=a.length;for(t=0;t<o;t++)a[t].type==="text_special"&&(a[t].type="text");for(t=u=0;t<o;t++)a[t].type==="text"&&t+1<o&&a[t+1].type==="text"?a[t+1].content=a[t].content+a[t+1].content:(t!==u&&(a[u]=a[t]),u++);t!==u&&(a.length=u)}}const Xr=[["normalize",p_],["block",__],["inline",b_],["linkify",v_],["replacements",A_],["smartquotes",S_],["text_join",F_]];function to(){this.ruler=new Q;for(let e=0;e<Xr.length;e++)this.ruler.push(Xr[e][0],Xr[e][1])}to.prototype.process=function(e){const t=this.ruler.getRules("");for(let u=0,r=t.length;u<r;u++)t[u](e)};to.prototype.State=vd;function fe(e,t,u,r){this.src=e,this.md=t,this.env=u,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const i=this.src;for(let n=0,a=0,o=0,c=0,l=i.length,f=!1;a<l;a++){const s=i.charCodeAt(a);if(!f)if(F(s)){o++,s===9?c+=4-c%4:c++;continue}else f=!0;(s===10||a===l-1)&&(s!==10&&a++,this.bMarks.push(n),this.eMarks.push(a),this.tShift.push(o),this.sCount.push(c),this.bsCount.push(0),f=!1,o=0,c=0,n=a+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}fe.prototype.push=function(e,t,u){const r=new oe(e,t,u);return r.block=!0,u<0&&this.level--,r.level=this.level,u>0&&this.level++,this.tokens.push(r),r};fe.prototype.isEmpty=function(t){return this.bMarks[t]+this.tShift[t]>=this.eMarks[t]};fe.prototype.skipEmptyLines=function(t){for(let u=this.lineMax;t<u&&!(this.bMarks[t]+this.tShift[t]<this.eMarks[t]);t++);return t};fe.prototype.skipSpaces=function(t){for(let u=this.src.length;t<u;t++){const r=this.src.charCodeAt(t);if(!F(r))break}return t};fe.prototype.skipSpacesBack=function(t,u){if(t<=u)return t;for(;t>u;)if(!F(this.src.charCodeAt(--t)))return t+1;return t};fe.prototype.skipChars=function(t,u){for(let r=this.src.length;t<r&&this.src.charCodeAt(t)===u;t++);return t};fe.prototype.skipCharsBack=function(t,u,r){if(t<=r)return t;for(;t>r;)if(u!==this.src.charCodeAt(--t))return t+1;return t};fe.prototype.getLines=function(t,u,r,i){if(t>=u)return"";const n=new Array(u-t);for(let a=0,o=t;o<u;o++,a++){let c=0;const l=this.bMarks[o];let f=l,s;for(o+1<u||i?s=this.eMarks[o]+1:s=this.eMarks[o];f<s&&c<r;){const _=this.src.charCodeAt(f);if(F(_))_===9?c+=4-(c+this.bsCount[o])%4:c++;else if(f-l<this.tShift[o])c++;else break;f++}c>r?n[a]=new Array(c-r+1).join(" ")+this.src.slice(f,s):n[a]=this.src.slice(f,s)}return n.join("")};fe.prototype.Token=oe;const I_=65536;function ei(e,t){const u=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];return e.src.slice(u,r)}function La(e){const t=[],u=e.length;let r=0,i=e.charCodeAt(r),n=!1,a=0,o="";for(;r<u;)i===124&&(n?(o+=e.substring(a,r-1),a=r):(t.push(o+e.substring(a,r)),o="",a=r+1)),n=i===92,r++,i=e.charCodeAt(r);return t.push(o+e.substring(a)),t}function T_(e,t,u,r){if(t+2>u)return!1;let i=t+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let n=e.bMarks[i]+e.tShift[i];if(n>=e.eMarks[i])return!1;const a=e.src.charCodeAt(n++);if(a!==124&&a!==45&&a!==58||n>=e.eMarks[i])return!1;const o=e.src.charCodeAt(n++);if(o!==124&&o!==45&&o!==58&&!F(o)||a===45&&F(o))return!1;for(;n<e.eMarks[i];){const h=e.src.charCodeAt(n);if(h!==124&&h!==45&&h!==58&&!F(h))return!1;n++}let c=ei(e,t+1),l=c.split("|");const f=[];for(let h=0;h<l.length;h++){const m=l[h].trim();if(!m){if(h===0||h===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(m))return!1;m.charCodeAt(m.length-1)===58?f.push(m.charCodeAt(0)===58?"center":"right"):m.charCodeAt(0)===58?f.push("left"):f.push("")}if(c=ei(e,t).trim(),c.indexOf("|")===-1||e.sCount[t]-e.blkIndent>=4)return!1;l=La(c),l.length&&l[0]===""&&l.shift(),l.length&&l[l.length-1]===""&&l.pop();const s=l.length;if(s===0||s!==f.length)return!1;if(r)return!0;const _=e.parentType;e.parentType="table";const d=e.md.block.ruler.getRules("blockquote"),b=e.push("table_open","table",1),v=[t,0];b.map=v;const x=e.push("thead_open","thead",1);x.map=[t,t+1];const k=e.push("tr_open","tr",1);k.map=[t,t+1];for(let h=0;h<l.length;h++){const m=e.push("th_open","th",1);f[h]&&(m.attrs=[["style","text-align:"+f[h]]]);const w=e.push("inline","",0);w.content=l[h].trim(),w.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let p,g=0;for(i=t+2;i<u&&!(e.sCount[i]<e.blkIndent);i++){let h=!1;for(let w=0,T=d.length;w<T;w++)if(d[w](e,i,u,!0)){h=!0;break}if(h||(c=ei(e,i).trim(),!c)||e.sCount[i]-e.blkIndent>=4||(l=La(c),l.length&&l[0]===""&&l.shift(),l.length&&l[l.length-1]===""&&l.pop(),g+=s-l.length,g>I_))break;if(i===t+2){const w=e.push("tbody_open","tbody",1);w.map=p=[t+2,0]}const m=e.push("tr_open","tr",1);m.map=[i,i+1];for(let w=0;w<s;w++){const T=e.push("td_open","td",1);f[w]&&(T.attrs=[["style","text-align:"+f[w]]]);const Y=e.push("inline","",0);Y.content=l[w]?l[w].trim():"",Y.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return p&&(e.push("tbody_close","tbody",-1),p[1]=i),e.push("table_close","table",-1),v[1]=i,e.parentType=_,e.line=i,!0}function M_(e,t,u){if(e.sCount[t]-e.blkIndent<4)return!1;let r=t+1,i=r;for(;r<u;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,i=r;continue}break}e.line=i;const n=e.push("code_block","code",0);return n.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,n.map=[t,e.line],!0}function O_(e,t,u,r){let i=e.bMarks[t]+e.tShift[t],n=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||i+3>n)return!1;const a=e.src.charCodeAt(i);if(a!==126&&a!==96)return!1;let o=i;i=e.skipChars(i,a);let c=i-o;if(c<3)return!1;const l=e.src.slice(o,i),f=e.src.slice(i,n);if(a===96&&f.indexOf(String.fromCharCode(a))>=0)return!1;if(r)return!0;let s=t,_=!1;for(;s++,!(s>=u||(i=o=e.bMarks[s]+e.tShift[s],n=e.eMarks[s],i<n&&e.sCount[s]<e.blkIndent));)if(e.src.charCodeAt(i)===a&&!(e.sCount[s]-e.blkIndent>=4)&&(i=e.skipChars(i,a),!(i-o<c)&&(i=e.skipSpaces(i),!(i<n)))){_=!0;break}c=e.sCount[t],e.line=s+(_?1:0);const d=e.push("fence","code",0);return d.info=f,d.content=e.getLines(t+1,s,c,!0),d.markup=l,d.map=[t,e.line],!0}function P_(e,t,u,r){let i=e.bMarks[t]+e.tShift[t],n=e.eMarks[t];const a=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(r)return!0;const o=[],c=[],l=[],f=[],s=e.md.block.ruler.getRules("blockquote"),_=e.parentType;e.parentType="blockquote";let d=!1,b;for(b=t;b<u;b++){const g=e.sCount[b]<e.blkIndent;if(i=e.bMarks[b]+e.tShift[b],n=e.eMarks[b],i>=n)break;if(e.src.charCodeAt(i++)===62&&!g){let m=e.sCount[b]+1,w,T;e.src.charCodeAt(i)===32?(i++,m++,T=!1,w=!0):e.src.charCodeAt(i)===9?(w=!0,(e.bsCount[b]+m)%4===3?(i++,m++,T=!1):T=!0):w=!1;let Y=m;for(o.push(e.bMarks[b]),e.bMarks[b]=i;i<n;){const re=e.src.charCodeAt(i);if(F(re))re===9?Y+=4-(Y+e.bsCount[b]+(T?1:0))%4:Y++;else break;i++}d=i>=n,c.push(e.bsCount[b]),e.bsCount[b]=e.sCount[b]+1+(w?1:0),l.push(e.sCount[b]),e.sCount[b]=Y-m,f.push(e.tShift[b]),e.tShift[b]=i-e.bMarks[b];continue}if(d)break;let h=!1;for(let m=0,w=s.length;m<w;m++)if(s[m](e,b,u,!0)){h=!0;break}if(h){e.lineMax=b,e.blkIndent!==0&&(o.push(e.bMarks[b]),c.push(e.bsCount[b]),f.push(e.tShift[b]),l.push(e.sCount[b]),e.sCount[b]-=e.blkIndent);break}o.push(e.bMarks[b]),c.push(e.bsCount[b]),f.push(e.tShift[b]),l.push(e.sCount[b]),e.sCount[b]=-1}const v=e.blkIndent;e.blkIndent=0;const x=e.push("blockquote_open","blockquote",1);x.markup=">";const k=[t,0];x.map=k,e.md.block.tokenize(e,t,b);const p=e.push("blockquote_close","blockquote",-1);p.markup=">",e.lineMax=a,e.parentType=_,k[1]=e.line;for(let g=0;g<f.length;g++)e.bMarks[g+t]=o[g],e.tShift[g+t]=f[g],e.sCount[g+t]=l[g],e.bsCount[g+t]=c[g];return e.blkIndent=v,!0}function z_(e,t,u,r){const i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let n=e.bMarks[t]+e.tShift[t];const a=e.src.charCodeAt(n++);if(a!==42&&a!==45&&a!==95)return!1;let o=1;for(;n<i;){const l=e.src.charCodeAt(n++);if(l!==a&&!F(l))return!1;l===a&&o++}if(o<3)return!1;if(r)return!0;e.line=t+1;const c=e.push("hr","hr",0);return c.map=[t,e.line],c.markup=Array(o+1).join(String.fromCharCode(a)),!0}function Ua(e,t){const u=e.eMarks[t];let r=e.bMarks[t]+e.tShift[t];const i=e.src.charCodeAt(r++);if(i!==42&&i!==45&&i!==43)return-1;if(r<u){const n=e.src.charCodeAt(r);if(!F(n))return-1}return r}function qa(e,t){const u=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];let i=u;if(i+1>=r)return-1;let n=e.src.charCodeAt(i++);if(n<48||n>57)return-1;for(;;){if(i>=r)return-1;if(n=e.src.charCodeAt(i++),n>=48&&n<=57){if(i-u>=10)return-1;continue}if(n===41||n===46)break;return-1}return i<r&&(n=e.src.charCodeAt(i),!F(n))?-1:i}function N_(e,t){const u=e.level+2;for(let r=t+2,i=e.tokens.length-2;r<i;r++)e.tokens[r].level===u&&e.tokens[r].type==="paragraph_open"&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function R_(e,t,u,r){let i,n,a,o,c=t,l=!0;if(e.sCount[c]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[c]-e.listIndent>=4&&e.sCount[c]<e.blkIndent)return!1;let f=!1;r&&e.parentType==="paragraph"&&e.sCount[c]>=e.blkIndent&&(f=!0);let s,_,d;if((d=qa(e,c))>=0){if(s=!0,a=e.bMarks[c]+e.tShift[c],_=Number(e.src.slice(a,d-1)),f&&_!==1)return!1}else if((d=Ua(e,c))>=0)s=!1;else return!1;if(f&&e.skipSpaces(d)>=e.eMarks[c])return!1;if(r)return!0;const b=e.src.charCodeAt(d-1),v=e.tokens.length;s?(o=e.push("ordered_list_open","ol",1),_!==1&&(o.attrs=[["start",_]])):o=e.push("bullet_list_open","ul",1);const x=[c,0];o.map=x,o.markup=String.fromCharCode(b);let k=!1;const p=e.md.block.ruler.getRules("list"),g=e.parentType;for(e.parentType="list";c<u;){n=d,i=e.eMarks[c];const h=e.sCount[c]+d-(e.bMarks[c]+e.tShift[c]);let m=h;for(;n<i;){const Ke=e.src.charCodeAt(n);if(Ke===9)m+=4-(m+e.bsCount[c])%4;else if(Ke===32)m++;else break;n++}const w=n;let T;w>=i?T=1:T=m-h,T>4&&(T=1);const Y=h+T;o=e.push("list_item_open","li",1),o.markup=String.fromCharCode(b);const re=[c,0];o.map=re,s&&(o.info=e.src.slice(a,d-1));const Kt=e.tight,Nr=e.tShift[c],ih=e.sCount[c],nh=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=Y,e.tight=!0,e.tShift[c]=w-e.bMarks[c],e.sCount[c]=m,w>=i&&e.isEmpty(c+1)?e.line=Math.min(e.line+2,u):e.md.block.tokenize(e,c,u,!0),(!e.tight||k)&&(l=!1),k=e.line-c>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=nh,e.tShift[c]=Nr,e.sCount[c]=ih,e.tight=Kt,o=e.push("list_item_close","li",-1),o.markup=String.fromCharCode(b),c=e.line,re[1]=c,c>=u||e.sCount[c]<e.blkIndent||e.sCount[c]-e.blkIndent>=4)break;let bo=!1;for(let Ke=0,sh=p.length;Ke<sh;Ke++)if(p[Ke](e,c,u,!0)){bo=!0;break}if(bo)break;if(s){if(d=qa(e,c),d<0)break;a=e.bMarks[c]+e.tShift[c]}else if(d=Ua(e,c),d<0)break;if(b!==e.src.charCodeAt(d-1))break}return s?o=e.push("ordered_list_close","ol",-1):o=e.push("bullet_list_close","ul",-1),o.markup=String.fromCharCode(b),x[1]=c,e.line=c,e.parentType=g,l&&N_(e,v),!0}function B_(e,t,u,r){let i=e.bMarks[t]+e.tShift[t],n=e.eMarks[t],a=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function o(p){const g=e.lineMax;if(p>=g||e.isEmpty(p))return null;let h=!1;if(e.sCount[p]-e.blkIndent>3&&(h=!0),e.sCount[p]<0&&(h=!0),!h){const T=e.md.block.ruler.getRules("reference"),Y=e.parentType;e.parentType="reference";let re=!1;for(let Kt=0,Nr=T.length;Kt<Nr;Kt++)if(T[Kt](e,p,g,!0)){re=!0;break}if(e.parentType=Y,re)return null}const m=e.bMarks[p]+e.tShift[p],w=e.eMarks[p];return e.src.slice(m,w+1)}let c=e.src.slice(i,n+1);n=c.length;let l=-1;for(i=1;i<n;i++){const p=c.charCodeAt(i);if(p===91)return!1;if(p===93){l=i;break}else if(p===10){const g=o(a);g!==null&&(c+=g,n=c.length,a++)}else if(p===92&&(i++,i<n&&c.charCodeAt(i)===10)){const g=o(a);g!==null&&(c+=g,n=c.length,a++)}}if(l<0||c.charCodeAt(l+1)!==58)return!1;for(i=l+2;i<n;i++){const p=c.charCodeAt(i);if(p===10){const g=o(a);g!==null&&(c+=g,n=c.length,a++)}else if(!F(p))break}const f=e.md.helpers.parseLinkDestination(c,i,n);if(!f.ok)return!1;const s=e.md.normalizeLink(f.str);if(!e.md.validateLink(s))return!1;i=f.pos;const _=i,d=a,b=i;for(;i<n;i++){const p=c.charCodeAt(i);if(p===10){const g=o(a);g!==null&&(c+=g,n=c.length,a++)}else if(!F(p))break}let v=e.md.helpers.parseLinkTitle(c,i,n);for(;v.can_continue;){const p=o(a);if(p===null)break;c+=p,i=n,n=c.length,a++,v=e.md.helpers.parseLinkTitle(c,i,n,v)}let x;for(i<n&&b!==i&&v.ok?(x=v.str,i=v.pos):(x="",i=_,a=d);i<n;){const p=c.charCodeAt(i);if(!F(p))break;i++}if(i<n&&c.charCodeAt(i)!==10&&x)for(x="",i=_,a=d;i<n;){const p=c.charCodeAt(i);if(!F(p))break;i++}if(i<n&&c.charCodeAt(i)!==10)return!1;const k=Or(c.slice(1,l));return k?(r||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[k]>"u"&&(e.env.references[k]={title:x,href:s}),e.line=a),!0):!1}const L_=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],U_="[a-zA-Z_:][a-zA-Z0-9:._-]*",q_="[^\"'=<>`\\x00-\\x20]+",j_="'[^']*'",W_='"[^"]*"',H_="(?:"+q_+"|"+j_+"|"+W_+")",V_="(?:\\s+"+U_+"(?:\\s*=\\s*"+H_+")?)",yd="<[A-Za-z][A-Za-z0-9\\-]*"+V_+"*\\s*\\/?>",$d="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",G_="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",Z_="<[?][\\s\\S]*?[?]>",K_="<![A-Za-z][^>]*>",J_="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",Q_=new RegExp("^(?:"+yd+"|"+$d+"|"+G_+"|"+Z_+"|"+K_+"|"+J_+")"),Y_=new RegExp("^(?:"+yd+"|"+$d+")"),Xe=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+L_.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(Y_.source+"\\s*$"),/^$/,!1]];function X_(e,t,u,r){let i=e.bMarks[t]+e.tShift[t],n=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let a=e.src.slice(i,n),o=0;for(;o<Xe.length&&!Xe[o][0].test(a);o++);if(o===Xe.length)return!1;if(r)return Xe[o][2];let c=t+1;if(!Xe[o][1].test(a)){for(;c<u&&!(e.sCount[c]<e.blkIndent);c++)if(i=e.bMarks[c]+e.tShift[c],n=e.eMarks[c],a=e.src.slice(i,n),Xe[o][1].test(a)){a.length!==0&&c++;break}}e.line=c;const l=e.push("html_block","",0);return l.map=[t,c],l.content=e.getLines(t,c,e.blkIndent,!0),!0}function eb(e,t,u,r){let i=e.bMarks[t]+e.tShift[t],n=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let a=e.src.charCodeAt(i);if(a!==35||i>=n)return!1;let o=1;for(a=e.src.charCodeAt(++i);a===35&&i<n&&o<=6;)o++,a=e.src.charCodeAt(++i);if(o>6||i<n&&!F(a))return!1;if(r)return!0;n=e.skipSpacesBack(n,i);const c=e.skipCharsBack(n,35,i);c>i&&F(e.src.charCodeAt(c-1))&&(n=c),e.line=t+1;const l=e.push("heading_open","h"+String(o),1);l.markup="########".slice(0,o),l.map=[t,e.line];const f=e.push("inline","",0);f.content=e.src.slice(i,n).trim(),f.map=[t,e.line],f.children=[];const s=e.push("heading_close","h"+String(o),-1);return s.markup="########".slice(0,o),!0}function tb(e,t,u){const r=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;const i=e.parentType;e.parentType="paragraph";let n=0,a,o=t+1;for(;o<u&&!e.isEmpty(o);o++){if(e.sCount[o]-e.blkIndent>3)continue;if(e.sCount[o]>=e.blkIndent){let d=e.bMarks[o]+e.tShift[o];const b=e.eMarks[o];if(d<b&&(a=e.src.charCodeAt(d),(a===45||a===61)&&(d=e.skipChars(d,a),d=e.skipSpaces(d),d>=b))){n=a===61?1:2;break}}if(e.sCount[o]<0)continue;let _=!1;for(let d=0,b=r.length;d<b;d++)if(r[d](e,o,u,!0)){_=!0;break}if(_)break}if(!n)return!1;const c=e.getLines(t,o,e.blkIndent,!1).trim();e.line=o+1;const l=e.push("heading_open","h"+String(n),1);l.markup=String.fromCharCode(a),l.map=[t,e.line];const f=e.push("inline","",0);f.content=c,f.map=[t,e.line-1],f.children=[];const s=e.push("heading_close","h"+String(n),-1);return s.markup=String.fromCharCode(a),e.parentType=i,!0}function ub(e,t,u){const r=e.md.block.ruler.getRules("paragraph"),i=e.parentType;let n=t+1;for(e.parentType="paragraph";n<u&&!e.isEmpty(n);n++){if(e.sCount[n]-e.blkIndent>3||e.sCount[n]<0)continue;let l=!1;for(let f=0,s=r.length;f<s;f++)if(r[f](e,n,u,!0)){l=!0;break}if(l)break}const a=e.getLines(t,n,e.blkIndent,!1).trim();e.line=n;const o=e.push("paragraph_open","p",1);o.map=[t,e.line];const c=e.push("inline","",0);return c.content=a,c.map=[t,e.line],c.children=[],e.push("paragraph_close","p",-1),e.parentType=i,!0}const ur=[["table",T_,["paragraph","reference"]],["code",M_],["fence",O_,["paragraph","reference","blockquote","list"]],["blockquote",P_,["paragraph","reference","blockquote","list"]],["hr",z_,["paragraph","reference","blockquote","list"]],["list",R_,["paragraph","reference","blockquote"]],["reference",B_],["html_block",X_,["paragraph","reference","blockquote"]],["heading",eb,["paragraph","reference","blockquote"]],["lheading",tb],["paragraph",ub]];function Pr(){this.ruler=new Q;for(let e=0;e<ur.length;e++)this.ruler.push(ur[e][0],ur[e][1],{alt:(ur[e][2]||[]).slice()})}Pr.prototype.tokenize=function(e,t,u){const r=this.ruler.getRules(""),i=r.length,n=e.md.options.maxNesting;let a=t,o=!1;for(;a<u&&(e.line=a=e.skipEmptyLines(a),!(a>=u||e.sCount[a]<e.blkIndent));){if(e.level>=n){e.line=u;break}const c=e.line;let l=!1;for(let f=0;f<i;f++)if(l=r[f](e,a,u,!1),l){if(c>=e.line)throw new Error("block rule didn't increment state.line");break}if(!l)throw new Error("none of the block rules matched");e.tight=!o,e.isEmpty(e.line-1)&&(o=!0),a=e.line,a<u&&e.isEmpty(a)&&(o=!0,a++,e.line=a)}};Pr.prototype.parse=function(e,t,u,r){if(!e)return;const i=new this.State(e,t,u,r);this.tokenize(i,i.line,i.lineMax)};Pr.prototype.State=fe;function Qu(e,t,u,r){this.src=e,this.env=u,this.md=t,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}Qu.prototype.pushPending=function(){const e=new oe("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};Qu.prototype.push=function(e,t,u){this.pending&&this.pushPending();const r=new oe(e,t,u);let i=null;return u<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,u>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r};Qu.prototype.scanDelims=function(e,t){const u=this.posMax,r=this.src.charCodeAt(e),i=e>0?this.src.charCodeAt(e-1):32;let n=e;for(;n<u&&this.src.charCodeAt(n)===r;)n++;const a=n-e,o=n<u?this.src.charCodeAt(n):32,c=Lu(i)||Bu(String.fromCharCode(i)),l=Lu(o)||Bu(String.fromCharCode(o)),f=Ru(i),s=Ru(o),_=!s&&(!l||f||c),d=!f&&(!c||s||l);return{can_open:_&&(t||!d||c),can_close:d&&(t||!_||l),length:a}};Qu.prototype.Token=oe;function rb(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function ib(e,t){let u=e.pos;for(;u<e.posMax&&!rb(e.src.charCodeAt(u));)u++;return u===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,u)),e.pos=u,!0)}const nb=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function sb(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;const u=e.pos,r=e.posMax;if(u+3>r||e.src.charCodeAt(u)!==58||e.src.charCodeAt(u+1)!==47||e.src.charCodeAt(u+2)!==47)return!1;const i=e.pending.match(nb);if(!i)return!1;const n=i[1],a=e.md.linkify.matchAtStart(e.src.slice(u-n.length));if(!a)return!1;let o=a.url;if(o.length<=n.length)return!1;let c=o.length;for(;c>0&&o.charCodeAt(c-1)===42;)c--;c!==o.length&&(o=o.slice(0,c));const l=e.md.normalizeLink(o);if(!e.md.validateLink(l))return!1;if(!t){e.pending=e.pending.slice(0,-n.length);const f=e.push("link_open","a",1);f.attrs=[["href",l]],f.markup="linkify",f.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(o);const _=e.push("link_close","a",-1);_.markup="linkify",_.info="auto"}return e.pos+=o.length-n.length,!0}function ob(e,t){let u=e.pos;if(e.src.charCodeAt(u)!==10)return!1;const r=e.pending.length-1,i=e.posMax;if(!t)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let n=r-1;for(;n>=1&&e.pending.charCodeAt(n-1)===32;)n--;e.pending=e.pending.slice(0,n),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(u++;u<i&&F(e.src.charCodeAt(u));)u++;return e.pos=u,!0}const uo=[];for(let e=0;e<256;e++)uo.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){uo[e.charCodeAt(0)]=1});function ab(e,t){let u=e.pos;const r=e.posMax;if(e.src.charCodeAt(u)!==92||(u++,u>=r))return!1;let i=e.src.charCodeAt(u);if(i===10){for(t||e.push("hardbreak","br",0),u++;u<r&&(i=e.src.charCodeAt(u),!!F(i));)u++;return e.pos=u,!0}let n=e.src[u];if(i>=55296&&i<=56319&&u+1<r){const o=e.src.charCodeAt(u+1);o>=56320&&o<=57343&&(n+=e.src[u+1],u++)}const a="\\"+n;if(!t){const o=e.push("text_special","",0);i<256&&uo[i]!==0?o.content=n:o.content=a,o.markup=a,o.info="escape"}return e.pos=u+1,!0}function cb(e,t){let u=e.pos;if(e.src.charCodeAt(u)!==96)return!1;const i=u;u++;const n=e.posMax;for(;u<n&&e.src.charCodeAt(u)===96;)u++;const a=e.src.slice(i,u),o=a.length;if(e.backticksScanned&&(e.backticks[o]||0)<=i)return t||(e.pending+=a),e.pos+=o,!0;let c=u,l;for(;(l=e.src.indexOf("`",c))!==-1;){for(c=l+1;c<n&&e.src.charCodeAt(c)===96;)c++;const f=c-l;if(f===o){if(!t){const s=e.push("code_inline","code",0);s.markup=a,s.content=e.src.slice(u,l).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=c,!0}e.backticks[f]=l}return e.backticksScanned=!0,t||(e.pending+=a),e.pos+=o,!0}function lb(e,t){const u=e.pos,r=e.src.charCodeAt(u);if(t||r!==126)return!1;const i=e.scanDelims(e.pos,!0);let n=i.length;const a=String.fromCharCode(r);if(n<2)return!1;let o;n%2&&(o=e.push("text","",0),o.content=a,n--);for(let c=0;c<n;c+=2)o=e.push("text","",0),o.content=a+a,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function ja(e,t){let u;const r=[],i=t.length;for(let n=0;n<i;n++){const a=t[n];if(a.marker!==126||a.end===-1)continue;const o=t[a.end];u=e.tokens[a.token],u.type="s_open",u.tag="s",u.nesting=1,u.markup="~~",u.content="",u=e.tokens[o.token],u.type="s_close",u.tag="s",u.nesting=-1,u.markup="~~",u.content="",e.tokens[o.token-1].type==="text"&&e.tokens[o.token-1].content==="~"&&r.push(o.token-1)}for(;r.length;){const n=r.pop();let a=n+1;for(;a<e.tokens.length&&e.tokens[a].type==="s_close";)a++;a--,n!==a&&(u=e.tokens[a],e.tokens[a]=e.tokens[n],e.tokens[n]=u)}}function db(e){const t=e.tokens_meta,u=e.tokens_meta.length;ja(e,e.delimiters);for(let r=0;r<u;r++)t[r]&&t[r].delimiters&&ja(e,t[r].delimiters)}const kd={tokenize:lb,postProcess:db};function hb(e,t){const u=e.pos,r=e.src.charCodeAt(u);if(t||r!==95&&r!==42)return!1;const i=e.scanDelims(e.pos,r===42);for(let n=0;n<i.length;n++){const a=e.push("text","",0);a.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function Wa(e,t){const u=t.length;for(let r=u-1;r>=0;r--){const i=t[r];if(i.marker!==95&&i.marker!==42||i.end===-1)continue;const n=t[i.end],a=r>0&&t[r-1].end===i.end+1&&t[r-1].marker===i.marker&&t[r-1].token===i.token-1&&t[i.end+1].token===n.token+1,o=String.fromCharCode(i.marker),c=e.tokens[i.token];c.type=a?"strong_open":"em_open",c.tag=a?"strong":"em",c.nesting=1,c.markup=a?o+o:o,c.content="";const l=e.tokens[n.token];l.type=a?"strong_close":"em_close",l.tag=a?"strong":"em",l.nesting=-1,l.markup=a?o+o:o,l.content="",a&&(e.tokens[t[r-1].token].content="",e.tokens[t[i.end+1].token].content="",r--)}}function fb(e){const t=e.tokens_meta,u=e.tokens_meta.length;Wa(e,e.delimiters);for(let r=0;r<u;r++)t[r]&&t[r].delimiters&&Wa(e,t[r].delimiters)}const Cd={tokenize:hb,postProcess:fb};function pb(e,t){let u,r,i,n,a="",o="",c=e.pos,l=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const f=e.pos,s=e.posMax,_=e.pos+1,d=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(d<0)return!1;let b=d+1;if(b<s&&e.src.charCodeAt(b)===40){for(l=!1,b++;b<s&&(u=e.src.charCodeAt(b),!(!F(u)&&u!==10));b++);if(b>=s)return!1;if(c=b,i=e.md.helpers.parseLinkDestination(e.src,b,e.posMax),i.ok){for(a=e.md.normalizeLink(i.str),e.md.validateLink(a)?b=i.pos:a="",c=b;b<s&&(u=e.src.charCodeAt(b),!(!F(u)&&u!==10));b++);if(i=e.md.helpers.parseLinkTitle(e.src,b,e.posMax),b<s&&c!==b&&i.ok)for(o=i.str,b=i.pos;b<s&&(u=e.src.charCodeAt(b),!(!F(u)&&u!==10));b++);}(b>=s||e.src.charCodeAt(b)!==41)&&(l=!0),b++}if(l){if(typeof e.env.references>"u")return!1;if(b<s&&e.src.charCodeAt(b)===91?(c=b+1,b=e.md.helpers.parseLinkLabel(e,b),b>=0?r=e.src.slice(c,b++):b=d+1):b=d+1,r||(r=e.src.slice(_,d)),n=e.env.references[Or(r)],!n)return e.pos=f,!1;a=n.href,o=n.title}if(!t){e.pos=_,e.posMax=d;const v=e.push("link_open","a",1),x=[["href",a]];v.attrs=x,o&&x.push(["title",o]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=b,e.posMax=s,!0}function _b(e,t){let u,r,i,n,a,o,c,l,f="";const s=e.pos,_=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const d=e.pos+2,b=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(b<0)return!1;if(n=b+1,n<_&&e.src.charCodeAt(n)===40){for(n++;n<_&&(u=e.src.charCodeAt(n),!(!F(u)&&u!==10));n++);if(n>=_)return!1;for(l=n,o=e.md.helpers.parseLinkDestination(e.src,n,e.posMax),o.ok&&(f=e.md.normalizeLink(o.str),e.md.validateLink(f)?n=o.pos:f=""),l=n;n<_&&(u=e.src.charCodeAt(n),!(!F(u)&&u!==10));n++);if(o=e.md.helpers.parseLinkTitle(e.src,n,e.posMax),n<_&&l!==n&&o.ok)for(c=o.str,n=o.pos;n<_&&(u=e.src.charCodeAt(n),!(!F(u)&&u!==10));n++);else c="";if(n>=_||e.src.charCodeAt(n)!==41)return e.pos=s,!1;n++}else{if(typeof e.env.references>"u")return!1;if(n<_&&e.src.charCodeAt(n)===91?(l=n+1,n=e.md.helpers.parseLinkLabel(e,n),n>=0?i=e.src.slice(l,n++):n=b+1):n=b+1,i||(i=e.src.slice(d,b)),a=e.env.references[Or(i)],!a)return e.pos=s,!1;f=a.href,c=a.title}if(!t){r=e.src.slice(d,b);const v=[];e.md.inline.parse(r,e.md,e.env,v);const x=e.push("image","img",0),k=[["src",f],["alt",""]];x.attrs=k,x.children=v,x.content=r,c&&k.push(["title",c])}return e.pos=n,e.posMax=_,!0}const bb=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,mb=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function gb(e,t){let u=e.pos;if(e.src.charCodeAt(u)!==60)return!1;const r=e.pos,i=e.posMax;for(;;){if(++u>=i)return!1;const a=e.src.charCodeAt(u);if(a===60)return!1;if(a===62)break}const n=e.src.slice(r+1,u);if(mb.test(n)){const a=e.md.normalizeLink(n);if(!e.md.validateLink(a))return!1;if(!t){const o=e.push("link_open","a",1);o.attrs=[["href",a]],o.markup="autolink",o.info="auto";const c=e.push("text","",0);c.content=e.md.normalizeLinkText(n);const l=e.push("link_close","a",-1);l.markup="autolink",l.info="auto"}return e.pos+=n.length+2,!0}if(bb.test(n)){const a=e.md.normalizeLink("mailto:"+n);if(!e.md.validateLink(a))return!1;if(!t){const o=e.push("link_open","a",1);o.attrs=[["href",a]],o.markup="autolink",o.info="auto";const c=e.push("text","",0);c.content=e.md.normalizeLinkText(n);const l=e.push("link_close","a",-1);l.markup="autolink",l.info="auto"}return e.pos+=n.length+2,!0}return!1}function vb(e){return/^<a[>\s]/i.test(e)}function xb(e){return/^<\/a\s*>/i.test(e)}function yb(e){const t=e|32;return t>=97&&t<=122}function $b(e,t){if(!e.md.options.html)return!1;const u=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=u)return!1;const i=e.src.charCodeAt(r+1);if(i!==33&&i!==63&&i!==47&&!yb(i))return!1;const n=e.src.slice(r).match(Q_);if(!n)return!1;if(!t){const a=e.push("html_inline","",0);a.content=n[0],vb(a.content)&&e.linkLevel++,xb(a.content)&&e.linkLevel--}return e.pos+=n[0].length,!0}const kb=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Cb=/^&([a-z][a-z0-9]{1,31});/i;function wb(e,t){const u=e.pos,r=e.posMax;if(e.src.charCodeAt(u)!==38||u+1>=r)return!1;if(e.src.charCodeAt(u+1)===35){const n=e.src.slice(u).match(kb);if(n){if(!t){const a=n[1][0].toLowerCase()==="x"?parseInt(n[1].slice(1),16):parseInt(n[1],10),o=e.push("text_special","",0);o.content=eo(a)?Cr(a):Cr(65533),o.markup=n[0],o.info="entity"}return e.pos+=n[0].length,!0}}else{const n=e.src.slice(u).match(Cb);if(n){const a=bd(n[0]);if(a!==n[0]){if(!t){const o=e.push("text_special","",0);o.content=a,o.markup=n[0],o.info="entity"}return e.pos+=n[0].length,!0}}}return!1}function Ha(e){const t={},u=e.length;if(!u)return;let r=0,i=-2;const n=[];for(let a=0;a<u;a++){const o=e[a];if(n.push(0),(e[r].marker!==o.marker||i!==o.token-1)&&(r=a),i=o.token,o.length=o.length||0,!o.close)continue;t.hasOwnProperty(o.marker)||(t[o.marker]=[-1,-1,-1,-1,-1,-1]);const c=t[o.marker][(o.open?3:0)+o.length%3];let l=r-n[r]-1,f=l;for(;l>c;l-=n[l]+1){const s=e[l];if(s.marker===o.marker&&s.open&&s.end<0){let _=!1;if((s.close||o.open)&&(s.length+o.length)%3===0&&(s.length%3!==0||o.length%3!==0)&&(_=!0),!_){const d=l>0&&!e[l-1].open?n[l-1]+1:0;n[a]=a-l+d,n[l]=d,o.open=!1,s.end=a,s.close=!1,f=-1,i=-2;break}}}f!==-1&&(t[o.marker][(o.open?3:0)+(o.length||0)%3]=f)}}function Ab(e){const t=e.tokens_meta,u=e.tokens_meta.length;Ha(e.delimiters);for(let r=0;r<u;r++)t[r]&&t[r].delimiters&&Ha(t[r].delimiters)}function Eb(e){let t,u,r=0;const i=e.tokens,n=e.tokens.length;for(t=u=0;t<n;t++)i[t].nesting<0&&r--,i[t].level=r,i[t].nesting>0&&r++,i[t].type==="text"&&t+1<n&&i[t+1].type==="text"?i[t+1].content=i[t].content+i[t+1].content:(t!==u&&(i[u]=i[t]),u++);t!==u&&(i.length=u)}const ti=[["text",ib],["linkify",sb],["newline",ob],["escape",ab],["backticks",cb],["strikethrough",kd.tokenize],["emphasis",Cd.tokenize],["link",pb],["image",_b],["autolink",gb],["html_inline",$b],["entity",wb]],ui=[["balance_pairs",Ab],["strikethrough",kd.postProcess],["emphasis",Cd.postProcess],["fragments_join",Eb]];function Yu(){this.ruler=new Q;for(let e=0;e<ti.length;e++)this.ruler.push(ti[e][0],ti[e][1]);this.ruler2=new Q;for(let e=0;e<ui.length;e++)this.ruler2.push(ui[e][0],ui[e][1])}Yu.prototype.skipToken=function(e){const t=e.pos,u=this.ruler.getRules(""),r=u.length,i=e.md.options.maxNesting,n=e.cache;if(typeof n[t]<"u"){e.pos=n[t];return}let a=!1;if(e.level<i){for(let o=0;o<r;o++)if(e.level++,a=u[o](e,!0),e.level--,a){if(t>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;a||e.pos++,n[t]=e.pos};Yu.prototype.tokenize=function(e){const t=this.ruler.getRules(""),u=t.length,r=e.posMax,i=e.md.options.maxNesting;for(;e.pos<r;){const n=e.pos;let a=!1;if(e.level<i){for(let o=0;o<u;o++)if(a=t[o](e,!1),a){if(n>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(a){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};Yu.prototype.parse=function(e,t,u,r){const i=new this.State(e,t,u,r);this.tokenize(i);const n=this.ruler2.getRules(""),a=n.length;for(let o=0;o<a;o++)n[o](i)};Yu.prototype.State=Qu;function Db(e){const t={};e=e||{},t.src_Any=dd.source,t.src_Cc=hd.source,t.src_Z=pd.source,t.src_P=Ys.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|");const u="[><｜]";return t.src_pseudo_letter="(?:(?!"+u+"|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|"+u+"|"+t.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+"|"+u+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+t.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+t.src_ZCc+"|$)|;(?!"+t.src_ZCc+"|$)|\\!+(?!"+t.src_ZCc+"|[!]|$)|\\?(?!"+t.src_ZCc+"|[?]|$))+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy="(^|"+u+'|"|\\(|'+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t}function Hi(e){return Array.prototype.slice.call(arguments,1).forEach(function(u){u&&Object.keys(u).forEach(function(r){e[r]=u[r]})}),e}function zr(e){return Object.prototype.toString.call(e)}function Sb(e){return zr(e)==="[object String]"}function Fb(e){return zr(e)==="[object Object]"}function Ib(e){return zr(e)==="[object RegExp]"}function Va(e){return zr(e)==="[object Function]"}function Tb(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const wd={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function Mb(e){return Object.keys(e||{}).reduce(function(t,u){return t||wd.hasOwnProperty(u)},!1)}const Ob={"http:":{validate:function(e,t,u){const r=e.slice(t);return u.re.http||(u.re.http=new RegExp("^\\/\\/"+u.re.src_auth+u.re.src_host_port_strict+u.re.src_path,"i")),u.re.http.test(r)?r.match(u.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,t,u){const r=e.slice(t);return u.re.no_http||(u.re.no_http=new RegExp("^"+u.re.src_auth+"(?:localhost|(?:(?:"+u.re.src_domain+")\\.)+"+u.re.src_domain_root+")"+u.re.src_port+u.re.src_host_terminator+u.re.src_path,"i")),u.re.no_http.test(r)?t>=3&&e[t-3]===":"||t>=3&&e[t-3]==="/"?0:r.match(u.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,u){const r=e.slice(t);return u.re.mailto||(u.re.mailto=new RegExp("^"+u.re.src_email_name+"@"+u.re.src_host_strict,"i")),u.re.mailto.test(r)?r.match(u.re.mailto)[0].length:0}}},Pb="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",zb="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function Nb(e){e.__index__=-1,e.__text_cache__=""}function Rb(e){return function(t,u){const r=t.slice(u);return e.test(r)?r.match(e)[0].length:0}}function Ga(){return function(e,t){t.normalize(e)}}function wr(e){const t=e.re=Db(e.__opts__),u=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||u.push(Pb),u.push(t.src_xn),t.src_tlds=u.join("|");function r(o){return o.replace("%TLDS%",t.src_tlds)}t.email_fuzzy=RegExp(r(t.tpl_email_fuzzy),"i"),t.link_fuzzy=RegExp(r(t.tpl_link_fuzzy),"i"),t.link_no_ip_fuzzy=RegExp(r(t.tpl_link_no_ip_fuzzy),"i"),t.host_fuzzy_test=RegExp(r(t.tpl_host_fuzzy_test),"i");const i=[];e.__compiled__={};function n(o,c){throw new Error('(LinkifyIt) Invalid schema "'+o+'": '+c)}Object.keys(e.__schemas__).forEach(function(o){const c=e.__schemas__[o];if(c===null)return;const l={validate:null,link:null};if(e.__compiled__[o]=l,Fb(c)){Ib(c.validate)?l.validate=Rb(c.validate):Va(c.validate)?l.validate=c.validate:n(o,c),Va(c.normalize)?l.normalize=c.normalize:c.normalize?n(o,c):l.normalize=Ga();return}if(Sb(c)){i.push(o);return}n(o,c)}),i.forEach(function(o){e.__compiled__[e.__schemas__[o]]&&(e.__compiled__[o].validate=e.__compiled__[e.__schemas__[o]].validate,e.__compiled__[o].normalize=e.__compiled__[e.__schemas__[o]].normalize)}),e.__compiled__[""]={validate:null,normalize:Ga()};const a=Object.keys(e.__compiled__).filter(function(o){return o.length>0&&e.__compiled__[o]}).map(Tb).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+a+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+a+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),Nb(e)}function Bb(e,t){const u=e.__index__,r=e.__last_index__,i=e.__text_cache__.slice(u,r);this.schema=e.__schema__.toLowerCase(),this.index=u+t,this.lastIndex=r+t,this.raw=i,this.text=i,this.url=i}function Vi(e,t){const u=new Bb(e,t);return e.__compiled__[u.schema].normalize(u,e),u}function X(e,t){if(!(this instanceof X))return new X(e,t);t||Mb(e)&&(t=e,e={}),this.__opts__=Hi({},wd,t),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=Hi({},Ob,e),this.__compiled__={},this.__tlds__=zb,this.__tlds_replaced__=!1,this.re={},wr(this)}X.prototype.add=function(t,u){return this.__schemas__[t]=u,wr(this),this};X.prototype.set=function(t){return this.__opts__=Hi(this.__opts__,t),this};X.prototype.test=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return!1;let u,r,i,n,a,o,c,l,f;if(this.re.schema_test.test(t)){for(c=this.re.schema_search,c.lastIndex=0;(u=c.exec(t))!==null;)if(n=this.testSchemaAt(t,u[2],c.lastIndex),n){this.__schema__=u[2],this.__index__=u.index+u[1].length,this.__last_index__=u.index+u[0].length+n;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(l=t.search(this.re.host_fuzzy_test),l>=0&&(this.__index__<0||l<this.__index__)&&(r=t.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(a=r.index+r[1].length,(this.__index__<0||a<this.__index__)&&(this.__schema__="",this.__index__=a,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(f=t.indexOf("@"),f>=0&&(i=t.match(this.re.email_fuzzy))!==null&&(a=i.index+i[1].length,o=i.index+i[0].length,(this.__index__<0||a<this.__index__||a===this.__index__&&o>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=a,this.__last_index__=o))),this.__index__>=0};X.prototype.pretest=function(t){return this.re.pretest.test(t)};X.prototype.testSchemaAt=function(t,u,r){return this.__compiled__[u.toLowerCase()]?this.__compiled__[u.toLowerCase()].validate(t,r,this):0};X.prototype.match=function(t){const u=[];let r=0;this.__index__>=0&&this.__text_cache__===t&&(u.push(Vi(this,r)),r=this.__last_index__);let i=r?t.slice(r):t;for(;this.test(i);)u.push(Vi(this,r)),i=i.slice(this.__last_index__),r+=this.__last_index__;return u.length?u:null};X.prototype.matchAtStart=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return null;const u=this.re.schema_at_start.exec(t);if(!u)return null;const r=this.testSchemaAt(t,u[2],u[0].length);return r?(this.__schema__=u[2],this.__index__=u.index+u[1].length,this.__last_index__=u.index+u[0].length+r,Vi(this,0)):null};X.prototype.tlds=function(t,u){return t=Array.isArray(t)?t:[t],u?(this.__tlds__=this.__tlds__.concat(t).sort().filter(function(r,i,n){return r!==n[i-1]}).reverse(),wr(this),this):(this.__tlds__=t.slice(),this.__tlds_replaced__=!0,wr(this),this)};X.prototype.normalize=function(t){t.schema||(t.url="http://"+t.url),t.schema==="mailto:"&&!/^mailto:/i.test(t.url)&&(t.url="mailto:"+t.url)};X.prototype.onCompile=function(){};const ct=2147483647,ce=36,ro=1,Uu=26,Lb=38,Ub=700,Ad=72,Ed=128,Dd="-",qb=/^xn--/,jb=/[^\0-\x7F]/,Wb=/[\x2E\u3002\uFF0E\uFF61]/g,Hb={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},ri=ce-ro,le=Math.floor,ii=String.fromCharCode;function Se(e){throw new RangeError(Hb[e])}function Vb(e,t){const u=[];let r=e.length;for(;r--;)u[r]=t(e[r]);return u}function Sd(e,t){const u=e.split("@");let r="";u.length>1&&(r=u[0]+"@",e=u[1]),e=e.replace(Wb,".");const i=e.split("."),n=Vb(i,t).join(".");return r+n}function Fd(e){const t=[];let u=0;const r=e.length;for(;u<r;){const i=e.charCodeAt(u++);if(i>=55296&&i<=56319&&u<r){const n=e.charCodeAt(u++);(n&64512)==56320?t.push(((i&1023)<<10)+(n&1023)+65536):(t.push(i),u--)}else t.push(i)}return t}const Gb=e=>String.fromCodePoint(...e),Zb=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:ce},Za=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},Id=function(e,t,u){let r=0;for(e=u?le(e/Ub):e>>1,e+=le(e/t);e>ri*Uu>>1;r+=ce)e=le(e/ri);return le(r+(ri+1)*e/(e+Lb))},Td=function(e){const t=[],u=e.length;let r=0,i=Ed,n=Ad,a=e.lastIndexOf(Dd);a<0&&(a=0);for(let o=0;o<a;++o)e.charCodeAt(o)>=128&&Se("not-basic"),t.push(e.charCodeAt(o));for(let o=a>0?a+1:0;o<u;){const c=r;for(let f=1,s=ce;;s+=ce){o>=u&&Se("invalid-input");const _=Zb(e.charCodeAt(o++));_>=ce&&Se("invalid-input"),_>le((ct-r)/f)&&Se("overflow"),r+=_*f;const d=s<=n?ro:s>=n+Uu?Uu:s-n;if(_<d)break;const b=ce-d;f>le(ct/b)&&Se("overflow"),f*=b}const l=t.length+1;n=Id(r-c,l,c==0),le(r/l)>ct-i&&Se("overflow"),i+=le(r/l),r%=l,t.splice(r++,0,i)}return String.fromCodePoint(...t)},Md=function(e){const t=[];e=Fd(e);const u=e.length;let r=Ed,i=0,n=Ad;for(const c of e)c<128&&t.push(ii(c));const a=t.length;let o=a;for(a&&t.push(Dd);o<u;){let c=ct;for(const f of e)f>=r&&f<c&&(c=f);const l=o+1;c-r>le((ct-i)/l)&&Se("overflow"),i+=(c-r)*l,r=c;for(const f of e)if(f<r&&++i>ct&&Se("overflow"),f===r){let s=i;for(let _=ce;;_+=ce){const d=_<=n?ro:_>=n+Uu?Uu:_-n;if(s<d)break;const b=s-d,v=ce-d;t.push(ii(Za(d+b%v,0))),s=le(b/v)}t.push(ii(Za(s,0))),n=Id(i,l,o===a),i=0,++o}++i,++r}return t.join("")},Kb=function(e){return Sd(e,function(t){return qb.test(t)?Td(t.slice(4).toLowerCase()):t})},Jb=function(e){return Sd(e,function(t){return jb.test(t)?"xn--"+Md(t):t})},Od={version:"2.3.1",ucs2:{decode:Fd,encode:Gb},decode:Td,encode:Md,toASCII:Jb,toUnicode:Kb},Qb={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},Yb={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},Xb={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},e3={default:Qb,zero:Yb,commonmark:Xb},t3=/^(vbscript|javascript|file|data):/,u3=/^data:image\/(gif|png|jpeg|webp);/;function r3(e){const t=e.trim().toLowerCase();return t3.test(t)?u3.test(t):!0}const Pd=["http:","https:","mailto:"];function i3(e){const t=Qs(e,!0);if(t.hostname&&(!t.protocol||Pd.indexOf(t.protocol)>=0))try{t.hostname=Od.toASCII(t.hostname)}catch{}return Ju(Js(t))}function n3(e){const t=Qs(e,!0);if(t.hostname&&(!t.protocol||Pd.indexOf(t.protocol)>=0))try{t.hostname=Od.toUnicode(t.hostname)}catch{}return xt(Js(t),xt.defaultChars+"%")}function ee(e,t){if(!(this instanceof ee))return new ee(e,t);t||Xs(e)||(t=e||{},e="default"),this.inline=new Yu,this.block=new Pr,this.core=new to,this.renderer=new Ht,this.linkify=new X,this.validateLink=r3,this.normalizeLink=i3,this.normalizeLinkText=n3,this.utils=o_,this.helpers=Mr({},d_),this.options={},this.configure(e),t&&this.set(t)}ee.prototype.set=function(e){return Mr(this.options,e),this};ee.prototype.configure=function(e){const t=this;if(Xs(e)){const u=e;if(e=e3[u],!e)throw new Error('Wrong `markdown-it` preset "'+u+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(u){e.components[u].rules&&t[u].ruler.enableOnly(e.components[u].rules),e.components[u].rules2&&t[u].ruler2.enableOnly(e.components[u].rules2)}),this};ee.prototype.enable=function(e,t){let u=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){u=u.concat(this[i].ruler.enable(e,!0))},this),u=u.concat(this.inline.ruler2.enable(e,!0));const r=e.filter(function(i){return u.indexOf(i)<0});if(r.length&&!t)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};ee.prototype.disable=function(e,t){let u=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){u=u.concat(this[i].ruler.disable(e,!0))},this),u=u.concat(this.inline.ruler2.disable(e,!0));const r=e.filter(function(i){return u.indexOf(i)<0});if(r.length&&!t)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};ee.prototype.use=function(e){const t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this};ee.prototype.parse=function(e,t){if(typeof e!="string")throw new Error("Input data should be a String");const u=new this.core.State(e,this,t);return this.core.process(u),u.tokens};ee.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)};ee.prototype.parseInline=function(e,t){const u=new this.core.State(e,this,t);return u.inlineMode=!0,this.core.process(u),u.tokens};ee.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)};function s3(e){const t=document.createElement("div");return nn(y`${e}`,t),t.innerHTML.replaceAll(/<!--([^-]*)-->/gim,"")}class o3 extends At{#e=ee({highlight:(t,u)=>{if(u==="html"){const r=document.createElement("iframe");return r.classList.add("html-view"),r.srcdoc=t,r.sandbox="",r.innerHTML}else return s3(t)}});#t=null;#u=null;update(t,[u,r]){return this.#t===u&&JSON.stringify(r)===this.#u?ne:(this.#t=u,this.#u=JSON.stringify(r),this.render(u,r))}#r=new Map;#i(t){Object.entries(t).forEach(([u])=>{let r;switch(u){case"p":r="paragraph";break;case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":r="heading";break;case"ul":r="bullet_list";break;case"ol":r="ordered_list";break;case"li":r="list_item";break;case"a":r="link";break;case"strong":r="strong";break;case"em":r="em";break}if(!r)return;const i=`${r}_open`;this.#e.renderer.rules[i]=(n,a,o,c,l)=>{const f=n[a],s=t[f.tag]??[];for(const _ of s)f.attrJoin("class",_);return l.renderToken(n,a,o)}})}#n(){for(const[t]of this.#r)delete this.#e.renderer.rules[t];this.#r.clear()}render(t,u){u&&this.#i(u);const r=this.#e.render(t);return this.#n(),x2(r)}}const a3=wt(o3);ee();var c3=Object.create,io=Object.defineProperty,l3=Object.getOwnPropertyDescriptor,zd=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Vt=e=>{throw TypeError(e)},d3=(e,t,u)=>t in e?io(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,Ka=(e,t)=>io(e,"name",{value:t,configurable:!0}),h3=e=>[,,,c3(e?.[zd("metadata")]??null)],Nd=["class","method","getter","setter","accessor","field","value","get","set"],$u=e=>e!==void 0&&typeof e!="function"?Vt("Function expected"):e,f3=(e,t,u,r,i)=>({kind:Nd[e],name:t,metadata:r,addInitializer:n=>u._?Vt("Already initialized"):i.push($u(n||null))}),p3=(e,t)=>d3(t,zd("metadata"),e[3]),ku=(e,t,u,r)=>{for(var i=0,n=e[t>>1],a=n&&n.length;i<a;i++)t&1?n[i].call(u):r=n[i].call(u,r);return r},no=(e,t,u,r,i,n)=>{var a,o,c,l,f,s=t&7,_=!!(t&8),d=!!(t&16),b=s>3?e.length+1:s?_?1:2:0,v=Nd[s+5],x=s>3&&(e[b-1]=[]),k=e[b]||(e[b]=[]),p=s&&(!d&&!_&&(i=i.prototype),s<5&&(s>3||!d)&&l3(s<4?i:{get[u](){return Ja(this,n)},set[u](h){return Qa(this,n,h)}},u));s?d&&s<4&&Ka(n,(s>2?"set ":s>1?"get ":"")+u):Ka(i,u);for(var g=r.length-1;g>=0;g--)l=f3(s,u,c={},e[3],k),s&&(l.static=_,l.private=d,f=l.access={has:d?h=>_3(i,h):h=>u in h},s^3&&(f.get=d?h=>(s^1?Ja:Ar)(h,i,s^4?n:p.get):h=>h[u]),s>2&&(f.set=d?(h,m)=>Qa(h,i,m,s^4?n:p.set):(h,m)=>h[u]=m)),o=(0,r[g])(s?s<4?d?n:p[v]:s>4?void 0:{get:p.get,set:p.set}:i,l),c._=1,s^4||o===void 0?$u(o)&&(s>4?x.unshift(o):s?d?n=o:p[v]=o:i=o):typeof o!="object"||o===null?Vt("Object expected"):($u(a=o.get)&&(p.get=a),$u(a=o.set)&&(p.set=a),$u(a=o.init)&&x.unshift(a));return s||p3(e,i),p&&io(i,u,p),d?s^4?n:p:i},so=(e,t,u)=>t.has(e)||Vt("Cannot "+u),_3=(e,t)=>Object(t)!==t?Vt('Cannot use the "in" operator on this value'):e.has(t),Ja=(e,t,u)=>(so(e,t,"read from private field"),u?u.call(e):t.get(e)),ni=(e,t,u)=>t.has(e)?Vt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,u),Qa=(e,t,u,r)=>(so(e,t,"write to private field"),r?r.call(e,u):t.set(e,u),u),Ar=(e,t,u)=>(so(e,t,"access private method"),u),Rd,Bd,Gi,Ld,ke,oo,ao,Iu,Ud,qd,jd;Ld=[P("a2ui-text")];class $t extends(Gi=E,Bd=[C()],Rd=[C({reflect:!0,attribute:"usage-hint"})],Gi){constructor(){super(...arguments),ni(this,Iu),ni(this,oo,ku(ke,8,this,null)),ku(ke,11,this),ni(this,ao,ku(ke,12,this,null)),ku(ke,15,this)}render(){const t=hn(this.theme.components.Text.all,this.usageHint?this.theme.components.Text[this.usageHint]:{});return y`<section
      class=${D(t)}
      style=${this.theme.additionalStyles?.Text?q(Ar(this,Iu,jd).call(this)):$}
    >
      ${Ar(this,Iu,Ud).call(this)}
    </section>`}}ke=h3(Gi);oo=new WeakMap;ao=new WeakMap;Iu=new WeakSet;Ud=function(){let e=null;if(this.text&&typeof this.text=="object"){if("literalString"in this.text&&this.text.literalString)e=this.text.literalString;else if("literal"in this.text&&this.text.literal!==void 0)e=this.text.literal;else if(this.text&&"path"in this.text&&this.text.path){if(!this.processor||!this.component)return y`(no model)`;const u=this.processor.getData(this.component,this.text.path,this.surfaceId??M.DEFAULT_SURFACE_ID);u!=null&&(e=u.toString())}}if(e==null)return y`(empty)`;let t=e;switch(this.usageHint){case"h1":t=`# ${t}`;break;case"h2":t=`## ${t}`;break;case"h3":t=`### ${t}`;break;case"h4":t=`#### ${t}`;break;case"h5":t=`##### ${t}`;break;case"caption":t=`*${t}*`;break}return y`${a3(t,Cf(this.theme.markdown,["ol","ul","li"],{}))}`};qd=function(e){return typeof e!="object"||Array.isArray(e)||!e?!1:["h1","h2","h3","h4","h5","h6","caption","body"].every(u=>u in e)};jd=function(){let e={};const t=this.theme.additionalStyles?.Text;if(!t)return e;if(Ar(this,Iu,qd).call(this,t)){const u=this.usageHint??"body";e=t[u]}else e=t;return e};no(ke,4,"text",Bd,$t,oo);no(ke,4,"usageHint",Rd,$t,ao);$t=no(ke,0,"Text",Ld,$t);$t.styles=[R,O`
      :host {
        display: block;
        flex: var(--weight);
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        line-height: inherit;
        font: inherit;
      }
    `];ku(ke,1,$t);var b3=Object.create,co=Object.defineProperty,m3=Object.getOwnPropertyDescriptor,Wd=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Gt=e=>{throw TypeError(e)},g3=(e,t,u)=>t in e?co(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,Ya=(e,t)=>co(e,"name",{value:t,configurable:!0}),v3=e=>[,,,b3(e?.[Wd("metadata")]??null)],Hd=["class","method","getter","setter","accessor","field","value","get","set"],Cu=e=>e!==void 0&&typeof e!="function"?Gt("Function expected"):e,x3=(e,t,u,r,i)=>({kind:Hd[e],name:t,metadata:r,addInitializer:n=>u._?Gt("Already initialized"):i.push(Cu(n||null))}),y3=(e,t)=>g3(t,Wd("metadata"),e[3]),Zi=(e,t,u,r)=>{for(var i=0,n=e[t>>1],a=n&&n.length;i<a;i++)t&1?n[i].call(u):r=n[i].call(u,r);return r},Vd=(e,t,u,r,i,n)=>{var a,o,c,l,f,s=t&7,_=!!(t&8),d=!!(t&16),b=s>3?e.length+1:s?_?1:2:0,v=Hd[s+5],x=s>3&&(e[b-1]=[]),k=e[b]||(e[b]=[]),p=s&&(!d&&!_&&(i=i.prototype),s<5&&(s>3||!d)&&m3(s<4?i:{get[u](){return Xa(this,n)},set[u](h){return tc(this,n,h)}},u));s?d&&s<4&&Ya(n,(s>2?"set ":s>1?"get ":"")+u):Ya(i,u);for(var g=r.length-1;g>=0;g--)l=x3(s,u,c={},e[3],k),s&&(l.static=_,l.private=d,f=l.access={has:d?h=>$3(i,h):h=>u in h},s^3&&(f.get=d?h=>(s^1?Xa:Gd)(h,i,s^4?n:p.get):h=>h[u]),s>2&&(f.set=d?(h,m)=>tc(h,i,m,s^4?n:p.set):(h,m)=>h[u]=m)),o=(0,r[g])(s?s<4?d?n:p[v]:s>4?void 0:{get:p.get,set:p.set}:i,l),c._=1,s^4||o===void 0?Cu(o)&&(s>4?x.unshift(o):s?d?n=o:p[v]=o:i=o):typeof o!="object"||o===null?Gt("Object expected"):(Cu(a=o.get)&&(p.get=a),Cu(a=o.set)&&(p.set=a),Cu(a=o.init)&&x.unshift(a));return s||y3(e,i),p&&co(i,u,p),d?s^4?n:p:i},lo=(e,t,u)=>t.has(e)||Gt("Cannot "+u),$3=(e,t)=>Object(t)!==t?Gt('Cannot use the "in" operator on this value'):e.has(t),Xa=(e,t,u)=>(lo(e,t,"read from private field"),u?u.call(e):t.get(e)),ec=(e,t,u)=>t.has(e)?Gt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,u),tc=(e,t,u,r)=>(lo(e,t,"write to private field"),r?r.call(e,u):t.set(e,u),u),Gd=(e,t,u)=>(lo(e,t,"access private method"),u),Zd,Ki,Kd,kt,ho,Ji,Jd;Kd=[P("a2ui-video")];class qu extends(Ki=E,Zd=[C()],Ki){constructor(){super(...arguments),ec(this,Ji),ec(this,ho,Zi(kt,8,this,null)),Zi(kt,11,this)}render(){return y`<section
      class=${D(this.theme.components.Video)}
      style=${this.theme.additionalStyles?.Video?q(this.theme.additionalStyles?.Video):$}
    >
      ${Gd(this,Ji,Jd).call(this)}
    </section>`}}kt=v3(Ki);ho=new WeakMap;Ji=new WeakSet;Jd=function(){if(!this.url)return $;if(this.url&&typeof this.url=="object"){if("literalString"in this.url)return y`<video controls src=${this.url.literalString} />`;if("literal"in this.url)return y`<video controls src=${this.url.literal} />`;if(this.url&&"path"in this.url&&this.url.path){if(!this.processor||!this.component)return y`(no processor)`;const e=this.processor.getData(this.component,this.url.path,this.surfaceId??M.DEFAULT_SURFACE_ID);return e?typeof e!="string"?y`Invalid video URL`:y`<video controls src=${e} />`:y`Invalid video URL`}}return y`(empty)`};Vd(kt,4,"url",Zd,qu,ho);qu=Vd(kt,0,"Video",Kd,qu);qu.styles=[R,O`
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
        flex: var(--weight);
        min-height: 0;
        overflow: auto;
      }

      video {
        display: block;
        width: 100%;
      }
    `];Zi(kt,1,qu);const k3=[{beginRendering:{surfaceId:"demo-text",root:"demo-text-root"}},{surfaceUpdate:{surfaceId:"demo-text",components:[{id:"demo-text-root",component:{TextField:{label:{literalString:"Enter some text"},text:{path:"galleryData/textField"}}}}]}},{dataModelUpdate:{surfaceId:"demo-text",contents:[{key:"galleryData",valueMap:[{key:"textField",valueString:"Hello World"},{key:"checkbox",valueBoolean:!1},{key:"checkboxChecked",valueBoolean:!0},{key:"slider",valueNumber:30},{key:"date",valueString:"2025-10-26"},{key:"favorites",valueMap:[{key:"0",valueString:"A"}]},{key:"favoritesChips",valueMap:[]},{key:"favoritesFilter",valueMap:[]}]}]}},{beginRendering:{surfaceId:"demo-text-regex",root:"demo-text-regex-root"}},{surfaceUpdate:{surfaceId:"demo-text-regex",components:[{id:"demo-text-regex-root",component:{TextField:{label:{literalString:"Enter exactly 5 digits"},text:{path:"galleryData/textFieldRegex"},validationRegexp:"^d{5}$"}}}]}},{dataModelUpdate:{surfaceId:"demo-text-regex",contents:[{key:"galleryData",valueMap:[{key:"textField",valueString:"Hello World"},{key:"checkbox",valueBoolean:!1},{key:"checkboxChecked",valueBoolean:!0},{key:"slider",valueNumber:30},{key:"date",valueString:"2025-10-26"},{key:"favorites",valueMap:[{key:"0",valueString:"A"}]},{key:"favoritesChips",valueMap:[]},{key:"favoritesFilter",valueMap:[]}]}]}},{beginRendering:{surfaceId:"demo-checkbox",root:"demo-checkbox-root"}},{surfaceUpdate:{surfaceId:"demo-checkbox",components:[{id:"demo-checkbox-root",component:{CheckBox:{label:{literalString:"Toggle me"},value:{path:"galleryData/checkbox"}}}}]}},{dataModelUpdate:{surfaceId:"demo-checkbox",contents:[{key:"galleryData",valueMap:[{key:"textField",valueString:"Hello World"},{key:"checkbox",valueBoolean:!1},{key:"checkboxChecked",valueBoolean:!0},{key:"slider",valueNumber:30},{key:"date",valueString:"2025-10-26"},{key:"favorites",valueMap:[{key:"0",valueString:"A"}]},{key:"favoritesChips",valueMap:[]},{key:"favoritesFilter",valueMap:[]}]}]}},{beginRendering:{surfaceId:"demo-slider",root:"demo-slider-root"}},{surfaceUpdate:{surfaceId:"demo-slider",components:[{id:"demo-slider-root",component:{Slider:{value:{path:"galleryData/slider"},minValue:0,maxValue:100}}}]}},{dataModelUpdate:{surfaceId:"demo-slider",contents:[{key:"galleryData",valueMap:[{key:"textField",valueString:"Hello World"},{key:"checkbox",valueBoolean:!1},{key:"checkboxChecked",valueBoolean:!0},{key:"slider",valueNumber:30},{key:"date",valueString:"2025-10-26"},{key:"favorites",valueMap:[{key:"0",valueString:"A"}]},{key:"favoritesChips",valueMap:[]},{key:"favoritesFilter",valueMap:[]}]}]}},{beginRendering:{surfaceId:"demo-date",root:"demo-date-root"}},{surfaceUpdate:{surfaceId:"demo-date",components:[{id:"demo-date-root",component:{DateTimeInput:{value:{path:"galleryData/date"},enableDate:!0}}}]}},{dataModelUpdate:{surfaceId:"demo-date",contents:[{key:"galleryData",valueMap:[{key:"textField",valueString:"Hello World"},{key:"checkbox",valueBoolean:!1},{key:"checkboxChecked",valueBoolean:!0},{key:"slider",valueNumber:30},{key:"date",valueString:"2025-10-26"},{key:"favorites",valueMap:[{key:"0",valueString:"A"}]},{key:"favoritesChips",valueMap:[]},{key:"favoritesFilter",valueMap:[]}]}]}},{beginRendering:{surfaceId:"demo-multichoice",root:"demo-multichoice-root"}},{surfaceUpdate:{surfaceId:"demo-multichoice",components:[{id:"demo-multichoice-root",component:{MultipleChoice:{selections:{path:"galleryData/favorites"},options:[{label:{literalString:"Apple"},value:"A"},{label:{literalString:"Banana"},value:"B"},{label:{literalString:"Cherry"},value:"C"}]}}}]}},{dataModelUpdate:{surfaceId:"demo-multichoice",contents:[{key:"galleryData",valueMap:[{key:"textField",valueString:"Hello World"},{key:"checkbox",valueBoolean:!1},{key:"checkboxChecked",valueBoolean:!0},{key:"slider",valueNumber:30},{key:"date",valueString:"2025-10-26"},{key:"favorites",valueMap:[{key:"0",valueString:"A"}]},{key:"favoritesChips",valueMap:[]},{key:"favoritesFilter",valueMap:[]}]}]}},{beginRendering:{surfaceId:"demo-button",root:"demo-button-root"}},{surfaceUpdate:{surfaceId:"demo-button",components:[{id:"demo-button-text",component:{Text:{text:{literalString:"Trigger Action"}}}},{id:"demo-button-root",component:{Button:{child:"demo-button-text",primary:!0,action:{name:"custom_action",context:[{key:"info",value:{literalString:"Custom Button Clicked"}}]}}}}]}},{beginRendering:{surfaceId:"response-surface",root:"response-text"}},{surfaceUpdate:{surfaceId:"response-surface",components:[{id:"response-text",component:{Text:{text:{literalString:"Interact with the gallery to see responses."}}}}]}}];var C3=Object.create,fo=Object.defineProperty,w3=Object.getOwnPropertyDescriptor,Qd=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Zt=e=>{throw TypeError(e)},A3=(e,t,u)=>t in e?fo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,uc=(e,t)=>fo(e,"name",{value:t,configurable:!0}),E3=e=>[,,,C3(e?.[Qd("metadata")]??null)],Yd=["class","method","getter","setter","accessor","field","value","get","set"],wu=e=>e!==void 0&&typeof e!="function"?Zt("Function expected"):e,D3=(e,t,u,r,i)=>({kind:Yd[e],name:t,metadata:r,addInitializer:n=>u._?Zt("Already initialized"):i.push(wu(n||null))}),S3=(e,t)=>A3(t,Qd("metadata"),e[3]),Qi=(e,t,u,r)=>{for(var i=0,n=e[t>>1],a=n&&n.length;i<a;i++)t&1?n[i].call(u):r=n[i].call(u,r);return r},Xd=(e,t,u,r,i,n)=>{var a,o,c,l,f,s=t&7,_=!!(t&8),d=!!(t&16),b=s>3?e.length+1:s?_?1:2:0,v=Yd[s+5],x=s>3&&(e[b-1]=[]),k=e[b]||(e[b]=[]),p=s&&(!d&&!_&&(i=i.prototype),s<5&&(s>3||!d)&&w3(s<4?i:{get[u](){return ju(this,n)},set[u](h){return rc(this,n,h)}},u));s?d&&s<4&&uc(n,(s>2?"set ":s>1?"get ":"")+u):uc(i,u);for(var g=r.length-1;g>=0;g--)l=D3(s,u,c={},e[3],k),s&&(l.static=_,l.private=d,f=l.access={has:d?h=>F3(i,h):h=>u in h},s^3&&(f.get=d?h=>(s^1?ju:eh)(h,i,s^4?n:p.get):h=>h[u]),s>2&&(f.set=d?(h,m)=>rc(h,i,m,s^4?n:p.set):(h,m)=>h[u]=m)),o=(0,r[g])(s?s<4?d?n:p[v]:s>4?void 0:{get:p.get,set:p.set}:i,l),c._=1,s^4||o===void 0?wu(o)&&(s>4?x.unshift(o):s?d?n=o:p[v]=o:i=o):typeof o!="object"||o===null?Zt("Object expected"):(wu(a=o.get)&&(p.get=a),wu(a=o.set)&&(p.set=a),wu(a=o.init)&&x.unshift(a));return s||S3(e,i),p&&fo(i,u,p),d?s^4?n:p:i},po=(e,t,u)=>t.has(e)||Zt("Cannot "+u),F3=(e,t)=>Object(t)!==t?Zt('Cannot use the "in" operator on this value'):e.has(t),ju=(e,t,u)=>(po(e,t,"read from private field"),u?u.call(e):t.get(e)),si=(e,t,u)=>t.has(e)?Zt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,u),rc=(e,t,u,r)=>(po(e,t,"write to private field"),r?r.call(e,u):t.set(e,u),u),eh=(e,t,u)=>(po(e,t,"access private method"),u),th,Yi,uh,Ct,_o,Wu,Xi,rh;const I3={components:{AudioPlayer:{},Button:{},Card:{},Column:{},CheckBox:{container:{},element:{},label:{}},DateTimeInput:{container:{},element:{},label:{}},Divider:{},Image:{all:{},icon:{},avatar:{},smallFeature:{},mediumFeature:{},largeFeature:{},header:{}},Icon:{},List:{},Modal:{backdrop:{},element:{}},MultipleChoice:{container:{},element:{},label:{}},Row:{},Slider:{container:{},element:{},label:{}},Tabs:{container:{},element:{},controls:{all:{},selected:{}}},Text:{all:{},h1:{},h2:{},h3:{},h4:{},h5:{},caption:{},body:{}},TextField:{container:{},element:{},label:{}},Video:{}},elements:{a:{},audio:{},body:{},button:{},h1:{},h2:{},h3:{},h4:{},h5:{},header:{},html:{},img:{},input:{},label:{},li:{},ol:{},p:{},section:{},span:{},ul:{},video:{}}},T3=[{id:"demo-text",title:"TextField",description:"Allows user to enter text."},{id:"demo-text-regex",title:"TextField (Regex)",description:"TextField with 5-digit regex validation."},{id:"demo-checkbox",title:"CheckBox",description:"A binary toggle."},{id:"demo-slider",title:"Slider",description:"Select a value from a range."},{id:"demo-date",title:"DateTimeInput",description:"Pick a date or time."},{id:"demo-multichoice",title:"MultipleChoice",description:"Select valid options from a list."},{id:"demo-button",title:"Button",description:"Triggers a client-side action."}];uh=[P("a2ui-sample-app")];class Hu extends(Yi=cc(st),th=[Yh({context:qc})],Yi){constructor(){super(...arguments),si(this,Xi),si(this,_o,Qi(Ct,8,this,I3)),Qi(Ct,11,this),si(this,Wu,Of.createSignalA2uiMessageProcessor())}connectedCallback(){super.connectedCallback(),ju(this,Wu).processMessages(k3)}render(){return y`
      <header>
        <h1>A2UI Static Sample</h1>
      </header>
      <main>
        ${T3.map(t=>y`
          <div class="card">
            <h2>${t.title}</h2>
            <p>${t.description}</p>
            <div class="content">
              ${eh(this,Xi,rh).call(this,t.id)}
            </div>
          </div>
        `)}
      </main>
    `}}Ct=E3(Yi);_o=new WeakMap;Wu=new WeakMap;Xi=new WeakSet;rh=function(e){const t=ju(this,Wu).getSurfaces().get(e);return t?y`
      <a2ui-surface
        .surface=${{...t}}
        .surfaceId=${e}
        .processor=${ju(this,Wu)}
      ></a2ui-surface>
    `:y`<div>Surface not found</div>`};Xd(Ct,4,"theme",th,Hu,_o);Hu=Xd(Ct,0,"A2UISampleApp",uh,Hu);Hu.styles=[an(Bc),O`
      :host {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background: #0f172a;
        color: #f1f5f9;
        font-family: sans-serif;
      }

      header {
        padding: 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      main {
        flex: 1;
        overflow-y: auto;
        padding: 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
      }

      .card {
        background: #1e293b;
        border-radius: 8px;
        padding: 1.5rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      h2 { margin-top: 0; font-size: 1.25rem; }
      p { color: #94a3b8; font-size: 0.875rem; }
      
      .content {
        margin-top: 1rem;
        padding: 1rem;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 4px;
      }
    `];Qi(Ct,1,Hu);
