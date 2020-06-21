<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: POST");
$db = require_once('db.php');
$postdata = file_get_contents("php://input");

if ($postdata !== null && isset($postdata) && !empty($postdata)) {
    $data = json_decode($postdata);
    $id = trim(htmlspecialchars($data->user));

    $consult = "SELECT * FROM messages WHERE user_id=$id";
    $query = $db->prepare($consult);
    $query->execute();
    $messages = $query->fetchAll(PDO::FETCH_OBJ);
    // TODO Check if is empty and return empty message
    echo json_encode($messages, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK);
}
