function tr(str){
	return str.replace(/&/g, '_AMP_').replace(/\?/g, '_QST_').replace(/#/g, '_HSH_');
}

var url = window.location.href;

var fullname = document.getElementsByClassName("p-name vcard-fullname")[0].innerText; 

var title = document.getElementsByClassName("user-profile-bio")[0].innerText.trim();

var vcard = document.getElementsByClassName("vcard-details")[0].getElementsByTagName("li");

var employer = '';
var local = '';
var email = '';
var links = '';

for(i=0; i<vcard.length; i++) {
	var item = vcard[i].getAttribute("itemprop");
	if(item == "worksFor") {
		var employer = vcard[i].innerText.trim();
	}
	if(item == "homeLocation") {
		var local = vcard[i].innerText.trim();
	}
	if(item == "email") {
		var email = vcard[i].innerText.trim();
	}
	if(item == "url") {
		var links = vcard[i].innerText.trim();
	}
}
var comment = prompt("add a note");

var jsonp = '?name=' + tr(fullname) +'&email=' + tr(email) +'&title=' + tr(title) + '&empl=' + tr(employer) + '&local=' + tr(local) + '&links=' + tr(links) +'&comment=' + tr(comment) + '&url=' + tr(url);
var yourScriptUrl = "https://script.google.com/macros/s/YOUR_SCRIPT_URL/exec";
window.open(yourScriptUrl+jsonp);
