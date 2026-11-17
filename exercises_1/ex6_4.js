let board = '';

for (let i = 0; i < 3; i += 1) {
  let row = '';
  
  for (let j = 0; j < 3; j += 1) {
    if ((i + j) % 2 === 0) {
      row += 'x ';
    } else {
      row += 'o ';
    }
  }
  
  board += row.trim() + '\n';
}

console.log(board);