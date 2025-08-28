/*
Voici une variable nommée language :

const language = "javascript";
Copiez / collez le code ci-dessus dans votre fichier capital-letters.js.

Vous devez afficher toutes les lettres de la chaîne de caractères en majuscules dans le Terminal.
Commencez par réaliser cet exercice en utilisant une boucle while. Réécrivez ensuite votre programme en utilisant cette fois-ci une boucle for.

Résultat attendu dans le Terminal :
J
A
V
A
S
C
R
I
P
T

Recommandations
pour la boucle while, déclarez une variable nommée number et assignez-lui comme valeur la position de la première lettre à afficher
pour la boucle for, initialisez un compteur nommé i en lui assignant comme valeur la position de la première lettre à afficher
*/

const language = "javascript";

let index = 0

while (index < language.length) {
    console.log(language[index].toUpperCase());
    index++
}

/*
for (let i = 0; i < language.length; i++) {
    console.log(language[i].toUpperCase());    
}
*/

//OK