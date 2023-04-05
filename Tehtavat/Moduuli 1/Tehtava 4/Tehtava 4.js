name = prompt("Insert your name")
let result = Math.floor(Math.random()*4)+1;
if (result === 1){
    tupa = 'Gryffindor'
}
if (result === 2) {
  tupa = 'Slytherin'
}
if (result === 3) {
  tupa = 'Hufflepuff'
}
if (result === 4) {
  tupa = 'Ravenclaw'
}
document.querySelector('#target').innerHTML = name+', '+ 'your house is : ' + tupa ;
