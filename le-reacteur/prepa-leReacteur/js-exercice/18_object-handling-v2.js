/*
Voici un tableau d'objets contenant des informations sur les acteurs du film Passengers :
const actors = [
  {
    name: "Jennifer Lawrence",
    yearOfBirth: 1990,
    nationality: "american",
    character: "Aurora Lane",
    movies: ["Dark Phoenix", "Red Sparrow", "Mother!", "X-men : Apocalypse"],
  },
  {
    name: "Chris Pratt",
    yearOfBirth: 1979,
    nationality: "american",
    character: "Jim Preston",
    movies: [
      "Guardian of the Galaxy Vol.2",
      "Jurassic World : Fallen Kingdom",
      "Avengers : Endgame",
    ],
  },
  {
    name: "Laurence Fishburne",
    yearOfBirth: 1961,
    nationality: "american",
    character: "Gus Mancuso",
    movies: [
      "John Wick: Chapter 3 – Parabellum",
      "Batman vs Superman: Dawn of Justice",
    ],
  },
];
Copiez / collez le code ci-dessus dans votre fichier object-handling-v2.js.

En utilisant la fonction console.log(), affichez dans votre Terminal :
Jennifer Lawrence
Jim Preston
Avengers : Endgame
1961
*/


const actors = [{
    name: "Jennifer Lawrence",
    yearOfBirth: 1990,
    nationality: "american",
    character: "Aurora Lane",
    movies: ["Dark Phoenix", "Red Sparrow", "Mother!", "X-men : Apocalypse"],
  },
  {
    name: "Chris Pratt",
    yearOfBirth: 1979,
    nationality: "american",
    character: "Jim Preston",
    movies: [
      "Guardian of the Galaxy Vol.2",
      "Jurassic World : Fallen Kingdom",
      "Avengers : Endgame",
    ],
  },
  {
    name: "Laurence Fishburne",
    yearOfBirth: 1961,
    nationality: "american",
    character: "Gus Mancuso",
    movies: [
      "John Wick: Chapter 3 – Parabellum",
      "Batman vs Superman: Dawn of Justice",
    ],
  },
];
console.log(actors[0].name);
console.log(actors[1].character);
console.log(actors[1].movies[2]);
console.log(actors[2].yearOfBirth);


//OK

/*
Correction proposée 

const actors = [
  {
    name: "Jennifer Lawrence",
    yearOfBirth: 1990,
    nationality: "american",
    character: "Aurora Lane",
    movies: ["Dark Phoenix", "Red Sparrow", "Mother!", "X-men : Apocalypse"],
  },
  {
    name: "Chris Pratt",
    yearOfBirth: 1979,
    nationality: "american",
    character: "Jim Preston",
    movies: [
      "Guardian of the Galaxy Vol.2",
      "Jurassic World : Fallen Kingdom",
      "Avengers : Endgame",
    ],
  },
  {
    name: "Laurence Fishburne",
    yearOfBirth: 1961,
    nationality: "american",
    character: "Gus Mancuso",
    movies: [
      "John Wick: Chapter 3 – Parabellum",
      "Batman vs Superman: Dawn of Justice",
    ],
  },
];

// Jennifer Lawrence
console.log(actors[0].name); 
console.log(actors[0]["name"]);

// Jim Preston
console.log(actors[1].character); 
console.log(actors[1]["character"]);

// Avengers : Endgame
console.log(actors[1].movies[2]); 
console.log(actors[1]["movies"][2]);

// 1961
console.log(actors[2].yearOfBirth); 
console.log(actors[2]["yearOfBirth"]);
*/