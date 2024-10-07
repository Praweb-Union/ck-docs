/*! For license information please see 5784.48f9f263.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5784],{5784:(t,e,s)=>{s.r(e),s.d(e,{CanarySearch:()=>v});var r=s(4440),n=s(2697),a=s(4715),o=s(1674),i=s(3277),c=s(6468),l=s(4435),u=s(556),h=s(2208),d=Object.defineProperty,p=Object.getOwnPropertyDescriptor,b=(t,e,s,r)=>{for(var n,a=r>1?void 0:r?p(e,s):e,o=t.length-1;o>=0;o--)(n=t[o])&&(a=(r?n(e,s,a):n(a))||a);return r&&a&&d(e,s,a),a};let v=class extends r.s{constructor(){super(...arguments),this.MODE=l.M,this._containerRef=(0,o.e)()}connectedCallback(){super.connectedCallback(),this.dispatchEvent((0,h.lh)({type:"register_mode",data:this.MODE}))}render(){return this._mode&&this._mode.current===this.MODE?r.x`
          <div class="container" part="container">
            <div class="head" part="head">
              <slot name="head"></slot>
            </div>
            <div
              class="scroll-container"
              ${(0,o.n)(this._containerRef)}
              part="scroll-container"
            >
              <div class="body" part="body">
                <slot name="body"></slot>
              </div>
            </div>
          </div>
        `:r.T}};v.styles=[u.g,u.s,r.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: shortcuts */
.container{width:100%;}
@media (min-width: 640px){
.container{max-width:640px;}
}
@media (min-width: 768px){
.container{max-width:768px;}
}
@media (min-width: 1024px){
.container{max-width:1024px;}
}
@media (min-width: 1280px){
.container{max-width:1280px;}
}
@media (min-width: 1536px){
.container{max-width:1536px;}
}
/* layer: default */
.sticky{position:sticky;}
.static{position:static;}
.flex{display:flex;};
    `,r.i`
      .container {
        display: flex;
        flex-direction: column;
      }

      .head {
        position: sticky;
        top: 0px;
        background-color: var(--canary-color-gray-100);
        z-index: 50;
        padding-left: 12px;
        margin-bottom: 4px;
      }

      .body {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
    `],b([(0,i.c)({context:c.pC,subscribe:!0}),(0,a.r)()],v.prototype,"_mode",2),v=b([(0,n.t)("canary-search")],v)},4435:(t,e,s)=>{s.d(e,{M:()=>r,a:()=>n});const r="Search",n="Ask"},3277:(t,e,s)=>{s.d(e,{c:()=>n});var r=s(5793);function n({context:t,subscribe:e}){return(s,n)=>{"object"==typeof n?n.addInitializer((function(){new r.s(this,{context:t,callback:t=>{s.set.call(this,t)},subscribe:e})})):s.constructor.addInitializer((s=>{new r.s(s,{context:t,callback:t=>{s[n]=t},subscribe:e})}))}}},5793:(t,e,s)=>{s.d(e,{s:()=>n});var r=s(699);class n{constructor(t,e,s,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=s,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new r.s(this.context,this.t,this.subscribe))}}},8030:(t,e,s)=>{s.d(e,{i:()=>o});var r=s(699);class n{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const s=e||!Object.is(t,this.o);this.o=t,s&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,s){if(!s)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:r}=this.subscriptions.get(t);t(this.value,r)}clearCallbacks(){this.subscriptions.clear()}}class a extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class o extends n{constructor(t,e,s){var n,a;super(void 0!==e.context?e.initialValue:s),this.onContextRequest=t=>{const e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{const e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;const s=new Set;for(const[n,{consumerHost:a}]of this.subscriptions)s.has(n)||(s.add(n),a.dispatchEvent(new r.s(this.context,n,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),null==(a=(n=this.host).addController)||a.call(n,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new a(this.context))}}},699:(t,e,s)=>{s.d(e,{s:()=>r});let r=class extends Event{constructor(t,e,s){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=s??!1}}},6468:(t,e,s)=>{s.d(e,{LL:()=>a,br:()=>n,kF:()=>l,ld:()=>c,pC:()=>o,qD:()=>i});const r=t=>Symbol(t),n=r("theme"),a=r("operation"),o=r("mode"),i=r("query"),c=r("filters"),l=r("execution")},7319:(t,e,s)=>{s.d(e,{e:()=>n,i:()=>a,t:()=>r});const r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=t=>(...e)=>({_$litDirective$:t,values:e});class a{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},5147:(t,e,s)=>{s.d(e,{E:()=>c,T:()=>o});var r=s(8030),n=s(4932),a=s(6468);const o={INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},i="manager";class c{constructor(t,e){this._abortController=new AbortController,this._callId=0,this._initialState={status:o.INITIAL,ask:{scratchpad:"",blocks:[]},search:{matches:[],suggestion:{questions:[]}},_search:{matches:[],suggestion:{questions:[]}}},this._options=e,this._ctx=new r.i(t,{context:a.kF,initialValue:this._initialState})}get ctx(){return this._ctx.value}set ctx(t){this._ctx.setValue(t)}abort(){var t;null==(t=this._abortController)||t.abort(i)}transition(t){this.ctx={...this.ctx,...t}}async search(t,e,s){var r;if(!e.search)return;this.transition({status:o.PENDING}),this._abortController.abort(i);const a=++this._callId;if(null==(r=e.beforeSearch)||r.call(e,t),await(0,n.cM)(this._options.searchDebounceMs),a===this._callId){this._abortController=new AbortController;try{this.transition({status:o.PENDING});const r=await e.search(t,this._abortController.signal);this.transition({status:o.COMPLETE,search:{...r,matches:(0,n.W5)(r.matches,s)},_search:{...r,matches:r.matches}})}catch(c){if(c===i||c instanceof Error&&"AbortError"===c.name)return void this.transition({status:o.INITIAL});console.error(c),this.transition({status:o.ERROR})}}}async ask(t,e,s){if(!e.ask)return;this.transition({...this._initialState,status:o.PENDING}),this._abortController.abort(i);const r=++this._callId;if(await(0,n.cM)(this._options.askDebounceMs),r===this._callId){this._abortController=new AbortController;try{this.transition({...this._initialState,status:o.PENDING}),await e.ask(t,this._handleDelta.bind(this),this._abortController.signal),this.transition({status:o.COMPLETE})}catch(a){if(a===i||a instanceof Error&&"AbortError"===a.name)return void this.transition({status:o.INITIAL});console.error(a),this.transition({status:o.ERROR})}}}_handleDelta(t){this.transition({ask:t})}}},1674:(t,e,s)=>{s.d(e,{e:()=>d,n:()=>v});var r=s(4440),n=s(7319);const a=(t,e)=>{var s;const r=t._$AN;if(void 0===r)return!1;for(const n of r)null==(s=n._$AO)||s.call(n,e,!1),a(n,e);return!0},o=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},i=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),u(e)}};function c(t){void 0!==this._$AN?(o(this),this._$AM=t,i(this)):this._$AM=t}function l(t,e=!1,s=0){const r=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(r))for(let i=s;i<r.length;i++)a(r[i],!1),o(r[i]);else null!=r&&(a(r,!1),o(r));else a(this,t)}const u=t=>{t.type==n.t.CHILD&&(t._$AP??(t._$AP=l),t._$AQ??(t._$AQ=c))};class h extends n.i{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),i(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,r;t!==this.isConnected&&(this.isConnected=t,t?null==(s=this.reconnected)||s.call(this):null==(r=this.disconnected)||r.call(this)),e&&(a(this,t),o(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const d=()=>new p;class p{}const b=new WeakMap,v=(0,n.e)(class extends h{render(t){return r.T}update(t,[e]){var s;const n=e!==this.Y;return n&&void 0!==this.Y&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=e,this.ht=null==(s=t.options)?void 0:s.host,this.rt(this.ct=t.element)),r.T}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const e=this.ht??globalThis;let s=b.get(e);void 0===s&&(s=new WeakMap,b.set(e,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return"function"==typeof this.Y?null==(t=b.get(this.ht??globalThis))?void 0:t.get(this.Y):null==(e=this.Y)?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},4715:(t,e,s)=>{s.d(e,{r:()=>n});var r=s(4676);function n(t){return(0,r.n)({...t,state:!0,attribute:!1})}},2208:(t,e,s)=>{s.d(e,{b8:()=>p,lh:()=>b,y$:()=>d});var r=s(8030),n=s(6468),a=s(5147),o=s(4435),i=s(4932);const c="function"==typeof Symbol&&Symbol.observable||"@@observable";function l(t,e,s){var r,n,a;const o="object"==typeof t,i=o?t:void 0;return{next:null==(r=o?t.next:t)?void 0:r.bind(i),error:null==(n=o?t.error:e)?void 0:n.bind(i),complete:null==(a=o?t.complete:s)?void 0:a.bind(i)}}const u=new WeakMap;function h(t,e,s){let r,n;const a={context:t,status:"active",output:void 0,error:void 0};let o=a;const i=t=>{if(!n)return;const e=t.type,s=n.get(e);s&&s.forEach((e=>e(t)))},h=function(t){return(e,s)=>{let r=e.context;const n=null==t?void 0:t[s.type],a=[],o={emit:t=>{a.push(t)}};if(!n)return[e,a];if("function"==typeof n)r=(t=>Object.assign({},r,null==n?void 0:n(t,s,o)))(r);else{const t={};for(const e of Object.keys(n)){const a=n[e];t[e]="function"==typeof a?a(r,s,o):a}r=Object.assign({},r,t)}return[{...e,context:r},a]}}(e);const d={on(t,e){n||(n=new Map);let s=n.get(t);s||(s=new Set,n.set(t,s));const r=e.bind(void 0);return s.add(r),{unsubscribe(){s.delete(r)}}},sessionId:Math.random().toString(36).slice(6),send(t){var e;null==(e=u.get(d))||e.forEach((e=>{var s;null==(s=e.next)||s.call(e,{type:"@xstate.event",event:t,sourceRef:void 0,actorRef:d,rootId:d.sessionId})})),function(t){var e;let s;[o,s]=h(o,t),null==(e=u.get(d))||e.forEach((e=>{var s;null==(s=e.next)||s.call(e,{type:"@xstate.snapshot",event:t,snapshot:o,actorRef:d,rootId:d.sessionId})})),null==r||r.forEach((t=>{var e;return null==(e=t.next)?void 0:e.call(t,o)})),s.forEach(i)}(t)},getSnapshot:()=>o,getInitialSnapshot:()=>a,subscribe(t){const e=l(t);return r??(r=new Set),r.add(e),{unsubscribe:()=>null==r?void 0:r.delete(e)}},[c](){return this},inspect:t=>{var e,s;const r=l(t);return u.set(d,u.get(d)??new Set),u.get(d).add(r),null==(e=r.next)||e.call(r,{type:"@xstate.actor",actorRef:d,rootId:d.sessionId}),null==(s=r.next)||s.call(r,{type:"@xstate.snapshot",snapshot:a,event:{type:"@xstate.init"},actorRef:d,rootId:d.sessionId}),{unsubscribe(){var t;return null==(t=u.get(d))?void 0:t.delete(r)}}}};return d}const d=t=>{return e={operation:new r.i(t,{context:n.LL,initialValue:{}}),mode:new r.i(t,{context:n.pC,initialValue:{options:new Set([]),default:null,current:null}}),filters:new r.i(t,{context:n.ld,initialValue:{}}),query:new r.i(t,{context:n.qD,initialValue:{text:"",tags:[],sources:[]}}),executionManager:new a.E(t,{searchDebounceMs:80,askDebounceMs:300})},void 0===(s={register_operations:(t,{data:e})=>(t.operation.setValue({...t.operation.value,...e}),{operation:t.operation}),register_mode:(t,{data:e})=>(t.mode.setValue({options:t.mode.value.options.add(e),current:t.mode.value.current??e,default:t.mode.value.default??e}),{mode:t.mode}),set_filter:(t,{data:e})=>{const s=t.filters.value,r=t.executionManager.ctx,n={...s,[e.name]:{...s[e.name],...e.filter}},a={...r.search,matches:(0,i.W5)(r._search.matches,n)};return t.filters.setValue(n),t.executionManager.ctx={...r,search:a},{filters:t.filters,executionManager:t.executionManager}},set_mode:(t,{data:e})=>(t.mode.setValue({...t.mode.value,current:e}),e===o.M&&(t.executionManager.abort(),t.executionManager.search(t.query.value,t.operation.value,t.filters.value)),e===o.a&&(t.executionManager.abort(),t.executionManager.ask(t.query.value,t.operation.value,t.filters.value)),{mode:t.mode}),set_query:(t,{data:e})=>{const s={...t.query.value,...e};return t.query.setValue(s,!0),t.mode.setValue({...t.mode.value,current:o.M}),t.executionManager.search(s,t.operation.value,t.filters.value),{query:t.query,mode:t.mode}}})?h(e.context,e.on):h(e,s);var e,s},p="canary-broadcast",b=t=>new CustomEvent(p,{detail:t,composed:!0,bubbles:!0})},556:(t,e,s)=>{s.d(e,{g:()=>n,s:()=>o,w:()=>a});var r=s(4440);const n=r.i`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  :host {
    -webkit-font-smoothing: antialiased;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
`;r.i`
  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    background-color: var(--canary-is-light, var(--canary-color-primary-90))
      var(--canary-is-dark, var(--canary-color-primary-80));
  }
  button:hover {
    background-color: var(--canary-is-light, var(--canary-color-primary-95))
      var(--canary-is-dark, var(--canary-color-primary-70));
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  span {
    font-weight: bold;
    color: var(--canary-color-gray-0);
  }
`;r.i`
  :host {
    display: contents;
  }

  input {
    width: 100%;
    height: 30px;
    outline: none;
    border: none;
    font-size: 1rem;
    color: var(--canary-color-gray-10);
    background-color: var(--canary-color-gray-100);
  }

  input::placeholder {
    color: var(--canary-color-gray-40);
    font-size: 0.875rem;
  }
`;r.i`
  :host {
    display: contents;
  }

  svg {
    height: 20px;
    max-width: 50px;
  }
`;const a=r.i`
  :host {
    display: contents;
  }
`,o=r.i`
  .scroll-container {
    overflow-y: auto;
    max-height: var(--canary-content-max-height, 650px);
    padding-left: 12px;
    padding-right: 2px;

    scrollbar-gutter: stable;

    scrollbar-width: thin;
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: var(--canary-color-gray-100);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--canary-is-light, var(--canary-color-gray-90));
      background-color: var(--canary-is-dark, var(--canary-color-gray-60));
      border-radius: 4px;
    }

    scrollbar-color: var(--canary-is-light, var(--canary-color-gray-90))
      var(--canary-is-dark, var(--canary-color-gray-60))
      var(--canary-color-gray-100);
  }
`;r.i`
  pre code {
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: var(--canary-color-gray-100);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--canary-is-light, var(--canary-color-gray-90));
      background-color: var(--canary-is-dark, var(--canary-color-gray-60));
      border-radius: 4px;
    }

    scrollbar-color: var(--canary-is-light, var(--canary-color-gray-90))
      var(--canary-is-dark, var(--canary-color-gray-60))
      var(--canary-color-gray-100);
  }
`},4932:(t,e,s)=>{s.d(e,{Kl:()=>a,W5:()=>i,b2:()=>r,cM:()=>n});const r=t=>o(t).pathname.split("/").map(((t,e)=>{const s=t.replace(/[-_]/g," ");return s.charAt(0).toUpperCase()+s.slice(1)})).map((t=>t.includes("#")?t.split("#")[0]:t)).map((t=>t.endsWith(".html")?t.replace(".html",""):t)).map(decodeURIComponent).filter(Boolean).slice(-4),n=async t=>new Promise((e=>setTimeout(e,t))),a=t=>{try{const{pathname:e,search:s}=o(t);return e+s}catch{return t}},o=t=>{const e=t.startsWith("http")?t:t.startsWith("/")?`https://example.com${t}`:`https://example.com/${t}`;return new URL(e)},i=(t,e)=>Object.entries(e).reduce(((t,[e,{fn:s,args:r}])=>s(t,r)),t)}}]);