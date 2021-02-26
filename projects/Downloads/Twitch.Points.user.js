// ==UserScript==
// @name         Twitch Points
// @namespace    http://tampermonkey.net/
// @version      0.3
// @icon         https://i.imgur.com/Jks7wvmg.png
// @description  Auto clicking "Channel Points" on Twicht.tv
// @author       Felix Pieber
// @match        https://www.twitch.tv/*
// @website      https://felixpieber.github.io/web/#!/
// @supportURL   https://www.instagram.com/flex_the_fox/
// @updateURL    https://felixpieber.github.io/web/projects/Downloads/Twitch.Points.user.js/
// @run-at       document-end
// @grant        none
// ==/UserScript==

const button = '.claimable-bonus__icon';
var onMutate = function(mutationsList) {
	mutationsList.forEach(mutation => {
		if(document.querySelector(button)) document.querySelector(button).click();
	})
}
var observer = new MutationObserver(onMutate);
observer.observe(document.body, {childList: true, subtree: true});