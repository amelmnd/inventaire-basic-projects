/*
Dans cet exercice, nous allons rechercher combien il y a de secondes dans 3 heures.

Déclarez une variable nommée hours dont la valeur sera le nombre d'heures, soit 3
Déclarez une variable nommée total. La valeur de cette variable sera le nombre de secondes recherché.
Déclarez d'autres variables (à vous de les nommer) afin de stocker différentes informations (nombre de minutes dans une heure, nombre de secondes dans une minute)
Affichez la valeur de la variable total dans le terminal

Résultat attendu :
10800
*/

let numberOfHours = 3;
let minutesInOneHour = 60;
let secondsInOneMinute = 60

let totalSeconds = numberOfHours * minutesInOneHour * secondsInOneMinute ;

console.log(totalSeconds);

//OK

/* 
Correction détaillée

const numberOfHours = 3;

let totalSeconds = 0;

const secondsInOneMinute = 60; 
// on déclare une variable dans laquelle on stocke le nombre de secondes qu'il y a dans une minute

const minutesInOneHour = 60; 
// on déclare une variable dans laquelle on stocke le nombre de minutes qu'il y a dans une heure

totalSeconds = numberOfHours * minutesInOneMinute * secondsInOneHour; // on assigne une nouvelle valeur à la variable totalSeconds

console.log(totalSeconds);
*/