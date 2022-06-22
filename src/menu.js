import { subHeader } from "./index";

////Menu Page 
export function menuPage() {
    subHeader.innerHTML = "Menu AND Location"

    const menuHeader = document.createElement('div');
    menuHeader.className = "menuPage";

    const menuList = document.createElement('ul');
    menuList.className = "menuList";
    menuList.innerHTML = "<b>All Bolani's come in 2 sizes - Personal (8.99) or Family (13.99)</b><br><br>"
    
    const menuItem1 = document.createElement('li');
    menuItem1.innerHTML = "<b>Bolani Gandana</b> - Classic fried flatbeard stuffed with leeks, herbs, and potatoes"

    const menuItem2 = document.createElement('li');
    menuItem2.innerHTML = "<b>Bolani Kachaloo</b> - Classic fried flatbeard stuffed with herbs, and potatoes"

    const menuItem3 = document.createElement('li');
    menuItem3.innerHTML = "<b>Boolani</b> - Spooky special! Fried flatbeard stuffed with pumpkin, potatoes, herbs, and ghost pepper powder"

    const menuItem4 = document.createElement('li');
    menuItem4.innerHTML = "<b>Brolani</b> - House favorite! Fried flatbeard stuffed with butternut squash, leeks, herbs, and ghost pepper powder"

    const menuSauces = document.createElement('div');
    menuSauces.innerHTML = "All Bolani's can be made Spicy upon request and come with choice of <b>Yuzu Chutney</b> or our <b>House Mint and Itachi Cucumber Sauce</b>. <br><br><b>Extra sauce is 1.00</b><br>"

    const location = document.createElement('div');
    location.innerHTML = "<br>We're located in <b>Oakland, CA</b> on <b>999 Fake Ave.</b> <br>Call in an order at <b>999-999-9999</b> or Find us on every major delivery service at our Flagship Oakland location or in Ghost Kitchens across the US."


    subHeader.appendChild(menuHeader);
    menuHeader.appendChild(menuList);
    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);
    menuList.appendChild(menuItem4);
    menuHeader.appendChild(menuSauces);
    menuHeader.appendChild(location);
}

