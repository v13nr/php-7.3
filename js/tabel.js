$(document).ready(function(){


});

function getData(){
	$.ajax({
		url : base_url+"../php/functions/Auth.php",
		type: "post",
		data: {cmd:"getData"},
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