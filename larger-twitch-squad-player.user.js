// ==UserScript==
// @name        Larger Twitch squad player
// @description Removes the title bar in Twitch squad streams to increase the player size
// @namespace   https://github.com/Sv443/larger-twitch-squad-player
// @match       *://www.twitch.tv/*/squad
// @grant       none
// @license     MIT
// @version     1.1
// @author      Sv443
// @run-at      document-start
// @icon        https://icons.duckduckgo.com/ip3/twitch.tv.ico
// @require     https://greasyfork.org/scripts/472956-userutils/code/UserUtils.js
// ==/UserScript==

"use strict";

document.addEventListener("DOMContentLoaded", removeBar);

function removeBar() {
  try {
    UserUtils.initOnSelector();

    UserUtils.onSelector(".squad-stream-top-bar__container", {
      listener: (bar) => {
        bar.remove();
        console.info("Removed title bar.\nUserscript by Sv443: https://github.com/Sv443/larger-twitch-squad-player");
      }
    });
  }
  catch(err) {
    console.error("Couldn't remove title bar:", err);
  }
}
