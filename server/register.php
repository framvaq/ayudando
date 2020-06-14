<?php

header("Access-Control-Allow-Origin: http://localhost:4200");

require_once ('db.php');
$password;
$hash = password_hash($password, PASSWORD_DEFAULT);
$user = uniqid();//FIXME maybe I need to add more_entropy
