import { clock } from "./component/form-header/form-header-clock.js";
import { formProject } from "./component/form-project/formProject.js";
import { barNav } from "./component/navigation/bar-nav.js";
import { addProject } from "./function/add-project.js";


formProject();
addProject((data) => {
 	clock(data)
 	const div = document.querySelector('.form-project');
	if(div){
		div.remove();
	}
});


barNav();