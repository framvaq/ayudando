<?php
$pass = "";
$user = "";
$db_name = "ayudando";
try {
    return new PDO("mysql:host=localhost;dbname=$db_name, $user, $pass");
} catch (Exception $e) {
    echo "Problema con la base de datos: " . $e->getMessage();
}
