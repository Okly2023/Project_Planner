export const newCard = () => {
    let main = document.querySelector('main')
    let listSection = document.createElement('section')
	listSection.className = 'list-card'
    main.appendChild(listSection)
    listSection.style.marginTop = '30px'
    let bigDiv = document.createElement('div')
    bigDiv.className = 'divInputConfirm'
    let div = document.createElement('div')
    div.style.backgroundColor = 'black'
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
    div.addEventListener('click', () => {
        let newCard = document.createElement('div')
        newCard.className = 'new-card'
        listSection.appendChild(newCard)
    })
    main.appendChild(listSection)

}