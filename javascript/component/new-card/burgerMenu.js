import { sortByDate } from "../../function/sort-by-date.js"
import { sortByName } from "../../function/sort-by-name.js"

export const burgerMenu = (nameArray, element, bodyCard) => {

    let select = document.createElement('select') 
    select.classList = "select"
    select.id = 'burger-menu-select'
    let option = document.createElement('option')

    let option2 = document.createElement('option')

    let option3 = document.createElement('option')
    
    select.appendChild(option)
    select.appendChild(option2)
    select.appendChild(option3)
    
    option.textContent = 'Name'
    option2.textContent = 'Most Recent'
    option3.textContent = 'About to be over'
    
    select.style.height = '5vh'
    select.style.top = '-20px'
    select.style.right = '20px'
    select.style.position = 'absolute'
    select.style.display = 'none'
    
    select.addEventListener("change", (e) => {

        switch (e.target.value) {
            case 'Name':
                sortByName(nameArray,bodyCard)
                
                break;
            case 'Most Recent':
                sortByDate(nameArray,bodyCard)
                    
                break;
        
            default:
                break;
        }
        
        element.style.display = 'flex';
        select.style.display = 'none';
    })

    return select
}