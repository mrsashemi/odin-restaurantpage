import { subHeader } from "./index";

////contact page
export function contactPage() {
    subHeader.textContent = "Contact US"

    const contactHeader = document.createElement('div');
    contactHeader.className = "contactPage";
    contactHeader.textContent = "Feel free to submit any and all inquiries below"

   const contactForm = document.createElement("form");
   contactForm.className = "contactForm";

   const generalContact = document.createElement("input");
   generalContact.type = "radio";
   generalContact.id = "general";
   generalContact.name = "inquiry_type";
   generalContact.value = "general";
   const generalLabel = document.createElement("label");
   generalLabel.htmlFor = "general";
   generalLabel.textContent = "General Inquiry";
   const br1 = document.createElement("br");

   const ghostKitchen = document.createElement("input");
   ghostKitchen.type = "radio";
   ghostKitchen.id = "ghostKitchen";
   ghostKitchen.name = "inquiry_type";
   ghostKitchen.value = "ghostKitchen";
   const ghostKitchenLabel = document.createElement("label");
   ghostKitchenLabel.htmlFor = "ghostKitchen";
   ghostKitchenLabel.textContent = "Franchising or Ghost Kitchens";
   const br2 = document.createElement("br");

   const bolaniBox = document.createElement("input");
   bolaniBox.type = "radio";
   bolaniBox.id = "bolaniBox";
   bolaniBox.name = "inquiry_type";
   bolaniBox.value = "bolaniBox";
   const bolaniBoxLabel = document.createElement("label");
   bolaniBoxLabel.htmlFor = "bolaniBox";
   bolaniBoxLabel.textContent = "Order Bolani Boxes";
   const br3 = document.createElement("br");

   const firstName = document.createElement("label");
   firstName.htmlFor = "fname";
   firstName.textContent = "First Name:";
   const fnameInput = document.createElement("input");
   fnameInput.type = "text";
   fnameInput.id = "fname";
   fnameInput.name = "fname";

   const lastName = document.createElement("label");
   lastName.htmlFor = "lname";
   lastName.textContent = "Last Name:";
   const lnameInput = document.createElement("input");
   lnameInput.type = "text";
   lnameInput.id = "lname";
   lnameInput.name = "lname";

   const eMail = document.createElement("label");
   eMail.htmlFor = "email";
   eMail.textContent = "E-Mail:";
   const emailInput = document.createElement("input");
   emailInput.type = "email";
   emailInput.id = "email";
   emailInput.name = "email";
   const br4 = document.createElement("br");

   const textArea = document.createElement("textarea")
   textArea.rows = "4";
   textArea.cols = "50";
   textArea.name= "message";
   textArea.id = "userForm";
   textArea.textContent = "Enter inquiry here..."
   const br5 = document.createElement("br");

   const submitButton = document.createElement("input");
   submitButton.type = "submit";
   submitButton.id = "submitButton";



    subHeader.appendChild(contactHeader);
    subHeader.appendChild(contactForm);

    contactForm.appendChild(generalContact);
    contactForm.appendChild(generalLabel);
    contactForm.appendChild(br1);

    contactForm.appendChild(ghostKitchen);
    contactForm.appendChild(ghostKitchenLabel);
    contactForm.appendChild(br2);

    contactForm.appendChild(bolaniBox);
    contactForm.appendChild(bolaniBoxLabel);
    contactForm.appendChild(br3);

    contactForm.appendChild(firstName);
    contactForm.append(fnameInput);

    contactForm.appendChild(lastName);
    contactForm.append(lnameInput);

    contactForm.appendChild(eMail);
    contactForm.append(emailInput);
    contactForm.appendChild(br4);

    contactForm.appendChild(textArea);
    contactForm.appendChild(br5);

    contactForm.appendChild(submitButton);
    
}