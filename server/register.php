<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: POST");
$db = require_once('db.php');
$postdata = file_get_contents("php://input");
// echo"postdata = ";
// var_dump($postdata);
if ($postdata !== null && isset($postdata) && !empty($postdata)) {
    $data = json_decode($postdata);
    // echo"data = ";
    // var_dump($data);
    // die;
    
    $userid = uniqid("prefix", true);
    // Clean strings
    $username = trim(htmlspecialchars($data->user));
    $type = trim(htmlspecialchars($data->type));
    $place = trim(htmlspecialchars($data->place));
    $mail = trim(htmlspecialchars($data->email));
    $contact = trim(htmlspecialchars($data->contact));
    $usrpass = trim(htmlspecialchars($data->pass));
    $pass = password_hash($usrpass, PASSWORD_DEFAULT);

    $query = $db->prepare("INSERT INTO users (id, name, type, place, pass, mail, contact, rating) VALUES (:id, :username, :type, :place, :pass, :mail, :contact, NULL)");
    
    // $query->bindParam(':userid', $userid, PDO::PARAM_STR);
    $query->bindParam(':id', $userid, PDO::PARAM_STR);
    $query->bindParam(':username', $username, PDO::PARAM_STR);
    $query->bindParam(':type', $type, PDO::PARAM_STR);
    $query->bindParam(':place', $place, PDO::PARAM_STR);
    $query->bindParam(':pass', $pass, PDO::PARAM_STR);
    $query->bindParam(':mail', $mail, PDO::PARAM_STR);
    $query->bindParam(':contact', $contact, PDO::PARAM_STR);
    // var_dump($query);
    $query->execute();

    // echo"query = ";
    // var_dump($query);
    // $query->PDO::error_log;
}
