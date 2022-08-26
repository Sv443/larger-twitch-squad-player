// ==UserScript==
// @name        Larger Twitch squad player
// @description Removes the title bar in Twitch squad streams to increase the player size
// @namespace   https://github.com/Sv443/larger-twitch-squad-player
// @match       *://www.twitch.tv/*/squad
// @grant       none
// @license     MIT
// @version     1.0
// @author      Sv443
// @run-at      document-start
// @icon        https://www.google.com/s2/favicons?domain=twitch.tv
// ==/UserScript==

"use strict";

document.addEventListener("DOMContentLoaded", removeBar);

let tries = 0;

function removeBar()
{
  const bar = document.querySelector(".squad-stream-top-bar__container");

  if(bar)
  {
    bar.remove();
    console.info("Removed title bar.\nUserscript by Sv443.");
  }
  else if(tries < 20)
  {
    setTimeout(removeBar, 100);
    tries++;
  }
  else
    console.error("Couldn't find title bar to remove.");
}
