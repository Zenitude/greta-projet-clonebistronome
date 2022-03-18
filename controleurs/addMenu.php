<?php

    require('../configs/connectBdd.php');

    if(!empty($_POST['nom']))
    {
        $nom = $_POST['nom'];
        $desc = $_POST['description'];
        $prix = $_POST['prix'];
        $imgName = $_FILES['image']['name'];
        $imgType = $_FILES['image']['type'];
        $imgBlob = file_get_contents($_FILES['image']['tmp_name']);
        $queryAdd = $bddBustronome->prepare('INSERT INTO menus(nom, prix, description, imgNom, imgType, imgBlob)VALUES(?, ?, ?, ?, ?, ?)');
        $queryAdd->execute(array(
            $nom, 
            $prix, 
            $desc, 
            $imgName, 
            $imgType, 
            $imgBlob
        )) or die(print_r($bddBustronome->errorInfo()));

        header('Location: ../pages/reservation-menus.php');
    }

?>