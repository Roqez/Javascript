kandidaattienmaara = parseInt(prompt('Anna kandidaattien lukumäärä'))
let kandidaatit = [];
let nimi;
for (let i=1; i <= kandidaattienmaara; i++) {
  nimi = prompt('Anna nimi kandidaatille '+i)
  kandidaatit.push(
  {
    name: nimi,
    votes: 0
  }
  )
}
console.log(kandidaatit)
voters = parseInt(prompt('Anna äänestäjien lukumäärä'))
for (let i=1; i <= voters; i++) {
  vote = prompt('Anna äänestettävän kandidaatin nimi')
  for (let i of kandidaatit){
    if (vote == i.name){
      i.votes++;
    }
  }
}
kandidaatit.sort((a, b) => {
  console.log('Sortin sisällä '+kandidaatit.name)
   console.log(a, b);
   return b - a;
});

