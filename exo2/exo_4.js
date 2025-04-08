const size = 11;
const centre = Math.floor(size / 2);
let box = true

for (let y = 0; y < size; y++) {
  let line = '';
  for (let x = 0; x < size; x++) {
        // box au centre
    if (box == true) {
        if (y >= centre - 3 && y <= centre + 3 && x >= centre - 3 && x <= centre + 3) {
            line += '⬛ ';
        }
        // border outline
        else if (y === 0 || y === size - 1 || x === 0 || x === size - 1) {
            line += '⬛ ';
        }
        // blanc intérieur
        else {
          line += '⬜ ';
        }
    } else {
        if (y === 0 || y === size - 1 || x === 0 || x === size - 1) {
            line += '⬛ ';
        }
        // croix du centre
         else if (y === x || y === size - x - 1) {
             line += '⬛ ';
        }
        // blanc intérieur
        else {
          line += '⬜ ';
        } 
    }
  } 
  console.log(line);
}