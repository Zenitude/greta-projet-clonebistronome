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
    <link rel="stylesheet" href="../styles/main.css">
    <link rel="stylesheet" href="../styles/pages.css">
    <link rel="stylesheet" href="../styles/indexParis.css">
    <title>Paris | Bustronome | Restaurant grastronomique original à Paris & ... </title>
</head>
<body>
    <div class="container">
        <div class="slider">
            <div class="sidebar">
                <nav>
                    <a href="../index.php" id="logo"><img src="../ressources/logo.png" alt="lien vers accueil"></a>
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
                </nav>
                <p class="location">
                    <img src="" alt="">
                    <p>Arc de triomphe</p>
                    <a href="https://www.google.com/maps/place/Bustronome+-+Paris/@48.872752,2.294031,15z/data=!4m5!3m4!1s0x0:0x2b80095c2d0654ca!8m2!3d48.872752!4d2.294031">angle avenue Kleber</a>
                </p>
            </div>
            <form>
                <select name="selectCity" id="selectCity">
                    <option value="paris">Paris</option>
                    <option value="londres">Londres</option>
                </select>
            </form>
            <div class="barDefil"></div>
        </div>
        <footer>
            <div class="contactReseaux">
                <button>FR</button> | <button>EN</button> 
                <i class="fa-solid fa-phone"></i> <span class="tel">+33 (0) 954 444 555</span>
                <i class="fa-regular fa-envelope"><a href="mailto:contact@bustronome.com">contact@bustronome.com</i></a>
                <a href=""><i class="fa-brands fa-facebook-f" id="fb"></i></a>
                <a href=""><i class="fa-brands fa-google-plus-g" id="gg"></i></a>
                <a href=""><i class="fa-brands fa-instagram-square" id="insta"></i></a>
            </div>
            <div class="copyMadeIn">
               <p>&copy; BUSTRONOME. <a href="legalnotice.php"><span>LEGAL NOTICES</span></a> DEVELOPED BY</p> 
               <p>Made with <i class="fa-solid fa-heart"></i> by CosaVostra</p> 
            </div>
         </footer>
    </div>
    
</body>
</html>