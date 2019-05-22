<?php


/**
*| --------------------------------------------------------------------------
*| Auth Controller
*| --------------------------------------------------------------------------
*| For authentication
*|
*/
require_once("../MysqliDb.php");
require_once("../connection.php");


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
		$res = array(
			'status' => true,
			'message'	=> "Anda Berusaha Login, OK"
		 );

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


