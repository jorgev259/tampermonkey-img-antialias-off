// ==UserScript==
// @name         img-antialiasing-off
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Turns off antialiasing for images (best for pixel art)
// @author       jorgev259/ChitoWarlock
// @match        *://*/*
// @downloadURL  https://raw.githubusercontent.com/jorgev259/tampermonkey-img-antialias-off/main/index.user.js
// @updateURL    https://raw.githubusercontent.com/jorgev259/tampermonkey-img-antialias-off/main/index.user.js
// @connect      raw.githubusercontent.com
// @connect      media.githubusercontent.com
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  GM_addStyle(`
    img { 
      image-rendering: optimizeSpeed; 
      image-rendering: -moz-crisp-edges; 
      image-rendering: -o-crisp-edges; 
      image-rendering: -webkit-optimize-contrast; 
      image-rendering: pixelated; 
      image-rendering: optimize-contrast; 
      -ms-interpolation-mode: nearest-neighbor; 
    }
  `);
})();