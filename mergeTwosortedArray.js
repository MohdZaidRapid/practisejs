let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 5, 0];

// function sortedArray(arr1, arr2) {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// }

function mergeSortedArray(arr1, arr2) {
  let arr3 = [];
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr3[k++] = arr1[i++];
    } else {
      arr3[k++] = arr2[j++];
    }
  }

  while (i < arr1.length) {
    arr3[k++] = arr1[i++];
  }

  while (j < arr2.length) {
    arr3[k++] = arr2[j++];
  }
  return arr3;
}

// console.log(sortedArray(arr1, arr2));
console.log(mergeSortedArray(arr1, arr2));
