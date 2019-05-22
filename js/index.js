$(document).ready(function(){

	isValidLogin = readCookie("ck_validLogin");

	if(isValidLogin!="valid" || isValidLogin==null ){
		alert("Anda diharuskan Login..");
		window.location.href = auth_url+"sign-in.html";
	} else {
		alert("ready document");
	}

	//$("#leftsidebar").load("views/include/left_menu.html");

	$("#bt_logout").click(function(){
		logout();
	});
	$("#mn_profile").click(function(){
		load_profile();
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
			window.location.href = auth_url+"sign-in.html";
		},
		error: function(){
			alert("ajax error");
		}
	});
}

function load_profile(){
	$("#nn_content").load("views/profile.html");
}