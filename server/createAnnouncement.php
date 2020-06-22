<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: POST");
$db = require_once('db.php');
$postdata = file_get_contents("php://input");
// var_dump($postdata);
if ($postdata !== null && isset($postdata) && !empty($postdata)) {
    $data = json_decode($postdata);
    var_dump($data);

    $user = trim(htmlspecialchars($data->user_id));
    $title = trim(htmlspecialchars($data->title));
    $description = trim(htmlspecialchars($data->description));
    $type = trim(htmlspecialchars($data->type));
    // $date = trim(htmlspecialchars($data->date));
    $place = trim(htmlspecialchars($data->place));

    //`$insert = ("INSERT INTO announcements (id, date_published, user, title, description, type, place) VALUES (NULL, NULL, $user, $title, $description, $type, $place");

    $query = $db->prepare('INSERT INTO announcements (`user`, title, description, type, place) VALUES (:usr, :title, :description, :type, :place)');
    
    $query->bindParam(':usr', $user, PDO::PARAM_STR);
    $query->bindParam(':title', $title, PDO::PARAM_STR);
    $query->bindParam(':description', $description, PDO::PARAM_STR);
    $query->bindParam(':type', $type, PDO::PARAM_STR);
    $query->bindParam(':place', $place, PDO::PARAM_STR);
    var_dump($query);
    // die;
    $query->execute();
}
