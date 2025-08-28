/*
Vous devez afficher les nombres de 9 à 0 dans le Terminal.
Commencez par réaliser cet exercice en utilisant une boucle while. Réécrivez ensuite votre programme en utilisant cette fois-ci une boucle for.

Résultat attendu dans le Terminal :
9
8
7
6
5
4
3
2
1
0

Recommandations
pour la boucle while, déclarez une variable nommée number et assignez-lui comme valeur le 1er nombre à afficher
pour la boucle for, initialisez un compteur nommé i en lui assignant comme valeur le 1er nombre à afficher
les valeurs de number et de i devront décrémenter à chaque tour. Utilisez pour cela les syntaxes suivantes :
number-- (pour la boucle while)
i-- (pour la boucle for)
*/

/*
let index = 9;

while (index >= 0) {
  console.log(index);
  index--;
}
*/

for (let i = 9; i >= 0; i--) {
  console.log(i);
}

//OK
