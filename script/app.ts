window.addEventListener('load', () => { window.onload;})

// Menu Hamburger
const menuH = document.querySelector('.menuH') as HTMLDivElement;
const liste = document.querySelector('.sidebar ul') as HTMLUListElement;

const divMenu = document.createElement('div') as HTMLDivElement;
divMenu.style.width = '100%';
divMenu.style.height = '100%';
divMenu.style.position = 'relative';
divMenu.style.display = 'flex';
divMenu.style.justifyContent = 'center';
divMenu.style.alignItems = 'center';
menuH.appendChild(divMenu);

let tabLigne : any = [];
for(let i = 0 ; i < 3 ; i++)
{
    const ligneMenu = document.createElement('div') as HTMLDivElement;
    ligneMenu.style.width = '60px';
    ligneMenu.style.height = '6px';
    ligneMenu.style.background = 'rgb(142,144,114)';
    ligneMenu.style.borderRadius = '5px';
    ligneMenu.style.position = 'absolute';
    divMenu.appendChild(ligneMenu);
}

menuH.addEventListener('click', () => 
{
    liste.classList.toggle('active');
});

// Message Description
const msgDescription = document.querySelector('.msgDescription') as HTMLDivElement;
const msgDescTitre = document.querySelector('.msgDescription h3') as HTMLHeadingElement;
const msgDescP = document.querySelector('.msgDescription p') as HTMLParagraphElement;
let tabMsg = [] as any;

setTimeout(() => {
    msgDescription.style.opacity = '1';
}, 500);
class MessageSlide {
    titre: String;
    paragraphe: String;

    constructor(heading: String, texte: String)
    {
        this.titre = heading;
        this.paragraphe = texte;
    }
}

const msg1 = new MessageSlide('Profitez d\'une vue imprenable','Grâce au toit entièrement vitré de ce bus à impériale, plongez dans l\'univers parisien dans les meilleurs conditions de confort, quelle que soit la saison.');
const msg2 = new MessageSlide('Laissez vos sens vous transporter','À bord du <span>BUSTRO</span>NOME, les passagers découvrent les plus belles vues de Paris en profitant du meilleur de la gastronomie.');
const msg3 = new MessageSlide('Savourez une pause bien être','<span>BUSTRO</span>NOME : Agréable moyen de découvrir la cuisine et les vins d\'une capitale culturelle tout en visitant les plus beaux monuments de Paris.');
const msg4 = new MessageSlide('Dégustez des mets raffinés','Menu découverte de 4 plats pour le déjeuner et de 6 plats pour le dîner au format dégustation proposés avec une selection de vins et champagnes');

tabMsg.push(msg1);
tabMsg.push(msg2);
tabMsg.push(msg3);
tabMsg.push(msg4);

// Slider
const slide = document.querySelector('div.slide') as HTMLDivElement;
let tab = [] as any;
let tabImg = [] as any;

class ImageSlide {
    src: String;
    alt: String;

    constructor(attrSrc: String, attrAlt: String)
    {
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

for(let i = 0 ; i < 4 ; i++)
{
    const imgSlide = document.createElement('div') as HTMLImageElement;
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

function slideImg() : void
{
    let sec = 0;
    let img = 0;

    setInterval(() => 
    {
        sec++;
        if(sec > 4 )
        {
            tabImg[img].style.opacity = '0';
            img++
            sec = 0
            
            if(img > 3)
            {
                img = 0;
            }

            tabImg[img].style.opacity = '1';
            msgDescTitre.innerHTML = tabMsg[img]['titre'];
            msgDescP.innerHTML = tabMsg[img]['paragraphe'];
        }    
        
    }, 1000);

    setInterval(() => 
    {
       msgDescription.style.opacity = '0';
    }, 4000);

    setInterval(() => 
    {
        msgDescription.style.opacity = '1';
    }, 5000);
}

window.addEventListener('load', () => 
{
    slideImg();
});

// Réservation Les menus
const divForm = document.querySelector('.formMenu') as HTMLDivElement;

const btnAjouterMenu = document.querySelector('.ajouterMenu') as HTMLButtonElement;
btnAjouterMenu.addEventListener('click', ajouterMenu);

const menus = document.querySelector('.menus') as HTMLDivElement;

const cartes = document.querySelectorAll('.carte');

cartes.forEach(carte => 
{
    const addOrDel = document.createElement('div') as HTMLDivElement;
    addOrDel.style.width = '100%';
    addOrDel.style.marginTop = '10px';
    addOrDel.style.padding = '10px';
    addOrDel.style.borderTop = '1px solid white';
    carte.appendChild(addOrDel);
    
    const formMenu = document.createElement('form') as HTMLFormElement;
    formMenu.style.width = '100%';
    formMenu.style.height = '100%';
    formMenu.style.display = 'flex';
    formMenu.style.flexDirection = 'row';
    formMenu.style.justifyContent = 'center';
    formMenu.style.alignItems = 'center';
    addOrDel.appendChild(formMenu);

    const btnMoins = document.createElement('button') as HTMLButtonElement;
    btnMoins.innerHTML = '-';
    btnMoins.style.background = 'transparent';
    btnMoins.style.color = 'white';
    btnMoins.style.fontSize = '2rem';
    btnMoins.style.fontWeight = 'bold';
    btnMoins.style.border = 'none';
    btnMoins.addEventListener('click', delMenu);
    formMenu.appendChild(btnMoins);

    const quantite = document.createElement('input') as HTMLInputElement;
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

    const btnPlus = document.createElement('button') as HTMLButtonElement;
    btnPlus.innerHTML = '+';
    btnPlus.style.background = 'transparent';
    btnPlus.style.color = 'white';
    btnPlus.style.fontSize = '2rem';
    btnPlus.style.fontWeight = 'bold';
    btnPlus.style.border = 'none';
    btnPlus.addEventListener('click', addMenu);
    formMenu.appendChild(btnPlus);

    function addMenu(e : MouseEvent)
    {
        e.preventDefault();
        let qte = parseInt(quantite.value);
        qte++;
        quantite.value = qte.toString();
    }

    function delMenu(e : MouseEvent)
    {
        e.preventDefault();
        let qte = parseInt(quantite.value);
        qte--;
        if(qte < 0)
        {
            qte = 0;
        }

        quantite.value = qte.toString();
    }

})


function formulaireAddMenu()
{
    const divAddMenu = document.createElement('div') as HTMLDivElement;
    divAddMenu.setAttribute('class', 'divMenu');
    divForm.appendChild(divAddMenu);
    
    const formAddMenu = document.createElement('form') as HTMLFormElement;
    formAddMenu.setAttribute('method', 'POST');
    formAddMenu.setAttribute('action', '../controleurs/addMenu.php');
    formAddMenu.setAttribute('enctype', 'multipart/form-data');
    divAddMenu.appendChild(formAddMenu);

    class AddMenu
    {
        public id: string = '';
        public txtLabel: string = '';
        public elementInput: string = '';
        public form: any;
        public type: string = '';

        constructor() {}
        
        createLabelAndInput(id = this.id, txtLabel = this.txtLabel, elementInput = this.elementInput, form = this.form, type = this.type)
        {
            const label = document.createElement('label') as HTMLLabelElement;
            label.setAttribute('for', id);
            label.innerHTML = txtLabel;
            form.appendChild(label);

            const input = document.createElement(elementInput) as HTMLElement;
            if(elementInput === 'input')
            {
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

function ajouterMenu(e : MouseEvent)
{
    e.preventDefault();
    divForm.classList.toggle('active');
    slide.style.overflowY = 'scroll';
    
}

