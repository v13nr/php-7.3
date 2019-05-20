$(document).ready(function(){
	isValidLogin = readCookie("ck_validLogin");

	if(isValidLogin==false || isValidLogin==null ){
		alert("Anda diharuskan Login..");
		window.location.href = "pages/examples/sign-in.html";
	} else {
		alert("ready document");
	}
});