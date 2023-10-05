/* Description validate input de type TEXT. FR
* Validation des inputs qui prend en compte trois paramètres.
* Le premier pour l'input en question
* le second si celui ci n'a pas le nombre de caractère suffisant
* le troisème le nombre de caractère max
* Il y a également une vérification savoir si l'input n'est pas vide.
* La fonction retourne false si l'une des conditions n'est pas remplie pour empecher l'add 
*/

export function validTxtInput (value, charaMin, CharaMax){

	if (!value || value == '') {
		return false
	}else if(value.length < charaMin || value.length > CharaMax){
		return false
	}else{
		return true
	}
}