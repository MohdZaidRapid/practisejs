let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function flatArray(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      newArray.push(arr[i][j]);
    }
  }
  console.log(newArray);
}

flatArray(arr);

// console.log(arr.flat());
