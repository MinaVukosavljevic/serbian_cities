const leftGalleryButton = document.querySelector('.left');
const rightGalleryButton = document.querySelector('.right');
const imgDescriptionBox = document.querySelector('.image-description');

let currentImg;
let cityName;

document.querySelector('.overlay-gallery .close').onclick = function () {//razmak izmedju overlay i close oznacava da da je close pod overlayem
    document.querySelector('.overlay-gallery').style.display = "none";
}

const allPictures = document.querySelectorAll('.gallery-city img'); // niz slika

const picturesBelgrade = document.querySelectorAll('img[data-city="beograd"]');
const picturesNoviSad = document.querySelectorAll('img[data-city="novi_sad"]');
const picturesNis = document.querySelectorAll('img[data-city="nis"]');
const picturesPirot = document.querySelectorAll('img[data-city="pirot"]');
const picturesCacak = document.querySelectorAll('img[data-city="cacak"]');
const picturesPristina = document.querySelectorAll('img[data-city="pristina"]');

for (let i = 0; i < allPictures.length; i++) {

    allPictures[i].addEventListener('click', function () {
        currentImg = this.dataset.no;
        console.log(currentImg)
        cityName = this.dataset.city;
        console.log(cityName)

        const url = 'img/' + cityName + '/' + currentImg + '.jpg';
        document.querySelector('.overlay-gallery img').src = url;
        document.querySelector('.overlay-gallery img').dataset.city = cityName;
        document.querySelector('.overlay-gallery').style.display = "flex";

        imgDescriptionBox.innerHTML = imgDescriptionObj[cityName][currentImg];
    });     
}


leftGalleryButton.addEventListener('click', prev);
rightGalleryButton.addEventListener('click', next);

function prev() {

    let currentGallery;

    switch (cityName) {
        case 'beograd':
            currentGallery = picturesBelgrade;
            break;
        case 'novi_sad':
            currentGallery = picturesNoviSad;
            break;
        case 'nis':
            currentGallery = picturesNis;
            break;
        case 'pirot':
            currentGallery = picturesPirot;
            break;
        case 'cacak':
            currentGallery = picturesCacak;
            break;
        case 'pristina':
            currentGallery = picturesPristina;
            break;

    }

    let previousImg = parseInt(currentImg) - 1;//parseInt pretvara string u broj 
    if (previousImg <= 0) {
        previousImg = currentGallery.length;
    }
    document.querySelector('.overlay-gallery img').src = 'img/' + cityName + '/' + previousImg + '.jpg';

    imgDescriptionBox.innerHTML = imgDescriptionObj[cityName][previousImg];
    currentImg = previousImg;
}

function next() {
    let currentGallery;

    switch (cityName) {
        case 'beograd':
            currentGallery = picturesBelgrade;
            break;
        case 'novi_sad':
            currentGallery = picturesNoviSad;
            break;
        case 'nis':
            currentGallery = picturesNis;
            break;
        case 'pirot':
            currentGallery = picturesPirot;
            break;
        case 'cacak':
            currentGallery = picturesCacak;
            break;
        case 'pristina':
            currentGallery = picturesPristina;
            break;

    }
    let nextImg = parseInt(currentImg) + 1;
    if (nextImg > currentGallery.length) {
        nextImg = 1;
    }
    document.querySelector('.overlay-gallery img').src = 'img/' + cityName + '/' + nextImg + '.jpg';

    imgDescriptionBox.innerHTML = imgDescriptionObj[cityName][nextImg];
    currentImg = nextImg;
}