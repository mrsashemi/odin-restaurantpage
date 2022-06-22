import './style.css'
import bolaniBro from './images/bolaniBro.png'
import rightBolani from './images/rightBolani.png'
import leftBolani from './images/leftBolani.png'
import rightSmoke from './images/rightSmoke.png'
import leftSmoke from './images/leftSmoke.png'

  //////////////////////////////////////////////////////////////
 //Use revealing module pattern to create restaurant homepage//
//////////////////////////////////////////////////////////////
const pageContent = (function() {

    ////cache dom for content div
    const content = document.getElementById('content');

    ////load in the page with a fade
    window.addEventListener('load', () => {
        fade.fadeIn(header, 50);
        fade.fadeIn(subHeader, 50);
        fade.fadeIn(bolaniBroButton.bolaniBroDiv, 50);
    })
    
    ////create header and subheader for restaurant homepage
    const header = document.createElement('div');
    header.textContent = "BOLANI BROS"
    header.className = "header"

    content.appendChild(header);

    const subHeader = document.createElement('div');
    subHeader.textContent = "Oven Fresh HOT Delicious"
    subHeader.className = "subHeader"

    content.appendChild(subHeader);

    ////reveal
    return {content, header, subHeader}
})();


  //////////////////////////////////////////////////////
 //Use another module to create the bolani bro button//
//////////////////////////////////////////////////////
const bolaniBroButton = (function() {
     ////add Bolani Chef images to be turned into an animated button
     const bolaniBroDiv = document.createElement('div');
     bolaniBroDiv.className = "bolaniBro";
 
     const bolaniChef = new Image();
     bolaniChef.className = "bolaniChef"
     bolaniChef.src = bolaniBro;
 
     const bolaniChefRightHand = new Image();
     bolaniChefRightHand.className = "rightBolani"
     bolaniChefRightHand.src = rightBolani;
 
     const bolaniChefRightSmoke = new Image();
     bolaniChefRightSmoke.className = "rightSmoke"
     bolaniChefRightSmoke.src = rightSmoke;
 
     const bolaniChefLeftHand = new Image();
     bolaniChefLeftHand.className = "leftBolani"
     bolaniChefLeftHand.src = leftBolani;
 
     const bolaniChefLeftSmoke = new Image();
     bolaniChefLeftSmoke.className = "leftSmoke"
     bolaniChefLeftSmoke.src = leftSmoke;
     
     bolaniBroDiv.appendChild(bolaniChef);
     bolaniBroDiv.appendChild(bolaniChefRightHand);
     bolaniBroDiv.appendChild(bolaniChefRightSmoke);
     bolaniBroDiv.appendChild(bolaniChefLeftHand);
     bolaniBroDiv.appendChild(bolaniChefLeftSmoke);
     pageContent.content.appendChild(bolaniBroDiv);

     ////add divs containing text-content for buttons to be revealed upon hovering over image
     const menuAndLocation = document.createElement('div')
     menuAndLocation.className = "menu";
     menuAndLocation.textContent = `Menu & Locations`;
 
     const aboutUs = document.createElement('div');
     aboutUs.className = "about";
     aboutUs.textContent = `About`;
 
     const contactUs = document.createElement('div');
     contactUs.className = 'contact';
     contactUs.textContent = `Contact`;
 
     bolaniBroDiv.appendChild(menuAndLocation);
     bolaniBroDiv.appendChild(aboutUs);
     bolaniBroDiv.appendChild(contactUs);
     
 
     ////bind event listeners for the About page onto the Chef
     bolaniChef.addEventListener("mouseenter", () => {
         //filters borrowed from CSS filter generator by Barrett Sonntag on codepen.io
         bolaniChef.style.filter = `invert(12%) sepia(91%) saturate(6150%) hue-rotate(146deg) brightness(101%) contrast(105%)`;
         bolaniChef.style.cursor = "pointer";
         fade.fadeIn(aboutUs, 20);
     })
 
     bolaniChef.addEventListener("mouseleave", () => {
         bolaniChef.style.filter = "none";
         fade.fadeOut(aboutUs);
     })
 
     ////bind event listener for the Menu page onto the right hand
     bolaniChefRightHand.addEventListener("mouseenter", () => {
         bolaniChefRightHand.style.filter = `invert(12%) sepia(91%) saturate(6150%) hue-rotate(146deg) brightness(101%) contrast(105%)`;
         bolaniChefRightHand.style.cursor = "pointer";
         fade.fadeOut(bolaniChefRightSmoke);
         fade.fadeIn(menuAndLocation, 20);
     })
 
     bolaniChefRightHand.addEventListener("mouseleave", () => {
         bolaniChefRightHand.style.filter = "none";
         fade.fadeIn(bolaniChefRightSmoke, 20);
         fade.fadeOut(menuAndLocation)
     })
     
     ////bind event listener for the Contact page onto the left hand
     bolaniChefLeftHand.addEventListener("mouseenter", () => {
         bolaniChefLeftHand.style.filter = `invert(12%) sepia(91%) saturate(6150%) hue-rotate(146deg) brightness(101%) contrast(105%)`;
         bolaniChefLeftHand.style.cursor = "pointer";
         fade.fadeOut(bolaniChefLeftSmoke);
         fade.fadeIn(contactUs, 20);
     })
 
     bolaniChefLeftHand.addEventListener("mouseleave", () => {
         bolaniChefLeftHand.style.filter = "none";
         fade.fadeIn(bolaniChefLeftSmoke, 20)
         fade.fadeOut(contactUs)
     })

     ////reveal
     return {bolaniBroDiv}
     
})();


  ////////////////////////////////////////////////////////////
 //Use another module to simulate a fade effect for content//
////////////////////////////////////////////////////////////
const fade = (function() {
    ////add functions to fade element for additional image button styles
    function fadeOut(e) {
        let o = 0.75;
        let timer = setInterval(function() {
            if (o <= 0.1) {
                clearInterval(timer);
                e.style.display = "none";
            }
            e.style.opacity = o;
            e.style.filter = `alpha(opacity = ${o * 100})`;
            o -= o * 0.1;
        }, 20)
    }
    
    function fadeIn(e, time) {
        let o = 0.1;
        e.style.display = "block";
        let timer = setInterval(function() {
            if (o >= 0.75){
                clearInterval(timer);
            }
            e.style.opacity = o;
            e.style.filter = `alpha(opacity = ${o * 100})`;
            o += o * 0.1;
        }, time);
    }

    ////reveal
    return {fadeOut, fadeIn}
    
})();