<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: POST");
$db = require_once('db.php');
$postdata = file_get_contents("php://input");
if ($postdata !== null && isset($postdata) && !empty($postdata)) {
}
