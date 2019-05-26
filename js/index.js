$(document).ready(function(){

	isValidLogin = readCookie("ck_validLogin");

	if(isValidLogin!="valid" || isValidLogin==null ){

		window.location.href = auth_url+"sign-in.html";
	} else {

	}

	//$("#leftsidebar").load("views/include/left_menu.html");

	$("#bt_logout").click(function(){
		logout();
	});
	$("#mn_profile").click(function(){
		load_profile();
	});
	$("#mn_home").click(function(){
		load_dashboard();
	});
	$("#mn_tr_tabelProduk").click(function(){
		load_tableProduk();
	});
});

function logout(){
	$.ajax({
		url : base_url+"../php/functions/Auth.php",
		type: "post",
		data: {cmd:"logout"},
		dataType: "json",
		success: function(res){
			//alert(res.message);
			createCookie("ck_validLogin", "tidak valid", 1);
			window.location.href = auth_url+"sign-in.html";
		},
		error: function(){
			
		}
	});
}

function load_profile(){
	$("#nn_content").load("views/profile.html");
}

function load_dashboard(){
	$("#nn_content").load("views/dashboard.html");
}

function load_tableProduk(){
	$("#nn_content").load("views/table.html");
}