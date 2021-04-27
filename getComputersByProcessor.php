<?php 
 require_once __DIR__ . "/vendor/autoload.php";
 $collection = (new MongoDB\Client) -> dbforlab -> computers;

 
$processor = $_GET["processor"];

$cond = array("processor" => $processor);

$cursor = $collection -> find($cond);
$res = [];

foreach($cursor as $document){     
        array_push($res, $document);        
    }
    echo json_encode($res);
?>