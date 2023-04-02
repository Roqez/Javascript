nopat = parseInt(prompt('Anna noppien lukumäärä'))
haluttusumma = parseInt(prompt('Anna haluttu summa'))

let kierros = 0
let summa = 0
let osumat = 0
function nopanheitto (){
  result = Math.floor(Math.random() * 6) + 1;
  return result
}
let result;
do {
      kierros++
      for (let i=1; i <= nopat; i++) {
        tulos = nopanheitto()
        summa = tulos + summa;
      }
        if (summa == haluttusumma) {
          osumat++;
        } summa = 0;
      } while (kierros < 10000);

const todennäköisyysprosentti = osumat / 10000 * 100;

document.querySelector('#target').innerHTML = 'Probability to get sum ' +
    ''+haluttusumma+' with '+nopat+' dice is '+ todennäköisyysprosentti+'%';