// ==UserScript==
// @include http://flashback.org/*
// @include http://*.flashback.org/*
// @include https://flashback.org/*
// @include https://*.flashback.org/*
// ==/UserScript==

if (document.location.pathname == '/leave.php') {
   var url = unescape(document.location.search.substring(3));
   if (!url.indexOf('://')) url = 'http://' + url;
   window.location = url;
}