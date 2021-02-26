// ==UserScript==
// @name        No Login
// @namespace   http://tampermonkey.net/
// @version     1.8.1
// @icon        https://www.boostmybiz.com/wp-content/uploads/2019/06/Socialmedia-mobile-banner.png
// @description Removes the nagging login popups and banners in mobile and desktop versions of Facebook, Instagram, Reddit, Twitter, Quora, Ask.fm, VK and in the mobile version of Youtube.
// @author      Felix Pieber
// @match       https://*.facebook.com/*
// @exclude     https://developers.facebook.com/*
// @exclude     https://www.instagram.com/accounts/login/*
// @match       https://www.instagram.com/*
// @match       https://m.youtube.com/*
// @match       https://www.reddit.com/*
// @match       https://twitter.com/*
// @match       https://mobile.twitter.com/*
// @match       https://*.quora.com/*
// @match       https://ask.fm/*
// @match       https://vk.com/*
// @match       https://m.vk.com/*
// @website     https://felixpieber.github.io/web/#!/
// @supportURL  https://www.instagram.com/flex_the_fox/
// @updateURL   https://felixpieber.github.io/web/projects/Downloads/No.Login.user.js/
// @grant       none
// ==/UserScript==
var interval_0;
var interval_1;
var interval_3;
var interval_4;
(function(){
  //startCheck();
  window.onpopstate = startCheck();
})();
function isMobile(site){
  /*switch (site){
    'ig':
      if(document.getElementsByClassName("XTCLo").length>0){//check if search bar is shown
        if(document.getElementsByClassName("XTCLo")[0].style.display!="none"){
          return false;
        }
      }
      return true;
    'tw':
      if(document.getElementsByClassName("XTCLo").length>0){//check if search bar is shown
        if(document.getElementsByClassName("XTCLo")[0].style.display!="none"){
          return false;
        }
      }
      return true;
  }*/
}
function startCheck(){
 interval_4=setInterval(check,500);
}
function check(){
  if((document.getElementsByTagName("BUTTON").length>0)||(document.getElementsByTagName("FORM").length>0)||(document.getElementsByClassName("signup_login_buttons").length>0)){//If buttons are there, the page should have loaded. At least that's what I see...
    clearInterval(interval_4);
    if(document.location.href.includes("facebook.com")){
      interval_0=setInterval(blockPopupFB,500);
    }
    else if(document.location.href.includes("instagram.com")){
      if(isMobile("ig")){
        console.log("is mobile");
        //interval_1=setInterval(blockBannerIG,500);
        document.getElementsByTagName('head')[0].innerHTML+='<style>.RnEpo{display: none !important} .xZ2Xk{display: none !important} .tHaIX{display: none !important} body{overflow-y: scroll !important}</style>';
        //interval_2=setInterval(blockPopupIG,500);
        interval_3=setInterval(removeRelatedAccounts,500);
        addSearchBar();//sometimes might even work
      }
      else{
        console.log("is desktop");
        //interval_1=setInterval(blockBannerIG,200);
        document.getElementsByTagName('head')[0].innerHTML+='<style>.RnEpo{display: none !important} .xZ2Xk{display: none !important} .tHaIX{display: none !important} body{overflow-y: scroll !important}</style>';
        //interval_2=setInterval(blockPopupIG,200);
        interval_3=setInterval(removeRelatedAccounts,200);
        setInterval(removePicturePopup,500);
      }
    }
    else if(document.location.href.includes("//m.youtube.com")){
      blockPopupYTM();
    }
    else if(document.location.href.includes("//twitter.com")){
      blockBannerTW('d');
    }
    else if(document.location.href.includes("//mobile.twitter.com")){
      blockBannerTW('m');
    }
    else if(document.location.href.includes("reddit.com")){//reddit has a wide range of different login reminders for installing the app or logging in when browsing from a phone
      document.getElementsByTagName('head')[0].innerHTML+='<style>.m-blurred {filter: blur(0)} .XPromoNSFWBlocking__warning {display: none !important} .XPromoNSFWBlockingModal {display: none !important} .xPromoChoiceBanner {display: none !important} .XPromoPill {display: none !important} .XPromoPopup{display: none !important} .GetAppFooter{display: none !important} .XPromoInFeed {display: none !important} .PreviewDrawer{display: none !important} .scroll-disabled {overflow-y: scroll !important; position: static !important} .NavFrame {overflow-y: scroll !important}</style>';
      if(document.getElementsByClassName("TopNav__promoButton").length>0){
      	redditPatch();
      }
    }
    else if(document.location.href.includes("quora.com/")){
      document.getElementsByTagName("HEAD")[0].insertAdjacentHTML("beforeend", '<style>* {filter: none !important} #page_wrapper {filter: none !important} .new_signup_dialog{display: none !important} .q-platform--mobile{overflow-y: scroll !important; overflow-x: hidden !important;} .q-sticky{position: inherit !important}</style>');
      quoraPatchObserver();   
    }
    else if(document.location.href.includes("https://ask.fm/")){
      document.getElementsByTagName('head')[0].innerHTML+='<style>body{overflow-y: scroll !important}</style>';
      removeAskFmLoginPopup();
    }
    else if(document.location.href.includes("https://vk.com/")){
      document.getElementsByTagName('head')[0].innerHTML+='<style>body{overflow-y: scroll !important} .PageBottomBanner--unauth{display: none !important}</style>';
      checkVKLoginPopup("d");
    }
    else if(document.location.href.includes("https://m.vk.com/")){
      document.getElementsByTagName('head')[0].innerHTML+='<style>body{overflow-y: scroll !important} .PageBottomBanner--unauth{display: none !important}</style>';
      checkVKLoginPopup("m");
    }
  }
  else{
    console.log("still non buttons");
  }
}
function addSearchBar(){
  var sb=document.getElementsByClassName("coreSpriteSearchIcon");
  do{
    sb=sb.parentNode;
  }
  while(sb.style.display!="none")
  sb.style.display="block";
}
function blockPopupFB(){
  var popupFB;
  var loc=document.location.href;
  if((loc.includes("m.facebook.com"))||(loc.includes("iphone.facebook.com"))||(loc.includes("x.facebook.com"))){
    popupFB=document.getElementById("popup_xout").parentNode.parentNode.parentNode;    
	}
  else{
    popupFB=document.getElementById("pagelet_growth_expanding_cta");
  }
  if(popupFB==undefined){
    popupFB=document.getElementsByClassName("_5hn6")[0];
  }
  if(popupFB!==undefined){
    popupFB.parentNode.removeChild(popupFB);
    clearInterval(interval_0);
  }
}
function removeRelatedAccounts(){
 	//var t0=performance.now();
  try{
    var listElem=document.getElementsByClassName("e-Ph9 ccgHY  GZkEI")[0].getElementsByTagName("LI");
    for (elem of listElem){
      elem.style.transition="none";
      elem.style.transform="none";
    }
  }
  catch(err){
    console.log(err);
  }
  var closeButtons=document.getElementsByClassName("fUzmR");
  if(closeButtons.length>0){
    for(var i=0;i<closeButtons.length;i++){
      closeButtons[i].click();
    }
    clearInterval(interval_3);
  }
  //var t1=performance.now();
  //alert(t1-t0);
}
function removePicturePopup(){
  console.log("removing picture popup");
  if(!document.location.href.includes("/p/")){
    var photoLinks=document.getElementsByClassName("v1Nh3");
    for(var i=0;i<photoLinks.length;i++){
      if(photoLinks[i].getAttribute("class").includes("repaired")===false){
        if(photoLinks[i].getElementsByTagName("IMG")[0].getAttribute("src")!==null){
          var cln = photoLinks[i].children[0].cloneNode(true);
          photoLinks[i].removeChild(photoLinks[i].children[0]);
          photoLinks[i].appendChild(cln);
          photoLinks[i].setAttribute("class",(photoLinks[i].getAttribute("class")+" repaired"));
          photoLinks[i].children[0].setAttribute("target","_blank");
          photoLinks[i].children[0].setAttribute("rel","noopener noreferrer");
          photoLinks[i].children[0].children[0].children[0].children[0].style.visibility="visible";
        }
      }
    }
  }
}

/*function blockPopupIG(){ //kept for reference
  if(document.getElementsByClassName("RnEpo")[0]!==undefined){
    setScrollable();
  }
}*/
/*function setScrollable(){ //kept for reference
  document.body.style.overflow = "scroll !important";
}*/
function blockBannerTW(s){
  if(s=='d'){
  	document.getElementsByClassName("css-1dbjc4n r-16y2uox r-1n0xq6e")[0].parentNode.parentNode.parentNode.parentNode.remove();
  }
  else{
    var banner=document.getElementsByClassName("css-1dbjc4n r-1awozwy r-1pz39u2 r-18u37iz r-16y2uox")[0].parentNode;
    if(banner!=='undefined'){
      banner.parentNode.style.height="53px";
      banner.remove();
    }
    banner=document.getElementsByClassName("css-1dbjc4n r-urgr8i r-97e31f")[0];
    if(banner!=='undefined'){
      banner.remove();
    }
  }
}
function blockPopupYTM(){
  /*if(document.getElementsByClassName("upsell-dialog-lightbox")[0]!==undefined){ //kept for possible future use
    //document.getElementsByClassName("upsell-dialog-lightbox")[0].remove();
    try{
      document.body.removeAttribute("modal-open-body");
    }
    catch(err){}
  }*/
  document.getElementsByTagName('head')[0].innerHTML+='<style>.upsell-dialog-lightbox{display: none !important} [modal-open-body]{position: inherit !important}</style>';
}
function redditPatch(){
  const nav=document.getElementsByClassName("NavFrame__below-top-nav")[0];
  const config = { attributes: false, childList: true, subtree: true };
  var firstCheck=true;
  var redditPic=document.body.getElementsByTagName("IMG");
  const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
      if(firstCheck==false){
        redditPic=mutation.target.getElementsByTagName("IMG");
      }
      if(redditPic.length>0){
        for(var i=0;i<redditPic.length;i++){
          if((redditPic[i].getAttribute("src").includes("blur="))&&(redditPic[i].getAttribute("src").includes("/preview."))){
            redditPic[i].setAttribute("src",redditPic[i].getAttribute("src").split("?")[0].replace("preview","i"));
          }
        }
        firstCheck=false;
      }
    }
  };
  const bodyObserver = new MutationObserver(callback);
  bodyObserver.observe(nav, config);
}
function quoraPatchObserver(){
  var firstCheck=true;
  var searchBox=document.createElement("DIV");
  searchBox.innerHTML='<div class="q-flex qu-alignItems--center qu-justifyContent--center" style="box-sizing: border-box; display: flex; max-width: 100%;"><input id="search" style="height: 44px; text-align: center; border-radius: 22px; background-color:white; width: 100%; margin: 0.5em" class="selector_input text" type="text" value="" data-lpignore="true" data-group="js-editable" placeholder="Search" w2cid="wS7KcEIg18" id="__w2_wS7KcEIg18_input"></div>';
  searchBox.addEventListener('keypress', function(e){searchQuora(e);});
  try{
  	document.getElementsByClassName("q-sticky qu-zIndex--header")[0].appendChild(searchBox);
  }
  catch(e){
    try{
      document.getElementsByClassName("header_main")[0].appendChild(searchBox);
      document.getElementsByClassName("query_title")[0].style.marginTop="2em";
    }catch(err){console.log("Info: if you are browsing from a PC, this error is expected.");}
  }
  quoraPatch(firstCheck);
  firstCheck=false;
  const config = { attributes: true, childList: true, subtree: false };//this rough implementation is slower
  const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
				quoraPatch(firstCheck);
    }
  };
  const bodyObserver = new MutationObserver(callback);
  bodyObserver.observe(document.body, config);
}
function quoraPatch(firstCheck){
  var i;
  var wall;
  if(firstCheck==true){
    wall=document.getElementsByClassName("q-box qu-overflow--hidden");
    if(wall.length>1){
        wall[0].parentNode.children[0].remove();
    }
    wall[0].classList.remove("qu-overflow--hidden");
  }
  wall=document.getElementsByClassName('BaseSignupForm _DialogSignupForm');
  if(wall.length>0){
    for(i=0;i<wall.length;i++){
      if(wall[i].parentNode.className.includes("signup_wall_wrapper")){
        wall[i].parentNode.remove();
      }
    }
  }
  if(document.body.className.includes('signup_wall_prevent_scroll')){
    document.body.classList.remove('signup_wall_prevent_scroll');
  }
  wall=document.getElementsByClassName('new_web_signup_wall_design');
  if(wall.length>0){
    wall[0].parentNode.parentNode.remove();  //desktop
  }
  wall=document.getElementsByClassName('modal_bg new_signup_dialog');
  if(wall.length>0){
    wall[0].parentNode.remove();             //mobile
  }
  wall=document.getElementsByClassName('q-absolute qu-full qu-bg--blue');
  if(wall.length>0){
    wall[0].parentNode.remove();             //mobile
  }
}
function searchQuora(e) {
  if (e.key === 'Enter') {
    window.open("https://www.quora.com/search?q="+document.getElementById("search").value,"_self");
  }
}
function removeAskFmLoginPopup(){
  const closeButton=document.createElement("DIV");
  closeButton.style.padding="1em";
  closeButton.style.right="1em";
  closeButton.style.top="1em";
  closeButton.style.position="absolute";
  closeButton.innerHTML="X";
  closeButton.style.borderRadius="3px";
  closeButton.style.backgroundColor="#666666";
  closeButton.style.color="#FFFFFF";
  closeButton.style.cursor="pointer";
  closeButton.addEventListener("click",function(e){document.getElementsByClassName("lightbox_overlay util-vcontainer")[0].remove()});
  const popups=document.getElementsByClassName("lightbox_overlay util-vcontainer");
  if(popups.length>0){
    if(popups[0].innerHTML.includes("signupConversionForm")){
      popups[0].remove();
    }
  }
  const config = { attributes: false, childList: true, subtree: false };
  const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
      for(newNode of mutation.addedNodes){
      	if(newNode.innerHTML.includes("signupConversionForm")){
          newNode.remove();
        }
        else if(newNode.className=="lightbox_overlay util-vcontainer"){
        	newNode.children[0].insertBefore(closeButton,newNode.children[0].children[0]);
        }
      }
    }
  };
  const bodyObserver = new MutationObserver(callback);
  bodyObserver.observe(document.body, config);
}
function checkVKLoginPopup(mode){
  const popups=document.getElementsByClassName("UnauthActionBoxContainer");
  if(popups.length>0){
    removeVKLoginPopup(popups[0]);
  }
  const config = { attributes: false, childList: true, subtree: false };
  const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
      for(newNode of mutation.addedNodes){
      	if(newNode.className.includes("UnauthActionBoxContainer")){
          removeVKLoginPopup(newNode,mode);
        }
        else if(newNode.getElementsByClassName("UnauthorizedActionModal")!==undefined){
          removeVKLoginPopup(newNode,mode);
        }
      }
    }
  };
  const observer = new MutationObserver(callback);
  if(mode=="d"){
  	observer.observe(document.getElementById("box_layer"), config);
  }
  else{
    observer.observe(document.body, config);
  }
}
function removeVKLoginPopup(popup,mode){
  popup.remove();
  if(mode=="d"){
  	document.getElementById("box_layer_bg").style.display="none";
  	document.getElementById("box_layer_wrap").style.display="none";
  }
  else{
    document.getElementById("popup_wrap").style.display="none";
		document.getElementById("popup_overlay").style.display="none";
  }
}