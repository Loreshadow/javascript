const size = 10;

for (let y = 0; y < size; y++) {
  let line = '';
  for (let x = 0; x < size; x++) {
    if (y === 0 || y === size - 1 || x === 0 || x === size - 1) {
      line += '⬛ '; 
    } else {
      line += '⬜ '; 
    }
  }
  console.log(line);
}