// Milestone 1

var cats = [
  {
    nome: 'Milo',
    age: 2,
    colour: 'black',
    gender: 'male'
  },
  {
    nome: 'Katy',
    age: 5,
    colour: 'white',
    gender: 'female'
  },
  {
    nome: 'Lilith',
    age: 8,
    colour: 'orange',
    gender: 'female'
  },
  {
    nome: 'Nutty',
    age: 10,
    colour: 'grey',
    gender: 'male'
  }
]

cats.forEach((element) => {
    console.log(`${element.nome} e' di colore ${element.colour}`);
});

// Milestone 2
// aggiungere a fianco di ogni gattino un fiocco colorato di
// rosa, se femmina, o di blu, se maschio.
// Il colore del fiocco
// deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

const female = cats.filter((element) => element.gender == 'female');
const male = cats.filter((element) => element.gender == 'male');

console.log(female);
console.log(male);

female.forEach((element) => {
  $('#lista').append(`<li class="azzurro">${element.nome} e' di colore ${element.colour} <i class="fas fa-ribbon"></i> </li>`);
});







// Milestone 3
// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio,
// inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto.
