import { selectOption } from "./select-otpion.js";

export const createSelect = () => {
    // ma création du select avec option
    
    let selectElement = document.createElement('select');
    selectElement.name = 'filter';
    selectElement.id ='filter-select';

    const option = selectOption('---');
    option.selected;
    
    selectElement.appendChild(option);

    return selectElement;
}
