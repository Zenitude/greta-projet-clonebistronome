<?php
try
{
	$bddBistronome = new PDO('mysql:host=localhost;dbname=bustronome;charset=utf8', 'root', 'root', [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
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
    <link rel="icon" type="image/png" href="ressources/logo.png" />
    <script src="https://kit.fontawesome.com/10a6ffe905.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="styles/main.css">
    <link rel="stylesheet" href="styles/index.css">
    <title>Bustronome | Restaurant grastronomique original à Paris & ... </title>
</head>
<body>
    <div class="container">
        <header><a href="index.php"><img src="ressources/logo.png" alt=""></a></header>
        <div class="main">
            <div class="tourEiffel">
                <a href="pages/indexParis.php">
                    <img src="ressources/tour-eiffel.png" alt="lien vers paris">
                </a>
                <a href="pages/indexParis.php">VOYAGE GOURMAND <span>PARIS</span></a>
            </div>
            <div class="container-centrale">
                <p>VOTRE RESTAURANT GASTRONOMIQUE</p>
                <P>À BORD D'UN BUS À IMPÉRIALE</P>
                
                <P>Vivez une expérience intédite :</P>
                <p>Un <span>repas gastronomique pour déjeuner ou dîner</span></p>
                <p>tout en visitant la ville de <a href="pages/indexParis.php">Paris</a> ou <a href="pages/indexLondres.php">Londres</a></p>
            </div>
            <div class="bigBen">
            <a href="pages/indexLondres.php">
                <img src="ressources/big-ben.png" alt="lien vers londres">
            </a>
            <a href="pages/indexLondres.php">VOYAGE GOURMAND <span>LONDRES</span></a>
            </div>
        </div>
        <footer>
            <button>FR</button> | <button>EN</button> <span>Made with <i class="fa-solid fa-heart"></i> by CosaVostra</span> 
                
        </footer>
    </div>
    
</body>
</html>