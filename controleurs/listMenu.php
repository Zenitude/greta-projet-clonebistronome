<?php

    $connectListMenus = "SELECT * FROM `menus`";
    $readListMenus = $bddBustronome->prepare($connectListMenus);
    $readListMenus->execute() or die(print_r($bddBustronome->errorInfo()));
    $listMenus = $readListMenus->fetchAll();
    $countMenus = count($listMenus);

    if($countMenus != 0 && $countMenus > 0)
    {
        foreach ($listMenus as $menu)
        {
            echo '
            <div class="carte">
                <img class="imgMenu" src="data:image/png|image/jpeg|image/gif|image/jpg;base64,'.base64_encode( $menu['imgBlob'] ).'" />
                <p class="intitule">'.$menu['nom'].' - '.$menu['prix'].' €</p>
                <p class="description">'.$menu['description'].'</p>

            </div>   
            ';
        }
    }

                    