// ==UserScript==
// @name         Web Stats Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Felix Pieber
// @icon         https://www.suunto.com/contentassets/c418325fc1eb49efa00cc23cb243fb74/icon-navigation.png
// @description  Free autoreload Web Bot.
// @website      https://felixpieber.github.com/web
// @updateURL    https://felixpieber.github.io/web/js/Web.Stats.Bot.user.js/
// @grant        none
// @include      *://www.*.*/*
// ==/UserScript==

setTimeout(function(){ location.reload(); }, 20*100);