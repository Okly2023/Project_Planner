import { newCard } from "../main/card/newCard.js"
import { filterSelect } from "../../function/filter-select.js"
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
    let value;

    input.addEventListener('keyup', (e) => {
        value = e.target.value
    })
    div.addEventListener('click', () => {
        newCard(value)
        input.value = ''
        value = ''
        filterSelect()
    })
    main.appendChild(listSection)

}