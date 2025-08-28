/*
Vous devez déclarer une fonction nommée firstElement qui reçoit un argument (un tableau) et qui doit afficher le premier élément du tableau.

Voici l'appel de la fonction firstElement :
firstElement(["A", "B", "C", "D", "E"]);
Copiez / collez le code ci-dessus dans votre fichier first-element.js.

Résultat attendu dans le Terminal :
A

Vous devrez ensuite appeler la fonction firstElement en lui passant un nouveau tableau :
firstElement([50, 40, 30]);

Résultat attendu dans le Terminal :
50

Recommandation
vous pouvez nommer l'argument de la fonction firstElement comme vous le souhaitez
pour savoir comment accéder à un élément d'un tableau, rendez-vous dans le cours à l'onglet Les tableaux - Partie 1
*/


let firstElement = (array) => console.log(array[0]);

firstElement(["A", "B", "C", "D", "E"]);
firstElement([50, 40, 30]);

//OK

/*
Mes autres propositions
_ sur une ligne 
let firstElement = (array) => console.log(array[0]);
firstElement(["A", "B", "C", "D", "E"]);
firstElement([50, 40, 30]);

_ fonction classique
function firstElement (array){
    console.log(array[0]);
}
firstElement(["A", "B", "C", "D", "E"]);
firstElement([50, 40, 30]);
*/

/*
Correction proposée 
const firstElement = (tab) => {
  const element = tab[0];
  console.log(element);
};

firstElement(["A", "B", "C", "D", "E"]); // A
firstElement([false, true]); // false
*/