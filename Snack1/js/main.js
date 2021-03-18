// $(document).ready(function(){
//
// const bikes = [];
//
// bikes.push({
//   nome: 'Mountain bike',
//   peso: 3
// });
//
// bikes.push({
//   nome: 'BMX',
//   peso: 5
// });
//
// bikes.push({
//   nome: 'Graziella',
//   peso: 2
// });
//
// let min = bikes[0].peso;
// var index = 0;
// for (let i = 1; i < bikes.length; i++){
//   if (bikes[i].peso < min){
//     min = bikes[i].peso;
//     index = i;
//   }
// }
//   console.log(`La bici con il peso minore e : ${bikes[index].nome} ed il suo peso e' ${min}`);
// });

// DESTRUTTURIZZATA

const bici = [
  {
    name: 'Scott',
    peso: 10
  },
  {
    name: 'Mountain bike',
    peso: 8
  },
  {
    name: 'Lina',
    peso: 1
  }
];

let biciLeggera = bici[0];

for (let i = 0; i < bikes.length; i++){
  if (bici[i].peso < biciLeggera.peso){
    biciLeggera = bici[i];
  }

  console.log(biciLeggera);

  const {peso, nome} = biciLeggera;
  console.log(peso);
  document.getElementById('container').innerHTML =
  `<ul>
      <li>Nome: ${name}</li>
      <li>Peso: ${peso}</li>
  </ul>`;
