let arr = [
  5, 4, 3, 2, 1, 33, 55, 66, 77, 88, 98, 23, 444, 555, 0, 22, 333, 44, 555,
];

function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(sortArray(arr));
