export function addProject(callback) {
  const btn = document.getElementById('submit-project');
  const nameForm = document.getElementById('name-project');
  const descriptionForm = document.getElementById('description-project');
  const dateForm = document.getElementById('date-project-dead-line');

  let description, name, date;

  nameForm.addEventListener('keyup', (e) => {
    name = e.target.value;
  });

  descriptionForm.addEventListener('keyup', (e) => {
    description = e.target.value;
  });

  dateForm.addEventListener('keyup', (e) => {
    date = e.target.value;
  });

  btn.addEventListener('click', (e) => {
    const formData = {
      name: name,
      description: description,
      date: date
    };

    // Appelez la fonction de rappel avec les données du formulaire
    callback(formData);
  });
}