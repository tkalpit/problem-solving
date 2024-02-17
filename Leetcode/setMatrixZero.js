//https://leetcode.com/problems/set-matrix-zeroes/description/

//Put 0 to full row if 0 is there in a row same put 0 to full column if 0 is there in a column
const input = [
    [1, 2, 0, 4],
    [5, 8, 9, 7],
    [3, 0, 8, 6],
    [4, 8, 9, 8],
    [6, 1, 4, 9],
  ];
  
  function findAndReplaceZero(input) {
    const rows = input.length;
    const cols = input[0].length;
    const rowsWithZero = new Set();
    const colsWithZero = new Set();
  
    // Find rows and columns with zeros
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (input[i][j] === 0) {
          rowsWithZero.add(i);
          colsWithZero.add(j);
        }
      }
    }
  
    // Replace rows with zero
    for (const row of rowsWithZero) {
      for (let j = 0; j < cols; j++) {
        input[row][j] = 0;
      }
    }
  
    // Replace columns with zero
    for (const col of colsWithZero) {
      for (let i = 0; i < rows; i++) {
        input[i][col] = 0;
      }
    }
  
    return input;
  }
  
  const output = findAndReplaceZero(input);
  console.log(output);
  
  
  //output should be
  // const output = [
  //     [0, 0, 0, 0],
  //     [5, 0, 0, 7],
  //     [0, 0, 0, 0],
  //     [4, 0, 0, 8],
  //     [6, 0, 0, 9],
  //   ];