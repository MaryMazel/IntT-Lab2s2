<?php 
 require_once __DIR__ . "/vendor/autoload.php";
 $collection = (new MongoDB\Client) -> dbforlab -> computers;

$software = $_GET["software"];
$cursor = $collection -> find();
$res = [];

foreach($cursor as $document){
     foreach ($document["software"] as $key) {
        if($key === $software){
            array_push($res, $document);
            }
        }        
    }
    echo json_encode($res);
?>