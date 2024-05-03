let arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 158],
  [98, 99, 101],
];

let max = 0;
for (let i = 0; i < arr1.length; i++) {
  {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i][j] > max) {
        max = arr1[i][j];
      }
    }
  }
}

console.log(max);
