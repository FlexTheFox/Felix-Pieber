// ==UserScript==
// @name         Hot Instagram
// @namespace    http://tampermonkey.net/
// @version      1.1
// @author       Felix Pieber
// @icon         https://vignette.wikia.nocookie.net/lumber-tycoon-2/images/8/8b/Fire_gif.gif/
// @description  Keyboard hotkeys for Instagram.
// @match        *://www.instagram.com/*
// @website      https://felixpieber.github.com/web
// @updateURL    https://felixpieber.github.io/web/projects/Downloads/Hot.Instagram.user.js/
// @grant        none
// ==/UserScript==

/* Keyboard shortcuts:
"?" to display keyboard shortcut list.
*/

(eHelp => {
  addEventListener("keydown", function(ev, ele) {
    if (
      (document.activeElement &&
        ((/^(INPUT|TEXTAREA)$/).test(document.activeElement.tagName) || document.activeElement.isContentEditable)
      )
    ) {
      return;
    } else if (ev.ctrlKey || ev.altKey) {
      return;
    } if (ev.key === "?") {
      if (!eHelp) {
        (eHelp = document.createElement("DIV")).id = "iks_help";
        eHelp.innerHTML = `<style>
        #iks_help{position:fixed;z-index:999999999;left:0;top:0;right:0;bottom:0;background:rgb(0,0,0,0.5);cursor:pointer}
        #iks_pop{position:fixed;right:.5em;bottom:.5em;border:2px solid #000;border-radius:.5em;padding:.5em;background:#2a9d8f;font-size:12pt;line-height:normal}
        #iks_title{margin-bottom:.5em;font-size:14pt;font-weight:bold;line-height:normal}
        #iks_list tr:nth-child(2n+1){background:#2a9d8f}
        #iks_list td{padding:.05em .3em;vertical-align:middle;font-size:12pt;font-weight:normal;line-height:normal}
        #iks_list div{display:inline-block;border:1px solid #000;border-radius:.3em;min-width:1.6em;background:#2a9d8f;text-align:center;font-weight:bold;line-height:1.4em}
        </style>

<div id="iks_pop">
  <div id="iks_title"><a href="https://felixpieber.github.com/web">Hot Instagram by Felix Pieber</a></div>
  <table id="iks_list">
    <tr><td><div>F</div></td><td>Toggle follow / unfollow.</td></tr>
    <tr><td><div>1</div></td><td>Pick first post on the page (if none picked yet).</td></tr>
    <tr><td><div>L</div></td><td>Toggle like / unlike.</td></tr>
    <tr><td><div>S</div></td><td>Toggle save / unsave.</td></tr>
    <tr><td><div>[</div>, <div>]</div> or <div>A</div>, <div>D</div></td><td>Navigate to previous / next post.</td></tr>
    <tr><td><div>N</div>, <div>M</div></td><td>Navigate to previous / next media in the post.<br />If there's no more, navigate to previous / next post.</td></tr>
    <tr><td><div>Space</div></td><td>Play / pause video in the post.</td></tr>
    <tr><td><div>A</div>, <div>S</div></td><td>Rewind / fast forward video in the post by 10 seconds.</td></tr>
    <tr><td><div>?</div></td><td>Display this list.</td></tr>
  </table>
</div>`;
        eHelp.onclick = () => eHelp.remove();
      }
      if (eHelp.parentNode) {
        eHelp.remove();
      } else document.documentElement.appendChild(eHelp);
      return;
    } else if (ev.shiftKey) return;
    switch (ev.key.toUpperCase()) {
      case "F": //follow/unfollow
        if (ele = document.querySelector(".oW_lN,._6VtSN") || document.querySelector(".HfISj>._4pI4F")) ele.click();
        break;
      case "1": //pick first post on the page
        if (!document.querySelector(".L_LMM") && (ele = document.querySelector(".v1Nh3>a"))) ele.click();
        break;
      case "L": //like/unlike post
        if (ele = document.querySelector(".fr66n>button")) ele.click();
        break;
      case "S": //save/unsave post
        if (ele = document.querySelector(".wmtNn>button")) ele.click();
        break;
      case "A": //previous post
      case "[":
        if (ele = document.querySelector(".ITLxV")) ele.click();
        break;
      case "D": //next post
      case "]":
        if (ele = document.querySelector("._65Bje")) ele.click();
        break;
      case "N": //previous post's picture/video
        if (ele = document.querySelector(".POSa_")) {
          ele.click();
        } else if (ele = document.querySelector(".ITLxV")) ele.click();
        break;
      case "M": //next post's picture/video
        if (ele = document.querySelector("._6CZji")) {
          ele.click();
        } else if (ele = document.querySelector("._65Bje")) ele.click();
        break;
      case "Space": //play/pause post's video
        switch ((ele = document.querySelectorAll("._2dDPU .vi798 .Ckrof")).length) {
          case 3:
            if (document.querySelector("._6CZji")) {
              ele = document.querySelector(".POSa_") ? ele[1] : ele[0];
            } else ele = ele[2];
            break;
          case 2:
            if (document.querySelector("._6CZji")) {
              ele = ele[0];
            } else ele = ele[1];
            break;
          case 1:
            ele = ele[0];
            break;
          default:
            return;
        }
        if (ele = ele.querySelector(".fXIG0")) ele.click();
        break;
      case "A": //rewind post's video by 10 seconds
        if (ele = document.querySelector(".tWeCl")) ele.currentTime -= 10;
        break;
      case "S": //fast forward post's video by 10 seconds
        if (ele = document.querySelector(".tWeCl")) ele.currentTime += 10;
        break;
    }
  });
})();
