/*	Function validate date description in FR
*		Validation d'une date input. S'assurer que la date n'est pas inférieur a la date d'aujourd'hui.	
*	
*/
export function validDate(date) {
	const dateNow = new Date();
	const dateProject = new Date(date)

	return dateProject > dateNow ? true : false;
}