// ==UserScript==
// @name         Web Stats Bot
// @namespace    http://tampermonkey.net/
// @version      0.3
// @author       Felix Pieber
// @icon         https://www.suunto.com/contentassets/c418325fc1eb49efa00cc23cb243fb74/icon-navigation.png
// @description  Free autoreload Web Bot.
// @website      https://felixpieber.github.com/web
// @updateURL    https://felixpieber.github.io/web/js/Web.Stats.Bot.user.js/
// @grant        none
// @include      *://www.*.*/*
// ==/UserScript==

setTimeout(function(){ location.reload(); }, 20*100);

/*
== READ THIS: ==

To run the bot on a website write at @include your URL.

For example: @include https://www.instagram.com/felx_the_fox/*

==

The script is running in milliseconds.
1sek = 1.000ms -> 20*100ms=2.000ms=2sec

List:
∞=0*100
1sec=10*100
5sec=50*100
10sec=100*100
15sec=150*100
20sec=200*100
30sec=300*100
1min/60sec=600*100
2min=1200*100
5min=5000*100
10min=10000*100
30min=30000*100
1h/60min=60000*100
5h=500000*100
10h=1000000*100
24h=2400000*100

ms=millisecond
sec=second
h=hour

==

What means the "*"? -> "*" are every impossible combination.

For example: @include *://*.wikipedia./wiki/* -> now it will run on every wikipedia/wiki/ page

==