export const cards = () => {
    let main = document.querySelector('main')

    let section = document.createElement('section')
    let div = document.createElement('div')
    section.appendChild(div)
    main.appendChild(section)
    div.style.backgroundColor = 'grey' //Just to see it
    div.style.height = '50vh'
    div.style.width = '100%'

}