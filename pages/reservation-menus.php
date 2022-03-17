<?php  $nomDeLaPage = basename(__FILE__); include_once('../widgets/doctypeHead.php'); ?>

    <div class="container">
        <?php include_once('../widgets/sideBar.php'); ?>
        <div class="slider">
            <?php include_once('../widgets/slider.php'); ?>
            <div class="reservation">
                <ul>
                    <li class="downReservation"><i class="fa-solid fa-calendar-days"></i> Date & Heure</li>
                    <li class="activeReservation"><i class="fa-solid fa-user"></i> Menus</li>
                    <li><i class="fa-solid fa-ellipsis"></i> Options</li>
                    <li><i class="fa-solid fa-check"></i> Confirmation & Paiement</li>
                </ul>
                <div class="contenuOnglet">
                    <h2>Jeudi 17 mars 2022 à 19:45 pour <span>1</span> personne</h2>
                    <h3>Nombre de couverts et choix des menus</h3>
                    <p>Consultez nos menus.</p> 

                    <p>
                        <button class="ajouterMenu">Ajouter un Menu</button>
                    </p>

                    <div class="formMenu">

                    </div>

                    <div class="menus">
                    
                    </div>
                    
                    <a href="reservation-date-heure.php" class="btnRetour">Retour</a> <a href="reservation-options.php" class="btnContinuer">Continuer</a>
                        
                </div>
            </div>
        </div>
        <?php include_once('../widgets/footer.php'); ?>
    </div>

<?php include_once('../widgets/scripts.php'); ?>