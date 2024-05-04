let arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 9];

function removeDuplicate(arr) {
  let arr2 = [];
  arr.map((item, index) => {
    // console.log(item);
    if (item === index) {
      console.log(item);
      arr2.push(item);
    }
    // console.log(arr2);
    return arr2;
  });
}

// console.log(removeDuplicate(arr));
removeDuplicate(arr);
