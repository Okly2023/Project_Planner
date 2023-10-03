import { navLink } from "../../data/nav-link.js";

export const  barNav = () =>{
	const myDiv = document.getElementById('btn-link-nav')
	for (const iterator of navLink) {
		const para = document.createElement('p')
		myDiv.appendChild(para)
		para.textContent = iterator;
	}
}