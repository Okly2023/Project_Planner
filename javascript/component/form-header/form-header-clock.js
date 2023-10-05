import { filterSelect } from "../../function/filter-select.js"
import { createSelect } from "../select/select-btn.js"

export const clock = (formData) => {

    let main = document.querySelector('main')

    //Creating elements

    let section = document.createElement('section')
    let bigDiv = document.createElement('div')
    let div = document.createElement('div')
    let div2 = document.createElement('div')
    let div3 = document.createElement('div')
    let div4 = document.createElement('div')
    let div5 = document.createElement('div')
    let smallDiv = document.createElement('div')
    let legendDiv = document.createElement('div')
    let legendRed = document.createElement('div')
    let legendOrange = document.createElement('div')
    let legendGreen = document.createElement('div')

    let select = createSelect();
    //Adding classes

    div.classList.add('startDate')
    div2.classList.add('timeLeft')
    div3.classList.add('endDate')
    div4.classList.add('projectName')
    div5.classList.add('projectDescription')

    //AppendChilds
    
    smallDiv.appendChild(div4)
    smallDiv.appendChild(select)
    smallDiv.appendChild(div5)
    smallDiv.appendChild(div)
    bigDiv.appendChild(smallDiv)
    bigDiv.appendChild(div2)
    bigDiv.appendChild(div3)
    section.appendChild(bigDiv)
    main.appendChild(section)
    bigDiv.appendChild(legendDiv)
    legendDiv.appendChild(legendRed)
    legendDiv.appendChild(legendOrange)
    legendDiv.appendChild(legendGreen)

    //Variables

    let today = new Date()
    let promptedDate = formData.date
    let date = new Date(promptedDate)
    let calculated =  (date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);

    //textContents

    div.textContent = 'Start Date: ' + today.toLocaleDateString('fr-FR');
    div2.textContent = parseInt(calculated).toLocaleString('fr-FR') + ' days until deadline';
    div3.textContent = 'End Date: ' + date.toLocaleDateString('fr-FR');
    div4.textContent = formData.name;
    div5.textContent = formData.description;
    legendRed.textContent = 'To Do Task';
    legendOrange.textContent = 'Doing Task';
    legendGreen.textContent = 'Done Task';

    //Div styling

    div.style.color = 'white'
    div.style.borderRadius = '10px'
    div.style.padding = '10px'
    div.style.marginBottom = '20px'
    
    //Div2 styling

    div2.style.borderRadius = '10px'
    div2.style.padding = '10px'
    div2.style.marginBottom = '20px'
    
    //Div3 styling

    div3.style.color = 'white'
    div3.style.borderRadius = '10px'
    div3.style.padding = '10px'
    div3.style.marginBottom = '20px'
    
    //Div4 styling

    div4.style.marginBottom = '10px'
    div4.style.color = 'white'
    div4.style.borderRadius = '10px'
    div4.style.padding = '10px'
    div4.style.marginTop = '20px'
    
    //Div5 styling

    div5.style.backgroundColor = 'white'
    div5.style.marginBottom = '10px'
    div5.style.borderRadius = '10px'
    div5.style.padding = '10px'
    div5.style.paddingBottom = '50px'
    
    //bigDiv styling

    bigDiv.style.backgroundColor = '#d43360'
    bigDiv.style.display = 'flex'
    bigDiv.style.justifyContent = 'space-around'
    bigDiv.style.alignItems = 'flex-end'
    bigDiv.style.position = 'relative'

    //legendDiv styling

    legendDiv.style.position = 'absolute'
    legendDiv.style.top = '10px'
    legendDiv.style.right = '10px'

    //colorLegendDiv styling

    legendRed.style.backgroundColor = 'red'
    legendOrange.style.backgroundColor = 'orange'
    legendGreen.style.backgroundColor = 'green'
    legendRed.style.opacity = '0.5'
    legendOrange.style.opacity = '0.5'
    legendGreen.style.opacity = '0.5'
    legendRed.style.borderRadius = '10px'
    legendOrange.style.borderRadius = '10px'
    legendGreen.style.borderRadius = '10px'
    legendRed.style.marginBottom = '10px'
    legendOrange.style.marginBottom = '10px'
    legendRed.style.padding = '5px'
    legendOrange.style.padding = '5px'
    legendGreen.style.padding = '5px'
    legendRed.style.color = 'white'
    legendOrange.style.color = 'white'
    legendGreen.style.color = 'white'
    
    //select styling




    // Evenement
    select.addEventListener('change',(e)=>{
        filterSelect(e.target.value);
    })
}




