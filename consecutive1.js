let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 15, 16, 16, 16, 1, 2, 31,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 4, 5, 6, 7,
  8, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

function consecutive1count(arr) {
  let maxCount = 0;
  let currentCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      maxCount = 0;
    }
  }
  console.log(maxCount);
  return maxCount;
}

consecutive1count(arr);
