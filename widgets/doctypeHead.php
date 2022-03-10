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

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="../ressources/logo.png" />
    <script src="https://kit.fontawesome.com/10a6ffe905.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="styles/main.css">
    <? if($nomDeLaPage == 'index.php'): ?>
        <link rel="stylesheet" href="styles/index.css">
        <title>Bustronome | Restaurant grastronomique original à Paris & ... </title>
    <? else: ?>
        <link rel="stylesheet" href="../styles/pages.css">
        <title>Paris | Bustronome | Restaurant grastronomique original à Paris & ... </title>
    <?php endif; ?>
</head>
<body>