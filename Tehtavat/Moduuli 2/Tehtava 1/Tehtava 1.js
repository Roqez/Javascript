let luvut =[];
for (let i=1; i <= 5; i++) {
  let luku = parseInt(prompt('Syötä luku'))
  luvut.push(luku)
}
luvut.sort((a,b) => b-a)
document.querySelector('#target').innerHTML = luvut;