export const formProject = () => {
	const main = document.querySelector('main');
	const form = document.createElement('div');
	form.className = 'form-project'
	

	// INPUT TEXT FOR NAME PROJECT
	const labelName = document.createElement('label');
	labelName.setAttribute('for', 'name');
	labelName.textContent = 'Project name';

	const inputName = document.createElement('input');
	inputName.type = 'text';
	inputName.name = 'name'
	inputName.id = 'name-project';
	inputName.className = 'input-text'

	// INPUT TEXT FOR DESCRIPTION PROJECT
	const labelDescription = document.createElement('label');
	labelDescription.setAttribute('for', 'description');
	labelDescription.textContent = 'Description';

	const inputDescription = document.createElement('textArea');
	inputDescription.setAttribute('row', '30');
	inputDescription.setAttribute('col', '20');
	inputDescription.id= 'description-project';

	// INPUT DATE FOR DEAD LINE PROJECT
	const inputDate = document.createElement('input');
	inputDate.type = 'date';
	inputDate.className = 'input-date'
	inputDate.id = 'date-project-dead-line';


	// BTN SUBMIT RETURN VALUE FORM
	const btnSubmit = document.createElement('button');
	btnSubmit.id = 'submit-project';
	btnSubmit.textContent = 'add project'


	// Create form with input
	form.appendChild(labelName);
	form.appendChild(inputName);

	form.appendChild(labelDescription);
	form.appendChild(inputDescription);
	
	form.appendChild(inputDate);

	form.appendChild(btnSubmit)

	// Injecte element into html
	main.appendChild(form)
}