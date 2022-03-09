"use strict";
const slide = document.querySelector('div.slide');
let tab = [];
class ImageSlide {
    constructor(attrSrc, attrAlt) {
        this.src = attrSrc;
        this.alt = attrAlt;
    }
}
const img1 = new ImageSlide('../ressources/plat1.jpg', 'brochette de légume, salade et potatoes');
const img2 = new ImageSlide('../ressources/plat2.png', '');
const img3 = new ImageSlide('../ressources/plat2.png', '');
const img4 = new ImageSlide('../ressources/plat2.png', '');
const img5 = new ImageSlide('../ressources/plat2.png', '');
tab.push(img1);
tab.push(img2);
tab.push(img3);
tab.push(img4);
tab.push(img5);
for (let i = 0; i < 5; i++) {
    const imgSlide = document.createElement('img');
    imgSlide.setAttribute('src', `${tab[i]['src']}`);
    imgSlide.setAttribute('alt', `${tab[i]['alt']}`);
    imgSlide.style.position = 'absolute';
    imgSlide.style.top = '0';
    imgSlide.style.right = '0';
    imgSlide.style.bottom = '0';
    imgSlide.style.left = '0';
    imgSlide.style.zIndex = '-1';
    slide.appendChild(imgSlide);
}
