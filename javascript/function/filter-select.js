export function filterSelect(compareValue) {

  // récupère la liste des cards
  const section = document.querySelectorAll('.card')
  for (const card of section) {
    const header = card.firstElementChild;
    const title = header.firstChild.textContent;
   
    
    if (compareValue === '---') {
      card.style.display = 'flex';
    }else{
      switch (title) {
        case compareValue:
            card.style.display = 'flex'
          break;
        default:
            card.style.display = 'none'
          break;
      }
    }
  }

  
}