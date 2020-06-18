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
    
    $mail = trim(htmlspecialchars($data->mail));
    $pass = trim(htmlspecialchars($data->pass));

    $query = $db->prepare("SELECT id, name FROM users WHERE mail=:mail AND pass=:pass");
    $query->bindParam(':mail', $mail, PDO::PARAM_STR);
    $query->bindParam(':pass', $pass, PDO::PARAM_STR);

    $query->execute();
    while ($row = $query->fetch()) {
        $user = $row['id'];
        $name = $row['name'];
    }

    $response = (!empty($user) && $user !== null && isset($user) && !empty($name) && $name !== null && isset($name));
    
    header('Content-Type: application/json');
    echo json_encode($response);
}
