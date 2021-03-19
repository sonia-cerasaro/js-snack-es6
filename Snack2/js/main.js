// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti,
// falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando
// la destrutturazione creiamo un nuovo array i
// cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console

var squadre = [
  {
    nome: "Dragons",
    puntifatti: 0,
    falli: 0
  },
  {
    nome: "Goblins",
    puntifatti: 0,
    falli: 0
  },
  {
    nome: "Trolls",
    puntifatti: 0,
    falli: 0
  }
];

let risultati = [];

for (let i = 0; i < squadre.length; i++) {
  squadre[i].puntifatti = randomNumberInRange(0, 10);
  squadre[i].falli = randomNumberInRange(0, 10);

  const {nome, falli} = squadre[i];
  risultati.push(nome, falli);
}

  console.log(risultati);

  // FUNCTION

function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri!");
  } else {
    return Math.floor(Math.random()* (max - min) + min);
  }
}

// ESEMPIO

// const nest = {
//   inizio: { a: 2, b: 4 },
//   fine: { c: 6, d: 5 }
// };
//
// const { inizio : {a: inizioA, b : inizioB }, fine : {c: fineB, d:fineD }} = nest;
//
// console.log(inizioA);
// console.log(fineD);
