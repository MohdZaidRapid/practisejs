const arr = [3, 4, 5, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9];

function uniqueArray(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result ^= arr[i];
  }
  // The result here might not be a single value if the array has multiple unique values
  console.log(result);
  return [result]; // Returning as an array to maintain consistency with function signature
}

uniqueArray(arr);