<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$db = include_once "db.php";

$query = $db->prepare("SELECT * FROM announcements");
$query->execute();
$announcements = $query->fetchAll(PDO::FETCH_OBJ);
echo json_encode($announcements);
