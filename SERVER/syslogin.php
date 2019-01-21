<?php
//error_reporting(0);

header("application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$string = file_get_contents("./user.json");
$json = json_decode($string);



$_POST = json_decode(file_get_contents("php://input"),true);
$username = $_POST['username'];
$password = $_POST['password'];
$status;

//$test = $_GET['user'];
//$test2 = $_GET['pass'];
/*
echo "<pre>";
print_r($json[0]->username);
echo "</pre>";*/
foreach($json as $key){
	//echo $json[0]->username;
	if($key->username == $username && $key->password == $password){
		echo json_encode("true");
	}

}


?>