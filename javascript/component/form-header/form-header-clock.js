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

    //Adding classes

    div.classList.add('startDate')
    div2.classList.add('timeLeft')
    div3.classList.add('endDate')
    div4.classList.add('projectName')
    div5.classList.add('projectDescription')

    //AppendChilds

    smallDiv.appendChild(div4)
    smallDiv.appendChild(div5)
    smallDiv.appendChild(div)
    bigDiv.appendChild(smallDiv)
    bigDiv.appendChild(div2)
    bigDiv.appendChild(div3)
    section.appendChild(bigDiv)
    main.appendChild(section)

    //Variables

    let today = new Date()
    /* let promptedDate = month + '' + day + ', ' + year */
    let promptedDate = formData.date
    let date = new Date(promptedDate)
    let calculated =  (date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);

    //textContents

    div.textContent = 'Start Date: ' + today.toLocaleDateString('fr-FR');
    div2.textContent = calculated.toLocaleString('fr-FR') + ' days until deadline';
    div3.textContent = 'End Date: ' + date.toLocaleDateString('fr-FR');
    div4.textContent = formData.name;
    div5.textContent = formData.description; // To be replaced by the two after these.
    /* div4.textContent = projectName          // Those two should have the,
    div5.textContent = projectDescription */   // information provided in the forms.

    
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

}



