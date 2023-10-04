export const btnAdd = (id) =>{
	const addBtn = document.createElement('button');
	addBtn.textContent = '+';
	addBtn.className= 'btn-add';
	addBtn.id = id;
	
	return addBtn
}