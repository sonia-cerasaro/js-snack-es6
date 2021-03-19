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

// Asegno l'opacita' fiocco ai gatti femmina piu' piccoli

var gattiFemmineArray = [];

female.forEach((element) => {
  var opacitaGattoF;
  if (element.age <= 5){
    opacitaGattoF = 1
  } else {
    opacitaGattoF = 0.5
  }
  var item = {...element, opacity: opacitaGattoF}

  gattiFemmineArray.push(item);

  $('#lista').append(`<li class="rosa">${element.nome} e' di colore ${element.colour} <i class="fas fa-ribbon" style="opacity: ${opacitaGattoF}"></i> </li>`);
});

console.log(gattiFemmineArray)

// Asegno l'opacita' fiocco ai gatti maschi piu' grandi

var gattiMaschiArray = [];

male.forEach((element) => {
  var opacitaGattoM;
  if (element.age <= 5){
    opacitaGattoM = 1
  } else {
    opacitaGattoM = 0.5
  }
  var item = {...element, opacity: opacitaGattoM}

  gattiMaschiArray.push(item);

  $('#lista').append(`<li class="azzurro">${element.nome} e' di colore ${element.colour} <i class="fas fa-ribbon" style="opacity: ${opacitaGattoM}"></i> </li>`);
});

console.log(gattiMaschiArray)
