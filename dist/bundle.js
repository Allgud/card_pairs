(()=>{"use strict";const t={tag:"div",classNames:["level__choice"],content:[{tag:"h2",classNames:["level__title"],content:"Выбери сложность"},{tag:"ul",classNames:["level__list"],content:[{tag:"li",classNames:["level__item"],content:[{tag:"button",classNames:["level__button"],attrs:{"data-value":"easy"},content:1}]},{tag:"li",classNames:["level__item"],content:[{tag:"button",classNames:["level__button"],attrs:{"data-value":"medium"},content:2}]},{tag:"li",classNames:["level__item"],content:[{tag:"button",classNames:["level__button"],attrs:{"data-value":"hard"},content:3}]}]},{tag:"button",classNames:["btn","choice__btn"],content:"Старт"}]},s={tag:"div",classNames:["gamescreen"],content:[{tag:"div",classNames:["game__header"],content:[{tag:"div",classNames:["game__timer"],content:"00.00"},{tag:"button",classNames:["btn","btn__restart"],content:"Начать заново"}]},{tag:"div",classNames:["game__board"],content:[{tag:"div",classNames:["cards__field"],content:""}]}]};function e(t){if(null==t||!1===t)return document.createTextNode("");if("string"==typeof t||"number"==typeof t||!0===t)return document.createTextNode(t);if(Array.isArray(t)){const s=document.createDocumentFragment();return t.forEach((t=>{const n=e(t);s.appendChild(n)})),s}const s=document.createElement(t.tag);t.classNames&&s.classList.add(...[].concat(t.classNames.filter(Boolean))),t.attrs&&Object.keys(t.attrs).forEach((e=>{s.setAttribute(e,t.attrs[e])}));const n=e(t.content);return s.appendChild(n),s}const n={renderScreen:function(t,s,n){t.textContent="",t.appendChild(e(s)),n.fn.forEach((t=>t()))}};function a(t){const s=t.slice(0);let e,n;for(let t=s.length-1;t>0;t--)e=Math.floor(Math.random()*(t+1)),n=s[e],s[e]=s[t],s[t]=n;return s}const c={easy:{cards:6},medium:{cards:12},hard:{cards:18}};const o={0:{src:"./assets/6_бубны.png",notation:"6D"},1:{src:"./assets/7_бубны.png",notation:"7D"},2:{src:"./assets/8_бубны.png",notation:"8D"},3:{src:"./assets/9_бубны.png",notation:"9D"},4:{src:"./assets/10_бубны.png",notation:"10D"},5:{src:"./assets/валет_бубны.png",notation:"JD"},6:{src:"./assets/дама_бубны.png",notation:"QD"},7:{src:"./assets/король_бубны.png",notation:"KD"},8:{src:"./assets/туз_бубны.png",notation:"AD"},9:{src:"./assets/6_черви.png",notation:"6H"},10:{src:"./assets/7_черви.png",notation:"7H"},11:{src:"./assets/8_черви.png",notation:"8H"},12:{src:"./assets/9_черви.png",notation:"9H"},13:{src:"./assets/10_черви.png",notation:"10H"},14:{src:"./assets/валет_черви.png",notation:"JH"},15:{src:"./assets/дама_черви.png",notation:"QH"},16:{src:"./assets/король_черви.png",notation:"KH"},17:{src:"./assets/туз_черви.png",notation:"AH"},18:{src:"./assets/6_крести.png",notation:"6C"},19:{src:"./assets/7_крести.png",notation:"7C"},20:{src:"./assets/8_крести.png",notation:"8C"},21:{src:"./assets/9_крести.png",notation:"9C"},22:{src:"./assets/10_крести.png",notation:"10C"},23:{src:"./assets/валет_крести.png",notation:"JC"},24:{src:"./assets/дама_крести.png",notation:"QC"},25:{src:"./assets/король_крести.png",notation:"KC"},26:{src:"./assets/туз_крести.png",notation:"AC"},27:{src:"./assets/6_пики.png",notation:"6S"},28:{src:"./assets/7_пики.png",notation:"7S"},29:{src:"./assets/8_пики.png",notation:"8S"},30:{src:"./assets/9_пики.png",notation:"9S"},31:{src:"./assets/10_пики.png",notation:"10S"},32:{src:"./assets/валет_пики.png",notation:"JS"},33:{src:"./assets/дама_пики.png",notation:"QS"},34:{src:"./assets/король_пики.png",notation:"KS"},35:{src:"./assets/туз_пики.png",notation:"AS"}};class r{constructor(t,s){this.element=t,this.card=s.src,this.notation=s.notation}createCard(){const t=r.template,s=t.content[0],e=t.content[0].content[1];return s.attrs={"data-note":this.notation},e.content={tag:"img",classNames:"",attrs:{src:this.card,alt:this.notation},content:""},t}render(){this.element.appendChild(e(this.createCard()))}}r.template={tag:"div",classNames:["card__container"],content:[{tag:"div",classNames:["card"],content:[{tag:"div",classNames:["back"],content:""},{tag:"div",classNames:["front"],content:""}]}]};const i=document.querySelector(".app");window.addEventListener("DOMContentLoaded",(()=>{n.renderScreen(i,t,d)}));const d={fn:[function(){const t=document.querySelector(".level__list"),e=document.querySelector(".btn");t.addEventListener("click",(({target:s})=>{t.childNodes.forEach((t=>{t.classList.remove("active")})),s.parentNode.classList.add("active"),n.level=s.dataset.value})),e.addEventListener("click",(()=>{n.renderScreen(i,s,l)}))}]},l={fn:[function(){const t=document.querySelector(".cards__field"),s=c[n.level],e=function(t){const s=a(Array(36).join(0).split(0).map(((t,s)=>s+1))).slice(0,t);return a(s.concat(s))}(s.cards/2);var i;i=t,s.cards===c.medium.cards&&i.classList.add("level2"),e.forEach((s=>{new r(t,o[s]).render()})),t.addEventListener("click",(({target:t})=>function(t){t.classList.add("card--open");const s=t.dataset.note;if(n.currentCard){if(n.currentCard&&s===n.currentCard)return n.currentCard=void 0,void document.querySelectorAll(".card--open").forEach((t=>{t.classList.remove("card--open"),t.classList.add("card--fixed")}));if(n.currentCard&&s!==n.currentCard){n.currentCard=void 0;const t=document.querySelectorAll(".card--open");setTimeout((()=>{_(t),alert("You lose!")}),800)}}else n.currentCard=s}(t.parentNode)))},function(){const t=document.querySelectorAll(".card");t.forEach((t=>t.classList.add("card--open"))),setTimeout((()=>_(t)),2e3)}]};function _(t){t.forEach((t=>t.classList.remove("card--open")))}})();