/*
Voici une variable nommée name dont la valeur est la chaine de caractères "reacteur" :
const name = "reacteur";
Copiez / collez le code ci-dessus dans votre fichier string-handling.js.
Vous devez ensuite créer une variable nommée newName dont la valeur sera la même que celle de name mais avec la première lettre en majuscule. Dans cet exercice, créez autant de variables que nécessaire afin de stocker différentes valeurs. Enfin, affichez la valeur de newName dans le Terminal.

Résultat attendu dans le Terminal :
Reacteur

Recommandations :
avant de commencer, prenez le temps de déterminer des étapes qui vous permettront d'arriver au résultat attendu
utilisez les méthodes .toUpperCase() et .slice()
utilisez des console.log() pour vérifier chacune des étapes
*/

const name = "reacteur";
const firstLetter = name.slice(0, 1).toUpperCase()
const worldRest = name.slice(1)

let newName = firstLetter + worldRest;
console.log(newName);

//OK

/*
Correction détaillée
Cet exercice peut être divisé en plusieurs étapes :

étape 1 : extraire la première lettre de la variable name et la stocker dans une nouvelle variable
étape 2 : dans une deuxième variable, stocker la 1ère lettre de name transformée en majuscule
étape 3 : extraire le reste de la chaine de caractères, à stocker dans une troisième variable
étape 4 : assembler la deuxième et la troisième variable dans la variable newName
const name = "reacteur";

// étape 1 : extraire la 1ère lettre de name
const firstLetter = name[0];
console.log(firstLetter); // r

// étape 2 : transformer la 1ère lettre en majuscule
const firstLetterToUpperCase = firstLetter.toUpperCase();
console.log(firstLetterToUpperCase); // R

// étape 3 : extraire le reste de la chaine de caractères
const otherLetters = name.slice(1);
console.log(otherLetters); // eacteur

// étape 4 : assembler
const newName = firstLetterToUpperCase + otherLetters;
console.log(newName); // Reacteur
*/