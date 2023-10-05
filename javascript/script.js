import { clock } from "./component/form-header/form-header-clock.js";
import { formProject } from "./component/form-project/formProject.js";
import { barNav } from "./component/navigation/bar-nav.js";
import { inputCard } from "./component/new-card/inputCard.js";
import { addProject } from "./function/add-project.js";

const div = document.querySelector('.form-project');
const main = document.querySelector('main');

const section = document.createElement('section');
section.className = 'list-card';
main.appendChild(section)
barNav();
formProject();
addProject((data) => {
 	clock(data)
 	const div = document.querySelector('.form-project');
	const section = document.createElement('section')
	section.className = 'list-card'
	inputCard()
	
	if(div){
		div.remove();
	}
});

