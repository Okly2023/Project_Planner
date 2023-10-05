
import { btnAdd } from "../../btn/btn-add.js";
import { newTask } from "./newTask.js";
import { burgerMenu } from "../../new-card/burgerMenu.js"

export const newCard = (name) => {
	const section = document.querySelector('.list-card');
  const childSection = section.firstChild

	// Create a div card
	const div = document.createElement('div');
	div.className = 'card';
 
		
	// create div header
	const headerCard = document.createElement('div');
	headerCard.className = 'header-card';

	// create div body
	const bodyCard = document.createElement('div');
	bodyCard.className = 'body-card';
  bodyCard.id = name;
	// create div footer
	const footerCard = document.createElement('div');
	footerCard.className = 'footer-card';

	// title of card with param
	const title = document.createElement('h2');
	title.textContent = name;

	// Button burger menu for option
	const burger = document.createElement('button');
	burger.textContent = '...';
	burger.className = 'burger-menu';

	// input for add task
	const inputTaskName = document.createElement('input');
	inputTaskName.type = 'text';
	inputTaskName.id = 'input-task-name';
	inputTaskName.className= 'input-text';
	inputTaskName.placeholder = 'add task';

	//button add task
	const btn = btnAdd('btn-add-task');

	section.insertBefore(div, childSection);
	div.appendChild(headerCard);
	div.appendChild(bodyCard);
	div.appendChild(footerCard);

	headerCard.appendChild(title);
	headerCard.appendChild(burger);

	footerCard.appendChild(inputTaskName);
	footerCard.appendChild(btn);

  
	let dateArray = []   
	let nameArray = [] 
  	btn.addEventListener('click', ()=>{
		let today = new Date()
		const object = {
			name: inputTaskName.value,
			date: today.toLocaleDateString('fr-FR')
		};
	newTask(object, bodyCard)
		inputTaskName.value = ''
		dateArray.push(object.date)
		nameArray.push(object.name)
	})
	burger.addEventListener('click', () =>  {
		burgerMenu(nameArray)
		
	})
	
	

}