<?php
header("application/json");
header("Access-Control-Allow-Origin: *");

$data = $_GET['username'];

echo json_encode("hello" . $data);




?>