/*! For license information please see 1546.bdb65fb1.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1546],{1389:(t,e,r)=>{r.d(e,{e:()=>s});var n=r(4440),a=r(7319);const s=(0,a.e)(class extends a.i{constructor(t){var e;if(super(t),t.type!==a.t.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var r,a;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null==(r=this.nt)?void 0:r.has(t))&&this.st.add(t);return this.render(e)}const s=t.element.classList;for(const n of this.st)n in e||(s.remove(n),this.st.delete(n));for(const n in e){const t=!!e[n];t===this.st.has(n)||(null==(a=this.nt)?void 0:a.has(n))||(t?(s.add(n),this.st.add(n)):(s.remove(n),this.st.delete(n)))}return n.w}})},1546:(t,e,r)=>{r.r(e),r.d(e,{CanaryInput:()=>f});var n=r(4440),a=r(2697),s=r(4676),o=r(4715),i=r(1389),c=r(3277),l=r(6468),u=r(556),d=r(5147),h=r(2208),p=r(4435);var b=Object.defineProperty,v=Object.getOwnPropertyDescriptor;let g=class extends n.s{render(){return n.x` <span class="loader"></span> `}};g.styles=n.i`
    .loader {
      width: 12px;
      height: 12px;
      border: 1px solid var(--canary-color-gray-40);
      border-bottom-color: transparent;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,g=((t,e,r,n)=>{for(var a,s=n>1?void 0:n?v(e,r):e,o=t.length-1;o>=0;o--)(a=t[o])&&(s=(n?a(e,r,s):a(s))||s);return n&&s&&b(e,r,s),s})([(0,a.t)("canary-loading-spinner")],g);var y=Object.defineProperty,x=Object.getOwnPropertyDescriptor,m=(t,e,r,n)=>{for(var a,s=n>1?void 0:n?x(e,r):e,o=t.length-1;o>=0;o--)(a=t[o])&&(s=(n?a(e,r,s):a(s))||s);return n&&s&&y(e,r,s),s};let f=class extends n.s{constructor(){super(...arguments),this.autofocus=!1,this._query={text:"",tags:[],sources:[]}}render(){var t,e,r,a,s,o,c;return n.x`
      <div class="container" part="container">
        <slot name="before">
          <div class="i-heroicons-magnifying-glass"></div>
        </slot>
        <input
          type="text"
          part="input"
          .value=${this._query.text}
          autocomplete="off"
          spellcheck="false"
          placeholder="Search for anything..."
          @input=${this._handleInput}
          @keydown=${this._handleKeyDown}
          onfocus="this.setSelectionRange(this.value.length,this.value.length);"
          autofocus=${c=this.autofocus||null,c??n.T}
        />
        <span
          class=${(0,i.e)({hidden:!((null==(t=this._mode)?void 0:t.current)===p.a&&(null==(e=this._execution)?void 0:e.status)===d.T.COMPLETE)})}
        >
          <slot name="action-search"> ${this._renderDefaultSearch()} </slot>
        </span>
        <span
          class=${(0,i.e)({hidden:!((null==(r=this._mode)?void 0:r.current)===p.M&&(null==(a=this._execution)?void 0:a.status)===d.T.COMPLETE&&this._is_question(this._query.text))})}
        >
          <slot name="action-ask"> ${this._renderDefaultAsk()} </slot>
        </span>
        <span
          class=${(0,i.e)({hidden:(null==(s=this._execution)?void 0:s.status)!==d.T.PENDING&&(null==(o=this._execution)?void 0:o.status)!==d.T.ERROR})}
        >
          <slot name="loading">
            <canary-loading-spinner></canary-loading-spinner>
          </slot>
        </span>
      </div>
    `}_renderDefaultSearch(){return n.x`
      <div class="action">
        <span>Search</span>
        <span class="i-heroicons-backspace"></span>
      </div>
    `}_renderDefaultAsk(){var t;return(null==(t=this._mode)?void 0:t.options.has(p.a))?n.x`
      <div class="action">
        <span>Ask AI</span>
        <kbd>Tab</kbd>
      </div>
    `:n.T}_handleKeyDown(t){var e,r;"Tab"===t.key&&(null==(e=this._mode)?void 0:e.current)===p.M&&(null==(r=this._mode)?void 0:r.options.has(p.a))&&this._is_question(this._query.text)&&(t.preventDefault(),this.dispatchEvent((0,h.lh)({type:"set_mode",data:p.a})))}_handleInput(t){const e=t.target.value;this.dispatchEvent((0,h.lh)({type:"set_query",data:{text:e}}))}_is_question(t){return t.split(" ").length>2||t.endsWith("?")}};f.styles=[u.g,u.w,n.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: icons */
.i-heroicons-backspace{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
.i-heroicons-magnifying-glass{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
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
.static{position:static;}
.hidden{display:none;}
.flex{display:flex;}
.border{border-width:1px;}
.outline{outline-style:solid;};
    `,n.i`
      .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        padding: 1px 12px;
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

      .hidden {
        visibility: hidden;
      }
    `,n.i`
      .action {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4px;
        font-size: 0.7rem;
        line-height: 1;
      }
      .action span {
        line-height: 1;
        white-space: nowrap;
        color: var(--canary-color-gray-60);
      }
      kbd {
        border: 1px solid var(--canary-color-gray-90);
        padding: 2px 4px;
        border-radius: 4px;

        color: var(--canary-is-light, var(--canary-color-gray-50))
          var(--canary-is-dark, var(--canary-color-gray-20));
      }

      span.i-heroicons-backspace {
        height: 1.5em;
        width: 1.5em;
      }
    `],m([(0,s.n)({type:Boolean})],f.prototype,"autofocus",2),m([(0,c.c)({context:l.qD,subscribe:!0}),(0,o.r)()],f.prototype,"_query",2),m([(0,c.c)({context:l.pC,subscribe:!0}),(0,o.r)()],f.prototype,"_mode",2),m([(0,c.c)({context:l.kF,subscribe:!0}),(0,o.r)()],f.prototype,"_execution",2),f=m([(0,a.t)("canary-input")],f)},4435:(t,e,r)=>{r.d(e,{M:()=>n,a:()=>a});const n="Search",a="Ask"},3277:(t,e,r)=>{r.d(e,{c:()=>a});var n=r(5793);function a({context:t,subscribe:e}){return(r,a)=>{"object"==typeof a?a.addInitializer((function(){new n.s(this,{context:t,callback:t=>{r.set.call(this,t)},subscribe:e})})):r.constructor.addInitializer((r=>{new n.s(r,{context:t,callback:t=>{r[a]=t},subscribe:e})}))}}},5793:(t,e,r)=>{r.d(e,{s:()=>a});var n=r(699);class a{constructor(t,e,r,n){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=r,this.subscribe=n??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new n.s(this.context,this.t,this.subscribe))}}},8030:(t,e,r)=>{r.d(e,{i:()=>o});var n=r(699);class a{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const r=e||!Object.is(t,this.o);this.o=t,r&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,r){if(!r)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:n}=this.subscriptions.get(t);t(this.value,n)}clearCallbacks(){this.subscriptions.clear()}}class s extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class o extends a{constructor(t,e,r){var a,s;super(void 0!==e.context?e.initialValue:r),this.onContextRequest=t=>{const e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{const e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;const r=new Set;for(const[a,{consumerHost:s}]of this.subscriptions)r.has(a)||(r.add(a),s.dispatchEvent(new n.s(this.context,a,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),null==(s=(a=this.host).addController)||s.call(a,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new s(this.context))}}},699:(t,e,r)=>{r.d(e,{s:()=>n});let n=class extends Event{constructor(t,e,r){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=r??!1}}},6468:(t,e,r)=>{r.d(e,{LL:()=>s,br:()=>a,kF:()=>l,ld:()=>c,pC:()=>o,qD:()=>i});const n=t=>Symbol(t),a=n("theme"),s=n("operation"),o=n("mode"),i=n("query"),c=n("filters"),l=n("execution")},7319:(t,e,r)=>{r.d(e,{e:()=>a,i:()=>s,t:()=>n});const n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},a=t=>(...e)=>({_$litDirective$:t,values:e});class s{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},5147:(t,e,r)=>{r.d(e,{E:()=>c,T:()=>o});var n=r(8030),a=r(4932),s=r(6468);const o={INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},i="manager";class c{constructor(t,e){this._abortController=new AbortController,this._callId=0,this._initialState={status:o.INITIAL,ask:{scratchpad:"",blocks:[]},search:{matches:[],suggestion:{questions:[]}},_search:{matches:[],suggestion:{questions:[]}}},this._options=e,this._ctx=new n.i(t,{context:s.kF,initialValue:this._initialState})}get ctx(){return this._ctx.value}set ctx(t){this._ctx.setValue(t)}abort(){var t;null==(t=this._abortController)||t.abort(i)}transition(t){this.ctx={...this.ctx,...t}}async search(t,e,r){var n;if(!e.search)return;this.transition({status:o.PENDING}),this._abortController.abort(i);const s=++this._callId;if(null==(n=e.beforeSearch)||n.call(e,t),await(0,a.cM)(this._options.searchDebounceMs),s===this._callId){this._abortController=new AbortController;try{this.transition({status:o.PENDING});const n=await e.search(t,this._abortController.signal);this.transition({status:o.COMPLETE,search:{...n,matches:(0,a.W5)(n.matches,r)},_search:{...n,matches:n.matches}})}catch(c){if(c===i||c instanceof Error&&"AbortError"===c.name)return void this.transition({status:o.INITIAL});console.error(c),this.transition({status:o.ERROR})}}}async ask(t,e,r){if(!e.ask)return;this.transition({...this._initialState,status:o.PENDING}),this._abortController.abort(i);const n=++this._callId;if(await(0,a.cM)(this._options.askDebounceMs),n===this._callId){this._abortController=new AbortController;try{this.transition({...this._initialState,status:o.PENDING}),await e.ask(t,this._handleDelta.bind(this),this._abortController.signal),this.transition({status:o.COMPLETE})}catch(s){if(s===i||s instanceof Error&&"AbortError"===s.name)return void this.transition({status:o.INITIAL});console.error(s),this.transition({status:o.ERROR})}}}_handleDelta(t){this.transition({ask:t})}}},4715:(t,e,r)=>{r.d(e,{r:()=>a});var n=r(4676);function a(t){return(0,n.n)({...t,state:!0,attribute:!1})}},2208:(t,e,r)=>{r.d(e,{b8:()=>p,lh:()=>b,y$:()=>h});var n=r(8030),a=r(6468),s=r(5147),o=r(4435),i=r(4932);const c="function"==typeof Symbol&&Symbol.observable||"@@observable";function l(t,e,r){var n,a,s;const o="object"==typeof t,i=o?t:void 0;return{next:null==(n=o?t.next:t)?void 0:n.bind(i),error:null==(a=o?t.error:e)?void 0:a.bind(i),complete:null==(s=o?t.complete:r)?void 0:s.bind(i)}}const u=new WeakMap;function d(t,e,r){let n,a;const s={context:t,status:"active",output:void 0,error:void 0};let o=s;const i=t=>{if(!a)return;const e=t.type,r=a.get(e);r&&r.forEach((e=>e(t)))},d=function(t){return(e,r)=>{let n=e.context;const a=null==t?void 0:t[r.type],s=[],o={emit:t=>{s.push(t)}};if(!a)return[e,s];if("function"==typeof a)n=(t=>Object.assign({},n,null==a?void 0:a(t,r,o)))(n);else{const t={};for(const e of Object.keys(a)){const s=a[e];t[e]="function"==typeof s?s(n,r,o):s}n=Object.assign({},n,t)}return[{...e,context:n},s]}}(e);const h={on(t,e){a||(a=new Map);let r=a.get(t);r||(r=new Set,a.set(t,r));const n=e.bind(void 0);return r.add(n),{unsubscribe(){r.delete(n)}}},sessionId:Math.random().toString(36).slice(6),send(t){var e;null==(e=u.get(h))||e.forEach((e=>{var r;null==(r=e.next)||r.call(e,{type:"@xstate.event",event:t,sourceRef:void 0,actorRef:h,rootId:h.sessionId})})),function(t){var e;let r;[o,r]=d(o,t),null==(e=u.get(h))||e.forEach((e=>{var r;null==(r=e.next)||r.call(e,{type:"@xstate.snapshot",event:t,snapshot:o,actorRef:h,rootId:h.sessionId})})),null==n||n.forEach((t=>{var e;return null==(e=t.next)?void 0:e.call(t,o)})),r.forEach(i)}(t)},getSnapshot:()=>o,getInitialSnapshot:()=>s,subscribe(t){const e=l(t);return n??(n=new Set),n.add(e),{unsubscribe:()=>null==n?void 0:n.delete(e)}},[c](){return this},inspect:t=>{var e,r;const n=l(t);return u.set(h,u.get(h)??new Set),u.get(h).add(n),null==(e=n.next)||e.call(n,{type:"@xstate.actor",actorRef:h,rootId:h.sessionId}),null==(r=n.next)||r.call(n,{type:"@xstate.snapshot",snapshot:s,event:{type:"@xstate.init"},actorRef:h,rootId:h.sessionId}),{unsubscribe(){var t;return null==(t=u.get(h))?void 0:t.delete(n)}}}};return h}const h=t=>{return e={operation:new n.i(t,{context:a.LL,initialValue:{}}),mode:new n.i(t,{context:a.pC,initialValue:{options:new Set([]),default:null,current:null}}),filters:new n.i(t,{context:a.ld,initialValue:{}}),query:new n.i(t,{context:a.qD,initialValue:{text:"",tags:[],sources:[]}}),executionManager:new s.E(t,{searchDebounceMs:80,askDebounceMs:300})},void 0===(r={register_operations:(t,{data:e})=>(t.operation.setValue({...t.operation.value,...e}),{operation:t.operation}),register_mode:(t,{data:e})=>(t.mode.setValue({options:t.mode.value.options.add(e),current:t.mode.value.current??e,default:t.mode.value.default??e}),{mode:t.mode}),set_filter:(t,{data:e})=>{const r=t.filters.value,n=t.executionManager.ctx,a={...r,[e.name]:{...r[e.name],...e.filter}},s={...n.search,matches:(0,i.W5)(n._search.matches,a)};return t.filters.setValue(a),t.executionManager.ctx={...n,search:s},{filters:t.filters,executionManager:t.executionManager}},set_mode:(t,{data:e})=>(t.mode.setValue({...t.mode.value,current:e}),e===o.M&&(t.executionManager.abort(),t.executionManager.search(t.query.value,t.operation.value,t.filters.value)),e===o.a&&(t.executionManager.abort(),t.executionManager.ask(t.query.value,t.operation.value,t.filters.value)),{mode:t.mode}),set_query:(t,{data:e})=>{const r={...t.query.value,...e};return t.query.setValue(r,!0),t.mode.setValue({...t.mode.value,current:o.M}),t.executionManager.search(r,t.operation.value,t.filters.value),{query:t.query,mode:t.mode}}})?d(e.context,e.on):d(e,r);var e,r},p="canary-broadcast",b=t=>new CustomEvent(p,{detail:t,composed:!0,bubbles:!0})},556:(t,e,r)=>{r.d(e,{g:()=>a,s:()=>o,w:()=>s});var n=r(4440);const a=n.i`
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
`;n.i`
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
`;n.i`
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
`;n.i`
  :host {
    display: contents;
  }

  svg {
    height: 20px;
    max-width: 50px;
  }
`;const s=n.i`
  :host {
    display: contents;
  }
`,o=n.i`
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
`;n.i`
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
`},4932:(t,e,r)=>{r.d(e,{Kl:()=>s,W5:()=>i,b2:()=>n,cM:()=>a});const n=t=>o(t).pathname.split("/").map(((t,e)=>{const r=t.replace(/[-_]/g," ");return r.charAt(0).toUpperCase()+r.slice(1)})).map((t=>t.includes("#")?t.split("#")[0]:t)).map((t=>t.endsWith(".html")?t.replace(".html",""):t)).map(decodeURIComponent).filter(Boolean).slice(-4),a=async t=>new Promise((e=>setTimeout(e,t))),s=t=>{try{const{pathname:e,search:r}=o(t);return e+r}catch{return t}},o=t=>{const e=t.startsWith("http")?t:t.startsWith("/")?`https://example.com${t}`:`https://example.com/${t}`;return new URL(e)},i=(t,e)=>Object.entries(e).reduce(((t,[e,{fn:r,args:n}])=>r(t,n)),t)}}]);