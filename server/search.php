<?php
header("Access-Control-Allow-Origin: http://localhost:4200");

$issetNumber = isset($_GET['number']);
$issetType = isset($_GET['type']);
$issetPlace = isset($_GET['place']);
$issetDesc = isset($_GET['word']);
$issetDate = isset($_GET['date']);
$issetUser = isset($_GET['user']);
$haveParams = $issetNumber || $issetType||$issetPlace || $issetDesc || $issetUser/*|| $issetDate*/;

$db = include_once "db.php";
$num;
$type;
$place;
$desc;

$useWhere = false;
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
        // $useWhere = true;
    }
    if ($issetUser) {
        $user = $_GET['user'];
        $userQuery = "user='$user'";
    }

    // Get parameters
    $queryArr = [];
    $issetType ? array_push($queryArr, $typeQuery) : null;
    $issetPlace ? array_push($queryArr, $placeQuery) : null;
    $issetDesc ? array_push($queryArr, $descQuery) : null;
    $issetUser ? array_push($queryArr, $userQuery) : null;
    // $issetDate ? array_push($queryArr, $dateQuery) : null;

    // Build query
    $consult = "SELECT * FROM announcements WHERE ";
    $queryVars = implode(" AND ", $queryArr);
    // var_dump($queryVars);
    $queryVars = $issetNumber ? $queryVars . ' LIMIT ' . $numQuery: $queryVars;
    // echo $queryVars;
    // --------- TODO DATE --------- //
    $fullQuery = $consult . $queryVars;

    
    // Execute query
    $query = $db->prepare($fullQuery);
/*
echo $fullQuery;
print("\n");
echo $type;
print("\n");
echo $desc;
print("\n");
echo $place;
print("\n");
echo $date;
print("\n");
echo $num;
print("\n");

var_dump($query);
*/
// --------- TODO DATE --------- //
} else {
    $query = $db->prepare("SELECT * FROM announcements");
}


$query->execute();
$announcements = $query->fetchAll(PDO::FETCH_OBJ);
// TODO Check if is empty and return empty message
echo json_encode($announcements, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK);
