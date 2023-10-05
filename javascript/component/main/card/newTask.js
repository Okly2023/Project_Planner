import { changeState } from "../../task/changeState.js";

export const newTask = (object, element) => {
  
  //create div task
  const task = document.createElement('div');
  task.className = 'task';

  //create title task
  const title = document.createElement('h4');
  title.textContent = object.name;


  element.appendChild(task);
  task.appendChild(title)

  task.addEventListener('click', () => {
    changeState(task)

  })

}