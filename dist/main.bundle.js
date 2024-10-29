(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(354),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,":root {\n  /* Define ship color variables */\n  --blue-border: 2px solid blue;\n  --ship-background: rgb(197, 226, 238);\n}\n\n* {\n  margin: 0;\n  border: 0;\n  padding: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n  display: flex;\n  height: 100vh;\n  flex-direction: column;\n  background-color: rgb(124, 194, 255);\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  font-size: 24px;\n  color: white;\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: black;\n}\n\nmain {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px 0px;\n  gap: 5px;\n  font-size: 20px;\n  font-weight: 600;\n  color: white;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n.gameboard {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin-bottom: 20px;\n  width: 400px;\n  height: 400px;\n  border: 2px solid rgb(55, 55, 55);\n}\n\n.gameboard button {\n  border: 1px solid rgb(146, 143, 143);\n  background-color: rgb(236, 231, 231);\n  cursor: pointer;\n  position: relative;\n}\n\n/* Start of ship, X-axis */\n.gameboard .start-ship-x {\n  border-top: var(--blue-border);\n  border-bottom: var(--blue-border);\n  border-left: var(--blue-border);\n  border-right: var(--ship-background);\n  background-color: var(--ship-background) !important;\n}\n\n/* Middle of ship, X-axis */\n.gameboard .mid-ship-x {\n  border-top: var(--blue-border);\n  border-bottom: var(--blue-border);\n  border-left: var(--ship-background);\n  border-right: var(--ship-background);\n  background-color: var(--ship-background) !important;\n}\n\n/* End of ship, X-axis */\n.gameboard .end-ship-x {\n  border-top: var(--blue-border);\n  border-bottom: var(--blue-border);\n  border-left: var(--ship-background);\n  border-right: var(--blue-border);\n  background-color: var(--ship-background) !important;\n}\n\n/* Start of ship, Y-axis */\n.gameboard .start-ship-y {\n  border-top: var(--blue-border);\n  border-left: var(--blue-border);\n  border-right: var(--blue-border);\n  border-bottom: var(--ship-background);\n  background-color: var(--ship-background) !important;\n}\n\n/* Middle of ship, Y-axis */\n.gameboard .mid-ship-y {\n  border-top: var(--ship-background);\n  border-bottom: var(--ship-background);\n  border-left: var(--blue-border);\n  border-right: var(--blue-border);\n  background-color: var(--ship-background) !important;\n}\n\n/* End of ship, Y-axis */\n.gameboard .end-ship-y {\n  border-top: var(--ship-background);\n  border-bottom: var(--blue-border);\n  border-left: var(--blue-border);\n  border-right: var(--blue-border);\n  background-color: var(--ship-background) !important;\n}\n\n/* Ship placement styles */\n.ship-placement-ctn {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.instructions-heading {\n  color: white;\n  font-size: 34px;\n  margin-bottom: 20px;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: black;\n}\n\n.toggle-axis,\n.controls-ctn button,\n.play-again-btn {\n  padding: 10px;\n  border-radius: 5px;\n  font-size: 16px;\n  cursor: pointer;\n  margin-bottom: 20px;\n  border: 1px solid black;\n  color: black;\n}\n\n.controls-ctn {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n/* Game start styles */\n.friendly-ctn,\n.enemy-ctn {\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n}\n\n.board-label {\n  color: white;\n  text-transform: uppercase;\n  font: 14px;\n}\n\n.friendly-label {\n  color: rgb(20, 62, 179);\n}\n\n.enemy-label {\n  color: red;\n}\n\n.game-start-ctn .instructions-heading {\n  text-align: center;\n}\n\n.gameboards-ctn {\n  display: flex;\n  gap: 5vw;\n}\n\n.winner-ctn {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.winner-heading {\n  color: white;\n  margin-bottom: 10px;\n}\n\n.miss::after {\n  content: '';\n  width: 6px;\n  height: 6px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -4px;\n  border-radius: 50%;\n  background-color: #000000a9;\n}\n\n.hit {\n  border: 2px solid red !important;\n  margin: 0;\n}\n\n.hit::after {\n  content: '✕';\n  color: red;\n\n  font-size: 2em;\n  font-weight: 600;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Modal styles */\n.modal {\n  display: block;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n/* Modal Content/Box */\n.modal-content {\n  background-color: #fefefe;\n  max-width: 200px;\n  margin: 15% auto;\n  border: 1px solid #888;\n  padding: 20px;\n  border-radius: 15px;\n  text-align: center;\n}\n\n.modal-content * {\n  color: black;\n  margin: 0;\n}\n\n.modal-content .winner-heading {\n  margin-bottom: 10px;\n}\n\n/* Media Queries */\n@media only screen and (max-width: 854px) {\n  .gameboards-ctn {\n    flex-direction: column-reverse;\n    justify-content: center;\n    text-align: center;\n  }\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:[":root {\n  /* Define ship color variables */\n  --blue-border: 2px solid blue;\n  --ship-background: rgb(197, 226, 238);\n}\n\n* {\n  margin: 0;\n  border: 0;\n  padding: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n  display: flex;\n  height: 100vh;\n  flex-direction: column;\n  background-color: rgb(124, 194, 255);\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  font-size: 24px;\n  color: white;\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: black;\n}\n\nmain {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px 0px;\n  gap: 5px;\n  font-size: 20px;\n  font-weight: 600;\n  color: white;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n.gameboard {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin-bottom: 20px;\n  width: 400px;\n  height: 400px;\n  border: 2px solid rgb(55, 55, 55);\n}\n\n.gameboard button {\n  border: 1px solid rgb(146, 143, 143);\n  background-color: rgb(236, 231, 231);\n  cursor: pointer;\n  position: relative;\n}\n\n/* Start of ship, X-axis */\n.gameboard .start-ship-x {\n  border-top: var(--blue-border);\n  border-bottom: var(--blue-border);\n  border-left: var(--blue-border);\n  border-right: var(--ship-background);\n  background-color: var(--ship-background) !important;\n}\n\n/* Middle of ship, X-axis */\n.gameboard .mid-ship-x {\n  border-top: var(--blue-border);\n  border-bottom: var(--blue-border);\n  border-left: var(--ship-background);\n  border-right: var(--ship-background);\n  background-color: var(--ship-background) !important;\n}\n\n/* End of ship, X-axis */\n.gameboard .end-ship-x {\n  border-top: var(--blue-border);\n  border-bottom: var(--blue-border);\n  border-left: var(--ship-background);\n  border-right: var(--blue-border);\n  background-color: var(--ship-background) !important;\n}\n\n/* Start of ship, Y-axis */\n.gameboard .start-ship-y {\n  border-top: var(--blue-border);\n  border-left: var(--blue-border);\n  border-right: var(--blue-border);\n  border-bottom: var(--ship-background);\n  background-color: var(--ship-background) !important;\n}\n\n/* Middle of ship, Y-axis */\n.gameboard .mid-ship-y {\n  border-top: var(--ship-background);\n  border-bottom: var(--ship-background);\n  border-left: var(--blue-border);\n  border-right: var(--blue-border);\n  background-color: var(--ship-background) !important;\n}\n\n/* End of ship, Y-axis */\n.gameboard .end-ship-y {\n  border-top: var(--ship-background);\n  border-bottom: var(--blue-border);\n  border-left: var(--blue-border);\n  border-right: var(--blue-border);\n  background-color: var(--ship-background) !important;\n}\n\n/* Ship placement styles */\n.ship-placement-ctn {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.instructions-heading {\n  color: white;\n  font-size: 34px;\n  margin-bottom: 20px;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: black;\n}\n\n.toggle-axis,\n.controls-ctn button,\n.play-again-btn {\n  padding: 10px;\n  border-radius: 5px;\n  font-size: 16px;\n  cursor: pointer;\n  margin-bottom: 20px;\n  border: 1px solid black;\n  color: black;\n}\n\n.controls-ctn {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n/* Game start styles */\n.friendly-ctn,\n.enemy-ctn {\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n}\n\n.board-label {\n  color: white;\n  text-transform: uppercase;\n  font: 14px;\n}\n\n.friendly-label {\n  color: rgb(20, 62, 179);\n}\n\n.enemy-label {\n  color: red;\n}\n\n.game-start-ctn .instructions-heading {\n  text-align: center;\n}\n\n.gameboards-ctn {\n  display: flex;\n  gap: 5vw;\n}\n\n.winner-ctn {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.winner-heading {\n  color: white;\n  margin-bottom: 10px;\n}\n\n.miss::after {\n  content: '';\n  width: 6px;\n  height: 6px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -4px;\n  border-radius: 50%;\n  background-color: #000000a9;\n}\n\n.hit {\n  border: 2px solid red !important;\n  margin: 0;\n}\n\n.hit::after {\n  content: '✕';\n  color: red;\n\n  font-size: 2em;\n  font-weight: 600;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Modal styles */\n.modal {\n  display: block;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n/* Modal Content/Box */\n.modal-content {\n  background-color: #fefefe;\n  max-width: 200px;\n  margin: 15% auto;\n  border: 1px solid #888;\n  padding: 20px;\n  border-radius: 15px;\n  text-align: center;\n}\n\n.modal-content * {\n  color: black;\n  margin: 0;\n}\n\n.modal-content .winner-heading {\n  margin-bottom: 10px;\n}\n\n/* Media Queries */\n@media only screen and (max-width: 854px) {\n  .gameboards-ctn {\n    flex-direction: column-reverse;\n    justify-content: center;\n    text-align: center;\n  }\n}\n"],sourceRoot:""}]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var A=0;A<n.length;A++){var l=[].concat(n[A]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var d=n[s],A=r.base?d[0]+r.base:d[0],l=a[A]||0,c="".concat(A," ").concat(l);a[A]=l+1;var p=t(c),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var h=o(u,r);r.byIndex=s,e.splice(s,0,{identifier:c,updater:h,references:1})}i.push(c)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var d=r(n,o),A=0;A<a.length;A++){var l=t(a[A]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),s=t(659),d=t.n(s),A=t(56),l=t.n(A),c=t(540),p=t.n(c),u=t(113),h=t.n(u),b=t(208),m={};m.styleTagTransform=h(),m.setAttributes=l(),m.insert=d().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=p(),o()(b.A,m),b.A&&b.A.locals&&b.A.locals;class g{#n;#e;#t=[];constructor(){this.#e=Array.from({length:10},(()=>Array.from({length:10},(()=>({ship:null,hit:!1}))))),this.#n="x"}getAxisPlacement(){return this.#n}switchAxis(){this.#n="x"===this.#n?"y":"x"}getBoard(){return this.#e}isShipPlacementValid(n,e,t){const r=this.#e[0].length,o=this.#e.length;if("x"===this.#n){if(t<0||t>=o||e<0||e+n.getLength()-1>=r)return!1;for(let r=e;r<e+n.getLength();r++)if(null!==this.#e[t][r].ship)return!1}else{if(e<0||e>=r||t<0||t+n.getLength()-1>=o)return!1;for(let r=t;r<t+n.getLength();r++)if(null!==this.#e[r][e].ship)return!1}return!0}placeShip(n,e,t){if(!this.isShipPlacementValid(n,e,t))return!1;const r=this.#n;if(n.setAxis(r),n.setPosition([e,t]),"x"===r)for(let r=e;r<e+n.getLength();r++)this.#e[t][r].ship=n;else if("y"===r)for(let r=t;r<t+n.getLength();r++)this.#e[r][e].ship=n;return this.#t.push(n),!0}isAttackValid(n,e){return!(n<0||e<0||n>=this.#e[0].length||e>=this.#e.length)&&!0!==this.#e[e][n].hit}receiveAttack(n,e){if(!this.isAttackValid(n,e))return!1;const t=this.#e[e][n];return t.hit=!0,t.ship?(t.ship.hit(),t.ship.isSunk()?this.areAllShipsSunk()?"all sunk":"sunk":"hit"):"miss"}getShipCoordinates(n){if(!n)return null;const e=[],[t,r]=n.getPosition();for(let o=0;o<n.getLength();o++)"x"===n.getAxis()?e.push([t+o,r]):e.push([t,r+o]);return e}areAllShipsSunk(){return this.#t.every((n=>n.isSunk()))}clearShips(){this.#t=[];for(let n of this.#e)for(let e of n)e.ship&&(e.ship=null)}}class C{#r;#o;#a=0;#i;#s;constructor(n,e){this.#r=e,this.#o=n}getName(){return this.#r}getLength(){return this.#o}getHits(){return this.#a}setAxis(n){this.#i=n}getAxis(){return this.#i}setPosition(n){this.#s=n}getPosition(){return this.#s}hit(){this.#a+=1}isSunk(){return this.#a>=this.#o}}class f{#r;#d;#t;constructor(n){this.#r=n,this.#d=new g,this.#t=[new C(5,"Carrier"),new C(4,"Battleship"),new C(3,"Cruiser"),new C(3,"Submarine"),new C(2,"Destroyer")]}getName(){return this.#r}getGameboard(){return this.#d}getShips(){return this.#t}placeAllShips(){this.getShips().forEach((n=>{let e,t;do{Math.random()<.5&&this.getGameboard().switchAxis(),e=Math.floor(Math.random()*this.getGameboard().getBoard()[0].length),t=Math.floor(Math.random()*this.getGameboard().getBoard().length)}while(!this.getGameboard().isShipPlacementValid(n,e,t));this.getGameboard().placeShip(n,e,t)}))}}class E extends f{constructor(n){super(n)}placeShip(n,e,t){return this.getGameboard().placeShip(n,e,t)}attack(n,e,t){return t.receiveAttack(n,e)}}class x extends f{#A;constructor(){super("Enemy"),this.#A=this.initializeAvailableMoves()}getAvailableMoves(){return this.#A}initializeAvailableMoves(){const n=[],e=this.getGameboard().getBoard();for(let t=0;t<e[0].length;t++)for(let r=0;r<e.length;r++)n.push({x:t,y:r});return n}attack(n){if(0===this.#A.length)return!1;const e=Math.floor(Math.random()*this.#A.length),{x:t,y:r}=this.#A[e],o=n.receiveAttack(t,r);return"invalid"!==o&&this.#A.splice(e,1),{result:o,x:t,y:r}}}class B{#l=[];constructor(n="Friendly"){this.#l.push(new E(n)),this.#l.push(new x),this.#l[1].placeAllShips()}getPlayers(){return this.#l}checkWinner(){const[n,e]=this.#l;return n.getGameboard().areAllShipsSunk()?e:e.getGameboard().areAllShipsSunk()?n:null}}let y=new B;const v=()=>y,k=()=>{y=new B,_(),J()},S=n=>{const e=document.createElement("h1");e.classList.add("winner-heading"),e.textContent=`${n} Won!`;const t=document.createElement("button");t.classList.add("play-again-btn"),t.textContent="Play Again",t.addEventListener("click",k);const r=document.createElement("div");return r.classList.add("winner-ctn"),r.appendChild(e),r.appendChild(t),r},w=(n,e)=>{e.forEach((e=>{const t=parseInt(e.dataset.x),r=parseInt(e.dataset.y),o=n.getBoard()[r][t];if(null!==o.ship){const a=o.ship,i=n.getShipCoordinates(a),s=i.findIndex((([n,e])=>n===t&&e===r)),d=a.getAxis();0===s?e.classList.add("x"===d?"start-ship-x":"start-ship-y"):s>0&&s<i.length-1?e.classList.add("x"===d?"mid-ship-x":"mid-ship-y"):e.classList.add("x"===d?"end-ship-x":"end-ship-y")}}))},L=n=>{n.target.classList.contains("modal")&&n.target.remove()};let M,P,Y,q,j,T;const D=()=>{M=v(),P=M.getPlayers()[0],Y=P.getGameboard(),q=M.getPlayers()[1],j=q.getGameboard(),T=null},I=(n,e,t)=>{if("miss"===n)return t.textContent="Missed attack!",void e.classList.add("miss");if(e.classList.add("hit"),"hit"===n)t.textContent="Ship hit!";else if("sunk"===n)t.textContent="Ship sunk!";else if("all sunk"===n){t.textContent="All ships sunk!",T=M.checkWinner().getName();const n=S(T);document.querySelector(".main").prepend(n),(n=>{const e=S(n),t=document.createElement("div");t.classList.add("modal-content"),t.appendChild(e);const r=document.createElement("div");r.classList.add("modal"),r.addEventListener("click",L),r.appendChild(t),document.querySelector(".main").appendChild(r)})(T)}},z=n=>{const e=n.target;if("BUTTON"===e.tagName&&null===T){const n=parseInt(e.dataset.x),t=parseInt(e.dataset.y),r=P.attack(n,t,j),o=document.querySelector(`.enemy-board button[data-x="${n}"][data-y="${t}"]`);if(!1!==r){const n=q.attack(Y),e=document.querySelector(`.friendly-board button[data-x="${n.x}"][data-y="${n.y}"]`),t=document.querySelector(".friendly-attack-status"),a=document.querySelector(".enemy-attack-status");I(r,o,t),I(n.result,e,a)}}};let U,N,G,X,O=0,$=!1;const V=()=>{const n=document.querySelector(".confirm-btn");n&&(n.style.backgroundColor="lightgray",n.style.cursor="not-allowed")},W=()=>{const n=document.querySelector(".confirm-btn");n.style.backgroundColor="#F0F0F0",n.style.cursor="pointer"},Z=()=>{document.querySelector(".instructions-heading").textContent=O>4||$?"Confirm Ship Placement":`Place your ${X[O].getName()}:`},F=n=>{const e=n.target;if("BUTTON"===e.tagName&&!$){const n=parseInt(e.dataset.x),t=parseInt(e.dataset.y);let r=X[O];if(!G.isShipPlacementValid(r,n,t))return;if(O<X.length&&(N.placeShip(r,n,t),O++,Z()),O>=X.length)return console.log("All ships placed"),$=!0,void W()}},R=()=>{U.getPlayers()[0].getGameboard().switchAxis();const n=document.querySelector(".toggle-axis");n.textContent="Toggle Axis: X"===n.textContent?"Toggle Axis: Y":"Toggle Axis: X"},Q=(n,e,t,r)=>{"x"===r?0===e?n.classList.add("start-ship-x"):e>0&&e<t-1?n.classList.add("mid-ship-x"):n.classList.add("end-ship-x"):"y"===r&&(0===e?n.classList.add("start-ship-y"):e>0&&e<t-1?n.classList.add("mid-ship-y"):n.classList.add("end-ship-y"))},H=(n,e,t,r)=>{"x"===r?0===e?n.classList.remove("start-ship-x"):e>0&&e<t-1?n.classList.remove("mid-ship-x"):n.classList.remove("end-ship-x"):"y"===r&&(0===e?n.classList.remove("start-ship-y"):e>0&&e<t-1?n.classList.remove("mid-ship-y"):n.classList.remove("end-ship-y"))},J=()=>{G.clearShips(),O=0,$=!1,V(),Z(),document.querySelectorAll(".gameboard button").forEach((n=>{n.className=""}))},_=()=>{U=v(),N=U.getPlayers()[0],G=N.getGameboard(),X=N.getShips();const n=document.querySelector(".main");n.innerHTML="";const e=document.createElement("h1");e.classList.add("instructions-heading");const t=document.createElement("button");t.classList.add("toggle-axis"),t.textContent="Toggle Axis: X",t.addEventListener("click",R);const r=document.createElement("div");r.classList.add("gameboard"),r.addEventListener("click",F);for(let n=0;n<10;n++)for(let e=0;e<10;e++){const t=document.createElement("button");t.dataset.x=e,t.dataset.y=n,r.appendChild(t)}const o=document.createElement("button");o.classList.add("reset-btn"),o.textContent="Reset";const a=document.createElement("button");a.classList.add("randomize-btn"),a.textContent="Randomize";const i=document.createElement("button");i.classList.add("confirm-btn"),i.textContent="Confirm";const s=document.createElement("div");s.classList.add("controls-ctn"),s.appendChild(o),s.appendChild(a),s.appendChild(i);const d=document.createElement("div");d.classList.add("ship-placement-ctn"),d.appendChild(e),d.appendChild(t),d.appendChild(r),d.appendChild(s),n.appendChild(d),(()=>{const n=document.querySelector(".gameboard");n.addEventListener("mouseover",(n=>{if(O===X.length)return;const e=n.target,t=parseInt(e.dataset.x),r=parseInt(e.dataset.y);if("BUTTON"===e.tagName){if(!G.isShipPlacementValid(X[O],t,r))return e.style.cursor="not-allowed",void(e.style.backgroundColor="red");const n=X[O].getLength(),o=G.getAxisPlacement();if("x"===o)for(let e=0;e<n;e++){const a=document.querySelector(`button[data-x="${t+e}"][data-y="${r}"]`);Q(a,e,n,o)}else for(let e=0;e<n;e++){const a=document.querySelector(`button[data-x="${t}"][data-y="${r+e}"]`);Q(a,e,n,o)}}})),n.addEventListener("mouseout",(n=>{if(O===X.length)return;const e=n.target,t=parseInt(e.dataset.x),r=parseInt(e.dataset.y);if("BUTTON"===e.tagName){if(!G.isShipPlacementValid(X[O],t,r))return e.style.cursor="pointer",void(e.style.backgroundColor="rgb(236, 231, 231)");const n=X[O].getLength(),o=G.getAxisPlacement();if("x"===o)for(let e=0;e<n;e++){const a=document.querySelector(`button[data-x="${t+e}"][data-y="${r}"]`);a&&H(a,e,n,o)}else for(let e=0;e<X[O].getLength();e++){const a=document.querySelector(`button[data-x="${t}"][data-y="${r+e}"]`);a&&H(a,e,n,o)}}}))})(),document.querySelector(".controls-ctn").addEventListener("click",(n=>{const e=n.target;if(e.closest(".reset-btn"))J();else if(e.closest(".randomize-btn")){J(),N.placeAllShips(),$=!0,W(),Z();const n=document.querySelectorAll(".gameboard button");w(G,n),O=5}else e.closest(".confirm-btn")&&$&&(()=>{D();const n=document.querySelector(".main");n.innerHTML="";const e=document.createElement("span");e.classList.add("friendly-attack-status"),e.textContent="Attacking...";const t=document.createElement("h1");t.classList.add("instructions-heading","friendly-heading"),t.textContent="Friendly: ",t.appendChild(e);const r=document.createElement("span");r.classList.add("enemy-attack-status"),r.textContent="Attacking...";const o=document.createElement("h1");o.classList.add("instructions-heading","enemy-heading"),o.textContent="Enemy: ",o.appendChild(r);const a=document.createElement("div");a.classList.add("gameboard","friendly-board");const i=document.createElement("div");i.classList.add("gameboard","enemy-board"),i.addEventListener("click",z);for(let n=0;n<10;n++)for(let e=0;e<10;e++){const t=document.createElement("button");t.dataset.x=e,t.dataset.y=n,a.appendChild(t);const r=document.createElement("button");r.dataset.x=e,r.dataset.y=n,i.appendChild(r)}const s=document.createElement("h2");s.classList.add("board-label","friendly-label"),s.textContent="Friendly Waters";const d=document.createElement("h2");d.classList.add("board-label","enemy-label"),d.textContent="Enemy Waters";const A=document.createElement("div");A.classList.add("friendly-ctn"),A.appendChild(t),A.appendChild(s),A.appendChild(a);const l=document.createElement("div");l.classList.add("enemy-ctn"),l.appendChild(o),l.appendChild(d),l.appendChild(i);const c=document.createElement("div");c.classList.add("gameboards-ctn"),c.appendChild(A),c.appendChild(l);const p=document.createElement("div");p.classList.add("game-start-ctn"),p.appendChild(c),n.appendChild(p);const u=v().getPlayers()[0].getGameboard(),h=document.querySelectorAll(".friendly-board button");w(u,h)})()})),V(),Z()};_()})();
//# sourceMappingURL=main.bundle.js.map