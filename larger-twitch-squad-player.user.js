// ==UserScript==
// @name        Larger Twitch squad player
// @description Removes the unnecessary title bar on Twitch squad streams so the video player can be larger
// @namespace   Sv443
// @match       *://www.twitch.tv/*/squad
// @grant       none
// @version     1.0
// @author      Sv443
// @run-at      document-start
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
