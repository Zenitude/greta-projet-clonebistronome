<?php
try
{
	$bddBustronome = new PDO('mysql:host=localhost;dbname=bustronome;charset=utf8', 'root', 'root', [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}

?>