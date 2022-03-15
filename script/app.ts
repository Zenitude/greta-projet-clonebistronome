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
const slide = document.querySelector('div.slide') as Element;
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