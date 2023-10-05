import { newTask } from "../component/main/card/newTask.js";

export function sortByDate(nameArray, elementArray) {
	const sortArray = nameArray.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
	});

	while(elementArray.firstChild){
		elementArray.firstChild.remove();
	}

	for (const item of sortArray) {
		newTask(item,elementArray)
	}
}

