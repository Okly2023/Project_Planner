export const burgerMenu = (nameArray) => {
    let card = document.querySelector('.card')
    let select = document.createElement('select') 
    select.classList = "select"
    let burgerSelect = document.createElement('div')
    let option = document.createElement('option')

    let option2 = document.createElement('option')

    let option3 = document.createElement('option')


    card.appendChild(burgerSelect)
    burgerSelect.appendChild(select)
    select.appendChild(option)
    select.appendChild(option2)
    select.appendChild(option3)

    option.textContent = 'Name'
    option2.textContent = 'Most Recent'
    option3.textContent = 'About to be over'

    card.style.position = 'relative'
    select.style.width = '90%'
    select.style.height = '5vh'
    select.style.top = '15px'
    select.style.right = '20px'
    select.style.position = 'absolute'

    select.addEventListener("change", () => {
        for (let options in select){
            if (options = 'name') {
                nameArray.sort()
            }
        }
    })
}