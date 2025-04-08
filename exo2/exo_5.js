const size = 10;
const centre = Math.floor(size / 2);

for (let y = 0; y < size; y++) {
  let line = '';
  for (let x = 0; x < size; x++) {
    // extérieur
    if (y === 0 || y === size - 1 || x === 0 || x === size - 1) {
      line += '⬛ ';
    }
    // milieu
    else if ((y === 2 || y === size - 3) && x >= 2 && x <= size - 3) {
      line += '⬛ ';
    }
    else if ((x === 2 || x === size - 3) && y >= 2 && y <= size - 3) {
      line += '⬛ ';
    }
    // centre
    else if ((y === centre || y === centre - 1) && (x === centre || x === centre - 1)) {
      line += '⬛ ';
    }
    // remplissage blanc
    else {
      line += '⬜ ';
    }
  }
  console.log(line);
}