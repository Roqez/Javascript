let numerot = [];
let numero;
do {
  numero = parseInt(prompt('Syötä numero'))
  numerot.push(numero)
} while (numero !== 0)

numerot.sort((a,b)=>b-a)
console.log(numerot)