import './style.css'
import bolaniBro from './images/bolaniBro.png'
import rightBolani from './images/rightBolani.png'
import leftBolani from './images/leftBolani.png'
import rightSmoke from './images/rightSmoke.png'
import leftSmoke from './images/leftSmoke.png'

function homePage() {
    //cache dom for content div
    const content = document.getElementById('content');
    
    //create header and subheader for restaurant homepage
    const header = document.createElement('div');
    header.textContent = "BOLANI BROS"
    header.className = "header"

    content.appendChild(header);

    const subHeader = document.createElement('div');
    subHeader.textContent = "Oven Fresh HOT Delicious"
    subHeader.className = "subHeader"

    content.appendChild(subHeader);

    //add Bolani Chef image to be turned into an animated button
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
}

homePage();