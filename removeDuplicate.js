let arr = [1, 2, 3, 4, 4, 5, 6, 6];
let uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(uniqueArr); // [1, 2, 3, 4, 5, 6]
