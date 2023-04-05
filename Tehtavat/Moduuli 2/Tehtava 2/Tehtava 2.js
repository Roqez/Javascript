osallistujienmaara = parseInt(prompt('Syötä osallistujien määrä'))
let osallistujat = [];
for (i=1; i <=osallistujienmaara; i++){
  nimi = prompt("Syötä osallistujan nimi")
  osallistujat.push(nimi)
}
osallistujat.sort()
for (let nimi of osallistujat){
    const para = document.createElement("li");
    const node = document.createTextNode(nimi);
    para.appendChild(node);
    const element = document.getElementById("ol1");
    element.appendChild(para);
}