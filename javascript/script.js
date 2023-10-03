import { clock } from "./component/form-header/form-header-clock.js";
import { formProject } from "./component/form-project/formProject.js";
import { barNav } from "./component/navigation/bar-nav.js";
import { newCard } from "./component/new-card/addCard.js";
import { addProject } from "./function/add-project.js";


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


barNav();