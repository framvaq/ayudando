<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$db = include_once "db.php";

if (isset($_GET['num'])) {
    $num = $_GET['num'];
    $query = $db->prepare("SELECT * FROM announcements LIMIT :num");
    $query->bindParam(':num', $num, PDO::PARAM_INT);
    $query->execute();
} elseif (isset($_GET['type'])) {
    $type = $_GET['type'];
    $query = $db->prepare("SELECT * FROM announcements WHERE type=:type");
    $query->bindParam(':type', $type, PDO::PARAM_STR);
    $query->execute();
} elseif (isset($_GET['place'])) {
    $place = $_GET['place'];
    $query = $db->prepare("SELECT * FROM announcements WHERE place=:place");
    $query->bindParam(':place', $place, PDO::PARAM_STR);
    $query->execute();
} elseif (isset($_GET['desc'])) {
    $desc = $_GET['desc'];
    $query = $db->prepare("SELECT * FROM announcements WHERE MATCH(description) AGAINST(:desc IN NATURAL LANGUAGE MODE)");
    $query->bindParam(':desc', $desc, PDO::PARAM_STR);
    $query->execute();
} else {
    $query = $db->prepare("SELECT * FROM announcements");
    $query->execute();
}

$announcements = $query->fetchAll(PDO::FETCH_OBJ);
// TODO Check if is empty and return empty message
echo json_encode($announcements);
