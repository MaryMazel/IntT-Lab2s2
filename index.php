<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script> 
<link rel="stylesheet" href="style.css"> 
<script src="indexScript.js"></script>
</head>
<body>

<div id = "software-div">

  <form name ="softwares">
  <lable>Get all computers by software: </lable>
<?php require_once __DIR__ . "/vendor/autoload.php";
  $collection = (new MongoDB\Client) -> dbforlab -> software;
    $cursor = $collection -> find();
    $res = [];
    echo "<select id= 'software'>";
    foreach($cursor as $document){
        echo "<option value = '".$document["name"]."'> ".$document["name"]."</option>";
        
    }
    echo "</select>";
?>
  <input type="button" onclick = "getComputersBySoftware()" value="ОК">
  </form> 
  <table style="border: 1px solid">
  <tr><th> Computer </th></tr>
  <tbody id = "software-table"></tbody>
  </table>
  <table style="border: 1px solid"><tr><th> Last request </th></tr>
  <tbody id = "softwareRecent-table"></tbody>
  </table>
</div>


<div id ="processor-div">

  <form name ="processor">
    <lable>Get computers by processor: </lable>

<?php require_once __DIR__ . "/vendor/autoload.php";
  $collection = (new MongoDB\Client) -> dbforlab -> computers;
    $cursor = $collection -> find();
    $processors = [];
    foreach($cursor as $document){
      array_push($processors, $document["processor"]);
    }

    $processors = array_unique($processors);

    echo "<select id='processor'>";
    foreach($processors as $document){
        echo "<option value = '".$document."'> ".$document."</option>";
        
    }
    echo "</select>";
?>
    <input type="button" onclick = "getComputersByProcessor()" value="ОК">
</form> 


<table style="border: 1px solid"><tr><th> Computers </th></tr>
  <tbody id = "processor-table"></tbody>
  </table>
  <table style="border: 1px solid"><tr><th> Last request </th></tr>
  <tbody id = "processorRecent-table"></tbody>
  </table>
</div>
</div>

<div id = "quarantii-div">

<form name ="quarantiis">
    <lable>Get computers without quarantii: </lable>
    <input type="button" onclick = "quarantii()" value="ОК">
</form> 

<table style="border: 1px solid"><tr><th> Computers </th></tr>
<tbody id = "quarantii-table"></tbody>
</table>

<table style="border: 1px solid"><tr><th> Last request </th></tr>
<tbody id = "quarantiiRecent-table"></tbody>
</table>

</div>
</body>
</html>
