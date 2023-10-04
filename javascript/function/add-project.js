export function addProject(callback) {
  const btn = document.getElementById('submit-project');
  const nameForm = document.getElementById('name-project');
  const descriptionForm = document.getElementById('description-project');
  const dateForm = document.getElementById('date-project-dead-line');


  btn.addEventListener('click', () => {
    const formData = {
      name: nameForm.value,
      description: descriptionForm.value,
      date: dateForm.value
    };

    // Appelez la fonction de rappel avec les données du formulaire
    callback(formData);
  });
}