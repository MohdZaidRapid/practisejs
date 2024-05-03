const arr = [1, 2, 3, 4, 5];
const str = "zaid";

function reverseArray(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }

  console.log(arr);
  return arr;
}

function reverseString(str) {
  let str1 = str.split("");
  let i = 0,
    j = str1.length - 1;

  while (i < j) {
    let temp = str1[i];
    str1[i] = str1[j];
    str1[j] = temp;
    i++;
    j--;
  }

  str = str1.join("");
  console.log(str);
}

reverseString(str);
reverseArray(arr);
