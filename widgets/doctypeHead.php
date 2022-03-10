<?php include_once('../configs/connectBdd.php'); ?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="../ressources/logo.png" />
    <link rel="stylesheet" href="../styles/main.css">
    
    <? if($nomDeLaPage == 'index.php'): ?>
        <link rel="stylesheet" href="../styles/index.css">
        <title>Bustronome | Restaurant grastronomique original à Paris & ... </title>
    <? else: ?>
        <link rel="stylesheet" href="../styles/pages.css">
        <title>Paris | Bustronome | Restaurant grastronomique original à Paris & ... </title>
    <?php endif; ?>
</head>
<body>