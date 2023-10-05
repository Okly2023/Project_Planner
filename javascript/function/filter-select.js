export function filterSelect(compareValue) {

  // récupère la liste des cards
  const section = document.querySelectorAll('.card')
  for (const item of section) {
    const header = item.firstElementChild;
    const title = header.firstChild.textContent;
    
    if (title != compareValue) {
      const div = header.parentElement;
      div.style.display= 'none';
    }
  }
}