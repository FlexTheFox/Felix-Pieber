// ==UserScript==
// @name         Web Stats Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Felix Pieber
// @icon         https://icon-library.com/images/analytics-icon-png/analytics-icon-png-27.jpg
// @description  Free autoreload Web Bot.
// @website      https://felixpieber.github.com/web
// @updateURL    https://felixpieber.github.io/web/js/Web.Stats.Bot.user.js/
// @grant        none
// @include      *://www.*.*/*
// ==/UserScript==

setTimeout(function(){ location.reload(); }, 20*100);