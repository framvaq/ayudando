<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$db = include_once "db.php";

if (isset($_GET['num'])) {
    $num = $_GET['num'];
    $query = $db->prepare("SELECT * FROM announcements LIMIT :num");
    $query->bindParam(':num', $num, PDO::PARAM_INT);
    $query->execute();
} else {
    $query = $db->prepare("SELECT * FROM announcements");
    $query->execute();
}

$announcements = $query->fetchAll(PDO::FETCH_OBJ);
echo json_encode($announcements);
