function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("7Y9D8");function u(e,t){const n=Math.random()>.3,r={position:e,delay:t};return new Promise(((e,t)=>{n&&e(r),t(r)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();let n=Number(t.currentTarget.delay.value);const r=Number(t.currentTarget.step.value),o=Number(t.currentTarget.amount.value);for(let t=1;t<=o;t++)u(t,n).then((({position:t,delay:n})=>{setTimeout((()=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`,{useIcon:!1})}),n)})).catch((({position:t,delay:n})=>{setTimeout((()=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`,{useIcon:!1})}),n)})),n+=r}));
//# sourceMappingURL=03-promises.19634c9d.js.map
