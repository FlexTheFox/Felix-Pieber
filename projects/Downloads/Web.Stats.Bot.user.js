// ==UserScript==
// @name         Web Stats Bot
// @namespace    http://tampermonkey.net/
// @version      0.6
// @icon         https://i.gifer.com/E9c5.gif
// @description  Free autoreload Web Bot.
// @author       Felix Pieber
// @include      *://*.*.*/*
// @website      https://felixpieber.github.com/web/#!/
// @supportURL   https://www.instagram.com/flex_the_fox/
// @updateURL    https://felixpieber.github.io/web/projects/Downloads/Web.Stats.Bot.user.js/
// ==/UserScript==

setTimeout(function(){ location.reload(); }, 20*100);

/*
== READ THIS: ==

To run the bot on a website write at @include your URL.

For example: @include *://www.instagram.com/felx_the_fox/*

==

The script is running in MILLISECONDS (ms):
1 second = 1.000 milliseconds   -> 20*100ms=2.000ms=2sec

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

For example: @include *://www.wikipedia.org/* -> now it will run on every wikipedia page, because you switched off https and the direction ending.

==

It's really simple!

/*