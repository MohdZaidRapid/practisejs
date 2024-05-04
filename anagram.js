// let str1 = "listen";
// let str2 = "silent";

// function isAnagram(str1, str2) {
//   const sortedStr1 = str1.split("").sort().join("");

//   const sortedStr2 = str2.split("").sort().join("");

//   return sortedStr1 === sortedStr2;
// }

// function anagram(str1, str2) {
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// }

// console.log(isAnagram(str1, str2));
// console.log(anagram(str1, str2));
// console.log("a".charCodeAt(0) - "0".charCodeAt(0));

// function countOccurence(str) {
//   const obj = {};

//   for (const item of str) {
//     if (obj[item]) {
//       obj[item]++;
//     } else {
//       obj[item] = 1;
//     }
//   }
//   return obj;
// }
// // const obj1 = countOccurence(str1);
// // console.log(obj1);

// function objectsAreEqual(obj1, obj2) {
//   const str1 = JSON.stringify(obj1);
//   const str2 = JSON.stringify(obj2);
//   return str1 === str2;
// }

// function anagramsCount(str1, str2) {
//   let cnt1 = countOccurence(str1);
//   let cnt2 = countOccurence(str2);

//   return objectsAreEqual(cnt1, cnt2);
// }

// let s1 = anagramsCount(str1, str2);
// console.log(s1);

// zaid
function countOccurrence(str) {
  const obj = {};

  for (const item of str) {
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }
  return obj;
}

// function objectsAreEqual(obj1, obj2) {
//   const str1 = JSON.stringify(obj1);
//   const str2 = JSON.stringify(obj2);
//   return str1 === str2;
// }

function anagramsCount(str1, str2) {
  let cnt1 = countOccurrence(str1);
  let cnt2 = countOccurrence(str2);
  console.log(cnt1);

  for (const item in cnt1) {
    // if(cnt1[item])
    if (cnt1[item] !== cnt2[item]) {
      return false;
    }
  }
  return true;

  // Compare the two objects
}

let str1 = "listen";
let str2 = "silent";
let s1 = anagramsCount(str1, str2);
console.log(s1); // Output: true
