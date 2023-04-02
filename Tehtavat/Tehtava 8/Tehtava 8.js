alkuvuosi = parseInt(prompt('Insert the starting year'))
loppuvuosi = parseInt(prompt('Insert the ending year'))
for (let i=alkuvuosi; i <= loppuvuosi; i++) {
  if (i%4 == 0){
    const para = document.createElement("li");
    const node = document.createTextNode(i);
    para.appendChild(node);
    const element = document.getElementById("ul1");
    element.appendChild(para);
  }
      }
