
import { validTxtInput } from "../../../function/validate-input-txt.js";
import { btnAdd } from "../../btn/btn-add.js";
import { selectOption } from "../../select/select-otpion.js";
import { newTask } from "./newTask.js";
import { burgerMenu } from "../../new-card/burgerMenu.js"

export const newCard = (name) => {
	const section = document.querySelector('.list-card');
  const childSection = section.firstChild
	
	let nameArray = [] 
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

	// Select burger
	const select = burgerMenu(nameArray,burger, bodyCard);
	section.insertBefore(div, childSection);
	div.appendChild(headerCard);
	div.appendChild(bodyCard);
	div.appendChild(footerCard);
	headerCard.appendChild(title);
	headerCard.appendChild(burger);
	headerCard.appendChild(select)


	footerCard.appendChild(inputTaskName);
	footerCard.appendChild(btn);

  
	let dateArray = []   
	
	burger.addEventListener('click', () =>  {
		burger.style.display = 'none';
		if (select.style.display === 'none') {
			select.style.display = 'block'
		}
		else{
			select.style.display = 'none'
		}
	})
	
	
	let value, isValid;
  inputTaskName.addEventListener('keyup', (e) =>{
		value = e.target.value
		isValid = validTxtInput(value, 4, 16);

		if(!isValid){
			inputTaskName.style.backgroundColor = 'rgb(255,0 ,0, 0.2)'
			inputTaskName.style.boxShadow = '0 0 15px red'
		}else{
			inputTaskName.style.backgroundColor = 'rgb(0,204,0, 0.2)'
			inputTaskName.style.boxShadow = '0 0 15px rgb(0,204,0, 0.2)'
		}
	});

  
  btn.addEventListener('click', ()=>{
		value = inputTaskName.value
		isValid = validTxtInput(value, 4, 16);
		if(isValid){

			let today = new Date()
			const object = {
				name: inputTaskName.value,
				date: today.toLocaleString()
	  	};
    	newTask(object, bodyCard)

			inputTaskName.value = ''
			nameArray.push(object);
  	}else{
			alert('La valeur est incorrect.')
		}
	});
	

}