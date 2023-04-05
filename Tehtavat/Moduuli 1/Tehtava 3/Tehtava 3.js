luku1 = parseInt(prompt('Syötä ensimmäinen luku'))
luku2 = parseInt(prompt('Syötä toinen luku'))
luku3 = parseInt(prompt('Syötä kolmas luku'))
summa = (luku1+luku2+luku3)
document.querySelector('#target').innerHTML = 'Lukujen summa on: ' + summa ;