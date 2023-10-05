export const createSelect = () => {
    // ma création du select avec option
    
    let selectElement = document.createElement('select');
    selectElement.name = '';
    selectElement.id ='';

    var option1 = document.createElement("option");
    option1.value = "option1value";
    option1.text = "Option 1";

    var option2 = document.createElement("option");
    option2.value = "option2value";
    option2.text = "Option 2";

    var option3 = document.createElement("option");
    option3.value = "option3value";
    option3.text = "Option 3";

    var option4 = document.createElement("option");
    option4.value = "option4value";
    option4.text = "Option 4";

    var option5 = document.createElement("option");
    option5.value = "option5value";
    option5.text = "Option 5";

     selectElement.appendChild(option1);
     selectElement.appendChild(option2);
     selectElement.appendChild(option3);
     selectElement.appendChild(option4);
     selectElement.appendChild(option5);
     
    return selectElement;
}
