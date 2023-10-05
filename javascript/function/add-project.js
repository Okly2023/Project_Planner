import { selectOption } from "../component/select/select-otpion.js";
import { validDate } from "./validate-input-date.js";
import { validTxtInput } from "./validate-input-txt.js";

export function addProject(callback) {
  const btn = document.getElementById('submit-project');
  const nameForm = document.getElementById('name-project');
  const descriptionForm = document.getElementById('description-project');
  const dateForm = document.getElementById('date-project-dead-line');
  
  nameForm.addEventListener('keyup', (e) =>{
    let value = e.target.value
    let boolean = validTxtInput(value, 4, 15)

    if(!boolean){
      nameForm.style.backgroundColor = 'rgb(255,0 ,0, 0.2)'
      nameForm.style.boxShadow = '0 0 15px rgb(255,0 ,0, 0.2)'
    }else{
      nameForm.style.backgroundColor = 'rgb(0,204,0, 0.2)'
      nameForm.style.boxShadow = '0 0 15px rgb(0,204,0, 0.2)'
    }
  })
  descriptionForm.addEventListener('keyup', (e) =>{
    let value = e.target.value
    let boolean = validTxtInput(value, 5, 200)

    if(!boolean){
      descriptionForm.style.backgroundColor = 'rgb(255,0 ,0, 0.2)'
      descriptionForm.style.boxShadow = '0 0 15px red'
    }else{
      descriptionForm.style.backgroundColor = 'rgb(0,204,0, 0.2)'
      descriptionForm.style.boxShadow = '0 0 15px rgb(0,204,0, 0.2)'
    }
  })

  btn.addEventListener('click', () => {
    let validName = validTxtInput(nameForm.value, 4,15);
    let validDescri = validTxtInput(descriptionForm.value,5,200);
    let dateValid = validDate(dateForm.value);
    if (validName && validDescri && dateValid) {
      const formData = {
        name: nameForm.value,
        description: descriptionForm.value,
        date: dateForm.value
      };
      callback(formData);
    }else{
      if(!validName) {
        nameForm.value = '';
      }
      if(!validDescri){
        descriptionForm.value = '';
      }
      if(!dateValid){
        dateForm.value = '';
        alert(`La date doit être supérieur a celle d'aujourd'hui.`)
      }
      alert(`L'un des champs ne remplis pas les conditions.`)
    }   
  });
}