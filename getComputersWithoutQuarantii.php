<?php 
 require_once __DIR__ . "/vendor/autoload.php";
 $collection = (new MongoDB\Client) -> dbforlab -> computers;

$cond = array("quarantii" => "NO");

$cursor = $collection -> find($cond);
$res = [];

foreach($cursor as $document){     
        array_push($res, $document);        
    }
    echo json_encode($res);
?>