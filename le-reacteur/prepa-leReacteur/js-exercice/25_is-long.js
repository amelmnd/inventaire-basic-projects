/*
Voici une fonction nommée isLong qui reçoit un argument nommé string :
const isLong = (string) => {
    // instructions de la fonction
};
isLong("JavaScript");
Copiez / collez le code ci-dessus dans votre fichier is-long.js.

Vous devez coder les instructions de la fonction isLong de manière à retourner un message dans le Terminal qui dépend de la longueur de la chaine de caractères passée à la fonction.
Si la longueur de la chaine de caractères est d'au moins 6 caractères, alors la fonction affichera : "It's a long string."
En revanche, si la longueur de la chaine de caractères est de moins de 6 caractères, alors la fonction affichera : "It's not a long string."

Résultat attendu dans le Terminal :
It's a long string.

Vous devrez ensuite appeler la fonction isLong en lui passant une nouvelle chaine de caractères :
const isLong = (string) => {
    // instructions de la fonction
};
isLong("code");

Résultat attendu dans le Terminal :
It's not a long string.

Recommandation
vous aurez besoin d'utiliser des conditions dans les instructions de la fonction
*/

const isLong = (string) => {
  if (string.length >= 6) {
    console.log("It's a long string.")
  } else {
    console.log("It's not a long string.")
  }
};

isLong("JavaScript");
isLong("code");

//OK 

/*Mon autres propositions

_ fonction classique
function isLong (string) {
    if (string.length >= 6){
        console.log("It's a long string.")
    } else {
        console.log("It's not a long string.")
    }
};
isLong("JavaScript");
isLong("code");
*/

/*
Correction proposée 
const isLong = (string) => {
  const length = string.length;

  if (length >= 6) {
    console.log("It's a long string.");
  } else {
    console.log("It's not a long string.");
  }
};

isLong("JavaScript"); // It's a long string.
isLong("code"); // It's not a long string.
*/