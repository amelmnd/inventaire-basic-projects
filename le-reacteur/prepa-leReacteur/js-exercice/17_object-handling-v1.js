/*
Voici un objet contenant des informations sur un film :
const movie = {
  title: "Passengers",
  year: 2016,
  duration: "116 minutes",
  country: "United States",
  director: "Morten Tyldum",
  actors: [
    "Jennifer Lawrence",
    "Chris Pratt",
    "Michael Sheen",
    "Laurence Fishburne",
  ],
};
Copiez / collez le code ci-dessus dans votre fichier object-handling-v1.js.

En utilisant la fonction console.log(), affichez dans votre Terminal :
Passengers
2016
Jennifer Lawrence
*/


const movie = {
  title: "Passengers",
  year: 2016,
  duration: "116 minutes",
  country: "United States",
  director: "Morten Tyldum",
  actors: [
    "Jennifer Lawrence",
    "Chris Pratt",
    "Michael Sheen",
    "Laurence Fishburne",
  ],
};
console.log(movie.title);
console.log(movie.year);
console.log(movie.actors[0]);


//OK

/*
Correction proposée 

const movie = {
  title: "Passengers",
  year: 2016,
  duration: "116 minutes",
  country: "United States",
  director: "Morten Tyldum",
  actors: [
    "Jennifer Lawrence",
    "Chris Pratt",
    "Michael Sheen",
    "Laurence Fishburne",
    "Andy García",
  ],
};

// Passengers
console.log(movie.title);
console.log(movie["title"]);

// 2016
console.log(movie.year);
console.log(movie["year"]);

// Jennifer Lawrence
console.log(movie.actors[0]);
console.log(movie["actors"][0]);
 */