<?php
try
{
	$bddBustronome = new PDO('mysql:host=localhost;dbname=bustronome;charset=utf8', 'root', 'root', [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
        //$connectBdd = mysqli_connect("localhost", "root", "root", "bustronome");
        /*$request = mysqli_query($bddBustronome, "SELECT * FROM ...");
        $data = array();
        while($row = mysqli_fetch_assoc($request))
        {
                $data[] = $row;
        }
        
        echo json_encode($data);*/
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}

?>