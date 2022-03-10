<?php  $nomDeLaPage = basename(__FILE__); include_once('widgets/doctypeHead.php'); ?>

    <div class="container">
        <header><a href="index.php"><img src="ressources/logo.png" alt=""></a></header>
        <div class="main">
            <div class="tourEiffel">
                <a href="pages/indexParis.php">
                    <img src="ressources/accueil/tour-eiffel.png" alt="lien vers paris">
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
                <img src="ressources/accueil/big-ben.png" alt="lien vers londres">
            </a>
            <a href="pages/indexLondres.php">VOYAGE GOURMAND <span>LONDRES</span></a>
            </div>
        </div>

        <?php include_once('widgets/footer.php'); ?>
    </div>
    
    <?php include_once('widgets/scripts.php'); ?>