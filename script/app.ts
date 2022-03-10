

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

const img1 = new ImageSlide('../ressources/plat1.jpg', 'brochette de légumes');
const img2 = new ImageSlide('../ressources/plat2.jpg', 'agneau');
const img3 = new ImageSlide('../ressources/plat3.jpg', 'burger');
const img4 = new ImageSlide('../ressources/plat4.jpg', 'gambass');
const img5 = new ImageSlide('../ressources/plat5.jpg', 'poisson');

tab.push(img1);
tab.push(img2);
tab.push(img3);
tab.push(img4);
tab.push(img5);

for(let i = 0 ; i < 5 ; i++)
{
    const imgSlide = document.createElement('img') as HTMLImageElement;
    imgSlide.setAttribute('src', `${tab[i]['src']}`);
    imgSlide.setAttribute('alt', `${tab[i]['alt']}`);
    imgSlide.style.position = 'absolute';
    imgSlide.style.width = '100%';
    imgSlide.style.top = '0';
    imgSlide.style.right = '0';
    imgSlide.style.bottom = '0';
    imgSlide.style.left = '0';
    imgSlide.style.zIndex = '-1';
    imgSlide.style.opacity = '1';
    tabImg.push(imgSlide);
    slide.appendChild(imgSlide);
}

function slideAction()
{   
    let sec = 0;
    let img = 0;

    setInterval(() => 
    {
        sec++;
        if(sec > 4)
        {
            tabImg[img].style.opacity = '0'
            img++;
            sec = 0;
            
            if(img > 4)
            {
                img = 0;
            }
            tabImg[img].style.opacity = '1';
        }        
    }, 1000);

}

window.addEventListener('load', () => 
{
    slideAction();
});