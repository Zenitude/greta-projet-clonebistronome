"use strict";
window.addEventListener('load', () => { window.onload; });
// Menu Hamburger
const menuH = document.querySelector('.menuH');
const liste = document.querySelector('.sidebar ul');
const divMenu = document.createElement('div');
divMenu.style.width = '100%';
divMenu.style.height = '100%';
divMenu.style.position = 'relative';
divMenu.style.display = 'flex';
divMenu.style.justifyContent = 'center';
divMenu.style.alignItems = 'center';
menuH.appendChild(divMenu);
let tabLigne = [];
for (let i = 0; i < 3; i++) {
    const ligneMenu = document.createElement('div');
    ligneMenu.style.width = '60px';
    ligneMenu.style.height = '6px';
    ligneMenu.style.background = 'rgb(142,144,114)';
    ligneMenu.style.borderRadius = '5px';
    ligneMenu.style.position = 'absolute';
    divMenu.appendChild(ligneMenu);
}
menuH.addEventListener('click', () => {
    liste.classList.toggle('active');
});
// Message Description
const msgDescription = document.querySelector('.msgDescription');
const msgDescTitre = document.querySelector('.msgDescription h3');
const msgDescP = document.querySelector('.msgDescription p');
let tabMsg = [];
setTimeout(() => {
    msgDescription.style.opacity = '1';
}, 500);
class MessageSlide {
    constructor(heading, texte) {
        this.titre = heading;
        this.paragraphe = texte;
    }
}
const msg1 = new MessageSlide('Profitez d\'une vue imprenable', 'Grâce au toit entièrement vitré de ce bus à impériale, plongez dans l\'univers parisien dans les meilleurs conditions de confort, quelle que soit la saison.');
const msg2 = new MessageSlide('Laissez vos sens vous transporter', 'À bord du <span>BUSTRO</span>NOME, les passagers découvrent les plus belles vues de Paris en profitant du meilleur de la gastronomie.');
const msg3 = new MessageSlide('Savourez une pause bien être', '<span>BUSTRO</span>NOME : Agréable moyen de découvrir la cuisine et les vins d\'une capitale culturelle tout en visitant les plus beaux monuments de Paris.');
const msg4 = new MessageSlide('Dégustez des mets raffinés', 'Menu découverte de 4 plats pour le déjeuner et de 6 plats pour le dîner au format dégustation proposés avec une selection de vins et champagnes');
tabMsg.push(msg1);
tabMsg.push(msg2);
tabMsg.push(msg3);
tabMsg.push(msg4);
// Slider
const slide = document.querySelector('div.slide');
let tab = [];
let tabImg = [];
class ImageSlide {
    constructor(attrSrc, attrAlt) {
        this.src = attrSrc;
        this.alt = attrAlt;
    }
}
const img1 = new ImageSlide('../ressources/slider/img1.jpg', 'bus et arctriomphe');
const img2 = new ImageSlide('../ressources/slider/img2.jpg', 'vue sur scene');
const img3 = new ImageSlide('../ressources/slider/img3.jpg', 'tour eiffel');
const img4 = new ImageSlide('../ressources/slider/img4.jpg', 'petit plat en équilibre');
tab.push(img1);
tab.push(img2);
tab.push(img3);
tab.push(img4);
for (let i = 0; i < 4; i++) {
    const imgSlide = document.createElement('div');
    imgSlide.style.backgroundImage = `url(${tab[i]['src']})`;
    imgSlide.style.backgroundRepeat = 'no-repeat';
    imgSlide.style.backgroundSize = 'cover';
    imgSlide.style.backgroundPosition = 'center';
    imgSlide.style.position = 'absolute';
    imgSlide.style.width = '100%';
    imgSlide.style.height = '100%';
    imgSlide.style.top = '0';
    imgSlide.style.right = '0';
    imgSlide.style.bottom = '0';
    imgSlide.style.left = '0';
    imgSlide.style.zIndex = '-1';
    imgSlide.style.opacity = '1';
    tabImg.push(imgSlide);
    slide.appendChild(imgSlide);
}
function slideImg() {
    let sec = 0;
    let img = 0;
    setInterval(() => {
        sec++;
        if (sec > 4) {
            tabImg[img].style.opacity = '0';
            img++;
            sec = 0;
            if (img > 3) {
                img = 0;
            }
            tabImg[img].style.opacity = '1';
            msgDescTitre.innerHTML = tabMsg[img]['titre'];
            msgDescP.innerHTML = tabMsg[img]['paragraphe'];
        }
    }, 1000);
    setInterval(() => {
        msgDescription.style.opacity = '0';
    }, 4000);
    setInterval(() => {
        msgDescription.style.opacity = '1';
    }, 5000);
}
window.addEventListener('load', () => {
    slideImg();
});
// Réservation Les menus
const divForm = document.querySelector('.formMenu');
const btnAjouterMenu = document.querySelector('.ajouterMenu');
btnAjouterMenu.addEventListener('click', ajouterMenu);
const menus = document.querySelector('.menus');
menus.style.display = 'flex';
menus.style.flexDirection = 'row';
menus.style.flexWrap = 'Wrap';
let tabMenus = [];
class Menus {
    constructor(img, nom, prix, description) {
        this.img = img;
        this.nom = nom;
        this.prix = prix;
        this.description = description;
    }
}
const menu1 = new Menus('../ressources/menu/busext.jpg', 'Diner', 120, 'Menu en 6 étapes: Amuse bouche, entrée, poisson<br>viande, fromage, dessert');
const menu2 = new Menus('../ressources/menu/busint.jpg', 'Diner avec boisson', 150, 'Menu en 6 étapes et son accord mets et vins<br>1 coupe de champagne, 2 verres de vin, eau, café/thé.');
const menu3 = new Menus('../ressources/menu/plat.jpg', 'Diner enfant', 50, 'Menu en 3 étapes avec une boisson.<br>Pour les moins de 12 ans');
tabMenus.push(menu1);
tabMenus.push(menu2);
tabMenus.push(menu3);
for (let i = 0; i < tabMenus.length; i++) {
    const carte = document.createElement('div');
    carte.style.border = '1px solid white';
    carte.style.padding = '10px';
    carte.style.display = 'flex';
    carte.style.flexDirection = 'column';
    carte.style.justifyContent = 'center';
    carte.style.alignItems = 'center';
    carte.style.margin = '5px';
    menus.appendChild(carte);
    const imgMenu = document.createElement('img');
    imgMenu.setAttribute('src', `${tabMenus[i]['img']}`);
    imgMenu.setAttribute('alt', `${tabMenus[i]['nom']}`);
    imgMenu.style.width = '400px';
    imgMenu.style.borderRadius = '5px';
    carte.appendChild(imgMenu);
    const intitule = document.createElement('p');
    intitule.innerHTML = `${tabMenus[i]['nom']} - ${tabMenus[i]['prix']} €`;
    intitule.style.margin = '10px 0';
    carte.appendChild(intitule);
    const description = document.createElement('p');
    description.innerHTML = tabMenus[i]['description'];
    description.style.textAlign = 'center';
    description.style.color = 'grey';
    description.style.width = '90%';
    description.style.fontSize = '0.92em';
    carte.appendChild(description);
    const addOrDel = document.createElement('div');
    addOrDel.style.width = '100%';
    addOrDel.style.marginTop = '10px';
    addOrDel.style.padding = '10px';
    addOrDel.style.borderTop = '1px solid white';
    carte.appendChild(addOrDel);
    const formMenu = document.createElement('form');
    formMenu.style.width = '100%';
    formMenu.style.height = '100%';
    formMenu.style.display = 'flex';
    formMenu.style.flexDirection = 'row';
    formMenu.style.justifyContent = 'center';
    formMenu.style.alignItems = 'center';
    addOrDel.appendChild(formMenu);
    const btnMoins = document.createElement('button');
    btnMoins.innerHTML = '-';
    btnMoins.style.background = 'transparent';
    btnMoins.style.color = 'white';
    btnMoins.style.fontSize = '2rem';
    btnMoins.style.fontWeight = 'bold';
    btnMoins.style.border = 'none';
    btnMoins.addEventListener('click', delMenu);
    formMenu.appendChild(btnMoins);
    const quantite = document.createElement('input');
    quantite.style.width = '30px';
    quantite.style.height = '30px';
    quantite.style.textAlign = 'center';
    quantite.style.background = 'transparent';
    quantite.style.color = 'white';
    quantite.style.fontSize = '1.8rem';
    quantite.style.fontWeight = 'bold';
    quantite.style.border = 'none';
    quantite.style.margin = '0 10px';
    quantite.value = '0';
    quantite.setAttribute('class', 'quantite');
    formMenu.appendChild(quantite);
    const btnPlus = document.createElement('button');
    btnPlus.innerHTML = '+';
    btnPlus.style.background = 'transparent';
    btnPlus.style.color = 'white';
    btnPlus.style.fontSize = '2rem';
    btnPlus.style.fontWeight = 'bold';
    btnPlus.style.border = 'none';
    btnPlus.addEventListener('click', addMenu);
    formMenu.appendChild(btnPlus);
    function addMenu(e) {
        e.preventDefault();
        let qte = parseInt(quantite.value);
        qte++;
        quantite.value = qte.toString();
    }
    function delMenu(e) {
        e.preventDefault();
        let qte = parseInt(quantite.value);
        qte--;
        if (qte < 0) {
            qte = 0;
        }
        quantite.value = qte.toString();
    }
}
function formulaireAddMenu() {
    const divAddMenu = document.createElement('div');
    divAddMenu.setAttribute('class', 'divMenu');
    divForm.appendChild(divAddMenu);
    const formAddMenu = document.createElement('form');
    formAddMenu.setAttribute('method', 'POST');
    formAddMenu.setAttribute('action', '../controleurs/addMenu.php');
    formAddMenu.setAttribute('enctype', 'multipart/form-data');
    divAddMenu.appendChild(formAddMenu);
    class AddMenu {
        constructor() {
            this.id = '';
            this.txtLabel = '';
            this.elementInput = '';
            this.type = '';
        }
        createLabelAndInput(id = this.id, txtLabel = this.txtLabel, elementInput = this.elementInput, form = this.form, type = this.type) {
            const label = document.createElement('label');
            label.setAttribute('for', id);
            label.innerHTML = txtLabel;
            form.appendChild(label);
            const input = document.createElement(elementInput);
            if (elementInput === 'input') {
                input.setAttribute('type', type);
            }
            input.setAttribute('id', id);
            input.setAttribute('name', id);
            form.appendChild(input);
        }
    }
    const inputNom = new AddMenu().createLabelAndInput('nom', 'Nom du menu', 'input', formAddMenu, 'text');
    const inputPrix = new AddMenu().createLabelAndInput('prix', 'Prix', 'input', formAddMenu, 'text');
    const inputDesc = new AddMenu().createLabelAndInput('description', 'Description', 'textarea', formAddMenu, '');
    const inputImage = new AddMenu().createLabelAndInput('image', 'Image', 'input', formAddMenu, 'file');
    inputNom;
    inputPrix;
    inputDesc;
    inputImage;
    const btnAddMenu = document.createElement('button');
    btnAddMenu.setAttribute('class', 'btnAddMenu');
    btnAddMenu.innerHTML = 'Ajouter';
    btnAddMenu.style.margin = '10px 0';
    btnAddMenu.style.width = '90%';
    btnAddMenu.style.height = '50px';
    btnAddMenu.style.background = 'blue';
    btnAddMenu.style.color = 'white';
    formAddMenu.appendChild(btnAddMenu);
}
formulaireAddMenu();
function ajouterMenu(e) {
    e.preventDefault();
    divForm.classList.toggle('active');
    slide.style.overflowY = 'scroll';
}
