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
    <link rel="stylesheet" href="../styles/main.css">
    <link rel="stylesheet" href="../styles/indexParis.css">
    <title>Paris | Bustronome | Restaurant grastronomique original à Paris & ... </title>
</head>
<body>
    <div class="container">
        <div class="slider">
            <div id="sidebar">
                <a href="../index.php"><img src="../ressources/logo.png" alt="lien vers accueil"></a>
                <ul>
                <li><a href="">Réservez Maintenant</a></li>
                <li><a href="">Carte Cadeau</a></li>
                <li><a href="">Les offres</a></li>
                <li><a href="">Le concept</a></li>
                <li><a href="">Privatisation</a></li>
                <li><a href="">Actualités du bus</a></li>
                <li><a href="">Le blog</a></li>
                <li><a href="">Photos et vidéos</a></li>
                <li><a href="">Questions fréquentes</a></li>
                <li><a href="">Contactez le bustronome Paris</a></li>
                </ul>
                <p>
                    <img src="" alt="">
                    <p>Arc de triomphe</p>
                    <a href="https://www.google.com/maps/place/Bustronome+-+Paris/@48.872752,2.294031,15z/data=!4m5!3m4!1s0x0:0x2b80095c2d0654ca!8m2!3d48.872752!4d2.294031">angle avenue Kleber</a>
                </p>
            </div>
            <div class="barDefil"></div>
        </div>
        <footer>
            <button>FR</button> | <button>EN</button> 
            <span class="tel"> <i class="fa-solid fa-phone"></i> +33 (0) 954 444 555</span>
            <a href="mailto:contact@bustronome.com"><i class="fa-regular fa-envelope">contact@bustronome.com</i></a>
            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
            <a href=""><i class="fa-brands fa-google-plus-g"></i></a>
            <a href=""><i class="fa-brands fa-instagram-square"></i></a>
         </footer>
    </div>
    
</body>
</html>