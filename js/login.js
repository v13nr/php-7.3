$(document).ready(function(){

	$("#bt_login").click(function(){
		login();
	});
});


function login(){
	$.ajax({
		url : base_url+"../php/functions/Auth.php",
		type: "post",
		data: {
			cmd:"login",
			username: $("#username").val(),
			password: $("#password").val()
		},
		dataType: "json",
		success: function(res){
			alert(res.message);
			if(res.status==true){
				createCookie("ck_validLogin", "valid", 1);
				window.location.href = base_url+"index.html";
			}
		},
		error: function(){
			alert("ajax error");
		}
	});
}