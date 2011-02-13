// ==UserScript==
// @include http://flashback.org/*
// @include http://*.flashback.org/*
// @include https://flashback.org/*
// @include https://*.flashback.org/*
// ==/UserScript==

window.addEventListener('DOMContentLoaded', function() {
	var links = document.getElementsByTagName('a');
	var leave_page = "flashback.org/leave.php?u=";
    for (var i = 0; i<links.length; i++) {
		var pos = links[i].href.indexOf(leave_page);
		if( pos > -1 )
	 		links[i].href = unescape(links[i].href.substring(pos+leave_page.length));    
	}
}, false);