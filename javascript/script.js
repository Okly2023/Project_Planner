import { formProject } from "./component/form-project/formProject.js";
import { barNav } from "./component/navigation/bar-nav.js";
import { addProject } from "./function/add-project.js";


formProject();
const log = addProject((data) => {
 	console.log(data); // Les données du formulaire sont disponibles ici
});


