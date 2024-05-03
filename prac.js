const arr = [
  5, 3, 9, 16, 2, 8, 67, 87, 98, 23, 43, 56, 78, 12, 3, 4, 5, 6, 7, 8, 101, 34,
  56, 78, 98, 90,
];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
let ans = 0;
for (const num of arr) {
  ans += num;
}
console.log(ans)
// function sortArray(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp;
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   console.log(arr);
//   return arr;
// }

// sortArray(arr);
// for (const num of arr) {
//   for (const num of arr) {
//     if (num > arr[j + 1]) {
//       let temp;
//       temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
