import { btnAdd } from "../../btn/btn-add.js";

export const newCard = (name) => {
	const section = document.querySelector('.list-card');


	// Create a div card
	const div = document.createElement('div');
	div.className = 'card';
		
	// create div header
	const headerCard = document.createElement('div');
	headerCard.className = 'header-card';

	// create div body
	const bodyCard = document.createElement('div');
	bodyCard.className = 'body-card';

	// create div footer
	const footerCard = document.createElement('div');
	footerCard.className = 'footer-card';

	// title of card with param
	const title = document.createElement('h2');
	title.textContent = name;

	// Button burger menu for option
	const burger = document.createElement('button');
	burger.textContent = '. . .';

	// input for add task
	const inputTaskName = document.createElement('input');
	inputTaskName.type = 'text';
	inputTaskName.id = 'input-task-name';
	inputTaskName.className= 'input-text';
	inputTaskName.placeholder = 'add task';

	//button add task
	const btn = btnAdd('btn-add-task');
	console.log(btn);

	section.appendChild(div);
	div.appendChild(headerCard);
	div.appendChild(bodyCard);
	div.appendChild(footerCard);

	headerCard.appendChild(title);
	headerCard.appendChild(burger);

	footerCard.appendChild(inputTaskName);
	footerCard.appendChild(btn);

}