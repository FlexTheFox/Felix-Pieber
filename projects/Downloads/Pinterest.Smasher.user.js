// ==UserScript==
// @name         Pinterest Smasher
// @namespace    http://tampermonkey.net/
// @version      1.2
// @icon         https://i.gifer.com/X5qO.gif
// @description  Allows to browse Pinterest without login/registration.
// @author       Felix Pieber
// @include      http://*.pinterest.com/*
// @include      https://*.pinterest.com/*
// @include      https://*.pinterest.*/*
// @website      https://felixpieber.github.com/web/#!/
// @supportURL   https://www.instagram.com/flex_the_fox/
// @updateURL    https://felixpieber.github.io/web/projects/Downloads/Pinterest.Smasher.user.js/
// @require      http://code.jquery.com/jquery-latest.min.js
// @grant        GM_addStyle
// ==/UserScript==

$(document).ready(function () {
	if(location.pathname == "/")
		location.href = "https://www.pinterest.com/search/pins/?q=pin&rs=typed";

    GM_addStyle(`
    .UnauthBanner, body>.Modal, .ModalManager>.Modal, .Closeup__wrapper>div[style*='fixed'], iframe[src*=smartlock], div[data-test-id=signup] {
        display: none !important;
    }

    .noScroll {
        overflow: auto !important;
    }

    div[style*='cubic-bezier'], div[style*='fixed']>div[style*='opacity: 0.5'], div[style*='background-color: rgba(0, 0, 0, 0.6);'], .FullPageModal__scroller {
        display: none !important;
    }

    div.gridContainer>div, .Grid {
        height: auto !important;
    }

    :root body { overflow-y: auto !important; }
    `);
});