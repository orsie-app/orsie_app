<?php

header("Access-Control-Allow-Origin: *");
// file with connection to the database
require_once("./inc/connect_pdo.php");

// grabbing the data from the URL through the get method
$name_last = $_POST["name_last"];
$name_first = $_POST["name_first"];
$email = $_POST["email"];
$organization_name = $_POST["organization_name"];
$job_desc = $_POST["job_desc"];
$city = $_POST["city"];
$province = $_POST["province"];

$errorCode["id"] = -1;
$errorCode["message"] = "Service Connected";

$name_last = addslashes($name_last);
$name_first = addslashes($name_first);
$email = addslashes($email);
$organization_name = addslashes($organization_name);
$job_desc = addslashes($job_desc);
$city = addslashes($city);
$province = $_POST["province"];

$name = $name_first . " " . $name_last;

if (!empty($name_last) && !empty($name_first)) {
	try {
		$query = "INSERT INTO test_data
		SET a_name='$name',
        email='$email',
		organization_name='$organization_name',
		job_desc='$job_desc',
		city='$city',
		province='$province' ";

		// executing the query to update the record from the database

		// UNCOMMENT THE LINE BELOW FOR REGISTRATION TO WORK
		// $dbo -> query($query);
		$errorCode["id"] = 0;
		$errorCode["message"] = "Insert Successful: $query";
	} catch (PDOException $e) {
		$errorCode["id"] = -2;
		$errorCode["message"] = "Insert failed: '$e'";
	}
} else {
	$errorCode["id"] = 2;
	$errorCode["message"] = "No name sent.";
}

// creating a variable $data
// converting the array data to JSON using the function
$data = json_encode($errorCode);
header("Content-Type: application/json");
print($data);

?>