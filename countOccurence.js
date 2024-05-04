let str = "zaid";

function countOccurence(str) {
  let obj = {};

  for (let item of str) {
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }
  //   console.log(obj);
  return obj;
}

console.log(countOccurence(str));
