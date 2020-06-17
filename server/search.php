<?php
header("Access-Control-Allow-Origin: http://localhost:4200");

$issetNumber = isset($_GET['number']);
$issetType = isset($_GET['type']);
$issetPlace = isset($_GET['place']);
$issetDesc = isset($_GET['word']);
$issetDate = isset($_GET['date']);
$haveParams = $issetNumber || $issetType||$issetPlace || $issetDesc /*|| $issetDate*/;

$db = include_once "db.php";
$num;
$type;
$place;
$desc;
/*
$url = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$query = (parse_url($url, PHP_URL_QUERY));
foreach (explode('&', $query) as $chunk) {
    $param = explode("=", $chunk);

    if ($param) {
        printf("Value for parameter \"%s\" is \"%s\"<br/>\n", urldecode($param[0]), urldecode($param[1]));
    }
}*/
/**/
if ($haveParams) {
    if ($issetNumber) {
        $num = $_GET['number'];
        $numQuery = $num;
    }
    if ($issetType) {
        $type = $_GET['type'];
        $typeQuery = "type='$type'";
    }
    if ($issetPlace) {
        $place = $_GET['place'];
        $placeQuery = "place='$place'";
    }
    if ($issetDesc) {
        $desc = $_GET['word'];
        $descQuery = "MATCH(description) AGAINST('$desc' IN NATURAL LANGUAGE MODE)";
    }
    if ($issetDate) {
        $date = $_GET['date'];
        $dateQuery = '';
    }

    // Get parameters
    $queryArr = [];
    $issetType ? array_push($queryArr, $typeQuery) : null;
    $issetPlace ? array_push($queryArr, $placeQuery) : null;
    $issetDesc ? array_push($queryArr, $descQuery) : null;
    $issetDate ? array_push($queryArr, $dateQuery) : null;

    // Build query
    $consult = "SELECT * FROM announcements WHERE ";
    $queryVars = implode(" AND ", $queryArr);
    //var_dump($queryVars);
    // $queryVars = mb_substr($queryVars, 0, strlen($queryVars)-5);
    $issetNumber ? $queryVars .= ' LIMIT ' . $numQuery: null;
    // echo $queryVars;
    // --------- TODO DATE --------- //
    $fullQuery = $consult . $queryVars;
    // echo $fullQuery;
    // print("\n");

    // Execute query
    /*
    echo $type;
    echo $desc;
    echo $place;
    echo $date;
    echo $num;
    */

    $query = $db->prepare($fullQuery);
// $issetPlace ? ($query->bindParam(':place', $place, PDO::PARAM_STR)) : null;
    // $issetType ? ($query->bindParam(':type', $type, PDO::PARAM_STR)) : null;
    // $issetNumber ? ($query->bindParam(':num', $num, PDO::PARAM_INT)) : null;
    // $issetDesc ? ($query->bindParam(':desc', $desc, PDO::PARAM_STR)) : null;
    
    // var_dump($query);
// --------- TODO DATE --------- //
} else {
    $query = $db->prepare("SELECT * FROM announcements");
}


$query->execute();
$announcements = $query->fetchAll(PDO::FETCH_OBJ);
// TODO Check if is empty and return empty message
echo json_encode($announcements, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK);






/*
if (isset($_GET['number'])) {
    $num = $_GET['number'];
    $query = $db->prepare("SELECT * FROM announcements LIMIT :num");
    $query->bindParam(':num', $num, PDO::PARAM_INT);
    $query->execute();
} else if (isset($_GET['type'])) {
    $type = $_GET['type'];
    $query = $db->prepare("SELECT * FROM announcements WHERE type=:type");
    $query->bindParam(':type', $type, PDO::PARAM_STR);
    $query->execute();
} else if (isset($_GET['place'])) {
    $place = $_GET['place'];
    $query = $db->prepare("SELECT * FROM announcements WHERE place=:place");
    $query->bindParam(':place', $place, PDO::PARAM_STR);
    $query->execute();
} else if (isset($_GET['word'])) {
    $desc = $_GET['word'];
    $query = $db->prepare("SELECT * FROM announcements WHERE MATCH(description) AGAINST(:desc IN NATURAL LANGUAGE MODE)");
    $query->bindParam(':desc', $desc, PDO::PARAM_STR);
    $query->execute();
} else {
    $query = $db->prepare("SELECT * FROM announcements");
    $query->execute();
}
*/
