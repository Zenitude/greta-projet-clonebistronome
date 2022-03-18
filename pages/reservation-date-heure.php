<?php  $nomDeLaPage = basename(__FILE__); include_once('../widgets/doctypeHead.php'); ?>

    <div class="container">
        <?php include_once('../widgets/sideBar.php'); ?>
        <div class="slider">
            <?php include_once('../widgets/slider.php'); ?>
            <div class="reservation">
                <ul>
                    <li class="activeReservation"><i class="fa-solid fa-calendar-days"></i> Date & Heure</li>
                    <li><i class="fa-solid fa-user"></i> Menus</li>
                    <li><i class="fa-solid fa-ellipsis"></i> Options</li>
                    <li><i class="fa-solid fa-check"></i> Confirmation & Paiement</li>
                </ul>
                <div class="contenuOnglet">
                    <h2>Réservez une table </h2>
                    <div id="datepicker"></div>
                    <?php include_once('../widgets/services.php') ?>
                </div>
            </div>
        </div>
        <?php include_once('../widgets/footer.php'); ?>
    </div>

<?php include_once('../widgets/scripts.php'); ?>
