<?php  $nomDeLaPage = basename(__FILE__); include_once('../widgets/doctypeHead.php'); ?>

    <div class="container">
        <?php include_once('../widgets/sideBar.php'); ?>
        <div class="slider">
            <?php include_once('../widgets/slider.php'); ?>
            <p class="msgAccueil">Un restaurant à bord d'un bus à impériale : vivez une expérience inédite !</p>
            <?php include_once('../widgets/msgDescription.php'); ?>
            <?php include_once('../widgets/selectcity.php'); ?>
        </div>
        <?php include_once('../widgets/footer.php'); ?>
    </div>

<?php include_once('../widgets/scripts.php'); ?>
