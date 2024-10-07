/*! For license information please see 890.a1cb471d.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[890],{1389:(r,t,e)=>{e.d(t,{e:()=>o});var a=e(4440),s=e(7319);const o=(0,s.e)(class extends s.i{constructor(r){var t;if(super(r),r.type!==s.t.ATTRIBUTE||"class"!==r.name||(null==(t=r.strings)?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter((t=>r[t])).join(" ")+" "}update(r,[t]){var e,s;if(void 0===this.st){this.st=new Set,void 0!==r.strings&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter((r=>""!==r))));for(const r in t)t[r]&&!(null==(e=this.nt)?void 0:e.has(r))&&this.st.add(r);return this.render(t)}const o=r.element.classList;for(const a of this.st)a in t||(o.remove(a),this.st.delete(a));for(const a in t){const r=!!t[a];r===this.st.has(a)||(null==(s=this.nt)?void 0:s.has(a))||(r?(o.add(a),this.st.add(a)):(o.remove(a),this.st.delete(a)))}return a.w}})},890:(r,t,e)=>{e.r(t),e.d(t,{CanaryContent:()=>u});var a=e(4440),s=e(2697),o=e(4715);var i=e(1389),n=e(3277),c=e(6468),l=e(556),d=Object.defineProperty,h=Object.getOwnPropertyDescriptor,b=(r,t,e,a)=>{for(var s,o=a>1?void 0:a?h(t,e):t,i=r.length-1;i>=0;i--)(s=r[i])&&(o=(a?s(t,e,o):s(o))||o);return a&&o&&d(t,e,o),o};let u=class extends a.s{constructor(){super(...arguments),this._query=""}render(){return a.x`
      <div class="container" part="container">
        <div class="head-container" part="head-container">
          <slot name="head"></slot>
        </div>
        <slot name="input"></slot>
        <slot name="mode"></slot>
        <div
          class=${(0,i.e)({footer:!0,hide:!this._query||0===this._footers.length})}
        >
          <div class="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `}};var p;u.styles=[l.g,l.w,a.i`
      .container {
        width: 300px;

        outline: none;
        padding-top: 6px;
        padding-bottom: 8px;

        border: none;
        border-radius: 8px;
        box-shadow:
          0 20px 25px -5px rgb(0 0 0 / 0.1),
          0 8px 10px -6px rgb(0 0 0 / 0.1);

        background-color: var(--canary-color-gray-100);
      }

      @media (min-width: 40rem) {
        .container {
          width: var(--canary-content-max-width, 550px);
        }
      }

      .head-container {
        padding-left: 12px;
        padding-right: 12px;
      }
    `,a.i`
      .footer {
        padding-top: 2px;
        padding-right: 6px;
      }

      .hide {
        display: none;
      }
    `],b([(0,n.c)({context:c.qD,subscribe:!0}),(0,o.r)()],u.prototype,"_query",2),b([(p={slot:"footer"},(r,t)=>{const{slot:e,selector:a}=p??{},s="slot"+(e?`[name=${e}]`:":not([name])");return((r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(r,t,e),e))(r,t,{get(){var r;const t=null==(r=this.renderRoot)?void 0:r.querySelector(s),e=(null==t?void 0:t.assignedElements(p))??[];return void 0===a?e:e.filter((r=>r.matches(a)))}})})],u.prototype,"_footers",2),u=b([(0,s.t)("canary-content")],u)},3277:(r,t,e)=>{e.d(t,{c:()=>s});var a=e(5793);function s({context:r,subscribe:t}){return(e,s)=>{"object"==typeof s?s.addInitializer((function(){new a.s(this,{context:r,callback:r=>{e.set.call(this,r)},subscribe:t})})):e.constructor.addInitializer((e=>{new a.s(e,{context:r,callback:r=>{e[s]=r},subscribe:t})}))}}},5793:(r,t,e)=>{e.d(t,{s:()=>s});var a=e(699);class s{constructor(r,t,e,a){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(r,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=r,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(r,t)),this.unsubscribe=t},this.host=r,void 0!==t.context){const r=t;this.context=r.context,this.callback=r.callback,this.subscribe=r.subscribe??!1}else this.context=t,this.callback=e,this.subscribe=a??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new a.s(this.context,this.t,this.subscribe))}}},699:(r,t,e)=>{e.d(t,{s:()=>a});let a=class extends Event{constructor(r,t,e){super("context-request",{bubbles:!0,composed:!0}),this.context=r,this.callback=t,this.subscribe=e??!1}}},6468:(r,t,e)=>{e.d(t,{LL:()=>o,br:()=>s,kF:()=>l,ld:()=>c,pC:()=>i,qD:()=>n});const a=r=>Symbol(r),s=a("theme"),o=a("operation"),i=a("mode"),n=a("query"),c=a("filters"),l=a("execution")},7319:(r,t,e)=>{e.d(t,{e:()=>s,i:()=>o,t:()=>a});const a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=r=>(...t)=>({_$litDirective$:r,values:t});class o{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,t,e){this._$Ct=r,this._$AM=t,this._$Ci=e}_$AS(r,t){return this.update(r,t)}update(r,t){return this.render(...t)}}},4715:(r,t,e)=>{e.d(t,{r:()=>s});var a=e(4676);function s(r){return(0,a.n)({...r,state:!0,attribute:!1})}},556:(r,t,e)=>{e.d(t,{g:()=>s,s:()=>i,w:()=>o});var a=e(4440);const s=a.i`
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
`;a.i`
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
`;a.i`
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
`;a.i`
  :host {
    display: contents;
  }

  svg {
    height: 20px;
    max-width: 50px;
  }
`;const o=a.i`
  :host {
    display: contents;
  }
`,i=a.i`
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
`;a.i`
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
`}}]);