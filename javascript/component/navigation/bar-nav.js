import { navLink } from "../../data/nav-link.js";
import { refreshPage } from "./reflesh.js";

const navLinkImages = [
    'javascript/images/maison.png',
    'javascript/images/news.png',
	'javascript/images/boite.png',
	'javascript/images/contact.png',
	'javascript/images/profil.png'
];

export const  barNav = () =>{
	const myDiv = document.getElementById('btn-link-nav')
   
	const dive = document.createElement('div');
	dive.classList.add('dive_class');
	
	myDiv.appendChild(dive);

	let button_v = document.createElement("button");
	let button_t = document.createTextNode("new project");
	 button_v.classList.add('button_class');
	 button_v.appendChild(button_t);
	 myDiv.appendChild(button_v);

	button_v.addEventListener('click', () => refreshPage())




	for (let i = 0; i < navLink.length; i++) {
        const para = document.createElement('a');
        para.textContent = navLink[i];

        // Create an image element
        const img = document.createElement('img');
        img.src = navLinkImages[i]; // Set the image source from the navLinkImages array
       
        img.classList.add('nav-link-image'); // Add a CSS class to style the images if needed
		img.style.width = '20px';
		img.style.height = '20px';
		

        // Append both the image and text to the container div
        
        dive.appendChild(para);
		dive.appendChild(img);
	 
	
}
}
