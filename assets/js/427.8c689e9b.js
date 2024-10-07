/*! For license information please see 427.8c689e9b.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[427,51],{51:(t,r,e)=>{e.r(r),e.d(r,{CanaryModal:()=>y,MODAL_CLOSE_EVENT:()=>b});var n=e(4440),a=e(2697),s=e(4676),i=e(1674),o=e(556),c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,l=(t,r,e,n)=>{for(var a,s=n>1?void 0:n?u(r,e):r,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(n?a(r,e,s):a(s))||s);return n&&s&&c(r,e,s),s};let h=class extends n.s{constructor(){super(...arguments),this.ref=(0,i.e)()}render(){return n.x`
      <dialog ${(0,i.n)(this.ref)} @click=${this.handleClick}>
        <slot></slot>
      </dialog>
    `}handleClick(t){const r=this.ref.value;(null==r?void 0:r.open)&&"DIALOG"===t.target.nodeName&&r.close()}};h.styles=[n.i`
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
    `],l([(0,s.n)({attribute:!1})],h.prototype,"ref",2),h=l([(0,a.t)("canary-dialog")],h);var p=Object.defineProperty,d=Object.getOwnPropertyDescriptor,g=(t,r,e,n)=>{for(var a,s=n>1?void 0:n?d(r,e):r,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(n?a(r,e,s):a(s))||s);return n&&s&&p(r,e,s),s};const b="modal-close";let y=class extends n.s{constructor(){super(...arguments),this.open=!1,this._ref=(0,i.e)()}render(){return n.x`
      <slot name="trigger" @click=${this._handleOpen}></slot>
      <canary-dialog .ref=${this._ref}>
        <slot name="content" @modal-close=${this._handleModalClose}></slot>
      </canary-dialog>
    `}_handleOpen(){var t;null==(t=this._ref.value)||t.showModal()}_handleModalClose(){var t;null==(t=this._ref.value)||t.close()}};y.styles=[o.w,n.i`
      ::slotted([slot="trigger"]) {
        cursor: pointer;
      }
    `],g([(0,s.n)({type:Boolean})],y.prototype,"open",2),y=g([(0,a.t)("canary-modal")],y)},427:(t,r,e)=>{e.r(r),e.d(r,{CanarySearchResults:()=>Z});var n=e(4440),a=e(2697),s=e(4715),i=e(3277),o=e(6468),c=e(5147),u=e(556),l=e(4676),h=e(51),p=Object.defineProperty,d=Object.getOwnPropertyDescriptor,g=(t,r,e,n)=>{for(var a,s=n>1?void 0:n?d(r,e):r,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(n?a(r,e,s):a(s))||s);return n&&s&&p(r,e,s),s};let b=class extends n.s{render(){return n.x`
      <button class="container" part="container" @click=${this._handleClick}>
        <slot name="content-before"></slot>
        <div class="content">
          <slot name="url"></slot>
          <div class="title">
            <slot name="title-icon"></slot>
            <slot name="title"></slot>
            <slot name="title-badge"></slot>
          </div>
          <slot name="excerpt"></slot>
          <slot name="sub-results"></slot>
        </div>
        <div class="arrow">
          <div class="i-heroicons-chevron-right"></div>
        </div>
      </button>
    `}_handleClick(){this.dispatchEvent(new CustomEvent(h.MODAL_CLOSE_EVENT,{bubbles:!0,composed:!0})),window.location.href=this.url}};b.styles=[u.g,n.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: icons */
.i-heroicons-chevron-right{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m8.25 4.5l7.5 7.5l-7.5 7.5'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
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
.absolute{position:absolute;}
.relative{position:relative;}
.static{position:static;}
.hidden{display:none;}
.flex{display:flex;}
.border{border-width:1px;};
    `,n.i`
      .container {
        cursor: pointer;
        width: 100%;

        position: relative;
        cursor: pointer;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4px;

        width: 100%;
        padding: 6px 9px;
        border: 1px solid var(--canary-color-gray-90);
        border-radius: 8px;
        background-color: var(--canary-is-light, var(--canary-color-gray-95))
          var(--canary-is-dark, var(--canary-color-gray-80));
      }

      .container:hover {
        background-color: var(--canary-is-light, var(--canary-color-primary-95))
          var(--canary-is-dark, var(--canary-color-primary-70));
      }

      .container:hover .arrow {
        opacity: 0.5;
      }

      .arrow {
        position: absolute;
        top: 45%;
        right: 8px;
        opacity: 0;
      }

      .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;

        overflow: hidden;
        text-overflow: ellipsis;
      }

      .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
      }
    `],g([(0,l.n)({type:String})],b.prototype,"url",2),b=g([(0,a.t)("canary-search-match-base")],b);var y=e(4932),m=Object.defineProperty,x=Object.getOwnPropertyDescriptor,v=(t,r,e,n)=>{for(var a,s=n>1?void 0:n?x(r,e):r,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(n?a(r,e,s):a(s))||s);return n&&s&&m(r,e,s),s};let f=class extends n.s{render(){const t=(0,y.b2)(this.url);return 0==t.length?this._render_url():this._render_parts(t)}_render_parts(t){return n.x`<div class="paths">
      ${t.map(((r,e)=>e<t.length-1?n.x`
              <span class="path">${r}</span>
              <span class="icon i-heroicons-chevron-right"></span>
            `:n.x`<span class="path">${r}</span>`))}
    </div>`}_render_url(){let t=null;try{t=new URL(this.url).host}catch(k){t=null}return t?n.x`<span class="path">${t}</span>`:n.T}};f.styles=[u.g,n.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: icons */
.i-heroicons-chevron-right{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m8.25 4.5l7.5 7.5l-7.5 7.5'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
/* layer: default */
.static{position:static;}
.hidden{display:none;}
.flex{display:flex;};
    `,n.i`
      .paths {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2px;
        margin-bottom: 2px;

        color: var(--canary-color-gray-30);
        font-size: 0.75rem;
      }

      .path {
        line-height: 1;
        max-width: 120px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `],v([(0,l.n)({type:String})],f.prototype,"url",2),f=v([(0,a.t)("canary-url-paths")],f);var w=e(7319);class k extends w.i{constructor(t){if(super(t),this.it=n.T,t.type!==w.t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===n.T||null==t)return this._t=void 0,this.it=t;if(t===n.w)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}k.directiveName="unsafeHTML",k.resultType=1;const _=(0,w.e)(k);var C=Object.defineProperty,$=Object.getOwnPropertyDescriptor,z=(t,r,e,n)=>{for(var a,s=n>1?void 0:n?$(r,e):r,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(n?a(r,e,s):a(s))||s);return n&&s&&C(r,e,s),s};let E=class extends n.s{constructor(){super(...arguments),this.last=!1}render(){return n.x`
      <svg viewBox="0 0 24 54">
        <g
          stroke="currentColor"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          ${this._paths()}
        </g>
      </svg>
    `}_paths(){return this.last?n.b`<path d="M8 6v21M20 27H8.3"></path>`:n.b`<path d="M8 6v21M20 27H8.3"></path>
      <path d="M8 6v42M20 27H8.3"></path>`}};E.styles=n.i`
    :host {
      display: contents;
    }

    svg {
      width: 1.4em;
      color: var(--canary-is-light, var(--canary-color-gray-80))
        var(--canary-is-dark, var(--canary-color-gray-50));
    }
  `,z([(0,l.n)({type:Boolean})],E.prototype,"last",2),E=z([(0,a.t)("canary-icon-tree")],E);var A=Object.defineProperty,O=Object.getOwnPropertyDescriptor,T=(t,r,e,n)=>{for(var a,s=n>1?void 0:n?O(r,e):r,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(n?a(r,e,s):a(s))||s);return n&&s&&A(r,e,s),s};let M=class extends n.s{constructor(){super(...arguments),this.value=""}render(){return this.value?n.x`
      <span class="title">${_(this._sanitize(this.value))}</span>
    `:n.T}_sanitize(t){return t.replace(/<mark>/g,"__MARK_START__").replace(/<\/mark>/g,"__MARK_END__").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/__MARK_START__/g,"<mark>").replace(/__MARK_END__/g,"</mark>")}};M.styles=[u.w,n.i`
      span {
        color: var(--canary-color-gray-20);
        font-size: 1rem;
        font-weight: normal;
        line-height: 1;

        white-space: nowrap;
        max-width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      mark {
        background-color: transparent;
        color: inherit;
      }
    `],T([(0,l.n)({type:String})],M.prototype,"value",2),M=T([(0,a.t)("canary-snippet-title")],M);var P=Object.defineProperty,R=Object.getOwnPropertyDescriptor,N=(t,r,e,n)=>{for(var a,s=n>1?void 0:n?R(r,e):r,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(n?a(r,e,s):a(s))||s);return n&&s&&P(r,e,s),s};let j=class extends n.s{constructor(){super(...arguments),this.value="",this._maxLength=110}render(){if(!this.value)return n.T;const t=this._strip(this._sanitize(this.value),this._maxLength);return n.x` <span class="excerpt">${_(t)}</span> `}_sanitize(t){return t.replace(/<mark>/g,"__MARK_START__").replace(/<\/mark>/g,"__MARK_END__").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/__MARK_START__/g,"<mark>").replace(/__MARK_END__/g,"</mark>")}_strip(t,r){const e=t.match(/<mark>(.*?)<\/mark>/);if(!e)return t.slice(0,r);const n=e.index,a=e[0].length,s=Math.max(0,n-Math.floor((r-a)/2)),i=Math.min(t.length,s+r);return t.slice(s,i)}};j.styles=[u.w,n.i`
      span {
        line-height: 1;
        white-space: nowrap;
        color: var(--canary-color-gray-20);
        font-size: 0.875rem;
        font-weight: normal;
        opacity: 0.8;
      }

      mark {
        border-radius: 2px;
        background-color: var(--canary-is-light, var(--canary-color-primary-30))
          var(--canary-is-dark, var(--canary-color-primary-20));
        color: var(--canary-color-gray-90);
      }
    `],N([(0,l.n)({type:String})],j.prototype,"value",2),j=N([(0,a.t)("canary-snippet-excerpt")],j);var D=Object.defineProperty,I=Object.getOwnPropertyDescriptor,L=(t,r,e,n)=>{for(var a,s=n>1?void 0:n?I(r,e):r,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(n?a(r,e,s):a(s))||s);return n&&s&&D(r,e,s),s};let S=class extends n.s{render(){if("webpage"!==this.match.type)throw new Error;return n.x`
      <div class="container" part="container">
        <canary-search-match-base
          url=${this.match.url}
          exportparts="container:match-item"
        >
          <canary-url-paths slot="url" .url=${this.match.url}>
          </canary-url-paths>
          <span slot="title-icon" class="i-heroicons-bookmark"></span>
          <canary-snippet-title slot="title" .value=${this.match.title}>
          </canary-snippet-title>
          <canary-snippet-excerpt slot="excerpt" .value=${this.match.excerpt}>
          </canary-snippet-excerpt>
        </canary-search-match-base>
        ${this.match.sub_results.map(((t,r)=>n.x`
            <canary-search-match-base
              url=${t.url}
              exportparts="container:match-item"
            >
              <canary-icon-tree
                slot="content-before"
                .last=${r===this.match.sub_results.length-1}
              >
              </canary-icon-tree>
              <canary-snippet-title
                slot="title"
                class="title"
                .value=${t.title}
              >
              </canary-snippet-title>
              <canary-snippet-excerpt
                slot="excerpt"
                class="excerpt"
                .value=${t.excerpt}
              >
              </canary-snippet-excerpt>
            </canary-search-match-base>
          `))}
      </div>
    `}};S.styles=[u.g,n.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: icons */
.i-heroicons-bookmark{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25L4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.5 48.5 0 0 1 11.186 0'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
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
.flex{display:flex;};
    `,n.i`
      .container {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .i-heroicons-bookmark {
        opacity: 0.4;
      }
    `],L([(0,l.n)({type:Object})],S.prototype,"match",2),S=L([(0,a.t)("canary-search-match-webpage")],S);var q=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,H=(t,r,e,n)=>{for(var a,s=n>1?void 0:n?Y(r,e):r,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(n?a(r,e,s):a(s))||s);return n&&s&&q(r,e,s),s};const B="canary-search-match-openapi",V="canary-search-match-github-issue",U="canary-search-match-github-discussion";let K=class extends n.s{render(){return"webpage"===this.match.type?n.x`<canary-search-match-webpage
        .match=${this.match}
        part="match-group"
        exportparts="match-item"
      >
      </canary-search-match-webpage> `:"openapi"===this.match.type?this.is_element_defined(B)?n.x`<canary-search-match-openapi
        .match=${this.match}
        part="match-group"
        exportparts="match-item"
      >
      </canary-search-match-openapi> `:(this._log_element_not_defined(B),n.T):"github_issue"===this.match.type?this.is_element_defined(V)?n.x`<canary-search-match-github-issue
        .match=${this.match}
        part="match-group"
        exportparts="match-item"
      >
      </canary-search-match-github-issue> `:(this._log_element_not_defined(V),n.T):"github_discussion"===this.match.type?this.is_element_defined(U)?n.x`<canary-search-match-github-discussion
        .match=${this.match}
        part="match-group"
        exportparts="match-item"
      >
      </canary-search-match-github-discussion>`:(this._log_element_not_defined(U),n.T):void 0}is_element_defined(t){return void 0!==globalThis.customElements.get(t)}_log_element_not_defined(t){console.error(`${t} is not defined. Please make sure to import it.`)}};K.styles=u.w,H([(0,l.n)({type:Object})],K.prototype,"match",2),K=H([(0,a.t)("canary-search-match")],K);var W=Object.defineProperty,G=Object.getOwnPropertyDescriptor;let F=class extends n.s{render(){return n.x`
      <div class="container">
        <div class="icon i-heroicons-exclamation-triangle"></div>
        <span>Sorry, something went wrong. Please try again later.</span>
      </div>
    `}};F.styles=[u.g,n.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: icons */
.i-heroicons-exclamation-triangle{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0zM12 15.75h.007v.008H12z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
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
.flex{display:flex;}
.border{border-width:1px;};
    `,n.i`
      div.container {
        display: flex;
        gap: 8px;
        align-items: center;

        padding: 8px 16px;

        border-radius: 8px;
        border: 1px solid var(--canary-color-gray-95);

        color: var(--canary-color-gray-10);
        font-size: 0.875rem;
      }
    `],F=((t,r,e,n)=>{for(var a,s=n>1?void 0:n?G(r,e):r,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(n?a(r,e,s):a(s))||s);return n&&s&&W(r,e,s),s})([(0,a.t)("canary-error")],F);var Q=Object.defineProperty,J=Object.getOwnPropertyDescriptor,X=(t,r,e,n)=>{for(var a,s=n>1?void 0:n?J(r,e):r,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(n?a(r,e,s):a(s))||s);return n&&s&&Q(r,e,s),s};let Z=class extends n.s{render(){if(!this._execution)return n.T;const{matches:t}=this._execution.search;return 0===t.length?n.T:n.x`
      ${this._execution.status===c.T.ERROR?n.x`<canary-error></canary-error>`:n.x`
            <div class="container" part="container">
              ${t.map((t=>n.x`<canary-search-match
                    exportparts="match-group,match-item"
                    .match=${t}
                  ></canary-search-match>`))}
            </div>
          `}
    `}};Z.styles=n.i`
    .container {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
  `,X([(0,i.c)({context:o.kF,subscribe:!0}),(0,s.r)()],Z.prototype,"_execution",2),Z=X([(0,a.t)("canary-search-results")],Z)},3277:(t,r,e)=>{e.d(r,{c:()=>a});var n=e(5793);function a({context:t,subscribe:r}){return(e,a)=>{"object"==typeof a?a.addInitializer((function(){new n.s(this,{context:t,callback:t=>{e.set.call(this,t)},subscribe:r})})):e.constructor.addInitializer((e=>{new n.s(e,{context:t,callback:t=>{e[a]=t},subscribe:r})}))}}},5793:(t,r,e)=>{e.d(r,{s:()=>a});var n=e(699);class a{constructor(t,r,e,n){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,r)=>{this.unsubscribe&&(this.unsubscribe!==r&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,r)),this.unsubscribe=r},this.host=t,void 0!==r.context){const t=r;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=r,this.callback=e,this.subscribe=n??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new n.s(this.context,this.t,this.subscribe))}}},8030:(t,r,e)=>{e.d(r,{i:()=>i});var n=e(699);class a{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,r=!1){const e=r||!Object.is(t,this.o);this.o=t,e&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:r}]of this.subscriptions)t(this.o,r)},void 0!==t&&(this.value=t)}addCallback(t,r,e){if(!e)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:r});const{disposer:n}=this.subscriptions.get(t);t(this.value,n)}clearCallbacks(){this.subscriptions.clear()}}class s extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class i extends a{constructor(t,r,e){var a,s;super(void 0!==r.context?r.initialValue:e),this.onContextRequest=t=>{const r=t.composedPath()[0];t.context===this.context&&r!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,r,t.subscribe))},this.onProviderRequest=t=>{const r=t.composedPath()[0];if(t.context!==this.context||r===this.host)return;const e=new Set;for(const[a,{consumerHost:s}]of this.subscriptions)e.has(a)||(e.add(a),s.dispatchEvent(new n.s(this.context,a,!0)));t.stopPropagation()},this.host=t,void 0!==r.context?this.context=r.context:this.context=r,this.attachListeners(),null==(s=(a=this.host).addController)||s.call(a,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new s(this.context))}}},699:(t,r,e)=>{e.d(r,{s:()=>n});let n=class extends Event{constructor(t,r,e){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=r,this.subscribe=e??!1}}},6468:(t,r,e)=>{e.d(r,{LL:()=>s,br:()=>a,kF:()=>u,ld:()=>c,pC:()=>i,qD:()=>o});const n=t=>Symbol(t),a=n("theme"),s=n("operation"),i=n("mode"),o=n("query"),c=n("filters"),u=n("execution")},7319:(t,r,e)=>{e.d(r,{e:()=>a,i:()=>s,t:()=>n});const n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},a=t=>(...r)=>({_$litDirective$:t,values:r});class s{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,e){this._$Ct=t,this._$AM=r,this._$Ci=e}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}},5147:(t,r,e)=>{e.d(r,{E:()=>c,T:()=>i});var n=e(8030),a=e(4932),s=e(6468);const i={INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},o="manager";class c{constructor(t,r){this._abortController=new AbortController,this._callId=0,this._initialState={status:i.INITIAL,ask:{scratchpad:"",blocks:[]},search:{matches:[],suggestion:{questions:[]}},_search:{matches:[],suggestion:{questions:[]}}},this._options=r,this._ctx=new n.i(t,{context:s.kF,initialValue:this._initialState})}get ctx(){return this._ctx.value}set ctx(t){this._ctx.setValue(t)}abort(){var t;null==(t=this._abortController)||t.abort(o)}transition(t){this.ctx={...this.ctx,...t}}async search(t,r,e){var n;if(!r.search)return;this.transition({status:i.PENDING}),this._abortController.abort(o);const s=++this._callId;if(null==(n=r.beforeSearch)||n.call(r,t),await(0,a.cM)(this._options.searchDebounceMs),s===this._callId){this._abortController=new AbortController;try{this.transition({status:i.PENDING});const n=await r.search(t,this._abortController.signal);this.transition({status:i.COMPLETE,search:{...n,matches:(0,a.W5)(n.matches,e)},_search:{...n,matches:n.matches}})}catch(c){if(c===o||c instanceof Error&&"AbortError"===c.name)return void this.transition({status:i.INITIAL});console.error(c),this.transition({status:i.ERROR})}}}async ask(t,r,e){if(!r.ask)return;this.transition({...this._initialState,status:i.PENDING}),this._abortController.abort(o);const n=++this._callId;if(await(0,a.cM)(this._options.askDebounceMs),n===this._callId){this._abortController=new AbortController;try{this.transition({...this._initialState,status:i.PENDING}),await r.ask(t,this._handleDelta.bind(this),this._abortController.signal),this.transition({status:i.COMPLETE})}catch(s){if(s===o||s instanceof Error&&"AbortError"===s.name)return void this.transition({status:i.INITIAL});console.error(s),this.transition({status:i.ERROR})}}}_handleDelta(t){this.transition({ask:t})}}},1674:(t,r,e)=>{e.d(r,{e:()=>p,n:()=>b});var n=e(4440),a=e(7319);const s=(t,r)=>{var e;const n=t._$AN;if(void 0===n)return!1;for(const a of n)null==(e=a._$AO)||e.call(a,r,!1),s(a,r);return!0},i=t=>{let r,e;do{if(void 0===(r=t._$AM))break;e=r._$AN,e.delete(t),t=r}while(0===(null==e?void 0:e.size))},o=t=>{for(let r;r=t._$AM;t=r){let e=r._$AN;if(void 0===e)r._$AN=e=new Set;else if(e.has(t))break;e.add(t),l(r)}};function c(t){void 0!==this._$AN?(i(this),this._$AM=t,o(this)):this._$AM=t}function u(t,r=!1,e=0){const n=this._$AH,a=this._$AN;if(void 0!==a&&0!==a.size)if(r)if(Array.isArray(n))for(let o=e;o<n.length;o++)s(n[o],!1),i(n[o]);else null!=n&&(s(n,!1),i(n));else s(this,t)}const l=t=>{t.type==a.t.CHILD&&(t._$AP??(t._$AP=u),t._$AQ??(t._$AQ=c))};class h extends a.i{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,e){super._$AT(t,r,e),o(this),this.isConnected=t._$AU}_$AO(t,r=!0){var e,n;t!==this.isConnected&&(this.isConnected=t,t?null==(e=this.reconnected)||e.call(this):null==(n=this.disconnected)||n.call(this)),r&&(s(this,t),i(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}const p=()=>new d;class d{}const g=new WeakMap,b=(0,a.e)(class extends h{render(t){return n.T}update(t,[r]){var e;const a=r!==this.Y;return a&&void 0!==this.Y&&this.rt(void 0),(a||this.lt!==this.ct)&&(this.Y=r,this.ht=null==(e=t.options)?void 0:e.host,this.rt(this.ct=t.element)),n.T}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const r=this.ht??globalThis;let e=g.get(r);void 0===e&&(e=new WeakMap,g.set(r,e)),void 0!==e.get(this.Y)&&this.Y.call(this.ht,void 0),e.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,r;return"function"==typeof this.Y?null==(t=g.get(this.ht??globalThis))?void 0:t.get(this.Y):null==(r=this.Y)?void 0:r.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},4715:(t,r,e)=>{e.d(r,{r:()=>a});var n=e(4676);function a(t){return(0,n.n)({...t,state:!0,attribute:!1})}},556:(t,r,e)=>{e.d(r,{g:()=>a,s:()=>i,w:()=>s});var n=e(4440);const a=n.i`
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
`,i=n.i`
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
`},4932:(t,r,e)=>{e.d(r,{Kl:()=>s,W5:()=>o,b2:()=>n,cM:()=>a});const n=t=>i(t).pathname.split("/").map(((t,r)=>{const e=t.replace(/[-_]/g," ");return e.charAt(0).toUpperCase()+e.slice(1)})).map((t=>t.includes("#")?t.split("#")[0]:t)).map((t=>t.endsWith(".html")?t.replace(".html",""):t)).map(decodeURIComponent).filter(Boolean).slice(-4),a=async t=>new Promise((r=>setTimeout(r,t))),s=t=>{try{const{pathname:r,search:e}=i(t);return r+e}catch{return t}},i=t=>{const r=t.startsWith("http")?t:t.startsWith("/")?`https://example.com${t}`:`https://example.com/${t}`;return new URL(r)},o=(t,r)=>Object.entries(r).reduce(((t,[r,{fn:e,args:n}])=>e(t,n)),t)}}]);