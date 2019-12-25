<?php

header("Access-Control-Allow-Origin: *");
require_once("./inc/connect_pdo.php");

$search_text = $_POST["search-text"];

$query = "SELECT id, name_first, name_last
FROM test_data
WHERE name_first LIKE '%$search_text%'
OR name_last LIKE '%$search_text%'
ORDER BY name_first";

//print("$query");

foreach($dbo->query($query) as $row) {
	$id = stripslashes($row["0"]);
	$name_first = stripslashes($row["1"]);
	$name_last = stripslashes($row["2"]);
	
	$movie["id"] = $id;
	$movie["name_first"] = $name_first;
	$movie["name_last"] = $name_last;
	
	$movies[] = $movie;
}

ksort($movies);

$data = json_encode($movies);

header("Content-Type: application/json");

print($data);
?>