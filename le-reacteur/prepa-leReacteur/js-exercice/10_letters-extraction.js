/*
Voici une variable nommée word dont la valeur est la chaine de caractères "JavaScript" :
const word = "JavaScript";
Copiez / collez le code ci-dessus dans votre fichier letters-extraction.js.
Vous devez ensuite créer une variable nommée letters dont la valeur sera la concaténation de la 1ère lettre et de la 5ème lettre de word. Affichez ensuite la valeur de letters dans le Terminal.

Résultat attendu dans le Terminal :
JS

*/

const word = "JavaScript";
const firstLetter = word[0];
const fiveLetter = word[4];

const letters = firstLetter + fiveLetter;
console.log(letters);

//OK

/*
Correction proposée 

const word = "JavaScript";
const letters = word[0] + word[4];
console.log(letters);
*/