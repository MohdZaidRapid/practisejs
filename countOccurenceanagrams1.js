let str1 = "Silent";
let str2 = "listeN";

function countOccurence(str) {
  const obj = {};

  for (const item of str) {
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }
  //   console.log(obj);
  return obj;
}

function checkAnagrams(str1, str2) {
  const obj1 = countOccurence(str1.toLowerCase());
  const obj2 = countOccurence(str2.toLowerCase());

  for (const item in obj1) {
    if (obj1[item] !== obj2[item]) {
      //   console.log("hello");
      return false;
    }
  }
  return true;
}

// countOccurence(str1);
console.log(checkAnagrams(str1, str2));
