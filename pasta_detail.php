<?php
 header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$servername = "localhost";
$username = "hybrid_160423089";
$password = "ubaya";
$dbname = "hybrid_160423089";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

//mendapatkan objek pasta berdasarkan id
$id=$_GET['id'];
$sql = "SELECT * FROM pastas where id=$id";
$result = $conn->query($sql);
$data = $result->fetch_assoc();
//mendapatkan instruksi berdasarkan pasta_id
$sql = "SELECT * FROM pasta_instruction where pasta_id=$id";
$result = $conn->query($sql);
$instructions = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $instructions[] = $row;
    }
}
$data['instructions']=$instructions;
echo json_encode($data);
$conn->close();
?>
