let arr1 = [1, 2, 3, 55, 33, 44, 7, 2, 3, 4, 6, 7];

function largestArray(arr) {
  let sum = 0;
  arr.sort((a, b) => a - b);
  sum = arr[0] - arr[arr.length - 1];
  console.log(Math.abs(sum));
  return Math.abs(sum);
}

function largestArrayScratch(arr) {
  let sum = 0;

  for(let i=0;i<arr.length;i++){
    

  }
}

largestArray(arr1);
