$(document).ready(function(){

	$("#bt_login").click(function(){
		login();
	});
});


function login(){
	$.ajax({
		url : base_url+"../php/functions/Auth.php",
		type: "post",
		data: {cmd:"login"},
		dataType: "json",
		success: function(res){
			alert(res.message);
		},
		error: function(){
			alert("ajax error");
		}
	});
}