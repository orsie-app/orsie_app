<?php


// NEED TO SEND POST OF id

header("Access-Control-Allow-Origin: *");
date_default_timezone_set('America/Toronto');

require_once("./inc/connect_pdo.php");

$query = "SELECT id, name_first, name_last
FROM test_data";
//print("$query");
foreach($dbo->query($query) as $row) {
	$id = stripslashes($row["0"]);
	$name_first = stripslashes($row["1"]);
	$name_last = stripslashes($row["2"]);
	
	$attendee["id"] = $id;
	$attendee["name_first"] = $name_first;
	$attendee["name_last"] = $name_last;
	
	$attendees[] = $attendee;
}

// $newData["data"] = $attendees;

$data = json_encode($attendees);

header("Content-Type: application/json");

print($data);
?>
