// ==UserScript==
// @name         Dark Instagram
// @namespace    http://tampermonkey.net/
// @version      2.6
// @icon         https://i.gifer.com/7j9n.gif
// @description  A Dark Mode Script for Instagram.
// @author       Felix Pieber
// @match        https://www.instagram.com/*
// @match        https://about.instagram.com/*
// @match        https://help.instagram.com/*
// @match        https://business.facebook.com/creatorstudio/*
// @website      https://felixpieber.github.io/web/
// @supportURL   https://www.instagram.com/flex_the_fox/
// @updateURL    https://felixpieber.github.io/web/projects/Downloads/Dark.Instagram.user.js/
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
	var head, style;
	head = document.getElementsByTagName('head')[0];
	if (!head) { return; }
	style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = css;
	head.appendChild(style);
}

addGlobalStyle('._3Laht, .o64aR { background-color: #212529 !important; }'); //background
addGlobalStyle('._lz6s { background-color: #343A40 !important; }'); //header
addGlobalStyle('.Di7vw { background: #495057 !important; }'); //search bar background
addGlobalStyle('.Di7vw { border: solid 1px #495057 !important; }'); //search bar border
addGlobalStyle('.pbgfb { color: #999999 !important; }'); //'Search' text
addGlobalStyle('.x3qfX { background-color: #50728c !important; }'); //search bar background after clicking
addGlobalStyle('.XTCLo { border: solid 1px #50728c !important; }'); //search bar border after clicking
addGlobalStyle('.fuqBx { background-color: #353941 !important; }'); //search results background after clicking
addGlobalStyle('.JvDyy { background: #50728c !important; }'); //search result during mouse hover
addGlobalStyle('.Ap253 { color: #000000 !important; }'); //handle text color in search result
addGlobalStyle('.Fy4o8 { color: #90b8f8 !important; }'); //username text color in search result
addGlobalStyle('.L3NKy, a.L3NKy, a.L3NKy:visited { background-color: #50728c !important; }'); //'Log In' background
addGlobalStyle('a.tdiEy, a.tdiEy:visited { color: #50728c !important; }'); //'Sign Up'
addGlobalStyle('.-fzfL { border-color: #50728c !important; }'); //'Following' border color
addGlobalStyle('.-fzfL { color: #50728c !important; }'); //'Following' text color
addGlobalStyle('._5f5mN { background-color: #90b8f8 !important; }'); //followed
addGlobalStyle('.KV-D4 { color: #3c5386 !important; }'); //handle color
addGlobalStyle('.g47SY { color: #ffffff !important; }'); //#posts, #followers, #following
addGlobalStyle('.-nal3, .-nal3:active, .-nal3:hover, .-nal3:visited { color: #5F85DB !important; }'); //posts, followers, following
addGlobalStyle('._32eiM, ._32eiM:visited { color: #5f85db !important; }'); //'Followed by ____ + x more'
addGlobalStyle('.zwlfE { color: #000000 !important; }'); //username color
addGlobalStyle('a.T-jvg, a.T-jvg:visited { color #50728c !important; }'); //'POSTS'
addGlobalStyle('a, a:visited { color: #50728c !important; }'); //'TAGGED'
addGlobalStyle('.T-jvg { border-top: 1px solid #999999 !important; }'); // line above 'POSTS'
addGlobalStyle('._3G4x7 { color: #50728c !important; }'); //'LANGUAGES'
addGlobalStyle('.DINPA { color: #90b8f8 !important; }'); //'INSTAGRAM FROM FACEBOOK'
addGlobalStyle('.eXle2 { color: #90b8f8 !important; }'); //text color of highlight names

//for pages with 'Requested'
addGlobalStyle ('._8A5w5, a._8A5w5, a._8A5w5:visited { border: 1px solid #50728c !important; color: #50728c !important; }'); //'Requested' border and 'Requested' text color
addGlobalStyle('._4Kbb_ { border: 1px solid #50728c !important; }'); //blank space border
addGlobalStyle('._4Kbb_ { background-color: #353941 !important; }'); //blank space
addGlobalStyle('.tHaIX { background-color: #26282b !important; }'); //lower blank space
addGlobalStyle('._41KYi { background: #353941 !important; }'); //profile blank space
addGlobalStyle('._41KYi { border: 1px solid #50728c !important; }'); //profile space border
addGlobalStyle('.Qj3-a, .Qj3-a:visited { color: #50728c !important; }'); //profile space--handle color
addGlobalStyle('._7cyhW { color: #90b8f8 !important; }'); //profile space--username color
addGlobalStyle('.L3NKy, a.L3NKy, a.L3NKy:visited { background-color: #90b8f8 !important; }'); //profile space--follow button background
addGlobalStyle('.L3NKy, a.L3NKy, a.L3NKy:visited { border: #50728c !important; }'); //profile space--follow button border
addGlobalStyle('.L3NKy, a.L3NKy, a.L3NKy:visited { color: #50728c !important; }'); //profile space--follow text color
addGlobalStyle('.Rebts { color: #5F85DB !important; }'); //'Suggestions For You'
addGlobalStyle('.VIsJD, .rkEop { color: #5F85DB !important; }'); //'This Account is Private'

//Annoying White Line
addGlobalStyle('.Nd_Rl, .fx7hk { border-top: 1px solid #50728c !important; }'); // annoying white line

//for pages you have neither followed nor requested to follow
addGlobalStyle('.jIbKX, .m4t9r.jIbKX { background: #90b8f8 !important; color: #353941 !important; }'); //'Follow' + Drop down
addGlobalStyle('.jIbKX, .m4t9r.jIbKX { border-color: #90b8f8 !important; }'); //border color of Follow and drop down

// // // // // // // // //

//For Pages That Result In "Sorry, this page isn't available"
addGlobalStyle('.-cx-PRIVATE-NavBar__root__ { background-color: #353941 !important; border-bottom: 1px solid #353941 !important; }'); //gray header
addGlobalStyle('.-cx-PRIVATE-NavBar__username__ { color: #90b8f8 !important; }'); //username color

//Fixes To "Sorry, this..."
addGlobalStyle('h2 { color: #90b8f8 !important; }'); //'Sorry, this page isn't available' text color
addGlobalStyle('.-cx-PRIVATE-ErrorPage__errorContainer__ { background-color: #26282b !important; padding: 100px 40px 0; }'); //upper background
addGlobalStyle('.-cx-PRIVATE-Page__main__ { background-color: #26282b !important; }'); //background color
addGlobalStyle('body { background-color: #26282b !important; }'); //full background
addGlobalStyle('.-cx-PRIVATE-Footer__copyright__ { color: #90b8f8 !important; }'); //2021 Instagram

// // // // // // // // //

//For Individual Posts
addGlobalStyle('.ltEKP .QBXjJ { border: 1px solid #26282b !important; }'); //border color
addGlobalStyle('.ltEKP .QBXjJ { background-color: #353941 !important; }'); //main background color
addGlobalStyle('.JyscU.ePUX4 .UE9AK { border-left: 1px solid #353941 !important }'); //upper box--left border
addGlobalStyle('.JyscU.ePUX4 .eo2As { border-left: 1px solid #353941 !important }'); //mid box-left border
addGlobalStyle('.JyscU .UE9AK { border-bottom: 1px solid #999999 !important }'); //upper box-bottom border
addGlobalStyle('.JyscU .Slqrh { border-top: 1px solid #999999 !important }'); //mid bottom box-top border
addGlobalStyle('.sH9wk { border-top: 1px solid #999999 !important }'); //bottom box-top border
addGlobalStyle ('span { color: #999999 !important }'); //text color in comment sections

//For Opening Posts On An IG Page
addGlobalStyle('.JyscU.ePUX4 .UE9AK { background-color: #353941 !important; }'); //upper box color
addGlobalStyle('.JyscU.ePUX4 .eo2As { background-color: #353941 !important; }'); //general background color

//Main page
addGlobalStyle('.M9sTE { background-color: #353941 !important; }');
addGlobalStyle('article._8Rm4L.M9sTE.L_LMM.SgTZ1.ePUX4 { border: 1px solid #999999 !important; }');
addGlobalStyle('.DPiy6 { background-color: #353941 !important; }');
addGlobalStyle('.b2rUF { border: 1px solid #999999 !important; }');

//Stroys
addGlobalStyle('.zGtbP { background-color: #212529 !important; }'); //background eebAO
addGlobalStyle('.eebAO { color: #50728c !important; }');

//Suggestions For You
addGlobalStyle('._8UZ6e { background-color: #212529 !important; }'); //header background
addGlobalStyle('.NP414.ccgHY.GZkEI { background-color: #26282b !important; border: #26282b !important; }'); //background of suggestions pop up

// // // // // // // // //

//Profile Page
addGlobalStyle('.JLbVX { background-color: #26282b !important; }'); //background to 'start capturing moments'
addGlobalStyle('.BvMHM.EzUlV { background-color: #26282b !important; }'); //profile settings background
addGlobalStyle('.BvMHM { border: 1px solid #999999 !important; }'); //border color of settings
addGlobalStyle('label { color: #26282b !important; }'); //text color
addGlobalStyle('h1.nsKSz { color: #26282b !important; }'); //text color of header
addGlobalStyle('a.h-aRd.fuQUr { background-color: #353942 !important; }'); //background color when highlighted
addGlobalStyle('.JLJ-B, .p7vTm { color: #364b5c !important; }'); //text in boxes
addGlobalStyle('.RO68f { background-color: #2f3d5c !important; }'); //boxes background
addGlobalStyle('.j_2Hd { border: #365064 !important; color: #999999 !important; }'); //password color
addGlobalStyle('._lz6s { border-bottom: 1px solid #353942 !important; }'); //bottom border of header

//Direct
addGlobalStyle('.oYYFH { background-color: #212529 !important; }'); //background
addGlobalStyle('._7WGDw { background-color: #212529 !important; }'); //background
addGlobalStyle('.oNO81 { background-color: #212529 !important; }'); //PRIMERY and GENERAL background
addGlobalStyle('.m7ETg { color: #999999 !important; }');
addGlobalStyle('.S-mcP { background-color: #343A40 !important; }'); //Direct-header background
addGlobalStyle('.X3a-9 textarea { color: #ffffff !important; }'); //Direct write color

//Comment
addGlobalStyle('.Ypffh { color: #ffffff !important; }');

// // // // // // // // //

//help.instagram.com
addGlobalStyle('._io { background-color: #212529 !important; }'); //background
addGlobalStyle('._4tvm { background-color: #212529 !important; }'); //help-background
addGlobalStyle('._4g07 { background-color: #212529 !important; }'); //content-background

//creator.studio
addGlobalStyle('._3wpv { background-color: #212529 !important; }'); //background
addGlobalStyle('.tb2mzrle { background-color: #212529 !important; }'); //background
addGlobalStyle('.lmtvg2su { background-color: #212529 !important; }'); //background
addGlobalStyle('.g1fckbup { background-color: #e0e0e0 !important; }'); //create post background
addGlobalStyle('.ReactVirtualized__Grid__innerScrollContainer { background-color: #212529 !important; }'); //feed panel
addGlobalStyle('._7-iu { background-color: #212529 !important; }'); //create feed - background
addGlobalStyle('._85h_ { background-color: #212529 !important; }'); //create feed - footer
addGlobalStyle('._7yqd { background-color: #212529 !important; }'); //create feed - right panel
addGlobalStyle('._7_8t { background-color: #212529 !important; }'); //create feed - add pic
addGlobalStyle('._4-i0 { background-color: #212529 !important; }'); //create feed - delete?
addGlobalStyle('._4-i2 { background-color: #212529 !important; }'); //create feed - delete?
addGlobalStyle('._5a8u { background-color: #212529 !important; }'); //create feed - delete?
addGlobalStyle('._3e7s { background-color: #212529 !important; }'); //posted feed img background
addGlobalStyle('._1l9z { background-color: #212529 !important; }'); //insights footer
addGlobalStyle('._7im8 { background-color: #212529 !important; }'); //insights content table
addGlobalStyle('._7yq6 { background-color: #212529 !important; }'); //create feed - search loc
addGlobalStyle('._36g4 { background-color: #212529 !important; }'); //create feed - search loc
addGlobalStyle('._58al { color: #ffffff !important; }'); //create feed - search loc txt
addGlobalStyle('._36g5 { background-color: #212529 !important; }'); //create feed - partner drop
addGlobalStyle('._811a { background-color: #212529 !important; }'); //create feed - plan background
addGlobalStyle('._4c02 { background-color: #212529 !important; }'); //create feed - tt.mm.jj background
addGlobalStyle('._3-99 { background-color: #212529 !important; }'); //create feed - time background
addGlobalStyle('._4nx7 { color: #ffffff !important; }'); //create feed - time color h numbers
addGlobalStyle('._4nxh { color: #ffffff !important; }'); //create feed - time color :
addGlobalStyle('._4nx3 { color: #ffffff !important; }'); //create feed - time color m numbers
addGlobalStyle('._75fj { background-color: #212529 !important; }'); //edit post background
addGlobalStyle('._75fk { background-color: #212529 !important; }'); //edit post content background
addGlobalStyle('._8oy2 { background-color: #212529 !important; }'); //edit post pic background
addGlobalStyle('._6qig { background-color: #212529 !important; }'); //edit post footer background
addGlobalStyle('._6g3g { background-color: #212529 !important; }'); //create feed - mark ppl background
