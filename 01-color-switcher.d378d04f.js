const e=document.querySelector("body"),t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let a=null;function l(){const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;e.style.backgroundColor=t}d.disabled=!0,t.addEventListener("click",(()=>{a=setInterval(l,1e3),t.disabled=!0,d.disabled=!1})),d.addEventListener("click",(()=>{clearInterval(a),t.disabled=!1,d.disabled=!0}));
//# sourceMappingURL=01-color-switcher.d378d04f.js.map
