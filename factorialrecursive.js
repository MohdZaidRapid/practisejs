let n = 3;
function fact(n) {
  if (n == 1) {
    return 1;
  }

  if (n == 2) {
    return 2;
  }

  return n * fact(n - 1);
}

// 5*3*2*1

console.log(fact(10));
