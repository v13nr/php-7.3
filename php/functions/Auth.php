<?php


/**
*| --------------------------------------------------------------------------
*| Auth Controller
*| --------------------------------------------------------------------------
*| For authentication
*|
*/
require_once("../MysqliDb.php");


	if (isset($_POST["cmd"])) {
		$f = "action_".$_POST['cmd'];
		if (function_exists ($f)) {
			$f();
		}
	}
	

	/**
	* Login user
	*
	*/
	function action_login()
	{
		
		require_once("../connection.php");
		$username = isset($_POST["username"]) ? $_POST["username"] : "";
		$new_U = filter_var($username, FILTER_SANITIZE_STRING);
		$password = isset($_POST["password"]) ? $_POST["password"] : "";
		$new_P = MD5(filter_var($password, FILTER_SANITIZE_STRING));
		
		
		$params = Array($new_U, $new_P);
		$users = $db->rawQuery("SELECT username, email FROM users WHERE username = ? AND pass = ? ", $params);
		
		if(count($users)>0){
			
			$res = array(
				'status' => true,
				'message'	=> "Login OK",
				'data' => $users
			 );

		} else {
			
			$res = array(
				'status' => false,
				'message'	=> "Username atau Password Salah",
				'data' => $users
			 );
			
		}
		echo json_encode($res);
	}

	/**
	* Register user member
	*
	*/
	function register()
	{
		
	}

	/**
	* User forgot password
	*
	* @var String $id 
	*/
	function forgot_password()
	{

	}

	/**
	* User session logout
	*
	*/
	function action_logout()
	{
		$res = array(
			'status' => true,
			'message'	=> "Anda Akan Logout, OK"
		 );

		echo json_encode($res);
		
	}


