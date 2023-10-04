import { newCard } from "./component/main/card/newCard.js";
import { clock } from "./component/form-header/form-header-clock.js";
import { formProject } from "./component/form-project/formProject.js";
import { barNav } from "./component/navigation/bar-nav.js";
import { inputCard } from "./component/new-card/addCard.js";
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
	inputCard()
	

	if(div){
		div.remove();
	}
});


barNav();
/*let refreshButton = document.getElementById('btn-refresh');
console.log(refreshButton);
refreshButton.addEventListener('keyup', console.log('coucou'))*/

