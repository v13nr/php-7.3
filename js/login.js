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
			//alert(res.message);
			if(res.status==true){
				createCookie("ck_validLogin", "valid", 1);

				$('#show_welcome_nn').trigger('click');
				setTimeout(function () {
			       window.location.href = base_url+"index.html";
			    }, 4000); //will call the function after 2 secs.
				
			} else {
				alert('Maaf, username atau password salah..');
			}
		},
		error: function(){
			alert("ajax error");
		}
	});
}