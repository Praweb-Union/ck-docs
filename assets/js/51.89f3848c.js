/*! For license information please see 51.89f3848c.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51],{51:(r,t,a)=>{a.r(t),a.d(t,{CanaryModal:()=>g,MODAL_CLOSE_EVENT:()=>y});var o=a(4440),e=a(2697),i=a(4676),s=a(1674),n=a(556),l=Object.defineProperty,c=Object.getOwnPropertyDescriptor,d=(r,t,a,o)=>{for(var e,i=o>1?void 0:o?c(t,a):t,s=r.length-1;s>=0;s--)(e=r[s])&&(i=(o?e(t,a,i):e(i))||i);return o&&i&&l(t,a,i),i};let h=class extends o.s{constructor(){super(...arguments),this.ref=(0,s.e)()}render(){return o.x`
      <dialog ${(0,s.n)(this.ref)} @click=${this.handleClick}>
        <slot></slot>
      </dialog>
    `}handleClick(r){const t=this.ref.value;(null==t?void 0:t.open)&&"DIALOG"===r.target.nodeName&&t.close()}};h.styles=[o.i`
      dialog::backdrop {
        background-color: var(--canary-color-backdrop-overlay);
        -webkit-backdrop-filter: blur(0.25rem);
        backdrop-filter: blur(0.25rem);
      }

      dialog {
        margin: 0 auto;
        top: 60px;
        padding: 0;
        border: none;
        outline: none;
        border-radius: 8px;
        box-shadow:
          0 20px 25px -5px rgb(0 0 0 / 0.1),
          0 8px 10px -6px rgb(0 0 0 / 0.1);
      }
    `],d([(0,i.n)({attribute:!1})],h.prototype,"ref",2),h=d([(0,e.t)("canary-dialog")],h);var p=Object.defineProperty,u=Object.getOwnPropertyDescriptor,v=(r,t,a,o)=>{for(var e,i=o>1?void 0:o?u(t,a):t,s=r.length-1;s>=0;s--)(e=r[s])&&(i=(o?e(t,a,i):e(i))||i);return o&&i&&p(t,a,i),i};const y="modal-close";let g=class extends o.s{constructor(){super(...arguments),this.open=!1,this._ref=(0,s.e)()}render(){return o.x`
      <slot name="trigger" @click=${this._handleOpen}></slot>
      <canary-dialog .ref=${this._ref}>
        <slot name="content" @modal-close=${this._handleModalClose}></slot>
      </canary-dialog>
    `}_handleOpen(){var r;null==(r=this._ref.value)||r.showModal()}_handleModalClose(){var r;null==(r=this._ref.value)||r.close()}};g.styles=[n.w,o.i`
      ::slotted([slot="trigger"]) {
        cursor: pointer;
      }
    `],v([(0,i.n)({type:Boolean})],g.prototype,"open",2),g=v([(0,e.t)("canary-modal")],g)},7319:(r,t,a)=>{a.d(t,{e:()=>e,i:()=>i,t:()=>o});const o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=r=>(...t)=>({_$litDirective$:r,values:t});class i{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,t,a){this._$Ct=r,this._$AM=t,this._$Ci=a}_$AS(r,t){return this.update(r,t)}update(r,t){return this.render(...t)}}},1674:(r,t,a)=>{a.d(t,{e:()=>p,n:()=>y});var o=a(4440),e=a(7319);const i=(r,t)=>{var a;const o=r._$AN;if(void 0===o)return!1;for(const e of o)null==(a=e._$AO)||a.call(e,t,!1),i(e,t);return!0},s=r=>{let t,a;do{if(void 0===(t=r._$AM))break;a=t._$AN,a.delete(r),r=t}while(0===(null==a?void 0:a.size))},n=r=>{for(let t;t=r._$AM;r=t){let a=t._$AN;if(void 0===a)t._$AN=a=new Set;else if(a.has(r))break;a.add(r),d(t)}};function l(r){void 0!==this._$AN?(s(this),this._$AM=r,n(this)):this._$AM=r}function c(r,t=!1,a=0){const o=this._$AH,e=this._$AN;if(void 0!==e&&0!==e.size)if(t)if(Array.isArray(o))for(let n=a;n<o.length;n++)i(o[n],!1),s(o[n]);else null!=o&&(i(o,!1),s(o));else i(this,r)}const d=r=>{r.type==e.t.CHILD&&(r._$AP??(r._$AP=c),r._$AQ??(r._$AQ=l))};class h extends e.i{constructor(){super(...arguments),this._$AN=void 0}_$AT(r,t,a){super._$AT(r,t,a),n(this),this.isConnected=r._$AU}_$AO(r,t=!0){var a,o;r!==this.isConnected&&(this.isConnected=r,r?null==(a=this.reconnected)||a.call(this):null==(o=this.disconnected)||o.call(this)),t&&(i(this,r),s(this))}setValue(r){if(void 0===this._$Ct.strings)this._$Ct._$AI(r,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=r,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const p=()=>new u;class u{}const v=new WeakMap,y=(0,e.e)(class extends h{render(r){return o.T}update(r,[t]){var a;const e=t!==this.Y;return e&&void 0!==this.Y&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=t,this.ht=null==(a=r.options)?void 0:a.host,this.rt(this.ct=r.element)),o.T}rt(r){if(this.isConnected||(r=void 0),"function"==typeof this.Y){const t=this.ht??globalThis;let a=v.get(t);void 0===a&&(a=new WeakMap,v.set(t,a)),void 0!==a.get(this.Y)&&this.Y.call(this.ht,void 0),a.set(this.Y,r),void 0!==r&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){var r,t;return"function"==typeof this.Y?null==(r=v.get(this.ht??globalThis))?void 0:r.get(this.Y):null==(t=this.Y)?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},556:(r,t,a)=>{a.d(t,{g:()=>e,s:()=>s,w:()=>i});var o=a(4440);const e=o.i`
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
`;o.i`
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
`;o.i`
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
`;o.i`
  :host {
    display: contents;
  }

  svg {
    height: 20px;
    max-width: 50px;
  }
`;const i=o.i`
  :host {
    display: contents;
  }
`,s=o.i`
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
`;o.i`
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