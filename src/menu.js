import { subHeader } from "./index";

////menu page 
export function menuPage() {
    subHeader.textContent = "Menu AND Location"

    const menuHeader = document.createElement('div');
    menuHeader.className = "menuPage";

    const menuList = document.createElement('ul');
    menuList.className = "menuList";
    menuList.textContent = "All Bolani's come in 2 sizes - Personal (8.99) or Family (13.99)"
    
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = "Bolani Gandana - Classic fried flatbeard stuffed with leeks, herbs, and potatoes"

    const menuItem2 = document.createElement('li');
    menuItem2.textContent = "Bolani Kachaloo - Classic fried flatbeard stuffed with herbs, and potatoes"

    const menuItem3 = document.createElement('li');
    menuItem3.textContent = "Boolani - Spooky special! Fried flatbeard stuffed with pumpkin, potatoes, herbs, and ghost pepper powder"

    const menuItem4 = document.createElement('li');
    menuItem4.textContent = "Brolani - House favorite! Fried flatbeard stuffed with butternut squash, leeks, herbs, and ghost pepper powder"

    const menuSauces = document.createElement('div');
    menuSauces.textContent = "All Bolani's can be made Spicy upon request and come with choice of Yuzu Chutney or our House Mint and Itachi Cucumber Sauce. Extra sauce is 1.00"

    const location = document.createElement('div');
    location.textContent = "We're located in Oakland, CA on 999 Fake Ave. Call in an order at 999-999-9999 or Find us on every major delivery service."


    subHeader.appendChild(menuHeader);
    menuHeader.appendChild(menuList);
    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);
    menuList.appendChild(menuItem4);
    menuHeader.appendChild(menuSauces);
    menuHeader.appendChild(location);
}

