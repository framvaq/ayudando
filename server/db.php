<?php
$server_name = "localhost";
$db_name = "ayudando";
$user = "root";
$pass = "";
try {
    return new PDO("mysql:host=localhost;dbname=$db_name", $user, $pass);
} catch (Exception $e) {
    echo "Problema con la base de datos: " . $e->getMessage();
}
