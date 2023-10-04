import { navLink } from "../../data/nav-link.js";
import { refreshPage } from "./reflesh.js";



export const  barNav = () =>{
	const myDiv = document.getElementById('btn-link-nav')
   
	const dive = document.createElement('div');
	dive.classList.add('dive_class');
	
	myDiv.appendChild(dive);

	let button_v = document.createElement("button");
	let button_t = document.createTextNode("add project");
	 button_v.classList.add('button_class');
	
	 button_v.appendChild(button_t);
	 myDiv.appendChild(button_v);
     console.log(button_v);
	button_v.addEventListener('click', () => refreshPage())
	 
	
	for (const iterator of navLink) {
		const para = document.createElement('a')
		para.textContent = iterator;
		dive.appendChild(para)

		const img = document.createElement('img');
		
	    
		img.src='javascript/images/angle.png';

		img.style.width = '25px';
		
		img.classList.add('img_class');
		dive.appendChild(img);

		
	}
}

