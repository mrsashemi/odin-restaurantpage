import './style.css'
import { bolaniBroButton } from './buttons'

  ////////////////////////////////////////////////////////////////////
 //ES6 Modules - Start by generating the page content using JS only//
////////////////////////////////////////////////////////////////////

////cache dom for content div
export const content = document.getElementById('content');

////load in the page with a fade effect
function pageLoad() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            fadeIn(content, 5, "flex");
        }, 500);
    })
}

pageLoad();

////create header and subheader for restaurant homepage
export const header = document.createElement('div');
header.textContent = "BOLANI BROS"
header.className = "header"

content.appendChild(header);

export const subHeader = document.createElement('div');
subHeader.textContent = "Oven Fresh HOT Delicious"
subHeader.className = "subHeader"

content.appendChild(subHeader);

bolaniBroButton();

  ///////////////////////////////////////
 //add functions to fade page elements//
///////////////////////////////////////

export function fadeOut(e) {
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

export function fadeIn(e, time, display) {
    let o = 0.1;
    e.style.display = display;
    let timer = setInterval(function() {
        if (o >= 0.75){
            clearInterval(timer);
        }
        e.style.opacity = o;
        e.style.filter = `alpha(opacity = ${o * 100})`;
        o += o * 0.1;
    }, time);
}

