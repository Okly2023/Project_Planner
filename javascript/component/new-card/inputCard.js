import { newCard } from "../main/card/newCard.js"
import { filterSelect } from "../../function/filter-select.js"
import { validTxtInput } from "../../function/validate-input-txt.js"
import { selectOption } from "../select/select-otpion.js"
export const inputCard = () => {
    let main = document.querySelector('main')
    let listSection = document.querySelector('.list-card')
    main.appendChild(listSection)
    listSection.style.marginTop = '30px'
    let bigDiv = document.createElement('div')
    bigDiv.className = 'divInputConfirm'
    let div = document.createElement('div')

    div.textContent = '+'
    div.style.cursor = 'pointer'
    div.style.display = 'flex'
    div.style.justifyContent = 'center'
    div.style.alignItems = 'center'
    div.style.width = '30px'
    div.style.height = '30px'
    let input = document.createElement('input')
    bigDiv.appendChild(input)
    bigDiv.appendChild(div)
    listSection.appendChild(bigDiv)
    input.style.height = '4vh'

    listSection.style.display = 'flex'
    listSection.style.flexDirection = 'row'
    listSection.style.overflow = 'auto'
    
    bigDiv.style.display = 'flex'
    bigDiv.style.flexDirection = 'row-reverse'
    bigDiv.style.width = 'fit-content'
    let value, isValidTxt;

    
    
    input.addEventListener('keyup', (e) => {
        value = e.target.value
        isValidTxt = validTxtInput(value, 4, 15);
        if(!isValidTxt){
            input.style.backgroundColor = 'rgb(255,0 ,0, 0.2)'
            input.style.boxShadow = '0 0 15px red'
          }else{
            input.style.backgroundColor = 'rgb(0,204,0, 0.2)'
            input.style.boxShadow = '0 0 15px rgb(0,204,0, 0.2)'
          }
    })

    div.addEventListener('click', () => {
        const select = document.getElementById('filter-select')
        
        
        if (isValidTxt) {
            const option = selectOption(input.value);
            select.appendChild(option);

            newCard(value);
            input.value = ''
            value = ''
        }else{
            alert('La valeur est incorrect.')
        }
       
    })
    main.appendChild(listSection)
    input.className= 'input-text';
    div.className= 'btn-add';

}