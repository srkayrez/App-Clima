(self.webpackChunkMonitoramento_APP=self.webpackChunkMonitoramento_APP||[]).push([[8991],{8991:(e,t,o)=>{"use strict";o.r(t),o.d(t,{startTapClick:()=>s});var n=o(2377);const s=e=>{let t,o,s,v,p=10*-u,f=0;const m=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),L=new WeakMap,h=e=>{p=(0,n.o)(e),g(e)},E=()=>{clearTimeout(v),v=void 0,o&&(b(!1),o=void 0)},w=e=>{o||void 0!==t&&null!==t.parentElement||(t=void 0,k(i(e),e))},g=e=>{k(void 0,e)},k=(e,t)=>{if(e&&e===o)return;clearTimeout(v),v=void 0;const{x:s,y:i}=(0,n.p)(t);if(o){if(L.has(o))throw new Error("internal error");o.classList.contains(c)||P(o,s,i),b(!0)}if(e){const t=L.get(e);t&&(clearTimeout(t),L.delete(e));const o=a(e)?0:d;e.classList.remove(c),v=setTimeout(()=>{P(e,s,i),v=void 0},o)}o=e},P=(e,t,o)=>{f=Date.now(),e.classList.add(c);const n=m&&r(e);n&&n.addRipple&&(T(),s=n.addRipple(t,o))},T=()=>{void 0!==s&&(s.then(e=>e()),s=void 0)},b=e=>{T();const t=o;if(!t)return;const n=l-Date.now()+f;if(e&&n>0&&!a(t)){const e=setTimeout(()=>{t.classList.remove(c),L.delete(t)},l);L.set(t,e)}else t.classList.remove(c)},S=document;S.addEventListener("ionScrollStart",e=>{t=e.target,E()}),S.addEventListener("ionScrollEnd",()=>{t=void 0}),S.addEventListener("ionGestureCaptured",E),S.addEventListener("touchstart",e=>{p=(0,n.o)(e),w(e)},!0),S.addEventListener("touchcancel",h,!0),S.addEventListener("touchend",h,!0),S.addEventListener("mousedown",e=>{const t=(0,n.o)(e)-u;p<t&&w(e)},!0),S.addEventListener("mouseup",e=>{const t=(0,n.o)(e)-u;p<t&&g(e)},!0)},i=e=>{if(!e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const o=t[e];if(o.classList&&o.classList.contains("ion-activatable"))return o}}},a=e=>e.classList.contains("ion-activatable-instant"),r=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},c="ion-activated",d=200,l=200,u=2500}}]);