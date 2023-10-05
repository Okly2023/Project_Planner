import { newTask } from "../component/main/card/newTask.js";

export function sortByName(nameArray, elementArray) {	
	const sortArray = nameArray.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return nameA.localeCompare(nameB);
	});

	console.log(elementArray);
	while(elementArray.firstChild){
		elementArray.firstChild.remove();
	}

	for (const item of sortArray) {
		newTask(item,elementArray)
	}
}