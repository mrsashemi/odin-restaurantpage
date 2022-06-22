import { content, header, subHeader, fadeIn, fadeOut } from "./index";
import bolaniBro from './images/bolaniBro.png'
import rightBolani from './images/rightBolani.png'
import leftBolani from './images/leftBolani.png'
import rightSmoke from './images/rightSmoke.png'
import leftSmoke from './images/leftSmoke.png'
import { contactPage } from "./contact";
import { aboutPage } from "./about";
import { menuPage } from "./menu";
import { head } from "lodash";

  ///////////////////////////////////////////////////////////////////////////////
 //Use a function to generate the Bolani Bro image and render it into a button//
///////////////////////////////////////////////////////////////////////////////

export const bolaniBroButton = function() {

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
    content.appendChild(bolaniBroDiv);

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
        fadeIn(aboutUs, 20, "block");
    })

    bolaniChef.addEventListener("mouseleave", () => {
        bolaniChef.style.filter = "none";
        fadeOut(aboutUs);
    })

    bolaniChef.addEventListener("click", () => {
       aboutPage();
       headerButton(bolaniBroDiv);
       bolaniBroDiv.style.top = "0";
       bolaniBroDiv.style.width = "50vmin";
       bolaniBroDiv.style.height = "50vmin";
   })

    ////bind event listener for the Menu page onto the right hand
    bolaniChefRightHand.addEventListener("mouseenter", () => {
        bolaniChefRightHand.style.filter = `invert(12%) sepia(91%) saturate(6150%) hue-rotate(146deg) brightness(101%) contrast(105%)`;
        bolaniChefRightHand.style.cursor = "pointer";
        fadeOut(bolaniChefRightSmoke);
        fadeIn(menuAndLocation, 20, "block");
    })

    bolaniChefRightHand.addEventListener("mouseleave", () => {
        bolaniChefRightHand.style.filter = "none";
        fadeIn(bolaniChefRightSmoke, 20, "block");
        fadeOut(menuAndLocation)
    })

    bolaniChefRightHand.addEventListener("click", () => {
        menuPage();
        headerButton(bolaniBroDiv);
        bolaniBroDiv.style.top = "0";
        bolaniBroDiv.style.width = "40vmin";
        bolaniBroDiv.style.height = "40vmin";
    })
    
    ////bind event listener for the Contact page onto the left hand
    bolaniChefLeftHand.addEventListener("mouseenter", () => {
        bolaniChefLeftHand.style.filter = `invert(12%) sepia(91%) saturate(6150%) hue-rotate(146deg) brightness(101%) contrast(105%)`;
        bolaniChefLeftHand.style.cursor = "pointer";
        fadeOut(bolaniChefLeftSmoke);
        fadeIn(contactUs, 20, "block");
    })

    bolaniChefLeftHand.addEventListener("mouseleave", () => {
        bolaniChefLeftHand.style.filter = "none";
        fadeIn(bolaniChefLeftSmoke, 20, "block")
        fadeOut(contactUs)
    })

    bolaniChefLeftHand.addEventListener("click", () => {
       contactPage();
       headerButton(bolaniBroDiv);
       bolaniBroDiv.style.top = "0";
       bolaniBroDiv.style.width = "30vmin";
       bolaniBroDiv.style.height = "30vmin";
   })
    
};

  ///////////////////////////////////////////////////////////////////////////////////////
 //Use a different function to turn the header into a button to return to the homepage//
///////////////////////////////////////////////////////////////////////////////////////

function headerButton(e) {
    if (subHeader.textContent !== "Oven Fresh HOT Delicious") {

        ////bind event listeners to the header to return to the main page
        header.addEventListener("mouseenter", () => {
            header.style.color = "green";
            header.style.cursor = "pointer";
        })

        header.addEventListener("mouseleave", () => {
            header.style.color = "black";
        })

        header.addEventListener("click", () => {
            while (subHeader.firstChild) {
                subHeader.removeChild(subHeader.firstChild)
            }
            
            subHeader.textContent = "Oven Fresh HOT Delicious";
            header.style.color = "black";
            header.style.cursor = "default";

            header.addEventListener("mouseenter", () => {
                header.style.color = "black";
                header.style.cursor = "default";
            })

            ////resize bolani bro upon resetting page
            e.style.top = "0.5vmin";
            e.style.width = "70vmin";
            e.style.height = "70vmin";

        })
    } 
};