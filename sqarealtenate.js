const arr1 = [1, 2, 3];
const arr2 = [1, 4, 90];

function alternatesquare(arr1, arr2) {
  for (let i = 0; i <= arr1.length - 1; i++) {
    console.log(arr1[i] * arr1[i]);
    console.log(arr2[i]);
    if (arr2[i] !== arr1[i] * arr1[i]) {
      console.log(arr1[i]);
      console.log(arr2[i]);
      return false;
    }
  }
  return true;
}

console.log(alternatesquare(arr1, arr2));
