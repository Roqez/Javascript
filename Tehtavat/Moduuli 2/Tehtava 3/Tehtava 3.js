let koirat = [];
for (i=1; i <=6; i++) {
  nimi = prompt("Syötä koiran nimi")
  koirat.push(nimi)
}

koirat.sort((a,b) => b-a)

for (let nimi of koirat){
    const para = document.createElement("li");
    const node = document.createTextNode(nimi);
    para.appendChild(node);
    const element = document.getElementById("ul1");
    element.appendChild(para);
}