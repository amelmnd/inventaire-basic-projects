/*
Voici une variable nommée colors dont la valeur est un tableau :
const colors = ["grey", "purple", "yellow", "orange", "red", "blue"];
Copiez / collez le code ci-dessus dans votre fichier array-handling-v1.js.

Vous devez faire toutes les modifications nécessaires afin d'obtenir le tableau suivant :
[ 'pink', 'purple', 'yellow', 'orange', 'red', 'black' ]

Recommandations :
avant de commencer, prenez le temps de déterminer des étapes qui vous permettront d'arriver au résultat attendu
il n'est pas nécessaire de déclarer de nouvelles variables ; vous pouvez modifiez la variable colors directement
utilisez les méthodes .unshift(), .pop(), .push() et .shift()
*/

const colors = ["grey", "purple", "yellow", "orange", "red", "blue"];
console.log(colors)

colors.shift();
colors.unshift('pink')
colors.pop();
colors.push("black");
console.log(colors);

//OK

/*
Correction détaillée

Cet exercice peut être divisé en plusieurs étapes :

étape 1 : supprimer le premier élément du tableau avec .shift()
étape 2 : supprimer le dernier élément du tableau avec .pop()
étape 3 : ajouter au début du tableau l'élément "pink" avec .unshift()
étape 4 : ajouter à la fin du tableau l'élément "black" avec .push()
const colors = ["grey", "purple", "yellow", "orange", "red", "blue"];

colors.shift();
colors.pop();
colors.unshift("pink");
colors.push("black");

console.log(colors);
 */