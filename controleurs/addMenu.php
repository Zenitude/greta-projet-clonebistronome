<?php 
    if(isset($_POST['nom']) && isset($_POST['prix']) && isset($_POST['description']) && isset($_FILES['image']))
    {
        $imgName = $_FILES['image']['name'];
        $imgType = $_Files['image']['type'];
        $imgBlog = file_get_contents($_FILES['image']['tmp_name']);
        $sqlQueryAdd = "INSERT INTO menus('nom', 'prix', 'description', 'imgName', 'imgType', 'imgBlog') VALUES(".$_POST['nom'].",  ".$_POST['prix'].", ".$_POST['description'].", ".$imgName.", ".$imgType.", ".addslashes($imgBlog).")";
        $queryAdd = $bddBustronome->prepare($sqlQueryAdd);
        $queryAdd->execute() or die(print_r($db->errorInfo()));

        header('Location: ../pages/reservation-menus.php');
    }
?>