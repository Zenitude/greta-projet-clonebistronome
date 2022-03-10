
        <footer>

            <? if($nomDeLaPage == 'index.php'): ?>

                <button>FR</button> | <button>EN</button> <span>Made with <i class="fa-solid fa-heart"></i> by CosaVostra</span> 

            <?php else: ?>

                <div class="barDefil"></div>
                    <div class="contactReseaux">
                        <button>FR</button> | <button>EN</button> 
                        <i class="fa-solid fa-phone"></i> <span class="tel">+33 (0) 954 444 555</span>
                        <i class="fa-regular fa-envelope"><a href="mailto:contact@bustronome.com">contact@bustronome.com</i></a>
                        <a href=""><i class="fa-brands fa-facebook-f" id="fb"></i></a>
                        <a href=""><i class="fa-brands fa-google-plus-g" id="gg"></i></a>
                        <a href=""><i class="fa-brands fa-instagram-square" id="insta"></i></a>
                    </div>
                    <div class="copyMadeIn">
                        <p>&copy; 2017 BUSTRONOME. <a href="legalnotice.php"><span>MENTIONS LÉGALES</span></a> RÉALISATION</p> 
                        <p>Made with <i class="fa-solid fa-heart"></i> by CosaVostra</p> 
                    </div>
                    
            <?php endif; ?>
        </footer>