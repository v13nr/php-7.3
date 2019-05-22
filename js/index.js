$(document).ready(function(){

	isValidLogin = readCookie("ck_validLogin");

	if(isValidLogin!="valid" || isValidLogin==null ){
		alert("Anda diharuskan Login..");
		window.location.href = base_url+"pages/examples/sign-in.html";
	} else {
		alert("ready document");
	}

	$("#bt_logout").click(function(){
		logout();
	});
});

function logout(){
	$.ajax({
		url : base_url+"../php/functions/Auth.php",
		type: "post",
		data: {cmd:"logout"},
		dataType: "json",
		success: function(res){
			alert(res.message);
			createCookie("ck_validLogin", "tidak valid", 1);
			window.location.href = base_url+"pages/examples/sign-in.html";
		},
		error: function(){
			alert("ajax error");
		}
	});
}