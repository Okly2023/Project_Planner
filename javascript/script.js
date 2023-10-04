import { newCard } from "./component/main/card/newCard.js";
import { clock } from "./component/form-header/form-header-clock.js";
import { formProject } from "./component/form-project/formProject.js";
import { barNav } from "./component/navigation/bar-nav.js";
import { addProject } from "./function/add-project.js";

const div = document.querySelector('.form-project');
const main = document.querySelector('main');

const section = document.createElement('section');
section.className = 'list-card';
main.appendChild(section)
formProject();
addProject((data) => {
 	clock(data)
 	const div = document.querySelector('.form-project');
	const section = document.createElement('section')
	section.className = 'list-card'
	newCard()
	

	if(div){
		div.remove();
	}
});



newCard('alex');
newCard('alex');newCard('alex');newCard('alex');newCard('alex');newCard('alex');newCard('alex');

barNav();