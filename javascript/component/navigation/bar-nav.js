import { navLink } from "../../data/nav-link.js";



export const  barNav = () =>{
	const myDiv = document.getElementById('btn-link-nav')
	for (const iterator of navLink) {
		const para = document.createElement('a')
		para.textContent = iterator;
		myDiv.appendChild(para)

		const img = document.createElement('img');
		
	    
		img.src='javascript/images/angle.png';

		img.style.width = '25px';
		
		img.classList.add('img_class');
		myDiv.appendChild(img)

		
	}
}

