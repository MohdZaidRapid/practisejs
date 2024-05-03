let num = 10;
// 11235813;

function fibonacci(num) {
  let arr = [0, 1];
  for (let i = 2; i < num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  console.log(arr);
  return arr;
}

function fibonaccioptimise(num) {
  if (num <= 1) {
    return num; // Return 0 for num = 0 and 1 for num = 1
  }
  let prev = 0;
  let curr = 1;
  // 0 1 1 2 3
  for (let i = 2; i < num; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
    console.log(curr);
  }
  
  return curr;
}

// fibonacci(num);
console.log(fibonaccioptimise(num));
