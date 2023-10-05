export const selectOption = (value) =>{
	const option = document.createElement('option');
	option.value = value
	option.textContent = value


	return option;
}

