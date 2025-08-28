/*
Déclarez une variable nommée name dont la valeur est la chaine de caractères Lisa.
Déclarez une variable nommée age dont la valeur est le nombre 30.
Déclarez une variable nommée sentence dont la valeur sera la chaine de caractères "Hi ! My name is Lisa. I'm 30.". Vous devrez utiliser les deux variables créées précédemment.
Affichez la valeur de la variable sentence.

Pour cet exercice, vous devrez utiliser l'interpolation.

Résultat attendu dans le terminal :
Hi ! My name is Lisa. I'm 30.
*/

let name = "Lisa";
let age = 30;

let sentence = `Hi ! My name is ${name}. I'm ${age}`;
console.log(sentence);

//OK