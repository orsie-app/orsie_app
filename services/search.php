<?php

header("Access-Control-Allow-Origin: *");
require_once("./inc/connect_pdo.php");

$search_text = $_POST["search-text"];

$query = "SELECT id, name_first, name_last, organization_name
FROM test_data
WHERE name_first LIKE '%$search_text%'
OR name_last LIKE '%$search_text%'
ORDER BY name_first";

//print("$query");

foreach($dbo->query($query) as $row) {
	$id = stripslashes($row["0"]);
	$name_first = stripslashes($row["1"]);
	$name_last = stripslashes($row["2"]);
	$organization_name = stripslashes($row["2"]);
	
	$attendee["id"] = $id;
	$attendee["name_first"] = $name_first;
	$attendee["name_last"] = $name_last;
	$attendee["organization_name"] = $organization_name;
	
	$attendees[] = $attendee;
}

ksort($attendees);

$data = json_encode($attendees);

header("Content-Type: application/json");

print($data);
?>
