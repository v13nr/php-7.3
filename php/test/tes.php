<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include "../MysqliDb.php";
include "../connection.php";
 

$cols = Array ("namabrg", "kodebrg");
$stocks = $db->get ("stock", null, $cols);
if ($db->count > 0)
    foreach ($stocks as $stock) { 
        //print_r ($user);
    }
	
echo json_encode($stocks);

?>