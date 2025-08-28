/*
Vous devez déclarer une fonction nommée powerCalculation qui reçoit deux arguments (deux nombres) et qui doit afficher le résultat d'un calcul de puissance.
Voici l'appel de la fonction powerCalculation :
powerCalculation(2, 3);
Copiez / collez le code ci-dessus dans votre fichier power-calculation.js.

Résultat attendu dans le Terminal :
8

Vous devrez ensuite appeler la fonction powerCalculation en lui passant un nouveau tableau :
powerCalculation(5, 5);

Résultat attendu dans le Terminal :
3125

Recommandation
pour savoir comment calculer la puissance de deux nombres, rendez-vous dans le cours à l'onglet Les nombres
*/

let powerCalculation = (number1, number2) => {
  let result = number1 ** number2;
  console.log(result);
}

powerCalculation(2, 3);
powerCalculation(5, 5);

//OK

/*
Mon autres propositions

_ fonction classique
function powerCalculation(number1, number2){
  let result = number1 ** number2;
  console.log(result);
}
powerCalculation(2, 3);
powerCalculation(5, 5);

*/