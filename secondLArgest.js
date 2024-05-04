let arr1 = [1, 2, 3, 5, 33, 44, 7, 2, 3, 4, 6, 7];

function secondLargest(arr) {
  let max = 0;
  let secondMax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] <= max && arr[i] >= secondMax && arr[i] != max) {
      secondMax = arr[i];
    }
  }
  console.log(secondMax);
  return secondMax;
}

secondLargest(arr1);
