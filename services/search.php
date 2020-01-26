<?php

header("Access-Control-Allow-Origin: *");
require_once("./inc/connect_pdo.php");

$search_text = $_POST["search-text"];

$query = "SELECT id, a_name, organization_name, job_desc
FROM test_data
WHERE a_name LIKE '%$search_text%'
ORDER BY a_name";

//print("$query");

foreach($dbo->query($query) as $row) {
	$id = stripslashes($row["0"]);
	$a_name = stripslashes($row["1"]);
	$organization_name = stripslashes($row["2"]);
	$job_desc = stripslashes($row["3"]);
	
	$attendee["id"] = $id;
	$attendee["a_name"] = $a_name;
	$attendee["organization_name"] = $organization_name;
	$attendee["job_desc"] = $job_desc;
	
	$attendees[] = $attendee;
}

ksort($attendees);

$data = json_encode($attendees);

header("Content-Type: application/json");

print($data);
?>
