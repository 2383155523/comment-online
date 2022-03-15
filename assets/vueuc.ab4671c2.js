import{o as F,a as X}from"./evtd.5b1ed12a.js";import{d as pt,b as ct}from"./seemly.22a54011.js";import{c as mt,F as J,C as bt,e as M,p as vt,q as wt,a as Y,r as A,o as H,k as Q,t as O,b as xt,h as g,u as yt,g as Z,j as z,n as gt,z as $t}from"./@vue.52a39649.js";import{u as Mt}from"./@css-render.75c7e5e3.js";import{f as Et,u as N,o as zt,i as Ft}from"./vooks.93cfeba1.js";import{C as At}from"./css-render.d5050412.js";import{z as St}from"./vdirs.03f40802.js";import{i as Tt}from"./resize-observer-polyfill.8deb1e21.js";function D(n,t,e="default"){const o=t[e];if(o===void 0)throw new Error(`[vueuc/${n}]: slot[${e}] is empty.`);return o()}function I(n,t=!0,e=[]){return n.forEach(o=>{if(o!==null){if(typeof o!="object"){(typeof o=="string"||typeof o=="number")&&e.push(mt(String(o)));return}if(Array.isArray(o)){I(o,t,e);return}if(o.type===J){if(o.children===null)return;Array.isArray(o.children)&&I(o.children,t,e)}else o.type!==bt&&e.push(o)}}),e}function _(n,t,e="default"){const o=t[e];if(o===void 0)throw new Error(`[vueuc/${n}]: slot[${e}] is empty.`);const a=I(o());if(a.length===1)return a[0];throw new Error(`[vueuc/${n}]: slot[${e}] should have exactly one child.`)}let y=null;function R(){if(y===null&&(y=document.getElementById("v-binder-view-measurer"),y===null)){y=document.createElement("div"),y.id="v-binder-view-measurer";const{style:n}=y;n.position="fixed",n.left="0",n.right="0",n.top="0",n.bottom="0",n.pointerEvents="none",n.visibility="hidden",document.body.appendChild(y)}return y.getBoundingClientRect()}function Bt(n,t){const e=R();return{top:t,left:n,height:0,width:0,right:e.width-n,bottom:e.height-t}}function L(n){const t=n.getBoundingClientRect(),e=R();return{left:t.left-e.left,top:t.top-e.top,bottom:e.height+e.top-t.bottom,right:e.width+e.left-t.right,width:t.width,height:t.height}}function Ot(n){return n.nodeType===9?null:n.parentNode}function tt(n){if(n===null)return null;const t=Ot(n);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:e,overflowX:o,overflowY:a}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(e+a+o))return t}return tt(t)}const Ct=M({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(n){var t;vt("VBinder",(t=wt())===null||t===void 0?void 0:t.proxy);const e=Y("VBinder",null),o=A(null),a=r=>{o.value=r,e&&n.syncTargetWithParent&&e.setTargetRef(r)};let f=[];const p=()=>{let r=o.value;for(;r=tt(r),r!==null;)f.push(r);for(const c of f)X("scroll",c,w,!0)},m=()=>{for(const r of f)F("scroll",r,w,!0);f=[]},l=new Set,b=r=>{l.size===0&&p(),l.has(r)||l.add(r)},v=r=>{l.has(r)&&l.delete(r),l.size===0&&m()},w=()=>{pt(s)},s=()=>{l.forEach(r=>r())},u=new Set,h=r=>{u.size===0&&X("resize",window,i),u.has(r)||u.add(r)},d=r=>{u.has(r)&&u.delete(r),u.size===0&&F("resize",window,i)},i=()=>{u.forEach(r=>r())};return H(()=>{F("resize",window,i),m()}),{targetRef:o,setTargetRef:a,addScrollListener:b,removeScrollListener:v,addResizeListener:h,removeResizeListener:d}},render(){return D("binder",this.$slots)}});var Zt=Ct,Rt=M({name:"Target",setup(){const{setTargetRef:n,syncTarget:t}=Y("VBinder");return{syncTarget:t,setTargetDirective:{mounted:n,updated:n}}},render(){const{syncTarget:n,setTargetDirective:t}=this;return n?Q(_("follower",this.$slots),[[t]]):_("follower",this.$slots)}});function j(n,t){console.error(`[vueuc/${n}]: ${t}`)}const{c:T}=At(),Lt="vueuc-style";function U(n){return typeof n=="string"?document.querySelector(n):n()}var Vt=M({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(n){return{showTeleport:Et(O(n,"show")),mergedTo:xt(()=>{const{to:t}=n;return t!=null?t:"body"})}},render(){return this.showTeleport?this.disabled?D("lazy-teleport",this.$slots):g(yt,{disabled:this.disabled,to:this.mergedTo},D("lazy-teleport",this.$slots)):null}});const B={top:"bottom",bottom:"top",left:"right",right:"left"},P={start:"end",center:"center",end:"start"},V={top:"height",bottom:"height",left:"width",right:"width"},Xt={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},Dt={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},It={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},q={top:!0,bottom:!1,left:!0,right:!1},K={top:"end",bottom:"start",left:"end",right:"start"};function Yt(n,t,e,o,a,f){if(!a||f)return{placement:n,top:0,left:0};const[p,m]=n.split("-");let l=m!=null?m:"center",b={top:0,left:0};const v=(u,h,d)=>{let i=0,r=0;const c=e[u]-t[h]-t[u];return c>0&&o&&(d?r=q[h]?c:-c:i=q[h]?c:-c),{left:i,top:r}},w=p==="left"||p==="right";if(l!=="center"){const u=It[n],h=B[u],d=V[u];if(e[d]>t[d]){if(t[u]+t[d]<e[d]){const i=(e[d]-t[d])/2;t[u]<i||t[h]<i?t[u]<t[h]?(l=P[m],b=v(d,h,w)):b=v(d,u,w):l="center"}}else e[d]<t[d]&&t[h]<0&&t[u]>t[h]&&(l=P[m])}else{const u=p==="bottom"||p==="top"?"left":"top",h=B[u],d=V[u],i=(e[d]-t[d])/2;(t[u]<i||t[h]<i)&&(t[u]>t[h]?(l=K[u],b=v(d,u,w)):(l=K[h],b=v(d,h,w)))}let s=p;return t[p]<e[V[p]]&&t[p]<t[B[p]]&&(s=B[p]),{placement:l!=="center"?`${s}-${l}`:s,left:b.left,top:b.top}}function Ht(n,t){return t?Dt[n]:Xt[n]}function kt(n,t,e,o,a,f){if(f)switch(n){case"bottom-start":return{top:`${Math.round(e.top-t.top+e.height)}px`,left:`${Math.round(e.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(e.top-t.top+e.height)}px`,left:`${Math.round(e.left-t.left+e.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(e.top-t.top)}px`,left:`${Math.round(e.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(e.top-t.top)}px`,left:`${Math.round(e.left-t.left+e.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(e.top-t.top)}px`,left:`${Math.round(e.left-t.left+e.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(e.top-t.top+e.height)}px`,left:`${Math.round(e.left-t.left+e.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(e.top-t.top)}px`,left:`${Math.round(e.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(e.top-t.top+e.height)}px`,left:`${Math.round(e.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(e.top-t.top)}px`,left:`${Math.round(e.left-t.left+e.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(e.top-t.top+e.height/2)}px`,left:`${Math.round(e.left-t.left+e.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(e.top-t.top+e.height/2)}px`,left:`${Math.round(e.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(e.top-t.top+e.height)}px`,left:`${Math.round(e.left-t.left+e.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(n){case"bottom-start":return{top:`${Math.round(e.top-t.top+e.height+o)}px`,left:`${Math.round(e.left-t.left+a)}px`,transform:""};case"bottom-end":return{top:`${Math.round(e.top-t.top+e.height+o)}px`,left:`${Math.round(e.left-t.left+e.width+a)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(e.top-t.top+o)}px`,left:`${Math.round(e.left-t.left+a)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(e.top-t.top+o)}px`,left:`${Math.round(e.left-t.left+e.width+a)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(e.top-t.top+o)}px`,left:`${Math.round(e.left-t.left+e.width+a)}px`,transform:""};case"right-end":return{top:`${Math.round(e.top-t.top+e.height+o)}px`,left:`${Math.round(e.left-t.left+e.width+a)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(e.top-t.top+o)}px`,left:`${Math.round(e.left-t.left+a)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(e.top-t.top+e.height+o)}px`,left:`${Math.round(e.left-t.left+a)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(e.top-t.top+o)}px`,left:`${Math.round(e.left-t.left+e.width/2+a)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(e.top-t.top+e.height/2+o)}px`,left:`${Math.round(e.left-t.left+e.width+a)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(e.top-t.top+e.height/2+o)}px`,left:`${Math.round(e.left-t.left+a)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(e.top-t.top+e.height+o)}px`,left:`${Math.round(e.left-t.left+e.width/2+a)}px`,transform:"translateX(-50%)"}}}const Wt=T([T(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),T(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[T("> *",{pointerEvents:"all"})])]);var te=M({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(n){const t=Y("VBinder"),e=N(()=>n.enabled!==void 0?n.enabled:n.show),o=A(null),a=A(null),f=()=>{const{syncTrigger:s}=n;s.includes("scroll")&&t.addScrollListener(l),s.includes("resize")&&t.addResizeListener(l)},p=()=>{t.removeScrollListener(l),t.removeResizeListener(l)};Z(()=>{e.value&&(l(),f())});const m=Mt();Wt.mount({id:"vueuc/binder",head:!0,anchorMetaName:Lt,ssr:m}),H(()=>{p()}),zt(()=>{e.value&&l()});const l=()=>{if(!e.value)return;const s=o.value;if(s===null)return;const u=t.targetRef,{x:h,y:d,overlap:i}=n,r=h!==void 0&&d!==void 0?Bt(h,d):L(u);s.style.setProperty("--v-target-width",`${Math.round(r.width)}px`),s.style.setProperty("--v-target-height",`${Math.round(r.height)}px`);const{width:c,minWidth:x,placement:S,internalShift:it,flip:st}=n;s.setAttribute("v-placement",S),i?s.setAttribute("v-overlap",""):s.removeAttribute("v-overlap");const{style:$}=s;c==="target"?$.width=`${r.width}px`:c!==void 0?$.width=c:$.width="",x==="target"?$.minWidth=`${r.width}px`:x!==void 0?$.minWidth=x:$.minWidth="";const lt=L(s),ut=L(a.value),{left:k,top:W,placement:C}=Yt(S,r,lt,it,st,i),at=Ht(C,i),{left:dt,top:ft,transform:ht}=kt(C,ut,r,W,k,i);s.setAttribute("v-placement",C),s.style.setProperty("--v-offset-left",`${Math.round(k)}px`),s.style.setProperty("--v-offset-top",`${Math.round(W)}px`),s.style.transform=`translateX(${dt}) translateY(${ft}) ${ht}`,s.style.transformOrigin=at};z(e,s=>{s?(f(),b()):p()});const b=()=>{gt().then(l).catch(s=>console.error(s))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(s=>{z(O(n,s),l)}),["teleportDisabled"].forEach(s=>{z(O(n,s),b)}),z(O(n,"syncTrigger"),s=>{s.includes("resize")?t.addResizeListener(l):t.removeResizeListener(l),s.includes("scroll")?t.addScrollListener(l):t.removeScrollListener(l)});const v=Ft(),w=N(()=>{const{to:s}=n;if(s!==void 0)return s;!v.value});return{VBinder:t,mergedEnabled:e,offsetContainerRef:a,followerRef:o,mergedTo:w,syncPosition:l}},render(){return g(Vt,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var n,t;const e=g("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[g("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(n=this.$slots).default)===null||t===void 0?void 0:t.call(n))]);return this.zindexable?Q(e,[[St,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):e}})}});class Nt{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new Tt(this.handleResize),this.elHandlersMap=new Map}handleResize(t){for(const e of t){const o=this.elHandlersMap.get(e.target);o!==void 0&&o(e)}}registerHandler(t,e){this.elHandlersMap.set(t,e),this.observer.observe(t)}unregisterHandler(t){!this.elHandlersMap.has(t)||(this.elHandlersMap.delete(t),this.observer.unobserve(t))}}var G=new Nt,ee=M({name:"ResizeObserver",props:{onResize:Function},setup(n){return{registered:!1,handleResize(t){const{onResize:e}=n;e!==void 0&&e(t)}}},mounted(){const n=this.$el;if(n===void 0){j("resize-observer","$el does not exist.");return}if(n.nextElementSibling!==n.nextSibling&&n.nodeType===3&&n.nodeValue!==""){j("resize-observer","$el can not be observed (it may be a text node).");return}n.nextElementSibling!==null&&(G.registerHandler(n.nextElementSibling,this.handleResize),this.registered=!0)},beforeUnmount(){this.registered&&G.unregisterHandler(this.$el.nextElementSibling)},render(){return $t(this.$slots,"default")}});function et(n){return n instanceof HTMLElement}function nt(n){for(let t=0;t<n.childNodes.length;t++){const e=n.childNodes[t];if(et(e)&&(ot(e)||nt(e)))return!0}return!1}function rt(n){for(let t=n.childNodes.length-1;t>=0;t--){const e=n.childNodes[t];if(et(e)&&(ot(e)||rt(e)))return!0}return!1}function ot(n){if(!_t(n))return!1;try{n.focus()}catch{}return document.activeElement===n}function _t(n){if(n.tabIndex>0||n.tabIndex===0&&n.getAttribute("tabIndex")!==null)return!0;if(n.getAttribute("disabled"))return!1;switch(n.nodeName){case"A":return!!n.href&&n.rel!=="ignore";case"INPUT":return n.type!=="hidden"&&n.type!=="file";case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}let E=[];const ne=M({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(n){const t=ct(),e=A(null),o=A(null);let a=!1,f=!1;const p=document.activeElement;function m(){return E[E.length-1]===t}function l(i){var r;i.code==="Escape"&&m()&&((r=n.onEsc)===null||r===void 0||r.call(n))}Z(()=>{z(()=>n.active,i=>{i?(w(),X("keydown",document,l)):(F("keydown",document,l),a&&s())},{immediate:!0})}),H(()=>{F("keydown",document,l),a&&s()});function b(i){if(!f&&m()){const r=v();if(r===null||r.contains(i.target))return;u("first")}}function v(){const i=e.value;if(i===null)return null;let r=i;for(;r=r.nextSibling,!(r===null||r instanceof Element&&r.tagName==="DIV"););return r}function w(){var i;if(!n.disabled){if(E.push(t),n.autoFocus){const{initialFocusTo:r}=n;r===void 0?u("first"):(i=U(r))===null||i===void 0||i.focus()}a=!0,document.addEventListener("focus",b,!0)}}function s(){var i;if(n.disabled||(document.removeEventListener("focus",b,!0),E=E.filter(c=>c!==t),m()))return;const{finalFocusTo:r}=n;r!==void 0?(i=U(r))===null||i===void 0||i.focus():n.returnFocusOnDeactivated&&p instanceof HTMLElement&&(f=!0,p.focus({preventScroll:!0}),f=!1)}function u(i){if(!!m()&&n.active){const r=e.value,c=o.value;if(r!==null&&c!==null){const x=v();if(x==null||x===c){f=!0,r.focus({preventScroll:!0}),f=!1;return}f=!0;const S=i==="first"?nt(x):rt(x);f=!1,S||(f=!0,r.focus({preventScroll:!0}),f=!1)}}}function h(i){if(f)return;const r=v();r!==null&&(i.relatedTarget!==null&&r.contains(i.relatedTarget)?u("last"):u("first"))}function d(i){f||(i.relatedTarget!==null&&i.relatedTarget===e.value?u("last"):u("first"))}return{focusableStartRef:e,focusableEndRef:o,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:h,handleEndFocus:d}},render(){const{default:n}=this.$slots;if(n===void 0)return null;if(this.disabled)return n();const{active:t,focusableStyle:e}=this;return g(J,null,[g("div",{"aria-hidden":"true",tabindex:t?"0":"-1",ref:"focusableStartRef",style:e,onFocus:this.handleStartFocus}),n(),g("div",{"aria-hidden":"true",style:e,ref:"focusableEndRef",tabindex:t?"0":"-1",onFocus:this.handleEndFocus})])}});export{ne as F,Vt as L,ee as V,te as a,Rt as b,Zt as c};
