function closu() {
  let count = 0;
  return () => {
    count++;
    console.log(count);
  };
}

let countfun = closu();
countfun();
countfun();
countfun();
countfun();
